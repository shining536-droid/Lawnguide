import { SpokePage } from '../spoke-pages';

// batch69 wage-unemp-retire — 5개 (2026-05-19)
//
// 고유 존재 이유:
// 1. wage-comprehensive-cap-overtime-over-claim-track — 포괄임금제 자체 효력 다툼(기존 포괄임금 트랙)과 분기. 약정에 포함된 시간 자체는 인정하되, '약정시간을 초과한 실제 연장근로'만 별도 청구하는 트랙.
// 2. wage-business-trip-overseas-allowance-unilateral-cut-track — 출장수당의 임금성(통상임금·평균임금 포함 여부) + 일방 삭감 무효 다툼. 해외 장기 출장수당 자체 트랙 (기존 business-trip-allowance-ordinary-wage·perdiem-stopped 와 분기 — 본 페이지는 단순 중단이 아닌 '삭감액 차액 회복' 결합).
// 3. unemployment-job-search-activity-recognition-rejected-objection-track — 수급자격 신청 단계가 아닌 '실업인정일 구직활동 인정 거절' 단계 다툼. 거절 사유 + 재제출 + 이의신청 트랙 (기존 job-search-recognized-types·job-search-violation-cancel 와 분기 — 본 페이지는 인정 거부 후 회복 절차 결합).
// 4. retirement-honorary-retirement-coercion-agreement-rescission-track — 명예퇴직 자체가 아닌 '강요·종용 후 작성된 명퇴 신청·합의서' 의사 하자(강박·기망) 다툼 트랙 (기존 retirement-honorary-quit-extra-claim-waiver-invalid 와 분기 — 별도 수령 청구가 아닌 신청 자체 무효 트랙).
// 5. retirement-fixed-term-renewal-chain-tenure-aggregation-track — 기존 retirement-fixed-term-contract-gap-tenure-link 와 분기 — 단순 공백 연결이 아닌 '여러 차례 갱신 chain' 자체의 근속 합산 청구 트랙. 갱신 횟수·계속근로 인정 트랙.

export const spokesBatch69WageUnempRetire: SpokePage[] = [
  // ─── 1. wage-comprehensive-cap-overtime-over-claim-track ───
  {
    domain: 'wage',
    slug: 'wage-comprehensive-cap-overtime-over-claim-track',
    keyword: '포괄임금 약정시간 초과분 별도 청구',
    questionKeyword: '포괄임금 약정에 월 20시간 연장근로가 포함돼 있는데 실제로는 매달 50시간씩 일해요. 초과 30시간분이 안 들어와요.',
    ctaKeyword: '포괄임금 약정시간 초과분 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '포괄임금 약정시간 초과분 — 5단계 실제 연장근로 차액 청구 정리 | 로앤가이드',
      description:
        '포괄임금 약정시간을 넘긴 실제 연장근로분이 누락됐다면 약정 인정·초과분 청구 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"제 근로계약서에는 \'포괄임금 약정으로 기본급에 월 20시간 연장근로수당이 포함된 것으로 본다\'고 적혀 있어요. 그런데 실제로는 거의 매달 연장근로 시간이 50시간을 넘고, 특히 마감주에는 70시간까지 갑니다. 회사는 \'포괄임금 약정으로 다 처리됐다\'며 추가 지급을 거부. 약정 20시간을 인정해도 초과한 30시간은 별도로 받아야 하는 것 아닌가요?" 대법원은 ① 포괄임금 약정이 유효하더라도 ② 실제 연장근로가 약정 시간을 초과한 경우 ③ 그 초과분에 대해서는 별도 연장근로수당이 지급되어야 한다는 점을 시사한 영역. 포괄임금 약정의 유효성을 다투지 않더라도 \'약정 초과분 차액\'은 별도 청구가 가능한 트랙입니다. 대응은 ① 실 근로시간 ② 약정 시간 비교 ③ 노동청 진정 ④ 차액 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 포괄임금 약정 초과분 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 실 근로·약정 비교·진정·차액·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 실제 연장근로시간 산정</strong> — 출퇴근 기록·근태·메신저 로그.</li>\n<li><strong>② 약정 시간 대비 초과분 확정</strong> — 월별 차액 계산.</li>\n<li><strong>③ 노동청 임금체불 진정</strong> — 초과분 미지급 신청.</li>\n<li><strong>④ 통상임금 1.5배 차액 청구</strong> — 근기법 제56조.</li>\n<li><strong>⑤ 민사 임금 청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 포괄임금 약정 자체의 유효성을 다투지 않아도 약정 시간 초과분은 별도 청구 영역. 약정 20시간 + 실 50시간이면 30시간분 연장근로수당이 빠진 셈으로 평가될 여지가 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용노동부 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 출퇴근·근태 자료 보존 (즉시)</strong> — 출근부·메신저·이메일 발송 시각.</li>\n<li><strong>2단계 — 월별 실 연장근로시간 산정 (1~2주)</strong> — 약정 대비 초과분.</li>\n<li><strong>3단계 — 노동청 임금체불 진정 (관할 지방고용노동청)</strong> — 초과분 신청.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 통상임금·초과분 심사.</li>\n<li><strong>5단계 — 민사 임금청구 (3년 시효)</strong> — 노동청 미해결 시.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">포괄임금 약정 초과분 차액 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 실 근로·약정·산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>근로계약서 (포괄임금 약정·약정 시간 명시)</strong></li>\n<li><strong>취업규칙·임금규정 (포괄임금 조항)</strong></li>\n<li><strong>출근부·근태 기록·지문·카드 인식 로그</strong></li>\n<li><strong>업무 메신저·이메일 발송 시각 (실 종업 시각 입증)</strong></li>\n<li><strong>월별 급여명세서 (포괄임금 산입액 입증)</strong></li>\n<li><strong>업무 일지·일별 보고서 (구체적 업무 시각)</strong></li>\n<li><strong>동료 진술서 (반복 야근 분위기)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 메신저·이메일 발송 시각은 회사 시스템 로그로 직접 회수 가능. 야근 식대·교통비 영수증은 보조 자료. 약정 시간이 명확할수록 초과분 산정도 정확.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>약정 시간 명확성</strong> — 월 20시간·40시간 등 특정.</li>\n<li><strong>실 근로시간 입증</strong> — 객관적 로그 우선.</li>\n<li><strong>통상임금 산정</strong> — 기본급·고정수당 포함 범위.</li>\n<li><strong>휴게시간 공제</strong> — 실질 휴게 vs 대기시간.</li>\n<li><strong>3년 시효</strong> — 각 임금 지급일별.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금 약정과 약정시간 초과분',
        summary:
          '대법원 2022다257238(대법원, 2024 선고) 영역에서 법원은 근로자와 사용자가 정한 1주 근로시간이 40시간을 초과하거나 1일 근로시간이 8시간을 초과하는 경우 그 초과 부분이 연장근로시간에 산입돼 통상임금 이상의 임금을 지급해야 하는 시간에 포함되는지를 다툰 사례 흐름이 있습니다.',
        takeaway: '포괄임금 약정이 유효해도 약정 시간 초과분은 별도 연장근로수당 청구 가능 영역. 시효 내 차액 회복 평가 가능 트랙.',
      },
    ],
    faq: [
      {
        question: '포괄임금 약정에 사인했는데도 추가 청구 가능한가요?',
        answer:
          '<strong>약정 시간 자체는 인정하더라도 약정을 초과한 실 연장근로분은 별도 청구가 가능한 영역입니다.</strong>',
      },
      {
        question: '회사가 "월급에 다 포함됐다"고 일관되게 말하는데요?',
        answer:
          '<strong>포괄 약정이 \'무제한 연장근로\'까지 포함하는 것은 아니라는 점이 판례에서 시사된 영역입니다.</strong>',
      },
      {
        question: '실 근로시간 입증이 어려운데 어떻게 하나요?',
        answer:
          '<strong>출퇴근 카드·메신저·이메일 발송 시각·업무 일지 등 객관적 로그를 종합 평가받을 수 있는 영역입니다.</strong>',
      },
      {
        question: '약정 시간이 명시되지 않은 경우는요?',
        answer:
          '<strong>약정 시간이 불명확하면 포괄임금 약정 자체의 효력 다툼으로 확장되는 영역입니다.</strong>',
      },
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>각 월 임금 지급일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '포괄임금 잔여 청구', href: '/guide/wage/wage-pogual-overtime-difference-claim' },
      { label: '포괄임금 약정 무효', href: '/guide/wage/wage-pogualkeum-overtime-void-claim' },
      { label: '연장근로 미지급', href: '/guide/wage/wage-overtime-unpaid-claim' },
      { label: '주 52시간 초과', href: '/guide/wage/wage-overtime-over-weekly-52' },
      { label: '포괄임금 잔업 차액', href: '/guide/wage/wage-comprehensive-pay-overtime-cap-excess-track' },
    ],
  },

  // ─── 2. wage-business-trip-overseas-allowance-unilateral-cut-track ───
  {
    domain: 'wage',
    slug: 'wage-business-trip-overseas-allowance-unilateral-cut-track',
    keyword: '해외출장수당 일방 삭감',
    questionKeyword: '5년간 해외출장 갈 때마다 일당 15만원씩 받았는데 새 대표가 와서 7만원으로 일방 삭감했어요.',
    ctaKeyword: '해외출장수당 삭감 차액 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외출장수당 일방 삭감 — 5단계 임금성·취업규칙 차액 회복 정리 | 로앤가이드',
      description:
        '해외출장수당이 절반으로 일방 삭감됐다면 임금성 평가·차액 회복 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"입사 5년차에 해외 영업팀을 맡으며 분기마다 동남아·중국 출장을 다녀왔어요. 출장 기간 일당 15만원이 사규로 정해져 5년간 한 번도 안 바뀌었고, 명세서에도 \'출장수당\' 별도 항목으로 매번 지급됐습니다. 그런데 최근 대표가 바뀌면서 일방적으로 \'경비 절감 정책\'을 사내 공지하더니 다음 출장부터 일당 7만원으로 깎였어요. 노조 동의는커녕 직원 의견 수렴조차 없었습니다." 대법원은 ① 정기적·일률적·고정적으로 지급된 수당은 임금성이 인정될 수 있고 ② 임금 항목의 일방 폐지·삭감은 근로조건 불이익 변경으로 ③ 근로기준법 제94조에 따른 근로자 과반수 동의가 없으면 효력이 제한되는 영역. 출장수당이 사실상 임금이라면 일방 삭감 차액은 별도 청구가 가능한 트랙입니다. 대응은 ① 임금성 ② 일방 변경 ③ 노동청 진정 ④ 차액 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 해외출장수당 일방 삭감 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 임금성·일방변경·진정·차액·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 출장수당 임금성 평가</strong> — 정기·일률·고정 3요소.</li>\n<li><strong>② 일방 변경 절차 평가</strong> — 동의 부재·취업규칙 변경 유무.</li>\n<li><strong>③ 노동청 임금체불 진정</strong> — 삭감 차액 신청.</li>\n<li><strong>④ 차액 청구</strong> — 종전 일당 × 출장일수.</li>\n<li><strong>⑤ 민사 임금 청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 5년 이상 정기적으로 동일 금액 지급된 출장수당은 실비 변상이 아닌 임금성 평가가 가능한 영역. 일방 삭감은 불이익 변경 절차 위반으로 평가될 여지가 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용노동부 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 출장수당 지급 이력 보존 (즉시)</strong> — 5년치 명세서·이체 내역.</li>\n<li><strong>2단계 — 삭감 통보 자료 수집 (1~2주)</strong> — 사내 공지·메일·구두 녹취.</li>\n<li><strong>3단계 — 노동청 임금체불 진정 (관할 지방고용노동청)</strong> — 차액 신청.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 임금성·절차 심사.</li>\n<li><strong>5단계 — 민사 임금청구</strong> — 3년 시효, 통상임금 산정 영향 추가 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외출장수당 일방 삭감 차액 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 임금성·일방변경·산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>최근 5년치 급여명세서 (출장수당 별도 항목 입증)</strong></li>\n<li><strong>출장 이력·일정표·항공권 (출장일수 입증)</strong></li>\n<li><strong>근로계약서·취업규칙·복무규정·사규</strong></li>\n<li><strong>삭감 통보 사내 공지·메일·구두 녹취</strong></li>\n<li><strong>직원 동의 절차 부재 입증 자료</strong></li>\n<li><strong>동료 진술서 (동일 변경 일률 적용 입증)</strong></li>\n<li><strong>출장 보고서·결과보고 (업무 수행 입증)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 출장수당이 실제 경비(항공·숙박·식대)와 별도로 \'일당\' 형태로 정액 지급됐다면 임금성 평가에 결정적. 영수증 정산이 별도라면 더 강력.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임금성 3요소</strong> — 정기·일률·고정.</li>\n<li><strong>실비 변상 vs 임금</strong> — 영수증 정산 별도 여부.</li>\n<li><strong>취업규칙 불이익 변경</strong> — 근기법 제94조 동의 절차.</li>\n<li><strong>통상임금 산입</strong> — 연장·휴일·야간수당 영향.</li>\n<li><strong>3년 시효</strong> — 각 출장 지급일별.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정기 지급 수당 폐지의 불이익 변경',
        summary:
          '대법원 2018다260602(대법원 선고) 영역에서 법원은 회사가 정기적·일률적으로 지급해 오던 수당의 폐지·삭감이 임금 및 근로조건에 관한 변경으로서 근로자 과반수 동의 없이 이루어진 경우 그 효력이 제한될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '정기·일률 지급 출장수당은 임금성 평가 가능 영역. 일방 삭감은 불이익 변경 절차 위반으로 평가될 여지 있는 트랙.',
      },
    ],
    faq: [
      {
        question: '출장수당이 실비 변상이라며 임금이 아니라는데요?',
        answer:
          '<strong>실 경비를 별도 정산하면서 일당이 정액 지급됐다면 임금성 평가가 가능한 영역입니다.</strong>',
      },
      {
        question: '저만 깎인 게 아니라 전 직원 일률 적용인데요?',
        answer:
          '<strong>일률 적용 자체가 임금성 인정에 유리하며 절차상 동의 부재가 핵심 쟁점입니다.</strong>',
      },
      {
        question: '동의 없이 바뀐 게 무효라면 종전 일당이 그대로 적용되나요?',
        answer:
          '<strong>불이익 변경이 무효 평가되면 종전 사규가 그대로 적용돼 차액 청구가 가능한 영역입니다.</strong>',
      },
      {
        question: '통상임금에도 영향이 있나요?',
        answer:
          '<strong>정기·일률·고정 3요소를 충족하면 통상임금 산입 평가로 연장·휴일수당 산정에도 영향을 미치는 영역입니다.</strong>',
      },
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>각 출장수당 지급일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '출장수당 통상임금', href: '/guide/wage/wage-business-trip-allowance-ordinary-wage-track' },
      { label: '출장비 중단', href: '/guide/wage/wage-business-trip-perdiem-suddenly-stopped' },
      { label: '취업규칙 불이익 변경', href: '/guide/wage/wage-employment-rule-change-unfavorable' },
      { label: '해외출장수당 회수', href: '/guide/wage/wage-overseas-business-trip-allowance-recovery' },
      { label: '식대 통상임금', href: '/guide/wage/wage-meal-allowance-ordinary-wage-track' },
    ],
  },

  // ─── 3. unemployment-job-search-activity-recognition-rejected-objection-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-job-search-activity-recognition-rejected-objection-track',
    keyword: '구직활동 인정 거절 이의 재제출',
    questionKeyword: '실업인정일에 입사지원서 제출 증빙을 냈는데 고용센터가 "활동으로 안 보인다"며 인정 거절했어요.',
    ctaKeyword: '구직활동 인정 거절 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '구직활동 인정 거절 — 5단계 재제출·이의신청 정리 | 로앤가이드',
      description:
        '실업인정일 구직활동이 인정 거절돼 실업급여가 지급되지 않았다면 재제출·이의 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3개월째 실업급여를 받고 있는데 이번 실업인정일에 \'채용 사이트 입사지원 3건\' 증빙을 제출했어요. 그런데 담당자가 \'단순 클릭만으로는 활동으로 보기 어렵다\'며 인정을 거절. 이번 회차 실업급여 약 180만원이 부지급 처분됐고, 이의 신청 방법도 안내받지 못했어요. 다음 회차 구직활동도 어떻게 준비해야 할지 막막합니다." 고용보험법은 ① 실업인정일에 구직활동 사실을 신고·증빙해야 ② 활동 인정 여부는 고용센터 판단 ③ 부지급·인정 거절 처분에 대해 90일 내 이의신청·심사·재심사 청구가 가능한 영역. 인정 거절 후에도 보강 자료 재제출·다음 회차 활동 재구성·이의 트랙이 결합돼 회복 절차가 가능한 트랙입니다. 대응은 ① 거절 사유 ② 재제출 ③ 다음 회차 활동 ④ 이의신청 ⑤ 행정소송 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 구직활동 인정 거절 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거절 사유·재제출·재구성·이의·소송 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거절 사유 확인</strong> — 단순 클릭·증빙 부족·중복.</li>\n<li><strong>② 보강 자료 재제출</strong> — 입사지원 확인 메일·면접 통보.</li>\n<li><strong>③ 다음 회차 활동 재구성</strong> — 인정 유형별 분산.</li>\n<li><strong>④ 90일 내 이의신청</strong> — 고용보험심사관.</li>\n<li><strong>⑤ 심사위·재심사·행정소송</strong> — 단계적 회복.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 인정 거절은 \'활동 자체 부정\'이 아니라 \'증빙 부족\'으로 평가되는 경우가 많은 영역. 보강 자료 + 다음 회차 다양화로 회복 평가가 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신청 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용센터 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거절 사유 확인 (즉시)</strong> — 고용센터 담당자 면담·서면.</li>\n<li><strong>2단계 — 보강 자료 재제출 (당일~7일)</strong> — 입사지원 확인 메일·면접 통보·이력서 발송 캡처.</li>\n<li><strong>3단계 — 다음 회차 활동 재구성 (28일)</strong> — 채용박람회·직업훈련·구직상담 혼합.</li>\n<li><strong>4단계 — 90일 내 이의신청</strong> — 고용보험심사관.</li>\n<li><strong>5단계 — 심사위·재심사·행정소송</strong> — 단계적 진행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">구직활동 인정 거절 회복 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 거절·증빙·재구성 갈래입니다.</strong></p>\n<ul>\n<li><strong>인정 거절 통지서·고용센터 안내 자료</strong></li>\n<li><strong>입사지원 확인 메일·기업 회신 메일</strong></li>\n<li><strong>채용 사이트 지원 캡처 (지원 일자·기업명 명확)</strong></li>\n<li><strong>면접 통보·면접 결과 통지서</strong></li>\n<li><strong>직업훈련 수강 확인서·출석부</strong></li>\n<li><strong>구직상담·취업특강 참석 증빙</strong></li>\n<li><strong>이력서·자기소개서 발송 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 인정 거절 사유가 \'단순 클릭\'이라면 다음 회차에 면접·직업훈련·채용박람회 등 적극 활동을 혼합해야 평가에 유리. 워크넷 외 민간 채용 사이트 활동도 증빙 가능한 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>활동 유형별 인정 기준</strong> — 입사지원·면접·직업훈련 별도.</li>\n<li><strong>증빙 자료 구체성</strong> — 기업명·일자·연락 이력.</li>\n<li><strong>중복 활동 평가</strong> — 같은 기업 재지원 제한.</li>\n<li><strong>회차별 횟수 충족</strong> — 1·4차 1회, 5차 이후 2회.</li>\n<li><strong>이의신청 90일</strong> — 처분 통지받은 날부터.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 고객센터 1350</strong></li>\n<li><strong>고용보험 1577-7114</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 구직활동 인정과 증빙 자료 평가',
        summary:
          '고용보험심사위원회 2019재결 제44호(고용보험심사위원회) 영역에서 위원회는 수급자의 재취업활동 인정 여부를 판단함에 있어 실업인정 신청 시 첨부된 자료로 재취업활동 사실을 확인하여야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '구직활동 인정은 객관적 증빙 자료 기준 평가 영역. 보강 자료 재제출 + 이의신청으로 회복 평가 가능 트랙.',
      },
    ],
    faq: [
      {
        question: '한 회차 인정 거절되면 그 회차 실업급여는 완전히 못 받나요?',
        answer:
          '<strong>해당 회차분이 부지급될 수 있으나 이의신청 + 보강 자료로 회복 평가가 가능한 영역입니다.</strong>',
      },
      {
        question: '워크넷 외 민간 사이트 활동도 인정되나요?',
        answer:
          '<strong>구직활동 인정 기준에 부합하면 민간 채용 사이트 활동도 평가 대상이 되는 영역입니다.</strong>',
      },
      {
        question: '같은 회사에 두 번 지원하면 인정되나요?',
        answer:
          '<strong>동일 기업 재지원은 인정 제한될 수 있어 다양한 기업·활동 유형 혼합이 권장되는 영역입니다.</strong>',
      },
      {
        question: '담당자가 안 알려준 이의신청 방법은요?',
        answer:
          '<strong>처분 통지받은 날부터 90일 내 고용보험심사관에게 이의신청이 가능한 영역이며 서면·온라인 접수 가능합니다.</strong>',
      },
      {
        question: '심사 결과에도 불복하면요?',
        answer:
          '<strong>심사위 결정에 불복하면 재심사 청구 + 행정소송까지 단계적으로 진행되는 영역입니다.</strong>',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '구직활동 인정 유형', href: '/guide/unemployment/unemployment-job-search-recognized-types' },
      { label: '구직활동 위반 취소', href: '/guide/unemployment/unemployment-job-search-violation-cancel' },
      { label: '실업급여 이의신청', href: '/guide/unemployment/unemployment-objection-procedure' },
      { label: '부지급 처분 이의', href: '/guide/unemployment/unemployment-wrongful-denial-appeal-procedure' },
      { label: '실업인정 결석', href: '/guide/unemployment/unemployment-missed-attendance' },
    ],
  },

  // ─── 4. retirement-honorary-retirement-coercion-agreement-rescission-track ───
  {
    domain: 'retirement',
    slug: 'retirement-honorary-retirement-coercion-agreement-rescission-track',
    keyword: '명예퇴직 강요 합의 무효',
    questionKeyword: '인사팀이 매일 불러 "명퇴 안 받으면 다른 부서 보낸다"고 압박해 명퇴 신청서를 썼는데 무효 주장 가능한가요?',
    ctaKeyword: '명예퇴직 강요 합의 무효 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '명예퇴직 강요 합의 무효 — 5단계 의사 하자·복직 회복 정리 | 로앤가이드',
      description:
        '명예퇴직 신청·합의서가 강박·기망으로 작성됐다면 의사 하자·복직 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"15년 근속 부장인데 회사가 \'조직 슬림화\'를 이유로 인사팀장이 매일 면담을 불러 \'명예퇴직 신청 안 하면 지방 영업소로 발령 내고 직위도 강등한다\'고 압박. 결국 한 달간 출근하면 매일 4시간씩 면담이 이어졌고, 정신적으로 지쳐 명퇴 신청서에 사인했어요. 위로금 6개월치를 받았는데 동료들은 \'그렇게 받아낸 거라 무효 주장 가능하다\'고 합니다. 사인한 합의서·신청서가 정말 무효가 될 수 있나요?" 민법은 ① 강박 또는 기망에 의한 의사표시는 취소할 수 있고 ② 자유로운 의사 형성이 침해된 합의서는 효력이 제한될 수 있는 영역. 명예퇴직 신청·합의서도 면담 횟수·시간·발화 내용·대안 부재 같은 정황이 결합되면 자유 의사 부정 평가가 가능한 트랙입니다. 대응은 ① 강요 정황 ② 의사 하자 ③ 취소 통지 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 명예퇴직 강요 합의 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 강요 정황·의사 하자·취소·노동위·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 강요 정황 입증</strong> — 면담 횟수·시간·발화 내용.</li>\n<li><strong>② 의사 하자 평가</strong> — 강박·기망·대안 부재.</li>\n<li><strong>③ 취소·철회 통지 (3년 내)</strong> — 내용증명으로.</li>\n<li><strong>④ 노동위 부당해고 구제신청 (3개월 내)</strong> — 사실상 해고 트랙.</li>\n<li><strong>⑤ 민사 근로자 지위 확인·임금 청구</strong> — 단계적 회복.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 명예퇴직 신청서·합의서에 사인했어도 \'사실상 강요\' 정황이 결합되면 의사 하자로 취소 평가가 가능한 영역. 위로금 수령도 일률적으로 추인으로 평가되지 않는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신청 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·통지·노동위 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 강요 정황 자료 보존 (즉시)</strong> — 면담 녹음·일지·문자·동료 진술.</li>\n<li><strong>2단계 — 의사 하자 사유 정리 (1~2주)</strong> — 강박·기망 요건 점검.</li>\n<li><strong>3단계 — 취소·철회 내용증명 (3년 내)</strong> — 회사 통지·위로금 처리 명시.</li>\n<li><strong>4단계 — 노동위 부당해고 구제신청 (퇴직일부터 3개월 내)</strong> — 사실상 해고 평가.</li>\n<li><strong>5단계 — 근로자 지위 확인 + 임금 청구</strong> — 복직·소급 임금.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">명예퇴직 강요 합의 취소 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 강요·의사·취소 갈래입니다.</strong></p>\n<ul>\n<li><strong>면담 녹음 (날짜·발화자·시간 명확)</strong></li>\n<li><strong>면담 일지·출입 기록 (반복 면담 입증)</strong></li>\n<li><strong>강요 발화 메일·문자·메신저</strong></li>\n<li><strong>명퇴 신청서·합의서·위로금 산정서</strong></li>\n<li><strong>동료 진술서 (동시기 일률 압박 분위기)</strong></li>\n<li><strong>인사 발령·강등 위협 자료</strong></li>\n<li><strong>회사 명퇴 공고·인원감축 사내 안내</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 면담 녹음이 없어도 출입 기록·메신저 호출·동료 증언이 결합되면 강요 정황 평가에 유리. 위로금 입금 후 즉시 반환 의사 표명 또는 가압류 회피 차원의 보관이라면 추인 부정에도 도움.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>강박 요건</strong> — 외포심 + 대안 부재.</li>\n<li><strong>기망 요건</strong> — 허위 정보·강등 위협.</li>\n<li><strong>자유 의사 침해</strong> — 면담 빈도·시간·발화 강도.</li>\n<li><strong>위로금 수령</strong> — 추인 평가 별도.</li>\n<li><strong>구제신청 3개월</strong> — 퇴직일부터 부당해고 트랙.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 명예퇴직 의사표시와 자유 의사',
        summary:
          '대법원 98다42172(대법원 선고) 영역에서 법원은 명예퇴직의 의사표시 효력 발생 시기와 그 의사표시가 도달한 뒤 일방의 자유로운 철회 가능성, 그리고 사용자가 표시한 문언에서 의미가 명확하게 드러나지 않는 경우 합리적 해석을 다툰 사례 흐름이 있습니다.',
        takeaway: '명예퇴직 신청·합의도 자유 의사·하자 평가 영역. 강요 정황 결합 시 효력 제한 평가 가능 트랙.',
      },
    ],
    faq: [
      {
        question: '사인한 명퇴 합의서를 이제 와서 무효라고 할 수 있나요?',
        answer:
          '<strong>강박·기망 정황이 결합되면 의사 하자로 취소 평가가 가능한 영역이며 3년 내 행사 가능합니다.</strong>',
      },
      {
        question: '위로금을 이미 받아 썼는데 추인이 된 건가요?',
        answer:
          '<strong>위로금 수령만으로 일률적 추인 평가가 되지 않으며 반환 의사 표명·자유 의사 여부가 종합 판단되는 영역입니다.</strong>',
      },
      {
        question: '면담 녹음이 없으면 강요 입증이 어렵나요?',
        answer:
          '<strong>출입 기록·동료 증언·메신저 호출·동시기 일률 압박 정황이 결합되면 강요 평가가 가능한 영역입니다.</strong>',
      },
      {
        question: '노동위·민사 어느 트랙이 우선인가요?',
        answer:
          '<strong>사실상 해고 평가가 가능하면 3개월 내 노동위 구제신청이 우선이며 민사는 병행·후속 가능 영역입니다.</strong>',
      },
      {
        question: '복직되면 그동안 임금은 어떻게 되나요?',
        answer:
          '<strong>부당해고로 평가되면 퇴직일부터 복직일까지의 임금 상당액 소급 청구가 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '명예퇴직 위약 회수', href: '/guide/retirement/retirement-honorary-pay-recoupment-job-restriction' },
      { label: '명퇴 추가 청구', href: '/guide/retirement/retirement-honorary-quit-extra-claim-waiver-invalid' },
      { label: '포기 합의 무효', href: '/guide/retirement/retirement-waiver-agreement-invalid' },
      { label: '교사 명예퇴직', href: '/guide/retirement/retirement-teachers-honorary-retirement' },
      { label: '퇴직금 시효', href: '/guide/retirement/retirement-statute-of-limitations' },
    ],
  },

  // ─── 5. retirement-fixed-term-renewal-chain-tenure-aggregation-track ───
  {
    domain: 'retirement',
    slug: 'retirement-fixed-term-renewal-chain-tenure-aggregation-track',
    keyword: '계약직 반복 갱신 근속 합산',
    questionKeyword: '1년 계약직으로 4번 갱신하며 4년 일했는데 회사가 "계약마다 별개"라며 마지막 1년치 퇴직금만 줘요.',
    ctaKeyword: '계약직 반복 갱신 근속 합산 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '계약직 반복 갱신 근속 합산 — 5단계 계속근로 통산·차액 회복 정리 | 로앤가이드',
      description:
        '계약직 갱신을 4번 반복했는데 마지막 1년치 퇴직금만 지급됐다면 4년 합산 차액 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중소기업에 1년 계약직으로 입사해 매년 계약을 갱신하며 4년을 같은 부서·같은 업무로 일했어요. 매번 \'계약기간 만료\' 한 달 전 회사가 갱신 의사를 물었고 저는 항상 동의했습니다. 그런데 4번째 계약 만기로 퇴사하니 회사가 \'각 계약이 별개라 마지막 1년치 퇴직금만 발생\'이라며 약 320만원만 입금. 동료들은 \'4년 통산해서 1,280만원 정도 나와야 한다\'고 합니다." 대법원은 ① 근로계약기간을 정하거나 그러한 형식의 근로계약을 반복하여 체결한 경우 ② 갱신의 합리적 기대·동일 업무·반복 갱신 횟수 같은 사정이 결합되면 ③ 전체 기간을 계속근로기간으로 통산할 수 있다는 점을 시사한 영역. 4번 이상 갱신 chain은 단순 형식적 분리로 평가되지 않을 여지가 있는 트랙입니다. 대응은 ① 갱신 횟수 ② 동일성 ③ 노동청 진정 ④ 차액 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 계약직 반복 갱신 근속 합산 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 갱신·동일성·진정·차액·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 갱신 횟수·기간 합산</strong> — 4회·4년 통산.</li>\n<li><strong>② 동일 업무·부서·근무 장소</strong> — 본질적 동일성.</li>\n<li><strong>③ 노동청 임금체불 진정</strong> — 미산입 퇴직금 신청.</li>\n<li><strong>④ 계속근로 통산</strong> — 전 기간 합산 산정.</li>\n<li><strong>⑤ 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 1년 계약 4회 반복 + 동일 업무 + 갱신 의례화는 단순 별개 계약으로 평가되지 않을 영역. 갱신 chain 전체를 계속근로기간으로 통산해 차액 청구가 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·진정·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 전 갱신 계약서·근로 자료 보존 (즉시)</strong> — 4회 계약서·근로조건.</li>\n<li><strong>2단계 — 동일성 입증 자료 (1~2주)</strong> — 업무 분장·부서·사원증·이메일.</li>\n<li><strong>3단계 — 노동청 임금체불 진정 (관할 지방고용노동청)</strong> — 미산입 퇴직금 차액 신청.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 계속근로 통산 평가.</li>\n<li><strong>5단계 — 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">계약직 반복 갱신 chain 근속 합산 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 갱신·동일성·산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>전 4회 근로계약서·갱신계약서 (반복 갱신 입증)</strong></li>\n<li><strong>업무 분장표·직책·소속 부서 자료 (동일 직무)</strong></li>\n<li><strong>4대보험 가입·유지 이력 (계속 가입 입증)</strong></li>\n<li><strong>출근부·근태·급여명세서 (반복 근무)</strong></li>\n<li><strong>사원증·이메일·업무 시스템 권한 (연속 유지)</strong></li>\n<li><strong>회사 갱신 의례 자료 (만기 전 갱신 안내 메일·문서)</strong></li>\n<li><strong>동료 진술서 (같은 자리 4년 입증)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 매번 만기 전 회사가 \'갱신 의사 확인\'을 의례적으로 했다면 갱신 기대권 + 사실상 무기 근로 평가에 유리. 사원증·이메일·인사 시스템이 연속 유지됐다면 단절 부정에 결정적.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>갱신 횟수</strong> — 1·2회보다 3회 이상이 결정적.</li>\n<li><strong>업무 동일성</strong> — 직무·부서·근무 장소.</li>\n<li><strong>갱신 의례화</strong> — 만기 전 갱신 안내 패턴.</li>\n<li><strong>중간 정산 이력</strong> — 매 계약 종료 시 정산 여부.</li>\n<li><strong>3년 시효</strong> — 최종 퇴직일부터.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 반복 갱신과 계속근로기간 통산',
        summary:
          '대법원 2009다35040(대법원 선고) 영역에서 법원은 근로기간을 정하거나 그러한 형식의 근로계약을 반복하여 체결한 경우 계속근로 여부의 평가 기준과 반복 체결된 근로계약 사이의 일부 공백 기간이 있더라도 근로관계의 계속성을 인정할 수 있는지를 다툰 사례 흐름이 있습니다.',
        takeaway: '4회 이상 갱신 chain + 동일 업무는 계속근로 통산 평가 가능 영역. 전 기간 합산 차액 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '계약마다 별개 계약이라는 회사 주장 맞나요?',
        answer:
          '<strong>형식상 별개 계약이라도 동일 업무·반복 갱신·갱신 의례화가 결합되면 계속근로 통산 평가가 가능한 영역입니다.</strong>',
      },
      {
        question: '갱신 횟수가 몇 회 이상이어야 합산되나요?',
        answer:
          '<strong>법정 횟수 기준은 없으나 3~4회 이상이 평가에 유리하며 사정에 따라 2회도 가능 영역입니다.</strong>',
      },
      {
        question: '계약 사이 1~2주 공백이 있어도 합산되나요?',
        answer:
          '<strong>형식적·일시적 공백은 단절로 평가되지 않을 여지가 있는 영역으로 사정 결합이 핵심입니다.</strong>',
      },
      {
        question: '매번 4대보험 상실·재가입 처리됐는데도 합산되나요?',
        answer:
          '<strong>형식적 상실·재가입과 실질적 계속근로는 별개로 평가될 수 있는 영역입니다.</strong>',
      },
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>최종 퇴직일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '계약 공백 연결', href: '/guide/retirement/retirement-fixed-term-contract-gap-tenure-link-track' },
      { label: '재입사 계속근로', href: '/guide/retirement/retirement-rehire-continuous-service-calculation' },
      { label: '비정규직 합산', href: '/guide/retirement/retirement-non-regular-converted-merge' },
      { label: '평균임금 계산', href: '/guide/retirement/retirement-average-wage-calculation' },
      { label: '퇴직금 청구 절차', href: '/guide/retirement/retirement-payment-claim-procedure' },
    ],
  },
];
