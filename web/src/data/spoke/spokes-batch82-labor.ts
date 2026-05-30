import { SpokePage } from '../spoke-pages';

// batch82 dismissal(3) + wage(2) + unemployment(2) + retirement(2) + industrial-accident(1) — 10개 (2026-05-30)
//
// 고유 존재 이유:
// 1. dismissal-probation-period-low-evaluation-termination-track — batch81 임산부·갱신기대권·전직거부와 분기. 여기는 '수습기간 중 낮은 평가를 이유로 한 본채용 거부·해고에서 평가의 객관성·합리성과 구제이익 존부' 판단형 트랙. 구제신청 당시 근로계약관계 종료와 소의 이익이 핵심.
// 2. dismissal-disability-reasonable-accommodation-discrimination-track — 단순 부당해고 분기. 여기는 '장애를 이유로 한 정당한 편의제공 미흡·차별적 해고에서 금전보상명령신청의 구제이익' 판단형 트랙. 해고 취소·원직복직 후에도 금전보상 구제이익이 소멸하지 않는지가 핵심.
// 3. dismissal-whistleblower-retaliation-disadvantage-track — 단순 징계 분기. 여기는 '내부 제보·노조 활동 등을 이유로 한 하위 인사고과·승격 탈락·임금 불이익에서 부당노동행위 구제신청 제척기간(계속하는 행위)' 판단형 트랙. 3개월 제척기간 기산점이 핵심.
// 4. wage-annual-leave-allowance-unused-unpaid-track — batch81 통상임금·대기시간과 분기. 여기는 '미사용 연차수당·인센티브가 평균임금에 산입되는 임금에 해당하는지(근로 대가성)' 절차형 트랙. 계속적·정기적 지급과 근로 대가성 판단이 핵심.
// 5. wage-shift-worker-night-allowance-recognition-track — 단순 야간수당 분기. 여기는 '교대제·택시 등에서 소정근로시간 합의가 탈법행위로 무효인지, 야간·연장수당 미달액 재산정' 판단형 트랙. 소정근로시간 단축 합의의 효력이 핵심.
// 6. unemployment-workplace-harassment-voluntary-resignation-track — 단순 자진퇴사 분기. 여기는 '직장 내 괴롭힘 등 정당한 사유로 인한 자진퇴사 수급자격과, 부정수급(허위 기타 부정한 방법)의 의미' 판단형 트랙. 부정수급 판단 기준이 핵심.
// 7. unemployment-family-care-commute-difficulty-resignation-track — 단순 수급절차 분기. 여기는 '가족 돌봄·통근 곤란 등으로 인한 이직 후 고용보험 가입·수급자격 인정과 가입신청기간 해석' 절차형 트랙. 귀책 없는 신청기간 도과 구제가 핵심.
// 8. retirement-average-wage-bonus-inclusion-recalculation-track — batch81 IRP·중간정산과 분기. 여기는 '상여·인센티브를 평균임금에 산입해 퇴직금을 재산정하고, 퇴직급여채권의 보호범위' 판단형 트랙. 퇴직급여채권의 압류금지·재산정이 핵심.
// 9. retirement-fixed-term-continuous-service-aggregation-track — 단순 퇴직금 미지급 분기. 여기는 '위임·도급 형식이라도 근로자성이 인정되고 계열사 순차 소속·재계약 기간을 통산해 계속근로연수를 산정' 판단형 트랙. 근로자성·계속근로 통산이 핵심.
// 10. industrial-accident-work-stress-mental-illness-recognition-track — batch81 출퇴근 일탈과 분기. 여기는 '업무상 스트레스·정신질환의 업무상 재해 인정과 산재보험 제3자 구상관계' 절차형 트랙. 업무상 인과관계·요양급여 신청이 핵심.

export const spokesBatch82Labor: SpokePage[] = [
  // ─── 1. dismissal-probation-period-low-evaluation-termination-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-probation-period-low-evaluation-termination-track',
    keyword: '수습기간 낮은 평가 본채용 거부',
    questionKeyword: '수습기간 중에 평가가 낮다는 이유로 본채용을 거부당했어요. 명확한 기준도 없이 "적합하지 않다"는 말뿐이었습니다. 수습이라도 이런 해고를 다툴 수 있나요?',
    ctaKeyword: '수습 본채용 거부 평가 합리성 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '수습 본채용 거부 — 5단계 평가 합리성·구제 점검 | 로앤가이드',
      description:
        '수습기간 중 낮은 평가를 이유로 본채용을 거부당했다면 평가 객관성·해고 정당성·구제이익·노동위 구제 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"수습기간을 거쳐 정식 채용될 것으로 알고 입사한 근로자입니다. 그런데 수습기간이 끝날 무렵 회사는 \'평가 점수가 낮다\', \'우리 회사와 맞지 않는다\'는 추상적인 이유만 들며 본채용을 거부했어요. 어떤 기준으로 평가가 이뤄졌는지, 무엇이 부족했는지 구체적인 설명은 듣지 못했습니다. 수습이라는 이유로 이렇게 쉽게 내보내도 되는 건지, 다툴 여지가 있는지 막막한 상태입니다." 근로기준법 제23조 제1항은 사용자가 정당한 이유 없이 해고하지 못한다고 정하는데, 판례는 수습기간 중 본채용 거부도 \'유보된 해약권\'의 행사로서 객관적·합리적 이유가 있어 사회통념상 상당하다고 인정되는 범위에서만 정당하다고 본 사례 흐름이 있는 영역입니다. 한편 구제신청 당시 이미 근로계약기간 만료·정년 등으로 근로관계가 종료된 경우 구제이익이 문제 될 수 있어, 시점 정리가 중요한 영역입니다. 추상적 평가 + 기준 불명확 + 본채용 거부 결합은 \'평가 합리성·해고 정당성\' 다툼이 가능한 트랙입니다. 피해자라면 ① 수습 약정 ② 평가 합리성 ③ 해고 정당성 ④ 구제이익 ⑤ 노동위 구제 5중 트랙이 가능한 영역. 대응은 ① 약정 ② 평가 ③ 정당성 ④ 구제이익 ⑤ 노동위 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 수습 본채용 거부 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 수습 약정·평가 합리성·해고 정당성·구제이익·노동위 구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 수습 약정</strong> — 근로계약서·취업규칙상 수습기간·평가·본채용 조건이 어떻게 정해졌는지.</li>\n<li><strong>② 평가 합리성</strong> — 본채용 거부의 근거가 된 평가가 객관적·공정한 기준에 따른 것인지.</li>\n<li><strong>③ 해고 정당성</strong> — 본채용 거부가 사회통념상 상당하다고 인정될 만한 합리적 이유인지.</li>\n<li><strong>④ 구제이익</strong> — 구제신청 당시 근로관계가 이미 종료됐는지 등 소의 이익 존부.</li>\n<li><strong>⑤ 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 수습기간 중 본채용 거부도 유보된 해약권의 행사로서 객관적·합리적 이유와 사회통념상 상당성이 인정되는 범위에서만 정당한 영역. 추상적·자의적 평가만으로는 정당성이 인정되기 어려울 수 있어 평가 기준의 합리성 다툼이 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 본채용 거부 통보·평가 자료 보존 (즉시)</strong> — 거부 통보서·평가표·근로계약서 보존.</li>\n<li><strong>2단계 — 수습 약정·평가 기준 정리 (1주)</strong> — 수습기간·평가항목·본채용 조건과 실제 적용 정황 정리.</li>\n<li><strong>3단계 — 평가 합리성 자료 (2주)</strong> — 평가 근거·동기 비교·기준 불명확 정황 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n<li><strong>5단계 — 구제이익·후속 청구 정리 (병행)</strong> — 근로관계 종료 시점 등 구제이익 쟁점 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">수습 본채용 거부 평가 합리성·구제 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 수습 약정·평가·구제이익 갈래입니다.</strong></p>\n<ul>\n<li><strong>근로계약서 (수습기간·본채용 조건 명시)</strong></li>\n<li><strong>취업규칙·인사규정 (수습 평가 절차)</strong></li>\n<li><strong>본채용 거부 통보서 (사유·시점 명시)</strong></li>\n<li><strong>평가표·평가 기준 자료 (객관성 입증)</strong></li>\n<li><strong>업무 실적·교육 이수 자료 (수행 정황)</strong></li>\n<li><strong>면담·교신 기록 (기준 불명확 정황)</strong></li>\n<li><strong>동기·동료 평가 비교 자료 (형평성)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 수습 본채용 거부는 \'능력이 부족하다\'는 막연한 평가가 아니라 객관적·합리적 평가 기준에 따른 것이어야 정당성을 인정받기 쉬운 영역. 평가 기준이 사전에 공유됐는지, 평가가 자의적이지 않았는지, 동기와의 형평은 어땠는지 정황을 함께 정리하는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>평가 객관성</strong> — 평가 기준·절차가 객관적·공정했는지.</li>\n<li><strong>사회통념상 상당성</strong> — 본채용 거부가 사회통념상 상당하다고 볼 만한지.</li>\n<li><strong>해고 서면통지</strong> — 거부 사유·시기를 서면으로 통지했는지.</li>\n<li><strong>구제이익</strong> — 구제신청 당시 근로관계가 이미 종료됐는지 등 소의 이익.</li>\n<li><strong>입증책임 분담</strong> — 거부의 정당성 입증은 사용자, 평가 불합리·기준 불명확 정황은 근로자 측 정리 필요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 02-3140-9300</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 구제신청 당시 근로관계 종료와 구제이익(소의 이익)',
        summary:
          '대법원 2025두33276(대법원, 2025.10.16 선고) 영역에서 법원은 근로자가 부당해고 구제신청을 할 당시 이미 정년에 이르거나 근로계약기간 만료, 폐업 등의 사유로 근로계약관계가 종료하여 근로자의 지위에서 벗어난 경우에는 노동위원회의 구제명령을 받을 이익이 소멸했다고 보는 것이 타당하고, 그와 같이 구제명령을 받을 이익이 소멸했다면 재심판정을 취소하더라도 노동위원회로서는 다시 구제명령을 할 수 없으므로 다른 특별한 사정이 없는 한 재심판정의 취소를 구할 소의 이익이 없다고 판시했습니다. 수습 본채용 거부를 다툴 때에도 구제신청 시점과 근로관계 존속 여부를 함께 검토해볼 수 있습니다.',
        takeaway: '추상적 평가 + 기준 불명확 + 본채용 거부 결합 시 평가 합리성·구제이익 종합 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '수습이라도 본채용 거부를 다툴 수 있나요?',
        answer:
          '<strong>수습 중 본채용 거부도 객관적·합리적 이유와 사회통념상 상당성이 인정되는 범위에서만 정당한 영역입니다.</strong> 평가 기준의 합리성을 함께 정리.',
      },
      {
        question: '평가가 낮다는 이유면 거부가 정당한가요?',
        answer:
          '<strong>막연한 평가가 아니라 객관적 기준에 따른 평가인지가 핵심인 영역입니다.</strong> 평가표·기준·동기 비교 자료를 확보.',
      },
      {
        question: '거부 사유를 서면으로 안 받았는데 문제 되나요?',
        answer:
          '<strong>해고 사유·시기의 서면통지 여부도 함께 다툼 대상이 되는 영역입니다.</strong> 통보 방식·내용 기록을 정리.',
      },
      {
        question: '이미 퇴사했는데도 구제신청이 되나요?',
        answer:
          '<strong>구제신청 당시 근로관계 존속 여부에 따라 구제이익이 달라질 수 있는 영역입니다.</strong> 종료 시점과 신청 시점을 함께 정리.',
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
      { label: '수습 해고 정당성', href: '/guide/dismissal/dismissal-probation-termination-justification' },
      { label: '저성과 해고 다툼', href: '/guide/dismissal/dismissal-low-performance-track' },
      { label: '해고 서면통지 요건', href: '/guide/dismissal/dismissal-written-notice-requirement' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 2. dismissal-disability-reasonable-accommodation-discrimination-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-disability-reasonable-accommodation-discrimination-track',
    keyword: '장애 정당한 편의제공 차별 해고',
    questionKeyword: '장애가 있다는 이유로 업무 조정이나 편의제공도 없이 "수행이 어렵다"며 해고당했어요. 회사가 뒤늦게 복직시키겠다는데 그동안의 손해는 어떻게 되나요?',
    ctaKeyword: '장애 차별 해고 금전보상 구제이익 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '장애 차별 해고 — 5단계 편의제공·구제이익 점검 | 로앤가이드',
      description:
        '장애를 이유로 편의제공 없이 해고됐다면 차별 여부·금전보상명령·구제이익·노동위 구제 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오래 일해 온 직장에서 장애가 생긴 뒤, 회사가 업무 분장이나 작업 환경 조정 같은 편의제공은 거의 검토하지 않은 채 \'지금 업무를 수행하기 어렵다\'며 해고를 통보했어요. 충분히 조정 가능한 일이었는데도 기회조차 주지 않았다는 점이 억울했습니다. 그런데 구제신청을 하자 회사는 뒤늦게 해고를 취소하고 원직복직을 명하겠다고 합니다. 다시 일할 수 있다는 건 다행이지만, 그동안 받은 정신적 피해와 손해는 그냥 묻혀버리는 건지 막막한 상태입니다." 장애인차별금지 및 권리구제 등에 관한 법률은 고용에서 장애를 이유로 한 차별과 정당한 편의제공 거부를 금지하고, 근로기준법 제23조 제1항은 정당한 이유 없는 해고를 금지하는 영역입니다. 같은 법 제30조 제3항은 노동위원회가 부당해고 구제명령을 할 때 근로자가 원직복직을 원하지 않으면 임금 상당액 이상의 금품 지급을 명할 수 있도록 정합니다. 판례는 구제신청 후 사용자가 해고를 취소해 원직복직을 명하고 임금 상당액을 지급했더라도 특별한 사정이 없는 한 금전보상명령을 받을 구제이익이 곧바로 소멸하지는 않는다고 본 사례 흐름이 있는 영역입니다. 편의제공 미흡 + 차별적 해고 + 뒤늦은 해고 취소 결합은 \'차별·해고 정당성·구제이익\' 다툼이 가능한 트랙입니다. 피해자라면 ① 차별 여부 ② 편의제공 ③ 해고 정당성 ④ 금전보상·구제이익 ⑤ 노동위 구제 5중 트랙이 가능한 영역. 대응은 ① 차별 ② 편의 ③ 정당성 ④ 구제이익 ⑤ 노동위 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 장애 차별 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 차별 여부·편의제공·해고 정당성·금전보상 구제이익·노동위 구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 차별 여부</strong> — 장애를 이유로 한 불리한 처우·해고에 해당하는지.</li>\n<li><strong>② 편의제공</strong> — 정당한 편의제공·업무 조정 검토가 이뤄졌는지.</li>\n<li><strong>③ 해고 정당성</strong> — 편의제공 없이 \'수행 곤란\'만으로 한 해고가 정당한 이유인지.</li>\n<li><strong>④ 금전보상·구제이익</strong> — 해고 취소·원직복직 후에도 금전보상 구제이익이 남는지(재심판정 당시 기준).</li>\n<li><strong>⑤ 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직 또는 금전보상명령.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 금전보상명령은 원직복직명령을 대신하고 그 금액도 임금 상당액 이상이므로, 구제신청 후 사용자가 해고를 취소해 원직복직과 임금 상당액을 지급했더라도 특별한 사정이 없는 한 금전보상 구제이익이 소멸하지 않을 수 있는 영역. 구제이익은 재심판정 당시를 기준으로 판단되는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고 통보·편의제공 요청 자료 보존 (즉시)</strong> — 해고 통보서·편의제공 요청·거부 기록 보존.</li>\n<li><strong>2단계 — 차별·편의제공 정리 (1주)</strong> — 장애 사유·업무 조정 가능성·편의제공 검토 부재 정황 정리.</li>\n<li><strong>3단계 — 해고 정당성·손해 자료 (2주)</strong> — \'수행 곤란\' 사유의 진정성과 그동안의 손해 자료 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 원직복직 또는 금전보상명령 신청.</li>\n<li><strong>5단계 — 구제이익·차별 진정 (병행)</strong> — 해고 취소 시 금전보상 구제이익 정리 + 차별 진정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">장애 차별 해고·금전보상 구제이익 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 차별·편의제공·구제이익 갈래입니다.</strong></p>\n<ul>\n<li><strong>해고 통보서 (사유·시점 명시)</strong></li>\n<li><strong>장애 진단서·장애 정도 자료 (사실관계)</strong></li>\n<li><strong>편의제공·업무 조정 요청 기록</strong></li>\n<li><strong>편의제공 거부·미검토 정황 자료</strong></li>\n<li><strong>업무 수행 가능성 자료 (조정 후 수행 가능 입증)</strong></li>\n<li><strong>해고 취소·원직복직 통보 자료 (구제이익 판단)</strong></li>\n<li><strong>해고기간 손해·임금상당액 산정 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 뒤늦게 해고를 취소해 원직복직을 명하더라도 금전보상명령을 받을 구제이익이 곧바로 사라지지는 않을 수 있는 영역. 구제이익은 재심판정 당시를 기준으로 판단되므로, 해고 시점·취소 시점·복직 조건과 임금 상당액 지급 내역을 함께 정리해두는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>차별 여부</strong> — 장애를 이유로 한 불리한 처우에 해당하는지.</li>\n<li><strong>편의제공 검토</strong> — 정당한 편의제공·업무 조정 가능성을 검토했는지.</li>\n<li><strong>해고 정당성</strong> — 편의제공 없는 \'수행 곤란\' 해고가 정당한 이유인지.</li>\n<li><strong>금전보상 구제이익</strong> — 해고 취소·복직 후에도 구제이익이 남는지(재심판정 당시 기준).</li>\n<li><strong>입증책임 분담</strong> — 해고 정당성 입증은 사용자, 편의제공 미흡·손해 정황은 근로자 측 정리 필요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 02-3140-9300</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 해고 취소·원직복직 후 금전보상명령 구제이익 존부',
        summary:
          '대법원 2024두54683(대법원, 2025.03.13 선고) 영역에서 법원은 근로기준법 제30조 제3항에 따른 금전보상명령은 원직복직명령을 대신하는 것이고 그 금액도 임금 상당액 이상의 금액이므로, 부당해고 구제신청 후 사용자가 해고를 취소하여 원직복직을 명하고 임금 상당액을 지급했더라도 특별한 사정이 없는 한 근로자가 금전보상명령을 받을 구제이익이 소멸하는 것은 아니고, 부당해고 구제명령을 받을 구제이익은 구제명령을 할 당시를 기준으로 판단해야 하므로 중앙노동위원회는 재심판정 당시를 기준으로 구제이익이 있는지를 판단해야 한다고 판시했습니다. 장애 차별 해고를 다툴 때에도 해고 취소·복직 이후의 금전보상 구제이익을 검토해볼 수 있습니다.',
        takeaway: '편의제공 미흡 + 차별적 해고 + 뒤늦은 해고 취소 결합 시 금전보상 구제이익·차별 판단 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '편의제공 없이 수행 곤란만으로 해고할 수 있나요?',
        answer:
          '<strong>정당한 편의제공·업무 조정 검토 없이 한 해고는 정당성 다툼 대상이 되는 영역입니다.</strong> 조정 가능성·요청 기록을 정리.',
      },
      {
        question: '회사가 복직시키겠다는데 그동안 손해는요?',
        answer:
          '<strong>해고 취소·원직복직 후에도 금전보상 구제이익이 남을 수 있는 영역입니다.</strong> 해고기간·손해 자료를 확보.',
      },
      {
        question: '구제이익은 언제를 기준으로 판단하나요?',
        answer:
          '<strong>구제이익은 재심판정 당시를 기준으로 판단되는 영역입니다.</strong> 해고·취소·복직 시점을 함께 정리.',
      },
      {
        question: '노동위 구제와 차별 진정을 같이 할 수 있나요?',
        answer:
          '<strong>노동위 부당해고 구제와 장애 차별 진정을 함께 검토해볼 수 있는 영역입니다.</strong> 두 절차의 자료를 함께 준비.',
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
      { label: '금전보상명령 신청', href: '/guide/dismissal/dismissal-monetary-compensation-order' },
      { label: '장애 차별 진정', href: '/guide/dismissal/dismissal-disability-discrimination-complaint' },
      { label: '원직복직·임금상당액', href: '/guide/dismissal/dismissal-reinstatement-back-pay' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 3. dismissal-whistleblower-retaliation-disadvantage-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-whistleblower-retaliation-disadvantage-track',
    keyword: '제보 보복 하위 인사고과 부당노동행위',
    questionKeyword: '노조 활동과 회사 비리 제보 이후부터 인사고과가 계속 최하위로 나오고 승격에서도 탈락했어요. 보복성 불이익 같은데, 구제신청 기한이 지났다고 하면 어떻게 되나요?',
    ctaKeyword: '제보 보복 인사고과 부당노동행위 제척기간 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '제보 보복 인사고과 — 5단계 부당노동행위·제척기간 점검 | 로앤가이드',
      description:
        '제보·노조 활동 이후 하위 인사고과·승격 탈락이 반복됐다면 부당노동행위·계속하는 행위·제척기간 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"노동조합 활동에 참여하고 회사 내부 문제를 제보한 뒤부터, 별다른 업무 실적 변화가 없는데도 인사고과가 매년 최하위로 나오고 승격 심사에서도 번번이 탈락한 근로자입니다. 같은 일을 하던 동료들은 정상적으로 평가받고 승격하는데, 유독 저만 불이익을 받는다는 느낌을 지울 수 없었어요. 이런 평가에 따라 임금까지 계속 적게 책정돼 누적 손해가 큰데, 막상 구제신청을 알아보니 \'시기가 지났다\'는 말부터 들어 막막한 상태입니다." 노동조합 및 노동관계조정법 제81조는 노조 활동 등을 이유로 한 불이익 취급을 부당노동행위로 금지하고, 같은 법 제82조 제2항은 부당노동행위 구제신청을 그 행위가 있은 날 또는 계속하는 행위인 때에는 종료일부터 3개월 이내에 하도록 정하는 영역입니다. 판례는 부당노동행위 의사의 단일성, 행위의 동일성·동종성, 시간적 연속성이 인정되면 수 개의 행위라도 \'계속하는 행위\'에 포함되고, 일정 단위 기간마다 인사고과·승격 심사를 하고 그에 따라 임금을 결정하는 사업장에서 하위 인사고과·승격 탈락은 같은 단위 기간 임금 지급과 하나의 \'계속하는 행위\'를 구성할 수 있다고 본 사례 흐름이 있습니다. 반복 하위고과 + 승격 탈락 + 임금 불이익 결합은 \'부당노동행위·제척기간\' 다툼이 가능한 트랙입니다. 피해자라면 ① 불이익 정황 ② 부당노동행위 의사 ③ 계속하는 행위 ④ 제척기간 ⑤ 노동위 구제 5중 트랙이 가능한 영역. 대응은 ① 정황 ② 의사 ③ 계속행위 ④ 기산점 ⑤ 노동위 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 제보 보복 인사고과 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 불이익 정황·부당노동행위 의사·계속하는 행위·제척기간·노동위 구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 불이익 정황</strong> — 제보·노조 활동 전후 인사고과·승격·임금 변화 정리.</li>\n<li><strong>② 부당노동행위 의사</strong> — 불이익이 노조 활동 등을 이유로 한 것인지의 정황.</li>\n<li><strong>③ 계속하는 행위</strong> — 반복된 하위고과·승격 탈락·임금 지급이 하나의 계속하는 행위로 묶이는지.</li>\n<li><strong>④ 제척기간 기산점</strong> — 계속하는 행위의 종료일부터 3개월 기산.</li>\n<li><strong>⑤ 노동위 구제신청</strong> — 지방노동위 부당노동행위 구제신청.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 부당노동행위 의사의 단일성·행위의 동일성·시간적 연속성이 인정되면 수 개의 행위도 \'계속하는 행위\'에 포함되고, 같은 단위 기간의 하위 인사고과·승격 탈락과 그에 기한 임금 지급은 하나의 계속하는 행위를 구성할 수 있는 영역. 종료일 기준 3개월 기산점 다툼이 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 평가·승격·임금 자료 보존 (즉시)</strong> — 연도별 인사고과·승격 심사·임금명세서·제보/노조 활동 자료 보존.</li>\n<li><strong>2단계 — 불이익 정황 정리 (1주)</strong> — 제보·노조 활동 시점과 평가·승격 변화의 연결 정리.</li>\n<li><strong>3단계 — 계속하는 행위 정리 (2주)</strong> — 단위 기간별 하위고과·승격 탈락·임금 지급의 연속성 정리.</li>\n<li><strong>4단계 — 제척기간 기산점 검토 (병행)</strong> — 계속하는 행위 종료일부터 3개월 이내인지 검토.</li>\n<li><strong>5단계 — 지방노동위 구제신청</strong> — 부당노동행위 구제신청서 작성·제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사직서 쓰기 전 확인할 것, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">제보 보복 하위 인사고과 부당노동행위·제척기간 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 불이익 정황·계속하는 행위·제척기간 갈래입니다.</strong></p>\n<ul>\n<li><strong>연도별 인사고과·평가표 (등급 추이)</strong></li>\n<li><strong>승격 심사 결과·탈락 통지 자료</strong></li>\n<li><strong>임금명세서·연봉 책정 내역 (임금 불이익)</strong></li>\n<li><strong>제보·노조 활동 자료 (시점·내용)</strong></li>\n<li><strong>동료 평가·승격 비교 자료 (형평성)</strong></li>\n<li><strong>업무 실적 자료 (저평가 부당성 입증)</strong></li>\n<li><strong>구제신청서 (구제받고자 하는 사항 특정)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 부당노동행위 구제신청은 행위가 있은 날 또는 계속하는 행위의 종료일부터 3개월 이내가 원칙. 하위고과·승격 탈락이 단위 기간마다 반복되며 임금 불이익으로 이어졌다면 하나의 계속하는 행위로 볼 여지가 있어, 각 행위의 시점과 연속성을 시간순으로 정리하는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>부당노동행위 의사</strong> — 불이익이 노조 활동 등을 이유로 한 것인지.</li>\n<li><strong>계속하는 행위 해당성</strong> — 단일성·동일성·연속성이 인정되는지.</li>\n<li><strong>제척기간 기산점</strong> — 행위 종료일부터 3개월 기산 여부.</li>\n<li><strong>구제 사항 특정</strong> — 구제받고자 하는 사항을 충분히 특정했는지.</li>\n<li><strong>입증책임 분담</strong> — 정당한 평가 사유 입증은 사용자, 불이익·연속성 정황은 근로자 측 정리 필요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 02-3140-9300</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 하위 인사고과·승격 탈락과 부당노동행위 \'계속하는 행위\'',
        summary:
          '대법원 2023두41864(대법원, 2025.04.03 선고) 영역에서 법원은 노동조합 및 노동관계조정법 제82조 제2항의 \'계속하는 행위\'란 1개의 행위가 일정 기간 계속되는 경우뿐 아니라 수 개의 행위라도 각 행위 사이에 부당노동행위 의사의 단일성, 행위의 동일성·동종성, 시간적 연속성이 인정되는 경우도 포함하고, 일정 단위 기간마다 인사고과·승격 심사를 하고 그 결과에 따라 임금을 결정하는 사업장에서 노조 활동을 이유로 한 하위 인사고과 부여 또는 승격 탈락은 특별한 사정이 없는 한 같은 단위 기간의 임금 지급과 하나의 \'계속하는 행위\'를 구성한다고 판시했습니다. 반복된 보복성 불이익을 다툴 때 제척기간 기산점을 검토해볼 수 있습니다.',
        takeaway: '반복 하위고과 + 승격 탈락 + 임금 불이익 결합 시 계속하는 행위·제척기간 종합 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '구제신청 기한이 지났다는데 다툴 수 있나요?',
        answer:
          '<strong>계속하는 행위로 인정되면 종료일부터 3개월 이내인지로 기산점이 달라질 수 있는 영역입니다.</strong> 각 행위의 시점·연속성을 정리.',
      },
      {
        question: '하위 인사고과도 부당노동행위가 되나요?',
        answer:
          '<strong>노조 활동 등을 이유로 한 불이익이라면 부당노동행위 다툼 대상이 되는 영역입니다.</strong> 활동 시점과 평가 변화를 연결.',
      },
      {
        question: '여러 해의 평가를 하나로 묶을 수 있나요?',
        answer:
          '<strong>의사 단일성·동일성·연속성이 인정되면 계속하는 행위로 볼 여지가 있는 영역입니다.</strong> 단위 기간별 자료를 시간순 정리.',
      },
      {
        question: '구제신청서에 무엇을 적어야 하나요?',
        answer:
          '<strong>구제받고자 하는 사항을 충분히 특정해야 하는 영역입니다.</strong> 불이익 행위·시기·구제 내용을 구체적으로 기재.',
      },
      {
        question: '승격 탈락으로 줄어든 임금도 청구되나요?',
        answer:
          '<strong>하위고과·승격 탈락에 기한 임금 불이익도 함께 다툼 대상이 될 수 있는 영역입니다.</strong> 임금 책정 내역을 확보.',
      },
    ],
    cta: { text: '사직서 쓰기 전 확인할 것, AI로 점검하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당노동행위 구제', href: '/guide/dismissal/dismissal-unfair-labor-practice-relief' },
      { label: '부당해고 구제 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '인사고과 차별 다툼', href: '/guide/dismissal/dismissal-evaluation-discrimination-track' },
      { label: '노조 활동 불이익', href: '/guide/dismissal/dismissal-union-activity-disadvantage' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 4. wage-annual-leave-allowance-unused-unpaid-track ───
  {
    domain: 'wage',
    slug: 'wage-annual-leave-allowance-unused-unpaid-track',
    keyword: '미사용 연차수당 인센티브 평균임금 산입',
    questionKeyword: '퇴직하면서 미사용 연차수당과 매년 받던 인센티브가 퇴직금 계산에서 빠졌어요. 이런 금품도 평균임금에 넣어 다시 계산해 받을 수 있나요?',
    ctaKeyword: '미사용 연차수당 인센티브 평균임금 산입 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '연차수당·인센티브 평균임금 — 5단계 근로대가성 점검 | 로앤가이드',
      description:
        '미사용 연차수당·인센티브가 퇴직금 계산에서 빠졌다면 근로 대가성·평균임금 산입·재산정·차액 청구 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오래 일한 직장을 퇴직하면서 받은 퇴직금 명세를 보니, 매년 정기적으로 받던 인센티브와 못 쓰고 정산받은 미사용 연차수당이 평균임금 계산에서 빠져 있었습니다. 회사는 \'그건 임금이 아니라 별도 금품이라 퇴직금에 안 들어간다\'고 설명했지만, 매번 정해진 기준으로 받아 왔던 돈이라 납득이 잘 되지 않았어요. 이런 금품도 평균임금에 포함해 퇴직금을 다시 계산받을 수 있는 건지 막막한 상태입니다." 근로기준법 제2조는 평균임금을 산정사유 발생일 이전 3개월간 지급된 임금 총액을 그 기간 총일수로 나눈 금액으로 정하고, 근로자퇴직급여 보장법은 계속근로 1년당 30일분 이상의 평균임금을 퇴직금으로 정하는 영역입니다. 판례는 평균임금 산정의 기초가 되는 임금은 근로의 대가로 계속적·정기적으로 지급되고 사용자에게 지급의무가 지워진 금품을 말하며, 계속적·정기적으로 지급됐더라도 근로의 대가로 볼 수 없다면 임금에 해당하지 않고, 그 판단은 지급의무 발생이 근로제공과 직접·밀접하게 관련되는지에 따른다고 본 사례 흐름이 있습니다. 정기 지급 + 지급의무 존재 + 근로 대가성 결합은 \'평균임금 산입·퇴직금 재산정\' 다툼이 가능한 트랙입니다. 피해자라면 ① 금품 성격 ② 정기·지급의무 ③ 근로 대가성 ④ 재산정 ⑤ 청구 5중 트랙이 가능한 영역. 대응은 ① 성격 ② 지급의무 ③ 대가성 ④ 재산정 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 연차수당·인센티브 평균임금 산입 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 금품 성격·정기/지급의무·근로 대가성·재산정·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 금품 성격</strong> — 미사용 연차수당·인센티브 등 각 금품의 지급 근거·방식 정리.</li>\n<li><strong>② 정기성·지급의무</strong> — 계속적·정기적으로 지급되고 사용자에게 지급의무가 지워졌는지.</li>\n<li><strong>③ 근로 대가성</strong> — 지급의무 발생이 근로제공과 직접·밀접하게 관련되는지.</li>\n<li><strong>④ 평균임금 재산정</strong> — 산입 시 이전 3개월 임금총액 재산정 → 퇴직금 재계산.</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정·민사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 평균임금의 기초가 되는 임금은 근로의 대가로 계속적·정기적으로 지급되고 지급의무가 지워진 금품. 계속·정기 지급이라도 근로 대가성이 없으면 제외될 수 있고, 근로제공과 직접·밀접하게 관련된 금품은 임금으로 산입될 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 재산정·청구 5단계',
        content:
          '<p><strong>A. 고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임금·금품 자료 보존 (즉시)</strong> — 임금명세서·인센티브 지급 내역·연차 정산 내역·퇴직금 명세 보존.</li>\n<li><strong>2단계 — 금품 성격 정리 (1~2주)</strong> — 각 금품의 지급 근거·주기·조건(정기성·지급의무) 정리.</li>\n<li><strong>3단계 — 근로 대가성·평균임금 재산정 (2~3주)</strong> — 산입 가능 금품을 포함한 평균임금 재산정 → 퇴직금 차액 도출.</li>\n<li><strong>4단계 — 고용노동부 진정·내용증명 (시효 3년 내)</strong> — 1350 진정 또는 회사 청구.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">미사용 연차수당·인센티브 평균임금 산입 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 성격·지급의무·재산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>임금명세서 (이전 3개월 임금총액)</strong></li>\n<li><strong>인센티브 지급 내역·지급 기준 자료</strong></li>\n<li><strong>미사용 연차 정산 내역 (일수·금액)</strong></li>\n<li><strong>단체협약·취업규칙·급여규정 (지급의무 근거)</strong></li>\n<li><strong>퇴직금 산정 명세 (회사 산정 내역)</strong></li>\n<li><strong>평균임금·퇴직금 재산정표</strong></li>\n<li><strong>진정서·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 어떤 금품이 평균임금에 산입되는지는 명칭이 아니라 계속적·정기적 지급·지급의무·근로 대가성으로 판단되는 영역. 인센티브가 매년 일정 기준으로 지급됐는지, 그 발생이 근로제공과 직접·밀접하게 관련되는지를 지급 내역·기준과 함께 정리하는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>정기성</strong> — 계속적·정기적으로 지급됐는지.</li>\n<li><strong>지급의무</strong> — 단체협약·취업규칙·관행 등으로 지급의무가 지워졌는지.</li>\n<li><strong>근로 대가성</strong> — 지급의무 발생이 근로제공과 직접·밀접하게 관련되는지.</li>\n<li><strong>변동성 큰 성과급</strong> — 지급률이 큰 폭으로 변동하는 성과급의 임금성 여부.</li>\n<li><strong>시효 관리</strong> — 퇴직금·임금 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (임금체불 신고·진정)</strong></li>\n<li><strong>고용노동부 임금체불 진정 온라인 (moel.go.kr)</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 평균임금 산입 임금의 의미와 인센티브의 근로 대가성',
        summary:
          '대법원 2021다248299(대법원, 2026.01.29 선고) 영역에서 법원은 평균임금 산정의 기초가 되는 임금은 사용자가 근로의 대가로 근로자에게 지급하는 금품으로서 계속적·정기적으로 지급되고 단체협약·취업규칙·급여규정·근로계약·노동관행 등에 의해 사용자에게 지급의무가 지워져 있는 것을 말하며, 계속적·정기적으로 지급됐더라도 근로의 대가로 볼 수 없다면 임금에 해당하지 않고, 성과(EVA) 규모에 따라 지급률이 큰 폭으로 변동하는 성과 인센티브는 근로제공과 직접·밀접하게 관련된 것으로 보기 어려운 반면, 상여기초금액에 연동해 계속적·정기적으로 지급되고 지급의무가 지워진 목표 인센티브는 근로의 대가인 임금에 해당한다고 판시했습니다. 미사용 연차수당·인센티브의 평균임금 산입을 검토할 때 동일한 기준을 살펴볼 수 있습니다.',
        takeaway: '정기 지급 + 지급의무 존재 + 근로 대가성 결합 시 평균임금 산입·퇴직금 재산정 검토 영역 — 진정·민사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '인센티브도 평균임금에 들어갈 수 있나요?',
        answer:
          '<strong>계속·정기 지급·지급의무·근로 대가성으로 판단하는 영역입니다.</strong> 지급 기준·내역을 함께 정리.',
      },
      {
        question: '변동이 큰 성과급도 임금인가요?',
        answer:
          '<strong>지급률이 크게 변동하고 근로제공과 직접·밀접하게 관련되기 어려우면 제외될 수 있는 영역입니다.</strong> 지급 기준의 성격을 검토.',
      },
      {
        question: '미사용 연차수당도 퇴직금에 반영되나요?',
        answer:
          '<strong>지급 근거·정기성·대가성에 따라 평균임금 산입 여부가 검토되는 영역입니다.</strong> 정산 내역·규정을 확보.',
      },
      {
        question: '회사가 임금이 아니라는데요?',
        answer:
          '<strong>명칭이 아니라 객관적 성질로 판단하는 영역입니다.</strong> 지급의무 근거와 지급 패턴을 정리.',
      },
      {
        question: '퇴직금 차액 청구 시효는요?',
        answer:
          '<strong>퇴직금·임금 청구 시효는 3년인 영역입니다.</strong> 퇴직일로부터 3년 내 차액 청구.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '평균임금 산정 기준', href: '/guide/wage/wage-average-wage-calculation-standard' },
      { label: '미사용 연차수당 청구', href: '/guide/wage/wage-unused-annual-leave-allowance-claim' },
      { label: '퇴직금 재산정 차액', href: '/guide/retirement/retirement-recalculation-difference' },
      { label: '상여 평균임금 산입', href: '/guide/wage/wage-bonus-average-wage-inclusion' },
      { label: '임금체불 진정 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
    ],
  },

  // ─── 5. wage-shift-worker-night-allowance-recognition-track ───
  {
    domain: 'wage',
    slug: 'wage-shift-worker-night-allowance-recognition-track',
    keyword: '교대 소정근로시간 단축 합의 최저임금',
    questionKeyword: '교대 근무를 하는데 실제 근무는 그대로인데 소정근로시간만 줄이는 합의를 한 뒤 고정급이 최저임금에 못 미치게 됐어요. 이런 합의가 무효라면 차액을 받을 수 있나요?',
    ctaKeyword: '소정근로시간 단축 합의 무효 최저임금 차액 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '소정근로시간 단축 합의 — 5단계 탈법·차액 점검 | 로앤가이드',
      description:
        '실제 근무는 그대로인데 소정근로시간만 줄여 고정급이 최저임금에 미달했다면 합의 효력·탈법행위·차액 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"교대제로 일하며 정해진 시간만큼 운행·근무를 해 온 근로자입니다. 그런데 어느 시점부터 회사와 노조가 \'소정근로시간을 줄이는\' 합의를 했고, 실제 근무 형태나 운행시간은 전혀 달라지지 않았는데도 서류상 근로시간만 짧아졌어요. 그 결과 시간당 고정급의 외형은 올라간 것처럼 보이지만, 실제로 받는 고정급은 최저임금에 못 미치는 상황이 됐습니다. 근무는 그대로인데 시간만 줄이는 합의가 과연 유효한 건지, 못 받은 차액을 받을 수 있는지 막막한 상태입니다." 최저임금법 제6조는 사용자가 최저임금액 이상의 임금을 지급하도록 정하고, 근로기준법 제56조는 야간·연장·휴일근로에 가산수당을 정하는 영역입니다. 판례는 고정급이 최저임금에 미달하는 것을 회피할 의도로 실제 근무형태나 운행시간 변경 없이 소정근로시간만 단축하기로 한 합의는 강행법규인 최저임금법 특례조항 등의 적용을 잠탈하기 위한 탈법행위로서 무효이고, 소정근로시간에 관한 유효한 정함이 없으면 법원이 당사자 의사를 보충해 유효한 소정근로시간을 확정해야 한다고 본 사례 흐름이 있습니다. 근무 불변 + 소정시간만 단축 + 고정급 최저임금 미달 결합은 \'합의 무효·차액 청구\' 다툼이 가능한 트랙입니다. 피해자라면 ① 합의 경위 ② 근무 실태 ③ 탈법 여부 ④ 차액 산정 ⑤ 청구 5중 트랙이 가능한 영역. 대응은 ① 경위 ② 실태 ③ 탈법 ④ 차액 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 소정근로시간 단축 합의 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 합의 경위·근무 실태·탈법 여부·차액·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 합의 경위</strong> — 소정근로시간 단축 합의의 시점·목적·전후 사정 정리.</li>\n<li><strong>② 근무 실태</strong> — 실제 근무형태·운행시간이 합의 전후로 달라졌는지.</li>\n<li><strong>③ 탈법 여부</strong> — 최저임금 미달 회피 목적의 단축으로 강행법규를 잠탈한 것인지.</li>\n<li><strong>④ 차액 산정</strong> — 유효한 소정근로시간 확정 → 최저임금·가산수당 미달액 산정.</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정·민사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 고정급이 최저임금에 미달하는 것을 회피할 의도로 실제 근무형태 변경 없이 소정근로시간만 단축한 합의는 강행법규 잠탈의 탈법행위로서 무효일 수 있고, 유효한 소정근로시간이 없으면 법원이 당사자 의사를 보충해 이를 확정하는 영역. 근무 실태와 합의 목적의 불일치 다툼이 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 차액 청구 5단계',
        content:
          '<p><strong>A. 고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 합의·근무 자료 보존 (즉시)</strong> — 단체협약·취업규칙·소정근로시간 합의·근무표·운행 기록 보존.</li>\n<li><strong>2단계 — 합의 경위·근무 실태 정리 (1~2주)</strong> — 합의 전후 근무형태·운행시간 변화 여부 정리.</li>\n<li><strong>3단계 — 유효 소정근로시간·차액 산정 (2~3주)</strong> — 실제 근무 기준 유효 소정근로시간 추정 → 최저임금·가산수당 미달액 산정.</li>\n<li><strong>4단계 — 고용노동부 진정·내용증명 (시효 3년 내)</strong> — 1350 진정 또는 회사 청구.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 야근수당 신고 가능성, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">소정근로시간 단축 합의 무효·최저임금 차액 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·실태·차액 갈래입니다.</strong></p>\n<ul>\n<li><strong>소정근로시간 합의서·단체협약 (단축 시점·내용)</strong></li>\n<li><strong>취업규칙·임금규정 (소정근로시간 정함)</strong></li>\n<li><strong>근무표·교대표·운행 기록 (실제 근무 실태)</strong></li>\n<li><strong>임금명세서 (고정급·최저임금 미달 입증)</strong></li>\n<li><strong>합의 전후 근무형태 비교 자료</strong></li>\n<li><strong>유효 소정근로시간·차액 산정표</strong></li>\n<li><strong>진정서·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'실제 근무는 그대로인데 서류상 소정근로시간만 줄었는지\'입니다. 합의 전후 근무표·운행 기록을 비교해 근무형태 변화가 없었다는 점과, 그 결과 고정급이 최저임금에 미달했다는 점을 함께 정리하면 탈법행위·합의 무효 다툼의 출발점이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>합의 목적</strong> — 최저임금 미달 회피 의도가 있었는지.</li>\n<li><strong>근무형태 불변</strong> — 합의 전후 실제 근무·운행시간이 그대로였는지.</li>\n<li><strong>강행법규 잠탈</strong> — 단축이 강행법규 적용을 잠탈하는 탈법행위인지.</li>\n<li><strong>유효 소정근로시간 확정</strong> — 합의가 무효일 때 보충 해석으로 정해질 시간.</li>\n<li><strong>시효 관리</strong> — 임금 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (임금체불 신고·진정)</strong></li>\n<li><strong>고용노동부 임금체불 진정 온라인 (moel.go.kr)</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 소정근로시간 단축 합의의 탈법행위 무효와 보충 해석',
        summary:
          '대법원 2023다206138(대법원, 2024.10.25 선고) 영역에서 법원은 정액사납금제하에서 생산고에 따른 임금을 제외한 고정급이 최저임금에 미달하는 것을 회피할 의도로 사용자가 시간당 고정급의 외형상 액수를 증가시키기 위해 실제 근무형태나 운행시간의 변경 없이 소정근로시간만을 단축하기로 한 합의는 강행법규인 최저임금법 특례조항 등의 적용을 잠탈하기 위한 탈법행위로서 무효이고, 근로계약·취업규칙·단체협약 등에 소정근로시간에 관한 유효한 정함이 없는 경우 법원은 당사자들의 의사를 보충해 유효한 소정근로시간을 확정해야 한다고 판시했습니다. 교대제 야간·연장수당 미달액을 다툴 때에도 이 기준을 살펴볼 수 있습니다.',
        takeaway: '근무 불변 + 소정시간만 단축 + 고정급 최저임금 미달 결합 시 합의 무효·차액 청구 검토 영역 — 진정·민사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '근무는 그대로인데 시간만 줄인 합의도 유효한가요?',
        answer:
          '<strong>최저임금 미달 회피 목적의 탈법행위로 무효가 될 수 있는 영역입니다.</strong> 합의 전후 근무 실태를 비교 정리.',
      },
      {
        question: '합의가 무효면 소정근로시간은 어떻게 정하나요?',
        answer:
          '<strong>유효한 정함이 없으면 법원이 당사자 의사를 보충해 확정하는 영역입니다.</strong> 실제 근무 기준 자료를 확보.',
      },
      {
        question: '노조가 한 합의인데도 다툴 수 있나요?',
        answer:
          '<strong>합의 주체와 무관하게 강행법규 잠탈이면 효력이 부정될 수 있는 영역입니다.</strong> 합의 목적·경위를 정리.',
      },
      {
        question: '미달 차액은 어떻게 계산하나요?',
        answer:
          '<strong>유효 소정근로시간 확정 후 최저임금·가산수당 기준 미달액으로 산정하는 영역입니다.</strong> 근무표·명세서를 정리.',
      },
      {
        question: '차액 청구 시효는요?',
        answer:
          '<strong>임금 청구 시효는 3년인 영역입니다.</strong> 지급일로부터 3년 내 청구.',
      },
    ],
    cta: { text: '야근수당 신고 가능성, AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '최저임금 미달 차액', href: '/guide/wage/wage-minimum-wage-shortfall-claim' },
      { label: '야간·연장수당 청구', href: '/guide/wage/wage-night-overtime-allowance-claim' },
      { label: '소정근로시간 다툼', href: '/guide/wage/wage-contractual-work-hours-track' },
      { label: '교대제 근로시간', href: '/guide/wage/wage-shift-work-hours-recognition' },
      { label: '임금체불 진정 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
    ],
  },

  // ─── 6. unemployment-workplace-harassment-voluntary-resignation-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-workplace-harassment-voluntary-resignation-track',
    keyword: '직장 내 괴롭힘 자진퇴사 실업급여 부정수급',
    questionKeyword: '직장 내 괴롭힘을 견디다 못해 스스로 퇴사했는데 자진퇴사라 실업급여가 안 된다고 들었어요. 사정이 있어 그만둔 건데 수급자격이 인정될 수 있는지 궁금합니다.',
    ctaKeyword: '직장 내 괴롭힘 자진퇴사 수급자격 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '괴롭힘 자진퇴사 실업급여 — 5단계 수급자격 점검 | 로앤가이드',
      description:
        '직장 내 괴롭힘으로 자진퇴사했는데 실업급여가 안 된다고 들었다면 정당한 이직 사유·수급자격·부정수급 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"직장 내 괴롭힘이 반복돼 더는 버티기 어려운 상황에서 스스로 사직서를 낸 근로자입니다. 막상 퇴사하고 보니 \'자발적으로 그만뒀으니 실업급여는 어렵다\'는 말부터 들어 막막했어요. 분명히 견디기 힘든 사정이 있어 떠밀리듯 나온 건데, 형식이 자진퇴사라는 이유만으로 아무런 보호도 받지 못하는 건지 답답합니다. 게다가 과거에 소득이 거의 없던 일을 신고하지 않은 게 부정수급으로 문제 될까 봐 걱정도 됩니다." 고용보험법 제40조는 이직일 이전 18개월간 피보험단위기간 180일 이상 등을 수급요건으로 정하고, 같은 법은 자발적 이직이라도 정당한 이직 사유가 있으면 수급자격을 제한하지 않는 영역입니다. 판례는 \'허위 기타 부정한 방법\'이란 수급자격 없는 사람이 자격을 가장하거나 취업·소득 발생 사실을 감추는 일체의 부정행위를 말하지만, 형식상 사업자등록이 있더라도 사실상 폐업상태로 실질적 사업을 영위하지 않아 소득이 없었던 경우는 이에 해당한다고 보기 어렵다고 본 사례 흐름이 있습니다. 괴롭힘 사유 + 정당한 이직 + 부정수급 오해 결합은 \'수급자격·부정수급 판단\' 다툼이 가능한 트랙입니다. 피해자라면 ① 이직 사유 ② 피보험단위기간 ③ 정당성 ④ 부정수급 여부 ⑤ 신청·심사 5중 트랙이 가능한 영역. 대응은 ① 사유 ② 단위기간 ③ 정당성 ④ 부정수급 ⑤ 신청 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 괴롭힘 자진퇴사 실업급여 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 이직 사유·피보험단위기간·정당성·부정수급·신청 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 이직 사유</strong> — 직장 내 괴롭힘 등 자진퇴사에 이른 구체적 사유 정리.</li>\n<li><strong>② 피보험단위기간</strong> — 이직일 이전 18개월간 180일 이상인지(고용보험법 제40조).</li>\n<li><strong>③ 정당한 이직 사유</strong> — 괴롭힘 등 정당한 사유로 수급자격이 인정될 수 있는 영역인지.</li>\n<li><strong>④ 부정수급 여부</strong> — 취업·소득 미신고 등 \'허위 기타 부정한 방법\'에 해당하는지.</li>\n<li><strong>⑤ 신청·심사</strong> — 고용센터 수급자격 신청·심사 + 필요 시 심사청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자발적 이직이라도 직장 내 괴롭힘 등 정당한 이직 사유가 인정되면 수급자격이 인정될 수 있는 영역. 판례 흐름에서 \'허위 기타 부정한 방법\'은 자격 가장·취업/소득 은폐 등 부정행위를 말하나, 사실상 폐업상태로 소득이 없던 사정은 이에 해당하지 않을 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신청·심사 5단계',
        content:
          '<p><strong>A. 고용센터·고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 이직 사유·괴롭힘 자료 보존 (즉시)</strong> — 괴롭힘 증거·진정 기록·사직 경위 자료 보존.</li>\n<li><strong>2단계 — 피보험단위기간·이직확인서 정리 (1주)</strong> — 가입이력·이직확인서 사유 정리.</li>\n<li><strong>3단계 — 정당한 이직 사유 정리 (1~2주)</strong> — 괴롭힘 등으로 이직이 불가피했다는 정황 정리.</li>\n<li><strong>4단계 — 고용센터 수급자격 신청 (이직일 다음날부터 12개월 내)</strong> — 워크넷 구직등록 + 수급자격 신청.</li>\n<li><strong>5단계 — 심사청구 (불인정 시)</strong> — 고용보험심사관 심사청구·재심사청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">직장 내 괴롭힘 자진퇴사 수급자격 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 이직 사유·단위기간·정당성 갈래입니다.</strong></p>\n<ul>\n<li><strong>이직확인서 (이직 사유 코드 확인)</strong></li>\n<li><strong>고용보험 가입이력 (피보험단위기간 180일 확인)</strong></li>\n<li><strong>직장 내 괴롭힘 증거 (메시지·녹취·진정 기록)</strong></li>\n<li><strong>사내 신고·조사 결과 자료</strong></li>\n<li><strong>사직서·사직 경위 기록</strong></li>\n<li><strong>워크넷 구직등록 확인</strong></li>\n<li><strong>소득·취업 신고 관련 자료 (부정수급 오해 해소)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자진퇴사라도 직장 내 괴롭힘 등 정당한 이직 사유가 인정되면 수급자격이 인정될 수 있는 영역. 괴롭힘의 반복성·심각성과 그로 인해 이직이 불가피했다는 정황을 증거로 정리하고, 이직확인서의 사유 기재가 실제와 다르면 정정을 요청하는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>이직 사유 정당성</strong> — 괴롭힘 등이 정당한 이직 사유로 평가되는지.</li>\n<li><strong>피보험단위기간</strong> — 180일 이상 충족 여부.</li>\n<li><strong>이직확인서 사유</strong> — 회사가 기재한 사유가 실제와 일치하는지.</li>\n<li><strong>부정수급 해당성</strong> — 소득 없는 사업자등록 미신고 등이 부정수급인지.</li>\n<li><strong>신청 기한</strong> — 이직일 다음날부터 12개월 내 신청.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>고용센터 1350 (수급자격 상담)</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 실업급여 \'허위 기타 부정한 방법\'의 의미',
        summary:
          '대법원 2002두7494(대법원, 2003.09.23 선고) 영역에서 법원은 구 고용보험법 제48조 제1항의 \'허위 기타 부정한 방법\'이란 일반적으로 수급자격 없는 사람이 수급자격을 가장하거나 취업사실·소득 발생사실 등을 감추는 일체의 부정행위를 말하고 근로소득이 있는 자가 신고의무를 불이행한 경우도 이에 해당하나, 구직급여를 수급받은 자가 형식상 자신 명의의 사업자등록이 있었더라도 사실상 폐업상태에 있어 실질적으로 사업을 영위하지 않아 전혀 소득이 없었던 경우에는 사업자등록 사실을 신고하지 않았더라도 이를 부정한 방법으로 실업급여를 받은 경우에 해당한다고 볼 수 없다고 판시했습니다. 자진퇴사 수급자격을 검토할 때 부정수급 판단 기준을 살펴볼 수 있습니다.',
        takeaway: '괴롭힘 사유 + 정당한 이직 + 소득 없는 미신고 결합 시 수급자격·부정수급 판단 검토 영역 — 고용센터 상담·심사청구 트랙.',
      },
    ],
    faq: [
      {
        question: '자진퇴사인데 실업급여가 될 수 있나요?',
        answer:
          '<strong>괴롭힘 등 정당한 이직 사유가 인정되면 수급자격이 인정될 수 있는 영역입니다.</strong> 괴롭힘 증거와 이직 경위를 정리.',
      },
      {
        question: '이직확인서에 사유가 다르게 적혀 있어요.',
        answer:
          '<strong>실제 사유와 다르면 정정을 요청할 수 있는 영역입니다.</strong> 괴롭힘·사직 경위 자료로 정정 근거를 마련.',
      },
      {
        question: '소득 없던 일을 신고 안 했는데 부정수급인가요?',
        answer:
          '<strong>사실상 소득이 없었던 경우는 부정수급에 해당하지 않을 수 있는 영역입니다.</strong> 소득·사업 실태 자료를 확보.',
      },
      {
        question: '피보험단위기간은 얼마나 필요한가요?',
        answer:
          '<strong>이직일 이전 18개월간 180일 이상이 요건인 영역입니다.</strong> 가입이력을 먼저 조회.',
      },
      {
        question: '신청 기한이 있나요?',
        answer:
          '<strong>이직일 다음날부터 12개월 이내 신청해야 하는 영역입니다.</strong> 기한 내 워크넷 구직등록·신청 검토.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '자진퇴사 수급자격', href: '/guide/unemployment/voluntary-resignation-eligibility-track' },
      { label: '괴롭힘 이직 실업급여', href: '/guide/unemployment/harassment-resignation-benefit-track' },
      { label: '실업급여 신청 절차', href: '/guide/unemployment/benefit-application-procedure' },
      { label: '부정수급 심사·환수', href: '/guide/unemployment/fraudulent-receipt-review-track' },
      { label: '수급자격 심사청구', href: '/guide/unemployment/eligibility-review-request-track' },
    ],
  },

  // ─── 7. unemployment-family-care-commute-difficulty-resignation-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-family-care-commute-difficulty-resignation-track',
    keyword: '가족 돌봄 통근 곤란 이직 고용보험 가입',
    questionKeyword: '가족 돌봄과 통근이 어려워 어쩔 수 없이 일을 그만뒀어요. 그런데 고용보험 가입신청 기간이 지났다며 가입이 안 됐다고 합니다. 제 잘못이 아닌데 구제될 수 있나요?',
    ctaKeyword: '가족 돌봄·통근 곤란 이직 가입신청기간 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '돌봄·통근 곤란 이직 — 5단계 가입·수급자격 점검 | 로앤가이드',
      description:
        '가족 돌봄·통근 곤란으로 이직했는데 고용보험 가입신청기간이 지났다고 들었다면 귀책 없는 도과 구제·수급자격 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"가족을 돌봐야 하는 사정과 통근이 지나치게 어려워진 상황이 겹쳐 어쩔 수 없이 일을 그만둔 근로자입니다. 실업급여라도 받아 한숨 돌리려 했더니, \'고용보험 가입신청 기간이 이미 지나서 가입이 안 됐다\'는 답을 들었어요. 가입 의사를 확인하고 신청을 해야 하는 쪽은 소속기관이었는데, 그 절차가 제대로 이뤄지지 않은 채 시간만 흘러간 것이었습니다. 제 잘못으로 기간을 넘긴 것도 아닌데, 이대로 아무 보호도 못 받는 건지 막막한 상태입니다." 고용보험법 제40조는 이직일 이전 18개월간 피보험단위기간 180일 이상 등을 수급요건으로 정하고, 같은 법은 정당한 이직 사유가 있는 자발적 이직도 수급자격을 인정하는 영역입니다. 판례는 고용보험 가입신청기간(임용일부터 3개월)을 제한하는 규정과 관련해, 소속기관의 장이 가입의사 확인의무를 게을리하는 등 가입대상자의 귀책사유 없이 3개월이 경과해 스스로 신청할 기회가 박탈된 경우에는 그 사유를 안 날부터 다시 3개월 내에 가입신청을 할 수 있다고 해석함이 타당하다고 본 사례 흐름이 있습니다. 정당한 이직 사유 + 귀책 없는 도과 + 가입 거부 결합은 \'가입·수급자격 인정\' 다툼이 가능한 트랙입니다. 피해자라면 ① 이직 사유 ② 가입신청기간 ③ 귀책 여부 ④ 수급자격 ⑤ 신청·심사 5중 트랙이 가능한 영역. 대응은 ① 사유 ② 신청기간 ③ 귀책 ④ 수급자격 ⑤ 신청 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 돌봄·통근 곤란 이직 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 이직 사유·가입신청기간·귀책 여부·수급자격·신청 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 이직 사유</strong> — 가족 돌봄·통근 곤란 등 자진퇴사에 이른 사유 정리.</li>\n<li><strong>② 가입신청기간</strong> — 고용보험 가입신청기간 도과 경위 정리.</li>\n<li><strong>③ 귀책 여부</strong> — 소속기관의 가입의사 확인의무 해태 등 본인 귀책 없는 도과인지.</li>\n<li><strong>④ 수급자격</strong> — 가입 인정 시 피보험단위기간·정당한 이직 사유로 수급자격이 인정될 수 있는 영역인지.</li>\n<li><strong>⑤ 신청·심사</strong> — 가입신청·수급자격 신청 + 필요 시 심사청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 가입대상자의 귀책사유 없이 신청기간이 도과해 스스로 신청할 기회가 박탈된 경우에는 그 사유를 안 날부터 다시 일정 기간 내에 가입신청을 할 수 있다고 해석되는 영역. 본인 귀책이 아니라는 점을 정리하면 가입·수급자격 다툼이 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가입·수급 5단계',
        content:
          '<p><strong>A. 고용센터·고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 이직·가입 경위 자료 보존 (즉시)</strong> — 임용·재직 자료, 가입의사 확인·신청 관련 기록 보존.</li>\n<li><strong>2단계 — 이직 사유·도과 경위 정리 (1주)</strong> — 돌봄·통근 곤란 사유와 가입신청기간 도과 경위 정리.</li>\n<li><strong>3단계 — 귀책 여부 자료 (1~2주)</strong> — 소속기관 확인의무 해태 등 본인 귀책 없음을 뒷받침하는 자료 정리.</li>\n<li><strong>4단계 — 가입신청·수급자격 신청 (사유 안 날부터 가능 기간 내)</strong> — 가입신청 + 고용센터 수급자격 신청.</li>\n<li><strong>5단계 — 심사청구 (불인정 시)</strong> — 고용보험심사관 심사청구·재심사청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 신청 순서, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">가족 돌봄·통근 곤란 이직 가입·수급자격 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 이직 사유·신청기간·귀책 갈래입니다.</strong></p>\n<ul>\n<li><strong>임용·재직 증명 (가입 대상·기간)</strong></li>\n<li><strong>고용보험 가입신청·확인 관련 기록</strong></li>\n<li><strong>가족 돌봄 사유 자료 (진단서·가족관계 등)</strong></li>\n<li><strong>통근 곤란 사유 자료 (거리·교통 등)</strong></li>\n<li><strong>이직확인서·사직 경위 기록</strong></li>\n<li><strong>소속기관 확인의무 해태 정황 자료</strong></li>\n<li><strong>워크넷 구직등록 확인</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'가입신청기간을 넘긴 것이 본인 잘못이 아니다\'라는 점입니다. 소속기관이 가입의사 확인·신청 절차를 제때 하지 않았다는 정황을 정리하면, 사유를 안 날부터 다시 일정 기간 내 가입신청을 검토해볼 수 있는 영역으로 연결됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>이직 사유 정당성</strong> — 돌봄·통근 곤란이 정당한 이직 사유로 평가되는지.</li>\n<li><strong>가입신청기간 해석</strong> — 귀책 없는 도과 시 재신청 기간이 인정되는지.</li>\n<li><strong>본인 귀책 여부</strong> — 소속기관 확인의무 해태 등 도과 책임 소재.</li>\n<li><strong>피보험단위기간</strong> — 가입 인정 시 180일 이상 충족 여부.</li>\n<li><strong>신청 기한</strong> — 이직일 다음날부터 12개월 내 수급자격 신청.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>고용센터 1350 (가입·수급 상담)</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 귀책 없는 고용보험 가입신청기간 도과의 구제 해석',
        summary:
          '대법원 2018두63235(대법원, 2022.10.27 선고) 영역에서 법원은 가입신청기간을 임용일부터 3개월로 제한하는 구 고용보험법 시행령 단서 조항과 관련해, 소속기관의 장이 가입대상 공무원에 대한 가입의사 확인의무를 게을리해 가입의사를 확인하지 않은 채 3개월이 도과하거나 3개월 내에 가입의사를 확인하고도 신청기간 내에 가입신청을 하지 않고 이를 알리지도 않는 경우와 같이 가입대상자의 귀책사유 없이 임용 후 3개월이 경과해 스스로 신청할 기회가 박탈된 경우에는 그 사유를 안 날부터 다시 3개월 내에 가입신청을 할 수 있다고 해석함이 타당하다고 판시했습니다. 돌봄·통근 곤란 이직 후 가입·수급자격을 검토할 때 이 해석을 살펴볼 수 있습니다.',
        takeaway: '정당한 이직 사유 + 귀책 없는 도과 + 가입 거부 결합 시 가입신청기간 재기산·수급자격 검토 영역 — 고용센터 상담·심사청구 트랙.',
      },
    ],
    faq: [
      {
        question: '제 잘못이 아닌데 가입기간이 지났다고 거부됐어요.',
        answer:
          '<strong>귀책 없이 신청기간이 도과한 경우 사유를 안 날부터 다시 신청을 검토해볼 수 있는 영역입니다.</strong> 도과 경위·책임 소재 자료를 정리.',
      },
      {
        question: '돌봄·통근 곤란도 정당한 이직 사유인가요?',
        answer:
          '<strong>사유의 불가피성에 따라 정당한 이직 사유로 평가될 수 있는 영역입니다.</strong> 돌봄·통근 곤란 자료를 함께 정리.',
      },
      {
        question: '가입이 인정되면 수급자격도 되나요?',
        answer:
          '<strong>피보험단위기간·정당한 이직 사유가 함께 충족되면 수급자격이 인정될 수 있는 영역입니다.</strong> 가입이력을 먼저 확인.',
      },
      {
        question: '거부 처분에 대해 다툴 수 있나요?',
        answer:
          '<strong>고용보험심사관 심사청구·재심사청구로 다툼을 검토해볼 수 있는 영역입니다.</strong> 처분 사유서와 반박 자료를 정리.',
      },
      {
        question: '수급자격 신청 기한이 있나요?',
        answer:
          '<strong>이직일 다음날부터 12개월 이내 신청해야 하는 영역입니다.</strong> 기한 내 워크넷 구직등록·신청 검토.',
      },
    ],
    cta: { text: '실업급여 신청 순서, AI로 먼저 정리하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '정당한 자진퇴사 사유', href: '/guide/unemployment/justified-voluntary-resignation-track' },
      { label: '고용보험 가입신청', href: '/guide/unemployment/insurance-enrollment-application-track' },
      { label: '실업급여 신청 절차', href: '/guide/unemployment/benefit-application-procedure' },
      { label: '수급자격 심사청구', href: '/guide/unemployment/eligibility-review-request-track' },
      { label: '피보험단위기간 확인', href: '/guide/unemployment/insured-period-check-track' },
    ],
  },

  // ─── 8. retirement-average-wage-bonus-inclusion-recalculation-track ───
  {
    domain: 'retirement',
    slug: 'retirement-average-wage-bonus-inclusion-recalculation-track',
    keyword: '상여 평균임금 산입 퇴직금 재산정 채권보호',
    questionKeyword: '매년 받던 상여가 평균임금에서 빠져 퇴직금이 적게 계산됐어요. 게다가 가족 상속·압류 문제까지 겹쳤는데 퇴직급여 채권은 어떻게 보호받을 수 있나요?',
    ctaKeyword: '상여 평균임금 산입 퇴직금 재산정 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '상여 퇴직금 재산정 — 5단계 평균임금·채권보호 점검 | 로앤가이드',
      description:
        '정기 상여가 평균임금에서 빠져 퇴직금이 적게 계산됐다면 평균임금 산입·재산정·퇴직급여채권 보호 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오래 일한 직장을 퇴직하며 받은 퇴직금이 생각보다 적어 명세를 따져 보니, 매년 정해진 기준으로 받아온 상여가 평균임금 계산에서 빠져 있었습니다. 회사는 \'상여는 별도\'라고 했지만, 정기적으로 지급돼 온 돈이라 납득이 어려웠어요. 설상가상으로 가족의 상속·채무 문제까지 겹치면서, 어렵게 받은 퇴직급여까지 압류 대상이 되는 건 아닌지 걱정이 큰 상태입니다." 근로기준법 제2조는 평균임금을 산정사유 발생일 이전 3개월간 지급된 임금 총액을 그 기간 총일수로 나눈 금액으로 정하고, 근로자퇴직급여 보장법은 계속근로 1년당 30일분 이상의 평균임금을 퇴직금으로 정하는 영역입니다. 판례는 평균임금에 산입되는 임금의 범위와 함께, 퇴직급여채권의 보호와 관련해 압류금지재산을 파산재단에서 제외하는 규정의 취지·적용 범위를 살핀 사례 흐름이 있습니다. 정기 상여 + 평균임금 누락 + 채권보호 결합은 \'퇴직금 재산정·채권 보호\' 검토가 가능한 트랙입니다. 피해자라면 ① 상여 성격 ② 평균임금 산입 ③ 재산정 ④ 채권보호 ⑤ 청구 5중 트랙이 가능한 영역. 대응은 ① 성격 ② 산입 ③ 재산정 ④ 보호 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 상여 퇴직금 재산정 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상여 성격·평균임금 산입·재산정·채권보호·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상여 성격</strong> — 정기상여·명절상여 등 지급 근거·주기·조건 정리.</li>\n<li><strong>② 평균임금 산입</strong> — 계속적·정기적 지급·지급의무·근로 대가성으로 산입 여부 판단.</li>\n<li><strong>③ 퇴직금 재산정</strong> — 산입 시 이전 3개월 임금총액 재산정 → 퇴직금 재계산.</li>\n<li><strong>④ 채권보호</strong> — 퇴직급여채권의 압류·파산 관련 보호 범위 검토.</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정·민사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정기상여가 평균임금에 산입되면 퇴직금이 재산정될 수 있는 영역. 판례 흐름은 평균임금에 산입되는 임금의 범위와 함께 퇴직급여채권의 보호(압류금지재산 제외 규정의 취지·적용)를 살핀 사례가 있어, 재산정과 채권보호를 함께 검토할 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 재산정·청구 5단계',
        content:
          '<p><strong>A. 고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임금·상여·퇴직금 자료 보존 (즉시)</strong> — 임금명세서·상여 지급 내역·퇴직금 산정 명세 보존.</li>\n<li><strong>2단계 — 상여 성격 정리 (1~2주)</strong> — 상여의 지급 근거·주기·조건(정기성·지급의무) 정리.</li>\n<li><strong>3단계 — 평균임금·퇴직금 재산정 (2~3주)</strong> — 상여 포함 평균임금 재산정 → 퇴직금 차액 도출.</li>\n<li><strong>4단계 — 고용노동부 진정·내용증명 (시효 3년 내)</strong> — 1350 진정 또는 회사 청구.</li>\n<li><strong>5단계 — 민사 청구·채권보호 검토</strong> — 미정산 시 소액·민사 청구 + 퇴직급여채권 보호 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">상여 평균임금 산입·퇴직금 재산정 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 성격·산입·재산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>임금명세서 (이전 3개월 임금총액)</strong></li>\n<li><strong>상여 지급 내역·지급 기준 자료</strong></li>\n<li><strong>단체협약·취업규칙·급여규정 (상여 지급의무 근거)</strong></li>\n<li><strong>퇴직금 산정 명세 (회사 산정 내역)</strong></li>\n<li><strong>평균임금·퇴직금 재산정표</strong></li>\n<li><strong>계속근로기간 입증 자료</strong></li>\n<li><strong>진정서·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상여가 평균임금에 산입되는지는 명칭이 아니라 계속적·정기적 지급·지급의무·근로 대가성으로 판단되는 영역. 상여 지급이 정기적이었고 지급의무가 지워져 있었다는 점을 규정·지급 내역으로 정리하면 퇴직금 재산정 다툼의 출발점이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>상여 정기성</strong> — 일정 주기로 계속·정기 지급됐는지.</li>\n<li><strong>지급의무·대가성</strong> — 지급의무가 지워졌고 근로 대가성이 있는지.</li>\n<li><strong>재산정 범위</strong> — 산입 시 평균임금·퇴직금 차액 산정.</li>\n<li><strong>채권보호</strong> — 퇴직급여채권의 압류·파산 관련 보호 범위.</li>\n<li><strong>시효 관리</strong> — 퇴직금 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (퇴직금 체불 신고·진정)</strong></li>\n<li><strong>고용노동부 임금체불 진정 온라인 (moel.go.kr)</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직급여채권의 보호와 평균임금 재산정 맥락',
        summary:
          '대법원 2022다285097(대법원, 2024.01.04 선고) 영역에서 법원은 소액사건이라도 법령 해석의 통일이 필요한 특별한 사정이 있으면 실체법 해석적용의 잘못을 판단할 수 있다고 전제한 뒤, 압류금지재산을 파산재단에서 제외하는 채무자회생법 제383조 제1항의 취지와 상속재산파산절차에의 적용 여부, 근로자퇴직급여 보장법상 피상속인의 퇴직급여채권이 상속재산파산절차에서 파산재단에 속하는지를 살펴 퇴직급여채권의 보호 범위에 관해 판시했습니다. 상여를 평균임금에 산입해 퇴직금을 재산정하고 그 채권의 보호를 검토할 때 이 맥락을 살펴볼 수 있습니다.',
        takeaway: '정기 상여 + 평균임금 누락 + 채권보호 결합 시 퇴직금 재산정·퇴직급여채권 보호 검토 영역 — 진정·민사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '상여도 평균임금에 들어가 퇴직금에 반영되나요?',
        answer:
          '<strong>계속·정기 지급·지급의무·근로 대가성으로 산입 여부를 판단하는 영역입니다.</strong> 상여 지급 기준·내역을 정리.',
      },
      {
        question: '회사가 상여는 별도라는데요?',
        answer:
          '<strong>명칭이 아니라 객관적 성질로 판단하는 영역입니다.</strong> 규정과 실제 지급 패턴을 함께 확보.',
      },
      {
        question: '재산정하면 퇴직금 차액은 어떻게 되나요?',
        answer:
          '<strong>상여 포함 평균임금 재산정 후 퇴직금을 다시 계산해 차액을 도출하는 영역입니다.</strong> 재산정표를 준비.',
      },
      {
        question: '퇴직급여가 압류될까 걱정돼요.',
        answer:
          '<strong>퇴직급여채권의 보호 범위는 압류·파산 관련 규정에 따라 검토되는 영역입니다.</strong> 채권 성격·관련 절차를 확인.',
      },
      {
        question: '퇴직금 차액 청구 시효는요?',
        answer:
          '<strong>퇴직금 청구 시효는 3년인 영역입니다.</strong> 퇴직일로부터 3년 내 차액 청구.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '평균임금 산정 기준', href: '/guide/retirement/retirement-average-wage-standard' },
      { label: '상여 평균임금 산입', href: '/guide/retirement/retirement-bonus-average-wage-inclusion' },
      { label: '퇴직급여채권 보호', href: '/guide/retirement/retirement-pension-claim-protection' },
      { label: '퇴직금 체불 진정', href: '/guide/retirement/retirement-pay-unpaid-report-track' },
    ],
  },

  // ─── 9. retirement-fixed-term-continuous-service-aggregation-track ───
  {
    domain: 'retirement',
    slug: 'retirement-fixed-term-continuous-service-aggregation-track',
    keyword: '위임 형식 근로자성 계속근로 통산 퇴직금',
    questionKeyword: '위임·도급 계약 형식으로 계열사를 옮겨가며 재계약을 반복해 일했어요. 회사는 근로자가 아니라 퇴직금이 없다는데, 전체 기간을 통산해 퇴직금을 받을 수 있나요?',
    ctaKeyword: '위임 형식 근로자성 계속근로 통산 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '위임 형식 퇴직금 — 5단계 근로자성·통산 점검 | 로앤가이드',
      description:
        '위임·도급 형식으로 계열사를 옮기며 일했는데 근로자가 아니라 퇴직금이 없다고 들었다면 근로자성·계속근로 통산 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'위임\'이나 \'도급\'이라는 이름의 계약으로 일했지만, 실제로는 회사의 지시에 따라 정해진 업무를 수행해 온 근로자입니다. 같은 그룹의 계열사로 소속이 순차로 바뀌었고 계약기간이 끝날 때마다 재계약을 했지만, 업무 장소·방법·전산시스템·팀 구성은 그대로였어요. 그런데 퇴직하려니 회사는 \'근로자가 아니라 위임계약자라 퇴직금이 없다\'고 합니다. 형식만 위임이지 실질은 종속적으로 일한 건데, 전체 기간을 합쳐 퇴직금을 받을 수 있는지 막막한 상태입니다." 근로기준법 제2조는 근로자를 임금을 목적으로 종속적 관계에서 근로를 제공하는 자로 정하고, 근로자퇴직급여 보장법은 계속근로 1년당 30일분 이상의 평균임금을 퇴직금으로 정하는 영역입니다. 판례는 근로자에 해당하는지는 계약 형식이 아니라 임금을 목적으로 사업장에서 종속적 관계에서 근로를 제공했는지의 실질로 판단하고, 계열사로 순차 소속을 옮기며 재계약했더라도 업무 장소·방법·내용·시스템·팀 구성 등 업무형태 실질이 그대로였다면 이전 회사 소속 기간을 포함한 근무기간 전체를 놓고 지휘·감독을 심리할 필요가 있다고 본 사례 흐름이 있습니다. 위임 형식 + 종속적 실질 + 순차 재계약 결합은 \'근로자성·계속근로 통산\' 다툼이 가능한 트랙입니다. 피해자라면 ① 계약 형식 ② 종속성 ③ 계속근로 통산 ④ 퇴직금 산정 ⑤ 청구 5중 트랙이 가능한 영역. 대응은 ① 형식 ② 종속성 ③ 통산 ④ 산정 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 위임 형식 퇴직금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약 형식·종속성·계속근로 통산·퇴직금 산정·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약 형식</strong> — 위임·도급 등 계약 명칭과 실제 업무 수행 방식 정리.</li>\n<li><strong>② 종속성</strong> — 임금 목적·지휘·감독 등 종속적 관계에서 근로를 제공했는지.</li>\n<li><strong>③ 계속근로 통산</strong> — 계열사 순차 소속·재계약 기간을 통산해 계속근로연수를 산정할 수 있는지.</li>\n<li><strong>④ 퇴직금 산정</strong> — 통산 계속근로기간 × 30일분 이상 평균임금 산정.</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정·민사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 근로자성은 계약 형식이 아니라 임금 목적·종속성의 실질로 판단되고, 계열사 순차 소속·재계약에도 업무형태 실질이 그대로였다면 근무기간 전체를 통산해 지휘·감독을 심리할 필요가 있는 영역. 형식이 위임이라는 사정만으로 퇴직금이 부정되지 않을 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 통산·청구 5단계',
        content:
          '<p><strong>A. 고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·업무 자료 보존 (즉시)</strong> — 역대 위임·도급 계약서·업무지시·전산 접속·조직도 자료 보존.</li>\n<li><strong>2단계 — 종속성 정리 (1~2주)</strong> — 업무 장소·방법·시간·지휘·감독·전속성 등 종속성 정황 정리.</li>\n<li><strong>3단계 — 계속근로 통산·퇴직금 산정 (2~3주)</strong> — 계열사 순차 기간 통산 → 평균임금 기준 퇴직금 산정.</li>\n<li><strong>4단계 — 고용노동부 진정·내용증명 (시효 3년 내)</strong> — 1350 진정 또는 회사 청구.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 포함 항목, AI로 먼저 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">위임 형식 근로자성·계속근로 통산 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 형식·종속성·통산 갈래입니다.</strong></p>\n<ul>\n<li><strong>역대 위임·도급 계약서 (소속·기간·재계약 이력)</strong></li>\n<li><strong>업무지시·보고 기록 (지휘·감독)</strong></li>\n<li><strong>근무표·출퇴근 기록 (근무 시간·장소)</strong></li>\n<li><strong>전산시스템·사번·조직도 자료 (전속성·소속)</strong></li>\n<li><strong>보수 지급 내역 (임금성·정기성)</strong></li>\n<li><strong>계열사 소속 변경 경위 자료 (통산 근거)</strong></li>\n<li><strong>퇴직금 산정표 (통산 계속근로기간 기준)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'형식은 위임이지만 실질은 종속적 근로\'였다는 점과 \'계열사로 소속만 바뀌었을 뿐 업무가 연속됐다\'는 점입니다. 업무 장소·방법·시스템·팀 구성이 그대로였다는 자료를 시간순으로 정리하면 계속근로 통산·퇴직금 청구의 출발점이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>근로자성</strong> — 계약 형식이 아닌 종속적 근로 실질에 해당하는지.</li>\n<li><strong>지휘·감독</strong> — 업무 수행에 상당한 지휘·감독이 있었는지.</li>\n<li><strong>계속근로 통산</strong> — 계열사 순차 소속·재계약 기간을 통산할 수 있는지.</li>\n<li><strong>업무 연속성</strong> — 소속 변경에도 업무형태 실질이 그대로였는지.</li>\n<li><strong>시효 관리</strong> — 퇴직금 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (퇴직금 체불 신고·진정)</strong></li>\n<li><strong>고용노동부 임금체불 진정 온라인 (moel.go.kr)</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위임직 채권추심원의 근로자성과 계속근로 통산',
        summary:
          '대법원 2021다210829(대법원, 2022.12.01 선고) 영역에서 법원은 근로기준법상 근로자에 해당하는지는 계약 형식보다 근로제공 관계의 실질이 임금을 목적으로 종속적 관계에서 근로를 제공했는지에 따라 판단해야 하고, 그룹 계열회사로 순차 소속을 옮기며 채권추심 위임계약을 체결한 후 계약기간 만료 때마다 재계약하며 근무한 위임직 채권추심원에 대해, 소속 변경 과정에서 업무 장소·방법·내용·전산시스템·팀 구성 등이 그대로였고 재계약 내용도 대부분 동일했던 사정 등에 비추어 이전 회사 소속 기간을 포함한 근무기간 전체를 놓고 상당한 지휘·감독이 있었는지를 심리할 필요가 있다고 판시했습니다. 위임 형식 퇴직금을 다툴 때 근로자성·계속근로 통산을 검토해볼 수 있습니다.',
        takeaway: '위임 형식 + 종속적 실질 + 순차 재계약 결합 시 근로자성 인정·계속근로 통산 검토 영역 — 진정·민사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '위임계약이라도 퇴직금을 받을 수 있나요?',
        answer:
          '<strong>계약 형식이 아닌 종속적 근로 실질로 근로자성을 판단하는 영역입니다.</strong> 지휘·감독 정황 자료를 정리.',
      },
      {
        question: '계열사를 옮겨 다녔는데 기간을 합칠 수 있나요?',
        answer:
          '<strong>업무형태 실질이 연속됐다면 근무기간 전체 통산을 검토해볼 수 있는 영역입니다.</strong> 소속 변경 경위·연속성 자료를 확보.',
      },
      {
        question: '재계약을 반복했는데 계속근로로 보나요?',
        answer:
          '<strong>업무 장소·방법·시스템 등이 그대로였는지를 종합 판단하는 영역입니다.</strong> 계약 이력·업무 연속성을 정리.',
      },
      {
        question: '근로자성은 무엇으로 판단하나요?',
        answer:
          '<strong>임금 목적·지휘·감독·전속성 등 종속성의 실질로 판단하는 영역입니다.</strong> 업무지시·보고 기록을 확보.',
      },
      {
        question: '퇴직금 청구 시효는요?',
        answer:
          '<strong>퇴직금 청구 시효는 3년인 영역입니다.</strong> 퇴직일로부터 3년 내 청구.',
      },
    ],
    cta: { text: '퇴직금 포함 항목, AI로 먼저 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '근로자성 판단 기준', href: '/guide/retirement/retirement-worker-status-standard' },
      { label: '계속근로기간 통산', href: '/guide/retirement/retirement-continuous-service-aggregation' },
      { label: '위임·도급 퇴직금', href: '/guide/retirement/retirement-mandate-contract-track' },
      { label: '퇴직금 체불 진정', href: '/guide/retirement/retirement-pay-unpaid-report-track' },
    ],
  },

  // ─── 10. industrial-accident-work-stress-mental-illness-recognition-track ───
  {
    domain: 'industrial-accident',
    slug: 'industrial-accident-work-stress-mental-illness-recognition-track',
    keyword: '업무 스트레스 정신질환 산재 인정 제3자 구상',
    questionKeyword: '과도한 업무와 스트레스로 정신질환 진단을 받았어요. 업무 때문이라는 걸 인정받아 산재로 처리할 수 있는지, 가해 회사에 대한 구상관계는 어떻게 되는지 궁금합니다.',
    ctaKeyword: '업무 스트레스 정신질환 산재 인정 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '업무 스트레스 산재 — 5단계 인과관계·요양급여 점검 | 로앤가이드',
      description:
        '과도한 업무·스트레스로 정신질환을 진단받았다면 업무상 인과관계·요양급여 신청·산재 인정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"감당하기 어려운 업무량과 지속적인 스트레스가 쌓이면서 정신질환 진단을 받은 근로자입니다. 분명 일 때문에 생긴 병이라는 생각이 드는데, \'정신질환은 산재로 인정받기 어렵다\'는 말부터 들어 막막했어요. 치료비와 쉬는 동안의 생활비도 걱정이고, 누구의 잘못으로 이렇게 됐는지 책임 관계도 복잡하게 얽혀 있어 어디서부터 풀어야 할지 모르겠습니다." 산업재해보상보험법 제5조는 업무상 재해를 업무상 사유에 따른 근로자의 부상·질병·장해·사망으로 정하고, 같은 법은 요양급여·휴업급여·장해급여 등을 정하는 영역입니다. 같은 법 제87조 제1항은 보험급여를 지급한 공단이 제3자에게 손해배상을 청구할 수 있는 구상관계를 정합니다. 판례는 산재보험법 제87조 제1항 본문의 \'제3자\'를 보험가입자인 사업주와 함께 직간접적으로 재해근로자와 산재보험관계가 없는 사람으로 해석하면서, 건설기계 임대 및 운전노무 제공 계약 등 사안에서 제3자 해당 여부를 살핀 사례 흐름이 있습니다. 과도한 업무 + 정신질환 진단 + 인과관계 결합은 \'업무상 재해 인정·요양급여\' 검토가 가능한 트랙입니다. 피해자라면 ① 업무 부담 ② 인과관계 ③ 요양급여 신청 ④ 휴업·장해급여 ⑤ 구상관계 5중 트랙이 가능한 영역. 대응은 ① 부담 ② 인과관계 ③ 요양 ④ 급여 ⑤ 구상 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 업무 스트레스 정신질환 산재 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 업무 부담·인과관계·요양급여·휴업/장해급여·구상관계 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 업무 부담</strong> — 업무량·근무시간·스트레스 요인 등 업무 부담의 정도 정리.</li>\n<li><strong>② 업무상 인과관계</strong> — 업무와 정신질환 사이 상당인과관계가 인정될 수 있는지.</li>\n<li><strong>③ 요양급여 신청</strong> — 근로복지공단에 요양급여 신청(업무상 질병 판정 절차).</li>\n<li><strong>④ 휴업·장해급여</strong> — 요양으로 인한 휴업급여·장해 잔존 시 장해급여 검토.</li>\n<li><strong>⑤ 구상관계</strong> — 산재보험 급여와 제3자 손해배상의 구상관계 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 업무상 재해는 업무와 질병 사이 상당인과관계가 인정될 때 성립하는 영역. 정신질환도 과도한 업무·스트레스와의 인과관계가 인정될 수 있고, 판례 흐름은 산재보험 급여 지급 후 제3자에 대한 구상관계에서 \'제3자\' 범위를 살핀 사례가 있어 책임 관계도 함께 검토할 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 요양급여 신청 5단계',
        content:
          '<p><strong>A. 근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·업무 자료 보존 (즉시)</strong> — 진단서·진료기록·근무기록·업무량 자료 보존.</li>\n<li><strong>2단계 — 업무 부담·인과관계 정리 (1~2주)</strong> — 업무량·근무시간·스트레스 사건과 발병 시점 연결 정리.</li>\n<li><strong>3단계 — 요양급여 신청 (근로복지공단)</strong> — 요양급여 신청서·소견서 제출(업무상 질병 판정).</li>\n<li><strong>4단계 — 휴업·장해급여 청구 (요양 중·종결 후)</strong> — 휴업급여 청구, 장해 잔존 시 장해급여 청구.</li>\n<li><strong>5단계 — 구상·손해배상 검토 (병행)</strong> — 제3자 책임이 있으면 구상관계·손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 산재 신청 절차와 서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">업무 스트레스 정신질환 산재 인정·요양급여 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=industrial-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 업무 부담·인과관계·요양 갈래입니다.</strong></p>\n<ul>\n<li><strong>정신질환 진단서·진료기록 (발병·치료 경과)</strong></li>\n<li><strong>근무기록·근무시간 자료 (업무량 입증)</strong></li>\n<li><strong>업무 분장·과업 자료 (부담 정도)</strong></li>\n<li><strong>스트레스 사건 정황 자료 (괴롭힘·과중 업무 등)</strong></li>\n<li><strong>동료 진술 (업무 환경 사실관계)</strong></li>\n<li><strong>요양급여 신청서·의학적 소견서</strong></li>\n<li><strong>임금·평균임금 자료 (휴업급여 산정)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정신질환 산재의 핵심은 업무와 발병 사이의 상당인과관계입니다. 발병 전 업무량·근무시간 증가, 구체적 스트레스 사건, 발병 시점의 시간적 근접성을 의학적 소견과 함께 정리하면 업무상 질병 판정 절차에서 인과관계를 뒷받침하는 자료가 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>업무상 인과관계</strong> — 업무 부담과 정신질환 발병 사이 상당인과관계.</li>\n<li><strong>업무 부담 정도</strong> — 업무량·근무시간·스트레스 사건의 객관적 입증.</li>\n<li><strong>기존 소인 평가</strong> — 기존 질환·개인 요인과 업무 요인의 관계.</li>\n<li><strong>구상관계 \'제3자\'</strong> — 산재보험관계 유무에 따른 제3자 해당 여부.</li>\n<li><strong>급여 종류</strong> — 요양·휴업·장해급여 등 청구 범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>근로복지공단 1588-0075 (산재 요양·급여 상담)</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>관할 근로복지공단 지사</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 산재보험법 제87조 제1항 \'제3자\'의 의미와 구상관계',
        summary:
          '대법원 2022다214040(대법원, 2026.01.22 선고) 영역에서 법원은 산업재해보상보험법 제87조 제1항 본문의 \'제3자\'란 보험가입자인 사업주와 함께 직간접적으로 재해근로자와 산재보험관계가 없는 사람으로서 재해근로자에 대해 불법행위책임 등 손해배상책임을 지는 자를 말한다고 해석하면서, 건설공사의 원수급인 등이 건설기계를 임차함과 아울러 임대인 또는 그 근로자로부터 운전노무까지 제공받기로 하는 계약이 체결된 사안 등에서 제3자 해당 여부를 살펴 공단의 대위권 행사 범위에 관해 판시했습니다. 업무상 재해로 산재 급여를 받은 뒤 제3자에 대한 구상·책임 관계를 검토할 때 이 기준을 살펴볼 수 있습니다.',
        takeaway: '과도한 업무 + 정신질환 진단 + 인과관계 결합 시 업무상 재해 인정·요양급여·구상관계 검토 영역 — 근로복지공단 상담·요양급여 신청 트랙.',
      },
    ],
    faq: [
      {
        question: '정신질환도 산재로 인정받을 수 있나요?',
        answer:
          '<strong>업무와 발병 사이 상당인과관계가 인정되면 업무상 재해로 검토되는 영역입니다.</strong> 업무량·스트레스 사건과 진단을 함께 정리.',
      },
      {
        question: '인과관계는 무엇으로 입증하나요?',
        answer:
          '<strong>업무 부담의 객관적 자료와 의학적 소견으로 뒷받침하는 영역입니다.</strong> 근무기록·진료기록·동료 진술을 확보.',
      },
      {
        question: '치료비와 생활비는 어떻게 지원되나요?',
        answer:
          '<strong>요양급여·휴업급여 등으로 검토되는 영역입니다.</strong> 요양급여 신청과 평균임금 자료를 함께 준비.',
      },
      {
        question: '회사가 아닌 제3자 책임은 어떻게 되나요?',
        answer:
          '<strong>산재보험관계 유무에 따라 제3자 해당 여부·구상관계가 달라지는 영역입니다.</strong> 책임 관계 자료를 정리.',
      },
      {
        question: '요양급여는 어디에 신청하나요?',
        answer:
          '<strong>근로복지공단에 요양급여를 신청하는 영역입니다.</strong> 신청서·의학적 소견서를 준비.',
      },
    ],
    cta: { text: '산재 신청 절차와 서류, AI로 정리하기', link: '/chat?domain=industrial-accident' },
    internalLinks: [
      { label: '산재 요양급여 신청', href: '/guide/industrial-accident/industrial-accident-medical-benefit-application' },
      { label: '업무상 질병 인정', href: '/guide/industrial-accident/industrial-accident-occupational-disease-recognition' },
      { label: '휴업급여 청구', href: '/guide/industrial-accident/industrial-accident-temporary-disability-benefit' },
      { label: '장해급여 청구', href: '/guide/industrial-accident/industrial-accident-disability-benefit-track' },
      { label: '산재 불승인 심사청구', href: '/guide/industrial-accident/industrial-accident-review-request-track' },
    ],
  },
];
