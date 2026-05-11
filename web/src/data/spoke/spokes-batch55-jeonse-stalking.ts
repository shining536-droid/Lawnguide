import { SpokePage } from '../spoke-pages';

// batch55 jeonse 2 + stalking 2 (총 4개)
//
// 고유 존재 이유:
// 1. jeonse / 임차권등기 후에도 보증금 미반환 — 등기 완료 후 후속 임차보증금반환소송 + 강제경매 트랙 정리 (주임법 제3조의3)
// 2. jeonse / 묵시갱신 후 중도해지 3개월 효력 — 임차인 해지 통보 후 3개월 효력 발생 + 보증금 반환 (주임법 제6조의2)
// 3. stalking / SNS DM 차단·재계정 반복 접근 — 차단 우회 + 부계정 반복 친구신청에 대한 잠정조치 트랙 (스토킹처벌법 제2조 다목·제9조)
// 4. stalking / 학원·교회 같은 공동체 안 스토킹 — 같은 공동체 분리 어려움 + 잠정조치 + 시설 협조 트랙

export const spokesBatch55JeonseStalking: SpokePage[] = [
  // ─── 1. jeonse / after-rental-rights-registration-still-unpaid (victim, 절차형) ───
  {
    domain: 'jeonse',
    slug: 'jeonse-after-rental-rights-registration-still-unpaid',
    keyword: '임차권등기 후 보증금 미반환',
    questionKeyword: '임차권등기명령은 받았는데 그 후로도 임대인이 보증금을 안 줘요. 다음에 뭘 해야 하나요?',
    ctaKeyword: '임차권등기 후 보증금 회수 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임차권등기 후 보증금 미반환 5단계 강제집행 | 로앤가이드',
      description:
        '임차권등기명령을 받고도 보증금을 못 받을 때 보증금반환소송 + 강제경매 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"3월 만기에 보증금 2억 못 받아서 임차권등기명령까지 받고 이사를 갔어요. 등기부에 임차권등기가 떴는데도 한 달이 넘게 임대인에게서 연락이 없습니다. \'등기까지 받았으니 알아서 줄 줄 알았는데, 이 다음엔 또 뭘 해야 하지?\' 막막하기만 합니다." 임차권등기는 \'대항력·우선변제권 보전\' 단계일 뿐 보증금을 자동으로 돌려주는 절차가 아닙니다. 본격 회수는 임차보증금반환소송 + 판결문 + 강제경매로 이어지는 별도 트랙이에요. 임대인 재산 상태에 따라 부동산 강제경매·예금 채권압류·다른 임대차 보증금 가압류 등을 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 임차권등기까지 했는데 왜 보증금이 안 들어오나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 임차권등기는 권리 보전 절차이지 강제 회수 절차가 아닙니다. 보증금 회수는 별도의 반환소송 + 강제집행 트랙으로 진행됩니다.</strong></p>\n<ul>\n<li><strong>임차권등기의 효력 (주임법 제3조의3)</strong> — 등기 완료 시점부터 이사·전입을 빼도 대항력·우선변제권 유지. 다만 \'임대인이 보증금을 줘야 할 의무\' 자체를 강제하지는 않습니다.</li>\n<li><strong>보증금반환소송 본안 트랙</strong> — 임차권등기 + 내용증명에도 미반환 시 임차보증금반환청구의 소 제기. 통상 6~12개월 + 지연이자(연 5%, 소제기 후 연 12%) 함께 청구.</li>\n<li><strong>판결 확정 후 강제집행</strong> — 임대인 부동산(임차한 그 집 포함) 강제경매, 예금·임대료·다른 임대차 보증금 채권압류, 차량 압류 등 검토.</li>\n<li><strong>HUG 가입자라면 보증이행 청구</strong> — HUG 보증보험 가입 임차인은 등기 + 이사 후 2년 이내 이행청구로 회수 가능. 미가입자는 위 본안 트랙 활용.</li>\n<li><strong>지급명령 vs 본안소송</strong> — 임대인이 다툴 가능성 낮으면 지급명령(약 1~2개월) 먼저 시도해볼 수 있고, 다툼이 예상되면 처음부터 본안소송이 효율적입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임차권등기는 \'권리를 보전한 출발선\'이지 \'결승선\'이 아닙니다. 등기 직후 곧바로 반환소송·지급명령으로 이어가는 것이 회수 기간을 줄이는 길입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 등기 후 보증금 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단·HUG 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 등기 완료 직후 최종 내용증명 (등기 + 1주)</strong> — 임차권등기 등기부 사본 첨부 + 반환 요구 + 미반환 시 소송·경매 진행 예고. 우체국 배달증명까지 받아두면 송달 다툼 차단.</li>\n<li><strong>2단계 — 지급명령 또는 보증금반환소송 제기 (1~2개월 내)</strong> — 임대인이 다툼 적으면 지급명령(인지대 절감, 약 1~2개월). 다툼 예상되면 본안소송. 청구 항목: 보증금 + 지연이자 + 등기비용 + 이사비.</li>\n<li><strong>3단계 — 임대인 재산조회 + 가압류 (소제기 직후)</strong> — 민사집행법 제74조 재산조회. 부동산·예금·임대차보증금·차량 가압류로 회수 자원 확보.</li>\n<li><strong>4단계 — 판결 확정 + 강제경매 신청 (판결 후 즉시)</strong> — 임차한 주택 자체를 강제경매(임차인이 우선변제권 보유). 다른 부동산 있으면 추가로 경매 또는 채권압류·전부명령.</li>\n<li><strong>5단계 — 배당요구 + 부족분 추가 회수 (배당 종기 내)</strong> — 경매 절차에서 배당요구. 부족분은 다른 재산에 추가 강제집행 + 형사 책임 검토(악의적 미반환 시 사기·강제집행면탈죄 가능성 있는 사례 보고).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임차권등기 이후 회수 트랙은 임대인 재산·HUG 가입 여부에 따라 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">반환소송·강제경매에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>임대차계약서 원본 + 확정일자 사본</strong> — 보증금·계약기간·우선변제권 입증 핵심.</li>\n<li><strong>임차권등기명령 결정문 + 등기부등본</strong> — 등기 완료 시점·대항력 보전 입증.</li>\n<li><strong>주민등록 초본 + 전입신고 이력</strong> — 점유·전입 시점 입증.</li>\n<li><strong>내용증명 + 배달증명 영수증 (만기 전후·등기 후)</strong> — 송달 이력·임대인 응답 정리.</li>\n<li><strong>임대인 인적사항 + 등기부등본 (그 집 + 다른 부동산)</strong> — 송달 + 가압류·강제경매 대상 자료.</li>\n<li><strong>이사비·임시 거주비·중도해지 위약금 영수증</strong> — 손해배상 청구 입증.</li>\n<li><strong>HUG 보증보험 증서·이행청구 접수증 (가입자만)</strong> — 보증이행 청구 시 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 임차권등기 결정문만 받고 \'알아서 들어오겠지\'라고 기다리면 시간만 흘러갑니다. 등기 완료 즉시 본안 트랙(지급명령·반환소송) 진입을 검토하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 임차권등기 후 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"등기 신청만 하고 점유를 빼면 끝"</strong> — 임차권등기 \'완료 시점\' 기준으로 새로운 대항력이 발생합니다. 신청만 한 상태에서 이사·전입을 먼저 빼면 대항력 공백이 생길 수 있어요.</li>\n<li><strong>"등기 받았으니 임대인이 알아서 줄 것"</strong> — 등기는 권리 보전일 뿐. 임대인이 응답 없으면 본안소송·강제경매까지 가야 회수 가능.</li>\n<li><strong>"소송하면 너무 오래 걸린다는데"</strong> — 다툼이 적으면 지급명령(1~2개월)으로 단축. 본안소송도 통상 6~12개월. 시간 흐를수록 임대인 재산 빼돌릴 위험만 커집니다.</li>\n<li><strong>"임대인이 \'곧 새 임차인 들어온다\'며 또 미룬다"</strong> — 새 임차인 모집은 임차인 의무가 아닙니다. 임차인은 만기일 + 등기 후에는 즉시 본안 트랙으로 가도 됨.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / HUG 1566-9009 / 임대차분쟁조정위원회 1670-7150 / 인터넷등기소 1544-0773 / 주택임대차상담센터 1644-7700.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 점유 상실 후 임차권등기의 대항력',
        summary:
          '대법원 2024다326398 사건(대법원, 2025.04.15 선고)에서 법원은 주택 임차인이 점유를 상실한 후에 임차권등기가 마쳐진 경우 소멸한 대항력이 소급해 회복되지 않고 등기 시점부터 동일성 없는 새로운 대항력이 발생한다고 판시했습니다. 임차권등기 신청만 하고 \'완료\' 전에 이사·전입을 먼저 빼면 그 사이 설정된 근저당 등 다른 권리가 임차권보다 앞서게 되어 경매 배당에서 후순위로 밀릴 위험이 있다는 시사점입니다.',
        takeaway: '임차권등기는 \'완료 시점\' 기준으로 권리가 새로 잡히므로, 등기 완료를 등기부등본으로 직접 확인한 뒤 이사·전입 이전을 진행하고, 곧바로 보증금반환소송·강제경매로 이어가세요.',
      },
    ],
    faq: [
      {
        question: '임차권등기 후 임대인이 새 세입자를 들이면 어떻게 되나요?',
        answer:
          '<strong>등기된 임차권은 새 임차인보다 앞섭니다.</strong> 등기부에 임차권등기 + 보증금 + 점유개시일 등이 공시되므로 새 임차인은 위험을 알고 들어오는 셈. 본인 우선변제권은 그대로 유지.',
      },
      {
        question: '소송 비용은 얼마나 들고 누가 부담하나요?',
        answer:
          '<strong>인지대·송달료 + 변호사 선임 시 수임료가 들지만, 승소 시 임대인이 소송비용을 일부 부담하도록 명령됩니다.</strong> 비용 부담이 어려우면 법률구조공단 132 통해 무료 소송지원을 검토할 수 있어요.',
      },
      {
        question: '강제경매 시 임차한 그 집을 매각하는 게 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 임대인 소유 부동산이면 임차인이 강제경매 신청 가능. 임차인은 우선변제권으로 배당받고, 부족분은 다른 재산에 추가 집행.',
      },
      {
        question: '지급명령과 본안소송 중 어느 쪽이 유리한가요?',
        answer:
          '<strong>임대인이 다툴 가능성에 따라 다릅니다.</strong> 다툼 적으면 지급명령(1~2개월, 인지대 절반) 효율적. 다툼 예상되면 본안소송. 지급명령 후 임대인이 이의하면 자동으로 본안 절차로 이행.',
      },
      {
        question: 'HUG 미가입자는 결국 소송밖에 없나요?',
        answer:
          '<strong>본안 트랙 + 강제집행이 기본 회수 수단입니다.</strong> 다만 임대차분쟁조정위원회(1670-7150) 조정 시도로 소송 전 합의를 검토할 수 있고, 임대인 악의적 미반환 시 형사 책임도 별도로 검토 가능.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '임차권등기명령 신청 절차', href: '/guide/jeonse/jeonse-deposit-not-returned-response' },
      { label: '전세보증금 반환 종합 가이드', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
      { label: '전세 만기 후 점유 계속 대응', href: '/guide/jeonse/jeonse-occupation-after-termination-deposit' },
      { label: '묵시적 갱신 후 임차인 해지 통지', href: '/guide/jeonse/jeonse-implicit-renewal-tenant-termination-notice' },
      { label: '다가구주택 + HUG 미가입 우선변제', href: '/guide/jeonse/jeonse-multifamily-priority-payment-no-hug' },
    ],
  },

  // ─── 2. jeonse / implicit-renewal-mid-termination-3months (victim, Q&A형) ───
  {
    domain: 'jeonse',
    slug: 'jeonse-implicit-renewal-mid-termination-3months',
    keyword: '묵시갱신 중도해지 3개월',
    questionKeyword: '묵시갱신 후에 사정이 생겨 해지 통보했어요. 3개월 지나야 보증금 받는다는데 맞나요?',
    ctaKeyword: '묵시갱신 중도해지 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '묵시갱신 후 중도해지 3개월 효력 5가지 정리 | 로앤가이드',
      description:
        '묵시적 갱신 후 임차인이 중도해지 통보했을 때 3개월 효력 발생 + 보증금 반환 5가지 쟁점을 지금 정리해보세요.',
    },
    intro:
      '<p>"전세 2년 끝났는데 별다른 협의 없이 그냥 살고 있다가 9월에 \'직장 이전 때문에 나가야 한다\'고 해지 통보를 했어요. 임대인은 \'12월부터 효력 발생, 그때 보증금 준다\'고 합니다. \'정말 3개월이나 기다려야 하나? 그 사이 차임은 누가 부담?\' 헷갈리는 부분이 한두 가지가 아니네요." 묵시적 갱신 + 임차인 중도해지는 주임법 제6조의2가 정한 \'통지 후 3개월 효력 발생\' 구조입니다. 효력일에 보증금 반환 의무도 함께 발생해요. 다만 차임·관리비·이사 시점·새 임차인 모집까지 정리할 포인트가 많아 미리 짚어두는 것이 안전합니다.</p>',
    sections: [
      {
        title: 'Q. 해지 통보 후 정확히 언제 보증금을 받나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 주임법 제6조의2에 따라 통지 도달 후 3개월이 지나면 계약이 해지되고, 그 시점이 보증금 반환 의무 이행기입니다.</strong></p>\n<ul>\n<li><strong>주임법 제6조의2 (묵시갱신 임차인 해지권)</strong> — 묵시적 갱신된 임대차에서 임차인은 언제든 해지 통보 가능. 효력은 임대인이 통지를 받은 날부터 3개월 경과 시 발생.</li>\n<li><strong>3개월 효력일 = 보증금 반환일</strong> — 효력 발생일에 임대차가 종료되며, 임대인의 보증금 반환 의무도 그날 이행기 도달.</li>\n<li><strong>3개월 동안 차임 부담</strong> — 효력 발생 전까지는 임대차가 유지되므로 차임·관리비 정상 납부.</li>\n<li><strong>도달주의 원칙</strong> — \'통지일\'이 아니라 \'임대인이 통지를 받은 날\'부터 기산. 우체국 내용증명 + 배달증명으로 도달일 확정해두는 것이 안전.</li>\n<li><strong>효력일 + 1일이라도 미반환 시</strong> — 곧바로 임차권등기명령 신청 + 지연이자(연 5%) 청구 가능. 점유 + 전입 유지 상태라면 대항력·우선변제권 유지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 묵시갱신 후 임차인 해지는 \'통보 후 3개월\'이 표준입니다. 이사 시점·차임 정산·임차권등기까지 동시에 챙기면 분쟁 여지를 크게 줄일 수 있어요.</blockquote>',
      },
      {
        title: 'Q. 새 임차인 못 구해도 3개월 후 무조건 받을 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 임차인의 \'새 임차인 알선 의무\'는 없습니다. 효력일 + 1일부터는 미반환에 따른 회수 트랙으로 진입할 수 있어요.</strong></p>\n<ul>\n<li><strong>새 임차인 알선은 협조 사항</strong> — 임차인이 새 임차인을 구해줄 법적 의무 없음. 임대인이 \'새 임차인 들어와야 보증금 준다\'고 주장해도 이는 임의 합의 영역.</li>\n<li><strong>효력일 미반환 = 채무불이행</strong> — 효력일 + 1일부터 임대인 미반환은 채무불이행. 지연이자(연 5%, 소제기 후 연 12%) 발생.</li>\n<li><strong>임차권등기명령 즉시 신청</strong> — 효력일 + 1일 즉시 임차권등기명령 신청 검토. 등기 후 이사 가도 대항력·우선변제권 유지.</li>\n<li><strong>HUG 가입자 보증이행 청구</strong> — HUG 가입 임차인은 효력일 도래 + 미반환 시 보증이행 청구로 회수 가능.</li>\n<li><strong>일부 반환·분할 합의 검토</strong> — 임대인이 자금 사정 호소 시 일부 반환 + 잔금 분할 합의 + 미지급분에 임차권등기 유지하는 방식도 협상 카드.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 효력일은 법으로 정해진 시점입니다. \'새 임차인 들어와야 한다\'는 임대인 주장은 협조 사항일 뿐 의무 사항이 아니에요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 묵시갱신 중도해지 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단·HUG 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해지 통지서 발송 (이사 희망일 + 약 3개월 전)</strong> — 우체국 내용증명 + 배달증명. 본문에 해지 사유·이사 희망일·보증금 반환 계좌 명시.</li>\n<li><strong>2단계 — 도달일 확인 + 효력일 계산 (통지 발송 직후)</strong> — 배달증명으로 임대인 수령일 확인. 그날 + 3개월 = 효력일 = 보증금 반환일.</li>\n<li><strong>3단계 — 효력일 직전 최종 확인 + 이사 준비 (효력일 ~ 1주 전)</strong> — 임대인에게 반환 일정·계좌 재확인 내용증명. 이삿짐·전입 일정 잡기.</li>\n<li><strong>4단계 — 효력일 미반환 시 즉시 임차권등기명령 (효력일 + 1일)</strong> — 등기명령 신청 후 약 2~4주 결정. 결정문 등기부 등재 후 이사·전입 이전 가능.</li>\n<li><strong>5단계 — 등기 후 보증금반환소송·HUG 이행청구 (등기 완료 + 1주)</strong> — HUG 가입자는 보증이행. 미가입자는 지급명령·본안소송 + 강제집행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 계약 종료 후 무엇부터 해야 하는지 AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">묵시갱신·해지 통보·3개월 효력일 계산은 사례마다 도달일이 달라 헷갈립니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 묵시갱신 중도해지 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"문자·카톡으로만 통보했다"</strong> — 도달일 다툼이 생길 수 있습니다. 우체국 내용증명 + 배달증명으로 도달일 확정해두는 것이 안전.</li>\n<li><strong>"3개월 안에 새 임차인 못 구해주면 보증금 못 받는다"</strong> — 임차인의 알선 의무는 없습니다. 효력일 + 1일부터 회수 트랙 진입 가능.</li>\n<li><strong>"3개월 차임을 내기 싫어 일찍 이사 가버렸다"</strong> — 효력일 전 이사·전입 이전 시 대항력·우선변제권 공백 위험. 임차권등기 결정 후 이사가 안전.</li>\n<li><strong>"임대인이 \'중개수수료 임차인이 부담해야 묵시갱신 해지 인정\'이라 한다"</strong> — 묵시갱신 임차인 해지는 법정 권리. 중개수수료 부담 조건은 별도 협상 영역으로, 법적 효력 부정 사유 아님.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / HUG 1566-9009 / 임대차분쟁조정위원회 1670-7150 / 주택임대차상담센터 1644-7700 / 우체국 내용증명 1588-1300.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차인의 갱신거절·해지 통지권',
        summary:
          '대법원 2023다307024 사건(대법원, 2024.06.27 선고)은 상가 임차인이 임대차기간 만료 1개월 전부터 만료일 사이에 갱신거절 통지를 한 경우 묵시적 갱신이 인정되지 않고 만료일에 종료한다고 판시했습니다. 같은 맥락에서 주택 묵시갱신 후 임차인의 해지 통지권(주임법 제6조의2)도 법으로 보장된 권리로 폭넓게 인정되며, 임대인의 \'새 임차인 알선 조건\' 같은 임의 주장으로 법정 효력일을 늦출 수 없다는 시사점을 검토할 수 있습니다.',
        takeaway: '묵시갱신 후 임차인 해지권은 법정 권리이고 효력일은 \'통지 도달일 + 3개월\'로 정해져 있습니다. 도달일을 배달증명으로 확정해두면 분쟁 여지를 크게 줄일 수 있어요.',
      },
    ],
    faq: [
      {
        question: '구두로 통보해도 효력 발생하나요?',
        answer:
          '<strong>이론상 가능하지만 도달일 다툼 위험이 큽니다.</strong> 우체국 내용증명 + 배달증명으로 도달일을 객관적으로 입증하는 것이 가장 안전.',
      },
      {
        question: '3개월 동안 차임은 정상적으로 내야 하나요?',
        answer:
          '<strong>네, 효력 발생 전까지는 임대차가 유지되므로 차임·관리비 정상 납부합니다.</strong> 일방 미납하면 임대인이 보증금에서 공제하거나 연체 분쟁으로 갈 수 있어요.',
      },
      {
        question: '임대인이 통지 수령을 거부하면요?',
        answer:
          '<strong>우체국 내용증명 + 배달증명으로 발송하면 \'발송 후 통상 도달 가능 시점\'까지 도달한 것으로 추정될 수 있습니다.</strong> 분쟁 시 법원이 도달 여부 판단. 정확한 사례별 판단은 법률구조공단 132 상담을 검토해보세요.',
      },
      {
        question: '효력일이 임대차계약 만료일과 겹치면 어느 쪽이 적용되나요?',
        answer:
          '<strong>임차인에게 유리한 시점이 적용되는 것이 일반적입니다.</strong> 다만 묵시갱신 상태에서 다시 만기가 다가오는 경우 등 사례마다 다르므로 개별 검토 필요.',
      },
      {
        question: 'HUG 가입자도 3개월 기다려야 하나요?',
        answer:
          '<strong>네, 3개월 효력일 도래 후에 보증이행 청구 가능합니다.</strong> 효력일 + 1일부터 미반환 상태가 성립하므로, 그 시점부터 보증이행 절차를 검토.',
      },
    ],
    cta: { text: '계약 종료 후 무엇부터 해야 하는지 AI로 확인하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '묵시적 갱신 후 임차인 해지 통지', href: '/guide/jeonse/jeonse-implicit-renewal-tenant-termination-notice' },
      { label: '전세보증금 반환 종합 가이드', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
      { label: '임차권등기 후 보증금 미반환 강제집행', href: '/guide/jeonse/jeonse-after-rental-rights-registration-still-unpaid' },
      { label: '전세 만기 후 점유 계속 대응', href: '/guide/jeonse/jeonse-occupation-after-termination-deposit' },
      { label: '임차권등기명령 신청 절차', href: '/guide/jeonse/jeonse-deposit-not-returned-response' },
    ],
  },

  // ─── 3. stalking / sns-dm-block-fake-account-repeat (victim, 절차형) ───
  {
    domain: 'stalking',
    slug: 'stalking-sns-dm-block-fake-account-repeat',
    keyword: 'SNS DM 차단 재계정 스토킹',
    questionKeyword: '인스타에서 차단했는데 새 계정으로 또 DM 보내고 친구 신청해요. 이것도 스토킹인가요?',
    ctaKeyword: 'SNS 차단 우회 스토킹 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'SNS 차단 우회 스토킹 5단계 잠정조치 | 로앤가이드',
      description:
        '차단·신고에도 새 계정으로 반복 접근하는 SNS 스토킹 대응. 증거 보전 + 잠정조치 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"한 달 전 헤어진 사람이 자꾸 연락해서 인스타·카카오 다 차단했어요. 그런데 며칠 뒤부터 처음 보는 부계정으로 친구 신청이 오고, 전혀 모르는 번호로 카카오 친구 추천에 자꾸 떠요. 차단해도 또 다른 계정. \'이걸 스토킹이라고 신고할 수 있나? 내가 너무 예민한 건가?\' 혼란스럽기만 합니다." 차단·삭제·신고에도 새 계정·새 번호로 반복 접근하는 행위는 스토킹처벌법 제2조 다목·라목의 \'정보통신망을 이용한 반복 도달\'에 해당될 수 있어요. 핵심은 \'증거를 시간순으로 보전\' + \'경찰 신고 후 잠정조치(접근금지·전기통신 이용 제한)\'를 함께 검토하는 것입니다.</p>',
    sections: [
      {
        title: 'Q. SNS 차단 우회·재계정 접근도 스토킹이 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 객관적·일반적으로 볼 때 상대방에게 불안감·공포심을 일으키기에 충분한 정도면 스토킹행위에 해당될 수 있습니다.</strong></p>\n<ul>\n<li><strong>스토킹처벌법 제2조 다목·라목</strong> — 정보통신망을 이용한 글·말·음향·영상 등 반복 도달 + 접근·따라다님 등이 \'지속·반복\'되면 스토킹범죄.</li>\n<li><strong>차단했는데 우회 = \'반대 의사 명백한 상황에서의 반복 접근\'</strong> — 피해자가 차단으로 거절 의사를 표시했음에도 우회 접근은 불안감 유발 정황으로 인정되는 사례가 많음.</li>\n<li><strong>현실적 인식 없어도 스토킹 인정 가능</strong> — 대법원은 객관적·일반적으로 불안감을 일으키기 충분하면 피해자가 그때그때 인식하지 않았어도 스토킹행위 성립 가능하다고 판시.</li>\n<li><strong>잠정조치 (제9조)</strong> — 경찰·검사 신청 + 법원 결정으로 접근금지·전기통신 이용 제한·유치장 유치 등 가능. 위반 시 형사처벌.</li>\n<li><strong>특수스토킹범죄</strong> — 흉기·위험한 물건 휴대 시 가중처벌 + 반의사불벌 적용 안 됨. 신변 위협 정황 있으면 즉시 112.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'차단했는데 또 한다\'는 자체가 핵심 증거입니다. 시간순으로 캡처·메타데이터를 모아두면 잠정조치 신청·고소에서 결정적 자료가 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — SNS 차단 우회 스토킹 5단계',
        content:
          '<p><strong style="color:#1e3a5f">경찰청·여성긴급전화 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보전 (즉시·24시간 이내)</strong> — 모든 DM·친구신청·알림 캡처(시간·발신 ID 보이게). 휴대폰 화면녹화 + 클라우드 백업. 차단·신고 이력도 별도 저장.</li>\n<li><strong>2단계 — 거부 의사 1회 명확 통지 (선택, 대화방 캡처 후)</strong> — \"더 이상 연락하지 마세요\" 1회만 텍스트로 명확하게 보내고 대화 캡처. 이후 응답 금지(반복 응답하면 \'합의된 연락\'으로 오해될 수 있음).</li>\n<li><strong>3단계 — 경찰 신고 + 잠정조치 신청 (1~3일 내)</strong> — 가까운 경찰서 여성·청소년수사팀(여청수사팀) 또는 112. 잠정조치 1~4호(서면경고·접근금지·전기통신 이용 제한·유치장 유치) 신청 가능.</li>\n<li><strong>4단계 — 법원 잠정조치 결정 (신청 후 약 며칠~수주)</strong> — 결정 후 위반 시 형사처벌. 위반 행위는 다시 즉시 112로 신고.</li>\n<li><strong>5단계 — 본안 형사절차 + 신변보호 (조사·송치)</strong> — 본안 수사 진행 동시에 스마트워치(112 긴급호출), 안전드림(women.go.kr), 1366 여성긴급전화로 단기 보호도 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">차단·재계정·DM 패턴은 사례마다 증거 정리법이 달라 막막합니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">신고·잠정조치 신청에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>모든 SNS DM·친구신청 캡처 (시간·발신 ID 보이게)</strong> — 시간순 정렬 + 메모(\'본계정 차단 후 부계정 1\' 등) 추가.</li>\n<li><strong>차단·신고 이력 캡처</strong> — 인스타·카카오 등 \'차단됨\'·\'신고 접수\' 상태 캡처.</li>\n<li><strong>피의자 인적사항 (알 수 있는 범위)</strong> — 본명·실거주지·소속·전화번호. 모르면 알려진 닉네임·계정 ID라도.</li>\n<li><strong>피해자 본인 신분증·가족관계 (필요 시)</strong> — 미성년자·법정대리인 동행 시.</li>\n<li><strong>관계 입증 자료 (선택)</strong> — 과거 연인·동료 등이라면 사진·계약서·근로계약서 등.</li>\n<li><strong>의료기록 (불안·불면 진단 시)</strong> — 정신과·심리상담 진단서·소견서. 양형·잠정조치 필요성 입증 자료.</li>\n<li><strong>112 신고 이력·진술서 초안</strong> — 시점·장소·행위 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 차단했다고 캡처를 안 남기면 나중에 입증이 어려워집니다. 차단 \'직전\' 화면도 반드시 캡처 + 시간 메타 보존하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 SNS 차단·재계정 스토킹 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"부계정이라 누군지 모른다, 신고해도 의미 없을 것"</strong> — 경찰은 SNS 운영사·통신사 협조로 IP·기기정보 추적 가능. 신원 미확인 단계라도 신고를 검토하세요.</li>\n<li><strong>"답장하면 합의된 연락처럼 보일까 봐 무서워서 가만 있었다"</strong> — 무대응도 OK이지만, 단 1회 \"연락하지 마세요\" 텍스트는 거부 의사 입증에 도움. 그 이후 응답은 자제.</li>\n<li><strong>"차단·삭제만 반복했더니 캡처가 없다"</strong> — 신고 단계에서 가장 큰 약점. 차단 전 반드시 캡처 + 메타데이터 백업하는 습관이 중요.</li>\n<li><strong>"잠정조치 받아도 또 우회할 텐데"</strong> — 잠정조치 위반은 별도 형사처벌 + 가중사유. 위반 시 즉시 112로 신고하면 처벌 강도가 누적됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 경찰 112 / 여성긴급전화 1366 / 디지털성범죄피해자지원센터(d4u.stop.or.kr) / 대한법률구조공단 132 / 안전드림(112+긴급호출 등록).</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망 이용 반복 도달과 스토킹행위',
        summary:
          '대법원 2022도12037 사건(대법원, 2023.05.18 선고)에서 법원은 전화를 걸어 휴대전화에 벨소리·부재중 전화 문구 등이 표시되도록 하여 상대방에게 불안감·공포심을 일으키는 행위는 실제 통화 여부와 무관하게 스토킹처벌법 제2조 제1호 다목 스토킹행위에 해당한다고 판시했습니다. SNS DM·친구신청 알림이 차단 후에도 부계정으로 반복 도달하는 형태도 같은 법리로 \'정보통신망을 이용한 반복 도달\'로 평가될 수 있다는 시사점을 검토할 수 있습니다.',
        takeaway: 'SNS 알림·DM·친구신청도 \'반복 도달\'로 스토킹행위에 해당될 수 있습니다. 차단 전후 캡처를 시간순으로 보존해두면 잠정조치·고소에서 결정적 자료가 됩니다.',
      },
    ],
    faq: [
      {
        question: '경찰에 신고하면 가해자한테 알려지나요?',
        answer:
          '<strong>일반적으로 가해자 조사 단계에서 신고 사실이 알려지지만, 신변 위협이 우려되면 신변보호조치(스마트워치·신고이력 비공개 등) 신청 가능합니다.</strong> 여청수사팀에 보호 필요성을 함께 알리세요.',
      },
      {
        question: '잠정조치는 며칠 안에 결정되나요?',
        answer:
          '<strong>긴급한 경우 경찰의 응급조치(서면경고·100m 접근금지 등) 후 법원 잠정조치 결정으로 이어집니다.</strong> 사건별·법원별로 며칠~수주 차이가 있으니 여청수사팀에 진행 상황 문의를 검토.',
      },
      {
        question: '계정 IP만으로 정말 신원이 추적되나요?',
        answer:
          '<strong>경찰의 통신자료·압수수색 영장 등 적법 절차로 추적이 진행됩니다.</strong> 모든 사건이 100% 신원 확인되는 것은 아니지만, 시간·횟수가 누적될수록 추적 가능성이 높아지는 사례가 많아요.',
      },
      {
        question: '미성년자도 신고할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 본인 신고도 받지만 보호자 동행 또는 학교·1366·청소년상담1388 통한 신고도 가능. 미성년자 보호 절차가 추가로 적용됩니다.',
      },
      {
        question: '잠정조치 위반 시 어떻게 해야 하나요?',
        answer:
          '<strong>즉시 112 + 캡처·녹음 등 위반 사실 증거 보전.</strong> 잠정조치 위반은 별도 형사처벌 사유이며 본안 사건의 가중요소가 됩니다.',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 고소 대응 종합 가이드', href: '/guide/stalking/stalking-comprehensive-guide' },
      { label: '직장 동료 호감 거절 후 추적 대응', href: '/guide/stalking/stalking-coworker-rejected-pursuit-procedure' },
      { label: '옛 배우자 양육권 빌미 접근', href: '/guide/stalking/stalking-ex-spouse-custody-dispute-pretext' },
      { label: '같은 공동체 내 스토킹 분리 트랙', href: '/guide/stalking/stalking-shared-community-school-church' },
      { label: '스토킹 잠정조치 신청 절차', href: '/guide/stalking/stalking-emergency-protection-order-apply' },
    ],
  },

  // ─── 4. stalking / shared-community-school-church (victim, Q&A형) ───
  {
    domain: 'stalking',
    slug: 'stalking-shared-community-school-church',
    keyword: '학원 교회 공동체 스토킹',
    questionKeyword: '같은 학원·교회를 다니는 사람이 스토킹해요. 매주 마주쳐야 하는데 어떻게 분리하죠?',
    ctaKeyword: '같은 공동체 스토킹 분리 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '같은 공동체 내 스토킹 5가지 분리 트랙 | 로앤가이드',
      description:
        '학원·교회·동호회 등 같은 공동체 안에서 발생한 스토킹의 분리 트랙 5가지(잠정조치·시설 협조·일정 분리)를 지금 정리해보세요.',
    },
    intro:
      '<p>"같은 미술학원에 다니는 사람이 두 달 전부터 \'우연인 척\' 매번 같은 시간에 와서 옆자리에 앉아요. 휴게실까지 따라오고, 카톡으로 \'오늘 못 봐서 아쉽다\'는 메시지도 옵니다. 학원 옮기긴 싫고, 그렇다고 매주 마주치는 것도 너무 힘들어요. \'학원에 알려야 하나? 경찰까지 갈 일인가?\' 매일 고민입니다." 학원·교회·동호회·헬스장처럼 \'정기적으로 같은 공간을 공유\'하는 공동체 스토킹은 일반 스토킹보다 분리가 어렵습니다. 그래서 잠정조치(접근금지) + 시설 측 분리 협조 + 일정 분리 + 공동체 내부 신고를 동시에 검토하는 것이 효과적입니다.</p>',
    sections: [
      {
        title: 'Q. 같은 공동체 안에서도 접근금지 잠정조치가 가능한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 가능합니다. 다만 \'같은 공간을 동시에 사용해야 하는 사정\'을 함께 정리해 신청하는 것이 효과적입니다.</strong></p>\n<ul>\n<li><strong>스토킹처벌법 제9조 잠정조치</strong> — 100m 이내 접근금지·전기통신 이용 제한이 일반적. 같은 공동체라도 시설·시간 분리로 접근금지 운용 가능.</li>\n<li><strong>스토킹행위 인정 요건 (제2조)</strong> — \'우연인 척\' 매번 같은 시간·자리 + 메시지·따라다님이 누적되면 \'지속·반복적 접근\'으로 평가될 수 있음.</li>\n<li><strong>시설 측 협조 의무는 법적 강제 아님</strong> — 다만 학원·교회·헬스장 등이 자체 윤리규정·이용약관에 따라 수업·예배 시간 분리, 공간 분리 협조 사례 다수.</li>\n<li><strong>학교·교회는 특수 보호 트랙</strong> — 학교는 학교폭력예방법, 교회·종교시설은 자체 권징·고충 절차 활용 가능.</li>\n<li><strong>일정·동선 분리 + 동행</strong> — 잠정조치 진행 중에도 시간대 변경·등하원 동행·CCTV 활용 등 단기 방어선을 함께 구축.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공동체 내 스토킹은 \'법적 트랙(잠정조치) + 행정 트랙(시설 협조) + 일상 트랙(시간·동선 분리)\'을 동시에 짜는 것이 가장 안정적입니다.</blockquote>',
      },
      {
        title: 'Q. 학원·교회에 알리면 오히려 분쟁이 더 커지지 않을까요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 정식 고충처리 절차로 가면 익명·비공개 진행이 일반적이라 사적 갈등으로 번질 위험을 줄일 수 있습니다.</strong></p>\n<ul>\n<li><strong>학원·헬스장 — 운영자·점주 신고</strong> — 공식 민원 라인 활용. 가해자 회원 등록 정보·이용 시간을 시설 측이 파악하고 분리 운영 검토.</li>\n<li><strong>교회·종교시설 — 담당 목회자·교구·여성위원회</strong> — 비공식이라도 공식 채널을 거치면 권징·자체조사 가능. 일부 교단은 성폭력·괴롭힘 대응 매뉴얼 별도 운영.</li>\n<li><strong>학교 — 학교폭력 신고함·상담교사·학교폭력대책심의위원회</strong> — 미성년 학생이라면 학교폭력예방법 트랙도 동시 검토.</li>\n<li><strong>회원·신도 신분 비공개 권리</strong> — 시설 측이 가해자에게 \'누가 신고했는지\' 알리면 보복 위험. 신고 시 비공개·보호 의무 명시 요청.</li>\n<li><strong>경찰 신고는 별도 트랙</strong> — 시설 협조와 무관하게 경찰 신고·잠정조치 진행 가능. 두 트랙은 서로 보완적.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 시설 측 협조는 \'분리\'에 효과가 크고, 경찰 트랙은 \'반복 차단\'에 효과가 큽니다. 둘을 동시에 가는 것이 빠른 해결로 이어집니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 공동체 내 스토킹 5가지 분리 트랙',
        content:
          '<p><strong style="color:#1e3a5f">경찰청·여성긴급전화 공식 절차를 참고하면 아래 트랙을 동시에 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1트랙 — 증거 보전 (즉시)</strong> — 메시지 캡처 + 공동체 내 우연 마주침 시점·장소·증인 메모. 가능하면 CCTV 보존 요청(시설 측에 서면).</li>\n<li><strong>2트랙 — 시설 측 분리 요청 (1주 내)</strong> — 학원장·교회 담당자에게 서면(이메일·문자)으로 분리 요청. 수업·예배 시간·자리 변경, 가해자 이용 제한 등.</li>\n<li><strong>3트랙 — 경찰 신고 + 잠정조치 (1~3일 내, 위협 시 즉시 112)</strong> — 여청수사팀에 신고 + 100m 접근금지·전기통신 이용 제한 신청. 같은 공동체라도 시간·장소 단위로 운용 가능.</li>\n<li><strong>4트랙 — 법원 잠정조치 결정 후 위반 시 즉시 112</strong> — 결정 후 위반 행위 1회라도 발생하면 즉시 신고. 가중사유로 작용.</li>\n<li><strong>5트랙 — 일상 동선·정신건강 케어 (병행)</strong> — 등하원 동행·시간대 변경. 1366 여성긴급전화·정신과 진단서로 신변보호·양형 자료 준비.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 접근금지·처벌 가능성, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">학원·교회 같은 공동체 스토킹은 시설 협조·잠정조치 등 트랙 조합이 사례마다 다릅니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 같은 공동체 스토킹 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"같은 시설 다닌다는 이유로 \'우연\'으로 봐줘야 하는 거 아닌가"</strong> — 우연을 가장한 반복 마주침·메시지가 누적되면 \'지속·반복 접근\'으로 평가될 수 있습니다. 단순 우연과 의도된 접근은 시간·장소·메시지 패턴으로 구분.</li>\n<li><strong>"학원에 알리면 내가 나가야 한다는 분위기"</strong> — 시설 측이 피해자에게 책임을 전가하는 태도면 \'2차 피해\'가 됩니다. 시설 본부·교단 본부 또는 한국소비자원·교육청 민원도 검토.</li>\n<li><strong>"교회 안에서 자체 해결하라고 한다"</strong> — 자체 절차와 별도로 경찰 신고는 가능. 자체 절차가 신변 보호를 보장하지 않으면 곧장 경찰 트랙으로.</li>\n<li><strong>"잠정조치 받아도 같은 시설 다니면 100m 안 떨어진다"</strong> — 시간 분리·구역 분리로 운용 가능. 시설 측 협조와 결합하면 실효성 확보.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 경찰 112 / 여성긴급전화 1366 / 청소년상담 1388 / 대한법률구조공단 132 / 안전드림(112 긴급호출 등록).</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 객관적·일반적 평가에 따른 스토킹행위 성립',
        summary:
          '대법원 2025도36 사건(대법원, 2025.10.30 선고)에서 법원은 스토킹처벌법 제2조 제1호 각 목의 행위가 객관적·일반적으로 볼 때 상대방에게 불안감·공포심을 일으키기에 충분한 정도면, 피해자가 그 행위를 현실적으로 인식했는지 또는 실제로 불안감을 느꼈는지와 관계없이 \'스토킹행위\'에 해당한다고 판시했습니다. 학원·교회 같은 공동체 안에서 \'우연\'을 가장한 반복 마주침·메시지도 객관적으로 평가했을 때 불안감을 일으키기 충분하면 스토킹행위로 인정될 여지가 있다는 시사점입니다.',
        takeaway: '같은 공동체 안의 \'우연인 척 반복\'도 객관적 패턴이 누적되면 스토킹으로 평가될 수 있습니다. 시간·장소·메시지를 패턴화해 정리해두면 잠정조치·고소에서 결정적 자료가 됩니다.',
      },
    ],
    faq: [
      {
        question: '같은 공동체에서 100m 접근금지를 받으면 가해자가 시설을 못 오나요?',
        answer:
          '<strong>법원·경찰의 운용에 따라 시간 분리·구역 분리로 조정됩니다.</strong> 같은 시설을 다 못 오게 하기보다 피해자 이용 시간대·구역에 접근 못 하게 하는 사례가 많아요.',
      },
      {
        question: '학원·교회가 분리 요청을 거부하면요?',
        answer:
          '<strong>본사·교단·교육청·소비자원에 정식 민원 검토.</strong> 시설 측 협조 거부가 2차 피해로 이어진 경우 손해배상도 검토 가능. 정확한 사례별 판단은 법률구조공단 132 상담을 검토.',
      },
      {
        question: '회원·신도 정보를 가해자에게 알려주면 어떻게 되나요?',
        answer:
          '<strong>개인정보 보호법 위반 가능성이 있습니다.</strong> 시설 측이 동의 없이 신고자 정보를 가해자에게 알려준 경우 별도로 책임 추궁 검토. 1차 신고 시점부터 \'비공개 요청\'을 명시해두는 것이 안전.',
      },
      {
        question: '미성년자가 학원에서 당하면 어떻게 시작하나요?',
        answer:
          '<strong>보호자 동행 + 학원 본부·관할 경찰서 여청수사팀 신고가 일반적입니다.</strong> 학교 친구가 가해자라면 학교폭력 트랙도 동시 검토. 청소년상담1388에서 안내받을 수 있어요.',
      },
      {
        question: '시설을 옮기는 게 빠르지 않나요?',
        answer:
          '<strong>이전이 답이 되는 사례도 있지만, 가해자가 옮긴 시설로 따라가는 사례도 보고됩니다.</strong> 이전과 별개로 잠정조치·증거 보전을 진행해두면 추적·재발에 대비할 수 있어요.',
      },
    ],
    cta: { text: '접근금지·처벌 가능성, AI로 확인하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 고소 대응 종합 가이드', href: '/guide/stalking/stalking-comprehensive-guide' },
      { label: 'SNS 차단 우회 스토킹 5단계', href: '/guide/stalking/stalking-sns-dm-block-fake-account-repeat' },
      { label: '직장 동료 호감 거절 후 추적', href: '/guide/stalking/stalking-coworker-rejected-pursuit-procedure' },
      { label: '옛 배우자 양육권 빌미 접근', href: '/guide/stalking/stalking-ex-spouse-custody-dispute-pretext' },
      { label: '스토킹 잠정조치 신청 절차', href: '/guide/stalking/stalking-emergency-protection-order-apply' },
    ],
  },
];
