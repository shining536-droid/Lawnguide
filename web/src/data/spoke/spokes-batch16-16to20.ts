import { SpokePage } from '../spoke-pages';

export const spokesBatch16Pages16to20: SpokePage[] = [
  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-seizure-release-process',
    keyword: '파산 신청 시 압류 해제되는 재산과 절차',
    questionKeyword: '파산 신청하면 압류가 풀리나요?',
    ctaKeyword: '파산 압류 해제',
    type: '절차타임라인형',
    perspective: 'debtor',
    meta: {
      title: '파산 신청 후 압류 해제 절차 5단계 — 시기별 정리 | 로앤가이드',
      description:
        '월급도 통장도 압류당해서 생활이 불가능한 상황이라면, 파산 신청 후 압류가 해제되는 절차와 시기를 정확히 파악해야 합니다. 지금 확인하세요.',
    },
    intro:
      '통장에 들어오는 월급이 바로 빠져나갑니다. 채권자의 압류 통지가 쌓이고, 카드도 안 되고, 생활비조차 쓸 수 없는 상황입니다. 파산을 신청하면 이 압류가 풀리는지, 언제 풀리는지 궁금하실 겁니다. 파산 신청부터 압류 해제까지의 절차를 단계별로 정리해 드리겠습니다.',
    timelineSteps: [
      '파산 신청서 접수',
      '중지명령·금지명령 신청',
      '파산 선고 결정',
      '면책 신청',
      '면책 결정 확정 후 압류 해제',
    ],
    sections: [
      {
        title: '1단계: 파산 신청서를 법원에 접수하세요',
        content:
          '<p><strong style="color:#1e3a5f">파산 신청만으로 압류가 자동 해제되지는 않습니다</strong></p>\n<p>채무자 회생 및 파산에 관한 법률에 따라 지방법원에 <strong>파산 신청서</strong>를 접수합니다. 이때 채권자 목록, 재산 목록, 수입·지출 내역서를 함께 제출해야 합니다. 신청서 접수만으로는 기존 압류가 바로 풀리지 않으므로, 다음 단계를 가능한 한 진행해야 합니다.</p>\n<p>신청 시 <strong>인지대·송달료</strong>(약 3만~5만 원)가 필요하며, 법률구조공단(132)을 통해 무료 법률 지원을 받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 채권자 목록 작성 → 재산·수입 내역 정리 → 파산 신청서 접수</blockquote>',
      },
      {
        title: '2단계: 중지명령 또는 금지명령을 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">파산 선고 전에도 압류를 멈출 수 있는 방법이 있습니다</strong></p>\n<p>파산 신청 후 선고까지 보통 <strong>1~3개월</strong>이 걸립니다. 이 기간 동안 채권자의 강제집행이 계속되면 생활이 불가능하므로, 법원에 <strong>중지명령</strong>(채무자회생법 제323조) 또는 <strong>포괄적 금지명령</strong>(제324조)을 신청할 수 있습니다.</p>\n<p>중지명령은 특정 채권자의 집행을 멈추고, 포괄적 금지명령은 모든 채권자의 강제집행·가압류·가처분을 한꺼번에 금지합니다. 급여 압류가 진행 중이라면 <strong>포괄적 금지명령</strong>이 더 효과적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 중지명령(개별) vs 포괄적 금지명령(전체) → 상황에 맞게 선택</blockquote>',
      },
      {
        title: '3단계: 파산 선고가 나면 강제집행이 중지됩니다',
        content:
          '<p><strong style="color:#1e3a5f">파산 선고 시점에서 진행 중인 강제집행은 자동 중지됩니다</strong></p>\n<p><strong>채무자회생법 제348조</strong>에 따라 파산 선고가 나면 파산재단에 속하는 재산에 대한 <strong>강제집행·가압류·가처분은 효력을 잃습니다</strong>. 다만, 파산재단에 속하지 않는 자유재산(생활필수품, 급여의 일부 등)에 대해서는 별도 확인이 필요합니다.</p>\n<p>파산 선고 후에는 <strong>파산관재인</strong>이 선임되어 재산을 관리합니다. 채권자들은 더 이상 개별적으로 압류할 수 없고, 파산 절차 안에서만 배당받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">파산 선고 → 파산재단 재산에 대한 강제집행 효력 상실</blockquote>',
      },
      {
        title: '4단계: 면책 결정으로 채무가 소멸합니다',
        content:
          '<p><strong style="color:#1e3a5f">면책 결정이 확정되어야 압류의 근거인 채무 자체가 사라집니다</strong></p>\n<p>파산 선고 후 <strong>면책 신청</strong>을 하면, 법원은 심문 기일을 거쳐 면책 여부를 결정합니다. 면책 결정이 확정되면 <strong>파산채권에 대한 채무자의 책임이 면제</strong>됩니다(채무자회생법 제566조). 이때 압류의 원인이 된 채무가 소멸하므로, 관련 압류도 해제 절차를 밟을 수 있습니다.</p>\n<p>다만, <strong>세금·벌금·양육비·악의적 불법행위 손해배상</strong> 등 비면책채권은 면책 대상에서 제외됩니다. 이 부분의 압류는 면책 후에도 유지될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">면책 확정 → 파산채권 소멸 → 해당 압류 해제 가능 | 비면책채권은 예외</blockquote>',
      },
      {
        title: '5단계: 압류 해제를 위한 실무 절차를 진행하세요',
        content:
          '<p><strong style="color:#1e3a5f">면책 결정문을 받아 압류를 실제로 풀어야 합니다</strong></p>\n<p>면책 결정이 확정되면 <strong>면책 결정문</strong>을 발급받아 압류를 실시한 기관(은행, 법원, 급여 지급처 등)에 제출합니다. 급여 압류의 경우 <strong>집행법원에 강제집행 취소 신청</strong>을 하고, 통장 압류의 경우 <strong>은행에 면책 결정문을 제출</strong>하여 해제를 요청합니다.</p>\n<p>채권자가 채무불이행자명부 등재를 신청한 경우에도, 면책 결정 확정 후 <strong>등재 말소 신청</strong>이 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">면책 결정문 발급 → 집행법원·은행에 해제 신청 → 채무불이행자명부 말소</blockquote>',
      },
    ],
    cases: [
      {
        title:
          '면책 결정 후 채무불이행자명부 등재가 기각된 사례 (대법원 2025마7576)',
        summary:
          '대법원 2025마7576 사건(2026.01.09 선고)에서 법원은 채무자에 대한 면책결정이 확정되면 민사집행법상 "채무가 소멸한 경우"에 준한다고 판시했습니다. 따라서 면책 후 채무불이행자명부 등재신청은 정당한 이유가 없어 기각해야 한다고 보았습니다.',
        takeaway:
          '면책 결정이 확정되면 채무불이행자명부 등재도 막을 수 있습니다. 면책 결정문을 빠르게 확보하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '파산 신청하면 월급 압류가 바로 풀리나요?',
        answer:
          '신청만으로는 바로 풀리지 않습니다. <strong>중지명령이나 포괄적 금지명령</strong>을 별도로 신청해야 하며, 파산 선고 후 자동 중지됩니다.',
      },
      {
        question: '압류가 풀릴 때까지 얼마나 걸리나요?',
        answer:
          '파산 신청부터 면책 확정까지 보통 <strong>6개월~1년</strong>입니다. 중지명령을 신청하면 <strong>1~2주 내</strong>에 임시 중지가 가능합니다.',
      },
      {
        question: '자유재산이란 무엇인가요?',
        answer:
          '파산 선고 후에도 채무자가 보유할 수 있는 재산입니다. <strong>6개월간 생계비</strong>에 해당하는 금액, 생활필수품 등이 포함됩니다.',
      },
      {
        question: '세금 체납으로 인한 압류도 풀리나요?',
        answer:
          '세금은 <strong>비면책채권</strong>이므로 면책 결정 후에도 압류가 유지될 수 있습니다. 별도로 체납처분 유예를 신청해야 합니다.',
      },
      {
        question: '파산 신청 비용은 얼마인가요?',
        answer:
          '인지대·송달료 등 약 <strong>3만~5만 원</strong>이며, 기초생활수급자 등은 <strong>대한법률구조공단</strong>(132)에서 무료 지원을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '내 상황에서 압류 해제가 가능한지 확인해보세요',
      link: '/diagnosis/bankruptcy',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '파산·면책 진단', href: '/diagnosis/bankruptcy' },
      {
        label: '파산 신청부터 면책까지 전체 절차',
        href: '/guide/bankruptcy/application-to-discharge-full-procedure',
      },
      {
        label: '파산 면책 조건과 준비사항',
        href: '/guide/bankruptcy/bankruptcy-fresh-start-requirements',
      },
      {
        label: '개인회생 vs 파산 비교',
        href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy',
      },
      {
        label: '임금체불 신고 전에 준비할 서류',
        href: '/guide/wage/unpaid-wage-complaint-docs',
      },
    ],
  },
  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-credit-recovery-timeline',
    keyword: '파산 면책 후 신용회복 절차와 기간',
    questionKeyword: '파산 면책 받으면 신용은 언제 회복되나요?',
    ctaKeyword: '파산 후 신용회복',
    type: '수치기한형',
    perspective: 'debtor',
    meta: {
      title: '파산 면책 후 신용회복 3단계 — 기간·점수 기준 정리 | 로앤가이드',
      description:
        '면책 결정을 받았지만 신용등급이 바닥이라 걱정이시라면, 신용 회복까지의 기간과 단계별 절차를 정확히 알아야 합니다. 지금 확인하세요.',
    },
    intro:
      '면책 결정이 확정되었습니다. 빚에서는 벗어났지만 신용점수는 여전히 최저 수준입니다. 대출도 안 되고, 카드 발급도 거절됩니다. 면책 후 신용을 다시 쌓기까지 얼마나 걸리는지, 어떤 순서로 해야 하는지 단계별로 정리해 드리겠습니다.',
    timelineSteps: [
      '면책 확정 후 기록 정리',
      '신용회복위원회 상담',
      '신용 재건 활동 시작',
    ],
    sections: [
      {
        title: '면책 후 신용정보 등록 기간을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">면책 후에도 파산 기록은 일정 기간 남아 있습니다</strong></p>\n<p>신용정보법에 따라 파산·면책 정보는 <strong>면책 결정일로부터 5년간</strong> 신용정보원에 등록됩니다. 이 기간이 지나면 기록이 자동 삭제되며, 신용점수에 미치는 부정적 영향도 줄어듭니다.</p>\n<p>다만, 면책 직후부터 신용 재건 활동을 시작하면 <strong>등록 기간 중에도 점수를 점진적으로 올릴 수 있습니다</strong>. 아무것도 하지 않고 5년을 기다리는 것은 비효율적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">파산·면책 기록 등록: 면책 확정일로부터 5년 | 기간 중에도 신용 재건 가능</blockquote>',
      },
      {
        title: '신용회복위원회를 통해 채무 정리를 마무리하세요',
        content:
          '<p><strong style="color:#1e3a5f">잔존 채무가 있다면 신용회복위원회의 지원을 받으세요</strong></p>\n<p>면책으로 소멸되지 않은 비면책채권(세금, 벌금, 양육비 등)이 있거나, 면책 전 연체 기록이 남아 있다면 <strong>신용회복위원회</strong>(1600-5500)에 상담을 신청하세요.</p>\n<p>신용회복위원회에서는 <strong>신용회복지원 프로그램</strong>을 운영하고 있으며, 소액 채무 감면, 분할 상환 약정 등을 지원받을 수 있습니다. 프로그램 이수 후에는 <strong>채무조정 완료 확인서</strong>를 발급받아 신용정보 갱신에 활용하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신용회복위원회 1600-5500 | 채무조정·감면 프로그램 → 완료 확인서 발급</blockquote>',
      },
      {
        title: '신용 재건 활동을 시작하세요',
        content:
          '<p><strong style="color:#1e3a5f">소액 결제 이력과 공과금 정상 납부가 신용 회복의 핵심입니다</strong></p>\n<p>면책 후 신용을 빠르게 올리려면 <strong>정상적인 금융 거래 이력</strong>을 만들어야 합니다. 체크카드를 발급받아 꾸준히 사용하고, 통신비·공과금을 <strong>자동이체</strong>로 설정하여 연체 없이 납부하세요.</p>\n<p>면책 후 <strong>1~2년</strong>이 지나면 일부 금융기관에서 <strong>소액 신용대출</strong>이나 <strong>신용카드 발급</strong>이 가능해질 수 있습니다. 서민금융진흥원의 <strong>햇살론</strong> 등 정책 금융상품도 검토해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크카드 사용 + 공과금 자동이체 → 1~2년 후 신용대출 가능성 | 햇살론 검토</blockquote>',
      },
      {
        title: '신용점수 회복 목표 시점과 수치를 알아두세요',
        content:
          '<p><strong style="color:#1e3a5f">면책 후 신용점수 회복에는 보통 3~5년이 소요됩니다</strong></p>\n<p>일반적으로 면책 직후 신용점수는 <strong>300~400점대</strong>(NICE 기준 1,000점 만점)입니다. 신용 재건 활동을 꾸준히 하면 <strong>1년 후 500점대, 2~3년 후 600점대, 5년 후 700점대</strong> 회복이 가능합니다.</p>\n<p><strong>NICE(나이스평가정보)</strong>와 <strong>KCB(올크레딧)</strong>에서 무료로 본인 신용점수를 확인할 수 있습니다. 매월 점수 변화를 확인하며 관리하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">면책 직후 300~400점 → 1년 후 500점대 → 3년 후 600점대 → 5년 후 700점대</blockquote>',
      },
    ],
    cases: [
      {
        title:
          '면책 확정 후 채무불이행자명부 등재를 기각한 사례 (대법원 2025마7576)',
        summary:
          '대법원 2025마7576 사건(2026.01.09 선고)에서 법원은 면책결정의 확정은 "채무가 소멸한 경우"에 준한다고 판시하면서, 면책 후 채무불이행자명부 등재신청을 기각해야 한다고 했습니다. 이는 면책 후 신용 회복의 법적 근거가 됩니다.',
        takeaway:
          '면책 결정이 확정되면 채무불이행자명부에서도 이름을 말소할 수 있으므로, 면책 결정문을 가능한 한 보관하세요.',
      },
    ],
    faq: [
      {
        question: '면책 후 신용카드를 다시 만들 수 있나요?',
        answer:
          '면책 직후에는 어렵지만, <strong>1~2년 후</strong> 체크카드 사용 이력 등이 쌓이면 일부 카드사에서 발급이 가능해집니다.',
      },
      {
        question: '파산 기록은 언제 삭제되나요?',
        answer:
          '면책 결정 확정일로부터 <strong>5년</strong>이 지나면 신용정보원에서 자동 삭제됩니다.',
      },
      {
        question: '면책 후 대출은 언제부터 가능한가요?',
        answer:
          '서민금융상품(햇살론 등)은 비교적 빠르게 이용 가능하며, 일반 금융기관 대출은 <strong>2~3년 후</strong>부터 검토 가능합니다.',
      },
      {
        question: '채무불이행자명부에서 이름을 말소하려면?',
        answer:
          '면책 결정문을 첨부하여 해당 법원에 <strong>말소 신청</strong>을 하면 됩니다.',
      },
      {
        question: '신용점수를 무료로 확인하는 방법은?',
        answer:
          '<strong>NICE(나이스평가정보)</strong> 앱이나 <strong>KCB(올크레딧)</strong> 앱에서 무료로 확인할 수 있습니다.',
      },
      {
        question: '면책 후 취업에 불이익이 있나요?',
        answer:
          '일반 기업 취업에는 영향이 없습니다. 다만 <strong>금융기관·공공기관</strong> 일부 직종에서는 신용 조회를 할 수 있으므로 사전 확인이 필요합니다.',
      },
    ],
    cta: {
      text: '면책 후 신용 회복 계획을 세워보세요',
      link: '/diagnosis/bankruptcy',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '파산·면책 진단', href: '/diagnosis/bankruptcy' },
      {
        label: '파산 신청 후 압류 해제 절차',
        href: '/guide/bankruptcy/bankruptcy-seizure-release-process',
      },
      {
        label: '파산 면책까지 전체 절차 정리',
        href: '/guide/bankruptcy/application-to-discharge-full-procedure',
      },
      {
        label: '개인회생 신청 조건과 절차',
        href: '/guide/rehabilitation/personal-rehabilitation-eligibility',
      },
      {
        label: '퇴직금 안 줄 때 신고 방법',
        href: '/guide/retirement/retirement-pay-complaint',
      },
    ],
  },
  {
    domain: 'drug-crime',
    slug: 'drug-self-report-sentencing-reduction',
    keyword: '마약 자수 시 처벌 감경 범위와 절차',
    questionKeyword: '마약을 자수하면 처벌이 줄어드나요?',
    ctaKeyword: '마약 자수 감경',
    type: '상황형',
    perspective: 'offender',
    meta: {
      title: '마약 자수 시 처벌 감경 3가지 핵심 — 형량 50% 감경 가능 | 로앤가이드',
      description:
        '마약 사용 사실을 자수하려는데 실제로 형량이 줄어드는지 불안하다면, 자수의 법적 효과와 감경 범위를 먼저 파악하세요. 지금 확인하세요.',
    },
    intro:
      '마약을 사용한 사실이 있습니다. 수사기관에 발각되기 전에 스스로 자수하려고 합니다. 하지만 자수하면 정말 처벌이 줄어드는지, 어떤 절차로 해야 하는지 막막합니다. 자수의 법적 효과와 감경 범위, 실무 절차를 정리해 드리겠습니다.',
    timelineSteps: ['자수 결심과 준비', '수사기관 자진 출석', '감경 적용과 처분'],
    sections: [
      {
        title: '자수의 법적 의미와 성립 요건을 알아두세요',
        content:
          '<p><strong style="color:#1e3a5f">자수란 수사기관에 자발적으로 범죄 사실을 신고하는 것입니다</strong></p>\n<p><strong>형법 제52조 제1항</strong>에 따르면, 자수는 범인이 자발적으로 자신의 범죄사실을 수사기관에 신고하여 그 소추를 구하는 의사표시입니다. 자수가 인정되면 법원은 <strong>형을 감경할 수 있습니다</strong>(임의적 감경).</p>\n<p>자수가 성립하려면 <strong>수사기관이 범죄 사실을 인지하기 전</strong>에 자진 신고해야 합니다. 이미 수사가 시작된 후라면 자수가 아닌 <strong>자백</strong>으로 처리되어 감경 폭이 달라질 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">자수 요건: ① 자발적 신고 ② 수사기관 인지 전 ③ 소추 구하는 의사 표시</blockquote>',
      },
      {
        title: '자수 시 구체적인 감경 범위를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">자수가 인정되면 법정형의 절반까지 감경이 가능합니다</strong></p>\n<p><strong>형법 제53조·제55조</strong>에 의해 자수 감경이 적용되면 법정형의 <strong>2분의 1까지 감경</strong>할 수 있습니다. 마약류관리법상 단순 투약죄(향정신성의약품)의 경우 법정형은 <strong>10년 이하 징역</strong>이므로, 자수 감경 시 <strong>5년 이하</strong>로 낮아질 수 있습니다.</p>\n<p>초범이면서 자수한 경우, 실무상 <strong>집행유예</strong> 선고 가능성이 높아집니다. 다만 <strong>마약 밀매·제조</strong> 등 가중처벌 대상은 감경 폭이 제한적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">자수 감경: 법정형의 1/2 감경 가능 | 초범+자수 → 집행유예 가능성 증가</blockquote>',
      },
      {
        title: '자수 전에 변호사 상담을 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">자수 방법과 진술 내용에 따라 결과가 달라집니다</strong></p>\n<p>자수하기 전에 <strong>마약 전문 변호사</strong>와 상담을 받는 것이 매우 중요합니다. 진술 내용, 자수 시기, 증거 제출 범위 등을 사전에 정리해야 불필요한 혐의 확대를 막을 수 있습니다.</p>\n<p>자수 시에는 <strong>경찰서 또는 검찰청</strong>에 직접 출석합니다. 자수 조서가 작성되며, 이 조서가 향후 재판에서 자수 사실의 증거가 됩니다. 변호사 동행이 가능하며, <strong>진술거부권</strong>도 보장됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">자수 전 필수: 변호사 상담 → 진술 범위 정리 → 경찰서/검찰 출석</blockquote>',
      },
      {
        title: '자수 후 치료보호 프로그램도 활용하세요',
        content:
          '<p><strong style="color:#1e3a5f">치료보호 참여는 추가 감경 사유가 됩니다</strong></p>\n<p><strong>마약류관리법 제40조</strong>에 따라 마약류 사용자는 <strong>치료보호</strong>를 받을 수 있습니다. 자수 후 자발적으로 치료 프로그램에 참여하면, 재판에서 <strong>반성의 정도·재범 방지 의지</strong>를 보여주는 유리한 양형 자료가 됩니다.</p>\n<p><strong>한국마약퇴치운동본부</strong>(1899-0893)에서 무료 상담과 치료 연계를 받을 수 있습니다. 치료 프로그램 참여 확인서는 재판에서 제출할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">한국마약퇴치운동본부 1899-0893 | 치료 참여 확인서 → 양형 자료 활용</blockquote>',
      },
    ],
    cases: [
      {
        title: '자수 성립 후 범행 부인해도 자수 효력이 유지된 사례 (대법원 99도1695)',
        summary:
          '대법원 99도1695 사건(1999.07.09 선고)에서 법원은 "자수란 범인이 자발적으로 자신의 범죄사실을 수사기관에 신고하여 소추를 구하는 의사표시"라고 정의하면서, 일단 자수가 성립하면 이후 범행을 부인하더라도 자수의 효력은 소멸하지 않는다고 판시했습니다.',
        takeaway:
          '자수 후 재판에서 일부 사실관계를 다투더라도 자수 감경의 효력은 유지됩니다. 자수 시점의 조서 작성이 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '이미 수사가 시작된 후에도 자수가 되나요?',
        answer:
          '수사기관이 이미 범죄 사실을 <strong>인지한 후</strong>라면 자수가 아닌 자백으로 처리됩니다. 다만 자백도 양형에서 유리하게 작용합니다.',
      },
      {
        question: '자수하면 바로 구속되나요?',
        answer:
          '자수했다고 가능한 한 구속되는 것은 아닙니다. 초범이고 도주 우려가 없다면 <strong>불구속 수사</strong>로 진행될 가능성이 높습니다.',
      },
      {
        question: '자수 후 집행유예를 받을 가능성은?',
        answer:
          '초범+자수+치료 참여가 결합되면 <strong>집행유예</strong> 가능성이 상당히 높습니다. 다만 투약량과 횟수에 따라 달라집니다.',
      },
      {
        question: '자수하면 주변 사람도 조사받나요?',
        answer:
          '자수 진술 내용에 따라 관련자 조사가 이루어질 수 있습니다. <strong>변호사와 사전 상담</strong>으로 진술 범위를 정리하는 것이 중요합니다.',
      },
      {
        question: '마약 자수와 자진 치료의 차이는?',
        answer:
          '자수는 <strong>수사기관에 범죄 신고</strong>, 자진 치료는 <strong>의료기관에서 치료</strong>를 받는 것입니다. 둘 다 양형에 유리하지만, 법적 감경 효과는 자수가 더 큽니다.',
      },
    ],
    cta: {
      text: '자수 전 대응 전략을 먼저 확인해보세요',
      link: '/diagnosis/drug-crime',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '마약 사건 진단', href: '/diagnosis/drug-crime' },
      {
        label: '마약 수사 대응 가이드',
        href: '/guide/drug-crime/drug-investigation-response',
      },
      {
        label: '마약 초범 처벌 수위와 양형',
        href: '/guide/drug-crime/drug-crime-first-offense-sentencing',
      },
      {
        label: '소변검사 양성 반응 시 대응법',
        href: '/guide/drug-crime/positive-urine-test-response',
      },
      {
        label: '성범죄 혐의 초기 대응',
        href: '/guide/sex-crime/sex-crime-first-offense-response',
      },
    ],
  },
  {
    domain: 'neighbor-dispute',
    slug: 'neighbor-dispute-smell-pet-parking',
    keyword: '층간소음 외 이웃 분쟁 해결 — 악취·반려동물·주차',
    questionKeyword: '악취나 반려동물, 주차 문제로 이웃과 갈등이 있으면 어떻게 하나요?',
    ctaKeyword: '이웃 분쟁 해결',
    type: '상황형',
    meta: {
      title: '악취·반려동물·주차 이웃 분쟁 해결 4가지 방법 | 로앤가이드',
      description:
        '옆집 악취, 반려동물 소음, 주차 갈등으로 스트레스를 받고 있다면 법적 대응 방법과 실전 해결 절차를 먼저 파악하세요. 지금 확인하세요.',
    },
    intro:
      '층간소음만 이웃 갈등이 아닙니다. 옆집에서 나는 음식물 악취, 복도에 풀어놓은 대형견의 짖는 소리, 내 주차 자리에 매번 주차하는 차량. 매일 마주쳐야 하는 사이라 직접 말하기도 어렵습니다. 악취·반려동물·주차 분쟁의 구체적인 해결 방법을 정리해 드리겠습니다.',
    sections: [
      {
        title: '악취 분쟁: 관리사무소 신고와 환경 민원을 활용하세요',
        content:
          '<p><strong style="color:#1e3a5f">공동주택 악취는 관리규약 위반으로 조치가 가능합니다</strong></p>\n<p><strong>공동주택관리법 시행령 제19조</strong>에 따라 입주자는 악취를 발생시켜 다른 입주자의 생활에 피해를 주어서는 안 됩니다. 먼저 <strong>관리사무소</strong>에 서면으로 민원을 접수하세요. 관리사무소는 해당 세대에 시정 조치를 요구할 의무가 있습니다.</p>\n<p>관리사무소 조치로 해결되지 않으면 <strong>지자체 환경과</strong>에 악취 민원을 신청할 수 있습니다. 심한 경우 <strong>민법 제217조(생활방해 금지)</strong>에 따라 손해배상 청구도 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">악취 대응: 관리사무소 서면 신고 → 지자체 환경과 민원 → 민법 제217조 손해배상</blockquote>',
      },
      {
        title: '반려동물 분쟁: 소음·위생·안전 각각 다르게 대응하세요',
        content:
          '<p><strong style="color:#1e3a5f">반려동물 관련 분쟁은 유형에 따라 적용 법률이 다릅니다</strong></p>\n<p><strong>짖는 소리</strong>가 문제라면 층간소음과 마찬가지로 <strong>환경분쟁조정위원회</strong>에 조정을 신청할 수 있습니다. <strong>배설물·악취</strong>가 문제라면 관리사무소 신고와 지자체 민원이 효과적입니다.</p>\n<p>반려동물이 사람을 <strong>물거나 공격</strong>한 경우에는 <strong>동물보호법 제13조의2</strong>에 따라 관할 지자체에 신고하고, <strong>형사 고소</strong>(과실치상)와 <strong>민사 손해배상</strong>을 동시에 진행할 수 있습니다. 맹견의 경우 목줄·입마개 미착용 자체가 <strong>300만 원 이하 과태료</strong> 대상입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">짖는 소리 → 환경분쟁조정 | 물림 사고 → 형사 고소 + 민사 배상 | 맹견 미관리 → 과태료</blockquote>',
      },
      {
        title: '주차 분쟁: 관리규약과 법적 조치를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">공동주택 주차 문제는 관리규약이 1차 기준입니다</strong></p>\n<p>아파트·빌라의 주차 분쟁은 먼저 <strong>관리규약</strong>을 확인하세요. 대부분의 관리규약에는 주차 구역 배정, 방문차량 관리, 위반 시 조치 등이 규정되어 있습니다. 규약 위반 차량에 대해 관리사무소에 <strong>견인 조치</strong>를 요청할 수 있습니다.</p>\n<p>지정 주차구역에 반복적으로 무단 주차하는 경우, <strong>도로교통법 제32~34조</strong>에 따라 경찰에 신고할 수 있습니다(사유지 내부는 적용 제한). 주차 분쟁이 <strong>기물 파손</strong>이나 <strong>폭행</strong>으로 번지면 형사 사건이 되므로, 가능한 한 <strong>CCTV 영상과 사진</strong>을 확보하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주차 대응: 관리규약 확인 → 관리사무소 견인 요청 → 반복 시 경찰 신고</blockquote>',
      },
      {
        title: '분쟁이 심해지면 환경분쟁조정이나 민사소송을 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">대화로 해결이 안 되면 공식 분쟁 해결 절차를 이용하세요</strong></p>\n<p>이웃 분쟁이 장기화되면 <strong>환경분쟁조정위원회</strong>(02-2110-6565)에 조정을 신청할 수 있습니다. 조정은 <strong>수수료가 무료</strong>이며, 3개월 이내에 결과가 나옵니다. 조정이 성립하면 <strong>재판상 화해</strong>와 같은 효력이 있습니다.</p>\n<p>조정으로 해결이 안 되면 <strong>민사소송</strong>을 제기할 수 있습니다. <strong>민법 제217조(생활방해)</strong>와 <strong>제750조(불법행위)</strong>에 근거하여 손해배상과 행위 금지를 청구합니다. 소송 전에 피해 사실을 입증할 <strong>사진·동영상·일지</strong>를 확보하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">환경분쟁조정위원회 02-2110-6565 (무료) → 조정 불성립 시 민사소송</blockquote>',
      },
    ],
    cases: [
      {
        title:
          '반복적 소음 발생이 스토킹범죄로 인정된 사례 (대법원 2023도10313)',
        summary:
          '대법원 2023도10313 사건(2023.12.14 선고)에서 법원은 아래층 주민이 수개월간 늦은 밤~새벽에 반복적으로 도구로 벽을 치는 등의 행위를 한 것이 "사회통념상 합리적 범위 내의 정당한 이유 있는 행위"가 아니라고 보고, 스토킹범죄에 해당한다고 판시했습니다.',
        takeaway:
          '이웃 갈등이 반복적·의도적 괴롭힘으로 발전하면 스토킹범죄로 처벌될 수 있습니다. 피해 일지를 꼼꼼히 작성하세요.',
      },
    ],
    faq: [
      {
        question: '옆집 담배 연기도 법적으로 문제가 되나요?',
        answer:
          '공동주택 내 <strong>간접흡연 피해</strong>는 관리사무소에 민원을 넣을 수 있고, 지자체 조례에 따라 <strong>금연구역 지정</strong>을 요청할 수 있습니다.',
      },
      {
        question: '반려동물 짖는 소리로 경찰 신고가 되나요?',
        answer:
          '심야 시간대 반복적 소음은 <strong>경범죄처벌법</strong>상 인근소란 행위로 신고할 수 있습니다. 관리사무소 민원이 우선입니다.',
      },
      {
        question: '주차 자리에 차를 대놓고 연락이 안 되면?',
        answer:
          '관리사무소에 <strong>견인 조치</strong>를 요청하세요. 공동주택 관리규약에 따라 견인 비용은 위반 차량 소유주가 부담합니다.',
      },
      {
        question: '이웃에게 내용증명을 보내면 효과가 있나요?',
        answer:
          '<strong>내용증명</strong>은 법적 효력은 없지만, 향후 소송에서 <strong>시정을 요구한 증거</strong>로 활용할 수 있습니다.',
      },
      {
        question: '환경분쟁조정과 민사소송 중 어떤 것이 나은가요?',
        answer:
          '환경분쟁조정은 <strong>무료·신속(3개월)</strong>하고, 민사소송은 <strong>강제력이 더 강하지만 비용과 시간</strong>이 더 듭니다. 조정을 먼저 시도하는 것이 일반적입니다.',
      },
    ],
    cta: {
      text: '이웃 분쟁 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/neighbor-dispute',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '이웃 분쟁 진단', href: '/diagnosis/neighbor-dispute' },
      {
        label: '층간소음 분쟁 대응 가이드',
        href: '/guide/neighbor-dispute/floor-noise-dispute-response',
      },
      {
        label: '층간소음 신고부터 조정까지 절차',
        href: '/guide/neighbor-dispute/floor-noise-report-to-mediation-procedure',
      },
      {
        label: '소액사건 재판 가이드',
        href: '/guide/small-claims/small-claims-self-filing-guide',
      },
      {
        label: '스토킹 피해 증거 수집 방법',
        href: '/guide/stalking/stalking-evidence-collection-faq',
      },
    ],
  },
  {
    domain: 'retirement',
    slug: 'retirement-interim-settlement-guide',
    keyword: '퇴직금 중간정산 조건과 신청 방법',
    questionKeyword: '재직 중에 퇴직금을 미리 받을 수 있나요?',
    ctaKeyword: '퇴직금 중간정산',
    type: '수치기한형',
    meta: {
      title: '퇴직금 중간정산 6가지 사유와 신청 절차 | 로앤가이드',
      description:
        '재직 중 목돈이 필요해서 퇴직금을 미리 받고 싶다면, 중간정산이 가능한 사유와 회사에 신청하는 방법을 정확히 알아야 합니다. 지금 확인하세요.',
    },
    intro:
      '갑자기 큰돈이 필요합니다. 전세금을 올려줘야 하는데, 대출도 한도가 꽉 찼습니다. 재직 중인데 퇴직금을 미리 받을 수 있다는 이야기를 들었지만, 아무나 되는 건지, 어떤 조건이 필요한 건지 모르겠습니다. 퇴직금 중간정산의 조건과 신청 방법을 정리해 드리겠습니다.',
    timelineSteps: [
      '중간정산 사유 확인',
      '회사에 신청서 제출',
      '정산금 수령',
    ],
    sections: [
      {
        title: '퇴직금 중간정산이 가능한 6가지 사유를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">아무 이유로나 중간정산을 받을 수는 없습니다</strong></p>\n<p><strong>근로자퇴직급여 보장법 시행령 제3조</strong>에 따라 퇴직금 중간정산은 다음 사유에 해당할 때만 가능합니다.</p>\n<p><strong>① 무주택자의 주택 구입</strong><br/><strong>② 무주택자의 전세금 또는 보증금 부담</strong>(본인 명의 임차)<br/><strong>③ 6개월 이상 요양이 필요한 질병·부상</strong>(본인, 배우자, 부양가족)<br/><strong>④ 최근 5년 이내 파산 선고</strong><br/><strong>⑤ 최근 5년 이내 개인회생 인가</strong><br/><strong>⑥ 임금피크제로 임금이 줄어드는 경우</strong></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">중간정산 6가지 사유: 주택구입·전세보증금·장기요양·파산·개인회생·임금피크제</blockquote>',
      },
      {
        title: '중간정산 신청 시 필요한 서류를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">사유를 증명하는 서류가 가능한 한 필요합니다</strong></p>\n<p>주택 구입의 경우 <strong>매매계약서</strong>와 <strong>무주택 확인서</strong>(등기부등본)를, 전세금의 경우 <strong>임대차계약서</strong>와 <strong>무주택 확인서</strong>를 제출해야 합니다.</p>\n<p>질병·부상의 경우 <strong>진단서</strong>와 <strong>6개월 이상 요양 필요 소견서</strong>가 필요합니다. 파산·개인회생의 경우 <strong>법원 결정문 사본</strong>을 제출합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주택: 매매계약서+등기부등본 | 전세: 임대차계약서+무주택확인 | 질병: 진단서+소견서 | 파산: 결정문</blockquote>',
      },
      {
        title: '중간정산 금액 계산 방법을 알아두세요',
        content:
          '<p><strong style="color:#1e3a5f">중간정산금은 재직 기간에 비례하여 계산됩니다</strong></p>\n<p>퇴직금 중간정산 금액은 <strong>1일 평균임금 x 30일 x (재직일수/365)</strong>로 계산됩니다. 평균임금에는 기본급, 상여금, 수당 등 <strong>정기적으로 지급되는 임금</strong>이 포함됩니다.</p>\n<p>중간정산 후에는 <strong>재직 기간이 리셋</strong>됩니다. 이후 퇴직 시에는 중간정산 이후부터의 기간만으로 퇴직금이 계산되므로, 중간정산이 정말 유리한지 신중하게 판단해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">퇴직금 = 1일 평균임금 × 30일 × (재직일수÷365) | 중간정산 후 재직기간 리셋</blockquote>',
      },
      {
        title: '회사가 거부하면 대응 방법을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">중간정산은 사용자의 동의가 있어야 가능합니다</strong></p>\n<p><strong>근로자퇴직급여 보장법 제8조 제2항</strong>에 따르면 사용자는 근로자의 요구가 있는 경우 퇴직금을 미리 정산하여 지급<strong>할 수 있다</strong>고 규정하고 있습니다. 즉, 근로자의 요구만으로 사용자에게 <strong>지급 의무</strong>가 자동으로 발생하는 것은 아닙니다.</p>\n<p>다만, 단체협약이나 취업규칙에 중간정산 관련 규정이 있다면 회사는 이를 따를 의무가 있습니다. 회사가 부당하게 거부한다면 <strong>고용노동부</strong>(1350)에 상담을 받으세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">중간정산 = 사용자 동의 필요 | 취업규칙에 규정 있으면 의무 | 거부 시 고용노동부 1350</blockquote>',
      },
      {
        title: '중간정산 시 주의할 점을 꼭 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">중간정산은 퇴직 후 받을 금액에 영향을 줍니다</strong></p>\n<p>중간정산 후에는 <strong>퇴직금 산정을 위한 재직 기간이 초기화</strong>됩니다. 임금이 오르는 시기에 중간정산을 하면 나중에 퇴직금이 줄어들 수 있습니다. 반대로 <strong>임금피크제</strong>로 급여가 줄어들 예정이라면 정산 시점을 앞당기는 것이 유리합니다.</p>\n<p>또한 중간정산금에도 <strong>퇴직소득세</strong>가 부과됩니다. 다만, 근속연수에 따라 세금 공제가 적용되므로 세후 수령액을 미리 계산해보세요. 국세청 홈택스에서 <strong>퇴직소득 세액 계산기</strong>를 이용할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 재직기간 리셋 → 향후 퇴직금 감소 가능 | 퇴직소득세 발생 | 세액 계산기 활용</blockquote>',
      },
    ],
    cases: [
      {
        title:
          '중간정산 시 상여금 포함 여부가 다투어진 사례 (대법원 2016다228802)',
        summary:
          '대법원 2016다228802 사건(2018.08.30 선고)에서 법원은 퇴직금 중간정산 시 회사의 급여규정에서 퇴직금 산정 기초로 정한 평균임금에 가족수당과 상여금이 포함된다면, 근로자퇴직급여 보장법이 보장한 금액을 초과하더라도 이를 제외하고 산정하는 것은 허용될 수 없다고 판시했습니다.',
        takeaway:
          '중간정산 시 회사가 상여금이나 수당을 빼고 계산했다면, 급여규정을 확인하여 정당한 금액을 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '1년 미만 근무자도 중간정산이 가능한가요?',
        answer:
          '법적으로 퇴직금은 <strong>1년 이상 근무</strong>한 근로자에게 발생하므로, 1년 미만 근무자는 중간정산 대상이 아닙니다.',
      },
      {
        question: '중간정산을 여러 번 받을 수 있나요?',
        answer:
          '법정 사유에 해당하면 <strong>여러 번</strong> 받을 수 있습니다. 다만 회사 동의가 매번 필요합니다.',
      },
      {
        question: '퇴직연금(DC형)도 중간정산이 되나요?',
        answer:
          'DC형(확정기여형) 퇴직연금도 법정 사유에 해당하면 <strong>중도인출</strong>이 가능합니다. 운용사에 신청하세요.',
      },
      {
        question: '중간정산금에 세금이 붙나요?',
        answer:
          '네, <strong>퇴직소득세</strong>가 부과됩니다. 근속연수 공제가 적용되며, 홈택스에서 세액을 미리 계산할 수 있습니다.',
      },
      {
        question: '전세금 마련 목적이면 무주택 확인이 필요한가요?',
        answer:
          '네, <strong>무주택자</strong>여야 하며 본인 명의의 <strong>임대차계약서</strong>와 함께 등기부등본을 제출해야 합니다.',
      },
      {
        question: '중간정산 후 퇴직금이 줄어드나요?',
        answer:
          '네, 중간정산 시점 이후부터 재직 기간이 다시 시작되므로 <strong>최종 퇴직 시 받는 금액은 줄어듭니다</strong>.',
      },
    ],
    cta: {
      text: '퇴직금 중간정산이 가능한 상황인지 확인해보세요',
      link: '/diagnosis/retirement',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '퇴직금 진단', href: '/diagnosis/retirement' },
      {
        label: '퇴직금 안 줄 때 신고 방법',
        href: '/guide/retirement/retirement-pay-complaint',
      },
      {
        label: '퇴직금 정확히 계산하는 방법',
        href: '/guide/retirement/retirement-pay-calculation',
      },
      {
        label: '임금체불 신고 전 준비 서류',
        href: '/guide/wage/unpaid-wage-complaint-docs',
      },
      {
        label: '부당해고 즉시 대응 가이드',
        href: '/guide/dismissal/unfair-dismissal-first-steps',
      },
    ],
  },
];
