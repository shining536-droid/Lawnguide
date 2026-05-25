import { SpokePage } from '../spoke-pages';

// batch77 dismissal — 4개 (2026-05-25)
//
// 고유 존재 이유:
// 1. 수습기간 본채용 거부 — 단순 수습해고 류와 분기. 여기는 '수습 종료 시 객관적 평가 없이 본채용 거부' 트랙. 근로기준법 제27조 서면통지 + 시용 해고 정당성(객관·합리적 이유) 다툼.
// 2. 구두 해고 통보 대응 — 단순 해고통지 형식 류와 분기. 여기는 '구두로 "내일부터 나오지 마" 통보 + 서면 없음' 트랙. 근로기준법 제27조 서면통지 무효 + 제26조 30일 예고 위반 다툼.
// 3. 임신·출산 불이익 해고 — 단순 출산 해고 류와 분기. 여기는 '임신·출산휴가 전후 불이익 처우·해고' 트랙. 남녀고용평등법 제19조 + 근로기준법 제74조 + 제23조 정당한 이유 다툼.
// 4. 징계해고 양정 과다 — 단순 징계해고 이의 류와 분기. 여기는 '경미한 사유로 가장 무거운 징계해고 + 재량권 일탈·남용' 트랙. 근로기준법 제23조 + 징계양정 사회통념 다툼.

export const spokesBatch77Dismissal: SpokePage[] = [
  // ─── 1. dismissal-probation-rejection-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-probation-rejection-track',
    keyword: '수습기간 본채용 거부',
    questionKeyword: '수습기간이 끝났는데 회사가 객관적인 평가 없이 "적합하지 않다"며 본채용을 거부했어요. 이게 부당해고로 다툴 수 있나요?',
    ctaKeyword: '수습기간 본채용 거부 대응 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '수습 본채용 거부 — 5단계 시용 해고 정당성 점검 | 로앤가이드',
      description:
        '수습 종료 후 객관적 평가 없이 본채용을 거부당했다면 시용 해고 정당성·서면통지·사회통념 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"IT 스타트업에 3개월 수습 조건으로 입사했는데, 수습 기간 내내 별다른 피드백도 없다가 마지막 날 갑자기 팀장이 "팀 적합성이 부족하다"며 구두로 본채용 불가를 통보했습니다. 서면 통지는 없었고, 어떤 평가 기준으로 이런 결론이 나왔는지 설명도 듣지 못했어요. 수습 기간에 지각·결근도 없었고 맡은 업무도 정상적으로 수행했는데, 갑작스러운 거부가 납득되지 않아요." 대법원 2002다62432(2006.02.24 선고)는 시용기간 만료 시 본계약 체결을 거부하려면 \'객관적으로 합리적인 이유\'가 존재하여 사회통념상 상당해야 한다고 판시한 사례 흐름이 있고, 근로기준법 제27조는 해고(본채용 거부 포함) 시 해고사유와 시기를 서면으로 통지하도록 의무화하는 영역입니다. 객관적 평가 기준 부재 + 서면통지 누락 결합은 \'정당한 이유 없는 시용 해고\' 다툼이 가능한 트랙. 피해자라면 ① 평가 기준 부재 ② 서면통지 위반 ③ 수습 중 정상 근무 ④ 노동위 구제신청 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 평가 ② 서면 ③ 근무 ④ 노동위 ⑤ 민사 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 수습기간 본채용 거부 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 평가 기준·서면통지·근무 실적·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 평가 기준 부재</strong> — 수습 평가 기준·방법 미설정 or 자의적 적용 정황.</li>\n<li><strong>② 서면통지 위반</strong> — 근로기준법 제27조에 따라 본채용 거부 사유·시기 서면통지 여부 확인.</li>\n<li><strong>③ 수습 중 정상 근무 입증</strong> — 근태 기록·업무 수행 자료·구두 피드백 부재 정황.</li>\n<li><strong>④ 노동위 구제신청 (해고일 3개월 이내)</strong> — 객관적·합리적 이유 부재 + 서면통지 위반 다툼.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대법원 판례 흐름에서 시용기간 만료 시 본채용 거부도 \'객관적으로 합리적인 이유 + 사회통념상 상당성\'을 갖추어야 하는 영역. 수습 평가 기준 미설정 + 일방적 통보 + 서면 없음 결합은 이 요건 미충족 다툼이 가능한 트랙이며, 입증책임은 사용자 측 부담입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 본채용 거부 자료 보존 (즉시)</strong> — 구두 통보 정황·카카오톡·이메일·근로계약서·수습 조건 문서.</li>\n<li><strong>2단계 — 평가 기준·수습 성과 정리 (1주)</strong> — 회사의 평가 기준 미설정 정황 + 근태·업무 수행 기록.</li>\n<li><strong>3단계 — 서면통지 위반 여부 확인 (1주)</strong> — 본채용 거부 사유·시기가 서면으로 통지되었는지 확인.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 시용 해고 정당성 + 서면통지 위반 결합 다툼.</li>\n<li><strong>5단계 — 민사 손해배상 검토</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">수습 본채용 거부 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 평가 기준·서면 위반·근무 실적 갈래입니다.</strong></p>\n<ul>\n<li><strong>근로계약서·수습 조건 명시 문서</strong></li>\n<li><strong>본채용 거부 통보 자료 (구두 정황·카카오톡·이메일)</strong></li>\n<li><strong>수습 평가 기준·평가표·평가 방식 관련 자료</strong></li>\n<li><strong>근태 기록·출퇴근 내역 (정상 근무 입증)</strong></li>\n<li><strong>업무 수행 결과물·지시 이행 자료</strong></li>\n<li><strong>수습 기간 중 수령한 지도·피드백 부재 정황</strong></li>\n<li><strong>회사 취업규칙·인사규정 중 수습 관련 조항</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 수습 평가 기준이 사전에 명확히 설정·공지되지 않았고 수습 중 별다른 경고·지도 없이 갑작스러운 거부가 이루어진 정황은 \'객관적·합리적 이유 부재\' 다툼의 핵심 입증 영역. 서면통지 없는 구두 거부는 근로기준법 제27조 위반으로 그 자체만으로도 효력 다툼이 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>평가 기준의 객관성</strong> — 수습 평가 기준 미설정·자의적 적용이 \'객관·합리적 이유 부재\' 사정.</li>\n<li><strong>서면통지 의무</strong> — 근로기준법 제27조는 본채용 거부에도 구체적 사유·시기 서면통지 요구.</li>\n<li><strong>사회통념상 상당성</strong> — 정상 근무 + 경고·지도 부재 정황이 상당성 부재 입증.</li>\n<li><strong>통상 해고보다 넓은 인정 범위</strong> — 시용 해고가 다소 넓게 인정되나 \'합리적 이유\' 요건은 유지.</li>\n<li><strong>입증책임 부담</strong> — 본채용 거부의 정당성 입증은 사용자 측 부담.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>국민권익위원회 110</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 시용 만료 본채용 거부의 정당성 요건',
        summary:
          '대법원 2002다62432(대법원, 2006.02.24 선고) 영역에서 법원은 시용기간 만료 시 본계약 체결을 거부하는 것은 사용자에게 유보된 해약권의 행사로서 통상의 해고보다는 넓게 인정되나, 이 경우에도 객관적으로 합리적인 이유가 존재하여 사회통념상 상당하다고 인정되어야 한다고 판시했습니다. 근무성적평정에서 지점별 등급 할당제를 운영해 사실상 자의적으로 평가한 사안에서 정당한 이유 인정이 어렵다고 본 사례 흐름이 있어, 본채용 거부 대응 시 평가의 객관성 여부를 중점적으로 검토해볼 수 있습니다.',
        takeaway: '수습 평가 기준 미설정 + 자의적 적용 + 서면통지 부재 결합 시 시용 해고 정당성 부재 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '수습기간에 아무 문제가 없었는데 갑자기 본채용 거부가 정당한가요?',
        answer:
          '<strong>객관적 평가 기준 미설정 + 수습 중 정상 근무는 본채용 거부 정당성을 다투는 핵심 사정입니다.</strong> 근태·업무 수행 기록 보존이 우선 검토 사항.',
      },
      {
        question: '구두로만 "적합하지 않다"고 했는데 서면 통지가 없어도 유효한가요?',
        answer:
          '<strong>근로기준법 제27조에 따라 본채용 거부도 사유·시기를 서면으로 통지해야 효력이 인정되는 영역입니다.</strong> 서면 없는 구두 거부는 그 자체로 위반 다툼이 가능한 트랙.',
      },
      {
        question: '수습 해고는 일반 해고보다 회사가 더 쉽게 할 수 있나요?',
        answer:
          '<strong>인정 범위가 다소 넓지만 "객관적·합리적 이유 + 사회통념상 상당성" 요건은 유지됩니다.</strong> 자의적 평가·서면 부재라면 이 요건 미충족 다툼이 검토될 수 있는 영역.',
      },
      {
        question: '구제신청 기한이 있나요?',
        answer:
          '<strong>본채용 거부(해고)일로부터 3개월 이내가 노동위 구제신청 기한입니다.</strong> 기한 도과 전 신속 진행 검토.',
      },
      {
        question: '수습 기간 중 평가 기준을 회사가 알려주지 않았어요',
        answer:
          '<strong>평가 기준 미고지·미설정은 거부 사유의 객관성 부재를 가리키는 중요한 사정입니다.</strong> 관련 취업규칙·인사규정·안내 자료 확인이 우선입니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '기간제 갱신거절', href: '/guide/dismissal/dismissal-fixed-term-renewal-refusal' },
      { label: '사직 압박 철회', href: '/guide/dismissal/dismissal-resignation-pressure-revoke' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 2. dismissal-verbal-fire-no-notice-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-verbal-fire-no-notice-track',
    keyword: '구두 해고 통보 대응',
    questionKeyword: '사장이 갑자기 "내일부터 나오지 마"라고 말로만 해고를 통보했어요. 서면도 없고 30일 예고도 없었는데, 이 해고가 유효한가요?',
    ctaKeyword: '구두 해고 서면 위반 대응 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '구두 해고 통보 — 5단계 서면통지·해고예고 위반 점검 | 로앤가이드',
      description:
        '"내일부터 나오지 마" 구두로만 해고를 통보받았다면 서면통지 위반·30일 예고 위반 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"식당에서 2년째 일하던 중 사장이 퇴근 직전 갑자기 불러 "이번 달까지만 일해, 아니 내일부터 나오지 마"라고 말했습니다. 카카오톡 메시지나 문자도 없었고 해고 사유서도 없었어요. 왜 해고하는지 물었더니 "그냥 사람이 필요 없어서"라고만 했어요. 갑작스럽게 생계가 끊길 위기인데, 이게 적법한 해고인지 알 수 없어 너무 막막한 상황입니다." 근로기준법 제27조는 사용자가 근로자를 해고하려면 해고사유와 해고시기를 서면으로 통지해야 효력이 있다고 규정하는 영역이고, 제26조는 30일 전 서면 예고 또는 30일분 이상의 통상임금(해고예고수당) 지급을 요구하는 영역입니다. 구두만의 해고 통보는 서면통지 요건을 갖추지 못해 그 자체로 효력 다툼이 가능한 트랙입니다. 피해자라면 ① 서면통지 위반 ② 해고예고 위반 ③ 정당한 이유 ④ 노동위 구제신청 ⑤ 해고예고수당 5중 트랙이 가능한 영역. 대응은 ① 서면 ② 예고 ③ 이유 ④ 노동위 ⑤ 수당 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 구두 해고 통보 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 서면 위반·예고 위반·정당 이유·구제·수당 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 서면통지 위반</strong> — 근로기준법 제27조: 해고사유·해고시기 서면 미통지 = 무효 다툼 가능.</li>\n<li><strong>② 해고예고 위반</strong> — 근로기준법 제26조: 30일 전 예고 또는 30일분 해고예고수당 미지급.</li>\n<li><strong>③ 정당한 이유 부재</strong> — 사유 없는 "필요 없어서" 식 통보는 정당한 이유 다툼이 가능한 영역.</li>\n<li><strong>④ 노동위 구제신청 (해고일 3개월 이내)</strong> — 서면 위반 + 예고 위반 + 정당 이유 부재 결합.</li>\n<li><strong>⑤ 해고예고수당 청구</strong> — 30일 예고 없이 즉시 해고 시 30일분 통상임금 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 근로기준법 제27조는 해고의 효력 요건으로 서면통지를 명시. 구두만의 해고 통보는 사유가 아무리 정당해도 서면통지 요건 미충족으로 효력 자체를 다툴 수 있는 영역이며, 제26조 해고예고 미이행 시 해고예고수당까지 별도 청구가 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 구두 통보 정황 보존 (즉시)</strong> — 통보 당시 대화 녹음·목격자·카카오톡·이후 교신 내역.</li>\n<li><strong>2단계 — 서면통지·해고예고 위반 확인 (즉시)</strong> — 서면 해고통지서 수령 여부 + 30일 예고 여부 확인.</li>\n<li><strong>3단계 — 근로관계 자료 정리 (1주)</strong> — 근로계약서·급여명세서·근태 기록·재직 기간 자료.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 서면통지 위반 + 해고예고 위반 + 정당 이유 부재 다툼.</li>\n<li><strong>5단계 — 해고예고수당 청구 + 민사 손해배상</strong> — 고용노동부 진정 또는 민사 소액 절차.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">구두 해고 통보 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 서면 위반·예고 위반·근로관계 갈래입니다.</strong></p>\n<ul>\n<li><strong>구두 해고 통보 정황 자료 (녹음·문자·카카오톡·목격자)</strong></li>\n<li><strong>근로계약서·채용 관련 서류</strong></li>\n<li><strong>급여명세서·근태 기록·재직 기간 입증 자료</strong></li>\n<li><strong>서면 해고통지서 미수령 사실 확인</strong></li>\n<li><strong>해고예고(30일 전 통보) 여부 관련 자료</strong></li>\n<li><strong>마지막 임금·퇴직금 정산 내역</strong></li>\n<li><strong>회사 취업규칙·인사규정 중 해고 관련 조항</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 구두 해고 통보 당시의 대화를 즉시 녹음하거나 직후 카카오톡으로 "오늘 해고 통보를 받았습니다. 사유가 무엇인지, 서면 통지를 주실 수 있나요?"라고 남기면 통보 사실과 서면 부재를 동시에 입증하는 핵심 증거가 될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>서면통지 요건</strong> — 근로기준법 제27조: 해고사유·시기 서면 미통지 = 그 자체로 해고 무효 영역.</li>\n<li><strong>해고예고 위반</strong> — 30일 전 예고 없이 즉시 해고 시 30일분 통상임금 해고예고수당 청구 가능.</li>\n<li><strong>묵시적 해고 여부</strong> — 구두 통보가 해고 의사 표시로 인정될 수 있는지 정황 종합 판단.</li>\n<li><strong>정당한 이유</strong> — "필요 없어서" 식 사유는 정당한 이유로 인정되기 어려운 영역.</li>\n<li><strong>입증책임 부담</strong> — 해고 정당성 + 서면통지 적법성 입증은 사용자 측 부담.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>국민권익위원회 110</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 구두·묵시적 해고 의사표시와 서면통지 요건',
        summary:
          '대법원 2022두57695(대법원, 2023.02.02 선고) 영역에서 법원은 해고란 명칭·절차에 관계없이 근로자의 의사에 반하는 사용자의 일방적 근로관계 종료를 의미하고, 묵시적 의사표시에 의한 해고가 있는지는 노무 수령 거부 경위·방법·근로자 태도 등을 종합해 판단해야 한다고 판시했습니다. "사표를 쓰라"는 반복 발언 + 이후 출근 거부 상황에서 묵시적 해고 의사표시 여부를 종합 검토한 사례 흐름이 있어, 구두 해고 통보 정황에서도 이 판단 기준이 적용될 수 있습니다.',
        takeaway: '구두 해고 통보 정황 + 서면통지 누락 + 30일 예고 부재 결합 시 해고 효력 + 예고수당 청구 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '"나오지 마"라는 말이 법적으로 해고 통보인가요?',
        answer:
          '<strong>근로관계를 일방적으로 종료할 확정적 의사 표시라면 구두로도 해고 의사표시로 평가될 수 있습니다.</strong> 다만 서면통지 요건 미충족으로 효력 다툼이 가능한 영역.',
      },
      {
        question: '서면 없이 말로만 해고하면 해고가 무효인가요?',
        answer:
          '<strong>근로기준법 제27조에 따라 서면 미통지 해고는 효력이 없는 영역입니다.</strong> 해고사유·해고시기를 서면으로 통지받지 못했다면 무효 다툼 검토.',
      },
      {
        question: '30일 예고 없이 바로 해고당했어요. 수당을 받을 수 있나요?',
        answer:
          '<strong>근로기준법 제26조에 따라 30일 예고 없는 즉시 해고 시 30일분 통상임금을 해고예고수당으로 청구할 수 있는 영역입니다.</strong> 고용노동부 진정 또는 민사 소액 절차 검토.',
      },
      {
        question: '구두 해고 통보를 어떻게 증거로 남기나요?',
        answer:
          '<strong>통보 당시 녹음·직후 카카오톡 확인 메시지·목격자 진술이 핵심 입증 방법입니다.</strong> "서면 통지를 요청합니다"라는 문자 발송도 통보 사실 + 서면 부재를 동시에 기록하는 방법.',
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
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '기간제 갱신거절', href: '/guide/dismissal/dismissal-fixed-term-renewal-refusal' },
      { label: '사직 압박 철회', href: '/guide/dismissal/dismissal-resignation-pressure-revoke' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 3. dismissal-pregnancy-maternity-disadvantage-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-pregnancy-maternity-disadvantage-track',
    keyword: '임신 출산 불이익 해고',
    questionKeyword: '임신 사실을 알리자마자 회사가 부서 이동·업무 배제를 시작했고, 출산휴가 복귀 후 얼마 지나지 않아 해고를 통보받았어요. 부당해고로 다툴 수 있나요?',
    ctaKeyword: '임신 출산 불이익 해고 대응 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임신·출산 불이익 해고 — 5단계 남녀고용평등법 보호 점검 | 로앤가이드',
      description:
        '임신 후 부서 이동·업무 배제에 이어 출산휴가 복귀 후 해고됐다면 남녀고용평등법·근로기준법 5가지 보호 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중소 무역회사에서 3년 넘게 근무하다 임신 사실을 팀장에게 알렸더니, 다음 주부터 갑자기 주요 업무에서 빠지고 단순 서류 정리로 배치가 바뀌었습니다. 출산휴가 90일을 다녀오고 복귀했는데, 복귀 2개월 만에 "부서 구조조정"을 이유로 해고를 통보받았어요. 그런데 같은 팀에 임신하지 않은 동료는 남았고, 새 직원을 뽑는 채용 공고가 올라온 상황입니다." 남녀고용평등법 제19조는 출산전후휴가를 이유로 한 불이익 처우를 금지하는 영역이고, 근로기준법 제74조는 출산전후휴가 기간 중 및 그 후 30일간의 해고를 금지하는 영역이며, 제23조는 정당한 이유 없는 해고를 제한하는 영역입니다. 임신 공개 후 불이익 + 복귀 직후 해고 + 동료 형평성 격차는 임신·출산을 이유로 한 부당해고 다툼이 가능한 트랙입니다. 피해자라면 ① 임신 공개와 불이익 연결 ② 복귀 후 해고 ③ 구조조정 명목 합리성 ④ 노동위 구제 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 공개 ② 복귀 ③ 명목 ④ 노동위 ⑤ 민사 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 임신·출산 불이익 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 공개·복귀·명목·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 임신 공개와 불이익 연결</strong> — 임신 공개 시점과 부서 이동·업무 배제의 시간적 근접성.</li>\n<li><strong>② 복귀 후 해고 시점</strong> — 근로기준법 제74조: 출산전후휴가 후 30일간 해고 금지 기간 도과 여부.</li>\n<li><strong>③ 구조조정 명목 합리성</strong> — 동료 잔류 + 채용 공고 정황이 "구조조정" 사유의 객관성 부재 사정.</li>\n<li><strong>④ 노동위 구제신청 (해고일 3개월 이내)</strong> — 남녀고용평등법 위반 + 정당한 이유 부재 다툼.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 남녀고용평등법 제19조는 출산휴가를 이유로 한 불이익을 금지하고, 근로기준법 제74조는 출산전후휴가 후 30일 이내 해고를 원칙적으로 금지하는 영역. 임신 공개 후 불이익·출산 복귀 후 해고·동료 형평성 격차 결합은 \'임신·출산이 실질 해고 이유\'라는 다툼의 강한 사정이며, 입증책임은 사용자 측 부담입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 불이익 자료 보존 (즉시)</strong> — 임신 공개 시점·부서 이동·업무 배제·해고 통보 자료 일체.</li>\n<li><strong>2단계 — 시간적 근접성 정리 (1주)</strong> — 임신 공개일·불이익 시점·출산휴가 기간·복귀일·해고일 시간선 정리.</li>\n<li><strong>3단계 — 구조조정 명목 반박 자료 (2주)</strong> — 동료 잔류 현황·신규 채용 공고·업무 연속성 정황.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 남녀고용평등법 위반 + 정당한 이유 부재 다툼.</li>\n<li><strong>5단계 — 민사 손해배상 검토</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임신·출산 불이익 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 불이익 연결·복귀·명목 반박 갈래입니다.</strong></p>\n<ul>\n<li><strong>임신 공개 시점 입증 자료 (진단서·팀장 대화 내역·이메일)</strong></li>\n<li><strong>부서 이동·업무 배제 통보 자료 (인사발령문·업무 변경 통보)</strong></li>\n<li><strong>출산전후휴가 신청·승인 자료·복귀 확인서</strong></li>\n<li><strong>해고 통보서·징계위원회 자료·사유서</strong></li>\n<li><strong>동료 잔류 현황·신규 채용 공고 자료 (형평성 비교)</strong></li>\n<li><strong>임신 공개 전 정상 업무 수행 자료 (평가·근태 기록)</strong></li>\n<li><strong>회사 인사규정·구조조정 기준 문서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임신 공개 후 불이익 시작 시점과 출산 복귀 후 해고 통보 시점의 시간선을 명확히 정리하는 것이 핵심. 동일 팀 동료 잔류 + 신규 채용 공고 존재는 "구조조정" 사유의 객관성 부재를 가리키는 결정적 사정으로 활용될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>남녀고용평등법 제19조</strong> — 출산휴가를 이유로 한 불이익 처우 금지 + 복귀 후 동일 업무 원칙.</li>\n<li><strong>근로기준법 제74조</strong> — 출산전후휴가 후 30일 이내 해고 원칙 금지 영역.</li>\n<li><strong>구조조정 명목 합리성</strong> — 동료 잔류 + 채용 공고가 사유의 객관성 부재를 가리키는 사정.</li>\n<li><strong>시간적 근접성</strong> — 임신 공개·복귀 시점과 불이익·해고 사이의 간격이 인과 입증의 핵심.</li>\n<li><strong>입증책임 부담</strong> — 해고 정당성 + 임신·출산 이유 아님 입증은 사용자 측 부담.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>국가인권위원회 1331</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부당해고 구제절차 피신청인 변경과 제척기간 판단 기준',
        summary:
          '대법원 2024두32973(대법원, 2024.07.25 선고) 영역에서 법원은 부당해고 구제절차에서 피신청인의 추가·변경이 허용되고, 제척기간 준수 여부는 최초 구제신청 시점을 기준으로 판단해야 한다고 판시했습니다. 또한 근로기준법상 근로자 해당 여부는 종속적 관계 등 실질 기준으로 판단해야 한다고 본 사례 흐름이 있어, 임신·출산 불이익 해고로 구제신청 시 피신청인 특정과 기한 준수 검토가 중요한 영역으로 활용될 수 있습니다.',
        takeaway: '임신 공개 후 불이익 + 출산 복귀 후 해고 결합 시 남녀고용평등법·정당한 이유 부재 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '임신 사실을 알린 뒤 부서가 바뀐 게 불이익 처우인가요?',
        answer:
          '<strong>임신 공개 시점과 부서 이동·업무 배제의 시간적 근접성이 불이익 처우 다툼의 핵심 사정입니다.</strong> 임신 전 업무와 배치 후 업무 변화 자료 보존.',
      },
      {
        question: '출산휴가 복귀 후 2개월 만에 해고됐어요. 법적으로 보호받을 수 있나요?',
        answer:
          '<strong>근로기준법 제74조는 출산전후휴가 후 30일 이내 해고를 원칙 금지하는 영역입니다.</strong> 30일 경과 후라도 임신·출산이 실질 이유라면 남녀고용평등법·정당 이유 부재로 다툼이 가능한 트랙.',
      },
      {
        question: '"구조조정"이 이유라는데 같은 팀 동료는 남아있어요',
        answer:
          '<strong>동료 잔류는 구조조정 사유의 객관성 부재를 가리키는 결정적 사정입니다.</strong> 잔류 동료 현황·신규 채용 공고 자료 확보.',
      },
      {
        question: '남녀고용평등법 위반은 어떻게 신고하나요?',
        answer:
          '<strong>고용노동부 1350 신고 또는 지방고용노동관서에 진정서 제출이 가능한 절차입니다.</strong> 노동위 부당해고 구제신청과 병행 검토.',
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
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '기간제 갱신거절', href: '/guide/dismissal/dismissal-fixed-term-renewal-refusal' },
      { label: '사직 압박 철회', href: '/guide/dismissal/dismissal-resignation-pressure-revoke' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 4. dismissal-disciplinary-excessive-penalty-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-disciplinary-excessive-penalty-track',
    keyword: '징계해고 양정 과다',
    questionKeyword: '규정상 감봉·정직이 가능한 가벼운 실수로 가장 무거운 징계해고를 받았어요. 양정이 너무 과한 것 같은데 다툴 수 있나요?',
    ctaKeyword: '징계해고 양정 과다 대응 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '징계해고 양정 과다 — 5단계 재량권 일탈 다툼 점검 | 로앤가이드',
      description:
        '경미한 사유로 징계해고를 받았다면 징계양정 사회통념·재량권 일탈 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"제조업체에서 8년간 근무하던 중 업무용 노트북을 한 번 개인 용도로 잠시 사용한 사실이 적발됐습니다. 회사 취업규칙상 동일 위반은 첫 번째에는 경고, 두 번째에는 감봉, 세 번째에 정직이라고 명시되어 있어요. 그런데 회사는 징계위원회를 열어 초범임에도 불구하고 바로 징계해고를 통보했습니다. 8년 무결점 근무 이력과 규정상 단계적 처분 기준이 있음에도 가장 무거운 처분이 내려진 게 도저히 납득이 안 되는 상황이에요." 근로기준법 제23조는 정당한 이유 없는 해고를 제한하는 영역이고, 판례는 징계처분이 사회통념상 현저히 타당성을 잃어 재량권을 남용한 경우에는 위법으로 다툴 수 있다고 본 사례 흐름이 있습니다. 경미한 초범 사유 + 규정상 단계적 처분 기준 존재 + 장기 무결점 근무 결합은 \'징계양정 재량권 일탈·남용\' 다툼이 가능한 트랙입니다. 피해자라면 ① 비위 정도 ② 규정 기준 ③ 근무 이력 ④ 양정 형평 ⑤ 노동위 구제 5중 트랙이 가능한 영역. 대응은 ① 정도 ② 규정 ③ 이력 ④ 형평 ⑤ 노동위 5단계로 검토해볼 수 있습니다. 근로자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 징계해고 양정 과다 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 비위 정도·규정 기준·이력·형평·구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 비위 행위의 실질 정도</strong> — 해고라는 가장 무거운 처분을 정당화할 만큼의 중대한 비위인지 평가.</li>\n<li><strong>② 취업규칙 징계 기준 단계</strong> — 규정상 경고·감봉·정직 순서가 있는데 단계를 건너뛰고 해고 가능 여부.</li>\n<li><strong>③ 장기 근무 이력</strong> — 8년 무결점 근무는 징계양정 완화 사정으로 고려될 수 있는 영역.</li>\n<li><strong>④ 동종 비위 다른 근로자 처분 비교</strong> — 유사 비위에 대한 경한 처분 사례가 형평성 다툼의 근거.</li>\n<li><strong>⑤ 노동위 구제신청 (해고일 3개월 이내)</strong> — 징계양정 재량권 일탈·남용 다툼.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 징계처분이 사회통념상 현저히 타당성을 잃어 재량권을 남용한 경우에는 위법한 것으로 다툴 수 있는 영역. 비위 정도·근무 이력·규정상 단계 기준·동종 사례 형평을 종합 고려해 가장 무거운 징계해고가 과도한지를 판단하는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong>A. 고용노동부·노동위원회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 징계 자료 보존 (즉시)</strong> — 징계처분서·징계위원회 회의록·취업규칙 징계 조항·비위 행위 자료.</li>\n<li><strong>2단계 — 규정 단계 기준 정리 (1주)</strong> — 취업규칙상 경고→감봉→정직→해고 단계 규정 + 실제 적용 여부 비교.</li>\n<li><strong>3단계 — 양정 완화 사정 수집 (2주)</strong> — 장기 근무 이력·표창 수상·유사 비위 동료 처분 비교 자료.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 징계양정 과도성 + 재량권 일탈·남용 다툼.</li>\n<li><strong>5단계 — 민사 손해배상 검토</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">징계해고 양정 과다 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 비위 정도·규정·양정 형평 갈래입니다.</strong></p>\n<ul>\n<li><strong>징계처분서·징계위원회 회의록·통지서</strong></li>\n<li><strong>취업규칙·인사규정 중 징계 조항 (단계별 처분 기준)</strong></li>\n<li><strong>비위 행위 관련 자료 (발생 경위·규모·피해 여부)</strong></li>\n<li><strong>장기 근무 이력·표창·우수 평가 자료 (양정 완화 사정)</strong></li>\n<li><strong>유사 비위로 경한 처분을 받은 동료 사례 자료 (형평성 비교)</strong></li>\n<li><strong>초범 여부·반성 의사 표명 자료</strong></li>\n<li><strong>징계위원회 구성 적법성·절차 이행 여부 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 취업규칙상 단계별 징계 기준이 있는데 초범에 최고 단계 해고를 적용한 경우는 재량권 일탈 다툼의 가장 강한 근거. 유사 비위 동료 경한 처분 사례와 장기 무결점 이력이 결합되면 양정 형평 다툼이 더욱 강화되는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사회통념상 상당성</strong> — 징계처분이 비위 정도·근무 이력·규정 기준 대비 사회통념상 현저히 과도한지.</li>\n<li><strong>재량권 일탈·남용</strong> — 경미한 초범에 최중 징계를 내린 것이 재량 한계를 벗어난 영역인지.</li>\n<li><strong>취업규칙 단계 무시</strong> — 규정상 단계적 처분 기준을 건너뛰고 해고를 적용한 적법성.</li>\n<li><strong>동종 사례 형평</strong> — 유사 비위에 대한 다른 근로자 처분 수위와의 격차.</li>\n<li><strong>입증책임 부담</strong> — 징계 정당성·양정 적정성 입증은 사용자 측 부담.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>국민권익위원회 110</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 징계처분 재량권 한계와 사회통념상 현저한 타당성 상실',
        summary:
          '대법원 2002다51555(대법원, 2004.06.25 선고) 영역에서 법원은 징계처분이 사회통념상 현저하게 타당성을 잃어 징계권자에게 맡겨진 재량권을 남용한 것으로 인정되는 경우에 한하여 위법으로 다툴 수 있고, 이를 판단할 때는 비위사실의 내용·성질·달성 목적·양정 기준 등 여러 요소를 종합 고려해야 한다고 판시했습니다. 징계처분 전후 비위사실과 양정 기준의 비례성이 핵심 검토 영역이라는 사례 흐름이 있어, 경미한 초범 비위에 징계해고를 적용한 사안에서 재량권 일탈 다툼이 가능한 트랙으로 검토될 수 있습니다.',
        takeaway: '경미한 초범 + 취업규칙 단계 기준 무시 + 장기 무결점 이력 결합 시 징계양정 재량권 일탈 검토 영역 — 변호인 상담·노동위 구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '규정에는 경고·감봉이 먼저인데 바로 해고할 수 있나요?',
        answer:
          '<strong>취업규칙상 단계적 처분 기준이 있는데 이를 건너뛰고 해고하면 절차·양정 다툼이 가능한 영역입니다.</strong> 관련 취업규칙 조항 확인이 우선.',
      },
      {
        question: '8년 동안 문제없이 일했는데 이런 사정은 고려되지 않나요?',
        answer:
          '<strong>장기 무결점 근무 이력은 징계양정 완화 사정으로 고려될 수 있는 영역입니다.</strong> 재직 기간·표창·평가 기록 자료 보존.',
      },
      {
        question: '비슷한 잘못을 한 동료는 경고만 받았는데, 저는 해고예요',
        answer:
          '<strong>동종 비위에 대한 처분 수위 격차는 징계양정 형평성 다툼의 결정적 근거입니다.</strong> 동료 처분 사례 자료 확보.',
      },
      {
        question: '징계위원회에서 변명할 기회를 충분히 주지 않았어요',
        answer:
          '<strong>징계 절차의 방어권 보장 부재는 절차적 하자로 독립 다툼이 가능한 영역입니다.</strong> 징계위원회 회의록·통지서 확인.',
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
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '기간제 갱신거절', href: '/guide/dismissal/dismissal-fixed-term-renewal-refusal' },
      { label: '사직 압박 철회', href: '/guide/dismissal/dismissal-resignation-pressure-revoke' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },
];
