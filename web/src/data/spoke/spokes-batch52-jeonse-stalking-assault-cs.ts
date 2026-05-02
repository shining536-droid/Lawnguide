import { SpokePage } from '../spoke-pages';

// batch52 jeonse 2 + stalking 2 + assault 2 + child-support 2 (총 8개)
//
// 고유 존재 이유:
// 1. jeonse / 임대인 사망 시 보증금 반환 — 임차인이 임대인 사망 통지를 받고 상속인 누가 인수할지·보증금 반환 청구 누구한테 할지 막막한 상황
// 2. jeonse / 다중 채권자 보증금 우선순위 — 경매 직전 같은 다세대주택에 다수 임차인이 있어 자기 보증금 회수 가능 여부가 불확실한 상황
// 3. stalking / 직장 동료 반복 접근 (victim) — 회사 안에서 동료의 반복 접근·메시지·SNS 추적으로 사내 신고와 형사 트랙을 같이 정리하려는 피해자
// 4. stalking / 잠정조치 항고 절차 (accused) — 잠정조치(접근금지·구금) 결정에 항고하려는 행위자가 절차를 정확히 준수하기 위한 페이지
// 5. assault / 단체 폭행 가담 책임 (accused) — 다수가 한 사람을 때린 사건에서 본인이 직접 가격하지 않았어도 공동정범·방조 책임이 문제되는 상황
// 6. assault / 정당방위 인정 절차 (victim) — 먼저 공격받아 반격했다가 오히려 입건된 사람이 정당방위·과잉방위 항변 자료를 정리하는 페이지
// 7. child-support / 양육비이행관리원 추심 한계 — 추심을 신청했지만 회수가 잘 안 될 때 다음 단계(감치·운전면허 정지·신상공개·민사) 정리
// 8. child-support / 비양육자 해외 도주 — 비양육자가 해외 거주·출국 후 잠적했을 때 외국 송달·재산 추적·한부모가족 지원 연계 트랙

export const spokesBatch52JeonseStalkingAssaultCS: SpokePage[] = [
  // ─── 1. jeonse / landlord-death-deposit-return ───
  {
    domain: 'jeonse',
    slug: 'jeonse-landlord-death-deposit-return',
    keyword: '임대인 사망 보증금 반환',
    questionKeyword: '집주인이 갑자기 돌아가셨다는 연락을 받았어요. 보증금은 누구에게 청구해야 하나요?',
    ctaKeyword: '임대인 사망 보증금 청구 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임대인 사망 보증금 반환 절차 — 상속인 청구 5단계 정리 | 로앤가이드',
      description:
        '집주인이 사망했다면 상속인 확정·임대차 계약 승계·보증금 청구·한정승인 대응까지 5단계 절차를 지금 확인하세요. 상속포기 가능성도 함께 정리합니다.',
    },
    intro:
      '<p>"부동산 사장님께 &lsquo;집주인이 지난주에 돌아가셨다&rsquo;는 연락을 받고 머리가 하얘졌어요. 보증금 2억은 누구한테 받아야 하는지, 계약은 그대로 유지되는지, 상속인이 거부하면 어떻게 해야 하는지 막막합니다." 임대차계약 도중 임대인이 사망하면 임대차는 상속인에게 승계되지만, 상속인이 한정승인이나 상속포기를 하면 회수 트랙이 달라집니다. 임차권등기명령·HUG 보증·법원 가족관계등록 조회를 함께 검토해볼 수 있어요. 사망 인지 후 1개월이 상속인 의사 확인 시기라 빠른 정리가 도움이 됩니다.</p>',
    sections: [
      {
        title: 'Q. 임대인이 사망하면 임대차 계약은 어떻게 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 임대차계약은 자동으로 상속인에게 승계되며, 임차인은 종전 계약 그대로 거주할 수 있습니다.</strong></p>\n<ul>\n<li><strong>계약 자동 승계 (민법 제1005조)</strong> — 임대차의 임대인 지위는 상속재산이라 상속인에게 포괄 승계. 보증금 반환 의무·차임 청구권 모두 상속인에게 이전됩니다.</li>\n<li><strong>거주는 그대로</strong> — 임대인 사망을 이유로 임차인이 쫓겨날 수 없고, 계약기간·보증금·차임 조건도 동일하게 유지됩니다.</li>\n<li><strong>차임 지급 대상</strong> — 상속인 확정 전에는 공탁(민법 제487조) 또는 상속재산관리인 계좌로 송금 검토.</li>\n<li><strong>보증금 반환 의무자</strong> — 계약기간 종료 시 상속인 전원이 상속분에 따라 분담 변제. 단순승인 시 본인 재산까지 책임.</li>\n<li><strong>상속포기·한정승인 시</strong> — 상속인이 포기·한정승인하면 보증금 회수가 어려워질 수 있어, 상속재산 범위 조사 필수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임대차계약은 사망으로 종료되지 않고 상속인에게 승계됩니다. 임차인은 종전 계약 그대로 거주 + 보증금 청구 가능합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보증금 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단·HUG 공식 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사망 사실 확인 + 상속인 조사 (사망 인지 후 1주)</strong> — 사망진단서·가족관계증명서로 상속인 확인. 본인이 직접 발급 어려우면 변호사·법무사 통해 상속인 조회 신청.</li>\n<li><strong>2단계 — 상속인에게 임대차 통지 + 의사 확인 (사망 후 1개월)</strong> — 내용증명으로 본인 임차인 지위·잔여 계약기간·보증금액 통지. 상속포기·한정승인 의사 확인. 가정법원 신고는 사망 후 3개월 내(민법 제1019조).</li>\n<li><strong>3단계 — 임차권등기명령 신청 (계약 종료 직전)</strong> — 계약 종료 후 상속인이 보증금을 안 주면 즉시 임차권등기명령(주임법 제3조의3) 신청. 이사 가도 대항력·우선변제권 유지.</li>\n<li><strong>4단계 — HUG 보증이행 청구 (전세금 보증보험 가입 시)</strong> — HUG 전세보증금 가입자는 임대인 사망과 무관하게 보증이행 청구. 청구 후 약 2개월 내 지급.</li>\n<li><strong>5단계 — 보증금 반환소송 + 강제집행 (반환 거부 시)</strong> — 상속인 상대 보증금 반환소송. 상속포기·한정승인 인정 시 상속재산 범위 내에서만 회수.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">상속인 의사·HUG 가입 여부·계약 잔여기간에 따라 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">상속인 청구·임차권등기명령에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>임대차계약서 원본</strong> — 보증금·계약기간·임대인 인적사항.</li>\n<li><strong>임대인 사망진단서 또는 사망신고서</strong> — 부동산·가족·관할 주민센터 통해 확인.</li>\n<li><strong>상속인 가족관계증명서·기본증명서</strong> — 상속인 범위 확정. 본인 신청 어려우면 변호사 통해 보정 명령.</li>\n<li><strong>주민등록등본 + 확정일자 받은 계약서</strong> — 대항력·우선변제권 입증.</li>\n<li><strong>차임 송금·공탁 내역</strong> — 임대인 사후 차임 지급 처리 흔적.</li>\n<li><strong>HUG 전세보증보험 증서 (가입자만)</strong> — 보증금액·만기일·면책사유 확인.</li>\n<li><strong>등기부등본 (사망 후 발급본)</strong> — 상속등기 진행 여부·근저당 변동 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 임대인이 사망했다고 차임 지급을 그냥 멈추면 채무불이행이 될 수 있어요. 상속인 미확정이면 공탁이 안전합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 임대인 사망 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"상속인 모두가 상속포기했다"</strong> — 상속재산관리인 선임을 가정법원에 신청해 그를 상대로 청구. 상속재산 범위 내 우선변제권은 그대로 유지.</li>\n<li><strong>"한정승인이라 보증금 못 준다"</strong> — 한정승인은 상속재산 범위 내 변제 의무는 남고, 임차인은 우선변제권자로 다른 채권자보다 먼저 변제받을 수 있어요.</li>\n<li><strong>"상속인이 여러 명이라 누가 줄지 모른다"</strong> — 보증금 반환 의무는 상속분 비율로 분할. 1명에게 청구해도 그 상속분만큼만 회수. 전액 회수하려면 전원 상대 청구.</li>\n<li><strong>"임대인 사망으로 자동 계약 종료"</strong> — 사망은 종료 사유 아닙니다. 새 임대인(상속인)과 종전 조건 그대로 계약 유지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / HUG 1566-9009 / 임대차분쟁조정위원회(주임분조위) 1670-7150 / 가정법원 상속포기·한정승인 / 임대차상담센터(서울시 1644-7700).</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차인이 임차주택 소유권을 취득한 경우 대항력·우선변제권 소멸',
        summary:
          '대법원 2025다213466 사건(대법원, 2026.01.08 선고)에서 법원은 주택임대차보호법상 대항력·우선변제권을 갖춘 임차인이 임차주택을 양수해 소유자가 된 경우, 그 임차인의 주민등록은 소유권이전등기 후에는 임차권을 매개로 하는 점유로 인식될 수 없어 유효한 공시방법이 되지 못하므로 대항력은 소유권 취득 시 소멸한다고 판시했습니다. 임대인 사망으로 임차인이 상속인 합의·매매를 통해 해당 주택 소유권을 취득하는 경우에도 종전 대항력·우선변제권이 자동 유지되지 않을 수 있다는 시사점이 있어, 소유권 이전과 보증금 처리는 별도 합의서로 명확히 정리해두는 것이 좋습니다.',
        takeaway: '임대인 사망 후 임차인이 해당 주택을 매수·상속받는 안을 검토할 때는 대항력·우선변제권 소멸 가능성을 사전에 확인하고, 보증금 정산 합의서·등기 시점·잔존 채권 처리를 명시해두는 것이 안전합니다.',
      },
    ],
    faq: [
      {
        question: '상속인이 한 명도 임대차계약을 인정하지 않으면 어떻게 하나요?',
        answer:
          '<strong>법정 승계는 인정·부인 대상이 아닙니다.</strong> 사망 시점에 임대차는 자동 승계되므로, 거부 의사와 무관하게 상속인이 임대인 지위. 상속포기·한정승인 신고 여부만 가정법원 기록으로 확인할 수 있어요.',
      },
      {
        question: '임대인 사망 사실을 부동산이 알려주지 않아 늦게 알았다면요?',
        answer:
          '<strong>인지 시점 기준으로 임차권등기명령·내용증명 절차를 시작할 수 있습니다.</strong> 다만 상속포기 기한(3개월)은 상속인 기준이라, 임차인 인지 시점과 별개로 진행됩니다. 가능한 빨리 등기부등본·가족관계 조회로 상속인 확정.',
      },
      {
        question: '보증금이 1억 미만이면 소액임차인 최우선변제 받을 수 있나요?',
        answer:
          '<strong>주택임대차보호법 제8조 소액임차인 보호는 임대인 사망과 무관하게 적용됩니다.</strong> 지역별 한도(서울 5,500만원·과밀억제권역 4,800만원 등) 내 소액임차인은 다른 담보채권보다 우선해 일정액 변제. 확정일자·전입신고 유지가 핵심.',
      },
      {
        question: 'HUG 전세보증보험 가입자인데 임대인이 사망했어요. 청구 가능한가요?',
        answer:
          '<strong>HUG 보증은 임대인 사망과 무관하게 보증금 미반환 사유 발생 시 청구 가능합니다.</strong> 계약 종료 + 보증금 미반환 + 1개월 경과 요건만 충족하면 됩니다. 상속인 확정 전에도 청구 가능. 약 2개월 내 지급되는 것으로 안내되고 있습니다.',
      },
      {
        question: '임대인 사망 후 상속인이 새 매수인에게 집을 팔면 어떻게 되나요?',
        answer:
          '<strong>매수인이 임대인 지위를 다시 승계합니다.</strong> 대항력 갖춘 임차인은 새 소유자에게 임대차 주장 가능. 새 임대인에게 보증금 청구하면 됩니다. 매수인이 보증금 반환을 거부하면 임차권등기명령 + 반환소송.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '임차권등기명령 신청 절차', href: '/guide/jeonse/jeonse-deposit-not-returned-response' },
      { label: '전세보증금 반환 종합 가이드', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
      { label: '임대인 변경 시 보증금 리스크', href: '/guide/jeonse/jeonse-landlord-change-deposit-risk' },
      { label: '소액임차인 최우선변제 요건', href: '/guide/jeonse/jeonse-tenant-registration-requirement' },
      { label: '전세 임대인 세금 체납 리스크', href: '/guide/jeonse/jeonse-landlord-tax-delinquent-risk' },
    ],
  },

  // ─── 2. jeonse / multi-creditor-deposit-priority ───
  {
    domain: 'jeonse',
    slug: 'jeonse-multi-creditor-deposit-priority',
    keyword: '다중 채권자 보증금 우선순위',
    questionKeyword: '다세대주택에 임차인이 8명인데 경매가 잡혔어요. 제 보증금 회수 가능성 어떻게 점검하나요?',
    ctaKeyword: '다중 채권자 보증금 우선순위 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '다세대주택 다중 채권자 보증금 우선순위 — 회수 점검 5단계 | 로앤가이드',
      description:
        '다세대·다가구주택에 임차인 다수 + 경매 진행 중이라면 우선변제·소액임차인·공동근저당 분담 5단계 점검 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"건물 통째로 같은 임대인이 소유한 다세대주택인데, 다른 호실에도 임차인이 7명 있고 근저당이 4억 잡혀있어요. 경매 통지받고 나서야 우리 호실 보증금 1.5억이 회수될지 막막해서 등기부등본만 보고 있습니다." 다중 채권자가 얽힌 다세대·다가구주택 경매에서는 확정일자·전입신고 시점·공동근저당 분담·소액임차인 한도가 회수 가능성을 결정합니다. 경매개시결정 후 배당요구종기 전까지가 핵심 시기라, 본인 우선순위와 다른 임차인의 권리를 함께 점검해볼 수 있어요.</p>',
    sections: [
      {
        title: 'Q. 본인 보증금 우선순위는 어떻게 점검하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 아래 4가지 시점·금액을 등기부등본·전입세대열람·확정일자로 비교합니다.</strong></p>\n<ul>\n<li><strong>전입신고 + 점유 시점</strong> — 대항력 발생 시점(주임법 제3조). 근저당 설정일보다 먼저면 대항력 우선.</li>\n<li><strong>확정일자 시점</strong> — 우선변제권(주임법 제3조의2). 같은 부동산 내 다른 채권자(근저당·다른 임차인)와 시간 순으로 비교.</li>\n<li><strong>소액임차인 해당 여부</strong> — 보증금이 지역별 소액 기준(서울 1억6,500만원·과밀억제권역 1억4,500만원 등) 이하면 최우선변제 일정액(서울 5,500만원·과밀 4,800만원 등) 보호.</li>\n<li><strong>공동근저당 분담 (민법 제368조)</strong> — 같은 임대인 소유 여러 호실에 공동근저당이 설정된 경우, 호실별 경매대가 비례로 채권 분담. 본인 호실 분담 채권액 + 선순위 임차보증금이 매각가 안에 들어가야 회수 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 다세대 8호실 모두 같은 임대인 소유 + 공동근저당 설정이면 호실별 매각가에서 본인 분담 채권액 빼고 남는 금액에서 선순위 임차인부터 변제. 본인 순위가 뒤면 회수 어려울 수 있어요.</blockquote>',
      },
      {
        title: 'Q. 회수 가능성을 단계별로 어떻게 검토하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 매각가·선순위 채권액·소액임차인 보호액을 한 번에 정리해 비교합니다.</strong></p>\n<ul>\n<li><strong>1단계 — 등기부등본 발급 (모든 호실)</strong> — 같은 임대인 소유 여부, 공동근저당 설정 여부 확인. 본인 호실 + 다른 호실 전부.</li>\n<li><strong>2단계 — 전입세대열람 + 확정일자 부여 현황</strong> — 다른 임차인의 전입·확정일자 시점 확인. 동주민센터에서 발급(이해관계인).</li>\n<li><strong>3단계 — 매각가 추정</strong> — 감정평가서 기준 70~80%에서 낙찰되는 사례가 많음. 본인 호실 매각가에서 공동근저당 분담액·선순위 임차보증금 차감.</li>\n<li><strong>4단계 — 소액임차인 최우선변제 적용</strong> — 본인이 소액임차인이면 최우선변제 일정액은 안전. 그 외는 우선변제권 순위에 따라 변제.</li>\n<li><strong>5단계 — 부족분 회수 트랙</strong> — 임대인 다른 재산에 가압류·강제집행. 회수 어려우면 HUG 보증보험·전세사기특별법 적용 검토.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">우선순위·소액임차인 해당 여부·HUG 가입 여부에 따라 회수 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">배당요구·소액임차인 신청에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>임대차계약서 + 확정일자 받은 사본</strong> — 우선변제권 입증 핵심.</li>\n<li><strong>주민등록등본 (해당 주소)</strong> — 전입신고 시점 + 점유 입증.</li>\n<li><strong>등기부등본 (본인 호실 + 같은 건물 전체 호실)</strong> — 공동근저당·다른 호실 권리관계 확인.</li>\n<li><strong>전입세대열람 내역서</strong> — 다른 임차인 전입 시점.</li>\n<li><strong>경매개시결정문 + 배당요구신청서</strong> — 배당요구종기 전 신청 필수.</li>\n<li><strong>중개대상물 확인설명서</strong> — 공인중개사 책임 추궁 자료.</li>\n<li><strong>HUG 보증보험증서 (가입자만)</strong> — 보증금액·만기일.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 배당요구종기 안에 배당요구를 안 하면 우선변제권이 있어도 배당에서 빠집니다. 경매개시결정문 받자마자 종기 확인하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 다중 채권자 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"확정일자만 있으면 안전하다"</strong> — 확정일자 시점이 근저당·다른 임차인보다 늦으면 후순위. 시점 비교가 핵심입니다.</li>\n<li><strong>"전입신고만 했어도 보호된다"</strong> — 전입신고는 대항력만 부여. 우선변제권은 확정일자 별도 필요. 둘 다 갖춰야 안전.</li>\n<li><strong>"공인중개사가 안전하다고 했다"</strong> — 다세대주택 중개 시 다른 호실 임대차보증금 확인·설명 의무가 있습니다(공인중개사법 제25조). 누락 + 손해 발생 시 공인중개사·공제금 청구 검토.</li>\n<li><strong>"임차권등기 안 해도 된다"</strong> — 이사 가야 한다면 임차권등기명령 후 이사. 안 하면 대항력·우선변제권 상실.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / HUG 1566-9009 / 전세사기피해지원센터 1533-8119 / 공인중개사협회 02-3404-3500 / 임대차분쟁조정위원회 1670-7150.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 다세대 공동근저당 + 다른 호실 임대차 확인설명 의무',
        summary:
          '대법원 2024다305087 사건(대법원, 2025.12.04 선고)에서 법원은 다세대주택 중 임대의뢰인 소유 특정 세대 임대차계약을 중개하는 개업공인중개사는 공동근저당이 설정된 다른 세대의 부동산등기부 표시 선순위권리뿐 아니라 다른 세대 임대차보증금·시기·종기까지 확인하여 임차의뢰인에게 설명하고 중개대상물 확인설명서에 기재해야 할 의무가 있고, 이를 위반해 손해를 입혔다면 공인중개사법 제30조에 따른 배상책임을 진다고 판시했습니다. 다세대주택 입주 시 공인중개사 확인설명서가 부실했다면 공제금·손해배상 청구를 함께 검토해볼 수 있다는 시사점이 있습니다.',
        takeaway: '다세대·다가구주택 경매에서 회수 부족분이 생긴 경우, 공인중개사 확인설명 의무 위반 + 공제금 청구 트랙을 별도로 검토할 수 있어 중개대상물 확인설명서·중개수수료 영수증을 보관해두는 것이 좋습니다.',
      },
    ],
    faq: [
      {
        question: '근저당이 먼저인데 우리 보증금 회수 가능성 0인가요?',
        answer:
          '<strong>매각가 - 근저당 채권 - 선순위 임차보증금 = 잔여 배당재원에서 본인 순위에 따라 변제됩니다.</strong> 매각가가 충분히 높으면 후순위라도 일부 회수 가능. 소액임차인이면 최우선변제 일정액은 거의 안전.',
      },
      {
        question: '같은 건물에 다른 임차인 보증금이 합쳐서 10억인데 영향 받나요?',
        answer:
          '<strong>같은 호실 안에서만 우선변제권 경합합니다.</strong> 호실이 다르면 각자 매각가에서 변제. 다만 공동근저당이면 호실별 분담 채권액이 빠져서 호실별 회수재원이 줄어들어요.',
      },
      {
        question: '소액임차인 한도를 살짝 넘는데 보호 못 받나요?',
        answer:
          '<strong>지역별 한도를 1원이라도 넘으면 소액임차인 최우선변제 대상에서 제외됩니다.</strong> 다만 일반 우선변제권은 그대로 유지되니, 확정일자 시점이 빠르면 본인 순위에 따라 회수 가능.',
      },
      {
        question: '경매 진행 중에 새 임차인이 전입신고하면 우선순위 변하나요?',
        answer:
          '<strong>경매개시결정 후 전입한 임차인은 매수인에게 대항할 수 없습니다(주임법 제3조).</strong> 다만 본인이 그 전에 전입·확정일자 받았다면 영향 없음. 새 임차인이 본인 순위를 밀어내지 못해요.',
      },
      {
        question: '회수가 부족하면 임대인 다른 재산을 추적할 수 있나요?',
        answer:
          '<strong>가능합니다. 채무명의(반환소송 판결문 또는 임차권등기) 확보 후 임대인 다른 재산 가압류·강제집행.</strong> 재산조회신청(민사집행법 제74조)으로 부동산·예금·차량 추적. 사기 정황 있으면 형사 고소 + 사해행위취소 청구도 검토.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '경매 보증금 우선순위 정리', href: '/guide/jeonse/jeonse-auction-deposit-priority' },
      { label: '다세대주택 임대차 보증금 우선순위', href: '/guide/jeonse/jeonse-deposit-priority-competing' },
      { label: '경매 우선변제 절차 안내', href: '/guide/jeonse-fraud/jeonse-fraud-auction-priority-repayment' },
      { label: '공인중개사 책임 추궁', href: '/guide/jeonse/jeonse-broker-liability-failure' },
      { label: '임차권등기명령 절차', href: '/guide/jeonse/jeonse-deposit-not-returned-response' },
    ],
  },

  // ─── 3. stalking / coworker-repeated-approach (victim) ───
  {
    domain: 'stalking',
    slug: 'stalking-coworker-repeated-approach',
    keyword: '직장 동료 스토킹 대응',
    questionKeyword: '같은 부서 동료가 회식 후 자꾸 카톡·전화하고 SNS 메시지를 보내요. 사내 신고와 형사 고소 같이 가능한가요?',
    ctaKeyword: '직장 동료 스토킹 대응 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '직장 동료 스토킹 대응 — 사내 신고 + 형사 5단계 | 로앤가이드',
      description:
        '같은 회사 동료가 반복 접근·메시지·SNS 추적을 한다면 사내 고충처리 + 경찰 신고 + 잠정조치 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"같은 부서 선배가 회식 자리 이후 매일 밤 11시에 카톡을 보내고, 답을 안 하면 인스타그램 DM으로도 옵니다. 회사에 알리면 보복당할까 봐 두렵고, 경찰 신고하면 일이 더 커질 것 같아 망설이고 있어요." 직장 동료 스토킹은 업무 관계 + 개인 접근이 섞여 있어 사내 고충처리 + 형사 트랙을 함께 검토해볼 수 있습니다. 메시지 캡처·녹취·이동 동선 기록을 시간순으로 정리해두는 것이 출발점이에요. 사내 신고는 보복 금지 의무가 있어, 회사가 부당 인사·해고로 보복하면 별도 구제 절차가 가능합니다.</p>',
    sections: [
      {
        title: 'Q. 어떤 행위가 스토킹처벌법 적용 대상인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 스토킹처벌법 제2조 제1호 각 목의 행위가 반복·지속되면 적용 대상입니다.</strong></p>\n<ul>\n<li><strong>접근·따라다님</strong> — 출퇴근길·집 근처·식당 앞 기다리기.</li>\n<li><strong>주거·직장·학교 등 일상 공간 진입</strong> — 회사 안에서도 본인 자리·휴게실에 반복적으로 찾아오는 행위.</li>\n<li><strong>물건·메시지 도달</strong> — 카톡·문자·전화·이메일·SNS DM·선물·편지 반복 발송.</li>\n<li><strong>물건 훼손</strong> — 자동차·소지품에 흠집·낙서.</li>\n<li><strong>정보통신망 통한 글·영상</strong> — SNS에 본인 사진·정보 게시, 비방 글.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 스토킹범죄는 행위가 객관적으로 불안감·공포심을 일으키기에 충분한 정도이면 피해자가 인식했는지 여부와 관계없이 성립할 수 있습니다(대법원 2025도36 참고).</blockquote>',
      },
      {
        title: 'Q. 사내 신고와 형사 고소를 어떻게 같이 가나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 사내 고충처리(보복 금지)와 형사 트랙은 동시 진행이 가능합니다.</strong></p>\n<ul>\n<li><strong>사내 고충처리</strong> — 인사팀·고충처리위원회·노조 신고. 직장 내 괴롭힘 금지(근로기준법 제76조의2)도 함께 적용 가능.</li>\n<li><strong>경찰 신고 + 응급조치</strong> — 112 또는 관할 경찰서. 즉시 응급조치(접근금지·경고)·잠정조치 신청 가능.</li>\n<li><strong>잠정조치</strong> — 법원이 결정하는 접근금지(100m)·통신금지·구금 등(스토킹처벌법 제9조).</li>\n<li><strong>형사 처벌</strong> — 스토킹범죄 3년 이하 징역·3천만원 이하 벌금. 흉기 휴대 시 5년 이하·5천만원 이하.</li>\n<li><strong>민사 손해배상</strong> — 정신적 손해(위자료) + 치료비·이사비 청구. 사례에 따라 위자료가 3백만원~2천만원 수준으로 검토되는 사례가 자주 보입니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">사내 신고·형사 고소·잠정조치 어느 트랙부터 시작할지 사례에 따라 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">경찰청 ECRM·여성긴급전화 1366·근로기준법 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 확보 (즉시)</strong> — 카톡·DM·문자·이메일·통화녹취 일자별 캡처. CCTV·이동 동선 기록.</li>\n<li><strong>2단계 — 사내 고충처리 신고 (1~2주 내)</strong> — 인사팀에 서면 신고. 보복 금지 의무 명시. 회사가 보복 인사 시 노동위 부당해고·부당전보 구제 트랙.</li>\n<li><strong>3단계 — 경찰 신고 + 응급조치 (즉시 또는 사내 절차 병행)</strong> — 112·관할 경찰서. 응급조치(스토킹처벌법 제4조) → 잠정조치(제9조) 단계로 진행.</li>\n<li><strong>4단계 — 잠정조치 결정 (수일 내)</strong> — 법원이 접근금지·통신금지 결정. 위반 시 가중처벌(2년 이하 징역).</li>\n<li><strong>5단계 — 형사 기소 + 민사 청구</strong> — 검찰 송치 → 기소 후 형사재판. 민사 손해배상 별도 청구 가능.</li>\n</ol>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 직장 동료 스토킹 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"한 번 답장했으니 합의 의사 있는 걸로 본다"</strong> — 거절·무시 메시지 1건도 거절 의사로 평가될 수 있어요. 답장 시점·내용을 기록해두세요.</li>\n<li><strong>"같이 회식하고 웃었던 사진이 있다"</strong> — 업무 관계로 인한 자리 + 단발성 사진은 동의·합의 입증으로 충분하지 않은 사례가 많아요.</li>\n<li><strong>"피해자가 인식 못하면 스토킹 아니다"</strong> — 객관적·일반적으로 불안감·공포심을 일으킬 행위면 피해자 현실 인식 없이도 성립 가능(대법원 2025도36).</li>\n<li><strong>"회사가 자체 조사하니 경찰 신고는 미루자"</strong> — 사내 절차와 형사 절차는 별개. 동시 진행이 증거 보전·잠정조치 측면에서 유리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 경찰청 112 / 여성긴급전화 1366 / 한국여성의전화 02-2263-6464 / 대한법률구조공단 132 / 고용노동부 1350 (직장 내 괴롭힘).</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 피해자 현실 인식 없어도 스토킹행위 성립',
        summary:
          '대법원 2025도36 사건(대법원, 2025.10.30 선고)에서 법원은 구 스토킹처벌법 제2조 제1호 각 목의 행위가 객관적·일반적으로 볼 때 이를 인식한 상대방에게 불안감 또는 공포심을 일으키기에 충분한 정도라고 평가될 수 있다면, 현실적으로 상대방이 위 행위를 인식했는지 또는 그 행위로 불안감·공포심을 갖게 되었는지 여부와 관계없이 스토킹행위에 해당하고, 이러한 일련의 행위가 지속·반복되면 스토킹범죄가 성립한다고 판시했습니다. 직장 동료 스토킹에서도 본인이 매번 인지하지 못한 메시지·SNS 추적이라도 객관적으로 공포심을 일으키기에 충분하면 처벌 대상에 포함될 수 있다는 시사점이 있습니다.',
        takeaway: '직장 동료 스토킹은 본인이 직접 보지 못한 메시지·SNS 추적도 입증되면 처벌 대상이 될 수 있어, 메시지·게시물 캡처와 시간 기록을 빠짐없이 보관해두는 것이 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '회사에 알리지 않고 경찰 신고만 먼저 해도 되나요?',
        answer:
          '<strong>가능합니다. 사내 절차는 의무가 아닙니다.</strong> 다만 같은 사무실에서 일을 계속해야 한다면 사내 분리조치(자리 이동·재택·휴직) 요청을 함께 검토. 회사가 거부하면 직장 내 괴롭힘으로 노동청 진정.',
      },
      {
        question: '카톡 차단했는데 새 번호로 또 연락이 와요. 이것도 스토킹인가요?',
        answer:
          '<strong>차단 회피 + 반복 접근은 스토킹 가중 정황입니다.</strong> 차단 사실 자체가 거절 의사 입증. 새 번호·새 계정 시도 모두 캡처해 시간순 정리.',
      },
      {
        question: '잠정조치를 신청하면 회사에 통보가 되나요?',
        answer:
          '<strong>법원 결정문은 행위자에게 송달되며, 회사 자동 통보는 아닙니다.</strong> 다만 행위자가 회사 안에 있으면 접근금지 100m 적용을 위해 본인이 회사에 알릴 수 있어요. 사내 분리조치 근거로도 활용.',
      },
      {
        question: '회사가 가해자를 옮겨주지 않고 오히려 본인을 다른 부서로 보내려고 해요.',
        answer:
          '<strong>피해자 보복 인사는 직장 내 괴롭힘·부당전보로 다툴 수 있습니다.</strong> 근로기준법 제76조의3 + 노동위 부당전보 구제신청. 본인 동의 없는 일방적 전보는 위법 가능성.',
      },
      {
        question: '민사 위자료는 얼마 정도 인정되는 사례가 많나요?',
        answer:
          '<strong>사례에 따라 다르지만 직장 동료 스토킹 케이스에서 위자료가 3백만원~2천만원 수준으로 인정되는 사례가 자주 보입니다.</strong> 행위 기간·횟수·증거 강도·정신과 진료 기록에 따라 차이. 치료비·이사비도 별도 청구.',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '직장 내 스토킹 처벌 정리', href: '/guide/stalking/stalking-workplace-harassment-stalking' },
      { label: '직장 내 스토킹 신고 절차', href: '/guide/stalking/stalking-workplace-supervisor-report' },
      { label: '직장 동료 스토킹 형사 트랙', href: '/guide/stalking/stalking-workplace-coworker-criminal' },
      { label: '잠정조치 신청 효력', href: '/guide/stalking/stalking-provisional-measure-application-effect' },
      { label: '스토킹 증거 수집 체크리스트', href: '/guide/stalking/stalking-workplace-supervisor-report' },
    ],
  },

  // ─── 4. stalking / provisional-measure-appeal-procedure (accused) ───
  {
    domain: 'stalking',
    slug: 'stalking-provisional-measure-appeal-procedure',
    keyword: '스토킹 잠정조치 항고',
    questionKeyword: '스토킹 혐의를 받고 있는데 법원이 100m 접근금지·구금 잠정조치를 결정했어요. 항고할 수 있나요?',
    ctaKeyword: '스토킹 잠정조치 항고 절차 점검',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '스토킹 잠정조치 항고 절차 — 7일 이내 5단계 정리 | 로앤가이드',
      description:
        '스토킹처벌법 잠정조치 결정에 항고하려면 7일 이내 + 원심법원 항고장 제출 등 5단계 절차를 지금 확인하세요. 재항고 요건도 함께 정리합니다.',
    },
    intro:
      '<p>"혐의를 받고 있는 입장에서 법원이 갑자기 100m 접근금지 + 통신금지 + 일부 시간 구금까지 잠정조치 결정을 내렸어요. 직장에 출근도 못하고 가족과 연락도 막히는데, 항고 기한이 7일이라고 들어 막막합니다." 스토킹처벌법상 잠정조치 결정에 대한 항고는 7일 이내 + 원심법원에 항고장 제출 + 의견서 첨부 송부의 절차를 정확히 따라야 합니다. 형사소송법과 다른 별도 절차가 적용되어 기한·관할을 잘못 잡으면 본안 다투기 전에 각하될 수 있어, 결정문 받은 즉시 항고 트랙을 검토해보는 것이 도움이 됩니다.</p>',
    sections: [
      {
        title: 'Q. 잠정조치 항고는 언제·어디에 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 결정 고지받은 날부터 7일 이내, 원심법원에 항고장을 제출합니다(스토킹처벌법 제12조·제13조).</strong></p>\n<ul>\n<li><strong>항고권자</strong> — 검사·스토킹행위자(혐의자)·법정대리인. 피해자는 별도 의견 제출 가능하지만 항고권자는 아님.</li>\n<li><strong>항고 사유</strong> — 결정에 영향 미친 법령 위반, 중대한 사실 오인, 결정의 현저한 부당.</li>\n<li><strong>제출 기한</strong> — 결정 고지받은 날부터 7일 이내. 7일을 넘기면 항고권 소멸.</li>\n<li><strong>제출 장소</strong> — 잠정조치를 결정한 원심법원에 항고장 제출. 항고법원 직접 제출 아님.</li>\n<li><strong>집행정지 효력 없음</strong> — 항고해도 잠정조치 집행은 그대로(제16조). 100m 접근금지·구금 등은 항고 중에도 유효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 7일 안에 원심법원에 항고장 제출 → 원심법원이 3일 이내 의견서 첨부해서 항고법원에 기록 송부 → 항고법원이 결정. 형사소송법 제407조 항고 기각 결정 규정은 준용되지 않으므로 원심법원이 직접 항고를 기각할 수 없습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 항고 5단계',
        content:
          '<p><strong style="color:#1e3a5f">스토킹처벌법 + 대법원 판례를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 결정문 검토 + 사유 정리 (결정 고지 후 1~2일)</strong> — 잠정조치 결정문 사본 확보. 법령 위반·사실 오인·부당 사유 중 어디에 해당하는지 분석.</li>\n<li><strong>2단계 — 항고이유서 작성 (3~5일)</strong> — 항고 사유와 입증 자료 정리. 사실관계 오인이면 반대 증거(알리바이·CCTV·메시지 원본)를, 부당 결정이면 비례성·필요성 부족을 중심으로.</li>\n<li><strong>3단계 — 항고장 제출 (결정일 + 7일 이내)</strong> — 원심법원 형사사건 담당과 접수. 항고장 + 항고이유서 + 첨부자료. 우편은 도달주의가 아니라 발송주의가 아니므로 7일 안에 도착 확인 필수.</li>\n<li><strong>4단계 — 항고법원 심리 (수일~수주)</strong> — 원심법원이 3일 이내 의견서 첨부해 항고법원으로 기록 송부. 항고법원이 결정.</li>\n<li><strong>5단계 — 재항고 (항고 기각 시)</strong> — 항고법원의 기각 결정에 대해 법령 위반 사유로만 대법원 재항고 가능(제15조). 역시 7일 이내.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의금과 대응 전략, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">잠정조치 항고·본안 형사 대응·합의 트랙은 동시 검토가 도움이 됩니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">항고이유서·증거 보강에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>잠정조치 결정문 사본</strong> — 결정 사유·기간·종류 확인. 항고 사유 도출 기초.</li>\n<li><strong>고소장·수사기록 사본 (확보 가능 범위)</strong> — 변호인을 통해 열람·등사 신청.</li>\n<li><strong>알리바이·반대 증거</strong> — CCTV·교통카드 내역·근무기록·메시지 원본.</li>\n<li><strong>주거·직장 영향 자료</strong> — 출근 불가·가족 분리 등 부당성 입증. 진단서·재직증명서.</li>\n<li><strong>피해자와의 관계 입증</strong> — 합의·진정성 있는 사과·민사 합의 진행 자료(있는 경우만).</li>\n<li><strong>변호인 선임계 (있는 경우)</strong> — 국선변호인 선정 신청도 검토 가능.</li>\n<li><strong>항고이유서 + 첨부서류 목록</strong> — 항고장 본문 + 별지 형식.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 항고장을 항고법원(예: 고등법원)에 직접 제출하면 절차 위반입니다. 반드시 원심법원에 제출해야 하고, 7일 기한도 발송이 아닌 도달 기준으로 관리하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 잠정조치 항고 케이스에서 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"항고하면 잠정조치 효력이 정지된다"</strong> — 스토킹처벌법 제16조에 따라 항고·재항고에 집행정지 효력이 없습니다. 100m 접근금지·구금은 그대로 유효.</li>\n<li><strong>"형사소송법 제407조로 원심에서 바로 기각된다"</strong> — 대법원 2025모3144 판례에 따르면 잠정조치 항고에는 형사소송법 제407조가 준용되지 않아, 원심법원은 항고 기간·방식 위반이라도 직접 기각할 수 없고 항고법원에 송부해야 합니다.</li>\n<li><strong>"항고했으니 본안 형사재판도 자동 중지"</strong> — 잠정조치 항고와 본안 형사절차는 별개. 본안은 그대로 진행되니 본안 변론 준비도 병행.</li>\n<li><strong>"피해자가 합의해주면 잠정조치 자동 취소"</strong> — 합의는 잠정조치 변경·취소 사유로 검토되지만 자동 취소는 아닙니다. 별도로 잠정조치 변경·취소 신청(제11조 제3항).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 국선변호인 선정 신청(법원) / 형사사건 담당 변호사 / 한국가정법률상담소 1644-7077 / 보호관찰소 (전자감독 관련).</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 잠정조치 항고에 형사소송법 제407조 준용 안 됨',
        summary:
          '대법원 2025모3144 사건(대법원, 2025.12.11 선고)에서 법원은 스토킹처벌법상 잠정조치 결정에 대한 항고에 원심법원의 항고 기각 결정에 관한 형사소송법 제407조는 준용될 여지가 없으므로, 항고장을 제출받은 원심법원은 항고 절차가 법률에 위반되는지 가리지 않고 3일 이내 의견서를 첨부해 기록을 항고법원에 송부해야 한다고 판시했습니다. 잠정조치 항고를 받은 원심이 의견서 첨부 없이 직접 항고를 기각한 사안은 절차 위반에 해당해 본안 판단 없이 사건을 관할법원으로 이송한 사례입니다.',
        takeaway: '잠정조치 항고는 형사소송법이 아닌 스토킹처벌법 자체 규정이 적용되므로, 항고장 제출 장소(원심법원)·기한(7일)·송부 의무(원심 3일) 흐름을 정확히 챙겨두는 것이 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '7일이 지난 후에 항고장을 냈는데 기각되나요?',
        answer:
          '<strong>대법원 2025모3144 판례에 따르면 원심법원은 기간 도과를 이유로 직접 기각할 수 없고 항고법원으로 송부해야 합니다.</strong> 다만 항고법원이 기간 도과로 각하할 가능성은 높습니다. 7일 안에 도달이 원칙.',
      },
      {
        question: '구금 잠정조치를 받았는데 직장·가족 영향이 큽니다. 변경 가능한가요?',
        answer:
          '<strong>잠정조치 변경·취소 신청(스토킹처벌법 제11조 제3항)으로 다툴 수 있습니다.</strong> 직장·가족 부양 등 부당성 + 비례성 부족 입증 자료를 첨부. 항고와 별도로 동시 진행 가능.',
      },
      {
        question: '항고하면서 피해자와 합의하면 효과가 있나요?',
        answer:
          '<strong>합의는 본안 양형·잠정조치 변경 모두에 영향을 줄 수 있는 사정으로 검토됩니다.</strong> 진정성 있는 사과 + 합의금 + 재발방지 약정 + 합의서. 다만 합의금이 사건별로 달라 단정은 어렵고, 사례에 따라 1백만~수천만원 수준이 자주 보입니다.',
      },
      {
        question: '국선변호인 선정 가능한가요?',
        answer:
          '<strong>잠정조치 결정 후 본안 형사절차 단계에서 국선변호인 선정 신청 가능합니다.</strong> 빈곤·고령·장애 등 사유 + 본인 신청. 법원이 결정. 잠정조치 단계에서는 사선 변호인 선임이 일반적.',
      },
      {
        question: '재항고는 어떤 경우에 가능한가요?',
        answer:
          '<strong>항고법원의 항고 기각 결정이 법령에 위반된 경우에만 대법원 재항고 가능(스토킹처벌법 제15조).</strong> 사실 오인·부당 사유는 재항고 사유 아님. 7일 이내 + 원심(항고법원)에 재항고장 제출.',
      },
    ],
    cta: { text: '합의금과 대응 전략, AI로 확인하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '잠정조치 신청 효력', href: '/guide/stalking/stalking-provisional-measure-application-effect' },
      { label: '스토킹 가해자 첫 대응', href: '/guide/stalking/stalking-workplace-coworker-criminal' },
      { label: '스토킹 직장 신고 트랙', href: '/guide/stalking/stalking-workplace-supervisor-report' },
      { label: '스토킹 직장 처벌 정리', href: '/guide/stalking/stalking-workplace-harassment-stalking' },
      { label: '폭행 가해자 첫 대응', href: '/guide/assault/assault-charged-first-response' },
    ],
  },

  // ─── 5. assault / group-attack-joint-liability (accused) ───
  {
    domain: 'assault',
    slug: 'assault-group-attack-joint-liability',
    keyword: '단체 폭행 가담 책임',
    questionKeyword: '친구들이 한 사람을 때리는 자리에 같이 있었는데 직접 때리진 않았어요. 공동정범이 되나요?',
    ctaKeyword: '단체 폭행 공동정범 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '단체 폭행 가담 책임 — 공동정범 vs 방조 구분 5단계 | 로앤가이드',
      description:
        '여러 명이 한 사람을 폭행한 자리에 가담했다는 혐의를 받고 있다면 공동정범·방조·단순방관 구분 5단계 점검 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"친구들이 술자리 시비로 다른 사람을 때리는 동안 옆에 서 있었는데, 직접 때리진 않았어요. 그런데 경찰서에서 공동정범으로 입건될 수 있다는 말을 듣고 머리가 하얗습니다." 단체 폭행 사건은 본인이 직접 가격하지 않아도 공모 + 가담 정황이 입증되면 공동정범 책임이 인정될 수 있고, 단순 방관자라도 방조 혐의가 거론될 수 있습니다. 사건 직후 본인 위치·역할·발언을 일관되게 정리하고 변호인 조력 아래 수사 협조를 검토해보는 것이 도움이 됩니다. 술자리·CCTV·일행 진술이 핵심 변수가 됩니다.</p>',
    sections: [
      {
        title: 'Q. 직접 때리지 않았는데도 처벌받을 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 가담 정도에 따라 공동정범·방조·단순 방관 3가지로 갈립니다.</strong></p>\n<ul>\n<li><strong>공동정범 (형법 제30조)</strong> — 2인 이상 공모해 범죄 실행. 직접 가격 안 해도 공모 + 역할 분담(망보기·도주 차단·유인) 있으면 성립 가능.</li>\n<li><strong>방조범 (형법 제32조)</strong> — 정범의 범행을 도와준 행위. 격려·동조·소극적 협조도 방조로 평가될 가능성. 정범 형의 1/2 감경.</li>\n<li><strong>단순 방관 (불처벌)</strong> — 우연히 그 자리에 있었고 가담 의사 없으며 적극 도움 행위 없음 → 처벌 대상 아님.</li>\n<li><strong>특수폭행·특수상해</strong> — 2인 이상이 공동해 폭행·상해를 가하면 형법상 가중처벌(폭처법 제2조 제2항·형법 제261조). 형량 무거워짐.</li>\n<li><strong>공모 입증 핵심</strong> — 사전 모의·암묵적 동조·역할 분담 정황. 메시지·통화·CCTV·일행 진술이 결정적.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직접 가격 없이도 공모·가담 정황(말리지 않고 옆에 서있음, 도주 차단, 격려)이 입증되면 공동정범·방조 적용 가능 영역. 본인 의사·행동을 일관되게 진술하는 것이 중요합니다.</blockquote>',
      },
      {
        title: 'Q. 가담 정도를 어떻게 구분하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 사전 공모·현장 행동·결과 가담 3축으로 비교합니다.</strong></p>\n<ul>\n<li><strong>사전 공모</strong> — "한번 손봐주자"는 메시지·대화 있으면 공동정범 가능성 상승.</li>\n<li><strong>현장 가담</strong> — 직접 가격, 망보기, 출입 차단, 합세 가담은 공동정범. 옆에서 격려·웃음만 있으면 방조 검토.</li>\n<li><strong>도구·물건 제공</strong> — 흉기·물건 제공은 특수폭행·특수상해 공동정범. 형량 가중.</li>\n<li><strong>결과 가담</strong> — 폭행 후 도주 차단·은닉 협조하면 별도 범인은닉·증거인멸 죄도 결합 가능.</li>\n<li><strong>이탈·중지</strong> — 폭행 시작 전·중간에 명확히 이탈했으면 공동정범 면책 검토. 다만 사전에 한 가담분은 책임 남을 수 있음.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의금과 대응 전략, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">가담 정도·증거 상태·합의 가능성에 따라 전략이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">경찰·검찰·법원 형사절차에 따라 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 선임 + 진술 일관성 점검 (입건 직후)</strong> — 첫 진술이 향후 흐름을 결정. 변호인 조력 없이 단독 진술 자제.</li>\n<li><strong>2단계 — 본인 행동 시간순 정리</strong> — CCTV·통화내역·메시지·이동 동선. 입장한 시간·자리·발언 등을 시간 분 단위로 정리.</li>\n<li><strong>3단계 — 일행 진술 정합성 확인</strong> — 일행이 본인 가담을 어떻게 진술했는지 변호인 통해 열람·확인. 진술 충돌 시 본인 입장 명확히.</li>\n<li><strong>4단계 — 피해자 합의 검토 (조사 단계 ~ 1심 변론종결 전)</strong> — 합의금 + 진정성 있는 사과 + 재발방지 약정. 사례에 따라 50만~수백만원 수준이 자주 보입니다(피해 정도·합의 시점에 따라 차이).</li>\n<li><strong>5단계 — 양형 자료 정리</strong> — 초범·반성문·기부·자원봉사·심리상담 자료. 공동정범·방조 구분이 양형에 큰 차이.</li>\n</ol>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 단체 폭행 가담 케이스에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"직접 안 때렸으니 무죄다"</strong> — 공모·역할 분담 입증되면 공동정범. 직접 가격 여부만으로 면책되지 않습니다.</li>\n<li><strong>"술 취해서 기억이 없다"</strong> — 음주 만취는 책임능력 감경 사유로 검토되긴 하지만 면책되지는 않는 사례가 많아요. 오히려 진술 일관성이 떨어져 불리.</li>\n<li><strong>"일행이 다 같이 부인하기로 했다"</strong> — 한 명만 자백·CCTV 일치 시 다른 일행 진술 신빙성 무너짐. 위증 + 증거인멸 추가 위험.</li>\n<li><strong>"피해자와 합의 못하면 무조건 실형"</strong> — 합의 실패해도 공탁·반성·초범·가담 정도에 따라 집행유예 검토 가능. 단정형 답변 주의.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 국선변호인 선정(법원) / 형사사건 담당 변호사 / 범죄피해자지원센터 1577-1295 (피해자측 합의 중재) / 보호관찰소 (보호관찰 부과 시).</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 폭행에 수반된 상처가 극히 경미한 경우 상해 인정 여부',
        summary:
          '대법원 2025도11886 사건(대법원, 2025.12.04 선고)에서 법원은 상해죄의 상해는 피해자의 신체의 완전성을 훼손하거나 생리적 기능에 장애를 초래하는 것을 의미하고, 폭행에 수반된 상처가 극히 경미해 폭행이 없어도 일상생활 중 통상 발생할 수 있는 상처나 불편 정도이며 굳이 치료할 필요 없이 자연 치유되며 일상생활에 지장이 없는 경우에는 상해죄의 상해라 할 수 없다고 판시했습니다. 단체 폭행 사건에서 상해진단서의 객관성과 신빙성을 의심할 사정이 있다면 그 증명력 판단이 매우 신중해야 한다는 시사점도 함께 제시되어, 상해죄로 입건된 경우 상해 정도·진단 경위를 다투는 것이 가능한 영역입니다.',
        takeaway: '단체 폭행 가담 사건에서 상해죄까지 적용된 경우라도 상해 정도가 경미하거나 진단서 신빙성에 문제가 있으면 상해 인정 여부 자체를 다툴 수 있어, 진료기록·진단 경위·치료 경과를 함께 정리해두는 것이 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '폭행 직전에 자리를 떴는데도 공동정범인가요?',
        answer:
          '<strong>이탈 시점·이탈 의사 표시·이탈 후 가담 행위 부재가 명확하면 공동정범 면책 검토 가능합니다.</strong> 다만 사전 공모분에 대해서는 책임이 남을 수 있어요. CCTV·메시지로 이탈 시점 입증 핵심.',
      },
      {
        question: '말리려고 했는데 오히려 가담한 걸로 보였다면요?',
        answer:
          '<strong>제지·만류 행위 입증되면 공동정범 부정 사정으로 검토됩니다.</strong> 손짓·말림·신고 시도 등 적극 만류 흔적(CCTV·녹취·증인)이 핵심. 본인 진술만으로는 약함.',
      },
      {
        question: '피해자가 형사 처벌 안 원한다고 하면 사건 끝나나요?',
        answer:
          '<strong>단순폭행은 반의사불벌죄(형법 제260조 제3항)라 처벌 의사 철회 시 공소 못 합니다.</strong> 다만 상해·특수폭행은 반의사불벌 아님. 합의해도 검찰 기소 가능. 양형에서만 유리.',
      },
      {
        question: '초범인데 실형 가능성 있나요?',
        answer:
          '<strong>초범 + 합의 + 가담 경미하면 집행유예 가능성이 검토되는 사례가 많습니다.</strong> 다만 특수폭행·특수상해·피해 중대·반성 부족이면 실형 가능성 상승. 양형 자료 + 변호인 조력 중요.',
      },
      {
        question: '합의금은 보통 얼마 정도가 적정한가요?',
        answer:
          '<strong>사례에 따라 다르지만 단순폭행 50만~3백만원, 상해(상해진단서 있음) 3백만~1천만원 수준이 자주 보입니다.</strong> 피해 정도·치료비·일실수입·합의 시점이 변수. 단정형 금액 약속은 위험.',
      },
    ],
    cta: { text: '합의금과 대응 전략, AI로 확인하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 가해자 첫 대응', href: '/guide/assault/assault-charged-first-response' },
      { label: '폭행 무고 대응', href: '/guide/assault/assault-accusation-defense' },
      { label: '폭행 vs 상해 처벌 차이', href: '/guide/assault/assault-vs-injury-penalties' },
      { label: '폭행 합의금 가이드', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '폭행 초범 양형', href: '/guide/assault/assault-first-offense-penalty' },
    ],
  },

  // ─── 6. assault / self-defense-recognition (victim) ───
  {
    domain: 'assault',
    slug: 'assault-self-defense-recognition',
    keyword: '폭행 정당방위 인정',
    questionKeyword: '먼저 맞아서 반격했다가 오히려 입건됐어요. 정당방위로 인정받으려면 어떻게 해야 하나요?',
    ctaKeyword: '폭행 정당방위 인정 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '폭행 정당방위 인정 절차 — 증거 수집 5단계 정리 | 로앤가이드',
      description:
        '먼저 폭행당해 반격했다가 입건됐다면 정당방위·과잉방위 인정 요건과 증거 수집 5단계 절차를 지금 확인하세요. 위법성 조각 사정도 함께 정리합니다.',
    },
    intro:
      '<p>"늦은 시간 일하는 가게에 술 취한 손님이 갑자기 들어와 목을 누르고 폭행을 가해서 옆에 있던 도구로 한 번 막아냈는데, 오히려 본인이 상해죄로 입건됐어요. 정당방위라고 했는데 경찰은 일단 입건부터 한다고 합니다." 폭행을 먼저 당하고 반격한 케이스는 정당방위·과잉방위·면책적 과잉방위 어느 영역에 해당하는지 사실관계 정리가 핵심입니다. 현장 상황·공격 강도·반격 도구·반격 횟수가 정당방위 인정 여부를 결정해요. 사건 직후 CCTV·증인·진단서 확보가 출발점이고, 변호인 조력 아래 일관된 진술과 증거 정리를 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 정당방위 인정 요건 5가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 아래 5가지 모두 충족되어야 정당방위(형법 제21조 제1항)로 인정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>현재의 부당한 침해</strong> — 이미 끝난 폭행에 대한 보복은 정당방위 아님. 진행 중·임박한 침해여야 함.</li>\n<li><strong>자기 또는 타인의 법익 방위</strong> — 본인뿐 아니라 가족·동료 보호 위한 반격도 포함.</li>\n<li><strong>방위 의사</strong> — 단순 보복 의사 아닌 방어 의도. 사후 진술 일관성이 중요.</li>\n<li><strong>상당성</strong> — 공격 강도·도구·반격 정도 비례. 흉기에 흉기, 주먹에 주먹이 일반적 기준. 압도적 과잉 시 과잉방위.</li>\n<li><strong>다른 회피 수단 부족</strong> — 도주·112 신고가 가능했던 상황이면 인정 약함. 갑작스럽고 즉각적인 위협일수록 인정 가능성 상승.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정당방위 인정 시 위법성 조각 → 무죄. 과잉방위(형법 제21조 제2항) 시 형 감경 또는 면제. 면책적 과잉방위(제21조 제3항)는 야간 등 부득이한 사정 + 공포·흥분·당황으로 인한 과잉방위 → 벌하지 아니함.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 정당방위 입증 5단계',
        content:
          '<p><strong style="color:#1e3a5f">경찰 수사·검찰 송치·법원 재판 흐름을 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 증거 보전 (사건 직후 24시간)</strong> — CCTV 보존 요청(통상 1~2주 후 자동 삭제). 가게·골목·차량 블랙박스 모두 확인.</li>\n<li><strong>2단계 — 진단서·사진 확보 (3일 내)</strong> — 본인이 입은 상처·멍·골절 진단서. 폭행 흔적 사진. 경찰 신고 후 별도로 받아두는 것이 안전.</li>\n<li><strong>3단계 — 목격자 확보 + 진술 정리</strong> — 현장 손님·동료·CCTV 운영자. 연락처·진술 동의서. 시간 지나면 기억 흐려져 빠를수록 좋음.</li>\n<li><strong>4단계 — 변호인 조력 아래 진술서 정리 (입건 후 1주 내)</strong> — 공격 시점·강도·도구·반격 경위·반격 횟수를 시간순. 단순 "방어했다"가 아닌 구체적 묘사가 중요.</li>\n<li><strong>5단계 — 검찰·법원 단계 정당방위 항변</strong> — 검찰 단계에서 불기소 협의. 기소되면 1심에서 위법성 조각 항변. 면책적 과잉방위까지 백업 주장 함께 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">정당방위·과잉방위 인정 가능성은 사실관계에 따라 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">정당방위 항변·증거 보강에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>현장 CCTV (보존 요청서 포함)</strong> — 가게·건물·골목·차량 블랙박스 모두. 1~2주 내 보존 요청 필수.</li>\n<li><strong>본인 상해 진단서 + 사진</strong> — 멍·골절·찰과상 진단서. 진료기록 사본.</li>\n<li><strong>목격자 진술서</strong> — 손님·동료·이웃. 가능하면 자필 진술 + 연락처.</li>\n<li><strong>112 신고 이력 + 통화녹음</strong> — 신고 시점이 빠를수록 방어 의사 입증.</li>\n<li><strong>가해자 행동 기록</strong> — 음주·욕설·위협 발언 정황. 메뉴판·영수증·근무기록.</li>\n<li><strong>현장 사진 (도구·위치)</strong> — 반격에 사용한 도구가 우연히 옆에 있던 것임을 입증.</li>\n<li><strong>본인 진술서 (시간순)</strong> — 변호인 조력 아래 작성.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: CCTV는 1~2주 내 자동 삭제되는 곳이 많습니다. 사건 직후 보존 요청 공문(경찰·변호사 명의) 보내야 안전. 며칠 지나면 영구 손실 위험.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 정당방위 인정 케이스에서 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"먼저 맞았으니 무조건 정당방위"</strong> — 침해가 끝난 뒤 보복 가격은 정당방위 아님. 침해 종료 시점이 핵심 다툼.</li>\n<li><strong>"피해자가 더 다쳤으니 과잉방위"</strong> — 결과 비교가 아닌 행위 당시 상황 비례성으로 판단. 본인이 더 다쳤어도 과잉이면 과잉방위.</li>\n<li><strong>"흉기에 흉기로 대응했으니 무죄"</strong> — 흉기 종류·사용 강도·횟수에 따라 과잉으로 판단될 수 있음. 1회 가격 후 즉시 멈춤이 안전.</li>\n<li><strong>"112 안 부른 게 불리하다"</strong> — 갑작스럽고 즉각적 침해는 신고 시간 자체가 없을 수 있어 불리하지 않은 경우도 있음. 사실관계 기록이 핵심.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 범죄피해자지원센터 1577-1295 / 형사사건 담당 변호사 / 국선변호인 선정(법원) / 한국가정법률상담소 1644-7077.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 야간 사무실 침입 폭행에 대한 반격 = 정당방위 또는 면책적 과잉방위',
        summary:
          '서울북부지법 2025고단1523 사건(서울북부지법, 2025.10.29 선고)에서 법원은 새벽 01:30경 일면식 없는 자가 갑자기 사무실에 침입해 의자에 앉아있던 직원의 턱과 목 부위를 강하게 누른 상황에서, 직원이 옆에 놓여있던 고무망치로 1회 가격해 공격에서 벗어난 행위는 위법한 폭행 범행으로부터 벗어나기 위한 방위행위에 해당하고, 1회 가격 후 추가 공격 없이 가해자를 사무실 밖으로 내보낸 점을 고려해 사회통념상 허용될 수 있는 상당성이 있는 행위로 정당방위에 해당한다고 보았으며, 설령 정당방위가 아니더라도 야간 공포·흥분·당황 상태에서 공격행위를 멈추게 하기 위한 면책적 과잉방위로 위법성이 조각된다는 이유로 무죄를 선고했습니다.',
        takeaway: '먼저 폭행당해 반격한 케이스는 사건 시간·장소(야간 폐쇄 공간)·반격 횟수(1회)·반격 후 추가 가격 자제 여부가 정당방위 또는 면책적 과잉방위 인정의 핵심 변수가 될 수 있어, 시간순 사실관계와 CCTV 확보가 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '경찰이 일단 입건한다는데 이의 제기 가능한가요?',
        answer:
          '<strong>경찰 단계에서는 일단 입건되더라도 정당방위 항변 자료 제출 가능합니다.</strong> 검찰 송치 후 불기소 처분이 이상적. 기소되더라도 1심에서 위법성 조각 항변 가능.',
      },
      {
        question: '반격에 옆에 있던 물건을 사용했어요. 흉기 휴대 가중 처벌인가요?',
        answer:
          '<strong>우연히 현장에 있던 물건을 즉시 사용한 경우 흉기 휴대(특수폭행)로 가중되지 않을 수 있습니다.</strong> 사전 준비 흉기 vs 우연한 도구 구분이 핵심. 변호인 조력 필요.',
      },
      {
        question: '가해자가 합의를 거부하면서 거꾸로 본인을 고소했어요.',
        answer:
          '<strong>맞고소·교차 입건은 흔한 사례입니다.</strong> 정당방위 입증 + 본인이 가해자 폭행으로 별도 고소 가능. 양 사건이 같은 검찰·법원에서 함께 다뤄지는 사례가 많아요.',
      },
      {
        question: '과잉방위로 인정되면 처벌 받나요?',
        answer:
          '<strong>과잉방위(형법 제21조 제2항)는 형 감경·면제 가능 영역입니다.</strong> 면책적 과잉방위(제21조 제3항)는 위법성 조각으로 무죄. 야간 공포·흥분·당황 사정이 핵심 변수.',
      },
      {
        question: '본인 진단서가 가해자보다 가벼운데도 정당방위 인정되나요?',
        answer:
          '<strong>결과 경중이 아닌 행위 당시 상당성으로 판단합니다.</strong> 본인 상처가 가벼워도 침해 강도·도구·횟수가 균형 있으면 정당방위 가능. 결과만 보고 단정하지 마세요.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집 절차', href: '/guide/assault/assault-evidence-collection-procedure' },
      { label: '폭행 증거 체크리스트', href: '/guide/assault/assault-evidence-checklist' },
      { label: '폭행 무고 대응', href: '/guide/assault/assault-false-accusation-defense' },
      { label: '폭행 vs 상해 차이', href: '/guide/assault/assault-vs-injury-penalties' },
      { label: '폭행 형사·민사 구분', href: '/guide/assault/assault-criminal-vs-civil-claim' },
    ],
  },

  // ─── 7. child-support / agency-collection-limits ───
  {
    domain: 'child-support',
    slug: 'child-support-agency-collection-limits',
    keyword: '양육비이행관리원 추심 한계',
    questionKeyword: '양육비이행관리원에 추심 신청했는데 6개월째 회수가 안 돼요. 다음 단계 뭐가 있나요?',
    ctaKeyword: '양육비 추심 다음 단계 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양육비이행관리원 추심 한계 — 다음 단계 5가지 정리 | 로앤가이드',
      description:
        '양육비이행관리원에 추심 신청했지만 회수가 안 된다면 감치명령·운전면허 정지·신상공개·민사강제집행 5단계 다음 카드 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"양육비이행관리원에 추심을 맡겼는데 6개월째 한 푼도 못 받았어요. 비양육자가 회사를 그만두거나 명의만 옮기는 식으로 빠져나가는 것 같아 이대로면 평생 못 받을 것 같아 답답합니다." 양육비이행관리원(CSA) 추심은 강력한 1차 수단이지만, 채무자가 무재산·잠적·차명 거래로 회피하는 경우 감치명령·운전면허 정지·신상공개·형사 처벌 등 추가 카드가 필요합니다. 절차마다 요건과 시기가 정해져 있어 한 단계씩 누적해 검토해볼 수 있어요. 자녀가 성년이 되기 전까지가 추심 가능 기간이라 시기 관리가 도움이 됩니다.</p>',
    sections: [
      {
        title: 'Q. 양육비이행관리원 추심이 막혔을 때 다음 카드 5가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 가사소송법·양육비이행법에 따라 아래 5가지 조치를 단계적으로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>이행명령 (가사소송법 제64조)</strong> — 가정법원이 비양육자에게 이행 명함. 1차 단계, 미이행 시 다음 단계 근거.</li>\n<li><strong>감치명령 (가사소송법 제68조)</strong> — 이행명령 후 정당한 이유 없이 3기 이상 미이행 시 30일 이내 감치(구금). 강력한 압박.</li>\n<li><strong>운전면허 정지 요청</strong> — 양육비이행법 제21조의3. 양육비 미지급 1천만원 이상 + 정당한 이유 없으면 운전면허 정지(최장 100일).</li>\n<li><strong>출국금지 + 신상정보 공개</strong> — 양육비이행법 제21조의4·제21조의5. 5천만원 이상 미지급 시 출국금지·신상공개 가능. 사회적 압박.</li>\n<li><strong>형사 처벌 (양육비이행법 제27조)</strong> — 감치명령 후 1년 이내 미이행 시 1년 이하 징역·1천만원 이하 벌금. 형사 고발 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단계는 누적식으로 진행됩니다. 이행명령 → 감치 → 운전면허 정지 → 출국금지·신상공개 → 형사. 한 단계 건너뛰면 기각될 수 있어 순서가 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 단계별 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">양육비이행관리원·가정법원·여성가족부 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 양육비 집행권원 확정 (협의·심판·조정조서·양육비부담조서)</strong> — 추심·감치·강제집행의 기초. 없으면 양육비 심판 청구부터.</li>\n<li><strong>2단계 — 이행명령 신청 (1~2개월)</strong> — 가정법원에 이행명령 청구. 비양육자 송달 후 일정 기간 줌.</li>\n<li><strong>3단계 — 감치명령 신청 (3기 이상 미이행 시)</strong> — 이행명령 후 정당한 이유 없이 3기 이상 미이행 시 가정법원에 감치 신청. 통상 신청~결정 1~2개월.</li>\n<li><strong>4단계 — 운전면허 정지·출국금지·신상공개 (병행 가능)</strong> — 양육비이행관리원 통해 여성가족부 양육비이행심의위원회 신청. 미지급액·정당한 이유 부재 입증.</li>\n<li><strong>5단계 — 형사 고발 + 민사 강제집행</strong> — 감치 후 1년 미이행 시 형사 고발(양육비이행법 제27조). 민사 부동산·차량·예금 가압류·강제집행 병행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 못 받을 때 다음 단계, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">단계마다 요건·시기가 정해져 있어 순서가 중요합니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">감치·운전면허 정지·신상공개에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>양육비 집행권원</strong> — 양육비부담조서·심판·조정조서·확정판결 사본.</li>\n<li><strong>미지급 내역서</strong> — 월별 지급일·지급액·미지급액 정리. 통장 거래내역 첨부.</li>\n<li><strong>이행명령 결정문 + 송달증명</strong> — 감치·신상공개 신청의 전제.</li>\n<li><strong>비양육자 재산·소득 자료</strong> — 사업자등록·근로소득·부동산. 재산조회신청(가사소송법 제48조의2)으로 확보.</li>\n<li><strong>비양육자 운전면허·여권 정보</strong> — 운전면허 정지·출국금지 요청 자료.</li>\n<li><strong>본인 양육 사실 입증</strong> — 자녀 주민등록등본·재학증명·의료기록.</li>\n<li><strong>여성가족부 양육비이행심의위 신청서</strong> — 양육비이행관리원이 대신 작성·제출 지원.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 이행명령 단계 건너뛰고 감치 신청하면 기각됩니다. 가사소송법 제68조는 이행명령 후 3기 이상 미이행을 요건으로 하니 순서를 지키세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 양육비 추심 한계 케이스에서 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"비양육자가 무재산이라 어떻게 해도 못 받는다"</strong> — 한부모가족 양육비 선지급(2025년 시행)·긴급 양육비 등 공공 지원 트랙도 있습니다. 양육비이행관리원에 함께 문의.</li>\n<li><strong>"이행명령 후 3기"는 어떤 의미?</strong> — 통상 매달 지급 약정이면 3개월분 미지급. 다른 주기면 그 주기 3회.</li>\n<li><strong>"미지급 양육비도 시간 지나면 없어진다"</strong> — 자녀가 성년이 된 후부터 과거 양육비 청구권 소멸시효 진행(대법원 2018스724). 자녀 성년 전까지는 시효 진행 안 함.</li>\n<li><strong>"양육비 감액 청구가 들어왔다"</strong> — 비양육자가 감액 청구 시 자녀 복리 + 청구인 소득 실질 감소 입증해야 인정(대법원 2022스646). 자녀 성장 = 보통 양육비 증가 방향.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 양육비이행관리원 1644-6621 / 여성가족부 양육비이행심의위 / 가정법원 / 대한법률구조공단 132 / 한부모가족지원센터 1644-6621.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 이행명령은 미이행 의무 범위 내에서만 가능',
        summary:
          '대법원 2025으517 사건(대법원, 2025.05.23 선고)에서 법원은 가사소송법 제64조에 규정된 이행명령은 판결·심판·조정조서·조정을 갈음하는 결정 또는 양육비부담조서에 의해 확정된 의무 중 의무자가 이행하지 아니한 의무의 전부 또는 일부에 대해서만 할 수 있을 뿐이고, 이행하지 아니한 의무의 범위를 넘어서는 할 수 없다고 판시했습니다. 이행명령으로 새로운 의무를 창설하거나 종전 의무를 변경할 수 없으므로, 미지급분 산정·이행명령 청구 범위·확정된 양육비부담조서를 정확히 정리해두는 것이 도움이 됩니다.',
        takeaway: '양육비 추심 한계 상황에서 이행명령·감치를 신청할 때는 미지급 의무 범위를 정확히 산정하고 확정된 집행권원 범위를 넘어서지 않도록 정리해두는 것이 절차 진행에 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '비양육자가 명의를 가족 앞으로 돌렸어요. 추적 가능한가요?',
        answer:
          '<strong>사해행위취소 청구(민법 제406조)로 다툴 수 있습니다.</strong> 양육비 미지급 의도 + 가족 명의 이전 입증되면 등기 무효화 + 강제집행. 시효는 사해행위 안 날부터 1년·있은 날부터 5년.',
      },
      {
        question: '한부모가족 양육비 선지급 제도가 뭐예요?',
        answer:
          '<strong>2025년부터 시행되는 제도로, 정부가 양육비를 선지급하고 비양육자에게 추심합니다.</strong> 미성년 자녀 + 일정 소득 이하 + 양육비 집행권원 보유 요건. 양육비이행관리원·여성가족부 안내.',
      },
      {
        question: '비양육자가 외국에 있는데 이행명령·감치 가능한가요?',
        answer:
          '<strong>국내 송달 어려우면 외국 송달 절차로 진행하지만 시간이 오래 걸립니다.</strong> 헤이그 양육비협약(2025년 가입국 확인) 또는 양자 간 사법공조로 추심 시도. 별도 가이드 참고.',
      },
      {
        question: '감치명령이 나도 비양육자가 회피하면요?',
        answer:
          '<strong>감치집행 회피 시 형사 고발(양육비이행법 제27조) + 출국금지·신상공개로 압박 누적.</strong> 사회적 압박이 결국 회수로 이어지는 사례가 많아요.',
      },
      {
        question: '과거 양육비 청구 시효는 언제부터 진행되나요?',
        answer:
          '<strong>대법원 2018스724에 따르면 자녀가 성년이 되어 양육의무가 종료된 때부터 진행합니다.</strong> 자녀가 미성년인 동안에는 시효 진행 안 함. 다만 성년 후에는 일반 채권 시효 적용되니 너무 늦지 않게 청구.',
      },
    ],
    cta: { text: '양육비 못 받을 때 다음 단계, AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 강제집행 방법', href: '/guide/child-support/child-support-enforcement-method' },
      { label: '양육비 강제집행 절차', href: '/guide/child-support/child-support-enforcement-methods' },
      { label: '양육비 이행명령 신청', href: '/guide/child-support/child-support-enforcement-order-apply' },
      { label: '양육비 감치명령 트랙', href: '/guide/child-support/child-support-enforcement-contempt-order' },
      { label: '양육비 압류·구금 절차', href: '/guide/child-support/child-support-enforcement-attach-imprison' },
    ],
  },

  // ─── 8. child-support / overseas-runaway-pursuit ───
  {
    domain: 'child-support',
    slug: 'child-support-overseas-runaway-pursuit',
    keyword: '비양육자 해외 도주 양육비',
    questionKeyword: '비양육자가 양육비를 안 주고 해외로 나가서 잠적했어요. 외국에서도 추심 가능한가요?',
    ctaKeyword: '비양육자 해외 도주 양육비 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '비양육자 해외 도주 양육비 추심 — 외국 송달 5단계 정리 | 로앤가이드',
      description:
        '비양육자가 해외 거주·잠적해 양육비를 못 받고 있다면 외국 송달·재산 추적·한부모가족 지원 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"이혼한 전 배우자가 양육비 안 주려고 동남아로 나가서 연락도 끊겼어요. 외국에 있으면 추심도 못 한다는데, 자녀 둘 키우면서 막막합니다." 비양육자가 해외 거주·잠적한 케이스는 외국 송달·재산 추적·한부모가족 선지급·헤이그협약 가입국 여부에 따라 트랙이 달라집니다. 시간이 오래 걸리지만 단계별로 누적해 검토해볼 수 있어요. 자녀가 미성년인 동안에는 양육비 청구권 소멸시효가 진행하지 않아 일단 집행권원·재산조회부터 정리해두면 향후 회수에 도움이 됩니다.</p>',
    sections: [
      {
        title: 'Q. 해외 거주 비양육자 추심은 어디서부터 시작하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 출국·거주국·재산 위치에 따라 4가지 트랙으로 갈립니다.</strong></p>\n<ul>\n<li><strong>국내 재산 잔존 케이스</strong> — 부동산·예금·차량 국내에 남아있으면 외국 거주와 무관하게 강제집행 가능. 가장 효과적.</li>\n<li><strong>국내 재산 없음 + 헤이그협약 가입국 거주</strong> — 헤이그 아동부양료협약(2007년 협약) 가입국이면 양국 사법공조로 추심 가능. 한국·미국·유럽 다수 국가.</li>\n<li><strong>비협약 국가 거주 (동남아 등)</strong> — 양국 간 별도 사법공조 또는 직접 외국 변호사 선임. 시간·비용 부담 큼.</li>\n<li><strong>거주국 불명 + 잠적</strong> — 외교부 영사 협조로 소재 파악. 외국 출입국 기록 + 송금 내역으로 추적.</li>\n<li><strong>한부모가족 지원 병행</strong> — 추심 동안 한부모가족 양육비 선지급·아동수당·기초생활수급 등 공공 지원 트랙.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 국내 재산 우선 점검 → 출국 사실·거주국 확인 → 협약 가입국 여부 → 사법공조 또는 외국 변호사 선임. 동시에 한부모가족 공공 지원으로 당장의 양육비 안정화.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 해외 추심 5단계',
        content:
          '<p><strong style="color:#1e3a5f">양육비이행관리원·외교부·법무부 사법공조 절차를 참고하면 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 집행권원 확보 + 국내 재산 조회 (1~2개월)</strong> — 양육비 심판·부담조서. 가사소송법 제48조의2 재산조회로 국내 부동산·예금·차량 확인.</li>\n<li><strong>2단계 — 국내 재산 가압류·강제집행 (있을 경우)</strong> — 외국 거주와 무관하게 국내 재산은 즉시 집행 가능. 가장 빠른 회수 트랙.</li>\n<li><strong>3단계 — 출입국 기록·거주국 확인 (외교부·법무부 조회)</strong> — 출국 일자·거주국. 양육비 5천만원 이상 미지급이면 출국금지(양육비이행법 제21조의4)도 함께 신청.</li>\n<li><strong>4단계 — 외국 송달 + 사법공조 (협약국 6~18개월·비협약국 1~3년)</strong> — 헤이그협약 가입국이면 중앙당국 통한 송달·집행. 비협약국은 외국 변호사 직접 선임 또는 양자 사법공조.</li>\n<li><strong>5단계 — 한부모가족 선지급·공공 지원 병행 (즉시)</strong> — 양육비이행관리원 1644-6621 + 여성가족부 한부모가족지원센터. 당장의 생계 안정화.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 못 받을 때 다음 단계, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">거주국·국내 재산·헤이그협약 가입 여부에 따라 트랙이 갈립니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">외국 송달·재산 추적·공공 지원에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>양육비 집행권원 (외국어 번역본 포함)</strong> — 헤이그 절차에 영문·해당국 언어 번역본 필요. 공증 또는 아포스티유.</li>\n<li><strong>비양육자 인적사항·여권 정보</strong> — 출국 추적·외국 송달의 기초.</li>\n<li><strong>출입국 기록 (법무부 조회 결과)</strong> — 출국일·입국일·거주국 추정.</li>\n<li><strong>국내 재산 조회 결과</strong> — 부동산·예금·차량. 가사소송법 제48조의2 신청.</li>\n<li><strong>해외 송금·통신 내역</strong> — 거주국·재산 단서. 통신사·은행 자료.</li>\n<li><strong>한부모가족 지원 신청서</strong> — 양육비이행관리원·한부모가족지원센터.</li>\n<li><strong>외국 변호사 선임계약 (비협약국)</strong> — 거주국 변호사 직접 선임 시.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 외국 거주라고 포기하면 자녀 성년 후 시효 진행으로 청구 어려워질 수 있어요. 일단 집행권원·재산조회부터 정리해두면 나중에 비양육자가 귀국하거나 재산 발견될 때 즉시 집행 가능합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 해외 도주 양육비 케이스에서 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"외국에 있으니 받을 방법이 없다"</strong> — 국내 재산·귀국·송금 내역으로 추적 가능. 시간이 오래 걸리지만 회수 가능성은 남아 있어요.</li>\n<li><strong>"미성년 자녀 양육비도 시효 5년 지나면 끝난다"</strong> — 대법원 2018스724에 따르면 자녀가 성년이 된 때부터 시효 진행. 미성년 동안은 시효 진행 안 함. 일단 집행권원 확보가 핵심.</li>\n<li><strong>"외국 변호사 선임이 너무 비싸다"</strong> — 헤이그협약 가입국이면 중앙당국 통한 무료·저비용 사법공조 가능. 양육비이행관리원에 협약국 여부 확인.</li>\n<li><strong>"한부모가족 지원받으면 양육비 청구권이 없어진다"</strong> — 한부모가족 선지급은 정부가 비양육자에게 추심하는 구조. 본인 청구권은 그대로 유지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 양육비이행관리원 1644-6621 / 외교부 영사콜센터 +82-2-3210-0404 / 법무부 출입국·외국인정책본부 / 대한법률구조공단 132 / 한부모가족지원센터 1644-6621.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 외국적 양육자 인지판결 확정 전 과거양육비 청구 가능',
        summary:
          '대법원 2023스643 사건(대법원, 2023.10.31 선고)에서 법원은 외국적 요소가 있는 사건이라도 부모는 자녀를 공동 양육할 책임이 있고 양육비도 원칙적으로 공동 부담해야 하므로, 인지판결 확정 전에 발생한 과거 양육비에 대해서도 상대방이 부담함이 상당한 범위 내에서 비용 상환을 청구할 수 있고, 외국적 요소가 있는 사건에서는 법원이 직권으로 국제협약 또는 국제사법에 따른 준거법에 관해 심리·조사할 의무가 있다고 판시했습니다. 비양육자가 해외 거주·외국 국적이 결합된 케이스라도 과거 양육비 청구가 가능하며, 거주국·국적·준거법이 결정 변수가 될 수 있다는 시사점이 있습니다.',
        takeaway: '비양육자 해외 도주 케이스라도 과거 양육비 청구권은 인정될 수 있으며, 거주국·준거법·국제협약 가입 여부에 따라 추심 트랙이 달라지므로 양육비이행관리원·법률구조공단을 통해 협약국 여부부터 확인해두는 것이 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '동남아 국가는 헤이그협약 가입국이 아니라던데 어떻게 하나요?',
        answer:
          '<strong>비협약국이라도 한국과 양자 간 민사사법공조 조약이 있으면 그 조약으로 진행 가능합니다.</strong> 외교부·법무부 통해 확인. 없으면 거주국 변호사 직접 선임 또는 비양육자 귀국 시점 대기.',
      },
      {
        question: '국내에 부동산이 있는데 비양육자 명의예요. 바로 가압류 가능한가요?',
        answer:
          '<strong>집행권원 확보 후 즉시 가압류·강제집행 가능합니다.</strong> 외국 거주와 무관. 양육비 부담조서·심판·조정조서가 집행권원. 가정법원 통해 신청.',
      },
      {
        question: '비양육자가 외국에서 재혼해 새 가정을 꾸렸어요. 추심에 영향 있나요?',
        answer:
          '<strong>재혼 자체는 양육비 의무에 영향이 없습니다.</strong> 다만 새 자녀 부양 부담이 양육비 감액 청구 사유가 될 가능성 있음(대법원 2022스646). 자녀 복리 + 청구인 소득 실질 감소 입증 요건.',
      },
      {
        question: '한부모가족 양육비 선지급은 어떤 요건이에요?',
        answer:
          '<strong>2025년 시행 제도로, 양육비 집행권원 보유 + 미지급 + 일정 소득 이하 + 미성년 자녀 요건입니다.</strong> 정부가 선지급하고 비양육자 추심. 양육비이행관리원·여성가족부 안내.',
      },
      {
        question: '외국 변호사 선임 비용이 너무 비싸요. 도움받을 곳 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 상담을 받아보실 수 있고, 양육비이행관리원이 헤이그 협약국 사법공조를 무료로 지원합니다.</strong> 비협약국 변호사 비용은 본인 부담이지만, 일부 한부모가족 지원센터에서 소송비 보조 프로그램이 있는 사례도 있어요.',
      },
    ],
    cta: { text: '양육비 못 받을 때 다음 단계, AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 해외 거주 추심', href: '/guide/child-support/child-support-overseas-parent-enforcement' },
      { label: '해외 거주 비양육자 양육비', href: '/guide/child-support/child-support-overseas-residence-payment' },
      { label: '해외 비양육자 추적 절차', href: '/guide/child-support/child-support-overseas-parent-pursuit' },
      { label: '양육비 강제집행 방법', href: '/guide/child-support/child-support-enforcement-method' },
      { label: '양육비 이행명령 신청', href: '/guide/child-support/child-support-enforcement-order-apply' },
    ],
  },
];
