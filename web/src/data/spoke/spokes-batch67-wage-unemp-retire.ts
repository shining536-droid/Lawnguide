import { SpokePage } from '../spoke-pages';

// batch67 wage-unemp-retire — 5개 (2026-05-17)
//
// 고유 존재 이유:
// 1. wage-base-salary-hidden-allowance-revealed-track — 기본급에 포함되어야 할 임금을 "근속수당·직무수당" 명목으로 분리해 통상임금 산정에서 누락시키는 위장 다툼 (기존 comprehensive-pay·meal-allowance 결합 부재).
// 2. wage-yearend-bonus-customary-revoke-track — 8년간 매년 연말에 지급된 상여금의 일방 폐지 + 노사관행 묵시적 합의 단위 다툼 (기존 regular-bonus-ordinary·bonus-customary 일방 폐지 결합 부재).
// 3. unemployment-private-academy-instructor-contract-end-track — 학원·교습소 강사 위탁계약 형식 + 사용종속 실질·4대보험 사후가입·실업급여 자격 트랙 (기존 fixed-term·freelancer·dispatch 학원강사 결합 부재).
// 4. retirement-foreign-currency-bonus-fluctuation-track — 달러 표시 인센티브의 환산 기준일·환율 일관성 + 평균임금 산입 다툼 (기존 incentive-bonus·startup-equity 외화 환차 결합 부재).
// 5. retirement-meal-card-prepaid-welfare-included-track — 월 25만원 식대 선불카드(복지카드) 형태 지급의 임금성·평균임금 산입 (기존 welfare-card-point·meal-allowance 선불카드 형식 결합 부재).

export const spokesBatch67WageUnempRetire: SpokePage[] = [
  // ─── 1. wage-base-salary-hidden-allowance-revealed-track ───
  {
    domain: 'wage',
    slug: 'wage-base-salary-hidden-allowance-revealed-track',
    keyword: '기본급 위장 수당 통상임금 산입',
    questionKeyword: '기본급은 200만원인데 실제론 "근속수당 50" "직무수당 80" 식으로 쪼개 통상임금 산정에서 빼고 있어요.',
    ctaKeyword: '기본급 위장 수당 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '기본급 위장 수당 — 5단계 통상임금 산입·차액 청구 정리 | 로앤가이드',
      description:
        '기본급을 근속수당·직무수당으로 쪼개 통상임금에서 빼고 있다면 정기성·일률성·고정성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"입사 8년차인데 계약서상 기본급은 200만원에 묶여 있고 실제 명세서는 \'근속수당 50만원·직무수당 80만원·직책수당 30만원\' 식으로 쪼개져 있어요. 회사는 \'기본급만 통상임금\'이라며 연장·휴일·연차수당을 200만원 기준으로만 계산. 매달 받는 고정 수당까지 합치면 360만원인데 통상시급은 1만원도 안 됩니다." 대법원 판례는 ① 정기적·일률적·고정적으로 지급되는 금품은 명칭과 무관하게 통상임금에 산입되고 ② 회사가 임의로 \"수당\"이라 분류해 제외할 수 없다는 점을 명확히 한 영역. 근속·직무·직책수당이 실질적으로 기본급의 일부라면 통상임금 재산정과 차액 청구가 가능합니다. 대응은 ① 지급 실태 ② 통상임금 평가 ③ 노동청 진정 ④ 차액 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 기본급 위장 수당 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 실태·평가·진정·차액·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 수당 지급 실태</strong> — 정기·일률 지급 여부.</li>\n<li><strong>② 통상임금성 평가</strong> — 정기성·일률성·고정성 3요소.</li>\n<li><strong>③ 통상임금 재산정</strong> — 누락 수당 포함 시급.</li>\n<li><strong>④ 노동청 임금체불 진정</strong> — 가산수당·연차수당 차액 신청.</li>\n<li><strong>⑤ 민사 임금청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 수당 명칭보다 지급 실태가 결정적인 영역. 매달 같은 금액이 같은 조건의 근로자 전체에 지급되면 명칭과 무관하게 통상임금 산입 평가가 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·진정·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 급여명세서·계약서 보존 (즉시)</strong> — 최소 3년치 수당 항목별 분리 확인.</li>\n<li><strong>2단계 — 통상임금 재산정 (1~2주)</strong> — 누락 수당 포함 시급 산정.</li>\n<li><strong>3단계 — 노동청 임금체불 진정</strong> — 차액 신청.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 임금성 심사·시정 권고.</li>\n<li><strong>5단계 — 민사 임금청구·손해배상</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">기본급 위장 수당 통상임금 차액 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 실태·기준·산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>최소 3년치 급여명세서 (항목별 분리 확인)</strong></li>\n<li><strong>근로계약서·연봉계약서·수당 부속서류</strong></li>\n<li><strong>취업규칙·임금 규정·수당 지급 기준</strong></li>\n<li><strong>동일 직급 동료 급여 자료 (일률성 입증)</strong></li>\n<li><strong>연장·휴일·연차수당 산정 내역서</strong></li>\n<li><strong>입사 시·승진 시 임금 조정 통지서</strong></li>\n<li><strong>4대보험 신고 기준 보수 (객관 자료)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 동일 직급·동일 호봉 근로자가 같은 금액의 \"수당\"을 받고 있다면 일률성 입증에 강력. 수당 금액이 매달 동일하면 고정성도 자연스럽게 입증되는 사정입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>정기성</strong> — 매월·매주 등 일정 주기 지급 여부.</li>\n<li><strong>일률성</strong> — 같은 조건 근로자 전체 지급.</li>\n<li><strong>고정성</strong> — 추가 조건 없이 확정적 지급.</li>\n<li><strong>실비 변상 vs 임금</strong> — 명목과 무관하게 실태로 평가.</li>\n<li><strong>3년 시효</strong> — 각 임금 지급일별 별도 진행.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 명목 수당의 통상임금성',
        summary:
          '대법원 2014다27807(대법원, 2019.04.23 선고) 영역에서 법원은 사용자가 근로자들에게 실제로 그 명목으로 사용되는지 불문하고 근무일마다 일정 금액을 지급한 경우, 그 명칭이 \"실비 변상\"이라 하여 임금 또는 통상임금에서 제외할 수 없다고 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '수당 명칭과 무관하게 정기·일률·고정 지급 시 통상임금 산입. 누락분 차액 청구 가능 영역.',
      },
    ],
    faq: [
      {
        question: '계약서에 "기본급 200, 수당 별도"라고 적혀 있어요',
        answer:
          '<strong>계약서 문구보다 실제 지급 실태가 결정적인 영역입니다.</strong>',
      },
      {
        question: '직책수당도 통상임금에 들어가나요?',
        answer:
          '<strong>같은 직책 근로자에게 같은 금액이 정기 지급되면 일률성·고정성 평가가 가능합니다.</strong>',
      },
      {
        question: '회사가 \"성과에 따라 다르다\"고 하면요?',
        answer:
          '<strong>실제 지급 실태가 변동 없이 같은 금액이면 고정성 평가에 유리합니다.</strong>',
      },
      {
        question: '재산정하면 연차수당도 늘어나나요?',
        answer:
          '<strong>통상임금이 늘면 가산수당·연차수당 산정 기준이 함께 상향되는 영역입니다.</strong>',
      },
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>각 임금 지급일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '통상임금 계산', href: '/guide/wage/wage-ordinary-wage-calculation' },
      { label: '임금체불 신고', href: '/guide/wage/wage-unpaid-complaint-procedure' },
      { label: '연장근로수당', href: '/guide/wage/wage-overtime-allowance-claim' },
      { label: '임금 시효', href: '/guide/wage/wage-claim-statute-of-limitations' },
      { label: '간이대지급금', href: '/guide/wage/wage-simplified-replacement-payment' },
    ],
  },

  // ─── 2. wage-yearend-bonus-customary-revoke-track ───
  {
    domain: 'wage',
    slug: 'wage-yearend-bonus-customary-revoke-track',
    keyword: '연말 상여금 관행 일방 폐지',
    questionKeyword: '입사 후 8년간 매년 연말에 받던 100만원 상여금을 회사가 일방적으로 폐지했어요.',
    ctaKeyword: '연말 상여금 폐지 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '연말 상여금 일방 폐지 — 5단계 노사관행·차액 청구 정리 | 로앤가이드',
      description:
        '8년간 매년 받던 연말 상여금이 일방 폐지됐다면 묵시적 합의·불이익 변경 동의 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"2018년 입사 후 매년 12월에 연말 상여금 100만원을 한 번도 빠짐없이 받았어요. 명절 떡값과는 별도 항목이었고 모든 정규직 동료가 같이 받았습니다. 그런데 2026년 11월 갑자기 회사가 \'경영 사정상 올해부터 연말 상여 폐지\'라는 메일 한 통을 보냈어요. 동의도 안 받고 일방 통보입니다." 대법원 판례는 ① 기업 내부 관행이 \"규범의식\"으로 지지되며 ② 묵시적 합의로 근로조건이 된 영역이라면 ③ 일방 폐지는 근로조건 불이익 변경으로 근로자 과반수 동의가 필요하다는 점을 명시한 트랙. 8년간 같은 시기·같은 금액·같은 대상이라는 관행성이 인정되면 차액 청구가 가능합니다. 대응은 ① 관행 입증 ② 묵시적 합의 ③ 동의 부재 입증 ④ 노동청 진정 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 연말 상여금 일방 폐지 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 관행·합의·동의·진정·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 관행 입증</strong> — 동일 시기·금액·대상 반복 지급.</li>\n<li><strong>② 묵시적 합의 평가</strong> — 규범의식·당연한 제도화.</li>\n<li><strong>③ 불이익 변경 동의 부재</strong> — 과반수 동의 미이행.</li>\n<li><strong>④ 노동청 임금체불 진정</strong> — 미지급 상여금 신청.</li>\n<li><strong>⑤ 민사 임금청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 시혜성 보너스가 아니라 \"기업 내부의 사실상 제도\"로 정착됐는지 평가하는 영역. 8년간 매년 동일 조건 지급이면 규범의식의 지지를 받는 관행으로 평가될 여지가 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·진정·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 8년치 지급 이력 보존 (즉시)</strong> — 명세서·이체 내역·공지문.</li>\n<li><strong>2단계 — 폐지 통보 자료 보존 (즉시)</strong> — 메일·내부 공지·인사 게시.</li>\n<li><strong>3단계 — 동료 진술서 수집 (1~2주)</strong> — 동일 지급 입증.</li>\n<li><strong>4단계 — 노동청 임금체불 진정</strong> — 차액 신청.</li>\n<li><strong>5단계 — 민사 임금청구</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">연말 상여금 관행 폐지 차액 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 관행·통보·동의 갈래입니다.</strong></p>\n<ul>\n<li><strong>8년치 12월 급여명세서·이체 내역</strong></li>\n<li><strong>연말 상여금 공지문·인사 게시판 자료</strong></li>\n<li><strong>폐지 통보 메일·내부 공지 캡처</strong></li>\n<li><strong>취업규칙·임금 규정·단체협약</strong></li>\n<li><strong>동료 진술서 (같은 지급 입증)</strong></li>\n<li><strong>4대보험 신고 기준 보수 자료</strong></li>\n<li><strong>회사의 경영 사정 주장 근거 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 동일 시기(매년 12월)·동일 금액(100만원)·동일 대상(전 정규직) 3박자가 갖춰지면 관행성 입증 강력. 폐지 통보 메일에 \"동의를 구한다\"는 표현이 없으면 일방 변경 입증에도 유리.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>관행성 인정</strong> — 반복 횟수·일관성 평가.</li>\n<li><strong>경영 사정 주장</strong> — 단순 적자만으로는 일방 변경 사유 부족.</li>\n<li><strong>불이익 변경 동의</strong> — 근로자 과반수 또는 노조 동의 필요.</li>\n<li><strong>임금성 평가</strong> — 평균임금·통상임금 산입 별도 다툼.</li>\n<li><strong>3년 시효</strong> — 각 상여금 지급 예정일별.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 노사관행과 상여금 임금성',
        summary:
          '대법원 2022다255454(대법원, 2026.01.29 선고) 영역에서 법원은 기업 내부의 특정 관행이 근로계약의 내용을 이루기 위한 요건과, 매년 한 차례씩 장기간 지급된 특별성과급이 노동관행에 의하여 사용자에게 지급의무가 지워진 임금에 해당하는지를 다툰 사례 흐름이 있습니다.',
        takeaway: '장기간 동일 조건 지급된 상여금은 노사관행에 의한 임금으로 평가 가능. 일방 폐지 시 차액 청구 영역.',
      },
    ],
    faq: [
      {
        question: '회사가 "올해 적자라서"라며 폐지하면 어떻게 하나요?',
        answer:
          '<strong>경영 사정만으로는 근로조건 불이익 변경 동의 요건이 면제되지 않는 영역입니다.</strong>',
      },
      {
        question: '계약서·취업규칙에 안 적혀 있어도 관행이 인정되나요?',
        answer:
          '<strong>장기간 동일 조건 반복 지급이면 묵시적 합의 평가가 가능합니다.</strong>',
      },
      {
        question: '근로자 과반수 동의는 어떻게 받아야 하나요?',
        answer:
          '<strong>근로자 과반수의 집단적 의사결정 방법에 따른 동의가 원칙입니다.</strong>',
      },
      {
        question: '내가 동의서에 서명했어도 무효인가요?',
        answer:
          '<strong>개별 동의는 집단적 의사결정 절차를 갈음하지 못하는 영역입니다.</strong>',
      },
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>각 연말 상여금 지급 예정일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 신고', href: '/guide/wage/wage-unpaid-complaint-procedure' },
      { label: '통상임금 계산', href: '/guide/wage/wage-ordinary-wage-calculation' },
      { label: '취업규칙 불이익 변경', href: '/guide/wage/wage-work-rules-disadvantageous-change' },
      { label: '임금 시효', href: '/guide/wage/wage-claim-statute-of-limitations' },
      { label: '간이대지급금', href: '/guide/wage/wage-simplified-replacement-payment' },
    ],
  },

  // ─── 3. unemployment-private-academy-instructor-contract-end-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-private-academy-instructor-contract-end-track',
    keyword: '학원 강사 위탁계약 만료 실업급여',
    questionKeyword: '대형 학원에서 위탁계약직 강사로 4년 일하다 계약 종료됐어요. 위탁이라 실업급여 안 된다는데 진짜인가요?',
    ctaKeyword: '학원 강사 실업급여 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '학원 강사 위탁계약 만료 — 5단계 근로자성·실업급여 정리 | 로앤가이드',
      description:
        '학원 강사 위탁계약 만료 후 실업급여가 거부됐다면 근로자성·4대보험 사후가입 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"대형 입시 학원에서 \'프리랜서 강사 위탁계약\'으로 4년간 주 6일·하루 8시간 강의했어요. 매일 정해진 시간에 출근하고 학원 매뉴얼대로 수업, 학원장 지시로 보강·자습 감독까지 했는데 갑자기 계약 만료 통보를 받았습니다. 고용센터에 갔더니 \'4대보험 미가입 위탁이라 실업급여 대상이 아니다\'라는 답변을 받았어요." 고용보험심사위원회는 ① 정기·고정적 기본급 ② 업무 하위탁 불가 ③ 시간·장소 지정 ④ 지휘 감독 ⑤ 근태 관리가 인정되면 위탁계약 형식과 무관하게 근로자성·피보험자격을 인정한 영역. 학원 강사가 학원의 지휘를 받아 일했다면 사후 가입 + 실업급여 자격 검토가 가능한 트랙. 대응은 ① 근로자성 입증 ② 피보험자격 확인청구 ③ 수급 신청 ④ 이의신청 ⑤ 행정 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 학원 강사 실업급여 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 실질·확인청구·수급·이의·행정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 근로자성 실질 입증</strong> — 시간·장소·업무 지시.</li>\n<li><strong>② 피보험자격 확인청구</strong> — 고용센터 신청 (3년 소급).</li>\n<li><strong>③ 4대보험 사후 가입</strong> — 미가입 기간 인정.</li>\n<li><strong>④ 수급 신청 (이직일 12개월 내)</strong></li>\n<li><strong>⑤ 이의신청 (90일)</strong> — 고용보험심사관·심사위.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \"위탁\"이라는 계약 명칭만으로는 근로자성이 부정되지 않는 영역. 출근 시간 지정·강의실 배정·업무 매뉴얼·전속성이 인정되면 사후 가입 + 수급 자격 평가가 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신청 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·확인청구·수급·이의 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근로 실질 자료 보존 (즉시)</strong> — 시간표·매뉴얼·지시 메시지.</li>\n<li><strong>2단계 — 피보험자격 확인청구 (3년 소급)</strong> — 고용센터 접수.</li>\n<li><strong>3단계 — 근로자성 심사 (1~3개월)</strong> — 사실관계 조사.</li>\n<li><strong>4단계 — 4대보험 사후 가입·수급 신청</strong> — 자격 인정 시 진행.</li>\n<li><strong>5단계 — 거부 시 이의신청 (90일)</strong> — 심사관·심사위·재심사.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">학원 강사 위탁계약 근로자성 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 실질·계약·지급 갈래입니다.</strong></p>\n<ul>\n<li><strong>위탁계약서·갱신 계약서·계약 만료 통지</strong></li>\n<li><strong>강의 시간표·강의실 배정표 (시간·장소 지정 입증)</strong></li>\n<li><strong>학원 매뉴얼·교재·수업 운영 지침</strong></li>\n<li><strong>업무 지시 카카오톡·문자·이메일 (지휘 감독)</strong></li>\n<li><strong>월 강의료 이체 내역 (정기·고정성 입증)</strong></li>\n<li><strong>출퇴근·근태 관리 자료 (지문·앱 기록)</strong></li>\n<li><strong>동료 강사 진술서 (같은 근무 형태 입증)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 학원이 단가표 변경·강의 방식 변경을 일방 통보했다면 지휘·감독 입증 강력. 다른 학원 출강 금지·전속성 요구가 있었다면 근로자성 평가에 결정적 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>위탁계약의 형식과 실질</strong> — 명칭보다 실태 평가.</li>\n<li><strong>전속성</strong> — 다른 학원 출강 가능 여부.</li>\n<li><strong>강의료 산정</strong> — 시급·강의수 단가 vs 고정 월급.</li>\n<li><strong>피보험자격 확인청구 3년 소급</strong> — 시점 도과 시 일부 제한.</li>\n<li><strong>12개월 신청 기간</strong> — 이직일 후 12개월 내.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 고객센터 1350</strong></li>\n<li><strong>고용보험 1577-7114</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위탁계약 강사 근로자성',
        summary:
          '고용보험심사위원회 2023재결 제7호(고용보험심사위원회, 2023.05.24 선고) 영역에서 위원회는 프리랜서 업무 위탁 계약을 체결한 청구인에게 정기적·고정적으로 기본급이 지급된 점, 업무 하위탁이 불가능한 점, 업무를 지정하고 지휘·감독한 점, 근태관리를 한 점 등을 인정해 근로자성이 있다고 보고 피보험자격을 인정한 사례 흐름이 있습니다.',
        takeaway: '위탁계약 형식과 무관하게 종속 근로 실질 인정 시 피보험자격·실업급여 평가 가능 영역.',
      },
    ],
    faq: [
      {
        question: '4대보험에 가입돼 있지 않은데 신청 가능한가요?',
        answer:
          '<strong>피보험자격 확인청구로 3년 소급 가입 인정이 가능한 영역입니다.</strong>',
      },
      {
        question: '계약서에 "프리랜서·근로자 아님"이라 적혀 있어요',
        answer:
          '<strong>계약 명칭보다 실제 종속 관계가 결정적인 영역입니다.</strong>',
      },
      {
        question: '다른 학원에도 출강하고 있었어요',
        answer:
          '<strong>전속성은 일부 사정에 불과하며 종합적 평가가 필요한 영역입니다.</strong>',
      },
      {
        question: '강의료를 시급·강의당으로 받았는데도 되나요?',
        answer:
          '<strong>지급 방식보다 정기·고정성·지휘 감독이 더 결정적 사정입니다.</strong>',
      },
      {
        question: '계약 만료가 자진퇴사로 처리되나요?',
        answer:
          '<strong>회사의 갱신 거절로 인한 종료라면 비자발적 이직 평가가 가능합니다.</strong>',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '피보험자격 확인청구', href: '/guide/unemployment/unemployment-insured-status-confirmation' },
      { label: '실업급여 신청 절차', href: '/guide/unemployment/unemployment-application-procedure' },
      { label: '실업급여 수급자격', href: '/guide/unemployment/unemployment-eligibility-requirements' },
      { label: '이직확인서 정정', href: '/guide/unemployment/unemployment-separation-document-correction' },
      { label: '이의신청', href: '/guide/unemployment/unemployment-objection-procedure' },
    ],
  },

  // ─── 4. retirement-foreign-currency-bonus-fluctuation-track ───
  {
    domain: 'retirement',
    slug: 'retirement-foreign-currency-bonus-fluctuation-track',
    keyword: '외화 보너스 환차 평균임금 산입',
    questionKeyword: '글로벌 본사에서 달러로 받던 인센티브의 환산 기준일이 매번 달라 퇴직금이 줄었어요.',
    ctaKeyword: '외화 보너스 평균임금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '외화 보너스 환차 평균임금 — 5단계 환산 기준일 차액 정리 | 로앤가이드',
      description:
        '달러 인센티브 환산 기준일이 매번 달라 퇴직금이 줄었다면 임금성·일관성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"미국 본사 직속 한국 지사에서 7년 근무했어요. 분기마다 달러로 \'성과 인센티브\' 약 5,000~8,000달러를 받았는데 회사가 임의로 환산 기준일을 \'지급일 vs 평가일 vs 본사 송금일\'로 매번 바꿔서 퇴직금 산정 시 가장 낮은 환율로 환산했습니다. 결과적으로 평균임금이 30% 이상 깎였어요." 대법원 판례는 ① 평균임금에 산입되는 임금은 정기·일률·지급의무가 있는 금품이고 ② 성과 인센티브도 산정 기준이 명확하면 임금성이 인정되는 영역. 외화 표시라도 환산 기준의 일관성·합리성이 결여되면 차액 청구가 가능한 트랙입니다. 대응은 ① 지급 이력 ② 환산 기준일 일관성 ③ 노동청 진정 ④ 차액 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 외화 보너스 환차 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 이력·기준·진정·차액·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 외화 지급 이력</strong> — 분기·반기 정기 지급 입증.</li>\n<li><strong>② 임금성 평가</strong> — 정기성·일률성·산정 기준.</li>\n<li><strong>③ 환산 기준일 일관성</strong> — 매 회 동일 기준 적용.</li>\n<li><strong>④ 노동청 임금체불 진정</strong> — 차액 신청.</li>\n<li><strong>⑤ 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 외화 표시 보너스도 임금성이 인정되면 평균임금 산입 영역. 회사가 환산 기준일을 매번 자의적으로 바꿔 낮은 환율을 적용했다면 일관성·합리성 다툼이 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·재산정·진정·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 외화 지급 이력 보존 (즉시)</strong> — 3년치 송금·환전 내역.</li>\n<li><strong>2단계 — 환산 기준일 재산정 (1~2주)</strong> — 일관 기준 적용 시 차액.</li>\n<li><strong>3단계 — 노동청 임금체불 진정</strong> — 차액 신청.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 임금성·환산 심사.</li>\n<li><strong>5단계 — 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">외화 보너스 환차 평균임금 차액 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 이력·기준·산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>3년치 외화 송금·환전 내역서</strong></li>\n<li><strong>인센티브 산정 규정·KPI 평가 기준</strong></li>\n<li><strong>본사 송금 메일·고지 자료 (지급일 입증)</strong></li>\n<li><strong>퇴직금 산정서·평균임금 계산표 (회사 환산 기준 확인)</strong></li>\n<li><strong>한국은행 매매기준율·기준환율 자료</strong></li>\n<li><strong>근로계약서·임금규정·취업규칙</strong></li>\n<li><strong>동료 진술서·다른 직원 산정 사례</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 환산 기준이 회사 규정·근로계약에 명시돼 있다면 일관성 입증이 즉각. 동료 다수가 다른 기준으로 산정됐다는 사실은 자의성 입증의 결정 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>외화 보너스 임금성</strong> — 산정 기준의 명확성·정기성.</li>\n<li><strong>환산 기준일</strong> — 지급일 vs 평가일 vs 송금일.</li>\n<li><strong>환율 종류</strong> — 매매기준율·전신환율·고시환율.</li>\n<li><strong>최종 3개월 산정 구간</strong> — 외화 지급일 포함 여부.</li>\n<li><strong>3년 시효</strong> — 퇴직일부터.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 성과 인센티브 평균임금성',
        summary:
          '대법원 2021다248299(대법원, 2026.01.29 선고) 영역에서 법원은 재무성과·전략과제 평가에 따라 상여기초금액에 연동해 지급된 \"목표 인센티브\"와 경제적 부가가치를 재원으로 한 \"성과 인센티브\"가 평균임금 산정의 기초가 되는 임금에 해당하는지를 다툰 사례 흐름이 있습니다.',
        takeaway: '성과 인센티브도 정기·지급의무 인정 시 평균임금 산입. 외화 환산 자의성도 차액 청구 영역.',
      },
    ],
    faq: [
      {
        question: '회사가 "본사 정책이라 어쩔 수 없다"고 해요',
        answer:
          '<strong>국내 근로 제공 대가라면 한국 근로기준법이 우선 적용되는 영역입니다.</strong>',
      },
      {
        question: '환산 기준이 매년 달랐어요',
        answer:
          '<strong>합리적 사유 없는 변경이라면 일관성 다툼이 가능한 영역입니다.</strong>',
      },
      {
        question: '달러로 받은 금액이 임금이 맞나요?',
        answer:
          '<strong>지급 통화와 무관하게 정기·지급의무 인정 시 임금성 평가가 가능합니다.</strong>',
      },
      {
        question: '한국 지사에 4대보험 가입돼 있어요',
        answer:
          '<strong>국내 사업장 근로자로서 근로기준법 보호 대상인 영역입니다.</strong>',
      },
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>퇴직일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '평균임금 계산', href: '/guide/retirement/retirement-average-wage-calculation' },
      { label: '퇴직금 청구 절차', href: '/guide/retirement/retirement-payment-claim-procedure' },
      { label: '통상임금 계산', href: '/guide/wage/wage-ordinary-wage-calculation' },
      { label: '중간정산 요건', href: '/guide/retirement/retirement-interim-settlement-requirements' },
      { label: '퇴직금 시효', href: '/guide/retirement/retirement-statute-of-limitations' },
    ],
  },

  // ─── 5. retirement-meal-card-prepaid-welfare-included-track ───
  {
    domain: 'retirement',
    slug: 'retirement-meal-card-prepaid-welfare-included-track',
    keyword: '식대 복지카드 선불카드 평균임금 산입',
    questionKeyword: '회사에서 매월 25만원짜리 식대 선불카드(복지카드)를 줬는데 퇴직금 계산에서 빠져 있어요.',
    ctaKeyword: '복지카드 선불카드 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '식대 복지카드 평균임금 — 5단계 선불카드 차액 청구 정리 | 로앤가이드',
      description:
        '월 25만원 식대 선불카드가 평균임금에서 빠져 퇴직금이 줄었다면 임금성·정기성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"회사에서 매월 25만원 충전되는 \'식대 선불카드(복지카드)\'를 5년간 받았어요. 전 직원이 똑같이 받았고 미사용 잔액도 환수 없이 다음 달로 이월. 그런데 퇴직금을 받아보니 회사가 \'현금이 아니라 복지카드라 임금이 아니다\'며 평균임금에서 통째로 제외. 5년치 환산하면 차액이 300만원 가까이 됩니다." 대법원 판례는 ① 명목과 무관하게 ② 근무일마다 일정 금액이 ③ 모든 근로자에게 지급되면 실비 변상이 아닌 임금으로 평가되는 영역. 식대·복지카드라도 정기·일률·고정성이 인정되면 평균임금 산입과 차액 청구가 가능한 트랙입니다. 대응은 ① 지급 실태 ② 임금성 ③ 노동청 진정 ④ 차액 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 식대 복지카드 평균임금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 실태·임금성·진정·차액·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 지급 실태</strong> — 매월·전 직원·동일 금액.</li>\n<li><strong>② 임금성 평가</strong> — 정기성·일률성·고정성.</li>\n<li><strong>③ 평균임금 재산정</strong> — 직전 3개월 누락분 포함.</li>\n<li><strong>④ 노동청 임금체불 진정</strong> — 차액 신청.</li>\n<li><strong>⑤ 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \"복지카드·선불카드\"라는 명목보다 실제 지급 실태가 결정적인 영역. 매월 같은 금액이 전 직원에게 지급되고 사적 사용도 자유롭다면 임금성 평가가 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·재산정·진정·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 5년치 충전·사용 내역 보존 (즉시)</strong> — 카드사 명세서.</li>\n<li><strong>2단계 — 평균임금 재산정 (1~2주)</strong> — 직전 3개월 25만원 포함.</li>\n<li><strong>3단계 — 노동청 임금체불 진정</strong> — 차액 신청.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 임금성 심사.</li>\n<li><strong>5단계 — 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">식대 복지카드 평균임금 산입 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 실태·기준·산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>복지카드 충전 내역·사용 내역 (월별 25만원 입증)</strong></li>\n<li><strong>취업규칙·복리후생 규정·식대 지급 기준</strong></li>\n<li><strong>근로계약서·연봉계약서 (식대 항목 표기)</strong></li>\n<li><strong>동료 카드 충전 자료 (일률성 입증)</strong></li>\n<li><strong>퇴직금 산정서·평균임금 계산표</strong></li>\n<li><strong>4대보험 신고 보수 기준 (식대 포함·제외 확인)</strong></li>\n<li><strong>이체·급여명세서 (현금 식대와 비교)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 미사용 잔액 환수 없이 이월·현금화 가능했다면 임금성 강력. 영수증 제출·실제 사용 증빙 요구가 없었다는 사정도 실비 변상 부정에 결정적.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>실비 변상 vs 임금</strong> — 영수증·사용처 검증 없으면 임금성.</li>\n<li><strong>정기성·일률성</strong> — 매월 전 직원 동일 금액.</li>\n<li><strong>고정성</strong> — 조건부 지급 여부.</li>\n<li><strong>사용처 제한</strong> — 식당·편의점 외 사용 가능성.</li>\n<li><strong>3년 시효</strong> — 퇴직일부터.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 식대보조금·특별상여 평균임금 산입',
        summary:
          '대법원 2003다27429(대법원, 2005.03.11 선고) 영역에서 법원은 사립학교 교원의 봉급조정수당과 함께 특별상여금·가산금·식대보조금 등 명목으로 지급된 금원이 근로의 대가로 정기·일률 지급된 사정이 결합되면 평균임금의 기초가 되는 임금총액에 포함될 여지가 있다고 평가한 사례 흐름이 있습니다.',
        takeaway: '식대보조금·복지카드 등 명목 수당도 정기·일률 지급 결합 시 평균임금 산입 평가 영역. 퇴직금 차액 청구 가능.',
      },
    ],
    faq: [
      {
        question: '식대는 비과세라 임금이 아니지 않나요?',
        answer:
          '<strong>세법상 비과세와 근로기준법상 임금성은 별개의 평가 영역입니다.</strong>',
      },
      {
        question: '카드 사용처가 식당으로 제한돼 있어요',
        answer:
          '<strong>사용처 제한만으로는 임금성이 부정되지 않는 영역입니다.</strong>',
      },
      {
        question: '잔액이 다음 달로 이월됐어요',
        answer:
          '<strong>이월·현금화 가능성은 임금성 평가에 유리한 사정입니다.</strong>',
      },
      {
        question: '회사가 "복리후생비"라고 명시했어요',
        answer:
          '<strong>명칭과 무관하게 실제 지급 실태로 평가하는 영역입니다.</strong>',
      },
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>퇴직일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '평균임금 계산', href: '/guide/retirement/retirement-average-wage-calculation' },
      { label: '퇴직금 청구 절차', href: '/guide/retirement/retirement-payment-claim-procedure' },
      { label: '통상임금 계산', href: '/guide/wage/wage-ordinary-wage-calculation' },
      { label: '중간정산 요건', href: '/guide/retirement/retirement-interim-settlement-requirements' },
      { label: '퇴직금 시효', href: '/guide/retirement/retirement-statute-of-limitations' },
    ],
  },
];
