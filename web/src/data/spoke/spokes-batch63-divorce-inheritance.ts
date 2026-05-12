import { SpokePage } from '../spoke-pages';

// batch63 divorce·inheritance — 7개 (2026-05-13)
//
// 고유 존재 이유:
// divorce 4:
// 1. 외국인 배우자 + 혼인귀화·국적·체류 — 국적 미취득 + 이혼 시 체류·자녀 분리 트랙.
// 2. 사실혼 해소 + 국민연금 유족 — 혼인신고 미필 사실혼 배우자 연금 청구 트랙.
// 3. 결혼 1년 내 혼인무효 (정신질환·중요사실 미고지) — 단기간 혼인의 무효 vs 이혼 트랙.
// 4. 종교적 사유 이혼 (강제 종교활동·개종 강요) — 신앙 차이로 인한 혼인파탄 입증 트랙.
// inheritance 3:
// 1. 유류분 + 특별수익 차감 — 생전 증여 받은 상속인의 유류분 산정 트랙.
// 2. 상속포기 후 대습 손자녀 확산 — 자녀·손자녀까지 빚 넘어가는 흐름 차단 트랙.
// 3. 사망보험금 vs 상속재산 (수익자 지정) — 보험금이 상속재산인지 수익자 고유 권리인지 트랙.

export const spokesBatch63DivorceInheritance: SpokePage[] = [
  // ─── 1. divorce-foreign-spouse-naturalization-track ───
  {
    domain: 'divorce',
    slug: 'divorce-foreign-spouse-naturalization-track',
    keyword: '외국인 배우자 혼인귀화 이혼',
    questionKeyword: '외국인 배우자와 결혼 후 귀화 신청 중인데 이혼하면 국적·체류는 어떻게 되나요?',
    ctaKeyword: '외국인 배우자 귀화 이혼 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '외국인 배우자 혼인귀화 이혼 — 5단계 국적·체류 점검 | 로앤가이드',
      description:
        '외국인 배우자와 이혼 시 혼인귀화·체류자격·자녀 양육권 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"베트남 출신 배우자와 결혼 3년, 혼인귀화 신청 중에 가정폭력으로 이혼 결심. 귀화 진행은 중단되나요? 체류자격(F-6)이 취소되나요? 한국에서 자녀와 함께 살 수 있나요?" 외국인 배우자 이혼은 ① 혼인귀화 (간이귀화·국적법 제6조) ② 체류자격 F-6 (결혼이민) ③ 자녀 양육권·국적 ④ 본국 송환 위험 ⑤ 본인 사유 입증 영역. 본인 책임 없는 사유(가정폭력·유기 등)는 체류·귀화에 보호적으로 평가될 여지가 있는 사례. 대응 트랙은 ① 사유 입증 ② 출입국 신고 ③ 체류 연장 ④ 이혼 진행 ⑤ 양육·국적 결정 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 외국인 배우자 이혼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사유·체류·이혼·양육·국적 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 본인 무책 사유 입증</strong> — 가정폭력·유기·외도.</li>\n<li><strong>② F-6 체류자격 유지 신청</strong> — 출입국 통보.</li>\n<li><strong>③ 자녀 양육권 동시 청구</strong></li>\n<li><strong>④ 가정법원 재판이혼</strong></li>\n<li><strong>⑤ 귀화 절차 보호적 처리</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "본인 책임 없는 사유"가 체류·귀화 보호의 분기점. 폭력·유기 입증되면 F-6 유지 + 귀화 진행 가능 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 이혼·체류 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 가정법원 재판이혼 + 출입국 절차 병행 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 폭력·유기 증거 수집 (즉시)</strong></li>\n<li><strong>2단계 — 출입국·외국인청 사유 신고</strong></li>\n<li><strong>3단계 — F-6 → F-6-3 (이혼 후) 변경 검토</strong></li>\n<li><strong>4단계 — 가정법원 이혼·양육권 청구</strong></li>\n<li><strong>5단계 — 자녀 국적·귀화 결정</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">외국인 배우자 이혼·체류 대응을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 본인·사유·자녀·체류 갈래입니다.</strong></p>\n<ul>\n<li><strong>외국인등록증·여권</strong></li>\n<li><strong>혼인관계증명서 (영문 병기)</strong></li>\n<li><strong>112·진단서·CCTV (폭력 입증)</strong></li>\n<li><strong>유기·생활 단절 증거 (계좌·문자)</strong></li>\n<li><strong>자녀 출생증명·가족관계증명</strong></li>\n<li><strong>본인 한국 생활 입증 (거주·취업)</strong></li>\n<li><strong>본국 송환 시 위험 자료 (있다면)</strong></li>\n<li><strong>통역사·번역 확인서</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"본인 책임" 판단</strong> — 가정폭력·유기 입증.</li>\n<li><strong>F-6 → F-6-3 전환</strong> — 양육·생계 사유.</li>\n<li><strong>자녀 양육권</strong> — 외국인이라고 자동 불리 아님.</li>\n<li><strong>본국 송환 시 자녀 분리</strong></li>\n<li><strong>통역·번역 부담</strong> — 법원 직권 통역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>다누리콜센터 1577-1366</strong></li>\n<li><strong>출입국·외국인정보센터 1345</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 외국인 배우자 혼인무효·체류',
        summary:
          '대법원 2017므1224(2022.01.27) 혼인의무효및위자료 사건 등에서 법원은 외국인 배우자와의 혼인관계 종료 사유와 본인 책임 여부에 따라 체류·귀화 보호 정도가 달라질 수 있고, 가정폭력·유기 등 본인에게 책임 없는 사유가 인정되는 경우 보호적으로 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '"본인 책임 없는 사유" = 체류·귀화 보호 분기점. 폭력·유기 증거가 결정적.',
      },
    ],
    faq: [
      {
        question: '귀화 신청 중인데 이혼하면 자동 취소되나요?',
        answer:
          '<strong>본인 책임 없는 사유 인정 시 계속 진행 가능 영역입니다.</strong>',
      },
      {
        question: 'F-6 체류자격은 이혼 즉시 취소되나요?',
        answer:
          '<strong>본인 책임 없는 사유면 F-6-3 으로 전환 가능합니다.</strong>',
      },
      {
        question: '자녀 양육권 외국인이라고 불리한가요?',
        answer:
          '<strong>아닙니다. 자녀 최선의 이익이 기준입니다.</strong>',
      },
      {
        question: '본국 송환되면 자녀와 분리되나요?',
        answer:
          '<strong>양육권 + 체류 유지 시 동반 가능 영역입니다.</strong>',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '외국인 배우자 이혼', href: '/guide/divorce/divorce-foreign-spouse-litigation-procedure' },
      { label: '국적·체류 영향', href: '/guide/divorce/divorce-foreign-spouse-visa-impact' },
      { label: '국제 양육권', href: '/guide/divorce/divorce-foreign-spouse-custody-jurisdiction' },
      { label: '재판이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
      { label: '가정폭력 보호명령', href: '/guide/divorce/divorce-domestic-violence-protection-order-parallel' },
    ],
  },

  // ─── 2. divorce-de-facto-pension-survivor-track ───
  {
    domain: 'divorce',
    slug: 'divorce-de-facto-pension-survivor-track',
    keyword: '사실혼 국민연금 유족',
    questionKeyword: '12년 동거하던 사실혼 배우자가 사망했어요. 국민연금 유족연금 받을 수 있나요?',
    ctaKeyword: '사실혼 연금 청구 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사실혼 + 국민연금 유족연금 — 5단계 청구 입증 점검 | 로앤가이드',
      description:
        '사실혼 배우자 사망 시 국민연금 유족연금·분할연금 청구 5가지 입증 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"12년간 동거하며 자녀 2명을 함께 키운 사실혼 배우자. 혼인신고를 미루다 갑작스러운 사망. 유족연금 청구 가능한가요? 본처(법률혼 배우자)와 다툼 가능성도 있어요." 사실혼 배우자도 국민연금법 제3조에 따라 "사실상 혼인관계"가 인정되면 유족연금 수급 영역. 단 ① 동거 + 부부 공동생활 ② 사회적 인정 ③ 본처 없거나 사실상 이혼 상태 입증 필요. 본처와 경합하면 법원 판단 영역. 대응 트랙은 ① 사실혼 입증 ② 본처 상태 확인 ③ 국민연금공단 청구 ④ 거부 시 행정심판 ⑤ 소송 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 사실혼 연금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·경합·청구·심판·소송 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실혼 관계 입증</strong> — 동거·자녀·공동생활.</li>\n<li><strong>② 본처 상태 확인</strong> — 사망·이혼·별거.</li>\n<li><strong>③ 국민연금공단 유족연금 청구</strong></li>\n<li><strong>④ 거부 시 행정심판</strong></li>\n<li><strong>⑤ 행정소송</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "사실상 혼인관계"는 동거 + 사회적 인정 + 부부 공동생활 3요소. 본처 사실상 이혼 상태 입증되면 사실혼이 우선될 여지가 있는 사례.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·청구·구제 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사실혼 입증자료 수집 (즉시)</strong></li>\n<li><strong>2단계 — 본처 상태·경합 점검</strong></li>\n<li><strong>3단계 — 국민연금공단 유족연금 신청</strong></li>\n<li><strong>4단계 — 거부 시 90일 내 행정심판</strong></li>\n<li><strong>5단계 — 행정소송 (최종 구제)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">사실혼 연금 청구를 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실혼·재산·경합 갈래입니다.</strong></p>\n<ul>\n<li><strong>주민등록등본 (동거 기간 입증)</strong></li>\n<li><strong>자녀 출생신고·가족관계증명</strong></li>\n<li><strong>공동 통장·재산 자료</strong></li>\n<li><strong>친지·이웃 진술서 (사회적 인정)</strong></li>\n<li><strong>사진·기념일 자료</strong></li>\n<li><strong>본처 관련 자료 (사망·이혼·별거)</strong></li>\n<li><strong>사망자 국민연금 가입이력</strong></li>\n<li><strong>본인 신분증</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>본처와 경합</strong> — 사실상 이혼 상태 입증.</li>\n<li><strong>동거 기간 충족</strong> — 보통 1년 이상 권장 영역.</li>\n<li><strong>사회적 인정</strong> — 친지·직장 인지.</li>\n<li><strong>분할연금 vs 유족연금</strong> — 별도 제도.</li>\n<li><strong>거부 시 행정심판 90일</strong> — 기한 절대.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>국민연금공단 1355</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 안내</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실혼 배우자 연금 수급',
        summary:
          '대법원 2018두65088(2019.06.13) 연금분할비율별도결정거부처분취소 사건 등에서 법원은 국민연금법상 "배우자"에는 사실상 혼인관계에 있는 자도 포함되며, 동거·공동생활·사회적 인정 등 요건을 갖춘 사실혼 배우자가 본처와 경합하는 경우에도 본처가 사실상 이혼 상태로 평가되면 사실혼 배우자에게 수급권이 인정될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '사실혼도 국민연금 수급 가능. 본처와 경합 시 "사실상 이혼 상태" 입증이 핵심.',
      },
    ],
    faq: [
      {
        question: '동거 몇 년 이상이면 사실혼 인정되나요?',
        answer:
          '<strong>기간보다 공동생활 실질이 우선이나 보통 1년 이상 권장 영역입니다.</strong>',
      },
      {
        question: '본처와 경합하면 누가 받나요?',
        answer:
          '<strong>본처 사실상 이혼 상태 입증 시 사실혼 우선될 여지가 있습니다.</strong>',
      },
      {
        question: '분할연금도 청구할 수 있나요?',
        answer:
          '<strong>이혼 시 별도 제도(분할연금)와 유족연금은 구분됩니다.</strong>',
      },
      {
        question: '거부 통보 받았을 때 어떻게 하나요?',
        answer:
          '<strong>90일 내 행정심판·소송 가능합니다.</strong>',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '사실혼 재산분할', href: '/guide/divorce/divorce-de-facto-marriage-property-division-scope' },
      { label: '사실혼 해소', href: '/guide/divorce/divorce-de-facto-marriage-dissolution' },
      { label: '국민연금 분할', href: '/guide/divorce/divorce-pension-division-method' },
      { label: '공무원연금 분할', href: '/guide/divorce/divorce-public-servant-pension-split' },
      { label: '황혼 연금분할', href: '/guide/divorce/divorce-gray-pension-split-late-life-alimony' },
    ],
  },

  // ─── 3. divorce-marriage-annulment-mental-illness-track ───
  {
    domain: 'divorce',
    slug: 'divorce-marriage-annulment-mental-illness-track',
    keyword: '혼인무효 정신질환 미고지',
    questionKeyword: '결혼 6개월 만에 배우자 조현병을 알게 됐어요. 이혼 말고 혼인무효 가능한가요?',
    ctaKeyword: '혼인무효 정신질환 정리',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '혼인무효 정신질환 미고지 — 5단계 단기간 결혼 점검 | 로앤가이드',
      description:
        '결혼 직후 배우자 정신질환·중요사실 미고지를 알게 됐다면 혼인무효·이혼 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"결혼 6개월. 배우자가 결혼 전부터 조현병으로 치료받았는데 숨겼던 사실 발견. 이혼은 1년차에도 가능하다는데 \'혼인무효\'는 어떻게 다른가요?" 혼인무효는 ① 합의 없는 혼인 ② 8촌 이내 혈족 ③ 중대한 사기·강박·착오 영역으로 한정. 정신질환·중대 질병 미고지는 상황에 따라 무효 인정될 여지가 있으나 일반적으로는 \'재판이혼\'(민법 제840조)이 현실적. 무효 인정되면 혼인관계 자체가 없었던 것으로 처리. 대응 트랙은 ① 사기·미고지 입증 ② 무효 vs 이혼 선택 ③ 위자료·재산분할 ④ 법원 청구 ⑤ 등기 정정 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 혼인무효·이혼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·선택·청구·판단·등기 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사기·미고지 입증</strong> — 결혼 전 알았으면 결혼 안 함.</li>\n<li><strong>② 무효 vs 이혼 선택</strong> — 효과 차이.</li>\n<li><strong>③ 위자료·재산분할 청구</strong></li>\n<li><strong>④ 가정법원 청구</strong></li>\n<li><strong>⑤ 가족관계등록부 정정</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 무효는 "혼인이 처음부터 없었던 것". 이혼은 "혼인 관계 해소". 무효는 사기·강박·착오 영역 엄격. 대부분은 재판이혼이 현실적.</blockquote>',
      },
      {
        title: 'Q. 무효와 이혼은 어떻게 다른가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 효과·요건이 다릅니다.</strong></p>\n<ul>\n<li><strong>혼인무효</strong> — 처음부터 없었던 것. 사기·강박·근친혼 영역 한정.</li>\n<li><strong>혼인취소</strong> — 일정 기간 내 무효사유 주장. 효과는 장래.</li>\n<li><strong>재판이혼</strong> — 민법 제840조 6가지 사유. 가장 현실적.</li>\n<li><strong>위자료</strong> — 모든 경우 청구 가능.</li>\n<li><strong>등기부 영향</strong> — 무효는 정정, 이혼은 \'이혼\' 기재.</li>\n</ul>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·청구·등기 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 미고지·사기 증거 수집 (즉시)</strong></li>\n<li><strong>2단계 — 무효·취소·이혼 선택</strong></li>\n<li><strong>3단계 — 가정법원 청구</strong></li>\n<li><strong>4단계 — 위자료·재산분할 병합</strong></li>\n<li><strong>5단계 — 판결 + 가족관계등록부 정정</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">혼인무효·이혼 선택을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '⚠️ 다툼 포인트 + 📋 준비서류',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 핵심 서류입니다.</strong></p>\n<p><strong>📋 준비서류 6가지</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>배우자 진료 기록·진단서</strong></li>\n<li><strong>중매·소개 자료 (사기 입증)</strong></li>\n<li><strong>결혼 전 통화·문자 (미고지 인지)</strong></li>\n<li><strong>본인 정신과 진료 기록 (피해)</strong></li>\n<li><strong>본인 신분증</strong></li>\n</ul>\n<p><strong>⚠️ 다툼 포인트</strong></p>\n<ul>\n<li><strong>"중대한" 사기 판단</strong> — 본질적 사유.</li>\n<li><strong>무효 인정 어려움</strong> — 대부분 이혼으로.</li>\n<li><strong>제소 기한</strong> — 취소는 안 날부터 3개월.</li>\n<li><strong>위자료 가중</strong> — 사기·미고지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담</strong> 가정법원 / 대한법률구조공단 132 / 한국가정법률상담소</p>',
      },
    ],
    cases: [
      {
        title: '판례 — 혼인무효 사유',
        summary:
          '대법원 2020므15896(2024.05.23) 혼인의무효 사건 등에서 법원은 혼인무효는 합의 흠결·근친혼 등 민법 제815조 한정 사유에서만 인정되고, 중대 질병·재산 미고지 등 사유는 사기·강박에 의한 혼인취소 또는 재판이혼 사유로 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '혼인무효는 엄격 한정. 미고지는 대부분 이혼 또는 취소로 처리.',
      },
    ],
    faq: [
      {
        question: '미고지만으로 무효 인정되나요?',
        answer:
          '<strong>"중대한 사기" 영역 입증이 필요하고, 대부분 재판이혼이 현실적입니다.</strong>',
      },
      {
        question: '혼인취소는 무엇인가요?',
        answer:
          '<strong>일정 기간 내 사기·강박 주장으로 장래 효력 없애는 제도입니다.</strong>',
      },
      {
        question: '제소 기한이 있나요?',
        answer:
          '<strong>취소는 안 날부터 3개월입니다.</strong>',
      },
      {
        question: '무효 인정되면 위자료는?',
        answer:
          '<strong>별도 청구 가능 영역입니다.</strong>',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '혼인무효·사기', href: '/guide/divorce/divorce-marriage-annulment-fraud' },
      { label: '재판이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
      { label: '위자료 산정', href: '/guide/divorce/divorce-alimony-calculation' },
      { label: '재산분할 기준', href: '/guide/divorce/divorce-asset-division-standard' },
      { label: '이중혼·중혼', href: '/guide/divorce/divorce-bigamy-marriage-void' },
    ],
  },

  // ─── 4. divorce-religious-conversion-divorce-track ───
  {
    domain: 'divorce',
    slug: 'divorce-religious-conversion-divorce-track',
    keyword: '종교 강요 이혼',
    questionKeyword: '배우자가 결혼 후 특정 종교 강요·강제 활동·재산 헌금을 요구해요. 이혼 사유 되나요?',
    ctaKeyword: '종교 강요 이혼 정리',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '종교 강요·개종 강요 이혼 — 5단계 혼인파탄 점검 | 로앤가이드',
      description:
        '배우자의 종교 강요·재산 헌금·생활 통제로 이혼을 고민한다면 5가지 입증 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"결혼 전엔 평범했던 배우자가 결혼 후 특정 종교 모임에 빠져 매주 헌금·집단 거주를 요구해요. 자녀에게도 강제 참여시키려 합니다. 이혼 가능한가요?" 종교적 사유는 헌법상 \'종교의 자유\'와 충돌하지만 ① 일방의 강제 개종·강요 ② 가정생활 파탄 (재산 헌금·자녀 강제) ③ 정상적 부부 공동생활 곤란 영역이면 민법 제840조 제6호 "혼인을 계속하기 어려운 중대한 사유"로 평가될 여지가 있는 사례. 대응 트랙은 ① 강요·파탄 입증 ② 자녀 보호 ③ 재산 보전 ④ 재판이혼 ⑤ 위자료 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 종교 사유 이혼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 강요·파탄·자녀·재산·소송 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 종교 강요·강제 입증</strong> — 개종 압박·집단 활동.</li>\n<li><strong>② 가정생활 파탄 입증</strong> — 헌금·생활 통제.</li>\n<li><strong>③ 자녀 보호·양육권</strong> — 강제 참여 차단.</li>\n<li><strong>④ 재산 보전 (가압류)</strong></li>\n<li><strong>⑤ 재판이혼 청구</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 종교 자체는 이혼 사유 아님. "강제·강요·파탄"이 분기점. 헌금·집단 거주·자녀 강제 등 구체적 피해 입증 필요.</blockquote>',
      },
      {
        title: 'Q. 어떤 경우 이혼 사유가 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 단순 신앙 차이는 사유 아닙니다. 다음 경우 평가될 여지가 있습니다.</strong></p>\n<ul>\n<li><strong>강제 개종 요구</strong> — 본인 신앙·종교 자유 침해.</li>\n<li><strong>재산 헌금 강요</strong> — 부부 재산 일방 처분.</li>\n<li><strong>집단 거주·이주 강제</strong> — 가정 공동생활 단절.</li>\n<li><strong>자녀 강제 참여</strong> — 자녀 복리 침해.</li>\n<li><strong>일상 생활 통제</strong> — 식사·옷차림·교제.</li>\n</ul>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 이혼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·보전·이혼 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 강요·헌금·통제 증거 수집 (즉시)</strong></li>\n<li><strong>2단계 — 자녀 보호 우선 조치</strong></li>\n<li><strong>3단계 — 재산 가압류·보전</strong></li>\n<li><strong>4단계 — 가정법원 재판이혼 (제840조 제6호)</strong></li>\n<li><strong>5단계 — 위자료 + 재산분할 + 양육권</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">종교 강요 이혼 대응을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '⚠️ 다툼 포인트 + 📋 준비서류',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 핵심 서류입니다.</strong></p>\n<p><strong>📋 준비서류 7가지</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>헌금 영수증·계좌 이체 내역</strong></li>\n<li><strong>강요 통화·문자·녹취</strong></li>\n<li><strong>친지·이웃 증언</strong></li>\n<li><strong>본인·자녀 정신과 진료 기록</strong></li>\n<li><strong>배우자 종교활동 사진·일정</strong></li>\n<li><strong>재산 보전 신청 자료</strong></li>\n</ul>\n<p><strong>⚠️ 다툼 포인트</strong></p>\n<ul>\n<li><strong>"종교 자유" 항변</strong> — 일방 강요 vs 본인 신앙.</li>\n<li><strong>"단순 차이" 판단</strong> — 파탄까지 가야 함.</li>\n<li><strong>헌금 회수 가능성</strong> — 종교단체 상대 별도 소송.</li>\n<li><strong>자녀 양육권</strong> — 종교 강제 시 불리.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담</strong> 가정법원 / 대한법률구조공단 132 / 한국가정법률상담소</p>',
      },
    ],
    cases: [
      {
        title: '판례 — 종교 강요 + 혼인파탄',
        summary:
          '대법원 2021므15480(2022.05.26) 이혼등 사건 등에서 법원은 일방 배우자의 종교 강요·집단 거주 요구·재산 일방 처분 등이 가정의 정상적 공동생활을 파탄시킨 경우 민법 제840조 제6호 "혼인을 계속하기 어려운 중대한 사유"로 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '종교 자체 ≠ 이혼 사유. 강요·헌금·집단 거주가 가정 파탄 시 사유 인정 여지.',
      },
    ],
    faq: [
      {
        question: '단순히 신앙이 다른 것도 사유 되나요?',
        answer:
          '<strong>단순 차이는 사유 아닙니다. 강요·파탄 입증이 필요합니다.</strong>',
      },
      {
        question: '헌금한 돈 돌려받을 수 있나요?',
        answer:
          '<strong>종교단체 상대 별도 소송 검토할 수 있습니다.</strong>',
      },
      {
        question: '자녀를 강제 종교활동에서 빼낼 수 있나요?',
        answer:
          '<strong>임시 양육자 지정·접근금지 가처분 검토 영역입니다.</strong>',
      },
      {
        question: '위자료는 얼마 정도인가요?',
        answer:
          '<strong>사례에 따라 다르지만 정신적 피해·기간 따라 평가됩니다.</strong>',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재판이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
      { label: '재산 보전 가압류', href: '/guide/divorce/divorce-asset-transfer-prevention-attachment' },
      { label: '정신적 학대 입증', href: '/guide/divorce/divorce-mental-abuse-evidence-collection' },
      { label: '양육권 결정', href: '/guide/divorce/divorce-child-custody-father-strategy' },
      { label: '위자료 산정', href: '/guide/divorce/divorce-alimony-calculation' },
    ],
  },

  // ─── 5. inheritance-yuryubun-special-receipt-deduction-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-yuryubun-special-receipt-deduction-track',
    keyword: '유류분 특별수익 차감',
    questionKeyword: '큰형이 생전에 아버지로부터 아파트를 받았어요. 제 유류분 계산할 때 차감되나요?',
    ctaKeyword: '유류분 특별수익 계산',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '유류분 + 특별수익 차감 — 5단계 생전 증여 산정 점검 | 로앤가이드',
      description:
        '생전 증여 받은 상속인의 유류분 산정·특별수익 차감 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지 사망 후 상속재산이 거의 없어요. 알고 보니 큰형이 10년 전 아파트 한 채를 증여받았더라고요. 제 유류분 계산할 때 이 아파트도 포함되나요?" 유류분은 ① 상속재산 + 생전 증여(특별수익) 합산 ② 법정상속분의 1/2 (배우자·직계비속) ③ 부족분 청구 영역. 특별수익은 \'증여 시점 시가가 아니라 상속개시 당시 시가\'로 평가. 1년 내 증여만 산입 원칙이지만, 상속인에 대한 증여는 기간 무관 산입. 시효는 안 날부터 1년, 사망부터 10년. 대응 트랙은 ① 특별수익 조사 ② 평가 시점 ③ 부족분 계산 ④ 반환청구 ⑤ 소송 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 유류분 + 특별수익 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 조사·평가·계산·청구·소송 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 생전 증여(특별수익) 조사</strong> — 부동산·예금·주식.</li>\n<li><strong>② 평가 시점</strong> — 상속개시 당시 시가.</li>\n<li><strong>③ 부족분 계산</strong> — 법정상속분 × 1/2 - 받은 것.</li>\n<li><strong>④ 유류분 반환청구</strong> — 내용증명·소송.</li>\n<li><strong>⑤ 가정법원·민사법원 소송</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상속인에 대한 생전 증여는 기간 무관 산입. 평가는 상속개시 당시 시가. 시효 1년·10년 절대 기한.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 조사·계산·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 안심상속 + 등기부 조사 (즉시)</strong></li>\n<li><strong>2단계 — 특별수익 평가 (감정평가)</strong></li>\n<li><strong>3단계 — 유류분 부족분 계산</strong></li>\n<li><strong>4단계 — 내용증명 반환청구</strong></li>\n<li><strong>5단계 — 거부 시 민사소송 (시효 1년/10년)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">유류분·특별수익 산정을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신원·증여·평가·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>피상속인 기본증명·가족관계증명</strong></li>\n<li><strong>상속인 신분증·인감</strong></li>\n<li><strong>안심상속 원스톱 결과</strong></li>\n<li><strong>증여재산 등기부·계약서</strong></li>\n<li><strong>증여세 신고 자료</strong></li>\n<li><strong>증여 시점·상속개시 시점 감정평가</strong></li>\n<li><strong>유류분 부족분 계산서</strong></li>\n<li><strong>내용증명 반환청구서</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>평가 시점</strong> — 상속개시 시가 vs 증여 시가.</li>\n<li><strong>특별수익 vs 부양</strong> — 생활비·교육비 제외 영역.</li>\n<li><strong>시효 1년</strong> — 안 날부터 1년 절대 기한.</li>\n<li><strong>시효 10년</strong> — 사망부터 10년 절대 기한.</li>\n<li><strong>현물 vs 가액</strong> — 반환 방식 선택.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소</strong></li>\n<li><strong>국세청 상속세 상담 126</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 유류분 산정과 특별수익',
        summary:
          '대법원 2024나14177(2024.10.23) 유류분반환청구 등에서 법원은 유류분 산정 시 상속인이 받은 생전 증여(특별수익)는 기간 제한 없이 산입되고, 그 평가는 증여 시점이 아닌 상속개시 당시 시가를 기준으로 한다고 본 사례 흐름이 있습니다.',
        takeaway: '상속인 생전 증여 = 기간 무관 산입. 평가는 상속개시 시가. 시효 1년·10년 절대 기한.',
      },
    ],
    faq: [
      {
        question: '큰형이 30년 전 받은 증여도 산입되나요?',
        answer:
          '<strong>상속인에 대한 증여는 기간 제한 없이 산입됩니다.</strong>',
      },
      {
        question: '평가는 받은 당시 시세인가요?',
        answer:
          '<strong>상속개시 당시 시가로 평가됩니다.</strong>',
      },
      {
        question: '교육비·결혼비용도 특별수익인가요?',
        answer:
          '<strong>일반적 부양·교육비는 제외, 특별한 증여만 해당될 여지가 있습니다.</strong>',
      },
      {
        question: '반환은 현금으로 하나요?',
        answer:
          '<strong>현물·가액 선택 가능 영역입니다.</strong>',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '유류분 청구', href: '/guide/inheritance/inheritance-yuryubun-claim-calculation' },
      { label: '유류분 시효 10년', href: '/guide/inheritance/inheritance-forced-share-10year-limit' },
      { label: '특별수익 계산범위', href: '/guide/inheritance/inheritance-forced-share-gift-calculation-scope' },
      { label: '유류분 부족 청구', href: '/guide/inheritance/inheritance-yuryubun-shortage-claim-procedure' },
      { label: '유류분 소송 가이드', href: '/guide/inheritance/inheritance-forced-share-lawsuit-guide' },
    ],
  },

  // ─── 6. inheritance-renunciation-cascade-grandchild-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-renunciation-cascade-grandchild-track',
    keyword: '상속포기 손자녀 대습',
    questionKeyword: '아버지 빚이 너무 많아 자녀 모두 포기하려는데, 손자녀에게 빚이 넘어가나요?',
    ctaKeyword: '상속포기 손자녀 차단',
    type: 'Q&A형',
    perspective: 'neutral',
    meta: {
      title: '상속포기 후 손자녀 빚 — 5단계 대습·확산 차단 | 로앤가이드',
      description:
        '자녀 모두 상속포기 시 손자녀·형제로 빚이 넘어가는 흐름과 차단 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 1억 빚을 남기고 사망. 자녀 3명 모두 상속포기 하려는데, \'포기하면 손자녀에게 넘어간다\'는 말 들었어요. 손자녀·형제까지 다 포기해야 하나요?" 상속순위는 ① 직계비속·배우자 → ② 직계존속·배우자 → ③ 형제자매 → ④ 4촌 이내 방계 순서. 자녀 전부 포기 시 손자녀(대습이 아닌 \'본위상속\')로 넘어가는 영역이 다툼. 안전한 방법은 ① 한 명 한정승인 + 나머지 포기 ② 손자녀까지 함께 포기 ③ 후순위 전부 포기 영역. 대응 트랙은 ① 채무 조사 ② 가족 협의 ③ 한정승인 1인 + 포기 다수 ④ 후순위 포기 ⑤ 청산 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 손자녀 빚 확산 차단 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 조사·협의·전략·신고·청산 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 채무 조사</strong> — 안심상속 원스톱.</li>\n<li><strong>② 가족 협의</strong> — 누가 한정승인할지.</li>\n<li><strong>③ 한정승인 1인 + 다수 포기</strong> — 가장 안전.</li>\n<li><strong>④ 후순위(손자녀·형제) 동시 포기</strong></li>\n<li><strong>⑤ 한정승인자 청산</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자녀 전부 포기 → 손자녀·존속·형제 순으로 확산 위험. "한 명 한정승인 + 나머지 포기" 방식이 손자녀 보호에 가장 안전.</blockquote>',
      },
      {
        title: 'Q. 손자녀에게 정말 넘어가나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 판례·해석에 따라 영역이 다릅니다.</strong></p>\n<ul>\n<li><strong>대법원 입장</strong> — 배우자 + 자녀 일부 포기 시 손자녀·직계존속 공동상속 가능성 인정 사례 영역.</li>\n<li><strong>안전한 방법</strong> — 손자녀까지 동시 포기 신청.</li>\n<li><strong>한정승인 1인</strong> — 후순위 확산 차단.</li>\n<li><strong>존속·형제도 포함</strong> — 4촌 이내 방계까지 검토 영역.</li>\n<li><strong>3개월 기한 동시</strong> — 모두 같은 기한.</li>\n</ul>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 조사·전략·신고 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 안심상속 원스톱 조회 (즉시)</strong></li>\n<li><strong>2단계 — 가족 협의 (누가 한정승인)</strong></li>\n<li><strong>3단계 — 가정법원 한정승인 1인 + 포기 다수 (3개월 내)</strong></li>\n<li><strong>4단계 — 손자녀·존속 동시 포기</strong></li>\n<li><strong>5단계 — 한정승인자 채권자 공고·청산</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">상속포기 + 손자녀 차단 전략을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '⚠️ 다툼 포인트 + 📋 준비서류',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 핵심 서류입니다.</strong></p>\n<p><strong>📋 준비서류 7가지</strong></p>\n<ul>\n<li><strong>피상속인 기본증명·가족관계증명</strong></li>\n<li><strong>상속인 신분증·인감 (전원)</strong></li>\n<li><strong>안심상속 조회 결과</strong></li>\n<li><strong>한정승인 신고서 (1인)</strong></li>\n<li><strong>상속포기 신고서 (다수)</strong></li>\n<li><strong>손자녀·존속 포기서 (예방)</strong></li>\n<li><strong>가족 협의 동의서</strong></li>\n</ul>\n<p><strong>⚠️ 다툼 포인트</strong></p>\n<ul>\n<li><strong>3개월 기한 동시</strong> — 모두 같은 시점.</li>\n<li><strong>손자녀 미성년</strong> — 친권자 대리 신고.</li>\n<li><strong>한정승인자 청산 의무</strong> — 채권자 공고·배당.</li>\n<li><strong>형제·4촌 확산</strong> — 광범위 포기 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담</strong> 대한법률구조공단 132 / 가정법원 / 안심상속 원스톱(정부24)</p>',
      },
    ],
    cases: [
      {
        title: '판례 — 자녀 포기 후 손자녀 상속',
        summary:
          '대법원 2020그42(2023.03.23) 승계집행문부여에대한이의 사건 등에서 법원은 피상속인의 배우자와 자녀 중 자녀 전부가 상속을 포기한 경우 배우자와 손자녀 또는 직계존속이 공동상속인이 될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '자녀 전부 포기 = 손자녀·존속 확산 가능. 한 명 한정승인 + 나머지 포기가 안전.',
      },
    ],
    faq: [
      {
        question: '손자녀까지 포기 안 하면 위험한가요?',
        answer:
          '<strong>판례상 손자녀로 넘어갈 여지가 있어 동시 포기 권장 영역입니다.</strong>',
      },
      {
        question: '한정승인 1인이 가장 안전한가요?',
        answer:
          '<strong>맞습니다. 후순위 확산 차단 효과가 큽니다.</strong>',
      },
      {
        question: '미성년 손자녀는 누가 신고하나요?',
        answer:
          '<strong>친권자가 대리 신고합니다.</strong>',
      },
      {
        question: '3개월 기한은 누구 기준인가요?',
        answer:
          '<strong>각자 "상속 인지일" 기준입니다.</strong>',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속포기 절차', href: '/guide/inheritance/inheritance-renunciation-process' },
      { label: '한정승인 vs 포기', href: '/guide/inheritance/inheritance-renunciation-vs-limited-acceptance' },
      { label: '미성년 자녀 포기', href: '/guide/inheritance/inheritance-minor-child-renounce-procedure' },
      { label: '후순위 채무 전가', href: '/guide/inheritance/inheritance-renunciation-junior-heirs-debt-transfer' },
      { label: '상속 순위', href: '/guide/inheritance/inheritance-order-legal-share' },
    ],
  },

  // ─── 7. inheritance-life-insurance-beneficiary-priority-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-life-insurance-beneficiary-priority-track',
    keyword: '사망보험금 수익자 상속재산',
    questionKeyword: '아버지 사망보험금 5억이 큰형 앞으로 지정돼 있어요. 다른 자녀는 못 받나요?',
    ctaKeyword: '사망보험금 수익자 정리',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '사망보험금 수익자 vs 상속재산 — 5단계 고유 권리 점검 | 로앤가이드',
      description:
        '사망보험금이 상속재산인지 수익자 고유 권리인지 5가지 트랙·예외를 지금 확인하세요.',
    },
    intro:
      '<p>"아버지 생명보험금 5억이 큰형 명의 수익자로 지정돼 있어요. 자녀 3명 중 본인·동생은 아무것도 못 받나요? 상속재산에 포함되지 않나요?" 사망보험금은 ① 수익자 지정 = 수익자 \'고유\' 권리 (상속재산 아님) ② 수익자 미지정·\'상속인\' 지정 = 법정상속분 분배 ③ 단 보험료 출연 = 특별수익(유류분 산정 시 산입 가능) 영역. 즉 큰형 단독 수령은 정당하나, 다른 자녀는 큰형의 특별수익으로 보고 유류분 부족분 청구 가능. 대응 트랙은 ① 수익자 확인 ② 보험료 출연자 ③ 특별수익 평가 ④ 유류분 청구 ⑤ 시효 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 사망보험금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·출연·평가·청구·시효 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 수익자 지정 확인</strong> — 보험증권·약관.</li>\n<li><strong>② 보험료 출연자 확인</strong> — 피상속인 = 특별수익.</li>\n<li><strong>③ 보험금 = 특별수익으로 평가</strong></li>\n<li><strong>④ 유류분 부족분 청구</strong></li>\n<li><strong>⑤ 시효 1년/10년 확인</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보험금 자체는 수익자 고유 권리. 단 보험료를 피상속인이 냈으면 수익자의 "특별수익"으로 산입 → 다른 상속인 유류분 청구 가능.</blockquote>',
      },
      {
        title: 'Q. 본인도 받을 수 있는 길이 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 직접 보험금은 못 받지만, 유류분 부족분 청구는 가능 영역입니다.</strong></p>\n<ul>\n<li><strong>유류분 산정</strong> — 상속재산 + 보험금(특별수익) 합산.</li>\n<li><strong>법정상속분 × 1/2</strong> — 자녀 유류분.</li>\n<li><strong>본인 받은 것 차감</strong></li>\n<li><strong>부족분이 있으면 큰형에게 청구</strong></li>\n<li><strong>1년/10년 시효</strong></li>\n</ul>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·평가·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 보험증권·수익자 확인 (즉시)</strong></li>\n<li><strong>2단계 — 보험료 납입 출처 확인</strong></li>\n<li><strong>3단계 — 보험금 = 특별수익 평가</strong></li>\n<li><strong>4단계 — 유류분 부족분 계산 + 내용증명</strong></li>\n<li><strong>5단계 — 거부 시 민사소송 (시효 내)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사망보험금 + 유류분을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '⚠️ 다툼 포인트 + 📋 준비서류',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 핵심 서류입니다.</strong></p>\n<p><strong>📋 준비서류 7가지</strong></p>\n<ul>\n<li><strong>보험증권·약관·계약서</strong></li>\n<li><strong>보험료 납입 자료 (계좌·통장)</strong></li>\n<li><strong>피상속인 통장 거래내역</strong></li>\n<li><strong>가족관계증명·기본증명</strong></li>\n<li><strong>상속재산 명세</strong></li>\n<li><strong>유류분 부족분 계산서</strong></li>\n<li><strong>내용증명 청구서</strong></li>\n</ul>\n<p><strong>⚠️ 다툼 포인트</strong></p>\n<ul>\n<li><strong>"수익자 지정" 효력</strong> — 명백한 지정.</li>\n<li><strong>보험료 출연자</strong> — 피상속인이 냈는지.</li>\n<li><strong>특별수익 평가 시점</strong> — 상속개시 당시.</li>\n<li><strong>시효 1년/10년</strong> — 절대 기한.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담</strong> 대한법률구조공단 132 / 금융감독원 1332 / 한국가정법률상담소</p>',
      },
    ],
    cases: [
      {
        title: '판례 — 사망보험금 = 수익자 고유 + 특별수익',
        summary:
          '대법원 판례 흐름에서 법원은 사망보험금은 수익자 지정이 있으면 수익자의 고유 권리로 상속재산에 포함되지 않으나, 피상속인이 보험료를 납입한 경우 그 보험금은 수익자의 특별수익으로 유류분 산정 시 산입될 여지가 있다고 본 사례 흐름이 있습니다 (대법원 2024나14177 등 유류분 일반 법리 참조).',
        takeaway: '보험금 = 수익자 고유. 단 보험료 출연자 = 피상속인이면 특별수익 → 유류분 청구 가능.',
      },
    ],
    faq: [
      {
        question: '수익자 지정된 보험금도 빼앗을 수 있나요?',
        answer:
          '<strong>보험금 자체는 못 빼앗지만, 유류분 부족분만큼 청구는 가능 영역입니다.</strong>',
      },
      {
        question: '보험료를 큰형이 냈으면 어떻게 되나요?',
        answer:
          '<strong>큰형 출연이면 특별수익에서 제외될 여지가 있습니다.</strong>',
      },
      {
        question: '국민연금 유족연금도 상속재산인가요?',
        answer:
          '<strong>국민연금 유족연금은 수급자 고유 권리로 별도 영역입니다.</strong>',
      },
      {
        question: '시효는 얼마인가요?',
        answer:
          '<strong>유류분 청구는 안 날부터 1년, 사망부터 10년입니다.</strong>',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '보험금 상속재산 구분', href: '/guide/inheritance/inheritance-life-insurance-vs-estate-distinction' },
      { label: '보험금 수익자 변경', href: '/guide/inheritance/inheritance-life-insurance-beneficiary-change-dispute' },
      { label: '유류분 청구', href: '/guide/inheritance/inheritance-yuryubun-claim-calculation' },
      { label: '특별수익 계산', href: '/guide/inheritance/inheritance-forced-share-gift-calculation-scope' },
      { label: '유류분 10년 시효', href: '/guide/inheritance/inheritance-forced-share-10year-limit' },
    ],
  },
];
