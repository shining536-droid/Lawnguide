import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 1. 이 페이지는 [야근수당을 못 받은 근로자]의 [신고 전 증거 준비 단계]에서 [5가지 핵심 증거 확보 방법]을 돕는 페이지다.
// 2. 이 페이지는 [포괄임금제 적용 근로자]의 [실제 근로시간이 초과된 상황]에서 [포괄임금제 무효 주장 절차]를 돕는 페이지다.
// 3. 이 페이지는 [이미 퇴사한 근로자]의 [재직 중 미지급된 연장근로수당이 있는 상황]에서 [퇴사 후 청구 절차와 시효]를 돕는 페이지다.
// 4. 이 페이지는 [출퇴근 기록이 없는 근로자]의 [야근수당 청구가 어려운 상황]에서 [대체 증거로 입증하는 방법]을 돕는 페이지다.
// 5. 이 페이지는 [스토킹으로 신고된 사람]의 [정상적 연락이었음을 주장하는 상황]에서 [정상 연락 입증 자료 준비]를 돕는 페이지다.
// 6. 이 페이지는 [헤어진 후 상대에게 연락한 사람]의 [스토킹 고소 가능성이 우려되는 상황]에서 [법적 기준과 위험 판단]을 돕는 페이지다.
// 7. 이 페이지는 [스토킹 혐의로 처음 조사받는 초범]의 [경찰 조사 전 단계]에서 [준비해야 할 자료와 진술 전략]을 돕는 페이지다.
// 8. 이 페이지는 [상대방에게 차단당한 후 다른 경로로 연락한 사람]의 [스토킹 인정 가능성이 우려되는 상황]에서 [법적 판단 기준 확인]을 돕는 페이지다.

export const spokesBatch17GscWageStalking: SpokePage[] = [
  // ── 1. 야근수당 증거 5가지 ──
  {
    domain: 'wage',
    slug: 'overtime-no-pay-evidence-5-types',
    keyword: '야근수당 안 주는 회사 증거 5가지',
    questionKeyword: '야근수당 안 주는 회사에 신고하려면 어떤 증거가 필요한가요?',
    ctaKeyword: '야근수당 증거 준비',
    type: '준비서류형',
    meta: {
      title: '야근수당 미지급 신고 전 증거 5가지 체크리스트 | 로앤가이드',
      description:
        '매달 야근하는데 수당이 한 푼도 안 나오시나요? 노동청 신고 전 가능한 한 확보해야 할 5가지 핵심 증거와 수집 요령을 정리했습니다. 지금 확인하세요.',
    },
    intro:
      '퇴근 시간이 지나도 사무실 불이 꺼지지 않습니다. 야근은 일상인데 급여명세서에는 연장근로수당 항목이 늘 0원입니다. 노동청에 신고하려 해도 증거가 부족하면 받아들여지지 않을까 걱정됩니다. 신고 전에 가능한 한 확보해야 할 5가지 증거를 확인해보세요.',
    sections: [
      {
        title: '첫째, 근로계약서와 취업규칙에서 소정근로시간을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제17조에 따라 사용자는 근로계약 체결 시 소정근로시간을 서면으로 명시해야 합니다</strong></p>\n<p>야근수당 청구의 출발점은 <strong>본인의 소정근로시간이 몇 시간인지 확인</strong>하는 것입니다. 근로계약서에 "09시~18시, 주 40시간"으로 되어 있다면, 18시 이후 근무는 모두 연장근로에 해당할 소지가 있습니다.</p>\n<p>취업규칙이나 단체협약에 다른 규정이 있는지도 함께 확인하세요. 계약서를 받지 못했다면 <strong>회사에 서면 교부를 요청하고, 요청 내역을 캡처</strong>해두는 것이 첫 번째 증거입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거 ①: 근로계약서 + 취업규칙 → 소정근로시간 확인이 연장근로 판단의 기준</blockquote>',
      },
      {
        title: '둘째, 출퇴근 기록과 PC 사용 로그를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">전자출입카드, 지문인식기, PC 로그인·로그오프 기록은 실근로시간을 증명하는 핵심 자료입니다</strong></p>\n<p><strong>출입카드 태그 기록</strong>을 인사팀에 요청하거나, 개인 스마트폰으로 매일 출퇴근 시각을 기록해두세요. 회사가 출입 기록 제공을 거부하면, 노동청 진정 시 사업주에게 자료 제출 명령이 내려집니다.</p>\n<p>PC 로그인·로그오프 시간, 사내 메신저 마지막 접속 시간도 유력한 보조 증거가 됩니다. <strong>매일 퇴근 전 화면 캡처</strong>를 습관화하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거 ②: 출입카드 기록 + PC 로그 → 실제 근무 종료 시각 입증</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/wage" style="color:#1565c0;font-weight:600">내 야근수당 청구 가능 여부 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 업무 지시 내역과 메신저 대화를 저장하세요',
        content:
          '<p><strong style="color:#1e3a5f">상사의 야근 지시가 담긴 카카오톡, 이메일, 사내 메신저 기록은 사용자 지시에 의한 연장근로를 증명합니다</strong></p>\n<p>"오늘 이거 끝내고 퇴근해" 같은 <strong>업무 지시 메시지</strong>를 날짜·시간과 함께 캡처하세요. 구두 지시만 있었다면, 지시받은 직후 본인에게 이메일로 "지금 부장님 지시로 야근 시작합니다" 같은 기록을 남기는 방법도 있습니다.</p>\n<p>회사가 "자발적 잔업"이라고 주장하는 경우가 많으므로, <strong>사용자 지시 또는 묵시적 승인</strong>을 보여주는 기록이 매우 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거 ③: 야근 지시 메시지·이메일 → 사용자 지시에 의한 연장근로 입증</blockquote>',
      },
      {
        title: '넷째, 급여명세서와 통장 입금내역을 대조하세요',
        content:
          '<p><strong style="color:#1e3a5f">급여명세서의 연장근로수당 항목이 0원이거나 실제 야근 시간에 비해 현저히 적으면 미지급의 직접 증거가 됩니다</strong></p>\n<p>매월 급여명세서를 저장하고, <strong>통장 입금액과 대조</strong>하세요. 회사가 급여명세서를 주지 않는 것 자체가 근로기준법 제48조 위반입니다.</p>\n<p>급여명세서에 "포괄산정" 또는 "고정 OT 수당"으로 표기되어 있더라도, 실제 연장근로시간에 비해 부족하면 차액을 청구할 수 있습니다. 최근 3년치를 확보하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거 ④: 급여명세서 + 통장내역 → 미지급 금액 산정 근거</blockquote>',
      },
      {
        title: '다섯째, 동료 근로자의 진술이나 CCTV 확인을 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">함께 야근한 동료의 진술서나 사무실 CCTV 영상은 보조 증거로서 큰 힘을 발휘합니다</strong></p>\n<p>같은 부서에서 함께 야근한 동료가 있다면, <strong>근무 사실 확인 진술서</strong>를 미리 받아두세요. 진술서에는 날짜, 시간, 업무 내용, 진술자 서명이 포함되어야 합니다.</p>\n<p>건물 CCTV에 늦은 시간 출입하는 모습이 녹화되어 있을 수 있습니다. 건물 관리사무소에 <strong>CCTV 보존 요청</strong>을 하되, 보통 30일이면 삭제되므로 빨리 움직이세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거 ⑤: 동료 진술서 + CCTV → 야근 사실 객관적 뒷받침</blockquote>',
      },
    ],
    cases: [
      {
        title: '인센티브의 임금성과 평균임금 산정 기준을 판시한 사례',
        summary:
          '대법원 2021다248299 사건(2026.01.29 선고)에서 법원은 계속적·정기적으로 지급되고 사용자에게 지급의무가 있으며 근로제공과 직접 관련된 금품은 근로의 대가인 임금에 해당한다고 판시했습니다.',
        takeaway:
          '야근수당 청구 시 기본급 외에 정기적으로 받는 수당도 통상임금에 포함될 수 있습니다. 급여명세서의 모든 항목을 빠짐없이 확보하세요.',
      },
    ],
    faq: [
      {
        question: '야근 지시가 구두로만 있었는데 증거가 될 수 있나요?',
        answer:
          '구두 지시만으로는 입증이 어렵습니다. 지시를 받은 직후 <strong>본인 이메일로 내용을 정리해서 보내거나</strong>, 카카오톡으로 "지금 야근 시작합니다"라고 기록을 남기세요. 이 자체가 유력한 증거가 됩니다.',
      },
      {
        question: '회사가 출입카드 기록을 안 줄 때는 어떻게 하나요?',
        answer:
          '노동청에 진정을 제기하면 <strong>사업주에게 출퇴근 기록 제출 명령</strong>이 내려집니다. 회사가 거부하면 과태료가 부과될 수 있으므로, 일단 서면으로 요청한 뒤 거부 사실도 기록해두세요.',
      },
      {
        question: '포괄임금제라서 야근수당이 이미 포함되어 있다고 하는데 맞나요?',
        answer:
          '포괄임금제라도 <strong>실제 연장근로시간에 비해 지급액이 부족하면 차액을 청구</strong>할 수 있습니다. 또한 포괄임금 약정이 최저임금에 미달하면 해당 약정 자체가 무효입니다.',
      },
      {
        question: '증거를 모으기 전에 회사에 먼저 말해야 하나요?',
        answer:
          '증거를 먼저 확보한 뒤 청구하는 것이 유리합니다. 미리 알리면 <strong>회사가 출입 기록을 삭제하거나 근무 기록을 변경</strong>할 수 있기 때문입니다. 조용히 증거를 수집한 후 진행하세요.',
      },
      {
        question: '야근수당을 못 받은 지 3년이 넘었으면 청구가 안 되나요?',
        answer:
          '임금채권의 소멸시효는 <strong>3년</strong>입니다. 3년이 지난 부분은 원칙적으로 청구가 어렵지만, 사용자가 시효 주장을 하기 어려운 특별한 사정이 있으면 예외가 인정될 수 있습니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/wage',
    },
    internalLinks: [
      { label: '체불임금 신고 절차 타임라인', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '미지급 임금 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '야근수당 미지급 청구 방법', href: '/guide/wage/wage-overtime-unpaid-claim' },
      { label: '체불임금 진정서 작성 요령', href: '/guide/wage/unpaid-wage-petition-writing' },
      { label: '체불임금 소멸시효 확인', href: '/guide/wage/unpaid-wage-statute-of-limitations' },
    ],
  },

  // ── 2. 포괄임금제 야근수당 대응 ──
  {
    domain: 'wage',
    slug: 'comprehensive-wage-overtime-response',
    keyword: '포괄임금제 야근수당 청구',
    questionKeyword: '포괄임금제인데 야근수당을 추가로 받을 수 있나요?',
    ctaKeyword: '포괄임금제 야근수당 대응',
    type: '절차타임라인형',
    meta: {
      title: '포괄임금제 야근수당 청구 4단계 절차 | 로앤가이드',
      description:
        '포괄임금제라서 야근수당이 없다는 회사 말, 정말 맞을까요? 포괄임금제 무효 주장부터 차액 청구까지 4단계 대응법을 정리했습니다. 지금 확인하세요.',
    },
    intro:
      '매달 야근이 40시간이 넘는데 급여명세서에는 "포괄임금"이라는 한 줄만 적혀 있습니다. 회사는 "이미 다 포함된 금액"이라고 하지만, 실제 초과근로시간을 계산해보면 턱없이 부족합니다. 포괄임금제가 무효가 되는 경우와 차액을 청구하는 절차를 확인해보세요.',
    timelineSteps: [
      '실제 근로시간 기록 (매일)',
      '포괄임금 약정 내용 확인',
      '최저임금·실근로 비교 산정',
      '차액 청구 또는 노동청 진정',
    ],
    sections: [
      {
        title: '첫째, 매일 실제 근로시간을 빠짐없이 기록하세요',
        content:
          '<p><strong style="color:#1e3a5f">포괄임금제 분쟁에서 가장 중요한 것은 "실제로 몇 시간 일했는지" 입증하는 것입니다</strong></p>\n<p>포괄임금제 하에서는 회사가 별도로 근로시간을 관리하지 않는 경우가 많습니다. 그래서 <strong>근로자 본인이 매일 출근·퇴근·휴게 시간을 기록</strong>해야 합니다. 스마트폰 메모 앱에 날짜와 시각을 적는 것만으로도 유효합니다.</p>\n<p>이 기록이 최소 3개월 이상 쌓이면, 월평균 연장근로시간을 산출할 수 있어 청구의 기초가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 본인 기록이 유일한 무기 → 매일 출퇴근 시각 + 휴게시간 메모</blockquote>',
      },
      {
        title: '둘째, 근로계약서의 포괄임금 약정 내용을 분석하세요',
        content:
          '<p><strong style="color:#1e3a5f">포괄임금 약정이 "기본급 + 고정 OT 몇 시간분"인지, "총액만 적혀 있는지"에 따라 대응이 달라집니다</strong></p>\n<p><strong>정액수당형</strong>(기본급 250만원 + 고정연장 20시간분 40만원)이면 20시간 초과분의 차액만 청구합니다. <strong>정액급형</strong>(월 총 300만원, 연장근로 포함)이면 역산 방식으로 기본급을 산출해야 합니다.</p>\n<p>약정서에 "소정근로시간"과 "포괄 산입 연장근로시간"이 명시되어 있지 않으면, 약정 자체의 유효성을 다툴 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 정액수당형 vs 정액급형 → 기본급 역산 → 실제 초과시간과 비교</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/wage" style="color:#1565c0;font-weight:600">내 포괄임금제 약정, 유효한지 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 최저임금 미달 여부를 계산해서 약정 무효를 주장하세요',
        content:
          '<p><strong style="color:#1e3a5f">포괄임금 약정이더라도 최저임금에 미달하면 그 약정은 무효입니다</strong></p>\n<p>계산 방법은 이렇습니다. 월 총액에서 연장·야간·휴일근로 가산분을 제외한 <strong>비교대상 임금</strong>을 구한 뒤, 월 소정근로시간(보통 209시간)으로 나눕니다. 이 시급이 해당 연도 최저임금보다 낮으면 약정은 무효입니다.</p>\n<p>약정이 무효가 되면 회사는 <strong>법정 기준에 따른 연장근로수당 전액</strong>을 지급해야 합니다. 2026년 최저임금은 시간당 10,330원입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">공식: (월 총액 - 가산분) ÷ 월 소정근로시간 → 최저임금과 비교</blockquote>',
      },
      {
        title: '넷째, 차액을 산정하고 회사에 서면으로 청구하세요',
        content:
          '<p><strong style="color:#1e3a5f">미지급 차액이 확인되면 내용증명으로 정확한 금액과 산출 근거를 보내세요</strong></p>\n<p>실근로시간 기록을 바탕으로 <strong>월별 연장근로시간 × 통상시급 × 1.5배</strong>를 계산합니다. 이미 지급된 포괄 OT 수당이 있으면 차감한 금액이 청구액입니다.</p>\n<p>회사가 14일 이내에 응하지 않으면 <strong>관할 노동청에 체불임금 진정</strong>을 제기하세요. 진정서에 산출 내역표를 첨부하면 처리가 빨라집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 차액 산정 → 내용증명 → 14일 대기 → 노동청 진정</blockquote>',
      },
      {
        title: '다섯째, 노동청 진정 후 조사 과정에서 주의할 점을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">노동청 조사에서 사업주가 "근로자가 자발적으로 동의했다"고 주장하는 경우가 많습니다</strong></p>\n<p>포괄임금 약정에 서명했더라도 <strong>근로기준법 위반 약정은 무효</strong>입니다. "동의했으니 청구할 수 없다"는 주장은 법적으로 받아들여지지 않습니다.</p>\n<p>조사 과정에서 근로감독관이 사업주에게 <strong>출퇴근 기록, 급여대장, 취업규칙</strong> 제출을 요구합니다. 사업주가 자료를 제출하지 않으면 근로자의 주장이 더 유리하게 작용합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 동의 서명 ≠ 청구 포기 → 강행규정 위반 약정은 무효</blockquote>',
      },
    ],
    cases: [
      {
        title: '포괄임금계약의 최저임금 미달 시 무효를 판시한 사례',
        summary:
          '대법원 2020다300299 사건(2024.12.26 선고)에서 법원은 포괄임금계약에 따라 지급된 임금이 최저임금에 미달하면 포괄임금계약이 유효하다고 볼 수 없으며, 사용자는 그 미달액을 지급해야 한다고 판시했습니다.',
        takeaway:
          '포괄임금제라 해도 최저임금보다 낮으면 약정은 무효입니다. 비교대상 시급을 정확히 산정한 후 차액을 청구하세요.',
      },
    ],
    faq: [
      {
        question: '포괄임금제는 어떤 업종에서만 허용되나요?',
        answer:
          '법적으로 업종 제한은 없지만, 판례상 <strong>근로시간 산정이 어려운 감시·단속적 근로</strong>에 한해 유효성이 인정될 수 있습니다. 일반 사무직에 적용된 포괄임금제는 무효로 판단될 가능성이 높습니다.',
      },
      {
        question: '월급에 "고정 OT 20시간 포함"이라고 적혀 있는데 20시간을 넘기면 어떻게 되나요?',
        answer:
          '20시간 초과분에 대해 <strong>통상시급의 1.5배를 추가 지급</strong>받을 수 있습니다. 고정 OT는 상한선이 아니라 최소 보장 시간일 뿐입니다.',
      },
      {
        question: '사용자가 포괄임금 동의서에 서명받았는데 무효가 될 수 있나요?',
        answer:
          '네. 근로기준법은 <strong>강행규정</strong>이므로, 근로자가 동의했더라도 법정 기준에 미달하는 약정은 무효입니다. 서명 여부와 관계없이 차액을 청구할 수 있습니다.',
      },
      {
        question: '포괄임금제 무효 주장 시 퇴직금도 재계산되나요?',
        answer:
          '포괄임금 약정이 무효가 되어 통상임금이 재산정되면, <strong>퇴직금도 함께 재계산</strong>됩니다. 미지급 연장근로수당과 퇴직금 차액을 동시에 청구하는 것이 효율적입니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/wage',
    },
    internalLinks: [
      { label: '야근수당 미지급 신고 전 증거 5가지', href: '/guide/wage/overtime-no-pay-evidence-5-types' },
      { label: '체불임금 사업주 대응 전략', href: '/guide/wage/unpaid-wage-employer-response' },
      { label: '체불임금 소멸시효 확인', href: '/guide/wage/unpaid-wage-statute-of-limitations' },
      { label: '미지급 임금 어디서부터 시작하나', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '연차수당 계산 방법', href: '/guide/wage/wage-annual-leave-pay-calculation' },
    ],
  },

  // ── 3. 퇴사 후 연장근로수당 청구 ──
  {
    domain: 'wage',
    slug: 'post-resignation-overtime-claim',
    keyword: '퇴사 후 야근수당 청구',
    questionKeyword: '퇴사하고 나서도 야근수당을 받을 수 있나요?',
    ctaKeyword: '퇴사 후 미지급 야근수당',
    type: '절차타임라인형',
    meta: {
      title: '퇴사 후 미지급 연장근로수당 청구 3단계 절차 | 로앤가이드',
      description:
        '퇴사했지만 재직 중 야근수당을 한 번도 못 받으셨나요? 퇴사 후 청구 기한과 3단계 절차를 알기 쉽게 정리했습니다. 지금 확인하세요.',
    },
    intro:
      '퇴사한 지 6개월이 지났습니다. 재직할 때는 매달 30시간씩 야근했지만, 연장근로수당은 한 번도 받지 못했습니다. 이미 퇴사한 뒤라 포기해야 할까요? 퇴사 후에도 미지급 야근수당을 청구할 수 있는 방법을 확인해보세요.',
    timelineSteps: [
      '소멸시효 잔여 기간 확인',
      '재직 중 근로 기록·급여 자료 수집',
      '내용증명 발송 또는 노동청 진정',
    ],
    sections: [
      {
        title: '첫째, 소멸시효 3년이 남아 있는지 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">임금채권의 소멸시효는 3년이며, 각 임금의 정기 지급일 다음 날부터 기산됩니다</strong></p>\n<p>2023년 3월분 야근수당의 지급일이 2023년 4월 10일이었다면, 소멸시효는 <strong>2026년 4월 10일</strong>에 만료됩니다. 퇴사일이 아니라 <strong>각 월급 지급일 기준</strong>으로 계산하는 것이 핵심입니다.</p>\n<p>시효가 임박했다면 <strong>내용증명 발송이나 노동청 진정으로 시효를 중단</strong>시킬 수 있습니다. 하루라도 빨리 행동하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 소멸시효 기산점 = 각 월 임금 정기 지급일 다음 날</blockquote>',
      },
      {
        title: '둘째, 재직 중 근로 기록과 급여 자료를 수집하세요',
        content:
          '<p><strong style="color:#1e3a5f">퇴사 후에도 근로기준법 제39조에 따라 회사에 근로자 명부·임금대장 열람을 요구할 수 있습니다</strong></p>\n<p>회사에 <strong>서면(이메일 또는 내용증명)으로 출퇴근 기록, 급여대장, 근로계약서 사본</strong>의 제공을 요청하세요. 회사가 거부하면 노동청 진정 시 근로감독관이 직접 자료를 확보합니다.</p>\n<p>재직 중 저장해둔 PC 로그 캡처, 카카오톡 야근 관련 대화, 급여명세서 사진 등이 있다면 함께 정리하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">자료: 출퇴근 기록 + 급여대장 + 근로계약서 사본 → 회사에 서면 요청</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/wage" style="color:#1565c0;font-weight:600">내 퇴사 후 야근수당 청구 가능성 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 미지급 금액을 산정하고 내용증명을 보내세요',
        content:
          '<p><strong style="color:#1e3a5f">월별 연장근로시간 × 통상시급 × 1.5배로 미지급액을 산출하세요</strong></p>\n<p>연장근로수당 산정 공식은 <strong>통상시급 × 1.5 × 연장근로시간</strong>입니다. 야간근로(22시~06시)에 해당하면 0.5배가 추가됩니다. 월별 산출표를 만들어 내용증명에 첨부하세요.</p>\n<p>내용증명에는 <strong>청구 금액, 산출 근거, 14일 이내 지급 요청</strong>을 명시합니다. 14일이 지나도 미지급이면 근로기준법 제36조 위반으로 지연이자(연 20%)도 청구할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">내용증명: 산출표 첨부 + 14일 기한 → 미이행 시 노동청 진정</blockquote>',
      },
      {
        title: '넷째, 노동청 진정서를 작성하고 제출하세요',
        content:
          '<p><strong style="color:#1e3a5f">관할 지방고용노동청에 "체불임금 진정서"를 접수하면 근로감독관이 사업장을 조사합니다</strong></p>\n<p>진정서에는 <strong>사업장 정보, 재직 기간, 미지급 내역, 산출 근거</strong>를 기재합니다. 첨부 서류가 많을수록 처리가 빨라집니다.</p>\n<p>온라인(고용노동부 민원마당)으로도 접수 가능합니다. 조사 결과 체불이 확인되면 사업주에게 <strong>시정 지시</strong>가 내려지고, 불이행 시 형사 처벌 대상이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">접수: 고용노동부 민원마당 또는 관할 노동청 방문 → 조사 → 시정 지시</blockquote>',
      },
      {
        title: '다섯째, 회사가 끝까지 지급을 거부하면 소액사건 소송을 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">체불액이 3,000만원 이하이면 소액사건 심판 절차로 빠르게 진행할 수 있습니다</strong></p>\n<p>노동청 시정 지시 후에도 사업주가 지급하지 않으면, <strong>민사소송(소액사건)</strong>을 제기할 수 있습니다. 소액사건은 1회 변론으로 판결이 나오는 경우가 많아 비교적 빠릅니다.</p>\n<p>소송 시 <strong>퇴직 후 14일이 경과한 임금에 대해 연 20% 지연이자</strong>(근로기준법 제37조)를 함께 청구하세요. 이는 체불 사업주에 대한 강력한 압박 수단입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">최종 수단: 소액사건 소송 + 연 20% 지연이자 청구</blockquote>',
      },
    ],
    cases: [
      {
        title: '퇴직 후 임금채권 소멸시효와 신의칙 적용 기준 사례',
        summary:
          '대법원 2022다255454 사건(2026.01.29 선고)에서 법원은 퇴직금 청구권의 소멸시효 3년이 경과한 경우, 사용자가 시효 완성 전에 권리행사를 곤란하게 하였거나 시효를 원용하지 않을 것 같은 태도를 보인 특별한 사정이 없으면 소멸시효 주장이 유효하다고 판시했습니다.',
        takeaway:
          '퇴사 후 3년의 시효가 매우 중요합니다. 시효 만료 전에 가능한 한 내용증명 발송이나 진정 접수로 시효를 중단시키세요.',
      },
    ],
    faq: [
      {
        question: '퇴사한 지 2년이 넘었는데 지금이라도 청구할 수 있나요?',
        answer:
          '각 월급의 정기 지급일로부터 <strong>3년 이내</strong>라면 청구 가능합니다. 예를 들어 2024년 1월분 야근수당의 지급일이 2024년 2월 10일이면, 2027년 2월 9일까지 청구할 수 있습니다.',
      },
      {
        question: '회사가 폐업했으면 야근수당을 못 받나요?',
        answer:
          '사업주 개인에게 청구하거나, 체당금 제도를 활용할 수 있습니다. <strong>고용노동부 체당금</strong>은 도산 사업장 근로자의 미지급 임금 중 최대 1,000만원까지 대지급합니다.',
      },
      {
        question: '노동청 진정과 민사소송 중 뭐가 더 유리한가요?',
        answer:
          '먼저 <strong>노동청 진정을 제기하고, 시정 지시가 이행되지 않으면 민사소송</strong>으로 넘어가는 것이 일반적입니다. 노동청 진정은 비용이 들지 않는다는 장점이 있습니다.',
      },
      {
        question: '퇴사 후 야근수당과 퇴직금 차액을 동시에 청구할 수 있나요?',
        answer:
          '네. 미지급 연장근로수당이 확인되면 <strong>통상임금이 재산정되어 퇴직금도 함께 증가</strong>합니다. 진정서나 소장에 두 항목을 함께 기재하세요.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/wage',
    },
    internalLinks: [
      { label: '체불임금 소멸시효 확인', href: '/guide/wage/unpaid-wage-statute-of-limitations' },
      { label: '체불임금 지연이자 계산', href: '/guide/wage/unpaid-wage-settlement-delayed-interest' },
      { label: '체불임금 진정서 작성법', href: '/guide/wage/unpaid-wage-petition-writing' },
      { label: '미지급 임금 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '야근수당 미지급 청구', href: '/guide/wage/wage-overtime-unpaid-claim' },
    ],
  },

  // ── 4. 출퇴근 기록 없이 야근수당 입증 ──
  {
    domain: 'wage',
    slug: 'no-attendance-record-overtime-proof',
    keyword: '출퇴근 기록 없을 때 야근수당 입증',
    questionKeyword: '출퇴근 기록이 없는데 야근수당을 받을 수 있나요?',
    ctaKeyword: '출퇴근 기록 없는 야근수당 입증',
    type: '실수함정형',
    meta: {
      title: '출퇴근 기록 없을 때 야근수당 입증 4가지 방법 | 로앤가이드',
      description:
        '출퇴근 기록이 아예 없어서 야근수당 청구를 포기하려 하시나요? 기록 없이도 입증할 수 있는 4가지 대체 증거 방법을 알려드립니다. 지금 확인하세요.',
    },
    intro:
      '회사에 출퇴근 기록 시스템이 없습니다. 지문인식기도 없고, 출입카드도 없습니다. 매일 야근을 했지만 아무런 공식 기록이 남아 있지 않아 야근수당 청구가 불가능하다고 생각했습니다. 그러나 대체 증거로도 충분히 입증할 수 있습니다.',
    sections: [
      {
        title: '첫째, 카카오톡·이메일의 업무 관련 메시지 시간을 활용하세요',
        content:
          '<p><strong style="color:#1e3a5f">퇴근 시간 이후에 주고받은 업무 메시지는 연장근로의 간접 증거가 됩니다</strong></p>\n<p>밤 10시에 상사에게 보낸 업무 보고 카카오톡, 새벽에 발송한 이메일은 <strong>해당 시간에 근무하고 있었다는 증거</strong>입니다. 날짜와 시간이 표시된 상태로 캡처하세요.</p>\n<p>주의할 점은 <strong>발신 시간뿐 아니라 수신자(상사)와 내용도 함께 캡처</strong>해야 합니다. 사적 대화가 아닌 업무 지시·보고임을 명확히 보여줘야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">대체 증거 ①: 업무 메시지 + 발신 시간 + 수신자 = 근무 사실 입증</blockquote>',
      },
      {
        title: '둘째, CCTV·주차장 기록·건물 출입 로그를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">사내 출퇴근 기록이 없어도 건물 차원의 기록이 남아 있을 수 있습니다</strong></p>\n<p>오피스 빌딩의 <strong>로비 CCTV, 주차장 입출차 기록, 엘리베이터 호출 로그</strong>에 퇴근 시간이 기록되어 있을 수 있습니다. 건물 관리사무소에 보존 기간을 확인하고 제공을 요청하세요.</p>\n<p>대부분 CCTV는 30~60일이면 자동 삭제됩니다. <strong>보존 요청을 서면(이메일)으로 해야 나중에 요청 사실을 증명</strong>할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">대체 증거 ②: CCTV + 주차장 기록 → 건물 관리사무소에 서면 요청</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/wage" style="color:#1565c0;font-weight:600">출퇴근 기록 없는 야근수당, 청구 가능한지 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 근로자가 직접 작성한 근무 일지도 증거가 됩니다',
        content:
          '<p><strong style="color:#1e3a5f">법원은 근로자가 일관되게 작성한 자체 근무 기록도 증거로 인정합니다</strong></p>\n<p>매일 퇴근 후 <strong>스마트폰 메모 앱이나 엑셀에 출근·퇴근·휴게시간을 기록</strong>해두세요. 3개월 이상 일관되게 작성된 기록은 법원에서 상당한 증거력을 인정받습니다.</p>\n<p>흔한 실수는 <strong>나중에 한꺼번에 기록을 만드는 것</strong>입니다. 파일 생성일자와 수정일자가 동일하면 신뢰도가 떨어집니다. 가능한 한 매일 기록하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">함정 주의: 소급 작성 기록은 신뢰도 ↓ → 매일 실시간 기록이 핵심</blockquote>',
      },
      {
        title: '넷째, 동료의 확인 진술과 근무 패턴 증거를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">함께 야근한 동료의 진술서는 공식 기록이 없는 상황에서 가장 강력한 보조 증거입니다</strong></p>\n<p>동료에게 <strong>"본인과 함께 OO시까지 근무한 사실이 있다"는 내용의 확인서</strong>를 받으세요. 날짜, 시간, 업무 내용, 진술자 인적사항과 서명이 포함되어야 합니다.</p>\n<p>또한 <strong>부서 전체의 야근 패턴</strong>을 보여주는 증거(팀 회의록에 적힌 마감 일정, 프로젝트 일정표 등)도 개인의 야근을 뒷받침하는 간접 증거가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">대체 증거 ④: 동료 진술서 + 팀 일정표 → 야근 패턴의 객관적 뒷받침</blockquote>',
      },
      {
        title: '다섯째, 노동청 조사 시 사업주에게 입증 책임이 전환될 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제48조에 따라 사용자에게는 근로시간 기록·보존 의무가 있습니다</strong></p>\n<p>사용자가 법정 의무인 <strong>근로시간 기록을 하지 않은 경우</strong>, 근로감독관은 근로자의 주장을 기초로 조사를 진행합니다. 기록 의무를 위반한 사업주에게 불리하게 작용하는 것입니다.</p>\n<p>근로자가 제출한 대체 증거(메시지, 자체 기록, 동료 진술)를 토대로 근로감독관이 <strong>사업주에게 반증 자료 제출</strong>을 요구합니다. 사업주가 반증하지 못하면 근로자의 주장이 인정될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">유리한 점: 사용자 기록 의무 위반 → 근로자 주장 기반 조사 진행</blockquote>',
      },
    ],
    cases: [
      {
        title: '임금의 근로 대가성 판단 기준과 정기적 지급 임금성 인정 사례',
        summary:
          '대법원 2021다248299 사건(2026.01.29 선고)에서 법원은 금품 지급의무의 발생이 근로제공과 직접적으로 관련되거나 밀접하게 관련된 것으로 평가될 수 있으면 근로의 대가인 임금에 해당한다고 판시했습니다.',
        takeaway:
          '야근수당 산정의 기초가 되는 통상임금 범위를 정확히 파악하세요. 정기적으로 받는 수당도 통상임금에 포함될 수 있어 청구 금액이 커질 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '출퇴근 기록이 전혀 없으면 노동청에서 받아주나요?',
        answer:
          '받아줍니다. <strong>사용자에게 근로시간 기록·보존 의무</strong>가 있으므로, 기록이 없는 것 자체가 사업주의 의무 위반입니다. 대체 증거를 함께 제출하면 조사가 진행됩니다.',
      },
      {
        question: '자체 근무 기록만으로 야근수당을 받을 수 있나요?',
        answer:
          '자체 기록만으로도 가능하지만, <strong>다른 보조 증거(메시지, 동료 진술)가 함께 있으면</strong> 인정받을 확률이 훨씬 높아집니다. 증거는 여러 종류를 조합하는 것이 유리합니다.',
      },
      {
        question: '스마트폰 GPS 기록도 증거가 되나요?',
        answer:
          '네. 구글 타임라인이나 네이버 지도의 <strong>위치 기록에 회사 주소에 머문 시간</strong>이 표시되면 간접 증거로 활용할 수 있습니다. 다만 개인정보 보호를 위해 필요한 부분만 발췌하세요.',
      },
      {
        question: '회사가 출퇴근 기록 시스템을 도입하지 않은 것도 처벌 대상인가요?',
        answer:
          '근로기준법 제48조 위반으로 <strong>500만원 이하의 과태료</strong>가 부과될 수 있습니다. 근로감독관 조사 시 이 점을 적극적으로 언급하면 사업주에게 압박이 됩니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/wage',
    },
    internalLinks: [
      { label: '미지급 임금 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '야근수당 미지급 증거 5가지', href: '/guide/wage/overtime-no-pay-evidence-5-types' },
      { label: '야근수당 미지급 청구 방법', href: '/guide/wage/wage-overtime-unpaid-claim' },
      { label: '체불임금 사업주 대응', href: '/guide/wage/unpaid-wage-employer-response' },
      { label: '체불임금 진정서 작성', href: '/guide/wage/unpaid-wage-petition-writing' },
    ],
  },

  // ── 5. 스토킹 신고 - 정상 연락 입증 ──
  {
    domain: 'stalking',
    slug: 'stalking-accused-normal-contact-proof',
    keyword: '스토킹 신고 정상 연락 입증',
    questionKeyword: '스토킹으로 신고당했는데 정상적인 연락이었음을 어떻게 증명하나요?',
    ctaKeyword: '스토킹 혐의 정상 연락 입증',
    type: '준비서류형',
    perspective: 'accused',
    meta: {
      title: '스토킹 신고 시 정상 연락 입증 자료 3가지 준비법 | 로앤가이드',
      description:
        '정상적인 연락이었는데 갑자기 스토킹으로 신고되셨나요? 혐의를 받고 있다면 입증에 필요한 3가지 핵심 자료 준비법을 확인하세요. 지금 확인하세요.',
    },
    intro:
      '지인에게 평소처럼 연락했을 뿐인데 어느 날 경찰에서 연락이 왔습니다. 스토킹 혐의로 신고가 접수되었다는 것입니다. 억울하지만 어떻게 대응해야 할지 막막합니다. 혐의를 받고 있다면, 정상적인 연락이었음을 입증할 자료를 미리 준비해야 합니다.',
    sections: [
      {
        title: '첫째, 대화 전체 맥락을 보여주는 메시지 기록을 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">스토킹처벌법은 "상대방의 의사에 반하여" 연락하는 것을 요건으로 합니다</strong></p>\n<p>상대방과 주고받은 <strong>카카오톡·문자 대화 전체</strong>를 캡처하세요. 핵심은 "일방적"이 아니라 <strong>쌍방 대화가 이루어졌음</strong>을 보여주는 것입니다. 상대방이 답장한 기록, 먼저 연락한 기록이 있으면 매우 유리합니다.</p>\n<p>상대방이 "연락하지 말아달라"고 명시적으로 요청한 시점 이전의 대화는 정상 연락의 증거가 됩니다. <strong>시간순으로 정리</strong>하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">입증 자료 ①: 쌍방 대화 기록 → 일방적 연락이 아님을 증명</blockquote>',
      },
      {
        title: '둘째, 연락의 정당한 이유를 뒷받침하는 자료를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">"정당한 이유" 있는 연락은 스토킹행위에 해당하지 않습니다</strong></p>\n<p>채무 정산, 공동 업무, 자녀 양육 관련 등 <strong>연락의 합리적 이유</strong>가 있다면 이를 입증하는 서류를 준비하세요. 예를 들어 금전 대차 관계가 있었다면 차용증이나 이체 내역이 정당한 연락 사유를 뒷받침합니다.</p>\n<p>업무상 연락이었다면 <strong>근무지가 같다는 증명, 공동 프로젝트 문서</strong> 등을 확보하세요. 연락의 목적이 명확할수록 스토킹 혐의를 벗기 쉽습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">입증 자료 ②: 연락의 합리적 이유 증빙 → 채무·업무·양육 등 서류</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/stalking" style="color:#1565c0;font-weight:600">내 연락이 스토킹에 해당하는지 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 상대방의 거부 의사 표시 시점을 특정하세요',
        content:
          '<p><strong style="color:#1e3a5f">상대방이 "연락하지 말라"고 명확히 말한 시점이 스토킹 성립의 기준선입니다</strong></p>\n<p>스토킹행위는 <strong>"상대방의 의사에 반하여"</strong> 행해져야 성립할 수 있습니다. 상대방이 거부 의사를 표시한 시점 이전의 연락은 원칙적으로 스토킹에 해당하지 않습니다.</p>\n<p>거부 의사가 <strong>명시적으로 표현된 메시지</strong>가 있다면 그 시점을 특정하세요. 만약 명시적 거부 없이 바로 신고한 경우, 이 점이 방어의 핵심 포인트가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 거부 의사 표시 시점 전후의 연락 내용을 구분해서 정리</blockquote>',
      },
      {
        title: '넷째, 연락 빈도와 내용이 통상적 범위였음을 정리하세요',
        content:
          '<p><strong style="color:#1e3a5f">법원은 연락의 빈도, 시간대, 내용 등을 종합하여 불안감을 일으키기에 충분한지 판단합니다</strong></p>\n<p>하루에 1~2회 안부 메시지를 보낸 것과 수십 통의 전화를 건 것은 법적 평가가 완전히 다릅니다. <strong>연락 횟수와 시간대를 날짜별로 표</strong>로 정리하세요.</p>\n<p>내용도 중요합니다. 위협적이거나 불쾌한 표현 없이 <strong>일상적 안부나 업무 연락</strong>이었다면, 객관적으로 불안감을 일으키기에 충분하지 않다고 주장할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">정리 방법: 날짜 | 시간 | 연락 유형 | 내용 요약 → 표로 작성</blockquote>',
      },
      {
        title: '다섯째, 경찰 조사 전 변호사와 진술 전략을 반드시 상의하세요',
        content:
          '<p><strong style="color:#1e3a5f">첫 경찰 진술이 향후 사건 방향을 좌우합니다</strong></p>\n<p>혐의를 받고 있다면, 경찰 조사 전에 <strong>형사 전문 변호사와 면담</strong>하는 것이 가장 중요합니다. 어떤 부분을 인정하고 어떤 부분을 다투어야 하는지 전략을 세워야 합니다.</p>\n<p>조사 시 <strong>"상대방과 합의할 의향이 있다"</strong>는 태도를 보이는 것은 초범의 경우 매우 유리하게 작용합니다. 다만 구체적 합의 조건은 변호사를 통해 진행하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">조사 전 필수: 변호사 상담 → 진술 전략 수립 → 입증 자료 정리</blockquote>',
      },
    ],
    cases: [
      {
        title: '전화 연락만으로도 스토킹행위 성립을 인정한 사례',
        summary:
          '대법원 2022도12037 사건(2023.05.18 선고)에서 법원은 전화를 걸어 벨소리를 울리게 하거나 부재중 전화 문구가 표시되도록 한 행위도 상대방의 의사에 반하여 불안감을 일으키면 스토킹행위에 해당한다고 판시했습니다.',
        takeaway:
          '통화 내용과 관계없이 반복된 전화 자체가 스토킹으로 인정될 수 있습니다. 연락 빈도와 상대방의 거부 여부가 핵심이므로, 거부 의사 이전의 정상 대화 기록을 가능한 한 확보하세요.',
      },
    ],
    faq: [
      {
        question: '상대방이 거부 의사를 밝힌 적이 없는데도 스토킹이 되나요?',
        answer:
          '명시적 거부가 없었더라도, <strong>객관적으로 상대방에게 불안감을 일으키기에 충분한 행위</strong>였다면 스토킹이 성립할 수 있습니다. 다만 거부 의사 부재는 방어에 유리한 사정으로 작용합니다.',
      },
      {
        question: '상대방이 먼저 연락해온 기록이 있으면 도움이 되나요?',
        answer:
          '매우 도움이 됩니다. <strong>쌍방 연락이 이루어졌다는 기록</strong>은 관계가 일방적이지 않았음을 보여주는 강력한 증거입니다. 상대방이 먼저 연락한 시점과 내용을 빠짐없이 캡처하세요.',
      },
      {
        question: '합의하면 처벌을 안 받을 수 있나요?',
        answer:
          '현행 스토킹처벌법상 스토킹범죄는 <strong>반의사불벌죄가 아닙니다</strong>. 다만 합의는 검찰 처분과 법원 양형에서 매우 유리한 정상참작 사유로 고려됩니다.',
      },
      {
        question: '정상 연락 입증 자료를 제출하면 바로 혐의가 풀리나요?',
        answer:
          '자료 제출만으로 즉시 혐의가 소멸하지는 않습니다. 경찰이 <strong>피해자 진술과 피의자 제출 자료를 종합</strong>하여 검찰에 송치 여부를 결정합니다. 충분한 입증 자료가 있으면 불기소 처분 가능성이 높아집니다.',
      },
      {
        question: '변호사 없이 경찰 조사에 가도 되나요?',
        answer:
          '법적으로는 가능하지만 <strong>권장하지 않습니다</strong>. 첫 진술에서 불리한 내용이 기록되면 이후 번복이 어렵습니다. 최소한 조사 전에 변호사 상담을 받는 것이 안전합니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/stalking',
    },
    internalLinks: [
      { label: '스토킹 혐의 첫 대응 방법', href: '/guide/stalking/stalking-accused-response' },
      { label: '스토킹 혐의 어디서부터 시작하나', href: '/guide/stalking/stalking-accused-where-to-start' },
      { label: '쌍방 연락 관계 방어 전략', href: '/guide/stalking/stalking-mutual-contact-defense' },
      { label: '스토킹 법적 성립 기준', href: '/guide/stalking/stalking-legal-criteria' },
      { label: '스토킹 무고 방어 전략', href: '/guide/stalking/stalking-false-report-defense' },
    ],
  },

  // ── 6. 헤어진 뒤 연락 - 스토킹 고소 가능 여부 ──
  {
    domain: 'stalking',
    slug: 'ex-contact-after-breakup-stalking',
    keyword: '헤어진 후 연락 스토킹 성립',
    questionKeyword: '헤어진 뒤 연락했는데 스토킹으로 고소당할 수 있나요?',
    ctaKeyword: '이별 후 연락 스토킹 기준',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '헤어진 뒤 연락, 스토킹 고소 3가지 판단 기준 | 로앤가이드',
      description:
        '이별 후 전 연인에게 연락했는데 스토킹 고소 가능성이 걱정되시나요? 혐의를 받고 있다면 법적 판단 기준 3가지를 먼저 확인하세요. 지금 확인하세요.',
    },
    intro:
      '이별 후 마지막으로 한마디 하고 싶어서 전화를 걸었습니다. 그런데 상대방이 경찰에 스토킹으로 신고할 수 있다고 경고했습니다. 정말 고소가 가능한 걸까요? 혐의를 받고 있다면, 어떤 연락이 스토킹에 해당하는지 법적 기준을 먼저 확인해보세요.',
    sections: [
      {
        title: '첫째, 상대방의 의사에 "반하여" 연락했는지가 핵심입니다',
        content:
          '<p><strong style="color:#1e3a5f">스토킹처벌법 제2조 제1호는 "상대방의 의사에 반하여" 접근하는 행위를 스토킹행위로 규정합니다</strong></p>\n<p>이별 후 상대방이 <strong>"다시는 연락하지 마"라고 분명히 말했는데 연락을 계속</strong>했다면, 스토킹행위의 "의사에 반하여" 요건을 충족할 수 있습니다.</p>\n<p>반면 이별 직후 짐 반환, 공동 계약 해지 등 <strong>합리적 이유가 있는 연락</strong>은 "의사에 반하여"에 해당하지 않을 가능성이 높습니다. 연락의 목적이 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">판단 기준 ①: 상대방의 명시적 거부 + 그 후 연락 여부</blockquote>',
      },
      {
        title: '둘째, 연락 행위가 "불안감 또는 공포심"을 일으킬 정도인지 봅니다',
        content:
          '<p><strong style="color:#1e3a5f">대법원은 행위자와 상대방의 관계, 행위 경위, 태양 등을 종합하여 객관적으로 판단합니다</strong></p>\n<p>"밥은 먹었어?"라는 안부 문자 1건과 "무시하면 가만 안 둔다"는 위협 메시지는 법적 평가가 완전히 다릅니다. <strong>객관적·일반적 관점에서 불안감을 일으키기에 충분한 정도</strong>인지가 기준입니다.</p>\n<p>이별 후의 감정적 메시지도 내용과 빈도에 따라 달라집니다. <strong>하루 1~2회 안부와 하루 수십 회 전화는</strong> 같은 이별 후 연락이라도 법적 평가가 완전히 다릅니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">판단 기준 ②: 연락의 빈도·시간대·내용 → 객관적 불안감 기준</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/stalking" style="color:#1565c0;font-weight:600">내 연락 행위가 스토킹에 해당하는지 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, "지속적 또는 반복적"이어야 스토킹범죄가 성립할 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">1회성 연락만으로는 스토킹범죄가 아닌 스토킹행위에 그칩니다</strong></p>\n<p>스토킹처벌법은 스토킹행위가 <strong>"지속적 또는 반복적"</strong>으로 이루어져야 비로소 "스토킹범죄"로 처벌합니다. 이별 후 단 1회 전화를 건 것만으로 바로 형사처벌 대상이 되지는 않습니다.</p>\n<p>다만 1회 연락이라도 <strong>경고 조치 이후 재차 연락하면 반복성이 인정</strong>될 수 있습니다. 경찰의 경고나 잠정조치를 받았다면 이후 연락을 완전히 중단해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">판단 기준 ③: 지속성·반복성 → 1회 행위와 반복 행위의 법적 차이</blockquote>',
      },
      {
        title: '넷째, 이별 후 연락이 스토킹이 되지 않으려면 이렇게 대응하세요',
        content:
          '<p><strong style="color:#1e3a5f">상대방이 거부 의사를 밝힌 순간부터 모든 연락을 즉시 중단해야 합니다</strong></p>\n<p>"한 번만 더 연락하면 신고하겠다"는 말을 들었다면, 그 순간부터 <strong>전화·문자·SNS·이메일 모든 채널의 연락을 중단</strong>하세요. 우회 연락(친구를 통한 전달, 새 번호 사용)도 스토킹으로 인정될 수 있습니다.</p>\n<p>짐 반환 등 불가피한 연락이 필요하다면, <strong>제3자(공통 지인, 변호사)를 통해</strong> 진행하는 것이 안전합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">대응 원칙: 거부 의사 접수 → 즉시 전면 연락 중단 → 불가피 시 제3자 경유</blockquote>',
      },
      {
        title: '다섯째, 이미 경고·잠정조치를 받았다면 변호사 상담이 급선무입니다',
        content:
          '<p><strong style="color:#1e3a5f">잠정조치(접근금지) 위반 시 2년 이하 징역 또는 2천만원 이하 벌금에 처해집니다</strong></p>\n<p>경찰의 <strong>긴급응급조치</strong>나 법원의 <strong>잠정조치</strong>를 받은 상태에서 연락하면 별도의 범죄가 성립할 수 있습니다. 이 경우 본래 스토킹 혐의와 별도로 가중 처벌 대상으로 검토될 수 있습니다.</p>\n<p>혐의를 받고 있다면, 즉시 <strong>형사 전문 변호사와 상담</strong>하세요. 조사 대응, 합의 가능성, 잠정조치 해제 신청 등 종합적인 전략이 필요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">경고: 잠정조치 중 연락 = 별도 범죄 → 절대 금지</blockquote>',
      },
    ],
    cases: [
      {
        title: '피해자의 현실적 인식 없이도 스토킹행위 성립을 인정한 사례',
        summary:
          '대법원 2025도36 사건(2025.10.30 선고)에서 법원은 행위가 객관적·일반적으로 상대방에게 불안감을 일으키기에 충분하다면, 상대방이 현실적으로 해당 행위를 인식했는지와 관계없이 스토킹행위에 해당한다고 판시했습니다.',
        takeaway:
          '상대방이 메시지를 읽지 않았더라도 스토킹행위는 성립할 수 있습니다. 발신 행위 자체가 판단 대상이므로, 상대방의 거부 후에는 어떤 형태의 연락도 위험합니다.',
      },
    ],
    faq: [
      {
        question: '이별 후 "잘 지내?"라는 문자 한 통도 스토킹인가요?',
        answer:
          '1회성 안부 문자만으로 스토킹<strong>범죄</strong>가 성립하기는 어렵습니다. 다만 상대방이 거부 의사를 밝힌 이후라면 <strong>스토킹행위</strong>에 해당할 수 있고, 반복되면 범죄가 됩니다.',
      },
      {
        question: 'SNS에 댓글을 다는 것도 스토킹에 해당하나요?',
        answer:
          '상대방의 의사에 반하여 <strong>반복적으로 SNS 댓글·DM을 보내는 행위</strong>는 스토킹처벌법상 "글을 도달하게 하는 행위"에 해당할 수 있습니다.',
      },
      {
        question: '공동 반려동물 문제로 연락해야 하는데 어떻게 하나요?',
        answer:
          '불가피한 연락은 <strong>변호사나 공통 지인을 통해</strong> 진행하세요. 직접 연락하면 목적과 관계없이 스토킹으로 오해받을 수 있습니다.',
      },
      {
        question: '상대방도 나에게 연락한 적이 있는데 스토킹이 되나요?',
        answer:
          '쌍방 연락이 있었다면 <strong>"의사에 반하여"라는 요건 충족이 어려울 수 있습니다</strong>. 상대방이 먼저 연락한 기록을 확보해서 경찰에 제출하세요.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/stalking',
    },
    internalLinks: [
      { label: '스토킹 법적 성립 기준', href: '/guide/stalking/stalking-legal-criteria' },
      { label: '스토킹 혐의 첫 대응', href: '/guide/stalking/stalking-accused-response' },
      { label: '스토킹 정상 연락 입증', href: '/guide/stalking/stalking-accused-normal-contact-proof' },
      { label: '스토킹 쌍방 연락 방어', href: '/guide/stalking/stalking-mutual-contact-defense' },
      { label: '스토킹 처벌·접근금지 기준', href: '/guide/stalking/stalking-penalty-restraining-order' },
    ],
  },

  // ── 7. 스토킹 초범 조사 전 준비 ──
  {
    domain: 'stalking',
    slug: 'stalking-first-offense-investigation-prep',
    keyword: '스토킹 초범 경찰 조사 준비',
    questionKeyword: '스토킹 혐의 초범인데 경찰 조사 전에 뭘 준비해야 하나요?',
    ctaKeyword: '스토킹 초범 조사 대비',
    type: '준비서류형',
    perspective: 'accused',
    meta: {
      title: '스토킹 초범 경찰 조사 전 준비 자료 5가지 | 로앤가이드',
      description:
        '스토킹 혐의로 처음 경찰 출석 통보를 받으셨나요? 혐의를 받고 있다면 조사 전 준비해야 할 5가지 자료와 진술 전략을 정리했습니다. 지금 확인하세요.',
    },
    intro:
      '경찰에서 "스토킹 혐의로 출석해달라"는 전화를 받았습니다. 전과가 없는 초범이라 경황이 없고, 어떻게 준비해야 할지 모르겠습니다. 혐의를 받고 있다면, 첫 조사가 사건 방향을 결정합니다. 조사 전에 준비해야 할 자료와 진술 전략을 확인해보세요.',
    sections: [
      {
        title: '첫째, 변호사 선임 또는 최소한 사전 상담을 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">피의자는 변호인의 조력을 받을 권리가 헌법상 보장되어 있습니다</strong></p>\n<p>스토킹 혐의로 경찰 조사를 받기 전, <strong>형사 전문 변호사와 가능한 한 상담</strong>하세요. 어떤 사실을 인정하고 어떤 부분을 다툴지, 진술의 범위를 미리 정하는 것이 핵심입니다.</p>\n<p>선임이 어려우면 <strong>대한법률구조공단(132) 무료 상담</strong>을 먼저 이용하세요. 변호사 없이 조사에 임하면 불리한 진술이 조서에 기록될 위험이 큽니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비 ①: 변호사 상담 → 진술 범위 확정 → 조사 전략 수립</blockquote>',
      },
      {
        title: '둘째, 상대방과 주고받은 모든 대화 기록을 시간순으로 정리하세요',
        content:
          '<p><strong style="color:#1e3a5f">카카오톡, 문자, SNS DM 등 모든 연락 내역을 날짜·시간순으로 정리하는 것이 필수입니다</strong></p>\n<p>경찰은 <strong>피해자 진술과 피의자 진술을 대조</strong>합니다. 대화 기록이 없으면 피해자의 일방적 주장만 남게 됩니다. 삭제된 메시지가 있다면 복구 시도도 고려하세요.</p>\n<p>특히 <strong>상대방이 먼저 연락하거나 호의적으로 답변한 기록</strong>은 "의사에 반하여"라는 요건을 다투는 핵심 증거가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비 ②: 전체 대화 기록 캡처 → 시간순 정리 → 상대방 호의 답변 표시</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/stalking" style="color:#1565c0;font-weight:600">스토킹 초범 대응 전략 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 연락의 정당한 이유를 증명할 서류를 모으세요',
        content:
          '<p><strong style="color:#1e3a5f">업무, 채무, 공동 재산 정리 등 합리적 연락 사유가 있으면 방어에 유리합니다</strong></p>\n<p>연락에 <strong>정당한 이유</strong>가 있었다면 이를 뒷받침하는 서류를 준비하세요. 공동 명의 계약서, 금전 거래 내역, 업무 관련 문서 등이 해당합니다.</p>\n<p>단순히 "보고 싶어서"라는 이유는 정당한 사유로 인정되기 어렵습니다. <strong>객관적으로 연락이 필요한 구체적 사안</strong>이 있었는지 정리하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비 ③: 연락 사유 증빙 서류 → 계약서, 이체 내역, 업무 문서</blockquote>',
      },
      {
        title: '넷째, 초범임을 증명할 수 있는 신원 자료를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">전과 없는 초범, 사회적 유대관계, 반성 의지는 처분에 큰 영향을 미칩니다</strong></p>\n<p><strong>주민등록등본, 재직증명서, 가족관계증명서</strong>를 준비하세요. 안정적인 생활 환경과 사회적 유대관계를 증명하는 자료입니다.</p>\n<p>초범이고 반성하고 있다면, <strong>반성문</strong>을 작성하여 제출하는 것도 도움이 됩니다. 다만 반성문에서 범행 사실을 전면 인정하지 않도록 변호사와 내용을 조율하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비 ④: 신원 서류(주민등록등본, 재직증명서) + 반성문(변호사 검토 후)</blockquote>',
      },
      {
        title: '다섯째, 합의 가능성을 열어두되 조건은 변호사를 통해 진행하세요',
        content:
          '<p><strong style="color:#1e3a5f">초범 스토킹 사건에서 합의는 기소유예 또는 선고유예를 이끌어내는 가장 중요한 요소입니다</strong></p>\n<p>피해자와의 <strong>합의</strong>는 검사의 처분과 법원의 양형에 결정적 영향을 미칩니다. 다만 직접 연락하면 오히려 2차 스토킹 혐의가 될 수 있으므로, <strong>가능한 한 변호사를 통해</strong> 진행하세요.</p>\n<p>합의금 수준은 사안마다 다르지만, 초범이고 실질적 피해가 크지 않은 경우 <strong>기소유예(형사기록 없음)</strong> 처분을 기대할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비 ⑤: 합의 의향 → 변호사 경유 → 기소유예 목표</blockquote>',
      },
    ],
    cases: [
      {
        title: '스토킹행위의 성립 요건과 객관적 판단 기준 사례',
        summary:
          '대법원 2023도6411 사건(2023.09.27 선고)에서 법원은 행위가 객관적·일반적으로 불안감 또는 공포심을 일으키기에 충분하면, 상대방의 현실적 불안감 여부와 관계없이 스토킹행위에 해당한다고 판시했습니다.',
        takeaway:
          '본인은 악의가 없었더라도 객관적으로 불안감을 줄 수 있는 행위였다면 스토킹이 성립할 수 있습니다. 행위의 빈도와 태양을 중심으로 방어 전략을 세우세요.',
      },
    ],
    faq: [
      {
        question: '초범이면 구속될 수도 있나요?',
        answer:
          '초범이고 도주·증거인멸 우려가 없으면 <strong>구속보다 불구속 수사가 원칙</strong>입니다. 다만 잠정조치 위반이나 피해자에 대한 위협이 있었다면 구속 가능성이 높아집니다.',
      },
      {
        question: '경찰 조사에서 묵비권을 행사해도 되나요?',
        answer:
          '헌법상 보장된 권리이므로 <strong>묵비권 행사는 가능</strong>합니다. 다만 완전한 묵비보다 변호사와 상의 후 유리한 부분만 선택적으로 진술하는 전략이 일반적입니다.',
      },
      {
        question: '초범 스토킹의 일반적인 처분 결과는 어떤가요?',
        answer:
          '합의가 이루어지고 피해가 크지 않은 초범의 경우, <strong>기소유예 또는 약식기소(벌금)</strong>가 가장 흔합니다. 합의 없이 기소되면 징역 3년 이하 또는 3천만원 이하 벌금이 법정형입니다.',
      },
      {
        question: '조사 전에 피해자에게 사과 문자를 보내도 되나요?',
        answer:
          '<strong>절대 안 됩니다</strong>. 직접 연락하면 추가 스토킹 혐의가 될 수 있습니다. 사과와 합의 의향은 가능한 한 변호사를 통해 전달하세요.',
      },
      {
        question: '긴급응급조치를 받았는데 어떻게 해야 하나요?',
        answer:
          '긴급응급조치 기간(최대 1개월) 동안 <strong>상대방에 대한 접근·연락을 완전히 중단</strong>해야 합니다. 위반 시 1년 이하 징역 또는 1천만원 이하 벌금에 처해집니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/stalking',
    },
    internalLinks: [
      { label: '스토킹 혐의 어디서부터 시작하나', href: '/guide/stalking/stalking-accused-where-to-start' },
      { label: '스토킹 혐의 첫 대응', href: '/guide/stalking/stalking-accused-response' },
      { label: '스토킹 처벌·접근금지 기준', href: '/guide/stalking/stalking-penalty-restraining-order' },
      { label: '스토킹 정상 연락 입증', href: '/guide/stalking/stalking-accused-normal-contact-proof' },
      { label: '스토킹 무고 방어 전략', href: '/guide/stalking/stalking-false-report-defense' },
    ],
  },

  // ── 8. 차단 후 연락 시 스토킹 인정 기준 ──
  {
    domain: 'stalking',
    slug: 'blocked-then-contacted-stalking-criteria',
    keyword: '차단 후 연락 스토킹 기준',
    questionKeyword: '차단당한 후 다른 방법으로 연락하면 스토킹인가요?',
    ctaKeyword: '차단 후 연락 스토킹 인정',
    type: '상황형',
    perspective: 'accused',
    meta: {
      title: '차단 후 연락, 스토킹 인정되는 3가지 기준 | 로앤가이드',
      description:
        '상대방에게 차단당한 후 다른 경로로 연락했다면 스토킹이 될 수 있습니다. 혐의를 받고 있다면 법적 판단 기준 3가지를 먼저 확인하세요. 지금 확인하세요.',
    },
    intro:
      '카카오톡이 차단되어 문자로 보냈습니다. 문자도 수신 거부되자 인스타그램 DM을 보냈습니다. 그러자 경찰에서 스토킹 혐의로 연락이 왔습니다. 차단 자체가 거부 의사의 표현일 수 있다는 사실을 몰랐습니다. 혐의를 받고 있다면, 차단 후 연락의 법적 기준을 확인해보세요.',
    sections: [
      {
        title: '첫째, 차단 행위는 "연락하지 말라"는 의사 표시로 해석됩니다',
        content:
          '<p><strong style="color:#1e3a5f">법원은 상대방의 차단 행위를 연락 거부의 명시적 의사 표시로 판단할 수 있습니다</strong></p>\n<p>카카오톡 차단, 전화번호 수신 거부, SNS 팔로우 취소는 <strong>"더 이상 연락하지 말라"</strong>는 의사를 행동으로 보여주는 것입니다. 말로 명확히 거부하지 않았더라도, 차단이라는 행위 자체가 충분한 의사 표시가 됩니다.</p>\n<p>따라서 차단 후 <strong>다른 채널로 우회하여 연락하는 것</strong>은 "상대방의 의사에 반하여" 접근하는 것으로 볼 가능성이 높습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 차단 = 거부 의사 표시 → 우회 연락 = 의사에 반한 접근</blockquote>',
      },
      {
        title: '둘째, 우회 연락 자체가 스토킹의 "반복성"을 충족시킵니다',
        content:
          '<p><strong style="color:#1e3a5f">채널을 바꿔가며 연락하는 행위는 "지속적 또는 반복적" 요건을 충족할 수 있습니다</strong></p>\n<p>카카오톡 → 문자 → 인스타그램으로 채널을 바꾼 것 자체가 <strong>연락을 반복한 것</strong>으로 평가됩니다. 각 채널에서 1회씩만 보냈더라도 총 3회의 반복 행위가 됩니다.</p>\n<p>법원은 <strong>동일한 채널에서의 반복뿐 아니라, 다른 채널을 통한 우회 접근</strong>도 반복성의 근거로 봅니다. 차단 후 새로운 계정을 만들어 접근하는 것은 더욱 불리하게 평가됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 채널 변경 연락 = 반복 행위 → 새 계정 접근은 가중 평가</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/stalking" style="color:#1565c0;font-weight:600">차단 후 연락이 스토킹에 해당하는지 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 잠정조치와 접근금지 명령이 내려질 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">스토킹처벌법 제9조에 따라 법원은 피의자에게 접근금지 등 잠정조치를 명할 수 있습니다</strong></p>\n<p>차단 후 우회 연락이 확인되면, 법원은 <strong>100미터 이내 접근금지, 전기통신을 이용한 접근금지</strong> 등의 잠정조치를 결정할 수 있습니다. 잠정조치 기간은 최대 2개월이며 연장이 가능합니다.</p>\n<p>잠정조치를 위반하면 <strong>2년 이하 징역 또는 2천만원 이하 벌금</strong>의 별도 처벌이 추가됩니다. 본래 스토킹 혐의와 별개로 처벌받는 것입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">잠정조치: 접근금지 + 통신금지 → 위반 시 별도 처벌</blockquote>',
      },
      {
        title: '넷째, 차단 전 정상 대화 기록이 있다면 방어에 활용하세요',
        content:
          '<p><strong style="color:#1e3a5f">차단 이전에 쌍방 대화가 정상적으로 이루어졌다는 기록은 유리한 정황 증거가 됩니다</strong></p>\n<p>차단 이전의 대화에서 상대방이 <strong>먼저 연락하거나 호의적으로 응대한 기록</strong>이 있다면, 관계가 갑자기 일방적으로 변한 것임을 보여줄 수 있습니다.</p>\n<p>다만 이 기록이 차단 후 연락을 정당화하지는 않습니다. <strong>"차단 전에는 정상 관계였으므로 차단 후 연락의 동기가 악의적이지 않았다"</strong>는 정상참작 사유로 활용하는 것입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">방어 포인트: 차단 전 정상 대화 → 악의 없는 동기 소명 자료</blockquote>',
      },
      {
        title: '다섯째, 지금 즉시 모든 연락을 중단하고 변호사에게 연락하세요',
        content:
          '<p><strong style="color:#1e3a5f">혐의를 인지한 후 연락을 즉시 중단한 사실 자체가 반성과 재범 방지 의지의 증거가 됩니다</strong></p>\n<p>지금이라도 <strong>모든 채널에서 연락을 완전히 중단</strong>하세요. 상대방의 SNS를 확인하는 것조차 삼가세요. 연락 중단 시점을 기록해두면 나중에 반성 의지를 소명하는 자료가 됩니다.</p>\n<p>형사 전문 변호사와 <strong>조사 전 상담</strong>을 받고, 합의 가능성도 함께 검토하세요. 초범이고 실질적 피해가 크지 않으면 기소유예 처분을 기대할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">즉시 행동: 연락 전면 중단 + 중단 시점 기록 + 변호사 상담</blockquote>',
      },
    ],
    cases: [
      {
        title: '잠정조치 연장 결정에 대한 항고 절차를 명확히 한 사례',
        summary:
          '대법원 2025모3144 사건(2025.12.11 선고)에서 법원은 스토킹처벌법상 잠정조치 결정에 대한 항고에 형사소송법 제407조(원심법원의 항고 기각)가 준용되지 않으며, 항고장을 받은 법원은 3일 이내에 기록을 항고법원에 보내야 한다고 판시했습니다.',
        takeaway:
          '잠정조치를 받았다면 불복 절차가 존재합니다. 다만 항고 기간은 7일로 짧으므로, 잠정조치 결정을 받는 즉시 변호사와 상의하세요.',
      },
    ],
    faq: [
      {
        question: '차단한 걸 몰랐는데도 스토킹이 되나요?',
        answer:
          '메시지가 전달되지 않는 것을 인지할 수 있었다면 <strong>차단 사실을 몰랐다는 주장은 받아들여지기 어렵습니다</strong>. 카카오톡 "1" 표시가 사라지지 않는 것 등이 인지 가능성의 근거가 됩니다.',
      },
      {
        question: '새 번호로 전화하면 더 불리해지나요?',
        answer:
          '매우 불리해집니다. <strong>차단을 우회하기 위해 적극적으로 새 수단을 확보한 것</strong>으로 평가되어, 법원은 범의(고의)가 더 강하다고 판단할 수 있습니다.',
      },
      {
        question: '차단 후 편지를 보내는 것도 스토킹인가요?',
        answer:
          '네. 스토킹처벌법은 <strong>"글, 그림, 음향 등을 도달하게 하는 행위"</strong>를 스토킹행위로 규정하고 있어, 편지도 해당됩니다. 수단과 관계없이 상대방에게 도달시키는 모든 행위가 포함됩니다.',
      },
      {
        question: '공통 지인에게 안부를 전해달라고 부탁해도 되나요?',
        answer:
          '위험합니다. <strong>제3자를 통한 간접 접근도 스토킹행위</strong>에 해당할 수 있습니다. 불가피한 연락이 필요하다면 변호사를 통해 진행하세요.',
      },
      {
        question: '잠정조치가 내려지면 언제 풀리나요?',
        answer:
          '잠정조치는 <strong>최대 2개월</strong>이며, 정당한 이유가 있으면 연장됩니다. 조치 해제를 원하면 변호사를 통해 <strong>잠정조치 취소 신청</strong>을 할 수 있습니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/stalking',
    },
    internalLinks: [
      { label: '스토킹 법적 성립 기준', href: '/guide/stalking/stalking-legal-criteria' },
      { label: '스토킹 긴급보호조치', href: '/guide/stalking/stalking-emergency-protective-measures' },
      { label: '스토킹 처벌·접근금지 기준', href: '/guide/stalking/stalking-penalty-restraining-order' },
      { label: '헤어진 뒤 연락 스토킹 기준', href: '/guide/stalking/ex-contact-after-breakup-stalking' },
      { label: '스토킹 혐의 첫 대응', href: '/guide/stalking/stalking-accused-response' },
    ],
  },
];
