import { SpokePage } from '../spoke-pages';

// batch64 wage(2) + unemployment(1) + retirement(2) — 5개 (2026-05-14)
//
// 고유 존재 이유:
// 1. wage-pay-cut-agreement-coercion-revoke — 임금 삭감 동의서 강요 받았던 경우 효력 다툼·취소 트랙 (기존 wage-cut-* 부재, 강요 의사표시 하자 결합).
// 2. wage-bonus-customary-payment-refusal — 매년 지급해온 보너스 지급 거부 시 관행적 임금성·통상임금 결합 (기존 bonus-* 부재).
// 3. unemployment-child-care-school-time-mismatch — 자녀 등하교 시간과 출퇴근 시간 불일치 자진퇴사 정당 사유 (기존 unemployment-* 다른 사유, 본 페이지는 자녀 양육 사유 특수).
// 4. retirement-merger-acquisition-succession-claim — M&A 시 퇴직금 산정 기준·합산 가능 여부 (기존 retirement-* 부재 영역).
// 5. retirement-multiple-business-affiliated-aggregation — 관계사 다수 재직 시 근속 합산 가능성 (기존 multiple-business-* 부재).

export const spokesBatch64WageUnempRetire: SpokePage[] = [
  // ─── 1. wage-pay-cut-agreement-coercion-revoke-track ───
  {
    domain: 'wage',
    slug: 'wage-pay-cut-agreement-coercion-revoke-track',
    keyword: '임금삭감 동의서 강요',
    questionKeyword: '경영난이라며 임금 20% 삭감 동의서에 사인했는데 강요였어요. 취소할 수 있나요?',
    ctaKeyword: '삭감 동의서 효력 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임금삭감 동의서 강요 후 철회 — 5단계 의사표시 하자 다툼 | 로앤가이드',
      description:
        '경영난 명목 임금삭감 동의서를 강요받았다면 의사표시 하자·차액 청구 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'전 직원 다 사인했다, 안 하면 정리해고 1순위\'라는 압박에 임금 20% 삭감 동의서에 사인. 그런데 같은 시기 신규 채용은 정상 임금으로 들어왔고, 임원진 급여는 그대로였어요. 6개월 째 삭감된 임금으로 견디고 있지만 강요였다는 생각이 떠나지 않습니다." 임금 삭감은 근로계약 불이익 변경에 해당해 ① 진정한 동의 + ② 불이익 정도의 합리성 모두 충족해야 효력 평가가 가능한 영역. 정리해고 1순위 압박·집단적 강요는 의사표시 하자(강박)로 평가될 여지가 있어 동의서 자체의 취소가 가능합니다. 대응은 ① 강요 정황 입증 ② 동의서 취소 통지 ③ 차액 청구 ④ 노동청 진정 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 임금삭감 동의서 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 강요·취소·차액·진정·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 강요·기망 정황</strong> — \"안 하면 정리해고\" 류 발언·메일.</li>\n<li><strong>② 동의서 취소 통지</strong> — 강박 안 사정 후 합리적 기간 내.</li>\n<li><strong>③ 임금 차액 청구</strong> — 3년 시효, 삭감 시점부터.</li>\n<li><strong>④ 노동청 진정</strong> — 임금체불 신고.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 위자료·일실 임금.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 강요 입증 시 동의 효력 부정 → 차액 임금 청구권 발생하는 영역. 신규 채용·임원 급여 비교가 강요·차별 입증의 핵심 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 강요 입증·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 강요 자료 보존 (즉시)</strong> — 회의록·메일·관리자 발언 녹취.</li>\n<li><strong>2단계 — 동의서 취소 내용증명 (1~2주)</strong> — 강박 안 사정 후 즉시.</li>\n<li><strong>3단계 — 임금 차액 진정 (노동청)</strong> — 3년 시효.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 시정 권고·검찰 송치.</li>\n<li><strong>5단계 — 민사 임금청구·손해배상</strong> — 위자료·일실 임금.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임금삭감 동의서 강요 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 강요·동의·임금 갈래입니다.</strong></p>\n<ul>\n<li><strong>임금삭감 동의서 (사본)</strong></li>\n<li><strong>강요 정황 회의록·녹취·메일</strong></li>\n<li><strong>전 직원 동의 명단·임원 급여 (비교)</strong></li>\n<li><strong>같은 시기 신규 채용 임금 (있을 시)</strong></li>\n<li><strong>급여명세서 (삭감 전 vs 후)</strong></li>\n<li><strong>근로계약서·취업규칙</strong></li>\n<li><strong>경영난 입증 자료 (회사 제시한 것)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \"안 하면 정리해고 1순위\" \"전 직원 다 했다\" 류 발언은 강박 입증의 직접 증거. 회의 자리에서 들었다면 즉시 메모·동료 진술서 확보.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진정한 동의 vs 강박</strong> — 정리해고 압박은 의사표시 하자 평가 여지.</li>\n<li><strong>임원·신규채용 비교</strong> — 평등 적용 부재 시 동의 합리성 부정.</li>\n<li><strong>경영난 실질</strong> — 회사 주장 vs 객관적 재무 자료.</li>\n<li><strong>취소 시점</strong> — 강박 안 사정 후 합리적 기간 내(통상 3년 내).</li>\n<li><strong>차액 시효</strong> — 3년, 시점별 별도 발생.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임금 불이익 변경 동의',
        summary:
          '대법원 2011다45217(2012.05.10 선고) 영역에서 법원은 임금 등 근로조건의 불이익한 변경에 대한 근로자의 동의는 진정한 의사에 기한 것이어야 하고, 강박·기망·집단적 압박 등이 개입되었다고 평가될 수 있는 경우 그 효력이 부정될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '강요·압박 입증 시 동의 효력 부정 → 차액 임금 청구 가능. 정리해고 압박은 강박 평가 강한 사정.',
      },
    ],
    faq: [
      {
        question: '동의서에 자필 서명했는데도 취소 가능한가요?',
        answer:
          '<strong>강박·기망 입증 시 의사표시 취소가 가능한 영역입니다.</strong>',
      },
      {
        question: '신규 채용은 정상 임금으로 들어왔어요',
        answer:
          '<strong>평등 적용 부재 강력 사정입니다.</strong> 채용공고·신규 직원 급여 입증.',
      },
      {
        question: '얼마나 늦게까지 취소할 수 있나요?',
        answer:
          '<strong>강박 안 사정 후 합리적 기간 내(통상 3년)입니다.</strong>',
      },
      {
        question: '회사가 "경영난 때문"이라고 주장하면요?',
        answer:
          '<strong>객관적 재무 자료·임원 급여 동결 등 평등 적용 입증이 필요한 영역입니다.</strong>',
      },
      {
        question: '동의 후 받은 임금은 어떻게 처리되나요?',
        answer:
          '<strong>동의 효력 부정 시 삭감액이 차액 청구권으로 발생합니다.</strong> 3년 시효.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 신고', href: '/guide/wage/wage-unpaid-complaint-procedure' },
      { label: '근로조건 불이익 변경', href: '/guide/wage/wage-unfavorable-change-consent' },
      { label: '간이대지급금', href: '/guide/wage/wage-simplified-replacement-payment' },
      { label: '임금 시효', href: '/guide/wage/wage-claim-statute-of-limitations' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
    ],
  },

  // ─── 2. wage-bonus-customary-payment-refusal-track ───
  {
    domain: 'wage',
    slug: 'wage-bonus-customary-payment-refusal-track',
    keyword: '관행적 보너스 지급 거부',
    questionKeyword: '매년 명절 보너스 지급해왔는데 올해부터 안 준다고 합니다. 청구 가능한가요?',
    ctaKeyword: '보너스 지급 거부 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '관행적 보너스 지급 거부 — 5단계 임금성·통상임금 다툼 | 로앤가이드',
      description:
        '매년 정기 보너스를 갑자기 안 준다면 관행적 임금성·통상임금 5가지 청구 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"10년 동안 매년 설·추석마다 기본급 50% 보너스를 받아왔어요. 그런데 올해 \'경영 사정\'을 이유로 \'보너스는 의무가 아니다\'며 지급 거부. 같은 시기 신입은 채용 약속에 따라 정상 지급받았습니다." 보너스·상여금이 ① 정기적·일률적·고정적으로 지급되어 왔다면 ② 근로계약의 일부로 평가될 여지가 있고 ③ 통상임금에 해당해 일방적 폐지가 어려운 영역. 단순 호의적·임의적 지급이 아니라 \"관행적 임금\"으로 평가되면 일방 폐지 시 임금체불 + 통상임금 청구가 모두 가능합니다. 대응은 ① 지급 이력 ② 관행성·정기성 ③ 노동청 진정 ④ 통상임금 차액 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 보너스 거부 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 이력·관행·진정·통상·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 지급 이력 입증</strong> — 5년 이상 정기 지급이면 관행 강력.</li>\n<li><strong>② 정기성·일률성·고정성</strong> — 통상임금 3요소.</li>\n<li><strong>③ 노동청 임금체불 진정</strong> — 미지급 보너스 청구.</li>\n<li><strong>④ 통상임금 차액 청구</strong> — 보너스 포함 시 야간·연장·휴일수당 재계산.</li>\n<li><strong>⑤ 민사 임금청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 \"임의 격려금\"이 아니라 \"관행적 임금\"으로 평가되면 일방 폐지는 임금체불 + 통상임금 미산입에 따른 차액 청구 트랙으로 확장되는 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·진정·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 지급 이력 보존 (즉시)</strong> — 5년치 급여명세서·이체 내역·취업규칙.</li>\n<li><strong>2단계 — 관행성·정기성 입증 (1~2주)</strong> — 동료 진술서·전 직원 지급 명단.</li>\n<li><strong>3단계 — 노동청 임금체불 진정 (당해 보너스)</strong> — 미지급 분.</li>\n<li><strong>4단계 — 통상임금 차액 청구</strong> — 보너스 포함 재계산.</li>\n<li><strong>5단계 — 민사 임금청구·손해배상</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">관행적 보너스 거부 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 이력·관행·임금 갈래입니다.</strong></p>\n<ul>\n<li><strong>5년치 이상 급여명세서·이체 내역</strong></li>\n<li><strong>취업규칙·단체협약 (보너스 조항)</strong></li>\n<li><strong>근로계약서 (보너스 명시 여부)</strong></li>\n<li><strong>동료 진술서 (전 직원 정기 지급)</strong></li>\n<li><strong>회사 공지·인사발령 (보너스 관련)</strong></li>\n<li><strong>경영난 입증 자료 (회사 제시한 것)</strong></li>\n<li><strong>같은 시기 신입 보너스 지급 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 취업규칙에 \"보너스는 회사 사정에 따라 지급\"이라고 적혀 있어도 5년 이상 정기 지급되어 왔다면 관행적 임금 평가 가능한 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>관행적 임금 vs 임의 격려금</strong> — 정기성·일률성·고정성 3요소 심사.</li>\n<li><strong>통상임금 포함</strong> — 정기 보너스는 통상임금 평가 → 야간·연장·휴일수당 재계산.</li>\n<li><strong>일방 폐지 효력</strong> — 근로자 동의 없는 폐지는 임금체불 평가.</li>\n<li><strong>3년 시효</strong> — 보너스마다 별도 시효 진행.</li>\n<li><strong>차별 적용</strong> — 일부 직원만 지급 시 평등 위반.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 통상임금과 정기 상여금',
        summary:
          '대법원 2014다11888(2016.01.28 선고) 영역에서 법원은 정기적·일률적·고정적으로 지급되는 상여금은 통상임금에 해당한다고 평가될 수 있고, 사용자가 근로자의 동의 없이 일방적으로 폐지하기 어려운 임금으로 본 사례 흐름이 있습니다.',
        takeaway: '정기 보너스는 통상임금 + 관행적 임금 동시 평가. 일방 폐지는 임금체불 + 통상임금 차액 청구 가능.',
      },
    ],
    faq: [
      {
        question: '취업규칙에 "회사 사정에 따라"라고 적혀 있어요',
        answer:
          '<strong>실제로 5년 이상 정기 지급되어 왔다면 관행적 임금 평가 가능한 영역입니다.</strong>',
      },
      {
        question: '보너스가 통상임금에 포함되면 어떤 효과인가요?',
        answer:
          '<strong>야간·연장·휴일수당이 재계산되어 추가 차액이 발생합니다.</strong>',
      },
      {
        question: '일부 직원만 보너스 받는 경우는요?',
        answer:
          '<strong>평등 적용 부재 시 임금 차별 청구 가능합니다.</strong>',
      },
      {
        question: '경영난 시기에도 청구 가능한가요?',
        answer:
          '<strong>관행적 임금은 경영 사정과 무관하게 발생합니다.</strong> 단, 근로자 동의로 일시 중단은 별도.',
      },
      {
        question: '시효는 언제 시작되나요?',
        answer:
          '<strong>각 보너스 지급일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 신고', href: '/guide/wage/wage-unpaid-complaint-procedure' },
      { label: '통상임금 계산', href: '/guide/wage/wage-ordinary-wage-calculation' },
      { label: '간이대지급금', href: '/guide/wage/wage-simplified-replacement-payment' },
      { label: '임금 시효', href: '/guide/wage/wage-claim-statute-of-limitations' },
      { label: '연장근로수당', href: '/guide/wage/wage-overtime-allowance-claim' },
    ],
  },

  // ─── 3. unemployment-child-care-school-time-mismatch-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-child-care-school-time-mismatch-track',
    keyword: '자녀 등하교 시간 불일치 자진퇴사',
    questionKeyword: '회사 출퇴근 시간이 자녀 등하교와 안 맞아 자진퇴사했는데 실업급여 받을 수 있나요?',
    ctaKeyword: '자녀 양육 자진퇴사 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '자녀 양육 사유 자진퇴사 — 5단계 실업급여 정당사유 다툼 | 로앤가이드',
      description:
        '자녀 등하교 시간 불일치로 자진퇴사했다면 실업급여 정당사유 5가지 인정 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"초등 1학년 입학 후 자녀 등하교 시간이 회사 9시 출근과 안 맞아 매일 지각·돌봄 공백 발생. 회사에 근무시간 조정 요청했지만 거부, 결국 자진퇴사. 고용센터에서 \'자진퇴사는 원칙적 수급 제한\'이라고 합니다." 고용보험법 시행규칙은 \"임신·출산·만 8세 이하 자녀의 육아\" 등을 자진퇴사 정당 사유로 명시한 영역. 사업주에게 근로시간 변경·휴직을 신청했으나 거부된 사정이 있으면 ① 자진퇴사여도 수급 가능 ② 회사 거부 입증 ③ 양육 사정 입증 ④ 고용센터 이의신청 5가지 트랙이 핵심입니다. 대응은 ① 양육 사정 ② 회사 요청·거부 자료 ③ 수급 신청 ④ 이의신청 ⑤ 행정 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 자녀 양육 자진퇴사 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사유·요청·입증·신청·이의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 자녀 연령·양육 필요성</strong> — 만 8세 이하 자녀 + 등하교 시간 불일치.</li>\n<li><strong>② 회사에 시간 조정·휴직 요청</strong> — 메일·문서로 명시.</li>\n<li><strong>③ 회사 거부 입증</strong> — 거부 답변·녹취.</li>\n<li><strong>④ 수급 신청 (이직일 12개월 내)</strong> — 정당 사유 자진퇴사로 신청.</li>\n<li><strong>⑤ 거부 시 이의신청·심사청구 (90일)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 만 8세 이하 자녀 양육 사유는 자진퇴사여도 정당사유 인정 영역. 단, 회사에 시간 조정·휴직을 요청했으나 거부된 사정이 입증되어야 인정률이 올라가는 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신청 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·신청·이의 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 양육·근무 자료 보존 (즉시)</strong> — 자녀 입학통지서·시간표·근무 계약.</li>\n<li><strong>2단계 — 회사 요청·거부 자료 (1~2주)</strong> — 시간 조정 신청·답변 메일.</li>\n<li><strong>3단계 — 고용센터 수급 신청 (이직일 12개월 내)</strong> — 정당사유 자진퇴사 기재.</li>\n<li><strong>4단계 — 거부 시 이의신청 (90일 내)</strong> — 고용보험심사관.</li>\n<li><strong>5단계 — 심사청구·재심사청구 (90일)</strong> — 고용보험심사위원회.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">자녀 양육 자진퇴사 정당사유 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 양육·근무·이직 갈래입니다.</strong></p>\n<ul>\n<li><strong>자녀 가족관계증명서·주민등록등본</strong></li>\n<li><strong>학교·유치원·어린이집 입학통지서·시간표</strong></li>\n<li><strong>회사 출퇴근 시간 입증 (근로계약서)</strong></li>\n<li><strong>시간 조정·휴직 요청 메일·문서</strong></li>\n<li><strong>회사 거부 답변 (메일·문서)</strong></li>\n<li><strong>이직확인서·고용보험 자격 확인</strong></li>\n<li><strong>대안 돌봄 검토 자료 (실패한 경우)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사에 \"근무시간 조정·재택근무·육아휴직\" 중 어느 하나라도 요청한 기록이 있으면 정당사유 인정에 결정적. 카톡이라도 캡처해 두기.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>자녀 연령</strong> — 만 8세 이하 또는 초2 이하 (시행규칙).</li>\n<li><strong>회사 요청·거부 입증</strong> — 요청 없이 자진퇴사면 정당사유 부정 위험.</li>\n<li><strong>대안 돌봄 검토</strong> — 학원·돌봄교실 등 검토 흔적이 있으면 강한 사정.</li>\n<li><strong>12개월 신청 기간</strong> — 이직일 후 12개월 경과 시 수급권 소멸.</li>\n<li><strong>이의신청 90일</strong> — 거부 처분 통지 후 90일.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 고객센터 1350</strong></li>\n<li><strong>고용보험 1577-7114</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 자진퇴사 정당사유',
        summary:
          '대법원 2012두22904(2013.02.28 선고) 영역에서 법원은 자진 이직이라 하더라도 통상의 근로자가 그 사정에서 통상 이직을 선택할 정도였다고 평가될 수 있는 객관적·합리적 사유가 있는 경우 실업급여 수급 자격이 인정될 여지가 있다고 본 사례 흐름이 있습니다. 자녀 양육은 시행규칙에 명시된 대표적 정당 사유에 해당합니다.',
        takeaway: '자녀 양육 사유는 정당사유 인정 영역. 회사에 시간 조정·휴직 요청 후 거부된 사정이 결정적.',
      },
    ],
    faq: [
      {
        question: '자녀 연령 기준은 어떻게 되나요?',
        answer:
          '<strong>만 8세 이하 또는 초등학교 2학년 이하입니다.</strong>',
      },
      {
        question: '회사에 요청 없이 자진퇴사했어요',
        answer:
          '<strong>정당사유 인정 어려운 영역입니다.</strong> 단, 양육 사정 입증 강하면 이의신청 검토.',
      },
      {
        question: '이직확인서에 "개인사정"이라고 적혀 있어요',
        answer:
          '<strong>고용센터 신청 시 정당사유로 정정 신청이 가능합니다.</strong>',
      },
      {
        question: '12개월이 지났는데도 신청 가능한가요?',
        answer:
          '<strong>원칙적 수급권 소멸입니다.</strong> 예외 사정 있으면 즉시 고용센터 상담.',
      },
      {
        question: '대안 돌봄을 알아보지 않았다면요?',
        answer:
          '<strong>대안 검토 시도 입증이 정당사유 인정에 유리한 영역입니다.</strong>',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 자진퇴사 정당사유', href: '/guide/unemployment/unemployment-voluntary-just-cause' },
      { label: '실업급여 신청 절차', href: '/guide/unemployment/unemployment-application-procedure' },
      { label: '이직확인서 정정', href: '/guide/unemployment/unemployment-separation-document-correction' },
      { label: '이의신청', href: '/guide/unemployment/unemployment-objection-procedure' },
      { label: '실업급여 수급자격', href: '/guide/unemployment/unemployment-eligibility-requirements' },
    ],
  },

  // ─── 4. retirement-merger-acquisition-succession-claim-track ───
  {
    domain: 'retirement',
    slug: 'retirement-merger-acquisition-succession-claim-track',
    keyword: 'M&A 합병 퇴직금 산정',
    questionKeyword: '회사가 다른 회사와 합병됐는데 퇴직금 산정은 합병 전 회사 기준인가요?',
    ctaKeyword: 'M&A 퇴직금 계산 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'M&A·합병 후 퇴직금 산정 — 5단계 근속 합산 다툼 | 로앤가이드',
      description:
        '회사가 합병·매각된 후 퇴직금 산정이 달라졌다면 근속 합산·평균임금 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"15년 근무한 회사가 작년에 큰 회사와 합병됐어요. 올해 퇴직하려는데 \'합병 이전 회사 근속은 정산했다\'며 퇴직금을 2년치만 주려고 합니다. 합병 시점에 정산 동의서 사인한 기억은 있는데, \'고용 승계\'라고 들었어요." 영업양도·합병 시 근로관계는 원칙적으로 승계되며, 근속 기간도 통산되는 영역. 합병 시점 정산 동의서를 받았더라도 ① 동의가 진정 의사인지 ② 사실상 강요 여부 ③ 동의 내용이 명확한지가 핵심 다툼이 됩니다. 평균임금도 합병 후 임금 변동을 반영해야 하므로 산정 기준이 다툼 대상. 대응은 ① 합병 자료 ② 정산 동의서 효력 ③ 평균임금 ④ 노동청 진정 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. M&A 후 퇴직금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 승계·정산·평균임금·진정·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 영업양도·합병 승계</strong> — 원칙적 근속 통산.</li>\n<li><strong>② 합병 시점 정산 동의 효력</strong> — 강요·기망 시 무효 평가 여지.</li>\n<li><strong>③ 평균임금 산정 기준</strong> — 퇴직 전 3개월 임금.</li>\n<li><strong>④ 노동청 임금체불 진정</strong> — 차액 청구.</li>\n<li><strong>⑤ 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 합병 시점 정산 동의가 사실상 강요였다면 효력 부정 → 합병 전 근속 합산 + 합병 후 임금 기준 평균임금 산정 가능한 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·진정·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 합병·승계 자료 보존 (즉시)</strong> — 합병 공시·법인등기·고용 승계 통지.</li>\n<li><strong>2단계 — 정산 동의 자료 (1주)</strong> — 동의서 사본·당시 회의록·이체 내역.</li>\n<li><strong>3단계 — 노동청 임금체불 진정</strong> — 퇴직금 차액 신청.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 시정 권고.</li>\n<li><strong>5단계 — 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">M&A 후 퇴직금 산정 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 합병·근속·임금 갈래입니다.</strong></p>\n<ul>\n<li><strong>합병 공시·법인등기부등본</strong></li>\n<li><strong>고용 승계 통지·근로계약서 (합병 전 vs 후)</strong></li>\n<li><strong>정산 동의서·중간정산 신청서 (사본)</strong></li>\n<li><strong>합병 시 받은 정산 퇴직금 이체 내역</strong></li>\n<li><strong>합병 전·후 급여명세서 (퇴직 전 3개월)</strong></li>\n<li><strong>취업규칙·퇴직금 규정</strong></li>\n<li><strong>당시 회의록·정산 강요 정황 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 합병 시점 정산 동의서가 \"형식적 통과의례\"였다면 정산 자체가 무효 평가 여지. 당시 회의록·동료 진술서로 강요 입증.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>고용 승계 원칙</strong> — 영업양도·합병은 원칙적 근속 통산.</li>\n<li><strong>정산 동의 효력</strong> — 진정 의사 + 강요 부재.</li>\n<li><strong>중간정산 요건</strong> — 근로자퇴직급여보장법상 사유 제한.</li>\n<li><strong>평균임금 산정 기준</strong> — 퇴직 전 3개월 임금 + 합병 후 변동 반영.</li>\n<li><strong>3년 시효</strong> — 퇴직금 청구권 시효.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 영업양도와 퇴직금 통산',
        summary:
          '대법원 2018두48601(2018.11.29 선고) 영역에서 법원은 영업양도가 이루어진 경우 근로관계가 양수인에게 그대로 승계되고, 퇴직금 산정의 기초가 되는 근속 기간도 양도인에서의 기간과 양수인에서의 기간이 통산되는 것이 원칙이라고 본 사례 흐름이 있습니다.',
        takeaway: '합병·매각 시 근속 통산 원칙. 정산 동의 효력 부재 입증 시 합병 전 근속까지 합산 청구 가능.',
      },
    ],
    faq: [
      {
        question: '합병 시점 정산 동의서에 사인했어요',
        answer:
          '<strong>강요·기망·중간정산 요건 미충족 시 효력 부정 가능합니다.</strong>',
      },
      {
        question: '중간정산 요건은 무엇인가요?',
        answer:
          '<strong>주택 구입·천재지변·요양 등 법령 제한 사유만 가능합니다.</strong> 합병은 사유 아님.',
      },
      {
        question: '합병 후 임금이 올랐어요',
        answer:
          '<strong>퇴직 전 3개월 평균임금이 기준이라 합병 후 임금 반영됩니다.</strong>',
      },
      {
        question: '합병 시 받은 정산금은 어떻게 처리하나요?',
        answer:
          '<strong>총 퇴직금 산정 후 기지급액을 차감해 청구합니다.</strong>',
      },
      {
        question: '시효는 언제 시작되나요?',
        answer:
          '<strong>퇴직일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 청구 절차', href: '/guide/retirement/retirement-payment-claim-procedure' },
      { label: '평균임금 계산', href: '/guide/retirement/retirement-average-wage-calculation' },
      { label: '중간정산 요건', href: '/guide/retirement/retirement-interim-settlement-requirements' },
      { label: '영업양도 고용승계', href: '/guide/dismissal/dismissal-business-transfer-employment-succession-refused' },
      { label: '퇴직금 시효', href: '/guide/retirement/retirement-statute-of-limitations' },
    ],
  },

  // ─── 5. retirement-multiple-business-affiliated-aggregation-track ───
  {
    domain: 'retirement',
    slug: 'retirement-multiple-business-affiliated-aggregation-track',
    keyword: '관계사 다수 재직 근속 합산',
    questionKeyword: '같은 그룹 관계사 3곳에서 12년 근무했는데 각 회사가 따로 퇴직금 정산하려고 합니다.',
    ctaKeyword: '관계사 근속 합산 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '관계사 다수 재직 퇴직금 합산 — 5단계 사용자 동일성 다툼 | 로앤가이드',
      description:
        '같은 그룹 관계사 여러 곳을 옮겨다니며 일했다면 근속 합산·사용자 동일성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"같은 그룹사 A→B→C 세 회사에서 12년 일했어요. 회사가 \'각 회사가 별도 법인이라 퇴직금 따로 정산\'이라며 합산 거부. 그런데 인사 발령 모두 그룹 본사가 했고, 급여 체계도 통일이었어요. 보너스도 같이 받았습니다." 형식적으로 별도 법인이라도 ① 인사·노무 관리 통합 ② 임금·복리후생 동일 ③ 사실상 같은 사업주가 운영 ④ 근로자의 의사 무관 이동이 입증되면 \"사용자 동일성\"이 인정되어 근속 합산 청구가 가능한 영역. 그룹 내 전적·계열사 이동도 결국 하나의 근로관계로 평가될 여지가 있습니다. 대응은 ① 인사관리 통합 ② 임금·복리 동일성 ③ 노동청 진정 ④ 민사 청구 ⑤ 손해배상 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 관계사 근속 합산 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 통합·동일성·이동·진정·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 인사·노무 통합 관리</strong> — 그룹 본사 발령·인사평가.</li>\n<li><strong>② 임금·복리후생 동일</strong> — 같은 급여 체계·보너스·복지.</li>\n<li><strong>③ 본인 의사 무관 이동</strong> — 그룹 인사로 강제 전적.</li>\n<li><strong>④ 노동청 진정</strong> — 퇴직금 미지급 차액.</li>\n<li><strong>⑤ 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형식상 별도 법인이라도 사실상 같은 사용자가 운영한다고 평가될 수 있는 영역. 그룹 인사·통일 임금·강제 전적이 사용자 동일성 입증의 3대 축입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·진정·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 인사 자료 보존 (즉시)</strong> — 그룹 본사 발령장·인사평가서·전적 동의서.</li>\n<li><strong>2단계 — 임금·복리 동일성 입증 (1~2주)</strong> — 전 회사 급여명세서·보너스·복지 자료.</li>\n<li><strong>3단계 — 노동청 임금체불 진정</strong> — 합산 근속 기준 차액.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 시정 권고.</li>\n<li><strong>5단계 — 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">관계사 근속 합산 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 인사·임금·복리 갈래입니다.</strong></p>\n<ul>\n<li><strong>그룹 본사 발령장·인사발령 통지</strong></li>\n<li><strong>각 회사 근로계약서·재직증명서</strong></li>\n<li><strong>각 회사 급여명세서·보너스 지급내역</strong></li>\n<li><strong>그룹 인사평가서·승진 기록</strong></li>\n<li><strong>전적 동의서·전출 통지</strong></li>\n<li><strong>그룹 사보·복지 정책 자료</strong></li>\n<li><strong>각 회사 등기부등본 (관계사 입증)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인 의사 무관하게 이동한 경우 \"전적 동의서\"는 형식적 사인일 가능성. 당시 통지 메일·면담 기록이 강요 입증 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사용자 동일성</strong> — 그룹 본사 인사권 행사가 핵심 징표.</li>\n<li><strong>전적 동의 효력</strong> — 강요·기망 시 효력 부정 여지.</li>\n<li><strong>임금·복리 동일성</strong> — 별도 법인 흔적 부재 시 단일 사용자 평가.</li>\n<li><strong>각 정산 합산 vs 차액</strong> — 각 회사 받은 정산 + 합산 차액 청구.</li>\n<li><strong>3년 시효</strong> — 마지막 퇴직일부터.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사용자 동일성과 근속 통산',
        summary:
          '대법원 2002두19933(2002.07.23 선고) 영역에서 법원은 형식상 별개의 법인이라 하더라도 실질적으로 동일한 사용자가 인사·노무를 통합 관리한다고 평가될 수 있는 경우 근로관계의 동일성을 인정할 여지가 있고, 이때 근속 기간도 통산되는 것이 원칙이라고 본 사례 흐름이 있습니다.',
        takeaway: '관계사 이동도 인사 통합·임금 동일성 입증 시 근속 합산. 그룹 본사 인사 발령이 결정적 사정.',
      },
    ],
    faq: [
      {
        question: '전적 동의서에 사인한 경우는요?',
        answer:
          '<strong>강요 입증 시 효력 부정 가능합니다.</strong> 본인 의사 무관 이동 정황이 핵심.',
      },
      {
        question: '각 회사가 별도 퇴직금을 정산해 줬어요',
        answer:
          '<strong>총 합산 근속 기준 산정 후 기지급액을 차감해 차액 청구합니다.</strong>',
      },
      {
        question: '그룹 본사가 모회사가 아니어도 되나요?',
        answer:
          '<strong>실질적 통합 관리 입증이 핵심이지 지분 구조는 절대 기준 아닙니다.</strong>',
      },
      {
        question: '시효는 언제부터 시작되나요?',
        answer:
          '<strong>마지막 퇴직일부터 3년입니다.</strong>',
      },
      {
        question: '관계사 중 일부만 합산 가능한가요?',
        answer:
          '<strong>각 회사별로 사용자 동일성을 별도 심사합니다.</strong>',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 청구 절차', href: '/guide/retirement/retirement-payment-claim-procedure' },
      { label: '평균임금 계산', href: '/guide/retirement/retirement-average-wage-calculation' },
      { label: '근속 산정 기준', href: '/guide/retirement/retirement-tenure-calculation' },
      { label: '영업양도 승계', href: '/guide/dismissal/dismissal-business-transfer-employment-succession-refused' },
      { label: '퇴직금 시효', href: '/guide/retirement/retirement-statute-of-limitations' },
    ],
  },
];
