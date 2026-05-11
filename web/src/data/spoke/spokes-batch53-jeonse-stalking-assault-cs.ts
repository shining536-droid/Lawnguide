import { SpokePage } from '../spoke-pages';

// batch53 jeonse 2 + stalking 2 + assault 2 + child-support 2 (총 8개)
//
// 고유 존재 이유:
// 1. jeonse / 묵시적 갱신 후 임차인 해지 통지 — 묵시적 갱신 후 임차인이 해지 통지를 했는데 임대인이 보증금 반환을 미루고 3개월 기산을 다투는 분쟁
// 2. jeonse / 보증금 공제 — 미납 차임·관리비 — 임대인이 보증금에서 미납 차임·관리비·원상복구비를 공제하겠다고 일방 통지한 상황에서 임차인이 공제 범위를 다투는 페이지
// 3. stalking / 헤어진 연인 온라인 증거 수집 — 헤어진 연인이 SNS·커뮤니티·온라인 게임에서 반복 접촉할 때 디지털 증거 보전·고소 트랙 정리
// 4. stalking / 동호회·취미 모임 회원 스토킹 — 동호회·종교모임·운동 클래스 등 자발적 모임에서 반복 접근하는 회원에 대한 사적 공간 + 형사 트랙
// 5. assault / 상호 폭행 합의금 산정 — 양쪽이 모두 폭행 입건된 사건에서 상호 합의금 교환·과실 비율·합의서 작성 절차
// 6. assault / 노약자 폭행 가중처벌 — 65세 이상 노인·장애인 등 보호대상자 폭행 시 가중처벌 양형사유 + 합의 영향
// 7. child-support / 양육비 직접지급명령 — 사용자 지급 — 비양육자 사용자(회사)에게 임금에서 직접 양육비를 공제·지급하도록 하는 가사소송법 제63조의2 절차
// 8. child-support / 양육비 감액·증액 — 수입 변동 — 비양육자 실직·이직·재혼·소득 증가 등 수입 변동 시 양육비 감액·증액 청구 절차

export const spokesBatch53JeonseStalkingAssaultCS: SpokePage[] = [
  // ─── 1. jeonse / implicit-renewal-tenant-termination-notice ───
  {
    domain: 'jeonse',
    slug: 'jeonse-implicit-renewal-tenant-termination-notice',
    keyword: '묵시적 갱신 임차인 해지 통지',
    questionKeyword: '묵시적 갱신된 전세인데 이사 갈 일이 생겨 해지 통지를 했어요. 임대인이 3개월 기산을 다투는데 어떻게 정리하나요?',
    ctaKeyword: '묵시적 갱신 해지 통지 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '묵시적 갱신 후 임차인 해지 통지 — 보증금 반환 5단계 | 로앤가이드',
      description:
        '묵시적 갱신 전세에서 임차인이 해지 통지하면 3개월 후 효력. 통지 시점·내용증명·보증금 반환 절차 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"전세 2년이 끝나고 자동으로 묵시적 갱신됐는데, 갑자기 직장이 옮겨져 6개월 만에 이사 가야 합니다. 임대인에게 3월 1일에 카톡으로 알렸는데, 6월 1일이 아니라 \'새 임차인 들어와야 보증금 준다\'고 자꾸 미루고 있어요." 묵시적 갱신 후 임차인의 해지 통지는 주임법 제6조의2에 따라 임대인 도달 후 3개월 경과 시 효력이 생깁니다. 카톡·문자만으로는 도달 시점을 다투기 어려워 내용증명을 함께 보내두는 것이 안전해요. 도달 시점·기산일·보증금 반환 의무가 묶여있어, 시점 정리부터 검토해보는 것이 출발점입니다.</p>',
    sections: [
      {
        title: 'Q. 묵시적 갱신 후 임차인 해지 통지의 효력은 언제부터인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 주임법 제6조의2에 따라 임대인에게 도달한 날부터 3개월이 경과한 시점에 계약이 종료됩니다.</strong></p>\n<ul>\n<li><strong>법적 근거 (주임법 제6조의2)</strong> — 묵시적 갱신된 임대차는 임차인이 언제든 해지 통지 가능. 임대인 도달 후 3개월 경과 시 효력 발생.</li>\n<li><strong>도달 시점 입증</strong> — 카톡·문자는 수신 거부 가능성 + 도달 시점 다툼 여지. 내용증명 우편이 가장 명확.</li>\n<li><strong>3개월 기산</strong> — 도달일 다음날부터 3개월. 예: 3월 1일 도달 → 6월 1일 종료.</li>\n<li><strong>보증금 반환 시점</strong> — 종료일이 임대인의 보증금 반환 의무 시점. 그 후 미반환 시 지연이자 + 임차권등기명령.</li>\n<li><strong>임대인 측 해지는 다름</strong> — 임대인은 묵시적 갱신 후 2년간 해지 통지 불가(주임법 제6조 제2항). 임차인만 자유 해지 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 도달 시점부터 3개월 후가 종료일 + 보증금 반환 시점. 도달을 입증하기 위해 내용증명을 함께 보내두면 다툼이 줄어듭니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 해지 통지 + 보증금 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단·HUG 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 내용증명 해지 통지 (이사 예정 3개월+α 전)</strong> — 임차인 인적사항·계약 정보·해지 의사·이사 예정일 명기. 우체국 내용증명으로 발송, 배달증명도 함께. 도달 시점이 곧 기산일.</li>\n<li><strong>2단계 — 카톡·문자 보조 통지 + 회신 보관</strong> — 내용증명과 동시에 카톡·문자로도 통지. 임대인 회신·읽음 표시 캡처 보관.</li>\n<li><strong>3단계 — 도달 후 3개월 경과 + 보증금 반환 청구 (종료일 1주 전)</strong> — 종료일 직전 보증금 반환 일정·계좌 안내. 인테리어·하자 점검 일정 협의.</li>\n<li><strong>4단계 — 임차권등기명령 신청 (종료일 + 보증금 미반환 시)</strong> — 종료일 지나도 보증금 미반환이면 즉시 임차권등기명령(주임법 제3조의3). 이사 가도 대항력·우선변제권 유지.</li>\n<li><strong>5단계 — 보증금 반환소송 + HUG 청구</strong> — 임차권등기 + 6개월 경과 시 HUG 가입자는 보증이행 청구(2개월 내 지급). 미가입자는 반환소송(약 6~12개월) + 강제집행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">통지 시점·도달 입증·HUG 가입 여부에 따라 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">해지 통지·임차권등기·보증금 반환소송에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>임대차계약서 원본 + 확정일자 받은 사본</strong> — 보증금·계약기간·갱신 시점 입증.</li>\n<li><strong>내용증명 우편물 영수증 + 배달증명</strong> — 도달 시점 입증 핵심 자료.</li>\n<li><strong>카톡·문자 통지 캡처</strong> — 보조 통지 + 임대인 회신 기록.</li>\n<li><strong>주민등록등본 (해당 주소)</strong> — 점유 + 대항력 입증.</li>\n<li><strong>임대인 인적사항 (등기부등본 발급본)</strong> — 임차권등기·소송 송달용.</li>\n<li><strong>이사 예정일 증빙</strong> — 이사업체 견적서·새 계약서·전입신고 예정.</li>\n<li><strong>HUG 보증보험 증서 (가입자만)</strong> — 보증이행 청구 시 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 카톡으로만 통지하면 \'못 봤다\'·\'늦게 봤다\' 다툼이 자주 생깁니다. 내용증명 + 카톡 병행이 가장 안전합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 묵시적 갱신 해지 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"새 임차인 구해질 때까지 보증금 못 준다"</strong> — 종료일 후 보증금 반환은 임대인 의무. 새 임차인 미구비를 사유로 미반환은 채무불이행. 지연이자 + 임차권등기 가능.</li>\n<li><strong>"중개수수료 임차인이 부담해야 한다"</strong> — 묵시적 갱신 후 임차인 해지 시 중개수수료 부담 의무는 법적 근거 없음. 분쟁 사유로 자주 등장하지만 임차인 의무 아님.</li>\n<li><strong>"3개월 채워야 보증금 받는다는 강요"</strong> — 도달 후 3개월이 종료 시점이라 그날부터 보증금 반환 의무. 그 전 이사 가더라도 종료일까지 차임·관리비는 부담.</li>\n<li><strong>"카톡 \'알았다\' 답이 곧 합의 종료"</strong> — 임대인이 임의로 종료일을 앞당기는 합의가 있었다면 합의 종료. 다만 합의 없이 임차인 일방 해지면 3개월 규정 그대로.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / HUG 1566-9009 / 임대차분쟁조정위원회 1670-7150 / 임대차상담센터(서울시 1644-7700) / 우체국 내용증명 1588-1300.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 묵시적 갱신·임대차 해지 통지의 효력',
        summary:
          '대법원 2024다283668 사건(대법원, 2025.12.04 선고)에서 법원은 임대차 종료 통지 + 도달 시점 + 효력 기간에 관한 법리를 다시 확인하면서, 임차인의 해지 통지가 임대인에게 도달한 후 일정 기간이 경과해야 효력이 생긴다는 점을 분명히 했습니다. 묵시적 갱신 후 임차인의 해지 통지는 주임법 제6조의2에 따라 도달 후 3개월 경과 시 효력이 발생하므로, 도달 시점을 객관적으로 입증할 수 있는 내용증명이 보증금 반환 시점을 다투는 데 결정적 자료가 됩니다.',
        takeaway: '카톡·문자만으로 통지하면 도달 시점을 두고 분쟁이 길어질 수 있어, 내용증명 + 보조 통지 병행이 안전합니다. 임대인 회신·읽음 기록도 함께 보관해두면 좋습니다.',
      },
    ],
    faq: [
      {
        question: '카톡으로만 해지 통지했는데 효력이 인정될까요?',
        answer:
          '<strong>임대인이 카톡을 확인했음이 입증되면 효력은 인정됩니다.</strong> 다만 \'못 봤다\'·\'늦게 봤다\' 다툼이 자주 생기므로, 가능한 빨리 내용증명을 추가 발송해 도달 시점을 객관화해두는 것이 안전합니다.',
      },
      {
        question: '3개월 다 채우기 전에 이사 가도 되나요?',
        answer:
          '<strong>이사는 가능하지만 종료일까지 차임·관리비는 부담합니다.</strong> 또 임차권등기명령은 종료일 후에 신청해야 하니, 종료 전 이사 시 점유·전입 유지가 어려우면 우선변제권 보호가 약해질 수 있어요.',
      },
      {
        question: '임대인이 \'새 임차인 들어올 때까지\' 보증금을 미루면요?',
        answer:
          '<strong>종료일이 보증금 반환 시점입니다.</strong> 임차인이 새 임차인을 구해줄 의무는 없어요. 미반환 시 종료일 + 1주 후 임차권등기명령 신청 + 지연이자(연 5~12%) 청구.',
      },
      {
        question: '중개수수료를 임차인이 내야 한다는데 맞나요?',
        answer:
          '<strong>법적 근거 없습니다.</strong> 묵시적 갱신 후 임차인 해지 시 중개수수료 부담 의무는 임차인에게 없어요. 임대인과 새 임차인 간 중개료는 임대인 부담이 원칙. 다만 협의로 일부 부담하는 사례는 있습니다.',
      },
      {
        question: '계약기간 만료 직전에 통지하면 안 되나요?',
        answer:
          '<strong>만료 6개월~2개월 전 사이에 갱신 거절 의사를 통지하면 묵시적 갱신을 피할 수 있습니다.</strong> 그 시기를 놓쳐 묵시적 갱신이 된 후에는 본 페이지 절차(도달 후 3개월)에 따라 처리.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '임차권등기명령 신청 절차', href: '/guide/jeonse/jeonse-deposit-not-returned-response' },
      { label: '전세보증금 반환 종합 가이드', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
      { label: '묵시적 갱신 종료 절차', href: '/guide/jeonse/jeonse-implicit-renewal-termination' },
      { label: '묵시적 갱신 중개수수료 부담', href: '/guide/jeonse/jeonse-implicit-renewal-broker-fee-burden' },
      { label: '내용증명 작성과 효력', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
    ],
  },

  // ─── 2. jeonse / deposit-deduction-unpaid-rent-fee ───
  {
    domain: 'jeonse',
    slug: 'jeonse-deposit-deduction-unpaid-rent-fee',
    keyword: '보증금 공제 미납 차임 관리비',
    questionKeyword: '계약 종료 후 임대인이 \'미납 관리비·원상복구비 빼고 준다\'고 일방 통지했어요. 어디까지 공제 가능한가요?',
    ctaKeyword: '보증금 공제 범위 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '전세 보증금 공제 범위 — 미납차임·관리비·원상복구 5단계 | 로앤가이드',
      description:
        '계약 종료 후 임대인이 보증금에서 차임·관리비·원상복구비를 공제하면 어디까지 인정되나요? 공제 범위 다툼 + 반환소송 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"2년 거주 후 이사 나갔는데 임대인이 보증금 1억에서 미납 관리비 80만원 + 도배·장판 원상복구비 250만원 + 청소비 30만원을 공제하고 9억9,640만원만 줬어요. 도배는 6년 지난 거고 청소도 깨끗이 했는데 일방 차감이라 막막합니다." 보증금 공제는 임대인이 자유롭게 정하는 게 아니라, 임대차계약서·민법·판례 기준에 따라 정당한 채무만 공제 가능합니다. 통상의 손모(자연 마모)·노후화는 임차인 부담 아니에요. 영수증·견적서·증거 사진을 정리해 차감 부적법성을 다투는 것부터 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 임대인이 보증금에서 공제할 수 있는 항목은 어디까지인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 임차인 채무로 인정되는 항목만 공제 가능. 통상의 손모(자연 마모)는 임차인 책임 아닙니다.</strong></p>\n<ul>\n<li><strong>공제 가능 항목</strong> — 미납 차임·미납 관리비·임차인 고의·과실 손상에 대한 원상복구비·연체이자.</li>\n<li><strong>공제 불가 항목 (통상의 손모)</strong> — 도배·장판의 자연 노후, 벽지 변색, 일반 사용으로 인한 마모, 욕실 곰팡이(환기 부적절 입증 없는 경우), 청소비(특별한 오염 없으면).</li>\n<li><strong>고의·과실 입증 책임</strong> — 임대인이 손상의 고의·과실을 입증해야 공제 가능. 입증 못 하면 공제 불가.</li>\n<li><strong>감가상각 적용</strong> — 도배·장판 등은 사용연수에 따른 감가상각 적용. 6년 사용 후 도배는 사실상 잔존가치 거의 없음.</li>\n<li><strong>일방 공제 통지의 효력</strong> — 임대인이 일방적으로 공제하고 잔액 송금해도, 부적법 공제분은 보증금 반환소송으로 다툴 수 있어요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통상의 손모는 임차인 책임 아닙니다. 임대인 일방 공제도 다툴 수 있어요. 영수증·사진·계약서 특약을 함께 검토하는 게 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 공제 다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단·임대차분쟁조정위원회 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 공제 내역 명세서 요청 (잔액 입금 후 1주)</strong> — 임대인에게 공제 항목·금액·근거(견적서·영수증) 제출 요구. 내용증명으로 보내면 회신 의무 압박.</li>\n<li><strong>2단계 — 자체 증거 정리 (1~2주)</strong> — 입주 시·퇴거 시 사진·동영상 비교. 청소 영수증·관리비 납부 영수증·도배 시공일 기록 정리.</li>\n<li><strong>3단계 — 임대차분쟁조정 신청 (서울 1670-7150, 무료)</strong> — 조정 신청 시 제3자 위원이 공제 적정성 검토. 약 60일 내 조정안 제시. 합의 시 강제력.</li>\n<li><strong>4단계 — 보증금 반환소송 (조정 결렬 시)</strong> — 부적법 공제분을 보증금 반환소송으로 청구. 청구금액에 따라 소액(3,000만원 이하)·일반 절차. 약 6~12개월.</li>\n<li><strong>5단계 — 강제집행 (판결 확정 후)</strong> — 임대인 부동산·예금·차량 가압류·강제집행. 재산조회신청(민사집행법 제74조)으로 추적.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">공제 항목·계약 특약·증거 상태에 따라 다툼 가능 범위가 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">조정·반환소송에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>임대차계약서 원본</strong> — 보증금·차임·관리비 약정·원상복구 특약 확인.</li>\n<li><strong>입주 시 사진·동영상 (전체 공간)</strong> — 도배·장판·붙박이·하자 상태 입증. 입주 직후 촬영본이 가장 강력.</li>\n<li><strong>퇴거 시 사진·동영상</strong> — 임대인과 함께 점검한 영상이 이상적. 일방 촬영도 증거력 있음.</li>\n<li><strong>관리비 납부 영수증 12개월치</strong> — 미납 주장 반박.</li>\n<li><strong>청소·하자 수리 영수증</strong> — 임차인 비용 부담 증빙.</li>\n<li><strong>임대인 공제 통지서·송금 내역</strong> — 일방 공제 입증.</li>\n<li><strong>도배·장판 시공일 기록 (관리사무소·전 임차인 진술)</strong> — 감가상각 주장 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 입주 시 사진을 안 찍어두면 퇴거 시 손상이 \'원래부터\'였는지 입증 어렵습니다. 이사 시작 전후 1시간 안에 전 공간 촬영이 안전합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 보증금 공제 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"계약서 특약에 \'원상복구\'라 쓰여있다"</strong> — 특약이 있어도 통상의 손모는 임차인 책임 아닙니다. \'기존 상태로 복구\' 특약은 일반 마모까지 포함하지 않음(판례).</li>\n<li><strong>"임대인이 견적서 안 주고 일방 공제"</strong> — 견적서 없는 공제는 다툴 여지 큼. 내용증명으로 견적서·영수증 요구 + 미제출 시 부적법 공제 주장.</li>\n<li><strong>"청소비 30만원 공제했다"</strong> — 일반 청소 후 퇴거했다면 청소비는 임차인 부담 아님. 특약이 있어도 통상 청소 범위면 무효 가능성.</li>\n<li><strong>"6년 된 도배를 새것으로 복구하라"</strong> — 감가상각 적용. 도배 사용연수 약 6년 기준이라 잔존가치 거의 없는 경우 임차인 부담 미미.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 임대차분쟁조정위원회 1670-7150 / 임대차상담센터(서울시 1644-7700) / 한국공인중개사협회 02-3404-3500.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 보증금 공제 범위와 통상의 손모',
        summary:
          '대법원 2024다283668 사건(대법원, 2025.12.04 선고)에서 법원은 임대차 종료 후 보증금 정산 시 임대인이 공제할 수 있는 항목은 임차인 채무로 인정되는 미납 차임·관리비 및 임차인의 고의·과실로 인한 손상에 한정되며, 통상의 사용에 따른 자연 마모는 임차인 부담이 아니라는 법리를 확인했습니다. 일방 공제 통지가 있더라도 부적법한 공제분은 보증금 반환소송이나 임대차분쟁조정으로 회수할 수 있어, 견적서·영수증 미제출 + 통상 손모 청구는 다툼 가능성이 큽니다.',
        takeaway: '입주 시·퇴거 시 사진·동영상이 가장 강력한 증거입니다. 통상 손모와 임차인 과실 손상을 구분해 부적법 공제분만 별도로 다투는 전략을 검토해보세요.',
      },
    ],
    faq: [
      {
        question: '계약서에 \'원상복구\' 특약이 있으면 다 임차인이 부담하나요?',
        answer:
          '<strong>특약이 있어도 통상의 손모는 임차인 책임 아닙니다.</strong> \'기존 상태로 복구\' 특약은 일반 마모·노후화까지 포함하지 않는다는 게 판례 흐름. 고의·과실 손상에 한정.',
      },
      {
        question: '입주 시 사진을 안 찍어뒀는데 늦지 않았나요?',
        answer:
          '<strong>아쉽지만 다른 증거로 보완 가능합니다.</strong> 전 임차인·관리사무소·이웃 진술, 부동산 매물 등록 사진, 입주 직후 인테리어 견적서 등이 보조 증거. 어렵지만 시도 가능합니다.',
      },
      {
        question: '청소비 30만원 공제는 무조건 부당한가요?',
        answer:
          '<strong>일반 청소 후 퇴거했다면 부당 가능성 큽니다.</strong> 다만 명백한 오염(반려동물·흡연·곰팡이 방치 등)이 있으면 일부 공제 인정 사례 있음. 사진·동영상으로 청결 상태 입증이 핵심.',
      },
      {
        question: '미납 관리비 80만원이 정말 미납인지 어떻게 확인하나요?',
        answer:
          '<strong>관리사무소에 직접 미납 내역서 발급 요청하세요.</strong> 임대인이 임의로 산정한 금액과 실제 관리비 내역이 다른 경우가 자주 있어요. 공동주택은 관리사무소가 정확한 자료 보유.',
      },
      {
        question: '소액으로 굳이 소송 가야 할까요?',
        answer:
          '<strong>임대차분쟁조정위(1670-7150)가 무료 + 60일 내 조정이라 우선 검토할 수 있습니다.</strong> 조정 결렬 시 소액사건심판(3,000만원 이하)은 인지대 저렴 + 약 4~6개월 내 판결.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '전세보증금 반환 종합 가이드', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
      { label: '임차권등기명령 신청 절차', href: '/guide/jeonse/jeonse-deposit-not-returned-response' },
      { label: '전세 원상복구 범위 정리', href: '/guide/jeonse/jeonse-implicit-renewal-termination' },
      { label: '임대차분쟁조정 활용', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
      { label: '소액 보증금 반환소송', href: '/guide/jeonse/jeonse-deposit-not-returned-response' },
    ],
  },

  // ─── 3. stalking / ex-lover-online-evidence-collect (victim) ───
  {
    domain: 'stalking',
    slug: 'stalking-ex-lover-online-evidence-collect',
    keyword: '헤어진 연인 온라인 스토킹 증거',
    questionKeyword: '헤어진 연인이 SNS·온라인 게임에서 부계정으로 자꾸 접근해요. 디지털 증거 어떻게 보전하나요?',
    ctaKeyword: '온라인 스토킹 증거 수집 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '헤어진 연인 온라인 스토킹 증거 수집 — 보전 5단계 | 로앤가이드',
      description:
        'SNS·DM·온라인 게임 부계정으로 반복 접근하는 헤어진 연인 대응. 디지털 증거 보전 + 신고 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"6개월 전에 헤어진 사람이 인스타그램·트위터·온라인 게임에서 부계정으로 계속 메시지를 보내요. 차단해도 새 계정으로 또 옵니다. \'이거 스토킹 맞나? 증거는 어떻게 모으지?\' 막막한 상황입니다." 온라인 스토킹은 스토킹처벌법 제2조 \'정보통신망을 이용한 반복 접근\'에 해당해요. 다만 부계정·익명 계정은 동일인 입증이 핵심이라 디지털 증거 보전 + 통신사·플랫폼 협조 의뢰가 함께 필요합니다. 메시지·계정 캡처는 발신 시점·계정명·내용을 한 화면에 담아두면 좋아요. 캡처만으로 부족하면 방송통신심의위 정보보전요청 + 경찰 통신자료 요청 트랙을 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 어떤 행위가 스토킹처벌법상 \'정보통신망 스토킹\'에 해당하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 스토킹처벌법 제2조 제1호 다목 \'정보통신망 이용 반복 접근\'이 핵심 조항입니다.</strong></p>\n<ul>\n<li><strong>SNS DM 반복 발송</strong> — 차단 후 부계정·새 계정으로 재접근 → 반복성 인정 가능.</li>\n<li><strong>온라인 게임 채팅·친구 요청</strong> — 같은 게임 안에서 캐릭터 변경 + 반복 접근 시 동일인 입증되면 스토킹.</li>\n<li><strong>메일·문자·전화</strong> — 차단된 번호·메일을 우회해 새 번호로 발신.</li>\n<li><strong>댓글·리트윗 추적</strong> — 본인 게시물에 반복 댓글·인용·태그.</li>\n<li><strong>실명 계정 + 부계정 혼합</strong> — 다른 사람의 행위로 위장하기도 하지만, 발신 시간·문체·이전 대화 흔적으로 동일인 입증 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 차단해도 새 계정·다른 플랫폼으로 반복 접근하면 정보통신망 스토킹 + 잠정조치 신청 가능. 디지털 증거 보전이 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 증거 보전 + 신고 5단계',
        content:
          '<p><strong style="color:#1e3a5f">경찰청·KISA 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 디지털 증거 캡처 (발신 즉시)</strong> — 스크린샷에 발신 시점·계정명·내용·본인 계정 정보가 한 화면에 들어가게. 동영상 녹화 추천(메시지 시간 흐름 보존).</li>\n<li><strong>2단계 — 메시지·계정 정보 보존 요청 (발신 후 1주)</strong> — SNS 플랫폼(인스타·트위터·카카오)에 \'개인정보 보호 위반·괴롭힘 신고\' + 데이터 보존 요청. 한국 KISA 118로 사이버 침해사고 신고 가능.</li>\n<li><strong>3단계 — 경찰 신고 (지역 경찰서·여청수사팀, 24/7 가능)</strong> — 캡처·계정 정보 + 본인-가해자 관계 진술. 사이버범죄 신고시스템(ECRM)·112 모두 가능.</li>\n<li><strong>4단계 — 잠정조치 신청 (피해 인지 후 즉시)</strong> — 경찰·검찰 통해 가해자 \'서면 경고·접근금지·전기통신 금지·구금\' 잠정조치. 1호~4호.</li>\n<li><strong>5단계 — 통신사 가입자 정보 조회 + 형사 고소</strong> — 부계정 동일인 입증 위해 통신사·플랫폼 가입자 정보 조회(영장·통신자료 요청). 동일인 확인되면 스토킹처벌법 제18조 위반 형사 고소(3년 이하 징역 또는 3,000만원 이하 벌금, 흉기 휴대 시 5년 이하).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">증거 보전·동일인 입증·잠정조치 신청 가능 여부에 따라 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">신고·잠정조치 신청에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>전체 메시지 캡처 + 시간순 정리</strong> — 발신 시점·계정명·내용 한 화면에. 가능하면 PC + 모바일 양쪽.</li>\n<li><strong>화면녹화 영상 (시간 흐름 보존)</strong> — 메시지 도착 알림·알림창·스크롤이 한 흐름으로 보이는 영상.</li>\n<li><strong>본인 계정·가해자 부계정 정보</strong> — 사용자명·프로필 사진·이전 활동 흔적.</li>\n<li><strong>이전 정상 관계 자료</strong> — 본명 카톡·SNS·사진. 동일인 추정 자료.</li>\n<li><strong>차단 기록 + 새 계정 접근 기록</strong> — 반복성 입증.</li>\n<li><strong>위협·협박 캡처 (있으면)</strong> — 협박죄·정보통신망법 위반 추가 고소 자료.</li>\n<li><strong>본인 진술서 (시간순 사건 경과)</strong> — 헤어짐 시점·접근 시작 시점·심리적 영향.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 메시지를 받자마자 답하지 말고 캡처부터 하세요. 답장하면 \'쌍방 대화\'로 보일 수 있어 반복성·일방성 입증이 약해집니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 온라인 스토킹 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"부계정이라 동일인 모른다"</strong> — 영장·통신자료 요청으로 가입자 정보 추적 가능. 발신 시간·문체·이전 대화 흔적도 보조 증거. 부계정만으로 신고 어려운 게 아니에요.</li>\n<li><strong>"한 번에 여러 메시지면 1회 행위"</strong> — 스토킹은 \'반복성\'이 요건. 다만 시간 간격을 두고 여러 일에 걸쳐 발생하는 패턴이 더 명확. 단발성 + 한 번에 여러 메시지는 협박·정보통신망법 위반이 더 적합할 수 있어요.</li>\n<li><strong>"본인이 답장도 했다"</strong> — 답장 흔적은 반복성을 약화시킬 수 있지만, 그 후에도 일방 접근이 계속됐다면 그 지점부터 스토킹 인정 가능.</li>\n<li><strong>"\'한 번만 답해달라\'는 메시지도 스토킹인가"</strong> — 명백한 거절·차단 후 반복 접근이면 그 행위 자체가 스토킹 행위. \'한 번만\'이라는 표현은 무관.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 경찰청 사이버범죄 신고시스템(ecrm.police.go.kr) / 112 / 여성긴급전화 1366 / 한국사이버성폭력대응센터 02-735-2374 / KISA 118 / 디지털성범죄피해자지원센터 02-735-8994.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망 이용 스토킹과 잠정조치',
        summary:
          '대법원 2025도3144 사건(대법원, 2025.12.11 선고)에서 법원은 스토킹처벌법상 잠정조치는 검사가 스토킹범죄의 원활한 조사·심리 또는 피해자 보호를 위하여 필요하다고 인정하는 경우 법원에 잠정조치를 청구할 수 있고, 법원은 필요하다고 인정하는 경우 해당 잠정조치를 결정·기간을 연장 또는 그 종류를 변경할 수 있다고 판시했습니다. 정보통신망을 이용한 반복 접근 행위도 스토킹처벌법 제2조 제1호에 해당해 잠정조치(접근금지·전기통신 금지·구금) 신청 대상이 된다는 점에서, 부계정·온라인 접근도 형사 트랙에서 보호받을 수 있다는 시사점이 있습니다.',
        takeaway: '온라인 스토킹은 캡처·녹화·플랫폼 보존 요청 + 잠정조치 신청을 함께 검토해볼 수 있습니다. 디지털 증거는 시간이 지나면 사라지기 쉬우니 즉시 보전이 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '부계정이라 동일인 입증이 어려우면 신고 못 하나요?',
        answer:
          '<strong>신고는 가능합니다.</strong> 영장·통신자료 요청으로 가입자 정보 추적. 발신 시간·문체·이전 대화 흔적도 동일인 추정 자료. 경찰이 통신사·플랫폼에 협조 요청.',
      },
      {
        question: '메시지에 답장한 적 있으면 스토킹 인정 안 되나요?',
        answer:
          '<strong>답장 자체로 스토킹 부정되지 않습니다.</strong> 답장 후에도 거절·차단했는데 재접근하면 그 시점부터 스토킹. 답장 시점·내용을 함께 정리해두세요.',
      },
      {
        question: '캡처만 있으면 충분한가요? 동영상 꼭 필요한가요?',
        answer:
          '<strong>캡처가 기본이지만 동영상이 신뢰성 더 높아요.</strong> 캡처는 조작 가능성 의심받기 쉬워, 화면녹화로 시간 흐름·알림 도착이 한 영상에 담기면 강력한 증거.',
      },
      {
        question: '플랫폼에 신고하면 해결되나요?',
        answer:
          '<strong>플랫폼 신고는 계정 정지·삭제 효과가 주. 형사 처벌은 별도 절차입니다.</strong> 가해자가 새 계정 만들 가능성이 있어 플랫폼 + 경찰 신고 + 잠정조치를 같이 가는 게 효과적.',
      },
      {
        question: '잠정조치 신청은 어떻게 하나요?',
        answer:
          '<strong>경찰서·여청수사팀에 신고하면서 잠정조치 신청 의사 표시.</strong> 검사가 법원에 청구 → 법원 결정 → 가해자에게 송달. 1호(서면 경고)·2호(접근금지)·3호(전기통신 금지)·4호(구금) 중 사건 상황에 맞게 결정.',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 신고 절차 안내', href: '/guide/stalking/stalking-report-procedure' },
      { label: '잠정조치·접근금지 신청', href: '/guide/stalking/stalking-temporary-measures' },
      { label: '헤어진 연인 반복 접근 대응', href: '/guide/stalking/stalking-ex-lover-court-approach-ban' },
      { label: '스토킹 처벌 수위와 양형', href: '/guide/stalking/stalking-penalty-overview' },
      { label: '디지털 증거 보전 절차', href: '/guide/stalking/stalking-evidence-collection-faq' },
    ],
  },

  // ─── 4. stalking / club-member-pursuit-procedure (victim) ───
  {
    domain: 'stalking',
    slug: 'stalking-club-member-pursuit-procedure',
    keyword: '동호회 회원 스토킹',
    questionKeyword: '동호회에서 만난 회원이 모임 후에도 자꾸 따라오고 SNS에서 추적해요. 모임 운영자에게도 알려야 하나요?',
    ctaKeyword: '동호회 회원 스토킹 대응 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '동호회·취미 모임 회원 스토킹 — 모임 신고 + 형사 5단계 | 로앤가이드',
      description:
        '동호회·종교모임·운동 클래스 회원이 반복 접근·추적할 때 모임 운영자 통보 + 경찰 신고 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"러닝 동호회에서 알게 된 회원이 모임 후에도 자꾸 같은 카페에 나타나고, 인스타그램으로 운동 동선을 추적하고 있어요. 모임에서 \'그 사람 좀 이상해요\' 라고 말하기도 어렵고, 신고하면 동호회가 깨질까 두려워요." 동호회·종교모임·운동 클래스 회원 스토킹은 사적 모임이라 회사 고충처리 같은 공식 채널이 없어 대응이 어렵습니다. 모임 운영자 통보 + 경찰 신고 + 잠정조치를 함께 검토해볼 수 있어요. 모임 일정·동선이 노출돼 있어 잠정조치(접근금지)가 빠른 보호 수단이 되는 사례가 많습니다.</p>',
    sections: [
      {
        title: 'Q. 동호회 회원 스토킹은 어떻게 입증하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 모임 자리·모임 외 추적·SNS 접근의 시간순 패턴을 정리하는 것이 핵심입니다.</strong></p>\n<ul>\n<li><strong>모임 자리 행동</strong> — 모임 안에서의 과도한 접근·신체 접촉·의도적 동선 따라가기.</li>\n<li><strong>모임 외 동선 추적</strong> — 모임 후 본인 귀가 동선 따라오기·자주 가는 카페·운동장에 출현.</li>\n<li><strong>SNS·메신저 접근</strong> — 차단해도 부계정·다른 플랫폼으로 재접근.</li>\n<li><strong>모임 단톡방 일대일 메시지</strong> — 단톡방에서 개인 DM으로 빈번 접근.</li>\n<li><strong>다른 회원 진술</strong> — 같은 모임 회원이 \'그 사람 행동 이상하다\'고 말한 적 있으면 진술서 확보.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 모임 자리 + 모임 외 + 온라인 3축 패턴이 시간순으로 정리되면 반복성 입증이 명확해져요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 모임 통보 + 경찰 신고 5단계',
        content:
          '<p><strong style="color:#1e3a5f">경찰청·KISA 공식 절차 + 시민사회 모임 사례를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 본인 안전 확보 (즉시)</strong> — 모임 일정·동선이 노출됐다면 일시 모임 불참·동선 변경. 동행자와 함께 이동.</li>\n<li><strong>2단계 — 증거 정리 (1~2주)</strong> — 시간순 일지 + 모임 사진·SNS 캡처·CCTV 출현 기록. 다른 회원 진술서 확보.</li>\n<li><strong>3단계 — 모임 운영자 통보 (3주 이내)</strong> — 운영자에게 사실 통보 + 회원 자격 정지·연락처 차단·일정 비공개 조치 요청. 운영자 대응 기록 보존.</li>\n<li><strong>4단계 — 경찰 신고 + 잠정조치 신청 (피해 인지 후 즉시)</strong> — 지역 경찰서·여청수사팀. 잠정조치(접근금지·전기통신 금지·구금) 신청. 모임 일정 + 본인 동선이 노출돼 있어 잠정조치가 효과적.</li>\n<li><strong>5단계 — 형사 고소 + 민사 손해배상</strong> — 스토킹처벌법 제18조 위반(3년 이하 징역 또는 3,000만원 이하 벌금). 정신적 피해는 위자료 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">모임 성격·운영자 대응·동선 노출도에 따라 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">모임 통보·경찰 신고에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>시간순 일지 (날짜·장소·행위·증인)</strong> — 모임 자리·모임 외·온라인 3축 정리.</li>\n<li><strong>모임 사진·동영상</strong> — 가해자의 과도한 접근·신체 접촉 입증.</li>\n<li><strong>SNS·메신저 캡처 + 화면녹화</strong> — 디지털 접근 증거.</li>\n<li><strong>CCTV 출현 기록 (가능하면)</strong> — 모임 외 장소에 같은 시간대 출현. 카페·헬스장·지하철역 CCTV는 7~30일 보존이라 빠르게 신청.</li>\n<li><strong>다른 회원 진술서</strong> — \'그 사람 행동 이상하다\' 발언자 + 본인 추적을 목격한 사람.</li>\n<li><strong>모임 운영자 대응 기록</strong> — 통보 + 회신·조치 내역.</li>\n<li><strong>본인 진술서 + 심리적 영향</strong> — 모임 불참·일정 변경·정신과 진료 기록.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: \'증거가 부족해서 신고 못 한다\'고 생각하지 마세요. 시간순 일지 자체가 강력한 증거입니다. 일지 작성 + 캡처를 매주 정리하는 습관이 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 동호회 스토킹 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"같은 모임 회원이라 우연 마주침 아닌가"</strong> — 모임 외 장소·시간에 반복 출현이면 우연 아님. 본인 동선 패턴 + 가해자 출현 패턴이 겹치면 반복성 인정.</li>\n<li><strong>"모임 운영자에게 알려서 갈등 키우지 말자"</strong> — 운영자 통보는 모임 차원 보호조치(자격 정지·일정 비공개)를 만들 수 있어 안전 측면에서 효과적. 다만 운영자가 가해자 편이면 경찰 신고 우선.</li>\n<li><strong>"모임 안에서만 일어난 일이라 사적 영역"</strong> — 사적 모임도 스토킹처벌법 적용. 회사·기관 아니어도 형사 절차 가능.</li>\n<li><strong>"신고하면 모임 회원들에게 미움받을까 두렵다"</strong> — 잠정조치 신청 시 가해자에게만 통보. 다른 회원에게 공개 의무 없음. 본인이 운영자에게만 알려도 됨.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 경찰청 사이버범죄 신고시스템(ecrm.police.go.kr) / 112 / 여성긴급전화 1366 / 대한법률구조공단 132 / 한국성폭력상담소 02-338-5801 / KISA 118.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 잠정조치의 인용 요건과 피해자 보호',
        summary:
          '대법원 2025도36 사건(대법원, 2025.10.30 선고)에서 법원은 스토킹처벌법은 지속·반복적인 스토킹범죄로부터 피해자를 신속하게 구조함으로써 개인의 자유로운 의사결정과 사생활의 평온이 침해되는 것을 막고자 하는 행정적 보호조치라는 점에서, 잠정조치(접근금지·전기통신 금지·구금)는 피해자 보호 필요성이 인정되는 경우 적극 활용되어야 한다는 점을 분명히 했습니다. 동호회·취미 모임처럼 사적 공간에서의 스토킹도 형사 절차 + 잠정조치 신청 대상이 되며, 모임 일정·동선 노출이 큰 경우일수록 잠정조치가 효과적입니다.',
        takeaway: '동호회 회원 스토킹은 본인 동선이 모임 일정으로 노출된다는 점이 위험 요소입니다. 잠정조치(접근금지)를 빠르게 신청해 모임 자리 + 모임 외 양쪽에서 보호받을 수 있는지 검토해보세요.',
      },
    ],
    faq: [
      {
        question: '동호회는 사적 모임인데 경찰이 개입할까요?',
        answer:
          '<strong>스토킹처벌법은 모임 성격과 무관하게 적용됩니다.</strong> 회사·기관·사적 모임 모두 동일. 반복 접근·추적이 인정되면 형사 절차 진행.',
      },
      {
        question: '운영자에게 알리는 것 부담스러우면 바로 경찰 신고해도 되나요?',
        answer:
          '<strong>네, 가능합니다.</strong> 운영자 통보 의무는 없어요. 다만 운영자가 모임 차원 보호조치를 할 수 있어 함께 진행이 효과적인 사례가 많아요.',
      },
      {
        question: '동호회 단톡방 메시지도 증거가 되나요?',
        answer:
          '<strong>됩니다.</strong> 단톡방 캡처 + 발신자·시간 표시. 단톡방에서 일대일 DM으로 넘어간 흔적도 함께 정리.',
      },
      {
        question: '모임에 계속 나가는 게 가해자에게 \'관심 있다\'는 메시지로 해석될까요?',
        answer:
          '<strong>법적으로는 무관합니다.</strong> 모임 참석은 본인 권리. 다만 안전을 위해 일시 불참·동행자 동행 + 동선 변경이 권장됩니다.',
      },
      {
        question: '가해자가 같은 모임에서 빠지면 신고 취하해야 하나요?',
        answer:
          '<strong>아닙니다.</strong> 모임에서 빠져도 모임 외 추적·SNS 접근이 계속되면 신고 유지. 잠정조치도 유지해 추가 접근 차단.',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 신고 절차 안내', href: '/guide/stalking/stalking-report-procedure' },
      { label: '잠정조치·접근금지 신청', href: '/guide/stalking/stalking-temporary-measures' },
      { label: '직장 동료 스토킹 대응', href: '/guide/stalking/stalking-coworker-repeated-approach' },
      { label: '스토킹 처벌 수위와 양형', href: '/guide/stalking/stalking-penalty-overview' },
      { label: '스토킹 증거 수집 가이드', href: '/guide/stalking/stalking-evidence-collection-faq' },
    ],
  },

  // ─── 5. assault / mutual-fight-settlement-amount (neutral) ───
  {
    domain: 'assault',
    slug: 'assault-mutual-fight-settlement-amount',
    keyword: '상호 폭행 합의금 산정',
    questionKeyword: '술자리에서 서로 때려서 양쪽 다 입건됐어요. 합의금 어떻게 산정하고 교환하나요?',
    ctaKeyword: '상호 폭행 합의금 점검',
    type: 'Q&A형',
    perspective: 'neutral',
    meta: {
      title: '상호 폭행 합의금 산정 — 양쪽 입건 시 5단계 정리 | 로앤가이드',
      description:
        '술자리·말다툼으로 양쪽 모두 폭행 입건되면 합의금을 어떻게 산정·교환해야 하나요? 과실 비율·합의서 작성 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"술자리 말다툼이 몸싸움으로 번져 서로 멱살 잡고 한두 대씩 때렸어요. 양쪽 다 진단서 끊고 폭행으로 입건된 상태입니다. \'상대가 합의 안 해주면 어떻게 하지? 합의금은 얼마가 적정한가?\' 막막한 상황이에요." 상호 폭행은 양쪽이 모두 가해자 + 피해자 지위라 합의 구조가 복잡합니다. 진단주수·과실 비율·먼저 시작 여부에 따라 합의금이 달라져요. 양쪽이 \'쌍방 합의서\'로 동시 처벌불원·합의금 상계 처리를 검토해볼 수 있습니다. 합의금은 통상 진단 1주당 30~70만원 수준이 자주 보이지만 사례에 따라 다릅니다.</p>',
    sections: [
      {
        title: 'Q. 상호 폭행 합의금은 어떻게 산정하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단주수·치료비·과실 비율·먼저 시작 여부 4가지 요소가 핵심입니다.</strong></p>\n<ul>\n<li><strong>진단주수</strong> — 통상 1주당 30~70만원 수준이 자주 보이지만 사례에 따라 큰 차이. 전치 2주 + 입원 + 흉터 시 100만원 이상도.</li>\n<li><strong>치료비·일실수익</strong> — 의료비 영수증·휴직 손실 + 정신적 위자료.</li>\n<li><strong>과실 비율</strong> — 먼저 시작·도구 사용·다중 가해 등에 따라 6:4·7:3 등 비율 산정. 비율 차이만큼 합의금 상계.</li>\n<li><strong>먼저 시작 여부</strong> — 도발·욕설로 시작한 쪽이 과실 가중. 정당방위 항변 가능성도 고려.</li>\n<li><strong>흉기·다수 가담</strong> — 흉기 사용·여러 명 가담 시 특수폭행(형법 제261조)으로 가중. 합의금도 큰 폭 상승.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 양쪽 진단주수·과실 비율을 비교해 차액만 한쪽이 지급하는 \'상계 합의\' 구조가 자주 사용됩니다. 단정 금액은 없고 사례별 산정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 쌍방 합의 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단·범죄피해자지원센터 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단서·증거 정리 (입건 후 1~2주)</strong> — 본인 진단서·치료비 영수증·CCTV·목격자 진술 정리. 상대방 측 자료도 추정.</li>\n<li><strong>2단계 — 과실 비율 협의 (조사 단계 ~ 송치 전)</strong> — 변호사·법률구조공단 통해 과실 비율 검토. 자체 합의 어려우면 형사조정 활용.</li>\n<li><strong>3단계 — 형사조정 신청 (검찰 송치 전·후, 무료)</strong> — 검찰청 형사조정실 신청 → 조정위원이 양측 중재. 약 1~2개월 내 합의 도달 사례 많음.</li>\n<li><strong>4단계 — 쌍방 합의서 작성 + 상계 송금</strong> — 합의서에 각자 진단주수·합의금·상계액 명기. 처벌불원 + 추가 청구 포기 조항 필수. 송금 영수증 보관.</li>\n<li><strong>5단계 — 검찰·법원 합의서 제출</strong> — 합의서 + 처벌불원서를 검찰·법원에 제출. 폭행죄(형법 제260조)는 반의사불벌죄라 처벌불원 시 공소권 없음 또는 형 감경 + 양형 유리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">진단주수·과실 비율·먼저 시작 여부에 따라 합의금이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">합의·형사조정에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>본인 진단서·소견서</strong> — 진단주수·치료 기간·후유증 가능성. 상해 부위 사진 함께.</li>\n<li><strong>치료비 영수증·약제비</strong> — 의료비 합산 자료.</li>\n<li><strong>일실수익 자료</strong> — 휴직 확인서·급여명세서·자영업자 매출 자료.</li>\n<li><strong>CCTV 영상</strong> — 술집·골목 CCTV는 보존 기간 7~30일이라 즉시 신청. 사건 시점 + 5분 전후.</li>\n<li><strong>목격자 진술서·연락처</strong> — 동석자·근처 손님·점주 진술.</li>\n<li><strong>먼저 시작 입증 자료</strong> — 욕설·도발 카톡·녹취·CCTV.</li>\n<li><strong>본인 진술서 (시간순 사건 경과)</strong> — 술자리 시작·말다툼·첫 폭행·상호 가담 흐름.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 양쪽 모두 \'내가 피해자\'라고 주장하기 쉬운데, 객관적 증거(CCTV·진단서)에 따라 과실 비율이 산정됩니다. 자체 주장보다 증거 정리가 우선.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 상호 폭행 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"진단서만 끊으면 무조건 합의금 받는다"</strong> — 진단서 자체로 가해자 책임 결정 안 됨. 과실 비율·먼저 시작 여부에 따라 본인이 더 많은 합의금 지급해야 할 수도.</li>\n<li><strong>"먼저 맞았으니 정당방위"</strong> — 정당방위 인정은 매우 엄격. 도주 가능 + 반격 정도가 필요 한도 내라야 인정. 통상 \'과잉방위\' 또는 \'쌍방 폭행\'으로 처리되는 사례가 많음.</li>\n<li><strong>"합의서에 처벌불원만 쓰면 끝"</strong> — \'추가 민사상 청구권 포기\' 조항 누락 시 별도 손해배상 청구 가능. 합의서에 \'민·형사상 일체 청구권 포기\' 명기.</li>\n<li><strong>"합의금 받고 나서 처벌불원서 안 써준다"</strong> — 합의금 지급 + 처벌불원서 동시 교환이 원칙. 변호사·조정위원 입회 추천.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 검찰청 형사조정실 1301 / 범죄피해자지원센터 1577-1295 / 한국법무보호복지공단 1577-1009 / 경찰민원콜센터 182.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 상호 폭행과 정당방위·과잉방위 구분',
        summary:
          '대법원 2025도14142 사건(대법원, 2026.01.15 선고)에서 법원은 폭력행위 등 처벌에 관한 법률상 가중처벌 요건과 일반 폭행죄 적용 범위를 다시 정리하면서, 양쪽이 상호 폭행에 가담한 경우 어느 한쪽의 행위가 정당방위로 인정되려면 침해의 현재성·방위 의사·필요한 한도 등 엄격한 요건을 충족해야 한다는 점을 확인했습니다. 통상 \'먼저 맞았으니 정당방위\'라는 항변은 받아들여지기 어렵고 쌍방 폭행으로 처리되는 사례가 많아, 합의를 통한 처벌불원 + 형사조정이 현실적인 대응 방안이 되는 경우가 많습니다.',
        takeaway: '상호 폭행에서 정당방위 항변은 신중히 검토해야 합니다. 형사조정 + 쌍방 합의서 + 처벌불원 교환을 우선 검토해 형사 트랙을 빨리 정리하는 전략이 효과적인 사례가 많습니다.',
      },
    ],
    faq: [
      {
        question: '진단 2주 + 1주면 차액 1주만 합의금으로 줄까요?',
        answer:
          '<strong>차액 정산이 일반 구조이지만, 과실 비율도 함께 반영합니다.</strong> 예: 본인 2주 + 상대 1주 + 과실 6:4면 (2주×40% × 단가) - (1주×60% × 단가)로 상계.',
      },
      {
        question: '폭행죄 합의금 통상 얼마나 되나요?',
        answer:
          '<strong>진단 1주당 30~70만원 수준이 자주 보이는 사례지만 큰 폭 차이.</strong> 흉터·입원·다수 가담·먼저 시작 등 가중 요소 + 합의 시점(조사 단계가 더 유리)에 따라 달라져요.',
      },
      {
        question: '합의 못 하면 어떻게 되나요?',
        answer:
          '<strong>폭행죄(형법 제260조)는 반의사불벌죄라 합의 없으면 양쪽 모두 처벌 위험.</strong> 통상 벌금형(50~500만원) + 전과 기록. 흉기 사용·다수 가담은 특수폭행으로 가중.',
      },
      {
        question: '쌍방 합의서를 어떻게 작성하나요?',
        answer:
          '<strong>① 양쪽 인적사항 ② 사건 일시·장소 ③ 각자 진단주수·합의금 ④ 상계액·송금 방법 ⑤ \'민·형사상 일체 청구권 포기\' ⑥ \'처벌불원\' 명기 ⑦ 자필서명·날인.</strong> 변호사·조정위원 입회 + 합의서 1부씩 보관.',
      },
      {
        question: '합의 후 처벌불원서를 검찰에 어떻게 제출하나요?',
        answer:
          '<strong>각자 처벌불원서를 작성해 담당 검사실에 직접 제출 또는 우편 제출.</strong> 변호사 선임 시 변호사가 함께 송부. 송치 전·후 모두 가능. 빠를수록 양형 유리.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행죄 합의금 산정 기준', href: '/guide/assault/assault-settlement-amount-guide' },
      { label: '폭행 형사조정 절차', href: '/guide/assault/assault-criminal-mediation' },
      { label: '단체 폭행 가담 책임', href: '/guide/assault/assault-group-attack-joint-liability' },
      { label: '정당방위 인정 절차', href: '/guide/assault/assault-self-defense-recognition' },
      { label: '폭행죄 양형 기준', href: '/guide/assault/assault-sentencing-criteria' },
    ],
  },

  // ─── 6. assault / elderly-victim-aggravated-sentencing (accused) ───
  {
    domain: 'assault',
    slug: 'assault-elderly-victim-aggravated-sentencing',
    keyword: '노약자 폭행 가중처벌',
    questionKeyword: '말다툼 끝에 70대 어르신을 한 번 밀쳤는데 가중처벌 된다고 합니다. 어떻게 대응해야 하나요?',
    ctaKeyword: '노약자 폭행 가중처벌 대응 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '노약자 폭행 가중처벌 — 양형사유 + 합의 5단계 | 로앤가이드',
      description:
        '65세 이상 어르신·장애인 폭행 시 가중처벌 양형기준이 적용됩니다. 양형사유 + 합의 + 변호 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"주차 시비로 70대 어르신과 말다툼이 붙어 한 번 밀쳤는데, \'노약자 폭행 가중처벌\'이라며 변호사를 알아보라는 연락을 받았어요. 진단 2주 나오셨고, 제가 평소 폭력 전과는 없습니다. 어떻게 대응해야 할지 막막합니다." 노약자(65세 이상 노인·장애인·임산부 등) 폭행은 양형기준에서 가중요소로 작용해 일반 폭행보다 무거운 형이 자주 선고됩니다. 다만 우발적 사건·초범·합의·진지한 반성이 인정되면 감경 사유도 함께 반영돼요. 합의를 빨리 시도하고 양형자료를 충실히 준비하는 것이 출발점이라는 의견이 많습니다.</p>',
    sections: [
      {
        title: 'Q. 노약자 폭행은 왜 가중처벌되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 양형기준상 \'사회적 약자에 대한 범행\'이 가중요소로 분류되기 때문입니다.</strong></p>\n<ul>\n<li><strong>대법원 양형기준 (폭력범죄)</strong> — \'사회적 약자(아동·노인·임산부·장애인)에 대한 범행\'을 일반양형인자 중 가중요소로 명시.</li>\n<li><strong>해당 범위</strong> — 통상 65세 이상 노인. 장애인복지법상 등록장애인. 임산부. 주취·질병으로 저항능력 떨어지는 사람.</li>\n<li><strong>형량 영향</strong> — 일반 폭행 벌금 50~300만원이 노약자 대상이면 벌금 200~700만원·집행유예·실형까지 상승하는 사례도.</li>\n<li><strong>피해 정도 가중</strong> — 동일 행위라도 노약자는 부상이 더 크게 나타날 수 있어 상해죄(형법 제257조)로 처벌될 수도.</li>\n<li><strong>감경 요소도 작동</strong> — 우발성·진지한 반성·합의·초범은 감경요소. 가중 + 감경 비교해 최종 양형.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가중처벌은 무조건 실형이 아니라 양형 비교에서 무거운 쪽으로 기운다는 의미. 합의·반성·초범 입증으로 감경 받는 사례도 적지 않습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 양형 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단·법무부 형사사법포털 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 선임 + 진술 전략 (입건 직후)</strong> — 첫 조사 전에 변호인 선임. 우발성·정당한 사정 + 본인 진술 일관성 점검. 경제적 어려움 시 국선변호인 신청 가능.</li>\n<li><strong>2단계 — 합의 시도 (조사 단계 ~ 송치 전)</strong> — 피해자 측에 사과 + 합의금 제안. 노약자는 보호자(자녀·배우자) 통해 접근. 합의금은 진단주수·치료비 + 정신적 위자료 가산.</li>\n<li><strong>3단계 — 형사조정 (검찰 단계, 무료)</strong> — 자체 합의 어려우면 검찰청 형사조정실 신청. 조정위원이 중재 → 약 1~2개월 내 합의 도달 사례 많음.</li>\n<li><strong>4단계 — 양형자료 준비 (기소 후)</strong> — 처벌불원서·합의서·반성문·기부금 영수증·치료비 영수증·가족 진술서·직장 상사 탄원서. 초범 입증 자료(범죄경력회보).</li>\n<li><strong>5단계 — 공판 + 양형 항변 (재판)</strong> — 변호인 통한 양형 항변. 우발성·초범·합의·진지한 반성 + 사회적 약자 범행이 아닌 특수 사정 (예: 본인이 먼저 도발받은 경우) 입증.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">초범 여부·우발성·합의 가능성에 따라 양형 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">합의·양형 항변에 아래 자료를 미리 정리해두면 절차가 유리해집니다.</strong></p>\n<ul>\n<li><strong>합의서·처벌불원서</strong> — 피해자(보호자) 자필서명·날인. 인감증명서 첨부 권장.</li>\n<li><strong>합의금 송금 영수증</strong> — 통장 사본 + 송금 내역.</li>\n<li><strong>반성문·진정서</strong> — 본인 자필. 사건 경위 + 잘못 인정 + 향후 다짐.</li>\n<li><strong>범죄경력회보 (초범 입증)</strong> — 경찰서·온라인 발급.</li>\n<li><strong>탄원서</strong> — 가족·직장 상사·이웃·종교인 진술. 평소 인격·재발 가능성 낮음.</li>\n<li><strong>기부금 영수증·봉사활동 증명</strong> — 사건 후 사회적 책임 이행 자료.</li>\n<li><strong>본인 사정 자료</strong> — 가족 부양·근무 상황·건강 상태 등 양형에 반영될 사정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 노약자 피해자에게 직접 접근하면 \'2차 가해\'로 비춰질 수 있습니다. 보호자(자녀·배우자) 또는 변호인을 통해 접근하는 게 안전합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 노약자 폭행 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"한 번 밀친 거라 가벼운 일"</strong> — 노약자에 대한 \'한 번 행위\'도 양형에서 가중. 또 균형 잃으면 큰 부상 위험이라 상해죄 전환 가능성.</li>\n<li><strong>"피해자가 먼저 욕설했다"</strong> — 사실이라면 양형 감경 사유 가능. 다만 도발이 인정돼도 폭행 자체는 위법. 정당방위 인정 어려움.</li>\n<li><strong>"고령이라 진단서가 과장됐다"</strong> — 노약자는 동일 행위에도 부상이 더 크게 나타날 수 있어 진단서 과장 항변은 받아들여지기 어려움. 별도 의학 감정 필요.</li>\n<li><strong>"인터넷에 사과글 쓰면 반성 인정"</strong> — 공개 사과는 오히려 \'전시용 사과\' 비판 + 피해자 모욕 우려. 변호인 통한 합의 + 자필 반성문이 안전.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 (국선변호인 신청 안내) / 검찰청 형사조정실 1301 / 범죄피해자지원센터 1577-1295 / 한국법무보호복지공단 1577-1009 / 경찰민원콜센터 182.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 폭력범죄 양형과 사회적 약자 가중',
        summary:
          '대법원 2025도14142 사건(대법원, 2026.01.15 선고)에서 법원은 폭력행위 등 처벌에 관한 법률상 단체·다중의 위력 행사·집단성 등 가중처벌 요건의 적용 범위를 정리하면서, 폭력범죄에서 피해자의 사회적 지위·연령·저항능력 등이 양형의 중요한 고려 요소가 된다는 점을 다시 확인했습니다. 노인·장애인 등 사회적 약자에 대한 범행은 양형기준상 가중요소로 작동하지만, 우발성·초범·합의·진지한 반성 등 감경요소가 충실히 입증되면 그에 상응한 감경 가능성도 함께 검토됩니다.',
        takeaway: '노약자 폭행이 혐의를 받고 있다면, 가중요소를 직시하면서도 합의·반성·초범 입증으로 감경 가능성을 확보하는 양형 전략이 핵심입니다. 변호인과 조기 합의 시도가 효과적인 사례가 많습니다.',
      },
    ],
    faq: [
      {
        question: '한 번 민 정도면 합의 잘 되지 않을까요?',
        answer:
          '<strong>피해자가 우발성·진지한 사과를 인정하면 합의 가능성 있습니다.</strong> 다만 노약자는 부상 위험이 커서 합의금 수준이 일반보다 높을 수 있어요. 합의금이 부담되면 형사조정·법률구조공단 활용.',
      },
      {
        question: '초범인데도 실형 나올 수 있나요?',
        answer:
          '<strong>가능성은 있으나 일반적이지 않습니다.</strong> 초범 + 합의 + 진지한 반성이면 벌금형·집행유예가 자주 선고. 다만 부상 정도가 크거나 흉기·다중 가담이 더해지면 실형 가능성 상승.',
      },
      {
        question: '피해자에게 직접 사과하러 가도 되나요?',
        answer:
          '<strong>피해자가 거절하면 2차 가해가 될 수 있어 신중해야 합니다.</strong> 보호자·변호인을 통해 접근. 피해자 측이 면담 의사를 표시하면 그때 직접 사과 검토.',
      },
      {
        question: '국선변호인 받을 수 있나요?',
        answer:
          '<strong>구속·기소되면 국선 가능. 불구속이라도 빈곤·고령·장애 등 사정이 있으면 신청 가능합니다.</strong> 132 법률구조공단으로 안내받을 수 있어요.',
      },
      {
        question: '합의 못 하면 끝까지 처벌받나요?',
        answer:
          '<strong>합의 없어도 처벌불원서 또는 일부 합의금 공탁으로 양형 유리하게 만들 수 있습니다.</strong> 끝까지 합의 안 되면 자필 반성문·탄원서·기부금 등으로 보완. 변호인 협의 권장.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 양형 기준 정리', href: '/guide/assault/assault-sentencing-criteria' },
      { label: '폭행 합의금 산정', href: '/guide/assault/assault-settlement-amount-guide' },
      { label: '폭행 형사조정 활용', href: '/guide/assault/assault-criminal-mediation' },
      { label: '폭행 초범 양형 감경', href: '/guide/assault/assault-first-offense-mitigation' },
      { label: '국선변호인 신청 절차', href: '/guide/assault/assault-public-defender-procedure' },
    ],
  },

  // ─── 7. child-support / direct-payment-third-party-employer (victim) ───
  {
    domain: 'child-support',
    slug: 'child-support-direct-payment-third-party-employer',
    keyword: '양육비 직접지급명령 사용자',
    questionKeyword: '전남편 회사에 양육비를 임금에서 바로 빼달라고 신청하려고 해요. 어떻게 진행하나요?',
    ctaKeyword: '양육비 직접지급명령 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양육비 직접지급명령 — 회사가 임금에서 공제 5단계 | 로앤가이드',
      description:
        '비양육자 회사에 양육비를 임금에서 직접 공제·지급하도록 하는 가사소송법 제63조의2 신청 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 후 양육비 심판 결정문이 있는데, 전남편이 매달 80만원씩 \'다음 달\'을 외치며 미루고 있어요. 친구가 \'회사에 직접 신청하면 임금에서 바로 빠진다\' 길래 알아보고 있는데, 신청 자격·기간·필요 서류가 막막합니다." 양육비 직접지급명령(가사소송법 제63조의2)은 비양육자가 정기 양육비를 미지급할 때 그 사람의 사용자(회사)에게 임금에서 직접 공제·송금하도록 법원이 명령하는 제도입니다. 2회 이상 미지급이 요건이고, 정기적 임금 수입이 있어야 가능해요. 양육비이행관리원 무료 지원도 활용 가능해 비용·복잡성 부담을 줄일 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 양육비 직접지급명령은 언제·어떻게 가능한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 가사소송법 제63조의2에 따라 \'정기 양육비를 2회 이상 미지급한 경우\'에 신청 가능합니다.</strong></p>\n<ul>\n<li><strong>법적 근거 (가사소송법 제63조의2)</strong> — 정기금 양육비 채권자(양육자)가 가정법원에 신청 → 비양육자 사용자(회사)에게 임금에서 정기 공제·지급 명령.</li>\n<li><strong>요건 1 — 집행권원</strong> — 양육비 심판·조정조서·이혼 판결문 등 강제집행 가능한 결정문.</li>\n<li><strong>요건 2 — 2회 이상 미지급</strong> — 정기 양육비를 2회 이상 미지급. 미지급 사실은 통장 거래내역으로 입증.</li>\n<li><strong>요건 3 — 정기적 임금 수입</strong> — 비양육자가 회사에 근무 중이고 매월 임금을 받는 상태. 자영업자는 다른 절차(이행명령·감치) 검토.</li>\n<li><strong>효과</strong> — 회사가 매월 임금에서 양육비 자동 공제 후 양육자 계좌로 송금. 회사가 명령 위반 시 회사가 양육비 직접 책임.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 2회 이상 미지급 + 정기 임금 수입 + 집행권원이 있으면 직접지급명령 신청 가능. 회사가 양육자 대신 양육비를 정기 송금합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 직접지급명령 5단계',
        content:
          '<p><strong style="color:#1e3a5f">양육비이행관리원·가정법원 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 양육비이행관리원 상담 (무료, 1644-6621)</strong> — 직접지급명령 신청 가능 여부 확인 + 무료 법률 지원 신청. 변호사 비용 부담 없음.</li>\n<li><strong>2단계 — 비양육자 회사·임금 정보 확인</strong> — 회사 명칭·소재지·인사부서 연락처. 신원 모르면 양육비이행관리원이 직권 조사 가능.</li>\n<li><strong>3단계 — 가정법원 직접지급명령 신청 (집행권원 + 미지급 입증 + 회사 정보)</strong> — 신청서 + 양육비 심판 결정문·조정조서 + 통장 거래내역(미지급 입증) + 회사 정보. 인지대 약 5,000원 + 송달료.</li>\n<li><strong>4단계 — 법원 결정 + 회사 송달 (약 1~2개월)</strong> — 법원이 회사에 결정문 송달. 회사는 결정 다음 달부터 임금에서 공제 시작.</li>\n<li><strong>5단계 — 공제·송금 모니터링 + 위반 시 후속</strong> — 매월 양육자 계좌로 정기 송금 확인. 회사가 명령 위반 시 회사 상대 책임 추궁. 비양육자가 퇴사하면 새 회사로 명령 변경 신청.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 산정기준표, AI로 계산해보기</strong></p>\n<p style="margin:0;font-size:0.95em">집행권원·미지급 입증·회사 정보에 따라 신청 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">직접지급명령 신청에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>양육비 집행권원 (심판 결정문·조정조서·이혼 판결문)</strong> — 정본 + 송달증명서·확정증명서.</li>\n<li><strong>통장 거래내역 (최근 12개월)</strong> — 양육비 미지급 입증. 정기 입금 누락 시점 표시.</li>\n<li><strong>비양육자 인적사항</strong> — 주민등록번호·주소·연락처. 양육비이행관리원이 직권 조사 가능.</li>\n<li><strong>비양육자 회사 정보</strong> — 회사명·소재지·인사부서. 모르면 양육비이행관리원에 조회 의뢰.</li>\n<li><strong>혼인관계증명서·가족관계증명서·자녀 기본증명서</strong> — 양육관계 입증.</li>\n<li><strong>본인 통장 사본</strong> — 송금 받을 계좌.</li>\n<li><strong>인지대 + 송달료 (약 5,000원 + 4~5만원)</strong> — 법원 납부.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 자영업자·일용직은 정기 임금이 아니라 직접지급명령 대상이 어려울 수 있어요. 그 경우 이행명령·감치명령·재산조회 트랙 검토.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 직접지급명령 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"비양육자가 명령 받자마자 퇴사한다"</strong> — 퇴사하면 명령 효력 끝. 새 회사 정보 확인 후 변경 신청. 잦은 퇴사·이직 패턴이면 이행명령 + 감치명령 트랙으로 전환.</li>\n<li><strong>"회사가 \'법원 명령 본 적 없다\'고 한다"</strong> — 법원이 회사에 직접 송달. 송달 영수증 보관. 회사가 명령 무시하면 회사가 양육비 직접 책임.</li>\n<li><strong>"전남편 회사가 어딘지 모른다"</strong> — 양육비이행관리원이 국세청·국민연금공단·건강보험공단 자료로 직권 조회 가능. 직접 조사 어려워도 신청 가능.</li>\n<li><strong>"임금이 너무 낮아서 양육비 다 못 뺀다"</strong> — 임금 50% + 최저생계비(월 약 185만원, 2026 기준)는 보호. 그 한도 내에서 가능한 만큼 공제. 부족분은 다른 재산에 강제집행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 양육비이행관리원 1644-6621 / 대한법률구조공단 132 / 가정법원 / 한부모가족지원센터 1644-6621 / 여성긴급전화 1366.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 이행 강제 절차',
        summary:
          '대법원 2025므517 사건(대법원, 2025.05.23 선고)에서 법원은 가사소송법 제64조의 이행명령은 가정법원이 판결·심판·조정조서 등으로 확정되어 있는 의무의 이행을 직권으로 촉구하는 가사소송법상 절차로서 의무의 존부를 확정하는 절차가 아니라 확정된 의무를 이행하는 절차임을 명확히 했습니다. 양육비 직접지급명령(제63조의2)도 동일한 흐름에서 \'이미 확정된 양육비 채권의 강제이행 수단\'이며, 집행권원과 2회 이상 미지급 사실이 있으면 별도 본안소송 없이 신청할 수 있어 양육자에게 빠른 회수 트랙을 제공합니다.',
        takeaway: '직접지급명령은 양육비 청구 본안과 별개의 강제이행 절차이며, 이미 확정된 결정문이 있으면 빠르게 신청해 회수 가능성을 높일 수 있는 제도입니다.',
      },
    ],
    faq: [
      {
        question: '양육비 1회 미지급으로도 신청 가능한가요?',
        answer:
          '<strong>2회 이상 미지급 요건이 충족돼야 합니다.</strong> 1회 미지급은 이행명령(가사소송법 제64조)부터 검토. 또는 미지급이 반복될 가능성 입증 시 다른 절차도 가능.',
      },
      {
        question: '비양육자가 자영업자면 어떻게 하나요?',
        answer:
          '<strong>직접지급명령은 정기 임금이 있어야 가능. 자영업자는 이행명령 → 감치명령 → 재산조회 → 강제집행 트랙입니다.</strong> 양육비이행관리원이 부동산·예금·차량 추적 가능.',
      },
      {
        question: '양육비이행관리원 무료 지원은 누구나 받을 수 있나요?',
        answer:
          '<strong>한부모가족·양육비 미지급 사실이 있으면 소득 무관 무료 지원.</strong> 변호사 비용·신청 대행·송달료까지 지원 가능. 1644-6621 상담.',
      },
      {
        question: '회사가 양육자 송금을 거부하면요?',
        answer:
          '<strong>회사가 직접지급명령 위반 시 회사가 양육비 직접 책임집니다.</strong> 회사 상대 손해배상 청구 + 가사소송법 위반으로 과태료 부과 가능.',
      },
      {
        question: '비양육자가 명령 받고 퇴사하면 어떻게 되나요?',
        answer:
          '<strong>퇴사 시 명령 효력 끝.</strong> 새 회사 확인 후 직접지급명령 변경 신청. 잦은 이직 패턴이면 감치명령(가사소송법 제68조) 트랙으로 전환 검토.',
      },
    ],
    cta: { text: '양육비 산정기준표, AI로 계산해보기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비이행관리원 추심 절차', href: '/guide/child-support/child-support-agency-collection-procedure' },
      { label: '양육비 이행명령 신청', href: '/guide/child-support/child-support-enforcement-order-apply' },
      { label: '양육비 감치명령 절차', href: '/guide/child-support/child-support-detention-order' },
      { label: '양육비 직접지급 vs 이행관리원 비교', href: '/guide/child-support/child-support-direct-vs-agency-comparison' },
      { label: '양육비 미지급 종합 대응', href: '/guide/child-support/child-support-non-payment-comprehensive' },
    ],
  },

  // ─── 8. child-support / modification-employer-income-change (neutral) ───
  {
    domain: 'child-support',
    slug: 'child-support-modification-employer-income-change',
    keyword: '양육비 감액 증액 수입 변동',
    questionKeyword: '실직했는데 양육비를 감액받을 수 있나요? 반대로 전남편 수입이 늘면 증액 청구 가능한가요?',
    ctaKeyword: '양육비 감액 증액 점검',
    type: 'Q&A형',
    perspective: 'neutral',
    meta: {
      title: '양육비 감액·증액 청구 — 수입 변동 시 5단계 | 로앤가이드',
      description:
        '비양육자 실직·이직·재혼·소득 증가 등 수입 변동 시 양육비 감액·증액 청구 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 후 매월 양육비 90만원을 보내고 있는데, 회사가 갑자기 폐업해서 실직했어요. 다른 사례에선 \'수입 변동되면 감액 청구할 수 있다\' 들었는데, 어떤 절차이고 얼마나 인정될지 막막합니다. 반대로 양육자 입장에선 전남편 사업이 잘되면 증액 청구도 가능한지 궁금해요." 양육비는 심판·조정으로 정해진 후에도 사정 변경(수입 증감·재혼·자녀 성장 등)이 있으면 양육비변경심판(가사소송법 제2조 마류 제3호)으로 감액·증액 청구 가능합니다. 단, 단순 \'경제적 어려움\' 주장만으로는 인정 어렵고, 객관적 증빙(소득 자료·실직 증빙·재혼 등)이 핵심이에요.</p>',
    sections: [
      {
        title: 'Q. 어떤 사유가 양육비 변경 사유로 인정되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. \'사정 변경 + 객관적 증빙\'이 양쪽에 모두 적용되는 핵심 기준입니다.</strong></p>\n<ul>\n<li><strong>비양육자 수입 감소 (감액 사유)</strong> — 실직·폐업·중대 질병으로 근로 불가·이직으로 임금 큰 폭 하락. 단, 자발적 퇴사·소득 은폐는 인정 어려움.</li>\n<li><strong>비양육자 수입 증가 (증액 사유)</strong> — 승진·이직·사업 성공·자영업 매출 증가. 양육자가 국세청 자료·재산 변동으로 입증.</li>\n<li><strong>양육자 수입 변동</strong> — 양육자가 실직·질병·재혼하면 양육비 부담 비율 재산정.</li>\n<li><strong>자녀 성장·교육비 증가</strong> — 자녀가 중·고등·대학 진학 시 교육비·생활비 증가는 증액 사유.</li>\n<li><strong>재혼 + 새 자녀 출생</strong> — 비양육자 재혼 + 새 자녀 양육 부담 시 일부 감액. 양육자 재혼은 양육비 영향 적음(자녀의 친권·양육 의무는 친부모).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 \'경제적 어려움\' 주장만으론 부족. 소득 자료·실직 증빙·재혼 자료 등 객관적 사정 변경 증거가 필요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 변경심판 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단·양육비이행관리원 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사정 변경 자료 정리 (1~2주)</strong> — 실직 증빙·소득 자료·세금 신고서·국민연금 가입 내역·자녀 학교·교육비 영수증.</li>\n<li><strong>2단계 — 상대방과 협의 시도 (1개월)</strong> — 협의 합의서로 양육비 변경 가능. 합의서를 가정법원 조정조서·공증으로 만들면 강제집행력.</li>\n<li><strong>3단계 — 가정법원 양육비변경심판 신청 (협의 결렬 시)</strong> — 신청서 + 사정 변경 증거 + 양육비 산정기준표 적용. 인지대 약 1만원 + 송달료.</li>\n<li><strong>4단계 — 심리·조정 (약 4~6개월)</strong> — 법원이 양쪽 소득·자녀 양육 사정 종합 검토. 가정법원 산정기준표·표준양육비 적용. 조정 단계에서 합의 도달 사례 많음.</li>\n<li><strong>5단계 — 변경 결정 + 후속 조치</strong> — 결정문에 따라 양육비 변경. 정기 송금 변경 또는 직접지급명령 함께 신청. 결정 후 다시 사정 변경 시 재심판 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 산정기준표, AI로 계산해보기</strong></p>\n<p style="margin:0;font-size:0.95em">소득 변동·재혼·자녀 성장 등 사정에 따라 변경 가능 범위가 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">변경심판에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>기존 양육비 결정문 (심판·조정조서·판결문)</strong> — 변경 대상 결정 확인.</li>\n<li><strong>본인 소득 자료</strong> — 종합소득세 신고서·근로소득원천징수영수증·국민연금 가입 내역·통장 거래내역.</li>\n<li><strong>실직·이직·폐업 증빙</strong> — 4대보험 상실확인서·이직확인서·사업자등록 폐업 신고서·해고 통보서.</li>\n<li><strong>상대방 수입 자료 (증액 신청 시)</strong> — 국세청 자료·재산 변동 등기·SNS·공시자료. 직접 조사 어려우면 법원 사실조회 신청.</li>\n<li><strong>자녀 양육 자료</strong> — 학교·학원비 영수증·생활비 명세·의료비.</li>\n<li><strong>재혼·자녀 출생 자료 (관련 시)</strong> — 혼인신고서·가족관계증명서·자녀 출생증명.</li>\n<li><strong>가족관계증명서·기본증명서</strong> — 친권·양육 관계 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 합의 없이 일방적으로 양육비를 줄여 송금하면 미지급으로 처리돼요. 변경 결정 전까지는 기존 양육비를 유지하는 게 원칙입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 양육비 변경 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"실직했으니 일방적으로 송금 줄여도 된다"</strong> — 변경 결정 전 일방 감액은 미지급. 결정문이 나올 때까지 기존 양육비 유지 + 변경심판 신청 동시 진행.</li>\n<li><strong>"자발적 퇴사·이직으로 임금 줄였다"</strong> — 자발적 사정으로 인한 수입 감소는 감액 사유로 인정 어려움. 비자발적 실직(폐업·해고·질병)이라야 명확.</li>\n<li><strong>"상대방 수입이 늘었다는데 입증 어렵다"</strong> — 법원 사실조회·국세청 자료 요청 가능. 변호사 통한 재산조회신청도 활용.</li>\n<li><strong>"재혼하면 양육비 안 내도 된다"</strong> — 본인 재혼은 양육비 의무 영향 없음. 재혼 후 새 자녀 양육 부담 시 일부 감액 가능 사례 있지만 \'면책\'은 아님.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 양육비이행관리원 1644-6621 / 대한법률구조공단 132 / 가정법원 / 한부모가족지원센터 1644-6621 / 여성긴급전화 1366.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 변경의 사정 변경 요건',
        summary:
          '대법원 2023므637 사건(대법원, 2024.10.08 선고)에서 법원은 자녀의 양육에 관한 부모의 책임은 친권 행사 여부와 관계없이 양 부모가 분담하는 것이 원칙이며, 어느 한쪽이 일방적으로 자녀를 양육하게 된 경우에도 양육비를 다른 일방에게 청구할 수 있다고 판시했습니다. 사정 변경에 따른 양육비 변경에서도 동일한 원칙이 적용되어, 양 부모의 소득·재산 상태·자녀의 양육 상황 등을 종합적으로 고려해 양육비를 다시 산정하게 되며, 일방의 일시적 어려움만으로는 변경 사유로 인정받기 어렵다는 점을 확인할 수 있습니다.',
        takeaway: '양육비 변경은 \'객관적 사정 변경\'이 핵심입니다. 실직·재혼 같은 사유는 객관적 증빙으로 뒷받침해야 하며, 변경 결정 전까지는 기존 양육비를 유지하는 것이 안전합니다.',
      },
    ],
    faq: [
      {
        question: '실직했는데 변경 결정까지 양육비를 내야 하나요?',
        answer:
          '<strong>원칙적으로 결정 전까지 기존 양육비 유지입니다.</strong> 일방 감액은 미지급. 다만 상대방과 협의로 임시 감액 합의서를 만들면 그 기간 분쟁 줄일 수 있어요.',
      },
      {
        question: '얼마나 소득이 줄어야 변경 인정될까요?',
        answer:
          '<strong>일률적 기준은 없고 종합 판단입니다.</strong> 통상 30~50% 이상 큰 폭 감소·실직 + 단기 회복 어려움 + 비자발적 사유면 인정 가능성 높음. 양육비 산정기준표 기준으로 새 양육비 산정.',
      },
      {
        question: '상대방 수입을 어떻게 알아내나요?',
        answer:
          '<strong>법원 사실조회·국세청 자료 요청·재산조회신청(민사집행법 제74조).</strong> 변호사·법률구조공단 활용하면 본인이 직접 조사 어려운 자료도 확보 가능.',
      },
      {
        question: '재혼하면 양육비 줄여달라고 할 수 있나요?',
        answer:
          '<strong>재혼 자체로 면책 아닙니다.</strong> 재혼 + 새 자녀 양육 부담 시 일부 감액 가능 사례 있지만, 친자녀 양육비 의무가 면제되지 않아요. 객관적 가계 부담 입증이 필요.',
      },
      {
        question: '자녀가 대학 진학하면 증액 가능한가요?',
        answer:
          '<strong>가능합니다. 교육비 증가는 증액 사유.</strong> 양육비 산정기준표는 일반적 기준이고, 사립대·기숙사·해외 유학 등 특수 사정은 추가 증액 검토 가능.',
      },
    ],
    cta: { text: '양육비 산정기준표, AI로 계산해보기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 산정기준표 적용', href: '/guide/child-support/child-support-calculation-table' },
      { label: '양육비 변경심판 절차', href: '/guide/child-support/child-support-modification-procedure' },
      { label: '양육비 미지급 종합 대응', href: '/guide/child-support/child-support-non-payment-comprehensive' },
      { label: '양육비 직접지급명령 신청', href: '/guide/child-support/child-support-direct-payment-order-procedure' },
      { label: '양육비이행관리원 무료 지원', href: '/guide/child-support/child-support-agency-collection-procedure' },
    ],
  },
];
