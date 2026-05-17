import { SpokePage } from '../spoke-pages';

// batch68 fraud — 5개 (2026-05-18)
//
// 고유 존재 이유:
// 1. fraud-luxury-resale-counterfeit-delivery-refund-track — 명품 리셀·중고 명품 플랫폼에서 정품 표시 후 가품 배송 + 환불 거부 (기존 fraud-luxury-fake-counterfeit / fraud-secondhand-luxury-replica-defense / fraud-secondhand-luxury-fake-track 와 분기: "전문 리셀 사이트 + 정품 인증 표기 + 가품 배송" 트랙, 상표법·표시광고법 결합 영역).
// 2. fraud-game-item-account-reclaim-track — 게임 아이템·계정 거래 후 매도인의 운영사 신고로 계정 회수·복구 (기존 fraud-nft-game-item-rugpull-developer-flee-track 와 분기: "기성 게임 아이템 + P2P 거래 + 운영사 회수" 트랙, 게임산업법 + 사기 결합 영역).
// 3. fraud-pt-membership-transfer-vanish-track — 헬스장 PT·필라테스 회원권 잔여 횟수 양수도 후 양도인이 회원권 해지·잠적 (기존 fraud-pilates-prepay-bankruptcy-installment-defense-track / fraud-gym-closure-membership-refund 와 분기: "회원권 양수도(개인간 거래) + 양도인 해지·잠적 + 양수인 피해" 트랙, 회원 간 부진정연대 + 운영사 책임 검토).
// 4. fraud-used-car-dealer-test-drive-bait-switch-track — 중고차 매매상이 시승 차량과 다른 차량으로 매매 (기존 fraud-used-car-flood-accident-history-conceal-track / fraud-used-car-meter-history-concealed 등과 분기: "시승·전시 차량과 인도 차량 불일치 + 동일성 사기" 트랙, 자동차관리법 + 사기 + 사문서위조 결합).
// 5. fraud-comment-part-time-advance-deposit-track — "댓글 알바·평점 알바" 모집으로 선금 입금 유도 후 잠적 (보이스피싱 변형 + 대포통장·현금수거 패턴) (기존 fraud-voice-phishing-money-mule-defense / fraud-elderly-voice-phishing-recovery 와 분기: "재택 부업·댓글 알바 명목 + 피해자가 송금자(보이스피싱 변형)" 트랙, 통신사기피해환급법 + 즉시 지급정지).

export const spokesBatch68Fraud: SpokePage[] = [
  // ─── 1. fraud-luxury-resale-counterfeit-delivery-refund-track ───
  {
    domain: 'fraud',
    slug: 'fraud-luxury-resale-counterfeit-delivery-refund-track',
    keyword: '명품 리셀 가품 배송 환불 거부',
    questionKeyword: '명품 리셀 사이트에서 "정품 인증" 표시된 가방 320만원 결제, 도착품 정품 감정 결과 가품 판정, 사이트는 환불 거부.',
    ctaKeyword: '명품 리셀 가품 배송 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '명품 리셀 가품 배송 환불 거부 — 5단계 환수 트랙 | 로앤가이드',
      description:
        '명품 리셀·중고 명품 사이트에서 "정품 인증" 표시된 상품이 가품으로 판정되고 환불이 거절된다면 5가지 환수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중고 명품 전문 리셀 사이트에서 \'정품 인증·자체 감정 완료\' 표기된 가방을 320만원에 결제. 배송 후 제3자 정품 감정원에 의뢰했더니 \'가품\' 판정. 사이트에 환불을 요구하니 \'자체 감정에서는 정품, 외부 감정 결과는 인정 불가\'라며 거부, 그 후 응대 지연·연락 두절. 알고 보니 같은 사이트에서 가품을 수령한 다른 구매자가 SNS·중고 명품 카페에 다수 보고된 상태였어요." 명품 리셀 사이트 가품 배송 + 환불 거부는 ① 사기죄(형법 347조) — "정품 인증" 표시로 기망 ② 상표법(상표권 침해 양도) ③ 표시광고법(허위·과장 광고) ④ 한국소비자원 분쟁조정 ⑤ 카드 항변권 + 민사 부당이득 트랙이 검토 가능한 영역. 외부 감정원 가품 판정 + 같은 사이트 다수 피해 + "자체 감정 우선" 거절 패턴이 결정적 사정. 피해자라면 사실관계 입증할 수 있다면 ① 광고·결제·감정서 ② 다른 피해자 명단 ③ 소비자원·고소 ④ 카드 항변 ⑤ 민사 5단계로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 명품 리셀 가품 배송 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·감정·신고·항변·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 광고·결제·상품 자료 보존</strong> — "정품 인증" 표기 캡처·결제·송장·실물 사진.</li>\n<li><strong>② 외부 감정원 정품 감정</strong> — 명품 감정원 감정서(가품 판정 명시).</li>\n<li><strong>③ 한국소비자원 1372·공정위 신고</strong> — 표시광고법·전자상거래법.</li>\n<li><strong>④ 카드 할부항변 (90일 내) + 사이버 사기 고소 (ecrm)</strong></li>\n<li><strong>⑤ 민사 부당이득·손해배상</strong> — 감정 비용 포함 10년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "정품 인증·자체 감정" 표기로 구매를 유도하고 가품을 배송한 뒤 외부 감정 결과를 거부한다면 정품 표시에 의한 기망 + 상표권 침해 양도가 결합된 영역으로 평가될 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (수령 당일)</strong> — 광고 페이지·상품설명·결제·송장·외관 사진·태그.</li>\n<li><strong>2단계 — 외부 감정원 감정서 발급 (1~2주)</strong> — 명품 감정원·브랜드 공인 감정.</li>\n<li><strong>3단계 — 한국소비자원 1372 분쟁조정 (30~60일)</strong> — 표시광고법·전자상거래법 위반.</li>\n<li><strong>4단계 — 카드 할부항변 (90일 내) + 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 다수 피해자 집단 고소 권장.</li>\n<li><strong>5단계 — 민사 부당이득 반환 + 감정 비용 손해배상 (10년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">명품 리셀 가품 배송 환수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 광고·결제·감정 갈래로 정리됩니다.</strong></p>\n<ul>\n<li><strong>광고 페이지 캡처 ("정품 인증" "자체 감정" "100% 정품" 문구 포함)</strong></li>\n<li><strong>주문 내역·결제 영수증·카드 매출전표</strong></li>\n<li><strong>상품 수령 시 외관·태그·시리얼·내부 라벨 사진</strong></li>\n<li><strong>외부 감정원 감정서(가품 판정 명시, 감정인 자격)</strong></li>\n<li><strong>사이트와 환불 거절 대화 (이메일·채팅·카톡)</strong></li>\n<li><strong>같은 사이트 가품 피해자 SNS·카페 게시글·명단</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 명품 감정원 감정서에는 "감정 기준·근거(스티치·각인·로고·소재)"와 "가품 판정" 문구가 명시되어야 사기 입증 자료로 평가될 수 있는 영역. 자체 사진만으로는 입증 부족.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담·신고 기관입니다.</strong></p>\n<ul>\n<li><strong>"자체 감정 우선" 약관</strong> — 일방 면책 조항은 무효·약관규제법 검토 영역.</li>\n<li><strong>가품 판정 객관성</strong> — 외부 공인 감정원 vs 사이트 자체 감정 신뢰도.</li>\n<li><strong>상표권 침해 양도 책임</strong> — 상표법 위반 신고 별도 트랙.</li>\n<li><strong>반품 거절·시간 끌기</strong> — 카드 항변 90일 시효 우선 행사.</li>\n<li><strong>해외 셀러 입점 사이트</strong> — 플랫폼 책임·통신판매업 신고 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>공정거래위원회 신고 (표시광고·전자상거래)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>특허청 상표권 침해 신고</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상표권 침해 양도·정품 표시 기망',
        summary:
          '대법원 2021도2180(대법원, 2022.03.17 선고) 영역에서 법원은 타인의 등록상표가 부착된 위조 상품을 정품으로 표시·양도한 경우 상표권 침해와 함께 판매 행위에서 기망이 함께 평가될 수 있다고 본 사례 흐름이 있습니다. 자체 사진·자체 감정서를 근거로 정품임을 표시했다 하더라도 위조 사실을 알면서 거래를 계속한 사정이 확인되면 평가 대상에 포함되는 영역으로 해석된 사례 흐름입니다.',
        takeaway: '"정품 표기 + 가품 배송 + 외부 감정 거부" 결합은 상표권 침해 + 사기로 평가될 수 있는 영역. 외부 공인 감정원 감정서가 핵심 자료.',
      },
    ],
    faq: [
      {
        question: '사이트는 "자체 감정에서 정품"이라며 외부 감정을 인정하지 않습니다',
        answer:
          '<strong>외부 공인 감정원 결과가 객관적 자료로 평가될 수 있는 영역입니다.</strong> 약관에 "자체 감정 우선" 조항이 있어도 약관규제법상 일방적·불리한 조항은 무효 검토 대상.',
      },
      {
        question: '카드 할부항변권은 어떤 경우 행사할 수 있나요?',
        answer:
          '<strong>20만원 이상·3개월 이상 할부 결제에 한해 90일 내 카드사에 신청할 수 있는 영역입니다.</strong> 가품 판정 감정서·환불 거절 자료 첨부.',
      },
      {
        question: '같은 사이트에서 다른 피해자도 가품을 받았다면?',
        answer:
          '<strong>SNS·중고 명품 카페에서 피해자 명단을 모아 집단 분쟁조정·집단 고소로 진행할 수 있는 영역입니다.</strong> 수사 우선순위 상승 효과.',
      },
      {
        question: '명품 감정 비용도 환수 대상인가요?',
        answer:
          '<strong>가품 판정을 위해 합리적으로 지출한 감정 비용은 손해배상 청구 범위로 평가될 수 있는 영역입니다.</strong> 감정원 영수증 보존.',
      },
      {
        question: '해외 셀러가 입점한 플랫폼은 어떻게 청구하나요?',
        answer:
          '<strong>국내 플랫폼이 결제·고객응대·CS를 직접 운영했다면 플랫폼 책임 검토 가능한 영역입니다.</strong> 통신판매업 신고 여부도 확인.',
      },
      {
        question: '특허청 상표권 침해 신고는 어떻게 하나요?',
        answer:
          '<strong>특허청 상표권 침해 신고센터에 신고하면 상표권자 협조 + 행정 조사로 진행될 수 있는 영역입니다.</strong> 형사 고소와 병행 가능.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '카드 할부항변', href: '/guide/fraud/fraud-card-installment-objection' },
      { label: '온라인 쇼핑 사기', href: '/guide/fraud/fraud-online-shopping-procedure' },
      { label: '집단 고소', href: '/guide/fraud/fraud-group-complaint' },
    ],
  },

  // ─── 2. fraud-game-item-account-reclaim-track ───
  {
    domain: 'fraud',
    slug: 'fraud-game-item-account-reclaim-track',
    keyword: '게임 아이템 계정 거래 회수',
    questionKeyword: 'MMORPG 고급 캐릭터·아이템 패키지 250만원에 거래소 외 직거래로 구매, 한 달 뒤 운영사가 매도인 신고로 계정·아이템 회수.',
    ctaKeyword: '게임 아이템 계정 회수 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '게임 아이템·계정 거래 후 회수 — 5단계 환수 트랙 | 로앤가이드',
      description:
        'MMORPG·온라인 게임 아이템·계정을 거래소 외 직거래로 구매한 뒤 운영사 신고로 회수되었다면 5가지 환수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"인기 MMORPG에서 고급 캐릭터·아이템 패키지를 카페·디스코드 직거래로 250만원에 결제. 거래 직후엔 정상 이용 가능했으나, 한 달 뒤 운영사가 \'매도인 본인 사정으로 인한 계정 회수 신고\' 절차를 받아들여 캐릭터·아이템·계정이 일괄 회수. 매도인은 \'계정 회수는 운영사 결정, 환불 어렵다\'며 응대 차단. 알고 보니 같은 매도인이 여러 게임에서 같은 패턴으로 다수 구매자에게 매도 후 운영사 회수 절차를 거쳐온 정황이 SNS·게임 커뮤니티에 보고됐어요." 게임 아이템·계정 거래 후 회수 패턴은 ① 사기죄(형법 347조) — 거래 후 회수 의사·정황 인지 ② 게임산업법(약관 위반 매매) ③ 한국소비자원 분쟁조정 ④ 사이버 사기 고소 ⑤ 민사 부당이득 트랙이 검토 가능한 영역. 운영사 약관 위반·반복 패턴 + 매도인 신원 위장 + 사후 환불 거절이 결정적 사정. 피해자라면 사실관계 입증할 수 있다면 ① 거래·운영사 회수 안내 자료 ② 매도인 정보 ③ 신고·고소·민사 5단계로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 게임 아이템 회수 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·운영사·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·운영사 안내 자료 보존</strong> — 거래 메시지·이체·운영사 회수 통보·로그.</li>\n<li><strong>② 매도인 신원·반복 패턴 확인</strong> — 같은 캐릭터·계정의 다수 거래 이력.</li>\n<li><strong>③ 한국소비자원 1372 분쟁조정</strong> — 약관 위반·기망 거래.</li>\n<li><strong>④ 경찰 사이버 사기 고소 (ecrm)</strong> — 게임산업법 + 사기 결합.</li>\n<li><strong>⑤ 민사 부당이득 반환 (10년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 매도인이 사후 운영사 신고로 계정을 회수당할 가능성을 알면서도 매매한 정황이 확인되면 거래 시점의 기망으로 평가될 수 있는 영역. 반복 패턴 입증이 결정적.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (회수 통보 당일)</strong> — 거래 메시지·이체·운영사 통보 캡처.</li>\n<li><strong>2단계 — 매도인 본인 식별 정보 확보</strong> — 게임 ID·이체 계좌·통신 ID·실명 단서.</li>\n<li><strong>3단계 — 한국소비자원 1372 분쟁조정 (30~60일)</strong></li>\n<li><strong>4단계 — 경찰 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 같은 매도인 다수 피해자 집단.</li>\n<li><strong>5단계 — 민사 부당이득 반환 (10년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">게임 아이템·계정 회수 환수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·운영사·매도인 갈래로 정리됩니다.</strong></p>\n<ul>\n<li><strong>거래 협상 메시지 (카페·디스코드·카톡·DM 전체)</strong></li>\n<li><strong>이체·결제 내역·매도인 계좌 정보</strong></li>\n<li><strong>거래 직후 게임 내 이전·접속 로그·스크린샷</strong></li>\n<li><strong>운영사 회수 통보·약관·고객센터 답변</strong></li>\n<li><strong>매도인 본인 식별 단서 (게임 ID·연락처·실명)</strong></li>\n<li><strong>같은 매도인 반복 거래 사례·다른 피해자 진술</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 게임 운영사 고객센터에 "매도인 본인 신고로 회수된 것이 맞는지" 서면 답변을 받아두면 매도인의 사후 회수 정황 입증 자료로 평가될 수 있는 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담·신고 기관입니다.</strong></p>\n<ul>\n<li><strong>거래 시점 회수 의사 입증</strong> — 반복 패턴·운영사 통보 시점이 핵심.</li>\n<li><strong>운영사 약관상 계정 양도 금지</strong> — 매매 자체 무효 가능성, 환수율은 매도인 측에 청구.</li>\n<li><strong>매도인 신원 추적</strong> — 게임 ID + 이체 계좌 + IP 트래킹.</li>\n<li><strong>중개 거래소 책임</strong> — 거래소 외 직거래는 보호 범위 축소.</li>\n<li><strong>해외 거주 매도인</strong> — 국내 피해자·국내 계좌 결제는 국내법 적용 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>게임물관리위원회 신고</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 게임산업법 위반 사기·게임머니 부정 이용',
        summary:
          '대법원 2018도18872(대법원, 2022.03.11 선고) 영역에서 법원은 게임산업진흥에 관한 법률에 따라 처벌되는 게임머니·아이템 등 게임 결과물의 환전·매매를 업으로 하는 경우 그 해석에 일정 기준이 적용된다고 보았고, 게임 결과물의 부정 이용·반복 거래 정황은 형사 평가 대상이 될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '"거래소 외 직거래 + 매도인 사후 회수 신고 + 반복 패턴"은 게임산업법 위반과 사기가 결합되는 영역. 운영사 회수 통보 시점·매도인 식별이 핵심.',
      },
    ],
    faq: [
      {
        question: '운영사가 계정을 회수했는데 환불은 매도인에게 청구하나요?',
        answer:
          '<strong>매도인에게 매매대금 반환·손해배상 청구가 검토 가능한 영역입니다.</strong> 운영사는 약관에 따라 회수 권한이 있지만 매매 거래는 매도인-매수인 사이에 별도 평가.',
      },
      {
        question: '운영사 약관에 "계정 양도 금지"라고 되어 있습니다',
        answer:
          '<strong>약관상 금지된 거래도 당사자 간 매매대금 반환 청구 자체는 별개 영역입니다.</strong> 다만 매매 자체가 무효일 수 있어 부당이득 반환 트랙이 우선 검토.',
      },
      {
        question: '매도인 본인 정보를 어떻게 확보하나요?',
        answer:
          '<strong>이체 계좌 명의·게임 ID·이메일·전화번호 단서를 합쳐 경찰 수사 협조로 신원 확인이 가능한 영역입니다.</strong> 사이버 고소 시 통신·계좌 영장 발부 검토.',
      },
      {
        question: '같은 매도인이 여러 게임에서 같은 사기를 반복합니다',
        answer:
          '<strong>반복 패턴은 거래 시점의 회수 의사 입증 자료로 평가될 수 있는 영역입니다.</strong> 다른 피해자와 SNS·게임 커뮤니티에서 모아 집단 고소 권장.',
      },
      {
        question: '중개 거래소를 거치지 않은 직거래는 보호받지 못하나요?',
        answer:
          '<strong>거래소 외 직거래는 거래소 보증·에스크로 보호가 없는 영역입니다.</strong> 다만 사기 형사 고소·민사 청구권은 동일하게 행사 가능.',
      },
      {
        question: '운영사 책임도 물을 수 있나요?',
        answer:
          '<strong>운영사는 약관에 따른 회수 권한 행사가 일반적이라 직접 환불 책임은 제한 영역입니다.</strong> 다만 매도인 신원 협조·로그 제공은 요청 가능.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '온라인 쇼핑 사기', href: '/guide/fraud/fraud-online-shopping-procedure' },
      { label: '집단 고소', href: '/guide/fraud/fraud-group-complaint' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
    ],
  },

  // ─── 3. fraud-pt-membership-transfer-vanish-track ───
  {
    domain: 'fraud',
    slug: 'fraud-pt-membership-transfer-vanish-track',
    keyword: '헬스장 PT 회원권 양수도 잠적',
    questionKeyword: '헬스장 PT 잔여 30회 회원권을 양수자에게 180만원에 양도, 한 달 뒤 양도인이 헬스장에 해지·환불 요청하며 잠적 → 양수인 이용 차단.',
    ctaKeyword: '회원권 양수도 잠적 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '헬스장 PT 회원권 양수도 잠적 — 5단계 환수 트랙 | 로앤가이드',
      description:
        '헬스장·필라테스 PT 잔여 회원권을 개인 간 양수도한 후 양도인이 해지·잠적해 양수인이 이용을 차단당했다면 5가지 환수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중고 거래 사이트에서 헬스장 PT 잔여 30회 회원권을 180만원에 양수. 트레이너·헬스장에 양수도 동의도 받았고, 첫 PT 후 정상 이용 중이었는데 한 달 뒤 헬스장 측에서 \'원 회원이 헬스장에 해지·환불을 요청하고 회원권을 회수해갔다\'며 이용 차단 통보. 양도인은 SNS 차단·연락 두절. 알고 보니 같은 양도인이 두 군데 헬스장에서 같은 방식으로 잔여 회원권을 매도한 후 본인이 환불받아 잠적한 정황이 회원·트레이너 사이에 공유되고 있었어요." 회원권 양수도 후 양도인 잠적은 ① 사기죄(형법 347조) — 환불 회수 의사 은닉 ② 민법 부당이득(이중 환수) ③ 한국소비자원 분쟁조정 ④ 사이버 사기 고소 ⑤ 헬스장 운영사 부진정연대 책임 검토 트랙이 검토 가능한 영역. 양도 직후 본인 환불 신청 + 반복 패턴 + 양수도 동의 후 회수가 결정적 사정. 피해자라면 사실관계 입증할 수 있다면 ① 거래·양수도 동의서 ② 환불 회수 자료 ③ 신고·고소·민사 5단계로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. PT 회원권 양수도 잠적 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·헬스장·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래·양수도 동의 자료 보존</strong> — 양수도 동의서·매매 메시지·이체.</li>\n<li><strong>② 헬스장 환불 회수 사실 확인</strong> — 운영사 답변·환불 지급 시점·잔여 회수.</li>\n<li><strong>③ 한국소비자원 1372 분쟁조정</strong> — 운영사 부진정연대 검토.</li>\n<li><strong>④ 경찰 사이버 사기 고소 (ecrm)</strong> — 환불 회수 의사 은닉.</li>\n<li><strong>⑤ 민사 부당이득 반환 (10년 시효) + 운영사 책임</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 양도 시점에 이미 본인 환불 신청 계획을 갖고 양수도 동의 절차를 거친 정황이라면 환불 회수 의사 은닉 + 양수도 대금 편취가 결합된 영역으로 평가될 수 있습니다. 반복 패턴이 결정적.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 소비자원·경찰청 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (이용 차단 당일)</strong> — 양수도 동의서·이체·헬스장 통보 캡처.</li>\n<li><strong>2단계 — 헬스장 환불 지급 시점·금액 서면 확인</strong> — 운영사 고객센터 답변.</li>\n<li><strong>3단계 — 한국소비자원 1372 분쟁조정 (30~60일)</strong> — 운영사 부진정연대 검토.</li>\n<li><strong>4단계 — 경찰 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 같은 양도인 반복 패턴 집단 고소.</li>\n<li><strong>5단계 — 민사 부당이득 반환 (10년 시효) + 운영사 손해배상</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">회원권 양수도 환수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·운영사·환불 갈래로 정리됩니다.</strong></p>\n<ul>\n<li><strong>양수도 협상 메시지·중고 거래 사이트 게시글 캡처</strong></li>\n<li><strong>양수도 동의서·트레이너·헬스장 확인 서명·인쇄본</strong></li>\n<li><strong>이체 내역·결제 영수증</strong></li>\n<li><strong>양도인 본인 식별 단서 (실명·연락처·헬스장 회원번호)</strong></li>\n<li><strong>헬스장 이용 차단 통보·환불 회수 사실 서면</strong></li>\n<li><strong>같은 양도인 반복 패턴·다른 피해자 진술서</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 헬스장 운영사에 "양도인 환불 신청 시점이 양수도 동의 전이었는지 후였는지" 서면으로 확인. 양수도 동의 직후 환불 신청 정황이라면 양도인 사기 입증 자료로 평가될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담·신고 기관입니다.</strong></p>\n<ul>\n<li><strong>양도 시점 환불 의사 입증</strong> — 환불 신청 시점·반복 패턴이 핵심.</li>\n<li><strong>헬스장 운영사 부진정연대 책임</strong> — 양수도 동의 후 양도인 환불 처리 시 양수인 보호 의무.</li>\n<li><strong>약관 양도 금지 조항</strong> — 양수도 동의 받았다면 운영사 책임 강화 영역.</li>\n<li><strong>중고 거래 플랫폼 책임</strong> — 보증·중개 의무 범위 검토.</li>\n<li><strong>현금 이체 결제</strong> — 카드 결제와 환수율 차이.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>공정거래위원회 신고</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 회원권 양도담보·이중 처분 사기',
        summary:
          '대법원 2011도16385(대법원, 2012.02.23 선고) 영역에서 법원은 회원 입회 시 거액을 위탁한 후 탈퇴 시 위탁금을 반환받는 회원권 등 양도담보 회원권을 양도인이 양수인에게 매도한 후 양도담보 본지에 어긋나는 처분으로 양수인의 사무를 처리하는 자의 지위를 이용해 부당하게 환수한 경우 그 양도인의 사기·배임이 평가될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '"회원권 양도 + 양도인 환불 회수 + 양수인 이용 차단" 결합은 양도 시점 환불 의사 은닉 사기로 평가될 수 있는 영역. 운영사 환불 시점 확인이 핵심.',
      },
    ],
    faq: [
      {
        question: '헬스장 운영사가 양수도 동의를 했는데 다시 양도인 환불을 처리했습니다',
        answer:
          '<strong>운영사 부진정연대 책임이 검토 가능한 영역입니다.</strong> 양수도 동의 후 양도인 환불 처리는 양수인 보호 의무 위반 가능성, 운영사 손해배상도 함께 청구 검토.',
      },
      {
        question: '양도인 본인을 어떻게 식별하나요?',
        answer:
          '<strong>헬스장 회원번호·이체 계좌·연락처·중고 거래 ID를 합쳐 경찰 수사 협조로 신원 확인이 가능한 영역입니다.</strong>',
      },
      {
        question: '같은 양도인이 여러 헬스장에서 같은 패턴을 반복합니다',
        answer:
          '<strong>반복 패턴은 양도 시점의 환불 회수 의사 입증 자료로 평가될 수 있는 영역입니다.</strong> 다른 피해자와 집단 고소가 효율적.',
      },
      {
        question: '중고 거래 플랫폼은 책임이 없나요?',
        answer:
          '<strong>플랫폼이 보증·에스크로 서비스를 제공했다면 그 범위 내에서 책임 검토 가능한 영역입니다.</strong> 단순 게시판 형태는 직접 책임 제한.',
      },
      {
        question: '현금 이체로 양수 대금을 보냈는데 환수 가능성은?',
        answer:
          '<strong>이체는 카드보다 환수율이 낮은 영역입니다.</strong> 다만 사기 형사 고소·민사 부당이득 반환 청구는 동일하게 가능.',
      },
      {
        question: '헬스장이 "원 회원 환불이 우선"이라고 합니다',
        answer:
          '<strong>양수도 동의가 적법하게 이뤄졌다면 운영사가 양수인의 권리를 우선해야 하는 영역입니다.</strong> 동의 이후 환불 처리는 운영사 과실 검토 대상.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '집단 고소', href: '/guide/fraud/fraud-group-complaint' },
      { label: '온라인 쇼핑 사기', href: '/guide/fraud/fraud-online-shopping-procedure' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
    ],
  },

  // ─── 4. fraud-used-car-dealer-test-drive-bait-switch-track ───
  {
    domain: 'fraud',
    slug: 'fraud-used-car-dealer-test-drive-bait-switch-track',
    keyword: '중고차 시승차 다른 차 매매',
    questionKeyword: '중고차 매매상에서 시승했던 차량과 동일 모델·동일 색상이라며 인도된 차량이 실제로는 다른 차대번호·사고 이력 차량.',
    ctaKeyword: '중고차 시승차 위장 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '중고차 시승차와 다른 차 매매 — 5단계 환수 트랙 | 로앤가이드',
      description:
        '중고차 매매상에서 시승한 차량과 다른 차량(차대번호·사고 이력 다름)이 인도되었다면 자동차관리법·사기 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중고차 매매상에서 모델·연식·색상·옵션이 마음에 들어 시승까지 마친 후 1,800만원에 계약. 그런데 인도된 차량은 시승 차량과 동일 모델·동일 색상이지만 차대번호가 달랐고, 보험개발원 사고 이력 조회 시 침수·중대사고 이력이 다수 있는 차량이었어요. 매매상은 \'시승차는 매장 보유 표본일 뿐, 같은 모델 다른 차량이 인도되는 것이 업계 관행\'이라며 환불 거절. 알고 보니 같은 매매상에서 \'시승차와 다른 차량 인도\' 패턴으로 다수 피해자가 자동차 커뮤니티에 보고된 상태였어요." 중고차 시승차 위장 매매는 ① 사기죄(형법 347조) — 차량 동일성 기망 ② 자동차관리법(허위 표시·이력 은폐) ③ 사문서위조(매매계약서·이력서) ④ 한국소비자원 분쟁조정 ⑤ 카드 항변·민사 부당이득 트랙이 검토 가능한 영역. 차대번호 불일치 + 사고 이력 은폐 + 동일 모델 위장이 결정적 사정. 피해자라면 사실관계 입증할 수 있다면 ① 시승·계약·인도 자료 ② 보험개발원 이력 ③ 신고·고소·민사 5단계로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중고차 시승차 위장 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·이력·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 시승·계약·인도 자료 보존</strong> — 시승 영상·계약서·차량 사진·차대번호.</li>\n<li><strong>② 보험개발원 카히스토리 이력 조회</strong> — 사고·침수·총소유주 변경 이력.</li>\n<li><strong>③ 한국소비자원 1372 분쟁조정</strong> — 자동차매매업 표시 의무 위반.</li>\n<li><strong>④ 경찰 사이버 사기 고소 (ecrm) + 자동차매매조합 신고</strong></li>\n<li><strong>⑤ 카드 항변·민사 부당이득 + 손해배상 (10년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 시승 차량과 인도 차량이 동일성 없음(차대번호 불일치)에도 동일 차량처럼 표시했다면 차량 동일성·이력 기망에 의한 사기로 평가될 수 있는 영역. 보험개발원 이력 조회가 가장 강력한 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 소비자원·경찰청·자동차매매조합 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (인도·발견 당일)</strong> — 시승 영상·계약서·인도 차량 차대번호·등록증·번호판 사진.</li>\n<li><strong>2단계 — 보험개발원 카히스토리 이력 조회 (1주 내)</strong> — 사고·침수·중대사고 이력.</li>\n<li><strong>3단계 — 한국소비자원 1372 분쟁조정 (30~60일)</strong> + 자동차매매업조합 신고.</li>\n<li><strong>4단계 — 경찰 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 매매상·딜러 신원.</li>\n<li><strong>5단계 — 카드 할부항변 (90일 내) + 민사 부당이득 반환 (10년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고차 시승차 위장 환수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 시승·계약·이력 갈래로 정리됩니다.</strong></p>\n<ul>\n<li><strong>시승 차량 사진·영상·시승 일자·차대번호 (가능 시)</strong></li>\n<li><strong>매매 계약서·성능점검기록부·자동차등록증</strong></li>\n<li><strong>인도 차량 사진·차대번호·번호판</strong></li>\n<li><strong>보험개발원 카히스토리·사고이력조회 결과</strong></li>\n<li><strong>매매상·딜러 명함·사업자등록증·통신 자료</strong></li>\n<li><strong>같은 매매상 피해자 SNS·커뮤니티 게시글</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시승 시 차대번호(차량 앞 유리·운전석 도어 프레임)를 사진으로 남겨두면 인도 차량과 동일성 비교의 결정적 자료. 시승 영상에 차대번호가 보이도록 촬영하는 것이 효율적.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담·신고 기관입니다.</strong></p>\n<ul>\n<li><strong>"업계 관행" 주장</strong> — 자동차관리법상 동일성 표시 위반 영역.</li>\n<li><strong>성능점검기록부 허위 작성</strong> — 사문서위조·자동차관리법 위반 추가.</li>\n<li><strong>사고 이력 은폐</strong> — 카히스토리 vs 계약서 불일치 입증.</li>\n<li><strong>매매상 책임 분담</strong> — 딜러·매매상·매매업조합 부진정연대.</li>\n<li><strong>현금 결제 환수</strong> — 카드 90일 항변과 환수율 차이.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>자동차매매사업조합 신고</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>국토교통부 자동차민원대국민포털</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 중고차 매매 사기·자동차관리법 위반·사문서위조',
        summary:
          '대법원 2020도7915(대법원, 2020.09.07 선고) 영역에서 법원은 중고 자동차 매매업 종사자가 사실과 다른 성능 표기·이력 표시·매매 서류를 작성·교부함으로써 매수인을 동일성·상태에 관해 착오에 빠뜨려 매매대금을 수령한 경우 사기 + 자동차관리법 위반 + 사문서위조·행사가 결합되어 평가될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '"시승 차량과 다른 차 인도 + 성능기록부 허위 + 사고 이력 은폐" 결합은 차량 동일성 사기로 평가될 수 있는 영역. 카히스토리 이력 조회·시승 차대번호 자료가 핵심.',
      },
    ],
    faq: [
      {
        question: '매매상이 "업계 관행"이라며 환불을 거부합니다',
        answer:
          '<strong>자동차관리법상 차량 동일성·이력 표시는 매매업자의 의무 영역입니다.</strong> 업계 관행 주장은 법적 면책 사유가 되지 않고, 시승차와 다른 차 인도는 동일성 기망으로 평가될 수 있는 영역.',
      },
      {
        question: '보험개발원 카히스토리는 어디서 조회하나요?',
        answer:
          '<strong>보험개발원 카히스토리(carhistory.or.kr)에서 차량번호로 사고·침수·총소유주 이력을 조회할 수 있는 영역입니다.</strong> 매매 후라도 즉시 조회 후 자료 출력 보존.',
      },
      {
        question: '성능점검기록부가 허위라면 어떻게 입증하나요?',
        answer:
          '<strong>제3자 정비소·종합검사소에 차량 상태를 재진단받아 보고서를 받으면 입증 자료로 평가될 수 있는 영역입니다.</strong> 사문서위조 고소 자료로 사용.',
      },
      {
        question: '딜러와 매매상 중 누구에게 청구하나요?',
        answer:
          '<strong>둘 다 부진정연대책임 검토 가능한 영역입니다.</strong> 딜러는 거래 당사자, 매매상은 업소 관리 책임. 매매조합 신고로 행정 제재도 병행.',
      },
      {
        question: '카드 할부로 결제했다면 환수 가능성이 있나요?',
        answer:
          '<strong>20만원 이상·3개월 이상 할부 결제는 카드사에 할부항변권 행사가 가능한 영역입니다.</strong> 90일 내, 차량 동일성·이력 입증 자료 첨부.',
      },
      {
        question: '시승차 차대번호를 안 찍었는데 입증이 가능한가요?',
        answer:
          '<strong>시승 일자·매장 CCTV·딜러 진술·사진의 외관 특징(번호판·휠·내장재)로 보조 입증 가능한 영역입니다.</strong> 매매상 CCTV 보존 요청도 신속히.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '카드 할부항변', href: '/guide/fraud/fraud-card-installment-objection' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
      { label: '집단 고소', href: '/guide/fraud/fraud-group-complaint' },
    ],
  },

  // ─── 5. fraud-comment-part-time-advance-deposit-track ───
  {
    domain: 'fraud',
    slug: 'fraud-comment-part-time-advance-deposit-track',
    keyword: '댓글 알바 선금 입금 잠적',
    questionKeyword: '"재택 댓글 알바·평점 알바, 1건당 5천원" 모집 메시지를 받고 "보증금·세팅비" 명목으로 80만원 송금 후 연락 두절.',
    ctaKeyword: '댓글 알바 선금 잠적 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '댓글·평점 알바 보증금 송금 후 잠적 — 5단계 환수 | 로앤가이드',
      description:
        '"재택 댓글 알바·평점 알바" 모집을 빙자한 보증금·세팅비 송금 후 잠적(보이스피싱 변형)이라면 48시간 내 지급정지·환급 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"카톡 오픈채팅·문자 광고에서 \'재택 댓글 알바·평점 알바, 1건당 5천원, 하루 5만~10만원\'이라는 메시지를 받음. 가입 후 \'정산 시스템 세팅비·보증금 80만원\'을 먼저 입금해야 한다며 송금. 처음 몇 건은 소액(2~3만원) 정산이 되더니, 이후 \'레벨업 보증금 추가 200만원\'을 요구. 입금하니 그때부터 연락 두절, 모집책 계좌가 대포통장임이 확인. 알고 보니 이건 보이스피싱·로맨스스캠과 같은 \'리딩방·재택 부업\' 변형 사기로, 후속 가입자 자금을 앞선 가입자 정산에 돌려막다 일정 시점에 잠적하는 패턴이었어요." 댓글 알바 선금 사기는 ① 사기죄(형법 347조) + 통신사기피해환급법 ② 즉시 지급정지(112) ③ 금감원 1332·금융위 신고 ④ 사이버 사기 고소(ecrm) ⑤ 채권소멸 공고 후 환급 트랙이 검토 가능한 영역. 대포통장 + 후속 정산 돌려막기 + 추가 입금 유도가 결정적 사정. 피해자라면 사실관계 입증할 수 있다면 ① 즉시 지급정지 ② 경찰 사건사고사실확인원 ③ 은행 피해구제 신청 ④ 채권소멸 공고 ⑤ 환급 5단계로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 댓글 알바 선금 잠적 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 지급정지·신고·고소·환급 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 즉시 112 신고·송금 은행 지급정지</strong> — 송금 직후 48시간 골든타임.</li>\n<li><strong>② 경찰 사건사고사실확인원 발급</strong> — 송금 은행 제출용.</li>\n<li><strong>③ 송금 은행 피해구제 신청서 제출</strong> — 통신사기피해환급법 절차.</li>\n<li><strong>④ 사이버 사기 고소 (ecrm) + 금감원 1332 신고</strong></li>\n<li><strong>⑤ 채권소멸 공고 (약 2개월) 후 환급 결정</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 댓글 알바 변형 사기는 통신사기피해환급법 적용이 검토되는 영역. "송금 직후 48시간" 골든타임 안에 112 → 지급정지 → 경찰 → 은행 피해구제 신청서 순서가 가장 중요한 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 금감원·경찰청 통신사기피해환급법 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 112 신고·송금 은행 콜센터 지급정지 (송금 직후)</strong> — 골든타임 핵심.</li>\n<li><strong>2단계 — 경찰 사건사고사실확인원 발급 (당일~3일)</strong></li>\n<li><strong>3단계 — 송금 은행에 피해구제신청서 제출 (3영업일 내)</strong></li>\n<li><strong>4단계 — 금감원 채권소멸 공고 (약 2개월)</strong> — 명의인 이의제기 기회 부여.</li>\n<li><strong>5단계 — 공고 종료 후 환급금 결정·지급 (피해자 안분 비율)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">댓글 알바 선금 환급 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 모집·송금·신고 갈래로 정리됩니다.</strong></p>\n<ul>\n<li><strong>모집 메시지·오픈채팅·문자·SNS 광고 캡처</strong></li>\n<li><strong>가입·정산 안내 자료·앱·사이트 화면</strong></li>\n<li><strong>송금 이체 내역·계좌번호·예금주명</strong></li>\n<li><strong>모집책·정산담당자와 카톡·통화·녹취</strong></li>\n<li><strong>경찰 사건사고사실확인원 (송금 은행 제출용)</strong></li>\n<li><strong>송금 은행 피해구제 신청서 접수증</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 송금 계좌 명의인이 대포통장(타인 명의 도용)인 경우가 많은 영역. 금감원 채권소멸 공고 절차에서 명의인이 이의제기를 하지 않으면 환수율이 높아질 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담·신고 기관입니다.</strong></p>\n<ul>\n<li><strong>지급정지 골든타임</strong> — 송금 직후 48시간 이내가 가장 결정적.</li>\n<li><strong>대포통장 명의인 책임</strong> — 명의 도용 시 환수율 상승, 본인 양도면 환수율 하락.</li>\n<li><strong>리딩방·재택 부업 변형</strong> — "보증금" "세팅비" "레벨업" 명목 추가 입금은 전형적 패턴.</li>\n<li><strong>피해자 안분 비율</strong> — 여러 피해자가 같은 계좌에 송금했다면 잔액을 비율 안분.</li>\n<li><strong>2개월 채권소멸 공고</strong> — 명의인 이의제기 시 절차 지연 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 112·사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>금감원 보이스피싱 1332</strong></li>\n<li><strong>송금 은행 콜센터 (즉시 지급정지)</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 통신사기피해환급법·전기통신금융사기',
        summary:
          '대법원 2025도15768(대법원, 2026.01.15 선고) 영역에서 법원은 전기통신금융사기 피해금이 송금된 계좌에 대해 통신사기피해환급법 절차상 지급정지·채권소멸·환급 결정이 검토되는 영역에서, 명의인이 피해금 수령 사실을 인지하면서도 이의제기 절차에 응하지 않거나 자금 인출에 가담한 경우 그 처벌 대상에 해당하는지 여부 등이 검토될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '"재택 알바·댓글 알바 변형은 통신사기피해환급법 적용 검토 영역. 송금 직후 48시간 골든타임에 지급정지 → 사건사고사실확인원 → 은행 피해구제 신청서 순서가 환급 결정의 결정적 사정으로 평가되는 영역.',
      },
    ],
    faq: [
      {
        question: '송금한 지 24시간 지났는데 지급정지 신청 가능한가요?',
        answer:
          '<strong>가능한 영역입니다.</strong> 다만 잔액이 남아 있어야 하므로 즉시 송금 은행 콜센터·112 신고로 잔액 동결을 시도해보세요. 잔액 없으면 환수율 낮은 영역.',
      },
      {
        question: '대포통장 명의인이 본인이 아닌 사실을 어떻게 확인하나요?',
        answer:
          '<strong>채권소멸 공고 절차에서 명의인이 이의제기 없이 절차가 종료되면 사실상 도용 정황 강한 영역입니다.</strong> 금감원·은행에서 안내.',
      },
      {
        question: '"보증금만 내면 정상 정산"이라고 합니다',
        answer:
          '<strong>전형적 리딩방·재택 부업 변형 사기 패턴 영역입니다.</strong> 처음 소액 정산은 후속 가입자 자금 돌려막기일 가능성 높음, 추가 송금 즉시 중단 권장.',
      },
      {
        question: '환급은 송금액 전액 받을 수 있나요?',
        answer:
          '<strong>송금 직후 빠른 지급정지로 잔액이 동결된 만큼 비례 환급되는 영역입니다.</strong> 전액 환급 단정은 어렵고, 여러 피해자 안분으로 환수율이 높아질 수 있는 영역.',
      },
      {
        question: '오픈채팅 모집책 신원을 어떻게 확보하나요?',
        answer:
          '<strong>닉네임·휴대전화 번호·송금 계좌·IP를 합쳐 경찰 사이버 수사 협조로 추적이 가능한 영역입니다.</strong> 대포폰·대포통장 사용이 많아 시간 소요.',
      },
      {
        question: '돈이 외국 계좌로 빠졌다면 환수 가능한가요?',
        answer:
          '<strong>국내 송금 단계에서 지급정지가 이뤄지면 환수율이 높아질 수 있는 영역입니다.</strong> 환전·외국 이체 후라면 국제 공조 트랙 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '보이스피싱 환급', href: '/guide/fraud/fraud-phishing-transfer-refund-procedure' },
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '계좌 지급정지', href: '/guide/fraud/fraud-account-freeze-recovery-steps' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
      { label: '집단 고소', href: '/guide/fraud/fraud-group-complaint' },
    ],
  },
];
