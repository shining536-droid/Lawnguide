import { SpokePage } from '../spoke-pages';

// batch76 wage / unemployment / retirement / industrial-accident1 — 7개 (2026-05-24)
//
// 고유 존재 이유:
// 1. 정기 상여금 통상임금 포함 — 일반 임금체불 류와 분기. 여기는 '매월·정기 일률 지급 상여 + 연장·야간수당 산정 누락 + 통상임금 재산정' 트랙. 근기법 제2조 + 시행령 제6조 통상임금 범위 결합.
// 2. 상여금 분할지급 최저임금 회피 — 일반 최저임금 위반 류와 분기. 여기는 '기존 상여를 매월 쪼개 취업규칙 변경 + 최저임금 미달 회피 정황 + 합의 효력' 트랙. 최저임금법 제6조 결합.
// 3. 임금체불 자진퇴사 실업급여 — 일반 자발 퇴사 류와 분기. 여기는 '2개월 이상 임금체불 + 자진퇴사라도 정당 이직 사유 + 기초일액' 트랙. 고용보험법 제40조·제58조 + 고시 결합.
// 4. 일용직 반복근로 실업급여 — 일반 수급요건 류와 분기. 여기는 '여러 현장 반복 일용 + 피보험단위기간 180일 + 이직 사유' 트랙. 고용보험법 제40조 피보험단위기간 결합.
// 5. 상여금 퇴직금 평균임금 산입 — 일반 퇴직금 청구 류와 분기. 여기는 '정기 상여가 평균임금에서 누락 + 퇴직금 과소 + 재산정' 트랙. 근퇴법 제8조 + 근기법 평균임금 결합.
// 6. 복리후생비 퇴직금 평균임금 산입 — 일반 퇴직금 청구 류와 분기. 여기는 '급식비·체력단련비·월동보조비 임금성 + 평균임금 산입 + 퇴직금 차액' 트랙. 근퇴법 제8조 + 근기법 제2조 결합.
// 7. 출퇴근 재해 산재 인정 — 일반 산재 류와 분기. 여기는 '통상 출퇴근 경로 사고·낙상 + 회사 산재 부인 + 요양급여' 트랙. 산재보험법 제37조 출퇴근 재해 결합.

export const spokesBatch76WageUnempRetireIa: SpokePage[] = [
  // ─── 1. wage-regular-bonus-ordinary-wage-track ───
  {
    domain: 'wage',
    slug: 'wage-regular-bonus-ordinary-wage-track',
    keyword: '정기 상여금 통상임금 포함',
    questionKeyword: '매월 정기적으로 일률 지급되던 상여금이 연장·야간수당 산정에서 빠져 수당이 적게 계산된 것 같아요. 통상임금에 포함되나요?',
    ctaKeyword: '정기 상여금 통상임금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '정기 상여금 통상임금 포함 — 5단계 수당 재산정 점검 | 로앤가이드',
      description:
        '매월 일률 지급된 상여금이 연장·야간수당 산정에서 빠져 수당이 적게 나왔다면 통상임금 범위 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"제조업 회사에서 5년째 근무하는 근로자입니다. 회사는 기본급 외에 \'정기 상여금\'을 매월 일정 비율로 일률 지급해왔는데, 연장·야간·휴일 근로수당을 계산할 때는 이 상여금을 통상임금에서 제외하고 기본급만 기준으로 삼았어요. 그러다 보니 매달 받던 시간외수당이 실제보다 적게 계산된 것 같아 한 해 누적하면 차이가 작지 않은 상태입니다. 회사는 \'상여금은 통상임금이 아니다\'·\'취업규칙에 그렇게 적혀 있다\'고 주장하지만, 본인이 받은 상여금은 재직 중인 근로자 누구에게나 매월 고정적으로 지급되던 금품이었어요." 근로기준법 제2조는 통상임금을 \'정기적·일률적·고정적으로 지급되는 임금\'으로 보고, 근로기준법 시행령 제6조는 통상임금을 기준으로 연장·야간·휴일 가산수당을 산정하도록 규정하는 영역입니다. 따라서 매월 고정·일률적으로 지급된 정기 상여금이 통상임금에 포함될 수 있는지 검토해볼 수 있는 트랙입니다. 통상임금에 포함될 여지가 있다면 그만큼 연장·야간수당 차액 청구도 검토 가능한 영역이고, 임금 청구 시효는 3년입니다. 근로자라면 ① 지급 실태 ② 통상임금성 ③ 차액 산정 ④ 청구·진정 ⑤ 시효 관리 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 실태 ② 평가 ③ 산정 ④ 청구 ⑤ 시효 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 정기 상여금 통상임금 포함 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 실태·평가·산정·청구·시효 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 지급 실태 확인</strong> — 상여금이 매월 정기·일률·고정으로 지급됐는지 명세서로 확인.</li>\n<li><strong>② 통상임금성 평가</strong> — 정기성·일률성·고정성 요건에 비춰 포함 여부 검토.</li>\n<li><strong>③ 차액 산정</strong> — 상여 포함 통상임금 기준 연장·야간수당 재계산.</li>\n<li><strong>④ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 진정.</li>\n<li><strong>⑤ 시효 관리</strong> — 임금 청구 시효 3년·소멸 도과 위험 관리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통상임금 여부는 명칭이 아니라 \'정기성·일률성·고정성\'의 실질로 평가되는 영역. 취업규칙에 \'상여는 통상임금 아님\'이라 적혀 있어도 지급 실태가 고정·일률적이면 포함될 수 있는지 검토해볼 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용노동부·근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임금명세서·취업규칙 보존 (즉시)</strong> — 상여 지급 실태·기본급·수당 산정 기준 자료 확보.</li>\n<li><strong>2단계 — 지급 실태 정리 (1~2주)</strong> — 월별 상여 금액·지급 조건·재직자 일률 지급 여부 정리.</li>\n<li><strong>3단계 — 차액 산정 (2~3주)</strong> — 상여 포함 통상임금 기준 연장·야간·휴일수당 차액 계산.</li>\n<li><strong>4단계 — 고용노동부 진정 또는 회사 청구 (시효 3년 내)</strong> — 1350 진정 또는 내용증명 발송.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의 협상.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">정기 상여금 통상임금 포함 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 실태·산정·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>월별 임금명세서 (상여·기본급·수당 구분)</strong></li>\n<li><strong>취업규칙·상여금 지급 규정</strong></li>\n<li><strong>근로계약서·연봉계약서</strong></li>\n<li><strong>연장·야간·휴일 근로 기록 (근태·출근부)</strong></li>\n<li><strong>상여 포함 통상임금 차액 산정표</strong></li>\n<li><strong>재직자 일률 지급 입증 자료 (동료 명세 정황)</strong></li>\n<li><strong>회사 회신·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상여금이 \'재직 중인 모든 근로자\'에게 매월 고정 비율로 지급됐다는 점이 통상임금성 검토의 핵심 자료. 지급 조건에 추가 성과·재량 요소가 없을수록 포함 여지가 커지는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>정기성·일률성·고정성</strong> — 세 요건 충족 여부가 통상임금 검토의 중심.</li>\n<li><strong>취업규칙 문구 vs 실태</strong> — \'상여는 통상임금 아님\' 문구보다 지급 실질 평가.</li>\n<li><strong>지급 조건 부가</strong> — 재직 요건·근무일수 조건의 성격 검토.</li>\n<li><strong>차액 산정 범위</strong> — 연장·야간·휴일수당 누락분 재계산.</li>\n<li><strong>시효 관리</strong> — 임금 청구 시효 3년·소멸 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (임금체불 신고)</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고정적·일률적 지급 금품의 통상임금 포함 평가',
        summary:
          '대법원 91다5501(대법원, 1992.07.14 선고) 영역에서 법원은 미혼자에게도 일률적으로 지급되는 가족수당처럼 고정적·일률적으로 매월 지급되는 금품의 통상임금 포함 여부를 다루면서, 명칭과 무관하게 지급 실질이 정기적·일률적·고정적이면 통상임금 범위에 포함될 수 있다고 본 사례 흐름이 있고, 매월 일률 지급된 정기 상여금의 통상임금성 평가에도 동일한 기준을 검토해볼 수 있습니다.',
        takeaway: '매월 고정·일률 지급된 상여금은 통상임금에 포함될 수 있는지 검토 가능 영역 — 연장·야간수당 차액 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '상여금도 통상임금에 포함될 수 있나요?',
        answer:
          '<strong>정기·일률·고정 지급이면 포함 여부를 검토해볼 수 있는 영역입니다.</strong> 명칭이 아니라 지급 실질로 평가.',
      },
      {
        question: '취업규칙에 \'상여는 통상임금 아님\'이라 적혀 있어요',
        answer:
          '<strong>문구보다 지급 실태가 평가의 중심인 영역입니다.</strong> 고정·일률 지급이면 포함 여지를 검토해볼 수 있습니다.',
      },
      {
        question: '연장·야간수당을 다시 받을 수 있나요?',
        answer:
          '<strong>상여 포함 통상임금 기준으로 차액을 청구해볼 수 있는 영역입니다.</strong> 근태·명세서로 누락분 산정.',
      },
      {
        question: '몇 년치까지 청구할 수 있나요?',
        answer:
          '<strong>임금 청구 시효는 3년인 영역입니다.</strong> 지급일로부터 3년 내 차액 청구 가능.',
      },
      {
        question: '재직 중인데 청구하면 불이익이 있을까요?',
        answer:
          '<strong>임금 청구를 이유로 한 불이익은 다툼 대상이 되는 영역입니다.</strong> 진정·상담 경로를 먼저 검토해볼 수 있습니다.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 진정 서류', href: '/guide/wage/unpaid-wage-complaint-docs' },
      { label: '최저임금 위반 진정', href: '/guide/wage/minimum-wage-violation-complaint' },
      { label: '체불임금 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '연장근로수당 청구', href: '/guide/wage/wage-overtime-unpaid-claim' },
      { label: '퇴사 후 임금', href: '/guide/wage/unpaid-salary-after-resignation' },
    ],
  },

  // ─── 2. wage-bonus-split-minimum-wage-evasion-track ───
  {
    domain: 'wage',
    slug: 'wage-bonus-split-minimum-wage-evasion-track',
    keyword: '상여금 분할지급 최저임금 회피',
    questionKeyword: '회사가 기존 상여금을 매월 쪼개 지급하도록 취업규칙을 바꿔 최저임금 위반을 피하려는 것 같아요. 이런 합의가 유효한가요?',
    ctaKeyword: '상여 분할 최저임금 회피 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '상여금 분할지급 최저임금 회피 — 5단계 합의 효력 점검 | 로앤가이드',
      description:
        '회사가 상여금을 매월 쪼개 최저임금 위반을 피하려 취업규칙을 바꿨다면 합의 효력·최저임금법 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중소 제조업체에서 일하는 근로자입니다. 회사는 그동안 기본급과 별도로 연 600% 상여금을 정기적으로 지급해왔는데, 최저임금이 오르면서 본인 시급이 최저임금에 미달하게 되자 \'기존 상여금을 매월 12분의 1로 쪼개 매달 지급\'하는 방식으로 취업규칙을 일방 변경했어요. 실질적인 임금 총액이나 근로 조건은 그대로인데, 상여를 매월로 쪼개니 서류상으로만 최저임금 미달이 사라진 모양새가 됐습니다. 본인을 포함한 직원들은 \'동의서\'에 서명하라는 요구를 받았지만, 사실상 거부하기 어려운 분위기였어요. 이렇게 형식만 바꾼 변경이 정말 유효한지, 최저임금 미달분을 청구할 수 있는지 막막한 상태입니다." 최저임금법 제6조는 사용자가 최저임금액 이상을 지급하도록 정하고, 최저임금 산입 범위·취업규칙 변경 절차에는 일정한 요건이 있는 영역입니다. 실질적인 변화 없이 최저임금 미달을 회피할 의도로 소정근로시간이나 임금 항목을 형식적으로 조정한 합의는 그 효력이 부정될 수 있는지 검토해볼 수 있는 트랙입니다. 임금 청구 시효는 3년이고, 미달분이 확인되면 차액 청구도 검토 가능한 영역. 근로자라면 ① 변경 경위 ② 산입 범위 ③ 합의 효력 ④ 미달 산정 ⑤ 청구·진정 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 경위 ② 범위 ③ 효력 ④ 산정 ⑤ 청구 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 상여금 분할지급 최저임금 회피 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·범위·효력·산정·청구 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 변경 경위 확인</strong> — 상여 분할 변경 시점·이유·근로조건 변화 유무 정리.</li>\n<li><strong>② 산입 범위 평가</strong> — 변경된 항목이 최저임금 산입 범위에 들어가는지 검토.</li>\n<li><strong>③ 합의 효력 평가</strong> — 실질 변화 없는 형식적 합의의 효력 부정 여부 검토.</li>\n<li><strong>④ 미달분 산정</strong> — 산입 전 기준으로 최저임금 미달분 재계산.</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 고용노동부 진정 또는 차액 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임금 총액·근로조건에 실질 변화 없이 최저임금 미달만 회피하려는 형식적 조정은 합의 효력이 부정될 수 있는지 검토해볼 수 있는 영역. 취업규칙 불이익 변경에는 근로자 과반수 동의 절차가 필요한 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용노동부·근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변경 전후 자료 보존 (즉시)</strong> — 변경 전 상여 규정·변경 후 취업규칙·동의서 사본 확보.</li>\n<li><strong>2단계 — 변경 경위 정리 (1~2주)</strong> — 변경 시점·이유·근로조건 변화 유무·동의 강요 정황 정리.</li>\n<li><strong>3단계 — 미달분 산정 (2~3주)</strong> — 형식 변경 전 기준 최저임금 미달분 월별 계산.</li>\n<li><strong>4단계 — 고용노동부 진정 (시효 3년 내)</strong> — 1350 최저임금 위반 진정 또는 내용증명.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의 협상.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">상여금 분할지급 최저임금 회피 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·효력·산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>변경 전 상여금 지급 규정·취업규칙</strong></li>\n<li><strong>변경 후 취업규칙·상여 분할 규정</strong></li>\n<li><strong>동의서·서명 요구 메일·게시 자료</strong></li>\n<li><strong>월별 임금명세서 (변경 전·후)</strong></li>\n<li><strong>해당 연도 최저임금 고시 자료</strong></li>\n<li><strong>최저임금 미달분 산정표</strong></li>\n<li><strong>근로자 과반수 동의 절차 자료 (노조 의견·동의서 수)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임금 총액이 그대로인데 \'서류상 최저임금 미달만 사라진\' 패턴이 입증되면 형식적 회피 평가가 더 분명해지는 영역. 동의서가 사실상 거부하기 어려운 분위기에서 받아졌다는 정황도 효력 다툼의 자료입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>실질 변화 유무</strong> — 임금 총액·근로조건 변화 없는 형식적 조정 여부.</li>\n<li><strong>산입 범위</strong> — 분할된 상여가 최저임금 산입 대상인지 평가.</li>\n<li><strong>합의 효력</strong> — 회피 의도의 형식적 합의 효력 부정 여부.</li>\n<li><strong>동의 절차</strong> — 취업규칙 불이익 변경의 과반수 동의 요건.</li>\n<li><strong>시효 관리</strong> — 임금 청구 시효 3년·소멸 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (최저임금 위반 신고)</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 최저임금 회피 목적의 형식적 합의 효력 평가',
        summary:
          '대법원 2015도676(대법원, 2019.05.10 선고) 영역에서 법원은 최저임금 미달을 회피할 의도로 실질 변화 없이 소정근로시간 등을 조정한 합의의 효력을 다루면서, 그러한 형식적 조정 합의는 효력이 부정될 수 있다고 본 사례 흐름이 있고, 기존 상여금을 매월 쪼개 최저임금 미달만 형식적으로 해소하려는 변경의 효력 평가에도 동일한 기준을 검토해볼 수 있습니다.',
        takeaway: '실질 변화 없이 최저임금 미달만 회피하려는 형식적 합의는 효력이 부정될 수 있는지 검토 가능 영역 — 미달분 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '상여를 매월 쪼개면 최저임금 미달이 정말 해소되나요?',
        answer:
          '<strong>실질 변화 없는 형식적 조정은 효력이 다투어질 수 있는 영역입니다.</strong> 산입 범위·변경 경위로 평가.',
      },
      {
        question: '동의서에 서명했는데도 미달분을 청구할 수 있나요?',
        answer:
          '<strong>회피 목적의 형식적 합의는 효력이 부정될 수 있는 영역입니다.</strong> 동의 강요 정황도 다툼 자료.',
      },
      {
        question: '취업규칙을 회사 마음대로 바꿀 수 있나요?',
        answer:
          '<strong>불이익 변경에는 근로자 과반수 동의가 필요한 영역입니다.</strong> 동의 절차 미비 시 효력 다툼.',
      },
      {
        question: '미달분은 몇 년치까지 청구하나요?',
        answer:
          '<strong>임금 청구 시효는 3년인 영역입니다.</strong> 미달 발생일로부터 3년 내 청구 가능.',
      },
      {
        question: '동료들과 함께 진정해도 되나요?',
        answer:
          '<strong>같은 변경 피해자 공동 진정이 가능한 영역입니다.</strong> 변경 규정·동의서를 함께 정리.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 진정 서류', href: '/guide/wage/unpaid-wage-complaint-docs' },
      { label: '최저임금 위반 진정', href: '/guide/wage/minimum-wage-violation-complaint' },
      { label: '체불임금 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '연장근로수당 청구', href: '/guide/wage/wage-overtime-unpaid-claim' },
      { label: '퇴사 후 임금', href: '/guide/wage/unpaid-salary-after-resignation' },
    ],
  },

  // ─── 3. unemployment-wage-arrears-voluntary-quit-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-wage-arrears-voluntary-quit-track',
    keyword: '임금체불 자진퇴사 실업급여',
    questionKeyword: '임금이 2개월 이상 체불돼 스스로 퇴사했는데, 자진퇴사라도 실업급여 수급이 가능한지 막막해요.',
    ctaKeyword: '임금체불 자진퇴사 실업급여 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '임금체불 자진퇴사 실업급여 — 5단계 정당 이직 점검 | 로앤가이드',
      description:
        '임금이 2개월 이상 체불돼 스스로 퇴사했다면 자진퇴사라도 실업급여 수급 가능성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중소기업에서 3년 가까이 근무하던 직장인입니다. 회사 사정이 어려워지면서 임금이 한 달, 두 달 밀리기 시작했고, 결국 2개월 이상 임금이 제대로 들어오지 않았어요. 생계가 막막해 더는 버틸 수 없어 본인이 사직서를 내고 퇴사했습니다. 그런데 \'자진퇴사는 실업급여가 안 된다\'는 말을 듣고, 그동안 꼬박꼬박 낸 고용보험이 헛수고가 되는 건 아닌지 걱정이 커졌어요. 임금이 체불된 명세서·통장 입금 내역·회사와 주고받은 독촉 메시지는 보관 중이고, 고용보험 가입 기간도 충분한 상태입니다. 자진퇴사라는 형식 때문에 정말 수급이 막히는 건지 확인하고 싶습니다." 고용보험법 제40조는 구직급여 수급 요건으로 이직 전 18개월 중 피보험단위기간 180일 이상 등을 정하고, 제58조는 이직 사유에 따른 수급자격 제한을 규정하지만, 고용노동부 고시(정당한 이직 사유)는 임금 체불 등 일정한 사유로 인한 자발적 이직은 수급자격이 제한되지 않을 수 있도록 정하는 영역입니다. 따라서 2개월 이상 임금 체불을 사유로 스스로 퇴사한 경우라도 수급 가능성을 점검해볼 수 있는 트랙입니다. 체불 사실·정도·이직과의 연관성 입증이 핵심 사정이 됩니다. ① 체불 입증 ② 이직 사유 ③ 피보험단위기간 ④ 수급 신청 ⑤ 불인정 시 심사 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 체불 ② 사유 ③ 기간 ④ 신청 ⑤ 심사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 임금체불 자진퇴사 실업급여 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 체불·사유·기간·신청·심사 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 체불 입증</strong> — 2개월 이상 임금 체불 사실·정도를 명세서·입금 내역으로 입증.</li>\n<li><strong>② 정당 이직 사유</strong> — 체불을 사유로 한 자발적 이직의 정당 사유 해당 검토.</li>\n<li><strong>③ 피보험단위기간</strong> — 이직 전 18개월 중 180일 이상 충족 확인.</li>\n<li><strong>④ 수급 신청</strong> — 워크넷 등록 + 고용센터 수급 신청.</li>\n<li><strong>⑤ 불인정 시 심사</strong> — 수급자격 불인정 시 심사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자진퇴사라는 형식만으로 수급이 막히는 것은 아닌 영역. 임금 체불 등 정당한 이직 사유에 해당하는지, 체불 사실·정도·이직과의 연관성이 입증되는지 점검해볼 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용노동부·고용보험 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 체불 입증 자료 보존 (즉시)</strong> — 임금명세서·통장 입금 내역·독촉 메시지·체불 확인 자료 확보.</li>\n<li><strong>2단계 — 이직확인서·고용보험 이력 확인 (1~2주)</strong> — 이직 사유 기재·피보험단위기간 180일 확인.</li>\n<li><strong>3단계 — 워크넷 등록 + 수급 신청 (이직 후 신속)</strong> — 고용센터 방문 + 신청서 제출.</li>\n<li><strong>4단계 — 수급자격 판정 (고용센터)</strong> — 체불 사유 정당성·연관성 심사.</li>\n<li><strong>5단계 — 불인정 시 심사 청구 (송달 후 90일 내)</strong> — 고용보험심사위원회 심사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">임금체불 자진퇴사 실업급여 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 체불·사유·신청 갈래입니다.</strong></p>\n<ul>\n<li><strong>임금명세서 (체불 기간 월별)</strong></li>\n<li><strong>통장 입금 내역 (미입금·부분 입금 정황)</strong></li>\n<li><strong>임금 독촉 메시지·메일·내용증명</strong></li>\n<li><strong>이직확인서 (이직 사유 기재)</strong></li>\n<li><strong>고용보험 피보험단위기간 이력</strong></li>\n<li><strong>고용노동부 임금체불 진정 접수증 (있을 경우)</strong></li>\n<li><strong>워크넷 등록 확인서·구직활동 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 체불 사실은 임금명세서와 실제 입금 내역의 차이로 객관 입증하는 것이 핵심. 퇴사 전 임금체불 진정을 별도로 접수해 두면 이직 사유의 정당성 입증 자료로 함께 활용해볼 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>체불 정도·기간</strong> — 2개월 이상 등 체불의 정도가 정당 사유 평가에 영향.</li>\n<li><strong>이직과의 연관성</strong> — 체불이 퇴사의 직접 사유였는지 입증.</li>\n<li><strong>이직확인서 기재</strong> — 회사 기재 사유와 실제 사유의 일치 여부.</li>\n<li><strong>피보험단위기간</strong> — 18개월 중 180일 이상 충족 확인.</li>\n<li><strong>불인정 시 심사</strong> — 송달 후 90일 내 심사 청구 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부·고용보험 1350</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 구직급여 기초일액 산정과 평균임금 규정 취지',
        summary:
          '대법원 2006두2121(대법원, 2009.01.30 선고) 영역에서 법원은 구직급여의 기초가 되는 기초일액 산정 방법을 다루면서, 그 산정은 평균임금 관련 규정의 취지에 따라 평가될 수 있다고 본 사례 흐름이 있고, 임금 체불을 사유로 한 자발적 이직 사안에서 수급 가능성과 기초일액 산정을 검토할 때에도 평균임금 규정의 취지를 함께 살펴볼 수 있습니다.',
        takeaway: '체불 사유 자발적 이직도 수급 가능성을 검토해볼 수 있는 영역 — 기초일액은 평균임금 취지로 평가되는 트랙.',
      },
    ],
    faq: [
      {
        question: '자진퇴사인데 실업급여를 받을 수 있나요?',
        answer:
          '<strong>임금 체불 등 정당 사유면 수급 가능성을 검토해볼 수 있는 영역입니다.</strong> 형식이 자진이라도 사유로 평가.',
      },
      {
        question: '임금이 며칠 밀린 정도여도 되나요?',
        answer:
          '<strong>체불의 정도·기간이 정당 사유 평가에 영향을 주는 영역입니다.</strong> 2개월 이상 등 누적 정도가 사정.',
      },
      {
        question: '체불 사실은 어떻게 입증하나요?',
        answer:
          '<strong>명세서와 실제 입금 내역의 차이로 입증해볼 수 있는 영역입니다.</strong> 독촉 메시지·진정 접수증 병행.',
      },
      {
        question: '피보험단위기간 180일은 어떻게 확인하나요?',
        answer:
          '<strong>고용보험 이력 조회로 확인할 수 있는 영역입니다.</strong> 이직 전 18개월 중 180일 이상 필요.',
      },
      {
        question: '수급자격 불인정이 나오면 어떻게 하나요?',
        answer:
          '<strong>고용보험심사위원회에 심사를 청구해볼 수 있는 영역입니다.</strong> 결정 송달 후 90일 내 청구.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '구직활동 인정 범위', href: '/guide/unemployment/unemployment-job-search-recognized-types' },
      { label: '수급 중 소득', href: '/guide/unemployment/unemployment-side-income-during-benefit' },
      { label: '실업급여 신청 절차', href: '/guide/unemployment/unemployment-application-process' },
      { label: '자진퇴사 수급 가능', href: '/guide/unemployment/voluntary-resignation-eligibility' },
    ],
  },

  // ─── 4. unemployment-daily-worker-repeat-eligibility-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-daily-worker-repeat-eligibility-track',
    keyword: '일용직 반복근로 실업급여 수급',
    questionKeyword: '일용직으로 여러 현장을 오가며 반복 근로하다 일이 끊겼는데, 피보험단위기간·이직 사유가 수급에 어떻게 반영되나요?',
    ctaKeyword: '일용직 반복근로 실업급여 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '일용직 반복근로 실업급여 — 5단계 피보험단위기간 점검 | 로앤가이드',
      description:
        '일용직으로 여러 현장을 반복 근로하다 일이 끊겼다면 피보험단위기간 180일·이직 사유 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"건설 현장을 중심으로 여러 사업장을 오가며 일용직으로 일해온 근로자입니다. 한 현장에서 며칠, 다른 현장에서 또 며칠씩 반복적으로 일했고, 그때그때 일당을 받는 방식이었어요. 그러다 일감이 급격히 줄어 더 이상 현장에 나갈 수 없게 됐는데, 그동안 일용근로 신고를 통해 고용보험료가 납부돼온 정황입니다. 본인은 \'일용직도 실업급여가 되나\', \'여러 현장을 옮겨 다닌 일수가 합산되나\', \'스스로 그만둔 건 아닌데 수급 사유가 되나\'가 막막한 상태예요. 일용근로내용 확인 신고 이력·일당 입금 내역·현장별 출역 기록은 일부 보관 중입니다." 고용보험법 제40조는 구직급여 수급 요건으로 이직 전 18개월 중 피보험단위기간 180일 이상 등을 정하고, 일용근로자의 경우 수급 신청일 이전 일정 기간의 근로일수 요건 등 별도 기준이 적용되는 영역입니다. 여러 사업장에서의 일용근로일은 고용보험 신고 이력에 따라 합산해 평가될 수 있고, 일이 끊긴 사정(수급 신청일 이전 일정 기간 근로일 부족 등)이 이직 사유로 검토되는 트랙입니다. 따라서 일용직 반복 근로라도 피보험단위기간과 근로일수 요건을 충족하는지 점검해 수급 가능성을 검토해볼 수 있습니다. ① 근로일수 ② 피보험단위기간 ③ 이직 사유 ④ 수급 신청 ⑤ 불인정 시 심사 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 일수 ② 기간 ③ 사유 ④ 신청 ⑤ 심사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 일용직 반복근로 실업급여 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 일수·기간·사유·신청·심사 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 근로일수 확인</strong> — 여러 현장 일용근로일을 고용보험 신고 이력으로 합산 확인.</li>\n<li><strong>② 피보험단위기간</strong> — 이직 전 18개월 중 180일 이상 충족 평가.</li>\n<li><strong>③ 이직 사유</strong> — 일감 단절·근로일 부족이 수급 사유로 검토되는지 평가.</li>\n<li><strong>④ 수급 신청</strong> — 워크넷 등록 + 고용센터 수급 신청.</li>\n<li><strong>⑤ 불인정 시 심사</strong> — 수급자격 불인정 시 심사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 일용직도 고용보험 신고 이력에 따라 여러 사업장 근로일을 합산해 피보험단위기간을 평가해볼 수 있는 영역. 일용근로자는 수급 신청일 이전 일정 기간의 근로일수 요건 등 별도 기준도 함께 점검하는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용노동부·고용보험 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 일용근로 이력 정리 (즉시)</strong> — 일용근로내용 확인 신고 이력·현장별 출역 기록·일당 입금 내역 확보.</li>\n<li><strong>2단계 — 피보험단위기간 확인 (1~2주)</strong> — 18개월 중 180일 이상·근로일수 요건 확인.</li>\n<li><strong>3단계 — 워크넷 등록 + 수급 신청 (신속)</strong> — 고용센터 방문 + 신청서 제출.</li>\n<li><strong>4단계 — 수급자격 판정 (고용센터)</strong> — 근로일수·이직 사유 심사.</li>\n<li><strong>5단계 — 불인정 시 심사 청구 (송달 후 90일 내)</strong> — 고용보험심사위원회 심사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">일용직 반복근로 실업급여 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 일수·기간·신청 갈래입니다.</strong></p>\n<ul>\n<li><strong>일용근로내용 확인 신고 이력</strong></li>\n<li><strong>현장별 출역 기록·작업 일지</strong></li>\n<li><strong>일당 입금 내역·통장 거래 내역</strong></li>\n<li><strong>고용보험 피보험단위기간 이력</strong></li>\n<li><strong>일용 근로계약서·현장 배치 자료 (있을 경우)</strong></li>\n<li><strong>일감 단절 정황 자료 (현장 종료·연락 자료)</strong></li>\n<li><strong>워크넷 등록 확인서·구직활동 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 여러 현장의 일용근로가 고용보험에 제대로 신고됐는지가 피보험단위기간 합산의 핵심. 신고 누락된 근로일은 정정 신고를 통해 합산 평가를 보강해볼 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>근로일 합산</strong> — 여러 현장 일용근로일의 고용보험 신고·합산 평가.</li>\n<li><strong>피보험단위기간</strong> — 18개월 중 180일 이상 충족 여부.</li>\n<li><strong>근로일수 요건</strong> — 일용근로자 별도 근로일수 요건 충족 평가.</li>\n<li><strong>이직 사유</strong> — 일감 단절이 수급 사유로 검토되는지.</li>\n<li><strong>신고 누락</strong> — 누락 근로일의 정정 신고·합산 보강.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부·고용보험 1350</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 구직급여 기준 평균임금에 포함되는 수입의 평가',
        summary:
          '대법원 2016두42289(대법원, 2019.07.25 선고) 영역에서 법원은 구직급여 기준이 되는 평균임금에 어떤 수입이 포함되는지를 다루면서, 그 포함 여부는 평균임금의 개념에 따라 평가될 수 있다고 본 사례 흐름이 있고, 일용직 반복 근로의 구직급여 산정에서 어떤 일당·수입이 평균임금에 포함되는지 검토할 때에도 평균임금 개념을 함께 살펴볼 수 있습니다.',
        takeaway: '일용직 반복 근로도 신고 이력에 따라 수급 가능성을 검토해볼 수 있는 영역 — 평균임금 개념으로 산정 평가되는 트랙.',
      },
    ],
    faq: [
      {
        question: '일용직도 실업급여를 받을 수 있나요?',
        answer:
          '<strong>피보험단위기간·근로일수 요건을 충족하면 수급 가능성을 검토해볼 수 있는 영역입니다.</strong> 신고 이력이 핵심.',
      },
      {
        question: '여러 현장에서 일한 날이 합산되나요?',
        answer:
          '<strong>고용보험 신고 이력에 따라 합산 평가해볼 수 있는 영역입니다.</strong> 현장별 출역·신고 자료 정리.',
      },
      {
        question: '스스로 그만둔 게 아닌데 수급 사유가 되나요?',
        answer:
          '<strong>일감 단절·근로일 부족도 이직 사유로 검토되는 영역입니다.</strong> 단절 정황 자료 보존.',
      },
      {
        question: '일용근로 신고가 누락된 날이 있어요',
        answer:
          '<strong>정정 신고로 합산을 보강해볼 수 있는 영역입니다.</strong> 출역 기록·입금 내역으로 입증.',
      },
      {
        question: '수급자격 불인정이 나오면 어떻게 하나요?',
        answer:
          '<strong>고용보험심사위원회에 심사를 청구해볼 수 있는 영역입니다.</strong> 결정 송달 후 90일 내 청구.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '구직활동 인정 범위', href: '/guide/unemployment/unemployment-job-search-recognized-types' },
      { label: '수급 중 소득', href: '/guide/unemployment/unemployment-side-income-during-benefit' },
      { label: '실업급여 신청 절차', href: '/guide/unemployment/unemployment-application-process' },
      { label: '자진퇴사 수급 가능', href: '/guide/unemployment/voluntary-resignation-eligibility' },
    ],
  },

  // ─── 5. retirement-bonus-average-wage-inclusion-track ───
  {
    domain: 'retirement',
    slug: 'retirement-bonus-average-wage-inclusion-track',
    keyword: '상여금 퇴직금 평균임금 산입',
    questionKeyword: '정기 상여금이 퇴직금 산정 기준이 되는 평균임금에서 빠져 퇴직금이 적게 나온 것 같아요. 다툴 수 있나요?',
    ctaKeyword: '상여 퇴직금 평균임금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '상여금 퇴직금 평균임금 산입 — 5단계 재산정 점검 | 로앤가이드',
      description:
        '정기 상여금이 퇴직금 기준 평균임금에서 빠져 퇴직금이 적게 나왔다면 평균임금 산입 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"한 회사에서 7년 근무하고 최근 퇴사한 근로자입니다. 재직 중 회사는 정기 상여금을 정해진 시기마다 지급해왔는데, 막상 퇴직금을 정산받고 보니 그 상여금이 퇴직금 산정의 기준이 되는 평균임금에 포함되지 않은 것 같았어요. 기본급만으로 평균임금을 계산하니 퇴직금이 본인이 예상한 금액보다 적게 나왔습니다. 회사는 \'상여금은 평균임금에 안 들어간다\'·\'규정대로 계산했다\'고 하지만, 본인이 받은 상여금은 정기적으로 지급되던 임금 성격의 금품이었어요. 7년치 근속에 상여가 빠진 차이라 금액이 작지 않아 다투고 싶은 상태이고, 상여 지급 내역·임금명세서·퇴직금 산정서는 보관 중입니다." 근로자퇴직급여보장법 제8조는 퇴직금을 계속근로기간 1년에 대해 30일분 이상의 평균임금으로 산정하도록 정하고, 근로기준법상 평균임금에는 근로의 대가로 정기·일률·계속적으로 지급된 임금이 포함되는 영역입니다. 따라서 정기 상여금이 퇴직금 산정 기준인 평균임금에 산입될 수 있는지 검토해볼 수 있는 트랙입니다. 산입될 여지가 있다면 그만큼 퇴직금 차액 청구도 검토 가능한 영역이고, 퇴직금 청구 시효는 3년입니다. ① 상여 성격 ② 평균임금 산입 ③ 차액 산정 ④ 청구·진정 ⑤ 시효 관리 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 성격 ② 산입 ③ 산정 ④ 청구 ⑤ 시효 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 상여금 퇴직금 평균임금 산입 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 성격·산입·산정·청구·시효 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상여 성격 확인</strong> — 정기·일률·계속 지급된 임금 성격인지 명세서로 확인.</li>\n<li><strong>② 평균임금 산입 평가</strong> — 정기 상여가 평균임금에 포함될 수 있는지 검토.</li>\n<li><strong>③ 차액 산정</strong> — 상여 포함 평균임금 기준 퇴직금 재계산.</li>\n<li><strong>④ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 진정.</li>\n<li><strong>⑤ 시효 관리</strong> — 퇴직금 청구 시효 3년·소멸 도과 위험 관리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 퇴직금은 평균임금을 기초로 산정되는 영역. 정기·일률·계속적으로 지급된 상여금이 평균임금에 산입될 수 있는지가 핵심 검토 사정이고, 산입 여부에 따라 퇴직금 차액이 달라질 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용노동부·근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 상여 내역·퇴직금 산정서 보존 (즉시)</strong> — 상여 지급 내역·임금명세서·퇴직금 산정서 확보.</li>\n<li><strong>2단계 — 상여 성격 정리 (1~2주)</strong> — 지급 주기·일률성·계속성으로 임금 성격 정리.</li>\n<li><strong>3단계 — 차액 산정 (2~3주)</strong> — 상여 포함 평균임금 기준 퇴직금 재계산·차액 산정.</li>\n<li><strong>4단계 — 고용노동부 진정 또는 회사 청구 (시효 3년 내)</strong> — 1350 진정 또는 내용증명.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의 협상.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">상여금 퇴직금 평균임금 산입 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 성격·산입·산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>상여금 지급 내역 (지급 시기·금액)</strong></li>\n<li><strong>월별 임금명세서 (퇴직 전 3개월 포함)</strong></li>\n<li><strong>취업규칙·상여금 지급 규정</strong></li>\n<li><strong>회사 퇴직금 산정서</strong></li>\n<li><strong>근로계약서·연봉계약서</strong></li>\n<li><strong>상여 포함 평균임금·퇴직금 차액 산정표</strong></li>\n<li><strong>회사 회신·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 평균임금은 퇴직 전 3개월 임금 총액을 기초로 산정되므로, 그 기간에 지급되거나 지급될 정기 상여를 일정 비율로 안분해 반영하는지가 차액 산정의 핵심. 상여 지급 주기·일률성 자료가 산입 검토의 결정 자료입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>상여의 임금 성격</strong> — 정기·일률·계속 지급 여부 평가.</li>\n<li><strong>평균임금 산입</strong> — 정기 상여의 평균임금 포함 검토.</li>\n<li><strong>안분 반영</strong> — 3개월 평균임금에 상여를 비율로 반영하는 방식.</li>\n<li><strong>회사 산정서 vs 재산정</strong> — 회사 계산과 상여 포함 재계산 차액.</li>\n<li><strong>시효 관리</strong> — 퇴직금 청구 시효 3년·소멸 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (퇴직금 미지급 신고)</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 평균임금 산입 임금의 퇴직금 산정 기초 제외 평가',
        summary:
          '대법원 94다6789(대법원, 1994.12.23 선고) 영역에서 법원은 평균임금에 산입될 임금을 퇴직금 산정 기초에서 제외한 경우라도 그 결과가 법정 하한을 상회하면 규정이 무효라고 보기 어렵다는 취지를 다룬 사례 흐름이 있고, 정기 상여금의 평균임금 산입과 퇴직금 차액을 검토할 때에도 산입 여부와 법정 하한 충족 여부를 함께 살펴볼 수 있습니다.',
        takeaway: '정기 상여는 평균임금에 산입될 수 있는지 검토 가능 영역 — 산입 결과가 법정 하한을 넘는지 함께 평가하는 트랙.',
      },
    ],
    faq: [
      {
        question: '상여금도 퇴직금 계산에 들어갈 수 있나요?',
        answer:
          '<strong>정기·일률·계속 지급이면 평균임금 산입을 검토해볼 수 있는 영역입니다.</strong> 지급 실질로 평가.',
      },
      {
        question: '회사가 \'상여는 평균임금에 안 들어간다\'고 해요',
        answer:
          '<strong>지급 실태에 따라 산입 여부가 달라질 수 있는 영역입니다.</strong> 명세서·지급 내역으로 검토.',
      },
      {
        question: '상여를 어떻게 평균임금에 반영하나요?',
        answer:
          '<strong>지급 주기에 따라 일정 비율로 안분해 반영하는 영역입니다.</strong> 3개월 평균임금 기준으로 산정.',
      },
      {
        question: '퇴직금 차액은 몇 년치까지 청구하나요?',
        answer:
          '<strong>퇴직금 청구 시효는 3년인 영역입니다.</strong> 퇴직일로부터 3년 내 차액 청구 가능.',
      },
      {
        question: '이미 받은 퇴직금이 있는데도 더 청구할 수 있나요?',
        answer:
          '<strong>상여 포함 재산정 차액을 청구해볼 수 있는 영역입니다.</strong> 회사 산정서와 비교해 차액 산정.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 진정', href: '/guide/retirement/retirement-pay-complaint' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '1년 미만 수급', href: '/guide/retirement/retirement-less-than-1year-eligibility' },
      { label: '기간제 합산', href: '/guide/retirement/retirement-fixed-term-aggregation' },
      { label: '중간정산', href: '/guide/retirement/retirement-interim-settlement' },
    ],
  },

  // ─── 6. retirement-welfare-allowance-average-wage-track ───
  {
    domain: 'retirement',
    slug: 'retirement-welfare-allowance-average-wage-track',
    keyword: '복리후생비 퇴직금 평균임금 산입',
    questionKeyword: '급식비·체력단련비·월동보조비 같은 복리후생비가 퇴직금 평균임금에 포함되는지에 따라 퇴직금 차이가 커 보여요.',
    ctaKeyword: '복리후생비 퇴직금 평균임금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '복리후생비 퇴직금 평균임금 산입 — 5단계 임금성 점검 | 로앤가이드',
      description:
        '급식비·체력단련비·월동보조비가 퇴직금 평균임금에 들어가는지로 퇴직금 차이가 크다면 임금성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"한 사업장에서 오래 근무하고 퇴사한 근로자입니다. 재직 중 기본급 외에 급식비·체력단련비·월동보조비 같은 명목의 금품을 매월 또는 정해진 시기마다 받아왔는데, 퇴직금을 정산받고 보니 회사가 이런 복리후생비를 평균임금에서 모두 제외하고 계산했어요. 회사는 \'복리후생비는 임금이 아니라 복지 차원의 지급\'이라고 주장하지만, 본인이 받은 금품은 재직 중인 직원이라면 누구에게나 정기적으로 일률 지급되던 것이었습니다. 복리후생비가 평균임금에 포함되느냐 아니냐에 따라 퇴직금 차이가 작지 않아 다투고 싶은 상태이고, 지급 내역·임금명세서·퇴직금 산정서는 보관 중이에요." 근로자퇴직급여보장법 제8조는 퇴직금을 평균임금을 기초로 산정하도록 정하고, 근로기준법 제2조의 임금에는 사용자가 근로의 대가로 근로자에게 지급하는 일체의 금품이 포함되는 영역입니다. 따라서 급식비·체력단련비·월동보조비 등도 정기·일률·계속적으로 지급됐다면 임금에 해당해 평균임금에 산입될 수 있는지 검토해볼 수 있는 트랙입니다. 산입될 여지가 있다면 퇴직금 차액 청구도 검토 가능한 영역이고, 퇴직금 청구 시효는 3년입니다. ① 지급 실태 ② 임금성 ③ 차액 산정 ④ 청구·진정 ⑤ 시효 관리 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 실태 ② 임금성 ③ 산정 ④ 청구 ⑤ 시효 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 복리후생비 퇴직금 평균임금 산입 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 실태·임금성·산정·청구·시효 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 지급 실태 확인</strong> — 급식비·체력단련비·월동보조비의 지급 주기·대상 확인.</li>\n<li><strong>② 임금성 평가</strong> — 정기·일률·계속 지급으로 임금에 해당하는지 검토.</li>\n<li><strong>③ 차액 산정</strong> — 복리후생비 포함 평균임금 기준 퇴직금 재계산.</li>\n<li><strong>④ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 진정.</li>\n<li><strong>⑤ 시효 관리</strong> — 퇴직금 청구 시효 3년·소멸 도과 위험 관리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'복리후생비\'라는 명칭만으로 임금성이 부정되는 것은 아닌 영역. 재직자 누구에게나 정기·일률·계속 지급됐다면 임금에 해당해 평균임금에 산입될 수 있는지 검토해볼 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용노동부·근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 복리후생비 내역·산정서 보존 (즉시)</strong> — 급식비·체력단련비·월동보조비 지급 내역·임금명세서·퇴직금 산정서 확보.</li>\n<li><strong>2단계 — 지급 실태 정리 (1~2주)</strong> — 지급 주기·대상·일률성으로 임금성 정리.</li>\n<li><strong>3단계 — 차액 산정 (2~3주)</strong> — 복리후생비 포함 평균임금 기준 퇴직금 재계산·차액 산정.</li>\n<li><strong>4단계 — 고용노동부 진정 또는 회사 청구 (시효 3년 내)</strong> — 1350 진정 또는 내용증명.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의 협상.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">복리후생비 퇴직금 평균임금 산입 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 실태·임금성·산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>급식비·체력단련비·월동보조비 지급 내역</strong></li>\n<li><strong>월별 임금명세서 (퇴직 전 3개월 포함)</strong></li>\n<li><strong>취업규칙·복리후생 지급 규정</strong></li>\n<li><strong>회사 퇴직금 산정서</strong></li>\n<li><strong>근로계약서·연봉계약서</strong></li>\n<li><strong>복리후생비 포함 평균임금·퇴직금 차액 산정표</strong></li>\n<li><strong>회사 회신·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 복리후생비가 \'재직 중인 모든 근로자에게 정기·일률 지급\'됐다는 점이 임금성 검토의 핵심 자료. 실비 변상 성격이 아니라 고정 금액으로 일률 지급될수록 평균임금 산입 여지가 커지는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임금성 vs 복지성</strong> — 정기·일률·계속 지급인지, 실비 변상인지 평가.</li>\n<li><strong>평균임금 산입</strong> — 복리후생비의 평균임금 포함 검토.</li>\n<li><strong>명칭 vs 실질</strong> — \'복리후생비\' 명칭보다 지급 실질 평가.</li>\n<li><strong>회사 산정서 vs 재산정</strong> — 회사 계산과 포함 재계산 차액.</li>\n<li><strong>시효 관리</strong> — 퇴직금 청구 시효 3년·소멸 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (퇴직금 미지급 신고)</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 급식비·체력단련비·월동보조비의 임금성과 평균임금 산입 평가',
        summary:
          '대법원 90다15662(대법원, 1991.02.26 선고) 영역에서 법원은 급식비·체력단련비·월동보조비 등도 임금에 해당해 평균임금에 산입될 수 있다는 취지를 다룬 사례 흐름이 있고, 정기·일률·계속적으로 지급된 복리후생비의 퇴직금 평균임금 산입을 검토할 때에도 그 지급 실질에 따라 임금성을 평가해볼 수 있습니다.',
        takeaway: '정기·일률 지급된 복리후생비도 평균임금에 산입될 수 있는지 검토 가능 영역 — 퇴직금 차액 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '급식비·월동보조비도 퇴직금에 반영되나요?',
        answer:
          '<strong>정기·일률·계속 지급이면 평균임금 산입을 검토해볼 수 있는 영역입니다.</strong> 지급 실질로 평가.',
      },
      {
        question: '회사가 \'복지라서 임금이 아니다\'라고 해요',
        answer:
          '<strong>명칭보다 지급 실태가 평가의 중심인 영역입니다.</strong> 일률·고정 지급이면 산입 여지를 검토.',
      },
      {
        question: '실비로 받은 것도 평균임금에 들어가나요?',
        answer:
          '<strong>실비 변상 성격이면 임금성이 약해지는 영역입니다.</strong> 고정 금액 일률 지급일수록 산입 여지.',
      },
      {
        question: '퇴직금 차액은 몇 년치까지 청구하나요?',
        answer:
          '<strong>퇴직금 청구 시효는 3년인 영역입니다.</strong> 퇴직일로부터 3년 내 차액 청구 가능.',
      },
      {
        question: '이미 퇴직금을 받았는데 더 청구할 수 있나요?',
        answer:
          '<strong>복리후생비 포함 재산정 차액을 청구해볼 수 있는 영역입니다.</strong> 회사 산정서와 비교해 산정.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 진정', href: '/guide/retirement/retirement-pay-complaint' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '1년 미만 수급', href: '/guide/retirement/retirement-less-than-1year-eligibility' },
      { label: '기간제 합산', href: '/guide/retirement/retirement-fixed-term-aggregation' },
      { label: '중간정산', href: '/guide/retirement/retirement-interim-settlement' },
    ],
  },

  // ─── 7. industrial-accident-commute-injury-recognition-track ───
  {
    domain: 'industrial-accident1',
    slug: 'industrial-accident-commute-injury-recognition-track',
    keyword: '출퇴근 재해 산재 인정',
    questionKeyword: '통상적인 출퇴근 경로에서 교통사고·낙상으로 다쳤는데, 회사가 산재가 아니라고 해요. 출퇴근 재해로 인정받을 수 있나요?',
    ctaKeyword: '출퇴근 재해 산재 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '출퇴근 재해 산재 인정 — 5단계 통상 경로 점검 | 로앤가이드',
      description:
        '통상 출퇴근 경로에서 교통사고·낙상으로 다쳤는데 회사가 산재를 부인한다면 출퇴근 재해 인정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"매일 같은 시간, 같은 경로로 출퇴근하던 근로자입니다. 평소처럼 집에서 회사로 가던 길에 교통사고(또는 빙판길 낙상)로 다쳐 병원 치료를 받게 됐어요. 그런데 회사는 \'업무 시간 중에 다친 게 아니니 산재가 아니다\'·\'개인 사고\'라며 산재 처리에 협조하지 않고 있습니다. 본인은 출퇴근 중 다친 것도 산재가 될 수 있다고 들었는데, 막상 회사가 부인하니 요양급여 신청을 어디서부터 어떻게 해야 할지 막막한 상태예요. 사고 경위·진단서·치료비 영수증·평소 출퇴근 경로 자료는 보관 중입니다." 산업재해보상보험법 제37조는 통상적인 경로와 방법으로 출퇴근하는 중에 발생한 사고를 출퇴근 재해로 정하고, 그 경우 요양급여 등 산재보험 급여를 신청할 수 있는 영역입니다. 다만 통상적인 경로를 벗어나거나 중단한 경우 등에는 예외가 적용될 수 있어, 사고가 통상적인 출퇴근 경로·방법에서 발생했는지가 핵심 검토 사정이 되는 트랙입니다. 인정은 근로복지공단의 요양급여 신청·심사를 통해 결정되고, 회사가 부인하더라도 근로자 본인이 직접 신청해볼 수 있습니다. ① 경로 입증 ② 통상성 평가 ③ 요양 신청 ④ 공단 심사 ⑤ 급여·재심사 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 경로 ② 통상성 ③ 신청 ④ 심사 ⑤ 급여 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 출퇴근 재해 산재 인정 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경로·통상성·신청·심사·급여 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경로 입증</strong> — 평소 출퇴근 경로·시간·방법을 사고 경위와 함께 정리.</li>\n<li><strong>② 통상성 평가</strong> — 통상적인 경로·방법에서 발생했는지, 이탈·중단 여부 검토.</li>\n<li><strong>③ 요양급여 신청</strong> — 근로복지공단에 요양급여 신청서 제출.</li>\n<li><strong>④ 공단 심사</strong> — 출퇴근 재해 해당 여부 심사.</li>\n<li><strong>⑤ 급여·재심사</strong> — 요양·휴업급여 청구, 불승인 시 재심사.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통상적인 경로·방법으로 출퇴근하던 중 사고는 출퇴근 재해로 검토될 수 있는 영역. 경로 이탈·중단이 없었는지가 핵심 사정이고, 회사 협조가 없어도 근로자 본인이 공단에 직접 신청해볼 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 근로복지공단·고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고·치료 자료 보존 (즉시)</strong> — 진단서·치료 기록·사고 경위서·교통사고 사실확인원 등 확보.</li>\n<li><strong>2단계 — 출퇴근 경로 입증 자료 (1~2주)</strong> — 평소 경로·시간·교통수단·대중교통 이용 내역 정리.</li>\n<li><strong>3단계 — 근로복지공단 요양급여 신청 (신속)</strong> — 신청서 + 진단서 + 사고 경위 자료 제출.</li>\n<li><strong>4단계 — 공단 심사 (수주~수개월)</strong> — 출퇴근 재해 해당 여부·통상성 심사.</li>\n<li><strong>5단계 — 급여 청구·재심사</strong> — 요양·휴업급여 청구, 불승인 시 재심사·심사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 산재 요양급여 신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">출퇴근 재해 산재 인정 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=industrial-accident1" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 경로·사고·신청 갈래입니다.</strong></p>\n<ul>\n<li><strong>진단서·치료 경과 기록</strong></li>\n<li><strong>치료비 영수증·진료 명세</strong></li>\n<li><strong>사고 경위서 (일시·장소·경위)</strong></li>\n<li><strong>교통사고 사실확인원 또는 사고 입증 자료</strong></li>\n<li><strong>평소 출퇴근 경로·시간·교통수단 자료</strong></li>\n<li><strong>근로계약서·출퇴근 시간 자료 (근태)</strong></li>\n<li><strong>요양급여 신청서 (공단 양식)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사고 지점이 평소 출퇴근 경로 위였는지, 출퇴근 시간대였는지가 통상성 검토의 핵심. 경로 이탈·일상생활을 위한 사소한 일탈 여부도 함께 정리해 두면 심사 자료로 활용해볼 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>경로 통상성</strong> — 평소 경로·시간·방법에서 발생했는지 평가.</li>\n<li><strong>경로 이탈·중단</strong> — 이탈·중단 사정과 예외 적용 여부 검토.</li>\n<li><strong>회사 협조 부재</strong> — 회사 협조 없이도 본인 신청 가능.</li>\n<li><strong>인과·발병 시점</strong> — 사고와 부상의 인과·치료 경위 입증.</li>\n<li><strong>불승인 시 재심사</strong> — 산재보험 재심사·심사 청구 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>근로복지공단 1588-0075 (산재 신청·상담)</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 산재보험 관련 처분의 항고소송 대상성 평가',
        summary:
          '대법원 94누8853(대법원, 1995.07.28 선고) 영역에서 법원은 산재보험 관련 처분이 항고소송 대상인 행정처분에 해당하는지를 다루면서, 그 판단은 처분이 권리·의무에 직접 법률상 변동을 가져오는지로 평가될 수 있다고 본 사례 흐름이 있고, 출퇴근 재해 요양급여 신청에 대한 공단의 결정에 불복할 때에도 처분의 성격과 불복 절차를 함께 검토해볼 수 있습니다.',
        takeaway: '출퇴근 재해도 통상 경로 사고면 요양급여 신청을 검토해볼 수 있는 영역 — 불승인 시 재심사·불복 절차 검토 트랙.',
      },
    ],
    faq: [
      {
        question: '출퇴근 중 사고도 산재가 되나요?',
        answer:
          '<strong>통상 경로·방법으로 출퇴근하던 중 사고는 출퇴근 재해로 검토해볼 수 있는 영역입니다.</strong> 경로 통상성이 핵심.',
      },
      {
        question: '회사가 산재가 아니라고 협조를 안 해요',
        answer:
          '<strong>근로자 본인이 근로복지공단에 직접 신청해볼 수 있는 영역입니다.</strong> 회사 협조 부재 시 자료 직접 확보.',
      },
      {
        question: '평소 가던 길에서 잠깐 들른 곳에서 다쳤어요',
        answer:
          '<strong>경로 이탈·중단 여부가 통상성 평가의 사정인 영역입니다.</strong> 일상 위한 사소한 일탈 여부도 검토.',
      },
      {
        question: '대중교통으로 출근하다 다쳐도 되나요?',
        answer:
          '<strong>통상적인 방법의 출퇴근이면 검토 대상이 되는 영역입니다.</strong> 이용 경로·시간 자료로 입증.',
      },
      {
        question: '산재 불승인이 나오면 어떻게 하나요?',
        answer:
          '<strong>재심사·심사 청구를 해볼 수 있는 영역입니다.</strong> 결정 송달 후 기한 내 불복 절차 검토.',
      },
    ],
    cta: { text: '산재 요양급여 신청 순서, AI로 정리하기', link: '/chat?domain=industrial-accident1' },
    internalLinks: [
      { label: '산재 신청 절차', href: '/guide/industrial-accident1/workers-comp-claim-process' },
      { label: '장해급여', href: '/guide/industrial-accident1/workers-comp-disability-benefits' },
      { label: '산재 구비서류', href: '/guide/industrial-accident1/workers-comp-required-documents' },
      { label: '직업병 인정', href: '/guide/industrial-accident1/occupational-disease-recognition' },
      { label: '요양급여 치료', href: '/guide/industrial-accident1/workers-comp-medical-treatment' },
    ],
  },
];
