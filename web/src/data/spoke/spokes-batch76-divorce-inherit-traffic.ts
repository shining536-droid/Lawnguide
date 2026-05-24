import { SpokePage } from '../spoke-pages';

// batch76 divorce + inheritance + traffic-accident — 6개 (2026-05-24)
//
// 고유 존재 이유:
// 1. divorce-late-life-homemaker-contribution-track — 황혼이혼 전업주부 가사노동 기여도. 30년 전업주부의 청산적·부양적 기여 인정 + 재산분할 트랙.
// 2. divorce-long-separation-marriage-breakdown-track — 5년 장기 별거 후 일방 이혼 청구. 사실상 파탄 + 재판상 이혼 사유 평가 트랙.
// 3. divorce-spouse-gambling-debt-property-track — 배우자 도박 채무의 재산분할·양육 반영. 일방 채무 귀속 + 분할 평가 트랙.
// 4. divorce-common-law-marriage-dissolution-track — 7년 사실혼 해소 재산분할. 혼인신고 없는 공동 형성 재산 청산 트랙.
// 5. inheritance-renunciation-next-rank-debt-track — 1순위 전원 상속포기 후 후순위 빚 승계. 후순위 연쇄 승계 차단 + 한정승인 병행 트랙.
// 6. traffic-accident-school-zone-child-12-negligence-track — 스쿨존 어린이 사고 12대 중과실. 교특법 형사 + 민식이법 가중 대응 트랙 (가해 혐의).

export const spokesBatch76DivorceInheritTraffic: SpokePage[] = [
  // ─── 1 divorce-late-life-homemaker-contribution-track ───
  {
    domain: 'divorce',
    slug: 'divorce-late-life-homemaker-contribution-track',
    keyword: '황혼이혼 전업주부 기여도 재산분할',
    questionKeyword: '30년 넘게 전업주부로 살아왔는데 황혼이혼을 결심했어요. 남편 명의로 된 집·예금에 대한 제 가사노동 기여도를 어떻게 인정받나요?',
    ctaKeyword: '황혼이혼 기여도 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '황혼이혼 전업주부 기여도 — 5단계 재산분할 다툼 | 로앤가이드',
      description:
        '30년 전업주부의 가사노동 기여도를 재산분할에서 인정받을 수 있을지 막막하다면 청산·부양 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"결혼 후 32년간 전업주부로 두 자녀를 키우고 시부모 봉양까지 도맡았습니다. 그동안 형성된 아파트(시가 약 6억원)·예금·연금은 모두 남편 명의로 돼 있어요. 황혼이혼을 결심했지만 \'네가 번 게 뭐가 있냐\'는 말에 위축돼 제 몫을 어디까지 주장할 수 있을지 막막합니다. 자녀들도 \'엄마가 평생 집안일만 했는데 절반은 받아야 한다\'며 응원하는 상황이에요." 민법 제839조의2는 재산분할 대상을 \'혼인 중 쌍방의 협력으로 형성한 재산\'으로 규정하고, 가사노동도 협력의 한 형태로 평가되는 영역입니다. 또한 재산분할청구권에는 혼인 중 형성 재산의 청산적 요소뿐 아니라 이혼 후 부양적 요소·위자료적 요소가 함께 고려될 수 있는 영역이며, 청구는 이혼 확정일로부터 2년 내가 원칙입니다. 장기 전업주부 + 단독 명의 재산 + 부양 필요 결합은 청산적 기여 + 부양적 분할 + 위자료 결합 트랙. 부부라면 ① 혼인 기간·기여 정리 ② 재산 목록·평가 ③ 기여도 입증 ④ 협의/재판 이혼 ⑤ 재산분할·연금 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 황혼이혼 전업주부 기여도 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 기여정리·평가·입증·이혼·분할 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 혼인 기간·기여 정리</strong> — 가사·육아·봉양·간접 경제 기여 정황.</li>\n<li><strong>② 재산 목록·평가</strong> — 부동산·예금·연금·퇴직금 시가 평가.</li>\n<li><strong>③ 기여도 입증</strong> — 장기 전업주부는 청산적 기여 평가 가능 영역.</li>\n<li><strong>④ 협의/재판 이혼</strong> — 가정법원 조정·재판이혼.</li>\n<li><strong>⑤ 재산분할 + 연금분할</strong> — 청산·부양 요소 + 국민연금 분할.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가사노동도 재산 형성의 협력으로 평가되는 영역. 혼인 기간이 길수록 전업주부의 기여 비율이 높게 검토되는 사례가 있고, 국민연금 분할은 혼인 기간 5년 이상이면 별도로 검토할 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 변호인·가정법원·연금공단 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 혼인·기여 자료 정리 (즉시)</strong> — 혼인 기간·가사·봉양 정황 정리.</li>\n<li><strong>2단계 — 재산 목록·평가 (1~2주)</strong> — 부동산·예금·연금·퇴직금 조회.</li>\n<li><strong>3단계 — 변호인 상담·협의이혼 시도 (1개월)</strong>.</li>\n<li><strong>4단계 — 협의 무산 시 재판이혼·재산분할 청구 (이혼 확정 2년 내)</strong>.</li>\n<li><strong>5단계 — 국민연금 분할 청구 (이혼 후 3년 내)</strong>.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">황혼이혼 전업주부 기여도 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 혼인·재산·기여 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>부동산 등기부등본·시가 평가 자료</strong></li>\n<li><strong>예금·증권·보험·연금 잔액 자료</strong></li>\n<li><strong>남편 퇴직금·퇴직연금 자료</strong></li>\n<li><strong>가사·육아·시부모 봉양 정황 (사진·일지·증인 진술)</strong></li>\n<li><strong>국민연금 가입·납입 이력 (분할연금 검토)</strong></li>\n<li><strong>본인 건강·생계 자료 (부양적 분할 검토)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 장기 전업주부는 가사노동만으로도 청산적 기여가 평가되는 사례가 있습니다. 연금분할은 재산분할과 별도 제도이니 혼인 기간 5년 이상 여부를 함께 확인해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기여도 비율</strong> — 장기 전업주부의 가사노동 기여 평가 정도.</li>\n<li><strong>특유재산</strong> — 혼인 전 재산·상속·증여분의 분할 제외 여부.</li>\n<li><strong>부양적 분할</strong> — 고령·생계 곤란 시 부양 요소 가산 검토.</li>\n<li><strong>연금분할</strong> — 국민연금 혼인 기간 분할 별도.</li>\n<li><strong>청구 기간</strong> — 이혼 확정일로부터 2년·연금분할 3년.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>국민연금공단 1355 (분할연금 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산분할청구권 요소 평가 영역',
        summary:
          '대법원 2022스613(대법원, 2022.07.28 선고) 영역에서 법원은 재산분할청구권에 혼인 중 형성 재산의 청산적 요소뿐 아니라 이혼 후 부양적·정신적 손해 배상 요소가 함께 고려될 수 있다고 본 사례 흐름이 있고, 장기 전업주부의 가사노동 기여를 다투는 황혼이혼 사안에도 동일한 평가 기준이 검토될 수 있는 영역입니다.',
        takeaway: '장기 전업주부 + 단독 명의 재산 + 부양 필요 결합 시 청산·부양 요소 분할 평가 영역 — 변호인 상담·재산분할 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '전업주부라 제가 번 돈이 없는데 재산분할을 받을 수 있나요?',
        answer:
          '<strong>가사노동도 재산 형성의 협력으로 평가되는 영역입니다.</strong> 장기 전업주부는 기여 비율이 높게 검토되는 사례가 있습니다.',
      },
      {
        question: '집·예금이 모두 남편 명의인데 분할 대상인가요?',
        answer:
          '<strong>명의와 무관하게 혼인 중 형성 재산이면 분할 대상이 될 수 있습니다.</strong> 시가 평가가 핵심.',
      },
      {
        question: '남편의 국민연금도 나눌 수 있나요?',
        answer:
          '<strong>혼인 기간 5년 이상이면 분할연금을 별도로 검토할 수 있습니다.</strong> 이혼 후 3년 내 청구.',
      },
      {
        question: '고령이라 앞으로 생계가 막막한데 더 받을 수 있나요?',
        answer:
          '<strong>부양적 요소가 분할에 가산되는 사례가 있습니다.</strong> 건강·생계 자료를 정리해두세요.',
      },
      {
        question: '재산분할은 언제까지 청구해야 하나요?',
        answer:
          '<strong>이혼이 확정된 날로부터 2년 내가 원칙입니다.</strong> 기간 경과 전 청구가 안전합니다.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 기준', href: '/guide/divorce/divorce-property-division-criteria' },
      { label: '위자료 산정', href: '/guide/divorce/divorce-alimony-calculation' },
      { label: '재판상 이혼 사유', href: '/guide/divorce/divorce-judicial-grounds' },
      { label: '혼전계약서 작성', href: '/guide/divorce/divorce-prenup-drafting' },
      { label: '협의이혼 절차', href: '/guide/divorce/divorce-mutual-consent-procedure' },
    ],
  },

  // ─── 2 divorce-long-separation-marriage-breakdown-track ───
  {
    domain: 'divorce',
    slug: 'divorce-long-separation-marriage-breakdown-track',
    keyword: '장기 별거 후 이혼 청구',
    questionKeyword: '5년 넘게 별거하며 사실상 부부생활이 끝났는데 배우자가 이혼에 응하지 않아요. 재판으로 이혼할 수 있나요?',
    ctaKeyword: '장기 별거 이혼 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '장기 별거 후 이혼 청구 — 5단계 재판 파탄 다툼 | 로앤가이드',
      description:
        '5년 넘게 별거해 혼인이 사실상 끝났는데 상대가 응하지 않아 막막하다면 재판상 이혼 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"성격 차이와 갈등으로 5년 넘게 따로 살아왔습니다. 그동안 연락도 거의 없고 경제적 공동생활도 끊겨 사실상 부부 관계는 끝난 상태예요. 그런데 배우자가 \'이혼만은 절대 못 해준다\'며 협의이혼에 응하지 않아 새 출발을 못 하고 있습니다. 별거 기간 제가 혼자 모은 재산과 별거 중 늘어난 빚을 어떻게 정리할지도 걱정입니다." 민법 제840조 제6호는 \'기타 혼인을 계속하기 어려운 중대한 사유\'를 재판상 이혼 사유로 규정하고, 장기 별거로 부부공동생활이 회복하기 어려운 정도로 파탄됐는지가 핵심 평가 사정인 영역입니다. 또한 재산분할로 금전 지급을 명하는 경우 그 채무의 이행기·적용 이율 등이 함께 정리될 수 있는 영역이며, 청구는 이혼 확정일로부터 2년 내가 원칙입니다. 장기 별거 + 공동생활 단절 + 상대 거부 결합은 재판상 이혼 + 파탄 입증 + 재산분할 결합 트랙. 부부라면 ① 별거·파탄 정리 ② 파탄 입증 ③ 조정 시도 ④ 재판이혼 청구 ⑤ 재산분할·위자료 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 장기 별거 후 이혼 청구 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 별거정리·입증·조정·재판·분할 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 별거·파탄 정리</strong> — 별거 시점·기간·연락 단절·공동생활 종료 정황.</li>\n<li><strong>② 파탄 입증</strong> — 회복 가능성 없음을 보여주는 객관 자료.</li>\n<li><strong>③ 가정법원 조정 시도</strong> — 협의 무산 시 조정 전치.</li>\n<li><strong>④ 재판이혼 청구</strong> — 민법 제840조 제6호 중대 사유.</li>\n<li><strong>⑤ 재산분할 + 위자료</strong> — 별거 중 재산·채무 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 장기 별거는 혼인 파탄의 유력한 정황으로 평가되는 사례가 있는 영역입니다. 다만 파탄의 주된 책임이 청구인에게 있으면 인정이 제한될 수 있어 별거 경위·책임 정도를 함께 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 변호인·가정법원 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 별거·파탄 자료 정리 (즉시)</strong> — 별거 시점·연락 단절·생활 분리 정황.</li>\n<li><strong>2단계 — 재산·채무 목록 정리 (1~2주)</strong> — 별거 중 형성·증가분 구분.</li>\n<li><strong>3단계 — 가정법원 조정 신청 (협의 무산 시)</strong>.</li>\n<li><strong>4단계 — 조정 불성립 시 재판이혼 (3~6개월)</strong>.</li>\n<li><strong>5단계 — 재산분할·위자료 청구 (이혼 확정 2년 내)</strong>.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">장기 별거 후 이혼 청구 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 별거·재산·파탄 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>별거 시점·기간 입증 자료 (전입·임대차·우편물)</strong></li>\n<li><strong>연락 단절·공동생활 종료 정황 (메시지·통화 기록)</strong></li>\n<li><strong>별거 중 형성·증가 재산 자료</strong></li>\n<li><strong>별거 중 발생 채무 자료</strong></li>\n<li><strong>증인 진술서 (별거 사실·경위)</strong></li>\n<li><strong>본인·배우자 재산 자료 (부동산·금융)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 별거 시점·기간을 객관 자료로 특정하는 것이 파탄 입증의 출발점입니다. 별거 후 각자 형성한 재산은 분할 대상에서 제외되는 사례가 있으니 시점별 재산 변동을 정리해두세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>파탄 인정 정도</strong> — 별거 기간·회복 가능성 평가.</li>\n<li><strong>유책 여부</strong> — 파탄 주된 책임이 청구인이면 인정 제한 가능.</li>\n<li><strong>분할 기준 시점</strong> — 별거 시점 vs 이혼 시점 재산.</li>\n<li><strong>별거 중 채무</strong> — 일방 단독 채무의 분할 귀속.</li>\n<li><strong>위자료</strong> — 파탄 책임 정도에 따른 산정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산분할 금전 지급 채무 평가 영역',
        summary:
          '대법원 2001므725(대법원, 2001.09.25 선고) 영역에서 법원은 재산분할로 금전 지급을 명하는 경우 그 채무의 이행기·적용 이율 등이 함께 정리될 수 있다고 본 사례 흐름이 있고, 장기 별거 후 재판상 이혼에서 재산분할 금전 지급을 다투는 사안에도 동일한 평가 기준이 검토될 수 있는 영역입니다.',
        takeaway: '장기 별거 + 공동생활 단절 + 상대 거부 결합 시 재판상 이혼·재산분할 평가 영역 — 변호인 상담·재판이혼 검토 권장.',
      },
    ],
    faq: [
      {
        question: '상대가 이혼에 응하지 않아도 이혼할 수 있나요?',
        answer:
          '<strong>혼인이 회복하기 어려울 정도로 파탄됐다면 재판상 이혼을 검토할 수 있습니다.</strong> 별거 정황 입증이 핵심.',
      },
      {
        question: '별거 몇 년이면 파탄으로 인정되나요?',
        answer:
          '<strong>기간만으로 일률 결정되지 않습니다.</strong> 연락 단절·생활 분리 등 회복 가능성 정황을 함께 봅니다.',
      },
      {
        question: '제가 먼저 집을 나왔는데 불리한가요?',
        answer:
          '<strong>파탄 주된 책임이 청구인이면 인정이 제한될 수 있는 영역입니다.</strong> 별거 경위를 정리해두세요.',
      },
      {
        question: '별거 중 제가 모은 돈도 나눠야 하나요?',
        answer:
          '<strong>별거 후 각자 형성한 재산은 분할에서 제외되는 사례가 있습니다.</strong> 시점별 재산 변동 정리가 중요.',
      },
      {
        question: '재판이혼은 얼마나 걸리나요?',
        answer:
          '<strong>조정·재판 진행에 따라 통상 수개월이 소요되는 영역입니다.</strong> 사안에 따라 다릅니다.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 기준', href: '/guide/divorce/divorce-property-division-criteria' },
      { label: '위자료 산정', href: '/guide/divorce/divorce-alimony-calculation' },
      { label: '재판상 이혼 사유', href: '/guide/divorce/divorce-judicial-grounds' },
      { label: '혼전계약서 작성', href: '/guide/divorce/divorce-prenup-drafting' },
      { label: '협의이혼 절차', href: '/guide/divorce/divorce-mutual-consent-procedure' },
    ],
  },

  // ─── 3 divorce-spouse-gambling-debt-property-track ───
  {
    domain: 'divorce',
    slug: 'divorce-spouse-gambling-debt-property-track',
    keyword: '배우자 도박 빚 이혼 재산분할',
    questionKeyword: '배우자의 도박으로 생긴 빚이 가정을 위협해요. 이혼하면 그 빚이 제 재산분할이나 양육에 어떻게 반영되나요?',
    ctaKeyword: '도박 빚 이혼 분할 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '배우자 도박 빚 이혼 — 5단계 재산분할·양육 다툼 | 로앤가이드',
      description:
        '배우자의 도박 채무가 가정을 위협해 이혼을 검토한다면 채무 귀속·재산분할·양육 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배우자가 수년간 도박에 빠져 가정 자금을 탕진하고 카드론·사채까지 끌어다 쓰면서 가정이 무너지고 있습니다. 빚 독촉이 집으로 오고 아이 교육비까지 위협받는 상황이라 이혼을 결심했어요. 그런데 \'부부니까 빚도 절반씩 책임진다\'는 말을 듣고, 제가 그 도박 빚을 떠안게 되는 건 아닌지, 재산분할과 아이 양육에 어떻게 반영되는지 막막합니다." 민법 제839조의2는 재산분할 대상을 \'혼인 중 쌍방의 협력으로 형성한 재산\'으로 규정하고, 일방이 가정과 무관하게 진 도박 채무는 분할 대상에서 달리 평가될 수 있는 영역입니다. 또한 민법 제840조는 \'기타 혼인을 계속하기 어려운 중대한 사유\'를 재판상 이혼 사유로 규정하며 도박·낭비로 인한 가정 파탄도 평가 사정이 될 수 있는 영역입니다. 도박 채무 + 가정 자금 탕진 + 양육 위협 결합은 채무 귀속 + 재산분할 + 양육권·양육비 결합 트랙. 부부라면 ① 도박·채무 정리 ② 채무 귀속 ③ 재산분할 ④ 양육권·양육비 ⑤ 협의/재판 이혼 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 배우자 도박 빚 이혼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 채무정리·귀속·분할·양육·이혼 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 도박·채무 정리</strong> — 도박 정황·채무 발생 시점·사용처 자료.</li>\n<li><strong>② 채무 귀속 평가</strong> — 가정과 무관한 일방 도박 채무 구분.</li>\n<li><strong>③ 재산분할</strong> — 남은 재산에서 채무 성격 반영.</li>\n<li><strong>④ 양육권·양육비</strong> — 자녀 보호·안정 환경 평가.</li>\n<li><strong>⑤ 협의/재판 이혼</strong> — 도박·낭비 파탄 사유 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 일방이 가정과 무관하게 진 도박 채무는 부부 공동채무와 달리 평가될 수 있는 영역입니다. 채무 발생 시점·사용처를 입증할수록 본인 부담을 줄이는 방향으로 검토할 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 변호인·가정법원 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 도박·채무 자료 보존 (즉시)</strong> — 대출·사채·도박 정황 자료.</li>\n<li><strong>2단계 — 채무 발생 시점·사용처 정리 (1~2주)</strong>.</li>\n<li><strong>3단계 — 변호인 상담·협의이혼 시도 (1개월)</strong>.</li>\n<li><strong>4단계 — 협의 무산 시 재판이혼·재산분할 청구</strong>.</li>\n<li><strong>5단계 — 양육권·양육비 확정 (양육비 산정기준표 참조)</strong>.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">배우자 도박 빚 이혼 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 도박·채무·재산 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>배우자 대출·카드론·사채 채무 자료</strong></li>\n<li><strong>도박 정황 자료 (계좌 이체·도박장 출입·메시지)</strong></li>\n<li><strong>채무 발생 시점·사용처 입증 자료</strong></li>\n<li><strong>본인·배우자 재산 자료 (부동산·금융)</strong></li>\n<li><strong>자녀 양육 환경·교육비 자료</strong></li>\n<li><strong>빚 독촉·가정 위협 정황 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 채무가 도박 등 일방 목적으로 발생했음을 입증할수록 본인 분담을 줄이는 방향으로 검토할 수 있습니다. 채무 발생 시점·사용처 자료가 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>채무 성격</strong> — 가정 공동채무 vs 일방 도박 채무 구분.</li>\n<li><strong>분할 반영</strong> — 남은 재산에서 채무 성격 평가.</li>\n<li><strong>양육권</strong> — 자녀 안정·보호 환경 우선.</li>\n<li><strong>양육비</strong> — 산정기준표·상대 소득 평가.</li>\n<li><strong>이혼 사유</strong> — 도박·낭비로 인한 파탄 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>한국도박문제예방치유원 1336</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비·재산분할 가사비송 평가 영역',
        summary:
          '대법원 2012므1656(대법원, 2014.09.04 선고) 영역에서 법원은 이혼 당사자 사이 양육비·재산분할 청구가 가사비송으로서 가집행·즉시항고 대상 여부가 정리될 수 있다고 본 사례 흐름이 있고, 도박 채무가 얽힌 이혼에서 양육비·재산분할 절차 진행을 다투는 사안에도 동일한 평가 기준이 검토될 수 있는 영역입니다.',
        takeaway: '도박 채무 + 가정 자금 탕진 + 양육 위협 결합 시 채무 귀속·재산분할·양육비 평가 영역 — 변호인 상담·이혼 검토 권장.',
      },
    ],
    faq: [
      {
        question: '배우자의 도박 빚을 저도 절반 갚아야 하나요?',
        answer:
          '<strong>가정과 무관한 일방 도박 채무는 부부 공동채무와 달리 평가될 수 있는 영역입니다.</strong> 채무 사용처 입증이 핵심.',
      },
      {
        question: '도박을 입증하기가 어려운데 어떻게 하나요?',
        answer:
          '<strong>계좌 이체·도박장 출입·메시지 등 정황 자료를 모으는 것이 출발점입니다.</strong> 발생 시점도 함께 정리하세요.',
      },
      {
        question: '도박으로 재산을 다 날렸는데 분할받을 게 있나요?',
        answer:
          '<strong>남은 재산·향후 회복 가능성도 평가 사정이 될 수 있습니다.</strong> 변호인 상담 후 결정.',
      },
      {
        question: '아이 양육권은 제가 가질 수 있나요?',
        answer:
          '<strong>자녀의 안정·보호 환경이 우선 평가됩니다.</strong> 도박·가정 위협 정황은 참고 사정이 될 수 있습니다.',
      },
      {
        question: '도박은 재판이혼 사유가 되나요?',
        answer:
          '<strong>도박·낭비로 인한 가정 파탄은 중대 사유로 평가될 수 있는 영역입니다.</strong> 파탄 정황을 정리해두세요.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 기준', href: '/guide/divorce/divorce-property-division-criteria' },
      { label: '위자료 산정', href: '/guide/divorce/divorce-alimony-calculation' },
      { label: '재판상 이혼 사유', href: '/guide/divorce/divorce-judicial-grounds' },
      { label: '혼전계약서 작성', href: '/guide/divorce/divorce-prenup-drafting' },
      { label: '협의이혼 절차', href: '/guide/divorce/divorce-mutual-consent-procedure' },
    ],
  },

  // ─── 4 divorce-common-law-marriage-dissolution-track ───
  {
    domain: 'divorce',
    slug: 'divorce-common-law-marriage-dissolution-track',
    keyword: '사실혼 해소 재산분할',
    questionKeyword: '혼인신고 없이 7년간 사실혼으로 함께 모은 재산이 있어요. 관계가 끝나면 저도 재산분할을 받을 수 있나요?',
    ctaKeyword: '사실혼 해소 분할 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '사실혼 해소 재산분할 — 5단계 입증·청산 다툼 | 로앤가이드',
      description:
        '혼인신고 없이 7년 사실혼으로 모은 재산을 관계 종료 후 분할받을 수 있을지 막막하다면 입증·청산 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"혼인신고는 하지 않았지만 7년간 한집에서 부부처럼 생활하며 함께 돈을 모아 전셋집과 예금을 마련했습니다. 양가 인사·결혼식까지 올렸고 주변에서도 부부로 알았어요. 그런데 상대가 일방적으로 관계를 끝내겠다고 하면서 \'법적 부부도 아닌데 무슨 재산분할이냐\'고 합니다. 7년 동안 제가 기여한 몫을 받을 수 있을지 막막합니다." 사실혼은 혼인신고만 없을 뿐 부부공동생활의 실체가 있는 관계로, 사실혼이 부당하게 해소되면 법률혼에 준해 재산분할 청구가 가능하다는 법리가 형성돼 있는 영역입니다. 다만 사실혼의 성립·존속·기여를 입증해야 하고, 상대 일방 사망 시에는 상속이 인정되지 않는 등 법률혼과 차이가 있는 영역입니다. 민법 제839조의2의 재산분할 법리가 사실혼 해소에도 준용되는 것으로 평가됩니다. 사실혼 7년 + 공동 형성 재산 + 일방 해소 결합은 사실혼 입증 + 기여도 + 재산분할 결합 트랙. 당사자라면 ① 사실혼 입증 ② 공동 재산 정리 ③ 기여도 ④ 재산분할 청구 ⑤ 위자료 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 사실혼 해소 재산분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·재산정리·기여·분할·위자료 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실혼 입증</strong> — 동거 기간·결혼식·양가 교류·부부 인식 정황.</li>\n<li><strong>② 공동 재산 정리</strong> — 전세·예금·차량 등 공동 형성 자료.</li>\n<li><strong>③ 기여도 평가</strong> — 소득·가사·공동 자금 기여 정황.</li>\n<li><strong>④ 재산분할 청구</strong> — 사실혼 부당 해소 시 청구 검토.</li>\n<li><strong>⑤ 위자료</strong> — 일방 부당 파기 시 손해배상 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사실혼이 부당하게 해소되면 법률혼에 준해 재산분할을 청구할 수 있다는 법리가 형성돼 있는 영역입니다. 다만 사실혼의 실체 입증이 전제이고, 일방 사망 시 상속은 별개로 인정되지 않는 점에 유의하는 것이 좋습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 변호인·가정법원 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사실혼 입증 자료 정리 (즉시)</strong> — 동거·결혼식·부부 인식 정황.</li>\n<li><strong>2단계 — 공동 재산·기여 자료 정리 (1~2주)</strong>.</li>\n<li><strong>3단계 — 변호인 상담·내용증명 통지 (1개월)</strong>.</li>\n<li><strong>4단계 — 가정법원 재산분할·위자료 청구</strong>.</li>\n<li><strong>5단계 — 처분 우려 시 가압류·가처분 검토</strong>.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">사실혼 해소 재산분할 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·재산·기여 갈래입니다.</strong></p>\n<ul>\n<li><strong>주민등록등본·동거 기간 입증 자료</strong></li>\n<li><strong>결혼식·청첩장·양가 교류 사진·자료</strong></li>\n<li><strong>주변인·증인 진술서 (부부 인식)</strong></li>\n<li><strong>공동 형성 재산 자료 (전세·예금·차량)</strong></li>\n<li><strong>공동 자금 기여 입증 (이체·생활비 분담)</strong></li>\n<li><strong>관계 해소 경위 자료 (메시지·통보)</strong></li>\n<li><strong>본인 소득·가사 기여 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사실혼은 \'부부공동생활의 실체\' 입증이 출발점입니다. 결혼식·양가 교류·주변 인식·공동 자금 흐름 자료가 핵심이며, 상대가 재산을 처분할 우려가 있으면 가압류를 함께 검토하는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실혼 성립</strong> — 단순 동거 vs 부부공동생활 실체 구분.</li>\n<li><strong>기여도</strong> — 소득·가사·공동 자금 기여 평가.</li>\n<li><strong>분할 대상</strong> — 사실혼 기간 공동 형성 재산.</li>\n<li><strong>부당 파기 위자료</strong> — 정당한 사유 없는 일방 해소.</li>\n<li><strong>상속 불가</strong> — 일방 사망 시 사실혼 배우자 상속 제외.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산분할심판 절차 진행 평가 영역',
        summary:
          '대법원 2023므12218(대법원, 2023.11.02 선고) 영역에서 법원은 재산분할심판이 가사비송으로서 당사자의 청구 취하 등 절차 진행 방식이 정리될 수 있다고 본 사례 흐름이 있고, 사실혼 해소에 따른 재산분할 절차 진행을 다투는 사안에도 동일한 평가 기준이 검토될 수 있는 영역입니다.',
        takeaway: '사실혼 7년 + 공동 형성 재산 + 일방 해소 결합 시 사실혼 입증·재산분할 평가 영역 — 변호인 상담·청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '혼인신고를 안 했는데도 재산분할을 받을 수 있나요?',
        answer:
          '<strong>사실혼이 부당하게 해소되면 법률혼에 준해 청구할 수 있다는 법리가 있는 영역입니다.</strong> 사실혼 실체 입증이 전제.',
      },
      {
        question: '사실혼은 어떻게 입증하나요?',
        answer:
          '<strong>동거·결혼식·양가 교류·주변 인식·공동 자금 흐름 등 정황 자료를 종합합니다.</strong> 증인 진술도 도움이 됩니다.',
      },
      {
        question: '상대 명의로 된 전세·예금도 나눌 수 있나요?',
        answer:
          '<strong>사실혼 기간 공동 형성한 재산이면 분할 대상이 될 수 있습니다.</strong> 기여 입증이 핵심.',
      },
      {
        question: '일방적으로 헤어지자고 하면 위자료를 받을 수 있나요?',
        answer:
          '<strong>정당한 사유 없는 부당 파기면 위자료를 검토할 수 있는 영역입니다.</strong> 해소 경위 자료 보존.',
      },
      {
        question: '상대가 사망하면 상속도 받을 수 있나요?',
        answer:
          '<strong>사실혼 배우자는 상속이 인정되지 않는 점에 유의하세요.</strong> 재산분할·위자료와는 별개 영역입니다.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 기준', href: '/guide/divorce/divorce-property-division-criteria' },
      { label: '위자료 산정', href: '/guide/divorce/divorce-alimony-calculation' },
      { label: '재판상 이혼 사유', href: '/guide/divorce/divorce-judicial-grounds' },
      { label: '혼전계약서 작성', href: '/guide/divorce/divorce-prenup-drafting' },
      { label: '협의이혼 절차', href: '/guide/divorce/divorce-mutual-consent-procedure' },
    ],
  },

  // ─── 5 inheritance-renunciation-next-rank-debt-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-renunciation-next-rank-debt-track',
    keyword: '상속포기 후순위 상속인 빚 승계',
    questionKeyword: '부모의 빚 때문에 1순위 상속인이 모두 상속포기했는데, 그 빚이 손자녀·형제 같은 후순위에게 넘어간다는 걸 몰랐어요. 어떻게 막나요?',
    ctaKeyword: '상속포기 후순위 승계 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '상속포기 후순위 빚 승계 — 5단계 연쇄 차단 다툼 | 로앤가이드',
      description:
        '1순위가 모두 상속포기했는데 빚이 후순위 손자녀·형제에게 넘어가 당황스럽다면 연쇄 승계 차단 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"돌아가신 아버지가 남긴 빚이 재산보다 훨씬 많아 배우자와 자녀 등 1순위 상속인이 모두 상속을 포기했습니다. 그런데 얼마 뒤 채권자가 손자녀와 아버지의 형제에게까지 빚 독촉을 시작했어요. 1순위가 포기하면 그 빚이 후순위 상속인에게 차례로 넘어간다는 사실을 아무도 몰랐고, 어린 손자녀 앞으로도 채무가 갈 수 있다는 말에 온 가족이 당황한 상황입니다." 민법 제1019조는 상속인이 상속 개시를 안 날로부터 3개월 내에 상속포기 또는 한정승인을 할 수 있도록 규정하고, 민법 제1043조는 상속포기한 자의 상속분이 다른 상속인에게 귀속되도록 정해 후순위로 채무가 이어질 수 있는 영역입니다. 이런 연쇄 승계를 끊으려면 후순위 상속인 전원이 각자 자신의 3개월 기간 내에 포기 또는 한정승인을 하는 것을 검토할 수 있습니다. 1순위 전원 포기 + 후순위 채무 승계 + 미성년 포함 결합은 후순위 포기 + 한정승인 병행 + 연쇄 차단 결합 트랙. 상속인이라면 ① 선순위 포기 확인 ② 채무 파악 ③ 후순위 포기 ④ 한정승인 병행 ⑤ 미성년 보호 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 상속포기 후순위 빚 승계 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 포기확인·채무파악·후순위포기·한정승인·미성년 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 선순위 포기 확인</strong> — 1순위 포기 시점·범위·후순위 도래 여부.</li>\n<li><strong>② 채무 파악</strong> — 안심상속 원스톱 서비스로 채무·재산 조회.</li>\n<li><strong>③ 후순위 상속인 포기</strong> — 각자 안 날로부터 3개월 내 포기.</li>\n<li><strong>④ 한정승인 병행</strong> — 마지막 순위는 한정승인으로 연쇄 차단.</li>\n<li><strong>⑤ 미성년 상속인 보호</strong> — 법정대리인 통한 포기·한정승인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 1순위가 모두 포기하면 채무가 후순위로 이어질 수 있는 영역입니다. 가족 중 한 사람이 한정승인을 하면 그 아래로의 연쇄 승계를 차단하는 효과를 검토할 수 있어, 후순위까지 함께 정리하는 것이 안전합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 가정법원·행정복지센터 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 안심상속 원스톱 서비스로 채무·재산 조회 (즉시)</strong> — 사망신고 시 행정복지센터 신청.</li>\n<li><strong>2단계 — 선순위 포기 시점·후순위 도래 확인 (1주)</strong>.</li>\n<li><strong>3단계 — 후순위 상속인 포기·한정승인 신고 (각자 안 날로부터 3개월 내)</strong> — 피상속인 주소지 가정법원.</li>\n<li><strong>4단계 — 미성년 상속인은 법정대리인 통해 신고</strong>.</li>\n<li><strong>5단계 — 채권자 통지·독촉 대응 (포기·한정승인 결정문 송부)</strong>.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">상속포기 후순위 승계 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·채무·순위 갈래입니다.</strong></p>\n<ul>\n<li><strong>피상속인 사망진단서·기본증명서·말소된 주민등록초본</strong></li>\n<li><strong>가족관계증명서 (상속순위 확인)</strong></li>\n<li><strong>선순위 상속포기 심판문·신고 자료</strong></li>\n<li><strong>안심상속 원스톱 서비스 채무·재산 조회 결과</strong></li>\n<li><strong>채권자 독촉장·채무 내역 자료</strong></li>\n<li><strong>후순위 상속인 신분 자료 (손자녀·형제 등)</strong></li>\n<li><strong>미성년 상속인 법정대리인 동의·신분 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'안 날로부터 3개월\'을 후순위 상속인 각자 기준으로 따져야 한다는 점입니다. 손자녀·형제까지 빠짐없이 포기 또는 한정승인을 하는 것을 검토해야 연쇄 승계를 끊을 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>3개월 기산점</strong> — 후순위는 \'본인이 상속인 됨을 안 날\' 기준.</li>\n<li><strong>연쇄 승계 누락</strong> — 일부 후순위가 빠지면 채무 잔존 위험.</li>\n<li><strong>한정승인 vs 포기</strong> — 한정승인은 연쇄 차단 효과 검토.</li>\n<li><strong>미성년 상속인</strong> — 법정대리인 통한 신고 필요.</li>\n<li><strong>기간 도과</strong> — 특별한정승인 요건 별도 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 행정복지센터 (안심상속 원스톱 서비스)</strong></li>\n<li><strong>가정법원 (상속포기·한정승인 신고)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상속포기 효력 다툼 소송 평가 영역',
        summary:
          '대법원 66므26(대법원, 1966.12.27 선고) 영역에서 법원은 상속포기의 효력·무효를 다투는 소의 적법 요건과 상대방이 정리될 수 있다고 본 사례 흐름이 있고, 1순위 포기 후 후순위 상속인의 포기·승계 효력을 다투는 사안에도 동일한 평가 기준이 검토될 수 있는 영역입니다.',
        takeaway: '1순위 전원 포기 + 후순위 채무 승계 + 미성년 포함 결합 시 후순위 포기·한정승인 평가 영역 — 변호인 상담·전원 신고 검토 권장.',
      },
    ],
    faq: [
      {
        question: '1순위가 모두 포기하면 빚이 어디로 가나요?',
        answer:
          '<strong>후순위 상속인에게 차례로 이어질 수 있는 영역입니다.</strong> 손자녀·형제까지 포기·한정승인을 검토해야 합니다.',
      },
      {
        question: '후순위 상속인의 3개월은 언제부터 시작되나요?',
        answer:
          '<strong>본인이 상속인이 된 사실을 안 날부터 기산되는 영역입니다.</strong> 사람마다 기산점이 다를 수 있습니다.',
      },
      {
        question: '연쇄 승계를 한 번에 끊을 방법이 있나요?',
        answer:
          '<strong>가족 중 한 사람이 한정승인을 하면 그 아래로의 승계를 차단하는 효과를 검토할 수 있습니다.</strong>',
      },
      {
        question: '어린 손자녀에게도 빚이 갈 수 있나요?',
        answer:
          '<strong>후순위에 포함되면 가능한 영역이라 법정대리인을 통한 포기·한정승인을 검토하세요.</strong>',
      },
      {
        question: '3개월이 지났는데 뒤늦게 알았어요',
        answer:
          '<strong>특별한정승인 요건을 별도로 검토할 수 있는 영역입니다.</strong> 안 시점과 사정을 정리해 상담하세요.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '한정승인 절차', href: '/guide/inheritance/inheritance-limited-acceptance-procedure' },
      { label: '상속포기 절차', href: '/guide/inheritance/inheritance-renunciation-procedure' },
      { label: '상속분 계산', href: '/guide/inheritance/inheritance-share-calculation' },
      { label: '상속세 신고', href: '/guide/inheritance/inheritance-tax-filing' },
      { label: '유류분', href: '/guide/inheritance/inheritance-statutory-portion' },
    ],
  },

  // ─── 6 traffic-accident-school-zone-child-12-negligence-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-school-zone-child-12-negligence-track',
    keyword: '스쿨존 어린이 보호구역 사고 12대 중과실',
    questionKeyword: '어린이보호구역에서 서행하던 중 갑자기 뛰어든 아이와 접촉사고가 났어요. 스쿨존 12대 중과실이라 형사처벌이 걱정됩니다.',
    ctaKeyword: '스쿨존 사고 대응 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '스쿨존 어린이 사고 12대 중과실 — 5단계 대응 | 로앤가이드',
      description:
        '어린이보호구역에서 갑자기 뛰어든 아이와 사고가 나 12대 중과실로 형사처벌이 걱정된다면 대응 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"어린이보호구역에서 규정 속도를 지켜 서행하던 중 골목에서 갑자기 뛰어나온 아이와 접촉해 아이가 다쳤습니다. 곧바로 차를 세우고 119에 신고한 뒤 병원으로 옮겼지만, 스쿨존 사고는 12대 중과실에 해당해 형사처벌을 받을 수 있다는 말에 잠을 못 이루고 있어요. 블랙박스에는 서행 정황과 아이가 시야 밖에서 갑자기 진입한 장면이 남아 있는 상황입니다." 교통사고처리특례법 제3조는 스쿨존 사고 등 12대 중과실을 종합보험 가입과 무관하게 형사처벌 대상으로 규정하고, 도로교통법 제12조는 어린이보호구역에서의 속도·주의 의무를 정하며, 이른바 민식이법은 어린이 보호구역 내 어린이 사망·상해에 가중 처벌을 두고 있는 영역입니다. 다만 운전자의 주의의무 위반 여부·아이의 갑작스러운 진입 등 사고 경위가 함께 평가되는 영역입니다. 스쿨존 + 어린이 상해 + 갑작스러운 진입 결합은 형사 절차 + 합의·피해 회복 + 보험 결합 트랙. 혐의를 받고 있다면 ① 사고 경위 보존 ② 형사 절차 대비 ③ 피해 회복·합의 ④ 보험 처리 ⑤ 양형 자료 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 스쿨존 어린이 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위보존·형사대비·합의·보험·양형 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사고 경위 보존</strong> — 블랙박스·CCTV·서행·갑작스러운 진입 정황.</li>\n<li><strong>② 형사 절차 대비</strong> — 교특법 제3조·민식이법 적용 여부 검토.</li>\n<li><strong>③ 피해 회복·합의</strong> — 치료 협조·진심 어린 사과·합의 검토.</li>\n<li><strong>④ 보험 처리</strong> — 대인·대물 보험 접수 및 진행.</li>\n<li><strong>⑤ 양형 자료</strong> — 서행·구호조치·반성 정황 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 스쿨존 12대 중과실은 종합보험 가입과 무관하게 형사 절차로 진행될 수 있는 영역입니다. 다만 규정 속도 준수·아이의 갑작스러운 진입 등 경위가 함께 평가되니 블랙박스·CCTV 보존이 가장 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰·검찰·법원·보험 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고 경위 자료 보존 (사고 직후)</strong> — 블랙박스·CCTV·현장 사진.</li>\n<li><strong>2단계 — 경찰 조사 대비 (출석 전)</strong> — 변호인 상담·진술 정리.</li>\n<li><strong>3단계 — 피해 회복·합의 시도 (수사·기소 전)</strong> — 치료비 협조·합의.</li>\n<li><strong>4단계 — 검찰 송치·처분 (사안에 따라)</strong> — 기소·약식·불기소 검토.</li>\n<li><strong>5단계 — 재판 시 양형 자료 제출 (기소 후)</strong> — 반성·합의·구호조치.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">스쿨존 어린이 사고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·구호·합의 갈래입니다.</strong></p>\n<ul>\n<li><strong>블랙박스 영상·주변 CCTV 자료</strong></li>\n<li><strong>사고 현장 사진·도로 표지·속도 정황 자료</strong></li>\n<li><strong>119 신고·구호조치 기록</strong></li>\n<li><strong>운전자 진술서·사고 경위서</strong></li>\n<li><strong>피해 아동 진단서·치료 자료</strong></li>\n<li><strong>보험 접수·처리 자료</strong></li>\n<li><strong>합의·사과·반성 정황 자료 (양형용)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 스쿨존 사고는 경위 입증이 결정적인 영역입니다. 규정 속도 준수·아이의 갑작스러운 진입이 블랙박스로 확인되면 주의의무 평가에 참작될 수 있으니 영상·CCTV를 즉시 보존하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>주의의무 위반</strong> — 규정 속도 준수·예견 가능성 평가.</li>\n<li><strong>갑작스러운 진입</strong> — 아이의 시야 밖 진입 정황.</li>\n<li><strong>민식이법 적용</strong> — 어린이 보호구역 가중 요건 평가.</li>\n<li><strong>합의·피해 회복</strong> — 처분·양형에 참작되는 사정.</li>\n<li><strong>구호조치</strong> — 사고 후 즉시 조치 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 교통사고 상담</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 업무상과실치사상 주의의무 평가 영역',
        summary:
          '대법원 97도1740(대법원, 1997.11.28 선고) 영역에서 법원은 업무상과실치사상죄에서 과실은 업무 내용·지위에 비추어 요구되는 주의의무 위반 여부로 평가될 수 있다고 본 사례 흐름이 있고, 스쿨존 어린이 사고에서 운전자의 주의의무 위반을 다투는 사안에도 동일한 평가 기준이 검토될 수 있는 영역입니다.',
        takeaway: '스쿨존 + 어린이 상해 + 갑작스러운 진입 결합 시 주의의무 위반 평가 영역 — 혐의를 받고 있다면 변호인 상담·경위 보존 권장.',
      },
    ],
    faq: [
      {
        question: '규정 속도를 지켰는데도 처벌받을 수 있나요?',
        answer:
          '<strong>속도 준수는 주의의무 평가에 참작될 수 있는 사정입니다.</strong> 다만 경위 전체가 함께 평가되는 영역이라 자료 보존이 중요합니다.',
      },
      {
        question: '아이가 갑자기 뛰어들었는데도 제 책임인가요?',
        answer:
          '<strong>예견 가능성·회피 가능성이 함께 평가되는 영역입니다.</strong> 블랙박스로 진입 정황을 입증해두세요.',
      },
      {
        question: '종합보험에 가입했는데도 형사처벌 대상인가요?',
        answer:
          '<strong>스쿨존 사고 등 12대 중과실은 보험 가입과 무관하게 형사 절차로 진행될 수 있는 영역입니다.</strong>',
      },
      {
        question: '피해 아동과 합의하면 도움이 되나요?',
        answer:
          '<strong>피해 회복·합의는 처분·양형에 참작되는 사정입니다.</strong> 진심 어린 사과와 치료 협조를 함께 검토하세요.',
      },
      {
        question: '경찰 조사 전에 무엇부터 해야 하나요?',
        answer:
          '<strong>블랙박스·CCTV 등 경위 자료를 즉시 확보하고 변호인 상담을 검토하세요.</strong> 진술 정리가 중요합니다.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '보험금 청구 절차', href: '/guide/traffic-accident/insurance-claim-process-summary' },
      { label: '합의 후 후유증 추가청구', href: '/guide/traffic-accident/post-settlement-aftereffect-additional-claim' },
      { label: '합의금 적정액', href: '/guide/traffic-accident/accident-settlement-fair-amount' },
      { label: '보행자 무단횡단 과실', href: '/guide/traffic-accident/traffic-accident-pedestrian-jaywalking-fault' },
      { label: '교통사고 진단', href: '/diagnosis/traffic-accident' },
    ],
  },
];
