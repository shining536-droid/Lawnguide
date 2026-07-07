import { SpokePage } from '../spoke-pages';

// batch86 dismissal(3) + wage(2) + unemployment(2) + retirement(2) + industrial-accident(1) — 10개 (2026-06-03)
//
// 고유 존재 이유:
// 1. dismissal-sick-leave-return-track — batch85 정리해고/양정/구두해고 분기와 달리 '병가 복귀 후 통상해고(근무능력 불량)와 징계해고 절차 부가 요구·취업규칙 해고의 정당성' 판단형 트랙. 통상해고 정당성·개선기회가 핵심.
// 2. dismissal-foreign-worker-visa-track — batch85 분기와 달리 '외국인 근로자 부당해고와 채용조건 불충족 시 해고 정당성·근로기준법 균등대우(제6조)' 판단형 트랙. 외국인 근로자성·해고 정당성이 핵심.
// 3. dismissal-absence-tardiness-misconduct-track — batch85 양정 과다 분기와 달리 '무단결근·근태불량 징계해고의 사회통념상 고용계속 불가능성과 징계위원회 개최시한' 판단형 트랙. 근태 비위의 해고 정당성·징계시한이 핵심.
// 4. wage-on-call-standby-hours-track — batch85 휴일/야간 분기와 달리 '대기시간 근로시간성과 격일제 소정근로시간(1일 8시간) 최저임금·통상임금성' 판단형 트랙. 대기시간 근로시간·격일제 소정근로가 핵심.
// 5. wage-comprehensive-overtime-track — batch85 분기와 달리 '포괄임금계약의 최저임금 위반 판단(비교대상 시급)과 연장수당 다툼' 판단형 트랙. 포괄임금 유효성·최저임금 미달이 핵심.
// 6. unemployment-wage-arrears-resignation-track — batch85 계약만료 분기와 달리 '임금체불 자진퇴사 정당한 이직 수급과 부정수급(허위 기타 부정한 방법)의 의미' 절차형 트랙. 임금체불 자진퇴사 수급·부정수급 범위가 핵심.
// 7. unemployment-business-closure-separation-track — batch85 통근곤란 분기와 달리 '폐업·권고사직 비자발 이직 수급과 평균임금(초과운송수입금 등) 산정' 절차형 트랙. 폐업 권고사직 수급·평균임금 산정이 핵심.
// 8. retirement-continuous-service-rehire-track — batch85 중간정산/임원 분기와 달리 '단절 후 재입사·시용기간 계속근로기간 통산(기산점)과 퇴직금 재산정' 판단형 트랙. 계속근로기간 통산·기산점이 핵심.
// 9. retirement-dc-db-pension-arrears-track — batch85 분기와 달리 'DC/DB 퇴직연금 부담금 미납과 차액·지연이자 청구(퇴직금제도 재산정 불가)·퇴직금 분할 약정 무효' 판단형 트랙. 퇴직연금 부담금 미납 차액 청구가 핵심.
// 10. industrial-accident-musculoskeletal-disorder-track — batch85 정신·과로 질환 분기와 달리 '근골격계 질환 산재(여러 사업장 통산 판단)와 인정기준의 예시적 성격·요양급여' 절차형 트랙. 근골격계 업무 관련성·요양급여가 핵심.

export const spokesBatch86Labor: SpokePage[] = [
  // ─── 1. dismissal-sick-leave-return-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-sick-leave-return-track',
    keyword: '병가 복귀 후 해고',
    questionKeyword: '병으로 병가를 쓰고 복귀했더니 회사가 "업무를 제대로 못 한다"며 통상해고를 했어요. 아직 회복 중이라 시간이 더 필요했을 뿐인데, 개선할 기회도 안 주고 곧장 해고한 게 정당한 건지 다툴 수 있나요?',
    ctaKeyword: '병가 복귀 후 통상해고 정당성·개선기회 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '병가 복귀 후 해고 — 5단계 통상해고 정당성 점검 | 로앤가이드',
      description:
        '병가 복귀 후 근무능력 부족을 이유로 통상해고를 당했다면 근로기준법 제23조 정당한 이유와 공정한 평가·개선기회·징계해고 절차 부가, 노동위 구제신청 3개월까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"병으로 한동안 병가를 쓰고 회사에 복귀한 근로자입니다. 아직 몸이 완전히 회복되지 않아 예전만큼 일하기는 어려웠지만 조금만 시간이 지나면 충분히 회복될 상황이었는데, 회사는 \'업무를 제대로 수행하지 못한다\'며 곧바로 통상해고를 통보했어요. 회사가 제 근무능력을 어떤 기준으로 평가했는지도 모르겠고, 개선할 기회나 전환배치 같은 배려 한 번 없이 해고로 직행한 점이 도무지 납득이 가지 않습니다. 근무능력이 잠시 떨어졌다는 이유만으로 곧바로 해고하는 게 정당한 건지, 다툴 여지가 있는지 막막한 상태입니다." 근로기준법 제23조 제1항은 사용자가 정당한 이유 없이 근로자를 해고하지 못한다고 정하고, 취업규칙에서 정한 해고사유에 해당한다는 이유로 해고할 때에도 정당한 이유가 있어야 하는 영역입니다. 판례는 근무성적이나 근무능력이 불량하여 직무를 수행할 수 없는 경우에 해고할 수 있다고 정한 취업규칙 등에 따라 해고할 때 그 판단 근거가 된 평가가 공정하고 객관적인 기준에 따라 이루어졌어야 하고 근무성적·근무능력이 상대적으로 낮은 정도를 넘어 상당한 기간 일반적으로 기대되는 최소한에도 미치지 못하며 개선 가능성을 인정하기 어렵다는 등 사회통념상 고용관계를 계속할 수 없을 정도인 경우에 한하여 해고의 정당성이 인정되고, 특정사유가 징계해고사유에는 해당하나 통상해고사유에는 해당하지 않더라도 근로자에게 유리한 통상해고를 택하는 것은 허용되나 특별한 사유가 없는 한 징계해고에 따른 소정의 절차는 부가적으로 요구된다고 본 사례 흐름이 있는 영역입니다. 병가 복귀 + 근무능력 평가 + 개선기회 결합은 \'통상해고 정당성\' 다툼이 가능한 트랙입니다. 피해자라면 ① 평가의 공정성 ② 부진의 정도 ③ 개선기회 ④ 절차·서면통지 ⑤ 노동위 구제 5중 트랙이 가능한 영역. 대응은 ① 평가 ② 정도 ③ 개선 ④ 절차 ⑤ 노동위 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 병가 복귀 후 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 평가의 공정성·부진의 정도·개선기회·절차/서면통지·노동위 구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 평가의 공정성</strong> — 근무성적·근무능력 불량 판단이 공정하고 객관적인 기준에 따랐는지(근로기준법 제23조).</li>\n<li><strong>② 부진의 정도</strong> — 상대적으로 낮은 정도를 넘어 기대되는 최소한에도 미치지 못하는지.</li>\n<li><strong>③ 개선기회</strong> — 교육·전환배치 등 개선 기회를 부여했는지, 개선 가능성이 없는지.</li>\n<li><strong>④ 절차·서면통지</strong> — 통상해고라도 징계 절차가 부가적으로 요구되는지·서면통지(제27조)를 지켰는지.</li>\n<li><strong>⑤ 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 근무능력 불량을 이유로 한 해고는 평가가 공정·객관적이어야 하고 부진이 사회통념상 고용계속이 불가능한 정도이며 개선 가능성이 없어야 정당성이 인정되는 영역. 평가의 공정성과 개선기회 부여 여부가 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고·병가 자료 보존 (즉시)</strong> — 해고 통보서·병가 신청·진단서·복귀 후 평가 자료 보존.</li>\n<li><strong>2단계 — 평가·부진 정도 정리 (1주)</strong> — 근무능력 평가의 공정성과 부진 정도·기간 정리.</li>\n<li><strong>3단계 — 개선기회·절차 자료 (2주)</strong> — 교육·전환배치 등 개선기회 부여 여부, 절차·소명 기록 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n<li><strong>5단계 — 행정소송·후속 청구 정리 (병행)</strong> — 재심판정 다툼 시 동일 사실 범위 내 주장 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">병가 복귀 후 통상해고 정당성·개선기회 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 평가·부진 정도·개선기회 갈래입니다.</strong></p>\n<ul>\n<li><strong>해고 통보서 (해고사유·통상해고 여부 명시)</strong></li>\n<li><strong>병가 신청서·진단서 (질병·회복 경과)</strong></li>\n<li><strong>복귀 후 근무능력 평가 자료 (평가 기준·점수)</strong></li>\n<li><strong>취업규칙·인사규정 (해고사유·평가 규정)</strong></li>\n<li><strong>교육·전환배치 등 개선기회 자료 (부여 여부)</strong></li>\n<li><strong>인사위원회 회의록·소명 기록 (징계 절차 부가)</strong></li>\n<li><strong>해고 사유·시기 서면통지 자료 (제27조)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'평가가 공정했는지\'와 \'개선기회를 줬는지\'입니다. 회사가 근무능력 불량을 어떤 기준으로 평가했는지(평가표·점수)와 복귀 후 회복·개선을 위한 교육·전환배치 기회를 부여했는지를 함께 정리하고, 통상해고라도 징계 절차가 부가될 수 있으므로 절차·소명 기록도 모아두면 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>평가의 공정성</strong> — 근무능력 평가가 공정·객관적 기준에 따랐는지.</li>\n<li><strong>부진의 정도</strong> — 기대되는 최소한에도 미치지 못할 정도인지.</li>\n<li><strong>개선 가능성</strong> — 개선 기회 부여 후에도 개선 가능성이 없는지.</li>\n<li><strong>절차 부가</strong> — 통상해고라도 징계해고 절차가 부가적으로 요구되는지.</li>\n<li><strong>입증책임 분담</strong> — 해고 정당성 입증은 사용자, 평가 부당·개선기회 미부여 정황은 근로자 측 정리 필요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>노동위원회 (부당해고 구제신청)</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 근무능력 불량 통상해고의 정당성과 징계 절차의 부가적 요구',
        summary:
          '대법원 2021두33470(대법원, 2023.12.28 선고) 영역에서 법원은 근무성적이나 근무능력이 불량하여 직무를 수행할 수 없는 경우에 해고할 수 있다고 정한 취업규칙 등에 따라 근로자를 해고한 경우 그 판단 근거가 된 평가가 공정하고 객관적인 기준에 따라 이루어졌어야 하고 근무성적·근무능력이 상대적으로 낮은 정도를 넘어 상당한 기간 일반적으로 기대되는 최소한에도 미치지 못하고 향후 개선 가능성을 인정하기 어렵다는 등 사회통념상 고용관계를 계속할 수 없을 정도인 경우에 한하여 해고의 정당성이 인정되며, 특정사유가 징계해고사유에는 해당하나 통상해고사유에는 해당하지 않더라도 근로자에게 유리한 통상해고를 택하는 것은 허용되나 특별한 사유가 없는 한 징계해고에 따른 소정의 절차는 부가적으로 요구된다고 판시했습니다. 병가 복귀 후 통상해고를 다툴 때 평가의 공정성·개선기회·절차를 검토해볼 수 있습니다.',
        takeaway: '병가 복귀 + 근무능력 평가 + 개선기회 결합 시 통상해고 정당성·공정한 평가·징계 절차 부가 종합 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '병가 후 일이 서툴다고 해고하는 게 정당한가요?',
        answer:
          '<strong>부진이 기대되는 최소한에도 미치지 못하고 개선 가능성이 없어야 정당성이 검토되는 영역입니다.</strong> 회복 경과와 평가를 정리.',
      },
      {
        question: '회사가 어떤 기준으로 평가했는지 모르겠어요.',
        answer:
          '<strong>근무능력 평가가 공정·객관적 기준에 따랐는지가 다툼이 되는 영역입니다.</strong> 평가표·점수 자료를 확보.',
      },
      {
        question: '개선할 기회도 안 줬는데 다툴 수 있나요?',
        answer:
          '<strong>교육·전환배치 등 개선 기회 부여 여부가 정당성 판단에 반영되는 영역입니다.</strong> 개선기회 부재 정황을 정리.',
      },
      {
        question: '통상해고라도 절차가 필요한가요?',
        answer:
          '<strong>특별한 사유가 없으면 징계해고 절차가 부가적으로 요구되는 영역입니다.</strong> 절차·소명 기록을 확인.',
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
      { label: '저성과 근무불량 해고 부당 여부 5가지 판단 기준', href: '/guide/dismissal/dismissal-low-performance-defense' },
      { label: '서면 해고통지 사유 부실기재', href: '/guide/dismissal/dismissal-written-notice-vague-reason-track' },
      { label: '해고근로자 종합 가이드', href: '/guide/dismissal' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 2. dismissal-foreign-worker-visa-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-foreign-worker-visa-track',
    keyword: '외국인 근로자 부당해고',
    questionKeyword: '외국인인 제가 한국 회사에서 일하다 갑자기 해고됐어요. 회사는 외국인이라 근로기준법이 적용 안 된다는 식으로 말하는데, 외국인 근로자도 부당해고를 다툴 수 있는 건지, 채용조건을 못 채웠다고 해고가 정당해지는지 궁금합니다.',
    ctaKeyword: '외국인 근로자 부당해고·균등대우 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '외국인 근로자 부당해고 — 5단계 근로자성·균등대우 점검 | 로앤가이드',
      description:
        '외국인이라 부당해고를 못 다툰다고 들었다면 근로기준법 제6조 균등대우·제23조 정당한 이유와 외국인 근로자성·채용조건 불충족 해고 정당성, 노동위 구제 3개월까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"한국 회사에서 일해 온 외국인 근로자입니다. 별다른 사유 설명도 없이 갑자기 해고를 당했는데, 회사는 \'외국인이라 한국 근로자와 같은 보호를 받지 못한다\'거나 \'애초에 채용조건을 못 채웠으니 해고가 당연하다\'는 식으로 말합니다. 한국에서 일하는 동안 다른 직원들과 똑같이 회사 지시를 받으며 일했는데, 국적이 다르다는 이유만으로 부당해고조차 다투지 못하는 게 맞는지 도무지 납득이 가지 않아요. 외국인 근로자도 부당해고를 다툴 수 있는지, 채용조건을 채우지 못했다는 이유만으로 해고가 곧바로 정당해지는지 막막한 상태입니다." 근로기준법 제6조는 사용자가 근로자에 대해 국적·신앙·사회적 신분을 이유로 근로조건에 차별적 처우를 하지 못한다고 정하고, 제23조 제1항은 정당한 이유 없는 해고를 금지하는 영역입니다. 판례는 사용자가 취업규칙이나 근로계약에서 정한 해고사유에 해당한다는 이유로 근로자를 해고할 때에도 정당한 이유가 있어야 하고, 이는 근로자의 채용조건으로 일정한 자격을 요구하면서 그 자격을 갖추지 못하면 해고할 수 있도록 정한 경우에도 마찬가지여서 단지 채용조건을 충족하지 못했다는 형식만으로 해고가 곧바로 정당해지는 것은 아니라는 취지의 사례 흐름이 있는 영역입니다. 외국인 근로자성 + 차별 의문 + 채용조건 결합은 \'외국인 부당해고\' 다툼이 가능한 트랙입니다. 피해자라면 ① 근로자성 ② 균등대우 ③ 해고의 정당한 이유 ④ 절차·서면통지 ⑤ 노동위 구제 5중 트랙이 가능한 영역. 대응은 ① 근로자성 ② 균등 ③ 정당이유 ④ 절차 ⑤ 노동위 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 외국인 근로자 부당해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 근로자성·균등대우·해고의 정당한 이유·절차/서면통지·노동위 구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 근로자성</strong> — 국적과 무관하게 종속적 관계에서 임금 목적 근로를 제공한 근로자인지.</li>\n<li><strong>② 균등대우</strong> — 국적·사회적 신분을 이유로 차별적 처우를 받지 않았는지(근로기준법 제6조).</li>\n<li><strong>③ 해고의 정당한 이유</strong> — 채용조건 불충족 등 해고사유에 정당한 이유가 있는지(제23조).</li>\n<li><strong>④ 절차·서면통지</strong> — 해고 사유·시기를 서면으로 통지했는지(제27조).</li>\n<li><strong>⑤ 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 근로기준법은 국적과 무관하게 적용되고, 채용조건으로 일정 자격을 요구해 그 자격을 못 갖추면 해고할 수 있도록 정한 경우라도 단지 형식적 불충족만으로 해고가 곧바로 정당해지는 것이 아니라 정당한 이유가 있어야 하는 영역. 근로자성·균등대우와 해고의 정당한 이유가 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고·근로 자료 보존 (즉시)</strong> — 해고 통보서·근로계약서·체류/취업 자료·임금명세서 보존.</li>\n<li><strong>2단계 — 근로자성·균등대우 정리 (1주)</strong> — 지휘감독·근로 제공 정황과 국적 차별 여부 정리.</li>\n<li><strong>3단계 — 채용조건·정당이유 자료 (2주)</strong> — 채용조건 불충족 주장의 실재와 정당한 이유 여부 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n<li><strong>5단계 — 행정소송·후속 청구 정리 (병행)</strong> — 재심판정 다툼 시 동일 사실 범위 내 주장 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">외국인 근로자 부당해고·균등대우 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 근로자성·균등대우·정당이유 갈래입니다.</strong></p>\n<ul>\n<li><strong>해고 통보서 (해고사유·시점 명시)</strong></li>\n<li><strong>근로계약서 (근로조건·채용조건·자격)</strong></li>\n<li><strong>취업·체류 관련 자료 (취업자격 범위)</strong></li>\n<li><strong>업무 지시·근무 기록 (지휘감독·근로자성)</strong></li>\n<li><strong>임금명세서·차별 비교 자료 (균등대우)</strong></li>\n<li><strong>채용조건 충족·불충족 입증 자료</strong></li>\n<li><strong>해고 사유·시기 서면통지 자료 (제27조)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 국적과 무관하게 \'근로자성\'과 \'해고의 정당한 이유\'를 짚는 것입니다. 회사 지휘·감독을 받으며 일한 정황으로 근로자성을 정리하고, 채용조건 불충족을 이유로 든다면 그 조건이 실제로 충족됐는지·형식적 불충족만으로 해고가 정당해지지 않는지를 근로계약·취업 자료와 함께 정리해두면 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>근로자성</strong> — 국적과 무관하게 종속적 근로의 실질인지.</li>\n<li><strong>균등대우</strong> — 국적·사회적 신분을 이유로 차별적 처우를 받았는지.</li>\n<li><strong>해고의 정당한 이유</strong> — 채용조건 불충족 등 해고사유에 정당한 이유가 있는지.</li>\n<li><strong>절차·서면통지</strong> — 해고 사유·시기를 서면으로 통지했는지.</li>\n<li><strong>입증책임 분담</strong> — 해고 정당성 입증은 사용자, 차별·정당이유 흠결 정황은 근로자 측 정리 필요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>노동위원회 (부당해고 구제신청)</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 해고의 정당성 요건과 채용조건으로 자격을 요구한 경우',
        summary:
          '대법원 2015다5170(대법원, 2016.10.27 선고) 영역에서 법원은 사용자가 취업규칙이나 근로계약에서 정한 해고사유에 해당한다는 이유로 근로자를 해고할 때에도 근로기준법 제23조 제1항이 정한 정당한 이유가 있어야 하고, 이는 근로자의 채용조건으로 일정한 자격을 요구하면서 그 자격을 갖추지 못하는 경우 해고할 수 있도록 정한 경우에도 마찬가지여서 채용조건을 충족하지 못했다는 형식만으로 해고가 곧바로 정당해지는 것은 아니라는 취지로 판시했습니다. 외국인 근로자라도 채용조건 불충족을 이유로 한 해고를 다툴 때 정당한 이유의 존부를 검토해볼 수 있습니다.',
        takeaway: '외국인 근로자성 + 차별 의문 + 채용조건 결합 시 근로자성·균등대우·해고의 정당한 이유 종합 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '외국인도 부당해고를 다툴 수 있나요?',
        answer:
          '<strong>근로기준법은 국적과 무관하게 적용돼 부당해고 구제를 다툴 수 있는 영역입니다.</strong> 근로자성 정황을 먼저 정리.',
      },
      {
        question: '외국인이라 차별받은 것 같아요.',
        answer:
          '<strong>국적·사회적 신분을 이유로 한 차별적 처우는 균등대우 위반이 되는 영역입니다(제6조).</strong> 비교 자료를 확보.',
      },
      {
        question: '채용조건을 못 채우면 해고가 정당한가요?',
        answer:
          '<strong>형식적 불충족만으로 해고가 곧바로 정당해지지 않고 정당한 이유가 필요한 영역입니다.</strong> 조건 충족 여부를 정리.',
      },
      {
        question: '해고를 말로만 통보받았어요.',
        answer:
          '<strong>해고는 사유·시기를 서면으로 통지해야 효력이 있는 영역입니다(제27조).</strong> 통보 정황을 확보.',
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
      { label: '외국인 근로자 비자 만료 즉시 해고', href: '/guide/dismissal/dismissal-foreign-worker-visa-end-fired-relief' },
      { label: '해고근로자 종합 가이드', href: '/guide/dismissal' },
      { label: '이메일 해고통보 서면통지 효력 판단', href: '/guide/dismissal/dismissal-email-notice-written-procedure-effect-track' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 3. dismissal-absence-tardiness-misconduct-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-absence-tardiness-misconduct-track',
    keyword: '무단결근 근태불량 해고',
    questionKeyword: '몇 번 무단결근하고 지각이 잦았다는 이유로 회사가 징계해고를 했어요. 잘못한 부분은 있지만 해고까지 할 정도였는지, 또 징계위원회를 너무 늦게 연 것 같은데 이런 점으로 다툴 수 있나요?',
    ctaKeyword: '무단결근 근태불량 징계해고 정당성·징계시한 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '무단결근 근태불량 해고 — 5단계 비위 정도·징계시한 점검 | 로앤가이드',
      description:
        '무단결근·지각으로 징계해고를 당했다면 근로기준법 제23조 정당한 이유와 사회통념상 고용계속 불가능성·징계위원회 개최시한, 노동위 구제 3개월까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"무단결근이 몇 차례 있었고 지각도 잦았다는 이유로 회사가 곧바로 징계해고를 통보한 근로자입니다. 근태가 흐트러진 부분에 대해서는 잘못을 인정하지만, 사정이 있었던 결근까지 한꺼번에 묶어 회사를 그만둬야 할 만큼 무거운 처분을 받는 게 맞는지 도무지 납득이 가지 않습니다. 게다가 회사는 문제가 된 결근이 한참 지난 뒤에야 징계위원회를 열어 해고를 결정했는데, 단체협약에 정해진 징계 개최시한을 넘긴 것 같아 절차에도 흠이 있어 보여요. 근태불량이라는 이유만으로 해고까지 정당한 건지, 징계시한 도과 같은 절차 하자로 다툴 여지가 있는지 막막한 상태입니다." 근로기준법 제23조 제1항은 정당한 이유 없는 해고를 금지하고, 해고처분은 사회통념상 고용관계를 계속할 수 없을 정도로 근로자에게 책임 있는 사유가 있는 경우에 정당성이 인정되는 영역입니다. 판례는 사회통념상 고용관계를 계속할 수 없을 정도인지는 사용자의 사업 목적·성격, 사업장 여건, 근로자의 지위와 담당직무, 비위행위의 동기·경위, 기업질서에 미칠 영향, 과거의 근무태도 등을 종합해 판단하고, 단체협약에서 징계위원회 개최시한을 정하면서 이를 위반한 징계를 무효로 한다는 규정을 둔 경우 그 기산점은 원칙적으로 징계사유가 생긴 때이나 부득이한 사정이 있다면 징계절차를 개시해도 충분할 정도로 증명이 있다는 것을 알게 된 때부터 기산된다고 본 사례 흐름이 있는 영역입니다. 근태불량 + 해고 처분 + 징계시한 의문 결합은 \'근태 해고 정당성·징계시한\' 다툼이 가능한 트랙입니다. 피해자라면 ① 비위 정도 ② 사회통념상 고용계속 ③ 징계 양정 ④ 징계위 개최시한·절차 ⑤ 노동위 구제 5중 트랙이 가능한 영역. 대응은 ① 비위 ② 고용계속 ③ 양정 ④ 시한 ⑤ 노동위 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 무단결근 근태불량 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 비위 정도·사회통념상 고용계속·징계 양정·징계위 개최시한/절차·노동위 구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 비위 정도</strong> — 무단결근·지각의 횟수·동기·경위가 어느 정도인지(근로기준법 제23조).</li>\n<li><strong>② 사회통념상 고용계속</strong> — 고용관계를 계속할 수 없을 정도로 책임 있는 사유인지.</li>\n<li><strong>③ 징계 양정</strong> — 비위 정도에 비해 해고가 과중한 양정인지.</li>\n<li><strong>④ 징계위 개최시한·절차</strong> — 단체협약상 개최시한을 도과했는지, 소명 절차를 지켰는지.</li>\n<li><strong>⑤ 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 근태불량 해고는 사업 여건·직무·동기·기업질서 영향·과거 근무태도 등을 종합해 고용계속 불가능 정도인지로 판단하고, 단체협약상 징계위 개최시한을 위반하면 그 징계가 무효가 될 수 있으되 기산점은 징계사유 발생 시(부득이하면 증명을 알게 된 때)로 보는 영역. 비위 정도와 징계시한 도과가 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고·근태 자료 보존 (즉시)</strong> — 해고 통보서·징계의결서·출근기록·결근 사유 자료 보존.</li>\n<li><strong>2단계 — 비위 정도·경위 정리 (1주)</strong> — 무단결근·지각의 횟수·동기·경위와 과거 근무태도 정리.</li>\n<li><strong>3단계 — 양정·징계시한 자료 (2주)</strong> — 양정의 과중성과 단체협약상 징계위 개최시한 도과 여부 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 부당해고 구제 + 원직복직·임금상당액.</li>\n<li><strong>5단계 — 행정소송·후속 청구 정리 (병행)</strong> — 재심판정 다툼 시 동일 사실 범위 내 주장 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">무단결근 근태불량 징계해고 정당성·징계시한 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 비위 정도·양정·징계시한 갈래입니다.</strong></p>\n<ul>\n<li><strong>해고 통보서 (징계사유·시점 명시)</strong></li>\n<li><strong>출근기록·근태 자료 (결근·지각 횟수)</strong></li>\n<li><strong>결근·지각 사유 자료 (질병·사정 등 정상참작)</strong></li>\n<li><strong>징계의결서·인사위 회의록 (양정·절차)</strong></li>\n<li><strong>단체협약·취업규칙 (징계위 개최시한·양정 기준)</strong></li>\n<li><strong>유사 근태 비위 처분 사례 (형평 비교)</strong></li>\n<li><strong>해고 사유·시기 서면통지 자료 (제27조)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'근태불량이 해고까지 이를 정도인지\'와 \'징계시한을 지켰는지\'입니다. 결근·지각에 정상참작 사정이 있었다면 함께 정리하고, 단체협약에 징계위 개최시한과 위반 시 무효 규정이 있는지 확인해 그 기산점(징계사유 발생 시)부터 도과 여부를 따져두는 것이 출발점입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>비위 정도</strong> — 무단결근·지각의 횟수·동기·경위가 해고에 이를 정도인지.</li>\n<li><strong>고용계속 가능성</strong> — 사회통념상 고용관계를 계속할 수 없을 정도인지.</li>\n<li><strong>징계 양정</strong> — 비위에 비해 해고가 과중한지.</li>\n<li><strong>징계위 개최시한</strong> — 단체협약상 개최시한을 위반해 징계가 무효인지.</li>\n<li><strong>입증책임 분담</strong> — 해고 정당성 입증은 사용자, 양정 과다·시한 도과 정황은 근로자 측 정리 필요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>노동위원회 (부당해고 구제신청)</strong></li>\n<li><strong>한국공인노무사회 02-3673-2266</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 근태 비위 해고의 고용계속 불가능성과 징계위원회 개최시한',
        summary:
          '대법원 2013두26750(대법원, 2017.03.15 선고) 영역에서 법원은 해고처분은 사회통념상 고용관계를 계속할 수 없을 정도로 근로자에게 책임 있는 사유가 있는 경우에 정당성이 인정되고 그 정도인지는 사용자의 사업 목적·성격, 사업장 여건, 근로자의 지위와 담당직무, 비위행위의 동기·경위, 기업질서에 미칠 영향, 과거의 근무태도 등을 종합해 판단하여야 하며, 단체협약에서 징계위원회 개최시한을 규정하면서 이를 위반한 징계를 무효로 한다는 규정을 둔 경우 그 기산점은 원칙적으로 징계사유가 생긴 때이나 부득이한 사정이 있다면 징계절차를 개시해도 충분할 정도로 증명이 있다는 것을 알게 된 때부터 기산된다고 판시했습니다. 근태불량 해고를 다툴 때 고용계속 불가능성과 징계시한 도과를 검토해볼 수 있습니다.',
        takeaway: '근태불량 + 해고 처분 + 징계시한 의문 결합 시 비위 정도·고용계속 불가능성·징계위 개최시한 종합 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '무단결근·지각으로 해고까지 정당한가요?',
        answer:
          '<strong>사회통념상 고용관계를 계속할 수 없을 정도여야 정당성이 검토되는 영역입니다.</strong> 비위 정도와 경위를 정리.',
      },
      {
        question: '결근에 사정이 있었는데 고려가 안 됐어요.',
        answer:
          '<strong>동기·경위·과거 근무태도 등 정상참작 요소가 양정 판단에 반영되는 영역입니다.</strong> 결근 사유 자료를 확보.',
      },
      {
        question: '징계위원회를 너무 늦게 열었어요.',
        answer:
          '<strong>단체협약상 개최시한을 위반하면 그 징계가 무효가 될 수 있는 영역입니다.</strong> 시한과 기산점을 확인.',
      },
      {
        question: '비위에 비해 해고가 무거운 것 같아요.',
        answer:
          '<strong>비위 정도에 비해 과중한 양정이면 다툴 수 있는 영역입니다.</strong> 유사 처분 사례를 비교 정리.',
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
      { label: '해고근로자 종합 가이드', href: '/guide/dismissal' },
      { label: '징계 절차 위반 해고 정당성 판단', href: '/guide/dismissal/dismissal-disciplinary-procedure-defect-track' },
      { label: '구두 해고 서면통지 누락 효력 판단', href: '/guide/dismissal/dismissal-verbal-notice-no-written-document-track' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 4. wage-on-call-standby-hours-track ───
  {
    domain: 'wage',
    slug: 'wage-on-call-standby-hours-track',
    keyword: '대기시간 근로시간 임금',
    questionKeyword: '격일제로 일하는데 손님이 없을 때 대기하는 시간이 무척 길어요. 회사는 그 대기시간을 근로시간에서 빼고, 하루 8시간을 넘는 부분까지 최저임금에 끼워 계산하는 것 같은데 이렇게 임금을 받는 게 맞는지 다툴 수 있나요?',
    ctaKeyword: '대기시간 근로시간성·격일제 소정근로 임금 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '대기시간 근로시간 임금 — 5단계 근로시간성·격일제 점검 | 로앤가이드',
      description:
        '대기시간이 근로시간에서 빠지고 격일제 8시간 초과분 임금이 의심된다면 근로기준법 제50조 대기시간 근로시간성과 1일 8시간 소정근로·최저임금 산정, 임금 시효 3년 청구까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"하루 일하고 그다음 날 쉬는 격일제로 근무하는 근로자입니다. 근무하는 날에는 손님이 없어 대기하는 시간이 무척 길게 이어지는데, 자리를 비울 수도 없이 사실상 회사의 지휘 아래 묶여 있는 시간인데도 회사는 이 대기시간을 근로시간에서 통째로 빼버립니다. 게다가 하루 8시간을 넘겨 일한 부분까지 최저임금에 끼워 넣어 시급을 맞추는 것 같아, 정말 제대로 받고 있는 건지 도무지 알 수가 없어요. 일하지 않은 시간처럼 보여도 대기시간은 근로시간이라고 들었는데, 회사는 \'쉰 시간은 일한 게 아니다\'라는 말만 반복합니다. 대기시간을 근로시간으로 보고 임금을 다툴 여지가 있는지 막막한 상태입니다." 근로기준법 제2조 제1항 제7호는 근로시간을 정하고 같은 항 제8호·제50조는 소정근로시간을 1주 40시간·1일 8시간의 범위에서 정한 시간으로 정하며, 제50조 제3항은 작업을 위해 근로자가 사용자의 지휘·감독 아래 있는 대기시간을 근로시간으로 보도록 정하는 영역입니다. 판례는 최저임금에 산입되는 임금에 소정근로시간 또는 소정의 근로일에 대해 지급하는 임금 외의 임금은 포함되지 않고 여기서 소정근로시간은 1주 40시간·1일 8시간 범위에서 정한 근로시간을 뜻하므로, 1주 40시간 또는 1일 8시간을 초과하는 연장근로시간은 특별한 사정이 없는 한 최저임금액 이상을 지급해야 하는 시간에 포함되지 않으며 이는 격일제 근무 형태에서도 마찬가지라고 본 사례 흐름이 있는 영역입니다. 대기시간 + 격일제 + 최저임금 의문 결합은 \'대기시간 근로시간성·소정근로 산정\' 다툼이 가능한 트랙입니다. 피해자라면 ① 대기시간 근로시간성 ② 격일제 소정근로 ③ 연장근로 구분 ④ 최저임금 산정 ⑤ 청구 5중 트랙이 가능한 영역. 대응은 ① 대기 ② 소정근로 ③ 연장 ④ 최저임금 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 대기시간 근로시간 임금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 대기시간 근로시간성·격일제 소정근로·연장근로 구분·최저임금 산정·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 대기시간 근로시간성</strong> — 사용자의 지휘·감독 아래 있던 대기시간이 근로시간인지(근로기준법 제50조 제3항).</li>\n<li><strong>② 격일제 소정근로</strong> — 소정근로시간이 1일 8시간·1주 40시간 범위에서 정해졌는지(제50조).</li>\n<li><strong>③ 연장근로 구분</strong> — 1일 8시간·1주 40시간 초과분이 연장근로로 구분되는지.</li>\n<li><strong>④ 최저임금 산정</strong> — 8시간 초과 연장근로시간이 최저임금 지급 대상 시간에서 제외되는지.</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정·민사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 최저임금이 적용되는 소정근로시간은 1주 40시간·1일 8시간 범위의 시간이어서 그 초과분인 연장근로시간은 특별한 사정이 없는 한 최저임금 지급 대상 시간에 포함되지 않고 이는 격일제에서도 마찬가지인 영역. 대기시간의 근로시간성과 소정근로·연장근로 구분이 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong>A. 고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근무·급여 자료 보존 (즉시)</strong> — 근무표·운행/영업 기록·임금명세서·근로계약서 보존.</li>\n<li><strong>2단계 — 대기시간·근로시간 정리 (1~2주)</strong> — 지휘·감독 아래 있던 대기시간과 실제 근로시간 정리.</li>\n<li><strong>3단계 — 소정근로·최저임금 검토 (2~3주)</strong> — 격일제 소정근로(1일 8시간)와 연장근로 구분, 최저임금 산입 검토.</li>\n<li><strong>4단계 — 고용노동부 진정·내용증명 (시효 3년 내)</strong> — 1350 진정 또는 회사 청구.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">대기시간 근로시간성·격일제 소정근로 임금 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 대기시간·소정근로·최저임금 갈래입니다.</strong></p>\n<ul>\n<li><strong>근무표·교대표 (격일제 근무 형태·시간)</strong></li>\n<li><strong>대기시간 입증 자료 (지휘·감독 아래 구속 정황)</strong></li>\n<li><strong>근로계약서 (소정근로시간·임금 구성)</strong></li>\n<li><strong>임금명세서 (기본급·연장수당 표시)</strong></li>\n<li><strong>운행·영업 기록 (실근로·대기 구분)</strong></li>\n<li><strong>최저임금 산입 내역 자료 (소정근로/연장 구분)</strong></li>\n<li><strong>진정서·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'대기시간이 근로시간인지\'와 \'소정근로시간 산정\'입니다. 자리를 비울 수 없이 사용자의 지휘·감독 아래 있던 대기시간은 근로시간으로 볼 여지가 있고, 최저임금은 1일 8시간·1주 40시간 범위의 소정근로시간 기준이므로 초과분(연장근로)이 산입에서 제외됐는지 근무표·산입 내역으로 확인해두는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대기시간 근로시간성</strong> — 지휘·감독 아래 있던 대기시간이 근로시간인지.</li>\n<li><strong>격일제 소정근로</strong> — 소정근로시간이 1일 8시간 범위로 정해졌는지.</li>\n<li><strong>연장근로 구분</strong> — 8시간 초과분이 연장근로로 구분되는지.</li>\n<li><strong>최저임금 산정</strong> — 연장근로시간이 최저임금 지급 대상 시간에서 제외됐는지.</li>\n<li><strong>시효 관리</strong> — 임금·수당 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (임금체불 신고·진정)</strong></li>\n<li><strong>근로복지공단</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 격일제 소정근로시간과 연장근로의 최저임금 산입 제외',
        summary:
          '대법원 2022다257238(대법원, 2025.07.18 선고) 영역에서 법원은 최저임금에 산입되는 임금에 소정근로시간 또는 소정의 근로일에 대하여 지급하는 임금 외의 임금은 포함되지 않고 여기서 소정근로시간은 1주 40시간 및 1일 8시간의 범위 내에서 근로자와 사용자가 정한 근로시간을 뜻하므로, 근로자와 사용자가 정한 1주의 근로시간이 40시간을 초과하거나 1일의 근로시간이 8시간을 초과하는 경우 그 초과 부분인 연장근로시간은 다른 특별한 사정이 없는 한 최저임금액 이상의 임금을 지급해야 하는 시간에 포함되지 않으며 이는 격일제 근무 형태에서도 마찬가지라고 판시했습니다. 대기시간을 포함한 근로시간과 격일제 임금을 다툴 때 소정근로·연장근로 구분을 검토해볼 수 있습니다.',
        takeaway: '대기시간 + 격일제 + 최저임금 의문 결합 시 대기시간 근로시간성·소정근로(1일 8시간)·연장근로 최저임금 산입 검토 영역 — 진정·민사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '손님 없이 대기한 시간도 근로시간인가요?',
        answer:
          '<strong>사용자의 지휘·감독 아래 있던 대기시간은 근로시간으로 볼 여지가 있는 영역입니다(제50조 제3항).</strong> 구속 정황을 정리.',
      },
      {
        question: '격일제 소정근로시간은 어떻게 정해지나요?',
        answer:
          '<strong>소정근로시간은 1일 8시간·1주 40시간 범위에서 정해지는 영역입니다(제50조).</strong> 근무표로 산정을 확인.',
      },
      {
        question: '8시간 넘게 일한 부분도 최저임금에 들어가나요?',
        answer:
          '<strong>8시간 초과 연장근로시간은 특별한 사정이 없는 한 최저임금 지급 대상 시간에서 제외되는 영역입니다.</strong> 산입 내역을 확인.',
      },
      {
        question: '회사가 쉰 시간은 일한 게 아니라는데요?',
        answer:
          '<strong>대기시간의 근로시간성·소정근로 산정이 다툼이 되는 영역입니다.</strong> 근무표·운행 기록을 대조 정리.',
      },
      {
        question: '청구 시효는요?',
        answer:
          '<strong>임금·수당 청구 시효는 3년인 영역입니다.</strong> 지급일로부터 3년 내 청구.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '최저임금 미달 급여 신고 방법과 차액 청구', href: '/guide/wage/minimum-wage-violation-complaint' },
      { label: '연장근로 고정수당 미달 차액 청구 판단', href: '/guide/wage/wage-overtime-fixed-allowance-shortfall-claim-track' },
      { label: '정기상여금 통상임금 포함 여부 판단', href: '/guide/wage/wage-fixed-bonus-ordinary-wage-inclusion-track' },
      { label: '임금체불 진정 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
    ],
  },

  // ─── 5. wage-comprehensive-overtime-track ───
  {
    domain: 'wage',
    slug: 'wage-comprehensive-overtime-track',
    keyword: '포괄임금 연장수당 다툼',
    questionKeyword: '근로계약에 "수당 다 포함"이라며 매달 정해진 금액만 받는 포괄임금제로 일했어요. 그런데 실제 일한 연장근로를 따져보니 받은 임금이 최저임금에도 못 미치는 것 같은데, 이런 포괄임금계약도 다툴 수 있나요?',
    ctaKeyword: '포괄임금계약 최저임금 미달·연장수당 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '포괄임금 연장수당 다툼 — 5단계 최저임금·비교시급 점검 | 로앤가이드',
      description:
        '수당 포함 포괄임금으로 받은 임금이 최저임금에 못 미친다면 최저임금법상 비교대상 시급 산정과 포괄임금계약의 효력·연장수당 다툼, 임금 시효 3년 청구까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"근로계약서에 \'각종 수당이 모두 포함된 금액\'이라며 매달 정해진 임금만 받아 온 포괄임금제 근로자입니다. 처음에는 깔끔하게 한 번에 받는 줄 알았는데, 막상 제가 실제로 한 연장근로 시간을 따져보니 시간당으로 환산하면 받은 임금이 최저임금에도 미치지 못하는 것 같아 충격을 받았어요. 회사는 \'다 합쳐서 주는 포괄임금이니 문제없다\'는 말만 반복하는데, 법정수당까지 뭉뚱그려 정해 놓고 최저임금 미달을 가리는 게 맞는지 도무지 납득이 가지 않습니다. 포괄임금계약이라도 최저임금에 미달하면 무효로 보고 차액을 다툴 여지가 있는지, 어떻게 비교해야 하는지 막막한 상태입니다." 근로기준법 제2조 제1항 제8호는 소정근로시간을 정하고, 최저임금법 제6조는 사용자가 최저임금액 이상의 임금을 지급하도록 정하며 최저임금 산입에서 연장·야간·휴일근로 가산임금 등 소정근로 대가로 인정할 수 없는 임금을 제외하는 영역입니다. 판례는 기본임금을 미리 정하지 않은 채 법정수당까지 포함한 금액을 월급여액 등으로 정해 근로시간 수와 상관없이 지급하기로 하는 이른바 정액급 포괄임금계약 등이 체결될 수 있으나, 월 단위로 정해진 임금이 최저임금에 미달하는지는 비교대상 임금액을 1개월의 소정근로시간 수로 나눈 비교대상 시급과 시급으로 고시되는 최저임금을 비교해 판단해야 한다고 본 사례 흐름이 있는 영역입니다. 포괄임금 + 연장근로 + 최저임금 미달 의문 결합은 \'포괄임금 효력·최저임금 미달\' 다툼이 가능한 트랙입니다. 피해자라면 ① 포괄임금계약 내용 ② 비교대상 임금 ③ 소정근로시간 ④ 비교대상 시급 ⑤ 청구 5중 트랙이 가능한 영역. 대응은 ① 계약 ② 비교임금 ③ 소정근로 ④ 비교시급 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 포괄임금 연장수당 다툼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 포괄임금계약 내용·비교대상 임금·소정근로시간·비교대상 시급·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 포괄임금계약 내용</strong> — 기본임금·법정수당 구분 없이 일정액으로 정한 포괄임금계약인지.</li>\n<li><strong>② 비교대상 임금</strong> — 연장·야간·휴일 가산임금 등 최저임금 산입 제외 임금을 뺀 비교대상 임금 산정(최저임금법 제6조).</li>\n<li><strong>③ 소정근로시간</strong> — 1개월의 소정근로시간 수가 정확한지(근로기준법 제2조 제1항 제8호).</li>\n<li><strong>④ 비교대상 시급</strong> — 비교대상 임금을 1개월 소정근로시간 수로 나눈 비교대상 시급과 최저임금 비교.</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정·민사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 월 단위 임금의 최저임금 미달 여부는 비교대상 임금액을 1개월의 소정근로시간 수로 나눈 비교대상 시급과 시급 최저임금을 비교해 판단하는 영역. 포괄임금이라도 비교대상 시급 산정으로 최저임금 미달을 가려내는 것이 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong>A. 고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·급여 자료 보존 (즉시)</strong> — 근로계약서(포괄임금 조항)·임금명세서·근무기록 보존.</li>\n<li><strong>2단계 — 비교대상 임금 정리 (1~2주)</strong> — 가산임금 등 최저임금 산입 제외분을 뺀 비교대상 임금 정리.</li>\n<li><strong>3단계 — 소정근로·비교시급 검토 (2~3주)</strong> — 1개월 소정근로시간 수 확정 → 비교대상 시급 산정 → 최저임금 비교.</li>\n<li><strong>4단계 — 고용노동부 진정·내용증명 (시효 3년 내)</strong> — 1350 진정 또는 회사 청구.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미달 차액 미정산 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">포괄임금계약 최저임금 미달·연장수당 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 포괄임금·비교임금·비교시급 갈래입니다.</strong></p>\n<ul>\n<li><strong>근로계약서 (포괄임금 조항·임금 구성)</strong></li>\n<li><strong>임금명세서 (기본급·가산수당 표시)</strong></li>\n<li><strong>근무·연장근로 기록 (실근로시간)</strong></li>\n<li><strong>소정근로시간 산정 자료 (1개월 소정근로시간 수)</strong></li>\n<li><strong>비교대상 임금 산정표 (산입 제외분 제외)</strong></li>\n<li><strong>비교대상 시급·최저임금 대조표</strong></li>\n<li><strong>진정서·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'비교대상 시급\'으로 최저임금 미달을 가려내는 것입니다. 받은 임금에서 연장·야간·휴일 가산임금 등 최저임금 산입 제외분을 빼 비교대상 임금을 정하고, 이를 1개월 소정근로시간 수로 나눈 비교대상 시급을 고시 최저임금과 대조해두면 포괄임금이라도 미달 여부를 확인할 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>포괄임금계약 효력</strong> — 최저임금에 미달하면 그 한도에서 효력을 다툴 수 있는지.</li>\n<li><strong>비교대상 임금</strong> — 가산임금 등 산입 제외분을 정확히 제외했는지.</li>\n<li><strong>소정근로시간</strong> — 1개월 소정근로시간 수가 정확한지.</li>\n<li><strong>비교대상 시급</strong> — 비교대상 시급이 고시 최저임금에 미달하는지.</li>\n<li><strong>시효 관리</strong> — 임금·차액 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (임금체불 신고·진정)</strong></li>\n<li><strong>근로복지공단</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금계약의 최저임금 미달 판단과 비교대상 시급 산정',
        summary:
          '대법원 2020다300299(대법원, 2024.12.26 선고) 영역에서 법원은 기본임금을 미리 정하지 않은 채 법정수당까지 포함된 금액을 월급여액이나 일당임금으로 정하여 근로시간 수와 상관없이 지급하기로 하는 이른바 정액급 포괄임금계약 등이 체결될 수 있으나, 월 단위로 정해진 임금이 최저임금에 미달하는지는 연장·야간·휴일근로 가산임금 등 최저임금 산입 제외 임금을 뺀 비교대상 임금액을 1개월의 소정근로시간 수로 나눈 비교대상 시급과 시급으로 고시되는 최저임금을 비교하여 판단하여야 한다고 판시했습니다. 포괄임금으로 받은 임금이 최저임금에 미달하는지 다툴 때 비교대상 시급 산정을 검토해볼 수 있습니다.',
        takeaway: '포괄임금 + 연장근로 + 최저임금 미달 의문 결합 시 비교대상 임금·소정근로시간·비교대상 시급 산정 검토 영역 — 진정·민사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '포괄임금제면 최저임금을 따질 수 없나요?',
        answer:
          '<strong>포괄임금이라도 비교대상 시급으로 최저임금 미달을 가릴 수 있는 영역입니다.</strong> 임금 구성과 근무기록을 정리.',
      },
      {
        question: '최저임금 미달은 어떻게 확인하나요?',
        answer:
          '<strong>비교대상 임금을 1개월 소정근로시간 수로 나눈 시급을 최저임금과 비교하는 영역입니다.</strong> 산정표로 대조.',
      },
      {
        question: '연장수당도 비교대상 임금에 들어가나요?',
        answer:
          '<strong>연장·야간·휴일 가산임금은 최저임금 산입에서 제외되는 영역입니다.</strong> 산입 제외분을 구분 정리.',
      },
      {
        question: '회사가 다 포함해서 줬다는데요?',
        answer:
          '<strong>포함 여부와 무관하게 비교시급이 최저임금에 미달하면 차액을 다툴 수 있는 영역입니다.</strong> 비교시급을 산정.',
      },
      {
        question: '청구 시효는요?',
        answer:
          '<strong>임금·차액 청구 시효는 3년인 영역입니다.</strong> 지급일로부터 3년 내 청구.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '포괄임금 최저임금 미달 차액', href: '/guide/wage/unpaid-wage-minimum-wage-comprehensive' },
      { label: '연장근로 고정수당 미달 차액 청구 판단', href: '/guide/wage/wage-overtime-fixed-allowance-shortfall-claim-track' },
      { label: '임금 종합 가이드', href: '/guide/wage' },
      { label: '정기상여금 통상임금 산입', href: '/guide/wage/wage-fixed-bonus-ordinary-wage-track' },
      { label: '임금체불 진정 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
    ],
  },

  // ─── 6. unemployment-wage-arrears-resignation-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-wage-arrears-resignation-track',
    keyword: '임금체불 자진퇴사 수급',
    questionKeyword: '월급이 몇 달째 밀려 도저히 못 버티고 제가 사표를 냈어요. 자진퇴사면 실업급여가 안 된다는데, 임금체불로 어쩔 수 없이 그만둔 경우도 그런가요? 받았다가 부정수급으로 몰릴까 봐도 걱정됩니다.',
    ctaKeyword: '임금체불 자진퇴사 정당 이직·부정수급 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임금체불 자진퇴사 수급 — 5단계 정당 이직·부정수급 점검 | 로앤가이드',
      description:
        '임금체불로 어쩔 수 없이 사표를 냈는데 실업급여가 되는지 궁금하다면 고용보험법상 임금체불 정당한 이직 사유 수급과 부정수급(허위 기타 부정한 방법) 범위, 신청 절차까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"월급이 몇 달째 제대로 들어오지 않아 생계를 도저히 감당할 수 없어 결국 제가 먼저 사표를 낸 근로자입니다. 스스로 그만둔 모양새가 되다 보니 \'자진퇴사면 실업급여가 안 된다\'는 말부터 들어 막막했어요. 임금이 밀려 어쩔 수 없이 나온 건데도 자진퇴사로만 보고 수급을 막는 게 맞는지 헷갈리고, 한편으로는 실업급여를 받았다가 나중에 \'부정수급\'으로 몰려 받은 돈을 토해내고 추가징수까지 당할까 봐도 걱정됩니다. 임금체불로 그만둔 경우 정당한 이직 사유로 인정돼 수급할 수 있는지, 어떤 자료를 준비하고 무엇을 조심해야 하는지 막막한 상태입니다." 고용보험법 제40조는 이직일 이전 18개월간 피보험단위기간 180일 이상 등을 수급요건으로 정하고, 임금체불 등 정당한 사유가 있는 자기 사정에 의한 이직은 수급자격 제한에서 제외돼 수급자격이 검토되는 영역이며, 같은 법은 거짓·부정한 방법으로 받은 구직급여의 반환·추가징수를 정하는 영역입니다. 판례는 고용보험법상 \'허위 기타 부정한 방법\'은 일반적으로 수급자격 없는 사람이 수급자격을 가장하거나 취업사실·소득 발생사실 등을 감추는 일체의 부정행위를 말하는 것이어서 근로소득이 있는 자가 신고의무를 불이행한 경우에도 이에 해당하나, 형식상 사업자등록이 있더라도 사실상 폐업상태로 실질적으로 사업을 영위하지 않아 전혀 소득이 없었던 경우 사업자등록을 신고하지 않았다고 해서 부정한 방법으로 실업급여를 받은 경우에 해당한다고 볼 수 없다고 본 사례 흐름이 있는 영역입니다. 임금체불 + 자진퇴사 + 부정수급 우려 결합은 \'정당한 이직 수급·부정수급 범위\' 검토가 가능한 트랙입니다. 피해자라면 ① 임금체불 입증 ② 정당한 이직 사유 ③ 피보험단위기간 ④ 수급자격 ⑤ 부정수급 회피 5중 트랙이 가능한 영역. 대응은 ① 입증 ② 정당이직 ③ 단위기간 ④ 수급 ⑤ 신고 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 임금체불 자진퇴사 수급 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 임금체불 입증·정당한 이직 사유·피보험단위기간·수급자격·부정수급 회피 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 임금체불 입증</strong> — 임금이 일정 수준·기간 이상 지급되지 않은 사정 정리.</li>\n<li><strong>② 정당한 이직 사유</strong> — 임금체불 등으로 부득이 이직한 정당한 사유에 해당하는지.</li>\n<li><strong>③ 피보험단위기간</strong> — 이직일 이전 18개월간 180일 이상인지(고용보험법 제40조).</li>\n<li><strong>④ 수급자격</strong> — 자진퇴사라도 정당한 이직 사유로 수급자격이 인정될 수 있는지.</li>\n<li><strong>⑤ 부정수급 회피</strong> — 수급 중 취업·소득 발생 시 신고의무를 지켜 부정수급을 피하는지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임금체불로 부득이 그만둔 경우 자진퇴사라도 정당한 이직 사유로 수급자격이 검토되는 영역. 판례 흐름에서 \'허위 기타 부정한 방법\'은 취업·소득 사실 등을 감추는 부정행위를 뜻하므로 수급 중 신고의무를 지키는 것이 부정수급을 피하는 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신청·심사 5단계',
        content:
          '<p><strong>A. 고용센터·고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임금체불·이직 자료 보존 (즉시)</strong> — 임금명세서·체불 내역·진정/체불확인서·이직확인서 보존.</li>\n<li><strong>2단계 — 정당한 이직·단위기간 정리 (1주)</strong> — 임금체불 사정과 피보험단위기간(180일) 정리.</li>\n<li><strong>3단계 — 수급자격 신청 (이직일 다음날부터 12개월 내)</strong> — 워크넷 구직등록 + 수급자격 신청.</li>\n<li><strong>4단계 — 이직 사유 소명 (고용센터 심사)</strong> — 임금체불 정당한 이직 입증 자료 제출.</li>\n<li><strong>5단계 — 수급 중 신고의무 준수 (부정수급 회피)</strong> — 취업·소득 발생 시 즉시 신고.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">임금체불 자진퇴사 정당 이직·부정수급 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 임금체불 입증·정당한 이직·단위기간 갈래입니다.</strong></p>\n<ul>\n<li><strong>근로계약서 (임금·지급일)</strong></li>\n<li><strong>임금명세서·급여 입금 내역 (체불 정황)</strong></li>\n<li><strong>임금체불 진정·체불확인서 (고용노동부)</strong></li>\n<li><strong>이직확인서 (이직 사유 코드 확인)</strong></li>\n<li><strong>고용보험 가입이력 (피보험단위기간 180일)</strong></li>\n<li><strong>워크넷 구직등록 확인</strong></li>\n<li><strong>수급 중 취업·소득 신고 자료 (부정수급 회피)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'임금체불이 정당한 이직 사유임을 입증하는 것\'과 \'수급 중 신고의무 준수\'입니다. 체불 내역·진정·체불확인서로 자진퇴사가 부득이했음을 뒷받침하고 피보험단위기간 180일을 점검하세요. 수급 중 단기 취업·소득이 생기면 즉시 신고해 부정수급으로 몰리지 않도록 하는 것이 안전합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>정당한 이직 사유</strong> — 임금체불로 부득이 그만둔 정당한 이직인지(단순 자진퇴사와 구별).</li>\n<li><strong>이직확인서 사유</strong> — 이직 사유가 임금체불로 정확히 기재됐는지.</li>\n<li><strong>피보험단위기간</strong> — 180일 이상 충족 여부.</li>\n<li><strong>부정수급 범위</strong> — 취업·소득 사실을 감춘 부정행위에 해당하는지.</li>\n<li><strong>신청 기한</strong> — 이직일 다음날부터 12개월 내 신청.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 고용센터 1350</strong></li>\n<li><strong>근로복지공단</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 실업급여 \'허위 기타 부정한 방법\'의 의미와 범위',
        summary:
          '대법원 2002두7494(대법원, 2003.09.23 선고) 영역에서 법원은 구 고용보험법 제48조 제1항의 \'허위 기타 부정한 방법\'이란 일반적으로 수급자격 없는 사람이 수급자격을 가장하거나 취업사실 또는 소득의 발생사실 등을 감추는 일체의 부정행위를 말하는 것이어서 근로소득이 있는 자가 그 신고의무를 불이행한 경우에도 이에 해당한다고 볼 것이나, 구직급여를 받은 자가 형식상 자신의 명의로 된 사업자등록이 있었다 하더라도 사실상 폐업상태로 실질적으로 사업을 영위하지 않아 전혀 소득이 없었던 경우에는 사업자등록 사실을 신고하지 않았더라도 부정한 방법으로 실업급여를 받은 경우에 해당한다고 볼 수 없다고 판시했습니다. 임금체불 자진퇴사 수급과 부정수급 우려를 정리할 때 신고의무와 부정수급의 범위를 검토해볼 수 있습니다.',
        takeaway: '임금체불 + 자진퇴사 + 부정수급 우려 결합 시 정당한 이직 수급·부정수급 범위·신고의무 검토 영역 — 고용센터 상담·심사청구 트랙.',
      },
    ],
    faq: [
      {
        question: '월급이 밀려 그만둬도 자진퇴사인가요?',
        answer:
          '<strong>임금체불로 부득이 그만뒀다면 정당한 이직 사유로 수급자격이 검토되는 영역입니다.</strong> 체불 내역·진정 자료를 확보.',
      },
      {
        question: '체불을 어떻게 입증하나요?',
        answer:
          '<strong>임금명세서·입금 내역·체불확인서로 입증하는 영역입니다.</strong> 고용노동부 진정·체불확인서를 함께 준비.',
      },
      {
        question: '피보험단위기간은 얼마나 필요한가요?',
        answer:
          '<strong>이직일 이전 18개월간 180일 이상이 원칙인 영역입니다.</strong> 고용보험 가입이력을 먼저 확인.',
      },
      {
        question: '받았다가 부정수급으로 몰리지 않을까요?',
        answer:
          '<strong>취업·소득 사실을 감추지 않고 신고의무를 지키면 부정수급에 해당하지 않는 영역입니다.</strong> 수급 중 즉시 신고.',
      },
      {
        question: '신청 기한이 있나요?',
        answer:
          '<strong>이직일 다음날부터 12개월 이내 수급자격을 신청해야 하는 영역입니다.</strong> 기한 내 워크넷 구직등록·신청 검토.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '임금체불 자진퇴사 정당한 사유 구직급여 절차', href: '/guide/unemployment/unemployment-wage-arrears-resignation-just-cause-track' },
      { label: '실업급여 종합 가이드', href: '/guide/unemployment' },
      { label: '계약직 만료 실업급여 신청 순서 5단계', href: '/guide/unemployment/contract-expiry-benefit-application-order' },
      { label: '실업급여 부정수급 반환 추가징수', href: '/guide/unemployment/unemployment-fraud-recovery-additional-collection-track' },
      { label: '자영업자 임의가입 폐업 실업급여', href: '/guide/unemployment/unemployment-self-employed-voluntary-insured-closure' },
    ],
  },

  // ─── 7. unemployment-business-closure-separation-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-business-closure-separation-track',
    keyword: '폐업 권고사직 수급',
    questionKeyword: '회사가 폐업한다며 권고사직을 받아들이라고 해서 나왔어요. 비자발적으로 그만둔 건데 실업급여가 되는지, 또 제 임금에 성과급·초과수입 같은 게 있었는데 그게 실업급여 산정에 반영되는지 궁금합니다.',
    ctaKeyword: '폐업 권고사직 비자발 이직·평균임금 산정 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '폐업 권고사직 수급 — 5단계 비자발 이직·평균임금 점검 | 로앤가이드',
      description:
        '폐업·권고사직으로 그만뒀는데 실업급여가 되는지 궁금하다면 고용보험법상 폐업·권고사직 비자발적 이직 수급과 구직급여 기준 평균임금 산정, 신청 절차까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"다니던 회사가 \'곧 폐업한다\'며 권고사직을 받아들이라고 해서 결국 회사를 나오게 된 근로자입니다. 제가 원해서 그만둔 게 전혀 아니라 회사 사정으로 어쩔 수 없이 비자발적으로 떠밀려 나온 건데, \'권고사직이면 실업급여가 안 되는 거 아니냐\'는 말부터 들어 혼란스러웠어요. 폐업·권고사직도 비자발적 이직으로 인정돼 수급할 수 있는지 헷갈리고, 한편으로는 매달 기본급 외에 성과에 따른 초과수입 같은 부분이 있었는데 그런 임금까지 실업급여 산정의 기초가 되는 평균임금에 제대로 반영되는지도 궁금합니다. 폐업·권고사직으로 그만둔 경우 수급자격과 급여 산정이 어떻게 되는지 막막한 상태입니다." 고용보험법 제40조는 이직일 이전 18개월간 피보험단위기간 180일 이상 등을 수급요건으로 정하고, 폐업·권고사직 등 비자발적 이직은 수급자격이 검토되는 영역이며, 같은 법 제45조·제46조는 구직급여일액을 원칙적으로 근로기준법 제2조 제1항 제6호의 평균임금으로 산정하도록 정하는 영역입니다. 판례는 구직급여 산정 기초가 되는 평균임금은 이를 산정할 사유가 발생한 날 이전 3개월간 지급된 임금 총액을 그 기간의 총일수로 나눈 금액이고, 일정 형태의 보수에서 근로의 대가로 지급된 부분(예: 사납금 공제 후 택시운전근로자에게 귀속된 초과운송수입금)도 임금에 해당하므로 구직급여의 기준이 되는 평균임금을 산정할 때 그 부분 역시 포함되어야 한다고 본 사례 흐름이 있는 영역입니다. 폐업·권고사직 + 비자발성 + 평균임금 산정 결합은 \'비자발 이직 수급·평균임금\' 검토가 가능한 트랙입니다. 피해자라면 ① 폐업·권고사직 입증 ② 비자발적 이직 ③ 피보험단위기간 ④ 수급자격 ⑤ 평균임금 산정 5중 트랙이 가능한 영역. 대응은 ① 입증 ② 이직 ③ 단위기간 ④ 수급 ⑤ 평균임금 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 폐업 권고사직 수급 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 폐업·권고사직 입증·비자발적 이직·피보험단위기간·수급자격·평균임금 산정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 폐업·권고사직 입증</strong> — 폐업·경영 사정으로 회사가 권고사직을 권유해 이직한 사정 정리.</li>\n<li><strong>② 비자발적 이직</strong> — 근로자가 원해서가 아니라 회사 사정으로 비자발적으로 이직했는지.</li>\n<li><strong>③ 피보험단위기간</strong> — 이직일 이전 18개월간 180일 이상인지(고용보험법 제40조).</li>\n<li><strong>④ 수급자격</strong> — 폐업·권고사직 비자발 이직으로 수급자격이 인정될 수 있는지.</li>\n<li><strong>⑤ 평균임금 산정</strong> — 기본급 외 근로 대가로 지급된 부분도 평균임금에 포함되는지(제45조·제46조).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 폐업·권고사직은 비자발적 이직으로 수급자격이 검토되는 영역. 판례 흐름에서 구직급여 기준 평균임금은 이직 전 3개월 임금 총액 기준이고 근로 대가로 지급된 초과수입 등도 임금에 포함되므로, 평균임금 산정의 정확성도 함께 살펴보는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신청·심사 5단계',
        content:
          '<p><strong>A. 고용센터·고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 이직·임금 자료 보존 (즉시)</strong> — 폐업·권고사직 자료·이직확인서·임금명세서·급여 입금 내역 보존.</li>\n<li><strong>2단계 — 비자발 이직·단위기간 정리 (1주)</strong> — 폐업·권고사직 사정과 피보험단위기간(180일) 정리.</li>\n<li><strong>3단계 — 수급자격 신청 (이직일 다음날부터 12개월 내)</strong> — 워크넷 구직등록 + 수급자격 신청.</li>\n<li><strong>4단계 — 이직 사유·평균임금 소명 (고용센터 심사)</strong> — 폐업·권고사직 입증과 평균임금 산입 자료 제출.</li>\n<li><strong>5단계 — 구직급여일액 확인·이의 (필요 시)</strong> — 평균임금 누락 시 정정 요청·심사청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">폐업 권고사직 비자발 이직·평균임금 산정 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 폐업·권고사직 입증·비자발 이직·평균임금 갈래입니다.</strong></p>\n<ul>\n<li><strong>폐업·권고사직 자료 (폐업 공고·권유 정황)</strong></li>\n<li><strong>이직확인서 (이직 사유 코드 확인)</strong></li>\n<li><strong>근로계약서 (임금 구성·지급 형태)</strong></li>\n<li><strong>임금명세서·급여 입금 내역 (기본급·성과·초과수입)</strong></li>\n<li><strong>고용보험 가입이력 (피보험단위기간 180일)</strong></li>\n<li><strong>워크넷 구직등록 확인</strong></li>\n<li><strong>평균임금 산정 기초 자료 (3개월 임금 총액)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 두 갈래입니다. 먼저 폐업·권고사직이 비자발적 이직임을 자료로 뒷받침하고(이직확인서 사유 확인), 다음으로 기본급 외 성과·초과수입 등 근로 대가로 지급된 부분이 평균임금 산정에 포함됐는지 임금명세서·입금 내역으로 확인해 누락 시 정정을 요청하는 것이 출발점입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>비자발적 이직</strong> — 폐업·권고사직으로 비자발적으로 그만뒀는지(단순 자진퇴사와 구별).</li>\n<li><strong>이직확인서 사유</strong> — 이직 사유가 폐업·권고사직으로 정확히 기재됐는지.</li>\n<li><strong>피보험단위기간</strong> — 180일 이상 충족 여부.</li>\n<li><strong>평균임금 산입</strong> — 근로 대가로 지급된 성과·초과수입이 평균임금에 포함됐는지.</li>\n<li><strong>신청 기한</strong> — 이직일 다음날부터 12개월 내 신청.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 고용센터 1350</strong></li>\n<li><strong>근로복지공단</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 구직급여 기준 평균임금에 근로 대가로 지급된 임금의 포함',
        summary:
          '대법원 2016두42289(대법원, 2019.07.25 선고) 영역에서 법원은 고용보험법이 구직급여일액을 원칙적으로 근로기준법 제2조 제1항 제6호가 정한 평균임금으로 산정하도록 정하고 있고 평균임금은 산정 사유 발생일 이전 3개월 동안 지급된 임금 총액을 그 기간의 총일수로 나눈 금액인데, 일반택시운송사업자가 고정급 외에 하루 운송수입금에서 사납금을 공제한 나머지 초과운송수입금을 택시운전근로자 개인의 수입으로 귀속시켜 온 경우 그 초과운송수입금도 근로의 대가로 지급된 임금에 해당하므로 구직급여의 기준이 되는 평균임금을 산정할 때 역시 이에 포함되어야 한다고 판시했습니다. 폐업·권고사직 후 구직급여 산정을 정리할 때 근로 대가로 지급된 임금의 평균임금 포함을 검토해볼 수 있습니다.',
        takeaway: '폐업·권고사직 + 비자발성 + 평균임금 산정 결합 시 비자발 이직 수급·평균임금 산입 검토 영역 — 고용센터 상담·심사청구 트랙.',
      },
    ],
    faq: [
      {
        question: '권고사직이면 실업급여가 안 되나요?',
        answer:
          '<strong>폐업·권고사직으로 비자발적으로 그만뒀다면 수급자격이 검토되는 영역입니다.</strong> 폐업·권유 정황을 정리.',
      },
      {
        question: '이직확인서에 사유가 잘못 적혔어요.',
        answer:
          '<strong>이직 사유가 폐업·권고사직과 다르면 정정·소명을 요청할 수 있는 영역입니다.</strong> 폐업 자료를 함께 제출.',
      },
      {
        question: '피보험단위기간은 얼마나 필요한가요?',
        answer:
          '<strong>이직일 이전 18개월간 180일 이상이 원칙인 영역입니다.</strong> 고용보험 가입이력을 먼저 확인.',
      },
      {
        question: '성과급·초과수입도 실업급여 산정에 들어가나요?',
        answer:
          '<strong>근로 대가로 지급된 임금이면 평균임금에 포함될 수 있는 영역입니다.</strong> 임금명세서·입금 내역을 확보.',
      },
      {
        question: '신청 기한이 있나요?',
        answer:
          '<strong>이직일 다음날부터 12개월 이내 수급자격을 신청해야 하는 영역입니다.</strong> 기한 내 워크넷 구직등록·신청 검토.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '사업장 폐업 권고사직 구직급여 절차', href: '/guide/unemployment/unemployment-employer-closure-recommended-resignation-just-cause-track' },
      { label: '계약 갱신거절 비자발 이직 구직급여 수급 절차', href: '/guide/unemployment/unemployment-contract-non-renewal-involuntary-separation-track' },
      { label: '실업급여 수급자격 불인정 이의신청', href: '/guide/unemployment/unemployment-benefit-rejection-appeal-procedure' },
      { label: '실업급여 수급 기간과 일일 지급액 기준', href: '/guide/unemployment/benefit-duration-and-daily-amount' },
      { label: '실업급여 종합 가이드', href: '/guide/unemployment' },
    ],
  },

  // ─── 8. retirement-continuous-service-rehire-track ───
  {
    domain: 'retirement',
    slug: 'retirement-continuous-service-rehire-track',
    keyword: '단절 후 재입사 계속근로 통산',
    questionKeyword: '수습·시용기간을 거쳐 본채용된 뒤 공백 없이 계속 일했는데, 회사가 퇴직금을 계산하면서 처음 수습기간은 근속에서 빼버렸어요. 그 기간도 합쳐서 계속근로기간으로 봐야 하는 것 아닌가요? 다툴 수 있나요?',
    ctaKeyword: '시용기간·계속근로기간 통산 퇴직금 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '계속근로기간 통산 퇴직금 — 5단계 기산점·재산정 점검 | 로앤가이드',
      description:
        '시용·수습기간을 근속에서 빼고 퇴직금을 적게 산정했다면 근로자퇴직급여보장법상 계속근로기간 통산·기산점과 공백 없는 근무 시 통산, 퇴직금 시효 3년 청구까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"처음 수습·시용사원으로 채용돼 일정 기간 근무한 뒤 별다른 공백 없이 곧바로 본채용돼 계속 일해 온 근로자입니다. 그동안 한 회사에서 끊김 없이 일했다고 생각했는데, 막상 퇴직하며 퇴직금을 받아보니 회사가 처음 수습·시용으로 근무한 기간을 \'정식 근로가 아니다\'라며 계속근로기간에서 통째로 빼버렸어요. 그 기간에도 실제로 회사 업무를 수행하고 급여까지 받았는데, 단지 \'수습\'이라는 이름이 붙었다는 이유만으로 근속에서 제외돼 퇴직금이 줄어든 게 도무지 납득이 가지 않습니다. 공백 없이 이어진 수습기간도 계속근로기간으로 통산해 퇴직금을 다시 다툴 여지가 있는지 막막한 상태입니다." 근로자퇴직급여 보장법 제8조 제1항은 사용자가 계속근로기간 1년에 대해 30일분 이상의 평균임금을 퇴직금으로 지급하도록 정하고, 계속근로기간은 원칙적으로 근로자의 재직기간을 말하는 영역입니다. 판례는 시용이란 본 근로계약 체결 이전에 업무적격성을 관찰·판단·평가하기 위해 일정기간 시험적으로 고용하는 것을 말하는데 근속기간 중 직종 등 근로제공 형태가 변경된 경우와 마찬가지로 시용기간 만료 후 본 근로계약을 체결하여 공백 기간 없이 계속 근무한 경우에도 시용기간과 본 근로계약기간을 통산한 기간을 퇴직금 산정의 기초가 되는 계속근로기간으로 보아야 하고, 수습사원으로 현실적으로 근로를 제공한 시용기간도 퇴직금 산정 기초인 계속근로기간에 포함된다고 본 사례 흐름이 있는 영역입니다. 시용·수습 + 공백 없는 근무 + 근속 누락 결합은 \'계속근로기간 통산·재산정\' 다툼이 가능한 트랙입니다. 피해자라면 ① 시용·수습 실질 ② 공백 유무 ③ 계속근로 통산 ④ 퇴직금 재산정 ⑤ 청구 5중 트랙이 가능한 영역. 대응은 ① 실질 ② 공백 ③ 통산 ④ 재산정 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 계속근로기간 통산 퇴직금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 시용·수습 실질·공백 유무·계속근로 통산·퇴직금 재산정·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 시용·수습 실질</strong> — 수습·시용기간에 현실적으로 근로를 제공하고 급여를 받았는지.</li>\n<li><strong>② 공백 유무</strong> — 시용기간 만료 후 본채용까지 공백 없이 계속 근무했는지.</li>\n<li><strong>③ 계속근로 통산</strong> — 시용기간과 본 근로계약기간을 통산해 계속근로기간으로 보는지(퇴직급여법 제8조).</li>\n<li><strong>④ 퇴직금 재산정</strong> — 통산 기간 반영 시 평균임금 기준 퇴직금 재산정 → 차액 도출.</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정·민사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 시용기간 만료 후 공백 없이 계속 근무한 경우 시용기간과 본 근로계약기간을 통산한 기간을 퇴직금 산정 기초인 계속근로기간으로 보는 영역. 시용·수습이 현실적 근로였는지와 공백 없는 연속성이 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong>A. 고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 재직·급여 자료 보존 (즉시)</strong> — 수습/시용 채용 자료·근로계약서·급여명세서·재직증명 보존.</li>\n<li><strong>2단계 — 시용 실질·공백 정리 (1~2주)</strong> — 수습기간 근로 제공·급여 수령과 본채용까지 공백 유무 정리.</li>\n<li><strong>3단계 — 계속근로 통산·재산정 (2~3주)</strong> — 시용+본채용 통산 → 평균임금 기준 퇴직금 재산정·차액 도출.</li>\n<li><strong>4단계 — 고용노동부 진정·내용증명 (시효 3년 내)</strong> — 1350 진정 또는 회사 청구.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">시용기간·계속근로기간 통산 퇴직금 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 시용 실질·공백·통산 갈래입니다.</strong></p>\n<ul>\n<li><strong>수습·시용 채용 자료 (채용시험·합격·근무 시작)</strong></li>\n<li><strong>근로계약서·임시직/본채용 계약 (계약 형태·시점)</strong></li>\n<li><strong>급여명세서·급여 지급 내역 (수습기간 근로 대가)</strong></li>\n<li><strong>출근기록·근무 기록 (현실적 근로 제공)</strong></li>\n<li><strong>인사위원회 심의·본채용 자료 (공백 유무)</strong></li>\n<li><strong>재직증명·인사기록 (전체 재직기간)</strong></li>\n<li><strong>평균임금·퇴직금 재산정표</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'수습·시용이 현실적 근로였는지\'와 \'공백 없는 연속성\'입니다. 수습기간에 실제 업무를 수행하고 급여를 받았다면 단순 실무전형이 아니라 시용으로 볼 여지가 있고, 본채용까지 공백 없이 이어졌다면 통산되는 영역. 채용·계약·급여 자료로 전체 재직기간을 통산해 재산정 차액을 도출해두면 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>시용·수습 실질</strong> — 단순 실무전형이 아니라 현실적 근로를 제공한 시용인지.</li>\n<li><strong>공백 유무</strong> — 시용기간 만료 후 본채용까지 공백이 없었는지.</li>\n<li><strong>계속근로 통산</strong> — 시용기간과 본 근로계약기간을 통산해야 하는지.</li>\n<li><strong>재산정 차액</strong> — 통산 시 퇴직금 차액이 발생하는지.</li>\n<li><strong>시효 관리</strong> — 퇴직금·차액 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (퇴직금 체불 신고·진정)</strong></li>\n<li><strong>근로복지공단 (퇴직연금)</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 시용기간의 계속근로기간 통산과 퇴직금 산정 기초',
        summary:
          '대법원 2021다218083(대법원, 2022.02.17 선고) 영역에서 법원은 시용이란 본 근로계약 체결 이전에 업무적격성을 관찰·판단·평가하기 위해 일정기간 시험적으로 고용하는 것을 말하는데 근속기간 중 직종 등 근로제공 형태가 변경된 경우와 마찬가지로 시용기간 만료 후 본 근로계약을 체결하여 공백 기간 없이 계속 근무한 경우에도 시용기간과 본 근로계약기간을 통산한 기간을 퇴직금 산정의 기초가 되는 계속근로기간으로 보아야 하고, 수습사원으로 사무보조 등 업무를 수행하고 급여를 지급받은 경우 그 기간은 단순한 실무전형이 아니라 현실적으로 근로를 제공한 시용기간에 해당하므로 퇴직금 산정의 기초가 되는 계속근로기간에 포함된다고 판시했습니다. 수습·시용기간이 근속에서 빠졌다면 계속근로기간 통산과 재산정을 검토해볼 수 있습니다.',
        takeaway: '시용·수습 + 공백 없는 근무 + 근속 누락 결합 시 시용 실질·계속근로기간 통산·퇴직금 재산정 검토 영역 — 진정·민사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '수습기간도 퇴직금 근속에 들어가나요?',
        answer:
          '<strong>현실적으로 근로를 제공한 시용기간이면 계속근로기간에 포함되는 영역입니다.</strong> 수습기간 근로·급여 자료를 정리.',
      },
      {
        question: '회사가 수습은 정식 근로가 아니라는데요?',
        answer:
          '<strong>업무를 수행하고 급여를 받았다면 단순 실무전형이 아닌 시용으로 볼 여지가 있는 영역입니다.</strong> 업무·출근 기록을 확보.',
      },
      {
        question: '공백 없이 본채용된 게 중요한가요?',
        answer:
          '<strong>공백 없이 계속 근무했다면 시용·본채용기간을 통산하는 영역입니다.</strong> 본채용 시점·공백 유무를 확인.',
      },
      {
        question: '근속을 합치면 퇴직금이 얼마나 늘어나나요?',
        answer:
          '<strong>통산 기간을 반영해 평균임금으로 재산정하면 차액이 산출되는 영역입니다.</strong> 재산정표로 확인.',
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
      { label: '퇴직급여 종합 가이드', href: '/guide/retirement' },
      { label: '퇴직연금 DC DB형 차이 선택', href: '/guide/retirement/retirement-dc-db-type-difference' },
      { label: '퇴직금 미지급 신고 절차 4단계 타임라인', href: '/guide/retirement/unpaid-retirement-report-procedure' },
    ],
  },

  // ─── 9. retirement-dc-db-pension-arrears-track ───
  {
    domain: 'retirement',
    slug: 'retirement-dc-db-pension-arrears-track',
    keyword: '퇴직연금 DC DB 미납',
    questionKeyword: '확정기여형(DC) 퇴직연금에 가입돼 있었는데, 회사가 매년 넣어야 할 부담금을 제대로 안 넣은 것 같아요. 퇴직하고 보니 적립액이 너무 적은데, 부족한 부담금과 지연이자를 회사에 직접 청구할 수 있나요?',
    ctaKeyword: '확정기여형 퇴직연금 부담금 미납 차액·지연이자 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '퇴직연금 DC DB 미납 — 5단계 부담금 차액·지연이자 점검 | 로앤가이드',
      description:
        '확정기여형(DC) 퇴직연금 부담금을 회사가 제대로 안 냈다면 근로자퇴직급여보장법상 부담금 미납 차액·지연이자 직접 청구와 퇴직금 분할 약정 무효, 시효 3년 청구까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"확정기여형(DC) 퇴직연금에 가입돼 있던 근로자입니다. 회사가 해마다 제 계정에 일정 부담금을 넣어줘야 하는 구조라고 들었는데, 막상 퇴직하고 적립된 금액을 확인해 보니 생각보다 훨씬 적어 회사가 부담금을 제대로 납입하지 않은 것 같습니다. 회사는 \'월급에 퇴직금을 미리 나눠 줬다\'거나 \'연금에 넣은 만큼만 책임진다\'는 식으로 말하는데, 정작 연간 임금총액 기준으로 따져보면 넣었어야 할 부담금에 미치지 못해 도무지 납득이 가지 않아요. 부족하게 납입된 부담금과 그에 대한 지연이자를 회사에 직접 청구할 수 있는지, 월급에 끼워 줬다는 퇴직금 분할 약정이 유효한지 막막한 상태입니다." 근로자퇴직급여 보장법은 확정기여형(DC) 퇴직연금제도에서 사용자가 가입자별로 연간 임금총액의 12분의 1 이상에 해당하는 부담금을 납입하도록 정하고, 부담금 미납 시 지연이자를 정하는 영역입니다. 판례는 확정기여형 퇴직연금제도가 설정된 사업에서 사용자가 퇴직한 가입자에 대해 가입기간 동안 매년 납입한 부담금이 연간 임금총액의 12분의 1에 미치지 못하는 경우 가입자인 근로자는 특별한 사정이 없는 한 퇴직일로부터 14일이 지난 후 사용자에게 정당한 부담금액과 이미 납입된 부담금액의 차액 및 그에 대한 퇴직급여법상 지연이자를 청구할 수 있을 뿐 퇴직금제도에 따라 평균임금 재산정 방식으로 추가 퇴직금을 청구할 수는 없고, 임금을 정한 것에 불과한데 퇴직금 지급을 면탈하려고 형식만 취한 퇴직금 분할 약정은 실질적 분할 약정으로 보기 어렵다고 본 사례 흐름이 있는 영역입니다. DC 부담금 미납 + 분할 약정 + 적립 부족 결합은 \'부담금 차액·지연이자 청구\' 다툼이 가능한 트랙입니다. 피해자라면 ① 제도 형태 ② 정당 부담금 ③ 미납 차액 ④ 지연이자·분할 약정 ⑤ 청구 5중 트랙이 가능한 영역. 대응은 ① 제도 ② 부담금 ③ 차액 ④ 지연이자 ⑤ 청구 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 퇴직연금 DC 부담금 미납 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 제도 형태·정당 부담금·미납 차액·지연이자/분할 약정·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 제도 형태</strong> — 확정기여형(DC)인지 확정급여형(DB)인지 등 퇴직연금 제도 형태 확인.</li>\n<li><strong>② 정당 부담금</strong> — 연간 임금총액의 12분의 1 이상의 정당한 부담금이 산정됐는지(퇴직급여법).</li>\n<li><strong>③ 미납 차액</strong> — 정당 부담금액과 실제 납입액의 차액이 발생했는지.</li>\n<li><strong>④ 지연이자·분할 약정</strong> — 차액에 퇴직급여법상 지연이자가 붙는지, 퇴직금 분할 약정이 유효한지.</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 퇴직 14일 후 차액·지연이자 청구 또는 고용노동부 1350 진정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 DC 부담금이 연간 임금총액의 12분의 1에 미치지 못하면 근로자는 퇴직 14일 후 차액 및 지연이자를 직접 청구할 수 있을 뿐 평균임금 재산정 방식의 추가 퇴직금 청구는 할 수 없고, 임금에 불과한데 면탈 목적으로 형식만 취한 퇴직금 분할 약정은 유효한 분할 약정으로 보기 어려운 영역. 정당 부담금 대비 미납 차액 산정이 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong>A. 고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 연금·급여 자료 보존 (즉시)</strong> — 퇴직연금 가입·적립 내역·임금명세서·근로계약서 보존.</li>\n<li><strong>2단계 — 정당 부담금·미납 차액 정리 (1~2주)</strong> — 연간 임금총액 12분의 1 기준 정당 부담금과 실제 납입액 차액 정리.</li>\n<li><strong>3단계 — 지연이자·분할 약정 검토 (2~3주)</strong> — 차액 지연이자 산정과 퇴직금 분할 약정 유효 여부 검토.</li>\n<li><strong>4단계 — 차액·지연이자 청구 (퇴직 14일 후)</strong> — 사용자에게 차액·지연이자 직접 청구.</li>\n<li><strong>5단계 — 고용노동부 진정·민사 청구 (시효 3년 내)</strong> — 1350 진정 또는 민사 청구·합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">확정기여형 퇴직연금 부담금 미납 차액·지연이자 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 제도 형태·정당 부담금·미납 차액 갈래입니다.</strong></p>\n<ul>\n<li><strong>퇴직연금 가입 확인 자료 (DC/DB 제도 형태)</strong></li>\n<li><strong>퇴직연금 적립·부담금 납입 내역 (실제 납입액)</strong></li>\n<li><strong>임금명세서·연간 임금총액 자료 (정당 부담금 산정)</strong></li>\n<li><strong>근로계약서 (임금·퇴직금 조항)</strong></li>\n<li><strong>퇴직금 분할 약정 자료 (월급 포함 여부)</strong></li>\n<li><strong>부담금 차액·지연이자 산정표</strong></li>\n<li><strong>진정서·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'연간 임금총액 12분의 1\' 기준으로 정당 부담금을 산정해 실제 납입액과의 차액을 도출하는 것입니다. DC는 차액과 지연이자를 직접 청구하는 구조이지 평균임금 재산정으로 추가 퇴직금을 청구하는 것이 아니므로, 임금명세서·납입 내역으로 차액·지연이자 산정표를 만들어두는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>정당 부담금</strong> — 연간 임금총액 12분의 1 이상으로 산정됐는지.</li>\n<li><strong>미납 차액</strong> — 실제 납입액이 정당 부담금에 미치지 못하는지.</li>\n<li><strong>청구 방식</strong> — 차액·지연이자 직접 청구인지, 평균임금 재산정 추가 퇴직금이 아닌지.</li>\n<li><strong>분할 약정 효력</strong> — 임금에 불과한 형식적 퇴직금 분할 약정이 무효인지.</li>\n<li><strong>시효 관리</strong> — 부담금 차액·지연이자 청구 시효 3년 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350 (퇴직연금·퇴직금 체불 신고·진정)</strong></li>\n<li><strong>근로복지공단 (퇴직연금)</strong></li>\n<li><strong>관할 지방고용노동청·노동지청</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 확정기여형 퇴직연금 부담금 미납 시 차액·지연이자 청구',
        summary:
          '대법원 2018다244877(대법원, 2022.03.17 선고) 영역에서 법원은 확정기여형 퇴직연금제도가 설정된 사업에서 사용자가 퇴직한 가입자에 대해 가입기간 동안 매년 납입한 부담금이 연간 임금총액의 12분의 1에 미치지 못하는 경우 가입자인 근로자는 특별한 사정이 없는 한 퇴직일로부터 14일이 지난 후에는 사용자에게 직접 정당한 부담금액과 이미 납입된 부담금액의 차액 및 그에 대한 퇴직급여법에서 정한 지연이자를 지급할 것을 청구할 수 있을 뿐 퇴직금제도에 따라 평균임금의 재산정을 통해 계산하는 방식으로 추가 퇴직금을 청구할 수는 없고, 임금을 정한 것에 불과한데도 퇴직금 지급을 면탈하기 위해 형식만 취한 퇴직금 분할 약정은 실질적인 퇴직금 분할 약정으로 보기 어렵다고 판시했습니다. DC 부담금 미납으로 적립액이 부족하다면 차액·지연이자 청구를 검토해볼 수 있습니다.',
        takeaway: 'DC 부담금 미납 + 분할 약정 + 적립 부족 결합 시 정당 부담금·미납 차액·지연이자 청구 검토 영역 — 진정·민사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: 'DC 부담금을 회사가 덜 넣었어요. 어떻게 받나요?',
        answer:
          '<strong>정당 부담금과 실제 납입액의 차액 및 지연이자를 직접 청구할 수 있는 영역입니다.</strong> 납입 내역과 임금총액을 정리.',
      },
      {
        question: '정당 부담금은 어떻게 계산하나요?',
        answer:
          '<strong>연간 임금총액의 12분의 1 이상이 기준이 되는 영역입니다.</strong> 임금명세서로 임금총액을 확인.',
      },
      {
        question: '평균임금으로 추가 퇴직금을 청구하면 안 되나요?',
        answer:
          '<strong>DC는 차액·지연이자 청구이지 평균임금 재산정 추가 퇴직금 청구는 아닌 영역입니다.</strong> 청구 방식을 구분.',
      },
      {
        question: '월급에 퇴직금을 끼워 줬다는데 유효한가요?',
        answer:
          '<strong>임금에 불과한 형식적 분할 약정은 유효한 분할 약정으로 보기 어려운 영역입니다.</strong> 약정 내용을 확인.',
      },
      {
        question: '청구 시효는요?',
        answer:
          '<strong>부담금 차액·지연이자 청구 시효는 3년인 영역입니다.</strong> 청구권 발생일로부터 3년 내 청구.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직급여 종합 가이드', href: '/guide/retirement' },
      { label: '퇴직금 중간정산 재정산 청구', href: '/guide/retirement/retirement-interim-settle-recalculation-track' },
      { label: '퇴직금 노동청 신고 민사청구 차이', href: '/guide/retirement/retirement-pay-labor-report-vs-civil-claim' },
    ],
  },

  // ─── 10. industrial-accident-musculoskeletal-disorder-track ───
  {
    domain: 'industrial-accident',
    slug: 'industrial-accident-musculoskeletal-disorder-track',
    keyword: '근골격계 질환 산재',
    questionKeyword: '오래 반복 작업과 무리한 자세로 일하다 허리·어깨 근골격계 질환이 생겼어요. 여러 회사를 옮겨 다니며 같은 일을 했는데, 근로복지공단은 업무 탓이 아니라며 요양급여를 안 줍니다. 산재로 다툴 수 있나요?',
    ctaKeyword: '근골격계 질환 업무 관련성·요양급여 산재 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '근골격계 질환 산재 — 5단계 업무 관련성·요양급여 점검 | 로앤가이드',
      description:
        '반복 작업·무리한 자세로 근골격계 질환이 생겼는데 요양급여가 부지급됐다면 산재보험법상 여러 사업장 통산 업무 관련성과 인정기준의 예시적 성격, 심사청구까지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오랜 기간 무거운 물건을 들고 같은 동작을 반복하거나 무리한 자세로 일해 온 근로자입니다. 결국 허리·어깨·목 등에 근골격계 질환이 생겨 치료를 받게 됐는데, 한 회사에만 있었던 게 아니라 여러 사업장을 옮겨 다니면서도 비슷한 작업을 계속해 왔어요. 누적된 작업 부담이 분명히 영향을 미쳤다고 느끼는데, 근로복지공단은 \'업무와 질병 사이 상당인과관계를 인정하기 어렵다\'며 요양급여를 지급하지 않았습니다. 옮겨 다닌 회사들에서 한 작업을 모두 합쳐 보면 부담이 만만치 않았는데도, 한 사업장만 떼어 보고 업무 관련성을 부정당한 게 맞는지 도무지 납득이 가지 않아요. 근골격계 질환을 산재로 인정받아 요양급여를 받을 수 있는지 막막한 상태입니다." 산업재해보상보험법 제5조 제1호는 업무상 재해를 업무상 사유에 따른 부상·질병·장해·사망으로 정하고, 제37조 제1항 제2호·제5항은 업무와 상당인과관계가 있는 업무상 질병을 업무상 재해로 정하며, 같은 법 시행령 제34조 제3항 [별표 3]은 업무상 질병의 구체적 인정 기준을 정하는 영역입니다. 판례는 산재보험법 적용 대상 근로자가 여러 개의 사업장을 옮겨 다니며 근무하다가 질병에 걸린 경우 해당 질병이 업무상 재해에 해당하는지를 판단할 때 복수의 사용자 아래에서 경험한 모든 업무를 포함해 판단의 자료로 삼아야 하고, 시행령 [별표 3]의 인정 기준은 업무상 질병에 해당하는 경우를 예시적으로 규정한 것이어서 그 기준 외라도 업무 관련성이 있으면 업무상 질병에서 배제되지 않으며 고용노동부고시 등도 대외적 구속력 없는 행정규칙이라고 본 사례 흐름이 있는 영역입니다. 근골격계 질환 + 여러 사업장 + 요양급여 부지급 결합은 \'업무 관련성·요양급여\' 검토가 가능한 트랙입니다. 피해자라면 ① 업무 부담 ② 여러 사업장 통산 ③ 상당인과관계 ④ 인정기준 예시성 ⑤ 심사청구 5중 트랙이 가능한 영역. 대응은 ① 부담 ② 통산 ③ 인과관계 ④ 인정기준 ⑤ 심사 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 근골격계 질환 산재 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 업무 부담·여러 사업장 통산·상당인과관계·인정기준 예시성·심사청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 업무 부담</strong> — 반복 작업·중량물 취급·무리한 자세 등 누적 작업 부담이 있었는지.</li>\n<li><strong>② 여러 사업장 통산</strong> — 옮겨 다닌 복수 사업장에서 경험한 모든 업무를 합쳐 판단하는지.</li>\n<li><strong>③ 상당인과관계</strong> — 업무와 근골격계 질병 사이 상당인과관계가 있는지(산재보험법 제37조).</li>\n<li><strong>④ 인정기준 예시성</strong> — 시행령 [별표 3] 인정 기준은 예시이고 기준 외라도 업무 관련성이 인정될 수 있는지.</li>\n<li><strong>⑤ 심사청구 (처분 안 날부터 90일 내)</strong> — 부지급 시 근로복지공단 심사청구·재심사청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 여러 사업장을 옮겨 다니며 일한 경우 복수 사용자 아래 경험한 모든 업무를 합쳐 업무 관련성을 판단하고, 시행령 [별표 3] 인정 기준은 예시적이어서 그 기준 밖이라도 업무 관련성이 있으면 업무상 질병에서 배제되지 않는 영역. 누적 작업 부담의 통산과 상당인과관계가 다툼의 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 요양급여·심사 5단계',
        content:
          '<p><strong>A. 근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·작업 자료 보존 (즉시)</strong> — 진단서·진료기록·작업 내용·근무 이력 자료 보존.</li>\n<li><strong>2단계 — 업무 부담·통산 정리 (1~2주)</strong> — 반복 작업·중량물·자세 부담과 여러 사업장 작업 이력 통산 정리.</li>\n<li><strong>3단계 — 요양급여 신청 (근로복지공단)</strong> — 요양급여 신청서·업무관련성 소견서 제출.</li>\n<li><strong>4단계 — 심사청구 (부지급 시, 처분 안 날부터 90일 내)</strong> — 근로복지공단 심사청구·재심사청구.</li>\n<li><strong>5단계 — 행정소송 (제소기간 내)</strong> — 부지급 처분 취소소송 검토(여러 사업장 통산·인정기준 예시성 주장).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 산재 신청 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">근골격계 질환 업무 관련성·요양급여 산재 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=industrial-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 업무 부담·통산·인과관계 갈래입니다.</strong></p>\n<ul>\n<li><strong>진단서·진료기록 (근골격계 질병명·발병 경과)</strong></li>\n<li><strong>작업 내용·작업 자세 자료 (반복 동작·중량물 취급)</strong></li>\n<li><strong>근무 이력·재직 증명 (여러 사업장 작업 통산)</strong></li>\n<li><strong>작업환경·작업량 자료 (누적 부담)</strong></li>\n<li><strong>동료 진술·작업 동영상/사진 (업무 강도)</strong></li>\n<li><strong>요양급여 부지급 처분서 (처분 사유·시점)</strong></li>\n<li><strong>업무관련성 의학적 소견서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 핵심은 \'여러 사업장의 작업 부담을 합쳐 업무 관련성을 보는 것\'입니다. 옮겨 다닌 사업장에서 한 반복 작업·중량물 취급·무리한 자세를 근무 이력으로 통산해 누적 부담을 정리하고, 시행령 인정 기준이 예시적이라는 점을 활용해 기준 밖이라도 업무관련성 소견서로 상당인과관계를 뒷받침해두는 것이 출발점입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>업무 부담</strong> — 반복 작업·중량물·무리한 자세 등 누적 부담이 충분한지.</li>\n<li><strong>여러 사업장 통산</strong> — 복수 사업장 작업을 모두 합쳐 판단했는지.</li>\n<li><strong>상당인과관계</strong> — 업무와 근골격계 질병 사이 상당인과관계가 있는지.</li>\n<li><strong>인정기준 예시성</strong> — 인정 기준 밖이라도 업무 관련성이 인정될 수 있는지.</li>\n<li><strong>심사·제소 기한</strong> — 심사청구·행정소송 기한 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>근로복지공단 1588-0075 (산재 요양·급여 상담)</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>산재 전문 공인노무사</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 여러 사업장 업무의 통산 판단과 업무상 질병 인정 기준의 예시성',
        summary:
          '대법원 2022두47391(대법원, 2023.04.13 선고) 영역에서 법원은 산업재해보상보험법 적용 대상인 근로자가 여러 개의 사업장을 옮겨 다니며 근무하다가 질병에 걸린 경우 해당 질병이 업무상 재해에 해당하는지를 판단할 때에는 근로자가 복수의 사용자 아래에서 경험한 모든 업무를 포함해 판단의 자료로 삼아야 하고, 산재보험법 시행령 제34조 제3항 [별표 3]의 업무상 질병 인정 기준은 업무상 질병에 해당하는 경우를 예시적으로 규정한 것이어서 그 기준 외에는 업무와 관련하여 발생한 질병을 모두 업무상 질병에서 배제하는 규정으로 볼 수 없으며 고용노동부고시도 대외적 구속력이 있는 규범이 아니라 행정규칙에 불과하다고 판시했습니다. 여러 사업장에서 누적된 근골격계 질환의 요양급여 부지급을 다툴 때 이 기준을 검토해볼 수 있습니다.',
        takeaway: '근골격계 질환 + 여러 사업장 + 요양급여 부지급 결합 시 여러 사업장 통산 업무 관련성·인정기준 예시성·상당인과관계 검토 영역 — 근로복지공단 상담·심사청구 트랙.',
      },
    ],
    faq: [
      {
        question: '여러 회사를 옮겨 다녀도 산재가 되나요?',
        answer:
          '<strong>복수 사업장에서 경험한 모든 업무를 합쳐 업무 관련성을 판단하는 영역입니다.</strong> 근무 이력과 작업 내용을 통산 정리.',
      },
      {
        question: '인정 기준에 안 맞으면 산재가 안 되나요?',
        answer:
          '<strong>인정 기준은 예시적이어서 기준 밖이라도 업무 관련성이 인정될 수 있는 영역입니다.</strong> 업무관련성 소견서를 확보.',
      },
      {
        question: '반복 작업·무리한 자세도 인정되나요?',
        answer:
          '<strong>누적 작업 부담이 질병과 상당인과관계가 있으면 인정이 검토되는 영역입니다.</strong> 작업 자세·작업량 자료를 정리.',
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
    cta: { text: '산재 신청 절차, AI로 정리하기', link: '/chat?domain=industrial-accident' },
    internalLinks: [
      { label: '과로 뇌심혈관 산재', href: '/guide/industrial-accident/industrial-accident-overwork-cardiovascular-track' },
      { label: '근골격계 반복작업 업무상 질병 요양급여 절차', href: '/guide/industrial-accident/industrial-accident-musculoskeletal-repetitive-work-disease-track' },
      { label: '과로 뇌출혈 산재 인정', href: '/guide/industrial-accident/industrial-accident-overwork-cerebral-track' },
      { label: '과로 뇌출혈 발병 업무상 재해 요양급여 신청 절차', href: '/guide/industrial-accident/industrial-accident-overwork-cerebro-cardiovascular-recognition-track' },
    ],
  },
];
