import { SpokePage } from '../spoke-pages';

// batch67 fraud — 5개 (2026-05-17)
//
// 고유 존재 이유:
// 1. fraud-event-deposit-cancel-vanish-recovery-track — 행사·이벤트(웨딩·돌잔치) 예약금 결제 후 폐업 잠적 (기존 fraud-membership-prepay-gym / pilates-prepay-bankruptcy 와 분기: "1회성 행사 + 임박 취소 잠적" 트랙, 행사 임박 폐업·연락 두절·환수 곤란 패턴).
// 2. fraud-influencer-promotion-fee-vanish-track — SNS 인플루언서 광고 의뢰비 선지급 후 미게시 (기존 fraud-job-headhunter-placement-fee / fraud-loan-broker-upfront-fee 와 분기: "광고 의뢰 + 디지털 콘텐츠 미이행" 트랙, 게시 약속·디지털 산출물 검증).
// 3. fraud-celebrity-fanmeet-cancel-refund-track — 연예인 팬미팅·콘서트 일방 취소 후 환불 거부 (기존 fraud-funeral-prepay-cancel / fraud-online-class-coupon 과 분기: "1회성 공연·팬미팅 + 주최 환불 거절" 트랙, 행사 직전 일방 취소·약관 환불 제한).
// 4. fraud-overseas-vacation-rental-property-fake-track — 해외 휴양지 단기 임대 가짜 매물 결제 (기존 fraud-airbnb-fake-listing / fraud-rental-property-deposit-double 과 분기: "해외 + 단기 임대 + 주소 위장" 트랙, 국제 관할·실재 검증 곤란).
// 5. fraud-tax-savings-investment-scheme-track — "세금 환급·절세" 유인 투자 사기 (기존 fraud-investment-platform-yield / fraud-art-investment-fractional 과 분기: "절세·세금환급 유인 + 미인가 영업" 트랙, 세제 혜택 허위 광고 + 원금 미반환).

export const spokesBatch67Fraud: SpokePage[] = [
  // ─── 1. fraud-event-deposit-cancel-vanish-recovery-track ───
  {
    domain: 'fraud',
    slug: 'fraud-event-deposit-cancel-vanish-recovery-track',
    keyword: '행사 예약금 취소 잠적 환수',
    questionKeyword: '결혼식 행사 대행사에 예약금 500만원 입금했는데 한 달 전 "코로나 후유증으로 폐업"이라며 환불 거절 후 연락 두절.',
    ctaKeyword: '행사 예약금 잠적 사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '행사 예약금 한 달 전 폐업 잠적 — 5단계 환수 다툼 | 로앤가이드',
      description:
        '결혼식·돌잔치 등 행사 대행사가 행사 임박 시점에 폐업·잠적하며 예약금을 환불하지 않는다면 5가지 환수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"결혼식 한 달 전, 행사 대행사가 갑자기 \'코로나 후유증 누적으로 폐업\'이라며 예약금 500만원 환불을 거절하더니 그 다음 주부터 대표 전화·홈페이지·SNS가 모두 연락 두절. 알고 보니 같은 시기 결혼·돌잔치 예약자 30여 명이 동일하게 피해를 본 상태였고, 입금된 예약금은 이미 다른 채무 변제와 운영자 개인 사용처로 빠져 있었어요." 행사·이벤트(웨딩·돌잔치) 예약금 폐업 잠적 사기는 ① 사기죄(형법 347조) — 이행 의사·능력 없이 예약금 수령 ② 전자상거래법(통신판매업자 환급 의무) ③ 한국소비자원 분쟁조정 ④ 카드 항변권(90일 내) ⑤ 민사 부당이득 반환 트랙이 핵심으로 검토 가능한 영역. 행사 임박 시점 폐업·다수 피해 동시 발생·운영자 잠적 패턴이 결정적 사정으로 평가될 수 있습니다. 피해자라면 사실관계 입증할 수 있다면 ① 계약·결제 자료 ② 다른 피해자 명단 ③ 소비자원·사이버 고소 ④ 카드 항변 ⑤ 민사 5단계로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 행사 예약금 잠적 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·신고·고소·항변·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약·결제·연락 자료 보존</strong> — 견적서·계약서·이체·카톡·통화내역.</li>\n<li><strong>② 같은 시기 피해자 명단 정리</strong> — SNS·카페 동시 피해 진술서.</li>\n<li><strong>③ 한국소비자원 1372·공정위 신고</strong> — 통신판매업자 환급 의무 위반.</li>\n<li><strong>④ 경찰 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 이행 의사 없는 예약금 편취.</li>\n<li><strong>⑤ 카드 항변 + 민사 부당이득 반환</strong> — 카드 90일 내, 민사 10년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 같은 시기 다수 피해자 발생 + 운영자 연락 두절 + 입금 자금 사용처가 행사 준비와 무관한 사실이 결합되면 이행 의사·능력 없는 사기로 평가될 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·소비자원 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (잠적 인지 당일)</strong> — 견적·계약서·이체·카톡·홈페이지 캡처.</li>\n<li><strong>2단계 — 다른 피해자 모으기 (1주 내)</strong> — 결혼·행사 카페·SNS 검색, 단톡방 구성.</li>\n<li><strong>3단계 — 한국소비자원 1372 분쟁조정 (30~60일)</strong> — 통신판매업자 환급 의무.</li>\n<li><strong>4단계 — 경찰 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 집단 고소 양식.</li>\n<li><strong>5단계 — 카드 할부항변 (90일 내) + 민사 부당이득 (10년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">행사 예약금 잠적 사기 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·결제·피해자 갈래로 정리됩니다.</strong></p>\n<ul>\n<li><strong>견적서·계약서·약관·환불 조항 명시 페이지</strong></li>\n<li><strong>예약금 이체 내역·카드 매출전표</strong></li>\n<li><strong>운영자와 카톡·문자·통화 녹취 (예약 확정·환불 거절)</strong></li>\n<li><strong>홈페이지·SNS 폐업 공지 화면 캡처</strong></li>\n<li><strong>같은 시기 피해자 명단·진술서·단톡방 화면</strong></li>\n<li><strong>법인등기부등본·사업자등록증 (상호·대표자 확인)</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 운영자 법인등기부등본을 조회해 폐업 직전 임원·자본금 변동·다른 법인 설립 여부를 확인. 새 법인을 만들어 사업을 이어가는 정황이라면 사기 고의 입증의 결정적 자료로 평가될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담·신고 기관입니다.</strong></p>\n<ul>\n<li><strong>이행 의사·능력 없는 수령</strong> — 폐업 전부터 자금 사정·계약 이행 가능성 부재 입증.</li>\n<li><strong>"코로나·경기 핑계"</strong> — 객관적 사유 부재 시 면책 곤란 영역.</li>\n<li><strong>새 법인으로 영업 이전</strong> — 채무 회피 + 영업 양도 형태일 가능성.</li>\n<li><strong>카드 항변권 행사</strong> — 20만원 이상·3개월 이상 할부 우선.</li>\n<li><strong>다수 피해자 집단 청구</strong> — 명단 합산 후 동시 고소·민사.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>공정거래위원회 신고</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 행사·용역 예약금 편취 사기',
        summary:
          '대법원 2013도1843(대법원, 2017.07.18 선고) 영역에서 법원은 운영자가 행사·전시·공동 주관 등의 명목으로 예약금·계약금을 수령하면서 실제 이행 의사·능력 없이 입금된 자금을 다른 용도로 사용하거나 행사 임박 시점에 잠적한 경우 사기죄가 성립될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '"행사 임박 폐업 + 다수 동시 피해 + 자금 다른 용도 사용" 결합은 이행 의사 없는 사기로 평가될 수 있는 영역. 새 법인 영업 이전이 결정적 정황.',
      },
    ],
    faq: [
      {
        question: '대행사가 "코로나로 폐업"이라며 환불을 거부합니다',
        answer:
          '<strong>객관적 폐업 사유와 자금 사용 내역을 확인해야 합니다.</strong> 같은 시기 다른 피해자 사례·운영자가 새 법인으로 영업 이전한 정황이 있다면 이행 의사 없는 예약금 편취로 평가될 수 있는 영역입니다.',
      },
      {
        question: '예약금만 입금했는데 환수 가능성이 있나요?',
        answer:
          '<strong>피해자라면 사실관계 입증할 수 있다면 카드 할부 결제는 항변권(90일 내), 이체는 부당이득 반환·집단 고소 트랙을 검토할 수 있습니다.</strong>',
      },
      {
        question: '대행사가 새 상호로 다시 영업하는데 어떻게 하나요?',
        answer:
          '<strong>법인등기부등본·사업자등록증으로 대표자·임원 동일성을 확인합니다.</strong> 채무 회피 목적 영업 이전이라면 부진정연대책임·법인격 부인 트랙도 검토 가능한 영역.',
      },
      {
        question: '다른 피해자와 함께 신고하면 더 유리한가요?',
        answer:
          '<strong>같은 시기·같은 운영자 피해자가 명단을 합산해 집단 고소하면 수사 우선순위·압수수색 효율이 높아질 수 있는 영역입니다.</strong> SNS·결혼 카페에서 모이는 사례가 많습니다.',
      },
      {
        question: '카드 결제와 계좌이체 환수율이 다르나요?',
        answer:
          '<strong>카드는 할부항변·차지백 트랙으로 90일 내 분쟁 가능, 이체는 환수율이 낮아 즉시 형사 고소 + 계좌 지급정지 트랙이 우선 검토 영역입니다.</strong>',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '카드 할부항변', href: '/guide/fraud/fraud-card-installment-objection' },
      { label: '집단 고소', href: '/guide/fraud/fraud-group-complaint' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
    ],
  },

  // ─── 2. fraud-influencer-promotion-fee-vanish-track ───
  {
    domain: 'fraud',
    slug: 'fraud-influencer-promotion-fee-vanish-track',
    keyword: '인플루언서 광고 의뢰 선금 잠적',
    questionKeyword: 'SNS 인플루언서에게 제품 광고 의뢰비 200만원 입금했는데 게시 약속일을 지나도 미게시 + 연락 두절.',
    ctaKeyword: '인플루언서 광고비 잠적 사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '인플루언서 광고비 입금 후 미게시 잠적 — 5단계 환수 | 로앤가이드',
      description:
        'SNS 인플루언서에게 광고 의뢰비를 선지급했는데 게시 약속일을 지나도 미게시·연락 두절이라면 5가지 환수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"인스타·유튜브 팔로워 10만 인플루언서에게 신제품 협찬 광고를 의뢰하면서 200만원 광고비를 선지급. 약속된 게시일이 지나도 게시물이 올라오지 않았고, DM·이메일·연락처도 차단·답변 없음. 알고 보니 같은 시기 여러 광고주에게 동일한 패턴으로 광고비를 받아챙긴 정황이 SNS·커뮤니티에 다수 보고되었어요." 인플루언서 광고비 선지급 후 미이행 사기는 ① 사기죄(형법 347조) — 이행 의사 없이 광고비 편취 ② 전자상거래법·표시광고법(통신판매업 신고 + 표시) ③ 한국소비자원 분쟁조정 ④ 사이버 사기 고소 ⑤ 민사 부당이득 반환 트랙이 핵심으로 검토 가능한 영역. 게시 약속일 도과 + 다수 광고주 동시 피해 + 계정 폐쇄·차단 패턴이 결정적 사정. 피해자라면 사실관계 입증할 수 있다면 ① 계약·DM·결제 자료 ② 같은 시기 광고주 명단 ③ 신고·고소·환수 5단계로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 인플루언서 광고비 잠적 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·신고·고소·환수·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 광고 의뢰 자료 보존</strong> — DM·메일·계약서·결제·게시 약속 기한.</li>\n<li><strong>② 인플루언서 신원 확인</strong> — 통신판매업 신고·실명·사업자 정보.</li>\n<li><strong>③ 한국소비자원 1372·공정위 신고</strong> — 전자상거래법·표시광고법.</li>\n<li><strong>④ 사이버 사기 고소 (ecrm)</strong> — 다수 광고주 집단 고소.</li>\n<li><strong>⑤ 민사 부당이득·손해배상</strong> — 광고비 + 기대 손해.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 게시 약속일 도과 + 같은 시기 다수 광고주 피해 + 계정 차단·삭제 패턴이 결합되면 광고비 편취 사기로 평가될 수 있는 영역입니다. 통신판매업 미신고도 추가 위반 사정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (게시일 도과 시점)</strong> — DM·메일·결제·계약 캡처.</li>\n<li><strong>2단계 — 인플루언서 신원·사업자 정보 확보</strong> — 통신판매업 신고 조회.</li>\n<li><strong>3단계 — 한국소비자원 1372 분쟁조정 (30~60일)</strong></li>\n<li><strong>4단계 — 경찰 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 같은 시기 광고주 집단.</li>\n<li><strong>5단계 — 민사 부당이득 반환 (10년 시효) + 광고대행사·플랫폼 책임</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">인플루언서 광고비 잠적 사기 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·결제·게시 약속 갈래로 정리됩니다.</strong></p>\n<ul>\n<li><strong>광고 의뢰 메일·DM·카톡 (게시 약속일·콘텐츠 가이드 포함)</strong></li>\n<li><strong>광고 계약서·견적서·세금계산서</strong></li>\n<li><strong>이체 내역·카드 매출전표</strong></li>\n<li><strong>인플루언서 채널 정보 (URL·팔로워 수·통신판매업 신고번호 조회)</strong></li>\n<li><strong>게시 약속일 도과·계정 차단·삭제 화면 캡처</strong></li>\n<li><strong>같은 시기 피해 광고주 명단·SNS 폭로글</strong></li>\n<li><strong>본인 사업자등록증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공정위 사업자정보공개시스템에서 인플루언서·MCN의 통신판매업 신고 여부를 조회. 미신고 상태로 광고비를 받았다면 전자상거래법 위반이 추가 사정으로 평가될 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담·신고 기관입니다.</strong></p>\n<ul>\n<li><strong>이행 의사 없는 광고비 수령</strong> — 같은 시기 다수 광고주 동시 피해 입증.</li>\n<li><strong>통신판매업 미신고</strong> — 전자상거래법 위반 추가 사정.</li>\n<li><strong>플랫폼·MCN 책임</strong> — 중개·검증 의무 분담 가능 영역.</li>\n<li><strong>광고대행사 경유 분쟁</strong> — 대행사·인플루언서 부진정연대.</li>\n<li><strong>해외 거주 인플루언서</strong> — 국내 결제·국내 광고주는 국내법 적용 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>공정거래위원회 신고 (표시광고·전자상거래)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망 이용 광고·서비스 편취',
        summary:
          '대법원 2011도5299(대법원, 2011.07.28 선고) 영역에서 법원은 정보통신망을 이용해 광고·서비스 제공 명목으로 자금을 수령하면서 약속된 이행을 하지 않거나 정상적 권한 없이 망에 접속해 다수 피해자에게 손해를 발생시킨 경우 사기·정보통신망법 위반이 함께 평가될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '"디지털 광고·서비스 약속 + 다수 피해 + 미이행 + 계정 차단" 결합은 사기 + 정보통신망법 위반으로 평가될 수 있는 영역. 같은 시기 광고주 명단 합산이 핵심.',
      },
    ],
    faq: [
      {
        question: '게시일이 지났는데 계정에 접속이 안 됩니다',
        answer:
          '<strong>계정 차단·삭제는 결정적 정황 자료입니다.</strong> 즉시 화면 캡처 보존 후 같은 시기 다른 광고주를 찾아 집단 고소 트랙을 검토하는 것이 효율적인 영역입니다.',
      },
      {
        question: '광고대행사를 통해 의뢰했는데 누구에게 청구하나요?',
        answer:
          '<strong>대행사·인플루언서가 부진정연대책임을 검토할 수 있는 영역입니다.</strong> 대행사가 인플루언서 미이행 사실을 알고도 광고비를 전달했다면 공동 책임 평가 가능.',
      },
      {
        question: '플랫폼(인스타·유튜브)도 책임이 있나요?',
        answer:
          '<strong>플랫폼은 직접 광고 거래 당사자가 아닌 영역이 일반적입니다.</strong> 다만 신고·계정 조치 협조 의무는 검토 가능, 광고비 환수는 인플루언서·대행사 우선.',
      },
      {
        question: '인플루언서가 외국 거주자라며 답변이 없습니다',
        answer:
          '<strong>국내 광고주·국내 결제·국내 노출 의도라면 국내법 적용이 검토 가능한 영역입니다.</strong> 국제 공조 트랙도 병행 신고.',
      },
      {
        question: '광고비 환수 외에 손해배상도 가능한가요?',
        answer:
          '<strong>광고 미게시로 인한 매출 기회 손해·이벤트 비용 등 기대 손해도 입증되면 평가될 수 있는 영역입니다.</strong> 인과관계 입증 자료가 핵심.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '온라인 쇼핑 사기', href: '/guide/fraud/fraud-online-shopping-procedure' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '집단 고소', href: '/guide/fraud/fraud-group-complaint' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
    ],
  },

  // ─── 3. fraud-celebrity-fanmeet-cancel-refund-track ───
  {
    domain: 'fraud',
    slug: 'fraud-celebrity-fanmeet-cancel-refund-track',
    keyword: '팬미팅·콘서트 취소 환불 거절',
    questionKeyword: '연예인 팬미팅 티켓 30만원 결제했는데 행사 1주일 전 일방 취소, 주최 측이 환불 거절.',
    ctaKeyword: '팬미팅 취소 환불 거절 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '팬미팅·콘서트 일방 취소 환불 거절 — 5단계 환수 | 로앤가이드',
      description:
        '연예인 팬미팅·콘서트가 행사 직전 일방 취소되고 주최 측이 환불을 거절한다면 소비자분쟁조정·5가지 환수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"좋아하는 가수 팬미팅 티켓을 30만원에 예매했는데 행사 1주일 전 \'아티스트 개인 사정\'으로 일방 취소 공지. 주최 측은 \'환불 불가, 다음 행사로 대체\' 안내만 반복하고, 약관에는 \'주최자 사정에 의한 취소 시 전액 환불\' 조항이 명시돼 있는데도 환불을 지연·거절하고 있어요. 알고 보니 같은 주최사가 과거에도 비슷한 패턴으로 행사를 취소하고 환불을 지연한 사례가 SNS·티켓 커뮤니티에 다수 보고되어 있었어요." 공연·팬미팅 일방 취소 후 환불 거절은 ① 사기죄(형법 347조) — 이행 의사 없는 티켓 판매 ② 전자상거래법·소비자기본법(환급 의무) ③ 한국소비자원 분쟁조정 ④ 카드 항변권 ⑤ 민사 부당이득 반환 트랙이 검토 가능한 영역. 약관상 환불 조항 명시 + 주최사 환급 지연 + 반복 패턴이 결정적 사정. 피해자라면 사실관계 입증할 수 있다면 ① 결제·약관 자료 ② 취소 공지 ③ 소비자원·고소·민사 5단계로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 팬미팅 일방 취소 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·약관·신고·항변·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 결제·약관·취소 공지 자료 보존</strong> — 티켓·약관·공지·환불 답변.</li>\n<li><strong>② 주최사 신원·과거 사례 확인</strong> — 통신판매업 신고·반복 취소 패턴.</li>\n<li><strong>③ 한국소비자원 1372 분쟁조정</strong> — 환급 의무 위반.</li>\n<li><strong>④ 카드 항변 (90일 내) + 사이버 고소</strong> — 비대면 결제 분쟁.</li>\n<li><strong>⑤ 민사 부당이득 반환·손해배상</strong> — 교통·숙박 비용 포함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 약관에 명시된 환불 조항을 주최사가 지연·거절하면서 같은 패턴 반복 사례가 보고된다면 이행 의사 없는 사기로 평가될 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환불 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 소비자원·경찰청 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (취소 공지 당일)</strong> — 티켓·약관·공지·환불 답변 캡처.</li>\n<li><strong>2단계 — 주최사 환불 정식 요청 (서면·내용증명)</strong> — 7~14일 회신 요구.</li>\n<li><strong>3단계 — 한국소비자원 1372 분쟁조정 (30~60일)</strong></li>\n<li><strong>4단계 — 카드 할부항변 (90일 내) + 사이버 사기 고소 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>5단계 — 민사 부당이득 반환 + 교통·숙박 손해 청구 (10년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">팬미팅·콘서트 환불 거절 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제·약관·취소 갈래로 정리됩니다.</strong></p>\n<ul>\n<li><strong>예매 확인서·티켓 캡처·예매번호</strong></li>\n<li><strong>티켓 예매 약관·환불 조항 페이지</strong></li>\n<li><strong>결제 영수증·카드 매출전표·이체 내역</strong></li>\n<li><strong>주최사 취소 공지·환불 거절 답변 (이메일·SMS·앱 알림)</strong></li>\n<li><strong>교통·숙박 예약 자료 (지방·해외 행사 시 동반 손해)</strong></li>\n<li><strong>같은 주최사 과거 취소 사례·SNS 폭로글</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 동일 주최사의 과거 행사 취소·환불 지연 사례를 SNS·티켓 커뮤니티에서 모아 두면 "반복 패턴 = 이행 의사 없음" 입증의 결정적 자료로 평가될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담·신고 기관입니다.</strong></p>\n<ul>\n<li><strong>약관 환불 조항 위반</strong> — 주최자 사정 취소 시 전액 환불 명시 위반.</li>\n<li><strong>"대체 행사" 강요</strong> — 환불 회피 패턴, 거부 권리 검토.</li>\n<li><strong>동반 손해 (교통·숙박)</strong> — 행사 신뢰 후 지출한 합리적 비용 포함 검토.</li>\n<li><strong>티켓 플랫폼 책임</strong> — 인터파크·예스24 등 중개 플랫폼 환급 정책.</li>\n<li><strong>반복 패턴 주최사</strong> — 다수 피해자 집단 청구로 압박.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>공정거래위원회 신고</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부작위 기망·이행 의사 없는 사기',
        summary:
          '대법원 2021도8468(대법원, 2021.09.09 선고) 영역에서 법원은 사기죄의 기망행위는 적극적 거짓말뿐 아니라 부작위에 의한 기망도 포함되며, 이행 의사·능력이 없음에도 이를 고지하지 않은 채 자금을 수령한 경우 편취의 범의가 인정될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '"행사 직전 일방 취소 + 환불 약관 명시에도 거절 + 반복 패턴" 결합은 부작위 기망에 의한 사기로 평가될 수 있는 영역. 환불 조항 명시가 핵심 자료.',
      },
    ],
    faq: [
      {
        question: '주최사가 "대체 행사로 가라"고만 합니다',
        answer:
          '<strong>약관상 환불 조항이 명시돼 있다면 대체 이행 강요를 거부할 수 있는 영역입니다.</strong> 서면으로 환불 의사 명확히 통지 + 소비자원 분쟁조정 트랙 검토.',
      },
      {
        question: '교통·숙박 비용도 환수 가능한가요?',
        answer:
          '<strong>행사 신뢰 후 합리적으로 지출한 비용은 손해배상 청구 범위로 평가될 수 있는 영역입니다.</strong> 예약 자료·결제 내역 보존이 핵심.',
      },
      {
        question: '티켓 플랫폼은 책임이 없나요?',
        answer:
          '<strong>플랫폼 자체 환급 정책이 있다면 우선 적용 가능합니다.</strong> 인터파크·예스24·멜론티켓 등 각 플랫폼 분쟁센터 신고 병행.',
      },
      {
        question: '카드 할부항변권은 어떻게 행사하나요?',
        answer:
          '<strong>20만원 이상·3개월 이상 할부 결제는 카드사에 할부항변권 행사 신청 가능합니다.</strong> 90일 내, 행사 미이행 증빙 + 환불 거절 자료.',
      },
      {
        question: '같은 주최사 피해자가 여러 명입니다',
        answer:
          '<strong>집단 분쟁조정·집단 고소 트랙이 효율적인 영역입니다.</strong> SNS·티켓 커뮤니티에서 명단 모으고 단톡방 구성 후 동시 진행.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '카드 할부항변', href: '/guide/fraud/fraud-card-installment-objection' },
      { label: '온라인 쇼핑 사기', href: '/guide/fraud/fraud-online-shopping-procedure' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
    ],
  },

  // ─── 4. fraud-overseas-vacation-rental-property-fake-track ───
  {
    domain: 'fraud',
    slug: 'fraud-overseas-vacation-rental-property-fake-track',
    keyword: '해외 휴양지 부동산 임대 가짜',
    questionKeyword: '베트남 다낭 휴양지 펜션을 1주일 빌리려고 800만원 입금했는데 실제 도착해 보니 주소도 다른 곳.',
    ctaKeyword: '해외 휴양지 임대 사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외 휴양지 단기 임대 가짜 매물 — 5단계 환수 다툼 | 로앤가이드',
      description:
        '해외 휴양지(다낭·세부·괌 등) 단기 임대 매물에 입금했는데 실재하지 않거나 주소가 위장된 경우 5가지 환수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"베트남 다낭 \'오션뷰 풀빌라 1주일 800만원\' 매물에 SNS·블로그 광고를 보고 계좌이체 결제. 현지 도착해 보니 광고와 다른 낡은 빌라이거나 아예 주소 자체가 다른 곳이었어요. 호스트는 \'착오\'라며 다른 매물 이전을 권유하다 환불 요청부터는 연락 두절. 알고 보니 같은 사진을 여러 카페·블로그에서 다른 호스트 명의로 동시에 광고한 정황이 드러났어요." 해외 휴양지 단기 임대 가짜 매물 결제는 ① 사기죄(형법 347조) — 실재하지 않는 매물 + 입금 편취 ② 전자상거래법(통신판매업) ③ 한국소비자원 분쟁조정 ④ 카드 항변권 ⑤ 민사 부당이득 반환 트랙이 검토 가능한 영역. 광고 사진의 이미지 도용 + 현지 주소 불일치 + 다수 피해 패턴이 결정적. 피해자라면 사실관계 입증할 수 있다면 ① 광고·결제 자료 ② 현지 도착 증빙 ③ 사이버 고소 ④ 카드 항변 ⑤ 민사 5단계로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 해외 휴양지 가짜 매물 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·신고·항변·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 광고·결제·현지 자료 보존</strong> — 광고 캡처·이체·도착 사진·주소.</li>\n<li><strong>② 이미지 도용·다수 피해 확인</strong> — 구글 이미지 역검색·다른 카페 광고 비교.</li>\n<li><strong>③ 한국소비자원 1372·국제거래소비자포털 신고</strong></li>\n<li><strong>④ 카드 할부항변 + 사이버 사기 고소 (ecrm)</strong></li>\n<li><strong>⑤ 민사 부당이득 반환 (10년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 광고 사진 = 실재 매물 일치 여부, 주소 정확성, 호스트 신원 검증이 핵심 영역. 계좌이체·플랫폼 외 결제는 환수 곤란 → 가능하면 플랫폼 내 결제·카드 결제로.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 소비자원·경찰청 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현지 도착 시점 자료 보존 (당일)</strong> — 주소 불일치 사진·영상·GPS.</li>\n<li><strong>2단계 — 호스트 신원·연락처 확보</strong> — 광고·계약·결제 화면 캡처.</li>\n<li><strong>3단계 — 한국소비자원 1372·국제거래소비자포털 신고</strong></li>\n<li><strong>4단계 — 카드 할부항변 (90일 내) + 사이버 사기 고소 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>5단계 — 민사 부당이득 반환·여행 손해배상 (10년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외 휴양지 가짜 매물 사기 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 광고·결제·현지 갈래로 정리됩니다.</strong></p>\n<ul>\n<li><strong>광고 페이지·SNS·블로그 캡처 (사진·주소·가격)</strong></li>\n<li><strong>계약·예약 확인 메일·카톡 대화 전체</strong></li>\n<li><strong>이체 영수증·카드 매출전표</strong></li>\n<li><strong>현지 도착 시 매물 부재·다른 주소 사진·영상·GPS 위치</strong></li>\n<li><strong>구글·네이버 이미지 역검색 결과 (도용 입증)</strong></li>\n<li><strong>대체 숙박·항공 추가 비용 자료</strong></li>\n<li><strong>본인 신분증·여권·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 광고 사진을 구글 이미지 역검색하면 같은 사진이 여러 호스트·여러 카페에서 사용된 정황을 확인할 수 있는 영역. 이미지 도용 입증은 가짜 매물 사기의 결정적 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담·신고 기관입니다.</strong></p>\n<ul>\n<li><strong>매물 실재성 입증</strong> — 광고 주소·실제 주소 불일치 자료.</li>\n<li><strong>이미지 도용</strong> — 다른 매물·다른 호스트가 같은 사진 사용 사례.</li>\n<li><strong>계좌이체 결제</strong> — 환수율 낮음, 즉시 형사 고소 + 지급정지 트랙.</li>\n<li><strong>해외 호스트 관할</strong> — 국제 공조·현지 관광경찰 신고 검토.</li>\n<li><strong>대체 매물 강요</strong> — 환불 회피 패턴, 거부 후 환불 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372 (국제거래소비자포털)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>외교부 영사콜센터 (해외 사건 안내)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임대차 계약금 편취 사기',
        summary:
          '대법원 91도2270(대법원, 1991.11.12 선고) 영역에서 법원은 임대차·전대차 등 부동산 임대 명목으로 계약금을 수령하면서 임대 가능성 부재·담보 제공·소유관계 등 결정적 사정을 은폐한 경우 계약금에 대한 사기죄가 성립될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '"실재하지 않는 매물 + 결정적 사정 은폐 + 입금 후 잠적" 결합은 임대 가짜 매물 사기로 평가될 수 있는 영역. 광고 사진 도용·주소 불일치가 핵심 입증 자료.',
      },
    ],
    faq: [
      {
        question: '현지 도착 후 매물 부재를 어떻게 입증하나요?',
        answer:
          '<strong>광고 주소와 GPS 위치 사진·영상을 현지에서 즉시 촬영 보존하는 것이 결정적 자료 영역입니다.</strong> 호텔·관광경찰 진술도 함께 확보.',
      },
      {
        question: '계좌이체로 입금했는데 환수 가능성이 있나요?',
        answer:
          '<strong>이체는 카드 결제보다 환수율이 낮은 영역입니다.</strong> 즉시 경찰 사건사고사실확인원 발급 후 송금 은행에 지급정지 신청 + 사이버 고소 트랙 우선.',
      },
      {
        question: '해외 호스트라며 답변이 없습니다',
        answer:
          '<strong>국내 광고·국내 결제·국내 피해자라면 국내 경찰 신고 가능한 영역입니다.</strong> 외교부 영사콜센터·현지 관광경찰 병행 검토.',
      },
      {
        question: '대체 숙박·항공권 추가 비용도 환수 대상인가요?',
        answer:
          '<strong>가짜 매물로 인한 합리적 추가 지출은 손해배상 청구 범위로 평가될 수 있는 영역입니다.</strong> 영수증·결제 자료 보존이 핵심.',
      },
      {
        question: '같은 사진이 여러 카페에서 보입니다',
        answer:
          '<strong>이미지 도용은 가짜 매물 사기의 결정적 정황 자료로 평가될 수 있는 영역입니다.</strong> 다른 카페 광고 캡처·다른 호스트 명의 비교 자료 보존.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '온라인 쇼핑 사기', href: '/guide/fraud/fraud-online-shopping-procedure' },
      { label: '카드 할부항변', href: '/guide/fraud/fraud-card-installment-objection' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
    ],
  },

  // ─── 5. fraud-tax-savings-investment-scheme-track ───
  {
    domain: 'fraud',
    slug: 'fraud-tax-savings-investment-scheme-track',
    keyword: '세금 절감 투자 사기',
    questionKeyword: '세금 50% 환급 절세 투자 상품에 3,000만원 가입했는데 환급도 안 되고 원금도 돌려받지 못함.',
    ctaKeyword: '절세 투자 사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '세금 환급·절세 투자 사기 — 5단계 자본시장법 다툼 | 로앤가이드',
      description:
        '"세금 50% 환급" "절세 투자" 광고로 모집한 미인가 상품에 가입했는데 환급도 원금도 회수되지 않는다면 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'세금 50% 환급 절세 투자 상품\'이라는 광고로 3,000만원을 입금. 처음엔 \'국세청 세액공제 적용 상품\' \'고소득자 절세 특화\'라며 상세 자료를 보냈지만, 실제 연말정산에서 세제 혜택은 없었고 원금도 돌려받지 못한 상태에서 운영사 연락 두절. 알고 보니 금융위 인가도 없는 미신고 영업이었고, 후속 가입자 자금으로 앞선 가입자에게 \'환급분\'을 돌려막던 폰지 구조였어요." \'세금 환급·절세\' 유인 투자 사기는 ① 사기죄(형법 347조) — 세제 혜택 허위 표시 ② 유사수신행위 규제법 ③ 자본시장법(미인가 영업) ④ 조세범처벌법(허위 세무 광고) ⑤ 금감원·금융위 신고 트랙이 검토 가능한 영역. 세제 혜택 부재 + 미인가 + 폰지 구조 결합 패턴이 결정적 사정. 피해자라면 사실관계 입증할 수 있다면 ① 광고·계약 자료 ② 금감원 1332 ③ 사이버 고소 ④ 환수 ⑤ 민사 5단계로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 절세 투자 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·신고·고소·환수·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 광고·계약·환급 자료 보존</strong> — "세액공제" "절세 50%" 표기 캡처.</li>\n<li><strong>② 인가·세제 혜택 실재 확인</strong> — 금융위 등록·국세청 세액공제 적용 여부.</li>\n<li><strong>③ 금감원 1332·금융위 신고</strong> — 자본시장법·유사수신·미인가 영업.</li>\n<li><strong>④ 경찰 사이버 사기 고소 (ecrm)</strong> — 다수 피해자 집단.</li>\n<li><strong>⑤ 민사 부당이득·손해배상</strong> — 10년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "세금 환급·절세 보장" + "원금 보장" + "고수익"이 한 상품에 결합되면 미인가 유사수신·자본시장법 위반 가능성 높은 영역. 실제 연말정산 적용 여부가 가장 직접적인 입증 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 금감원·경찰청 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (즉시)</strong> — 광고·계약·이체·세무 안내 자료.</li>\n<li><strong>2단계 — 인가·세제 혜택 실재 확인 (1주 내)</strong> — 금융위 인가 검색·국세청 1세무서 문의.</li>\n<li><strong>3단계 — 금감원 1332·금융위 신고</strong> — 미인가·유사수신.</li>\n<li><strong>4단계 — 경찰 사이버 사기 고소 (ecrm.cyber.go.kr)</strong> — 집단 고소.</li>\n<li><strong>5단계 — 민사 부당이득 반환 (10년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">절세 투자 사기 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 광고·계약·세제 갈래로 정리됩니다.</strong></p>\n<ul>\n<li><strong>광고 자료 ("세액공제" "절세 50%" "원금 보장" 표기)</strong></li>\n<li><strong>투자계약서·약관·세무 안내 자료</strong></li>\n<li><strong>이체 내역·결제 영수증</strong></li>\n<li><strong>연말정산 결과 (실제 세액공제 미적용 입증)</strong></li>\n<li><strong>금융위 인가 조회 결과·국세청 답변</strong></li>\n<li><strong>같은 시기 피해자 명단·진술서</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 국세청에 해당 상품의 세액공제 적용 가능성을 서면 질의. "세제 혜택 없음" 답변은 광고가 허위였다는 결정적 자료로 평가될 수 있는 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담·신고 기관입니다.</strong></p>\n<ul>\n<li><strong>세제 혜택 허위 표시</strong> — 국세청 답변·연말정산 결과로 입증.</li>\n<li><strong>금융위 미인가</strong> — 자본시장법·유사수신 핵심 위반.</li>\n<li><strong>폰지 구조</strong> — 후속 가입자 자금으로 환급분 돌려막기.</li>\n<li><strong>"원금 보장"</strong> — 유사수신 핵심 표지.</li>\n<li><strong>해외 법인 주장</strong> — 국내 모집·국내 결제는 국내법 적용 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>금감원 불법사금융 1332</strong></li>\n<li><strong>금융위원회 신고</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 미인가 투자 유치·상습사기',
        summary:
          '대법원 2000도3057(대법원, 2001.02.13 선고) 영역에서 법원은 인가받지 않은 채 투자자들로부터 자금을 모집해 유가증권 투자·운용 명목으로 수익권을 분할 취득시키는 영업을 한 경우 증권투자신탁업법(현 자본시장법) 위반·상습사기죄가 함께 평가될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '"미인가 + 수익 분배 약정 + 다수 모집"은 자본시장법·유사수신·사기 결합 영역. "세금 환급·절세" 유인은 추가 기망 사정.',
      },
    ],
    faq: [
      {
        question: '"세액공제 적용 상품"이라는 광고가 진실인지 확인하려면?',
        answer:
          '<strong>국세청·관할 세무서에 서면 질의하거나 세무사 상담을 받아보세요.</strong> 실제 연말정산 결과 미적용은 광고 허위의 결정적 자료로 평가될 수 있는 영역.',
      },
      {
        question: '금융위 인가받지 않은 상품은 모두 사기인가요?',
        answer:
          '<strong>미인가 자체가 사기로 평가되지는 않지만 "원금 보장 + 고수익 + 세제 혜택" 조합은 자본시장법·유사수신 위반 가능성 높은 영역입니다.</strong>',
      },
      {
        question: '처음엔 환급분이 일부 들어왔는데 사기인가요?',
        answer:
          '<strong>전형적 폰지 패턴일 가능성이 있는 영역입니다.</strong> 후속 가입자 자금으로 앞선 가입자에게 "환급"을 돌려막다 일정 시점에 잠적하는 구조.',
      },
      {
        question: '고소득자에게만 모집했다면 책임이 다른가요?',
        answer:
          '<strong>모집 대상이 일반 투자자가 아니어도 자본시장법·유사수신 적용 검토 영역입니다.</strong> 사모펀드 인가 여부가 핵심.',
      },
      {
        question: '집단 고소·집단 민사 어떻게 시작하나요?',
        answer:
          '<strong>같은 광고·같은 운영사 피해자가 SNS·카페·세무 커뮤니티에 모이는 영역입니다.</strong> 단톡방 구성 후 명단·진술서 정리 후 동시 진행.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '유사수신 신고', href: '/guide/fraud/fraud-illegal-fundraising' },
      { label: '집단 고소', href: '/guide/fraud/fraud-group-complaint' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
    ],
  },
];
