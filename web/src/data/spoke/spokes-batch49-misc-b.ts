import { SpokePage } from '../spoke-pages';

// batch49 misc-b 4개
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 개인회생 변제 진행 중 보너스·상여를 받게 된 채무자가 가용소득 변동 보고 의무와 변제계획 변경 가능성을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 개인사업을 폐업한 자영업자가 본인 명의 채무를 파산·면책으로 정리하려 할 때 신청 자격과 준비할 폐업 입증자료를 점검하도록 돕는 페이지다.
// 3. 이 페이지는 출퇴근 중 사고를 당했지만 경로 일탈·중단이 있어 산재 인정 여부가 모호한 근로자가 통상 출퇴근 인정 기준과 예외를 정리하도록 돕는 페이지다.
// 4. 이 페이지는 음주운전으로 면허 취소·정지 처분 통지를 받은 운전자가 처분일로부터 90일 행정심판 기한 안에 감경 사유와 자수·소명 자료를 정리하도록 돕는 페이지다.

export const spokesBatch49MiscB: SpokePage[] = [
  // ─── 1. rehabilitation / 변제 진행 중 보너스·상여 보고 ───
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-bonus-during-payment-reporting',
    keyword: '개인회생 진행 중 보너스 상여 보고',
    questionKeyword: '개인회생 변제 중에 회사에서 보너스를 받았는데 법원에 신고해야 하나요?',
    ctaKeyword: '가용소득 변동 보고 정리',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '개인회생 진행 중 보너스·상여 — 변제계획 영향과 보고 의무 | 로앤가이드',
      description:
        '개인회생 변제 중 보너스·성과급 수령 시 가용소득 변동 보고 의무와 변제계획 변경 가능성, 미보고 위험을 지금 확인하세요.',
    },
    intro:
      '<p>"변제계획 인가받고 매달 꾸준히 내고 있는데 이번에 회사에서 보너스가 나왔어요. 법원에 신고해야 한다는 말도 있고 안 해도 된다는 말도 있고 헷갈립니다"라는 상담이 종종 들어옵니다. 개인회생은 채무자의 가용소득 전액을 변제 재원으로 잡는 제도라(채무자 회생 및 파산에 관한 법률 제611조), 인가 후 소득이 늘면 변제계획 변경 검토 대상이 될 수 있습니다. 보고 의무를 어디까지로 보면 되는지, 보너스가 곧바로 변제재원이 되는지 핵심을 정리합니다.</p>',
    sections: [
      {
        title: 'Q. 인가된 변제계획 후 보너스도 가용소득에 포함되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 정기·반복적으로 받는 상여라면 가용소득 산정 시 이미 반영되어 있을 가능성이 큽니다. 비정기·일회성 보너스는 사정변경 사유에 해당할 수 있어 추가 검토가 필요합니다.</strong></p>\n<ul>\n<li><strong>정기 상여 — 신청 당시 이미 산입</strong> — 회생위원·법원이 가용소득을 산정할 때 직전 1년 평균 임금을 기초로 보는 것이 일반적입니다. 명절 상여·정기 성과급이 이미 평균에 포함되어 있다면 별도 보고 사유는 아닐 수 있습니다.</li>\n<li><strong>비정기·특별 보너스</strong> — 인가 당시 예측 어려운 큰 금액(예: 연봉의 30%를 초과하는 일회성 성과급)은 사정변경에 해당해 변제계획 변경 사유가 될 수 있습니다(법 제619조).</li>\n<li><strong>가용소득 산식</strong> — 월 평균소득에서 본인·부양가족 생계비(중위소득 60%)와 세금·4대보험을 차감한 금액. 보너스가 가산되면 가용소득 자체가 올라갑니다.</li>\n<li><strong>회생위원에 사전 문의 권장</strong> — 보너스 액수가 클수록 사후 분쟁이 생기기 쉬우니, 받기 전후 회생위원 또는 법원 셀프헬프데스크에 미리 문의하는 것이 안전합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "정기 ≠ 보고, 비정기 = 보고"라는 단순 공식은 위험합니다. 금액과 빈도, 인가 당시 산정 기초에 들어 있었는지를 함께 살펴야 합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보너스 수령 시 보고·변경 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단(KLAC) 안내 절차 기준으로 보면, 다음 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 수령 직후 자료 보관 (즉시)</strong> — 급여명세서·통장 입금내역·상여 지급 공문(있다면)을 그대로 보관합니다. 사후 보고 자료의 기초입니다.</li>\n<li><strong>2단계 — 변제계획 인가서 재확인 (1~3일)</strong> — 인가 당시 가용소득 산정에 정기 상여가 포함되어 있었는지 인가결정문·변제계획안에서 확인합니다.</li>\n<li><strong>3단계 — 회생위원 또는 셀프헬프데스크 문의 (1주)</strong> — 보너스 액수·성격을 설명하고 보고·변경 필요 여부를 사전 점검. 회생법원 셀프헬프데스크는 무료 상담 창구입니다.</li>\n<li><strong>4단계 — 변제계획 변경안 작성 (필요 시, 2~4주)</strong> — 사정변경이 인정되면 채무자가 직접 변경안 신청. 채권자도 변경 신청을 할 수 있습니다(법 제619조).</li>\n<li><strong>5단계 — 법원 인가·변경 결정 (1~3개월)</strong> — 인가 요건이 갖추어지면 법원의 변경 인가는 의무적이며 재량이 아닙니다(2015마95 판례 취지). 변경된 변제율로 잔여 변제기간 진행.</li>\n</ol>\n<p><strong>준비서류 핵심</strong></p>\n<ul>\n<li>최근 3개월 급여명세서 + 보너스 지급 명세서</li>\n<li>변제계획 인가결정문·변제계획안 사본</li>\n<li>통장 거래내역 (보너스 입금 확인)</li>\n<li>회사 발급 상여금 지급 사유서 (있는 경우)</li>\n<li>본인 신분증·인감증명서</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 변제계획 수립 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">보너스·상여 수령 시 보고 의무와 변제계획 변경 시점을 AI가 사례별로 안내해드립니다.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 보고하지 않으면 어떻게 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 사정변경에 해당하는 큰 보너스를 숨기면 면책결정 후 면책취소 사유가 될 수 있습니다.</strong></p>\n<ul>\n<li><strong>면책취소 사유</strong> — 채무자가 부정한 방법으로 면책을 받았다고 인정되면 채권자 또는 회생위원의 신청에 따라 면책취소 결정이 이루어질 수 있습니다(법 제627조).</li>\n<li><strong>채권자 변경 신청 가능</strong> — 채권자도 변제계획 변경을 신청할 수 있어, 누군가가 채무자의 보너스 수령을 알게 되면 절차가 채무자 의사와 무관하게 진행될 수 있습니다.</li>\n<li><strong>설명의무 위반 위험</strong> — 회생위원·관재인의 자료 제출 요구에 응하지 않으면 설명의무 위반으로 간주되어 면책 불허가 사유가 될 수 있습니다.</li>\n<li><strong>소액·정기 상여는 즉시 보고 의무 없음</strong> — 인가 당시 평균임금에 이미 반영된 명절 상여·연 1~2회 정기 성과급은 통상 즉시 보고 대상이 아닙니다(다만 회생위원 의견 확인 권장).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: "이 정도면 신고 안 해도 되겠지" 자체 판단보다 셀프헬프데스크 문의 한 번이 안전합니다.</blockquote>',
      },
      {
        title: '흔한 실수 — 보너스 처리에서 자주 보이는 함정',
        content:
          '<p><strong style="color:#1e3a5f">아래 3가지를 피하면 변제 진행이 한결 안정됩니다.</strong></p>\n<ul>\n<li><strong>보너스를 다른 계좌로 이체해 숨기기</strong> — 가족 계좌·타인 계좌 이체는 재산 은닉으로 평가될 수 있고, 면책 불허가·면책취소 사유가 됩니다. 받은 그대로 본인 계좌에 두는 것이 안전합니다.</li>\n<li><strong>"한 번뿐이니까" 자체 판단</strong> — 일회성이라도 변제 잔여기간을 통산해 큰 금액이면 사정변경 사유가 됩니다. 회생위원에게 미리 묻는 한 번이 사후 분쟁 수십 번을 막아줍니다.</li>\n<li><strong>변제 추가 납부 누락</strong> — 변경 인가 전이라도 회생위원과 협의해 임시 추가 납부를 권장하는 경우가 있습니다. 사후 정산보다 선납이 안전합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 무료 상담은 대한법률구조공단(132)·서울회생법원 셀프헬프데스크에서 받아보실 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 변제계획 변경안 인가는 법원의 재량이 아닌 의무',
        summary:
          '대법원 2015마95 사건(대법원, 2015.06.26 선고)에서 법원은 채무자 회생 및 파산에 관한 법률 제614조에 의한 인가요건이 갖추어진 변제계획안에 대한 법원의 인가는 재량이 아니라 의무적인 것이고, 이러한 법리는 변제계획의 변경안에 대한 법원의 인가의 경우에도 마찬가지라고 판시했습니다.',
        takeaway: '소득 변동으로 변제계획 변경 인가요건이 갖추어지면 법원은 재량으로 거부할 수 없으므로, 보너스로 인한 사정변경이 인정되면 변경 절차가 안정적으로 진행될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '명절마다 받는 상여도 매번 신고해야 하나요?',
        answer:
          '<strong>인가 당시 평균임금에 이미 산입된 정기 상여는 통상 별도 신고 대상이 아닙니다.</strong> 다만 처음 받는 상황이라면 회생위원에 한 번 확인해두는 것이 안전합니다.',
      },
      {
        question: '연봉의 30% 정도가 한 번에 들어왔어요. 어떻게 해야 하나요?',
        answer:
          '<strong>비정기·고액 보너스는 사정변경에 해당할 가능성이 큽니다.</strong> 회생위원과 변제계획 변경 가능성을 협의해 잔여 변제기간 동안 변제율을 상향 조정하는 방안을 검토할 수 있습니다.',
      },
      {
        question: '보너스로 일부 채권자에게 따로 갚아도 되나요?',
        answer:
          '<strong>특정 채권자에게 우선 변제하는 행위는 채권자 평등의 원칙에 어긋날 수 있습니다.</strong> 임의 변제 대신 변제계획 변경으로 전체 채권자에게 비율대로 분배되는 방식이 안전합니다.',
      },
      {
        question: '회생위원에게 어떻게 연락해야 하나요?',
        answer:
          '<strong>인가결정문에 회생위원 성함과 연락처가 기재되어 있습니다.</strong> 또는 관할 회생법원 셀프헬프데스크 또는 KLAC 132로 문의하면 절차 안내를 받을 수 있습니다.',
      },
      {
        question: '변제계획 변경하면 변제기간이 늘어나나요?',
        answer:
          '<strong>오히려 변제율이 올라가 잔여 변제기간이 짧아질 수 있습니다.</strong> 가용소득 증가는 통상 잔여 변제 총액을 빠르게 마치는 방향으로 변경됩니다.',
      },
    ],
    cta: { text: '변제계획 수립 순서, AI로 정리하기', link: '/chat?domain=rehabilitation' },
    internalLinks: [
      { label: '개인회생 변제계획 변경 사유', href: '/guide/rehabilitation/rehabilitation-payment-plan-modification' },
      { label: '가용소득 산정 기준', href: '/guide/rehabilitation/rehabilitation-disposable-income-calculation' },
      { label: '변제계획안 작성 포인트', href: '/guide/rehabilitation/rehabilitation-repayment-plan-writing' },
      { label: 'KLAC 법률구조 무료 지원', href: '/guide/rehabilitation/rehabilitation-klac-free-support' },
      { label: '개인회생 면책 절차', href: '/guide/rehabilitation/rehabilitation-discharge-procedure' },
    ],
  },

  // ─── 2. bankruptcy / 자영업 폐업 후 파산 면책 ───
  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-self-employed-closure-eligibility',
    keyword: '자영업 폐업 파산 면책 자격',
    questionKeyword: '카페를 폐업했는데 사업자대출과 카드빚이 너무 많아요. 개인파산이 가능한가요?',
    ctaKeyword: '자영업 폐업 파산 자격 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '개인파산 사업자 폐업 — 신청 자격과 면책 절차 | 로앤가이드',
      description:
        '자영업 폐업 후 사업자대출·카드 채무를 개인파산·면책으로 정리할 때 신청 자격과 폐업증명·면책 9~12개월 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"몇 년간 카페를 운영했는데 코로나·금리인상이 겹치면서 결국 폐업했어요. 사업자대출·카드론·임차보증금 정리하지 못한 채무가 한꺼번에 청구됩니다"라는 상담이 늘어나고 있습니다. 개인사업자라도 본인 명의의 채무는 개인파산 절차로 정리할 가능성이 있습니다(법인사업자는 별도 법인파산 절차). 폐업증명을 어떻게 확보하고, 면책까지 통상 9~12개월이 걸리는 흐름을 어떻게 준비하면 좋은지 정리합니다.</p>',
    sections: [
      {
        title: '자영업 폐업자 파산 — 신청 자격 핵심',
        content:
          '<p><strong style="color:#1e3a5f">개인사업자도 본인 명의 채무에 대해 개인파산 신청이 가능합니다. 다만 면책 단계에서 몇 가지 추가 점검이 필요합니다.</strong></p>\n<ul>\n<li><strong>지급불능 상태</strong> — 본인 자력으로 변제가 어려운 객관적 상태가 인정되면 신청 자격이 됩니다(채무자 회생 및 파산에 관한 법률 제305조).</li>\n<li><strong>법인사업자는 법인파산 별도</strong> — 주식회사·유한회사 명의 채무는 법인파산을 별도로 진행하고, 본인이 연대보증한 부분에 대해 개인파산을 검토하는 흐름이 일반적입니다.</li>\n<li><strong>폐업증명원 필수</strong> — 국세청 홈택스에서 발급받는 폐업사실증명원을 첨부합니다. 사업자등록증 폐업 일자, 마지막 부가가치세 신고분, 매출 자료 등을 함께 모아둡니다.</li>\n<li><strong>면책 불허가 사유 점검</strong> — 사기파산죄·과태파산죄(법 제650조·제651조) 사유가 있는지 사전 검토 필요. 신청 직전 재산 처분·은닉, 가공 매출, 도박성 차입 등이 의심되면 면책 불허가 위험이 높아집니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "사업자였으니 안 된다"는 잘못된 정보입니다. 본인 명의 채무는 개인파산 대상이며, 폐업이 명확할수록 절차가 깔끔합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 자영업 폐업 파산 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단(KLAC) 무료지원 절차 기준으로 보면, 다음 흐름으로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — KLAC 132 상담 + 폐업증명 발급 (1주)</strong> — 기준 중위소득 125% 이하면 변호사 비용 면제 검토. 홈택스에서 폐업사실증명원·부가세 신고내역 발급.</li>\n<li><strong>2단계 — 채권자·재산 자료 수집 (2~3주)</strong> — 사업자대출·카드론·캐피탈·세금체납·지인 차용금 모두 잔액 확인. 본인 명의 부동산·예금·자동차·임차보증금 정리.</li>\n<li><strong>3단계 — resu.klac.or.kr 신청서 자동작성 (1~2주)</strong> — 채권자목록·재산목록·진술서 작성. 폐업 경위·매출 감소·차입 사용처 진술이 핵심.</li>\n<li><strong>4단계 — 법원 파산선고 → 파산관재인 선임 (3~6개월)</strong> — 파산관재인이 재산 환가·배당 진행. 자동 중지 효과로 채권자 추심·압류 일시 차단.</li>\n<li><strong>5단계 — 면책 심리 → 면책 결정 (파산선고 후 통상 6~9개월, 합산 9~12개월)</strong> — 면책 불허가 사유가 없으면 면책 결정. 결정 확정 시 사업자대출·카드빚 등 일반 채무 책임 소멸.</li>\n</ol>\n<p><strong>준비서류 핵심</strong></p>\n<ul>\n<li>폐업사실증명원 (홈택스 발급)</li>\n<li>최근 3년 종합소득세·부가가치세 신고서</li>\n<li>사업자대출·카드 채무 잔액 청구서</li>\n<li>임차보증금 반환·미반환 자료 (있는 경우)</li>\n<li>본인 신분증·주민등록등본·가족관계증명서</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 파산 면책 가능성, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">자영업 폐업자 파산 신청 자격과 면책 9~12개월 흐름을 AI가 사례별로 안내해드립니다.</p>\n<a href="/chat?domain=bankruptcy" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '면책 불허가 위험 — 자영업자가 특히 점검할 포인트',
        content:
          '<p><strong style="color:#1e3a5f">자영업자 파산은 일반 근로자보다 면책 불허가 위험이 더 자주 다투어집니다. 아래 항목을 미리 점검하세요.</strong></p>\n<ul>\n<li><strong>매출 누락·가공 신고 의심</strong> — 신고 매출과 실제 입출금이 차이 나면 사기파산 의심. 카드매출·현금매출 자료를 객관적으로 정리해 신청서에 반영합니다.</li>\n<li><strong>폐업 직전 재산 처분</strong> — 사업장 비품·장비·차량을 헐값에 가족·지인에게 양도하면 사해행위·재산은닉으로 평가될 수 있습니다. 처분 사유와 시세 자료를 보관하세요.</li>\n<li><strong>장기 외상매출금·반환 임차보증금</strong> — 받지 못한 외상매출금·임차보증금은 회수 가능 재산으로 평가될 수 있어 누락 없이 기재. 회수 불능 사유도 함께 진술합니다.</li>\n<li><strong>도박·과소비 차입</strong> — 사업 운영 외 비목적 차입은 면책 불허가 사유에 해당할 수 있습니다(법 제564조). 사업 자금으로 사용한 자료를 모아두세요.</li>\n<li><strong>면책심문 성실 답변</strong> — 폐업 경위·차입 시기·자금 사용처를 시간 순으로 정리해두면 심문 답변이 일관됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 면책 불허가 위험이 의심되더라도 법 제564조 제2항의 재량면책 여지가 있습니다. 폐업 경위·생계 곤란·갱생 의지를 적극 진술하면 결과가 달라질 수 있습니다.</blockquote>',
      },
      {
        title: '흔한 실수 — 자영업자 파산 신청 시 자주 보이는 함정',
        content:
          '<p><strong style="color:#1e3a5f">아래 3가지를 피하면 면책까지의 9~12개월이 한결 안정됩니다.</strong></p>\n<ul>\n<li><strong>폐업 신고를 미루기</strong> — 매출이 거의 없는데 사업자등록을 유지하면 부가세·소득세 체납이 누적되고, 파산 신청 시 채무 정리가 복잡해집니다. 영업 종료 시점에 즉시 폐업 신고하세요.</li>\n<li><strong>세금·임금체불을 일반 채무로 오인</strong> — 조세·근로자 임금은 비면책채권에 해당하므로 면책 후에도 책임이 남습니다. 사전에 분리해 정리 전략을 세우는 것이 좋습니다.</li>\n<li><strong>연대보증 책임 누락</strong> — 법인사업자였다면 본인이 연대보증한 채무가 있을 수 있습니다. 보증채무·본인 채무를 분리해 신청서에 모두 기재해야 면책 효력이 미칩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 무료 상담은 대한법률구조공단(132)·서울회생법원 셀프헬프데스크에서 받아보실 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 면책불허가사유와 재량면책 판단 기준',
        summary:
          '대법원 2023마6319 사건(대법원, 2024.05.30 선고)에서 법원은 채무자 회생 및 파산에 관한 법률 제564조 제2항의 재량면책을 판단할 때 채무의 발생·증가 원인 등 채무자가 파산에 이르게 된 경위, 면책불허가사유에 해당하는 행위의 내용과 정도, 채무자의 경제적 재기 의욕과 갱생 필요성, 채권자 이의신청 사유 등을 고려해야 한다고 판시하면서, 자영업 폐업 후 가족 계좌 입금 사정만으로 면책불허가를 단정한 원심을 파기했습니다.',
        takeaway: '폐업 경위·생계 곤란이 명확하고 갱생 의지가 인정되면, 일부 형식적 의심 정황이 있어도 재량면책의 여지가 있다는 점에서 자영업자 파산 신청에 시사점이 큽니다.',
      },
    ],
    faq: [
      {
        question: '폐업 후 얼마 만에 파산을 신청할 수 있나요?',
        answer:
          '<strong>법정 대기기간은 없습니다.</strong> 폐업증명원이 발급되고 채권자·재산 자료가 모이면 곧바로 신청할 수 있습니다. 다만 폐업 직전 재산 처분 의심을 줄이려면 처분 자료를 함께 정리해두세요.',
      },
      {
        question: '사업자대출 보증인이 있는데 보증인은 어떻게 되나요?',
        answer:
          '<strong>본인 면책이 보증인의 보증채무에 자동으로 영향을 주지 않습니다.</strong> 보증인이 본인 명의로 별도 변제·구상 절차를 검토하게 되니 사전에 보증인과 상의가 필요합니다.',
      },
      {
        question: '체납 세금도 파산으로 정리되나요?',
        answer:
          '<strong>조세는 비면책채권이라 면책 후에도 남습니다.</strong> 다만 압류·체납처분 절차는 별도이고, 일부 세목은 결손처분·소멸시효로 정리될 수 있어 별도 검토가 필요합니다.',
      },
      {
        question: '면책까지 9~12개월이라는데 그 사이 추심은 어떻게 되나요?',
        answer:
          '<strong>파산선고 결정으로 자동 중지 효과가 생겨 채권자의 강제집행·추심이 일시 차단됩니다.</strong> 다만 신청 후 선고 전까지는 가압류 위험이 있어 보전처분을 함께 검토하기도 합니다.',
      },
      {
        question: '면책 후 다시 사업자등록을 낼 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 면책 자체가 사업자등록을 막지 않습니다. 다만 신용정보 등록 5년간은 신규 대출·카드 발급에 제약이 있을 수 있어 자력 운영 계획을 세워두는 것이 안전합니다.',
      },
    ],
    cta: { text: '파산 면책 가능성, AI로 점검하기', link: '/chat?domain=bankruptcy' },
    internalLinks: [
      { label: '개인파산 신청 자격 요건', href: '/guide/bankruptcy/bankruptcy-eligibility-requirements' },
      { label: '면책 불허가 사유 정리', href: '/guide/bankruptcy/bankruptcy-discharge-denial-reasons' },
      { label: 'KLAC 무료 파산 지원', href: '/guide/bankruptcy/bankruptcy-klac-free-support' },
      { label: '파산 vs 회생 선택 기준', href: '/guide/bankruptcy/bankruptcy-vs-rehabilitation-comparison' },
      { label: '파산 신청 후 신용 회복 흐름', href: '/guide/bankruptcy/bankruptcy-credit-recovery-after' },
    ],
  },

  // ─── 3. industrial-accident / 통상 출퇴근 경로 일탈·중단 ───
  {
    domain: 'industrial-accident',
    slug: 'industrial-accident-commute-route-deviation-cases',
    keyword: '산재 통상 출퇴근 경로 일탈 중단',
    questionKeyword: '퇴근길에 마트에 들렀다 사고가 났는데 출퇴근재해로 인정될까요?',
    ctaKeyword: '경로 일탈·중단 산재 인정 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '산재 통상 출퇴근 인정 — 경로 일탈·중단 판례 정리 | 로앤가이드',
      description:
        '산재보험법 제37조 통상 출퇴근재해 인정 기준과 일탈·중단의 예외 범위, 근로복지공단 신청 흐름을 지금 확인하세요.',
    },
    intro:
      '<p>"퇴근길에 어린이집에 들러서 아이를 데리고 집으로 가는 길에 사고가 났어요. 출퇴근 재해로 인정될까요?"라는 상담이 자주 들어옵니다. 산재보험법 제37조 제1항 제3호 나목은 통상적인 출퇴근 경로와 방법으로 발생한 사고를 출퇴근재해로 정하는데, 같은 조 제3항은 일탈·중단이 있으면 원칙적으로 출퇴근재해로 보지 않되 "일상생활에 필요한 행위로서 대통령령으로 정하는 사유"가 있는 경우는 예외로 둡니다. 어떤 일탈이 인정되고 어떤 일탈이 단절로 평가되는지 정리합니다.</p>',
    sections: [
      {
        title: '통상 출퇴근재해 인정 기준 — 어디까지가 인정 범위인가',
        content:
          '<p><strong style="color:#1e3a5f">산재보험법 제37조 제1항 제3호 나목 + 시행령 제35조 제2항이 핵심 기준입니다.</strong></p>\n<ul>\n<li><strong>통상적 경로·방법</strong> — 평소 이용하는 교통수단·도로를 사용했는지가 1차 기준. 우회로·대체 교통수단도 합리적 사유가 있으면 인정될 수 있습니다.</li>\n<li><strong>일탈·중단 시 원칙</strong> — 산재보험법 제37조 제3항. 일탈·중단 중 사고는 원칙적으로 출퇴근재해 아님.</li>\n<li><strong>예외 인정 사유 (시행령 제35조 제2항)</strong> — 일상생활에 필요한 행위로서 ① 일용품 구입 ② 직무·교육·훈련 수강 ③ 선거권 행사 ④ 진료 ⑤ 가족 돌봄(노부모·어린 자녀 등) 등 통상의 사유.</li>\n<li><strong>예외 사유에 해당하면 복귀 후 재해도 인정</strong> — 어린이집 픽업 후 다시 통상 경로로 복귀하면 그 시점부터 다시 출퇴근재해 인정 범위에 들어갑니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "마트·어린이집·진료" 같은 일상생활 필요행위는 일탈해도 예외로 보호. 회식·유흥·개인적 우회는 보호 범위 밖일 가능성이 큽니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 출퇴근재해 산재 신청 5단계',
        content:
          '<p><strong style="color:#1e3a5f">근로복지공단 공식 절차 기준으로 보면, 다음 흐름으로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고 직후 산재 지정 의료기관 방문 (즉시)</strong> — 산재 지정 병원에서 진료. 진단서·진료기록부에 사고 경위가 기록되도록 명시 요청.</li>\n<li><strong>2단계 — 사고 경위서 작성 (1주 내)</strong> — 출발지·도착지·시간·교통수단·경로·일탈 사유(있다면 가족 돌봄·진료 등)를 시간 순으로 구체적으로 적습니다.</li>\n<li><strong>3단계 — 증거 자료 확보 (72시간 내)</strong> — CCTV·블랙박스·휴대폰 위치기록·교통카드 이용내역·진료 영수증 등으로 일탈 사유를 객관적으로 입증.</li>\n<li><strong>4단계 — 근로복지공단 요양급여 신청 (사고일로부터 3년 내, 빠를수록 유리)</strong> — 사고 경위서·진단서·증거자료를 첨부해 관할 지사에 제출. 근로복지공단 1588-0075.</li>\n<li><strong>5단계 — 불승인 시 심사청구 (90일) → 재심사청구 (90일) → 행정소송 (90일)</strong> — 단계별 기한 엄수. 일탈 인정 여부가 쟁점이라면 변호사·노무사 도움을 검토해볼 수 있습니다.</li>\n</ol>\n<p><strong>준비서류 핵심</strong></p>\n<ul>\n<li>사고 경위서 (출발지·시간·경로·일탈 사유 명시)</li>\n<li>산재 지정 병원 진단서·진료기록부</li>\n<li>CCTV·블랙박스·교통카드 이용내역</li>\n<li>일탈 사유 객관자료 (어린이집 등록증·진료 영수증·구매 영수증 등)</li>\n<li>재직증명서·근로계약서 (출퇴근 시간 입증)</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 산재 인정 가능성, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">통상 경로 인정 여부와 일탈·중단 예외 사유를 AI가 사례별로 안내해드립니다.</p>\n<a href="/chat?domain=industrial-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '경로 일탈·중단 — 인정·불인정 사례 비교',
        content:
          '<p><strong style="color:#1e3a5f">실무에서 자주 다투어지는 일탈 유형을 정리합니다.</strong></p>\n<ul>\n<li><strong>인정 사례</strong> — ① 어린이집·요양시설 가족 돌봄 ② 마트·편의점 일용품 구입 ③ 병원·약국 진료·약 수령 ④ 투표·민원 처리 ⑤ 직무 관련 교육 수강 → 일탈 후 통상 경로로 복귀하면 그 이후 사고는 출퇴근재해 인정 가능성.</li>\n<li><strong>불인정 가능성 큰 사례</strong> — ① 회식 후 유흥 → 귀가 도중 사고 ② 친구 만나기·쇼핑·여가 목적 우회 ③ 본인 부업·다른 일터 이동 ④ 음주 운전 중 사고 → 본인 과실·일탈 성격에 따라 보호 범위 밖.</li>\n<li><strong>"일탈 중" vs "복귀 후"</strong> — 마트에 들른 동안 마트 안 사고는 일탈 중. 마트에서 나와 다시 통상 경로로 들어선 뒤 사고면 복귀 후로 평가될 수 있습니다.</li>\n<li><strong>회사 차량·셔틀</strong> — 사용자 제공 교통수단 사용 중 사고는 출퇴근재해와 별개로 업무상 재해(통근 + 업무수행성)로 인정될 가능성도 검토합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: "어디 들렀다"보다 "왜 들렀는가"가 더 중요한 판단 기준입니다. 시행령 제35조 제2항의 사유에 해당하는지 사전에 확인해두세요.</blockquote>',
      },
      {
        title: '흔한 실수 — 출퇴근재해 신청 시 자주 보이는 함정',
        content:
          '<p><strong style="color:#1e3a5f">아래 3가지를 피하면 인정 가능성을 높일 수 있습니다.</strong></p>\n<ul>\n<li><strong>경위서를 "퇴근 중 사고" 한 줄로 끝내기</strong> — 시간·장소·경로·일탈 사유를 구체적으로 적지 않으면 단순 일탈로 평가될 위험이 큽니다. 어린이집 픽업이라면 등하원 시간·시설명을 명시하세요.</li>\n<li><strong>증거 영상을 늦게 확보</strong> — CCTV는 통상 7~30일 내 자동 덮어쓰기됩니다. 사고 후 72시간 내에 인근 상점·관공서·차량 블랙박스 보존을 요청하세요.</li>\n<li><strong>일반 보험으로 먼저 결제 후 산재 신청</strong> — 일반 진료비로 결제하면 산재 정산이 까다로워집니다. 사고 시점에 산재 지정 병원을 우선 방문하세요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회사가 "산재 신청하면 회사에 불이익"이라며 만류해도 근로자는 사업주 동의 없이 직접 공단에 신청할 권리가 있습니다. 무료 상담은 대한법률구조공단 132에서 받아보실 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 신경계통 장해등급 판정 시 종합적 평가 기준',
        summary:
          '대법원 2024두50063 사건(대법원, 2025.12.11 선고)에서 법원은 산재 사고로 인한 신경계통 장해는 전신에 걸쳐 복합적인 증상을 보이는 경우가 많으므로 구체적인 장해 부위와 정도, 신체 부위의 여러 증상을 종합적으로 평가해 장해등급을 판정해야 한다고 판시했습니다. 또한 "수시로 간병을 받아야 하는 일상생활의 처리동작"에는 호흡·삼킴·배뇨뿐 아니라 이동·식사·옷 입기·위생 등 기초적·반복적 동작도 포함된다고 보았습니다.',
        takeaway: '출퇴근재해로 인정되어 요양·장해 단계로 넘어갈 때 장해등급 평가가 종합적으로 이루어진다는 점에서, 사고 직후부터 진료기록·일상생활 영향도 자료를 충실히 모으는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '어린이집에 들러 아이를 픽업하고 집으로 가다 사고가 났어요. 인정될까요?',
        answer:
          '<strong>가족 돌봄을 위한 일탈은 시행령 제35조 제2항 예외 사유에 해당해 인정 가능성이 큽니다.</strong> 어린이집 등록증·픽업 시간을 객관 자료로 첨부하면 입증이 수월합니다.',
      },
      {
        question: '회식 후 귀가하다 사고가 났는데 가능할까요?',
        answer:
          '<strong>회식이 업무의 연장으로 평가되면 인정 가능성이 있습니다.</strong> 사용자 강제·회사 비용 지출·참석 의무 여부를 종합 판단하므로 사례마다 결과가 다릅니다.',
      },
      {
        question: '평소 다니던 길이 아닌 새 길로 갔어요. 인정 안 되나요?',
        answer:
          '<strong>합리적 사유가 있는 우회는 인정될 수 있습니다.</strong> 도로 공사·교통 정체·날씨 등 합리적 이유를 진술하고, 가능하면 내비게이션 기록·블랙박스로 입증하세요.',
      },
      {
        question: '본인 과실 100%인 사고도 산재 처리 가능한가요?',
        answer:
          '<strong>본인 과실이 있어도 출퇴근재해는 인정 가능합니다.</strong> 다만 음주·중과실은 일부 급여가 제한될 수 있어 사례별 검토가 필요합니다.',
      },
      {
        question: '불승인되면 다시 다툴 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 불승인 결정 통지일로부터 90일 내 심사청구, 그 결과에 다시 90일 내 재심사청구, 다시 90일 내 행정소송으로 단계적 다툼이 가능합니다.',
      },
    ],
    cta: { text: '산재 인정 가능성, AI로 점검하기', link: '/chat?domain=industrial-accident' },
    internalLinks: [
      { label: '출퇴근재해 산재 인정 요건', href: '/guide/industrial-accident/industrial-accident-commute-accident-eligibility' },
      { label: '산재 요양급여 신청 절차', href: '/guide/industrial-accident/industrial-accident-medical-care-application' },
      { label: '산재 불승인 심사청구 절차', href: '/guide/industrial-accident/industrial-accident-appeal-procedure' },
      { label: '산재 vs 자동차보험 차이', href: '/guide/industrial-accident/industrial-accident-vs-auto-insurance' },
      { label: '근로복지공단 무료 상담 안내', href: '/guide/industrial-accident/industrial-accident-comwel-free-consultation' },
    ],
  },

  // ─── 4. dui / 행정심판 90일 면허취소 구제 (accused) ───
  {
    domain: 'dui',
    slug: 'dui-administrative-trial-90day-mitigation',
    keyword: '음주운전 행정심판 90일 면허취소 감경',
    questionKeyword: '음주운전으로 면허취소 처분을 받았는데 행정심판으로 구제받을 방법이 있을까요?',
    ctaKeyword: '행정심판 90일 감경 사유 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '음주운전 행정심판 90일 — 면허취소 구제 절차와 감경 사유 | 로앤가이드',
      description:
        '음주운전 혐의로 면허취소·정지 처분을 받았다면 처분일로부터 90일 행정심판 기한 안에 감경 사유와 자수·소명 자료를 정리할 수 있습니다.',
    },
    intro:
      '<p>음주운전 혐의를 받고 있다면, 형사처벌과는 별도로 행정처분(면허취소·정지)에 대해 행정심판으로 다툴 수 있는지 검토할 가치가 있습니다. 행정심판법은 처분이 있음을 안 날부터 90일, 처분이 있은 날부터 180일 이내에 청구하도록 정합니다(제27조). 면허가 직업·생계와 직결될수록 기한 안에 감경 사유와 자수·소명 자료를 정리해두는 것이 중요합니다. 다만 행정청의 재량은 폭이 넓고, 음주운전 처분에서는 일반예방적 측면이 강조되므로 기대치는 신중하게 잡고 준비해야 합니다.</p>',
    sections: [
      {
        title: '행정심판 90일 — 무엇을, 어디에 청구하는가',
        content:
          '<p><strong style="color:#1e3a5f">기한·관할·청구 형태를 먼저 정확히 파악하는 것이 중요합니다.</strong></p>\n<ul>\n<li><strong>기한 — 처분일로부터 90일 (행정심판법 제27조)</strong> — 처분이 있음을 안 날(통지서를 받은 날) 부터 90일. 동시에 처분이 있은 날부터 180일도 적용. 두 기한 중 먼저 도래하는 것이 기준.</li>\n<li><strong>관할 — 중앙행정심판위원회 (도로교통공단 소관)</strong> — 운전면허 처분은 통상 중앙행정심판위원회 관할. 온라인 청구(online.simpan.go.kr) 또는 서면 제출.</li>\n<li><strong>청구 형태 — 취소심판·변경심판</strong> — 면허취소를 다투는 경우 취소심판 또는 정지 처분으로의 변경을 구하는 변경심판을 검토합니다.</li>\n<li><strong>형사재판과 별도</strong> — 행정심판과 형사재판은 별개 트랙. 형사 무죄 확정만으로 행정처분이 자동 취소되지 않습니다(다만 재심 사유가 될 수는 있음).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 90일은 도과되면 회복 어려운 절대 기한. 처분 통지서를 받자마자 카운트다운을 시작하세요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 음주운전 행정심판 5단계',
        content:
          '<p><strong style="color:#1e3a5f">국민권익위원회 행정심판 절차 기준으로 보면, 다음 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 처분 통지서 수령 + 기한 확인 (즉시)</strong> — 처분일·통지일을 정확히 확인. 90일 카운트 시작. KLAC 132로 무료 상담 가능.</li>\n<li><strong>2단계 — 감경 사유·자수·소명 자료 정리 (1~2주)</strong> — 운전 필수성·생계 의존도·교통사고 미발생·자수 정황 등 객관 자료 수집.</li>\n<li><strong>3단계 — 청구서 작성 + 온라인 또는 서면 청구 (90일 내 제출)</strong> — online.simpan.go.kr 또는 중앙행정심판위 서면 제출. 청구 취지·이유·증거자료 첨부.</li>\n<li><strong>4단계 — 답변서·보충서 교환 → 구술심리 (필요 시, 통상 3~6개월)</strong> — 처분청(경찰청·도로교통공단) 답변서에 대해 보충서면 제출. 청구인이 원하면 구술심리 신청 가능.</li>\n<li><strong>5단계 — 재결 (인용·기각·각하)</strong> — 인용 시 처분 취소·변경. 기각·각하 시 90일 내 행정소송으로 다툼 가능.</li>\n</ol>\n<p><strong>준비서류 핵심</strong></p>\n<ul>\n<li>운전면허 처분 통지서 (처분일·이의기한 확인)</li>\n<li>혈중알코올농도 측정 기록·경위서</li>\n<li>재직증명서·운전 필수성 입증자료 (영업·배달·운수업 등)</li>\n<li>가족관계증명서·부양 의무 입증자료</li>\n<li>자수 정황·반성·재발방지 자료 (반성문·교육 이수 증명 등)</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">90일 기한 안에 감경 사유·자수 정황·소명 자료를 어떻게 구성하면 좋은지 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '감경 사유·자수 정황 — 어떤 자료가 도움이 되는가',
        content:
          '<p><strong style="color:#1e3a5f">사실과 다르게 부풀리거나 단정형으로 주장하지 말고, 객관 자료로 뒷받침되는 사정을 정리하는 것이 중요합니다.</strong></p>\n<ul>\n<li><strong>자수·자진 신고 정황</strong> — 단속 전 본인이 경찰에 자진 신고했다면 자수에 해당할 가능성이 있습니다. 신고 시간·녹취·통화기록을 보관하세요. 자수가 인정되면 형사·행정 양쪽에서 감경 정황으로 작용할 수 있습니다.</li>\n<li><strong>운전 필수성</strong> — 영업직·배달직·운수업·환자 가족 이동 등 운전이 본업·생계 직결인 경우 재직증명서·업무분장표·차량 등록증 등으로 입증.</li>\n<li><strong>혈중알코올농도·사고 유무</strong> — 농도가 처벌기준 근접·사고 미발생·교통 흐름에 큰 영향 없음 등은 재량권 판단에서 참작될 수 있는 자료.</li>\n<li><strong>반성·재발방지</strong> — 음주운전 예방 교육 이수증·반성문·재발방지 서약서·금주 의지 자료. 단순 진술보다 객관 자료가 우선합니다.</li>\n<li><strong>가족 부양·생계 곤란</strong> — 미성년 자녀·노부모·환자 부양 등 생계 의존도. 가족관계증명서·진단서·부양 입증서류로 보강.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 행정청 재량은 일반예방적 측면을 강조하므로(2017두67476 판례 취지), "감경이 보장된다"는 단정은 위험합니다. 인정될 가능성을 높이는 자료를 충실히 준비하는 자세가 필요합니다.</blockquote>',
      },
      {
        title: '흔한 실수 — 90일 안에 자주 보이는 함정',
        content:
          '<p><strong style="color:#1e3a5f">아래 3가지를 피하면 청구가 한결 안정됩니다.</strong></p>\n<ul>\n<li><strong>"형사재판부터 끝내고 행정심판"</strong> — 형사가 길어지면 행정심판 90일 기한이 도과됩니다. 형사와 행정은 별개 트랙이므로 행정심판 기한부터 우선 챙기세요.</li>\n<li><strong>처분 통지서 수령 회피</strong> — 통지서를 받지 않으면 기한이 시작되지 않을 것이라는 오해가 있지만, 공시송달 등으로 기한이 진행되어 도리어 불리해질 수 있습니다.</li>\n<li><strong>감경 사유를 자체 판단으로 접기</strong> — "혈중농도가 높아서 어차피 안 된다" 자체 단정 대신, 혐의를 받고 있다면 운전 필수성·자수 정황·생계 곤란을 객관 자료로 정리해 행정심판으로 다툴 가치가 있는지 점검해보세요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 무료 상담은 대한법률구조공단 132·국민권익위원회 110에서 받아보실 수 있습니다. 사실과 다르게 신고되었다면 단속 경위·측정 절차의 위법성도 함께 검토하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주운전 면허취소에서 강조되어야 할 측면',
        summary:
          '대법원 2017두67476 사건(대법원, 2018.02.28 선고)에서 법원은 음주운전 면허취소는 행정청의 재량행위이지만, 음주운전 교통사고의 증가와 결과의 참혹성에 비추어 일반예방적 측면이 더욱 강조되어야 하고 일반 수익적 행정행위의 취소와 달리 당사자의 불이익보다 사고 방지 공익이 더 중시되어야 한다고 판시했습니다. 또한 혈중알코올농도가 취소처분 기준을 훨씬 초과하고 특별한 감경 사정이 없다면 재량권 일탈·남용으로 보기 어렵다고 보았습니다.',
        takeaway: '행정심판에서도 동일한 재량 판단 구조가 적용되므로, 단순 "면허가 필요해서"가 아니라 객관적 감경 사유(자수·혈중농도 근접·운전 필수성·재발방지 정황)를 자료로 뒷받침해야 인정 가능성이 생긴다는 점을 시사합니다.',
      },
    ],
    faq: [
      {
        question: '형사재판과 행정심판을 동시에 진행할 수 있나요?',
        answer:
          '<strong>가능하며, 별도 트랙이라 동시에 진행하는 경우가 많습니다.</strong> 형사 결과가 행정심판에 자료로 활용될 수 있어 변호인과 일정을 함께 조율하는 것이 좋습니다.',
      },
      {
        question: '감경된 처분(면허취소 → 정지)도 행정심판으로 받을 수 있나요?',
        answer:
          '<strong>변경심판으로 정지 처분으로의 변경을 구할 수 있습니다.</strong> 다만 음주운전은 일반예방적 측면이 강조되어 변경 인용이 보장되지 않으니 객관 자료가 충실해야 합니다.',
      },
      {
        question: '직업이 운전이라는 이유만으로 감경되나요?',
        answer:
          '<strong>운전 필수성은 재량권 판단의 한 자료일 뿐 단독 사유는 아닙니다.</strong> 재직증명서·업무분장표·운전 빈도 자료에 자수·혈중농도·재발방지 등을 종합해 제출해야 인정 가능성이 생깁니다.',
      },
      {
        question: '90일이 지나면 정말 다툴 방법이 없나요?',
        answer:
          '<strong>원칙적으로 행정심판은 어렵지만, 처분 자체의 무효 사유(중대·명백한 하자)가 있으면 무효확인 행정소송이 가능할 수 있습니다.</strong> 사례가 제한적이니 132 또는 변호사 상담을 검토해보세요.',
      },
      {
        question: '재결 결과가 기각이면 어떻게 하나요?',
        answer:
          '<strong>재결서를 받은 날부터 90일 내 행정소송을 제기할 수 있습니다.</strong> 행정소송에서는 행정심판 기록이 자료로 활용되므로 행정심판 단계부터 충실히 준비하는 것이 중요합니다.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 행정심판 준비서류', href: '/guide/dui/dui-administrative-appeal-required-docs' },
      { label: '음주운전 면허 청문 절차', href: '/guide/dui/dui-administrative-license-hearing' },
      { label: '음주운전 행정처분 절차', href: '/guide/dui/dui-administrative-license-procedure' },
      { label: '음주운전 형사 처벌 기준', href: '/guide/dui/dui-criminal-penalty-standards' },
      { label: '음주운전 탄원서·감경 요소', href: '/guide/dui/dui-settlement-mitigation-factors' },
    ],
  },
];
