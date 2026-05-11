import { SpokePage } from '../spoke-pages';

// batch62 wage·unemployment·retirement — 5개 (2026-05-12)
//
// 고유 존재 이유:
// wage 2:
// 1. 식대 별도지급 — 통상임금 포함 여부 다툼 트랙.
// 2. 휴일근로 가산수당 — 토요일 휴무 vs 일요일 휴일 구분 다툼 트랙.
// unemployment 1:
// 1. 권고사직 사유와 실업급여 수급 — 사용자 권고에 따른 자진사직의 이직사유 코드 다툼 트랙.
// retirement 2:
// 1. DB형 퇴직연금 운용손실 — 사용자 추가지급 의무 다툼 트랙.
// 2. 정규직 → 자영업 전환 — 재직 중 퇴직금 청구 가능 시점 트랙.

export const spokesBatch62WageUnempRetire: SpokePage[] = [
  // ─── 1. wage-meal-allowance-ordinary-wage-track ───
  {
    domain: 'wage',
    slug: 'wage-meal-allowance-ordinary-wage-track',
    keyword: '식대 통상임금 포함',
    questionKeyword: '매달 식대 20만원 별도로 받아요. 연장근로수당 계산할 때 통상임금에 포함되나요?',
    ctaKeyword: '식대 통상임금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '식대 통상임금 포함 여부 — 5단계 정기성·일률성·고정성 | 로앤가이드',
      description:
        '식대 별도지급이 통상임금에 포함되는지 판단하는 정기성·일률성·고정성 5가지 점검을 지금 확인하세요.',
    },
    intro:
      '<p>"매달 식대 20만원을 별도 명목으로 받아요. 연장·휴일근로 가산수당 계산할 때 회사는 \'식대는 통상임금 아니다\'며 빼는데, 동료들 사이에선 \'포함해야 한다\'는 얘기. 통상임금 포함 여부에 따라 가산수당이 월 10만원 가까이 차이나는 상황입니다." 대법원은 통상임금 판단 기준으로 ① 정기성 ② 일률성 ③ 고정성 3요건을 제시한 영역. 식대도 \'전 직원에게 일정액 정기지급\'이면 통상임금 포함 가능성 높음. 실비 정산형 vs 일정액 지급형 구분이 핵심. 대응 트랙은 ① 지급 기준 확인 ② 정기·일률·고정성 검토 ③ 노동청 진정 ④ 민사 소송 ⑤ 시효 3년 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 식대 통상임금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 지급기준·3요건·계산·청구·시효 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 지급 기준</strong> — 실비 정산 vs 일정액 정기지급.</li>\n<li><strong>② 정기성</strong> — 매월 일정 시점 지급.</li>\n<li><strong>③ 일률성</strong> — 일정 조건 충족 모든 근로자에게 지급.</li>\n<li><strong>④ 고정성</strong> — 추가 조건 없이 사전에 확정.</li>\n<li><strong>⑤ 시효 3년</strong> — 가산수당 차액 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 식대 20만원이 \"매월 전 직원\"에게 지급되면 통상임금 포함 가능성 높음. 영수증 첨부 실비 정산형은 제외 평가 여지.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 진정·소송 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 급여명세서·취업규칙 수집 (즉시)</strong></li>\n<li><strong>2단계 — 3요건 검토·차액 계산 (1주)</strong></li>\n<li><strong>3단계 — 노동청 진정 (1~2개월)</strong></li>\n<li><strong>4단계 — 민사 소송 (시효 3년)</strong> — 노동청 미해결 시.</li>\n<li><strong>5단계 — 강제집행 (확정 후)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">식대 통상임금 포함 여부를 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 임금·통상임금·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>최근 3년치 급여명세서</strong></li>\n<li><strong>근로계약서·취업규칙</strong></li>\n<li><strong>식대 지급 규정·기안문</strong></li>\n<li><strong>식권·식비 정산 영수증 (있다면)</strong></li>\n<li><strong>연장·휴일근로 발생 내역</strong></li>\n<li><strong>가산수당 차액 계산 자료</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>실비 정산 vs 정액 지급</strong> — 정액은 통상임금 포함 여지 높음.</li>\n<li><strong>출근일수 비례 지급</strong> — 일률성 약화 가능.</li>\n<li><strong>비과세 한도 20만원</strong> — 세무상 비과세와 통상임금은 별개.</li>\n<li><strong>고정성 약화 조건</strong> — \"성과 우수 시 지급\"은 통상임금 제외 여지.</li>\n<li><strong>시효 3년</strong> — 차액 청구 가능 기간.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 식대 통상임금 포함',
        summary:
          '대법원 2018두44661 영역 등에서 법원은 일정한 조건을 충족한 모든 근로자에게 정기·일률·고정적으로 지급되는 식대는 통상임금에 해당한다고 평가될 여지가 있다고 본 사례 흐름이 있습니다. 실비 정산 성격이 명백한 경우에는 통상임금에서 제외될 수 있다는 사례도 함께 나옵니다.',
        takeaway: '식대 정액·정기지급 = 통상임금 포함 가능성. 연장·휴일근로 많은 직군은 차액 청구 검토 가치.',
      },
    ],
    faq: [
      {
        question: '비과세 식대 20만원도 통상임금인가요?',
        answer:
          '<strong>비과세와 통상임금은 별개입니다.</strong> 3요건 충족 여부로 판단.',
      },
      {
        question: '식권을 별도 지급받으면 어떻게 되나요?',
        answer:
          '<strong>식권의 환금성·정기성에 따라 다릅니다.</strong> 매월 동액 식권 = 통상임금 여지.',
      },
      {
        question: '시효 3년 지난 부분도 받을 수 있나요?',
        answer:
          '<strong>일반적으로 어렵습니다.</strong> 시효 정지 사유 없으면 청구권 소멸.',
      },
      {
        question: '재직 중에도 청구 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 노동청 진정·민사 모두 재직 중 가능.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '통상임금 산정', href: '/guide/wage/wage-ordinary-wage-calculation' },
      { label: '임금체불 진정 절차', href: '/guide/wage/wage-back-pay-claim-step' },
      { label: '연장·휴일근로 가산수당', href: '/guide/wage/wage-overtime-allowance-calculation' },
      { label: '임금채권 시효', href: '/guide/wage/wage-statute-of-limitations' },
      { label: '노동청 진정', href: '/guide/wage/wage-labor-office-complaint' },
    ],
  },

  // ─── 2. wage-holiday-allowance-saturday-sunday-track ───
  {
    domain: 'wage',
    slug: 'wage-holiday-allowance-saturday-sunday-track',
    keyword: '토요일 일요일 휴일근로 가산수당',
    questionKeyword: '토요일 근무했는데 휴일근로 가산수당 안 주네요. 토요일과 일요일 차이가 있나요?',
    ctaKeyword: '토일 가산수당 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '토요일 vs 일요일 가산수당 — 5단계 휴무일·휴일 구분 | 로앤가이드',
      description:
        '토요일 근무에 휴일 가산수당이 적용되는지·일요일과 어떻게 다른지 5가지 판단 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"주 5일제 회사인데 가끔 토요일 출근 발생. 일요일 출근하면 1.5배 받지만 토요일은 1배만 줘요. \'토요일은 휴일이 아니라 휴무일\'이라는데, 정말 차이가 있는지 막막한 상황." 근기법은 \'주휴일\'만 \'휴일\'로 의제하고 토요일은 \'무급 휴무일\'인 사례가 일반적. 휴일근로는 통상임금의 1.5배(8시간 초과 시 2배) 가산이지만, 휴무일 근로는 연장근로로 처리되어 1.5배 가산이 적용되는 영역. 다만 노사 합의로 토요일도 휴일로 정한 경우엔 휴일근로 가산. 대응 트랙은 ① 취업규칙·단협 확인 ② 가산수당 차액 계산 ③ 노동청 진정 ④ 민사 ⑤ 시효 3년 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 토일 가산수당 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 휴일·휴무 구분·계산·청구·시효 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 토요일 성격</strong> — 휴무일(무급) vs 휴일(유급).</li>\n<li><strong>② 일요일 = 주휴일</strong> — 법정 휴일.</li>\n<li><strong>③ 휴일근로 1.5배 (8시간 초과 시 2배)</strong></li>\n<li><strong>④ 휴무일 근로 = 연장근로 1.5배</strong></li>\n<li><strong>⑤ 시효 3년</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 토요일이 단체협약·취업규칙상 \"휴일\"로 정해져 있으면 휴일근로 가산. 그냥 \"휴무\"면 연장근로 처리.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·계산·진정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 취업규칙·단협 확인 (즉시)</strong></li>\n<li><strong>2단계 — 가산수당 차액 계산 (1주)</strong></li>\n<li><strong>3단계 — 회사에 시정 요구 (서면)</strong></li>\n<li><strong>4단계 — 노동청 진정 (3년 시효)</strong></li>\n<li><strong>5단계 — 민사 소송</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">토일 가산수당 차액을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 5가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 근무·규정·계산 갈래입니다.</strong></p>\n<ul>\n<li><strong>토·일 근무 기록 (출퇴근 카드·근태기록)</strong></li>\n<li><strong>급여명세서</strong></li>\n<li><strong>취업규칙·단체협약 휴일 조항</strong></li>\n<li><strong>근로계약서</strong></li>\n<li><strong>가산수당 차액 계산서</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>휴일 vs 휴무 정의</strong> — 단협·규칙 명시 여부.</li>\n<li><strong>관공서 공휴일도 휴일</strong> — 2022년부터 5인 이상 사업장 적용.</li>\n<li><strong>8시간 초과 휴일근로 2배</strong></li>\n<li><strong>대체휴일제</strong> — 휴일 → 평일로 대체 가능.</li>\n<li><strong>포괄임금제</strong> — 사전 합의 무관히 별도 청구 가능 여지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 휴일·휴무 구분과 가산수당',
        summary:
          '대법원 2018두62492 영역 등에서 법원은 \"휴일\"과 \"휴무일\"은 개념상 구분되고, 토요일이 단체협약·취업규칙으로 \"휴일\"로 정해진 경우에 한해 휴일근로 가산수당이 적용되며, 별도 정함이 없으면 휴무일 근로로서 연장근로 가산수당이 적용된다고 본 사례 흐름이 있습니다.',
        takeaway: '토요일도 \"휴일\"로 정해진 회사면 1.5배. 그냥 \"휴무\"면 연장근로 처리.',
      },
    ],
    faq: [
      {
        question: '공휴일에 일했는데 어떻게 처리되나요?',
        answer:
          '<strong>2022년부터 5인 이상 사업장은 관공서 공휴일도 휴일입니다.</strong>',
      },
      {
        question: '토요일 4시간만 일했어요',
        answer:
          '<strong>휴일/휴무 구분에 따라 1.5배 가산.</strong> 8시간 미만은 추가 가산 없음.',
      },
      {
        question: '대체휴일 받았는데 가산수당 따로 받나요?',
        answer:
          '<strong>1.5배 차액은 별도 청구 가능 영역.</strong>',
      },
      {
        question: '포괄임금제면 청구 불가인가요?',
        answer:
          '<strong>아닙니다.</strong> 약정액이 법정 가산수당 이하면 차액 청구.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '휴일근로 가산수당', href: '/guide/wage/wage-holiday-overtime-allowance' },
      { label: '주휴수당 계산', href: '/guide/wage/wage-weekly-holiday-allowance' },
      { label: '공휴일 유급휴일', href: '/guide/wage/wage-public-holiday-paid' },
      { label: '포괄임금제 무효', href: '/guide/wage/wage-comprehensive-pay-invalid' },
      { label: '노동청 진정', href: '/guide/wage/wage-labor-office-complaint' },
    ],
  },

  // ─── 3. unemployment-recommended-resignation-eligibility-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-recommended-resignation-eligibility-track',
    keyword: '권고사직 실업급여 수급',
    questionKeyword: '회사 권고로 사직서 썼는데 실업급여 받을 수 있나요? 이직사유 코드가 중요하다던데요.',
    ctaKeyword: '권고사직 실업급여 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '권고사직 실업급여 — 5단계 이직사유 코드 점검 | 로앤가이드',
      description:
        '권고사직으로 사직서를 썼다면 실업급여 수급 가능성·이직사유 코드 26번 5가지 점검을 지금 확인하세요.',
    },
    intro:
      '<p>"회사 사정이 어렵다며 \'사직서 쓰면 권고사직으로 신고해주겠다\'고 해서 사직했어요. 그런데 막상 고용센터 갔더니 \'자발적 이직\'으로 신고됐다며 수급 거부. 이직사유 코드가 26번(권고사직)이 아닌 11번(자진사직)으로 입력된 것 같습니다." 실업급여 수급의 핵심은 \'이직사유 코드\'. 권고사직(코드 26)은 비자발적 이직으로 분류되어 수급 가능 영역. 자진사직(코드 11)은 원칙적 미수급. 회사가 실제 권고사직임에도 코드를 자진사직으로 잘못 입력한 경우 ① 권고사직 입증 ② 회사에 코드 정정 요구 ③ 고용센터 이의신청 ④ 행정심판 ⑤ 행정소송 5단계 대응이 가능한 흐름입니다.</p>',
    sections: [
      {
        title: 'Q. 권고사직 수급 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·정정·이의·심판·소송 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권고사직 입증</strong> — 녹취·메일·인사기록.</li>\n<li><strong>② 회사 코드 정정 요구</strong> — 26번으로 변경.</li>\n<li><strong>③ 고용센터 이의신청 (3개월)</strong></li>\n<li><strong>④ 고용보험심사위 재결 (90일)</strong></li>\n<li><strong>⑤ 행정소송 (1년)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \"권고사직 = 자발적 사직서 형식 + 비자발적 실질\". 권고 입증이 수급의 분기점.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 수급 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·신청·이의 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권고사직 입증자료 보존 (즉시)</strong> — 녹취·메일·문자.</li>\n<li><strong>2단계 — 회사에 코드 정정 요구 (1주)</strong></li>\n<li><strong>3단계 — 고용센터 수급 신청 (1년 내)</strong></li>\n<li><strong>4단계 — 부적격 시 이의신청 (3개월)</strong></li>\n<li><strong>5단계 — 재결·행정소송 (필요시)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">권고사직 수급 가능성을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 권고·이직·신청 갈래입니다.</strong></p>\n<ul>\n<li><strong>권고사직 권유 녹취·메일·문자</strong></li>\n<li><strong>사직서 사본</strong></li>\n<li><strong>이직확인서 (고용보험 토탈)</strong></li>\n<li><strong>피보험단위기간 확인</strong></li>\n<li><strong>인사기록·인사위 회의록</strong></li>\n<li><strong>본인 신분증·통장 사본</strong></li>\n<li><strong>구직활동 계획서</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>코드 26 vs 11</strong> — 권고 입증 부담은 근로자에게.</li>\n<li><strong>경영상 권고</strong> — 코드 23(경영상 해고)도 수급 가능.</li>\n<li><strong>피보험단위기간 180일</strong> — 이직 전 18개월 중.</li>\n<li><strong>구직활동 의무</strong> — 4주 1회 이상.</li>\n<li><strong>대기기간 7일</strong> — 신청 후 7일 무지급.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>고용보험심사위 044-202-7290</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 권고사직과 자진사직 구분',
        summary:
          '서울행정법원 2024구합52434 영역 등에서 법원은 사직서가 형식적으로 제출되었더라도 사용자의 권고·압박에 기인하여 작성된 경우에는 비자발적 이직으로 평가될 여지가 있고, 녹취·메일·동료 진술 등 객관적 자료가 핵심 입증 수단이 된다고 본 사례 흐름이 있습니다.',
        takeaway: '사직서 형식보다 권고·압박의 실질이 핵심. 녹취·메일 등 객관적 자료가 분기점.',
      },
    ],
    faq: [
      {
        question: '이직사유 코드는 어디서 확인하나요?',
        answer:
          '<strong>고용보험 토탈서비스 이직확인서에서 확인 가능합니다.</strong>',
      },
      {
        question: '회사가 코드 정정 거부하면 어떻게 하나요?',
        answer:
          '<strong>고용센터 이의신청·근로감독관 진정으로 정정 가능 영역.</strong>',
      },
      {
        question: '권고사직 + 위로금 받았어요',
        answer:
          '<strong>위로금 수령과 수급 가능성은 별개입니다.</strong> 단, 임금 성격이면 산정 영향.',
      },
      {
        question: '대기기간 7일은 무엇인가요?',
        answer:
          '<strong>수급 신청 후 7일은 실업급여 지급되지 않는 기간입니다.</strong>',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급요건', href: '/guide/unemployment/unemployment-eligibility-requirements' },
      { label: '자발적 이직 수급 예외', href: '/guide/unemployment/unemployment-voluntary-quit-exceptions' },
      { label: '이직확인서 정정', href: '/guide/unemployment/unemployment-departure-cert-correction' },
      { label: '고용보험 이의신청', href: '/guide/unemployment/unemployment-appeal-procedure' },
      { label: '실업급여 신청 순서', href: '/guide/unemployment/unemployment-application-steps' },
    ],
  },

  // ─── 4. retirement-db-investment-loss-responsibility-track ───
  {
    domain: 'retirement',
    slug: 'retirement-db-investment-loss-responsibility-track',
    keyword: 'DB형 퇴직연금 운용손실',
    questionKeyword: 'DB형 퇴직연금 운용손실로 받을 금액이 줄었어요. 회사가 보전해야 하는 거 아닌가요?',
    ctaKeyword: 'DB 운용손실 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'DB형 퇴직연금 운용손실 — 5단계 사용자 보전 의무 | 로앤가이드',
      description:
        'DB형 퇴직연금 운용손실로 수령액이 줄었다면 사용자 추가지급·차액 청구 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"15년 근속 후 퇴직하니 DB형 퇴직연금 적립금이 \'운용 손실로 80%만 남았다\'며 일부만 지급. 회사는 \'운용손실은 본인이 부담\'이라지만, DB형은 회사가 책임지는 거 아니었나요?" 근로자퇴직급여보장법은 DB형(확정급여형)에서 \'사용자가 약정된 퇴직급여 지급 책임\'을 부담한다고 정한 영역. 운용 결과와 무관히 \'평균임금 × 30일 × 근속연수\' 산정액을 보장하는 사례. DC형(확정기여형)은 근로자 운용책임. 대응 트랙은 ① DB·DC 구분 확인 ② 산정액 vs 적립금 비교 ③ 노동청 진정 ④ 민사 ⑤ 시효 3년 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. DB 운용손실 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 구분·계산·진정·민사·시효 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① DB vs DC 구분</strong> — 가입계약·약관 확인.</li>\n<li><strong>② DB 산정액</strong> — 평균임금 × 30일 × 근속.</li>\n<li><strong>③ 적립금 vs 산정액 차액</strong> — 사용자 추가지급 의무.</li>\n<li><strong>④ 노동청 진정 (시효 3년)</strong></li>\n<li><strong>⑤ 민사 소송</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: DB형은 \"적립금 부족하면 사용자가 보전\". 운용손실 = 회사 부담. DC형은 반대로 근로자 책임.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 검토·청구·진정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가입계약·산정자료 확보 (즉시)</strong></li>\n<li><strong>2단계 — 산정액·적립금 차액 계산 (1주)</strong></li>\n<li><strong>3단계 — 회사에 차액 청구 (서면)</strong></li>\n<li><strong>4단계 — 노동청 진정 (3년 시효)</strong></li>\n<li><strong>5단계 — 민사 소송</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">DB 운용손실 대응을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 가입·산정·운용 갈래입니다.</strong></p>\n<ul>\n<li><strong>퇴직연금 가입계약서·약관</strong></li>\n<li><strong>퇴직급여 산정명세서</strong></li>\n<li><strong>적립금 운용 보고서</strong></li>\n<li><strong>최근 3개월 평균임금 산정자료</strong></li>\n<li><strong>근속·재직증명서</strong></li>\n<li><strong>금융기관(운용관리기관) 자료</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>DB vs DC 오분류</strong> — 가입 시점 약관 재확인.</li>\n<li><strong>평균임금 산정</strong> — 직전 3개월 통상수당 포함.</li>\n<li><strong>중간정산 이력</strong> — 중간정산분 차감.</li>\n<li><strong>운용관리·자산관리 분리</strong> — 책임 주체 확인.</li>\n<li><strong>대지급금 가능 여부</strong> — 도산 시 국가 지원.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>금융감독원 1332</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — DB형 사용자 보전 의무',
        summary:
          '대법원 2023다300559 영역 등에서 법원은 확정급여형(DB) 퇴직연금에서 적립금 운용 결과가 약정된 퇴직급여에 미치지 못할 경우 사용자가 그 부족분을 보전할 책임이 있다고 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: 'DB형 운용손실은 회사 책임. 산정액 미만 지급 시 차액 청구 가능 영역.',
      },
    ],
    faq: [
      {
        question: 'DC형이면 운용손실 받을 수 없나요?',
        answer:
          '<strong>DC형은 원칙적 근로자 운용책임입니다.</strong> 다만 운용기관 부실관리 시 별도 책임 검토.',
      },
      {
        question: '회사가 폐업했어요',
        answer:
          '<strong>대지급금 신청 가능 영역입니다.</strong> 적립금 + 부족분 대지급.',
      },
      {
        question: '시효는 언제부터 진행되나요?',
        answer:
          '<strong>퇴직금 청구권 발생일부터 3년입니다.</strong>',
      },
      {
        question: '중간정산 받았는데 산정 어떻게 되나요?',
        answer:
          '<strong>중간정산 후 근속 기간만 산정 대상입니다.</strong>',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산 방법', href: '/guide/retirement/retirement-calculation-method' },
      { label: 'DB vs DC 차이', href: '/guide/retirement/retirement-db-vs-dc' },
      { label: '퇴직연금 가입 의무', href: '/guide/retirement/retirement-pension-mandatory' },
      { label: '간이대지급금', href: '/guide/wage/wage-substitute-payment-simple' },
      { label: '퇴직금 청구 시효', href: '/guide/retirement/retirement-statute-of-limitations' },
    ],
  },

  // ─── 5. retirement-self-employed-transition-payout-track ───
  {
    domain: 'retirement',
    slug: 'retirement-self-employed-transition-payout-track',
    keyword: '정규직 자영업 전환 퇴직금',
    questionKeyword: '회사 퇴사하고 자영업 시작하려는데 퇴직금 청구는 언제 어떻게 하나요?',
    ctaKeyword: '자영업 전환 퇴직금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '자영업 전환 퇴직금 청구 — 5단계 시기·세금·IRP | 로앤가이드',
      description:
        '정규직 퇴사 후 자영업으로 전환할 때 퇴직금 청구 시기·세금·IRP 5가지 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"7년 다닌 회사를 퇴사하고 카페 창업 준비 중. 퇴직금 5천만원 정도 예상되는데, 한 번에 받을지 IRP로 받을지 막막한 상황. 자영업으로 전환하면 세금이 어떻게 되는지도 모르겠어요." 퇴직금은 퇴직일로부터 14일 이내 지급이 원칙(근로자퇴직급여보장법 제9조). 일시금 수령 시 \'퇴직소득세\' 부과, IRP 계좌 이체 시 과세이연 영역. 자영업자(개인사업자)는 새로운 퇴직연금에 가입할 수 없으므로 IRP가 유일한 노후 대비 절세 수단. 대응 트랙은 ① 14일 내 지급 청구 ② 일시금 vs IRP 결정 ③ 퇴직소득세 검토 ④ IRP 활용 ⑤ 미지급 시 진정 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 자영업 전환 퇴직금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 지급기한·수령방식·세금·IRP·진정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 14일 내 지급</strong> — 퇴직급여법 제9조.</li>\n<li><strong>② 일시금 vs IRP</strong> — 세금·노후 대비 차이.</li>\n<li><strong>③ 퇴직소득세</strong> — 근속·금액별 차등.</li>\n<li><strong>④ IRP 과세이연</strong> — 55세 이후 인출 시 연금소득세.</li>\n<li><strong>⑤ 미지급 시 노동청 진정 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자영업 전환자는 IRP 이체가 세제 혜택. 일시금 받으면 즉시 퇴직소득세. 14일 지급 + 미지급 시 지연이자 20% 가산.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 청구·수령·진정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 퇴직금 산정·청구서 (퇴직일)</strong></li>\n<li><strong>2단계 — 수령방식 결정 (퇴직일 ±14일)</strong></li>\n<li><strong>3단계 — IRP 계좌 개설 (필요시)</strong></li>\n<li><strong>4단계 — 14일 내 지급 확인</strong></li>\n<li><strong>5단계 — 미지급 시 노동청 진정 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">자영업 전환 퇴직금 흐름을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 산정·수령·세금 갈래입니다.</strong></p>\n<ul>\n<li><strong>퇴직금 산정명세서</strong></li>\n<li><strong>최근 3개월 급여명세서·연차수당</strong></li>\n<li><strong>근속 증명서</strong></li>\n<li><strong>IRP 계좌 개설 자료 (선택)</strong></li>\n<li><strong>근로계약서·취업규칙</strong></li>\n<li><strong>퇴직소득원천징수영수증</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>14일 지급 위반</strong> — 형사처벌 + 지연이자 연 20%.</li>\n<li><strong>일시금 vs IRP</strong> — 자영업 전환자는 IRP 권장.</li>\n<li><strong>퇴직소득세 계산</strong> — 근속연수·환산 등 복잡.</li>\n<li><strong>중간정산 이력</strong> — 산정 기준 분리.</li>\n<li><strong>특별퇴직금·위로금</strong> — 근속 외 가산 항목 별도.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>국세청 126</strong></li>\n<li><strong>금융감독원 1332</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직금 지급 지연이자',
        summary:
          '대법원 2023나13849 영역 등에서 법원은 사용자가 퇴직일로부터 14일 이내에 퇴직금을 지급하지 않을 경우 그 다음 날부터 연 20% 지연이자가 발생한다고 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '14일 지급 + 위반 시 연 20% 지연이자. 자영업 전환자는 IRP로 받으면 세금 이연.',
      },
    ],
    faq: [
      {
        question: '자영업 전환해도 IRP 유지 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 개인 IRP 계좌는 직장 무관히 유지·운용.',
      },
      {
        question: '일시금 받으면 세금 얼마나 떼나요?',
        answer:
          '<strong>근속·금액별 차등 퇴직소득세 부과.</strong> 근속 길수록 유리.',
      },
      {
        question: '14일 미지급 시 지연이자 받을 수 있나요?',
        answer:
          '<strong>연 20% 지연이자 청구 가능 영역.</strong>',
      },
      {
        question: '연차수당도 퇴직금에 포함되나요?',
        answer:
          '<strong>평균임금 산정 시 직전 3개월 비례분 반영 영역입니다.</strong>',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 14일 지급', href: '/guide/retirement/retirement-14day-payment-rule' },
      { label: 'IRP 이체 절차', href: '/guide/retirement/retirement-irp-transfer-procedure' },
      { label: '퇴직소득세 계산', href: '/guide/retirement/retirement-income-tax-calculation' },
      { label: '퇴직금 청구 시효', href: '/guide/retirement/retirement-statute-of-limitations' },
      { label: '간이대지급금', href: '/guide/wage/wage-substitute-payment-simple' },
    ],
  },
];
