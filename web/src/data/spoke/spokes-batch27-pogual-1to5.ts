import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 2026년 4월 포괄임금 오남용 방지 지침 시행 기반 심화 스포크 5개
//
// 1. wage-pogual-anon-report-how
//    이 페이지는 [재직 중 포괄임금 피해를 입은 근로자]의 [보복이 두려워 신고를 망설이는 상황]에서
//    [익명신고센터 활용 방법과 신고 후 보호 절차]를 돕는 페이지다.
//
// 2. wage-pogual-retired-backpay
//    이 페이지는 [포괄임금제 사업장을 이미 퇴직한 근로자]의 [퇴직 후 차액을 받을 수 있는지 모르는 상황]에서
//    [3년 소멸시효 내 소급 청구 절차]를 돕는 페이지다.
//
// 3. wage-pogual-minimum-wage-test
//    이 페이지는 [최저임금선에 가까운 급여를 받는 근로자]의 [포괄임금이 최저임금에 미달하는지 의심되는 상황]에서
//    [시급 역산 공식으로 자가진단하는 방법]을 돕는 페이지다.
//
// 4. wage-pogual-inspection-prepare
//    이 페이지는 [포괄임금 의심 사업장에 재직 중인 근로자]의 [하반기 기획감독 시행 전 준비하는 상황]에서
//    [감독 시 진술 방법과 증거 확보 요령]을 돕는 페이지다.
//
// 5. wage-pogual-contract-renegotiation
//    이 페이지는 [연봉 재계약을 앞둔 근로자]의 [기존 포괄임금 약정을 변경하고 싶은 상황]에서
//    [계약서 수정 요청 방법과 거부 시 대응]을 돕는 페이지다.
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch27Pogual_1to5: SpokePage[] = [
  // ───────────────────────────────────────────
  // 1. wage-pogual-anon-report-how
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'wage-pogual-anon-report-how',
    keyword: '포괄임금 익명신고센터 신고 방법',
    questionKeyword: '포괄임금 피해인데 회사에 알려지지 않게 신고할 수 있나요?',
    ctaKeyword: '포괄임금 익명신고 절차 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '포괄임금 익명신고센터 활용법 3단계 절차 | 로앤가이드',
      description:
        '포괄임금 피해를 받고 있지만 보복이 두렵다면, 2026년 4월 신설된 익명신고센터를 활용하세요. 신고 절차 3단계를 지금 확인하세요.',
    },
    intro:
      '<p>매달 야근이 40시간이 넘는데 추가 수당은 0원입니다. 신고하고 싶지만 재직 중이라 회사에 알려질까 봐 망설이고 있습니다. 2026년 4월 9일, 고용노동부가 \'포괄임금·고정OT 오남용 익명신고센터\'를 신설했습니다. 실명 노출 없이 신고할 수 있는 절차를 확인해보세요.</p>',
    timelineSteps: [
      '1단계: 익명신고센터 접수 경로 확인',
      '2단계: 신고 내용 작성 및 증거 첨부',
      '3단계: 신고 후 보호 절차와 후속 조치',
    ],
    sections: [
      {
        title: '익명신고센터란? 2026년 4월 신설 배경',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부는 2026년 4월 9일 포괄임금 오남용 방지 지도 지침 시행과 함께 익명신고센터를 개설했습니다.</strong></p>\n<p>이 센터의 핵심 특징은 다음 3가지입니다.</p>\n<ol>\n<li><strong>실명 비공개</strong> — 신고자의 인적사항이 사업주에게 전달되지 않습니다.</li>\n<li><strong>수시 감독 대상 등록</strong> — 익명 신고가 접수된 사업장은 포괄임금 오남용 의심사업장으로 등록되어 수시 감독 및 하반기 기획감독 대상에 포함됩니다.</li>\n<li><strong>집단 피해 조사 가능</strong> — 한 사업장에 대해 복수의 신고가 접수되면 전체 근로자를 대상으로 조사할 수 있습니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 재직 중 보복이 두려운 근로자를 위한 제도입니다. 신고 후 불이익이 발생하면 부당해고·불이익처우로 추가 구제신청이 가능합니다.</blockquote>',
      },
      {
        title: '익명신고 3단계 절차',
        content:
          '<p><strong style="color:#1e3a5f">신고는 온라인으로 간편하게 접수할 수 있습니다.</strong></p>\n<ol>\n<li><strong>고용노동부 민원마당 또는 고객상담센터(1350) 접속</strong><br/>온라인 민원마당에서 \'포괄임금 익명신고\'를 선택하거나, 전화로 1350에 \'포괄임금 익명신고\'를 요청합니다. 사업장명, 소재지, 근로자 수 등 기본 정보를 입력합니다.</li>\n<li><strong>신고 내용 작성</strong><br/>포괄임금 약정 내용(기본급과 수당이 구분되지 않는 점, 고정OT 약정액보다 실제 초과근로가 많은 점 등)을 구체적으로 기술합니다. 근로계약서 사본, 급여명세서, 출퇴근 기록 등 증거자료가 있으면 첨부합니다.</li>\n<li><strong>접수 확인 및 후속 조치 대기</strong><br/>접수 후 해당 사업장은 오남용 의심사업장으로 등록됩니다. 수시 감독이 진행되며, 하반기 기획감독 대상에 포함될 수 있습니다. 신고자에게는 처리 결과가 통보됩니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>내 상황에 익명신고가 적합한지 AI가 분석해드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">신고 전 차액 규모와 증거 충분도를 무료로 확인하세요.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '신고 전 준비해야 할 증거 목록',
        content:
          '<p><strong style="color:#1e3a5f">익명신고라도 구체적인 증거가 있으면 감독 효과가 크게 높아집니다.</strong></p>\n<ul>\n<li><strong>근로계약서 사본</strong> — 포괄임금 약정 조항이 기재된 부분을 캡처합니다.</li>\n<li><strong>급여명세서 또는 통장 입금내역</strong> — 기본급과 수당이 구분되지 않은 점을 보여주는 자료입니다.</li>\n<li><strong>출퇴근 기록</strong> — 출입카드 기록, PC 로그온·오프 시간, 카카오톡 업무 지시 시간 등 실제 근로시간을 입증하는 자료입니다.</li>\n<li><strong>동료 근로자 진술</strong> — 같은 사업장의 다른 근로자가 동일한 피해를 겪고 있다면 추가 신고가 효과적입니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 증거가 부족해도 익명신고 자체는 접수됩니다. 감독관이 사업장 조사 시 사용자 측 기록을 직접 확인합니다.</blockquote>',
      },
      {
        title: '신고 후 보복이 걱정된다면',
        content:
          '<p><strong style="color:#1e3a5f">임금체불 신고를 이유로 한 불이익 처우는 형사처벌 대상입니다.</strong></p>\n<ul>\n<li><strong>근로기준법 제109조</strong> — 임금체불 신고를 이유로 해고하거나 불이익을 주면 5년 이하의 징역 또는 5천만원 이하의 벌금에 처합니다.</li>\n<li><strong>부당해고 구제신청</strong> — 불이익이 발생하면 노동위원회에 부당해고 구제신청을 할 수 있습니다(해고일로부터 3개월 이내).</li>\n<li><strong>공익신고자 보호법</strong> — 포괄임금 오남용 신고는 공익신고에 해당하여 국민권익위원회의 보호를 받을 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금 진정 시 올바른 신고 방법의 중요성',
        summary:
          '경기지방노동위원회 2022년 결정에서, 근로자가 포괄임금제로 인해 실제 근로한 것보다 임금을 덜 받았다며 구제신청을 하였으나, 구체적인 근로계약 체결 당시의 근로조건을 입증하지 못해 기각된 사례가 있습니다. 근로자는 "포괄임금제로 해서 일한 것보다 돈을 덜 받았다"고 주장했지만, 관할 지방노동관서도 법위반 없음으로 종결했습니다.',
        takeaway:
          '비슷한 상황이라면 신고 전 근로계약서, 급여명세서, 출퇴근 기록 등 구체적인 증거를 확보하는 것이 핵심입니다. 익명신고센터를 활용하더라도 증거가 구체적일수록 감독 효과가 높아집니다.',
      },
    ],
    faq: [
      {
        question: '익명신고센터에 신고하면 정말 회사에 제 이름이 안 알려지나요?',
        answer:
          '<p>네, 고용노동부 익명신고센터는 신고자의 인적사항을 사업주에게 공개하지 않습니다. 사업장 조사 시에도 "익명 신고에 의한 감독"으로만 통보됩니다.</p>',
      },
      {
        question: '증거가 하나도 없어도 익명신고할 수 있나요?',
        answer:
          '<p>접수 자체는 가능합니다. 다만 사업장명, 소재지, 포괄임금 운영 방식 등 최소한의 정보는 필요합니다. 감독관이 현장 조사 시 사업장의 임금대장, 근로계약서, 출퇴근 기록 등을 직접 확인합니다.</p>',
      },
      {
        question: '익명신고 후 기획감독까지 얼마나 걸리나요?',
        answer:
          '<p>신고 접수 후 수시 감독은 비교적 빠르게(수 주 내) 진행될 수 있습니다. 하반기 기획감독은 하반기 일정에 맞춰 대상 사업장이 선정되므로 수개월이 걸릴 수 있습니다.</p>',
      },
      {
        question: '동료들과 함께 신고하면 효과가 더 있나요?',
        answer:
          '<p>같은 사업장에 대해 복수의 신고가 접수되면 집단 피해로 분류되어 전체 근로자를 대상으로 하는 광범위한 조사가 진행될 가능성이 높아집니다. 개별 신고도 효과가 있지만, 복수 신고 시 우선 감독 대상으로 선정될 수 있습니다.</p>',
      },
      {
        question: '이미 1350에 진정을 넣었는데 익명신고센터에도 따로 신고해야 하나요?',
        answer:
          '<p>1350 진정은 신고자 실명이 사업주에게 통보될 수 있습니다. 익명을 원한다면 별도로 익명신고센터를 이용하는 것이 좋습니다. 두 채널을 동시에 활용하는 것도 가능합니다.</p>',
      },
    ],
    cta: { text: '내 포괄임금 피해 익명신고 가능 여부 AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '임금체불 가이드', href: '/guide/wage' },
      { label: '2026 포괄임금 지침 체크리스트', href: '/guide/wage/wage-pogual-2026-guideline-checklist' },
      { label: '포괄임금 근무시간 미기록 신고', href: '/guide/wage/wage-pogual-no-timesheet-report' },
      { label: '임금체불 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
    ],
  },

  // ───────────────────────────────────────────
  // 2. wage-pogual-retired-backpay
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'wage-pogual-retired-backpay',
    keyword: '퇴직 후 포괄임금 차액 소급 청구',
    questionKeyword: '퇴직했는데 포괄임금 차액을 지금이라도 받을 수 있나요?',
    ctaKeyword: '퇴직자 포괄임금 차액 청구 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '퇴직 후 포괄임금 차액 소급 청구 5단계 절차 | 로앤가이드',
      description:
        '포괄임금제 회사를 퇴직했다면 3년 이내 미지급 수당 차액을 소급 청구할 수 있습니다. 내용증명부터 소송까지 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>3년 동안 매일 야근했지만 추가 수당은 한 번도 못 받았습니다. 이미 퇴직했는데 지금이라도 차액을 받을 수 있을까요? 임금 청구권 소멸시효는 퇴직일로부터 3년입니다. 퇴직한 지 3년이 넘지 않았다면 포괄임금 약정에 따른 차액을 소급 청구할 수 있습니다.</p>',
    timelineSteps: [
      '1단계: 소멸시효 기한 계산',
      '2단계: 실제 근로시간 대비 미지급 수당 차액 산정',
      '3단계: 회사에 내용증명 발송',
      '4단계: 고용노동청 임금체불 진정 접수',
      '5단계: 소액사건심판 또는 민사소송 제기',
    ],
    sections: [
      {
        title: '퇴직 후에도 포괄임금 차액을 받을 수 있는 이유',
        content:
          '<p><strong style="color:#1e3a5f">포괄임금 약정이 있더라도 법정수당보다 적게 받았다면 그 차액은 퇴직 후에도 청구할 수 있습니다.</strong></p>\n<p>핵심 원리는 다음과 같습니다.</p>\n<ol>\n<li><strong>포괄임금 약정의 한계</strong> — 포괄임금 계약을 체결했더라도 실제 연장·야간·휴일 근로시간에 따른 법정수당이 약정액보다 많으면, 그 미달 부분은 근로자에게 불이익하여 무효입니다.</li>\n<li><strong>소멸시효 3년</strong> — 근로기준법 제49조에 따라 임금채권은 3년간 행사하지 않으면 시효로 소멸합니다. 기산점은 각 임금의 정기 지급일이므로, 퇴직 후 3년이 아니라 각 월급의 지급일로부터 3년입니다.</li>\n<li><strong>퇴직금 포함 약정도 무효</strong> — 월급에 퇴직금을 나눠 포함시킨 약정은 근로기준법에 반하여 무효이며, 퇴직 시 별도로 전액 청구가 가능합니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 퇴직일이 아니라 각 월급 지급일이 시효 기산점입니다. 3년 전 월급분부터 순서대로 시효가 도래하므로 빠른 행동이 중요합니다.</blockquote>',
      },
      {
        title: '차액 산정 방법 — 실제 사례로 계산',
        content:
          '<p><strong style="color:#1e3a5f">포괄임금 약정액과 실제 법정수당의 차이를 계산합니다.</strong></p>\n<p>계산 예시를 보겠습니다.</p>\n<ul>\n<li><strong>월급 300만원(포괄임금)</strong>, 기본급과 수당 구분 없음</li>\n<li><strong>실제 월 평균 연장근로 40시간</strong> (주당 10시간 × 4주)</li>\n<li><strong>통상시급 약 15,000원</strong>으로 산정 시, 연장근로수당 = 15,000원 × 1.5 × 40시간 = 90만원</li>\n<li>포괄임금에서 기본급(209시간 × 15,000원 = 313만원)을 빼면 수당 해당분이 0원 이하</li>\n<li><strong>월 차액 최소 90만원</strong> × 36개월(3년) = 약 3,240만원 청구 가능</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>내 포괄임금 차액, AI가 즉시 계산해드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">퇴직일, 월급, 평균 야근시간만 입력하면 소급 청구 가능 금액을 무료로 확인하세요.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '내용증명 발송부터 소송까지 절차',
        content:
          '<p><strong style="color:#1e3a5f">퇴직 후 차액 청구는 내용증명 → 진정 → 소송 순서로 진행합니다.</strong></p>\n<ol>\n<li><strong>내용증명 발송</strong> — 회사에 미지급 수당 차액의 구체적 금액과 지급 기한(보통 14일)을 서면으로 통보합니다. 우체국 내용증명 서비스를 이용하면 법적 효력이 있는 증거가 됩니다.</li>\n<li><strong>고용노동청 임금체불 진정</strong> — 기한 내 응답이 없거나 거부하면 사업장 관할 고용노동청에 진정을 접수합니다. 퇴직 후에도 진정이 가능합니다.</li>\n<li><strong>소액사건심판</strong> — 청구 금액이 3,000만원 이하이면 소액사건심판으로 1회 변론으로 판결을 받을 수 있습니다. 변호사 없이도 진행 가능합니다.</li>\n<li><strong>민사소송</strong> — 3,000만원을 초과하면 일반 민사소송을 제기합니다.</li>\n</ol>',
      },
      {
        title: '퇴직자가 흔히 놓치는 3가지',
        content:
          '<p><strong style="color:#1e3a5f">퇴직 후 차액 청구 시 자주 하는 실수를 정리합니다.</strong></p>\n<ul>\n<li><strong>시효 계산 오류</strong> — "퇴직한 지 3년"이 아니라 "각 임금 지급일로부터 3년"입니다. 지금 행동하지 않으면 매달 시효가 만료되는 임금이 늘어납니다.</li>\n<li><strong>증거 미확보</strong> — 퇴직 후에는 출퇴근 기록에 접근하기 어렵습니다. 퇴직 전에 PC 로그, 카카오톡 업무 지시 내역, 야근 식대 영수증 등을 가능한 한 저장해두세요.</li>\n<li><strong>퇴직금 재계산 누락</strong> — 포괄임금으로 인해 통상임금이 과소 산정되었다면 퇴직금도 재계산하여 차액을 추가로 청구할 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금에 퇴직금 포함시킨 약정은 무효',
        summary:
          '서울지법 96나13575 사건(서울지법, 1996.08.28 선고)에서 법원은 취업규칙에 매월 지급하는 임금에 퇴직금도 포함된 것이라는 취지로 규정하였다면, 이는 근로자가 퇴직 이전에 퇴직금을 미리 지급받는 결과가 되어 근로기준법 제28조의 입법 취지에 반하므로 그 효력을 인정할 수 없다고 판시했습니다.',
        takeaway:
          '비슷한 상황이라면 월급에 퇴직금이 포함된다는 약정이 있더라도 퇴직 시 별도로 퇴직금 전액을 청구할 수 있습니다. 이미 퇴직했다면 퇴직금과 미지급 수당 차액을 함께 청구하는 것이 유리합니다.',
      },
    ],
    faq: [
      {
        question: '퇴직한 지 2년이 넘었는데 아직 청구할 수 있나요?',
        answer:
          '<p>네, 가능합니다. 소멸시효는 퇴직일이 아니라 각 임금의 정기 지급일로부터 3년입니다. 예를 들어 2024년 1월에 퇴직했다면, 2023년 12월분 임금의 시효는 2026년 12월까지입니다. 다만 매달 시효가 만료되는 임금이 있으므로 빠른 행동이 중요합니다.</p>',
      },
      {
        question: '퇴직 후에도 고용노동청에 진정을 넣을 수 있나요?',
        answer:
          '<p>네, 퇴직 후에도 임금체불 진정을 접수할 수 있습니다. 사업장 관할 고용노동청에 진정서를 제출하면 근로감독관이 조사를 진행합니다.</p>',
      },
      {
        question: '퇴직 시 받은 퇴직금이 적다면 추가 청구가 가능한가요?',
        answer:
          '<p>포괄임금으로 인해 통상임금이 과소 산정되었다면 퇴직금도 재계산해야 합니다. 재계산 결과 차액이 발생하면 퇴직금 차액도 함께 청구할 수 있습니다.</p>',
      },
      {
        question: '회사가 폐업했으면 누구에게 청구하나요?',
        answer:
          '<p>사업주 개인에게 청구하거나, 임금채권보장법에 따라 근로복지공단에 체당금을 신청할 수 있습니다. 체당금은 최종 3개월분 임금과 최종 3년분 퇴직금 중 미지급액에 대해 지급됩니다.</p>',
      },
      {
        question: '합의서나 퇴직동의서에 서명했으면 청구할 수 없나요?',
        answer:
          '<p>"임금에 관한 일체의 이의를 제기하지 않겠다"는 합의서에 서명했더라도, 근로기준법상 강행규정에 반하는 부분(법정수당 미지급)은 효력이 없습니다. 합의서가 있더라도 법정수당 차액은 별도로 청구 가능합니다.</p>',
      },
    ],
    cta: { text: '퇴직 후 포괄임금 차액 소급 청구 가능 금액 AI로 계산하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '임금체불 가이드', href: '/guide/wage' },
      { label: '포괄임금 초과근무 차액 청구', href: '/guide/wage/wage-pogual-overtime-difference-claim' },
      { label: '퇴직금 미지급 신고 절차', href: '/guide/retirement/retirement-unpaid-complaint-steps' },
      { label: '소액사건심판 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
    ],
  },

  // ───────────────────────────────────────────
  // 3. wage-pogual-minimum-wage-test
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'wage-pogual-minimum-wage-test',
    keyword: '포괄임금 최저임금 미달 자가진단',
    questionKeyword: '포괄임금이 최저임금에 미달하는지 어떻게 확인하나요?',
    ctaKeyword: '포괄임금 최저임금 미달 여부 상담',
    type: '자가진단형',
    perspective: 'victim',
    meta: {
      title: '포괄임금 최저임금 미달 여부 자가진단 4단계 | 로앤가이드',
      description:
        '포괄임금으로 받는 월급이 최저임금에 미달할 수 있습니다. 2026년 최저임금 기준으로 시급 역산 공식 4단계를 지금 확인하세요.',
    },
    intro:
      '<p>월급 250만원을 받고 있는데 매달 연장근로가 40시간이 넘습니다. 회사는 "포괄임금이라 다 포함된 것"이라고 하지만, 실제로 시급을 계산해보면 최저임금에도 못 미치는 경우가 있습니다. 2026년 최저임금(시급 10,030원) 기준으로 내 포괄임금이 적법한지 자가진단해보세요.</p>',
    timelineSteps: [
      '1단계: 비교대상 임금 산정',
      '2단계: 총 근로시간 산정',
      '3단계: 비교대상 시급 계산',
      '4단계: 최저임금과 비교 판단',
    ],
    sections: [
      {
        title: '포괄임금이 최저임금에 미달하면 어떻게 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">포괄임금계약이라도 최저임금에 미달하면 그 계약 자체가 무효입니다.</strong></p>\n<p>대법원은 2024년 12월 포괄임금계약에 따라 지급된 임금이 최저임금에 미달하는 경우, 포괄임금계약이 유효하다고 볼 수 없고 사용자는 미달액을 지급해야 한다고 판시했습니다. 핵심은 다음과 같습니다.</p>\n<ol>\n<li><strong>계약 무효</strong> — 최저임금 미달 시 포괄임금 약정 자체가 무효가 됩니다.</li>\n<li><strong>미달액 지급 의무</strong> — 사용자는 최저임금과의 차액을 전액 지급해야 합니다.</li>\n<li><strong>형사처벌</strong> — 최저임금 미달 지급은 3년 이하의 징역 또는 2,000만원 이하의 벌금에 해당할 소지가 있습니다.</li>\n</ol>',
      },
      {
        title: '자가진단 4단계 — 시급 역산 공식',
        content:
          '<p><strong style="color:#1e3a5f">아래 공식으로 내 포괄임금의 실질 시급을 계산하세요.</strong></p>\n<p><strong>1단계: 비교대상 임금 산정</strong></p>\n<p>월급에서 최저임금에 산입되지 않는 항목을 뺍니다. 연장·휴일근로 가산임금, 야간근로 가산임금 등은 비교대상 임금에서 제외합니다.</p>\n<p><strong>2단계: 월 총 근로시간 산정</strong></p>\n<p>소정근로시간(월 209시간이 일반적) + 유급 주휴시간 + 가산율을 반영한 연장·야간·휴일근로시간을 합산합니다.</p>\n<p><strong>3단계: 비교대상 시급 계산</strong></p>\n<p>정액급 포괄임금인 경우: 비교대상 시급 = 월급여액 × (소정근로시간 + 유급 주휴시간) ÷ (소정근로시간 + 유급 주휴시간 + 가산율 반영 연장·야간·휴일근로시간) ÷ 월 소정근로시간</p>\n<p><strong>4단계: 2026년 최저임금과 비교</strong></p>\n<p>비교대상 시급이 10,030원(2026년 최저임금)보다 낮으면 최저임금 미달입니다.</p>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>계산이 복잡하다면 AI가 대신 해드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">월급과 근로시간만 알려주시면 최저임금 미달 여부를 즉시 진단합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '최저임금 미달 확인 후 바로 해야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">최저임금 미달이 확인되면 즉시 증거를 확보하고 신고하세요.</strong></p>\n<ol>\n<li><strong>근로계약서, 급여명세서, 통장 입금내역 확보</strong> — 포괄임금 약정 내용과 실제 지급 금액을 입증하는 자료입니다.</li>\n<li><strong>실제 근로시간 기록 확보</strong> — 출퇴근 기록, PC 로그, 업무 메신저 기록 등으로 실제 연장근로시간을 입증합니다.</li>\n<li><strong>고용노동청 진정 또는 익명신고센터 접수</strong> — 최저임금 위반은 형사처벌 대상이므로 고용노동청이 적극적으로 조사합니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">참고: 2026년 최저임금은 시급 10,030원, 월 환산액(209시간 기준) 2,096,270원입니다.</blockquote>',
      },
      {
        title: '최저임금 미달 시 받을 수 있는 금액',
        content:
          '<p><strong style="color:#1e3a5f">최저임금 미달액뿐 아니라 추가 법정수당 차액도 함께 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>최저임금 미달 차액</strong> — 매월 실제 시급과 최저임금의 차이 × 근로시간</li>\n<li><strong>연장근로 가산수당</strong> — 포괄임금이 무효가 되면 연장근로수당(통상임금의 1.5배)을 별도로 청구할 수 있습니다.</li>\n<li><strong>퇴직금 재산정 차액</strong> — 통상임금이 재계산되면 퇴직금도 증가합니다.</li>\n<li><strong>지연이자</strong> — 퇴직 후 14일 이내 미지급 시 연 20% 지연이자가 부과됩니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금이 최저임금에 미달하면 계약 자체가 무효',
        summary:
          '대법원 2020다300299 사건(대법원, 2024.12.26 선고)에서 법원은 감시·단속적 근로 등 근로시간 산정이 어려운 경우 포괄임금계약이 유효할 수 있지만, 그에 따라 지급된 임금이 최저임금에 미달하면 포괄임금계약이 유효하다고 볼 수 없고, 사용자는 미달액을 지급해야 한다고 판시했습니다. 정액급 포괄임금의 비교대상 시급 산정 방법도 구체적으로 제시한 사례입니다.',
        takeaway:
          '비슷한 상황이라면 위 자가진단 공식으로 시급을 역산해보세요. 최저임금에 미달하면 포괄임금 약정 자체가 무효가 되어 모든 법정수당을 별도 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '2026년 최저임금은 얼마인가요?',
        answer:
          '<p>2026년 최저임금은 시급 10,030원입니다. 월 환산액은 주 40시간 기준 209시간 × 10,030원 = 2,096,270원입니다. 여기에 연장근로수당 등은 포함되지 않습니다.</p>',
      },
      {
        question: '수습 기간이면 최저임금이 다르게 적용되나요?',
        answer:
          '<p>1년 이상 근로계약을 체결한 경우 수습 기간(3개월 이내)에는 최저임금의 90%(시급 9,027원)를 적용할 수 있습니다. 다만 1년 미만 계약이면 수습 감액이 적용되지 않습니다.</p>',
      },
      {
        question: '감시·단속적 근로자도 최저임금이 적용되나요?',
        answer:
          '<p>네, 감시·단속적 근로에 대해 고용노동부 장관의 승인을 받았더라도 최저임금은 동일하게 적용됩니다. 포괄임금이 허용되더라도 최저임금 미달은 위법입니다.</p>',
      },
      {
        question: '시급 계산이 복잡한데 어디서 도움을 받을 수 있나요?',
        answer:
          '<p>고용노동부 고객상담센터(1350)에서 최저임금 미달 여부를 상담받을 수 있습니다. 로앤가이드 AI 상담에서도 월급과 근로시간을 입력하면 즉시 진단이 가능합니다.</p>',
      },
    ],
    cta: { text: '내 포괄임금 최저임금 미달 여부 AI로 자가진단하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '임금체불 가이드', href: '/guide/wage' },
      { label: '포괄임금 초과근무 계산법', href: '/guide/wage/wage-pogual-overtime-calculation-method' },
      { label: '2026 포괄임금 지침 체크리스트', href: '/guide/wage/wage-pogual-2026-guideline-checklist' },
      { label: '임금체불 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
    ],
  },

  // ───────────────────────────────────────────
  // 4. wage-pogual-inspection-prepare
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'wage-pogual-inspection-prepare',
    keyword: '포괄임금 기획감독 근로자 대응 준비',
    questionKeyword: '우리 회사가 포괄임금 기획감독 대상이 되면 어떻게 해야 하나요?',
    ctaKeyword: '포괄임금 기획감독 대비 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '2026 포괄임금 기획감독 대비 근로자 체크포인트 6가지 | 로앤가이드',
      description:
        '고용노동부가 하반기 포괄임금 기획감독을 예고했습니다. 감독 대상 기준부터 근로자가 준비해야 할 6가지를 지금 확인하세요.',
    },
    intro:
      '<p>뉴스에서 "포괄임금 기획감독"이라는 말을 들었습니다. 우리 회사도 해당되는 걸까요? 감독이 나오면 나는 뭘 해야 할까요? 2026년 4월 9일 시행된 포괄임금 오남용 방지 지침에 따라, 하반기에는 대규모 기획감독이 예정되어 있습니다. 근로자로서 미리 준비해야 할 사항을 정리해보세요.</p>',
    timelineSteps: [
      '1단계: 기획감독 대상 선정 기준 확인',
      '2단계: 내 사업장 해당 여부 판단',
      '3단계: 증거자료 사전 확보',
      '4단계: 감독 시 진술 준비',
      '5단계: 감독 결과 확인 및 후속 조치',
      '6단계: 미지급 수당 청구 절차 진행',
    ],
    sections: [
      {
        title: '기획감독 대상은 어떻게 선정되나요?',
        content:
          '<p><strong style="color:#1e3a5f">2026년 하반기 기획감독 대상은 세 가지 경로로 선정됩니다.</strong></p>\n<ol>\n<li><strong>익명신고센터 접수 사업장</strong> — 4월 9일 신설된 익명신고센터에 신고된 사업장은 자동으로 오남용 의심사업장에 등록되어 기획감독 대상에 포함됩니다.</li>\n<li><strong>기존 감독 이력 사업장</strong> — 과거 임금체불 위반 이력이 있는 사업장은 우선 감독 대상입니다. 2023년 고용노동부 기획감독에서 103개 의심 사업장 중 64곳이 위반으로 적발된 바 있습니다.</li>\n<li><strong>업종별 고위험군</strong> — IT·스타트업, 외식·프랜차이즈, 건설 등 포괄임금 관행이 만연한 업종이 우선 대상입니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">참고: 2023년 감독 결과 의심 사업장의 약 74%에서 포괄임금 오남용이 확인되었습니다. 총 26억 3천만원의 미지급 수당이 적발됐습니다.</blockquote>',
      },
      {
        title: '근로자가 사전에 준비할 6가지',
        content:
          '<p><strong style="color:#1e3a5f">기획감독이 나오기 전에 아래 6가지를 미리 준비하세요.</strong></p>\n<ol>\n<li><strong>근로계약서 사본 확보</strong> — 포괄임금 약정 조항이 있는 원본을 보관합니다.</li>\n<li><strong>급여명세서 전체 기간 확보</strong> — 입사 후 지금까지 받은 모든 급여명세서를 출력하거나 캡처합니다.</li>\n<li><strong>출퇴근 기록 정리</strong> — 출입카드, PC 로그온/오프, 업무 메신저 기록을 날짜별로 정리합니다.</li>\n<li><strong>실제 연장근로시간 계산</strong> — 주당 평균 연장근로시간을 산출하여 메모합니다.</li>\n<li><strong>차액 예상 금액 산정</strong> — 약정액과 실제 법정수당의 차이를 미리 계산해둡니다.</li>\n<li><strong>진술서 초안 작성</strong> — 감독관 면담 시 객관적 사실 위주로 진술할 내용을 미리 정리합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>기획감독 대비 증거 점검, AI가 도와드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">내 사업장이 감독 대상인지, 어떤 증거를 준비해야 하는지 무료로 확인하세요.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '감독관 면담 시 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">기획감독 시 근로감독관이 근로자에게 직접 면담을 요청할 수 있습니다.</strong></p>\n<ul>\n<li><strong>사실만 진술하세요</strong> — 실제 출퇴근 시간, 야근 빈도, 수당 지급 여부를 객관적으로 진술합니다. 추측이나 감정적 표현은 피합니다.</li>\n<li><strong>근로계약서와 다른 점을 명확히 말하세요</strong> — "계약서에는 18시 퇴근이지만 실제로는 21시까지 근무했습니다"처럼 구체적으로 진술합니다.</li>\n<li><strong>증거를 제출하세요</strong> — 준비한 출퇴근 기록, 카카오톡 업무 지시 내역 등을 감독관에게 제출합니다.</li>\n<li><strong>회사가 지시하는 허위 진술은 거부하세요</strong> — 사용자가 "포괄임금에 동의했다고 말해달라"고 요구하는 경우가 있습니다. 허위 진술을 강요하면 그 자체가 추가 위반 사유입니다.</li>\n</ul>',
      },
      {
        title: '감독 결과 위반 확인 후 절차',
        content:
          '<p><strong style="color:#1e3a5f">기획감독에서 위반이 확인되면 고용노동부가 직접 시정을 명령합니다.</strong></p>\n<ul>\n<li><strong>시정지시</strong> — 사업주에게 미지급 수당 지급을 명령합니다. 보통 30일 이내 시정 기한이 부여됩니다.</li>\n<li><strong>형사 조치</strong> — 시정하지 않거나 악질적인 경우 사업주를 형사 고발합니다.</li>\n<li><strong>미지급 수당 정산</strong> — 감독 결과에 따라 전체 근로자에 대한 미지급 수당이 일괄 정산됩니다.</li>\n<li><strong>추가 청구</strong> — 감독에서 확인되지 않은 기간의 차액은 별도로 진정이나 소송으로 청구할 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '노동위원회 사례 — 포괄임금제 근로계약서의 증거력',
        summary:
          '경북지방노동위원회 2022년 결정에서, 근로자가 포괄임금제로 근로계약서를 직접 서명한 경우 사업장이 계약서대로 임금을 지급했다면 근로조건 위반으로 볼 수 없다고 판정했습니다. 근로자가 면접 시 구두로 합의한 시급이 계약서와 다르다고 주장했으나, 계약서 이외의 입증 자료가 부족하여 기각되었습니다.',
        takeaway:
          '비슷한 상황이라면 기획감독 시 근로계약서의 포괄임금 약정 내용과 실제 근로조건의 차이를 구체적으로 입증하는 것이 핵심입니다. 구두 약속이 아닌 서면 증거가 결정적입니다.',
      },
    ],
    faq: [
      {
        question: '기획감독이 나오면 회사가 미리 알 수 있나요?',
        answer:
          '<p>정기 감독은 사전 통보가 있을 수 있으나, 익명신고에 의한 수시 감독은 예고 없이 진행됩니다. 일부 사업주는 사전에 알고 자료를 조작하려 하지만, 이는 추가 위반 사유에 해당할 소지가 있습니다.</p>',
      },
      {
        question: '감독관에게 면담을 거부해도 되나요?',
        answer:
          '<p>근로감독관의 조사에 응해야 할 법적 의무가 있습니다(근로기준법 제102조). 다만 면담은 근무시간 중에 진행되며, 사용자 없이 단독 면담을 요청할 수 있습니다.</p>',
      },
      {
        question: '감독 결과 위반이 나와도 회사가 수당을 안 주면 어떻게 하나요?',
        answer:
          '<p>시정기한 내 미이행 시 고용노동부가 형사 고발을 진행합니다. 근로자도 별도로 민사소송을 제기하여 미지급 수당과 지연이자를 청구할 수 있습니다.</p>',
      },
      {
        question: '감독 중 회사가 허위 진술을 강요하면 어떻게 대응하나요?',
        answer:
          '<p>감독관에게 "회사가 진술 내용을 지시했다"고 별도로 알리세요. 허위 진술 강요는 근로기준법상 추가 위반 사유이며, 공익신고자 보호법에 따라 보호받을 수 있습니다.</p>',
      },
      {
        question: '이미 익명신고를 했는데 기획감독까지 따로 준비해야 하나요?',
        answer:
          '<p>네, 익명신고는 감독의 계기가 되지만 실제 감독 시 근로자의 증거와 진술이 결과에 큰 영향을 미칩니다. 미리 출퇴근 기록, 급여명세서 등을 정리해두는 것이 중요합니다.</p>',
      },
    ],
    cta: { text: '기획감독 대비 증거 점검 AI로 무료 시작하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '임금체불 가이드', href: '/guide/wage' },
      { label: '포괄임금 익명신고센터 활용법', href: '/guide/wage/wage-pogual-anon-report-how' },
      { label: '포괄임금 근무시간 미기록 신고', href: '/guide/wage/wage-pogual-no-timesheet-report' },
      { label: '포괄임금 급여명세서 누락 벌칙', href: '/guide/wage/wage-pogual-payslip-missing-penalty' },
    ],
  },

  // ───────────────────────────────────────────
  // 5. wage-pogual-contract-renegotiation
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'wage-pogual-contract-renegotiation',
    keyword: '연봉 재계약 포괄임금 조항 삭제 요청',
    questionKeyword: '연봉 재계약할 때 포괄임금 조항을 빼달라고 할 수 있나요?',
    ctaKeyword: '포괄임금 계약서 수정 요청 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '연봉 재계약 시 포괄임금 조항 삭제 요청법 4단계 | 로앤가이드',
      description:
        '2026년 지침 시행으로 포괄임금 조항 변경을 요구할 근거가 생겼습니다. 연봉 재계약 시 수정 요청법 4단계를 지금 확인하세요.',
    },
    intro:
      '<p>연봉 재계약 시즌이 다가옵니다. 작년까지는 "포괄임금 포함 연봉 OOO만원"이라는 계약서에 그냥 서명했지만, 2026년 4월 포괄임금 오남용 방지 지침이 시행되면서 상황이 달라졌습니다. 이번 재계약에서 포괄임금 조항을 삭제하거나 수정할 수 있는 방법을 확인해보세요.</p>',
    timelineSteps: [
      '1단계: 기존 계약서의 포괄임금 조항 분석',
      '2단계: 수정 요청 서면 작성',
      '3단계: HR 또는 사용자와 협의',
      '4단계: 거부 시 법적 대응 경로 선택',
    ],
    sections: [
      {
        title: '2026년 지침이 연봉 재계약에 미치는 영향',
        content:
          '<p><strong style="color:#1e3a5f">2026년 포괄임금 오남용 방지 지침은 연봉 재계약의 기준을 바꿨습니다.</strong></p>\n<p>지침에 따라 달라진 핵심 3가지입니다.</p>\n<ol>\n<li><strong>기본급과 수당 구분 의무화</strong> — "연봉 포괄임금 OOO만원"이라는 한 줄짜리 계약은 지침 위반입니다. 기본급, 연장근로수당, 야간근로수당, 휴일근로수당을 항목별로 명시해야 합니다.</li>\n<li><strong>고정OT 초과분 차액 지급 의무</strong> — 고정 연장근로시간을 약정하더라도 실제 초과분은 차액을 지급해야 합니다.</li>\n<li><strong>연차수당·퇴직금 포함 금지</strong> — 연봉에 연차수당이나 퇴직금을 포함하는 약정은 무효입니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 지침 시행 이후 기존 계약의 포괄임금 조항이 위법한 부분이 있다면, 재계약 시 수정을 요청할 정당한 근거가 됩니다.</blockquote>',
      },
      {
        title: '수정 요청 4단계 절차',
        content:
          '<p><strong style="color:#1e3a5f">연봉 재계약 시 아래 절차로 포괄임금 조항 수정을 요청하세요.</strong></p>\n<ol>\n<li><strong>기존 계약서 분석</strong><br/>현재 계약서에서 포괄임금 관련 조항을 찾습니다. "기본급 포함 제 수당 일체", "포괄임금 OOO만원", "고정OT O시간 포함" 등의 문구가 있는지 확인합니다.</li>\n<li><strong>수정 요청 서면 작성</strong><br/>HR 담당자에게 이메일로 수정 요청을 합니다. "2026년 4월 시행된 포괄임금 오남용 방지 지침에 따라 기본급과 각종 수당을 항목별로 구분 기재해 주시기 바랍니다"라고 구체적으로 요청합니다.</li>\n<li><strong>협의</strong><br/>회사가 수정에 응하면 새 계약서에 기본급, 연장근로수당, 야간근로수당, 휴일근로수당이 각각 명시되었는지 확인 후 서명합니다.</li>\n<li><strong>거부 시 대응</strong><br/>회사가 수정을 거부하면 고용노동부 고객상담센터(1350)에 상담하거나, 익명신고센터에 신고할 수 있습니다. 기존 계약의 위법 부분은 재계약 여부와 무관하게 무효입니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>계약서 수정 요청 문구, AI가 대신 작성해드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">현재 계약서 내용을 입력하면 지침 기준에 맞는 수정 요청 이메일 초안을 무료로 생성합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '회사가 거부할 때 알아야 할 법적 근거',
        content:
          '<p><strong style="color:#1e3a5f">포괄임금 조항 수정 요청을 이유로 불이익을 주는 것은 위법입니다.</strong></p>\n<ul>\n<li><strong>근로기준법 제17조</strong> — 사용자는 근로조건을 서면으로 명시해야 하며, 기본급과 수당을 구분하지 않은 계약은 이 의무를 위반한 것입니다.</li>\n<li><strong>불이익 변경 금지</strong> — 포괄임금 조항 수정은 근로자에게 유리한 변경이므로, 회사가 "연봉이 줄어든다"며 총액을 하향 조정하려 하면 이는 근로조건의 불이익 변경에 해당할 소지가 있습니다.</li>\n<li><strong>계약 체결 강요 금지</strong> — 위법한 포괄임금 조항이 포함된 계약서에 서명을 강요하면 근로기준법 위반입니다.</li>\n</ul>',
      },
      {
        title: '재계약 시 반드시 확인할 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">새 계약서에 서명하기 전 아래 항목을 점검하세요.</strong></p>\n<ul>\n<li><strong>기본급이 별도로 명시되어 있나요?</strong></li>\n<li><strong>연장근로수당, 야간근로수당, 휴일근로수당이 항목별로 구분되어 있나요?</strong></li>\n<li><strong>고정OT가 있다면 몇 시간인지, 초과분 차액 지급 조항이 있나요?</strong></li>\n<li><strong>"연차수당 포함" 또는 "퇴직금 포함" 문구가 있나요?</strong> → 있으면 삭제 요청</li>\n<li><strong>총 연봉이 기존과 동일하거나 인상되었나요?</strong> → 수당 구분으로 총액이 줄어들면 불이익 변경</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '상담 사례 — 포괄임금에 연차수당 포함 약정의 효력',
        summary:
          '대한법률구조공단 상담 사례(대판 1998.3.24, 96다24699 참조)에서, 포괄임금제로 운영되는 회사가 연차유급휴가수당을 임금에 포괄산정하여 지급하겠다고 통보한 사안에서, 포괄임금제는 각종 수당의 지급방법에 관한 것으로 근로자의 연차유급휴가권의 행사 여부와는 관계가 없으므로 이를 근로자의 연차휴가권을 박탈한 것이라 할 수 없다고 했습니다. 다만 이를 휴가 사용을 부인하는 근거로 삼으면 무효입니다.',
        takeaway:
          '비슷한 상황이라면 연봉 재계약 시 연차수당이 포괄임금에 포함된 약정이 있더라도 실제 연차 사용권은 별도로 보장됩니다. 연차수당 포함 약정이 연차 사용을 제한하는 구조라면 수정을 요청하세요.',
      },
    ],
    faq: [
      {
        question: '재계약 시 수정을 요청했는데 회사가 총 연봉을 줄이려고 하면 어떻게 하나요?',
        answer:
          '<p>포괄임금 수당 구분은 지급 방식의 변경이지 총액을 줄이는 것이 아닙니다. 기존 총 연봉이 동일하게 유지되면서 항목만 구분되어야 합니다. 총액이 줄어들면 근로조건의 불이익 변경에 해당하므로 거부할 수 있습니다.</p>',
      },
      {
        question: '재계약 서명 기한이 다가오는데 수정이 안 되면 그냥 서명해야 하나요?',
        answer:
          '<p>위법한 조항에 서명하더라도 해당 조항은 법적으로 무효입니다. 서명 후에도 차액을 청구할 수 있습니다. 다만 수정 요청을 이메일 등 서면으로 남겨두면 나중에 유리한 증거가 됩니다.</p>',
      },
      {
        question: '고정OT 20시간이 포함된 계약인데 실제 야근은 40시간입니다. 어떻게 요청하나요?',
        answer:
          '<p>재계약 시 "고정OT 초과분에 대한 차액 지급 조항"을 가능한 한 포함하도록 요청하세요. 2026년 지침에 따르면 고정OT 약정이 있어도 실제 초과분은 차액을 가능한 한 지급해야 합니다.</p>',
      },
      {
        question: '수정 요청 이메일을 어떻게 쓰면 좋을까요?',
        answer:
          '<p>"2026년 4월 고용노동부 포괄임금 오남용 방지 지침에 따라, 금번 연봉 재계약 시 기본급과 각종 수당(연장·야간·휴일근로수당)을 항목별로 구분 기재해 주시기 바랍니다. 기존 총 연봉 수준은 유지하되, 수당 구분만 반영해 주시면 됩니다."라고 요청하세요.</p>',
      },
    ],
    cta: { text: '내 계약서 포괄임금 조항 위법 여부 AI로 분석하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '임금체불 가이드', href: '/guide/wage' },
      { label: '2026 포괄임금 지침 체크리스트', href: '/guide/wage/wage-pogual-2026-guideline-checklist' },
      { label: '포괄임금 연차 포함 무효', href: '/guide/wage/wage-pogual-annual-leave-included-invalid' },
      { label: '포괄임금 사업주 대응', href: '/guide/wage/wage-pogual-employer-action-3steps' },
    ],
  },
];
