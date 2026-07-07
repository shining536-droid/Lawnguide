import { SpokePage } from '../spoke-pages';

// unemployment 클러스터 허브 — 실업급여 종합 가이드 (7섹션 44개 스포크 연결)
// 고유 존재 이유: 실업급여를 신청하려는데 수급자격·이직사유·신청절차·금액·
// 특수케이스·부정수급·재취업수당을 어디서부터 정리해야 할지 막막한 사용자가
// 클러스터 전체를 한눈에 훑고 각 상황별 상세 페이지로 이동하도록 돕는 허브 페이지.

export const spokesUnemploymentHub: SpokePage[] = [

  // ─── 실업급여 종합 가이드 (클러스터 허브) ───
  {
    domain: 'unemployment',
    slug: 'unemployment-benefit-guide',
    keyword: '실업급여 종합 가이드 수급자격 신청 금액 이직사유',
    questionKeyword:
      '저는 실업급여를 신청하려는데 수급자격과 정당한 이직사유, 신청 절차와 기한, 수급 기간·금액, 특수 케이스, 부정수급 주의사항, 재취업수당까지 어디서부터 정리해야 할지 막막한 상황이에요. 실업급여의 큰 그림부터 상황별 쟁점까지 무엇을 확인하고 어떤 자료를 챙겨야 하는지 순서대로 정리해볼 수 있나요?',
    ctaKeyword: '실업급여 수급자격·신청·금액·특수케이스 종합 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '실업급여 종합 가이드 — 수급자격·신청·금액 8가지 정리 | 로앤가이드',
      description:
        '실업급여를 신청하려는데 수급자격·이직사유·신청절차·금액·특수케이스를 어디서부터 정리해야 할지 막막하다면, 조건부터 부정수급·재취업수당까지 핵심을 한눈에 정리해 지금 확인하세요.',
    },
    intro:
      '<p>실업급여를 알아보려 하면 내가 수급 대상이 되는지, 자발적으로 그만뒀는데도 받을 수 있는지, 언제까지 무엇을 신청해야 하는지, 금액은 얼마나 되는지 한꺼번에 궁금한 것이 많아 어디서부터 정리해야 할지 막막하실 수 있습니다. 크게 보면 실업급여(구직급여)는 고용보험에 가입한 근로자가 이직 전 일정 기간 이상 피보험단위기간을 채우고, 비자발적이거나 정당한 사유로 이직해 적극적으로 재취업을 준비할 때 요건 충족 여부를 검토하는 제도로 안내되고 있습니다. 자발적 퇴사라도 임금체불·괴롭힘·질병·가족 간병·통근 곤란 등 고용보험법이 정한 정당한 이직사유에 해당하는지에 따라 수급 가능성이 달라질 수 있습니다. 신청은 거주지 관할 고용센터에 구직 등록과 수급자격 인정 신청을 하고, 실업인정을 반복해 지급받는 흐름으로 진행되며, 수급 기간과 구직급여일액은 이직 전 임금과 연령·피보험기간에 따라 산정됩니다. 이 밖에 일용직·단기 근로자·군 전역자·투잡 같은 특수 케이스, 부정수급 적발 시의 환수·제재, 조기재취업수당·직업훈련수당 같은 추가 지원도 함께 확인해두면 도움이 됩니다. 각 쟁점은 사실관계와 요건 충족 정도에 따라 결과가 달라질 수 있어, 이 가이드는 결론을 단정하기보다 무엇을 확인하고 어떤 자료를 준비하면 좋은지 안내하는 데 초점을 둡니다. 아래 7개 묶음에서 내 상황에 가까운 주제를 골라 상세 페이지에서 받을 수 있는지 순서대로 검토해볼 수 있습니다. 상담이 필요할 때는 고용노동부 고객상담센터(1350)나 거주지 관할 고용센터, 대한법률구조공단(132) 안내를 통해 절차를 확인해볼 수 있습니다.</p>',
    sections: [
      {
        title: '📋 실업급여 개요·수급조건',
        content:
          '<p>먼저 실업급여의 큰 그림과 기본 수급조건을 잡아두면 이후 준비가 한결 수월해집니다. 고용보험 가입 여부, 피보험단위기간, 이직사유, 재취업 노력 같은 요건을 함께 충족하는지에 따라 받을 수 있는지 검토되며, 자발적 퇴사나 시간제 겸직·장기 육아휴직 같은 경우는 조건이 다르게 다뤄질 수 있습니다.</p>\n<ul>\n<li><a href="/guide/unemployment/unemployment-benefit-requirements">실업급여 수급 조건과 금액 기준</a> — 수급조건 한눈에</li>\n<li><a href="/guide/unemployment/unemployment-voluntary-quit-benefits">자발적 퇴사도 실업급여 받을 수 있나요</a> — 자진퇴사 가능성</li>\n<li><a href="/guide/unemployment/voluntary-resignation-benefit-possible">자발적 퇴사도 실업급여 받을 수 있나요</a> — 자진퇴사 요건 확인</li>\n<li><a href="/guide/unemployment/unemployment-part-time-dual-job-combined-benefit">시간제 겸직 근로자 실업급여 수급 조건</a> — 시간제 겸직 조건</li>\n<li><a href="/guide/unemployment/unemployment-180days-trap-long-leave">장기 육아휴직 180일 함정 3년 캡</a> — 육아휴직 기간 계산</li>\n</ul>',
      },
      {
        title: '🧾 수급자격 — 이직사유',
        content:
          '<p>자발적으로 그만뒀더라도 고용보험법이 정한 정당한 이직사유에 해당하는지가 핵심 쟁점입니다. 권고사직, 배우자 지방발령 동거 이주, 부모 간병, 질병 치료, 계약만료, 임금피크제 전 명예퇴직 등 상황에 따라 준비할 자료가 달라질 수 있어, 내 사유와 가까운 페이지에서 받을 수 있는지 검토해볼 수 있습니다.</p>\n<ul>\n<li><a href="/guide/unemployment/voluntary-quit-unemployment-eligibility">자발적 퇴사도 실업급여 받는 5가지 사유</a> — 정당한 사유 정리</li>\n<li><a href="/guide/unemployment/recommended-resignation-unemployment-benefit">권고사직 당했을 때 실업급여 받는 법</a> — 권고사직 대응</li>\n<li><a href="/guide/unemployment/unemployment-spouse-relocation-cohabitation-just-cause-track">배우자 지방발령 동거 이주 자진퇴사 구직급여 수급</a> — 동거 이주 사유</li>\n<li><a href="/guide/unemployment/unemployment-care-worker-recipient-refusal-contract-end-just-cause-track">요양보호사 수급자 거부 계약종료 이직 구직급여 수급</a> — 요양보호사 계약종료</li>\n<li><a href="/guide/unemployment/unemployment-parent-nursing-care-resignation-just-cause-track">부모 간병 자진퇴사 구직급여</a> — 부모 간병 사유</li>\n<li><a href="/guide/unemployment/unemployment-illness-treatment-medical-resignation-just-cause-track">질병 치료 요양 자진퇴사 구직급여</a> — 질병 치료 사유</li>\n<li><a href="/guide/unemployment/unemployment-honorary-retirement-before-wage-peak-just-cause-track">임금피크제 전 명예퇴직 인사적체 정당한 이직사유 구직급여</a> — 명예퇴직 사유</li>\n<li><a href="/guide/unemployment/unemployment-fixed-term-end-track">계약만료 자진퇴사 구직급여 수급</a> — 계약만료 검토</li>\n</ul>',
      },
      {
        title: '📝 신청 절차·기한',
        content:
          '<p>실업급여는 거주지 관할 고용센터에 구직 등록과 수급자격 인정 신청을 하고, 실업인정을 반복해 지급받는 흐름으로 안내됩니다. 신청 기한을 놓치면 받을 수 있는 기간이 줄어들 수 있어 미리 순서를 정리해두면 도움이 되고, 불승인 시 이의신청이나 임금 산정 기준 같은 세부 쟁점도 함께 확인해볼 수 있습니다.</p>\n<ul>\n<li><a href="/guide/unemployment/application-to-payment-full-procedure">실업급여 신청에서 수급까지 전체</a> — 신청 전체 흐름</li>\n<li><a href="/guide/unemployment/unemployment-appeal-rejection">실업급여 불승인 이의신청</a> — 불승인 이의신청</li>\n<li><a href="/guide/unemployment/unemployment-taxi-driver-payment-deduction-benefit-base-track">택시기사 사납금 공제 구직급여 기초임금 산정</a> — 기초임금 산정</li>\n<li><a href="/guide/unemployment/unemployment-benefit-recipient-ceo-appointment-employment-report-track">구직급여 수급 중 대표이사 취임 취업 신고</a> — 취업 신고 의무</li>\n<li><a href="/guide/unemployment/unemployment-shift-night-work-conversion-resignation-just-cause-track">교대제 야간근무 전환 자진퇴사 구직급여</a> — 근무전환 사유</li>\n<li><a href="/guide/unemployment/unemployment-contract-expiry-termination-just-cause-track">계약기간 만료 이직 구직급여 수급</a> — 계약만료 신청</li>\n</ul>',
      },
      {
        title: '💰 수급 기간·금액 계산',
        content:
          '<p>구직급여일액과 수급 기간은 이직 전 임금·연령·피보험기간에 따라 산정되며, 퇴직금이나 단기 근로가 있어도 별도로 받을 수 있는지 함께 검토됩니다. 피보험단위기간 180일 계산이나 금액 산정 방법을 미리 정리해두면 내가 얼마를 얼마 동안 받을 수 있는지 가늠하는 데 도움이 됩니다.</p>\n<ul>\n<li><a href="/guide/unemployment/unemployment-early-reemployment-bonus">조기재취업수당 조건과 금액</a> — 조기재취업 금액</li>\n<li><a href="/guide/unemployment/unemployment-180days-insurance-period-calc">실업급여 180일 피보험단위기간 계산</a> — 180일 계산법</li>\n<li><a href="/guide/unemployment/unemployment-severance-separate-payment">퇴직금 받은 후 실업급여 수령 가능</a> — 퇴직금 별도 수령</li>\n<li><a href="/guide/unemployment/unemployment-short-term-worker">6개월 미만 단기 근로자 실업급여</a> — 단기 근로자 요건</li>\n<li><a href="/guide/unemployment/unemployment-short-term-parttime-apply-window">단기 알바 실업급여 신청 기간</a> — 단기 알바 기한</li>\n<li><a href="/guide/unemployment/unemployment-comprehensive-benefit-amount-guide">실업급여 금액 산정 방법 총정리</a> — 금액 산정 정리</li>\n</ul>',
      },
      {
        title: '🔎 특수 케이스',
        content:
          '<p>일반적인 이직과 다르게 다뤄지는 특수한 상황도 있습니다. 일용직·단기 근로자, 정년 도달, 군 전역자, 투잡 중 한 곳 실직, 외국인 근로자 비자 만료, 창업 실패 자영업자, 개별연장급여 등은 요건과 준비 방향이 달라질 수 있어 해당 상황에 맞는 페이지에서 받을 수 있는지 검토해볼 수 있습니다.</p>\n<ul>\n<li><a href="/guide/unemployment/unemployment-daily-worker-qualification">일용직 실업급여 조건</a> — 일용직 요건</li>\n<li><a href="/guide/unemployment/unemployment-mandatory-retirement-age-reaching-just-cause-track">정년 도달 퇴직 구직급여 수급</a> — 정년 도달 검토</li>\n<li><a href="/guide/unemployment/unemployment-military-discharge-eligibility">전역 군인 실업급여 수급 자격</a> — 전역자 자격</li>\n<li><a href="/guide/unemployment/unemployment-caregiving-leave-track">가족 간병 자진퇴사 구직급여</a> — 가족 간병 사유</li>\n<li><a href="/guide/unemployment/unemployment-startup-failed-quit-rescue">창업 실패 자영업자 실업급여</a> — 자영업자 요건</li>\n<li><a href="/guide/unemployment/unemployment-dual-job-one-lost">투잡 한 곳 실직 실업급여</a> — 투잡 실직 검토</li>\n<li><a href="/guide/unemployment/unemployment-foreign-worker-visa-expire-benefit-track">외국인 근로자 비자 만료 실업급여</a> — 외국인 비자 만료</li>\n<li><a href="/guide/unemployment/unemployment-child-care-school-time-mismatch-track">자녀 등하교 시간 불일치 자진퇴사</a> — 등하교 불일치 사유</li>\n<li><a href="/guide/unemployment/unemployment-individual-extended-benefit">개별연장급여 신청 자격</a> — 개별연장급여 요건</li>\n</ul>',
      },
      {
        title: '⚠️ 부정수급·환수 주의',
        content:
          '<p>실업급여를 받는 중에 근로 사실을 신고하지 않거나 이직사유를 사실과 다르게 기재하면 부정수급으로 적발돼 지급액 환수와 추가 제재로 이어질 수 있습니다. 어떤 경우가 부정수급으로 다뤄지는지, 적발 시 어떻게 대응할 수 있는지 미리 확인해두면 불이익을 줄이는 데 도움이 됩니다.</p>\n<ul>\n<li><a href="/guide/unemployment/unemployment-fraud-penalty-response">실업급여 부정수급 적발 시 대처 방법</a> — 적발 시 대응</li>\n<li><a href="/guide/unemployment/benefit-fraud-top-5-cases">실업급여 부정수급 적발 사례 5가지</a> — 대표 적발 사례</li>\n<li><a href="/guide/unemployment/unemployment-fraud-recovery-additional-collection-track">부정수급 반환·추가징수</a> — 반환·추가징수 기준</li>\n<li><a href="/guide/unemployment/unemployment-short-work-unreport-regular-worker-track">수급 신청 직전 근로 상용근로자 부정수급</a> — 근로 미신고 주의</li>\n<li><a href="/guide/unemployment/unemployment-dismissal-reinstated">부당해고 복직 후 실업급여 반환</a> — 복직 후 반환</li>\n</ul>',
      },
      {
        title: '🎯 재취업수당·조기재취업',
        content:
          '<p>수급 기간을 남기고 빨리 재취업하거나 직업훈련을 받을 때는 조기재취업수당·직업훈련수당 같은 추가 지원을 받을 수 있는지 검토해볼 수 있습니다. 계속고용 인정 여부, 대표이사 취임, 인턴 종료 같은 상황에 따라 요건이 달라질 수 있어 해당 페이지에서 무엇을 확인하면 좋은지 정리해볼 수 있습니다.</p>\n<ul>\n<li><a href="/guide/unemployment/unemployment-training-allowance">실업급여 직업훈련 수당 수령</a> — 직업훈련 수당</li>\n<li><a href="/guide/unemployment/unemployment-early-reemployment-allowance-eligibility-track">조기재취업수당 지급요건</a> — 지급요건 정리</li>\n<li><a href="/guide/unemployment/unemployment-early-reemployment-allowance-track">조기재취업수당 지급</a> — 지급 요건 정리</li>\n<li><a href="/guide/unemployment/unemployment-early-reemployment-continuous-employment-track">조기재취업수당 계속고용 인정</a> — 계속고용 인정</li>\n<li><a href="/guide/unemployment/unemployment-internship-training-end">인턴 종료 실업급여 수급</a> — 인턴 종료 검토</li>\n</ul>',
      },
    ],
    cases: [],
    faq: [
      {
        question: '자발적으로 퇴사해도 실업급여를 받을 수 있나요?',
        answer:
          '<strong>자발적 퇴사라도 고용보험법이 정한 정당한 이직사유에 해당하면 받을 수 있는지 검토해볼 수 있습니다.</strong> 임금체불, 괴롭힘, 질병 치료, 가족 간병, 통근 곤란 등이 대표적이며, 사유를 뒷받침하는 자료를 정리해두면 고용센터 상담에 도움이 됩니다.',
      },
      {
        question: '피보험단위기간 180일은 어떻게 계산하나요?',
        answer:
          '<strong>이직 전 18개월(기준기간) 동안 임금을 받은 날 등을 합산해 180일 이상인지 따지는 것으로 안내되고 있습니다.</strong> 무급 휴일이나 결근일은 산입되지 않을 수 있어, 고용보험 피보험자격 이력을 먼저 조회해 정확한 일수를 확인해두면 도움이 됩니다.',
      },
      {
        question: '실업급여는 언제까지 신청해야 하나요?',
        answer:
          '<strong>구직급여는 이직 후 되도록 빨리 거주지 관할 고용센터에 구직 등록과 수급자격 인정 신청을 하는 것이 좋습니다.</strong> 신청이 늦어지면 받을 수 있는 기간이 줄어들 수 있어, 정확한 기한은 고용노동부 고객상담센터(1350)나 고용센터에서 확인해볼 수 있습니다.',
      },
      {
        question: '구직급여일액은 얼마로 산정되나요?',
        answer:
          '<strong>구직급여일액은 정해진 고정 금액이 아니라 이직 전 평균임금과 연령·피보험기간에 따라 산정되며, 상한액과 하한액 범위 안에서 결정되는 것으로 안내됩니다.</strong> 임금 자료를 정리해두면 대략적인 금액을 가늠하는 데 도움이 됩니다.',
      },
      {
        question: '정당한 이직사유에는 어떤 것들이 있나요?',
        answer:
          '<strong>임금체불·최저임금 미달, 직장 내 괴롭힘·성희롱, 질병 치료, 가족 간병, 사업장 이전이나 배우자 이주로 인한 통근 곤란, 계약만료 등이 정당한 이직사유로 다뤄지는 사례가 많습니다.</strong> 내 상황이 어디에 해당하는지와 필요한 증빙을 함께 확인해두면 도움이 됩니다.',
      },
      {
        question: '부정수급이 적발되면 어떤 불이익이 있나요?',
        answer:
          '<strong>근로 사실 미신고나 허위 신고 등이 부정수급으로 적발되면 지급받은 금액의 반환과 함께 추가 징수·수급 제한 같은 제재가 따를 수 있습니다.</strong> 실업인정 때 아르바이트·소득 발생 사실을 성실히 신고하는 것이 불이익을 줄이는 방법입니다.',
      },
      {
        question: '조기재취업수당은 어떤 경우에 받을 수 있나요?',
        answer:
          '<strong>수급 기간을 일정 부분 남긴 상태에서 재취업하거나 창업해 일정 기간 계속 근무·유지하면 조기재취업수당을 받을 수 있는지 검토해볼 수 있습니다.</strong> 재취업 시점과 계속고용 인정 요건이 함께 다뤄지므로 근로계약·재직 자료를 정리해두면 도움이 됩니다.',
      },
      {
        question: '실업급여를 받는 중에 아르바이트를 하면 어떻게 되나요?',
        answer:
          '<strong>수급 중 근로나 소득이 발생하면 실업인정일에 반드시 신고해야 하며, 신고하지 않으면 부정수급으로 다뤄질 수 있습니다.</strong> 소득 수준에 따라 해당 일자의 급여가 조정될 수 있어, 근무 사실과 금액을 정확히 신고하는 것이 안전합니다.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: 'unemployment 도메인 허브', href: '/guide/unemployment' },
      { label: '실업급여 수급 조건과 금액 기준', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '실업급여 신청에서 수급까지 전체', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '자발적 퇴사도 실업급여 받는 5가지 사유', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '실업급여 불승인 이의신청', href: '/guide/unemployment/unemployment-appeal-rejection' },
    ],
  },

];
