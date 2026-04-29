import { SpokePage } from '../spoke-pages';

// batch50 wage+unemp+retire 7개
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 회사가 보상휴가제로 위장해 연장근로수당을 지급하지 않은 근로자가 보상휴가 합법 요건(서면합의·1.5배 환산·6개월 사용)을 점검해 미지급분 청구를 검토하도록 돕는 페이지다.
// 2. 이 페이지는 상여금 지급조건이 일방 변경돼 일부 직원만 차별 지급받은 근로자가 취업규칙 불이익변경 절차·동일가치노동 동일임금을 점검해 차액 청구를 검토하도록 돕는 페이지다.
// 3. 이 페이지는 임금·퇴직금 지연 지급으로 연 20% 지연이자 청구를 고민하는 근로자가 진정·민사 동시 진행 절차를 정리해 연체이자 청구를 검토하도록 돕는 페이지다.
// 4. 이 페이지는 사업장 휴업·임금감소로 자진 퇴사를 한 근로자가 정당이직 사유 인정 요건(시행규칙 별표2)을 점검해 자진퇴사도 실업급여 가능성을 검토하도록 돕는 페이지다.
// 5. 이 페이지는 구직활동 의무 위반·허위 신고 통보를 받은 수급자가 환수·5배 추가징수 처분에 소명 기회·이의신청·심사청구 절차를 검토하도록 돕는 페이지다.
// 6. 이 페이지는 만 55세·10년 이상 가입자로 IRP 의무이전·연금 vs 일시금 선택을 앞둔 퇴직자가 퇴직소득세 절세 구조와 연금 수령 시 분리과세를 점검해 수령 방식을 검토하도록 돕는 페이지다.
// 7. 이 페이지는 5년 차 퇴사자가 평균임금 산정·상여금 포함 여부·중간정산 합산을 둘러싼 퇴직금 산정 분쟁을 점검해 차액 청구 가능성을 검토하도록 돕는 페이지다.

export const spokesBatch50WageUnempRetire: SpokePage[] = [
  // ─── 1. wage / comp-time-substitute-overtime-illegal ───
  {
    domain: 'wage',
    slug: 'wage-comp-time-substitute-overtime-illegal',
    keyword: '보상휴가제 연장근로수당',
    questionKeyword: '보상휴가로 갈음한다는데 연장근로수당을 받을 수 있나요?',
    ctaKeyword: '보상휴가제 미지급 연장수당 청구 가능성 확인',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '보상휴가제로 위장한 연장수당 — 합법 요건 3가지 | 로앤가이드',
      description:
        '보상휴가제는 서면합의·1.5배 환산·6개월 내 사용 3가지 요건을 갖춰야 합법입니다. 미지급 연장수당 청구 가능성을 지금 확인하세요.',
    },
    intro:
      '<p>"\'연장근로한 시간만큼 휴가로 보상한다\'고 해서 따랐는데, 정작 휴가를 쓰지도 못하고 수당도 못 받았어요. 정상인가요?" 보상휴가제(근로기준법 제57조)는 서면합의·1.5배 환산·6개월 사용이라는 3가지 요건을 갖춰야 적법합니다. 하나라도 어긋나면 연장근로수당 미지급으로 청구할 여지가 생깁니다. 사용자가 "보상휴가로 갈음했다"고만 주장하고 서면합의·환산 절차가 없었다면 그동안의 미지급분을 시효 3년 안에서 합산 청구할 수 있는지 점검해보세요.</p>',
    sections: [
      {
        title: 'Q. 보상휴가제는 어떤 요건을 갖춰야 합법인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 근로기준법 제57조에 따라 다음 3가지 요건을 모두 충족해야 적법합니다.</strong></p>\n<ul>\n<li><strong>① 근로자 대표와의 서면합의</strong> — 사업장 근로자 과반수(노조가 있으면 노조)와 사용자가 서면으로 합의해야 함. 개별 동의서·구두 약속만으로는 부족.</li>\n<li><strong>② 1.5배 가산 환산</strong> — 연장·야간·휴일근로 1시간은 1.5시간(가산율 50% 반영)의 휴가로 환산해 부여. 1대1 환산은 위법.</li>\n<li><strong>③ 6개월 내 사용·미사용 시 수당 지급</strong> — 부여된 보상휴가를 일정 기간(통상 6개월) 내 사용하지 못하면 미사용분에 대해 연장근로수당으로 지급해야 함. 무한정 보유는 위법.</li>\n<li><strong>적용 대상</strong> — 5인 이상 사업장에서 연장·야간·휴일근로 가산수당이 발생하는 경우에 한함. 5인 미만은 가산수당 의무 자체가 없음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "보상휴가로 갈음한다"는 회사 주장만으로는 부족. 서면합의서·1.5배 환산표·휴가 부여·사용 기록 4가지 자료가 모두 갖춰져야 합법으로 평가될 여지가 있습니다.</blockquote>',
      },
      {
        title: 'Q. 어떤 경우에 미지급 연장수당을 청구할 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 위 3가지 요건 중 하나라도 어긋나면 보상휴가제 자체를 무효로 보고 연장수당 청구가 가능한 사례가 있습니다.</strong></p>\n<ul>\n<li><strong>서면합의 부재</strong> — 회사가 일방 통보·구두 안내만 했다면 서면합의 요건 미충족. 보상휴가제 자체가 효력 없음.</li>\n<li><strong>1대1 환산</strong> — 연장근로 10시간을 휴가 10시간으로 처리했다면 가산율 50%가 빠진 위법 환산. 0.5배(5시간) 분량의 연장수당 추가 청구 가능성.</li>\n<li><strong>휴가 미부여</strong> — 보상휴가 약정만 있고 실제 휴가 사용을 거부·불승인했다면 연장수당으로 환산 청구 가능.</li>\n<li><strong>장기 미사용 + 미지급</strong> — 부여 후 6개월 이상 지났고 회사가 미사용분 수당을 지급하지 않았다면 즉시 청구 가능.</li>\n<li><strong>퇴직 시 정산 누락</strong> — 퇴직 시점에 미사용 보상휴가가 있었다면 연장수당으로 정산해 지급해야 함. 누락 시 시효 3년 안에서 청구.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 보상휴가제 위장, AI로 청구 가능성을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">서면합의·환산비율·휴가 사용 여부를 입력하면 미지급 연장수당 청구 가능성을 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보상휴가제 위장 미지급 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 절차를 참고하면 다음 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 합법 요건 점검</strong> (즉시) — 회사에 서면합의서 사본·환산 산식·휴가 사용 기록을 요청. 셋 중 하나라도 없으면 무효 다툴 여지.</li>\n<li><strong>2단계 — 미지급 연장수당 산출</strong> (즉시) — 출퇴근 기록·근태 시스템 캡처로 실제 연장근로 시간 계산. 통상시급 × 1.5 × 시간 합산. 시효 3년치 적용.</li>\n<li><strong>3단계 — 사내 시정 요청</strong> (선택) — 인사팀에 서면 시정 요청. 응답 거부·기한 초과 시 다음 단계로.</li>\n<li><strong>4단계 — 고용노동부 진정</strong> (3년 이내) — 노동포털(labor.moel.go.kr) 또는 관할 지방고용노동지청. 처리기간 25일(연장 가능). 시정지시 미이행 시 형사 송치(3년 이하 징역 또는 3,000만 원 이하 벌금).</li>\n<li><strong>5단계 — 민사 임금 청구 (필요 시)</strong> — 노동청 시정지시에도 미지급 시 민사 청구. 3,000만 원 이하면 소액심판으로 2~3개월 내 판결 가능성.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 주의: 회사가 뒤늦게 서면합의서를 제시하더라도 작성일자·서명자 명단을 확인. 사후 작성된 서면합의는 효력 다툴 여지가 있습니다.</blockquote>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>근로계약서·연봉계약서 (소정근로시간·통상임금 산정용)</li>\n<li>최근 3년 급여명세서 (연장수당 지급 여부 확인)</li>\n<li>출퇴근 기록·근태 시스템 캡처 (실제 연장근로 시간 입증)</li>\n<li>회사 보상휴가 안내·통보문 (서면합의 부재 입증)</li>\n<li>휴가 사용 신청·승인 기록 (미사용·거부 입증)</li>\n<li>취업규칙 또는 노사 단체협약 (서면합의서 포함 여부)</li>\n<li>퇴직 시 정산 명세서 (퇴직자의 경우)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 통상임금 판단 기준과 노사합의의 효력',
        summary:
          '대법원 2012다89399 사건(대법원, 2013.12.18 선고)에서 법원은 어떠한 임금이 통상임금에 속하는지는 그 임금이 소정근로의 대가로 정기적·일률적·고정적으로 지급되는지를 기준으로 객관적 성질에 따라 판단해야 하며, 통상임금에 속하는 임금을 통상임금에서 제외하기로 하는 노사합의는 무효라고 판시했습니다.',
        takeaway:
          '서면합의·환산 형식만 갖췄더라도 연장수당의 본질을 잠탈하는 합의라면 무효로 다툴 여지가 있고, 미지급 가산수당을 시효 3년 안에서 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '근로계약서에 "연장수당은 보상휴가로 갈음한다"고 적혀 있으면 끝인가요?',
        answer:
          '<strong>개별 근로계약서 조항만으로는 부족합니다.</strong> 근로기준법 제57조는 근로자 대표와의 서면합의를 명시하고 있어, 개별 계약 조항으로는 보상휴가제의 합법 요건을 갖췄다고 보기 어려운 사례가 있어요.',
      },
      {
        question: '환산을 1대1로 받았는데 0.5배만큼 더 받을 수 있나요?',
        answer:
          '<strong>가산율 50%만큼의 차액 청구를 검토할 수 있습니다.</strong> 연장근로 1시간은 1.5시간으로 환산되어야 하므로, 1대1 환산이라면 0.5시간 분량의 연장수당이 미지급된 셈으로 다툴 여지가 있어요.',
      },
      {
        question: '미사용 휴가가 쌓이고 있는데 언제까지 지급 청구가 가능한가요?',
        answer:
          '<strong>임금채권 시효 3년(근로기준법 제49조) 안에서 청구할 수 있습니다.</strong> 보상휴가 미사용 수당도 연장수당의 성격을 가지므로 발생일로부터 3년 이내라면 합산 청구 가능성이 있어요.',
      },
      {
        question: '퇴직했는데 미사용 보상휴가가 남아있어요',
        answer:
          '<strong>퇴직 시 미사용 보상휴가는 연장수당으로 정산되어야 합니다.</strong> 퇴직금과 별도로 청구 가능하며, 퇴직일부터 14일 이내 지급 의무가 있고 미지급 시 지연이자(연 20%)도 검토할 수 있어요.',
      },
      {
        question: '5인 미만 사업장도 보상휴가제가 적용되나요?',
        answer:
          '<strong>5인 미만 사업장은 연장근로 가산수당 의무 자체가 없어 보상휴가제도 무관합니다.</strong> 다만 약정으로 가산수당을 정했다면 그 약정 위반으로 청구할 수 있어요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 1년 경과 시효 청구', href: '/guide/wage/wage-unpaid-one-year-statute-claim' },
      { label: '연장수당 미지급 신고 절차', href: '/guide/wage/wage-overtime-report-procedure-timeline' },
      { label: '식대·교통비 임의 중단 대응', href: '/guide/wage/wage-meal-transport-suddenly-stopped' },
      { label: '인센티브 기준 사후 변경 청구', href: '/guide/wage/wage-incentive-criteria-changed-after' },
      { label: '연봉 동결 일방 통보 대응', href: '/guide/wage/wage-salary-freeze-unilateral-notice' },
    ],
  },

  // ─── 2. wage / bonus-condition-changed-discrimination ───
  {
    domain: 'wage',
    slug: 'wage-bonus-condition-changed-discrimination',
    keyword: '상여금 지급조건 차별',
    questionKeyword: '상여금 기준이 일방 변경돼 일부만 받았는데 차액 청구할 수 있나요?',
    ctaKeyword: '상여금 차별 지급 차액 청구 가능성 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '상여금 지급조건 일방 변경 — 차별·취업규칙 무효 청구 절차 | 로앤가이드',
      description:
        '상여금 지급조건이 일방 변경돼 일부 직원만 차별 지급받았다면 취업규칙 불이익변경 절차·동일가치노동 동일임금을 점검할 수 있습니다. 차액 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"같은 부서·같은 직급인데 상여금 기준이 바뀌었다며 동료는 받고 저는 절반만 받았어요. 차별 같은데 청구할 수 있나요?" 상여금 지급조건의 일방 변경은 취업규칙 불이익변경 절차(근로기준법 제94조 — 근로자 과반수 동의)를 거쳐야 하고, 동일가치노동 동일임금 원칙(근로기준법 제6조)에 어긋나는 차별 지급은 다툴 여지가 있습니다(대법원 2021다248299 사건 취지). 시효 3년 안에서 차액 청구를 검토하세요.</p>',
    sections: [
      {
        title: '상여금 지급조건 변경 — 차별이 인정될 수 있는 4가지 경우',
        content:
          '<p><strong style="color:#1e3a5f">아래 사정 중 하나에 해당하면 차별·차액 청구 검토 여지가 있습니다.</strong></p>\n<ul>\n<li><strong>취업규칙 불이익 변경 절차 위반</strong> — 회사가 기존 상여금 기준을 불이익하게 바꾸면서 근로자 과반수 동의를 받지 않았다면 변경 자체가 무효(근로기준법 제94조 제1항 단서).</li>\n<li><strong>동일가치노동 동일임금 위반</strong> — 같은 직무·동일 가치 노동임에도 합리적 이유 없이 일부 직원만 차별 지급은 근로기준법 제6조 위반 다툴 여지.</li>\n<li><strong>단체협약 위반</strong> — 노조 단체협약에 상여금 산정 기준이 있는데 회사가 일방 변경 후 비조합원만 차별 적용했다면 협약 위반.</li>\n<li><strong>근로계약서·인사규정 위반</strong> — 근로계약서·인사규정에 상여금 산정 공식이 있다면 그 기준대로 지급해야 함. 사후 변경은 개별 동의 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 "회사 재량"이라는 주장만으로는 차별이 정당화되지 않을 수 있습니다. 합리적 차별 사유(직무·평가·근속 등)가 객관 자료로 입증되지 않으면 다툴 여지가 큽니다.</blockquote>',
      },
      {
        title: '상여금 임금성 인정과 청구 범위',
        content:
          '<p><strong style="color:#1e3a5f">상여금이 임금에 해당하면 미지급 차액 청구의 근거가 됩니다.</strong></p>\n<ul>\n<li><strong>정기·일률·고정성 충족</strong> — 매년 정기 지급, 같은 직급에 일률 지급, 산정식이 사전 확정되어 있다면 임금성 인정 가능성. 명칭이 "성과급"이어도 마찬가지.</li>\n<li><strong>경영성과 분배 vs 임금</strong> — 당기순이익 같은 경영성과에 종속된 분배 성격이라면 임금성이 부정될 수 있고(대법원 2022다255454), 근로 대가성이 강하면 임금에 해당.</li>\n<li><strong>통상임금 포함 가능성</strong> — 상여금이 정기·일률·고정성을 갖추면 통상임금에 포함되어 연장·야간·휴일수당 단가까지 영향(대법원 통상임금 판례 취지).</li>\n<li><strong>차액 산정 공식</strong> — 변경 전 기준 적용 시 받았어야 할 상여금 − 실제 수령액 = 차액. 시효 3년 안에서 합산 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상여금이 통상임금에 포함되면 그동안의 연장수당 단가까지 함께 다툴 수 있어 차액 규모가 크게 늘어나는 사례가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 상여금 차별 차액 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변경 절차 점검</strong> (즉시) — 취업규칙 변경 시 근로자 과반수 동의서·노조 합의서 사본을 회사에 요청. 동의 절차 미이행이면 무효 주장 기반.</li>\n<li><strong>2단계 — 차별 비교 자료 수집</strong> (즉시) — 같은 직급·동일 가치 노동인 동료들과의 상여금 지급 차이를 정리. 인사평가 등급·근속·성과 자료 함께 보존.</li>\n<li><strong>3단계 — 차액 산출</strong> (즉시) — 변경 전 기준으로 계산한 상여금 − 실제 수령액 = 차액. 시효 3년치 합산.</li>\n<li><strong>4단계 — 노동청 진정 또는 노동위 구제</strong> (3년 이내) — 임금체불 진정(노동포털 labor.moel.go.kr) 또는 단체협약 위반 시 노동위원회. 차별 시정도 노동위 진정 가능.</li>\n<li><strong>5단계 — 민사 임금 청구 (필요 시)</strong> — 노동청 시정지시에도 미지급 시 민사 청구. 임금성·통상임금성·차별 무효를 함께 주장하면 차액 규모 확장 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 상여금 차별 지급, AI로 차액 청구 가능성을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변경 전후 기준·동료 비교·동의 절차 여부를 입력하면 차액 청구 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>근로계약서·연봉계약서 (상여금 산정 조항)</li>\n<li>변경 전·후 취업규칙 또는 인사규정·상여금 운용지침</li>\n<li>최근 3년 급여명세서·상여금 지급 내역</li>\n<li>근로자 과반수 동의서 또는 노조 합의서 (요청 후 수령)</li>\n<li>동료 직원 비교 자료 (직급·근속·인사평가)</li>\n<li>회사의 변경 통보 문서·이메일</li>\n<li>단체협약서 (노조 가입 시)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 인센티브의 임금성과 평균임금 산입 여부',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 회사가 재무성과·전략과제 이행 정도에 따라 상여기초금액에 연동해 지급하는 \'목표 인센티브\'는 계속적·정기적으로 지급되고 회사에 지급의무가 지워져 있으며 근로제공과 직접적·밀접하게 관련되어 평균임금 산정 기초가 되는 임금에 해당한다고 판시했습니다.',
        takeaway:
          '상여금·인센티브가 산정 기준이 사전 확정되고 정기·일률 지급된다면 임금성이 인정될 여지가 있어, 그 산정 기준의 일방 변경·차별 적용은 차액 청구 근거가 될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '같은 부서 동료는 받고 저는 못 받았는데 차별인가요?',
        answer:
          '<strong>합리적 이유 없이 차별 지급되었다면 차별로 다툴 여지가 있습니다.</strong> 직무·평가 등 객관적 차이가 입증되지 않은 상태에서 일부 직원만 누락·감액했다면 동일가치노동 동일임금 원칙 위반 검토가 가능해요.',
      },
      {
        question: '취업규칙 변경에 동의서를 받았다는데 효력 있나요?',
        answer:
          '<strong>근로자 과반수의 동의가 있어야 효력이 인정됩니다.</strong> 일부 직원만 동의서를 받거나 강압적 동의였다면 절차 하자로 다툴 여지가 있어요.',
      },
      {
        question: '회사가 "상여금은 임금이 아니라 격려금"이라고 합니다',
        answer:
          '<strong>임금성 판단은 명칭이 아닌 정기·일률·고정성으로 판단됩니다.</strong> 사전에 산정식이 확정되고 정기 지급되어 왔다면 명칭과 무관하게 임금에 해당할 가능성이 높아요.',
      },
      {
        question: '비조합원이라 단체협약 적용을 못 받는다는데 맞나요?',
        answer:
          '<strong>비조합원이어도 일반적 구속력 있는 단체협약이라면 적용될 수 있습니다.</strong> 사업장 다수 근로자에게 적용되는 단체협약이라면 비조합원에게도 효력이 미칠 여지가 있어요.',
      },
      {
        question: '상여금 통상임금 포함 다툼은 따로 해야 하나요?',
        answer:
          '<strong>임금체불 청구와 함께 통상임금성 다툼을 병합 주장하는 것이 일반적입니다.</strong> 통상임금에 포함되면 그동안의 연장·야간·휴일수당 차액까지 함께 청구할 수 있어 차액 규모가 커지는 사례가 있어요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '인센티브 기준 사후 변경 청구', href: '/guide/wage/wage-incentive-criteria-changed-after' },
      { label: '연봉 동결 일방 통보 대응', href: '/guide/wage/wage-salary-freeze-unilateral-notice' },
      { label: '임금체불 1년 경과 시효 청구', href: '/guide/wage/wage-unpaid-one-year-statute-claim' },
      { label: '포괄임금 직책수당 분리 청구', href: '/guide/wage/wage-pogual-team-leader-allowance-claim' },
      { label: '임금체불 진정 전 체크리스트', href: '/guide/wage/wage-complaint-pre-filing-checklist' },
    ],
  },

  // ─── 3. wage / late-payment-interest-claim ───
  {
    domain: 'wage',
    slug: 'wage-late-payment-interest-claim',
    keyword: '임금 지연이자 연 20%',
    questionKeyword: '임금·퇴직금이 늦게 들어오면 지연이자도 받을 수 있나요?',
    ctaKeyword: '임금 지연이자 연 20% 청구 가능성 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임금·퇴직금 지연이자 연 20% — 진정+민사 동시 청구 절차 | 로앤가이드',
      description:
        '임금·퇴직금이 14일 이상 지연 지급되면 연 20% 지연이자(근기법 제37조) 청구가 가능합니다. 진정+민사 동시 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"퇴직금이 두 달째 안 들어와요. 회사는 \'곧 줄게\'만 반복하고요. 늦은 만큼 이자도 받을 수 있을까요?" 사용자가 임금·퇴직금을 14일을 넘겨 지급하지 않으면 연 20% 지연이자(근로기준법 제37조 제1항, 근로자퇴직급여 보장법 제9조)가 발생합니다. 진정과 민사를 동시 진행하면 본 임금 + 지연이자를 함께 청구할 수 있습니다. 미지급 1년만 지나도 5%만 받는 일반 민사이자와 달리 4배 수준이라 청구 가치가 큽니다.</p>',
    sections: [
      {
        title: '연 20% 지연이자 — 발생 요건 4가지',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제37조·근로자퇴직급여 보장법 제9조에 따라 다음 요건을 충족하면 적용됩니다.</strong></p>\n<ul>\n<li><strong>① 사용자의 지급 의무</strong> — 임금·퇴직금 지급 의무가 확정되어 있어야 함. 분쟁 중인 임금이라도 노동청 시정지시·확정판결로 지급 의무가 인정되면 적용.</li>\n<li><strong>② 14일 경과</strong> — 지급기일(통상 매월 정기지급일)로부터 14일이 지나도 미지급 상태면 그 시점부터 지연이자 발생. 퇴직금은 퇴직일로부터 14일 기준.</li>\n<li><strong>③ 정당한 사유 부재</strong> — 회사가 부도·파산·천재지변 같은 정당한 사유를 입증하면 지연이자 적용 제외 가능. 단순 자금 부족은 정당 사유 인정 어려움.</li>\n<li><strong>④ 적용 범위</strong> — 재직자 임금: 지급기일 이후 14일부터 퇴직 전까지는 일반 민사 5% 적용. 퇴직자: 퇴직일로부터 14일 이후는 연 20% 가산이자 적용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 재직자보다 퇴직자에게 적용 폭이 넓고 이자율도 더 높습니다. 퇴직 후 14일 지나도록 임금·퇴직금 미지급이라면 이자 청구 가치가 즉시 발생합니다.</blockquote>',
      },
      {
        title: '진정 + 민사 동시 진행이 유리한 4가지 이유',
        content:
          '<p><strong style="color:#1e3a5f">노동청 진정과 민사 청구를 병행하면 회수 속도와 청구 범위에서 유리합니다.</strong></p>\n<ul>\n<li><strong>① 노동청 시정지시 → 회사 압박</strong> — 노동청 시정지시는 처리기간 25일로 빠르고 형사 송치 압박이 있어 회사가 자진 지급하는 사례가 있음.</li>\n<li><strong>② 민사 → 지연이자 청구권 확보</strong> — 노동청은 본 임금만 시정지시함. 지연이자는 별도 민사 청구가 필요. 동시 진행 시 빠르고 누락 없음.</li>\n<li><strong>③ 도산대지급금 신청 가능</strong> — 회사가 도산했다면 노동부 도산대지급금(체당금) 신청 검토. 최대 1,000만 원 한도 내에서 우선 변제 가능성.</li>\n<li><strong>④ 형사 송치 + 합의 가능성</strong> — 진정 미이행 시 사업주는 3년 이하 징역 또는 3,000만 원 이하 벌금. 형사 절차 회피를 위해 합의·즉시 지급하는 사례가 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 일부만 변제하더라도 변제 시점부터 시효가 다시 시작되므로 자료를 보존하고 잔여분에 대한 지연이자 청구를 이어가세요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 임금 지연이자 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 + 민사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 미지급 명세 + 지연이자 산출</strong> (즉시) — 미지급 항목·지급기일·경과 일수·지연이자(연 20%)를 표로 정리. 이자는 지급기일 14일 이후부터 일할 계산.</li>\n<li><strong>2단계 — 내용증명 발송</strong> (선택) — 미지급 금액·지연이자·지급기한을 명시한 내용증명. 시효 중단(민법 제174조) 효과로 6개월 내 소 제기와 결합.</li>\n<li><strong>3단계 — 노동청 진정</strong> (3년 이내) — 노동포털(labor.moel.go.kr) 또는 관할 지방고용노동지청. 처리기간 25일(연장 가능). 시정지시 → 미이행 시 형사 송치(3년 이하 징역/3,000만 원 이하 벌금).</li>\n<li><strong>4단계 — 민사 청구 또는 지급명령</strong> (병행 가능) — 본 임금 + 연 20% 지연이자 합산. 3,000만 원 이하면 소액심판 → 통상 2~3개월 판결. 회사 무대응 시 지급명령은 즉시 효력.</li>\n<li><strong>5단계 — 강제집행</strong> (확정판결 후) — 회사 통장·매출채권·부동산 압류. 회사 도산 시 도산대지급금(체당금) 신청 별도 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금 지연이자, AI로 청구 절차를 정리하세요</strong></p>\n<p style="margin:0;font-size:0.95em">미지급 항목·기일·경과 일수를 입력하면 지연이자 산출과 진정·민사 동시 진행 방법을 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>근로계약서·연봉계약서 (지급기일 명시 확인)</li>\n<li>최근 급여명세서·퇴직금 지급명세서</li>\n<li>입금 통장 거래내역 (지급 누락 일자 입증)</li>\n<li>회사의 지급 약속·지연 통보 문자·이메일</li>\n<li>내용증명 사본 (보냈다면)</li>\n<li>이직확인서·퇴직증명서 (퇴직자의 경우)</li>\n<li>회사 도산·폐업 자료 (도산대지급금 신청 시)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임금채권 시효 항변과 권리남용',
        summary:
          '대법원 2024다294705 사건(대법원, 2025.05.29 선고)에서 법원은 채무자의 소멸시효 항변권 행사도 신의성실 원칙과 권리남용금지 원칙의 지배를 받아, 시효 완성 전에 권리행사를 곤란하게 하였거나 시효 완성 후에 시효를 원용하지 않을 것 같은 태도를 보여 신뢰하게 한 경우 등에는 소멸시효 항변이 권리남용으로 허용될 수 없다고 판시했습니다.',
        takeaway:
          '회사가 "곧 정산해줄게"로 안심시킨 정황이 있다면 시효 항변을 다툴 여지가 있고, 본 임금 + 연 20% 지연이자를 함께 청구할 가능성이 열립니다.',
      },
    ],
    faq: [
      {
        question: '재직 중인데도 연 20% 지연이자를 받을 수 있나요?',
        answer:
          '<strong>재직 중에는 일반 민사 5% 지연손해금이 원칙입니다.</strong> 연 20% 가산이자는 퇴직자에게 폭넓게 적용됩니다. 재직 중에도 정기지급일 + 14일 경과 시 5% 지연이자는 청구 가능해요.',
      },
      {
        question: '회사가 "자금 사정상 늦었다"고 하면 정당한 사유인가요?',
        answer:
          '<strong>단순 자금 부족은 정당 사유로 인정되기 어렵습니다.</strong> 부도·파산·천재지변 등 객관적 입증이 필요하며, 그 외에는 연 20% 지연이자가 적용될 가능성이 높아요.',
      },
      {
        question: '지연이자만 따로 청구할 수도 있나요?',
        answer:
          '<strong>본 임금과 함께 청구하는 것이 일반적이지만, 본 임금만 받은 후 지연이자만 별도 청구도 가능합니다.</strong> 다만 시효 3년 안에서 청구해야 하므로 일찍 진행하는 것이 좋아요.',
      },
      {
        question: '회사가 도산했는데 지연이자도 받을 수 있나요?',
        answer:
          '<strong>도산대지급금(체당금)은 본 임금·퇴직금 일부에 한정되며 지연이자는 포함되지 않는 것이 원칙입니다.</strong> 다만 사업주 개인 재산 추급·파산 절차에서 일반 채권으로 청구할 여지가 있어요.',
      },
      {
        question: '소액(예: 100만 원)도 지연이자 청구 가치가 있나요?',
        answer:
          '<strong>소액심판(3,000만 원 이하)으로 빠르게 진행 가능하고 진정과 병행하면 회수 가능성이 있습니다.</strong> 1년 미수령 시 본 임금 + 약 20만 원 이자 + 형사 압박으로 합의·자진 지급 사례가 많아요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 1년 경과 시효 청구', href: '/guide/wage/wage-unpaid-one-year-statute-claim' },
      { label: '임금체불 진정 전 체크리스트', href: '/guide/wage/wage-complaint-pre-filing-checklist' },
      { label: '연장수당 미지급 신고 절차', href: '/guide/wage/wage-overtime-report-procedure-timeline' },
      { label: '식대·교통비 임의 중단 대응', href: '/guide/wage/wage-meal-transport-suddenly-stopped' },
      { label: '인센티브 기준 사후 변경 청구', href: '/guide/wage/wage-incentive-criteria-changed-after' },
    ],
  },

  // ─── 4. unemployment / business-suspension-self-leave ───
  {
    domain: 'unemployment',
    slug: 'unemployment-business-suspension-self-leave',
    keyword: '사업장 휴업 자진퇴사 실업급여',
    questionKeyword: '사업장이 휴업해서 자진퇴사했는데 실업급여 받을 수 있나요?',
    ctaKeyword: '사업장 휴업 자진퇴사 실업급여 가능성 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사업장 휴업 자진퇴사 실업급여 — 정당이직 인정 요건 5가지 | 로앤가이드',
      description:
        '사업장 휴업·임금 20% 이상 감소·2개월 이상 휴업 시 자진퇴사도 정당이직으로 실업급여 인정 가능성이 있습니다. 신청 절차와 14일 시한을 지금 확인하세요.',
    },
    intro:
      '<p>"회사가 갑자기 휴업한다고 통보하더니 두 달째 임금이 절반밖에 안 들어와요. 더는 못 버틸 것 같아 자진퇴사 결심했는데 실업급여 받을 수 있을까요?" 사업장 휴업·경영악화로 임금이 20% 이상 줄거나 2개월 이상 휴업이 지속된 경우, 자진퇴사도 정당이직 사유로 인정될 여지가 있습니다(고용보험법 시행규칙 제101조의2 [별표2]). 14일 내 신청 권장. 휴업 통보·임금감소 자료를 확보해두면 수급자격 심사에 유리합니다.</p>',
    sections: [
      {
        title: '사업장 사정으로 인한 정당이직 — 인정 요건 5가지',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 시행규칙 제101조의2 [별표2] 정당이직 사유 중 사업장 사정 항목은 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>① 임금 체불</strong> — 2개월 이상 임금 체불이 있거나 1년 동안 2개월 이상에 해당하는 임금이 체불된 사실. 객관적 미지급 증명 필요.</li>\n<li><strong>② 임금 감소</strong> — 사업장의 사정으로 임금이 최저임금에 미달하거나 종전 평균임금의 20% 이상 줄어든 경우.</li>\n<li><strong>③ 2개월 이상 휴업</strong> — 사업장의 휴업으로 휴업 전 평균임금의 70%(휴업급여) 미만 지급이 2개월 이상 지속된 경우.</li>\n<li><strong>④ 사업장 이전·합병·분할</strong> — 통근이 곤란할 정도로 사업장이 이전되었거나 합병·분할로 근로조건이 현저히 악화된 경우.</li>\n<li><strong>⑤ 폐업이 임박한 경우</strong> — 도산·폐업 절차가 진행 중이라 객관적으로 근로 지속이 불가능한 경우.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "회사 사정"이라는 주관적 표현보다는 "임금 X% 감소", "Y개월 휴업", "체불 Z개월" 같은 구체 수치로 입증해야 인정 가능성이 높아집니다.</blockquote>',
      },
      {
        title: '수급자격 인정에 필요한 입증 자료 4가지',
        content:
          '<p><strong style="color:#1e3a5f">고용센터 심사를 통과하려면 사업장 사정을 객관 자료로 입증해야 합니다.</strong></p>\n<ul>\n<li><strong>휴업·임금감소 통보 문서</strong> — 회사가 보낸 휴업 안내·임금삭감 통보 메일·메신저 캡처. 발송 일자와 사유 명시 자료가 결정적.</li>\n<li><strong>급여명세서 비교</strong> — 휴업·감소 전 3~6개월치 vs 휴업 후 명세서를 나란히 정리. 20% 이상 감소·2개월 이상 지속 사실을 표로 입증.</li>\n<li><strong>이직확인서 사유 코드</strong> — 회사에 코드 23(경영상 필요·회사 불황) 또는 코드 26(사업장 이전·통근 곤란) 기재 요청. "개인사정" 처리 시 거부 위험.</li>\n<li><strong>휴업 사실 증빙</strong> — 휴업 공고문·내부 게시판·동료 진술서·고용보험 휴업신고 사본 등 객관 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 주의: 이직 후 14일이 지나면 신청은 가능하지만 "신청 지연 사유"가 추가 검토 대상이 될 수 있습니다. 가능한 한 14일 안에 워크넷·고용센터 신청을 시작하세요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 휴업·임금감소 자진퇴사 실업급여 신청 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용센터 안내 절차를 참고하면 다음 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사정 입증 자료 보존</strong> (이직 전) — 휴업 통보·임금감소 통보·급여명세서 비교 정리. 회사 폐업·이전 공고도 함께 캡처.</li>\n<li><strong>2단계 — 이직확인서 협의</strong> (이직 시) — 회사에 정당이직 사유 코드(23/26 등) 기재 요청. "개인사정"으로 기재되면 수급 거부 위험.</li>\n<li><strong>3단계 — 수급자격 신청</strong> (이직 후 14일 내 권장) — 거주지 관할 고용센터 방문 또는 워크넷(work.go.kr) 온라인 신청. 입증 자료 함께 첨부.</li>\n<li><strong>4단계 — 수급자격 심사</strong> (신청 후 약 2~3주) — 고용센터가 사업장 사정·임금감소 객관성 검토. 추가 자료 요청 시 기한 내 제출.</li>\n<li><strong>5단계 — 거부 시 심사청구</strong> (처분일 90일 이내) — 불인정 시 고용보험 심사관에게 심사청구 → 재심사청구(고용보험심사위원회) → 행정소송.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 휴업·임금감소 자진퇴사, AI로 실업급여 가능성을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">휴업 기간·임금 감소율·체불 여부를 입력하면 정당이직 인정 가능성을 확인할 수 있습니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">실업급여 받을 수 있는지 AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>근로계약서·연봉계약서</li>\n<li>휴업 전 6개월 + 휴업 후 급여명세서</li>\n<li>회사 휴업·임금감소 통보 문서·이메일·메신저</li>\n<li>이직확인서 (사유 코드 확인)</li>\n<li>고용보험 피보험기간 조회서 (근로복지공단)</li>\n<li>휴업 공고·내부 게시판 캡처</li>\n<li>임금체불 진정 자료 (체불 동시 진행 시)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 본인 책임 없는 사유로 인한 이직',
        summary:
          '고용보험심사위원회 2023재결 제42호(고용보험심사위원회, 2023.06.21 재결)에서 위원회는 근로계약서에 해지사유로 "요양보호사 거부 등의 사유로 계속 근무를 할 수 없게 되었을 때"가 명시되어 있어 요양대상자의 요양거부가 명확하게 인정되므로 본인의 책임 없는 사유로 퇴사한 것으로 보고 실업급여 수급자격이 인정된다고 판단해, 수급자격 불인정 처분을 취소하는 결정을 내렸습니다.',
        takeaway:
          '회사 측 사정·계약상 사유로 근로 지속이 곤란하다면 형식상 자진퇴사라도 비자발적 이직으로 평가되어 실업급여 수급자격이 인정될 여지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '회사가 휴업 통보를 구두로만 했어요. 입증할 수 있나요?',
        answer:
          '<strong>녹취·메신저·이메일 등 가능한 객관 자료를 모으세요.</strong> 동료 진술서, 회사 게시판 사진, 거래처 안내문 등 간접 증거도 도움이 됩니다. 입증이 약하면 추가 사실조사 요청도 가능해요.',
      },
      {
        question: '휴업이 1개월 정도였는데도 인정되나요?',
        answer:
          '<strong>2개월 이상 지속 요건이 원칙이지만, 임금 20% 이상 감소·체불 등 다른 사유와 결합되면 인정 가능성이 있습니다.</strong> 한 가지 사유가 약하면 다른 사유와 결합해 종합 주장하세요.',
      },
      {
        question: '회사가 이직확인서에 "개인사정"으로 적었어요',
        answer:
          '<strong>고용센터에 정정 요청을 할 수 있습니다.</strong> 객관적 휴업·임금감소 자료를 첨부해 정정 신청하면 사유 변경이 가능한 사례가 있어요. 회사 협조 거부 시 고용센터가 직권 조사할 수 있습니다.',
      },
      {
        question: '임금이 20% 미만 감소했는데도 인정되나요?',
        answer:
          '<strong>20% 기준은 시행규칙상 명시된 사유 중 하나일 뿐입니다.</strong> 통근 곤란·근로조건 현저한 악화 등 다른 정당이직 사유에 해당하는지 종합 검토할 여지가 있어요.',
      },
      {
        question: '14일을 넘겨 신청해도 받을 수 있나요?',
        answer:
          '<strong>14일은 권장 기한이며 절대 시한은 아닙니다.</strong> 다만 신청이 지연된 사유 소명이 필요하고, 수급기간(이직일로부터 12개월) 내에 신청해야 해요.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '계약직 갱신거절 자발·비자발 판단', href: '/guide/unemployment/unemployment-contract-non-renewal-just-cause' },
      { label: '자영업 폐업 후 실업급여 수급', href: '/guide/unemployment/unemployment-self-employed-closure-eligibility' },
      { label: '자진퇴사 실업급여 인정 요건', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '실업급여 부정수급 환수·처벌', href: '/guide/unemployment/unemployment-fraudulent-recovery-penalty' },
      { label: '실업급여 신청부터 수령까지 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
    ],
  },

  // ─── 5. unemployment / job-search-violation-cancel ───
  {
    domain: 'unemployment',
    slug: 'unemployment-job-search-violation-cancel',
    keyword: '구직활동 의무 위반 부정수급',
    questionKeyword: '구직활동 허위 신고로 부정수급 통보를 받았는데 다툴 수 있나요?',
    ctaKeyword: '구직활동 허위 신고 처분 다툼 가능성 확인',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '구직활동 의무 위반 부정수급 — 환수·5배 추가징수 다툼 | 로앤가이드',
      description:
        '구직활동 허위·미신고로 부정수급 처분을 받았다면 환수·5배 추가징수에 소명·이의신청·심사청구 90일 이내 다툴 수 있습니다. 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"구직활동 신고를 채용 자격이 안 맞는 곳에 이력서 보낸 걸로 했는데, \'형식적 구직활동\'이라며 부정수급 처분이 떨어졌어요." 구직활동 의무 위반(허위·형식적·미신고)으로 부정수급으로 분류되면 환수 + 최대 5배 추가징수가 가능합니다(고용보험법 제62조). 다만 사실과 다르게 신고되었거나 형식적 구직활동의 판단이 부당하다면 처분일로부터 90일 이내 심사청구로 다툴 수 있습니다(고용보험심사위원회 다수 재결례 취지). 즉시 입증 자료를 정리하세요.</p>',
    sections: [
      {
        title: 'Q. 어떤 행위가 "형식적 구직활동"으로 판단되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 심사위원회 재결례에서 형식적 구직활동으로 판단된 사례는 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>채용 자격 미충족 응모</strong> — 채용공고 자격조건(학력·경력·자격증 등)을 갖추지 않은 채 형식적으로 이력서만 제출한 경우.</li>\n<li><strong>해외 거주 중 국내 응모</strong> — 본인이 해외에 체류 중이면서 우회프로그램 등으로 국내 응모만 한 경우.</li>\n<li><strong>이미 취업 확정 상태</strong> — 이미 다른 회사 입사 확정·취업 사실이 있음에도 다른 곳에 응모한 경우.</li>\n<li><strong>친인척·지인 회사 형식 응모</strong> — 실제 채용 의사가 없는 친인척·지인 회사에 형식적으로 응모서만 보낸 경우.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사실과 다르게 신고되었다면 객관 자료로 다툴 여지가 있습니다. 본인이 실제로 구직활동을 했고 그 사실을 자료(메일·문자·면접 기록)로 입증할 수 있다면 부정수급이 아니라고 다툴 가능성이 열립니다.</blockquote>',
      },
      {
        title: 'Q. 환수·5배 추가징수 처분 어떻게 다투나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 다음 단계로 소명·이의신청·심사청구가 가능합니다.</strong></p>\n<ul>\n<li><strong>① 사전 소명 단계</strong> — 처분 전 고용센터의 사실관계 조사·소명 요청 시 적극 응하기. 이력서 보낸 회사 명단·면접 기록·자격 충족 입증 자료 제출.</li>\n<li><strong>② 처분 통지 직후 검토</strong> — 환수 금액·추가징수 배수·지급 제한 기간·형사 송치 여부 확인. 5배 추가징수가 합리적 비례성을 갖는지 검토.</li>\n<li><strong>③ 심사청구</strong> (처분일로부터 90일) — 고용보험 심사관에게 심사청구. 사실관계 오류·재량권 일탈·비례원칙 위반 등 주장.</li>\n<li><strong>④ 재심사청구</strong> (심사 결정일 90일) — 고용보험심사위원회. 변호사·노무사 자문 검토 가능.</li>\n<li><strong>⑤ 행정소송</strong> (재심사 후 90일) — 행정법원 제소. 형사 송치된 경우 별도 형사 절차 대응 필요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 구직활동 부정수급 처분, AI로 다툴 여지를 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">처분 사유·구직활동 자료·소명 가능 정황을 입력하면 심사청구 가능성을 확인할 수 있습니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">실업급여 받을 수 있는지 AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 부정수급 처분 다툼 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용보험심사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 처분 통지서 분석</strong> (즉시) — 환수 금액·추가징수 배수·지급제한 기간·형사 송치 여부 확인. 처분 사유 기재 부분을 자세히 검토.</li>\n<li><strong>2단계 — 소명·반박 자료 정리</strong> (처분 직후) — 응모 회사 채용공고·이력서 발송 기록·면접 일정·자격 충족 자료. 형식적 응모가 아니었다는 정황 확보.</li>\n<li><strong>3단계 — 심사청구</strong> (처분일 90일 이내) — 고용보험 심사관에게 심사청구서 제출. 사실관계 오류·재량 일탈·비례원칙 위반·소명 기회 부재 등 주장.</li>\n<li><strong>4단계 — 재심사청구</strong> (심사 결정일 90일 이내) — 고용보험심사위원회. 변호사·노무사 자문 적극 검토.</li>\n<li><strong>5단계 — 행정소송 (필요 시)</strong> — 재심사 결과 불복 시 행정법원 90일 이내 제소. 형사 송치된 경우 검찰·법원 단계 별도 대응.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 주의: 처분일·송달일은 90일 기산점이 됩니다. 통지서를 받자마자 일자를 기록하고 일정 관리하세요. 90일 도과 시 각하될 가능성.</blockquote>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>처분 통지서 사본 (환수·추가징수·지급제한 명시)</li>\n<li>실업인정 신청서·구직활동 신고서 사본</li>\n<li>이력서 발송 기록 (메일·워크넷 캡처)</li>\n<li>응모 회사 채용공고·자격 충족 입증 자료</li>\n<li>면접 통지·일정·결과 기록</li>\n<li>심사청구서 양식 (고용보험심사관용)</li>\n<li>고용센터 상담 기록 (담당자 안내 오류 입증 시)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 형식적 구직활동 판단의 한계',
        summary:
          '고용보험심사위원회 2021재결 제95호(고용보험심사위원회, 2021.07.21 재결)에서 위원회는 청구인이 지인의 부탁으로 2일간 대가 없이 도와준 것일 뿐 고용보험법령상 취업을 한 것은 아니라고 보아 실업급여 반환명령 처분을 취소하는 결정을 내렸습니다.',
        takeaway:
          '구직활동·노무 제공의 실질을 객관 자료로 소명하면 부정수급 처분을 다툴 여지가 있고, 사실과 다르게 신고되었다면 처분 취소 가능성도 열립니다.',
      },
    ],
    faq: [
      {
        question: '이력서를 진짜로 보냈는데 형식적이라고 판단됐어요',
        answer:
          '<strong>객관 자료로 실제 구직 의사를 입증할 수 있습니다.</strong> 발송 메일·워크넷 응모 기록·자격 충족 입증·면접 일정 등을 정리해 심사청구 시 첨부하세요. 형식 판단이 부당하다고 다툴 여지가 있어요.',
      },
      {
        question: '5배 추가징수가 너무 과한데 줄일 수 있나요?',
        answer:
          '<strong>비례원칙·재량권 일탈 주장으로 감경을 다툴 여지가 있습니다.</strong> 고의·반복·금액 등 가중사유가 약하다면 추가징수 배수가 과도하다고 심사청구로 주장 가능해요.',
      },
      {
        question: '환수 금액을 한 번에 못 갚을 것 같아요',
        answer:
          '<strong>분할 납부 신청이 가능합니다.</strong> 고용센터에 분할 납부 신청서를 제출하고 사정에 따라 6~12개월 분납 협의가 이뤄지는 사례가 있어요. 미납 지속 시 강제집행 가능성도 있어 협의가 우선입니다.',
      },
      {
        question: '심사청구는 어떻게 신청하나요?',
        answer:
          '<strong>고용보험 심사관에게 심사청구서를 제출하면 됩니다.</strong> 워크넷·고용보험사이트에서 양식 다운로드 가능하며, 변호사·노무사 자문을 받아 작성하는 것이 유리한 사례가 많아요.',
      },
      {
        question: '형사 송치되면 무조건 처벌받나요?',
        answer:
          '<strong>혐의를 받고 있다면 검찰 단계에서 자수·소명 + 환수 완납 시 기소유예·약식기소로 종결되는 사례가 있습니다.</strong> 형사 절차에서도 변호사 자문이 권장됩니다.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 부정수급 환수·처벌', href: '/guide/unemployment/unemployment-fraudulent-recovery-penalty' },
      { label: '계약직 갱신거절 자발·비자발 판단', href: '/guide/unemployment/unemployment-contract-non-renewal-just-cause' },
      { label: '실업급여 신청부터 수령까지 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '자영업 폐업 후 실업급여 수급', href: '/guide/unemployment/unemployment-self-employed-closure-eligibility' },
      { label: '자진퇴사 실업급여 인정 요건', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
    ],
  },

  // ─── 6. retirement / irp-mandatory-rollover-tax ───
  {
    domain: 'retirement',
    slug: 'retirement-irp-mandatory-rollover-tax',
    keyword: 'IRP 의무이전 퇴직소득세 절세',
    questionKeyword: '퇴직금 IRP로 받으면 세금이 줄어드나요?',
    ctaKeyword: 'IRP 의무이전 퇴직소득세 절세 가능성 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'IRP 의무이전 — 만 55세·10년 가입 시 연금 vs 일시금 절세 | 로앤가이드',
      description:
        'IRP 의무이전 시 만 55세·10년 이상이면 연금 수령으로 퇴직소득세 30~40% 절세가 가능합니다. 일시금 vs 연금 선택 기준을 지금 확인하세요.',
    },
    intro:
      '<p>"퇴직금을 IRP로 받으라는데 일시금으로 찾으면 손해라네요. 연금으로 받으면 얼마나 세금이 줄어드나요?" 만 55세 이상 + 가입 10년 이상이면 IRP에서 연금으로 수령할 수 있고, 이때 퇴직소득세 30%(10년 차) ~ 40%(10년 초과)가 감면됩니다(소득세법 제48조 제1항). 일시금으로 받으면 근속연수공제만 적용되고 절세 효과가 작습니다. 인출 시점·수령 방식 결정에 따라 수백만 원이 차이날 수 있어 점검 가치가 큽니다.</p>',
    sections: [
      {
        title: 'IRP 의무이전 — 어떤 경우에 적용되나요?',
        content:
          '<p><strong style="color:#1e3a5f">근로자퇴직급여 보장법 제17조에 따라 다음 경우 IRP 이전이 의무화됩니다.</strong></p>\n<ul>\n<li><strong>① 55세 미만 + 일반 퇴직</strong> — 만 55세 미만 퇴직자는 IRP 계좌 개설 후 퇴직금 이전이 원칙(과세이연 효과). 본인 명의 IRP 계좌 미개설 시 회사가 일시금 지급 + 원천징수.</li>\n<li><strong>② 55세 이상 + 본인 선택</strong> — 만 55세 이상은 IRP 이전 또는 일시금 직접 수령 선택 가능. 일시금 수령 시 퇴직소득세 즉시 원천징수.</li>\n<li><strong>③ DC형·DB형 → IRP 통합</strong> — 가입 사업장이 바뀌어도 IRP로 통합 운용 가능. 과세이연 + 운용수익 비과세(인출 전까지).</li>\n<li><strong>④ 연금 수령 요건</strong> — 만 55세 이상 + 가입 10년 이상 + 5년 이상 분할 수령. 요건 충족 시 연금소득세 저율 분리과세 + 퇴직소득세 30~40% 감면.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 만 55세 미만이라면 사실상 IRP 이전이 강제이고, 만 55세 이상이라면 일시금 vs 연금 선택지가 있으나 절세 측면에서는 연금이 유리합니다.</blockquote>',
      },
      {
        title: '연금 vs 일시금 — 절세 차이 4가지',
        content:
          '<p><strong style="color:#1e3a5f">소득세법 제48조·제129조를 참고하면 수령 방식별 세제 차이는 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>① 일시금 수령 시</strong> — 근속연수공제·환산급여공제 후 퇴직소득세 부과(분류과세). 종합소득과 합산되지 않으나 한 번에 큰 세액 부과.</li>\n<li><strong>② 연금 수령 시 (10년 차까지)</strong> — 매년 받는 연금에 대해 퇴직소득세의 70% 적용(30% 감면). 일시금 대비 절세.</li>\n<li><strong>③ 연금 수령 시 (10년 초과)</strong> — 11년차부터는 퇴직소득세의 60% 적용(40% 감면). 장기 분산 수령일수록 절세 폭 확대.</li>\n<li><strong>④ 운용수익 부분</strong> — IRP 운용수익에 대한 인출 시점에는 연금소득세(3.3~5.5%) 분리과세. 일시금 인출 시 기타소득세(16.5%)로 무거움.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 퇴직금 1억 + 근속 20년 기준으로 일시금 vs 10년 분할 연금 수령 시 세금 차이가 수백만 원 이상 나는 사례가 있습니다. 본인 사정에 맞는 시뮬레이션 가치가 큽니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — IRP 이전·연금 수령 절차',
        content:
          '<p><strong style="color:#1e3a5f">금융기관 IRP 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — IRP 계좌 개설</strong> (퇴직 전 권장) — 은행·증권사·보험사에서 본인 명의 IRP 계좌 개설. 수수료·운용 옵션 비교 후 선택.</li>\n<li><strong>2단계 — 회사에 IRP 계좌 통보</strong> (퇴직 시) — 회사 인사팀에 IRP 계좌번호 통보 → 퇴직금 이전 신청. 미통보 시 일시금 + 원천징수로 처리될 위험.</li>\n<li><strong>3단계 — 운용 옵션 선택</strong> (이전 후) — 예금·채권·펀드 등 운용 상품 선택. 만 55세 이전엔 인출 제한, 운용수익 과세이연.</li>\n<li><strong>4단계 — 연금 수령 신청</strong> (만 55세 + 가입 10년 도달 시) — 금융기관에 연금 수령 신청. 5년 이상 분할 수령 설정 → 연금소득세·퇴직소득세 감면 적용.</li>\n<li><strong>5단계 — 정정·환급 검토</strong> (필요 시) — 회사가 일시금 + 원천징수로 잘못 처리했다면 5년 이내 경정청구로 환급 가능. 홈택스·관할 세무서 신청.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 IRP·연금 절세, AI로 시뮬레이션해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">근속·연령·퇴직금 금액·수령 방식을 입력하면 일시금 vs 연금 절세 차이를 확인할 수 있습니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">퇴직금 계산과 청구 절차, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>퇴직소득 원천징수영수증 (회사 발급)</li>\n<li>퇴직금 지급명세서</li>\n<li>IRP 계좌 개설 증서·잔고 확인서</li>\n<li>근로계약서·재직 증명서 (근속기간 입증)</li>\n<li>이전 회사 IRP 통합 자료 (이직 이력 있을 시)</li>\n<li>연금 수령 신청서 (만 55세 도달 시)</li>\n<li>경정청구서 (잘못 처리됐을 때)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직연금수급권의 압류금지와 보호 취지',
        summary:
          '대법원 2022다285097 사건(대법원, 2024.01.04 선고)에서 법원은 근로자퇴직급여 보장법 제7조가 퇴직연금제도의 급여를 받을 권리는 양도 또는 압류하거나 담보로 제공할 수 없다고 규정해 퇴직연금수급권 전액에 관해 압류가 금지되며, 이는 퇴직급여제도의 설정·운영을 통해 마련된 경제적 수입이 근로자 본인은 물론 그 가족의 안정적 노후생활을 보장하는 기초가 되도록 하려는 사회적·정책적 고려에 따른 것이라고 판시했습니다.',
        takeaway:
          'IRP·퇴직연금은 노후 보장을 위한 강한 법적 보호를 받으므로, 이전·운용·수령 방식 선택을 신중히 검토해야 절세와 보호 효과가 결합됩니다.',
      },
    ],
    faq: [
      {
        question: '꼭 IRP 계좌를 만들어야 하나요?',
        answer:
          '<strong>만 55세 미만 퇴직자는 사실상 IRP 이전이 의무입니다.</strong> 미개설 시 일시금 + 원천징수로 처리되어 절세 효과가 사라질 수 있어요. 퇴직 전 미리 개설하는 것이 안전합니다.',
      },
      {
        question: '만 55세 이상이면 연금이 무조건 유리한가요?',
        answer:
          '<strong>대체로 절세 측면에서 연금이 유리하지만 본인 자금 사정·운용 능력에 따라 다릅니다.</strong> 일시금이 필요한 사정이 있다면 일시금이 합리적일 수 있어요. 시뮬레이션 후 결정하는 것이 좋습니다.',
      },
      {
        question: '연금 수령 중에 일시금으로 바꿀 수 있나요?',
        answer:
          '<strong>중도 일시 인출은 가능하지만 그 시점부터 절세 혜택이 사라지고 잔여분은 기타소득세(16.5%) 부과됩니다.</strong> 절세 혜택을 유지하려면 5년 이상 분할 수령을 지키는 것이 좋아요.',
      },
      {
        question: '회사가 잘못해서 일시금으로 입금했어요',
        answer:
          '<strong>5년 이내 경정청구로 환급 가능합니다.</strong> 홈택스 또는 관할 세무서에 본인 명의 IRP 계좌·이전 의사를 입증하면 과다 원천징수분 환급 절차를 진행할 수 있어요.',
      },
      {
        question: 'IRP에서 운용수익이 났는데 세금은요?',
        answer:
          '<strong>운용수익은 인출 시점까지 과세이연됩니다.</strong> 연금 수령 시 연금소득세(3.3~5.5%) 분리과세 → 절세. 일시 인출 시 기타소득세(16.5%) → 무거움. 분할 수령이 일반적으로 유리합니다.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직소득세 근속연수공제 환급', href: '/guide/retirement/retirement-tax-tenure-deduction-refund' },
      { label: '명예퇴직금 환수 재취업 제한 무효', href: '/guide/retirement/retirement-honorary-pay-recoupment-job-restriction' },
      { label: '퇴직금 중간정산 후 합산', href: '/guide/retirement/retirement-interim-settlement-aggregation' },
      { label: '퇴직금 시효 3년 청구', href: '/guide/retirement/retirement-pay-three-year-statute' },
      { label: '퇴직금 계산 평균임금 산정', href: '/guide/retirement/retirement-pay-average-wage-calculation' },
    ],
  },

  // ─── 7. retirement / five-year-service-claim-method ───
  {
    domain: 'retirement',
    slug: 'retirement-five-year-service-claim-method',
    keyword: '5년차 퇴직금 평균임금 산정',
    questionKeyword: '5년 일하고 퇴사했는데 퇴직금이 너무 적게 나왔어요',
    ctaKeyword: '5년차 퇴직금 차액 청구 가능성 확인',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '5년차 퇴직금 — 평균임금·상여금 포함·중간정산 합산 분쟁 | 로앤가이드',
      description:
        '5년 차 퇴사자 퇴직금이 적게 산정됐다면 평균임금 누락·상여금 미포함·중간정산 합산 누락을 점검할 수 있습니다. 차액 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"5년 일하고 퇴사했는데 퇴직금이 예상보다 200만 원 적게 들어왔어요. 회사 산정이 맞나요?" 5년 차 퇴직금은 평균임금 산정 방식·상여금 포함 여부·중간정산 합산에 따라 수백만 원 차이가 날 수 있습니다(근로기준법 제2조 제1항 제6호 평균임금, 근로자퇴직급여 보장법 제8조). 회사가 기본급만으로 산정했거나 정기 상여금을 빼놓았다면 시효 3년 안에서 차액을 청구할 여지가 있습니다(대법원 2021다218083 사건 취지).</p>',
    sections: [
      {
        title: 'Q. 5년차 퇴직금이 적게 나오는 4가지 흔한 원인',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사가 다음 항목을 누락하면 퇴직금이 과소 산정됩니다.</strong></p>\n<ul>\n<li><strong>① 정기 상여금·인센티브 누락</strong> — 정기·일률·고정성 갖춘 상여금은 평균임금에 포함되어야 함. 회사가 "특별 보너스"로 분류해 제외하면 차액 발생.</li>\n<li><strong>② 식대·교통비·직책수당 제외</strong> — 매월 정기 지급되는 식대·교통비·직책수당이 임금이라면 평균임금에 포함됨. 단순 실비 정산이 아니라면 임금성 다툼 여지.</li>\n<li><strong>③ 연차수당·미사용 휴가 누락</strong> — 퇴직 직전 1년간 발생한 연차수당은 평균임금에 산입(3/12 적용). 회사가 이를 빠뜨리면 차액 청구 가능.</li>\n<li><strong>④ 중간정산 후 합산 누락</strong> — 중간정산을 받았더라도 그 후 근속이 단절되지 않았다면 합산 청구가 가능한 사례(대법원 98다36924 취지). 회사가 중간정산 이후만 산정했다면 차액.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 같은 5년 근속이라도 평균임금 산정 방식·항목 포함 여부에 따라 퇴직금 차이가 200~500만 원 나는 사례가 흔합니다. 명세서 한 줄 한 줄 점검 가치가 큽니다.</blockquote>',
      },
      {
        title: 'Q. 평균임금은 어떻게 정확히 산정해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 근로기준법 시행령 제2조에 따라 다음 공식으로 산정합니다.</strong></p>\n<ul>\n<li><strong>기본 공식</strong> — 평균임금 = 퇴직 전 3개월간의 임금 총액 ÷ 그 기간 총 일수. 일급 단위로 산출.</li>\n<li><strong>퇴직금 계산</strong> — 퇴직금 = 평균임금 × 30일 × 근속연수. 5년 = 평균임금 × 30일 × 5.</li>\n<li><strong>상여금 안분</strong> — 1년 단위 상여금은 12개월로 나누어 3/12에 해당하는 부분을 평균임금에 포함. 분기 상여금도 마찬가지.</li>\n<li><strong>연차수당 안분</strong> — 퇴직 전 1년간 발생한 연차수당의 3/12를 평균임금에 산입.</li>\n<li><strong>특수·우연 사정 보정</strong> — 퇴직 직전에 일시적 임금 감소(휴직·결근)가 있었다면 통상적 생활임금으로 보정 산정 가능(대법원 일관 입장).</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 5년차 퇴직금 차액, AI로 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">기본급·상여금·수당·중간정산 자료를 입력하면 차액 청구 가능성과 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">퇴직금 계산과 청구 절차, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 퇴직금 차액 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 평균임금 재산정</strong> (즉시) — 퇴직 전 3개월 급여명세서로 임금 총액을 다시 계산. 상여금·수당·연차수당 안분 포함. 회사 산정과 비교.</li>\n<li><strong>2단계 — 차액 산출</strong> (즉시) — 정확한 평균임금 × 30 × 근속연수 = 정당한 퇴직금. 정당한 금액 − 실수령액 = 차액. 시효 3년 안에서 청구 가능.</li>\n<li><strong>3단계 — 회사에 정정 요청</strong> (선택) — 인사팀에 서면 정정 요청. 회신 거부 또는 14일 경과 시 다음 단계로.</li>\n<li><strong>4단계 — 노동청 진정</strong> (3년 이내) — 노동포털(labor.moel.go.kr) 또는 관할 지방고용노동지청. 처리기간 25일. 시정지시 미이행 시 형사 송치(3년 이하 징역/3,000만 원 이하 벌금).</li>\n<li><strong>5단계 — 민사 청구 + 지연이자</strong> (필요 시) — 본 차액 + 연 20% 지연이자(근로자퇴직급여 보장법 제9조) 합산 청구. 3,000만 원 이하면 소액심판으로 빠른 판결.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 주의: 회사가 "이미 합의했다"며 합의서를 들이대더라도 공제·면제 합의가 강행법규(근로기준법) 위반이면 무효 다툴 여지가 있습니다.</blockquote>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>근로계약서·연봉계약서 (지급 항목 확인)</li>\n<li>최근 3개월 급여명세서 + 5년치 명세서 (평균임금·상여금 산정용)</li>\n<li>퇴직금 지급명세서·입금 통장 거래내역</li>\n<li>중간정산 지급명세서 (받았던 경우)</li>\n<li>연차사용 기록·미사용 연차수당 자료</li>\n<li>상여금·인센티브 지급 내역·운용규정</li>\n<li>이직확인서·퇴직증명서</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 시용기간을 포함한 계속근로기간 산정',
        summary:
          '대법원 2021다218083 사건(대법원, 2022.02.17 선고)에서 법원은 시용기간 만료 후 본 근로계약을 체결하여 공백 기간 없이 계속 근무한 경우 시용기간과 본 근로계약기간을 통산한 기간을 퇴직금 산정의 기초가 되는 계속근로기간으로 보아야 한다고 판시했습니다.',
        takeaway:
          '시용·수습·임시직 등 근로계약 형태 변경이 있었어도 실질적 계속근로가 인정되면 통산 근속으로 산정되어 퇴직금 차액 청구가 가능할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '회사가 "기본급의 1개월치 × 5년"으로 계산했는데 맞나요?',
        answer:
          '<strong>평균임금은 기본급뿐 아니라 정기 상여금·수당까지 포함합니다.</strong> 기본급만으로 계산한 경우 차액 발생 가능성이 큽니다. 명세서를 보고 평균임금을 다시 산정해보세요.',
      },
      {
        question: '중간정산을 받았는데 합산 청구할 수 있나요?',
        answer:
          '<strong>중간정산이 비진의 의사표시로 무효라면 합산 청구가 가능합니다.</strong> 형식적 사직·재입사로 근로 단절 없이 같은 업무를 계속 했다면 다툴 여지가 있어요.',
      },
      {
        question: '연차수당이 평균임금에 포함되나요?',
        answer:
          '<strong>퇴직 전 1년간 발생한 연차수당의 3/12 만큼이 산입됩니다.</strong> 미사용 연차수당이 있다면 함께 차액 산정에 포함시켜 청구할 수 있어요.',
      },
      {
        question: '퇴직 직전 휴직했는데 평균임금이 낮게 나옵니다',
        answer:
          '<strong>특수·우연한 사정으로 평균임금이 낮아진 경우 통상적 생활임금으로 보정 산정 가능합니다(대법원 일관 입장).</strong> 휴직·결근이 일시적이었다면 보정 청구를 검토하세요.',
      },
      {
        question: '5인 미만 사업장도 퇴직금이 나오나요?',
        answer:
          '<strong>5인 미만 사업장도 1년 이상 근로자에게 퇴직금 지급 의무가 있습니다(2010.12.1 시행).</strong> 다만 중간정산·DC형 등 일부 제도 적용은 차이가 있을 수 있어요.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직소득세 근속연수공제 환급', href: '/guide/retirement/retirement-tax-tenure-deduction-refund' },
      { label: '퇴직금 중간정산 후 합산', href: '/guide/retirement/retirement-interim-settlement-aggregation' },
      { label: '퇴직금 계산 평균임금 산정', href: '/guide/retirement/retirement-pay-average-wage-calculation' },
      { label: '퇴직금 시효 3년 청구', href: '/guide/retirement/retirement-pay-three-year-statute' },
      { label: '명예퇴직금 환수 재취업 제한 무효', href: '/guide/retirement/retirement-honorary-pay-recoupment-job-restriction' },
    ],
  },
];
