import { SpokePage } from '../spoke-pages';

// batch60 fraud — 5개:
// 1. 결혼정보업체 허위 프로필 매칭 환급 트랙 (회비·매칭권) — victim
// 2. 직장 동료 코인투자 권유 손실 후 사기 다툼 (지인 송금) — victim
// 3. 보험설계사 허위 설계(지급조건 미설명) 환급 트랙 — victim
// 4. 자수·자진신고 + 피해자 합의 형 감경 트랙 — accused
// 5. 사기죄 양형 4갈래 (피해액·합의·전과·고의성) — accused
//
// 고유 존재 이유:
// 1. 이 페이지는 결혼정보업체에 가입해 회비·매칭권을 결제했지만 회사가 허위·과장 프로필로 매칭을 진행했다는 입장에서 피해자가 약관·할부거래법·소비자분쟁조정 + 사기 형사 트랙을 정리하도록 돕는 페이지다. (가해자 개인 결혼사기인 fraud-marriage-info-pretender 와 분리)
// 2. 이 페이지는 직장 동료·상사가 \'코인 100% 보장\' 권유로 송금받은 후 손실·잠적한 상황에서 피해자가 단순 투자손실 vs 사기 편취의사 다툼을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 보험설계사가 \'전액 보장\'·\'무사고 환급\' 등 지급조건을 누락·왜곡 설명하여 가입한 보험계약자가 보험사 분쟁조정·금감원·계약취소 환급 트랙을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 사기 혐의를 받고 있는 피의자가 자수·자진신고 + 피해자 합의 + 피해액 변상으로 형 감경·기소유예·집행유예 트랙을 정리하도록 돕는 페이지다.
// 5. 이 페이지는 사기 혐의를 받고 있는 피의자가 양형의 4가지 결정 변수(피해액·합의·전과·고의성)를 이해하고 본인 사안에서 어디에 가중·감경 여지가 있는지 정리하도록 돕는 페이지다.

export const spokesBatch60Fraud: SpokePage[] = [
  // ─── 1. fraud / fraud-marriage-bureau-falsified-profile-refund ───
  {
    domain: 'fraud',
    slug: 'fraud-marriage-bureau-falsified-profile-refund',
    keyword: '결혼정보업체 허위 프로필 환급',
    questionKeyword: '결혼정보업체 회비 500만원 냈는데 매칭된 사람들 프로필이 회사 측에서 부풀린 허위였어요. 환급 가능한가요?',
    ctaKeyword: '결혼정보업체 환급 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '결혼정보업체 허위 프로필 — 5단계 환급·분쟁조정 트랙 | 로앤가이드',
      description:
        '결혼정보업체에 회비를 냈는데 매칭 프로필이 허위·과장이었다면 약관 + 할부거래법 + 소비자분쟁조정 + 사기 5단계 환급 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"고급 결혼정보업체에 회비 500만원을 결제하고 매칭권 8회를 받았어요. 그런데 만나본 사람들의 학력·연봉·직업이 회사 측 소개 자료와 전혀 달랐고, 회사에 항의하니 \'프로필은 본인 진술 기반\'이라며 환급을 거부합니다." 결혼정보업체의 허위·과장 프로필 매칭은 ① 약관 미고지·기망에 따른 계약 취소(민법 제110조) ② 할부거래법 제8조 청약철회 ③ 표시·광고의 공정화에 관한 법률 제3조 부당한 표시·광고 ④ 형법 제347조 사기 ⑤ 한국소비자원 분쟁조정 5축 결합 영역입니다. 대법원 2024도10141 판결은 \'기망행위로 처분의사를 일으킨 행위\'를 사기죄로 봤고, 한국소비자원 1372 + 공정거래위원회 + 분쟁조정 트랙으로 회비·매칭권 환급 트랙을 검토할 수 있어요. 가입 시 받은 회사 측 소개 자료와 실제 만남에서 드러난 차이를 비교 정리한 자료가 회수의 핵심 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 결혼정보업체 허위 프로필 5가지 환급 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 약관 취소·할부철회·소비자분쟁조정·사기 형사·표시광고법 5축으로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약 취소·해지 (민법 제110조 기망 + 약관)</strong> — 회사가 \'1억 연봉 의사\' \'서울대 박사\' 등 구체적 조건을 약속하고 매칭한 자료가 허위였다면 기망에 의한 의사표시 취소 영역. 회비·매칭권 환급 청구.</li>\n<li><strong>② 할부거래법 청약철회 (가입 14일 이내)</strong> — 5만원 이상·3개월 이상 할부면 14일 내 무조건 철회 가능 영역. 가입 직후 의심 들면 즉시 서면 통보가 안전.</li>\n<li><strong>③ 한국소비자원 분쟁조정 (1372)</strong> — 결혼정보업체 분쟁이 가장 빈번한 영역 중 하나. 무료 조정·중재. 대한민국 결혼중개업분쟁조정위 기준안 활용.</li>\n<li><strong>④ 형법 제347조 사기 형사 고소</strong> — 회사가 처음부터 허위 프로필을 알고도 매칭한 정황(같은 사람 여러 회원에게 과장 매칭, 회비 미반환 패턴)이 다수 입증되면 편취의사 다툼 영역.</li>\n<li><strong>⑤ 표시·광고의 공정화에 관한 법률 + 공정위 신고</strong> — 부당한 표시·광고로 가입 유도한 정황 입증 시 공정위 시정명령·과징금 가능 영역. 다른 피해자 결합 시 회수율 상승.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 결혼정보업체는 \'본인 진술 기반\'이라며 회사 책임을 회피하는 사례가 많지만, 가입 시 회사가 강조한 \'엄선·검증·VIP\' 표현 + 실제 매칭의 격차가 입증되면 약관·표시광고법·민법 기망 트랙이 결합되는 영역. 가입 자료·매칭 자료·만남 후기 시간순 정리가 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 14일 내 청약철회 검토 → 회사 내용증명 → 분쟁조정 → 형사·민사 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 가입계약서·약관·매칭 프로필 자료(회사 발송본)·실제 만남에서 받은 명함·SNS 캡처·메신저·녹취·결제 영수증.</li>\n<li><strong>2단계 — 14일 내 청약철회 (가입 직후 의심 든 경우)</strong> — 할부거래법 제8조에 따라 서면 또는 전자문서로 회사·신용카드사 동시 통지. 환급 거부 시 분쟁조정 직행.</li>\n<li><strong>3단계 — 회사 내용증명 + 환급 요구 (1주 내)</strong> — 회사명·계약일·결제금액·허위 프로필 정황·환급 요구 14일 기한. 우체국 내용증명 보존.</li>\n<li><strong>4단계 — 한국소비자원 분쟁조정 (1372 / ccr.kca.go.kr, 약 30~60일)</strong> — 무료 조정 신청. 회비 일부·전부 환급 결정 사례 다수 영역.</li>\n<li><strong>5단계 — 사기 고소 + 민사 (1~6개월)</strong> — 다수 피해자 결합·동일 패턴 입증 시 형사 우선수사. 민사로 회비·정신적 손해배상 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">결혼정보업체 허위 프로필 5단계 환급 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 가입 자료 + 매칭 격차 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>가입계약서·약관·확인서</strong> — 회비·매칭권 횟수·해지 환급 규정.</li>\n<li><strong>회사 측 매칭 프로필 자료</strong> — 카톡·메일·앱 캡처. 학력·직업·연봉·연령 표기.</li>\n<li><strong>실제 만남에서 확인된 정보</strong> — 명함·SNS·다른 회원 진술서.</li>\n<li><strong>가입 시 회사가 강조한 표현 자료</strong> — 광고·홈페이지·면담 녹취. \'엄선\' \'VIP\' \'검증\' 단어 캡처.</li>\n<li><strong>매니저·상담사 카톡·녹취</strong> — 매칭 안내·항의 대응 진술.</li>\n<li><strong>회비 결제 영수증·할부 내역</strong> — 청약철회 기준일 산정.</li>\n<li><strong>같은 회사 다른 피해자 후기·진술서</strong> — 동일 패턴 입증.</li>\n<li><strong>본인 신분증·통장 사본</strong> — 분쟁조정·환급 신청 첨부.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 결혼정보업체 분쟁은 한국소비자원 1372 분쟁조정 + 공정거래위원회 약관규제법 위반 신고 결합이 효과적인 영역. 회사 약관 중 \'환급 불가\' \'본인 진술 기반\' 등 일방적 면책 조항은 약관규제법 제6조 위반 다툼 가능성 높은 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 자주 항변과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"본인 진술 기반이라 회사 책임 없다" 항변 반박</strong> — 회사가 \'엄선\' \'검증\' 표현으로 가입 유도했다면 검증 의무 위반 다툼 영역. 약관규제법 제6조 \'고객에게 부당하게 불리한 조항\' 무효 가능성.</li>\n<li><strong>"매칭 횟수 사용했으니 환급 불가" 항변 반박</strong> — 매칭 자체가 허위 프로필 기반이었다면 \'정상 매칭권 사용\'으로 평가하기 어려운 영역. 회비 비례 환급 + 정신적 손해배상 다툼.</li>\n<li><strong>대출·할부 결제 함정</strong> — 일부 업체가 캐피탈·신용대출로 회비 결제 유도. 청약철회 시 카드사·캐피탈 동시 통지 필수. 신용도 영향 차단.</li>\n<li><strong>다수 피해자 결합 효과</strong> — 같은 회사·같은 매니저 피해자 5명 이상 결합 시 형사 우선수사·표시광고법 위반 정황 자료 강화 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372 / ccr.kca.go.kr</strong> — 분쟁조정 + 결혼중개업분쟁 전문.</li>\n<li><strong>공정거래위원회 1670-0007</strong> — 약관·표시광고법 위반 신고.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr) / 182</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 처분의사 유발 기망과 사기죄 성립',
        summary:
          '대법원 2024도10141 사건(대법원, 2024.12.12 선고)에서 법원은 사기죄가 성립하기 위한 기망행위는 \'사람으로 하여금 착오를 일으키게 하는 모든 행위\'로서, 결혼정보업체가 \'엄선·검증된 회원\' \'고소득·전문직 매칭\' 등 구체적 조건을 약속하고 회비를 받은 후 허위·과장 프로필로 매칭을 진행한 정황이 입증되면 처분의사 유발 기망에 해당할 수 있다고 평가될 영역으로 봤습니다. 또한 같은 판결은 \'외형적으로 일부 행위만 실행했더라도 사실관계 종합 판단으로 고의가 인정될 수 있다\'고 판시했고, 결혼정보업체 사안은 ① 회사의 가입 시 강조 표현 ② 매칭 프로필 자료 ③ 실제 만남 격차 ④ 다수 피해자 동일 패턴 4축 결합 입증 영역입니다.',
        takeaway: '결혼정보업체 허위 프로필은 약관·표시광고법·할부거래법·민법 기망·사기 형사 다축 결합 영역으로, 가입 자료·매칭 프로필·실제 만남 격차·다수 피해자 결합을 정리하면 5단계 환급 트랙이 검토 가능한 사례입니다.',
      },
    ],
    faq: [
      {
        question: '회비 500만원 냈는데 매칭 8회 중 5회 사용했어요. 일부라도 환급되나요?',
        answer:
          '<strong>잔여 매칭권 비례 환급 + 허위 매칭 부분 별도 환급 다툼 가능 영역입니다.</strong> 한국소비자원 분쟁조정 + 약관 환급 규정 + 표시광고법 위반 결합. 정신적 손해배상도 검토.',
      },
      {
        question: '회사가 \'본인 진술 기반\'이라며 책임 없다고 해요',
        answer:
          '<strong>가입 시 \'엄선·검증\' 표현으로 유도했다면 검증 의무 다툼 영역입니다.</strong> 약관규제법 제6조 \'고객에게 부당하게 불리한 조항\' 무효 가능. 약관 + 광고 표현 자료 결합.',
      },
      {
        question: '14일 지나서 청약철회 못 하나요?',
        answer:
          '<strong>14일 청약철회는 무조건 철회 영역이지만, 14일 후에도 약관·기망 취소·소비자분쟁조정 트랙은 별개입니다.</strong> 허위 프로필 정황 입증 시 회비 비례 환급 가능.',
      },
      {
        question: '캐피탈 대출로 회비 냈는데 어떻게 하나요?',
        answer:
          '<strong>회사 + 캐피탈사 동시 청약철회 통지 필수입니다.</strong> 할부거래법 제16조 \'할부거래업자 항변권\' 활용. 신용카드 결제도 동일하게 카드사 통지.',
      },
      {
        question: '같은 회사 피해자 카페·단톡방 가입했는데 도움이 되나요?',
        answer:
          '<strong>다수 피해자 결합은 형사 우선수사·표시광고법 신고 강력 정황 자료입니다.</strong> 같은 매니저·같은 매칭 패턴 입증 시 회수율 상승 영역.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '결혼사기 가해자 프로필 위장', href: '/guide/fraud/fraud-marriage-info-pretender' },
      { label: '결혼·로맨스 사기 회수', href: '/guide/fraud/fraud-romance-marriage-promise-recovery' },
      { label: '국제 로맨스 결혼 사기', href: '/guide/fraud/fraud-international-romance-marriage-recovery' },
      { label: '학원 등록비 환급 거부', href: '/guide/fraud/fraud-academy-tuition-refund-refusal-dispute' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-preparation' },
    ],
  },

  // ─── 2. fraud / fraud-coworker-coin-investment-loss-dispute ───
  {
    domain: 'fraud',
    slug: 'fraud-coworker-coin-investment-loss-dispute',
    keyword: '직장 동료 코인투자 권유 사기',
    questionKeyword: '회사 동료가 \'100% 보장\' 코인투자 권유해서 3천만원 보냈는데 손실났대요. 사기인가요 단순 투자손실인가요?',
    ctaKeyword: '코인투자 권유 사기 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '직장 코인투자 권유 손실 — 사기 vs 투자손실 5단계 다툼 | 로앤가이드',
      description:
        '직장 동료·상사가 \'원금 보장 코인\'으로 권유해 송금했는데 손실·잠적했다면 사기 편취의사 vs 단순 투자손실 5단계 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"같은 부서 선배가 \'본인이 직접 운영하는 코인이라 원금 보장에 월 10% 수익\'이라고 권유해서 3,000만원 송금했어요. 6개월 뒤 \'시장이 폭락해서 손실 났다\'며 환급을 거부하고, 알아보니 같은 회사 다른 직원도 비슷하게 송금했다가 손실 본 정황이 있습니다." 직장 동료·상사의 코인투자 권유 후 손실 사안은 \'단순 투자손실(민사)\'인지 \'편취의사 사기(형사)\'인지의 다툼 영역입니다. 대법원 2025도8824(가상자산 해외도피)·2024도10141(편취의사 종합 판단) 판결은 \'행위 당시 편취의사 + 약속한 수익 구조의 정상성 + 자금 사용 정황\' 종합 판단을 했어요. ① 약속한 수익률·원금 보장 표현 ② 자금 사용 내역 ③ 다른 피해자 정황 ④ 잠적·번호 변경 정황 ⑤ 본인 운영 사업의 실재 4~5축 결합으로 검토할 수 있는 영역이고, 직장 내 권유는 신뢰 관계로 인한 가중 정황으로 평가될 수 있어요.</p>',
    sections: [
      {
        title: 'Q. 코인투자 권유 사기 vs 투자손실 5가지 다툼 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 편취의사·자금 사용·다른 피해자·잠적 정황·신뢰 가중 5축으로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 약속한 수익률·원금 보장 표현 (편취의사 정황)</strong> — \'100% 원금 보장\' \'월 10% 확정\' 등 시장 정상 수익률을 벗어난 약속은 편취의사 정황. 카톡·녹취·메모 자료 핵심.</li>\n<li><strong>② 받은 자금의 실제 사용 내역</strong> — 가상자산 거래소 본인 인증된 거래 내역인지, 사적 소비·다른 채무 변제에 사용했는지. 자금세탁법 통한 추적 가능 영역.</li>\n<li><strong>③ 다른 피해자 정황</strong> — 같은 회사·같은 권유자에게 송금한 다른 피해자 진술. 동일 패턴 입증 시 편취의사 가중.</li>\n<li><strong>④ 잠적·번호 변경·환급 거부 정황</strong> — 손실 통지 후 연락 두절·번호 변경·SNS 비공개는 편취의사 강력 정황. 정상 투자 손실 시 통상 가해자가 변상·소통 시도하는 영역과 비교.</li>\n<li><strong>⑤ 본인 운영 사업·코인의 실재 검증</strong> — \'본인 운영 코인\'이 백서·상장·디지털 자산기본법 등록 여부 확인. 미존재 시 폰지 정황 강력.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 투자손실과 사기 편취의사의 분기는 \'행위 당시\' 편취의사 영역. 100% 원금 보장 약속 + 자금 사용 정황 + 다른 피해자 + 잠적이 결합되면 편취의사 다툼이 검토되는 영역. 직장 내 신뢰 관계는 가중 정황으로 평가.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 다른 피해자 결합 → 사기 고소 → 자금 추적 → 민사 회수 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 권유 카톡·녹취·\'원금 보장\' 표현·송금 영수증·약속한 수익률 자료·사내 메신저·이메일·만남 기록.</li>\n<li><strong>2단계 — 같은 회사 다른 피해자 확인 (1~2주 내)</strong> — 사내·동기 단톡방 조용히 정보 공유. 동일 권유 패턴 5명 이상 결합 시 검찰 우선수사 영역.</li>\n<li><strong>3단계 — 사이버범죄 + 사기 고소 (1개월 내)</strong> — ecrm.police.go.kr 또는 관할 경찰서. 가상자산 거래 내역 + 다른 피해자 진술 결합. 가상자산 거래소 사실조회.</li>\n<li><strong>4단계 — 자금 추적·가상자산 압수 (1~3개월)</strong> — 대법원 2025모45 판결로 가상자산 압수 가능 영역. 거래소 협조로 잔액 회수 가능성.</li>\n<li><strong>5단계 — 민사 회수 + 직장 내 평판 다툼 (3~12개월)</strong> — 부당이득반환·손해배상 청구. 직장 내 권유로 인한 신의칙 위반 + 정신적 손해도 별도 청구 가능 영역.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">코인투자 권유 사기 5단계 회수 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 9가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 권유 자료 + 자금 추적 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>권유 카톡·메신저·녹취</strong> — \'원금 보장\' \'월 10% 확정\' 표현 핵심.</li>\n<li><strong>송금 영수증·이체 내역</strong> — 본인 → 권유자 계좌·시간·금액.</li>\n<li><strong>약속 수익 지급 내역</strong> — 초기 수익 \'미끼\' 지급 정황. 폰지 패턴 자료.</li>\n<li><strong>코인·사업 백서·홈페이지 캡처</strong> — 실재 여부 검증.</li>\n<li><strong>가상자산 거래소 거래 내역 (본인)</strong> — 자금 흐름 추적.</li>\n<li><strong>다른 피해자 진술서</strong> — 동일 패턴 결합.</li>\n<li><strong>사내 메신저·이메일·근무 기록</strong> — 직장 내 신뢰 관계 정황.</li>\n<li><strong>권유자 SNS·잠적 정황 캡처</strong> — 손실 통지 후 비공개·번호 변경.</li>\n<li><strong>본인 신분증·통장 사본</strong> — 고소·환급 신청 첨부.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 직장 내 권유 사기는 \'사내 단톡방·이메일\'에서 권유자가 사용한 표현이 그대로 회사 내부 시스템에 남아있는 영역. 회사가 폐쇄적이지 않다면 인사팀·감사팀에 동일 피해자 정보 공유 협조 요청도 검토 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회수 한계와 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"단순 투자손실" 항변 반박</strong> — 정상 투자라면 100% 원금 보장 약속하지 않는 영역. 약속 표현 + 자금 사용 정황 + 다른 피해자 결합으로 편취의사 다툼.</li>\n<li><strong>"본인도 손실 봤다" 항변 반박</strong> — 권유자도 일부 자금 투입한 척 보일 수 있는 폰지 패턴 영역. 자금 흐름 추적으로 실제 손실 여부 검증 필수.</li>\n<li><strong>가상자산 압수 트랙</strong> — 대법원 2025모45 결정으로 거래소 전자지갑 비트코인 압수 가능 영역. 빠른 신고가 회수율 상승 핵심.</li>\n<li><strong>해외 도피 자금 한계</strong> — 대법원 2025도8824는 해외 가상자산 거래소 도피 자금에 대해 \'재산국외도피죄\' 별도 처벌 영역으로 봤지만, 회수는 어려운 영역. 국내 자산 가처분 우선.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr) / 182</strong></li>\n<li><strong>금융감독원 1332</strong> — 유사수신·가상자산 사기 안내.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>한국소비자원 1372</strong> — 분쟁조정 (C2C 한계 있음).</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 가상자산 사기와 자금 도피의 처벌 영역',
        summary:
          '대법원 2025도8824 사건(대법원, 2025.09.25 선고)에서 법원은 가상자산 매수·해외 송금 사안에서 \'행위 당시 경제적 사정·동기·은밀성·이후 조치 등 여러 사정을 두루 참작하여 엄격하고 신중하게 판단해야 한다\'고 판시했고, 같은 흐름에서 대법원 2024도10141 사건은 \'사기 공모공동정범의 고의 인정은 의사연락 내용·연락수단·업무 위탁 경위·보수 정도 등 여러 사정 종합 판단\' 영역임을 봤습니다. 직장 동료가 코인 권유로 송금받은 후 손실·잠적한 사안에서 \'행위 당시 편취의사\'는 100% 원금 보장 표현 + 자금 사용 정황 + 다른 피해자 동일 패턴 + 잠적·번호 변경 종합으로 인정될 영역으로 평가됩니다.',
        takeaway: '직장 내 코인투자 권유 후 손실 사안은 단순 투자손실 vs 사기 편취의사 다툼 영역으로, 권유 표현·자금 사용·다른 피해자·잠적 정황을 정리하면 5단계 회수 트랙이 검토 가능한 사례입니다.',
      },
    ],
    faq: [
      {
        question: '"투자라 책임은 본인"이라며 환급 거부하는데 사기 맞나요?',
        answer:
          '<strong>"100% 원금 보장" 약속이 있었다면 단순 투자손실과 다른 영역입니다.</strong> 카톡·녹취 표현 + 자금 사용 정황 + 다른 피해자 결합으로 편취의사 다툼 가능.',
      },
      {
        question: '같은 회사 동료들끼리 입소문난 거라 신고가 부담스러워요',
        answer:
          '<strong>인사팀·감사팀 익명 제보 또는 사외 변호사 자문 후 결정 권장입니다.</strong> 다수 피해자 결합 시 회수율 + 형사 진행 속도 모두 상승. 직장 평판 손상은 권유자 책임.',
      },
      {
        question: '코인이 \'본인이 직접 운영\'이라는데 백서가 없어요',
        answer:
          '<strong>백서·상장 정보 부재는 폰지·러그풀 강력 정황입니다.</strong> 가상자산 사업자 신고 여부(금융정보분석원 FIU)도 확인. 미신고 사업자라면 특정금융정보법 위반 별도.',
      },
      {
        question: '권유자가 잠적했어요. 어떻게 추적하나요?',
        answer:
          '<strong>회사 인사 정보 + 가상자산 거래소 사실조회로 추적 가능한 영역입니다.</strong> 사기 고소 후 수사기관 사실조회 권한 활용. 거래소 KYC 정보 회수 트랙.',
      },
      {
        question: '초기에 일부 수익 받았어요. 그 돈은 돌려줘야 하나요?',
        answer:
          '<strong>폰지 패턴의 \'미끼 수익\'으로 평가되는 영역입니다.</strong> 형사상 환수 대상 가능성 있지만 변호사 자문 후 결정. 합의·자수 시 변호사 협의 필수.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '코인 투자 사기 신고', href: '/guide/fraud/fraud-crypto-investment-scam-report' },
      { label: '지인 투자 권유 사기', href: '/guide/fraud/fraud-acquaintance-loan-civil-vs-criminal' },
      { label: '코인 P2P 사기', href: '/guide/fraud/fraud-coin-p2p-otc-scam' },
      { label: '투자유치 다단계 구조', href: '/guide/fraud/fraud-investment-mlm-structure' },
      { label: '사기 vs 민사 분기', href: '/guide/fraud/fraud-civil-criminal-sequence-decision' },
    ],
  },

  // ─── 3. fraud / fraud-insurance-broker-misexplain-refund ───
  {
    domain: 'fraud',
    slug: 'fraud-insurance-broker-misexplain-refund',
    keyword: '보험설계사 허위 설계 환급',
    questionKeyword: '보험설계사가 \'무사고 시 환급\'이라며 가입시켰는데 약관에 그런 규정이 없대요. 환급 가능한가요?',
    ctaKeyword: '보험설계사 허위 설계 환급 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '보험설계사 허위 설계 — 5단계 환급·계약취소 트랙 | 로앤가이드',
      description:
        '설계사가 \'전액 보장·무사고 환급\' 등 지급조건을 누락·왜곡했다면 보험업법 + 금감원 + 분쟁조정 5단계 환급·계약취소 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"보험설계사가 \'10년 무사고면 납입한 돈 100% 환급되는 보험\'이라며 월 30만원 종신보험에 가입시켰어요. 5년 뒤 해약하려니 환급금이 절반도 안 되고, 약관에는 \'무사고 환급\' 규정이 없다고 합니다." 보험설계사의 \'전액 보장\'·\'무사고 환급\'·\'세제혜택 100%\' 등 지급조건 누락·왜곡 설명은 ① 보험업법 제95조의2 설명의무 위반 ② 약관규제법 제3조 명시·설명의무 ③ 민법 제110조 기망 취소 ④ 금감원 분쟁조정 ⑤ 한국소비자원 분쟁조정 5축 결합 영역입니다. 대법원 2024도11951(보험사기방지특별법위반) 판결은 보험 분쟁의 기망 판단 기준을 다뤘고, 금융감독원 + 한국소비자원 분쟁조정 + 계약취소 환급 트랙으로 회수 가능성 검토할 수 있어요. 설계사의 설명 자료(녹취·청약서·상품안내서)와 실제 약관 격차가 회수의 핵심 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 보험설계사 허위 설계 5가지 환급 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 설명의무 위반·약관 기망·금감원 조정·계약취소·소비자원 5축으로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 보험업법 제95조의2 설명의무 위반</strong> — 설계사·보험사가 중요사항(지급조건·면책사유·환급률)을 누락·왜곡 설명한 정황. 위반 시 계약 취소 + 보험사 손해배상 영역.</li>\n<li><strong>② 약관규제법 제3조 명시·설명의무</strong> — 약관 내용을 설명·교부하지 않은 경우 \'그 부분을 계약 내용으로 주장 불가\'. 설명되지 않은 면책 조항·지급 조건은 보험사 측 주장 어려운 영역.</li>\n<li><strong>③ 민법 제110조 기망에 의한 취소</strong> — 설계사의 적극적 허위 설명(\'무사고 환급 100%\') 입증 시 의사표시 취소. 납입보험료 전액 환급 청구 영역.</li>\n<li><strong>④ 금융감독원 분쟁조정 (1332 / 분쟁조정위원회)</strong> — 보험사 vs 계약자 분쟁 무료 조정. 설명의무 위반·기망 정황 강하면 보험사 측 일부·전부 환급 결정 사례 다수.</li>\n<li><strong>⑤ 한국소비자원·계약자 단체 결합</strong> — 같은 설계사·보험사 동일 피해자 결합 시 표시광고법·소비자단체소송 트랙 검토 가능 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보험은 약관이 복잡해 \'설명의무 위반\'이 다툼의 핵심 영역. 청약서·상품안내서·설계사 카톡·녹취에서 \'무사고 환급\' \'전액 보장\' 등 약관에 없는 표현이 발견되면 설명의무 위반 + 기망 결합 입증 가능. 가입 시 받은 자료 전부 보존이 회수의 출발점.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 보험사 내용증명 → 금감원 분쟁조정 → 계약취소 → 민사·형사 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 청약서·상품안내서·약관·설계사 카톡·녹취·\'무사고 환급\' \'전액 보장\' 표현 자료·납입 영수증·해약환급금 통지서.</li>\n<li><strong>2단계 — 보험사 내용증명 + 환급 요구 (1~2주 내)</strong> — 설계사 설명 vs 약관 격차 명시 + 설명의무 위반 + 환급 요구 14일 기한. 우체국 내용증명.</li>\n<li><strong>3단계 — 금감원 분쟁조정 신청 (1332 / 약 30~90일)</strong> — 무료 조정. 설계사 설명 자료 + 약관 격차 입증. 보험사 측 응답 의무 + 일부·전부 환급 결정 사례.</li>\n<li><strong>4단계 — 계약취소·납입보험료 반환 청구 (분쟁조정 결렬 시)</strong> — 민법 제110조 기망 취소 + 납입보험료 전액 청구. 보험업법 위반 손해배상도 별도.</li>\n<li><strong>5단계 — 보험설계사 개인 사기·민사 (다수 피해자 결합 시)</strong> — 같은 설계사 다수 피해자 결합 + 동일 패턴 입증 시 형법 제347조 사기 + 보험사기방지특별법 검토 영역.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">보험설계사 허위 설계 5단계 환급 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 가입 자료 + 설명 격차 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>청약서·상품안내서·약관 (가입 시 교부본)</strong> — 보험사·설계사 서명·날인·교부일자.</li>\n<li><strong>설계사 카톡·이메일·녹취</strong> — \'무사고 환급\' \'100% 보장\' 표현.</li>\n<li><strong>가입 당시 받은 설계 안내서·시뮬레이션</strong> — 환급률·납입기간·예상 수익 표.</li>\n<li><strong>납입보험료 영수증·자동이체 내역</strong> — 총 납입액 산정.</li>\n<li><strong>해약환급금 통지서</strong> — 실제 환급률·약관 격차.</li>\n<li><strong>같은 설계사 다른 피해자 진술서·후기</strong> — 동일 패턴 입증.</li>\n<li><strong>본인 직업·소득·가입 동기 자료</strong> — 설명의무 위반 핵심 정황.</li>\n<li><strong>본인 신분증·통장 사본</strong> — 분쟁조정·환급 신청 첨부.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보험 가입 직후 보험사로부터 발송된 \'완전판매 모니터링 콜\' 녹음에서 본인이 \'무사고 환급된다고 들었다\'고 답한 정황이 있으면 강력한 설명 격차 자료. 보험사에 녹취록 사본 청구 가능 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 보험사 자주 항변과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"청약서에 서명했으니 동의" 항변 반박</strong> — 청약서 서명만으로 약관 설명 의무 면제 어려운 영역. 약관규제법 제3조 \'명시·설명의무\' 별개. 설명 안 된 부분은 계약 내용 주장 불가.</li>\n<li><strong>"설계사 개인 발언이라 보험사 책임 없다" 항변 반박</strong> — 설계사는 보험사 \'사용자 책임\'(민법 제756조) 영역. 보험업법 제95조의2 위반 시 보험사 직접 책임.</li>\n<li><strong>해약 vs 계약취소 분기</strong> — 단순 해약은 환급률 낮음(통상 50~70%). 계약취소는 납입보험료 전액 + 이자. 설명의무 위반 입증 시 후자 트랙.</li>\n<li><strong>설계사 사기 형사 한계</strong> — 단발 케이스는 단순 권유 인식 부재 다툼 영역. 다수 피해자 + 동일 패턴 결합 시 사기·보험업법 위반 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>금융감독원 1332 / e-fss.or.kr</strong> — 보험 분쟁조정 무료.</li>\n<li><strong>한국소비자원 1372 / ccr.kca.go.kr</strong> — 보험 분쟁조정.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong> — 사기 고소.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보험 분쟁에서 기망행위와 사기죄 성립 기준',
        summary:
          '대법원 2024도11951 사건(대법원, 2025.09.25 선고)에서 법원은 \'기망행위를 수단으로 한 권리행사가 사기죄를 구성하는지 여부\'에 대해 한정적으로 적극이라고 판시하면서 보험 분쟁에서 기망의 판단 기준을 다뤘습니다. 보험설계사가 \'무사고 환급 100%\' \'전액 보장\' 등 약관에 없는 표현으로 가입을 유도한 사안에서 ① 가입 시 강조 표현 ② 약관 격차 ③ 다른 피해자 동일 패턴 ④ 보험사 사용자 책임 4축 결합으로 보험업법 제95조의2 설명의무 위반 + 약관규제법 제3조 명시·설명의무 위반 + 민법 제110조 기망 취소 트랙이 결합되는 영역으로 평가됩니다. 또한 대법원 2007도8024(가입 시 설명의무 판례) 흐름에서 \'설계사 설명 자료가 약관과 다르면 그 부분은 계약 내용으로 주장 불가\'한 영역도 일관되게 인정되어 왔습니다.',
        takeaway: '보험설계사 허위 설계는 보험업법·약관규제법·민법 기망·금감원 분쟁조정 다축 결합 영역으로, 설명 자료·약관 격차·완전판매 녹취·다수 피해자 결합을 정리하면 5단계 환급 트랙이 검토 가능한 사례입니다.',
      },
    ],
    faq: [
      {
        question: '\'무사고 환급 100%\'라는 보험은 원래 없는 건가요?',
        answer:
          '<strong>약관에 \'무사고 환급\' 명시 없이는 그런 보장이 없는 영역입니다.</strong> 설계사 발언만으로 보장 약속 효력 어려움. 청약서·상품안내서 모두 확인 필수.',
      },
      {
        question: '청약서에 서명했는데 환급 받을 수 있나요?',
        answer:
          '<strong>청약서 서명과 약관 설명의무는 별개 영역입니다.</strong> 약관규제법 제3조 \'명시·설명되지 않은 조항은 계약 내용 주장 불가\'. 설명 안 된 면책·환급 조항 무효 다툼.',
      },
      {
        question: '설계사 개인이 한 말이라 보험사 책임 없다고 해요',
        answer:
          '<strong>설계사는 보험사 \'사용자 책임\' 영역입니다.</strong> 민법 제756조 + 보험업법 제95조의2. 보험사 직접 책임 청구 가능.',
      },
      {
        question: '5년 납입했는데 지금이라도 계약취소 가능한가요?',
        answer:
          '<strong>설명의무 위반·기망 정황 입증되면 계약취소 청구 가능한 영역입니다.</strong> 민법 제146조 추인 가능 시점 후 3년·법률행위 시 10년 시효. 빠른 분쟁조정 신청 권장.',
      },
      {
        question: '같은 설계사에게 당한 사람이 또 있어요',
        answer:
          '<strong>다수 피해자 결합은 보험사 사용자 책임 + 형사 사기 강력 정황입니다.</strong> 금감원 분쟁조정 동시 신청 + 보험업법 위반 신고. 회수율 + 환급률 모두 상승.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '보험사기 가해자 무고 방어', href: '/guide/fraud/fraud-insurance-conspiracy-falsely-accused' },
      { label: '보험사기 진료비 부풀리기', href: '/guide/fraud/fraud-insurance-hospital-padding-accused' },
      { label: '보이스피싱 보험금 환급', href: '/guide/fraud/fraud-voice-phishing-insurance-refund' },
      { label: '학원 등록비 환급 거부', href: '/guide/fraud/fraud-academy-tuition-refund-refusal-dispute' },
      { label: '사기 vs 민사 분기', href: '/guide/fraud/fraud-civil-criminal-sequence-decision' },
    ],
  },

  // ─── 4. fraud / fraud-self-surrender-settlement-mitigation ───
  {
    domain: 'fraud',
    slug: 'fraud-self-surrender-settlement-mitigation',
    keyword: '사기 자수 자진신고 합의 형 감경',
    questionKeyword: '사기 혐의로 조사받기 전인데 자수하고 피해자와 합의하면 형 감경 어느 정도 되나요?',
    ctaKeyword: '사기 자수 합의 감경 점검',
    type: '방어형',
    perspective: 'accused',
    meta: {
      title: '사기 자수 + 합의 — 5단계 형 감경·기소유예 트랙 | 로앤가이드',
      description:
        '사기 혐의를 받고 있다면 자수·자진신고·피해자 합의·변상으로 기소유예·집행유예 가능성을 5단계로 검토할 수 있는 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"투자 사업이 안 풀려서 받은 돈을 다른 곳에 썼고, 결국 갚지 못한 상태에서 피해자가 사기 고소를 준비하고 있다는 연락을 받았어요. 조사받기 전에 먼저 자수하고 합의하면 형이 가벼워진다고 들었는데 실제 어느 정도 효과가 있는지 알고 싶습니다." 혐의를 받고 있다면 자수·자진신고와 피해자 합의는 사기죄 양형의 결정적인 변수 영역입니다. 형법 제52조(자수·자복) + 양형위원회 사기범죄 양형기준은 ① 자수 ② 진지한 반성 ③ 피해자 합의 ④ 피해 변상 ⑤ 초범 5축을 \'특별감경인자\'로 분류하고, 검찰의 기소유예·법원의 집행유예·작량감경 결정의 핵심 정황으로 평가합니다. 대법원 2024도1932 판결은 사기죄에서 합의·변상의 양형 영향을 다뤘고, 자수 시점·합의 진정성·변상 비율이 처분 경감의 결정 변수 영역이에요.</p>',
    sections: [
      {
        title: 'Q. 사기 자수·합의 5가지 형 감경 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 자수 시점·합의 진정성·변상 비율·반성 정황·초범 5축으로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 자수 시점 (수사 개시 전 vs 후)</strong> — 형법 제52조 \'자수\'는 수사기관 인지 전 자진신고. 인지 후는 \'자복\'으로 평가. 인지 전 자수가 양형 + 기소유예 가능성 가장 큰 영역.</li>\n<li><strong>② 피해자 합의 (조사~기소 전 시점)</strong> — 양형위원회 \'특별감경인자\' 핵심. 합의서 + 처벌불원서 + 변상금 영수증 결합. 기소 전 합의가 기소유예 가능성 영역.</li>\n<li><strong>③ 변상 비율 (전액 vs 일부)</strong> — 전액 변상은 강력 감경. 일부 변상은 비율·진지성에 따라 부분 감경. 분할 변상 약정도 인정 영역.</li>\n<li><strong>④ 진지한 반성·재범방지 노력</strong> — 반성문·교육 이수·심리상담 이수·정기 봉사활동 자료. 양형위원회 \'반성문\' \'교육 이수\' 별도 양형 요소.</li>\n<li><strong>⑤ 초범·전과 정황</strong> — 초범은 양형 +1단계 감경 영역. 동종전과·누범은 가중. 대법원 2025도15970은 형이 실효되어도 누범 인정 영역으로 봤습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사기죄 양형은 자수·합의·변상·반성·초범 5축이 결합된 영역. 5축 모두 충족 시 통상 기소유예 또는 집행유예 가능성 검토 영역. 변호인 자문 후 자수 시점·합의 전략 결정이 안전.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 자수·합의 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 변호인 자문 → 변상 자금 마련 → 피해자 합의 시도 → 자수·자복 → 처분 경감 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 자수 시점·합의 전략·변상 자금 출처 종합 검토. 자격 시 대한법률구조공단 132 무료 상담 + 국선변호인 검토.</li>\n<li><strong>2단계 — 변상 자금 마련 (1~2주)</strong> — 본인 자산·가족 도움·금융 대출. 분할 변상 약정도 가능 영역.</li>\n<li><strong>3단계 — 피해자 합의 시도 (변호인 동행 권장)</strong> — 직접 접촉 시 \'2차 피해\'·\'사후 매수\' 의심 위험. 변호사 통한 합의서·처벌불원서 작성. 사과·변상·보호각서 결합.</li>\n<li><strong>4단계 — 자수·자복 (수사 개시 전 권장)</strong> — 관할 경찰서 또는 검찰청. 변호인 동행. 자수서·반성문·합의서·변상 영수증 동시 제출.</li>\n<li><strong>5단계 — 처분 경감 (송치~기소 전)</strong> — 검찰 기소유예 또는 약식기소·정식기소 + 집행유예. 양형위원회 \'특별감경인자\' 적극 주장.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 혐의 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사기 자수·합의 5단계 감경 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 자수·반성 자료 + 합의·변상 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>자수서 (변호인 검토 후 작성)</strong> — 사실관계·동기·반성 표현. 형법 제52조 자수.</li>\n<li><strong>반성문·재범방지 다짐서</strong> — 진지성 입증. 가족·동료 동참 진술서.</li>\n<li><strong>합의서·처벌불원서</strong> — 피해자 서명·인감·내용 명시. 변호사 작성 권장.</li>\n<li><strong>변상금 영수증·이체 내역</strong> — 변상 시점·금액. 분할 약정서도 인정.</li>\n<li><strong>본인 직업·소득·가족 자료</strong> — 양형 가족 정상 정황.</li>\n<li><strong>전과 조회 결과</strong> — 초범 정황. 전과 있으면 누범 여부 검토.</li>\n<li><strong>심리상담·교육 이수증</strong> — 재범방지 노력. 양형위원회 별도 요소.</li>\n<li><strong>본인 신분증·주민등록등본·재정 자료</strong> — 자수·합의 절차 첨부.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자수서는 \'행위·동기·반성\' 3축 구성이 효과적. \'경제적 어려움 → 잘못된 판단 → 깊은 반성 → 변상 노력 → 재발 방지 다짐\' 흐름. 변호인 검토 후 제출이 안전한 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 검찰 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"자수 시점이 늦었다" 평가 반박</strong> — 수사기관 인지 전 자수가 가장 강력. 인지 후라도 \'자복\'으로 양형 감경 영역. 인지 시점 정확한 입증 + 자수 동기 진정성.</li>\n<li><strong>"합의 사후 매수" 의심 반박</strong> — 변호사 통한 합의 + 처벌불원서 작성 시점·금액 명확. 피해자 자유의사 입증. 사과 진정성 함께.</li>\n<li><strong>전과·누범 가중 주의</strong> — 대법원 2025도15970은 \'형 실효되어도 누범 인정\' 영역. 전과가 있다면 변호인과 누범 회피 전략 검토 필수.</li>\n<li><strong>"피해자 다수 결합" 가중 주의</strong> — 다수 피해자 결합 시 양형 가중. 모든 피해자와 합의 시도 + 분할 변상 약정도 적극 활용.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담 (자격 시 무료 변론).</li>\n<li><strong>국선변호인 (대한변협 02-2087-7700)</strong> — 자격 요건 시 국선 선임.</li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong> — 자수 접수.</li>\n<li><strong>형사조정 (검찰청)</strong> — 합의 공식 절차로 양형 강력 감경.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄 합의·변상의 양형 영향과 누범 가중',
        summary:
          '대법원 2024도1932 사건(대법원, 2025.09.11 선고)에서 법원은 사기죄의 죄수 관계와 양형 판단을 다루면서 \'피해자 합의·변상은 사기죄의 책임·반성 정도를 평가하는 핵심 양형요소\'임을 일관되게 보았고, 양형위원회 사기범죄 양형기준도 \'합의(공탁 포함)\'·\'진지한 반성\'·\'자수\'를 \'특별감경인자\'로 분류하고 있습니다. 또한 대법원 2025도15970 사건(대법원, 2026.01.29 선고)에서 법원은 \'금고 이상의 형이 형의 실효 등에 관한 법률 제7조에 따라 실효되었더라도 형법 제35조 제1항 누범사유에 여전히 해당한다\'고 판시하여, 사기 전과가 있다면 누범 가중 회피 전략 + 합의·변상 결합이 양형의 결정 변수 영역임을 확인했습니다.',
        takeaway: '사기 자수·합의·변상은 양형위원회 특별감경인자 영역으로, 자수 시점·합의 진정성·변상 비율·반성 자료·전과 정황을 정리하면 5단계 형 감경·기소유예 트랙이 검토 가능한 사례입니다.',
      },
    ],
    faq: [
      {
        question: '자수만 하고 합의는 못 했는데 효과가 있나요?',
        answer:
          '<strong>자수 단독으로도 형법 제52조 임의적 감면 영역입니다.</strong> 다만 합의·변상 결합 시 효과 극대화. 변상 자금 마련 어려우면 분할 약정도 검토.',
      },
      {
        question: '피해자가 합의 거절하면 어떻게 하나요?',
        answer:
          '<strong>형사조정·변호사 거듭 시도 + 일방적 변상금 공탁이 차선입니다.</strong> 공탁도 양형 감경 인정 영역. 진정성 있는 사과 편지 동봉 권장.',
      },
      {
        question: '직접 피해자에게 연락해도 되나요?',
        answer:
          '<strong>변호사 통한 접촉이 안전한 영역입니다.</strong> 직접 접촉 시 \'2차 피해\' \'사후 매수\' 의심 위험. 변호사 자문 후 결정.',
      },
      {
        question: '전과가 있는데 누범 가중 어떻게 피하나요?',
        answer:
          '<strong>대법원 2025도15970은 형 실효되어도 누범 인정 영역입니다.</strong> 변호인과 \'동종전과 vs 이종전과\' 구분 + 합의·변상으로 양형 회복 전략. 단순 \'실효\' 주장 한계.',
      },
      {
        question: '변호사 비용이 부담스러워요',
        answer:
          '<strong>대한법률구조공단 132 무료 상담을 먼저 검토해보세요.</strong> 소득·재산 요건 충족 시 무료 변론 가능 영역. 국선변호인 선임도 검토.',
      },
    ],
    cta: { text: '혐의 대응 순서, AI로 정리하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 합의·감경 효과', href: '/guide/fraud/fraud-accused-settlement-penalty' },
      { label: '사기 누명 무고 방어', href: '/guide/fraud/fraud-false-accusation-defense' },
      { label: '편취의사 부정 항변', href: '/guide/fraud/fraud-charge-rebuttal' },
      { label: '사기 변호사 선임 시점', href: '/guide/fraud/fraud-accused-lawyer-retain-timing' },
      { label: '사기 누범 양형', href: '/guide/fraud/fraud-recidivist-sentencing-risk' },
    ],
  },

  // ─── 5. fraud / fraud-sentencing-four-axes-amount-settle-prior ───
  {
    domain: 'fraud',
    slug: 'fraud-sentencing-four-axes-amount-settle-prior',
    keyword: '사기죄 양형 4갈래 피해액 합의 전과 고의성',
    questionKeyword: '사기 혐의로 조사 중인데 양형이 어떻게 결정되나요? 피해액·합의·전과·고의성 어디가 가장 중요한가요?',
    ctaKeyword: '사기 양형 4갈래 점검',
    type: '방어형',
    perspective: 'accused',
    meta: {
      title: '사기죄 양형 4갈래 — 피해액·합의·전과·고의성 정리 | 로앤가이드',
      description:
        '사기 혐의를 받고 있다면 양형의 4가지 결정 변수(피해액·합의·전과·고의성)를 5단계로 정리하고 본인 사안 가중·감경 여지를 지금 확인하세요.',
    },
    intro:
      '<p>"투자 권유로 받은 돈 8,000만원을 갚지 못해 사기 고소됐어요. 변호사가 \'양형은 피해액·합의·전과·고의성 4가지로 결정된다\'고 했는데, 본인 사안에서 어디가 가장 중요한지, 어디서 감경 여지가 있는지 알고 싶습니다." 혐의를 받고 있다면 사기죄(형법 제347조) 양형은 양형위원회 양형기준에 따라 4가지 핵심 변수로 결정됩니다. ① 피해액(5천만원·1억원·5억원·50억원 구간) ② 합의·변상(특별감경인자) ③ 전과·누범(가중) ④ 고의성·계획성·기망 정도(범행 동기·수단). 대법원 2025도15970(누범 가중)·2024도1932(합의 양형)·2024도10141(고의 판단) 판결은 4축 결합 양형 판단을 보여줘요. 본인 사안에서 4축 어디에 가중·감경 여지가 있는지 정리하면 변호인 전략 + 처분 경감 트랙이 검토 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 사기죄 양형 4갈래 결정 변수',
        content:
          '<p><strong style="color:#1e3a5f">A. 피해액·합의·전과·고의성 4축으로 가중·감경 영역을 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 피해액 구간 (가장 큰 변수)</strong> — 일반 사기(형법 제347조): 5천만원 미만(기본 6월~1년6월)·1억원 미만(1~3년)·5억원 미만(2~5년). 특정경제범죄법(특경법) 제3조: 5억원 이상(3년 이상 유기·8년 이상)·50억원 이상(5년 이상·15년 이상). 피해액이 양형의 출발점.</li>\n<li><strong>② 합의·변상 (특별감경인자)</strong> — 양형위 \'합의(공탁 포함)\' \'진지한 반성\' \'피해 회복\'은 1~2단계 감경 영역. 기소유예·집행유예의 결정 변수.</li>\n<li><strong>③ 전과·누범 (가중)</strong> — 동종전과 + 3년 내 재범은 누범(형법 제35조) 장기 2배. 대법원 2025도15970은 형 실효되어도 누범 인정 영역.</li>\n<li><strong>④ 고의성·계획성·기망 정도</strong> — 처음부터 편취 계획(폰지·다단계) vs 사업 실패 후 변제 불능. 대법원 2024도10141은 \'행위 당시 편취의사\'를 종합 판단으로 봤어요. 단순 변제지체는 사기 부정 다툼 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 4축 중 본인이 \'바꿀 수 있는\' 변수는 ② 합의·변상과 ④ 고의성 다툼 영역. ① 피해액과 ③ 전과는 \'주어진 조건\'이라 변호인이 다툴 여지 한정. 합의·변상 + 고의성 다툼이 처분 경감의 핵심 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 양형 검토 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 피해액 구간 확인 → 전과·누범 검토 → 고의성 다툼 → 합의·변상 → 양형 의견서 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 피해액 구간 확인 (즉시)</strong> — 본인 받은 자금 합계 + 다수 피해자 결합 시 누계. 5억 미만·이상 분기가 특경법 적용 결정.</li>\n<li><strong>2단계 — 전과·누범 검토 (1주 내)</strong> — 변호사 자문 + 전과 조회. 동종 전과 + 3년 내 재범이면 누범 회피 전략 핵심.</li>\n<li><strong>3단계 — 고의성·계획성 다툼 (조사 전 권장)</strong> — \'행위 당시 편취의사\' 부정 자료. 사업 정상성·자금 사용·다른 변제 노력 시간순 정리.</li>\n<li><strong>4단계 — 합의·변상 시도 (조사~기소 전)</strong> — 변호사 통한 합의 + 변상 + 처벌불원서. 분할 약정·일부 공탁도 인정 영역.</li>\n<li><strong>5단계 — 양형 의견서 제출 (송치~기소·재판)</strong> — 4축 종합 의견서. 직업·가족·재범방지 노력·사회봉사 자료 결합. 양형위원회 \'특별감경인자\' 명시.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 혐의 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사기 양형 4갈래 5단계 검토 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 4축 자료를 항목별로 정리하면 변호인 의견서 작성에 효율적입니다.</strong></p>\n<ul>\n<li><strong>피해액 산정 자료</strong> — 받은 자금 영수증·계약서·정산 내역. 일부 변제 차감 후 순 피해액.</li>\n<li><strong>전과 조회 결과</strong> — 본인 동종·이종 전과 + 실효 시점.</li>\n<li><strong>사업·자금 사용 정상성 자료</strong> — 사업자등록·사업계획·매출 자료·자금 사용 영수증.</li>\n<li><strong>변제 노력 시간순 자료</strong> — 부분 변제·연락 응대·약속 갱신. 단순 변제지체 정황.</li>\n<li><strong>합의서·처벌불원서·변상 영수증</strong> — 양형 특별감경인자 핵심.</li>\n<li><strong>본인 직업·소득·가족 자료</strong> — 사회적 정상 + 부양 가족.</li>\n<li><strong>반성문·교육 이수·심리상담 자료</strong> — 재범방지 노력.</li>\n<li><strong>본인 신분증·주민등록등본·재정 자료</strong> — 양형 의견서 첨부.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 변호인 양형 의견서는 4축 각각에 대해 \'본인 사안에서의 감경 여지\'를 명시적으로 주장. 양형위원회 양형기준 \'특별감경인자\' 인용 + 본인 사안 적용 결합이 효과적인 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 검찰 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"피해액이 크니 실형" 주장 반박</strong> — 피해액은 출발점이지 결정 요소 아님. 합의·변상·반성·고의성 다툼 결합으로 집행유예 가능 영역. 5억 미만은 양형 폭이 넓은 영역.</li>\n<li><strong>"전과 있으니 가중" 주장 반박</strong> — 동종·이종 구분 + 누범 회피 전략. 대법원 2025도15970은 \'실효되어도 누범\' 영역이지만, 누범 적용 요건(3년·금고 이상) 정확한 검토.</li>\n<li><strong>"행위 당시 편취의사" 다툼</strong> — 대법원 2024도10141은 \'간접사실·정황사실 종합 판단\' 영역으로 봤어요. 사업 정상성 자료 결합으로 단순 변제지체 다툼 가능.</li>\n<li><strong>다수 피해자 결합 가중 주의</strong> — 누계 피해액 5억 이상이면 특경법 적용 영역. 모든 피해자와 분할 합의 + 형사조정 적극 활용.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담 (자격 시 무료 변론).</li>\n<li><strong>국선변호인 (대한변협 02-2087-7700)</strong> — 자격 요건 시 국선 선임.</li>\n<li><strong>형사조정 (검찰청)</strong> — 합의 공식 절차.</li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄 양형 4축의 결합 판단',
        summary:
          '대법원 2025도15970 사건(대법원, 2026.01.29 선고)에서 법원은 \'금고 이상의 형을 선고받아 그 집행이 종료되거나 면제된 후 3년 내에 금고 이상에 해당하는 죄를 범한 경우, 그 후 그 형이 형의 실효 등에 관한 법률 제7조에 따라 실효되었더라도 형법 제35조 제1항에서 정한 누범사유에 여전히 해당한다\'고 판시하여 전과·누범 축의 양형 가중 영역을 명확히 했습니다. 또한 대법원 2024도1932 사건은 사기죄와 업무방해죄의 죄수 관계에서 \'합의·변상이 양형의 핵심 변수\'임을 보였고, 대법원 2024도10141 사건은 \'행위 당시 편취의사 + 고의 인정은 의사연락 내용·연락수단·업무 위탁 경위·문서 정상성·보수 정도·피고인 나이·지능·경력 등 종합 판단\' 영역임을 판시했습니다. 사기죄 양형은 ① 피해액 구간 ② 합의·변상 ③ 전과·누범 ④ 고의성·계획성 4축이 결합된 종합 판단 영역입니다.',
        takeaway: '사기죄 양형 4갈래는 양형위원회 양형기준 + 다수 대법원 판례에 의해 결합 판단 영역으로 정착했고, 본인 사안에서 4축 각각의 가중·감경 여지를 정리하면 5단계 양형 검토 트랙이 검토 가능한 사례입니다.',
      },
    ],
    faq: [
      {
        question: '피해액 5,000만원인데 합의 안 하면 실형인가요?',
        answer:
          '<strong>피해액 5,000만원 미만은 양형 기본 6월~1년6월 영역입니다.</strong> 합의·반성·초범 결합 시 집행유예 가능. 합의·변상 + 변호인 의견서가 핵심.',
      },
      {
        question: '동종 전과 5년 전 거 있는데 누범 적용되나요?',
        answer:
          '<strong>형 집행 종료 후 3년 내 재범이면 누범 영역입니다.</strong> 5년 전이면 누범 미적용 가능. 대법원 2025도15970은 \'실효되어도 누범\'이라 정확한 시점 검토 필수.',
      },
      {
        question: '사업이 안 풀려서 갚지 못한 건데 사기인가요?',
        answer:
          '<strong>"행위 당시 편취의사" 부정 가능한 영역입니다.</strong> 대법원 2024도10141 종합 판단. 사업 정상성·자금 사용·변제 노력 자료 결합 입증으로 단순 변제지체 다툼.',
      },
      {
        question: '피해자가 여러 명이라 합의가 어려워요',
        answer:
          '<strong>분할 합의 + 형사조정 + 일부 공탁 결합이 차선입니다.</strong> 모든 피해자에 동일 진정성 + 변상 약정. 일부 합의도 양형 감경 영역.',
      },
      {
        question: '5억 이상이면 특경법 적용된다는데 차이가 뭔가요?',
        answer:
          '<strong>일반 사기(형법 제347조)는 10년 이하, 특경법(5억 이상)은 3년 이상 유기, 50억 이상은 5년 이상 영역입니다.</strong> 합의·변상으로 작량감경·집행유예 트랙은 동일하지만 폭이 좁아짐.',
      },
    ],
    cta: { text: '혐의 대응 순서, AI로 정리하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 합의·감경 효과', href: '/guide/fraud/fraud-accused-settlement-penalty' },
      { label: '사기 누범 양형 가중', href: '/guide/fraud/fraud-recidivist-sentencing-risk' },
      { label: '사기 재범 양형', href: '/guide/fraud/fraud-repeat-offense-sentencing' },
      { label: '편취의사 부정 항변', href: '/guide/fraud/fraud-charge-rebuttal' },
      { label: '사기 변호사 선임 시점', href: '/guide/fraud/fraud-accused-lawyer-retain-timing' },
    ],
  },
];
