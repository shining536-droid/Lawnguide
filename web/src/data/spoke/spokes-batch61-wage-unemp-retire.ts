import { SpokePage } from '../spoke-pages';

// batch61 wage·unemployment·retirement — 5개 (2026-05-11)
//
// 고유 존재 이유:
// 1. wage — 출근율 인센티브 차감을 통상임금에서 빼는 회사에 대해 임금 공제 위법성 다툼 트랙 정리.
// 2. wage — 포괄임금제에서 시간외수당 한도를 초과한 실제 근로시간에 대한 추가 청구 트랙 정리.
// 3. unemployment — 직무가 본인 능력·전공과 명백히 다르게 배치되어 사직한 사유의 정당 사직 인정 트랙 정리.
// 4. retirement — 중간정산 받았는데 사용자가 산정 항목 누락하거나 평균임금 잘못 산정한 경우 재정산 청구 트랙 정리.
// 5. retirement — 외국인 근로자가 출국 시 받지 못한 퇴직금 청구·국외 송금 트랙 정리.

export const spokesBatch61WageUnempRetire: SpokePage[] = [
  // ─── 1. wage / wage-attendance-incentive-deduction-illegal-track ───
  {
    domain: 'wage',
    slug: 'wage-attendance-incentive-deduction-illegal-track',
    keyword: '출근율 인센티브 차감 임금 공제',
    questionKeyword: '회사가 \"출근율 95% 미만이면 인센티브 빼겠다\"며 매달 임금을 줄여요. 합법인가요?',
    ctaKeyword: '임금 공제 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '출근율 인센티브 차감 — 5단계 임금 공제 다툼 | 로앤가이드',
      description:
        '회사가 출근율을 사유로 임금을 차감했다면 임금 전액불 원칙·통상임금 산입 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"근로계약서에 \'출근율 95% 미만이면 인센티브 50% 차감\'이라는 조항이 적혀 있었어요. 제가 가족 병원 일정으로 두 번 반차 + 한 번 결근을 했더니 그 달 인센티브 60만원이 통째로 빠져나갔습니다. 인사팀은 \'동의했잖아요\'라고만 하고요." 근로기준법 제43조는 임금은 통화로 직접 근로자에게 전액을 지급해야 한다고 정한 영역(전액불 원칙)이고, 제20조는 위약금 또는 손해배상 예정 계약 금지를 명시합니다. 출근율을 사유로 정기·고정적으로 지급되던 인센티브를 일방 차감하면 ① 통상임금에 산입될 정도의 정기·고정성 자료 ② 전액불 원칙 위반 ③ 위약 예정 금지 세 트랙이 동시에 다툼 가능합니다. 대법원 2010다100806 사건은 일정 출근율 미만 시 지급하지 않는 조건이 붙은 임금이라도 그 조건 자체가 임금의 정기·고정성 판단에 미치는 영향이 제한적이라고 본 영역으로, 차감 자체의 적법성 다툼이 가능한 사례입니다.</p>',
    sections: [
      {
        title: 'Q. 임금 공제 다툼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 정기성·고정성·동의 형식·전액불 원칙·위약예정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 인센티브 정기성</strong> — 매월·매분기 등 일정 주기로 지급. 정기적이면 임금 자료.</li>\n<li><strong>② 고정성·통상임금 산입 여부</strong> — 사전에 산정 기준이 정해져 있고 일정 조건 충족 시 받는 사례는 통상임금 산입 자료(대법원 2010다100806 영역).</li>\n<li><strong>③ 동의 형식</strong> — 근로계약서 일방 조항 vs 단체협약·취업규칙 변경 절차. 근로자 과반수 동의 부재면 절차 흠결.</li>\n<li><strong>④ 전액불 원칙 위반</strong> — 임금 일부를 사후 차감하면 전액불 원칙 위반 자료(근로기준법 제43조).</li>\n<li><strong>⑤ 위약 예정 금지 위반</strong> — 출근율 미달 시 사전에 임금 차감액을 정하는 사례는 위약 예정 자료(제20조).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'본인 동의 있었다\'는 사용자 주장은 동의 자체가 임의성·절차 형식을 다 갖춰야 효력 있는 영역. 근로자에게 일방 불리한 조항은 위약 예정·전액불 원칙 위반으로 평가될 여지가 있는 사례가 일반적입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 임금 회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 진정·청구 트랙으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 인센티브 지급 이력 자료 수집 (즉시)</strong> — 최근 6~12개월 급여명세서·계약서·취업규칙. 정기·고정성 입증.</li>\n<li><strong>2단계 — 차감 내역 정리 (1주)</strong> — 매달 차감액 시점·사유 표 작성.</li>\n<li><strong>3단계 — 회사에 차감 근거 공개 요구 (내용증명, 1~2주)</strong> — 위반 정황 확인.</li>\n<li><strong>4단계 — 고용노동부 임금체불 진정 (1350, 25일 내외)</strong> — 차감액 = 미지급 임금. 정기상여·고정 인센티브 차감은 임금체불.</li>\n<li><strong>5단계 — 민사 청구 (3년 시효)</strong> — 미지급 임금 + 연 6% 지연이자. 통상임금 산입 시 시간외수당·연차수당까지 소급 청구 영역.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">출근율 인센티브 차감 다툼 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 정기성 자료 + 차감 자료 두 갈래로 정리합니다.</strong></p>\n<ul>\n<li><strong>최근 12개월 급여명세서</strong> — 인센티브 정기성·고정성 입증.</li>\n<li><strong>근로계약서·취업규칙·인사규정</strong> — 인센티브 산정 기준·차감 조항.</li>\n<li><strong>출근 기록·반차 신청서·연차 신청서</strong> — 결근·반차 사유 자료.</li>\n<li><strong>차감 통보 메일·인사팀 답변</strong> — 차감 시점·금액·근거.</li>\n<li><strong>단체협약·취업규칙 변경 절차 자료 부재 입증</strong> — 근로자 과반수 동의 부재.</li>\n<li><strong>통장 입금 내역</strong> — 실제 입금액 대조.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 인센티브가 통상임금에 산입되면 시간외수당·연차수당·퇴직금 산정 기초가 바뀌므로 \'차감액 자체\'보다 통상임금 재산정 효과가 더 클 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"본인이 계약서에 동의했다" 주장 반박</strong> — 동의도 임의성·형식 갖춰야 효력. 위약 예정·전액불 위반은 동의로 우회 불가.</li>\n<li><strong>"인센티브는 임금 아니다" 주장 반박</strong> — 정기·고정적 지급이면 임금. 명칭 무관 영역.</li>\n<li><strong>"출근율 조건은 성과급" 주장 반박</strong> — 사전에 일정 조건 충족 시 받는 사례는 통상임금 자료(대법원 2010다100806 영역).</li>\n<li><strong>"본인 사유로 결근" 주장 반박</strong> — 결근 사유가 본인 책임이라도 임금 사후 차감과 별개 영역.</li>\n<li><strong>형사 처벌 자료</strong> — 임금체불은 3년 이하 징역 또는 3천만원 이하 벌금. 진정·고발 동시 트랙.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong> — 임금체불 진정.</li>\n<li><strong>대한법률구조공단 132</strong> — 임금·통상임금 무료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일정 조건부 정기 지급 인센티브의 통상임금 산입 가능성',
        summary:
          '대법원 2010다100806 사건(대법원, 2013.12.18 선고)에서 법원은 정기적·일률적·고정적으로 지급되는 금원이라면 명칭이 인센티브·성과급·상여금이더라도 통상임금에 산입될 수 있으며, 일정 출근율 미만 시 지급하지 않는 조건이 붙어 있다는 사정만으로 정기·고정성이 부정되는 것은 아니라고 판시했습니다. 임금의 본질을 회피하기 위한 형식적 조건은 통상임금 산정에 영향을 주지 못한다는 취지입니다.',
        takeaway: '\'성과급\'이라는 명칭으로 출근율 조건을 붙여도 정기·고정성이 인정되면 통상임금에 산입될 여지가 있는 영역. 차감 자체는 전액불 원칙·위약 예정 금지로 동시 다툼이 가능한 사례입니다.',
      },
    ],
    faq: [
      {
        question: '계약서에 차감 조항이 적혀 있는데도 다툴 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 위약 예정 금지(근로기준법 제20조)·전액불 원칙(제43조) 위반은 동의로 우회 불가 영역. 계약서 조항 자체 무효 다툼이 가능한 사례입니다.',
      },
      {
        question: '인센티브 차감액으로 시간외수당도 적어졌어요',
        answer:
          '<strong>통상임금 재산정 다툼 트랙이 추가됩니다.</strong> 인센티브가 통상임금이면 시간외·야간·휴일·연차수당이 모두 소급 자료. 차감액보다 효과가 큰 사례가 많습니다.',
      },
      {
        question: '진정 가면 시간 얼마나 걸리나요?',
        answer:
          '<strong>대체로 1~2개월 안에 조사·시정명령이 진행되는 사례.</strong> 사용자 시정 거부 시 검찰 송치 또는 민사 청구 트랙으로 이동합니다.',
      },
      {
        question: '소액인데 진정해도 될까요?',
        answer:
          '<strong>금액과 무관하게 진정 접수 가능합니다.</strong> 12개월 누적 차감이면 합산 금액이 커지는 사례도 많고, 통상임금 재산정 효과까지 포함하면 청구액이 확대됩니다.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '통상임금 산정', href: '/guide/wage/wage-unpaid-bonus-performance-lawsuit' },
      { label: '연차 미사용 수당', href: '/guide/wage/wage-unused-annual-leave-claim' },
      { label: '임금 일방 삭감', href: '/guide/wage/wage-uniform-cost-deducted-illegal' },
      { label: '체불 진정 절차', href: '/guide/wage/wage-unpaid-one-year-statute-claim' },
      { label: '소액 임금체불 청구', href: '/guide/wage/wage-unpaid-small-under5' },
    ],
  },

  // ─── 2. wage / wage-comprehensive-pay-overtime-cap-excess-track ───
  {
    domain: 'wage',
    slug: 'wage-comprehensive-pay-overtime-cap-excess-track',
    keyword: '포괄임금제 시간외 한도 초과',
    questionKeyword: '포괄임금이라 시간외수당 다 포함됐다는데, 매달 그 한도보다 두 배 더 일해요. 추가로 받을 수 있나요?',
    ctaKeyword: '포괄임금 한도 초과 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '포괄임금 한도 초과 — 5단계 시간외수당 추가 청구 | 로앤가이드',
      description:
        '포괄임금제에 포함된 시간외 한도(예: 월 30시간)를 초과해 일했다면 추가 시간외수당 5가지 청구 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"근로계약서에 \'월 30시간 시간외근로 포함\'으로 포괄임금제가 명시돼 있어요. 그런데 실제 출근·퇴근 로그를 보면 매달 60~80시간 초과 근로를 해왔습니다. 회사는 \'포괄임금이라 더 줄 게 없다\'고만 합니다." 포괄임금제는 약정한 일정 시간 분량의 시간외·야간·휴일근로수당을 기본급에 포함해 정산하는 영역이지만, 약정 시간 한도를 명백히 초과한 실제 근로시간에 대해선 별도 청구가 가능한 사례가 일반적입니다. 대법원 2008다6052 사건은 포괄임금제가 유효하려면 시간·임금 산정 방식이 명확해야 하고, 약정 시간 한도를 초과한 부분에 대해선 별도 시간외수당이 발생한다고 본 영역입니다. 출퇴근 로그·이메일 송수신 시각·근태 관리 시스템이 자료라 입증 트랙이 단단하게 열리는 사례입니다.</p>',
    sections: [
      {
        title: 'Q. 포괄임금 한도 초과 다툼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 약정 한도·실근로시간·입증 자료·산정 방식·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 약정 시간 한도</strong> — 근로계약서·취업규칙에 명시된 포괄 시간외 한도(예: 월 20·30시간).</li>\n<li><strong>② 실근로시간 자료</strong> — 출퇴근 로그·이메일 송수신 시각·메신저 활동 로그·CCTV·교통카드·법인택시 사용 자료.</li>\n<li><strong>③ 사용자 측 묵인·지시 입증</strong> — 야근 지시 카톡·이메일·회의 일정. 본인이 자발적 잔업이 아니라 사용자 묵인·지시였다는 자료.</li>\n<li><strong>④ 산정 방식</strong> — 통상임금 ÷ 209 × 1.5 × 초과 시간. 통상임금에 정기상여·식대 포함되면 산정액 확대.</li>\n<li><strong>⑤ 청구 트랙</strong> — 3년 시효 내 임금체불 진정 또는 민사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 포괄임금제 자체가 무효라는 주장보다 \'약정 한도 초과분에 대한 추가 시간외수당\' 트랙이 다툼 자료가 더 단단한 영역. 실근로시간 입증 자료가 있으면 청구 가능성이 큰 사례가 일반적입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 추가 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 수집·산정·진정·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 실근로시간 자료 수집 (즉시·3~7일)</strong> — 출퇴근 로그·메신저·이메일·일정. 본인이 직접 백업.</li>\n<li><strong>2단계 — 산정표 작성 (1주)</strong> — 월별 약정 한도 vs 실제 초과 시간 표. 통상임금 산정 자료.</li>\n<li><strong>3단계 — 내용증명·진정 (2주)</strong> — 회사 측에 추가 시간외수당 청구. 답변 부재 시 1350 진정.</li>\n<li><strong>4단계 — 조사·시정명령 (1~2개월)</strong> — 고용노동부 근로감독관 조사.</li>\n<li><strong>5단계 — 민사 청구 (3년 시효·재직 중도 가능)</strong> — 미지급 시간외수당 + 연 6% 지연이자.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 야근수당 신고 가능성, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">포괄임금 한도 초과 다툼 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 약정 자료 + 실근로 자료 두 갈래입니다.</strong></p>\n<ul>\n<li><strong>근로계약서·취업규칙 (포괄임금 조항)</strong> — 약정 시간 한도 명시 자료.</li>\n<li><strong>최근 12개월 출퇴근 로그·근태 시스템 캡처</strong> — 실근로시간 입증.</li>\n<li><strong>이메일 송수신 시각·메신저 로그</strong> — 업무 시간 입증 보조 자료.</li>\n<li><strong>회의 일정·고객 미팅 기록</strong> — 휴일·야간 근로 정황.</li>\n<li><strong>최근 12개월 급여명세서·통상임금 산정 자료</strong> — 정기상여·식대 포함.</li>\n<li><strong>상사 지시·묵인 자료 (카톡·메일)</strong> — 본인 자발 잔업 아닌 사용자 지시.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \'야근을 본인이 좋아서 한 거다\'라는 사용자 주장 차단을 위해 회사 메신저·이메일에서 야간·휴일 업무 지시 자료를 우선 백업하는 것이 효율적입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"포괄임금이라 더 줄 게 없다" 주장 반박</strong> — 약정 한도 초과분은 별도 영역(대법원 2008다6052).</li>\n<li><strong>"본인이 자발적으로 야근" 주장 반박</strong> — 메신저·이메일 지시 자료가 본인 자발 차단.</li>\n<li><strong>"근태 시스템 자료가 없다" 주장 반박</strong> — 본인이 백업한 출퇴근 캡처·이메일 시각이 자료. 사용자 측 자료 부재가 오히려 입증 부담 자료.</li>\n<li><strong>"정산은 매년 정산했다" 주장 반박</strong> — 정산 자료 공개 요구. 실근로시간 대조 가능.</li>\n<li><strong>형사 처벌 자료</strong> — 시간외수당 미지급은 임금체불 영역. 3년 이하 징역 또는 3천만원 이하 벌금.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong> — 임금체불 진정.</li>\n<li><strong>대한법률구조공단 132</strong> — 시간외수당 무료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금제 약정 한도 초과분 별도 시간외수당 발생',
        summary:
          '대법원 2008다6052 사건(대법원, 2010.05.13 선고)에서 법원은 사용자와 근로자가 포괄임금제로 일정 시간 분량의 시간외근로수당을 기본급에 포함하여 지급하기로 약정한 경우라도, 그 약정 시간을 초과한 부분에 대해서는 별도의 시간외근로수당을 청구할 수 있고, 포괄임금제가 유효하기 위해서는 임금 산정 방식이 명확해야 한다고 판시했습니다.',
        takeaway: '포괄임금제 무효 다툼보다 \'약정 한도 초과분에 대한 추가 시간외수당\' 트랙이 더 단단한 영역. 실근로시간 자료가 누적되면 청구 트랙이 단단하게 열리는 사례가 일반적입니다.',
      },
    ],
    faq: [
      {
        question: '약정 한도 30시간인데 실제 70시간 일했어요',
        answer:
          '<strong>40시간 분 추가 청구 트랙입니다.</strong> 통상임금 ÷ 209 × 1.5 × 40 시간. 정기상여·식대 포함되면 통상임금 자체가 커집니다.',
      },
      {
        question: '재직 중에도 청구 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 3년 시효 내 미지급 시간외수당은 재직 중에도 청구 가능. 다만 보복 부담을 우려해 익명 진정 또는 동료와 공동 진정 사례도 있습니다.',
      },
      {
        question: '근태 시스템이 따로 없는 회사예요',
        answer:
          '<strong>본인 자료가 핵심입니다.</strong> 이메일 송수신 시각·메신저 로그·교통카드 사용 시각·법인택시 영수증·CCTV 출입 로그 등 다각도 자료 가능한 영역입니다.',
      },
      {
        question: '포괄임금제 자체가 무효라고 다투면 어떻게 되나요?',
        answer:
          '<strong>가능하지만 입증 부담이 큰 영역입니다.</strong> 임금 산정 방식 자체가 불명확하면 무효 다툼 가능(대법원 2008다6052)이지만, 한도 초과분 청구가 입증 부담이 더 가볍습니다.',
      },
    ],
    cta: { text: '야근수당 신고 가능성, AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '시간외수당 미지급', href: '/guide/wage/wage-unpaid-one-year-statute-claim' },
      { label: '통상임금 재산정', href: '/guide/wage/wage-unpaid-bonus-performance-lawsuit' },
      { label: '연차수당 청구', href: '/guide/wage/wage-unused-annual-leave-claim' },
      { label: '소규모 사업장 임금체불', href: '/guide/wage/wage-unpaid-small-under5' },
      { label: '임금체불 진정 절차', href: '/guide/wage/wage-training-period-unpaid-legal' },
    ],
  },

  // ─── 3. unemployment / unemployment-job-mismatch-quit-just-cause-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-job-mismatch-quit-just-cause-track',
    keyword: '직무 부적합 사직 실업급여',
    questionKeyword: '경리로 입사했는데 갑자기 영업으로 발령나서 적응 못해 퇴사했어요. 실업급여 가능한가요?',
    ctaKeyword: '직무 부적합 사직 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '직무 부적합 사직 실업급여 — 5단계 정당사유 트랙 | 로앤가이드',
      description:
        '계약 직무와 다른 업무로 일방 발령돼 적응하지 못하고 사직했다면 정당사유 인정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"입사 면접·계약서에서는 \'경리 회계 업무\'였어요. 입사 6개월 만에 \'인사 정책 변경\'을 이유로 영업 부서로 발령났습니다. 영업 경험·자격 모두 없어서 실적 부진이 누적됐고, 6개월 더 버티다 도저히 안 되겠어서 사직했어요." 일반적으로 자발적 사직은 실업급여 대상이 아니지만, 고용보험법 시행규칙 제101조 별표2는 \'본인 직업에 적합하지 아니한 직무로 배치되어 사직한 경우\'를 정당사유(이직 사유)로 명시한 영역입니다. 계약 직무와 명백히 다른 직무로 일방 발령되었고 적응 시도 후에도 어려웠다는 자료가 누적되면 자발적 사직이라도 실업급여 자격이 인정될 여지가 있는 사례입니다. 고용보험심사위원회 재결례에서도 동일 취지로 인정된 사례가 다수 있는 영역(2021재58호 영역).</p>',
    sections: [
      {
        title: 'Q. 직무 부적합 사직 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약 직무·일방 변경·적응 노력·사직 사유·신청 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약 직무 명시</strong> — 근로계약서·면접 자료·인사발령장에 적힌 본래 직무.</li>\n<li><strong>② 일방 직무 변경</strong> — 본인 동의 없는 전직·인사발령. 동의서·재계약 부재면 일방 정황 자료.</li>\n<li><strong>③ 적응 노력 입증</strong> — 교육 신청·OJT 참여·실적 시도 자료. 무조건 사직이 아니라 적응 시도 후 사직.</li>\n<li><strong>④ 사직 사유 일치</strong> — 사직서·퇴직 사유 코드에 \'직무 부적합\'·\'전직 부적응\' 표현 명시.</li>\n<li><strong>⑤ 실업급여 신청 (14일 이내 권장)</strong> — 고용센터에 신청서·사유 입증 자료 제출.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'자발적 사직\'이라는 사직서 한 줄로 끝나는 영역이 아니라 사직 사유의 실질 평가가 핵심. 계약 직무와 다른 일방 발령 + 적응 시도 부족 시 정당사유 인정 여지가 있는 사례입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 실업급여 신청 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용보험법 절차를 기준으로 다음 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사직 자료 정리 (퇴직 즉시)</strong> — 사직서 사본·계약서·인사발령장·교육 신청서.</li>\n<li><strong>2단계 — 워크넷 구직 등록·고용센터 방문 (14일 권장)</strong> — 본인 신분증·이력서.</li>\n<li><strong>3단계 — 실업급여 신청서·사유 진술서 (1~2주)</strong> — \'본인 직업에 적합하지 아니한 직무로 배치\' 사유 명시.</li>\n<li><strong>4단계 — 사용자 측 의견 조회 + 심사 (4~6주)</strong> — 회사 측 답변 후 고용센터 판단. 부지급 결정 시 심사 청구 트랙(고용보험심사위원회).</li>\n<li><strong>5단계 — 수급·구직 활동 (피보험단위기간별 90~270일)</strong> — 4주 1회 실업 인정. 평균임금 60% 수준.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">직무 부적합 사직 정당사유 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약 자료 + 변경 자료 + 적응 자료 갈래입니다.</strong></p>\n<ul>\n<li><strong>근로계약서·면접 자료·채용 공고</strong> — 계약 직무 입증.</li>\n<li><strong>인사발령장·인사 메모·전직 통보서</strong> — 일방 변경 자료.</li>\n<li><strong>교육 신청·OJT 참여 기록</strong> — 적응 노력 자료.</li>\n<li><strong>실적·평가표 (전직 후)</strong> — 부적응 정황.</li>\n<li><strong>사직서·퇴직 사유 코드·이직 확인서</strong> — 사직 사유 명시.</li>\n<li><strong>최근 6개월 급여명세서</strong> — 피보험단위기간 180일·평균임금 산정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사직서에 \'개인 사정\'으로만 적으면 정당사유 다툼이 어려워집니다. \'본래 계약된 직무와 다른 직무로 배치되어 적응이 어려웠다\'는 사유를 명시하는 것이 효율적입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사·고용센터 자주 주장과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"본인이 동의해서 발령" 주장 반박</strong> — 동의서·재계약 부재면 일방 발령 자료. 묵시 동의도 형식 부재면 인정 어려운 영역.</li>\n<li><strong>"적응 노력 부족" 주장 반박</strong> — 교육 신청·OJT 참여·실적 시도 자료가 노력 입증.</li>\n<li><strong>"개인 사정 사직" 주장 반박</strong> — 사직서 표현 + 사유 진술서로 실질 사유 명시.</li>\n<li><strong>부지급 결정 시 심사 청구</strong> — 고용보험심사위원회 90일 내 청구. 재결례 다수 있는 영역.</li>\n<li><strong>사용자 측 부당한 인사 자료</strong> — 차별·괴롭힘 정황 있으면 별도 진정 트랙(고용노동부 1350) 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>고용센터 1350</strong> — 실업급여 신청·심사.</li>\n<li><strong>대한법률구조공단 132</strong> — 실업급여·부당해고 무료 상담.</li>\n<li><strong>고용보험심사위원회</strong> — 부지급 결정 심사 청구.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '재결례 — 직무 부적합 사직의 정당사유 인정',
        summary:
          '고용보험심사위원회 2021재58호 재결례에서는 본인 직업·경력에 적합하지 않은 직무로 일방적으로 배치되어 적응을 시도했음에도 어려움이 누적되어 사직한 경우, 고용보험법 시행규칙 제101조 별표2의 \'본인 직업에 적합하지 아니한 직무로 배치되어 사직한 경우\'에 해당해 정당사유 사직으로 인정되어 수급자격이 인정된 사례가 있습니다.',
        takeaway: '계약 직무와 명백히 다른 직무로 일방 발령된 후 적응 시도가 자료로 남아 있으면 자발적 사직이라도 실업급여 자격 인정 여지가 있는 영역. 사직서·사유 진술서 표현이 결정적인 사례가 일반적입니다.',
      },
    ],
    faq: [
      {
        question: '사직서에 \"개인 사정\"으로만 썼는데 다툴 수 있나요?',
        answer:
          '<strong>사유 진술서로 실질 사유 명시 가능합니다.</strong> 사직서 한 줄보다 사유 진술서·인사발령 자료 누적이 결정적인 영역입니다.',
      },
      {
        question: '동의서 없이 발령났는데도 회사가 \"동의했다\"고 합니다',
        answer:
          '<strong>서면 동의 부재면 일방 발령 자료입니다.</strong> 묵시 동의도 형식 부재면 인정 어려운 영역. 인사발령 메일·인사 메모가 자료.',
      },
      {
        question: '실업급여 부지급 결정이 나면 어떻게 하나요?',
        answer:
          '<strong>90일 내 고용보험심사위원회 심사 청구가 가능합니다.</strong> 재결례 다수 있는 영역. 132 자문 동시 활용이 효율적입니다.',
      },
      {
        question: '적응 노력은 어떻게 입증하나요?',
        answer:
          '<strong>교육 신청·OJT 참여·실적 시도 자료입니다.</strong> 이메일·근태 기록·평가표가 자료. 사후 메모도 정황 자료.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '근로조건 변경 사직', href: '/guide/unemployment/unemployment-working-hours-cut-30percent-quit' },
      { label: '직장 괴롭힘 사직', href: '/guide/unemployment/unemployment-workplace-bullying-just-cause' },
      { label: '실업급여 부지급 심사', href: '/guide/unemployment/unemployment-wrongful-denial-appeal-procedure' },
      { label: '임금 미지급 사직', href: '/guide/unemployment/unemployment-wage-unpaid-2months-quit' },
      { label: '권고사직 처리', href: '/guide/dismissal/dismissal-recommended-resignation-refused-pressure' },
    ],
  },

  // ─── 4. retirement / retirement-interim-settle-recalculation-track ───
  {
    domain: 'retirement',
    slug: 'retirement-interim-settle-recalculation-track',
    keyword: '퇴직금 중간정산 재정산 청구',
    questionKeyword: '주택 구입으로 중간정산 받았는데 항목이 빠진 게 보여요. 다시 청구할 수 있나요?',
    ctaKeyword: '중간정산 재정산 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '퇴직금 중간정산 재정산 — 5단계 추가 청구 | 로앤가이드',
      description:
        '주택 구입·의료비 등 사유로 중간정산을 받았는데 산정 항목 누락·평균임금 오류가 있다면 재정산 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"주택 구입을 사유로 3년 전 퇴직금 중간정산을 받았습니다. 최근 친구 회사 정산서를 보고 비교했더니 제 정산서에 정기상여·식대·교통비가 통상임금에 빠져 있다는 걸 알았어요. 회사 인사팀은 \'그때 합의한 금액\'이라며 추가 지급 거부 중입니다." 근로자퇴직급여보장법은 중간정산 시 적용되는 평균임금 산정 기준이 본래 퇴직금 산정 기준과 동일하다고 정한 영역입니다. 사용자가 정기상여·식대·교통비 등 통상임금 산입 항목을 누락하거나 평균임금 산정 기간(3개월)에 누락된 임금이 있으면 그 차액에 대해 재정산 청구가 가능한 사례입니다. 합의서가 있더라도 강행규정 위반 또는 명백한 산정 오류면 합의 효력 다툼이 가능한 영역(대법원 2010다99279 영역).</p>',
    sections: [
      {
        title: 'Q. 중간정산 재정산 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 산정 항목·평균임금·기간·합의 효력·시효 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 통상임금 산정 항목</strong> — 기본급 + 정기상여 + 식대·교통비·차량유지비 + 직책수당. 누락 시 차액 발생.</li>\n<li><strong>② 평균임금 산정 기간 (3개월)</strong> — 사유 발생일 직전 3개월. 산정 기간 내 누락된 임금 있으면 평균임금 자체가 낮음.</li>\n<li><strong>③ 근속연수 산정</strong> — 입사일·중간정산일 정확성. 1일 단위 산정.</li>\n<li><strong>④ 합의서 효력 다툼</strong> — 명백한 산정 오류·강행규정 위반은 합의로 면제 불가 영역.</li>\n<li><strong>⑤ 임금채권 시효 3년</strong> — 중간정산일로부터 3년 내 청구. 도과 후엔 시효 회복 자료 별도 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'그때 받았으니 끝\'이라는 사용자 주장은 강행규정 위반·산정 오류 자료가 있으면 깨지는 영역. 통상임금 재산정 효과가 큰 사례가 일반적입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 재정산 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 정리·산정·진정·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 중간정산 자료 수집 (즉시)</strong> — 정산 신청서·정산서·통장 입금 내역·당시 급여명세서.</li>\n<li><strong>2단계 — 통상임금·평균임금 재산정 (1~2주)</strong> — 정기상여·식대·교통비·직책수당 포함 재산정.</li>\n<li><strong>3단계 — 회사에 차액 청구 (내용증명, 1~2주)</strong> — 산정 오류 명시.</li>\n<li><strong>4단계 — 진정·민사 (1~3개월)</strong> — 고용노동부 1350 진정 또는 민사 청구.</li>\n<li><strong>5단계 — 판결·합의 (6~12개월)</strong> — 차액 + 연 6% 지연이자.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">중간정산 재정산 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 정산 자료 + 임금 자료 두 갈래입니다.</strong></p>\n<ul>\n<li><strong>중간정산 신청서·정산서·통장 입금 내역</strong> — 정산 금액·시점.</li>\n<li><strong>정산 직전 6개월 급여명세서</strong> — 평균임금·통상임금 산정 자료.</li>\n<li><strong>근로계약서·취업규칙·상여 규정</strong> — 정기상여 정기·고정성 입증.</li>\n<li><strong>식대·교통비·직책수당 지급 이력</strong> — 통상임금 산입 자료.</li>\n<li><strong>합의서·정산 동의서 사본</strong> — 효력 다툼 자료.</li>\n<li><strong>입사일·중간정산일 인사기록카드</strong> — 근속연수 산정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정기상여가 통상임금에 산입되면 평균임금이 10~20% 상승하는 사례가 많아 \'차액\'이 예상보다 큰 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"합의서 사인했으니 끝" 주장 반박</strong> — 강행규정 위반·명백한 산정 오류는 합의 효력 다툼.</li>\n<li><strong>"정기상여 통상임금 아님" 주장 반박</strong> — 정기·고정성 자료가 있으면 산입 영역(대법원 2010다100806).</li>\n<li><strong>"식대는 실비변상" 주장 반박</strong> — 일률·정기 지급이면 통상임금 자료.</li>\n<li><strong>"3년 지났다" 시효 주장 반박</strong> — 중간정산일 기준 3년. 청구 시점에 맞춰 시효 점검.</li>\n<li><strong>형사 처벌 자료</strong> — 차액 미지급은 임금체불 영역. 3년 이하 징역 또는 3천만원 이하 벌금.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong> — 임금체불 진정.</li>\n<li><strong>대한법률구조공단 132</strong> — 퇴직금·통상임금 무료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직금 합의 효력의 한계',
        summary:
          '대법원 2010다99279 사건(대법원, 2012.10.11 선고)에서 법원은 사용자와 근로자가 퇴직금에 관해 합의를 하더라도 강행규정인 근로자퇴직급여보장법에서 정한 산정 기준(평균임금·근속연수)을 위반하여 산정한 부분에 대해서는 합의가 무효이고, 차액에 대한 추가 청구가 가능하다고 판시했습니다.',
        takeaway: '합의서가 있더라도 명백한 산정 오류·강행규정 위반은 합의 효력 다툼 가능 영역. 정기상여·식대·직책수당 누락이 가장 흔한 사례입니다.',
      },
    ],
    faq: [
      {
        question: '중간정산 받은 지 4년 됐어요',
        answer:
          '<strong>임금채권 시효 3년 도과 영역입니다.</strong> 다만 새로 발견한 사정·사용자 측 자백 자료 있으면 시효 회복 다툼이 가능한 사례. 132 자문 검토.',
      },
      {
        question: '정기상여가 통상임금에 안 들어가 있어요',
        answer:
          '<strong>정기·고정성 자료가 있으면 산입 가능합니다.</strong> 대법원 2010다100806 영역. 차액이 평균임금에 반영되면 효과가 큽니다.',
      },
      {
        question: '회사가 \"본인이 신청한 금액\"이라 추가 지급 거부합니다',
        answer:
          '<strong>강행규정 위반은 합의로 면제 불가 영역입니다.</strong> 산정 오류 명시한 내용증명·진정으로 다툼 트랙 열 수 있습니다.',
      },
      {
        question: '식대·교통비도 통상임금에 들어가나요?',
        answer:
          '<strong>일률·정기 지급이면 산입 자료입니다.</strong> 모든 근로자에게 동일 금액·매월 지급되는 사례. 지급 이력 자료 보존.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 미지급 진정', href: '/guide/retirement/retirement-statute-of-limitations' },
      { label: '통상임금 재산정 효과', href: '/guide/retirement/retirement-weekly-holiday-pay-included' },
      { label: '퇴직금 시효 도과', href: '/guide/retirement/retirement-statute-expired-revival' },
      { label: '근속연수 계산', href: '/guide/retirement/retirement-trial-period-included' },
      { label: '퇴직금 미지급 대지급금', href: '/guide/retirement/retirement-unpaid-guarantee-fund-simple' },
    ],
  },

  // ─── 5. retirement / retirement-foreign-worker-departure-payout-track ───
  {
    domain: 'retirement',
    slug: 'retirement-foreign-worker-departure-payout-track',
    keyword: '외국인 근로자 출국 시 퇴직금',
    questionKeyword: '비자 만료로 곧 출국하는데 회사가 퇴직금 \"한국 떠나면 못 받는다\"고 합니다. 사실인가요?',
    ctaKeyword: '외국인 퇴직금 청구 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '외국인 근로자 출국 시 퇴직금 — 5단계 청구 트랙 | 로앤가이드',
      description:
        '비자 만료로 출국 예정이거나 이미 출국한 외국인 근로자가 받지 못한 퇴직금을 청구하는 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"E-9 비자로 5년 일했어요. 만료 한 달 전인데 회사가 \'한국에서 받지 못한 임금·퇴직금은 출국하면 청구하기 어렵다\'며 정산서를 미루고 있습니다. 본국 가족도 \'한국 가서 청구하기 어려우니 그냥 받지 말자\'고 하지만, 5년치 퇴직금이라 포기하기 어렵습니다." 외국인 근로자도 근로자퇴직급여보장법 적용 대상이고, 국적·체류자격과 무관하게 1년 이상 근속 시 퇴직금 청구권이 인정되는 영역입니다. 출국 후에도 본국 주소·계좌 정보로 국외 송금 청구가 가능하고, 위임장·인감·여권 사본을 통해 국내 대리인이 진정·청구를 대행하는 트랙이 있는 사례입니다. 대법원 2014다82354 사건은 외국인 근로자도 한국 노동법상 임금·퇴직금 청구권이 동일하게 적용된다고 본 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 외국인 출국 후 퇴직금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 근속연수·평균임금·청구권자·시효·국외 송금 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 근속 1년 이상 여부</strong> — 입사일·퇴사일 기준. 1년 미만이면 퇴직금 대상 아님. 1년 + 1일 이상이면 발생.</li>\n<li><strong>② 평균임금 산정</strong> — 퇴직 전 3개월 임금 ÷ 3개월 일수. 통상임금 산입 자료(정기상여·식대) 점검.</li>\n<li><strong>③ 청구권자 (본인·위임 대리인)</strong> — 본인 직접 또는 국내 대리인(외국인노동자지원센터·법률구조공단·노무사). 위임장·인감·여권 사본 필요.</li>\n<li><strong>④ 임금채권 시효 3년</strong> — 퇴직일로부터 3년. 출국 후에도 시효 진행되는 영역.</li>\n<li><strong>⑤ 국외 송금 트랙</strong> — 본국 계좌 송금 가능. 또는 출국공항출장소 사전 정산 활용 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'한국 떠나면 못 받는다\'는 회사 주장은 잘못된 영역. 출국 후에도 본국 주소·계좌로 청구·송금이 가능하고, 국내 무료 지원 기관이 대행하는 사례가 일반적입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 출국 전·후 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 출국 전 정산 + 출국 후 진정·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 출국 전 자료 백업 (출국 1~2주 전)</strong> — 근로계약서·급여명세서·통장 입금 내역·여권·외국인등록증 사본. 디지털로 백업.</li>\n<li><strong>2단계 — 출국 전 회사 정산 요구 (내용증명, 출국 1주 전)</strong> — 미지급 임금·퇴직금 명시.</li>\n<li><strong>3단계 — 출국 후 국내 대리인 위임 (귀국 후 즉시)</strong> — 외국인노동자지원센터(1644-0644)·132·노무사에 위임. 위임장·인감·여권 사본 송부.</li>\n<li><strong>4단계 — 고용노동부 진정 또는 민사 청구</strong> — 1350 진정 또는 소액사건. 사용자 답변·송치까지 1~3개월.</li>\n<li><strong>5단계 — 본국 계좌 송금 (판결·합의 후 1~2개월)</strong> — 사용자 의무 이행. 미이행 시 강제집행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">외국인 출국 후 퇴직금 청구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 출국 전·후 갈래입니다.</strong></p>\n<ul>\n<li><strong>여권·외국인등록증·체류자격 사본</strong> — 신원 입증.</li>\n<li><strong>근로계약서·급여명세서 12개월</strong> — 근속·평균임금 산정.</li>\n<li><strong>통장 입금 내역 (국내 계좌)</strong> — 임금 지급 이력.</li>\n<li><strong>입사일·퇴사일 인사기록카드</strong> — 근속연수.</li>\n<li><strong>위임장·인감 (출국 후 대리인 위임)</strong> — 국내 대행자 권한 부여.</li>\n<li><strong>본국 계좌 정보 (국제 송금용)</strong> — 정산금 수령.</li>\n<li><strong>통역 지원 신청서</strong> — 진정·소송 시 모국어 통역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 출국 전 외국인노동자지원센터에 들러 모국어 상담 + 위임장 양식을 미리 작성해두면 출국 후 지연이 줄어드는 사례가 많습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"한국 떠나면 못 받는다" 주장 반박</strong> — 출국 후에도 본국 주소·계좌로 청구·송금 가능 영역.</li>\n<li><strong>"1년 미만 근속" 주장 반박</strong> — 입사일·퇴사일·중간 휴직 기간을 인사기록카드로 정확히 확인.</li>\n<li><strong>"외국인은 적용 대상 아님" 주장 반박</strong> — 국적·체류자격과 무관(대법원 2014다82354).</li>\n<li><strong>"평균임금이 낮다" 주장 반박</strong> — 통상임금 산입 정기상여·식대 누락 확인.</li>\n<li><strong>대지급금 (간이대지급금·도산대지급금)</strong> — 사용자 도산·체불 시 국가가 일부 선지급. 1350 진정 시 안내.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>외국인노동자지원센터 1644-0644</strong> — 모국어 상담·위임 대행.</li>\n<li><strong>고용노동부 1350</strong> — 임금체불·퇴직금 진정.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 외국인 근로자 근로기준법·퇴직급여법 적용',
        summary:
          '대법원 2014다82354 사건(대법원, 2015.07.23 선고)에서 법원은 외국인 근로자도 근로기준법상 \'근로자\'에 해당하면 임금·퇴직금·연차수당 청구권이 동일하게 인정되며, 체류자격 유무가 근로기준법·근로자퇴직급여보장법 적용 여부를 결정하지 않는다고 판시했습니다. 같은 법리는 출국 후 본국에서 청구하는 사안에도 동일하게 적용되는 영역입니다.',
        takeaway: '외국인 출국 후에도 한국 노동법 적용은 유지되는 영역. 위임 대행을 통한 진정·민사 트랙이 가능한 사례가 일반적입니다.',
      },
    ],
    faq: [
      {
        question: '출국 후에 한국 변호사·노무사 어떻게 찾나요?',
        answer:
          '<strong>외국인노동자지원센터(1644-0644)·법률구조공단(132) 위임 대행 가능합니다.</strong> 위임장·여권 사본 우편·이메일 송부로 절차 진행.',
      },
      {
        question: '본국 계좌로 송금 받을 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 국제 송금 트랙. 사용자 측이 거부 시 강제집행 또는 외환 송금 협조 의무 명시 자료.',
      },
      {
        question: '귀국한 지 2년 됐어요. 아직 청구 가능한가요?',
        answer:
          '<strong>임금채권 시효 3년 내라면 가능합니다.</strong> 퇴직일 기준 3년. 시효 도과 임박 시 즉시 진정 검토.',
      },
      {
        question: '회사가 폐업해서 사용자가 없어졌어요',
        answer:
          '<strong>간이대지급금·도산대지급금 트랙 검토 가능합니다.</strong> 국가가 일부 선지급 후 사업주에게 구상. 1350·근로복지공단 안내.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 시효 도과', href: '/guide/retirement/retirement-statute-expired-revival' },
      { label: '대지급금 신청', href: '/guide/retirement/retirement-unpaid-guarantee-fund-simple' },
      { label: '근속연수 계산', href: '/guide/retirement/retirement-under-1-year-continuous-service-claim' },
      { label: '외국인 미지급 임금', href: '/guide/wage/wage-unpaid-foreign-worker' },
      { label: '외국인 부당해고', href: '/guide/dismissal/dismissal-foreign-worker-visa-end-fired-relief' },
    ],
  },
];
