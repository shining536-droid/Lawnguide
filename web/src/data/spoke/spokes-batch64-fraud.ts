import { SpokePage } from '../spoke-pages';

// batch64 fraud — 5개 (2026-05-14)
//
// 고유 존재 이유:
// 1. fraud-membership-prepay-gym-closure — PT/헬스장/필라테스 선결제 후 폐업 환불 (기존 pilates-prepay-* 와 분기: 본 페이지는 폐업 신고 전 잠적 유형).
// 2. fraud-loan-broker-upfront-fee-vanish — 대출 알선 브로커가 선수금 받고 잠적 (기존 loan-* 부재 영역).
// 3. fraud-online-class-coupon-cancellation — 온라인 강의 결제 후 환불 불가 약관 (특수 환불 분쟁).
// 4. fraud-secondhand-luxury-fake — 중고 명품 가품 판매 (기존 secondhand-* 와 분기: 가품 판정 분쟁 트랙).
// 5. fraud-rental-property-deposit-double-listing — 월세 보증금 이중 계약 사기 (기존 jeonse-* 부재, 월세 특수 영역).

export const spokesBatch64Fraud: SpokePage[] = [
  // ─── 1. fraud-membership-prepay-gym-closure-track ───
  {
    domain: 'fraud',
    slug: 'fraud-membership-prepay-gym-closure-track',
    keyword: 'PT 선결제 폐업 환불',
    questionKeyword: '필라테스 1년치 선결제 직후 학원이 폐업했어요. 환불받을 수 있나요?',
    ctaKeyword: 'PT 선결제 폐업 환불 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'PT·필라테스 선결제 폐업 — 5단계 환불 청구 다툼 | 로앤가이드',
      description:
        '체육시설·학원 선결제 직후 폐업·잠적했다면 사기·환불·구제 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"필라테스 1년치 200만원 선결제하고 일주일 만에 학원이 \"운영난\"이라며 문 닫았어요. 사장 연락 두절. SNS에 같은 시기 다른 회원 50명에게 똑같이 결제 받았다는 글이 줄줄이 올라옵니다." 폐업이 예정된 상태에서 받은 선결제는 ① 사기죄(형법 347조) 평가 여지 ② 체육시설법·학원법상 환불 규정 ③ 카드사 할부항변·소비자분쟁조정 ④ 채권자 채무자 회생·파산 시 우선순위 5가지 트랙이 핵심. 같은 시기 다수 회원에게 동일하게 받았다면 사기의 고의 추정 강한 사정. 대응은 ① 결제·계약·잠적 자료 ② 경찰 사기 고소 ③ 카드사 항변 ④ 소비자원 조정 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 선결제 폐업 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제·고소·항변·조정·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 결제·계약 자료 보존</strong> — 영수증·이용권·SNS 광고.</li>\n<li><strong>② 사기 고소 (형법 347조)</strong> — 같은 시기 다수 피해 입증.</li>\n<li><strong>③ 카드사 할부항변권</strong> — 20만원 이상 3개월 이상 할부 시.</li>\n<li><strong>④ 소비자분쟁조정 (한국소비자원)</strong> — 환불 기준 적용.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 단독·집단 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 폐업이 임박했는데도 신규 선결제를 받았다면 사기 고의 추정 가능한 영역. 같은 시기 다수 피해자 입증이 결정적.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·항변·조정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 결제·계약 자료 확보 (즉시)</strong> — 영수증·이용권·계약서·광고.</li>\n<li><strong>2단계 — 경찰 사기 고소 (1주 내)</strong> — 다수 피해자 명단 첨부.</li>\n<li><strong>3단계 — 카드사 할부항변 (90일 내)</strong> — 잔여 할부금 지급 거절.</li>\n<li><strong>4단계 — 한국소비자원 분쟁조정 신청</strong> — 환불 기준 적용.</li>\n<li><strong>5단계 — 민사 손해배상 (10년 시효)</strong> — 사기 시 10년.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">선결제 폐업 환불 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제·계약·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>결제 영수증·카드 매출전표</strong></li>\n<li><strong>이용권·계약서·약관</strong></li>\n<li><strong>업체 SNS·광고·홍보물 캡처</strong></li>\n<li><strong>폐업 공지·잠적 메시지 (카톡·문자)</strong></li>\n<li><strong>같은 시기 다른 피해자 명단·진술서</strong></li>\n<li><strong>사업자등록증·법인등기 정보</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 결제 직후 \"같은 사람에게 결제한 다른 회원\" 모이는 단톡방 검색해서 명단·진술서 확보. 다수 피해자 입증이 사기 입증의 결정적 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사기 고의 입증</strong> — 폐업 임박 인지 + 신규 결제 유치.</li>\n<li><strong>체육시설법 환불</strong> — 잔여 기간 비례 환불 의무.</li>\n<li><strong>카드 할부항변</strong> — 20만원 이상·3개월 이상 할부 + 90일 내 신청.</li>\n<li><strong>소비자분쟁조정 효력</strong> — 합의·재판상 화해 효력.</li>\n<li><strong>회생·파산 시 우선순위</strong> — 소액 일반채권 후순위 불리.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버수사대 182</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 폐업 임박 선결제 사기',
        summary:
          '대법원 2017도17699(2018.04.10 선고) 영역에서 법원은 사업자가 경영 사정상 정상적 용역 제공이 어렵다는 것을 미필적으로나마 인식하면서도 신규 결제를 받았다고 평가될 수 있는 경우 편취의 고의가 인정될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '폐업 임박 인지 + 신규 결제 유치 결합 시 사기 고의 추정. 같은 시기 다수 피해자 입증 결정적.',
      },
    ],
    faq: [
      {
        question: '카드 일시불로 결제했어요',
        answer:
          '<strong>할부항변권은 안 되지만 사기 고소·소비자원 조정·민사 청구는 동일 트랙입니다.</strong>',
      },
      {
        question: '체육시설법 환불 기준은 무엇인가요?',
        answer:
          '<strong>잔여 기간 비례 환불 + 위약금 10% 상한입니다.</strong>',
      },
      {
        question: '카드 할부항변권은 어떻게 신청하나요?',
        answer:
          '<strong>카드사에 서면(또는 앱)으로 90일 내 항변권 행사 신청합니다.</strong> 20만원 이상·3개월 이상 할부 요건.',
      },
      {
        question: '같은 시기 다른 피해자가 있어요',
        answer:
          '<strong>집단 고소·집단 조정 가능합니다.</strong> 명단·진술서 정리 후 함께 신청.',
      },
      {
        question: '업체가 회생·파산 신청하면 환불이 안 되나요?',
        answer:
          '<strong>일반채권은 후순위라 회수율이 낮은 영역입니다.</strong> 신청 전 카드 항변·소비자원 조정이 빠른 트랙.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '카드 할부항변', href: '/guide/fraud/fraud-card-installment-objection' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '집단 고소', href: '/guide/fraud/fraud-group-complaint' },
      { label: '체육시설 환불', href: '/guide/fraud/fraud-fitness-center-refund' },
    ],
  },

  // ─── 2. fraud-loan-broker-upfront-fee-vanish-track ───
  {
    domain: 'fraud',
    slug: 'fraud-loan-broker-upfront-fee-vanish-track',
    keyword: '대출 브로커 선수금 사기',
    questionKeyword: '대출 알선 브로커에게 수수료 선결제 후 잠적했어요. 어디부터 신고하나요?',
    ctaKeyword: '대출 브로커 선수금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '대출 알선 선수금 사기 — 5단계 대부업법 + 사기 다툼 | 로앤가이드',
      description:
        '대출 브로커에게 수수료 선결제 후 잠적당했다면 대부업법·사기·환수 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"카톡 광고로 \'저신용도 1금융권 가능\'이라는 대출 브로커에게 수수료 300만원 선결제. 일주일 후 \'심사 통과 못했다\'며 연락 끊김. 카톡 차단, 전화 부재. 알고 보니 대부중개 미등록 업체였어요." 대부업법은 대부중개 시 ① 선수료·수수료 수취 절대 금지 ② 등록업체만 영업 가능 ③ 위반 시 5년 이하 징역·5천만원 이하 벌금이라고 정한 영역. 따라서 미등록 + 선수금 수취 자체가 형사 처벌 대상 + 받은 돈은 \"불법원인급여 예외\"로 반환 청구 가능합니다. 대응은 ① 결제·메시지 자료 ② 금감원 신고 ③ 사이버범죄 고소 ④ 카드 항변 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 대출 브로커 선수금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·신고·고소·항변·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 결제·계약 자료 보존</strong> — 이체 내역·카톡·광고.</li>\n<li><strong>② 금감원 불법 사금융 신고</strong> — 1332 또는 홈페이지.</li>\n<li><strong>③ 경찰 사이버수사대 고소</strong> — 사기 + 대부업법 위반.</li>\n<li><strong>④ 카드사 항변·지급정지</strong> — 카드 결제 시.</li>\n<li><strong>⑤ 민사 부당이득 반환</strong> — 10년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대부중개에서 선수료·수수료 수취는 그 자체가 위법인 영역. 미등록 + 선수금은 사기 + 대부업법 위반 결합 트랙이라 형사 처벌 가능성 높습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·고소·환수 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 즉시 보존 (즉시)</strong> — 카톡·문자·이체 내역·광고 캡처.</li>\n<li><strong>2단계 — 금감원 1332 신고 (1일 내)</strong> — 불법 사금융 신고센터.</li>\n<li><strong>3단계 — 경찰 사이버범죄 신고 (ecrm.police.go.kr)</strong> — 사기 고소.</li>\n<li><strong>4단계 — 카드사 지급정지·항변 (카드 결제 시)</strong> — 즉시 신청.</li>\n<li><strong>5단계 — 민사 부당이득 반환</strong> — 10년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">대출 브로커 선수금 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 결제·연락·광고 갈래입니다.</strong></p>\n<ul>\n<li><strong>이체 내역·카드 매출전표</strong></li>\n<li><strong>카톡·문자·통화 녹음</strong></li>\n<li><strong>대출 광고·SNS·블로그 캡처</strong></li>\n<li><strong>업체명·계좌번호·연락처</strong></li>\n<li><strong>대부업 등록 여부 확인 (금감원 조회)</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n<li><strong>피해자 모임·다수 피해 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 금감원 \"등록 대부업체 통합조회\"에서 업체명·등록번호 검색해 미등록 입증 자료 캡처. 미등록 자체가 위법 결정적 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대부업 등록 여부</strong> — 미등록 시 위법 가중.</li>\n<li><strong>선수금 수취 금지</strong> — 대부업법 절대 금지 사유.</li>\n<li><strong>사기 + 대부업법 병합</strong> — 형사 처벌 가중.</li>\n<li><strong>카드 항변권</strong> — 20만원 이상·3개월 이상 할부 시.</li>\n<li><strong>불법원인급여 예외</strong> — 대부업법 위반은 반환 청구 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>금감원 불법사금융 1332</strong></li>\n<li><strong>경찰청 사이버수사 182</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대부업법 위반과 사기',
        summary:
          '대법원 2010도11665(2012.09.13 선고) 영역에서 법원은 대부업법상 등록 없이 영업하거나 법령상 금지된 수수료를 수취한 경우 형사 처벌 대상이 될 수 있고, 그 수수료가 기망적 목적으로 수취된 경우 사기죄와 경합범 관계에 있다고 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '미등록 대부중개 + 선수금 수취는 사기 + 대부업법 위반 경합. 환수 청구 + 형사 처벌 동시 트랙.',
      },
    ],
    faq: [
      {
        question: '브로커 연락처가 모두 차단됐어요',
        answer:
          '<strong>카톡 차단도 통신사·플랫폼 협조로 추적 가능합니다.</strong> 즉시 경찰 신고.',
      },
      {
        question: '대부업 등록 여부는 어디서 확인하나요?',
        answer:
          '<strong>금감원 홈페이지 "등록 대부업체 통합조회"에서 확인 가능합니다.</strong>',
      },
      {
        question: '계좌이체로 보냈는데 환수 가능한가요?',
        answer:
          '<strong>경찰 사건사고사실확인원으로 은행에 지급정지 요청 가능합니다.</strong>',
      },
      {
        question: '카드 결제 시 항변권 행사 기간은요?',
        answer:
          '<strong>분쟁 발생일부터 90일 이내입니다.</strong> 20만원 이상·3개월 이상 할부 요건.',
      },
      {
        question: '대부업법 위반은 어떤 처벌인가요?',
        answer:
          '<strong>5년 이하 징역 또는 5천만원 이하 벌금입니다.</strong>',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '보이스피싱 환급', href: '/guide/fraud/fraud-voicephishing-refund' },
      { label: '불법사금융 신고', href: '/guide/fraud/fraud-illegal-private-lending' },
      { label: '카드 할부항변', href: '/guide/fraud/fraud-card-installment-objection' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
    ],
  },

  // ─── 3. fraud-online-class-coupon-cancellation-track ───
  {
    domain: 'fraud',
    slug: 'fraud-online-class-coupon-cancellation-track',
    keyword: '온라인 강의 환불 거부',
    questionKeyword: '온라인 강의 100만원 결제 후 강의 품질이 광고와 다른데 환불 불가라고 합니다.',
    ctaKeyword: '온라인 강의 환불 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '온라인 강의 환불 거부 — 5단계 전자상거래법·청약철회 다툼 | 로앤가이드',
      description:
        '온라인 강의·온라인 클래스 결제 후 환불 거부됐다면 청약철회·표시광고법 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'1개월 만에 자격증 합격 보장\'이라는 광고로 100만원 강의 결제. 막상 들어보니 일반 무료 영상과 다를 게 없고, \'합격 보장\'은 없었어요. 환불 요청하니 \'7일 지나서 환불 불가\' \'1강이라도 보면 환불 거부\' 약관을 들이댑니다." 전자상거래법은 ① 콘텐츠 일부 이용 시에도 환불 가능한 사례 + 광고와 다른 경우(표시광고법 위반) ② 7일 청약철회 ③ 부분 이용 시에도 잔여 분 환불 ④ 약관 부당 조항 무효 5가지 트랙이 핵심. 광고와 실제 강의가 현저히 다른 경우 \"기망\"으로 평가되어 사기 + 환불 청구 트랙이 결합되는 영역. 대응은 ① 광고·약관 비교 ② 7일 청약철회 ③ 소비자원 조정 ④ 카드 항변 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 온라인 강의 환불 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 청약철회·광고·조정·항변·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 7일 청약철회권</strong> — 콘텐츠 이용 시작 전.</li>\n<li><strong>② 표시광고법 위반</strong> — 광고와 실제 강의 차이.</li>\n<li><strong>③ 한국소비자원 분쟁조정</strong> — 환불 기준 적용.</li>\n<li><strong>④ 카드 항변·지급정지</strong> — 분쟁 사실 입증 후.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 사기 시 10년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \"환불 불가\" 약관도 법령상 강행규정에 반하면 무효 평가 영역. 광고와 실제 차이가 클수록 환불 + 사기 결합 트랙 강화.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 청약철회·조정·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 광고·약관 자료 확보 (즉시)</strong> — 광고 캡처·강의 자료·결제 영수증.</li>\n<li><strong>2단계 — 청약철회·환불 요청 (7일 내)</strong> — 내용증명·이메일.</li>\n<li><strong>3단계 — 한국소비자원 분쟁조정 (1372)</strong> — 30~60일 처리.</li>\n<li><strong>4단계 — 카드사 항변·지급정지 (분쟁 입증 시)</strong></li>\n<li><strong>5단계 — 민사 손해배상·사기 고소</strong> — 광고-실제 차이 큰 경우.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인 강의 환불 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 광고·결제·강의 갈래입니다.</strong></p>\n<ul>\n<li><strong>강의 광고·SNS·홈페이지 캡처</strong></li>\n<li><strong>결제 영수증·카드 매출전표</strong></li>\n<li><strong>강의 약관·환불 정책</strong></li>\n<li><strong>실제 강의 영상·교재 (광고와 차이 입증)</strong></li>\n<li><strong>환불 요청·거부 답변 (메일·카톡)</strong></li>\n<li><strong>같은 시기 피해자 명단</strong></li>\n<li><strong>사업자 정보·통신판매업 신고증</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 광고 \"합격 보장\" \"100% 환급\" 문구는 표시광고법 위반 평가 강한 사정. 광고 캡처 + 실제 강의 캡처를 시각적으로 비교.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>7일 청약철회</strong> — 콘텐츠 이용 시작 전 적용.</li>\n<li><strong>"환불 불가" 약관</strong> — 법령 강행규정에 반하면 무효.</li>\n<li><strong>표시광고법</strong> — 허위·과장 광고는 손해배상.</li>\n<li><strong>부분 이용 환불</strong> — 잔여 분 비례 환불.</li>\n<li><strong>학원법·평생교육법 적용</strong> — 사업 형태에 따라.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>공정거래위원회</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 콘텐츠 청약철회',
        summary:
          '대법원 2008도2826(2008.10.23 선고) 영역에서 법원은 사업자가 소비자 보호 강행규정에 반하는 약관 조항을 근거로 환불을 거부한 경우 그 약관이 무효로 평가될 여지가 있고, 광고가 실제와 현저히 다르다고 평가될 수 있는 경우 표시광고법 위반 + 사기죄가 결합될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '환불 불가 약관도 강행규정에 반하면 무효. 광고-실제 차이 큰 경우 사기 + 환불 결합 트랙.',
      },
    ],
    faq: [
      {
        question: '1강이라도 보면 정말 환불 불가인가요?',
        answer:
          '<strong>아닙니다.</strong> 부분 이용 시에도 잔여 분 비례 환불 청구 가능한 영역입니다.',
      },
      {
        question: '7일이 지났는데도 환불 가능한가요?',
        answer:
          '<strong>광고-실제 차이·기망 입증 시 7일 후에도 청구 가능합니다.</strong>',
      },
      {
        question: '"합격 보장"이라는데 합격 안 했어요',
        answer:
          '<strong>표시광고법 위반 + 사기죄 평가 강한 사정입니다.</strong>',
      },
      {
        question: '소비자원 조정 결과에 안 따르면요?',
        answer:
          '<strong>합의 권고 + 재판상 화해 효력으로 강제 집행 가능합니다.</strong>',
      },
      {
        question: '카드 항변권은 어떻게 신청하나요?',
        answer:
          '<strong>분쟁 발생일부터 90일 내, 카드사 앱·서면으로 신청합니다.</strong>',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '청약철회권', href: '/guide/fraud/fraud-online-cancellation-right' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '표시광고법 위반', href: '/guide/fraud/fraud-false-advertising' },
      { label: '카드 할부항변', href: '/guide/fraud/fraud-card-installment-objection' },
    ],
  },

  // ─── 4. fraud-secondhand-luxury-fake-track ───
  {
    domain: 'fraud',
    slug: 'fraud-secondhand-luxury-fake-track',
    keyword: '중고 명품 가품 판매',
    questionKeyword: '중고로 산 명품 가방이 가품 판정 받았어요. 환불·고소 가능한가요?',
    ctaKeyword: '중고 명품 가품 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '중고 명품 가품 판매 — 5단계 사기·환불 다툼 | 로앤가이드',
      description:
        '중고 명품 가방·시계·신발이 가품으로 판정됐다면 사기·환불 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중고거래 앱에서 명품 가방 250만원에 구입. \'정품 인증 확실\'이라는 판매자 글이었어요. 받아서 명품 감정 서비스에 보냈더니 가품 판정. 판매자에게 환불 요청하니 \'본인이 확인하고 산 거다\' \'정품인 줄 알았다\'며 거부합니다." 가품을 정품으로 속여 판 행위는 ① 사기죄(형법 347조) ② 부당이득반환 ③ 중고거래 플랫폼 신고 ④ 카드 항변 가능한 영역. \"몰랐다\"는 변명도 ① 판매자가 명품 거래 빈도 ② 정품 인증 표시 광고 ③ 판매가 가품 시세보다 높은 사정 등으로 미필적 고의 입증 가능한 트랙. 대응은 ① 감정서 ② 거래 자료 ③ 사기 고소 ④ 플랫폼 신고 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 중고 명품 가품 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 감정·고소·플랫폼·항변·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 가품 감정서 확보</strong> — 명품 감정 전문업체 발급.</li>\n<li><strong>② 거래 자료 보존</strong> — 광고·채팅·이체 내역.</li>\n<li><strong>③ 사기 고소 (형법 347조)</strong> — 판매자 거래 빈도·시세 차이 입증.</li>\n<li><strong>④ 플랫폼 신고·환수 신청</strong> — 안전결제 시.</li>\n<li><strong>⑤ 민사 부당이득 반환</strong> — 10년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판매자가 \"정품 인증\" 광고를 했다면 그 자체가 기망 입증의 출발점. 명품 감정서 + 거래 자료 + 판매자 빈도 자료로 미필적 고의 입증 가능 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 감정·신고·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가품 감정 (1~2주)</strong> — 명품 감정원·KCL·해당 브랜드 매장.</li>\n<li><strong>2단계 — 거래 자료 보존 (즉시)</strong> — 광고·채팅·이체.</li>\n<li><strong>3단계 — 사기 고소 (경찰서 또는 ecrm)</strong> — 감정서 첨부.</li>\n<li><strong>4단계 — 플랫폼 신고·안전결제 환수</strong> — 안전결제 시 즉시.</li>\n<li><strong>5단계 — 민사 부당이득 반환 + 손해배상</strong> — 10년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 명품 가품 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 감정·거래·판매자 갈래입니다.</strong></p>\n<ul>\n<li><strong>명품 감정서 (전문업체·매장·KCL)</strong></li>\n<li><strong>거래 광고·채팅·이체 내역</strong></li>\n<li><strong>판매자 ID·연락처·계좌</strong></li>\n<li><strong>판매자의 다른 거래글·평판</strong></li>\n<li><strong>유사 시기 가품 시세 자료</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n<li><strong>플랫폼 신고 접수증 (있을 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 판매자가 같은 가품을 다수 거래해온 정황이 입증되면 \"몰랐다\" 변명 통하지 않음. 판매자 ID 검색 + 다른 거래글 캡처.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>판매자 미필적 고의</strong> — 거래 빈도·시세 차이·정품 인증 광고로 입증.</li>\n<li><strong>감정서 신뢰성</strong> — 전문업체·매장·KCL 감정이 유리.</li>\n<li><strong>"몰랐다" 변명</strong> — 명품 거래 빈도 + 광고로 반박.</li>\n<li><strong>플랫폼 책임</strong> — 안전결제 시 환수 트랙.</li>\n<li><strong>상표법 위반</strong> — 가품 거래 자체가 형사 처벌 사유.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버수사 182</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 가품 명품 판매 사기',
        summary:
          '대법원 2019도11766(2019.11.28 선고) 영역에서 법원은 가품을 정품으로 가장하여 판매한 행위가 사기죄에 해당한다고 평가될 수 있고, 판매자가 가품임을 명시적으로 인지하지 않았더라도 거래 빈도·시세·광고 내용 등을 종합해 미필적 고의가 인정될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '"몰랐다" 변명도 거래 빈도·시세·광고로 미필적 고의 입증. 명품 감정서가 출발점.',
      },
    ],
    faq: [
      {
        question: '감정은 어디서 받아야 하나요?',
        answer:
          '<strong>전문 감정업체·해당 브랜드 매장·KCL 등에서 받습니다.</strong> 매장 감정이 가장 신뢰도 높음.',
      },
      {
        question: '판매자가 "본인도 정품인 줄 알았다"고 주장하면요?',
        answer:
          '<strong>판매자의 다른 거래글·시세 차이·정품 인증 광고로 미필적 고의 입증 가능합니다.</strong>',
      },
      {
        question: '플랫폼 안전결제로 샀어요',
        answer:
          '<strong>플랫폼에 즉시 환수 신청 가능합니다.</strong> 감정서 + 거래 자료 첨부.',
      },
      {
        question: '판매자 신상정보가 부족해요',
        answer:
          '<strong>경찰 고소·플랫폼 협조로 추적 가능합니다.</strong> ID·계좌 정보가 핵심.',
      },
      {
        question: '가품 거래 자체가 처벌받나요?',
        answer:
          '<strong>판매자는 상표법 위반·사기죄로 처벌됩니다.</strong> 구매자는 처벌 대상 아닙니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '중고거래 사기', href: '/guide/fraud/fraud-secondhand-procedure' },
      { label: '안전결제 환수', href: '/guide/fraud/fraud-platform-escrow-refund' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
      { label: '소비자분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
    ],
  },

  // ─── 5. fraud-rental-property-deposit-double-listing-track ───
  {
    domain: 'fraud',
    slug: 'fraud-rental-property-deposit-double-listing-track',
    keyword: '월세 보증금 이중 계약',
    questionKeyword: '월세 보증금 냈는데 다른 사람과도 이중 계약했더라고요. 사기 고소 가능한가요?',
    ctaKeyword: '월세 이중 계약 사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '월세 보증금 이중 계약 사기 — 5단계 보증금 환수 다툼 | 로앤가이드',
      description:
        '월세·반전세 보증금을 냈는데 이중 계약 사실 확인됐다면 사기·환수 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"보증금 3,000만원·월세 80만원 조건으로 월세 계약하고 입주 직전. 그런데 같은 날 \'우리도 같은 방 계약했다\'는 다른 사람이 등장. 확인해보니 임대인이 같은 방을 일주일 사이 3명에게 계약하고 보증금을 받은 사실 발견. 임대인은 \'착오\'라며 연락 두절.\" 같은 부동산을 다수에게 계약·보증금 수취한 행위는 ① 사기죄 ② 부당이득반환 ③ 임차권 우선순위 ④ 형사 고소 + 민사 청구 결합 트랙. 처음 계약·보증금 지급한 사람이 임차권을 가지지만, 임대인이 다수에게 보증금을 받았다면 보증금 환수가 핵심 다툼이 되는 영역. 대응은 ① 계약·이체 자료 ② 다른 피해자 확인 ③ 사기 고소 ④ 임차권 보호 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 월세 이중 계약 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·고소·임차권·환수·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약·이체 자료 확보</strong> — 임대차계약서·이체 내역·신분증.</li>\n<li><strong>② 다른 피해자 확인·연대</strong> — 같은 방 계약자 명단.</li>\n<li><strong>③ 사기 고소 (형법 347조)</strong> — 다수 피해 입증.</li>\n<li><strong>④ 임차권 우선순위 다툼</strong> — 확정일자·전입신고 순서.</li>\n<li><strong>⑤ 민사 보증금 반환 청구</strong> — 10년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 이중 계약은 그 자체가 사기죄 평가 영역. 가장 먼저 \"확정일자 + 전입신고 + 점유\" 3요소를 갖춘 사람이 임차권 우선순위 확보.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 임차권·고소·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약 자료 보존 (즉시)</strong> — 계약서·이체·임대인 카톡.</li>\n<li><strong>2단계 — 확정일자·전입신고 (즉시)</strong> — 우선순위 확보.</li>\n<li><strong>3단계 — 사기 고소 (경찰서)</strong> — 다른 피해자 명단 첨부.</li>\n<li><strong>4단계 — 임차권 우선순위 다툼</strong> — 점유·확정일자 등기.</li>\n<li><strong>5단계 — 민사 보증금 반환 청구</strong> — 10년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">월세 이중 계약 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·이체·임차권 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·계약 당시 사진</strong></li>\n<li><strong>보증금 이체 내역·영수증</strong></li>\n<li><strong>임대인 신분증·연락처·소유 등기부</strong></li>\n<li><strong>다른 피해자 명단·계약서</strong></li>\n<li><strong>확정일자·전입신고 확인서</strong></li>\n<li><strong>임대인과 카톡·문자·통화 녹음</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이중 계약 확인 즉시 등기부등본 발급해 임대인 소유 여부·근저당·다른 임차권 확인 필수. 임대인이 소유자도 아니면 더 큰 사기 가능성.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임차권 우선순위</strong> — 확정일자 + 전입신고 + 점유 3요소.</li>\n<li><strong>사기 고의</strong> — 동시 다수 계약은 그 자체 고의 입증.</li>\n<li><strong>임대인 비소유자 사기</strong> — 등기부 확인 부재 시 사기 가중.</li>\n<li><strong>중개사 책임</strong> — 부실 중개 시 손해배상 청구 가능.</li>\n<li><strong>소액 사건 심판</strong> — 보증금 3,000만원 이하면 빠른 트랙.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버수사 182</strong></li>\n<li><strong>전세사기피해지원센터 1899-7300</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부동산 이중 계약 사기',
        summary:
          '대법원 2003도7124(2004.06.25 선고) 영역에서 법원은 부동산 임대인이 동일 부동산을 단기간 내 여러 사람과 임대차 계약을 체결하고 보증금을 수취한 경우 편취의 고의가 인정될 여지가 있다고 본 사례 흐름이 있습니다. 다수 피해 입증이 결정적 사정으로 평가되는 영역입니다.',
        takeaway: '단기간 다수 계약·보증금 수취는 사기 고의 추정. 확정일자·전입신고가 임차권 우선순위 핵심.',
      },
    ],
    faq: [
      {
        question: '확정일자·전입신고는 언제 해야 하나요?',
        answer:
          '<strong>계약 즉시·입주 당일이 원칙입니다.</strong> 이중 계약 의심 시 즉시.',
      },
      {
        question: '입주 못한 상태에서도 임차권 보호되나요?',
        answer:
          '<strong>점유가 핵심 요건이라 입주 못한 상태는 보호 약합니다.</strong> 확정일자만으로 부족.',
      },
      {
        question: '임대인이 비소유자였어요',
        answer:
          '<strong>등기부 미확인 사기 + 무권리 임대인 사기 결합으로 처벌 가중됩니다.</strong>',
      },
      {
        question: '중개사 책임도 물을 수 있나요?',
        answer:
          '<strong>등기부 확인·임대인 신원 확인 부재 시 손해배상 청구 가능합니다.</strong>',
      },
      {
        question: '경찰 사건사고사실확인원으로 지급정지 되나요?',
        answer:
          '<strong>이체 직후 신고 시 은행 지급정지 협조 받을 수 있습니다.</strong>',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '전세사기 대응', href: '/guide/jeonse-fraud/jeonse-fraud-complaint-procedure' },
      { label: '확정일자·전입신고', href: '/guide/jeonse/jeonse-confirmation-date-priority' },
      { label: '중개사 책임', href: '/guide/jeonse/jeonse-broker-liability' },
      { label: '사이버 사기 신고', href: '/guide/fraud/fraud-cyber-complaint-ecrm' },
    ],
  },
];
