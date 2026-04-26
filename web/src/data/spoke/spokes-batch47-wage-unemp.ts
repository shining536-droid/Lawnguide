import { SpokePage } from '../spoke-pages';

// batch47 wage+unemp 5개
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 호텔·음식점에서 봉사료(팁)가 월급에 포함되는지 모르는 근로자가 통상임금 포함 기준과 청구 절차를 정리하도록 돕는 페이지다.
// 2. 이 페이지는 건당 수수료·성과급으로만 급여를 받아 최저임금을 밑도는 상황에 놓인 근로자가 위반 여부를 점검하고 진정을 준비하도록 돕는 페이지다.
// 3. 이 페이지는 회사가 수당·인센티브를 일방적으로 환수·공제한 근로자가 위법 여부와 반환 청구 절차를 정리하도록 돕는 페이지다.
// 4. 이 페이지는 배우자의 타지 발령으로 거주이전을 위해 사직한 근로자가 정당이직 인정 요건과 실업급여 신청 절차를 정리하도록 돕는 페이지다.
// 5. 이 페이지는 직장 내 괴롭힘·따돌림으로 자진퇴사한 근로자가 정당이직 인정 요건과 증거 수집·신청 절차를 정리하도록 돕는 페이지다.

export const spokesBatch47WageUnemp: SpokePage[] = [
  // ─── 1. wage / tip-service-charge-base-inclusion ───
  {
    domain: 'wage',
    slug: 'wage-tip-service-charge-base-inclusion',
    keyword: '봉사료·팁 통상임금 포함',
    questionKeyword: '호텔·음식점 봉사료가 통상임금에 포함되어 연장수당 계산에 영향을 주나요?',
    ctaKeyword: '봉사료 통상임금 포함 여부 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '봉사료·팁 통상임금 포함 4가지 판단 기준 | 로앤가이드',
      description:
        '호텔·레스토랑에서 봉사료(서비스 차지)가 통상임금에 포함되면 연장·야간·휴일수당이 달라집니다. 포함 요건과 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"월급에 봉사료가 포함돼 있다고 했는데, 연장근무 수당 계산할 때 왜 봉사료는 빠지나요?"라는 질문이 호텔·외식업 종사자 사이에서 자주 나옵니다. 봉사료가 통상임금에 포함되면 연장·야간·휴일수당이 늘어나고, 퇴직금 기준인 평균임금에도 영향을 줄 수 있습니다. 회사가 "봉사료는 재량 지급"이라고 주장하더라도 실제 지급 형태를 따져보면 통상임금에 해당하는 사례가 적지 않습니다. 소멸시효 3년이 지나면 청구권이 사라지니 지금 바로 확인하세요.</p>',
    sections: [
      {
        title: 'Q. 봉사료가 통상임금이 되려면 어떤 요건을 갖춰야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 정기성·일률성·고정성 3가지를 모두 충족하면 통상임금으로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>정기성</strong> — 매월 또는 일정 주기마다 빠짐없이 지급되는 구조인지 확인. 지급 시기가 불규칙하면 통상임금성이 약해질 수 있습니다.</li>\n<li><strong>일률성</strong> — 같은 직군 모든 근로자에게 동일 기준으로 지급되는지 확인. 특정 직원만 받는 경우 논란이 생깁니다.</li>\n<li><strong>고정성</strong> — 지급 여부·금액이 사전에 확정돼 있는지 확인. "회사 재량"이라고 해도 관행상 매달 고정 지급됐다면 고정성을 인정받을 소지가 있습니다.</li>\n<li><strong>근로 대가성</strong> — 근로 제공 자체에 대한 대가로 지급된 것이어야 합니다. 봉사료를 모아 직원에게 배분하는 구조라면 근로 대가성이 인정될 가능성이 높습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회사가 "팁은 고객이 주는 것"이라 주장해도, 회사가 수금·배분 주체라면 통상임금 포함을 다툴 수 있습니다.</blockquote>',
      },
      {
        title: 'Q. 봉사료가 통상임금에 포함되면 실제 차액이 얼마나 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 봉사료 월 30만 원 기준 연장·야간수당 차액이 연 100만 원 이상 발생할 수 있습니다.</strong></p>\n<ul>\n<li><strong>연장수당 기준 변경</strong> — 통상시급이 높아지면 1.5배 가산되는 연장수당 전체가 올라갑니다. 예: 기본 시급 10,000원 + 봉사료 환산 1,200원 → 연장시급 16,800원으로 계산.</li>\n<li><strong>야간·휴일수당 동반 상승</strong> — 야간(0.5배)·휴일(1.5배) 가산도 봉사료 포함 통상시급 기준으로 재계산됩니다.</li>\n<li><strong>퇴직금 평균임금</strong> — 봉사료가 계속·정기 지급됐다면 퇴직 전 3개월 평균임금(근로기준법 제2조)에도 포함돼 퇴직금이 늘어납니다.</li>\n<li><strong>소멸시효</strong> — 임금채권은 3년(근로기준법 제49조). 퇴직 후 3년이 지나면 시효 소멸 — 재직 중이거나 퇴직 직후라면 지금 바로 계산해보는 것이 좋습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 봉사료 통상임금 차액, AI로 먼저 계산해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">월 봉사료 규모와 근무 시간을 입력하면 대략적인 미지급 수당 규모를 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 봉사료 통상임금 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 진정 기준 절차를 참고하면 다음 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 봉사료 지급 내역 수집</strong> (즉시) — 최근 3년치 급여명세서·통장 이체 내역에서 봉사료 항목 정리. 지급 주기·금액 일관성 확인.</li>\n<li><strong>2단계 — 통상임금 포함 여부 판단</strong> (즉시) — 정기성·일률성·고정성 체크리스트 적용. 불명확하면 고용노동부 1350 전화 상담 가능.</li>\n<li><strong>3단계 — 미지급 차액 계산</strong> (즉시) — 봉사료 포함 통상시급 × 연장·야간·휴일 근로시간으로 차액 산정.</li>\n<li><strong>4단계 — 사업주에 지급 요청 (내용증명 선택)</strong> — 회사 미응답 시 고용노동부 노동포털(labor.moel.go.kr) 또는 관할 노동지청에 진정 접수. 처리기간 25일(연장 가능).</li>\n<li><strong>5단계 — 형사입건·시정지시</strong> — 체불 확인 시 14일 내 지급 명령 → 미이행 시 형사 송치. 3년 이하 징역 또는 3,000만 원 이하 벌금 대상.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 주의: 퇴직 후 3년이 지나면 임금채권 시효 소멸. 지금 재직 중이라면 미지급 기간이 누적되기 전에 진정을 검토해보는 것이 좋습니다.</blockquote>',
      },
      {
        title: 'Q. 회사가 "봉사료는 고객 자발적 팁이라 우리 임금이 아니다"라고 주장하면?',
        content:
          '<p><strong style="color:#1e3a5f">A. 수금·배분 주체가 회사라면 사용자가 지급하는 임금으로 볼 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>회사 수금 구조</strong> — 영업대금에 봉사료(예: 10%)를 포함해 회사가 일괄 수납한 뒤 직원에게 배분하면 사용자 지급 임금으로 검토 가능.</li>\n<li><strong>취업규칙·근로계약 명시</strong> — 봉사료 배분 기준이 취업규칙에 있다면 임금성 인정 가능성 높아짐.</li>\n<li><strong>실제 지급 관행</strong> — 수년간 매달 일정 금액이 지급됐다면 관행이 임금 내용이 될 소지 있음 (대법원 판례상 묵시적 임금).</li>\n<li><strong>세금 처리</strong> — 봉사료에 근로소득세가 원천징수됐다면 임금성 인정에 유리한 근거가 됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 과거 급여명세서에 "봉사료" 항목이 별도 표기됐다면 회사 측 주장을 반박하는 핵심 증거가 됩니다.</blockquote>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>최근 3년 급여명세서 (봉사료 항목 확인용)</li>\n<li>통장 이체 내역 (봉사료 입금 주기·금액)</li>\n<li>근로계약서 (봉사료 조항 여부)</li>\n<li>취업규칙 또는 봉사료 배분 지침 (회사 내부 문서)</li>\n<li>연장·야간·휴일 근무 기록 (출퇴근 기록, 스케줄표)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 호텔 봉사료의 통상임금 해당 여부',
        summary:
          '대법원 98다46198 사건(대법원, 1999.01.26 선고)에서 법원은 호텔이 폐업 전 소속 근로자들에게 봉사료를 지급하고 채권양도 방식으로 처리한 사안에서, 봉사료가 계속적·정기적으로 지급되어 통상임금에 포함될 수 있는 임금의 성격을 갖는다는 취지로 판단했습니다.',
        takeaway:
          '회사가 수금·배분 구조로 지급한 봉사료는 통상임금 포함 여부를 다툴 여지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '봉사료 비율이 매달 다르면 고정성이 없어서 통상임금에 포함이 안 되나요?',
        answer:
          '<strong>금액이 달라도 지급 방식이 고정돼 있으면 고정성이 인정될 수 있습니다.</strong> 예를 들어 매출의 10%를 직원에게 배분하는 방식이라면 계산 기준 자체는 고정된 것으로 볼 소지가 있어요.',
      },
      {
        question: '이미 퇴직했는데 3년이 지났다면 청구할 방법이 없나요?',
        answer:
          '<strong>임금채권 소멸시효 3년(근로기준법 제49조)이 지나면 진정 청구는 어렵습니다.</strong> 다만 소멸시효 중단 사유(내용증명, 지급 약속 등)가 있었다면 변호사 상담을 통해 검토해보는 것이 좋아요.',
      },
      {
        question: '회사가 봉사료를 아예 임금 항목에 넣지 않고 별도로 줬어요. 이 경우에도 청구되나요?',
        answer:
          '<strong>지급 항목 명칭보다 실제 지급 형태가 중요합니다.</strong> 사용자가 주기적으로 배분한 금품은 임금성을 검토받을 수 있어요. 지급 내역을 통장 거래 내역으로 증명하는 것이 핵심입니다.',
      },
      {
        question: '봉사료 차액을 혼자서 계산하기 어려운데 어떻게 하나요?',
        answer:
          '<strong>고용노동부 고객상담센터(1350)에 전화하면 개략적인 안내를 받을 수 있습니다.</strong> 정확한 금액은 노동청 진정 후 근로감독관이 산정하므로 지금은 봉사료 지급 자료 수집이 우선이에요.',
      },
      {
        question: '5인 미만 사업장도 봉사료 통상임금을 다툴 수 있나요?',
        answer:
          '<strong>임금채권 청구는 사업장 규모와 관계없이 가능합니다.</strong> 다만 5인 미만 사업장은 가산수당(연장·야간·휴일)이 근로기준법상 적용되지 않으니 통상임금보다 평균임금(퇴직금)에 초점을 맞추는 것이 좋아요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '통상임금 계산 방법 총정리', href: '/guide/wage/wage-ordinary-wage-calculation-guide' },
      { label: '연장수당 미지급 노동청 진정 절차', href: '/guide/wage/wage-overtime-report-procedure-timeline' },
      { label: '임금체불 진정 전 체크리스트', href: '/guide/wage/wage-complaint-pre-filing-checklist' },
      { label: '퇴직금 평균임금 산정 기준', href: '/guide/wage/wage-annual-leave-pay-calculation' },
      { label: '최저임금 위반 신고 절차', href: '/guide/wage/wage-piece-rate-minimum-violation' },
    ],
  },

  // ─── 2. wage / piece-rate-minimum-violation ───
  {
    domain: 'wage',
    slug: 'wage-piece-rate-minimum-violation',
    keyword: '성과급제·도급 최저임금 위반',
    questionKeyword: '건당 수수료·성과급으로만 받는데 최저임금보다 적어도 문제없나요?',
    ctaKeyword: '성과급 최저임금 위반 신고 절차 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '성과급·도급 최저임금 위반 신고 5단계 | 로앤가이드',
      description:
        '건당 수수료·성과급으로만 급여를 받다 최저임금을 밑돈다면 최저임금법 위반으로 신고할 수 있습니다. 위반 계산법과 신고 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"월 실적이 없는 달엔 수수료가 0원인 적도 있었어요. 기본급도 없고 건당으로만 받는데 이게 불법인가요?"라는 고민이 많습니다. 최저임금법은 성과급·도급제 근로자에게도 적용됩니다. 한 달 총액을 소정근로시간으로 나눈 시급이 최저임금(2025년 기준 시간당 10,030원)에 미달하면 위반으로 검토될 수 있습니다. 신고 기간(3년)을 놓치지 않도록 지금 바로 확인하세요.</p>',
    sections: [
      {
        title: '성과급제 최저임금 위반 — 어떻게 계산하나요?',
        content:
          '<p><strong style="color:#1e3a5f">월 수령액 ÷ 소정근로시간(월) = 비교대상 시급이 최저임금보다 낮으면 위반으로 검토됩니다.</strong></p>\n<ul>\n<li><strong>소정근로시간 기준</strong> — 1주 40시간, 1일 8시간 한도 내에서 정한 시간(근로기준법 제50조). 실제 더 일했어도 소정근로시간 초과분(연장근로)은 별도 계산.</li>\n<li><strong>비교대상 임금</strong> — 소정근로시간에 대한 임금만 포함. 연장·야간·휴일 가산수당은 제외하고 계산(최저임금법 제6조 제4항).</li>\n<li><strong>계산 예시</strong> — 월 소정근로 174시간, 수수료 수령 1,200,000원 → 시급 6,896원 → 2025년 최저임금 10,030원 미달 → 차액 551,022원/월 청구 가능.</li>\n<li><strong>포괄임금 계약도 예외 없음</strong> — 포괄임금 약정이라도 최저임금 미달이면 계약이 그 부분에서 무효(대법원 2020다300299 사건 취지).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 도급·성과급제는 "실적이 없으면 급여가 0원"을 허용하지 않습니다. 근로를 제공한 이상 최저임금이 보장되어야 합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 최저임금 위반 신고 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 공식 진정 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 미달액 계산</strong> (즉시) — 최근 3년 급여명세서·수수료 지급 내역 정리. 월별 비교대상 시급 산출.</li>\n<li><strong>2단계 — 진정 접수</strong> (즉시~3년 이내) — 노동포털(labor.moel.go.kr) 온라인 접수 또는 관할 지방고용노동지청 방문. 임금체불 진정서 작성.</li>\n<li><strong>3단계 — 근로감독관 조사</strong> (접수 후 약 1~2주) — 담당 감독관 배정. 근무 기록·급여 내역 제출 요구. 사업주도 출석 요구받음. 처리기간 25일.</li>\n<li><strong>4단계 — 시정지시</strong> (조사 후) — 법 위반 확인 시 사업주에게 14일 내 차액 지급 명령.</li>\n<li><strong>5단계 — 형사입건</strong> (미이행 시) — 미지급 시 형사 송치. 최저임금법 위반은 3년 이하 징역 또는 2,000만 원 이하 벌금(최저임금법 제28조).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성과급 최저임금 미달액, AI로 계산해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">월 수령액과 근무시간을 입력하면 최저임금 미달 여부와 차액을 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '도급·위탁 계약서가 있어도 최저임금이 적용되나요?',
        content:
          '<p><strong style="color:#1e3a5f">근로자성이 인정되면 계약서 형식과 관계없이 최저임금법이 적용됩니다.</strong></p>\n<ul>\n<li><strong>근로자성 판단</strong> — 업무 내용 지정, 출퇴근 관리, 업무 지휘·감독이 있으면 프리랜서·위탁 계약서가 있어도 근로자로 인정될 소지가 있습니다.</li>\n<li><strong>특수고용직 주의</strong> — 배달기사·보험설계사 등은 근로자성이 사안별로 다르게 판단되므로 별도 확인이 필요합니다.</li>\n<li><strong>소정근로시간 무효 주의</strong> — 실제 근무시간과 현저히 차이 나는 소정근로시간 약정은 탈법행위로 무효가 될 수 있습니다(대법원 2022다257238, 2025.07.18 선고).</li>\n<li><strong>위탁계약 = 임금 0원 허용 아님</strong> — 근로자성이 인정되는 한 "실적 없으면 급여 없음" 조항은 최저임금 보장 의무를 면제하지 않습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 출퇴근 관리 기록, 업무 지시 문자·카카오톡, 일정 관리 엑셀 등이 근로자성 입증에 활용될 수 있습니다.</blockquote>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>최근 3년 급여명세서 또는 수수료 지급 내역서</li>\n<li>근로계약서 또는 위탁계약서</li>\n<li>출퇴근 기록 또는 업무 일지</li>\n<li>업무 지시·지휘 증거 (문자, 카카오톡, 이메일)</li>\n<li>취업규칙 또는 급여 지급 기준 (사업장 내부 문서)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 격일제 택시기사의 소정근로시간과 최저임금 판단 기준',
        summary:
          '대법원 2022다257238 사건(대법원, 2025.07.18 선고)에서 법원은 격일제 근무 형태에서도 소정근로시간이 1주 40시간·1일 8시간을 초과하는 연장근로 부분은 최저임금 계산의 기준 시간에 포함되지 않는다고 판시하면서, 실제 근무형태와 소정근로시간의 불일치가 탈법행위에 해당하는지 규범적으로 판단해야 한다고 밝혔습니다.',
        takeaway:
          '성과급·도급 계약이라도 소정근로시간이 실제 근무와 크게 다르다면 탈법행위로 무효가 될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '실적이 좋은 달도 있고 나쁜 달도 있는데 어느 달을 기준으로 신고하나요?',
        answer:
          '<strong>최저임금 위반은 월 단위로 각각 판단합니다.</strong> 좋은 달에 초과했어도 미달한 달은 별개로 위반입니다. 3년치 중 미달 월을 모두 정리해서 합산해 신고할 수 있어요.',
      },
      {
        question: '회사가 "포괄임금이라서 최저임금 이상"이라고 주장해요',
        answer:
          '<strong>포괄임금이라도 소정근로시간으로 나눈 비교대상 시급이 최저임금 이상이어야 합니다.</strong> 계산했을 때 미달이면 포괄임금 약정의 해당 부분은 무효가 됩니다.',
      },
      {
        question: '5인 미만 사업장도 최저임금 위반 신고가 되나요?',
        answer:
          '<strong>최저임금법은 사업장 규모에 관계없이 모든 사업장에 적용됩니다.</strong> 5인 미만이라도 근로자성이 인정되면 최저임금 미달액을 청구할 수 있어요.',
      },
      {
        question: '이미 퇴직한 경우에도 신고할 수 있나요?',
        answer:
          '<strong>퇴직 후 3년 이내라면 진정이 가능합니다.</strong> 임금채권 소멸시효는 3년(근로기준법 제49조)이므로 퇴직일로부터 3년이 지나기 전에 신고하세요.',
      },
      {
        question: '도급계약서가 있는데 근로자성이 인정받기 어렵지 않나요?',
        answer:
          '<strong>계약서 형식보다 실제 업무 내용이 기준입니다.</strong> 업무 지시, 출퇴근 통제, 전속성이 있다면 도급계약서가 있어도 근로자로 인정받을 소지가 있어요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '봉사료·팁 통상임금 포함 기준', href: '/guide/wage/wage-tip-service-charge-base-inclusion' },
      { label: '임금체불 진정 전 체크리스트', href: '/guide/wage/wage-complaint-pre-filing-checklist' },
      { label: '연장수당 미지급 신고 절차', href: '/guide/wage/wage-overtime-report-procedure-timeline' },
      { label: '포괄임금 야근수당 청구', href: '/guide/wage/wage-overtime-pay-calculation-claim' },
      { label: '수당 환수 일방 공제 위법', href: '/guide/wage/wage-commission-clawback-illegal' },
    ],
  },

  // ─── 3. wage / commission-clawback-illegal ───
  {
    domain: 'wage',
    slug: 'wage-commission-clawback-illegal',
    keyword: '수당 환수·일방 공제 위법',
    questionKeyword: '회사가 인센티브·교육비를 갑자기 월급에서 공제하겠다고 하는데 합법인가요?',
    ctaKeyword: '수당 환수 일방 공제 위법 여부 확인',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '인센티브·수당 환수 일방 공제 위법 4가지 판단 | 로앤가이드',
      description:
        '지급된 인센티브·교육비를 사유 없이 월급에서 공제하면 임금 전액 지급 원칙 위반입니다. 위법 여부와 반환 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"3개월 전에 받은 인센티브를 실적 부진을 이유로 다시 토해내라고 해요. 월급에서 그냥 빼겠다는데 이게 맞나요?" 이런 황당한 상황이 실제로 벌어지고 있습니다. 근로기준법 제43조는 임금 전액을 통화로 지급하도록 정하고 있어, 법령이나 단체협약 외의 이유로 임금을 공제하는 것은 위법으로 검토될 수 있습니다. 이미 지급된 임금을 사용자가 일방적으로 환수하는 것도 마찬가지입니다. 소멸시효 3년 이내라면 지금 바로 대응할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 회사가 이미 지급한 인센티브를 환수할 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 원칙적으로 이미 확정·지급된 임금은 사용자가 일방적으로 환수할 수 없습니다.</strong></p>\n<ul>\n<li><strong>임금 전액 지급 원칙</strong> — 근로기준법 제43조 제1항: 임금은 전액을 통화로 지급해야 합니다. 법령이나 단체협약에 의한 경우가 아니면 공제 불가.</li>\n<li><strong>환수 합의 유효 요건</strong> — 근로자가 자유로운 의사로 서면 동의한 경우에만 환수·공제가 가능할 소지가 있습니다. 강요·기망에 의한 동의는 무효입니다.</li>\n<li><strong>재직 조건 인센티브 한계</strong> — "퇴직 시 인센티브 반환" 조항이 취업규칙에 있더라도, 지급 조건이 달성된 후 지급된 인센티브를 소급 환수하는 것은 무효로 검토됩니다.</li>\n<li><strong>연수비·교육비 공제 주의</strong> — 회사 지시로 받은 교육의 비용을 퇴사 시 전액 환수하는 약정은 손해배상 예정으로 무효가 될 수 있습니다(근로기준법 제20조).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 취업규칙에 "환수 조항"이 있어도, 조항 자체가 강행법규(근기법 제43조·제20조)에 위반되면 무효가 됩니다.</blockquote>',
      },
      {
        title: 'Q. 실적 미달을 이유로 성과급을 되돌려 달라는 게 가능한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 지급 당시 기준을 충족해 확정된 성과급이라면 사후 실적 미달을 이유로 환수하기 어렵습니다.</strong></p>\n<ul>\n<li><strong>지급 시점 기준 충족 여부</strong> — 인센티브가 지급 기준을 충족하여 확정된 것이라면 이후 실적이 나빠졌다는 이유로 환수하는 것은 위법 소지가 있습니다.</li>\n<li><strong>조건부 인센티브 한계</strong> — 지급 시점에 미래 조건을 달아 사후 환수하는 구조는 근로자에게 불이익한 "감급" 제재로 볼 수 있습니다(근로기준법 제95조: 감급 한도 제한).</li>\n<li><strong>사후 동의 강요 주의</strong> — "환수 동의서에 서명 안 하면 불이익"이라는 압박 하에 서명한 것은 강박에 의한 의사표시 취소를 검토할 수 있습니다.</li>\n<li><strong>소액 분쟁 활용</strong> — 300만 원 이하 미지급 임금은 소액심판 또는 지급명령을 통해 신속하게 청구 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 수당 환수 위법 여부, AI로 먼저 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">환수 사유와 금액을 입력하면 대응 방향을 정리할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 수당 환수·부당공제 대응 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 절차를 참고하면 다음 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 동의서 확인</strong> (즉시) — 환수·공제 동의서에 서명했는지 확인. 서명한 경우 자유의사 여부 검토.</li>\n<li><strong>2단계 — 내용증명 발송 (선택)</strong> — "환수는 위법이며 공제분 반환 요청" 내용증명 발송. 시효 중단 + 협상 기회 확보.</li>\n<li><strong>3단계 — 고용노동부 진정 접수</strong> (3년 이내) — 노동포털(labor.moel.go.kr) 또는 관할 지청 방문. 임금 전액 미지급(제43조 위반) 또는 손해배상 예정 약정(제20조 위반)으로 진정.</li>\n<li><strong>4단계 — 조사·시정지시</strong> — 체불 확인 시 14일 내 지급 명령. 처리기간 25일.</li>\n<li><strong>5단계 — 형사입건 또는 민사 청구</strong> — 미이행 시 형사 송치 또는 소액심판·지급명령으로 반환 청구.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 주의: 회사의 환수 요구에 응해 이미 돌려줬다면, 지급 후 3년 이내라면 부당이득 반환 청구를 검토해볼 수 있습니다.</blockquote>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>인센티브·성과급 지급 내역서 (지급일·금액 확인)</li>\n<li>환수 동의서 또는 공제 통보 문자·이메일</li>\n<li>취업규칙·성과급 지급 기준 문서</li>\n<li>급여명세서 (공제 항목 확인)</li>\n<li>강박 증거 (환수 서명 압박 문자·녹취 등)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 확인서·연수비 환수 약정의 효력 한계',
        summary:
          '대법원 2018다244877 사건(대법원, 2022.03.17 선고)에서 법원은 사용자와 근로자 사이의 약정이 일방적으로 불이익한 금품의 공제를 허용하는 내용이라면 근로기준법 제20조의 위약금·손해배상 예정 금지 원칙에 따라 효력이 제한될 수 있다고 판단했습니다.',
        takeaway:
          '강제로 서명한 환수 동의서는 위법 소지가 있으며, 이미 지급된 임금을 사후 반환하도록 강요하는 약정은 다툴 여지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '환수 동의서에 서명했는데 취소할 수 있나요?',
        answer:
          '<strong>압박·기망 상태에서 서명했다면 의사표시 취소가 가능할 수 있습니다.</strong> 취소 의사는 서명 후 가능한 한 빨리 내용증명으로 통보하는 것이 좋아요.',
      },
      {
        question: '취업규칙에 "계약 위반 시 인센티브 환수" 조항이 있어요',
        answer:
          '<strong>취업규칙 조항도 근로기준법 강행규정에 반하면 무효입니다.</strong> "계약 위반"의 사유와 금액이 비례해야 하고, 지급 확정 후 소급 환수는 특히 다툴 소지가 큽니다.',
      },
      {
        question: '연수비 300만 원을 2년 내 퇴직 시 반환하도록 했는데 합법인가요?',
        answer:
          '<strong>자발적 교육이 아닌 회사 지시 교육이라면 위약금 예정으로 무효가 될 소지가 있습니다.</strong> 다만 업무 무관 자격증 취득 비용은 달라질 수 있으니 구체적 사실관계 확인이 필요해요.',
      },
      {
        question: '이미 공제된 돈을 돌려받으려면 어떻게 하나요?',
        answer:
          '<strong>고용노동부 진정(임금체불) 또는 소액심판을 통해 청구할 수 있습니다.</strong> 300만 원 이하라면 소액심판이 빠르고 인지대도 저렴합니다.',
      },
      {
        question: '성과급이 임금인지 재량 상여금인지 어떻게 구분하나요?',
        answer:
          '<strong>계속·정기 지급되고 사용자에게 지급의무가 있었으면 임금으로 볼 소지가 있습니다.</strong> 취업규칙이나 근로계약서에 지급 기준이 명시돼 있다면 임금성이 더 강해요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '성과급 최저임금 위반 신고', href: '/guide/wage/wage-piece-rate-minimum-violation' },
      { label: '임금체불 진정 전 체크리스트', href: '/guide/wage/wage-complaint-pre-filing-checklist' },
      { label: '봉사료 통상임금 포함 기준', href: '/guide/wage/wage-tip-service-charge-base-inclusion' },
      { label: '임금 소멸시효 3년 청구', href: '/guide/wage/unpaid-wage-statute-of-limitations' },
      { label: '연장수당 미지급 신고 절차', href: '/guide/wage/wage-overtime-report-procedure-timeline' },
    ],
  },

  // ─── 4. unemployment / spouse-relocation-just-cause ───
  {
    domain: 'unemployment',
    slug: 'unemployment-spouse-relocation-just-cause',
    keyword: '배우자 발령 거주이전 자진퇴사 실업급여',
    questionKeyword: '배우자가 타지로 발령났서 이사하려고 퇴직하면 실업급여를 받을 수 있나요?',
    ctaKeyword: '배우자 발령 실업급여 요건 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '배우자 발령 거주이전 자진퇴사 실업급여 인정 요건 | 로앤가이드',
      description:
        '배우자 발령으로 거주지를 이전해 퇴직했다면 정당이직 사유로 실업급여를 받을 수 있습니다. 인정 요건과 14일 신청 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"남편이 지방 발령을 받아 온 가족이 이사를 가야 하는데, 제 직장을 그만두면 실업급여를 못 받는 건 아닌지 걱정돼요." 이런 고민을 하는 분들이 많습니다. 고용보험법 시행규칙 [별표2]는 배우자의 발령·이민·취업으로 인한 거주지 이전을 정당이직 사유로 인정하고 있습니다. 단, 서류 준비와 이직 후 14일 이내 신청이 핵심입니다. 놓치면 수급 기간이 줄어드니 지금 바로 절차를 확인하세요.</p>',
    sections: [
      {
        title: '배우자 발령 거주이전 정당이직 — 어떤 요건이 필요한가요?',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 시행규칙 [별표2] 제5호에 따른 정당이직 요건을 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>배우자의 사업장 이전·발령 사실</strong> — 배우자의 근무지가 현 거주지에서 통근 불가능한 거리(왕복 3시간 이상 기준)로 이전돼야 합니다.</li>\n<li><strong>거주지 이전 필요성</strong> — 배우자와 함께 거주하기 위해 이전이 불가피해야 합니다. 별거 유지가 현실적으로 불가능한 사정이 있어야 합니다.</li>\n<li><strong>피보험 단위기간 180일</strong> — 이직 전 18개월 중 고용보험 피보험자로 180일 이상 가입(근로)해야 구직급여 수급이 가능합니다(고용보험법 제40조 제1항).</li>\n<li><strong>이직 사유 일치</strong> — 이직확인서에 기재된 사유와 실제 사유가 일치해야 합니다. 사전에 회사에 "거주이전으로 인한 이직"으로 기재를 요청하세요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 발령 사실 증명 서류(발령장 사본)와 이사 사실 증명(주민등록등본 이전)이 핵심 서류입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 배우자 발령 실업급여 신청 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용센터 안내 절차를 참고하면 다음 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 이직 전 서류 준비</strong> (이직 전) — 배우자 발령장 사본 또는 재직증명서(근무지 변경 내용 포함) 수령. 이사 예정 계획서 또는 임대차 계약서 준비.</li>\n<li><strong>2단계 — 이직확인서 확인</strong> (이직일 전후) — 회사에 이직확인서 이직 사유를 "거주이전 필요" 또는 "배우자 발령"으로 기재 요청. 개인사정 기재 시 불인정 위험 있음.</li>\n<li><strong>3단계 — 수급자격 신청</strong> (이직일로부터 14일 이내 권장) — 거주지 관할 고용센터 방문 또는 워크넷(work.go.kr) 온라인 신청. 14일 이후에도 신청 가능하나 그 기간은 수급 기간에서 제외됩니다.</li>\n<li><strong>4단계 — 구직 활동 계획 제출</strong> — 수급자격 인정 후 취업희망카드 제출. 이후 2~4주 간격으로 실업인정일에 구직활동 보고.</li>\n<li><strong>5단계 — 구직급여 수령</strong> — 인정 후 피보험기간에 따라 120~270일 분 지급. 1일 지급액 = 이직 전 평균임금의 60%.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">이직 사유와 피보험 기간을 입력하면 수급 가능성을 확인할 수 있습니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">실업급여 받을 수 있는지 AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '이직확인서에 "개인사정"이라고 기재됐을 때 대응 방법',
        content:
          '<p><strong style="color:#1e3a5f">이직확인서 정정을 신청하면 실제 사유로 변경할 수 있습니다.</strong></p>\n<ul>\n<li><strong>이직확인서 정정 신청</strong> — 이직 후 근로복지공단 또는 관할 고용센터에 "피보험자격 확인청구"로 이직 사유 정정 신청 가능.</li>\n<li><strong>증빙 서류 제출</strong> — 배우자 발령장·인사발령 통보서, 주민등록등본(이전 전후), 임대차 계약서 또는 매매 계약서 준비.</li>\n<li><strong>통근 불가 입증</strong> — 배우자 신규 근무지와 현 거주지 간 거리·소요시간 자료(지도 앱 캡처 포함)를 제출하면 도움이 됩니다.</li>\n<li><strong>심사청구</strong> — 정정 신청이 거부됐다면 60일 이내 고용보험 심사청구, 재심사 청구 순으로 불복 절차를 검토할 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이직 전에 회사 인사팀과 이직 사유 기재를 먼저 협의하면 정정 절차를 거치지 않아도 됩니다.</blockquote>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>배우자 발령장 또는 근무지 변경 확인서 (배우자 회사 발급)</li>\n<li>주민등록등본 (거주지 이전 전후 발급 각 1부)</li>\n<li>이직확인서 사본 (회사 기재 내용 확인용)</li>\n<li>임대차 계약서 또는 부동산 매매 계약서 (이전지 거주 증명)</li>\n<li>통근 불가 거리·시간 자료 (지도 앱 화면 캡처 등)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 배우자 동반 거소 이전으로 인한 이직의 정당성',
        summary:
          '고용보험심사위원회 2019재결 제96호(고용보험심사위원회, 2019.08.28 재결)에서 위원회는 자녀와 함께 거소를 이전하기 위해 불가피하게 이직한 청구인에 대해 고용보험법 시행규칙 [별표2] 해당 사유에 따라 수급자격이 인정된다고 판단했습니다.',
        takeaway:
          '가족 동반 거소 이전이 불가피한 사정이 증명되면 자진퇴사도 정당이직으로 인정받을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '배우자 발령이 아닌 이민이나 유학으로 이사해도 정당이직이 되나요?',
        answer:
          '<strong>배우자의 이민·유학으로 인한 거주지 이전도 정당이직 사유로 검토될 수 있습니다.</strong> 다만 출국 일정·비자 서류 등을 증빙으로 제출해야 합니다.',
      },
      {
        question: '발령 후 즉시 이직하지 않고 3개월 뒤에 퇴직해도 되나요?',
        answer:
          '<strong>이직 시점과 발령 사실 간의 인과관계가 인정되는 한 수개월 뒤 이직도 정당사유로 볼 여지가 있습니다.</strong> 다만 기간이 길수록 인과관계 입증이 어려워지므로 발령 후 가능한 빨리 이직하는 것이 유리합니다.',
      },
      {
        question: '피보험 기간이 180일이 안 되면 어떻게 되나요?',
        answer:
          '<strong>구직급여(실업급여) 수급이 불가합니다.</strong> 180일은 이직 전 18개월 내 고용보험 피보험자로 근로한 일수 기준입니다. 이전 직장 피보험 기간도 합산됩니다.',
      },
      {
        question: '이직확인서를 회사에서 안 써줄 때는 어떻게 하나요?',
        answer:
          '<strong>근로복지공단에 고용보험 피보험자격 확인청구를 하면 직권으로 이직 사유를 조사합니다.</strong> 이직일로부터 10년 이내에 신청할 수 있어요.',
      },
      {
        question: '실업급여를 받으면서 구직활동을 하지 않아도 되나요?',
        answer:
          '<strong>반드시 구직활동을 해야 합니다.</strong> 실업인정일마다 구직활동 내용(구직 지원서 제출, 취업 상담 등)을 보고해야 급여가 지급됩니다. 미이행 시 해당 기간 급여가 지급되지 않을 수 있습니다.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '자진퇴사 실업급여 인정 요건', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '실업급여 신청부터 수령까지 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '직장 괴롭힘 자진퇴사 실업급여', href: '/guide/unemployment/unemployment-workplace-bullying-just-cause' },
      { label: '권고사직 실업급여 인정', href: '/guide/unemployment/recommended-resignation-unemployment-benefit' },
      { label: '계약만료 후 실업급여 신청', href: '/guide/unemployment/contract-expiry-unemployment-benefit' },
    ],
  },

  // ─── 5. unemployment / workplace-bullying-just-cause ───
  {
    domain: 'unemployment',
    slug: 'unemployment-workplace-bullying-just-cause',
    keyword: '직장 내 괴롭힘 자진퇴사 실업급여',
    questionKeyword: '상사의 따돌림·폭언 때문에 못 버티고 퇴직하면 실업급여를 받을 수 있나요?',
    ctaKeyword: '직장 괴롭힘 실업급여 인정 요건 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '직장 내 괴롭힘 자진퇴사 실업급여 인정 5단계 | 로앤가이드',
      description:
        '직장 내 괴롭힘·따돌림으로 자진퇴사해도 정당이직이 인정되면 실업급여를 받을 수 있습니다. 증거 수집부터 14일 신청까지 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"팀장이 매일 폭언을 하고 업무에서 따돌려서 정말 더 못 버티겠어서 퇴직했어요. 실업급여는 못 받는 건지 막막합니다." 직장 내 괴롭힘(근로기준법 제76조의2)으로 인한 이직은 고용보험법 시행규칙 [별표2]에서 정한 정당이직 사유로 인정받을 수 있습니다. 단, 증거가 핵심입니다. 폭언·따돌림 기록을 미리 모아두지 않으면 인정이 어려울 수 있으니, 지금 바로 준비 방법을 확인하세요.</p>',
    sections: [
      {
        title: '직장 내 괴롭힘 자진퇴사 — 정당이직이 인정되려면?',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 시행규칙 [별표2] 제11호: 직장 내 괴롭힘으로 더 이상 근무가 불가능한 경우 정당이직이 검토될 수 있습니다.</strong></p>\n<ul>\n<li><strong>괴롭힘 행위 요건</strong> — 사용자·동료가 지위·관계를 이용해 업무상 적정 범위를 벗어나 신체적·정신적 고통을 준 경우(근로기준법 제76조의2). 1회성이 아닌 반복성·지속성이 인정 가능성을 높입니다.</li>\n<li><strong>신고 절차 이행 여부</strong> — 사내 신고(고충처리위원회)나 고용노동부 신고를 거쳤음에도 개선되지 않은 경우 정당이직 인정에 유리합니다.</li>\n<li><strong>의료 기록</strong> — 괴롭힘으로 인한 정신건강의학과 진료, 상담 기록이 있다면 피해 사실 입증에 크게 도움이 됩니다.</li>\n<li><strong>통상의 근로자도 이직했을 것</strong> — "같은 상황의 다른 근로자도 이직할 수밖에 없었을 것"이라는 객관적 판단이 이루어져야 합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 구두 폭언만으로는 입증이 약합니다. 문자·이메일·녹취·동료 진술 등 객관적 증거가 필수입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 직장 괴롭힘 실업급여 신청 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용센터 정당이직 인정 절차를 참고하면 다음 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 수집</strong> (이직 전·후) — 괴롭힘 메시지·이메일 캡처, 녹취파일(본인이 당사자인 대화), 정신과 진료 기록, 동료 진술서 확보.</li>\n<li><strong>2단계 — 사내 신고 또는 고용노동부 신고 (권장)</strong> — 사내 신고가 어렵다면 고용노동부 1350 전화 또는 온라인 신고. 신고 이력이 정당이직 입증에 활용됩니다.</li>\n<li><strong>3단계 — 이직확인서 확인</strong> (이직일 전후) — 회사에 이직 사유를 "직장 내 괴롭힘으로 인한 이직"으로 기재 요청. 개인사정 기재 시 수급자격 불인정 위험.</li>\n<li><strong>4단계 — 수급자격 신청</strong> (이직일로부터 14일 이내 권장) — 관할 고용센터 방문 또는 워크넷 온라인 신청. 괴롭힘 증거·신고 이력 제출.</li>\n<li><strong>5단계 — 구직급여 수령</strong> — 인정 후 피보험기간에 따라 120~270일. 구직활동 의무 이행 필수.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">이직 사유와 증거 현황을 입력하면 수급 가능성을 확인할 수 있습니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">실업급여 받을 수 있는지 AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '이직확인서에 "개인사정"이라고 기재됐을 때 대응 방법',
        content:
          '<p><strong style="color:#1e3a5f">이직 사유가 잘못 기재됐다면 사후 정정 신청을 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>피보험자격 확인청구</strong> — 근로복지공단에 이직 사유 정정 요청. 증거 자료를 함께 제출해야 합니다.</li>\n<li><strong>고용노동부 직장 내 괴롭힘 신고</strong> — 이직 전·후 신고 이력이 있다면 수급자격 심사 시 유력한 증거가 됩니다.</li>\n<li><strong>심사청구·재심사청구</strong> — 수급자격 불인정 처분을 받은 날로부터 90일 이내 심사청구, 심사 결과 통보 후 90일 이내 재심사청구 가능.</li>\n<li><strong>행정소송</strong> — 재심사 결과에도 불복하면 90일 이내 행정소송 제기 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이직 전에 정신건강의학과 진료 기록을 만들어두면 퇴직 후 "사후 꾸민 증거"라는 주장을 반박할 수 있습니다.</blockquote>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>괴롭힘 메시지·이메일 캡처 또는 출력본</li>\n<li>녹취 파일 및 녹취 내용 요약서</li>\n<li>정신건강의학과·상담센터 진료 기록</li>\n<li>사내 신고 서류 또는 고용노동부 신고 접수 확인증</li>\n<li>동료 진술서 (선택, 있으면 유리)</li>\n<li>이직확인서 사본 (이직 사유 확인용)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 극도의 업무 스트레스·정신질환으로 인한 이직의 정당성',
        summary:
          '고용보험심사위원회 2020재결 제241호(고용보험심사위원회, 2021.02.03 재결)에서 위원회는 근무 중 극도의 업무 스트레스로 정신질환이 재발해 근무 계속이 불가능했음에도 병가가 허용되지 않아 퇴사한 청구인에 대해, 통상의 다른 근로자도 이직했을 것으로 볼 수 있는 사정을 인정하여 수급자격 불인정 처분을 취소하는 결정을 내렸습니다.',
        takeaway:
          '의료 기록으로 정신적 피해를 입증하면 자진퇴사도 정당이직으로 인정받는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '녹취 없이 구두 폭언만 있는데 입증이 가능한가요?',
        answer:
          '<strong>구두 폭언만으로는 입증이 어렵습니다.</strong> 폭언 직후 작성한 메모(날짜·내용·목격자), 정신과 진료 기록, 동료 진술서 등을 함께 모으는 것이 좋아요.',
      },
      {
        question: '사내 신고를 하면 더 불이익을 받을 것 같아서 못 했어요. 신고 없이도 인정되나요?',
        answer:
          '<strong>신고 이력이 없어도 인정될 수 있으나 입증 부담이 커집니다.</strong> 신고 대신 이직 전 정신과 진료, 녹취, 메신저 기록을 확보해두면 사후 입증에 도움이 됩니다.',
      },
      {
        question: '이미 이직했는데 지금이라도 직장 내 괴롭힘 신고를 할 수 있나요?',
        answer:
          '<strong>이직 후에도 사업장 관할 고용노동지청에 신고할 수 있습니다.</strong> 단, 이직 후 수개월이 지나면 증거 확보가 어려울 수 있으니 빠를수록 좋습니다.',
      },
      {
        question: '수급자격이 불인정됐을 때 심사청구는 어디에 하나요?',
        answer:
          '<strong>처분을 받은 날(또는 안 날)로부터 90일 이내에 고용보험 심사관에게 심사청구서를 제출합니다.</strong> 이후 결과에 불복하면 고용보험심사위원회에 재심사청구를 할 수 있어요.',
      },
      {
        question: '직장 내 괴롭힘으로 정당이직이 인정되면 피보험 단위기간 요건도 면제되나요?',
        answer:
          '<strong>면제되지 않습니다.</strong> 정당이직이 인정돼도 이직 전 18개월 내 피보험 단위기간 180일 이상(고용보험법 제40조)은 반드시 충족해야 구직급여를 받을 수 있습니다.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '배우자 발령 거주이전 자진퇴사 실업급여', href: '/guide/unemployment/unemployment-spouse-relocation-just-cause' },
      { label: '자진퇴사 실업급여 인정 요건', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '실업급여 신청부터 수령까지 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '권고사직 실업급여 인정', href: '/guide/unemployment/recommended-resignation-unemployment-benefit' },
      { label: '수급자격 심사청구 절차', href: '/guide/unemployment/unemployment-fraud-penalty-response' },
    ],
  },
];
