import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 이혼 3개 + 교통사고 3개 + 사기 2개 + 회생·파산 2개 + 전세 1개 (batch33)
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch33Nonlabor: SpokePage[] = [
  // ── 이혼 1. 재산분할 기준과 범위 총정리 ──
  {
    domain: 'divorce',
    slug: 'divorce-property-division-comprehensive',
    keyword: '이혼 재산분할 기준 범위 총정리',
    questionKeyword: '이혼할 때 재산분할은 어떤 기준으로 나누나요?',
    ctaKeyword: '이혼 재산분할 기준 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '이혼 재산분할 기준·비율·대상 총정리 | 로앤가이드',
      description:
        '이혼 시 재산분할 비율은 어떻게 정해질까요? 분할 대상 재산, 기여도 산정, 숨긴 재산 추적까지 지금 확인하세요.',
    },
    intro:
      '<p>결혼 후 함께 모은 재산이 있지만, 대부분 배우자 명의로 되어 있습니다. 이혼하면 내 몫은 얼마나 될까요? 법원은 명의가 아니라 실질적 기여도를 기준으로 재산을 나눕니다. 재산분할의 대상이 되는 재산의 범위와 법원이 적용하는 기준을 정확히 알면, 불리한 결과를 막을 수 있습니다.</p>',
    sections: [
      {
        title: '재산분할 대상이 되는 재산의 범위',
        content:
          '<p><strong style="color:#1e3a5f">혼인 중 부부가 공동으로 형성한 재산이 분할 대상이며, 명의와 관계없이 실질을 봅니다.</strong></p>\n<ul>\n<li><strong>부동산</strong> — 아파트, 토지, 상가 등 혼인 중 취득한 부동산은 누구 명의든 분할 대상입니다. 다만 혼인 전 취득한 부동산은 특유재산으로 원칙적으로 제외됩니다.</li>\n<li><strong>금융자산</strong> — 예금, 적금, 주식, 펀드, 보험해지환급금 등이 포함됩니다. 혼인 기간 중 불입한 부분만 대상이 됩니다.</li>\n<li><strong>퇴직금·연금</strong> — 혼인 기간에 해당하는 퇴직금과 국민연금 분할연금도 재산분할 대상입니다. 2026년 현재 국민연금 분할연금은 혼인 기간 5년 이상일 때 청구 가능합니다.</li>\n<li><strong>채무</strong> — 혼인 중 공동생활을 위해 부담한 채무(주택담보대출, 생활비 대출 등)는 분할 시 공제됩니다. 개인적 도박 빚 등은 제외될 수 있습니다.</li>\n<li><strong>특유재산 제외</strong> — 혼인 전 취득한 재산, 상속·증여로 받은 재산은 원칙적으로 분할 대상에서 제외됩니다. 다만 상대방이 유지·증가에 기여했다면 일부 포함될 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 혼인 전 재산이라도 혼인 중 대출을 상환하거나 리모델링 비용을 냈다면 기여분이 인정될 수 있습니다.</blockquote>',
      },
      {
        title: '법원이 적용하는 기여도 산정 기준',
        content:
          '<p><strong style="color:#1e3a5f">법원은 부부 각자의 재산 형성 기여도를 종합적으로 판단하여 분할 비율을 정합니다.</strong></p>\n<ul>\n<li><strong>경제적 기여</strong> — 소득 활동을 통해 재산 형성에 직접 기여한 정도입니다. 맞벌이 부부는 소득 비율이 중요한 참고자료가 됩니다.</li>\n<li><strong>가사노동 기여</strong> — 전업주부의 가사노동, 육아, 가정 관리도 경제적 기여와 동등하게 평가됩니다. 판례상 전업주부의 기여도는 통상 30~50%로 인정됩니다.</li>\n<li><strong>혼인 기간</strong> — 혼인 기간이 길수록 공동 형성 재산으로 인정되는 범위가 넓어집니다. 20년 이상 장기 혼인의 경우 50:50에 가까운 분할이 이루어지는 경향이 있습니다.</li>\n<li><strong>재산 감소 원인</strong> — 일방의 낭비, 도박, 은닉 행위가 있으면 그 부분을 고려하여 상대방에게 유리하게 조정합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>내 재산분할 비율, AI가 예측해 드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">혼인 기간과 재산 현황을 입력하면 예상 분할 비율을 무료로 확인하세요.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '재산분할 청구 절차와 시효',
        content:
          '<p><strong style="color:#1e3a5f">재산분할은 이혼 확정일로부터 2년 이내에 청구해야 하며, 협의 또는 재판으로 진행합니다.</strong></p>\n<ul>\n<li><strong>협의 분할</strong> — 부부가 합의하면 별도 소송 없이 재산을 나눌 수 있습니다. 합의 내용을 공증받아두면 나중에 분쟁을 예방할 수 있습니다.</li>\n<li><strong>재판상 청구</strong> — 합의가 안 되면 가정법원에 재산분할심판을 청구합니다. 이혼 소송과 함께 청구하거나, 이혼 후 별도로 청구할 수 있습니다.</li>\n<li><strong>2년 제척기간</strong> — 이혼이 확정된 날부터 2년이 지나면 재산분할청구권이 소멸합니다. 협의이혼은 신고일, 재판이혼은 확정일 기준입니다.</li>\n<li><strong>재산 은닉 대비</strong> — 상대방이 재산을 빼돌릴 우려가 있으면 법원에 사전처분(재산보전) 신청을 하여 재산 처분을 막을 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 재산분할 제척기간 2년은 연장이 불가능합니다. 이혼 후 바로 청구 준비를 시작하세요.</blockquote>',
      },
      {
        title: '재산분할 준비 시 꼭 확인할 사항',
        content:
          '<p><strong style="color:#1e3a5f">재산분할을 유리하게 이끌려면 사전에 증거를 확보하고 전략을 세워야 합니다.</strong></p>\n<ul>\n<li><strong>재산 목록 작성</strong> — 부동산 등기부등본, 금융거래내역, 차량등록 현황, 보험 가입내역 등을 미리 확인합니다. 법원 재산조회를 통해 상대방 명의 재산도 파악할 수 있습니다.</li>\n<li><strong>기여도 입증 자료</strong> — 급여명세서, 가계부, 육아 관련 지출내역, 부동산 대출 상환 기록 등이 기여도를 증명하는 핵심 자료입니다.</li>\n<li><strong>재산 은닉 감시</strong> — 이혼 논의가 시작되면 상대방이 예금을 인출하거나 부동산 명의를 변경할 수 있습니다. 의심스러운 거래 내역을 확보해 두세요.</li>\n<li><strong>부양적 요소</strong> — 이혼 후 경제적으로 어려운 처지에 놓이는 경우, 법원이 부양적 요소를 고려하여 분할 비율을 조정할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">팁: 상대방 명의 재산이 파악되지 않으면, 소송 중 법원에 금융기관·국세청 등에 대한 재산조회를 신청할 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 이혼 당사자 사망 후에도 재산분할청구 가능',
        summary:
          '대법원 2024스876 사건(대법원, 2026.01.15 선고)에서 법원은 재산분할 제도의 취지를 고려할 때, 이혼을 한 당사자 일방이 사망하더라도 그의 재산분할의무는 상속인들에게 승계되므로, 전 배우자의 상속인들을 상대로 재산분할을 청구할 수 있다고 판시했습니다.',
        takeaway:
          '이혼 후 재산분할을 청구하기 전에 상대방이 사망하더라도 포기할 필요가 없습니다. 상속인을 상대로 2년 내에 청구할 수 있으니, 전문가 상담을 통해 대응 전략을 세우세요.',
      },
    ],
    faq: [
      {
        question: '이혼 재산분할 비율은 보통 어떻게 정해지나요?',
        answer:
          '<p>원칙적으로 혼인 전 취득한 재산은 특유재산으로 분할 대상에서 제외됩니다. 다만 혼인 중 대출을 함께 상환했거나 리모델링 비용을 지출한 경우, 그 기여분에 해당하는 부분은 분할 대상이 될 수 있습니다.</p>',
      },
      {
        question: '전업주부인데 재산분할에서 불리하지 않을까요?',
        answer:
          '<p>전업주부의 가사노동과 육아도 법원에서 경제적 기여와 동등하게 평가합니다. 판례상 전업주부의 기여도는 30~50% 수준으로 인정되며, 혼인 기간이 길수록 기여도가 높게 평가되는 경향이 있습니다.</p>',
      },
      {
        question: '상대방이 재산을 빼돌리면 어떻게 해야 하나요?',
        answer:
          '<p>이혼 소송 중 법원에 사전처분(재산보전) 신청을 하면 상대방의 재산 처분을 금지할 수 있습니다. 또한 이미 빼돌린 재산은 사해행위취소 소송을 통해 원상회복을 청구할 수 있으니, 의심스러운 거래 내역을 빠르게 확보하세요.</p>',
      },
      {
        question: '퇴직금도 재산분할 대상인가요?',
        answer:
          '<p>네, 혼인 기간에 해당하는 퇴직금은 재산분할 대상입니다. 아직 퇴직하지 않은 경우에도 장래 수령할 퇴직금의 혼인 기간 해당분을 현재가치로 환산하여 분할 대상에 포함시킬 수 있습니다.</p>',
      },
      {
        question: '이혼 후 재산분할 청구 기한은 언제까지인가요?',
        answer:
          '<p>이혼 확정일로부터 2년입니다. 이 기간은 제척기간으로 연장이 불가능하며, 기간 내에 청구하지 않으면 권리가 소멸합니다. 협의이혼은 이혼신고일, 재판이혼은 판결 확정일이 기산점입니다.</p>',
      },
    ],
    cta: { text: '이혼 재산분할 기여도 AI로 분석받기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼 어디서부터', href: '/guide/divorce/decided-divorce-where-to-begin' },
      { label: '협의이혼 절차', href: '/guide/divorce/consensual-divorce-process' },
      { label: '재판이혼 절차', href: '/guide/divorce/trial-divorce-lawsuit-procedure' },
      { label: '재산분할 범위 FAQ', href: '/guide/divorce/divorce-property-division-scope-faq' },
      { label: '양육비 증액 방법', href: '/guide/divorce/divorce-child-support-increase' },
    ],
  },

  // ── 이혼 2. 위자료 산정 기준과 평균 금액 ──
  {
    domain: 'divorce',
    slug: 'divorce-alimony-calculation-standard',
    keyword: '위자료 산정 기준 금액 총정리',
    questionKeyword: '이혼 위자료는 어떤 기준으로 얼마나 받을 수 있나요?',
    ctaKeyword: '이혼 위자료 산정 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '이혼 위자료 산정 기준과 평균 금액 | 로앤가이드',
      description:
        '이혼 위자료를 얼마나 받을 수 있을지 궁금하다면, 법원 산정 기준과 최근 판결 금액 수준을 지금 확인하세요.',
    },
    intro:
      '<p>배우자의 외도로 이혼을 결심했는데, 위자료를 얼마나 청구할 수 있을지 감이 잡히지 않습니다. 친구는 5천만원을 받았다고 하고, 인터넷에는 수백만원밖에 못 받는다는 글도 있습니다. 위자료는 귀책사유의 종류와 정도, 혼인 기간, 자녀 유무 등에 따라 크게 달라지며, 최근 판례 경향을 알면 현실적인 금액을 예측할 수 있습니다.</p>',
    sections: [
      {
        title: '위자료의 법적 성격과 청구 요건',
        content:
          '<p><strong style="color:#1e3a5f">위자료는 이혼에 책임 있는 배우자가 상대방의 정신적 고통에 대해 배상하는 금전입니다.</strong></p>\n<ul>\n<li><strong>귀책사유</strong> — 부정행위(외도), 가정폭력, 악의의 유기, 심각한 모욕 등 이혼의 원인을 제공한 배우자에게 위자료 지급 의무가 있습니다.</li>\n<li><strong>쌍방 유책</strong> — 양쪽 모두에게 잘못이 있는 경우에도 위자료 청구가 가능합니다. 다만 상대적으로 책임이 큰 쪽이 차액을 부담합니다.</li>\n<li><strong>제3자(상간자) 청구</strong> — 배우자의 외도 상대방에게도 별도로 위자료를 청구할 수 있습니다. 배우자와 상간자는 부진정연대채무 관계입니다.</li>\n<li><strong>소멸시효</strong> — 이혼을 원인으로 하는 위자료 청구권은 혼인 해소 시(이혼 확정일)부터 3년 내에 행사해야 합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 위자료와 재산분할은 별개의 청구입니다. 재산분할에서 유리하게 받았다고 위자료가 줄어드는 것은 아닙니다.</blockquote>',
      },
      {
        title: '법원의 위자료 산정 기준 4가지',
        content:
          '<p><strong style="color:#1e3a5f">법원은 아래 요소를 종합적으로 고려하여 위자료 금액을 결정합니다.</strong></p>\n<ul>\n<li><strong>귀책사유의 정도</strong> — 부정행위의 횟수·기간·태양, 폭력의 심각성, 가출 기간 등이 중요합니다. 반복적 외도나 심각한 폭력은 높은 위자료로 이어집니다.</li>\n<li><strong>혼인 기간</strong> — 혼인 기간이 길수록 정신적 고통이 크다고 보아 위자료가 높아지는 경향이 있습니다.</li>\n<li><strong>자녀 유무와 연령</strong> — 미성년 자녀가 있는 경우 이혼으로 인한 가정 파탄의 영향이 크므로 위자료 산정 시 고려됩니다.</li>\n<li><strong>당사자의 경제력</strong> — 유책 배우자의 재산 상태와 소득 수준도 위자료 금액에 영향을 미칩니다. 경제력이 높으면 위자료도 높아질 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>내 상황에서 위자료 예상 금액 확인</strong></p>\n<p style="margin:0;font-size:0.95em">귀책사유와 혼인 기간을 입력하면 AI가 판례 기반 예상 금액을 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '최근 판결 기준 위자료 금액 수준',
        content:
          '<p><strong style="color:#1e3a5f">실무상 위자료는 사유별로 대략적인 금액 범위가 형성되어 있습니다.</strong></p>\n<ul>\n<li><strong>부정행위(외도)</strong> — 일반적으로 2,000만~5,000만원 수준입니다. 반복적이고 장기간의 외도, 혼외자 출산 등이 있으면 더 높아질 수 있습니다.</li>\n<li><strong>가정폭력</strong> — 폭력의 심각성에 따라 1,000만~5,000만원 범위입니다. 상해진단서, 고소 기록 등 증거가 중요합니다.</li>\n<li><strong>악의의 유기·기타</strong> — 정당한 이유 없는 가출, 생활비 미지급 등은 500만~2,000만원 수준입니다.</li>\n<li><strong>상간자(제3자) 위자료</strong> — 통상 500만~2,000만원 수준이며, 혼인 사실을 알면서 관계를 맺었는지 여부가 핵심 쟁점입니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">참고: 위 금액은 일반적 범위이며, 구체적 사안에 따라 크게 달라질 수 있습니다. 증거 확보가 금액에 직접적인 영향을 미칩니다.</blockquote>',
      },
      {
        title: '위자료 청구 절차와 증거 확보',
        content:
          '<p><strong style="color:#1e3a5f">위자료를 최대한 받으려면 귀책사유를 입증할 증거를 철저히 준비해야 합니다.</strong></p>\n<ul>\n<li><strong>증거 종류</strong> — 카카오톡·문자 메시지, 통화녹음, 사진·동영상, 신용카드 사용 내역, 차량 블랙박스, 상해진단서 등이 활용됩니다.</li>\n<li><strong>부정행위 입증</strong> — 외도의 직접적 증거(문자, 사진)가 있으면 유리합니다. 흥신소 자료도 증거로 쓸 수 있으나, 불법 촬영·도청은 증거능력이 부정될 수 있습니다.</li>\n<li><strong>청구 방법</strong> — 이혼 소송에 반소(위자료 청구)를 함께 제기하거나, 별도의 손해배상 소송을 제기합니다. 협의이혼 시에도 위자료 합의서를 작성할 수 있습니다.</li>\n<li><strong>강제집행</strong> — 판결 확정 후 상대방이 지급하지 않으면 재산 압류 등 강제집행을 할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 위자료 청구를 위한 증거 수집 과정에서 상대방의 사생활을 침해하면 오히려 불리해질 수 있습니다. 합법적 방법으로 증거를 확보하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 부정행위 제3자의 위자료 책임과 소멸시효',
        summary:
          '대법원 2025므10716 사건(대법원, 2026.01.29 선고)에서 법원은 제3자가 부부의 일방과 부정행위를 하여 부부공동생활을 침해한 행위는 불법행위를 구성하며, 이혼을 원인으로 하는 위자료의 소멸시효는 혼인 해소 시부터 3년이라고 판시했습니다.',
        takeaway:
          '상간자에 대한 위자료 청구는 이혼이 확정된 후 3년 내에 해야 합니다. 이혼 전이라도 개별 부정행위에 대한 손해배상은 별도로 청구할 수 있으니, 시효 관리에 주의하세요.',
      },
    ],
    faq: [
      {
        question: '위자료와 재산분할을 동시에 청구할 수 있나요?',
        answer:
          '<p>네, 이혼 소송에서 위자료와 재산분할을 함께 청구할 수 있습니다. 두 가지는 별개의 청구이므로 재산분할을 많이 받았다고 위자료가 줄어드는 것은 아닙니다. 다만 법원이 전체적인 형평을 고려할 수는 있습니다.</p>',
      },
      {
        question: '상대방에게 재산이 없으면 위자료를 못 받나요?',
        answer:
          '<p>판결에서 위자료가 인정되어도 상대방에게 집행할 재산이 없으면 실제 수령이 어려울 수 있습니다. 이 경우 향후 소득이나 재산이 생기면 강제집행할 수 있고, 채무불이행자 명부 등재를 신청하여 간접적 압박을 가할 수도 있습니다.</p>',
      },
      {
        question: '합의이혼 시에도 위자료를 받을 수 있나요?',
        answer:
          '<p>네, 협의이혼에서도 위자료 합의가 가능합니다. 합의서를 작성하여 공증을 받아두면 상대방이 불이행할 때 바로 강제집행이 가능합니다. 합의 금액은 자유롭게 정할 수 있습니다.</p>',
      },
      {
        question: '외도 증거가 없으면 위자료를 못 받나요?',
        answer:
          '<p>직접적 증거가 없어도 간접 증거(심야 통화 기록, 호텔 카드 결제 내역, 목격자 진술 등)를 종합하여 외도를 추정할 수 있습니다. 다만 증거가 부족하면 인정되는 위자료 금액이 낮아질 수 있으므로 최대한 많은 자료를 확보하세요.</p>',
      },
      {
        question: '상간자에게 위자료를 청구하면 배우자에게는 못 받나요?',
        answer:
          '<p>아닙니다. 배우자와 상간자는 부진정연대채무 관계이므로 양쪽 모두에게 청구할 수 있습니다. 다만 합산하여 이중 수령은 불가능하고, 한쪽에서 받으면 그만큼 다른 쪽의 채무가 줄어듭니다.</p>',
      },
      {
        question: '가정폭력 위자료 청구 시 어떤 증거가 필요한가요?',
        answer:
          '<p>상해진단서, 경찰 신고 기록, 폭행 장면 사진·동영상, 문자·녹음 등이 핵심 증거입니다. 가정폭력 피해 상담 기록도 보조 증거가 됩니다. 피해 직후 바로 병원 진료와 경찰 신고를 해두는 것이 중요합니다.</p>',
      },
    ],
    cta: { text: '이혼 위자료 예상 금액 AI로 확인하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼 어디서부터', href: '/guide/divorce/decided-divorce-where-to-begin' },
      { label: '협의이혼 절차', href: '/guide/divorce/consensual-divorce-process' },
      { label: '재판이혼 절차', href: '/guide/divorce/trial-divorce-lawsuit-procedure' },
      { label: '양육비 증액 방법', href: '/guide/divorce/divorce-child-support-increase' },
      { label: '양육 합의 준비', href: '/guide/divorce/custody-agreement-prep' },
    ],
  },

  // ── 이혼 3. 양육비 이행확보 방법 총정리 ──
  {
    domain: 'divorce',
    slug: 'divorce-child-support-enforcement-guide',
    keyword: '양육비 이행확보 방법 총정리',
    questionKeyword: '양육비를 안 주는데 강제로 받아낼 수 있나요?',
    ctaKeyword: '양육비 미지급 강제집행 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양육비 미지급 시 강제집행 4가지 | 로앤가이드',
      description:
        '양육비를 주지 않는 전 배우자 때문에 생활이 어렵다면, 법적으로 받아내는 4가지 방법을 지금 확인하세요.',
    },
    intro:
      '<p>이혼 후 매달 양육비를 받기로 합의했는데, 3개월째 한 푼도 들어오지 않습니다. 연락도 되지 않고, 아이 학원비와 생활비를 혼자 감당하기 벅찹니다. 양육비를 법적으로 강제할 수 있는 방법은 여러 가지가 있으며, 2026년 현재 양육비 이행관리원을 통한 지원도 받을 수 있습니다.</p>',
    sections: [
      {
        title: '양육비 직접 강제집행 절차',
        content:
          '<p><strong style="color:#1e3a5f">양육비 집행권원이 있으면 상대방의 급여·예금·부동산을 직접 압류할 수 있습니다.</strong></p>\n<ul>\n<li><strong>집행권원 확보</strong> — 양육비 지급 조정조서, 심판결정, 확정판결, 양육비부담조서 등이 집행권원이 됩니다. 사적 합의서만으로는 직접 강제집행이 불가하므로 법원에 이행명령 등을 신청해야 합니다.</li>\n<li><strong>급여 압류</strong> — 상대방의 직장에 급여채권 압류 및 추심명령을 신청합니다. 급여의 1/2까지 압류할 수 있으며(일반 채권은 1/2 제한이지만 양육비는 유리), 회사에서 직접 수령할 수 있습니다.</li>\n<li><strong>예금 압류</strong> — 상대방 거래 은행에 채권압류를 신청하면 계좌 출금이 차단됩니다. 금융거래내역 조회를 통해 은행을 파악할 수 있습니다.</li>\n<li><strong>부동산 강제경매</strong> — 상대방 소유 부동산에 대해 강제경매를 신청할 수 있습니다. 밀린 양육비와 향후 양육비를 일시에 확보할 수 있는 방법입니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 양육비 채권은 일반 채권보다 압류 범위가 넓고, 장래의 양육비에 대해서도 미리 강제집행을 신청할 수 있습니다.</blockquote>',
      },
      {
        title: '양육비 이행명령과 감치명령',
        content:
          '<p><strong style="color:#1e3a5f">법원의 이행명령을 어기면 과태료 부과, 감치(구금)까지 가능합니다.</strong></p>\n<ul>\n<li><strong>이행명령</strong> — 가정법원에 양육비 이행명령을 신청하면, 법원이 상대방에게 일정 기간 내 양육비를 지급하라고 명령합니다. 이를 위반하면 1천만원 이하의 과태료가 부과됩니다.</li>\n<li><strong>감치명령</strong> — 이행명령에도 불구하고 양육비를 3회 이상 지급하지 않으면, 법원은 30일 이내의 감치(구금)를 명할 수 있습니다. 실질적으로 가장 강력한 이행 수단입니다.</li>\n<li><strong>운전면허 정지</strong> — 양육비 이행관리원의 요청으로 미이행자의 운전면허를 정지할 수 있습니다. 생업에 차량이 필요한 경우 강력한 압박 수단이 됩니다.</li>\n<li><strong>출국금지</strong> — 양육비를 미지급한 채 해외로 도피하는 것을 막기 위해 출국금지 조치를 신청할 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>양육비 받아내는 최적 방법 AI가 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">밀린 양육비 금액과 상대방 상황을 입력하면 가장 효과적인 강제집행 방법을 확인하세요.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '양육비 이행관리원 활용',
        content:
          '<p><strong style="color:#1e3a5f">양육비 이행관리원은 양육비 청구부터 추심까지 무료로 지원하는 공공기관입니다.</strong></p>\n<ul>\n<li><strong>추심 지원</strong> — 양육비 이행관리원이 상대방에게 이행 촉구를 하고, 불이행 시 법원 신청 절차를 대행해 줍니다.</li>\n<li><strong>한시적 양육비 긴급지원</strong> — 양육비를 받지 못해 생활이 어려운 경우, 한시적으로 월 최대 20만원의 양육비를 선지급받을 수 있습니다.</li>\n<li><strong>재산·소득 조회</strong> — 이행관리원이 상대방의 재산과 소득 현황을 조회하여 강제집행에 필요한 정보를 파악해 줍니다.</li>\n<li><strong>신청 방법</strong> — 양육비 이행관리원 홈페이지(www.childsupport.or.kr) 또는 전화(1644-6621)로 신청할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">팁: 양육비 이행관리원의 지원을 받으면 변호사 비용 없이도 강제집행 절차를 진행할 수 있습니다.</blockquote>',
      },
      {
        title: '양육비 미확보 시 추가 대응 방법',
        content:
          '<p><strong style="color:#1e3a5f">상대방이 재산을 숨기거나 소득이 없는 경우에도 포기하지 마세요.</strong></p>\n<ul>\n<li><strong>재산조회 신청</strong> — 법원에 재산명시·재산조회를 신청하면 금융기관, 국세청, 건보공단 등에서 상대방의 재산 현황을 일괄 조회합니다.</li>\n<li><strong>채무불이행자 명부 등재</strong> — 상대방을 채무불이행자 명부에 올리면 금융거래에 불이익이 생겨 간접적으로 이행을 촉구할 수 있습니다.</li>\n<li><strong>양육비 증액·감액 변경</strong> — 상대방의 소득이 증가하면 양육비 증액을 청구할 수 있고, 반대로 경제적 사정이 변하면 감액 청구도 가능합니다.</li>\n<li><strong>과거 양육비 청구</strong> — 합의나 판결 이전의 양육비(과거 양육비)도 청구할 수 있습니다. 다만 법원이 전부를 인정하지 않을 수 있으므로 빠른 청구가 중요합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 재산명시 절차에서 상대방이 허위 진술하면 형사처벌(3년 이하 징역 또는 500만원 이하 벌금)을 받을 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산분할 의무의 상속 인정',
        summary:
          '대법원 2024스876 사건(대법원, 2026.01.15 선고)에서 법원은 이혼 당사자 일방이 사망하더라도 재산분할의무는 상속인에게 승계된다고 판시하며, 이혼 후 재산적 의무의 이행을 강하게 보호했습니다.',
        takeaway:
          '양육비뿐 아니라 재산분할도 상대방이 사망한 후 상속인에게 청구할 수 있습니다. 이혼 후 재산적 권리를 포기하지 말고, 기한 내에 반드시 청구하세요.',
      },
    ],
    faq: [
      {
        question: '사적 합의서만 있으면 강제집행이 되나요?',
        answer:
          '<p>사적 합의서로는 바로 강제집행할 수 없습니다. 공증을 받은 양육비 지급 합의서(집행인낙 공정증서)라면 바로 강제집행이 가능하고, 그렇지 않으면 법원에 양육비 청구 심판을 제기하여 집행권원을 확보해야 합니다.</p>',
      },
      {
        question: '상대방이 직장을 그만두면 급여 압류가 불가한가요?',
        answer:
          '<p>현 직장에서의 급여 압류는 불가하지만, 새 직장을 잡으면 다시 압류를 신청할 수 있습니다. 그 사이에 예금, 부동산, 차량 등 다른 재산에 대한 강제집행을 병행하세요.</p>',
      },
      {
        question: '양육비를 얼마나 밀려야 감치명령을 신청할 수 있나요?',
        answer:
          '<p>이행명령이 있음에도 정당한 이유 없이 양육비를 3회 이상 지급하지 않으면 감치명령을 신청할 수 있습니다. 밀린 금액의 크기보다는 이행명령 위반 횟수가 기준입니다.</p>',
      },
      {
        question: '양육비 이행관리원의 긴급지원금은 어떻게 신청하나요?',
        answer:
          '<p>양육비 이행관리원 홈페이지 또는 전화(1644-6621)로 신청합니다. 한부모가족으로 확인되고 양육비를 받지 못하고 있다는 것이 확인되면, 월 최대 20만원을 한시적으로 선지급받을 수 있습니다.</p>',
      },
      {
        question: '해외에 있는 상대방에게도 양육비를 받을 수 있나요?',
        answer:
          '<p>해외 거주 상대방에 대해서는 출국금지 조치를 통해 입국 시 이행을 강제할 수 있고, 헤이그 아동양육비 협약 가입국이라면 국제 협력을 통한 추심도 가능합니다. 양육비 이행관리원에 국제 사건 지원을 요청하세요.</p>',
      },
    ],
    cta: { text: '양육비 강제집행 방법 AI로 상담받기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '양육비 증액 방법', href: '/guide/divorce/divorce-child-support-increase' },
      { label: '양육 합의 준비', href: '/guide/divorce/custody-agreement-prep' },
      { label: '이혼 어디서부터', href: '/guide/divorce/decided-divorce-where-to-begin' },
      { label: '협의이혼 절차', href: '/guide/divorce/consensual-divorce-process' },
      { label: '재판이혼 절차', href: '/guide/divorce/trial-divorce-lawsuit-procedure' },
    ],
  },

  // ── 교통사고 1. 보상금 산정 기준 총정리 ──
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-compensation-calculation-guide',
    keyword: '교통사고 보상금 산정 기준 총정리',
    questionKeyword: '교통사고 보상금은 어떤 기준으로 산정되나요?',
    ctaKeyword: '교통사고 보상금 산정 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '교통사고 보상금 산정 기준 4가지 | 로앤가이드',
      description:
        '교통사고를 당했는데 보상금이 적정한지 모르겠다면, 법원이 적용하는 4가지 산정 기준을 지금 확인하세요.',
    },
    intro:
      '<p>교통사고로 병원 치료를 받고 있는데, 보험사에서 제시한 합의금이 너무 적은 것 같습니다. 치료비 외에 일하지 못한 기간의 소득, 정신적 고통에 대한 보상도 있다는데 정확한 기준을 모르겠습니다. 보상금은 적극적 손해, 소극적 손해, 위자료, 과실상계 등 여러 요소로 구성되며, 각 항목의 산정 기준을 알면 보험사와 협상에서 불리해지지 않습니다.</p>',
    sections: [
      {
        title: '적극적 손해 — 치료비와 실비 보상',
        content:
          '<p><strong style="color:#1e3a5f">실제 지출된 치료비와 향후 치료비가 적극적 손해에 해당합니다.</strong></p>\n<ul>\n<li><strong>기왕치료비</strong> — 사고 시점부터 현재까지 실제 지출된 병원비, 약제비, 한방치료비, 물리치료비 등 전액이 포함됩니다.</li>\n<li><strong>향후치료비</strong> — 의사 소견서에 따라 향후 필요한 수술비, 재활치료비, 보조기구 비용 등을 산정합니다. 의료감정을 통해 금액이 확정됩니다.</li>\n<li><strong>개호비</strong> — 중상해로 일상생활이 어려운 경우, 간병인 비용(개호비)도 청구할 수 있습니다. 가족이 간병한 경우에도 인정됩니다.</li>\n<li><strong>기타 실비</strong> — 교통비, 보조기구 구입비, 차량 수리비(또는 시가 배상) 등도 적극적 손해에 포함됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 치료 중이라면 합의를 서두르지 마세요. 향후 치료비가 확정된 후 합의해야 정당한 보상을 받을 수 있습니다.</blockquote>',
      },
      {
        title: '소극적 손해 — 휴업손해와 일실수익',
        content:
          '<p><strong style="color:#1e3a5f">사고로 일하지 못한 기간의 소득 상실과 노동능력 저하에 따른 미래 소득 감소를 보상합니다.</strong></p>\n<ul>\n<li><strong>휴업손해</strong> — 치료 기간 동안 일하지 못해 발생한 소득 감소분입니다. 급여소득자는 실제 급여 기준, 자영업자는 소득 신고액이나 통계소득을 기준으로 산정합니다.</li>\n<li><strong>일실수익</strong> — 후유장해가 남아 영구적으로 노동능력이 감소한 경우, 은퇴 시점까지의 미래 소득 감소분을 현재가치로 환산합니다.</li>\n<li><strong>노동능력상실률</strong> — 맥브라이드 평가표에 따라 후유장해 정도를 노동능력상실률(%)로 환산합니다. 이 비율이 일실수익 산정의 핵심입니다.</li>\n<li><strong>가동연한</strong> — 2026년 현재 법원은 일반적으로 만 65세까지를 가동연한으로 봅니다. 직종에 따라 달라질 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>내 보상금 적정 금액 AI로 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">사고 경위와 부상 정도를 입력하면 예상 보상금을 무료로 산정합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '위자료와 과실상계',
        content:
          '<p><strong style="color:#1e3a5f">정신적 고통에 대한 위자료와 피해자 과실에 따른 감액이 최종 금액을 결정합니다.</strong></p>\n<ul>\n<li><strong>위자료</strong> — 사고로 인한 정신적 고통에 대한 배상입니다. 부상 정도, 후유장해 등급, 가해자의 태도 등을 고려하여 산정합니다. 사망 사고의 경우 유족에게도 고유의 위자료가 인정됩니다.</li>\n<li><strong>과실상계</strong> — 피해자에게도 과실이 있으면 그 비율만큼 보상금이 감액됩니다. 예: 과실비율 30%면 총 손해액의 70%만 보상받습니다.</li>\n<li><strong>과실비율 기준</strong> — 도로교통공단의 과실비율 인정기준표가 일반적으로 적용되며, 블랙박스 영상이 결정적 증거가 됩니다.</li>\n<li><strong>손익공제</strong> — 자동차보험에서 이미 지급받은 치료비, 산재보험 급여 등은 중복 수령이 불가하므로 공제됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 보험사가 제시하는 과실비율에 반드시 동의할 필요는 없습니다. 블랙박스나 CCTV 영상을 확보하여 과실비율을 다툴 수 있습니다.</blockquote>',
      },
      {
        title: '보상금 산정 시 꼭 챙겨야 할 사항',
        content:
          '<p><strong style="color:#1e3a5f">보험사 합의 전에 반드시 아래 사항을 확인해야 손해를 줄일 수 있습니다.</strong></p>\n<ul>\n<li><strong>후유장해 진단</strong> — 치료가 종결되면 후유장해 진단을 받으세요. 노동능력상실률에 따라 일실수익이 수천만원 이상 차이 날 수 있습니다.</li>\n<li><strong>소득 입증 자료</strong> — 원천징수영수증, 소득금액증명원, 사업자 매출 자료 등으로 사고 전 소득을 입증합니다. 소득 자료가 없으면 통계소득(도시일용노임)이 적용됩니다.</li>\n<li><strong>합의 시기</strong> — 치료 중 조기 합의는 불리합니다. 최소 치료 종결 후, 후유장해가 확정된 시점에 합의하세요.</li>\n<li><strong>보험사 제시액 검증</strong> — 보험사 제시액은 자체 기준이며, 법원 기준보다 낮은 경우가 많습니다. AI 상담이나 전문가 조언을 통해 적정 금액을 확인한 후 협상하세요.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">팁: 보험사 합의가 불만족스러우면 손해배상소송을 제기할 수 있습니다. 소송 시 법원 감정을 통해 정확한 손해액이 산정됩니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 자기차량손해보험 자기부담금과 제3자 청구',
        summary:
          '대법원 2022다287284 사건(대법원, 2026.01.29 선고)에서 법원은 자기차량손해보험에서 자기부담금 부분에 대해서도 피보험자가 제3자의 책임비율에 상응하는 금액을 별도로 청구할 수 있다고 판시했습니다.',
        takeaway:
          '자차보험으로 수리비를 처리한 경우에도 자기부담금 중 상대방 과실에 해당하는 금액은 별도로 청구할 수 있습니다. 작은 금액이라도 놓치지 마세요.',
      },
    ],
    faq: [
      {
        question: '보험사 제시 합의금이 적정한지 어떻게 판단하나요?',
        answer:
          '<p>치료비 실비 + 휴업손해 + 후유장해 일실수익 + 위자료를 각각 산정하여 합산한 금액이 적정 보상금입니다. 보험사 제시액이 이보다 현저히 낮다면 추가 협상이나 소송을 고려하세요. AI 상담을 통해 항목별 예상 금액을 확인할 수 있습니다.</p>',
      },
      {
        question: '치료 중에 합의해도 되나요?',
        answer:
          '<p>치료 중 합의는 권장하지 않습니다. 합의 후 추가 치료가 필요하거나 후유장해가 발생해도 추가 보상을 받기 어렵습니다. 최소 치료 종결 후, 후유장해 진단까지 받은 뒤 합의하세요.</p>',
      },
      {
        question: '소득이 없는 전업주부도 휴업손해를 받을 수 있나요?',
        answer:
          '<p>네, 전업주부도 도시일용노임 기준으로 휴업손해가 산정됩니다. 2026년 기준 도시일용노임은 일 약 15만원 수준이며, 가사노동의 경제적 가치가 인정됩니다.</p>',
      },
      {
        question: '블랙박스가 없으면 과실비율을 다툴 수 없나요?',
        answer:
          '<p>블랙박스가 없어도 주변 CCTV, 목격자 진술, 도로 상황(신호체계, 도로 구조) 등을 통해 과실비율을 다툴 수 있습니다. 사고 직후 현장 사진을 촬영하고 목격자 연락처를 확보해 두세요.</p>',
      },
      {
        question: '교통사고 손해배상 청구의 소멸시효는 언제까지인가요?',
        answer:
          '<p>손해 및 가해자를 안 날로부터 3년, 사고일로부터 10년입니다. 다만 후유장해가 나중에 발견된 경우에는 장해를 안 날부터 시효가 진행됩니다. 시효가 임박하면 내용증명 등으로 시효를 중단시킬 수 있습니다.</p>',
      },
    ],
    cta: { text: '교통사고 보상금 적정 금액 AI로 확인하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 어디서부터', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
      { label: '과실비율 다투기', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '합의 체크리스트', href: '/guide/traffic-accident/accident-settlement-checklist' },
      { label: '상해 보상 기준', href: '/guide/traffic-accident/traffic-accident-injury-compensation' },
      { label: '합의 실수 방지', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
    ],
  },

  // ── 교통사고 2. 형사·민사 절차 비교 ──
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-criminal-civil-procedure',
    keyword: '교통사고 형사 민사 절차 비교',
    questionKeyword: '교통사고 후 형사절차와 민사절차는 어떻게 다른가요?',
    ctaKeyword: '교통사고 형사 민사 절차 상담',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '교통사고 형사·민사 절차 비교 정리 | 로앤가이드',
      description:
        '교통사고 후 형사처벌과 민사보상을 동시에 진행해야 하는지 고민이라면, 두 절차의 차이를 지금 확인하세요.',
    },
    intro:
      '<p>교통사고 피해를 입었는데, 가해자가 합의를 하자고 합니다. 합의하면 형사처벌은 어떻게 되는지, 민사 보상과 형사 처벌은 별개인지 헷갈립니다. 형사절차는 가해자의 처벌을 결정하고, 민사절차는 피해자의 손해배상을 다루는 완전히 다른 절차입니다. 두 가지를 정확히 구분해야 최선의 결과를 얻을 수 있습니다.</p>',
    sections: [
      {
        title: '형사절차 — 가해자 처벌과 합의의 효과',
        content:
          '<p><strong style="color:#1e3a5f">교통사고 형사절차에서는 가해자의 과실 정도와 합의 여부가 처벌을 결정합니다.</strong></p>\n<ul>\n<li><strong>교통사고처리특례법</strong> — 피해자가 종합보험에 가입된 차량 사고의 경우, 12대 중과실(신호위반, 음주운전 등)이 아니면 피해자와 합의하면 공소권이 없어져 형사처벌이 면제됩니다.</li>\n<li><strong>12대 중과실</strong> — 신호·중앙선 위반, 음주운전, 무면허운전, 횡단보도 사고, 어린이보호구역 사고 등은 합의해도 형사처벌 대상입니다.</li>\n<li><strong>합의의 효과</strong> — 형사 합의가 이루어지면 가해자에게 유리한 양형 사유가 됩니다. 다만 민사상 손해배상 청구권은 별도이므로, 합의서에 민사 청구 포기 조항이 없으면 민사 청구도 가능합니다.</li>\n<li><strong>피해자 진술</strong> — 검찰 수사 단계에서 피해자 의견서를 제출하여 처벌 희망 의사를 밝힐 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 형사 합의와 민사 합의는 별개입니다. 형사 합의금을 받았다고 해서 민사 손해배상을 포기한 것이 아닙니다.</blockquote>',
      },
      {
        title: '민사절차 — 손해배상 청구와 소송',
        content:
          '<p><strong style="color:#1e3a5f">민사절차에서는 실제 손해액을 산정하여 가해자(또는 보험사)에게 배상을 청구합니다.</strong></p>\n<ul>\n<li><strong>보험사 합의</strong> — 가해자의 보험사와 직접 합의하는 것이 가장 빠른 방법입니다. 다만 보험사 제시액이 법원 기준보다 낮은 경우가 많으므로 비교 검토가 필요합니다.</li>\n<li><strong>손해배상소송</strong> — 합의가 안 되면 법원에 손해배상소송을 제기합니다. 법원은 의료감정, 노동능력평가 등을 거쳐 정확한 손해액을 산정합니다.</li>\n<li><strong>청구 항목</strong> — 치료비, 휴업손해, 일실수익(후유장해 시), 위자료, 차량수리비 등을 각각 산정하여 청구합니다.</li>\n<li><strong>소멸시효</strong> — 손해 및 가해자를 안 날부터 3년, 사고일부터 10년 내에 청구해야 합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>형사·민사 최적 대응 전략 AI가 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">사고 상황과 가해자 조건을 입력하면 형사·민사 병행 전략을 확인하세요.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '형사와 민사의 핵심 차이 비교',
        content:
          '<p><strong style="color:#1e3a5f">형사와 민사는 목적, 절차, 결과가 완전히 다릅니다.</strong></p>\n<ul>\n<li><strong>목적</strong> — 형사: 가해자 처벌(벌금·징역) / 민사: 피해자 손해배상(금전 보상)</li>\n<li><strong>당사자</strong> — 형사: 검찰 vs 가해자(피해자는 증인·참고인) / 민사: 피해자 vs 가해자(또는 보험사)</li>\n<li><strong>증명 기준</strong> — 형사: 합리적 의심 없는 증명(엄격) / 민사: 증거의 우세(상대적으로 완화)</li>\n<li><strong>처분 결과</strong> — 형사: 벌금·징역·집행유예 등 / 민사: 금전 배상 판결</li>\n<li><strong>합의 효과</strong> — 형사: 처벌 감면·공소권 없음 / 민사: 소송 종료·청구 포기</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 형사 합의서에 "일체의 민·형사상 이의를 제기하지 않는다"는 문구가 있으면 민사 청구도 제한될 수 있으니, 합의 조건을 꼼꼼히 확인하세요.</blockquote>',
      },
      {
        title: '실전 대응 전략 — 형사·민사 병행 시 유의사항',
        content:
          '<p><strong style="color:#1e3a5f">형사와 민사를 병행할 때는 시점과 순서 전략이 중요합니다.</strong></p>\n<ul>\n<li><strong>형사 합의 시점</strong> — 형사 합의금을 먼저 받고, 민사 청구를 별도로 진행하는 것이 유리할 수 있습니다. 다만 합의서 문구에 민사 포기 조항이 포함되지 않도록 주의하세요.</li>\n<li><strong>보험사 합의와 형사 합의 구분</strong> — 보험사에서 지급하는 보상금은 민사 합의이고, 가해자가 직접 지급하는 합의금은 형사 합의로 성격이 다릅니다.</li>\n<li><strong>증거 공유</strong> — 형사 수사 기록(실황조사서, 사고분석보고서 등)은 민사소송에서도 증거로 활용할 수 있습니다. 형사 기록 열람·등사를 통해 확보하세요.</li>\n<li><strong>배상명령 제도</strong> — 형사재판에서 피해자가 배상명령을 신청하면, 형사 판결과 동시에 민사 배상액이 결정됩니다. 별도 민사소송을 제기할 필요 없이 빠르게 배상을 받을 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">팁: 배상명령은 형사 1심 변론 종결 전까지 신청해야 하며, 법원이 인용하면 확정판결과 같은 효력이 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주운전 혈중알코올농도 상승기 판단',
        summary:
          '대법원 2025도8137 사건(대법원, 2025.12.11 선고)에서 법원은 혈중알코올농도 상승기라 하더라도 측정 시점과 운전 시점이 약 12분밖에 차이가 나지 않는 등의 사정을 종합하면 처벌기준치 이상이었다고 볼 수 있다고 판시했습니다.',
        takeaway:
          '음주 교통사고의 경우 상승기 항변이 인정되지 않을 수 있으므로, 피해자는 가해자의 음주운전 사실을 적극적으로 입증하여 형사처벌과 민사 보상 모두에서 유리한 결과를 이끌어내세요.',
      },
    ],
    faq: [
      {
        question: '형사 합의를 하면 보험사 보상을 못 받나요?',
        answer:
          '<p>아닙니다. 형사 합의와 보험사 보상은 별개입니다. 형사 합의는 가해자의 처벌을 감면하는 것이고, 보험사 보상은 실제 손해를 배상하는 것입니다. 다만 합의서에 "민사상 청구도 포기한다"는 문구가 포함되면 보험사 보상도 제한될 수 있으니 주의하세요.</p>',
      },
      {
        question: '12대 중과실이 아니면 가해자 처벌이 불가한가요?',
        answer:
          '<p>종합보험 미가입 차량의 사고이거나 피해자가 합의하지 않으면 12대 중과실이 아니더라도 형사처벌 대상입니다. 보험 미가입 사고는 교통사고처리특례법의 특례가 적용되지 않습니다.</p>',
      },
      {
        question: '배상명령 제도는 어떻게 신청하나요?',
        answer:
          '<p>형사재판 1심 변론 종결 전에 해당 법원에 배상명령 신청서를 제출합니다. 피해 금액과 증거자료를 첨부하면 되며, 인지대가 필요 없어 비용 부담이 적습니다. 다만 손해액 산정이 복잡한 경우 법원이 기각할 수 있습니다.</p>',
      },
      {
        question: '보험사 합의와 가해자 직접 합의의 차이는 무엇인가요?',
        answer:
          '<p>보험사 합의는 보험 약관에 따른 민사 보상이고, 가해자 직접 합의는 주로 형사 처벌 감면을 위한 합의금입니다. 보험사 합의 외에 가해자에게 별도의 형사 합의금을 요구할 수 있으며, 이 두 가지는 독립적으로 진행됩니다.</p>',
      },
      {
        question: '형사 수사 기록을 민사소송에서 쓸 수 있나요?',
        answer:
          '<p>네, 형사 사건의 확정 후 기록 열람·등사를 통해 실황조사서, 사고분석보고서, 진술조서 등을 확보하여 민사소송의 증거로 활용할 수 있습니다. 검찰청에 기록 열람·등사 신청을 하면 됩니다.</p>',
      },
    ],
    cta: { text: '교통사고 형사·민사 대응 전략 AI로 확인하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 어디서부터', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
      { label: '합의 체크리스트', href: '/guide/traffic-accident/accident-settlement-checklist' },
      { label: '과실비율 다투기', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '상해 보상 기준', href: '/guide/traffic-accident/traffic-accident-injury-compensation' },
      { label: '합의 실수 방지', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
    ],
  },

  // ── 교통사고 3. 보험금 청구 절차 총정리 ──
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-insurance-claim-comprehensive',
    keyword: '교통사고 보험금 청구 절차 총정리',
    questionKeyword: '교통사고 보험금은 어떤 절차로 청구하나요?',
    ctaKeyword: '교통사고 보험금 청구 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '교통사고 보험금 청구 절차 5단계 | 로앤가이드',
      description:
        '교통사고 후 보험금 청구 방법이 막막하다면, 사고 접수부터 보험금 수령까지 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>교통사고를 당했는데 보험 처리를 어디서부터 시작해야 할지 모르겠습니다. 상대방 보험사에서 연락이 왔지만, 어떤 서류를 준비해야 하는지, 내 보험도 써야 하는지 헷갈립니다. 보험금 청구는 단계별로 정해진 절차가 있으며, 각 단계에서 필요한 서류와 주의사항을 알면 보험금을 빠르고 정확하게 받을 수 있습니다.</p>',
    sections: [
      {
        title: '1~2단계: 사고 접수와 보험사 통보',
        content:
          '<p><strong style="color:#1e3a5f">사고 직후 경찰 신고와 보험사 접수를 동시에 진행합니다.</strong></p>\n<ul>\n<li><strong>경찰 신고</strong> — 112에 사고를 접수하고 경찰관의 현장 확인을 받습니다. 교통사고 사실확인서는 보험 청구의 기본 서류입니다.</li>\n<li><strong>현장 증거 확보</strong> — 사고 현장 사진, 블랙박스 영상, 주변 CCTV, 목격자 연락처를 확보합니다. 차량 파손 상태와 도로 상황을 꼼꼼히 촬영하세요.</li>\n<li><strong>내 보험사 접수</strong> — 가해자·피해자 불문하고 자신의 보험사에도 사고를 즉시 접수합니다. 자차보험, 무보험차상해, 자기신체사고 등 활용 가능한 특약을 확인하세요.</li>\n<li><strong>상대 보험사 연락</strong> — 상대방 보험사에서 연락이 오면 사고 경위만 간단히 설명하고, 합의 관련 논의는 치료 종결 후로 미루세요.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 사고 접수는 48시간 이내에 해야 합니다. 늦으면 보험금 청구가 제한될 수 있습니다.</blockquote>',
      },
      {
        title: '3단계: 치료와 서류 준비',
        content:
          '<p><strong style="color:#1e3a5f">충분히 치료받으면서 보험금 청구에 필요한 서류를 차근차근 모읍니다.</strong></p>\n<ul>\n<li><strong>병원 치료</strong> — 사고 당일 반드시 병원에 가세요. 초기 진단서가 사고와 부상의 인과관계를 입증하는 핵심 증거입니다. MRI, CT 등 정밀검사를 빠뜨리지 마세요.</li>\n<li><strong>진단서·소견서</strong> — 상해진단서(초진), 후유장해진단서(치료 종결 후), 향후치료비 소견서가 필요합니다.</li>\n<li><strong>비용 영수증</strong> — 치료비 영수증, 약제비, 교통비(택시 영수증 등), 보조기구 구입비 영수증을 모두 보관합니다.</li>\n<li><strong>소득 증빙</strong> — 휴업손해 청구를 위해 재직증명서, 급여명세서, 소득금액증명원 등을 준비합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>보험금 청구 서류 체크리스트 AI가 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">사고 유형과 부상 정도를 입력하면 필요한 서류 목록을 무료로 정리해 드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '4단계: 보험금 청구와 합의 협상',
        content:
          '<p><strong style="color:#1e3a5f">치료가 종결되면 모은 서류를 바탕으로 보험금을 청구하고 합의 협상에 들어갑니다.</strong></p>\n<ul>\n<li><strong>보험금 청구서 제출</strong> — 상대방 보험사에 보험금 청구서와 구비서류를 제출합니다. 대인배상(치료비·위자료), 대물배상(차량수리비), 휴업손해 등 항목별로 청구합니다.</li>\n<li><strong>합의안 검토</strong> — 보험사에서 합의안을 제시하면 항목별로 적정성을 확인합니다. 서두르지 말고 비교·검토 후 결정하세요.</li>\n<li><strong>합의 거부 시</strong> — 합의안이 부당하면 거부할 수 있습니다. 이 경우 손해배상소송을 통해 법원에서 적정 금액을 산정받습니다.</li>\n<li><strong>자기 보험 활용</strong> — 자기신체사고 담보, 무보험차상해 특약 등 내 보험의 특약도 함께 청구하세요.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 합의서에 서명하면 추가 청구가 거의 불가능합니다. 후유장해 가능성이 있다면 충분히 기다린 후 합의하세요.</blockquote>',
      },
      {
        title: '5단계: 보험금 수령과 사후 관리',
        content:
          '<p><strong style="color:#1e3a5f">합의가 완료되면 보험금이 입금되며, 후유증 발생에 대비한 사후 관리도 필요합니다.</strong></p>\n<ul>\n<li><strong>보험금 입금</strong> — 합의 후 통상 3~7 영업일 이내에 보험금이 입금됩니다. 항목별 금액이 합의 내용과 일치하는지 확인하세요.</li>\n<li><strong>자동차보험 할인·할증</strong> — 가해자의 경우 보험 할증이 적용됩니다. 피해자는 자차보험을 사용하면 할증될 수 있으므로 자차 사용 여부를 신중히 결정하세요.</li>\n<li><strong>후유증 대비</strong> — 합의 당시 예상하지 못한 후유증이 발생하면, 추가 손해배상 청구가 가능한 경우도 있습니다. 다만 합의서에 "향후 이의를 제기하지 않겠다"는 조항이 있으면 어렵습니다.</li>\n<li><strong>국민건강보험 환수</strong> — 건강보험으로 치료받은 경우, 건보공단이 가해자 보험사에 구상권을 행사합니다. 개인이 별도로 대응할 사항은 없습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">팁: 보험금 관련 분쟁이 해결되지 않으면 금융감독원 분쟁조정위원회에 조정을 신청할 수 있습니다. 비용은 무료입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주운전 교통사고 처벌 기준',
        summary:
          '대법원 2025도8137 사건(대법원, 2025.12.11 선고)에서 법원은 음주측정 시점이 혈중알코올농도 상승기에 있을 가능성이 있더라도, 운전 종료 시점과 측정 시점의 간격 등 제반 사정을 종합하여 처벌기준치 이상이었다고 판단할 수 있다고 판시했습니다.',
        takeaway:
          '음주운전 교통사고 피해자는 가해자가 음주 상태였음을 보험사에 적극 알려야 합니다. 음주운전은 중과실에 해당하여 보험 면책 조항 적용이 달라질 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '사고 접수를 늦게 하면 보험금을 못 받나요?',
        answer:
          '<p>보험 약관상 사고 발생 후 지체 없이 접수하도록 되어 있습니다. 접수가 늦어도 보험금 자체가 지급 거절되는 것은 아니지만, 사고와 부상의 인과관계 입증이 어려워질 수 있으므로 가급적 48시간 이내에 접수하세요.</p>',
      },
      {
        question: '내 보험과 상대방 보험 둘 다 청구할 수 있나요?',
        answer:
          '<p>중복 보상은 안 되지만, 상대방 보험으로 보상받지 못하는 부분(자기부담금, 자차 수리비 등)은 내 보험의 해당 특약으로 청구할 수 있습니다. 예를 들어 상대방 대물한도 초과분은 내 무보험차상해나 자차 특약으로 보상받을 수 있습니다.</p>',
      },
      {
        question: '보험사 합의를 거부하면 불이익이 있나요?',
        answer:
          '<p>합의 거부에 따른 법적 불이익은 없습니다. 합의가 안 되면 손해배상소송으로 해결할 수 있으며, 소송에서 법원 감정을 통해 더 정확한 금액이 산정될 수 있습니다. 다만 소송 기간(6개월~1년 이상)이 소요됩니다.</p>',
      },
      {
        question: '자차보험을 사용하면 보험료가 올라가나요?',
        answer:
          '<p>자차보험을 사용하면 다음 해 보험료가 할증됩니다. 수리비가 적은 경우에는 자비로 수리하는 것이 장기적으로 유리할 수 있습니다. 보험사에 할증 예상액을 문의한 후 결정하세요.</p>',
      },
      {
        question: '보험금 청구 서류는 어디서 발급받나요?',
        answer:
          '<p>교통사고 사실확인서는 경찰서, 진단서·진료비 영수증은 병원, 소득증빙은 국세청 홈택스에서 발급받습니다. 차량수리비 견적서는 정비업체에서 받으며, 보험사가 지정한 정비업체를 이용하면 절차가 간소합니다.</p>',
      },
    ],
    cta: { text: '교통사고 보험금 청구 절차 AI로 안내받기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 어디서부터', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
      { label: '과실비율 다투기', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '합의 체크리스트', href: '/guide/traffic-accident/accident-settlement-checklist' },
      { label: '상해 보상 기준', href: '/guide/traffic-accident/traffic-accident-injury-compensation' },
      { label: '합의 실수 방지', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
    ],
  },

  // ── 사기 1. 사기죄 고소 절차 총정리 ──
  {
    domain: 'fraud',
    slug: 'fraud-complaint-procedure-comprehensive',
    keyword: '사기죄 고소 절차 총정리',
    questionKeyword: '사기를 당했는데 고소는 어떻게 하나요?',
    ctaKeyword: '사기죄 고소 절차 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사기죄 고소 절차와 필요 서류 6가지 | 로앤가이드',
      description:
        '사기를 당해 고소를 준비 중이라면, 경찰 접수부터 재판까지 전체 절차와 필요한 서류를 지금 확인하세요.',
    },
    intro:
      '<p>투자를 권유받아 3천만원을 보냈는데, 상대방이 연락이 두절되었습니다. 경찰에 가서 고소장을 내야 한다는데 어떤 내용을 써야 하는지, 증거는 뭘 가져가야 하는지 막막합니다. 사기죄 고소는 편취 의사(기망 행위)의 입증이 핵심이며, 체계적으로 준비하면 수사 진행을 앞당길 수 있습니다.</p>',
    sections: [
      {
        title: '사기죄 성립 요건과 고소 전 확인사항',
        content:
          '<p><strong style="color:#1e3a5f">사기죄는 기망행위 → 착오 → 재산 처분 → 재산상 이익의 4단계가 모두 입증되어야 합니다.</strong></p>\n<ul>\n<li><strong>기망행위</strong> — 상대방이 처음부터 속일 의도로 거짓말을 했는지가 핵심입니다. 단순히 약속을 안 지킨 것만으로는 사기죄가 아닐 수 있습니다.</li>\n<li><strong>편취 의사</strong> — 돈을 빌릴 당시 갚을 능력이나 의사가 없었음을 증명해야 합니다. 차용 당시의 경제 상태, 다른 채무 현황, 용도 허위 진술 등이 증거가 됩니다.</li>\n<li><strong>민사와 구별</strong> — 돈을 빌리고 안 갚는 것은 민사 채무불이행이고, 처음부터 갚을 의사 없이 빌린 것이 사기입니다. 이 구별이 수사 초기에 결정적입니다.</li>\n<li><strong>금액 기준</strong> — 사기 금액이 5억원 이상이면 특정경제범죄가중처벌법이 적용되어 형이 가중됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: "처음부터 속일 의도가 있었다"는 점을 입증하는 증거가 고소의 성패를 좌우합니다.</blockquote>',
      },
      {
        title: '고소장 작성과 접수 절차',
        content:
          '<p><strong style="color:#1e3a5f">고소장은 사실관계를 시간순으로 정리하고, 핵심 증거를 첨부하여 경찰서에 제출합니다.</strong></p>\n<ul>\n<li><strong>고소장 구성</strong> — 고소인·피고소인 인적사항, 범죄사실(일시·장소·방법·금액), 편취 의사 입증 근거, 처벌 희망 의사를 기재합니다.</li>\n<li><strong>접수처</strong> — 범죄 발생지 관할 경찰서 또는 대검찰청 사이버수사과(인터넷 사기)에 접수합니다. 경찰서 민원실에 직접 방문하거나 우편으로 제출할 수 있습니다.</li>\n<li><strong>온라인 접수</strong> — 인터넷 사기(중고거래, 투자사기 등)는 경찰청 사이버범죄 신고시스템(ecrm.police.go.kr)에서 온라인으로 접수할 수 있습니다.</li>\n<li><strong>고소 기한</strong> — 사기죄는 친고죄가 아니므로 공소시효(10년) 내에 언제든 고소할 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>사기 고소장 작성, AI가 도와드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">피해 상황을 입력하면 고소장 핵심 내용과 필요 증거 목록을 무료로 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '필요 서류 6가지 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">아래 6가지 서류를 갖추면 수사관이 사건을 빠르게 파악하고 수사에 착수합니다.</strong></p>\n<ul>\n<li><strong>1. 송금 내역</strong> — 계좌이체 내역, 현금 영수증, 무통장입금증 등 돈이 이동한 증거입니다.</li>\n<li><strong>2. 대화 내역</strong> — 카카오톡, 문자, 이메일 등에서 상대방이 한 거짓 약속이나 투자 권유 내용을 캡처합니다.</li>\n<li><strong>3. 계약서·차용증</strong> — 계약서, 투자 약정서, 차용증 등 거래 조건을 명시한 문서입니다.</li>\n<li><strong>4. 상대방 정보</strong> — 이름, 주소, 전화번호, 계좌번호, 사업자등록번호 등 특정할 수 있는 정보입니다.</li>\n<li><strong>5. 기망 근거</strong> — 상대방의 경제 상태가 나빴음을 보여주는 자료(신용불량 이력, 다수 소송 기록, 사업 폐업 등)입니다.</li>\n<li><strong>6. 피해 확인서</strong> — 피해 금액, 변제받은 금액, 잔여 피해액을 정리한 문서입니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">팁: 카카오톡 대화는 원본 파일(.csv)을 추출하여 제출하면 증거력이 높아집니다. 스크린샷만으로는 위변조 주장이 나올 수 있습니다.</blockquote>',
      },
      {
        title: '고소 후 수사 진행과 대응',
        content:
          '<p><strong style="color:#1e3a5f">고소장 접수 후 수사 → 기소 → 재판 순으로 진행되며, 피해자도 적극적으로 참여해야 합니다.</strong></p>\n<ul>\n<li><strong>수사 진행</strong> — 경찰이 고소인 조사 → 피고소인 소환 → 참고인 조사 → 검찰 송치 순으로 진행합니다. 통상 3~6개월이 소요됩니다.</li>\n<li><strong>검찰 단계</strong> — 검찰이 기소 여부를 결정합니다. 증거가 부족하면 불기소(혐의없음·기소유예)될 수 있으며, 이때 검찰항고·재정신청으로 다툴 수 있습니다.</li>\n<li><strong>민사 병행</strong> — 형사 고소와 별개로 민사 손해배상 소송을 병행하세요. 형사 유죄 판결이 나오면 민사소송에서 유리합니다.</li>\n<li><strong>가압류</strong> — 피고소인이 재산을 빼돌릴 우려가 있으면 즉시 부동산·예금 가압류를 신청하세요. 형사 절차와 별개로 민사법원에 신청합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 사기죄 공소시효는 10년이지만, 증거는 시간이 지날수록 확보가 어려워집니다. 피해를 인지한 즉시 고소를 준비하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 컴퓨터 정보 입력을 통한 사기죄 성립',
        summary:
          '대법원 2022도1862 사건(대법원, 2026.01.29 선고)에서 법원은 컴퓨터에 정보를 입력하는 행위가 재산적 처분행위를 하는 사람을 직접 대상으로 한 것이 아니더라도, 그 정보처리 결과를 통해 사람을 착오에 빠뜨렸다면 사기죄의 기망행위에 해당한다고 판시했습니다.',
        takeaway:
          '온라인이나 시스템을 통한 간접적 기망도 사기죄가 성립합니다. 인터넷 사기 피해를 입었다면 "컴퓨터로 한 거라 사기가 아니다"라는 가해자 주장에 흔들리지 마세요.',
      },
    ],
    faq: [
      {
        question: '돈을 빌려주고 못 받으면 다 사기인가요?',
        answer:
          '<p>아닙니다. 빌려줄 당시 상대방에게 갚을 의사와 능력이 있었다면 단순 채무불이행(민사)이지 사기죄가 아닙니다. 처음부터 갚을 의사 없이 속여서 빌린 경우에만 사기죄가 성립합니다. 이 구별이 고소 성패를 결정합니다.</p>',
      },
      {
        question: '고소장은 변호사 없이도 쓸 수 있나요?',
        answer:
          '<p>네, 본인이 직접 작성하여 제출할 수 있습니다. 다만 편취 의사 입증 부분이 미흡하면 불기소 될 수 있으므로, 사건이 복잡하거나 금액이 클 경우 법률 전문가의 검토를 받는 것이 좋습니다.</p>',
      },
      {
        question: '인터넷 중고거래 사기도 형사 고소가 되나요?',
        answer:
          '<p>네, 인터넷 사기도 형사 고소 대상입니다. 경찰청 사이버범죄 신고시스템(ecrm.police.go.kr)에서 온라인으로 접수할 수 있고, 계좌 지급정지는 금융감독원(1332)에 즉시 요청하세요.</p>',
      },
      {
        question: '고소와 고발의 차이는 무엇인가요?',
        answer:
          '<p>고소는 피해자 본인이 수사기관에 범죄 사실을 신고하고 처벌을 요청하는 것이고, 고발은 제3자가 신고하는 것입니다. 사기죄는 피해자 본인이 고소하는 것이 일반적입니다.</p>',
      },
      {
        question: '고소를 취하하면 처벌이 안 되나요?',
        answer:
          '<p>사기죄는 친고죄가 아니므로 고소를 취하해도 검찰이 직권으로 기소할 수 있습니다. 다만 고소 취하는 양형에서 유리한 사유가 되므로, 합의 시 고소 취하와 교환조건으로 충분한 합의금을 받는 것이 일반적입니다.</p>',
      },
      {
        question: '사기죄의 공소시효는 얼마인가요?',
        answer:
          '<p>사기죄(형법 제347조)의 공소시효는 10년입니다. 특정경제범죄가중처벌법이 적용되는 5억원 이상 사기는 15년, 50억원 이상은 25년입니다.</p>',
      },
    ],
    cta: { text: '사기 고소 절차와 증거 준비 AI로 확인하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 피해 어디서부터', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '고소장 준비', href: '/guide/fraud/fraud-complaint-preparation' },
      { label: '고소 필요 서류', href: '/guide/fraud/fraud-complaint-required-documents' },
      { label: '민사소송 절차', href: '/guide/fraud/fraud-civil-lawsuit-procedure' },
      { label: '합의와 양형 영향', href: '/guide/fraud/fraud-settlement-sentencing-impact' },
    ],
  },

  // ── 사기 2. 사기 혐의 방어 전략 총정리 ──
  {
    domain: 'fraud',
    slug: 'fraud-accused-defense-strategy-guide',
    keyword: '사기 혐의 방어 전략 총정리',
    questionKeyword: '사기 혐의를 받고 있는데 어떻게 대응해야 하나요?',
    ctaKeyword: '사기 혐의 방어 전략 상담',
    type: '체크리스트형',
    perspective: 'offender',
    meta: {
      title: '사기 혐의를 받을 때 대응 전략 5가지 | 로앤가이드',
      description:
        '사기 혐의를 받고 있다면, 수사 단계별 대응 전략과 핵심 방어 논리 5가지를 지금 확인하세요.',
    },
    intro:
      '<p>사업 자금이 어려워 빌린 돈을 아직 갚지 못했는데, 상대방이 사기죄로 고소했습니다. 경찰에서 출석 요구가 왔는데 어떻게 진술해야 할지, 변호사를 선임해야 하는지 불안합니다. 사기 혐의에서 가장 중요한 것은 "편취 의사가 없었음"을 입증하는 것이며, 초기 대응이 사건의 방향을 결정합니다.</p>',
    sections: [
      {
        title: '사기죄 혐의의 핵심 쟁점 파악',
        content:
          '<p><strong style="color:#1e3a5f">사기죄 성립의 핵심은 "거래 당시 편취(속일) 의사가 있었는가"입니다.</strong></p>\n<ul>\n<li><strong>편취 의사</strong> — 돈을 빌리거나 투자를 받을 당시 갚을 의사와 능력이 있었음을 증명하면 사기죄가 성립하지 않습니다.</li>\n<li><strong>민사 채무불이행과 구별</strong> — 빌릴 당시에는 갚을 계획이 있었으나 사후 사정(사업 실패, 경제 악화 등)으로 못 갚게 된 것은 민사 문제이지 사기가 아닙니다.</li>\n<li><strong>기망행위 유무</strong> — 용도, 수익률, 상환 계획 등에 대해 거짓말을 했는지가 중요합니다. 사실대로 말하고 거래한 경우 기망이 인정되기 어렵습니다.</li>\n<li><strong>변제 노력</strong> — 일부라도 갚았거나, 갚기 위해 노력한 흔적(분할 상환, 상환 약속 문자 등)이 있으면 편취 의사 부정에 유리합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 사기죄는 "결과(못 갚은 것)"가 아니라 "의도(속일 생각이 있었는가)"로 판단됩니다.</blockquote>',
      },
      {
        title: '수사 단계별 대응 전략 5가지',
        content:
          '<p><strong style="color:#1e3a5f">경찰 수사 → 검찰 송치 → 기소 여부 결정 각 단계에서 적절히 대응해야 합니다.</strong></p>\n<ul>\n<li><strong>1. 진술 준비</strong> — 경찰 출석 전에 사실관계를 시간순으로 정리하세요. 거래 경위, 자금 사용처, 변제 노력 등을 구체적으로 준비합니다.</li>\n<li><strong>2. 증거 확보</strong> — 거래 당시 경제 상태(소득 증빙, 사업 현황), 변제한 금액 내역, 상환 약속 문자 등을 모읍니다.</li>\n<li><strong>3. 묵비권 활용</strong> — 불리한 질문에 대해서는 묵비권을 행사할 수 있습니다. 다만 전면 묵비보다는 유리한 부분은 적극 진술하는 것이 좋습니다.</li>\n<li><strong>4. 변호사 조력</strong> — 경찰 조사 시 변호사 동석이 가능합니다. 조서 내용이 진술과 다르면 서명 전 정정을 요구하세요.</li>\n<li><strong>5. 합의 시도</strong> — 고소인과의 합의는 불기소 또는 약식처분(벌금)에 가장 유효한 수단입니다. 검찰 송치 전에 합의하면 효과가 큽니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>사기 혐의 방어 전략, AI가 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">혐의 내용과 상황을 입력하면 최적의 방어 전략을 무료로 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '합의를 통한 형사 리스크 최소화',
        content:
          '<p><strong style="color:#1e3a5f">피해자와의 합의는 불기소 또는 선처에 가장 결정적인 요소입니다.</strong></p>\n<ul>\n<li><strong>합의 시기</strong> — 검찰 송치 전 합의가 가장 효과적입니다. 기소 전 합의하면 불기소(기소유예)나 약식명령(벌금)으로 종결될 가능성이 높습니다.</li>\n<li><strong>합의금 범위</strong> — 원금 전액 변제 + 추가 합의금이 일반적입니다. 분할 변제를 약정하는 경우에도 합의서에 변제계획을 명시하세요.</li>\n<li><strong>합의서 내용</strong> — "고소 취하" 또는 "처벌불원"을 명시하고, 피해 금액 변제 내역을 구체적으로 기재합니다.</li>\n<li><strong>공탁</strong> — 피해자가 합의를 거부하면 법원에 공탁할 수 있습니다. 공탁 사실은 양형에서 유리한 정상으로 참작됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">팁: 피해자가 합의를 거부하더라도 변제 노력(일부 변제, 공탁, 변제 제안 문자 등)을 기록으로 남겨두면 양형에서 유리합니다.</blockquote>',
      },
      {
        title: '기소 후 재판 단계 대응',
        content:
          '<p><strong style="color:#1e3a5f">기소되더라도 법정에서의 방어가 결과를 바꿀 수 있습니다.</strong></p>\n<ul>\n<li><strong>약식명령 vs 정식재판</strong> — 검찰이 약식기소(벌금형 구형)하면 약식명령이 발부됩니다. 금액이 과하다고 느끼면 정식재판을 청구할 수 있습니다(약식명령 고지 후 7일 이내).</li>\n<li><strong>유리한 양형 자료</strong> — 합의서, 변제 내역, 초범 증명, 가정환경 등 유리한 양형 자료를 제출합니다.</li>\n<li><strong>무죄 주장</strong> — 편취 의사가 없었음을 입증할 수 있는 경우에는 적극적으로 무죄를 주장합니다. 거래 당시 재산 상태, 사업 계획서, 변제 의사를 보여주는 증거를 제출합니다.</li>\n<li><strong>형량 예측</strong> — 사기죄는 10년 이하 징역 또는 2천만원 이하 벌금입니다. 초범이고 합의가 된 경우 집행유예 또는 벌금형이 선고되는 경우가 많습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 수사 중 거짓 진술이 나중에 드러나면 오히려 불리해집니다. 사실대로 진술하되, 불리한 부분은 묵비권을 행사하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보처리 결과를 통한 기망행위 인정',
        summary:
          '대법원 2022도1862 사건(대법원, 2026.01.29 선고)에서 법원은 컴퓨터에 입력한 정보를 통해 재산적 처분행위를 하는 사람이 착오에 빠졌다면, 직접 대면하여 속이지 않았더라도 사기죄의 기망행위에 해당한다고 판시했습니다.',
        takeaway:
          '온라인 거래에서 허위 정보를 입력한 경우에도 사기죄가 성립할 수 있습니다. 혐의를 받고 있다면, 정보 입력 당시의 진실성과 실제 거래 의도를 증거로 소명하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '경찰 출석 요구를 받으면 반드시 가야 하나요?',
        answer:
          '<p>경찰의 출석 요구는 강제가 아니지만, 불응하면 체포영장이 발부될 수 있습니다. 날짜 조정은 가능하므로 충분히 준비한 후 출석하되, 무작정 피하지는 마세요.</p>',
      },
      {
        question: '변호사 없이 경찰 조사를 받아도 되나요?',
        answer:
          '<p>법적으로는 가능하지만, 사기 혐의는 진술 내용이 수사 방향을 크게 좌우합니다. 잘못된 진술이 조서에 기재되면 번복이 어렵습니다. 가급적 변호사 조력을 받으세요.</p>',
      },
      {
        question: '일부만 갚으면 사기가 아닌 건가요?',
        answer:
          '<p>일부 변제 사실은 편취 의사 부정에 유리한 정황이지만, 그것만으로 무죄가 되는 것은 아닙니다. 빌릴 당시의 경제 상태, 용도 진실성 등이 종합적으로 판단됩니다. 다만 변제 기록은 양형에서 매우 유리한 자료입니다.</p>',
      },
      {
        question: '사기죄로 유죄가 확정되면 전과 기록이 남나요?',
        answer:
          '<p>네, 벌금형 이상은 전과 기록이 남습니다. 다만 벌금형은 5년 경과 후, 징역·금고형은 집행 종료 후 일정 기간 경과하면 형이 실효됩니다. 전과 기록은 취업 등에 영향을 줄 수 있으므로 최선의 결과를 위해 노력하세요.</p>',
      },
      {
        question: '피해자가 합의를 거부하면 어떻게 하나요?',
        answer:
          '<p>피해 금액을 법원에 공탁하면 변제 의사를 공식적으로 증명할 수 있습니다. 공탁 사실은 검찰과 법원에서 양형 감경 사유로 참작됩니다. 또한 변호사를 통해 합의를 지속적으로 시도하는 것이 좋습니다.</p>',
      },
    ],
    cta: { text: '사기 혐의 방어 전략 AI로 분석받기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 혐의 대응', href: '/guide/fraud/fraud-accused-response' },
      { label: '사기 피해 어디서부터', href: '/guide/fraud/fraud-victim-where-to-start' },
      { label: '합의와 양형 영향', href: '/guide/fraud/fraud-settlement-sentencing-impact' },
      { label: '고소 필요 서류', href: '/guide/fraud/fraud-complaint-required-documents' },
      { label: '민사소송 절차', href: '/guide/fraud/fraud-civil-lawsuit-procedure' },
    ],
  },

  // ── 회생. 개인회생 변제계획 작성 기준 총정리 ──
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-repayment-plan-comprehensive',
    keyword: '개인회생 변제계획 작성 기준 총정리',
    questionKeyword: '개인회생 변제계획은 어떻게 작성하나요?',
    ctaKeyword: '개인회생 변제계획 작성 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '개인회생 변제계획 작성 기준 4가지 | 로앤가이드',
      description:
        '개인회생 변제계획 작성이 어렵다면, 변제금액 산정 기준과 인가 요건 4가지를 지금 확인하세요.',
    },
    intro:
      '<p>개인회생을 신청하려는데, 변제계획서를 작성해야 한다고 합니다. 매달 얼마를 갚아야 하는지, 변제 기간은 어떻게 되는지, 법원이 인가해주지 않으면 어쩌나 걱정입니다. 변제계획은 가용소득을 기준으로 작성하며, 법원의 인가 기준을 알면 승인 가능성을 높일 수 있습니다.</p>',
    sections: [
      {
        title: '변제계획의 기본 구조와 기간',
        content:
          '<p><strong style="color:#1e3a5f">변제계획은 가용소득을 기반으로 3~5년간 채무를 분할 상환하는 계획입니다.</strong></p>\n<ul>\n<li><strong>변제 기간</strong> — 급여소득자는 최장 5년(60개월), 영업소득자는 최장 5년입니다. 2026년 현재 최소 변제기간은 3년(36개월)입니다.</li>\n<li><strong>가용소득</strong> — 월 소득에서 최저생계비(생계비 기준표 적용)를 뺀 금액이 매월 변제할 수 있는 가용소득입니다.</li>\n<li><strong>변제율</strong> — 가용소득 전액을 변제에 사용해야 합니다. 변제율이 높을수록 인가 가능성이 높아지며, 통상 총채무의 10~30% 수준이 변제됩니다.</li>\n<li><strong>면책 효과</strong> — 변제계획을 모두 이행하면 나머지 채무는 면책(탕감)됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 변제계획에서 가장 중요한 것은 "성실하게 이행할 수 있는 현실적인 금액"을 제시하는 것입니다.</blockquote>',
      },
      {
        title: '변제금액 산정 기준 4가지',
        content:
          '<p><strong style="color:#1e3a5f">법원은 아래 4가지 기준을 검토하여 변제계획의 적정성을 판단합니다.</strong></p>\n<ul>\n<li><strong>1. 가용소득 산정</strong> — 소득(급여·사업소득·부업수입 등) - 법원 인정 생계비 = 가용소득. 생계비에는 주거비, 식비, 교통비, 교육비(미성년 자녀), 의료비 등이 포함됩니다.</li>\n<li><strong>2. 청산가치 보장</strong> — 파산 시 채권자들이 받을 수 있는 금액(청산가치) 이상을 변제해야 합니다. 보유 재산이 많으면 변제금도 높아집니다.</li>\n<li><strong>3. 채권자 평등</strong> — 모든 채권자에게 채권액 비율에 따라 균등하게 변제해야 합니다. 특정 채권자에게만 유리하게 변제할 수 없습니다.</li>\n<li><strong>4. 성실성 요건</strong> — 채무 발생 경위가 과도한 낭비, 도박 등이라면 변제율을 높여야 인가됩니다. 성실한 경제활동 의지를 보여주어야 합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>내 변제금액 AI가 계산해 드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">소득과 채무 현황을 입력하면 예상 변제금액과 기간을 무료로 확인하세요.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '변제계획서 작성 실무 포인트',
        content:
          '<p><strong style="color:#1e3a5f">변제계획서는 소득·지출·재산·채무 현황을 구체적으로 기재해야 합니다.</strong></p>\n<ul>\n<li><strong>소득 증빙</strong> — 급여명세서, 원천징수영수증, 소득금액증명원 등으로 현재 소득을 증명합니다. 부업 수입도 빠짐없이 기재합니다.</li>\n<li><strong>채권자 목록</strong> — 모든 채권자와 채권액을 누락 없이 기재합니다. 누락된 채권은 면책 대상에서 제외될 수 있습니다.</li>\n<li><strong>재산 목록</strong> — 부동산, 차량, 예금, 보험해지환급금, 퇴직금 예상액 등 보유 재산을 전부 기재합니다. 허위 기재는 기각 사유입니다.</li>\n<li><strong>생활비 소명</strong> — 법원이 인정하는 생계비 기준표 이상의 지출이 필요한 경우(질병, 장애 등), 소명 자료를 첨부합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 재산이나 소득을 숨기면 인가 취소·면책 불허가 될 수 있습니다. 정직하게 작성하는 것이 최선입니다.</blockquote>',
      },
      {
        title: '변제계획 인가 후 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">인가 후에는 변제계획을 성실히 이행해야 면책을 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>매월 납부</strong> — 정해진 날짜에 변제금을 납부해야 합니다. 2회 이상 미납하면 인가 취소 사유가 됩니다.</li>\n<li><strong>소득 변동 시</strong> — 급여 인상이나 추가 소득이 생기면 법원에 변제계획 변경을 신청해야 합니다. 미신고 시 불이익을 받을 수 있습니다.</li>\n<li><strong>신용 거래 제한</strong> — 변제 기간 중에는 새로운 대출, 신용카드 발급이 원칙적으로 제한됩니다.</li>\n<li><strong>면책 신청</strong> — 변제를 모두 완료하면 법원에 면책 결정을 신청합니다. 면책이 확정되면 나머지 채무가 소멸합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">팁: 변제 중 예상치 못한 질병이나 실직이 발생하면, 법원에 변제계획 변경을 신청하여 납부 금액이나 기간을 조정할 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 회생계획의 합리적 해석과 변제 방법',
        summary:
          '대법원 2023다239756 사건(대법원, 2025.12.11 선고)에서 법원은 회생계획의 변제 방법은 계획 문언을 합리적으로 해석하여 결정해야 하며, 미확정 채권에 대해서도 가장 유사한 채권의 변제 방법에 따라 변제해야 한다고 판시했습니다.',
        takeaway:
          '변제계획서는 명확하게 작성해야 나중에 분쟁을 예방할 수 있습니다. 채권자 목록과 변제 방법을 구체적으로 기재하고, 변경이 필요하면 법원에 즉시 신청하세요.',
      },
    ],
    faq: [
      {
        question: '가용소득이 거의 없으면 개인회생이 안 되나요?',
        answer:
          '<p>가용소득이 전혀 없으면 개인회생은 어려울 수 있으며, 이 경우 파산·면책 절차가 적합할 수 있습니다. 소액이라도 가용소득이 있으면 개인회생을 신청할 수 있으므로, 정확한 소득·지출 분석이 필요합니다.</p>',
      },
      {
        question: '변제 기간 중에 이직하면 어떻게 되나요?',
        answer:
          '<p>이직 자체는 문제가 없지만, 소득이 변동되면 법원에 변제계획 변경을 신청해야 합니다. 소득이 줄면 변제금 감액, 소득이 늘면 변제금 증액이 적용될 수 있습니다.</p>',
      },
      {
        question: '모든 채무가 면책되나요?',
        answer:
          '<p>대부분의 채무가 면책되지만, 조세·벌금, 양육비, 고의 불법행위 손해배상, 악의로 채권자목록에서 누락한 채무 등은 면책 대상에서 제외됩니다(비면책채권).</p>',
      },
      {
        question: '자동차를 가지고 있어도 개인회생이 되나요?',
        answer:
          '<p>네, 출퇴근용 등 생활에 필수적인 자동차는 유지할 수 있습니다. 다만 차량 가액이 청산가치에 포함되므로, 고가 차량이면 변제금이 높아질 수 있습니다.</p>',
      },
      {
        question: '개인회생과 파산의 차이는 무엇인가요?',
        answer:
          '<p>개인회생은 소득이 있는 사람이 3~5년간 분할 변제하는 것이고, 파산은 재산을 처분하여 채무를 정리하는 것입니다. 소득이 있으면 개인회생, 소득이 없고 재산도 없으면 파산이 적합합니다.</p>',
      },
    ],
    cta: { text: '개인회생 변제금액 AI로 계산하기', link: '/chat?domain=rehabilitation' },
    internalLinks: [
      { label: '개인회생 신청 A to Z', href: '/guide/rehabilitation/rehabilitation-application-procedure-atoz' },
      { label: '회생 vs 파산 비교', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy-choice' },
      { label: '회생 자격 요건 FAQ', href: '/guide/rehabilitation/rehabilitation-eligibility-requirements-faq' },
      { label: '변제금 계산법', href: '/guide/rehabilitation/rehabilitation-payment-calculation' },
      { label: '파산에서 면책까지', href: '/guide/bankruptcy/bankruptcy-to-discharge-process' },
    ],
  },

  // ── 파산. 파산 면책 요건과 절차 총정리 ──
  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-discharge-requirements-comprehensive',
    keyword: '파산 면책 요건 절차 총정리',
    questionKeyword: '파산 면책을 받으려면 어떤 요건을 갖춰야 하나요?',
    ctaKeyword: '파산 면책 요건 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '파산 면책 요건과 절차 5단계 정리 | 로앤가이드',
      description:
        '파산 면책을 받을 수 있는지 궁금하다면, 면책 요건 5가지와 절차를 지금 확인하세요.',
    },
    intro:
      '<p>빚이 너무 많아 갚을 수 없는 상황인데, 파산하면 모든 빚이 없어진다는 말을 들었습니다. 하지만 면책이 안 되는 경우도 있다고 해서 걱정입니다. 파산 면책은 성실한 채무자에게 경제적 재기의 기회를 주는 제도이며, 면책 불허가 사유에 해당하지 않으면 대부분의 채무가 탕감됩니다.</p>',
    sections: [
      {
        title: '파산 신청 요건과 절차',
        content:
          '<p><strong style="color:#1e3a5f">지급불능(채무를 갚을 수 없는 상태)이면 누구나 파산을 신청할 수 있습니다.</strong></p>\n<ul>\n<li><strong>지급불능</strong> — 채무자의 재산과 소득으로 모든 채무를 변제할 수 없는 상태를 말합니다. 채무 금액이 재산보다 많으면 인정됩니다.</li>\n<li><strong>신청서류</strong> — 파산·면책 신청서, 채권자목록, 재산목록, 수입·지출 명세서, 진술서 등을 법원에 제출합니다.</li>\n<li><strong>파산선고</strong> — 법원이 지급불능을 인정하면 파산을 선고합니다. 재산이 거의 없으면 동시폐지(파산관재인 선임 없이 바로 면책 절차로)로 진행됩니다.</li>\n<li><strong>면책신청</strong> — 파산선고 후 면책을 신청합니다. 대부분 파산신청과 동시에 면책신청을 합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 파산선고만으로는 채무가 소멸하지 않습니다. 면책결정이 확정되어야 비로소 채무 변제 책임이 면제됩니다.</blockquote>',
      },
      {
        title: '면책 요건 5가지와 불허가 사유',
        content:
          '<p><strong style="color:#1e3a5f">법원은 아래 요건을 검토하여 면책 여부를 결정합니다.</strong></p>\n<ul>\n<li><strong>1. 성실한 신청</strong> — 재산과 채무를 숨기지 않고 정직하게 신고해야 합니다. 허위 기재는 면책 불허가 사유입니다.</li>\n<li><strong>2. 낭비·도박 여부</strong> — 과도한 낭비, 도박, 사치로 채무가 발생한 경우 면책이 제한될 수 있습니다. 다만 반성하고 개선 의지를 보이면 재량 면책이 가능합니다.</li>\n<li><strong>3. 사기적 차입</strong> — 갚을 의사 없이 빌린 채무는 면책 불허가 사유가 됩니다.</li>\n<li><strong>4. 전(前) 면책 이력</strong> — 이전에 면책을 받은 적이 있으면 일정 기간(7년)이 경과해야 다시 면책을 받을 수 있습니다.</li>\n<li><strong>5. 협조 의무</strong> — 파산관재인이나 법원의 조사에 성실히 협조해야 합니다. 비협조는 면책 불허가 사유입니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>면책 가능 여부 AI가 판단해 드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">채무 현황과 발생 경위를 입력하면 면책 가능성을 무료로 분석합니다.</p>\n<a href="/chat?domain=bankruptcy" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '비면책채권 — 면책되지 않는 채무',
        content:
          '<p><strong style="color:#1e3a5f">면책이 확정되어도 아래 채무는 면제되지 않으므로 미리 확인해야 합니다.</strong></p>\n<ul>\n<li><strong>조세·벌금</strong> — 국세, 지방세, 과태료, 형사 벌금 등은 면책 대상에서 제외됩니다.</li>\n<li><strong>양육비</strong> — 자녀 양육비는 면책되지 않으며, 파산 후에도 계속 지급해야 합니다.</li>\n<li><strong>고의 불법행위 손해배상</strong> — 고의로 타인에게 손해를 입힌 경우의 배상채무는 면책되지 않습니다.</li>\n<li><strong>채권자목록 누락 채권</strong> — 채무자가 악의로 채권자목록에 기재하지 않은 채권은 면책되지 않습니다. 모든 채권자를 빠짐없이 기재하세요.</li>\n<li><strong>근로자 임금·퇴직금</strong> — 고용한 근로자에게 지급해야 할 임금과 퇴직금은 면책되지 않습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 채권자목록에서 실수로 누락해도 면책되지 않을 수 있으므로, 신용정보 조회를 통해 모든 채무를 빠짐없이 확인하세요.</blockquote>',
      },
      {
        title: '면책 결정 후 신용 회복 절차',
        content:
          '<p><strong style="color:#1e3a5f">면책 후에는 신용 회복을 통해 경제적 재기가 가능합니다.</strong></p>\n<ul>\n<li><strong>신용등급 회복</strong> — 면책 확정 후 신용정보가 해제되며, 시간이 지남에 따라 신용등급이 점차 회복됩니다. 면책 후 즉시 등급이 복원되지는 않습니다.</li>\n<li><strong>금융거래 재개</strong> — 면책 후 체크카드 발급, 소액 대출 등부터 시작하여 점진적으로 금융거래를 재개할 수 있습니다.</li>\n<li><strong>취업 제한 해소</strong> — 파산선고로 인한 일부 직업 제한(변호사, 공인회계사 등 결격사유)은 면책 확정으로 해소됩니다.</li>\n<li><strong>재산 형성</strong> — 면책 이후 취득하는 재산은 온전히 본인의 것입니다. 과거 채무와 관계없이 새로운 경제활동을 할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">팁: 면책 확정 증명서를 한국신용정보원에 제출하면 신용정보 해제 절차가 빨라집니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 채무불이행자명부 등재와 면책결정의 효력',
        summary:
          '대법원 2025마7576 사건(대법원, 2026.01.09 선고)에서 법원은 면책결정이 확정된 경우 해당 채무에 대한 채무불이행자명부 등재신청은 이유 없어 기각해야 한다고 판시하며, 채무자가 악의로 채권자목록에 기재하지 않은 경우의 판단 기준도 제시했습니다.',
        takeaway:
          '면책결정이 확정되면 채무불이행자명부 등재도 해제됩니다. 다만 채권자목록에서 채권을 누락하면 면책 효력이 미치지 않을 수 있으므로, 모든 채무를 정확히 기재하세요.',
      },
    ],
    faq: [
      {
        question: '파산하면 모든 재산을 빼앗기나요?',
        answer:
          '<p>아닙니다. 생활에 필요한 필수 재산(압류금지재산)은 보호됩니다. 생활용품, 급여의 일부, 소액 예금 등은 유지할 수 있으며, 동시폐지 결정이 나면 재산 처분 없이 면책 절차로 넘어갑니다.</p>',
      },
      {
        question: '도박 빚도 면책이 되나요?',
        answer:
          '<p>도박으로 인한 채무는 면책 불허가 사유에 해당할 수 있습니다. 다만 채무자가 깊이 반성하고 개선 의지를 보이면 법원이 재량으로 면책을 허가하는 경우(재량 면책)가 있습니다. 도박 치료 기록 등이 유리한 자료가 됩니다.</p>',
      },
      {
        question: '파산 후 취업에 불이익이 있나요?',
        answer:
          '<p>일반 기업 취업에는 직접적 불이익이 없습니다. 다만 변호사, 공인회계사, 금융회사 임원 등 일부 직종은 파산선고 기간 중 결격사유가 됩니다. 면책이 확정되면 이러한 결격사유도 해소됩니다.</p>',
      },
      {
        question: '파산 신청 비용은 얼마인가요?',
        answer:
          '<p>법원 인지대와 송달료로 약 5~10만원이 필요합니다. 변호사·법무사를 선임하면 별도 비용(50~200만원)이 듭니다. 경제적 어려움이 있으면 대한법률구조공단에서 무료 법률 구조를 받을 수 있습니다.</p>',
      },
      {
        question: '면책 결정까지 얼마나 걸리나요?',
        answer:
          '<p>동시폐지 사건은 파산 신청 후 약 3~6개월이면 면책 결정이 나옵니다. 재산이 있어 파산관재인이 선임되는 경우(이시폐지)에는 1년 이상 걸릴 수 있습니다.</p>',
      },
    ],
    cta: { text: '파산 면책 가능 여부 AI로 확인하기', link: '/chat?domain=bankruptcy' },
    internalLinks: [
      { label: '파산에서 면책까지', href: '/guide/bankruptcy/bankruptcy-to-discharge-process' },
      { label: '파산 전체 절차', href: '/guide/bankruptcy/application-to-discharge-full-procedure' },
      { label: '압류금지 재산', href: '/guide/bankruptcy/bankruptcy-personal-property-exempt' },
      { label: '신용 회복 타임라인', href: '/guide/bankruptcy/bankruptcy-credit-recovery-timeline' },
      { label: '회생 vs 파산 비교', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy-choice' },
    ],
  },

  // ── 전세. 전세보증금 반환 청구 절차 총정리 ──
  {
    domain: 'jeonse',
    slug: 'jeonse-deposit-return-comprehensive-guide',
    keyword: '전세보증금 반환 절차 총정리',
    questionKeyword: '전세보증금을 돌려받으려면 어떤 절차를 밟아야 하나요?',
    ctaKeyword: '전세보증금 반환 절차 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '전세보증금 반환 청구 절차 4단계 | 로앤가이드',
      description:
        '전세보증금을 돌려받지 못해 막막하다면, 내용증명부터 강제집행까지 4단계를 지금 확인하세요.',
    },
    intro:
      '<p>전세 계약이 끝났는데 집주인이 보증금을 돌려주지 않습니다. "다음 세입자가 들어와야 준다"는 말만 반복하고, 이사 날짜는 다가오는데 보증금이 묶여 새 집도 구할 수 없습니다. 전세보증금 반환은 법적으로 보장된 권리이며, 단계적으로 대응하면 강제로라도 받아낼 수 있습니다.</p>',
    sections: [
      {
        title: '1단계: 내용증명 발송과 반환 요구',
        content:
          '<p><strong style="color:#1e3a5f">계약 만료 전에 갱신 거절 통보를 하고, 만료 후에는 내용증명으로 반환을 요구합니다.</strong></p>\n<ul>\n<li><strong>갱신 거절 통보</strong> — 계약 만료 6개월~2개월 전에 임대인에게 갱신 거절 의사를 통보해야 합니다. 통보하지 않으면 자동 갱신될 수 있습니다.</li>\n<li><strong>내용증명 발송</strong> — 계약 만료일 또는 이후 즉시 내용증명으로 보증금 반환을 요구합니다. 반환 기한(통상 2주)을 명시하고, 불이행 시 법적 조치를 취하겠다고 기재합니다.</li>\n<li><strong>대항력 유지</strong> — 보증금을 받기 전까지 전입신고와 점유(거주)를 유지하세요. 이사 가면 대항력과 우선변제권을 잃을 수 있습니다.</li>\n<li><strong>임차권등기명령</strong> — 이사를 해야 하지만 보증금을 못 받은 경우, 법원에 임차권등기명령을 신청하면 이사 후에도 대항력을 유지할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 보증금을 받기 전에 이사하면 우선변제권을 잃습니다. 반드시 임차권등기명령을 먼저 받으세요.</blockquote>',
      },
      {
        title: '2단계: 임차권등기명령과 보증보험',
        content:
          '<p><strong style="color:#1e3a5f">이사가 급한 경우 임차권등기명령으로 권리를 보전하고, 보증보험이 있다면 활용합니다.</strong></p>\n<ul>\n<li><strong>임차권등기명령 신청</strong> — 관할 법원에 신청하면 7~14일 이내에 결정이 나옵니다. 등기가 완료되면 이사해도 대항력과 우선변제권이 유지됩니다.</li>\n<li><strong>전세보증금 반환보증</strong> — HUG(주택도시보증공사), SGI서울보증, HF(한국주택금융공사) 등의 전세보증금 반환보증에 가입되어 있다면 보증기관에 보증금 반환을 청구할 수 있습니다.</li>\n<li><strong>보증기관 청구 절차</strong> — 계약 만료 증빙, 내용증명 사본, 임대차계약서 등을 제출하면 보증기관이 보증금을 대신 지급한 후 임대인에게 구상권을 행사합니다.</li>\n<li><strong>미가입자 대응</strong> — 보증보험에 미가입한 경우에는 직접 법적 절차(지급명령, 소송)를 진행해야 합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>전세보증금 반환 최적 방법 AI가 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">계약 조건과 현재 상황을 입력하면 가장 효과적인 반환 방법을 확인하세요.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계: 지급명령·소송 제기',
        content:
          '<p><strong style="color:#1e3a5f">내용증명에도 불구하고 반환하지 않으면 법원에 지급명령 또는 소송을 제기합니다.</strong></p>\n<ul>\n<li><strong>지급명령 신청</strong> — 법원에 지급명령을 신청하면 인지대가 소송의 1/10이고, 상대방이 2주 이내에 이의하지 않으면 확정판결과 같은 효력을 갖습니다.</li>\n<li><strong>소액사건 소송</strong> — 보증금 3천만원 이하는 소액사건으로 신속하게 처리됩니다. 1회 변론으로 판결이 나올 수 있습니다.</li>\n<li><strong>일반 민사소송</strong> — 보증금이 고액이거나 분쟁이 복잡하면 일반 민사소송을 제기합니다. 6개월~1년 정도 소요됩니다.</li>\n<li><strong>가압류</strong> — 임대인이 재산을 처분할 우려가 있으면 소송 전에 부동산·예금 가압류를 신청합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">팁: 지급명령은 가장 빠르고 비용이 적은 방법입니다. 상대방이 이의하면 자동으로 소송으로 전환됩니다.</blockquote>',
      },
      {
        title: '4단계: 강제집행으로 보증금 회수',
        content:
          '<p><strong style="color:#1e3a5f">집행권원이 확보되면 임대인의 재산을 압류하여 보증금을 회수합니다.</strong></p>\n<ul>\n<li><strong>부동산 강제경매</strong> — 임대인 소유 부동산(임차 주택 포함)에 대해 강제경매를 신청합니다. 임차인은 우선변제권이 있으므로 배당에서 유리합니다.</li>\n<li><strong>예금·급여 압류</strong> — 임대인의 은행 예금이나 급여를 압류하여 직접 수령할 수 있습니다.</li>\n<li><strong>우선변제권 활용</strong> — 확정일자를 받은 임차인은 해당 주택의 환가대금에서 후순위 권리자보다 우선하여 보증금을 변제받을 수 있습니다.</li>\n<li><strong>소액임차인 보호</strong> — 소액임차인(지역별 기준 금액 이하)은 선순위 담보권자보다도 우선하여 일정 금액을 변제받을 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 임차 주택에 선순위 근저당이 많으면 경매를 통해서도 보증금 전액을 회수하기 어려울 수 있습니다. 등기부등본을 확인하여 배당 순위를 파악하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차인 소유권 취득 시 대항력 상실',
        summary:
          '대법원 2025다213466 사건(대법원, 2026.01.08 선고)에서 법원은 대항력을 갖춘 임차인이 임차주택을 양수하여 소유자가 된 경우, 소유권 취득 시점에 대항력과 우선변제권이 소멸한다고 판시했습니다.',
        takeaway:
          '전세 계약 중 임차 주택을 매수하면 대항력과 우선변제권을 잃게 됩니다. 임차인 지위와 소유자 지위는 양립할 수 없으므로, 매수 전에 보증금 반환 문제를 확실히 정리하세요.',
      },
    ],
    faq: [
      {
        question: '다음 세입자가 안 들어오면 보증금을 못 받나요?',
        answer:
          '<p>아닙니다. 보증금 반환 의무는 임대인에게 있으며, 다음 세입자 입주와는 무관합니다. 계약 만료 즉시 반환을 요구할 수 있고, 불이행 시 법적 절차를 통해 강제로 받아낼 수 있습니다.</p>',
      },
      {
        question: '이사를 가면 보증금을 못 받게 되나요?',
        answer:
          '<p>이사하면서 전입신고를 옮기면 대항력과 우선변제권을 잃을 수 있습니다. 이사 전에 반드시 임차권등기명령을 받아두세요. 등기가 완료되면 이사 후에도 권리가 유지됩니다.</p>',
      },
      {
        question: '전세보증금 반환보증은 어디서 가입하나요?',
        answer:
          '<p>HUG(주택도시보증공사), SGI서울보증, HF(한국주택금융공사) 등에서 가입할 수 있습니다. 전세 계약 후 전입신고와 확정일자를 받은 상태에서 신청하며, 보증료는 연 0.1~0.3% 수준입니다.</p>',
      },
      {
        question: '확정일자가 없으면 보증금을 못 받나요?',
        answer:
          '<p>확정일자가 없어도 보증금 반환 청구는 가능합니다. 다만 경매 시 우선변제권을 주장하려면 확정일자가 필요합니다. 확정일자는 주민센터나 인터넷등기소에서 600원에 받을 수 있으니 반드시 받아두세요.</p>',
      },
      {
        question: '임대인이 파산하면 보증금을 못 받나요?',
        answer:
          '<p>대항력이 있는 임차인은 파산절차와 별도로 보증금을 우선변제받을 수 있습니다. 임차 주택에 대한 경매에서 우선변제권을 행사하세요. 보증보험에 가입되어 있다면 보증기관에 직접 청구할 수 있습니다.</p>',
      },
      {
        question: '보증금 반환에 대한 지연이자도 받을 수 있나요?',
        answer:
          '<p>네, 계약 만료일 다음 날부터 연 5%의 민사 법정이자가 발생합니다. 소송을 제기하면 소장 송달일 다음 날부터 연 12%의 지연손해금을 청구할 수 있습니다.</p>',
      },
    ],
    cta: { text: '전세보증금 반환 방법 AI로 확인하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '보증금 반환 절차', href: '/guide/jeonse/deposit-return-process' },
      { label: '보증금 미반환 대응', href: '/guide/jeonse/jeonse-deposit-not-returned-response' },
      { label: '전입신고 요건', href: '/guide/jeonse/jeonse-tenant-registration-requirement' },
      { label: '계약 만료 반환 절차', href: '/guide/jeonse/lease-expiry-deposit-return-steps' },
      { label: '회생 vs 파산 비교', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy-choice' },
    ],
  },
];
