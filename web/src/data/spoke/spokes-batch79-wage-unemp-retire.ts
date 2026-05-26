import { SpokePage } from '../spoke-pages';

// batch79 wage / unemployment / retirement — 6개 (2026-05-27)
//
// 고유 존재 이유:
// wage 1. 주 연장근로 12시간 한도 위반 — 일반 연장수당 류와 분기. 여기는 '1주 40시간 초과분 기준 12시간 한도 판단 + 1일 8시간 무관 + 한도 위반 가산수당' 트랙. 근기법 제53조·제56조 결합.
// wage 2. 실비변상 명목 수당 통상임금 — 일반 통상임금 산입 류와 분기. 여기는 '근무일마다 정액 지급 실비변상 명목 수당의 임금성·통상임금 포함 여부' 트랙. 근기법 제2조·제56조 결합.
// unemployment 3. 급여 반납 동의 거부 자진퇴사 — 일반 임금삭감 자진퇴사 류와 분기. 여기는 '사업주 급여 반납 요구 거부 + 사직서 일괄제출 종용 + 장래 근로조건 저하 확정' 트랙. 고용보험법 제40조·제58조 결합.
// unemployment 4. 수급 신청 직전 단기근로 상용근로자 판정 — 일반 부정수급 류와 분기. 여기는 '신청 직전 1개월 단기근로가 부정수급인지 + 일용/상용 판정 + 지급제한·반환 다툼' 트랙. 고용보험법 제40조·제61조 결합.
// retirement 5. 목표 인센티브·EVA 성과급 평균임금 — 일반 성과급 평균임금 류와 분기. 여기는 '사업부 성과·경제적 부가가치(EVA) 연동 성과급의 근로 대가성·평균임금 산입' 트랙. 근퇴법 제8조+근기법 평균임금 결합.
// retirement 6. 퇴직금 소멸시효 신의칙 — 일반 소멸시효 류와 분기. 여기는 '사용자 소멸시효 항변이 신의칙·권리남용에 반하는지 + 시효 완성 후 청구 회생' 트랙. 근퇴법 제10조+민법 신의칙 결합.

export const spokesBatch79WageUnempRetire: SpokePage[] = [
  // ─── 1. wage-weekly-overtime-12hour-limit-premium-track ───
  {
    domain: 'wage',
    slug: 'wage-weekly-overtime-12hour-limit-premium-track',
    keyword: '주 연장근로 12시간 한도 위반 가산수당',
    questionKeyword: '1주에 40시간을 한참 넘겨 일했는데 회사가 하루 8시간 기준으로만 연장수당을 계산해줘요. 1주 12시간 한도 기준으로 다시 받을 수 있나요?',
    ctaKeyword: '주 연장근로 12시간 한도 위반 가산수당 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '주 연장근로 12시간 한도 — 5단계 가산수당 점검 | 로앤가이드',
      description:
        '1주 근로가 한도를 한참 넘겼는데 회사가 하루 8시간 기준으로만 계산해 연장수당이 적게 들어와 답답하시다면 1주 40시간·12시간 한도와 가산수당 차액 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"주중에 일이 몰리면 1주 근로시간이 50시간을 훌쩍 넘기는 일이 잦은 사업장에 다니는 근로자입니다. 회사는 \'하루 8시간을 넘긴 부분만 연장근로\'라며 그 시간만 가산수당을 계산해주는데, 정작 1주 전체로 보면 40시간을 훨씬 초과하고 1주 12시간 한도도 넘긴 주가 여러 번이었어요. 어떤 주는 토요일까지 나와 일했는데도 정작 받은 연장수당은 얼마 되지 않아 계산이 맞는지 막막한 상태예요." 근로기준법 제53조 제1항은 당사자 합의가 있어도 1주 12시간을 한도로만 근로시간을 연장할 수 있도록 정하고, 제56조는 연장근로에 통상임금의 50% 이상 가산을 규정하는 영역입니다. 1주 40시간 또는 1일 8시간을 넘긴 부분이 연장근로로 산정되고, 한도를 넘긴 연장근로에도 가산수당 청구가 검토되는 트랙입니다. 근로자라면 ① 근로시간 기록 ② 1주 연장시간 산정 ③ 가산수당 차액 ④ 청구·진정 ⑤ 시효 관리 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 기록 ② 산정 ③ 차액 ④ 청구 ⑤ 시효 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 주 연장근로 12시간 한도 가산수당 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 기록·산정·차액·청구·시효 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 근로시간 기록 확인</strong> — 주별 출퇴근 기록·근무표로 1주 실근로시간 정리.</li>\n<li><strong>② 1주 연장시간 산정</strong> — 1주 40시간 또는 1일 8시간 초과분을 기준으로 연장근로시간 계산.</li>\n<li><strong>③ 가산수당 차액 산정</strong> — 연장근로분에 통상임금 × 50% 가산 적용, 기지급액과 차액 계산.</li>\n<li><strong>④ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정.</li>\n<li><strong>⑤ 시효 관리</strong> — 임금 청구 시효 3년·소멸 도과 위험 관리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 1주 40시간 또는 1일 8시간을 넘긴 부분이 연장근로로 산정되고, 합의가 있어도 1주 12시간을 넘긴 연장근로에도 가산수당 청구를 검토해볼 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 주 연장근로 가산수당 5단계',
        content:
          '<p><strong>A. 고용노동부·근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근로시간 자료 보존 (즉시)</strong> — 주별 출퇴근 기록·근무표·통상임금 산정 자료 확보.</li>\n<li><strong>2단계 — 1주 연장시간 산정 (1~2주)</strong> — 주별 40시간·1일 8시간 초과분 집계, 12시간 한도 초과 주 식별.</li>\n<li><strong>3단계 — 가산수당 차액 산정 (2~3주)</strong> — 연장근로분 통상임금 × 50% 기준 재계산·기지급 차액 도출.</li>\n<li><strong>4단계 — 고용노동부 진정 또는 회사 청구 (시효 3년 내)</strong> — 1350 진정 또는 내용증명 발송.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의 협상.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 야근수당 신고 가능성, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">주 연장근로 12시간 한도 위반 가산수당 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 기록·산정·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>주별 출퇴근 기록 (지문·카드·근태시스템)</strong></li>\n<li><strong>근무표·교대표 (주별 배정 시간)</strong></li>\n<li><strong>임금명세서 (연장수당 산정 내역)</strong></li>\n<li><strong>근로계약서·취업규칙 (소정근로시간·통상임금)</strong></li>\n<li><strong>1주 연장근로시간 집계표 (40시간 초과분)</strong></li>\n<li><strong>가산수당 차액 산정표 (통상임금 × 50%)</strong></li>\n<li><strong>회사 회신·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 1주 40시간 또는 1일 8시간을 넘긴 부분이 연장근로로 산정되는 영역. 주별 출퇴근 기록과 근무표가 연장근로 입증의 핵심 자료입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>연장근로 산정 기준</strong> — 1주 40시간 초과분 기준인지, 1일 8시간 초과 합산인지.</li>\n<li><strong>12시간 한도 초과</strong> — 한도를 넘긴 연장근로에도 가산수당이 청구되는지.</li>\n<li><strong>통상임금 범위</strong> — 가산수당 계산 기초인 통상임금에 포함되는 수당 범위.</li>\n<li><strong>근로시간 입증</strong> — 출퇴근 기록이 없을 때의 입증 방법.</li>\n<li><strong>시효 관리</strong> — 임금 청구 시효 3년·소멸 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (임금체불 신고)</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 임금체불 진정 온라인 (moel.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 연장근로시간의 산정과 임금 지급 시간 평가',
        summary:
          '대법원 2022다257238(대법원, 2025.07.18 선고) 영역에서 법원은 근로자와 사용자가 정한 1주의 근로시간이 40시간을 초과하거나 1일의 근로시간이 8시간을 초과하는 경우 그 초과 부분이 연장근로시간에 해당함을 전제로 임금 지급 대상 시간을 가린 사례 흐름이 있으며, 1주 연장근로에 대한 가산수당 차액을 검토할 때에도 40시간·8시간 초과분을 기준으로 연장근로시간을 산정하는 기준을 살펴볼 수 있습니다.',
        takeaway: '1주 40시간·1일 8시간 초과분이 연장근로시간으로 산정되는 영역 — 연장근로 가산수당 차액 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '회사가 하루 8시간 기준으로만 연장수당을 줬어요',
        answer:
          '<strong>1주 40시간을 넘긴 부분도 연장근로로 산정해볼 수 있는 영역입니다.</strong> 주별 출퇴근 기록 정리가 먼저.',
      },
      {
        question: '1주 12시간을 넘겨 일했는데도 가산수당을 받나요?',
        answer:
          '<strong>한도를 넘긴 연장근로에도 가산수당 청구를 검토해볼 수 있는 영역입니다.</strong> 한도 위반과 임금 청구는 별개로 정리.',
      },
      {
        question: '1주 연장시간은 어떻게 계산하나요?',
        answer:
          '<strong>1주 40시간 또는 1일 8시간을 넘긴 부분이 연장근로시간인 영역입니다.</strong> 주별·일별 실근로시간을 함께 정리.',
      },
      {
        question: '출퇴근 기록이 부실한데 입증할 수 있나요?',
        answer:
          '<strong>근무표·교대표·메신저 지시 등으로 보완해볼 수 있는 영역입니다.</strong> 주별 시간 자료를 최대한 수집.',
      },
      {
        question: '연장수당 차액은 몇 년치까지 청구하나요?',
        answer:
          '<strong>임금 청구 시효는 3년인 영역입니다.</strong> 지급일로부터 3년 내 차액 청구 가능.',
      },
    ],
    cta: { text: '야근수당 신고 가능성, AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '주52시간 초과 연장수당', href: '/guide/wage/wage-overtime-over-weekly-52' },
      { label: '연장근로수당 청구', href: '/guide/wage/wage-overtime-unpaid-claim' },
      { label: '야간 연장 정확한 계산법', href: '/guide/wage/wage-night-overtime-exact-calculation' },
      { label: '야근수당 증거 5가지', href: '/guide/wage/overtime-no-pay-evidence-5-types' },
      { label: '임금체불 진정 서류', href: '/guide/wage/unpaid-wage-complaint-docs' },
    ],
  },

  // ─── 2. wage-daily-expense-allowance-ordinary-wage-track ───
  {
    domain: 'wage',
    slug: 'wage-daily-expense-allowance-ordinary-wage-track',
    keyword: '실비변상 명목 일비 통상임금 산입',
    questionKeyword: '근무일마다 \'실비변상\' 명목으로 정해진 금액을 받았는데, 회사가 이건 임금이 아니라며 통상임금에서 빼요. 통상임금에 넣어 다시 계산할 수 있나요?',
    ctaKeyword: '실비변상 명목 일비 통상임금 산입 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '실비변상 명목 일비 통상임금 — 5단계 산입 점검 | 로앤가이드',
      description:
        '근무일마다 실비변상 명목으로 받은 일비가 통상임금에서 빠져 가산수당이 줄어든 것 같아 답답하시다면 임금성·통상임금 산입과 차액 재산정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"근무하는 날마다 \'실비변상\' 또는 \'일비\' 명목으로 정해진 금액을 꼬박꼬박 받아온 근로자입니다. 실제로는 그 돈을 특정 비용으로 쓰는지 여부와 상관없이 출근만 하면 같은 금액이 일률적으로 지급됐고, 명세서에도 매달 거의 동일하게 찍혔어요. 그런데 연장·야간수당을 정산할 때 회사는 \'이건 실비변상이라 임금이 아니다\'라며 이 금액을 통상임금에서 빼고 계산했습니다. 정작 실비라고 볼 만한 근거도 없는데 이대로 빠져도 되는 건지 막막한 상태예요." 근로기준법 제2조는 임금을 근로의 대가로 지급하는 금품으로 정하고, 제56조는 연장·야간·휴일 근로에 통상임금의 50% 이상 가산을 규정하는 영역입니다. 실제 비용 사용 여부와 무관하게 근무일마다 일정액이 정기적·일률적으로 지급됐다면 명목이 \'실비변상\'이어도 임금·통상임금 산입이 검토되는 트랙입니다. 근로자라면 ① 지급 내역 ② 실비성·임금성 평가 ③ 통상임금 재산정 ④ 차액 청구 ⑤ 시효 관리 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 내역 ② 성격 ③ 재산정 ④ 청구 ⑤ 시효 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 실비변상 명목 일비 통상임금 산입 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 내역·성격·재산정·청구·시효 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 지급 내역 확인</strong> — 일비·실비변상 명목 금액의 지급 주기·금액·일률성 정리.</li>\n<li><strong>② 실비성·임금성 평가</strong> — 실제 비용 사용 여부와 무관하게 정기·일률 지급됐는지 검토.</li>\n<li><strong>③ 통상임금 재산정</strong> — 임금성 인정 시 해당 금액을 포함한 통상임금 재계산.</li>\n<li><strong>④ 차액 청구·진정 (시효 3년)</strong> — 가산수당 등 차액을 회사 청구 또는 1350 진정.</li>\n<li><strong>⑤ 시효 관리</strong> — 임금 청구 시효 3년·소멸 도과 위험 관리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 실제로 그 명목의 비용으로 쓰이는지를 묻지 않고 근무일마다 일정액을 정기·일률적으로 지급했다면 \'실비변상\' 명목만으로 임금·통상임금에서 제외하기 어려운 영역. 지급의 실질로 임금성을 검토해볼 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 실비변상 명목 일비 통상임금 5단계',
        content:
          '<p><strong>A. 고용노동부·근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 지급 내역·명세서 보존 (즉시)</strong> — 일비·실비변상 지급 내역·임금명세서·지급 규정 확보.</li>\n<li><strong>2단계 — 실비성·일률성 정리 (1~2주)</strong> — 비용 정산 절차 유무·정기·일률 지급 정황 정리.</li>\n<li><strong>3단계 — 통상임금 재산정 (2~3주)</strong> — 임금성 인정 시 통상임금 재계산·가산수당 차액 도출.</li>\n<li><strong>4단계 — 고용노동부 진정 또는 회사 청구 (시효 3년 내)</strong> — 1350 진정 또는 내용증명 발송.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의 협상.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">실비변상 명목 일비 통상임금 산입 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 내역·성격·재산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>일비·실비변상 지급 내역 (월별·일별)</strong></li>\n<li><strong>임금명세서 (해당 항목 표기)</strong></li>\n<li><strong>지급 규정·취업규칙 (실비변상 지급 기준)</strong></li>\n<li><strong>비용 정산·영수증 절차 유무 자료</strong></li>\n<li><strong>근로계약서 (통상임금 구성 항목)</strong></li>\n<li><strong>통상임금 재산정·가산수당 차액 산정표</strong></li>\n<li><strong>회사 회신·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 영수증 제출이나 비용 정산 절차 없이 출근만 하면 같은 금액이 지급됐다면 실비변상이라기보다 임금에 가까운 영역. 지급 규정과 명세서로 정기·일률성을 정리하는 것이 출발점입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>실비변상 여부</strong> — 실제 비용 정산 절차가 있는지가 임금성 판단의 분기점.</li>\n<li><strong>정기성·일률성</strong> — 근무일마다 일정액이 일률적으로 지급됐는지.</li>\n<li><strong>통상임금 산입</strong> — 임금성 인정 시 통상임금 포함 여부.</li>\n<li><strong>가산수당 영향</strong> — 통상임금 증가에 따른 연장·야간수당 차액.</li>\n<li><strong>시효 관리</strong> — 임금 청구 시효 3년·소멸 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (임금체불 신고)</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 임금체불 진정 온라인 (moel.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 실비변상 명목 정액 지급 금품의 임금·통상임금성 평가',
        summary:
          '대법원 2014다27807(대법원, 2019.04.23 선고) 영역에서 법원은 사용자가 근로자들에게 실제로 그 해당 명목으로 사용되는지를 불문하고 근무일마다 실비 변상 명목으로 일정 금액을 지급하는 경우 이를 실비 변상에 해당한다는 이유로 임금 또는 통상임금에서 제외할 수 없다고 판단한 사례 흐름이 있으며, 실비변상 명목 일비의 통상임금 산입을 검토할 때에도 동일한 기준을 살펴볼 수 있습니다.',
        takeaway: '명목과 무관하게 정기·일률 지급되면 통상임금 산입이 검토되는 영역 — 통상임금 재산정·가산수당 차액 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '실비변상이라는데 통상임금에 넣을 수 있나요?',
        answer:
          '<strong>실제 비용 사용과 무관하게 정기·일률 지급됐다면 임금성 검토가 가능한 영역입니다.</strong> 지급 내역·명세서 정리가 먼저.',
      },
      {
        question: '영수증을 낸 적이 없는데 실비변상인가요?',
        answer:
          '<strong>비용 정산 절차가 없다면 실비변상으로 보기 어려운 영역입니다.</strong> 정산·영수증 절차 유무를 확인.',
      },
      {
        question: '통상임금에 들어가면 무엇이 달라지나요?',
        answer:
          '<strong>통상임금이 늘면 연장·야간·휴일 가산수당 차액이 생길 수 있는 영역입니다.</strong> 가산수당 재산정으로 차액 도출.',
      },
      {
        question: '회사는 임금이 아니라고 명세서에 적었는데요?',
        answer:
          '<strong>명목이 아니라 지급의 실질로 임금성을 판단하는 영역입니다.</strong> 정기·일률 지급 정황을 정리.',
      },
      {
        question: '차액 청구 시효는 얼마인가요?',
        answer:
          '<strong>임금 청구 시효는 3년인 영역입니다.</strong> 지급일로부터 3년 내 차액 청구 가능.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '식대 통상임금 포함', href: '/guide/wage/wage-meal-expense-ordinary-wage' },
      { label: '자가운전보조금 통상임금', href: '/guide/wage/wage-self-driving-allowance-ordinary-wage' },
      { label: '출장수당 통상임금', href: '/guide/wage/wage-business-trip-allowance-ordinary-wage-track' },
      { label: '정기상여 통상임금 산입', href: '/guide/wage/wage-regular-bonus-ordinary-wage-track' },
      { label: '연장근로수당 청구', href: '/guide/wage/wage-overtime-unpaid-claim' },
    ],
  },

  // ─── 3. unemployment-salary-cut-20percent-refusal-quit-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-salary-cut-20percent-refusal-quit-track',
    keyword: '급여 반납 20% 동의 거부 자진퇴사 실업급여',
    questionKeyword: '회사가 급여 20% 반납 동의서에 서명하라고 하고 사직서까지 일괄로 제출하라는데, 거부하고 퇴사하면 실업급여를 받을 수 있나요?',
    ctaKeyword: '급여 반납 동의 거부 자진퇴사 실업급여 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '급여 반납 거부 자진퇴사 — 5단계 실업급여 점검 | 로앤가이드',
      description:
        '회사의 급여 반납 요구와 사직서 일괄제출 종용을 거부하고 그만둘지 고민되어 막막하시다면 정당한 이직사유·근로조건 저하 입증과 수급요건 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"경영이 어렵다며 회사가 갑자기 급여 20% 반납 동의서에 서명하라고 요구한 직장에 다니던 근로자입니다. 동의하지 않으면 버티기 어려운 분위기였고, 사직서까지 일괄로 받아두려는 움직임이 있었어요. 반납에 동의하면 당장 생활이 흔들리고, 거부하자니 회사에 남기 어려운 처지라 결국 그만두게 됐는데, 이렇게 나오면 \'자발적 퇴사\'라 실업급여가 안 된다고 할까 봐 막막한 상태예요." 고용보험법 제40조는 구직급여 수급요건으로 이직 전 18개월 중 피보험단위기간 180일 이상과 비자발적 이직 등을 정하고, 제58조는 정당한 사유 없는 자발적 이직을 수급 제한사유로 두면서도 근로조건이 현저히 낮아진 경우 등은 수급이 제한되지 않는 정당한 이직사유로 보는 영역입니다. 급여가 상당 비율 줄어드는 근로조건 저하가 장래에 확정된 상황에서 이를 거부하고 이직했다면 수급 요건을 검토해볼 수 있는 트랙입니다. ① 사유 정리 ② 근로조건 저하 입증 ③ 수급요건 점검 ④ 신청·심사 ⑤ 불복 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 사유 ② 입증 ③ 요건 ④ 신청 ⑤ 불복 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 급여 반납 거부 자진퇴사 실업급여 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사유·입증·요건·신청·불복 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 이직사유 정리</strong> — 급여 반납 요구·사직서 일괄제출 종용 경위 시간순 정리.</li>\n<li><strong>② 근로조건 저하 입증</strong> — 반납 비율·저하 기간·장래 확정 여부 자료 수집.</li>\n<li><strong>③ 수급요건 점검</strong> — 피보험단위기간 180일·이직사유 정당성 점검.</li>\n<li><strong>④ 신청·심사</strong> — 고용센터에 수급자격 인정 신청, 이직사유 심사.</li>\n<li><strong>⑤ 불복 (처분 송달 후 90일 내)</strong> — 불인정 시 고용보험심사위원회 심사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형식상 사직이라도 급여가 상당 비율 줄어드는 근로조건 저하가 장래에 확정된 상황을 거부하고 이직했다면 정당한 이직사유에 해당하는지 검토해볼 수 있는 영역. 반납 요구 경위와 저하 정도가 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 급여 반납 거부 자진퇴사 5단계',
        content:
          '<p><strong>A. 고용노동부·고용보험 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 이직 경위 자료 보존 (즉시)</strong> — 급여 반납 동의서·공지·이메일·사직서 종용 정황 확보.</li>\n<li><strong>2단계 — 근로조건 저하 정리 (신속)</strong> — 반납 비율·저하 기간·장래 확정 여부 정리.</li>\n<li><strong>3단계 — 수급자격 인정 신청</strong> — 고용센터에 신청서 + 이직확인서 + 소명 자료 제출.</li>\n<li><strong>4단계 — 이직사유 심사</strong> — 정당한 이직사유 해당 여부 심사.</li>\n<li><strong>5단계 — 심사 청구 (처분 송달 후 90일 내)</strong> — 불인정 시 고용보험심사위원회에 심사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">급여 반납 거부 자진퇴사 실업급여 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사유·입증·신청 갈래입니다.</strong></p>\n<ul>\n<li><strong>급여 반납 동의서·사내 공지 (반납 비율 명시)</strong></li>\n<li><strong>사직서 일괄제출 종용 정황 (이메일·메신저·진술)</strong></li>\n<li><strong>반납 전후 임금명세서 (저하 비율 비교)</strong></li>\n<li><strong>이직확인서·고용보험 피보험 내역</strong></li>\n<li><strong>이직 경위 소명서 (반납 거부·저하 확정)</strong></li>\n<li><strong>수급자격 인정 신청서 (고용센터 양식)</strong></li>\n<li><strong>심사 청구서 (불인정 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 급여 반납이 일시적 협조가 아니라 일정 기간 이상 이어지는 근로조건 저하로 장래에 확정됐다는 점이 정당한 이직사유 검토의 핵심. 반납 비율과 적용 기간이 드러나는 공지·동의서를 확보해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>근로조건 저하 정도</strong> — 반납 비율·기간이 정당한 이직사유 기준에 이르는지.</li>\n<li><strong>장래 확정성</strong> — 저하가 일시적인지, 장래에 이어질 것으로 확정됐는지.</li>\n<li><strong>사직의 실질</strong> — 자발적 사직 형식이지만 종용·압박 정황이 있었는지.</li>\n<li><strong>피보험단위기간</strong> — 이직 전 18개월 중 180일 이상 충족 여부.</li>\n<li><strong>심사 기한</strong> — 불인정 처분 송달 후 90일 내 심사 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부·고용보험 1350</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>거주지 관할 고용센터 (수급자격 신청)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '재결례 — 급여 반납 요구·사직서 종용에 따른 근로조건 저하 평가',
        summary:
          '고용보험심사위원회 2020재결 제162호(고용보험심사위원회, 2020.10.28 선고) 영역에서 위원회는 사업주의 급여 반납 요청 등으로 근로조건 저하가 2개월 이상 발생할 것이 장래에 확정된 경우로 보아 수급자격을 인정하는 취지로 판단한 사례 흐름이 있으며, 급여 반납을 거부하고 이직한 경우의 정당한 이직사유를 검토할 때에도 근로조건 저하의 정도와 장래 확정성을 살펴볼 수 있습니다.',
        takeaway: '급여 반납 등 근로조건 저하가 장래에 확정된 이직은 수급 요건을 검토해볼 수 있는 영역 — 소명·심사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '급여 반납을 거부하고 그만두면 자발적 퇴사인가요?',
        answer:
          '<strong>형식은 사직이라도 근로조건 저하가 확정됐다면 정당한 이직사유를 검토할 수 있는 영역입니다.</strong> 반납 경위·비율 정리가 먼저.',
      },
      {
        question: '반납 비율이 얼마나 돼야 인정 검토가 되나요?',
        answer:
          '<strong>저하 비율과 적용 기간이 함께 평가되는 영역입니다.</strong> 반납 전후 명세서로 저하 정도를 정리.',
      },
      {
        question: '사직서를 일괄로 내라고 했어요',
        answer:
          '<strong>종용·압박 정황은 사직의 실질을 다투는 자료가 될 수 있는 영역입니다.</strong> 공지·이메일·메신저를 확보.',
      },
      {
        question: '피보험단위기간은 며칠이 필요하나요?',
        answer:
          '<strong>이직 전 18개월 중 180일 이상이 기본 요건인 영역입니다.</strong> 고용보험 피보험 내역으로 확인.',
      },
      {
        question: '수급자격을 못 받으면 어떻게 하나요?',
        answer:
          '<strong>처분 송달 후 90일 내 심사를 청구해볼 수 있는 영역입니다.</strong> 소명 자료로 이직사유를 보강.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '임금 10% 삭감 자진퇴사', href: '/guide/unemployment/unemployment-wage-cut-10percent-quit' },
      { label: '임금삭감 자진퇴사', href: '/guide/unemployment/unemployment-wage-cut-voluntary-quit' },
      { label: '근로시간 30% 단축 자진퇴사', href: '/guide/unemployment/unemployment-working-hours-cut-30percent-quit' },
      { label: '자발적 퇴사 예외 총정리', href: '/guide/unemployment/unemployment-voluntary-quit-exception-comprehensive' },
      { label: '수급 거부 이의 절차', href: '/guide/unemployment/unemployment-benefit-rejection-appeal-procedure' },
    ],
  },

  // ─── 4. unemployment-short-work-unreport-regular-worker-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-short-work-unreport-regular-worker-track',
    keyword: '수급 신청 직전 근로 상용근로자 부정수급 판단',
    questionKeyword: '실업급여 신청 직전에 며칠 일한 게 있는데 부정수급이라며 지급제한·반환명령이 나왔어요. 저는 일용이 아니라 상용근로자인데 다툴 수 있나요?',
    ctaKeyword: '수급 신청 직전 근로 상용근로자 부정수급 판단 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '신청 직전 근로 부정수급 — 5단계 상용 판정 점검 | 로앤가이드',
      description:
        '실업급여 신청 직전 짧은 근로 때문에 부정수급 지급제한·반환명령 처분이 나와 막막하시다면 일용·상용 판정과 소명·심사 대응 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"실업급여를 신청하기 직전에 짧게 며칠 일한 적이 있는 사람입니다. 그 근로를 따로 신고하지 않았다는 이유로 고용센터에서 \'부정수급\'이라며 지급제한과 반환명령 처분을 받았어요. 그런데 그 근무는 일용직이 아니라 한 사업장에 소속돼 정해진 시간에 출근하던 상용근로 형태였고, 일용근로자에게 적용되는 \'신청일 이전 일정 기간 근로내역이 없을 것\'이라는 기준을 그대로 적용하는 게 맞는지 막막한 상태예요." 고용보험법 제40조는 구직급여 수급요건을, 제61조는 거짓이나 부정한 방법으로 받은 경우의 지급 제한을 정하는 영역입니다. 다만 일용근로자에게 적용되는 수급요건 기준을 상용근로자에게 그대로 적용할 수 있는지는 근로 형태의 실질로 판단되고, 신청 직전 근로가 곧바로 부정수급으로 이어지는 것은 아닌 트랙입니다. ① 처분 내용 확인 ② 일용·상용 판정 ③ 소명 자료 정리 ④ 이의·심사 ⑤ 반환·후속 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 확인 ② 판정 ③ 소명 ④ 불복 ⑤ 후속 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 신청 직전 근로 부정수급·상용 판정 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 처분확인·판정·소명·불복·후속 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 처분 내용 확인</strong> — 지급제한·반환명령 처분서의 사유·금액·근거 조문 확인.</li>\n<li><strong>② 일용·상용 판정</strong> — 신청 직전 근로가 일용인지 상용인지 근로 형태의 실질 정리.</li>\n<li><strong>③ 소명 자료 정리</strong> — 근로계약·근무형태·출근 기록 등 상용근로 정황 수집.</li>\n<li><strong>④ 이의·심사 청구 (송달 후 90일 내)</strong> — 고용보험심사위원회 심사 청구.</li>\n<li><strong>⑤ 반환·후속</strong> — 처분 유지 시 반환·분할납부, 취소 시 잔여 급여 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'신청일 이전 일정 기간 근로내역이 없을 것\'이라는 기준은 일용근로자에게 적용되는 요건. 신청 직전 근로가 상용근로 형태였다면 그 기준을 그대로 적용하기 어렵다고 다퉈볼 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신청 직전 근로 부정수급 처분 5단계',
        content:
          '<p><strong>A. 고용노동부·고용보험 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 처분서·근거 자료 확보 (송달 직후)</strong> — 지급제한·반환명령 처분서·사유·금액·근거 확인.</li>\n<li><strong>2단계 — 근로 형태 정리 (신속)</strong> — 신청 직전 근로의 근로계약·출근형태·지휘감독 정황 정리.</li>\n<li><strong>3단계 — 소명서·증빙 제출</strong> — 고용센터에 상용근로 정황 소명서·근로 자료 제출.</li>\n<li><strong>4단계 — 심사 청구 (송달 후 90일 내)</strong> — 고용보험심사위원회에 심사 청구.</li>\n<li><strong>5단계 — 반환·후속 협의</strong> — 처분 유지 시 반환·분할납부, 취소 시 잔여 급여 처리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 신청 순서, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">신청 직전 근로 상용근로자 부정수급 판단 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 처분·판정·불복 갈래입니다.</strong></p>\n<ul>\n<li><strong>지급제한·반환명령 처분서 (사유·금액·조문)</strong></li>\n<li><strong>신청 직전 근로의 근로계약서</strong></li>\n<li><strong>출근 기록·근무표 (상용근로 형태 입증)</strong></li>\n<li><strong>급여 지급 내역 (정기·고정급 여부)</strong></li>\n<li><strong>고용보험 피보험 내역·수급 내역</strong></li>\n<li><strong>상용근로 정황 소명서</strong></li>\n<li><strong>심사 청구서 (고용보험심사위원회 양식)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 처분서 송달일부터 심사 청구 기한(90일)이 진행되므로 수령일을 먼저 확인. 한 사업장에 소속돼 정해진 시간에 출근하고 고정급을 받았다면 상용근로 정황으로 소명서에 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>일용·상용 판정</strong> — 신청 직전 근로의 형태가 일용인지 상용인지가 처분의 분기점.</li>\n<li><strong>요건 적용 범위</strong> — 일용근로자 요건을 상용근로자에게 그대로 적용할 수 있는지.</li>\n<li><strong>부정 방법 해당</strong> — 신고 누락이 적극적 은폐인지 단순 누락인지.</li>\n<li><strong>심사 기한</strong> — 처분 송달 후 90일 내 심사 청구 필요.</li>\n<li><strong>반환·분할납부</strong> — 처분 유지 시 반환·분할납부 협의 가능 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부·고용보험 1350</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>거주지 관할 고용센터 (소명·심사 접수)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '재결례 — 신청 직전 단기근로의 일용·상용 판정과 부정수급 여부',
        summary:
          '고용보험심사위원회 2021재결 제172호(고용보험심사위원회, 2021.09.15 선고) 영역에서 위원회는 수급자격 신청일 이전 1개월 동안 10일을 근로했더라도 그 근로가 일용근로자가 아닌 상용근로자에 해당하므로 일용근로자에게 적용되는 요건을 들어 부정수급으로 본 지급제한·반환명령 처분을 취소하는 취지로 판단한 사례 흐름이 있으며, 신청 직전 근로의 부정수급 여부를 검토할 때에도 근로 형태의 실질을 살펴볼 수 있습니다.',
        takeaway: '신청 직전 근로가 상용근로 형태이면 일용 요건을 그대로 적용하기 어려운 영역 — 소명·심사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '신청 직전에 며칠 일했더니 부정수급이라는데요?',
        answer:
          '<strong>근로 형태가 일용인지 상용인지에 따라 평가가 달라질 수 있는 영역입니다.</strong> 처분서와 근로계약 정리가 먼저.',
      },
      {
        question: '일용 기준을 상용근로자에게 그대로 적용하나요?',
        answer:
          '<strong>일용근로자 요건을 상용근로자에게 그대로 적용하기 어렵다고 다퉈볼 수 있는 영역입니다.</strong> 출근형태·고정급 정황을 정리.',
      },
      {
        question: '상용근로라는 건 무엇으로 입증하나요?',
        answer:
          '<strong>근로계약·정해진 출근·고정급·지휘감독 정황이 입증 자료가 될 수 있는 영역입니다.</strong> 근무표·급여 내역 확보.',
      },
      {
        question: '처분에 불복하려면 언제까지 해야 하나요?',
        answer:
          '<strong>처분 송달 후 90일 내 심사를 청구해볼 수 있는 영역입니다.</strong> 처분서 수령일부터 기한 진행.',
      },
      {
        question: '처분이 유지되면 한 번에 다 갚아야 하나요?',
        answer:
          '<strong>반환 확정 시 분할납부 협의를 검토해볼 수 있는 영역입니다.</strong> 고용센터에 분할납부 절차 확인.',
      },
    ],
    cta: { text: '실업급여 신청 순서, AI로 먼저 정리하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '부정수급 환수 절차', href: '/guide/unemployment/unemployment-fraud-claim-recovery-procedure' },
      { label: '환수 통보 이의', href: '/guide/unemployment/unemployment-fraud-collection-notice-appeal' },
      { label: '일용직 실업급여 조건', href: '/guide/unemployment/unemployment-daily-worker-qualification' },
      { label: '단기 알바 신고 누락 구제', href: '/guide/unemployment/unemployment-short-part-time-unreport-rescue' },
      { label: '수급 거부 이의 절차', href: '/guide/unemployment/unemployment-benefit-rejection-appeal-procedure' },
    ],
  },

  // ─── 5. retirement-target-incentive-eva-average-wage-track ───
  {
    domain: 'retirement',
    slug: 'retirement-target-incentive-eva-average-wage-track',
    keyword: 'EVA 부가가치 성과급 평균임금 퇴직금',
    questionKeyword: '사업부 성과와 경제적 부가가치(EVA)에 연동해 매년 받던 성과급이 있는데, 퇴직금 평균임금에서 빠졌어요. 포함해서 다시 계산할 수 있나요?',
    ctaKeyword: 'EVA 부가가치 성과급 평균임금 퇴직금 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: 'EVA 성과급 평균임금 — 5단계 퇴직금 재산정 점검 | 로앤가이드',
      description:
        '사업부 성과·경제적 부가가치(EVA)에 연동된 성과급이 퇴직금 평균임금에서 빠진 것 같아 답답하시다면 근로 대가성·평균임금 산입과 차액 재산정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"회사에서 매년 사업부 성과 평가 결과와 경제적 부가가치(세후영업이익에서 자본비용 등을 뺀 이익, EVA)에 연동해 \'목표 인센티브\'와 \'성과 인센티브\'를 받아온 근로자입니다. 오랜 기간 거의 매년 정해진 산정 방식으로 지급받았는데, 퇴직금을 받고 보니 회사가 이 성과급을 평균임금에서 통째로 빼고 계산했어요. 회사는 \'성과에 따라 못 받는 해도 있으니 임금이 아니다\'라고 하는데, 실제로는 산정 기준과 지급 방식이 정해져 있어 이대로 빠지는 게 맞는지 막막한 상태예요." 근로자퇴직급여보장법 제8조는 퇴직금을 계속근로 1년에 30일분 이상의 평균임금으로 산정하도록 정하고, 평균임금에는 근로의 대가로 계속적·정기적으로 지급되고 지급의무가 확정된 금품이 포함될 수 있는 영역입니다. 사업부 성과·EVA 연동 성과급이 근로의 대가로 지급된 임금으로 평가되면 평균임금 산입이 검토되는 트랙입니다. ① 지급 내역 ② 근로 대가성·정기성 ③ 평균임금 재산정 ④ 차액 청구 ⑤ 시효 관리 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 내역 ② 성격 ③ 재산정 ④ 청구 ⑤ 시효 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. EVA 연동 성과급 평균임금 산입 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 내역·성격·재산정·청구·시효 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 지급 내역 확인</strong> — 목표 인센티브·EVA 연동 성과급의 연도별 지급 시점·금액·산정 방식 정리.</li>\n<li><strong>② 근로 대가성·정기성 평가</strong> — 근로의 대가로 계속적·정기적으로 지급됐는지, 지급의무가 확정됐는지 검토.</li>\n<li><strong>③ 평균임금 재산정</strong> — 임금성 인정 시 성과급을 반영한 평균임금으로 퇴직금 재계산.</li>\n<li><strong>④ 차액 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정.</li>\n<li><strong>⑤ 시효 관리</strong> — 퇴직금 청구 시효 3년·소멸 도과 위험 관리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 성과급이 계속적·정기적으로 지급된 것이라 하더라도 그것이 근로의 대가로 지급된 것으로 볼 수 있어야 평균임금에 산입되는 영역. 사업부 성과·EVA 연동이라는 산정 방식의 실질이 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — EVA 연동 성과급 평균임금 5단계',
        content:
          '<p><strong>A. 고용노동부·근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 지급 내역·산정 규정 보존 (즉시)</strong> — 연도별 성과급 지급 내역·산정 기준·지급 규정·근로계약서 확보.</li>\n<li><strong>2단계 — 근로 대가성·정기성 정리 (1~2주)</strong> — 계속·정기 지급·산정 방식·지급의무 정황 정리.</li>\n<li><strong>3단계 — 평균임금 재산정 (2~3주)</strong> — 성과급 반영 평균임금으로 퇴직금 총액 재계산·차액 도출.</li>\n<li><strong>4단계 — 고용노동부 진정 또는 회사 청구 (시효 3년 내)</strong> — 1350 진정 또는 내용증명.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의 협상.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 포함 항목, AI로 먼저 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">EVA 부가가치 성과급 평균임금 퇴직금 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 내역·성격·재산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>연도별 성과급 지급 내역 (목표·EVA 연동분)</strong></li>\n<li><strong>성과급 산정 기준·지급 규정·취업규칙</strong></li>\n<li><strong>퇴직 전 3개월 임금명세서 (평균임금 산정 기초)</strong></li>\n<li><strong>근로계약서·재직 증명서</strong></li>\n<li><strong>회사의 퇴직금 산정 내역서 (성과급 제외 여부)</strong></li>\n<li><strong>성과급 반영 평균임금·퇴직금 차액 산정표</strong></li>\n<li><strong>회사 회신·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 성과급이 사업부 성과·EVA에 연동되더라도 산정 기준과 지급 방식이 정해져 매년 지급됐다면 근로 대가성 검토의 핵심 자료. 회사 퇴직금 산정 내역서에서 성과급이 빠졌는지부터 확인해보는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>근로 대가성</strong> — 성과 연동 성과급이 근로의 대가로 지급된 것인지가 산입의 분기점.</li>\n<li><strong>정기성·계속성</strong> — 매년 정해진 방식으로 계속·정기 지급됐는지.</li>\n<li><strong>지급의무 확정성</strong> — 산정 기준·지급 조건이 정해져 지급의무가 있었는지.</li>\n<li><strong>미지급 해의 존재</strong> — 못 받는 해가 있어도 대가성이 인정되는지.</li>\n<li><strong>시효 관리</strong> — 퇴직금 청구 시효 3년·소멸 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (퇴직금 미지급 신고)</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 퇴직급여 제도 안내 (moel.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 성과 연동 인센티브의 근로 대가성·평균임금 산입 평가',
        summary:
          '대법원 2021다248299(대법원, 2026.01.29 선고) 영역에서 법원은 평균임금 산정의 기초가 되는 임금은 근로의 대가로 계속적·정기적으로 지급되고 단체협약·취업규칙·급여규정 등에 의해 지급의무가 지워진 것을 말하므로, 비록 계속적·정기적으로 지급됐더라도 근로의 대가로 지급된 것으로 볼 수 없다면 임금에 해당한다고 할 수 없다고 판단한 사례 흐름이 있으며, 사업부 성과·경제적 부가가치(EVA) 연동 성과급의 평균임금 산입을 검토할 때에도 근로 대가성을 살펴볼 수 있습니다.',
        takeaway: '근로 대가성이 인정되는 성과급은 평균임금에 산입되는지 검토할 수 있는 영역 — 퇴직금 재산정·차액 청구 트랙.',
      },
    ],
    faq: [
      {
        question: 'EVA 연동 성과급이 퇴직금에 들어가나요?',
        answer:
          '<strong>근로의 대가로 계속·정기 지급되고 지급의무가 확정됐다면 평균임금 산입을 검토할 수 있는 영역입니다.</strong> 산정 방식·지급 내역 정리가 먼저.',
      },
      {
        question: '회사는 성과급이라 임금이 아니라는데요?',
        answer:
          '<strong>명칭이 아니라 근로 대가성·지급의무로 판단하는 영역입니다.</strong> 산정 기준·연도별 내역을 확인.',
      },
      {
        question: '못 받는 해가 있었는데도 포함되나요?',
        answer:
          '<strong>미지급 해가 있어도 근로 대가성이 인정될 수 있는 영역입니다.</strong> 지급 조건·정기성 정황을 정리.',
      },
      {
        question: '성과급을 빼고 퇴직금을 줬으면 차액을 받나요?',
        answer:
          '<strong>성과급 반영 평균임금으로 재산정한 차액을 청구해볼 수 있는 영역입니다.</strong> 산정 내역서 대조가 핵심.',
      },
      {
        question: '퇴직금 차액 청구 시효는 얼마인가요?',
        answer:
          '<strong>퇴직금 청구 시효는 퇴직일로부터 3년인 영역입니다.</strong> 3년 내 차액 청구 가능.',
      },
    ],
    cta: { text: '퇴직금 포함 항목, AI로 먼저 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '인센티브 성과급 평균임금', href: '/guide/retirement/retirement-incentive-bonus-average-wage-inclusion' },
      { label: '성과급 평균임금 포함', href: '/guide/retirement/retirement-performance-bonus-business-profit' },
      { label: '상여 평균임금 다툼', href: '/guide/retirement/retirement-average-wage-bonus-dispute' },
      { label: '퇴직금 포함·제외 항목', href: '/guide/retirement/retirement-pay-included-excluded-items' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 6. retirement-statute-good-faith-estoppel-track ───
  {
    domain: 'retirement',
    slug: 'retirement-statute-good-faith-estoppel-track',
    keyword: '퇴직금 소멸시효 신의칙 권리남용',
    questionKeyword: '퇴직금 소멸시효 3년이 지났는데, 회사가 청구를 미루게 만든 사정이 있었어요. 회사의 시효 주장을 막고 청구할 수 있나요?',
    ctaKeyword: '퇴직금 소멸시효 신의칙 권리남용 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '퇴직금 소멸시효 신의칙 — 5단계 시효 항변 점검 | 로앤가이드',
      description:
        '퇴직금 소멸시효 3년이 지나 청구를 포기해야 하나 막막하시다면 회사 시효 항변을 막는 신의칙·권리남용과 시효 완성 후 청구 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"퇴직 후 퇴직금 일부를 받지 못한 채 시간이 흐른 근로자입니다. 그동안 회사가 \'곧 정리해서 지급하겠다\'며 차일피일 미루고, 한때 근로자성 여부가 다퉈져 청구를 망설이는 사이에 어느덧 퇴직금 소멸시효 3년이 지나버렸어요. 이제 와서 회사는 \'시효가 끝났으니 줄 수 없다\'고 하는데, 사실은 회사가 권리행사를 어렵게 만들어 놓고 뒤늦게 시효를 주장하는 게 맞는지 막막한 상태예요." 근로자퇴직급여보장법 제10조는 퇴직금 청구권의 소멸시효를 3년으로 정하지만, 채무자의 소멸시효 항변권 행사도 민법의 신의성실 원칙과 권리남용 금지 원칙의 지배를 받는 영역입니다. 사용자가 시효 완성 전에 권리행사를 불가능·현저히 곤란하게 했거나 시효를 원용하지 않을 것 같은 태도를 보였다면 그 시효 항변이 신의칙에 반해 허용되지 않는지 검토되는 트랙입니다. ① 시효 기산 확인 ② 신의칙 사정 정리 ③ 청구 근거 산정 ④ 청구·진정 ⑤ 불복·소송 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 기산 ② 사정 ③ 산정 ④ 청구 ⑤ 소송 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 퇴직금 소멸시효 신의칙 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 기산·사정·산정·청구·소송 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 시효 기산 확인</strong> — 퇴직금 지급사유 발생일(퇴직일) 기준 3년 시효 기산점 정리.</li>\n<li><strong>② 신의칙 사정 정리</strong> — 지급 약속·권리행사 방해·시효 미원용 태도 등 정황 수집.</li>\n<li><strong>③ 청구 근거 산정</strong> — 미지급 퇴직금·지연이자 등 청구 금액 산정.</li>\n<li><strong>④ 청구·진정</strong> — 회사 청구 또는 고용노동부 1350 진정.</li>\n<li><strong>⑤ 불복·소송</strong> — 시효 항변에 신의칙·권리남용 주장으로 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 시효가 지났더라도 사용자가 시효 완성 전에 권리행사를 불가능·현저히 곤란하게 했거나 시효를 원용하지 않을 것 같은 태도를 보였다면 그 시효 항변이 신의칙에 반해 허용되지 않는지 검토해볼 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 퇴직금 소멸시효 신의칙 5단계',
        content:
          '<p><strong>A. 고용노동부·근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 시효·지급 자료 보존 (즉시)</strong> — 퇴직일·미지급 내역·지급 약속·연락 기록 확보.</li>\n<li><strong>2단계 — 신의칙 사정 정리 (신속)</strong> — 회사의 지급 약속·청구 방해·시효 미원용 태도 정황 정리.</li>\n<li><strong>3단계 — 청구 금액 산정 (1~2주)</strong> — 미지급 퇴직금·지연이자 등 청구 근거 산정.</li>\n<li><strong>4단계 — 고용노동부 진정 또는 회사 청구</strong> — 1350 진정 또는 내용증명 발송.</li>\n<li><strong>5단계 — 민사 소송·합의</strong> — 시효 항변 시 신의칙·권리남용 주장으로 대응.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">퇴직금 소멸시효 신의칙 권리남용 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 시효·사정·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>퇴직 증빙·재직 증명서 (시효 기산점)</strong></li>\n<li><strong>미지급 퇴직금 내역·급여대장</strong></li>\n<li><strong>회사의 지급 약속·연기 정황 (이메일·문자·녹취)</strong></li>\n<li><strong>근로자성 다툼·청구 지연 경위 자료</strong></li>\n<li><strong>미지급 퇴직금·지연이자 산정표</strong></li>\n<li><strong>내용증명·진정서 사본</strong></li>\n<li><strong>신의칙·권리남용 주장 정리 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 \'곧 지급하겠다\'고 미루거나 시효를 원용하지 않을 것 같은 태도를 보인 정황이 신의칙 항변의 핵심 자료. 이메일·문자·녹취 등 시점이 드러나는 기록을 모아두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>시효 기산점</strong> — 퇴직금 지급사유 발생일(퇴직일)부터 3년 진행.</li>\n<li><strong>권리행사 방해</strong> — 회사가 청구·시효중단을 어렵게 만든 사정이 있었는지.</li>\n<li><strong>시효 미원용 태도</strong> — 회사가 지급을 약속하거나 시효를 원용하지 않을 듯한 태도를 보였는지.</li>\n<li><strong>권리남용 평가</strong> — 뒤늦은 시효 항변이 신의칙에 반하는지.</li>\n<li><strong>지연이자</strong> — 미지급 퇴직금에 대한 지연이자 산정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (퇴직금 미지급 신고)</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 퇴직급여 제도 안내 (moel.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 소멸시효 항변의 신의칙·권리남용 평가',
        summary:
          '대법원 2024다294705(대법원, 2025.05.29 선고) 영역에서 법원은 채무자의 소멸시효 항변권 행사도 신의성실 원칙과 권리남용 금지 원칙의 지배를 받으므로, 채무자가 시효 완성 전에 채권자의 권리행사나 시효중단을 불가능 또는 현저히 곤란하게 했거나 그러한 조치가 불필요하다고 믿게 하는 행동을 했거나 시효 완성 후 시효를 원용하지 않을 것 같은 태도를 보여 권리자가 그와 같이 신뢰하게 한 경우 등에는 시효 항변이 허용되지 않을 수 있다고 판단한 사례 흐름이 있으며, 퇴직금 시효 항변을 검토할 때에도 동일한 기준을 살펴볼 수 있습니다.',
        takeaway: '사용자의 시효 항변이 신의칙에 반하면 허용되지 않을 수 있는 영역 — 시효 완성 후 청구 회생·소송 대응 트랙.',
      },
    ],
    faq: [
      {
        question: '퇴직금 시효 3년이 지났는데 청구할 수 있나요?',
        answer:
          '<strong>회사의 시효 항변이 신의칙에 반하는지 검토해볼 수 있는 영역입니다.</strong> 지급 약속·지연 정황 정리가 먼저.',
      },
      {
        question: '회사가 곧 주겠다고 미뤘는데 인정되나요?',
        answer:
          '<strong>지급 약속·시효 미원용 태도는 신의칙 항변의 정황이 될 수 있는 영역입니다.</strong> 이메일·문자·녹취를 확보.',
      },
      {
        question: '시효 기산점은 언제부터인가요?',
        answer:
          '<strong>퇴직금 지급사유 발생일(퇴직일)부터 3년이 진행되는 영역입니다.</strong> 퇴직 증빙으로 기산점 확인.',
      },
      {
        question: '근로자성을 다투느라 청구가 늦어졌어요',
        answer:
          '<strong>권리행사를 현저히 곤란하게 한 사정으로 다퉈볼 수 있는 영역입니다.</strong> 다툼 경위·지연 사유를 정리.',
      },
      {
        question: '지연이자도 함께 청구할 수 있나요?',
        answer:
          '<strong>미지급 퇴직금에 대한 지연이자도 함께 청구를 검토해볼 수 있는 영역입니다.</strong> 산정표로 금액을 정리.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 소멸시효', href: '/guide/retirement/retirement-statute-of-limitations' },
      { label: '시효 지난 후 청구 회생', href: '/guide/retirement/retirement-statute-expired-revival' },
      { label: '퇴직금 지연이자', href: '/guide/retirement/retirement-delay-interest-20percent' },
      { label: '퇴직금 진정', href: '/guide/retirement/retirement-pay-complaint' },
      { label: '퇴직금 청구 어디부터', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
    ],
  },
];
