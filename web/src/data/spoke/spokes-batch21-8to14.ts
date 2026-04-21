import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 1. 이 페이지는 [해고된 근로자]의 [해고예고수당 계산법과 청구 기한을 모르는 상황]에서 [정확한 수당 산출 방법과 청구 절차 안내]를 돕는 페이지다.
// 2. 이 페이지는 [부당해고를 당한 근로자]의 [실제 판례를 통해 해고 무효 가능성을 알고 싶은 상황]에서 [해고 무효 판례 분석과 대응 전략 수립]을 돕는 페이지다.
// 3. 이 페이지는 [해고 통보를 받은 근로자]의 [해고 사유서 요청 방법과 양식을 모르는 상황]에서 [사유서 요청 절차와 작성 양식 제공]을 돕는 페이지다.
// 4. 이 페이지는 [퇴직금을 받지 못한 퇴직자]의 [신고 절차와 순서를 모르는 상황]에서 [노동청 신고부터 소송까지 단계별 절차 안내]를 돕는 페이지다.
// 5. 이 페이지는 [퇴직 후 퇴직금 청구를 처음 하는 퇴직자]의 [어디서부터 무엇을 시작해야 하는지 모르는 상황]에서 [첫 행동부터 청구 완료까지 순서 안내]를 돕는 페이지다.
// 6. 이 페이지는 [재직 중 퇴직금 중간정산을 받으려는 근로자]의 [중간정산 요건과 절차를 모르는 상황]에서 [법적 요건 확인과 신청 절차 안내]를 돕는 페이지다.
// 7. 이 페이지는 [퇴직금 체불 피해 근로자]의 [진정서 작성 방법을 모르는 상황]에서 [진정서 양식과 작성 요령 제공]을 돕는 페이지다.

export const spokesBatch21_8to14: SpokePage[] = [
  // ───────────────────────────────────────────
  // 1. dismissal / dismissal-notice-pay-calculation
  // ───────────────────────────────────────────
  {
    domain: 'dismissal',
    slug: 'dismissal-notice-pay-calculation',
    keyword: '해고예고수당 계산법과 청구 기한 3가지 핵심',
    questionKeyword: '해고예고수당은 어떻게 계산하고 언제까지 청구할 수 있나요?',
    ctaKeyword: '해고예고수당 계산 청구',
    type: '수치기한형',
    perspective: '피해자',
    meta: {
      title: '해고예고수당 계산법과 청구 기한 3가지 | 로앤가이드',
      description: '갑자기 해고 통보를 받았는데 예고수당을 못 받았다면 정확한 계산법과 청구 기한을 지금 확인하세요.',
    },
    intro:
      '<p>월요일 아침, 출근하자마자 "오늘부터 나오지 않아도 됩니다"라는 통보를 받았습니다. 30일 전 예고도 없이 갑작스러운 해고를 당하면 당장 생활비부터 걱정됩니다. 근로기준법은 이런 경우 사용자에게 해고예고수당을 지급하도록 의무화하고 있습니다. 정확한 계산법과 청구 기한을 모르면 받을 수 있는 돈을 놓칠 수 있습니다.</p>',
    sections: [
      {
        title: '해고예고수당이란? — 30일분 통상임금의 의미',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제26조에 따라 사용자가 근로자를 해고하려면 적어도 30일 전에 예고해야 하고, 예고하지 않으면 30일분 이상의 통상임금을 지급해야 합니다</strong></p>\n<p>해고예고수당의 핵심 요소 3가지:</p>\n<ul>\n<li><strong>통상임금 기준</strong> — 기본급 + 고정수당(직무수당, 직책수당 등) + 고정상여금이 포함됩니다. 연장근로수당이나 실적급은 포함되지 않습니다</li>\n<li><strong>30일분 산정</strong> — 일급 통상임금 × 30일로 계산합니다. 월급제 근로자는 월 통상임금 자체가 30일분에 해당합니다</li>\n<li><strong>지급 시점</strong> — 해고와 동시에 즉시 지급해야 합니다. 퇴직 후 14일 이내가 아니라 해고 시점입니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">공식: 해고예고수당 = 1일 통상임금 × 30일</blockquote>',
      },
      {
        title: '해고예고수당 계산 실전 예시',
        content:
          '<p><strong style="color:#1e3a5f">월 기본급 250만 원, 직무수당 30만 원인 근로자가 예고 없이 해고된 경우 해고예고수당은 약 280만 원입니다</strong></p>\n<p>단계별 계산 방법:</p>\n<ul>\n<li><strong>1단계: 통상임금 확인</strong> — 기본급 250만 원 + 직무수당 30만 원 = 월 통상임금 280만 원</li>\n<li><strong>2단계: 1일 통상임금</strong> — 280만 원 ÷ (월 소정근로시간 209시간 ÷ 8시간) = 약 107,177원</li>\n<li><strong>3단계: 30일분 산정</strong> — 107,177원 × 30일 = 약 3,215,310원</li>\n</ul>\n<p>월급제로 고정급만 받는 경우에는 <strong>월 통상임금 전액이 해고예고수당</strong>에 해당하므로 계산이 단순합니다. 다만 시급제·일급제 근로자는 반드시 소정근로시간을 기준으로 환산해야 합니다.</p>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/dismissal" style="color:#1565c0;font-weight:600">해고예고수당 청구 가능성 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '해고예고수당 청구 기한과 방법',
        content:
          '<p><strong style="color:#1e3a5f">해고예고수당 청구 소멸시효는 3년이며, 고용노동부에 진정하거나 민사소송으로 청구할 수 있습니다</strong></p>\n<ul>\n<li><strong>소멸시효 3년</strong> — 근로기준법상 임금채권의 소멸시효가 적용됩니다. 해고일로부터 3년 이내에 청구해야 합니다</li>\n<li><strong>고용노동부 진정</strong> — 관할 고용노동지청에 임금체불 진정서를 제출합니다. 처리 기간은 보통 1~3개월입니다</li>\n<li><strong>민사소송</strong> — 소액사건(3,000만 원 이하)은 소액사건심판으로 빠르게 진행할 수 있습니다</li>\n</ul>\n<p><strong>주의:</strong> 해고예고 기간이 부족한 경우(예: 15일 전 예고)에는 부족한 일수에 해당하는 통상임금만 청구할 수 있습니다. 예를 들어 15일 전 예고 시 15일분만 청구 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기한 요약: 해고일로부터 3년 이내 | 방법: 노동부 진정 또는 민사소송</blockquote>',
      },
      {
        title: '해고예고 예외 — 수당을 받을 수 없는 4가지 경우',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제26조 단서에 따라 일정한 경우에는 해고예고 의무가 면제됩니다</strong></p>\n<ul>\n<li><strong>일용근로자로서 3개월 미만 근무</strong> — 3개월 이상 계속 근무한 일용직은 예고 대상입니다</li>\n<li><strong>2개월 이내 기간제 근로자</strong> — 계약기간이 2개월 이내인 경우 예외입니다</li>\n<li><strong>월급이 고용노동부 고시금액 미만</strong> — 매월 정해진 금액에 미달하는 경우입니다</li>\n<li><strong>천재사변 또는 근로자 귀책사유</strong> — 사업 계속이 불가능하거나 근로자에게 중대한 귀책사유가 있는 경우입니다. 단, 근로자 귀책사유는 노동위원회 인정을 받아야 합니다</li>\n</ul>\n<p>수습기간 중이더라도 <strong>3개월을 초과하여 근무한 경우에는 해고예고 의무가 적용</strong>됩니다. 회사가 "수습이라 예고수당 안 줘도 된다"고 주장하면 반드시 확인하세요.</p>',
      },
    ],
    cases: [
      {
        title: '해고 무효와 해고예고수당 지급의무 — 대법원 판단',
        summary:
          '대법원 2017다16778 사건(부당이득금)에서 법원은 해고예고수당은 해고가 유효한지와 관계없이 지급되어야 하는 돈이며, 해고가 부당해고에 해당하여 효력이 없다고 하더라도 근로자가 해고예고수당을 지급받을 법률상 원인이 없다고 볼 수 없다고 판시했습니다.',
        takeaway:
          '부당해고라 하더라도 30일 전 예고 없이 해고되었다면 해고예고수당을 받을 수 있습니다. 회사가 "해고가 무효이니 수당도 줄 필요 없다"고 주장하면 이 판례를 근거로 청구하세요.',
      },
    ],
    faq: [
      {
        question: '해고예고수당과 퇴직금을 동시에 받을 수 있나요?',
        answer: '<strong>네, 별개의 권리이므로 동시에 청구 가능합니다.</strong> 해고예고수당은 해고 절차 위반에 대한 보상이고, 퇴직금은 계속근로에 대한 후불임금입니다. 1년 이상 근무했다면 퇴직금도 함께 청구하세요.',
      },
      {
        question: '회사가 "경영 악화"를 이유로 예고수당을 안 준다면?',
        answer: '<strong>경영 악화만으로는 예고수당 지급 면제 사유가 되지 않습니다.</strong> 천재사변 등 "사업 계속이 불가능한 경우"에만 면제되며, 단순한 경영난은 해당하지 않습니다. 고용노동부에 진정 가능합니다.',
      },
      {
        question: '해고예고수당에 세금이 부과되나요?',
        answer: '해고예고수당은 <strong>근로소득이 아닌 퇴직소득으로 분류</strong>되어 퇴직소득세가 적용됩니다. 다만 실무상 금액이 크지 않으면 비과세 한도 이내일 수 있으므로 원천징수 금액을 확인하세요.',
      },
      {
        question: '구두로 해고 통보를 받았는데 예고수당 청구할 수 있나요?',
        answer: '<strong>해고 통보 방식(구두·서면)과 관계없이 예고 없는 즉시해고라면 청구 가능합니다.</strong> 다만 해고 사실 입증을 위해 통화 녹음, 문자메시지, 카카오톡 대화 등 증거를 확보해 두세요.',
      },
      {
        question: '15일 전에 예고를 받았는데 수당을 청구할 수 있나요?',
        answer: '예고기간이 30일 미만이면 <strong>부족한 일수에 해당하는 통상임금</strong>을 청구할 수 있습니다. 15일 전 예고 시 15일분의 통상임금을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '해고예고수당 청구 가능성 무료 진단받기',
      link: '/diagnosis/dismissal',
    },
    internalLinks: [
      { label: '해고 가이드', href: '/guide/dismissal' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '해고 사유서 요청 방법과 양식', href: '/guide/dismissal/dismissal-reason-request-template' },
      { label: '퇴직금 계산법 완벽 가이드', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '해고 진단', href: '/diagnosis/dismissal' },
    ],
  },

  // ───────────────────────────────────────────
  // 2. dismissal / unfair-dismissal-void-cases
  // ───────────────────────────────────────────
  {
    domain: 'dismissal',
    slug: 'unfair-dismissal-void-cases',
    keyword: '부당해고 무효 판례 5가지 핵심 사례 분석',
    questionKeyword: '어떤 해고가 부당해고로 인정되어 무효가 되나요?',
    ctaKeyword: '부당해고 무효 판례',
    type: '판례형',
    perspective: '피해자',
    meta: {
      title: '부당해고 무효 판례 5가지 핵심 사례 | 로앤가이드',
      description: '해고 통보를 받았지만 부당해고일 수 있다는 생각이 든다면 실제 무효 판례 5가지를 지금 확인하세요.',
    },
    intro:
      '<p>갑작스러운 해고 통보에 "이게 합법인가?"라는 의문이 들었습니다. 사장은 정당한 사유라 했지만, 실제로는 법원에서 무효로 판단되는 해고가 상당히 많습니다. 해고가 무효가 되면 해고 기간의 임금까지 전부 받을 수 있습니다. 실제 판례를 통해 어떤 해고가 무효가 되는지 확인해 보세요.</p>',
    sections: [
      {
        title: '해고 무효의 법적 근거 — 근로기준법 제23조',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제23조 제1항은 "사용자는 근로자에게 정당한 이유 없이 해고하지 못한다"고 명시하고 있습니다</strong></p>\n<p>해고가 무효가 되는 대표적 유형은 다음과 같습니다.</p>\n<ul>\n<li><strong>정당한 사유 부재</strong> — 해고 사유가 객관적·합리적이지 않은 경우. 근무성적 불량을 이유로 하더라도 평가가 공정하지 않으면 무효입니다</li>\n<li><strong>절차 위반</strong> — 해고 사유와 시기를 서면으로 통지하지 않은 경우(근로기준법 제27조). 구두 해고만으로는 효력이 없습니다</li>\n<li><strong>해고 제한 위반</strong> — 업무상 부상·질병 요양 기간과 그 후 30일간, 산전산후 휴가 기간과 그 후 30일간의 해고는 절대적으로 금지됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 정당한 사유 + 서면 통지 + 해고 제한 준수 → 3가지 모두 충족해야 유효한 해고</blockquote>',
      },
      {
        title: '판례로 본 해고 무효 유형 5가지',
        content:
          '<p><strong style="color:#1e3a5f">법원이 실제로 해고를 무효로 판단한 대표적 사례 유형입니다</strong></p>\n<ul>\n<li><strong>유형 1: 정리해고 요건 미비</strong> — 경영상 이유로 해고하면서 해고 회피 노력, 합리적 기준 설정, 근로자 협의 절차를 제대로 거치지 않은 경우</li>\n<li><strong>유형 2: 서면 통지 누락</strong> — 해고 사유와 해고 시기를 구두로만 통보하고 서면을 교부하지 않은 경우. 2023년 이후 법원은 이를 엄격하게 판단합니다</li>\n<li><strong>유형 3: 징계절차 하자</strong> — 징계위원회 구성이 부적법하거나 근로자에게 변명 기회를 주지 않은 경우</li>\n<li><strong>유형 4: 기간제 갱신기대권 침해</strong> — 2년 이상 반복 갱신된 기간제 근로자의 계약을 합리적 이유 없이 종료한 경우</li>\n<li><strong>유형 5: 육아기 근로자 배려의무 위반</strong> — 육아기 근로자에 대한 일·가정 양립 배려의무를 위반하여 해고한 경우</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/dismissal" style="color:#1565c0;font-weight:600">내 해고 사안 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '해고 무효가 인정되면 받을 수 있는 것',
        content:
          '<p><strong style="color:#1e3a5f">해고가 무효로 확인되면 원직 복직과 해고 기간 동안의 임금 전액을 받을 수 있습니다</strong></p>\n<ul>\n<li><strong>원직 복직</strong> — 노동위원회 구제명령 또는 법원 판결로 종전 직위·직급으로 복귀합니다</li>\n<li><strong>임금 상당액 지급</strong> — 해고된 날부터 복직일까지의 임금 전액을 받습니다. 구제절차가 수년간 진행되면 수천만 원에 달할 수 있습니다</li>\n<li><strong>금전보상명령</strong> — 복직을 원하지 않으면 근로기준법 제30조 제3항에 따라 금전보상을 받을 수도 있습니다</li>\n</ul>\n<p><strong>구제신청 기한은 해고일로부터 3개월 이내</strong>이므로 반드시 기한 내에 신청하세요. 3개월이 지나면 민사소송만 가능하고 절차가 길어집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">해고 무효 효과: 복직 + 밀린 임금 전액 + 금전보상 선택 가능</blockquote>',
      },
      {
        title: '부당해고 구제신청 vs 민사소송 — 어떤 것이 유리한가',
        content:
          '<p><strong style="color:#1e3a5f">노동위원회 구제신청은 무료이고 신속하지만, 민사소송은 손해배상까지 청구 가능합니다</strong></p>\n<ul>\n<li><strong>구제신청</strong> — 비용 무료, 처리기간 60~90일, 복직+임금 상당액 구제 가능. 해고일로부터 3개월 이내 신청해야 합니다</li>\n<li><strong>민사소송(해고무효확인)</strong> — 소멸시효 3년, 복직+임금+위자료 등 종합적 구제 가능. 변호사 비용이 발생하지만 승소 시 상대방 부담 가능</li>\n<li><strong>병행 전략</strong> — 구제신청과 민사소송을 동시에 진행하는 것도 가능합니다. 시간적 여유가 없다면 먼저 구제신청부터 하세요</li>\n</ul>\n<p>5인 미만 사업장은 근로기준법 제23조(부당해고 제한)가 적용되지 않으므로, <strong>5인 미만 사업장 근로자는 민사소송으로 대응</strong>해야 합니다.</p>',
      },
    ],
    cases: [
      {
        title: '정리해고 요건 미비로 해고 무효 판정 — 서울지방법원 판단',
        summary:
          '서울지방법원 2023나51568 사건(해고무효확인)에서 법원은 입주자대표회의가 아파트 관리방식을 자치관리에서 위탁관리로 변경하면서 관리사무소장을 해고한 사안에서, 해고 회피 노력을 다하지 않았고 합리적인 해고 대상자 선정 기준 없이 해고한 것은 정리해고 요건을 갖추지 못해 무효라고 판시했습니다.',
        takeaway:
          '경영상 이유에 의한 해고라 하더라도 해고 회피 노력, 합리적 기준 설정, 사전 협의를 모두 거쳐야 합니다. 이 중 하나라도 빠지면 해고 무효를 주장할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '구두로 "내일부터 나오지 마"라고 한 것도 해고인가요?',
        answer: '구두 통보도 해고에 해당합니다. 다만 <strong>서면 통지가 없는 해고는 그 자체로 무효</strong>입니다. 근로기준법 제27조는 해고 사유와 시기를 반드시 서면으로 통지하도록 규정하고 있습니다.',
      },
      {
        question: '수습 기간 중 해고도 부당해고로 다툴 수 있나요?',
        answer: '<strong>수습 기간이라도 정당한 이유 없이 해고할 수 없습니다.</strong> 다만 수습 중 본채용 거부는 일반 해고보다 넓은 재량이 인정되므로, 업무적격성 평가가 합리적이었는지가 핵심 쟁점입니다.',
      },
      {
        question: '해고 무효 소송에 드는 비용은 얼마인가요?',
        answer: '노동위원회 구제신청은 <strong>비용이 전혀 없습니다</strong>. 민사소송 시 인지대·송달료가 약 10~30만 원이며, 변호사 선임 시 착수금 200~500만 원 수준입니다. 법률구조공단에서 무료 소송 지원도 받을 수 있습니다.',
      },
      {
        question: '5인 미만 사업장에서도 부당해고를 다툴 수 있나요?',
        answer: '5인 미만 사업장은 근로기준법 제23조가 적용되지 않아 <strong>노동위원회 구제신청은 불가</strong>합니다. 다만 민법상 불법행위나 권리남용을 이유로 민사소송을 제기할 수 있습니다.',
      },
    ],
    cta: {
      text: '내 해고 사안 부당해고 가능성 무료 진단받기',
      link: '/diagnosis/dismissal',
    },
    internalLinks: [
      { label: '해고 가이드', href: '/guide/dismissal' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '해고예고수당 계산법', href: '/guide/dismissal/dismissal-notice-pay-calculation' },
      { label: '권고사직 거부 시 대응법', href: '/guide/dismissal/forced-resignation-defense' },
      { label: '해고 진단', href: '/diagnosis/dismissal' },
    ],
  },

  // ───────────────────────────────────────────
  // 3. dismissal / dismissal-reason-request-template
  // ───────────────────────────────────────────
  {
    domain: 'dismissal',
    slug: 'dismissal-reason-request-template',
    keyword: '해고 사유서 요청 방법과 양식 작성 가이드',
    questionKeyword: '회사에 해고 사유서를 어떻게 요청하고 어떤 양식으로 받아야 하나요?',
    ctaKeyword: '해고 사유서 요청 양식',
    type: '템플릿형',
    perspective: '피해자',
    meta: {
      title: '해고 사유서 요청 방법과 양식 3단계 | 로앤가이드',
      description: '해고 통보를 받았지만 사유서를 받지 못했다면 요청 방법과 양식을 지금 확인하세요.',
    },
    intro:
      '<p>"내일부터 안 나와도 돼"라는 말만 듣고 아무 서류도 받지 못했습니다. 해고 사유가 정확히 무엇인지도 모른 채 밀려나는 기분입니다. 근로기준법은 사용자에게 해고 사유와 시기를 서면으로 통지하도록 의무화하고 있습니다. 서면 통지 없는 해고는 그 자체로 무효가 될 수 있으므로, 사유서를 확보하는 것이 첫 번째 대응입니다.</p>',
    sections: [
      {
        title: '해고 사유서란? — 법적 의무와 효력',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제27조는 사용자가 근로자를 해고할 때 해고 사유와 해고 시기를 서면으로 통지하도록 규정하고 있으며, 이를 위반한 해고는 효력이 없습니다</strong></p>\n<p>해고 사유서의 법적 의미:</p>\n<ul>\n<li><strong>효력 요건</strong> — 서면 통지가 없는 해고는 사유의 정당성과 관계없이 무효입니다. 이는 2007년 법 개정으로 강화된 규정입니다</li>\n<li><strong>입증 자료</strong> — 사유서에 기재된 내용만이 해고 사유로 인정됩니다. 나중에 회사가 다른 사유를 추가할 수 없습니다</li>\n<li><strong>구제신청 근거</strong> — 노동위원회 구제신청 시 해고 사유서가 핵심 증거로 사용됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 서면 통지 없는 해고 = 무효 (근로기준법 제27조)</blockquote>',
      },
      {
        title: '해고 사유서 요청 3단계 절차',
        content:
          '<p><strong style="color:#1e3a5f">해고 사유서를 받지 못했다면 즉시 서면으로 요청하고, 불응 시 고용노동부에 신고할 수 있습니다</strong></p>\n<ul>\n<li><strong>1단계: 내용증명 발송</strong> — 회사 대표이사 앞으로 "해고 사유와 시기를 서면으로 통지해 주십시오"라는 내용증명을 보냅니다. 우체국에서 3,000~5,000원이면 발송 가능합니다</li>\n<li><strong>2단계: 7일 대기</strong> — 내용증명 수령 후 7일 정도 회신을 기다립니다. 이 기간 동안 해고 관련 모든 증거(문자, 이메일, 카카오톡)를 보관하세요</li>\n<li><strong>3단계: 고용노동부 신고</strong> — 회사가 사유서를 교부하지 않으면 근로기준법 제27조 위반으로 고용노동부에 신고합니다. 500만 원 이하의 벌금이 부과될 수 있습니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/dismissal" style="color:#1565c0;font-weight:600">해고 사유서 미교부 대응 전략 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '해고 사유서 요청서 양식 (내용증명용)',
        content:
          '<p><strong style="color:#1e3a5f">아래 양식을 참고하여 내용증명을 작성하세요. 핵심은 법 조항을 명시하고 기한을 정하는 것입니다</strong></p>\n<div style="margin:12px 0;padding:16px;background:#f8f9fa;border:1px solid #dee2e6;border-radius:8px;font-size:0.95em;line-height:1.8">\n<p style="text-align:center;font-weight:bold;margin-bottom:12px">해고 사유 및 해고 시기 서면 통지 요청서</p>\n<p>수신: ○○ 주식회사 대표이사 ○○○</p>\n<p>발신: ○○○ (사번: ○○○, 소속: ○○부)</p>\n<p>1. 본인은 귀사에 20○○년 ○월 ○일 입사하여 ○○ 업무에 종사하던 중, 20○○년 ○월 ○일 해고 통보를 받았습니다.</p>\n<p>2. 그러나 귀사는 근로기준법 제27조에 따른 해고 사유와 해고 시기를 서면으로 통지하지 않았습니다.</p>\n<p>3. 이에 근로기준법 제27조에 의거하여 해고 사유와 해고 시기가 명시된 서면을 본 서면 수령일로부터 7일 이내에 교부하여 주시기 바랍니다.</p>\n<p>4. 기한 내 미교부 시 관할 고용노동지청에 진정할 예정임을 알려드립니다.</p>\n<p style="text-align:right">20○○년 ○월 ○일<br/>성명 ○○○ (서명)</p>\n</div>',
      },
      {
        title: '해고 사유서를 받은 후 확인할 3가지',
        content:
          '<p><strong style="color:#1e3a5f">사유서를 받으면 반드시 기재 내용의 구체성, 사유의 정당성, 시기의 적법성을 확인해야 합니다</strong></p>\n<ul>\n<li><strong>구체성 확인</strong> — "근무태도 불량" 같은 추상적 사유만 적혀 있다면 부당해고 주장의 근거가 됩니다. 구체적 일시·장소·행위가 명시되어야 합니다</li>\n<li><strong>정당성 판단</strong> — 기재된 사유가 실제 사실과 부합하는지, 해고가 사회통념상 상당한지 판단합니다. 경미한 사유로 해고한 경우 부당해고입니다</li>\n<li><strong>시기 확인</strong> — 해고 시기가 해고 제한 기간(업무상 재해 요양기간, 산전산후 휴가 등)에 해당하지 않는지 확인합니다</li>\n</ul>\n<p>사유서 내용이 부당하다고 판단되면 <strong>해고일로부터 3개월 이내에 노동위원회에 구제신청</strong>을 하세요.</p>',
      },
    ],
    cases: [
      {
        title: '통상해고 시에도 징계해고 절차 필요 — 대법원 판단',
        summary:
          '대법원 2021두33470 사건(부당해고구제재심판정취소)에서 법원은 징계해고사유에 해당하는 사유로 통상해고 방식을 택하더라도, 근로자에게 변명의 기회가 부여되지 않아도 해고가 당연시될 정도의 특별한 사유가 없는 한 징계해고에 따른 절차는 부가적으로 요구된다고 판시했습니다.',
        takeaway:
          '회사가 징계 사유를 들어 해고하면서 징계위원회 없이 통상해고 형식을 취했다면 절차 위반으로 무효를 주장할 수 있습니다. 해고 사유서의 사유가 징계사유인지 반드시 확인하세요.',
      },
    ],
    faq: [
      {
        question: '사직서를 제출한 경우에도 해고 사유서를 요청할 수 있나요?',
        answer: '자발적으로 사직서를 제출한 경우에는 해고가 아니므로 사유서 요청 대상이 아닙니다. 다만 <strong>회사가 압박하여 사직서를 작성하게 한 경우(권고사직)에는 실질적 해고</strong>에 해당하므로 사유서를 요청하고 부당해고 구제신청도 가능합니다.',
      },
      {
        question: '이메일로 해고 통보를 받았는데 이것도 서면 통지인가요?',
        answer: '<strong>이메일도 서면에 해당할 수 있지만, 해고 사유와 시기가 명확히 기재되어 있어야 합니다.</strong> 단순히 "계약 종료"만 적혀 있다면 구체적 사유 기재가 없으므로 서면 통지 요건을 충족하지 못합니다.',
      },
      {
        question: '해고 사유서에 적힌 내용이 사실과 다르면 어떻게 하나요?',
        answer: '사유서 내용이 사실과 다르다면 <strong>반박 증거를 수집하여 부당해고 구제신청의 근거</strong>로 사용하세요. 동료 증언, 업무 기록, CCTV 등으로 사유가 허위임을 입증할 수 있습니다.',
      },
      {
        question: '해고 사유서를 받은 후 구제신청까지 남은 기한은?',
        answer: '<strong>해고일로부터 3개월 이내</strong>에 노동위원회에 구제신청해야 합니다. 사유서 수령일이 아니라 해고일 기준이므로, 사유서 요청에 시간이 걸리더라도 3개월 기한은 반드시 지키세요.',
      },
      {
        question: '5인 미만 사업장도 해고 사유서를 받을 수 있나요?',
        answer: '<strong>근로기준법 제27조(서면 통지 의무)는 5인 이상 사업장에만 적용</strong>됩니다. 5인 미만 사업장에서는 서면 통지 의무가 없지만, 해고 사실 증명을 위해 서면 확인을 요청하는 것이 유리합니다.',
      },
    ],
    cta: {
      text: '해고 사유서 대응 전략 무료 진단받기',
      link: '/diagnosis/dismissal',
    },
    internalLinks: [
      { label: '해고 가이드', href: '/guide/dismissal' },
      { label: '부당해고 판례로 본 해고 무효 사례', href: '/guide/dismissal/unfair-dismissal-void-cases' },
      { label: '해고예고수당 계산법', href: '/guide/dismissal/dismissal-notice-pay-calculation' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '해고 진단', href: '/diagnosis/dismissal' },
    ],
  },

  // ───────────────────────────────────────────
  // 4. retirement / unpaid-retirement-report-procedure
  // ───────────────────────────────────────────
  {
    domain: 'retirement',
    slug: 'unpaid-retirement-report-procedure',
    keyword: '퇴직금 미지급 신고 절차 4단계 타임라인',
    questionKeyword: '퇴직금을 못 받았는데 어디에 어떻게 신고하나요?',
    ctaKeyword: '퇴직금 미지급 신고',
    type: '절차타임라인형',
    perspective: '피해자',
    meta: {
      title: '퇴직금 미지급 신고 절차 4단계 완벽 정리 | 로앤가이드',
      description: '퇴직한 지 14일이 지났는데 퇴직금을 받지 못했다면 신고 절차 4단계를 지금 확인하세요.',
    },
    intro:
      '<p>퇴직한 지 한 달이 넘었는데 회사에서 "조금만 기다려"만 반복합니다. 근로자퇴직급여 보장법 제9조에 따르면 사용자는 퇴직일로부터 14일 이내에 퇴직금을 지급해야 합니다. 14일이 지나도 지급하지 않으면 그때부터 법적 대응이 가능합니다. 신고부터 소송까지 단계별 절차를 확인하세요.</p>',
    timelineSteps: [
      '퇴직 후 14일 경과: 내용증명으로 퇴직금 지급 요청',
      '7일 대기 후: 관할 고용노동지청에 임금체불 진정 접수',
      '노동부 조사 1~3개월: 시정 지시 및 체당금 신청',
      '미해결 시: 소액사건심판 또는 민사소송 제기',
    ],
    sections: [
      {
        title: '1단계: 내용증명으로 퇴직금 지급 요청',
        content:
          '<p><strong style="color:#1e3a5f">퇴직일로부터 14일이 지나면 즉시 사용자에게 내용증명을 발송하여 퇴직금 지급을 요청하세요</strong></p>\n<ul>\n<li><strong>발송 시점</strong> — 퇴직일 + 14일이 경과한 다음 날부터 가능합니다. 14일 이전에는 아직 기한이 남아 있으므로 기다려야 합니다</li>\n<li><strong>기재 내용</strong> — 입사일, 퇴직일, 퇴직금 예상 금액, 지급 요청 기한(수령 후 7일 이내), 미지급 시 법적 조치 예고</li>\n<li><strong>발송 방법</strong> — 우체국 내용증명(3,000~5,000원). 온라인 내용증명 서비스도 가능합니다</li>\n</ul>\n<p>내용증명은 그 자체로 법적 효력이 있는 것은 아니지만, <strong>향후 소송에서 "지급을 요청했음에도 불이행했다"는 증거</strong>로 활용됩니다.</p>',
      },
      {
        title: '2단계: 고용노동부 진정 접수',
        content:
          '<p><strong style="color:#1e3a5f">내용증명 발송 후에도 퇴직금이 지급되지 않으면 관할 고용노동지청에 임금체불 진정을 접수합니다</strong></p>\n<ul>\n<li><strong>접수 방법</strong> — 고용노동부 홈페이지(minwon.moel.go.kr) 온라인 접수 또는 관할 지청 방문 접수</li>\n<li><strong>필요 서류</strong> — 근로계약서, 급여명세서, 퇴직금 산정내역, 내용증명 사본, 통장거래내역</li>\n<li><strong>처리 기간</strong> — 접수 후 약 1~3개월. 근로감독관이 사업장을 조사하고 시정지시를 내립니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/retirement" style="color:#1565c0;font-weight:600">퇴직금 미지급 신고 가능성 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '3단계: 시정지시와 체당금 제도',
        content:
          '<p><strong style="color:#1e3a5f">근로감독관의 시정지시에도 사용자가 불응하면 형사입건되며, 회사가 도산한 경우 체당금을 신청할 수 있습니다</strong></p>\n<ul>\n<li><strong>시정지시</strong> — 사용자에게 기한을 정해 퇴직금 지급을 명합니다. 불응 시 근로기준법 위반으로 형사입건됩니다</li>\n<li><strong>벌칙</strong> — 퇴직금 미지급 시 3년 이하의 징역 또는 3,000만 원 이하의 벌금(근로자퇴직급여 보장법 제44조)</li>\n<li><strong>체당금 제도</strong> — 사업주가 도산하여 지급 능력이 없는 경우, 근로복지공단에 체당금을 신청할 수 있습니다. 최대 700만 원까지 지급됩니다</li>\n</ul>\n<p><strong>체당금 신청 기한은 도산인정일 또는 판결확정일로부터 2년 이내</strong>이므로 기한을 놓치지 마세요.</p>',
      },
      {
        title: '4단계: 소액사건심판 또는 민사소송',
        content:
          '<p><strong style="color:#1e3a5f">노동부 진정으로 해결되지 않으면 법원에 소송을 제기합니다. 퇴직금 3,000만 원 이하는 소액사건심판으로 빠르게 진행 가능합니다</strong></p>\n<ul>\n<li><strong>소액사건심판</strong> — 청구금액 3,000만 원 이하. 변호사 없이 직접 진행 가능. 1회 변론으로 판결이 나오는 경우가 많습니다</li>\n<li><strong>민사소송</strong> — 3,000만 원 초과 시. 퇴직금 + 지연이자(연 20%)까지 청구 가능합니다</li>\n<li><strong>지연이자</strong> — 근로기준법 제37조에 따라 퇴직일 후 14일이 경과한 날부터 연 20%의 지연이자가 발생합니다</li>\n</ul>\n<p>퇴직금 청구권의 소멸시효는 <strong>퇴직일로부터 3년</strong>입니다. 3년이 지나면 청구 자체가 불가능하므로 서둘러 대응하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">소멸시효: 퇴직일로부터 3년 | 지연이자: 14일 경과 후 연 20%</blockquote>',
      },
    ],
    cases: [
      {
        title: '퇴직금 청구에 대한 소멸시효 항변이 권리남용인 경우',
        summary:
          '대법원 2024다294705 사건(퇴직금)에서 법원은 사용자가 근로자의 퇴직금 청구에 대해 소멸시효 완성을 주장했으나, 사용자가 시효완성 전에 채권자의 권리행사를 현저히 곤란하게 한 경우 소멸시효 항변이 신의성실 원칙에 반하여 권리남용에 해당할 수 있다고 판시했습니다.',
        takeaway:
          '3년 소멸시효가 지났더라도 회사가 의도적으로 퇴직금 청구를 방해한 정황이 있다면 시효 항변을 무력화할 수 있습니다. 포기하기 전에 전문가 상담을 받아보세요.',
      },
    ],
    faq: [
      {
        question: '퇴직금 미지급 진정 접수 시 회사에 불이익이 가나요?',
        answer: '<strong>근로감독관이 사업장을 조사하고 시정지시를 내립니다.</strong> 사용자가 불응하면 형사입건될 수 있으며, 벌금 3,000만 원 이하 또는 징역 3년 이하의 처벌을 받을 수 있습니다.',
      },
      {
        question: '회사가 폐업했는데 퇴직금을 받을 수 있나요?',
        answer: '사업주가 도산(파산, 폐업)한 경우 <strong>근로복지공단의 체당금 제도</strong>를 이용할 수 있습니다. 최대 700만 원까지 국가가 대신 지급하며, 도산인정일로부터 2년 이내에 신청해야 합니다.',
      },
      {
        question: '퇴직금 지연이자는 얼마나 받을 수 있나요?',
        answer: '퇴직일 후 14일이 경과한 날부터 <strong>연 20%의 지연이자</strong>가 발생합니다. 예를 들어 퇴직금 1,000만 원을 6개월 늦게 받으면 약 100만 원의 지연이자를 추가로 받을 수 있습니다.',
      },
      {
        question: '1년 미만 근무해도 퇴직금을 받을 수 있나요?',
        answer: '원칙적으로 <strong>1년 이상 계속근로해야 퇴직금 수급 자격</strong>이 있습니다. 다만 4주간 평균 주 15시간 이상 근로한 경우에만 해당되며, 주 15시간 미만 초단시간 근로자는 제외됩니다.',
      },
      {
        question: '온라인으로 진정을 접수할 수 있나요?',
        answer: '<strong>고용노동부 민원마당(minwon.moel.go.kr)에서 온라인 접수 가능합니다.</strong> 공인인증서 로그인 후 "임금체불 진정" 메뉴에서 접수하며, 처리 진행 상황도 온라인으로 확인할 수 있습니다.',
      },
    ],
    cta: {
      text: '퇴직금 미지급 신고 가능성 무료 진단받기',
      link: '/diagnosis/retirement',
    },
    internalLinks: [
      { label: '퇴직금 가이드', href: '/guide/retirement' },
      { label: '퇴직금 계산법 완벽 가이드', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '퇴직금 청구 어디부터 시작해야 하나', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '퇴직금 체불 진정서 작성법', href: '/guide/retirement/retirement-pay-complaint-writing' },
      { label: '퇴직금 진단', href: '/diagnosis/retirement' },
    ],
  },

  // ───────────────────────────────────────────
  // 5. retirement / retirement-pay-claim-where-to-start
  // ───────────────────────────────────────────
  {
    domain: 'retirement',
    slug: 'retirement-pay-claim-where-to-start',
    keyword: '퇴직금 청구 어디부터 시작해야 하나 5단계',
    questionKeyword: '퇴직금을 받으려면 어디서부터 무엇을 시작해야 하나요?',
    ctaKeyword: '퇴직금 청구 시작',
    type: '어디부터형',
    perspective: '피해자',
    meta: {
      title: '퇴직금 청구 어디부터? 첫 행동 5단계 | 로앤가이드',
      description: '퇴직했는데 퇴직금을 못 받아 어디서부터 시작해야 할지 모르겠다면 첫 행동 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>첫 직장을 퇴사했습니다. 퇴직금이라는 것을 받아야 한다는 건 알지만, 회사에 직접 요청해야 하는지, 어디에 신고해야 하는지, 서류는 뭘 준비해야 하는지 막막합니다. 퇴직금 청구는 순서만 알면 누구나 할 수 있습니다. 첫 번째 행동부터 차근차근 안내합니다.</p>',
    sections: [
      {
        title: '1단계: 퇴직금 수급 자격부터 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">근로자퇴직급여 보장법 제4조에 따라 1년 이상 계속근로하고, 4주간 평균 주 15시간 이상 근로한 경우 퇴직금을 받을 수 있습니다</strong></p>\n<ul>\n<li><strong>계속근로기간</strong> — 입사일부터 퇴직일까지. 수습기간, 휴직기간도 포함됩니다</li>\n<li><strong>주 15시간 기준</strong> — 4주간 평균이므로, 특정 주에 15시간 미만이어도 4주 평균이 15시간 이상이면 됩니다</li>\n<li><strong>일용직·계약직도 해당</strong> — 계약 형태와 관계없이 위 요건만 충족하면 퇴직금 수급 대상입니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">자격 요건: 1년 이상 근무 + 주 15시간 이상 = 퇴직금 수급 대상</blockquote>',
      },
      {
        title: '2단계: 퇴직금 금액을 직접 계산해 보세요',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금 = 1일 평균임금 × 30일 × (재직일수 ÷ 365)로 계산합니다</strong></p>\n<ul>\n<li><strong>평균임금 산정</strong> — 퇴직일 이전 3개월간 지급받은 총 임금(기본급+수당+상여금) ÷ 해당 기간의 총 일수</li>\n<li><strong>계산 예시</strong> — 3개월 총 임금 900만 원, 기간 92일이면 1일 평균임금 약 97,826원. 3년 근속 시 퇴직금 약 900만 원</li>\n<li><strong>확인 도구</strong> — 고용노동부 퇴직금 계산기(www.moel.go.kr)에서 무료로 산출 가능합니다</li>\n</ul>\n<p>상여금, 연차수당, 연장근로수당도 평균임금에 포함되므로 <strong>급여명세서를 꼼꼼히 확인</strong>하세요. 누락된 항목이 있으면 퇴직금이 줄어듭니다.</p>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/retirement" style="color:#1565c0;font-weight:600">퇴직금 정확한 금액 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '3단계: 회사에 서면으로 퇴직금 지급을 요청하세요',
        content:
          '<p><strong style="color:#1e3a5f">퇴직일로부터 14일이 지나도 지급되지 않으면 내용증명으로 정식 지급 요청을 보내세요</strong></p>\n<ul>\n<li><strong>14일 이내</strong> — 회사에 전화나 문자로 퇴직금 지급 일정을 먼저 확인합니다. 대부분의 회사는 이 기간 내에 지급합니다</li>\n<li><strong>14일 경과 후</strong> — 내용증명(우체국, 3,000~5,000원)으로 "퇴직급여 보장법 제9조에 따라 14일 이내 퇴직금 지급 의무가 있으며 기한을 도과하였으므로 즉시 지급 요청"이라는 서면을 발송합니다</li>\n<li><strong>증거 보관</strong> — 내용증명 접수증, 회사와의 통화 녹음, 문자·카카오톡 내용을 모두 저장하세요</li>\n</ul>',
      },
      {
        title: '4단계: 고용노동부 진정 또는 법적 조치',
        content:
          '<p><strong style="color:#1e3a5f">내용증명에도 불구하고 지급하지 않으면 고용노동부 진정이 가장 빠른 방법입니다</strong></p>\n<ul>\n<li><strong>고용노동부 진정</strong> — 민원마당(minwon.moel.go.kr)에서 온라인 접수. 처리기간 약 1~3개월</li>\n<li><strong>대한법률구조공단</strong> — 월 소득 일정 기준 이하이면 무료로 소송 대리를 받을 수 있습니다. 전화 132</li>\n<li><strong>소액사건심판</strong> — 3,000만 원 이하는 변호사 없이 직접 제기 가능. 관할 법원에 소장을 제출합니다</li>\n</ul>',
      },
      {
        title: '5단계: 지연이자와 추가 청구 확인',
        content:
          '<p><strong style="color:#1e3a5f">퇴직일 후 14일 경과 시점부터 연 20% 지연이자가 발생하며, 미지급 연차수당 등도 함께 청구 가능합니다</strong></p>\n<ul>\n<li><strong>지연이자</strong> — 퇴직일 + 14일 경과 후부터 지급일까지 연 20% 적용. 100일 지연 시 퇴직금의 약 5.5%가 추가됩니다</li>\n<li><strong>미지급 연차수당</strong> — 사용하지 못한 연차휴가에 대한 수당도 퇴직 시 지급받을 수 있습니다</li>\n<li><strong>임금체불 지연이자</strong> — 퇴직금뿐 아니라 미지급 임금, 야근수당 등도 함께 청구하세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">추가 청구 가능: 지연이자(연 20%) + 미지급 연차수당 + 체불임금</blockquote>',
      },
    ],
    cases: [
      {
        title: '위탁계약 형식이라도 실질적 근로자이면 퇴직금 지급 의무',
        summary:
          '서울중앙지방법원 2021가합564798 사건(퇴직금청구)에서 법원은 업무용역위탁계약 형식으로 일한 공장 근로자들이 실질적으로 사용자의 지휘·감독 하에 임금을 목적으로 종속적 관계에서 근로를 제공하였다면 근로기준법상 근로자에 해당하므로 퇴직금 지급 대상이라고 판시했습니다.',
        takeaway:
          '프리랜서, 위탁, 용역 계약 형식이라도 실질적으로 출퇴근 시간 통제, 업무 지시 등을 받았다면 근로자로 인정받아 퇴직금을 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '퇴직금을 분할로 받기로 했는데 안 주면 어떻게 하나요?',
        answer: '분할 지급 약정이 있더라도 <strong>약정한 기한을 넘기면 체불에 해당</strong>합니다. 분할 약정서를 증거로 제출하면 고용노동부 진정이 가능합니다.',
      },
      {
        question: '4대 보험 미가입 상태인데 퇴직금을 받을 수 있나요?',
        answer: '<strong>4대 보험 가입 여부와 퇴직금 수급 권리는 별개입니다.</strong> 실질적으로 1년 이상 주 15시간 이상 근무했다면 4대 보험 미가입이어도 퇴직금을 청구할 수 있습니다.',
      },
      {
        question: '급여명세서를 받은 적이 없는데 퇴직금을 계산할 수 있나요?',
        answer: '통장 입금 내역으로 임금을 확인할 수 있습니다. <strong>은행에서 3개월치 거래내역을 발급</strong>받아 평균임금을 산출하세요. 현금으로 받은 경우에는 동료 증언 등으로 입증 가능합니다.',
      },
      {
        question: '아르바이트도 퇴직금을 받을 수 있나요?',
        answer: '<strong>네, 1년 이상 근무하고 4주 평균 주 15시간 이상 일했다면 아르바이트도 퇴직금 수급 대상</strong>입니다. 계약서상 "아르바이트"로 되어 있어도 법적으로는 단시간 근로자로서 동일한 권리가 있습니다.',
      },
    ],
    cta: {
      text: '퇴직금 청구 방법 무료 진단받기',
      link: '/diagnosis/retirement',
    },
    internalLinks: [
      { label: '퇴직금 가이드', href: '/guide/retirement' },
      { label: '퇴직금 미지급 시 신고 절차', href: '/guide/retirement/unpaid-retirement-report-procedure' },
      { label: '퇴직금 계산법 완벽 가이드', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '퇴직금 중간정산 요건과 절차', href: '/guide/retirement/interim-retirement-pay-requirements' },
      { label: '퇴직금 진단', href: '/diagnosis/retirement' },
    ],
  },

  // ───────────────────────────────────────────
  // 6. retirement / interim-retirement-pay-requirements
  // ───────────────────────────────────────────
  // 7. retirement / retirement-pay-complaint-writing
  // ───────────────────────────────────────────
  {
    domain: 'retirement',
    slug: 'retirement-pay-complaint-writing',
    keyword: '퇴직금 체불 진정서 작성법 양식 포함',
    questionKeyword: '퇴직금 체불 진정서를 어떻게 작성하나요?',
    ctaKeyword: '퇴직금 체불 진정서 작성',
    type: '템플릿형',
    perspective: '피해자',
    meta: {
      title: '퇴직금 체불 진정서 작성법과 양식 4단계 | 로앤가이드',
      description: '퇴직금을 체불당해 노동부에 진정하려는데 진정서 작성법이 막막하다면 양식과 방법을 지금 확인하세요.',
    },
    intro:
      '<p>퇴직한 지 두 달이 넘었는데 퇴직금은 여전히 입금되지 않았습니다. 전화하면 "다음 달에 주겠다"는 말만 반복합니다. 이제 고용노동부에 진정서를 제출하려는데, 어떤 양식으로 뭘 적어야 하는지 처음이라 막막합니다. 진정서 작성은 형식과 핵심 항목만 알면 누구나 할 수 있습니다.</p>',
    sections: [
      {
        title: '퇴직금 체불 진정서란? — 제출 효과와 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부에 임금체불 진정서를 제출하면 근로감독관이 사업장을 조사하고 사용자에게 시정지시를 내립니다</strong></p>\n<ul>\n<li><strong>진정서 효과</strong> — 근로감독관이 사업장을 방문하여 관련 자료를 확인하고, 체불 사실이 확인되면 사용자에게 기한을 정해 지급을 명합니다</li>\n<li><strong>불응 시</strong> — 시정지시에 불응하면 근로기준법 위반으로 형사입건됩니다. 3년 이하 징역 또는 3,000만 원 이하 벌금</li>\n<li><strong>처리 기간</strong> — 접수 후 약 1~3개월. 사안이 복잡한 경우 더 걸릴 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">진정서 제출 → 근로감독관 조사 → 시정지시 → 불응 시 형사입건</blockquote>',
      },
      {
        title: '진정서 필수 기재 항목 4가지',
        content:
          '<p><strong style="color:#1e3a5f">진정서에는 당사자 정보, 근로관계 사실, 체불 내역, 요청 사항을 빠짐없이 기재해야 합니다</strong></p>\n<ul>\n<li><strong>1. 당사자 정보</strong> — 진정인(본인) 성명·주소·연락처, 피진정인(사업주) 상호·대표자명·사업장 주소·사업자등록번호</li>\n<li><strong>2. 근로관계 사실</strong> — 입사일, 퇴직일, 담당 업무, 월 급여액, 근로계약 형태(정규직/계약직 등)</li>\n<li><strong>3. 체불 내역</strong> — 미지급 퇴직금 금액, 법정 지급기한(퇴직일+14일), 지급 요청 경위(내용증명 발송일 등)</li>\n<li><strong>4. 요청 사항</strong> — "미지급 퇴직금 ○○○원의 지급을 명하여 주시기 바랍니다"라고 구체적 금액을 명시합니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/retirement" style="color:#1565c0;font-weight:600">퇴직금 체불 진정 대응 전략 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '진정서 양식 (고용노동부 제출용)',
        content:
          '<p><strong style="color:#1e3a5f">아래 양식을 참고하여 작성하세요. 고용노동부 민원마당에서 온라인 양식도 이용 가능합니다</strong></p>\n<div style="margin:12px 0;padding:16px;background:#f8f9fa;border:1px solid #dee2e6;border-radius:8px;font-size:0.95em;line-height:1.8">\n<p style="text-align:center;font-weight:bold;margin-bottom:12px">임금체불(퇴직금) 진정서</p>\n<p><strong>진정인</strong>: 성명 ○○○ / 생년월일 ○○○○.○○.○○ / 주소 ○○시 ○○구 ○○로 / 연락처 010-○○○○-○○○○</p>\n<p><strong>피진정인</strong>: 상호 ○○ 주식회사 / 대표자 ○○○ / 사업장 주소 ○○시 ○○구 ○○로 / 사업자등록번호 ○○○-○○-○○○○○</p>\n<p><strong>진정 취지</strong>: 피진정인은 진정인에게 미지급 퇴직금 ○○○원을 즉시 지급하라.</p>\n<p><strong>진정 사유</strong>:</p>\n<p>1. 진정인은 20○○년 ○월 ○일 피진정인 사업장에 입사하여 ○○ 업무에 종사하다가 20○○년 ○월 ○일 퇴직하였습니다.</p>\n<p>2. 진정인의 월 평균임금은 ○○○원이며, 계속근로기간 ○년 ○개월에 따른 퇴직금은 ○○○원입니다.</p>\n<p>3. 근로자퇴직급여 보장법 제9조에 따라 퇴직일로부터 14일 이내에 퇴직금을 지급해야 하나, 현재까지 미지급 상태입니다.</p>\n<p>4. 20○○년 ○월 ○일 내용증명을 발송하여 지급을 요청하였으나 피진정인은 이에 응하지 않고 있습니다.</p>\n<p><strong>첨부서류</strong>: 근로계약서 사본, 급여명세서, 퇴직금 산정내역서, 내용증명 사본, 통장 거래내역</p>\n<p style="text-align:right">20○○년 ○월 ○일<br/>진정인 ○○○ (서명 또는 날인)</p>\n</div>',
      },
      {
        title: '진정서 제출 후 대응 전략',
        content:
          '<p><strong style="color:#1e3a5f">진정서 제출 후 근로감독관의 출석 요구에 성실히 응하고, 추가 증거를 준비해두면 처리가 빨라집니다</strong></p>\n<ul>\n<li><strong>출석 요구 대응</strong> — 근로감독관이 진정인과 피진정인 양측에 출석을 요구합니다. 반드시 출석하여 사실관계를 설명하세요</li>\n<li><strong>추가 증거 준비</strong> — 동료 근로자의 확인서, 근무 사진, 카카오톡 대화 내용 등 근로관계를 증명할 수 있는 자료를 추가로 확보하세요</li>\n<li><strong>합의 제안 대응</strong> — 사용자가 조사 과정에서 합의를 제안할 수 있습니다. 합의 시 반드시 합의금에 지연이자(연 20%)를 포함하고 서면으로 작성하세요</li>\n<li><strong>불만족 시</strong> — 근로감독관의 처리 결과에 불만족하면 이의 제기를 하거나, 별도로 소액사건심판을 제기할 수 있습니다</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '퇴직금 청구권과 소멸시효 — 대법원 판단',
        summary:
          '대법원 2019다279283 사건(퇴직금등청구의소)에서 법원은 사용자가 연차휴가 사용촉진 조치를 적법하게 이행하지 않은 경우 미사용 연차수당 지급의무가 소멸하지 않는다고 판시하면서, 퇴직 시 퇴직금과 함께 미지급 연차수당도 함께 청구할 수 있음을 확인했습니다.',
        takeaway:
          '퇴직금 체불 진정 시 미지급 연차수당, 야근수당 등도 함께 청구할 수 있습니다. 진정서에 퇴직금뿐 아니라 미지급 임금 항목을 모두 포함시키세요.',
      },
    ],
    faq: [
      {
        question: '진정서를 제출하면 회사에서 보복할 수 있나요?',
        answer: '<strong>노동부 진정을 이유로 불이익을 주는 것은 부당노동행위로 처벌 대상</strong>입니다. 이미 퇴직한 상태라면 보복의 실익도 없으므로 걱정하지 말고 진정하세요.',
      },
      {
        question: '온라인으로 진정서를 제출할 수 있나요?',
        answer: '<strong>고용노동부 민원마당(minwon.moel.go.kr)에서 24시간 온라인 접수 가능</strong>합니다. 공인인증서(또는 공동인증서)로 로그인 후 "임금체불 진정" 메뉴를 이용하세요.',
      },
      {
        question: '진정서에 퇴직금 금액을 정확히 모르면 어떻게 하나요?',
        answer: '대략적인 금액을 기재하고 <strong>"정확한 금액은 근로감독관 조사 시 확정을 요청합니다"</strong>라고 부기하면 됩니다. 근로감독관이 사업장 자료를 확인하여 정확한 금액을 산출합니다.',
      },
      {
        question: '사업자등록번호를 모르면 진정을 못 하나요?',
        answer: '사업자등록번호는 <strong>국세청 사업자등록 조회(www.hometax.go.kr)</strong>에서 상호명과 대표자명으로 확인할 수 있습니다. 모르더라도 사업장 주소와 상호명만 있으면 진정 접수 가능합니다.',
      },
      {
        question: '진정 처리 중에 소송을 별도로 제기할 수 있나요?',
        answer: '<strong>네, 진정과 소송은 별개의 절차이므로 동시 진행이 가능</strong>합니다. 진정서 처리가 늦어지면 소액사건심판을 병행하는 것이 효과적입니다. 소액사건(3,000만 원 이하)은 변호사 없이도 진행 가능합니다.',
      },
    ],
    cta: {
      text: '퇴직금 체불 대응 전략 무료 진단받기',
      link: '/diagnosis/retirement',
    },
    internalLinks: [
      { label: '퇴직금 가이드', href: '/guide/retirement' },
      { label: '퇴직금 미지급 시 신고 절차', href: '/guide/retirement/unpaid-retirement-report-procedure' },
      { label: '퇴직금 청구 어디부터 시작해야 하나', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '퇴직금 계산법 완벽 가이드', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '퇴직금 진단', href: '/diagnosis/retirement' },
    ],
  },
];
