import { SpokePage } from '../spoke-pages';

// batch59 wage 2 + retirement 2 + unemployment 1 = 5개
//
// 고유 존재 이유:
// 1. 이 페이지는 노선수당·고정 OT수당 명목으로 야간·휴일근로수당이 합산된 포괄임금제 사업장에서 실제 야간·휴일 근로시간이 산정 기준치를 초과해 차액이 누적된 근로자가 포괄임금 약정 효력 + 차액 청구 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 사업주의 일방적 대기발령·휴직명령으로 임금이 70%·기본급으로 줄어든 상태에서 정년·퇴직을 맞은 근로자가 평균임금 산정 예외 + 통상의 생활임금 환원 + 퇴직금 차액 트랙을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 연봉계약서에 '연봉에 퇴직금 포함' 조항으로 퇴직 시 별도 퇴직금이 미지급된 근로자가 분할약정 무효 + 사용자 부당이득 상계 한도 + 별도 청구 트랙을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 등기이사·임원으로 등재됐다가 비등기·일반직으로 강등돼 퇴사한 사람이 등기 시점부터 종속성 회복 시점까지 실질 근로자성 입증 + 퇴직금 청구 트랙을 정리하도록 돕는 페이지다.
// 5. 이 페이지는 자영업자 임의가입자로 고용보험을 유지하다 폐업한 사람이 자영업자 실업급여 수급요건 + 매출감소·적자 입증 + 일반 실업급여 자격 분기 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch59WageUnempRetire: SpokePage[] = [
  // ─── 1. wage / wage-comprehensive-night-holiday-overtime-shortfall ───
  {
    domain: 'wage',
    slug: 'wage-comprehensive-night-holiday-overtime-shortfall',
    keyword: '포괄임금제 야간·휴일근로 차액',
    questionKeyword: '근로계약서에 \'연장·야간·휴일수당 모두 포함된 포괄임금\'이라 적혀 있는데, 실제 야간·휴일 근로시간이 훨씬 많아요. 차액 청구 가능한가요?',
    ctaKeyword: '포괄임금 야간 휴일 차액',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '포괄임금제 야간·휴일근로 차액 청구 5단계 | 로앤가이드',
      description:
        '포괄임금제 사업장에서 실제 야간·휴일 근로시간이 협정 기준치를 초과해 수당 차액이 발생했다면 약정 효력 + 차액 청구 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"근로계약서에 \'노선수당 80만원, 연장·야간·휴일수당 모두 포함\'이라고 적혀 있어요. 실제로는 매주 토·일요일 격주로 출근하고 야간 운행도 월 60시간 넘는데, 매월 정해진 80만원만 들어옵니다. 입사 3년 차에 동료가 \'포괄임금이라 다툴 수 없다\'고 하지만, 실제 시간을 따져보면 차액이 큰 것 같아요." 포괄임금제는 근로의 형태·내용 등 근로시간 산정이 어려운 사정이 있을 때만 예외적으로 유효하고, 산정이 가능하다면 통상임금·각종 가산수당이 분리 지급돼야 한다는 영역입니다(대법원 2017다238004). 협정상 야간·휴일 시간을 초과한 부분에 대해서는 포괄임금 약정만으로 면책되지 않고 차액 청구 트랙이 열려 있어요. 임금채권 시효 3년(근로기준법 제49조) 내라면 미지급분 환수가 검토되는 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 포괄임금제 야간·휴일근로 차액 4가지 점검 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 약정 유효성·시간 산정 가능성·협정 시간 초과·근로자 불이익 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 약정 유효성 (대법원 2017다238004)</strong> — 포괄임금제는 근로시간 산정이 어렵고 + 근로자가 불이익하지 않으며 + 제반 사정에 비추어 정당한 경우에만 유효 영역. 단순 \'포함 표기\'로 자동 유효 아님.</li>\n<li><strong>② 시간 산정 가능성</strong> — 출퇴근 기록·운행일지·근태표·CCTV 등으로 실제 근로시간 산정이 가능한 사업장이라면 포괄임금 약정 자체가 무효 정황으로 평가될 영역.</li>\n<li><strong>③ 협정 시간 초과</strong> — 임금협정·취업규칙에 \'노선수당 = 월 연장 OOO시간 + 야간 OOO시간 포함\'으로 정해진 경우 그 시간을 초과한 부분은 포괄임금 약정 적용 외 영역(2017다238004 판시 취지).</li>\n<li><strong>④ 근로자 불이익 비교</strong> — 포괄임금으로 받은 금액 < 실제 근로시간을 통상임금 + 각 가산수당으로 산정한 금액이면 차액 청구 트랙. 입증책임은 근로자(시간) + 사용자(약정 정당성).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'포괄임금이라 일률 적용\'은 근로자의 실제 시간을 무시한 단정 영역입니다. 운행일지·태코그래프·운수회사 GPS 기록 등 객관 자료가 있으면 협정 시간 초과분 차액 청구 트랙이 살아있는 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 포괄임금 차액 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 시간 산정 → 차액 계산 → 노동청 진정 → 민사 청구 순서로 진행됩니다(고용노동부 임금체불 절차 기준).</strong></p>\n<ol>\n<li><strong>1단계 — 시간 자료 보존 (즉시)</strong> — 최근 3년치 출퇴근 기록·근태표·운행일지·태코그래프·근무표·CCTV 보존. 임금협정·취업규칙·근로계약서 사본 확보.</li>\n<li><strong>2단계 — 실제 근로시간 산정 (1~2주)</strong> — 월별 연장·야간·휴일근로 시간 합산. 협정에 명시된 \'포함 시간\'과 비교. 노무사·법률구조공단 132 자문 검토 가능 영역.</li>\n<li><strong>3단계 — 차액 산정 + 회사에 지급 요구 (내용증명)</strong> — 통상임금 × 1.5(연장)·2.0(휴일+8h초과) 등 가산율로 재계산해 차액 명세 제시. 회신 기한 14일.</li>\n<li><strong>4단계 — 노동청 임금체불 진정</strong> — 회사 미응답 시 사업장 관할 고용노동지청 진정(labor.moel.go.kr). 근로감독관 조사 단계 약 25일 처리.</li>\n<li><strong>5단계 — 민사 청구 (소액심판·지급명령·본안)</strong> — 노동청 시정 한계 사안은 민사. 3,000만원 이하 소액심판, 청구액 무관 지급명령. 동료 다수 사안은 집단 청구 트랙도 검토 가능 영역.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">포괄임금 야간·휴일 차액 청구 5단계를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 시간 자료 + 약정 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>최근 3년치 출퇴근 기록·근태표</strong> — 일자별 시작·종료 시각.</li>\n<li><strong>운행일지·태코그래프·GPS 기록 (운수업)</strong> — 객관 시간 입증 핵심.</li>\n<li><strong>근로계약서·임금협정서</strong> — 포괄임금 약정 원문, 협정 시간 명시.</li>\n<li><strong>취업규칙·노선수당 지급규정</strong> — 약정 정당성 다툼 자료.</li>\n<li><strong>최근 3년치 급여명세서</strong> — 실제 지급액·항목 분리.</li>\n<li><strong>차액 산정표</strong> — 통상임금·연장·야간·휴일 가산 재계산 명세.</li>\n<li><strong>동료 진술서·CCTV 보존 요청서</strong> — 근로시간 산정 가능성 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 운수업·경비·24시간 교대 근로처럼 \'시간 산정이 어려운 사업\'으로 분류돼도 회사가 운행일지·근태표를 운영하고 있다면 시간 산정이 가능한 사업으로 평가될 영역. 회사 자료가 거꾸로 약정 무효 정황의 결정적 자료가 되는 사례가 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"포괄임금 약정에 사인했으니 차액 없다" 주장 반박</strong> — 서명만으로 약정 자동 유효 아닌 영역. 시간 산정 가능성·근로자 불이익 비교가 효력 판단 기준(2017다238004).</li>\n<li><strong>"운수업이라 산정 어렵다" 주장 반박</strong> — 회사가 운행일지·태코그래프를 운영하고 있다면 산정 가능 사업 영역. 회사 자료가 산정 가능성을 입증하는 정황.</li>\n<li><strong>"노조 단체협약으로 포괄임금 정했다" 주장 반박</strong> — 단체협약이라도 강행규정 회피 효력 부정 영역. 협정 시간 초과분은 별도 청구 트랙.</li>\n<li><strong>3년 시효 주의</strong> — 임금채권 3년 시효(근로기준법 제49조). 시효 경과분은 청구 어려운 영역이라 자료 보존·진정 시기가 결과 좌우.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 임금체불·포괄임금 무료 상담.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 임금체불 진정 트랙.</li>\n<li><strong>고용노동부 고객상담센터 1350</strong> — 근로시간·가산수당 일반 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금제 약정 효력과 협정 시간 초과 차액',
        summary:
          '대법원 2017다238004 사건(대법원, 2022.02.11 선고)에서 법원은 버스운송사업을 영위하는 회사가 노동조합과 체결한 임금협정에서 \'노선수당은 연장·야간·휴일근로수당을 포괄한 수당이며 실제 근로시간과의 차이에 대하여는 노사 간 이의를 제기치 않기로 한다\'고 정한 사안에서, 포괄임금제에 의한 임금 지급계약 또는 단체협약이 유효하기 위한 요건과 포괄임금제에 관한 약정이 성립하였는지 판단하는 기준을 제시했습니다. 형식적 \'포괄임금\' 표기만으로 약정 성립이 인정되는 것은 아니고, 협정상 정해진 시간을 초과한 부분의 가산수당까지 일률 면책되는 것은 아니라는 점이 정리된 사례입니다.',
        takeaway: '포괄임금 약정이 있어도 시간 산정이 가능하거나 협정 시간을 초과한 근로 부분은 별도 차액 청구 트랙이 열리는 사례가 있어, 출퇴근 기록·운행일지·임금협정서를 시간순 정리하면 차액 환수가 검토되는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '포괄임금제는 무조건 유효 아닌가요?',
        answer:
          '<strong>아닙니다. 시간 산정 가능성·근로자 불이익 비교를 거쳐 유효성이 판단되는 영역입니다(2017다238004).</strong> 회사가 출퇴근 기록·근태표를 운영하고 있다면 시간 산정 가능 사업으로 평가될 가능성 있는 영역.',
      },
      {
        question: '운행일지·태코그래프는 회사가 안 준다고 합니다',
        answer:
          '<strong>노동청 진정 단계에서 근로감독관이 자료 제출 요구 가능한 영역입니다.</strong> 회사가 거부하면 형사처벌 자료(자료 미제출)도 결합되어 절차상 압박이 커지는 사례.',
      },
      {
        question: '협정 시간이 명시 안 된 \'고정 OT 80만원\' 형태도 다툼 가능한가요?',
        answer:
          '<strong>가능 영역입니다.</strong> 포함 시간 명시 없이 \'고정 80만원\'이면 어디까지 가산수당이 면책되는지 불명확. 실제 시간을 통상임금 × 가산율로 환산해 비교 청구 트랙 검토.',
      },
      {
        question: '5인 미만 사업장에서도 차액 청구 가능한가요?',
        answer:
          '<strong>5인 미만은 연장·야간·휴일 가산수당 자체가 면제 영역입니다(근로기준법 제11조 단서).</strong> 다만 야간(22~06시) 가산은 일부 적용 영역이 있고 시간외 임금(통상임금) 자체는 청구 가능. 약정 무효 다툼 트랙은 살아 있음.',
      },
      {
        question: '소송하면 회사가 보복 인사할까 걱정돼요',
        answer:
          '<strong>임금체불 진정·소송을 이유로 한 불이익 처분은 부당해고·차별 다툼 영역입니다.</strong> 노동위원회 부당해고 구제신청·노동청 진정 결합 트랙이 열려 있어, 보복 정황이 확인되면 별도 구제 청구 가능한 사례.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '포괄임금제 인정 요건 4가지', href: '/guide/wage/wage-comprehensive-legal-test' },
      { label: '포괄임금 의제근로시간 분쟁', href: '/guide/wage/wage-pogual-deemed-working-hours' },
      { label: '고정 OT vs 실제 OT 차액', href: '/guide/wage/wage-pogual-fixed-vs-ot-difference' },
      { label: '야간·연장 정확한 계산', href: '/guide/wage/wage-night-overtime-exact-calculation' },
      { label: '휴일근로 150% 산정', href: '/guide/wage/wage-holiday-work-150-percent-calculation' },
    ],
  },

  // ─── 2. wage / wage-standby-order-average-wage-restoration ───
  {
    domain: 'wage',
    slug: 'wage-standby-order-average-wage-restoration',
    keyword: '대기발령 평균임금 환원 퇴직금',
    questionKeyword: '회사가 일방적으로 대기발령을 내려 6개월간 임금이 70%로 줄었어요. 그 상태로 정년퇴직했는데 평균임금·퇴직금이 적게 산정됐습니다. 다툴 수 있나요?',
    ctaKeyword: '대기발령 평균임금 환원 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '대기발령 평균임금 4가지 환원 트랙 — 퇴직금 차액 | 로앤가이드',
      description:
        '회사 일방 대기발령·휴업명령으로 임금이 줄어든 상태에서 퇴직해 평균임금이 낮게 산정됐다면 산정 예외 + 통상의 생활임금 환원 4가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"33년 근속 후 정년 6개월 전 회사가 \'사업 재편\'을 이유로 대기발령을 냈어요. 그 6개월은 기본급 70%만 받았고, 시간외수당·직책수당 모두 빠졌습니다. 정년 도래로 퇴직했는데 회사가 \'대기발령 기간 임금 평균\'으로 평균임금을 산정해 퇴직금이 1,000만원 가까이 줄었어요. 받아들여야 하나요?" 평균임금이 통상의 경우보다 현저하게 적거나 많을 때는 통상의 생활임금을 사실대로 반영하는 방식으로 산정해야 한다는 영역입니다(대법원 2001다12669, 근로기준법 제2조 제2항·시행령 제2조). 사용자 일방의 대기발령·휴업명령으로 임금이 비정상적으로 줄어든 상태로 퇴직금 산정 사유가 발생했다면 산정 예외 + 환원 트랙이 검토되는 사례입니다.</p>',
    sections: [
      {
        title: 'Q. 대기발령 평균임금 4가지 환원 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 발령 적법성·평균임금 산정 예외·통상의 생활임금 환원·퇴직금 차액 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 대기발령 적법성</strong> — 대기발령은 인사권 범주이지만 정당한 이유 + 사회통념상 상당성이 있어야 적법 영역. 사용자 자의·보복 정황이면 무효 정황으로 다툴 여지.</li>\n<li><strong>② 평균임금 산정 예외 (대법원 2001다12669)</strong> — 평균임금이 통상보다 현저하게 적거나 많은 경우, 시행령 산정 예외 사유에 준해 통상의 생활임금을 반영하는 방식으로 산정해야 하는 영역.</li>\n<li><strong>③ 통상의 생활임금 환원</strong> — 대기발령 직전 3개월 또는 1년 평균 임금을 기준으로 환원 산정 가능 영역. 시간외·직책·정기 상여 포함 환원 자료가 핵심.</li>\n<li><strong>④ 퇴직금 차액 청구</strong> — 환원 평균임금 × 30일 × 근속연수로 재산정해 지급된 퇴직금과 차액 청구 트랙. 시효 퇴직일로부터 3년.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회사가 \'규정대로 산정했다\'고 해도 평균임금이 비정상적으로 낮아진 상태라면 산정 예외 적용 트랙이 살아있는 영역. 대기발령 직전 임금 자료가 보존돼 있으면 통상의 생활임금 환원 청구 자료로 효과적입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 평균임금 환원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 환원 평균임금 산정 → 퇴직금 차액 청구 → 노동청 진정 → 민사 청구 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (퇴직 전·즉시)</strong> — 대기발령 통보서·인사명령·근로계약서·취업규칙·최근 1년치 급여명세서·시간외 근태표 보존.</li>\n<li><strong>2단계 — 환원 평균임금 산정 (1~2주)</strong> — 대기발령 직전 3개월 또는 1년 평균 임금 기준 환원 계산. 시간외수당·직책수당·정기 상여 포함 자료. 노무사 자문 검토 가능.</li>\n<li><strong>3단계 — 회사에 퇴직금 차액 청구 (내용증명)</strong> — 평균임금 산정 예외 + 통상의 생활임금 환원 + 퇴직금 차액 명세 제시. 회신 기한 14일.</li>\n<li><strong>4단계 — 노동청 임금체불 진정</strong> — 미응답 시 사업장 관할 고용노동지청 진정(labor.moel.go.kr). 평균임금 산정 다툼은 근로감독관 조사 + 임금근로자권리실현 트랙.</li>\n<li><strong>5단계 — 민사 청구 또는 지급명령</strong> — 노동청 트랙 한계 사안은 민사. 청구액 무관 지급명령, 3,000만원 이하 소액심판. 대기발령 무효 다툼은 별도 본안 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">대기발령 평균임금 환원 4가지 트랙을 AI가 점검해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 발령 자료 + 임금 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>대기발령·휴업명령 통보서·인사명령</strong> — 발령 시점·사유·기간.</li>\n<li><strong>대기발령 직전 1년치 급여명세서</strong> — 환원 평균임금 산정 기초.</li>\n<li><strong>대기발령 기간 급여명세서</strong> — 회사가 적용한 평균임금 확인.</li>\n<li><strong>근로계약서·취업규칙·임금협정서</strong> — 임금 항목 정의.</li>\n<li><strong>퇴직금 산정 명세서</strong> — 회사 산정 평균임금·차액 확인 핵심.</li>\n<li><strong>업무 일지·근태표</strong> — 대기발령 중 사실상 근로 정황 (있으면 추가 자료).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대기발령이 정년·퇴직 직전에 내려졌다면 \'퇴직금 산정 회피\' 정황으로 평가될 여지 영역. 발령 사유서·인사위원회 회의록을 함께 확보하면 사용자 의도 입증의 보조 자료가 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"규정대로 평균임금 산정했다" 주장 반박</strong> — 평균임금이 비정상적으로 적은 경우 시행령 산정 예외 적용 영역(2001다12669). 규정 적용만으로 끝나지 않음.</li>\n<li><strong>"대기발령은 인사권" 주장 반박</strong> — 인사권 범주이지만 정당한 이유·상당성 요건 영역. 정년 직전·퇴직 직전 발령은 사용자 의도 다툼 자료.</li>\n<li><strong>"본인이 대기발령 사인했다" 주장 반박</strong> — 인사명령 수령 자체는 동의로 평가되지 않는 영역. 발령 무효·평균임금 환원 다툼 트랙 별도 영역.</li>\n<li><strong>3년 시효 + 퇴직 시점 주의</strong> — 퇴직금 차액 청구권은 퇴직일로부터 3년 시효. 시효 경과 사안은 사용자 신의칙 항변과 결합해 개별 검토 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 평균임금·퇴직금 무료 상담.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 임금체불 진정 트랙.</li>\n<li><strong>한국공인노무사회 02-6293-1500</strong> — 평균임금 환원 산정 노무사 자문.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대기발령 기간 평균임금 산정 예외',
        summary:
          '대법원 2001다12669 사건(대법원, 2003.07.25 선고)에서 법원은 평균임금 산정의 예외를 규정한 구 근로기준법시행령 제2조 제1항이 제한적 열거규정이고, 정년퇴직 전의 대기발령 기간의 일수와 그 기간 중에 지급받은 임금액이 평균임금의 산정기초에 포함된다고 판시했습니다. 다만 대기발령 기간과 그 기간 중의 임금을 포함시킴으로써 평균임금이 통상의 경우보다 현저하게 적거나 많을 경우에는 특수하고 우연한 사정으로 보아 통상의 생활임금을 사실대로 반영하는 방식으로 평균임금을 산정해야 한다고 정리했습니다.',
        takeaway: '회사 일방의 대기발령·휴업명령으로 평균임금이 비정상적으로 낮아진 상태로 퇴직금 산정 사유가 발생한 경우 통상의 생활임금 환원 산정 트랙이 열리는 사례가 있어, 대기발령 직전 임금 자료·발령 통보서를 정리하면 퇴직금 차액 청구가 검토되는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '대기발령 자체가 무효라고 본 사례는 없나요?',
        answer:
          '<strong>정당한 이유·상당성 요건 미충족 시 무효 다툼 가능 영역입니다.</strong> 해고 회피·퇴직금 회피 의도 정황이 인정되면 부당해고·부당전직 구제신청 트랙(노동위원회) 별도 영역.',
      },
      {
        question: '휴업수당 70% 받은 기간도 환원 대상인가요?',
        answer:
          '<strong>사용자 귀책 휴업수당 70% 기간도 평균임금 산정 예외 검토 영역입니다.</strong> 휴업이 통상보다 평균임금을 현저히 낮춘 정황이라면 통상의 생활임금 환원 트랙 적용 가능 사례.',
      },
      {
        question: '회사가 대기발령 사유서를 안 줍니다',
        answer:
          '<strong>인사명령은 사유 명시 의무가 있는 영역(취업규칙·단체협약 일반).</strong> 사유 미고지 정황은 무효 다툼 자료. 노동위원회 부당전직 구제신청에서 사유서 미발급은 사용자 불리한 정황.',
      },
      {
        question: '시효가 지났는데 환원 청구 가능한가요?',
        answer:
          '<strong>퇴직금은 3년, 부당이득은 10년 시효 영역입니다.</strong> 시효 경과 사안도 사용자가 시효 항변을 신의칙 위반으로 다툴 여지가 있는 사례가 있어 개별 검토 필요.',
      },
      {
        question: '재취업·실업급여와 동시 진행 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 퇴직금 차액 청구는 임금채권 영역, 실업급여는 고용보험 영역으로 별개 트랙. 병행 진행 시 자료가 중복 활용되어 효율적인 사례.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '평균임금 산정 분쟁', href: '/guide/retirement/retirement-average-wage-dispute' },
      { label: '평균임금 상여 연차수당 다툼', href: '/guide/retirement/retirement-average-wage-bonus-dispute' },
      { label: '퇴직 전 대기 기간 영향', href: '/guide/retirement/retirement-pre-retirement-standby-period-impact' },
      { label: '임금체불 노동청 진정', href: '/guide/wage/wage-payslip-nondelivery-report' },
      { label: '퇴직금 14일 지급 규칙', href: '/guide/retirement/retirement-pay-14day-rule-detail' },
    ],
  },

  // ─── 3. retirement / retirement-annual-salary-includes-severance-invalid ───
  {
    domain: 'retirement',
    slug: 'retirement-annual-salary-includes-severance-invalid',
    keyword: '연봉 퇴직금 포함 약정 무효',
    questionKeyword: '연봉계약서에 \'연봉 4,800만원에 퇴직금 포함\'으로 적혀 있어 퇴직 시 별도 퇴직금이 안 나왔어요. 다시 받을 수 있나요?',
    ctaKeyword: '연봉 퇴직금 포함 환수',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '연봉 퇴직금 포함 무효 — 별도 청구 5단계 | 로앤가이드',
      description:
        '연봉계약서에 \'연봉에 퇴직금 포함\'으로 적혀 별도 퇴직금이 미지급됐다면 분할약정 무효 + 사용자 부당이득 상계 한도 + 별도 청구 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"연봉계약서에 \'연봉 4,800만원, 매월 400만원 지급, 위 연봉에는 퇴직금이 포함됨\'으로 되어 있어요. 4년 근무 후 퇴직하니 회사가 \'이미 매월 분할 지급했으니 별도 퇴직금 없다\'고 합니다. 매월 명세서엔 \'퇴직금 명목 30만원\'이 따로 표기돼 있긴 한데, 정상적으로 퇴직금을 다시 받을 수 있는지 막막합니다." 사용자와 근로자가 매월 임금과 함께 일정 금원을 퇴직금으로 미리 지급하기로 한 \'퇴직금 분할 약정\'은 강행규정 회피 정황으로 원칙적 무효 영역입니다(대법원 2010다95147, 2007다90760). 무효 약정에 따라 지급된 \'퇴직금 명목\' 금원은 부당이득에 해당해 사용자가 별도 반환 청구 가능한 영역이지만, 그 상계 범위는 다툼 여지가 있는 사례입니다.</p>',
    sections: [
      {
        title: 'Q. 연봉 퇴직금 포함 약정 4가지 점검 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 분할약정 효력·실질 임금 vs 퇴직금·부당이득 범위·상계 한도 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 분할약정 효력 (대법원 2010다95147)</strong> — 매월 임금과 함께 퇴직금 일정 금원을 미리 지급하기로 한 약정은 근로자퇴직급여 보장법 강행규정 회피 정황으로 원칙적 무효 영역.</li>\n<li><strong>② 실질 임금 vs 퇴직금 구분</strong> — 명세서에 \'퇴직금 명목\'으로 분리 기재해도 실질이 임금이라면 퇴직금 지급 효력 부정 영역. 임금 정한 것이면서 퇴직금 형식만 취한 사안.</li>\n<li><strong>③ 부당이득 범위</strong> — 무효 약정으로 지급된 \'퇴직금 명목\' 금원은 사용자 부당이득반환채권으로 보는 영역. 다만 이미 임금에 포함된 것이라면 부당이득 부정 정황도 있어 사실관계 정리 핵심.</li>\n<li><strong>④ 상계 한도</strong> — 사용자 부당이득반환채권 → 근로자 퇴직금채권 상계 영역. 다만 임금채권 압류금지 영역과 결합해 상계 범위 제한 다툼 가능 사례.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'연봉 = 12개월 분할 + 퇴직금 별도\'가 원칙. \'연봉 = 13개월분(퇴직금 포함)\' 형식의 약정은 무효 정황이고, 회사가 매월 \'퇴직금 명목\'으로 분리 지급한 금원도 부당이득 영역에서 다툴 여지가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 연봉 퇴직금 별도 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 별도 퇴직금 산정 → 회사에 청구 → 노동청 진정 → 민사 청구 순서로 진행됩니다(고용노동부 임금체불 절차 기준).</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 연봉계약서·근로계약서·취업규칙·최근 4년치 급여명세서·연봉협상 메일 보존. \'퇴직금 명목\' 표기 여부 확인.</li>\n<li><strong>2단계 — 정상 퇴직금 산정 (1주)</strong> — 평균임금(직전 3개월) × 30일 × 근속연수 기준 정상 퇴직금 산정. 회사가 분할 지급한 \'퇴직금 명목\' 합계와 비교.</li>\n<li><strong>3단계 — 회사에 별도 퇴직금 청구 (내용증명)</strong> — 분할약정 무효 + 별도 퇴직금 청구 + 부당이득 상계 다툼 명시. 회신 기한 14일.</li>\n<li><strong>4단계 — 노동청 임금체불 진정</strong> — 미응답 시 사업장 관할 고용노동지청 진정(labor.moel.go.kr). 퇴직금 미지급은 형사처벌 결합 트랙(근로자퇴직급여 보장법 제44조).</li>\n<li><strong>5단계 — 민사 청구 (소액심판·지급명령·본안)</strong> — 청구액 무관 지급명령, 3,000만원 이하 소액심판. 사용자 부당이득반환 반소·상계 다툼 시 본안 트랙.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">연봉 퇴직금 포함 무효 + 별도 청구 5단계를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 약정 자료 + 임금 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>연봉계약서·근로계약서</strong> — \'연봉에 퇴직금 포함\' 조항 원문.</li>\n<li><strong>최근 4년치 급여명세서</strong> — \'퇴직금 명목\' 분리 기재 여부·금액 확인.</li>\n<li><strong>연봉협상 메일·서면 통보서</strong> — 약정 형성 정황.</li>\n<li><strong>취업규칙·퇴직금 지급규정</strong> — 사업장 표준 산정 방식.</li>\n<li><strong>퇴직금 산정 명세서 (회사 발급분)</strong> — 회사 측 입장 확인.</li>\n<li><strong>정상 퇴직금 산정표</strong> — 평균임금 × 30일 × 근속연수 재계산.</li>\n<li><strong>퇴직 시 정산서·이체내역</strong> — 회사가 지급한 항목·금액.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \'연봉에 퇴직금 포함\' 형식은 외국계 기업·스타트업·연봉제 전환 사업장에서 자주 보이는 영역. 강행규정 회피 정황으로 평가될 여지가 큰 사례가 있어, 본인 사안만의 단발 다툼이 아닐 가능성이 큽니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"연봉계약서에 사인했으니 효력 있다" 주장 반박</strong> — 강행규정(근로자퇴직급여 보장법 제8조) 회피 정황 약정은 사인 여부와 무관하게 무효 정황(2010다95147).</li>\n<li><strong>"매월 퇴직금 명목으로 분리 지급했다" 주장 반박</strong> — 명목과 실질 구분 영역. 실질이 임금 정한 것이라면 퇴직금 지급 효력 없음. 매월 \'퇴직금 명목\' 표기는 형식에 불과.</li>\n<li><strong>"이미 지급한 퇴직금 명목 환수해야 한다" 부분 인정 + 상계 한도 다툼</strong> — 부당이득반환채권 인정 여지 있으나, 임금채권 압류금지·신의칙·계산 방법 다툼 트랙으로 상계 범위 제한 가능 영역.</li>\n<li><strong>3년 시효 주의</strong> — 퇴직금 청구권은 3년 시효. 시효 경과분은 청구 어려운 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 퇴직금·임금체불 무료 상담.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 퇴직금 미지급 진정 트랙.</li>\n<li><strong>한국공인노무사회 02-6293-1500</strong> — 분할약정 무효·상계 한도 자문.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 연봉계약서 \'퇴직금 포함\' 분할약정의 무효',
        summary:
          '대법원 2010다95147 사건(대법원, 2012.10.11 선고)에서 법원은 사용자와 근로자가 매월 지급하는 월급이나 매일 지급하는 일당과 함께 퇴직금으로 일정한 금원을 미리 지급하기로 한 \'퇴직금 분할 약정\'의 효력을 원칙적 무효로 보고, 무효인 약정에 따라 이미 지급한 퇴직금 명목의 금원이 부당이득에 해당하는지 여부와 사용자와 근로자 사이에 실질적인 퇴직금 분할 약정이 존재하는지 판단하는 기준을 제시했습니다. 연봉계약서에 연봉금액에 퇴직금을 포함시키고 매월 지급되는 퇴직금 명목 금액을 특정 기재한 사안에서, 그 분할약정은 그 실질이 임금을 정한 것이면서 퇴직금 지급을 회피하기 위해 형식만 취한 것이라고 정리한 사례입니다.',
        takeaway: '연봉에 퇴직금이 포함된 형태의 분할약정은 강행규정 회피 정황으로 원칙적 무효라 별도 퇴직금 청구 트랙이 열리는 사례가 있어, 연봉계약서·급여명세서·정산서를 정리하면 차액 청구가 검토되는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '연봉협상 시 본인이 \'퇴직금 포함\'에 동의했는데도 무효인가요?',
        answer:
          '<strong>강행규정 회피 정황 약정은 동의 여부와 무관하게 무효 정황입니다(2010다95147).</strong> 다만 사용자가 \'이미 지급한 퇴직금 명목\' 금원의 부당이득반환을 주장할 여지가 있어 상계 한도 다툼 트랙 검토.',
      },
      {
        question: '회사가 \'반환 안 하면 추가 퇴직금 없다\'고 합니다',
        answer:
          '<strong>강제 상계는 임금 전액지급 원칙(근로기준법 제43조) 위반 영역입니다.</strong> 사용자가 부당이득반환채권을 가지더라도 일방 상계는 별도 다툼 트랙. 노동청 진정 + 민사 동시 진행 검토.</strong>',
      },
      {
        question: '5년 근무했는데 시효 3년 지난 부분은 어떻게 되나요?',
        answer:
          '<strong>퇴직금 청구권 시효는 퇴직일로부터 3년입니다.</strong> 5년 근무했어도 퇴직금 자체 청구 시효는 퇴직 시점 기준이라 일반적으로는 시효 내. 다만 분할 지급분 부당이득은 10년 시효 영역.',
      },
      {
        question: '5인 미만 사업장도 별도 퇴직금 청구 가능한가요?',
        answer:
          '<strong>2010년 이후 전면 적용 영역입니다.</strong> 5인 미만 사업장도 1년 이상 근무 시 퇴직금 지급 의무. 분할약정 무효 + 별도 청구 트랙 동일하게 적용 가능.',
      },
      {
        question: '연봉제가 아니라 일급제도 같은 다툼 가능한가요?',
        answer:
          '<strong>가능 영역입니다.</strong> 일당과 함께 \'퇴직금 명목\' 일정 금원을 매일 미리 지급한 약정도 동일하게 무효 정황. 건설일용·운수일용 등 사례가 있습니다.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 월할 분할 무효', href: '/guide/retirement/retirement-monthly-split-invalid' },
      { label: '퇴직금 분할 부분 합의 무효', href: '/guide/retirement/retirement-partial-payment-agreement-void-5reasons' },
      { label: '퇴직금 포함·제외 항목', href: '/guide/retirement/retirement-pay-included-excluded-items' },
      { label: '퇴직금 14일 지급 규칙', href: '/guide/retirement/retirement-pay-14day-rule-detail' },
      { label: '퇴직금 노동청 vs 민사', href: '/guide/retirement/retirement-pay-labor-report-vs-civil-claim' },
    ],
  },

  // ─── 4. retirement / retirement-non-registered-officer-employee-status ───
  {
    domain: 'retirement',
    slug: 'retirement-non-registered-officer-employee-status',
    keyword: '비등기 임원 근로자성 퇴직금',
    questionKeyword: '등기이사로 등재됐다가 임기 후 비등기 일반직으로 강등돼 퇴사했어요. 등기 시점부터 퇴직금 받을 수 있나요?',
    ctaKeyword: '비등기 임원 근로자성 퇴직금',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '비등기 임원 근로자성 — 퇴직금 4가지 입증 트랙 | 로앤가이드',
      description:
        '등기이사·임원으로 등재됐다가 비등기·일반직으로 강등돼 퇴사한 경우 등기 시점부터의 실질 근로자성 + 퇴직금 청구 4가지 입증 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"입사 12년차에 \'등기이사\'로 등재됐어요. 직함만 이사이고 실제로는 사장님 지시 아래 매일 출퇴근, 영업·관리 업무 그대로였습니다. 임기 3년 끝나고 비등기 \'전무\'로 직함만 바뀌어 2년 더 일하다 퇴사했는데, 회사는 \'등기이사 시절은 위임관계라 퇴직금 대상 아니다\'고 합니다. 실제 종속 근로였는데 그 시기 퇴직금 못 받나요?" 회사의 이사 등 임원이 근로기준법상 근로자에 해당하는지는 \'직함\'이 아니라 \'실질적으로 임금을 목적으로 종속적인 관계에서 사용자에게 근로를 제공\'했는지 실질로 판단되는 영역입니다(대법원 2010다57459, 2013다215225). 등기 시점이라도 종속적 근로 정황이 입증되면 그 기간 포함 퇴직금 청구 트랙이 살아있는 영역이에요.</p>',
    sections: [
      {
        title: 'Q. 비등기·등기 임원 근로자성 4가지 입증 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 직무 권한·종속성·보수 성격·계속근로 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 직무 권한 (대법원 2002다64681)</strong> — 등기이사라도 상법상 이사로서의 직무 권한(이사회 의결권·대표권 등)을 실질적으로 행사하지 않고 형식적·명목적 직함만 부여받은 정황이라면 \'위임\'이 아닌 \'근로\' 영역.</li>\n<li><strong>② 종속성 (대법원 2010다57459)</strong> — 사용자의 지휘·감독 아래 일정한 근로 제공, 출퇴근·휴가·복무규정 적용, 업무 지시 받는 정황이 있으면 종속성 인정. 실질적 사용자 = 대표이사·오너 정황 자료가 핵심.</li>\n<li><strong>③ 보수 성격</strong> — 보수가 \'근로 대가\' 성격(매월 정액·임금성)이면 근로자성 정황. 이익배당·성과급 비중이 큰 임원 보수와 구분되는 영역.</li>\n<li><strong>④ 계속근로 + 직위 변동</strong> — 일반직 → 등기 → 비등기로 직위만 바뀌고 업무 동질성·근로조건 동질성이 유지된 정황이면 계속근로기간 통산 영역. 등기 시점 퇴직금 정산이 없었다면 통산 트랙.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회사는 \'등기이사 = 위임 = 근로기준법 적용 외\'를 일률 주장하는 사례가 많지만, 실질이 종속 근로라면 등기 시점도 퇴직금 산정 기간에 포함될 영역. 이사회 의사록·이사 보수 결의·실제 직무 자료가 결과 좌우.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 비등기 임원 퇴직금 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 근로자성 입증 → 회사에 청구 → 노동청 진정 → 민사 청구 순서로 진행됩니다(고용노동부 임금체불 절차 기준).</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 등기·법인등기부등본·정관·이사회 의사록·임명장·근로계약서(있으면)·급여명세서·근태기록·업무지시 메일·카톡 보존.</li>\n<li><strong>2단계 — 근로자성 입증 정리 (2~3주)</strong> — 종속성 + 직무 권한 비행사 + 보수 성격 + 계속근로 4축으로 자료 매핑. 이사회 결의 부재(보수 미결의)·취업규칙 적용 정황은 강력 자료.</li>\n<li><strong>3단계 — 회사에 퇴직금 청구 (내용증명)</strong> — 등기 시점 포함 계속근로기간 + 정상 퇴직금 산정 명세 제시. 회신 기한 14일.</li>\n<li><strong>4단계 — 노동청 임금체불 진정</strong> — 미응답 시 사업장 관할 고용노동지청 진정(labor.moel.go.kr). 임원 사안은 근로감독관 조사가 본격적이라 자료 충실도가 중요한 영역.</li>\n<li><strong>5단계 — 민사 청구 (지급명령·본안)</strong> — 노동청 트랙은 근로자성 다툼 사안에서 한계가 있어 민사 본안 트랙이 일반적. 변호사 선임 검토 영역.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">비등기 임원 근로자성 4가지 입증 트랙을 AI가 점검해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 직무 자료 + 종속성 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>법인등기부등본·임명장·해임 등기</strong> — 등기 임원 시점 확인.</li>\n<li><strong>정관·이사회 의사록·이사 보수 결의서</strong> — 의결권 행사 여부, 보수 결의 부재 정황.</li>\n<li><strong>근로계약서(있으면)·취업규칙·복무규정 적용 정황</strong> — 일반 직원과 동일 적용 자료.</li>\n<li><strong>최근 3년 + 등기 시점 급여명세서</strong> — 보수 성격(매월 정액 vs 성과 연동).</li>\n<li><strong>출퇴근 기록·근태표·휴가 신청서</strong> — 종속성 입증.</li>\n<li><strong>업무 지시 메일·카톡·결재 라인</strong> — 사용자 지휘·감독 정황.</li>\n<li><strong>4대보험 가입 내역 (건강·연금·고용·산재)</strong> — 근로자 신분 입증.</li>\n<li><strong>퇴직금 산정 명세서·정산서 (있으면)</strong> — 회사 적용 기간 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 등기이사 시기에도 4대보험 \'근로자\' 신분으로 가입돼 있었다면 강력한 근로자성 정황 영역. 임원 보수에 관한 주주총회 결의·이사회 결의가 부재하면 실질이 임금이라는 정황도 함께 결합되는 사례가 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"등기이사는 위임관계, 근로기준법 적용 외" 주장 반박</strong> — 직함이 아니라 실질로 판단(2010다57459, 2013다215225). 종속성 + 직무권한 비행사 정황이 인정되면 근로자 영역.</li>\n<li><strong>"이사 보수는 임금 아닌 위임 보수" 주장 반박</strong> — 매월 정액·임금성 보수면 임금 정황. 주주총회·이사회 보수 결의 부재 시 위임 보수로 보기 어려운 영역.</li>\n<li><strong>"등기 시점 퇴직 정산했다" 주장 반박</strong> — 정산 합의서·이체 기록이 없으면 정산 부정 정황. 비등기 일반직 복귀 후 계속근로기간 통산 영역(2002다64681).</li>\n<li><strong>3년 시효 주의</strong> — 퇴직금 시효는 퇴직일로부터 3년. 등기 시점 시효는 별도 검토 영역. 사실관계가 복잡한 사안일수록 시효 임박 시 즉시 변호사 선임 검토 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 임원 근로자성·퇴직금 무료 상담.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 퇴직금 미지급 진정 트랙.</li>\n<li><strong>한국공인노무사회 02-6293-1500</strong> — 임원 사건 노무사 자문.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 등기 임원 아닌 전무 직함 근로자성 인정',
        summary:
          '대법원 2010다57459 사건(대법원, 2013.06.27 선고)에서 법원은 회사의 이사 등 임원이 근로기준법상 근로자에 해당하는지 판단하는 기준을 정리하고, 주식회사의 등기 임원이 아니면서 전무라는 직함으로 근무하다 퇴직한 사람이 회사를 상대로 퇴직금 지급을 구한 사안에서, 제반 사정에 비추어 그 사람은 실질적으로 임금을 목적으로 종속적인 관계에서 사용자에게 근로를 제공하는 근로기준법상 근로자에 해당한다고 본 원심 판단을 수긍한 사례입니다. \'임원 직함\'만으로 근로자성이 부정되는 것이 아니라 실질로 판단해야 한다는 기준이 명확히 정리됐습니다.',
        takeaway: '등기·비등기 임원이라도 종속적 근로 정황(출퇴근·복무규정 적용·임금성 보수)이 인정되면 근로자성이 인정되어 그 기간 퇴직금 청구 트랙이 열리는 사례가 있어, 등기 자료·이사회 의사록·근태기록을 정리하면 청구가 검토되는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '대표이사도 근로자로 인정되는 사례가 있나요?',
        answer:
          '<strong>원칙적으로는 어려운 영역입니다(대법원 2015다244333).</strong> 근로자퇴직급여 보장법 제7조 제1항은 주식회사 대표이사에게 적용되지 않는다는 사례. 다만 형식 대표이사 + 실질 종속 정황은 개별 검토 영역.',
      },
      {
        question: '이사 보수가 \'성과급 + 기본급\' 구조인데 근로자성 인정되나요?',
        answer:
          '<strong>기본급 비중·정기성·임금성에 따라 다른 영역입니다.</strong> 매월 정액 기본급 비중이 크고 성과급이 보조적이면 임금성 인정 정황. 성과·이익배당 비중이 큰 사안은 근로자성 부정 정황.',
      },
      {
        question: '등기이사 시기 4대보험 가입 안 됐어요',
        answer:
          '<strong>근로자성 부정 정황 일부이나 결정적이지 않은 영역입니다.</strong> 4대보험은 절차상 사정에 좌우되는 사례도 있어, 다른 종속성 자료가 충실하면 근로자성 인정 가능 사례.',
      },
      {
        question: '회사가 등기이사 시기 퇴직 정산서 사인 받아갔어요',
        answer:
          '<strong>강행규정 회피 정황 사인은 효력 부정 다툼 영역입니다.</strong> 정산 합의가 자유의사가 아닌 회사 강요 정황이거나 퇴직금 자체에 대한 정확한 인식 없이 사인한 정황이라면 다툼 가능.',
      },
      {
        question: '소송 비용·기간이 부담스러워요',
        answer:
          '<strong>대한법률구조공단 132 무료 상담 + 소액심판(3,000만원 이하) 트랙 검토 영역입니다.</strong> 다만 임원 사건은 사실관계 복잡으로 본안 트랙이 일반적이라 변호사 선임이 효과적인 사례가 많은 영역.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '임원 vs 근로자 분쟁', href: '/guide/retirement/retirement-officer-vs-employee-dispute-back' },
      { label: '단기 임원 1년 청구', href: '/guide/retirement/retirement-short-term-executive-1year-claim' },
      { label: '임원 승진 계속근로', href: '/guide/retirement/retirement-director-promotion-continuous-service' },
      { label: '비정규 → 정규 전환 산정', href: '/guide/retirement/retirement-irregular-to-regular-conversion-calc' },
      { label: '근로계약서 없는 입증', href: '/guide/retirement/retirement-no-contract-proof-method' },
    ],
  },

  // ─── 5. unemployment / unemployment-self-employed-voluntary-insured-closure ───
  {
    domain: 'unemployment',
    slug: 'unemployment-self-employed-voluntary-insured-closure',
    keyword: '자영업자 임의가입 폐업 실업급여',
    questionKeyword: '자영업자로 고용보험 임의가입한 지 5년 만에 폐업했어요. 실업급여 받을 수 있는지, 일반 실업급여로 전환되는지 헷갈립니다.',
    ctaKeyword: '자영업자 임의가입 폐업 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '자영업자 임의가입 폐업 실업급여 5단계 | 로앤가이드',
      description:
        '자영업자 임의가입자로 고용보험을 유지하다 폐업했다면 자영업자 실업급여 수급요건 + 매출감소·적자 입증 + 일반 실업급여 자격 분기 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"개인사업자(출판업)로 5년간 자영업자 고용보험에 임의가입해 매월 보험료를 냈어요. 매출이 계속 줄어 결국 4월에 폐업 신고했고, 고용센터에 자영업자 실업급여를 신청했습니다. 그런데 \'적자·매출감소 입증 부족\'으로 불인정 처분을 받았어요. 다툴 수 있는 길이 있는지, 만약 단기 근로자로 취업한다면 일반 실업급여로 바뀌는지 정리하고 싶어요." 자영업자 고용보험 임의가입자는 폐업 사유가 \'매출액 감소·적자 지속·자연재해 등 부득이한 사정\'에 해당하면 자영업자 구직급여 수급자격이 인정되는 영역(고용보험법 제69조의3)이고, 처분에 불복할 경우 고용보험심사위원회 심사청구 트랙이 열립니다(고용보험심사위원회 2022재결 제165호 등). 폐업 후 일반 근로자로 취업해 피보험단위기간 180일 이상 충족하면 일반 실업급여 자격으로의 분기도 가능한 영역이에요.</p>',
    sections: [
      {
        title: 'Q. 자영업자 임의가입 폐업 5가지 점검 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 임의가입 자격·피보험기간·폐업 사유·매출감소 입증·일반 실업급여 분기 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 임의가입 자격 (고용보험법 시행령 제104조의5)</strong> — 근로자 사용 50인 미만 자영업자가 임의가입 가능 영역. 가입 후 1년 이상 보험료 납부 + 폐업 시 수급자격 검토 트랙.</li>\n<li><strong>② 피보험기간 1년 이상</strong> — 폐업일 이전 24개월 중 자영업자 피보험단위기간 1년 이상 필요. 보험료 미납 기간은 제외 영역.</li>\n<li><strong>③ 폐업 사유 (제69조의3 + 시행령 제115조의6)</strong> — 매출액 감소·적자 지속·자연재해·건강 사정 등 \'사업 영위 곤란\' 정황이면 인정 영역. 단순 \'개인 사정\' 폐업은 부정 정황.</li>\n<li><strong>④ 매출감소·적자 입증</strong> — 전년 동기 대비 매출 30% 이상 감소 또는 3개월 연속 적자 등 객관 자료. 부가가치세 신고서·종합소득세 신고서·세무사 진술 자료가 핵심.</li>\n<li><strong>⑤ 일반 실업급여 분기 가능성</strong> — 폐업 후 일반 근로자(사업장 근로자)로 취업해 피보험단위기간 180일 이상(이직 전 18개월 중) 충족하면 일반 구직급여 자격(제40조). 자영업자 + 일반 피보험기간 합산 적용 영역도 검토 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자영업자 실업급여는 \'폐업 사유 + 매출감소 입증\'이 핵심. 1차 처분이 불인정돼도 심사청구·재심사·행정소송 트랙이 살아있는 영역(2022재결 제165호 인용 사례). 폐업 후 일반 근로 전환은 별도 자격 분기.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 자영업자 실업급여 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 폐업 신고 → 고용센터 신청 → 심사청구 → 일반 실업급여 분기 검토 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사업·재무 자료 보존 (폐업 전·즉시)</strong> — 최근 2년치 부가가치세 신고서·종합소득세 신고서·매출 장부·임차 계약서·거래처 정황 자료·고용보험 가입증명서 보존.</li>\n<li><strong>2단계 — 폐업 신고 (사업자등록 폐업 + 고용보험 자격상실)</strong> — 세무서·홈택스 폐업 신고 + 근로복지공단 자영업자 고용보험 자격상실 신고. 자영업자 실업급여 수급기간 시작점.</li>\n<li><strong>3단계 — 고용센터 자영업자 실업급여 신청 (폐업일 12개월 내)</strong> — 워크넷 등록 + 거주지 관할 고용센터 방문. 매출감소 자료 + 폐업 사유 진술서 함께 제출.</li>\n<li><strong>4단계 — 거절 시 심사청구 (90일 이내)</strong> — 고용보험심사위원회(www.ei.go.kr) 심사청구. 2022재결 제165호 사례처럼 매출 활동·고용보험료 성실납부 정황 + 사업 운영 지속 노력이 인용 자료. 재심사·행정소송 트랙도 열려 있음.</li>\n<li><strong>5단계 — 일반 실업급여 분기 검토</strong> — 폐업 후 일반 근로자로 재취업해 피보험단위기간 180일 이상 충족 시 일반 구직급여 자격(제40조). 자영업자 + 일반 피보험기간 합산 가능성 + 별도 신청 트랙.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">자영업자 임의가입 폐업 5단계 점검을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사업 재무 자료 + 폐업 사유 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>최근 2년치 부가가치세 신고서·종합소득세 신고서</strong> — 매출감소·적자 객관 자료 핵심.</li>\n<li><strong>매출 장부·계좌 입금내역</strong> — 매출 추이 입증.</li>\n<li><strong>임차 계약서·관리비·전기·통신비 영수증</strong> — 고정비 부담 입증.</li>\n<li><strong>고용보험 가입증명서·납부확인서 (근로복지공단)</strong> — 피보험기간 1년 이상 입증.</li>\n<li><strong>폐업신고서·사업자등록 폐업 통지서</strong> — 폐업 시점 확인.</li>\n<li><strong>거래처 진술서·업종 시장 자료</strong> — 사업 영위 곤란 정황 보조.</li>\n<li><strong>구직활동 계획서·워크넷 구직 등록 확인서</strong> — 적극적 구직 의사 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 1차 처분 단계에서 자료가 부족했더라도 심사청구 단계에서 추가 자료 보완 가능 영역. 2022재결 제165호처럼 \'사업 운영 지속 노력 + 매출 발생을 위한 활동 자료\'를 시간순 정리하면 결정 결과가 달라지는 사례가 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용센터 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"매출감소 30% 미달" 주장 반박</strong> — 30% 기준은 일률 적용 아닌 영역. 업종 특성·계절성·전체 시장 침체 정황 결합 시 인정 사례 있음(2022재결 제165호).</li>\n<li><strong>"개인 사정 폐업으로 본다" 주장 반박</strong> — 매출감소·적자·고정비 부담 자료 결합 시 \'사업 영위 곤란\' 정황 입증 영역. 진술서 + 객관 자료 결합 핵심.</li>\n<li><strong>"피보험단위기간 1년 미달" 주장 반박</strong> — 보험료 미납 기간은 제외되지만 추후 납부로 회복 가능 영역. 근로복지공단에 추후납부 트랙 확인.</li>\n<li><strong>일반 실업급여 분기 시 별도 신청</strong> — 자영업자 실업급여 ≠ 일반 실업급여. 분기 시 자영업자 자격 종료 + 일반 자격 신청 별도 트랙. 합산 가능성은 사례별 검토 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>고용노동부 고객상담센터 1350</strong> — 자영업자 실업급여 무료 상담.</li>\n<li><strong>고용보험 (ei.go.kr)</strong> — 수급자격·심사청구 안내.</li>\n<li><strong>대한법률구조공단 132</strong> — 심사청구·행정소송 무료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '결정례 — 자영업자 실업급여 수급자격 인정 사례',
        summary:
          '고용보험심사위원회 2022재결 제165호 사건(고용보험심사위원회, 2023.01.04 결정)에서 위원회는 자영업자 고용보험에 약 10년간 임의가입해 보험료를 성실하게 납부해 온 출판업 자영업자가 매출 감소로 폐업한 후 자영업자 실업급여 수급자격 인정신청을 한 사안에서, 적자 지속·매출액 감소를 구체적으로 확인하기는 어렵더라도 ① 작가로서 매출을 일으키기 위한 활동을 상당기간 지속해온 점, ② 매출이 없는 상태에서도 고용보험료를 성실히 납부하며 피보험자격을 약 10년간 유지하다가 더 이상 사업 운영이 어렵다고 판단한 후 폐업한 점을 인정해 자영업자 수급자격을 인정한 사례입니다.',
        takeaway: '자영업자 임의가입자가 매출감소·사업 영위 곤란 정황으로 폐업한 경우 자영업자 실업급여 수급자격이 인정되는 사례가 있어, 매출 자료·납부 이력·구직활동 자료를 시간순 정리하면 1차 처분이 불인정돼도 심사청구 단계에서 결과가 달라질 수 있는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '자영업자 실업급여와 일반 실업급여를 동시에 받을 수 있나요?',
        answer:
          '<strong>동시 수급은 불가 영역입니다.</strong> 한 시점에 하나의 자격만 적용. 다만 자영업자 실업급여 수급 종료 후 일반 근로자로 재취업해 자격 충족 시 일반 실업급여 별도 신청 가능한 사례.',
      },
      {
        question: '자영업자 보험료를 1년 미납하다가 폐업했어요',
        answer:
          '<strong>미납 기간은 피보험기간에서 제외 영역입니다.</strong> 다만 폐업 전 추후납부로 일부 회복 가능. 근로복지공단에 추후납부 신청 트랙 확인이 1차 단계.',
      },
      {
        question: '폐업 후 바로 일반 근로자로 취업했어요. 어떤 자격이 적용되나요?',
        answer:
          '<strong>새 일반 근로자 자격이 시작 영역입니다.</strong> 자영업자 자격은 폐업으로 종료. 일반 근로자 피보험단위기간이 별도 산정. 단기 이직 시 합산 가능성은 사례별 검토 영역.',
      },
      {
        question: '코로나·자연재해로 폐업한 경우 더 유리한가요?',
        answer:
          '<strong>자연재해·감염병 등 특별 사유는 인정 정황이 강한 영역입니다.</strong> 정부 재난지원금 수령 자료·집합금지 통보 자료가 결합되면 매출감소 입증 부담이 줄어드는 사례.',
      },
      {
        question: '심사청구는 어떻게 하나요?',
        answer:
          '<strong>고용보험심사위원회(www.ei.go.kr) 또는 고용보험심사관에게 90일 이내 청구합니다.</strong> 처분 통지일부터 90일. 전자신청·우편 모두 가능, 무료. 위원회 거절 시 재심사·행정소송 트랙.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '자영업자 폐업 실업급여', href: '/guide/unemployment/unemployment-self-employed-closure' },
      { label: '자영업자 폐업 자격 검토', href: '/guide/unemployment/unemployment-self-employed-closure-eligibility' },
      { label: '실업급여 거절 심사청구', href: '/guide/unemployment/unemployment-benefit-rejection-appeal-procedure' },
      { label: '소상공인 폐업 실업급여 일액', href: '/guide/unemployment/unemployment-small-biz-closure-daily' },
      { label: '실업급여 자격 종합 점검', href: '/guide/unemployment/unemployment-benefit-requirements' },
    ],
  },
];
