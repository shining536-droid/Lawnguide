import { SpokePage } from '../spoke-pages';

// batch65 divorce(4) + inheritance(3) — 7개 (2026-05-15)
//
// 고유 존재 이유:
// 1. divorce-cooling-period-domestic-violence-waiver-track — 가정폭력·아동학대 시 협의이혼 숙려기간 면제 절차.
// 2. divorce-personal-debt-marriage-property-division-track — 혼인 중 한쪽 배우자 개인 채무가 재산분할 비율에 미치는 영향.
// 3. divorce-couple-business-account-mixed-discovery-track — 부부 공동사업·개인계좌 혼재 시 재산분할 입증 다툼.
// 4. divorce-self-employed-spouse-income-hidden-track — 자영업 배우자의 소득 은닉·이중장부 대응.
// 5. inheritance-living-trust-property-disposal-track — 생전 신탁으로 사전 재산 처분(유류분 회피) 대응.
// 6. inheritance-overseas-asset-double-taxation-track — 해외 부동산·금융자산 상속세 이중과세·외국납부세액공제.
// 7. inheritance-cohabitation-no-marriage-no-rights-track — 사실혼 배우자 상속권 부재 + 기여분·재산분할 한계.

export const spokesBatch65DivorceInheritance: SpokePage[] = [
  // ─── 1. divorce-cooling-period-domestic-violence-waiver-track ───
  {
    domain: 'divorce',
    slug: 'divorce-cooling-period-domestic-violence-waiver-track',
    keyword: '협의이혼 숙려기간 면제',
    questionKeyword: '가정폭력으로 더는 못 살겠습니다. 협의이혼 숙려기간 1~3개월 기다려야 하나요?',
    ctaKeyword: '숙려기간 면제 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '협의이혼 숙려기간 면제 — 5단계 가정폭력 즉시 진행 | 로앤가이드',
      description:
        '가정폭력·아동학대로 협의이혼 숙려기간을 면제받아야 한다면 5가지 신청 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배우자 폭력이 5년째 반복돼 협의이혼을 결심했어요. 그런데 미성년 자녀가 있어 \"숙려기간 3개월\"이라는 안내. 그 사이에 또 폭력이 있을까 너무 두렵습니다. 이미 1366·112 신고 이력도 있고 진단서도 있어요.\" 민법 제836조의2 제3항은 \"가정폭력 등 급박한 사정이 있는 경우 가정법원이 숙려기간을 단축·면제할 수 있다\"고 정한 영역. ① 미성년 자녀 있을 때 3개월, 없으면 1개월 ② 가정폭력·아동학대·중대 사유 시 단축·면제 신청 ③ 가정법원 즉시 결정 ④ 협의이혼 의사확인 ⑤ 신고 5가지 트랙이 핵심. 이력·진단서·신고기록으로 \"급박한 사정\"이 인정될 여지가 있는 영역입니다. 대응은 ① 사유 정리 ② 신청서 ③ 결정 ④ 의사확인 ⑤ 신고 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 숙려기간 면제 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사유·신청·결정·확인·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 급박한 사정 정리</strong> — 가정폭력·아동학대·생명 위협.</li>\n<li><strong>② 숙려기간 단축·면제 신청서 제출</strong> — 가정법원.</li>\n<li><strong>③ 가정법원 즉시 결정</strong> — 단축·면제 인용 시 당일·수일 내.</li>\n<li><strong>④ 협의이혼 의사확인 기일</strong> — 단축된 일정.</li>\n<li><strong>⑤ 이혼 신고 (확인서 발급 후 3개월 내)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 1366·112 신고기록 + 진단서 + 카톡 사과 메시지가 누적된 사례는 \"급박한 사정\"이 인정될 여지가 있는 영역. 임시보호명령과 병행 검토 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신청·심리·확인 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 협의이혼 의사확인 신청 (가정법원, 즉시)</strong> — 동시 단축·면제 신청서.</li>\n<li><strong>2단계 — 사유 입증 자료 첨부 (당일)</strong> — 신고기록·진단서·녹취.</li>\n<li><strong>3단계 — 가정법원 결정 (수일 내)</strong> — 단축·면제 인용·기각.</li>\n<li><strong>4단계 — 의사확인 기일 출석 (단축된 일정)</strong> — 미성년 자녀 합의서 동시.</li>\n<li><strong>5단계 — 협의이혼 신고 (3개월 내)</strong> — 시청·구청 가족관계등록부.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">숙려기간 면제 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사유 입증·이혼·자녀 갈래입니다.</strong></p>\n<ul>\n<li><strong>가정폭력·아동학대 진단서 (응급실·정신과)</strong></li>\n<li><strong>112·1366 신고 이력서·경찰 사건사실확인원</strong></li>\n<li><strong>카톡·문자 사과·폭언 녹음</strong></li>\n<li><strong>임시보호명령 결정문 (있을 시)</strong></li>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>자녀 양육·친권 합의서 (미성년 시)</strong></li>\n<li><strong>본인·배우자 신분증·도장</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 의사확인 기일에 배우자가 출석을 거부·기피하면 협의이혼은 무산. 사정에 따라 처음부터 재판이혼(민법 840조 3호)으로 전환하는 것이 안전한 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>급박한 사정 인정 범위</strong> — 폭력·중대 사유 누적성.</li>\n<li><strong>자녀 합의 미타결</strong> — 면제 인용돼도 자녀 합의 없으면 미발급.</li>\n<li><strong>배우자 기일 불출석</strong> — 협의이혼 무산 → 재판이혼.</li>\n<li><strong>임시보호명령 병행</strong> — 신변 보호 강화.</li>\n<li><strong>3개월 신고 기한</strong> — 확인서 받은 후 미신고 시 무효.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 가정폭력 누적과 재판이혼 사유',
        summary:
          '대법원 2020므14763(대법원, 2021.03.25 선고) 영역에서 법원은 배우자의 반복적 폭력 행위가 의료기록·신고 이력 등 누적 증거로 인정될 수 있는 경우 민법 제840조 제3호의 부당한 대우에 해당하며 재판이혼·위자료 가산 사정으로 평가될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '폭력 누적 입증되면 협의이혼 숙려기간 단축·면제 + 재판이혼 모두 가능 영역.',
      },
    ],
    faq: [
      {
        question: '신청 후 면제 결정까지 며칠 걸리나요?',
        answer:
          '<strong>가정법원마다 다르지만 통상 수일 내 결정이 검토되는 사례가 많은 영역입니다.</strong>',
      },
      {
        question: '미성년 자녀 합의 안 되면 면제 가능한가요?',
        answer:
          '<strong>면제 인용돼도 친권·양육 합의서 없으면 협의이혼 확인서는 미발급됩니다.</strong>',
      },
      {
        question: '면제 신청 기각되면 어떻게 하나요?',
        answer:
          '<strong>3개월 숙려기간 대신 재판이혼으로 전환 검토할 수 있는 영역입니다.</strong>',
      },
      {
        question: '임시보호명령과 같이 신청해도 되나요?',
        answer:
          '<strong>병행 신청이 안전한 영역입니다.</strong> 1366·경찰 안내.',
      },
      {
        question: '확인서 받고 신고 안 하면 어떻게 되나요?',
        answer:
          '<strong>3개월 내 신고 안 하면 확인서 효력 상실, 다시 절차 진행해야 합니다.</strong>',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '협의이혼 절차', href: '/guide/divorce/divorce-mediation-procedure' },
      { label: '재판이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
      { label: '가정폭력 보호', href: '/guide/divorce/divorce-domestic-violence-protection' },
      { label: '친권·양육권', href: '/guide/divorce/divorce-custody-decision' },
      { label: '위자료 청구', href: '/guide/divorce/divorce-consolation-money' },
    ],
  },

  // ─── 2. divorce-personal-debt-marriage-property-division-track ───
  {
    domain: 'divorce',
    slug: 'divorce-personal-debt-marriage-property-division-track',
    keyword: '개인 채무 재산분할 영향',
    questionKeyword: '배우자가 혼인 중 본인 명의로 개인 채무를 졌어요. 재산분할 비율에 어떻게 반영되나요?',
    ctaKeyword: '개인 채무 재산분할 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '혼인 중 개인 채무 재산분할 — 5단계 분할 비율 다툼 | 로앤가이드',
      description:
        '배우자가 혼인 중 본인 명의로 개인 채무를 진 경우 재산분할 비율 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"결혼 8년 차에 배우자 명의 채무가 3억으로 확인. 본인은 모르고 있다가 카드·대출 독촉장 받고 알게 됐어요. 가계 생활비는 본인 월급으로 거의 다 부담했고, 그 채무의 용도는 불분명합니다. 이혼 시 \"빚도 절반\"이라며 청구합니다.\" 부부의 \"공동생활을 위해 발생한 채무\"는 분할 대상이지만 ① 가족 공동생활 무관한 개인 채무 ② 사용처 불분명 ③ 한쪽이 일방적으로 생긴 채무 ④ 가계 분리·기여도 입증 ⑤ 재산분할 비율 조정 5가지 트랙이 핵심. 도박 빚 한정이 아니라 일반 개인 채무도 \"가족 공동생활 무관\"이 인정되면 분할 책임에서 일부·전부 배제될 여지가 있는 영역. 대응은 ① 채무 성격 ② 사용처 ③ 기여도 ④ 분할 청구 ⑤ 채권자 대응 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 개인 채무 재산분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 성격·사용처·기여도·분할·채권자 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 채무 성격 분류</strong> — 공동생활 vs 개인.</li>\n<li><strong>② 사용처·자금 흐름 추적</strong> — 통장·카드 내역.</li>\n<li><strong>③ 본인 기여도·가계 분담 입증</strong></li>\n<li><strong>④ 재산분할 청구 (이혼 후 2년 내)</strong></li>\n<li><strong>⑤ 채권자 대응</strong> — 보증·연대보증 여부 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 모든 개인 채무가 자동 면책은 아닌 영역. 사용처가 \"가족 공동생활 무관(개인 사치·도박·낭비·투자 실패)\"임을 본인이 입증해야 분할 대상 부채에서 제외될 여지가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 분석·입증·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 채무 내역 확보 (즉시)</strong> — 신용정보원·은행·카드사.</li>\n<li><strong>2단계 — 자금 흐름 추적 (1~3주)</strong> — 송금·결제처·인출 내역.</li>\n<li><strong>3단계 — 기여도 자료 정리 (1~2주)</strong> — 본인 소득·가계 분담 이체.</li>\n<li><strong>4단계 — 재산분할 청구 (조정·심판)</strong> — 채무 분리 주장.</li>\n<li><strong>5단계 — 채권자 응대 (필요시)</strong> — 본인 명의 아니면 청구권 없음 안내.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">개인 채무 재산분할 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 채무·자금·기여 갈래입니다.</strong></p>\n<ul>\n<li><strong>배우자 채무 내역서 (신용정보원 통합조회)</strong></li>\n<li><strong>대출 약정서·카드 매출 전표</strong></li>\n<li><strong>채무 자금 사용처 입증 자료 (송금·결제)</strong></li>\n<li><strong>본인 소득·급여 명세서 (3년치)</strong></li>\n<li><strong>가계 분담 이체 내역·생활비 자료</strong></li>\n<li><strong>본인 명의 자산 자료 (예금·부동산)</strong></li>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사용처가 \"개인 투자·사업 실패\"인 경우도 \"부부 공동생활 무관\"으로 평가되는 사례가 있는 영역. 단 처음부터 부부 공동 사업이었다면 분할 대상으로 잡힘.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>채무 성격 분류</strong> — 공동생활 vs 개인.</li>\n<li><strong>사용처 입증 부담</strong> — 면책 주장하는 쪽이 부담.</li>\n<li><strong>본인 명의 보증</strong> — 보증인이면 면책 어려움.</li>\n<li><strong>분할 비율 가감</strong> — 사례에 따라 50% 외 비율 검토.</li>\n<li><strong>채권자 청구</strong> — 본인 명의·보증 아니면 권리 없음.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>신용회복위원회 1600-5500</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일방 개인 채무와 재산분할 대상',
        summary:
          '대법원 2023므12782(대법원, 2024.06.27 선고) 영역에서 법원은 부부 일방이 혼인 중 부담한 채무가 \"공동생활을 위한 채무\"인지 여부를 자금 사용처·가계 기여 정도 등 종합 사정으로 판단하며, 공동생활 무관한 일방 개인 채무는 분할 대상에서 제외될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '개인 채무 면책은 사용처 입증이 핵심. 가계 분담 이력과 자금 흐름이 결정적.',
      },
    ],
    faq: [
      {
        question: '배우자가 본인 명의 도용으로 채무를 졌어요',
        answer:
          '<strong>채무 부존재 확인 소송 + 형사 고소 가능합니다.</strong> 사인·필체 감정 의뢰.',
      },
      {
        question: '본인이 보증선 채무라면요?',
        answer:
          '<strong>보증인은 채권자에 직접 책임이 발생합니다.</strong> 면책 어려움.',
      },
      {
        question: '사용처를 본인이 모르는 경우는요?',
        answer:
          '<strong>법원에 금융거래정보 제출명령 신청을 검토할 수 있는 영역입니다.</strong>',
      },
      {
        question: '재산보다 빚이 많으면 어떻게 하나요?',
        answer:
          '<strong>본인 분담분만 책임지고 나머지는 배우자 부담으로 분리 청구할 수 있는 영역입니다.</strong>',
      },
      {
        question: '분할 비율은 5:5 고정인가요?',
        answer:
          '<strong>아닙니다. 기여도·채무 성격에 따라 사례별로 비율이 다르게 검토됩니다.</strong>',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 청구', href: '/guide/divorce/divorce-property-division-procedure' },
      { label: '재산분할 범위', href: '/guide/divorce/divorce-property-division-scope-faq' },
      { label: '재판이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
      { label: '재산분할 기준', href: '/guide/divorce/divorce-debt-division-standard-criteria' },
      { label: '협의이혼 준비', href: '/guide/divorce/divorce-consultation-prep' },
    ],
  },

  // ─── 3. divorce-couple-business-account-mixed-discovery-track ───
  {
    domain: 'divorce',
    slug: 'divorce-couple-business-account-mixed-discovery-track',
    keyword: '부부 공동사업 계좌 혼재',
    questionKeyword: '부부가 함께 운영한 카페인데 계좌가 한쪽 명의로만 돼 있어요. 재산분할 어떻게 입증하나요?',
    ctaKeyword: '공동사업 재산 입증',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '부부 공동사업 계좌 혼재 — 5단계 분할 입증 6트랙 | 로앤가이드',
      description:
        '부부 공동사업·개인계좌 혼재로 재산분할 입증이 막막하다면 5가지 갈래를 지금 확인하세요.',
    },
    intro:
      '<p>"부부가 함께 운영한 카페가 7년째예요. 본인은 매장 운영, 배우자는 회계 담당이었는데 사업자 등록·메인 계좌는 모두 배우자 단독 명의. 이혼하면서 \"내 사업이지 너는 일만 도왔다\"고 분할을 거부합니다.\" 명의가 한쪽으로 돼 있어도 ① 부부 공동 운영·기여 ② 자금 출연 입증 ③ 계좌 흐름 분석 ④ 사업 가치 평가 ⑤ 재산분할 청구 5가지 트랙이 핵심. 명의는 한쪽이지만 실질적 공동 사업으로 평가되면 분할 대상에 포함될 여지가 있는 영역입니다. 4대보험 가입 기록·매장 영상·SNS·세무 자료 등 본인 기여가 가시화된 증거가 결정적. 대응은 ① 자료 확보 ② 자금 추적 ③ 가치 평가 ④ 청구 ⑤ 가압류 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 공동사업 계좌 혼재 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·자금·가치·청구·보전 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 공동 운영·기여 자료 확보</strong> — 4대보험·SNS·증인.</li>\n<li><strong>② 자금 출연·계좌 흐름 입증</strong> — 본인 명의 자금 투입.</li>\n<li><strong>③ 사업 가치 평가</strong> — 권리금·재고·매출.</li>\n<li><strong>④ 재산분할 청구</strong> — 명의 무관 실질 평가.</li>\n<li><strong>⑤ 가압류·가처분</strong> — 처분 방지 보전.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 명의는 한쪽이라도 실질 공동 운영·자금 기여 입증되면 분할 대상에 포함될 여지가 있는 영역. 사업 가치는 권리금·재고·매출·고객 기반 종합 평가.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·평가·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 운영 자료 수집 (즉시)</strong> — 4대보험·임대차계약·SNS·매장 영상.</li>\n<li><strong>2단계 — 계좌 자금 흐름 분석 (1~3주)</strong> — 본인→사업계좌 이체 내역.</li>\n<li><strong>3단계 — 가압류·가처분 (필요시, 즉시)</strong> — 매장 양도·예금 인출 차단.</li>\n<li><strong>4단계 — 사업 가치 평가 (1~2개월)</strong> — 세무사·감정평가사.</li>\n<li><strong>5단계 — 재산분할 청구 (조정·재판)</strong> — 본인 기여 비율 주장.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">공동사업 계좌 혼재 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 운영·자금·가치 갈래입니다.</strong></p>\n<ul>\n<li><strong>사업자등록증·임대차계약서</strong></li>\n<li><strong>4대보험 가입·납부 이력</strong></li>\n<li><strong>본인 자금 투입 송금 내역</strong></li>\n<li><strong>매장 운영 영상·사진·SNS 게시물</strong></li>\n<li><strong>매출·세무신고서 (3년치)</strong></li>\n<li><strong>거래처·고객·직원 진술서</strong></li>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 배우자가 사업 양도·예금 인출 등 처분 시도하면 즉시 가압류·가처분 검토. 청구 전 처분되면 회복이 어려운 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>명의 vs 실질</strong> — 실질 공동 운영 입증 핵심.</li>\n<li><strong>본인 기여도 비율</strong> — 운영·자금·노동 종합.</li>\n<li><strong>사업 가치 평가</strong> — 권리금·재고·매출 종합.</li>\n<li><strong>자금 혼재 분리</strong> — 본인→사업 계좌 이체 추적.</li>\n<li><strong>처분 방지</strong> — 가압류·가처분 시점 중요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 명의 단독·실질 공동 운영 사업',
        summary:
          '대법원 2009므4297(대법원, 2010.04.15 선고) 영역에서 법원은 부부 일방 명의의 사업이라도 부부가 공동으로 운영·기여한 사정이 인정되면 그 가치는 부부 공동 재산으로 평가되어 분할 대상에 포함될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '명의 한쪽이라도 실질 공동 운영 입증되면 분할 대상. 운영·자금 기여 자료 핵심.',
      },
    ],
    faq: [
      {
        question: '4대보험에 본인이 가입돼 있지 않으면 불리한가요?',
        answer:
          '<strong>중요 자료지만 절대 기준은 아닙니다.</strong> 매장 영상·증인·SNS로 보완 가능.',
      },
      {
        question: '권리금은 어떻게 평가하나요?',
        answer:
          '<strong>세무사·감정평가사 또는 법원 감정으로 평가합니다.</strong> 상가 권리금 시세 참고.',
      },
      {
        question: '배우자가 매장을 양도하려고 해요',
        answer:
          '<strong>즉시 가압류·가처분 신청 검토 영역입니다.</strong> 양도 후엔 회복 어려움.',
      },
      {
        question: '사업이 적자라면 분할 가치가 없나요?',
        answer:
          '<strong>현재 적자라도 권리금·재고·고객 기반 자산은 평가됩니다.</strong>',
      },
      {
        question: '본인 분담 비율은 어떻게 정해지나요?',
        answer:
          '<strong>기여도·운영 기간·자금 투입 종합으로 사례별 평가됩니다.</strong>',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 청구', href: '/guide/divorce/divorce-property-division-procedure' },
      { label: '재산분할 범위', href: '/guide/divorce/divorce-property-division-scope-faq' },
      { label: '가압류·가처분', href: '/guide/divorce/divorce-property-preservation' },
      { label: '재판이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
      { label: '협의이혼 준비', href: '/guide/divorce/divorce-consultation-prep' },
    ],
  },

  // ─── 4. divorce-self-employed-spouse-income-hidden-track ───
  {
    domain: 'divorce',
    slug: 'divorce-self-employed-spouse-income-hidden-track',
    keyword: '자영업 배우자 소득 은닉',
    questionKeyword: '자영업 배우자가 이혼 직전에 매출을 줄여 신고했어요. 양육비·재산분할 줄어드나요?',
    ctaKeyword: '자영업 소득 은닉 대응',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '자영업 배우자 소득 은닉 — 5단계 이중장부 대응 3트랙 | 로앤가이드',
      description:
        '자영업 배우자가 매출·소득을 은닉해 재산분할·양육비가 줄어들 우려라면 5가지 갈래를 지금 확인하세요.',
    },
    intro:
      '<p>"자영업 식당을 운영하는 배우자가 이혼 얘기 시작되자마자 매출을 갑자기 줄여 신고. 실제 일 매출은 200만원인데 세무신고는 70만원. 본인이 알기로는 현금 매출이 따로 있고, 이중장부도 있는 것 같습니다. 양육비·재산분할이 신고 소득 기준으로 산정되면 본인이 크게 손해 봅니다.\" ① 신고 소득 vs 실제 매출 ② 현금 매출·POS 자료 ③ 카드·배달앱 매출 ④ 사실조회·금융거래정보 제출명령 ⑤ 양육비·분할 비율 조정 5가지 트랙이 핵심. 법원은 신고 소득만이 아니라 \"실제 수입\"을 기준으로 산정한다는 판례 흐름이 있는 영역입니다. 대응은 ① 자료 확보 ② 사실조회 ③ 감정 ④ 청구 ⑤ 가산 주장 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 자영업 소득 은닉 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·사실조회·감정·청구·가산 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 매출·소득 자료 확보</strong> — POS·배달앱·카드 매출.</li>\n<li><strong>② 사실조회·제출명령 신청</strong> — 카드사·배달앱·세무서.</li>\n<li><strong>③ 회계 감정</strong> — 신고 매출 vs 실제 매출.</li>\n<li><strong>④ 양육비·분할 청구</strong> — 실제 수입 기준 주장.</li>\n<li><strong>⑤ 위자료·가산 주장</strong> — 고의 은닉은 책임 가중.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 법원은 신고 소득이 아닌 \"실제 수입·소비 수준\"을 종합 평가하는 영역. POS·배달앱·카드 매출과 신고 소득 차이를 명확히 보이는 자료가 결정적.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·조사·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 매출 자료 확보 (즉시)</strong> — POS 영수증·배달앱 캡처·카드 매출.</li>\n<li><strong>2단계 — 사실조회 신청 (소송 시)</strong> — 카드사·배달앱·세무서·은행.</li>\n<li><strong>3단계 — 회계 감정 (1~3개월)</strong> — 회계사·세무사.</li>\n<li><strong>4단계 — 양육비·재산분할 청구</strong> — 실제 수입 기준.</li>\n<li><strong>5단계 — 위자료·가산 주장</strong> — 고의 은닉은 책임 가중.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">자영업 소득 은닉 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 매출·계좌·생활 갈래입니다.</strong></p>\n<ul>\n<li><strong>POS·영수증·매장 매출 자료</strong></li>\n<li><strong>배달앱(배민·쿠팡이츠 등) 매출 캡처</strong></li>\n<li><strong>카드 매출 내역 (사업자 매출세금계산서)</strong></li>\n<li><strong>배우자 신고 종합소득세 신고서</strong></li>\n<li><strong>현금 거래·계좌 입금 내역</strong></li>\n<li><strong>생활비·소비 수준 자료 (자동차·여행·외식)</strong></li>\n<li><strong>혼인관계증명서·자녀 가족관계증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인이 직접 보유하지 못한 자료(카드사·배달앱·세무서)는 법원 사실조회·제출명령으로 확보 가능. 소송 시작 후 적극 활용할 수 있는 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>신고 소득 vs 실제 수입</strong> — 법원은 실제 수입 평가.</li>\n<li><strong>이중장부·현금 매출</strong> — 추정·감정으로 보완.</li>\n<li><strong>소비 수준 평가</strong> — 자동차·여행·외식 등.</li>\n<li><strong>고의 은닉</strong> — 위자료·분할 가산 사정.</li>\n<li><strong>사실조회 활용</strong> — 카드사·배달앱·세무서 핵심.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>가정법원 콜센터 1899-9595</strong></li>\n<li><strong>국세청 126 (탈세 제보)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 신고 소득과 실제 수입 평가',
        summary:
          '대법원 94므901(대법원, 1994.12.02 선고) 영역에서 법원은 재산분할 비율·양육비 산정에서 부부 일방의 종합소득세 신고 소득에만 의존하지 않고 실제 수입·소비 수준·자산 상태 등을 종합하여 평가할 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '신고 소득만으론 부족. POS·배달앱·카드 매출과 소비 수준이 결정적 평가 사정.',
      },
    ],
    faq: [
      {
        question: 'POS 자료를 본인이 못 구하면요?',
        answer:
          '<strong>법원에 사실조회·제출명령 신청 검토 영역입니다.</strong> 매장에 영수증 사진도 자료 가능.',
      },
      {
        question: '배달앱 매출 캡처는 어떻게 받나요?',
        answer:
          '<strong>법원 사실조회로 배달앱 본사에 매출 자료 직접 확인 가능합니다.</strong>',
      },
      {
        question: '국세청 탈세 제보도 같이 하나요?',
        answer:
          '<strong>가능하지만 별도 절차입니다.</strong> 126번 또는 국세청 홈택스 제보.',
      },
      {
        question: '신고 소득이 적으면 양육비는 적게 나오나요?',
        answer:
          '<strong>법원은 실제 수입·소비 수준 종합 평가합니다.</strong> 신고 소득만으론 결정되지 않는 영역.',
      },
      {
        question: '회계 감정 비용은 얼마인가요?',
        answer:
          '<strong>사례에 따라 다르지만 수백만 원 수준이 검토되는 영역입니다.</strong> 패소자 부담 가능.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '양육비 산정', href: '/guide/divorce/divorce-child-support-calculation' },
      { label: '재산분할 청구', href: '/guide/divorce/divorce-property-division-procedure' },
      { label: '재산분할 범위', href: '/guide/divorce/divorce-property-division-scope-faq' },
      { label: '재판이혼 절차', href: '/guide/divorce/divorce-litigation-procedure' },
      { label: '협의이혼 준비', href: '/guide/divorce/divorce-consultation-prep' },
    ],
  },

  // ─── 5. inheritance-living-trust-property-disposal-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-living-trust-property-disposal-track',
    keyword: '생전 신탁 유류분 회피',
    questionKeyword: '아버지가 돌아가시기 전에 신탁으로 형에게 재산을 모두 넘겼어요. 유류분 청구할 수 있나요?',
    ctaKeyword: '생전 신탁 유류분 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '생전 신탁 유류분 청구 — 5단계 사전 처분 회피 3트랙 | 로앤가이드',
      description:
        '피상속인이 생전 신탁으로 재산을 처분해 유류분 침해가 우려된다면 5가지 청구 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 돌아가시기 2년 전에 \"신탁\" 계약으로 부동산·예금 대부분을 형에게 수익자 지정. 본인은 \"신탁이라 상속이 아니다, 유류분도 못 청구한다\"는 말을 듣고 막막합니다. 아버지 전 재산이 7억인데 본인 몫이 0이 됐어요.\" 신탁법·민법의 교차 영역으로 ① 신탁 설정 시점 ② 수익자가 상속인인지 ③ 유류분 산정 기초 재산 포함 여부 ④ 유류분 반환 청구 ⑤ 1년/10년 시효 5가지 트랙이 핵심. 대법원은 일정 요건의 신탁 재산도 유류분 산정 기초에 포함될 여지가 있다는 흐름을 보이는 영역. 생전 처분이라도 \"실질적으로 상속에 갈음하는 처분\"이면 유류분 평가에서 고려될 수 있는 영역입니다. 대응은 ① 신탁계약 확인 ② 산정 ③ 반환 청구 ④ 보전 ⑤ 시효 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 생전 신탁 유류분 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·산정·청구·보전·시효 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 신탁계약서·수익자 지정 확인</strong></li>\n<li><strong>② 유류분 산정 기초 재산 포함 여부</strong></li>\n<li><strong>③ 유류분 반환 청구</strong> — 가액 우선 반환.</li>\n<li><strong>④ 가압류·가처분</strong> — 추가 처분 방지.</li>\n<li><strong>⑤ 시효 관리</strong> — 인지 후 1년, 개시 후 10년.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 신탁이라는 명칭만으로 유류분이 배제되지 않는 영역. 실질이 \"상속에 갈음하는 사전 처분\"이라면 유류분 산정 기초로 평가될 여지가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·산정·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신탁계약서·등기 확인 (즉시)</strong> — 신탁회사·등기소.</li>\n<li><strong>2단계 — 유류분 산정 (1~2주)</strong> — 기초 재산·생전 증여 합산.</li>\n<li><strong>3단계 — 가압류·가처분 (필요시, 즉시)</strong> — 추가 처분 방지.</li>\n<li><strong>4단계 — 유류분 반환 청구 (소송, 1년 내)</strong></li>\n<li><strong>5단계 — 가액·현물 반환 집행</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">생전 신탁 유류분 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신탁·재산·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>신탁계약서·신탁 등기부등본</strong></li>\n<li><strong>수익자 지정 자료·수익권 증서</strong></li>\n<li><strong>피상속인 재산 명세 (생전 + 사망 시)</strong></li>\n<li><strong>생전 증여·이체 자료 (10년치)</strong></li>\n<li><strong>가족관계증명서·기본증명서</strong></li>\n<li><strong>본인 유류분 산정표·법정상속분 자료</strong></li>\n<li><strong>본인 신분증·인감증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 신탁 외에도 사망 직전 증여·명의이전이 있으면 함께 유류분 산정 기초로 청구. 사망 1년 내 증여는 가산이 강력하게 검토되는 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>신탁 성격</strong> — 실질이 상속 갈음 처분인지.</li>\n<li><strong>수익자 신분</strong> — 상속인이면 산정 영향 큼.</li>\n<li><strong>시효 관리</strong> — 인지 후 1년이 가장 짧음.</li>\n<li><strong>가액 vs 현물 반환</strong> — 원칙은 가액.</li>\n<li><strong>처분 방지</strong> — 가압류·가처분 시점.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>법원 가족상담실</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 신탁 재산과 유류분 산정 기초',
        summary:
          '대법원 2022다220014(대법원, 2025.05.29 선고) 영역에서 법원은 피상속인의 생전 처분으로 신탁 등 형식이 활용된 경우라도 그 실질을 살펴 유류분 산정의 기초가 되는 재산에 포함될 수 있는지 종합 평가할 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '신탁 명칭만으로 유류분 배제되지 않음. 실질·시기·수익자 신분 종합 평가.',
      },
    ],
    faq: [
      {
        question: '신탁이면 무조건 상속 아닌가요?',
        answer:
          '<strong>형식은 신탁이라도 실질 평가가 가능한 영역입니다.</strong>',
      },
      {
        question: '시효는 언제부터 계산하나요?',
        answer:
          '<strong>유류분 침해 사실을 안 날로부터 1년, 상속 개시일로부터 10년입니다.</strong>',
      },
      {
        question: '가액 반환과 현물 반환 차이는요?',
        answer:
          '<strong>원칙은 가액 반환입니다.</strong> 현물 반환은 예외적·합의 시.',
      },
      {
        question: '여러 사람에게 분산 신탁한 경우는요?',
        answer:
          '<strong>각각 청구 가능합니다.</strong> 비율·시점에 따라 안분.',
      },
      {
        question: '본인 외 형제도 같이 청구해야 하나요?',
        answer:
          '<strong>유류분권자가 각자 청구합니다.</strong> 공동 청구 가능하지만 의무는 아닙니다.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '유류분 청구', href: '/guide/inheritance/inheritance-forced-share-claim' },
      { label: '유류분 시효', href: '/guide/inheritance/inheritance-forced-share-10year-limit' },
      { label: '유류분 증여 산정', href: '/guide/inheritance/inheritance-forced-share-gift-calculation-scope' },
      { label: '특별수익 공제', href: '/guide/inheritance/inheritance-yuryubun-special-receipt-deduction-track' },
      { label: '상속재산 분할', href: '/guide/inheritance/inheritance-division-procedure' },
    ],
  },

  // ─── 6. inheritance-overseas-asset-double-taxation-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-overseas-asset-double-taxation-track',
    keyword: '해외자산 상속세 이중과세',
    questionKeyword: '아버지 미국 부동산·예금을 상속받았는데 한국·미국 양쪽에서 세금이 부과됐어요. 이중과세 줄일 수 있나요?',
    ctaKeyword: '해외 상속 이중과세 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외자산 상속세 이중과세 — 5단계 외국납부세액공제 3트랙 | 로앤가이드',
      description:
        '해외 부동산·금융자산을 상속받아 한국·해외 양쪽 세금이 부과됐다면 5가지 공제 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 미국 영주권자였고, 미국 부동산·증권·예금을 상속받았어요. 미국 IRS 상속세도 부과되고, 한국 세무서도 \"국내 거주자 상속이라 전 세계 재산이 과세 대상\"이라며 다시 부과합니다. 이대로 두면 같은 자산에 양쪽 세금이 이중으로 매겨집니다.\" 상속세 및 증여세법 제29조는 \"피상속인 또는 상속인의 거주 상태에 따라 과세 범위가 달라지고, 외국에서 납부한 상속세는 일정 한도 내에서 공제\"한다고 정한 영역. ① 거주자·비거주자 구분 ② 과세 대상 범위 ③ 외국납부세액공제 ④ 신고 기한 (6개월·9개월) ⑤ 환율·평가 기준 5가지 트랙이 핵심. 한미·한일 등 조세조약도 참고할 영역입니다. 대응은 ① 신분 확인 ② 자산 평가 ③ 공제 청구 ④ 신고 ⑤ 분쟁 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 해외 상속 이중과세 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·범위·공제·신고·분쟁 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 피상속인·상속인 거주 상태</strong> — 거주자 vs 비거주자.</li>\n<li><strong>② 과세 대상 범위 확정</strong> — 전 세계 vs 국내.</li>\n<li><strong>③ 외국납부세액공제 청구</strong> — 한도·계산식.</li>\n<li><strong>④ 신고 기한 준수 (거주자 6개월·비거주자 9개월)</strong></li>\n<li><strong>⑤ 과세 분쟁·이의 신청</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 외국에서 낸 상속세는 한국 상속세 중 \"해당 외국 재산에 대응하는 부분\"을 한도로 공제될 여지가 있는 영역. 조세조약·환율 기준 함께 점검.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·평가·신고 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거주 상태·자산 목록 확정 (1~2주)</strong> — 영주권·자산 소재지.</li>\n<li><strong>2단계 — 해외 자산 평가·환율 적용 (1개월)</strong> — 상속개시일 기준.</li>\n<li><strong>3단계 — 외국납부세액공제 산정 (세무사)</strong> — 한도 계산.</li>\n<li><strong>4단계 — 상속세 신고 (거주자 6개월·비거주자 9개월)</strong></li>\n<li><strong>5단계 — 과세 분쟁 (이의·심사·심판)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외자산 이중과세 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·자산·세무 갈래입니다.</strong></p>\n<ul>\n<li><strong>피상속인 거주 상태 자료 (영주권·여권)</strong></li>\n<li><strong>해외 부동산 등기부·평가 자료</strong></li>\n<li><strong>해외 금융자산 잔고증명·증권 보유 자료</strong></li>\n<li><strong>해외 상속세 납부 영수증·세금증명</strong></li>\n<li><strong>환율 자료 (상속개시일 기준)</strong></li>\n<li><strong>가족관계증명서·기본증명서</strong></li>\n<li><strong>본인 신분증·인감증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 미국·일본 등 조세조약 체결국은 별도 공제 규정이 있는 영역. 자산 소재국 세무사·국내 세무사 협업 검토 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>거주자 판정</strong> — 거주 기간·중심지 종합.</li>\n<li><strong>외국납부세액공제 한도</strong> — 해당 외국 재산 대응분 한도.</li>\n<li><strong>환율 적용 기준일</strong> — 상속개시일 매매기준율.</li>\n<li><strong>자산 평가 기준</strong> — 시가·감정가.</li>\n<li><strong>조세조약 적용</strong> — 한미·한일 등.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>국세청 상속세 상담 126</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 세무서 재산세과</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 해외 상속재산과 과세 범위',
        summary:
          '대법원 2025두30806(대법원, 2025.05.15 선고) 영역에서 법원은 피상속인·상속인의 거주 상태와 자산 소재지에 따라 국내·해외 상속재산의 과세 범위가 달라지고, 외국에서 납부한 상속세는 일정 한도 내에서 공제될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '거주 상태·자산 소재 + 외국납부세액공제 한도가 핵심. 조세조약도 함께 점검.',
      },
    ],
    faq: [
      {
        question: '미국 상속세 영수증이 영문이면 그대로 제출하나요?',
        answer:
          '<strong>국문 번역본 첨부가 일반적입니다.</strong> 공증·아포스티유 검토.',
      },
      {
        question: '환율은 어느 시점 기준인가요?',
        answer:
          '<strong>원칙적으로 상속개시일(피상속인 사망일) 매매기준율입니다.</strong>',
      },
      {
        question: '한국 신고 기한을 놓치면요?',
        answer:
          '<strong>가산세가 부과될 수 있는 영역입니다.</strong> 기한 후 신고도 가능.',
      },
      {
        question: '해외 부동산만 있고 한국엔 없으면요?',
        answer:
          '<strong>거주자라면 전 세계 재산이 한국 과세 대상입니다.</strong> 외국납부세액공제 검토.',
      },
      {
        question: '세무사 비용은 누가 부담하나요?',
        answer:
          '<strong>상속인 각자 부담이 일반이지만 협의로 상속재산에서 지출도 가능합니다.</strong>',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속세 계산', href: '/guide/inheritance/inheritance-tax-calculation' },
      { label: '상속세 신고 기한', href: '/guide/inheritance/inheritance-tax-six-month-filing-procedure' },
      { label: '상속세 가산세', href: '/guide/inheritance/inheritance-tax-deadline-penalty' },
      { label: '상속재산 분할', href: '/guide/inheritance/inheritance-division-procedure' },
      { label: '한정승인 준비', href: '/guide/inheritance/inheritance-limited-acceptance-preparation' },
    ],
  },

  // ─── 7. inheritance-cohabitation-no-marriage-no-rights-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-cohabitation-no-marriage-no-rights-track',
    keyword: '사실혼 배우자 상속권 부재',
    questionKeyword: '15년 동거했는데 혼인신고를 안 했어요. 상대가 사망하면 상속 한 푼도 못 받나요?',
    ctaKeyword: '사실혼 상속 한계 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사실혼 배우자 상속권 — 5단계 기여분·생전 대비 3트랙 | 로앤가이드',
      description:
        '사실혼 배우자가 법정 상속권이 없는 상황에서 5가지 대응·생전 대비 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"15년을 함께 살며 가게도 같이 운영했고 자녀도 키웠어요. 그런데 혼인신고를 안 해서 사실혼 상태. 상대가 갑자기 쓰러져 \"사실혼 배우자는 법정 상속인 아니다, 상속분 0\"이라는 얘기를 듣고 충격받았습니다.\" 민법 제1003조는 \"피상속인의 배우자는 직계비속·존속과 동순위 상속인\"이라 정하지만 \"배우자\"는 혼인신고를 마친 법률혼만 의미하는 영역. 사실혼 배우자는 ① 법정 상속권 없음 ② 자녀 친자 인지로 자녀 상속권 ③ 사실혼 해소 시 재산분할 청구 ④ 기여분·재산공유 주장 ⑤ 생전 대비(유언·증여·보험 수익자) 5가지 트랙이 핵심. 사망 후엔 매우 제한적이라 생전 대비가 결정적인 영역입니다. 대응은 ① 신분 확인 ② 자녀 인지 ③ 기여 입증 ④ 생전 대비 ⑤ 보험 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 사실혼 상속 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·자녀·기여·대비·보험 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실혼 vs 법률혼 신분 확인</strong></li>\n<li><strong>② 자녀 친자 인지·상속권</strong></li>\n<li><strong>③ 사실혼 해소·재산공유 주장</strong></li>\n<li><strong>④ 생전 대비 (유언·증여·신탁)</strong></li>\n<li><strong>⑤ 보험 수익자 지정</strong> — 상속재산과 별개.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사실혼 배우자는 사망 시 법정 상속권이 없는 영역. 생전 유언·증여·신탁·보험 수익자 지정 등으로 미리 대비가 결정적.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·대비·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사실혼 관계 입증 자료 정리 (즉시)</strong> — 동거 기간·생활 자료.</li>\n<li><strong>2단계 — 자녀 친자 인지 (있을 시, 즉시)</strong> — 자녀 상속권 확보.</li>\n<li><strong>3단계 — 사실혼 해소 시 재산분할 청구 (생전 분리 시)</strong></li>\n<li><strong>4단계 — 생전 유언·증여·신탁 (상대 협의)</strong></li>\n<li><strong>5단계 — 보험 수익자·연금 수익자 지정</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사실혼 상속 대비 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 관계·재산·대비 갈래입니다.</strong></p>\n<ul>\n<li><strong>사실혼 관계 입증 자료 (동거 기간·가족·이웃 진술)</strong></li>\n<li><strong>주민등록등본 (동일 주소지 이력)</strong></li>\n<li><strong>자녀 가족관계증명서·친자 인지 자료</strong></li>\n<li><strong>공동 재산·기여 자료 (사업·소득)</strong></li>\n<li><strong>유언장 (있을 시) 또는 증여 계약서</strong></li>\n<li><strong>보험증권·수익자 지정 자료</strong></li>\n<li><strong>본인 신분증·인감증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자녀가 있다면 친자 인지로 자녀 상속권 확보가 가장 안정적. 자녀 상속분을 통한 간접 보호 검토 가능한 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실혼 인정 요건</strong> — 혼인 의사·공시·동거.</li>\n<li><strong>사망 후 한계</strong> — 법정 상속권 없음.</li>\n<li><strong>생전 분리 시</strong> — 재산분할 청구 가능 영역.</li>\n<li><strong>자녀 친자 인지</strong> — 자녀 상속 안정.</li>\n<li><strong>유언·증여 우선</strong> — 본인 상속 안정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>법원 가족상담실</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실혼 배우자 상속권 한계',
        summary:
          '대법원 2014스44(대법원, 2019.11.21 선고) 영역에서 법원은 민법상 \"배우자\"는 혼인신고를 마친 법률혼 배우자를 의미하므로 사실혼 관계의 일방은 상대방 사망 시 법정 상속인이 되지 않는다고 평가하며, 생전 유언·증여 등 별도 대비가 없는 한 상속에서 보호받기 어려운 면이 있다고 본 사례 흐름이 있습니다.',
        takeaway: '사실혼은 사망 후 상속권 부재. 생전 유언·증여·신탁·보험 수익자 지정이 핵심.',
      },
    ],
    faq: [
      {
        question: '15년을 같이 살아도 상속권 없나요?',
        answer:
          '<strong>혼인신고가 없으면 법정 상속권은 인정되지 않는 영역입니다.</strong>',
      },
      {
        question: '자녀는 상속받을 수 있나요?',
        answer:
          '<strong>친자 인지가 되어 있으면 자녀는 친자녀로 상속권이 있습니다.</strong>',
      },
      {
        question: '사실혼 해소 시 재산분할은요?',
        answer:
          '<strong>생전 사실혼 해소 시엔 재산분할 청구 가능한 영역입니다.</strong> 사망 후엔 어렵습니다.',
      },
      {
        question: '유언이 가장 안전한가요?',
        answer:
          '<strong>공정증서 유언이 가장 안정적입니다.</strong> 자필 유언은 형식 요건 엄격.',
      },
      {
        question: '보험 수익자 지정은 상속재산과 별개인가요?',
        answer:
          '<strong>수익자가 지정되면 상속재산이 아니라 별도 청구 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '상속재산 분할', href: '/guide/inheritance/inheritance-division-procedure' },
      { label: '유언 효력', href: '/guide/inheritance/inheritance-will-validity-dispute' },
      { label: '기여분 청구', href: '/guide/inheritance/inheritance-contribution-portion-dispute' },
      { label: '생명보험 수익자', href: '/guide/inheritance/inheritance-life-insurance-beneficiary-separate' },
      { label: '유류분 청구', href: '/guide/inheritance/inheritance-forced-share-claim' },
    ],
  },
];
