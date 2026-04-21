import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 15. 이 페이지는 [퇴직 예정 근로자]의 [퇴직금을 빠뜨림 없이 수령하고 싶은 상황]에서 [수령 전 체크리스트와 확인 사항 파악]을 돕는 페이지다.
// 16. 이 페이지는 [상가 임차인]의 [계약 해지를 원하지만 절차를 모르는 상황]에서 [해지 통지부터 보증금 반환까지 절차 파악]을 돕는 페이지다.
// 17. 이 페이지는 [상가 임차인]의 [권리금 회수 시기와 순서를 모르는 상황]에서 [회수 절차와 타임라인 파악]을 돕는 페이지다.
// 18. 이 페이지는 [상가 임차인]의 [임대인으로부터 임대료 인상 통보를 받은 상황]에서 [인상 한도 확인과 대응 방법 파악]을 돕는 페이지다.
// 19. 이 페이지는 [상가 임차인·예비 창업자]의 [상가임대차보호법 적용 여부가 불분명한 상황]에서 [적용 기준과 비적용 시 차이 비교]를 돕는 페이지다.
// 20. 이 페이지는 [상가 임차인·예비 창업자]의 [환산보증금 계산법을 모르는 상황]에서 [계산 공식과 지역별 적용 기준 파악]을 돕는 페이지다.
// 21. 이 페이지는 [과도한 채무를 진 개인]의 [개인회생 절차 전체를 처음부터 끝까지 알고 싶은 상황]에서 [신청부터 면책까지 A to Z 파악]을 돕는 페이지다.

export const spokesBatch21_15to21: SpokePage[] = [
  // ── 15. retirement / retirement-pay-receipt-checklist ──
  {
    domain: 'retirement',
    slug: 'retirement-pay-receipt-checklist',
    keyword: '퇴직금 수령 체크리스트',
    questionKeyword: '퇴직금을 빠뜨리지 않고 받으려면 무엇을 확인해야 하나요?',
    ctaKeyword: '퇴직금 수령 확인',
    type: '체크리스트형',
    perspective: '행동형',
    meta: {
      title: '퇴직금 수령 전 반드시 확인할 7가지 | 로앤가이드',
      description: '퇴직금을 제대로 다 받을 수 있을지 불안하다면, 수령 전 반드시 확인해야 할 7가지 체크리스트를 지금 확인하세요.',
    },
    intro: '<p>퇴사 날짜가 정해졌는데, 회사에서 알려준 퇴직금 금액이 생각보다 적습니다. 인센티브는 포함되지 않은 것 같고, 중간정산 받은 부분도 어떻게 처리되는지 모르겠습니다. 퇴직금은 근로자퇴직급여보장법에 따라 14일 이내에 지급되어야 하며, 수령 전 정확한 금액 확인이 무엇보다 중요합니다. 빠뜨리기 쉬운 항목을 체크리스트로 정리했습니다.</p>',
    sections: [
      {
        title: '체크 1: 계속근로기간이 정확한지 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금은 계속근로기간 1년에 대해 30일분 이상의 평균임금으로 계산됩니다</strong></p>\n<p><strong>계속근로기간</strong>이란 입사일부터 퇴사일까지의 기간을 말합니다. 수습 기간, 휴직 기간(육아휴직·병가 등)도 원칙적으로 포함됩니다. 계약직에서 정규직으로 전환된 경우에도 <strong>최초 입사일부터 통산</strong>됩니다.</p>\n<p>회사가 제시한 근무 기간과 실제 입사일을 <strong>근로계약서, 4대보험 가입 이력</strong>과 대조해보세요. 1개월 차이만 나도 퇴직금 수십만원이 달라질 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 입사일~퇴사일 기간 → 4대보험 가입 이력으로 교차 검증</blockquote>',
      },
      {
        title: '체크 2: 평균임금에 포함되는 항목을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">퇴직일 이전 3개월간 지급된 임금 총액을 해당 기간의 일수로 나눈 것이 평균임금입니다</strong></p>\n<p>평균임금에는 기본급뿐 아니라 <strong>고정 수당(직책수당, 식대 등), 정기 상여금, 연차수당</strong>이 포함됩니다. 대법원 2021다248299 판결에서도 목표 인센티브처럼 계속적·정기적으로 지급되고 지급의무가 확정된 금품은 임금에 해당한다고 판시했습니다.</p>\n<p>반면 <strong>경영성과에 따른 특별 성과급, 경조사비, 실비 변상</strong> 등은 제외될 수 있습니다. 최근 3개월 급여명세서를 확인하여 각 항목이 빠짐없이 반영되었는지 대조하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">포함 항목: 기본급 + 고정수당 + 정기상여 + 연차수당 / 제외: 특별성과급·실비</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/retirement" style="color:#1565c0;font-weight:600">내 퇴직금 수령 상황 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '체크 3: 중간정산·퇴직연금 전환 이력을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">중간정산을 받았다면 해당 기간은 퇴직금 산정에서 제외됩니다</strong></p>\n<p>근로자퇴직급여보장법 제8조 제2항에 따라 <strong>주택 구입, 전세금 마련, 6개월 이상 요양</strong> 등의 사유로 중간정산이 가능합니다. 중간정산 후에는 그 시점부터 새롭게 근속연수가 계산되므로, 과거 중간정산 이력과 금액을 반드시 확인하세요.</p>\n<p>퇴직연금(DC형)에 가입된 경우 회사가 매년 불입한 금액이 퇴직금에 해당하므로, <strong>퇴직연금 운용 계좌의 적립금</strong>을 별도로 확인해야 합니다. DB형은 퇴사 시 회사가 일괄 정산합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">중간정산 이후 기간만 퇴직금 산정 / DC형은 적립금 별도 확인</blockquote>',
      },
      {
        title: '체크 4: 퇴직금 지급 기한과 지연이자를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금은 퇴직일로부터 14일 이내에 지급되어야 하며, 미지급 시 연 20% 지연이자가 발생합니다</strong></p>\n<p>근로기준법 제36조에 따라 퇴직 후 <strong>14일 이내</strong>에 임금과 퇴직금이 지급되어야 합니다. 당사자 간 합의가 있으면 기한을 연장할 수 있지만, 합의 없이 14일이 지나면 <strong>근로기준법 제37조에 따라 연 20%의 지연이자</strong>가 붙습니다.</p>\n<p>회사가 경영상 어려움을 이유로 지급을 미루더라도 근로자의 동의 없이는 유예할 수 없습니다. 미지급 시 <strong>고용노동부(1350)에 임금체불 진정</strong>을 넣을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">14일 초과 미지급 → 연 20% 지연이자 + 고용노동부 진정 가능</blockquote>',
      },
      {
        title: '체크 5: 퇴직소득세와 IRP 이체 여부를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금을 IRP 계좌로 이체하면 퇴직소득세가 이연되어 절세 효과를 얻을 수 있습니다</strong></p>\n<p>퇴직금을 일시금으로 수령하면 <strong>퇴직소득세</strong>가 원천징수됩니다. 근속연수에 따라 공제 금액이 달라지며, 장기근속자일수록 세부담이 줄어듭니다. 반면 <strong>IRP(개인형 퇴직연금) 계좌</strong>로 이체하면 실제 인출 시까지 과세가 이연되고, 연금 형태로 수령 시 퇴직소득세의 60~70%만 납부합니다.</p>\n<p>회사에 <strong>IRP 계좌번호를 미리 안내</strong>하여 퇴직금이 해당 계좌로 직접 입금되도록 하세요. 계좌 개설은 은행·증권사 앱에서 10분이면 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절세 핵심: IRP 이체 → 퇴직소득세 이연 → 연금 수령 시 30~40% 감면</blockquote>',
      },
    ],
    cases: [
      {
        title: '인센티브의 퇴직금 포함 여부에 관한 대법원 판결',
        summary:
          '대법원 2021다248299 사건(2026.01.29 선고)에서 법원은 사업부 성과 평가에 따라 상여기초금액에 연동하여 지급되는 "목표 인센티브"는 계속적·정기적으로 지급되고 사용자에게 지급의무가 있으며 근로제공과 밀접하게 관련된 것이므로 평균임금 산정의 기초가 되는 임금에 해당한다고 판시했습니다.',
        takeaway:
          '매월 또는 분기별 정기적으로 받는 인센티브가 퇴직금 계산에서 빠졌다면 회사에 재산정을 요구하세요. 경영성과 분배형 성과급과 구분하여 확인하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '수습 기간도 퇴직금 산정 기간에 포함되나요?',
        answer: '네, <strong>수습 기간도 계속근로기간에 포함</strong>됩니다. 수습 기간 중 근로를 제공한 이상 퇴직금 산정에서 제외할 수 없으며, 4대보험 가입일 기준으로 확인할 수 있습니다.',
      },
      {
        question: '퇴직금을 분할로 지급하겠다는 회사 제안에 응해야 하나요?',
        answer: '분할 지급 자체가 불법은 아니지만 <strong>근로자의 동의 없이 일방적으로 분할할 수는 없습니다</strong>. 합의하더라도 14일 이후 분에 대해서는 지연이자(연 20%) 청구 가능 여부를 확인하세요.',
      },
      {
        question: '퇴직연금 DC형인데 적립금이 퇴직금보다 적으면 어떻게 하나요?',
        answer: 'DC형에서는 회사가 <strong>연간 임금총액의 1/12 이상을 불입</strong>해야 합니다. 불입 금액이 부족하면 차액을 회사에 청구할 수 있으며, 운용 손실은 근로자가 부담하지만 불입 자체의 미달은 회사 책임입니다.',
      },
      {
        question: '1년 미만 근무했는데 퇴직금을 받을 수 있나요?',
        answer: '근로자퇴직급여보장법에 따라 <strong>계속근로기간이 1년 미만이면 퇴직금 지급 의무가 없습니다</strong>. 다만 취업규칙이나 근로계약서에 1년 미만 근무자에게도 퇴직금을 지급하기로 정했다면 그 약정에 따릅니다.',
      },
      {
        question: '퇴직금 소멸시효는 몇 년인가요?',
        answer: '퇴직금 청구권의 소멸시효는 <strong>퇴직일로부터 3년</strong>입니다(근로자퇴직급여보장법 제10조). 3년이 지나면 청구 자체가 어려워지므로, 미지급 퇴직금이 있다면 빠르게 행동하세요.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 퇴직금 정확히 받고 있는지 AI로 진단받기',
      link: '/diagnosis/retirement',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '퇴직금 진단', href: '/diagnosis/retirement' },
      { label: '퇴직금 계산 공식 가이드', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '퇴직금 14일 규정 상세', href: '/guide/retirement/retirement-pay-14day-rule-detail' },
      { label: '퇴직금 미지급 신고 절차', href: '/guide/retirement/unpaid-retirement-report-procedure' },
    ],
  },

  // ── 18. sangga / commercial-rent-increase-notification ──
  {
    domain: 'sangga',
    slug: 'commercial-rent-increase-notification',
    keyword: '상가 임대료 인상 통보 대응',
    questionKeyword: '상가 임대료 인상 통보를 받았는데 어떻게 대응해야 하나요?',
    ctaKeyword: '상가 임대료 인상 대응',
    type: '상황형',
    perspective: '행동형',
    meta: {
      title: '상가 임대료 인상 통보 시 확인할 3가지 | 로앤가이드',
      description: '상가 임대인이 갑자기 임대료 인상을 통보해서 당황하셨다면, 법적 인상 한도와 거부 방법 3가지를 지금 확인하세요.',
    },
    intro: '<p>갱신 시기가 다가오자 임대인에게서 연락이 왔습니다. "다음 계약부터 월세를 30% 올리겠다"는 통보입니다. 주변 시세가 올랐다고 하지만, 매출은 그대로인데 감당이 될지 걱정됩니다. 상가임대차보호법은 차임 인상률에 상한선을 두고 있으며, 임차인에게 이를 거부할 권리가 있습니다.</p>',
    sections: [
      {
        title: '첫째, 법정 인상 한도 5%를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">상가임대차보호법 제11조에 따라 차임 또는 보증금의 증액은 청구 당시 차임·보증금의 5%를 초과하지 못합니다</strong></p>\n<p>인상률 5% 상한은 <strong>차임과 보증금 각각에 적용</strong>됩니다. 예를 들어 월세 100만원이면 최대 105만원까지만 인상 가능합니다. 이 제한은 갱신 시뿐 아니라 <strong>계약 기간 중 증액 청구</strong>에도 적용됩니다.</p>\n<p>다만 5% 상한은 <strong>상가임대차보호법 적용 대상 상가</strong>(환산보증금 기준 이하)에만 적용됩니다. 환산보증금이 지역별 기준을 초과하면 증액 제한이 적용되지 않을 수 있으니 먼저 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">법정 상한: 기존 차임의 5% / 환산보증금 기준 초과 상가는 적용 제외 가능</blockquote>',
      },
      {
        title: '둘째, 인상 요구가 부당하면 서면으로 거부하세요',
        content:
          '<p><strong style="color:#1e3a5f">5%를 초과하는 인상 요구에는 법적으로 응할 의무가 없습니다</strong></p>\n<p>임대인이 5% 초과 인상을 요구하면 <strong>"상가임대차보호법 제11조에 따라 5% 초과 인상에 동의할 수 없다"</strong>는 내용을 내용증명으로 회신하세요. 구두 거부만으로는 증거가 남지 않습니다.</p>\n<p>임대인이 인상을 거부한다는 이유로 <strong>계약갱신을 거절</strong>하려 해도, 상가임대차보호법 제10조에 따라 10년까지 갱신요구권이 보장됩니다. 차임 인상에 응하지 않았다는 것만으로는 갱신 거절 사유가 되지 않습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">거부 방법: 내용증명으로 5% 초과 불가 통지 / 인상 거부 = 갱신 거절 사유 아님</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/sangga" style="color:#1565c0;font-weight:600">내 상가 임대료 인상 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 차임감액 청구도 가능한지 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">경제 사정의 변동으로 차임이 상당하지 않게 되면 임차인도 차임 감액을 청구할 수 있습니다</strong></p>\n<p>상가임대차보호법 제11조 제2항에 따라 <strong>조세, 공과금, 경제사정의 변동</strong> 등으로 차임이 상당하지 않게 된 경우 감액을 청구할 수 있습니다. 코로나19 당시 많은 임차인이 이 조항을 근거로 차임감액을 받았습니다.</p>\n<p>감액 청구는 <strong>내용증명으로 구체적 사유와 함께 요청</strong>하세요. 임대인이 거부하면 법원에 차임감액청구 소송을 제기할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">감액 사유: 경제사정 변동·세금 증가 / 내용증명으로 감액 요청 후 소송 가능</blockquote>',
      },
      {
        title: '넷째, 차임 분쟁 조정위원회를 활용하세요',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단 산하 상가건물임대차분쟁조정위원회에서 무료로 조정을 받을 수 있습니다</strong></p>\n<p>소송 전에 <strong>상가건물임대차분쟁조정위원회</strong>(전화: 132)에 조정을 신청할 수 있습니다. 조정이 성립하면 <strong>재판상 화해와 같은 효력</strong>이 발생하므로 별도 소송 없이 분쟁이 해결됩니다.</p>\n<p>조정 신청 시 <strong>임대차계약서, 차임 영수증, 인상 통보 문서</strong> 등을 준비하세요. 온라인(대한법률구조공단 홈페이지)으로도 신청 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">무료 조정: 132 전화 / 조정 성립 시 재판상 화해와 동일 효력</blockquote>',
      },
    ],
    cases: [
      {
        title: '특례기간 연체 차임과 변제충당에 관한 대법원 판결',
        summary:
          '대법원 2022다309337 사건(2023.04.13 선고)에서 법원은 코로나19 특례기간(2020.9.29~6개월)의 연체 차임은 계약갱신 거절사유 및 계약 해지사유에서 제외되며, 변제충당 시 특례기간의 연체 차임은 다른 연체 차임보다 후순위로 충당된다고 판시했습니다.',
        takeaway:
          '차임 연체가 있더라도 특례기간에 해당하는 부분이 있는지 확인하세요. 임대인이 이를 이유로 갱신 거절이나 해지를 주장하면 특례 규정을 근거로 반박할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '인상률 5% 제한은 매년 적용되나요?',
        answer: '5% 상한은 <strong>증액 청구 시마다 적용</strong>됩니다. 즉, 매 갱신 시 기존 차임의 5% 이내에서만 올릴 수 있으며, 이전에 인상하지 않았다고 해서 누적 인상분을 한꺼번에 청구할 수는 없습니다.',
      },
      {
        question: '보증금을 올리면서 월세도 함께 올릴 수 있나요?',
        answer: '보증금과 차임 각각에 <strong>5% 상한이 적용</strong>됩니다. 보증금 5% 인상 + 월세 5% 인상이 동시에 이루어질 수 있지만, 각각 5%를 초과할 수는 없습니다.',
      },
      {
        question: '환산보증금이 기준을 초과하면 어떻게 되나요?',
        answer: '환산보증금이 지역별 기준을 초과하면 <strong>차임 증액 5% 제한이 적용되지 않을 수 있습니다</strong>. 다만 계약갱신요구권(10년)과 권리금 보호는 환산보증금과 무관하게 적용되므로 별도로 확인하세요.',
      },
      {
        question: '임대인이 "시세에 맞춰야 한다"고 주장하면 어떻게 하나요?',
        answer: '주변 시세가 올랐더라도 <strong>법정 상한인 5%를 초과할 수 없습니다</strong>. 임대인의 시세 주장에 대해서는 "상가임대차보호법 제11조의 강행규정"을 근거로 거부하세요. 분쟁이 계속되면 조정위원회에 신청하세요.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 상가 임대료 인상 대응 전략 AI로 분석받기',
      link: '/diagnosis/sangga',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '상가임대차 진단', href: '/diagnosis/sangga' },
      { label: '상가 계약 해지 절차', href: '/guide/sangga/commercial-lease-termination-procedure' },
      { label: '상가임대차보호법 적용 비교', href: '/guide/sangga/commercial-lease-law-applicable-comparison' },
      { label: '상가 환산보증금 계산', href: '/guide/sangga/commercial-converted-deposit-calculation' },
    ],
  },

  // ── 20. sangga / commercial-converted-deposit-calculation ──
  {
    domain: 'sangga',
    slug: 'commercial-converted-deposit-calculation',
    keyword: '상가 환산보증금 계산 적용 기준',
    questionKeyword: '상가 환산보증금은 어떻게 계산하고 기준은 얼마인가요?',
    ctaKeyword: '상가 환산보증금 계산',
    type: '수치기한형',
    perspective: '정보형',
    meta: {
      title: '상가 환산보증금 계산법과 지역별 기준 4곳 | 로앤가이드',
      description: '상가 환산보증금이 기준을 넘는지 궁금하다면, 계산 공식과 지역별 기준금액 4곳을 비교하여 지금 확인하세요.',
    },
    intro: '<p>보증금 3억원에 월세 200만원인 상가를 계약하려고 합니다. 상가임대차보호법이 적용되는지 알아보려면 "환산보증금"을 계산해야 한다는데, 어떻게 하는 건지 모르겠습니다. 환산보증금은 보증금과 월세를 하나의 기준으로 통합한 수치이며, 이 금액이 지역별 기준 이하인지에 따라 법 적용 범위가 달라집니다.</p>',
    sections: [
      {
        title: '환산보증금 계산 공식',
        content:
          '<p><strong style="color:#1e3a5f">환산보증금 = 보증금 + (월 차임 × 100)</strong></p>\n<p>상가임대차보호법 시행령 제2조 제1항에 따라 환산보증금 산정 시 차임에 곱하는 비율은 <strong>100</strong>입니다. 예를 들어 보증금 3억원, 월세 200만원이면: <strong>3억 + (200만 × 100) = 5억원</strong>이 환산보증금입니다.</p>\n<p>관리비 중 <strong>실비 정산분(전기·수도·가스)</strong>은 차임에 포함되지 않지만, 관리비 명목으로 지급하는 금액이 사실상 차임에 해당하면 포함될 수 있습니다. 계약서상 차임과 관리비가 구분되어 있는지 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">공식: 보증금 + (월세 × 100) / 실비 관리비는 제외, 사실상 차임은 포함</blockquote>',
      },
      {
        title: '지역별 환산보증금 기준금액 (2024년 기준)',
        content:
          '<p><strong style="color:#1e3a5f">환산보증금이 아래 기준 이하이면 상가임대차보호법이 전면 적용됩니다</strong></p>\n<table style="width:100%;border-collapse:collapse;margin:12px 0">\n<thead><tr style="background:#f0f4f8"><th style="padding:10px;border:1px solid #ddd;text-align:left">지역</th><th style="padding:10px;border:1px solid #ddd;text-align:right">기준금액</th></tr></thead>\n<tbody>\n<tr><td style="padding:10px;border:1px solid #ddd">서울특별시</td><td style="padding:10px;border:1px solid #ddd;text-align:right"><strong>9억원</strong></td></tr>\n<tr><td style="padding:10px;border:1px solid #ddd">수도권 과밀억제권역</td><td style="padding:10px;border:1px solid #ddd;text-align:right"><strong>6억 9천만원</strong></td></tr>\n<tr><td style="padding:10px;border:1px solid #ddd">광역시(군 지역 제외)</td><td style="padding:10px;border:1px solid #ddd;text-align:right"><strong>5억 4천만원</strong></td></tr>\n<tr><td style="padding:10px;border:1px solid #ddd">그 외 지역</td><td style="padding:10px;border:1px solid #ddd;text-align:right"><strong>3억 7천만원</strong></td></tr>\n</tbody></table>\n<p>위 기준금액은 <strong>시행령 개정</strong>에 따라 변경될 수 있습니다. 계약 체결 시점의 기준을 적용하므로 최신 기준을 반드시 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">서울 9억 / 수도권 6.9억 / 광역시 5.4억 / 그 외 3.7억</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/sangga" style="color:#1565c0;font-weight:600">내 상가 환산보증금 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '환산보증금 초과 시에도 적용되는 보호 규정',
        content:
          '<p><strong style="color:#1e3a5f">환산보증금이 기준을 초과하더라도 계약갱신요구권과 권리금 보호는 적용됩니다</strong></p>\n<p>2018년 상가임대차보호법 개정으로 <strong>계약갱신요구권(10년)</strong>과 <strong>권리금 보호 규정</strong>은 환산보증금과 무관하게 모든 상가에 적용됩니다. 다만 <strong>차임 증감 5% 상한, 대항력·우선변제권, 소액임차인 최우선변제</strong>는 기준 이하 상가에만 적용됩니다.</p>\n<p>따라서 환산보증금 초과 상가라 하더라도 ①10년 갱신 보장 ②권리금 회수 보호는 받을 수 있으니, "법 적용이 안 된다"는 임대인의 말을 그대로 받아들이지 마세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">초과해도 적용: 갱신요구권(10년) + 권리금 보호 / 비적용: 5% 상한·최우선변제</blockquote>',
      },
      {
        title: '환산보증금 계산 시 주의사항 3가지',
        content:
          '<p><strong style="color:#1e3a5f">부가가치세, 관리비 성격, 보증금 전환 등에 따라 환산보증금이 달라질 수 있습니다</strong></p>\n<p>①<strong>부가가치세</strong>: 차임에 부가세가 포함된 경우 세전 금액을 기준으로 합니다. ②<strong>관리비</strong>: 실비(전기·수도·가스)가 아닌 관리비가 사실상 차임이면 환산보증금에 포함됩니다. ③<strong>보증금 일부를 월세로 전환</strong>한 경우 전환 후의 보증금과 월세를 기준으로 계산합니다.</p>\n<p>임대차 계약 체결 전 환산보증금을 정확히 계산하고, 기준 초과 여부에 따라 <strong>계약서에 보호 조항을 추가</strong>하는 것이 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 부가세 제외 기준 / 사실상 차임 성격의 관리비 포함 / 전환 후 기준 적용</blockquote>',
      },
    ],
    cases: [
      {
        title: '3기 차임 연체와 갱신거절 및 권리금 보호에 관한 대법원 판결',
        summary:
          '대법원 2020다263635 사건(2021.05.27 선고)에서 법원은 임차인이 임대차기간 중 3기 차임액에 이르도록 차임을 연체한 사실이 있으면, 갱신 요구 당시 연체액이 3기에 미달하더라도 임대인이 갱신을 거절할 수 있고, 이에 따라 권리금 회수기회 보호의무도 부담하지 않는다고 판시했습니다.',
        takeaway:
          '환산보증금과 무관하게 차임 연체가 누적되면 갱신요구권과 권리금 보호 모두 잃을 수 있습니다. 차임은 반드시 정기적으로 납부하세요.',
      },
    ],
    faq: [
      {
        question: '환산보증금 계산에 VAT(부가가치세)를 포함하나요?',
        answer: '환산보증금 계산 시 차임은 <strong>부가가치세 제외 금액</strong>이 원칙입니다. 다만 계약서에 VAT 포함/불포함이 명시되어 있지 않으면 분쟁 소지가 있으므로 계약 시 명확히 기재하세요.',
      },
      {
        question: '보증금만 있고 월세가 없으면 환산보증금은 얼마인가요?',
        answer: '월세가 0원이면 <strong>환산보증금 = 보증금 자체</strong>입니다. 보증금 5억원짜리 서울 상가라면 9억원 기준 이하이므로 상가임대차보호법이 전면 적용됩니다.',
      },
      {
        question: '과밀억제권역에 해당하는 지역은 어디인가요?',
        answer: '<strong>서울 전 지역, 인천 일부, 의정부, 구리, 남양주 일부, 하남, 고양, 수원, 성남, 안양, 부천, 광명, 과천, 의왕, 군포, 시흥</strong> 등이 해당됩니다. 정확한 목록은 수도권정비계획법 시행령 별표1을 확인하세요.',
      },
      {
        question: '환산보증금이 기준 경계에 걸리면 어떻게 판단하나요?',
        answer: '환산보증금이 기준금액과 <strong>정확히 같으면 기준 이하에 해당</strong>하여 전면 적용됩니다. "초과" 시에만 일부 규정이 적용 제외되므로, 경계 금액인 경우 전면 보호를 받습니다.',
      },
      {
        question: '계약 중간에 차임이 변경되면 환산보증금도 바뀌나요?',
        answer: '네, <strong>변경된 차임을 기준으로 환산보증금이 재산정</strong>됩니다. 차임이 인상되어 환산보증금이 기준을 초과하면 일부 보호 규정이 적용되지 않을 수 있으므로 인상 시 환산보증금을 다시 계산해보세요.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 내 상가 보호 범위 AI로 진단받기',
      link: '/diagnosis/sangga',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '상가임대차 진단', href: '/diagnosis/sangga' },
      { label: '상가임대차보호법 적용 비교', href: '/guide/sangga/commercial-lease-law-applicable-comparison' },
      { label: '상가 임대료 인상 대응', href: '/guide/sangga/commercial-rent-increase-notification' },
      { label: '상가 계약 해지 절차', href: '/guide/sangga/commercial-lease-termination-procedure' },
    ],
  },

];
