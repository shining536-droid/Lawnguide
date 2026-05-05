import { SpokePage } from '../spoke-pages';

// batch56 wage 2 + unemployment 1 = 3개
//
// 고유 존재 이유:
// 1. 이 페이지는 자가운전보조금·식대를 통상임금에서 제외받아 연장·야간·휴일근로수당이 적게 지급된 근로자가 통상임금 재산정 청구를 정리하도록 돕는 페이지다.
// 2. 이 페이지는 매월 고정으로 받는 야간근로수당이 통상임금에 산입되어야 함에도 제외돼 연차수당·퇴직금이 적게 산정된 근로자가 통상임금 산입 청구 트랙을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 사용자가 일방적으로 근로시간을 30% 단축한 후 자진퇴사한 근로자가 정당한 이직사유 + 실업급여 수급자격 다툼 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch56WageUnemp: SpokePage[] = [
  // ─── 1. wage / wage-self-driving-allowance-ordinary-wage ───
  {
    domain: 'wage',
    slug: 'wage-self-driving-allowance-ordinary-wage',
    keyword: '자가운전보조금 식대 통상임금 산입',
    questionKeyword: '식대·자가운전보조금이 통상임금에 빠져서 연장수당이 적게 나왔어요. 청구 가능한가요?',
    ctaKeyword: '자가운전보조금 통상임금 청구',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '식대·자가운전보조금 통상임금 산입 청구 5단계 | 로앤가이드',
      description:
        '식대·자가운전보조금이 통상임금에서 빠져 연장·야간·휴일수당이 적게 지급됐다면 통상임금 산입 청구 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"매월 식대 20만원·자가운전보조금 20만원이 고정으로 들어왔는데, 연장근로수당 계산할 때는 빠지고 본봉 + 직책수당만으로 계산되더라고요. 1년 동안 받은 연장수당이 한 달 30만원씩이라면 1년에 360만원, 그중 식대·자가운전보조금이 통상임금에 들어갔다면 50만원 차이가 났을 거예요." 통상임금은 정기적·일률적·고정적으로 지급되는 임금을 의미하고, 대법원 2014다27807 판결은 사용자가 \'실비변상\' 명목으로 지급해도 실제로 그 명목에 사용되는지를 불문하고 일정 금액을 지급한다면 임금·통상임금에 해당한다고 봤습니다. 식대·자가운전보조금이 매월 고정으로 지급됐다면 통상임금 산입 청구 트랙이 열리는 영역이며, 미지급 임금은 3년 시효(근로기준법 제49조) 안에 청구할 수 있어요.</p>',
    sections: [
      {
        title: 'Q. 통상임금 산입 다툼 4가지 핵심 기준',
        content:
          '<p><strong style="color:#1e3a5f">A. 정기성·일률성·고정성·실비변상 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 정기성</strong> — 일정 주기(매월·매주)마다 지급되는지. 일회성·우연적 지급은 제외.</li>\n<li><strong>② 일률성</strong> — 모든 근로자 또는 일정 조건을 충족한 근로자에게 동일 기준으로 지급되는지.</li>\n<li><strong>③ 고정성</strong> — 추가 조건 충족 여부와 관계없이 사전에 확정된 금액이 지급되는지. 출근일수와 무관하게 정액으로 지급되면 고정성 인정.</li>\n<li><strong>④ 실비변상 여부 (대법원 2014다27807)</strong> — 명목이 \'실비\'·\'경비\'라도 실제 그 명목에 사용되는지를 불문하고 일정 금액을 지급한다면 임금·통상임금. 영수증 정산이 없으면 실비 부정 정황.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회사가 식대·자가운전보조금을 \'복리후생\'·\'실비\'로 분류해도, 매월 고정 지급 + 영수증 정산 부재 정황이 결합되면 통상임금 산입 영역입니다. 노사합의로 통상임금에서 제외해도 강행규정 위반으로 무효 정황(2012다89399).</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 통상임금 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동청 진정 + 민사 청구 두 트랙을 동시에 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임금자료 보존 (즉시)</strong> — 최근 3년치 급여명세서·근로계약서·취업규칙·임금협정서 보존. 식대·자가운전보조금 항목명·금액·지급주기 정리.</li>\n<li><strong>2단계 — 차액 산정 (1~2주)</strong> — 식대·자가운전보조금을 통상임금에 포함시켜 연장·야간·휴일근로수당 차액 계산. 노무사·법률구조공단 132 무료 자문 가능.</li>\n<li><strong>3단계 — 회사에 차액 지급 요구 (내용증명)</strong> — 통상임금 산입 차액 + 미지급 연장수당·야간수당·휴일수당·연차수당·퇴직금 차액을 합산해 청구.</li>\n<li><strong>4단계 — 노동청 임금체불 진정 (labor.moel.go.kr)</strong> — 회사 미지급 시 사업장 관할 고용노동지청에 진정. 출석조사 → 시정명령 → 이행 트랙.</li>\n<li><strong>5단계 — 민사 임금청구 소송 (소액심판·지급명령)</strong> — 노동청 트랙이 한계인 사안은 민사 트랙. 3,000만원 이하면 소액심판, 청구액 무관 지급명령 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">통상임금 산입 + 차액 청구 5단계를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 임금자료 + 차액 산정 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>최근 3년치 급여명세서</strong> — 식대·자가운전보조금 항목명·금액·주기 확인.</li>\n<li><strong>근로계약서·임금협정서</strong> — 통상임금 정의·임금항목 분류 명문 규정.</li>\n<li><strong>취업규칙·복리후생 규정</strong> — 식대·자가운전보조금이 실비 vs 정액 분류 정황.</li>\n<li><strong>출퇴근·근태 기록</strong> — 연장·야간·휴일근로 시간 산정 자료.</li>\n<li><strong>차액 산정표</strong> — 본인이 직접 또는 노무사 자문으로 작성한 차액 명세.</li>\n<li><strong>실비 정산 증빙 부재 정황</strong> — 영수증 제출 없이 정액 지급된 정황 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 통상임금 산입 차액은 연장·야간·휴일수당뿐 아니라 연차수당·퇴직금까지 영향을 미쳐, 3년 시효 내 청구액이 누적되면 수백만~수천만원 수준에 이를 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"식대는 실비라 통상임금 아니다" 주장 반박</strong> — 영수증 정산 없이 매월 고정 지급된 정황이라면 실비 부정 정황으로 평가될 여지가 있습니다(대법원 2014다27807).</li>\n<li><strong>"노사합의로 제외했다" 주장 반박</strong> — 통상임금에 속하는 임금을 제외하기로 하는 노사합의는 강행규정 위반으로 무효 정황(2012다89399).</li>\n<li><strong>"임금협정서에 명시돼 있다" 주장 반박</strong> — 명문 규정도 강행규정 위반이면 무효. 근로자에게 불리한 합의는 근로기준법 제15조에 따라 무효 정황.</li>\n<li><strong>3년 시효 주의</strong> — 미지급 임금은 3년 시효(근로기준법 제49조). 시효 도과 부분은 청구 어려운 영역이라 빠른 절차가 안전.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 임금체불·통상임금 무료 상담.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 임금체불 진정 트랙.</li>\n<li><strong>한국공인노무사회 02-6293-1500</strong> — 통상임금 차액 산정 노무사 자문.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 실비변상 명목 정액 지급금의 통상임금 산입',
        summary:
          '대법원 2014다27807 사건(대법원, 2019.04.23 선고)에서 법원은 버스여객운송사업 회사가 노사협의에 따라 실제 경비로 사용되는지를 불문하고 모든 운전직 근로자에게 담뱃값·장갑대·음료수대·청소비 등 명목으로 일정 금액을 정기 지급한 사안에서, 그 금원은 명목과 무관하게 임금에 해당하고 정기적·일률적·고정적으로 지급된 만큼 통상임금에 산입된다고 판시했습니다. 사용자가 실비변상 명목을 사용했다는 사실만으로 임금·통상임금에서 제외할 수 없다고 본 판결입니다.',
        takeaway: '식대·자가운전보조금이 영수증 정산 없이 매월 고정 지급됐다면 통상임금 산입 청구 트랙이 열리는 사례가 있어, 급여명세서·근로계약서·임금협정서를 정리하면 차액 청구가 검토 가능한 영역입니다.',
      },
    ],
    faq: [
      {
        question: '회사가 "이미 노사합의로 제외했다"고 합니다',
        answer:
          '<strong>강행규정 위반 노사합의는 무효 정황입니다(대법원 2012다89399).</strong> 통상임금에 속하는 임금을 제외하는 합의는 근로기준법 강행규정 위반으로 효력 없는 사례가 있어, 합의 존재만으로 청구가 봉쇄되지 않는 영역.',
      },
      {
        question: '식대를 카드 결제로 받고 있는데 그래도 통상임금인가요?',
        answer:
          '<strong>지급 방식보다 정기성·고정성 + 정액 지급 정황이 핵심입니다.</strong> 카드 결제라도 매월 고정 한도가 정해져 있고 잔액이 다음 달 이월되거나 현금화 가능하다면 임금성 다툼 영역. 실제 지급 정황을 정리하면 됩니다.',
      },
      {
        question: '재직 중인데 통상임금 청구하면 불이익 있을까요?',
        answer:
          '<strong>법적으로는 청구권이 보장되며, 보복성 처분은 별도 다툼 영역입니다.</strong> 다만 실무상 회사 분위기 고려가 필요한 영역이라, 노무사·법률구조공단 132와 사전 상담 후 진행하는 것이 안전.',
      },
      {
        question: '퇴직 후에도 청구 가능한가요?',
        answer:
          '<strong>3년 시효 내라면 가능합니다.</strong> 퇴직 후 3년 내 미지급 임금·연차수당·퇴직금 차액 청구 트랙이 열려 있고, 사용자 자력 부족 시 임금채권보장기금 트랙(소액 한도) 결합 검토.',
      },
      {
        question: '차액 산정은 누가 해주나요?',
        answer:
          '<strong>본인 직접 또는 노무사·변호사 자문으로 가능합니다.</strong> 법률구조공단 132에서 일부 무료 자문 가능, 복잡한 사안은 노무사 유료(통상 30~100만원)에 맡기는 사례가 있습니다.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '식대·교통비 통상임금 산입', href: '/guide/wage/wage-meal-expense-ordinary-wage' },
      { label: '연장근로수당 정확 계산법', href: '/guide/wage/wage-night-overtime-exact-calculation' },
      { label: '통상임금 정기상여 산입', href: '/guide/wage/wage-ordinary-wage-bonus-included' },
      { label: '임금체불 노동청 진정', href: '/guide/wage/wage-payslip-nondelivery-report' },
      { label: '미지급 임금 시효 1년 청구', href: '/guide/wage/wage-unpaid-one-year-statute-claim' },
    ],
  },

  // ─── 2. wage / wage-fixed-night-shift-allowance-claim ───
  {
    domain: 'wage',
    slug: 'wage-fixed-night-shift-allowance-claim',
    keyword: '고정 야간근로수당 통상임금 산입',
    questionKeyword: '매월 고정 야간수당 30만원이 통상임금에서 빠져서 연차수당이 적게 나왔어요. 청구 가능한가요?',
    ctaKeyword: '고정 야간수당 통상임금 청구',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '고정 야간수당 통상임금 산입 청구 5단계 | 로앤가이드',
      description:
        '매월 고정 야간근로수당이 통상임금에서 빠져 연차수당·퇴직금이 적게 산정됐다면 통상임금 산입 청구 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"3교대 근무라 매월 야간근로수당 30만원이 \'고정\'으로 들어왔어요. 그런데 연차수당이나 퇴직금 계산할 때는 야간수당이 빠지고 본봉만으로 계산되더라고요. 5년 근속이면 차액이 수백만원이 될 텐데 청구 가능한지 막막합니다." 야간근로수당이라도 매월 고정 금액으로 지급되고 실제 야간근로 시간과 관계없이 일정액이 정기 지급된다면, 그 \'고정 부분\'은 통상임금에 산입될 가능성이 있는 영역입니다(대법원 2012다89399 통상임금 4요건). 연차수당·퇴직금·해고예고수당 등 통상임금 기준 산정 영역의 차액 청구가 3년 시효 내(근로기준법 제49조) 가능한 영역이라, 급여명세서·근로계약서·근태기록 보존이 첫 단계예요.</p>',
    sections: [
      {
        title: 'Q. 야간수당 통상임금 산입 4가지 점검 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 고정성·정기성·실 야간근로와 무관성·강행규정 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 매월 고정 금액 지급</strong> — 실제 야간근로 시간과 무관하게 일정액(예: 30만원) 정기 지급되는지. 시간 비례 지급은 변동성이 있어 통상임금 산입 어려움.</li>\n<li><strong>② 모든 해당 근로자 일률 적용</strong> — 3교대 근무자 전원 동일 금액 지급 정황. 일률성 인정 영역.</li>\n<li><strong>③ 추가 조건 부재</strong> — 출근일수·성과 등 추가 조건 없이 매월 정기 지급되면 고정성 인정. 일정 출근일수 충족이 조건이라도 통상임금 산입 가능성 있음(대법원 2012다89399).</li>\n<li><strong>④ 노사합의 무효</strong> — 통상임금에 속하는 임금을 제외하기로 한 노사합의는 강행규정 위반으로 무효 정황.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'야간근로수당\' 명목이라도 실제 야간근로 시간 + 추가 1.5배 가산이 아닌 매월 고정 정액 지급 정황이라면 그 고정 부분은 통상임금 산입 영역으로 평가될 여지가 있습니다. 변동 야간수당(실시간 비례)은 별도 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 통상임금 산입 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 차액 산정 → 노동청 진정 → 민사 청구 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임금자료 보존 (즉시)</strong> — 최근 3년치 급여명세서·근로계약서·임금협정서·근태기록·교대근무표 보존.</li>\n<li><strong>2단계 — 고정성·일률성 입증 자료 정리 (1~2주)</strong> — 매월 동일 금액 지급 정황·실제 야간근로 시간과 비교한 변동 부재 정황.</li>\n<li><strong>3단계 — 차액 산정 (노무사 자문)</strong> — 야간수당 고정분을 통상임금에 산입한 연차수당·퇴직금·해고예고수당 차액 계산. 3년 누적분.</li>\n<li><strong>4단계 — 회사 차액 지급 요구 (내용증명)</strong> — 미응답 시 노동청 임금체불 진정(labor.moel.go.kr).</li>\n<li><strong>5단계 — 민사 임금청구 (소액심판·지급명령)</strong> — 3,000만원 이하면 소액심판, 청구액 무관 지급명령 가능. 연차수당·퇴직금 차액 합산 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 야근수당 신고 가능성, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">고정 야간수당 통상임금 산입 청구 가능성을 AI가 점검해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 임금자료 + 근태자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>최근 3년치 급여명세서</strong> — 야간수당 항목·금액·지급주기.</li>\n<li><strong>근로계약서·임금협정서</strong> — 야간수당 산정방식·고정 vs 변동 분류.</li>\n<li><strong>근태기록·교대근무표</strong> — 실제 야간근로 시간 vs 지급 금액 비교.</li>\n<li><strong>취업규칙</strong> — 야간근로수당 산정 명문 규정.</li>\n<li><strong>차액 산정표</strong> — 연차수당·퇴직금 차액 명세.</li>\n<li><strong>동료 급여명세서 정황</strong> — 일률성 입증 자료(공유 가능 범위 내).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 야간수당이 \'고정\'인지 \'변동\'인지 구분이 핵심. 실제 야간근로 시간이 매월 다른데도 동일 금액이 지급된 정황이 자료로 남아있으면 고정성 입증의 강력한 자료가 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"야간수당이라 통상임금 아니다" 주장 반박</strong> — 명목보다 실질. 매월 고정 정액 지급 + 실 야간근로 시간 무관 정황이라면 그 고정 부분은 통상임금 영역.</li>\n<li><strong>"임금협정서에 통상임금 제외 명시" 주장 반박</strong> — 강행규정 위반 합의는 무효(2012다89399). 명문 규정도 효력 부정 정황.</li>\n<li><strong>"신뢰의 원칙 위반" 주장 반박</strong> — 신의칙 위반 항변은 강행규정 위반 무효 주장에 원칙적으로 적용되지 않는 영역(2016다9261).</li>\n<li><strong>3년 시효 주의</strong> — 미지급 임금 3년 시효, 퇴직 시 14일 내 지급의무.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 임금체불·통상임금 무료 상담.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 임금체불 진정 트랙.</li>\n<li><strong>한국공인노무사회 02-6293-1500</strong> — 차액 산정 자문.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 통상임금의 정기성·일률성·고정성 4요건',
        summary:
          '대법원 2012다89399 사건(대법원 전원합의체, 2013.12.18 선고)에서 법원은 어떠한 임금이 통상임금에 속하는지는 정기성·일률성·고정성 요건을 충족해야 한다고 판시했습니다. 또한 근로기준법상 통상임금에 속하는 임금을 통상임금에서 제외하기로 하는 노사합의는 강행규정 위반으로 무효라고 보았습니다. 다만 신의칙 위반 사정이 있는 일부 사안은 예외적으로 청구 일부 제한 가능한 사례가 있습니다.',
        takeaway: '매월 고정 정액 야간수당이 정기성·일률성·고정성을 충족한다면 통상임금 산입 청구 가능성이 검토되는 영역이라, 급여명세서·근태기록을 시간순 정리하면 다툼 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '실제 야간근로 시간이 매월 달랐는데 금액은 동일했어요',
        answer:
          '<strong>고정성 입증의 강력한 정황 자료입니다.</strong> 명목상 야간수당이라도 실 야간근로 시간 무관 정액 지급이라면 통상임금 산입 영역으로 평가될 여지가 있는 사례가 있습니다.',
      },
      {
        question: '회사가 "신의칙 위반"이라며 못 준다고 합니다',
        answer:
          '<strong>강행규정 위반 무효 주장에 신의칙 항변은 원칙적으로 적용되지 않는 영역(2016다9261).</strong> 다만 일부 예외 사안이 있어, 노무사·법률구조공단 132 상담을 검토하는 것이 안전.',
      },
      {
        question: '연차수당·퇴직금만 차액 청구 가능한가요?',
        answer:
          '<strong>연장수당·야간수당·휴일수당·연차수당·해고예고수당·퇴직금 모두 통상임금 기준 산정 영역이라 차액 발생합니다.</strong> 통상임금 산입이 인정되면 모든 영역의 차액을 합산 청구할 수 있는 사례가 있습니다.',
      },
      {
        question: '재직 중 청구하면 불이익 있을까요?',
        answer:
          '<strong>청구권은 법적으로 보장되며 보복성 처분은 별도 다툼 영역입니다.</strong> 익명 진정·집단 진정 옵션도 있어, 동료들과 함께 진행하면 부담을 줄일 수 있는 영역.',
      },
      {
        question: '5인 미만 사업장도 통상임금 청구 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 통상임금·임금체불은 사업장 규모와 무관하게 적용되는 영역. 노동청 진정 + 민사 청구 모두 활용할 수 있습니다.',
      },
    ],
    cta: { text: '야근수당 신고 가능성, AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '야간수당 50% 가산 청구', href: '/guide/wage/wage-night-work-50-percent-extra' },
      { label: '식대·자가운전보조금 통상임금', href: '/guide/wage/wage-self-driving-allowance-ordinary-wage' },
      { label: '미지급 야간수당 청구', href: '/guide/wage/wage-night-shift-premium-claim' },
      { label: '임금체불 노동청 진정', href: '/guide/wage/wage-payslip-nondelivery-report' },
      { label: '연차수당 미지급 청구', href: '/guide/wage/wage-unused-annual-leave-claim' },
    ],
  },

  // ─── 3. unemployment / unemployment-working-hours-cut-30percent-quit ───
  {
    domain: 'unemployment',
    slug: 'unemployment-working-hours-cut-30percent-quit',
    keyword: '근로시간 30% 일방 단축 자진퇴사 정당이직',
    questionKeyword: '회사가 일방적으로 근로시간을 8시간에서 5시간으로 줄여서 자진퇴사했어요. 실업급여 가능한가요?',
    ctaKeyword: '근로시간 단축 자진퇴사 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '근로시간 30% 단축 자진퇴사 — 실업급여 정당이직 5가지 | 로앤가이드',
      description:
        '회사가 일방적으로 근로시간을 30% 이상 단축한 후 자진퇴사했다면 정당한 이직사유 5가지 입증 + 실업급여 수급자격 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3년 동안 1일 8시간·주 5일 근무했는데, 어느 날 회사가 \'경영 사정\'을 이유로 1일 5시간으로 근로시간을 일방 단축한다고 통보했어요. 임금이 30% 줄어드는 셈이라 결국 사직서를 냈는데, 자진퇴사라 실업급여 거절될까 걱정됩니다." 자발적 이직이라도 근로조건의 일방적 불이익 변경이 있었다면 정당한 이직사유로 평가되어 실업급여 수급자격이 인정되는 사례가 있어요. 고용보험법 시행규칙 [별표 2] 제1호 (가)목은 임금·근로시간이 채용 조건과 다르거나 채용 후 변경되어 변경 후 근로조건이 변경 전보다 낮아진 경우를 정당한 이직사유로 보고 있고, 서울행법 2014구합2270 판결도 일방적 부서이동·근로조건 불이익 변경을 정당한 이직사유로 인정한 사례가 있습니다.</p>',
    sections: [
      {
        title: 'Q. 근로시간 단축 자진퇴사 정당이직 5가지 입증 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 단축 비율·일방성·동의 부재·임금 영향·통보 시점 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 단축 비율 (통상 20% 이상)</strong> — 고용보험법 시행규칙 [별표 2] 제1호 (가)목은 임금·근로시간 변경이 변경 전보다 낮아진 경우를 정당한 이직사유로 봅니다. 일반적으로 20% 이상 감소가 기준 영역.</li>\n<li><strong>② 일방성 (동의 부재)</strong> — 회사가 본인 동의 없이 일방 통보·시행한 정황. 동의서·합의서 부재가 핵심.</li>\n<li><strong>③ 임금 직접 영향</strong> — 근로시간 단축이 임금 단축으로 직결됐는지. 시급제·일급제는 직접 영향, 월급제도 단축 비례 감소.</li>\n<li><strong>④ 통보·시행 시점</strong> — 통보 후 충분한 협의 기간 없이 시행됐는지. 1주 이내 즉시 시행은 불이익 변경 강한 정황.</li>\n<li><strong>⑤ 회사 측 사유의 합리성</strong> — 회사가 든 \'경영 사정\' 사유가 객관적·합리적인지. 명확한 자료 부재면 다툼 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자발적 이직이라도 정당한 이직사유 입증되면 수급자격 인정되는 영역입니다. 다만 고용센터 1차 판단에서 거절되면 실업급여 심사청구 → 고용보험심사위 트랙으로 다툴 수 있어요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 실업급여 신청 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 이직확인서 → 수급자격 인정 → 거절 시 심사청구 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단축 자료 보존 (퇴사 전·즉시)</strong> — 단축 통보 메일·카톡·취업규칙 변경안·동의서 미서명 정황·기존 근무표.</li>\n<li><strong>2단계 — 이직확인서 발급 요청 (퇴사 직후)</strong> — 사업장에 \'경영상 필요에 의한 근로조건 변경\' 코드 또는 정당사유 코드 기재 요구.</li>\n<li><strong>3단계 — 고용센터 수급자격 신청 (퇴사일 12개월 내)</strong> — 워크넷 등록 + 고용센터 방문. 정당이직 사유 자료 함께 제출.</li>\n<li><strong>4단계 — 심사청구 (거절 시 90일 이내)</strong> — 고용센터 거절 시 고용보험심사위원회 심사청구. 정당이직 사유 입증 추가.</li>\n<li><strong>5단계 — 행정소송 (재심사 후 90일 이내)</strong> — 심사위 결정 불복 시 행정법원 소송. 서울행법 2014구합2270 등 정당이직 인정 사례 참조.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">근로시간 단축 자진퇴사 정당이직 5가지 입증 포인트를 AI가 점검해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 단축 자료 + 자진퇴사 정당사유 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>근로시간 단축 통보 메일·카톡</strong> — 일방성·통보 시점 입증.</li>\n<li><strong>변경 전후 근무표·근로계약서</strong> — 단축 비율 산정 기준.</li>\n<li><strong>동의서 미서명 정황</strong> — 동의 부재 핵심 자료.</li>\n<li><strong>이직확인서</strong> — 사업장이 발급한 사유 코드.</li>\n<li><strong>최근 18개월 급여명세서</strong> — 피보험단위기간 + 임금 감소 입증.</li>\n<li><strong>회사 측 사유 자료</strong> — 경영 악화 자료 제출 정도.</li>\n<li><strong>사직서 사본</strong> — 사직 사유 명시 정도.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사직서에 단순 \'개인 사정\'이 아니라 \'근로시간 일방 단축에 따른 임금 감소\'를 명시하면 정당이직 입증 자료가 됩니다. 사직 시점에 자료를 확보하는 것이 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용센터 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"본인이 동의했다" 주장 반박</strong> — 동의서 부재 + 묵시적 시행은 동의 추정 어려운 영역. 단축 즉시 항의 메일·카톡이 남아있으면 동의 부재 강력 자료.</li>\n<li><strong>"단축 비율 미달" 주장 반박</strong> — 20% 미달이라도 임금·생활 영향이 크면 정당이직 다툼 가능성 있는 영역. 시행규칙은 일률 비율보다 실질 영향 검토.</li>\n<li><strong>"개인 사정 사직" 주장 반박</strong> — 사직서·이직확인서 사유 코드 정정 트랙. 사업장 무대응 시 노동청 진정 결합.</li>\n<li><strong>피보험단위기간 180일 충족</strong> — 정당이직이라도 18개월 중 피보험단위기간 180일 이상 필요(고용보험법 제40조).</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>고용노동부 고객상담센터 1350</strong> — 실업급여·정당이직 무료 상담.</li>\n<li><strong>고용보험 (ei.go.kr)</strong> — 수급자격·심사청구 안내.</li>\n<li><strong>대한법률구조공단 132</strong> — 행정소송 자격 요건 무료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일방적 부서이동·근로조건 불이익 변경의 정당한 이직사유 인정',
        summary:
          '서울행법 2014구합2270 사건(서울행정법원, 2014.07.03 선고)에서 법원은 인바운드 상담원으로 입사한 근로자가 멀티부서 이동 지시를 받고 퇴사한 후 고용보험 수급자격 인정을 신청했다가 불인정 처분을 받은 사안에서, 그 부서 이동이 근로조건의 실질적 불이익 변경에 해당해 고용보험법 시행규칙 [별표 2] 제1호 (가)목의 정당한 이직사유에 해당한다고 판시했습니다. 행정청의 불인정 처분은 위법하다고 본 사례입니다.',
        takeaway: '회사의 일방적 근로조건 변경(부서 이동·근로시간 단축·임금 감소 등)이 정당한 이직사유로 인정된 사례가 있어, 자료를 시간순 정리하면 자진퇴사라도 실업급여 수급 트랙이 열리는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '근로시간 단축이 20% 미달이면 정당이직 안 되나요?',
        answer:
          '<strong>20% 미달이라도 정당이직 다툼 가능성 있는 영역입니다.</strong> 시행규칙은 일률 비율보다 실질 영향을 검토하는 사례가 있어, 임금 감소액·생활 영향·합리적 사유 부재 결합 입증으로 정당이직 트랙이 열리는 영역.',
      },
      {
        question: '회사가 이직확인서에 \'개인 사정\'으로 코드를 입력했어요',
        answer:
          '<strong>이직확인서 코드 정정 요구가 가능합니다.</strong> 사업장에 정정 요청 → 무대응 시 고용센터에 정정 신청 → 그래도 안 되면 노동청 진정 트랙. 자료가 충실하면 코드 정정 가능한 영역.',
      },
      {
        question: '심사청구는 어디에 어떻게 하나요?',
        answer:
          '<strong>고용보험심사위원회(www.ei.go.kr)에 90일 이내 청구합니다.</strong> 고용센터 처분 통지를 받은 날부터 90일. 전자신청·우편 모두 가능, 무료. 심사위 거절 시 재심사위원회 → 행정소송 트랙.',
      },
      {
        question: '단축 통보 후 일주일 만에 사직했어요. 너무 빨랐나요?',
        answer:
          '<strong>즉시 사직도 정당이직 인정 사례가 있습니다.</strong> 다만 회사와 협의·시정 요구 정황이 자료로 남아있으면 더 안전한 영역. 사직 직전 \'단축 철회 요구\' 메일·카톡이 핵심 자료.',
      },
      {
        question: '5인 미만 사업장도 적용되나요?',
        answer:
          '<strong>실업급여는 사업장 규모 무관 적용됩니다.</strong> 고용보험 가입 + 피보험단위기간 180일 이상이면 5인 미만이라도 수급자격 신청 가능한 영역.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '근로시간 축소 자진퇴사', href: '/guide/unemployment/unemployment-working-hours-reduction-voluntary' },
      { label: '임금 10% 삭감 자진퇴사', href: '/guide/unemployment/unemployment-wage-cut-10percent-quit' },
      { label: '근로조건 위반 자진퇴사', href: '/guide/unemployment/unemployment-contract-breach-quit' },
      { label: '실업급여 거절 심사청구', href: '/guide/unemployment/unemployment-benefit-rejection-appeal-procedure' },
      { label: '실업급여 자격 종합 점검', href: '/guide/unemployment/unemployment-benefit-requirements' },
    ],
  },
];
