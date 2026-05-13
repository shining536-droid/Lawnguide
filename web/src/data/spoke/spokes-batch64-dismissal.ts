import { SpokePage } from '../spoke-pages';

// batch64 dismissal — 5개 (2026-05-14)
//
// 고유 존재 이유:
// 1. 경력직 채용 시용기간 적성 미달 해고 — 신규 채용 시용과 다른 "경력 입증 책임" 결합 트랙 (기존 trial-period-* 는 신입 수습, 본 페이지는 경력직 시용 본채용 거부 다툼).
// 2. 출장·재택 중 원격 해고 통보 — 통보 장소·소명 기회 부재 + 디지털 증거 결합 (기존 sudden-* 는 즉시 통보, 본 페이지는 원격 통보 절차하자).
// 3. 자회사 분사·매각 후 즉시 해고 — 영업양도·고용승계 + 즉시 해고 결합 트랙 (기존 business-transfer-* 와 분기: 분사 직후 시점 + 자회사 청산 위장).
// 4. 노조 가입 직후 인사평가 최하 해고 — 노조 활동 보호 + 부당노동행위 결합 (기존 union-* 부재, 본 페이지는 노조 가입과 인사평가 인과 다툼).
// 5. 산재 요양 종료 후 복직 거부 — 산업재해보상보험법 보호 + 복직 의무 다툼 (기존 medical-leave-* 와 분기: 산재 요양 종료 시점 특수).

export const spokesBatch64Dismissal: SpokePage[] = [
  // ─── 1. dismissal-experienced-hire-trial-fail-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-experienced-hire-trial-fail-track',
    keyword: '경력직 시용 적성미달',
    questionKeyword: '경력직으로 입사했는데 3개월 시용 끝에 적성 미달이라며 해고됐어요. 다툼 가능한가요?',
    ctaKeyword: '경력직 시용 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '경력직 시용기간 적성 미달 해고 — 5단계 본채용 거부 다툼 | 로앤가이드',
      description:
        '경력직 3개월 시용 후 본채용 거부됐다면 경력 입증·평가 합리성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"10년 경력 인정받고 입사했는데, 시용 3개월 끝나는 시점에 \'적성에 안 맞다\'며 본채용 거부 통보. 동종 업계에서 같은 직무를 7년 했고, 면접에서도 그 경력이 채용 사유였어요. 평가 기준도 안 받았는데 \'능력 부족\' 한 줄로 정리됩니다." 경력직 시용은 신입 수습과 달리 ① 경력에 부합하는 업무 부여 의무 ② 평가 기준 사전 통보 ③ 본채용 거부 시 합리적·객관적 이유 + 사회통념상 상당성 ④ 채용 시 약속한 경력 평가 기준 5가지 심사를 통과해야 정당성이 평가될 여지가 있는 영역. 신입과 달리 \"교육 부족\" 변명이 어렵고, 본채용 거부 입증 부담이 더 무거운 트랙입니다. 대응은 ① 시용계약·면접기록 ② 업무 평가 기준 부재 ③ 동일 직무 비교 ④ 노동위 구제 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 경력직 시용 본채용 거부 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경력·평가·합리성·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경력 채용 vs 신입 수습 구분</strong> — 채용공고·면접·계약서상 경력 요건.</li>\n<li><strong>② 평가 기준 사전 통보 여부</strong> — 무기준 평가 시 절차 하자.</li>\n<li><strong>③ 동일 직무 다른 경력자 처우</strong> — 비교 대상 부재 시 자의적 판단.</li>\n<li><strong>④ 노동위 구제신청 (3개월 내)</strong> — 본채용 거부도 해고로 평가될 여지.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 채용 신뢰 침해·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 시용계약 중 본채용 거부도 해고에 해당하나 일반 해고보다 사용자의 재량 폭이 넓은 영역. 그러나 경력직은 \"교육 미흡\" 변명이 통하지 않아 객관적 평가가 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료확보·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 채용 자료 확보 (즉시)</strong> — 채용공고·면접기록·시용계약서.</li>\n<li><strong>2단계 — 업무 지시·평가 자료 보존 (1주)</strong> — 메일·업무 일지·중간 평가.</li>\n<li><strong>3단계 — 노동위 구제신청 (본채용 거부일 3개월 내)</strong> — 부당해고로 신청.</li>\n<li><strong>4단계 — 심문회의 (2~3개월)</strong> — 평가 합리성·소명 부재 다툼.</li>\n<li><strong>5단계 — 민사 손해배상 (필요시)</strong> — 채용 신뢰 침해·정신적 위자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">경력직 시용 본채용 거부 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 채용·평가·업무 갈래입니다.</strong></p>\n<ul>\n<li><strong>채용공고·경력 요건·면접 평가서</strong></li>\n<li><strong>시용계약서·근로계약서 (경력 인정 조항 포함)</strong></li>\n<li><strong>본채용 거부 통보서·사유서</strong></li>\n<li><strong>업무 지시 메일·업무 일지·결과물</strong></li>\n<li><strong>중간 평가·피드백 기록 (있을 시)</strong></li>\n<li><strong>동일 직무 동료 처우 비교</strong></li>\n<li><strong>전 직장 경력증명서·평가서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 평가 기준 사전 통보 없는 본채용 거부는 절차적 정의 측면에서 다툼의 출발점. \"무엇을 어떤 기준으로\" 평가했는지 회사가 입증해야 하는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>경력직 vs 신입 수습</strong> — 채용공고·면접에서 경력 요건 명시 시 시용 재량 좁아짐.</li>\n<li><strong>평가 기준 부재</strong> — 사전 통보 없으면 자의적 판단 평가 여지.</li>\n<li><strong>업무 부여 불일치</strong> — 경력과 무관한 잡무만 부여 시 평가 자체 부당.</li>\n<li><strong>3개월 기산점</strong> — 본채용 거부 통보일 기준.</li>\n<li><strong>채용 신뢰 침해</strong> — 전 직장 퇴사·이주 비용 등 신뢰이익 손해 청구 여지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 시용기간 본채용 거부 기준',
        summary:
          '대법원 2018두44647(2019.11.28 선고) 영역에서 법원은 시용기간 중 사용자의 본채용 거부 또한 해고에 해당한다고 평가될 수 있고, 그 거부에는 객관적·합리적 이유가 있어야 하며 사회통념상 상당하다고 인정되어야 한다고 본 사례 흐름이 있습니다. 경력직의 경우 채용 시 평가받은 경력에 부합하는 업무 부여와 사전 평가 기준 통보가 합리성 판단의 핵심 요소로 평가되는 영역입니다.',
        takeaway: '경력직 시용 본채용 거부는 일반 시용보다 더 엄격한 합리성 심사. 평가 기준·동종 직무 비교가 다툼 축.',
      },
    ],
    faq: [
      {
        question: '시용계약이 본채용 거부 권한을 정해놨어요',
        answer:
          '<strong>계약 조항이 있어도 객관적·합리적 이유 + 사회통념상 상당성은 여전히 심사 대상입니다.</strong>',
      },
      {
        question: '경력직인데 신입과 같은 잡무만 시켰어요',
        answer:
          '<strong>업무 부여 자체가 평가 부적정 사유로 다툴 수 있는 영역입니다.</strong> 업무 일지 보존 필수.',
      },
      {
        question: '본채용 거부에도 노동위 구제가 되나요?',
        answer:
          '<strong>네, 본채용 거부도 해고로 평가될 여지가 있어 노동위 구제 대상입니다.</strong>',
      },
      {
        question: '평가 기준을 한 번도 받지 못했어요',
        answer:
          '<strong>평가 기준 사전 통보 부재는 절차적 정의 위반의 강한 사정입니다.</strong>',
      },
      {
        question: '전 직장 퇴사 손해도 청구 가능한가요?',
        answer:
          '<strong>채용 신뢰 침해에 따른 손해로 민사 청구 가능한 영역입니다.</strong> 퇴사·이주 비용 입증 자료 보존.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '수습 해고 정당성', href: '/guide/dismissal/probation-dismissal-legality' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
      { label: '징계해고 절차', href: '/guide/dismissal/dismissal-disciplinary-procedure' },
    ],
  },

  // ─── 2. dismissal-business-trip-remote-fire-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-business-trip-remote-fire-track',
    keyword: '출장 중 원격 해고',
    questionKeyword: '출장 중인데 전화·메일로 해고 통보를 받았어요. 소명 기회도 없었습니다.',
    ctaKeyword: '원격 해고 통보 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '출장·재택 중 원격 해고 통보 — 5단계 절차하자 다툼 | 로앤가이드',
      description:
        '출장·재택 중 전화·메일로 해고 통보됐다면 서면 통지·소명 기회 5가지 절차하자 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"해외 출장 3일차에 본사에서 영상통화로 \'다음 주부터 출근 안 해도 된다\'며 해고 통보. 다음날 메일로 사유서 한 줄이 왔고, 인사위는 열리지도 않았어요. 소명 기회도 없이 출장지에서 짐 정리를 하라고 합니다." 근기법 제27조는 해고 사유·시기를 서면으로 통지해야 한다고 정한 영역. 출장·재택 중 전화·구두·메신저 해고는 ① 서면 통지 위반 ② 인사위 절차 생략 ③ 소명 기회 부재 ④ 사유 특정성 부족 5가지 절차하자가 결합되는 경우가 많습니다. 절차 하자만으로도 해고 무효 평가가 가능한 영역. 대응은 ① 통지 형태·시점 보존 ② 인사위 부재 입증 ③ 소명 기회 부재 ④ 노동위 구제 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 원격 해고 통보 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 통지형태·인사위·소명·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 서면 통지 위반</strong> — 근기법 27조: 사유·시기 서면 명시.</li>\n<li><strong>② 인사위 절차 부재</strong> — 취업규칙상 인사위 규정 vs 실제.</li>\n<li><strong>③ 소명 기회 부재</strong> — 출장 중 일방 통보는 방어권 침해.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 부당해고 + 절차 하자.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 서면 통지·소명 기회·인사위 중 하나라도 빠지면 \"절차 하자\"로 해고 자체가 무효로 평가될 여지가 있는 영역. 사유의 정당성 다툼과 별도 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 절차하자 입증·구제 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 통지 형태·시점 보존 (즉시)</strong> — 영상통화 녹화·메일 원문·출장 일정.</li>\n<li><strong>2단계 — 인사위·취업규칙 확인 (1주)</strong> — 회사 내규 + 실제 인사위 부재 입증.</li>\n<li><strong>3단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 절차하자 + 사유 부당성 병행.</li>\n<li><strong>4단계 — 심문회의 (2~3개월)</strong> — 서면 통지·소명 기회 부재 강조.</li>\n<li><strong>5단계 — 민사 손해배상 (필요시)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">원격 해고 통보 절차하자 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 통지·절차·인사 갈래입니다.</strong></p>\n<ul>\n<li><strong>해고 통보 메일·메신저·녹취 (영상통화)</strong></li>\n<li><strong>출장 일정·항공권·체류 기록</strong></li>\n<li><strong>취업규칙 (해고·인사위 규정)</strong></li>\n<li><strong>인사위 회의록 (요청 후 회사 답변)</strong></li>\n<li><strong>소명 요청 메일·답변</strong></li>\n<li><strong>해고 사유서 (서면 요청)</strong></li>\n<li><strong>근로계약서·인사기록카드</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 영상통화 해고는 그 자체가 \"서면 통지 위반\" 강력한 입증 자료. 통화 시각·참여자·내용을 즉시 메모로 정리.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>서면 통지 형식</strong> — 메일도 서면으로 인정될 여지(전자문서법) vs 부적합 사례.</li>\n<li><strong>사유 특정성</strong> — \"능력 부족\" 한 줄은 사유 특정성 부족.</li>\n<li><strong>인사위 생략</strong> — 취업규칙상 의무 시 절차 하자.</li>\n<li><strong>소명 기회</strong> — 출장 복귀 후라도 부여해야 함.</li>\n<li><strong>해고일 효력</strong> — 통보일 vs 서면 도달일 분기.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 서면 통지·절차 하자',
        summary:
          '대법원 2017다257869(2019.11.28 선고) 영역에서 법원은 사용자의 해고 등 인사권 행사가 업무상 필요성에 비해 근로자가 입는 불이익이 현저히 크거나 절차적 정의에 반한다고 평가될 수 있는 경우 권리남용으로 평가될 여지가 있다고 본 사례 흐름이 있습니다. 서면 통지·인사위·소명 기회 부재 결합 시 절차 하자만으로도 해고 무효 평가가 가능한 영역입니다.',
        takeaway: '서면·인사위·소명 3대 절차 중 하나라도 빠지면 무효 평가 여지. 사유 정당성과 별도 트랙.',
      },
    ],
    faq: [
      {
        question: '메일 해고도 서면 통지로 인정되나요?',
        answer:
          '<strong>전자문서법상 인정될 여지가 있으나 사유 특정성·도달 입증이 필요한 영역입니다.</strong>',
      },
      {
        question: '출장 복귀 후 소명 기회를 줬다고 주장하면요?',
        answer:
          '<strong>해고 통보 \'전\'에 부여해야 합니다.</strong> 사후 형식적 면담은 소명으로 인정되기 어려운 영역.',
      },
      {
        question: '인사위 부재 입증은 어떻게 하나요?',
        answer:
          '<strong>회의록 요청 → 미제공 답변 보존이 핵심 증거입니다.</strong>',
      },
      {
        question: '"성과 부족" 한 줄 사유면 어떻게 다투나요?',
        answer:
          '<strong>구체적 평가 기준·근거 자료 부재 시 사유 특정성 부족 다툼 가능합니다.</strong>',
      },
      {
        question: '영상통화 녹화가 없으면 어떻게 입증하나요?',
        answer:
          '<strong>동료·참석자 진술서 + 통화 직후 메모·이메일로 입증 가능합니다.</strong>',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '해고 서면 통지', href: '/guide/dismissal/dismissal-written-notice-requirement' },
      { label: '소명 기회', href: '/guide/dismissal/dismissal-disciplinary-warning-no-defense-chance' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
    ],
  },

  // ─── 3. dismissal-subsidiary-spinoff-fired-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-subsidiary-spinoff-fired-track',
    keyword: '자회사 분사 후 해고',
    questionKeyword: '회사가 사업부를 자회사로 분사하더니 한 달 만에 자회사 청산하며 해고했어요.',
    ctaKeyword: '분사 후 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '자회사 분사·매각 후 즉시 해고 — 5단계 영업양도 위장 다툼 | 로앤가이드',
      description:
        '본사가 분사·매각 직후 자회사 청산·해고했다면 영업양도 고용승계 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본사가 \'기획사업부를 분사해 효율화한다\'며 자회사 신설, 본인은 자회사로 이적. 한 달 만에 자회사가 사업을 본사로 다시 흡수하면서 본인만 해고. 본사 직원은 그대로 본사 소속, 본인만 \'자회사 소속이라 본사와 무관\'이라며 정리됐어요." 분사·매각 후 즉시 해고는 ① 영업양도의 실질 평가 ② 고용 승계 의무 ③ 분사가 해고 회피 위장인지 ④ 사용자 동일성 인정 여부 5가지 심사가 핵심. 대법원은 영업의 동일성을 유지한 채 양도가 이뤄지면 고용 관계도 원칙적으로 승계된다는 흐름. 분사 직후 청산은 \"위장 영업양도\"로 평가될 여지가 있는 영역입니다. 대응은 ① 분사·이적 자료 ② 본사·자회사 인사 연속성 ③ 청산 사유 합리성 ④ 노동위 구제 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 분사 후 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 분사·승계·동일성·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 분사·이적의 실질</strong> — 사업 분리 vs 형식만 분리.</li>\n<li><strong>② 영업양도 평가</strong> — 인적·물적 설비 동일성 유지.</li>\n<li><strong>③ 고용 승계 의무</strong> — 원칙적 승계, 거부 시 정당 사유 부담.</li>\n<li><strong>④ 노동위 구제신청 (해고일 3개월 내)</strong> — 본사·자회사 모두 피신청인.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 분사 후 즉시 청산·해고는 위장 영업양도 평가 여지가 큰 영역. 본사가 사실상 사용자였다고 평가될 경우 본사에도 해고 무효·임금 청구가 가능합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 분사 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 분사·이적 자료 확보 (즉시)</strong> — 분사 공지·이적 동의서·자회사 등기.</li>\n<li><strong>2단계 — 인사 연속성 입증 (1~2주)</strong> — 본사·자회사 업무·관리자·근무지 동일성.</li>\n<li><strong>3단계 — 노동위 구제신청 (3개월)</strong> — 본사·자회사 공동 피신청인.</li>\n<li><strong>4단계 — 심문회의 (2~3개월)</strong> — 영업양도·고용승계 다툼.</li>\n<li><strong>5단계 — 민사 해고무효·임금청구</strong> — 본사 사용자 동일성 다툼.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">분사 후 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 분사·이적·고용 갈래입니다.</strong></p>\n<ul>\n<li><strong>분사 공지·이사회 결의서</strong></li>\n<li><strong>자회사 이적 동의서·근로계약서</strong></li>\n<li><strong>본사·자회사 등기부등본·법인등록증</strong></li>\n<li><strong>업무·근무지·관리자 동일성 입증</strong></li>\n<li><strong>해고 통보서·자회사 청산 공고</strong></li>\n<li><strong>본사 잔류 직원 명단·인사발령</strong></li>\n<li><strong>본사 채용공고 (분사 후 같은 직무)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자회사 청산 후 본사가 같은 업무로 인력 채용했다면 위장 영업양도 강력 사정. 채용공고 캡처 즉시 보존.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>영업양도 실질</strong> — 인적·물적 설비 동일성 유지가 핵심.</li>\n<li><strong>이적 동의 강요</strong> — 사실상 강요된 이적 동의는 효력 다툼 가능.</li>\n<li><strong>본사 사용자성</strong> — 사실상 지휘·감독·임금 지급 시 본사 책임.</li>\n<li><strong>청산 사유 합리성</strong> — 한 달 내 청산은 분사 실질 부정 사정.</li>\n<li><strong>본사 재채용</strong> — 같은 업무 재채용 시 위장 영업양도 강력 사정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 영업양도와 고용 승계',
        summary:
          '대법원 2018두44647(2019.11.28 선고) 영역 등에서 법원은 영업의 동일성을 유지한 채 일체로서 이전된다고 평가될 수 있는 경우 원칙적으로 고용 관계도 그대로 승계되고, 사용자가 일부 근로자만 제외하려면 정당한 이유의 입증이 필요하다고 본 사례 흐름이 있습니다.',
        takeaway: '분사·매각 후 일부 해고는 위장 영업양도 평가 여지. 본사 사용자성·인사 연속성이 다툼 축.',
      },
    ],
    faq: [
      {
        question: '자회사 이적 동의서에 사인했는데도 다툴 수 있나요?',
        answer:
          '<strong>강요·기망 입증 시 동의 효력 다툼 가능합니다.</strong> 동의 당시 분사·청산 계획 미고지면 의사 하자 사정.',
      },
      {
        question: '본사 잔류 직원은 그대로 일하고 있어요',
        answer:
          '<strong>1인 표적·차별 사정 강력합니다.</strong> 본사 인사발령 명단 보존 필수.',
      },
      {
        question: '본사에도 책임을 물을 수 있나요?',
        answer:
          '<strong>사실상 지휘·감독·임금 지급이 있었다면 본사 사용자성 인정 여지 있습니다.</strong>',
      },
      {
        question: '자회사 청산이 한 달 만에 결정됐어요',
        answer:
          '<strong>분사 실질 부정·해고 회피 위장의 강력 사정입니다.</strong> 청산 공고일·이사회 결의 시점 보존.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '영업양도 고용승계', href: '/guide/dismissal/dismissal-business-transfer-employment-succession-refused' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '경영상 해고', href: '/guide/dismissal/dismissal-redundancy-requirements' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
    ],
  },

  // ─── 4. dismissal-union-join-evaluation-low-fire-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-union-join-evaluation-low-fire-track',
    keyword: '노조 가입 후 평가 최하 해고',
    questionKeyword: '노조 가입 한 달 만에 인사평가가 최하로 떨어지더니 해고됐어요. 부당노동행위인가요?',
    ctaKeyword: '노조 가입 후 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '노조 가입 후 평가 최하 해고 — 5단계 부당노동행위 다툼 | 로앤가이드',
      description:
        '노조 가입 직후 평가 하향·해고됐다면 부당노동행위·부당해고 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"노조 가입 한 달 만에 평소 B 받던 인사평가가 D로 떨어졌고, 두 달 뒤 \'2회 연속 D는 해고 사유\'라며 통보. 같은 평가를 받은 다른 직원은 시정 기회를 받았는데 본인만 즉시 해고됐어요." 노동조합법 제81조는 노조 가입·활동을 이유로 한 해고·차별을 부당노동행위로 절대 금지하는 영역. 노조 가입과 평가·해고 사이의 시간 근접성·합리적 사유 부재가 입증되면 ① 부당노동행위 + 부당해고 결합 다툼 ② 노동위 구제신청 ③ 사업주 형사처벌(노조법 90조) ④ 민사 손해배상 가능한 영역입니다. 대응은 ① 노조 가입 시점 ② 평가 변화 ③ 동료 비교 ④ 노동위 구제 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 노조 가입 후 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 시기·평가·비교·구제·형사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 노조 가입-평가 변화 시간 근접성</strong> — 1~3개월 내면 추정 강함.</li>\n<li><strong>② 평가 사유 합리성</strong> — 객관적 평가 기준·근거 자료.</li>\n<li><strong>③ 동일 평가 동료 처우 비교</strong> — 같은 D인데 본인만 해고면 차별.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 부당노동행위 + 부당해고 병행.</li>\n<li><strong>⑤ 노조법 90조 형사 처벌</strong> — 2년 이하 징역 또는 2천만원 이하 벌금.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 노조 가입 직후 평가 하향·해고는 부당노동행위 추정 강력 사정. 노동위 구제 + 노조법 형사 처벌 + 민사 손해배상 3중 트랙이 가능한 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·형사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 노조 가입 자료 확보 (즉시)</strong> — 가입원·노조 통보 메일·시점 입증.</li>\n<li><strong>2단계 — 평가 변화·동료 비교 자료 (1~2주)</strong> — 전후 인사평가·동일 평가 동료 처우.</li>\n<li><strong>3단계 — 노동위 구제신청 (3개월)</strong> — 부당노동행위 + 부당해고.</li>\n<li><strong>4단계 — 노조법 90조 형사 진정</strong> — 노조법상 부당노동행위.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">노조 가입 후 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 노조·평가·해고 갈래입니다.</strong></p>\n<ul>\n<li><strong>노조 가입원·접수 통지</strong></li>\n<li><strong>사용자에 노조 가입 통보 메일·문서</strong></li>\n<li><strong>인사평가 (가입 전 vs 후)</strong></li>\n<li><strong>동일 평가 동료 처우 자료</strong></li>\n<li><strong>해고 통보서·사유서</strong></li>\n<li><strong>노조 활동 기록 (회의·교섭)</strong></li>\n<li><strong>관리자·인사팀 메일·발언 녹취</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 관리자가 \"노조 가입 후 분위기 안 좋다\" 류 발언했다면 부당노동행위 의도 입증 핵심 증거. 메일·녹취 즉시 보존.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>인과관계 추정</strong> — 시간 근접성 + 합리적 사유 부재 결합.</li>\n<li><strong>평가 객관성</strong> — 평가 기준·근거 자료 부재 시 자의적 판단.</li>\n<li><strong>동료 비교</strong> — 같은 평가 다른 처우 시 차별 강력 사정.</li>\n<li><strong>관리자 발언</strong> — \"노조 가입 후\" 류 언급은 의도 입증 직접 증거.</li>\n<li><strong>3중 트랙</strong> — 노동위 구제 + 노조법 형사 + 민사 동시 진행 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>한국노총 02-6277-0000 / 민주노총 02-2670-9100</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부당노동행위와 인사평가',
        summary:
          '대법원 2018두48601(2018.11.29 선고) 영역에서 법원은 사용자가 노동조합 활동을 이유로 근로자에게 불이익한 처분을 한 것이라고 평가될 수 있는지를 판단할 때 시간적 근접성·처분의 합리적 사유·다른 근로자와의 비교·사용자의 의사를 종합 고려해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '노조 가입 직후 평가·해고는 시간 근접성 + 사유 합리성 부재로 부당노동행위 추정 가능 영역.',
      },
    ],
    faq: [
      {
        question: '노조 가입 사실을 회사가 어떻게 알았을까요?',
        answer:
          '<strong>노조가 단체교섭 요청 등 활동 과정에서 통지하거나, 본인이 회사에 직접 통보한 경우입니다.</strong>',
      },
      {
        question: '인사평가가 객관적이라고 회사가 주장해요',
        answer:
          '<strong>평가 기준 사전 통보·근거 자료가 부재하면 객관성 부인됩니다.</strong>',
      },
      {
        question: '같은 평가 동료는 시정 기회를 받았어요',
        answer:
          '<strong>처우 차별의 강력 사정입니다.</strong> 동료 인사기록·시정 통지 자료 보존.',
      },
      {
        question: '노조법 형사 처벌은 어떻게 신청하나요?',
        answer:
          '<strong>관할 노동청에 진정 또는 직접 고발 가능합니다.</strong> 노조법 90조: 2년 이하 징역 또는 2천만원 이하 벌금.',
      },
      {
        question: '회사가 "노조와 무관하게 평가했다"고 주장하면요?',
        answer:
          '<strong>관리자 발언·동료 처우 비교가 의도 입증의 핵심입니다.</strong>',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '부당노동행위', href: '/guide/dismissal/dismissal-unfair-labor-practice' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
      { label: '징계해고 절차', href: '/guide/dismissal/dismissal-disciplinary-procedure' },
    ],
  },

  // ─── 5. dismissal-workers-comp-return-fail-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-workers-comp-return-fail-track',
    keyword: '산재 요양 후 복직 거부',
    questionKeyword: '산재 요양 마치고 복직하려는데 회사가 적응 못한다며 해고했어요.',
    ctaKeyword: '산재 후 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '산재 요양 후 복직 거부 — 5단계 산업재해법 보호 다툼 | 로앤가이드',
      description:
        '산재 요양 종료 후 복직 거부·해고됐다면 근기법 23조 + 산재보험법 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"공장에서 일하다 허리 디스크 수술받고 6개월 산재 요양 받았습니다. 의사 소견서로 복귀 가능하다고 받고 회사에 통보했는데, \'무거운 작업은 못 한다\'며 다른 부서 자리도 없다고 해고. 산재 직전엔 매번 우수 사원 평가받던 직원이었어요." 근기법 제23조 제2항은 \'요양 기간과 그 후 30일\' 동안 해고를 절대 금지하는 영역(위반 시 5년 이하 징역 또는 5천만원 이하 벌금). 요양 종료 30일 이후라도 ① 직무 재배치 의무 ② 산재 후유증을 이유로 한 차별 금지 ③ 합리적 사유 입증 부담 ④ 사회통념상 상당성 5가지 심사가 핵심. 대응은 ① 산재 요양 자료 ② 복귀 의사 표시 ③ 직무 재배치 시도 부재 ④ 노동위 구제 ⑤ 형사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 산재 후 복직 거부 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 시기·재배치·차별·구제·형사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 요양 종료 30일 이내 해고</strong> — 근기법 23조 2항 절대 금지.</li>\n<li><strong>② 직무 재배치 의무</strong> — 산재 전 업무 + 다른 적합 직무 검토.</li>\n<li><strong>③ 후유증 차별</strong> — 산재를 이유로 한 차별 금지.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 부당해고.</li>\n<li><strong>⑤ 근기법 110조 형사 진정</strong> — 5년 이하 징역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 요양 종료 30일 이내 해고는 정당한 사유와 무관하게 절대 금지된 영역. 30일 후라도 직무 재배치 시도 없이 \"적응 못한다\"고 해고하면 합리성 부정 평가 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 산재·복귀·구제 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 산재·요양 자료 보존 (즉시)</strong> — 산재 승인서·요양 종료 의사 소견·요양 기간.</li>\n<li><strong>2단계 — 복귀 의사·재배치 요청 (1~2주)</strong> — 내용증명·메일로 복귀 의사 명시.</li>\n<li><strong>3단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 부당해고 + 산재 차별.</li>\n<li><strong>4단계 — 노동청 형사 진정 (근기법 23조 2항 위반)</strong> — 5년 이하 징역.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">산재 후 복직 거부 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 산재·복귀·해고 갈래입니다.</strong></p>\n<ul>\n<li><strong>산재 승인서·요양 결정서</strong></li>\n<li><strong>요양 종료 의사 소견서·복귀 가능 진단</strong></li>\n<li><strong>복귀 의사 통지 내용증명·메일</strong></li>\n<li><strong>회사 답변·재배치 시도 부재 입증</strong></li>\n<li><strong>해고 통보서·사유서</strong></li>\n<li><strong>산재 전 인사평가·근무 평가</strong></li>\n<li><strong>회사 채용공고·공석 정보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 의사 소견에 \"복귀 가능, 무거운 작업 제한\"이라고 적혀 있다면 회사는 가벼운 업무로 재배치 시도 의무. 시도 없이 해고는 합리성 부정 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>30일 절대 보호 기간</strong> — 요양 종료 후 30일은 해고 절대 금지.</li>\n<li><strong>재배치 시도 부재</strong> — 다른 직무 공석 검토 없이 해고는 회피 노력 부재.</li>\n<li><strong>후유증 차별</strong> — 산재 자체를 이유로 한 처분은 차별 평가.</li>\n<li><strong>의사 소견 vs 회사 판단</strong> — 의학적 소견이 회사 자의적 판단보다 우선.</li>\n<li><strong>중대재해 사업장</strong> — 산재 빈발 시 사용자 책임 가중.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 산재 요양 후 해고 제한',
        summary:
          '대법원 2009다99396(2010.04.15 선고) 영역에서 법원은 근로기준법 제23조 제2항이 정한 요양 기간과 그 후 30일 동안의 해고 제한 규정에 위반된 해고는 무효라고 평가될 수 있고, 그 30일이 지난 후라도 산재를 사유로 한 해고는 정당한 이유에 대한 사용자의 입증 부담이 상대적으로 무거워진다고 본 사례 흐름이 있습니다.',
        takeaway: '요양 종료 30일 이내는 절대 보호, 그 후도 재배치 시도 부재 시 합리성 부정 강한 사정.',
      },
    ],
    faq: [
      {
        question: '요양 종료 30일 지난 시점에 해고됐어요',
        answer:
          '<strong>30일이 지났어도 산재를 이유로 한 해고는 정당 사유 입증 부담 무거운 영역입니다.</strong>',
      },
      {
        question: '의사 소견에 "제한적 복귀"라고 적혀 있어요',
        answer:
          '<strong>회사는 제한 범위 내 직무 재배치 시도 의무가 있는 영역입니다.</strong>',
      },
      {
        question: '회사가 "공석이 없다"고 주장하면요?',
        answer:
          '<strong>채용공고·인사발령 자료로 공석 존재 입증 가능합니다.</strong>',
      },
      {
        question: '산재 승인이 아직 안 났을 때 해고되면요?',
        answer:
          '<strong>산재 신청 자체를 이유로 한 해고도 부당해고 + 차별 사유입니다.</strong>',
      },
      {
        question: '형사 진정과 노동위는 동시에 가능한가요?',
        answer:
          '<strong>병행 가능합니다.</strong> 노동위 구제 + 노동청 형사 진정 + 민사 손해배상 3중 트랙.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '의료휴직 복귀 거부', href: '/guide/dismissal/dismissal-medical-leave-return-deployment-refused-track' },
      { label: '산재 후 차별', href: '/guide/dismissal/dismissal-workers-comp-discrimination' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
    ],
  },
];
