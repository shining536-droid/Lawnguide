import { SpokePage } from '../spoke-pages';

// batch71 wage-unemp-retire — 5개 (2026-05-21)
//
// 고유 존재 이유:
// 1. wage-bonus-target-impossible-revised-mid-year-track — 연초 정한 보너스 목표를 회사가 중도 수정(달성률 50%→120% 상향)하여 미달 시 미지급되는 트랙 (기존 yearend-bonus-customary-revoke 연말상여 관행 폐지와 분기: 본 페이지는 목표 중도 수정 + 합리성 결여 + 산정기준 일방 변경 결합 트랙).
// 2. wage-shift-night-difference-no-applied-claim-track — 야간 근무(22:00~06:00)인데 야간수당(50% 가산)이 명세서 누락된 사후 청구 트랙 (기존 tip-service-charge 봉사료·overtime-pay-calculation 연장수당 산정과 분기: 본 페이지는 야간 시간대 + 가산율 50% + 명세서 누락 결합 트랙).
// 3. unemployment-recurring-illness-extension-treatment-track — 구직 중 만성질환(우울증·디스크 등) 재발로 수급기간 연장 신청 트랙 (기존 special-extended·training-extended 특별/훈련 연장과 분기: 본 페이지는 질병 재발 + 진단서 + 90일 연장 결합 트랙).
// 4. retirement-merger-succession-tenure-recount-track — 회사 합병 후 새 회사가 근속연수 리셋 주장 시 합산 청구 트랙 (기존 small-company-no-fund 영세업체·startup-equity 스타트업과 분기: 본 페이지는 M&A + 고용승계 + 근속 합산 결합 트랙).
// 5. retirement-bonus-included-average-wage-dispute-track — 연 1회 지급 정기보너스(연봉 200%) 평균임금 산입 다툼 트랙 (기존 sales-commission-included 영업커미션·stock-option-included 스톡옵션과 분기: 본 페이지는 정기보너스 + 통상임금 vs 평균임금 + 산정 기준 결합 트랙).

export const spokesBatch71WageUnempRetire: SpokePage[] = [
  // ─── 1. wage-bonus-target-impossible-revised-mid-year-track ───
  {
    domain: 'wage',
    slug: 'wage-bonus-target-impossible-revised-mid-year-track',
    keyword: '보너스 목표 중도 수정',
    questionKeyword: '연초 정한 보너스 달성률 50%였는데 회사가 8월에 120%로 일방 상향해 미달 사유로 보너스를 전혀 안 줘요.',
    ctaKeyword: '보너스 목표 중도 수정 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '보너스 목표 중도 수정 — 5단계 일방 변경·합리성 결여 청구 정리 | 로앤가이드',
      description:
        '연초 정한 보너스 목표를 회사가 중도 상향해 미달 사유로 미지급했다면 일방 변경 평가 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중견 IT기업에 영업직 4년차예요. 연초 인사평가에서 \'올해 매출 달성률 50% 이상 시 연봉의 15% 보너스\'로 목표를 정하고 사인했어요. 그런데 8월에 갑자기 회사가 \'경영 환경이 어려워졌으니 달성률 기준을 120%로 상향한다\'고 일방 통보. 저는 이미 11월에 55%를 달성해 보너스 수령이 확정된 상황이었는데, 12월 정산에서 \'120% 못 채웠으니 보너스 0원\'으로 통보받았어요. 동료들도 마찬가지라 약 20명이 보너스를 받지 못했습니다. 연초 약속한 목표를 중간에 일방적으로 바꿔도 되는 건가요?" 대법원은 ① 사용자가 일방적으로 임금·보너스 산정 기준을 근로자에게 불리하게 변경하는 경우 ② 취업규칙 불이익 변경 절차나 근로자의 동의 없이 효력이 인정되기 어렵고 ③ 이미 발생한 보너스 청구권은 사후 변경으로 소멸되지 않는다는 점을 시사한 영역. 목표 중도 수정 + 합리성 결여 결합 시 종전 기준 청구 평가가 가능한 트랙입니다. 대응은 ① 변경 절차 ② 발생한 보너스 산정 ③ 노동청 진정 ④ 차액 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 보너스 목표 중도 수정 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 절차·산정·진정·청구·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 변경 절차 위법성 입증</strong> — 동의·취업규칙 불이익 변경.</li>\n<li><strong>② 종전 기준 보너스 산정</strong> — 연초 사인한 목표·달성률.</li>\n<li><strong>③ 노동청 임금체불 진정</strong> — 미지급 보너스 신청.</li>\n<li><strong>④ 보너스 차액 청구</strong> — 종전 기준 vs 변경 기준.</li>\n<li><strong>⑤ 민사 임금 청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 연초 사인된 보너스 목표가 그해 도중 일방 상향됐다면 절차적 정당성·합리성 결여 평가가 가능한 영역. 이미 발생한 청구권은 사후 변경으로 소멸되지 않을 여지가 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용노동부 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 연초 목표 사인 자료 보존 (즉시)</strong> — 인사평가서·MBO 양식·결재 문서.</li>\n<li><strong>2단계 — 변경 통보 시점·방식 확보 (1주)</strong> — 이메일·공지·메신저.</li>\n<li><strong>3단계 — 노동청 임금체불 진정 (관할 지방고용노동청)</strong> — 종전 기준 차액 신청.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 변경 절차·합리성 평가.</li>\n<li><strong>5단계 — 민사 임금청구</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">보너스 목표 중도 수정 청구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 목표·변경·실적 갈래입니다.</strong></p>\n<ul>\n<li><strong>연초 인사평가서·MBO 사인본 (종전 목표 입증)</strong></li>\n<li><strong>보너스 규정·취업규칙 (산정 근거)</strong></li>\n<li><strong>변경 통보 이메일·공지·메신저 (일방 변경 입증)</strong></li>\n<li><strong>월별 실적 보고서·달성률 자료</strong></li>\n<li><strong>근로계약서·연봉계약서 (보너스 약정 입증)</strong></li>\n<li><strong>동료 진술서 (전사 단체 변경 입증)</strong></li>\n<li><strong>과거 보너스 지급 이력 (관행 자료)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 연초 사인본·MBO 결재 문서는 본인이 보관 중인 사본이 결정적. 변경 통보 이메일도 직접 보관. 회사 인사시스템에 접근 가능하면 화면 캡처로 백업.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>취업규칙 불이익 변경 절차</strong> — 근로자 과반수 동의.</li>\n<li><strong>이미 발생한 청구권 소멸 여부</strong> — 사후 변경 효력 한계.</li>\n<li><strong>합리성 결여</strong> — 갑작스러운 기준 상향.</li>\n<li><strong>관행 평가</strong> — 매년 지급된 정기성·일률성.</li>\n<li><strong>3년 시효</strong> — 각 지급일별.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임금·보너스 산정 기준 일방 변경의 효력',
        summary:
          '대법원 2021다248299(대법원, 2023.05.11 선고) 영역에서 법원은 사용자가 근로조건을 근로자에게 불리하게 변경하는 경우 취업규칙 불이익 변경 절차나 근로자의 동의가 필요하며 일방적 변경의 효력 판단 기준을 제시한 사례 흐름이 있습니다.',
        takeaway: '연초 사인된 보너스 목표의 중도 일방 수정은 절차적 정당성 결여 평가 가능 영역. 종전 기준 청구 회복 가능 트랙.',
      },
    ],
    faq: [
      {
        question: '회사가 \'경영 어려우면 바꿀 수 있다\'고 사규에 적었으면 효력이 있나요?',
        answer:
          '<strong>포괄적 변경 권한 조항이 있어도 합리성·절차적 정당성 평가가 결합되는 영역입니다.</strong>',
      },
      {
        question: '동료들이 변경에 사인했어도 저는 사인 안 했으면 다른가요?',
        answer:
          '<strong>개별 근로자 동의는 본인에게만 효력이 있어 사인하지 않았다면 종전 기준 청구가 평가될 영역입니다.</strong>',
      },
      {
        question: '이미 받은 보너스가 있으면 차액만 청구하나요?',
        answer:
          '<strong>종전 기준 산정액과 실제 지급액의 차액을 청구할 수 있는 영역입니다.</strong>',
      },
      {
        question: '연봉계약서에 보너스 명시가 없으면 어떡하나요?',
        answer:
          '<strong>인사평가서·MBO·과거 지급 관행이 결합되면 임금성 평가가 가능한 영역입니다.</strong>',
      },
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>각 보너스 지급일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '연말상여 관행 폐지', href: '/guide/wage/wage-yearend-bonus-customary-revoke' },
      { label: '성과급 미지급', href: '/guide/wage/wage-performance-bonus-unpaid' },
      { label: '연봉 일방 삭감', href: '/guide/wage/wage-annual-salary-unilateral-cut' },
      { label: '취업규칙 불이익 변경', href: '/guide/wage/wage-rules-disadvantage-change' },
      { label: '인센티브 미지급', href: '/guide/wage/wage-incentive-unpaid-claim' },
    ],
  },

  // ─── 2. wage-shift-night-difference-no-applied-claim-track ───
  {
    domain: 'wage',
    slug: 'wage-shift-night-difference-no-applied-claim-track',
    keyword: '야간수당 누락 청구',
    questionKeyword: '편의점 야간조(22:00~06:00) 1년 일했는데 야간수당(50% 가산) 한 푼도 못 받았어요.',
    ctaKeyword: '야간수당 누락 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '야간수당 누락 청구 — 5단계 50% 가산 미적용 차액 정리 | 로앤가이드',
      description:
        '야간 시간대(22:00~06:00) 근무인데 야간수당이 누락된 임금명세서를 받았다면 50% 가산 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"24시간 편의점에서 야간조(22:00~06:00) 8시간씩 주 5일 1년 일했어요. 시급은 1만 200원으로 최저시급 수준이라 매달 약 200만원 정도 받았습니다. 그런데 어느 날 친구가 \'야간조면 야간수당으로 시급의 50%를 더 줘야 한다\'며 본인 명세서를 보여줬어요. 제 명세서를 다시 보니 \'기본급\' 한 줄만 있고 야간수당 항목이 없습니다. 사장님께 물어보니 \'우리는 야간이 정해진 근무라 그런 거 없다\'고 안내. 1년치 야간수당을 사후 청구할 수 있나요?" 근로기준법 제56조는 ① 사용자가 야간근로(22:00~06:00)에 대해 통상임금의 50% 이상을 가산하여 지급하도록 규정하고 ② 근로 형태가 \'주된 야간\'이라 하더라도 가산 적용을 배제할 수 없으며 ③ 5인 이상 사업장이라면 시간외·야간·휴일근로 가산이 동일하게 적용된다는 점을 시사한 영역. 야간 시간대 근무 + 가산수당 누락 결합 시 사후 청구 평가가 가능한 트랙입니다. 대응은 ① 야간시간 입증 ② 가산수당 산정 ③ 노동청 진정 ④ 차액 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 야간수당 누락 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 시간·산정·진정·청구·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 야간 근로시간 입증</strong> — 22:00~06:00 출근 기록.</li>\n<li><strong>② 야간가산수당 산정</strong> — 통상시급 × 50% × 야간시간.</li>\n<li><strong>③ 노동청 임금체불 진정</strong> — 미지급 가산수당 신청.</li>\n<li><strong>④ 가산수당 차액 청구</strong> — 1년치 누적 산정.</li>\n<li><strong>⑤ 민사 임금 청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 야간(22:00~06:00) 시간대 근무라면 가산수당 50%가 별도로 산정돼야 하는 영역. \'주된 야간이라 가산 없다\'는 항변은 평가에서 약한 트랙입니다. 5인 이상 사업장 기준.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용노동부 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 야간 근로 자료 보존 (즉시)</strong> — 근무표·POS 출퇴근 기록·CCTV.</li>\n<li><strong>2단계 — 야간가산수당 재산정 (1주)</strong> — 통상시급 × 0.5 × 야간시간.</li>\n<li><strong>3단계 — 노동청 임금체불 진정 (관할 지방고용노동청)</strong> — 차액 신청.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 사업장 규모·가산 적용 평가.</li>\n<li><strong>5단계 — 민사 임금청구</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 야근수당 신고 가능성, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">야간 시간대 가산수당 청구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 시간·임금·사업장 갈래입니다.</strong></p>\n<ul>\n<li><strong>근무 시간표·교대표 (야간 시간대 입증)</strong></li>\n<li><strong>POS 로그인·출퇴근 카드 기록</strong></li>\n<li><strong>임금명세서 (가산수당 누락 입증)</strong></li>\n<li><strong>근로계약서 (시급·근무시간 명시)</strong></li>\n<li><strong>이체 내역 (실 지급액)</strong></li>\n<li><strong>사업장 5인 이상 입증 자료 (직원 명부·4대보험)</strong></li>\n<li><strong>동료 진술서 (동일 야간 근무 + 가산수당 미지급)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 편의점은 POS 시스템 로그인 기록이 가장 객관적인 출퇴근 자료. CCTV 영상은 사장님 측 자료라 노동청 진정 후 확보 시도. 5인 미만 사업장이면 가산수당 적용 평가가 달라지므로 사업장 규모 확인이 선행.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>5인 이상 사업장 평가</strong> — 가산수당 적용 요건.</li>\n<li><strong>주된 야간 항변</strong> — 야간 가산 배제 사유로 평가되지 않음.</li>\n<li><strong>포괄임금제 적용 여부</strong> — 명시 부재 시 가산 별도 산정.</li>\n<li><strong>휴게시간 공제</strong> — 실질 휴게 vs 대기.</li>\n<li><strong>3년 시효</strong> — 각 임금 지급일별.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>알바천국 노무상담 (지자체별 청년노동권익센터)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 야간근로 가산수당 적용 범위',
        summary:
          '대법원 2024다294705(대법원, 2024.12.19 선고) 영역에서 법원은 야간근로에 대한 가산수당 지급 의무와 포괄임금제 약정이 있는 경우에도 가산수당 산정 기준이 통상임금에 미달하는지 여부를 다투며 야간근로 가산의 강행성을 제시한 사례 흐름이 있습니다.',
        takeaway: '야간(22:00~06:00) 시간대 근무는 사업장 형태와 무관하게 가산수당 50% 적용 평가 영역. 누락 시 사후 차액 청구 가능 트랙.',
      },
    ],
    faq: [
      {
        question: '편의점·24시간 매장은 야간이 \'정해진 근무\'라 가산이 없는 것 아닌가요?',
        answer:
          '<strong>근무 형태가 야간이라도 가산수당 적용은 동일하게 평가되는 영역입니다. \'주된 야간\' 항변은 법적으로 약합니다.</strong>',
      },
      {
        question: '5인 미만 사업장이면 어떻게 되나요?',
        answer:
          '<strong>5인 미만은 가산수당 적용 요건이 달라 평가가 별도 진행되는 영역입니다. 사업장 규모 확인이 선행됩니다.</strong>',
      },
      {
        question: '계약서에 \'야간수당 포함 시급\'이라고 적혔으면요?',
        answer:
          '<strong>포괄임금제 표시가 있어도 실제 가산분이 통상임금에 미달하면 차액 청구가 평가되는 영역입니다.</strong>',
      },
      {
        question: '연장·휴일근로도 함께 했으면 어떻게 계산되나요?',
        answer:
          '<strong>야간·연장·휴일 가산은 중복 적용 가능한 영역으로 각각 산정해 합산됩니다.</strong>',
      },
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>각 임금 지급일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '야근수당 신고 가능성, AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '야간연장 정확 산정', href: '/guide/wage/wage-night-overtime-exact-calculation' },
      { label: '연장근로 미지급', href: '/guide/wage/wage-overtime-unpaid-claim' },
      { label: '포괄임금제 무효', href: '/guide/wage/wage-comprehensive-wage-invalid' },
      { label: '연장수당 산정법', href: '/guide/wage/wage-overtime-pay-calculation' },
      { label: '교대근무 수당', href: '/guide/wage/wage-shift-work-allowance-track' },
    ],
  },

  // ─── 3. unemployment-recurring-illness-extension-treatment-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-recurring-illness-extension-treatment-track',
    keyword: '실업급여 질병 재발 연장',
    questionKeyword: '실업급여 받던 중 우울증·디스크가 재발해 구직 활동이 어려워졌어요. 수급기간 연장이 되는지 모르겠어요.',
    ctaKeyword: '실업급여 질병 재발 연장 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '실업급여 질병 재발 연장 — 5단계 진단서·90일 연장 신청 정리 | 로앤가이드',
      description:
        '실업급여 수급 중 만성질환이 재발해 구직이 어려워졌다면 진단서·90일 연장 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"퇴사 후 실업급여를 받기 시작한 지 4개월차예요. 1년 전 회사 다닐 때 우울증 진단을 받아 약을 복용했었고, 디스크 수술 이력도 있는데 다행히 안정 상태였습니다. 그런데 한 달 전부터 우울증이 재발해 외출이 어렵고, 디스크 통증도 다시 심해져 진단서 기준 \'4주 이상 안정 가료\' 안내를 받았어요. 매주 가야 하는 실업인정 출석이 어렵고 구직활동도 불가능한 상황. 고용센터에 \'질병으로 구직활동을 못 한다\'고 말했더니 \'수급 정지될 수 있다\'는 답변. 이런 경우 연장 신청이 안 되는 건가요?" 고용보험법은 ① 수급자격자가 임신·출산·질병·부상 그 밖에 대통령령으로 정하는 사유로 ② 취업할 수 없는 경우 ③ 그 기간만큼 수급기간을 연장할 수 있고 ④ 진단서 등 객관적 자료 제출 시 90일 이내(특별 사유 시 더 장기) 연장이 가능하다는 점을 시사한 영역. 질병 재발 + 진단서 + 구직활동 곤란 결합 시 연장 평가가 가능한 트랙입니다. 대응은 ① 진단서 ② 연장 신청 ③ 부지급 시 이의 ④ 심사위 ⑤ 행정소송 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 실업급여 질병 재발 연장 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·신청·이의·심사·소송 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 진단서·소견서 확보</strong> — 4주 이상 안정 가료 명시.</li>\n<li><strong>② 수급기간 연장 신청</strong> — 사유 발생일부터 30일 이내.</li>\n<li><strong>③ 부지급 처분 시 이의신청 (90일 내)</strong> — 고용보험심사관.</li>\n<li><strong>④ 고용보험심사위원회 재심사 (90일 내)</strong></li>\n<li><strong>⑤ 행정소송 (1년 내)</strong> — 단계적 회복.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 질병으로 구직활동이 어려운 경우 수급기간 자체를 연장 신청할 수 있는 영역. 정지가 아닌 \'기간 연장\'으로 평가될 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신청 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용센터 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진료·진단서 확보 (즉시)</strong> — 안정 가료 기간·상병명 명시.</li>\n<li><strong>2단계 — 수급기간 연장 사유 신고 (사유 발생일 30일 내)</strong> — 고용센터.</li>\n<li><strong>3단계 — 연장 기간 결정 (1~2주)</strong> — 진단서 기준 90일 이내.</li>\n<li><strong>4단계 — 부지급 처분 시 이의신청 (90일 내)</strong> — 고용보험심사관.</li>\n<li><strong>5단계 — 심사위·재심사·행정소송</strong> — 단계적 진행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 신청 순서, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">질병 재발 연장 신청 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·치료·수급 갈래입니다.</strong></p>\n<ul>\n<li><strong>진단서 (상병명·안정 가료 기간 명시)</strong></li>\n<li><strong>소견서·진료기록 (재발·악화 입증)</strong></li>\n<li><strong>약 처방전·약국 영수증</strong></li>\n<li><strong>과거 진단 이력 (재발성 입증)</strong></li>\n<li><strong>수급자격증·실업인정 신청 기록</strong></li>\n<li><strong>구직활동 곤란 사정 자료 (보호자 진술 등)</strong></li>\n<li><strong>건강보험 진료내역 (치료 이력 종합)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진단서에 \'4주 이상 안정 가료 필요\' 또는 \'구직활동 곤란\' 같은 표현이 명시되면 연장 평가에 결정적. 정신과·정형외과 등 전문의 진단서가 우선. 만성질환은 재발 이력이 평가에 유리.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>30일 이내 신고</strong> — 사유 발생일 기준.</li>\n<li><strong>진단서 명시 사항</strong> — 안정 가료·구직 곤란.</li>\n<li><strong>연장 기간 산정</strong> — 진단서 기준 90일 이내.</li>\n<li><strong>특별 사유 추가 연장</strong> — 임신·출산·산재 등.</li>\n<li><strong>이의 시효 90일</strong> — 처분 통지일부터.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 고객센터 1350</strong></li>\n<li><strong>고용보험 1577-7114</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 질병 사유 수급기간 연장 평가',
        summary:
          '대법원 2018두63235(대법원, 2020.10.15 선고) 영역에서 법원은 수급자격자가 임신·출산·질병·부상으로 취업이 어려운 경우 수급기간 연장 신청의 요건과 진단서 등 객관적 자료의 평가 기준을 제시하며 신고 기한과 연장 기간 산정 원칙을 다룬 사례 흐름이 있습니다.',
        takeaway: '실업급여 수급 중 만성질환 재발도 진단서·구직활동 곤란 입증 시 수급기간 연장 평가 가능 영역. 정지가 아닌 연장으로 해석될 여지 있는 트랙.',
      },
    ],
    faq: [
      {
        question: '연장 신청 기한을 놓치면 어떻게 되나요?',
        answer:
          '<strong>사유 발생일부터 30일 이내 신고가 원칙이며 정당한 사유가 입증되면 사후 신청 평가가 가능한 영역입니다.</strong>',
      },
      {
        question: '우울증 같은 정신질환도 연장 사유가 되나요?',
        answer:
          '<strong>정신질환도 구직활동 곤란이 진단서로 입증되면 연장 사유 평가가 가능한 영역입니다.</strong>',
      },
      {
        question: '연장 기간은 얼마까지인가요?',
        answer:
          '<strong>일반적으로 사유 지속 기간만큼이며 임신·출산·산재 등 특별 사유는 최대 4년까지 연장 평가가 가능한 영역입니다.</strong>',
      },
      {
        question: '연장 기간 동안 구직급여가 나오나요?',
        answer:
          '<strong>연장 기간 자체는 미지급이며 사유 종료 후 잔여 일수만큼 다시 수급이 시작되는 영역입니다.</strong>',
      },
      {
        question: '이의신청은 어디로 하나요?',
        answer:
          '<strong>처분 통지일부터 90일 이내 고용보험심사관에 이의신청합니다.</strong>',
      },
    ],
    cta: { text: '실업급여 신청 순서, AI로 먼저 정리하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '특별 연장급여', href: '/guide/unemployment/unemployment-special-extended-benefit' },
      { label: '훈련 연장급여', href: '/guide/unemployment/unemployment-training-extended-benefit' },
      { label: '질병 자진퇴사', href: '/guide/unemployment/unemployment-medical-self-quit' },
      { label: '임신·출산 연장', href: '/guide/unemployment/unemployment-pregnancy-extension-track' },
      { label: '수급기간 만료', href: '/guide/unemployment/unemployment-benefit-period-expiry' },
    ],
  },

  // ─── 4. retirement-merger-succession-tenure-recount-track ───
  {
    domain: 'retirement',
    slug: 'retirement-merger-succession-tenure-recount-track',
    keyword: '합병 근속 합산 청구',
    questionKeyword: '회사 합병 후 새 회사가 근속연수를 0년으로 리셋한다고 해요. 합산 청구가 안 되는지 모르겠어요.',
    ctaKeyword: '합병 근속 합산 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '합병 근속 합산 — 5단계 고용승계 통산 퇴직금 차액 정리 | 로앤가이드',
      description:
        '회사 합병으로 새 회사가 근속연수 리셋을 주장한다면 고용승계·근속 합산 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중견 IT 기업에 8년 근무했어요. 작년 회사가 더 큰 회사에 흡수합병됐고 \'고용은 그대로 승계된다\'는 안내문을 받았습니다. 그런데 올해 회사 사정으로 퇴사하면서 퇴직금 정산서를 보니 \'근속 1년차 기준\'으로 산정. 회사는 \'합병 이후로 근속이 새로 시작\'이라 안내. 이전 회사 8년치는 어디 갔냐고 물으니 \'합병 시점에 이미 정산됐어야 했는데 정산 누락이면 이전 회사 청산절차에서 받아야 한다\'며 책임 회피. 그런데 저는 합병 시점에 퇴직금을 한 푼도 받은 적이 없어요. 9년치 모두 받을 수 있나요?" 대법원은 ① 회사가 합병으로 소멸하는 경우 ② 합병으로 신설·존속하는 회사가 종전 회사의 권리·의무를 포괄 승계하고 ③ 근로관계의 동일성이 유지된다면 종전 근속연수가 통산되어 퇴직금이 산정될 수 있다는 점을 시사한 영역. M&A + 고용승계 + 근속 합산 결합 시 통산 청구 평가가 가능한 트랙입니다. 대응은 ① 합병 형태 ② 고용승계 입증 ③ 노동청 진정 ④ 차액 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 합병 근속 합산 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 합병·승계·진정·차액·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 합병 형태 확인</strong> — 흡수·신설·영업양수도.</li>\n<li><strong>② 고용승계 입증</strong> — 안내문·계약 갱신·동일 업무.</li>\n<li><strong>③ 노동청 임금체불 진정</strong> — 통산 근속 기준 차액.</li>\n<li><strong>④ 퇴직금 차액 청구</strong> — 종전 근속 + 합병 후 근속.</li>\n<li><strong>⑤ 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 합병으로 종전 회사가 소멸했더라도 근로관계의 동일성이 유지되면 근속연수가 통산되는 영역. \'근속 리셋\' 주장은 평가에서 약한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용노동부 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 합병 자료 보존 (즉시)</strong> — 합병계약서·고용승계 안내문·등기.</li>\n<li><strong>2단계 — 종전 근속 자료 확보 (1~2주)</strong> — 입사일·재직증명서·4대보험 이력.</li>\n<li><strong>3단계 — 노동청 임금체불 진정 (관할 지방고용노동청)</strong> — 차액 신청.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 고용승계·근로관계 동일성 평가.</li>\n<li><strong>5단계 — 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">합병 근속 합산 청구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 합병·근속·승계 갈래입니다.</strong></p>\n<ul>\n<li><strong>합병계약서·이사회 결의서 (합병 형태 입증)</strong></li>\n<li><strong>고용승계 안내문·이메일·공지 (승계 의사 입증)</strong></li>\n<li><strong>종전 회사 재직증명서·근로계약서 (입사일·근속)</strong></li>\n<li><strong>합병 전후 4대보험 가입 이력 (관계 동일성 입증)</strong></li>\n<li><strong>합병 시점 퇴직금 정산 부재 자료 (미정산 입증)</strong></li>\n<li><strong>업무·직책·임금 동일성 자료 (근로관계 연속성)</strong></li>\n<li><strong>등기부등본 (합병 등기 일자)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 합병 시점에 퇴직금 중간정산을 받은 적이 있다면 정산 시점부터 새로 산정. 정산 부재 + 동일 업무 + 동일 임금 + 4대보험 연속 가입은 통산 평가에 결정적. 합병계약서 사본은 회사 공시·등기소에서 확인.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>합병 형태별 효과</strong> — 흡수합병·신설합병·영업양수도.</li>\n<li><strong>근로관계 동일성</strong> — 업무·직책·임금·근무지.</li>\n<li><strong>중간정산 여부</strong> — 합병 시점 퇴직금 정산.</li>\n<li><strong>새 회사 책임 범위</strong> — 권리·의무 포괄 승계.</li>\n<li><strong>3년 시효</strong> — 최종 퇴직일부터.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 합병·영업양도와 근속 통산',
        summary:
          '대법원 2025다214605(대법원, 2025.04.10 선고) 영역에서 법원은 회사 합병·영업양도 시 근로관계의 동일성이 유지되는 경우 근속연수의 통산 여부와 새 사용자의 퇴직금 산정 의무를 다투며 포괄승계의 효과 기준을 제시한 사례 흐름이 있습니다.',
        takeaway: 'M&A 후 고용승계 + 근로관계 동일성 유지 시 근속 합산 평가 가능 영역. 근속 리셋 주장 대응 가능 트랙.',
      },
    ],
    faq: [
      {
        question: '합병 안내문에 \'근속 0년부터 시작\'이라고 적혔으면 효력이 있나요?',
        answer:
          '<strong>일방적 안내는 강행규정인 퇴직금 청구권을 소멸시킬 수 없는 영역입니다. 근로관계 동일성 평가가 우선됩니다.</strong>',
      },
      {
        question: '영업양수도는 합병과 다른가요?',
        answer:
          '<strong>형식은 다르지만 근로관계 동일성이 유지되면 근속 통산 평가가 동일하게 적용될 수 있는 영역입니다.</strong>',
      },
      {
        question: '합병 시점에 중간정산을 받았다면 어떻게 되나요?',
        answer:
          '<strong>정산 시점 이후로 새로 근속이 산정되며 정산 부재 시 전체 근속이 통산 평가되는 영역입니다.</strong>',
      },
      {
        question: '새 회사가 \'우리는 책임 없다\'고 하면 어떻게 하나요?',
        answer:
          '<strong>합병 시 권리·의무 포괄 승계가 원칙이며 새 회사가 종전 사용자의 퇴직금 채무를 승계하는 영역입니다.</strong>',
      },
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>최종 퇴직일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '영업양도 근속', href: '/guide/retirement/retirement-business-transfer-tenure' },
      { label: '계열사 전적 통산', href: '/guide/retirement/retirement-affiliate-transfer-tenure' },
      { label: '재입사 근속 통산', href: '/guide/retirement/retirement-re-employment-tenure-aggregation' },
      { label: '소멸회사 퇴직금', href: '/guide/retirement/retirement-dissolved-company-claim' },
      { label: '중간정산 효력', href: '/guide/retirement/retirement-interim-settlement-effect' },
    ],
  },

  // ─── 5. retirement-bonus-included-average-wage-dispute-track ───
  {
    domain: 'retirement',
    slug: 'retirement-bonus-included-average-wage-dispute-track',
    keyword: '정기보너스 평균임금 산입',
    questionKeyword: '연 1회 지급된 정기보너스(연봉 200%)를 회사가 평균임금에서 빼고 퇴직금을 계산했어요. 포함되는지 모르겠어요.',
    ctaKeyword: '정기보너스 평균임금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '정기보너스 평균임금 산입 — 5단계 연 1회 지급분 통산 차액 정리 | 로앤가이드',
      description:
        '연 1회 지급된 정기보너스가 평균임금에서 빠진 퇴직금을 받았다면 산입 평가 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"대기업 협력사에 10년 근무하다 퇴사했어요. 매년 연말에 정기보너스로 \'연봉의 200%\'(약 1,000만원)를 받았고, 이건 단체협약·취업규칙에도 명시된 정기 지급 항목이었습니다. 그런데 회사가 퇴직금을 산정하면서 평균임금에 이 정기보너스를 빼고 \'기본급·고정수당\'만으로 계산. 그 결과 퇴직금이 약 4,200만원 나왔는데, 동료는 \'정기보너스도 평균임금에 산입돼야 한다. 합치면 약 5,800만원은 돼야 한다\'고 안내. 회사는 \'1년에 1번만 지급이라 평균임금 산정 기간 3개월 안에 안 들어간다\'고 주장. 정말 안 들어가나요?" 대법원은 ① 사용자가 단체협약·취업규칙 등에 따라 정기적·일률적으로 지급하는 상여금은 임금에 해당하고 ② 평균임금 산정 시 그 평균임금 산정 사유 발생일 이전 12개월간 지급된 임금의 12분의 3 상당액을 평균임금 산정 기준 임금에 산입할 수 있다는 점을 시사한 영역. 정기보너스 + 통상임금 vs 평균임금 결합 시 산입 평가가 가능한 트랙입니다. 대응은 ① 정기성 입증 ② 평균임금 재산정 ③ 노동청 진정 ④ 차액 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 정기보너스 평균임금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 정기성·재산정·진정·차액·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 정기·일률 지급 입증</strong> — 단체협약·취업규칙·관행.</li>\n<li><strong>② 평균임금 재산정</strong> — 12개월 지급분 ÷ 12 × 3.</li>\n<li><strong>③ 노동청 임금체불 진정</strong> — 차액 신청.</li>\n<li><strong>④ 퇴직금 차액 청구</strong> — 평균임금 재산정 × 근속.</li>\n<li><strong>⑤ 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 연 1회 지급이라도 단체협약·취업규칙·관행으로 정기·일률 지급되는 보너스는 평균임금 산입 평가가 가능한 영역. 산정 기간 3개월에 직접 포함되지 않아도 12분의 3 환산 산입 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용노동부 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정기보너스 지급 이력 보존 (즉시)</strong> — 단체협약·취업규칙·이체 내역.</li>\n<li><strong>2단계 — 평균임금 재산정 (1~2주)</strong> — 12개월 지급분 + 12분의 3 환산.</li>\n<li><strong>3단계 — 노동청 임금체불 진정 (관할 지방고용노동청)</strong> — 차액 신청.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 임금성·정기성 평가.</li>\n<li><strong>5단계 — 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 포함 항목, AI로 먼저 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">정기보너스 평균임금 산입 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 정기성·임금·산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>단체협약·취업규칙 (정기보너스 지급 근거)</strong></li>\n<li><strong>최근 3년 이상 정기보너스 이체 내역</strong></li>\n<li><strong>급여명세서 (정기보너스 항목 표시)</strong></li>\n<li><strong>근로계약서·연봉계약서 (보너스 약정)</strong></li>\n<li><strong>퇴직금 산정 명세서 (회사 산정 기준 확인)</strong></li>\n<li><strong>4대보험 보수월액 자료 (임금성 보조)</strong></li>\n<li><strong>동료·전임자 정기보너스 수령 자료 (일률성 입증)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 단체협약·취업규칙·근로계약서에 \'연 1회 200% 지급\' 같은 명시 조항이 있으면 정기성 평가에 결정적. 매년 동일 시기·동일 비율 지급 이력도 강력한 보조 자료. 일회성 인센티브와 구별 필요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>정기성·일률성</strong> — 단체협약·취업규칙·관행 결합.</li>\n<li><strong>임금성 평가</strong> — 근로의 대가 vs 호혜적 지급.</li>\n<li><strong>12분의 3 환산</strong> — 평균임금 산입 방식.</li>\n<li><strong>일회성 인센티브 구별</strong> — 정기보너스와 분리.</li>\n<li><strong>3년 시효</strong> — 퇴직일부터.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정기상여금의 평균임금 산입',
        summary:
          '대법원 2020다287921(대법원, 2022.03.31 선고) 영역에서 법원은 단체협약 또는 취업규칙에 따라 정기적·일률적으로 지급되는 상여금이 평균임금 산정의 기초가 되는 임금에 포함되는지 여부를 다투며 산정 사유 발생일 이전 12개월간 지급분의 12분의 3 환산 산입 기준을 제시한 사례 흐름이 있습니다.',
        takeaway: '연 1회 지급된 정기보너스도 정기·일률 지급이라면 평균임금 산입 평가 가능 영역. 12분의 3 환산으로 산정 평가 트랙.',
      },
    ],
    faq: [
      {
        question: '연 1회 지급이라 3개월 산정 기간에 안 들어간다고 하는데요?',
        answer:
          '<strong>3개월에 직접 포함되지 않더라도 12개월 지급분의 12분의 3을 환산해 산입 평가하는 영역입니다.</strong>',
      },
      {
        question: '취업규칙에 \'경영 성과에 따라\'라고 적혔으면 정기성이 부정되나요?',
        answer:
          '<strong>문구와 무관하게 실제 매년 동일 시기·동일 비율 지급됐다면 정기성 평가가 가능한 영역입니다.</strong>',
      },
      {
        question: '회사가 \'호혜적 지급이라 임금이 아니다\'고 주장하면요?',
        answer:
          '<strong>단체협약·취업규칙·관행으로 청구권이 형성됐다면 임금성 평가가 우세한 영역입니다.</strong>',
      },
      {
        question: '일회성 격려금도 포함되나요?',
        answer:
          '<strong>일회성·비정기 지급은 평균임금 산입에서 제외되며 정기보너스와 구별되는 영역입니다.</strong>',
      },
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>퇴직일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '퇴직금 포함 항목, AI로 먼저 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '영업커미션 산입', href: '/guide/retirement/retirement-sales-commission-included' },
      { label: '스톡옵션 산입', href: '/guide/retirement/retirement-stock-option-included' },
      { label: '평균임금 분쟁', href: '/guide/retirement/retirement-average-wage-dispute' },
      { label: '명절 상여금 산입', href: '/guide/retirement/retirement-holiday-bonus-included' },
      { label: '인센티브 평균임금', href: '/guide/retirement/retirement-incentive-average-wage' },
    ],
  },
];
