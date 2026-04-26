import { SpokePage } from '../spoke-pages';

// batch46 nonlabor2 8개: divorce 4 + inheritance 4
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 30~40년 함께 산 뒤 황혼이혼을 결심한 배우자가 연금·퇴직금·부동산 기여도 정리로 정당한 재산분할을 받도록 돕는 페이지다.
// 2. 이 페이지는 부부가 함께 진 카드빚·전세대출을 어떻게 회생절차에서 분담할지 막막한 채무자가 공동채무 처리 방법을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 배우자가 온라인 게임·메신저로 외도한 정황을 잡고도 증거능력이 약할까 걱정하는 배우자가 적법 증거화 방법을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 이혼 판결 확정 후 숨겨놨던 상대방 재산이 발견된 당사자가 추가 재산분할 청구·기간 도과 여부를 점검하도록 돕는 페이지다.
// 5. 이 페이지는 어머니가 재혼해 함께 살던 계부가 사망했을 때 의붓자식인 본인의 상속권 유무를 헷갈려하는 사람이 입양 여부·상속순위를 정리하도록 돕는 페이지다.
// 6. 이 페이지는 부모 사망 후 빚이 더 많은 것을 알게 된 상속인이 한정승인 신청서·재산목록·기간 계산을 차분히 정리하도록 돕는 페이지다.
// 7. 이 페이지는 재혼 가정에서 전처·후처 자녀가 섞여 있어 상속분 계산이 복잡한 상속인이 분할비율·기여분을 정리하도록 돕는 페이지다.
// 8. 이 페이지는 배우자·부모가 사망한 뒤 국민연금·공무원연금 유족연금 청구 절차·서류·기한을 헷갈려하는 유족이 청구 순서를 정리하도록 돕는 페이지다.

export const spokesBatch46Nonlabor2: SpokePage[] = [
  // ─── 1. divorce / elderly-property-division ───
  {
    domain: 'divorce',
    slug: 'divorce-elderly-property-division',
    keyword: '황혼이혼 재산분할 연금',
    questionKeyword: '결혼 30~40년 후 황혼이혼할 때 연금·퇴직금까지 재산분할 받을 수 있나요?',
    ctaKeyword: '황혼이혼 재산분할 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '황혼이혼 재산분할 4단계 연금·퇴직금 청구 절차 | 로앤가이드',
      description:
        '결혼 30~40년 만에 황혼이혼을 결심했다면 부동산·예금뿐 아니라 연금·퇴직금까지 분할 대상에 넣는 절차를 지금 확인해보세요.',
    },
    intro:
      '<p>"30년 넘게 살림만 했는데 이제 와서 빈손으로 나가야 하나 막막해요"라는 상담이 늘고 있습니다. 장기간 혼인 후 이혼은 청구권 자체가 큰 만큼 분할 대상 누락이 가장 뼈아픈 실수가 됩니다. 부동산·예금뿐 아니라 국민연금·공무원연금·퇴직급여·보험까지 분할 대상에 들어갈 수 있고, 기여도 산정도 가사노동·간병 기간 전부가 반영될 소지가 있습니다. 협의이혼 의사확인일 또는 재판상 이혼 확정일로부터 2년 이내가 분할청구 마지노선입니다.</p>',
    sections: [
      {
        title: '분할 대상 — 어디까지 청구할 수 있나',
        content:
          '<p><strong style="color:#1e3a5f">황혼이혼은 일반 이혼보다 분할 대상이 넓게 인정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>부동산·예금</strong> — 부부 공동명의·단독명의 무관, 혼인 중 형성된 자산이면 대상에 포함될 소지가 있습니다.</li>\n<li><strong>퇴직급여</strong> — 이혼 당시 재직 중이라도 장래 받을 퇴직금·퇴직연금이 분할 대상이 될 수 있습니다(대법원 일관된 입장).</li>\n<li><strong>국민연금 분할연금</strong> — 혼인기간 5년 이상이면 국민연금법 제64조에 따라 분할연금 수급권을 검토해볼 수 있습니다.</li>\n<li><strong>보험·증권</strong> — 보장성·저축성 보험 해약환급금, 주식·펀드 평가액도 산입 가능성이 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 30년 이상 혼인이면 가사·간병 기간이 그대로 기여도 가산 사유로 작용할 수 있습니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 분할 청구 전 해야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">분할청구 2년 제척기간 안에 자료를 확보하는 것이 핵심입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자산 목록 작성</strong> — 등기부·통장·증권·연금 가입증명서를 발급받아 표로 정리.</li>\n<li><strong>2단계 — 사실조회 신청</strong> — 가정법원에 금융기관·국민연금공단 사실조회로 은닉 자산 추적.</li>\n<li><strong>3단계 — 기여도 자료</strong> — 가사노동·간병·자녀 양육 기간·금융기여 입증 자료 정리.</li>\n<li><strong>4단계 — 협의이혼 의사확인 신청</strong> — 양육 자녀 없으면 숙려 1개월, 있으면 3개월 후 의사확인.</li>\n<li><strong>5단계 — 분할 합의 또는 재판 청구</strong> — 합의 불성립 시 가정법원에 재산분할 청구 별소.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 분할 대상 누락과 기여도 산정 포인트를 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '상대방이 "내 명의 재산이라 분할 못 한다" 주장할 때',
        content:
          '<p><strong style="color:#1e3a5f">명의는 형식, 분할은 실질입니다.</strong></p>\n<ul>\n<li><strong>실질적 형성 기여</strong> — 단독명의라도 혼인 중 형성된 자산이면 분할 대상이 될 수 있습니다.</li>\n<li><strong>특유재산 추정 깨뜨리기</strong> — 혼인 전 또는 상속·증여로 받은 재산도 가액 유지·증가에 기여했으면 일부 분할 가능성이 있습니다.</li>\n<li><strong>분할 직전 처분</strong> — 이혼 직전 부동산을 가족 명의로 옮긴 흔적은 사해행위 취소 청구로 다툴 수 있습니다.</li>\n<li><strong>차명·은닉 계좌</strong> — 가족·지인 명의 계좌로 옮긴 흔적은 금융기관 사실조회로 추적해볼 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이혼 직전 부동산 등기·계좌 이체 내역은 사해행위 취소 + 분할 산입 자료로 동시 활용 가능합니다.</blockquote>',
      },
      {
        title: '분할 결과 — 분할 비율과 연금 수령',
        content:
          '<p><strong style="color:#1e3a5f">장기 혼인은 분할 비율 40~50% 수준이 일반적입니다.</strong></p>\n<ul>\n<li><strong>분할 비율 가산</strong> — 30년 이상 혼인·가사노동 전담이면 40~50% 인정될 소지가 있습니다.</li>\n<li><strong>연금 분할 수급</strong> — 국민연금 분할연금은 60세 이후 별도 수급, 공무원연금은 별도 신청 필요.</li>\n<li><strong>일시금 vs 정기금</strong> — 부동산은 일시 분할, 연금은 매월 분할 수령 형태로 갈릴 수 있습니다.</li>\n<li><strong>위자료 별도</strong> — 부정행위·악의 유기 등 책임 사유 있으면 재산분할과 별도로 위자료 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 재산분할청구권은 이혼 확정일로부터 2년 내 행사하지 않으면 소멸하므로 일정 관리가 핵심입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 공무원연금·퇴직급여의 재산분할 대상성',
        summary:
          '대법원 2017므11917 사건(대법원, 2019.09.25 선고)에서 법원은 부부 일방이 이혼 당시 공무원으로 재직 중인 경우 퇴직급여·퇴직수당 채권에 대해 상대방 배우자의 협력이 기여한 것으로 인정되면 재산분할 대상에 포함시킬 수 있다는 취지로 판시했습니다.',
        takeaway: '재직 중이어서 아직 받지 않은 퇴직급여라도 분할 대상에 넣어볼 수 있다는 점을 기억하세요.',
      },
    ],
    faq: [
      {
        question: '국민연금 분할연금은 이혼하자마자 받나요?',
        answer:
          '<strong>본인이 60세에 도달해야 수급이 시작됩니다.</strong> 다만 분할 청구 자체는 이혼 확정 후 5년 내에 국민연금공단에 해두는 것이 안전합니다.',
      },
      {
        question: '시댁에서 받은 상속 재산은 원칙적으로 못 받나요?',
        answer:
          '<strong>원칙적으로 특유재산이라 분할 대상이 아닐 가능성이 높습니다.</strong> 다만 혼인 중 가액 유지·증가에 기여했다면 일부 산입될 소지가 있어요.',
      },
      {
        question: '40년 가사만 한 전업주부도 50% 받을 수 있나요?',
        answer:
          '<strong>장기 혼인 + 가사 전담이면 50% 안팎이 인정될 소지가 있습니다.</strong> 다만 자산 형성 시기·기여도 자료에 따라 달라질 수 있어요.',
      },
      {
        question: '협의이혼하면 재산분할은 자동으로 끝나나요?',
        answer:
          '<strong>협의이혼 시 분할 합의서를 별도로 작성하지 않으면 분할은 진행되지 않습니다.</strong> 의사확인일로부터 2년 내에 별도 청구해야 합니다.',
      },
      {
        question: '배우자가 분할 직전 집을 자녀 명의로 옮겼는데 되찾을 수 있나요?',
        answer:
          '<strong>사해행위 취소 청구로 되돌릴 가능성이 있습니다.</strong> 가족 간 무상 이전은 사해성 추정이 작동하므로 등기 이전일·자금 흐름을 확보하세요.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 청구 2년 제척기간', href: '/guide/divorce/divorce-property-division-2year-deadline' },
      { label: '국민연금 분할연금 수급', href: '/guide/divorce/divorce-pension-split-claim' },
      { label: '특유재산과 기여도 평가', href: '/guide/divorce/divorce-special-property-contribution' },
      { label: '사해행위 취소로 은닉 재산 환수', href: '/guide/divorce/divorce-fraudulent-transfer-cancel' },
      { label: '협의이혼 의사확인 절차', href: '/guide/divorce/divorce-mutual-consent-procedure' },
    ],
  },

  // ─── 2. divorce / couple-joint-debt-rehabilitation ───
  {
    domain: 'divorce',
    slug: 'divorce-couple-joint-debt-rehabilitation',
    keyword: '부부 공동채무 회생 분담',
    questionKeyword: '부부가 함께 진 카드빚·전세대출을 회생절차에서 어떻게 분담하나요?',
    ctaKeyword: '부부 공동채무 회생 분담 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '부부 공동채무 회생 5가지 분담 핵심 정리 | 로앤가이드',
      description:
        '이혼·별거 중인 부부가 함께 진 카드빚·전세대출을 누가 어떻게 부담할지 회생·이혼 절차에서 정리하는 방법을 지금 확인해보세요.',
    },
    intro:
      '<p>"같이 쓴 카드인데 한쪽은 회생 신청한다고 하고, 한쪽은 못 갚겠다고 합니다"라는 상담이 늘고 있습니다. 부부 공동채무는 형식적 명의(주채무자·연대보증인)와 실질적 분담(누가 썼는지·누가 갚아왔는지)이 갈리고, 회생절차에서는 명의자에게 변제 의무가, 이혼절차에서는 분담 비율이 별도로 정해질 수 있습니다. 회생 개시 전에 분담 합의 또는 분할 청구 정리를 해두는 것이 안전합니다.</p>',
    sections: [
      {
        title: 'Q. 한쪽 명의 카드빚인데 배우자에게 분담하라고 할 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 가사·생활비로 쓴 흔적이 있다면 일상가사 채무로 분담을 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>일상가사 채무</strong> — 민법 제832조에 따라 식료품·교육비·의료비 등 일상가사 비용은 부부 연대책임이 인정될 소지가 있습니다.</li>\n<li><strong>사용처 입증</strong> — 카드 이용내역·계좌이체로 가족 공동 지출이었음을 증빙하는 게 핵심.</li>\n<li><strong>개인 사치성</strong> — 명품·도박·개인 향응 비용은 일상가사 범위 밖이어서 분담이 어려울 수 있습니다.</li>\n<li><strong>분할 시점 산입</strong> — 이혼 시 재산분할 평가에서 공동 채무는 마이너스 자산으로 차감 처리됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 명의 + 사용처 + 분할 산입 3가지 축에서 각각 다른 결과가 나올 수 있으니 동시에 봐야 합니다.</blockquote>',
      },
      {
        title: 'Q. 한쪽이 회생 들어가면 다른 쪽 채무는 어떻게 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 회생은 신청자 본인 채무만 조정되고 배우자·연대보증인에게는 효력이 미치지 않습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 채권자별 명의 정리</strong> — 주채무자·연대보증인·담보 제공자 구분해 채권자 목록 작성.</li>\n<li><strong>2단계 — 부부 공동채무 표시</strong> — 회생 신청서에 분담분과 단독분을 구분해 기재.</li>\n<li><strong>3단계 — 변제계획안 협의</strong> — 배우자가 일부 부담할 수 있는지 사전 합의 후 신청.</li>\n<li><strong>4단계 — 이혼 시 분할 정리</strong> — 이혼 협의·재판에서 채무 분담 비율을 별도 명시.</li>\n<li><strong>5단계 — 변제 후 구상권 검토</strong> — 본인이 전액 갚은 뒤 일상가사 분담분만큼 배우자에게 구상 청구 가능성 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 공동채무 분담 비율과 회생 영향 범위를 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: 'Q. 전세대출은 누가 갚아야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 명의자에게 변제 의무가 있고, 이혼 시 분담 비율은 따로 정합니다.</strong></p>\n<ul>\n<li><strong>주채무자 명의</strong> — 은행에 대한 변제 의무는 대출 명의자에게 우선 귀속.</li>\n<li><strong>연대보증 효과</strong> — 배우자가 연대보증인이면 은행은 누구에게나 전액 청구 가능.</li>\n<li><strong>이혼 합의서 명시</strong> — 분담 비율을 합의서에 명시해야 추후 구상권 청구 근거가 됩니다.</li>\n<li><strong>전세금 반환분</strong> — 임차보증금이 분할 대상에 들어가면 채무도 함께 차감 평가 가능성이 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임대인에게 보증금 반환을 분할 비율대로 직접 받기는 어렵고, 부부 사이 정산은 이혼 합의서로 별도 명문화하는 게 안전합니다.</blockquote>',
      },
      {
        title: 'Q. 배우자가 모르게 진 빚은 회생 영향 받나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 본인 명의 단독 채무는 본인 회생절차에서만 조정됩니다.</strong></p>\n<ul>\n<li><strong>몰래 진 빚</strong> — 배우자 몰래 본인 명의로만 진 채무는 일상가사 범위 밖이라 분담 청구가 어려울 수 있습니다.</li>\n<li><strong>도박·투자 손실</strong> — 본인 사치·낭비성 채무는 분할 산입에서 제외될 가능성이 높습니다.</li>\n<li><strong>면책 효과</strong> — 회생 변제계획 이행 후 잔여 채무는 면책 가능성이 있어 배우자 부담은 발생하지 않습니다.</li>\n<li><strong>위자료 사유</strong> — 배우자 몰래 거액 채무를 진 행위는 혼인을 계속하기 어려운 중대 사유로 평가될 소지가 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 거액 채무 발생 사실을 숨긴 정황이 드러나면 이혼 사유 + 위자료 청구로 동시에 다툴 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 이혼 재산분할청구권의 채권자대위 및 파산재단 귀속 여부',
        summary:
          '대법원 2023므10861 사건(대법원, 2023.09.21 선고)에서 법원은 이혼으로 인한 재산분할청구권은 채권자대위권의 목적이 될 수 없고 파산재단에도 속하지 않는다는 취지로 판시했습니다. 회생·파산 절차에서도 분할청구권은 본인의 일신전속적 권리로 보호된다는 의미입니다.',
        takeaway: '한쪽이 회생·파산에 들어가도 이혼 재산분할청구는 별도로 보호되어 행사할 여지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '신용카드 가족카드도 일상가사 채무로 인정되나요?',
        answer:
          '<strong>대체로 인정될 가능성이 높습니다.</strong> 다만 사용처가 식비·교육비·의료비 등 가족 공동 지출이었음을 입증할 자료가 있어야 합니다.',
      },
      {
        question: '연대보증 안 섰는데도 배우자 빚을 갚으라고 하나요?',
        answer:
          '<strong>은행은 연대보증 안 선 배우자에게 직접 청구할 수 없습니다.</strong> 다만 일상가사 채무로 분류되면 부부 사이 분담 책임이 발생할 소지가 있어요.',
      },
      {
        question: '회생 신청 후 이혼하면 변제계획에 영향이 있나요?',
        answer:
          '<strong>변제 능력이 변동되면 변경 신청이 필요합니다.</strong> 분할로 자산을 받게 되거나 양육비 부담이 생기면 법원에 변제계획 변경을 신청하세요.',
      },
      {
        question: '이혼 합의서에 채무 분담을 어떻게 적어야 안전한가요?',
        answer:
          '<strong>채권자별 분담 비율과 변제 책임자를 명시하는 것이 안전합니다.</strong> 다만 합의서 효력은 부부 사이 내부 정산 기준일 뿐 채권자에게는 대항하지 못합니다.',
      },
      {
        question: '한쪽이 면책되면 다른 쪽이 전부 갚아야 하나요?',
        answer:
          '<strong>연대보증 또는 일상가사 채무라면 그렇게 될 가능성이 큽니다.</strong> 회생 면책은 신청자 한정 효과라 나머지 분담분은 다른 쪽에 남게 됩니다.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '일상가사 채무의 부부 연대책임', href: '/guide/divorce/divorce-daily-affairs-debt-liability' },
      { label: '회생 신청 시 부부 자산 평가', href: '/guide/divorce/divorce-rehabilitation-couple-asset' },
      { label: '재산분할 시 채무 차감 계산', href: '/guide/divorce/divorce-debt-deduction-formula' },
      { label: '몰래 진 빚의 위자료 청구', href: '/guide/divorce/divorce-secret-debt-damages' },
      { label: '협의이혼 의사확인 절차', href: '/guide/divorce/divorce-mutual-consent-procedure' },
    ],
  },

  // ─── 3. divorce / online-game-affair-evidence ───
  {
    domain: 'divorce',
    slug: 'divorce-online-game-affair-evidence',
    keyword: '온라인 게임 외도 증거',
    questionKeyword: '배우자가 온라인 게임·메신저로 외도한 정황이 잡혔는데 증거로 쓸 수 있나요?',
    ctaKeyword: '온라인 외도 증거 수집 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '온라인 게임 외도 4단계 증거 수집·법적 활용 | 로앤가이드',
      description:
        '배우자가 게임·메신저로 다른 사람과 친밀한 대화·만남을 이어왔다면 적법하게 증거를 모아 부정행위로 다투는 절차를 지금 확인해보세요.',
    },
    intro:
      '<p>"휴대폰 게임에서 같이 듀오 뛴다는데 새벽 3시까지 채팅합니다. 외도가 맞나 의심스럽지만 증거가 약할까 걱정돼요"라는 상담이 늘고 있습니다. 온라인 만남은 신체 접촉이 없어도 친밀한 대화·금전 송금·실제 만남으로 이어지면 부정행위로 평가될 소지가 있습니다. 다만 휴대폰 무단 열람·계정 해킹은 정보통신망법·통신비밀보호법 위반이 되어 증거능력이 부정되거나 역으로 처벌받을 수 있어 적법한 수집 방법이 중요합니다.</p>',
    sections: [
      {
        title: '부정행위 — 어디까지가 외도인가',
        content:
          '<p><strong style="color:#1e3a5f">신체 접촉이 없어도 4가지 정황이 모이면 부정행위로 평가될 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>지속적 친밀 대화</strong> — 호칭(자기·여보)·이모티콘·새벽 시간대 메시지 패턴.</li>\n<li><strong>금전 송금</strong> — 게임 머니·기프티콘·계좌 이체 흔적.</li>\n<li><strong>오프라인 만남</strong> — 실제 만남으로 이어진 정황(호텔·여행·외부 사진 등).</li>\n<li><strong>가족 외면</strong> — 가족 식사·기념일 무시하고 게임·채팅에 빠진 시간 비중.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대법원은 부정한 행위를 "혼인의 순결성·정조의무에 어긋나는 일체의 부적절한 행위"로 폭넓게 봅니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 적법한 증거 수집부터 청구까지',
        content:
          '<p><strong style="color:#1e3a5f">증거 수집 단계에서 "적법성"이 가장 중요합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 본인이 본 화면 캡처</strong> — 공유 PC·거실 화면처럼 정상적으로 노출된 화면은 캡처 가능.</li>\n<li><strong>2단계 — 카드 사용내역·계좌</strong> — 본인이 발급받을 수 있는 가족카드·공동계좌 내역은 합법.</li>\n<li><strong>3단계 — 차량 블랙박스</strong> — 본인 명의 차량의 블랙박스 영상은 적법한 증거가 될 수 있습니다.</li>\n<li><strong>4단계 — 변호사 통한 증거보전</strong> — 휴대폰 압수·계정 정보는 변호사를 통해 법원 증거보전·문서제출명령으로.</li>\n<li><strong>5단계 — 이혼·위자료 청구</strong> — 부정행위 안 날로부터 6개월·발생일로부터 2년 내에 가정법원 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 증거 적법성과 부정행위 입증 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '하지 말아야 할 일 — 위법 증거의 함정',
        content:
          '<p><strong style="color:#1e3a5f">잘못 모은 증거는 본인이 처벌받고 증거능력도 부정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>휴대폰 무단 잠금해제</strong> — 정보통신망법 위반(개인정보 무단 열람)으로 형사처벌 가능성이 있습니다.</li>\n<li><strong>계정 해킹·비번 추측</strong> — 정보통신망 침입죄에 해당할 소지가 있어 증거능력도 부정될 수 있습니다.</li>\n<li><strong>위치추적 앱 무단 설치</strong> — 위치정보보호법 위반에 해당할 가능성이 큽니다.</li>\n<li><strong>제3자 음성·영상 녹취</strong> — 대화에 본인이 참여하지 않은 녹취는 통신비밀보호법 위반.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 의심 정황만 메모로 정리해두고 본격 수집은 변호사 상담 후 적법 절차로 가는 것이 안전합니다.</blockquote>',
      },
      {
        title: '청구 결과 — 위자료·재산분할·상간자 청구',
        content:
          '<p><strong style="color:#1e3a5f">부정행위 입증되면 위자료 + 재산분할 + 상간자 별소까지 가능합니다.</strong></p>\n<ul>\n<li><strong>이혼 위자료</strong> — 배우자에게 정신적 손해배상 청구, 통상 2~3천만 원선이 인정될 수 있습니다.</li>\n<li><strong>상간자 위자료</strong> — 게임에서 만난 상대방에게 별소로 1~2천만 원 수준 청구 검토.</li>\n<li><strong>재산분할 가산</strong> — 부정행위 책임 사유는 분할 비율 평가에서 배우자에게 불리하게 작용할 소지가 있습니다.</li>\n<li><strong>접근금지 가처분</strong> — 상간자가 추가 접촉을 시도하면 가정법원에 접근금지 임시처분 신청.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 부정행위 안 날로부터 6개월이 지나면 부정한 행위 사유로 한 이혼 청구가 막히므로 일정 관리가 중요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 제3자가 부부 일방과 부정행위를 한 경우의 손해배상 책임',
        summary:
          '대법원 2025므10716 사건(대법원, 2026.01.29 선고)에서 법원은 제3자가 부부 일방과 부정행위를 함으로써 혼인의 본질에 해당하는 부부공동생활을 침해하거나 그 유지를 방해한 경우 배우자에게 정신적 고통을 가하는 불법행위가 성립할 수 있다고 판시했습니다.',
        takeaway: '온라인에서 시작된 만남이라도 가족공동생활을 침해한 정황이 있으면 상간자 위자료 청구 여지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '직접 만난 적은 없고 채팅만 했는데도 부정행위인가요?',
        answer:
          '<strong>지속적인 성적·애정 표현이 있으면 부정행위로 평가될 소지가 있습니다.</strong> 신체 접촉 여부보다 친밀성의 정도와 지속 기간이 핵심 기준이에요.',
      },
      {
        question: '배우자 휴대폰을 잠깐 본 캡처도 증거로 쓸 수 있나요?',
        answer:
          '<strong>잠금이 풀린 상태에서 본 화면 캡처는 가능성이 있지만 무단 잠금해제는 위험합니다.</strong> 변호사 상담 후 적법성 검토를 받는 것이 안전합니다.',
      },
      {
        question: '게임 닉네임만 알고 실명은 모르는 상간자도 청구할 수 있나요?',
        answer:
          '<strong>법원에 사실조회·문서제출명령을 통해 게임사·통신사로부터 인적사항을 받아 청구할 수 있습니다.</strong> 변호사 선임 후 진행하는 것이 일반적이에요.',
      },
      {
        question: '부정행위 안 지 6개월 지났는데 이혼 청구 못 하나요?',
        answer:
          '<strong>"부정한 행위" 사유로는 어렵지만, "혼인을 계속하기 어려운 중대한 사유"로 다툴 여지가 남습니다.</strong> 다른 사유와 결합해 청구 가능성을 검토하세요.',
      },
      {
        question: '용서한다는 의사를 표시한 적 있는데 다시 청구 가능한가요?',
        answer:
          '<strong>용서 후 다시 부정행위가 있었다면 새로운 사유로 청구할 수 있습니다.</strong> 다만 단일 행위에 대해서는 사후용서 시 청구가 막힐 수 있어요.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '부정행위 위자료 청구 절차', href: '/guide/divorce/divorce-infidelity-damages-procedure' },
      { label: '상간자 위자료 별소 가이드', href: '/guide/divorce/divorce-third-party-damages-guide' },
      { label: '적법한 외도 증거 수집', href: '/guide/divorce/divorce-affair-evidence-collection-legal' },
      { label: '재판상 이혼 6개월 제척기간', href: '/guide/divorce/divorce-litigation-6month-deadline' },
      { label: '협의이혼 의사확인 절차', href: '/guide/divorce/divorce-mutual-consent-procedure' },
    ],
  },

  // ─── 4. divorce / asset-discovered-after-trial ───
  {
    domain: 'divorce',
    slug: 'divorce-asset-discovered-after-trial',
    keyword: '이혼 후 발견된 재산 추가 분할',
    questionKeyword: '이혼 판결이 끝나고 나서 배우자 숨긴 재산을 알게 됐는데 다시 청구할 수 있나요?',
    ctaKeyword: '이혼 후 추가 재산분할 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '이혼 후 발견된 재산 5가지 추가분할 청구 | 로앤가이드',
      description:
        '이혼 확정 후 배우자가 숨겨놨던 부동산·예금이 발견됐다면 추가 재산분할 청구·기간·증거를 어떻게 정리할지 지금 확인해보세요.',
    },
    intro:
      '<p>"이혼하고 6개월 지났는데 시댁 명의 부동산이 사실은 남편 돈으로 산 거였다는 걸 알게 됐어요"라는 상담이 늘고 있습니다. 이혼 시 분할 대상에서 누락됐던 재산을 사후에 발견한 경우, 이혼 확정일로부터 2년 이내라면 추가 재산분할 청구가 가능할 소지가 있습니다. 다만 발견된 재산이 정말 분할 대상에 들어갔어야 했는지·은닉이었는지·기간이 지나지 않았는지 3가지 축에서 점검이 필요합니다.</p>',
    sections: [
      {
        title: 'Q. 이혼 후에도 재산분할 청구 가능한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 이혼 확정일로부터 2년 이내라면 추가 청구가 가능할 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>제척기간 2년</strong> — 민법 제839조의2에 따라 이혼한 날로부터 2년이 경과하면 청구권 소멸.</li>\n<li><strong>일부 누락 사유</strong> — 분할 대상이 됐어야 했는데 빠진 자산이 핵심 요건.</li>\n<li><strong>은닉·기망</strong> — 배우자가 고의로 숨긴 정황이 있으면 분할 인용 가능성이 올라갈 수 있습니다.</li>\n<li><strong>합의서 한계</strong> — "추가 청구하지 않는다" 합의가 있어도 누락 자산에는 효력이 미치지 않을 가능성이 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 2년 제척기간은 절대적이라 "발견 시점"이 아니라 "이혼 확정일" 기준임을 기억하세요.</blockquote>',
      },
      {
        title: 'Q. 발견된 재산이 분할 대상이라는 걸 어떻게 입증하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 형성 시기·자금 출처·명의 흐름 3가지 자료가 핵심입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 등기·명의 추적</strong> — 등기부등본·과거 명의 변동 내역으로 형성 시기 확인.</li>\n<li><strong>2단계 — 자금 흐름 조회</strong> — 가정법원 사실조회로 배우자·시가·처가 계좌 이체 내역 추적.</li>\n<li><strong>3단계 — 사용 흔적</strong> — 부동산이면 거주·임대 흔적, 예금이면 사용처로 부부 공동성 입증.</li>\n<li><strong>4단계 — 가정법원 청구</strong> — 추가 재산분할 청구를 별소로 제기, 이혼 확정일 기준 2년 이내.</li>\n<li><strong>5단계 — 사해행위 취소 검토</strong> — 분할 직전·직후 가족 명의 이전이 있으면 별도로 사해행위 취소.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 추가분할 가능성과 사해행위 취소 병행 여부를 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: 'Q. 합의서에 "추가 청구 포기"라고 써져 있어요',
        content:
          '<p><strong style="color:#1e3a5f">A. 누락된 재산에는 포기 효력이 미치지 않을 가능성이 있습니다.</strong></p>\n<ul>\n<li><strong>합의 대상의 한계</strong> — 합의서는 "당시 알고 있던 재산"에만 효력이 미치는 게 일반적.</li>\n<li><strong>고의 은닉의 효과</strong> — 배우자가 의도적으로 숨겼다면 합의 자체를 기망에 의한 의사표시로 다툴 여지가 있습니다.</li>\n<li><strong>형평의 원칙</strong> — 누락 자산이 거액이고 지분 차이가 크면 형평상 추가 청구가 인용될 소지가 있습니다.</li>\n<li><strong>새로운 합의 도전</strong> — 합의서가 분할 합의서인지·이혼합의서인지에 따라 효력 범위가 갈립니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 합의서에 "당시 신고된 재산 외에는 추가 청구를 포기한다"는 문구가 명시돼 있어도 은닉 자산에는 효력이 약할 수 있습니다.</blockquote>',
      },
      {
        title: 'Q. 시댁 명의 부동산이라도 청구 가능한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 자금 출처가 배우자라면 사해행위 취소 + 분할 산입 두 갈래 검토 가능합니다.</strong></p>\n<ul>\n<li><strong>차명 부동산</strong> — 명의는 시부모지만 자금이 배우자에게서 나왔다면 차명재산으로 평가될 가능성.</li>\n<li><strong>사해행위 취소</strong> — 이혼 직전·직후 시댁 명의 이전이 있으면 사해성 추정으로 다툴 수 있습니다.</li>\n<li><strong>증여 vs 명의신탁</strong> — 차명이면 명의신탁 무효 + 환원, 증여면 분할 산입에서만 다툼.</li>\n<li><strong>제3자 소송 병행</strong> — 시부모를 피고로 한 별소가 필요할 수 있어 변호사 도움이 거의 필수입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 시댁 명의 자산은 분할 청구 + 명의신탁/사해행위 취소 별소가 함께 필요해 시간이 오래 걸리니 일정에 여유를 두세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 제3자에 대한 사해적 처분과 이혼 위자료 청구권의 단기소멸시효',
        summary:
          '대법원 2023다285162 사건(대법원, 2026.01.22 선고)에서 법원은 손해배상청구권 행사의 객관적·합리적 기대가능성을 부정하는 사유가 있는 경우 단기소멸시효가 진행하지 않을 수 있다고 판시했습니다. 이혼 후 은닉 자산을 알게 된 시점이 권리 행사 가능 시점이라는 점에서 시효 진행 시점 다툼의 여지가 있습니다.',
        takeaway: '이혼 후 숨겨진 재산을 늦게 알게 됐어도 발견 시점과 시효 다툼 여지를 함께 검토할 필요가 있습니다.',
      },
    ],
    faq: [
      {
        question: '이혼 후 3년 만에 발견했는데 정말 청구 못 하나요?',
        answer:
          '<strong>재산분할청구권 자체는 2년 제척기간이라 어렵습니다.</strong> 다만 사해행위 취소·기망에 의한 합의 취소·부당이득반환 등 다른 청구원인을 검토할 여지가 있어요.',
      },
      {
        question: '이혼 합의 당시 일부러 숨긴 게 명백한데도 못 받나요?',
        answer:
          '<strong>고의 은닉이 입증되면 합의 자체를 다툴 여지가 있습니다.</strong> 다만 입증이 어려우니 자금 흐름·취득 시기 자료를 가능한 한 많이 확보하세요.',
      },
      {
        question: '발견 직후 가압류부터 해야 하나요?',
        answer:
          '<strong>본안 청구를 준비하면서 가압류를 동시에 진행하는 것이 안전합니다.</strong> 자산 처분 전에 막아둬야 실효성이 있습니다.',
      },
      {
        question: '협의이혼한 경우와 재판상 이혼한 경우 청구가 다른가요?',
        answer:
          '<strong>두 경우 모두 2년 제척기간이 적용됩니다.</strong> 협의이혼은 의사확인일·신고일, 재판상은 판결 확정일이 기산점이라 일자 확인이 중요해요.',
      },
      {
        question: '발견된 자산이 가상자산(코인)이라도 분할 대상인가요?',
        answer:
          '<strong>혼인 중 형성된 가상자산은 분할 대상이 될 수 있습니다.</strong> 거래소 사실조회와 지갑 주소 추적이 필요할 수 있어요.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 2년 제척기간 정리', href: '/guide/divorce/divorce-property-division-2year-deadline' },
      { label: '사해행위 취소로 은닉 재산 환수', href: '/guide/divorce/divorce-fraudulent-transfer-cancel' },
      { label: '시가·처가 명의 차명재산', href: '/guide/divorce/divorce-in-laws-nominee-asset' },
      { label: '추가 재산분할 청구 절차', href: '/guide/divorce/divorce-additional-property-division' },
      { label: '가상자산 이혼 분할', href: '/guide/divorce/divorce-cryptocurrency-division' },
    ],
  },

  // ─── 5. inheritance / stepfather-relationship-share ───
  {
    domain: 'inheritance',
    slug: 'inheritance-stepfather-relationship-share',
    keyword: '계부 상속관계 의붓자식',
    questionKeyword: '어머니 재혼한 계부가 사망했는데 의붓자식인 저도 상속받을 수 있나요?',
    ctaKeyword: '계부 상속권 입양 여부 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '계부 사망 5가지 상속관계 입양·기여분 정리 | 로앤가이드',
      description:
        '어머니가 재혼한 계부와 함께 살았지만 입양 절차가 명확하지 않다면 의붓자식의 상속권·기여분 가능성을 지금 확인해보세요.',
    },
    intro:
      '<p>"계부와 30년 같이 살았는데 갑자기 돌아가셨어요. 친자식 아니라 못 받는다는 말 들었는데 정말 그런가요?"라는 상담이 적지 않습니다. 의붓자식은 원칙적으로 계부·계모의 상속인이 아니지만, 친양자 입양·일반 입양·기여분 청구로 길이 열릴 수 있습니다. 사망일로부터 3개월(한정승인·포기) 또는 10년(상속회복청구) 안에 본인 위치를 정리해야 합니다.</p>',
    sections: [
      {
        title: 'Q. 의붓자식은 계부 상속을 받을 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 입양 여부에 따라 결과가 갈립니다.</strong></p>\n<ul>\n<li><strong>친양자 입양</strong> — 친양자 입양이 됐다면 친자녀와 동일한 상속권이 인정될 수 있습니다.</li>\n<li><strong>일반 입양(보통양자)</strong> — 일반 입양도 양친에 대한 상속권이 인정될 수 있습니다.</li>\n<li><strong>입양 없이 사실상 부자관계</strong> — 입양 절차 없이 함께 산 의붓자식은 원칙적으로 상속권이 없습니다.</li>\n<li><strong>기여분 청구 여지</strong> — 입양 없어도 장기 부양·간병 시 기여분 청구로 일부 받을 수 있는 길이 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가족관계증명서·입양관계증명서를 먼저 발급받아 본인의 법적 위치부터 확인해보세요.</blockquote>',
      },
      {
        title: 'Q. 입양 여부는 어떻게 확인하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 가족관계증명서·입양관계증명서로 즉시 확인 가능합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 입양관계증명서 발급</strong> — 시·구청 또는 정부24에서 본인 또는 계부 명의로 발급.</li>\n<li><strong>2단계 — 입양 형태 확인</strong> — 친양자 입양·일반 입양·미입양 3가지 중 어디에 해당하는지 확인.</li>\n<li><strong>3단계 — 가족관계 정정 검토</strong> — 입양 형식이 명확하지 않으면 가정법원 정정 신청 검토.</li>\n<li><strong>4단계 — 상속재산 확인</strong> — 안심상속 원스톱 서비스로 사망자 재산 일괄 조회.</li>\n<li><strong>5단계 — 한정승인·기여분 검토</strong> — 사망일로부터 3개월 내에 한정승인·기여분 청구 여부 결정.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 입양 여부와 기여분 청구 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: 'Q. 입양 안 됐어도 기여분으로 받을 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 기여분은 원칙적으로 공동상속인 사이의 권리라 의붓자식에게는 직접 인정되지 않을 가능성이 큽니다.</strong></p>\n<ul>\n<li><strong>기여분의 주체</strong> — 민법 제1008조의2에 따라 기여분 청구는 공동상속인이 주체인 게 원칙.</li>\n<li><strong>특별연고자 분여</strong> — 상속인이 없는 경우(상속인 부존재) 특별연고자 청구로 일부 분여 가능성이 있습니다.</li>\n<li><strong>유증·유언</strong> — 계부가 생전에 유언으로 일부 재산을 남겨놓았다면 유증 형태로 받을 수 있습니다.</li>\n<li><strong>부양료·간병비 정산</strong> — 부양·간병에 들인 비용은 사후 채권 형태로 상속재산에 청구 가능성을 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 평소 부양·간병 영수증·간병기록·통장 흐름을 정리해두면 기여분 또는 채권 청구 시 결정적 자료가 됩니다.</blockquote>',
      },
      {
        title: 'Q. 어머니가 살아 계신데 어머니 사후엔 어떻게 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 계부 사망 시 어머니가 1순위 배우자 상속을 받고, 어머니 사후 친자녀에게 다시 상속됩니다.</strong></p>\n<ul>\n<li><strong>계부 사망</strong> — 어머니(배우자) + 계부의 친자녀가 공동상속인이 됩니다.</li>\n<li><strong>의붓자식의 위치</strong> — 입양 없으면 상속인이 아니라 어머니 지분에만 간접적 영향이 있습니다.</li>\n<li><strong>어머니 사후 절차</strong> — 어머니가 받은 재산은 어머니 사후 친자녀(의붓자식 본인)에게 상속됩니다.</li>\n<li><strong>유언으로 지정</strong> — 계부가 유언으로 의붓자식에게 일부 유증해두면 직접 받을 길이 열립니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 어머니가 한정승인·상속포기를 하면 그 효과가 의붓자식의 장래 상속에도 영향을 미칠 수 있어 신중히 결정해야 합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 피상속인 배우자의 장기간 동거·간호와 기여분 인정 기준',
        summary:
          '대법원 2014스44 사건(대법원, 2019.11.21 선고)에서 법원은 피상속인의 배우자가 장기간 동거하면서 피상속인을 간호한 경우 그 배우자에게 민법 제1008조의2에 따른 기여분을 인정할 것인지와 그 정도를 판단하는 기준을 제시하며, 전처 자녀들과 후처·후처 자녀들 사이의 공평한 분할 기준을 다뤘습니다.',
        takeaway: '재혼 가정에서는 동거·간호 기간이 길수록 기여분 인정과 분할 비율 조정 여지가 커집니다.',
      },
    ],
    faq: [
      {
        question: '계부가 친양자 입양 절차를 했는지 모르겠어요',
        answer:
          '<strong>입양관계증명서 한 통이면 즉시 확인됩니다.</strong> 친양자 입양은 가족관계증명서에서 친자녀와 동일하게 표시되니 발급받아 보세요.',
      },
      {
        question: '계부 친자녀들이 저를 빼고 분할하려고 해요',
        answer:
          '<strong>입양됐다면 동순위 공동상속인으로 협의에 참여할 권리가 있습니다.</strong> 분할 배제 시 가정법원에 상속재산분할심판 청구 가능성이 있어요.',
      },
      {
        question: '계부가 유언으로 저에게도 일부 남기셨어요',
        answer:
          '<strong>유증 효력은 입양 여부와 무관하게 인정될 수 있습니다.</strong> 다만 친자녀들이 유류분 반환 청구를 할 가능성이 있으니 유언장 형식·내용을 미리 점검하세요.',
      },
      {
        question: '계부 빚이 더 많은데 의붓자식인 제가 갚아야 하나요?',
        answer:
          '<strong>입양 안 됐다면 상속인이 아니므로 채무 부담 의무가 없을 가능성이 큽니다.</strong> 입양됐다면 한정승인·상속포기를 3개월 내 신청하세요.',
      },
      {
        question: '간병비·생활비 빌려준 게 있는데 받을 수 있나요?',
        answer:
          '<strong>채권자로서 상속재산에 청구할 수 있습니다.</strong> 차용증·계좌이체 내역·간병기록을 정리해두면 일반 채권자 자격으로 상속채권 청구 가능성이 있어요.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '친양자 vs 일반양자 상속권 차이', href: '/guide/inheritance/inheritance-adoption-types-difference' },
      { label: '재혼 가정 상속분 계산', href: '/guide/inheritance/inheritance-remarriage-share-calculation' },
      { label: '기여분 청구 절차와 요건', href: '/guide/inheritance/inheritance-contribution-claim-procedure' },
      { label: '특별연고자 분여 신청', href: '/guide/inheritance/inheritance-special-relationship-grant' },
      { label: '안심상속 원스톱 서비스', href: '/guide/inheritance/inheritance-anshim-onestop-service' },
    ],
  },

  // ─── 6. inheritance / debt-larger-limited-acceptance ───
  {
    domain: 'inheritance',
    slug: 'inheritance-debt-larger-limited-acceptance',
    keyword: '빚 더 많은 한정승인 신청',
    questionKeyword: '부모님 사망 후 빚이 재산보다 많을 때 한정승인 신청서·기간 어떻게 정리하나요?',
    ctaKeyword: '한정승인 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '한정승인 4단계 빚 더 많은 상속 안전 종료 | 로앤가이드',
      description:
        '부모님 사망 후 채무가 재산보다 많을 때 한정승인 신청서·재산목록·기간 계산을 단계별로 정리해 안전하게 마무리하는 방법을 지금 확인해보세요.',
    },
    intro:
      '<p>"부친이 갑자기 돌아가셨는데 카드빚·대출이 알고 보니 재산보다 훨씬 많습니다"라는 상담이 적지 않습니다. 한정승인은 상속받은 재산 한도 안에서만 빚을 갚도록 책임을 제한하는 제도라, 정확한 재산목록과 기간 계산이 가장 중요합니다. 사망일이 아니라 "상속 개시를 안 날"로부터 3개월이라 기산점 다툼 여지가 있고, 채무 초과 사실을 늦게 알았다면 특별한정승인 길도 열릴 수 있습니다.</p>',
    sections: [
      {
        title: '한정승인 — 어떤 상황에서 선택하나',
        content:
          '<p><strong style="color:#1e3a5f">상속포기와 한정승인을 잘못 고르면 빚을 떠안거나 다른 가족에게 넘어갈 수 있습니다.</strong></p>\n<ul>\n<li><strong>채무 초과가 명확</strong> — 재산보다 빚이 많으면 한정승인 또는 포기 검토.</li>\n<li><strong>재산이 일부 있음</strong> — 받을 재산이 일부 있으면 한정승인이 안전(받은 만큼만 갚으면 됨).</li>\n<li><strong>재산이 거의 없음</strong> — 재산이 사실상 0이면 상속포기가 단순.</li>\n<li><strong>다음 순위 영향</strong> — 포기는 후순위(형제·조부모)에게 빚이 넘어갈 수 있어 한정승인이 차단 효과 큼.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 후순위 가족이 모르는 사이에 빚을 떠안지 않도록 한정승인 + 가족 통보가 안전한 조합입니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 사망 직후부터 신청까지',
        content:
          '<p><strong style="color:#1e3a5f">"안 날로부터 3개월" 기산점이 가장 중요합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 안심상속 원스톱 신청</strong> — 시·구청 또는 정부24에서 사망자 재산·채무 일괄 조회.</li>\n<li><strong>2단계 — 재산목록 작성</strong> — 부동산·예금·보험·자동차·채무를 항목별로 정리(누락 시 단순승인 의제 위험).</li>\n<li><strong>3단계 — 한정승인 신청서 제출</strong> — 가정법원에 신청서 + 재산목록 + 가족관계증명서 + 사망진단서 첨부.</li>\n<li><strong>4단계 — 채권자 공고·통지</strong> — 신청 수리 후 5일 내 신문 공고 + 알고 있는 채권자 개별 통지.</li>\n<li><strong>5단계 — 변제·청산</strong> — 공고 기간(2개월) 종료 후 채권자별 안분 변제, 잉여 있으면 본인 귀속.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 한정승인 vs 포기 선택과 기간 계산을 분석해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '재산목록 작성 — 가장 자주 빠뜨리는 4가지',
        content:
          '<p><strong style="color:#1e3a5f">재산목록 누락은 단순승인 의제로 평가될 수 있어 위험합니다.</strong></p>\n<ul>\n<li><strong>보장성 보험금</strong> — 사망보험금이 상속재산이냐 수익자 고유재산이냐는 약관에 따라 갈리니 조회 필수.</li>\n<li><strong>차량·소형동산</strong> — 자동차·오토바이·귀금속도 환가성 있으면 재산목록에 기재.</li>\n<li><strong>임대보증금</strong> — 사망 당시 받을 보증금·반환받을 전세금도 재산.</li>\n<li><strong>채권 채권</strong> — 사망자가 빌려준 돈(차용증·계좌이체)이 있으면 채권 자산으로 기재.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 민법 제1026조 제3호 단순승인 의제(고의로 재산목록에 기입하지 않은 때)를 피하려면 빠뜨림 없이 기재하는 것이 가장 안전합니다.</blockquote>',
      },
      {
        title: '특별한정승인 — 늦게 알았을 때',
        content:
          '<p><strong style="color:#1e3a5f">채무 초과 사실을 안 날로부터 3개월 내에 가능합니다.</strong></p>\n<ul>\n<li><strong>요건</strong> — 중대한 과실 없이 채무 초과를 몰랐을 것 + 안 날로부터 3개월 이내 신청.</li>\n<li><strong>입증 자료</strong> — 채권자 통지서·신용정보 조회 결과·법원 송달기록 등 인지 시점 자료.</li>\n<li><strong>"중대한 과실" 다툼</strong> — 가족관계나 동거 여부에 따라 알고 있었어야 한다고 평가될 가능성이 있어 다툼.</li>\n<li><strong>병행 절차</strong> — 특별한정승인과 함께 채권자 변제 정지 신청을 함께 진행하면 안전.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 한정승인 후 재산 일부를 처분(매매·증여·소비)하면 단순승인 의제로 한정 효과가 사라질 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 법정단순승인 사유 중 "고의로 재산목록에 기입하지 아니한 때"의 의미',
        summary:
          '대법원 2019다29853 사건(대법원, 2022.07.28 선고)에서 법원은 민법 제1026조 제3호의 법정단순승인 사유 중 "고의로 재산목록에 기입하지 아니한 때"에 해당하기 위해서는 상속인이 상속재산을 은닉하여 상속채권자를 사해할 의사가 있을 것을 필요로 한다는 취지로 판시했습니다.',
        takeaway: '단순 누락이 아니라 사해 의도가 있어야 한정 효과가 깨지므로 성실하게 작성한 자료라면 보호받을 여지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '한정승인 신청 기한이 사망일부터 3개월 맞나요?',
        answer:
          '<strong>"상속이 개시된 사실을 안 날"로부터 3개월입니다.</strong> 사망 통지를 늦게 받았다면 통지받은 날이 기산점이 될 수 있어요.',
      },
      {
        question: '한정승인 후에 재산을 좀 써도 되나요?',
        answer:
          '<strong>변제 절차 전에 처분하면 단순승인 의제 위험이 큽니다.</strong> 청산 절차가 끝나기 전엔 보존 행위만 하는 것이 안전합니다.',
      },
      {
        question: '한정승인하면 신용에 영향 있나요?',
        answer:
          '<strong>본인의 신용에는 영향이 없는 게 일반적입니다.</strong> 사망자 채무가 본인 채무로 이전되는 구조가 아니라 상속재산 한도로만 한정되는 제도이기 때문이에요.',
      },
      {
        question: '신청 비용은 얼마나 드나요?',
        answer:
          '<strong>인지대·송달료·공고비 합쳐 보통 10~30만 원 수준이며, 변호사 선임 시 별도 수임료가 추가됩니다.</strong> 재산이 거의 없으면 소송구조 신청도 검토할 수 있어요.',
      },
      {
        question: '형제 중 한 명만 한정승인하면 되나요?',
        answer:
          '<strong>각자 독립적으로 결정해야 하며 다른 형제에게 효력이 미치지 않습니다.</strong> 가족 모두에게 빚이 흩어지지 않도록 함께 한정승인하거나 일부는 포기·일부는 한정 형태로 조정하세요.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '한정승인 vs 상속포기 선택', href: '/guide/inheritance/inheritance-limited-vs-renunciation' },
      { label: '특별한정승인 신청 요건', href: '/guide/inheritance/inheritance-special-limited-acceptance' },
      { label: '안심상속 원스톱 서비스', href: '/guide/inheritance/inheritance-anshim-onestop-service' },
      { label: '재산목록 누락 단순승인 의제', href: '/guide/inheritance/inheritance-omitted-asset-simple-acceptance' },
      { label: '한정승인 후 채권자 청산 절차', href: '/guide/inheritance/inheritance-limited-creditor-liquidation' },
    ],
  },

  // ─── 7. inheritance / multiple-marriages-distribution ───
  {
    domain: 'inheritance',
    slug: 'inheritance-multiple-marriages-distribution',
    keyword: '재혼 자녀 상속분 분할',
    questionKeyword: '재혼 가정에서 전처·후처 자녀가 섞여 있을 때 상속분은 어떻게 계산하나요?',
    ctaKeyword: '재혼 가정 상속분 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '재혼 자녀 상속 4단계 분할비율 기여분 정리 | 로앤가이드',
      description:
        '재혼 가정에서 전처·후처 자녀가 섞여 있어 상속분 계산이 복잡하다면 분할비율·기여분·유류분을 단계별로 정리하는 방법을 지금 확인해보세요.',
    },
    intro:
      '<p>"아버지가 재혼하셔서 새어머니랑 이복동생이 있는데 사망 후 분할이 너무 복잡합니다"라는 상담이 늘고 있습니다. 친자녀와 이복자녀는 모두 1순위 직계비속으로 동순위·동일 지분이 원칙이지만, 후처 명의 재산·기여분·증여 선급분 처리에서 분쟁이 생기기 쉽습니다. 사망일로부터 3개월 안에 한정승인·포기 결정과 함께 가정법원 분할심판 준비를 시작하는 것이 안전합니다.</p>',
    sections: [
      {
        title: '상속분 계산 — 누가 얼마나 받는가',
        content:
          '<p><strong style="color:#1e3a5f">친자녀·이복자녀 모두 동순위·동일지분이 원칙입니다.</strong></p>\n<ul>\n<li><strong>배우자 + 자녀</strong> — 배우자 1.5 + 자녀들 각 1 비율로 분할(친자·이복 구분 없음).</li>\n<li><strong>예: 후처 + 자녀 3명</strong> — 후처 1.5/4.5, 자녀 각 1/4.5(약 22%씩).</li>\n<li><strong>전처 자녀의 위치</strong> — 친자녀이므로 후처 자녀와 동일한 지분.</li>\n<li><strong>유류분 보장</strong> — 직계비속은 법정상속분의 1/2이 유류분으로 보장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 친자·이복 구분이 아니라 "직계비속이냐"가 기준이라 사망자 자녀로 등록되면 모두 동순위입니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 사망 직후부터 분할까지',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보 → 협의 → 심판 순서가 정석입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가족관계 확인</strong> — 가족관계증명서·입양관계증명서로 상속인 전원 확정.</li>\n<li><strong>2단계 — 재산목록 작성</strong> — 안심상속 원스톱으로 재산·채무 일괄 조회.</li>\n<li><strong>3단계 — 증여 선급분 점검</strong> — 생전 증여(부동산·현금)는 특별수익으로 차감 검토.</li>\n<li><strong>4단계 — 협의분할 시도</strong> — 상속인 전원 합의 시 협의분할서 + 인감증명으로 분할 등기.</li>\n<li><strong>5단계 — 가정법원 심판 청구</strong> — 협의 불성립 시 상속재산분할심판 + 기여분 청구 동시 제기.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 분할비율·기여분·특별수익 영향을 분석해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '특별수익 — 생전 증여를 어떻게 차감하나',
        content:
          '<p><strong style="color:#1e3a5f">생전 증여는 상속분 선급으로 보고 본인 몫에서 차감 평가합니다.</strong></p>\n<ul>\n<li><strong>대상</strong> — 부동산 증여·결혼 자금·사업 자금 등 거액 지원.</li>\n<li><strong>평가 시점</strong> — 상속개시 시점 가액으로 평가(증여 당시 금액 아님).</li>\n<li><strong>실증 자료</strong> — 증여계약서·등기·계좌이체·세금 신고서로 입증.</li>\n<li><strong>유류분 영향</strong> — 특정 자녀에게만 거액 증여가 있었으면 다른 자녀가 유류분 반환 청구 가능성.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 생전 증여 자료가 부족하면 가정법원에 사실조회로 등기·이체 내역을 확인할 수 있습니다.</blockquote>',
      },
      {
        title: '기여분 — 후처가 간병한 경우',
        content:
          '<p><strong style="color:#1e3a5f">장기 간병·동거는 기여분 인정 사유가 될 수 있습니다.</strong></p>\n<ul>\n<li><strong>요건</strong> — 통상 부양 수준을 넘는 특별한 부양 + 상속재산 형성·유지에 기여.</li>\n<li><strong>입증 자료</strong> — 간병기록·의료비 영수증·돌봄 기간·가사 분담 자료.</li>\n<li><strong>인정 비율</strong> — 사안에 따라 5~30% 가산이 일반적이며, 사례에 따라 더 높을 가능성도 있음.</li>\n<li><strong>전처 자녀와 후처 갈등</strong> — 후처 기여분이 인정되면 전처 자녀 몫이 그만큼 감소될 수 있어 자료 충돌이 잦음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 기여분 청구는 분할심판과 동시에 신청해야 하며 별소로 늦게 내면 받아들여지지 않을 가능성이 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 가분채권의 상속재산분할 대상성과 기여분 산정',
        summary:
          '대법원 2024스866 사건(대법원, 2025.03.24 선고)에서 법원은 가분채권이 원칙적으로 상속재산분할 대상이 되지 않지만 공동상속인들 사이의 공평을 해치는 부당한 결과가 발생하는 경우 분할 대상에 포함시킬 수 있다는 취지로 판시했습니다.',
        takeaway: '재혼 가정처럼 분쟁이 잦은 사안에서는 예금 같은 가분채권도 분할심판 대상에 넣을 수 있는 길이 있습니다.',
      },
    ],
    faq: [
      {
        question: '이복형제와 친자녀의 상속분이 정말 같나요?',
        answer:
          '<strong>법적으로 동일합니다.</strong> 친자녀·이복자녀 모두 1순위 직계비속이라 같은 지분을 받습니다.',
      },
      {
        question: '후처 명의로 된 재산도 분할 대상인가요?',
        answer:
          '<strong>후처 명의는 원칙적으로 후처 소유라 분할 대상이 아닐 가능성이 큽니다.</strong> 다만 사망자 돈으로 산 차명재산이 입증되면 명의신탁 무효 + 상속재산 환원 다툼 가능성이 있어요.',
      },
      {
        question: '상속재산분할심판은 어디에 청구하나요?',
        answer:
          '<strong>피상속인의 마지막 주소지 관할 가정법원에 청구합니다.</strong> 대리인 없이도 가능하지만 분쟁이 복잡하면 변호사 도움이 효율적이에요.',
      },
      {
        question: '유류분 청구 기간은 얼마나 되나요?',
        answer:
          '<strong>안 날로부터 1년, 상속 개시일로부터 10년입니다.</strong> 증여를 늦게 알게 됐다면 안 날 기준이 적용될 수 있어 자료 정리가 중요합니다.',
      },
      {
        question: '아버지 재혼 후 입양된 의붓동생도 같은 지분인가요?',
        answer:
          '<strong>친양자·일반양자 입양이 됐다면 친자녀와 동일한 1순위 상속권이 인정될 수 있습니다.</strong> 입양관계증명서로 입양 형태를 먼저 확인하세요.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '특별수익과 분할 차감 계산', href: '/guide/inheritance/inheritance-special-benefit-deduction' },
      { label: '기여분 청구 절차와 요건', href: '/guide/inheritance/inheritance-contribution-claim-procedure' },
      { label: '유류분 반환 청구 1년 기한', href: '/guide/inheritance/inheritance-legal-reserve-1year' },
      { label: '협의분할서 작성 가이드', href: '/guide/inheritance/inheritance-agreement-division-guide' },
      { label: '상속재산분할심판 청구', href: '/guide/inheritance/inheritance-division-trial-petition' },
    ],
  },

  // ─── 8. inheritance / pension-survivor-claim ───
  {
    domain: 'inheritance',
    slug: 'inheritance-pension-survivor-claim',
    keyword: '연금 유족급여 청구',
    questionKeyword: '배우자·부모 사망 후 국민연금·공무원연금 유족연금은 누가 어떻게 청구하나요?',
    ctaKeyword: '유족연금 청구 절차 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '유족연금 5단계 국민연금·공무원연금 청구 정리 | 로앤가이드',
      description:
        '배우자·부모 사망 후 국민연금·공무원연금·산재 유족급여 청구 자격·서류·기한이 헷갈린다면 단계별 정리 방법을 지금 확인해보세요.',
    },
    intro:
      '<p>"남편이 갑자기 떠났는데 국민연금·공무원연금이 어떻게 나오는지 누구한테 물어야 하나 막막해요"라는 상담이 적지 않습니다. 유족연금은 상속과 별개의 청구 절차이고, 1순위 청구권자가 우선이며 5년이 지나면 시효 소멸 가능성이 있습니다. 국민연금·공무원연금·산재유족급여·군인연금 등 종류별 청구 창구가 다르니 사망 직후 한꺼번에 정리하는 것이 효율적입니다.</p>',
    sections: [
      {
        title: 'Q. 유족연금은 상속재산인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 유족연금은 수급권자 고유의 권리로 상속과는 별개입니다.</strong></p>\n<ul>\n<li><strong>고유 수급권</strong> — 유족급여는 법령상 수급권자(배우자·자녀·부모 순)가 직접 받는 권리.</li>\n<li><strong>상속포기 영향 없음</strong> — 상속을 포기해도 유족연금은 별도로 받을 수 있는 게 일반적.</li>\n<li><strong>1인 우선 원칙</strong> — 배우자가 1순위로 단독 수급, 자녀·부모는 후순위.</li>\n<li><strong>분할 불가</strong> — 형제·자매 사이에 나눠갖는 구조가 아니라 1순위 1인이 받음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 빚이 더 많아 한정승인·상속포기를 한 경우에도 유족연금은 별도로 청구해 받을 수 있는 길이 열려 있습니다.</blockquote>',
      },
      {
        title: 'Q. 어디에 어떻게 청구하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 사망자가 가입했던 연금 종류별로 창구가 다릅니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가입 이력 확인</strong> — 안심상속 원스톱으로 국민연금·공무원연금·군인연금·사학연금 가입 여부 일괄 조회.</li>\n<li><strong>2단계 — 국민연금공단</strong> — 사망자 가입자였으면 국민연금공단 지사에 유족연금 청구.</li>\n<li><strong>3단계 — 공무원연금공단</strong> — 공무원이었으면 공무원연금공단에 유족연금 또는 유족일시금 청구.</li>\n<li><strong>4단계 — 근로복지공단</strong> — 업무상 재해 사망이면 산재 유족급여를 별도로 청구.</li>\n<li><strong>5단계 — 군인·사학연금</strong> — 군인은 국방부, 사립학교 교직원은 사학연금공단으로 따로 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 연금 종류별 청구 자격과 시효를 분석해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: 'Q. 청구 기한은 얼마나 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 종류별로 3~5년 시효가 있어 빠를수록 안전합니다.</strong></p>\n<ul>\n<li><strong>국민연금</strong> — 사망일로부터 5년 내 청구하지 않으면 소멸시효 가능성.</li>\n<li><strong>공무원연금</strong> — 5년 시효가 일반적이며 일부 항목은 3년 단기시효.</li>\n<li><strong>산재 유족급여</strong> — 사망일 다음 날부터 3년 시효(근로복지공단).</li>\n<li><strong>군인·사학연금</strong> — 각 법령에 따라 3~5년 시효, 늦어질수록 다툼 여지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시효는 청구 시점이 아니라 "권리 발생 시점"이 기준이라 사망 직후 곧바로 청구 준비를 시작하는 것이 가장 안전합니다.</blockquote>',
      },
      {
        title: 'Q. 유족연금 받는 사람이 여러 명이면?',
        content:
          '<p><strong style="color:#1e3a5f">A. 1순위 1인이 받고, 1순위 사망 시 후순위로 이전됩니다.</strong></p>\n<ul>\n<li><strong>1순위 배우자</strong> — 사실혼 포함 가능성이 있고 단독 수급이 원칙.</li>\n<li><strong>2순위 자녀</strong> — 미성년·장애 자녀 등 수급 요건 충족 자녀가 분할 수급할 수 있음.</li>\n<li><strong>3순위 부모</strong> — 배우자·자녀 없을 때 부모(생계의존 요건 등) 청구 가능.</li>\n<li><strong>이전 청구</strong> — 1순위 수급자 사망·재혼 등으로 자격 상실 시 후순위로 이전 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 사실혼 배우자는 동거·생계·주민등록 사실 자료를 미리 정리해두면 1순위 인정 다툼에서 유리할 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 직무상 사망 시 유족급여와 손해배상의 공제 순서·범위',
        summary:
          '대법원 2021다255853 사건(대법원, 2024.11.21 선고)에서 법원은 타인의 불법행위로 인한 직무상 재해로 사망한 교직원의 상속인들이 일실 퇴직연금 상당의 손해배상채권을 상속하는 한편 유족연금을 받는 경우 공제 순서와 인적 범위를 다뤘으며, 유족연금 수급권자 본인 몫에서만 공제하도록 판시했습니다.',
        takeaway: '유족연금은 상속재산과 별도 권리이지만 손해배상과 겹칠 때 공제 순서를 잘 정리해야 손해를 줄일 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '재혼하면 유족연금이 끊기나요?',
        answer:
          '<strong>국민연금·공무원연금 모두 재혼 시 수급권 상실이 일반적입니다.</strong> 다만 자녀가 있으면 자녀에게 이전될 수 있어 사전에 공단에 문의해보세요.',
      },
      {
        question: '사실혼 배우자도 받을 수 있나요?',
        answer:
          '<strong>국민연금은 사실혼 배우자도 수급권자로 인정될 수 있습니다.</strong> 동거·주민등록·생계 자료가 핵심 입증 자료이니 미리 정리해두세요.',
      },
      {
        question: '사망 사유가 자살이어도 유족연금 받나요?',
        answer:
          '<strong>국민연금은 일반적으로 받을 수 있고, 산재는 업무상 사유 인정 시 가능합니다.</strong> 다만 가입기간·납부 요건 미충족 시 수급이 어려울 수 있어요.',
      },
      {
        question: '한정승인하면 유족연금도 채권자에게 가나요?',
        answer:
          '<strong>유족연금은 수급권자 고유 재산이라 채권자에게 넘어가지 않을 가능성이 높습니다.</strong> 빚이 많아도 별도로 청구해 본인 생활비로 사용 가능해요.',
      },
      {
        question: '청구 거부됐는데 다툴 수 있나요?',
        answer:
          '<strong>각 공단의 심사청구 → 행정심판 → 행정소송으로 다툴 길이 있습니다.</strong> 결정 통지일로부터 90일 내에 다음 단계로 넘어가야 하니 일정 관리가 중요해요.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '안심상속 원스톱 서비스', href: '/guide/inheritance/inheritance-anshim-onestop-service' },
      { label: '국민연금 유족연금 청구', href: '/guide/inheritance/inheritance-national-pension-survivor' },
      { label: '공무원연금 유족급여 절차', href: '/guide/inheritance/inheritance-public-pension-survivor' },
      { label: '산재 유족급여와 손해배상 공제', href: '/guide/inheritance/inheritance-workers-comp-survivor-deduction' },
      { label: '사실혼 배우자 유족연금', href: '/guide/inheritance/inheritance-defacto-spouse-survivor' },
    ],
  },
];
