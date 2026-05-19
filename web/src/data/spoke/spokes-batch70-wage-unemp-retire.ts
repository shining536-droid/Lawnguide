import { SpokePage } from '../spoke-pages';

// batch70 wage-unemp-retire — 5개 (2026-05-20)
//
// 고유 존재 이유:
// 1. wage-meal-transport-allowance-ordinary-wage-inclusion-track — 식대+교통비 '패키지'로 정기·일률 지급된 경우의 통상임금 포함 평가 트랙 (기존 meal-allowance-ordinary-wage-track 식대 단일·meal-ticket-card 카드형·meal-transport-suddenly-stopped 중단 트랙과 분기: 본 페이지는 통상임금 산입 결과로 연장·휴일·야간수당 차액 회복 트랙).
// 2. wage-overtime-no-prior-approval-tacit-acceptance-claim-track — 사전승인 절차 없이 사실상 묵시 수용된 연장근로 + 사후 청구 트랙 (기존 overtime-unpaid-claim 단순 미지급·overtime-consent-coercion 동의 강요 무효와 분기: 본 페이지는 '승인 없었으니 못 준다' 항변 회피 + 묵시 지시·관행 입증 결합).
// 3. unemployment-part-time-multi-employer-insured-day-aggregation-track — 두 곳 단시간 사업장 보수기초일수 합산으로 180일 충족 트랙 (기존 part-time-multiple-jobs 이중 근무 적격성·multiple-workplace-combined 사업장 합산 산정과 분기: 본 페이지는 짧은 보수일수 합산 + 이직사유 결합 평가 트랙).
// 4. retirement-taxi-alternate-day-driver-average-wage-allocation-track — 택시 격일제 운전사 평균임금 산정 시 사납금 초과 수입금 포함 + 1일 8시간 한도 다툼 트랙 (기존 alternate-day-shift-calculation 일반 격일제·night-shift-average-wage 야간 산정과 분기: 본 페이지는 택시 사납금 + 격일제 결합 트랙).
// 5. retirement-registered-director-continued-employee-status-tenure-track — 등기 임원으로 등재된 후에도 실질 근로자성 유지 + 등기 기간 근속 통산 트랙 (기존 non-registered-officer-employee-status 등기 안 한 임원·director-promotion-continuous-service 승진 통산과 분기: 본 페이지는 등기 임원 이후의 실질 종속관계 유지 + 등기 기간 근속 합산 트랙).

export const spokesBatch70WageUnempRetire: SpokePage[] = [
  // ─── 1. wage-meal-transport-allowance-ordinary-wage-inclusion-track ───
  {
    domain: 'wage',
    slug: 'wage-meal-transport-allowance-ordinary-wage-inclusion-track',
    keyword: '식대 교통비 통상임금 포함',
    questionKeyword: '월급명세서에 식대 20만원·교통비 10만원이 매달 정액 지급되는데 회사가 통상임금에서 빼고 연장수당을 적게 줘요.',
    ctaKeyword: '식대 교통비 통상임금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '식대·교통비 통상임금 포함 — 5단계 정기·일률 지급 차액 회복 정리 | 로앤가이드',
      description:
        '식대·교통비가 매달 정액 일률 지급되는데도 통상임금에서 제외돼 연장수당이 깎였다면 산입 평가 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"5년차 사무직인데 매달 급여명세서에 \'식대 20만원·교통보조비 10만원\'이 별도 항목으로 한 번도 빠짐없이 지급됐어요. 그런데 회사는 통상임금을 산정할 때 이 30만원을 빼고 기본급만으로 산정. 그러다 보니 매달 연장근로수당이 한 6~8만원 정도 적게 들어오는 것 같습니다. 동료 한 분이 \'식대·교통비도 정기 일률 지급이면 통상임금에 포함된다\'고 알려줬는데 이제 와서 차액 청구가 가능한가요?" 대법원은 ① 사용자가 근로의 대가로 정기적·일률적으로 지급하는 금품은 임금에 해당하고 ② 임금의 객관적 성질에 따라 통상임금성을 판단하며 ③ 실비 변상 명목이라 하더라도 실제 사용처와 무관하게 정액 지급된다면 임금성·통상임금성이 인정될 수 있다는 점을 시사한 영역. 식대·교통비도 정액·일률 지급이라면 통상임금 산입 평가가 가능한 트랙입니다. 대응은 ① 지급 형태 ② 통상임금 산입 ③ 노동청 진정 ④ 차액 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 식대·교통비 통상임금 포함 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 지급 형태·산입·진정·차액·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 지급 형태 평가</strong> — 정기·일률·고정 3요소 충족.</li>\n<li><strong>② 통상임금 재산정</strong> — 기본급 + 식대 + 교통비.</li>\n<li><strong>③ 노동청 임금체불 진정</strong> — 차액분 신청.</li>\n<li><strong>④ 연장·휴일·야간수당 차액 청구</strong> — 통상임금 1.5배.</li>\n<li><strong>⑤ 민사 임금 청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 식대·교통비가 실비 변상 명목이라도 영수증 없이 정액 일률 지급됐다면 통상임금 산입 평가가 가능한 영역. 연장·휴일수당이 통상임금 1.5배로 재산정돼 차액 회복이 평가될 여지가 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용노동부 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 급여명세서·근로계약서 보존 (즉시)</strong> — 식대·교통비 별도 항목 입증.</li>\n<li><strong>2단계 — 통상임금 재산정 (1~2주)</strong> — 시급·일급 환산.</li>\n<li><strong>3단계 — 노동청 임금체불 진정 (관할 지방고용노동청)</strong> — 차액 신청.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 통상임금 산입 평가.</li>\n<li><strong>5단계 — 민사 임금청구</strong> — 3년 시효, 통상임금 산입 확인 결합.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">식대·교통비 통상임금 산입 차액 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 지급·산정·근로 갈래입니다.</strong></p>\n<ul>\n<li><strong>최근 3년치 급여명세서 (식대·교통비 별도 항목 입증)</strong></li>\n<li><strong>근로계약서·취업규칙·임금규정 (지급 근거 명시)</strong></li>\n<li><strong>이체 내역 (정액 일률 지급 입증)</strong></li>\n<li><strong>출퇴근 기록·근태 자료 (연장근로시간 입증)</strong></li>\n<li><strong>회사 식대·교통비 정산 부재 자료 (영수증 불요 입증)</strong></li>\n<li><strong>동료 진술서 (전 직원 동일액 일률 지급)</strong></li>\n<li><strong>4대보험 보수월액 자료 (임금성 평가 보조)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 식대·교통비가 실제 식사·교통 비용과 무관하게 정액 지급되고 실비 정산이 없다면 임금성·통상임금성 평가에 유리. 휴직·결근 기간에도 지급됐다면 더 강력.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>실비 변상 vs 임금</strong> — 영수증 정산 여부.</li>\n<li><strong>정기·일률·고정 3요소</strong> — 전 직원 동일액 지급.</li>\n<li><strong>휴직 기간 지급 여부</strong> — 지급 시 임금성 강화.</li>\n<li><strong>통상임금 산입 효과</strong> — 연장·휴일·야간수당 영향.</li>\n<li><strong>3년 시효</strong> — 각 지급일별.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 실비 변상 명목 정액 지급의 임금성',
        summary:
          '대법원 2014다27807(대법원, 2019.04.23 선고) 영역에서 법원은 사용자가 근로자들에게 실제로 그 해당 명목으로 사용되는지를 불문하고 근무일마다 실비 변상 명목으로 일정 금액을 지급하는 경우 이를 실비 변상에 해당한다는 이유로 임금 또는 통상임금에서 제외할 수 있는지 여부를 다툰 사례 흐름이 있습니다.',
        takeaway: '식대·교통비도 정액·일률 지급이라면 임금성·통상임금성 평가 가능 영역. 연장수당 차액 회복 가능 트랙.',
      },
    ],
    faq: [
      {
        question: '식대가 비과세 항목이라 통상임금이 아니라는데요?',
        answer:
          '<strong>세법상 비과세 처리와 근로기준법상 통상임금 산입은 별개 평가 영역입니다.</strong>',
      },
      {
        question: '교통비가 영수증 정산 없이 정액 지급이면 임금인가요?',
        answer:
          '<strong>실비 정산 부재 + 정기·일률 지급은 임금성 평가에 유리한 영역입니다.</strong>',
      },
      {
        question: '회사가 \'식대는 복리후생\'이라고 주장하는데요?',
        answer:
          '<strong>명칭이 복리후생이라도 객관적 지급 형태에 따라 통상임금성이 평가되는 영역입니다.</strong>',
      },
      {
        question: '차액은 어떻게 계산되나요?',
        answer:
          '<strong>통상임금 재산정 → 연장·휴일·야간수당 1.5배·2배 재산정 → 기존 지급액과의 차액을 청구할 수 있는 영역입니다.</strong>',
      },
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>각 임금 지급일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '식대 통상임금', href: '/guide/wage/wage-meal-allowance-ordinary-wage-track' },
      { label: '식대 통상임금 산입', href: '/guide/wage/wage-meal-expense-ordinary-wage' },
      { label: '식대 카드 통상임금', href: '/guide/wage/wage-meal-ticket-card-ordinary-wage' },
      { label: '식대 교통비 중단', href: '/guide/wage/wage-meal-transport-suddenly-stopped' },
      { label: '자가운전보조 통상임금', href: '/guide/wage/wage-self-driving-allowance-ordinary-wage' },
    ],
  },

  // ─── 2. wage-overtime-no-prior-approval-tacit-acceptance-claim-track ───
  {
    domain: 'wage',
    slug: 'wage-overtime-no-prior-approval-tacit-acceptance-claim-track',
    keyword: '연장근로 사전승인 없음 사후 청구',
    questionKeyword: '매일 야근을 시키면서도 사전승인서가 없어 연장수당을 못 받는데 회사는 "승인 절차 없으면 못 준다"고 해요.',
    ctaKeyword: '연장근로 사전승인 없음 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '연장근로 사전승인 없음 — 5단계 묵시 지시·관행 사후 청구 정리 | 로앤가이드',
      description:
        '연장근로 사전승인 절차 없이 사실상 야근을 강요받고도 수당을 못 받았다면 묵시 지시 입증 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"입사 2년차 사무직인데 우리 팀은 거의 매일 저녁 8~9시까지 야근입니다. 팀장이 \'오늘 마감이니 마무리하고 가자\'고 슬랙으로 지시하거나 본인이 옆자리에서 함께 야근을 합니다. 그런데 회사 사규에 \'연장근로는 사전승인서 결재 후 가능\'이라 적혀 있고, 팀장은 결재를 올리지 않아요. 월말에 연장수당을 정산하려 보니 \'사전승인 없는 연장근로는 인정 안 된다\'며 거부. 매달 사실상 40시간 이상 야근하는데 한 푼도 못 받습니다." 대법원은 ① 사용자가 연장근로를 사전 지시·명령하지 않았더라도 ② 근로자의 연장근로를 인지·묵인하면서 이를 전제로 업무를 시켰다면 ③ 사용자의 지배·관리 아래 이루어진 근로로 평가될 수 있다는 점을 시사한 영역. 사전승인 부재만으로 연장수당이 부정되지 않는 트랙입니다. 대응은 ① 묵시 지시 입증 ② 실 근로시간 ③ 노동청 진정 ④ 수당 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 사전승인 없는 연장근로 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 묵시 지시·실 근로·진정·청구·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 묵시 지시 입증</strong> — 상사 메신저·이메일·동석 야근.</li>\n<li><strong>② 실 연장근로시간 산정</strong> — 출퇴근·메신저 발송 시각.</li>\n<li><strong>③ 노동청 임금체불 진정</strong> — 미지급 수당 신청.</li>\n<li><strong>④ 연장수당 청구</strong> — 통상임금 1.5배.</li>\n<li><strong>⑤ 민사 임금 청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사전승인 부재가 곧 연장수당 부정으로 평가되지 않는 영역. 사용자의 묵시 지시·인지·관행이 결합되면 사용자의 지배·관리 아래 이루어진 근로로 평가될 여지가 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용노동부 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 묵시 지시 자료 보존 (즉시)</strong> — 상사 메신저·이메일·회의록.</li>\n<li><strong>2단계 — 실 근로시간 산정 (1~2주)</strong> — 출퇴근 기록·메신저 발송 시각·문서 작성 시각.</li>\n<li><strong>3단계 — 노동청 임금체불 진정 (관할 지방고용노동청)</strong> — 미지급 연장수당 신청.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 묵시 지시·관행 평가.</li>\n<li><strong>5단계 — 민사 임금청구</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사전승인 없는 연장근로 사후 청구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 묵시 지시·실 근로·산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>상사 메신저·슬랙·카톡 (야근 지시·요청 입증)</strong></li>\n<li><strong>업무 이메일 발송·수신 시각 (실 종업 입증)</strong></li>\n<li><strong>출입 카드·지문 인식 기록 (출퇴근 시각)</strong></li>\n<li><strong>회사 시스템 로그·문서 작성 시각 (실근로 입증)</strong></li>\n<li><strong>업무 일지·일별 보고서</strong></li>\n<li><strong>회의록·결재 문서 (지시 사실 입증)</strong></li>\n<li><strong>동료 진술서 (상시 야근 분위기·동석 야근)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사전승인 결재가 없어도 메신저·이메일·문서 작성 시각 같은 객관적 시스템 로그는 회사에서 직접 회수 가능. 팀장 본인의 동석 야근 자료(메신저 발송·결재)는 묵시 지시 평가에 결정적.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>묵시 지시 입증</strong> — 메신저·동석 야근·관행.</li>\n<li><strong>사전승인 절차 효력</strong> — 절차 누락이 곧 부정으로 평가되지 않음.</li>\n<li><strong>실 근로시간 객관성</strong> — 시스템 로그 우선.</li>\n<li><strong>휴게시간 공제</strong> — 실질 휴게 vs 대기.</li>\n<li><strong>3년 시효</strong> — 각 임금 지급일별.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 묵시 지시·관행 하 연장근로',
        summary:
          '대법원 2017다238004(대법원, 2022.02.11 선고) 영역에서 법원은 노선수당이 근무실적에 따라 발생하는 연장근로수당·야간근로수당·휴일근로수당을 포괄한 수당이며 노선수당을 지급함에 있어 실제 근로시간과의 차이가 있더라도 노사 간 이의를 제기하지 않기로 한 임금협정의 효력을 다투며 실 연장근로 평가 기준을 제시한 사례 흐름이 있습니다.',
        takeaway: '사전승인 부재만으로 연장수당이 부정되지 않는 영역. 묵시 지시·관행·실 근로시간 결합 시 사후 청구 평가 가능 트랙.',
      },
    ],
    faq: [
      {
        question: '결재 안 올렸다고 연장수당이 자동 부정되나요?',
        answer:
          '<strong>사전승인 절차 누락만으로 곧 부정으로 평가되지 않으며 묵시 지시·관행 평가가 결합되는 영역입니다.</strong>',
      },
      {
        question: '팀장이 슬랙으로만 시켰는데 증거가 되나요?',
        answer:
          '<strong>메신저·이메일은 객관적 시간 정보가 결합돼 묵시 지시 평가에 결정적인 영역입니다.</strong>',
      },
      {
        question: '회사 시스템 로그를 어떻게 회수하나요?',
        answer:
          '<strong>본인이 보낸 메신저·이메일·작성한 문서의 시각 기록은 노동청 진정·민사 절차에서 회사에 제출 요구가 가능한 영역입니다.</strong>',
      },
      {
        question: '회사가 \'자발적 야근\'이라고 주장하면요?',
        answer:
          '<strong>업무량·마감·상사 동석·관행 정황이 결합되면 자발성 항변이 평가에서 약해지는 영역입니다.</strong>',
      },
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>각 임금 지급일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '연장근로 미지급', href: '/guide/wage/wage-overtime-unpaid-claim' },
      { label: '주 52시간 초과', href: '/guide/wage/wage-overtime-over-weekly-52' },
      { label: '연장근로 동의 강요', href: '/guide/wage/wage-overtime-consent-coercion-invalid' },
      { label: '고정 연장·실제 격차', href: '/guide/wage/wage-fixed-overtime-actual-mismatch' },
      { label: '야간연장 정확 산정', href: '/guide/wage/wage-night-overtime-exact-calculation' },
    ],
  },

  // ─── 3. unemployment-part-time-multi-employer-insured-day-aggregation-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-part-time-multi-employer-insured-day-aggregation-track',
    keyword: '단시간 두 사업장 보수일수 합산',
    questionKeyword: '주 15시간 학원 강사 + 주 10시간 카페 알바를 동시에 했는데 한 곳만 보면 180일 안 차고 두 곳 합산이 안 되는지 모르겠어요.',
    ctaKeyword: '단시간 두 사업장 보수일수 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '단시간 두 사업장 보수일수 — 5단계 피보험단위기간 합산 정리 | 로앤가이드',
      description:
        '두 곳의 단시간 사업장을 동시 근무하다 한 곳이 끝났는데 한 곳 보수일수만으로 180일에 못 미친다면 합산 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"평일 저녁 학원 강사로 주 15시간(월 18일 출근), 주말 카페 알바로 주 10시간(월 8일 출근) 두 곳을 동시에 8개월 다녔어요. 학원이 폐원하면서 일을 잃었는데 고용센터에 가니 \'학원만 보면 보수기초일수가 144일 정도라 180일에 못 미친다\'며 수급자격 부정 안내를 들었습니다. 그런데 카페에서도 4대보험 가입돼 있고 보수일수가 64일 정도 더 있어요. 두 곳 합산이 안 되는 건가요?" 고용보험 안내는 ① 단시간 근로자도 4대보험 가입돼 있다면 피보험단위기간에 산입될 수 있고 ② 둘 이상의 사업장에서 동시에 피보험자격을 취득한 경우 각 사업장의 보수기초일수가 합산 산정될 수 있으며 ③ 실 근로일수와 별개로 \'유급으로 처리된 일\' 기준으로 계산된다는 점을 시사한 영역. 한 사업장 종료 + 다른 사업장 유지 사정에 따라 합산 평가가 가능한 트랙입니다. 대응은 ① 피보험 이력 ② 합산 산정 ③ 신청 ④ 부지급 시 이의 ⑤ 행정소송 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 두 사업장 보수일수 합산 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 피보험·합산·신청·이의·소송 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 피보험자격 이력 확인</strong> — 고용보험 가입·상실일자.</li>\n<li><strong>② 보수기초일수 합산</strong> — 각 사업장 유급 일수.</li>\n<li><strong>③ 수급자격 인정 신청</strong> — 고용센터.</li>\n<li><strong>④ 부지급 시 이의신청 (90일 내)</strong> — 고용보험심사관.</li>\n<li><strong>⑤ 심사위·행정소송</strong> — 단계적 회복.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 두 곳에서 동시에 피보험자격을 취득했다면 각 사업장 보수기초일수가 합산 산정될 수 있는 영역. 한 곳만으로 180일이 부족해도 합산 평가가 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신청 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용센터 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 피보험 이력 조회 (즉시)</strong> — 근로복지공단·고용보험 EDI.</li>\n<li><strong>2단계 — 보수기초일수 합산 (1주)</strong> — 두 사업장 유급일수 합.</li>\n<li><strong>3단계 — 수급자격 인정 신청 (이직 후 12개월 내)</strong> — 고용센터.</li>\n<li><strong>4단계 — 부지급 처분 시 이의신청 (90일 내)</strong> — 고용보험심사관.</li>\n<li><strong>5단계 — 심사위·재심사·행정소송</strong> — 단계적 진행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">두 단시간 사업장 보수일수 합산 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 피보험·근로·이직 갈래입니다.</strong></p>\n<ul>\n<li><strong>고용보험 피보험자격 이력내역서 (양 사업장 동시 가입 입증)</strong></li>\n<li><strong>양 사업장 근로계약서·임명장 (주당 근로시간 입증)</strong></li>\n<li><strong>양 사업장 급여명세서·이체 내역</strong></li>\n<li><strong>이직확인서 (종료 사업장)</strong></li>\n<li><strong>출근부·강의시간표·근태 자료</strong></li>\n<li><strong>잔존 사업장 재직 증명 (단독 수급 자격 부정 평가 대비)</strong></li>\n<li><strong>구직활동 자료 (실업인정 대비)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 잔존 사업장 근로시간이 짧아 실업 상태로 평가되는지 별도 검토. 주 15시간 미만이면 잔존 근로 중에도 구직급여 수급이 평가될 여지 있는 영역. 고용센터 사전 상담으로 확인.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>동시 피보험 인정</strong> — 양 사업장 가입 입증.</li>\n<li><strong>보수기초일수 산정</strong> — 유급 처리된 일 기준.</li>\n<li><strong>잔존 근로 실업 평가</strong> — 주 15시간 기준.</li>\n<li><strong>이직 사유 평가</strong> — 종료 사업장 비자발성.</li>\n<li><strong>신청 12개월 시효</strong> — 이직일 기준.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 고객센터 1350</strong></li>\n<li><strong>고용보험 1577-7114</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 단시간 근로 보수일수 산입 평가',
        summary:
          '고용보험심사위원회 2019재결 제103호(고용보험심사위원회, 2019.09.10) 영역에서 위원회는 예술강사의 경우 수업일지를 작성한 날을 보수기초일수 산정에 포함하여야 한다고 판단하여 단시간 근로 형태의 보수기초일수 산입 기준을 제시한 사례 흐름이 있습니다.',
        takeaway: '단시간 근로의 보수기초일수도 유급 처리된 일 기준 산입 평가 영역. 양 사업장 합산 평가 가능 트랙.',
      },
    ],
    faq: [
      {
        question: '두 곳 모두 4대보험 가입이어야 합산되나요?',
        answer:
          '<strong>양 사업장 피보험자격 동시 취득이 합산 평가의 기본 요건입니다. 미가입 사업장은 별도 가입 신고 절차가 결합되는 영역입니다.</strong>',
      },
      {
        question: '한 곳은 알바, 한 곳은 정직원이어도 합산되나요?',
        answer:
          '<strong>고용 형태가 달라도 양 사업장 피보험자격이 있으면 합산 평가가 가능한 영역입니다.</strong>',
      },
      {
        question: '잔존 사업장에서 계속 일하면서 받을 수 있나요?',
        answer:
          '<strong>잔존 근로시간이 단시간(주 15시간 미만)이면 실업 상태로 평가될 여지가 있는 영역입니다.</strong>',
      },
      {
        question: '단시간 근로의 보수일수 산정은 어떻게 되나요?',
        answer:
          '<strong>유급 처리된 일 기준이며 단시간이라도 출근한 날이 1일로 산입될 수 있는 영역입니다.</strong>',
      },
      {
        question: '신청 시효는 언제까지인가요?',
        answer:
          '<strong>이직일로부터 12개월 이내 신청해야 합니다.</strong>',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '180일 산정', href: '/guide/unemployment/unemployment-180days-insurance-period-calc' },
      { label: '180일 함정', href: '/guide/unemployment/unemployment-180days-trap-long-leave' },
      { label: '복수사업장 합산', href: '/guide/unemployment/unemployment-multiple-workplace-combined' },
      { label: '단시간 미신고', href: '/guide/unemployment/unemployment-short-part-time-unreport-rescue' },
      { label: '단시간 이중근로', href: '/guide/unemployment/unemployment-part-time-dual-job-combined-benefit' },
    ],
  },

  // ─── 4. retirement-taxi-alternate-day-driver-average-wage-allocation-track ───
  {
    domain: 'retirement',
    slug: 'retirement-taxi-alternate-day-driver-average-wage-allocation-track',
    keyword: '택시 격일제 운전사 평균임금',
    questionKeyword: '택시 운전사로 격일제 근무 7년인데 회사가 사납금 초과수입을 빼고 기본급만으로 평균임금을 계산해 퇴직금이 적게 나왔어요.',
    ctaKeyword: '택시 격일제 평균임금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '택시 격일제 평균임금 — 5단계 사납금 초과수입 산입 차액 정리 | 로앤가이드',
      description:
        '택시 운전사 격일제 근무 후 사납금 초과수입이 빠진 평균임금으로 퇴직금이 산정됐다면 산입 평가 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"택시회사에 7년 근무한 운전사예요. 1일 12시간 격일제로 일했고, 매일 회사가 정한 사납금(약 14만원)을 납부한 뒤 남는 수입은 제 개인 수익으로 처리됐어요. 한 달 평균 사납금 초과수입이 약 80만원, 기본급은 약 150만원 정도였습니다. 그런데 회사가 퇴직금을 계산할 때 \'사납금 초과수입은 회사가 관리하지 않으니 평균임금에 안 들어간다\'며 기본급만으로 산정해 약 1,050만원을 지급. 동료는 \'사납금 초과수입도 임금이라 평균임금에 포함돼 한 1,500만원은 나와야 한다\'고 합니다." 대법원은 ① 운송회사의 운전사들이 운송수입금 중 사납금을 공제한 잔액을 운전사 개인의 수입으로 하여 온 경우 ② 그 사납금 초과수입금이 임금에 해당하고 ③ 퇴직금 산정의 기초가 되는 평균임금에 포함될 수 있다는 점을 시사한 영역. 격일제 + 사납금 결합 구조에서도 평균임금 산입 평가가 가능한 트랙입니다. 대응은 ① 사납금 구조 ② 평균임금 재산정 ③ 노동청 진정 ④ 차액 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 택시 격일제 평균임금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사납금·재산정·진정·차액·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사납금 + 초과수입 구조 입증</strong> — 운송수입 관리 형태.</li>\n<li><strong>② 평균임금 재산정</strong> — 기본급 + 사납금 초과수입.</li>\n<li><strong>③ 노동청 임금체불 진정</strong> — 미산입 차액 신청.</li>\n<li><strong>④ 퇴직금 차액 청구</strong> — 14일 내 미지급 시.</li>\n<li><strong>⑤ 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 격일제 + 사납금 구조에서도 사용자가 관리·지배 가능한 범위라면 사납금 초과수입이 평균임금에 산입될 수 있는 영역. 기본급만 산정한 퇴직금은 차액 회복 평가 가능 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용노동부 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 운송수입·사납금 자료 보존 (즉시)</strong> — 일일운행일보·사납금 영수증·계기판 사진.</li>\n<li><strong>2단계 — 평균임금 재산정 (1~2주)</strong> — 퇴직 전 3개월 총수입 기준.</li>\n<li><strong>3단계 — 노동청 임금체불 진정 (관할 지방고용노동청)</strong> — 차액 신청.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 평균임금 산입 평가.</li>\n<li><strong>5단계 — 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">택시 격일제 평균임금 산입 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사납금·근로·산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>최근 3개월 일일운행일보·운송수입 기록</strong></li>\n<li><strong>사납금 납부 영수증·이체 내역</strong></li>\n<li><strong>근로계약서·임금협정 (사납금·초과수입 처리)</strong></li>\n<li><strong>택시미터기·계기판 운행 기록</strong></li>\n<li><strong>임금협정 일근수입금·체불수당 산정 기준</strong></li>\n<li><strong>회사 보고 양식 (운송수입 회사 인지 입증)</strong></li>\n<li><strong>4대보험 가입·평균보수월액 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사납금 초과수입을 회사에 매일 보고했거나 회사 양식으로 기록했다면 \'관리·지배 가능\' 평가에 결정적. 미터기 기록도 회사가 보유한 객관 자료. 영업용 택시 GPS 운행 기록도 활용 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사용자 관리·지배 가능성</strong> — 보고 양식·미터기 회사 관리.</li>\n<li><strong>사납금 초과수입 임금성</strong> — 근로의 대가 평가.</li>\n<li><strong>의도적 증액 평가</strong> — 퇴직 직전 비정상 증가 시 별도 산정.</li>\n<li><strong>최저임금 + 평균임금 결합</strong> — 최저임금 미달 시 별도 트랙.</li>\n<li><strong>3년 시효</strong> — 퇴직일부터.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사납금 초과수입의 평균임금 산입',
        summary:
          '대법원 2005다25113(대법원, 2007.07.12 선고) 영역에서 법원은 운송회사의 운전사들이 운송수입금 중 사납금을 공제한 잔액을 운전사 개인의 수입으로 하여 온 경우 그 사납금 초과 수입금이 임금에 해당하는지 여부와 퇴직금 산정의 기초가 되는 평균임금에 포함되는지를 다투며 사용자의 관리·지배 가능성을 기준으로 평가한 사례 흐름이 있습니다.',
        takeaway: '격일제 택시 운전사의 사납금 초과수입도 사용자 관리 가능 범위라면 평균임금 산입 평가 가능 영역. 퇴직금 차액 회복 가능 트랙.',
      },
    ],
    faq: [
      {
        question: '사납금 초과수입은 제 개인 수익인데 어떻게 임금인가요?',
        answer:
          '<strong>사용자가 운송수입을 관리·지배 가능한 범위라면 임금성 평가가 가능한 영역입니다.</strong>',
      },
      {
        question: '퇴직 직전에 일부러 많이 벌면 그대로 산입되나요?',
        answer:
          '<strong>의도적 증액 정황이 있으면 별도 산정 기준이 적용될 수 있는 영역으로 통상적 수준의 산정이 평가됩니다.</strong>',
      },
      {
        question: '회사가 \'사납금 외 수입은 운전사 자유\'라고 약정했는데요?',
        answer:
          '<strong>약정과 실제 관리 형태가 다르면 실질을 기준으로 평가되는 영역입니다.</strong>',
      },
      {
        question: '격일제 근무 형태가 평균임금에 영향이 있나요?',
        answer:
          '<strong>격일제도 평균임금 산정 기간은 동일하게 3개월이며 1일 8시간 한도와 결합돼 평가되는 영역입니다.</strong>',
      },
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>퇴직일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '격일제 산정', href: '/guide/retirement/retirement-alternate-day-shift-calculation' },
      { label: '평균임금 분쟁', href: '/guide/retirement/retirement-average-wage-dispute' },
      { label: '야간 평균임금', href: '/guide/retirement/retirement-night-shift-average-wage' },
      { label: '복수사용자 산정', href: '/guide/retirement/retirement-multiple-employer-calculation' },
      { label: '교대수당 산입', href: '/guide/retirement/retirement-rotation-shift-allowance-included-track' },
    ],
  },

  // ─── 5. retirement-registered-director-continued-employee-status-tenure-track ───
  {
    domain: 'retirement',
    slug: 'retirement-registered-director-continued-employee-status-tenure-track',
    keyword: '등기 이사 근로자성 유지',
    questionKeyword: '직원으로 12년 일하다 등기 이사로 등재됐는데 퇴직 시 등기 후 3년은 근로자가 아니라며 퇴직금에서 빠졌어요.',
    ctaKeyword: '등기 이사 근로자성 유지 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '등기 이사 근로자성 유지 — 5단계 등기 기간 근속 통산 정리 | 로앤가이드',
      description:
        '등기 이사 등재 이후에도 실질 근로자성이 유지됐다면 등기 기간을 포함한 근속 통산 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중견 제조회사에 평사원으로 입사해 12년 근무 후 \'영업본부장(등기이사)\'으로 승진했어요. 명함과 등기부에는 이사로 올라갔지만 실제로는 출퇴근·연차 결재·상사 보고가 그대로였고, 월급도 기존 임금테이블 + 직책수당 형태였습니다. 3년 더 일한 뒤 회사 사정으로 퇴사했는데 회사가 \'등기 이사 등재일 기준으로 근로자성 상실, 직전 12년치만 퇴직금 산정\' 안내. 등기 후 3년치가 빠져 약 1,800만원이 적습니다. 등기 임원이라도 실질이 직원이면 인정되지 않나요?" 대법원은 ① 회사의 이사·임원이 근로기준법상 근로자에 해당하는지는 ② 명칭·등기 여부가 아니라 ③ 임금을 목적으로 종속적인 관계에서 사용자에게 근로를 제공했는지의 실질로 판단된다는 점을 시사한 영역. 등기 임원으로 등재된 후에도 실질 종속관계 + 임금 형태 지급이 결합되면 근로자성 유지 평가가 가능한 트랙입니다. 대응은 ① 실질 종속성 ② 등기 기간 근속 ③ 노동청 진정 ④ 차액 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 등기 이사 근로자성 유지 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 실질·근속·진정·차액·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 실질 종속관계 입증</strong> — 출퇴근·결재·지휘.</li>\n<li><strong>② 등기 기간 근속 통산</strong> — 전 입사일~퇴사일.</li>\n<li><strong>③ 노동청 임금체불 진정</strong> — 미지급 퇴직금 차액.</li>\n<li><strong>④ 퇴직금 차액 청구</strong> — 통산 근속 × 1개월.</li>\n<li><strong>⑤ 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 등기 임원 등재는 형식 평가일 뿐 실질 종속관계 + 임금성 지급이 결합되면 근로자성 유지 평가가 가능한 영역. 등기 기간을 근속에 통산해 차액 회복이 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·통산·진정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 실질 종속성 자료 보존 (즉시)</strong> — 출퇴근·결재·지휘 관련 자료.</li>\n<li><strong>2단계 — 등기 기간 임금·업무 자료 (1~2주)</strong> — 급여명세서·업무 분장.</li>\n<li><strong>3단계 — 노동청 임금체불 진정 (관할 지방고용노동청)</strong> — 차액 신청.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 근로자성 평가.</li>\n<li><strong>5단계 — 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">등기 이사 등재 후 근로자성 유지 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 실질·임금·통산 갈래입니다.</strong></p>\n<ul>\n<li><strong>등기부등본 (이사 등재일 입증)</strong></li>\n<li><strong>입사 시부터 최종 퇴직일까지 급여명세서·이체 내역</strong></li>\n<li><strong>출퇴근 카드·근태 기록 (등기 기간 포함)</strong></li>\n<li><strong>연차·휴가 결재 문서 (지휘·복종 관계 입증)</strong></li>\n<li><strong>업무 분장표·결재 라인 (상사·하급자 관계)</strong></li>\n<li><strong>이사회 의사록·주주총회 결의서 (보수 결정 절차 부재 입증)</strong></li>\n<li><strong>4대보험 가입 이력 (근로자성 보조 자료)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 등기 임원이라도 본인 위에 \'결재 받을 상사\'가 존재하고 출퇴근·연차가 직원과 동일하게 관리됐다면 종속관계 평가에 결정적. 이사 보수가 주주총회 결의 없이 일반 임금테이블로 지급됐다면 보조 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>지휘·감독 관계</strong> — 상사 결재·복종 의무.</li>\n<li><strong>업무 자율성</strong> — 이사 고유 권한 행사 vs 임원직 명목.</li>\n<li><strong>보수 결정 절차</strong> — 주주총회·이사회 결의 vs 일반 임금.</li>\n<li><strong>4대보험·세제</strong> — 직장가입자 유지 여부.</li>\n<li><strong>등기 기간 통산</strong> — 전 입사일~퇴사일.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임원의 근로자성 판단 기준',
        summary:
          '대법원 2010다57459(대법원, 2013.06.27 선고) 영역에서 법원은 회사의 이사 등 임원이 근로기준법상 근로자에 해당하는지 판단하는 기준을 제시하며 실질적으로 임금을 목적으로 종속적인 관계에서 사용자에게 근로를 제공하는 경우 근로기준법상 근로자에 해당한다고 본 사례 흐름이 있습니다.',
        takeaway: '등기 임원 등재 후에도 실질 종속관계 + 임금성 결합 시 근로자성 유지 평가 가능 영역. 등기 기간 근속 통산 회복 가능 트랙.',
      },
    ],
    faq: [
      {
        question: '등기부에 이사로 올라가면 자동으로 근로자가 아닌가요?',
        answer:
          '<strong>등기 여부는 형식 평가일 뿐 실질 종속관계·임금성이 결합되면 근로자성이 유지되는 영역입니다.</strong>',
      },
      {
        question: '이사 보수도 주주총회 결의를 거치지 않았다면요?',
        answer:
          '<strong>상법상 보수 결정 절차 부재는 이사 보수가 아닌 임금성 지급으로 평가될 보조 자료입니다.</strong>',
      },
      {
        question: '등기 후에도 위에 사장·회장이 있어 결재받았는데요?',
        answer:
          '<strong>본인 위에 결재 라인이 존재하고 지휘·감독이 유지됐다면 종속관계 평가에 결정적입니다.</strong>',
      },
      {
        question: '4대보험을 직장가입자로 계속 유지했다면 도움이 되나요?',
        answer:
          '<strong>4대보험 직장가입자 유지는 근로자성 평가에 유리한 보조 자료가 되는 영역입니다.</strong>',
      },
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>퇴직일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '등기 안 한 임원', href: '/guide/retirement/retirement-non-registered-officer-employee-status' },
      { label: '임원 vs 직원 분쟁', href: '/guide/retirement/retirement-officer-vs-employee-dispute-back' },
      { label: '임원 승진 통산', href: '/guide/retirement/retirement-director-promotion-continuous-service' },
      { label: '임원 1년 청구', href: '/guide/retirement/retirement-short-term-executive-1year-claim' },
      { label: '임원 상한 초과', href: '/guide/retirement/retirement-executive-severance-limit' },
    ],
  },
];
