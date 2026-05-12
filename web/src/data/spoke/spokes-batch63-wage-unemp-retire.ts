import { SpokePage } from '../spoke-pages';

// batch63 wage·unemployment·retirement — 5개 (2026-05-13)
//
// 고유 존재 이유:
// wage 2:
// 1. 연차수당 미사용분 청구 — 회계연도제 vs 입사연도제 산정 다툼 트랙.
// 2. 출장수당 통상임금 포함 — 실비 정산 vs 정액 지급 구분 트랙.
// unemployment 1:
// 1. 통근 1.5시간 대중교통 자진퇴사 — 통근시간 + 환승 횟수 정당이직사유 트랙.
// retirement 2:
// 1. 교대근로 야간고정수당 평균임금 포함 — 시급제 vs 고정수당 구분 트랙.
// 2. 휴업·휴직기간 평균임금 산정 — 산입·제외 기간 다툼 트랙.

export const spokesBatch63WageUnempRetire: SpokePage[] = [
  // ─── 1. wage-annual-leave-unused-payout-claim-track ───
  {
    domain: 'wage',
    slug: 'wage-annual-leave-unused-payout-claim-track',
    keyword: '연차수당 미사용분 청구',
    questionKeyword: '연차 12일 안 썼는데 회사가 회계연도 기준이라며 적게 줘요. 입사일 기준으로 청구할 수 없나요?',
    ctaKeyword: '연차수당 미사용 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '연차수당 미사용분 청구 — 5단계 회계·입사연도 산정 | 로앤가이드',
      description:
        '연차 미사용분 수당 청구 시 회계연도 vs 입사연도 기준·시효 3년 5가지 판단 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"지난해 발생한 연차 15일 중 12일을 못 썼습니다. 퇴직하면서 미사용 수당을 청구했는데 회사는 \'회계연도 기준으로 정산했다\'며 일부만 지급. 입사일 기준이면 더 받을 수 있다는 동료 얘기에 막막한 상황입니다." 근기법 제60조는 \'입사일 기준\'으로 연차를 부여하는 것이 원칙. 다만 노사 합의·취업규칙으로 \'회계연도 기준\'(매년 1월 1일 일괄 부여)을 둘 수 있는 영역. 회계연도제는 사용자 편의 목적이지만, 퇴직 시 \'입사일 기준 산정과 비교해 부족하면 차액 보전\' 의무가 따라오는 사례 흐름. 대응 트랙은 ① 부여 방식 확인 ② 입사일 기준 재계산 ③ 차액 청구 ④ 노동청 진정 ⑤ 시효 3년 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 연차수당 미사용 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 부여방식·재계산·청구·진정·시효 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 부여 방식</strong> — 회계연도제 vs 입사연도제 (취업규칙·단협).</li>\n<li><strong>② 입사일 기준 재계산</strong> — 회계연도 산정과 비교.</li>\n<li><strong>③ 차액 청구</strong> — 부족분은 사용자가 보전.</li>\n<li><strong>④ 노동청 진정</strong> — 미지급 시.</li>\n<li><strong>⑤ 시효 3년</strong> — 미사용 수당 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회계연도제 채택 회사라도 퇴직 시 \"입사일 기준 산정이 더 많으면 차액 지급\" 의무. 시효 3년 안에 청구 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·계산·진정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 취업규칙·근로계약 확인 (즉시)</strong></li>\n<li><strong>2단계 — 입사일·회계연도 양쪽 재계산 (1주)</strong></li>\n<li><strong>3단계 — 회사에 차액 청구 (서면)</strong></li>\n<li><strong>4단계 — 노동청 진정 (3년 시효)</strong></li>\n<li><strong>5단계 — 민사 소송 (시효 3년)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">연차 미사용 수당 산정을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 부여·사용·산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>근로계약서·취업규칙 연차 조항</strong></li>\n<li><strong>입사일·퇴직일 확인 서류</strong></li>\n<li><strong>연차 사용 내역 (근태시스템)</strong></li>\n<li><strong>최근 3개월 급여명세서 (통상임금 산정)</strong></li>\n<li><strong>회사의 연차 정산서</strong></li>\n<li><strong>입사일 기준 재계산 자료</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>회계연도제 부족분</strong> — 퇴직 시 입사일 기준과 비교해 차액 지급.</li>\n<li><strong>1년 미만 근로자</strong> — 매월 개근 시 1일 가산(최대 11일).</li>\n<li><strong>연차 사용촉진제도</strong> — 사용자 서면 통보 누락 시 수당 의무 존속.</li>\n<li><strong>통상임금 산정</strong> — 최근 3개월 통상임금 기준.</li>\n<li><strong>시효 3년</strong> — 미사용 수당 청구권.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 회계연도 vs 입사일 기준 비교',
        summary:
          '대법원 2021다248299 영역 등에서 법원은 회계연도 기준으로 연차를 부여한 사업장이라도 퇴직 시점에서 근로자의 \'입사일 기준 산정액\'과 비교하여 부족분이 있으면 그 차액을 보전할 의무가 있다고 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '회계연도제 채택 회사도 퇴직 시 입사일 기준과 비교. 부족분은 차액 청구 가능 영역.',
      },
    ],
    faq: [
      {
        question: '1년 만근 못 했어도 연차수당 받을 수 있나요?',
        answer:
          '<strong>1년 미만 근무 중 매월 개근분(최대 11일)은 별도 발생합니다.</strong>',
      },
      {
        question: '연차 사용촉진 통보 받았는데 못 썼어요',
        answer:
          '<strong>사용자가 서면 절차를 정확히 거치지 못했으면 수당 지급 의무가 남는 영역입니다.</strong>',
      },
      {
        question: '회사가 임의로 \'연차 0일\'로 정산했어요',
        answer:
          '<strong>근태기록·취업규칙 확인 후 노동청 진정·민사 청구 가능 영역.</strong>',
      },
      {
        question: '퇴직 시점이 회계연도 중간이에요',
        answer:
          '<strong>입사일 기준 비례 산정 후 비교하는 것이 통상적입니다.</strong>',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '연차수당 계산', href: '/guide/wage/wage-annual-leave-pay-calculation' },
      { label: '미사용 연차수당 청구', href: '/guide/wage/wage-unused-annual-leave-claim' },
      { label: '연차 사용촉진제도', href: '/guide/wage/annual-leave-pay-unpaid-response' },
      { label: '통상임금 산정', href: '/guide/wage/wage-ordinary-wage-bonus-included' },
      { label: '노동청 진정', href: '/guide/wage/wage-complaint-full-procedure-timeline' },
    ],
  },

  // ─── 2. wage-business-trip-allowance-ordinary-wage-track ───
  {
    domain: 'wage',
    slug: 'wage-business-trip-allowance-ordinary-wage-track',
    keyword: '출장수당 통상임금 포함',
    questionKeyword: '매달 출장수당 15만원 정액으로 받아요. 가산수당 계산할 때 통상임금에 포함되는지 헷갈려요.',
    ctaKeyword: '출장수당 통상임금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '출장수당 통상임금 포함 — 5단계 실비 vs 정액 구분 | 로앤가이드',
      description:
        '출장수당이 통상임금에 포함되는지 실비 정산 vs 정액 지급 구분·차액 청구 5가지 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"영업직이라 매달 출장수당 15만원이 정액으로 들어옵니다. 영수증 없이 일률 지급. 그런데 연장·휴일 가산수당 계산할 때 회사는 \'출장수당은 통상임금 아니다\'라며 빼버려요. 가산수당이 매월 7~8만원 적게 들어오는 상황입니다." 통상임금 판단의 3요건은 ① 정기성 ② 일률성 ③ 고정성. 출장수당이 \'실제 출장 발생 시에만 지급\'되면 고정성 약화 → 통상임금 제외 여지. 반대로 \'전 영업직에 매월 정액 지급\'이면 통상임금 포함 가능성 높은 영역. 실비 정산형(영수증 첨부) vs 정액 지급형 구분이 핵심. 대응 트랙은 ① 지급 기준 확인 ② 3요건 검토 ③ 차액 계산 ④ 노동청 진정 ⑤ 시효 3년 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 출장수당 통상임금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 지급기준·3요건·계산·진정·시효 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 지급 기준</strong> — 실비 정산 vs 정액 지급.</li>\n<li><strong>② 정기성</strong> — 매월 일정 시점.</li>\n<li><strong>③ 일률성</strong> — 일정 조건 충족 모든 근로자 지급.</li>\n<li><strong>④ 고정성</strong> — 추가 조건 없이 사전 확정.</li>\n<li><strong>⑤ 시효 3년</strong> — 가산수당 차액 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \"매월 영업직 전원 15만원 정액\" 같으면 통상임금 포함 여지. \"영수증 첨부 실비 정산\"이면 제외 평가 가능성.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 검토·계산·진정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 출장수당 규정·기안문 확보 (즉시)</strong></li>\n<li><strong>2단계 — 3요건 검토·차액 계산 (1주)</strong></li>\n<li><strong>3단계 — 회사 시정 요구 (서면)</strong></li>\n<li><strong>4단계 — 노동청 진정 (시효 3년)</strong></li>\n<li><strong>5단계 — 민사 소송</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">출장수당 통상임금 포함 여부를 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 임금·규정·계산 갈래입니다.</strong></p>\n<ul>\n<li><strong>최근 3년치 급여명세서</strong></li>\n<li><strong>출장수당 지급 규정·기안문</strong></li>\n<li><strong>실제 출장 내역서 (있다면)</strong></li>\n<li><strong>영수증·정산서 (실비 성격 확인)</strong></li>\n<li><strong>연장·휴일근로 발생 기록</strong></li>\n<li><strong>가산수당 차액 계산서</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>정액 vs 실비 정산</strong> — 정액 = 통상임금 포함 여지.</li>\n<li><strong>출장 횟수 비례</strong> — 변동성 있으면 고정성 약화.</li>\n<li><strong>영업직 차량유지비</strong> — 동일 구조, 정액이면 포함 여지.</li>\n<li><strong>비과세 한도</strong> — 세무 비과세와 통상임금은 별개.</li>\n<li><strong>시효 3년</strong> — 차액 청구 가능 기간.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 출장수당 통상임금 평가',
        summary:
          '대법원 2022다255454 영역 등에서 법원은 출장수당이 정기적·일률적·고정적으로 모든 해당 근로자에게 지급되는 경우에는 통상임금에 해당한다고 평가될 여지가 있고, 실제 출장 발생 시에만 변동적으로 지급되는 경우에는 통상임금에서 제외될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '출장수당 정액·정기지급 = 통상임금 포함 여지. 가산수당 차액 청구 가능 영역.',
      },
    ],
    faq: [
      {
        question: '출장이 없는 달에도 받으면 무조건 통상임금인가요?',
        answer:
          '<strong>실제 출장 무관히 지급되면 통상임금 포함 가능성 높습니다.</strong>',
      },
      {
        question: '차량유지비도 같은 논리인가요?',
        answer:
          '<strong>정액·정기지급이면 동일하게 통상임금 포함 여지가 있습니다.</strong>',
      },
      {
        question: '회사가 \"실비 명목\"이라고 하면 끝인가요?',
        answer:
          '<strong>아닙니다.</strong> 실제 지급 형태로 판단. 영수증 없이 정액이면 통상임금 평가 여지.',
      },
      {
        question: '재직 중에도 청구 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 노동청 진정·민사 모두 재직 중 가능.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '식대 통상임금', href: '/guide/wage/wage-meal-allowance-ordinary-wage-track' },
      { label: '자차운전수당 통상임금', href: '/guide/wage/wage-self-driving-allowance-ordinary-wage' },
      { label: '출장비 갑자기 중단', href: '/guide/wage/wage-business-trip-perdiem-suddenly-stopped' },
      { label: '통상임금 산정', href: '/guide/wage/wage-ordinary-wage-bonus-included' },
      { label: '연장·휴일근로 가산', href: '/guide/wage/wage-holiday-overtime-allowance' },
    ],
  },

  // ─── 3. unemployment-commute-1-5hour-public-transit-quit-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-commute-1-5hour-public-transit-quit-track',
    keyword: '통근 1.5시간 대중교통 자진퇴사 실업급여',
    questionKeyword: '회사가 이전해서 편도 1.5시간 환승 3번 됐어요. 자진퇴사해도 실업급여 받을 수 있나요?',
    ctaKeyword: '통근시간 자진퇴사 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '통근 1.5시간 자진퇴사 실업급여 — 5단계 정당사유 점검 | 로앤가이드',
      description:
        '통근 1.5시간 대중교통 + 환승 다수로 자진퇴사 시 실업급여 정당이직사유 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"5년 다닌 회사가 지방으로 이전해 편도 1.5시간 + 환승 3회 + 막차 끊기는 상황. 가족 돌봄까지 겹쳐 자진퇴사를 결정했는데, \'자발적 이직은 실업급여 안 된다\'는 말에 막막한 상황입니다." 고용보험법 시행규칙 별표2는 \'사업장 이전·통근 곤란\'을 정당이직사유로 둔 영역. 통상 \'편도 1.5시간 이상\' 또는 \'환승 다수로 출퇴근 곤란\'이 인정 기준 흐름. 대중교통 노선·실제 소요시간을 객관 자료로 입증 가능. 대응 트랙은 ① 통근시간·환승 측정 ② 사업장 이전 시점 확인 ③ 이직확인서 코드 ④ 고용센터 신청 ⑤ 부적격 시 이의 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 통근 1.5시간 자진퇴사 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 통근측정·이전시점·코드·신청·이의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 편도 1.5시간 이상</strong> — 대중교통 기준 입증.</li>\n<li><strong>② 사업장 이전·근무지 변경</strong> — 본인 사유가 아닐 것.</li>\n<li><strong>③ 이직확인서 정당사유 코드</strong></li>\n<li><strong>④ 고용센터 신청 (1년 내)</strong></li>\n<li><strong>⑤ 부적격 시 이의 (3개월)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자발적 이직이라도 \"편도 1.5시간 이상 통근 곤란 + 본인 책임 아닌 사유\"면 수급 가능 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 수급 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정·신청·이의 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 통근시간·환승 자료 수집 (퇴사 전)</strong> — 지도앱 캡처.</li>\n<li><strong>2단계 — 회사 측 이직확인서 정당사유 입력 요청</strong></li>\n<li><strong>3단계 — 고용센터 수급 신청 (1년 내)</strong></li>\n<li><strong>4단계 — 부적격 시 이의신청 (3개월)</strong></li>\n<li><strong>5단계 — 재결·행정소송 (필요시)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">통근 1.5시간 정당사유 인정을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 통근·이전·신청 갈래입니다.</strong></p>\n<ul>\n<li><strong>지도앱 경로·소요시간 캡처 (대중교통)</strong></li>\n<li><strong>환승 횟수 노선도</strong></li>\n<li><strong>주민등록등본 (주거지 확인)</strong></li>\n<li><strong>사업장 이전 공지·근로계약</strong></li>\n<li><strong>이직확인서 (고용보험 토탈)</strong></li>\n<li><strong>본인 신분증·통장 사본</strong></li>\n<li><strong>구직활동 계획서</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편도 1.5시간 측정 기준</strong> — 대중교통 + 일반 출퇴근 시간대.</li>\n<li><strong>주거 이전 자발성</strong> — 회사가 아닌 본인이 이사한 경우 인정 어려움.</li>\n<li><strong>피보험단위기간 180일</strong> — 이직 전 18개월 중.</li>\n<li><strong>대기기간 7일</strong> — 신청 후 7일 무지급.</li>\n<li><strong>구직활동 4주 1회</strong></li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>고용보험심사위 044-202-7290</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 통근 곤란 정당이직사유',
        summary:
          '고용보험심사위원회 2023실보 영역 등에서 사업장 이전 또는 근로계약 변경으로 편도 통근시간이 1.5시간 이상으로 늘어난 경우, 그것이 근로자 본인의 자유로운 선택에 기인하지 않는다면 정당한 이직사유로 평가될 여지가 있다고 본 재결례 흐름이 있습니다.',
        takeaway: '편도 1.5시간 + 회사 사유면 자발적 이직도 수급 가능 영역. 지도앱 캡처가 핵심 입증.',
      },
    ],
    faq: [
      {
        question: '편도 1시간 20분이면 안 되나요?',
        answer:
          '<strong>1.5시간이 통상 기준이지만 환승 다수·막차 등 추가 사유면 인정 여지가 있습니다.</strong>',
      },
      {
        question: '자차 출퇴근도 가능한가요?',
        answer:
          '<strong>대중교통 기준이 원칙입니다.</strong> 자차로 1시간도 대중교통 1.5시간 이상이면 인정 여지.',
      },
      {
        question: '본인이 이사한 거면 안 되나요?',
        answer:
          '<strong>본인 사유 이사는 정당사유 인정이 어렵습니다.</strong> 다만 가족 돌봄·결혼 등 사회통념상 정당화되면 별개.',
      },
      {
        question: '회사가 정당사유 입력 거부하면?',
        answer:
          '<strong>고용센터 이의신청·근로감독관 진정으로 정정 가능 영역입니다.</strong>',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '통근 2시간 사업장 이전', href: '/guide/unemployment/unemployment-commute-2hour-relocation-quit' },
      { label: '통근 곤란 일반', href: '/guide/unemployment/unemployment-commute-hardship-quit' },
      { label: '사업장 이전 강제 자진퇴사', href: '/guide/unemployment/unemployment-workplace-relocation-forced-quit' },
      { label: '실업급여 수급요건', href: '/guide/unemployment/unemployment-eligibility-requirements' },
      { label: '이직확인서 정정', href: '/guide/unemployment/unemployment-departure-cert-correction' },
    ],
  },

  // ─── 4. retirement-rotation-shift-allowance-included-track ───
  {
    domain: 'retirement',
    slug: 'retirement-rotation-shift-allowance-included-track',
    keyword: '교대근로 야간고정수당 평균임금 포함',
    questionKeyword: '3조 2교대인데 야간고정수당 매달 30만원 받아요. 퇴직금 계산할 때 빠진 것 같아요.',
    ctaKeyword: '교대근로 퇴직금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '교대근로 야간고정수당 — 5단계 평균임금 산입 점검 | 로앤가이드',
      description:
        '교대근로 야간고정수당이 평균임금에 포함되는지·퇴직금 재계산 5가지 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"제조업 3조 2교대 근무 8년차. 매달 야간고정수당 30만원 + 교대수당 15만원을 정액으로 받아왔어요. 퇴직금 정산서를 받아보니 평균임금에 야간고정수당이 빠진 듯한 금액. 회사는 \'야간수당은 변동성 있어 평균임금 산입 안 한다\'는데 막막한 상황입니다." 평균임금은 \'산정사유 발생일 이전 3개월간 지급된 임금 총액 ÷ 일수\'(근기법 제2조). 정기·일률·고정적으로 지급되는 야간고정수당·교대수당은 평균임금 산입 대상인 영역. 다만 실제 야간근로 시에만 변동 지급되는 가산수당은 산입 여부가 다툼 흐름. 대응 트랙은 ① 수당 지급 방식 확인 ② 평균임금 재계산 ③ 차액 청구 ④ 노동청 진정 ⑤ 시효 3년 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 야간고정수당 평균임금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 지급방식·재계산·청구·진정·시효 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 정액 vs 변동</strong> — 정액 야간고정수당 = 평균임금 산입 여지.</li>\n<li><strong>② 3개월 임금 총액 ÷ 일수</strong> — 평균임금 산정 공식.</li>\n<li><strong>③ 산정 누락분 차액 계산</strong></li>\n<li><strong>④ 노동청 진정 (시효 3년)</strong></li>\n<li><strong>⑤ 민사 소송</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \"매월 정액 야간고정수당\"이면 평균임금 포함 가능성 높음. \"실제 야간 근무 시에만 가산\"이면 변동성 다툼.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·계산·진정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 최근 3개월 급여명세서·교대표 확보 (즉시)</strong></li>\n<li><strong>2단계 — 평균임금 재계산 (1주)</strong></li>\n<li><strong>3단계 — 회사 차액 청구 (서면)</strong></li>\n<li><strong>4단계 — 노동청 진정 (시효 3년)</strong></li>\n<li><strong>5단계 — 민사 소송</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">교대근로 평균임금 산입 여부를 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 임금·교대·계산 갈래입니다.</strong></p>\n<ul>\n<li><strong>최근 3개월 급여명세서</strong></li>\n<li><strong>야간고정수당 지급 규정·기안문</strong></li>\n<li><strong>교대근무표·근태기록</strong></li>\n<li><strong>회사 측 퇴직금 산정서</strong></li>\n<li><strong>본인 평균임금 재계산서</strong></li>\n<li><strong>근로계약서·취업규칙</strong></li>\n<li><strong>3년치 급여명세서 (참고)</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>야간고정수당</strong> — 매월 정액이면 평균임금 산입 여지.</li>\n<li><strong>야간가산수당</strong> — 실근무 시간 비례 지급이면 변동성 다툼.</li>\n<li><strong>교대수당</strong> — 정액 지급이면 평균임금 포함 여지.</li>\n<li><strong>상여금·연차수당 비율</strong> — 1년치 1/4 가산.</li>\n<li><strong>시효 3년</strong> — 평균임금 산정 누락 차액 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 야간고정수당 평균임금 산입',
        summary:
          '대법원 2018다224408 영역 등에서 법원은 야간근로가 일률적·정기적으로 발생하여 정액 형태로 지급되는 야간고정수당은 평균임금 산정 시 임금 총액에 포함된다고 평가될 여지가 있다고 본 사례 흐름이 있습니다. 실제 야간근로 시간에 비례해 변동 지급되는 가산수당은 별개 다툼 영역.',
        takeaway: '정액 야간고정수당은 평균임금 산입 여지. 퇴직금 차액 청구 가능 영역.',
      },
    ],
    faq: [
      {
        question: '연차수당도 평균임금에 들어가나요?',
        answer:
          '<strong>퇴직 전 1년치 연차수당의 1/4이 평균임금 산정 시 가산됩니다.</strong>',
      },
      {
        question: '상여금은 어떻게 산입되나요?',
        answer:
          '<strong>퇴직 전 1년치 상여금의 1/4이 3개월 평균임금에 가산됩니다.</strong>',
      },
      {
        question: '교대수당이 들쭉날쭉이에요',
        answer:
          '<strong>변동 폭이 크면 산입 다툼이 발생합니다.</strong> 매월 정액이면 산입 여지 높음.',
      },
      {
        question: '5인 미만이라도 청구 가능한가요?',
        answer:
          '<strong>퇴직급여법은 1인 이상 모든 사업장 적용입니다.</strong>',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '야간근로 평균임금', href: '/guide/retirement/retirement-night-shift-average-wage' },
      { label: '야간·연장근로 산입', href: '/guide/retirement/retirement-night-overtime-included-calculation' },
      { label: '교대제 퇴직금', href: '/guide/retirement/retirement-alternate-day-shift-calculation' },
      { label: '평균임금 분쟁', href: '/guide/retirement/retirement-average-wage-dispute' },
      { label: '퇴직금 재계산', href: '/guide/retirement/retirement-recalculation-wrong-amount' },
    ],
  },

  // ─── 5. retirement-business-suspension-period-average-wage-track ───
  {
    domain: 'retirement',
    slug: 'retirement-business-suspension-period-average-wage-track',
    keyword: '휴업 휴직기간 평균임금 산정',
    questionKeyword: '코로나 휴업 2개월 + 무급휴직 1개월 있었어요. 퇴직금 평균임금에 이 기간이 들어가나요?',
    ctaKeyword: '휴업 휴직 퇴직금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '휴업·휴직 평균임금 산정 — 5단계 산입·제외 기간 | 로앤가이드',
      description:
        '휴업·무급휴직 기간이 평균임금 산정에 산입되는지·제외되는지 5가지 판단 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"5년 근속 후 퇴직. 마지막 3개월 사이에 회사 사정으로 휴업 2개월(휴업수당 70%) + 본인 사유 무급휴직 1개월이 끼어 있어요. 퇴직금 산정서를 받아보니 평균임금이 이상하게 낮아진 듯한데, 휴업·휴직 기간이 들어간 건지 빠진 건지 막막한 상황입니다." 근기법 시행령 제2조는 평균임금 산정에서 \'특정 기간\'을 산입 일수에서 제외하도록 정한 영역. ① 사용자 귀책 휴업 ② 출산휴가·육아휴직 ③ 업무상 부상·질병 ④ 본인 무급휴직 동의 등 7가지 사유는 산정기간·임금에서 모두 제외 흐름. 대응 트랙은 ① 휴업·휴직 사유 분류 ② 3개월 산정기간 재구성 ③ 평균임금 재계산 ④ 노동청 진정 ⑤ 시효 3년 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 휴업·휴직 평균임금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 분류·재구성·재계산·진정·시효 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 휴업·휴직 사유 분류</strong> — 제외 7가지 사유 해당 여부.</li>\n<li><strong>② 3개월 산정기간 재구성</strong> — 제외 시 이전 기간으로 보충.</li>\n<li><strong>③ 평균임금 재계산</strong></li>\n<li><strong>④ 노동청 진정 (시효 3년)</strong></li>\n<li><strong>⑤ 민사 소송</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사용자 귀책 휴업·산재·출산휴가·합의 무급휴직은 평균임금 산정에서 \"기간·임금 모두 제외\". 정상 기간으로 보충 산정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 분류·재계산·진정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 휴업·휴직 기록 정리 (즉시)</strong></li>\n<li><strong>2단계 — 제외 사유 분류·재구성 (1주)</strong></li>\n<li><strong>3단계 — 평균임금·퇴직금 재계산</strong></li>\n<li><strong>4단계 — 노동청 진정 (시효 3년)</strong></li>\n<li><strong>5단계 — 민사 소송</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">휴업·휴직 산입 여부를 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 휴업·임금·산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>휴업·휴직 공문·신청서</strong></li>\n<li><strong>휴업수당 지급 내역</strong></li>\n<li><strong>최근 6개월 급여명세서</strong></li>\n<li><strong>근태·출근 기록</strong></li>\n<li><strong>회사 측 퇴직금 산정서</strong></li>\n<li><strong>본인 평균임금 재계산서</strong></li>\n<li><strong>근로계약서·취업규칙</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사용자 귀책 휴업</strong> — 70% 휴업수당 지급, 평균임금 산정 제외.</li>\n<li><strong>본인 사유 무급휴직</strong> — 사업주 동의 휴직은 산정 제외.</li>\n<li><strong>업무상 부상·질병</strong> — 요양기간 산정 제외.</li>\n<li><strong>출산휴가·육아휴직</strong> — 시행령상 명시 제외.</li>\n<li><strong>제외 기간 보충</strong> — 직전 정상 기간으로 산정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 휴업·휴직 평균임금 산정 제외',
        summary:
          '대법원 2022다255454 영역 등에서 법원은 사용자 귀책 휴업·업무상 재해 요양·합의 무급휴직 등 시행령에서 정한 사유에 해당하는 기간은 평균임금 산정에서 기간과 임금 모두 제외하고, 그 이전의 정상 근로 기간을 기준으로 산정해야 한다고 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '제외 7가지 사유 적용 시 직전 정상 기간 보충. 퇴직금 재계산·차액 청구 가능 영역.',
      },
    ],
    faq: [
      {
        question: '코로나 휴업도 사용자 귀책인가요?',
        answer:
          '<strong>휴업수당 지급 여부·휴업 사유에 따라 평가됩니다.</strong> 일반적으로 70% 휴업수당 지급되면 사용자 귀책 영역.',
      },
      {
        question: '본인 사유 무급휴직도 제외되나요?',
        answer:
          '<strong>사업주가 동의한 합의 휴직이면 시행령상 제외 사유에 해당 영역입니다.</strong>',
      },
      {
        question: '제외 후 보충 기간은 어떻게 정해지나요?',
        answer:
          '<strong>직전 정상 근로 기간이 보충 산정 기간이 됩니다.</strong>',
      },
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>퇴직금 청구권 발생일(퇴직일)부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '평균임금 분쟁', href: '/guide/retirement/retirement-average-wage-dispute' },
      { label: '대기발령·휴업 영향', href: '/guide/retirement/retirement-pre-retirement-standby-period-impact' },
      { label: '육아휴직 산입', href: '/guide/retirement/retirement-parental-leave-service-inclusion' },
      { label: '평균임금 상여 분쟁', href: '/guide/retirement/retirement-average-wage-bonus-dispute' },
      { label: '퇴직금 재계산', href: '/guide/retirement/retirement-recalculation-wrong-amount' },
    ],
  },
];
