import { SpokePage } from '../spoke-pages';

// batch56 jeonse 2 + stalking 2 = 4개:
// 1. 묵시적 갱신 후 임대인 매각 시 보증금 회수 (jeonse)
// 2. 다가구 후순위 임차인 보증금 회수 (jeonse)
// 3. 헤어진 직장동료 회사 출입금지 (stalking)
// 4. 데이팅 앱 매칭 후 집요 연락 (stalking)
//
// 고유 존재 이유:
// 1. 이 페이지는 묵시적 갱신 중 임대인이 주택을 매각해 새 임대인에게 보증금을 받아야 하는 임차인이 임대인 지위 승계 + 보증금 회수 4단계 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 다가구주택에서 후순위로 입주한 임차인이 선순위 보증금·근저당 정황으로 보증금 회수가 어려운 상황에서 우선변제·소액 보증금 보호 4단계 트랙을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 헤어진 직장동료가 회사를 찾아오거나 메일·메신저로 집요하게 연락하는 피해자가 회사 차원의 출입금지 + 스토킹법 잠정조치 결합 트랙을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 데이팅 앱에서 매칭 후 거절했음에도 SNS·메신저로 집요하게 연락하는 가해자에게 시달리는 피해자가 스토킹처벌법 + 잠정조치 + 접근금지 4단계 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch56JeonseStalking: SpokePage[] = [
  // ─── 1. jeonse / jeonse-implicit-renewal-landlord-sale-buyer-deposit ───
  {
    domain: 'jeonse',
    slug: 'jeonse-implicit-renewal-landlord-sale-buyer-deposit',
    keyword: '묵시적 갱신 후 임대인 매각 보증금',
    questionKeyword: '묵시적 갱신된 전세에서 집주인이 집을 팔았어요. 새 집주인에게 보증금 받아야 하나요?',
    ctaKeyword: '묵시적 갱신 매각 보증금 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '묵시적 갱신 임대인 매각 — 4단계 보증금 회수 | 로앤가이드',
      description:
        '묵시적 갱신 중 임대인이 주택을 매각했다면 임대인 지위 승계 + 보증금 회수 4단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3년 전 전세 들어온 후 묵시적으로 1차 갱신됐어요. 그런데 집주인이 집을 팔아서 새 집주인에게 등기가 넘어갔습니다. 새 집주인에게 보증금을 받아야 하나요, 원래 집주인에게 받아야 하나요?" 묵시적 갱신 중 임대인이 주택을 매각하면 ① 주택임대차보호법 제3조 제4항 임대인 지위 자동 승계 ② 양수인이 새 임대인 ③ 양도인 면책 ④ 임차권 대항력 유지 4가지 결과로 정리되는 영역입니다. 대법원 2021다210720 판결은 임차인이 대항요건을 갖춘 경우 양수인은 임대인 지위를 자동 승계한다고 판시했습니다. 따라서 새 집주인에게 보증금 반환 청구가 원칙이며, 새 집주인이 거부하면 ① 임차권등기명령 ② 보증금반환청구 소송 ③ 강제집행 트랙으로 회수 가능한 영역이에요.</p>',
    sections: [
      {
        title: 'Q. 임대인 매각 시 보증금 회수 4가지 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 임대인 지위 승계·임차권등기·보증금 청구·강제집행 4단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 임대인 지위 자동 승계 (주택임대차보호법 제3조 제4항)</strong> — 임차인이 대항요건(전입신고 + 점유) 갖춘 경우 양수인은 임대인 지위 자동 승계. 양도인 면책.</li>\n<li><strong>② 양수인에게 보증금 반환 청구</strong> — 새 집주인에게 보증금 반환 책임. 묵시적 갱신·기간 만료 후 청구 가능.</li>\n<li><strong>③ 임차권등기명령 (주임법 제3조의3)</strong> — 임차인이 이사 후에도 보증금 회수 위해 임차권 등기. 우선변제권 + 대항력 유지.</li>\n<li><strong>④ 보증금반환 소송·강제집행</strong> — 양수인 미반환 시 소송 후 부동산 강제경매. 회수 트랙.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대항요건 + 임대인 매각이면 양수인 자동 승계. 보증금 반환은 새 집주인 책임 영역. 다만 양수인이 보증금 사실을 알지 못한 \'선의\' 정황이라면 양도인 책임 다툼 가능 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 양수인 통지 → 임차권등기 → 소송 → 강제집행 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 임대차계약서·전입신고·등기부등본(매각 전후)·보증금 지급 영수증.</li>\n<li><strong>2단계 — 새 임대인에게 통지·청구 (이사 1개월 전)</strong> — 묵시적 갱신 중 또는 만료 후 보증금 반환 요구 내용증명.</li>\n<li><strong>3단계 — 임차권등기명령 신청 (이사 후 회수 어려울 시)</strong> — 관할 법원에 신청. 등기 완료 후 이사 가능. 우선변제권 유지.</li>\n<li><strong>4단계 — 보증금반환 소송 (양수인 거부 시)</strong> — 지급명령(전자) 또는 소액심판(3,000만원 이하) 또는 일반 민사.</li>\n<li><strong>5단계 — 강제집행 (판결 확정 후)</strong> — 양수인 부동산 강제경매. 우선변제권으로 회수.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">묵시적 갱신 매각 4단계 회수 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 임대차 자료 + 매각 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·갱신 정황</strong> — 묵시적 갱신 입증.</li>\n<li><strong>전입신고·확정일자 자료</strong> — 대항요건·우선변제권.</li>\n<li><strong>등기부등본 (매각 전후)</strong> — 양수인 정보·매각 시점.</li>\n<li><strong>보증금 지급 영수증·송금 내역</strong> — 보증금 액수.</li>\n<li><strong>새 임대인 연락처·주소</strong> — 청구 상대.</li>\n<li><strong>내용증명 사본</strong> — 청구 자료.</li>\n<li><strong>임차권등기명령 신청서</strong> — 관할 법원 양식.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 매각 직전 양도인이 보증금 일부를 반환하고 매도한 정황이 있다면 양수인 인수 보증금 액수 다툼 가능 영역. 매도 자료·정산 자료 보존이 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 새 임대인 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"본인은 매수만 했고 보증금은 모른다" 주장 반박</strong> — 임대인 지위 자동 승계는 강행규정. 매수인이 보증금 사실을 몰랐어도 책임 영역(2021다210720).</li>\n<li><strong>"양도인에게 받아라" 주장 반박</strong> — 양수인 자동 승계 시 양도인 면책. 다만 양수인이 \'선의\'였다면 양도인 책임 다툼 가능 영역.</li>\n<li><strong>"보증금 일부 정산했다" 주장 검토</strong> — 매도 시 정산 자료 + 임차인 동의 정황 검토. 임차인 미동의 정산은 무효 다툼.</li>\n<li><strong>HUG 보증보험 가입 시 트랙</strong> — HUG 가입 시 보증사고 신고 + HUG 대위변제 + 임대인 구상권 트랙.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 임대차 무료 상담.</li>\n<li><strong>HUG 1566-9009</strong> — 전세보증보험 사고 신고.</li>\n<li><strong>전세사기피해지원센터 1533-8119</strong> — 전세 피해 종합 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차인 대항요건과 양수인 임대인 지위 자동 승계',
        summary:
          '대법원 2021다210720 사건(대법원, 2022.03.17 선고)에서 법원은 매도인이 악의인 계약명의신탁의 명의수탁자로부터 주택을 임차하여 주택임대차보호법 제3조 제1항의 대항요건을 갖춘 임차인은 명의수탁자의 등기가 말소돼 등기명의를 회복한 매도인과 그로부터 다시 등기를 마친 명의신탁자에 대해서도 임차권을 대항할 수 있고, 명의신탁자는 주택임대차보호법 제3조 제4항에 따라 임대인의 지위를 승계한다고 판시했습니다. 임차인이 대항요건을 갖춘 경우 새로운 소유자가 임대인 지위를 자동 승계한다는 원칙입니다.',
        takeaway: '묵시적 갱신 중 임대인 매각 시 새 집주인이 임대인 지위 자동 승계 영역이라, 임대차계약·전입신고·등기부등본 자료를 정리하면 보증금 회수 4단계 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '새 집주인이 보증금 책임 없다고 합니다',
        answer:
          '<strong>임대인 지위 자동 승계라 새 집주인 책임 영역입니다.</strong> 임차인이 대항요건(전입신고 + 점유) 갖춘 경우 자동 승계. 새 집주인의 \'몰랐다\' 주장은 책임 면제 사유 부족.',
      },
      {
        question: '임차권등기명령 신청 비용은 얼마인가요?',
        answer:
          '<strong>인지대 + 송달료 영역으로 5~10만원 수준입니다.</strong> 자력 변호사 또는 법률구조공단 132 무료 자문 가능. 임차권등기 후 우선변제권 유지.',
      },
      {
        question: '이사 후에도 임차권 등기 가능한가요?',
        answer:
          '<strong>가능하지만 이사 전 신청이 안전합니다.</strong> 임차권등기 완료 전 이사하면 우선변제권 상실 위험. 등기 완료 확인 후 이사 권장.',
      },
      {
        question: '양도인이 매각 직전 보증금 일부 반환했다고 합니다',
        answer:
          '<strong>임차인 동의 없는 정산은 무효 다툼 가능 영역입니다.</strong> 본인이 보증금 일부 수령 사실 + 동의서 없으면 새 집주인에 잔여분 청구 가능.',
      },
      {
        question: 'HUG 보증보험 가입돼 있어요',
        answer:
          '<strong>HUG 보증사고 신고 + 대위변제 트랙이 가장 빠른 회수입니다.</strong> 보증서 + 임대차계약·전입신고 자료로 신청. HUG가 본인에게 보증금 지급 후 임대인 구상권 행사.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '집주인 변경 보증금 위험', href: '/guide/jeonse/jeonse-landlord-change-deposit-risk' },
      { label: '집 매각 새 집주인 책임', href: '/guide/jeonse/jeonse-house-sold-new-landlord-deposit' },
      { label: '집주인 매각 보증금 승계', href: '/guide/jeonse/jeonse-landlord-sold-deposit-successor-liability' },
      { label: '묵시적 갱신 종료 통보', href: '/guide/jeonse/jeonse-implicit-renewal-tenant-termination-notice' },
      { label: '보증금 반환 종합 가이드', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
    ],
  },

  // ─── 2. jeonse / jeonse-multifamily-junior-tenant-recovery ───
  {
    domain: 'jeonse',
    slug: 'jeonse-multifamily-junior-tenant-recovery',
    keyword: '다가구 후순위 임차인 보증금 회수',
    questionKeyword: '다가구주택에 늦게 입주한 임차인이라 보증금 회수가 어려워요. 어떻게 해야 하나요?',
    ctaKeyword: '다가구 후순위 보증금 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '다가구 후순위 임차인 보증금 회수 — 4가지 트랙 | 로앤가이드',
      description:
        '다가구주택 후순위 임차인이라 보증금 회수가 어렵다면 우선변제·소액 보증금 보호·HUG 4가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"다가구주택 4층에 입주했는데 1·2·3층 임차인보다 늦게 들어와서 후순위가 됐어요. 집주인이 갑자기 경매에 들어가는데 보증금 1억 5천 회수 가능한가요?" 다가구주택은 한 건물에 여러 임차인이 있고 보증금 합산이 시세를 초과하는 사례가 많아 후순위 임차인 보증금 회수가 어려운 영역입니다. ① 주택임대차보호법 제3조의2 우선변제권 ② 제8조 소액보증금 최우선변제 ③ 임차권등기 ④ HUG 보증보험 4가지 트랙으로 회수 가능성이 검토되는 영역이에요. 본인 보증금이 \'소액\'에 해당하면 선순위 임차인보다 먼저 일정 한도 보장. 본인이 \'우선변제권\' 충족 시(전입+점유+확정일자) 매각대금에서 순위대로 변제받습니다.</p>',
    sections: [
      {
        title: 'Q. 다가구 후순위 4가지 회수 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 우선변제·소액보증금·임차권등기·HUG 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 우선변제권 (주택임대차보호법 제3조의2)</strong> — 전입 + 점유 + 확정일자 충족 시 매각대금에서 순위대로 변제. 후순위라도 선순위 변제 후 잔여분에서 회수 가능 영역.</li>\n<li><strong>② 소액보증금 최우선변제 (제8조)</strong> — 본인 보증금이 일정 금액 이하면 선순위 변제와 무관하게 최우선 일정 한도 보장. 지역별 기준 다름.</li>\n<li><strong>③ 임차권등기명령</strong> — 이사 후에도 권리 유지. 우선변제권·대항력 보존.</li>\n<li><strong>④ HUG 전세보증금 반환보증</strong> — 가입 시 보증사고 신고 + 대위변제. 다가구도 가입 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 후순위라도 본인 보증금이 \'소액\' 한도면 최우선변제로 일정 보장. 한도 초과분은 매각대금 잔여로 회수 영역. 빠른 임차권등기 + HUG 가입 검토가 안전.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 임차권등기 → 경매 배당요구 → 우선변제 → 잔여 청구 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 임대차계약서·전입신고·확정일자·등기부등본·다른 임차인 정보.</li>\n<li><strong>2단계 — 임차권등기명령 (회수 어려울 시)</strong> — 관할 법원 신청. 등기 완료 후 이사 가능.</li>\n<li><strong>3단계 — 경매 배당요구 (경매 시)</strong> — 경매 개시일로부터 일정 기간 내 배당요구 신청. 우선변제권 행사.</li>\n<li><strong>4단계 — 매각대금 우선변제·소액보증금</strong> — 본인 순위대로 변제 + 소액 한도 최우선변제.</li>\n<li><strong>5단계 — 잔여분 회수 (HUG 또는 임대인 청구)</strong> — HUG 가입 시 대위변제. 미가입이면 임대인 잔여 청구권.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">다가구 후순위 4가지 회수 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 임차 자료 + 다른 임차인 정황 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·확정일자</strong> — 우선변제권 입증.</li>\n<li><strong>전입신고·점유 자료</strong> — 대항요건.</li>\n<li><strong>등기부등본·근저당 정보</strong> — 선순위 채권 확인.</li>\n<li><strong>다른 임차인 정보</strong> — 보증금 합산·순위 확인.</li>\n<li><strong>건물 시가·감정평가</strong> — 매각 후 잔여 가능성.</li>\n<li><strong>HUG 보증서 (가입 시)</strong> — 대위변제 신청.</li>\n<li><strong>임차권등기명령 신청서</strong> — 회수 사전 조치.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 입주 전 동기 임차인 보증금 합산이 시세에 가까운지 확인이 핵심 예방. 다가구는 \'한 건물 = 한 부동산\'이라 시세 대비 보증금 합산이 80% 이하 영역이 안전.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회수 한계와 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>선순위 채권 우선 변제</strong> — 근저당·선순위 임차인 변제 후 본인 순위. 잔여 부족 시 일부 회수만 가능 영역.</li>\n<li><strong>소액보증금 한도 확인</strong> — 지역별 다름. 서울 1억 6,500만원·수도권 1억 4,500만원·기타 지역별 다름. 한도 초과 시 최우선변제 부재.</li>\n<li><strong>임대인 잔여 청구권 한계</strong> — 임대인 무자력이면 잔여 청구해도 회수 어려움. HUG 가입이 안전.</li>\n<li><strong>HUG 가입 시점 주의</strong> — 입주 전 또는 일정 기간 내 가입 가능. 사후 가입은 거부 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 임대차 무료 상담.</li>\n<li><strong>HUG 1566-9009</strong> — 전세보증보험 안내.</li>\n<li><strong>전세사기피해지원센터 1533-8119</strong> — 전세 피해 종합 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다가구 임차인 대항력과 우선변제권',
        summary:
          '대법원 2023다259743 사건(대법원, 2023.11.30 선고)에서 법원은 다가구주택 일부에 대한 임대차계약을 중개한 부동산중개업자의 주의의무 이행 여부를 다룬 사례에서, 중개업자가 다가구주택의 다른 임대차 정황을 임차의뢰인에게 설명할 의무가 있다고 판시했습니다. 다가구는 임차인 사이의 우선변제 순위 + 소액보증금 최우선변제가 결합된 복잡한 영역으로, 임차인 보호를 위해 중개업자의 설명의무가 강조되는 영역입니다.',
        takeaway: '다가구 후순위 임차인은 우선변제권 + 소액보증금 + HUG 결합 트랙으로 회수 가능성이 검토되는 영역이라, 계약·전입·확정일자·다른 임차인 정황 자료를 정리하면 4가지 회수 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '소액보증금 한도가 얼마인가요?',
        answer:
          '<strong>지역별 다릅니다(서울 1억 6,500만원·수도권 1억 4,500만원 등).</strong> 본인 보증금이 한도 이하라면 일정 금액 최우선변제. 한도 초과라면 일반 우선변제 트랙.',
      },
      {
        question: 'HUG 가입 안 했는데 지금 가입 가능한가요?',
        answer:
          '<strong>입주 후 일정 기간 내 가능하지만 매각 임박이라면 어려운 영역입니다.</strong> HUG 1566-9009 상담 + 즉시 신청. 미가입 시 임차권등기 + 경매 배당요구 트랙.',
      },
      {
        question: '경매 시 배당요구 안 하면 어떻게 되나요?',
        answer:
          '<strong>배당요구 미신청 시 변제 못 받는 영역입니다.</strong> 경매 개시일로부터 일정 기간 내(통상 첫 매각기일 전까지) 배당요구 필수.',
      },
      {
        question: '본인 보증금이 시세보다 큰데 어떻게 회수하나요?',
        answer:
          '<strong>매각대금 잔여분 + 임대인 잔여 청구권 영역입니다.</strong> 다만 임대인 무자력이면 회수 어려움. HUG 가입이 안전 트랙.',
      },
      {
        question: '다른 임차인은 미리 이사 갔는데 본인만 남았어요',
        answer:
          '<strong>본인 임차권등기 + 우선변제권 행사가 핵심입니다.</strong> 이사 가지 않아도 임차권등기로 권리 유지. 경매 배당요구 트랙으로 회수 검토.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '다가구 우선변제 신청', href: '/guide/jeonse/jeonse-multi-family-priority-claim' },
      { label: '다가구 우선변제 HUG 미가입', href: '/guide/jeonse/jeonse-multifamily-priority-payment-no-hug' },
      { label: '경매 보증금 우선', href: '/guide/jeonse/jeonse-auction-deposit-priority' },
      { label: '경매 배당 절차', href: '/guide/jeonse/jeonse-auction-priority-distribution-procedure' },
      { label: '소액보증금 우선변제', href: '/guide/jeonse/jeonse-auction-small-deposit-priority-repay' },
    ],
  },

  // ─── 3. stalking / stalking-ex-coworker-office-entry-ban ───
  {
    domain: 'stalking',
    slug: 'stalking-ex-coworker-office-entry-ban',
    keyword: '헤어진 직장동료 회사 출입금지',
    questionKeyword: '헤어진 전 동료가 회사를 찾아오고 메신저로 집요하게 연락해요. 어떻게 막나요?',
    ctaKeyword: '직장 스토킹 출입금지 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '헤어진 직장동료 스토킹 — 4단계 출입금지·잠정조치 | 로앤가이드',
      description:
        '헤어진 직장동료가 회사를 찾아오거나 집요하게 연락한다면 회사 출입금지 + 스토킹법 잠정조치 4단계를 지금 확인하세요.',
    },
    intro:
      '<p>"3개월 전 헤어진 전 동료가 회사 로비에서 본인을 기다리거나 회사 메신저로 \'잠깐 얘기 좀 하자\'고 집요하게 연락해요. 회사 보안팀에 신고했지만 \'개인 사정\'이라며 적극 대응을 안 합니다." 헤어진 직장동료의 스토킹은 ① 스토킹범죄처벌법 제2조 스토킹행위 ② 회사 차원 출입금지·시설 보호 의무 ③ 스토킹법 제8조 잠정조치 ④ 정보통신망법 결합 트랙으로 대응 가능한 영역입니다. 회사 메신저·이메일 통한 집요 연락도 정보통신망법 + 스토킹법 결합 영역. 잠정조치 신청은 검사가 청구하지만 본인이 경찰에 사건 접수 후 잠정조치 청구 요청 가능. 회사 차원에서는 보안팀 출입금지 + HR 신고 트랙도 결합 가능합니다.</p>',
    sections: [
      {
        title: 'Q. 직장 스토킹 4가지 대응 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 스토킹법 신고·잠정조치·회사 출입금지·민사 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 스토킹범죄 신고 (스토킹처벌법 제2조)</strong> — 지속·반복 접근·대기·연락은 스토킹행위. 112 또는 ecrm.police.go.kr 신고.</li>\n<li><strong>② 잠정조치 청구 (제8조)</strong> — 검사가 법원에 청구. 100m 이내 접근 금지·전기통신 이용 금지·구치소 유치 등.</li>\n<li><strong>③ 회사 출입금지·HR 신고</strong> — 회사 보안팀에 출입증 정지 요청 + HR에 직장 내 괴롭힘 신고. 회사 안전 의무 결합.</li>\n<li><strong>④ 정보통신망법 + 민사 손해배상</strong> — 메신저·이메일 집요 연락은 정보통신망법 명예훼손·정보통신망 침해 결합 가능. 위자료 민사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직장 스토킹은 스토킹법 + 회사 차원 + 정보통신망법 결합 영역. 신고 자료 + 회사 보안 협조 + 잠정조치 동시 진행이 효과적.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 신고 → 잠정조치 → 회사 협조 → 형사 본안 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 회사 로비 CCTV·메신저 캡처·이메일·통화 기록·동료 증언.</li>\n<li><strong>2단계 — 경찰 신고 (즉시)</strong> — 112 또는 사이버범죄 신고시스템(ecrm.police.go.kr). 스토킹 사건 접수 + 사건번호 받기.</li>\n<li><strong>3단계 — 잠정조치 청구 요청 (1~2주)</strong> — 검사가 법원에 100m 이내 접근 금지·전기통신 금지 잠정조치 청구.</li>\n<li><strong>4단계 — 회사 협조 (즉시)</strong> — 보안팀 출입증 정지 + HR 신고. 직장 내 괴롭힘으로 회사 안전 의무 결합.</li>\n<li><strong>5단계 — 형사 본안·민사 (잠정조치 후)</strong> — 스토킹범죄처벌법 절차. 위자료 민사 손해배상 결합.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">직장 스토킹 4단계 대응을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 스토킹 정황 + 회사 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>회사 로비 CCTV 보존 요청</strong> — 출입·대기 정황.</li>\n<li><strong>메신저·이메일 캡처</strong> — 집요 연락 시점·횟수.</li>\n<li><strong>통화 기록·녹취</strong> — 본인 거부 + 상대 반복 연락.</li>\n<li><strong>동료 증언</strong> — 회사 내 목격 정황.</li>\n<li><strong>회사 신고 기록</strong> — 보안팀·HR 신고일·대응.</li>\n<li><strong>경찰 사건번호·접수증</strong> — 스토킹 신고.</li>\n<li><strong>피해 자료</strong> — 정신과 진료·진단서.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사 로비 CCTV는 보존기간이 짧은 사례 다수(7~14일). 사건 발생 즉시 보존 요청 필수. 본인이 거부 의사를 명확히 표시한 메시지가 잠정조치의 강력한 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 가해자 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"단순 안부였다" 주장 반박</strong> — 본인 거부 + 반복 연락 정황 결합 시 스토킹 인정 영역. 거부 의사 명확 메시지가 핵심 자료.</li>\n<li><strong>"같은 회사라 우연히 만났다" 주장 반박</strong> — 본인 출퇴근 시간·장소 패턴화 정황이라면 우연 부정 영역.</li>\n<li><strong>회사 측 비협조 정황 대응</strong> — 회사가 출입금지 거부 시 직장 내 괴롭힘으로 별도 노동청 신고 트랙.</li>\n<li><strong>잠정조치 위반 시 가중 처벌</strong> — 잠정조치 후 위반 시 별도 처벌(최대 2년 이하 징역). 위반 시 즉시 경찰 신고.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.police.go.kr) / 182</strong></li>\n<li><strong>여성긴급전화 1366</strong> — 24시간 상담.</li>\n<li><strong>스토킹 피해자 지원 (한국여성의전화 02-2263-6464)</strong></li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 스토킹 잠정조치 접근금지의 효력',
        summary:
          '대법원 2022모2092 사건(대법원, 2023.02.23 선고)에서 법원은 스토킹범죄처벌법 제9조 제1항 제2·3호의 접근금지 잠정조치는 기간이 정해져 있으나 연장 가능하며, 검사가 기간 만료된 잠정조치에 대해 동일한 스토킹범죄사실과 재발 우려를 이유로 다시 새로운 잠정조치를 청구할 수 있다고 판시했습니다. 또한 대법원 2024도7832(2024.09.27)는 부재중 전화·수신차단기호 표시도 잠정조치 위반으로 인정될 수 있음을 보여, 잠정조치 보호의 폭이 넓다는 시사점을 제공합니다.',
        takeaway: '직장 스토킹은 스토킹법 + 회사 차원 + 정보통신망법 결합 영역으로, CCTV·메신저·신고 자료를 정리하면 4단계 대응 트랙이 모두 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '회사가 출입금지 협조를 안 해줘요',
        answer:
          '<strong>직장 내 괴롭힘 + 회사 안전 의무 위반 트랙으로 압박 가능합니다.</strong> 노동청 진정 + HR 공식 신고 + 사내 안전관리자 협의. 회사 차원 미응답 시 노무사 자문 검토.',
      },
      {
        question: '잠정조치 받으려면 어떤 자료가 필요한가요?',
        answer:
          '<strong>지속·반복 정황 자료가 핵심입니다.</strong> 메신저 캡처·통화 기록·CCTV·동료 증언 + 본인 거부 의사 표시 자료. 경찰 신고 후 검사가 잠정조치 청구.',
      },
      {
        question: '같은 회사 동료라 잠정조치가 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 같은 회사라도 100m 이내 접근 금지·전기통신 금지 잠정조치 가능. 다만 업무 공간 범위 조정 가능 영역. 변호사 자문.',
      },
      {
        question: '메신저 차단했더니 새 계정으로 또 와요',
        answer:
          '<strong>새 계정으로의 반복 연락도 잠정조치 위반 + 스토킹 가중 영역입니다.</strong> 즉시 경찰 신고 + 새 계정 캡처 + 잠정조치 위반 추가 신고.',
      },
      {
        question: '회사 그만두는 게 답인가요?',
        answer:
          '<strong>회사 그만둘 필요 없는 영역입니다.</strong> 잠정조치 + 회사 출입금지로 보호 가능. 다만 본인 안전 우선이라면 일시 부서 이동·재택근무 협의도 검토.',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '동료 거절 후 추적', href: '/guide/stalking/stalking-coworker-rejected-pursuit-procedure' },
      { label: '직장 스토킹 형사 대응', href: '/guide/stalking/stalking-workplace-coworker-criminal' },
      { label: '동료 반복 접근 대응', href: '/guide/stalking/stalking-coworker-repeated-approach' },
      { label: '직장 상사 보고 트랙', href: '/guide/stalking/stalking-workplace-supervisor-report' },
      { label: '잠정조치 적용 효과', href: '/guide/stalking/stalking-provisional-measure-application-effect' },
    ],
  },

  // ─── 4. stalking / stalking-dating-app-match-persistent-contact ───
  {
    domain: 'stalking',
    slug: 'stalking-dating-app-match-persistent-contact',
    keyword: '데이팅 앱 매칭 후 집요 연락',
    questionKeyword: '데이팅 앱에서 한 번 매칭한 사람이 거절했는데도 SNS·전화로 집요하게 연락해요. 어떻게 하나요?',
    ctaKeyword: '데이팅 앱 스토킹 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '데이팅 앱 매칭 후 집요 연락 — 4단계 대응 | 로앤가이드',
      description:
        '데이팅 앱에서 매칭한 사람이 거절 후에도 SNS·전화로 집요하게 연락한다면 스토킹법 + 잠정조치 4단계 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"데이팅 앱에서 한 번 매칭하고 만났는데 본인이 \'더 이상 연락 안 하셨으면 좋겠다\'고 거절했어요. 그런데도 SNS DM·전화·문자로 \'한 번만 더 만나달라\'며 일주일째 집요하게 연락해옵니다." 데이팅 앱 스토킹은 ① 스토킹범죄처벌법 제2조 ② 정보통신망법 ③ 잠정조치 ④ 데이팅 앱 신고 4가지 트랙으로 대응 가능한 영역입니다. 본인이 명확한 거절 의사 표시 후 반복 연락은 \'지속·반복적 접근\' 정황으로 스토킹 인정 영역. 데이팅 앱 자체 신고로 가해자 계정 차단 가능하지만, 새 계정·SNS·전화로의 우회 연락도 함께 잠정조치로 차단해야 안전합니다. 본인 신상 유출 정황 결합 시 정보통신망법까지 결합 가능해요.</p>',
    sections: [
      {
        title: 'Q. 데이팅 앱 스토킹 4가지 대응 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 스토킹법·앱 신고·잠정조치·정보통신망법 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 스토킹범죄처벌법</strong> — 거절 후 반복 연락은 지속·반복 정황. 112 또는 ecrm.police.go.kr 신고.</li>\n<li><strong>② 데이팅 앱 신고</strong> — 앱 자체 신고로 계정 차단 + 활동 제한. 다만 새 계정·SNS·전화 우회 한계 영역.</li>\n<li><strong>③ 잠정조치 (스토킹법 제8조)</strong> — 100m 이내 접근 금지·전기통신 금지·기타 보호조치. 검사 청구.</li>\n<li><strong>④ 정보통신망법 명예훼손·정보통신망 침해</strong> — 본인 신상 유출·SNS 협박·DM 공격 결합 시 추가 처벌 트랙.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 본인 거부 의사 표시 자료 + 반복 연락 자료가 잠정조치의 핵심. 데이팅 앱 메시지는 백업·캡처 즉시. 새 계정으로 우회 시 추가 신고.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 앱 신고 → 경찰 신고 → 잠정조치 → 형사 본안 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 데이팅 앱 메시지·SNS DM·전화 기록·문자·본인 거부 의사 표시 자료.</li>\n<li><strong>2단계 — 데이팅 앱 신고 (1~3일)</strong> — 앱 신고 기능으로 계정 차단 요청. 평균 1~3일 처리.</li>\n<li><strong>3단계 — 경찰 신고 (즉시·1주 내)</strong> — 112 또는 ecrm.police.go.kr. 스토킹 사건 접수 + 사건번호.</li>\n<li><strong>4단계 — 잠정조치 청구</strong> — 검사가 100m 접근 금지·전기통신 금지 청구. 위반 시 추가 처벌.</li>\n<li><strong>5단계 — 형사 본안·민사</strong> — 스토킹법 본안 + 위자료 민사. 신상 유출 결합 시 정보통신망법 추가.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">데이팅 앱 스토킹 4단계 대응을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 연락 자료 + 본인 거부 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>데이팅 앱 메시지 캡처</strong> — 매칭 + 거부 + 반복 연락.</li>\n<li><strong>SNS DM·계정 캡처</strong> — 인스타·페북·트위터.</li>\n<li><strong>전화 기록·문자</strong> — 통화 횟수·시점.</li>\n<li><strong>본인 거부 의사 표시</strong> — \'더 이상 연락 마세요\' 자료.</li>\n<li><strong>가해자 정보</strong> — 본명·연락처·SNS 핸들.</li>\n<li><strong>신상 유출 정황</strong> — 본인 신상 사용·공개 정황.</li>\n<li><strong>피해 자료</strong> — 정신과 진료·진단서.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인 거부 의사를 명확하고 일관되게 표시한 자료가 잠정조치 결정의 핵심. 거부 후 반복 연락 횟수가 일주일 5건 이상이면 강한 정황 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 가해자 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"좋은 의도로 연락한 거다" 주장 반박</strong> — 본인 거부 의사 표시 후 반복 연락은 의도 무관 스토킹 영역.</li>\n<li><strong>"한 번만 더" 변명 반박</strong> — \'한 번만 더\'가 반복되면 지속·반복 정황. 잠정조치 + 형사 처벌 트랙.</li>\n<li><strong>새 계정·SNS 우회 시 추가 신고</strong> — 차단 후 새 계정·SNS·전화로 우회 시 즉시 추가 신고. 잠정조치 위반 가중.</li>\n<li><strong>본인 신상 유출 시 정보통신망법 결합</strong> — SNS에 본인 신상 공개·DM 협박 결합 시 정보통신망법 추가 신고.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.police.go.kr) / 182</strong></li>\n<li><strong>여성긴급전화 1366</strong> — 24시간 상담.</li>\n<li><strong>한국여성의전화 02-2263-6464</strong> — 스토킹 피해자 지원.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부재중 전화·수신차단 표시도 잠정조치 위반',
        summary:
          '대법원 2024도7832 사건(대법원, 2024.09.27 선고)에서 법원은 피고인이 전화를 걸어 피해자 휴대전화에 부재중 전화 문구·수신차단기호 등이 표시되도록 한 경우, 실제 전화통화가 이루어졌는지와 상관없이 \'전화의 부호·문언을 송신하지 말 것\'을 명하는 잠정조치를 위반한 것이라고 판시했습니다. 데이팅 앱·SNS·전화 우회 연락도 잠정조치 위반 대상이 되는 영역으로 평가될 여지가 있습니다.',
        takeaway: '데이팅 앱 스토킹은 앱 신고 + 경찰 신고 + 잠정조치 + 정보통신망법 결합 영역이라, 메시지·SNS DM·전화 자료를 시간순 정리하면 4단계 대응 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '한 번 만났을 뿐인데 스토킹 인정되나요?',
        answer:
          '<strong>한 번 만남 후 거부에도 반복 연락이면 스토킹 인정 영역입니다.</strong> 만난 횟수보다 거부 후 반복 연락 정황이 핵심.',
      },
      {
        question: '데이팅 앱이 가해자 정보 공개 안 해줍니다',
        answer:
          '<strong>경찰 수사 의뢰 + 통신사실확인자료로 추적 가능 영역입니다.</strong> 앱 측 정보 공개 거부 시 경찰을 통해 수사 절차로 진행.',
      },
      {
        question: '본인이 차단했더니 다른 친구를 통해 연락 와요',
        answer:
          '<strong>제3자를 통한 우회 연락도 스토킹 영역입니다.</strong> 친구·가족·동료를 통한 메시지 전달도 지속·반복 정황. 즉시 추가 신고.',
      },
      {
        question: '잠정조치 받으면 가해자 신상이 본인에게 공개되나요?',
        answer:
          '<strong>잠정조치 결정문은 본인이 받지만 가해자 주소·신상은 보호되는 영역입니다.</strong> 다만 형사 절차 진행 시 본명·연락처는 변호사 통해 확인 가능.',
      },
      {
        question: '본인 SNS에 가해자가 글 올렸어요',
        answer:
          '<strong>정보통신망법 명예훼손·모욕 결합 신고 가능합니다.</strong> 본인 신상·사진 공개 결합 시 가중 영역. 캡처 + 즉시 신고 + 삭제 요청.',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '전 연인 반복 연락', href: '/guide/stalking/stalking-ex-partner-repeated-contact' },
      { label: '전 연인 메시지 형사', href: '/guide/stalking/stalking-ex-partner-message-criminal' },
      { label: '온라인 SNS DM 차단', href: '/guide/stalking/stalking-sns-dm-block-fake-account-repeat' },
      { label: '온라인 게임 괴롭힘', href: '/guide/stalking/stalking-online-game-harassment-checklist' },
      { label: '잠정조치 적용 효과', href: '/guide/stalking/stalking-provisional-measure-application-effect' },
    ],
  },
];
