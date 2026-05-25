import { SpokePage } from '../spoke-pages';

// batch78 wage / unemployment / retirement / industrial-accident — 6개 (2026-05-26)
//
// 고유 존재 이유:
// 1. 임금 소급 인상분 미지급 — 일반 임금체불 류와 분기. 여기는 '임금 소급 인상 합의·단협 후 인상 차액 미정산 + 적용 시점 다툼 + 차액 산정' 트랙. 근기법 제43조 결합.
// 2. 5인 미만 사업장 가산수당 — 일반 가산수당 류와 분기. 여기는 '상시 근로자 수 산정 다툼 + 5인 이상 판정 시 가산수당 적용 + 연인원 기준' 트랙. 근기법 제11조·제56조 결합.
// 3. 부정수급 반환·추가징수 대응 — 일반 실업급여 수급 류와 분기. 여기는 '구직급여 부정수급 의심 통보 + 반환·추가징수 처분 + 부정 방법 해당 여부 다툼' 트랙. 고용보험법 제61조·제62조 결합.
// 4. DC형 부담금 미납·체납 — 일반 퇴직금 청구 류와 분기. 여기는 '확정기여형 퇴직연금 부담금 미납·체납 + 운용수익 손실 + 미납 부담금 청구' 트랙. 근퇴법 제20조 결합.
// 5. 경영평가성과급 평균임금 포함 — 일반 퇴직금 산정 류와 분기. 여기는 '공공기관 경영평가성과급 평균임금 포함 여부 + 정기성·확정성 + 퇴직금 재산정' 트랙. 근퇴법 제8조+근기법 평균임금 결합.
// 6. 업무상 정신질환(우울증) 산재 — 일반 산재 류와 분기. 여기는 '업무 스트레스 우울증 등 정신질환 + 업무 기인성 인과관계 + 요양급여 신청' 트랙. 산재보험법 제37조+제5조 결합.

export const spokesBatch78WageUnempRetireIa: SpokePage[] = [
  // ─── 1. wage-retroactive-raise-shortfall-track ───
  {
    domain: 'wage',
    slug: 'wage-retroactive-raise-shortfall-track',
    keyword: '임금 소급 인상분 미지급',
    questionKeyword: '임금을 소급해서 올려주기로 합의했는데 회사가 인상 차액을 지급하지 않아요. 청구할 수 있나요?',
    ctaKeyword: '임금 소급 인상분 미지급 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임금 소급 인상분 미지급 — 5단계 인상 차액 청구 점검 | 로앤가이드',
      description:
        '소급 인상에 합의했는데 인상 차액이 들어오지 않아 답답하시다면 적용 시점·차액 산정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"임금협상으로 기본급을 소급 인상하기로 합의한 회사에 다니는 근로자입니다. 단체협약과 사내 공지에는 \'올해 1월분부터 소급 적용\'이라고 명시됐는데, 정작 인상 차액은 몇 달째 들어오지 않았어요. 회사는 \'예산 사정\'·\'적용 시점은 협상 타결일부터\'라며 말을 바꾸고 있고, 이미 퇴사한 동료들은 차액을 받지도 못한 상황입니다. 합의문에 분명히 소급 적용이라고 적혀 있는데 이대로 묻혀도 되는 건지 막막한 상태예요." 근로기준법 제43조는 임금을 통화로 직접·전액·정기 지급하도록 정하고, 소급 인상 합의가 이뤄지면 그 인상분도 근로의 대가로서 청구 대상이 될 수 있는 영역입니다. 소급 적용 시점은 단체협약·합의문·취업규칙 문언으로 확정되고, 임금 청구 시효는 3년인 트랙입니다. 근로자라면 ① 합의 문언 ② 적용 시점 ③ 차액 산정 ④ 청구·진정 ⑤ 시효 관리 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 문언 ② 시점 ③ 차액 ④ 청구 ⑤ 시효 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 임금 소급 인상분 미지급 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 문언·시점·차액·청구·시효 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 합의 문언 확인</strong> — 단체협약·합의문·공지의 소급 적용 문구 확인.</li>\n<li><strong>② 소급 적용 시점</strong> — 인상 적용 기산일(예: 1월분부터)을 문언으로 특정.</li>\n<li><strong>③ 인상 차액 산정</strong> — 인상 전후 임금 차이 × 소급 적용 개월수 계산.</li>\n<li><strong>④ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정.</li>\n<li><strong>⑤ 시효 관리</strong> — 임금 청구 시효 3년·소멸 도과 위험 관리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 소급 인상 합의가 단체협약·합의문 문언으로 확정됐다면 그 인상 차액도 근로의 대가로 청구를 검토해볼 수 있는 영역. 적용 기산일이 언제인지가 차액 산정의 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 임금 소급 인상분 미지급 5단계',
        content:
          '<p><strong>A. 고용노동부·근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 합의 자료·명세서 보존 (즉시)</strong> — 단체협약·합의문·사내 공지·임금명세서 확보.</li>\n<li><strong>2단계 — 소급 적용 시점 확정 (1~2주)</strong> — 문언상 기산일·적용 범위(재직자·퇴직자) 정리.</li>\n<li><strong>3단계 — 인상 차액 산정 (2~3주)</strong> — 인상 전후 차이 × 소급 개월수로 차액 도출.</li>\n<li><strong>4단계 — 고용노동부 진정 또는 회사 청구 (시효 3년 내)</strong> — 1350 진정 또는 내용증명 발송.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의 협상.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임금 소급 인상분 미지급 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 문언·시점·산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>단체협약·임금합의문 (소급 적용 문구 포함)</strong></li>\n<li><strong>사내 공지·인사 발령·이메일 (소급 기산일 명시)</strong></li>\n<li><strong>인상 전후 임금명세서 (차액 비교 자료)</strong></li>\n<li><strong>근로계약서·취업규칙 (임금 규정)</strong></li>\n<li><strong>인상 차액 산정표 (차이 × 소급 개월수)</strong></li>\n<li><strong>퇴직자 미지급 여부 확인 자료 (해당 시)</strong></li>\n<li><strong>회사 회신·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 합의문에 \'소급 적용\' 문구가 있으면 적용 기산일이 청구의 핵심 근거. 회사가 적용 시점을 협상 타결일로 바꾸려 한다면 합의 당시 문언·공지가 우선 검토되는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>소급 적용 시점</strong> — 기산일이 합의 문언과 일치하는지가 차액 산정의 분기점.</li>\n<li><strong>적용 대상 범위</strong> — 재직자만인지, 퇴직자도 포함인지 합의 해석.</li>\n<li><strong>유리한 근로조건 우선</strong> — 개별 합의가 취업규칙보다 유리하면 그 내용 우선 검토.</li>\n<li><strong>예산 사정 주장</strong> — 회사 예산 사정만으로 합의 효력이 배제되는지 다툼.</li>\n<li><strong>시효 관리</strong> — 임금 청구 시효 3년·소멸 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (임금체불 신고)</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 임금체불 진정 온라인 (moel.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 유리한 근로계약 우선과 소급 임금조건 효력 평가',
        summary:
          '대법원 2018다200709(대법원, 2019.11.14 선고) 영역에서 법원은 집단적 동의를 받아 근로자에게 불리한 내용으로 취업규칙이 변경된 경우에도 그보다 유리한 근로조건을 정한 기존 개별 근로계약 내용은 근로자의 개별적 동의가 없는 한 우선하여 적용된다고 판단한 사례 흐름이 있으며, 소급 인상 합의로 정해진 유리한 임금조건의 효력을 검토할 때에도 동일한 기준을 살펴볼 수 있습니다.',
        takeaway: '소급 인상 합의 문언으로 정해진 임금 차액은 근로의 대가로 청구를 검토해볼 수 있는 영역 — 적용 시점·차액 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '소급 인상 합의를 했는데 차액을 안 줘요. 청구할 수 있나요?',
        answer:
          '<strong>합의 문언으로 소급 적용이 확정됐다면 차액 청구를 검토해볼 수 있는 영역입니다.</strong> 적용 기산일 문언 확인이 먼저.',
      },
      {
        question: '회사가 적용 시점을 협상 타결일로 바꾸려 해요',
        answer:
          '<strong>합의 당시 문언·공지가 우선 검토되는 영역입니다.</strong> 단체협약·이메일·공지의 기산일 기재 확보.',
      },
      {
        question: '인상 차액은 어떻게 계산하나요?',
        answer:
          '<strong>인상 전후 임금 차이 × 소급 적용 개월수로 산정하는 영역입니다.</strong> 인상 전후 명세서로 비교.',
      },
      {
        question: '이미 퇴사했는데 소급 인상분을 받을 수 있나요?',
        answer:
          '<strong>적용 대상에 퇴직자가 포함됐는지 합의 해석으로 검토하는 영역입니다.</strong> 적용 범위 문언을 확인.',
      },
      {
        question: '소급 인상분은 몇 년치까지 청구하나요?',
        answer:
          '<strong>임금 청구 시효는 3년인 영역입니다.</strong> 지급일로부터 3년 내 차액 청구 가능.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 진정 서류', href: '/guide/wage/unpaid-wage-complaint-docs' },
      { label: '임금 동결 일방 통보', href: '/guide/wage/wage-salary-freeze-unilateral-notice' },
      { label: '취업규칙 불이익 변경', href: '/guide/wage/wage-employment-rule-change-unfavorable' },
      { label: '체불임금 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '퇴사 후 임금', href: '/guide/wage/unpaid-salary-after-resignation' },
    ],
  },

  // ─── 2. wage-under-5-headcount-premium-track ───
  {
    domain: 'wage',
    slug: 'wage-under-5-headcount-premium-track',
    keyword: '5인 미만 가산수당 상시 근로자 수',
    questionKeyword: '회사가 5인 미만이라며 연장·야간 가산수당을 안 준다는데, 실제로는 5인 이상인 것 같아요. 어떻게 확인하나요?',
    ctaKeyword: '5인 미만 가산수당 상시 근로자 수 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '5인 미만 가산수당 — 5단계 상시 근로자 수 점검 | 로앤가이드',
      description:
        '회사가 5인 미만이라며 가산수당을 거부하는데 실제 인원이 의심스럽다면 상시 근로자 수 산정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"작은 매장에서 일하는 근로자입니다. 연장·야간 근무가 잦은데 회사는 \'우리는 5인 미만이라 가산수당 줄 의무가 없다\'고 합니다. 그런데 실제로는 정규 직원에 아르바이트·단시간 근로자까지 합치면 늘 5명을 넘는 것 같고, 다만 사람이 들고 나는 날이 있어 어떤 날은 4명이기도 해요. 사장은 \'그날그날 인원이 다르니 5인 미만\'이라고 하는데, 가산수당이 적용되는 사업장인지 헷갈리고 막막합니다." 근로기준법 제11조는 가산수당 등 일부 규정을 상시 5명 이상 사업장에 적용하도록 정하고, 제56조는 연장·야간·휴일 근로에 통상임금의 50% 이상 가산을 규정하는 영역입니다. 상시 근로자 수는 산정기간 동안 사용한 근로자의 연인원을 가동일수로 나눠 산정하고, 때때로 5인 미만이 되더라도 상태적으로 5인 이상이면 적용 대상이 될 수 있는 트랙입니다. 근로자라면 ① 인원 기록 ② 상시 근로자 수 산정 ③ 가산수당 차액 ④ 청구·진정 ⑤ 시효 관리 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 기록 ② 산정 ③ 차액 ④ 청구 ⑤ 시효 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 5인 미만 가산수당 상시 근로자 수 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 인원기록·산정·차액·청구·시효 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 인원 기록 확인</strong> — 일별 출근 인원·근무표·급여대장으로 실제 인원 정리.</li>\n<li><strong>② 상시 근로자 수 산정</strong> — 산정기간 연인원 ÷ 가동일수로 상시 근로자 수 계산.</li>\n<li><strong>③ 가산수당 차액 산정</strong> — 5인 이상 판정 시 통상임금 × 50% 가산수당 재계산.</li>\n<li><strong>④ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정.</li>\n<li><strong>⑤ 시효 관리</strong> — 임금 청구 시효 3년·소멸 도과 위험 관리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상시 근로자 수는 매일의 인원이 아니라 산정기간 동안의 연인원을 가동일수로 나눠 판단하는 영역. 때때로 4명이 되더라도 상태적으로 5인 이상이면 가산수당 적용 대상으로 검토될 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5인 미만 가산수당 5단계',
        content:
          '<p><strong>A. 고용노동부·근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 인원·근무 자료 보존 (즉시)</strong> — 일별 근무표·출근부·급여대장·4대보험 가입자 명단 확보.</li>\n<li><strong>2단계 — 상시 근로자 수 산정 (1~2주)</strong> — 산정기간 연인원 ÷ 가동일수 계산, 5인 이상 여부 판정.</li>\n<li><strong>3단계 — 가산수당 차액 산정 (2~3주)</strong> — 5인 이상 판정 시 통상임금 × 50% 기준 가산수당 재계산.</li>\n<li><strong>4단계 — 고용노동부 진정 또는 회사 청구 (시효 3년 내)</strong> — 1350 진정 또는 내용증명 발송.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의 협상.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 야근수당 신고 가능성, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">5인 미만 가산수당 상시 근로자 수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 인원·산정·차액 갈래입니다.</strong></p>\n<ul>\n<li><strong>일별 근무표·출근부 (산정기간 전체)</strong></li>\n<li><strong>급여대장·임금명세서 (전체 근로자 분)</strong></li>\n<li><strong>4대보험 가입자 명단·사업장 가입 내역</strong></li>\n<li><strong>아르바이트·단시간 근로자 근로계약서</strong></li>\n<li><strong>연장·야간 근로시간 기록</strong></li>\n<li><strong>상시 근로자 수 산정표 (연인원 ÷ 가동일수)</strong></li>\n<li><strong>회사 회신·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상시 근로자 수에는 정규직뿐 아니라 아르바이트·단시간 근로자도 산정 대상에 포함될 수 있는 영역. 일별 근무표·4대보험 가입자 명단이 인원 입증의 핵심 자료입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>상시 근로자 수 산정</strong> — 매일의 인원이 아닌 연인원 ÷ 가동일수 기준 판정.</li>\n<li><strong>상태적 5인 이상</strong> — 때때로 4명이 되더라도 상태적으로 5인 이상인지.</li>\n<li><strong>산정 대상 범위</strong> — 아르바이트·단시간 근로자의 산정 포함 여부.</li>\n<li><strong>가산수당 적용</strong> — 5인 이상 판정 시 통상임금 × 50% 가산수당 적용.</li>\n<li><strong>시효 관리</strong> — 임금 청구 시효 3년·소멸 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (임금체불 신고)</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 임금체불 진정 온라인 (moel.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상시 5명 이상 사업장 판단과 가산임금 규정 적용 평가',
        summary:
          '대법원 2020도16228(대법원, 2023.06.15 선고) 영역에서 법원은 근로기준법 제11조 제1항의 \'상시 5명 이상의 근로자를 사용하는 사업\'이란 상시 근무 인원이 아니라 사용하는 근로자 수가 상태적으로 5명 이상인 사업을 뜻하므로, 때때로 5인 미만이 되더라도 사회통념상 객관적으로 상태적으로 5인 이상이면 이에 해당한다고 판단한 사례 흐름이 있으며, 가산수당 규정 적용 여부를 검토할 때에도 동일한 기준을 살펴볼 수 있습니다.',
        takeaway: '상시 근로자 수는 상태적 기준으로 판단하는 영역 — 5인 이상 판정 시 가산수당 차액 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '회사가 5인 미만이라는데 어떻게 확인하나요?',
        answer:
          '<strong>산정기간 연인원 ÷ 가동일수로 상시 근로자 수를 계산하는 영역입니다.</strong> 일별 근무표·급여대장 확보가 먼저.',
      },
      {
        question: '어떤 날은 4명인데도 5인 이상으로 보나요?',
        answer:
          '<strong>때때로 4명이 되더라도 상태적으로 5인 이상이면 적용 대상으로 검토되는 영역입니다.</strong> 산정기간 전체 인원 정리.',
      },
      {
        question: '아르바이트도 상시 근로자 수에 들어가나요?',
        answer:
          '<strong>아르바이트·단시간 근로자도 산정 대상에 포함될 수 있는 영역입니다.</strong> 전체 근로자 근로계약서·근무표 확인.',
      },
      {
        question: '5인 이상이면 가산수당을 받을 수 있나요?',
        answer:
          '<strong>5인 이상 판정 시 통상임금 × 50% 가산수당 청구를 검토해볼 수 있는 영역입니다.</strong> 연장·야간 근로시간 기록 정리.',
      },
      {
        question: '회사가 인원 자료를 안 주면 어떻게 하나요?',
        answer:
          '<strong>고용노동부 1350 진정으로 사업장 인원 조사를 요청해볼 수 있는 영역입니다.</strong> 4대보험 가입자 명단도 단서.',
      },
    ],
    cta: { text: '야근수당 신고 가능성, AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '5인 미만 사업장 권리', href: '/guide/wage/wage-under5-employees-rights' },
      { label: '연장근로수당 청구', href: '/guide/wage/wage-overtime-unpaid-claim' },
      { label: '야간근로 50% 가산', href: '/guide/wage/wage-night-work-50-percent-extra' },
      { label: '임금체불 진정 서류', href: '/guide/wage/unpaid-wage-complaint-docs' },
      { label: '체불임금 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
    ],
  },

  // ─── 3. unemployment-fraud-recovery-additional-collection-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-fraud-recovery-additional-collection-track',
    keyword: '실업급여 부정수급 반환 추가징수',
    questionKeyword: '구직급여를 받았는데 부정수급이라며 반환·추가징수 통보를 받았어요. 어떻게 대응하나요?',
    ctaKeyword: '실업급여 부정수급 반환 추가징수 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '실업급여 부정수급 반환 — 5단계 처분 대응 점검 | 로앤가이드',
      description:
        '실업급여 부정수급이라며 반환·추가징수 통보를 받아 막막하시다면 부정 방법 해당 여부·불복 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"구직급여를 받던 중 고용센터로부터 \'부정수급\'이라며 반환과 추가징수를 하겠다는 통보를 받은 사람입니다. 실업인정 기간 중 단기 아르바이트를 했는데 소득이 거의 없어 신고를 빠뜨린 것이었고, 일부러 속이려던 건 아니었어요. 그런데 받은 급여를 다 토해내고 추가징수까지 한다니 금액이 너무 크고, 이게 정말 \'부정한 방법\'에 해당하는 건지 막막한 상태예요." 고용보험법 제61조는 거짓이나 그 밖의 부정한 방법으로 구직급여를 받은 경우 지급 제한을, 제62조는 반환과 추가징수를 정하는 영역입니다. 다만 \'부정한 방법\'에 해당하는지는 수급자격을 가장하거나 취업·소득 발생을 감춘 적극적 부정행위가 있었는지로 판단되고, 단순 누락과 고의 은폐는 평가가 달라질 수 있는 트랙입니다. ① 처분 내용 확인 ② 부정 방법 해당 여부 ③ 소명 자료 정리 ④ 이의·심사 청구 ⑤ 분할납부 검토 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 확인 ② 평가 ③ 소명 ④ 불복 ⑤ 납부 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 실업급여 부정수급 반환·추가징수 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 처분확인·부정평가·소명·불복·납부 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 처분 내용 확인</strong> — 반환·추가징수 처분서의 사유·금액·근거 조문 확인.</li>\n<li><strong>② 부정 방법 해당 여부</strong> — 적극적 은폐인지 단순 누락인지 사실관계 정리.</li>\n<li><strong>③ 소명 자료 정리</strong> — 소득 규모·신고 경위·고의 부재 정황 자료 수집.</li>\n<li><strong>④ 이의·심사 청구 (송달 후 90일 내)</strong> — 고용보험심사위원회 심사 청구.</li>\n<li><strong>⑤ 분할납부 검토</strong> — 반환 확정 시 분할납부·납부 계획 협의.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'부정한 방법\'은 수급자격을 가장하거나 취업·소득 발생을 감춘 적극적 부정행위를 뜻하는 영역. 소득이 사실상 없었거나 단순 누락이었다면 부정수급 해당 여부를 다퉈볼 수 있는 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 실업급여 부정수급 처분 5단계',
        content:
          '<p><strong>A. 고용노동부·고용보험 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 처분서·근거 자료 확보 (송달 직후)</strong> — 반환·추가징수 처분서·사유·금액·산정 근거 확인.</li>\n<li><strong>2단계 — 사실관계 정리 (신속)</strong> — 신고 경위·소득 규모·고의 부재 정황 정리.</li>\n<li><strong>3단계 — 소명서·증빙 제출</strong> — 고용센터에 소명서·소득 증빙·경위서 제출.</li>\n<li><strong>4단계 — 심사 청구 (송달 후 90일 내)</strong> — 고용보험심사위원회에 심사 청구.</li>\n<li><strong>5단계 — 분할납부·후속 협의</strong> — 반환 확정 시 분할납부 등 납부 계획 협의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">실업급여 부정수급 반환·추가징수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 처분·소명·불복 갈래입니다.</strong></p>\n<ul>\n<li><strong>반환·추가징수 처분서 (사유·금액·조문)</strong></li>\n<li><strong>실업인정 신청 기록·실업인정일 자료</strong></li>\n<li><strong>해당 기간 소득 증빙 (사업소득·근로소득 내역)</strong></li>\n<li><strong>신고 경위·고의 부재 소명서</strong></li>\n<li><strong>고용보험 수급 내역·지급 명세</strong></li>\n<li><strong>심사 청구서 (고용보험심사위원회 양식)</strong></li>\n<li><strong>분할납부 신청서 (해당 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 처분서 송달일부터 심사 청구 기한(90일)이 진행되므로 처분서 수령일을 먼저 확인. 소득이 사실상 없었거나 단순 누락 정황이 있다면 소명서에 구체적으로 기재해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>부정 방법 해당 여부</strong> — 적극적 은폐인지 단순 누락인지가 처분의 분기점.</li>\n<li><strong>소득 발생 실질</strong> — 사실상 소득이 없었던 경우의 신고의무 평가.</li>\n<li><strong>추가징수 비율</strong> — 부정 정도에 따른 추가징수 산정 다툼.</li>\n<li><strong>심사 기한</strong> — 처분 송달 후 90일 내 심사 청구 필요.</li>\n<li><strong>분할납부</strong> — 반환 확정 시 분할납부 협의 가능 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부·고용보험 1350</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용보험 고객센터 (1588-0075)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 구직급여 \'부정한 방법\' 해당 여부 판단',
        summary:
          '대법원 2002두7494(대법원, 2003.09.23 선고) 영역에서 법원은 구 고용보험법상 \'허위 기타 부정한 방법\'이란 수급자격 없는 사람이 수급자격을 가장하거나 취업·소득 발생 사실을 감추는 부정행위를 뜻하므로, 형식상 사업자등록이 있더라도 사실상 폐업상태로 실질적 소득이 전혀 없었던 경우 이를 신고하지 않았다고 해서 부정한 방법으로 실업급여를 받은 경우에 해당한다고 볼 수 없다고 판단했습니다. 소득이 사실상 없었던 사정의 부정수급 해당 여부를 검토할 때에도 같은 기준을 살펴볼 수 있는 영역입니다.',
        takeaway: '소득이 사실상 없었던 단순 누락은 부정수급 해당 여부를 다퉈볼 수 있는 영역 — 소명·심사 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '아르바이트 신고를 빠뜨렸는데 곧바로 부정수급인가요?',
        answer:
          '<strong>적극적 은폐인지 단순 누락인지에 따라 평가가 달라질 수 있는 영역입니다.</strong> 소득 규모·신고 경위 소명이 핵심.',
      },
      {
        question: '소득이 거의 없었는데도 반환해야 하나요?',
        answer:
          '<strong>사실상 소득이 없었던 사정은 부정 방법 해당 여부를 다퉈볼 수 있는 영역입니다.</strong> 소득 증빙·경위서 정리.',
      },
      {
        question: '추가징수까지 한다는데 줄일 수 있나요?',
        answer:
          '<strong>부정 정도·고의 여부에 따라 추가징수 산정을 다퉈볼 수 있는 영역입니다.</strong> 소명 자료로 사실관계 제시.',
      },
      {
        question: '처분에 불복하려면 언제까지 해야 하나요?',
        answer:
          '<strong>처분 송달 후 90일 내 심사를 청구해볼 수 있는 영역입니다.</strong> 처분서 수령일부터 기한 진행.',
      },
      {
        question: '반환이 확정되면 한 번에 다 내야 하나요?',
        answer:
          '<strong>분할납부 협의를 검토해볼 수 있는 영역입니다.</strong> 고용센터에 분할납부 신청 절차 확인.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '부정수급 처벌 대응', href: '/guide/unemployment/unemployment-fraud-penalty-response' },
      { label: '부정수급 환수 절차', href: '/guide/unemployment/unemployment-fraud-claim-recovery-procedure' },
      { label: '환수 통보 이의', href: '/guide/unemployment/unemployment-fraud-collection-notice-appeal' },
      { label: '수급 거부 이의 절차', href: '/guide/unemployment/unemployment-benefit-rejection-appeal-procedure' },
      { label: '수급 중 소득', href: '/guide/unemployment/unemployment-side-income-during-benefit' },
    ],
  },

  // ─── 4. retirement-dc-pension-unpaid-contribution-track ───
  {
    domain: 'retirement',
    slug: 'retirement-dc-pension-unpaid-contribution-track',
    keyword: 'DC형 퇴직연금 부담금 미납',
    questionKeyword: '회사가 확정기여형(DC) 퇴직연금 부담금을 제대로 납입하지 않았어요. 미납 부담금을 청구할 수 있나요?',
    ctaKeyword: 'DC형 퇴직연금 부담금 미납 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'DC형 퇴직연금 부담금 미납 — 5단계 미납분 청구 점검 | 로앤가이드',
      description:
        '회사가 확정기여형(DC) 퇴직연금 부담금을 제때 납입하지 않아 불안하시다면 미납 부담금·지연이자 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"확정기여형(DC) 퇴직연금에 가입된 회사에서 5년째 일해온 근로자입니다. DC형은 회사가 매년 연간 임금총액의 12분의 1 이상을 제 계좌에 납입해줘야 한다고 알고 있는데, 퇴직연금 계좌를 확인해보니 회사가 부담금을 몇 년분이나 빠뜨리거나 늦게 넣은 흔적이 보였어요. 회사는 \'자금 사정이 나아지면 한꺼번에 넣겠다\'고만 하고, 그 사이 운용수익도 못 쌓이고 있는 상황입니다. 퇴직이 다가오는데 미납된 부담금을 받을 수 있는 건지 막막합니다." 근로자퇴직급여보장법 제20조는 확정기여형 퇴직연금제도에서 사용자가 가입자의 연간 임금총액의 12분의 1 이상을 부담금으로 납입하도록 정하고, 정해진 기일까지 납입하지 않으면 지연이자를 부담하도록 규정하는 영역입니다. 미납 부담금과 그에 따른 운용수익 상당의 손실은 청구를 검토해볼 수 있는 트랙입니다. 근로자라면 ① 가입·납입 내역 ② 미납 부담금 산정 ③ 지연이자 ④ 청구·진정 ⑤ 시효 관리 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 내역 ② 산정 ③ 이자 ④ 청구 ⑤ 시효 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. DC형 퇴직연금 부담금 미납 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 내역·산정·지연이자·청구·시효 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 가입·납입 내역 확인</strong> — DC 퇴직연금 계좌의 납입 내역·미납 시점 확인.</li>\n<li><strong>② 미납 부담금 산정</strong> — 연간 임금총액 12분의 1 기준 부담금과 실제 납입액 차이 계산.</li>\n<li><strong>③ 지연이자 산정</strong> — 미납 부담금에 대한 법정 지연이자 검토.</li>\n<li><strong>④ 청구·진정</strong> — 회사 청구 또는 고용노동부 1350 진정.</li>\n<li><strong>⑤ 시효 관리</strong> — 부담금 청구 시효·소멸 도과 위험 관리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: DC형은 사용자가 연간 임금총액의 12분의 1 이상을 가입자 계좌에 납입할 의무가 있는 영역. 미납 부담금과 정해진 기일을 넘긴 지연이자는 함께 청구를 검토해볼 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — DC형 부담금 미납 5단계',
        content:
          '<p><strong>A. 고용노동부·근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 퇴직연금 계좌·규약 보존 (즉시)</strong> — DC 퇴직연금 계좌 내역·퇴직연금 규약·근로계약서 확보.</li>\n<li><strong>2단계 — 임금총액·부담금 정리 (1~2주)</strong> — 연도별 임금총액과 정상 부담금(12분의 1 이상) 산정.</li>\n<li><strong>3단계 — 미납분·지연이자 산정 (2~3주)</strong> — 미납 부담금 + 정해진 기일 초과 지연이자 계산.</li>\n<li><strong>4단계 — 고용노동부 진정 또는 회사 청구 (시효 내)</strong> — 1350 진정 또는 내용증명.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의 협상.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">DC형 퇴직연금 부담금 미납 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 내역·산정·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>DC 퇴직연금 계좌 납입 내역 (연도별)</strong></li>\n<li><strong>퇴직연금 규약·가입 확인서</strong></li>\n<li><strong>연도별 임금총액 자료 (원천징수·급여대장)</strong></li>\n<li><strong>근로계약서·재직 증명서</strong></li>\n<li><strong>미납 부담금·지연이자 산정표</strong></li>\n<li><strong>퇴직연금 사업자(은행·증권) 운용 보고서</strong></li>\n<li><strong>회사 회신·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: DC형은 정상 부담금이 \'연간 임금총액 ÷ 12 이상\'으로 산정되는 영역. 납입 내역과 임금총액 자료를 대조해 미납 시점·금액을 특정하는 것이 청구의 출발점입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>부담금 산정 기준</strong> — 연간 임금총액 12분의 1 이상 기준 적용 여부.</li>\n<li><strong>미납·지연 구분</strong> — 아예 미납인지, 기일을 넘겨 늦게 납입했는지.</li>\n<li><strong>지연이자</strong> — 정해진 기일 초과분에 대한 법정 지연이자.</li>\n<li><strong>운용수익 손실</strong> — 미납 기간 동안 못 쌓인 운용수익 상당 손실.</li>\n<li><strong>시효 관리</strong> — 부담금 청구 시효·소멸 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (퇴직급여 미지급 신고)</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 퇴직연금 제도 안내 (moel.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 확정기여형 퇴직연금 부담금 납입과 퇴직금 분할 약정 효력 평가',
        summary:
          '대법원 2018다244877(대법원, 2022.03.17 선고) 영역에서 법원은 확정기여형 퇴직연금제도가 설정된 사업에서 사용자가 부담금을 납입하면서 동액 상당을 임금에서 공제한 경우, 그 제도 설정이나 부담금 납입행위 자체가 원칙적으로 무효라고 보기는 어렵고, 실질이 임금에 불과한데도 퇴직금 지급을 면탈하기 위한 분할 약정 형식만 취한 경우에는 실질적 퇴직금 분할 약정이 존재한다고 보기 어렵다고 판단한 사례 흐름이 있으며, DC형 부담금 미납분 청구를 검토할 때에도 부담금 납입 의무의 실질을 살펴볼 수 있습니다.',
        takeaway: 'DC형은 사용자가 정해진 부담금을 가입자 계좌에 납입할 의무가 있는 영역 — 미납 부담금·지연이자 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '회사가 DC 부담금을 안 넣었는데 청구할 수 있나요?',
        answer:
          '<strong>미납 부담금과 지연이자 청구를 검토해볼 수 있는 영역입니다.</strong> 계좌 납입 내역·임금총액 대조가 먼저.',
      },
      {
        question: 'DC형 부담금은 얼마가 정상인가요?',
        answer:
          '<strong>연간 임금총액의 12분의 1 이상이 정상 부담금 기준인 영역입니다.</strong> 연도별 임금총액으로 산정.',
      },
      {
        question: '늦게라도 넣어주면 끝인가요?',
        answer:
          '<strong>정해진 기일을 넘긴 지연 납입은 지연이자를 검토해볼 수 있는 영역입니다.</strong> 납입 기일·실제 납입일 확인.',
      },
      {
        question: '미납 기간 운용수익 손실도 받을 수 있나요?',
        answer:
          '<strong>미납으로 쌓이지 못한 운용수익 상당 손실도 다퉈볼 수 있는 영역입니다.</strong> 운용 보고서로 손실 정리.',
      },
      {
        question: '회사가 안 주면 어디에 신고하나요?',
        answer:
          '<strong>고용노동부 1350 진정 또는 민사 청구를 검토해볼 수 있는 영역입니다.</strong> 계좌 내역·규약으로 미납 입증.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 진정', href: '/guide/retirement/retirement-pay-complaint' },
      { label: 'DC·DB형 차이', href: '/guide/retirement/retirement-dc-db-type-difference' },
      { label: 'DC 중간정산 누적 거부', href: '/guide/retirement/retirement-dc-mid-settlement-cumulative-denied' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 지연이자', href: '/guide/retirement/retirement-delay-interest-20percent' },
    ],
  },

  // ─── 5. retirement-management-evaluation-bonus-average-wage-track ───
  {
    domain: 'retirement',
    slug: 'retirement-management-evaluation-bonus-average-wage-track',
    keyword: '경영평가성과급 평균임금 퇴직금',
    questionKeyword: '공공기관 경영평가성과급이 퇴직금 산정 평균임금에 포함되나요?',
    ctaKeyword: '경영평가성과급 평균임금 퇴직금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '경영평가성과급 평균임금 — 5단계 퇴직금 재산정 점검 | 로앤가이드',
      description:
        '공공기관 경영평가성과급이 퇴직금에 빠진 것 같아 답답하시다면 평균임금 포함 여부·차액 산정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"공공기관에서 오래 근무하다 퇴직한 근로자입니다. 매년 경영실적 평가 결과에 따라 경영평가성과급을 받아왔는데, 퇴직금을 받고 보니 회사가 이 성과급을 평균임금에서 빼고 산정한 것 같았어요. 회사는 \'성과급은 경영 실적에 따라 못 받는 해도 있으니 임금이 아니다\'라고 하는데, 실제로는 매년 정기적으로 지급받았고 지급 대상·조건도 규정으로 정해져 있었습니다. 성과급이 빠진 만큼 퇴직금이 줄어든 셈인데, 이게 맞는 건지 막막합니다." 근로자퇴직급여보장법 제8조는 퇴직금을 계속근로 1년에 대해 30일분 이상의 평균임금으로 산정하도록 정하고, 평균임금에는 계속적·정기적으로 지급되고 지급의무가 확정된 금품이 포함될 수 있는 영역입니다. 경영평가성과급이 계속적·정기적으로 지급되고 지급 조건이 확정돼 사용자에게 지급의무가 있다면 평균임금에 포함되는지 검토해볼 수 있는 트랙입니다. ① 지급 내역 ② 정기성·확정성 ③ 평균임금 재산정 ④ 차액 청구 ⑤ 시효 관리 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 내역 ② 성격 ③ 재산정 ④ 청구 ⑤ 시효 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 경영평가성과급 평균임금 포함 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 내역·성격·재산정·청구·시효 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 지급 내역 확인</strong> — 연도별 경영평가성과급 지급 시점·금액 정리.</li>\n<li><strong>② 정기성·확정성 평가</strong> — 계속적·정기적 지급·지급 조건 확정·지급의무 여부 검토.</li>\n<li><strong>③ 평균임금 재산정</strong> — 성과급 포함 평균임금으로 퇴직금 재계산.</li>\n<li><strong>④ 차액 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정.</li>\n<li><strong>⑤ 시효 관리</strong> — 퇴직금 청구 시효 3년·소멸 도과 위험 관리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 경영평가성과급이 계속적·정기적으로 지급되고 지급 대상·조건이 확정돼 지급의무가 인정되면 평균임금에 포함되는지 검토해볼 수 있는 영역. 못 받는 해가 있더라도 근로의 대가성 평가가 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 경영평가성과급 평균임금 5단계',
        content:
          '<p><strong>A. 고용노동부·근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 지급 내역·규정 보존 (즉시)</strong> — 연도별 성과급 지급 내역·지급 규정·예산집행지침·근로계약서 확보.</li>\n<li><strong>2단계 — 정기성·확정성 정리 (1~2주)</strong> — 계속적·정기적 지급·지급 조건·지급의무 정황 정리.</li>\n<li><strong>3단계 — 평균임금 재산정 (2~3주)</strong> — 성과급 포함 평균임금으로 퇴직금 총액 재계산·차액 도출.</li>\n<li><strong>4단계 — 고용노동부 진정 또는 회사 청구 (시효 3년 내)</strong> — 1350 진정 또는 내용증명.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의 협상.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 포함 항목, AI로 먼저 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">경영평가성과급 평균임금 포함 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 내역·성격·재산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>연도별 경영평가성과급 지급 내역 (시점·금액)</strong></li>\n<li><strong>성과급 지급 규정·예산집행지침·취업규칙</strong></li>\n<li><strong>퇴직 전 3개월 임금명세서 (평균임금 산정 기초)</strong></li>\n<li><strong>근로계약서·재직 증명서</strong></li>\n<li><strong>회사의 퇴직금 산정 내역서 (성과급 제외 여부 확인)</strong></li>\n<li><strong>성과급 포함 평균임금·퇴직금 차액 산정표</strong></li>\n<li><strong>회사 회신·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 성과급이 매년 정기적으로 지급되고 지급 대상·조건이 규정으로 확정돼 있었다면 평균임금 포함 검토의 핵심 자료. 회사의 퇴직금 산정 내역서에서 성과급이 빠졌는지부터 확인해보는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>정기성·계속성</strong> — 매년 정기적으로 지급됐는지가 평균임금 포함의 분기점.</li>\n<li><strong>지급의무 확정성</strong> — 지급 대상·조건이 규정으로 확정돼 지급의무가 있었는지.</li>\n<li><strong>미지급 해의 존재</strong> — 못 받는 해가 있어도 근로 대가성이 인정되는지.</li>\n<li><strong>평균임금 산정 방식</strong> — 성과급을 일정 비율로 평균임금에 반영하는 방식.</li>\n<li><strong>시효 관리</strong> — 퇴직금 청구 시효 3년·소멸 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (퇴직금 미지급 신고)</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 퇴직급여 제도 안내 (moel.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공공기관 경영평가성과급의 평균임금 포함 평가',
        summary:
          '대법원 2018다231536(대법원, 2018.12.13 선고) 영역에서 법원은 공공기관 경영평가성과급이 계속적·정기적으로 지급되고 지급 대상·지급 조건 등이 확정돼 사용자에게 지급의무가 있는 경우 평균임금 산정의 기초가 되는 임금에 포함되고, 최저지급률·최저지급액이 정해져 있지 않아 경영실적 평가 결과에 따라 받지 못하는 경우가 있더라도 근로의 대가로 지급된 임금으로 보아야 한다고 판단한 사례 흐름이 있으며, 경영평가성과급을 평균임금에 포함해 퇴직금을 재산정할 때에도 동일한 기준을 살펴볼 수 있습니다.',
        takeaway: '정기성·확정성 있는 경영평가성과급은 평균임금에 포함되는지 검토할 수 있는 영역 — 퇴직금 재산정·차액 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '경영평가성과급이 퇴직금에 들어가나요?',
        answer:
          '<strong>계속적·정기적 지급·지급의무 확정 시 평균임금 포함을 검토해볼 수 있는 영역입니다.</strong> 정기성·확정성 정리가 먼저.',
      },
      {
        question: '회사는 성과급이 임금이 아니라는데 맞나요?',
        answer:
          '<strong>근로의 대가성·지급의무가 인정되면 임금으로 검토되는 영역입니다.</strong> 지급 규정·연도별 내역 확인.',
      },
      {
        question: '못 받는 해가 있었는데도 포함되나요?',
        answer:
          '<strong>미지급 해가 있어도 근로 대가성이 인정될 수 있는 영역입니다.</strong> 지급 조건·확정성 정황 정리.',
      },
      {
        question: '성과급을 빼고 퇴직금을 줬으면 차액을 받나요?',
        answer:
          '<strong>성과급 포함 평균임금으로 재산정한 차액을 청구해볼 수 있는 영역입니다.</strong> 산정 내역서 대조가 핵심.',
      },
      {
        question: '퇴직금 차액 청구 시효는 얼마인가요?',
        answer:
          '<strong>퇴직금 청구 시효는 퇴직일로부터 3년인 영역입니다.</strong> 3년 내 차액 청구 가능.',
      },
    ],
    cta: { text: '퇴직금 포함 항목, AI로 먼저 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 포함·제외 항목', href: '/guide/retirement/retirement-pay-included-excluded-items' },
      { label: '성과급 평균임금 포함', href: '/guide/retirement/retirement-performance-bonus-business-profit' },
      { label: '평균임금 산정 다툼', href: '/guide/retirement/retirement-average-wage-dispute' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 진정', href: '/guide/retirement/retirement-pay-complaint' },
    ],
  },

  // ─── 6. industrial-accident-work-stress-mental-illness-track ───
  {
    domain: 'industrial-accident',
    slug: 'industrial-accident-work-stress-mental-illness-track',
    keyword: '업무상 스트레스 정신질환 산재',
    questionKeyword: '과도한 업무 스트레스로 우울증이 생겼는데 업무상 재해로 인정받을 수 있나요?',
    ctaKeyword: '업무상 스트레스 정신질환 산재 요양급여 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '업무 스트레스 우울증 산재 — 5단계 요양급여 신청 점검 | 로앤가이드',
      description:
        '과도한 업무 스트레스로 우울증이 생겨 막막하시다면 업무 기인성 인과관계·요양급여 신청 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"실적 압박이 큰 부서에서 일하다 우울증과 불안장애 진단을 받은 근로자입니다. 부임 이후 감당하기 어려운 목표와 잦은 야근, 상급자의 질책이 이어졌고, 정신과 치료를 받으면서도 출근을 이어가다 결국 일상이 무너졌어요. 회사는 \'원래 예민한 성격\'·\'개인 사정\'이라며 산재와 무관하다고 하지만, 증상이 본격화된 시점이 업무 부담이 극심해진 시기와 겹칩니다. 혼자 감당해야 하는 건지 막막한 상태예요." 산업재해보상보험법 제37조는 업무상의 사유로 질병에 걸린 경우를 업무상 재해로 정하고, 제5조는 그 인정 요건으로 업무와 재해 사이의 인과관계를 규정하는 영역입니다. 업무상 스트레스로 우울증 등이 자연 진행 이상으로 유발·악화됐다면 업무 기인성이 검토되는 트랙이고, 개인적 취약성이 일부 작용했더라도 그 사정만으로 인과관계가 배제되는 것은 아닌 영역입니다. ① 진단·업무 기록 ② 인과관계 입증 ③ 요양급여 신청 ④ 공단 심사 ⑤ 급여·재심사 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 기록 ② 인과 ③ 신청 ④ 심사 ⑤ 급여 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 업무 스트레스 정신질환 산재 인정 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 기록·인과관계·신청·심사·급여 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 진단·업무 기록 확보</strong> — 정신과 진단서·치료 기록·업무 부담 자료 수집.</li>\n<li><strong>② 인과관계 입증</strong> — 업무 스트레스 발생 시점과 증상 악화 시점의 연관성 정리.</li>\n<li><strong>③ 요양급여 신청</strong> — 근로복지공단에 요양급여 신청서 + 진단서 제출.</li>\n<li><strong>④ 공단 심사</strong> — 업무상 재해 해당 여부·업무 기인성 심사.</li>\n<li><strong>⑤ 급여·재심사</strong> — 요양·휴업급여 청구, 불승인 시 재심사.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정신질환 산재는 업무 스트레스가 질병을 자연 진행 이상으로 유발·악화시켰는지가 핵심. 개인적 취약성이 일부 작용했더라도 그 사정만으로 업무 기인성이 배제되는 것은 아닌 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 업무 스트레스 정신질환 산재 5단계',
        content:
          '<p><strong>A. 근로복지공단·고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·치료 자료 보존 (즉시)</strong> — 정신과 진단서·치료 기록·처방 내역·상담 기록 확보.</li>\n<li><strong>2단계 — 업무 부담 기록 정리 (1~2주)</strong> — 업무량·야근 기록·실적 압박·질책 정황·발병 시점 정리.</li>\n<li><strong>3단계 — 근로복지공단 요양급여 신청 (신속)</strong> — 신청서 + 진단서 + 업무 관련 자료 제출.</li>\n<li><strong>4단계 — 공단 심사 (수주~수개월)</strong> — 업무상 재해 해당 여부·업무 기인성 심사.</li>\n<li><strong>5단계 — 급여 청구·재심사</strong> — 요양·휴업급여 청구, 불승인 시 재심사·심사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 산재 요양급여 신청 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">업무상 스트레스 정신질환 산재 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=industrial-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·업무·신청 갈래입니다.</strong></p>\n<ul>\n<li><strong>정신과 진단서 (질환명·진단일·발병 경위 소견)</strong></li>\n<li><strong>치료 기록·처방 내역·상담 기록</strong></li>\n<li><strong>업무량·야근 기록 (근태·업무 일지)</strong></li>\n<li><strong>실적 압박·질책 정황 자료 (메일·메신저·진술)</strong></li>\n<li><strong>업무 변동·부임 시점 자료 (인사 발령·업무 배치 이력)</strong></li>\n<li><strong>동료 진술서 (있을 경우)</strong></li>\n<li><strong>요양급여 신청서 (공단 양식)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 업무 부담이 극심해진 시점과 증상이 본격화된 시점이 겹친다는 점이 업무 기인성 입증의 핵심 자료. 야근 기록·업무량 변동·질책 정황을 시간 순으로 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>업무 기인성 입증</strong> — 업무 스트레스와 정신질환 사이의 상당 인과관계 입증이 핵심.</li>\n<li><strong>개인 취약성 주장</strong> — 개인적 소인이 일부 작용해도 그것만으로 인과관계가 배제되는지.</li>\n<li><strong>발병 시점 대조</strong> — 업무 부담 가중 시점과 증상 악화 시점의 연관성.</li>\n<li><strong>회사 부인</strong> — 회사 협조 없이도 본인이 직접 공단에 신청 가능.</li>\n<li><strong>불승인 시 재심사</strong> — 산재보험 재심사·심사 청구 절차 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>근로복지공단 1588-0075 (산재 신청·상담)</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>산재근로자 지원센터 (근로복지공단 운영)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 업무상 스트레스로 인한 정신질환의 업무 기인성 평가',
        summary:
          '대법원 2016두58840(대법원, 2017.05.31 선고) 영역에서 법원은 근로자가 극심한 업무상 스트레스와 그로 인한 정신적 고통으로 우울증세가 악화되어 합리적인 판단을 기대할 수 없을 정도의 상황에 이른 것으로 추단할 수 있는 경우 업무와 사이에 상당인과관계를 인정할 수 있고, 개인적 취약성이 영향을 미쳤다는 사정만으로 달리 볼 것은 아니라고 판단한 사례 흐름이 있으며, 업무 스트레스로 인한 정신질환의 업무 기인성을 검토할 때에도 동일한 기준을 살펴볼 수 있습니다.',
        takeaway: '업무 스트레스가 정신질환을 유발·악화시켰다면 업무 기인성이 인정될 수 있는 영역 — 요양급여 신청·인과관계 입증 트랙.',
      },
    ],
    faq: [
      {
        question: '업무 스트레스로 생긴 우울증도 산재가 되나요?',
        answer:
          '<strong>업무 스트레스가 질병을 유발·악화시켰다면 업무상 재해로 검토될 수 있는 영역입니다.</strong> 발병 시점·업무 부담 대조가 핵심.',
      },
      {
        question: '원래 예민한 성격이라 안 된다는데 맞나요?',
        answer:
          '<strong>개인적 취약성이 일부 작용해도 그것만으로 인과관계가 배제되지는 않는 영역입니다.</strong> 업무 기인성 정황을 정리.',
      },
      {
        question: '회사가 개인 사정이라며 협조를 안 해요',
        answer:
          '<strong>근로자 본인이 근로복지공단에 직접 신청해볼 수 있는 영역입니다.</strong> 회사 협조 없이도 신청 가능.',
      },
      {
        question: '무엇으로 업무 스트레스를 입증하나요?',
        answer:
          '<strong>업무량·야근 기록·질책 정황·발병 시점 대조가 입증 자료가 될 수 있는 영역입니다.</strong> 시간 순 정리가 도움.',
      },
      {
        question: '산재 불승인이 나오면 어떻게 하나요?',
        answer:
          '<strong>재심사·심사 청구를 해볼 수 있는 영역입니다.</strong> 결정 송달 후 기한 내 불복 절차 검토.',
      },
    ],
    cta: { text: '산재 요양급여 신청 절차, AI로 정리하기', link: '/chat?domain=industrial-accident' },
    internalLinks: [
      { label: '정신질환 산재 인정', href: '/guide/industrial-accident/industrial-accident-mental-illness-acknowledge' },
      { label: '산재 불승인 이의', href: '/guide/industrial-accident/industrial-accident-denial-appeal' },
      { label: '근골격계 질환 산재', href: '/guide/industrial-accident/industrial-accident-musculoskeletal-disease-track' },
      { label: '업무 복귀 후 처우', href: '/guide/industrial-accident/return-to-work-after-injury' },
      { label: '출퇴근 재해 인정', href: '/guide/industrial-accident/commute-accident-workers-comp' },
    ],
  },
];
