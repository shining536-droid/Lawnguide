import { SpokePage } from '../spoke-pages';

// batch54 jeonse 2 + stalking 2 + assault 2 + child-support 2 (총 8개)
//
// 고유 존재 이유:
// 1. jeonse / 만기 후 임차인 점유 계속 — 계약 만기 후 임차인이 보증금 미반환을 이유로 점유를 계속하는 상황에서 차임 상당액·지연이자·임차권등기 트랙 정리
// 2. jeonse / 다가구주택 + HUG 미가입 — 다가구주택 임차인이 HUG 보증보험 미가입 상태에서 보증금 우선변제권을 주장하는 절차
// 3. stalking / 직장 동료 일방적 호감 + 추적 — 직장 동료의 호감표시를 거절한 후 시작된 추적·SNS 스토킹에 대한 사내 신고 + 형사 트랙
// 4. stalking / 옛 배우자 양육권 분쟁 빌미 — 이혼·별거 중 배우자가 \'양육권 협의\'를 빌미로 반복 접근할 때 가정법원 접근금지 + 스토킹법 결합 트랙
// 5. assault / 술자리 우발 폭행 + 합의 전 형량 영향 — 단발 우발 폭행으로 입건된 가해자가 합의 시점·반성 자료가 형량에 미치는 영향을 정리하는 페이지
// 6. assault / 데이트폭력 피해자 + 신변보호·접근금지 — 연인·이별 후 폭행 피해자의 경찰 신변보호조치 + 접근금지 + 형사 절차 정리
// 7. child-support / 양육비 합의 후 잠적 시 추적 — 협의이혼 후 양육비 약속만 하고 잠적한 비양육자를 양육비이행관리원·법원 직권조사로 추적하는 절차
// 8. child-support / 비양육친 재혼·소득증가 시 증액 — 비양육자가 재혼·승진·사업 성공 등으로 소득이 늘었을 때 양육비 증액을 청구하는 트랙

export const spokesBatch54JeonseStalkingAssaultCS: SpokePage[] = [
  // ─── 1. jeonse / occupation-after-termination-deposit (victim, 절차형) ───
  {
    domain: 'jeonse',
    slug: 'jeonse-occupation-after-termination-deposit',
    keyword: '전세 만기 후 점유 계속 보증금',
    questionKeyword: '전세계약이 끝났는데 보증금을 못 받아 이사를 못 가요. 점유를 계속해도 차임을 내야 하나요?',
    ctaKeyword: '만기 후 점유 보증금 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '전세 만기 후 임차인 점유 계속 — 보증금 미반환 5단계 | 로앤가이드',
      description:
        '계약 만기 후 보증금 못 받고 점유를 계속할 때 차임·지연이자·임차권등기 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"전세 2년 계약이 3월 말에 끝났는데 임대인이 보증금 1억8천을 \'다음 임차인 들어오면\'이라며 미루고 있어요. 이사 갈 집은 잡혀있는데 보증금이 안 나와 이사도 못 가고 있습니다. \'그냥 계속 살면 차임 내야 한다는데 그게 맞나?\' 막막한 상황이에요." 만기 후 임차인의 점유 계속은 \'대항력 + 우선변제권\' 보호를 위한 합법적 권리입니다. 다만 보증금 반환과 동시이행 관계라 차임 상당액(부당이득)을 부담할 수 있어요. 임차권등기 + 손해배상(이사비·중도해지 위약금) + 지연이자(연 5~12%)를 함께 검토해보는 것이 출발점입니다.</p>',
    sections: [
      {
        title: 'Q. 만기 후 점유 계속하면 차임을 계속 내야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 보증금 반환 전까지 점유 계속은 합법이지만, 차임 상당액(부당이득)을 임대인에게 지급할 수 있다는 게 판례 흐름입니다.</strong></p>\n<ul>\n<li><strong>점유 계속의 권리 (주임법 제3조)</strong> — 보증금 반환받을 때까지 임차주택을 인도하지 않을 동시이행 항변권. 이사 가도 임차권등기로 대항력·우선변제권 유지 가능.</li>\n<li><strong>차임 상당액 부담</strong> — 점유 계속 + 사용·수익은 부당이득. 단, 보증금에서 공제·상계되거나 임대인의 미반환에 따른 손해배상과 상계되는 사례 많음.</li>\n<li><strong>지연이자 청구권</strong> — 보증금 미반환은 채무불이행. 종료일 다음 날부터 연 5%(민법) 또는 연 12%(소촉법, 소제기 후) 지연이자.</li>\n<li><strong>임차권등기명령 (주임법 제3조의3)</strong> — 종료일 + 보증금 미반환 시 즉시 신청. 등기 후 이사 가도 대항력·우선변제권 유지.</li>\n<li><strong>손해배상 청구</strong> — 이사비·중도해지 위약금·임시 거주비 등 입증 가능한 손해는 임대인에게 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 점유 계속은 합법 + 안전. 다만 차임 상당액과 임대인 책임(지연이자·손해배상)이 상계 구조이므로 영수증·증빙을 정리해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 만기 후 보증금 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단·HUG 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 만기 직전 보증금 반환 청구 (만기 1개월 전 내용증명)</strong> — 임대인에게 만기일·반환 일정·계좌 안내. 우체국 내용증명 + 배달증명 발송.</li>\n<li><strong>2단계 — 만기일 + 미반환 시 임차권등기명령 신청 (만기 다음 날 즉시)</strong> — 가정·지방법원 임차권등기명령 신청. 약 2~4주 내 결정. 결정문 등기부 등재 후 대항력 영구 유지.</li>\n<li><strong>3단계 — 점유 계속 + 사용 일지 작성 (등기 완료까지)</strong> — 등기 완료 전까지는 점유 + 전입 유지가 핵심. 사용 시작·종료·이사 일정 일지 작성.</li>\n<li><strong>4단계 — 보증금 반환소송 (등기 후 6개월 내, HUG 가입자는 보증이행)</strong> — HUG 가입자는 이행청구(2개월 내 지급). 미가입자는 반환소송(약 6~12개월) + 지연이자 + 손해배상 병합 청구.</li>\n<li><strong>5단계 — 강제집행 (판결 확정 후)</strong> — 임대인 부동산·예금·차량·임대차 보증금 가압류. 재산조회신청(민사집행법 제74조)으로 추적.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">점유 계속·임차권등기·HUG 가입 여부에 따라 회수 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">임차권등기·반환소송에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>임대차계약서 원본 + 확정일자 사본</strong> — 보증금·계약기간 입증 핵심.</li>\n<li><strong>주민등록등본 (해당 주소)</strong> — 점유 + 대항력 입증.</li>\n<li><strong>내용증명 + 배달증명 영수증</strong> — 만기 전후 반환 청구 입증.</li>\n<li><strong>임대인 인적사항 + 등기부등본</strong> — 송달 + 가압류용.</li>\n<li><strong>만기 후 사용·점유 일지</strong> — 차임 상당액 산정 + 손해 입증.</li>\n<li><strong>이사비·임시 거주비 영수증</strong> — 손해배상 청구 입증.</li>\n<li><strong>HUG 보증보험 증서 (가입자만)</strong> — 보증이행 청구 시 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 만기 다음 날 바로 임차권등기 신청을 미루면 \'점유 일자 입증\'이 약해집니다. 만기 다음 영업일 즉시 접수가 가장 안전합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 만기 후 점유 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"새 임차인 구해줘야 보증금 받는다"</strong> — 임차인이 새 임차인을 구해줄 의무 없음. 만기일이 보증금 반환 시점. 미반환은 임대인 책임.</li>\n<li><strong>"차임만큼 보증금에서 차감해도 된다는데"</strong> — 점유 계속 시 차임 상당액 발생은 맞지만, 임대인의 미반환 책임(지연이자·손해)과 상계 구조. 일방 차감보다 정산서 작성이 안전.</li>\n<li><strong>"임차권등기 늦게 해도 괜찮다"</strong> — 임차권등기 전에 이사 + 전입 빠지면 대항력 상실. 즉시 신청이 핵심.</li>\n<li><strong>"점유한다고 알려야 하나"</strong> — 임대인에게 점유 의사 통보 의무 없음. 다만 차임 정산·이사 일정 협의를 위한 내용증명은 권장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / HUG 1566-9009 / 임대차분쟁조정위원회 1670-7150 / 임대차상담센터(서울시 1644-7700) / 우체국 내용증명 1588-1300.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차주택 점유와 차임 지급의무',
        summary:
          '대법원 2024다256116 사건(대법원, 2024.09.13 선고)에서 법원은 임대차목적물이 임차인에게 인도되어야 임차인의 차임지급의무가 발생하는지 여부에 관한 법리를 다루며, 점유·사용·수익 관계에서 차임 상당액의 부담 구조를 확인했습니다. 만기 후 점유를 계속하는 임차인은 보증금 반환과 동시이행 관계에서 사용·수익에 따른 차임 상당액을 부담할 수 있지만, 동시에 임대인의 보증금 미반환에 따른 지연이자·손해배상 책임과 상계되는 구조라는 점에서 영수증·일지·송금 기록을 정리해두는 것이 정산 다툼을 줄이는 데 도움이 됩니다.',
        takeaway: '점유 계속은 합법적 권리이지만 차임 상당액과 임대인 책임을 상계하는 정산 구조이므로, 임차권등기 + 보증금 반환소송 + 손해배상 병합 청구 트랙을 한꺼번에 검토해보세요.',
      },
    ],
    faq: [
      {
        question: '만기 후 점유한다고 \'무단 점유\'로 형사 처벌받나요?',
        answer:
          '<strong>아닙니다.</strong> 보증금 미반환에 대한 동시이행 항변권 행사라 합법. 다만 명도 청구 소송 + 강제집행이 진행되면 인도해야 함.',
      },
      {
        question: '점유 계속 시 차임은 정확히 얼마를 내야 하나요?',
        answer:
          '<strong>기존 차임 또는 인근 시세 차임 상당액(부당이득)이 일반적입니다.</strong> 다만 보증금 미반환에 따른 지연이자·손해와 상계되는 구조라 실제 부담은 줄어드는 사례 많음.',
      },
      {
        question: '임차권등기 신청은 변호사 선임해야 하나요?',
        answer:
          '<strong>본인 직접 신청 가능합니다.</strong> 법원 안내 양식 + 계약서·등본·내용증명 첨부. 비용은 수입인지 약 3,000원 + 송달료. 법률구조공단(132)에서 무료 안내도.',
      },
      {
        question: 'HUG 가입자는 점유 계속해야 하나요?',
        answer:
          '<strong>HUG 보증이행 청구는 점유 여부 무관 가능.</strong> 다만 보증이행에 \'2년 이내 신청\' 등 요건이 있으니 빠른 청구가 중요. 자세한 절차는 HUG(1566-9009).',
      },
      {
        question: '이사 가야 하는데 점유 계속해야 하나요?',
        answer:
          '<strong>임차권등기명령 결정문이 등기부에 등재되면 이사 + 전입을 빼도 대항력·우선변제권 유지됩니다.</strong> 등기 완료 확인 후 이사 가는 것이 안전.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '임차권등기명령 신청 절차', href: '/guide/jeonse/jeonse-deposit-not-returned-response' },
      { label: '전세보증금 반환 종합 가이드', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
      { label: '묵시적 갱신 후 임차인 해지 통지', href: '/guide/jeonse/jeonse-implicit-renewal-tenant-termination-notice' },
      { label: '보증금 공제 미납 차임·관리비', href: '/guide/jeonse/jeonse-deposit-deduction-unpaid-rent-fee' },
      { label: '전세 보증금 반환소송 절차', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
    ],
  },

  // ─── 2. jeonse / multifamily-priority-payment-no-hug (victim) ───
  {
    domain: 'jeonse',
    slug: 'jeonse-multifamily-priority-payment-no-hug',
    keyword: '다가구주택 우선변제 HUG 미가입',
    questionKeyword: '다가구주택 전세인데 HUG 보증보험 미가입이에요. 임대인이 부도나면 보증금 받을 수 있나요?',
    ctaKeyword: '다가구주택 우선변제 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '다가구주택 + HUG 미가입 — 우선변제권 5단계 정리 | 로앤가이드',
      description:
        '다가구주택 임차인이 HUG 보증 미가입 상태에서 임대인 부도·경매 시 우선변제권을 주장하는 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"다가구주택 2층 전세 1억5천에 살고 있는데, 임대인이 \'개인 사정\'으로 HUG 가입을 거부해 미가입 상태입니다. 최근 임대인이 다른 채무로 경매에 넘어간다는 소문이 들려 잠을 못 이루고 있어요. \'미가입이라 보증금 다 떼이는 거 아닌가?\' 막막합니다." 다가구주택은 한 건물에 여러 임차인이 있어 우선변제 순위가 \'전입신고 + 확정일자\' 시점에 따라 정해집니다. HUG 미가입이라도 우선변제권이 보장되면 경매 배당에서 회수 가능해요. 다만 다가구주택 특유의 \'선순위 임차인 + 근저당\' 사이에서 본인 순위를 확인하는 것이 핵심입니다.</p>',
    sections: [
      {
        title: 'Q. HUG 미가입이면 보증금 못 받나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. HUG 미가입이라도 주임법상 우선변제권이 있으면 경매 배당으로 회수 가능합니다. 다만 선순위 채권자와 다른 임차인 합산 금액에 따라 회수율이 달라져요.</strong></p>\n<ul>\n<li><strong>HUG 보증과 우선변제권 차이</strong> — HUG 보증: 보증금 반환을 HUG가 대신 보장. 우선변제권: 경매 배당에서 우선 변제. 둘은 별개.</li>\n<li><strong>우선변제권 요건 (주임법 제3조의2)</strong> — 입주(인도) + 전입신고 + 확정일자 받기. 3가지 모두 충족된 시점부터 우선변제 순위 인정.</li>\n<li><strong>다가구주택의 특수성</strong> — 한 건물에 여러 임차인이 있을 수 있고, 본인보다 먼저 전입·확정일자 받은 임차인이 있으면 그 순위는 본인보다 앞섬.</li>\n<li><strong>근저당 등 선순위 채권</strong> — 등기부등본의 근저당·가압류 설정일이 본인 확정일자보다 빠르면 그 채권이 본인보다 우선 배당.</li>\n<li><strong>최우선변제 (소액임차인 보호)</strong> — 보증금이 일정 금액 이하면 최우선변제(서울 5,500만원 이하 → 1,900만원 보호 등). 본인이 해당되는지 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: HUG 미가입이라도 우선변제권 + 최우선변제로 일정 금액 회수 가능. 등기부등본·다른 임차인 현황을 확인해 본인 순위를 파악하는 게 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 다가구주택 우선변제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단·HUG 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 본인 우선변제권 점검 (지금 즉시)</strong> — 입주일·전입신고일·확정일자를 확인. 3가지 모두 갖춰야 우선변제권 인정.</li>\n<li><strong>2단계 — 등기부등본 + 다른 임차인 현황 조사 (1주)</strong> — 등기부등본 발급(인터넷등기소). 다가구는 같은 건물 다른 임차인이 있을 수 있으니 주민센터 \'전입세대 열람\' 신청.</li>\n<li><strong>3단계 — 위험 신호 발견 시 임차권등기명령 (즉시)</strong> — 임대인 부도·경매 소문 시 즉시 신청. 등기 후 이사 가도 대항력·우선변제권 유지.</li>\n<li><strong>4단계 — 경매 개시 시 배당요구 신청 (배당요구 종기 전, 통상 2~3개월)</strong> — 경매 개시 통지 받으면 배당요구 종기 내 배당요구 신청. 미신청 시 배당 불가.</li>\n<li><strong>5단계 — 부족분 추가 청구 (배당 후)</strong> — 배당으로 못 받은 부족분은 임대인 다른 재산에 강제집행 + 손해배상 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">우선변제 순위·다른 임차인 현황·근저당 시점에 따라 회수 가능성이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">우선변제·배당요구·임차권등기에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>임대차계약서 원본 + 확정일자 도장</strong> — 우선변제 순위 핵심 자료.</li>\n<li><strong>주민등록등본 + 전입신고 시점</strong> — 대항력·우선변제권 발생 시점.</li>\n<li><strong>등기부등본 (전세 시작 시점 + 현재)</strong> — 근저당·가압류 시점 비교.</li>\n<li><strong>전입세대 열람 (주민센터)</strong> — 같은 건물 다른 임차인 현황.</li>\n<li><strong>임대차계약 시 \'다가구 임차인 현황\' 자료</strong> — 계약 당시 임대인 제공 자료(없으면 미고지 책임 다툼 자료).</li>\n<li><strong>임차권등기명령 결정문 (등기 후)</strong> — 등기 후 이사 시에도 권리 유지 입증.</li>\n<li><strong>경매 개시 통지서 + 배당요구신청서</strong> — 경매 단계 진입 시.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 다가구주택 계약 시 \'다른 임차인 현황\' 미고지는 중개사·임대인 책임 사유. 계약 당시 받은 자료가 없으면 손해배상 청구 자료가 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 다가구주택 + HUG 미가입 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"확정일자만 받으면 무조건 보증금 받는다"</strong> — 확정일자는 우선변제 순위만 정함. 본인보다 먼저 전입·확정일자 받은 다른 임차인 + 근저당이 합산 시 회수 부족 가능성.</li>\n<li><strong>"같은 건물 다른 호실 임차인 현황 모른다"</strong> — 주민센터 \'전입세대 열람\'으로 확인 가능. 임대인이 미고지하면 중개사·임대인 책임 사유.</li>\n<li><strong>"전입신고만 하면 우선변제권 생긴다"</strong> — 입주 + 전입신고 + 확정일자 3가지 모두 갖춰야. 전입만으로는 대항력만 발생.</li>\n<li><strong>"임대인이 \'걱정 마라\'고 한다"</strong> — 부도 우려가 있으면 즉시 임차권등기명령 신청 + 보증보험 가입 요구. 임대인 말만 믿고 미루면 실권 위험.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / HUG 1566-9009 / 임대차분쟁조정위원회 1670-7150 / 한국공인중개사협회 02-3404-3500 / 인터넷등기소 1544-0773.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 다가구주택 임차인 보호와 중개사 주의의무',
        summary:
          '대법원 2024다283668 사건(대법원, 2025.12.04 선고)에서 법원은 다가구주택 임대차계약을 중개한 개업공인중개사의 주의의무 이행 여부에 관한 법리를 다루면서, 중개사가 다른 임차인 현황·선순위 권리관계를 고지할 의무가 있다는 점을 확인했습니다. HUG 보증 미가입 다가구주택 임차인은 우선변제권을 통한 경매 배당이 핵심 회수 수단이므로, 본인 순위·다른 임차인 보증금 합산·근저당을 점검하고 위험 신호 발견 시 임차권등기명령으로 권리를 즉시 보전하는 절차를 검토할 수 있습니다.',
        takeaway: 'HUG 미가입이라도 우선변제권 + 최우선변제로 일정 금액 회수 가능합니다. 계약 당시 \'다가구 임차인 현황\' 미고지는 중개사·임대인 책임 사유가 되므로 자료를 보관해두세요.',
      },
    ],
    faq: [
      {
        question: '소액임차인 최우선변제는 누구나 받을 수 있나요?',
        answer:
          '<strong>보증금이 일정 금액 이하 + 입주·전입신고를 갖추면 가능합니다.</strong> 서울 기준 5,500만원 이하 보증금 → 1,900만원 보호 등 지역·시점별 기준 다름. 주임법 시행령 별표 참조.',
      },
      {
        question: '다른 임차인 현황은 어떻게 알아내나요?',
        answer:
          '<strong>주민센터 \'전입세대 열람\' 신청.</strong> 본인 임차주택 주소로 신청하면 같은 주소지 전입세대 확인 가능. 수수료 약 300원.',
      },
      {
        question: '임대인이 HUG 가입 거부하면 강제 가입 가능한가요?',
        answer:
          '<strong>강제 가입은 어렵지만 \'임차인 보증보험\' 본인 가입 검토.</strong> 임차인이 직접 가입하는 SGI 서울보증·HUG 임차인용 보증 상품. 자세한 사항은 HUG(1566-9009) 문의.',
      },
      {
        question: '임대인 다른 채무로 경매가 진행되면 어떻게 되나요?',
        answer:
          '<strong>경매 개시 통지 받으면 배당요구 종기 내 배당요구 신청.</strong> 미신청 시 배당 불가. 임차권등기명령 + 배당요구 동시 진행이 안전.',
      },
      {
        question: '계약 당시 다른 임차인 현황을 못 받았으면요?',
        answer:
          '<strong>중개사·임대인 미고지 책임 사유.</strong> 손해 발생 시 손해배상 청구 검토. 한국공인중개사협회 또는 법률구조공단 132 통해 책임 추궁 절차 안내.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '전세보증금 반환 종합 가이드', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
      { label: '임차권등기명령 신청 절차', href: '/guide/jeonse/jeonse-deposit-not-returned-response' },
      { label: '전세 만기 후 점유 계속 대응', href: '/guide/jeonse/jeonse-occupation-after-termination-deposit' },
      { label: '묵시적 갱신 후 임차인 해지 통지', href: '/guide/jeonse/jeonse-implicit-renewal-tenant-termination-notice' },
      { label: '보증금 공제 미납 차임·관리비', href: '/guide/jeonse/jeonse-deposit-deduction-unpaid-rent-fee' },
    ],
  },

  // ─── 3. stalking / coworker-rejected-pursuit-procedure (victim, 절차형) ───
  {
    domain: 'stalking',
    slug: 'stalking-coworker-rejected-pursuit-procedure',
    keyword: '직장 동료 호감 거절 후 추적',
    questionKeyword: '직장 동료가 호감을 표시해 거절했는데 그 후 자꾸 따라오고 SNS도 추적해요. 회사에 알려야 하나요?',
    ctaKeyword: '직장 동료 스토킹 대응 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '직장 동료 호감 거절 후 추적 — 사내 신고 + 형사 5단계 | 로앤가이드',
      description:
        '직장 동료의 호감표시를 거절한 뒤 시작된 추적·SNS 스토킹 대응. 사내 고충처리 + 경찰 신고 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"같은 부서 동료가 두 달 전 \'좋아한다\'며 고백해서 \'그럴 마음 없다\'고 거절했어요. 그런데 그 후로 점심 시간에 같은 식당에 따라오고, 퇴근 동선까지 알고 있어요. 인스타그램 부계정으로 \'친구 신청\'도 옵니다. \'회사에 알리면 일이 커질까? 그냥 내가 부서 옮겨야 하나?\' 너무 막막합니다." 직장 동료 스토킹은 거리·동선 노출이 크고 매일 마주쳐야 한다는 점에서 사내 보호조치 + 형사 트랙 병행이 효과적입니다. 사내 고충처리(인사·괴롭힘 신고)는 분리·근무지 변경 등 빠른 보호조치를 만들 수 있고, 경찰 잠정조치(접근금지)는 회사 밖에서도 효력. 두 트랙을 함께 검토해보세요.</p>',
    sections: [
      {
        title: 'Q. 직장 동료 스토킹은 어떻게 입증하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 거절 시점·이후 행동 변화·사내외 추적 패턴을 시간순으로 정리하는 것이 핵심입니다.</strong></p>\n<ul>\n<li><strong>거절 시점 입증</strong> — 고백·거절 카톡·문자·녹취. 거절 후부터 행동이 변했음을 입증하는 기준점.</li>\n<li><strong>사내 추적</strong> — 점심 같은 식당·복도 마주침·회의실 동선. 빈도·시간이 우연 아님 입증.</li>\n<li><strong>퇴근·출근 동선 추적</strong> — 같은 지하철·버스·골목·CCTV 출현. 본인 동선이 노출됐다는 신호.</li>\n<li><strong>SNS·메신저 접근</strong> — 차단해도 부계정·다른 플랫폼으로 재접근. 디지털 증거 보전.</li>\n<li><strong>다른 동료·상사 진술</strong> — \'그 사람 행동 이상하다\' 발언자 진술서가 보조 증거.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 거절 시점 + 이후 변화 + 사내외 추적 3축 패턴이 시간순으로 정리되면 반복성·일방성이 명확해집니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 사내 + 경찰 5단계',
        content:
          '<p><strong style="color:#1e3a5f">경찰청·KISA 공식 절차 + 직장 내 괴롭힘 매뉴얼을 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 시간순 일지 + 증거 정리 (1~2주)</strong> — 거절 시점·사내 추적·퇴근 동선·SNS 접근을 시간순으로 기록. 캡처·녹음·CCTV 출현 기록.</li>\n<li><strong>2단계 — 사내 고충처리 신고 (인사팀·괴롭힘 신고센터)</strong> — 직장 내 괴롭힘 또는 성희롱(거절 후 보복성 추적이면) 신고. 분리·근무지 변경·당사자 면담 금지 등 보호조치 요청.</li>\n<li><strong>3단계 — 경찰 신고 + 잠정조치 신청 (피해 인지 후 즉시)</strong> — 지역 경찰서·여청수사팀. 잠정조치(서면 경고·접근금지·전기통신 금지·구금) 신청. 사내 분리만으로 부족할 때 효과적.</li>\n<li><strong>4단계 — 사내 조사 + 징계 (사내 고충 신고 후)</strong> — 회사가 가해자 조사 → 징계(경고·정직·해고). 거절 후 보복은 직장 내 괴롭힘 추가 인정 가능.</li>\n<li><strong>5단계 — 형사 고소 + 민사 손해배상</strong> — 스토킹처벌법 제18조 위반(3년 이하 징역 또는 3,000만원 이하 벌금). 정신적 피해는 위자료 청구. 회사가 적절한 조치 안 했으면 회사 사용자책임도 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">사내 신고·잠정조치·형사 트랙을 어떤 순서로 진행할지가 회사 분위기·증거 상황에 따라 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">사내 신고·경찰 신고에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>거절 시점 카톡·문자·녹취</strong> — 행동 변화 기준점.</li>\n<li><strong>시간순 일지 (날짜·장소·행위·증인)</strong> — 사내·사외·온라인 3축 정리.</li>\n<li><strong>사내 마주침·동선 기록</strong> — 같은 식당·복도·회의실. 동료 진술 보조.</li>\n<li><strong>퇴근·출근 동선 기록 + CCTV</strong> — 지하철·버스·골목 마주침. CCTV는 7~30일 보존이라 즉시 신청.</li>\n<li><strong>SNS·메신저 캡처 + 화면녹화</strong> — 부계정 접근 디지털 증거.</li>\n<li><strong>동료·상사 진술서</strong> — \'그 사람 행동 이상하다\' 발언자 + 추적 목격자.</li>\n<li><strong>본인 진술서 + 심리적 영향</strong> — 거절 시점·추적 시작·정신과 진료 기록.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: \'회사에 알리면 시끄러워진다\'고 미루다 증거가 사라집니다. 일지 + 캡처를 매일 정리하고 사내 고충처리는 빠르게 신고하는 게 안전합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 직장 동료 스토킹 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"같은 부서라 우연 마주침일 뿐"</strong> — 사내 마주침은 일부 우연 가능성 있지만, 점심·복도·회의실 빈도가 우연 수준 넘으면 의도성 인정. 퇴근 동선까지 겹치면 명백.</li>\n<li><strong>"회사에 알리면 보복당할까 두렵다"</strong> — 직장 내 괴롭힘 신고자 보복은 근로기준법 제76조의3 위반. 신고만으로 불이익 받으면 별도 노동위 구제신청 가능.</li>\n<li><strong>"내가 부서 옮기는 게 빠르다"</strong> — 가해자 분리·근무지 변경이 원칙. 본인이 손해 보는 결과는 사내 절차상 부적절. 인사팀에 분리 요청.</li>\n<li><strong>"고백 거절도 너무 단호했나"</strong> — 거절은 본인 권리. 거절 방식이 어쨌든 그 후 추적은 가해자 책임. 본인 책임감 가질 사안 아님.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 경찰청 사이버범죄 신고시스템(ecrm.police.go.kr) / 112 / 여성긴급전화 1366 / 고용노동부 직장 내 괴롭힘 상담 1350 / 대한법률구조공단 132 / KISA 118.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망 + 추적 행위의 스토킹범죄 인정',
        summary:
          '대법원 2025도36 사건(대법원, 2025.10.30 선고)에서 법원은 스토킹처벌법은 지속·반복적인 스토킹범죄로부터 피해자를 신속하게 구조해 개인의 자유로운 의사결정과 사생활의 평온이 침해되는 것을 막고자 하는 행정적 보호조치라는 점을 분명히 했습니다. 직장 동료처럼 매일 마주쳐야 하는 환경에서 거절 후 시작된 추적·SNS 접근은 \'반복성·일방성\' 요건을 충족할 가능성이 높아, 사내 보호조치 + 형사 잠정조치를 함께 신청해 본인 동선·근무 환경을 보호하는 절차를 검토할 수 있습니다.',
        takeaway: '직장 동료 스토킹은 사내 분리만으로 부족한 사례가 많습니다. 사내 고충 신고 + 경찰 잠정조치 + 형사 고소 3축 트랙을 함께 검토해 보호 효과를 높여보세요.',
      },
    ],
    faq: [
      {
        question: '회사에 알리면 부서 이동·해고 위험 있을까요?',
        answer:
          '<strong>신고자 보복은 위법입니다.</strong> 근로기준법 제76조의3 직장 내 괴롭힘 신고자 보호. 신고만으로 불이익 받으면 노동위 구제신청 + 회사 책임 추궁.',
      },
      {
        question: '거절을 너무 단호하게 한 게 문제일까요?',
        answer:
          '<strong>아닙니다.</strong> 거절은 본인 권리. 거절 방식이 어쨌든 그 후 추적은 가해자 책임. 책임감 가질 사안 아니에요.',
      },
      {
        question: '잠정조치 신청 시 회사에도 통보되나요?',
        answer:
          '<strong>가해자에게만 통보됩니다.</strong> 회사·다른 동료에게 자동 공개 의무 없음. 본인이 사내 신고도 함께 하면 인사팀에 통보될 수 있어 두 트랙 정보 공유 범위는 본인이 결정.',
      },
      {
        question: '사내 신고만으로 부족한 경우 언제인가요?',
        answer:
          '<strong>분리·근무지 변경 후에도 추적 지속 시.</strong> 사내 분리는 회사 안에서만 효력이라 퇴근 후·SNS 접근은 막지 못해요. 그 경우 잠정조치(접근금지)가 필요.',
      },
      {
        question: '직장 동료 사내 마주침도 \'반복 접근\'인가요?',
        answer:
          '<strong>일부 우연 가능성 있지만 빈도·시간이 우연 수준 넘으면 인정.</strong> 점심·복도·회의실 + 퇴근 동선까지 겹치면 명백. 일지로 빈도 입증.',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 신고 절차 안내', href: '/guide/stalking/stalking-report-procedure' },
      { label: '잠정조치·접근금지 신청', href: '/guide/stalking/stalking-temporary-measures' },
      { label: '동호회 회원 스토킹 대응', href: '/guide/stalking/stalking-club-member-pursuit-procedure' },
      { label: '헤어진 연인 온라인 증거 수집', href: '/guide/stalking/stalking-ex-lover-online-evidence-collect' },
      { label: '스토킹 처벌 수위와 양형', href: '/guide/stalking/stalking-penalty-overview' },
    ],
  },

  // ─── 4. stalking / ex-spouse-custody-dispute-pretext (victim) ───
  {
    domain: 'stalking',
    slug: 'stalking-ex-spouse-custody-dispute-pretext',
    keyword: '옛 배우자 양육권 빌미 스토킹',
    questionKeyword: '이혼한 전 배우자가 \'아이 보고 싶다\' \'양육 협의\'를 빌미로 자꾸 찾아오고 연락해요. 신고 가능한가요?',
    ctaKeyword: '옛 배우자 양육권 빌미 스토킹 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '옛 배우자 양육권 빌미 스토킹 — 가정법원 + 형사 5단계 | 로앤가이드',
      description:
        '이혼한 배우자가 양육·면접교섭을 빌미로 반복 접근할 때 가정법원 접근금지 + 스토킹법 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"6개월 전 이혼했고 양육권은 제가 가졌어요. 전 배우자가 처음에는 \'아이 한 번만 보자\' 했는데 지금은 매일 새벽까지 카톡 + 회사 앞·집 앞에 찾아옵니다. \'법원 정한 면접교섭 외에는 만나지 않기로 했는데, 신고하면 양육권 분쟁 다시 시작될까 두려워요.\'" 옛 배우자가 양육·면접교섭을 빌미로 반복 접근하면 가정법원 접근금지 + 스토킹처벌법 신고가 함께 활용 가능합니다. 가정폭력처벌법 + 스토킹법 + 가사소송법 트랙을 결합해 형사 + 가사 양쪽 보호를 받을 수 있어요. 신고가 양육권에 불리하게 작용하지 않는다는 점이 핵심입니다.</p>',
    sections: [
      {
        title: 'Q. 옛 배우자의 양육 빌미 접근도 스토킹인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 양육 협의·면접교섭은 정해진 절차·시간 외 반복 접근이면 스토킹·가정폭력 인정 가능합니다.</strong></p>\n<ul>\n<li><strong>면접교섭은 법원·합의로 정해진 시간·장소</strong> — 그 외 시간·장소 접근은 \'면접교섭권 행사\'가 아니라 별개 행위.</li>\n<li><strong>양육 협의 빌미 카톡·전화 반복</strong> — \'아이 보고 싶다\' \'양육 의논하자\' 명목으로 새벽까지·회사 앞 등 반복 접근은 스토킹 행위.</li>\n<li><strong>거절·차단 후 재접근</strong> — 명백한 거절 + 차단 후에도 부계정·다른 번호로 재접근하면 일방성 인정.</li>\n<li><strong>가정폭력처벌법 적용</strong> — 옛 배우자라도 가정폭력처벌법 \'배우자였던 사람\' 해당. 가정보호명령(접근금지·전기통신 금지)도 함께 신청 가능.</li>\n<li><strong>스토킹법 + 가정폭력법 + 가사소송법 결합</strong> — 형사(스토킹법·가정폭력법) + 가사(면접교섭 변경·접근금지)를 함께 진행해 양면 보호.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'양육 협의\' 명목이라도 정해진 절차·시간 외 반복 접근이면 스토킹·가정폭력 인정 가능. 양육권 분쟁과 별개입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가사 + 형사 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단·경찰청·가정법원 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 시간순 일지 + 증거 정리 (1~2주)</strong> — 이혼·면접교섭 합의 시점·이후 접근 시간·장소·내용. 카톡·전화 캡처·녹음·CCTV 출현 기록.</li>\n<li><strong>2단계 — 경찰 신고 + 잠정조치 신청 (피해 인지 후 즉시)</strong> — 지역 경찰서·여청수사팀·112. 스토킹법 잠정조치(접근금지·전기통신 금지) + 가정폭력 임시조치(격리·접근금지) 함께 신청 가능.</li>\n<li><strong>3단계 — 가정법원 접근금지 가처분 + 면접교섭 변경 (1~2개월)</strong> — 가정법원에 접근금지 가처분(가사소송법 제62조) + 면접교섭 방법·장소 변경 신청. 제3자 입회 면접교섭으로 전환 가능.</li>\n<li><strong>4단계 — 형사 고소 (스토킹법 + 가정폭력법)</strong> — 스토킹처벌법 제18조(3년 이하 징역 또는 3,000만원 이하 벌금) + 가정폭력처벌법 위반 검토. 가정폭력은 보호처분(상담·퇴거·접근금지) 가능.</li>\n<li><strong>5단계 — 후속 모니터링 + 양육권 정리</strong> — 보호명령 위반 시 즉시 신고. 양육권 변경 시도가 있으면 가정법원 양육자 변경 청구로 대응. 자녀 의사·양육환경 자료 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">스토킹법·가정폭력법·가사소송법 중 어느 트랙이 가장 효과적인지는 사례별로 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">잠정조치·접근금지·고소에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>이혼 판결문·조정조서·면접교섭 합의서</strong> — 정해진 면접교섭 범위 입증.</li>\n<li><strong>시간순 일지 (날짜·시간·장소·내용)</strong> — 면접교섭 외 접근 패턴.</li>\n<li><strong>카톡·문자·전화 캡처 + 녹음</strong> — 양육 빌미 접근 입증.</li>\n<li><strong>CCTV·블랙박스 영상</strong> — 회사 앞·집 앞 출현. 7~30일 보존이라 즉시 신청.</li>\n<li><strong>가족·이웃 진술서</strong> — 자녀·동거가족·이웃의 \'그 사람이 자주 와서 무섭다\' 진술.</li>\n<li><strong>본인·자녀 심리적 영향 자료</strong> — 정신과·상담 기록·자녀의 거부 반응.</li>\n<li><strong>본인 진술서 (시간순 사건 경과)</strong> — 이혼 시점·합의 시점·접근 시작 시점.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 자녀 안전 보장을 위해 면접교섭을 일방 거부하면 \'면접교섭권 침해\'로 역으로 청구당할 수 있어요. 면접교섭 변경 신청을 함께 진행해 법원 결정으로 조정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 옛 배우자 스토킹 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"신고하면 양육권 분쟁 다시 시작될까"</strong> — 신고는 양육권 변경 사유 아님. 오히려 가해자의 비정상적 접근이 양육환경 위협 증거가 돼 양육권 유지·강화 자료가 될 수 있음.</li>\n<li><strong>"양육 협의 명목이라 거절하기 어렵다"</strong> — 정해진 면접교섭 외 접근은 협의 의무 없음. 변호사·가정법원·면접교섭센터를 통한 공식 채널만 응대해도 충분.</li>\n<li><strong>"자녀에게 \'아빠/엄마와 분리\' 인식 안 좋을까"</strong> — 자녀 안전·심리적 영향이 우선. 면접교섭 자체는 유지하되 제3자 입회·면접교섭센터 이용으로 전환이 자녀 보호에도 효과적.</li>\n<li><strong>"가정법원 + 경찰 동시 신고 가능한가"</strong> — 가능합니다. 가정법원 접근금지(가사) + 경찰 잠정조치(형사) 별개 절차이며 동시 진행이 보호 효과 높음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 경찰청 112 / 여성긴급전화 1366 / 한국가정법률상담소 1644-7077 / 면접교섭센터 / 대한법률구조공단 132 / 가정법원.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 잠정조치·접근금지의 적극 활용',
        summary:
          '대법원 2025모3144 사건(대법원, 2025.12.11 선고)에서 법원은 스토킹처벌법상 잠정조치는 검사가 스토킹범죄의 원활한 조사·심리 또는 피해자 보호를 위해 필요하다고 인정하는 경우 법원에 잠정조치를 청구할 수 있고, 법원은 필요하다고 인정하는 경우 해당 잠정조치를 결정·기간을 연장 또는 종류를 변경할 수 있다고 판시했습니다. 옛 배우자가 양육·면접교섭을 빌미로 반복 접근하는 사례는 \'반복성·일방성\' 요건을 충족할 가능성이 높아, 가정법원 접근금지 + 형사 잠정조치를 함께 신청해 본인·자녀를 보호하는 절차를 검토할 수 있습니다.',
        takeaway: '신고는 양육권 분쟁 사유가 아니라 자녀 안전 자료입니다. 가정폭력법 + 스토킹법 + 가사소송법 3축 트랙을 함께 검토해 면접교섭 방법 변경까지 정리해보세요.',
      },
    ],
    faq: [
      {
        question: '신고하면 양육권을 빼앗길까요?',
        answer:
          '<strong>신고 자체는 양육권 변경 사유 아닙니다.</strong> 오히려 가해자의 비정상적 접근이 양육환경 위협으로 인정돼 양육권 유지·강화 자료가 될 수 있어요.',
      },
      {
        question: '면접교섭 자체를 거부해도 되나요?',
        answer:
          '<strong>일방 거부는 \'면접교섭권 침해\'로 역청구 가능성.</strong> 가정법원 면접교섭 방법 변경(제3자 입회·면접교섭센터·시간 단축) 신청이 안전.',
      },
      {
        question: '가정법원 접근금지 + 경찰 잠정조치 동시 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 가정법원(가사) + 경찰(형사) 별개 절차. 동시 진행으로 가정·외부 양면 보호 효과.',
      },
      {
        question: '자녀가 \'아빠/엄마 보고 싶다\'고 하면 어떻게 하나요?',
        answer:
          '<strong>면접교섭은 유지 + 안전한 방식으로 변경.</strong> 면접교섭센터(전국 가족센터)에서 제3자 입회 면접교섭 운영. 자녀의 정서적 안정과 본인 안전 동시 확보.',
      },
      {
        question: '가정폭력 보호명령은 누구에게 신청하나요?',
        answer:
          '<strong>경찰·검찰 통한 임시조치 + 가정법원 보호명령 두 트랙.</strong> 즉시성은 경찰 임시조치, 장기성은 가정법원 보호처분(상담·퇴거·접근금지). 1366 또는 132 안내.',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 신고 절차 안내', href: '/guide/stalking/stalking-report-procedure' },
      { label: '잠정조치·접근금지 신청', href: '/guide/stalking/stalking-temporary-measures' },
      { label: '직장 동료 스토킹 대응', href: '/guide/stalking/stalking-coworker-rejected-pursuit-procedure' },
      { label: '동호회 회원 스토킹 대응', href: '/guide/stalking/stalking-club-member-pursuit-procedure' },
      { label: '헤어진 연인 온라인 증거 수집', href: '/guide/stalking/stalking-ex-lover-online-evidence-collect' },
    ],
  },

  // ─── 5. assault / drunken-uvulval-pre-settlement-sentencing (accused) ───
  {
    domain: 'assault',
    slug: 'assault-drunken-uvulval-pre-settlement-sentencing',
    keyword: '술자리 우발 폭행 합의 형량',
    questionKeyword: '술자리에서 우발적으로 한 대 때려 입건됐어요. 합의 시점이 형량에 어떻게 영향을 미치나요?',
    ctaKeyword: '우발 폭행 합의 시점 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '술자리 우발 폭행 — 합의 시점이 형량에 미치는 영향 5단계 | 로앤가이드',
      description:
        '술자리 우발 폭행 혐의를 받고 있다면 합의 시점·반성 자료가 형량에 어떻게 영향을 주는지 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"회식 술자리에서 말다툼이 붙어 우발적으로 한 대 때렸어요. 진단 2주가 나왔고 \'폭행\'으로 입건된 상태입니다. 평소 폭력 전과는 없고 직장도 다니고 있어요. \'합의를 언제 해야 형량이 가벼울까? 조사 단계 vs 송치 후 vs 재판 단계 어디가 다를까?\' 막막합니다." 우발 폭행 혐의를 받고 있다면 합의 시점이 양형에 큰 영향을 줍니다. 조사 단계 합의 → 검사 약식기소 또는 기소유예 가능성, 송치 후 합의 → 약식벌금 감경, 재판 단계 합의 → 선고형 감경. 빠를수록 결과가 가벼운 경향이라는 것이 자주 보고되는 흐름이에요. 양형자료(반성문·기부금·탄원서)도 합의와 함께 정리하는 게 효과적입니다.</p>',
    sections: [
      {
        title: 'Q. 합의 시점이 폭행 양형에 어떻게 영향을 미치나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 조사 단계 → 송치 단계 → 재판 단계 순으로 늦어질수록 양형 효과가 줄어드는 경향이 자주 보고됩니다.</strong></p>\n<ul>\n<li><strong>조사 단계 합의 (입건 ~ 송치 전, 약 2~3개월)</strong> — 검사 약식기소 + 벌금 감경 가능성. 초범 + 우발성 + 진지한 반성이면 기소유예(전과 안 남음) 가능성도.</li>\n<li><strong>송치 후 합의 (검찰 단계, 약 1~2개월)</strong> — 약식기소 후 벌금 감경 또는 선고유예. 처벌불원서 효력 여전히 강함.</li>\n<li><strong>재판 1심 합의</strong> — 선고형 감경. 다만 조사 단계 합의보다 효과는 약함. 그래도 충분한 양형 영향.</li>\n<li><strong>항소심 합의</strong> — 1심 형량 감경 가능. 합의 + 반성·기부금 등 추가 양형자료가 있어야 효과적.</li>\n<li><strong>반의사불벌죄(폭행죄, 형법 제260조)</strong> — 처벌불원 시 공소권 없음(공소기각). 송치 전 합의 + 처벌불원서 제출이 가장 강력.</li>\n</ul>\n<blockquote style="color:#555;border-left:4px solid #ddd;padding:8px 12px">핵심: 폭행죄는 반의사불벌죄라 처벌불원서 효력이 큼. 입건 직후 합의 + 처벌불원서 제출이 가장 가벼운 결과로 이어지는 경로 중 하나입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 우발 폭행 양형 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단·검찰청 형사조정실 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 상담 + 진술 전략 (입건 직후, 1주)</strong> — 첫 조사 전에 변호인 선임 또는 법률구조공단(132) 무료 상담. 우발성·자수·정황 본인 진술 정리.</li>\n<li><strong>2단계 — 합의 시도 (조사 단계, 1~2주)</strong> — 피해자 측에 사과 + 합의금 제안. 합의금은 진단 1주당 30~70만원 수준이 자주 보이는 사례. 변호인 통한 접근이 안전.</li>\n<li><strong>3단계 — 형사조정 신청 (자체 합의 결렬 시, 무료)</strong> — 검찰청 형사조정실. 조정위원이 중재 → 약 1~2개월 내 합의 도달 사례 많음. 합의금·처벌불원 패키지로 진행.</li>\n<li><strong>4단계 — 합의서 + 처벌불원서 검찰 제출 (송치 전·후 모두 가능)</strong> — 합의서·처벌불원서·송금 영수증을 검사에게 제출. 송치 전 제출이 가장 효과적. 폭행죄(반의사불벌죄)는 처벌불원 시 공소권 없음.</li>\n<li><strong>5단계 — 양형자료 보완 + 공판 (기소된 경우)</strong> — 자필 반성문·범죄경력회보(초범 입증)·기부금 영수증·가족·직장 탄원서. 양형 항변에 활용.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">합의 시점·증거 상태·초범 여부에 따라 양형 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">합의·양형 항변에 아래 자료를 미리 정리해두면 절차가 유리해집니다.</strong></p>\n<ul>\n<li><strong>합의서·처벌불원서</strong> — 피해자 자필서명·날인 + 인감증명서 첨부 권장.</li>\n<li><strong>합의금 송금 영수증 + 통장 사본</strong> — 합의금 지급 입증.</li>\n<li><strong>자필 반성문·진정서</strong> — 사건 경위 + 잘못 인정 + 재발 방지 다짐. 손글씨 권장.</li>\n<li><strong>범죄경력회보 (초범 입증)</strong> — 경찰서·온라인 발급(정부24).</li>\n<li><strong>탄원서</strong> — 가족·직장 상사·이웃·종교인. 평소 인격·재발 가능성 낮음 진술.</li>\n<li><strong>기부금 영수증·봉사활동 증명</strong> — 사건 후 사회적 책임 이행 자료.</li>\n<li><strong>본인 사정 자료</strong> — 가족 부양·근무·건강·우발성을 뒷받침할 사정.</li>\n</ul>\n<blockquote style="color:#555;border-left:4px solid #ddd;padding:8px 12px">⚠️ 흔한 실수: 합의금만 송금하고 처벌불원서를 별도로 받지 않으면 합의 효과가 약합니다. 합의서 + 처벌불원서를 동시에 받아 검찰에 제출하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 우발 폭행 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"술 취해서 기억 안 난다는 항변"</strong> — 단순 음주만으로 책임 면제 안 됨. 오히려 \'술자리 자제력 부족\' 가중 요소가 될 수도. 반성·합의로 양형 항변하는 게 안전.</li>\n<li><strong>"피해자가 먼저 도발했다"</strong> — 도발이 사실이면 양형 감경 사유 가능. 다만 정당방위 인정은 매우 엄격. 도발 입증 자료(CCTV·녹취·동석자 진술) 보강.</li>\n<li><strong>"진단 2주 정도면 가볍다"</strong> — 폭행은 진단 정도와 무관하게 형사 처벌 대상. 가벼움 ≠ 무처벌. 합의·반성 없으면 벌금 50~300만원 + 전과 가능.</li>\n<li><strong>"조사 끝나고 합의해도 된다"</strong> — 조사 끝나기 전(송치 전) 합의가 가장 효과적. 송치 후엔 약식기소 진행돼 처벌불원 효과 약화.</li>\n</ul>\n<blockquote style="color:#555;border-left:4px solid #ddd;padding:8px 12px">🏛️ 신청·상담 경로: 대한법률구조공단 132 (국선·기소유예 안내) / 검찰청 형사조정실 1301 / 범죄피해자지원센터 1577-1295 / 한국법무보호복지공단 1577-1009 / 경찰민원콜센터 182.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 폭력범죄 양형과 합의·반성의 효과',
        summary:
          '대법원 2024도11261 사건(대법원, 2025.08.28 선고)에서 법원은 폭행죄 양형에서 사건 경위·우발성·피해자와의 관계·합의 여부 등을 종합 고려하는 법리를 다시 확인하면서, 진지한 반성과 피해자와의 합의가 형량에 의미 있는 영향을 미친다는 점을 분명히 했습니다. 술자리 우발 폭행이 혐의를 받고 있다면, 조사 단계에서 합의 + 처벌불원서 제출이 가장 가벼운 결과로 이어지는 경로 중 하나이며, 폭행죄는 반의사불벌죄라 송치 전 처벌불원 시 공소권 없음(공소기각)이 가능하다는 점에서 빠른 합의가 핵심 전략이 될 수 있습니다.',
        takeaway: '우발 폭행은 합의 시점이 결과에 큰 영향을 줍니다. 조사 단계 합의 + 처벌불원서 + 양형자료(반성문·기부금·탄원서)를 함께 준비해 빠른 정리를 검토해보세요.',
      },
    ],
    faq: [
      {
        question: '술 취해 기억 안 나면 처벌 면제되나요?',
        answer:
          '<strong>아닙니다.</strong> 단순 음주는 책임 면제 사유 아님. 오히려 \'술자리 자제력 부족\' 가중요소 가능성. 반성·합의로 양형 항변이 안전.',
      },
      {
        question: '합의금 통상 얼마나 되나요?',
        answer:
          '<strong>진단 1주당 30~70만원 수준이 자주 보이는 사례지만 큰 폭 차이.</strong> 흉터·입원·다수 가담·먼저 시작 등 가중 요소 + 합의 시점에 따라 달라져요.',
      },
      {
        question: '조사 단계에서 자수하면 효과 있나요?',
        answer:
          '<strong>자수는 형법 제52조에 따라 형 감경·면제 사유.</strong> 입건 전 자수면 효과 가장 큼. 입건 후라도 진지한 반성·자백은 양형 감경.',
      },
      {
        question: '초범인데 전과 남기지 않을 방법 있나요?',
        answer:
          '<strong>기소유예 또는 처벌불원 시 공소기각이면 전과 안 남음.</strong> 조사 단계 합의 + 우발성·초범·반성 입증이 핵심. 변호인·법률구조공단 상담 권장.',
      },
      {
        question: '합의 못 하면 무조건 벌금형인가요?',
        answer:
          '<strong>합의 없어도 일부 합의금 공탁·반성문·탄원서 제출로 양형 유리하게 만들 수 있습니다.</strong> 끝까지 합의 안 되면 자필 반성문·기부금·탄원서 등으로 보완.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 양형 기준 정리', href: '/guide/assault/assault-sentencing-criteria' },
      { label: '폭행 합의금 산정', href: '/guide/assault/assault-settlement-amount-guide' },
      { label: '폭행 형사조정 활용', href: '/guide/assault/assault-criminal-mediation' },
      { label: '폭행 초범 양형 감경', href: '/guide/assault/assault-first-offense-mitigation' },
      { label: '상호 폭행 합의금 산정', href: '/guide/assault/assault-mutual-fight-settlement-amount' },
    ],
  },

  // ─── 6. assault / dating-violence-victim-protection (victim, 절차형) ───
  {
    domain: 'assault',
    slug: 'assault-dating-violence-victim-protection',
    keyword: '데이트폭력 신변보호 접근금지',
    questionKeyword: '연인이 이별 통보에 폭행했어요. 신변보호조치·접근금지 어떻게 신청하나요?',
    ctaKeyword: '데이트폭력 신변보호 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '데이트폭력 피해자 — 신변보호·접근금지 5단계 | 로앤가이드',
      description:
        '연인·이별 후 폭행 피해자의 경찰 신변보호조치·접근금지·형사 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"3년 사귄 사람과 헤어지자고 말한 다음 날, 집에 찾아와 \'한 번만 더 이야기 하자\'며 멱살 잡고 밀쳤어요. 신고하니 가해자는 풀려났고, \'언제든 또 찾아올 수 있다\'고 했답니다. \'다음 번엔 더 큰 일이 생길까 무서워서 잠을 못 자요. 신변보호조치 받으려면 어떻게 해야 하나요?\'" 데이트폭력 피해자는 경찰 신변보호조치(스마트워치·맞춤형 순찰·임시숙소) + 접근금지·잠정조치를 빠르게 신청할 수 있습니다. 가정폭력처벌법은 \'사실혼·연인\'에는 직접 적용 어려운 사례가 있지만, 스토킹법 + 폭행·상해죄 + 일반 접근금지 가처분으로 결합 보호가 가능해요. 시간순 일지·진단서·증거를 빠르게 정리하는 것이 출발점입니다.</p>',
    sections: [
      {
        title: 'Q. 데이트폭력 피해자가 받을 수 있는 보호조치는 무엇인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰 신변보호조치 + 스토킹법 잠정조치 + 민사 접근금지 가처분 3축이 핵심입니다.</strong></p>\n<ul>\n<li><strong>경찰 신변보호조치</strong> — 스마트워치 지급(긴급 알림)·맞춤형 순찰·임시숙소 지원·112 우선출동 등록·가해자 위치 모니터링.</li>\n<li><strong>스토킹처벌법 잠정조치</strong> — 가해자에 대한 서면 경고·접근금지·전기통신 금지·구금. 데이트 후 반복 접근이면 적용 가능.</li>\n<li><strong>폭행·상해죄 형사 처벌</strong> — 형법 제260조(폭행)·제257조(상해)·반의사불벌이 아닌 상해는 합의 없어도 처벌 진행.</li>\n<li><strong>민사 접근금지 가처분</strong> — 본안 소송 없이 신속 보호. 가정법원 또는 지방법원에서 신청.</li>\n<li><strong>여성긴급전화 1366 + 해바라기센터</strong> — 24시간 상담·심리지원·법률·의료·임시숙소 원스톱 지원.</li>\n</ul>\n<blockquote style="color:#555;border-left:4px solid #ddd;padding:8px 12px">핵심: 데이트폭력은 가정폭력법 직접 적용 어려운 사례 있지만, 경찰 신변보호 + 스토킹법 잠정조치 + 형사 + 민사로 결합 보호 가능합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신변보호 + 형사 5단계',
        content:
          '<p><strong style="color:#1e3a5f">경찰청·여성가족부·KISA 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 112 신고 + 진단서 (사건 직후, 24시간 내)</strong> — 사건 직후 112 신고 + 병원 진단서. 진단서는 \'타박상·찰과상·정신적 충격\'까지 명기. 사건사고사실확인원 발급.</li>\n<li><strong>2단계 — 경찰 신변보호조치 신청 (24~48시간 내)</strong> — 지역 경찰서·여청수사팀에 \'위험성 평가표\' 작성 요청. 스마트워치·맞춤형 순찰·임시숙소 등 결정.</li>\n<li><strong>3단계 — 스토킹법 잠정조치 + 접근금지 신청 (피해 인지 후 즉시)</strong> — 반복 접근 정황이면 잠정조치(접근금지·전기통신 금지·구금). 1366·해바라기센터 통한 법률 지원도 활용.</li>\n<li><strong>4단계 — 형사 고소 + 민사 접근금지 가처분 (1~2주)</strong> — 폭행·상해 고소 + 민사 접근금지 가처분 신청. 변호사·대한법률구조공단(132) 무료 지원 가능.</li>\n<li><strong>5단계 — 후속 모니터링 + 위자료 청구</strong> — 잠정조치·접근금지 위반 시 즉시 신고. 정신적 피해는 위자료 청구. 1366·범죄피해자지원센터에서 심리상담·생계지원도 안내.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">신변보호·잠정조치·접근금지·형사 트랙을 어떤 순서로 진행할지가 안전 상황에 따라 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">신변보호·고소·접근금지에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>병원 진단서·소견서 (24시간 내)</strong> — 진단주수·치료 기간·정신적 충격 명기.</li>\n<li><strong>사건사고사실확인원 (경찰서)</strong> — 신고 내역 공식 자료.</li>\n<li><strong>상해 부위 사진 (직후·1주 후·2주 후)</strong> — 시간 흐름 입증.</li>\n<li><strong>현장 CCTV·블랙박스</strong> — 보존 기간 7~30일이라 즉시 신청. 사건 시점 + 5분 전후.</li>\n<li><strong>카톡·문자·통화 기록</strong> — 이별 통보·이후 협박·접근 시도. 캡처 + 화면녹화.</li>\n<li><strong>목격자 진술서·연락처</strong> — 이웃·동행자.</li>\n<li><strong>본인 진술서 (시간순 사건 경과)</strong> — 교제 시작·이별 통보·사건 발생·이후 접근.</li>\n</ul>\n<blockquote style="color:#555;border-left:4px solid #ddd;padding:8px 12px">⚠️ 흔한 실수: \'한 번 일이라 사이가 풀리면 괜찮을 것\'이라 신고를 미루면 증거가 사라집니다. 24시간 내 진단서 + 신고 + CCTV 신청이 가장 안전합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 데이트폭력 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"이별 후엔 가정폭력법 적용 안 된다"</strong> — 사실혼·연인 관계는 가정폭력법 직접 적용이 어려운 사례 있지만, 스토킹법·폭행죄·접근금지 가처분으로 결합 보호 가능.</li>\n<li><strong>"한 번뿐인 일이라 신변보호 못 받을 것"</strong> — 1회 폭행이라도 \'재범 위험성\'이 인정되면 신변보호조치 가능. 위험성 평가표 작성 시 솔직하게 진술.</li>\n<li><strong>"가해자가 \'다신 안 한다\' 연락 와서 합의했다"</strong> — 합의해도 신변보호·접근금지는 별도 신청 가능. 형사 고소 취하만으로 안전 보장 안 됨.</li>\n<li><strong>"임시숙소 가면 일상이 흔들릴 것"</strong> — 임시숙소는 단기(보통 30일 이내). 그 기간 신변보호 + 잠정조치로 보호 강화 후 일상 복귀.</li>\n</ul>\n<blockquote style="color:#555;border-left:4px solid #ddd;padding:8px 12px">🏛️ 신청·상담 경로: 경찰청 112 / 여성긴급전화 1366 / 해바라기센터(전국 39곳) / 한국여성의전화 02-2263-6464 / 대한법률구조공단 132 / 범죄피해자지원센터 1577-1295.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 연인 사이 폭행과 양형',
        summary:
          '대법원 2024도17056 사건(대법원, 2025.06.12 선고)에서 법원은 연인·친밀한 관계 사이에서 발생한 폭행 사건의 양형에서 피해자의 정신적 충격·재범 위험성·합의 여부 등을 종합 고려한다는 점을 다시 확인했습니다. 데이트폭력은 \'친밀한 관계\'라는 특성이 오히려 재범·반복 폭력 위험을 높이는 요인이 되므로, 신변보호조치 + 스토킹법 잠정조치 + 형사·민사 절차를 결합해 다층적으로 보호받을 수 있는 경로를 검토할 수 있습니다.',
        takeaway: '데이트폭력은 가정폭력법 직접 적용이 어려운 사례에도 스토킹법·폭행죄·민사 접근금지로 결합 보호가 가능합니다. 신변보호 + 형사 + 민사 트랙을 함께 진행해 다층 보호를 확보하세요.',
      },
    ],
    faq: [
      {
        question: '연인 관계도 가정폭력법 적용되나요?',
        answer:
          '<strong>사실혼은 적용 가능, 단순 연인은 직접 적용 어려운 사례 있어요.</strong> 그러나 스토킹법·폭행죄·민사 접근금지 가처분으로 결합 보호 가능. 1366·해바라기센터 안내.',
      },
      {
        question: '신변보호조치는 누구나 받을 수 있나요?',
        answer:
          '<strong>위험성 평가에서 \'재범 위험성\'이 인정되면 가능합니다.</strong> 1회 폭행이라도 가해자의 추가 접근 정황·협박이 있으면 인정. 솔직한 진술이 핵심.',
      },
      {
        question: '스마트워치는 어떻게 받나요?',
        answer:
          '<strong>경찰서·여청수사팀에 신변보호 신청 시 우선 검토 대상.</strong> 휴대 + 긴급 버튼 누르면 112 자동 연결 + 위치 전송. 전국 단계적 보급 중.',
      },
      {
        question: '가해자가 합의 요청 + 사과 카톡 보내요. 받아도 되나요?',
        answer:
          '<strong>읽어두되 답장은 신중히 + 변호사·1366 상담 권장.</strong> 답장이 가해자에게 \'관계 회복 가능\' 신호로 해석되면 보호조치 약화 가능. 캡처 보관.',
      },
      {
        question: '접근금지 가처분과 잠정조치는 어떻게 다른가요?',
        answer:
          '<strong>잠정조치(스토킹법): 형사 절차에서 검사 청구 + 법원 결정.</strong> <strong>접근금지 가처분(민사): 본인이 가정·지방법원 직접 신청.</strong> 둘 다 가능 + 동시 신청도 가능.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 양형 기준 정리', href: '/guide/assault/assault-sentencing-criteria' },
      { label: '폭행 합의금 산정', href: '/guide/assault/assault-settlement-amount-guide' },
      { label: '술자리 우발 폭행 합의 시점', href: '/guide/assault/assault-drunken-uvulval-pre-settlement-sentencing' },
      { label: '상호 폭행 합의금 산정', href: '/guide/assault/assault-mutual-fight-settlement-amount' },
      { label: '노약자 폭행 가중처벌', href: '/guide/assault/assault-elderly-victim-aggravated-sentencing' },
    ],
  },

  // ─── 7. child-support / disappear-tracking-procedure (victim, 절차형) ───
  {
    domain: 'child-support',
    slug: 'child-support-disappear-tracking-procedure',
    keyword: '양육비 합의 후 잠적 추적',
    questionKeyword: '협의이혼 때 양육비 약속만 받고 헤어졌는데 전남편이 잠적했어요. 어떻게 추적하나요?',
    ctaKeyword: '양육비 잠적 추적 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양육비 약속 후 잠적 — 양육비이행관리원 추적 5단계 | 로앤가이드',
      description:
        '협의이혼 후 양육비 약속만 받고 잠적한 비양육자를 양육비이행관리원·법원 직권조사로 추적하는 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"3년 전 협의이혼할 때 \'양육비 매월 70만원\' 합의서만 쓰고 끝냈어요. 처음 6개월만 보내더니 그 후로 연락이 끊기고 주소·번호도 바뀌었습니다. \'이혼 합의서 외엔 자료가 없는데, 어디부터 찾아야 하나? 양육비이행관리원이 도와준다는데 진짜 가능할까?\' 막막한 상황이에요." 비양육자가 잠적해도 양육비이행관리원이 국세청·국민연금공단·건강보험공단 자료로 직권 조회해 위치·소득을 추적합니다. 합의서가 공증·조서 형식이면 즉시 강제집행 가능. 단순 합의서면 \'양육비 심판\' 절차로 집행권원을 먼저 만든 뒤 직접지급명령·이행명령으로 진행해요.</p>',
    sections: [
      {
        title: 'Q. 잠적한 비양육자를 어떻게 찾을 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 양육비이행관리원이 국세청·국민연금공단·건강보험공단·통신사 자료로 직권 조회 가능합니다.</strong></p>\n<ul>\n<li><strong>양육비이행관리원 직권조사권</strong> — 양육비이행법 + 가사소송법에 따라 비양육자 주소·소득·재산 자료 직권 조회 가능. 본인이 모르는 정보도 추적.</li>\n<li><strong>국세청 자료</strong> — 종합소득세 신고·근로소득원천징수 + 회사 정보.</li>\n<li><strong>국민연금공단 자료</strong> — 가입 회사·보수월액. 회사 위치 추적.</li>\n<li><strong>건강보험공단 자료</strong> — 직장가입자 회사·가족관계.</li>\n<li><strong>통신사·금융자료</strong> — 법원 영장 통한 통신자료·계좌 추적도 가능.</li>\n</ul>\n<blockquote style="color:#555;border-left:4px solid #ddd;padding:8px 12px">핵심: 잠적해도 양육비이행관리원이 직권 조회로 위치·소득 추적 가능. 합의서가 공증·조서 형식이면 즉시 강제집행, 단순 합의서면 양육비 심판 후 진행.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 잠적자 추적 + 양육비 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">양육비이행관리원·가정법원 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 양육비이행관리원 무료 상담 (1644-6621)</strong> — 잠적 사실 + 보유 자료(합의서·공증 여부) 진단. 본인 자격 + 절차 안내.</li>\n<li><strong>2단계 — 합의서 형태 점검 + 집행권원 확보</strong> — 공증된 합의서·조정조서·이혼 판결문이면 즉시 강제집행 가능. 단순 합의서면 가정법원 양육비 심판 신청 → 결정문 확보(약 4~6개월).</li>\n<li><strong>3단계 — 양육비이행관리원 직권조사 신청</strong> — 비양육자 주소·소득·재산 자료 조회 의뢰. 국세청·국민연금·건강보험·통신사 자료 종합. 약 1~3개월.</li>\n<li><strong>4단계 — 직접지급명령·이행명령 신청 (회사·소득 확인 시)</strong> — 회사 정보 확보 시 직접지급명령(가사소송법 제63조의2) → 임금에서 자동 공제. 자영업자면 이행명령 + 감치명령 트랙.</li>\n<li><strong>5단계 — 미지급 양육비 일시지급명령 + 강제집행</strong> — 과거 미지급 양육비 일시지급명령(가사소송법 제63조의3). 부동산·예금·차량 가압류·강제집행. 양육비이행관리원이 무료 대행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 산정기준표, AI로 계산해보기</strong></p>\n<p style="margin:0;font-size:0.95em">합의서 형태·잠적 기간·집행권원 여부에 따라 추적 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">잠적자 추적·양육비 심판·강제집행에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>이혼 관련 자료</strong> — 협의이혼 의사확인서·이혼신고서·이혼 합의서.</li>\n<li><strong>양육비 합의서·공증·조정조서</strong> — 집행권원 형태 확인 핵심.</li>\n<li><strong>비양육자 인적사항 (마지막으로 알던 정보)</strong> — 주민번호·이전 주소·이전 직장·연락처.</li>\n<li><strong>본인 통장 거래내역</strong> — 양육비 미지급 입증.</li>\n<li><strong>혼인관계증명서·가족관계증명서·자녀 기본증명서</strong> — 양육관계 입증.</li>\n<li><strong>본인 신분증·통장 사본</strong> — 송금 받을 계좌.</li>\n<li><strong>심리적·경제적 영향 자료</strong> — 한부모가족 생활비·자녀 교육비 명세.</li>\n</ul>\n<blockquote style="color:#555;border-left:4px solid #ddd;padding:8px 12px">⚠️ 흔한 실수: 단순 합의서만 있으면 즉시 강제집행 불가. 양육비 심판으로 집행권원을 먼저 만들어야 직접지급명령·이행명령 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 양육비 잠적 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"단순 합의서만 있으면 즉시 강제집행 가능한 줄 알았다"</strong> — 단순 합의서는 집행권원이 아니라 즉시 강제집행 불가. 양육비 심판으로 결정문 확보가 먼저.</li>\n<li><strong>"이혼한 지 오래라 청구 못 한다"</strong> — 과거 양육비도 청구 가능. 다만 \'협의 또는 심판\'으로 구체적 양육비 채권이 성립한 후의 미지급분이 강제집행 대상. 협의이혼 시 합의서가 있으면 그때부터.</li>\n<li><strong>"전남편 위치를 모르는데 신청 못 한다"</strong> — 양육비이행관리원이 직권조사. 본인이 모르는 위치·소득도 추적 가능. 모르면 안 된다고 미루지 말 것.</li>\n<li><strong>"무료 지원이지만 비용 들 것"</strong> — 양육비이행관리원 지원은 변호사·신청·송달료까지 무료. 본인 부담 거의 없음.</li>\n</ul>\n<blockquote style="color:#555;border-left:4px solid #ddd;padding:8px 12px">🏛️ 신청·상담 경로: 양육비이행관리원 1644-6621 / 대한법률구조공단 132 / 가정법원 / 한부모가족지원센터 1644-6621 / 여성긴급전화 1366.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 채권의 강제이행과 직권 추적',
        summary:
          '대법원 2025으517 사건(대법원, 2025.05.23 선고)에서 법원은 가사소송법 제64조의 이행명령은 가정법원이 판결·심판·조정조서 등으로 확정되어 있는 의무의 이행을 직권으로 촉구하는 가사소송법상 절차로서, 의무의 존부를 확정하는 절차가 아니라 확정된 의무를 이행하는 절차임을 명확히 했습니다. 양육비를 약속만 받고 잠적한 비양육자에 대해서도, 양육비이행관리원이 국세청·국민연금공단·건강보험공단 자료를 직권 조회해 위치·소득을 추적하고, 집행권원이 확보되면 직접지급명령·일시지급명령으로 빠른 회수가 가능한 구조라는 점에서 단순 합의서만 있어도 양육비 심판을 통한 집행권원 확보부터 검토할 수 있습니다.',
        takeaway: '잠적한 비양육자도 양육비이행관리원의 무료 직권조사로 추적 가능합니다. 단순 합의서만 있으면 양육비 심판부터 시작해 집행권원을 만든 뒤 직접지급명령·강제집행으로 회수해보세요.',
      },
    ],
    faq: [
      {
        question: '협의이혼 합의서만 있으면 강제집행 가능한가요?',
        answer:
          '<strong>공증된 합의서·조정조서면 가능. 단순 합의서면 양육비 심판으로 결정문 확보 후 가능합니다.</strong> 양육비이행관리원에서 양육비 심판 무료 대행.',
      },
      {
        question: '전남편 위치를 모르는데 신청 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 양육비이행관리원이 국세청·국민연금·건강보험 자료로 직권 추적. 본인이 모르는 정보도 조회 가능.',
      },
      {
        question: '과거 양육비도 받을 수 있나요?',
        answer:
          '<strong>합의서·심판으로 구체적 채권이 성립한 후의 미지급 양육비는 청구 가능합니다.</strong> 일시지급명령(가사소송법 제63조의3)으로 일괄 청구.',
      },
      {
        question: '비양육자가 자영업자로 잠적했어요. 어떻게 하나요?',
        answer:
          '<strong>이행명령 → 감치명령 → 재산조회신청(민사집행법 제74조).</strong> 부동산·예금·차량 가압류·강제집행. 양육비이행관리원 무료 대행.',
      },
      {
        question: '양육비이행관리원 지원은 누구나 받을 수 있나요?',
        answer:
          '<strong>한부모가족·양육비 미지급 사실이 있으면 소득 무관 무료 지원.</strong> 변호사 비용·신청 대행·송달료까지 지원. 1644-6621 상담.',
      },
    ],
    cta: { text: '양육비 산정기준표, AI로 계산해보기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비이행관리원 추심 절차', href: '/guide/child-support/child-support-agency-collection-procedure' },
      { label: '양육비 직접지급명령 신청', href: '/guide/child-support/child-support-direct-payment-third-party-employer' },
      { label: '양육비 이행명령 신청', href: '/guide/child-support/child-support-enforcement-order-apply' },
      { label: '양육비 감치명령 절차', href: '/guide/child-support/child-support-detention-order' },
      { label: '양육비 미지급 종합 대응', href: '/guide/child-support/child-support-non-payment-comprehensive' },
    ],
  },

  // ─── 8. child-support / non-custodial-remarry-income-increase (victim) ───
  {
    domain: 'child-support',
    slug: 'child-support-non-custodial-remarry-income-increase',
    keyword: '비양육친 재혼 소득증가 양육비 증액',
    questionKeyword: '전남편이 재혼하고 사업도 잘된대요. 양육비 증액 청구 가능한가요?',
    ctaKeyword: '비양육친 소득증가 증액 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '비양육친 재혼·소득증가 — 양육비 증액 5단계 | 로앤가이드',
      description:
        '비양육자가 재혼·승진·사업 성공으로 소득이 늘었을 때 양육비 증액심판 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"5년 전 이혼할 때 양육비를 매월 60만원으로 정했어요. 그땐 전남편이 평사원이었는데 지금은 임원으로 승진했고 작년에 재혼했답니다. 자녀는 이제 중학생이라 학원비도 늘었는데 \'증액 청구할 수 있다\'는 얘기를 들어 알아보고 있어요. 입증 자료 + 절차가 막막한 상황입니다." 비양육자의 소득 증가·자녀의 성장은 양육비 증액 사유로 인정될 수 있습니다. 사정 변경이 양쪽 모두에 적용되는 원칙이라 객관적 자료(국세청·재산 변동·자녀 교육비)가 핵심이에요. 양육비이행관리원 무료 지원 + 가정법원 양육비변경심판으로 진행할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 비양육자 소득 증가는 어떻게 입증하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 법원 사실조회·국세청 자료·재산 변동 등기·재혼 자료 4가지가 핵심 입증 수단입니다.</strong></p>\n<ul>\n<li><strong>법원 사실조회</strong> — 가정법원 통해 비양육자 회사·국세청·금융기관에 사실조회. 본인이 직접 알기 어려운 자료도 확보.</li>\n<li><strong>국세청 종합소득세 자료</strong> — 변호사·법률구조공단 통해 신청. 비양육자 소득 증감 입증.</li>\n<li><strong>재산 변동 등기부</strong> — 비양육자 명의 부동산 신규 취득·근저당 해지 등 자산 변동.</li>\n<li><strong>재혼·자녀 출생 자료</strong> — 혼인신고서·가족관계증명서·재혼 배우자 직업·재산. 가계 부담 변화.</li>\n<li><strong>SNS·언론 자료</strong> — 사업 성공·고급차·해외여행 등 공개 자료. 보조 증거.</li>\n</ul>\n<blockquote style="color:#555;border-left:4px solid #ddd;padding:8px 12px">핵심: 단순 \'재혼했다\' \'잘 산다\' 주장만으론 부족. 객관적 자료 + 사정 변경 + 자녀 성장에 따른 양육비 증가가 함께 입증돼야.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 양육비 증액심판 5단계',
        content:
          '<p><strong style="color:#1e3a5f">양육비이행관리원·가정법원 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 정리 + 사정 변경 입증 (1~2주)</strong> — 비양육자 소득 변동 추정 자료 + 자녀 교육비·생활비 영수증 + 재혼·자산 변동 자료.</li>\n<li><strong>2단계 — 양육비이행관리원 무료 상담 (1644-6621)</strong> — 증액 가능성 진단 + 무료 법률 지원 신청. 변호사 비용 부담 없음.</li>\n<li><strong>3단계 — 가정법원 양육비변경심판 신청</strong> — 신청서 + 사정 변경 증거 + 양육비 산정기준표 적용. 인지대 약 1만원 + 송달료. 법원 사실조회 함께 신청.</li>\n<li><strong>4단계 — 심리·조정 (약 4~6개월)</strong> — 법원이 양쪽 소득·자녀 양육 사정 종합 검토. 가정법원 산정기준표·표준양육비 적용. 조정 단계에서 합의 도달 사례 많음.</li>\n<li><strong>5단계 — 변경 결정 + 직접지급명령 함께 신청</strong> — 결정문 확보 후 직접지급명령(가사소송법 제63조의2)으로 회사 임금에서 자동 공제. 미지급 위험 차단.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 산정기준표, AI로 계산해보기</strong></p>\n<p style="margin:0;font-size:0.95em">소득 증가·자녀 성장·재혼 여부에 따라 증액 가능 범위가 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">증액심판에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>기존 양육비 결정문 (심판·조정조서·이혼 판결문)</strong> — 변경 대상 결정 확인.</li>\n<li><strong>비양육자 소득 변동 추정 자료</strong> — 명함·SNS·언론 기사·승진·이직 정보.</li>\n<li><strong>비양육자 재혼·재산 변동 자료</strong> — 혼인신고서 등본·가족관계증명서·등기부등본.</li>\n<li><strong>자녀 양육·교육비 영수증</strong> — 학교·학원·교재·생활비·의료비. 최근 6~12개월치.</li>\n<li><strong>본인 소득 자료 (양육 부담 비율 산정)</strong> — 종합소득세·근로소득원천징수.</li>\n<li><strong>가족관계증명서·기본증명서</strong> — 친권·양육 관계 입증.</li>\n<li><strong>본인 통장 사본</strong> — 송금 받을 계좌.</li>\n</ul>\n<blockquote style="color:#555;border-left:4px solid #ddd;padding:8px 12px">⚠️ 흔한 실수: \'재혼했으니 무조건 양육비 더 받는다\'는 인식은 위험. 비양육자 재혼 자체보다 \'소득 증가 + 자녀 성장\' 객관적 사정이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 양육비 증액 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"재혼했으니 양육비 늘어난다"</strong> — 재혼 자체로 증액 안 됨. 재혼 + 가계 형편 개선·소득 증가가 함께 입증돼야. 비양육자 입장에선 재혼 + 새 자녀 부양 시 오히려 감액 사유 주장 가능.</li>\n<li><strong>"전남편 소득 모르는데 입증 어렵다"</strong> — 법원 사실조회·국세청 자료 신청 가능. 양육비이행관리원·법률구조공단 무료 지원. 본인이 모른다고 포기 금지.</li>\n<li><strong>"자녀가 어려서 증액 안 된다는데"</strong> — 자녀 연령·교육 단계가 사정 변경 사유. 초등→중등→고등→대학 진학마다 증액 가능. 학원비·기숙사·해외 진학 추가 사유.</li>\n<li><strong>"본인 소득도 늘었으면 증액 안 된다"</strong> — 양육비는 양 부모 분담 원칙. 본인 소득 증가도 부담 비율 재산정 요인이지만 비양육자 소득 증가 폭이 크면 증액 인정 가능.</li>\n</ul>\n<blockquote style="color:#555;border-left:4px solid #ddd;padding:8px 12px">🏛️ 신청·상담 경로: 양육비이행관리원 1644-6621 / 대한법률구조공단 132 / 가정법원 / 한부모가족지원센터 1644-6621 / 여성긴급전화 1366.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 변경의 사정 변경 요건',
        summary:
          '대법원 2023스637 사건(대법원, 2024.10.08 선고)에서 법원은 자녀의 양육에 관한 부모의 책임은 친권 행사 여부와 관계없이 양 부모가 분담하는 것이 원칙이며, 양 부모의 소득·재산 상태·자녀의 양육 상황 등을 종합적으로 고려해 양육비를 산정하게 된다는 점을 다시 확인했습니다. 비양육자의 재혼·소득증가는 양육비 증액의 사정 변경 사유로 작동할 수 있지만, 단순한 정황 주장만으로는 부족하고 국세청 자료·재산 변동 등기·자녀 성장에 따른 양육비 증가가 객관적 자료로 입증되어야 한다는 점에서 법원 사실조회와 양육비이행관리원의 직권조사 활용이 효과적입니다.',
        takeaway: '비양육자 소득 증가는 객관적 자료가 핵심입니다. 법원 사실조회·국세청 자료·양육비이행관리원 무료 지원을 결합해 증액심판을 검토해보세요.',
      },
    ],
    faq: [
      {
        question: '비양육자가 재혼한 사실만으로 증액 가능한가요?',
        answer:
          '<strong>재혼 자체로는 안 됩니다.</strong> 재혼 + 가계 형편 개선·소득 증가가 함께 입증돼야. 객관적 자료가 핵심.',
      },
      {
        question: '전남편 소득을 어떻게 알아내나요?',
        answer:
          '<strong>법원 사실조회·국세청 자료·재산조회신청.</strong> 변호사·법률구조공단 활용. 본인이 직접 알기 어려운 자료도 확보 가능.',
      },
      {
        question: '자녀가 대학 진학하면 증액 가능한가요?',
        answer:
          '<strong>가능합니다. 교육비 증가는 증액 사유.</strong> 양육비 산정기준표는 일반 기준이고, 사립대·기숙사·해외 유학 등 특수 사정은 추가 증액 검토.',
      },
      {
        question: '본인 소득도 늘었는데 증액 가능할까요?',
        answer:
          '<strong>가능성 있어요.</strong> 양육비는 양 부모 분담 원칙. 양쪽 소득 비율 재산정. 비양육자 소득 증가 폭이 본인보다 크면 증액 인정 사례 많음.',
      },
      {
        question: '양육비이행관리원 무료 지원은 증액심판도 해주나요?',
        answer:
          '<strong>네, 가능합니다.</strong> 변호사 선임·신청 대행·법원 사실조회까지 무료 지원. 1644-6621 상담.',
      },
    ],
    cta: { text: '양육비 산정기준표, AI로 계산해보기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 산정기준표 적용', href: '/guide/child-support/child-support-calculation-table' },
      { label: '양육비 변경심판 절차', href: '/guide/child-support/child-support-modification-procedure' },
      { label: '양육비 감액·증액 수입 변동', href: '/guide/child-support/child-support-modification-employer-income-change' },
      { label: '양육비 직접지급명령 신청', href: '/guide/child-support/child-support-direct-payment-third-party-employer' },
      { label: '양육비이행관리원 무료 지원', href: '/guide/child-support/child-support-agency-collection-procedure' },
    ],
  },
];
