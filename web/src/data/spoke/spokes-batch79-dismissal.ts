import { SpokePage } from '../spoke-pages';

// batch79 dismissal — 4개 (2026-05-27)
//
// 고유 존재 이유:
// 1. 사직서 강요 후 수리 사실상 해고 — 단순 권고사직·사직서 철회 류와 분기. 여기는 '사직 의사가 없는데 사용자가 사직서를 강요해 받아낸 뒤 곧바로 수리해 근로관계를 끊은' 트랙. 사직 의사표시의 진정성·강박 + 묵시적 의사표시 해고 여부 다툼.
// 2. 시용기간 업무상 부상 요양 중 본채용 거부 — 단순 수습 본채용 거부 류와 분기. 여기는 '시용기간 중 업무상 부상으로 요양·휴업하던 시기에 본채용 거부 통보를 받은' 트랙. 근로기준법 제23조 제2항 요양 휴업 중 해고 절대제한이 시용 근로관계에 미치는지 다툼.
// 3. 저성과 통상해고 평가 공정성 다툼 — 단순 PIP·저성과 방어 류와 분기. 여기는 '징계가 아니라 근무성적 불량을 이유로 한 통상해고인데 평가 자체가 공정·객관적이었는지' 트랙. 취업규칙 근무성적 불량 해고의 평가 공정성·사회통념상 고용유지 불가능성 다툼.
// 4. 대기발령 후 면직 서면통지 누락 — 단순 서면통지 누락·대기발령 류와 분기. 여기는 '대기발령을 거쳐 면직 통보를 받았는데 실질이 징계해고인데도 사유를 서면으로 받지 못한' 트랙. 대기발령+면직의 실질 = 징계해고 판단 + 근로기준법 제27조 서면통지 누락 무효 다툼.

export const spokesBatch79Dismissal: SpokePage[] = [
  // ─── 1. dismissal-resignation-pressure-letter-coerced-acceptance-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-resignation-pressure-letter-coerced-acceptance-track',
    keyword: '사직서 강요 후 수리 사실상 해고',
    questionKeyword: '나갈 생각이 전혀 없었는데 회사가 "사직서 안 쓰면 더 곤란해진다"며 사직서를 강요했고, 제출하자마자 곧바로 수리해 버렸어요. 이게 사실상 해고로 다툴 수 있나요?',
    ctaKeyword: '강요된 사직서 수리 사실상 해고 대응 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '강요된 사직서 수리 — 5단계 사실상 해고 여부 점검 | 로앤가이드',
      description:
        '사직 의사도 없는데 회사가 사직서를 강요해 곧바로 수리했다면 의사표시 진정성·사실상 해고 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3년 가까이 다닌 회사에서 상사가 따로 불러 "조용히 사직서 쓰는 게 서로 편하다, 안 쓰면 인사상 더 불리해진다"는 식으로 며칠을 압박했습니다. 정말 그만둘 생각이 없었는데 분위기에 떠밀려 사직서를 냈더니, 회사는 기다렸다는 듯이 그날 바로 수리하고 다음 날부터 나오지 말라고 했어요. 제 발로 나간 것처럼 처리됐는데, 이게 정말 자진 퇴사인지 사실상 해고인지 헷갈리고 억울한 상황입니다." 근로기준법 제23조 제1항은 사용자가 정당한 이유 없이 근로자를 해고하지 못한다고 규정하는 영역이고, 판례는 해고란 명칭·절차와 관계없이 근로자의 의사에 반하여 사용자의 일방적 의사로 이루어지는 근로계약관계의 종료를 의미하며 묵시적 의사표시에 의한 해고도 성립할 수 있다고 보면서, 사직서가 강박 등으로 진정한 사직 의사 없이 제출된 경우 그 의사표시 효력을 다툴 수 있다고 본 사례 흐름이 있습니다. 사직 의사 부재 + 사용자 압박 + 즉시 수리 결합은 \'사직 의사표시 진정성·사실상 해고\' 다툼이 가능한 트랙입니다. 피해자라면 ① 사직 의사 진정성 ② 강박·압박 정황 ③ 사실상 해고 여부 ④ 노동위 구제 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 의사 ② 압박 ③ 해고성 ④ 노동위 ⑤ 민사 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 강요된 사직서 수리 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사직 의사·압박 정황·해고성·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사직 의사 진정성</strong> — 진정으로 그만둘 의사로 사직서를 냈는지, 분위기에 떠밀린 비진의 의사였는지.</li>\n<li><strong>② 강박·압박 정황</strong> — "안 쓰면 불리하다" 등 사용자 측 종용·협박성 발언이 있었는지.</li>\n<li><strong>③ 사실상 해고 여부</strong> — 근로기준법 제23조: 근로자 의사에 반한 사용자의 일방적 근로관계 종료인지.</li>\n<li><strong>④ 노동위 구제신청 (해고일 3개월 이내)</strong> — 사직서 무효 + 사실상 해고 결합 다툼.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 해고란 명칭·형식과 무관하게 근로자 의사에 반한 사용자의 일방적 근로관계 종료를 뜻하고 묵시적 의사표시로도 성립할 수 있는 영역. 사직 의사가 없는 상태에서 압박으로 제출된 사직서가 곧바로 수리됐다면 사직 의사표시 진정성·사실상 해고 다툼이 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 압박 정황 자료 보존 (즉시)</strong> — 사직 종용 면담 녹취·메시지·동석자 진술 등 강박 정황 자료.</li>\n<li><strong>2단계 — 사직 경위 정리 (1주)</strong> — 사직서 작성·제출·수리 시점 시간선 + 자진 퇴사 의사 부재 정황 정리.</li>\n<li><strong>3단계 — 사실상 해고 자료 (2주)</strong> — 사직서 즉시 수리·다음 날 출근 거부 등 일방적 종료 정황 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 사직 의사표시 무효 + 사실상 해고 다툼.</li>\n<li><strong>5단계 — 민사 손해배상 검토</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">강요된 사직서 수리 사실상 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사직 의사·압박 정황·해고성 갈래입니다.</strong></p>\n<ul>\n<li><strong>제출한 사직서 사본 (작성·제출 경위 메모)</strong></li>\n<li><strong>사직 종용 면담 녹취·메시지·이메일 (압박 발언 정황)</strong></li>\n<li><strong>사직서 작성일·제출일·수리일·최종 근무일 시간선 정리 자료</strong></li>\n<li><strong>회사의 사직 수리·퇴직 처리 통보 자료</strong></li>\n<li><strong>동석자·동료 진술 (압박 분위기 입증)</strong></li>\n<li><strong>근로계약서·급여명세서·재직 기간 입증 자료</strong></li>\n<li><strong>사직 직전 인사·근무 상황 자료 (불리한 처우 정황)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사직서를 낼 수밖에 없었던 압박 정황을 시간선과 함께 구체적으로 정리하는 것이 핵심. "안 쓰면 불리하다"는 식의 종용 발언, 사직서를 낸 직후 곧바로 수리·출근 거부로 이어진 흐름은 자진 퇴사가 아니라 사용자의 일방적 근로관계 종료, 즉 사실상 해고로 다툴 수 있는 결정적 사정으로 활용될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사직 의사 진정성</strong> — 진정한 사직 의사인지, 압박에 떠밀린 비진의 의사인지가 핵심.</li>\n<li><strong>강박·종용 정도</strong> — 사용자 측 발언이 단순 권유를 넘어 의사를 제압할 정도였는지.</li>\n<li><strong>묵시적 해고 여부</strong> — 사직서 즉시 수리·출근 거부가 일방적 근로관계 종료로 평가되는지.</li>\n<li><strong>철회 의사표시</strong> — 수리 전 사직 의사 철회를 시도했는지 여부.</li>\n<li><strong>입증책임 분담</strong> — 해고 정당성은 사용자, 강박·비진의 정황은 근로자 측 정리 필요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>국민권익위원회 110</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 묵시적 의사표시에 의한 해고의 성립 판단',
        summary:
          '대법원 2022두57695(대법원, 2023.02.02 선고) 영역에서 법원은 해고란 실제 사업장에서 불리는 명칭이나 절차에 관계없이 근로자의 의사에 반하여 사용자의 일방적 의사에 의하여 이루어지는 모든 근로계약관계의 종료를 의미하고, 해고는 명시적 또는 묵시적 의사표시에 의해서도 이루어질 수 있으므로 묵시적 의사표시에 의한 해고가 있는지는 사용자의 노무 수령 거부 경위와 방법, 그에 대해 근로자가 보인 태도 등 제반 사정을 종합적으로 고려하여 사용자가 근로관계를 일방적으로 종료할 확정적 의사를 표시한 것으로 볼 수 있는지에 따라 판단해야 한다고 판시했습니다. 사직서 강요·즉시 수리 사안에서는 일방적 종료 의사 여부를 중점적으로 검토해볼 수 있습니다.',
        takeaway: '사직 의사 부재 + 사용자 압박 + 사직서 즉시 수리·출근 거부 결합 시 사직 의사표시 무효·사실상 해고 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '제가 직접 사직서를 냈어도 사실상 해고로 다툴 수 있나요?',
        answer:
          '<strong>사직 의사가 없는데 압박에 떠밀려 낸 비진의 사직서라면 의사표시 효력을 다툴 수 있는 영역입니다.</strong> 압박 정황 자료 보존이 우선.',
      },
      {
        question: '"안 쓰면 불리하다"는 말을 들었는데 이게 강박이 되나요?',
        answer:
          '<strong>단순 권유를 넘어 의사를 제압할 정도의 종용이었는지가 다툼의 핵심입니다.</strong> 면담 녹취·메시지로 발언 수위를 정리.',
      },
      {
        question: '사직서를 내자마자 바로 수리하고 출근하지 말라고 했어요',
        answer:
          '<strong>즉시 수리·출근 거부 흐름은 일방적 근로관계 종료, 즉 사실상 해고로 평가될 수 있는 사정입니다.</strong> 시간선 정리가 중요.',
      },
      {
        question: '사직서를 낸 걸 다시 무를 수 있나요?',
        answer:
          '<strong>수리 전이라면 사직 의사 철회를 시도해볼 수 있고, 철회 시도 기록도 다툼에 활용될 수 있는 영역입니다.</strong> 철회 의사 통지 내역을 보존.',
      },
      {
        question: '구제신청 기한이 있나요?',
        answer:
          '<strong>해고일로부터 3개월 이내가 노동위 구제신청 기한입니다.</strong> 기한 도과 전 신속 진행 검토.',
      },
    ],
    cta: { text: '사직서 쓰기 전 확인할 것, AI로 점검하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '강요된 사직서 무효', href: '/guide/dismissal/dismissal-forced-resignation-letter-invalidation' },
      { label: '사직서 철회 가능 기간', href: '/guide/dismissal/dismissal-resignation-letter-signed-revoke-window' },
      { label: '권고사직 철회', href: '/guide/dismissal/dismissal-resignation-after-recommendation-revoke' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 2. dismissal-probation-injury-recovery-denial-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-probation-injury-recovery-denial-track',
    keyword: '시용기간 업무상 부상 요양 중 본채용 거부',
    questionKeyword: '수습 중에 업무하다 다쳐서 치료를 받고 있는데, 회사가 그 사이에 "본채용은 안 한다"며 시용기간 종료를 통보했어요. 요양 중인데도 본채용을 거부할 수 있나요?',
    ctaKeyword: '시용기간 요양 중 본채용 거부 대응 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '시용기간 요양 중 본채용 거부 — 5단계 제23조 해고제한 점검 | 로앤가이드',
      description:
        '수습 중 업무상 부상으로 요양하는데 회사가 본채용을 거부했다면 요양기간 해고제한·시용 적용 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"입사 후 수습 3개월째에 업무를 하다 다쳐서 한동안 치료를 받으며 정상 출근이 어려운 상태였습니다. 그런데 회사는 제가 요양하는 사이에 "시용 평가 결과 본채용은 어렵다"며 수습기간 종료를 통보했어요. 다친 것도 업무하다 생긴 일인데 회복할 시간도 주지 않고 이 시기에 본채용을 거부하는 게 맞는 건지, 시용이라 보호가 안 되는 건 아닌지 막막한 상황입니다." 근로기준법 제23조 제2항은 사용자가 근로자가 업무상 부상·질병의 요양을 위하여 휴업한 기간과 그 후 30일 동안은 해고하지 못한다고 규정하는 영역이고, 판례는 이 해고 절대제한의 요양 휴업에는 출근을 전혀 못 하는 경우뿐 아니라 노동력을 일부 상실해 정상 근로가 어려운 부분 휴업도 포함되며, 시용 근로관계에 있는 근로자도 그 보호 기간 중에는 해고하거나 본계약 체결을 거부할 수 없다고 본 사례 흐름이 있습니다. 업무상 부상 + 요양·휴업 시기 + 본채용 거부 결합은 \'요양기간 해고제한·시용 적용\' 다툼이 가능한 트랙입니다. 피해자라면 ① 업무상 부상 여부 ② 요양 휴업 시기 ③ 해고제한 적용 ④ 노동위 구제 ⑤ 산재 5중 트랙이 가능한 영역. 대응은 ① 부상 ② 요양 ③ 제한 ④ 노동위 ⑤ 산재 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 시용기간 요양 중 본채용 거부 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 업무상 부상·요양 시기·해고제한·구제·산재 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 업무상 부상 여부</strong> — 다친 경위가 업무 수행 중 발생한 업무상 재해인지.</li>\n<li><strong>② 요양 휴업 시기</strong> — 본채용 거부 통보 시점이 요양 휴업 기간 또는 그 후 30일 이내였는지.</li>\n<li><strong>③ 해고제한 적용</strong> — 근로기준법 제23조 제2항: 요양 휴업기간 중 해고·본계약 거부 절대제한이 시용에도 적용되는지.</li>\n<li><strong>④ 노동위 구제신청 (해고일 3개월 이내)</strong> — 요양기간 해고제한 위반 + 본채용 거부 부당성 결합 다툼.</li>\n<li><strong>⑤ 산재 신청 병행</strong> — 근로복지공단 요양급여·휴업급여 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 요양 휴업 중 해고제한은 출근을 전혀 못 하는 경우뿐 아니라 노동력 일부 상실로 정상 근로가 어려운 부분 휴업도 포함하고, 시용 근로자도 이 보호 기간 중에는 본계약 체결 거부가 제한될 수 있는 영역. 업무상 부상으로 요양하던 시기에 본채용을 거부했다면 해고제한 위반 다툼이 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 부상·요양 자료 보존 (즉시)</strong> — 진단서·치료 내역·재해 발생 경위 자료 + 본채용 거부 통보서.</li>\n<li><strong>2단계 — 업무상 재해 정리 (1주)</strong> — 사고 발생 장소·업무 관련성·목격자 진술 등 업무상 부상 정황 정리.</li>\n<li><strong>3단계 — 시기 대조 자료 (2주)</strong> — 요양·휴업 기간과 본채용 거부 통보일을 대조해 해고제한 기간 여부 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 요양기간 해고제한 위반 + 본채용 거부 부당성 다툼.</li>\n<li><strong>5단계 — 산재 신청·민사 검토</strong> — 근로복지공단 요양·휴업급여 + 정신적 위자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">시용기간 요양 중 본채용 거부 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 업무상 부상·요양 시기·해고제한 갈래입니다.</strong></p>\n<ul>\n<li><strong>진단서·치료 내역·통원·입원 기록 (요양 입증)</strong></li>\n<li><strong>재해 발생 경위·장소·목격자 진술 (업무상 부상 입증)</strong></li>\n<li><strong>본채용 거부·시용기간 종료 통보서 (통보일 명시)</strong></li>\n<li><strong>요양·휴업 기간과 거부 통보일 대조 시간선 자료</strong></li>\n<li><strong>근로계약서·시용 약정·시용 평가 기준 자료</strong></li>\n<li><strong>급여명세서·근태 기록 (휴업·부분 휴업 입증)</strong></li>\n<li><strong>산재 요양급여 신청 관련 자료 (병행 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 다친 경위가 업무와 관련된 부상이라는 점과, 본채용 거부 통보 시점이 요양·휴업 기간 또는 그 후 30일 이내였다는 점을 시간선으로 명확히 대조하는 것이 핵심. 출근을 전혀 못 하는 경우뿐 아니라 노동력 일부 상실로 정상 근로가 어려운 부분 휴업도 해고제한에 포함될 수 있어, 부분 출근 중이었더라도 요양 필요성을 함께 정리해두면 다툼이 강화될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>업무상 재해 인정</strong> — 부상이 업무 수행 중 발생한 업무상 부상으로 인정되는지.</li>\n<li><strong>요양 휴업 범위</strong> — 전부 휴업뿐 아니라 노동력 일부 상실에 따른 부분 휴업도 해고제한에 포함되는지.</li>\n<li><strong>시용 적용 여부</strong> — 근로기준법 제23조 제2항 해고제한이 시용 근로관계·본계약 거부에도 미치는지.</li>\n<li><strong>통보 시점</strong> — 본채용 거부가 요양기간 또는 그 후 30일 이내였는지.</li>\n<li><strong>입증책임 분담</strong> — 본채용 거부 정당성은 사용자, 업무상 부상·요양 필요성은 근로자 측 정리 필요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 요양 휴업 중 해고제한과 시용 근로관계 적용',
        summary:
          '대법원 2018두43958(대법원, 2021.04.29 선고) 영역에서 법원은 근로기준법 제23조 제2항이 사용자는 근로자가 업무상 부상 또는 질병의 요양을 위하여 휴업한 기간과 그 후 30일 동안은 해고하지 못한다고 규정한 취지는 근로자가 업무상 재해로 노동력을 상실하고 있는 기간과 이를 회복하는 데 필요한 그 후 30일간은 실직 위협으로부터 절대적으로 보호하기 위한 것이라고 보면서, 요양을 위하여 필요한 휴업에는 출근을 전혀 할 수 없는 경우뿐 아니라 노동력을 일부 상실하여 정상 근로가 어려운 부분 휴업도 포함되고, 시용 근로관계에 있는 근로자도 그 휴업 기간 중에는 해고하거나 본계약 체결을 거부할 수 없다고 판시했습니다. 요양 중 본채용 거부 사안에서는 휴업 시기·시용 적용을 함께 검토해볼 수 있습니다.',
        takeaway: '업무상 부상 + 요양·휴업(부분 휴업 포함) 시기 + 본채용 거부 결합 시 요양기간 해고제한 위반 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '수습 중이라도 요양기간 해고제한을 적용받을 수 있나요?',
        answer:
          '<strong>시용 근로자도 요양 휴업기간 중에는 본계약 체결 거부가 제한될 수 있는 영역입니다.</strong> 진단서·요양 기록 보존이 우선.',
      },
      {
        question: '치료받으며 일부는 출근했는데도 휴업으로 보나요?',
        answer:
          '<strong>노동력을 일부 상실해 정상 근로가 어려운 부분 휴업도 해고제한에 포함될 수 있는 영역입니다.</strong> 부분 휴업 정황과 요양 필요성을 정리.',
      },
      {
        question: '다친 게 업무상 부상으로 인정돼야 보호받나요?',
        answer:
          '<strong>요양기간 해고제한은 업무상 부상·질병을 전제로 하므로 업무 관련성 입증이 중요합니다.</strong> 재해 경위·목격자 진술 자료 확보.',
      },
      {
        question: '산재 신청과 부당해고 구제를 같이 할 수 있나요?',
        answer:
          '<strong>근로복지공단 요양·휴업급여 신청과 노동위 구제신청을 병행해볼 수 있는 영역입니다.</strong> 두 절차의 자료를 함께 준비.',
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
      { label: '산재 요양 후 복직 거부', href: '/guide/dismissal/dismissal-workers-comp-return-fail-track' },
      { label: '요양 회복기간 해고 거부', href: '/guide/dismissal/dismissal-injury-recovery-period-rejection' },
      { label: '수습 본채용 거부 대응', href: '/guide/dismissal/dismissal-trial-period-fired-confirmation-right' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 3. dismissal-low-performance-ordinary-evaluation-fairness-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-low-performance-ordinary-evaluation-fairness-track',
    keyword: '저성과 통상해고 평가 공정성 다툼',
    questionKeyword: '회사가 징계가 아니라 "근무성적이 불량하다"는 이유로 취업규칙에 따라 저를 통상해고했어요. 그런데 평가가 공정했는지 의문인데 다툴 수 있나요?',
    ctaKeyword: '저성과 통상해고 평가 공정성 대응 정리',
    type: '준비형',
    perspective: 'victim',
    meta: {
      title: '저성과 통상해고 평가 공정성 — 5단계 제23조 정당이유 점검 | 로앤가이드',
      description:
        '회사가 근무성적 불량을 이유로 통상해고했는데 평가가 공정했는지 의문이라면 평가 공정성·정당이유 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"7년 동안 큰 문제 없이 일해 왔는데, 어느 해 인사평가에서 최하위 등급을 받더니 회사가 "근무성적이 불량해 취업규칙상 통상해고 사유에 해당한다"며 저를 내보냈습니다. 징계 절차도 아니고 그냥 성과가 낮다는 이유였는데, 정작 평가 기준이 무엇이고 어떻게 점수가 매겨졌는지는 제대로 설명을 듣지 못했어요. 평가 자체가 공정했는지조차 모르는데 이대로 받아들여야 하는 건지 답답한 상황입니다." 근로기준법 제23조 제1항은 사용자가 근로자를 정당한 이유 없이 해고하지 못한다고 규정하는 영역이고, 판례는 근무성적·근무능력 불량을 이유로 취업규칙에 따라 통상해고를 한 경우 그 정당성이 인정되려면 평가가 공정하고 객관적인 기준에 따라 이루어졌고 근무성적·능력 불량 정도가 사회통념상 고용관계를 계속할 수 없을 정도여야 한다고 본 사례 흐름이 있습니다. 근무성적 불량 사유 + 평가 기준 불투명 + 개선 기회 부재 결합은 \'평가 공정성·정당이유\' 다툼이 가능한 트랙입니다. 피해자라면 ① 평가 공정성 ② 사회통념상 고용유지 가능성 ③ 개선 기회 ④ 노동위 구제 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 평가 ② 정도 ③ 기회 ④ 노동위 ⑤ 민사 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 저성과 통상해고 평가 공정성 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 평가 공정성·고용유지 가능성·개선 기회·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 평가 공정성·객관성</strong> — 근무성적 불량 판단 근거인 평가가 공정·객관적 기준에 따라 이루어졌는지.</li>\n<li><strong>② 사회통념상 고용유지 가능성</strong> — 근무성적·능력 불량 정도가 고용관계를 계속할 수 없을 정도인지.</li>\n<li><strong>③ 개선 기회 부여</strong> — 배치전환·교육·개선 기회 등 해고 회피 시도가 있었는지.</li>\n<li><strong>④ 노동위 구제신청 (해고일 3개월 이내)</strong> — 평가 공정성 결여 + 정당한 이유 부재 결합 다툼.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 근무성적 불량 통상해고가 정당하려면 평가가 공정·객관적 기준에 따라야 하고, 불량 정도가 사회통념상 고용관계를 계속할 수 없을 정도여야 하는 영역. 평가 기준이 불투명하거나 개선 기회 없이 곧바로 해고했다면 평가 공정성·정당한 이유 다툼이 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 평가·해고 자료 보존 (즉시)</strong> — 인사평가표·평가 기준·통상해고 통보서 그대로 보존.</li>\n<li><strong>2단계 — 평가 공정성 정리 (1주)</strong> — 평가 기준 불투명·평가자 편향·동료 대비 형평 등 공정성 결여 정황 정리.</li>\n<li><strong>3단계 — 개선 기회 반박 자료 (2주)</strong> — 배치전환·교육·개선 기회 부재 정황 + 과거 정상 근무 이력 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 평가 공정성 결여 + 정당한 이유 부재 다툼.</li>\n<li><strong>5단계 — 민사 손해배상 검토</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">저성과 통상해고 평가 공정성 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 평가 공정성·고용유지 정도·개선 기회 갈래입니다.</strong></p>\n<ul>\n<li><strong>인사평가표·평가 기준·평가 결과 통지 자료</strong></li>\n<li><strong>통상해고 통보서·취업규칙 중 해고 관련 조항</strong></li>\n<li><strong>과거 평가 이력·정상 근무 입증 자료 (등급 변화 추이)</strong></li>\n<li><strong>업무 실적·성과물·동료 대비 형평 자료</strong></li>\n<li><strong>배치전환·교육·개선 기회 부여 여부 자료 (또는 부재 정황)</strong></li>\n<li><strong>근로계약서·급여명세서·재직 기간 입증 자료</strong></li>\n<li><strong>평가 과정 교신 내역 (이의제기·소명 시도)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 통상해고의 근거가 된 인사평가의 기준과 산정 방식이 공정·객관적이었는지를 입증할 자료를 모으는 것이 핵심. 과거에는 정상 등급을 받다가 특정 시점부터 급격히 하락한 추이, 동료 대비 형평성 결여, 개선 기회 없이 곧바로 해고로 이어진 정황이 결합되면 평가 공정성 결여와 정당한 이유 부재 다툼이 더욱 강화되는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>평가 기준 공정성</strong> — 평가 기준·산정 방식이 공정하고 객관적이었는지.</li>\n<li><strong>고용유지 불가능성</strong> — 불량 정도가 사회통념상 고용관계를 계속할 수 없을 정도인지.</li>\n<li><strong>개선 기회</strong> — 배치전환·교육 등 해고 회피·개선 기회가 부여됐는지.</li>\n<li><strong>통상해고 절차</strong> — 징계가 아닌 통상해고라도 정당한 이유와 절차적 정당성이 필요한지.</li>\n<li><strong>입증책임 부담</strong> — 평가 공정성·해고 정당성 입증은 사용자 측 부담.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>국민권익위원회 110</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 근무성적 불량 통상해고의 평가 공정성 요건',
        summary:
          '대법원 2018다253680(대법원, 2021.02.25 선고) 영역에서 법원은 사용자가 취업규칙에서 정한 해고사유에 해당한다는 이유로 근로자를 해고할 때에도 정당한 이유가 있어야 하고, 근무성적이나 근무능력이 불량하여 직무를 수행할 수 없는 경우에 해고할 수 있다고 정한 취업규칙 등에 따라 근로자를 해고한 경우 그 정당성이 인정되려면 사용자가 근무성적·근무능력이 불량하다고 판단한 근거가 되는 평가가 공정하고 객관적인 기준에 따라 이루어진 것이어야 할 뿐 아니라 근무성적·근무능력이 다른 근로자에 비하여 상당히 낮고 그 정도가 사회통념상 고용관계를 계속할 수 없을 정도이어야 한다고 판시했습니다. 저성과 통상해고 대응 시 평가 공정성과 불량 정도를 중점적으로 검토해볼 수 있습니다.',
        takeaway: '근무성적 불량 통상해고 + 평가 기준 불투명 + 개선 기회 부재 결합 시 평가 공정성 결여·정당한 이유 부재 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '징계가 아니라 근무성적 불량 통상해고인데도 다툴 수 있나요?',
        answer:
          '<strong>통상해고라도 정당한 이유가 필요하고 평가의 공정성이 다툼 대상이 되는 영역입니다.</strong> 인사평가표·평가 기준 보존이 우선.',
      },
      {
        question: '평가 기준을 제대로 설명받지 못했는데 문제가 되나요?',
        answer:
          '<strong>평가가 공정·객관적 기준에 따라 이루어졌는지가 해고 정당성의 핵심 사정입니다.</strong> 기준 불투명·평가자 편향 정황을 정리.',
      },
      {
        question: '성과가 낮다고 바로 해고할 수 있나요?',
        answer:
          '<strong>불량 정도가 사회통념상 고용관계를 계속할 수 없을 정도여야 하는 영역입니다.</strong> 배치전환·교육 등 개선 기회 부재 정황을 함께 정리.',
      },
      {
        question: '예전에는 평가가 괜찮았는데 갑자기 최하위가 됐어요',
        answer:
          '<strong>등급이 급격히 하락한 추이·동료 대비 형평성 결여는 평가 공정성 다툼의 중요한 사정입니다.</strong> 과거 평가 이력 자료를 확보.',
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
      { label: '저성과 방어 대응', href: '/guide/dismissal/dismissal-low-performance-defense' },
      { label: 'PIP 평가 절차 하자', href: '/guide/dismissal/dismissal-pip-evaluation-process-flaw' },
      { label: '통상해고 징계해고 분류', href: '/guide/dismissal/dismissal-ordinary-vs-disciplinary-misclassification-track' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 4. dismissal-standby-order-then-discharge-procedural-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-standby-order-then-discharge-procedural-track',
    keyword: '대기발령 후 면직 서면통지 누락',
    questionKeyword: '회사가 저를 대기발령 내고 일정 기간이 지나자 "직무를 받지 못했다"며 면직 통보를 했어요. 사실상 징계해고 같은데 사유를 서면으로 받지 못했어요. 다툴 수 있나요?',
    ctaKeyword: '대기발령 후 면직 서면통지 누락 대응 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '대기발령 후 면직 — 5단계 제27조 서면통지 누락 점검 | 로앤가이드',
      description:
        '대기발령을 거쳐 면직됐는데 실질은 징계해고이고 사유를 서면으로 못 받았다면 면직 실질·서면통지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"회사가 별다른 설명 없이 저를 대기발령 상태로 두더니, 일정 기간이 지나자 "대기발령 후 직무를 부여받지 못했다"는 이유로 면직을 통보했습니다. 직무를 안 준 건 회사인데 그걸 이유로 저를 내보낸 거예요. 형식은 인사규정에 따른 면직이라지만 실질은 징계해고나 다름없어 보이는데, 정작 어떤 잘못으로 면직됐는지 구체적인 사유를 서면으로 받지 못해서 어떻게 대응해야 할지 막막한 상황입니다." 근로기준법 제27조는 사용자가 근로자를 해고하려면 해고사유와 해고시기를 서면으로 통지하여야 효력이 있다고 규정하는 영역이고, 판례는 대기발령에 이은 면직이 전체적으로 보아 근로자의 의사에 반하여 사용자의 일방적 의사로 근로관계를 종료시킨 실질적 징계해고에 해당하는 경우 구체적 사유를 서면으로 통지하지 않은 면직은 서면통지 요건을 갖추지 못한 것으로 볼 수 있다고 본 사례 흐름이 있습니다. 대기발령 후 면직 + 실질 징계해고 + 서면 사유 부재 결합은 \'면직 실질·서면통지 누락\' 다툼이 가능한 트랙입니다. 피해자라면 ① 면직 실질 ② 서면통지 요건 ③ 대기발령 정당성 ④ 노동위 구제 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 실질 ② 서면 ③ 대기발령 ④ 노동위 ⑤ 민사 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 대기발령 후 면직 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 면직 실질·서면통지·대기발령·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 면직의 실질</strong> — 대기발령에 이은 면직이 전체적으로 근로자 의사에 반한 일방적 종료(실질 징계해고)인지.</li>\n<li><strong>② 서면통지 요건</strong> — 근로기준법 제27조: 면직 사유를 구체적으로 서면 통지했는지.</li>\n<li><strong>③ 대기발령 정당성</strong> — 대기발령 자체에 정당한 이유·필요성이 있었는지, 직무 미부여 책임 소재.</li>\n<li><strong>④ 노동위 구제신청 (해고일 3개월 이내)</strong> — 서면통지 누락 + 면직 실질 부당성 결합 다툼.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 대기발령에 이은 면직이 전체적으로 보아 근로자 의사에 반한 사용자의 일방적 근로관계 종료라면 실질적 징계해고로 평가될 수 있는 영역. 그런데도 구체적 사유를 서면으로 통지하지 않았다면 서면통지 요건 미충족 다툼이 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 대기발령·면직 자료 보존 (즉시)</strong> — 대기발령 통보·면직 통보서·사유 기재 내용 그대로 보존.</li>\n<li><strong>2단계 — 면직 실질 정리 (1주)</strong> — 직무 미부여 책임 소재·면직 경위 등 실질 징계해고 정황 정리.</li>\n<li><strong>3단계 — 서면통지 누락 자료 (2주)</strong> — 구체적 사유 서면 미고지·사유 문의·답변 부재 정황 정리.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 서면통지 누락 + 면직 실질 부당성 다툼.</li>\n<li><strong>5단계 — 민사 손해배상 검토</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">대기발령 후 면직 서면통지 누락 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 면직 실질·서면통지·대기발령 갈래입니다.</strong></p>\n<ul>\n<li><strong>대기발령 통보서·발령 사유 자료</strong></li>\n<li><strong>면직 통보서 원본 (사유 기재 내용 그대로)</strong></li>\n<li><strong>직무 미부여 경위·책임 소재 자료 (회사 측 미배치 정황)</strong></li>\n<li><strong>인사규정·취업규칙 중 대기발령·면직 관련 조항</strong></li>\n<li><strong>면직 사유에 대한 회사와의 교신 내역 (사유 문의·답변)</strong></li>\n<li><strong>근로계약서·급여명세서·재직 기간 입증 자료</strong></li>\n<li><strong>대기발령 기간 처우·임금 변동 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대기발령부터 면직까지의 흐름을 시간선으로 정리하고, 직무를 부여하지 않은 책임이 회사 측에 있다는 점과 면직 사유를 구체적으로 서면으로 받지 못했다는 점을 명확히 해두는 것이 핵심. 면직이 실질적으로 징계해고에 해당하는데도 구체적 사유 서면통지가 누락됐다면 서면통지 요건 미충족 다툼이 더욱 강화되는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>면직의 실질</strong> — 대기발령에 이은 면직이 전체적으로 실질적 징계해고로 평가되는지.</li>\n<li><strong>구체적 서면통지</strong> — 근로기준법 제27조: 면직 사유를 구체적으로 서면 통지했는지가 효력의 핵심.</li>\n<li><strong>직무 미부여 책임</strong> — 직무를 부여하지 않은 책임이 회사 측에 있는데 이를 면직 사유로 삼았는지.</li>\n<li><strong>대기발령 정당성</strong> — 대기발령 자체에 정당한 이유·필요성이 있었는지.</li>\n<li><strong>입증책임 부담</strong> — 면직·서면통지 적법성 입증은 사용자 측 부담.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>국민권익위원회 110</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대기발령 후 면직의 실질과 서면통지 요건',
        summary:
          '대법원 2019가합20989(수원지법, 2020.10.29 선고) 영역에서 법원은 사용자가 근로자에게 일정 횟수 이상 주의를 받았다는 이유로 대기발령을 한 다음 대기발령 후 일정 기간이 지나도록 직위·직무를 받지 못했다는 이유로 면직을 통보한 사안에서, 위 대기발령과 이에 이어진 면직은 이를 전체적으로 보면 근로자의 의사에 반하여 사용자의 일방적 의사에 따라 근로계약관계를 종료시킨 것으로서 실질적으로 징계해고에 해당하는데도 사용자가 구체적인 사유를 서면으로 통지하지 않은 채 면직을 하였으므로 그 면직은 효력이 없다고 판시했습니다. 대기발령 후 면직 대응 시 면직의 실질과 서면통지 요건을 함께 검토해볼 수 있습니다.',
        takeaway: '대기발령 후 면직 + 실질 징계해고 + 구체적 사유 서면 부재 결합 시 서면통지 요건 미충족 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '인사규정에 따른 면직이라는데 해고로 다툴 수 있나요?',
        answer:
          '<strong>대기발령에 이은 면직이 전체적으로 일방적 근로관계 종료라면 실질적 징계해고로 평가될 수 있는 영역입니다.</strong> 대기발령·면직 통보 자료 보존이 우선.',
      },
      {
        question: '직무를 안 준 건 회사인데 그걸 이유로 면직할 수 있나요?',
        answer:
          '<strong>직무 미부여 책임이 회사 측에 있는데 이를 면직 사유로 삼았는지가 다툼의 중요한 사정입니다.</strong> 미배치 경위·책임 소재 자료를 정리.',
      },
      {
        question: '면직 사유를 서면으로 못 받았는데 문제가 되나요?',
        answer:
          '<strong>실질이 징계해고라면 구체적 사유를 서면으로 통지해야 효력이 있는 영역입니다.</strong> 사유 문의·답변 부재 정황을 함께 정리.',
      },
      {
        question: '대기발령 자체도 다툴 수 있나요?',
        answer:
          '<strong>대기발령에 정당한 이유·필요성이 있었는지도 다툼 대상이 될 수 있는 영역입니다.</strong> 발령 사유·기간·처우 변동 자료를 확보.',
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
      { label: '해고사유서 추상 불충분', href: '/guide/dismissal/dismissal-incomplete-reason-letter' },
      { label: '무기한 대기발령 사직 압박', href: '/guide/dismissal/dismissal-investigation-indefinite-standby-resign-pressure-track' },
      { label: '징계 절차 위반 무효', href: '/guide/dismissal/dismissal-disciplinary-rehearing-procedural-defect' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },
];
