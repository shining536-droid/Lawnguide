import { SpokePage } from '../spoke-pages';

// batch62 fraud — 5개 (2026-05-12)
//
// 고유 존재 이유:
// 1. 중고거래 택배 발송 후 사라짐 — 운송장 번호 + 계좌 추적 + 사기죄 트랙.
// 2. SNS 명품 공구 사기 — 공동구매 빙자 다수 피해 + 사기 + 사기방조 트랙.
// 3. 전세 보증금 빼돌리기(임대인 사기) — 사기·횡령 + 민사 트랙 (전세사기 별도 도메인과 구분: 일반 사기죄 각도).
// 4. 데이팅앱 로맨스 스캠 — 외국인 사칭·투자 권유 + 국제 자금 추적 트랙.
// 5. 가상화폐 거래소 인출 거부 — 거래소 운영사 책임 + 사기·횡령 트랙.

export const spokesBatch62Fraud: SpokePage[] = [
  // ─── 1. fraud-secondhand-shipped-vanish-track ───
  {
    domain: 'fraud',
    slug: 'fraud-secondhand-shipped-vanish-track',
    keyword: '중고거래 택배 발송 후 사라짐',
    questionKeyword: '중고거래로 30만원 송금했는데 \'택배 발송 완료\' 운송장 받고 끊겼어요. 어디부터 해야 하나요?',
    ctaKeyword: '중고거래 송금 사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '중고거래 송금 후 잠적 — 5단계 운송장·계좌 추적 | 로앤가이드',
      description:
        '중고거래 송금 후 \'운송장만 받고 잠적\'당했다면 사이버수사대 신고·계좌 추적 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중고나라에서 닌텐도 스위치 30만원에 거래. \'택배 발송 완료\' 메시지 + 가짜 운송장 번호 받았는데 추적해보니 \'송장 미등록\'. 판매자는 카톡 차단. 계좌이체 영수증은 있어요." 운송장 번호가 \'미등록\'이면 발송 자체 안 한 사례. 사이버수사대(ECRM) + 더치트(thecheat.co.kr) 사기 의심 계좌 조회가 첫걸음. 30만원 미만 단발성도 \'다수 피해자 결집\'으로 추적·환급 가능 영역. 대응 트랙은 ① 운송장 미등록 확인 ② 더치트 조회 + 신고 ③ 사이버수사대 ④ 계좌 지급정지 ⑤ 피해구제·환급 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 중고거래 송금 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 운송장·신고·수사·정지·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 운송장 미등록 확인</strong> — 택배사 홈페이지 추적.</li>\n<li><strong>② 더치트 조회·신고</strong> — 의심 계좌 다수 피해자 결집.</li>\n<li><strong>③ 사이버수사대 신고 (ECRM)</strong></li>\n<li><strong>④ 은행에 계좌 지급정지 요청</strong></li>\n<li><strong>⑤ 채권소멸·환급 절차 (약 2개월)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 30만원이라도 같은 계좌에 다수 피해 결집되면 \"조직적 사기\"로 가중 처벌 영역. 더치트 조회는 무료, 즉시.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·정지·환급 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 수집 (즉시)</strong> — 채팅·송금영수증·운송장.</li>\n<li><strong>2단계 — 더치트 조회·신고 (1일 내)</strong></li>\n<li><strong>3단계 — 사이버수사대 신고 (ECRM)</strong></li>\n<li><strong>4단계 — 은행 지급정지 요청 (즉시)</strong></li>\n<li><strong>5단계 — 채권소멸공고 → 환급 (약 2개월)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고거래 송금 사기 회복 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·송금·운송 갈래입니다.</strong></p>\n<ul>\n<li><strong>거래 채팅 캡처 (전체)</strong></li>\n<li><strong>송금영수증·계좌이체 내역</strong></li>\n<li><strong>판매자 닉네임·전화·계좌 정보</strong></li>\n<li><strong>운송장 번호·택배사 확인 캡처</strong></li>\n<li><strong>본인 신분증</strong></li>\n<li><strong>경찰서 사건사고사실확인원 (이후 단계)</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>운송장 미등록</strong> — 발송 자체 안 함 입증.</li>\n<li><strong>다수 피해자 결집</strong> — 더치트·카페 검색.</li>\n<li><strong>해외 IP 사용</strong> — 추적 어려우나 협조 가능.</li>\n<li><strong>채권소멸 2개월 대기</strong> — 환급까지 시간 소요.</li>\n<li><strong>송금 직후 정지</strong> — 24시간 내 정지가 환급 결정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버수사대 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>더치트 (thecheat.co.kr)</strong></li>\n<li><strong>금융감독원 1332</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 중고거래 사기 다수 피해',
        summary:
          '대법원 2025도14142 영역 등에서 법원은 다수 피해자에게 정형화된 수법으로 반복 송금을 유도한 행위는 단순 단발 사기가 아닌 \'조직적 사기\'로 평가되어 더 무거운 책임이 부과될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '같은 수법·계좌 다수 피해는 조직적 사기 영역. 더치트·카페 검색으로 결집 입증.',
      },
    ],
    faq: [
      {
        question: '30만원이라 신고 안 받을 것 같아요',
        answer:
          '<strong>금액 무관 신고 가능합니다.</strong> 다수 피해 결집 시 가중 수사.',
      },
      {
        question: '계좌 지급정지는 언제까지 가능한가요?',
        answer:
          '<strong>송금 직후가 가장 효과적입니다.</strong> 인출 전이면 보전.',
      },
      {
        question: '환급까지 얼마나 걸리나요?',
        answer:
          '<strong>채권소멸공고 2개월 + 절차 후 환급 영역입니다.</strong>',
      },
      {
        question: '판매자가 잡혀도 돈 받기 어려운가요?',
        answer:
          '<strong>형사 처벌과 별도로 민사 손해배상이 필요한 경우가 있습니다.</strong>',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '계좌 지급정지', href: '/guide/fraud/fraud-account-payment-stop' },
      { label: '보이스피싱 환급', href: '/guide/fraud/fraud-voice-phishing-refund' },
      { label: '사이버수사대 신고', href: '/guide/fraud/fraud-cyber-investigation-report' },
      { label: '피해자 다수 결집', href: '/guide/fraud/fraud-victim-group-action' },
    ],
  },

  // ─── 2. fraud-sns-luxury-group-buy-track ───
  {
    domain: 'fraud',
    slug: 'fraud-sns-luxury-group-buy-track',
    keyword: 'SNS 명품 공구 사기',
    questionKeyword: '인스타에서 명품 공동구매 입금했는데 발송 무기한 연기 후 잠적. 어디부터 챙기죠?',
    ctaKeyword: 'SNS 공구 사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'SNS 명품 공구 사기 — 5단계 다수 피해자 결집 | 로앤가이드',
      description:
        '인스타·블로그 명품 공동구매 입금 후 잠적당했다면 다수 피해자 결집·계좌 추적 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"인스타 \'명품 공구\' 계정에서 샤넬 가방 정가 대비 30% 할인 공동구매. 200만원 입금했는데 \'관세 추가\' \'통관 지연\' \'세관 보류\' 차일피일 연기 후 계정 비공개. 댓글에 같은 피해자 30명 이상." 명품 공구 사기는 ① 다수 피해자 결집 ② 계정·계좌·전화 동일 추적 ③ 형법 제347조 사기 + 다중피해 가중 영역. 200만원 단발도 \'다수 피해 합산\'으로 5천만원 이상 시 특정경제범죄가중처벌법 적용 가능. 대응 트랙은 ① 피해자 결집 ② 계정·계좌 신고 ③ 사이버수사대 ④ 지급정지 ⑤ 환급 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. SNS 명품 공구 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 결집·신고·수사·정지·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 다수 피해자 결집</strong> — 댓글·디엠·카페 검색.</li>\n<li><strong>② 동일 계정·계좌·전화</strong> — 추적 단서.</li>\n<li><strong>③ 사이버수사대 신고</strong></li>\n<li><strong>④ 계좌 지급정지</strong></li>\n<li><strong>⑤ 환급 절차 (2개월)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 다수 피해 합산 5천만원 이상이면 특경법 가중. 피해자 결집이 수사·환급의 분기점.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 결집·신고·환급 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 수집·피해자 결집 (즉시)</strong></li>\n<li><strong>2단계 — 사이버수사대 신고 (ECRM)</strong></li>\n<li><strong>3단계 — 계좌 지급정지 요청</strong></li>\n<li><strong>4단계 — 합동 진정·고소 (다수 피해자)</strong></li>\n<li><strong>5단계 — 채권소멸공고 → 환급 (2개월)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">SNS 공구 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 게시·송금·결집 갈래입니다.</strong></p>\n<ul>\n<li><strong>SNS 게시물·계정 캡처 (URL 포함)</strong></li>\n<li><strong>DM 대화 전체</strong></li>\n<li><strong>송금영수증</strong></li>\n<li><strong>판매자 계좌·전화·실명</strong></li>\n<li><strong>댓글·다른 피해자 정보</strong></li>\n<li><strong>본인 신분증</strong></li>\n<li><strong>피해자 단톡방 결집 자료</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>편취 의사 입증</strong> — 통관·관세 핑계 반복.</li>\n<li><strong>다수 피해 합산</strong> — 5천만원 이상 특경법.</li>\n<li><strong>피해자 결집 채널</strong> — 카페·디엠·해시태그.</li>\n<li><strong>계정 삭제 전 보존</strong> — 캡처·URL 확보.</li>\n<li><strong>플랫폼(SNS) 협조</strong> — 인스타·페이스북 본사 협조.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버수사대 ECRM</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>방심위 인터넷피해상담 1377</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다중 피해 사기 가중',
        summary:
          '대법원 2025도17027 영역 등에서 법원은 SNS·온라인 플랫폼에서 다수 피해자를 상대로 정형화된 수법으로 반복 편취한 행위는 특정경제범죄가중처벌법상 사기죄로 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '단발 200만원도 다수 합산 5천만원 이상 시 특경법 영역. 결집·합동 고소가 핵심.',
      },
    ],
    faq: [
      {
        question: '피해자 결집은 어디서 하나요?',
        answer:
          '<strong>네이버 카페·DM·해시태그 검색으로 결집 가능합니다.</strong>',
      },
      {
        question: '계정이 삭제됐어요',
        answer:
          '<strong>웨이백머신·캡처·다른 피해자 자료 활용 가능 영역입니다.</strong>',
      },
      {
        question: '합동 고소 절차는?',
        answer:
          '<strong>대표 1명이 다수 위임 받아 합동 고소장 작성하는 방식 일반적입니다.</strong>',
      },
      {
        question: '플랫폼 책임도 물을 수 있나요?',
        answer:
          '<strong>방조·관리책임 검토 가능하나 입증 부담 큽니다.</strong>',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '특경법 가중 처벌', href: '/guide/fraud/fraud-aggravated-economic-crimes' },
      { label: '피해자 결집', href: '/guide/fraud/fraud-victim-group-action' },
      { label: 'SNS 사기 신고', href: '/guide/fraud/fraud-sns-platform-report' },
      { label: '계좌 지급정지', href: '/guide/fraud/fraud-account-payment-stop' },
    ],
  },

  // ─── 3. fraud-jeonse-deposit-embezzle-track ───
  {
    domain: 'fraud',
    slug: 'fraud-jeonse-deposit-embezzle-track',
    keyword: '임대인 전세보증금 빼돌리기',
    questionKeyword: '집주인이 보증금 받자마자 다른 명의로 부동산 매매했어요. 사기로 고소 가능한가요?',
    ctaKeyword: '임대인 보증금 사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임대인 보증금 빼돌리기 — 5단계 사기·횡령 점검 | 로앤가이드',
      description:
        '집주인이 보증금 수령 직후 명의 변경·재산 은닉했다면 사기·횡령 형사 + 민사 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세 2억 보증금 내고 입주 1년차. 집주인이 보증금 받자마자 부동산을 \'어머니 명의\'로 매매 등기. 본인 만기 도래 시점에 \'재산 없다\'며 반환 불가 통지. 사기죄 고소가 가능한지 막막한 상황." 임대차 시점부터 \'보증금 반환 의사·능력 없이\' 계약했다면 형법 제347조 사기죄 영역. 보증금 수령 후 의도적 재산 은닉은 강제집행면탈죄(형법 제327조)도 별도 검토. 대응 트랙은 ① 임대차 시점 재산상태 ② 명의 변경 시점 추적 ③ 사기·강제집행면탈 고소 ④ 보증금반환소송 ⑤ 가압류·강제집행 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 임대인 보증금 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 시점·추적·고소·소송·집행 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 임대차 시점 임대인 재산상태</strong> — 부채·근저당·세금체납.</li>\n<li><strong>② 명의 변경 시점 추적</strong> — 등기부등본·세금완납증명.</li>\n<li><strong>③ 사기·강제집행면탈 고소</strong></li>\n<li><strong>④ 보증금반환 + 가압류</strong></li>\n<li><strong>⑤ 강제집행·배당</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임대차 \"시점\" 반환 의사·능력 부재면 사기. 만기 후 은닉이면 강제집행면탈. 가압류는 만기 전부터 가능한 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 추적·고소·집행 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 등기부등본 시점별 확보 (즉시)</strong></li>\n<li><strong>2단계 — 명의 변경·재산 처분 추적 (1주)</strong></li>\n<li><strong>3단계 — 사기·강제집행면탈 고소</strong></li>\n<li><strong>4단계 — 보증금반환소송 + 가압류</strong></li>\n<li><strong>5단계 — 강제집행·배당 (시효 10년)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">임대인 보증금 사기 대응을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·등기·재산 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서·확정일자·전입신고</strong></li>\n<li><strong>등기부등본 (계약 시점·현재·명의 변경 시점)</strong></li>\n<li><strong>송금영수증·보증금 영수증</strong></li>\n<li><strong>임대인 카톡·문자·반환 의사 확인서</strong></li>\n<li><strong>임대인 명의 변경 자료 (등기 이력)</strong></li>\n<li><strong>국세·지방세 완납증명</strong></li>\n<li><strong>본인 신분증</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임대차 시점 의사·능력</strong> — 부채·전세사기 패턴.</li>\n<li><strong>명의 변경 시점</strong> — 보증금 수령 직후가 가장 강력 단서.</li>\n<li><strong>친족 명의 매매</strong> — 통정매매·강제집행면탈.</li>\n<li><strong>전세사기 피해자 결정</strong> — 별도 지원 가능 영역.</li>\n<li><strong>가압류·가처분</strong> — 만기 전 보전 핵심.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>전세사기피해지원센터 1533-8119</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 사이버수사대</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임대인 사기 + 강제집행면탈',
        summary:
          '대법원 2022도1862 영역 등에서 법원은 임대인이 보증금 반환 의사·능력이 없음에도 임대차계약을 체결한 후 보증금 수령 직후 재산을 은닉·이전한 행위는 사기죄 + 강제집행면탈죄로 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '보증금 수령 직후 명의 변경 = 강제집행면탈 강력 단서. 가압류 + 사기 + 면탈 3중 트랙.',
      },
    ],
    faq: [
      {
        question: '만기 전인데 가압류 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 반환 의사·능력 없음 입증 시 보전처분.',
      },
      {
        question: '친족 명의 매매도 다툴 수 있나요?',
        answer:
          '<strong>통정매매·사해행위 취소소송 검토 가능합니다.</strong>',
      },
      {
        question: '전세사기 피해자로 인정받을 수 있나요?',
        answer:
          '<strong>피해지원센터 신청·심의 거쳐 결정.</strong> 인정 시 대출·이주 지원.',
      },
      {
        question: '형사 고소만 해도 보증금 받을 수 있나요?',
        answer:
          '<strong>형사·민사 별도입니다.</strong> 보증금 회수엔 민사 + 강제집행 필수.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '전세사기 피해 대응', href: '/guide/jeonse-fraud/jeonse-fraud-victim-response' },
      { label: '강제집행면탈죄', href: '/guide/fraud/fraud-execution-evasion' },
      { label: '보증금반환소송', href: '/guide/jeonse/jeonse-deposit-return-lawsuit' },
      { label: '사해행위 취소', href: '/guide/fraud/fraud-fraudulent-transfer-cancel' },
      { label: '가압류 신청', href: '/guide/fraud/fraud-provisional-attachment' },
    ],
  },

  // ─── 4. fraud-dating-app-romance-scam-track ───
  {
    domain: 'fraud',
    slug: 'fraud-dating-app-romance-scam-track',
    keyword: '데이팅앱 로맨스 스캠',
    questionKeyword: '데이팅앱에서 만난 상대가 \'급한 사정\' 입금 요구. 보낸 후 잠적했어요. 회수할 수 있나요?',
    ctaKeyword: '로맨스 스캠 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '데이팅앱 로맨스 스캠 — 5단계 국제 자금 추적 | 로앤가이드',
      description:
        '데이팅앱·SNS 로맨스 스캠으로 송금했다면 국제 자금 추적·환급 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"데이팅앱에서 \'해외 파병 중인 군인\' 사칭 외국인과 6개월 채팅·영상. \'한국 휴가 비행기 표\' \'세관 보증금\' 명목 총 3천만원 송금. 만남 직전 잠적." 로맨스 스캠은 ① 장기간 신뢰 구축 ② 긴급 사유 입금 유도 ③ 가짜 신분 (군인·의사·사업가) ④ 해외 IP·차명 계좌 사용이 정형 패턴. 송금이 국내 계좌라면 지급정지·환급 가능, 해외 송금은 KISA + 인터폴 협조 영역. 대응 트랙은 ① 신고·지급정지 ② 인터폴 협조 ③ 가상화폐 추적 ④ 피해자 결집 ⑤ 환급 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 로맨스 스캠 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·정지·추적·결집·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사이버수사대·KISA 신고</strong></li>\n<li><strong>② 송금 계좌 지급정지 (국내)</strong></li>\n<li><strong>③ 해외 송금·가상화폐 추적</strong></li>\n<li><strong>④ 피해자 결집</strong></li>\n<li><strong>⑤ 환급 (국내 보전분)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 해외 IP·차명계좌·가상화폐 환전은 추적 한계 큼. 국내 차명계좌 단계에서 지급정지 + 환급이 가장 현실적 회수 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·정지·추적 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 채팅·송금 증거 보존 (즉시)</strong></li>\n<li><strong>2단계 — 사이버수사대 신고 (ECRM)</strong></li>\n<li><strong>3단계 — 계좌 지급정지 (송금일 +1일)</strong></li>\n<li><strong>4단계 — KISA·인터폴 협조</strong></li>\n<li><strong>5단계 — 채권소멸·환급 (2개월)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">로맨스 스캠 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 채팅·송금·신원 갈래입니다.</strong></p>\n<ul>\n<li><strong>전체 채팅 이력 (앱 백업)</strong></li>\n<li><strong>송금영수증·해외송금명세</strong></li>\n<li><strong>상대방 사진·프로필·SNS</strong></li>\n<li><strong>전화·이메일 기록</strong></li>\n<li><strong>가상화폐 거래내역 (해당 시)</strong></li>\n<li><strong>본인 신분증</strong></li>\n<li><strong>경찰서 사건사고사실확인원</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>해외 IP·신원 미상</strong> — 인터폴 협조 한계.</li>\n<li><strong>차명계좌 추적</strong> — 송금 직후 지급정지가 핵심.</li>\n<li><strong>가상화폐 환전</strong> — 거래소 협조 가능 영역.</li>\n<li><strong>심리적 회복</strong> — 경찰·KISA 피해자 지원 별도.</li>\n<li><strong>피해자 결집</strong> — 카페·디엠 검색.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버수사대 ECRM</strong></li>\n<li><strong>KISA 인터넷침해 1382</strong></li>\n<li><strong>금융감독원 1332</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 국제 로맨스 스캠',
        summary:
          '대법원 2024도11686 영역 등에서 법원은 해외 거점에서 정형화된 수법으로 다수 피해자에게 송금을 유도한 로맨스 스캠 가담자(국내 인출책 등)에게 사기방조 등 책임이 인정될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '해외 본범 추적은 어렵지만 국내 인출책·계좌 명의자는 추적·환급 영역. 송금 직후 지급정지가 분기점.',
      },
    ],
    faq: [
      {
        question: '해외 송금했는데 회수 가능한가요?',
        answer:
          '<strong>현실적으로 어려운 경우가 많습니다.</strong> 국내 단계 보전이 핵심.',
      },
      {
        question: '가상화폐로 보냈어요',
        answer:
          '<strong>거래소 협조로 추적 가능한 사례가 있습니다.</strong> 즉시 신고 권장.',
      },
      {
        question: '신고하기 부끄러워요',
        answer:
          '<strong>경찰·KISA는 비공개 진행 가능합니다.</strong> 다수 피해자 결집에 도움.',
      },
      {
        question: '심리적 피해도 지원받나요?',
        answer:
          '<strong>범죄피해자지원센터(1577-2584) 심리상담 가능 영역입니다.</strong>',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '로맨스 스캠 대응', href: '/guide/fraud/fraud-romance-scam-response' },
      { label: '계좌 지급정지', href: '/guide/fraud/fraud-account-payment-stop' },
      { label: '국제 사기 인터폴', href: '/guide/fraud/fraud-international-interpol' },
      { label: '가상화폐 추적', href: '/guide/fraud/fraud-crypto-tracing' },
      { label: '피해자 심리 지원', href: '/guide/fraud/fraud-victim-psychological-support' },
    ],
  },

  // ─── 5. fraud-crypto-exchange-withdrawal-refuse-track ───
  {
    domain: 'fraud',
    slug: 'fraud-crypto-exchange-withdrawal-refuse-track',
    keyword: '가상화폐 거래소 인출 거부',
    questionKeyword: '거래소에서 가상화폐 출금이 막혔어요. 운영사 책임을 물을 수 있나요?',
    ctaKeyword: '거래소 인출 거부 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '거래소 가상화폐 인출 거부 — 5단계 운영사 책임 | 로앤가이드',
      description:
        '국내·해외 가상화폐 거래소가 출금을 막거나 잠적했다면 사기·횡령·금감원 분쟁 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"잘 모르는 거래소에서 코인 매수 후 평가액 1억까지 올라 출금 시도. \'세금 30% 선납\' \'본인인증 추가\' 요구 후 출금 차단. 한국어 고객센터도 연결 안 됨." 거래소 인출 거부 사례는 ① 처음부터 \'출금 의사 없는\' 사기 거래소 ② 정상 거래소의 자금세탁방지 일시 동결 ③ 거래소 부도 영역으로 구분. 사기형은 형법 제347조 + 특정금융정보법 위반 영역. 대응 트랙은 ① 거래소 유형 판별 ② 사이버수사대 ③ 금감원 분쟁조정 ④ 인터폴·해외 협조 ⑤ 손해배상 소송 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 거래소 인출 거부 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 판별·신고·조정·협조·소송 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래소 유형 판별</strong> — 사기·동결·부도.</li>\n<li><strong>② 사이버수사대 신고</strong></li>\n<li><strong>③ 금감원 분쟁조정 (1332)</strong></li>\n<li><strong>④ 인터폴·해외 거래소 협조</strong></li>\n<li><strong>⑤ 손해배상 소송</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \"세금 선납\" \"본인인증 추가비용\" 요구는 출금 핑계 사기 정형 패턴. 처음부터 사기 거래소인지 식별이 1단계.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 판별·신고·환급 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래소 정상 여부 확인 (즉시)</strong> — VASP 신고·금감원 미등록.</li>\n<li><strong>2단계 — 사이버수사대·금감원 신고</strong></li>\n<li><strong>3단계 — 거래소 계좌 추적·지급정지</strong></li>\n<li><strong>4단계 — 인터폴·해외 협조 (해당 시)</strong></li>\n<li><strong>5단계 — 손해배상·환급 (시효 10년)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">거래소 인출 거부 대응을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·송금·운영사 갈래입니다.</strong></p>\n<ul>\n<li><strong>거래소 가입·KYC 자료</strong></li>\n<li><strong>입금·출금 시도 내역</strong></li>\n<li><strong>송금영수증·은행 거래내역</strong></li>\n<li><strong>거래소 메시지·이메일·고객센터 답변</strong></li>\n<li><strong>거래소 약관·운영사 정보</strong></li>\n<li><strong>본인 신분증</strong></li>\n<li><strong>VASP 신고 여부 확인 자료</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>VASP 미등록 거래소</strong> — 특정금융정보법 위반·접근성 차단 대상.</li>\n<li><strong>출금 핑계 사기 정형</strong> — 세금 선납·인증비.</li>\n<li><strong>해외 운영사</strong> — 인터폴·해당국 협조 필요.</li>\n<li><strong>피해자 결집</strong> — 카페·디엠.</li>\n<li><strong>잔액 vs 인출 가능액</strong> — 평가액 = 실현액 아님 주의.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>금융감독원 1332</strong></li>\n<li><strong>경찰청 사이버수사대 ECRM</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 미등록 거래소 사기',
        summary:
          '대법원 2025도15768 영역 등에서 법원은 VASP 신고 없이 운영되는 가상화폐 거래소가 처음부터 출금 의사 없이 이용자 자금을 편취한 경우 사기 + 특정금융정보법 위반 등으로 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: 'VASP 미등록 + 출금 핑계 = 사기 정형 패턴. 초기 신고·결집이 회수의 분기점.',
      },
    ],
    faq: [
      {
        question: 'VASP 신고 여부 어디서 확인하나요?',
        answer:
          '<strong>금융정보분석원(FIU) 홈페이지·금감원에서 확인 가능합니다.</strong>',
      },
      {
        question: '해외 거래소면 회수 불가능한가요?',
        answer:
          '<strong>현실적으로 어렵지만 인터폴·해당국 협조로 일부 사례 회수.</strong>',
      },
      {
        question: '\"세금 선납\" 요구받았어요',
        answer:
          '<strong>정상 거래소는 선납 요구하지 않습니다.</strong> 사기 정형 패턴.',
      },
      {
        question: '평가액 1억이면 1억 받을 수 있나요?',
        answer:
          '<strong>평가액 = 실현액 아닙니다.</strong> 매도 가능액 + 운영사 자산 한도.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '가상화폐 사기', href: '/guide/fraud/fraud-cryptocurrency-overview' },
      { label: 'VASP 신고 확인', href: '/guide/fraud/fraud-vasp-registration-check' },
      { label: '국제 사기 인터폴', href: '/guide/fraud/fraud-international-interpol' },
      { label: '금감원 분쟁조정', href: '/guide/fraud/fraud-fss-dispute-mediation' },
      { label: '계좌 지급정지', href: '/guide/fraud/fraud-account-payment-stop' },
    ],
  },
];
