import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 2026년 4월 고용노동부 포괄임금 오남용 방지 지침 추가 스포크 4개
//
// 10. wage-pogual-employer-action-3steps
//     이 페이지는 [사업주·인사담당자]의 [2026년 4월 포괄임금 지침 변경으로 임금체계 수정이
//     필요한 상황]에서 [임금대장·명세서 재정비, 근로시간 기록 도입, 포괄약정 재검토 3가지를
//     단계별로 이행하는 준비]를 돕는 페이지다.
//
// 11. wage-pogual-fixed-vs-ot-difference
//     이 페이지는 [포괄임금 유형을 구분하려는 근로자·사업주]의 [정액급제·정액수당제·고정OT 차이를
//     모르는 상황]에서 [어떤 유형이 위법이고 어떤 경우만 조건부 합법인지 비교표로 파악하는 준비]를
//     돕는 페이지다.
//
// 12. wage-pogual-deemed-working-hours
//     이 페이지는 [출장·외근이 잦은 근로자 또는 사업주]의 [포괄임금 대안을 찾는 상황]에서
//     [근로기준법 제58조 간주근로시간제·재량근로시간제의 요건과 적용 방법을 파악하는 준비]를
//     돕는 페이지다.
//
// 13. wage-pogual-supreme-court-void-cases
//     이 페이지는 [포괄임금 무효 판례를 확인하려는 근로자]의 [대법원 판례 3개를 통해 어떤 경우에
//     포괄임금이 무효 처리되는지 파악하는 상황]에서 [실제 판결 내용을 근거로 차액 청구 가능성을
//     점검하는 준비]를 돕는 페이지다.
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch26Extra_10to13: SpokePage[] = [
  // ───────────────────────────────────────────
  // 10. wage-pogual-employer-action-3steps
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'wage-pogual-employer-action-3steps',
    keyword: '포괄임금제 지침 변경 사업주 대응 3가지',
    questionKeyword: '2026 포괄임금 지침 변경 후 사업주가 해야 할 일은?',
    ctaKeyword: '포괄임금 지침 대응 사업주 상담',
    type: '단계형',
    perspective: 'employer',
    meta: {
      title: '2026 포괄임금 지침 사업주가 바꿔야 할 3가지 | 로앤가이드',
      description:
        '2026년 4월부터 정액급제·정액수당제는 위법입니다. 임금대장 재정비, 근로시간 기록 시스템, 포괄약정 재검토 — 사업주가 지금 해야 할 3단계를 지금 확인하세요.',
    },
    intro:
      '<p>2026년 4월, 고용노동부가 포괄임금 오남용 방지 지도 지침을 시행하면서 기존의 "총액 OOO원 지급" 방식은 더 이상 허용되지 않습니다. 직원이 10명이든 100명이든, 서면 근로계약서에 포괄임금 약정이 있다고 해서 면책되지 않습니다. 특히 지침 위반이 확인되면 근로감독관이 시정 지도에 나설 수 있고, 근로자의 차액 청구 소송으로 이어질 수 있습니다. 사업주라면 지금 당장 이 3가지를 점검하고 수정하세요.</p>',
    timelineSteps: [
      '1단계: 임금대장·임금명세서 기본급/수당 항목 재정비',
      '2단계: 근로시간 기록·관리 시스템 도입',
      '3단계: 포괄임금 약정 재검토 및 차액 정산 계획 수립',
    ],
    cta: { text: '포괄임금 지침 대응 방법 AI로 무료 확인하기', link: '/chat?domain=wage' },
    sections: [
      {
        title: '2026 지침 핵심: 사업주에게 무엇이 달라지나',
        content:
          '<p><strong style="color:#1e3a5f">2026년 4월 시행 지침에서 사업주에게 부과된 핵심 의무는 3가지입니다.</strong></p>\n<ol>\n<li><strong>임금 항목 구분 기재 의무</strong> — 근로기준법 제48조에 따라 기본급, 연장근로수당, 야간근로수당, 휴일근로수당을 임금명세서에 개별 항목으로 명시해야 합니다. "기본급 포함 각종 수당 일체"와 같은 총액 표기는 위법입니다.</li>\n<li><strong>근로시간 기록·관리 의무</strong> — 소정 근로시간, 연장·야간·휴일 근로시간을 구분하여 기록·보관해야 합니다. 기록이 없으면 근로자가 주장하는 초과 근무 시간이 사실로 추정될 수 있어 사업주에게 불리합니다.</li>\n<li><strong>차액 지급 의무</strong> — 고정 OT 약정을 체결한 경우에도 실제 연장근로수당이 고정액을 초과하면 차액을 별도로 지급해야 합니다. 미지급 시 임금체불에 해당하고, 3년치 소급 청구가 가능합니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 포괄임금 약정서가 있어도 지침 위반이면 차액 청구와 시정 지도를 피할 수 없습니다.</blockquote>',
      },
      {
        title: '1단계 — 임금대장·임금명세서 항목 재정비',
        content:
          '<p><strong style="color:#1e3a5f">가장 먼저, 매월 발급하는 임금명세서부터 바꿔야 합니다.</strong></p>\n<p>지침이 요구하는 임금명세서 항목 구성은 다음과 같습니다.</p>\n<ul>\n<li><strong>기본급</strong> — 소정근로에 대한 순수 기본급</li>\n<li><strong>연장근로수당</strong> — 통상임금의 50% 가산(근로기준법 제56조 제1항)</li>\n<li><strong>야간근로수당</strong> — 오후 10시~오전 6시 근무 시 50% 가산</li>\n<li><strong>휴일근로수당</strong> — 8시간 이내 50%, 8시간 초과 100% 가산</li>\n<li><strong>기타 법정 수당</strong> — 주휴수당, 연차미사용수당 등</li>\n</ul>\n<p>급여 프로그램이 총액 입력 방식이라면 항목별 입력 방식으로 변경해야 합니다. 중소기업의 경우 고용노동부 노동포털(labor.moel.go.kr)에서 임금명세서 표준 서식을 무료로 내려받을 수 있습니다.</p>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 지침 대응 방법, AI가 사업주 입장에서 안내해드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">임금체계 재정비 과정에서 발생할 수 있는 법적 위험을 미리 파악하세요.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '2단계 — 근로시간 기록·관리 시스템 도입',
        content:
          '<p><strong style="color:#1e3a5f">근로시간 기록이 없으면 분쟁 발생 시 사업주가 불리합니다.</strong></p>\n<p>근로시간 기록 방법은 사업장 규모에 따라 다르게 선택할 수 있습니다.</p>\n<ul>\n<li><strong>소규모 사업장(5인 미만)</strong> — 엑셀 출퇴근 기록부, 카카오워크 메신저 출퇴근 기록 활용</li>\n<li><strong>중소기업(5~49인)</strong> — 전자 출퇴근 시스템(지문인식, QR코드) 또는 HR SaaS 도입</li>\n<li><strong>사업장 밖 근무 많은 경우</strong> — 근로기준법 제58조에 따른 간주근로시간제 도입 검토(별도 절차 필요)</li>\n</ul>\n<p>근로시간 기록은 최소 3년간 보관해야 합니다(근로기준법 제42조). 기록 없이 분쟁이 생기면 근로자가 주장하는 초과 근무 시간이 증거로 작용할 수 있습니다.</p>',
      },
      {
        title: '3단계 — 포괄임금 약정 재검토 및 차액 정산',
        content:
          '<p><strong style="color:#1e3a5f">기존 포괄임금 약정이 있다면 유효성 여부를 반드시 검토해야 합니다.</strong></p>\n<p>합법적인 포괄임금 약정이 성립하려면 ①근로시간 산정이 어려운 업무여야 하고, ②근로자에게 불이익이 없어야 하며, ③약정 금액이 법정 수당보다 적어서는 안 됩니다(대법원 2015도13909, 2017.07.11 선고). 이 세 가지 중 하나라도 충족하지 못하면 약정이 무효가 될 수 있습니다.</p>\n<p>차액 정산 절차는 다음과 같이 진행합니다.</p>\n<ol>\n<li><strong>지난 3년간 실제 연장·야간·휴일 근로 시간 역산</strong> — 출퇴근 기록·PC 로그 등으로 실근로시간을 파악합니다.</li>\n<li><strong>법정 수당 계산 후 지급액과 비교</strong> — 차액이 발생한 직원에게 자진 지급하는 것이 근로감독 시 유리합니다.</li>\n<li><strong>새 근로계약서 작성</strong> — 포괄임금 약정을 삭제하고 기본급·수당 분리 방식으로 재작성합니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">경총 우려: 경영자총협회는 정액수당제까지 위법으로 보는 것은 과도하다는 입장이나, 현행 지침과 판례는 법정 수당 미달 시 차액 지급을 의무화하고 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금계약과 최저임금 기준',
        summary:
          '대법원 2020다300299 사건(대법원, 2024.12.26 선고)에서 법원은 포괄임금계약에 따라 지급된 임금이 최저임금에 미달하는 경우 포괄임금계약이 유효하다고 볼 수 없으며 사용자는 미달액을 지급해야 한다고 판시했습니다. 또한 정액급 포괄임금계약 체결 시에도 실제 근로시간 기준 법정수당이 약정액을 초과하면 차액 지급 의무가 발생한다는 원칙을 명확히 했습니다. 사업주가 포괄임금 약정만 믿고 차액 지급을 거부하면 임금체불 책임을 면할 수 없습니다.',
        takeaway:
          '비슷한 상황이라면 현재 포괄임금 약정 총액을 실제 근로시간으로 나눠 시급을 계산해보세요. 최저임금에 미달하면 차액 지급 의무가 발생하므로 자진 정산이 근로감독 리스크를 줄이는 가장 좋은 방법입니다.',
      },
    ],
    faq: [
      {
        question: '기존 직원과 포괄임금 약정이 있는데, 소급해서 차액을 줘야 하나요?',
        answer:
          '네, 소급 지급 의무가 발생할 수 있습니다. 임금 청구권의 소멸시효는 3년으로, 근로자가 퇴사 후 3년 이내에 청구하면 사업주는 차액을 지급해야 합니다. 재직 중인 직원도 마찬가지입니다. 자진 시정이 근로감독 처리에 유리하게 작용합니다.',
      },
      {
        question: '5인 미만 사업장도 이번 지침 적용을 받나요?',
        answer:
          '임금명세서 교부 의무(근로기준법 제48조)는 모든 사업장에 적용됩니다. 다만 연장·야간·휴일 가산수당은 4인 이하 사업장에는 적용이 제외될 수 있습니다. 그러나 최저임금 미달 시 포괄임금계약이 무효가 되는 원칙은 모든 사업장에 동일하게 적용됩니다.',
      },
      {
        question: '포괄임금 약정을 없애면 직원 급여가 오를 수밖에 없는데 어떻게 하나요?',
        answer:
          '실근로시간을 정확히 측정한 뒤 기본급·수당을 분리하는 방식으로 재설계할 수 있습니다. 연장근로 자체를 줄이거나, 근로기준법 제58조의 간주근로시간제·재량근로시간제를 도입하면 실질적인 인건비 부담을 낮출 수 있습니다.',
      },
      {
        question: '이번 지침을 위반하면 어떤 처벌을 받나요?',
        answer:
          '임금명세서 미교부 시 최대 500만원의 과태료가 부과됩니다(근로기준법 제116조). 차액 미지급이 임금체불로 인정되면 3년 이하 징역 또는 3천만원 이하 벌금에 처할 수 있습니다(근로기준법 제109조). 또한 근로감독관이 시정 지도를 하며, 시정 기한 내 이행하지 않으면 형사 고발이 가능합니다.',
      },
      {
        question: '간주근로시간제는 어떻게 도입하나요?',
        answer:
          '근로기준법 제58조 제1항·제2항에 따라 사업장 밖에서 근로하여 근로시간 산정이 어려운 경우 소정근로시간을 근로한 것으로 간주할 수 있습니다. 도입 시 근로자 대표와의 서면 합의가 필요하며, 고용노동청에 신고 또는 취업규칙에 규정하는 절차를 거쳐야 합니다.',
      },
    ],
    internalLinks: [
      { label: '로앤가이드 홈', href: '/' },
      { label: '임금체불 가이드', href: '/guide/wage' },
      { label: '포괄임금 초과분 차액 청구 방법', href: '/guide/wage/wage-pogualkeum-overtime-void-claim' },
      { label: '해고·권고사직 가이드', href: '/guide/dismissal' },
      { label: '퇴직금 가이드', href: '/guide/retirement' },
    ],
  },

  // ───────────────────────────────────────────
  // 11. wage-pogual-fixed-vs-ot-difference
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'wage-pogual-fixed-vs-ot-difference',
    keyword: '포괄임금제 종류 비교 정액급제 고정OT 차이',
    questionKeyword: '정액급제 정액수당제 고정OT 차이가 뭔가요?',
    ctaKeyword: '포괄임금 유형 분석 상담',
    type: '비교형',
    perspective: 'general',
    meta: {
      title: '포괄임금제 3가지 유형 비교: 합법과 위법 구분법 | 로앤가이드',
      description:
        '정액급제, 정액수당제, 고정OT 중 어느 게 위법인지 헷갈리시나요? 2026년 지침 기준 3가지 유형별 합법·위법 판단 기준을 지금 확인하세요.',
    },
    intro:
      '<p>"포괄임금제가 불법이라고 하던데 제 계약이 해당하나요?" 이 질문에 답하려면 먼저 자신의 임금 계약이 어떤 유형인지 파악해야 합니다. 포괄임금은 크게 정액급제, 정액수당제, 고정OT 세 가지 방식으로 나뉘며, 유형마다 위법 여부의 기준이 다릅니다. 2026년 4월 고용노동부 지침은 이 세 가지를 명확히 구분하여 각각의 합법·위법 기준을 제시했습니다. 아래 비교를 통해 내 계약이 어디에 해당하는지 확인해보세요.</p>',
    timelineSteps: [
      '1단계: 내 근로계약서에서 임금 약정 방식 확인',
      '2단계: 정액급제·정액수당제·고정OT 중 해당 유형 파악',
      '3단계: 유형별 위법 여부 및 차액 청구 가능성 판단',
    ],
    cta: { text: '내 포괄임금 유형 AI로 무료 분석하기', link: '/chat?domain=wage' },
    sections: [
      {
        title: '포괄임금 3가지 유형 비교표',
        content:
          '<p><strong style="color:#1e3a5f">2026년 지침 기준으로 3가지 유형을 비교합니다.</strong></p>\n<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:16px 0">\n<thead>\n<tr style="background:#1e3a5f;color:#fff">\n<th style="padding:10px 8px;text-align:left">유형</th>\n<th style="padding:10px 8px;text-align:left">정의</th>\n<th style="padding:10px 8px;text-align:left">2026 지침 판단</th>\n</tr>\n</thead>\n<tbody>\n<tr style="border-bottom:1px solid #ddd">\n<td style="padding:10px 8px"><strong>정액급제</strong></td>\n<td style="padding:10px 8px">기본급과 법정 수당을 구분 없이 총액으로 지급</td>\n<td style="padding:10px 8px;color:#c0392b"><strong>원칙적 위법</strong></td>\n</tr>\n<tr style="border-bottom:1px solid #ddd;background:#f9f9f9">\n<td style="padding:10px 8px"><strong>정액수당제</strong></td>\n<td style="padding:10px 8px">기본급은 따로 두되, 수당 항목별 미구분 총액 지급</td>\n<td style="padding:10px 8px;color:#e67e22"><strong>조건부 위법</strong></td>\n</tr>\n<tr style="border-bottom:1px solid #ddd">\n<td style="padding:10px 8px"><strong>고정OT</strong></td>\n<td style="padding:10px 8px">연장근로 시간을 사전 고정하고 그에 해당하는 수당 지급</td>\n<td style="padding:10px 8px;color:#27ae60"><strong>조건부 합법</strong></td>\n</tr>\n</tbody>\n</table>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 어떤 유형이든 실제 법정수당이 약정액보다 많으면 차액 지급은 의무입니다.</blockquote>',
      },
      {
        title: '정액급제 — 왜 위법인가',
        content:
          '<p><strong style="color:#1e3a5f">정액급제는 기본급과 법정수당을 구분하지 않아 근로자가 자신의 수당 내역을 알 수 없게 만드는 방식입니다.</strong></p>\n<p>예시: "월급 300만원 (제수당 포함)" — 이 한 줄이 정액급제입니다. 근로기준법 제48조는 임금명세서에 임금 항목별 금액을 명시하도록 의무화하고 있으므로, 이 방식은 명세서 교부 의무 위반이자 임금 구분 기재 의무 위반에 해당합니다.</p>\n<p>정액급제의 문제점:</p>\n<ul>\n<li>연장·야간·휴일 수당이 얼마인지 근로자가 알 수 없음</li>\n<li>최저임금 위반 여부를 계산할 기준이 없음</li>\n<li>퇴직금 산정 기준(평균임금)을 정확히 산출하기 어려움</li>\n</ul>',
      },
      {
        title: '정액수당제 — 어떤 경우에 위법이 되는가',
        content:
          '<p><strong style="color:#1e3a5f">정액수당제는 기본급은 분리하되 각 수당 항목을 일괄 묶어 정액으로 지급하는 방식입니다.</strong></p>\n<p>예시: "기본급 200만원 + 제수당 포함 100만원" — 수당 100만원 안에 연장·야간·휴일 수당이 혼재된 경우입니다. 2026년 지침은 수당도 항목별로 구분 기재할 것을 요구하므로, 이 방식도 원칙적으로 위법입니다.</p>\n<p>예외적으로 합법이 되려면:</p>\n<ul>\n<li>수당 항목별 금액이 취업규칙·근로계약서에 명시되어 있고</li>\n<li>실제 법정수당보다 약정액이 같거나 많아야 하며</li>\n<li>근로시간 산정이 어려운 업종에 해당해야 합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 내 계약이 어떤 유형인지 모르겠다면</strong></p>\n<p style="margin:0;font-size:0.95em">근로계약서 내용을 AI에게 설명하면 유형 분류와 차액 청구 가능성을 바로 확인해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '고정OT — 합법이 되는 3가지 조건',
        content:
          '<p><strong style="color:#1e3a5f">고정OT(Fixed OT)는 매월 일정 시간의 연장근로를 가정하고 그에 해당하는 수당을 고정으로 지급하는 방식입니다.</strong></p>\n<p>고정OT가 합법이 되려면 다음 3가지 조건을 모두 충족해야 합니다.</p>\n<ol>\n<li><strong>약정 연장근로 시간이 명시되어야 합니다</strong> — "월 20시간 연장근로에 해당하는 수당 XX만원"과 같이 시간과 금액이 모두 특정되어야 합니다.</li>\n<li><strong>실제 연장근로가 고정액을 초과하면 차액을 지급해야 합니다</strong> — 고정OT가 합법이라도 실근로시간이 약정 시간을 초과하면 추가 수당을 지급해야 합니다.</li>\n<li><strong>최저임금 기준을 충족해야 합니다</strong> — 기본급 기준 통상시급이 최저임금(2026년 기준 10,030원/시간)에 미달하면 고정OT 약정 자체가 무효가 됩니다(대법원 2020다300299).</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 고정OT 약정이 있어도 초과분 차액 미지급은 임금체불로 신고할 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금계약 유효 요건',
        summary:
          '대법원 2015도13909 사건(대법원, 2017.07.11 선고)에서 법원은 포괄임금제에 의한 임금지급계약이 유효하기 위해서는 근로시간 산정이 어려운 경우여야 하고, 근로자에게 불이익이 없으며 여러 사정에 비추어 정당하다고 인정될 때에 한해 유효하다고 판시했습니다. 포괄임금에 관한 약정 성립 여부는 계약 문구뿐 아니라 임금 지급 관행, 업무 성질 등 제반 사정을 종합하여 판단해야 한다고 명시했습니다.',
        takeaway:
          '비슷한 상황이라면 내 계약이 정액급제·정액수당제·고정OT 중 어느 유형인지 파악하고, 법정수당 미달 여부를 확인하세요. 유형에 따라 차액 청구 가능성이 달라집니다.',
      },
    ],
    faq: [
      {
        question: '근로계약서에 "포괄임금"이라는 단어가 없는데 포괄임금 약정인가요?',
        answer:
          '계약서에 "포괄임금"이라는 표현이 없어도 기본급과 법정수당이 구분되지 않고 총액으로만 기재되어 있다면 사실상 정액급제에 해당합니다. 판례는 명칭이 아니라 실질 지급 방식으로 포괄임금 여부를 판단합니다.',
      },
      {
        question: '고정OT 월 30시간 약정인데 실제로는 50시간 일했습니다. 차액을 받을 수 있나요?',
        answer:
          '네, 받을 수 있습니다. 초과 20시간에 해당하는 연장근로수당(통상시급 × 1.5 × 20시간)을 청구할 수 있습니다. 출퇴근 기록, 업무 메신저 로그, 이메일 발신 시간 등이 증거가 됩니다.',
      },
      {
        question: '저는 재량업무라서 포괄임금이 합법이라고 들었는데 맞나요?',
        answer:
          '재량근로시간제는 근로기준법 제58조 제3항에 근거를 두며, 이를 도입하려면 노사 서면 합의와 고용노동부 지정 업무 해당 여부 확인이 필요합니다. 단순히 "재량업무"라고 해서 자동으로 포괄임금이 합법이 되는 것은 아닙니다.',
      },
      {
        question: '정액급제로 3년간 일했는데 지금 퇴사 후에도 차액을 청구할 수 있나요?',
        answer:
          '퇴사일로부터 3년 이내라면 청구할 수 있습니다. 임금 청구권의 소멸시효는 3년이므로(근로기준법 제49조), 퇴사 후에도 3년이 지나지 않았다면 고용노동청 진정 또는 민사소송으로 차액을 요구할 수 있습니다.',
      },
    ],
    internalLinks: [
      { label: '로앤가이드 홈', href: '/' },
      { label: '임금체불 가이드', href: '/guide/wage' },
      { label: '포괄임금 초과분 차액 청구 방법', href: '/guide/wage/wage-pogualkeum-overtime-void-claim' },
      { label: '해고·권고사직 가이드', href: '/guide/dismissal' },
      { label: '퇴직금 가이드', href: '/guide/retirement' },
    ],
  },

  // ───────────────────────────────────────────
  // 12. wage-pogual-deemed-working-hours
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'wage-pogual-deemed-working-hours',
    keyword: '사업장 밖 간주근로시간제 포괄임금 대안',
    questionKeyword: '출장·외근 많을 때 포괄임금 대신 간주근로시간제 도입하면 되나요?',
    ctaKeyword: '간주근로시간제 도입 상담',
    type: '대안형',
    perspective: 'general',
    meta: {
      title: '간주근로시간제란? 포괄임금 대안 3가지 완전 정리 | 로앤가이드',
      description:
        '포괄임금제 대신 쓸 수 있는 합법적 대안, 알고 계신가요? 근로기준법 제58조 간주근로·재량근로시간제 요건과 도입 절차를 지금 확인하세요.',
    },
    intro:
      '<p>영업직, 외근직, 출장이 잦은 직종에서 사업주들이 포괄임금을 선호해온 이유는 하나입니다. 밖에 나가면 몇 시간 일하는지 정확히 알 수 없다는 것이죠. 그런데 2026년 지침으로 기존 포괄임금 방식이 위법으로 정리되면서, 이제는 합법적인 대안을 찾아야 하는 상황이 됐습니다. 근로기준법 제58조에는 포괄임금이 아니면서도 근로시간 산정 어려움을 해결할 수 있는 제도가 이미 마련되어 있습니다. 어떤 요건이 필요한지 정리해드립니다.</p>',
    timelineSteps: [
      '1단계: 현재 업무가 근로시간 산정 어려운 유형인지 확인',
      '2단계: 간주근로시간제(제58조 제1·2항) vs 재량근로시간제(제3항) 선택',
      '3단계: 노사 서면 합의 및 취업규칙 반영',
    ],
    cta: { text: '간주근로시간제 도입 가능 여부 AI로 무료 확인하기', link: '/chat?domain=wage' },
    sections: [
      {
        title: '왜 포괄임금 대신 간주근로시간제를 써야 하나',
        content:
          '<p><strong style="color:#1e3a5f">포괄임금과 간주근로시간제는 목적은 비슷하지만 법적 근거와 요건이 다릅니다.</strong></p>\n<p>포괄임금은 판례로 인정된 관행으로, 요건이 까다롭고 지침 변경으로 위법 범위가 넓어졌습니다. 반면 간주근로시간제는 근로기준법 제58조에 명문화된 제도로, 요건을 갖추면 법적 안정성이 훨씬 높습니다.</p>\n<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:16px 0">\n<thead>\n<tr style="background:#1e3a5f;color:#fff">\n<th style="padding:10px 8px;text-align:left">구분</th>\n<th style="padding:10px 8px;text-align:left">포괄임금</th>\n<th style="padding:10px 8px;text-align:left">간주근로시간제</th>\n</tr>\n</thead>\n<tbody>\n<tr style="border-bottom:1px solid #ddd">\n<td style="padding:10px 8px"><strong>법적 근거</strong></td>\n<td style="padding:10px 8px">판례 인정(조건부)</td>\n<td style="padding:10px 8px">근로기준법 제58조</td>\n</tr>\n<tr style="border-bottom:1px solid #ddd;background:#f9f9f9">\n<td style="padding:10px 8px"><strong>2026 지침 영향</strong></td>\n<td style="padding:10px 8px">위법 범위 확대</td>\n<td style="padding:10px 8px">영향 없음</td>\n</tr>\n<tr style="border-bottom:1px solid #ddd">\n<td style="padding:10px 8px"><strong>도입 절차</strong></td>\n<td style="padding:10px 8px">계약서 약정</td>\n<td style="padding:10px 8px">노사 서면 합의 필요</td>\n</tr>\n</tbody>\n</table>',
      },
      {
        title: '간주근로시간제 — 제58조 제1·2항',
        content:
          '<p><strong style="color:#1e3a5f">사업장 밖에서 근로하여 근로시간 산정이 어려운 경우에 적용됩니다.</strong></p>\n<p><strong>제1항 (소정근로시간 간주)</strong>: 사업장 밖 근로로 근로시간 산정이 어려운 경우, 소정근로시간(예: 하루 8시간)을 근로한 것으로 간주합니다. 별도 합의 없이 취업규칙 규정으로 적용 가능합니다.</p>\n<p><strong>제2항 (업무 수행에 통상 필요한 시간 간주)</strong>: 업무 수행에 통상 필요한 시간이 소정근로시간보다 많은 경우, 노사 서면 합의로 그 시간을 근로한 것으로 간주할 수 있습니다.</p>\n<p>적용 가능한 업무 예시:</p>\n<ul>\n<li>출장, 외근, 영업 방문이 주된 업무인 경우</li>\n<li>재택근무·원격근무로 출퇴근 시간 파악이 어려운 경우</li>\n<li>이동 중 전화 통화·보고서 작성이 잦은 경우</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 사업장 밖이라도 실제로 근로시간 산정이 가능한 경우에는 간주근로시간제를 적용할 수 없습니다(스마트폰·GPS 위치 확인 가능한 경우 등).</blockquote>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 우리 회사에 간주근로시간제가 맞는지 AI가 판단해드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">업무 유형과 규모를 알려주시면 적합한 제도와 도입 절차를 안내해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '재량근로시간제 — 제58조 제3항',
        content:
          '<p><strong style="color:#1e3a5f">업무 수행 방법과 시간 배분을 근로자 재량에 맡기는 경우에 적용됩니다.</strong></p>\n<p>재량근로시간제는 법이 정한 특정 업무에만 적용되며, 노사 서면 합의가 반드시 필요합니다. 합의된 시간을 근로한 것으로 간주하며, 실제 근로시간과 무관하게 약정 시간 기준으로 임금을 지급합니다.</p>\n<p>법정 재량근로 업무 (근로기준법 시행령 제31조):</p>\n<ol>\n<li>신상품·신기술 연구개발</li>\n<li>정보처리시스템 설계·분석</li>\n<li>신문, 방송, 출판 기사의 취재·편성·편집</li>\n<li>의복, 실내장식 등 디자인</li>\n<li>방송 프로그램, 영화 프로듀서</li>\n<li>증권 투자분석(애널리스트)</li>\n<li>대학에서의 연구 업무</li>\n</ol>\n<p>위 7가지 업무 외에는 재량근로시간제를 적용할 수 없습니다. AI·IT 스타트업이나 크리에이터 업종에서 "재량업무라 포괄임금 가능"이라고 주장하는 경우가 많지만, 법정 업무 목록에 해당하지 않으면 인정되지 않습니다.</p>',
      },
      {
        title: '도입 절차 — 3단계로 진행하세요',
        content:
          '<p><strong style="color:#1e3a5f">간주근로시간제·재량근로시간제 도입은 다음 3단계를 거쳐야 합니다.</strong></p>\n<ol>\n<li><strong>노사 서면 합의 체결</strong> — 근로자 대표(과반수 노동조합 또는 근로자 대표)와 제58조 요건을 충족하는 업무 범위, 간주 근로시간, 임금 산정 방식을 서면으로 합의합니다.</li>\n<li><strong>취업규칙 반영</strong> — 합의 내용을 취업규칙에 명시합니다. 10인 이상 사업장은 근로자 과반수의 의견을 듣고 고용노동청에 신고해야 합니다.</li>\n<li><strong>개별 근로계약서 수정</strong> — 기존 포괄임금 약정 조항을 삭제하고 간주근로 기준에 맞게 임금 항목을 재정비합니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">경총 입장: 경영자총협회는 AI·원격근무 시대에 유연근무 수요가 많아지는데 포괄임금 전면 금지는 기업 경쟁력을 약화시킨다고 주장합니다. 이에 따라 재량근로시간제 적용 업종 확대에 대한 논의가 진행 중입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금 약정 성립 기준',
        summary:
          '대법원 2017다238004 사건(대법원, 2022.02.11 선고)에서 법원은 포괄임금에 관한 약정이 성립하였는지는 계약 문구만이 아니라 근로시간, 근로형태, 업무 성질, 임금 지급 관행 등 제반 사정을 종합하여 판단해야 한다고 판시했습니다. 이 사건에서 버스 운송 사업체의 노선수당이 연장·야간근로수당을 포괄하는 약정으로는 볼 수 있으나, 휴일근로수당은 별도 포괄임금약정이 성립하지 않았다고 보아 차액 지급 의무를 인정한 사례입니다.',
        takeaway:
          '비슷한 상황이라면 간주근로시간제나 재량근로시간제 도입을 고려할 때 반드시 노사 서면 합의를 먼저 체결하고, 법정 업무 요건에 해당하는지 확인하세요. 요건 없이 도입하면 포괄임금과 동일한 문제가 생깁니다.',
      },
    ],
    faq: [
      {
        question: '재택근무자도 간주근로시간제를 적용할 수 있나요?',
        answer:
          '재택근무도 PC 로그온·오프, 메신저 기록 등으로 근로시간 산정이 가능한 경우에는 간주근로시간제 적용이 어렵습니다. 단, 업무 특성상 실질적인 시간 관리가 어렵고 노사 합의가 이루어진 경우에는 제58조 제2항을 적용할 여지가 있습니다.',
      },
      {
        question: '간주근로시간을 하루 9시간으로 정하면 1시간 연장수당도 포함되나요?',
        answer:
          '네, 소정근로시간(8시간)을 초과하는 1시간에 대해서는 연장근로수당(통상시급 × 1.5)이 별도로 발생합니다. 간주근로시간이 8시간을 초과하는 경우 그 초과분에 대한 수당을 임금명세서에 명시해야 합니다.',
      },
      {
        question: '소규모 스타트업인데 IT 개발자에게 재량근로시간제가 가능한가요?',
        answer:
          '법정 재량근로 업무인 정보처리시스템 설계·분석에 해당하면 적용 가능합니다. 단, 단순 코딩 업무나 유지보수 업무는 해당하지 않을 수 있습니다. 노사 서면 합의가 없으면 재량근로로 인정되지 않으므로 반드시 합의서를 체결하고 취업규칙에 반영해야 합니다.',
      },
      {
        question: '간주근로시간제를 도입해도 야간근로수당은 별도로 줘야 하나요?',
        answer:
          '야간근로수당(오후 10시~오전 6시)은 간주근로시간제를 도입해도 실제 야간 근무가 있으면 별도로 지급해야 합니다. 간주근로시간제는 근로시간 산정 방식을 단순화하는 것이지, 법정 가산수당 지급 의무를 면제하는 것이 아닙니다.',
      },
      {
        question: '기존 포괄임금 계약을 간주근로시간제로 전환할 때 직원 동의가 필요한가요?',
        answer:
          '네, 반드시 근로자 대표와의 서면 합의가 필요합니다. 개별 근로계약서도 변경해야 하며, 근로자 불이익이 없는 경우 동의 절차가 비교적 간단합니다. 그러나 실질적으로 임금이 줄어드는 경우 근로자 과반수 동의가 필요합니다.',
      },
    ],
    internalLinks: [
      { label: '로앤가이드 홈', href: '/' },
      { label: '임금체불 가이드', href: '/guide/wage' },
      { label: '포괄임금 초과분 차액 청구 방법', href: '/guide/wage/wage-pogualkeum-overtime-void-claim' },
      { label: '해고·권고사직 가이드', href: '/guide/dismissal' },
      { label: '퇴직금 가이드', href: '/guide/retirement' },
    ],
  },

  // ───────────────────────────────────────────
  // 13. wage-pogual-supreme-court-void-cases
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'wage-pogual-supreme-court-void-cases',
    keyword: '포괄임금 무효 대법원 판례 3가지',
    questionKeyword: '포괄임금제가 무효가 된 대법원 판례 알 수 있을까요?',
    ctaKeyword: '포괄임금 무효 판례 기반 차액 청구 상담',
    type: '판례형',
    perspective: 'victim',
    meta: {
      title: '포괄임금 무효 대법원 판례 3선: 이 경우 무조건 차액 받는다 | 로앤가이드',
      description:
        '포괄임금 약정이 있어도 무효가 된 대법원 판례 3개를 정리했습니다. 내 상황이 해당하는지 확인하고 차액 청구 가능성을 지금 확인하세요.',
    },
    intro:
      '<p>포괄임금 약정서에 서명했으니 추가 수당은 못 받는다는 말, 정말 맞는 말일까요? 대법원은 이미 수십 년 전부터 포괄임금 약정도 근로자에게 불리하거나 법정수당에 미달하면 무효라고 판시해왔습니다. 2026년 고용노동부 지침은 이 판례들의 흐름을 행정 지침으로 공식화한 것입니다. 아래 3개 판례는 포괄임금 무효의 핵심 논리를 담고 있습니다. 내 상황이 이 판례 중 어디에 해당하는지 먼저 확인해보세요.</p>',
    timelineSteps: [
      '1단계: 내 임금 계약이 어떤 유형인지 파악',
      '2단계: 3개 판례 중 해당 유형 확인',
      '3단계: 차액 계산 후 고용노동청 진정 또는 민사소송 준비',
    ],
    cta: { text: '포괄임금 차액 청구 가능 여부 AI로 무료 확인하기', link: '/chat?domain=wage' },
    sections: [
      {
        title: '판례 ① — 최저임금 미달 포괄임금계약은 무효 (대법원 2020다300299)',
        content:
          '<p><strong style="color:#1e3a5f">2024년 12월 26일 선고된 이 판결은 포괄임금계약과 최저임금의 관계를 명확히 정리했습니다.</strong></p>\n<p><strong>사건 개요:</strong> 감시·단속적 근로자를 포함한 사업장에서 포괄임금계약을 체결하고 총액을 지급해왔는데, 이를 시급으로 환산하면 최저임금에 미달하는 상황이 발생한 사안입니다.</p>\n<p><strong>판결 요지:</strong> 대법원 2020다300299 사건에서 법원은 포괄임금계약에 따라 지급된 임금이 최저임금에 미달하는 경우 포괄임금계약이 유효하다고 볼 수 없으며, 사용자는 그 미달액을 지급하여야 한다고 판시했습니다. 또한 정액급 포괄임금계약 체결 시에도 역산 방식으로 법정수당을 계산해야 하며, 그 결과가 최저임금에 미달하면 차액 지급 의무가 발생한다고 명시했습니다.</p>\n<p><strong>적용되는 경우:</strong></p>\n<ul>\n<li>야간·주말 근무가 많은데 총액 기준 시급이 최저임금 미만인 경우</li>\n<li>연장·야간·휴일 수당을 포함한다고 하지만 실제로는 최저임금도 안 되는 경우</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">활용 포인트: 총 지급액 ÷ 실제 근로시간 = 시급이 최저임금(2026년 10,030원)보다 낮다면 이 판례를 근거로 차액 청구가 가능합니다.</blockquote>',
      },
      {
        title: '판례 ② — 포괄임금이라도 차액 지급 의무 존재 (대법원 2017다238004)',
        content:
          '<p><strong style="color:#1e3a5f">2022년 2월 11일 선고된 이 판결은 포괄임금 약정의 성립 요건을 엄격히 해석했습니다.</strong></p>\n<p><strong>사건 개요:</strong> 버스 운송 사업체에서 노사 임금협정으로 노선수당에 연장·야간·휴일 수당을 포괄한다고 정했지만, 실제로 휴일근로수당은 별도로 지급해온 사안입니다.</p>\n<p><strong>판결 요지:</strong> 대법원 2017다238004 사건에서 법원은 포괄임금에 관한 약정 성립 여부는 계약 문구만이 아니라 근로시간, 업무 성질, 임금 지급 관행 등 제반 사정을 종합하여 판단해야 한다고 했습니다. 특히 노사 협정이 연장·야간 수당 포괄약정을 포함하고 있더라도, 휴일근로수당에 대해서는 별도 지급 관행이 있었던 이상 포괄약정이 성립하지 않는다고 판단하여 차액 지급을 명했습니다.</p>\n<p><strong>적용되는 경우:</strong></p>\n<ul>\n<li>포괄임금 약정서에 서명했지만 휴일·야간 수당을 별도로 받아온 경우</li>\n<li>임금협정에 포괄임금이라고 적혀 있지만 수당 항목이 구체적으로 특정되지 않은 경우</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 내 상황이 이 판례에 해당하는지 AI로 즉시 확인</strong></p>\n<p style="margin:0;font-size:0.95em">근로계약 내용과 실제 지급 내역을 알려주시면 차액 청구 가능성을 무료로 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '판례 ③ — 근로자에게 불리한 포괄임금 무효 (대법원 2015도13909)',
        content:
          '<p><strong style="color:#1e3a5f">2017년 7월 11일 선고된 이 판결은 포괄임금 유효 요건을 4가지로 정리했습니다.</strong></p>\n<p><strong>사건 개요:</strong> 야간경비원 등 감시·단속적 근로자에게 포괄임금계약을 체결하고 최저임금에 미달하는 임금을 지급한 사업주가 최저임금법 위반으로 기소된 사안입니다.</p>\n<p><strong>판결 요지:</strong> 대법원 2015도13909 사건에서 법원은 포괄임금제에 의한 임금지급계약이 유효하기 위해서는 ①근로시간 산정이 어려운 경우여야 하고, ②근로자에게 불이익이 없으며, ③여러 사정에 비추어 정당하다고 인정될 때에만 유효하다고 명시했습니다. 포괄임금계약에 관한 약정 성립 여부는 계약 문구뿐 아니라 임금 지급 관행 등 제반 사정을 종합하여 판단하며, 이 중 하나라도 충족하지 못하면 약정은 무효라고 판시했습니다.</p>\n<p><strong>적용되는 경우:</strong></p>\n<ul>\n<li>근무 장소가 고정되어 있고 사업주가 출퇴근을 충분히 파악할 수 있는 경우</li>\n<li>포괄임금 약정이 있지만 법정 수당보다 적게 지급받고 있는 경우</li>\n<li>근로시간 산정이 어렵지 않은 사무직·생산직인데 포괄임금을 적용받는 경우</li>\n</ul>',
      },
      {
        title: '3개 판례 비교표 및 나에게 맞는 청구 근거',
        content:
          '<p><strong style="color:#1e3a5f">세 판례를 한눈에 비교하고 내 상황에 맞는 청구 근거를 선택하세요.</strong></p>\n<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:16px 0">\n<thead>\n<tr style="background:#1e3a5f;color:#fff">\n<th style="padding:10px 8px;text-align:left">사건번호</th>\n<th style="padding:10px 8px;text-align:left">핵심 논리</th>\n<th style="padding:10px 8px;text-align:left">적용 상황</th>\n</tr>\n</thead>\n<tbody>\n<tr style="border-bottom:1px solid #ddd">\n<td style="padding:10px 8px">2020다300299</td>\n<td style="padding:10px 8px">최저임금 미달 = 포괄임금 무효</td>\n<td style="padding:10px 8px">시급 환산 시 최저임금 이하인 경우</td>\n</tr>\n<tr style="border-bottom:1px solid #ddd;background:#f9f9f9">\n<td style="padding:10px 8px">2017다238004</td>\n<td style="padding:10px 8px">일부 수당 별도 지급 관행이 있으면 해당 수당 포괄약정 불성립</td>\n<td style="padding:10px 8px">실제 수당 지급 방식이 약정과 다른 경우</td>\n</tr>\n<tr style="border-bottom:1px solid #ddd">\n<td style="padding:10px 8px">2015도13909</td>\n<td style="padding:10px 8px">불이익한 포괄임금 약정은 무효</td>\n<td style="padding:10px 8px">법정수당이 약정액보다 많은 경우</td>\n</tr>\n</tbody>\n</table>\n<p>차액 청구 방법은 다음과 같습니다.</p>\n<ol>\n<li><strong>증거 수집</strong> — 임금명세서, 출퇴근 기록, 업무 메신저 로그, 카카오뱅크 입금 내역</li>\n<li><strong>차액 계산</strong> — 실제 연장·야간·휴일 근로시간에 법정 수당을 계산하여 지급받은 금액과의 차이 산출</li>\n<li><strong>고용노동청 진정</strong> — 사업장 관할 고용노동청에 임금체불 진정 접수</li>\n<li><strong>소멸시효 확인</strong> — 임금 청구권은 3년이므로 퇴사 후에도 3년 이내에 행동하세요</li>\n</ol>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금계약도 최저임금 미달 시 무효',
        summary:
          '대법원 2020다300299 사건(대법원, 2024.12.26 선고)에서 법원은 포괄임금계약에 따라 지급된 임금이 최저임금에 미달하는 경우 포괄임금계약이 유효하다고 볼 수 없으며 사용자는 미달액을 지급하여야 한다고 판시했습니다. 이 판결은 정액급·정액수당 방식 모두에 적용되며, 역산 방식으로 기본급을 구한 후 비교대상 시급이 최저임금에 미달하면 차액 지급 의무가 발생한다는 기준을 명확히 제시했습니다.',
        takeaway:
          '비슷한 상황이라면 먼저 어느 판례 유형에 해당하는지 파악한 뒤, 차액을 계산하고 소멸시효(3년) 내에 고용노동청 진정을 접수하세요. 퇴사 후에도 3년 이내라면 청구 권리가 살아 있습니다.',
      },
    ],
    faq: [
      {
        question: '포괄임금 약정서에 서명했는데 무효가 될 수 있나요?',
        answer:
          '네, 가능합니다. 근로자가 서명했더라도 법정수당에 미달하거나 근로자에게 불이익한 약정은 무효입니다(근로기준법 제15조, 강행규정 우선 원칙). 대법원도 이를 일관되게 확인하고 있습니다.',
      },
      {
        question: '3개 판례 중 어느 것을 기준으로 청구해야 하나요?',
        answer:
          '세 가지 판례는 각각 다른 상황에 적용됩니다. 최저임금 미달이 의심되면 2020다300299, 수당 지급 관행이 약정과 달랐다면 2017다238004, 근로시간 산정이 가능한 업종인데 포괄임금을 적용받았다면 2015도13909를 우선 근거로 활용하세요.',
      },
      {
        question: '소액사건으로 직접 소송을 낼 수 있나요?',
        answer:
          '청구 금액이 3,000만원 이하이면 소액사건심판으로 간이하게 진행할 수 있습니다. 변호사 없이도 진행 가능하며, 고용노동청 진정을 먼저 시도한 뒤 합의가 안 되면 민사소송으로 이어가는 경우가 많습니다.',
      },
      {
        question: '차액 계산을 혼자서도 할 수 있나요?',
        answer:
          '기본 공식은 "통상시급 × 가산율(연장 1.5, 야간 1.5, 휴일 1.5~2.0) × 초과 시간 − 이미 지급받은 수당"입니다. 통상시급 계산에 포함되는 수당 항목이 복잡할 수 있으므로, AI 상담이나 고용노동부 임금계산기(labor.moel.go.kr)를 활용하면 도움이 됩니다.',
      },
      {
        question: '재직 중인데 지금 신고하면 불이익을 당할 수 있나요?',
        answer:
          '임금체불 신고를 이유로 해고·불이익 처우를 하면 부당해고 또는 불이익취급에 해당하여 사업주가 별도 처벌을 받습니다(근로기준법 제23조, 노동조합법 제81조). 재직 중 신고가 불안하다면 익명 제보(고용노동부 민원상담 1350) 또는 퇴사 후 청구도 가능합니다.',
      },
    ],
    internalLinks: [
      { label: '로앤가이드 홈', href: '/' },
      { label: '임금체불 가이드', href: '/guide/wage' },
      { label: '포괄임금 초과분 차액 청구 방법', href: '/guide/wage/wage-pogualkeum-overtime-void-claim' },
      { label: '해고·권고사직 가이드', href: '/guide/dismissal' },
      { label: '퇴직금 가이드', href: '/guide/retirement' },
    ],
  },
];
