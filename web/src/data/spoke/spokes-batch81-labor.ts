import { SpokePage } from '../spoke-pages';

// batch81 dismissal + wage + unemployment + retirement + industrial-accident — 10개 (2026-05-29)
//
// 고유 존재 이유:
// 1. dismissal-pregnant-employee-maternity-protection-track — batch79·batch80 부당해고/정리해고/징계 절차류와 분기. 여기는 '임신·산전후휴가·육아휴직 중인 근로자에 대한 해고가 남녀고용평등법·근기법상 절대금지에 해당하는지' 절차형 트랙. 보호기간 해고 무효 + 노동위 구제·고용평등 진정 5중.
// 2. dismissal-fixed-term-renewal-expectation-right-track — 단순 기간만료 종료류와 분기. 여기는 '기간제 근로자에게 갱신·재고용 신뢰관계가 형성돼 갱신기대권이 인정되는지' 판단형 트랙. 합리적 이유 없는 갱신거절·재고용거절 무효가 핵심.
// 3. dismissal-transfer-order-refusal-disciplinary-discharge-track — 단순 전직거부·징계해고 분리류와 분기. 여기는 '부당한 전직명령 거부를 이유로 한 징계해고에서 업무상 필요성·근로자 생활상 불이익·신의칙상 협의 등 정당성 판단' 판단형 트랙.
// 4. wage-customary-bonus-ordinary-wage-inclusion-track — batch80 포괄임금 미산입 차액과 분기. 여기는 '정기상여금 등이 통상임금에 산입되는지(정기·일률·고정성 + 신의칙 항변)' 판단형 트랙. 통상임금 재산정·차액 청구가 핵심.
// 5. wage-on-call-standby-work-time-recognition-track — batch79·batch80 임금체불·연장수당과 분기. 여기는 '대기시간·휴게시간이 사용자 지휘·감독 아래 있어 근로시간으로 인정되는지' 판단형 트랙. 자유로운 이용 가능성·실질 구분이 핵심.
// 6. unemployment-pregnancy-childbirth-extended-period-track — 단순 수급기간 연장류와 분기. 여기는 '임신·출산·육아로 30일 이상 취업 불가능했던 경우 수급기간 연장 신청(30일 이내) 절차' 절차형 트랙. 신청기간·진단서·증빙이 핵심.
// 7. unemployment-illness-medical-treatment-extended-period-track — 단순 수급기간 연장류와 분기. 여기는 '본인·가족 질병·부상으로 30일 이상 취업이 곤란해 수급기간 연장 사유에 해당하는지' 절차형 트랙. 진단서·연장 인정 기준이 핵심.
// 8. retirement-deferred-pension-irp-rollover-tax-track — 단순 퇴직금 청구류와 분기. 여기는 '퇴직금 IRP 의무이전 이후 일시금·연금 수령 방식에 따른 세제(퇴직소득세·연금소득세) 절차' 절차형 트랙. 과세이연·세액 비교가 핵심.
// 9. retirement-intermediate-settlement-no-cause-invalid-claim-track — 단순 퇴직금 미지급류와 분기. 여기는 '근퇴법상 적법 사유 없는 중간정산은 무효 → 퇴직시점 기준 평균임금으로 재산정·차액 청구' 판단형 트랙. 적법 사유 한정성·재산정이 핵심.
// 10. industrial-accident-commute-deviation-personal-errand-track — batch80 과로 기존질병 악화류와 분기. 여기는 '출퇴근 중 일탈·중단(마트·은행 등 일상적 행위) 후 재해의 업무상 인정 여부' 판단형 트랙. 합리적 경로·시간·일상생활에 필요한 행위가 핵심.

export const spokesBatch81Labor: SpokePage[] = [
  // ─── 1. dismissal-pregnant-employee-maternity-protection-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-pregnant-employee-maternity-protection-track',
    keyword: '임산부 산전후휴가 해고 절대금지 구제',
    questionKeyword: '임신 사실을 알린 뒤부터 회사가 태도를 바꾸더니, 산전후휴가에 들어가기 직전 "경영이 어렵다"며 해고를 통보했어요. 임산부 해고는 무효라고 들었는데 어떻게 다투나요?',
    ctaKeyword: '임산부·산전후휴가 해고 절대금지 구제 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임산부 해고 — 5단계 절대금지·구제신청 점검 | 로앤가이드',
      description:
        '임신·산전후휴가 중에 해고 통보를 받았다면 보호기간 해고 무효·노동위 구제·고용평등 진정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"임신 사실을 회사에 알린 뒤부터 분위기가 달라지더니, 산전후휴가에 들어가기 직전 "경영이 어렵다"는 이유로 해고를 통보받은 근로자입니다. 휴가 후 복귀해도 자리는 없을 거라는 말까지 들었어요. 몸과 마음이 모두 지친 상황에서 출산 준비를 해야 하는데, 회사 말이 정말 맞는 건지, 임신 중인 사람을 이렇게 해고해도 되는 건지 막막한 상태입니다." 근로기준법 제23조 제2항은 사용자가 산전·산후 여성이 근로기준법에 따라 휴업한 기간과 그 후 30일 동안은 해고하지 못한다고 정하고, 남녀고용평등과 일·가정 양립 지원에 관한 법률 제11조 제1항·제19조 제3항은 사업주가 혼인·임신·출산·육아휴직 등을 이유로 해고·불리한 처우를 하지 못하도록 규정하는 영역입니다. 판례는 임신·출산·육아휴직 등을 이유로 한 해고는 절대적으로 금지되며, 보호기간 중 해고는 정당한 이유 유무와 관계없이 원칙적으로 무효라고 본 사례 흐름이 있습니다. 임신 통지 + 산전후휴가 직전·중 해고 + 보호기간 해고 결합은 \'해고 절대금지·노동위 구제·고용평등 진정\' 다툼이 가능한 트랙입니다. 피해자라면 ① 보호기간 ② 이유 ③ 해고 무효 ④ 노동위 구제 ⑤ 고용평등 진정 5중 트랙이 가능한 영역. 대응은 ① 보호기간 ② 이유 ③ 무효 ④ 노동위 ⑤ 진정 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 임산부·산전후휴가 해고 절대금지 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보호기간·이유·해고 무효·구제·고용평등 진정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 보호기간 확인</strong> — 근로기준법 제23조 제2항: 산전·산후 휴업기간과 그 후 30일 동안 해고 절대금지 영역인지.</li>\n<li><strong>② 해고 이유 정리</strong> — 임신·출산·산전후휴가·육아휴직을 이유로 한 해고 정황인지.</li>\n<li><strong>③ 해고 무효</strong> — 보호기간 해고 + 임신·출산 이유 해고는 정당한 이유와 관계없이 원칙적으로 무효 영역인지.</li>\n<li><strong>④ 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액 청구.</li>\n<li><strong>⑤ 고용평등 진정·시정신청</strong> — 고용노동부 1350 진정 + 남녀고용평등법 위반 시정신청.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 임신·출산·육아휴직 등을 이유로 한 해고는 절대적으로 금지되고, 보호기간 중 해고는 정당한 이유 유무와 관계없이 원칙적으로 무효로 평가될 수 있는 영역. 임신 사실 통지 + 산전후휴가 직전·중 해고 결합 시 절대금지 위반 다툼이 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고 통보·임신 통지 자료 보존 (즉시)</strong> — 해고 통보·임신 통지·산전후휴가 신청 자료 보존.</li>\n<li><strong>2단계 — 보호기간·이유 정리 (1주)</strong> — 산전후 휴업기간 + 30일 산정, 해고 사유와 임신·출산 정황 연결 정리.</li>\n<li><strong>3단계 — 해고 무효 자료 (2주)</strong> — 임신 후 회사 태도 변화·불이익 처우 정황 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n<li><strong>5단계 — 고용노동부 진정·시정신청 (병행)</strong> — 남녀고용평등법 위반 진정 + 시정신청.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임산부·산전후휴가 해고 절대금지 구제 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 보호기간·이유·해고 무효 갈래입니다.</strong></p>\n<ul>\n<li><strong>해고 통보서·통보 메시지 (해고일·사유 명시)</strong></li>\n<li><strong>임신 사실 통지·산전후휴가 신청 자료</strong></li>\n<li><strong>임신 진단서·산모수첩 (보호기간 입증)</strong></li>\n<li><strong>근로계약서·재직 기간 입증 자료</strong></li>\n<li><strong>회사 경영상황·동시기 다른 해고 정황 자료 (이유 진정성 판단)</strong></li>\n<li><strong>임신 후 불이익 처우·태도 변화 정황 자료</strong></li>\n<li><strong>해고 전 교신·면담 기록 (경위 입증)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보호기간(산전·산후 휴업기간 + 그 후 30일) 안에서 해고가 이루어졌다는 시점과, 임신 통지 이후 회사 태도가 달라졌다는 정황을 함께 정리하는 것이 핵심. 보호기간 해고는 정당한 이유 유무와 관계없이 원칙적으로 무효로 평가될 수 있는 영역이므로 사유 입증보다 시점 입증이 우선입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>보호기간 산정</strong> — 산전·산후 휴업기간과 그 후 30일 산정 정확성.</li>\n<li><strong>이유의 진정성</strong> — 경영상 이유가 진정한 사유인지, 임신·출산을 이유로 한 해고를 가린 것인지.</li>\n<li><strong>해고 절대금지</strong> — 보호기간·이유 결합 시 정당한 이유 유무와 관계없이 무효 평가.</li>\n<li><strong>구제·진정 병행</strong> — 노동위 부당해고 구제와 고용노동부 시정신청을 함께 진행할 수 있는지.</li>\n<li><strong>입증책임 분담</strong> — 사유의 진정성·예외 사유 입증은 사용자 측 부담.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (고용평등 진정)</strong></li>\n<li><strong>중앙노동위원회 02-3140-9300</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 영업양도와 근로관계 승계, 부당한 해고 판단 기준',
        summary:
          '대법원 2023두54914(대법원, 2026.01.29 선고) 영역에서 법원은 근로기준법상 근로자에 해당하는지는 계약 형식이 아니라 임금을 목적으로 종속적 관계에서 근로를 제공했는지의 실질로 판단해야 하고, 영업양도가 이루어진 경우 해당 근로자들의 근로관계가 양수하는 기업에 포괄적으로 승계되는 것이 원칙이며, 영업양도 당사자 사이에 근로관계 일부를 승계 대상에서 제외하기로 하는 특약에 따라 영업양도 자체만을 사유로 삼아 근로자를 해고한 경우 근로기준법 제23조 제1항에서 정한 정당한 이유가 있다고 보기 어렵다고 판시했습니다. 임신·출산 보호기간 중 해고나 사유의 진정성을 검토할 때에도 정당한 이유 판단 기준을 살펴볼 수 있습니다.',
        takeaway: '임신 통지 + 산전후휴가 직전·중 해고 + 보호기간 결합 시 정당한 이유 유무와 관계없이 절대금지 평가 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '회사가 경영상 이유라고 하면 임산부도 해고할 수 있나요?',
        answer:
          '<strong>보호기간 중 해고는 정당한 이유 유무와 관계없이 원칙적으로 무효로 평가되는 영역입니다.</strong> 보호기간 산정·임신 통지 시점 정리가 우선.',
      },
      {
        question: '산전후휴가 들어가기 직전 해고됐는데 보호되나요?',
        answer:
          '<strong>임신·출산을 이유로 한 해고는 절대적으로 금지되는 영역입니다.</strong> 임신 통지 후 태도 변화·해고 시점 정황을 정리.',
      },
      {
        question: '노동위 구제와 고용평등 진정을 같이 할 수 있나요?',
        answer:
          '<strong>노동위 부당해고 구제신청과 고용노동부 고용평등 진정·시정신청을 병행해볼 수 있는 영역입니다.</strong> 두 절차의 자료를 함께 준비.',
      },
      {
        question: '복직되면 휴가·급여는 어떻게 되나요?',
        answer:
          '<strong>해고가 무효로 평가되면 원직복직과 해고기간 임금상당액 청구가 검토되는 영역입니다.</strong> 임금상당액 산정 자료를 확보.',
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
      { label: '임신·출산 불이익 진정', href: '/guide/dismissal/dismissal-pregnancy-disadvantage-complaint' },
      { label: '육아휴직 복귀 거부', href: '/guide/dismissal/dismissal-parental-leave-return-refusal' },
      { label: '해고예고수당 계산', href: '/guide/dismissal/dismissal-notice-pay-calculation' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 2. dismissal-fixed-term-renewal-expectation-right-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-fixed-term-renewal-expectation-right-track',
    keyword: '기간제 갱신기대권 재고용 거절 무효',
    questionKeyword: '계약직으로 일하면서 매번 자동으로 갱신돼 왔고 회사도 "계속 일할 거다"는 식이었어요. 그런데 갑자기 계약만료를 통보하며 갱신을 거절했어요. 갱신기대권으로 다툴 수 있나요?',
    ctaKeyword: '기간제 갱신기대권 합리적 이유 없는 거절 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '기간제 갱신기대권 — 5단계 합리적 이유·재고용 점검 | 로앤가이드',
      description:
        '계약직 갱신이 관행처럼 이어졌는데 갑자기 갱신을 거절당했다면 갱신기대권·합리적 이유·재고용 거절 무효 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"기간제(계약직) 근로자로 입사한 뒤 한두 차례가 아니라 여러 번 자동으로 계약이 갱신되며 일해 온 사람입니다. 동료들 사이에서도 \'요건만 맞으면 계속 갱신해준다\'는 분위기였고, 회사도 평가에 큰 문제가 없으면 갱신을 거절한 적이 거의 없었어요. 그런데 어느 날 별다른 사유 설명도 없이 \'이번 계약기간으로 종료\'라는 통보를 받았습니다. 그동안 쌓인 신뢰가 있는데, 갑작스러운 갱신 거절을 그대로 받아들여야 하는지 막막한 상태입니다." 기간제 및 단시간 근로자 보호 등에 관한 법률은 기간제 근로계약을 정하고, 판례는 근로계약·취업규칙·단체협약 등에서 일정 요건 충족 시 갱신·재고용을 정하고 있거나 그러한 관행이 확립돼 갱신·재고용에 대한 신뢰관계가 형성된 경우 근로자에게 갱신기대권이 인정되며, 사용자의 합리적 이유 없는 갱신·재고용 거절은 부당해고와 마찬가지로 효력이 없다고 본 사례 흐름이 있는 영역입니다. 다회 갱신 + 갱신 관행 + 일방적 거절 결합은 \'갱신기대권 인정·거절 합리성\' 다툼이 가능한 트랙입니다. 피해자라면 ① 갱신 이력 ② 기대권 형성 ③ 거절 합리성 ④ 노동위 구제 ⑤ 임금상당액 5중 트랙이 가능한 영역. 대응은 ① 이력 ② 기대권 ③ 합리성 ④ 노동위 ⑤ 임금 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 기간제 갱신기대권 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 갱신 이력·기대권·거절 합리성·구제·임금상당액 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 갱신 이력</strong> — 그동안의 계약 갱신 횟수·기간·갱신 관행 정리.</li>\n<li><strong>② 기대권 형성</strong> — 계약서·취업규칙·단체협약 또는 사업장 관행상 갱신·재고용 신뢰관계가 형성됐는지.</li>\n<li><strong>③ 거절 합리성</strong> — 갱신·재고용 거절 사유에 합리적 이유가 있는지(평가·경영상 사유 등).</li>\n<li><strong>④ 노동위 구제신청 (계약만료 3개월 이내)</strong> — 부당한 갱신거절 구제.</li>\n<li><strong>⑤ 원직복직·임금상당액</strong> — 갱신·재고용이 인정될 경우의 후속 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 갱신기대권이 인정되는 경우 사용자의 합리적 이유 없는 갱신 거절은 부당해고와 마찬가지로 효력이 없는 영역. 다회 갱신·관행·신뢰관계 형성 + 거절 사유의 합리성 부재 결합 시 갱신거절 무효 다툼이 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·갱신 자료 보존 (즉시)</strong> — 역대 계약서·갱신 통지·평가 자료·갱신 관행 자료 보존.</li>\n<li><strong>2단계 — 갱신 이력 정리 (1주)</strong> — 갱신 횟수·기간·동료 갱신 비율 등 관행 자료 정리.</li>\n<li><strong>3단계 — 거절 사유 자료 (2주)</strong> — 거절 통지·평가 결과·경영상 사유의 합리성 자료 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (계약만료 3개월 이내)</strong> — 갱신기대권 + 합리적 이유 부재 다툼.</li>\n<li><strong>5단계 — 임금상당액·원직복직</strong> — 갱신 인정 시 임금상당액 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사직서 쓰기 전 확인할 것, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">기간제 갱신기대권·합리적 이유 없는 거절 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 갱신 이력·기대권·거절 합리성 갈래입니다.</strong></p>\n<ul>\n<li><strong>역대 근로계약서 (갱신 횟수·기간 입증)</strong></li>\n<li><strong>취업규칙·단체협약 (갱신·재고용 규정)</strong></li>\n<li><strong>갱신 통지·재계약 안내 자료</strong></li>\n<li><strong>인사평가·실적평가 자료 (요건 충족 입증)</strong></li>\n<li><strong>갱신거절·계약만료 통보서 (거절 사유 명시)</strong></li>\n<li><strong>동료 갱신 비율·관행 자료 (사업장 갱신 관행)</strong></li>\n<li><strong>면담·교신 기록 (갱신 기대 정황)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 갱신기대권은 계약서·취업규칙·단체협약 등 명시적 근거가 있을 때뿐 아니라, 그러한 규정이 없더라도 갱신 관행이 확립돼 있다고 인정되는 경우에도 형성될 수 있는 영역. 횟수·관행·평가 결과·거절 사유 합리성을 종합적으로 정리해두는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>갱신기대권 형성</strong> — 계약서·규정·관행 등 신뢰관계 형성 정도.</li>\n<li><strong>거절 사유 합리성</strong> — 거절 사유가 객관적·합리적인지, 자의적인지.</li>\n<li><strong>평가의 공정성</strong> — 평가 기준·절차가 공정·합리적이었는지.</li>\n<li><strong>구제신청 기한</strong> — 계약만료일로부터 3개월 내 신청.</li>\n<li><strong>입증책임 분담</strong> — 기대권 형성 정황은 근로자, 합리적 거절 이유는 사용자 측 부담.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 02-3140-9300</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정년 후 기간제 재고용 신뢰관계와 갱신기대권',
        summary:
          '대법원 2023두41727(대법원, 2023.11.02 선고) 영역에서 법원은 근로계약·취업규칙·단체협약 등에서 정년에 도달한 근로자가 일정 요건을 충족하면 기간제 근로자로 재고용해야 한다는 취지의 규정을 두고 있거나, 그러한 규정이 없더라도 재고용을 실시하게 된 경위·실시기간·재고용된 사람의 비율·재고용 거절 사유 등을 종합해 사업장에 그에 준하는 정도의 재고용 관행이 확립돼 있다고 인정되는 등 근로계약 당사자 사이에 재고용 신뢰관계가 형성된 경우, 근로자는 정년 후 재고용되리라는 기대권을 가지고, 합리적 이유 없는 재고용 거절은 효력이 없다고 판시했습니다. 다회 갱신·관행 사안에서 기대권 인정·거절 합리성을 검토해볼 수 있습니다.',
        takeaway: '다회 갱신 + 갱신 관행 + 합리적 이유 없는 거절 결합 시 갱신·재고용 기대권 인정·거절 무효 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '갱신기대권이 인정되는 기준이 있나요?',
        answer:
          '<strong>계약서·취업규칙·단체협약 또는 사업장 갱신 관행으로 신뢰관계가 형성됐는지가 핵심인 영역입니다.</strong> 갱신 횟수·관행 자료를 함께 정리.',
      },
      {
        question: '계약기간이 끝났는데도 부당해고로 다툴 수 있나요?',
        answer:
          '<strong>갱신기대권이 인정되면 합리적 이유 없는 갱신거절은 부당해고와 마찬가지로 효력이 없는 영역입니다.</strong> 거절 사유의 합리성을 함께 점검.',
      },
      {
        question: '평가가 나빠서 갱신 거절됐는데 다툴 수 있나요?',
        answer:
          '<strong>평가 기준·절차의 공정성·합리성도 함께 다툼 대상이 되는 영역입니다.</strong> 평가 자료·동료 비교 자료를 확보.',
      },
      {
        question: '갱신 횟수가 많지 않으면 어렵나요?',
        answer:
          '<strong>횟수뿐 아니라 갱신 관행·동료 갱신 비율·면담 정황 등 신뢰관계 형성 정도를 종합 판단하는 영역입니다.</strong> 관행 자료를 폭넓게 정리.',
      },
      {
        question: '구제신청 기한이 있나요?',
        answer:
          '<strong>계약만료일로부터 3개월 이내가 노동위 구제신청 기한입니다.</strong> 기한 도과 전 신속 진행 검토.',
      },
    ],
    cta: { text: '사직서 쓰기 전 확인할 것, AI로 점검하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '기간제 갱신거절 무효', href: '/guide/dismissal/dismissal-fixed-term-renewal-refusal-void' },
      { label: '계약직 2년 정규직 전환', href: '/guide/dismissal/dismissal-fixed-term-2years-regular-conversion' },
      { label: '계약만료 실업급여', href: '/guide/unemployment/contract-expiry-benefit-application-order' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 3. dismissal-transfer-order-refusal-disciplinary-discharge-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-transfer-order-refusal-disciplinary-discharge-track',
    keyword: '전직명령 거부 징계해고 업무상 필요성',
    questionKeyword: '회사가 갑자기 먼 지역 부서로 전직 발령을 냈는데, 받아들이기 어려워 거부했더니 "명령불복종"이라며 징계해고했어요. 부당한 전직명령을 거부한 건데도 해고가 정당한가요?',
    ctaKeyword: '부당 전직명령 거부 징계해고 다툼 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '전직명령 거부 징계해고 — 5단계 정당성·불이익 점검 | 로앤가이드',
      description:
        '부당한 전직명령을 거부했다는 이유로 징계해고됐다면 업무상 필요성·근로자 불이익·신의칙 협의 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오랫동안 한 지역·부서에서 근무해 왔는데, 어느 날 회사가 별다른 협의 없이 멀리 떨어진 다른 지역 부서로 전직 발령을 냈습니다. 가족 사정과 출퇴근, 주된 업무 내용까지 모두 달라지는 큰 변화여서 받아들이기 어렵다고 의견을 냈더니, 회사는 \'정당한 인사명령에 대한 명령불복종\'이라며 곧바로 징계해고를 통보했어요. 전직명령 자체가 정당했는지, 그걸 거부한 게 곧바로 해고 사유가 되는지 막막한 상태입니다." 근로기준법 제23조 제1항은 사용자가 정당한 이유 없이 해고·전직 등을 하지 못한다고 규정하고, 판례는 근로자에 대한 전직처분이 정당한 인사권 범위에 속하는지를 판단할 때 업무상 필요성, 근로자가 입게 될 생활상 불이익, 신의칙상 요구되는 절차(협의 등)를 종합해 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 또한 어떤 사유가 징계해고 사유에는 해당하나 통상해고 사유에는 해당하지 않더라도 그 사유를 이유로 한 통상해고 처분이 가능한 범위와 절차의 부가 필요성도 함께 평가되는 영역입니다. 일방적 전직발령 + 협의 미비 + 거부에 따른 징계해고 결합은 \'전직명령 정당성·해고 정당성\' 다툼이 가능한 트랙입니다. 피해자라면 ① 전직명령 정당성 ② 협의 절차 ③ 해고 정당성 ④ 노동위 구제 ⑤ 임금상당액 5중 트랙이 가능한 영역. 대응은 ① 정당성 ② 협의 ③ 해고 ④ 노동위 ⑤ 임금 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 전직명령 거부 징계해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 전직 정당성·협의·해고 정당성·구제·임금상당액 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 전직명령 정당성</strong> — 업무상 필요성·근로자 생활상 불이익·신의칙상 절차의 종합 판단.</li>\n<li><strong>② 협의 절차</strong> — 전직 전 신의칙상 요구되는 협의·설명이 있었는지.</li>\n<li><strong>③ 해고 정당성</strong> — 부당한 전직명령 거부를 이유로 한 징계해고가 정당한 이유에 해당하는지.</li>\n<li><strong>④ 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당전직·부당해고 구제 결합 다툼.</li>\n<li><strong>⑤ 원직복직·임금상당액</strong> — 해고 무효 시 후속 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 전직명령은 업무상 필요성·근로자 생활상 불이익·신의칙상 절차를 종합해 정당성을 판단하는 영역이고, 부당한 전직명령을 거부했다는 사유만으로 곧바로 정당한 해고 사유가 된다고 단정하기 어려운 트랙. 전직 자체의 정당성 다툼이 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 전직 발령·해고 자료 보존 (즉시)</strong> — 전직 발령서·해고 통보서·면담 기록 보존.</li>\n<li><strong>2단계 — 업무상 필요성·불이익 정리 (1주)</strong> — 발령의 업무상 필요성과 근로자 생활상 불이익(주거·가족·통근·업무 변화) 정리.</li>\n<li><strong>3단계 — 협의 절차 자료 (2주)</strong> — 신의칙상 협의·설명 부재 정황 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당전직·부당해고 구제 결합.</li>\n<li><strong>5단계 — 원직복직·임금상당액</strong> — 해고 무효 시 임금상당액 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">부당 전직명령 거부 징계해고 다툼 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 전직 정당성·협의·해고 갈래입니다.</strong></p>\n<ul>\n<li><strong>전직 발령서·인사명령서 (시점·내용)</strong></li>\n<li><strong>업무상 필요성 자료 (인력 운용·조직 변화 등)</strong></li>\n<li><strong>생활상 불이익 자료 (주거·가족·통근·업무 변화)</strong></li>\n<li><strong>협의·설명 부재 정황 자료 (면담 기록·교신)</strong></li>\n<li><strong>거부 의사 표시·사유 기록</strong></li>\n<li><strong>징계해고 통보서·징계위원회 자료</strong></li>\n<li><strong>근로계약서·취업규칙 (전직 관련 조항)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 전직처분의 정당성은 업무상 필요성과 근로자가 입게 될 생활상 불이익을 비교형량하고 신의칙상 요구되는 협의 등을 함께 평가해 종합 판단되는 영역. 생활상 불이익이 크고 협의가 부족했다는 정황을 함께 정리하면 전직 자체의 정당성을 다툴 수 있는 자료가 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>업무상 필요성</strong> — 전직이 인사관리·조직운영상 합리적 필요에 기한 것인지.</li>\n<li><strong>생활상 불이익</strong> — 주거·가족·통근·업무 변화에 따른 근로자 불이익 정도.</li>\n<li><strong>협의 절차</strong> — 신의칙상 요구되는 협의·설명이 이행됐는지.</li>\n<li><strong>해고 사유 정당성</strong> — 거부 행위가 곧바로 해고 사유로 정당화되는지.</li>\n<li><strong>입증책임 분담</strong> — 전직·해고 정당성 입증은 사용자, 불이익·협의 부재 정황은 근로자 측 정리 필요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 02-3140-9300</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 통상해고·징계해고의 정당한 이유와 절차 부가 평가',
        summary:
          '대법원 2021두33470(대법원, 2023.12.28 선고) 영역에서 법원은 특정사유가 징계해고 사유에는 해당하나 통상해고 사유에는 해당하지 않는 경우에도 그 사유를 이유로 한 통상해고 처분이 사용자의 재량에 속하는 적법한 것이 될 수 있으나, 근로자에게 변명의 기회가 부여되지 않더라도 해고가 당연시될 정도의 특별한 사유가 없는 한 징계해고에 따른 소정의 절차가 부가적으로 요구된다고 보았습니다. 또한 사용자가 취업규칙에서 정한 해고 사유에 해당한다는 이유로 근로자를 해고할 때에도 정당한 이유가 있어야 하고, 근무성적·근무능력 불량을 이유로 한 해고는 평가의 공정성과 사회통념상 고용관계 유지 불가능성을 종합 판단해야 한다고 판시했습니다. 전직 거부 사안에서도 해고 사유의 정당성·절차의 충실성을 살펴볼 수 있습니다.',
        takeaway: '일방적 전직발령 + 협의 미비 + 거부에 따른 징계해고 결합 시 전직·해고 정당성 종합판단 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '전직명령을 거부했는데 곧바로 해고할 수 있나요?',
        answer:
          '<strong>전직명령 자체의 정당성과 거부의 사유가 함께 평가되는 영역입니다.</strong> 업무상 필요성·생활상 불이익·협의 절차를 정리.',
      },
      {
        question: '전직이 정당한지는 어떻게 판단되나요?',
        answer:
          '<strong>업무상 필요성·근로자 생활상 불이익·신의칙상 절차를 종합 판단하는 영역입니다.</strong> 발령 경위와 불이익 자료를 함께 정리.',
      },
      {
        question: '협의를 안 거친 전직도 다툴 수 있나요?',
        answer:
          '<strong>신의칙상 요구되는 협의·설명의 부재는 전직 정당성 평가의 중요한 사정인 영역입니다.</strong> 면담 기록·교신 자료를 확보.',
      },
      {
        question: '징계위원회는 어떻게 다툴 수 있나요?',
        answer:
          '<strong>징계 절차의 공정성·변명 기회 부여 여부가 함께 다툼 대상이 되는 영역입니다.</strong> 출석 통지·변명 기회 기록을 정리.',
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
      { label: '부당전직 구제', href: '/guide/dismissal/dismissal-unfair-transfer-relief-track' },
      { label: '대기발령·면직 다툼', href: '/guide/dismissal/dismissal-standby-discharge-track' },
      { label: '징계 출석·소명권', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 4. wage-customary-bonus-ordinary-wage-inclusion-track ───
  {
    domain: 'wage',
    slug: 'wage-customary-bonus-ordinary-wage-inclusion-track',
    keyword: '정기상여금 통상임금 산입 차액',
    questionKeyword: '회사가 매년 정해진 기준으로 상여금을 지급해 왔는데, 통상임금에는 안 들어간다며 연장수당을 적게 줬어요. 정기상여금을 통상임금에 포함해 차액을 받을 수 있나요?',
    ctaKeyword: '정기상여금 통상임금 산입 차액 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '정기상여 통상임금 산입 — 5단계 정기·일률·고정성 점검 | 로앤가이드',
      description:
        '정기상여금을 통상임금에서 빼고 연장수당을 적게 받았다면 정기·일률·고정성·신의칙·차액 재산정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"매년 정해진 기준에 따라 일정 비율의 상여금을 받아온 근로자입니다. 회사는 \'상여금은 통상임금이 아니다\'라며 연장·야간·휴일근로수당을 기본급만 기준으로 산정해 지급해 왔어요. 그런데 다른 사업장 사례를 보니 정기상여금이 통상임금에 포함돼 수당을 다시 계산해 받은 경우가 있다고 들었습니다. 우리 회사 상여금은 정기상여로서 통상임금에 들어가는지, 들어간다면 그동안 못 받은 차액을 어떻게 청구할 수 있는지 막막한 상태입니다." 근로기준법 제2조의 통상임금은 근로자에게 정기적·일률적·고정적으로 지급되는 임금을 말하고, 같은 법 제56조는 연장·야간·휴일근로에 통상임금의 50% 이상 가산을 정하는 영역입니다. 판례는 어떤 임금이 통상임금에 해당하는지는 명칭이 아니라 소정근로의 대가로 정기·일률·고정적으로 지급되는지로 객관적 성질에 따라 판단하고, 일정 근무일수 충족을 조건으로 지급하는 임금이라는 사정만으로 통상임금성이 부정되는 것은 아니라는 사례 흐름이 있습니다. 정기 지급 + 일률 적용 + 지급 조건이 사전 확정 결합은 \'통상임금 산입·차액 청구\' 다툼이 가능한 트랙입니다. 피해자라면 ① 상여금 성격 ② 정기·일률·고정성 ③ 신의칙 ④ 차액 산정 ⑤ 청구 5중 트랙이 가능한 영역. 대응은 ① 성격 ② 3요소 ③ 신의칙 ④ 차액 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 정기상여 통상임금 산입 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상여금 성격·3요소·신의칙·차액·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상여금 성격</strong> — 정기상여금·명절상여·실적상여 등 지급 방식·근거 정리.</li>\n<li><strong>② 정기·일률·고정성</strong> — 정기적·전체 또는 일정 조건 근로자에게 일률적·사전 확정 고정적으로 지급되는지.</li>\n<li><strong>③ 신의칙 항변</strong> — 사용자 신의칙 항변 사정의 존부·정도.</li>\n<li><strong>④ 차액 산정</strong> — 통상임금 재산정 → 연장·야간·휴일수당 차액 도출.</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정·민사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 통상임금은 명칭이 아니라 소정근로 대가의 정기·일률·고정성으로 판단되는 영역. 일정 근무일수 충족 조건이 부가됐다는 사정만으로 통상임금성이 부정되지 않을 수 있으며, 정기상여금이 통상임금에 산입되면 연장수당 차액 청구가 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 차액 청구 5단계',
        content:
          '<p><strong>A. 고용노동부·근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 상여금 규정·명세서 보존 (즉시)</strong> — 단체협약·취업규칙·임금규정·상여금 지급 내역 보존.</li>\n<li><strong>2단계 — 3요소 정리 (1~2주)</strong> — 지급 주기·범위·고정성 여부 정리(정기·일률·고정성).</li>\n<li><strong>3단계 — 통상임금 재산정·차액 산정 (2~3주)</strong> — 정기상여 포함 통상임금 재산정 → 가산수당 차액 도출.</li>\n<li><strong>4단계 — 고용노동부 진정·내용증명 (시효 3년 내)</strong> — 1350 진정 또는 회사 청구.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 야근수당 신고 가능성, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">정기상여금 통상임금 산입 차액 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 성격·3요소·차액 갈래입니다.</strong></p>\n<ul>\n<li><strong>단체협약·취업규칙·임금규정 (상여금 지급 규정)</strong></li>\n<li><strong>임금명세서·상여금 지급 내역 (지급 주기·금액)</strong></li>\n<li><strong>출퇴근 기록·근무표 (실제 연장근로시간)</strong></li>\n<li><strong>통상임금 산정 자료 (정기·일률·고정 항목)</strong></li>\n<li><strong>차액 산정표 (재산정 통상임금 × 50% 기준)</strong></li>\n<li><strong>회사 회신·내용증명 사본</strong></li>\n<li><strong>진정서 (고용노동부 양식)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정기상여금이 통상임금에 산입되는지는 지급주기·지급 대상·지급 조건의 사전 확정성 등 정기·일률·고정성을 객관적으로 살펴 판단되는 영역. 명칭이 \'상여\'라는 이유만으로 통상임금에서 배제된다고 단정하기 어려운 트랙입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>정기성</strong> — 매월·분기·반기 등 일정 주기로 정기 지급되는지.</li>\n<li><strong>일률성</strong> — 전체 또는 일정 조건 모든 근로자에게 일률 지급되는지.</li>\n<li><strong>고정성</strong> — 지급 여부·액수가 사전에 확정되는지.</li>\n<li><strong>지급조건 부가</strong> — 일정 근무일수 조건이 통상임금성 부정으로 곧장 이어지지 않는지.</li>\n<li><strong>시효 관리</strong> — 임금 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (임금체불 신고·진정)</strong></li>\n<li><strong>고용노동부 임금체불 진정 온라인 (moel.go.kr)</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 통상임금 정기·일률·고정성과 지급조건 부가 평가',
        summary:
          '대법원 2022다257238(대법원, 2025.07.18 선고) 영역에서 법원은 통상임금의 개념과 판단 기준에 관해 어떠한 임금이 통상임금에 속하는지는 명칭에 관계없이 소정근로의 대가로 정기적·일률적·고정적으로 지급되는지를 객관적 성질에 따라 판단해야 하고, 어떤 임금에 일정 근무일수를 충족하여야만 지급한다는 조건이 부가되어 있다는 사정만으로 통상임금성이 부정되는 것은 아니라고 보았으며, 일반택시운송사업 임금협정상 상여금이 소정근로의 제공 외에 일정 기간 \'중대 교통사고를 유발하지 않을 것\'이라는 추가적인 조건 등에 따라 지급 여부·액수가 좌우되는 사안의 통상임금성을 살핀 사례 흐름이 있습니다. 정기상여금의 통상임금 산입 여부를 검토할 때에도 동일한 기준을 살펴볼 수 있습니다.',
        takeaway: '정기상여금의 정기·일률·고정성이 인정되면 통상임금 산입·연장수당 차액 청구 검토 영역 — 진정·민사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '상여금이라도 통상임금에 들어갈 수 있나요?',
        answer:
          '<strong>명칭이 아니라 정기·일률·고정성의 객관적 성질로 판단하는 영역입니다.</strong> 지급 주기·범위·조건을 함께 정리.',
      },
      {
        question: '근무일수 조건이 붙어 있는데도 통상임금인가요?',
        answer:
          '<strong>일정 근무일수 조건이 부가됐다는 사정만으로 통상임금성이 부정된다고 단정하기 어려운 영역입니다.</strong> 조건의 성격을 종합적으로 검토.',
      },
      {
        question: '차액은 어떻게 계산하나요?',
        answer:
          '<strong>정기상여 포함 통상임금 재산정 후 연장·야간·휴일수당 × 50% 가산 차액으로 계산하는 영역입니다.</strong> 명세서·근무표를 함께 정리.',
      },
      {
        question: '회사는 상여금은 통상임금이 아니라는데요?',
        answer:
          '<strong>객관적 성질에 따라 판단하는 영역이므로 명칭만으로 결정되지 않습니다.</strong> 임금규정과 실제 지급 패턴을 정리.',
      },
      {
        question: '차액 청구 시효는 얼마인가요?',
        answer:
          '<strong>임금 청구 시효는 3년인 영역입니다.</strong> 지급일로부터 3년 내 차액 청구.',
      },
    ],
    cta: { text: '야근수당 신고 가능성, AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '정기상여 통상임금 산입', href: '/guide/wage/wage-regular-bonus-ordinary-wage-track' },
      { label: '통상임금 재산정 차액', href: '/guide/wage/wage-ordinary-wage-recalculation-difference' },
      { label: '포괄임금 연장수당 차액', href: '/guide/wage/wage-pogual-overtime-difference-claim' },
      { label: '연장근로수당 청구', href: '/guide/wage/wage-overtime-unpaid-claim' },
      { label: '임금체불 진정 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
    ],
  },

  // ─── 5. wage-on-call-standby-work-time-recognition-track ───
  {
    domain: 'wage',
    slug: 'wage-on-call-standby-work-time-recognition-track',
    keyword: '대기시간 휴게시간 근로시간 인정',
    questionKeyword: '근무 중간에 명목상 휴게시간을 받지만 사실상 자리를 비울 수 없고 호출이 오면 바로 일해야 했어요. 그 시간도 근로시간으로 인정해 임금을 더 받을 수 있나요?',
    ctaKeyword: '대기시간·휴게시간 근로시간 인정 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '대기시간 근로시간 인정 — 5단계 지휘·자유시간 점검 | 로앤가이드',
      description:
        '명목상 휴게시간인데 자리를 못 비우고 호출에 응했다면 지휘·감독 여부·자유 이용·근로시간 인정·차액 청구 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"근무표상으로는 중간에 휴게시간이 정해져 있는데, 실제로는 자리를 비울 수 없거나 호출이 오면 즉시 응해야 하는 환경에서 일해 온 근로자입니다. 식사 중에도 사장이나 손님 호출이 오면 바로 일을 해야 했고, 휴식이라기보다는 \'언제 부를지 모르니 옆에서 기다리는 시간\'에 가까웠어요. 회사는 \'휴게시간이니 임금에서 빼는 게 당연하다\'고 하는데, 사실상 일에 묶여 있던 그 시간도 근로시간으로 인정받아 임금을 더 받을 수 있는 건지 막막한 상태입니다." 근로기준법 제50조 제3항은 사용자의 지휘·감독 아래 있는 대기시간 등을 근로시간으로 보는 취지로, 같은 법 제54조는 휴게시간을 근로시간 도중에 근로자가 자유롭게 이용할 수 있도록 보장하는 영역입니다. 판례·실무는 명칭이 휴게시간이라도 실제로는 사용자의 지휘·감독 아래 자유로운 이용이 보장되지 않았다면 근로시간으로 평가될 수 있다고 보는 흐름입니다. 자유 이용 불가 + 즉시 호출 응대 + 자리이탈 제한 결합은 \'근로시간 인정·임금 차액\' 다툼이 가능한 트랙입니다. 피해자라면 ① 시간대 구분 ② 지휘·감독 ③ 자유 이용 ④ 차액 산정 ⑤ 청구 5중 트랙이 가능한 영역. 대응은 ① 구분 ② 지휘 ③ 자유 ④ 차액 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 대기시간·휴게시간 근로시간 인정 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 시간대·지휘 감독·자유 이용·차액·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 시간대 구분</strong> — 명목상 휴게시간·대기시간·실근로시간의 구분 정리.</li>\n<li><strong>② 지휘·감독</strong> — 사용자의 지휘·감독 아래 있었는지, 호출·대기 의무가 있었는지.</li>\n<li><strong>③ 자유 이용 여부</strong> — 그 시간 동안 장소·행동의 자유로운 이용이 보장됐는지.</li>\n<li><strong>④ 차액 산정</strong> — 근로시간 인정 시 미산입된 임금·연장수당 차액 도출.</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 명칭이 휴게시간이라도 실제 사용자의 지휘·감독 아래 있고 자유로운 이용이 보장되지 않았다면 근로시간으로 평가될 수 있는 영역. 즉시 호출 응대·자리이탈 제한·짧은 응대 주기 등 정황이 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 차액 청구 5단계',
        content:
          '<p><strong>A. 고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근무 자료 보존 (즉시)</strong> — 근무표·휴게시간 안내·호출 기록·CCTV·동료 진술 보존.</li>\n<li><strong>2단계 — 지휘·감독·자유 이용 정리 (1주)</strong> — 호출 빈도·자리이탈 제한·식사 중단 정황 정리.</li>\n<li><strong>3단계 — 근로시간·임금 차액 산정 (2~3주)</strong> — 인정 시간 × 통상임금/시간 기준 차액 도출.</li>\n<li><strong>4단계 — 고용노동부 진정·내용증명 (시효 3년 내)</strong> — 1350 진정 또는 회사 청구.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">대기시간·휴게시간 근로시간 인정 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 시간대·지휘·차액 갈래입니다.</strong></p>\n<ul>\n<li><strong>근무표·휴게시간 안내 (명목 시간대)</strong></li>\n<li><strong>호출 기록·근무 일지 (실제 응대 정황)</strong></li>\n<li><strong>CCTV·출입 기록 (자리이탈 제한 입증)</strong></li>\n<li><strong>업무지시·메신저 기록 (지휘·감독)</strong></li>\n<li><strong>동료 진술·동석자 진술 (사실관계)</strong></li>\n<li><strong>임금명세서·통상임금 산정 자료</strong></li>\n<li><strong>근로시간·차액 산정표</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 휴게시간으로 분류된 시간 중에 호출·대기·자리이탈 제한이 어느 정도였는지 시간대별로 정리해두면 근로시간 인정 다툼의 출발점이 잡힙니다. 짧은 응대 주기 + 자리이탈 제한 + 식사 중 호출 등 정황을 함께 모으는 것이 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>지휘·감독</strong> — 그 시간 동안 사용자 지휘·감독 아래 있었는지.</li>\n<li><strong>자유 이용 여부</strong> — 장소·행동의 자유로운 이용이 보장됐는지.</li>\n<li><strong>호출·대기 의무</strong> — 즉시 응대·자리유지 의무가 있었는지.</li>\n<li><strong>근로시간 인정 범위</strong> — 전부 인정·일부 인정 여부.</li>\n<li><strong>시효 관리</strong> — 임금 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (임금체불 신고·진정)</strong></li>\n<li><strong>고용노동부 임금체불 진정 온라인 (moel.go.kr)</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금·소정근로시간과 근로시간 인정 범위 평가',
        summary:
          '대법원 2020다300299(대법원, 2024.12.26 선고) 영역에서 법원은 근로기준법 제2조 제1항 제8호의 \'소정근로시간\'은 근로기준법 제50조 등에 따른 근로시간의 범위에서 근로자와 사용자 사이에 정한 근로시간을 말하고, 포괄임금계약에 따라 지급된 임금이 최저임금에 미달하는 경우 포괄임금계약이 유효하다고 보기 어려우며 비교대상 시급의 산정 방법을 살펴야 한다고 판시했습니다. 명목상 휴게시간이라도 실제로는 사용자의 지휘·감독 아래 자유 이용이 제한된 시간이라면 근로시간 범위에 포함되는지를 함께 검토해볼 수 있는 영역입니다.',
        takeaway: '명목 휴게시간이라도 지휘·감독·자유 이용 제한 결합 시 근로시간 인정·임금 차액 청구 검토 영역 — 진정·민사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '휴게시간이라도 근로시간으로 인정되나요?',
        answer:
          '<strong>지휘·감독 아래 있고 자유 이용이 제한됐다면 근로시간으로 평가될 수 있는 영역입니다.</strong> 호출·자리이탈 제한 정황을 정리.',
      },
      {
        question: '얼마나 응대해야 근로시간으로 보나요?',
        answer:
          '<strong>응대 빈도·자리이탈 제한·자유 이용 가능성을 종합 평가하는 영역입니다.</strong> 호출 기록과 시간 정황을 정리.',
      },
      {
        question: '임금 차액은 어떻게 계산하나요?',
        answer:
          '<strong>인정 시간 × (통상임금/시간) 기준으로 차액을 산정하는 영역입니다.</strong> 통상임금·근무표를 함께 정리.',
      },
      {
        question: '회사는 휴게시간이라 임금이 없다는데요?',
        answer:
          '<strong>명칭이 아니라 실제 지휘·감독·자유 이용 여부로 판단하는 영역입니다.</strong> 정황 자료로 다툴 수 있습니다.',
      },
      {
        question: '청구 시효는 얼마인가요?',
        answer:
          '<strong>임금 청구 시효는 3년인 영역입니다.</strong> 지급일로부터 3년 내 청구.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '대기시간 근로시간 인정', href: '/guide/wage/wage-standby-work-time-recognition' },
      { label: '휴게시간 자유 이용 침해', href: '/guide/wage/wage-break-time-free-use-violation' },
      { label: '포괄임금 연장수당 차액', href: '/guide/wage/wage-pogual-overtime-difference-claim' },
      { label: '연장근로수당 청구', href: '/guide/wage/wage-overtime-unpaid-claim' },
      { label: '임금체불 진정 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
    ],
  },

  // ─── 6. unemployment-pregnancy-childbirth-extended-period-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-pregnancy-childbirth-extended-period-track',
    keyword: '실업급여 임신 출산 수급기간 연장 신청',
    questionKeyword: '회사를 그만뒀는데 곧 출산이 다가와 당장 구직활동을 하기 어려워요. 임신·출산으로 실업급여 수급기간을 연장할 수 있다고 들었는데 어떤 순서로 신청하나요?',
    ctaKeyword: '실업급여 임신·출산 수급기간 연장 신청 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '실업급여 임신·출산 수급기간 연장 — 5단계 신청 절차 | 로앤가이드',
      description:
        '임신·출산·육아로 30일 이상 취업이 어려워 수급기간 연장을 검토 중이라면 30일 이내 신청 기한·진단서·연장 인정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"회사를 그만둔 뒤 실업급여를 신청해 받으려고 했지만, 임신·출산이 임박해 당장 구직활동을 하기 어려운 상황에 놓인 근로자입니다. 출산 직후에는 회복과 신생아 돌봄으로 30일이 훌쩍 넘게 취업이 사실상 불가능한데, 그 사이 수급기간이 끝나버릴까 봐 막막했어요. 임신·출산·육아로 수급기간을 연장해주는 제도가 있다고 들었지만, 언제까지 어떤 서류로 어디에 신청해야 하는지가 잘 정리되지 않아 시기를 놓칠까 걱정인 상태입니다." 고용보험법 제48조 제2항·시행령 제70조는 임신·출산·육아 등 본인이나 가족 사정으로 30일 이상 취업할 수 없는 경우 수급기간을 연장할 수 있도록 정하고, 같은 법 제48조 제3항은 그 사유가 끝난 날부터 30일 이내에 사유와 기간을 적어 직업안정기관의 장에게 신청하도록 정하는 영역입니다. 판례는 고용보험법상 신청기간 규정이 권리행사기간을 정한 강행규정의 성격을 가질 수 있다고 본 사례 흐름이 있고, 기간을 놓치면 청구권 행사가 제한될 수 있는 트랙입니다. 임신·출산·육아 + 30일 이상 취업 불가 + 사유 종료 후 30일 내 신청 결합은 \'수급기간 연장 신청\' 절차 트랙입니다. 신청자라면 ① 사유 정리 ② 진단서·증빙 ③ 30일 이내 신청 ④ 인정·결과 ⑤ 불복 5중 트랙이 가능한 영역. 대응은 ① 사유 ② 증빙 ③ 신청 ④ 인정 ⑤ 불복 5단계로 검토해볼 수 있습니다. 신청자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 임신·출산 실업급여 수급기간 연장 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사유·증빙·30일 신청·인정·불복 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사유 정리</strong> — 임신·출산·육아 등으로 30일 이상 취업이 불가능했던 기간 정리.</li>\n<li><strong>② 진단서·증빙</strong> — 임신·출산 진단서·진료확인서·산모수첩 등 증빙 자료 확보.</li>\n<li><strong>③ 30일 이내 신청</strong> — 사유 종료일로부터 30일 이내에 사유·기간을 적어 직업안정기관에 신청.</li>\n<li><strong>④ 인정·결과 통지</strong> — 연장 인정·기간 결정 후 결과 통지.</li>\n<li><strong>⑤ 불복 (처분 송달 후 90일 내)</strong> — 거부 시 고용보험심사위원회 심사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 고용보험법상 신청기간 규정은 권리행사기간을 정한 강행규정의 성격을 가질 수 있는 영역. 임신·출산으로 인한 수급기간 연장도 사유 종료일로부터 30일 이내 신청을 놓치지 않는 것이 핵심 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 연장 신청 5단계',
        content:
          '<p><strong>A. 고용보험·고용센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단서·증빙 확보 (즉시)</strong> — 임신 진단서·산모수첩·출생증명서 등 증빙 확보.</li>\n<li><strong>2단계 — 사유·기간 정리 (1주)</strong> — 30일 이상 취업이 불가능했던 기간을 시간순으로 정리.</li>\n<li><strong>3단계 — 연장 신청서 제출 (사유 종료 후 30일 이내)</strong> — 사유와 기간을 적어 직업안정기관에 신청서·증빙 제출.</li>\n<li><strong>4단계 — 심사·인정 통지</strong> — 연장 가부와 인정 기간 결정·통지.</li>\n<li><strong>5단계 — 심사 청구 (처분 송달 후 90일 내)</strong> — 거부·기간 축소 시 고용보험심사위원회에 심사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 신청 순서, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임신·출산 실업급여 수급기간 연장 신청 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사유·증빙·신청 갈래입니다.</strong></p>\n<ul>\n<li><strong>임신 진단서·진료확인서</strong></li>\n<li><strong>산모수첩·출생증명서 (출산 사실 입증)</strong></li>\n<li><strong>가족관계증명서·주민등록등본 (가족 사정 입증)</strong></li>\n<li><strong>이직확인서·고용보험 피보험 내역</strong></li>\n<li><strong>수급자격 인정 자료 (기수급 또는 신청 자료)</strong></li>\n<li><strong>수급기간 연장 신청서 (고용센터 양식)</strong></li>\n<li><strong>사유·기간 소명서 (취업 불가 정황)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임신·출산·육아로 30일 이상 취업이 불가능했던 기간을 진단서·산모수첩·출생증명서 등으로 시점·기간이 명확히 드러나도록 정리해두는 것이 핵심. 사유 종료 후 30일 이내 신청 기한을 놓치지 않는 것도 출발점입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>30일 이상 취업 불가</strong> — 임신·출산·육아로 30일 이상 취업이 곤란했는지.</li>\n<li><strong>신청기간</strong> — 사유 종료일로부터 30일 이내 신청을 했는지.</li>\n<li><strong>증빙의 충분성</strong> — 진단서·산모수첩 등 증빙이 충분한지.</li>\n<li><strong>연장 인정 범위</strong> — 인정 기간이 신청 기간 전부인지, 일부인지.</li>\n<li><strong>거부처분 불복</strong> — 거부 시 90일 내 심사 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>거주지 관할 고용복지플러스센터</strong></li>\n<li><strong>고용노동부·고용보험 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용보험 홈페이지 (ei.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고용보험법상 신청기간의 법적 성격(강행규정) 평가',
        summary:
          '대법원 2018두47264(대법원, 2021.03.18 선고) 영역에서 법원은 구 고용보험법 제70조 제2항이 정한 육아휴직급여 청구권 신청기간이 통상적인 \'제척기간\'에 관한 규정 형식을 취하고 있고, 같은 법 제107조 제1항의 소멸시효 규정과 병존하는 입법 유형에 해당하는 점 등을 들어, 위 신청기간은 추상적 권리의 행사에 관한 \'제척기간\'이고 위 규정은 육아휴직급여에 관한 법률관계를 조속히 확정시키기 위한 강행규정이라고 판시했습니다. 실업급여 수급기간 연장 신청기간도 권리행사기간으로 같은 시각에서 살펴볼 수 있는 영역입니다.',
        takeaway: '임신·출산·육아 + 사유 종료 후 30일 이내 신청 결합 시 수급기간 연장 절차 트랙 — 신청 시기를 놓치지 않는 것이 핵심.',
      },
    ],
    faq: [
      {
        question: '임신·출산으로 수급기간을 연장할 수 있나요?',
        answer:
          '<strong>본인이나 가족 사정으로 30일 이상 취업이 불가능했다면 수급기간 연장을 검토할 수 있는 영역입니다.</strong> 진단서·증빙을 먼저 확보.',
      },
      {
        question: '신청 기한이 정해져 있나요?',
        answer:
          '<strong>사유 종료일로부터 30일 이내에 사유·기간을 적어 신청하는 영역입니다.</strong> 기한 도과 전 신속 진행.',
      },
      {
        question: '어떤 서류를 준비해야 하나요?',
        answer:
          '<strong>임신 진단서·산모수첩·출생증명서·가족관계증명서 등 사유와 기간을 입증할 자료가 필요한 영역입니다.</strong> 시점·기간이 드러나도록 정리.',
      },
      {
        question: '거부되면 어떻게 다투나요?',
        answer:
          '<strong>처분 송달 후 90일 내 고용보험심사위원회 심사 청구를 검토해볼 수 있는 영역입니다.</strong> 소명 자료로 보강.',
      },
      {
        question: '연장 기간은 어떻게 정해지나요?',
        answer:
          '<strong>인정되는 사유 기간 범위에서 결정되는 영역입니다.</strong> 진단서·증빙으로 기간이 명확하게 드러나도록 준비.',
      },
    ],
    cta: { text: '실업급여 신청 순서, AI로 먼저 정리하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '수급기간 연장 신청', href: '/guide/unemployment/benefit-period-extension-application' },
      { label: '임신·출산 수급기간 연장', href: '/guide/unemployment/unemployment-pregnancy-extension-application' },
      { label: '육아휴직 후 실업급여', href: '/guide/unemployment/unemployment-parental-leave-after-application' },
      { label: '신청부터 지급까지 전 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '수급 거부 이의 절차', href: '/guide/unemployment/unemployment-benefit-rejection-appeal-procedure' },
    ],
  },

  // ─── 7. unemployment-illness-medical-treatment-extended-period-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-illness-medical-treatment-extended-period-track',
    keyword: '실업급여 질병 부상 치료 수급기간 연장',
    questionKeyword: '실업급여를 받는 중에 갑자기 큰 병으로 30일이 넘게 치료를 받게 됐어요. 그 사이 수급기간이 끝날까 봐 걱정인데 질병으로 연장 신청할 수 있나요?',
    ctaKeyword: '실업급여 질병·부상 치료 수급기간 연장 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '실업급여 질병·부상 수급기간 연장 — 5단계 신청 절차 | 로앤가이드',
      description:
        '질병·부상 치료로 30일 이상 취업이 어려워 수급기간 연장을 검토 중이라면 진단서·30일 이내 신청·연장 인정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"실업급여 수급 중에 갑자기 건강이 크게 나빠져 일정 기간 치료에 전념해야 하는 상황에 놓인 근로자입니다. 입원 또는 통원 치료가 30일을 훌쩍 넘기게 되면서, 그 사이 수급기간이 끝나버리거나 실업인정을 받지 못하게 될까 봐 막막했어요. 질병·부상으로도 수급기간을 연장해주는 제도가 있다고는 들었지만, 정확히 어떤 진단서를 어떤 양식으로 언제까지 어디에 내야 하는지가 잘 정리되지 않아 시기를 놓칠까 걱정인 상태입니다." 고용보험법 제48조 제2항·시행령 제70조는 본인의 질병·부상 등으로 30일 이상 취업할 수 없는 경우 수급기간을 연장할 수 있도록 정하고, 같은 법 제48조 제3항은 그 사유가 끝난 날부터 30일 이내에 사유와 기간을 적어 직업안정기관의 장에게 신청하도록 정하는 영역입니다. 판례는 고용보험법상 신청기간 규정이 권리행사기간을 정한 강행규정의 성격을 가질 수 있다고 본 사례 흐름이 있고, 기간을 놓치면 청구권 행사가 제한될 수 있는 트랙입니다. 질병·부상 + 30일 이상 취업 불가 + 사유 종료 후 30일 내 신청 결합은 \'수급기간 연장 신청\' 절차 트랙입니다. 신청자라면 ① 사유 정리 ② 진단서 ③ 30일 이내 신청 ④ 인정·결과 ⑤ 불복 5중 트랙이 가능한 영역. 대응은 ① 사유 ② 진단서 ③ 신청 ④ 인정 ⑤ 불복 5단계로 검토해볼 수 있습니다. 신청자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 질병·부상 실업급여 수급기간 연장 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사유·진단서·30일 신청·인정·불복 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사유 정리</strong> — 질병·부상으로 30일 이상 취업이 불가능했던 기간 정리.</li>\n<li><strong>② 진단서 확보</strong> — 진료기록·진단서·치료 경과 자료로 취업 곤란 사실 입증.</li>\n<li><strong>③ 30일 이내 신청</strong> — 사유 종료일로부터 30일 이내에 사유·기간을 적어 직업안정기관에 신청.</li>\n<li><strong>④ 인정·결과 통지</strong> — 연장 인정·기간 결정 후 결과 통지.</li>\n<li><strong>⑤ 불복 (처분 송달 후 90일 내)</strong> — 거부 시 고용보험심사위원회 심사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 질병·부상 등으로 30일 이상 취업이 불가능했던 사정과 사유 종료 후 30일 이내 신청이 핵심인 영역. 판례 흐름은 고용보험법상 신청기간 규정을 권리행사기간(제척기간)으로 강행 규정 성격을 가질 수 있다고 본 사례가 있어 기한 도과 전 신청이 중요한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 연장 신청 5단계',
        content:
          '<p><strong>A. 고용보험·고용센터 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단서·진료기록 확보 (즉시)</strong> — 입·통원 기록·진단서·치료 경과 자료 확보.</li>\n<li><strong>2단계 — 사유·기간 정리 (1주)</strong> — 30일 이상 취업이 불가능했던 기간을 시간순으로 정리.</li>\n<li><strong>3단계 — 연장 신청서 제출 (사유 종료 후 30일 이내)</strong> — 사유와 기간을 적어 직업안정기관에 신청서·증빙 제출.</li>\n<li><strong>4단계 — 심사·인정 통지</strong> — 연장 가부와 인정 기간 결정·통지.</li>\n<li><strong>5단계 — 심사 청구 (처분 송달 후 90일 내)</strong> — 거부·기간 축소 시 고용보험심사위원회에 심사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">질병·부상 실업급여 수급기간 연장 신청 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사유·진단서·신청 갈래입니다.</strong></p>\n<ul>\n<li><strong>질병·부상 진단서 (병명·치료 기간)</strong></li>\n<li><strong>진료기록·소견서 (취업 곤란 입증)</strong></li>\n<li><strong>입원·통원 기록 (치료 경과)</strong></li>\n<li><strong>약 처방·치료 영수증</strong></li>\n<li><strong>이직확인서·고용보험 피보험 내역</strong></li>\n<li><strong>수급기간 연장 신청서 (고용센터 양식)</strong></li>\n<li><strong>사유·기간 소명서 (취업 불가 정황)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 질병·부상으로 30일 이상 취업이 불가능했던 사정은 진단서·진료기록·치료 경과 자료로 시점·기간이 명확히 드러나도록 정리해두는 것이 핵심. 사유 종료 후 30일 이내 신청 기한을 놓치지 않는 것도 출발점입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>30일 이상 취업 불가</strong> — 질병·부상으로 30일 이상 취업이 곤란했는지.</li>\n<li><strong>신청기간</strong> — 사유 종료일로부터 30일 이내 신청을 했는지.</li>\n<li><strong>증빙의 충분성</strong> — 진단서·진료기록 등 증빙이 충분한지.</li>\n<li><strong>연장 인정 범위</strong> — 인정 기간이 신청 기간 전부인지, 일부인지.</li>\n<li><strong>거부처분 불복</strong> — 거부 시 90일 내 심사 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>거주지 관할 고용복지플러스센터</strong></li>\n<li><strong>고용노동부·고용보험 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용보험 홈페이지 (ei.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고용보험법상 신청기간의 법적 성격(강행규정) 평가',
        summary:
          '대법원 2009두19892(대법원, 2011.12.08 선고) 영역에서 법원은 구직급여 수급자격자가 소정급여일수분의 구직급여를 모두 지급받기 이전에 취업한 경우 그에게 지급하는 취업촉진 수당 등 고용보험법상 급여 규정의 내용·형식·목적 등을 살피면서, 고용보험법상 권리행사·신청에 관한 규정 해석을 사례별로 판단해야 한다고 보았습니다. 질병·부상으로 인한 수급기간 연장 신청도 같은 시각에서 신청기간·증빙 요건을 살펴볼 수 있는 영역입니다.',
        takeaway: '질병·부상 + 사유 종료 후 30일 이내 신청 결합 시 수급기간 연장 절차 트랙 — 신청 시기를 놓치지 않는 것이 핵심.',
      },
    ],
    faq: [
      {
        question: '질병·부상으로 수급기간을 연장할 수 있나요?',
        answer:
          '<strong>본인의 질병·부상으로 30일 이상 취업이 불가능했다면 수급기간 연장을 검토할 수 있는 영역입니다.</strong> 진단서·진료기록을 먼저 확보.',
      },
      {
        question: '신청 기한이 정해져 있나요?',
        answer:
          '<strong>사유 종료일로부터 30일 이내에 사유·기간을 적어 신청하는 영역입니다.</strong> 기한 도과 전 신속 진행.',
      },
      {
        question: '어떤 서류를 준비해야 하나요?',
        answer:
          '<strong>진단서·진료기록·입원·통원 기록 등 취업이 곤란했음을 입증할 자료가 필요한 영역입니다.</strong> 시점·기간이 명확히 드러나도록 정리.',
      },
      {
        question: '치료가 길어지면 연장 기간도 늘어나나요?',
        answer:
          '<strong>인정되는 사유 기간 범위에서 결정되는 영역입니다.</strong> 진단서로 치료 기간이 명확히 드러나도록 준비.',
      },
      {
        question: '거부되면 어떻게 다투나요?',
        answer:
          '<strong>처분 송달 후 90일 내 고용보험심사위원회 심사 청구를 검토해볼 수 있는 영역입니다.</strong> 소명 자료로 보강.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '수급기간 연장 신청', href: '/guide/unemployment/benefit-period-extension-application' },
      { label: '질병·부상 수급기간 연장', href: '/guide/unemployment/unemployment-illness-extension-application' },
      { label: '실업인정 보류·재개', href: '/guide/unemployment/unemployment-recognition-pause-resume' },
      { label: '신청부터 지급까지 전 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '수급 거부 이의 절차', href: '/guide/unemployment/unemployment-benefit-rejection-appeal-procedure' },
    ],
  },

  // ─── 8. retirement-deferred-pension-irp-rollover-tax-track ───
  {
    domain: 'retirement',
    slug: 'retirement-deferred-pension-irp-rollover-tax-track',
    keyword: '퇴직금 IRP 이전 일시금 연금 세제',
    questionKeyword: '퇴직금이 IRP 계좌로 의무 이전됐는데 일시금으로 받을지 연금으로 받을지 고민이에요. 세금이 어떻게 다르고 어떤 순서로 결정해야 하나요?',
    ctaKeyword: '퇴직금 IRP 이전·일시금·연금 세제 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '퇴직금 IRP 일시금·연금 세제 — 5단계 수령 절차 | 로앤가이드',
      description:
        '퇴직금이 IRP로 이전된 뒤 일시금·연금 수령 사이에서 세금이 헷갈리시다면 IRP 의무이전·과세이연·수령 방식 비교 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오랜 기간 회사를 다니다 퇴직했는데, 퇴직금이 본인 명의 IRP(개인형퇴직연금) 계좌로 의무적으로 이전되며 들어온 근로자입니다. 당장 큰돈이 필요한 상황도 아니지만 일시금으로 받는 게 손해는 아닐지, 연금처럼 나눠 받으면 세금이 얼마나 차이 나는지, 어떤 순서로 정해야 하는지가 막막했어요. 세무서·금융기관 안내만 봐서는 \'과세이연\'·\'퇴직소득세\'·\'연금소득세\' 용어가 섞여 더 헷갈리는 상태입니다." 근로자퇴직급여보장법은 일정 요건의 퇴직자에 대해 퇴직급여를 본인 명의 IRP 계좌로 이전하도록 정하고, 소득세법은 퇴직소득세를 부과하면서도 IRP 등으로 이전·연금 수령 시 일정한 과세이연·세액 감경 효과를 두는 영역입니다. 판례·실무는 퇴직금 청구권의 발생 시점·시효, 권리남용·신의칙 평가와 함께 퇴직금의 수령 방식과 그에 따른 과세 효과를 종합 검토하는 사례 흐름이 있는 트랙입니다. IRP 의무이전 + 일시금·연금 선택 + 세제 비교 결합은 \'수령 방식·세제 정리\' 절차 트랙입니다. 수령자라면 ① IRP 이전 ② 일시금 세제 ③ 연금 세제 ④ 수령 방식 선택 ⑤ 청구·정산 5중 트랙이 가능한 영역. 대응은 ① 이전 ② 일시금 ③ 연금 ④ 선택 ⑤ 청구 5단계로 검토해볼 수 있습니다. 수령자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 퇴직금 IRP 일시금·연금 세제 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. IRP 이전·일시금·연금·선택·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① IRP 의무이전 확인</strong> — 퇴직급여가 본인 명의 IRP 계좌로 이전됐는지·이전 금액 확인.</li>\n<li><strong>② 일시금 수령 세제</strong> — 일시금 수령 시 퇴직소득세 산정 기준·근속연수공제 적용.</li>\n<li><strong>③ 연금 수령 세제</strong> — 연금 수령 시 연금소득세 적용·일시금 대비 세액 비교.</li>\n<li><strong>④ 수령 방식 선택</strong> — 자금 계획·세후 수령액·세제 효과를 종합 검토.</li>\n<li><strong>⑤ 청구·정산</strong> — IRP 운용기관에 수령 신청·세액 정산.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 퇴직금이 IRP로 이전된 경우 일시금 수령에는 퇴직소득세, 연금 수령에는 연금소득세가 적용되는 영역으로 수령 방식에 따라 세후 수령액이 달라질 수 있는 트랙. 본인 자금 계획과 세후 수령액을 함께 비교 검토하는 것이 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — IRP 수령 5단계',
        content:
          '<p><strong>A. 고용노동부·금융기관 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 퇴직급여·IRP 자료 확보 (즉시)</strong> — 퇴직급여 산정서·IRP 이전 명세·계좌 잔액 확인.</li>\n<li><strong>2단계 — 일시금·연금 세제 비교 (1주)</strong> — 일시금(퇴직소득세)·연금(연금소득세) 세후 수령액 비교.</li>\n<li><strong>3단계 — 자금 계획·세제 효과 검토 (1~2주)</strong> — 단기 자금 수요·장기 노후 자금 계획과 세제 효과 종합 검토.</li>\n<li><strong>4단계 — 수령 방식 결정·신청</strong> — IRP 운용기관에 일시금·연금 수령 신청.</li>\n<li><strong>5단계 — 세액 정산·후속</strong> — 원천징수 후 종합소득세 신고·정산 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">퇴직금 IRP 이전·일시금·연금 세제 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 이전·세제·수령 갈래입니다.</strong></p>\n<ul>\n<li><strong>퇴직급여 산정서 (기간·평균임금·금액)</strong></li>\n<li><strong>퇴직소득 원천징수영수증</strong></li>\n<li><strong>IRP 이전 내역·계좌 명세</strong></li>\n<li><strong>일시금·연금 세후 수령액 비교표</strong></li>\n<li><strong>근속연수·근속연수공제 산정 자료</strong></li>\n<li><strong>연금 수령 계획·수령 주기 메모</strong></li>\n<li><strong>IRP 수령 신청서 (운용기관 양식)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 퇴직금이 IRP 등으로 이전된 경우 수령 방식 선택은 단순히 \'얼마를 손에 쥐느냐\' 뿐 아니라 \'세후 얼마가 남느냐\'까지 함께 따져보는 영역. 일시금·연금 두 시나리오의 세후 수령액을 비교한 표를 만들어두면 의사결정과 운용기관 상담에 유용합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>IRP 이전</strong> — 퇴직급여가 본인 명의 IRP로 이전됐는지·이전 시기·금액.</li>\n<li><strong>퇴직소득세 산정</strong> — 근속연수공제·환산급여공제 등 산정 기준.</li>\n<li><strong>연금소득세 산정</strong> — 연금 수령 시 적용되는 세율과 일시금 대비 세액 차이.</li>\n<li><strong>수령 방식 선택</strong> — 자금 계획·노후 설계와 세후 수령액 비교.</li>\n<li><strong>운용기관 상담</strong> — IRP 운용기관·세무 전문가 상담.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (퇴직급여 안내)</strong></li>\n<li><strong>국민연금공단 1355 (연금 안내)</strong></li>\n<li><strong>관할 IRP 운용기관 (수령 신청·세액 정산)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직금 청구권의 발생·소멸시효와 신의칙 평가',
        summary:
          '대법원 2024다294705(대법원, 2025.05.29 선고) 영역에서 법원은 채무자의 소멸시효에 기한 항변권 행사는 신의성실 원칙과 권리남용금지 원칙의 지배를 받고, 특별한 사정이 있는 경우에는 소멸시효 완성 주장이 권리남용으로서 허용되지 않을 수 있으나, 실정법에 정해진 개별 법제도의 구체적 내용을 신의칙과 같은 일반조항으로 배제·제한하는 것은 법적 안정성을 후퇴시킬 우려가 있으므로 신중해야 한다고 판시했습니다. 퇴직금을 IRP 등으로 이전·수령할 때에도 청구·시효·세제 절차를 시점에 맞춰 챙기는 것이 중요한 영역입니다.',
        takeaway: 'IRP 의무이전 + 일시금·연금 선택 + 세제 비교 결합 시 수령 방식·세제 정리 절차 트랙 — 본인 자금 계획·세후 수령액 비교 검토.',
      },
    ],
    faq: [
      {
        question: '퇴직금이 IRP로 들어왔는데 일시금으로 받아도 되나요?',
        answer:
          '<strong>일시금 수령도 가능한 영역이지만 퇴직소득세가 부과되는 점을 함께 검토해볼 수 있는 영역입니다.</strong> 세후 수령액 비교가 우선.',
      },
      {
        question: '연금으로 나눠 받으면 세금이 얼마나 차이 나나요?',
        answer:
          '<strong>일시금(퇴직소득세) 대비 연금(연금소득세) 세액이 달라질 수 있는 영역입니다.</strong> 운용기관과 세후 수령액 비교 검토.',
      },
      {
        question: '근속연수공제는 어떻게 적용되나요?',
        answer:
          '<strong>근속연수가 길수록 일정 공제가 적용되어 세액에 영향을 주는 영역입니다.</strong> 근속연수 자료를 정리.',
      },
      {
        question: '수령 신청은 어디에서 하나요?',
        answer:
          '<strong>IRP 운용기관에 일시금·연금 수령 신청을 하는 영역입니다.</strong> 운용기관 안내와 세무 상담을 함께 활용.',
      },
      {
        question: '정산은 어떻게 하나요?',
        answer:
          '<strong>원천징수 후 필요 시 종합소득세 신고·정산을 검토하는 영역입니다.</strong> 세무 전문가 상담을 함께 활용.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 IRP 의무이전', href: '/guide/retirement/retirement-irp-mandatory-transfer' },
      { label: '퇴직금 세금 정리', href: '/guide/retirement/retirement-pay-tax-overview' },
      { label: '퇴직연금 수령 방식', href: '/guide/retirement/retirement-pension-payment-options' },
      { label: '퇴직금 계산 기준', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 청구 어디부터', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
    ],
  },

  // ─── 9. retirement-intermediate-settlement-no-cause-invalid-claim-track ───
  {
    domain: 'retirement',
    slug: 'retirement-intermediate-settlement-no-cause-invalid-claim-track',
    keyword: '퇴직금 중간정산 적법 사유 무효 재산정',
    questionKeyword: '회사가 별다른 사유 없이 퇴직금을 중간정산해줬는데, 나중에 알고 보니 적법 사유가 없으면 무효라고 들었어요. 퇴직 시점 기준으로 다시 계산해 차액을 받을 수 있나요?',
    ctaKeyword: '퇴직금 중간정산 무효·재산정 차액 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '퇴직금 중간정산 무효 — 5단계 재산정·차액 점검 | 로앤가이드',
      description:
        '적법 사유 없이 받은 퇴직금 중간정산이 무효일 수 있다면 적법 사유 점검·평균임금 재산정·차액 청구 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"회사에서 어느 시점에 \'중간정산\'이라며 퇴직금을 한 번 받은 적이 있는 근로자입니다. 그때는 정확한 사유 설명도 없이 진행됐고, 회사가 \'본인 동의가 있었으니 됐다\'는 식이었어요. 그런데 나중에 알고 보니 퇴직금 중간정산은 법령에 정해진 적법 사유가 있을 때에만 가능하고, 그 사유 없는 중간정산은 무효이거나 퇴직금 분할 약정에 가까운 성격으로 다툴 수 있다는 이야기를 들었습니다. 이미 받은 돈은 어떻게 되고, 최종 퇴직 시점 기준으로 다시 계산해 차액을 청구할 수 있는 건지 막막한 상태입니다." 근로자퇴직급여보장법 제8조 제2항·시행령은 무주택자의 주택구입·의료비·천재지변 등 법령이 정한 사유가 있는 경우에 한해 퇴직금 중간정산을 허용하는 영역이고, 같은 법은 그 외 중간정산의 효력과 퇴직금 산정 기준을 정합니다. 판례는 적법 사유 없는 중간정산은 무효로 볼 수 있고, 그 경우 최종 퇴직 시점의 평균임금을 기초로 전체 계속근로기간에 대한 퇴직금을 다시 산정해 이미 지급된 금액을 공제한 차액을 청구할 수 있다는 사례 흐름이 있습니다. 적법 사유 부재 + 중간정산 수령 + 최종 퇴직 결합은 \'중간정산 무효·재산정 차액\' 다툼이 가능한 트랙입니다. 피해자라면 ① 사유 점검 ② 무효 판단 ③ 재산정 ④ 차액 청구 ⑤ 시효 5중 트랙이 가능한 영역. 대응은 ① 사유 ② 무효 ③ 재산정 ④ 차액 ⑤ 시효 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 퇴직금 중간정산 무효·재산정 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사유·무효·재산정·차액·시효 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사유 점검</strong> — 무주택자 주택구입·의료비·천재지변 등 법령상 적법 사유 해당 여부.</li>\n<li><strong>② 무효 판단</strong> — 적법 사유 없는 중간정산이 무효 또는 분할 약정 등으로 평가되는지.</li>\n<li><strong>③ 재산정</strong> — 최종 퇴직 시점 평균임금 기준 전체 계속근로기간 퇴직금 재산정.</li>\n<li><strong>④ 차액 청구</strong> — 이미 지급된 중간정산액 공제 후 차액 청구.</li>\n<li><strong>⑤ 시효 관리</strong> — 퇴직금 청구권 시효 3년 도과 위험 관리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 적법 사유 없는 중간정산은 무효 또는 분할 약정으로 평가되어, 최종 퇴직 시점 평균임금 기준 전체 계속근로기간에 대한 퇴직금을 다시 산정해 이미 지급된 금액을 공제한 차액을 청구할 수 있는 영역. 사유 점검과 재산정이 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 차액 청구 5단계',
        content:
          '<p><strong>A. 고용노동부·근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 중간정산·재직 자료 보존 (즉시)</strong> — 중간정산 신청서·지급 내역·근로계약서·임금명세서 보존.</li>\n<li><strong>2단계 — 사유·무효 판단 정리 (1주)</strong> — 법령상 적법 사유 해당 여부·소명 자료 부재 정황 정리.</li>\n<li><strong>3단계 — 평균임금·재산정 (1~2주)</strong> — 최종 퇴직 시점 평균임금 기준 전체 계속근로기간 퇴직금 재산정.</li>\n<li><strong>4단계 — 차액 청구 (시효 3년 내)</strong> — 회사 청구 또는 고용노동부 1350 진정.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 포함 항목, AI로 먼저 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">퇴직금 중간정산 무효·재산정 차액 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사유·무효·재산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>중간정산 신청서·지급 내역</strong></li>\n<li><strong>중간정산 사유 소명 자료 (또는 부재 정황)</strong></li>\n<li><strong>근로계약서·재직 기간 입증 자료</strong></li>\n<li><strong>임금명세서 (평균임금 산정 기초)</strong></li>\n<li><strong>최종 퇴직 시점 평균임금 산정표</strong></li>\n<li><strong>전체 계속근로기간 퇴직금 재산정표</strong></li>\n<li><strong>차액 산정·청구서 (내용증명·진정서)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 중간정산이 법령상 적법 사유에 해당하는지가 무효 판단의 핵심. 사유 소명 자료가 없거나 형식적이라면 최종 퇴직 시점 평균임금 기준 재산정으로 차액 청구를 검토할 수 있는 영역입니다. 시효 3년을 함께 관리하는 것도 잊지 말아야 합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>적법 사유</strong> — 무주택자 주택구입·의료비·천재지변 등 법령상 사유 해당 여부.</li>\n<li><strong>무효 판단</strong> — 사유 없는 중간정산이 무효 또는 분할 약정으로 평가되는지.</li>\n<li><strong>평균임금 산정</strong> — 최종 퇴직 시점 평균임금 산정 항목.</li>\n<li><strong>공제·차액</strong> — 이미 지급된 중간정산액 공제 방식.</li>\n<li><strong>시효 관리</strong> — 퇴직금 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (퇴직급여 안내)</strong></li>\n<li><strong>국민연금공단 1355</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직금 부진정연대채무·공제 범위 평가',
        summary:
          '대법원 2020다287921(대법원, 2024.07.25 선고) 영역에서 법원은 구 파견근로자 보호 등에 관한 법률에 따라 직접고용간주의 효과가 발생한 사안에서 사용사업주가 부담하는 임금 등 지급의무와 파견사업주가 부담하는 임금 등 지급의무가 부진정연대채무 관계에 있다고 보면서도, 퇴직금은 후불 임금으로서의 성격 이외에 사회보장적 급여·공로보상으로서의 성격을 함께 가지고 발생 시점과 산정 방법도 임금과 달라 사용사업주의 임금 등 지급의무와 파견사업주의 퇴직금 지급의무가 부진정연대채무 관계에 있다고 보기 어렵다는 취지로 판시했습니다. 중간정산 무효·재산정 사안에서도 퇴직금의 특수한 성격과 공제 범위를 살펴볼 수 있는 영역입니다.',
        takeaway: '적법 사유 부재 + 중간정산 수령 + 최종 퇴직 결합 시 무효·재산정·차액 청구 검토 영역 — 변호인·노무사 상담·진정 트랙.',
      },
    ],
    faq: [
      {
        question: '동의했어도 사유가 없으면 무효인가요?',
        answer:
          '<strong>법령상 적법 사유 없는 중간정산은 무효 또는 분할 약정으로 평가될 수 있는 영역입니다.</strong> 사유 소명 자료를 점검.',
      },
      {
        question: '재산정은 어떤 시점 기준으로 하나요?',
        answer:
          '<strong>최종 퇴직 시점 평균임금을 기준으로 전체 계속근로기간 퇴직금을 다시 산정하는 영역입니다.</strong> 임금명세서로 산정.',
      },
      {
        question: '이미 받은 돈은 어떻게 처리되나요?',
        answer:
          '<strong>재산정 퇴직금에서 이미 지급된 중간정산액을 공제한 차액을 청구하는 영역입니다.</strong> 공제 방식 정리가 필요.',
      },
      {
        question: '청구 시효가 있나요?',
        answer:
          '<strong>퇴직금 청구권 시효는 3년인 영역입니다.</strong> 퇴직일로부터 3년 내 청구.',
      },
      {
        question: '어디에 청구하나요?',
        answer:
          '<strong>회사에 내용증명·청구 또는 고용노동부 1350 진정·민사 청구를 검토할 수 있는 영역입니다.</strong> 사유·재산정 자료를 함께 준비.',
      },
    ],
    cta: { text: '퇴직금 포함 항목, AI로 먼저 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '중간정산 적법 사유', href: '/guide/retirement/retirement-intermediate-settlement-lawful-cause' },
      { label: '퇴직금 재산정 차액', href: '/guide/retirement/retirement-recalculation-difference-claim' },
      { label: '퇴직금 분할 약정 무효', href: '/guide/retirement/retirement-installment-agreement-void' },
      { label: '퇴직금 계산 기준', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 청구 어디부터', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
    ],
  },

  // ─── 10. industrial-accident-commute-deviation-personal-errand-track ───
  {
    domain: 'industrial-accident',
    slug: 'industrial-accident-commute-deviation-personal-errand-track',
    keyword: '출퇴근 일탈 중단 산재 업무상 인정',
    questionKeyword: '퇴근길에 마트나 은행에 잠깐 들렀다가 사고가 났어요. 일탈했다는 이유로 산재가 안 된다는데, 일상생활에 필요한 정도면 인정된다고 들었습니다. 어떻게 다투나요?',
    ctaKeyword: '출퇴근 중 일탈·중단 산재 인정 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '출퇴근 일탈·중단 산재 — 5단계 일상생활 필요성 점검 | 로앤가이드',
      description:
        '퇴근길 마트·은행 등 일탈 중 사고가 산재 인정에서 빠질까 걱정이라면 합리적 경로·일상생활 필요 행위·요양급여 신청 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"퇴근길에 잠깐 마트에서 장을 보거나, 은행에 들러 볼일을 본 뒤 다시 귀가하던 중에 사고가 난 근로자입니다. 근로복지공단에서는 \'정해진 출퇴근 경로에서 벗어났으니 산재 인정이 어렵다\'는 식의 안내를 받았어요. 그런데 일상생활을 유지하는 데 꼭 필요한 짧은 들름은 산재 인정에서 빠지지 않을 수 있다는 이야기를 듣고, 어떻게 다투어야 할지 막막한 상태입니다." 산업재해보상보험법 제5조 제8호·제37조 제1항 제3호는 출퇴근 중에 발생한 재해를 업무상 재해로 보면서, 같은 조 제3항은 출퇴근 경로의 일탈·중단이 있는 경우 원칙적으로 업무상 재해로 보지 않되, 그 일탈·중단이 일상생활에 필요한 행위로서 대통령령으로 정하는 사유에 해당하는 경우에는 출퇴근 재해로 보는 영역입니다. 시행령은 일상생활 필요 행위로 일용품 구매·진료·금융업무 등을 정하고 있고, 판례·실무는 일탈·중단의 시간·거리·목적이 합리적 범위 안에 있는지를 종합 평가하는 트랙입니다. 합리적 경로 회복 + 일상생활 필요 행위(마트·은행) + 사고 결합은 \'일탈·중단 후 출퇴근 재해 인정\' 다툼이 가능한 트랙입니다. 피해자라면 ① 경로 분석 ② 목적·필요성 ③ 일탈·중단 합리성 ④ 요양급여 신청 ⑤ 불복 5중 트랙이 가능한 영역. 대응은 ① 경로 ② 목적 ③ 합리성 ④ 신청 ⑤ 불복 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 출퇴근 일탈·중단 업무상 재해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경로·목적·합리성·신청·불복 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경로 분석</strong> — 통상 출퇴근 경로와 사고 지점·들른 장소의 위치 관계 정리.</li>\n<li><strong>② 목적·필요성</strong> — 마트·은행 등 들름이 일상생활에 필요한 행위에 해당하는지.</li>\n<li><strong>③ 일탈·중단 합리성</strong> — 일탈·중단의 시간·거리·목적이 합리적 범위 안에 있는지.</li>\n<li><strong>④ 요양급여 신청</strong> — 근로복지공단(1588-0075)에 요양급여 신청서·증빙 제출.</li>\n<li><strong>⑤ 불복 (결정 통지 후 기한 내)</strong> — 불승인 시 심사 청구·재심사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 출퇴근 경로의 일탈·중단이 있더라도 일상생활에 필요한 행위(일용품 구매·금융업무·진료 등)로 시행령이 정하는 사유에 해당하면 출퇴근 재해로 인정될 수 있는 영역. 들른 목적과 합리적 범위 안의 일탈·중단인지가 핵심 다툼점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 요양급여 5단계',
        content:
          '<p><strong>A. 근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고·경로 자료 확보 (즉시)</strong> — 사고 시점·장소·들른 장소·이동 경로·진료기록 확보.</li>\n<li><strong>2단계 — 목적·합리성 정리 (신속)</strong> — 일상생활 필요 행위 목적과 일탈·중단의 시간·거리 정리.</li>\n<li><strong>3단계 — 요양급여 신청서 제출</strong> — 근로복지공단(1588-0075)에 신청서·증빙·소견서 제출.</li>\n<li><strong>4단계 — 업무상재해 판정</strong> — 출퇴근 재해 인정 여부 심의·판정.</li>\n<li><strong>5단계 — 불복 (결정 통지 후 기한 내)</strong> — 불승인 시 심사 청구·재심사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 산재 인정 요건과 신청 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">출퇴근 일탈·중단 산재 인정 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=industrial-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경로·목적·신청 갈래입니다.</strong></p>\n<ul>\n<li><strong>사고 발생 경위서 (시점·장소·이동 경로)</strong></li>\n<li><strong>통상 출퇴근 경로 자료 (지도·교통수단)</strong></li>\n<li><strong>들른 장소 영수증·이용 내역 (마트·은행 등)</strong></li>\n<li><strong>진료기록·진단서 (부상 내용)</strong></li>\n<li><strong>재직·소속 증빙 (근로자 신분)</strong></li>\n<li><strong>요양급여 신청서 (근로복지공단 양식)</strong></li>\n<li><strong>심사·재심사 청구서 (불승인 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 들른 장소가 일용품 구매·금융업무·진료 등 일상생활에 필요한 행위에 해당하는지와, 그 일탈·중단이 시간·거리상 합리적 범위 안에 있었는지를 함께 정리하는 것이 핵심. 영수증·이용 내역은 목적의 진정성을 보여주는 자료가 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>경로의 통상성</strong> — 사고 지점이 통상 출퇴근 경로상 또는 회복된 경로상인지.</li>\n<li><strong>들름 목적</strong> — 들른 장소·행위가 일상생활에 필요한 행위인지.</li>\n<li><strong>일탈·중단 합리성</strong> — 시간·거리·목적이 합리적 범위 안에 있는지.</li>\n<li><strong>증명의 정도</strong> — 영수증·이용 내역·경로 자료 등 종합 증명.</li>\n<li><strong>불복 기한</strong> — 불승인 결정 통지 후 심사·재심사 청구 기한.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>근로복지공단 1588-0075 (요양급여 신청)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>근로복지공단 산재고객센터·관할 지사</strong></li>\n<li><strong>관할 산재의료센터·지정의료기관</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 중대재해처벌법상 \'사업 또는 사업장\' 의미와 적용 범위',
        summary:
          '대법원 2025도15060(대법원, 2026.01.29 선고) 영역에서 법원은 중대재해처벌법 제3조 및 부칙 제1조 제1항 단서의 \'사업 또는 사업장\'은 원칙적으로 \'경영상의 일체를 이루면서 유기적으로 운영되는 경제적·사회적 활동단위\'를 의미하고, 본사·지점·공장 등 개별 조직이 장소적으로 분리돼 있더라도 인사·노무관리·재무·회계 처리 등이 독립적으로 운영되지 않은 채 경영상 일체를 이루는 한 부분이라면 개별 조직 중 한 곳에서 중대산업재해가 발생했더라도 경제적·사회적 활동단위를 구성하는 조직들 전부의 상시 근로자 수를 합산해 법 적용 여부를 결정해야 한다고 판시했습니다. 출퇴근 중 일탈·중단 후 재해를 검토할 때에도 업무상 재해 인정 범위와 관련 법령의 기본 시각을 살펴볼 수 있는 영역입니다.',
        takeaway: '합리적 경로 회복 + 일상생활 필요 행위 + 사고 결합 시 출퇴근 재해 인정 검토 영역 — 요양급여 신청·불복 트랙.',
      },
    ],
    faq: [
      {
        question: '퇴근길에 마트 들렀다 사고나도 산재가 되나요?',
        answer:
          '<strong>일용품 구매 등 일상생활에 필요한 행위에 따른 일탈·중단은 출퇴근 재해로 인정될 수 있는 영역입니다.</strong> 영수증·경로 자료를 먼저 확보.',
      },
      {
        question: '은행에 들른 사이 사고난 경우는요?',
        answer:
          '<strong>금융업무 등 일상생활 필요 행위로 평가될 수 있는 영역입니다.</strong> 이용 내역·합리적 범위 정황을 정리.',
      },
      {
        question: '얼마나 들렀어야 \'합리적\'으로 보나요?',
        answer:
          '<strong>시간·거리·목적이 합리적 범위 안에 있는지 종합 평가하는 영역입니다.</strong> 사고 시점·경로 자료로 보강.',
      },
      {
        question: '요양급여는 어디에 신청하나요?',
        answer:
          '<strong>근로복지공단(1588-0075)에 요양급여 신청서를 제출하는 영역입니다.</strong> 진단서·근무 기록을 함께 준비.',
      },
      {
        question: '불승인되면 어떻게 다투나요?',
        answer:
          '<strong>심사 청구·재심사 청구 등 불복 절차를 검토해볼 수 있는 영역입니다.</strong> 결정 통지일부터 기한 진행.',
      },
    ],
    cta: { text: '산재 인정 요건과 신청 절차, AI로 정리하기', link: '/chat?domain=industrial-accident' },
    internalLinks: [
      { label: '출퇴근 산재 인정', href: '/guide/industrial-accident/industrial-accident-commute-recognition' },
      { label: '출퇴근 일탈·중단 합리성', href: '/guide/industrial-accident/industrial-accident-commute-deviation-reasonable' },
      { label: '산재 요양급여 신청', href: '/guide/industrial-accident/industrial-accident-medical-care-application' },
      { label: '산재 불승인 이의', href: '/guide/industrial-accident/industrial-accident-denial-appeal' },
      { label: '치료 후 직장 복귀', href: '/guide/industrial-accident/return-to-work-after-injury' },
    ],
  },
];
