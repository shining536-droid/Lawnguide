import { SpokePage } from '../spoke-pages';

// batch57 시사 컨텐츠 8개 (2026-05-06)
// 검증된 4개 사실 × 스포크 2개 = 8개
//
// 고유 존재 이유:
// 1. 이 페이지는 삼성전자 TAI를 받은 근로자가 평균임금 산입 + 퇴직금 차액 청구를 정리하도록 돕는 페이지다 (대법원 2021다248299, 2026-01-29 선고).
// 2. 이 페이지는 정기적으로 수령한 경영성과급(TAI)이 평균임금에 포함돼 퇴직금이 재산정될 수 있는 근로자가 청구 트랙을 정리하도록 돕는 페이지다 (대법원 2021다248299, 2026-01-29 선고).
// 3. 이 페이지는 피해자가 인지하지 못한 스토킹 행위에 대해 객관적 기준으로 처벌이 검토될 수 있는 사안에서 피해자가 대응 방향을 정리하도록 돕는 페이지다 (대법원 2025도36, 2025-10-30 선고).
// 4. 이 페이지는 24시간 이상 지속된 추적·접근 행위로 스토킹처벌법 입건이 검토되는 가해자측이 항변 방향을 정리하도록 돕는 페이지다 (대법원 2025도36, 2025-10-30 선고).
// 5. 이 페이지는 노란봉투법(노조법 개정안) 시행 후 원청·사용자 정의 확대로 부당해고 대응 트랙이 확장된 근로자가 신청 단계를 정리하도록 돕는 페이지다 (2025-09-09 공포, 2026-03-10 시행).
// 6. 이 페이지는 노조법 제3조 손해배상 제한 개정으로 쟁의행위 손해배상 청구당한 근로자·신원보증인이 책임 분담 다툼을 정리하도록 돕는 페이지다 (2026-03-10 시행).
// 7. 이 페이지는 2026년 최저임금 시급 10,320원·월 환산 2,156,880원으로 임금 청구 가능성을 점검하려는 근로자가 차액 청구 트랙을 정리하도록 돕는 페이지다 (고용노동부 고시 제2025-47호).
// 8. 이 페이지는 2026년 최저임금 적용 후 월급제·시급제·주휴수당 산정 변경분을 정리하려는 근로자가 점검 단계를 확인하도록 돕는 페이지다 (고용노동부 고시 제2025-47호).

export const spokesBatch57News: SpokePage[] = [
  // ─── 1. wage / wage-tai-opi-supreme-court-ruling-2026 (Item 1, 삼성 TAI) ───
  {
    domain: 'wage',
    slug: 'wage-tai-opi-supreme-court-ruling-2026',
    keyword: 'TAI OPI 평균임금 임금성',
    questionKeyword: '회사에서 받은 경영성과급(TAI/OPI)도 평균임금·통상임금에 들어가나요?',
    ctaKeyword: 'TAI OPI 임금성 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '삼성전자 TAI/OPI 평균임금 판결 5단계 정리 | 로앤가이드',
      description:
        '대법원이 TAI는 평균임금 포함, OPI는 임금성 부정으로 판단한 2026-01-29 선고 사안의 의미와 본인 사건 적용 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"삼성전자가 매년 지급해온 TAI(Target Achievement Incentive)와 OPI(Overall Performance Incentive)가 평균임금에 들어가는지 그동안 다툼이 있었다고 들었어요. 대법원이 정리해줬다는데 어느 부분은 인정되고 어느 부분은 안 됐는지 정리가 필요합니다." 대법원 2021다248299(2026-01-29 선고)에 따르면 회사 차원의 사업·인력 운영 결과물에 비례해 정기 지급된 TAI는 평균임금에 포함되는 것으로 판단됐고, EVA(경제적 부가가치) 등 외부 시장요인에 의해 좌우된 OPI는 임금성을 부정한 것으로 정리됐습니다. 같은 시기에 별건으로 SK하이닉스 사안(대법원 2021다219994, 2026-02-12 선고)과 한국유리 사안(2026-02-12 선고)이 있었으나 사실관계가 달라 본 페이지는 삼성전자 사안만 다룹니다. 평균임금이 재산정되면 퇴직금·연차수당 차액 청구 트랙이 열리는 영역이라 자료 정리부터 점검할 수 있어요.</p>',
    sections: [
      {
        title: 'Q. TAI vs OPI — 임금성 판단 4가지 갈림길',
        content:
          '<p><strong style="color:#1e3a5f">A. 정기성·근로 대가성·외부요인 비중·고정성 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 정기성·계속성</strong> — 매년 또는 반기마다 정기 지급되는 정황. 일회성 격려금은 임금성 부정 영역.</li>\n<li><strong>② 근로 대가성 vs 호의적 급부</strong> — 근로 제공 결과물에 대한 대가로 지급되는지 여부. 회사가 단순 호의로 지급한다면 임금성 부정 영역.</li>\n<li><strong>③ 외부요인 비중 (EVA·시장 변동)</strong> — 대법원 2021다248299(2026-01-29 선고)는 OPI가 EVA 등 외부 시장요인에 좌우되는 정황이라 임금성을 부정한 것으로 정리. 반면 TAI는 사업부·인력 운영 결과 비중이 큰 것으로 판단.</li>\n<li><strong>④ 산정기준 사전 확정</strong> — 지급 기준이 사전에 명문으로 확정돼 있는 정황은 임금성 인정 방향.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회사 명목이 \'성과급\'·\'인센티브\'라도 정기적으로 지급되고 근로 대가 성격이 강하면 평균임금 포함 영역으로 평가될 수 있습니다. 다만 외부 시장요인 비중이 압도적이면 임금성 부정으로 갈리는 사례가 있어 사실관계별 다툼 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 평균임금 재산정 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 차액 산정 → 회사 청구 → 노동청 진정 → 민사 청구 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임금 자료 보존 (즉시)</strong> — 최근 3년치 급여명세서·성과급 지급 통지서·취업규칙·임금협정서·연봉계약서 보존. TAI/OPI 항목명·금액·지급주기·산정 기준 정리.</li>\n<li><strong>2단계 — 임금성 판단 자료 정리 (1~2주)</strong> — 본인 사건의 성과급이 정기성·근로 대가성·외부요인 비중 어느 영역인지 자료로 정리. 노무사 자문 검토.</li>\n<li><strong>3단계 — 차액 산정 (1~2주)</strong> — 평균임금 산입을 전제로 퇴직금·연차수당·해고예고수당 차액 계산. 3년 시효(근로기준법 제49조) 안에서 누적 산정.</li>\n<li><strong>4단계 — 회사 차액 지급 요구 (내용증명)</strong> — 미응답 시 노동청 임금체불 진정(labor.moel.go.kr).</li>\n<li><strong>5단계 — 민사 임금청구 소송 (소액심판·지급명령)</strong> — 3,000만원 이하 소액심판, 청구액 무관 지급명령 활용 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">TAI/OPI 임금성 판단 5단계를 AI가 점검해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 임금자료 + 산정기준 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>최근 3년치 급여명세서</strong> — 성과급 항목명·금액·지급주기 확인.</li>\n<li><strong>성과급 지급 통지서·기준표</strong> — 산정 기준 사전 확정 정황.</li>\n<li><strong>취업규칙·임금협정서</strong> — 평균임금 산입 영역 정의.</li>\n<li><strong>연봉계약서</strong> — 본인 임금 항목 분류.</li>\n<li><strong>차액 산정표</strong> — 본인·노무사 작성 명세.</li>\n<li><strong>회사 공시자료·IR자료 (해당 시)</strong> — EVA 등 외부요인 비중 정황.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 평균임금 재산정이 인정되면 퇴직금뿐 아니라 연차수당·해고예고수당까지 영향이 있는 영역이라 3년 누적 차액이 수백만~수천만원 수준에 이르는 사례가 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"호의적 격려금이라 임금 아니다" 주장 반박</strong> — 정기성·근로 대가성이 인정되는 정황이라면 명목보다 실질로 평가될 여지가 있는 영역.</li>\n<li><strong>"EVA 기준이라 외부요인 좌우" 주장 검토</strong> — 대법원 2021다248299는 OPI에 한해 임금성 부정으로 정리. TAI는 사업·인력 운영 결과 비중이 큰 정황으로 임금성 인정. 회사 측 산정 자료를 확보해 어느 쪽인지 점검 영역.</li>\n<li><strong>"노사합의로 평균임금에서 제외" 주장 반박</strong> — 강행규정 위반 합의는 무효 정황(대법원 2012다89399).</li>\n<li><strong>3년 시효 주의</strong> — 미지급 임금 3년 시효, 퇴직금은 퇴직일로부터 3년.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 임금체불·평균임금 무료 상담.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 임금체불 진정 트랙.</li>\n<li><strong>한국공인노무사회 02-6293-1500</strong> — 차액 산정 자문.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 경영성과급(TAI)의 평균임금 포함, OPI의 임금성 부정',
        summary:
          '대법원 2021다248299 사건(대법원, 2026-01-29 선고)에서 법원은 사업·인력 운영 결과물에 비례해 정기 지급된 TAI(Target Achievement Incentive)는 근로 대가로서 평균임금에 포함된다고 판단했고, EVA(경제적 부가가치) 등 외부 시장요인에 좌우된 OPI(Overall Performance Incentive)는 임금성을 부정하는 취지로 판시했습니다. 같은 시기 SK하이닉스 사안(대법원 2021다219994, 2026-02-12 선고)과 한국유리 사안(2026-02-12 선고)은 별건으로 사실관계가 다른 영역입니다.',
        takeaway: '회사가 정기 지급한 성과급이 사업·인력 운영 결과 비중이 큰 정황이라면 평균임금 산입 청구 트랙이 열리는 사례가 있어, 급여명세서·산정기준표·연봉계약서를 정리하면 차액 청구가 검토 가능한 영역입니다.',
      },
    ],
    faq: [
      {
        question: '삼성전자가 아닌 다른 회사 성과급도 같은 기준이 적용되나요?',
        answer:
          '<strong>대법원 판단 기준은 회사·업종을 가리지 않습니다.</strong> 다만 사실관계(산정기준·외부요인 비중·정기성)가 다르면 결론이 갈릴 수 있어, 본인 회사 성과급 산정 자료를 확보해 같은 기준으로 점검하는 것이 안전.',
      },
      {
        question: 'SK하이닉스도 같은 결론인가요?',
        answer:
          '<strong>같은 시기 별건이지만 사안이 분리됩니다.</strong> 대법원 2021다219994(2026-02-12 선고)는 별건이고, 한국유리 사안(2026-02-12 선고)도 별건. 본 페이지는 삼성전자 2021다248299 사안만 다루며, 다른 회사 사안은 사실관계별 별도 점검 영역.',
      },
      {
        question: '재직 중인데 청구하면 불이익 있을까요?',
        answer:
          '<strong>청구권은 법적으로 보장되며 보복성 처분은 별도 다툼 영역입니다.</strong> 익명 진정·집단 진정 옵션도 있어, 동료들과 함께 진행하면 부담을 줄일 수 있는 영역. 132 무료 상담 활용 가능.',
      },
      {
        question: '퇴직금만 차액 청구 가능한가요?',
        answer:
          '<strong>평균임금 재산정 인정 시 퇴직금·연차수당·해고예고수당까지 영향이 있습니다.</strong> 통상임금까지 다투는 사안은 연장·야간·휴일수당도 추가 영역.',
      },
      {
        question: '시효는 언제부터 계산되나요?',
        answer:
          '<strong>임금은 지급일로부터, 퇴직금은 퇴직일로부터 각 3년입니다.</strong> 시효 도과 부분은 청구 어려운 영역이라 빠른 자료 정리·청구가 안전.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '식대·자가운전보조금 통상임금', href: '/guide/wage/wage-self-driving-allowance-ordinary-wage' },
      { label: '고정 야간수당 통상임금 산입', href: '/guide/wage/wage-fixed-night-shift-allowance-claim' },
      { label: '상여금 퇴직금 포함 기준', href: '/guide/retirement/retirement-bonus-included-calculation' },
      { label: '임금체불 노동청 진정', href: '/guide/wage/wage-payslip-nondelivery-report' },
      { label: '미지급 임금 시효 3년 청구', href: '/guide/wage/wage-unpaid-one-year-statute-claim' },
    ],
  },

  // ─── 2. retirement / retirement-bonus-included-supreme-2026 (Item 1, TAI 평균임금 → 퇴직금) ───
  {
    domain: 'retirement',
    slug: 'retirement-bonus-included-supreme-2026',
    keyword: '경영성과급 평균임금 퇴직금 차액',
    questionKeyword: 'TAI 같은 정기 성과급이 퇴직금 산정에 들어가나요?',
    ctaKeyword: '성과급 퇴직금 차액 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: 'TAI 정기 성과급 퇴직금 차액 청구 5단계 | 로앤가이드',
      description:
        '대법원 2026-01-29 선고가 정기 경영성과급의 평균임금 산입을 인정한 흐름에서 본인 퇴직금 차액 청구 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"퇴직 직전 5년간 매년 받은 TAI 성과급이 1년에 1,000만원 정도였는데, 퇴직금 계산할 때는 본봉만 들어가고 성과급은 다 빠졌어요. 이 부분이 평균임금에 산입돼야 한다는 얘기를 들어서 차액 청구가 가능한지 점검하고 싶어요." 대법원 2021다248299(2026-01-29 선고)에 따르면 사업·인력 운영 결과물에 비례해 정기 지급된 TAI 성과급은 근로 대가로서 평균임금에 포함되는 것으로 판단됐습니다. 평균임금 재산정이 인정되면 퇴직금 차액(근로자퇴직급여 보장법 제8조 평균임금 30일치 × 근속연수)이 발생하는 영역이고, 청구 시효는 퇴직일로부터 3년(근로기준법 제49조)입니다. 같은 시기에 별건으로 SK하이닉스 사안(대법원 2021다219994, 2026-02-12 선고)과 한국유리 사안(2026-02-12 선고)이 있었으나 본 페이지는 삼성전자 2021다248299 사안만 다룹니다.</p>',
    sections: [
      {
        title: 'Q. 성과급 평균임금 산입 4가지 점검 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 정기성·근로 대가성·외부요인 비중·산정기준 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 정기성·계속성</strong> — 매년 또는 반기마다 정기 지급되는 정황. 일회성 격려금은 산입 어려운 영역.</li>\n<li><strong>② 근로 대가성</strong> — 사업부·인력 운영 결과(생산성·매출·달성률 등) 비중이 큰지. 호의적 급부 성격이 압도적이면 산입 부정 영역.</li>\n<li><strong>③ 외부요인 비중</strong> — 대법원 2021다248299(2026-01-29 선고)는 EVA 등 외부 시장요인 좌우 부분(OPI)은 임금성 부정으로 정리. 본인 성과급이 어느 쪽인지 점검.</li>\n<li><strong>④ 산정기준 사전 확정</strong> — 지급 기준이 사전 명문 확정 정황은 산입 인정 방향.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 평균임금 산입 인정 시 퇴직금 차액은 근속연수에 비례해 누적 영역. 5년 근속 + 연 1,000만원 성과급이라면 차액이 수백만원~수천만원 수준에 이르는 사례가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 퇴직금 차액 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 평균임금 재산정 → 회사 청구 → 노동청 진정 → 민사 청구 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임금 자료 보존 (퇴직 직후·즉시)</strong> — 퇴직 직전 3개월치 급여명세서, 최근 3년 성과급 지급 내역, 취업규칙·퇴직금 산정 기준 보존.</li>\n<li><strong>2단계 — 평균임금 재산정 (1~2주)</strong> — 성과급 산입 전제로 퇴직 직전 3개월 평균임금 재계산. 노무사·법률구조공단 132 무료 자문 가능.</li>\n<li><strong>3단계 — 차액 산정 (1주)</strong> — 재산정 평균임금 × 30일 × 근속연수로 퇴직금 재계산 → 기수령 퇴직금과 차액 산정.</li>\n<li><strong>4단계 — 회사 차액 지급 요구 (내용증명)</strong> — 미응답 시 노동청 임금체불 진정(labor.moel.go.kr). 퇴직금 미지급은 근로기준법 제36조 위반.</li>\n<li><strong>5단계 — 민사 퇴직금 청구 소송</strong> — 3,000만원 이하면 소액심판, 청구액 무관 지급명령 가능. 지연이자 연 20% 가산.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">성과급 평균임금 산입 + 퇴직금 차액 5단계를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 임금자료 + 퇴직금 산정 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>퇴직 직전 3개월 급여명세서</strong> — 평균임금 산정 기준 기간 자료.</li>\n<li><strong>최근 3년 성과급 지급 내역</strong> — 정기성·근로 대가성 입증.</li>\n<li><strong>취업규칙·퇴직금 규정</strong> — 평균임금 정의 명문 규정.</li>\n<li><strong>연봉계약서·임금협정서</strong> — 임금 항목 분류.</li>\n<li><strong>퇴직금 영수증·정산표</strong> — 기수령 퇴직금 확인.</li>\n<li><strong>차액 산정표</strong> — 노무사 작성 명세 또는 본인 작성 표.</li>\n<li><strong>성과급 산정 기준표</strong> — 회사 내부 산정 방식 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 퇴직금 미지급 시 지연이자 연 20% 가산 영역(근로기준법 제37조). 청구 지연이 장기화되면 지연이자만으로도 본 퇴직금에 가까운 금액이 누적되는 사례가 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"성과급은 격려금이라 평균임금 아니다" 주장 반박</strong> — 정기 지급 + 사업·인력 운영 결과 비중 큰 정황이라면 명목보다 실질로 평가될 여지가 있는 영역(대법원 2021다248299).</li>\n<li><strong>"외부요인 좌우라 임금성 부정" 주장 검토</strong> — 대법원 2021다248299는 OPI에 한해 외부요인 좌우로 임금성 부정. TAI는 사업·인력 운영 결과 비중이 큰 정황으로 임금성 인정. 본인 성과급이 어느 쪽인지 점검 영역.</li>\n<li><strong>"퇴직금 정산 끝났다" 주장 반박</strong> — 평균임금이 잘못 산정됐다면 차액 청구권 별도 영역. 정산 영수증만으로 청구 봉쇄되지 않는 사례가 있습니다.</li>\n<li><strong>3년 시효 주의</strong> — 퇴직일로부터 3년. 시효 도과 부분은 청구 어려운 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 퇴직금·평균임금 무료 상담.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 퇴직금 미지급 진정.</li>\n<li><strong>근로복지공단 1588-0075</strong> — 도산 사업장 임금채권보장기금 안내.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — TAI의 평균임금 포함과 OPI 임금성 부정',
        summary:
          '대법원 2021다248299 사건(대법원, 2026-01-29 선고)에서 법원은 사업·인력 운영 결과에 비례해 정기 지급된 TAI는 근로 대가로서 평균임금에 포함된다고 판단했고, EVA 등 외부 시장요인에 좌우된 OPI는 임금성을 부정하는 취지로 판시했습니다. 평균임금 재산정이 인정되면 퇴직금 30일분 × 근속연수의 차액이 누적되는 영역으로 정리됩니다. 같은 시기 SK하이닉스 사안(대법원 2021다219994, 2026-02-12 선고)과 한국유리 사안(2026-02-12 선고)은 별건으로 본 페이지 범위 밖입니다.',
        takeaway: '본인 성과급이 정기성·근로 대가성·산정기준 사전 확정의 요건을 충족하는 정황이라면 퇴직금 차액 청구 트랙이 열리는 사례가 있어, 퇴직 직전 3개월 급여명세서·성과급 내역·산정기준표를 정리하면 차액 청구가 검토 가능한 영역입니다.',
      },
    ],
    faq: [
      {
        question: '퇴직 후 몇 년이 지났는데 청구 가능한가요?',
        answer:
          '<strong>퇴직일로부터 3년 시효 내라면 가능합니다(근로기준법 제49조).</strong> 시효 도과 부분은 청구 어려운 영역이라, 퇴직 후 빠른 자료 정리가 안전.',
      },
      {
        question: 'DC형(확정기여형) 퇴직연금도 같은 기준 적용되나요?',
        answer:
          '<strong>DC형은 매월 사용자 부담금이 산정 기준이라 별도 영역입니다.</strong> 평균임금 재산정 영향은 DB형(확정급여형)·법정 퇴직금 사안에 더 직접적이며, DC형은 부담금 산정기준 다툼 트랙으로 별도 검토.',
      },
      {
        question: '회사가 "이미 정산 영수증 받았다"고 합니다',
        answer:
          '<strong>잘못 산정된 평균임금에 따른 차액 청구권은 별도 영역입니다.</strong> 정산 영수증만으로 청구가 봉쇄되지 않는 사례가 있어, 노무사·132 상담을 통해 차액 산정부터 점검하는 것이 안전.',
      },
      {
        question: '5인 미만 사업장도 적용되나요?',
        answer:
          '<strong>퇴직금은 1인 이상 사업장 모두 적용됩니다(근로자퇴직급여 보장법).</strong> 5인 미만이라도 1년 이상 근속 시 퇴직금 청구권 영역.',
      },
      {
        question: 'OPI도 다툴 수 있을까요?',
        answer:
          '<strong>대법원 2021다248299는 본 사안에서 OPI 임금성을 부정한 것으로 정리됐지만, 다른 회사·다른 산정방식은 사실관계가 달라 별도 점검 영역입니다.</strong> 본인 회사 OPI가 외부요인 좌우 정도가 약한 정황이라면 다툼 가능성 검토 가능.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '상여금 퇴직금 포함 기준', href: '/guide/retirement/retirement-bonus-included-calculation' },
      { label: 'TAI/OPI 임금성 점검', href: '/guide/wage/wage-tai-opi-supreme-court-ruling-2026' },
      { label: '식대·자가운전보조금 통상임금', href: '/guide/wage/wage-self-driving-allowance-ordinary-wage' },
      { label: '퇴직금 미지급 신고 절차', href: '/guide/retirement/retirement-unpaid-report-procedure' },
      { label: '평균임금 재산정 절차', href: '/guide/retirement/retirement-average-wage-recalculation' },
    ],
  },

  // ─── 3. stalking / stalking-no-victim-awareness-supreme-2025 (Item 2, victim) ───
  {
    domain: 'stalking',
    slug: 'stalking-no-victim-awareness-supreme-2025',
    keyword: '스토킹 피해자 인지 무관 처벌',
    questionKeyword: '제가 모르는 사이 누가 따라다녔는데도 스토킹 처벌이 가능한가요?',
    ctaKeyword: '피해자 인지 무관 스토킹 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '피해자 몰랐어도 스토킹 인정 — 대법원 2025도36 정리 | 로앤가이드',
      description:
        '피해자가 인식하지 못해도 객관적으로 불안감·공포심을 일으키기 충분하면 스토킹에 해당한다는 대법원 2025-10-30 선고를 지금 확인하세요.',
    },
    intro:
      '<p>"누군가 며칠 동안 우리 집 근처에서 차를 세워두고 지켜봤다는 사실을 나중에 CCTV로 알게 됐어요. 당시에는 전혀 몰랐는데 처벌이 가능한지 막막합니다." 대법원 2025도36(2025-10-30 선고)에 따르면 행위가 객관적·일반적으로 상대방에게 불안감·공포심을 일으키기에 충분하면, 피해자가 현실적으로 인식하지 못했더라도 스토킹행위에 해당한다고 판단됐습니다. 본 사안은 가해자가 10일간 6회에 걸쳐 추적·접근했고 일부 범행은 24시간 이상 지속된 사실관계였습니다(누적 시간 합산이 아닌, 개별 범행이 24시간 이상 지속). CCTV·블랙박스·차량번호 자료가 남아있다면 피해자가 사후 인지한 사안도 신고·고소 트랙이 열리는 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 피해자 미인지 스토킹 4가지 입증 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 객관적 불안감 충족·반복성·자료 보존·시점 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 객관적 불안감 충족</strong> — 대법원 2025도36(2025-10-30 선고)은 \'객관적·일반적으로 상대방에게 불안감·공포심을 일으키기에 충분한 행위\'면 피해자 현실적 인식이 없어도 스토킹에 해당한다고 판단. 일반인 기준 평가.</li>\n<li><strong>② 반복성</strong> — 본 사안은 10일간 6회 추적·접근. 1회성 우연 접촉은 별도 영역.</li>\n<li><strong>③ 자료 보존</strong> — CCTV·블랙박스·차량번호·위치기록·메시지 기록. 피해자 인지 시점 이후라도 과거 자료 회수 가능 영역.</li>\n<li><strong>④ 시점 (지속 시간)</strong> — 본 사안에서 일부 범행은 24시간 이상 지속됐습니다. 지속 시간 자체가 객관적 불안감 충족의 정황 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 종래에는 "피해자가 알았어야 처벌"이라는 다툼이 있었으나 대법원 2025도36 판단으로 피해자 사후 인지 사안도 처벌 트랙이 열리는 것으로 정리됐습니다. 다만 객관적 불안감 충족 여부는 사실관계별 다툼 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·고소 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 신고 → 잠정조치 → 고소 → 재판 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (인지 즉시)</strong> — CCTV(관리사무소·편의점·주변 가게), 블랙박스, 차량번호 사진, 위치 기록, 메시지 캡처. 시점 정렬 정리.</li>\n<li><strong>2단계 — 112 신고 또는 사이버범죄 신고시스템(ECRM)</strong> — 가해자 특정 정보(차량번호·인상착의·관계) 진술. 사건접수증 발급.</li>\n<li><strong>3단계 — 잠정조치 신청 (스토킹처벌법 제8조)</strong> — 100m 접근금지·통신금지·유치 신청. 검사가 법원에 청구.</li>\n<li><strong>4단계 — 고소장 제출</strong> — 사실관계 시점·횟수·지속시간·자료 정리. 변호사 선임 검토.</li>\n<li><strong>5단계 — 형사재판 + 손해배상 (별도 민사)</strong> — 정신적 손해 위자료 청구 가능 영역.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">피해자 미인지 스토킹 5단계를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 객관적 자료 + 시점 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>CCTV 영상</strong> — 관리사무소·편의점·도로 주변 카메라. 보존기간 짧으니 빠른 회수.</li>\n<li><strong>블랙박스 영상</strong> — 본인·이웃·주차장 주변.</li>\n<li><strong>차량번호 사진·녹화</strong> — 가해자 차량 특정.</li>\n<li><strong>메시지·SNS 기록</strong> — 추적 사실 사후 통보·암시 정황.</li>\n<li><strong>위치 기록</strong> — 본인·가해자 위치 정황(경찰 영장).</li>\n<li><strong>시간순 정리표</strong> — 사건 발생일·시각·장소·자료 출처 표.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: CCTV는 보존기간이 7~14일에 그치는 경우가 많아 인지 즉시 관리주체에 보존 요청·법원 영장 신청을 검토할 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 자주 하는 실수 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 피해자가 빠뜨리기 쉬운 부분과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"내가 몰랐으니 처벌 안 된다" 오해</strong> — 대법원 2025도36 판단으로 피해자 미인지 사안도 처벌 트랙 열린 영역. 객관적 불안감 충족 여부가 핵심.</li>\n<li><strong>CCTV 보존기간 도과</strong> — 7~14일 안에 회수 못 하면 자료 소실. 인지 즉시 보존 요청.</li>\n<li><strong>잠정조치 미신청</strong> — 형사 절차와 별도로 100m 접근금지 등 즉시 보호 영역. 신고 시 동시 검토.</li>\n<li><strong>합의 압박 주의</strong> — 잠정조치 위반 시 가중처벌 영역. 합의 전 변호사·1366 상담 권장.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>여성긴급전화 1366</strong> — 24시간 무료 상담·보호.</li>\n<li><strong>경찰 ECRM (ecrm.police.go.kr)</strong> — 사이버 신고 시스템.</li>\n<li><strong>대한법률구조공단 132</strong> — 형사·민사 무료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 피해자가 인식하지 못한 스토킹 행위의 처벌',
        summary:
          '대법원 2025도36 사건(대법원, 2025-10-30 선고)에서 법원은 피해자에 대한 추적·접근 등 행위가 객관적·일반적으로 상대방에게 불안감·공포심을 일으키기에 충분하면, 피해자가 현실적으로 그 행위를 인식하지 못했더라도 스토킹행위에 해당한다고 판단했습니다. 본 사안은 가해자가 10일간 6회에 걸쳐 피해자를 추적·접근했고, 일부 범행은 24시간 이상 지속된 사실관계였습니다.',
        takeaway: '피해자가 사후에 CCTV·블랙박스로 인지한 사안도 객관적 불안감 충족 정황이 입증되면 신고·고소 트랙이 열리는 사례가 있어, 자료 보존을 인지 즉시 진행하면 절차 검토가 가능한 영역입니다.',
      },
    ],
    faq: [
      {
        question: '얼마 전 일인데 지금 신고해도 되나요?',
        answer:
          '<strong>스토킹범죄 공소시효는 5년 영역(반의사불벌 폐지 후).</strong> 시점이 지났더라도 자료가 남아있으면 신고 가능. 다만 CCTV 보존기간 도과 자료는 회수 어려운 영역이라 빠른 보존 요청이 안전.',
      },
      {
        question: '가해자가 누군지 모릅니다',
        answer:
          '<strong>차량번호·인상착의 자료만 있으면 경찰이 가해자 특정 단계를 진행할 수 있는 영역입니다.</strong> 신고 시 자료 일체 제출 → 경찰 수사 트랙.',
      },
      {
        question: '잠정조치는 언제 신청하나요?',
        answer:
          '<strong>112 신고 시점부터 동시 검토 가능합니다.</strong> 검사 청구 → 법원 결정 → 100m 접근금지·통신금지 효력. 위반 시 가중처벌 영역.',
      },
      {
        question: '이웃·관리사무소가 CCTV 영상을 안 줍니다',
        answer:
          '<strong>경찰 영장 또는 법원 문서제출명령으로 강제 회수 가능한 영역입니다.</strong> 본인이 직접 받기 어려우면 신고 후 경찰 협조 트랙.',
      },
      {
        question: '민사 손해배상은 어떻게 청구하나요?',
        answer:
          '<strong>형사와 별도로 정신적 손해 위자료 청구 가능 영역입니다(민법 제751조).</strong> 진단서·치료비 영수증·일실수입 자료 정리.',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 잠정조치 신청', href: '/guide/stalking/stalking-emergency-protective-measures' },
      { label: '스토킹 증거 수집', href: '/guide/stalking/stalking-evidence-collection' },
      { label: '전 연인 지속 연락 대응', href: '/guide/stalking/stalking-ex-persistent-contact' },
      { label: '24시간 지속 추적 형사', href: '/guide/stalking/stalking-repeat-following-criminal-2025' },
      { label: '스토킹 접근금지 위반', href: '/guide/stalking/stalking-protective-order-violation' },
    ],
  },

  // ─── 4. stalking / stalking-repeat-following-criminal-2025 (Item 2, accused) ───
  {
    domain: 'stalking',
    slug: 'stalking-repeat-following-criminal-2025',
    keyword: '스토킹 24시간 지속 항변',
    questionKeyword: '여러 번 따라다녔다고 스토킹으로 입건됐어요. 어떻게 대응하죠?',
    ctaKeyword: '스토킹 입건 대응 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '스토킹 입건 대응 — 객관적 기준 항변 5가지 | 로앤가이드',
      description:
        '여러 번 추적·접근으로 스토킹 입건됐다면 대법원 2025도36 객관적 기준 + 사실관계 항변 5가지를 지금 확인하세요.',
    },
    intro:
      '<p>"전 여자친구를 만나려고 며칠간 집 근처에서 기다렸는데 그게 스토킹으로 입건됐어요. 합의 시도하려고 했던 건데 어떻게 대응해야 할지 막막합니다." 혐의를 받고 있다면 대법원 2025도36(2025-10-30 선고)이 \'객관적·일반적으로 상대방에게 불안감·공포심을 일으키기에 충분한 행위\'를 기준으로 삼은 점을 먼저 정리해야 합니다. 본 사안은 10일간 6회 추적·접근 + 일부 범행은 24시간 이상 지속된 사실관계였습니다(누적이 아닌, 개별 범행 단위로 24시간 이상 지속). 본인 사안이 어디까지 객관적 기준을 충족했는지, 사실관계가 다른지 시점·횟수·지속시간을 정리해 항변 자료를 먼저 검토할 수 있는 영역이에요.</p>',
    sections: [
      {
        title: 'Q. 스토킹 항변 4가지 정리 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 객관적 기준·사실관계·고의·정당사유 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 객관적 기준 충족 여부</strong> — 대법원 2025도36(2025-10-30 선고)은 객관적·일반적으로 불안감·공포심 일으키기에 충분한 행위를 기준으로 함. 본인 행위 시점·장소·맥락이 일반인 기준에서 어느 정도인지 정리.</li>\n<li><strong>② 사실관계 차이</strong> — 본 사안은 10일간 6회·일부 24시간 이상 지속. 본인 사안이 횟수·지속시간이 짧다면 사실관계 차이 정리 영역.</li>\n<li><strong>③ 고의 부재</strong> — 단순 우연 접촉·업무상 마주침 정황이라면 고의 다툼 영역.</li>\n<li><strong>④ 정당사유</strong> — 자녀 면접교섭·채권추심·언론취재 등 법령에 근거한 행위는 정당사유 항변 영역(다만 객관적 기준 초과 시 별개).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혐의를 받고 있다면 자기 변호 없이 진술하는 것은 위험할 수 있는 영역. 변호인 선임 또는 132 무료 상담을 통해 진술 방향부터 점검하는 것이 안전합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 입건 후 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 정리 → 변호인 선임 → 진술 → 합의 검토 → 재판 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 정리 (입건 즉시)</strong> — 본인 행적(시점·장소·연락 시도) 시간순 정리. 합의 시도 메시지·증인 진술 보존.</li>\n<li><strong>2단계 — 변호인 선임 (즉시)</strong> — 진술 전 변호인 자문. 국선 변호인 신청 가능 영역(경찰 단계부터).</li>\n<li><strong>3단계 — 경찰 진술 (변호인 동석)</strong> — 객관적 기준 충족 여부·고의 부재 항변. 사실관계 차이 자료 함께 제출.</li>\n<li><strong>4단계 — 합의 시도 검토 (잠정조치 위반 주의)</strong> — 100m 접근금지 잠정조치 받은 상태에서 직접 접촉은 위반 → 가중처벌 영역. 변호인을 통한 간접 합의 트랙.</li>\n<li><strong>5단계 — 형사재판 (혐의 다툼 또는 양형 자료)</strong> — 다툼 사안은 무죄·공소기각 항변. 자백 사안은 양형 자료(반성문·합의서·재발방지 약정).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">입건 후 항변 5단계를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실관계 자료 + 정상 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>본인 행적 시간순 정리표</strong> — 시점·장소·연락 시도·이유.</li>\n<li><strong>메시지·통화기록</strong> — 합의 시도·관계 정황.</li>\n<li><strong>증인 진술 (이웃·지인)</strong> — 우연 접촉 정황 확인.</li>\n<li><strong>업무상 동선 자료 (해당 시)</strong> — 정당사유 항변 자료.</li>\n<li><strong>반성문·재발방지 약정</strong> — 양형 자료.</li>\n<li><strong>피해자 합의서 (해당 시)</strong> — 변호인 통한 간접 합의 결과물.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 잠정조치(100m 접근금지·통신금지)를 받은 상태에서 피해자에게 직접 연락하면 잠정조치 위반으로 가중처벌 영역. 합의는 반드시 변호인을 통해 간접적으로 진행하는 것이 안전합니다.</blockquote>',
      },
      {
        title: '⚠️ 자주 하는 실수 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 가해자측이 빠뜨리기 쉬운 부분과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>변호인 없이 단독 진술</strong> — 객관적 기준·고의 항변 포인트가 정리 안 된 진술은 추후 다툼이 어려운 영역. 진술 전 변호인 동석 권장.</li>\n<li><strong>잠정조치 위반 합의 시도</strong> — 직접 연락은 가중처벌 영역. 변호인 간접 합의만 안전.</li>\n<li><strong>"내가 잘못 안 했다"식 일관 부인</strong> — 객관적 자료가 명확한 사안에서는 무리한 부인이 양형에 불리한 영역. 자백·다툼 영역 구분 필요.</li>\n<li><strong>피해자 SNS 추적</strong> — 입건 후 추가 접촉은 새 범죄로 입건 가능성 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 형사 무료 상담.</li>\n<li><strong>경찰 단계 국선변호인</strong> — 입건 즉시 신청 가능.</li>\n<li><strong>대한변호사협회 인권상담</strong> — 형사 절차 안내.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 객관적·일반적 기준에 의한 스토킹 처벌 범위',
        summary:
          '대법원 2025도36 사건(대법원, 2025-10-30 선고)에서 법원은 행위가 객관적·일반적으로 상대방에게 불안감·공포심을 일으키기에 충분하면 피해자가 현실적으로 인식하지 못했더라도 스토킹행위에 해당한다고 판단했습니다. 본 사안은 10일간 6회에 걸친 추적·접근 + 일부 범행은 24시간 이상 지속된 사실관계였습니다. 객관적 기준이 핵심 판단요소로 자리잡은 흐름입니다.',
        takeaway: '본인 사안이 횟수·지속시간·맥락에서 객관적 기준을 어느 정도 충족하는지 변호인 자문으로 점검하면 항변 영역 또는 양형 영역을 구분할 수 있는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '한 번만 따라간 건데도 스토킹인가요?',
        answer:
          '<strong>1회성은 스토킹범죄 처벌 어려운 영역이지만 경범죄·협박 등 별도 다툼 영역이 있을 수 있습니다.</strong> 본 대법원 2025도36 사안은 10일간 6회·일부 24시간 이상 지속 사실관계라 일반 1회성과 사실관계가 다른 영역.',
        },
      {
        question: '잠정조치는 어떻게 다투나요?',
        answer:
          '<strong>잠정조치 결정에 대해 즉시항고 가능합니다(스토킹처벌법 제8조).</strong> 다만 항고 중에도 효력은 유지되니 변호인 자문이 안전.',
      },
      {
        question: '합의하면 처벌 안 받나요?',
        answer:
          '<strong>스토킹범죄는 반의사불벌 폐지(2023.7.11)로 합의해도 처벌 영역은 유지됩니다.</strong> 다만 합의는 양형 자료로 작용해 형량 감경 검토 가능 영역.',
      },
      {
        question: '국선변호인은 언제 신청하나요?',
        answer:
          '<strong>경찰 단계부터 신청 가능합니다.</strong> 진술 전 자격·신청서 정리. 사선 변호인 부담이면 국선 우선 검토.',
      },
      {
        question: '입건 후 피해자에게 사과해도 되나요?',
        answer:
          '<strong>잠정조치 받은 상태라면 직접 접촉은 위반 영역입니다.</strong> 사과·합의는 변호인을 통한 간접 트랙만 안전.',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 입건 후 대응', href: '/guide/stalking/stalking-accused-defense' },
      { label: '잠정조치 위반 처벌', href: '/guide/stalking/stalking-protective-order-violation' },
      { label: '피해자 미인지 스토킹', href: '/guide/stalking/stalking-no-victim-awareness-supreme-2025' },
      { label: '스토킹 합의 시기', href: '/guide/stalking/stalking-settlement-timing' },
      { label: '스토킹 접근 금지', href: '/guide/stalking/stalking-emergency-protective-measures' },
    ],
  },

  // ─── 5. dismissal / dismissal-yellow-envelope-act-2026 (Item 7, dismissal) ───
  {
    domain: 'dismissal',
    slug: 'dismissal-yellow-envelope-act-2026',
    keyword: '노란봉투법 부당해고 사용자 정의 확대',
    questionKeyword: '노란봉투법 시행 후 원청사도 부당해고 책임 물을 수 있나요?',
    ctaKeyword: '노란봉투법 부당해고 점검',
    type: '시사이슈형',
    perspective: 'victim',
    meta: {
      title: '노란봉투법 시행 부당해고 5단계 — 2026 개정 정리 | 로앤가이드',
      description:
        '노란봉투법(노조법 개정)이 2026-03-10 시행되면서 사용자 정의 확대로 원청사 책임 다툼 트랙이 열렸다면 부당해고 구제 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"하청업체 소속이라 본사는 부당해고 책임이 없다고 들었어요. 그런데 노란봉투법이 통과돼서 원청사도 다툼 가능하다는 얘기가 있던데 정리가 필요합니다." 노동조합 및 노동관계조정법 개정안(2025-09-09 공포, 2026-03-10 시행)에 따르면 제2조 사용자 정의가 확대되어 \'근로조건에 대하여 실질적·구체적으로 지배·결정할 수 있는 지위에 있는 자\'까지 사용자에 포함됩니다. 이에 따라 원청사가 하청 근로자의 근로조건을 실질·구체적으로 지배하는 정황이 인정되면 부당해고 구제신청·단체교섭 상대방으로 다툼 트랙이 열리는 영역입니다. 다만 시행은 2026-03-10부터로, 시행일 이전 사안과 이후 사안의 적용 범위는 별도 검토가 필요한 영역이에요.</p>',
    sections: [
      {
        title: 'Q. 노란봉투법 사용자 정의 확대 4가지 핵심 변화',
        content:
          '<p><strong style="color:#1e3a5f">A. 사용자 정의·쟁의 범위·손해배상 제한·신원보증인 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사용자 정의 확대 (제2조)</strong> — \'근로조건에 대하여 실질적·구체적으로 지배·결정할 수 있는 지위에 있는 자\'까지 사용자에 포함. 원청사·모회사·도급인이 검토 영역.</li>\n<li><strong>② 노동쟁의 범위 확대</strong> — 종래 임금·근로시간 등 근로조건에 한정되던 노동쟁의가 \'사업 경영상 결정\'까지 포함되는 영역으로 확대.</li>\n<li><strong>③ 손해배상 제한 (제3조)</strong> — 쟁의행위에 대한 손해배상 청구 시 근로자별 귀책사유·기여도 분담 원칙 명문화. 일률 연대책임 제한.</li>\n<li><strong>④ 신원보증인 책임 금지</strong> — 신원보증인은 쟁의행위 손해배상 책임에서 제외.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 시행 2026-03-10 이후 사안부터 확대 적용 영역. 시행일 이전 사안은 종래 법리 적용 영역으로 별도 검토. 원청 사용자성 인정은 \'실질·구체적 지배\' 입증이 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 부당해고 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사용자성 입증 → 노동위 구제신청 → 심문회의 → 결정 → 행정소송 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (해고 통보 즉시)</strong> — 해고통보서·근로계약서·업무지시 메시지·도급계약서 보존. 원청 지시 정황 집중 정리.</li>\n<li><strong>2단계 — 사용자성 입증 자료 정리 (1~2주)</strong> — 원청이 본인 근로조건(업무내용·시간·임금·평가)을 실질·구체적으로 지배·결정한 정황. 출입증·평가표·교육이수증 등.</li>\n<li><strong>3단계 — 노동위 구제신청 (해고일로부터 3개월)</strong> — 지방노동위원회에 부당해고 구제신청. 원청·하청 모두 피신청인 검토.</li>\n<li><strong>4단계 — 심문회의 출석</strong> — 사용자성·해고 정당성 심문. 자료 추가 제출.</li>\n<li><strong>5단계 — 행정소송 (재심 후 15일 이내)</strong> — 중앙노동위 재심 결정 불복 시 행정법원 소송.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">노란봉투법 적용 5단계를 AI가 점검해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 해고 자료 + 사용자성 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>해고통보서·해고예고서</strong> — 사유·시점·통보 방식.</li>\n<li><strong>근로계약서·도급계약서</strong> — 형식상 고용주 vs 실질 지배자 구분.</li>\n<li><strong>업무지시 메시지·이메일</strong> — 원청 지시 정황 자료.</li>\n<li><strong>출입증·작업복·명함</strong> — 원청 사업장 상시 출입 정황.</li>\n<li><strong>평가표·교육이수증</strong> — 원청이 평가·교육 주체였던 정황.</li>\n<li><strong>임금·복리후생 자료</strong> — 원청 직접 지급 정황(해당 시).</li>\n<li><strong>구제신청서</strong> — 노동위 양식. 사용자성 주장 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 부당해고 구제신청은 해고일로부터 3개월 이내 영역(근로기준법 제28조). 시효 도과 시 노동위 트랙은 닫히고 민사 손해배상 트랙만 남는 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 사측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"형식상 도급계약이라 사용자 아니다" 주장 반박</strong> — 노동조합 및 노동관계조정법 개정안(2026-03-10 시행)은 \'실질·구체적 지배·결정\' 기준. 도급 형식은 결정적이지 않은 영역.</li>\n<li><strong>"시행일 이전 해고라 적용 안 된다" 주장</strong> — 시행 이후 사안에 대한 적용은 명확. 시행일 이전 사안은 종래 법리(원청 사용자성 인정 사례 별도) 영역.</li>\n<li><strong>"원청 직접 해고가 아니다" 주장 반박</strong> — 원청이 하청 근로자 근로조건을 실질 지배했다면 사용자성 인정 영역. 도급계약 갱신 거절·근로 종료 지시 정황 자료.</li>\n<li><strong>3개월 시효 주의</strong> — 해고일로부터 3개월 내 노동위 신청.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>지방노동위원회 (각 지역)</strong> — 부당해고 구제신청 트랙.</li>\n<li><strong>대한법률구조공단 132</strong> — 부당해고 무료 상담.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 진정·신고 안내.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '법령 — 노동조합 및 노동관계조정법 개정안 (노란봉투법)',
        summary:
          '노동조합 및 노동관계조정법 개정안(2025-09-09 공포, 2026-03-10 시행)에 따르면 제2조 사용자 정의가 \'근로조건에 대하여 실질적·구체적으로 지배·결정할 수 있는 지위에 있는 자\'까지 확대되고, 노동쟁의 범위에 \'사업 경영상 결정\'이 포함되며, 제3조 손해배상 청구 시 근로자별 귀책사유·기여도에 따른 분담과 신원보증인 책임 금지가 명문화됩니다. 시행일 이후 사안부터 확대 영역 적용.',
        takeaway: '원청이 하청 근로자 근로조건을 실질·구체적으로 지배·결정한 정황이 자료로 입증되면 부당해고 구제신청·단체교섭 상대방 다툼 트랙이 열리는 영역이라, 업무지시 메시지·평가표·출입증 등을 시점순 정리하는 것이 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '하청 직원인데 원청에 직접 구제신청 가능한가요?',
        answer:
          '<strong>2026-03-10 시행 이후 사안에서 원청의 실질·구체적 지배 정황 입증 시 가능 영역으로 정리됐습니다.</strong> 다만 사실관계별 다툼 영역이라 자료 보존이 핵심.',
      },
      {
        question: '시행 전 해고는 적용 안 되나요?',
        answer:
          '<strong>시행 2026-03-10 이전 사안은 종래 법리 적용 영역입니다.</strong> 원청 사용자성 인정 종래 사례(2010두9709 등)도 있어 별도 점검 가능.',
      },
      {
        question: '쟁의행위 손해배상도 변경되나요?',
        answer:
          '<strong>제3조 개정으로 근로자별 귀책사유·기여도 분담 + 신원보증인 책임 금지 영역으로 정리됐습니다.</strong> 일률 연대책임 청구 트랙 제한.',
      },
      {
        question: '구제신청 비용은 얼마인가요?',
        answer:
          '<strong>노동위 구제신청은 무료입니다.</strong> 변호사·노무사 선임은 별도 비용. 132·법률구조공단에서 무료 자문 가능 영역.',
      },
      {
        question: '복직 외 다른 구제 가능한가요?',
        answer:
          '<strong>금전보상명령(원직복직 갈음 보상금) 트랙도 있습니다(근로기준법 제30조 제3항).</strong> 복직 거부 사정 입증 시 보상금 명령 검토.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제 절차', href: '/guide/dismissal/dismissal-unfair-relief' },
      { label: '하청 부당해고 원청 책임', href: '/guide/dismissal/dismissal-no-contract-remedies' },
      { label: '쟁의 손해배상 분담', href: '/guide/wage/wage-yellow-envelope-claim-expansion-2026' },
      { label: '해고일 3개월 시효', href: '/guide/dismissal/dismissal-three-month-deadline' },
      { label: '금전보상명령', href: '/guide/dismissal/dismissal-monetary-compensation-order' },
    ],
  },

  // ─── 6. wage / wage-yellow-envelope-claim-expansion-2026 (Item 7, wage) ───
  {
    domain: 'wage',
    slug: 'wage-yellow-envelope-claim-expansion-2026',
    keyword: '노란봉투법 손해배상 분담 신원보증인',
    questionKeyword: '쟁의행위 손해배상 청구당했어요. 노란봉투법으로 어떻게 다투나요?',
    ctaKeyword: '쟁의 손해배상 분담 점검',
    type: '시사이슈형',
    perspective: 'victim',
    meta: {
      title: '노란봉투법 손해배상 분담 5단계 정리 | 로앤가이드',
      description:
        '쟁의행위 손해배상 청구당했다면 노란봉투법(2026-03-10 시행) 제3조 분담 원칙·신원보증인 책임 금지 5가지 항변 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"파업 참가했다는 이유로 회사가 손해배상 청구 소송을 걸었어요. 청구액이 1억원이 넘는데 노란봉투법 시행 후 어떻게 다툴 수 있는지 막막합니다." 노동조합 및 노동관계조정법 개정안(2025-09-09 공포, 2026-03-10 시행)에 따르면 제3조가 개정되어 쟁의행위 손해배상 청구 시 \'근로자별 귀책사유와 손해 발생 기여도\'에 따라 책임을 분담하도록 명문화됐고, 신원보증인은 쟁의행위 손해배상 책임에서 제외됩니다. 종래 일률 연대책임 청구 트랙이 제한되는 영역으로, 본인 행위가 어느 정도 손해 발생에 기여했는지 입증·다툼 자료가 핵심이에요. 시행일 2026-03-10 이후 청구된 사안부터 확대 적용 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 손해배상 분담 항변 4가지 정리 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 귀책사유·기여도·신원보증·인과관계 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 근로자별 귀책사유</strong> — 본인이 쟁의 주도자인지·단순 참가자인지·우연 동행자인지 구분. 노조법 제3조 개정으로 일률 연대 제한 영역.</li>\n<li><strong>② 손해 발생 기여도</strong> — 본인 행위가 손해 발생에 어느 정도 기여했는지 객관적 비중. 청구액 분담 산정 자료.</li>\n<li><strong>③ 신원보증인 책임 금지</strong> — 신원보증인은 책임에서 제외 영역(노조법 제3조).</li>\n<li><strong>④ 인과관계·정당성</strong> — 정당한 쟁의행위에 대한 손해배상 청구 자체 다툼 영역. 단순 합법 쟁의는 책임 부정 가능성.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 청구액이 크다고 일률 책임지는 시대는 정리되는 흐름이라, 본인 역할·기여도 입증 자료를 확보하는 것이 핵심. 노조 차원 공동대응 + 변호사 선임 검토 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 손해배상 항변 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 답변서 → 기여도 입증 → 화해 검토 → 판결 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 소장 송달 직후 자료 보존</strong> — 쟁의행위 자료(공문·결의서·일정), 본인 행위 기록(영상·사진·메시지). 30일 이내 답변서 영역.</li>\n<li><strong>2단계 — 답변서 제출 (송달일로부터 30일)</strong> — 노조법 제3조 분담 원칙 적용 주장. 본인 역할·기여도 정리.</li>\n<li><strong>3단계 — 기여도 입증 자료 (변론기일)</strong> — 본인이 단순 참가자 정황·신원보증인 면책 정황(해당 시) 자료 제출.</li>\n<li><strong>4단계 — 화해 검토</strong> — 분담 비율 협의 가능성. 노조 공동 대응 + 변호사 협상 트랙.</li>\n<li><strong>5단계 — 판결 (1심·항소·상고)</strong> — 분담 인정 판결 시 본인 분담분만 지급 영역. 미응답·궐석은 일률 인용 영역이라 답변서 필수.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">쟁의행위 손해배상 분담 5단계를 AI가 점검해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 쟁의 자료 + 본인 역할 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>소장 부본</strong> — 청구 원인·금액·증거 확인.</li>\n<li><strong>쟁의행위 결의서·공문</strong> — 정당성 자료.</li>\n<li><strong>본인 참여 일자·행위 기록</strong> — 단순 참가 vs 주도 구분.</li>\n<li><strong>영상·사진·메시지</strong> — 행위 정황 객관 자료.</li>\n<li><strong>신원보증서 사본</strong> — 신원보증인 면책 자료(해당 시).</li>\n<li><strong>노조 공문·회의록</strong> — 공동대응 자료.</li>\n<li><strong>답변서·준비서면</strong> — 변호사 자문 후 작성.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 답변서 미제출은 청구 인용으로 이어지는 영역이라 30일 안에 변호사·법률구조공단 132 자문이 안전. 노조 차원 공동 변호인단도 검토 가능 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 사측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"전원 연대책임" 주장 반박</strong> — 노조법 제3조 개정(2026-03-10 시행)은 근로자별 귀책사유·기여도 분담 명문. 일률 연대 제한 영역.</li>\n<li><strong>"신원보증인 책임 인정" 주장 반박</strong> — 노조법 제3조에서 신원보증인 책임 금지 명문화. 보증서 제출만으로 책임 부담은 정리되는 흐름.</li>\n<li><strong>"위법 쟁의" 주장 검토</strong> — 정당한 쟁의행위 영역인지부터 다툼. 노동위 결정·과거 판례 자료 활용.</li>\n<li><strong>30일 답변 시효 주의</strong> — 답변서 미제출은 청구 인용 영역. 변호사 자문 우선.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 손해배상 무료 상담.</li>\n<li><strong>한국노총·민주노총 법률지원센터</strong> — 노조 공동대응 자문.</li>\n<li><strong>각 지역 노동인권센터</strong> — 무료 자문.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '법령 — 노조법 제3조 개정 (손해배상 제한)',
        summary:
          '노동조합 및 노동관계조정법 개정안(2025-09-09 공포, 2026-03-10 시행) 제3조에 따르면 쟁의행위 손해배상 청구 시 근로자별 귀책사유와 손해 발생 기여도에 따라 책임을 분담하도록 명문화되고, 신원보증인은 쟁의행위 손해배상 책임에서 제외됩니다. 시행일 이후 청구 사안부터 확대 영역 적용으로 정리됩니다.',
        takeaway: '쟁의 손해배상 청구당한 근로자는 본인 역할·기여도 입증 자료를 시점순 정리해 답변서를 제출하면 분담 항변 트랙이 열리는 영역이라, 30일 답변 시효 안에 변호사·노조 자문을 받는 것이 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '시행 전 청구당한 사안도 적용되나요?',
        answer:
          '<strong>시행 2026-03-10 이후 청구 사안부터 명확 적용 영역입니다.</strong> 시행일 이전 사안은 종래 법리·과거 판례(2017다294586 등) 적용 영역으로 별도 점검.',
      },
      {
        question: '단순 참가자도 책임지나요?',
        answer:
          '<strong>제3조 분담 원칙에 따라 본인 기여도에 한정될 수 있는 영역입니다.</strong> 단순 참가자 정황 입증 시 분담 비율 축소 가능성 검토.',
      },
      {
        question: '신원보증인은 정말 책임 안 지나요?',
        answer:
          '<strong>노조법 제3조 개정으로 쟁의행위 손해배상 책임에서 제외됐습니다.</strong> 다만 다른 손해배상 영역은 별도 검토.',
      },
      {
        question: '답변 안 하면 어떻게 되나요?',
        answer:
          '<strong>30일 이내 답변서 미제출은 청구 인용 가능성이 높은 영역입니다.</strong> 변호사·132 자문 우선.',
      },
      {
        question: '청구액 1억원이면 변호사 비용은?',
        answer:
          '<strong>일반적으로 청구액의 5~10% 수준이 통상 영역이지만 노조 공동대응 시 분담 가능합니다.</strong> 132·노조 법률지원센터 무료 자문도 활용.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '노란봉투법 부당해고', href: '/guide/dismissal/dismissal-yellow-envelope-act-2026' },
      { label: '쟁의행위 정당성 판단', href: '/guide/wage/wage-strike-legality' },
      { label: 'TAI/OPI 임금성 점검', href: '/guide/wage/wage-tai-opi-supreme-court-ruling-2026' },
      { label: '임금체불 노동청 진정', href: '/guide/wage/wage-payslip-nondelivery-report' },
      { label: '2026 최저임금 적용', href: '/guide/wage/wage-minimum-2026-10320-explained' },
    ],
  },

  // ─── 7. wage / wage-minimum-2026-10320-explained (Item 9, victim) ───
  {
    domain: 'wage',
    slug: 'wage-minimum-2026-10320-explained',
    keyword: '2026 최저임금 10320원 차액 청구',
    questionKeyword: '2026년 최저임금 시급 10,320원이라는데 적게 받으면 어떻게 청구하나요?',
    ctaKeyword: '2026 최저임금 차액 점검',
    type: '시사이슈형',
    perspective: 'victim',
    meta: {
      title: '2026 최저임금 10,320원 차액 청구 5단계 | 로앤가이드',
      description:
        '2026년 최저임금 시급 10,320원·월 환산 2,156,880원에 못 미치는 임금을 받았다면 차액 청구 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"올해 최저임금이 시급 10,320원이라는데 회사에서 9,500원으로 계산해서 월급을 줘요. 어디에 신고해야 할지, 차액은 얼마나 받을 수 있는지 막막합니다." 고용노동부 고시 제2025-47호(2025-08-05)에 따르면 2026년 최저임금은 시급 10,320원, 월 환산 2,156,880원(10,320원 × 209시간)으로 결정·고시됐고, 시행은 2026-01-01부터입니다(2025년 10,030원 → 2026년 10,320원, 인상률 2.89%). 결정은 최저임금위원회 의결(2025-07-10) → 고용노동부 고시(2025-08-05) 순서로 진행됐으며, 미만 지급은 최저임금법 제6조 위반(3년 이하 징역 또는 2천만원 이하 벌금) 영역입니다. 차액 청구는 노동청 진정 + 민사 임금청구 두 트랙이 있어요.</p>',
    sections: [
      {
        title: 'Q. 2026 최저임금 4가지 핵심 정리',
        content:
          '<p><strong style="color:#1e3a5f">A. 시급·월급·산입항목·적용범위 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 시급 10,320원</strong> — 2025년 10,030원 → 2026년 10,320원, 인상률 2.89%(290원 인상). 고용노동부 고시 제2025-47호(2025-08-05) 기준.</li>\n<li><strong>② 월 환산 2,156,880원</strong> — 시급 10,320원 × 월 209시간(주 40시간 기준 + 주휴 8시간) = 2,156,880원. 주 40시간 미만은 비례 계산 영역.</li>\n<li><strong>③ 산입항목</strong> — 매월 정기·일률 지급되는 임금 중 최저임금에 산입되는 영역(상여금·복리후생비 일부 단계적 산입). 식대·교통비 일부 산입 영역.</li>\n<li><strong>④ 적용범위</strong> — 1인 이상 모든 사업장. 수습기간 3개월 이내 90% 감액 영역(단순노무직 제외).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 시급 10,320원 미만 지급은 최저임금법 제6조 위반 영역. 차액 청구 시효는 3년(근로기준법 제49조)으로 누적 청구 가능 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 차액 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 차액 산정 → 회사 청구 → 노동청 진정 → 민사 청구 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임금자료 보존 (즉시)</strong> — 최근 3년치 급여명세서·근로계약서·근태기록·주휴 자료. 시급 vs 실 지급액 비교.</li>\n<li><strong>2단계 — 차액 산정 (1주)</strong> — 본인 시급 = 월 임금 ÷ 월 근로시간. 10,320원 미달분 × 시간 누적 → 차액 산정.</li>\n<li><strong>3단계 — 회사 차액 지급 요구 (내용증명)</strong> — 미응답 시 노동청 진정.</li>\n<li><strong>4단계 — 노동청 임금체불 진정 (labor.moel.go.kr)</strong> — 사업장 관할 고용노동지청. 출석조사 → 시정명령 → 형사 송치 트랙.</li>\n<li><strong>5단계 — 민사 임금청구 (소액심판·지급명령)</strong> — 3,000만원 이하면 소액심판, 청구액 무관 지급명령. 지연이자 연 20% 가산.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">2026 최저임금 차액 5단계를 AI가 점검해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 임금자료 + 근태자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>최근 3년치 급여명세서</strong> — 시급·월급 항목 확인.</li>\n<li><strong>근로계약서</strong> — 시급·월급·근로시간 명시.</li>\n<li><strong>근태기록·출퇴근표</strong> — 실 근로시간 산정.</li>\n<li><strong>주휴 자료</strong> — 주 15시간 이상 근로 + 출근 정황.</li>\n<li><strong>차액 산정표</strong> — 본인 작성 또는 노무사 자문.</li>\n<li><strong>최저임금 고시 (제2025-47호)</strong> — 청구 근거 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 월급제라도 월 209시간 환산 시 시급 10,320원 × 209 = 2,156,880원 미만이면 미달 영역. 식대·교통비가 포함됐는지 산입 항목 별도 점검 필요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"식대·복리후생 포함하면 미달 아니다" 주장 검토</strong> — 산입 항목·비율은 매년 단계적 조정 영역. 본인 사안에서 어디까지 산입되는지 노무사 자문.</li>\n<li><strong>"수습이라 90%만 줘도 된다" 주장 반박</strong> — 단순노무직은 수습 감액 적용 안 되는 영역. 직무 분류 점검.</li>\n<li><strong>"외국인이라 적용 안 된다" 주장 반박</strong> — 최저임금법은 국적 무관 적용 영역. 미등록 체류자도 적용.</li>\n<li><strong>3년 시효 주의</strong> — 미지급 임금 3년 시효(근로기준법 제49조).</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>고용노동부 고객상담센터 1350</strong> — 최저임금·임금체불 무료 상담.</li>\n<li><strong>최저임금위원회 (minimumwage.go.kr)</strong> — 고시·산정 정보.</li>\n<li><strong>대한법률구조공단 132</strong> — 임금청구 무료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '정책 — 2026년 최저임금 시급 10,320원 결정',
        summary:
          '고용노동부 고시 제2025-47호(2025-08-05)에 따르면 2026년 최저임금은 시급 10,320원, 월 환산 2,156,880원(10,320원 × 209시간)으로 결정·고시됐고, 시행은 2026-01-01부터입니다. 결정 흐름은 최저임금위원회 의결(2025-07-10) → 고용노동부 고시(2025-08-05) → 시행(2026-01-01)입니다. 2025년 10,030원에서 290원 인상(인상률 2.89%) 영역.',
        takeaway: '시급 10,320원·월 2,156,880원 미만 지급은 최저임금법 제6조 위반 영역이라, 급여명세서·근태기록을 시점순 정리하면 노동청 진정 + 민사 청구 트랙이 열리는 영역으로 검토 가능합니다.',
      },
    ],
    faq: [
      {
        question: '월급제인데 어떻게 시급 환산하나요?',
        answer:
          '<strong>월급 ÷ 209시간(주 40시간 기준)으로 환산합니다.</strong> 209시간 미달은 2,156,880원 비례 계산. 주 40시간 미만 단축 근로는 별도 비례.',
      },
      {
        question: '식대·교통비도 최저임금에 포함되나요?',
        answer:
          '<strong>매월 정기·일률 지급되는 식대·교통비는 일부 산입 영역(단계적 확대).</strong> 산입 비율은 매년 조정되니 노무사·1350 자문이 안전.',
      },
      {
        question: '아르바이트도 적용되나요?',
        answer:
          '<strong>모든 사업장·모든 근로자 적용입니다.</strong> 단시간·일용직 모두 시간당 10,320원 이상 영역.',
      },
      {
        question: '수습기간이라 적게 줘도 되나요?',
        answer:
          '<strong>수습 3개월 이내 + 1년 이상 근로계약자에 한해 90% 감액 가능 영역입니다.</strong> 단순노무직은 감액 안 되는 영역(시행령 제3조).',
      },
      {
        question: '차액 청구 시 어디부터 가나요?',
        answer:
          '<strong>회사 내용증명 → 노동청 진정 → 민사 청구 순서가 일반적입니다.</strong> 노동청 1350·법률구조공단 132 무료 상담부터 활용 가능.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '2026 최저임금 월급 환산', href: '/guide/wage/wage-minimum-2026-monthly-calculation' },
      { label: '식대 통상임금 산입', href: '/guide/wage/wage-self-driving-allowance-ordinary-wage' },
      { label: '주휴수당 미지급 청구', href: '/guide/wage/wage-weekly-holiday-pay' },
      { label: '임금체불 노동청 진정', href: '/guide/wage/wage-payslip-nondelivery-report' },
      { label: 'TAI/OPI 임금성 점검', href: '/guide/wage/wage-tai-opi-supreme-court-ruling-2026' },
    ],
  },

  // ─── 8. wage / wage-minimum-2026-monthly-calculation (Item 9, victim) ───
  {
    domain: 'wage',
    slug: 'wage-minimum-2026-monthly-calculation',
    keyword: '2026 최저임금 월급 환산 209시간',
    questionKeyword: '2026 최저임금 월 환산 2,156,880원이 어떻게 나온 건가요?',
    ctaKeyword: '월 최저임금 환산 점검',
    type: '계산형',
    perspective: 'victim',
    meta: {
      title: '2026 최저임금 월 2,156,880원 환산 5단계 | 로앤가이드',
      description:
        '시급 10,320원이 월 환산 2,156,880원이 되는 이유와 본인 임금이 미달인지 점검하는 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"2026년 최저임금이 시급 10,320원이라는데 월급으로는 얼마인지, 209시간이 어떻게 나온 건지, 본인 월급이 미달인지 어떻게 비교하는지 정리가 필요합니다." 고용노동부 고시 제2025-47호(2025-08-05)에 따르면 2026년 시급은 10,320원, 월 환산은 2,156,880원입니다. 209시간은 주 40시간 + 주휴 8시간(주 15시간 이상 근로자 + 1주 만근 시) = 주 48시간, 4.345주(연 12개월 ÷ 365.25 × 7 ÷ 12 보정) ≈ 209시간으로 산출되는 영역입니다. 본인 월급이 209시간 환산 시 시급 10,320원 미만이면 차액 청구 트랙이 열리는 영역이라, 산식부터 차액 산정까지 정리하면 점검이 가능해요.</p>',
    sections: [
      {
        title: 'Q. 월 209시간 환산 4가지 산출 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 주 근로시간·주휴·월 환산·미달 점검 4단계로 정리할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 주 40시간</strong> — 법정 근로시간(근로기준법 제50조). 1일 8시간 × 5일.</li>\n<li><strong>② 주휴 8시간</strong> — 주 15시간 이상 근로 + 1주 만근 시 유급 주휴(근로기준법 제55조). 주 1일 유급휴일 8시간.</li>\n<li><strong>③ 월 환산 209시간</strong> — 주 48시간(40+8) × 4.345주 ≈ 209시간. 시급 10,320원 × 209 = 2,156,880원.</li>\n<li><strong>④ 미달 점검</strong> — 본인 월급 ÷ 본인 월 근로시간 = 본인 시급. 10,320원 미만이면 미달 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 209시간은 주 40시간 + 주휴 8시간이 결합된 환산 결과. 단시간 근로자는 본인 주 근로시간 + 주휴 비례로 별도 환산 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 미달 점검·청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 시급 환산 → 미달 확인 → 차액 산정 → 회사 청구 → 노동청 진정 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 본인 시급 환산 (즉시)</strong> — 월급 ÷ 월 실 근로시간(주휴 포함 209 또는 비례). 시급 10,320원 미만 여부 확인.</li>\n<li><strong>2단계 — 산입 항목 확인 (1~2일)</strong> — 식대·교통비·복리후생 일부 산입 영역. 산입 후에도 미달인지 점검.</li>\n<li><strong>3단계 — 차액 산정 (1주)</strong> — 미달 부분 × 근로 개월수 누적. 3년 시효 안에서 합산.</li>\n<li><strong>4단계 — 회사 차액 지급 요구 (내용증명)</strong> — 미응답 시 노동청.</li>\n<li><strong>5단계 — 노동청 진정 + 민사 청구</strong> — 1350·labor.moel.go.kr·소액심판·지급명령.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">최저임금 미달 점검 5단계를 AI가 정리해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 임금자료 + 근태자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>급여명세서 (최근 3년)</strong> — 본인 시급·월급·산입 항목.</li>\n<li><strong>근로계약서</strong> — 시급·월급·근로시간 약정.</li>\n<li><strong>근태기록·출퇴근표</strong> — 실 근로시간 산정.</li>\n<li><strong>주휴 자료</strong> — 주 15시간 이상 + 만근 정황.</li>\n<li><strong>최저임금 고시 (제2025-47호)</strong> — 청구 근거.</li>\n<li><strong>차액 산정표</strong> — 노무사 자문 또는 본인 작성.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 단시간 근로자(주 40시간 미만)는 본인 주 근로시간 비례로 환산. 예) 주 20시간 근로 = 주휴 4시간 추가 = 주 24시간 × 4.345주 ≈ 104시간.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"209시간 적용 안 된다" 주장 반박</strong> — 주 40시간 + 주휴 적용 근로자는 209시간 환산 영역. 단시간은 비례.</li>\n<li><strong>"주휴는 별도 안 준다" 주장 반박</strong> — 주 15시간 이상 + 만근 시 주휴 유급 영역(근로기준법 제55조).</li>\n<li><strong>"산입 항목 포함하면 미달 아니다" 주장 검토</strong> — 산입 비율 매년 단계 조정. 사안별 점검 필요.</li>\n<li><strong>3년 시효 주의</strong> — 미지급 임금 3년.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>고용노동부 고객상담센터 1350</strong> — 최저임금 무료 상담.</li>\n<li><strong>최저임금위원회 (minimumwage.go.kr)</strong> — 고시·계산기.</li>\n<li><strong>대한법률구조공단 132</strong> — 임금청구 무료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '정책 — 2026 최저임금 월 환산액',
        summary:
          '고용노동부 고시 제2025-47호(2025-08-05)에 따르면 2026년 최저임금은 시급 10,320원, 월 환산 2,156,880원(10,320원 × 209시간)으로 결정됐습니다. 209시간은 주 40시간 + 주휴 8시간 = 주 48시간 × 약 4.345주의 환산 결과입니다. 시행은 2026-01-01부터이며, 2025년 10,030원 대비 인상률 2.89% 영역.',
        takeaway: '본인 월급을 월 근로시간으로 나눈 본인 시급이 10,320원 미달이면 차액 청구 트랙이 열리는 영역이라, 산입 항목 점검 후에도 미달인 사안은 노동청 진정 + 민사 청구를 검토할 수 있는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '주 30시간 근로자도 209시간 환산되나요?',
        answer:
          '<strong>비례 환산 영역입니다.</strong> 주 30시간 + 주휴 6시간 = 주 36시간 × 4.345 ≈ 156시간. 본인 시급 = 월급 ÷ 156.',
      },
      {
        question: '주휴수당 별도 받으면 209시간 안 되나요?',
        answer:
          '<strong>월급제는 주휴 포함 209시간이 표준 환산 영역입니다.</strong> 시급제·일급제는 주휴 별도 산정 영역.',
      },
      {
        question: '식대 30만원 받으면 최저임금 미달 아닌가요?',
        answer:
          '<strong>2026년 산입 비율 적용 후 미달 여부를 점검합니다.</strong> 매년 단계적 조정이라 1350 자문이 안전.',
      },
      {
        question: '주휴 안 챙겨주는데 이것도 청구 가능한가요?',
        answer:
          '<strong>주 15시간 이상 + 만근 시 유급 주휴 청구 가능 영역입니다(근로기준법 제55조).</strong> 별도 청구 트랙 검토.',
      },
      {
        question: '차액 청구 누적이 가능한가요?',
        answer:
          '<strong>3년 시효 안에서 누적 가능합니다.</strong> 시효 도과 부분은 청구 어려운 영역이라 빠른 정리가 안전.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '2026 최저임금 차액 청구', href: '/guide/wage/wage-minimum-2026-10320-explained' },
      { label: '주휴수당 미지급', href: '/guide/wage/wage-weekly-holiday-pay' },
      { label: '식대 통상임금 산입', href: '/guide/wage/wage-self-driving-allowance-ordinary-wage' },
      { label: '연장수당 정확 계산', href: '/guide/wage/wage-night-overtime-exact-calculation' },
      { label: '임금체불 노동청 진정', href: '/guide/wage/wage-payslip-nondelivery-report' },
    ],
  },
];
