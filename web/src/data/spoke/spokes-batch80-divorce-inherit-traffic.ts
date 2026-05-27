import { SpokePage } from '../spoke-pages';

// batch80 divorce + inheritance + traffic-accident — 6개 (2026-05-28)
//
// 고유 존재 이유:
// 1. (divorce) divorce-consensual-confirmation-then-withdrawal-before-registration-track — 가정법원 이혼의사확인을 받은 뒤 이혼신고 전에 일방이 마음을 바꿔 철회·취하하려는 경우, 신고 수리가 거부되는지·절차를 어떻게 진행하는지 다투는 협의이혼 철회 트랙.
// 2. (divorce) divorce-international-marriage-no-consent-annulment-governing-law-track — 국제결혼에서 한쪽에만 혼인 의사가 있고 진정한 혼인 합의가 없어 혼인무효를 다투는 경우, 준거법(국제사법 제36조)과 쟁송 방법을 정리하는 트랙.
// 3. (divorce) divorce-short-marriage-wedding-gifts-yedan-return-track — 혼인이 단기간에 파탄된 경우 수수된 혼인예물·예단의 반환 여부와 유책자의 반환청구 제한을 다투는 트랙.
// 4. (divorce) divorce-negative-net-worth-debt-allocation-division-track — 부부의 소극재산(채무)이 적극재산을 초과해 순재산이 마이너스인 경우에도 재산분할(채무 분담)이 가능한지 판단하는 트랙.
// 5. (inheritance) inheritance-landlord-status-deposit-return-coheir-indivisible-debt-track — 상속으로 임대인 지위를 공동승계한 상속인들의 임차보증금반환채무가 불가분채무인지, 1인이 변제 시 법정상속분에 따른 구상이 되는지 다투는 트랙.
// 6. (traffic-accident) traffic-accident-mandatory-insurance-coverage-limit-excess-claim-track — 자배법 의무보험 책임보험금 한도(사망·부상별 시행령 기준)와 한도를 초과한 손해의 추가 청구 가능 여부를 정리하는 트랙.

export const spokesBatch80DivorceInheritTraffic: SpokePage[] = [
  // ─── 1 divorce-consensual-confirmation-then-withdrawal-before-registration-track ───
  {
    domain: 'divorce',
    slug: 'divorce-consensual-confirmation-then-withdrawal-before-registration-track',
    keyword: '협의이혼 의사확인 후 이혼신고 전 철회 절차',
    questionKeyword: '가정법원에서 이혼의사확인까지 받았는데 마음이 바뀌었습니다. 상대방이 이혼신고를 하기 전에 제가 철회할 수 있나요?',
    ctaKeyword: '협의이혼 의사확인 후 철회 절차 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '협의이혼 의사확인 후 철회 — 5단계 신고 전 철회 트랙 | 로앤가이드',
      description:
        '가정법원 이혼의사확인을 받은 뒤 마음이 바뀌었는데 상대방의 이혼신고 전에 철회할 수 있는지, 어디에 무엇을 제출하는지 막막하다면 철회 5가지 절차 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"몇 주 전 배우자와 함께 가정법원에 가서 이혼의사확인까지 받았습니다. 그런데 막상 시간이 지나 자녀 문제와 앞으로의 생활을 다시 생각하니 이혼을 정말 해야 하는지 마음이 흔들립니다. 확인서를 받았으니 이제 자동으로 이혼이 되는 건지, 아니면 상대방이 이혼신고를 하기 전에 제가 마음을 돌릴 방법이 있는지 막막한 상황입니다. 어디에 어떤 서류를 내야 하는지조차 모르겠어요." 협의이혼은 가정법원의 이혼의사확인을 받은 뒤 가족관계의 등록 등에 관한 법률에 따른 이혼신고를 해야 비로소 효력이 발생하는 영역입니다. 대법원 2002드합8421(대법원, 2004.03.17)은 가정법원의 이혼의사확인을 받기 전에도 그 신청을 취하할 수 있고, 확인이 있더라도 부부 일방에 의한 이혼신고 전에 상대방의 이혼의사 철회가 있으면 이혼신고를 수리할 수 없다는 취지로 이혼의사의 변경 가능성을 설명한 사례입니다. 당사자라면 ① 진행 단계 확인 ② 철회 의사 정리 ③ 철회 신고 제출 ④ 수리 방지 확인 ⑤ 향후 절차 정리 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 협의이혼 의사확인 후 철회 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 단계확인·의사정리·철회제출·수리방지·향후정리 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 진행 단계 확인</strong> — 이혼의사확인서를 받았는지, 이혼신고가 이미 접수됐는지 확인.</li>\n<li><strong>② 철회 의사 정리</strong> — 이혼하지 않겠다는 의사를 명확히 정리.</li>\n<li><strong>③ 철회 신고 제출</strong> — 관할 시·구·읍·면에 이혼의사 철회서(철회신고) 제출.</li>\n<li><strong>④ 수리 방지 확인</strong> — 상대방 이혼신고가 아직 수리되지 않았는지 확인.</li>\n<li><strong>⑤ 향후 절차 정리</strong> — 재판상 이혼 가능성 등 이후 절차 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 협의이혼은 이혼신고로 효력이 발생하므로, 이혼의사확인을 받았더라도 상대방의 이혼신고가 수리되기 전이라면 일방이 이혼의사를 철회할 수 있는 영역입니다. 철회신고가 먼저 접수되면 그 후의 이혼신고는 수리할 수 없습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원·시구읍면 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 진행 점검·철회서 작성·제출·수리 확인·이후 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진행 상황 점검 (즉시)</strong> — 이혼의사확인서 교부 여부·이혼신고 접수 여부 확인.</li>\n<li><strong>2단계 — 이혼의사 철회 신고서 준비 (신고 수리 전)</strong> — 등록기준지 또는 주소지 관할 시·구·읍·면 양식 확인.</li>\n<li><strong>3단계 — 철회신고 제출 (가능한 한 신속)</strong> — 상대방의 이혼신고보다 먼저 접수되도록 제출.</li>\n<li><strong>4단계 — 수리 여부 확인</strong> — 철회신고 접수 후 이혼신고가 수리되지 않았는지 확인.</li>\n<li><strong>5단계 — 이후 절차 정리</strong> — 이혼 의사가 유지될 경우 재판상 이혼 등 별도 절차 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">협의이혼 의사확인 후 철회 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·확인·철회 갈래입니다.</strong></p>\n<ul>\n<li><strong>신분증 (본인 확인용)</strong></li>\n<li><strong>이혼의사확인서 등본 (교부받은 경우)</strong></li>\n<li><strong>혼인관계증명서</strong></li>\n<li><strong>가족관계증명서</strong></li>\n<li><strong>이혼의사 철회 신고서 (관할 시·구·읍·면 양식)</strong></li>\n<li><strong>자녀 양육 관련 협의 자료 (미성년 자녀가 있는 경우)</strong></li>\n<li><strong>도장 또는 서명 (신고서 작성용)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 협의이혼의 효력은 이혼신고가 수리될 때 발생하는 영역이므로, 철회는 상대방의 이혼신고가 수리되기 \'전\'에 철회신고가 접수되어야 의미가 있습니다. 마음이 바뀌었다면 시간을 지체하지 않고 관할 시·구·읍·면에 철회신고를 제출하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>철회 시점</strong> — 상대방 이혼신고 수리 전인지 후인지.</li>\n<li><strong>수리 선후관계</strong> — 철회신고와 이혼신고 중 어느 것이 먼저 접수됐는지.</li>\n<li><strong>의사 진정성</strong> — 일시적 감정인지 확정적 철회 의사인지.</li>\n<li><strong>자녀 양육협의</strong> — 미성년 자녀가 있는 경우 양육·면접교섭 정리.</li>\n<li><strong>이후 절차</strong> — 철회 후 다시 이혼을 원할 경우의 절차.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>관할 가정법원·시구읍면 민원실</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 이혼의사확인 후 이혼신고 전 이혼의사 철회 가능 영역',
        summary:
          '대법원 2002드합8421(대법원, 2004.03.17 선고) 영역에서 법원은 협의이혼에서 부부 중 일방이 가정법원에 의한 이혼의사확인을 받기 전 그 신청을 취하할 수 있고, 가정법원에 의한 이혼의사확인이 있더라도 부부 일방에 의한 이혼신고 전 상대방의 이혼의사 철회가 있으면 이혼신고를 수리할 수 없다는 취지로 이혼의사의 변경 가능성을 설명했습니다. 이혼의사확인 후 철회 가능 여부를 다투는 사안에서 이 법리를 검토해볼 수 있습니다.',
        takeaway:
          '이혼의사확인 + 이혼신고 미수리 + 일방의 철회 의사 결합 시 철회신고 검토 영역 — 상대방 이혼신고 수리 전 관할 시·구·읍·면에 철회신고 제출을 신속히 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '이혼의사확인서를 받으면 이미 이혼이 된 건가요?',
        answer:
          '<strong>이혼의사확인만으로 이혼이 성립하는 것이 아니라 이혼신고가 수리되어야 효력이 발생하는 영역입니다.</strong> 신고 전이라면 철회를 검토할 수 있습니다.',
      },
      {
        question: '제가 철회하면 상대방이 한 이혼신고는 어떻게 되나요?',
        answer:
          '<strong>일방의 이혼신고 전 상대방의 철회가 있으면 그 이혼신고는 수리할 수 없는 영역입니다.</strong> 철회신고의 접수 시점이 중요합니다.',
      },
      {
        question: '철회는 어디에 어떻게 신청하나요?',
        answer:
          '<strong>등록기준지 또는 주소지 관할 시·구·읍·면에 이혼의사 철회 신고서를 제출하는 것을 검토할 수 있는 영역입니다.</strong> 양식과 첨부서류를 미리 확인하는 것이 좋습니다.',
      },
      {
        question: '상대방이 이미 이혼신고를 수리받았으면 못 되돌리나요?',
        answer:
          '<strong>이혼신고가 수리되어 효력이 발생한 뒤라면 협의 철회만으로는 되돌리기 어려운 영역입니다.</strong> 이 경우 별도의 법적 절차를 검토해야 할 수 있습니다.',
      },
      {
        question: '철회한 뒤에 다시 이혼하려면 처음부터 다시 해야 하나요?',
        answer:
          '<strong>철회 후 다시 이혼을 원하면 협의이혼 절차를 새로 진행하거나 재판상 이혼을 검토할 수 있는 영역입니다.</strong> 당사자 의사와 상황에 따라 절차가 달라집니다.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼의사 철회 절차', href: '/guide/divorce/divorce-consensual-intent-withdrawal-procedure' },
      { label: '협의이혼 절차', href: '/guide/divorce/consensual-divorce-process' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/consensual-divorce-required-documents' },
      { label: '재결합 취하 기준', href: '/guide/divorce/divorce-reconciliation-withdraw-standard' },
      { label: '이혼 어디부터 시작', href: '/guide/divorce/decided-divorce-where-to-begin' },
    ],
  },

  // ─── 2 divorce-international-marriage-no-consent-annulment-governing-law-track ───
  {
    domain: 'divorce',
    slug: 'divorce-international-marriage-no-consent-annulment-governing-law-track',
    keyword: '국제결혼 혼인 합의 부존재 혼인무효 준거법',
    questionKeyword: '외국인 배우자와 혼인신고는 했지만 진정한 혼인 의사가 없었던 것 같습니다. 어느 나라 법으로 혼인무효를 다투나요?',
    ctaKeyword: '국제결혼 혼인무효 준거법 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '국제결혼 혼인무효 — 5단계 준거법 판단 트랙 | 로앤가이드',
      description:
        '외국인 배우자와 혼인신고는 했지만 진정한 혼인 합의가 없었던 경우 어느 나라 법으로 혼인무효를 다투는지, 입증은 어떻게 하는지 막막하다면 준거법 판단 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"국제결혼으로 외국인 배우자와 혼인신고를 마쳤는데, 함께 살아보니 애초에 진정한 혼인 의사가 있었던 것인지 의심이 들었습니다. 입국 직후 연락이 끊기거나, 부부로서 정신적·육체적 결합을 이룰 의사 자체가 없었던 정황이 드러난 상황이에요. 이혼을 해야 하는 건지, 아니면 혼인 자체가 무효인 건지, 그리고 외국인이 상대라 어느 나라 법을 따져야 하는지 막막합니다." 국제사법 제36조 제1항은 혼인의 성립요건을 각 당사자의 본국법에 따르도록, 민법 제815조 제1호는 당사자 사이에 혼인의 합의가 없는 때 그 혼인을 무효로 규정하는 영역입니다. 대법원 2017므1224(대법원, 2022.01.27)은 대한민국 국민에게만 혼인 의사가 있고 상대 외국인과 혼인의 합의가 없는 때에는 대한민국 민법과 상대국 혼인·가족법 어느 법에 따르더라도 혼인 성립요건을 갖추었다고 볼 수 없다는 취지를 판시한 사례입니다. 당사자라면 ① 혼인 의사 정황 정리 ② 준거법 확인 ③ 무효·이혼 구분 ④ 입증 자료 확보 ⑤ 쟁송 방법 검토 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 국제결혼 혼인무효 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 정황정리·준거법확인·무효구분·입증확보·쟁송검토 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 혼인 의사 정황 정리</strong> — 혼인신고 당시 진정한 혼인 의사 부재를 보여주는 정황 정리.</li>\n<li><strong>② 준거법 확인</strong> — 국제사법 제36조에 따른 각 당사자 본국법 확인.</li>\n<li><strong>③ 무효·이혼 구분</strong> — 혼인무효(합의 부존재)인지 이혼(성립 후 파탄)인지 구분.</li>\n<li><strong>④ 입증 자료 확보</strong> — 합의 부존재를 객관적으로 뒷받침할 자료 확보.</li>\n<li><strong>⑤ 쟁송 방법 검토</strong> — 혼인무효 확인의 소 등 적절한 쟁송 방법 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대한민국 국민에게만 혼인 의사가 있고 외국인 상대방과 진정한 혼인 합의가 없었다면, 양국 법 어느 쪽에 따르더라도 혼인 성립요건을 갖추지 못한 것으로 평가될 수 있는 영역입니다. 다만 합의 부존재는 직권조사 사항으로, 합리적·객관적 근거로 뒷받침되어야 합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 정황 정리·준거법 확인·자료 확보·소 제기·직권조사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 혼인 경위·정황 정리 (즉시)</strong> — 혼인신고 시점·동거 여부·연락 단절 등 시간 순 정리.</li>\n<li><strong>2단계 — 준거법·관할 확인 (1~2주)</strong> — 국제사법상 준거법과 국내 가정법원 관할 확인.</li>\n<li><strong>3단계 — 합의 부존재 입증 자료 확보</strong> — 메시지·출입국 기록·진술 등 객관 자료 수집.</li>\n<li><strong>4단계 — 혼인무효 확인의 소 제기 (수개월)</strong> — 가류 가사소송사건으로 제기.</li>\n<li><strong>5단계 — 가정법원 직권조사·판결</strong> — 혼인의사 부존재가 객관적으로 뒷받침되는지 심리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">국제결혼 혼인무효 준거법 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·혼인·정황 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>외국인 배우자 본국 신분·혼인 관련 자료</strong></li>\n<li><strong>혼인신고 당시 경위 자료 (혼인 절차·연락 기록)</strong></li>\n<li><strong>출입국 기록 (입국·출국·체류 내역)</strong></li>\n<li><strong>동거·연락 단절 입증 자료 (메시지·진술)</strong></li>\n<li><strong>준거법 확인 자료 (상대국 혼인·가족법 관련)</strong></li>\n<li><strong>혼인 의사 부존재 정황 정리 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 혼인무효는 이혼과 가족관계등록부 처리 방식·효과가 다른 영역입니다. 혼인무효 사건은 자백 규정이 적용되지 않고 법원이 직권으로 사실·증거조사를 하므로, 합의 부존재를 보여줄 객관적 자료를 시간 순으로 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>혼인 합의 부존재</strong> — 신고 당시 진정한 혼인 의사가 있었는지.</li>\n<li><strong>준거법</strong> — 각 당사자 본국법 적용과 쟁송 준거법 구분.</li>\n<li><strong>무효 vs 이혼</strong> — 성립요건 흠결(무효)인지 성립 후 파탄(이혼)인지.</li>\n<li><strong>직권조사</strong> — 합의 부존재가 객관적 근거로 뒷받침되는지.</li>\n<li><strong>체류·신분 영향</strong> — 혼인무효가 체류자격 등에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>다누리콜센터 1577-1366 (다문화·외국인 상담)</strong></li>\n<li><strong>관할 가정법원 민원실</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 국제결혼 혼인 합의 부존재 시 혼인 성립요건·준거법 영역',
        summary:
          '대법원 2017므1224(대법원, 2022.01.27 선고) 영역에서 법원은 국제사법 제36조 제1항에 따라 혼인 성립요건은 각 당사자의 본국법에 의하고, 대한민국 국민에게만 혼인 의사가 있고 상대 외국인과 혼인의 합의가 없는 때에는 대한민국 민법(제815조 제1호)과 상대국 혼인·가족법 어느 법에 따르더라도 혼인 성립요건을 갖추었다고 볼 수 없다는 취지로 판시했습니다. 국제결혼에서 혼인 합의 부존재를 이유로 혼인무효를 다투는 사안에서 이 법리를 검토해볼 수 있습니다.',
        takeaway:
          '국제결혼 + 혼인 합의 부존재 + 양국 법 성립요건 결합 시 혼인무효 검토 영역 — 합의 부존재 정황·출입국 자료 확보 후 변호인 상담과 혼인무효 확인의 소를 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '혼인신고를 했어도 혼인이 무효가 될 수 있나요?',
        answer:
          '<strong>당사자 사이에 진정한 혼인의 합의가 없었다면 혼인무효를 검토할 수 있는 영역입니다.</strong> 합의 부존재가 객관적으로 뒷받침되는지가 핵심입니다.',
      },
      {
        question: '외국인 배우자인데 어느 나라 법을 적용하나요?',
        answer:
          '<strong>혼인 성립요건은 국제사법에 따라 각 당사자의 본국법에 의해 판단되는 영역입니다.</strong> 합의가 없으면 양국 법 어느 쪽으로도 성립을 인정하기 어렵습니다.',
      },
      {
        question: '혼인무효와 이혼은 무엇이 다른가요?',
        answer:
          '<strong>혼인무효는 성립요건 흠결로 처음부터 효력이 없는 것이고, 이혼은 성립한 혼인을 장래에 향해 해소하는 것으로 효과가 다른 영역입니다.</strong> 가족관계등록부 처리도 달라집니다.',
      },
      {
        question: '합의가 없었다는 건 누가 어떻게 증명하나요?',
        answer:
          '<strong>혼인무효 사건은 법원이 직권으로 사실·증거조사를 하는 영역입니다.</strong> 다만 합의 부존재가 합리적·객관적 근거로 뒷받침되어야 하므로 정황 자료 정리가 중요합니다.',
      },
      {
        question: '혼인무효가 되면 체류자격에도 영향이 있나요?',
        answer:
          '<strong>혼인무효는 혼인을 전제로 한 체류·신분관계에 영향을 줄 수 있는 영역입니다.</strong> 구체적 영향은 사안과 체류자격에 따라 달라지므로 함께 확인하는 것이 좋습니다.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '혼인 무효 사기 취소', href: '/guide/divorce/divorce-marriage-annulment-fraud' },
      { label: '외국인 배우자 국제관할', href: '/guide/divorce/divorce-foreign-spouse-international-jurisdiction' },
      { label: '국제결혼 이혼 절차', href: '/guide/divorce/divorce-international-marriage-procedure' },
      { label: '외국 거주 관할·실질관련', href: '/guide/divorce/divorce-foreign-residence-jurisdiction-substantive-relevance' },
      { label: '위장혼인 서류 취소', href: '/guide/divorce/divorce-marriage-fake-document-cancel-track' },
    ],
  },

  // ─── 3 divorce-short-marriage-wedding-gifts-yedan-return-track ───
  {
    domain: 'divorce',
    slug: 'divorce-short-marriage-wedding-gifts-yedan-return-track',
    keyword: '단기 파탄 혼인예물 예단 반환',
    questionKeyword: '결혼한 지 얼마 안 돼 헤어지게 됐는데, 주고받은 예물과 예단을 돌려받을 수 있나요?',
    ctaKeyword: '단기 파탄 예물 예단 반환 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '단기 파탄 예물·예단 반환 — 5단계 청구 판단 트랙 | 로앤가이드',
      description:
        '결혼한 지 얼마 안 돼 파탄됐는데 주고받은 예물·예단을 돌려받을 수 있는지, 유책자도 청구할 수 있는지 막막하다면 반환 청구 5가지 판단 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"양가 인사를 마치고 적지 않은 예물과 예단을 주고받으며 결혼했는데, 함께 산 지 불과 몇 달 만에 관계가 돌이킬 수 없을 정도로 틀어졌습니다. 결혼 준비에 들인 비용과 예물·예단이 만만치 않았던 터라, 이렇게 단기간에 헤어지게 되면 주고받은 것을 돌려받을 수 있는지 막막합니다. 누가 누구에게 무엇을 돌려줘야 하는지, 잘못이 더 큰 쪽도 청구할 수 있는지 모르겠어요." 혼인예물·예단은 혼인의 성립을 증명하고 양가의 정리를 두텁게 할 목적으로 수수되는, 혼인의 불성립을 해제조건으로 하는 증여와 유사한 성질을 갖는 영역입니다. 대법원 2010드합2787(대법원, 2010.12.16)은 혼인이 단기간 내에 파탄된 경우 혼인의 불성립에 준하여 증여의 해제조건이 성취되었다고 보아 예물·예단이 제공자에게 반환되어야 하나, 혼인관계 파탄에 과실이 있는 유책자에게는 자신이 제공한 예물·예단을 적극적으로 반환청구할 권리가 없다는 취지를 판시한 사례입니다. 당사자라면 ① 수수 내역 정리 ② 파탄 시점·기간 확인 ③ 유책 정도 점검 ④ 반환 대상 산정 ⑤ 청구 방법 검토 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 단기 파탄 예물·예단 반환 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 내역정리·파탄확인·유책점검·대상산정·청구검토 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 수수 내역 정리</strong> — 누가 누구에게 어떤 예물·예단을 제공했는지 정리.</li>\n<li><strong>② 파탄 시점·기간 확인</strong> — 혼인이 얼마 만에 파탄됐는지(단기 여부) 확인.</li>\n<li><strong>③ 유책 정도 점검</strong> — 파탄에 대한 과실이 어느 쪽에 있는지 점검.</li>\n<li><strong>④ 반환 대상 산정</strong> — 반환되어야 할 예물·예단의 범위와 제공자 확인.</li>\n<li><strong>⑤ 청구 방법 검토</strong> — 반환 청구 또는 위자료·재산분할과의 관계 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혼인이 단기간에 파탄된 경우 예물·예단은 혼인 불성립에 준해 증여의 해제조건이 성취되었다고 보아 제공자에게 반환되어야 하는 영역입니다. 다만 파탄에 과실이 있는 유책자는 자신이 제공한 예물·예단의 반환을 적극적으로 청구할 권리가 없다고 평가될 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 내역 확보·파탄 정리·유책 검토·청구·심리 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 예물·예단 수수 내역 확보 (즉시)</strong> — 영수증·사진·거래 내역·증인 정리.</li>\n<li><strong>2단계 — 혼인 기간·파탄 경위 정리 (1~2주)</strong> — 혼인신고일·동거 기간·파탄 시점 정리.</li>\n<li><strong>3단계 — 파탄 유책 정도 검토</strong> — 누구의 과실로 파탄에 이르렀는지 자료 정리.</li>\n<li><strong>4단계 — 반환 청구 (이혼·위자료와 병합 또는 별도)</strong> — 제공자 기준 반환 대상 청구.</li>\n<li><strong>5단계 — 가정법원 심리·판단</strong> — 단기 파탄 여부·유책 정도에 따른 반환 범위 결정.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">단기 파탄 예물·예단 반환 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·수수·파탄 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>예물·예단 구입·수수 내역 (영수증·카드 내역·사진)</strong></li>\n<li><strong>예물·예단 제공자·수령자 확인 자료</strong></li>\n<li><strong>혼인 기간 입증 자료 (혼인신고일·동거 시작일)</strong></li>\n<li><strong>파탄 경위·시점 입증 자료</strong></li>\n<li><strong>파탄 책임(유책) 관련 자료 (메시지·진술)</strong></li>\n<li><strong>양가 사이 수수 자료 (부모 등 제공·수령 내역)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 혼인예물·예단은 혼인 당사자가 1차적인 권리자·의무자이지만, 부모 등 가까운 친족 사이에 수수된 경우 실제 제공자·수령자도 함께 권리·의무를 갖는 것으로 평가될 수 있는 영역입니다. 누가 무엇을 제공했는지 수수 주체를 명확히 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>단기 파탄 여부</strong> — 혼인이 단기간 내 파탄됐다고 볼 수 있는지.</li>\n<li><strong>유책 정도</strong> — 파탄에 과실이 있는 쪽의 반환청구 제한.</li>\n<li><strong>수수 주체</strong> — 당사자 간인지 양가 친족 간 수수인지.</li>\n<li><strong>반환 범위</strong> — 예물·예단 중 반환 대상과 가액 산정.</li>\n<li><strong>위자료·분할 관계</strong> — 반환과 위자료·재산분할의 정리.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>관할 가정법원 민원실</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 단기 파탄 시 혼인예물·예단 반환과 유책자 청구 제한 영역',
        summary:
          '대법원 2010드합2787(대법원, 2010.12.16 선고) 영역에서 법원은 혼인예물·예단이 혼인의 불성립을 해제조건으로 하는 증여와 유사한 성질을 가지므로 혼인이 단기간 내에 파탄된 경우에는 혼인 불성립에 준하여 증여의 해제조건이 성취되었다고 보아 제공자에게 반환되어야 하나, 혼인관계 파탄에 과실이 있는 유책자에게는 자신이 제공한 예물·예단을 적극적으로 반환청구할 권리가 없다는 취지로 판시했습니다. 단기 파탄 후 예물·예단 반환을 다투는 사안에서 이 법리를 검토해볼 수 있습니다.',
        takeaway:
          '단기 파탄 + 예물·예단 수수 + 유책 정도 결합 시 반환 청구 검토 영역 — 수수 내역·파탄 경위 자료 확보 후 제공자 기준 반환 가능성을 변호인과 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '결혼한 지 얼마 안 돼 헤어지면 예물·예단을 돌려받나요?',
        answer:
          '<strong>혼인이 단기간 내 파탄되면 예물·예단을 제공자에게 반환하는 것을 검토할 수 있는 영역입니다.</strong> 증여의 해제조건 성취에 준해 평가됩니다.',
      },
      {
        question: '파탄에 잘못이 더 큰 쪽도 반환을 청구할 수 있나요?',
        answer:
          '<strong>파탄에 과실이 있는 유책자는 자신이 제공한 예물·예단의 반환을 적극적으로 청구할 권리가 없다고 평가될 수 있는 영역입니다.</strong> 유책 정도가 중요합니다.',
      },
      {
        question: '부모님이 주고받은 예단도 반환 대상인가요?',
        answer:
          '<strong>양가 친족 사이에 수수된 경우 실제 제공자·수령자도 반환의 권리·의무를 갖는 것으로 평가될 수 있는 영역입니다.</strong> 수수 주체 정리가 필요합니다.',
      },
      {
        question: '예물·예단이 이미 처분됐으면 어떻게 되나요?',
        answer:
          '<strong>현물 반환이 어려우면 가액 상당의 반환을 검토할 수 있는 영역입니다.</strong> 구입·수수 당시 가액 자료를 정리해두는 것이 좋습니다.',
      },
      {
        question: '반환 청구는 위자료·재산분할과 따로 하나요?',
        answer:
          '<strong>예물·예단 반환은 위자료·재산분할과 성질이 다르지만 함께 정리해 청구하는 것을 검토할 수 있는 영역입니다.</strong> 사안에 따라 병합 여부가 달라집니다.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 종합 정리', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '특유재산 분할 제외 기준', href: '/guide/divorce/divorce-special-property-exclusion-criteria' },
      { label: '위자료 산정 기준', href: '/guide/divorce/divorce-alimony-calculation-standard' },
      { label: '혼인 무효 사기 취소', href: '/guide/divorce/divorce-marriage-annulment-fraud' },
      { label: '이혼 상담 준비', href: '/guide/divorce/divorce-consultation-prep' },
    ],
  },

  // ─── 4 divorce-negative-net-worth-debt-allocation-division-track ───
  {
    domain: 'divorce',
    slug: 'divorce-negative-net-worth-debt-allocation-division-track',
    keyword: '채무 초과 부부 재산분할 채무 분담',
    questionKeyword: '나눌 재산보다 빚이 더 많은데도 재산분할 청구를 할 수 있나요? 그럼 빚을 나눠 갚게 되나요?',
    ctaKeyword: '채무 초과 재산분할 채무 분담 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '빚이 더 많은 부부 재산분할 — 5단계 채무 분담 판단 트랙 | 로앤가이드',
      description:
        '나눌 재산보다 빚이 더 많은데도 재산분할 청구가 가능한지, 채무 분담은 어떻게 정해지는지 막막하다면 채무 분담 5가지 판단 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼을 앞두고 부부의 재산을 따져보니 모아둔 자산보다 함께 진 빚이 훨씬 많았습니다. 한쪽이 사업이나 생활을 위해 떠안은 대출도 있고, 공동으로 쓴 돈도 섞여 있어요. 나눌 적극재산이 없고 오히려 빚만 남은 상황에서 재산분할이라는 게 의미가 있는지, 청구하면 오히려 제가 빚을 더 나눠 갚게 되는 건 아닌지 막막합니다." 민법 제839조의2·제843조는 재산분할에서 적극재산뿐 아니라 소극재산(채무)까지 함께 청산하도록 하는 영역입니다. 대법원 2010므4071(대법원, 2013.06.20)은 소극재산의 총액이 적극재산의 총액을 초과해 재산분할을 한 결과가 결국 채무 분담을 정하는 것이 되는 경우에도, 채무의 성질·채권자와의 관계·물적 담보의 존부 등 일체의 사정을 참작해 분담이 적합하다고 인정되면 분담 방법을 정해 재산분할 청구를 받아들일 수 있다는 취지를 판시한 사례입니다. 당사자라면 ① 적극·소극재산 정리 ② 순재산 산정 ③ 채무 성질 구분 ④ 분담 적합성 검토 ⑤ 분할·정산 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 채무 초과 재산분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 재산정리·순재산산정·채무구분·적합성검토·분할 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 적극·소극재산 정리</strong> — 부부 각자의 적극재산과 채무 목록 작성.</li>\n<li><strong>② 순재산 산정</strong> — 적극재산에서 소극재산을 공제해 순재산 상태 파악.</li>\n<li><strong>③ 채무 성질 구분</strong> — 공동생활·공동재산 형성 채무인지 일방 개인 채무인지 구분.</li>\n<li><strong>④ 분담 적합성 검토</strong> — 채무 성질·채권자 관계·담보 유무 등 사정을 참작한 분담 적합성 검토.</li>\n<li><strong>⑤ 분할·정산</strong> — 분담 방법을 정한 재산분할 청구·정산 진행.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 소극재산이 적극재산을 초과해 결과적으로 채무 분담을 정하게 되는 경우라도, 일체의 사정을 참작해 분담이 적합하다고 인정되면 분담 방법을 정해 재산분할 청구를 받아들일 수 있는 영역입니다. 채무가 공동의 것인지, 어떤 성질인지가 분담 판단의 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 확보·재산 산정·채무 분류·청구·심리 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 적극·소극재산 자료 확보 (즉시)</strong> — 부동산·예금·대출·보증 등 전체 자료 수집.</li>\n<li><strong>2단계 — 순재산·채무 목록 정리 (1~2주)</strong> — 적극재산에서 채무를 공제한 상태 정리.</li>\n<li><strong>3단계 — 채무 성질 분류</strong> — 공동 형성·생활 채무와 일방 개인 채무 구분.</li>\n<li><strong>4단계 — 가정법원 재산분할 청구 (이혼과 병합 또는 별도)</strong> — 채무 분담 방법 주장.</li>\n<li><strong>5단계 — 분담 적합성 심리·심판 (수개월)</strong> — 일체 사정 참작해 분담 방법 결정.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">채무 초과 부부 재산분할 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·적극재산·채무 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>부동산 등기부등본·시세 자료</strong></li>\n<li><strong>예금·금융 자산 내역</strong></li>\n<li><strong>대출 약정서·잔액 증명 (채무 내역)</strong></li>\n<li><strong>보증·담보 관련 자료 (물적 담보 존부)</strong></li>\n<li><strong>채무 발생 경위·용도 입증 자료 (공동·개인 구분)</strong></li>\n<li><strong>소득·기여 입증 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 빚이 더 많아도 재산분할 청구가 당연히 배척되는 것은 아니며, 채무 분담 방법을 정해 받아들여질 수 있는 영역입니다. 다만 채무가 공동생활·공동재산 형성을 위한 것인지, 일방의 개인 채무인지를 자료로 구분해두는 것이 분담 범위 판단에 중요합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>채무의 공동성</strong> — 공동생활·공동재산 형성 채무인지 개인 채무인지.</li>\n<li><strong>분담 적합성</strong> — 채무 성질·채권자 관계·담보 유무를 참작한 분담 여부.</li>\n<li><strong>분담 비율</strong> — 각자 분담할 채무의 범위와 방법.</li>\n<li><strong>대외 변제 책임</strong> — 분담 결정과 채권자에 대한 변제 책임의 관계.</li>\n<li><strong>적극재산 청산</strong> — 남은 적극재산이 있을 때 분배 방법.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>관할 가정법원 민원실</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 소극재산이 적극재산을 초과하는 경우 채무 분담형 재산분할 영역',
        summary:
          '대법원 2010므4071(대법원, 2013.06.20 선고) 영역에서 법원은 소극재산의 총액이 적극재산의 총액을 초과하여 재산분할을 한 결과가 결국 채무의 분담을 정하는 것이 되는 경우에도, 법원이 채무의 성질·채권자와의 관계·물적 담보의 존부 등 일체의 사정을 참작하여 분담하게 하는 것이 적합하다고 인정되면 구체적인 분담의 방법 등을 정하여 재산분할 청구를 받아들일 수 있다는 취지로 판시했습니다. 빚이 더 많은 부부의 재산분할을 다투는 사안에서 이 법리를 검토해볼 수 있습니다.',
        takeaway:
          '순재산 마이너스 + 채무 성질·담보 사정 + 분담 적합성 결합 시 채무 분담형 재산분할 검토 영역 — 적극·소극재산 자료 확보 후 채무 성질을 구분해 변호인과 분담 방법을 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '나눌 재산보다 빚이 많으면 재산분할 청구를 못 하나요?',
        answer:
          '<strong>소극재산이 적극재산을 초과해도 채무 분담형 재산분할 청구를 검토할 수 있는 영역입니다.</strong> 청구가 당연히 배척되는 것은 아닙니다.',
      },
      {
        question: '재산분할을 하면 제가 빚을 더 떠안게 되나요?',
        answer:
          '<strong>채무 분담은 채무 성질·채권자 관계·담보 유무 등 일체의 사정을 참작해 분담이 적합한 경우에 정해지는 영역입니다.</strong> 무조건 절반으로 나뉘는 것은 아닙니다.',
      },
      {
        question: '한쪽이 혼자 진 빚도 나눠야 하나요?',
        answer:
          '<strong>공동생활·공동재산 형성을 위한 채무인지 일방의 개인 채무인지에 따라 분담 여부가 달라지는 영역입니다.</strong> 채무 발생 경위·용도가 중요합니다.',
      },
      {
        question: '분담이 정해지면 채권자에게도 그대로 적용되나요?',
        answer:
          '<strong>부부 사이의 분담 결정과 채권자에 대한 대외 변제 책임은 구분해 살펴야 하는 영역입니다.</strong> 대외 관계는 별도로 검토하는 것이 좋습니다.',
      },
      {
        question: '빚만 있는데도 청구할 실익이 있나요?',
        answer:
          '<strong>채무 분담 방법을 명확히 정해두면 이후 부담 관계 정리에 도움이 될 수 있는 영역입니다.</strong> 사안의 채무 구조에 따라 실익을 함께 검토하는 것이 좋습니다.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '채무 분할 기준', href: '/guide/divorce/divorce-debt-division-standard-criteria' },
      { label: '배우자 채무 단독 책임', href: '/guide/divorce/divorce-spouse-debt-sole-responsibility' },
      { label: '부부 공동채무 회생', href: '/guide/divorce/divorce-couple-joint-debt-rehabilitation' },
      { label: '재산분할 종합 정리', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '재산분할 비율 핵심 요소', href: '/guide/divorce/property-division-ratio-key-factors' },
    ],
  },

  // ─── 5 inheritance-landlord-status-deposit-return-coheir-indivisible-debt-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-landlord-status-deposit-return-coheir-indivisible-debt-track',
    keyword: '상속 임대인 지위 승계 보증금반환 불가분채무 구상',
    questionKeyword: '부모님이 임대하던 건물을 상속받았는데 세입자 보증금 반환 책임을 공동상속인끼리 어떻게 나누나요?',
    ctaKeyword: '상속 임대인 지위 보증금반환 구상 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '상속 임대인 보증금반환 — 5단계 불가분채무 구상 트랙 | 로앤가이드',
      description:
        '임대 건물을 상속받았는데 세입자 보증금 반환 책임을 공동상속인끼리 어떻게 나누는지, 한 명이 다 갚으면 구상은 어떻게 하는지 막막하다면 불가분채무 구상 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"부모님이 세를 놓던 상가 건물을 형제들과 함께 상속받았습니다. 그런데 세입자가 계약이 끝나면서 보증금 반환을 요구하는데, 상속인이 여럿이다 보니 누가 얼마를 책임져야 하는지 막막합니다. 세입자는 저 한 사람에게 전액을 달라고 하고, 형제들은 \'각자 상속분만큼만 책임지면 되는 것 아니냐\'고 합니다. 만약 제가 먼저 다 갚으면 나머지 형제들에게 다시 돌려받을 수 있는지 모르겠어요." 상가건물 임대차보호법 제3조 제2항은 임차건물의 양수인이 임대인 지위를 승계하도록, 민법 제1007조는 공동상속인이 각자의 상속분에 응하여 피상속인의 권리·의무를 승계하도록 규정하는 영역입니다. 대법원 2023다318857(대법원, 2024.08.01)은 상속으로 임차건물 소유권을 취득한 자도 임대인 지위를 승계하고, 공동승계한 임차보증금반환채무는 성질상 불가분채무에 해당하며, 1인이 변제 등으로 공동면책을 얻으면 다른 공동상속인을 상대로 법정상속분에 따라 구상할 수 있다는 취지를 판시한 사례입니다. 당사자라면 ① 승계 관계 확인 ② 채무 성질 정리 ③ 변제·면책 점검 ④ 구상 범위 산정 ⑤ 구상 청구 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 상속 임대인 보증금반환 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 승계확인·성질정리·면책점검·구상산정·청구 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 승계 관계 확인</strong> — 상속으로 임대인 지위를 공동승계했는지 확인.</li>\n<li><strong>② 채무 성질 정리</strong> — 임차보증금반환채무가 불가분채무로 평가되는지 정리.</li>\n<li><strong>③ 변제·면책 점검</strong> — 누가 보증금을 변제해 공동면책을 얻었는지 점검.</li>\n<li><strong>④ 구상 범위 산정</strong> — 법정상속분에 따른 구상 범위 산정.</li>\n<li><strong>⑤ 구상 청구</strong> — 다른 공동상속인을 상대로 구상 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공동상속인이 임대인 지위를 함께 승계한 경우 임차보증금반환채무는 성질상 불가분채무로 평가되어, 세입자는 상속인 중 1인에게 전부의 이행을 청구할 수 있는 영역입니다. 1인이 변제로 공동면책을 얻으면 다른 공동상속인을 상대로 법정상속분에 따라 구상하는 것을 검토할 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 임차인 대응·구상 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 승계 확인·채무 정리·변제·구상 산정·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 상속·임대차 관계 확인 (즉시)</strong> — 상속등기·임대차계약·보증금액 확인.</li>\n<li><strong>2단계 — 보증금반환채무 정리 (1~2주)</strong> — 계약 종료·반환 요구 시점과 금액 정리.</li>\n<li><strong>3단계 — 임차인에 대한 변제·정산</strong> — 보증금 반환으로 공동면책 발생.</li>\n<li><strong>4단계 — 법정상속분에 따른 구상 범위 산정</strong> — 각 공동상속인 부담부분 계산.</li>\n<li><strong>5단계 — 다른 공동상속인 상대 구상 청구 (협의 또는 소송)</strong>.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 상속 빚이 더 많은지, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">상속 임대인 보증금반환 구상 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 상속·임대차·변제 갈래입니다.</strong></p>\n<ul>\n<li><strong>피상속인 기본증명서·가족관계증명서</strong></li>\n<li><strong>상속인 확인 자료 (공동상속인·법정상속분)</strong></li>\n<li><strong>상속 부동산 등기부등본 (소유권 승계 확인)</strong></li>\n<li><strong>임대차계약서 (보증금액·계약기간)</strong></li>\n<li><strong>보증금 반환 요구·변제 내역 (이체·영수 자료)</strong></li>\n<li><strong>공동면책 입증 자료 (전액 변제 증빙)</strong></li>\n<li><strong>구상금 산정 자료 (법정상속분 기준 계산)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임차보증금반환채무는 불가분채무로 평가되어 세입자가 상속인 1인에게 전액을 청구할 수 있는 영역입니다. 따라서 전액을 변제했다면 변제 사실과 금액을 명확히 입증할 수 있는 자료를 남겨두어야 이후 다른 공동상속인에게 법정상속분에 따라 구상하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>채무 성질</strong> — 보증금반환채무가 불가분채무인지 분할채무인지.</li>\n<li><strong>전액 청구</strong> — 세입자가 상속인 1인에게 전부 청구할 수 있는지.</li>\n<li><strong>공동면책</strong> — 변제로 다른 상속인까지 면책되는 범위.</li>\n<li><strong>구상 기준</strong> — 구상이 법정상속분에 따르는지.</li>\n<li><strong>분할 협의와의 관계</strong> — 상속재산분할 협의가 구상에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>가정법원·민사법원 민원실</strong></li>\n<li><strong>관할 행정복지센터 (상속 관련 증명 발급)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공동상속인의 임대인 지위 승계와 보증금반환 불가분채무·구상 영역',
        summary:
          '대법원 2023다318857(대법원, 2024.08.01 선고) 영역에서 법원은 상속에 따라 임차건물 소유권을 취득한 자도 상가건물 임대차보호법 제3조 제2항의 양수인으로서 임대인 지위를 승계하고, 임대인 지위를 공동승계한 공동임대인들의 임차보증금반환채무는 성질상 불가분채무에 해당하며, 불가분채무자가 변제 등으로 공동면책을 얻은 때에는 다른 공동상속인을 상대로 법정상속분에 따라 구상할 수 있다는 취지로 판시했습니다. 상속받은 임대건물의 보증금반환 책임 분담을 다투는 사안에서 이 법리를 검토해볼 수 있습니다.',
        takeaway:
          '상속 임대인 지위 승계 + 보증금반환 불가분채무 + 변제 후 구상 결합 시 법정상속분 구상 검토 영역 — 변제 입증 자료 확보 후 공동상속인 상대 구상 가능성을 변호인과 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '임대 건물을 상속받으면 세입자 보증금 책임도 떠안나요?',
        answer:
          '<strong>상속으로 임차건물 소유권을 취득하면 임대인 지위를 승계하는 것으로 평가되는 영역입니다.</strong> 보증금반환 의무도 함께 승계됩니다.',
      },
      {
        question: '세입자가 저에게만 보증금 전액을 달라고 할 수 있나요?',
        answer:
          '<strong>보증금반환채무가 불가분채무로 평가되면 세입자는 상속인 1인에게 전부의 이행을 청구할 수 있는 영역입니다.</strong> 상속분만큼만 나눠 청구되는 것이 아닙니다.',
      },
      {
        question: '제가 먼저 다 갚으면 형제들에게 돌려받을 수 있나요?',
        answer:
          '<strong>변제로 공동면책을 얻으면 다른 공동상속인을 상대로 법정상속분에 따라 구상하는 것을 검토할 수 있는 영역입니다.</strong> 변제 사실 입증이 중요합니다.',
      },
      {
        question: '구상은 어떤 기준으로 나누나요?',
        answer:
          '<strong>구상은 각 공동상속인의 법정상속분에 따른 부담부분을 기준으로 검토되는 영역입니다.</strong> 상속분 산정 자료를 정리해두는 것이 좋습니다.',
      },
      {
        question: '상속재산 분할 협의를 따로 했으면 구상에 영향이 있나요?',
        answer:
          '<strong>분할 협의 내용과 대외적 불가분채무·구상의 관계는 함께 살펴야 하는 영역입니다.</strong> 협의 내용에 따라 내부 정산이 달라질 수 있어 함께 검토하는 것이 좋습니다.',
      },
    ],
    cta: { text: '상속 빚이 더 많은지, AI로 먼저 점검하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '망인 임대 보증금 세입자 반환', href: '/guide/inheritance/inheritance-deceased-rental-deposit-tenant-return-track' },
      { label: '피상속인 채무 우선순위', href: '/guide/inheritance/inheritance-deceased-debt-priority-order' },
      { label: '상속 순위와 법정상속분', href: '/guide/inheritance/inheritance-order-legal-share' },
      { label: '공동상속 부동산 분쟁', href: '/guide/inheritance/inheritance-real-estate-co-owners-dispute' },
      { label: '상속 분쟁 어디부터', href: '/guide/inheritance/inheritance-dispute-where-to-start' },
    ],
  },

  // ─── 6 traffic-accident-mandatory-insurance-coverage-limit-excess-claim-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-mandatory-insurance-coverage-limit-excess-claim-track',
    keyword: '자배법 의무보험 책임보험금 한도 초과 손해 청구',
    questionKeyword: '교통사고 피해가 큰데 가해자가 의무보험만 들어둔 것 같습니다. 책임보험금 한도를 넘는 손해는 어떻게 청구하나요?',
    ctaKeyword: '책임보험금 한도 초과 손해 청구 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '책임보험금 한도 초과 손해 — 5단계 추가 청구 판단 트랙 | 로앤가이드',
      description:
        '교통사고 피해가 큰데 가해자가 의무보험만 든 경우 책임보험금 한도(사망 1억5천만 원 등)를 넘는 손해를 어떻게 청구하는지 막막하다면 한도 초과 청구 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"교통사고로 큰 부상을 입었는데, 알고 보니 가해 차량은 의무보험(책임보험)만 가입돼 있고 종합보험은 없는 상태였습니다. 치료비와 일을 못 한 손해를 합치면 보험금만으로는 도저히 감당이 안 되는데, 책임보험금에 한도가 있다는 말을 듣고 더 막막해졌습니다. 한도를 넘는 손해는 영영 받을 수 없는 건지, 가해자 본인에게 따로 청구해야 하는 건지 모르겠어요." 자동차손해배상 보장법 제5조 제1항은 자동차보유자의 책임보험 가입 의무를, 같은 법 시행령 제3조 제1항은 사망 1억 5,000만 원 범위 등 책임보험금 한도를 정하는 영역입니다. 대법원 2024다238217(대법원, 2025.03.13)은 자배법 제5조 제1항이 피해자 보호와 사회적 손실 방지를 위해 의무보험 가입을 강제하면서 책임보험금액을 대통령령으로 정하도록 위임한 취지와 그 한도 기준을 설명한 사례입니다. 피해자 측이라면 ① 손해액 정리 ② 보험 가입 확인 ③ 한도 확인 ④ 초과 손해 산정 ⑤ 추가 청구 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 책임보험금 한도 초과 손해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 손해정리·가입확인·한도확인·초과산정·추가청구 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 손해액 정리</strong> — 치료비·일실수입·위자료 등 전체 손해 항목 정리.</li>\n<li><strong>② 보험 가입 확인</strong> — 가해 차량의 의무보험·종합보험 가입 여부 확인.</li>\n<li><strong>③ 한도 확인</strong> — 책임보험금 한도(사망·부상·후유장해별 시행령 기준) 확인.</li>\n<li><strong>④ 초과 손해 산정</strong> — 책임보험금 한도를 넘는 손해 부분 산정.</li>\n<li><strong>⑤ 추가 청구</strong> — 한도 초과분에 대한 가해자 직접 청구 등 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 책임보험금은 자배법 시행령이 정한 한도(예: 사망 1억 5,000만 원 범위) 안에서 지급되는 영역이므로, 손해가 그 한도를 넘는 경우 초과 손해는 별도로 산정해 청구를 검토할 수 있습니다. 가해 차량의 종합보험 가입 여부에 따라 청구 경로가 달라집니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보험사·법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 손해 산정·가입 확인·한도 적용·청구·소송 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 손해 자료·진료 기록 확보 (즉시)</strong> — 치료비·진단서·소득 자료 정리.</li>\n<li><strong>2단계 — 가해 차량 보험 가입 확인 (수일)</strong> — 의무보험·종합보험 여부와 보험사 확인.</li>\n<li><strong>3단계 — 책임보험금 한도 적용·산정</strong> — 시행령 한도 내 지급액과 초과 손해 구분.</li>\n<li><strong>4단계 — 초과분 가해자 직접 청구 또는 합의</strong> — 한도 초과 손해 청구.</li>\n<li><strong>5단계 — 분쟁·자력 부족 시 소송·정부 지원 검토</strong> — 손해배상 소송 등 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 후유증 추가 청구 가능한지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">책임보험금 한도 초과 손해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고·손해·보험 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 교통사고 사실 확인원</strong></li>\n<li><strong>진료비 영수증·세부내역서</strong></li>\n<li><strong>진단서·후유장해 진단 자료</strong></li>\n<li><strong>소득 자료 (일실수입 산정)</strong></li>\n<li><strong>가해 차량 보험 가입 정보 (의무보험·종합보험)</strong></li>\n<li><strong>책임보험금 지급 내역 (한도 적용 확인)</strong></li>\n<li><strong>과실비율 관련 자료 (블랙박스·현장 사진)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 책임보험금은 시행령이 정한 한도 안에서만 지급되므로, 손해가 한도를 넘으면 초과 부분은 가해자(또는 종합보험)에게 별도로 청구하는 것을 검토해야 하는 영역입니다. 가해 차량이 종합보험에 가입돼 있는지부터 확인하면 청구 경로를 정하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>책임보험금 한도</strong> — 사망·부상·후유장해별 시행령 한도 적용.</li>\n<li><strong>초과 손해 범위</strong> — 한도를 넘는 손해의 산정과 청구 경로.</li>\n<li><strong>종합보험 유무</strong> — 가해 차량 종합보험 가입 여부에 따른 청구 방법.</li>\n<li><strong>가해자 자력</strong> — 한도 초과분에 대한 가해자의 변제 자력.</li>\n<li><strong>과실비율</strong> — 피해자 과실이 손해액 산정에 반영되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>손해보험협회 분쟁조정위원회 02-3702-8600</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>금융감독원 1332 (보험 민원)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 자배법 의무보험 책임보험금 한도의 취지·기준 영역',
        summary:
          '대법원 2024다238217(대법원, 2025.03.13 선고) 영역에서 법원은 자동차손해배상 보장법 제5조 제1항이 피해자 보호와 사회적 손실 방지 등을 위해 자동차보유자에게 의무보험 가입을 강제하면서, 그 보장 책임보험금액을 대통령령으로 정하도록 위임하였고, 같은 법 시행령 제3조 제1항이 사망의 경우 1억 5,000만 원의 범위에서 피해자에게 발생한 손해액(다만 2,000만 원 미만이면 2,000만 원) 등으로 책임보험금 한도를 정하고 있다는 취지로 판시했습니다. 책임보험금 한도와 초과 손해 청구를 다투는 사안에서 이 법리를 검토해볼 수 있습니다.',
        takeaway:
          '의무보험 책임보험금 한도 + 손해액 초과 + 추가 청구 경로 결합 시 한도 초과 손해 청구 검토 영역 — 손해·보험 가입 자료 확보 후 종합보험 유무를 확인하고 변호인과 청구 경로를 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '가해자가 책임보험만 들었으면 손해를 다 못 받나요?',
        answer:
          '<strong>책임보험금은 시행령 한도 안에서 지급되므로 한도를 넘는 손해는 별도로 청구를 검토해야 하는 영역입니다.</strong> 종합보험 유무 확인이 우선입니다.',
      },
      {
        question: '책임보험금 한도는 얼마인가요?',
        answer:
          '<strong>자배법 시행령은 사망의 경우 1억 5,000만 원의 범위 등으로 책임보험금 한도를 정하는 영역입니다.</strong> 부상·후유장해는 등급별로 기준이 달라집니다.',
      },
      {
        question: '한도를 넘는 손해는 누구에게 청구하나요?',
        answer:
          '<strong>한도 초과분은 가해자 본인 또는 가해 차량 종합보험에 청구하는 것을 검토할 수 있는 영역입니다.</strong> 가해 차량의 종합보험 가입 여부에 따라 경로가 달라집니다.',
      },
      {
        question: '가해자가 돈이 없으면 초과분은 못 받나요?',
        answer:
          '<strong>가해자 자력이 부족하면 회수가 쉽지 않을 수 있어 정부 지원 제도 등을 함께 검토하는 영역입니다.</strong> 사안에 따라 가능한 경로를 확인하는 것이 좋습니다.',
      },
      {
        question: '내 과실이 있으면 청구액이 줄어드나요?',
        answer:
          '<strong>피해자 과실은 손해액 산정에 반영될 수 있는 영역입니다.</strong> 과실비율 다툼이 있으면 손해보험협회 분쟁조정을 검토할 수 있습니다.',
      },
    ],
    cta: { text: '후유증 추가 청구 가능한지 AI로 점검하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '무보험 차량 피해 정부보장', href: '/guide/traffic-accident/traffic-accident-uninsured-victim-government-fund' },
      { label: '교통사고 손해배상 계산', href: '/guide/traffic-accident/traffic-accident-compensation-calculation-guide' },
      { label: '교통사고 부상 보상', href: '/guide/traffic-accident/traffic-accident-injury-compensation' },
      { label: '후유장해 추가 청구', href: '/guide/traffic-accident/traffic-accident-aftereffect-additional-claim-settlement' },
      { label: '보험사 저가 합의 대응', href: '/guide/traffic-accident/insurance-lowball-settlement-response' },
    ],
  },
];
