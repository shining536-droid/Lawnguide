import { SpokePage } from '../spoke-pages';

// batch85 dismissal(3) + wage(2) + unemployment(2) + retirement(2) + industrial-accident(1) — 10개 (2026-06-02)
//
// 고유 존재 이유:
// 1. dismissal-economic-layoff-criteria-track — batch84 수습/보복/갱신 분기와 달리 '경영상 정리해고의 긴박한 경영상 필요·해고회피노력·합리적이고 공정한 해고 기준' 판단형 트랙. 정리해고 4요건 충족 여부가 핵심.
// 2. dismissal-disciplinary-severity-excessive-track — batch84 보복징계 분기와 달리 '징계해고 양정 과다(재량권 일탈·남용)와 비례·평등 원칙' 판단형 트랙. 비위 정도 대비 해고 양정의 과중성이 핵심.
// 3. dismissal-oral-notice-no-writing-track — batch84 갱신거절 분기와 달리 '구두해고·서면통지 누락으로 인한 해고 효력(근로기준법 제27조)과 기간제 갱신거절 통보 시 제27조 적용 여부' 판단형 트랙. 서면통지 누락 해고 무효가 핵심.
// 4. wage-holiday-work-allowance-track — batch84 연차/도급 분기와 달리 '휴일근로수당 미지급과 일급 통상임금 산정 방법·주휴수당의 통상임금 제외' 판단형 트랙. 휴일근로 가산·통상임금 산정이 핵심.
// 5. wage-night-shift-premium-track — batch84 분기와 달리 '야간근로 가산수당 청구와 주휴수당의 최저임금 산입 여부' 판단형 트랙. 야간 가산·주휴수당 임금성이 핵심.
// 6. unemployment-contract-expiry-separation-track — batch84 괴롭힘/질병 자진퇴사 분기와 달리 '계약만료 비자발 이직 수급자격과 조기재취업수당(안정된 재취직 범위)' 절차형 트랙. 계약만료 수급·조기재취업수당이 핵심.
// 7. unemployment-workplace-relocation-commute-track — batch84 분기와 달리 '사업장 이전 통근곤란 정당한 이직 사유 수급과 부정수급 반환·추가징수 제재처분의 재량 일탈' 절차형 트랙. 통근곤란 수급·반환명령 적정성이 핵심.
// 8. retirement-interim-settlement-requirement-track — batch84 반복갱신/상여 분기와 달리 '퇴직금 중간정산 요건·효력과 급여규정상 평균임금 산정 기초(가족수당·상여 포함)' 판단형 트랙. 중간정산 평균임금 누락·재산정이 핵심.
// 9. retirement-executive-employee-status-track — batch84 분기와 달리 '임원의 근로자성과 근속기간 통산·징계해고 서면통지(제27조)' 판단형 트랙. 임원 근로자성·근속기간 산정이 핵심.
// 10. industrial-accident-mental-stress-disorder-track — batch84 출퇴근 인과관계 분기와 달리 '업무상 정신·과로 질환(스트레스)의 상당인과관계와 1차 재해 후 2차 재해 인정' 절차형 트랙. 과로·스트레스 질병 인과관계·2차 재해가 핵심.

export const spokesBatch85Labor: SpokePage[] = [
  // ─── 1. dismissal-economic-layoff-criteria-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-economic-layoff-criteria-track',
    keyword: '경영상 정리해고 요건',
    questionKeyword: '회사가 경영이 어렵다며 저를 포함한 몇 명을 정리해고했어요. 그런데 정말 그 정도로 급박한 상황이었는지, 해고를 피할 다른 방법은 없었는지 의문입니다. 정리해고 요건을 못 갖췄다면 다툴 수 있나요?',
    ctaKeyword: '경영상 정리해고 요건·해고회피노력 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '경영상 정리해고 요건 — 5단계 긴박성·회피노력 점검 | 로앤가이드',
      description:
        '경영상 이유로 정리해고를 당했다면 근로기준법 제24조 정리해고 4요건인 긴박한 경영상 필요·해고회피노력·공정한 선정 기준·근로자대표 협의와 노동위 구제신청 3개월까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"회사가 \'경영이 어렵다\'며 저를 포함한 몇 명을 경영상 이유로 정리해고한 근로자입니다. 그런데 막상 회사 사정을 들여다보면 정말 사람을 내보내야 할 만큼 급박한 상황이었는지 의문이고, 무급휴직이나 배치전환 같은 해고를 피할 다른 방법을 충분히 시도했는지도 모르겠어요. 게다가 누구를 해고 대상으로 골랐는지 기준도 납득이 가지 않고, 노동조합이나 근로자대표와 제대로 협의를 거쳤는지도 의심스럽습니다. 경영상 정리해고의 요건을 제대로 못 갖췄다면 이 해고를 다툴 여지가 있는지 막막한 상태입니다." 근로기준법 제24조는 긴박한 경영상의 필요·해고회피노력·합리적이고 공정한 해고 기준·근로자대표와의 성실 협의를 정리해고(경영상 이유에 의한 해고)의 요건으로 정하고, 제23조 제1항은 정당한 이유 없는 해고를 금지하는 영역입니다. 판례는 정리해고가 정당하려면 긴박한 경영상의 필요가 있어야 하고 이는 반드시 기업의 도산을 회피하기 위한 경우에 한정되지 않으며 장래에 올 수도 있는 위기에 대처하기 위한 인원삭감이 객관적으로 보아 합리성이 있다고 인정되는 경우도 포함되고, 사용자가 해고를 회피하기 위한 노력을 다하였는지와 합리적이고 공정한 해고의 기준에 따라 대상자를 선정하였는지를 각 사정에 비추어 종합적으로 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 경영상 해고 + 긴박성 의문 + 회피노력·선정기준 결합은 \'정리해고 요건\' 다툼이 가능한 트랙입니다. 피해자라면 ① 긴박한 경영상 필요 ② 해고회피노력 ③ 공정한 선정 기준 ④ 근로자대표 협의 ⑤ 노동위 구제 5중 트랙이 가능한 영역. 대응은 ① 필요성 ② 회피 ③ 기준 ④ 협의 ⑤ 노동위 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 경영상 정리해고 요건 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 긴박한 경영상 필요·해고회피노력·공정한 선정 기준·근로자대표 협의·노동위 구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 긴박한 경영상 필요</strong> — 인원삭감이 객관적으로 합리성 있는 긴박한 경영상 필요에 따른 것인지(근로기준법 제24조 제1항).</li>\n<li><strong>② 해고회피노력</strong> — 배치전환·무급휴직·희망퇴직 등 해고를 회피하기 위한 노력을 다했는지.</li>\n<li><strong>③ 합리적·공정한 선정 기준</strong> — 합리적이고 공정한 기준에 따라 해고 대상자를 선정했는지.</li>\n<li><strong>④ 근로자대표 협의</strong> — 해고 50일 전까지 근로자대표에게 통보하고 성실히 협의했는지.</li>\n<li><strong>⑤ 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 긴박한 경영상의 필요는 도산 회피에 한정되지 않고 장래 위기 대처를 위한 인원삭감의 합리성도 포함되며, 회피노력·선정 기준·협의 요건을 각 사정에 비추어 종합 판단하는 영역. 4요건 중 하나라도 흠결되면 정리해고의 정당성이 다투어지는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고 통보·경영 자료 보존 (즉시)</strong> — 해고 통보서·경영 악화 설명 자료·근로계약서 보존.</li>\n<li><strong>2단계 — 긴박성·회피노력 정리 (1~2주)</strong> — 경영상 필요의 실재와 배치전환·휴직 등 회피노력 시행 여부 정리.</li>\n<li><strong>3단계 — 선정 기준·협의 자료 (2주)</strong> — 해고 대상 선정 기준의 합리성·공정성과 근로자대표 협의 정황 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n<li><strong>5단계 — 행정소송·후속 청구 정리 (병행)</strong> — 재심판정 다툼 시 동일 사실 범위 내 주장 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">경영상 정리해고 요건·해고회피노력 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 긴박성·회피노력·선정 기준 갈래입니다.</strong></p>\n<ul>\n<li><strong>해고 통보서 (경영상 이유·시점 명시)</strong></li>\n<li><strong>근로계약서·취업규칙 (근로조건·정리해고 규정)</strong></li>\n<li><strong>경영 상황 설명 자료 (재무·매출 악화 여부)</strong></li>\n<li><strong>해고회피노력 자료 (배치전환·휴직·희망퇴직 시행 여부)</strong></li>\n<li><strong>해고 대상 선정 기준·명단 (합리성·공정성)</strong></li>\n<li><strong>근로자대표 협의·통보 자료 (50일 전 통보)</strong></li>\n<li><strong>해고 전후 신규 채용 자료 (필요성 반증)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'정리해고 4요건\'을 모두 갖췄는지입니다. 긴박한 경영상 필요는 도산 회피에 한정되지 않지만 객관적 합리성이 있어야 하고, 회피노력을 실제로 했는지, 선정 기준이 합리적·공정했는지, 근로자대표와 성실히 협의했는지를 경영 자료·협의 기록과 함께 정리하는 것이 출발점입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>긴박한 경영상 필요</strong> — 인원삭감의 합리성·긴박성이 객관적으로 인정되는지.</li>\n<li><strong>해고회피노력</strong> — 배치전환·휴직 등 회피노력을 다했는지.</li>\n<li><strong>선정 기준의 공정성</strong> — 해고 대상 선정이 합리적·공정한 기준에 따랐는지.</li>\n<li><strong>근로자대표 협의</strong> — 50일 전 통보·성실 협의를 거쳤는지.</li>\n<li><strong>입증책임 분담</strong> — 정리해고 정당성 입증은 사용자, 요건 흠결 정황은 근로자 측 정리 필요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>노동위원회 (부당해고 구제신청)</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정리해고의 긴박한 경영상 필요·해고회피노력·공정한 기준',
        summary:
          '대법원 2001두10776(대법원, 2003.09.26 선고) 영역에서 법원은 정리해고가 정당하려면 긴박한 경영상의 필요가 있어야 하는데 이는 반드시 기업의 도산을 회피하기 위한 경우에 한정되지 않고 장래에 올 수도 있는 위기에 대처하기 위해 인원을 줄이는 것이 객관적으로 보아 합리성이 있다고 인정되는 경우도 포함되며, 사용자가 해고를 회피하기 위한 노력을 다하였는지와 합리적이고 공정한 해고의 기준에 따라 대상자를 선정하였는지는 사용자의 경영 사정·해고 회피 수단의 강구 정도 등 여러 사정을 종합해 판단해야 한다고 판시했습니다. 경영상 정리해고를 다툴 때 긴박성·회피노력·선정 기준의 충족 여부를 검토해볼 수 있습니다.',
        takeaway: '경영상 해고 + 긴박성 의문 + 회피노력·선정기준 결합 시 정리해고 4요건 충족 여부 종합 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '회사가 어렵다고 하면 정리해고가 정당한가요?',
        answer:
          '<strong>긴박한 경영상 필요는 객관적 합리성이 있어야 인정되는 영역입니다.</strong> 경영 악화 자료와 인원삭감 필요성을 정리.',
      },
      {
        question: '도산 위기까지는 아닌데도 정리해고가 되나요?',
        answer:
          '<strong>도산 회피에 한정되지 않고 장래 위기 대처의 합리성도 포함되는 영역입니다.</strong> 경영 사정의 합리성 여부를 검토.',
      },
      {
        question: '해고를 피할 방법을 안 써본 것 같은데요?',
        answer:
          '<strong>배치전환·휴직 등 해고회피노력을 다했는지가 다툼이 되는 영역입니다.</strong> 회피노력 시행 여부 자료를 확보.',
      },
      {
        question: '왜 하필 저만 해고 대상이 됐나요?',
        answer:
          '<strong>합리적이고 공정한 선정 기준에 따랐는지가 핵심이 되는 영역입니다.</strong> 선정 기준·명단을 비교 정리.',
      },
      {
        question: '구제신청 기한이 있나요?',
        answer:
          '<strong>해고일로부터 3개월 이내가 노동위 구제신청 기한입니다.</strong> 기한 도과 전 신속 진행 검토.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '경영상 정리해고 요건', href: '/guide/dismissal/dismissal-economic-layoff-criteria-track' },
      { label: '경영상 정리해고 긴박한 경영상 필요 해고회피노력', href: '/guide/dismissal/dismissal-economic-layoff-urgent-need-avoidance-effort-track' },
      { label: '이메일 해고통보 서면통지 효력 판단', href: '/guide/dismissal/dismissal-email-notice-written-procedure-effect-track' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 2. dismissal-disciplinary-severity-excessive-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-disciplinary-severity-excessive-track',
    keyword: '징계해고 양정 과다',
    questionKeyword: '회사가 제 잘못을 문제 삼아 곧바로 징계해고를 했어요. 잘못한 부분이 있긴 하지만 해고까지 할 정도는 아니라고 생각합니다. 비위 정도에 비해 해고가 너무 과한 거라면 다툴 수 있나요?',
    ctaKeyword: '징계해고 양정 과다·재량권 일탈 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '징계해고 양정 과다 — 5단계 비례·재량권 점검 | 로앤가이드',
      description:
        '비위에 비해 징계해고가 지나치게 무겁다고 느낀다면 근로기준법 제23조 정당한 이유와 징계 양정 과다·비례 원칙·평등 원칙·재량권 일탈, 노동위 구제 3개월까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"회사가 제가 한 잘못을 문제 삼아 곧바로 징계해고를 통보한 근로자입니다. 제 행동에 부족한 부분이 있었던 건 인정하지만, 그 정도 일로 회사를 그만둬야 할 만큼 무거운 처분을 받는 게 맞는지 도무지 납득이 가지 않습니다. 같은 정도의 일을 한 다른 동료는 가벼운 징계에 그쳤는데 저만 해고된 점도 억울하고, 그동안의 근무태도나 성과는 전혀 고려되지 않은 것 같아요. 비위 정도에 비해 해고라는 처분이 지나치게 과중하다면 재량권을 벗어난 부당한 징계로 다툴 여지가 있는지 막막한 상태입니다." 근로기준법 제23조 제1항은 사용자가 정당한 이유 없이 근로자를 해고하지 못한다고 정하고, 징계해고가 정당하려면 사회통념상 고용관계를 계속할 수 없을 정도의 책임 있는 사유가 있어야 하는 영역입니다. 판례는 징계처분이 사회통념상 현저하게 타당성을 잃어 재량권을 남용한 것인지는 비위사실의 내용·성질, 징계로 달성하려는 목적, 징계 양정의 기준 등 여러 요소를 종합해 판단하고, 일반적으로 징계사유로 삼은 비행의 정도에 비해 균형을 잃은 과중한 처분을 선택해 비례의 원칙에 위반하거나 합리적 사유 없이 같은 정도의 비행에 일반적으로 적용해 온 기준과 어긋나게 공평을 잃은 처분을 선택해 평등의 원칙에 위반하면 재량권의 한계를 벗어난 위법한 처분이라고 본 사례 흐름이 있는 영역입니다. 경미한 비위 + 해고 처분 + 형평 의문 결합은 \'징계 양정 과다·재량권 일탈\' 다툼이 가능한 트랙입니다. 피해자라면 ① 비위 정도 ② 비례 원칙 ③ 평등 원칙 ④ 절차·서면통지 ⑤ 노동위 구제 5중 트랙이 가능한 영역. 대응은 ① 비위 ② 비례 ③ 평등 ④ 절차 ⑤ 노동위 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 징계해고 양정 과다 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 비위 정도·비례 원칙·평등 원칙·절차/서면통지·노동위 구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 비위 정도</strong> — 비위사실의 내용·성질이 해고에 이를 정도인지, 사회통념상 고용 계속이 불가능한지.</li>\n<li><strong>② 비례 원칙</strong> — 비행의 정도에 비해 해고가 균형을 잃은 과중한 처분인지.</li>\n<li><strong>③ 평등 원칙</strong> — 같은 정도의 비행에 일반적으로 적용해 온 기준과 어긋나 공평을 잃었는지.</li>\n<li><strong>④ 절차·서면통지</strong> — 징계 절차와 해고 사유·시기 서면통지(제27조)를 지켰는지.</li>\n<li><strong>⑤ 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 비행 정도에 비해 과중한 처분은 비례 원칙 위반, 같은 비행에 적용해 온 기준과 어긋난 처분은 평등 원칙 위반으로서 재량권의 한계를 벗어난 위법한 처분으로 보는 영역. 양정의 과다 여부가 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고·징계 자료 보존 (즉시)</strong> — 해고 통보서·징계의결서·징계사유서·취업규칙 보존.</li>\n<li><strong>2단계 — 비위 정도·양정 정리 (1주)</strong> — 비위사실의 내용·성질과 해고 양정의 과중성 정리.</li>\n<li><strong>3단계 — 비례·평등 자료 (2주)</strong> — 유사 비위 처분 사례 비교로 비례·평등 위반 정황 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n<li><strong>5단계 — 행정소송·후속 청구 정리 (병행)</strong> — 재심판정 다툼 시 동일 사실 범위 내 주장 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">징계해고 양정 과다·재량권 일탈 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 비위 정도·비례·평등 갈래입니다.</strong></p>\n<ul>\n<li><strong>해고 통보서 (징계사유·시점 명시)</strong></li>\n<li><strong>징계의결서·징계사유서 (비위사실 내용)</strong></li>\n<li><strong>취업규칙·인사규정 (징계 양정 기준)</strong></li>\n<li><strong>유사 비위 처분 사례 자료 (평등 원칙 비교)</strong></li>\n<li><strong>근무성적·표창·반성 자료 (정상 참작)</strong></li>\n<li><strong>인사위원회 회의록·소명 기록 (절차)</strong></li>\n<li><strong>해고 사유·시기 서면통지 자료 (제27조)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'비위에 비해 해고가 과한지\'입니다. 같은 정도의 비행에 회사가 그동안 어떤 처분을 해 왔는지(평등 원칙)와 해고가 비행 정도에 비해 균형을 잃었는지(비례 원칙)를 유사 사례·징계 기준과 함께 정리하고, 근무성적·반성 등 정상 참작 자료도 함께 모아두면 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>비위 정도</strong> — 비위사실이 사회통념상 고용 계속이 불가능할 정도인지.</li>\n<li><strong>비례 원칙</strong> — 비행 정도에 비해 해고가 과중한지.</li>\n<li><strong>평등 원칙</strong> — 유사 비위에 적용해 온 기준과 어긋나 공평을 잃었는지.</li>\n<li><strong>절차 하자</strong> — 징계 절차·소명 기회·서면통지를 지켰는지.</li>\n<li><strong>입증책임 분담</strong> — 해고 정당성 입증은 사용자, 양정 과다·형평 위반 정황은 근로자 측 정리 필요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>노동위원회 (부당해고 구제신청)</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 징계처분이 재량권의 한계를 벗어났는지의 판단 기준',
        summary:
          '대법원 2002다51555(대법원, 2004.06.25 선고) 영역에서 법원은 징계권자가 한 징계처분이 사회통념상 현저하게 타당성을 잃어 재량권을 남용한 것인지는 비위사실의 내용·성질, 징계로 달성하려는 목적, 징계 양정의 기준 등 여러 요소를 종합해 그 내용이 객관적으로 명백히 부당한지로 판단하고, 일반적으로 징계사유로 삼은 비행의 정도에 비하여 균형을 잃은 과중한 처분을 선택해 비례의 원칙에 위반하거나 합리적 사유 없이 같은 정도의 비행에 일반적으로 적용해 온 기준과 어긋나게 공평을 잃은 처분을 선택해 평등의 원칙에 위반하면 그 징계처분은 재량권의 한계를 벗어난 위법한 처분이라고 판시했습니다. 비위에 비해 해고가 과중하다면 비례·평등 원칙 위반을 검토해볼 수 있습니다.',
        takeaway: '경미한 비위 + 해고 처분 + 형평 의문 결합 시 양정 과다·비례·평등 원칙 위반 종합 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '잘못이 있긴 한데 해고까지 정당한가요?',
        answer:
          '<strong>비위 정도에 비해 균형을 잃은 과중한 처분이면 비례 원칙 위반이 되는 영역입니다.</strong> 비위 내용과 양정을 함께 정리.',
      },
      {
        question: '같은 잘못을 한 동료는 가벼운 징계를 받았어요.',
        answer:
          '<strong>같은 비행에 적용해 온 기준과 어긋나면 평등 원칙 위반이 되는 영역입니다.</strong> 유사 처분 사례를 비교 정리.',
      },
      {
        question: '그동안 성실히 일한 점은 고려가 안 되나요?',
        answer:
          '<strong>근무성적·반성 등 정상 참작 요소도 양정 판단에 반영되는 영역입니다.</strong> 근무성적·표창 자료를 확보.',
      },
      {
        question: '징계 절차가 잘못돼도 다툴 수 있나요?',
        answer:
          '<strong>소명 기회·서면통지 등 절차 적법성도 함께 다툴 수 있는 영역입니다.</strong> 인사위 회의록·통지 자료를 정리.',
      },
      {
        question: '구제신청 기한이 있나요?',
        answer:
          '<strong>해고일로부터 3개월 이내가 노동위 구제신청 기한입니다.</strong> 기한 도과 전 신속 진행 검토.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '징계 양정 과다 다툼', href: '/guide/dismissal/dismissal-disciplinary-severity-track' },
      { label: '징계 절차 위반 해고 정당성 판단', href: '/guide/dismissal/dismissal-disciplinary-procedure-defect-track' },
      { label: '구두 해고 서면통지 누락 효력 판단', href: '/guide/dismissal/dismissal-verbal-notice-no-written-document-track' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 3. dismissal-oral-notice-no-writing-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-oral-notice-no-writing-track',
    keyword: '구두해고 서면통지 누락',
    questionKeyword: '회사가 말로만 "내일부터 나오지 마라"고 해서 그만뒀어요. 해고 사유나 시기를 적은 서류는 한 장도 못 받았는데, 이렇게 구두로 통보한 해고도 효력이 있는 건지, 다툴 수 있는지 궁금합니다.',
    ctaKeyword: '구두해고 서면통지 누락 효력 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '구두해고 서면통지 누락 — 5단계 효력·서면 점검 | 로앤가이드',
      description:
        '회사가 말로만 나오지 말라며 서면통지 없이 해고했다면 근로기준법 제27조 해고 사유·시기 서면통지 누락 효력과 해고 여부·사직 경계, 노동위 구제 3개월까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"회사가 어느 날 갑자기 말로만 \'내일부터 나오지 마라\'고 해서 더 다니지 못하게 된 근로자입니다. 해고 사유가 무엇인지, 언제부터 해고되는 것인지 적힌 서류는 단 한 장도 받지 못했고, 그저 구두 통보만 들었어요. 막상 알아보니 해고는 사유와 시기를 서면으로 알려야 효력이 있다고 하던데, 회사는 \'권고사직\'이라거나 \'스스로 그만뒀다\'는 식으로 말을 바꾸고 있어 더 혼란스럽습니다. 이렇게 서면통지도 없이 말로만 통보한 해고가 효력이 있는 건지, 부당해고로 다툴 여지가 있는지 막막한 상태입니다." 근로기준법 제23조 제1항은 정당한 이유 없는 해고를 금지하고, 제27조는 사용자가 근로자를 해고하려면 해고 사유와 해고 시기를 서면으로 통지하여야 효력이 있다고 정하는 영역입니다. 판례는 제27조의 서면통지 규정은 사용자로 하여금 해고에 신중을 기하게 하고 해고의 존부·시기·사유를 명확히 해 사후 분쟁을 적정하고 용이하게 해결하며 근로자가 해고에 적절히 대응하게 하려는 취지인데, 다만 기간제 근로계약은 기간 만료로 당연히 종료하므로 갱신 거절의 통보에는 근로기준법 제27조가 적용되지 않는다고 본 사례 흐름이 있는 영역입니다. 구두 통보 + 서면통지 누락 + 해고 여부 다툼 결합은 \'서면통지 누락 효력\' 다툼이 가능한 트랙입니다. 피해자라면 ① 해고 여부 ② 서면통지 누락 ③ 효력 ④ 사직·권고사직 경계 ⑤ 노동위 구제 5중 트랙이 가능한 영역. 대응은 ① 해고 ② 서면 ③ 효력 ④ 경계 ⑤ 노동위 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 구두해고 서면통지 누락 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 해고 여부·서면통지 누락·효력·사직 경계·노동위 구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 해고 여부</strong> — 사용자가 일방적으로 근로관계를 종료시킨 \'해고\'인지(권고사직·자진사직과 구별).</li>\n<li><strong>② 서면통지 누락</strong> — 해고 사유·시기를 서면으로 통지했는지(근로기준법 제27조).</li>\n<li><strong>③ 효력</strong> — 서면통지 없는 해고는 효력이 없는지.</li>\n<li><strong>④ 사직·권고사직 경계</strong> — 회사가 사직·권고사직으로 주장을 바꾸는지.</li>\n<li><strong>⑤ 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 제27조의 서면통지는 해고에 신중을 기하게 하고 해고 존부·시기·사유를 명확히 해 분쟁을 용이하게 해결하려는 취지의 효력 요건. 다만 기간제 계약의 갱신 거절 통보에는 제27조가 적용되지 않으므로, 먼저 \'해고\'인지 확정하는 것이 다툼의 출발점인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고 정황 자료 보존 (즉시)</strong> — 구두 통보 녹취·메신저·통보 일시·근로계약서 보존.</li>\n<li><strong>2단계 — 해고 여부·서면 누락 정리 (1주)</strong> — 일방적 종료(해고)인지, 서면통지가 없었는지 정리.</li>\n<li><strong>3단계 — 사직·권고사직 경계 자료 (2주)</strong> — 회사 주장(사직·권고사직)과 실제 종료 경위 대조 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n<li><strong>5단계 — 행정소송·후속 청구 정리 (병행)</strong> — 재심판정 다툼 시 동일 사실 범위 내 주장 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">구두해고 서면통지 누락 효력 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 해고 여부·서면 누락·경계 갈래입니다.</strong></p>\n<ul>\n<li><strong>구두 통보 녹취·메신저 (해고 의사·시점)</strong></li>\n<li><strong>근로계약서 (근로조건·계약 형태)</strong></li>\n<li><strong>출근기록·근태 자료 (근로관계 종료 시점)</strong></li>\n<li><strong>해고 사유·시기 서면통지 유무 자료 (제27조)</strong></li>\n<li><strong>사직서 작성·요구 정황 (권고사직 여부)</strong></li>\n<li><strong>동료 진술 (통보 경위 사실관계)</strong></li>\n<li><strong>임금명세서·4대보험 상실신고 자료 (종료 사유)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 먼저 \'해고가 맞는지\'를 확정하고, 그다음 \'서면통지가 없었는지\'를 짚는 것입니다. 구두 통보 녹취·메신저로 일방적 종료(해고) 정황을 남기고, 회사가 사직·권고사직으로 말을 바꾸는 경우에 대비해 사직서 요구·작성 정황도 함께 정리해두면 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>해고 여부</strong> — 일방적 종료(해고)인지, 사직·권고사직·갱신거절인지.</li>\n<li><strong>서면통지 누락</strong> — 해고 사유·시기를 서면으로 통지했는지.</li>\n<li><strong>해고 효력</strong> — 서면통지 없는 해고가 효력이 없는지.</li>\n<li><strong>적용 범위</strong> — 기간제 갱신거절 통보에는 제27조가 적용되지 않는지.</li>\n<li><strong>입증책임 분담</strong> — 해고 정당성·서면통지 입증은 사용자, 해고 정황은 근로자 측 정리 필요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>노동위원회 (부당해고 구제신청)</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 해고 서면통지(제27조)의 취지와 갱신거절 통보의 적용 여부',
        summary:
          '대법원 2021두45114(대법원, 2021.10.28 선고) 영역에서 법원은 근로기준법 제27조가 사용자로 하여금 해고 사유와 해고 시기를 서면으로 통지하여야 효력이 있다고 규정한 것은 사용자가 해고에 신중을 기하게 하고 해고의 존부 및 시기와 사유를 명확하게 하여 사후 분쟁이 적정하고 용이하게 해결되도록 하며 근로자가 해고에 적절히 대응할 수 있게 하려는 취지이나, 기간제 근로계약은 기간이 만료됨으로써 당연히 종료하는 것이어서 갱신 거절은 근로자의 의사와 관계없이 일방적으로 근로관계를 종료시키는 해고와 구별되므로 갱신 거절의 통보에는 근로기준법 제27조가 적용되지 않는다고 판시했습니다. 구두로만 통보된 해고를 다툴 때 먼저 해고 해당 여부와 서면통지 누락을 검토해볼 수 있습니다.',
        takeaway: '구두 통보 + 서면통지 누락 + 해고 여부 다툼 결합 시 해고 해당성·서면통지 효력 종합 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '말로만 해고해도 효력이 있나요?',
        answer:
          '<strong>해고는 사유·시기를 서면으로 통지해야 효력이 있는 영역입니다(제27조).</strong> 구두 통보 녹취·정황을 확보.',
      },
      {
        question: '회사가 제가 스스로 그만뒀다고 해요.',
        answer:
          '<strong>사직·권고사직과 해고의 경계가 다툼이 되는 영역입니다.</strong> 사직서 요구·작성 정황을 정리.',
      },
      {
        question: '서면을 안 주면 무조건 부당해고인가요?',
        answer:
          '<strong>먼저 \'해고\'인지 확정한 뒤 서면통지 누락 효력을 따지는 영역입니다.</strong> 일방적 종료 정황을 먼저 정리.',
      },
      {
        question: '계약직 갱신거절도 서면통지가 필요한가요?',
        answer:
          '<strong>기간제 갱신거절 통보에는 제27조가 적용되지 않는 영역입니다.</strong> 해고인지 갱신거절인지 먼저 구분.',
      },
      {
        question: '구제신청 기한이 있나요?',
        answer:
          '<strong>해고일로부터 3개월 이내가 노동위 구제신청 기한입니다.</strong> 기한 도과 전 신속 진행 검토.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '구두 통보 서면통지 누락 해고 효력 판단', href: '/guide/dismissal/dismissal-verbal-notice-written-procedure-omission-track' },
      { label: '구두해고 서면통지 누락', href: '/guide/dismissal/dismissal-oral-notice-no-writing-track' },
      { label: '권고사직 합의서 작성 주의사항', href: '/guide/dismissal/recommended-resignation-agreement-tips' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 4. wage-holiday-work-allowance-track ───
  {
    domain: 'wage',
    slug: 'wage-holiday-work-allowance-track',
    keyword: '휴일근로수당 미지급',
    questionKeyword: '휴일에 출근해 일했는데 회사가 가산수당을 제대로 안 줬어요. 일당제라 어떻게 계산되는지도 헷갈리고, 주휴수당까지 섞여 있어 통상임금 계산이 맞는지 의문입니다. 휴일근로수당을 받을 수 있나요?',
    ctaKeyword: '휴일근로수당 미지급·통상임금 산정 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '휴일근로수당 미지급 — 5단계 가산·통상임금 점검 | 로앤가이드',
      description:
        '휴일에 일했는데 가산수당을 제대로 못 받았다면 근로기준법 제56조 휴일근로 50% 가산과 일당제 일급 통상임금 산정·주휴수당 제외, 임금 시효 3년 청구까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"휴일에 회사에 나가 일했는데도 가산수당을 제대로 받지 못한 근로자입니다. 형식상 일당제로 급여를 받다 보니 시간당 얼마로 계산되는지부터 헷갈리고, 회사가 준 임금 안에 주휴수당까지 섞여 있어 통상임금이 제대로 산정된 건지 도무지 알 수가 없어요. 휴일에 일하면 가산해서 더 받아야 한다고 들었는데, 회사는 \'이미 다 포함해 줬다\'는 말만 반복합니다. 일당제라는 이유로 가산수당을 두루뭉술하게 넘기는 게 맞는지, 미지급 휴일근로수당을 받을 수 있는지 막막한 상태입니다." 근로기준법 제56조는 휴일근로에 대해 통상임금의 50% 이상(8시간 초과분은 100%)을 가산해 지급하도록 정하고, 제55조는 유급휴일(주휴)을, 통상임금은 정기적·일률적으로 소정근로의 대가로 지급되는 임금을 뜻하는 영역입니다. 판례는 보수 지급 형태가 일당제라도 실질적으로 월급제와 유사하게 운용된 경우 일급 통상임금은 먼저 시간급 금액을 산정한 뒤 1일의 소정근로시간 수를 곱하는 방식으로 산정해야 하고, 받은 월 급여액 중 연장·야간·휴일근로수당분을 제외한 나머지 급여액에 주휴수당이 포함되어 있다면 그 주휴수당은 통상임금 산정에서 제외되어야 한다고 본 사례 흐름이 있는 영역입니다. 휴일근로 + 가산 미지급 + 통상임금 의문 결합은 \'휴일근로수당·통상임금 산정\' 다툼이 가능한 트랙입니다. 피해자라면 ① 휴일근로 사실 ② 가산율 ③ 통상임금 산정 ④ 주휴수당 제외 ⑤ 청구 5중 트랙이 가능한 영역. 대응은 ① 근로 ② 가산 ③ 통상임금 ④ 주휴 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 휴일근로수당 미지급 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 휴일근로 사실·가산율·통상임금 산정·주휴수당 제외·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 휴일근로 사실</strong> — 유급휴일(주휴 등)에 실제 근로를 제공했는지(근무·출근 기록).</li>\n<li><strong>② 가산율</strong> — 휴일근로 통상임금 50% 이상(8시간 초과분 100%) 가산(근로기준법 제56조).</li>\n<li><strong>③ 통상임금 산정</strong> — 일당제라도 시간급 산정 후 1일 소정근로시간 수를 곱해 일급 통상임금 산정.</li>\n<li><strong>④ 주휴수당 제외</strong> — 급여에 주휴수당이 포함돼 있으면 통상임금 산정에서 제외.</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정·민사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 일당제라도 실질이 월급제와 유사하면 시간급을 먼저 산정한 뒤 1일 소정근로시간 수를 곱해 일급 통상임금을 산정하고, 급여에 주휴수당이 포함돼 있으면 그 부분은 통상임금에서 제외하는 영역. 통상임금을 어떻게 잡느냐가 가산수당 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong>A. 고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근무·급여 자료 보존 (즉시)</strong> — 휴일 출근기록·근무표·임금명세서·근로계약서 보존.</li>\n<li><strong>2단계 — 휴일근로·가산율 정리 (1~2주)</strong> — 휴일근로 사실과 50%(초과분 100%) 가산 적용 여부 정리.</li>\n<li><strong>3단계 — 통상임금·주휴수당 검토 (2~3주)</strong> — 시간급 산정 후 일급 통상임금 산정, 주휴수당 포함분 제외.</li>\n<li><strong>4단계 — 고용노동부 진정·내용증명 (시효 3년 내)</strong> — 1350 진정 또는 회사 청구.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">휴일근로수당 미지급·통상임금 산정 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 휴일근로·가산·통상임금 갈래입니다.</strong></p>\n<ul>\n<li><strong>휴일 출근기록·근무표 (휴일근로 사실)</strong></li>\n<li><strong>근로계약서 (소정근로시간·임금 구성)</strong></li>\n<li><strong>임금명세서 (가산수당·주휴수당 표시)</strong></li>\n<li><strong>급여 산정 기준 자료 (일당·시간급 구성)</strong></li>\n<li><strong>연장·야간·휴일 근로 내역 (가산 대상)</strong></li>\n<li><strong>통상임금 산정표 (시간급·일급 산정)</strong></li>\n<li><strong>진정서·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'통상임금을 어떻게 잡느냐\'입니다. 일당제라도 시간급을 먼저 산정한 뒤 1일 소정근로시간 수를 곱해 일급 통상임금을 산정하고, 급여에 주휴수당이 섞여 있다면 그 부분은 통상임금에서 빼야 합니다. 임금명세서로 가산수당·주휴수당 표시를 확인하고 휴일근로 내역과 함께 정리해두면 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>휴일근로 사실</strong> — 유급휴일에 실제 근로를 제공했는지.</li>\n<li><strong>가산율 적용</strong> — 50%(8시간 초과분 100%) 가산을 적용했는지.</li>\n<li><strong>통상임금 산정</strong> — 일당제 시간급·일급 통상임금 산정 방식이 맞는지.</li>\n<li><strong>주휴수당 제외</strong> — 급여에 포함된 주휴수당을 통상임금에서 제외했는지.</li>\n<li><strong>시효 관리</strong> — 임금·수당 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (임금체불 신고·진정)</strong></li>\n<li><strong>근로복지공단</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일당제 일급 통상임금 산정 방법과 주휴수당의 통상임금 제외',
        summary:
          '대법원 2011다53638(대법원, 2015.05.28 선고) 영역에서 법원은 보수 지급 형태가 일당제의 형식을 취하더라도 실질적으로 월급제와 유사하게 운용되어 온 경우 일급 통상임금은 먼저 시간급 금액을 산정하고 거기에 1일의 소정근로시간 수를 곱하는 방식으로 산정하여야 하고, 받은 월 급여액 중 연장·야간·휴일근로수당분을 제외한 나머지 급여액에 주휴수당이 포함되어 있다면 그 주휴수당은 통상임금 산정에서 제외되어야 한다고 판시했습니다. 휴일근로 가산수당을 다툴 때 일급 통상임금 산정과 주휴수당 제외를 검토해볼 수 있습니다.',
        takeaway: '휴일근로 + 가산 미지급 + 통상임금 의문 결합 시 휴일근로 가산·일급 통상임금 산정·주휴수당 제외 검토 영역 — 진정·민사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '휴일에 일하면 얼마나 더 받아야 하나요?',
        answer:
          '<strong>휴일근로는 통상임금 50% 이상(8시간 초과분 100%)을 가산하는 영역입니다(제56조).</strong> 휴일근로 내역과 통상임금을 정리.',
      },
      {
        question: '일당제인데 통상임금은 어떻게 계산하나요?',
        answer:
          '<strong>시간급을 먼저 산정한 뒤 1일 소정근로시간 수를 곱해 일급 통상임금을 산정하는 영역입니다.</strong> 급여 구성 자료를 확보.',
      },
      {
        question: '주휴수당이 통상임금에 들어가나요?',
        answer:
          '<strong>급여에 주휴수당이 포함돼 있으면 통상임금 산정에서 제외하는 영역입니다.</strong> 임금명세서로 구성을 확인.',
      },
      {
        question: '회사가 다 포함해서 줬다는데요?',
        answer:
          '<strong>가산수당이 통상임금 기준으로 정확히 산정됐는지가 다툼이 되는 영역입니다.</strong> 산정표로 대조 정리.',
      },
      {
        question: '청구 시효는요?',
        answer:
          '<strong>임금·수당 청구 시효는 3년인 영역입니다.</strong> 지급일로부터 3년 내 청구.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '휴일근로수당 미지급 청구 판단', href: '/guide/wage/wage-holiday-work-allowance-unpaid-claim-track' },
      { label: '출장수당 통상임금 포함', href: '/guide/wage/wage-business-trip-allowance-ordinary-wage-track' },
      { label: '주휴수당 다툼', href: '/guide/wage/wage-weekly-holiday-allowance-track' },
      { label: '연차수당 미지급', href: '/guide/wage/wage-annual-leave-allowance-unpaid-track' },
      { label: '임금체불 진정 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
    ],
  },

  // ─── 5. wage-night-shift-premium-track ───
  {
    domain: 'wage',
    slug: 'wage-night-shift-premium-track',
    keyword: '야간근로 가산수당 청구',
    questionKeyword: '밤 10시 이후 늦은 시간까지 일하는 날이 많은데 회사가 야간 가산수당을 따로 안 줬어요. 게다가 최저임금에 주휴수당까지 끼워 계산하는 것 같은데, 이렇게 받는 게 맞는지 다툴 수 있나요?',
    ctaKeyword: '야간근로 가산수당·주휴수당 최저임금 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '야간근로 가산수당 청구 — 5단계 가산·최저임금 점검 | 로앤가이드',
      description:
        '밤 늦게까지 일했는데 야간 가산수당을 못 받고 최저임금 계산도 의심된다면 근로기준법 제56조 야간근로 50% 가산과 주휴수당의 최저임금 산입 여부, 임금 시효 3년 청구까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"밤 10시 이후 늦은 시간까지 일하는 날이 많은 근로자입니다. 분명히 야간 시간대에 근무했는데도 회사가 야간근로 가산수당을 따로 챙겨주지 않았고, 막상 급여를 뜯어보니 최저임금에 주휴수당까지 끼워 넣어 시급을 맞추는 것 같아 정말 제대로 받고 있는 건지 의문이 들었어요. 야간에 일하면 더 받아야 한다고 들었는데, 회사는 \'다 합쳐서 최저임금 이상이면 문제없다\'는 말만 반복합니다. 야간 가산수당을 따로 받을 수 있는지, 주휴수당을 최저임금에 끼워 계산하는 게 맞는지 막막한 상태입니다." 근로기준법 제56조는 야간근로(오후 10시~오전 6시)에 대해 통상임금의 50% 이상을 가산해 지급하도록 정하고, 최저임금법 제6조는 사용자가 최저임금액 이상의 임금을 지급하도록 정하는 영역입니다. 판례는 최저임금법 제6조가 사용자는 최저임금의 적용을 받는 근로자에게 최저임금액 이상의 임금을 지급하여야 한다고 정하고 있고, 구 근로기준법 제55조에 따라 부여되는 유급휴일에 대한 임금인 주휴수당은 소정의 근로에 대해 매월 1회 이상 정기적으로 지급되는 임금이므로 사용자가 최저임금액 이상으로 지급하여야 할 임금에 해당한다고 본 사례 흐름이 있는 영역입니다. 야간근로 + 가산 미지급 + 최저임금 의문 결합은 \'야간 가산수당·최저임금 산입\' 다툼이 가능한 트랙입니다. 피해자라면 ① 야간근로 사실 ② 가산율 ③ 통상임금 산정 ④ 최저임금 산입 ⑤ 청구 5중 트랙이 가능한 영역. 대응은 ① 근로 ② 가산 ③ 통상임금 ④ 최저임금 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 야간근로 가산수당 청구 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 야간근로 사실·가산율·통상임금 산정·최저임금 산입·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 야간근로 사실</strong> — 오후 10시~오전 6시 사이 근로를 제공했는지(근무 기록).</li>\n<li><strong>② 가산율</strong> — 야간근로 통상임금 50% 이상 가산(근로기준법 제56조).</li>\n<li><strong>③ 통상임금 산정</strong> — 가산의 기초가 되는 통상임금이 정확히 산정됐는지.</li>\n<li><strong>④ 최저임금 산입</strong> — 주휴수당이 최저임금 지급 대상 임금에 해당하는지(최저임금법 제6조).</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정·민사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 주휴수당은 소정근로에 대해 매월 1회 이상 정기적으로 지급되는 임금이므로 최저임금액 이상으로 지급해야 할 임금에 해당하는 영역. 야간 가산은 별도이고, 주휴수당을 최저임금 산입에 어떻게 반영했는지가 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong>A. 고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근무·급여 자료 보존 (즉시)</strong> — 야간근무 기록·근무표·임금명세서·근로계약서 보존.</li>\n<li><strong>2단계 — 야간근로·가산율 정리 (1~2주)</strong> — 야간 시간대 근로 사실과 50% 가산 적용 여부 정리.</li>\n<li><strong>3단계 — 통상임금·최저임금 검토 (2~3주)</strong> — 통상임금 산정과 주휴수당의 최저임금 산입 적정성 검토.</li>\n<li><strong>4단계 — 고용노동부 진정·내용증명 (시효 3년 내)</strong> — 1350 진정 또는 회사 청구.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">야간근로 가산수당·주휴수당 최저임금 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 야간근로·가산·최저임금 갈래입니다.</strong></p>\n<ul>\n<li><strong>야간근무 기록·근무표 (10시~6시 근로 사실)</strong></li>\n<li><strong>근로계약서 (소정근로시간·임금 구성)</strong></li>\n<li><strong>임금명세서 (야간 가산·주휴수당 표시)</strong></li>\n<li><strong>최저임금 산입 내역 자료 (주휴수당 포함 여부)</strong></li>\n<li><strong>통상임금 산정표 (가산 기초)</strong></li>\n<li><strong>출퇴근 기록·교대표 (야간 시간 입증)</strong></li>\n<li><strong>진정서·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 야간 가산은 별도라는 점과 \'주휴수당의 최저임금 산입\'입니다. 오후 10시~오전 6시 근로는 통상임금 50%를 가산해야 하고, 주휴수당은 최저임금 지급 대상 임금에 해당하므로 회사가 이를 어떻게 반영했는지 임금명세서·산입 내역으로 확인해두는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>야간근로 사실</strong> — 오후 10시~오전 6시 사이 근로를 제공했는지.</li>\n<li><strong>가산율 적용</strong> — 야간근로에 통상임금 50% 가산을 적용했는지.</li>\n<li><strong>통상임금 산정</strong> — 가산 기초 통상임금이 정확한지.</li>\n<li><strong>주휴수당 최저임금 산입</strong> — 주휴수당이 최저임금 지급 대상 임금으로 반영됐는지.</li>\n<li><strong>시효 관리</strong> — 임금·수당 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (임금체불 신고·진정)</strong></li>\n<li><strong>근로복지공단</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 주휴수당이 최저임금 지급 대상 임금에 해당하는지',
        summary:
          '대법원 2021다246545(대법원, 2024.07.25 선고) 영역에서 법원은 최저임금법 제6조 제1항이 사용자는 최저임금의 적용을 받는 근로자에게 최저임금액 이상의 임금을 지급하여야 한다고 정하고 있고, 구 근로기준법 제55조에 따라 부여되는 유급휴일에 대한 임금인 주휴수당은 소정의 근로에 대해 매월 1회 이상 정기적으로 지급되는 임금이므로 사용자가 최저임금액 이상으로 지급하여야 할 임금에 해당한다고 판시했습니다. 야간 가산수당과 함께 주휴수당이 최저임금에 어떻게 반영됐는지 다툴 때 이 기준을 검토해볼 수 있습니다.',
        takeaway: '야간근로 + 가산 미지급 + 최저임금 의문 결합 시 야간 가산·통상임금 산정·주휴수당 최저임금 산입 검토 영역 — 진정·민사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '야간에 일하면 얼마나 더 받아야 하나요?',
        answer:
          '<strong>오후 10시~오전 6시 야간근로는 통상임금 50% 이상을 가산하는 영역입니다(제56조).</strong> 야간 근무 기록을 정리.',
      },
      {
        question: '최저임금만 넘으면 야간 가산은 안 줘도 되나요?',
        answer:
          '<strong>야간 가산수당은 최저임금과 별도로 지급해야 하는 영역입니다.</strong> 가산 적용 여부를 명세서로 확인.',
      },
      {
        question: '주휴수당이 최저임금에 들어가나요?',
        answer:
          '<strong>주휴수당은 최저임금 지급 대상 임금에 해당하는 영역입니다.</strong> 최저임금 산입 내역을 확인.',
      },
      {
        question: '회사가 다 합쳐서 최저임금 이상이라는데요?',
        answer:
          '<strong>각 수당이 기준에 맞게 산정·산입됐는지가 다툼이 되는 영역입니다.</strong> 산정 내역을 대조 정리.',
      },
      {
        question: '청구 시효는요?',
        answer:
          '<strong>임금·수당 청구 시효는 3년인 영역입니다.</strong> 지급일로부터 3년 내 청구.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '야간근로수당 포괄임금 미산입 청구 판단', href: '/guide/wage/wage-night-work-allowance-comprehensive-salary-unpaid-claim-track' },
      { label: '주휴수당 최저임금 포함 여부', href: '/guide/wage/wage-minimum-weekly-holiday-included' },
      { label: '실비변상 명목 일비 통상임금 산입', href: '/guide/wage/wage-daily-expense-allowance-ordinary-wage-track' },
      { label: '미사용 연차수당 인센티브 평균임금 산입', href: '/guide/wage/wage-annual-leave-allowance-unused-unpaid-track' },
      { label: '임금체불 진정 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
    ],
  },

  // ─── 6. unemployment-contract-expiry-separation-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-contract-expiry-separation-track',
    keyword: '계약만료 이직 수급자격',
    questionKeyword: '계약기간이 끝나 회사가 더 안 쓴다고 해서 일을 그만뒀어요. 제가 그만두고 싶었던 게 아니라 계약이 만료된 건데, 이런 경우에도 실업급여를 받을 수 있는지, 빨리 재취업하면 추가로 받는 게 있는지 궁금합니다.',
    ctaKeyword: '계약만료 이직 수급자격·조기재취업수당 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '계약만료 이직 수급자격 — 5단계 비자발 이직·조기재취업 점검 | 로앤가이드',
      description:
        '계약만료로 일을 그만뒀는데 실업급여가 되는지 궁금하다면 고용보험법상 계약만료 비자발적 이직 수급자격과 안정된 재취직 범위의 조기재취업수당, 신청 절차까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"계약기간이 끝나 회사가 더 이상 쓰지 않겠다고 해서 일을 그만두게 된 근로자입니다. 제가 스스로 나가고 싶었던 게 전혀 아니라 계약이 만료돼 어쩔 수 없이 끝난 건데, \'자진퇴사면 실업급여가 안 된다\'는 말부터 들어 혼란스러웠어요. 계약만료도 자진퇴사로 보는 건지, 아니면 비자발적 이직으로 인정돼 실업급여를 받을 수 있는지 헷갈립니다. 또 실업급여를 받다가 빨리 재취업하면 추가로 받는 수당이 있다고 들었는데, 그 조건도 잘 모르겠어요. 계약만료로 그만둔 경우 수급자격이 인정되는지, 어떤 자료를 준비해야 하는지 막막한 상태입니다." 고용보험법 제40조는 이직일 이전 18개월간 피보험단위기간 180일 이상 등을 수급요건으로 정하고, 같은 법은 소정급여일수분의 구직급여를 모두 받기 전에 안정된 직업에 재취직하면 조기재취업수당을 지급하도록 정하는 영역입니다. 판례는 조기재취업수당은 수급자격자가 구직급여를 모두 받기 전에 재취직이든 자영업이든 취업의 형태를 불문하고 안정적으로 재취업해 소득을 얻을 수 있게 된 경우 실직기간을 최소화하고 안정된 재취업을 장려하기 위한 것이므로, 수급자격자가 주식회사의 대표이사에 취임해 안정적으로 재취업했다면 시행령상 \'고용되는 직업에 취직한 경우\'에 해당한다고 본 사례 흐름이 있는 영역입니다. 계약만료 + 비자발성 + 조기재취업 결합은 \'수급자격·조기재취업수당\' 검토가 가능한 트랙입니다. 피해자라면 ① 계약만료 입증 ② 비자발적 이직 ③ 피보험단위기간 ④ 수급자격 ⑤ 조기재취업수당 5중 트랙이 가능한 영역. 대응은 ① 입증 ② 이직 ③ 단위기간 ④ 수급 ⑤ 조기재취업 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 계약만료 이직 수급자격 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약만료 입증·비자발적 이직·피보험단위기간·수급자격·조기재취업수당 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약만료 입증</strong> — 기간 만료로 회사가 재계약을 하지 않아 이직한 사정 정리.</li>\n<li><strong>② 비자발적 이직</strong> — 근로자가 원해서가 아니라 계약만료로 그만둔 비자발적 이직인지.</li>\n<li><strong>③ 피보험단위기간</strong> — 이직일 이전 18개월간 180일 이상인지(고용보험법 제40조).</li>\n<li><strong>④ 수급자격</strong> — 계약만료 비자발 이직으로 수급자격이 인정될 수 있는지.</li>\n<li><strong>⑤ 조기재취업수당</strong> — 구직급여를 모두 받기 전 안정된 직업에 재취직 시 조기재취업수당 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 계약만료로 어쩔 수 없이 이직한 경우 비자발적 이직으로 수급자격이 검토되는 영역. 판례 흐름에서 조기재취업수당은 재취직·자영업 등 취업 형태를 불문하고 안정적 재취업을 장려하기 위한 것이어서, 재취업 형태와 안정성도 함께 살펴보는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신청·심사 5단계',
        content:
          '<p><strong>A. 고용센터·고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·이직 자료 보존 (즉시)</strong> — 근로계약서(계약기간)·재계약 거절 통보·이직확인서 보존.</li>\n<li><strong>2단계 — 비자발 이직·단위기간 정리 (1주)</strong> — 계약만료 사정과 피보험단위기간(180일) 정리.</li>\n<li><strong>3단계 — 수급자격 신청 (이직일 다음날부터 12개월 내)</strong> — 워크넷 구직등록 + 수급자격 신청.</li>\n<li><strong>4단계 — 이직 사유 소명 (고용센터 심사)</strong> — 계약만료 비자발 이직 입증 자료 제출.</li>\n<li><strong>5단계 — 재취업·조기재취업수당 (재취직 시)</strong> — 안정된 직업 재취직 시 조기재취업수당 신청 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">계약만료 이직 수급자격·조기재취업수당 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 계약만료 입증·비자발 이직·단위기간 갈래입니다.</strong></p>\n<ul>\n<li><strong>근로계약서 (계약기간·만료일)</strong></li>\n<li><strong>재계약 거절·미갱신 통보 자료 (비자발성)</strong></li>\n<li><strong>이직확인서 (이직 사유 코드 확인)</strong></li>\n<li><strong>고용보험 가입이력 (피보험단위기간 180일)</strong></li>\n<li><strong>워크넷 구직등록 확인</strong></li>\n<li><strong>재취업 증빙 자료 (조기재취업수당 신청 시)</strong></li>\n<li><strong>사업자등록·근로계약 등 재취직 형태 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'계약만료가 비자발적 이직임을 명확히 하는 것\'입니다. 이직확인서의 이직 사유가 계약만료로 정확히 기재됐는지 확인하고, 피보험단위기간 180일을 함께 점검하세요. 빠른 재취업 시에는 재취직 형태와 안정성을 증빙하면 조기재취업수당을 함께 검토할 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>비자발적 이직</strong> — 계약만료로 어쩔 수 없이 그만뒀는지(자진퇴사와 구별).</li>\n<li><strong>이직확인서 사유</strong> — 이직 사유가 계약만료로 정확히 기재됐는지.</li>\n<li><strong>피보험단위기간</strong> — 180일 이상 충족 여부.</li>\n<li><strong>조기재취업수당</strong> — 안정된 직업 재취직·자영업 영위 형태가 요건에 맞는지.</li>\n<li><strong>신청 기한</strong> — 이직일 다음날부터 12개월 내 신청.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 고용센터 1350</strong></li>\n<li><strong>근로복지공단</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 조기재취업수당의 \'고용되는 직업에 취직한 경우\' 범위',
        summary:
          '대법원 2009두19892(대법원, 2011.12.08 선고) 영역에서 법원은 조기재취업수당은 구직급여 수급자격자가 구직급여를 모두 받기 전에 재취직이든 자영업의 영위이든 취업의 형태를 불문하고 안정적으로 재취업해 소득을 얻을 수 있게 된 경우 실직기간을 최소화하고 안정된 재취업을 장려하기 위한 것이므로, 수급자격자가 주식회사의 대표이사에 취임해 안정적으로 재취업했다면 구 고용보험법 시행령 제84조 제1항 제1호의 \'고용되는 직업에 취직한 경우\'에 해당한다고 봄이 상당하다고 판시했습니다. 계약만료 이직 후 빠른 재취업 시 조기재취업수당 해당 여부를 검토해볼 수 있습니다.',
        takeaway: '계약만료 + 비자발성 + 조기재취업 결합 시 수급자격·조기재취업수당 검토 영역 — 고용센터 상담·심사청구 트랙.',
      },
    ],
    faq: [
      {
        question: '계약만료도 자진퇴사인가요?',
        answer:
          '<strong>근로자가 원해서가 아니라 계약만료로 그만뒀다면 비자발적 이직으로 검토되는 영역입니다.</strong> 재계약 거절 통보를 확보.',
      },
      {
        question: '이직확인서 사유가 잘못 적혀 있어요.',
        answer:
          '<strong>이직 사유가 계약만료와 다르면 정정·소명을 요청할 수 있는 영역입니다.</strong> 계약서·통보 자료를 함께 제출.',
      },
      {
        question: '피보험단위기간은 얼마나 필요한가요?',
        answer:
          '<strong>이직일 이전 18개월간 180일 이상이 원칙인 영역입니다.</strong> 고용보험 가입이력을 먼저 확인.',
      },
      {
        question: '빨리 재취업하면 추가로 받는 게 있나요?',
        answer:
          '<strong>구직급여를 모두 받기 전 안정된 직업에 재취직하면 조기재취업수당이 검토되는 영역입니다.</strong> 재취직 증빙을 준비.',
      },
      {
        question: '신청 기한이 있나요?',
        answer:
          '<strong>이직일 다음날부터 12개월 이내 수급자격을 신청해야 하는 영역입니다.</strong> 기한 내 워크넷 구직등록·신청 검토.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '계약만료 실업급여 수급', href: '/guide/unemployment/unemployment-contract-expiry-eligibility-track' },
      { label: '조기재취업수당 지급요건', href: '/guide/unemployment/unemployment-early-reemployment-allowance-eligibility-track' },
      { label: '실업급여 수급자격 불인정 이의신청', href: '/guide/unemployment/unemployment-benefit-rejection-appeal-procedure' },
      { label: '이직사유 코드 정정 거부 회사 강제', href: '/guide/unemployment/unemployment-separation-code-employer-refuse-correction-track' },
      { label: '실업급여 종합 가이드', href: '/guide/unemployment' },
    ],
  },

  // ─── 7. unemployment-workplace-relocation-commute-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-workplace-relocation-commute-track',
    keyword: '사업장 이전 통근곤란 수급',
    questionKeyword: '회사가 멀리 이전하는 바람에 출퇴근이 너무 어려워져 그만뒀어요. 정당한 이직으로 실업급여를 받았는데, 나중에 공단이 부정수급이라며 받은 돈을 다 토해내고 추가징수까지 하라고 합니다. 다툴 수 있나요?',
    ctaKeyword: '사업장 이전 통근곤란 수급·반환명령 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사업장 이전 통근곤란 수급 — 5단계 정당 이직·반환명령 점검 | 로앤가이드',
      description:
        '사업장 이전으로 통근이 어려워 그만뒀는데 공단이 부정수급 반환·추가징수 처분을 했다면 통근곤란 정당한 이직 사유 수급과 반환명령·제재처분의 재량 일탈, 심사청구까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"다니던 회사가 먼 곳으로 이전하는 바람에 출퇴근이 도저히 감당이 안 돼 결국 그만둔 근로자입니다. 통근이 너무 어려워진 점이 인정돼 정당한 이직 사유로 실업급여를 받았는데, 한참 지나 고용센터가 \'취업 사실을 제때 신고하지 않았다\'며 부정수급으로 보고 받은 구직급여를 모두 반환하라는 명령과 함께 추가징수까지 하겠다고 통보했어요. 일부 신고가 늦은 부분이 있긴 해도, 받은 돈 전부를 토해내고 그 위에 추가징수까지 하는 것이 과한 처분 같아 납득이 가지 않습니다. 이런 반환·추가징수 처분을 다툴 여지가 있는지 막막한 상태입니다." 고용보험법 제40조는 이직일 이전 18개월간 피보험단위기간 180일 이상 등을 수급요건으로 정하고, 사업장 이전 등으로 통근이 곤란해진 경우 정당한 이직 사유로 수급자격이 검토되는 영역이며, 같은 법은 거짓·부정한 방법으로 받은 구직급여의 반환과 추가징수를 정하는 영역입니다. 판례는 제재적 행정처분이 재량권의 범위를 일탈·남용했는지는 처분 사유인 위반행위의 내용과 처분으로 달성하려는 공익목적, 그로 인해 개인이 입게 될 불이익을 비교·교량해 판단하고, 고용보험법이 거짓·부정한 방법으로 받은 구직급여액의 1배를 초과하는 금액까지 반환명령과 추가징수로 환수할 수 있게 한 취지를 고려해야 한다고 본 사례 흐름이 있는 영역입니다. 통근곤란 이직 + 신고 누락 + 반환·추가징수 결합은 \'수급자격·반환명령 적정성\' 다툼이 가능한 트랙입니다. 피해자라면 ① 통근곤란 정당성 ② 신고의무 위반 범위 ③ 반환명령 적정성 ④ 추가징수 재량 ⑤ 심사청구 5중 트랙이 가능한 영역. 대응은 ① 정당성 ② 범위 ③ 반환 ④ 추가징수 ⑤ 심사 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 사업장 이전 통근곤란 수급 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 통근곤란 정당성·신고의무 위반 범위·반환명령 적정성·추가징수 재량·심사청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 통근곤란 정당성</strong> — 사업장 이전 등으로 통근이 곤란해 그만둔 정당한 이직 사유인지.</li>\n<li><strong>② 신고의무 위반 범위</strong> — 취업·소득 신고 누락이 \'거짓·부정한 방법\'에 해당하는 범위인지.</li>\n<li><strong>③ 반환명령 적정성</strong> — 반환 대상·금액이 위반 범위에 맞게 정해졌는지.</li>\n<li><strong>④ 추가징수 재량</strong> — 추가징수 처분이 재량권을 일탈·남용한 것은 아닌지.</li>\n<li><strong>⑤ 심사청구 (처분 안 날부터 90일 내)</strong> — 고용보험심사관 심사청구·재심사청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 제재적 행정처분의 재량권 일탈·남용 여부는 위반행위의 내용과 처분으로 달성하려는 공익목적, 개인이 입을 불이익을 비교·교량해 판단하는 영역. 반환·추가징수의 범위가 위반 정도에 맞는지가 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신청·심사 5단계',
        content:
          '<p><strong>A. 고용센터·고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 이직·처분 자료 보존 (즉시)</strong> — 사업장 이전 자료·통근거리·이직확인서·반환명령서·추가징수 통보 보존.</li>\n<li><strong>2단계 — 통근곤란 정당성 정리 (1주)</strong> — 사업장 이전과 통근 곤란 사정, 정당한 이직 사유 정리.</li>\n<li><strong>3단계 — 신고 누락 범위·반환 검토 (1~2주)</strong> — 취업·소득 신고 누락 범위와 반환 대상 금액 검토.</li>\n<li><strong>4단계 — 심사청구 (처분 안 날부터 90일 내)</strong> — 반환명령·추가징수의 재량 일탈·남용 주장.</li>\n<li><strong>5단계 — 재심사청구·행정소송 (제소기간 내)</strong> — 불복 시 재심사청구·취소소송 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">사업장 이전 통근곤란 수급·반환명령 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 통근곤란 정당성·신고 범위·처분 적정성 갈래입니다.</strong></p>\n<ul>\n<li><strong>사업장 이전 자료 (이전 전후 주소·시점)</strong></li>\n<li><strong>통근거리·통근시간 입증 자료 (대중교통 경로 등)</strong></li>\n<li><strong>이직확인서 (이직 사유 코드 확인)</strong></li>\n<li><strong>고용보험 가입이력 (피보험단위기간 180일)</strong></li>\n<li><strong>취업·소득 신고 내역 (신고 누락 범위)</strong></li>\n<li><strong>반환명령서·추가징수 통보서 (처분 사유·금액)</strong></li>\n<li><strong>심사청구서·소명 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 두 갈래입니다. 먼저 사업장 이전으로 통근이 곤란해 그만둔 정당한 이직 사유였는지(이전 전후 통근거리·시간으로 뒷받침), 다음으로 신고 누락이 있었더라도 반환·추가징수의 범위가 위반 정도에 비해 과중하지 않은지(재량 일탈·남용)를 처분서와 함께 정리해두는 것이 출발점입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>통근곤란 정당성</strong> — 사업장 이전으로 통근이 곤란해 그만둔 정당한 이직 사유인지.</li>\n<li><strong>신고의무 위반 범위</strong> — 취업·소득 신고 누락이 부정수급에 해당하는 범위인지.</li>\n<li><strong>반환명령 적정성</strong> — 반환 대상·금액이 위반 범위에 맞는지.</li>\n<li><strong>추가징수 재량</strong> — 추가징수가 재량권을 일탈·남용했는지.</li>\n<li><strong>심사·제소 기한</strong> — 심사청구·행정소송 기한 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 고용센터 1350</strong></li>\n<li><strong>근로복지공단</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부정수급 반환·추가징수 제재처분의 재량권 일탈·남용 판단',
        summary:
          '대법원 2020두31323(대법원, 2020.05.14 선고) 영역에서 법원은 제재적 행정처분이 재량권의 범위를 일탈·남용했는지는 처분 사유인 위반행위의 내용과 처분으로 달성하려는 공익목적, 그로 인해 개인이 입게 될 불이익을 비교·교량해 판단하여야 하고, 고용보험법이 거짓이나 그 밖의 부정한 방법으로 지급받은 구직급여액의 1배를 초과하는 금액에 대해서도 반환명령과 추가징수를 통해 환수할 수 있도록 규정한 취지를 고려해야 하며, 처분의 정도에 관해 재량이 인정되는 금전 부과처분이 재량권을 일탈·남용한 경우 법원이 적정하다고 인정되는 부분을 초과한 부분만 취소할 수는 없다고 판시했습니다. 통근곤란 이직 후 반환·추가징수 처분을 다툴 때 재량권 일탈·남용을 검토해볼 수 있습니다.',
        takeaway: '통근곤란 이직 + 신고 누락 + 반환·추가징수 결합 시 수급자격·반환명령 적정성·재량 일탈 검토 영역 — 고용센터 상담·심사청구 트랙.',
      },
    ],
    faq: [
      {
        question: '사업장이 멀리 이전해 그만둬도 실업급여가 되나요?',
        answer:
          '<strong>통근이 곤란해 부득이 그만뒀다면 정당한 이직 사유로 수급자격이 검토되는 영역입니다.</strong> 이전 전후 통근거리를 정리.',
      },
      {
        question: '신고를 늦게 했다고 받은 돈을 다 토해내야 하나요?',
        answer:
          '<strong>신고 누락 범위와 반환 대상·금액이 위반 정도에 맞는지가 다툼이 되는 영역입니다.</strong> 신고 내역과 처분서를 대조.',
      },
      {
        question: '추가징수까지 하는 건 과한 거 아닌가요?',
        answer:
          '<strong>추가징수가 재량권을 일탈·남용했는지를 다툴 수 있는 영역입니다.</strong> 위반 내용과 불이익을 비교 정리.',
      },
      {
        question: '처분에 불복하려면 어떻게 하나요?',
        answer:
          '<strong>고용보험심사관 심사청구·재심사청구 또는 행정소송으로 다투는 영역입니다.</strong> 단계별 기한을 함께 확인.',
      },
      {
        question: '심사청구 기한이 있나요?',
        answer:
          '<strong>심사청구는 처분을 안 날부터 90일 이내가 원칙인 영역입니다.</strong> 기한 도과 전 신속 진행 검토.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '가족 돌봄 통근 곤란 이직 고용보험 가입', href: '/guide/unemployment/unemployment-family-care-commute-difficulty-resignation-track' },
      { label: '실업급여 종합 가이드', href: '/guide/unemployment' },
      { label: '실업급여 거절 사유 5가지', href: '/guide/unemployment/benefit-application-rejection-5-reasons' },
      { label: '실업급여 받으면서 알바 가능 여부', href: '/guide/unemployment/part-time-work-while-receiving-benefit' },
      { label: '실업급여 임신 출산 수급기간 연장 신청', href: '/guide/unemployment/unemployment-pregnancy-childbirth-extended-period-track' },
    ],
  },

  // ─── 8. retirement-interim-settlement-requirement-track ───
  {
    domain: 'retirement',
    slug: 'retirement-interim-settlement-requirement-track',
    keyword: '퇴직금 중간정산 요건 효력',
    questionKeyword: '예전에 회사와 퇴직금 중간정산을 해서 받았는데, 나중에 보니 매달 받던 가족수당과 상여금 일부가 평균임금에서 빠진 채 계산됐어요. 중간정산이라도 이렇게 적게 산정한 퇴직금을 다시 다툴 수 있나요?',
    ctaKeyword: '퇴직금 중간정산 평균임금 누락·재산정 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '퇴직금 중간정산 요건 효력 — 5단계 평균임금·재산정 점검 | 로앤가이드',
      description:
        '중간정산 퇴직금에서 매달 받던 가족수당·상여가 평균임금에서 빠졌다면 근로자퇴직급여보장법상 중간정산 요건·효력과 급여규정 기초 평균임금 재산정, 시효 3년 청구까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"예전에 회사와 퇴직금 중간정산을 해서 그에 따라 산정된 퇴직금을 받은 근로자입니다. 그때는 별생각 없이 받았는데, 나중에 따져보니 매달 꼬박꼬박 받던 가족수당과 정기적으로 나오던 상여금 일부가 평균임금 계산에서 통째로 빠져 있었어요. 회사는 \'근로자퇴직급여 보장법이 보장한 금액에는 미달하지 않으니 문제없다\'는 말만 하는데, 회사 급여규정에는 분명히 퇴직금 산정 기초에 그 수당들이 포함돼 있는 것 같아 납득이 가지 않습니다. 중간정산이라도 이렇게 적게 산정된 퇴직금을 다시 다툴 여지가 있는지 막막한 상태입니다." 근로자퇴직급여 보장법 제8조 제1항은 계속근로기간 1년에 대해 30일분 이상의 평균임금을 퇴직금으로 지급하도록 하한을 정하고, 같은 법 제8조 제2항은 일정 요건을 갖춘 경우 퇴직금 중간정산을 허용하는 영역입니다. 판례는 퇴직 당시 시행하는 단체협약이나 취업규칙의 퇴직금규정 등이 있으면 사용자는 그에 따라 산정한 퇴직금을 지급해야 하고, 그 금액이 퇴직급여법 제8조 제1항이 정한 하한에 미치지 못하면 하한을 지급해야 하지만, 하한을 초과한다고 해서 퇴직금규정에서 정한 것보다 불리하게 지급해도 된다는 뜻은 아니며, 급여규정상 퇴직금 산정 기초에 포함되는 가족수당·상여금을 평균임금에서 제외하고 산정한 중간정산퇴직금 지급은 허용될 수 없다고 본 사례 흐름이 있는 영역입니다. 중간정산 + 평균임금 누락 + 급여규정 결합은 \'중간정산 요건·평균임금 재산정\' 다툼이 가능한 트랙입니다. 피해자라면 ① 급여규정 해석 ② 평균임금 포함 항목 ③ 하한·규정 우선 ④ 재산정 ⑤ 청구 5중 트랙이 가능한 영역. 대응은 ① 규정 ② 항목 ③ 우선 ④ 재산정 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중간정산 퇴직금 평균임금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 급여규정 해석·평균임금 포함 항목·하한/규정 우선·재산정·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 급여규정 해석</strong> — 급여규정상 퇴직금 산정 기초 임금에 가족수당·상여 등이 포함되는지.</li>\n<li><strong>② 평균임금 포함 항목</strong> — 매월 지급된 가족수당·정기 상여가 평균임금에 산입되는 임금인지.</li>\n<li><strong>③ 하한·규정 우선</strong> — 퇴직급여법 하한(1년당 30일분 평균임금)에 더해 급여규정을 불리하게 적용할 수 없는지.</li>\n<li><strong>④ 재산정</strong> — 누락 항목 산입 시 평균임금 재산정 → 중간정산퇴직금 차액 도출.</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정·민사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 퇴직금규정 등에 따라 산정한 퇴직금은 법정 하한을 넘더라도 규정보다 불리하게 지급할 수 없으며, 급여규정상 퇴직금 산정 기초인 평균임금에 포함되는 가족수당·상여를 제외하고 산정한 중간정산퇴직금 지급은 허용되지 않는 영역. 급여규정 해석이 다툼의 출발점인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong>A. 고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정산·급여 자료 보존 (즉시)</strong> — 중간정산 동의서·정산내역·급여명세서·급여규정 보존.</li>\n<li><strong>2단계 — 급여규정·포함 항목 정리 (1~2주)</strong> — 급여규정상 퇴직금 산정 기초와 가족수당·상여 포함 여부 정리.</li>\n<li><strong>3단계 — 평균임금 재산정 (2~3주)</strong> — 누락 항목을 산입한 평균임금 재산정 → 중간정산퇴직금 차액 도출.</li>\n<li><strong>4단계 — 고용노동부 진정·내용증명 (시효 3년 내)</strong> — 1350 진정 또는 회사 청구.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">중간정산 평균임금 누락·재산정 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 급여규정·평균임금·재산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>퇴직금 중간정산 동의서·정산내역 (산정 기준)</strong></li>\n<li><strong>급여명세서 (가족수당·상여 지급 내역)</strong></li>\n<li><strong>급여규정·취업규칙 (퇴직금 산정 기초 임금)</strong></li>\n<li><strong>단체협약 (퇴직금·평균임금 규정)</strong></li>\n<li><strong>가족수당·상여 지급 이력 (정기·계속성)</strong></li>\n<li><strong>중간정산 당시 평균임금 산정표 (회사 산정)</strong></li>\n<li><strong>평균임금·퇴직금 재산정표</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'급여규정상 퇴직금 산정 기초\'입니다. 회사 급여규정이 가족수당·상여를 평균임금에 포함하도록 정하고 있다면, 법정 하한을 넘는다는 이유만으로 그 항목을 빼고 산정한 중간정산퇴직금 지급은 허용되지 않는 영역. 급여규정·지급 이력과 회사 산정표를 대조해 재산정 차액을 정리해두면 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>급여규정 해석</strong> — 퇴직금 산정 기초에 가족수당·상여가 포함되는지.</li>\n<li><strong>평균임금 포함 항목</strong> — 매월 지급된 수당·정기 상여가 평균임금에 산입되는지.</li>\n<li><strong>규정 우선</strong> — 법정 하한을 넘어도 규정보다 불리하게 지급할 수 없는지.</li>\n<li><strong>재산정 차액</strong> — 누락 항목 산입 시 중간정산퇴직금 차액이 발생하는지.</li>\n<li><strong>시효 관리</strong> — 퇴직금·차액 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (퇴직금 체불 신고·진정)</strong></li>\n<li><strong>근로복지공단 (퇴직연금)</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 급여규정상 평균임금과 중간정산퇴직금 산정의 한계',
        summary:
          '대법원 2016다228802(대법원, 2018.08.30 선고) 영역에서 법원은 근로자 퇴직 당시 시행하는 단체협약이나 취업규칙의 퇴직금규정 등이 있으면 사용자는 그에 따라 산정한 퇴직금을 지급해야 하고, 그 금액이 근로자퇴직급여 보장법 제8조 제1항이 정한 하한에 미치지 못하면 하한을 지급해야 하지만 하한을 초과한다고 해서 퇴직금규정에서 정한 것보다 불리하게 지급해도 된다는 뜻은 아니며, 매월 지급하던 가족수당과 특별상여금 중 연말상여금의 일부가 급여규정상 퇴직금 산정 기초인 평균임금에 포함되는데도 이를 제외하고 산정한 중간정산퇴직금 지급은 허용될 수 없다고 판시했습니다. 중간정산 퇴직금에서 가족수당·상여가 빠졌다면 급여규정 해석과 재산정을 검토해볼 수 있습니다.',
        takeaway: '중간정산 + 평균임금 누락 + 급여규정 결합 시 급여규정 해석·평균임금 산입·중간정산퇴직금 재산정 검토 영역 — 진정·민사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '중간정산으로 받았는데도 다시 다툴 수 있나요?',
        answer:
          '<strong>급여규정상 포함될 임금이 빠졌다면 재산정 차액을 다툴 수 있는 영역입니다.</strong> 정산내역과 급여규정을 대조.',
      },
      {
        question: '법정 하한만 넘으면 회사 마음대로 산정해도 되나요?',
        answer:
          '<strong>하한을 넘어도 급여규정보다 불리하게 지급할 수 없는 영역입니다.</strong> 급여규정의 산정 기초를 확인.',
      },
      {
        question: '가족수당·상여도 평균임금에 들어가나요?',
        answer:
          '<strong>급여규정상 산정 기초에 포함되고 정기·계속 지급됐다면 산입되는 영역입니다.</strong> 지급 이력을 정리.',
      },
      {
        question: '차액이 얼마나 되는지 어떻게 아나요?',
        answer:
          '<strong>누락 항목을 산입해 평균임금을 재산정하면 차액이 산출되는 영역입니다.</strong> 재산정표로 확인.',
      },
      {
        question: '차액 청구 시효는요?',
        answer:
          '<strong>퇴직금·차액 청구 시효는 3년인 영역입니다.</strong> 청구권 발생일로부터 3년 내 청구.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '중간정산 퇴직금 다툼', href: '/guide/retirement/retirement-interim-settlement-track' },
      { label: '특별상여금 평균임금 산입 퇴직금 판단', href: '/guide/retirement/retirement-pay-special-bonus-average-wage-inclusion-track' },
      { label: '퇴직급여 종합 가이드', href: '/guide/retirement' },
      { label: '퇴직금 미지급 신고 절차 4단계 타임라인', href: '/guide/retirement/unpaid-retirement-report-procedure' },
    ],
  },

  // ─── 9. retirement-executive-employee-status-track ───
  {
    domain: 'retirement',
    slug: 'retirement-executive-employee-status-track',
    keyword: '임원 근로자성 퇴직금',
    questionKeyword: '직함은 전무·임원이었지만 실제로는 회사 지시를 받으며 정해진 업무만 했어요. 그런데 회사가 임원이라 근로자가 아니라며 퇴직금을 안 주려 하고, 고문으로 일한 기간도 근속에서 빼버렸습니다. 다툴 수 있나요?',
    ctaKeyword: '임원 근로자성·근속기간 통산 퇴직금 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '임원 근로자성 퇴직금 — 5단계 종속성·근속기간 점검 | 로앤가이드',
      description:
        '직함은 임원이지만 실제로는 회사 지시를 받으며 종속적으로 일했는데 퇴직금을 못 받았다면 사용종속관계 기준 임원의 근로자성과 고문 기간 근속 통산·퇴직금 재산정까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"명함에는 전무·임원이라고 적혀 있었지만, 실제로는 회사의 지시를 받으며 정해진 업무만 수행해 온 근로자입니다. 임원이라는 직함과 달리 출퇴근·업무 내용 모두 회사가 정했고 독자적인 결정권도 거의 없었는데, 막상 그만두자 회사는 \'임원은 근로자가 아니라 퇴직금이 없다\'고 합니다. 게다가 처음 고문으로 위촉돼 일한 기간은 근속기간에서 통째로 빼버려, 퇴직금 자체가 크게 줄어버렸어요. 직함이 임원이라는 이유만으로 근로자성과 그동안 일한 기간을 부정당하는 게 맞는지, 퇴직금을 다툴 여지가 있는지 막막한 상태입니다." 근로기준법 제2조는 근로자·임금·평균임금을 정하고, 근로자퇴직급여 보장법 제8조는 사용자가 계속근로기간 1년에 대해 30일분 이상의 평균임금을 퇴직금으로 지급하도록 정하는 영역입니다. 판례는 사용자가 근로자퇴직급여 보장법 제8조에 따라 퇴직금 제도를 설정한 경우 계속근로기간은 원칙적으로 근로자의 재직기간을 말하므로 재직기간 중 일부를 퇴직금 산정 기초 근속기간에서 제외하는 것은 그러한 내용이 단체협약·취업규칙에 규정돼 있고 그렇게 산정한 퇴직금이 법정 하한을 충족하는 등 특별한 사정이 없는 한 허용되지 않으며, 고문으로 재직한 기간을 근속기간에서 제외할 근거가 없는데도 제외한 것은 위법하다고 본 사례 흐름이 있는 영역입니다. 임원 직함 + 종속 근로 + 근속기간 누락 결합은 \'근로자성·근속기간 통산\' 다툼이 가능한 트랙입니다. 피해자라면 ① 근로자성 ② 종속성 요소 ③ 근속기간 통산 ④ 퇴직금 재산정 ⑤ 청구 5중 트랙이 가능한 영역. 대응은 ① 근로자성 ② 종속성 ③ 근속 ④ 재산정 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 임원 근로자성 퇴직금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 근로자성·종속성 요소·근속기간 통산·퇴직금 재산정·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 근로자성</strong> — 직함이 임원이라도 실질이 종속적 관계에서 임금 목적 근로를 제공했는지.</li>\n<li><strong>② 종속성 요소</strong> — 업무 지정·지휘감독·근무시간/장소 구속·독자적 결정권 유무 등 정황.</li>\n<li><strong>③ 근속기간 통산</strong> — 고문 등 재직기간 일부를 근거 없이 근속에서 제외할 수 없는지.</li>\n<li><strong>④ 퇴직금 재산정</strong> — 근속기간 통산 시 평균임금 기준 퇴직금 재산정 → 차액 도출.</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정·민사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 계속근로기간은 원칙적으로 재직기간을 말하므로 재직기간 일부를 근속에서 제외하는 것은 단체협약·취업규칙 규정 등 특별한 사정이 없는 한 허용되지 않는 영역. 직함이 아니라 종속 근로의 실질과 근속기간 통산이 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong>A. 고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 재직·업무 자료 보존 (즉시)</strong> — 위촉장·근로계약·업무 지시·급여 자료·재직증명 보존.</li>\n<li><strong>2단계 — 근로자성·종속성 정리 (1~2주)</strong> — 업무 지정·지휘감독·시간/장소 구속 등 종속성 정황 정리.</li>\n<li><strong>3단계 — 근속기간 통산·재산정 (2~3주)</strong> — 고문 등 재직기간 통산 → 평균임금 기준 퇴직금 재산정.</li>\n<li><strong>4단계 — 고용노동부 진정·내용증명 (시효 3년 내)</strong> — 1350 진정 또는 회사 청구.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임원 근로자성·근속기간 통산 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 근로자성·종속성·근속기간 갈래입니다.</strong></p>\n<ul>\n<li><strong>위촉장·임명장·근로계약서 (지위·계약 형태)</strong></li>\n<li><strong>업무 지시·지휘감독 자료 (메신저·결재)</strong></li>\n<li><strong>출퇴근·근무 기록 (시간·장소 구속)</strong></li>\n<li><strong>급여·보수 지급 내역 (정기 지급 패턴)</strong></li>\n<li><strong>재직증명·인사기록 (고문·임원·전체 재직기간)</strong></li>\n<li><strong>취업규칙·인사규정 (근속·퇴직금 규정)</strong></li>\n<li><strong>평균임금·퇴직금 재산정표</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'직함\'이 아니라 \'일한 실질\'과 \'전체 재직기간\'입니다. 임원·고문이라는 명칭과 무관하게 회사 지휘·감독을 받으며 종속적으로 일했는지 정리하고, 재직기간 일부를 근속에서 빼려면 단체협약·취업규칙 근거가 있어야 하므로 전체 재직기간을 인사기록으로 통산해 재산정 차액을 도출해두면 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>근로자성</strong> — 직함이 아니라 종속적 근로의 실질인지.</li>\n<li><strong>종속성 요소</strong> — 지휘감독·시간/장소 구속·독자적 결정권 유무.</li>\n<li><strong>근속기간 통산</strong> — 고문 등 재직기간을 근거 없이 제외할 수 없는지.</li>\n<li><strong>재산정 차액</strong> — 근속 통산 시 퇴직금 차액이 발생하는지.</li>\n<li><strong>시효 관리</strong> — 퇴직금·차액 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (퇴직금 체불 신고·진정)</strong></li>\n<li><strong>근로복지공단 (퇴직연금)</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임원의 근로자성과 근속기간 일부 제외의 허용 여부',
        summary:
          '대법원 2011다42324(대법원, 2011.10.27 선고) 영역에서 법원은 사용자가 근로자퇴직급여 보장법 제8조에 따라 퇴직금 제도를 설정한 경우 계속근로기간 1년에 대해 30일분 이상의 평균임금을 퇴직금으로 지급해야 하는데 이때 계속근로기간은 원칙적으로 근로자의 재직기간을 말하므로 재직기간 중 일부를 퇴직금 산정 기초가 되는 근속기간에서 제외하는 것은 그러한 내용이 단체협약·취업규칙에 규정돼 있고 그렇게 산정한 퇴직금이 법정 하한을 충족하는 등 특별한 사정이 없는 한 허용되지 않으며, 회사 고문으로 재직한 기간을 근속기간에서 제외할 근거가 없는데도 이를 제외한 원심판결에 법리오해의 위법이 있다고 판시했습니다. 임원·고문 직함으로 퇴직금이 줄었다면 근로자성과 근속기간 통산을 검토해볼 수 있습니다.',
        takeaway: '임원 직함 + 종속 근로 + 근속기간 누락 결합 시 근로자성·근속기간 통산·퇴직금 재산정 검토 영역 — 진정·민사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '임원이면 퇴직금이 없는 게 맞나요?',
        answer:
          '<strong>직함이 임원이라도 종속적 근로의 실질이면 근로자성이 검토되는 영역입니다.</strong> 지휘감독·구속 정황을 정리.',
      },
      {
        question: '고문으로 일한 기간을 빼버렸어요.',
        answer:
          '<strong>재직기간 일부 제외는 단체협약·취업규칙 근거 등 특별한 사정이 없으면 허용되지 않는 영역입니다.</strong> 전체 재직기간을 통산 정리.',
      },
      {
        question: '근로자성은 무엇으로 판단하나요?',
        answer:
          '<strong>업무 지정·지휘감독·시간/장소 구속 등 종속성의 실질로 판단하는 영역입니다.</strong> 업무 지시·근무 기록을 확보.',
      },
      {
        question: '근속기간을 합치면 퇴직금이 얼마나 늘어나나요?',
        answer:
          '<strong>전체 재직기간을 통산해 평균임금으로 재산정하면 차액이 산출되는 영역입니다.</strong> 재산정표로 확인.',
      },
      {
        question: '차액 청구 시효는요?',
        answer:
          '<strong>퇴직금·차액 청구 시효는 3년인 영역입니다.</strong> 퇴직일로부터 3년 내 청구.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '임원 퇴직금 근로자성', href: '/guide/retirement/retirement-executive-officer-employee-status-track' },
      { label: '계속근로기간 산정 퇴직금', href: '/guide/retirement/retirement-continuous-service-period-track' },
      { label: '퇴직급여 종합 가이드', href: '/guide/retirement' },
      { label: '퇴직금 노동청 신고 민사청구 차이', href: '/guide/retirement/retirement-pay-labor-report-vs-civil-claim' },
    ],
  },

  // ─── 10. industrial-accident-mental-stress-disorder-track ───
  {
    domain: 'industrial-accident',
    slug: 'industrial-accident-mental-stress-disorder-track',
    keyword: '업무상 정신질환 산재',
    questionKeyword: '교대근무와 과중한 업무에 시달리던 가족이 흉통으로 쓰러져 치료받다 끝내 사망했어요. 근로복지공단은 기존 질환 탓이라며 유족급여를 안 주는데, 업무상 과로·스트레스 때문이라고 다툴 수 있나요?',
    ctaKeyword: '업무상 과로·스트레스 질병 인과관계 산재 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '업무상 정신·과로 질환 산재 — 5단계 인과관계·유족급여 점검 | 로앤가이드',
      description:
        '교대근무·과중 업무로 쓰러진 가족이 끝내 사망했는데 유족급여가 부지급됐다면 산재보험법상 과로·스트레스 질병의 업무상 상당인과관계와 1차 후 2차 재해 인정, 심사청구까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오랜 기간 주야간 교대근무와 과중한 업무에 시달려 온 가족이 어느 날 갑자기 흉통과 호흡곤란으로 쓰러져 병원에 실려 갔고, 잠시 요양 후 다시 출근했다가 끝내 사망한 유족입니다. 평소 누적된 과로와 추위 노출 등 업무 환경이 분명히 영향을 미쳤다고 느끼는데, 근로복지공단은 \'고령이고 기존에 심혈관 질환이 있었다\', \'업무와 사망 사이 상당인과관계를 인정하기 어렵다\'며 유족급여와 장의비를 지급하지 않았어요. 처음 쓰러진 일(1차)과 그 뒤 사망(2차)이 이어진 흐름인데도 업무 관련성을 부정당한 게 맞는지 납득이 가지 않습니다. 과로·스트레스로 인한 질병을 산재로 인정받아 유족급여를 받을 수 있는지 막막한 상태입니다." 산업재해보상보험법 제5조 제1호는 업무상 재해를 업무상 사유에 따른 부상·질병·장해·사망으로 정하고, 제37조는 업무와 재해 사이 상당인과관계가 있는 업무상 사고·질병을 업무상 재해로 정하며, 같은 법은 유족급여·장의비를 정하는 영역입니다. 판례는 업무상 사유에 따른 사망으로 인정하려면 업무와 사망 원인 질병 사이 인과관계가 있어야 하나 업무상 과로·스트레스가 질병의 주된 발생원인에 겹쳐 질병을 유발·악화시켰다면 인과관계가 있고, 그 인과관계는 의학적·자연과학적으로 명백히 증명할 필요 없이 제반 사정상 상당인과관계가 추단되면 증명이 있다고 보아야 하며, 1차 재해가 업무상 재해라면 그 후 자연발생적으로 악화돼 발생한 2차 재해도 업무상 재해로 볼 여지가 충분하다고 본 사례 흐름이 있는 영역입니다. 과로·교대근무 + 기존 질환 + 유족급여 부지급 결합은 \'업무상 질병 인과관계·2차 재해\' 검토가 가능한 트랙입니다. 피해자라면 ① 업무상 과로 ② 상당인과관계 ③ 기존 질환 악화 ④ 1·2차 재해 연속 ⑤ 심사청구 5중 트랙이 가능한 영역. 대응은 ① 과로 ② 인과관계 ③ 악화 ④ 2차 재해 ⑤ 심사 5단계로 검토해볼 수 있습니다. 유족이라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 업무상 과로·스트레스 질병 산재 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 업무상 과로·상당인과관계·기존 질환 악화·1·2차 재해 연속·심사청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 업무상 과로</strong> — 장시간 근로·주야간 교대 등 육체적·정신적 과로가 누적됐는지.</li>\n<li><strong>② 상당인과관계</strong> — 과로·스트레스가 질병의 주된 원인에 겹쳐 유발·악화시켰는지(제37조).</li>\n<li><strong>③ 기존 질환 악화</strong> — 기초 질병이 직무 과중으로 자연 진행 이상으로 급격히 악화됐는지.</li>\n<li><strong>④ 1·2차 재해 연속</strong> — 1차 재해가 업무상 재해면 그 후 악화된 2차 재해도 업무상 재해인지.</li>\n<li><strong>⑤ 심사청구 (처분 안 날부터 90일 내)</strong> — 부지급 시 근로복지공단 심사청구·재심사청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 인과관계는 의학적으로 명백히 증명할 필요 없이 제반 사정상 상당인과관계가 추단되면 인정되고, 기초 질병이 직무 과중으로 급격히 악화된 경우도 포함되며 1차 재해가 업무상이면 자연발생적으로 악화돼 발생한 2차 재해도 업무상 재해로 볼 여지가 충분한 영역. 과로 누적과 1·2차 재해 연속성이 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 유족급여·심사 5단계',
        content:
          '<p><strong>A. 근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·근무 자료 보존 (즉시)</strong> — 진단서·진료기록·사망 경위·근무표·업무 부담 자료 보존.</li>\n<li><strong>2단계 — 과로·인과관계 정리 (1~2주)</strong> — 근로시간·교대근무·업무 강도와 1·2차 재해 연속성 정리.</li>\n<li><strong>3단계 — 유족급여·장의비 청구 (근로복지공단)</strong> — 유족급여·장의비 청구서·의학적 소견서 제출.</li>\n<li><strong>4단계 — 심사청구 (부지급 시, 처분 안 날부터 90일 내)</strong> — 근로복지공단 심사청구·재심사청구.</li>\n<li><strong>5단계 — 행정소송 (제소기간 내)</strong> — 부지급 처분 취소소송 검토(상당인과관계 추단 주장).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 산재 요양급여 신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">업무상 과로·스트레스 질병 인과관계 산재 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=industrial-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 과로·인과관계·1·2차 재해 갈래입니다.</strong></p>\n<ul>\n<li><strong>진단서·진료기록 (발병·사망 원인 질병)</strong></li>\n<li><strong>근무표·교대근무 기록 (주야간 교대·장시간 근로)</strong></li>\n<li><strong>업무량·업무 강도 자료 (만성적 과중 업무)</strong></li>\n<li><strong>1차 재해 관련 자료 (발병·요양 경위)</strong></li>\n<li><strong>근무환경 자료 (추위·야외 작업 등 영향 요인)</strong></li>\n<li><strong>유족급여 부지급 처분서 (처분 사유·시점)</strong></li>\n<li><strong>의학적 소견서 (업무 관련성·기존 질환 악화)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'과로·스트레스와 질병 사이 상당인과관계\'입니다. 인과관계는 의학적으로 명백히 증명할 필요 없이 제반 사정상 추단되면 인정되고, 기초 질병이 직무 과중으로 급격히 악화된 경우도 포함되는 영역. 1차 재해가 업무상 재해였다면 그 후 악화로 발생한 2차 재해의 연속성을 근무표·진료기록으로 함께 정리해두는 것이 출발점입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>상당인과관계</strong> — 과로·스트레스가 질병 유발·악화에 겹쳤는지.</li>\n<li><strong>증명의 정도</strong> — 의학적으로 명백히 증명하지 않아도 추단되면 인정되는지.</li>\n<li><strong>기존 질환 악화</strong> — 기초 질병이 직무 과중으로 자연 진행 이상으로 악화됐는지.</li>\n<li><strong>1·2차 재해 연속</strong> — 1차 재해가 업무상이면 2차 재해도 업무상 재해인지.</li>\n<li><strong>심사·제소 기한</strong> — 심사청구·행정소송 기한 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>근로복지공단 1588-0075 (산재 요양·급여 상담)</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>관할 근로복지공단 지사</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 업무상 과로·스트레스 질병의 상당인과관계와 2차 재해 인정',
        summary:
          '대법원 2019두62604(대법원, 2020.05.28 선고) 영역에서 법원은 산업재해보상보험법 제5조 제1호의 \'업무상의 사유에 따른 사망\'으로 인정하려면 업무와 사망 원인 질병 사이 인과관계가 있어야 하나 업무상 과로나 스트레스가 질병의 주된 발생원인에 겹쳐 질병을 유발 또는 악화시켰다면 인과관계가 있고, 그 인과관계는 의학적·자연과학적으로 명백히 증명할 필요 없이 제반 사정상 상당인과관계가 추단되면 증명이 있다고 보아야 하며 기초 질병이 직무의 과중 등으로 자연적인 진행속도 이상으로 급격히 악화된 경우도 포함되고, 1차 재해가 업무상 재해라면 그 후 자연발생적으로 악화돼 발생한 2차 재해도 업무에 기인한 업무상 재해로 볼 여지가 충분하다는 취지로 판시했습니다. 과로·교대근무로 인한 사망의 유족급여 부지급을 다툴 때 이 기준을 검토해볼 수 있습니다.',
        takeaway: '과로·교대근무 + 기존 질환 + 유족급여 부지급 결합 시 업무상 질병 인과관계·기존 질환 악화·2차 재해 검토 영역 — 근로복지공단 상담·심사청구 트랙.',
      },
    ],
    faq: [
      {
        question: '기존 질환이 있었어도 산재가 되나요?',
        answer:
          '<strong>직무 과중으로 자연 진행 이상 급격히 악화됐다면 상당인과관계가 검토되는 영역입니다.</strong> 근무 부담과 의학적 소견을 정리.',
      },
      {
        question: '의학적으로 명백히 증명해야만 인정되나요?',
        answer:
          '<strong>제반 사정상 상당인과관계가 추단되면 증명이 있다고 보는 영역입니다.</strong> 근로시간·업무 강도 자료를 모아 정리.',
      },
      {
        question: '처음 쓰러진 일과 사망이 따로 처리됐어요.',
        answer:
          '<strong>1차 재해가 업무상이면 그 후 악화된 2차 재해도 업무상 재해로 볼 여지가 있는 영역입니다.</strong> 1·2차 재해 연속성을 정리.',
      },
      {
        question: '부지급됐는데 어떻게 다투나요?',
        answer:
          '<strong>근로복지공단 심사청구·재심사청구 또는 행정소송으로 다투는 영역입니다.</strong> 단계별 기한을 함께 확인.',
      },
      {
        question: '심사청구 기한이 있나요?',
        answer:
          '<strong>심사청구는 처분을 안 날부터 90일 이내가 원칙인 영역입니다.</strong> 기한 도과 전 신속 진행 검토.',
      },
    ],
    cta: { text: '산재 요양급여 신청 순서, AI로 정리하기', link: '/chat?domain=industrial-accident' },
    internalLinks: [
      { label: '야간교대 과로 뇌출혈 산재 요양급여 절차', href: '/guide/industrial-accident/industrial-accident-night-shift-cerebral-hemorrhage-overwork-track' },
      { label: '근골격계 질환 산재', href: '/guide/industrial-accident/industrial-accident-musculoskeletal-disease-track' },
      { label: '과로 뇌심혈관 질환 산재 인정', href: '/guide/industrial-accident/industrial-accident-overwork-cardiac-track' },
      { label: '교대근무 과로 2차 재해 사망 유족급여 업무상 재해 절차', href: '/guide/industrial-accident/industrial-accident-shift-work-overwork-secondary-fatal-survivor-track' },
      { label: '소음 작업 소음성 난청 산재 요양급여 절차', href: '/guide/industrial-accident/industrial-accident-noise-occupational-hearing-loss-track' },
    ],
  },
];
