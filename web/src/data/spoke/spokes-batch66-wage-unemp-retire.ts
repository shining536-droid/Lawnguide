import { SpokePage } from '../spoke-pages';

// batch66 wage(2) + unemployment(1) + retirement(2) — 5개 (2026-05-16)
//
// 고유 존재 이유:
// 1. wage-holiday-work-50-50-additional-pay-track — 일요일·법정공휴일 근로 시 통상임금 50% + 8시간 초과분 100% 가산수당 미지급 다툼 (기존 holiday-* 부재).
// 2. wage-piece-rate-pay-minimum-wage-floor-track — 도급제·성과급제 근로자 최저임금 적용 및 시급 환산 차액 청구 (기존 piece-rate·minimum-wage 결합 부재).
// 3. unemployment-recurring-illness-quit-medical-track — 만성·재발성 질병으로 자진퇴사 정당사유 (기존 unemployment-* 의사 진단·직무전환 거부 결합 부재).
// 4. retirement-pre-retirement-bonus-average-wage-skip-track — 퇴직 직전 3개월 보너스·인센티브 평균임금 누락 차액 청구 (기존 average-wage 보너스 결합 부재).
// 5. retirement-probation-included-tenure-track — 수습 3개월·인턴기간 근속 포함 및 명시 제외 약정의 효력 한계 (기존 probation 근속 결합 부재).

export const spokesBatch66WageUnempRetire: SpokePage[] = [
  // ─── 1. wage-holiday-work-50-50-additional-pay-track ───
  {
    domain: 'wage',
    slug: 'wage-holiday-work-50-50-additional-pay-track',
    keyword: '휴일근로 가산수당 미지급',
    questionKeyword: '일요일·법정공휴일에 일했는데 휴일수당이 안 나와요. 청구 가능한가요?',
    ctaKeyword: '휴일근로 가산수당 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '휴일근로 가산수당 미지급 — 5단계 50%·100% 청구 정리 | 로앤가이드',
      description:
        '일요일·법정공휴일 근로에 휴일수당이 누락됐다면 통상임금 50%·8시간 초과분 100% 가산 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"교대근무로 일요일·법정공휴일에도 평일과 똑같이 8시간 일했는데 휴일수당은 \'기본급에 포함\'이라며 0원. 어느 달은 일요일 4번·공휴일 2번이 겹쳐 총 48시간을 휴일에 근무했는데 가산수당 명목으로 받은 돈이 없습니다." 근로기준법 제56조는 ① 휴일근로 8시간 이내는 통상임금 50% 가산 ② 8시간 초과분은 100% 가산을 명시한 영역. 5인 이상 사업장이라면 공휴일에 관한 법률에 따라 법정공휴일도 유급휴일에 포함될 수 있고, 미지급 시 임금체불·형사 처벌까지 다툼 가능합니다. 대응은 ① 근무 기록 ② 가산수당 계산 ③ 노동청 진정 ④ 차액 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 휴일근로 가산수당 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 근무·계산·진정·차액·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 휴일 근무 사실 입증</strong> — 출퇴근 기록·근무표.</li>\n<li><strong>② 가산수당 계산</strong> — 8시간 이내 50%, 초과 100%.</li>\n<li><strong>③ 노동청 임금체불 진정</strong> — 미지급 휴일수당 신청.</li>\n<li><strong>④ 5인 이상 사업장 확인</strong> — 적용 요건.</li>\n<li><strong>⑤ 민사 임금청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 휴일근로는 단순히 평일 임금을 받는 것을 넘어 별도 가산수당이 발생하는 영역. 8시간 초과분은 50%가 아닌 100% 가산이 적용되는 점이 가장 자주 누락되는 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·진정·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근무 기록 보존 (즉시)</strong> — 출퇴근·교대표·근무일지.</li>\n<li><strong>2단계 — 가산수당 산정 (1주)</strong> — 통상시급 × 50%·100% × 휴일시간.</li>\n<li><strong>3단계 — 노동청 임금체불 진정 (1~3개월)</strong> — 미지급 휴일수당 신청.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 시정 권고·검찰 송치.</li>\n<li><strong>5단계 — 민사 임금청구·손해배상</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">휴일근로 가산수당 청구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 근무·산정·계약 갈래입니다.</strong></p>\n<ul>\n<li><strong>출퇴근 기록·전자 입출입 로그 (휴일 근무일)</strong></li>\n<li><strong>근무표·교대표·근무일지</strong></li>\n<li><strong>급여명세서 (휴일수당 항목 분리 확인)</strong></li>\n<li><strong>근로계약서·취업규칙</strong></li>\n<li><strong>4대보험 가입자 명부 (5인 이상 입증)</strong></li>\n<li><strong>법정공휴일 달력·연도별 공휴일 자료</strong></li>\n<li><strong>동료 진술서 (같은 휴일 근무 입증)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 휴일 근무일·시간을 명확히 분리한 자료가 핵심. 카카오톡 업무 지시·근무 인계 메시지도 휴일 근무 입증 자료로 활용 가능. 동료 다수의 동일 패턴 입증이 신뢰도를 높입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>5인 미만 사업장</strong> — 가산수당 적용 제외, 인원 산정 다툼.</li>\n<li><strong>법정공휴일 vs 약정휴일</strong> — 적용 범위·근거 다툼.</li>\n<li><strong>대체휴일 부여</strong> — 적법 대체 시 가산수당 미발생.</li>\n<li><strong>포괄임금 주장</strong> — 휴일수당 분리·명시 부재 시 효력 부정 가능.</li>\n<li><strong>3년 시효</strong> — 각 휴일 근무일별 별도 진행.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 휴일근로 가산수당',
        summary:
          '대법원 2017다232020(대법원, 2020.06.25 선고) 영역에서 법원은 휴일근로에 대한 가산임금의 지급방법 및 1주간 휴일근로시간이 8시간을 초과하는 경우 통상임금의 100분의 100을 가산한 가산수당을 지급해야 하는지 여부에 관한 사례 흐름을 다툰 바 있습니다.',
        takeaway: '휴일근로 8시간 이내 50%, 초과 100% 가산. 미지급 시 임금체불 + 민사 차액 청구 가능 영역.',
      },
    ],
    faq: [
      {
        question: '5인 미만 사업장에서도 휴일수당이 나오나요?',
        answer:
          '<strong>5인 미만 사업장은 가산수당 적용이 제외되는 영역입니다.</strong> 단, 약정 휴일수당은 별도.',
      },
      {
        question: '대체휴일을 받으면 휴일수당 못 받나요?',
        answer:
          '<strong>근로자 대표 서면 합의로 적법 대체된 경우 가산수당 미발생입니다.</strong>',
      },
      {
        question: '8시간 초과분 100% 가산이 맞나요?',
        answer:
          '<strong>휴일 8시간 초과 근로분은 통상임금의 100% 가산이 적용됩니다.</strong>',
      },
      {
        question: '포괄임금이라 못 받는다는데요?',
        answer:
          '<strong>휴일수당 분리·금액 명시 부재 시 효력 부정 가능한 영역입니다.</strong>',
      },
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>각 휴일 근무일 임금 지급일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 신고', href: '/guide/wage/wage-unpaid-complaint-procedure' },
      { label: '연장근로수당', href: '/guide/wage/wage-overtime-allowance-claim' },
      { label: '통상임금 계산', href: '/guide/wage/wage-ordinary-wage-calculation' },
      { label: '임금 시효', href: '/guide/wage/wage-claim-statute-of-limitations' },
      { label: '간이대지급금', href: '/guide/wage/wage-simplified-replacement-payment' },
    ],
  },

  // ─── 2. wage-piece-rate-pay-minimum-wage-floor-track ───
  {
    domain: 'wage',
    slug: 'wage-piece-rate-pay-minimum-wage-floor-track',
    keyword: '도급제 최저임금',
    questionKeyword: '도급제·성과급제로 일하는데 시급으로 환산하면 최저임금 미만이에요. 청구 가능한가요?',
    ctaKeyword: '도급제 최저임금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '도급제 최저임금 미달 — 5단계 시급 환산 차액 청구 정리 | 로앤가이드',
      description:
        '도급제·성과급제로 일해도 시급 환산 최저임금 미달 시 차액 청구 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"택배·배달·미싱·재단 일을 도급제로 받고 있는데 매일 12시간 일해도 월 180만원 수준. 시급으로 환산하면 최저임금에 한참 미달합니다. 회사는 \'도급제는 성과 따라 받는 거라 최저임금 적용 안 된다\'고 주장하는데 정말 그런가요?" 최저임금법 제6조는 ① 도급제·성과급제 근로자에게도 최저임금이 적용되고 ② 실제 근로시간을 기준으로 시급 환산해 비교한다는 점을 명시한 영역. 형식상 \"도급\"이라도 사용자의 지휘·감독을 받는 종속적 근로라면 근로자성 인정과 함께 최저임금 차액 청구가 가능합니다. 대응은 ① 근로시간 입증 ② 시급 환산 ③ 노동청 진정 ④ 차액 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 도급제 최저임금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 시간·환산·진정·차액·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 실제 근로시간 입증</strong> — 작업 시작·종료 시각.</li>\n<li><strong>② 시급 환산</strong> — 월 도급액 ÷ 월 근로시간.</li>\n<li><strong>③ 최저임금 미달 확인</strong> — 해당 연도 최저시급 비교.</li>\n<li><strong>④ 노동청 임금체불 진정</strong> — 차액 신청.</li>\n<li><strong>⑤ 민사 임금청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 도급제·성과급제도 최저임금 적용 대상인 영역. 실제 근로시간을 시급으로 환산했을 때 최저임금 미달이면 차액 청구가 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·진정·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근로시간·도급액 자료 보존 (즉시)</strong> — 작업 일지·이체 내역.</li>\n<li><strong>2단계 — 시급 환산·미달 산정 (1주)</strong> — 월 도급액 ÷ 월 시간.</li>\n<li><strong>3단계 — 노동청 임금체불 진정</strong> — 최저임금 차액 신청.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 근로자성·시급 환산 심사.</li>\n<li><strong>5단계 — 민사 임금청구·손해배상</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">도급제 최저임금 차액 청구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 시간·도급액·근로자성 갈래입니다.</strong></p>\n<ul>\n<li><strong>작업 일지·출퇴근 기록·운행 기록</strong></li>\n<li><strong>도급 계약서·단가표·성과 산정 기준</strong></li>\n<li><strong>도급액 이체 내역·세금계산서</strong></li>\n<li><strong>근로자성 입증 자료 (출근 지시·복장·업무 통제)</strong></li>\n<li><strong>해당 연도 최저임금 고시</strong></li>\n<li><strong>업무 지시·감독 메시지 (카카오톡·문자)</strong></li>\n<li><strong>동료 진술서 (같은 근로 형태 입증)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \"도급\"이라는 명칭만으로는 근로자성이 부정되지 않는 영역. 출근 시간 지정·업무 매뉴얼·복장 통제·전속성이 인정되면 근로자성·최저임금 적용 가능 트랙.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>근로자성 판단</strong> — 종속성·전속성·지휘 감독.</li>\n<li><strong>근로시간 산정</strong> — 대기·이동 시간 포함 여부.</li>\n<li><strong>도급 단가의 합리성</strong> — 통상 작업 시간 기준 환산.</li>\n<li><strong>특수형태 근로자 적용</strong> — 산재·고용보험 별도.</li>\n<li><strong>3년 시효</strong> — 각 도급 정산일별 별도.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>최저임금위원회 044-202-7770</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 도급 형식 근로자성',
        summary:
          '대법원 2018다287287(대법원, 2022.04.14 선고) 영역에서 법원은 형식상 도급계약을 체결하였더라도 사용자의 지휘·감독을 받으며 종속적인 관계에서 근로를 제공하였다면 근로기준법상 근로자에 해당할 수 있다고 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '도급 명칭과 무관하게 종속적 근로 인정 시 최저임금 적용. 차액 청구 가능한 영역.',
      },
    ],
    faq: [
      {
        question: '도급계약서에 사인했어도 최저임금 받을 수 있나요?',
        answer:
          '<strong>실질적 종속 근로 인정 시 명칭 무관하게 적용 가능한 영역입니다.</strong>',
      },
      {
        question: '시급 환산은 어떻게 하나요?',
        answer:
          '<strong>월 도급액 ÷ 실제 월 근로시간으로 환산해 최저시급과 비교합니다.</strong>',
      },
      {
        question: '이동·대기 시간도 근로시간에 포함되나요?',
        answer:
          '<strong>업무 수행을 위해 통제 받은 시간은 근로시간 평가 영역입니다.</strong>',
      },
      {
        question: '특수형태 근로자도 적용되나요?',
        answer:
          '<strong>근로자성 인정 여부에 따라 달라지는 영역입니다.</strong> 종속성·전속성이 핵심 사정.',
      },
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>각 도급 정산일·지급일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 신고', href: '/guide/wage/wage-unpaid-complaint-procedure' },
      { label: '근로자성 판단', href: '/guide/wage/wage-worker-status-judgement' },
      { label: '통상임금 계산', href: '/guide/wage/wage-ordinary-wage-calculation' },
      { label: '임금 시효', href: '/guide/wage/wage-claim-statute-of-limitations' },
      { label: '간이대지급금', href: '/guide/wage/wage-simplified-replacement-payment' },
    ],
  },

  // ─── 3. unemployment-recurring-illness-quit-medical-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-recurring-illness-quit-medical-track',
    keyword: '재발성 질병 자진퇴사 실업급여',
    questionKeyword: '허리디스크·자가면역질환 같은 재발성 질병으로 자진퇴사했는데 실업급여 받을 수 있나요?',
    ctaKeyword: '질병 자진퇴사 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '재발성 질병 자진퇴사 — 5단계 실업급여 정당사유 정리 | 로앤가이드',
      description:
        '만성·재발성 질병으로 자진퇴사 했다면 의사 진단서·직무전환 거부 5가지 정당사유 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3년차 사무직인데 허리디스크가 재발해 6개월간 치료를 받았고 의사는 \'장시간 좌식 근무는 회복을 어렵게 한다\'고 진단했어요. 회사에 보직 변경·재택근무를 요청했는데 \'그런 자리는 없다\'며 거부. 결국 자진퇴사했는데 고용센터에서 \'개인 사정\'으로 분류된다는 안내를 받았습니다." 고용보험법 시행규칙은 \"본인의 질병·부상 등으로 업무를 수행하는 것이 곤란하고 사업주가 사정상 업무 전환 또는 휴직이 허용되지 않은 경우\"를 자진퇴사 정당사유로 명시한 영역. 의사 진단서·직무전환 요청·거부 기록이 핵심 입증 자료가 됩니다. 대응은 ① 의학적 입증 ② 회사 요청·거부 기록 ③ 수급 신청 ④ 이의신청 ⑤ 행정 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 재발성 질병 자진퇴사 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·요청·거부·신청·이의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 의학적 진단</strong> — 1개월 이상 치료 필요 진단서.</li>\n<li><strong>② 업무 수행 곤란성</strong> — 직무 특성과 질병 간 상관.</li>\n<li><strong>③ 회사에 직무전환·휴직 요청</strong> — 서면·이메일 기록.</li>\n<li><strong>④ 회사 거부 입증</strong> — 답변·거부 자료.</li>\n<li><strong>⑤ 수급 신청 (이직일 12개월 내)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 질병 자진퇴사가 아니라 \"업무 곤란 + 회사의 직무전환·휴직 거부\" 두 축이 결합해야 정당사유 인정 가능 영역. 진단서 1개월 이상 + 회사 요청 기록이 핵심 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신청 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·신청·이의 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 의학적 자료 보존 (즉시)</strong> — 진단서·소견서·치료 기록.</li>\n<li><strong>2단계 — 회사 요청 기록 (1~2주)</strong> — 직무전환·휴직 요청 서면.</li>\n<li><strong>3단계 — 고용센터 수급 신청 (이직일 12개월 내)</strong> — 정당사유 자진퇴사 기재.</li>\n<li><strong>4단계 — 거부 시 이의신청 (90일 내)</strong> — 고용보험심사관.</li>\n<li><strong>5단계 — 심사청구·재심사청구 (90일)</strong> — 고용보험심사위원회.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">재발성 질병 자진퇴사 정당사유 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·요청·거부 갈래입니다.</strong></p>\n<ul>\n<li><strong>의사 진단서 (1개월 이상 치료 필요·재발성 명시)</strong></li>\n<li><strong>치료 기록·처방전·MRI 등 영상 자료</strong></li>\n<li><strong>회사에 직무전환·재택근무·휴직 요청 서면·이메일</strong></li>\n<li><strong>회사 거부 답변·인사 통지</strong></li>\n<li><strong>근로계약서·직무 기술서 (직무 부담 입증)</strong></li>\n<li><strong>이직확인서·고용보험 자격 확인</strong></li>\n<li><strong>회사 내 보직 변경 사례 자료 (있을 시 비교)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진단서에 \"현재 직무 수행이 곤란\"이라는 의학적 의견이 있으면 직무 부담 입증에 결정적. 회사 요청 기록은 카카오톡·이메일 캡처로 시점 입증 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>업무 곤란성 입증</strong> — 직무 특성·질병 간 의학적 상관.</li>\n<li><strong>회사 측 직무전환 노력</strong> — 거부 자료 시점·내용.</li>\n<li><strong>휴직 가능성</strong> — 회사 휴직 규정·운영 실태.</li>\n<li><strong>12개월 신청 기간</strong> — 이직일 후 12개월 경과 시 수급권 소멸.</li>\n<li><strong>이의신청 90일</strong> — 거부 처분 통지 후.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 고객센터 1350</strong></li>\n<li><strong>고용보험 1577-7114</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 질병 자진퇴사 정당사유',
        summary:
          '서울행정법원 2019구합71522(서울행정법원, 2020.05.21 선고) 영역에서 법원은 근로자가 본인의 질병으로 업무 수행이 곤란해 사업주에게 업무 전환·휴직을 요청하였으나 사정상 허용되지 아니하여 이직한 경우, 자진퇴사라도 수급자격 정당사유에 해당할 수 있다고 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '질병으로 인한 업무 곤란 + 회사의 직무전환·휴직 거부 두 축 결합 시 정당사유 인정 가능 영역.',
      },
    ],
    faq: [
      {
        question: '진단서 한 장으로 충분한가요?',
        answer:
          '<strong>1개월 이상 치료 필요·재발성 명시가 포함되면 인정에 유리합니다.</strong>',
      },
      {
        question: '회사에 휴직 요청을 안 했어도 되나요?',
        answer:
          '<strong>요청·거부 기록이 없으면 정당사유 인정이 어려워질 수 있는 영역입니다.</strong>',
      },
      {
        question: '정신질환·우울증도 인정되나요?',
        answer:
          '<strong>의학적 진단·업무 곤란성 입증되면 같은 기준으로 평가 가능합니다.</strong>',
      },
      {
        question: '산재 신청과 동시에 가능한가요?',
        answer:
          '<strong>산재는 별도 절차이며 실업급여와 중복 수급은 제한될 수 있는 영역입니다.</strong>',
      },
      {
        question: '거부 후 얼마나 뒤에 퇴사해야 하나요?',
        answer:
          '<strong>거부 시점과 퇴사 시점이 인접할수록 인과관계 입증에 유리합니다.</strong>',
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

  // ─── 4. retirement-pre-retirement-bonus-average-wage-skip-track ───
  {
    domain: 'retirement',
    slug: 'retirement-pre-retirement-bonus-average-wage-skip-track',
    keyword: '퇴직 직전 보너스 평균임금',
    questionKeyword: '퇴직 직전 3개월에 받은 보너스·인센티브가 평균임금에서 빠졌어요. 차액 청구 가능한가요?',
    ctaKeyword: '평균임금 보너스 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '퇴직 직전 보너스 평균임금 누락 — 5단계 차액 청구 정리 | 로앤가이드',
      description:
        '퇴직 직전 3개월 보너스·인센티브가 평균임금에서 누락됐다면 통상임금성·차액 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"10년 근속 후 퇴직했는데 회사가 평균임금에 \'분기 보너스\'와 \'영업 인센티브\'를 뺐어요. 직전 3개월에 보너스 500만원, 인센티브 300만원을 받았는데 모두 \'일회성·비정기적\'이라는 이유로 산정에서 누락. 퇴직금이 1,000만원 가까이 줄었습니다." 근로기준법 시행령 제2조는 평균임금을 \"퇴직 전 3개월간 지급된 임금 총액 ÷ 그 기간의 총 일수\"로 산정한다고 명시한 영역. 정기·일률적으로 지급된 보너스·인센티브는 임금성이 인정되어 평균임금에 포함되는 트랙이고, 회사가 자의적으로 제외하면 차액 청구가 가능합니다. 대응은 ① 지급 이력 ② 임금성 입증 ③ 노동청 진정 ④ 차액 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 보너스 평균임금 누락 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 이력·임금성·진정·차액·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 보너스 지급 이력</strong> — 정기·일률성 입증.</li>\n<li><strong>② 임금성 평가</strong> — 산정 기준의 고정성.</li>\n<li><strong>③ 평균임금 재산정</strong> — 직전 3개월 총임금 ÷ 90일.</li>\n<li><strong>④ 노동청 임금체불 진정</strong> — 차액 신청.</li>\n<li><strong>⑤ 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보너스·인센티브가 정기·일률적으로 지급되어 임금성이 인정되면 평균임금 산입 영역. 직전 3개월 산정 구간에 포함된 지급분이 누락됐다면 차액 청구가 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·재산정·진정·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 지급 이력 보존 (즉시)</strong> — 3년치 보너스·인센티브 내역.</li>\n<li><strong>2단계 — 평균임금 재산정 (1~2주)</strong> — 누락분 포함 ÷ 90일.</li>\n<li><strong>3단계 — 노동청 임금체불 진정</strong> — 차액 신청.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 임금성 심사.</li>\n<li><strong>5단계 — 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">평균임금 보너스 누락 차액 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 이력·기준·산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>3년치 급여명세서·보너스 지급 내역</strong></li>\n<li><strong>보너스·인센티브 산정 기준·KPI 규정</strong></li>\n<li><strong>퇴직금 산정서·평균임금 계산표 (회사 제공)</strong></li>\n<li><strong>취업규칙·상여금 규정·근로계약서</strong></li>\n<li><strong>이체 내역서 (지급 시점·금액 입증)</strong></li>\n<li><strong>동료 진술서 (같은 보너스 지급 입증)</strong></li>\n<li><strong>퇴직증명서·이직확인서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보너스가 3년 이상 매 분기·매 반기 정기 지급되었다면 임금성 평가에 강력. 산정 기준이 취업규칙·계약서에 명시되어 있으면 일률성 입증 자료로 활용 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임금성 vs 은혜적 금품</strong> — 정기·일률·고정성 3요소 심사.</li>\n<li><strong>특별 보너스 제외</strong> — 일회성 명목 이의 시 임금성 입증.</li>\n<li><strong>연간 보너스 안분</strong> — 12개월 분할 산정 가능.</li>\n<li><strong>최종 3개월 산정 구간</strong> — 지급일이 구간에 포함됐는지.</li>\n<li><strong>3년 시효</strong> — 퇴직일부터.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보너스 평균임금성',
        summary:
          '대법원 2011다23149(대법원, 2013.12.18 선고) 영역에서 법원은 평균임금 산정의 기초가 되는 임금에 포함될 수 있는 상여금의 범위 및 정기적·일률적으로 지급된 상여금이 임금성을 가질 수 있는지를 다툰 사례 흐름이 있습니다.',
        takeaway: '정기·일률 지급된 보너스는 평균임금 산입 영역. 누락 시 평균임금 재산정·차액 청구 가능 트랙.',
      },
    ],
    faq: [
      {
        question: '회사가 "일회성"이라며 빼면 어떻게 하나요?',
        answer:
          '<strong>3년 이상 정기 지급 이력이 있으면 임금성 평가가 가능한 영역입니다.</strong>',
      },
      {
        question: '연 1회 지급되는 명절 보너스도 포함되나요?',
        answer:
          '<strong>정기·일률 지급되면 12개월 안분해 평균임금 산입 가능한 영역입니다.</strong>',
      },
      {
        question: '평균임금 산정 구간은 어떻게 정해지나요?',
        answer:
          '<strong>퇴직일 직전 3개월(90일)간 지급 총액 ÷ 90일이 기본 산정식입니다.</strong>',
      },
      {
        question: '인센티브 산정 기준이 매년 바뀌었어요',
        answer:
          '<strong>기준의 변경 자체보다 실제 정기 지급 실태가 더 결정적 평가 사정입니다.</strong>',
      },
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>퇴직일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 청구 절차', href: '/guide/retirement/retirement-payment-claim-procedure' },
      { label: '평균임금 계산', href: '/guide/retirement/retirement-average-wage-calculation' },
      { label: '통상임금 계산', href: '/guide/wage/wage-ordinary-wage-calculation' },
      { label: '중간정산 요건', href: '/guide/retirement/retirement-interim-settlement-requirements' },
      { label: '퇴직금 시효', href: '/guide/retirement/retirement-statute-of-limitations' },
    ],
  },

  // ─── 5. retirement-probation-included-tenure-track ───
  {
    domain: 'retirement',
    slug: 'retirement-probation-included-tenure-track',
    keyword: '수습기간 근속 포함 퇴직금',
    questionKeyword: '수습 3개월·인턴기간이 근속에 안 들어가서 퇴직금이 줄었어요. 합산 청구 가능한가요?',
    ctaKeyword: '수습기간 근속 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '수습기간 근속 포함 — 5단계 퇴직금 합산 청구 정리 | 로앤가이드',
      description:
        '수습 3개월·인턴기간이 퇴직금 근속에서 누락됐다면 근로기준법 보호·차액 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"인턴 6개월 후 정규직 전환해 4년 11개월 일하고 퇴직했어요. 그런데 회사는 \'인턴 6개월은 근속에 포함되지 않는다\'며 4년 11개월만 인정. 결국 5년 미만이라는 이유로 퇴직금이 깎였습니다. 인턴 때도 같은 사무실에서 같은 업무를 했는데 왜 근속에서 빠지는 건가요?" 근로기준법은 ① 사용자의 지휘·감독을 받으며 ② 임금을 목적으로 ③ 종속적으로 근로를 제공한 모든 기간을 근속으로 평가하는 영역. 수습·인턴기간이라도 실질이 근로라면 근속에 산입되는 트랙이고, 명시 제외 약정도 강행규정 위반 시 효력이 부정될 수 있습니다. 대응은 ① 근로 실질 입증 ② 약정 효력 ③ 노동청 진정 ④ 차액 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 수습기간 근속 산입 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 실질·약정·진정·차액·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 수습·인턴기간 근로 실질</strong> — 업무·임금·지휘 감독.</li>\n<li><strong>② 명시 제외 약정 효력</strong> — 강행규정 위반 시 무효.</li>\n<li><strong>③ 노동청 임금체불 진정</strong> — 차액 신청.</li>\n<li><strong>④ 평균임금 재산정</strong> — 근속 1년당 30일 평균임금.</li>\n<li><strong>⑤ 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 수습·인턴이라는 명칭과 무관하게 실질이 근로라면 근속 산입 영역. 같은 업무·같은 지휘 감독·임금 지급이 인정되면 근속 통산이 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·진정·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 수습·인턴기간 자료 보존 (즉시)</strong> — 계약서·급여명세서·업무 기록.</li>\n<li><strong>2단계 — 근로 실질 입증 (1~2주)</strong> — 업무 동일성·지휘 감독.</li>\n<li><strong>3단계 — 노동청 임금체불 진정</strong> — 누락 근속 차액 신청.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 시정 권고.</li>\n<li><strong>5단계 — 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">수습기간 근속 산입 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 실질·약정·산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>수습·인턴 계약서·정규직 전환 계약서</strong></li>\n<li><strong>수습기간 급여명세서·이체 내역 (임금성 입증)</strong></li>\n<li><strong>출퇴근 기록·업무 일지 (같은 업무 입증)</strong></li>\n<li><strong>업무 지시·평가 자료 (지휘 감독)</strong></li>\n<li><strong>4대보험 자격 취득·변동 내역</strong></li>\n<li><strong>취업규칙·인사규정 (수습 제외 조항)</strong></li>\n<li><strong>퇴직금 산정서·평균임금 계산표</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 수습 기간에 실제 임금을 받고 동일 업무를 수행했다면 근로자성 강력 입증. 4대보험 가입 시점은 근로 시작 입증의 객관 자료로 활용 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>수습 vs 시용 vs 인턴</strong> — 명칭과 실질의 분리.</li>\n<li><strong>명시 제외 약정 효력</strong> — 강행규정 위반 시 무효 평가 여지.</li>\n<li><strong>교육·연수 vs 근로</strong> — 임금·업무 수행 실질로 판단.</li>\n<li><strong>1년 미만 vs 1년 이상</strong> — 퇴직금 발생 요건 점검.</li>\n<li><strong>3년 시효</strong> — 퇴직일부터.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 수습기간 근속 산입',
        summary:
          '대법원 2010다100629(대법원, 2013.05.23 선고) 영역에서 법원은 수습사원 또는 시용 기간이라도 사용자의 지휘·감독을 받으며 임금을 목적으로 근로를 제공한 경우 그 기간은 계속근로기간에 포함될 수 있다고 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '수습·시용·인턴기간도 근로 실질 인정 시 근속 통산. 명시 제외 약정의 효력은 강행규정과의 충돌로 다툼 가능.',
      },
    ],
    faq: [
      {
        question: '계약서에 "수습기간은 근속에 포함되지 않는다"고 적혀 있어요',
        answer:
          '<strong>강행규정 위반 시 효력이 부정될 수 있는 영역입니다.</strong>',
      },
      {
        question: '인턴 시급이 정규직보다 낮았으면 어떻게 되나요?',
        answer:
          '<strong>임금성·근로자성은 인정될 수 있고 차액·근속은 별도 평가 영역입니다.</strong>',
      },
      {
        question: '교육·연수 기간은 어떻게 평가되나요?',
        answer:
          '<strong>실제 업무 수행·임금 지급 여부로 판단되는 영역입니다.</strong>',
      },
      {
        question: '4대보험 가입이 정규직 전환 후였어요',
        answer:
          '<strong>가입 시점은 참고 자료이며 실질 근로 입증이 더 결정적인 영역입니다.</strong>',
      },
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>퇴직일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 청구 절차', href: '/guide/retirement/retirement-payment-claim-procedure' },
      { label: '근속 산정 기준', href: '/guide/retirement/retirement-tenure-calculation' },
      { label: '평균임금 계산', href: '/guide/retirement/retirement-average-wage-calculation' },
      { label: '중간정산 요건', href: '/guide/retirement/retirement-interim-settlement-requirements' },
      { label: '퇴직금 시효', href: '/guide/retirement/retirement-statute-of-limitations' },
    ],
  },
];
