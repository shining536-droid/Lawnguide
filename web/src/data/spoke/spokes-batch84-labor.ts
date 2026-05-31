import { SpokePage } from '../spoke-pages';

// batch84 dismissal(3) + wage(2) + unemployment(2) + retirement(2) + industrial-accident(1) — 10개 (2026-06-01)
//
// 고유 존재 이유:
// 1. dismissal-probation-final-hiring-refusal-track — 단순 해고 분기와 달리 '수습(시용)기간 중 본채용 거부'가 유보된 해약권 행사로서 객관적·합리적 이유와 사회통념상 상당성을 갖춰야 하는지, 근무성적평정의 공정성' 판단형 트랙. 시용 본채용 거부의 정당성·평정 공정성이 핵심.
// 2. dismissal-workplace-harassment-retaliation-track — 단순 징계해고 분기와 달리 '직장내괴롭힘 신고 후 보복성 해고에서 인사위원회 구성·취업규칙 개정의 절차 정당성·불이익변경' 판단형 트랙. 보복 동기·징계 절차 정당성이 핵심.
// 3. dismissal-fixed-term-renewal-expectation-track — 단순 계약만료 분기와 달리 '기간제 갱신기대권·정년 후 재고용 기대권이 형성된 경우 합리적 이유 없는 갱신거절의 효력(무효)과 사용자 증명책임' 판단형 트랙. 갱신기대권·갱신거절 합리성 증명책임이 핵심.
// 4. wage-unused-annual-leave-pay-track — 단순 임금체불 분기와 달리 '연차휴가 사용촉진 조치에도 지정일 출근·근로 제공 시 미사용 연차수당 보상의무 존속' 판단형 트랙. 사용촉진 면제요건 미충족·노무수령거부 명확성이 핵심.
// 5. wage-intermediate-exploitation-subcontract-track — 단순 임금 분기와 달리 '도급계약 형식이라도 실질 종속관계면 근로자성 인정, 미지급 임금·연차수당(통상임금 기준) 청구' 판단형 트랙. 계약 형식 아닌 실질 종속성·근로자성이 핵심.
// 6. unemployment-harassment-voluntary-resignation-track — 단순 자진퇴사 분기와 달리 '직장내괴롭힘으로 인한 자진퇴사의 정당한 이직 사유 수급자격과 부정수급 판단의 「허위 기타 부정한 방법」 범위' 절차형 트랙. 괴롭힘 자진퇴사 수급·부정수급 해당성이 핵심.
// 7. unemployment-illness-injury-separation-track — 단순 질병퇴사 분기와 달리 '질병·부상으로 인한 비자발적 이직 수급자격과 구직급여 기준 평균임금 산정(초과운송수입금 등 임금 포함)' 절차형 트랙. 질병 퇴사 수급·평균임금 산정 범위가 핵심.
// 8. retirement-repeated-fixed-term-continuous-service-track — 단순 퇴직금 분기와 달리 '반복갱신 기간제의 계속근로기간 통산과 퇴직금 분할약정·DC형 퇴직연금 부담금 차액 청구' 판단형 트랙. 반복갱신 계속근로 통산·분할약정 무효가 핵심.
// 9. retirement-average-wage-bonus-inclusion-track — 단순 퇴직금 분기와 달리 '상여금이 평균임금 산정 기초 임금에 포함되기 위한 요건(정기·일률·지급의무)과 퇴직금 재산정' 판단형 트랙. 상여 임금성 요건·평균임금 산입이 핵심.
// 10. industrial-accident-commute-recognition-track — batch83 근골격계 퇴직후 분기와 달리 '출퇴근 재해 인정과 업무상 질병의 상당인과관계 판단(복수 사업장 업무 종합·고용노동부고시의 행정규칙성)' 절차형 트랙. 출퇴근·업무상 질병 인과관계 종합 판단이 핵심.

export const spokesBatch84Labor: SpokePage[] = [
  // ─── 1. dismissal-probation-final-hiring-refusal-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-probation-final-hiring-refusal-track',
    keyword: '수습 본채용 거부',
    questionKeyword: '수습기간이 끝나갈 무렵 회사가 "평가가 낮다"며 본채용을 거부했어요. 어떤 기준으로 평가했는지 설명도 없었는데, 수습이라는 이유만으로 이렇게 내보내도 되는 건지 다툴 수 있나요?',
    ctaKeyword: '수습 본채용 거부 정당성·평정 공정성 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '수습 본채용 거부 — 5단계 정당성·평정 공정성 점검 | 로앤가이드',
      description:
        '수습기간 만료로 본채용을 거부당했다면 객관적·합리적 이유·근무성적평정 공정성·구제 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"수습(시용)으로 입사해 정상적으로 근무했는데, 수습기간이 끝나갈 무렵 회사가 \'근무성적 평가가 낮다\'며 본채용을 거부한 근로자입니다. 그런데 무엇을 어떤 기준으로 평가했는지, 다른 사람과 비교해 제가 정말 부족했는지 아무런 설명도 듣지 못했어요. 회사는 \'수습이니까 본채용은 회사 재량\'이라는 말만 반복하는데, 평정 자체가 공정했는지 의문이고 같은 시기 입사한 동료는 그대로 채용돼 더 납득이 가지 않습니다. 수습이라는 이유만으로 이렇게 내보내도 되는 건지, 다툴 여지가 있는지 막막한 상태입니다." 근로기준법 제23조 제1항은 사용자가 정당한 이유 없이 해고하지 못한다고 정하고, 제27조는 해고 사유·시기의 서면통지를 정하는 영역입니다. 판례는 시용기간 중인 근로자를 해고하거나 시용기간 만료 시 본계약 체결을 거부하는 것은 사용자에게 유보된 해약권의 행사로서 보통의 해고보다는 넓게 인정되나, 이 경우에도 객관적으로 합리적인 이유가 존재해 사회통념상 상당하다고 인정되어야 하며, 근무성적평정 등이 공정하지 않게 운용된 사정 등에 비추어 본채용 거부에 정당한 이유가 있다고 보기 어렵다고 한 사례 흐름이 있는 영역입니다. 수습 + 본채용 거부 + 평정 불투명 결합은 \'본채용 거부 정당성·평정 공정성\' 다툼이 가능한 트랙입니다. 피해자라면 ① 평정 공정성 ② 합리적 이유 ③ 사회통념 상당성 ④ 서면통지 ⑤ 노동위 구제 5중 트랙이 가능한 영역. 대응은 ① 평정 ② 이유 ③ 상당성 ④ 절차 ⑤ 노동위 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 수습 본채용 거부 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 평정 공정성·합리적 이유·사회통념 상당성·서면통지·노동위 구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 근무성적평정 공정성</strong> — 평정 방법·기준·운용이 공정하고 객관적이었는지.</li>\n<li><strong>② 객관적·합리적 이유</strong> — 본채용 거부에 객관적으로 합리적인 이유가 존재하는지.</li>\n<li><strong>③ 사회통념상 상당성</strong> — 그 이유가 사회통념상 상당하다고 인정될 정도인지.</li>\n<li><strong>④ 서면통지</strong> — 본채용 거부 사유·시기의 서면통지(제27조) 여부.</li>\n<li><strong>⑤ 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 시용기간 만료 시 본계약 거부는 유보된 해약권 행사로 보통의 해고보다 넓게 인정되나, 객관적으로 합리적 이유가 존재해 사회통념상 상당해야 정당성이 인정되는 영역. 근무성적평정의 공정성·객관성이 다툼의 출발점이 되는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거부 통보·평정 자료 보존 (즉시)</strong> — 본채용 거부 통보서·근로계약서(수습 약정)·평정표 보존.</li>\n<li><strong>2단계 — 평정 공정성 정리 (1주)</strong> — 평정 방법·기준·할당 여부 등 공정성·객관성 정황 정리.</li>\n<li><strong>3단계 — 합리적 이유·상당성 자료 (2주)</strong> — 거부 사유의 합리성과 동료 평가 비교 등 상당성 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n<li><strong>5단계 — 행정소송·후속 청구 정리 (병행)</strong> — 재심판정 다툼 시 동일 사실 범위 내 주장 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">수습 본채용 거부 정당성·평정 공정성 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 평정 공정성·합리적 이유·절차 갈래입니다.</strong></p>\n<ul>\n<li><strong>본채용 거부 통보서 (사유·시점·서면통지 여부)</strong></li>\n<li><strong>근로계약서·근로조건 (수습·시용 약정 명시)</strong></li>\n<li><strong>근무성적평정표·평정 기준 자료</strong></li>\n<li><strong>업무 지시·성과 관련 자료 (실제 업무 수행)</strong></li>\n<li><strong>동료·동기 채용 여부 비교 자료 (형평성)</strong></li>\n<li><strong>교육·피드백·개선 기회 부여 기록</strong></li>\n<li><strong>취업규칙·인사규정 (시용 운용 기준)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 수습 본채용 거부는 보통의 해고보다 넓게 인정되지만 \'아무 이유 없이\' 가능한 것은 아닌 영역. 평정이 공정·객관적 기준에 따랐는지, 거부 사유가 합리적이고 사회통념상 상당한지를 평정표·업무 자료·동료 비교와 함께 정리하는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>평정 공정성</strong> — 근무성적평정 방법·기준·운용이 공정·객관적이었는지.</li>\n<li><strong>객관적·합리적 이유</strong> — 본채용 거부에 합리적 이유가 실재하는지.</li>\n<li><strong>사회통념상 상당성</strong> — 그 이유가 사회통념상 상당한 정도인지.</li>\n<li><strong>서면통지·절차</strong> — 거부 사유·시기의 서면통지를 했는지.</li>\n<li><strong>입증책임 분담</strong> — 본채용 거부 정당성 입증은 사용자, 평정 불공정·형평 위반 정황은 근로자 측 정리 필요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>노동위원회 (부당해고 구제신청)</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 시용기간 만료 본채용 거부의 정당한 이유와 평정 공정성',
        summary:
          '대법원 2002다62432(대법원, 2006.02.24 선고) 영역에서 법원은 시용기간 중에 있는 근로자를 해고하거나 시용기간 만료 시 본계약 체결을 거부하는 것은 사용자에게 유보된 해약권의 행사로서 보통의 해고보다는 넓게 인정되나 이 경우에도 객관적으로 합리적인 이유가 존재해 사회통념상 상당하다고 인정되어야 하고, 은행이 시용기간 중인 근로자를 대상으로 한 근무성적평정에서 지점별로 일정 등급 해당자 수를 할당하고 평가요령에 어긋나게 평정표가 재작성된 사정 등에 비추어 시용근로계약을 해지한 데에 정당한 이유가 있다고 보기 어렵다고 판시했습니다. 수습 본채용 거부를 다툴 때 합리적 이유와 평정 공정성을 검토해볼 수 있습니다.',
        takeaway: '수습 + 본채용 거부 + 평정 불투명 결합 시 합리적 이유·사회통념 상당성·평정 공정성 종합 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '수습이면 본채용 거부는 회사 마음대로인가요?',
        answer:
          '<strong>보통의 해고보다 넓게 인정되지만 객관적·합리적 이유와 사회통념상 상당성이 필요한 영역입니다.</strong> 거부 사유와 평정 자료를 정리.',
      },
      {
        question: '평가 기준을 안 알려줬는데 문제 되나요?',
        answer:
          '<strong>근무성적평정의 공정성·객관성이 정당성 판단의 핵심이 되는 영역입니다.</strong> 평정표·기준·할당 여부를 확보.',
      },
      {
        question: '동기는 채용됐는데 저만 거부됐어요.',
        answer:
          '<strong>형평성·상당성이 다툼 대상이 되는 영역입니다.</strong> 동료 채용 여부·평가 비교 자료를 정리.',
      },
      {
        question: '거부 사유를 서면으로 안 줬는데요?',
        answer:
          '<strong>거부 사유·시기의 서면통지(제27조) 준수 여부도 함께 다툴 수 있는 영역입니다.</strong> 통보 방식 기록을 확보.',
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
      { label: '수습·시용 해고 다툼', href: '/guide/dismissal/dismissal-probation-track' },
      { label: '저성과 통상해고 다툼', href: '/guide/dismissal/dismissal-low-performance-track' },
      { label: '해고 서면통지 요건', href: '/guide/dismissal/dismissal-written-notice-requirement' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 2. dismissal-workplace-harassment-retaliation-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-workplace-harassment-retaliation-track',
    keyword: '직장내괴롭힘 신고 보복해고',
    questionKeyword: '직장내괴롭힘을 신고했더니 얼마 안 가 회사가 징계해고를 했어요. 신고에 대한 보복 같은데, 인사위원회 구성과 징계 절차도 미심쩍습니다. 이런 해고를 다툴 수 있나요?',
    ctaKeyword: '직장내괴롭힘 신고 보복해고 절차·정당성 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '괴롭힘 신고 보복해고 — 5단계 절차·정당성 점검 | 로앤가이드',
      description:
        '직장내괴롭힘 신고 후 보복성 징계해고를 당했다면 보복 동기·인사위 구성·징계 절차 정당성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"직장에서 겪은 괴롭힘을 회사에 신고했더니, 얼마 지나지 않아 회사가 여러 사유를 들어 징계해고를 통보한 근로자입니다. 시점도 그렇고 정황상 신고에 대한 보복으로밖에 보이지 않는데, 막상 징계 절차를 들여다보니 인사위원회 구성이나 진행 방식도 미심쩍었어요. 괴롭힘 신고를 이유로 불이익을 주는 건 안 된다고 들었는데, 회사는 \'신고와 무관한 징계\'라고만 합니다. 이게 정말 정당한 징계인지, 보복해고로 다툴 여지가 있는지 막막한 상태입니다." 근로기준법 제23조 제1항은 사용자가 정당한 이유 없이 해고하지 못한다고 정하고, 제76조의3은 직장내괴롭힘 신고자 등에게 불리한 처우를 금지하며, 같은 법은 징계 절차·서면통지(제27조)를 정하는 영역입니다. 판례는 징계요청 업무 담당자가 인사위원회 위원장을 겸임하는 등 개정된 취업규칙·인사규정을 적용해 구성된 인사위원회에서 해고가 이루어진 사안에서, 그 구성이 개정 전보다 근로자에게 더 불이익한 결과를 가져왔다고 단정하기 어려워 취업규칙·인사규정 개정이 기득이익을 불이익하게 변경한 것으로 볼 수 없고 징계요청 절차 위반이 있다고 보기 어렵다고 본 사례 흐름이 있는 영역입니다. 괴롭힘 신고 + 보복 의심 + 징계 절차 결합은 \'불리한 처우·징계 정당성·절차\' 다툼이 가능한 트랙입니다. 피해자라면 ① 보복 동기 ② 징계사유 정당성 ③ 인사위 구성·절차 ④ 서면통지 ⑤ 노동위 구제 5중 트랙이 가능한 영역. 대응은 ① 보복 ② 사유 ③ 절차 ④ 통지 ⑤ 노동위 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 직장내괴롭힘 신고 보복해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보복 동기·징계사유 정당성·인사위 구성/절차·서면통지·노동위 구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 보복 동기</strong> — 괴롭힘 신고와 징계 사이 시간적·인과적 연관(불리한 처우)이 있는지.</li>\n<li><strong>② 징계사유 정당성</strong> — 든 사유가 실제 징계사유로 정당한지, 신고와 무관한지.</li>\n<li><strong>③ 인사위 구성·절차</strong> — 인사위원회 구성·제척·징계 절차가 적법한지.</li>\n<li><strong>④ 서면통지</strong> — 해고 사유·시기의 서면통지(제27조) 여부.</li>\n<li><strong>⑤ 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 인사위원회 구성·취업규칙 개정의 적법성은 그 구성이 근로자에게 더 불이익한 결과를 가져왔는지 등으로 따져 판단하는 영역. 괴롭힘 신고 후 해고는 불리한 처우 여부와 함께 징계사유 정당성·절차 적법성을 함께 다투는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신고·징계 자료 보존 (즉시)</strong> — 괴롭힘 신고 기록·해고 통보서·징계의결서·인사규정 보존.</li>\n<li><strong>2단계 — 보복 동기·시점 정리 (1주)</strong> — 신고 시점과 징계 시점의 연관성, 불리한 처우 정황 정리.</li>\n<li><strong>3단계 — 징계사유·절차 자료 (2주)</strong> — 든 사유의 정당성과 인사위 구성·제척·절차 하자 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n<li><strong>5단계 — 불리한 처우 신고·후속 청구 정리 (병행)</strong> — 고용노동부 1350 불리한 처우 신고 병행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">괴롭힘 신고 보복해고 절차·정당성 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 보복 동기·징계 정당성·절차 갈래입니다.</strong></p>\n<ul>\n<li><strong>직장내괴롭힘 신고 기록 (접수·조사 자료)</strong></li>\n<li><strong>해고 통보서 (사유·시점 명시)</strong></li>\n<li><strong>징계의결서·징계사유서</strong></li>\n<li><strong>인사위원회 구성·회의록 (위원·제척 여부)</strong></li>\n<li><strong>취업규칙·인사규정 (개정 전후 비교)</strong></li>\n<li><strong>신고 전후 처우 변화 자료 (불리한 처우)</strong></li>\n<li><strong>변명·소명 기회 부여 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'신고에 대한 보복인지\'와 \'징계 절차가 적법했는지\'입니다. 신고 시점과 징계 시점을 시간순으로 정리해 불리한 처우 정황을 뒷받침하고, 인사위원회 구성·제척·개정 규정 적용이 근로자에게 더 불리한 결과를 가져왔는지를 회의록·인사규정과 함께 정리해두면 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>보복(불리한 처우) 여부</strong> — 괴롭힘 신고와 징계 사이 연관성이 있는지.</li>\n<li><strong>징계사유 정당성</strong> — 든 사유가 실제 정당한 징계사유인지.</li>\n<li><strong>인사위 구성·제척</strong> — 인사위원회 구성·제척이 적법한지.</li>\n<li><strong>절차 하자</strong> — 변명 기회·징계 절차·서면통지를 지켰는지.</li>\n<li><strong>입증책임 분담</strong> — 해고 정당성 입증은 사용자, 보복 정황·절차 하자는 근로자 측 정리 필요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>노동위원회 (부당해고 구제신청)</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 인사위원회 구성·취업규칙 개정 적용과 징계 절차 정당성',
        summary:
          '대법원 2022두41362(대법원, 2022.10.14 선고) 영역에서 법원은 방송사가 징계요청 업무를 담당하는 인사담당 본부장이 인사위원회 위원장을 겸임하고 제척 대상에서도 제외되는 내용으로 개정된 취업규칙과 인사규정을 적용해 구성된 인사위원회를 개최하여 근로자를 해고한 사안에서, 개정된 취업규칙을 적용해 인사위원회를 구성했다고 하여 개정 전 취업규칙을 적용한 것보다 근로자에게 더 불이익한 결과를 가져왔다고 단정하기 어려워 취업규칙·인사규정 개정이 근로조건에 관한 기득이익을 불이익하게 변경한 것으로 볼 수 없고 징계요청 절차를 거치지 않은 절차 위반이 있다고 보기 어렵다고 판시했습니다. 괴롭힘 신고 후 징계해고의 절차 정당성을 다툴 때 인사위 구성·개정 규정 적용을 검토해볼 수 있습니다.',
        takeaway: '괴롭힘 신고 + 보복 의심 + 징계 절차 결합 시 불리한 처우·징계사유 정당성·인사위 구성 종합 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '괴롭힘을 신고했다고 해고하면 위법 아닌가요?',
        answer:
          '<strong>신고를 이유로 한 불리한 처우는 금지되는 영역으로, 보복 동기 여부가 다툼이 되는 영역입니다.</strong> 신고·징계 시점을 시간순으로 정리.',
      },
      {
        question: '회사는 신고와 무관한 징계라는데요?',
        answer:
          '<strong>든 징계사유가 실제 정당한지와 신고와의 연관성을 함께 따지는 영역입니다.</strong> 징계사유서·신고 자료를 확보.',
      },
      {
        question: '인사위원회 구성이 이상한데 문제 되나요?',
        answer:
          '<strong>인사위 구성·제척·절차 적법성이 다툼 대상이 되는 영역입니다.</strong> 회의록·인사규정 개정 전후를 비교 정리.',
      },
      {
        question: '불리한 처우는 어디에 신고하나요?',
        answer:
          '<strong>괴롭힘 신고 불리한 처우는 고용노동부 1350에 신고를 검토할 수 있는 영역입니다.</strong> 구제신청과 병행을 검토.',
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
      { label: '징계 절차 하자', href: '/guide/dismissal/dismissal-disciplinary-procedure-defect' },
      { label: '보복성 해고 다툼', href: '/guide/dismissal/dismissal-retaliation-track' },
      { label: '해고 서면통지 요건', href: '/guide/dismissal/dismissal-written-notice-requirement' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 3. dismissal-fixed-term-renewal-expectation-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-fixed-term-renewal-expectation-track',
    keyword: '기간제 갱신기대권 해고',
    questionKeyword: '몇 년째 1년 단위로 계약을 갱신해 왔는데 이번에 회사가 갑자기 재계약을 거절했어요. 그동안 당연히 갱신될 거라 믿었는데, 이런 갱신거절도 부당해고로 다툴 수 있나요?',
    ctaKeyword: '기간제 갱신기대권 갱신거절 효력 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '기간제 갱신기대권 해고 — 5단계 갱신기대·효력 점검 | 로앤가이드',
      description:
        '여러 차례 갱신해 온 기간제 계약이 갑자기 갱신거절됐다면 갱신기대권·합리적 이유·증명책임 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"몇 년째 1년 단위로 계약을 갱신하며 같은 일을 해 온 기간제 근로자입니다. 그동안 특별한 문제 없이 계약이 이어졌고 주변에서도 \'요건만 맞으면 당연히 갱신된다\'고 해 이번에도 그러려니 했는데, 회사가 갑자기 별다른 설명 없이 재계약을 거절했어요. 계약기간이 끝났으니 어쩔 수 없다는 말만 들었지만, 그동안 형성된 신뢰가 있는데 이렇게 한순간에 잘리는 게 맞는지 납득이 가지 않습니다. 이런 갱신거절도 부당해고처럼 다툴 여지가 있는지 막막한 상태입니다." 근로기준법 제23조 제1항은 사용자가 정당한 이유 없이 해고하지 못한다고 정하고, 기간제 및 단시간근로자 보호 등에 관한 법률은 기간제 근로계약의 사용을 정하는 영역입니다. 판례는 근로계약·취업규칙·단체협약 등에 갱신 규정이 있거나 그러한 규정이 없더라도 갱신에 관한 요건·절차·실태, 업무 내용 등 여러 사정에 비추어 일정 요건이 충족되면 근로계약이 갱신된다는 신뢰관계가 형성된 경우 근로자에게 갱신기대권이 인정되고, 사용자의 합리적 이유 없는 갱신거절은 효력이 없으며 기간만료 후 근로관계는 종전 근로계약이 갱신된 것과 같고, 갱신거절에 합리적 이유가 있는지에 관한 증명책임은 사용자에게 있다고 본 사례 흐름이 있는 영역입니다. 반복 갱신 + 신뢰 형성 + 갱신거절 결합은 \'갱신기대권·갱신거절 효력\' 다툼이 가능한 트랙입니다. 피해자라면 ① 갱신기대권 형성 ② 합리적 이유 ③ 갱신 의제 ④ 증명책임 ⑤ 노동위 구제 5중 트랙이 가능한 영역. 대응은 ① 기대권 ② 이유 ③ 의제 ④ 입증 ⑤ 노동위 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 기간제 갱신기대권 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 갱신기대권 형성·합리적 이유·갱신 의제·증명책임·노동위 구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 갱신기대권 형성</strong> — 갱신 규정·관행·실태로 갱신 신뢰관계가 형성됐는지.</li>\n<li><strong>② 합리적 이유</strong> — 갱신거절에 합리적 이유가 있는지(없으면 효력 없음).</li>\n<li><strong>③ 갱신 의제</strong> — 합리적 이유 없는 거절이면 종전 근로계약이 갱신된 것과 동일한지.</li>\n<li><strong>④ 증명책임</strong> — 갱신거절의 합리적 이유 증명책임은 사용자에게 있는지.</li>\n<li><strong>⑤ 노동위 구제신청 (거절일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 갱신 규정이 없더라도 갱신 요건·절차·실태·업무 내용 등에 비추어 갱신 신뢰관계가 형성되면 갱신기대권이 인정되고, 합리적 이유 없는 갱신거절은 효력이 없으며 그 합리적 이유의 증명책임은 사용자에게 있는 영역. 갱신기대권 형성과 거절 사유 다툼이 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·갱신 자료 보존 (즉시)</strong> — 역대 근로계약서·갱신 내역·갱신거절 통지 보존.</li>\n<li><strong>2단계 — 갱신기대권 형성 정리 (1주)</strong> — 갱신 규정·관행·실태와 업무 내용으로 신뢰관계 형성 정리.</li>\n<li><strong>3단계 — 거절 사유·합리성 자료 (2주)</strong> — 갱신거절 사유의 합리성과 증명책임 분담 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (거절일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n<li><strong>5단계 — 행정소송·후속 청구 정리 (병행)</strong> — 재심판정 다툼 시 동일 사실 범위 내 주장 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">기간제 갱신기대권 갱신거절 효력 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 갱신기대권·합리적 이유·증명 갈래입니다.</strong></p>\n<ul>\n<li><strong>역대 근로계약서 (갱신 횟수·기간 입증)</strong></li>\n<li><strong>갱신 관련 규정 (취업규칙·단체협약·계약서 조항)</strong></li>\n<li><strong>갱신거절 통지서 (사유·시점)</strong></li>\n<li><strong>동종 직무 갱신 실태 자료 (관행 입증)</strong></li>\n<li><strong>업무 내용·평가 자료 (계속성·필요성)</strong></li>\n<li><strong>갱신 기준·절차 안내 자료</strong></li>\n<li><strong>거절 사유 반박 자료 (합리성 부재)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'갱신될 거라는 신뢰가 형성됐는지\'입니다. 갱신 규정이 없어도 여러 차례 갱신해 온 관행·업무의 계속성·갱신 절차 실태가 신뢰관계를 뒷받침하면 갱신기대권이 인정될 여지가 있는 영역. 갱신거절의 합리적 이유는 사용자가 증명해야 하므로 그 사유에 대한 반박 자료도 함께 정리해두면 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>갱신기대권 형성</strong> — 갱신 규정·관행·실태로 신뢰관계가 형성됐는지.</li>\n<li><strong>갱신거절 합리성</strong> — 거절에 합리적 이유가 있는지.</li>\n<li><strong>갱신 의제 효과</strong> — 합리적 이유 없는 거절이면 갱신된 것과 동일한지.</li>\n<li><strong>증명책임</strong> — 갱신거절 합리성의 증명책임이 사용자에게 있는지.</li>\n<li><strong>구제 기한</strong> — 갱신거절을 안 날부터 3개월 내 구제신청.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>노동위원회 (부당해고 구제신청)</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기간제 갱신기대권과 합리적 이유 없는 갱신거절의 효력',
        summary:
          '대법원 2018두62492(대법원, 2023.06.29 선고) 영역에서 법원은 근로계약·취업규칙·단체협약 등에 갱신 규정을 두고 있거나 그러한 규정이 없더라도 근로계약의 내용·동기·경위, 갱신 기준 등 요건·절차의 설정 여부와 실태, 업무 내용 등 여러 사정을 종합해 일정 요건이 충족되면 근로계약이 갱신된다는 신뢰관계가 형성된 경우 근로자에게 갱신기대권이 인정되고, 사용자가 합리적 이유 없이 갱신을 거절하는 것은 효력이 없어 기간만료 후 근로관계는 종전 근로계약이 갱신된 것과 같으며, 갱신거절에 합리적 이유가 있는지에 관한 증명책임은 사용자에게 있다고 판시했습니다. 반복 갱신 후 갱신거절을 다툴 때 갱신기대권과 합리적 이유를 검토해볼 수 있습니다.',
        takeaway: '반복 갱신 + 신뢰 형성 + 갱신거절 결합 시 갱신기대권·갱신거절 합리성·증명책임 종합 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '계약기간이 끝났으니 갱신거절은 당연한 건가요?',
        answer:
          '<strong>갱신기대권이 형성됐다면 합리적 이유 없는 갱신거절은 효력이 없는 영역입니다.</strong> 갱신 관행·규정·실태를 정리.',
      },
      {
        question: '갱신 규정이 없어도 기대권이 인정되나요?',
        answer:
          '<strong>규정이 없더라도 갱신 실태·업무 계속성 등으로 신뢰관계가 형성되면 인정될 수 있는 영역입니다.</strong> 역대 계약서·실태 자료를 확보.',
      },
      {
        question: '갱신거절이 부당하면 어떻게 되나요?',
        answer:
          '<strong>합리적 이유 없는 거절이면 종전 근로계약이 갱신된 것과 동일하게 보는 영역입니다.</strong> 거절 사유 반박 자료를 정리.',
      },
      {
        question: '거절이 정당하다는 입증은 누가 하나요?',
        answer:
          '<strong>갱신거절의 합리적 이유 증명책임은 사용자에게 있는 영역입니다.</strong> 회사 주장 사유에 대한 반박 정황을 준비.',
      },
      {
        question: '구제신청 기한이 있나요?',
        answer:
          '<strong>갱신거절을 안 날부터 3개월 이내가 노동위 구제신청 기한입니다.</strong> 기한 도과 전 신속 진행 검토.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '기간제 갱신기대권', href: '/guide/dismissal/dismissal-fixed-term-renewal-track' },
      { label: '갱신거절 다툼', href: '/guide/dismissal/dismissal-renewal-refusal-track' },
      { label: '해고 서면통지 요건', href: '/guide/dismissal/dismissal-written-notice-requirement' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 4. wage-unused-annual-leave-pay-track ───
  {
    domain: 'wage',
    slug: 'wage-unused-annual-leave-pay-track',
    keyword: '미사용 연차 수당 청구',
    questionKeyword: '회사가 연차 사용을 촉진했다며 미사용 연차수당을 못 준다고 해요. 그런데 저는 지정된 휴가일에도 출근해 일했고 회사도 업무 지시를 했습니다. 그래도 수당을 못 받나요?',
    ctaKeyword: '미사용 연차수당 사용촉진·보상의무 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '미사용 연차수당 청구 — 5단계 사용촉진·보상의무 점검 | 로앤가이드',
      description:
        '회사가 연차 사용촉진을 이유로 미사용 연차수당을 거부하는데 지정일에도 일했다면 보상의무·노무수령거부 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"회사가 연차휴가 사용촉진 제도를 했다며 \'남은 연차는 수당으로 안 준다\'고 한 근로자입니다. 그런데 막상 회사가 정해 통보한 휴가일에도 저는 평소처럼 출근해 일했고, 회사도 그날 노무 수령을 거부하기는커녕 오히려 업무를 지시했어요. 분명히 휴가일에 쉬지 못하고 근로를 제공했는데, 사용촉진을 했으니 보상 의무가 없다는 회사 말만 믿어야 하는지 납득이 가지 않습니다. 지정된 휴가일에도 일한 연차에 대해 수당을 받을 수 있는지, 다툴 여지가 있는지 막막한 상태입니다." 근로기준법 제60조는 연차유급휴가를, 제61조는 연차휴가 사용촉진을 정하며, 사용자가 사용촉진 조치를 했음에도 근로자가 휴가를 사용하지 않아 소멸된 경우 보상 의무가 면제될 수 있는 영역입니다. 판례는 사용촉진 조치를 했더라도 근로자가 지정된 휴가일에 출근해 근로를 제공한 경우, 사용자가 그 사정을 인식하고도 노무 수령을 거부한다는 의사를 명확히 표시하지 않거나 업무 지시를 했다면 특별한 사정이 없는 한 근로자가 자발적 의사로 휴가를 사용하지 않은 것으로 볼 수 없어 사용자는 그 미사용 휴가에 대해 여전히 보상할 의무를 부담한다고 본 사례 흐름이 있는 영역입니다. 사용촉진 + 지정일 근로 + 노무수령 미거부 결합은 \'연차수당 보상의무\' 다툼이 가능한 트랙입니다. 피해자라면 ① 사용촉진 적법성 ② 지정일 근로 ③ 노무수령거부 명확성 ④ 보상의무 ⑤ 청구 5중 트랙이 가능한 영역. 대응은 ① 촉진 ② 근로 ③ 거부 ④ 보상 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 미사용 연차 수당 청구 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사용촉진 적법성·지정일 근로·노무수령거부·보상의무·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사용촉진 적법성</strong> — 제61조의 서면 촉구·통보 절차를 적법하게 했는지.</li>\n<li><strong>② 지정일 근로</strong> — 회사가 지정한 휴가일에 출근해 근로를 제공했는지.</li>\n<li><strong>③ 노무수령거부 명확성</strong> — 사용자가 노무 수령 거부 의사를 명확히 표시했는지·업무 지시를 했는지.</li>\n<li><strong>④ 보상의무</strong> — 자발적 미사용으로 볼 수 없으면 미사용 연차수당 보상의무가 존속하는지.</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정·민사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 사용촉진 조치를 했더라도 근로자가 지정 휴가일에 출근해 근로를 제공하고 사용자가 노무 수령 거부를 명확히 하지 않거나 업무 지시를 했다면 자발적 미사용으로 볼 수 없어 보상의무가 존속하는 영역. 노무수령거부의 명확성 여부가 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong>A. 고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 연차·근무 자료 보존 (즉시)</strong> — 사용촉진 서면·휴가 지정 통보·출근기록·업무 지시 자료 보존.</li>\n<li><strong>2단계 — 사용촉진 절차·지정일 근로 정리 (1~2주)</strong> — 촉진 절차의 적법성과 지정일 출근·근로 정황 정리.</li>\n<li><strong>3단계 — 노무수령거부·보상의무 검토 (2~3주)</strong> — 노무 수령 거부 명확성·업무 지시 여부 → 미사용 연차수당 산정.</li>\n<li><strong>4단계 — 고용노동부 진정·내용증명 (시효 3년 내)</strong> — 1350 진정 또는 회사 청구.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">미사용 연차수당 사용촉진·보상의무 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사용촉진·지정일 근로·보상 갈래입니다.</strong></p>\n<ul>\n<li><strong>연차 사용촉진 서면 (촉구·통보 내역)</strong></li>\n<li><strong>휴가 사용 지정·통보 자료 (지정 휴가일)</strong></li>\n<li><strong>출근기록·근태기록 (지정일 출근·근로)</strong></li>\n<li><strong>업무 지시·결재 자료 (지정일 업무 수행)</strong></li>\n<li><strong>임금명세서 (연차수당 지급 여부)</strong></li>\n<li><strong>미사용 연차일수·수당 산정표</strong></li>\n<li><strong>진정서·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'회사가 지정 휴가일의 노무 수령을 명확히 거부했는지\'입니다. 사용촉진을 했더라도 지정일에 출근해 일했고 회사가 노무 수령 거부 의사를 분명히 밝히지 않았거나 업무 지시를 했다면 보상의무가 남는 영역. 지정일 출근·업무 수행 정황을 출근기록·업무 지시 자료와 함께 정리해두면 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사용촉진 절차 적법성</strong> — 제61조의 서면 촉구·통보 절차를 지켰는지.</li>\n<li><strong>지정일 근로</strong> — 지정 휴가일에 실제 출근해 근로를 제공했는지.</li>\n<li><strong>노무수령거부 명확성</strong> — 사용자가 노무 수령 거부를 명확히 했는지.</li>\n<li><strong>보상의무 존속</strong> — 자발적 미사용이 아니어서 보상의무가 남는지.</li>\n<li><strong>시효 관리</strong> — 연차수당 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (임금체불 신고·진정)</strong></li>\n<li><strong>근로복지공단</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사용촉진에도 지정일 근로 시 미사용 연차수당 보상의무',
        summary:
          '대법원 2019다279283(대법원, 2020.02.27 선고) 영역에서 법원은 연차휴가 사용촉진 제도를 도입한 사용자가 제61조 각호의 조치를 했더라도 휴가 미사용이 근로자의 자발적 의사에 따른 것이어야 보상의무가 면제되고, 근로자가 지정된 휴가일에 출근해 근로를 제공한 경우 사용자가 그 사정을 인식하고도 노무 수령을 거부한다는 의사를 명확히 표시하지 않거나 근로자에게 업무 지시를 했다면 특별한 사정이 없는 한 자발적 미사용으로 볼 수 없어 사용자는 그 미사용 휴가에 대해 여전히 보상할 의무를 부담한다고 보면서, 사용촉진의 보상의무 면제 요건을 충족했다고 인정하기 어려워 연차휴가수당을 지급할 의무가 있다고 판시했습니다. 사용촉진에도 지정일에 일한 연차수당을 다툴 때 이 기준을 검토해볼 수 있습니다.',
        takeaway: '사용촉진 + 지정일 근로 + 노무수령 미거부 결합 시 연차수당 보상의무 검토 영역 — 진정·민사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '사용촉진을 하면 무조건 연차수당이 없나요?',
        answer:
          '<strong>미사용이 자발적이어야 보상의무가 면제되는 영역입니다.</strong> 촉진 절차와 지정일 근로 정황을 함께 정리.',
      },
      {
        question: '지정된 휴가일에 출근해 일했는데요?',
        answer:
          '<strong>사용자가 노무 수령 거부를 명확히 안 했거나 업무 지시를 했다면 보상의무가 남는 영역입니다.</strong> 출근기록·업무 지시 자료를 확보.',
      },
      {
        question: '회사가 업무 지시를 한 것도 증거가 되나요?',
        answer:
          '<strong>업무 지시는 자발적 미사용이 아님을 뒷받침하는 정황이 되는 영역입니다.</strong> 결재·메신저·지시 기록을 정리.',
      },
      {
        question: '사용촉진 절차가 잘못돼도 다툴 수 있나요?',
        answer:
          '<strong>서면 촉구·통보 등 절차 적법성도 보상의무 면제의 요건이 되는 영역입니다.</strong> 촉진 서면을 확보해 검토.',
      },
      {
        question: '연차수당 청구 시효는요?',
        answer:
          '<strong>연차수당 청구 시효는 3년인 영역입니다.</strong> 청구권 발생일로부터 3년 내 청구.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '연차수당 청구 절차', href: '/guide/wage/wage-annual-leave-allowance-claim' },
      { label: '연차 사용촉진 다툼', href: '/guide/wage/wage-annual-leave-promotion-track' },
      { label: '미사용 연차 보상', href: '/guide/wage/wage-unused-leave-compensation-track' },
      { label: '통상임금 산정 기준', href: '/guide/wage/wage-ordinary-wage-calculation-standard' },
      { label: '임금체불 진정 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
    ],
  },

  // ─── 5. wage-intermediate-exploitation-subcontract-track ───
  {
    domain: 'wage',
    slug: 'wage-intermediate-exploitation-subcontract-track',
    keyword: '도급 임금 중간착취',
    questionKeyword: '도급계약서를 썼지만 실제로는 회사 지시를 받고 정해진 시간·장소에서 일했어요. 그런데 임금과 연차수당을 제대로 못 받았습니다. 도급이라는 이유로 근로자가 아니라고 하는데 다툴 수 있나요?',
    ctaKeyword: '도급 근로자성·미지급 임금 청구 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '도급 임금 중간착취 — 5단계 근로자성·임금 점검 | 로앤가이드',
      description:
        '도급계약 형식이지만 실질은 종속 근로였고 임금·연차수당을 못 받았다면 근로자성·미지급 임금·통상임금 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"형식상 \'도급계약서\'를 썼지만, 실제로는 회사가 업무 내용을 정하고 정해진 시간과 장소에서 지시를 받으며 일해 온 근로자입니다. 출퇴근 시간도 회사가 정했고 다른 사람을 시켜 일을 대신할 수도 없었는데, 막상 임금과 연차수당을 제대로 못 받았어요. 문제를 제기하니 회사는 \'도급이라 근로자가 아니다\', \'근로기준법이 적용되지 않는다\'며 미지급 임금도 줄 수 없다고 합니다. 계약서 제목이 도급이라는 이유만으로 근로자가 아니라고 단정하는 게 맞는지, 미지급 임금을 받을 수 있는지 막막한 상태입니다." 근로기준법 제2조는 근로자·임금·평균임금을, 제60조는 연차유급휴가를 정하며, 근로자성은 계약 형식이 아니라 임금을 목적으로 종속적 관계에서 근로를 제공했는지의 실질로 판단하는 영역입니다. 판례는 근로기준법상 근로자에 해당하는지는 계약의 형식이 고용계약인지 도급계약인지보다 그 실질에서 종속적 관계에서 임금을 목적으로 근로를 제공했는지로 판단해야 하고, 업무 내용을 사용자가 정하고 상당한 지휘·감독을 하는지, 근무시간·장소를 지정하고 구속되는지 등 여러 요소를 종합하되 기본급·고정급, 근로소득세 원천징수, 사회보장상 지위 등은 사용자가 임의로 정할 여지가 커 그것이 인정되지 않는다는 것만으로 근로자성을 쉽게 부정해서는 안 되며, 연차휴가수당은 산정 기준을 정하지 않았다면 통상임금을 기초로 산정한다고 본 사례 흐름이 있는 영역입니다. 도급 형식 + 종속 근로 + 임금 미지급 결합은 \'근로자성·미지급 임금 청구\' 다툼이 가능한 트랙입니다. 피해자라면 ① 근로자성 ② 종속성 요소 ③ 임금·수당 ④ 통상임금 기준 ⑤ 청구 5중 트랙이 가능한 영역. 대응은 ① 근로자성 ② 종속성 ③ 임금 ④ 통상임금 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 도급 임금 중간착취 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 근로자성·종속성 요소·임금/수당·통상임금 기준·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 근로자성</strong> — 계약 형식이 아니라 종속적 관계에서 임금 목적 근로를 제공했는지.</li>\n<li><strong>② 종속성 요소</strong> — 업무 지정·지휘감독·근무시간·장소 구속·전속성 등 종속성 정황.</li>\n<li><strong>③ 임금·수당</strong> — 미지급 임금·연차수당 등 청구 대상 확정.</li>\n<li><strong>④ 통상임금 기준</strong> — 연차휴가수당은 산정 기준이 없으면 통상임금을 기초로 산정.</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정·민사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 근로자성은 계약 형식이 아니라 종속적 관계의 실질로 판단하고, 기본급·고정급·원천징수·사회보장 지위 등이 없다는 것만으로 근로자성을 쉽게 부정해서는 안 되며 연차휴가수당은 기준이 없으면 통상임금으로 산정하는 영역. 도급 형식 뒤의 종속성 입증이 다툼의 출발점인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong>A. 고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·근무 자료 보존 (즉시)</strong> — 도급계약서·업무 지시·출퇴근 기록·급여 자료 보존.</li>\n<li><strong>2단계 — 종속성 요소 정리 (1~2주)</strong> — 업무 지정·지휘감독·시간/장소 구속·전속성 정황 정리.</li>\n<li><strong>3단계 — 임금·연차수당 산정 (2~3주)</strong> — 미지급 임금과 통상임금 기준 연차수당 산정.</li>\n<li><strong>4단계 — 고용노동부 진정·내용증명 (시효 3년 내)</strong> — 1350 진정 또는 회사 청구.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">도급 근로자성·미지급 임금 청구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 근로자성·종속성·임금 갈래입니다.</strong></p>\n<ul>\n<li><strong>도급(위탁)계약서 (계약 형식)</strong></li>\n<li><strong>업무 지시·지휘감독 자료 (메신저·결재)</strong></li>\n<li><strong>출퇴근·근무표 기록 (시간·장소 구속)</strong></li>\n<li><strong>급여·보수 지급 내역 (고정급·지급 패턴)</strong></li>\n<li><strong>전속성·겸업 제한 자료 (계속성·전속성)</strong></li>\n<li><strong>취업규칙·복무규정 적용 여부 자료</strong></li>\n<li><strong>미지급 임금·연차수당 산정표</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'계약서 제목\'이 아니라 \'일한 실질\'입니다. 업무를 회사가 정하고 지휘·감독했는지, 근무시간·장소에 구속됐는지, 다른 사람으로 대체할 수 없었는지 등 종속성 정황을 모으는 것이 출발점. 연차휴가수당은 산정 기준이 없으면 통상임금을 기초로 계산하므로 통상임금 자료도 함께 정리해두면 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>근로자성 판단</strong> — 계약 형식이 아니라 종속적 근로의 실질인지.</li>\n<li><strong>종속성 요소</strong> — 지휘감독·시간/장소 구속·전속성 등이 인정되는지.</li>\n<li><strong>형식 요소의 한계</strong> — 원천징수·사회보장 미가입만으로 근로자성을 부정할 수 없는지.</li>\n<li><strong>연차수당 산정</strong> — 기준이 없으면 통상임금을 기초로 산정하는지.</li>\n<li><strong>시효 관리</strong> — 임금·수당 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (임금체불 신고·진정)</strong></li>\n<li><strong>근로복지공단</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 도급 형식의 근로자성 판단과 연차휴가수당 산정 기준',
        summary:
          '대법원 2018다239110(대법원, 2019.10.18 선고) 영역에서 법원은 근로기준법상 근로자에 해당하는지는 계약의 형식이 고용계약인지 도급계약인지보다 그 실질에서 종속적 관계에서 임금을 목적으로 근로를 제공했는지로 판단해야 하고, 업무 내용을 사용자가 정하고 상당한 지휘·감독을 하는지, 근무시간·장소를 지정하고 구속받는지 등을 종합하되 기본급·고정급 정함, 근로소득세 원천징수, 사회보장상 지위 등은 사용자가 임의로 정할 여지가 커 그것이 인정되지 않는다는 것만으로 근로자성을 쉽게 부정해서는 안 되며, 취업규칙 등에 산정 기준을 정하지 않은 연차휴가수당은 통상임금을 기초로 산정해야 한다고 판시했습니다. 도급 형식으로 임금을 받지 못한 경우 근로자성과 미지급 임금을 검토해볼 수 있습니다.',
        takeaway: '도급 형식 + 종속 근로 + 임금 미지급 결합 시 근로자성·미지급 임금·통상임금 기준 검토 영역 — 진정·민사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '도급계약서를 썼으면 근로자가 아닌가요?',
        answer:
          '<strong>계약 형식이 아니라 종속적 근로의 실질로 근로자성을 판단하는 영역입니다.</strong> 지휘감독·구속 정황을 정리.',
      },
      {
        question: '4대보험에 가입돼 있지 않은데 근로자가 될 수 있나요?',
        answer:
          '<strong>원천징수·사회보장 미가입만으로 근로자성을 쉽게 부정할 수 없는 영역입니다.</strong> 업무 지시·근무 실질 자료를 확보.',
      },
      {
        question: '근로자로 인정되면 무엇을 받을 수 있나요?',
        answer:
          '<strong>미지급 임금·연차수당 등 근로기준법상 청구가 검토되는 영역입니다.</strong> 보수 지급 내역·근무기록을 정리.',
      },
      {
        question: '연차수당은 어떻게 계산하나요?',
        answer:
          '<strong>산정 기준이 없으면 통상임금을 기초로 산정하는 영역입니다.</strong> 통상임금 자료를 함께 준비.',
      },
      {
        question: '청구 시효는요?',
        answer:
          '<strong>임금·수당 청구 시효는 3년인 영역입니다.</strong> 지급일로부터 3년 내 청구.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '근로자성 다툼', href: '/guide/wage/wage-worker-status-track' },
      { label: '미지급 임금 청구', href: '/guide/wage/wage-unpaid-salary-claim' },
      { label: '연차수당 청구 절차', href: '/guide/wage/wage-annual-leave-allowance-claim' },
      { label: '통상임금 산정 기준', href: '/guide/wage/wage-ordinary-wage-calculation-standard' },
      { label: '임금체불 진정 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
    ],
  },

  // ─── 6. unemployment-harassment-voluntary-resignation-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-harassment-voluntary-resignation-track',
    keyword: '직장내괴롭힘 자진퇴사 수급',
    questionKeyword: '직장내괴롭힘을 견디다 못해 제 발로 퇴사했어요. 자진퇴사라 실업급여가 안 된다고 들었는데, 괴롭힘 때문에 그만둔 경우에도 수급이 어려운 건지 확인하고 싶습니다.',
    ctaKeyword: '괴롭힘 자진퇴사 수급자격·정당 이직 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '괴롭힘 자진퇴사 수급 — 5단계 정당 이직·수급자격 점검 | 로앤가이드',
      description:
        '직장내괴롭힘을 견디다 자진퇴사했는데 실업급여가 안 된다고 들었다면 정당한 이직 사유·수급자격·입증 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"직장에서 반복되는 괴롭힘을 견디다 못해 결국 제 발로 사직서를 낸 근로자입니다. 더는 버티기 어려워 어쩔 수 없이 나온 건데, 막상 알아보니 \'자진퇴사는 실업급여가 안 된다\'는 말부터 들어 막막했어요. 분명히 회사에서 겪은 괴롭힘 때문에 그만둔 건데, 형식이 자진퇴사라는 이유만으로 수급이 막히는 건지 납득이 가지 않습니다. 괴롭힘 때문에 그만둔 경우에도 정당한 이직 사유로 인정받아 실업급여를 받을 수 있는지, 어떤 자료를 준비해야 하는지 확인하고 싶은 상태입니다." 고용보험법 제40조는 이직일 이전 18개월간 피보험단위기간 180일 이상 등을 수급요건으로 정하고, 제58조는 자기 사정으로 이직한 경우 등 수급자격 제한과 함께 정당한 이직 사유에 해당하면 수급자격이 인정되는 영역입니다. 판례는 고용보험법상 \'허위 기타 부정한 방법\'이란 수급자격 없는 사람이 수급자격을 가장하거나 취업·소득 발생 사실 등을 감추는 일체의 부정행위를 의미하나, 형식상 사업자등록이 있더라도 사실상 폐업 상태로 실질적으로 사업을 영위하지 않아 소득이 없었던 경우 이를 신고하지 않았다고 해서 부정한 방법으로 실업급여를 받은 경우에 해당한다고 볼 수 없다고 본 사례 흐름이 있는 영역입니다. 괴롭힘 + 자진퇴사 + 정당한 이직 사유 결합은 \'수급자격·정당 이직\' 검토가 가능한 트랙입니다. 피해자라면 ① 괴롭힘 입증 ② 정당한 이직 사유 ③ 피보험단위기간 ④ 수급자격 ⑤ 신청·심사 5중 트랙이 가능한 영역. 대응은 ① 입증 ② 이직사유 ③ 단위기간 ④ 수급 ⑤ 신청 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 직장내괴롭힘 자진퇴사 수급 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 괴롭힘 입증·정당한 이직 사유·피보험단위기간·수급자격·신청 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 괴롭힘 입증</strong> — 직장내괴롭힘의 객관적 정황·신고·조사 자료 정리.</li>\n<li><strong>② 정당한 이직 사유</strong> — 괴롭힘 등으로 계속 근로가 곤란해 그만둔 정당한 이직 사유에 해당하는지.</li>\n<li><strong>③ 피보험단위기간</strong> — 이직일 이전 18개월간 180일 이상인지(고용보험법 제40조).</li>\n<li><strong>④ 수급자격</strong> — 자진퇴사라도 정당한 이직 사유면 수급자격이 인정될 수 있는지.</li>\n<li><strong>⑤ 신청·심사</strong> — 고용센터 수급자격 신청 + 불인정 시 심사청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자진퇴사라도 괴롭힘 등으로 계속 근로를 기대하기 어려워 그만둔 경우 정당한 이직 사유로 수급자격이 검토되는 영역. 판례 흐름에서 \'허위 기타 부정한 방법\'은 소득·취업을 감추는 부정행위를 뜻하므로, 정당한 사유를 사실대로 소명하는 것이 다툼의 출발점인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신청·심사 5단계',
        content:
          '<p><strong>A. 고용센터·고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 괴롭힘·이직 자료 보존 (즉시)</strong> — 괴롭힘 신고·조사 자료·사직 경위·이직확인서 보존.</li>\n<li><strong>2단계 — 정당한 이직 사유·단위기간 정리 (1주)</strong> — 괴롭힘 정황과 피보험단위기간(180일) 정리.</li>\n<li><strong>3단계 — 수급자격 신청 (이직일 다음날부터 12개월 내)</strong> — 워크넷 구직등록 + 수급자격 신청.</li>\n<li><strong>4단계 — 이직 사유 소명 (고용센터 심사)</strong> — 정당한 이직 사유 입증 자료 제출.</li>\n<li><strong>5단계 — 심사청구 (불인정 시)</strong> — 고용보험심사관 심사청구·재심사청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">괴롭힘 자진퇴사 수급자격·정당 이직 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 괴롭힘 입증·정당 이직·단위기간 갈래입니다.</strong></p>\n<ul>\n<li><strong>직장내괴롭힘 신고·조사 자료 (정황 입증)</strong></li>\n<li><strong>괴롭힘 관련 메신저·녹취·진술 (객관적 자료)</strong></li>\n<li><strong>사직서·사직 경위 자료 (이직 사유)</strong></li>\n<li><strong>이직확인서 (이직 사유 코드 확인)</strong></li>\n<li><strong>고용보험 가입이력 (피보험단위기간 180일)</strong></li>\n<li><strong>워크넷 구직등록 확인</strong></li>\n<li><strong>의료기록 등 건강 영향 자료 (해당 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자진퇴사라도 괴롭힘 등 계속 근로가 곤란한 정당한 이직 사유가 입증되면 수급자격이 검토되는 영역. 괴롭힘 신고·조사 기록과 사직 경위를 시간순으로 정리해 \'견디기 어려워 그만둔\' 정황을 객관적으로 뒷받침하고, 피보험단위기간 180일도 함께 확인해두는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>정당한 이직 사유</strong> — 괴롭힘으로 계속 근로가 곤란해 그만뒀는지.</li>\n<li><strong>괴롭힘 입증</strong> — 신고·조사·진술 등으로 객관적으로 입증되는지.</li>\n<li><strong>피보험단위기간</strong> — 180일 이상 충족 여부.</li>\n<li><strong>이직확인서 사유</strong> — 회사 기재 사유가 실제와 일치하는지.</li>\n<li><strong>신청 기한</strong> — 이직일 다음날부터 12개월 내 신청.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 고용센터 1350</strong></li>\n<li><strong>근로복지공단</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 실업급여 부정수급의 \'허위 기타 부정한 방법\' 범위',
        summary:
          '대법원 2002두7494(대법원, 2003.09.23 선고) 영역에서 법원은 구 고용보험법상 \'허위 기타 부정한 방법\'이란 수급자격 없는 사람이 수급자격을 가장하거나 취업 사실 또는 소득의 발생 사실 등을 감추는 일체의 부정행위를 말하는 것으로서 근로소득이 있는 자가 신고의무를 불이행한 경우에도 이에 해당하나, 구직급여를 받은 자가 형식상 자신 명의의 사업자등록이 있었더라도 사실상 폐업 상태로 실질적으로 사업을 영위하지 않아 전혀 소득이 없었던 경우에는 사업자등록 사실을 신고하지 않았더라도 부정한 방법으로 실업급여를 받은 경우에 해당한다고 볼 수 없다고 판시했습니다. 괴롭힘 자진퇴사 수급자격을 정당한 사유로 소명할 때 부정수급의 범위를 함께 검토해볼 수 있습니다.',
        takeaway: '괴롭힘 + 자진퇴사 + 정당한 이직 사유 결합 시 수급자격·정당 이직 검토 영역 — 고용센터 상담·심사청구 트랙.',
      },
    ],
    faq: [
      {
        question: '자진퇴사면 실업급여가 무조건 안 되나요?',
        answer:
          '<strong>괴롭힘 등 정당한 이직 사유가 입증되면 수급자격이 검토되는 영역입니다.</strong> 괴롭힘 정황과 사직 경위를 정리.',
      },
      {
        question: '괴롭힘은 어떻게 입증하나요?',
        answer:
          '<strong>신고·조사 기록·메신저·진술 등 객관적 자료로 입증을 검토하는 영역입니다.</strong> 시간순으로 자료를 모아 정리.',
      },
      {
        question: '이직확인서 사유가 \'개인 사정\'으로 적혀 있어요.',
        answer:
          '<strong>실제 사유(괴롭힘)와 다르면 정정·소명을 요청할 수 있는 영역입니다.</strong> 괴롭힘 입증 자료를 함께 제출.',
      },
      {
        question: '피보험단위기간은 얼마나 필요한가요?',
        answer:
          '<strong>이직일 이전 18개월간 180일 이상이 원칙인 영역입니다.</strong> 고용보험 가입이력을 먼저 확인.',
      },
      {
        question: '신청 기한이 있나요?',
        answer:
          '<strong>이직일 다음날부터 12개월 이내 수급자격을 신청해야 하는 영역입니다.</strong> 기한 내 워크넷 구직등록·신청 검토.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '자진퇴사 정당 이직 사유', href: '/guide/unemployment/voluntary-resignation-justified-track' },
      { label: '괴롭힘 이직 수급자격', href: '/guide/unemployment/harassment-separation-eligibility-track' },
      { label: '실업급여 신청 절차', href: '/guide/unemployment/benefit-application-procedure' },
      { label: '이직확인서 사유 정정', href: '/guide/unemployment/separation-form-correction-track' },
      { label: '피보험단위기간 확인', href: '/guide/unemployment/insured-period-check-track' },
    ],
  },

  // ─── 7. unemployment-illness-injury-separation-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-illness-injury-separation-track',
    keyword: '질병 퇴사 수급자격',
    questionKeyword: '몸이 아파 더는 일을 못 하게 돼 퇴사했어요. 치료받고 나면 다시 일할 수 있는데, 질병으로 그만둔 경우에도 실업급여가 되는지, 급여 기준이 되는 평균임금은 어떻게 잡히는지 궁금합니다.',
    ctaKeyword: '질병 퇴사 수급자격·평균임금 산정 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '질병 퇴사 수급자격 — 5단계 비자발 이직·평균임금 점검 | 로앤가이드',
      description:
        '질병·부상으로 더는 일을 못 해 퇴사했는데 실업급여가 되는지 궁금하다면 비자발적 이직·평균임금 산정·신청 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"몸이 아파 더는 지금 일을 계속하기 어려워 결국 퇴사한 근로자입니다. 치료를 받고 회복하면 다시 일할 의사는 분명한데, \'질병으로 그만둔 건 자진퇴사라 실업급여가 안 된다\'는 말부터 들어 혼란스러웠어요. 게다가 실업급여 기준이 되는 평균임금을 어떻게 잡는지에 따라 받을 금액이 달라진다는데, 제 임금 중 어떤 부분까지 포함되는지도 잘 모르겠습니다. 질병 때문에 그만둔 경우에도 수급자격이 인정되는지, 평균임금은 어떻게 산정되는지 막막한 상태입니다." 고용보험법 제40조는 이직일 이전 18개월간 피보험단위기간 180일 이상 등을 수급요건으로 정하고, 제45조·제46조는 구직급여일액 산정의 기초가 되는 임금일액·평균임금을 정하며, 질병·부상 등으로 계속 근로가 곤란해 이직한 경우 정당한 이직 사유로 수급자격이 검토되는 영역입니다. 판례는 고용보험법이 구직급여 산정의 기초가 되는 구직급여일액을 원칙적으로 근로기준법 제2조 제1항 제6호의 평균임금으로 산정하도록 정하고 있고, 일반택시운송사업에서 사납금을 공제한 나머지 초과운송수입금도 근로의 대가로 지급된 임금에 해당하므로 구직급여의 기준이 되는 평균임금을 산정할 때 이를 포함해야 한다고 본 사례 흐름이 있는 영역입니다. 질병 이직 + 비자발성 + 평균임금 산정 결합은 \'수급자격·평균임금\' 검토가 가능한 트랙입니다. 피해자라면 ① 질병·이직 입증 ② 비자발적 이직 ③ 피보험단위기간 ④ 평균임금 산정 ⑤ 신청·심사 5중 트랙이 가능한 영역. 대응은 ① 입증 ② 이직 ③ 단위기간 ④ 평균임금 ⑤ 신청 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 질병 퇴사 수급자격 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 질병·이직 입증·비자발적 이직·피보험단위기간·평균임금 산정·신청 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 질병·이직 입증</strong> — 질병·부상으로 계속 근로가 곤란했던 의료·근무 자료 정리.</li>\n<li><strong>② 비자발적 이직</strong> — 질병으로 인한 부득이한 이직이 정당한 이직 사유에 해당하는지.</li>\n<li><strong>③ 피보험단위기간</strong> — 이직일 이전 18개월간 180일 이상인지(고용보험법 제40조).</li>\n<li><strong>④ 평균임금 산정</strong> — 구직급여일액의 기초가 되는 평균임금에 포함되는 임금 범위 확인.</li>\n<li><strong>⑤ 신청·심사</strong> — 고용센터 수급자격 신청 + 불인정 시 심사청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 질병·부상으로 계속 근로가 곤란해 그만둔 경우 정당한 이직 사유로 수급자격이 검토되는 영역. 판례 흐름에서 구직급여일액의 기초가 되는 평균임금은 근로의 대가로 지급된 임금을 포함해 산정하므로, 임금에 해당하는 항목이 빠지지 않았는지 함께 살펴보는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신청·심사 5단계',
        content:
          '<p><strong>A. 고용센터·고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·이직 자료 보존 (즉시)</strong> — 진단서·진료기록·사직 경위·이직확인서 보존.</li>\n<li><strong>2단계 — 비자발 이직·단위기간 정리 (1주)</strong> — 질병으로 인한 부득이한 이직 정황과 피보험단위기간(180일) 정리.</li>\n<li><strong>3단계 — 수급자격·평균임금 신청 (이직일 다음날부터 12개월 내)</strong> — 워크넷 구직등록 + 수급자격 신청, 평균임금 산정 항목 확인.</li>\n<li><strong>4단계 — 이직 사유·임금 소명 (고용센터 심사)</strong> — 질병 이직 입증과 임금 항목 누락 여부 소명.</li>\n<li><strong>5단계 — 심사청구 (불인정·과소 산정 시)</strong> — 고용보험심사관 심사청구·재심사청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 신청 순서, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">질병 퇴사 수급자격·평균임금 산정 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 질병 입증·비자발 이직·평균임금 갈래입니다.</strong></p>\n<ul>\n<li><strong>진단서·진료기록 (질병·부상 입증)</strong></li>\n<li><strong>업무 수행 곤란 소견·요양 자료</strong></li>\n<li><strong>사직서·사직 경위 자료 (이직 사유)</strong></li>\n<li><strong>이직확인서 (이직 사유 코드 확인)</strong></li>\n<li><strong>고용보험 가입이력 (피보험단위기간 180일)</strong></li>\n<li><strong>임금명세서·급여 내역 (평균임금 산정 항목)</strong></li>\n<li><strong>워크넷 구직등록 확인</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 질병으로 인한 이직은 자진퇴사 형식이라도 계속 근로가 곤란했음이 의료 자료로 뒷받침되면 정당한 이직 사유로 검토되는 영역. 또한 평균임금은 근로의 대가로 지급된 임금을 포함해 산정하므로, 명목과 무관하게 실제 임금에 해당하는 항목이 빠지지 않았는지 임금명세서로 확인해두는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>비자발적 이직</strong> — 질병으로 계속 근로가 곤란해 부득이 그만뒀는지.</li>\n<li><strong>질병 입증</strong> — 진단·소견으로 업무 수행 곤란이 객관적으로 입증되는지.</li>\n<li><strong>피보험단위기간</strong> — 180일 이상 충족 여부.</li>\n<li><strong>평균임금 산정</strong> — 근로의 대가인 임금 항목이 빠짐없이 산입됐는지.</li>\n<li><strong>신청 기한</strong> — 이직일 다음날부터 12개월 내 신청.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 고용센터 1350</strong></li>\n<li><strong>근로복지공단</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 구직급여 기준 평균임금 산정과 임금 포함 범위',
        summary:
          '대법원 2016두42289(대법원, 2019.07.25 선고) 영역에서 법원은 고용보험법이 구직급여 산정의 기초가 되는 구직급여일액을 원칙적으로 근로기준법 제2조 제1항 제6호가 정한 평균임금으로 산정하도록 정하고 있고, 일반택시운송사업자가 소속 택시운전근로자에게 고정급 외에 하루 운송수입금에서 사납금을 공제한 나머지 초과운송수입금을 개인 수입으로 맡겨 온 경우 그 초과운송수입금도 근로의 대가로 지급된 임금에 해당하므로, 구직급여의 기준이 되는 평균임금을 산정할 때에는 초과운송수입금 역시 포함되어야 한다고 판시했습니다. 질병 이직 후 구직급여 평균임금을 산정할 때 임금에 해당하는 항목이 포함됐는지 검토해볼 수 있습니다.',
        takeaway: '질병 이직 + 비자발성 + 평균임금 산정 결합 시 수급자격·평균임금 검토 영역 — 고용센터 상담·심사청구 트랙.',
      },
    ],
    faq: [
      {
        question: '질병으로 그만둬도 실업급여가 되나요?',
        answer:
          '<strong>계속 근로가 곤란해 부득이 이직한 경우 정당한 이직 사유로 수급자격이 검토되는 영역입니다.</strong> 진단·근무 곤란 자료를 정리.',
      },
      {
        question: '치료 후 다시 일할 거면 수급이 안 되나요?',
        answer:
          '<strong>근로 의사와 능력이 회복돼 재취업을 준비할 수 있으면 수급자격이 검토되는 영역입니다.</strong> 구직등록·구직활동 계획을 준비.',
      },
      {
        question: '평균임금은 어떤 임금까지 포함되나요?',
        answer:
          '<strong>근로의 대가로 지급된 임금은 명목과 무관하게 포함될 수 있는 영역입니다.</strong> 임금명세서·급여 내역을 확보.',
      },
      {
        question: '평균임금이 적게 잡힌 것 같아요.',
        answer:
          '<strong>임금에 해당하는 항목 누락은 심사청구로 다툴 수 있는 영역입니다.</strong> 산정 내역과 임금 자료를 대조 정리.',
      },
      {
        question: '신청 기한이 있나요?',
        answer:
          '<strong>이직일 다음날부터 12개월 이내 수급자격을 신청해야 하는 영역입니다.</strong> 기한 내 워크넷 구직등록·신청 검토.',
      },
    ],
    cta: { text: '실업급여 신청 순서, AI로 먼저 정리하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '질병 이직 수급자격', href: '/guide/unemployment/illness-separation-eligibility-track' },
      { label: '평균임금 산정 다툼', href: '/guide/unemployment/average-wage-calculation-track' },
      { label: '실업급여 신청 절차', href: '/guide/unemployment/benefit-application-procedure' },
      { label: '이직확인서 사유 정정', href: '/guide/unemployment/separation-form-correction-track' },
      { label: '피보험단위기간 확인', href: '/guide/unemployment/insured-period-check-track' },
    ],
  },

  // ─── 8. retirement-repeated-fixed-term-continuous-service-track ───
  {
    domain: 'retirement',
    slug: 'retirement-repeated-fixed-term-continuous-service-track',
    keyword: '반복갱신 계속근로 퇴직금',
    questionKeyword: '1년짜리 계약을 여러 번 갱신하며 계속 일했는데, 퇴직할 때 회사가 계약 사이가 끊겼다며 퇴직금을 안 주려고 해요. 게다가 월급에 퇴직금이 포함됐다고도 합니다. 다툴 수 있나요?',
    ctaKeyword: '반복갱신 계속근로 통산·퇴직금 분할약정 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '반복갱신 계속근로 퇴직금 — 5단계 통산·분할약정 점검 | 로앤가이드',
      description:
        '여러 번 계약을 갱신하며 일했는데 계속근로가 끊겼다며 퇴직금을 거부당했다면 계속근로 통산·퇴직금 분할약정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"1년짜리 계약을 여러 차례 갱신하며 같은 회사에서 계속 일해 온 근로자입니다. 그런데 막상 퇴직하려니 회사가 \'계약과 계약 사이에 공백이 있어 계속근로가 끊겼다\', \'1년 미만 단위라 퇴직금이 없다\'며 지급을 거부했어요. 게다가 \'월급에 퇴직금이 이미 포함돼 있었다\'는 말까지 들어 더 혼란스럽습니다. 실제로는 거의 끊김 없이 같은 일을 계속했는데, 형식상 계약을 나눴다는 이유로 퇴직금을 못 받는 게 맞는지 납득이 가지 않습니다. 계속근로로 통산해 퇴직금을 받을 수 있는지, 다툴 여지가 있는지 막막한 상태입니다." 근로자퇴직급여 보장법 제8조는 사용자가 계속근로 1년에 대해 30일분 이상의 평균임금을 퇴직금으로 지급하도록, 제9조는 그 지급을 정하는 영역입니다. 판례는 사용자와 근로자가 체결한 약정의 실질이 임금을 정한 것에 불과한데도 퇴직금 지급을 면탈하려고 분할 약정의 형식만 취한 경우 실질적 퇴직금 분할 약정이 존재한다고 보기 어렵고, 확정기여형 퇴직연금이 설정된 사업장에서 사용자가 부담금을 납입하며 동액을 임금에서 공제했더라도 그 설정·납입 자체가 무효가 되는 것은 아니며 부담금이 부족하면 근로자는 그 차액과 지연이자를 청구할 수 있을 뿐 평균임금 재산정 방식의 추가 퇴직금을 청구할 수는 없다고 본 사례 흐름이 있는 영역입니다. 반복 갱신 + 계속근로 통산 + 분할약정 결합은 \'계속근로기간·퇴직금 분할약정\' 다툼이 가능한 트랙입니다. 피해자라면 ① 계속근로 통산 ② 공백의 단절 여부 ③ 분할약정 효력 ④ 퇴직금 산정 ⑤ 청구 5중 트랙이 가능한 영역. 대응은 ① 통산 ② 단절 ③ 분할약정 ④ 산정 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 반복갱신 계속근로 퇴직금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계속근로 통산·공백 단절 여부·분할약정 효력·퇴직금 산정·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계속근로 통산</strong> — 반복 갱신된 계약기간을 하나의 계속근로로 통산할 수 있는지.</li>\n<li><strong>② 공백의 단절 여부</strong> — 계약 사이 공백이 근로관계를 단절하는지(형식적 공백 여부).</li>\n<li><strong>③ 분할약정 효력</strong> — 월급에 퇴직금 포함 약정의 실질이 임금에 불과한지(무효 여부).</li>\n<li><strong>④ 퇴직금 산정</strong> — 통산 계속근로 1년당 30일분 이상 평균임금으로 산정.</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정·민사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 월급에 퇴직금을 포함했다는 약정의 실질이 임금을 정한 것에 불과하고 퇴직금 지급 면탈을 위한 형식이면 실질적 분할약정으로 보기 어려운 영역. 반복 갱신된 기간의 계속근로 통산 여부와 분할약정 효력이 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong>A. 고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·급여 자료 보존 (즉시)</strong> — 역대 근로계약서·갱신 내역·급여명세서·퇴직금 약정 자료 보존.</li>\n<li><strong>2단계 — 계속근로·공백 정리 (1~2주)</strong> — 갱신 간 공백 유무와 업무 계속성으로 계속근로 통산 정리.</li>\n<li><strong>3단계 — 분할약정·퇴직금 산정 (2~3주)</strong> — 월급 포함 약정의 실질 검토 → 통산 기간 기준 퇴직금 산정.</li>\n<li><strong>4단계 — 고용노동부 진정·내용증명 (시효 3년 내)</strong> — 1350 진정 또는 회사 청구.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미지급 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">반복갱신 계속근로 통산·퇴직금 분할약정 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 계속근로·분할약정·산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>역대 근로계약서 (갱신 횟수·공백 유무)</strong></li>\n<li><strong>근무·출퇴근 기록 (업무 계속성)</strong></li>\n<li><strong>급여명세서 (퇴직금 명목 포함 여부)</strong></li>\n<li><strong>퇴직금 포함·분할 약정 자료</strong></li>\n<li><strong>퇴직연금(DC형) 가입·부담금 납입 내역 (해당 시)</strong></li>\n<li><strong>취업규칙·퇴직금규정</strong></li>\n<li><strong>계속근로기간·퇴직금 산정표</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'계속근로로 통산되는지\'와 \'월급에 퇴직금을 넣은 약정이 진짜인지\'입니다. 갱신 간 공백이 형식적이고 업무가 끊김 없이 이어졌다면 계속근로로 통산될 여지가 있는 영역. 월급에 퇴직금을 포함했다는 약정도 그 실질이 임금에 불과하면 효력을 다툴 수 있으니 급여명세서·약정 자료를 함께 정리해두면 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>계속근로 통산</strong> — 반복 갱신 기간을 하나의 계속근로로 통산할 수 있는지.</li>\n<li><strong>공백의 단절성</strong> — 계약 사이 공백이 근로관계를 단절하는지.</li>\n<li><strong>분할약정 효력</strong> — 월급 포함 약정의 실질이 임금에 불과해 무효인지.</li>\n<li><strong>DC형 부담금 차액</strong> — 부족 부담금은 차액·지연이자 청구 대상인지.</li>\n<li><strong>시효 관리</strong> — 퇴직금 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (퇴직금 체불 신고·진정)</strong></li>\n<li><strong>근로복지공단 (퇴직연금)</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직금 분할 약정의 실질과 DC형 부담금 차액 청구',
        summary:
          '대법원 2018다244877(대법원, 2022.03.17 선고) 영역에서 법원은 사용자와 근로자가 체결한 약정의 실질이 임금을 정한 것에 불과한데도 퇴직금 지급을 면탈하려고 퇴직금 분할 약정의 형식만 취한 경우 실질적 퇴직금 분할 약정이 존재한다고 보기 어렵고, 확정기여형 퇴직연금제도가 설정된 사업장에서 사용자가 부담금을 납입하며 동액 상당을 임금에서 공제했더라도 그 설정·납입 행위 자체가 무효가 되는 것은 아니며, 부담금이 연간 임금총액의 12분의 1에 미치지 못하면 근로자는 퇴직일로부터 14일이 지난 후 그 차액과 지연이자를 청구할 수 있을 뿐 평균임금 재산정 방식의 추가 퇴직금을 청구할 수는 없다고 판시했습니다. 반복 갱신 근로의 퇴직금과 분할약정을 다툴 때 이 기준을 검토해볼 수 있습니다.',
        takeaway: '반복 갱신 + 계속근로 통산 + 분할약정 결합 시 계속근로기간·퇴직금 분할약정 효력 검토 영역 — 진정·민사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '계약을 여러 번 나눠 썼으면 퇴직금이 없나요?',
        answer:
          '<strong>공백이 형식적이고 업무가 이어졌다면 계속근로로 통산될 수 있는 영역입니다.</strong> 역대 계약서·근무기록을 정리.',
      },
      {
        question: '월급에 퇴직금이 포함됐다는데 맞나요?',
        answer:
          '<strong>실질이 임금에 불과하면 퇴직금 분할약정으로 인정되지 않을 수 있는 영역입니다.</strong> 급여명세서·약정 내용을 확보.',
      },
      {
        question: '계약 사이 며칠 공백이 있으면 끊긴 건가요?',
        answer:
          '<strong>공백의 경위·업무 계속성으로 단절 여부를 판단하는 영역입니다.</strong> 공백 사유와 업무 연속성을 정리.',
      },
      {
        question: '퇴직연금(DC형)에 가입돼 있었는데요?',
        answer:
          '<strong>부담금이 부족하면 그 차액과 지연이자를 청구할 수 있는 영역입니다.</strong> 부담금 납입 내역을 확인.',
      },
      {
        question: '퇴직금 청구 시효는요?',
        answer:
          '<strong>퇴직금 청구 시효는 3년인 영역입니다.</strong> 퇴직일로부터 3년 내 청구.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '계속근로기간 산정', href: '/guide/retirement/retirement-continuous-service-aggregation' },
      { label: '퇴직금 분할약정 다툼', href: '/guide/retirement/retirement-division-agreement-track' },
      { label: '퇴직연금 부담금 차액', href: '/guide/retirement/retirement-pension-contribution-track' },
      { label: '퇴직금 체불 진정', href: '/guide/retirement/retirement-pay-unpaid-report-track' },
    ],
  },

  // ─── 9. retirement-average-wage-bonus-inclusion-track ───
  {
    domain: 'retirement',
    slug: 'retirement-average-wage-bonus-inclusion-track',
    keyword: '상여금 포함 평균임금 퇴직금',
    questionKeyword: '매년 정기적으로 받던 상여금이 퇴직금 계산에서 빠졌어요. 회사는 "상여는 임금이 아니라 못 넣는다"는데, 정기적으로 받아온 상여도 평균임금에 넣어 퇴직금을 다시 받을 수 있나요?',
    ctaKeyword: '상여금 평균임금 산입·퇴직금 재산정 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '상여금 포함 평균임금 퇴직금 — 5단계 임금성·재산정 점검 | 로앤가이드',
      description:
        '정기적으로 받던 상여금이 퇴직금 계산에서 빠졌다면 상여 임금성·평균임금 산입·퇴직금 재산정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"매년 정해진 시기에 정기적으로 상여금을 받아 온 근로자입니다. 그런데 퇴직금을 받아 보니 그 상여금이 평균임금 계산에서 통째로 빠져 있어 금액이 생각보다 적었어요. 회사에 물으니 \'상여는 은혜적으로 주는 거라 임금이 아니다\', \'퇴직금에는 못 넣는다\'는 말만 돌아왔습니다. 하지만 입사 때부터 정해진 기준에 따라 거의 한 번도 빠짐없이 받아 온 돈인데, 단지 \'상여\'라는 이름이라는 이유로 퇴직금에서 빼는 게 맞는지 납득이 가지 않습니다. 정기적으로 받은 상여를 평균임금에 넣어 퇴직금을 다시 받을 수 있는지 막막한 상태입니다." 근로기준법 제2조는 평균임금을 산정사유 발생일 이전 3개월간 지급된 임금 총액을 그 기간 총일수로 나눈 금액으로 정하고, 근로자퇴직급여 보장법 제8조는 계속근로 1년당 30일분 이상의 평균임금을 퇴직금으로 정하는 영역입니다. 판례는 평균임금 산정의 기초가 되는 임금은 사용자가 근로의 대가로 지급하는 일체의 금품으로서, 상여금이라도 정기적·일률적으로 지급되고 그 지급이 단체협약·취업규칙·관행 등에 따라 사용자에게 지급의무가 지워져 있다면 임금에 해당해 평균임금 산정의 기초가 되는 임금에 포함된다는 취지로 본 사례 흐름이 있는 영역입니다. 정기 상여 + 평균임금 누락 + 임금성 결합은 \'상여 임금성·퇴직금 재산정\' 다툼이 가능한 트랙입니다. 피해자라면 ① 상여 임금성 ② 정기·일률성 ③ 지급의무 ④ 평균임금 재산정 ⑤ 청구 5중 트랙이 가능한 영역. 대응은 ① 임금성 ② 정기성 ③ 의무성 ④ 재산정 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 상여금 포함 평균임금 퇴직금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상여 임금성·정기/일률성·지급의무·평균임금 재산정·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상여 임금성</strong> — 상여가 근로의 대가로 지급된 임금에 해당하는지.</li>\n<li><strong>② 정기·일률성</strong> — 정기적·일률적으로 지급돼 왔는지.</li>\n<li><strong>③ 지급의무</strong> — 단체협약·취업규칙·관행으로 지급의무가 지워져 있는지.</li>\n<li><strong>④ 평균임금 재산정</strong> — 산입 시 평균임금 재산정 → 퇴직금 차액 도출.</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정·민사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 상여금이라도 정기적·일률적으로 지급되고 단체협약·취업규칙·관행 등에 따라 사용자에게 지급의무가 지워져 있으면 임금에 해당해 평균임금 산정의 기초가 되는 임금에 포함되는 영역. \'상여\'라는 명칭이 아니라 임금성 요건 충족 여부가 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong>A. 고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 상여·급여 자료 보존 (즉시)</strong> — 급여명세서·상여 지급 내역·취업규칙·단체협약 보존.</li>\n<li><strong>2단계 — 임금성·정기성 정리 (1~2주)</strong> — 상여의 정기·일률 지급과 지급의무(규정·관행) 정리.</li>\n<li><strong>3단계 — 평균임금 재산정 (2~3주)</strong> — 상여를 산입한 평균임금 재산정 → 퇴직금 차액 도출.</li>\n<li><strong>4단계 — 고용노동부 진정·내용증명 (시효 3년 내)</strong> — 1350 진정 또는 회사 청구.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">상여금 평균임금 산입·퇴직금 재산정 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 임금성·정기성·재산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>급여명세서 (상여 지급 시기·금액)</strong></li>\n<li><strong>상여 지급 내역·이력 (정기·일률 입증)</strong></li>\n<li><strong>취업규칙·급여규정 (상여 지급 근거)</strong></li>\n<li><strong>단체협약 (상여 지급의무 근거)</strong></li>\n<li><strong>지급 관행 자료 (반복 지급 입증)</strong></li>\n<li><strong>퇴직금 지급 내역 (회사 산정)</strong></li>\n<li><strong>평균임금·퇴직금 재산정표</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'상여\'라는 이름이 아니라 \'임금성 요건\'입니다. 정기적·일률적으로 지급됐고 단체협약·취업규칙·관행으로 지급의무가 지워져 있었다면 평균임금 산정 기초에 포함될 여지가 있는 영역. 상여 지급 시기·금액의 반복성과 지급 근거를 명세서·규정·관행 자료로 함께 정리해두면 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>상여 임금성</strong> — 상여가 근로의 대가로 지급된 임금인지.</li>\n<li><strong>정기·일률성</strong> — 정기적·일률적으로 지급됐는지.</li>\n<li><strong>지급의무</strong> — 단체협약·취업규칙·관행으로 지급의무가 지워져 있는지.</li>\n<li><strong>평균임금 산입</strong> — 임금성이 인정되면 평균임금에 산입되는지.</li>\n<li><strong>시효 관리</strong> — 퇴직금·차액 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (퇴직금 체불 신고·진정)</strong></li>\n<li><strong>근로복지공단 (퇴직연금)</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상여금이 평균임금 산정 기초 임금에 포함되기 위한 요건',
        summary:
          '대법원 2012다48077(대법원, 2013.04.11 선고) 영역에서 법원은 평균임금 산정의 기초가 되는 임금은 사용자가 근로의 대가로 근로자에게 지급하는 일체의 금품을 말하고, 상여금이라 하더라도 그것이 정기적·일률적으로 지급되고 그 지급이 단체협약·취업규칙·근로계약·관행 등에 의해 사용자에게 지급의무가 지워져 있다면 근로의 대가로 지급되는 임금에 해당해 평균임금 산정의 기초가 되는 임금에 포함된다는 취지로 판시했습니다. 정기적으로 받아온 상여가 퇴직금 계산에서 빠졌다면 상여의 임금성과 평균임금 산입을 검토해볼 수 있습니다.',
        takeaway: '정기 상여 + 평균임금 누락 + 임금성 결합 시 상여 임금성·평균임금 산입·퇴직금 재산정 검토 영역 — 진정·민사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '상여금도 퇴직금에 반영되나요?',
        answer:
          '<strong>정기·일률 지급되고 지급의무가 있으면 임금으로 평균임금에 산입될 수 있는 영역입니다.</strong> 지급 시기·금액 내역을 정리.',
      },
      {
        question: '회사가 상여는 임금이 아니라는데요?',
        answer:
          '<strong>명칭이 아니라 임금성 요건 충족 여부로 판단하는 영역입니다.</strong> 지급 근거(규정·관행)를 확보.',
      },
      {
        question: '정기적으로 받았는지가 왜 중요한가요?',
        answer:
          '<strong>정기·일률 지급과 지급의무가 임금성 판단의 핵심이 되는 영역입니다.</strong> 반복 지급 이력을 정리.',
      },
      {
        question: '상여를 넣으면 퇴직금이 얼마나 늘어나나요?',
        answer:
          '<strong>평균임금 재산정에 따라 퇴직금 차액이 산출되는 영역입니다.</strong> 재산정표로 차액을 확인.',
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
      { label: '평균임금 산입 다툼', href: '/guide/retirement/retirement-average-wage-inclusion-track' },
      { label: '상여금 임금성 다툼', href: '/guide/retirement/retirement-bonus-wage-status-track' },
      { label: '퇴직금 재산정 차액', href: '/guide/retirement/retirement-recalculation-difference' },
      { label: '퇴직금 체불 진정', href: '/guide/retirement/retirement-pay-unpaid-report-track' },
    ],
  },

  // ─── 10. industrial-accident-commute-recognition-track ───
  {
    domain: 'industrial-accident',
    slug: 'industrial-accident-commute-recognition-track',
    keyword: '출퇴근 재해 인정',
    questionKeyword: '여러 사업장을 옮겨 다니며 과중하게 일하다 쓰러져 뇌질환 진단을 받았어요. 근로복지공단은 업무와 관련이 없다며 요양을 불승인했는데, 산재로 다시 인정받을 수 있나요?',
    ctaKeyword: '출퇴근·업무상 질병 인과관계 산재 인정 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '출퇴근·업무상 질병 산재 — 5단계 인과관계·요양 점검 | 로앤가이드',
      description:
        '과중한 업무로 쓰러져 뇌·심장 질환 진단을 받았는데 요양 불승인됐다면 업무상 인과관계·요양급여·심사청구 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"여러 사업장을 옮겨 다니며 상담·응대 업무를 과중하게 해 온 근로자입니다. 만성적인 과로와 스트레스가 쌓이던 중 결국 쓰러져 뇌질환 진단을 받았는데, 근로복지공단은 \'기존 질환 때문이다\', \'업무와 상당인과관계를 인정하기 어렵다\'며 요양을 불승인했어요. 일하는 내내 받은 부담이 분명히 영향을 미쳤다고 느끼는데, 처분 당시 기준만으로 업무 관련성을 부정당한 게 맞는지 납득이 가지 않습니다. 출퇴근·업무 과정에서 쌓인 부담으로 생긴 질병을 산재로 다시 인정받을 수 있는지, 어떻게 다퉈야 할지 막막한 상태입니다." 산업재해보상보험법 제5조는 업무상 재해를 업무상 사유에 따른 부상·질병·장해·사망으로, 제37조는 업무와 재해 사이 상당인과관계가 있는 업무상 사고·질병·출퇴근 재해를 업무상 재해로 정하며, 같은 법은 요양급여 등을 정하는 영역입니다. 판례는 여러 사업장을 옮겨 다니며 근무하다 질병에 걸린 경우 그 질병이 업무상 재해인지 판단할 때 복수 사용자 아래에서 경험한 모든 업무를 자료로 삼아야 하고, 시행령 [별표 3]의 업무상 질병 인정 기준은 예시적 규정이며 고용노동부고시는 행정규칙이어서 법원은 처분 후 개정된 고시의 내용·취지를 참작해 상당인과관계 존부를 판단할 수 있고 만성적 과중 업무 해당 여부는 업무의 양·시간·강도·책임 등을 종합해 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 과중 업무 + 복수 사업장 + 요양 불승인 결합은 \'업무상 질병 인과관계·요양 인정\' 검토가 가능한 트랙입니다. 피해자라면 ① 업무 부담 ② 복수 사업장 종합 ③ 상당인과관계 ④ 요양급여 ⑤ 심사청구 5중 트랙이 가능한 영역. 대응은 ① 부담 ② 종합 ③ 인과관계 ④ 요양 ⑤ 심사 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 출퇴근·업무상 질병 산재 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 업무 부담·복수 사업장 종합·상당인과관계·요양급여·심사청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 업무 부담</strong> — 업무의 양·시간·강도·책임 등 만성적 과중 업무 정황 정리.</li>\n<li><strong>② 복수 사업장 종합</strong> — 여러 사업장에서 경험한 모든 업무를 종합 자료로 삼는지.</li>\n<li><strong>③ 상당인과관계</strong> — 업무와 질병 사이 상당인과관계(제37조)가 인정될 수 있는지.</li>\n<li><strong>④ 요양급여</strong> — 요양급여·휴업급여 등 청구 대상 확정.</li>\n<li><strong>⑤ 심사청구 (처분 안 날부터 90일 내)</strong> — 불승인 시 근로복지공단 심사청구·재심사청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 여러 사업장을 거친 경우 모든 업무를 자료로 삼아 인과관계를 판단하고, 시행령 인정 기준은 예시적 규정이며 고용노동부고시는 행정규칙이어서 법원이 처분 후 개정된 고시의 취지까지 참작해 상당인과관계를 판단할 수 있는 영역. 만성적 과중 업무 여부와 인과관계가 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 요양·심사 5단계',
        content:
          '<p><strong>A. 근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·업무 자료 보존 (즉시)</strong> — 진단서·진료기록·각 사업장 근무·업무 부담 자료 보존.</li>\n<li><strong>2단계 — 업무 부담·인과관계 정리 (1~2주)</strong> — 업무의 양·시간·강도와 복수 사업장 업무를 종합 정리.</li>\n<li><strong>3단계 — 요양급여 신청 (근로복지공단)</strong> — 요양급여 신청서·의학적 소견서 제출(업무상 질병 판정).</li>\n<li><strong>4단계 — 심사청구 (불승인 시, 처분 안 날부터 90일 내)</strong> — 근로복지공단 심사청구·재심사청구.</li>\n<li><strong>5단계 — 행정소송 (제소기간 내)</strong> — 불승인 처분 취소소송 검토(개정 고시 취지 참작 주장).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 산재 요양급여 신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">출퇴근·업무상 질병 인과관계 산재 인정 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=industrial-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 업무 부담·복수 사업장·인과관계 갈래입니다.</strong></p>\n<ul>\n<li><strong>진단서·진료기록 (발병·진단 자료)</strong></li>\n<li><strong>각 사업장 근무·재직 자료 (업무 이력)</strong></li>\n<li><strong>업무량·근무시간 기록 (만성적 과중 업무)</strong></li>\n<li><strong>업무 강도·책임·교대·야간근로 자료</strong></li>\n<li><strong>동료 진술 (업무 환경 사실관계)</strong></li>\n<li><strong>요양 불승인 처분서 (처분 사유·시점)</strong></li>\n<li><strong>요양급여 신청서·의학적 소견서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'업무 부담과 질병 사이 상당인과관계\'입니다. 여러 사업장을 거쳤다면 그 모든 업무를 종합해 판단하고, 시행령 인정 기준은 예시적이며 고용노동부고시는 행정규칙이라 처분 후 개정된 고시의 취지까지 참작될 수 있는 영역. 업무의 양·시간·강도·책임을 객관적 자료로 정리해 만성적 과중 업무 정황을 뒷받침하는 것이 출발점입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>상당인과관계</strong> — 만성적 과중 업무·스트레스와 질병 사이 인과관계.</li>\n<li><strong>복수 사업장 종합</strong> — 여러 사업장 업무를 모두 자료로 삼았는지.</li>\n<li><strong>인정 기준의 성격</strong> — 시행령 기준이 예시적이고 고시가 행정규칙인지.</li>\n<li><strong>개정 고시 참작</strong> — 처분 후 개정된 고시의 취지를 참작할 수 있는지.</li>\n<li><strong>심사·제소 기한</strong> — 심사청구·행정소송 기한 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>근로복지공단 1588-0075 (산재 요양·급여 상담)</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>관할 근로복지공단 지사</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 복수 사업장 업무상 질병의 상당인과관계 판단과 고시의 성격',
        summary:
          '대법원 2022두47391(대법원, 2023.04.13 선고) 영역에서 법원은 산업재해보상보험법의 적용 대상인 근로자가 여러 사업장을 옮겨 다니며 근무하다 질병에 걸린 경우 그 질병이 업무상 재해에 해당하는지를 판단할 때 복수 사용자 아래에서 경험한 모든 업무를 자료로 삼아야 하고, 시행령 [별표 3]의 업무상 질병 인정 기준은 예시적 규정이며 고용노동부고시는 행정규칙이어서 법원은 불승인처분 후 개정된 고시의 내용·취지를 참작해 상당인과관계 존부를 판단할 수 있고 만성적 과중 업무 해당 여부는 업무의 양·시간·강도·책임 등을 종합해 판단해야 한다는 취지로 판시하며, 콜센터 상담원의 뇌출혈에 대해 업무와의 상당인과관계를 인정하기 어렵다고 본 원심에 법리오해가 있다고 보았습니다. 과중 업무로 인한 뇌·심장 질환의 요양 불승인을 다툴 때 이 기준을 검토해볼 수 있습니다.',
        takeaway: '과중 업무 + 복수 사업장 + 요양 불승인 결합 시 업무상 질병 인과관계·요양 인정 검토 영역 — 근로복지공단 상담·심사청구 트랙.',
      },
    ],
    faq: [
      {
        question: '기존 질환이 있어도 산재가 되나요?',
        answer:
          '<strong>업무 부담이 발병·악화에 영향을 미쳤다면 상당인과관계가 검토되는 영역입니다.</strong> 업무량·강도 자료와 의학적 소견을 정리.',
      },
      {
        question: '여러 회사를 다녔는데 업무를 어떻게 보나요?',
        answer:
          '<strong>복수 사업장에서 경험한 모든 업무를 종합해 판단하는 영역입니다.</strong> 각 사업장 업무 이력을 정리.',
      },
      {
        question: '공단 기준에 안 맞으면 무조건 불승인인가요?',
        answer:
          '<strong>시행령 인정 기준은 예시적이고 고시는 행정규칙이라 그것만으로 단정하기 어려운 영역입니다.</strong> 만성적 과중 업무 정황을 종합 정리.',
      },
      {
        question: '불승인됐는데 어떻게 다투나요?',
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
      { label: '산재 요양급여 신청', href: '/guide/industrial-accident/industrial-accident-medical-benefit-application' },
      { label: '업무상 질병 인과관계', href: '/guide/industrial-accident/industrial-accident-disease-causation-track' },
      { label: '뇌·심장 질환 산재', href: '/guide/industrial-accident/industrial-accident-cardio-cerebral-track' },
      { label: '출퇴근 재해 인정', href: '/guide/industrial-accident/industrial-accident-commute-track' },
      { label: '산재 불승인 심사청구', href: '/guide/industrial-accident/industrial-accident-review-request-track' },
    ],
  },
];
