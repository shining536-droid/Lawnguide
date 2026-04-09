import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 2026년 4월 포괄임금 오남용 방지 지침 추가 스포크 4개 (batch26-extra-6to9)
//
// 6. wage-pogual-no-timesheet-report
//    이 페이지는 [근로시간 기록을 전혀 하지 않는 회사에 다니는 근로자]의
//    [2026년 지침으로 근로시간 기록 의무가 법정화된 상황]에서
//    [노동청 신고 절차와 증거 확보 방법을 파악하는 준비]를 돕는 페이지다.
//
// 7. wage-pogual-overtime-calculation-method
//    이 페이지는 [연장·야간·휴일근로를 하고도 추가 수당을 제대로 받지 못한 근로자]의
//    [내가 받아야 할 정확한 수당 금액이 얼마인지 계산이 필요한 상황]에서
//    [통상시급 × 가산율 방식으로 직접 계산하고 차액을 확인하는 준비]를 돕는 페이지다.
//
// 8. wage-pogual-abolition-salary-impact
//    이 페이지는 [포괄임금제 폐지·제한 소식을 들은 일반 직장인]의
//    [폐지되면 내 연봉이 줄거나 불이익이 생기지 않을까 걱정되는 상황]에서
//    [실제 영향과 근로자에게 유리한 규칙을 이해하는 준비]를 돕는 페이지다.
//
// 9. wage-pogual-case-study-bakery
//    이 페이지는 [포괄임금 오남용이 의심되는 회사에 다니는 근로자]의
//    [모 베이커리 브랜드 5억원 체불 적발 사례를 보며 내 상황과 비교하는 단계]에서
//    [적발 패턴과 동일한 유형인지 확인하고 신고 여부를 결정하는 준비]를 돕는 페이지다.
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch26Extra_6to9: SpokePage[] = [
  // ───────────────────────────────────────────
  // 6. wage-pogual-no-timesheet-report
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'wage-pogual-no-timesheet-report',
    keyword: '포괄임금제 근로시간 기록 안 하는 회사 노동청 신고',
    questionKeyword: '포괄임금제 회사에서 근로시간을 기록하지 않으면 신고할 수 있나요?',
    ctaKeyword: '포괄임금 근로시간 미기록 노동청 신고 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '근로시간 기록 안 하는 회사, 노동청 신고 3단계 | 로앤가이드',
      description:
        '야근을 해도 시간을 기록하지 않는 회사, 2026년 지침으로 이제 신고 가능합니다. 임금대장 미작성 과태료와 신고 절차 3단계를 지금 확인하세요.',
    },
    intro:
      '<p>매일 밤 10시까지 일하지만 회사에는 퇴근 시간 기록이 없습니다. "포괄임금이니까 다 포함이야"라는 말 한마디로 야근이 투명 처리되고 있습니다. 2026년 4월 9일부터 고용노동부 지침은 달라졌습니다. 근로시간 기록·관리는 이제 사업주의 법적 의무입니다. 기록하지 않으면 신고 대상이 되고, 과태료도 부과됩니다. 지금 내 상황이 해당되는지 3단계로 확인해보세요.</p>',
    timelineSteps: [
      '1단계: 근로시간 미기록 여부 확인 및 증거 수집',
      '2단계: 임금대장 미작성·임금명세서 미교부 여부 점검',
      '3단계: 고용노동청 진정 또는 노동부 신고 접수',
    ],
    sections: [
      {
        title: '2026년 지침 — 근로시간 기록은 이제 법적 의무',
        content:
          '<p><strong style="color:#1e3a5f">2026년 4월 고용노동부 지침은 포괄임금 사업장에서도 근로시간 기록·관리를 명시적으로 의무화했습니다.</strong></p>\n<p>지침의 핵심 내용은 다음과 같습니다.</p>\n<ul>\n<li><strong>근로시간 기록·관리 의무</strong> — 연장·야간·휴일근로를 포함한 모든 근로시간을 사용자가 기록해야 합니다. 포괄임금 약정이 있어도 예외가 아닙니다.</li>\n<li><strong>임금대장 미작성 시 과태료</strong> — 근로기준법 제48조에 따라 임금명세서를 교부하지 않으면 500만원 이하의 과태료가 부과됩니다.</li>\n<li><strong>실제 근로 기반 수당 지급 의무</strong> — 고정OT 약정이 있어도 실제 연장근로수당이 약정액을 초과하면 차액을 반드시 지급해야 합니다.</li>\n<li><strong>정액급제·정액수당제 금지</strong> — 기본급과 수당을 구분하지 않는 방식은 현행법 위반으로 명시됐습니다.</li>\n</ul>\n<p>이 지침은 2026년 4월 9일부터 시행됐으며, 노사정 합의와 국정과제 95번(포괄임금제 원칙적 금지)에 기반합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 근로시간 기록은 선택이 아니라 의무입니다. 기록하지 않으면 사업주가 과태료를 물고, 근로자는 임금체불을 입증하기 유리해집니다.</blockquote>',
      },
      {
        title: '근로시간 미기록, 내가 직접 증거를 만들 수 있다',
        content:
          '<p><strong style="color:#1e3a5f">회사가 기록하지 않아도 근로자 스스로 증거를 만들 수 있습니다.</strong></p>\n<ol>\n<li><strong>출퇴근 시간 직접 기록</strong> — 매일 출근·퇴근 시각을 메모장, 스마트폰 앱, 이메일 등으로 기록합니다. 3개월 이상 누적하면 강력한 증거가 됩니다.</li>\n<li><strong>업무 지시·완료 메시지 캡처</strong> — 카카오톡, 슬랙, 이메일로 받은 야간·주말 업무 지시 내용을 저장합니다. 시간 정보가 포함된 스크린샷이 효과적입니다.</li>\n<li><strong>PC 로그온·오프 기록 요청</strong> — 회사 IT 시스템에서 본인의 접속 기록을 요청할 수 있습니다. 거부하더라도 요청 사실 자체가 증거입니다.</li>\n<li><strong>출입카드·주차 기록</strong> — 건물 출입 시스템이 있다면 관리사무소에 기록 열람을 요청하세요.</li>\n</ol>\n<p>이렇게 확보한 증거는 노동청 진정 시 실제 근로시간을 입증하는 핵심 자료가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">실제 사례: 모 베이커리 프랜차이즈에서 고정 연장근로수당 초과 근무분 미지급 및 통상임금 낮게 산정으로 5억 6,400만원의 임금체불이 적발되고 과태료 약 8억원이 부과됐습니다. 이는 근로시간 미기록과 포괄임금 오남용이 결합된 대표적인 사례입니다.</blockquote>',
      },
      {
        title: '노동청 신고, 3단계로 진행하기',
        content:
          '<p><strong style="color:#1e3a5f">근로시간 미기록과 임금체불이 확인됐다면 아래 순서로 신고하세요.</strong></p>\n<ol>\n<li><strong>내용증명 발송 (신고 전 선택사항)</strong> — 회사에 "근로시간 기록 의무 이행"과 "미지급 수당 지급"을 요청하는 내용증명을 보냅니다. 14일 이내 응답이 없거나 거부하면 다음 단계로 진행합니다.</li>\n<li><strong>고용노동청 진정 접수</strong> — 사업장 관할 지방 고용노동청에 임금체불 진정서를 제출합니다. 온라인(고용노동부 홈페이지)으로도 접수 가능합니다. 진정 후 통상 2~3개월 내 조사가 시작됩니다.</li>\n<li><strong>체불 임금 청구 소송</strong> — 진정으로 해결되지 않거나 액수가 크다면 민사소송을 진행합니다. 3,000만원 이하는 소액사건심판으로 간이하게 처리할 수 있습니다.</li>\n</ol>\n<p>임금체불 신고는 퇴사 후 3년 이내, 근무 중에도 가능합니다. 재직 중 신고가 증거 확보 면에서 더 유리합니다.</p>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 신고 전 AI가 내 상황을 먼저 분석해드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">근로시간 기록 여부, 차액 금액, 신고 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '신고 후 보복이 걱정된다면',
        content:
          '<p><strong style="color:#1e3a5f">임금체불 신고 후 불이익을 당하면 이것 자체가 추가 위반입니다.</strong></p>\n<p>근로기준법 제104조는 근로자가 근로기준법 위반 사실을 신고한 것을 이유로 해고하거나 불이익을 주는 행위를 금지합니다. 위반 시 사용자는 3년 이하의 징역 또는 3,000만원 이하의 벌금을 받을 수 있습니다.</p>\n<ul>\n<li>신고 후 부당 대우가 있으면 즉시 기록(날짜, 내용, 증인)하세요.</li>\n<li>부당해고라면 지방노동위원회에 구제신청(부당해고 신청) 30일 이내 접수합니다.</li>\n<li>보복성 조치라면 별도 형사고소도 가능합니다.</li>\n</ul>\n<p>관련 내용은 <a href="/guide/wage">임금체불 가이드</a> 또는 <a href="/guide/dismissal">부당해고 가이드</a>에서 상세히 확인할 수 있습니다.</p>',
      },
    ],
    cases: [
      {
        title: '판례 — 연장근로시간 1주 40시간 초과분은 별도 수당 지급 대상',
        summary:
          '대법원 2022다257238 사건(대법원, 2025.07.18 선고)에서 법원은 근로자와 사용자가 정한 1주의 근로시간이 40시간을 초과하거나 1일의 근로시간이 8시간을 초과하는 경우, 그 초과 부분인 연장근로시간에 대해 최저임금액 이상의 임금을 별도로 지급해야 한다고 판시했습니다. 포괄임금 약정으로 연장근로에 대한 별도 수당을 배제할 수 없다는 원칙을 재확인한 사례입니다.',
        takeaway:
          '비슷한 상황이라면 근로시간 기록이 없어도 출퇴근 메신저·이메일 시간으로 초과근무를 입증할 수 있습니다. 임금명세서에 수당 항목이 없다면 체불 진정의 근거가 됩니다.',
      },
    ],
    faq: [
      {
        question: '회사에서 포괄임금이라고 하면 야근 기록을 안 해도 되나요?',
        answer:
          '아닙니다. 2026년 4월 지침에 따라 포괄임금 약정 여부와 관계없이 사업주는 모든 근로시간을 기록·관리해야 합니다. 기록하지 않으면 과태료 부과 대상이 됩니다.',
      },
      {
        question: '근로시간 기록을 안 한다는 걸 어떻게 증명하나요?',
        answer:
          '본인이 직접 출퇴근 시간을 기록하고, 야근 지시 메시지를 캡처해두면 됩니다. 회사에 출퇴근 기록 열람을 요청했으나 거부당한 사실도 증거가 됩니다.',
      },
      {
        question: '임금명세서를 아예 받지 못했는데 신고할 수 있나요?',
        answer:
          '네. 임금명세서 미교부는 근로기준법 제48조 위반으로 과태료 500만원 이하 부과 대상입니다. 고용노동청에 바로 신고 가능합니다.',
      },
      {
        question: '재직 중에 신고하면 불이익이 생기지 않나요?',
        answer:
          '신고를 이유로 해고하거나 불이익을 주는 것은 근로기준법 제104조 위반입니다. 위반 시 사용자는 3년 이하 징역 또는 3,000만원 이하 벌금에 처해집니다.',
      },
      {
        question: '퇴사 후에도 신고할 수 있나요?',
        answer:
          '퇴사 후 3년 이내라면 임금체불 신고가 가능합니다. 다만 재직 중 신고가 증거 확보 면에서 더 유리하므로 가능하다면 재직 중에 행동하는 것이 좋습니다.',
      },
    ],
    internalLinks: [
      { label: '로앤가이드 홈', href: '/' },
      { label: '임금체불 가이드', href: '/guide/wage' },
      { label: '포괄임금 무효 초과근무수당 청구', href: '/guide/wage/wage-pogualkeum-overtime-void-claim' },
      { label: '부당해고 가이드', href: '/guide/dismissal' },
      { label: '퇴직금 가이드', href: '/guide/retirement' },
    ],
    cta: {
      text: '내 근로시간 미기록 상황, AI가 신고 가능성을 분석해드립니다.',
      link: '/chat?domain=wage',
    },
  },

  // ───────────────────────────────────────────
  // 7. wage-pogual-overtime-calculation-method
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'wage-pogual-overtime-calculation-method',
    keyword: '연장근로수당 계산법 내가 받아야 할 금액',
    questionKeyword: '포괄임금제에서 연장근로수당은 어떻게 계산하나요?',
    ctaKeyword: '연장근로수당 계산 차액 청구 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '연장근로수당 계산법, 내가 받아야 할 금액 확인 4단계 | 로앤가이드',
      description:
        '야근을 해도 수당이 없다면 직접 계산해보세요. 통상시급×1.5 공식으로 연장·야간·휴일수당 금액을 확인하고 차액을 청구하는 법을 지금 확인하세요.',
    },
    intro:
      '<p>매달 야근을 하는데 급여명세서에 연장근로수당이 없거나 금액이 이상하게 적습니다. 포괄임금 계약서에 서명했으니 다 포함된 거라고 했는데, 실제로는 얼마를 받아야 하는 걸까요? 2026년 4월 지침은 명확합니다. 포괄임금 약정이 있어도 실제 연장근로수당이 약정액을 초과하면 차액을 지급받을 권리가 있습니다. 지금 내가 받아야 할 금액을 직접 계산해보세요.</p>',
    timelineSteps: [
      '1단계: 통상시급 계산',
      '2단계: 연장·야간·휴일 근로시간 집계',
      '3단계: 가산율 적용하여 법정수당 계산',
      '4단계: 실제 수령액과 비교해 차액 확인',
    ],
    sections: [
      {
        title: '통상시급 계산법 — 모든 수당의 기준',
        content:
          '<p><strong style="color:#1e3a5f">연장근로수당은 통상시급을 기준으로 계산합니다. 통상시급부터 정확하게 구하세요.</strong></p>\n<p><strong>통상시급 계산 공식</strong></p>\n<p>통상시급 = 월 통상임금 ÷ 월 소정근로시간</p>\n<ul>\n<li><strong>월 통상임금</strong> — 기본급 + 정기적·일률적·고정적으로 지급되는 수당(식대, 직책수당 등). 초과근무수당, 성과급은 포함되지 않습니다.</li>\n<li><strong>월 소정근로시간</strong> — 주 5일, 1일 8시간 근무라면 월 209시간(주휴시간 포함)이 일반적입니다.\n  <ul>\n  <li>주 40시간 + 주휴 8시간 = 주 48시간</li>\n  <li>주 48시간 × 52주 ÷ 12개월 = 약 208시간 (실무에서는 209시간 사용)</li>\n  </ul>\n</li>\n</ul>\n<p><strong>예시</strong>: 월 기본급 300만원 ÷ 209시간 = 통상시급 약 14,354원</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 식대나 직책수당이 정기적으로 지급된다면 통상임금에 포함됩니다. 회사가 임의로 제외했다면 재계산이 필요합니다.</blockquote>',
      },
      {
        title: '가산율 적용 — 연장·야간·휴일 구분',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법은 근로 유형별로 가산율을 다르게 적용합니다.</strong></p>\n<table style="width:100%;border-collapse:collapse;font-size:0.95em">\n<thead>\n<tr style="background:#f0f4f8">\n<th style="padding:8px;border:1px solid #ddd;text-align:left">근로 유형</th>\n<th style="padding:8px;border:1px solid #ddd;text-align:center">가산율</th>\n<th style="padding:8px;border:1px solid #ddd;text-align:left">비고</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="padding:8px;border:1px solid #ddd">연장근로 (1일 8시간 초과)</td>\n<td style="padding:8px;border:1px solid #ddd;text-align:center">× 1.5</td>\n<td style="padding:8px;border:1px solid #ddd">기본임금의 50% 가산</td>\n</tr>\n<tr style="background:#fafafa">\n<td style="padding:8px;border:1px solid #ddd">야간근로 (오후 10시~오전 6시)</td>\n<td style="padding:8px;border:1px solid #ddd;text-align:center">× 0.5 추가</td>\n<td style="padding:8px;border:1px solid #ddd">연장+야간이면 × 2.0</td>\n</tr>\n<tr>\n<td style="padding:8px;border:1px solid #ddd">휴일근로 (8시간 이내)</td>\n<td style="padding:8px;border:1px solid #ddd;text-align:center">× 1.5</td>\n<td style="padding:8px;border:1px solid #ddd">주휴일·법정공휴일</td>\n</tr>\n<tr style="background:#fafafa">\n<td style="padding:8px;border:1px solid #ddd">휴일근로 (8시간 초과)</td>\n<td style="padding:8px;border:1px solid #ddd;text-align:center">× 2.0</td>\n<td style="padding:8px;border:1px solid #ddd">8시간 초과분</td>\n</tr>\n</tbody>\n</table>\n<p style="margin-top:12px"><strong>계산 예시</strong> (통상시급 14,354원, 연장근로 20시간/월)</p>\n<ul>\n<li>연장근로수당: 14,354원 × 1.5 × 20시간 = 430,620원</li>\n<li>만약 이 중 10시간이 야간(오후 10시 이후)이라면: 14,354원 × 0.5 × 10시간 = 71,770원 추가</li>\n<li>월 합계: 약 502,390원이 법정 연장·야간근로수당</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 내 수당 금액, AI가 직접 계산해드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">월급, 근로시간, 야근 패턴을 입력하면 법정수당과 차액을 즉시 계산합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '차액 계산 후 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">계산한 법정수당이 실제 수령액보다 많으면 차액을 청구할 수 있습니다.</strong></p>\n<ol>\n<li><strong>실제 수령액 확인</strong> — 급여명세서 또는 통장 입금 내역에서 연장·야간·휴일 수당 항목을 찾습니다. "포괄임금 포함"이라고만 기재된 경우, 포괄임금 중 해당 수당 상당액이 얼마인지 역산해야 합니다.</li>\n<li><strong>3년치 차액 집계</strong> — 임금 청구권 소멸시효는 3년입니다. 3년 이내 누적 차액을 집계하세요.</li>\n<li><strong>내용증명 또는 진정 접수</strong> — 회사에 서면으로 차액 지급을 요청하거나, 고용노동청에 임금체불 진정을 접수합니다.</li>\n</ol>\n<p>5인 미만 사업장은 연장·휴일근로 가산수당(50% 가산) 규정이 적용되지 않지만, 야간근로 가산(50%)은 적용됩니다. 본인 사업장 규모를 먼저 확인하세요.</p>',
      },
      {
        title: '2026년 지침으로 달라진 점 — 고정OT 약정도 차액 지급 의무',
        content:
          '<p><strong style="color:#1e3a5f">2026년 지침의 핵심은 고정OT(고정초과근무수당) 약정도 차액 지급 의무에서 벗어날 수 없다는 점입니다.</strong></p>\n<p>예를 들어 계약서에 "월 40시간 연장근무 포함 고정OT 50만원"이라고 명시한 경우라도, 실제로 50시간 연장근무를 했다면 추가 10시간분의 수당을 지급해야 합니다.</p>\n<ul>\n<li>약정 연장근로수당 50만원 (40시간 기준)</li>\n<li>실제 연장근로 50시간 × 법정 수당 계산</li>\n<li>차액 = 실제 수당 - 약정 수당 → 지급 의무 발생</li>\n</ul>\n<p>이 내용은 관련 기사에서 "고정OT 약정도 차액 지급이 원칙"으로 명시됐습니다. 포괄임금 계약서가 있다는 이유만으로 추가 수당 청구를 포기하지 마세요.</p>\n<p>더 자세한 내용은 <a href="/guide/wage/wage-pogualkeum-overtime-void-claim">포괄임금 무효 초과근무수당 청구</a>에서 확인하세요.</p>',
      },
    ],
    cases: [
      {
        title: '판례 — 통상임금 범위와 일비 포함 여부',
        summary:
          '대법원 2014다27807 사건(대법원, 2019.04.23 선고)에서 법원은 사용자가 근로자들에게 실제 사용 여부와 관계없이 근무일마다 지급한 일비는 소정근로의 대가로 정기적·일률적·고정적으로 지급된 것으로 통상임금에 포함된다고 판시했습니다. 통상임금 범위를 넓게 인정해 연장근로수당 계산의 기초를 높인 사례로, 회사가 임의로 통상임금 항목을 축소하면 차액 청구 대상이 될 수 있습니다.',
        takeaway:
          '비슷한 상황이라면 식대·직책수당 등 정기적으로 받는 수당이 통상임금에 포함되는지 확인하세요. 제외된 항목이 있다면 과거 3년치 차액 청구가 가능합니다.',
      },
    ],
    faq: [
      {
        question: '통상시급은 어떻게 계산하나요?',
        answer:
          '월 통상임금(기본급 + 고정 수당)을 월 소정근로시간(주 40시간 + 주휴 기준 월 209시간)으로 나누면 됩니다. 예를 들어 기본급 300만원이라면 300만원 ÷ 209시간 = 약 14,354원입니다.',
      },
      {
        question: '야근과 연장근로는 같은 건가요?',
        answer:
          '다릅니다. 연장근로는 1일 8시간 초과 또는 1주 40시간 초과 근무를 말하고, 야간근로는 오후 10시에서 오전 6시 사이 근무입니다. 야간에 연장근무를 하면 두 가산율이 모두 적용돼 통상시급의 2.0배를 받을 수 있습니다.',
      },
      {
        question: '고정OT 계약서에 서명했으면 추가 수당을 못 받나요?',
        answer:
          '아닙니다. 2026년 지침에 따라 실제 연장근로시간이 약정 시간을 초과하면 차액을 지급받을 권리가 있습니다. 포괄임금 계약 자체가 실제 수당보다 적으면 그 차액은 임금체불이 됩니다.',
      },
      {
        question: '5인 미만 사업장도 연장근로수당을 받을 수 있나요?',
        answer:
          '5인 미만 사업장은 연장·휴일근로 50% 가산 규정이 적용되지 않습니다. 그러나 야간근로 가산(50%)은 적용됩니다. 또한 최저임금은 사업장 규모와 관계없이 적용됩니다.',
      },
      {
        question: '소멸시효가 지난 수당도 청구할 수 있나요?',
        answer:
          '임금 청구권 소멸시효는 3년입니다. 3년이 지난 부분은 원칙적으로 청구할 수 없으므로, 발견 즉시 3년 이내 분부터 집계해서 청구하는 것이 중요합니다.',
      },
    ],
    internalLinks: [
      { label: '로앤가이드 홈', href: '/' },
      { label: '임금체불 가이드', href: '/guide/wage' },
      { label: '포괄임금 무효 초과근무수당 청구', href: '/guide/wage/wage-pogualkeum-overtime-void-claim' },
      { label: '부당해고 가이드', href: '/guide/dismissal' },
      { label: '퇴직금 가이드', href: '/guide/retirement' },
    ],
    cta: {
      text: '내 연장근로수당 차액, AI가 즉시 계산해드립니다.',
      link: '/chat?domain=wage',
    },
  },

  // ───────────────────────────────────────────
  // 8. wage-pogual-abolition-salary-impact
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'wage-pogual-abolition-salary-impact',
    keyword: '포괄임금제 폐지되면 내 연봉 줄어드나',
    questionKeyword: '포괄임금제 폐지되면 월급이 줄어드나요? 근로자에게 불리한가요?',
    ctaKeyword: '포괄임금 폐지 내 연봉 영향 분석 상담',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '포괄임금제 폐지되면 내 연봉 줄어드나? 5가지 Q&A | 로앤가이드',
      description:
        '포괄임금제 폐지 소식에 연봉이 줄까봐 걱정되시나요? 근로자에게는 불이익이 없거나 오히려 유리합니다. 5가지 질문으로 정확하게 지금 확인하세요.',
    },
    intro:
      '<p>"포괄임금제 폐지되면 우리 회사 야근수당 얼마나 더 내야 하나… 혹시 그만큼 기본급이 깎이는 거 아냐?" 인터넷에 이런 걱정 글들이 넘칩니다. 결론부터 말하면 근로자에게는 불이익이 없습니다. 오히려 지금보다 나아집니다. 2026년 4월 지침의 구조를 이해하면 왜 그런지 분명히 알 수 있습니다. 자주 묻는 5가지 질문으로 정리해드립니다.</p>',
    timelineSteps: [
      '1단계: 현재 내 포괄임금 약정 방식 확인',
      '2단계: 법정수당 vs. 약정액 비교',
      '3단계: 차액 발생 여부 판단',
    ],
    sections: [
      {
        title: '핵심 원칙 — 근로자는 항상 유리한 쪽이 적용된다',
        content:
          '<p><strong style="color:#1e3a5f">2026년 지침과 현행법의 핵심 원칙을 먼저 이해하면 걱정이 사라집니다.</strong></p>\n<p>근로기준법에는 "유리한 조건 우선의 원칙"이 있습니다. 개별 근로계약이나 취업규칙이 법정 기준보다 근로자에게 유리하면 그 조건을 따르고, 법정 기준보다 불리하면 법정 기준이 자동으로 적용됩니다.</p>\n<p><strong>포괄임금 폐지의 실제 영향</strong></p>\n<ul>\n<li><strong>경우 1: 약정액 &gt; 법정수당</strong> — 포괄임금 약정액이 실제 법정수당보다 많다면, 약정액대로 지급받습니다. 수령액 변화 없음.</li>\n<li><strong>경우 2: 약정액 &lt; 법정수당</strong> — 실제 연장근로수당이 약정액을 초과한다면, 차액을 추가로 지급받게 됩니다. 수령액 증가.</li>\n</ul>\n<p>두 경우 모두 근로자 입장에서는 동일하거나 더 유리합니다. 연봉이 줄어드는 경우는 없습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">결론: 포괄임금 제한으로 근로자의 법정수당 수령액이 줄어드는 상황은 법적으로 발생하지 않습니다.</blockquote>',
      },
      {
        title: 'Q&A 5가지 — 자주 묻는 질문',
        content:
          '<p><strong style="color:#1e3a5f">포괄임금 지침에 관해 가장 많이 묻는 질문을 정리했습니다.</strong></p>\n\n<p><strong>Q1. 포괄임금 폐지되면 회사가 기본급을 깎을 수 있나요?</strong></p>\n<p>아닙니다. 기존에 지급하던 기본급을 일방적으로 깎는 것은 근로조건 불이익 변경으로, 근로자 동의 없이는 불가능합니다(근로기준법 제94조). 오히려 포괄임금 지침 이후 차액이 추가로 지급돼야 하므로 수령액이 늘어날 수 있습니다.</p>\n\n<p><strong>Q2. 연장근로를 많이 하는데, 지금보다 더 받게 되나요?</strong></p>\n<p>그렇습니다. 포괄임금 약정액이 실제 법정 연장근로수당보다 적다면 차액을 추가로 받을 수 있습니다. 예를 들어 고정OT 50만원 계약인데 실제 법정 연장근로수당이 70만원이라면 20만원을 더 받게 됩니다.</p>\n\n<p><strong>Q3. 연장근로를 거의 안 하는데, 지금 받는 포괄수당을 반납해야 하나요?</strong></p>\n<p>아닙니다. 약정액이 법정수당보다 많은 경우에는 약정액대로 지급받습니다. 이미 받은 수당을 반납할 의무는 없습니다.</p>\n\n<p><strong>Q4. 회사가 지침 때문에 연장근로 금지 방침을 내세우면 어떻게 되나요?</strong></p>\n<p>합법적으로 연장근로를 줄이는 것은 회사의 권한입니다. 다만 이를 이유로 기존 직원을 해고하거나 근무조건을 불리하게 변경하면 별도의 법적 문제가 생깁니다. 업무량은 그대로인데 연장근로만 금지하면 사실상 임금 삭감이 되므로 주의가 필요합니다.</p>\n\n<p><strong>Q5. 경총에서 반발하고 있는데, 지침이 바뀔 수 있나요?</strong></p>\n<p>경총(한국경영자총협회)이 "정액수당제까지 금지는 사회적 합의 위배"라며 반발하고 있지만, 지침은 노사정 합의와 국정과제를 기반으로 시행됐습니다. 향후 세부 내용이 조정될 수 있으나, 근로자의 법정수당 청구권 자체는 변경되지 않습니다.</p>\n\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 내 포괄임금이 유리한지 불리한지 AI가 분석해드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">현재 연봉과 야근 패턴을 입력하면 차액과 청구 가능성을 즉시 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '통상임금을 낮게 잡으면 어떻게 되나?',
        content:
          '<p><strong style="color:#1e3a5f">포괄임금 오남용의 또 다른 패턴은 통상임금을 낮게 산정해 수당을 줄이는 것입니다.</strong></p>\n<p>일부 사업주는 식대, 직책수당 등을 통상임금에서 제외해 연장근로수당 계산의 기초를 낮춥니다. 이 경우 실제 받아야 할 수당보다 훨씬 적은 금액이 지급됩니다.</p>\n<p>통상임금에 포함되어야 하는 항목:</p>\n<ul>\n<li>기본급</li>\n<li>정기적으로 지급되는 식대 (예: 월 10만원 고정 식대)</li>\n<li>직책수당, 직무수당</li>\n<li>자격수당 (정기적·일률적 지급 시)</li>\n</ul>\n<p>통상임금 항목이 누락됐다면 과거 3년치 수당 차액을 청구할 수 있습니다. <a href="/guide/wage/wage-pogualkeum-overtime-void-claim">포괄임금 무효 초과근무수당 청구</a>에서 절차를 확인하세요.</p>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금계약도 최저임금 기준에는 예외 없다',
        summary:
          '대법원 2020다300299 사건(대법원, 2024.12.26 선고)에서 법원은 포괄임금계약에 따라 지급된 임금이 최저임금에 미달하는 경우 포괄임금계약이 유효하다고 볼 수 없으며, 사용자는 미달액을 지급해야 한다고 판시했습니다. 포괄임금 약정이 있어도 법정 기준(최저임금, 법정수당)보다 근로자에게 불리한 부분은 자동으로 법정 기준이 적용된다는 원칙을 재확인한 사례입니다.',
        takeaway:
          '비슷한 상황이라면 월급 총액을 실제 근무 시간으로 나눠 시급을 계산해보세요. 최저임금 이하라면 바로 고용노동청 진정을 검토하세요.',
      },
    ],
    faq: [
      {
        question: '포괄임금 폐지되면 야근 수당을 새로 협상해야 하나요?',
        answer:
          '별도 협상 없이 근로기준법상 법정수당이 자동 적용됩니다. 기존 약정액이 법정수당보다 적다면 차액을 청구할 수 있고, 많다면 기존 약정액대로 받습니다.',
      },
      {
        question: '회사가 연봉을 줄이겠다고 하면 동의해야 하나요?',
        answer:
          '아닙니다. 기존 임금을 일방적으로 삭감하려면 근로자의 동의가 필요합니다(근로기준법 제94조). 동의 없이 삭감하면 임금체불 또는 근로조건 위반으로 신고할 수 있습니다.',
      },
      {
        question: '정액급제 계약을 지금 당장 바꿔야 하나요?',
        answer:
          '지침은 새로 체결하는 계약에 우선 적용되며, 기존 계약은 순차적으로 정비가 이루어집니다. 하지만 현재도 실제 수당이 약정액보다 많다면 즉시 차액을 청구할 수 있습니다.',
      },
      {
        question: '5인 미만 사업장도 이 지침이 적용되나요?',
        answer:
          '지침 자체는 5인 이상 사업장에 주로 해당하지만, 최저임금은 규모 관계없이 모든 사업장에 적용됩니다. 포괄임금 약정이 최저임금에 미달하면 5인 미만도 차액 청구가 가능합니다.',
      },
    ],
    internalLinks: [
      { label: '로앤가이드 홈', href: '/' },
      { label: '임금체불 가이드', href: '/guide/wage' },
      { label: '포괄임금 무효 초과근무수당 청구', href: '/guide/wage/wage-pogualkeum-overtime-void-claim' },
      { label: '부당해고 가이드', href: '/guide/dismissal' },
      { label: '퇴직금 가이드', href: '/guide/retirement' },
    ],
    cta: {
      text: '포괄임금 폐지가 내 연봉에 미치는 영향, AI가 분석해드립니다.',
      link: '/chat?domain=wage',
    },
  },

  // ───────────────────────────────────────────
  // 9. wage-pogual-case-study-bakery
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'wage-pogual-case-study-bakery',
    keyword: '포괄임금 악용 5억원 임금체불 적발 사례',
    questionKeyword: '포괄임금 오남용으로 5억원 체불 적발된 사례, 내 회사도 해당될까요?',
    ctaKeyword: '포괄임금 오남용 사례 내 상황 비교 상담',
    type: '사례형',
    perspective: 'victim',
    meta: {
      title: '포괄임금 악용 5억원 체불 적발 사례로 보는 내 권리 | 로앤가이드',
      description:
        '모 베이커리 브랜드에서 고정OT 초과분 미지급으로 5.64억원 체불, 과태료 8억원이 부과됐습니다. 같은 패턴인지 확인하고 내 권리를 지금 확인하세요.',
    },
    intro:
      '<p>모 베이커리 프랜차이즈가 포괄임금 오남용으로 5억 6,400만원의 임금을 체불해 적발됐습니다. 고정 연장근로수당을 초과한 근무에 추가 수당을 주지 않고, 통상임금도 낮게 산정한 것이 원인이었습니다. 과태료만 약 8억원에 달했습니다. 이 사례가 남 일 같지 않다면, 내 회사도 같은 패턴인지 확인해보세요. 적발된 방식은 정해져 있습니다.</p>',
    timelineSteps: [
      '1단계: 적발 패턴 확인 — 내 사업장과 비교',
      '2단계: 차액 금액 추정',
      '3단계: 신고 경로 선택 및 접수',
    ],
    sections: [
      {
        title: '5억원 체불 사례, 어떤 방식으로 오남용했나',
        content:
          '<p><strong style="color:#1e3a5f">모 베이커리 프랜차이즈의 임금체불은 2가지 핵심 방식으로 이루어졌습니다.</strong></p>\n<ol>\n<li><strong>고정 연장근로수당 초과분 미지급</strong> — 계약서에 "월 OO시간 연장근무 포함"이라고 명시했지만, 실제로는 그 이상의 연장근무가 발생했습니다. 초과분에 대한 추가 수당은 전혀 지급하지 않았습니다.</li>\n<li><strong>통상임금 낮게 산정</strong> — 연장근로수당 계산의 기초가 되는 통상임금에서 일부 수당을 의도적으로 제외해, 법정 연장근로수당 자체를 낮췄습니다.</li>\n</ol>\n<p>이 두 가지 방식이 결합되면 실제 받아야 할 수당과 지급된 수당 사이의 격차가 크게 벌어집니다. 모 베이커리 브랜드에서는 이 격차가 누적돼 5억 6,400만원 규모의 체불로 이어졌습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">이 사례는 2026년 4월 9일 시행된 포괄임금 오남용 방지 지침의 배경이 된 대표적 사례입니다. 정부 최초의 포괄임금 관련 지침이 만들어진 이유이기도 합니다.</blockquote>',
      },
      {
        title: '내 사업장도 같은 패턴인지 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">아래 6가지 중 2개 이상 해당하면 유사한 오남용 패턴일 가능성이 높습니다.</strong></p>\n<ol>\n<li>계약서에 "월 OO시간 고정OT" 또는 "포괄임금 포함"이라고만 적혀 있다</li>\n<li>실제 야근 시간이 계약서의 고정OT 시간을 초과하는 달이 반복된다</li>\n<li>초과 야근에 대한 추가 수당을 받은 적이 없다</li>\n<li>급여명세서에 기본급과 수당 항목이 구분되지 않는다</li>\n<li>식대나 직책수당이 통상임금에 포함되지 않고 연장근로수당 계산에서 빠져 있다</li>\n<li>근로시간 기록(출퇴근 시스템 등)이 없거나 부정확하다</li>\n</ol>\n<p>2개 이상 해당하면 구체적인 차액 계산과 신고 검토가 필요합니다.</p>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 내 사업장의 오남용 패턴, AI가 분석해드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">체크리스트 결과를 입력하면 차액 추정과 신고 가능성을 즉시 확인합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '적발되면 사업주가 물어야 하는 것들',
        content:
          '<p><strong style="color:#1e3a5f">포괄임금 오남용이 적발되면 사업주는 임금 체불액 외에도 상당한 과태료를 부담합니다.</strong></p>\n<ul>\n<li><strong>체불 임금 전액 + 지연이자 20%</strong> — 민사상 청구 시 연 20%의 지연손해금이 붙습니다.</li>\n<li><strong>임금명세서 미교부 과태료</strong> — 1회당 최대 500만원. 미교부 건수가 많으면 누적됩니다.</li>\n<li><strong>근로기준법 위반 형사 처벌</strong> — 임금체불은 3년 이하 징역 또는 3,000만원 이하 벌금(근로기준법 제109조). 피해 근로자가 고소하면 형사 절차가 진행됩니다.</li>\n<li><strong>고용노동부 특별근로감독 대상</strong> — 대규모 체불이 적발되면 해당 사업장 전체에 대한 근로감독이 이루어질 수 있습니다.</li>\n</ul>\n<p>모 베이커리 프랜차이즈의 경우처럼 체불액(5.64억원)보다 과태료(약 8억원)가 더 클 수 있으므로, 사업주 입장에서도 조기 시정이 경제적으로 유리합니다.</p>',
      },
      {
        title: '신고 전 해야 할 3가지 준비',
        content:
          '<p><strong style="color:#1e3a5f">신고 전 증거와 금액을 먼저 정리하면 절차가 빠르게 진행됩니다.</strong></p>\n<ol>\n<li><strong>실제 근로시간 기록 확보</strong> — 3개월 이상의 출퇴근 시간 기록(자체 메모, 업무 메신저 기록, PC 로그 등)을 준비합니다.</li>\n<li><strong>급여명세서 전부 확보</strong> — 입사 이후 발급받은 모든 명세서 또는 통장 입금 내역을 준비합니다.</li>\n<li><strong>차액 계산</strong> — 실제 연장근로시간에 대한 법정수당을 계산하고, 실제 수령액과 비교해 차액을 산출합니다. AI 상담 또는 노무사 상담을 활용하면 편리합니다.</li>\n</ol>\n<p>준비가 됐다면 고용노동청에 임금체불 진정을 접수하거나, 회사에 먼저 내용증명으로 지급 요청을 할 수 있습니다. 자세한 절차는 <a href="/guide/wage">임금체불 가이드</a>를 참고하세요.</p>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금계약과 소정근로시간, 탈법행위 무효',
        summary:
          '대법원 2023다206138 사건(대법원, 2024.10.25 선고)에서 법원은 소정근로시간을 정한 근로관계 당사자들의 주된 목적이 최저임금법의 적용을 회피하는 것이었고 소정근로시간과 실제 근로시간 사이에 상당한 불일치가 있다면, 그 소정근로시간 합의는 탈법행위로서 무효라고 판시했습니다. 포괄임금 계약으로 실제 근로시간을 낮춰 수당을 줄이려는 시도가 법원에서 무효 판결을 받은 사례로, 포괄임금 오남용의 법적 한계를 명확히 보여줍니다.',
        takeaway:
          '비슷한 상황이라면 계약서상 소정근로시간과 실제 근무 시간의 차이를 기록하세요. 탈법적 약정 무효를 주장할 수 있는 핵심 증거가 됩니다.',
      },
    ],
    faq: [
      {
        question: '모 베이커리 사례처럼 나도 신고할 수 있나요?',
        answer:
          '네. 고정OT 초과 야근을 했는데 추가 수당을 받지 못했거나, 통상임금이 낮게 산정됐다면 고용노동청에 임금체불 진정을 접수할 수 있습니다. 퇴사 후 3년 이내라면 가능합니다.',
      },
      {
        question: '신고하면 회사가 망할 수도 있나요?',
        answer:
          '신고가 목적이 아니라 차액 수령이 목적입니다. 대부분의 경우 노동청 조사에서 합의가 이루어집니다. 체불액 전부를 즉시 납부하기 어려운 사업주도 분할 지급 합의가 가능합니다.',
      },
      {
        question: '여러 명이 함께 신고하면 더 효과적인가요?',
        answer:
          '집단 진정(복수 근로자의 공동 진정)은 노동청이 우선 처리하는 경향이 있습니다. 같은 상황의 동료와 함께 진정서를 제출하면 절차가 빠를 수 있습니다.',
      },
      {
        question: '과태료는 사업주가 내는 건가요? 저는 어떻게 받나요?',
        answer:
          '과태료는 사업주가 국가에 납부하는 것입니다. 근로자는 체불된 임금과 지연이자를 별도로 청구합니다. 과태료 부과 여부와 관계없이 임금 청구는 별도로 진행합니다.',
      },
      {
        question: '회사 규모가 작으면 적발이 안 되나요?',
        answer:
          '고용노동부 감독은 대형 프랜차이즈·직종별로 진행되며 소규모 사업장도 개별 진정이 접수되면 조사가 시작됩니다. 규모와 관계없이 임금체불은 법 위반입니다.',
      },
      {
        question: '임금체불 외에 퇴직금도 같이 청구할 수 있나요?',
        answer:
          '퇴직금이 월급에 포함됐다는 계약 조항이 있다면 그 조항은 무효이므로 별도 청구가 가능합니다. 통상임금이 낮게 산정됐다면 퇴직금도 재계산해 차액을 청구할 수 있습니다. <a href="/guide/retirement">퇴직금 가이드</a>를 참고하세요.',
      },
    ],
    internalLinks: [
      { label: '로앤가이드 홈', href: '/' },
      { label: '임금체불 가이드', href: '/guide/wage' },
      { label: '포괄임금 무효 초과근무수당 청구', href: '/guide/wage/wage-pogualkeum-overtime-void-claim' },
      { label: '부당해고 가이드', href: '/guide/dismissal' },
      { label: '퇴직금 가이드', href: '/guide/retirement' },
    ],
    cta: {
      text: '내 사업장이 같은 오남용 패턴인지 AI가 즉시 분석해드립니다.',
      link: '/chat?domain=wage',
    },
  },
];
