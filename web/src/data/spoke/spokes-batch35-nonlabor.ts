import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 이혼 2 + 교통사고 2 + 사기 2 + 회생 1 + 파산 1 + 전세 2 + 상속 1 (batch35)
// ───────────────────────────────────────────────────────────────────────────────

// 고유 존재 이유:
// 1. 이 페이지는 [혼전합의서를 작성하려는 예비부부 또는 이혼 시 합의서 효력이 궁금한 배우자]의 [부부재산계약의 법적 효력을 확인하려는 상황]에서 [유효 요건과 재산분할 관계 정리]를 돕는 페이지다.
// 2. 이 페이지는 [사기결혼 피해자 또는 배우자의 중대한 기만을 발견한 배우자]의 [혼인취소를 검토하는 상황]에서 [취소 사유·절차·효과 안내]를 돕는 페이지다.
// 3. 이 페이지는 [도로 공사 구간에서 사고를 당한 운전자]의 [보상 책임 주체와 과실 비율이 궁금한 상황]에서 [시공사·발주처·운전자별 책임 판단 기준 정리]를 돕는 페이지다.
// 4. 이 페이지는 [고령 운전자 사고 피해자 또는 고령 운전자 가족]의 [과실 비율과 면허 기준이 궁금한 상황]에서 [고령 운전자 특수 과실 기준과 면허 제도 안내]를 돕는 페이지다.
// 5. 이 페이지는 [허위 매물에 속아 계약금을 날린 피해자]의 [형사고소와 피해 회복을 준비하는 상황]에서 [유형별 대응 절차 4단계 안내]를 돕는 페이지다.
// 6. 이 페이지는 [SNS 리딩방·코인 투자 사기 피해자]의 [증거 확보와 피해 구제를 시작하려는 상황]에서 [계좌 동결·형사고소·민사소송 절차 안내]를 돕는 페이지다.
// 7. 이 페이지는 [도박으로 채무가 쌓인 채무자]의 [개인회생 신청 가능 여부가 궁금한 상황]에서 [면책 불허가 사유와 인가 기준 안내]를 돕는 페이지다.
// 8. 이 페이지는 [폐업을 앞둔 소상공인·자영업자]의 [파산 신청 요건과 면책 절차가 궁금한 상황]에서 [파산 5단계 절차와 재기 방법 안내]를 돕는 페이지다.
// 9. 이 페이지는 [전세보증금 반환보증보험 가입을 검토하는 세입자]의 [가입 조건과 청구 절차가 궁금한 상황]에서 [보증보험 가입 요건과 사고 시 청구 절차 안내]를 돕는 페이지다.
// 10. 이 페이지는 [전세에서 월세로 전환을 요구받은 세입자]의 [적정 전환율과 거부 가능 여부가 궁금한 상황]에서 [법적 상한 전환율 계산과 분쟁 대응 안내]를 돕는 페이지다.
// 11. 이 페이지는 [상속 분할 후 은닉 재산을 발견한 상속인]의 [추가 분할 청구 가능 여부와 절차가 궁금한 상황]에서 [추가 분할 요건·시효·은닉자 제재 안내]를 돕는 페이지다.

export const spokesBatch35Nonlabor: SpokePage[] = [
  // ── 이혼 1. 혼전합의서·부부재산계약 효력과 이혼 시 적용 ──
  {
    domain: 'divorce',
    slug: 'divorce-prenuptial-contract-validity',
    keyword: '혼전합의서 부부재산계약 효력 이혼 재산분할',
    questionKeyword: '혼전합의서를 작성했는데 이혼 시 효력이 있나요?',
    ctaKeyword: '혼전합의서 재산분할 효력 상담',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '혼전합의서·부부재산계약 효력과 이혼 시 적용 | 로앤가이드',
      description:
        '혼전합의서나 부부재산계약을 작성했는데 이혼 시 효력이 유지되는지 궁금하다면 유효 요건과 재산분할 관계를 지금 확인하세요',
    },
    intro:
      '<p>결혼 전 "각자 재산은 각자 것"이라고 합의서를 썼는데, 이혼 소송에서 상대방이 재산분할을 청구합니다. 혼전합의서가 법적으로 유효한 건지, 재산분할에서 어떻게 작용하는지 확인이 필요합니다. 민법 제829조에 따른 부부재산계약은 일정 요건을 갖춰야 제3자에게도 효력이 미치며, 합의서가 없을 때는 법정재산제가 적용됩니다. 혼전합의서의 법적 성격과 이혼 시 적용 기준을 정리해보세요.</p>',
    sections: [
      {
        title: '부부재산계약의 법적 성격',
        content:
          '<p><strong style="color:#1e3a5f">민법 제829조는 부부가 혼인 성립 전에 재산에 관하여 약정한 것을 부부재산계약이라 하며, 혼인신고 전 등기를 해야 제3자에게 대항할 수 있습니다.</strong></p>\n<ul>\n<li><strong>약정재산제</strong> — 부부가 혼인 전 재산의 귀속·관리·처분에 관해 정한 계약입니다. 이를 "약정재산제"라 하며, 법정재산제보다 우선 적용됩니다.</li>\n<li><strong>등기 요건</strong> — 부부재산계약은 혼인신고 전에 그 등기를 하여야 제3자에 대항할 수 있습니다(민법 제829조 제2항). 등기 없이 작성한 합의서는 부부 사이에서는 유효하지만 채권자 등 제3자에게는 주장할 수 없습니다.</li>\n<li><strong>변경 제한</strong> — 부부재산계약은 혼인 중 변경하지 못하는 것이 원칙입니다(민법 제829조 제3항). 정당한 사유가 있으면 법원의 허가를 받아 변경할 수 있지만, 사례가 매우 드뭅니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 부부재산계약은 혼인신고 전 등기까지 마쳐야 완전한 효력이 발생합니다. 단순 합의서 작성만으로는 부족할 수 있습니다.</blockquote>',
      },
      {
        title: '혼전합의서 유효 요건',
        content:
          '<p><strong style="color:#1e3a5f">혼전합의서가 법적 효력을 갖추려면 양 당사자의 자유로운 의사, 구체적인 내용, 공증 또는 등기가 필요합니다.</strong></p>\n<ul>\n<li><strong>자유로운 의사 합치</strong> — 강박, 사기, 착오에 의한 합의는 취소할 수 있습니다. 양쪽이 충분히 내용을 이해하고 서명해야 합니다.</li>\n<li><strong>구체적 내용 기재</strong> — "각자 재산은 각자 것"이라는 포괄적 표현보다 "혼인 전 취득 부동산은 명의자 단독 소유"처럼 구체적으로 기재해야 분쟁 시 인정받기 쉽습니다.</li>\n<li><strong>공증의 효과</strong> — 공증을 받으면 작성 시점과 내용의 진정성을 입증하기 용이합니다. 법적 필수는 아니지만 분쟁 예방에 효과적입니다.</li>\n<li><strong>선량한 풍속 위반 여부</strong> — "이혼 시 재산분할을 일체 청구하지 않는다"는 조항은 재산분할청구권을 전면 포기하는 것으로 선량한 풍속에 반하여 무효가 될 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 합의서의 유효 여부와 재산분할 영향을 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '혼전합의서와 재산분할 관계',
        content:
          '<p><strong style="color:#1e3a5f">혼전합의서가 있더라도 법원은 재산분할 청구에서 합의서 내용을 참고하되, 구체적 타당성에 따라 조정할 수 있습니다.</strong></p>\n<ul>\n<li><strong>합의서의 참고적 효력</strong> — 법원은 혼전합의서를 재산분할 시 하나의 참고 자료로 봅니다. 합의서가 당사자 간 의사를 반영하는 것이므로 존중하되, 혼인 기간·기여도·양육 사정 등을 종합 고려합니다.</li>\n<li><strong>기여도 재평가</strong> — 혼인 기간이 10년 이상이거나 일방이 가사·육아에 전념한 경우, 합의서와 달리 기여도를 새로 평가하여 분할 비율을 조정할 수 있습니다.</li>\n<li><strong>사정변경 원칙</strong> — 합의서 작성 당시와 이혼 시점의 경제 상황이 현저히 달라진 경우, 법원이 합의서 내용을 그대로 적용하지 않을 수 있습니다.</li>\n<li><strong>위자료와의 구별</strong> — 재산분할과 위자료는 별개의 청구입니다. 합의서에서 재산분할만 정했다면 위자료는 별도로 청구할 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 혼전합의서가 있어도 재산분할 청구 자체를 막을 수는 없으며, 법원이 최종 판단합니다.</blockquote>',
      },
      {
        title: '합의서 없을 때 재산분할 기준',
        content:
          '<p><strong style="color:#1e3a5f">부부재산계약이 없으면 민법상 법정재산제가 적용되어, 혼인 중 형성한 재산은 부부 공동의 노력으로 추정됩니다.</strong></p>\n<ul>\n<li><strong>법정재산제(별산제)</strong> — 민법 제830조에 따라 부부 각자의 명의로 된 재산은 각자의 특유재산이지만, 이혼 시 재산분할에서는 혼인 중 증가분이 분할 대상이 됩니다.</li>\n<li><strong>기여도 산정</strong> — 맞벌이 부부는 통상 50:50, 외벌이 부부는 가사·육아 기여를 감안하여 30~50% 범위에서 결정됩니다. 최근 판례는 전업주부의 기여도를 높이 인정하는 추세입니다.</li>\n<li><strong>특유재산 제외</strong> — 혼인 전 취득 재산, 상속·증여로 받은 재산은 원칙적으로 분할 대상에서 제외됩니다. 다만 유지·관리에 상대방이 기여했다면 일부 분할 대상이 될 수 있습니다.</li>\n<li><strong>채무 분담</strong> — 혼인 중 공동생활을 위해 진 빚은 재산분할 시 공제되며, 개인 채무는 명의자가 부담합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 합의서가 없더라도 재산 형성에 기여한 증거(급여 이체 내역, 양육 기록 등)를 확보하면 유리한 분할을 받을 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 혼인 파탄 후 재산 처분과 기여도 판단',
        summary:
          '대법원 2024므13669 사건(대법원, 2025.10.16 선고)에서 법원은 혼인관계가 파탄된 이후 부부 일방이 공동재산의 형성·유지와 관련 없이 적극재산을 처분하였다면, 해당 재산을 사실심 변론종결일에 그대로 보유한 것으로 보아 분할 대상에 포함할 수 있다고 판시했습니다.',
        takeaway:
          '혼전합의서 유무와 관계없이, 이혼 과정에서 일방적으로 재산을 처분하면 법원이 해당 재산을 여전히 보유한 것으로 간주합니다. 합의서 작성 여부보다 실제 기여도와 재산 변동 증거가 중요합니다.',
      },
    ],
    faq: [
      {
        question: '혼전합의서를 공증받아야 효력이 있나요?',
        answer:
          '<strong>공증이 법적 필수 요건은 아니지만, 분쟁 시 작성 시점과 내용의 진정성을 입증하는 데 매우 유리합니다.</strong> 공증 없이 사적으로 작성한 합의서도 부부 사이에서는 유효하지만, 상대방이 "서명한 적 없다"고 다투면 입증이 어려워집니다.',
      },
      {
        question: '부부재산계약 등기를 안 하면 합의서가 무효인가요?',
        answer:
          '<strong>등기를 하지 않아도 부부 사이에서는 유효합니다.</strong> 다만 제3자(채권자 등)에게 대항할 수 없습니다. 예를 들어 배우자의 채권자가 공동재산에 강제집행을 할 때, 등기 없는 합의서로는 막을 수 없습니다.',
      },
      {
        question: '이혼 시 법원이 혼전합의서를 무시할 수 있나요?',
        answer:
          '<strong>법원은 혼전합의서를 참고하되, 혼인 기간·기여도·양육 상황을 종합 고려하여 재산분할 비율을 조정할 수 있습니다.</strong> 특히 합의서 내용이 일방에게 현저히 불리하거나 선량한 풍속에 반하면 효력이 부정될 수 있습니다.',
      },
      {
        question: '혼인 후에 부부재산계약을 작성해도 유효한가요?',
        answer:
          '<strong>민법상 부부재산계약은 혼인 전에 체결해야 합니다.</strong> 혼인 후 작성한 재산 관련 합의서는 부부재산계약이 아니라 일반 계약으로 취급되며, 이혼 시 재산분할에서 참고 자료 정도로만 활용될 수 있습니다.',
      },
    ],
    cta: {
      text: '혼전합의서 효력 여부, AI가 분석해드립니다',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '재산분할 범위와 기준', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '배우자 재산 은닉 추적법', href: '/guide/divorce/divorce-hidden-income-asset-investigation' },
      { label: '이혼 재산분할 기여도 판단', href: '/guide/divorce/property-division-ratio-key-factors' },
      { label: '협의이혼 준비서류 체크리스트', href: '/guide/divorce/consensual-divorce-required-documents-checklist' },
      { label: '위자료 산정 기준', href: '/guide/divorce/divorce-alimony-calculation-standard' },
    ],
  },

  // ── 이혼 2. 혼인취소 사유와 절차 ──
  {
    domain: 'divorce',
    slug: 'divorce-marriage-annulment-fraud',
    keyword: '혼인취소 사유 절차 사기결혼',
    questionKeyword: '사기결혼을 당했는데 혼인취소가 가능한가요?',
    ctaKeyword: '혼인취소 사유 절차 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '혼인취소 사유와 절차 총정리 | 사기결혼 대응 | 로앤가이드',
      description:
        '배우자가 중대한 사실을 숨기고 결혼한 사기결혼이 의심된다면 혼인취소 사유와 청구 절차를 지금 확인하세요',
    },
    intro:
      '<p>결혼 후 배우자에게 수억 원의 채무가 있다는 사실을 알게 되었습니다. 결혼 전에는 전혀 언급하지 않았고, 알았다면 결혼하지 않았을 것입니다. 이런 경우 이혼이 아니라 혼인취소를 청구할 수 있는지 궁금합니다. 민법 제816조는 사기·강박에 의한 혼인을 취소할 수 있도록 규정하고 있으며, 이혼과는 법적 효과가 다릅니다. 혼인취소 사유와 절차, 이혼과의 차이를 정리해보세요.</p>',
    sections: [
      {
        title: '혼인취소 사유(민법 816조)',
        content:
          '<p><strong style="color:#1e3a5f">민법 제816조는 혼인취소 사유를 제한적으로 열거하고 있으며, 이에 해당해야만 혼인취소를 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>혼인적령 미달</strong> — 만 18세 미만인 자의 혼인(민법 제807조 위반)</li>\n<li><strong>동의 흠결</strong> — 미성년자의 혼인에 부모 등 법정대리인의 동의가 없는 경우</li>\n<li><strong>근친혼</strong> — 8촌 이내 혈족 또는 6촌 이내 혈족의 배우자 등 근친 간 혼인</li>\n<li><strong>중혼</strong> — 이미 배우자가 있는 사람이 다시 혼인한 경우</li>\n<li><strong>사기·강박</strong> — 상대방의 사기나 강박으로 인하여 혼인 의사를 결정한 경우(제816조 제3호). 중대한 사실을 의도적으로 숨겨 혼인 의사를 속인 경우가 해당됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순한 성격 차이나 기대와 다른 모습은 취소 사유가 아닙니다. 혼인 의사 결정에 결정적 영향을 미치는 중대한 기만이어야 합니다.</blockquote>',
      },
      {
        title: '혼인취소 vs 이혼 차이',
        content:
          '<p><strong style="color:#1e3a5f">혼인취소는 혼인의 효력을 소급하여 없애는 것이고, 이혼은 혼인을 장래에 해소하는 것으로 법적 효과가 크게 다릅니다.</strong></p>\n<ul>\n<li><strong>효력 발생 시점</strong> — 혼인취소는 판결 확정 시부터 효력이 발생하며(소급효 제한), 이혼은 신고 시부터 효력이 생깁니다.</li>\n<li><strong>재산분할</strong> — 혼인취소의 경우에도 재산분할 청구가 가능합니다(민법 제824조의2). 다만 혼인 기간이 짧으면 분할 대상 재산이 적을 수 있습니다.</li>\n<li><strong>위자료</strong> — 혼인취소의 원인을 제공한 당사자에게 손해배상(위자료)을 청구할 수 있습니다.</li>\n<li><strong>자녀 관계</strong> — 혼인취소가 되더라도 자녀의 친자 관계에는 영향이 없습니다. 양육권·친권은 별도로 정합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 혼인취소 가능 여부와 절차를 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '혼인취소 청구 절차와 기한',
        content:
          '<p><strong style="color:#1e3a5f">혼인취소는 가정법원에 소를 제기해야 하며, 사기·강박의 경우 안 날로부터 3개월 이내에 청구해야 합니다.</strong></p>\n<ul>\n<li><strong>제소 기한</strong> — 사기·강박에 의한 혼인취소는 사기를 안 날 또는 강박을 면한 날로부터 3개월 이내에 제기해야 합니다(민법 제823조). 기한을 넘기면 취소권이 소멸합니다.</li>\n<li><strong>관할 법원</strong> — 부부 중 일방의 보통재판적 소재지 가정법원에 소를 제기합니다.</li>\n<li><strong>필요 서류</strong> — 혼인취소 소장, 혼인관계증명서, 가족관계증명서, 사기 입증 자료(거짓말 증거, 채무 내역 등), 진술서 등을 준비합니다.</li>\n<li><strong>소송 진행</strong> — 조정 전치주의에 따라 먼저 조정을 시도하고, 조정 불성립 시 본안 재판으로 넘어갑니다. 평균 6~12개월 소요됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 3개월 제소 기한은 매우 짧으므로, 사기 사실을 알게 된 즉시 법률 상담을 받으세요.</blockquote>',
      },
      {
        title: '혼인취소 후 법적 효과',
        content:
          '<p><strong style="color:#1e3a5f">혼인취소 판결이 확정되면 혼인 상태가 해소되며, 재산분할·위자료·자녀 문제를 함께 정리해야 합니다.</strong></p>\n<ul>\n<li><strong>호적 정리</strong> — 혼인취소 판결이 확정되면 1개월 이내에 가족관계등록부에 신고해야 합니다. 호적에는 "혼인취소"로 기재됩니다.</li>\n<li><strong>재산 관계</strong> — 혼인 중 취득한 재산에 대해 재산분할을 청구할 수 있고, 사기에 의한 취소인 경우 귀책 상대방에게 위자료도 청구할 수 있습니다.</li>\n<li><strong>자녀 양육</strong> — 자녀가 있으면 친권자·양육자 지정, 양육비 등을 혼인취소 소송에서 함께 결정합니다.</li>\n<li><strong>형사 고소 검토</strong> — 사기결혼의 경우 혼인 빙자 간음(형법 제304조 폐지 후 해당 없음)은 불가하나, 재산 편취 목적이면 사기죄로 고소를 검토할 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 혼인취소와 동시에 위자료·재산분할·양육 문제를 함께 청구하면 절차를 한 번에 처리할 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 혼인 파탄 귀책사유와 혼인 해소 판단',
        summary:
          '대법원 2025므10716 사건(대법원, 2025 선고)에서 법원은 제3자가 부부의 일방과 성관계를 맺어 혼인이 파탄에 이른 경우 부부공동생활을 침해하는 행위에 해당한다고 판시하면서, 혼인 파탄의 귀책사유 판단 기준을 제시했습니다.',
        takeaway:
          '혼인취소 사유인 사기·기망은 혼인 의사를 결정하는 데 중대한 영향을 미치는 것이어야 합니다. 귀책사유의 중대성은 법원이 구체적 사정을 종합하여 판단합니다.',
      },
    ],
    faq: [
      {
        question: '전과 기록을 숨기고 결혼한 경우 혼인취소가 가능한가요?',
        answer:
          '<strong>전과 사실이 혼인 의사 결정에 중대한 영향을 미치는 것이었다면 사기에 의한 혼인취소 사유가 될 수 있습니다.</strong> 다만 단순 과실범 전과는 인정되기 어렵고, 성범죄·폭력범죄 등 중대 전과를 의도적으로 숨긴 경우에 한합니다.',
      },
      {
        question: '거액의 채무를 숨긴 경우 혼인취소가 되나요?',
        answer:
          '<strong>결혼 전 거액의 채무를 의도적으로 숨겨 상대방의 혼인 의사를 속인 경우 사기에 의한 혼인취소 사유에 해당할 수 있습니다.</strong> 채무의 규모, 은닉 의도, 혼인 의사에 미친 영향을 종합적으로 판단합니다.',
      },
      {
        question: '사기 사실을 안 지 3개월이 넘었으면 혼인취소가 불가한가요?',
        answer:
          '<strong>사기를 안 날로부터 3개월이 지나면 혼인취소청구권이 소멸합니다.</strong> 이 경우 혼인취소 대신 이혼 소송(민법 제840조 제4호 기타 중대한 사유)으로 전환해야 합니다. 위자료 청구는 별도로 가능합니다.',
      },
      {
        question: '자녀가 있어도 혼인취소가 가능한가요?',
        answer:
          '<strong>자녀 유무와 관계없이 혼인취소 사유에 해당하면 취소 청구가 가능합니다.</strong> 혼인이 취소되더라도 자녀의 친자 관계에는 영향이 없으며, 친권자·양육권자 지정과 양육비는 별도로 결정합니다.',
      },
    ],
    cta: {
      text: '혼인취소 가능 여부, AI가 판단해드립니다',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '협의이혼 절차와 서류', href: '/guide/divorce/consensual-divorce-required-documents' },
      { label: '재판이혼 소송 절차', href: '/guide/divorce/trial-divorce-lawsuit-procedure' },
      { label: '위자료 산정 기준', href: '/guide/divorce/divorce-alimony-calculation-standard' },
      { label: '재산분할 범위와 기준', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '가정폭력 이혼 절차', href: '/guide/divorce/domestic-violence-divorce-process' },
    ],
  },

  // ── 교통사고 1. 공사 구간 교통사고 보상 책임과 과실 판단 ──
  {
    domain: 'traffic-accident',
    slug: 'traffic-construction-zone-accident-liability',
    keyword: '도로 공사 구간 교통사고 보상 책임 과실',
    questionKeyword: '공사 구간에서 교통사고가 나면 누구 책임인가요?',
    ctaKeyword: '공사 구간 교통사고 과실 상담',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '공사 구간 교통사고 보상 책임과 과실 판단 | 로앤가이드',
      description:
        '도로 공사 구간에서 사고가 났는데 보상 책임이 누구에게 있는지 궁금하다면 과실 비율 판단 기준을 지금 확인하세요',
    },
    intro:
      '<p>야간에 도로를 달리다 갑자기 나타난 공사 구간 바리케이드를 피하지 못해 사고가 났습니다. 안전 표지판도 제대로 없었고, 조명도 어두웠습니다. 이런 경우 운전자 과실인지, 공사 시공사 책임인지, 도로관리청 책임인지 혼란스럽습니다. 도로 공사 구간 사고는 시공사·발주처·도로관리청·운전자 간 과실이 복합적으로 얽히며, 안전관리 의무 위반 여부가 핵심 쟁점입니다.</p>',
    sections: [
      {
        title: '공사 구간 안전관리 의무와 책임 주체',
        content:
          '<p><strong style="color:#1e3a5f">도로 공사 구간에서는 시공사가 1차적 안전관리 의무를 부담하며, 발주처와 도로관리청도 관리·감독 책임이 있습니다.</strong></p>\n<ul>\n<li><strong>시공사 의무</strong> — 도로법 시행령과 도로공사장 교통관리지침에 따라 안전표지, 차선유도봉, 조명시설, 교통안전요원 배치 등의 의무를 집니다.</li>\n<li><strong>발주처(국가·지자체) 의무</strong> — 공사 발주처는 시공사의 안전관리 이행을 감독할 의무가 있으며, 감독 소홀 시 공동 책임을 질 수 있습니다.</li>\n<li><strong>도로관리청 책임</strong> — 국가배상법 제5조에 따라 도로의 설치·관리 하자로 인한 손해에 대해 국가 또는 지자체가 배상 책임을 집니다.</li>\n<li><strong>운전자 주의 의무</strong> — 공사 구간 속도 제한, 안전거리 유지 등 운전자의 기본 주의 의무도 여전히 적용됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공사 구간 사고는 단일 책임이 아니라, 안전관리 의무 이행 정도에 따라 복수 주체에게 과실이 배분됩니다.</blockquote>',
      },
      {
        title: '시공사·발주처·운전자 과실 비율',
        content:
          '<p><strong style="color:#1e3a5f">공사 구간 사고의 과실 비율은 안전시설 설치 여부, 표지판 가시성, 운전자 속도 등을 종합하여 결정됩니다.</strong></p>\n<ul>\n<li><strong>안전표지 미설치</strong> — 공사 안내 표지판, 속도 제한 표지, 우회 안내 등이 없으면 시공사 과실이 60~80%까지 인정될 수 있습니다.</li>\n<li><strong>야간 조명 부족</strong> — 야간 공사 시 조명·반사판이 부족하면 시공사 과실이 가중됩니다.</li>\n<li><strong>운전자 과속</strong> — 공사 구간 제한 속도(보통 50km/h 이하)를 초과한 경우 운전자 과실이 20~40% 가산됩니다.</li>\n<li><strong>발주처 감독 소홀</strong> — 시공사에 안전관리 시정명령을 내리지 않은 발주처에 10~30%의 과실이 인정된 사례가 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 사고 상황별 과실 비율과 보상 방향을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '보상 청구 절차와 필요 서류',
        content:
          '<p><strong style="color:#1e3a5f">공사 구간 사고 보상은 시공사 보험, 국가배상, 운전자 보험 등 복수 경로로 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>시공사 보험 청구</strong> — 시공사의 영업배상책임보험(공사보험)에 피해 보상을 청구합니다. 사고 현장 사진, 블랙박스 영상, 진단서를 첨부하세요.</li>\n<li><strong>국가배상 청구</strong> — 도로관리 하자로 인한 사고는 국가배상법에 따라 국가·지자체에 배상을 청구할 수 있습니다. 관할 시·군·구에 배상 심의를 신청합니다.</li>\n<li><strong>자차 보험 활용</strong> — 과실 상계로 시공사 보상이 부족할 경우, 본인 자동차보험 자차 담보로 차량 수리비를 선보상받고 구상 처리할 수 있습니다.</li>\n<li><strong>필요 서류</strong> — 교통사고 사실확인원, 블랙박스 영상, 사고 현장 사진, 진단서·치료비 영수증, 공사 안전관리 실태 확인서(필요 시)</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사고 직후 현장의 안전시설 상태(표지판 유무, 조명 상태)를 사진·영상으로 확보하는 것이 가장 중요합니다.</blockquote>',
      },
      {
        title: '소송 시 쟁점과 유의사항',
        content:
          '<p><strong style="color:#1e3a5f">보험 합의가 되지 않으면 민사소송을 통해 시공사·발주처·도로관리청을 상대로 손해배상을 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>피고 특정</strong> — 시공사, 발주처, 도로관리청을 공동피고로 소를 제기하면 법원이 각각의 과실 비율을 판단하여 배분합니다.</li>\n<li><strong>영조물 관리 하자 입증</strong> — 국가배상법 제5조의 영조물 관리 하자는 객관적으로 안전성을 결여한 상태를 의미하며, 피해자가 하자를 입증해야 합니다.</li>\n<li><strong>손해 범위</strong> — 치료비, 휴업손해, 위자료, 차량 수리비 또는 시가 감소분, 향후 치료비 등을 종합하여 청구합니다.</li>\n<li><strong>소멸시효</strong> — 불법행위에 의한 손해배상 청구 소멸시효는 손해 및 가해자를 안 날로부터 3년, 사고일로부터 10년입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 국가배상 사전 심의를 거치지 않아도 바로 소송을 제기할 수 있지만, 사전 심의를 거치면 합의 가능성이 높아집니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 보험 자기부담금과 구상권 기준',
        summary:
          '대법원 2022다287284 사건(대법원 선고)에서 법원은 자동차보험에서 자기부담금의 부담 주체와 구상권 행사 범위에 대한 기준을 제시하며, 피보험자가 부담해야 할 자기부담금은 보험회사가 구상권을 행사할 수 있는 범위에 포함되지 않는다고 판시했습니다.',
        takeaway:
          '공사 구간 사고에서 보험 처리 시 자기부담금과 구상권 문제가 발생할 수 있으므로, 시공사 보험과 자차 보험의 처리 범위를 미리 확인하고 보상 경로를 전략적으로 선택하세요.',
      },
    ],
    faq: [
      {
        question: '안전 표지판이 없었으면 시공사 과실이 100%인가요?',
        answer:
          '<strong>안전 표지판 미설치는 시공사 과실을 크게 높이지만, 운전자의 전방주시 의무도 있으므로 100% 인정은 드뭅니다.</strong> 통상 시공사 70~80%, 운전자 20~30% 정도의 과실 배분이 이루어지며, 야간·악천후 시 시공사 과실이 더 높아집니다.',
      },
      {
        question: '공사 차량이 운전 중인 차를 들이받으면 어떻게 되나요?',
        answer:
          '<strong>공사 차량 운전자의 과실에 의한 사고라면 시공사가 사용자 배상 책임을 집니다.</strong> 시공사의 영업배상책임보험과 공사 차량 보험에 보상을 청구하며, 부족분은 민사 소송으로 추가 청구할 수 있습니다.',
      },
      {
        question: '보험사가 운전자 과실을 높게 잡으면 어떻게 대응하나요?',
        answer:
          '<strong>보험사의 과실 비율 산정에 동의하지 않으면 손해사정사 재산정을 요청하거나, 금융감독원 분쟁조정 또는 민사 소송을 통해 다툴 수 있습니다.</strong> 블랙박스 영상, 현장 사진, 도로교통공단 사고 분석 자료가 핵심 증거입니다.',
      },
      {
        question: '도로관리청(시·군·구)에 직접 배상을 청구할 수 있나요?',
        answer:
          '<strong>도로 설치·관리 하자가 인정되면 국가배상법 제5조에 따라 도로관리청에 직접 배상을 청구할 수 있습니다.</strong> 관할 시·군·구 배상심의위원회에 사전 심의를 신청하거나, 바로 민사 소송을 제기할 수 있습니다.',
      },
    ],
    cta: {
      text: '공사 구간 사고 과실 비율, AI가 분석해드립니다',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 보상 계산 가이드', href: '/guide/traffic-accident/traffic-accident-compensation-calculation-guide' },
      { label: '교통사고 과실 비율 분쟁', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '교통사고 합의 실수 방지', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '교통사고 보험 설명 의무', href: '/guide/traffic-accident/traffic-accident-insurance-explanation-duty' },
      { label: '교통사고 블랙박스 증거 활용', href: '/guide/traffic-accident/traffic-accident-dashcam-evidence-guide' },
    ],
  },

  // ── 교통사고 2. 고령 운전자 교통사고 과실 판단과 면허 기준 ──
  {
    domain: 'traffic-accident',
    slug: 'traffic-elderly-driver-accident-liability',
    keyword: '고령 운전자 교통사고 과실 비율 면허 적성검사',
    questionKeyword: '고령 운전자가 사고를 냈는데 과실 비율이 어떻게 되나요?',
    ctaKeyword: '고령 운전자 교통사고 과실 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '고령 운전자 교통사고 과실 판단과 면허 기준 | 로앤가이드',
      description:
        '고령 운전자 교통사고 과실 비율이나 면허 적성검사 기준이 궁금하다면 법적 판단 기준과 보상 절차를 지금 확인하세요',
    },
    intro:
      '<p>횡단보도를 건너다 75세 운전자의 차에 부딪혔습니다. 상대방은 "잠깐 보지 못했다"고 합니다. 고령 운전자 사고가 늘고 있지만, 과실 판단 기준이 일반 운전자와 다른지, 면허 관리 제도는 어떻게 되어 있는지 잘 모르겠습니다. 2026년 현재 65세 이상 고령 운전자에 대한 면허 적성검사 강화와 조건부 면허 제도가 시행되고 있으며, 사고 시 과실 판단에도 특수한 기준이 적용될 수 있습니다.</p>',
    sections: [
      {
        title: '고령 운전자 교통사고 현황과 법적 기준',
        content:
          '<p><strong style="color:#1e3a5f">65세 이상 고령 운전자 교통사고는 매년 증가 추세이며, 도로교통법은 고령 운전자에 대한 면허 관리를 강화하고 있습니다.</strong></p>\n<ul>\n<li><strong>사고 추세</strong> — 고령 운전자 교통사고 비중은 전체 교통사고의 약 20%를 차지하며, 사망사고 비율이 상대적으로 높습니다.</li>\n<li><strong>법적 기준</strong> — 도로교통법은 고령 운전자를 만 65세 이상으로 정의하며, 적성검사 주기 단축, 고령자 교통안전교육 등을 규정하고 있습니다.</li>\n<li><strong>과실 판단 원칙</strong> — 고령이라는 이유만으로 과실이 가중되지는 않지만, 인지·반응 능력 저하로 인한 주의의무 위반이 인정되면 과실이 높아질 수 있습니다.</li>\n<li><strong>보호구역(실버존)</strong> — 노인보호구역에서의 사고는 가중처벌 대상이며, 보호구역 규정 위반 시 벌금과 벌점이 강화됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 고령 운전자 과실은 나이가 아니라, 구체적인 주의의무 위반 여부로 판단됩니다.</blockquote>',
      },
      {
        title: '고령 운전자 과실 비율 특수성',
        content:
          '<p><strong style="color:#1e3a5f">고령 운전자의 과실 비율은 일반 기준에 인지·반응 능력 저하 요소를 추가하여 판단합니다.</strong></p>\n<ul>\n<li><strong>전방주시 의무 가중</strong> — 시력·청력 저하가 있는 고령 운전자가 전방주시를 소홀히 한 경우, 일반 운전자보다 과실이 5~10% 높게 인정될 수 있습니다.</li>\n<li><strong>페달 오조작</strong> — 가속페달과 브레이크 혼동 사고는 운전자 전적 과실(100%)로 판단되는 경우가 많습니다.</li>\n<li><strong>적성검사 미이행</strong> — 적성검사를 받지 않고 운전한 경우, 면허 효력 문제와 별도로 과실 비율에 불리하게 작용할 수 있습니다.</li>\n<li><strong>보험 처리</strong> — 보험사는 고령 운전자 사고 시 운전능력 저하를 이유로 과실을 높게 산정하는 경향이 있으므로, 적극적으로 다투어야 합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 사고 상황별 과실 비율과 보상 전략을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '면허 적성검사와 갱신 요건',
        content:
          '<p><strong style="color:#1e3a5f">75세 이상 운전자는 5년마다 적성검사를 받아야 하며, 인지능력 검사가 포함됩니다.</strong></p>\n<ul>\n<li><strong>적성검사 주기</strong> — 일반 운전자는 10년, 65~74세는 5년, 75세 이상은 5년마다 적성검사를 받아야 합니다. 2025년부터 75세 이상은 인지능력검사가 필수입니다.</li>\n<li><strong>인지능력검사</strong> — 기억력, 판단력, 주의력을 평가하며, 불합격 시 전문기관 정밀검사를 받아야 합니다. 재검사에서도 불합격하면 면허가 취소될 수 있습니다.</li>\n<li><strong>고령자 교통안전교육</strong> — 75세 이상 면허 갱신 시 2시간의 교통안전교육을 이수해야 합니다.</li>\n<li><strong>조건부 면허</strong> — 특정 시간대·구역·차종만 운전할 수 있는 조건부 면허 제도가 도입되어, 전면 취소 대신 조건을 부여할 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 적성검사를 받지 않고 운전하면 면허 정지·취소 사유가 되며, 사고 시 보험 면책 사유가 될 수 있습니다.</blockquote>',
      },
      {
        title: '피해자 보상 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고령 운전자 사고 피해자는 상대방 보험에 보상을 청구하되, 과실 비율 산정에 주의해야 합니다.</strong></p>\n<ul>\n<li><strong>보험 청구</strong> — 상대방 자동차보험(대인·대물)에 치료비, 휴업손해, 위자료 등을 청구합니다. 무보험 차량인 경우 정부보장사업에 청구합니다.</li>\n<li><strong>과실 비율 다툼</strong> — 보험사가 피해자 과실을 높게 잡으면, 도로교통공단 과실비율 인정기준을 근거로 반박하세요.</li>\n<li><strong>후유장해 평가</strong> — 고령 운전자 사고는 피해가 심각한 경우가 많으므로, 치료 종료 후 후유장해 등급을 반드시 평가받아야 합니다.</li>\n<li><strong>형사 합의</strong> — 중상해 또는 사망사고인 경우 형사 절차가 병행되며, 피해자는 형사 합의를 통해 추가 보상을 받을 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사고 후 상대방 운전자의 면허 상태(적성검사 이행 여부, 조건부 면허 위반)를 확인하면 과실 비율 다툼에 유리합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주운전 혈중알코올 측정 시점과 과실 판단',
        summary:
          '대법원 2025도8137 사건(대법원 선고)에서 법원은 음주운전 단속 시 혈중알코올농도 측정 시점과 실제 운전 시점 사이의 시간 경과가 있을 때 위드마크 공식 적용 기준을 판시하면서, 교통사고에서의 과실 판단 기준을 제시했습니다.',
        takeaway:
          '교통사고 과실 판단에서는 사고 당시의 구체적 상황(운전 능력, 주의 의무 이행 여부)이 핵심입니다. 고령 운전자의 경우에도 사고 당시의 인지·반응 능력을 구체적으로 입증하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '75세 이상 면허 갱신 절차는 어떻게 되나요?',
        answer:
          '<strong>75세 이상은 면허 갱신 시 인지능력검사와 교통안전교육(2시간)을 반드시 이수해야 합니다.</strong> 운전면허시험장이나 지정 의료기관에서 검사를 받으며, 불합격 시 6개월 이내 재검사 기회가 주어집니다.',
      },
      {
        question: '치매 진단을 받은 사람이 사고를 내면 어떻게 되나요?',
        answer:
          '<strong>치매 진단을 받으면 면허 취소 사유에 해당하며, 면허가 취소된 상태에서 운전하면 무면허 운전으로 가중처벌됩니다.</strong> 사고 피해자는 무면허 운전에 의한 사고로 보험금 청구 시 유리하며, 가해자의 가족에게 관리 책임을 물을 수도 있습니다.',
      },
      {
        question: '조건부 면허란 무엇인가요?',
        answer:
          '<strong>조건부 면허는 특정 시간대·구역·차종으로 운전 범위를 제한하는 면허입니다.</strong> 인지능력검사 결과에 따라 부여되며, 조건을 위반하여 운전하면 면허 정지·취소 처분을 받을 수 있습니다.',
      },
      {
        question: '면허 자진 반납 시 혜택이 있나요?',
        answer:
          '<strong>65세 이상 면허 자진 반납 시 지자체별로 교통비 지원, 교통카드 충전, 택시 할인 쿠폰 등의 혜택이 제공됩니다.</strong> 서울시는 교통카드 10만 원 충전, 일부 지자체는 월 교통비를 지원합니다. 관할 경찰서나 지자체에 문의하세요.',
      },
    ],
    cta: {
      text: '고령 운전자 사고 과실 비율, AI가 분석해드립니다',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 과실 비율 분쟁', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '보행자 사고 보상 청구', href: '/guide/traffic-accident/traffic-accident-pedestrian-cyclist-victim-compensation' },
      { label: '교통사고 합의 체크리스트', href: '/guide/traffic-accident/traffic-settlement-agreement-checklist' },
      { label: '교통사고 보상 계산 가이드', href: '/guide/traffic-accident/traffic-accident-compensation-calculation-guide' },
      { label: '무보험 차량 피해 보상', href: '/guide/traffic-accident/traffic-accident-uninsured-driver-victim' },
    ],
  },

  // ── 사기 1. 허위 매물·부동산 사기 대응 절차 ──
  {
    domain: 'fraud',
    slug: 'fraud-rental-fake-listing-response',
    keyword: '허위 매물 부동산 사기 대응 형사고소',
    questionKeyword: '허위 매물에 속아서 계약금을 날렸는데 어떻게 해야 하나요?',
    ctaKeyword: '허위 매물 사기 대응 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '허위 매물·부동산 사기 대응 절차 4단계 | 로앤가이드',
      description:
        '허위 매물에 속아 계약금을 잃었다면 형사고소부터 피해 회복까지 4단계 대응 절차를 지금 확인하세요',
    },
    intro:
      '<p>인터넷에서 본 "급매" 아파트가 실제로는 존재하지 않는 매물이었습니다. 계약금 1,000만 원을 이체했는데 연락이 두절되었습니다. 허위 매물 사기는 부동산 플랫폼이 활성화되면서 수법이 다양해지고 있으며, 피해 즉시 올바른 순서로 대응해야 피해 회복 가능성이 높아집니다. 허위 매물 사기 유형부터 형사고소·민사소송까지 4단계 대응 절차를 정리해보세요.</p>',
    sections: [
      {
        title: '허위 매물 사기의 유형과 수법',
        content:
          '<p><strong style="color:#1e3a5f">허위 매물 사기는 존재하지 않는 매물을 게시하거나, 실제 매물을 무단 도용하여 계약금을 편취하는 범죄입니다.</strong></p>\n<ul>\n<li><strong>가짜 매물 게시형</strong> — 실존하지 않는 부동산을 온라인에 게시하고, 계약금을 받은 뒤 잠적합니다. 시세보다 현저히 낮은 가격으로 피해자를 유인합니다.</li>\n<li><strong>타인 매물 도용형</strong> — 실제 매물 정보를 무단 복사하여 가짜 중개인을 사칭하고, 계약금을 가로챕니다. 등기부등본을 위조하는 경우도 있습니다.</li>\n<li><strong>이중계약형</strong> — 같은 매물을 여러 명에게 동시에 계약하고, 계약금을 모두 수령한 뒤 사라지는 수법입니다.</li>\n<li><strong>보증금 편취형</strong> — 실제 임대 권한이 없는 사람이 집주인을 사칭하여 전세보증금이나 월세보증금을 편취합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 시세 대비 30% 이상 저렴한 매물, 급매를 강조하며 계약을 서두르는 경우 사기를 의심하세요.</blockquote>',
      },
      {
        title: '피해 직후 긴급 대응',
        content:
          '<p><strong style="color:#1e3a5f">사기를 인지한 즉시 계좌 지급정지, 증거 확보, 경찰 신고를 동시에 진행해야 합니다.</strong></p>\n<ul>\n<li><strong>계좌 지급정지</strong> — 112 또는 거래 은행에 전화하여 사기 피해 계좌의 지급정지를 요청합니다. 전기통신금융사기 피해 방지법에 따라 즉시 정지됩니다.</li>\n<li><strong>증거 확보</strong> — 매물 게시물 캡처, 대화 내역(카카오톡·문자), 송금 내역, 계약서 사본, 상대방 전화번호·계좌번호를 모두 보관합니다.</li>\n<li><strong>경찰 신고</strong> — 관할 경찰서 사이버수사대에 사기 피해를 신고합니다. 사이버범죄 신고 시스템(ecrm.police.go.kr)을 통해 온라인 신고도 가능합니다.</li>\n<li><strong>피해구제 신청</strong> — 금융감독원 피해구제 신청(1332)을 하면, 사기 계좌에 남아 있는 잔액에서 환급받을 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 긴급 대응 순서와 증거 확보 방법을 안내해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '형사고소와 민사소송 절차',
        content:
          '<p><strong style="color:#1e3a5f">형사고소와 민사 손해배상 청구를 병행하면 피해 회복 가능성이 높아집니다.</strong></p>\n<ul>\n<li><strong>형사고소</strong> — 사기죄(형법 제347조, 10년 이하 징역 또는 2천만 원 이하 벌금)로 고소합니다. 고소장에 피해 경위, 증거 목록, 피의자 인적사항을 기재합니다.</li>\n<li><strong>민사소송</strong> — 손해배상 청구 소송을 통해 편취당한 금액과 지연이자(연 12%)를 청구합니다. 소액사건(3,000만 원 이하)은 소액재판으로 빠르게 처리됩니다.</li>\n<li><strong>가압류 신청</strong> — 피의자의 재산이 확인되면 민사소송 전 가압류를 신청하여 재산 도주를 막습니다.</li>\n<li><strong>형사 합의</strong> — 형사 절차 중 피의자가 합의를 제안할 수 있으며, 피해금 전액 반환을 조건으로 합의하는 것이 일반적입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 형사고소 시 "처벌을 원합니다"라는 처벌 의사를 명확히 기재해야 수사가 적극적으로 진행됩니다.</blockquote>',
      },
      {
        title: '예방 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">부동산 거래 전 등기부등본 확인, 중개사 자격 검증, 현장 방문을 반드시 수행하세요.</strong></p>\n<ul>\n<li><strong>등기부등본 직접 확인</strong> — 인터넷등기소에서 해당 부동산의 등기부등본을 직접 열람하여 소유자, 근저당, 가압류 등을 확인합니다.</li>\n<li><strong>공인중개사 자격 확인</strong> — 국가공간정보포털 또는 시·군·구청에서 해당 중개사의 등록 여부를 확인합니다. 미등록 중개는 불법입니다.</li>\n<li><strong>현장 방문 필수</strong> — 온라인 사진만 믿지 말고 반드시 현장을 방문하여 매물 상태와 실제 소유자를 확인합니다.</li>\n<li><strong>계약금 보호</strong> — 계약금은 부동산 중개업소 공제증서 발급 후 지급하고, 가능하면 에스크로 계좌를 이용합니다. 개인 계좌로의 직접 이체는 피하세요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "계약서를 먼저 보내드릴 테니 계약금부터 보내달라"는 요구는 거의 100% 사기입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 허위 정보 입력에 의한 재산 편취',
        summary:
          '대법원 2022도1862 사건(대법원 선고)에서 법원은 컴퓨터등사용사기죄에서 허위의 정보를 입력하여 정보처리를 하게 함으로써 재산상 이익을 취득한 행위에 대해, 허위정보 입력의 범위와 재산 편취의 인과관계 기준을 판시했습니다.',
        takeaway:
          '온라인 허위 매물 사기는 컴퓨터등사용사기죄(형법 제347조의2)로도 처벌할 수 있으며, 일반 사기죄보다 법정형이 동일하므로 상황에 맞는 죄명으로 고소하세요.',
      },
    ],
    faq: [
      {
        question: '계약금만 날렸는데도 경찰에 신고할 수 있나요?',
        answer:
          '<strong>금액의 크기와 관계없이 사기 피해라면 경찰에 신고할 수 있습니다.</strong> 계약금 100만 원이라도 사기죄 구성요건(기망→착오→처분행위→재산적 손해)을 충족하면 형사 처벌 대상입니다.',
      },
      {
        question: '중개사가 허위 매물을 올렸으면 중개사 책임인가요?',
        answer:
          '<strong>공인중개사가 허위 매물임을 알면서 중개한 경우, 공인중개사법 위반으로 등록 취소와 형사 처벌을 받을 수 있습니다.</strong> 피해자는 중개사에게도 손해배상을 청구할 수 있으며, 공제기금에서 보상을 받을 수도 있습니다.',
      },
      {
        question: '전세사기와 허위 매물 사기는 어떻게 다른가요?',
        answer:
          '<strong>전세사기는 실제 매물에 대해 임대 권한 없는 자가 전세보증금을 편취하는 것이고, 허위 매물 사기는 존재하지 않는 매물로 계약금을 편취하는 것입니다.</strong> 전세사기가 피해 금액이 크고 주거권까지 침해하여 더 무겁게 처벌되는 경향이 있습니다.',
      },
      {
        question: '온라인 허위 매물은 어디에 신고하나요?',
        answer:
          '<strong>국토교통부 부동산거래 신고 시스템, 해당 플랫폼(직방·다방·네이버 부동산) 신고 기능, 경찰 사이버수사대에 신고할 수 있습니다.</strong> 플랫폼에 신고하면 해당 매물이 삭제되고, 경찰 신고는 형사 수사로 이어집니다.',
      },
    ],
    cta: {
      text: '허위 매물 사기 대응 전략, AI가 안내해드립니다',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '사기 피해 고소장 핵심 증거 5가지', href: '/guide/fraud/fraud-complaint-police-key-evidence-5' },
      { label: '사기죄 민사소송 절차', href: '/guide/fraud/fraud-civil-lawsuit-procedure' },
      { label: '전세사기 피해 구제 타임라인', href: '/guide/jeonse/jeonse-fraud-relief-timeline' },
      { label: '중고거래 사기 환불 방법', href: '/guide/fraud/secondhand-trade-fraud-refund-method' },
      { label: '사기 피해 어디서부터 시작할까', href: '/guide/fraud/fraud-accused-defense-strategy-guide' },
    ],
  },

  // ── 사기 2. SNS 투자 사기 피해 구제 절차와 증거 확보법 ──
  {
    domain: 'fraud',
    slug: 'fraud-sns-investment-scam-response',
    keyword: 'SNS 투자 사기 피해 구제 증거 확보',
    questionKeyword: 'SNS 투자 사기를 당했는데 피해금을 돌려받을 수 있나요?',
    ctaKeyword: 'SNS 투자 사기 피해 구제 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'SNS 투자 사기 피해 구제 절차와 증거 확보법 | 로앤가이드',
      description:
        'SNS 리딩방이나 코인 투자 사기를 당했다면 증거 확보부터 피해 구제까지 절차를 지금 확인하세요',
    },
    intro:
      '<p>인스타그램 광고를 보고 투자 리딩방에 가입했습니다. 처음에는 소액 수익이 나더니, 큰 금액을 넣자마자 출금이 막혔습니다. 관리자에게 연락하니 "추가 입금해야 출금된다"고 합니다. SNS 투자 사기는 리딩방, 가상자산, FX마진 거래 등 다양한 형태로 진화하고 있으며, 피해 직후 빠른 증거 확보와 계좌 동결이 피해 회복의 핵심입니다.</p>',
    sections: [
      {
        title: 'SNS 투자 사기 유형(리딩방·코인·FX)',
        content:
          '<p><strong style="color:#1e3a5f">SNS 투자 사기는 주식 리딩방, 가상자산(코인), FX마진 거래, 부동산 투자 등 다양한 형태로 나타나며, 공통적으로 고수익을 미끼로 합니다.</strong></p>\n<ul>\n<li><strong>주식 리딩방</strong> — "전문가가 종목을 알려준다"며 입회비·수수료를 받고, 허위 수익 인증으로 추가 투자를 유도합니다. 무등록 투자자문업 위반에 해당합니다.</li>\n<li><strong>가상자산(코인) 사기</strong> — "신규 상장 코인 사전 배정" 등으로 유인하여 가짜 거래소에 입금하게 합니다. 출금 시 각종 수수료를 요구하는 것이 특징입니다.</li>\n<li><strong>FX마진 거래 사기</strong> — "월 20% 수익 보장"을 내세우며 해외 무등록 거래소에 투자를 유도합니다. 실제로는 투자금이 운용되지 않고 편취됩니다.</li>\n<li><strong>공통 수법</strong> — SNS 광고 → 오픈채팅방 유입 → 소액 수익 체험 → 대액 투자 유도 → 출금 차단 → 추가 입금 요구의 단계를 밟습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "원금 보장", "확정 수익"을 약속하는 투자는 100% 사기이거나 불법입니다. 자본시장법상 원금 보장 약속은 위법입니다.</blockquote>',
      },
      {
        title: '피해 직후 증거 확보와 계좌 동결',
        content:
          '<p><strong style="color:#1e3a5f">사기를 인지한 즉시 증거를 확보하고 계좌 지급정지를 신청해야 피해 회복 가능성이 높아집니다.</strong></p>\n<ul>\n<li><strong>대화 내용 저장</strong> — 카카오톡, 텔레그램, 인스타그램 DM 등의 대화 내역을 캡처·백업합니다. 삭제되기 전에 화면 녹화까지 해두면 확실합니다.</li>\n<li><strong>송금 내역 확보</strong> — 은행 이체 내역, 가상자산 전송 내역, 결제 내역을 출력합니다. 상대방 계좌번호와 수취인명을 기록합니다.</li>\n<li><strong>계좌 지급정지</strong> — 112 또는 거래 은행(1588-XXXX)에 전화하여 사기 이용 계좌의 지급정지를 요청합니다.</li>\n<li><strong>SNS 프로필 저장</strong> — 사기범의 SNS 프로필, 게시물, 광고 내용을 캡처합니다. 계정이 삭제되기 전에 URL과 함께 저장하세요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 증거 확보 방법과 긴급 대응 순서를 안내해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '형사고소와 피해 구제 절차',
        content:
          '<p><strong style="color:#1e3a5f">경찰 신고, 금융감독원 피해구제, 검찰 고소를 병행하여 다각도로 피해를 회복해야 합니다.</strong></p>\n<ul>\n<li><strong>경찰 신고</strong> — 사이버수사대에 사기 피해를 신고합니다(ecrm.police.go.kr). 고소장에 피해 경위, 사기범 정보, 증거 목록을 첨부합니다.</li>\n<li><strong>금감원 피해구제</strong> — 금융감독원(1332)에 피해구제를 신청하면, 사기 계좌 잔액에서 환급을 받을 수 있습니다. 여러 피해자가 있으면 잔액을 비율로 나눕니다.</li>\n<li><strong>검찰 고소</strong> — 사기죄(형법 제347조)와 유사수신행위법 위반으로 고소합니다. 조직적 사기인 경우 특정경제범죄법이 적용되어 가중처벌됩니다.</li>\n<li><strong>피해자 공동 대응</strong> — 같은 피해를 입은 사람들이 공동으로 고소하면 수사 역량이 집중되어 검거 가능성이 높아집니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 피해 금액이 5억 원 이상이면 특정경제범죄법(3년 이상 징역)이 적용되므로 검찰에 직접 고소하는 것이 효과적입니다.</blockquote>',
      },
      {
        title: '민사 손해배상 청구',
        content:
          '<p><strong style="color:#1e3a5f">형사 절차와 별개로 민사 손해배상 청구를 통해 피해금을 직접 회수할 수 있습니다.</strong></p>\n<ul>\n<li><strong>소송 대상</strong> — 사기범 본인뿐 아니라, 리딩방 운영자, 자금 인출책(대포통장 명의인), 공모자 전원을 공동피고로 삼을 수 있습니다.</li>\n<li><strong>가압류 신청</strong> — 소송 전 피고의 부동산, 예금, 차량 등에 가압류를 신청하여 재산 도주를 방지합니다.</li>\n<li><strong>지급명령 신청</strong> — 다툼의 여지가 없는 채권은 지급명령 신청으로 빠르게 집행권원을 확보할 수 있습니다.</li>\n<li><strong>강제집행</strong> — 판결 또는 지급명령이 확정되면 피고의 재산에 강제집행(예금 압류, 부동산 경매 등)을 진행합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 사기범이 재산을 숨기거나 해외로 도주하면 회수가 어려우므로, 형사 절차와 가압류를 최대한 빠르게 진행하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 누범 기준과 형의 실효 판단(사기 상습범 처벌)',
        summary:
          '대법원 2025도15970 사건(대법원 선고)에서 법원은 누범 기간 내 다시 사기 범행을 저지른 경우 형의 실효 여부와 누범 가중 적용 기준을 판시하며, 반복적 사기범에 대한 엄격한 처벌 기준을 제시했습니다.',
        takeaway:
          'SNS 투자 사기는 조직적·반복적으로 이루어지는 경우가 많아 누범·상습범 가중처벌이 적용됩니다. 피해 사실을 적극적으로 신고하면 사기범의 양형에 영향을 미칩니다.',
      },
    ],
    faq: [
      {
        question: '사기범이 해외 서버를 사용하면 수사가 가능한가요?',
        answer:
          '<strong>국내에서 피해가 발생했다면 국내 수사기관이 관할권을 갖습니다.</strong> 인터폴 공조, 국제사법공조를 통해 해외 서버 자료를 확보할 수 있으며, 국내 가담자(인출책, 모집책)부터 수사하여 조직 전체를 추적합니다.',
      },
      {
        question: '가상자산(코인) 피해도 구제받을 수 있나요?',
        answer:
          '<strong>가상자산으로 이체한 피해도 사기죄 고소와 민사 소송이 가능합니다.</strong> 다만 가상자산은 은행 계좌와 달리 지급정지가 즉각적이지 않으므로, 거래소에 직접 연락하여 관련 지갑 동결을 요청해야 합니다.',
      },
      {
        question: '리딩방 운영자를 실제로 잡을 수 있나요?',
        answer:
          '<strong>경찰 사이버수사대가 IP 추적, 통신사 자료 확보, 금융 추적 등을 통해 운영자를 특정할 수 있습니다.</strong> 다수의 피해자가 공동 고소하면 수사 우선순위가 높아져 검거 가능성이 올라갑니다.',
      },
      {
        question: '피해금을 돌려받을 확률은 얼마나 되나요?',
        answer:
          '<strong>사기범의 재산 상태와 검거 시점에 따라 다르지만, 통계적으로 투자 사기 피해 회수율은 10~30% 수준입니다.</strong> 빠른 계좌 동결과 가압류가 회수율을 높이는 핵심이며, 형사 합의를 통한 반환이 가장 현실적인 방법입니다.',
      },
    ],
    cta: {
      text: 'SNS 투자 사기 피해 구제, AI가 절차를 안내해드립니다',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '사기 피해 고소장 핵심 증거', href: '/guide/fraud/fraud-complaint-police-key-evidence-5' },
      { label: '가상자산 투자 사기 대응', href: '/guide/fraud/crypto-investment-fraud-response' },
      { label: '사기죄 민사소송 절차', href: '/guide/fraud/fraud-civil-lawsuit-procedure' },
      { label: '사기 피해 어디서부터', href: '/guide/fraud/fraud-accused-defense-strategy-guide' },
      { label: '중고거래 사기 환불 방법', href: '/guide/fraud/secondhand-trade-fraud-refund-method' },
    ],
  },

  // ── 회생 1. 도박 채무 개인회생 인가 가능성과 면책 조건 ──
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-gambling-debt-discharge',
    keyword: '도박 사행성 채무 개인회생 인가 면책 조건',
    questionKeyword: '도박으로 생긴 빚도 개인회생으로 면책받을 수 있나요?',
    ctaKeyword: '도박 채무 개인회생 면책 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '도박 채무 개인회생 인가 가능성과 면책 조건 | 로앤가이드',
      description:
        '도박으로 빚이 쌓였는데 개인회생이 가능한지 궁금하다면 면책 불허가 사유와 인가 기준을 지금 확인하세요',
    },
    intro:
      '<p>온라인 도박에 빠져 카드 현금서비스와 대출로 3억 원의 빚을 졌습니다. 개인회생을 신청하고 싶지만, "도박 빚은 면책이 안 된다"는 말을 들어 걱정입니다. 실제로 채무자 회생법은 도박을 면책 불허가 사유 중 하나로 규정하고 있지만, 법원은 채무자의 성실성과 반성 여부를 종합적으로 판단하여 면책을 허가하는 경우도 적지 않습니다. 도박 채무와 개인회생의 관계를 정확히 알아보세요.</p>',
    sections: [
      {
        title: '도박 채무도 개인회생 대상인가',
        content:
          '<p><strong style="color:#1e3a5f">도박으로 인한 채무도 개인회생 신청 대상에 포함됩니다. 채무 발생 원인과 관계없이 총채무액 기준으로 신청 자격이 결정됩니다.</strong></p>\n<ul>\n<li><strong>신청 자격</strong> — 무담보채무 10억 원 이하, 담보채무 15억 원 이하이면 개인회생을 신청할 수 있습니다. 도박 채무도 무담보채무에 포함됩니다.</li>\n<li><strong>소득 요건</strong> — 향후 계속적·반복적 소득이 있어야 합니다. 근로소득, 사업소득, 연금 등이 해당됩니다.</li>\n<li><strong>도박 채무의 특수성</strong> — 도박 채무 자체는 신청 자격을 제한하지 않지만, 면책 단계에서 불허가 사유로 다투어질 수 있습니다.</li>\n<li><strong>불법 도박 vs 합법 도박</strong> — 불법 사설 도박이든 합법 카지노 도박이든, 채무의 법적 성격은 동일하게 개인회생 대상입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 개인회생 신청 자체는 채무 원인과 무관하게 가능합니다. 문제는 면책 단계에서 법원의 판단입니다.</blockquote>',
      },
      {
        title: '면책 불허가 사유와 도박의 관계',
        content:
          '<p><strong style="color:#1e3a5f">채무자 회생법 제624조 제2항은 "과대한 낭비 또는 도박 기타 사행행위"를 면책 불허가 사유로 규정하고 있습니다.</strong></p>\n<ul>\n<li><strong>법조문</strong> — 채무자 회생법 제624조 제2항 제4호: "낭비, 도박 기타 사행행위를 하여 현저히 재산을 감소시키거나 과대한 채무를 부담한 사실이 있는 때"</li>\n<li><strong>재량적 불허가</strong> — 위 사유는 면책을 반드시 불허하는 절대적 사유가 아니라, 법원이 재량으로 판단하는 상대적 사유입니다.</li>\n<li><strong>판단 기준</strong> — 법원은 도박의 기간·빈도·금액, 채무자의 반성 여부, 현재 도박 중단 여부, 변제계획 이행 가능성을 종합 고려합니다.</li>\n<li><strong>실무 경향</strong> — 도박을 완전히 중단하고, 성실하게 변제계획을 이행하며, 재기 의지를 보여주면 면책이 허가되는 사례가 많습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 면책 가능성과 필요 서류를 분석해드립니다.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '법원이 면책을 허가하는 기준',
        content:
          '<p><strong style="color:#1e3a5f">법원은 도박 채무자라 하더라도 아래 요소를 충족하면 면책을 허가하는 경향이 있습니다.</strong></p>\n<ul>\n<li><strong>도박 중단 입증</strong> — 개인회생 신청 전 상당 기간(최소 6개월 이상) 도박을 중단했음을 입증해야 합니다. 도박중독 상담·치료 기록이 유력한 증거입니다.</li>\n<li><strong>반성문 제출</strong> — 진심 어린 반성문은 법원의 판단에 긍정적 영향을 미칩니다. 도박 경위, 반성, 재발 방지 노력을 구체적으로 기술하세요.</li>\n<li><strong>성실 변제</strong> — 변제계획에 따라 3~5년간 성실하게 변제하는 것이 면책 허가의 핵심입니다. 1회라도 연체하면 면책이 어려워집니다.</li>\n<li><strong>재기 노력</strong> — 안정적 직장 유지, 가계부 작성, 신용상담 이용 등 경제적 재기 노력을 보여주는 것이 중요합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 한국도박문제예방치유원(1336)의 상담·치료 프로그램을 이수하면 법원 심리 시 유리한 자료가 됩니다.</blockquote>',
      },
      {
        title: '신청 시 주의사항과 준비',
        content:
          '<p><strong style="color:#1e3a5f">도박 채무 개인회생 신청 시에는 채무 발생 경위를 정직하게 밝히고, 관련 증빙을 철저히 준비해야 합니다.</strong></p>\n<ul>\n<li><strong>정직한 진술</strong> — 도박 사실을 숨기면 나중에 발각될 경우 면책이 취소될 수 있습니다. 신청서에 도박 경위를 솔직하게 기재하세요.</li>\n<li><strong>채무 목록 정리</strong> — 도박 관련 채무(카드 현금서비스, 대출, 사채 등)를 빠짐없이 기재합니다. 누락된 채무는 면책 대상에서 제외될 수 있습니다.</li>\n<li><strong>도박중독 치료 기록</strong> — 정신건강의학과 진료 기록, 도박중독 상담 기록, GA(단도박 모임) 참석 기록 등을 준비합니다.</li>\n<li><strong>변호사 선임 검토</strong> — 도박 채무 회생은 일반 회생보다 복잡하므로, 관련 경험이 있는 변호사 선임을 권장합니다. 법률구조공단(132) 무료 상담도 가능합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 개인회생 신청 후에도 도박을 계속하면 면책이 불허가될 뿐 아니라, 사기죄로 처벌받을 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 도박 채무자의 면책 허가 기준',
        summary:
          '법원은 도박으로 인한 채무라 하더라도 채무자가 도박을 중단하고, 진지하게 반성하며, 변제계획을 성실히 이행할 의사와 능력이 인정되면 면책을 허가할 수 있다고 판시하고 있습니다. 면책 불허가 사유는 절대적 불허가 사유가 아닌 재량적 불허가 사유이므로, 법원이 제반 사정을 종합하여 판단합니다.',
        takeaway:
          '도박 채무라도 포기하지 마세요. 도박 중단 입증, 치료 기록, 성실 변제 의지를 보여주면 면책 가능성이 충분히 있습니다.',
      },
    ],
    faq: [
      {
        question: '도박 사실을 숨기고 개인회생을 신청하면 어떻게 되나요?',
        answer:
          '<strong>도박 사실을 숨기면 사기죄에 해당할 수 있고, 면책이 확정된 후에도 취소될 수 있습니다.</strong> 채권자나 법원이 도박 사실을 발견하면 면책 불허가 결정이 내려지므로, 처음부터 솔직하게 밝히는 것이 유리합니다.',
      },
      {
        question: '카지노 빚도 개인회생으로 면책받을 수 있나요?',
        answer:
          '<strong>합법 카지노에서 발생한 채무도 개인회생 대상이며, 면책 판단 기준은 불법 도박 채무와 동일합니다.</strong> 도박 중단, 반성, 성실 변제 의지가 인정되면 면책 가능합니다.',
      },
      {
        question: '불법 도박으로 진 빚이면 면책이 더 어렵나요?',
        answer:
          '<strong>불법 도박 참여 자체가 범죄(도박죄)이므로, 법원이 면책 판단에서 더 엄격하게 볼 수 있습니다.</strong> 다만 불법 도박이라는 이유만으로 면책이 자동 불허가되지는 않으며, 법원이 종합적으로 판단합니다.',
      },
      {
        question: '면책이 불허가되면 어떻게 되나요?',
        answer:
          '<strong>면책 불허가 결정이 나면 변제계획에 따라 납부한 금액은 채무에 충당되지만, 나머지 채무는 그대로 남습니다.</strong> 불허가 결정에 대해 즉시항고(14일 이내)를 할 수 있으며, 이후 파산 면책 신청으로 전환하는 것도 검토할 수 있습니다.',
      },
    ],
    cta: {
      text: '도박 채무 개인회생 가능 여부, AI가 분석해드립니다',
      link: '/chat?domain=rehabilitation',
    },
    internalLinks: [
      { label: '개인회생 신청 요건과 자격', href: '/guide/rehabilitation/rehabilitation-eligibility-requirements-faq' },
      { label: '개인회생 vs 파산 비교', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy-choice' },
      { label: '개인회생 변제계획 안내', href: '/guide/rehabilitation/rehabilitation-repayment-plan-comprehensive' },
      { label: '개인회생 기각 사유 5가지', href: '/guide/rehabilitation/rehabilitation-rejection-5-reasons' },
      { label: '파산 면책 요건 총정리', href: '/guide/bankruptcy/bankruptcy-discharge-requirements-comprehensive' },
    ],
  },

  // ── 파산 1. 소상공인·자영업자 파산 신청 요건과 면책 절차 ──
  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-small-business-owner-filing',
    keyword: '소상공인 자영업자 파산 신청 요건 면책 절차',
    questionKeyword: '자영업을 접었는데 파산 신청이 가능한가요?',
    ctaKeyword: '소상공인 파산 신청 면책 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '소상공인·자영업자 파산 신청 요건과 면책 절차 | 로앤가이드',
      description:
        '자영업 폐업 후 빚이 남아 파산을 검토 중이라면 신청 요건과 면책 절차를 지금 확인하세요',
    },
    intro:
      '<p>3년간 운영하던 식당을 폐업했는데, 대출금과 미납 임대료, 밀린 세금까지 합치면 2억 원이 넘는 빚이 남았습니다. 수입은 끊겼고, 갚을 방법이 보이지 않습니다. 소상공인·자영업자도 개인 파산을 신청할 수 있으며, 면책 결정을 받으면 채무를 탕감받고 경제적으로 재기할 수 있습니다. 파산 신청 요건부터 면책 절차, 재기 방법까지 정리해보세요.</p>',
    sections: [
      {
        title: '소상공인 파산 신청 요건',
        content:
          '<p><strong style="color:#1e3a5f">개인 파산은 채무자가 지급불능 상태에 있을 때 신청할 수 있으며, 소상공인·자영업자도 개인 자격으로 신청 가능합니다.</strong></p>\n<ul>\n<li><strong>지급불능 요건</strong> — 채무자의 재산과 소득으로 변제기가 도래한 채무를 갚을 수 없는 상태를 말합니다. 단순히 빚이 많다고 되는 것이 아니라, 객관적으로 갚을 능력이 없어야 합니다.</li>\n<li><strong>개인 vs 법인 구별</strong> — 개인사업자는 개인 파산으로 신청하고, 법인 사업자는 법인 파산 절차를 따릅니다. 법인 대표의 연대보증 채무는 개인 파산으로 별도 처리합니다.</li>\n<li><strong>채무 금액 제한 없음</strong> — 개인회생과 달리 파산은 채무 금액 상한이 없습니다. 수십억 원의 채무라도 신청 가능합니다.</li>\n<li><strong>사업자등록 상태</strong> — 사업자등록이 유지 중이어도 파산 신청은 가능하지만, 폐업 신고 후 신청하는 것이 일반적입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 파산은 "갚을 능력이 없는 상태"를 법원이 인정하는 절차입니다. 소득이 있으면 개인회생이 더 적합할 수 있습니다.</blockquote>',
      },
      {
        title: '파산 절차 5단계',
        content:
          '<p><strong style="color:#1e3a5f">파산 절차는 신청 → 심문 → 파산선고 → 면책심문 → 면책결정의 5단계로 진행되며, 통상 6~12개월 소요됩니다.</strong></p>\n<ol>\n<li><strong>파산 신청</strong> — 관할 법원(채무자 주소지)에 파산 및 면책 신청서를 제출합니다. 채무자 목록, 재산 목록, 수입·지출 내역서, 재산 관련 서류를 첨부합니다.</li>\n<li><strong>파산 심문</strong> — 법원이 채무자를 심문하여 지급불능 상태를 확인합니다. 심문 기일에 출석하여 성실하게 답변해야 합니다.</li>\n<li><strong>파산 선고</strong> — 지급불능이 인정되면 법원이 파산을 선고합니다. 파산관재인이 선임되어 채무자의 재산을 조사·환가합니다.</li>\n<li><strong>면책 심문</strong> — 파산 선고 후 면책 심문 기일에 출석합니다. 채권자의 이의가 있으면 이 단계에서 다투어집니다.</li>\n<li><strong>면책 결정</strong> — 면책 불허가 사유가 없으면 법원이 면책을 결정합니다. 면책 결정이 확정되면 대부분의 채무가 탕감됩니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 파산 신청 가능 여부와 면책 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=bankruptcy" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '면책 심문과 면책 결정',
        content:
          '<p><strong style="color:#1e3a5f">면책 심문에서 법원은 면책 불허가 사유 유무를 확인하며, 성실한 태도가 면책 결정에 중요한 영향을 미칩니다.</strong></p>\n<ul>\n<li><strong>면책 불허가 사유</strong> — 채무자 회생법 제564조에 따라 재산 은닉, 허위 채무 기재, 도박·낭비, 사기에 의한 신용거래 등이 불허가 사유입니다.</li>\n<li><strong>재량 면책</strong> — 불허가 사유가 있더라도, 법원은 채무자의 반성, 불허가 사유의 경중 등을 고려하여 재량으로 면책을 허가할 수 있습니다.</li>\n<li><strong>면책 제외 채무</strong> — 조세, 벌금, 양육비, 고의 불법행위 손해배상금, 종업원 임금은 면책이 되더라도 탕감되지 않는 비면책채권입니다.</li>\n<li><strong>면책 확정</strong> — 면책 결정 후 14일 이내에 채권자가 항고하지 않으면 면책이 확정됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 종업원 임금체불이 있으면 파산·면책과 별도로 근로기준법에 따른 책임이 남으므로, 체불 임금 처리를 먼저 검토하세요.</blockquote>',
      },
      {
        title: '파산 후 재기와 신용 회복',
        content:
          '<p><strong style="color:#1e3a5f">면책 결정이 확정되면 경제적 재기를 시작할 수 있으며, 신용 회복까지 통상 5~7년이 소요됩니다.</strong></p>\n<ul>\n<li><strong>복권</strong> — 면책 결정이 확정되면 자동으로 복권되어, 파산으로 인한 자격 제한(이사, 공무원 등)이 해제됩니다.</li>\n<li><strong>신용 회복</strong> — 면책 후 한국신용정보원에 신용 회복 등록을 신청합니다. 신용등급은 점진적으로 회복되며, 5년 후 파산 기록이 삭제됩니다.</li>\n<li><strong>재창업 가능</strong> — 면책 후 다시 사업자등록을 하고 창업할 수 있습니다. 소상공인진흥공단의 재창업 지원 프로그램을 활용할 수 있습니다.</li>\n<li><strong>금융 거래</strong> — 면책 직후에는 신용카드 발급이 어렵지만, 체크카드와 선불카드는 즉시 사용 가능합니다. 1~2년 후 소액 신용대출부터 이용할 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 면책 후 신용협동조합(새마을금고, 신협 등)에서 소액 적금부터 시작하면 신용 회복에 도움이 됩니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 지급불능 상태 인정과 파산 선고 기준',
        summary:
          '법원은 개인 파산 신청 시 채무자의 재산 총액이 채무 총액에 현저히 미달하고, 소득으로 변제기가 도래한 채무를 갚을 수 없는 상태가 객관적으로 인정되면 파산을 선고해야 한다고 판시하고 있습니다.',
        takeaway:
          '소상공인이 폐업 후 채무가 남아 갚을 능력이 없다면 파산 선고 요건을 충족할 가능성이 높습니다. 재산과 소득 현황을 정확히 정리하여 지급불능을 입증하세요.',
      },
    ],
    faq: [
      {
        question: '사업자등록이 유지된 상태에서도 파산 신청이 가능한가요?',
        answer:
          '<strong>사업자등록이 유지 중이어도 파산 신청 자체는 가능합니다.</strong> 다만 실무적으로 폐업 신고 후 신청하는 것이 법원 심사에 유리하며, 사업 계속 의지가 있다면 개인회생이 더 적합할 수 있습니다.',
      },
      {
        question: '종업원 임금 체불이 있는데 파산하면 면책되나요?',
        answer:
          '<strong>종업원 임금, 퇴직금, 재해보상금은 비면책채권으로 파산·면책이 되어도 탕감되지 않습니다.</strong> 근로기준법에 따라 지급 의무가 존속하며, 체당금 제도를 통해 근로자에게 먼저 지급될 수 있습니다.',
      },
      {
        question: '면책 불허가 사유에 해당하면 절대 면책이 안 되나요?',
        answer:
          '<strong>면책 불허가 사유가 있더라도 법원이 재량으로 면책을 허가할 수 있습니다.</strong> 불허가 사유의 경중, 채무자의 반성, 성실성 등을 종합 고려하여 판단합니다. 다만 재산 은닉이나 허위 진술은 면책이 매우 어렵습니다.',
      },
      {
        question: '파산 면책 후 다시 사업을 시작할 수 있나요?',
        answer:
          '<strong>면책이 확정되면 복권되어 다시 사업자등록을 하고 창업할 수 있습니다.</strong> 소상공인진흥공단의 재기사업자 지원 프로그램, 서울신용보증재단의 재창업 보증 등을 활용하면 초기 자금 조달에 도움이 됩니다.',
      },
    ],
    cta: {
      text: '소상공인 파산 신청 가능 여부, AI가 분석해드립니다',
      link: '/chat?domain=bankruptcy',
    },
    internalLinks: [
      { label: '파산 면책 요건 총정리', href: '/guide/bankruptcy/bankruptcy-discharge-requirements-comprehensive' },
      { label: '파산 vs 회생 비교 선택 가이드', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy-choice' },
      { label: '파산 후 신용 회복 타임라인', href: '/guide/bankruptcy/bankruptcy-credit-recovery-timeline' },
      { label: '자영업자 폐업 후 파산', href: '/guide/bankruptcy/bankruptcy-self-employed-closing' },
      { label: '면책 후 생활 변화', href: '/guide/bankruptcy/bankruptcy-after-discharge-life-changes' },
    ],
  },

  // ── 전세 1. 전세보증금 반환보증보험 가입 요건과 청구 절차 ──
  {
    domain: 'jeonse',
    slug: 'jeonse-deposit-guarantee-insurance-guide',
    keyword: '전세보증금 반환보증보험 가입 조건 청구',
    questionKeyword: '전세보증금 반환보증보험은 어떻게 가입하고 청구하나요?',
    ctaKeyword: '전세보증금 반환보증보험 가입 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '전세보증금 반환보증보험 가입 요건과 청구 절차 | 로앤가이드',
      description:
        '전세보증금 반환보증보험 가입 조건과 보증사고 시 청구 방법이 궁금하다면 요건과 절차를 지금 확인하세요',
    },
    intro:
      '<p>전세 계약을 앞두고 "반환보증보험에 가입해야 안전하다"는 말을 들었습니다. 그런데 어디서 가입하는지, 어떤 조건이 있는지, 집주인이 보증금을 안 돌려주면 어떻게 청구하는지 잘 모르겠습니다. 전세보증금 반환보증보험은 주택도시보증공사(HUG), 한국주택금융공사(HF), SGI서울보증에서 가입할 수 있으며, 보증사고 발생 시 보증기관이 보증금을 대위변제해줍니다.</p>',
    sections: [
      {
        title: '반환보증보험이란 무엇인가',
        content:
          '<p><strong style="color:#1e3a5f">전세보증금 반환보증보험은 임대인이 보증금을 반환하지 않을 때, 보증기관이 세입자에게 보증금을 대신 지급해주는 보험입니다.</strong></p>\n<ul>\n<li><strong>보증 원리</strong> — 세입자가 보증료를 내고 가입하면, 임대인이 보증금을 돌려주지 않을 때 보증기관이 먼저 보증금을 지급하고, 이후 임대인에게 구상권을 행사합니다.</li>\n<li><strong>보증기관</strong> — HUG(주택도시보증공사), HF(한국주택금융공사), SGI서울보증 3곳에서 운영합니다. 기관마다 가입 조건과 보증한도가 다릅니다.</li>\n<li><strong>가입 시점</strong> — 전세 계약 체결 후, 전입신고와 확정일자를 받은 상태에서 가입합니다. 계약 기간 중 언제든 가입할 수 있지만, 계약 시작일로부터 빨리 가입할수록 유리합니다.</li>\n<li><strong>보증한도</strong> — HUG 기준 수도권 7억 원, 비수도권 5억 원 이하의 전세보증금에 대해 보증합니다(2026년 기준).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 반환보증보험은 전세사기 피해를 예방하는 가장 확실한 수단이며, 가입비(보증료)는 보증금 대비 연 0.1~0.4% 수준입니다.</blockquote>',
      },
      {
        title: '가입 조건과 제한 사항',
        content:
          '<p><strong style="color:#1e3a5f">반환보증보험 가입에는 주택 가격 대비 보증금 비율, 선순위 권리, 임차인 요건 등 일정한 제한이 있습니다.</strong></p>\n<ul>\n<li><strong>주택가격 대비 보증금 비율</strong> — HUG 기준, 전세보증금이 주택가격의 100%를 초과하면 가입이 제한됩니다. 깡통전세(역전세)인 경우 가입이 어렵습니다.</li>\n<li><strong>선순위 권리 확인</strong> — 근저당, 가압류 등 선순위 권리가 과다하면 가입이 거절될 수 있습니다. 등기부등본을 기반으로 심사합니다.</li>\n<li><strong>임차인 요건</strong> — 전입신고, 확정일자가 완료되어야 합니다. 법인 임차는 일부 제한이 있습니다.</li>\n<li><strong>다가구·다세대 제한</strong> — 건물 전체의 선순위 채권 합계가 주택 가격을 초과하는 경우 가입이 제한됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 보증보험 가입 가능 여부를 분석해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '보증사고 발생 시 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">임대인이 보증금을 반환하지 않으면 보증기관에 보증이행을 청구하여 보증금을 돌려받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>보증사고 확인</strong> — 임대차 계약 만료 후 임대인이 1개월 이상 보증금을 반환하지 않으면 보증사고에 해당합니다.</li>\n<li><strong>보증이행 청구</strong> — 보증기관(HUG, HF 등)에 보증이행청구서, 임대차계약서, 전입세대확인서, 내용증명 발송 확인서 등을 제출합니다.</li>\n<li><strong>심사 및 지급</strong> — 보증기관이 서류를 심사하고 보증사고를 확인한 후, 통상 1~2개월 이내에 보증금을 지급합니다.</li>\n<li><strong>대위변제 후 절차</strong> — 보증기관이 보증금을 지급한 후, 임대인에게 구상권을 행사합니다. 세입자는 보증금을 수령하고 퇴거하면 됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 계약 만료 전 임대인에게 보증금 반환을 내용증명으로 요청해두면, 보증사고 청구 시 절차가 빨라집니다.</blockquote>',
      },
      {
        title: '미가입 시 대처법',
        content:
          '<p><strong style="color:#1e3a5f">반환보증보험에 가입하지 못했거나 안 했다면, 임차권등기명령, 지급명령, 소송 등 법적 수단으로 보증금을 회수해야 합니다.</strong></p>\n<ul>\n<li><strong>임차권등기명령</strong> — 계약 만료 후 보증금을 돌려받지 못한 상태에서 이사해야 할 때, 법원에 임차권등기명령을 신청하여 대항력을 유지합니다.</li>\n<li><strong>지급명령 신청</strong> — 보증금 반환 청구를 위해 법원에 지급명령을 신청합니다. 비용이 소액사건 소송보다 저렴하고 빠릅니다.</li>\n<li><strong>임대차보증금 반환소송</strong> — 임대인이 지급명령에 이의하면 본안 소송으로 전환됩니다. 소액사건(3,000만 원 이하)은 1회 심리로 빠르게 처리됩니다.</li>\n<li><strong>경매 배당</strong> — 임대인 소유 부동산에 강제경매를 신청하여, 경매 대금에서 보증금을 배당받을 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 보증보험 미가입 시 보증금 회수에 6개월~2년이 소요될 수 있으므로, 가능하면 반드시 가입하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 세입자 등기 말소와 대항력 상실',
        summary:
          '대법원 2025다213466 사건(대법원 선고)에서 법원은 주택임대차보호법상 세입자가 주민등록을 전출하면 대항력을 상실하며, 보증보험이 없는 상태에서 대항력을 잃으면 보증금 회수가 극히 어려워진다는 점을 판시했습니다.',
        takeaway:
          '반환보증보험이 없는 세입자는 전입신고와 거주를 유지해야 대항력을 보전할 수 있습니다. 보증보험 가입이 왜 중요한지를 보여주는 판례입니다.',
      },
    ],
    faq: [
      {
        question: '빌라나 다세대주택도 반환보증보험에 가입할 수 있나요?',
        answer:
          '<strong>빌라, 다세대주택도 가입 가능하지만, 건물 전체의 선순위 채권을 합산하여 심사하므로 가입이 거절될 수 있습니다.</strong> HUG 홈페이지에서 사전 가입 가능 여부를 조회할 수 있습니다.',
      },
      {
        question: '보증료는 얼마나 되나요?',
        answer:
          '<strong>보증료는 보증금과 보증기간에 따라 다르며, 연 0.1~0.4% 수준입니다.</strong> 예를 들어 보증금 3억 원, 2년 계약 기준 HUG 보증료는 약 60~120만 원입니다. 보증료는 전세 계약 기간 동안 한 번만 납부합니다.',
      },
      {
        question: '집주인 동의가 있어야 가입할 수 있나요?',
        answer:
          '<strong>집주인 동의 없이도 가입할 수 있습니다.</strong> 세입자가 단독으로 전입신고, 확정일자를 받은 상태에서 보증기관에 신청하면 됩니다. 집주인의 서류 협조가 필요하지 않습니다.',
      },
      {
        question: '보증한도를 초과하는 보증금은 어떻게 되나요?',
        answer:
          '<strong>보증한도를 초과하는 금액은 보증 대상에서 제외되며, 초과분은 세입자가 직접 회수해야 합니다.</strong> 예를 들어 보증한도가 7억 원인데 보증금이 8억 원이면, 1억 원은 보증 대상이 아닙니다.',
      },
    ],
    cta: {
      text: '전세보증금 반환보증보험 가입 가능 여부, AI가 확인해드립니다',
      link: '/chat?domain=jeonse',
    },
    internalLinks: [
      { label: '전세보증금 반환 종합 가이드', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
      { label: '전세사기 피해 구제 타임라인', href: '/guide/jeonse/jeonse-fraud-relief-timeline' },
      { label: '전세보증금 우선변제 순위', href: '/guide/jeonse/jeonse-deposit-priority-competing' },
      { label: '전세 계약 특약 체크리스트', href: '/guide/jeonse/jeonse-contract-special-agreement-checklist' },
      { label: '전세 임대인 변경 시 대응', href: '/guide/jeonse/jeonse-landlord-change-deposit-risk' },
    ],
  },

  // ── 전세 2. 전세→월세 전환 시 적정 전환율과 분쟁 대응법 ──
  {
    domain: 'jeonse',
    slug: 'jeonse-monthly-rent-conversion-dispute',
    keyword: '전세 월세 전환 적정 전환율 분쟁 대응',
    questionKeyword: '임대인이 전세를 월세로 전환하자고 하는데 전환율이 적정한가요?',
    ctaKeyword: '전세 월세 전환율 분쟁 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '전세→월세 전환 시 적정 전환율과 분쟁 대응법 | 로앤가이드',
      description:
        '전세에서 월세로 전환을 요구받았는데 적정 전환율이 궁금하다면 법적 상한과 분쟁 대응법을 지금 확인하세요',
    },
    intro:
      '<p>전세 계약 갱신 시 임대인이 "전세보증금 일부를 월세로 전환하겠다"고 통보합니다. 보증금 3억 원 중 1억 원을 빼고 월세 50만 원을 내라는데, 이 전환율이 적정한지 판단이 서지 않습니다. 주택임대차보호법은 전월세 전환율의 상한을 정해두고 있으며, 이를 초과하는 전환은 위법합니다. 적정 전환율 계산 방법과 분쟁 대응법을 정리해보세요.</p>',
    sections: [
      {
        title: '전환율 법적 상한(주택임대차보호법)',
        content:
          '<p><strong style="color:#1e3a5f">주택임대차보호법 제7조의2는 전세보증금을 월세로 전환할 때 적용되는 전환율의 상한을 규정하고 있습니다.</strong></p>\n<ul>\n<li><strong>법정 상한</strong> — 전환율은 한국은행 기준금리 + 대통령령이 정한 비율(현재 2%) 이내여야 합니다. 2026년 4월 기준 한국은행 기준금리를 감안하면 전환율 상한은 약 4.75~5.0% 수준입니다.</li>\n<li><strong>계산 공식</strong> — 월 차임 = (보증금 감소분 × 전환율) ÷ 12</li>\n<li><strong>상한 초과 시</strong> — 법정 상한을 초과하는 전환율은 초과 부분이 무효이며, 세입자는 상한 이내의 월세만 지급하면 됩니다.</li>\n<li><strong>기준금리 변동</strong> — 기준금리가 변동되면 전환율 상한도 함께 변동됩니다. 계약 시점의 기준금리를 기준으로 판단합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 전환율 상한은 기준금리 + 2%이며, 이를 초과하는 월세를 요구하면 위법합니다.</blockquote>',
      },
      {
        title: '적정 전환율 계산 방법',
        content:
          '<p><strong style="color:#1e3a5f">적정 전환율은 법정 상한 이내에서, 시장 금리와 지역 시세를 반영하여 결정합니다.</strong></p>\n<ul>\n<li><strong>계산 예시</strong> — 보증금 3억 원에서 1억 원을 감소시키고 전환율 5%를 적용하면: 월 차임 = (1억 원 × 5%) ÷ 12 = 약 41.7만 원</li>\n<li><strong>시장 전환율</strong> — 2026년 현재 서울 아파트 시장 전환율은 약 4~5%, 빌라·다세대는 5~6% 수준입니다. 법정 상한을 초과하는 경우가 많으므로 주의하세요.</li>\n<li><strong>전환율 비교</strong> — 전세보증금 반환보증보험 보증료(0.1~0.4%), 전세 대출 금리(3~4%), 정기예금 금리(3~4%)와 비교하여 유불리를 판단합니다.</li>\n<li><strong>세금 고려</strong> — 월세는 소득공제 대상(총급여 7천만 원 이하, 최대 17%)이므로, 세금 혜택을 감안하면 실질 부담이 줄어들 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 적정 전환율과 월세 부담을 계산해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '임대인이 과도한 전환율 요구 시 대응',
        content:
          '<p><strong style="color:#1e3a5f">임대인이 법정 상한을 초과하는 전환율을 요구하면, 세입자는 이를 거부하고 법적으로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>상한 초과 거부</strong> — 법정 상한을 초과하는 전환율은 초과 부분이 무효이므로, 세입자는 상한 이내의 금액만 납부하면 됩니다.</li>\n<li><strong>내용증명 발송</strong> — 임대인에게 내용증명으로 법정 상한 전환율을 안내하고, 적정 전환율로 재협의를 요청합니다.</li>\n<li><strong>주택임대차분쟁조정위원회</strong> — 합의가 안 되면 대한법률구조공단 산하 주택임대차분쟁조정위원회에 조정을 신청합니다. 비용이 무료이며, 약 60일 이내에 결론이 나옵니다.</li>\n<li><strong>계약 갱신 거절 주의</strong> — 전환율 분쟁 과정에서 임대인이 계약 갱신을 거절할 수 있으므로, 계약갱신청구권 행사 기한(만료 6개월~2개월 전)을 놓치지 마세요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대한법률구조공단(132)에 전화하면 전환율 적법성에 대한 무료 상담을 받을 수 있습니다.</blockquote>',
      },
      {
        title: '전환 합의서 작성 시 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">전월세 전환에 합의할 때는 전환율, 월세 금액, 보증금 변동, 계약 기간 등을 명확히 기재한 합의서를 작성해야 합니다.</strong></p>\n<ul>\n<li><strong>합의서 필수 기재</strong> — 전환 전 보증금, 전환 후 보증금, 월 차임, 전환율, 적용 시작일, 계약 잔여 기간을 명시합니다.</li>\n<li><strong>확정일자 재수령</strong> — 보증금이 변경되면 변경 계약서에 대해 확정일자를 다시 받아야 우선변제권이 유지됩니다.</li>\n<li><strong>보증보험 재가입</strong> — 보증금이 변경되면 기존 반환보증보험의 보증 금액도 변경해야 합니다. 보증기관에 변경 신청하세요.</li>\n<li><strong>증액 제한 확인</strong> — 계약갱신청구권 행사 시 전월세 전환을 포함한 총 증액분이 5%를 초과할 수 없습니다(임대차보호법 제7조).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 전환 합의서를 작성하지 않으면 나중에 전환 조건에 대한 분쟁이 발생할 수 있으므로, 반드시 서면으로 남기세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 부동산 중개인의 세입자 보호 의무',
        summary:
          '대법원 2024다283668 사건(대법원 선고)에서 법원은 부동산 중개업자가 임대차 계약 중개 시 세입자에게 전세보증금 반환 위험, 선순위 채권 현황 등을 충실히 설명할 의무가 있으며, 이를 위반한 경우 손해배상 책임을 진다고 판시했습니다.',
        takeaway:
          '전월세 전환 시에도 중개인의 설명 의무가 적용됩니다. 전환율의 법적 상한, 보증보험 재가입 필요성 등에 대해 충분한 설명을 받지 못했다면 중개인에게 책임을 물을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '2026년 전환율 상한은 몇 %인가요?',
        answer:
          '<strong>전환율 상한은 한국은행 기준금리 + 2%입니다.</strong> 2026년 4월 현재 기준금리에 따라 약 4.75~5.0% 수준이며, 기준금리 변동에 따라 상한도 변동됩니다. 최신 기준금리는 한국은행 홈페이지에서 확인하세요.',
      },
      {
        question: '임대인이 일방적으로 전세를 월세로 전환할 수 있나요?',
        answer:
          '<strong>임대인이 일방적으로 전환할 수 없으며, 세입자의 동의가 있어야 합니다.</strong> 계약 갱신 시 전환을 제안할 수 있지만, 세입자가 기존 전세 조건 유지를 원하면 계약갱신청구권으로 보호받을 수 있습니다.',
      },
      {
        question: '전환을 거부할 수 있나요?',
        answer:
          '<strong>계약갱신청구권이 있는 동안에는 기존 조건(전세)으로 갱신을 청구할 수 있습니다.</strong> 다만 갱신 청구권을 이미 행사한 경우에는 임대인이 새로운 조건(월세 전환)을 제시할 수 있고, 합의가 안 되면 계약이 종료될 수 있습니다.',
      },
      {
        question: '보증금 일부만 월세로 전환할 수도 있나요?',
        answer:
          '<strong>보증금 전액이 아닌 일부만 월세로 전환하는 반전세(보증부 월세) 형태도 가능합니다.</strong> 이 경우에도 전환 부분에 대해 법정 상한 전환율이 적용됩니다. 보증금이 줄어드는 만큼 반환보증보험 금액도 조정해야 합니다.',
      },
    ],
    cta: {
      text: '전세 월세 전환율 적정성, AI가 계산해드립니다',
      link: '/chat?domain=jeonse',
    },
    internalLinks: [
      { label: '전세보증금 반환 가이드', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
      { label: '전세 월세 전환 세입자 권리', href: '/guide/jeonse/jeonse-monthly-conversion-tenant-rights' },
      { label: '전세 계약 갱신 거절 대응', href: '/guide/jeonse/jeonse-renewal-landlord-refusal' },
      { label: '전세 계약 특약 체크리스트', href: '/guide/jeonse/jeonse-contract-special-agreement-checklist' },
      { label: '전세보증금 우선변제 순위', href: '/guide/jeonse/jeonse-deposit-priority-competing' },
    ],
  },

  // ── 상속 1. 상속재산 은닉·누락 발견 시 추가 분할 청구 ──
  {
    domain: 'inheritance',
    slug: 'inheritance-hidden-asset-additional-division',
    keyword: '상속재산 은닉 누락 추가 분할 청구',
    questionKeyword: '상속 분할 후 은닉된 재산을 발견했는데 추가 분할을 청구할 수 있나요?',
    ctaKeyword: '상속재산 은닉 추가 분할 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '상속재산 은닉·누락 발견 시 추가 분할 청구 3단계 | 로앤가이드',
      description:
        '상속 분할 후 은닉된 재산을 발견했다면 추가 분할 청구 요건과 절차를 지금 확인하세요',
    },
    intro:
      '<p>아버지 유산을 형제들과 나눈 지 1년이 지났는데, 형이 아버지 명의의 예금 5천만 원을 숨기고 혼자 인출한 사실이 드러났습니다. 이미 분할이 끝났는데 추가로 나눌 수 있는 건지, 은닉한 형에게 법적 제재가 가능한 건지 궁금합니다. 상속재산 분할 후에도 누락된 재산이 발견되면 추가 분할을 청구할 수 있으며, 은닉한 상속인에게는 민·형사적 책임을 물을 수 있습니다.</p>',
    sections: [
      {
        title: '은닉 상속재산 발견 경로',
        content:
          '<p><strong style="color:#1e3a5f">상속재산 분할 후에도 예금, 보험금, 부동산, 주식 등 은닉된 재산이 추후 발견되는 경우가 적지 않습니다.</strong></p>\n<ul>\n<li><strong>금융 조회</strong> — 안심상속 원스톱 서비스(정부24)를 통해 피상속인 명의의 예금, 보험, 증권, 자동차, 토지 등을 일괄 조회할 수 있습니다. 상속 후에도 추가 조회가 가능합니다.</li>\n<li><strong>부동산 확인</strong> — 등기부등본 조회, 토지대장 열람을 통해 피상속인 명의의 미발견 부동산을 확인합니다. 지방 소재 농지, 임야 등이 누락되는 경우가 많습니다.</li>\n<li><strong>제3자 제보</strong> — 피상속인과 거래했던 사람이나 친척을 통해 숨겨진 재산 정보를 얻는 경우도 있습니다.</li>\n<li><strong>세무조사</strong> — 상속세 신고 후 세무조사 과정에서 신고되지 않은 재산이 발견되기도 합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상속 분할 전에 안심상속 원스톱 서비스로 재산을 빠짐없이 조회하는 것이 은닉 방지의 첫 번째 단계입니다.</blockquote>',
      },
      {
        title: '추가 분할 청구 요건과 시효',
        content:
          '<p><strong style="color:#1e3a5f">협의 분할이든 심판 분할이든, 분할 당시 포함되지 않은 재산이 발견되면 추가 분할을 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>추가 분할 청구권</strong> — 분할에서 누락된 상속재산은 공동상속인 전원의 공유 상태로 남아 있으므로, 언제든 추가 분할을 청구할 수 있습니다.</li>\n<li><strong>시효 문제</strong> — 상속재산 분할 청구권 자체에는 소멸시효가 없습니다. 다만 은닉자에 대한 손해배상 청구는 안 날로부터 3년, 불법행위일로부터 10년의 소멸시효가 적용됩니다.</li>\n<li><strong>협의 분할 효력</strong> — 기존 협의 분할은 그 범위 내에서 유효하며, 누락된 재산에 대해서만 추가 분할이 이루어집니다.</li>\n<li><strong>은닉의 입증</strong> — 은닉을 주장하는 측이 해당 재산이 상속재산에 포함됨에도 의도적으로 은닉되었음을 입증해야 합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 추가 분할 가능 여부와 필요 증거를 분석해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '법원 심판 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">공동상속인 간 협의가 되지 않으면 가정법원에 상속재산 분할 심판을 청구하여 추가 분할을 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>조정 전치</strong> — 상속재산 분할은 조정 전치주의가 적용되므로, 먼저 조정 신청을 해야 합니다. 조정이 불성립하면 자동으로 심판으로 전환됩니다.</li>\n<li><strong>심판 청구서 작성</strong> — 청구인(누락 재산 발견자), 상대방(다른 공동상속인), 분할 대상 재산(누락된 재산), 분할 방법을 기재합니다.</li>\n<li><strong>증거 제출</strong> — 누락된 재산의 존재 증명(금융거래 내역, 등기부등본 등), 은닉 사실 증명(인출 기록, 명의 이전 기록 등)을 제출합니다.</li>\n<li><strong>분할 방법</strong> — 법원은 현물 분할, 대금 분할(경매), 가액 분할(차액 보상) 중 적절한 방법을 결정합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 조정 단계에서 합의하면 심판보다 빠르게 해결되며, 당사자 간 유연한 분할이 가능합니다.</blockquote>',
      },
      {
        title: '은닉자에 대한 법적 제재',
        content:
          '<p><strong style="color:#1e3a5f">상속재산을 은닉하거나 무단 인출한 상속인에게는 민사 손해배상과 형사 처벌이 가능합니다.</strong></p>\n<ul>\n<li><strong>부당이득 반환</strong> — 다른 상속인의 상속분에 해당하는 금액을 부당이득으로 반환 청구할 수 있습니다. 법정이자(연 5%)도 함께 청구합니다.</li>\n<li><strong>손해배상</strong> — 은닉 행위로 인한 손해(변호사 비용, 추가 조사 비용 등)에 대해 손해배상을 청구할 수 있습니다.</li>\n<li><strong>횡령죄 고소</strong> — 공동상속 재산을 무단 인출·처분한 경우, 횡령죄(형법 제355조)로 형사고소할 수 있습니다. 5년 이하 징역 또는 1,500만 원 이하 벌금입니다.</li>\n<li><strong>상속분 감액</strong> — 민법 제1008조의2에 따라, 상속재산을 은닉·처분한 상속인은 그 부분에 대한 상속분을 주장할 수 없습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 형사고소는 합의 압박 수단으로도 활용할 수 있지만, 가족 관계를 고려하여 신중하게 결정하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 공동상속인의 상속 예금 무단 인출 분쟁',
        summary:
          '대법원 2025다212863 사건(대법원 선고)에서 법원은 공동상속인 중 일부가 피상속인의 예금을 무단으로 인출한 경우, 상속재산분할의 대상이 되는지와 부당이득반환 청구의 관계에 대해 판시하며, 무단 인출 재산에 대한 분쟁 해결 기준을 제시했습니다.',
        takeaway:
          '공동상속인이 상속 예금을 무단 인출한 경우, 부당이득반환 청구와 상속재산 추가 분할 청구를 병행할 수 있습니다. 인출 시점, 금액, 사용처에 대한 증거를 확보하세요.',
      },
    ],
    faq: [
      {
        question: '협의 분할이 끝난 후에도 추가 분할이 가능한가요?',
        answer:
          '<strong>협의 분할에서 누락된 재산은 공유 상태로 남아 있으므로, 추가 분할 청구가 가능합니다.</strong> 기존 협의 분할의 효력은 유지되며, 누락된 재산에 대해서만 추가로 분할을 진행합니다.',
      },
      {
        question: '해외에 있는 은닉 재산도 추가 분할 대상인가요?',
        answer:
          '<strong>해외 재산도 상속재산에 포함되며, 추가 분할 대상입니다.</strong> 다만 해외 재산의 조회와 집행이 어려울 수 있으므로, 국제사법공조나 해외 현지 변호사의 도움이 필요할 수 있습니다.',
      },
      {
        question: '은닉한 상속인을 형사 처벌할 수 있나요?',
        answer:
          '<strong>공동상속 재산을 무단으로 인출하거나 처분한 경우 횡령죄로 형사고소할 수 있습니다.</strong> 5년 이하 징역 또는 1,500만 원 이하 벌금에 해당하며, 은닉 금액이 크면 가중처벌될 수 있습니다.',
      },
      {
        question: '추가 분할 청구의 시효는 몇 년인가요?',
        answer:
          '<strong>상속재산 분할 청구권 자체에는 소멸시효가 없으므로, 누락된 재산이 발견되면 언제든 청구할 수 있습니다.</strong> 다만 은닉자에 대한 불법행위 손해배상 청구는 안 날로부터 3년, 행위일로부터 10년의 시효가 있습니다.',
      },
    ],
    cta: {
      text: '상속재산 은닉 발견 시 대응법, AI가 안내해드립니다',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '상속재산 조회 방법', href: '/guide/inheritance/inheritance-asset-inquiry-method' },
      { label: '상속재산 분할 조정·심판', href: '/guide/inheritance/inheritance-division-mediation-tribunal' },
      { label: '유류분 반환 청구 가이드', href: '/guide/inheritance/inheritance-forced-share-lawsuit-guide' },
      { label: '상속 순위와 법정 상속분', href: '/guide/inheritance/inheritance-order-legal-share' },
      { label: '상속등기 절차와 서류', href: '/guide/inheritance/inheritance-registration-procedure-docs' },
    ],
  },
];
