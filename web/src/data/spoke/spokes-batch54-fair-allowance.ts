import { SpokePage } from '../spoke-pages';

// batch54 공정수당 정책 안내 5개 (2026-05-04)
//
// 정부 발표 정본: 관계부처 합동 2026년 4월 28일 "공공부문 비정규직 처우개선 대책"
// — 공정수당 6단계 정액 (38.2만~248.8만), 2027.1 시행 예정, 공공부문 한정
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 공공부문 1년 미만 기간제 노동자가 정부 발표안 기준 공정수당 대상자에 해당하는지·근무기간·고용형태별 적용 여부를 정리하도록 돕는 페이지다.
// 2. 이 페이지는 본인의 근무기간(1~12개월)에 따라 공정수당 6단계 지급액이 어떻게 달라지는지·일할/시간비례 계산이 어떻게 되는지 미리 예측할 수 있도록 돕는 페이지다.
// 3. 이 페이지는 민간 부문 기간제 노동자가 본인이 공정수당 대상이 아닌 이유와 민간 부문에서 활용할 수 있는 대체 권리(퇴직금·실업급여·차별시정)를 정리하도록 돕는 페이지다.
// 4. 이 페이지는 공공부문 1년 미만 기간제 계약이 만료된 노동자가 공정수당(2027~)과 실업급여(현행)를 어떻게 동시 활용할지, 둘의 차이·신청 시점·중복 가능성을 정리하도록 돕는 페이지다.
// 5. 이 페이지는 1년 미만 반복 계약(예: 11개월 + 11개월) 때문에 퇴직금을 받지 못한 공공부문 기간제 노동자가 공정수당으로 보상되는 범위와 계속근로 인정 다툼을 함께 검토하도록 돕는 페이지다.

export const spokesBatch54FairAllowance: SpokePage[] = [
  // ─── 1. wage / fair-allowance-2027-eligibility-guide ───
  {
    domain: 'wage',
    slug: 'fair-allowance-2027-eligibility-guide',
    keyword: '공정수당 대상자 자격',
    questionKeyword: '공정수당 받을 수 있나요? 1년 미만 기간제 대상자 정리',
    ctaKeyword: '공정수당 대상자 해당 여부 점검',
    type: 'Q&A형',
    perspective: 'neutral',
    meta: {
      title: '공정수당 대상자 정리 — 1년 미만 기간제 6단계 자격 | 로앤가이드',
      description:
        '관계부처 합동 발표안 기준 공정수당 대상자·근무기간 6단계·고용형태 적용 범위를 한 번에 정리했습니다. 본인 해당 여부를 지금 확인하세요.',
    },
    intro:
      '<p>"공공기관 1년 미만 계약직으로 일하고 있는데, 정부가 발표한 공정수당이라는 게 저한테도 적용되나요?" 관계부처 합동 2026년 4월 28일 발표안에 따르면, 공정수당은 공공부문(중앙행정기관·지방정부·공공기관·지방공기업·교육기관·자회사) 기간제 노동자 중 1년 미만 근무자에게 계약 만료 시 일시 지급되는 보상 성격의 수당으로 발표되어 있습니다. 2027년 1월 시행 예정으로 정부예산안에 반영되며, 공공부문 기간제 약 14.6만 명 중 1년 미만 약 7.3만 명(50%)이 대상자로 검토되고 있습니다. 본인이 해당될지는 근무기관·고용형태·근무기간 3가지로 갈리니, 정부 발표안 기준으로 차근차근 확인해보세요.</p>',
    sections: [
      {
        title: 'Q. 공정수당 대상자 — 정부 발표안 기준 핵심 4요건',
        content:
          '<p><strong style="color:#1e3a5f">관계부처 합동 2026년 4월 28일 발표안 기준, 공정수당 대상자는 다음 4가지 요건을 모두 충족하는 것으로 정리되어 있습니다.</strong></p>\n<ul>\n<li><strong>① 공공부문 소속</strong> — 중앙행정기관·지방정부·공공기관·지방공기업·교육기관(국공립 학교·국공립 대학교) + 자회사. 민간 부문은 적용 대상에서 제외.</li>\n<li><strong>② 기간제 노동자</strong> — 정해진 계약 기간이 있는 비정규직 노동자(상시·지속업무 정규직 전환 대상은 별도 트랙).</li>\n<li><strong>③ 1년 미만 근무</strong> — 1개월 ~ 12개월 미만 근무자. 1년 이상 근무는 퇴직금 지급 대상이라 별도 보호 트랙.</li>\n<li><strong>④ 계약 만료 시점</strong> — 공정수당은 계약 만료 시 일시 지급되는 보상 성격으로 발표되어 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공공부문 비정규직 처우개선 대책 발표 자료에 따르면, 공공부문 기간제 노동자 약 14.6만 명 중 1년 미만 근무자가 약 7.3만 명(50.0%)으로 추정되고 있습니다. 이들이 공정수당 1차 대상으로 발표되었습니다.</blockquote>\n<p style="margin-top:14px">본인이 위 4가지를 모두 충족하면 공정수당 대상자에 해당할 소지가 있습니다. 단, 공정수당은 2027년 1월 시행 예정이므로 그 이전에 계약 만료된 경우에는 적용 여부가 달라질 수 있어, 정부 추가 가이드라인(2026년 5월 발표 예정) 확인이 필요합니다.</p>',
      },
      {
        title: '근무기간별 공정수당 6단계 정액 + 일할·시간비례 계산',
        content:
          '<p><strong style="color:#1e3a5f">정부 발표안 기준, 공정수당은 근무기간 6단계로 정액 지급되는 구조로 발표되어 있습니다(2027년 시행 기준).</strong></p>\n<table style="border-collapse:collapse;width:100%;margin:12px 0">\n<thead>\n<tr style="background:#f5f5f5"><th style="border:1px solid #ddd;padding:8px">근무기간</th><th style="border:1px solid #ddd;padding:8px">보상지급률</th><th style="border:1px solid #ddd;padding:8px">공정수당 (월 기준금액 254.5만원 기준)</th></tr>\n</thead>\n<tbody>\n<tr><td style="border:1px solid #ddd;padding:8px">1~2개월</td><td style="border:1px solid #ddd;padding:8px">10%</td><td style="border:1px solid #ddd;padding:8px">38.2만원</td></tr>\n<tr><td style="border:1px solid #ddd;padding:8px">3~4개월</td><td style="border:1px solid #ddd;padding:8px">9.5%</td><td style="border:1px solid #ddd;padding:8px">84.6만원</td></tr>\n<tr><td style="border:1px solid #ddd;padding:8px">5~6개월</td><td style="border:1px solid #ddd;padding:8px">9%</td><td style="border:1px solid #ddd;padding:8px">126만원</td></tr>\n<tr><td style="border:1px solid #ddd;padding:8px">7~8개월</td><td style="border:1px solid #ddd;padding:8px">8.5%</td><td style="border:1px solid #ddd;padding:8px">162.2만원</td></tr>\n<tr><td style="border:1px solid #ddd;padding:8px">9~10개월</td><td style="border:1px solid #ddd;padding:8px">8.5%</td><td style="border:1px solid #ddd;padding:8px">205.5만원</td></tr>\n<tr><td style="border:1px solid #ddd;padding:8px">11~12개월</td><td style="border:1px solid #ddd;padding:8px">8.5%</td><td style="border:1px solid #ddd;padding:8px">248.8만원</td></tr>\n</tbody>\n</table>\n<ul>\n<li><strong>기준금액 254.5만원</strong> — 2026년 기준 최저임금의 118%이자 전국 지방정부 생활임금 평균으로 발표안에 정리되어 있습니다.</li>\n<li><strong>1개월 미만 근무자</strong> — 1~2개월 구간(38.2만원)을 일할 계산해 지급하는 것으로 검토되고 있습니다.</li>\n<li><strong>초단시간 노동자(주 15시간 미만)</strong> — 구간별 공정수당을 시간비례로 지급하는 방식으로 발표되어 있습니다.</li>\n<li><strong>단기계약 보상지급률 ↑</strong> — 단기일수록 비율을 높여 장기계약을 유도하는 효과를 의도한 설계로 안내되고 있습니다.</li>\n</ul>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 공정수당 도입 일정 4단계',
        content:
          '<p><strong style="color:#1e3a5f">정부 발표안 기준 공정수당은 다음 4단계 일정으로 도입되는 것으로 안내되고 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정부 발표</strong> (2026.4.28) — 관계부처 합동(노동부·재경부·기획처·교육부·행안부·인사처)이 공공부문 비정규직 처우개선 대책을 발표.</li>\n<li><strong>2단계 — 가이드라인 마련</strong> (2026.5) — 비정규직 처우개선 가이드라인이 마련될 예정. 공정수당 대상자 세부 기준·지급 절차가 이 단계에서 구체화될 것으로 예상.</li>\n<li><strong>3단계 — 정부예산안 편성</strong> (2026.9) — 2027년도 정부예산안에 공정수당·적정임금 재원이 편성될 예정.</li>\n<li><strong>4단계 — 공정수당 시행</strong> (2027.1) — 전체 공공부문에서 공정수당 + 적정임금이 동시 시행될 예정.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 본인이 공정수당 대상자에 해당될지, AI로 점검해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">소속기관·고용형태·근무기간을 입력하면 정부 발표안 기준 대상자 해당 여부와 예상 지급액을 정리해볼 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비·확인 체크리스트 / ⚠️ 자주 하는 오해 / 🏛️ 안내·상담 경로',
        content:
          '<h4>📋 본인 해당 여부 확인 체크리스트</h4>\n<ul>\n<li>소속기관이 공공부문(중앙행정기관·지방정부·공공기관·지방공기업·교육기관·자회사)인가</li>\n<li>고용형태가 기간제(계약 기간 정해진 비정규직)인가</li>\n<li>총 근무기간이 1년 미만(1~12개월)인가</li>\n<li>2027년 1월 이후 계약 만료 예정인가</li>\n<li>근로계약서에 계약 기간·고용형태가 명확히 기재되어 있는가</li>\n<li>주 소정근로시간(초단시간 여부)이 시간비례 계산에 영향</li>\n</ul>\n<h4>⚠️ 자주 하는 오해 (정부 발표안 기준 정정)</h4>\n<ul>\n<li>"민간 회사 비정규직도 받는 줄" → 발표안 기준 공공부문 한정. 민간은 별도.</li>\n<li>"1년 이상 일했어도 받는 줄" → 발표안 기준 1년 미만 근무자가 대상. 1년 이상은 퇴직금 트랙.</li>\n<li>"2026년부터 받는 줄" → 발표안 일정 기준 2027년 1월 시행 예정. 2026년은 가이드라인·예산안 편성 단계.</li>\n<li>"매월 받는 줄" → 발표안 기준 계약 만료 시 일시 지급으로 안내됨.</li>\n</ul>\n<h4>🏛️ 안내·상담 경로</h4>\n<ul>\n<li>고용노동부 고객상담센터 1350 — 공정수당·비정규직 처우개선 정책 안내</li>\n<li>관할 지방고용노동지청 — 본인 사업장의 공정수당 적용 여부 확인</li>\n<li>대한법률구조공단 132 — 무료 법률상담</li>\n<li>고용노동부 노동포털(labor.moel.go.kr) — 정책 자료 확인</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 1년 미만 반복 계약과 계속근로 인정',
        summary:
          '대법원 2021다218083 사건(대법원, 2022.02.17 선고)에서 법원은 시용기간 만료 후 본 근로계약을 체결하여 공백 기간 없이 계속 근무한 경우 시용기간과 본 근로계약기간을 통산한 기간을 퇴직금 산정의 기초가 되는 계속근로기간으로 보아야 한다고 판시했습니다.',
        takeaway: '1년 미만으로 보이는 반복 계약도 계속근로로 통산되면 퇴직금 트랙으로 갈 수 있어, 공정수당과 별개로 계속근로 다툼 가능성을 함께 점검해볼 가치가 있습니다.',
      },
    ],
    faq: [
      {
        question: '공공기관 자회사 직원도 공정수당 대상인가요?',
        answer:
          '<strong>관계부처 합동 발표안에 따르면 공공부문 + 자회사가 적용 범위로 명시되어 있어요.</strong> 다만 자회사라도 민간법인 위탁계약 형식이면 가이드라인(2026.5) 확인이 필요합니다.',
      },
      {
        question: '6개월 일하다 그만뒀다가 다른 공공기관에 또 6개월 들어가면 어떻게 되나요?',
        answer:
          '<strong>발표안 기준 공정수당은 각 계약 만료 시 단위로 지급되는 구조로 정리되어 있습니다.</strong> 따라서 각각의 계약별로 5~6개월 구간(126만원) 적용 여지가 있어요.',
      },
      {
        question: '시간제(주 20시간) 근무자도 똑같이 받나요?',
        answer:
          '<strong>발표안 기준 초단시간(주 15시간 미만)은 시간비례 지급으로 명시되어 있습니다.</strong> 주 20시간이면 일반 산정 + 시간비례 일부 적용 가능성, 가이드라인 확인 필요.',
      },
      {
        question: '계약이 2027년 1월 이전에 끝나면 못 받나요?',
        answer:
          '<strong>현 발표안은 2027년 1월 시행 기준이에요.</strong> 시행 전 계약 만료의 소급 적용 여부는 2026년 5월 가이드라인·예산안 편성에서 결정될 가능성이 있습니다.',
      },
      {
        question: '공공부문이라는 게 정확히 어디까지인가요?',
        answer:
          '<strong>발표안 기준 중앙행정기관·지방정부·공공기관·지방공기업·교육기관(국공립 학교·대학교) + 자회사로 정리되어 있습니다.</strong> 본인 사업장의 분류는 인사팀·고용센터에 확인하는 것이 정확해요.',
      },
      {
        question: '퇴직금이랑 공정수당 둘 다 받을 수 있나요?',
        answer:
          '<strong>퇴직금은 1년 이상 계속근로자가 대상이고, 공정수당은 1년 미만이 대상이라 통상 양립하지 않습니다.</strong> 다만 반복 계약으로 계속근로 인정되면 퇴직금 트랙으로 다툴 여지가 있어요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '공정수당 6단계 지급액 계산', href: '/guide/wage/fair-allowance-amount-calculation' },
      { label: '공정수당 민간 적용 여부', href: '/guide/wage/fair-allowance-public-vs-private' },
      { label: '공정수당 vs 실업급여', href: '/guide/unemployment/fixed-term-contract-1year-vs-fair-allowance' },
      { label: '1년 미만 반복 계약 퇴직금', href: '/guide/retirement/sub-1year-contract-no-severance-rescue' },
      { label: '기간제 만료 정당이직', href: '/guide/unemployment/unemployment-fixed-term-expire-voluntary-distinguish' },
    ],
  },

  // ─── 2. wage / fair-allowance-amount-calculation ───
  {
    domain: 'wage',
    slug: 'fair-allowance-amount-calculation',
    keyword: '공정수당 지급액 계산',
    questionKeyword: '공정수당 얼마 받나요? 근무기간별 6단계 지급액 정리',
    ctaKeyword: '공정수당 본인 예상 지급액 점검',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '공정수당 지급액 6단계 — 38.2만~248.8만 정액표 | 로앤가이드',
      description:
        '관계부처 합동 발표안 기준 공정수당 6단계 정액(38.2만~248.8만)과 일할·시간비례 계산법을 정리했습니다. 본인 예상액을 지금 확인하세요.',
    },
    intro:
      '<p>"공정수당이 도입된다는데, 11개월 일하면 얼마 받게 되는 건가요?" 관계부처 합동 2026년 4월 28일 발표안에 따르면, 공정수당은 근무기간을 1~2개월부터 11~12개월까지 6단계로 나눠 38만 2,000원에서 248만 8,000원까지 정액 지급되는 구조로 정리되어 있습니다. 기준금액은 2026년 기준 최저임금의 118%인 254만 5,000원(전국 지방정부 생활임금 평균)이고, 단기일수록 보상지급률을 높여 장기계약을 유도하는 설계로 발표되었어요. 1개월 미만은 일할계산, 초단시간 노동자(주 15시간 미만)는 시간비례로 지급되는 것으로 안내되고 있습니다. 본인 근무기간·고용형태에 따라 어떻게 산정되는지 단계별로 정리해보세요.</p>',
    sections: [
      {
        title: '근무기간 6단계 정액표 — 정부 발표안 기준',
        content:
          '<p><strong style="color:#1e3a5f">공공부문 비정규직 처우개선 대책 발표 자료에 따르면, 공정수당은 근무기간별로 다음과 같이 정액 지급되는 것으로 정리되어 있습니다(2027년 시행 기준).</strong></p>\n<table style="border-collapse:collapse;width:100%;margin:12px 0">\n<thead>\n<tr style="background:#f5f5f5"><th style="border:1px solid #ddd;padding:8px">근무기간</th><th style="border:1px solid #ddd;padding:8px">보상지급률</th><th style="border:1px solid #ddd;padding:8px">공정수당 정액</th><th style="border:1px solid #ddd;padding:8px">월 환산 의미</th></tr>\n</thead>\n<tbody>\n<tr><td style="border:1px solid #ddd;padding:8px">1~2개월</td><td style="border:1px solid #ddd;padding:8px">10%</td><td style="border:1px solid #ddd;padding:8px">38만 2,000원</td><td style="border:1px solid #ddd;padding:8px">월 19.1만원 수준</td></tr>\n<tr><td style="border:1px solid #ddd;padding:8px">3~4개월</td><td style="border:1px solid #ddd;padding:8px">9.5%</td><td style="border:1px solid #ddd;padding:8px">84만 6,000원</td><td style="border:1px solid #ddd;padding:8px">월 21.2만원 수준</td></tr>\n<tr><td style="border:1px solid #ddd;padding:8px">5~6개월</td><td style="border:1px solid #ddd;padding:8px">9%</td><td style="border:1px solid #ddd;padding:8px">126만원</td><td style="border:1px solid #ddd;padding:8px">월 21만원 수준</td></tr>\n<tr><td style="border:1px solid #ddd;padding:8px">7~8개월</td><td style="border:1px solid #ddd;padding:8px">8.5%</td><td style="border:1px solid #ddd;padding:8px">162만 2,000원</td><td style="border:1px solid #ddd;padding:8px">월 20.3만원 수준</td></tr>\n<tr><td style="border:1px solid #ddd;padding:8px">9~10개월</td><td style="border:1px solid #ddd;padding:8px">8.5%</td><td style="border:1px solid #ddd;padding:8px">205만 5,000원</td><td style="border:1px solid #ddd;padding:8px">월 20.6만원 수준</td></tr>\n<tr><td style="border:1px solid #ddd;padding:8px">11~12개월</td><td style="border:1px solid #ddd;padding:8px">8.5%</td><td style="border:1px solid #ddd;padding:8px">248만 8,000원</td><td style="border:1px solid #ddd;padding:8px">월 20.7만원 수준</td></tr>\n</tbody>\n</table>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">참고: 정부 발표안 기준 기준금액 254만 5,000원 = 2026년 기준 최저임금의 118% = 전국 지방정부 생활임금 평균. 단기일수록 보상지급률(10% → 8.5%)을 높여 단기계약 자체를 줄이는 인센티브 설계로 안내되고 있습니다.</blockquote>',
      },
      {
        title: '특수 사정별 산정 방법 — 1개월 미만·초단시간·중도퇴사',
        content:
          '<p><strong style="color:#1e3a5f">근무 형태가 일반과 다르면 다음 방식으로 산정되는 것으로 발표안에 정리되어 있습니다.</strong></p>\n<ul>\n<li><strong>1개월 미만 근무</strong> — 1~2개월 구간 공정수당(38.2만원)을 실제 근무일수 기준으로 일할 계산해 지급(예: 15일 근무 시 약 19.1만원 수준 검토 가능).</li>\n<li><strong>초단시간 노동자</strong> — 주 15시간 미만 근무자는 구간별 공정수당을 본인 소정근로시간 기준으로 시간비례 지급(예: 주 10시간 근무 + 6개월 근무 시 126만원 × 10/40 = 31.5만원 수준 검토 가능). 정확한 산정 비율은 가이드라인(2026.5) 확인 필요.</li>\n<li><strong>중도 퇴사·계약 해지</strong> — 발표안 기준 본인 사정 중도퇴사도 실근무기간에 해당하는 구간 적용으로 검토되고 있음. 다만 결격사유(징계해고 등)가 있으면 가이드라인 결정에 따라 달라질 가능성.</li>\n<li><strong>병가·휴직 기간</strong> — 가이드라인에서 별도 정리될 것으로 예상. 보통 병가는 근무일수에 포함, 무급휴직은 제외되는 경향.</li>\n<li><strong>예산 변동</strong> — 정부 발표안 기준 2027년 정부예산안 편성에 따라 시행되므로, 2026년 9월 예산안 발표 후 최종 확정될 것으로 안내되고 있습니다.</li>\n</ul>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 본인 예상 지급액 산출 4단계',
        content:
          '<p><strong style="color:#1e3a5f">정부 발표안 기준 본인 공정수당 예상액은 다음 4단계로 산출해볼 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 본인 근무기간 확정</strong> (계약서 확인) — 입사일·계약 만료일·실근무 시작일·종료일 정리. 시용기간이 있다면 시용 포함 여부 확인.</li>\n<li><strong>2단계 — 6단계 구간 매칭</strong> — 1~2/3~4/5~6/7~8/9~10/11~12개월 중 본인 구간 확인. 예: 11.5개월 → 11~12개월 구간(248.8만원).</li>\n<li><strong>3단계 — 고용형태 보정</strong> — 풀타임이면 정액 그대로. 초단시간(주 15시간 미만)이면 시간비례. 중도퇴사면 일할계산 적용.</li>\n<li><strong>4단계 — 가이드라인·예산안 확인</strong> (2026.5 / 2026.9) — 세부 산정 비율·결격사유·소급 여부는 2026년 5월 가이드라인 + 9월 예산안에서 최종 확정될 예정. 인사팀·노동포털에서 업데이트 확인.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 본인 근무기간·고용형태 기준 예상액, AI로 정리하세요</strong></p>\n<p style="margin:0;font-size:0.95em">근무기간·소정근로시간·계약 형태를 입력하면 발표안 기준 예상 지급액과 추가 확인 사항을 정리해볼 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비·확인 체크리스트 / ⚠️ 자주 하는 오해 / 🏛️ 안내·상담 경로',
        content:
          '<h4>📋 예상액 산출용 자료 체크리스트</h4>\n<ul>\n<li>근로계약서 (계약 기간·소정근로시간·고용형태 명시)</li>\n<li>출근부·근태기록 (실근무일수·휴가·휴직 기간 확인)</li>\n<li>급여명세서 (월 정액임금이 254.5만원에 미달하는지 적정임금 별도 검토용)</li>\n<li>4대보험 가입이력 (계속근로기간 입증용)</li>\n<li>소속기관 인사·총무팀 공정수당 안내문 (가이드라인 발표 후)</li>\n</ul>\n<h4>⚠️ 자주 하는 오해</h4>\n<ul>\n<li>"매월 38만원씩 받는 줄" → 발표안 기준 계약 만료 시 일시 지급. 6단계 구간 정액.</li>\n<li>"근무기간 1년 정확히 채우면 248.8만원" → 1년 정확히 채우면 1년 이상 근무자라 퇴직금 트랙. 11~12개월 미만이 248.8만원 구간.</li>\n<li>"보상지급률이 높아서 단기가 유리" → 단기일수록 비율 높지만 절대 금액은 장기가 많음. 11~12개월(248.8만원) > 1~2개월(38.2만원).</li>\n<li>"기준금액 254.5만원만큼 받는 줄" → 254.5만원은 기준이고, 실제 지급액은 보상지급률 적용한 38.2만~248.8만원 구간.</li>\n</ul>\n<h4>🏛️ 안내·상담 경로</h4>\n<ul>\n<li>고용노동부 고객상담센터 1350 — 정책 안내</li>\n<li>관할 지방고용노동지청 — 사업장별 적용 여부</li>\n<li>대한법률구조공단 132 — 무료 법률상담</li>\n<li>소속기관 인사·총무팀 — 본인 적용 가이드라인 확인</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 시용기간 + 본계약 통산 계속근로 인정',
        summary:
          '대법원 2021다218083 사건(대법원, 2022.02.17 선고)에서 법원은 시용기간 만료 후 본 근로계약을 체결하여 공백 기간 없이 계속 근무한 경우 시용기간과 본 근로계약기간을 통산한 기간을 퇴직금 산정의 기초가 되는 계속근로기간으로 보아야 한다고 판시했습니다.',
        takeaway: '시용 1개월 + 본계약 11개월 = 1년 정확히 채우면 퇴직금 대상이 될 수 있어, 공정수당 11~12개월 구간이 아닌 퇴직금 트랙으로 검토해볼 가치가 있습니다.',
      },
    ],
    faq: [
      {
        question: '11.5개월 근무하면 248.8만원인가요?',
        answer:
          '<strong>발표안 기준 11~12개월 구간이 248.8만원으로 정리되어 있어 그 구간에 해당할 소지가 있습니다.</strong> 다만 12개월(1년)을 채우면 퇴직금 트랙으로 넘어가니 정확한 종료일 확인이 중요해요.',
      },
      {
        question: '중간에 자진사퇴하면 못 받나요?',
        answer:
          '<strong>발표안 기준 실근무기간 구간 적용으로 검토되고 있어요.</strong> 다만 결격사유(징계해고 등)는 가이드라인(2026.5)에서 별도 정리될 것으로 예상됩니다.',
      },
      {
        question: '주 15시간 미만 단시간이면 얼마인가요?',
        answer:
          '<strong>발표안 기준 초단시간 노동자는 시간비례 지급으로 명시되어 있습니다.</strong> 정확한 산정 비율은 2026년 5월 가이드라인에서 확정될 예정이에요.',
      },
      {
        question: '경기도 공정수당이랑 같은 건가요?',
        answer:
          '<strong>경기도 공정수당(2026년 기준 5~10% 차등, 40.1만~153.7만원)은 지방정부 자체 사업이고, 정부 발표안 공정수당(38.2만~248.8만원)은 전체 공공부문에 적용되는 별도 정책으로 발표되었습니다.</strong>',
      },
      {
        question: '2027년 시행 전 계약이 끝나면 못 받나요?',
        answer:
          '<strong>현 발표안은 2027년 1월 시행 기준입니다.</strong> 시행 전 계약자에 대한 소급 여부는 2026년 5월 가이드라인·9월 예산안 편성 단계에서 정리될 가능성이 있어요.',
      },
      {
        question: '연장계약하면 어떻게 되나요?',
        answer:
          '<strong>발표안 기준 계약 만료 시 일시 지급이라 연장 시점은 미지급, 최종 만료 시 누적 근무기간 구간 적용으로 검토될 가능성이 있습니다.</strong> 가이드라인 확인이 필요해요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '공정수당 대상자 자격', href: '/guide/wage/fair-allowance-2027-eligibility-guide' },
      { label: '공정수당 민간 적용 여부', href: '/guide/wage/fair-allowance-public-vs-private' },
      { label: '공정수당 vs 실업급여', href: '/guide/unemployment/fixed-term-contract-1year-vs-fair-allowance' },
      { label: '1년 미만 반복 계약 퇴직금', href: '/guide/retirement/sub-1year-contract-no-severance-rescue' },
      { label: '정기상여 통상임금 산입', href: '/guide/wage/wage-ordinary-wage-bonus-included' },
    ],
  },

  // ─── 3. wage / fair-allowance-public-vs-private ───
  {
    domain: 'wage',
    slug: 'fair-allowance-public-vs-private',
    keyword: '공정수당 민간 적용',
    questionKeyword: '공정수당 민간 노동자도 받나요? 공공부문만 적용 여부',
    ctaKeyword: '민간 부문 활용 가능한 대체 권리 점검',
    type: '비교형',
    perspective: 'neutral',
    meta: {
      title: '공정수당 민간 적용 여부 — 공공만 7.3만 vs 민간 대체 3가지 | 로앤가이드',
      description:
        '관계부처 합동 발표안 기준 공정수당은 공공부문 한정입니다. 민간 부문에서 활용할 수 있는 퇴직금·실업급여·차별시정 3가지 대체 권리를 지금 확인하세요.',
    },
    intro:
      '<p>"민간 회사 1년 미만 계약직인데, 공정수당이라는 게 저한테도 적용되나요?" 결론부터 말씀드리면, 관계부처 합동 2026년 4월 28일 발표안에 따르면 공정수당은 공공부문(중앙행정기관·지방정부·공공기관·지방공기업·교육기관·자회사) 한정으로 도입되는 것으로 정리되어 있습니다. 민간 부문 기간제 노동자는 현 단계에서 직접 대상이 아닙니다. 다만 정부는 발표안에서 "공공부문이 모범적 사용자로서 처우개선을 선도하여 민간으로 확산 필요"라고 명시하고 있어, 향후 민간 확산 가능성을 열어두고 있어요. 본인이 민간 소속이라면 우선 현행 제도(퇴직금·실업급여·차별시정)부터 정리해볼 가치가 있습니다.</p>',
    sections: [
      {
        title: 'Q. 공정수당은 왜 민간 적용이 안 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">공공부문 비정규직 처우개선 대책 발표 자료에 따르면, 공정수당이 공공부문에 한정된 이유는 다음 3가지로 정리되어 있습니다.</strong></p>\n<ul>\n<li><strong>① 정부예산 재원</strong> — 공정수당은 2027년 정부예산안에 편성되는 재원으로 발표되어 있습니다. 정부예산은 공공부문 인건비에만 직접 투입 가능.</li>\n<li><strong>② 모범적 사용자 원칙</strong> — 정부는 발표안에서 "공공부문이 모범적 사용자로서 비정규직 처우개선을 선도하여 민간으로 확산 필요"라고 명시. 즉 공공이 먼저 도입해 민간으로 확산시키는 단계적 접근.</li>\n<li><strong>③ 국정과제 연계</strong> — \'1년 미만 기간제 노동자 퇴직급여 지급\' 법 도입 이전 단계로 발표되어 있어, 법 통과 시 민간으로 확산될 가능성. 현 단계는 공공부문 선행 도입 단계.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정부 발표안 기준 공공부문 기간제 약 14.6만 명이 1차 대상. 민간 부문(약 200만 명대 추정)은 향후 법 도입을 거쳐 확산되는 구조로 안내되고 있습니다. 민간 노동자는 현행 제도부터 정리해볼 가치가 있어요.</blockquote>',
      },
      {
        title: '민간 1년 미만 기간제가 활용할 수 있는 대체 권리 3가지',
        content:
          '<p><strong style="color:#1e3a5f">민간 1년 미만 기간제 노동자가 공정수당 외에 활용할 수 있는 현행 제도는 다음 3가지로 정리됩니다.</strong></p>\n<ul>\n<li><strong>① 실업급여 (고용보험법)</strong> — 계약 만료로 비자발적 이직이면 정당이직 사유 인정 가능. 피보험단위기간 180일 + 이직 후 12개월 내 신청. 기간제 만료는 자진퇴사가 아니므로 신청 검토 가능(고용보험법 제40조).</li>\n<li><strong>② 차별시정 (기간제법)</strong> — 동종·유사 업무를 하는 정규직과 비교해 임금·복리후생·처우에 차별이 있으면 노동위원회에 차별시정 신청 가능(기간제법 제8조). 시정명령 + 배상명령 가능.</li>\n<li><strong>③ 반복계약 → 계속근로 다툼</strong> — 11개월 + 11개월처럼 반복계약으로 회사가 퇴직금을 회피한다면 계속근로 인정 다툼 가능. 사용자가 364일 계약 등으로 회피하는 사례는 정부도 정기실태조사 대상으로 발표안에 포함되어 있음.</li>\n</ul>\n<p style="margin-top:12px"><strong>1년 이상 계속근로 인정되면 퇴직금 트랙</strong> — 근로자퇴직급여보장법 제8조에 따라 평균임금 30일분 × 계속근로연수의 퇴직금 청구 가능. 시용·휴직·반복계약 통산 다툼이 핵심.</p>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 민간 노동자 권리 활용 4단계',
        content:
          '<p><strong style="color:#1e3a5f">민간 1년 미만 기간제 노동자가 본인 권리를 정리하는 흐름은 다음 4단계로 검토해볼 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약 형태·근무기간 정리</strong> (즉시) — 근로계약서 + 출근부 + 4대보험 가입이력 정리. 반복계약·시용 포함 여부 확인.</li>\n<li><strong>2단계 — 실업급여 수급자격 점검</strong> (계약 만료 임박 시) — 피보험단위기간 180일 + 이직사유(계약만료) 확인. 회사 이직확인서 처리 내용 점검.</li>\n<li><strong>3단계 — 차별시정 신청 검토</strong> (계약 만료 후 6개월 내) — 정규직 비교군과 임금·복리후생 차이 입증 자료 정리. 노동위원회에 신청.</li>\n<li><strong>4단계 — 계속근로 다툼 (해당 시)</strong> — 반복계약·실질 계속근로 입증 자료(인사발령·업무 연속성·휴직 처리)로 1년 이상 계속근로 인정받아 퇴직금 청구. 지방고용노동지청 진정 또는 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 민간 노동자가 활용할 수 있는 권리, AI로 정리하세요</strong></p>\n<p style="margin:0;font-size:0.95em">계약 형태·근무기간·차별 사정을 입력하면 실업급여·차별시정·퇴직금 다툼 가능성을 정리해볼 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비·확인 체크리스트 / ⚠️ 자주 하는 오해 / 🏛️ 안내·상담 경로',
        content:
          '<h4>📋 민간 노동자 권리 정리 자료 체크리스트</h4>\n<ul>\n<li>근로계약서 (반복계약 포함 전체)</li>\n<li>4대보험 가입이력 (계속근로기간 입증용)</li>\n<li>급여명세서·이직확인서 (실업급여 신청용)</li>\n<li>정규직 비교군 임금·복리후생 자료 (차별시정용)</li>\n<li>인사발령·근태기록 (계속근로 다툼용)</li>\n<li>고용보험 피보험자격 상실신고서 사본</li>\n</ul>\n<h4>⚠️ 자주 하는 오해</h4>\n<ul>\n<li>"민간도 곧 받게 된다" → 발표안은 공공부문 한정. 민간 확산은 향후 법 도입을 거쳐야 가능.</li>\n<li>"실업급여는 1년 안 채우면 못 받음" → 피보험단위기간 180일 충족하면 신청 검토 가능.</li>\n<li>"기간제 만료는 자진퇴사" → 발표안과 별개로 고용보험 실무는 계약만료를 비자발적 이직으로 처리하는 것이 원칙.</li>\n<li>"차별시정은 너무 어려움" → 노동위원회 신청은 무료, 변호사 없이도 가능. 자료 정리가 핵심.</li>\n</ul>\n<h4>🏛️ 안내·상담 경로</h4>\n<ul>\n<li>고용노동부 고객상담센터 1350 — 정책·실업급여 안내</li>\n<li>관할 고용센터 — 실업급여 신청·이직사유 정정</li>\n<li>관할 지방노동위원회 — 차별시정 신청</li>\n<li>대한법률구조공단 132 — 무료 법률상담</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 갱신기대권과 계속근로 인정',
        summary:
          '대법원 2018다200709 사건(대법원, 2019.11.14 선고)에서 법원은 근로기준법 제94조에서 정한 집단적 동의를 받아 근로자에게 불리한 내용으로 취업규칙이 변경된 경우라도, 근로자의 개별적 동의가 없는 한 취업규칙보다 유리한 근로계약의 내용이 우선하여 적용된다고 판시했습니다.',
        takeaway: '민간 노동자도 근로계약 내용·반복갱신 사정을 잘 정리하면 회사 일방 변경에 다툴 여지가 있어, 공정수당과 별개로 본인 계약 조건을 점검할 가치가 있습니다.',
      },
    ],
    faq: [
      {
        question: '민간 회사 1년 미만 계약직인데 공정수당 신청 가능한가요?',
        answer:
          '<strong>발표안 기준 공공부문 한정이라 민간은 직접 대상이 아닙니다.</strong> 실업급여·차별시정·반복계약 다툼을 우선 검토해보세요.',
      },
      {
        question: '민간으로 확산되려면 얼마나 걸릴까요?',
        answer:
          '<strong>정부 발표안에 따르면 \'1년 미만 기간제 퇴직급여 지급\' 법 도입을 통한 확산 계획으로 정리되어 있습니다.</strong> 법 통과·시행 일정에 따라 결정될 것으로 안내되고 있어요.',
      },
      {
        question: '계약 만료로 그만뒀는데 실업급여 받을 수 있나요?',
        answer:
          '<strong>피보험단위기간 180일 + 비자발적 이직 요건 충족하면 신청 검토 가능합니다.</strong> 계약 만료는 통상 비자발적 이직으로 처리되니 이직확인서를 먼저 확인해보세요.',
      },
      {
        question: '회사가 11개월 + 11개월 반복계약으로 퇴직금을 안 줍니다',
        answer:
          '<strong>실질 계속근로가 인정되면 통산 1년 이상으로 퇴직금 청구 다툼이 가능합니다.</strong> 인사발령·근태기록·업무 연속성 자료로 입증해보세요.',
      },
      {
        question: '정규직과 비교해 차별이 있는데 어디 신청하나요?',
        answer:
          '<strong>관할 지방노동위원회에 차별시정 신청이 가능합니다(기간제법 제8조).</strong> 비교군·차별 항목·자료를 정리해 신청하면 무료로 진행돼요.',
      },
      {
        question: '공정수당이 민간으로 확산되면 소급 적용도 되나요?',
        answer:
          '<strong>현 발표안에는 소급 조항이 명시되어 있지 않습니다.</strong> 향후 법 도입 시 시행 시점·소급 여부가 결정될 가능성이 있어요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '공정수당 대상자 자격', href: '/guide/wage/fair-allowance-2027-eligibility-guide' },
      { label: '공정수당 6단계 지급액', href: '/guide/wage/fair-allowance-amount-calculation' },
      { label: '공정수당 vs 실업급여', href: '/guide/unemployment/fixed-term-contract-1year-vs-fair-allowance' },
      { label: '1년 미만 반복 계약 퇴직금', href: '/guide/retirement/sub-1year-contract-no-severance-rescue' },
      { label: '기간제 만료 정당이직', href: '/guide/unemployment/unemployment-fixed-term-expire-voluntary-distinguish' },
    ],
  },

  // ─── 4. unemployment / fixed-term-contract-1year-vs-fair-allowance ───
  {
    domain: 'unemployment',
    slug: 'fixed-term-contract-1year-vs-fair-allowance',
    keyword: '공정수당 실업급여 비교',
    questionKeyword: '1년 미만 계약 끝났어요. 공정수당 vs 실업급여 어떻게 받나요?',
    ctaKeyword: '공정수당·실업급여 동시 활용 가능성 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '공정수당 vs 실업급여 — 1년 미만 계약 만료 5단계 정리 | 로앤가이드',
      description:
        '1년 미만 계약 만료 시 공정수당(2027~)과 실업급여(현행)는 양립 가능한지, 신청 시점·금액·중복 여부를 정리했습니다. 지금 확인하세요.',
    },
    intro:
      '<p>"공공기관 11개월 계약직이 곧 끝나는데, 공정수당이 도입되면 실업급여랑 둘 다 받을 수 있는 건가요?" 결론부터 보면, 관계부처 합동 2026년 4월 28일 발표안 기준 공정수당과 실업급여는 성격·재원·신청처가 달라 동시 활용 여지가 있는 것으로 검토되고 있습니다. 공정수당은 계약 만료 시 일시 지급되는 보상 수당(공공부문·정부예산), 실업급여는 비자발적 이직 후 재취업 활동 기간 중 일정 기간 지급되는 사회보험 급여(고용보험)로 발표안과 현행 제도가 다른 트랙에 있어요. 다만 신청 시점·요건·금액 산정이 다르므로 본인 사정에 맞게 단계별로 점검해볼 필요가 있습니다.</p>',
    sections: [
      {
        title: 'Q. 공정수당 vs 실업급여 — 4가지 핵심 차이',
        content:
          '<p><strong style="color:#1e3a5f">정부 발표안과 현행 고용보험법을 비교하면 다음 4가지가 핵심 차이로 정리됩니다.</strong></p>\n<table style="border-collapse:collapse;width:100%;margin:12px 0">\n<thead>\n<tr style="background:#f5f5f5"><th style="border:1px solid #ddd;padding:8px">항목</th><th style="border:1px solid #ddd;padding:8px">공정수당 (2027~)</th><th style="border:1px solid #ddd;padding:8px">실업급여 (현행)</th></tr>\n</thead>\n<tbody>\n<tr><td style="border:1px solid #ddd;padding:8px">대상</td><td style="border:1px solid #ddd;padding:8px">공공부문 1년 미만 기간제</td><td style="border:1px solid #ddd;padding:8px">공공·민간 비자발적 이직자</td></tr>\n<tr><td style="border:1px solid #ddd;padding:8px">재원</td><td style="border:1px solid #ddd;padding:8px">정부예산</td><td style="border:1px solid #ddd;padding:8px">고용보험 (사용자·노동자 부담)</td></tr>\n<tr><td style="border:1px solid #ddd;padding:8px">지급 시점</td><td style="border:1px solid #ddd;padding:8px">계약 만료 시 일시 지급</td><td style="border:1px solid #ddd;padding:8px">이직 후 재취업 활동 기간 중 분할</td></tr>\n<tr><td style="border:1px solid #ddd;padding:8px">금액</td><td style="border:1px solid #ddd;padding:8px">38.2만~248.8만원 (6단계 정액)</td><td style="border:1px solid #ddd;padding:8px">평균임금의 60% × 120~270일</td></tr>\n</tbody>\n</table>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 두 제도는 성격·재원이 다르므로 양립할 여지가 있는 것으로 검토되고 있습니다. 다만 공정수당은 2027년 1월 시행 예정이라 그 전에 계약 만료된다면 현 단계에선 실업급여 트랙만 활용 가능합니다.</blockquote>',
      },
      {
        title: '동시 활용 시나리오 — 본인 사정별 4가지 케이스',
        content:
          '<p><strong style="color:#1e3a5f">공공부문 1년 미만 기간제가 계약 만료된 경우, 본인 사정별로 다음 4가지 시나리오가 가능할 것으로 검토됩니다.</strong></p>\n<ul>\n<li><strong>① 2027년 이후 계약 만료 + 피보험단위기간 180일 충족</strong> — 공정수당 + 실업급여 둘 다 신청 가능성. 공정수당은 인사팀에 일시 청구, 실업급여는 고용센터에 별도 신청.</li>\n<li><strong>② 2027년 이후 계약 만료 + 피보험단위기간 180일 미충족</strong> — 공정수당만 가능성. 실업급여는 피보험단위기간 부족으로 거절.</li>\n<li><strong>③ 2027년 이전 계약 만료 + 피보험단위기간 180일 충족</strong> — 실업급여만 가능. 공정수당은 시행 전이라 적용 여지가 제한적(소급 여부는 가이드라인·예산안 결정).</li>\n<li><strong>④ 2027년 이전 계약 만료 + 피보험단위기간 180일 미충족</strong> — 두 제도 모두 어려움. 차별시정·반복계약 계속근로 다툼 등 다른 트랙 검토 필요.</li>\n</ul>\n<p style="margin-top:12px"><strong>실업급여 수급 요건 (고용보험법 제40조)</strong> — 이직일 이전 18개월 중 피보험단위기간 180일 이상 + 비자발적 이직(계약만료 포함) + 재취업 노력 + 근로 의사·능력. 1년 미만 기간제도 피보험단위기간 충족하면 신청 가능합니다.</p>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 공정수당·실업급여 동시 활용 5단계',
        content:
          '<p><strong style="color:#1e3a5f">공공부문 1년 미만 기간제로 2027년 이후 계약 만료 예정이면, 다음 5단계로 정리해볼 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 본인 요건 점검</strong> (만료 1개월 전) — 근무기간 6단계 구간(공정수당) + 피보험단위기간 180일(실업급여) 충족 여부 확인.</li>\n<li><strong>2단계 — 인사팀 공정수당 청구</strong> (만료 시점) — 정부 발표안 + 가이드라인(2026.5) 기준 공정수당 일시 청구. 6단계 구간별 정액(38.2만~248.8만원).</li>\n<li><strong>3단계 — 고용센터 실업급여 신청</strong> (만료 후 12개월 내) — 이직확인서 + 수급자격 신청. 비자발적 이직(계약만료) 사유.</li>\n<li><strong>4단계 — 재취업 활동 + 실업인정</strong> (수급 기간 중) — 4주 단위 실업인정 신청. 재취업 활동 신고.</li>\n<li><strong>5단계 — 거절·이의 발생 시 다툼</strong> — 공정수당 거절 시 인사담당부서 이의 → 노동지청 진정. 실업급여 거절 시 이직사유 정정 → 심사청구 → 재심사.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 본인 사정 기준 동시 활용 가능성, AI로 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">소속·근무기간·계약 만료 예정일·피보험단위기간을 입력하면 두 제도 활용 가능성과 신청 순서를 정리해볼 수 있습니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">실업급여 받을 수 있는지 AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비·확인 체크리스트 / ⚠️ 자주 하는 오해 / 🏛️ 안내·상담 경로',
        content:
          '<h4>📋 동시 활용 자료 체크리스트</h4>\n<ul>\n<li>근로계약서 + 계약 만료 통보서</li>\n<li>고용보험 피보험자격 상실신고서·이직확인서</li>\n<li>최근 18개월 피보험단위기간 확인서 (고용보험 EDI)</li>\n<li>급여명세서 (평균임금 산정용)</li>\n<li>공정수당 청구서 양식 (2026.5 가이드라인 발표 후)</li>\n<li>재취업 활동 자료 (구직활동·이력서·면접 기록)</li>\n</ul>\n<h4>⚠️ 자주 하는 오해</h4>\n<ul>\n<li>"공정수당 받으면 실업급여 못 받음" → 발표안 기준 두 제도는 성격·재원이 달라 양립 여지.</li>\n<li>"기간제 만료는 자진퇴사라 실업급여 안 됨" → 계약만료는 비자발적 이직으로 처리하는 것이 실무 원칙.</li>\n<li>"피보험단위기간 1년 채워야 실업급여" → 180일이면 신청 검토 가능.</li>\n<li>"공정수당은 매월 받음" → 발표안 기준 계약 만료 시 일시 지급.</li>\n</ul>\n<h4>🏛️ 안내·상담 경로</h4>\n<ul>\n<li>관할 고용센터 — 실업급여 수급자격 신청</li>\n<li>고용노동부 고객상담센터 1350 — 두 제도 안내</li>\n<li>고용보험심사관 / 고용보험심사위원회 — 실업급여 심사·재심사</li>\n<li>대한법률구조공단 132 — 무료 법률상담</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '재결례 — 계약 만료 비자발적 이직 인정',
        summary:
          '고용보험심사위원회 2023재결 제44호 사건(고용보험심사위원회, 2023.06.21 선고)에서 위원회는 근로계약서에 해지사유로 \'요양보호사 거부 등의 사유로 계속 근무를 할 수 없게 되었을 때\'가 명시되어 있고 요양대상자의 요양거부가 명확하게 인정되므로 본인의 책임없는 사유로 퇴사한 것으로 보고 실업급여 수급자격이 인정된다고 판단한 사례입니다.',
        takeaway: '계약 종료 사유가 본인 책임이 아닌 외부 요인으로 입증되면 비자발적 이직으로 인정될 수 있어, 1년 미만 기간제 계약 만료도 실업급여 트랙으로 다툴 여지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '공정수당 받으면 실업급여 깎이나요?',
        answer:
          '<strong>발표안 기준 두 제도는 성격·재원이 달라 양립 여지가 있는 것으로 검토되고 있습니다.</strong> 다만 세부 가이드라인(2026.5)에서 조정 조항이 추가될 가능성이 있으니 발표 자료 확인이 필요해요.',
      },
      {
        question: '11개월 일했는데 공정수당이랑 실업급여 합치면 얼마인가요?',
        answer:
          '<strong>발표안 기준 11~12개월 구간 공정수당 248.8만원 + 평균임금의 60% × 120일 정도 실업급여로 추정해볼 수 있습니다.</strong> 정확한 금액은 평균임금·고용보험 가입이력 기준 산정이 필요해요.',
      },
      {
        question: '2027년 시행 전인데 6개월 후 계약 끝나요. 어떻게 하나요?',
        answer:
          '<strong>현 단계에선 실업급여 트랙만 활용 가능합니다.</strong> 피보험단위기간 180일 충족 여부 + 이직확인서 처리 내용을 우선 점검해보세요.',
      },
      {
        question: '회사 측이 자진퇴사로 처리해서 실업급여 거절됐어요',
        answer:
          '<strong>고용센터에 이직사유 정정 신청 → 심사청구 → 재심사 트랙이 가능합니다.</strong> 계약 만료 통보서·근로계약서로 비자발적 이직 입증을 시도해보세요.',
      },
      {
        question: '피보험단위기간이 180일에 5일 모자라요',
        answer:
          '<strong>180일에 미달하면 실업급여는 어렵지만, 2027년 이후라면 공정수당만 단독 활용 가능성이 있습니다.</strong> 부족분을 다음 직장 가입기간으로 합산할 수 있는지도 점검해보세요.',
      },
      {
        question: '공정수당 거절되면 어디서 다투나요?',
        answer:
          '<strong>발표안 기준 공정수당은 사용자(공공기관) 직접 지급 구조입니다.</strong> 거절 시 인사담당부서 이의 → 관할 지방고용노동지청 진정 트랙이 가능할 것으로 보입니다(가이드라인 2026.5에서 절차 구체화 예정).',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '공정수당 대상자 자격', href: '/guide/wage/fair-allowance-2027-eligibility-guide' },
      { label: '공정수당 6단계 지급액', href: '/guide/wage/fair-allowance-amount-calculation' },
      { label: '공정수당 민간 적용', href: '/guide/wage/fair-allowance-public-vs-private' },
      { label: '기간제 만료 정당이직', href: '/guide/unemployment/unemployment-fixed-term-expire-voluntary-distinguish' },
      { label: '실업급여 수급자격 점검', href: '/guide/unemployment/unemployment-eligibility-check-guide' },
    ],
  },

  // ─── 5. retirement / sub-1year-contract-no-severance-rescue ───
  {
    domain: 'retirement',
    slug: 'sub-1year-contract-no-severance-rescue',
    keyword: '1년 미만 반복 계약 퇴직금',
    questionKeyword: '1년 미만 반복 계약 퇴직금 못 받는데 공정수당으로 보상되나요?',
    ctaKeyword: '공정수당·계속근로 다툼 동시 검토',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '1년 미만 반복 계약 퇴직금 — 공정수당·계속근로 5단계 | 로앤가이드',
      description:
        '11개월 + 11개월처럼 반복계약으로 퇴직금을 못 받았다면 공정수당 + 계속근로 다툼 동시 활용이 가능합니다. 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"공공기관에서 11개월 계약 두 번 연속으로 일했는데, 회사는 \'1년 미만 반복이라 퇴직금 없다\'고 합니다. 공정수당으로 보상되긴 하나요?" 사실 정부도 364일 계약 같은 회피 사례를 정기실태조사 대상으로 발표안에 포함시켰습니다. 관계부처 합동 2026년 4월 28일 발표안에 따르면, 공정수당은 1년 미만 기간제에 계약 만료 시 일시 지급되는 보상 수당(38.2만~248.8만원)으로 검토되고 있고, 동시에 정부는 정기실태조사로 364일 계약을 확인하면 1년간 근로계약 보장 지도를 하겠다고 명시하고 있어요. 본인 사정이 단순 1년 미만이 아니라 반복계약·실질 계속근로라면 공정수당 + 계속근로 인정 다툼 두 트랙을 동시에 검토할 수 있습니다.</p>',
    sections: [
      {
        title: '왜 회사가 1년 미만 반복계약을 쓰는지 + 정부가 잡으려는 이유',
        content:
          '<p><strong style="color:#1e3a5f">공공부문 비정규직 처우개선 대책 발표 자료에 따르면, 1년 미만 반복계약 회피는 다음 3가지 이유로 발생하는 것으로 정리되어 있습니다.</strong></p>\n<ul>\n<li><strong>① 퇴직금 회피</strong> — 근로자퇴직급여보장법 제8조는 1년 이상 계속근로자에게 퇴직금 의무. 11개월 + 11개월로 끊으면 형식상 퇴직금 의무 회피.</li>\n<li><strong>② 정규직 전환 의무 회피</strong> — 기간제법은 2년 초과 근무 시 무기계약직 전환 의무. 짧게 끊고 다른 부서·기관으로 옮기면 전환 의무 회피.</li>\n<li><strong>③ 사회보험 가입 회피</strong> — 11개월 미만 단기 반복은 일부 사회보험에서 가입 단절·재가입을 반복하게 만듦.</li>\n</ul>\n<p style="margin-top:12px"><strong>정부의 3중 대응 — 발표안 기준</strong></p>\n<ul>\n<li><strong>① 공정수당 도입 (2027.1)</strong> — 1년 미만 기간제에 38.2만~248.8만원 보상.</li>\n<li><strong>② 364일 계약 정기실태조사 (2026~)</strong> — 364일 계약 등 회피 사례 확인 시 1년간 근로계약 보장 지도.</li>\n<li><strong>③ 상시·지속업무 정규직 원칙 재확인</strong> — 1년 미만 반복계약 원칙적 금지(가이드라인 2026.5).</li>\n</ul>',
      },
      {
        title: '계속근로 인정 다툼 — 4가지 핵심 입증 자료',
        content:
          '<p><strong style="color:#1e3a5f">공정수당과 별개로 본인 반복계약이 실질 계속근로로 인정되면 1년 이상 → 퇴직금 트랙으로 갈 수 있습니다. 다음 4가지가 입증 핵심입니다.</strong></p>\n<ul>\n<li><strong>① 업무 동일성·연속성</strong> — 계약 사이 업무 내용·직무·부서가 동일하거나 연속적인 경우. 인사발령·업무분장표·일일업무일지로 입증.</li>\n<li><strong>② 공백 기간 짧음·형식적</strong> — 계약 사이 공백이 며칠 ~ 1~2주 수준이거나 휴일·연휴를 끼고 있는 경우. 출근부·근태기록·급여대장.</li>\n<li><strong>③ 갱신 관행·기대권</strong> — 회사가 갱신을 묵시적으로 약속했거나 다수 근로자에게 갱신해온 관행. 메일·면담 기록·동료 사례.</li>\n<li><strong>④ 시용·수습 통산</strong> — 시용기간 + 본계약을 끊김 없이 이어 근무한 경우 통산 계속근로 인정 가능(대법원 2021다218083 취지).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 계속근로 인정되면 근로자퇴직급여보장법 제8조에 따라 평균임금 30일분 × 계속근로연수의 퇴직금 청구 가능. 시효 3년 + 연 20% 지연이자 청구 트랙도 함께 검토할 수 있어요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 공정수당 + 계속근로 다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">반복계약으로 퇴직금을 받지 못한 경우, 두 트랙을 다음 5단계로 진행해볼 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 반복계약 자료 정리</strong> (즉시) — 모든 근로계약서·인사발령·근태기록·업무분장표·메일·면담 자료. 시점별 시간순 정리.</li>\n<li><strong>2단계 — 공정수당 청구</strong> (2027년 이후 만료 시) — 인사팀에 발표안 기준 공정수당 청구. 6단계 구간별 38.2만~248.8만원.</li>\n<li><strong>3단계 — 계속근로 인정 다툼</strong> (퇴직 후 3년 내) — 관할 지방고용노동지청에 임금체불(퇴직금 미지급) 진정. 시정지시 미이행 시 형사 송치(3년 이하 징역 또는 3,000만 원 이하 벌금).</li>\n<li><strong>4단계 — 민사 퇴직금 청구</strong> (병행) — 평균임금 30일 × 계속근로연수 + 연 20% 지연이자(퇴직자). 3,000만 원 이하면 소액심판 통상 2~3개월 판결.</li>\n<li><strong>5단계 — 정부 정기실태조사 신고</strong> (병행) — 364일 계약 등 회피 정황을 노동포털·노동지청에 신고. 정부 지도·시정 명령 트랙.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 본인 반복계약, 공정수당+퇴직금 두 트랙 가능성 점검</strong></p>\n<p style="margin:0;font-size:0.95em">계약 횟수·공백 기간·업무 동일성·갱신 관행을 입력하면 두 트랙 동시 활용 가능성을 정리해볼 수 있습니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">퇴직금 계산과 청구 절차, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비·확인 체크리스트 / ⚠️ 자주 하는 오해 / 🏛️ 안내·상담 경로',
        content:
          '<h4>📋 두 트랙 준비 자료 체크리스트</h4>\n<ul>\n<li>모든 근로계약서·갱신계약서 (반복 횟수 입증)</li>\n<li>인사발령·업무분장표·일일업무일지 (업무 동일성)</li>\n<li>출근부·근태기록·급여대장 (공백 기간 확인)</li>\n<li>4대보험 가입이력 (계속근로 통산용)</li>\n<li>회사 갱신 관행 자료 (메일·면담·동료 사례)</li>\n<li>계약 만료 통보서·이직확인서</li>\n<li>공정수당 청구서 양식 (2026.5 가이드라인 발표 후)</li>\n</ul>\n<h4>⚠️ 자주 하는 오해</h4>\n<ul>\n<li>"공정수당 받으면 퇴직금 다툼 못 함" → 발표안 기준 두 제도는 별개. 공정수당 받고도 계속근로 다툼 가능성 검토 가능.</li>\n<li>"공백 기간 1주 있으면 끊긴 거" → 형식적 공백은 계속근로 인정 다툴 여지가 있음(시점·업무 연속성 종합).</li>\n<li>"364일 계약은 합법" → 발표안 기준 정기실태조사 대상. 1년간 근로계약 보장 지도 트랙.</li>\n<li>"퇴직금 시효는 1년" → 임금채권 시효는 3년이라 직전 36개월치 청구 가능.</li>\n</ul>\n<h4>🏛️ 안내·상담 경로</h4>\n<ul>\n<li>관할 지방고용노동지청 — 임금체불(퇴직금) 진정·정기실태조사 신고</li>\n<li>고용노동부 노동포털(labor.moel.go.kr) — 임금체불 진정 온라인</li>\n<li>고용노동부 고객상담센터 1350 — 무료 안내</li>\n<li>대한법률구조공단 132 — 무료 법률상담</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 시용기간 + 본계약 통산 계속근로 인정',
        summary:
          '대법원 2021다218083 사건(대법원, 2022.02.17 선고)에서 법원은 시용기간 만료 후 본 근로계약을 체결하여 공백 기간 없이 계속 근무한 경우 시용기간과 본 근로계약기간을 통산한 기간을 퇴직금 산정의 기초가 되는 계속근로기간으로 보아야 한다고 판시했습니다. 甲이 乙 의료원의 수습사원 채용시험에 합격해 1개월간 수습사원으로 근무한 후 본 근로계약을 체결한 사안에서 시용기간을 계속근로기간에 포함시킨 사례입니다.',
        takeaway: '시용·수습 + 본계약을 끊김 없이 이어 근무한 경우 통산 계속근로가 인정되어, 1년 미만으로 보이는 반복계약도 퇴직금 트랙으로 다툴 여지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '11개월 + 11개월 반복계약인데 공백 2주 있어요. 계속근로 인정될까요?',
        answer:
          '<strong>형식적 공백은 업무 동일성·갱신 관행·전체 흐름을 종합 판단해 계속근로로 다툴 여지가 있습니다.</strong> 인사발령·업무분장 자료를 시점순으로 정리해보세요.',
      },
      {
        question: '공정수당 받았으면 퇴직금 청구 못 하나요?',
        answer:
          '<strong>발표안 기준 두 제도는 성격·재원이 달라 양립 여지가 있는 것으로 검토되고 있습니다.</strong> 다만 가이드라인(2026.5)에서 조정 조항이 추가될 가능성이 있으니 발표 자료 확인이 필요해요.',
      },
      {
        question: '364일 계약을 어디에 신고하나요?',
        answer:
          '<strong>관할 지방고용노동지청 또는 노동포털(labor.moel.go.kr)에 정기실태조사 대상으로 신고할 수 있습니다.</strong> 정부 발표안 기준 1년간 근로계약 보장 지도 트랙이 가능해요.',
      },
      {
        question: '퇴직금 시효 지났다는데 다툴 수 있나요?',
        answer:
          '<strong>임금채권 시효는 3년이라 직전 36개월치 청구가 가능합니다.</strong> 회사가 신뢰를 줬다면 권리남용 항변(대법원 2024다294705 취지)으로 더 다툴 여지도 있어요.',
      },
      {
        question: '진정 + 민사 둘 다 해야 하나요?',
        answer:
          '<strong>진정은 시정·형사 압박, 민사는 차액 + 지연이자 회수에 효과적입니다.</strong> 회사 자력이 있다면 민사 병행을 검토해볼 가치가 있어요.',
      },
      {
        question: '공정수당 청구하면 회사가 보복하지 않나요?',
        answer:
          '<strong>공정수당은 정부 발표안 기준 권리이며, 청구를 이유로 한 불이익은 부당노동행위가 될 수 있습니다.</strong> 보복 정황이 보이면 노동지청·노동위원회에 별도 신고를 검토해보세요.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '공정수당 대상자 자격', href: '/guide/wage/fair-allowance-2027-eligibility-guide' },
      { label: '공정수당 6단계 지급액', href: '/guide/wage/fair-allowance-amount-calculation' },
      { label: '공정수당 vs 실업급여', href: '/guide/unemployment/fixed-term-contract-1year-vs-fair-allowance' },
      { label: '퇴직금 평균임금 재산정', href: '/guide/retirement/retirement-average-wage-bonus-dispute' },
      { label: '도산대지급금 신청', href: '/guide/retirement/retirement-business-closure-substitute-payment' },
    ],
  },
];
