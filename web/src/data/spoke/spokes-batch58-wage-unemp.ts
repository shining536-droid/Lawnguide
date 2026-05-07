import { SpokePage } from '../spoke-pages';

// batch58 wage 2 + unemployment 1 = 3개
//
// 고유 존재 이유:
// 1. 이 페이지는 매월 정기적으로 받던 정기상여금이 통상임금에서 빠진 채 연장·야간·휴일근로수당이 산정돼 차액이 누적된 근로자가 통상임금 산입 청구 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 근로계약·서약서에 위약금·손해배상 명목으로 임금에서 일정 금액을 공제·예정한 조항으로 임금이 깎인 근로자가 위약예정 금지 + 임금 전액지급 원칙 다툼 트랙을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 임금이 30% 이상 미지급된 상태에서 자진퇴사한 근로자가 정당한 이직사유 입증 + 실업급여 수급자격 신청 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch58WageUnemp: SpokePage[] = [
  // ─── 1. wage / wage-regular-bonus-ordinary-wage-claim ───
  {
    domain: 'wage',
    slug: 'wage-regular-bonus-ordinary-wage-claim',
    keyword: '정기상여금 통상임금 산입 청구',
    questionKeyword: '매월 또는 격월로 받던 정기상여금이 통상임금에서 빠져서 연장수당·퇴직금이 적게 나왔어요. 청구 가능한가요?',
    ctaKeyword: '정기상여금 통상임금 청구',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '정기상여금 통상임금 산입 청구 5단계 | 로앤가이드',
      description:
        '매월·격월로 정기 지급된 상여금이 통상임금에서 빠져 연장·야간·휴일수당과 퇴직금이 적게 산정됐다면 통상임금 산입 청구 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"매월 25일에 본봉과 함께 상여금 50만원이 들어왔어요. 12개월 내내 같은 금액이라 \'고정\'인데, 연장수당·퇴직금 계산할 때는 빠지더라고요. 5년 근속이면 차액이 수백만원 단위일 텐데 청구 가능한지 막막합니다." 정기상여금이 일정 주기로 일정 금액·일정 비율로 지급된다면 정기성·일률성·고정성 요건을 충족해 통상임금 산입이 검토되는 영역입니다(대법원 2012다89399 전합). 통상임금이 늘어나면 연장·야간·휴일근로수당, 연차수당, 해고예고수당, 퇴직금 산정 기초가 모두 상향되고, 미지급 임금은 3년 시효(근로기준법 제49조) 내 청구할 수 있어요. 노사합의로 통상임금에서 제외해도 강행규정 위반으로 무효 정황입니다.</p>',
    sections: [
      {
        title: 'Q. 정기상여금 통상임금 산입 4가지 점검 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 지급주기·산정기준·재직조건·노사합의 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 지급주기 정기성</strong> — 매월·격월·분기 등 일정 주기로 지급되는지. 1개월 초과 주기여도 정기성 인정 영역(2012다89399).</li>\n<li><strong>② 산정기준 일률성</strong> — 모든 근로자 또는 일정 직급·근속 기준 충족자에게 동일 산식으로 지급되는지. 본봉의 일정 비율(예: 본봉의 100%) 또는 정액 지급은 일률성 인정.</li>\n<li><strong>③ 재직조건 고정성</strong> — 지급일 기준 재직 중일 것을 조건으로 한 상여금은 과거 \'재직자 조건부\'로 고정성 부정된 사례가 있었으나, 이후 판례는 사정마다 달리 판단되는 영역. 근속 1년 미만 일할 지급 정황이라면 고정성 인정 가능성.</li>\n<li><strong>④ 노사합의 무효</strong> — 통상임금에 속하는 임금을 제외하기로 한 노사합의는 강행규정 위반으로 무효 정황(2012다89399).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 명목이 \'상여금\'이라도 매월·격월 정기 지급 + 재직 외 추가 조건 부재 정황이라면 통상임금 산입 영역으로 평가될 여지가 있습니다. 회사가 \'성과급\'으로 분류해도 실질이 정기·일률·고정이라면 다툼 가능 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 통상임금 산입 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 차액 산정 → 노동청 진정 → 민사 청구 순서로 진행됩니다(고용노동부 임금체불 절차 기준).</strong></p>\n<ol>\n<li><strong>1단계 — 임금자료 보존 (즉시)</strong> — 최근 3년치 급여명세서·근로계약서·취업규칙·임금협정서·상여금 지급규정 보존. 상여금 항목명·금액·주기 정리.</li>\n<li><strong>2단계 — 통상임금 산입 차액 산정 (1~2주)</strong> — 상여금을 통상임금에 포함시켜 연장·야간·휴일수당, 연차수당, 퇴직금 차액 계산. 노무사·법률구조공단 132 자문 검토.</li>\n<li><strong>3단계 — 회사에 차액 지급 요구 (내용증명)</strong> — 통상임금 산입 차액 + 미지급 수당·퇴직금 차액을 합산해 청구. 회신 기한 14일 명시.</li>\n<li><strong>4단계 — 노동청 임금체불 진정 (labor.moel.go.kr)</strong> — 회사 미지급 시 사업장 관할 고용노동지청 진정. 출석조사 → 시정명령 트랙.</li>\n<li><strong>5단계 — 민사 임금청구 (소액심판·지급명령·본안)</strong> — 3,000만원 이하 소액심판, 청구액 무관 지급명령. 동료 다수 사안은 집단소송 트랙도 검토 가능 영역.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">정기상여금 통상임금 산입 청구 5단계를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 임금자료 + 산정자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>최근 3년치 급여명세서</strong> — 상여금 항목명·금액·지급주기 확인.</li>\n<li><strong>근로계약서·임금협정서</strong> — 상여금 산정방식·재직조건 명문 규정.</li>\n<li><strong>취업규칙·상여금 지급규정</strong> — 일률성·고정성 입증 자료.</li>\n<li><strong>출퇴근·근태기록</strong> — 연장·야간·휴일근로 시간 산정 자료.</li>\n<li><strong>차액 산정표</strong> — 상여금 산입 시 연장수당·연차수당·퇴직금 차액 명세.</li>\n<li><strong>퇴직금 산정 명세서 (퇴직자)</strong> — 퇴직 시점 통상임금 기준 차액 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상여금이 \'성과 연동\'이라고 명시돼 있어도 실제 매번 동일 금액이 지급된 정황이 자료로 남아있으면 \'성과급\' 명목과 무관하게 통상임금 산입 다툼 자료가 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"성과급이라 통상임금 아니다" 주장 반박</strong> — 명목보다 실질. 매번 동일 금액·일률 지급 정황이면 통상임금 영역으로 평가될 여지가 있습니다(2012다89399).</li>\n<li><strong>"노사합의로 제외했다" 주장 반박</strong> — 강행규정 위반 합의는 무효 정황. 임금협정서 명문 규정도 효력 부정 영역.</li>\n<li><strong>"재직자 조건부라 고정성 없다" 주장 반박</strong> — 일할 지급 정황(중도퇴직자에게 일할 지급)이 있다면 재직자 조건부가 아닌 영역. 회사 사규·실제 지급 관행 확인.</li>\n<li><strong>3년 시효 주의</strong> — 미지급 임금 3년 시효(근로기준법 제49조). 시효 경과분은 청구 어려운 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 임금체불·통상임금 무료 상담.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 임금체불 진정 트랙.</li>\n<li><strong>한국공인노무사회 02-6293-1500</strong> — 통상임금 차액 산정 노무사 자문.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정기상여금의 통상임금 산입 + 노사합의 무효',
        summary:
          '대법원 2012다89399 전원합의체 판결(대법원, 2013.12.18 선고)에서 법원은 임금이 통상임금에 속하는지 여부는 그 명칭이나 지급주기의 장단(長短) 등 형식적 기준이 아니라 정기적·일률적·고정적으로 지급되는 임금인지 실질로 판단해야 한다고 판시했습니다. 또한 통상임금에 속하는 임금을 제외하기로 하는 노사합의는 근로기준법 강행규정 위반으로 무효라고 보았습니다. 정기상여금이 정기성·일률성·고정성을 갖추면 통상임금에 산입된다는 점을 명확히 한 사례입니다.',
        takeaway: '매월·격월 정기 지급된 상여금이 정기성·일률성·고정성을 충족한다면 통상임금 산입 청구 트랙이 열리는 사례가 있어, 급여명세서·상여금 지급규정·취업규칙을 시간순 정리하면 차액 청구가 검토되는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '격월(2개월마다) 지급되는 상여금도 통상임금인가요?',
        answer:
          '<strong>지급주기가 1개월을 초과해도 정기성 인정 영역입니다(2012다89399).</strong> 매분기·반기 지급되는 상여금도 일정 주기 + 일정 산식이면 정기성·일률성 충족 가능성 있는 영역.',
      },
      {
        question: '상여금이 본봉의 600%로 정해져 있는데 산입 가능한가요?',
        answer:
          '<strong>본봉 기준 일정 비율 지급은 일률성·고정성 인정의 강한 정황입니다.</strong> 모든 근로자에게 동일 비율로 지급되면 통상임금 산입 영역으로 평가될 여지가 있는 사례가 있습니다.',
      },
      {
        question: '회사가 "신의칙 위반"이라며 차액을 못 준다고 합니다',
        answer:
          '<strong>강행규정 위반 무효 주장에 신의칙 항변은 원칙적으로 적용되지 않는 영역(2016다9261).</strong> 다만 일부 예외 사안이 있어, 노무사·법률구조공단 132 상담을 검토하는 것이 안전.',
      },
      {
        question: '퇴직 후에도 상여금 통상임금 차액 청구 가능한가요?',
        answer:
          '<strong>3년 시효 내라면 가능합니다.</strong> 퇴직금이 통상임금 기준으로 산정되므로 퇴직금 차액 청구 트랙이 열려 있고, 미지급 연장·연차수당 차액도 합산 청구할 수 있는 영역.',
      },
      {
        question: '5인 미만 사업장도 정기상여금 통상임금 산입 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 통상임금·임금체불은 사업장 규모 무관 적용 영역. 다만 5인 미만 사업장은 연장·야간·휴일수당 가산 의무 자체가 없어, 퇴직금·연차수당 차액 위주로 청구 트랙 검토.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '통상임금 정기상여 산입', href: '/guide/wage/wage-ordinary-wage-bonus-included' },
      { label: '식대·자가운전보조금 통상임금', href: '/guide/wage/wage-self-driving-allowance-ordinary-wage' },
      { label: '고정 야간수당 통상임금 산입', href: '/guide/wage/wage-fixed-night-shift-allowance-claim' },
      { label: '연차수당 미지급 청구', href: '/guide/wage/wage-unused-annual-leave-claim' },
      { label: '임금체불 노동청 진정', href: '/guide/wage/wage-payslip-nondelivery-report' },
    ],
  },

  // ─── 2. wage / wage-penalty-deduction-prohibition-claim ───
  {
    domain: 'wage',
    slug: 'wage-penalty-deduction-prohibition-claim',
    keyword: '위약예정 임금 공제 금지',
    questionKeyword: '근로계약서·서약서에 \'중도퇴사 시 손해배상 500만원\' 또는 \'교육비 위약금\'이 적혀 있어 임금에서 공제됐어요. 돌려받을 수 있나요?',
    ctaKeyword: '위약예정 임금공제 환수 청구',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '위약예정 임금 공제 환수 청구 5단계 | 로앤가이드',
      description:
        '근로계약·서약서의 위약금·손해배상 예정 조항으로 임금에서 일방 공제됐다면 위약예정 금지 + 임금 전액지급 원칙 다툼 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"입사 전 \'2년 의무근무, 중도퇴사 시 손해배상 500만원\' 서약서에 사인했어요. 1년 8개월 만에 퇴사하니 회사가 마지막 달 임금에서 500만원을 공제하고 잔액만 지급했고, 퇴직금도 미지급 상태입니다." 근로기준법 제20조는 \'사용자는 근로계약 불이행에 대한 위약금 또는 손해배상액을 예정하는 계약을 체결하지 못한다\'고 규정하고, 같은 법 제43조 제1항은 임금을 통화로 직접 근로자에게 그 전액을 지급해야 한다는 \'전액지급 원칙\'을 정합니다. 위약예정 조항에 따른 일방 공제는 위 두 강행규정 위반으로 무효 정황이라, 공제분 환수 청구 트랙이 열리는 영역입니다(대법원 2007다90760).</p>',
    sections: [
      {
        title: 'Q. 위약예정·임금공제 4가지 다툼 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 위약예정 해당성·공제 동의·실손해 입증·임금성 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 위약예정 해당성 (근로기준법 제20조)</strong> — 근로계약 불이행 시 일정 금액을 손해배상·위약금으로 미리 정한 조항은 무효 정황. 단순 \'실비 환수\' 정산이 아닌 \'정액 약정\'은 위약예정 영역.</li>\n<li><strong>② 임금에서 일방 공제 (제43조 제1항)</strong> — 임금은 통화로 직접 전액 지급 원칙. 본인 자유로운 의사 동의 없는 일방 공제는 무효 정황.</li>\n<li><strong>③ 실손해 입증 부재</strong> — 회사가 실제 손해액을 입증하지 못한 채 일정 금액을 공제했다면 부당이득 반환 청구 트랙 검토.</li>\n<li><strong>④ 교육비·연수비 환수 약정</strong> — 의무근무 위반 시 교육비 환수 약정 자체는 일부 유효 정황(대법원 2002다48399), 다만 \'근로 강제\' 효과가 있는 정액 위약금은 무효 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'서약서에 사인했으니 효력 있다\'는 회사 주장은 강행규정 위반 합의의 효력 부정 원리상 받아들이기 어려운 영역입니다. 본인 자유의사 동의가 없는 일방 공제도 임금 전액지급 원칙 위반 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 위약예정 공제 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 환수 요구 → 노동청 진정 → 민사 청구 순서로 진행됩니다(고용노동부 임금체불 절차 기준).</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 근로계약서·서약서·교육비 약정서·급여명세서·공제 통보 메일·카톡 보존.</li>\n<li><strong>2단계 — 공제 명목·금액 정리 (1주)</strong> — 위약금 명목 vs 실비 환수 구분, 공제 금액·시점·근거 조항 정리.</li>\n<li><strong>3단계 — 회사에 환수 요구 (내용증명)</strong> — 위약예정 무효 + 임금 전액지급 원칙 위반 → 공제분 + 미지급 퇴직금 환수 요구. 회신 기한 14일.</li>\n<li><strong>4단계 — 노동청 임금체불 진정</strong> — 미응답 시 사업장 관할 고용노동지청 진정(labor.moel.go.kr). 임금체불 + 위약예정 위반 동시 신고 가능 영역.</li>\n<li><strong>5단계 — 민사 부당이득 반환 청구</strong> — 노동청 트랙이 한계인 사안은 민사. 3,000만원 이하 소액심판, 지급명령 활용. 청구 시효 10년(부당이득).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">위약예정 공제 환수 청구 5단계를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 약정자료 + 공제자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>근로계약서·서약서·각서</strong> — 위약금·손해배상 예정 조항 원문.</li>\n<li><strong>교육비·연수비 약정서</strong> — 의무근무·환수 약정 명문 규정.</li>\n<li><strong>최근 6개월치 급여명세서</strong> — 공제 항목·금액·시점 확인.</li>\n<li><strong>공제 통보 메일·카톡</strong> — 회사의 공제 의사·근거 진술.</li>\n<li><strong>퇴직금 산정 명세서</strong> — 미지급분 입증.</li>\n<li><strong>실손해 입증자료 부재 정황</strong> — 회사가 실제 손해액 입증 못한 정황.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 서약서·각서가 입사 시 \'관행\'으로 일괄 받은 정황이면 자유의사 동의로 보기 어려운 영역. 동기 입사자들도 동일 서약서 사인한 정황이 자료로 남아있으면 강행규정 위반 입증의 보조 자료가 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"서약서에 사인했으니 유효하다" 주장 반박</strong> — 강행규정(제20조) 위반 약정은 사인 여부와 무관하게 무효 정황.</li>\n<li><strong>"실제 회사 손해가 발생했다" 주장 반박</strong> — 실손해 입증·구체적 산정 자료 부재 시 추정만으로 공제 어려운 영역. 입증책임은 사용자.</li>\n<li><strong>"교육비 환수 명목이라 가능하다" 주장 일부 한계</strong> — 의무근무 위반 시 교육비 환수 약정은 일부 유효 사례가 있으나(2002다48399), 정액 위약금 형태는 무효 영역.</li>\n<li><strong>임금 전액지급 위반 별도 신고</strong> — 본인 동의 없는 공제는 그 자체로 근로기준법 제43조 위반. 노동청 진정 + 형사 처벌 트랙 결합 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 위약예정·임금공제 무료 상담.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 임금체불 + 전액지급 위반 진정.</li>\n<li><strong>한국공인노무사회 02-6293-1500</strong> — 사안 검토 노무사 자문.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위약예정 약정의 무효 + 임금 공제 효력',
        summary:
          '대법원 2007다90760 사건(대법원, 2008.10.23 선고)에서 법원은 사용자와 근로자가 근속하는 동안 또는 일정 기간 근속 후 발생하는 퇴직금 청구권을 근로자가 미리 포기하는 약정은 강행규정인 근로기준법(2005년 개정 전 구법) 제34조 제3항 본문 단서 적용 외 시점에서는 위약예정 금지에 해당해 무효라고 판시했습니다. 사용자가 근로자에게 일정 금액을 미리 지급하기로 했더라도 근로 대가로서의 효력이 없다고 보았습니다. 임금·퇴직금 청구권을 미리 포기·공제하는 약정의 효력을 부정한 사례입니다.',
        takeaway: '서약서·각서로 임금·퇴직금에서 일정 금액을 위약금·손해배상으로 미리 정해 공제하는 약정은 강행규정 위반으로 무효 정황이라 환수 청구 트랙이 열리는 사례가 있어, 약정서·급여명세서·공제 통보 자료를 정리하면 다툼이 검토되는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '연수비 1,000만원 환수 약정도 무효인가요?',
        answer:
          '<strong>연수비·교육비 실비 환수 약정 자체는 일부 유효 사례가 있습니다(2002다48399).</strong> 다만 실제 연수비 지출액을 초과하는 \'정액 위약금\' 부분, 또는 의무근무 기간이 지나치게 긴 경우는 무효 정황 영역.',
      },
      {
        question: '서약서에 사인 안 하면 채용 안 한다고 했어요',
        answer:
          '<strong>강박·자유의사 부재 정황으로 무효 다툼 가능성 있는 영역입니다.</strong> 채용 조건으로 일괄 받은 서약서는 자유의사 동의 보기 어려운 사례가 있어, 입사 시 정황 자료(메일·카톡)가 남아있으면 효과적.',
      },
      {
        question: '회사가 \'동의했다\'며 공제 동의서까지 사인 받았어요',
        answer:
          '<strong>본인 자유의사 동의여야 하고, 임금 전액지급 원칙 자체를 우회할 수 없는 영역입니다.</strong> 동의서가 있어도 강행규정 위반 공제는 무효 정황이라, 환수 청구 트랙이 닫히지 않는 영역.',
      },
      {
        question: '이미 퇴직 후 1년이 지났는데 청구 가능한가요?',
        answer:
          '<strong>임금채권은 3년 시효, 부당이득은 10년 시효 영역입니다.</strong> 임금체불 진정은 3년 내, 민사 부당이득 반환은 10년 내 청구 트랙이 열려 있어 시점에 따라 트랙 선택 가능.',
      },
      {
        question: '노동청 진정과 민사 청구를 동시에 해도 되나요?',
        answer:
          '<strong>가능합니다.</strong> 노동청은 형사 처벌 + 시정 트랙, 민사는 환수 청구 트랙으로 목적이 다른 영역. 다만 노동청 합의 시 민사 청구 포기 조항 주의 필요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 노동청 진정', href: '/guide/wage/wage-payslip-nondelivery-report' },
      { label: '미지급 임금 시효 1년 청구', href: '/guide/wage/wage-unpaid-one-year-statute-claim' },
      { label: '퇴직 후 미지급 수당 청구', href: '/guide/wage/wage-resigned-unpaid-allowance-claim' },
      { label: '연차수당 미지급 청구', href: '/guide/wage/wage-unused-annual-leave-claim' },
      { label: '회사 도산 시 임금 보장', href: '/guide/wage/wage-unpaid-bankrupt-deposit' },
    ],
  },

  // ─── 3. unemployment / unemployment-wage-unpaid-30percent-quit ───
  {
    domain: 'unemployment',
    slug: 'unemployment-wage-unpaid-30percent-quit',
    keyword: '임금체불 30% 자진퇴사 정당이직',
    questionKeyword: '최근 3개월 임금이 30% 이상 미지급된 상태에서 자진퇴사했어요. 실업급여 받을 수 있나요?',
    ctaKeyword: '임금체불 자진퇴사 실업급여',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '임금체불 30% 자진퇴사 — 실업급여 정당이직 5가지 | 로앤가이드',
      description:
        '최근 3개월 임금이 30% 이상 미지급된 상태에서 자진퇴사했다면 정당한 이직사유 5가지 입증 + 실업급여 수급자격 신청 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3개월 연속으로 월급이 200만원에서 130만원만 들어왔어요. 사장님은 \'곧 처리한다\'는 말만 반복했고, 결국 사직서를 냈습니다. 자진퇴사라 실업급여 받을 수 있을지 막막한데, 미지급 임금까지 받을 길이 있는지 정리하고 싶어요." 자발적 이직이라도 임금이 정당한 사유 없이 지급되지 않거나 지연 지급된 사실이 있다면 정당한 이직사유로 평가되어 실업급여 수급자격이 인정되는 영역입니다(고용보험법 시행규칙 [별표 2] 제1호 (가)목, 다목). 고용보험심사위원회는 \'이직 전 1년 이내 2개월 이상 임금 30% 이상 미지급\' 정황을 정당이직 인정 기준으로 보는 사례가 있어요. 자진퇴사 실업급여 + 임금체불 진정 두 트랙을 동시에 진행할 수 있는 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 임금체불 자진퇴사 정당이직 5가지 입증 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 미지급 비율·기간·반복성·통보·시정 요구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 미지급 비율 (통상 30% 이상)</strong> — 최근 임금의 30% 이상이 정해진 지급일에 미지급되거나 지연된 정황. 시행규칙 [별표 2] 제1호 다목.</li>\n<li><strong>② 미지급 기간 (이직 전 1년 이내 2개월 이상)</strong> — 이직 전 1년 동안 누적 2개월 이상 미지급·지연 정황. 연속이 아니어도 누적 인정 영역.</li>\n<li><strong>③ 반복성</strong> — 1회성 지연이 아닌 반복적·구조적 미지급 정황. 입증력 강화 자료.</li>\n<li><strong>④ 회사에 시정 요구 정황</strong> — 사직 전 회사에 미지급 임금 지급을 요구한 메일·카톡·내용증명 정황. 시정 요구 자료가 자진퇴사 정당사유 입증 핵심.</li>\n<li><strong>⑤ 회사 측 정당사유 부재</strong> — 회사가 사용자 부도·파산 등 정당사유 없이 미지급한 정황. 정당사유는 사용자 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자진퇴사라도 임금체불 정당이직 사유가 인정되면 수급자격 인정되는 영역입니다. 고용센터 1차 거절돼도 심사청구 → 재심사 → 행정소송 트랙이 열려 있고, 동시에 임금체불 노동청 진정 트랙도 진행 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 실업급여 + 임금체불 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 노동청 진정 → 이직확인서 → 수급자격 신청 → 심사청구 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임금자료 보존 (퇴사 전·즉시)</strong> — 최근 12개월치 급여명세서·근로계약서·통장 입금내역·시정 요구 메일·카톡 보존.</li>\n<li><strong>2단계 — 노동청 임금체불 진정 (퇴사 후 즉시)</strong> — 사업장 관할 고용노동지청 진정(labor.moel.go.kr). 미지급 임금 + 퇴직금 동시 신고. 정당이직 입증 보조 자료 확보.</li>\n<li><strong>3단계 — 이직확인서 발급 + 사유 코드 정정</strong> — 사업장에 \'임금체불에 따른 이직\' 코드 기재 요구. 무대응 시 고용센터에 정정 신청.</li>\n<li><strong>4단계 — 고용센터 수급자격 신청 (퇴사일 12개월 내)</strong> — 워크넷 등록 + 고용센터 방문. 임금체불 정당이직 자료 함께 제출. 피보험단위기간 180일 이상 충족.</li>\n<li><strong>5단계 — 거절 시 심사청구 (90일 이내)</strong> — 고용보험심사위원회(www.ei.go.kr) 심사청구. 재심사·행정소송 트랙도 열려 있음.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">임금체불 자진퇴사 정당이직 5가지 입증 포인트를 AI가 점검해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 임금체불 자료 + 정당이직 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>최근 12개월치 급여명세서</strong> — 미지급 비율·기간 산정.</li>\n<li><strong>통장 입금내역</strong> — 실제 입금액 vs 약정액 차이 입증.</li>\n<li><strong>근로계약서</strong> — 약정 임금·지급일 명시.</li>\n<li><strong>시정 요구 메일·카톡</strong> — 회사에 미지급분 지급 요구한 정황.</li>\n<li><strong>이직확인서</strong> — 사업장 사유 코드.</li>\n<li><strong>임금체불 진정 접수증·확인서</strong> — 노동청 진정 정황 (정당이직 보조).</li>\n<li><strong>사직서 사본</strong> — 사직 사유에 \'임금 미지급\' 명시 정도.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사직서에 \'개인 사정\'이 아니라 \'임금 30% 이상 미지급에 따른 부득이한 사직\'을 명시하면 정당이직 입증 자료가 됩니다. 사직 즉시 임금체불 진정을 접수하면 정당이직 입증력이 크게 강화되는 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용센터 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"미지급 비율 30% 미달" 주장 반박</strong> — 시행규칙은 \'전부 또는 일부\' 미지급 정황도 정당이직 검토 대상. 비율 미달이라도 반복성 + 시정 요구 부재 결합 입증 가능 영역.</li>\n<li><strong>"개인 사정 사직" 주장 반박</strong> — 사직서·이직확인서 사유 코드 정정 트랙. 임금체불 진정 접수증이 있으면 정당이직 입증 강력.</li>\n<li><strong>"이직 전 1년 이전이라 기간 미달" 주장 반박</strong> — 사업주 부도·도산 정황 결합 시 별도 정당이직 사유(시행규칙 다른 호) 검토 가능 영역.</li>\n<li><strong>피보험단위기간 180일 충족 필요</strong> — 정당이직이라도 18개월 중 피보험단위기간 180일 이상 필요(고용보험법 제40조).</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>고용노동부 고객상담센터 1350</strong> — 실업급여·정당이직 무료 상담.</li>\n<li><strong>고용보험 (ei.go.kr)</strong> — 수급자격·심사청구 안내.</li>\n<li><strong>대한법률구조공단 132</strong> — 임금체불 진정·행정소송 무료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '결정례 — 임금체불에 따른 자진퇴사의 정당한 이직사유 인정',
        summary:
          '고용보험심사위원회 2020실업 제238호 사건(고용보험심사위원회 결정례)은 사업장에서 임금이 30% 이상 미지급되거나 지연 지급된 사정으로 더 이상 근무할 수 없어 자진퇴사한 사안에서, 고용보험법 시행규칙 [별표 2] 제1호 다목에 해당하는 정당한 이직사유로 보아 수급자격을 인정하는 취지로 판단한 사례입니다. 동위원회는 이직 전 1년 이내 2개월 이상 임금이 일정 비율 미지급된 정황을 정당이직 인정 기준으로 보는 사례가 누적돼 있습니다.',
        takeaway: '임금체불이 일정 기간·일정 비율 누적된 상태에서 자진퇴사한 경우 정당한 이직사유로 평가되어 실업급여 수급자격이 인정되는 사례가 있어, 급여명세서·통장 내역·시정 요구 자료를 시간순 정리하면 수급 트랙이 열리는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '임금이 30% 미달로 미지급됐는데도 정당이직 가능한가요?',
        answer:
          '<strong>30% 미달이라도 반복성·기간 누적이 있으면 정당이직 다툼 가능성 있는 영역입니다.</strong> 시행규칙은 \'전부 또는 일부\' 미지급도 검토 대상으로 보아, 시정 요구 자료 + 임금체불 진정 결합 입증으로 트랙이 열리는 사례가 있습니다.',
      },
      {
        question: '회사가 \'곧 준다\'며 미루다가 사직했어요',
        answer:
          '<strong>지연 지급 정황도 미지급에 준해 평가되는 영역입니다.</strong> 카톡·메일에 \'곧 준다\'는 진술 자료 + 실제 지급 지연 통장 내역이 결합되면 정당이직 입증 자료가 됩니다.',
      },
      {
        question: '임금체불 진정과 실업급여 신청을 동시에 해도 되나요?',
        answer:
          '<strong>가능하고 권장되는 영역입니다.</strong> 노동청 임금체불 진정 접수증이 정당이직 입증의 강력한 보조 자료가 되어, 두 트랙 동시 진행이 효과적인 사례가 있습니다.',
      },
      {
        question: '심사청구는 어디에 어떻게 하나요?',
        answer:
          '<strong>고용보험심사위원회(www.ei.go.kr)에 90일 이내 청구합니다.</strong> 고용센터 처분 통지일부터 90일. 전자신청·우편 모두 가능, 무료. 심사위 거절 시 재심사위원회 → 행정소송 트랙.',
      },
      {
        question: '5인 미만 사업장도 정당이직 적용되나요?',
        answer:
          '<strong>실업급여는 사업장 규모 무관 적용됩니다.</strong> 고용보험 가입 + 피보험단위기간 180일 이상이면 5인 미만 사업장이라도 임금체불 정당이직 사유로 수급자격 신청 가능한 영역.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '임금체불 2개월 자진퇴사', href: '/guide/unemployment/unemployment-wage-unpaid-2months-quit' },
      { label: '근로시간 30% 단축 자진퇴사', href: '/guide/unemployment/unemployment-working-hours-cut-30percent-quit' },
      { label: '실업급여 거절 심사청구', href: '/guide/unemployment/unemployment-benefit-rejection-appeal-procedure' },
      { label: '실업급여 자격 종합 점검', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '이직확인서 사유 코드 정정', href: '/guide/unemployment/unemployment-separation-code-recommendation-to-voluntary-correction' },
    ],
  },
];
