import { SpokePage } from '../spoke-pages';

// batch68 defame-jeonse-stalking — 7개 (2026-05-18)
//
// 고유 존재 이유:
// 1. defamation-delivery-app-low-star-revenge-review-accused — 배달앱 저별점 보복리뷰로 명예훼손 고소당한 자영업자측 방어 트랙 (사실적시 + 의견 + 공익성 결합).
// 2. defamation-mom-cafe-academy-warning-info-share-accused — 맘카페 학원 부정후기를 "정보 공유 목적"으로 올렸다가 학원 측이 명예훼손 고소한 사례 (공익성 입증 + 310조 트랙).
// 3. defamation-livestream-chat-screen-capture-secondary-spread-victim — 라이브 방송 중 시청자 모욕 채팅을 캡처해 SNS·커뮤니티에 2차 유포한 사례 (방송 1차 + 유포자 2차 결합 책임).
// 4. jeonse-underwater-kkangtong-pre-contract-risk-check — 깡통전세 사전 리스크 체크 (계약 전 등기부·시세·근저당·국세체납 5가지 점검 트랙).
// 5. jeonse-hug-guarantee-denial-rejection-response — HUG 보증보험 가입 거부·반려된 임차인의 대응 (이의신청 + 우회 보증 + 계약 해지 트랙).
// 6. stalking-ex-spouse-visitation-handover-pretext-track — 이혼 후 자녀 면접교섭·인계 시간 빙자 옛 배우자 스토킹 (가사사건 + 스토킹법 결합 트랙).
// 7. stalking-provisional-measure-violation-recidivism-aggravation — 잠정조치 위반 후 재범시 가중처벌·구속영장 트랙 (잠정조치 1·2·3호 위반 + 재범 흐름).

export const spokesBatch68DefameJeonseStalking: SpokePage[] = [
  // ─── 1. defamation-delivery-app-low-star-revenge-review-accused-track ───
  {
    domain: 'defamation',
    slug: 'defamation-delivery-app-low-star-revenge-review-accused-track',
    keyword: '배달앱 저별점 보복리뷰 명예훼손',
    questionKeyword: '배달이 1시간 늦고 음식이 식어서 별점 1점 + "배달이 너무 늦고 음식이 차가웠다"고 리뷰 남겼는데 사장님이 명예훼손으로 고소했어요.',
    ctaKeyword: '배달앱 보복리뷰 명예훼손 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '배달앱 저별점 리뷰 명예훼손 — 5단계 사실적시·공익성 다툼 | 로앤가이드',
      description:
        '배달앱에 저별점·부정후기를 남겼다가 명예훼손 고소를 받았다면 사실적시·공익성·310조 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배달앱으로 시킨 음식이 예정 시간보다 1시간 늦게 도착했고 국물이 식어서 별점 1점과 함께 \"배달이 너무 늦고 음식이 차갑게 왔다, 다음에는 다른 가게 이용하세요\"라고 리뷰를 남겼어요. 며칠 뒤 사장님이 \"허위·악의적 리뷰로 영업 손해를 입었다\"며 정보통신망법상 명예훼손으로 고소했다는 통지를 받았습니다. 본인은 실제 겪은 일을 적었을 뿐인데 처벌이 막막한 영역입니다.\" 배달앱 리뷰 명예훼손은 ① 정보통신망법 70조 1·2항(사실/허위 적시) ② 사실적시도 비방 목적 + 공익성 부재 시 처벌 영역 ③ 형법 310조 위법성조각(진실 + 공공의 이익) ④ 별점 자체는 "의견 표명"으로 보호 영역 넓음 ⑤ 반의사불벌 5가지 트랙이 결합되는 영역. 혐의를 받고 있다면 "다른 소비자에게 정보 제공" 공익성 입증이 면책 트랙. 대응은 ① 리뷰 보존 ② 진실성 자료 ③ 공익성 입증 ④ 합의 ⑤ 방어 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 배달앱 리뷰 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 리뷰·진실·공익·합의·방어 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 리뷰 내용 분석</strong> — 사실 적시 vs 의견·평가.</li>\n<li><strong>② 진실성 입증</strong> — 주문 내역·배달 시간·음식 사진.</li>\n<li><strong>③ 공익성 입증</strong> — 다른 소비자 정보 제공 측면.</li>\n<li><strong>④ 합의 검토</strong> — 일부 표현 수정·삭제.</li>\n<li><strong>⑤ 형법 310조 위법성조각 변론</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사실과 다르게 신고되었다면 진실한 사실 + 공공의 이익 변론. 배달 시간·음식 사진이 진실성 입증의 핵심. "별점 1점" 자체는 의견 표명으로 보호 영역. 표현이 "사기" "위생불량" 단정형이면 보호 약화.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·상담·방어 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 리뷰·주문·배달 자료 보존 (즉시)</strong> — 캡처·주문번호·배달 알림.</li>\n<li><strong>2단계 — 변호인 상담 (1주 내)</strong> — 표현·공익성 평가.</li>\n<li><strong>3단계 — 유사 리뷰·다른 소비자 자료 정리</strong></li>\n<li><strong>4단계 — 합의·일부 수정 검토</strong></li>\n<li><strong>5단계 — 경찰·검찰 조사 대응·민사 방어</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">배달앱 리뷰 명예훼손 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 리뷰·주문·진실 갈래입니다.</strong></p>\n<ul>\n<li><strong>리뷰 원본·URL·작성일시 캡처</strong></li>\n<li><strong>주문 내역·결제 영수증·배달 시간 알림</strong></li>\n<li><strong>음식 상태·온도·내용물 사진</strong></li>\n<li><strong>사장님과의 카톡·문자·통화 기록</strong></li>\n<li><strong>유사 부정 리뷰·다른 소비자 후기 자료</strong></li>\n<li><strong>고소장·경찰 통지서</strong></li>\n<li><strong>변호인 의견서·면담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 배달앱 리뷰는 다수 소비자가 보는 영역이라 정통망법 70조 \"공공연성\" 인정. 단, 다른 소비자 정보 제공 의도면 공익성 강화. \"배달이 늦었다\" 같은 객관적 사실은 보호, \"사기꾼이다\" 같은 단정형은 보호 약화.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>비방 목적</strong> — 보복성 vs 정보 공유 측면.</li>\n<li><strong>공익성</strong> — 다른 소비자 정보 제공 측면.</li>\n<li><strong>진실성</strong> — 주문·배달·사진 자료.</li>\n<li><strong>사실 vs 의견</strong> — 별점·"맛없다"는 의견.</li>\n<li><strong>영업방해 결합</strong> — 사장이 별도 청구 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실적시와 공공의 이익',
        summary:
          '대법원 2024도14555 영역에서 법원은 형법 제310조의 위법성조각사유 요건 중 \'진실한 사실\' 및 \'오로지 공공의 이익에 관한 때\'의 의미를 다루며, 적시된 사실이 \'공공의 이익\'에 관한 것이라면 일부 사익적 동기가 포함되어 있더라도 그 주된 동기와 목적이 공공의 이익을 위한 것이라면 위법성이 조각될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '실제 겪은 사실 + 다른 소비자 정보 제공 공익성은 위법성조각 트랙. 객관 사실 위주면 보호 강화.',
      },
    ],
    faq: [
      {
        question: '별점 1점만 줘도 명예훼손인가요?',
        answer:
          '<strong>별점은 의견 표명으로 평가되어 명예훼손이 잘 안 되는 영역입니다.</strong>',
      },
      {
        question: '실제 겪은 일만 적었는데 처벌받나요?',
        answer:
          '<strong>사실적시도 비방 목적 + 공익성 부재 시 평가 영역입니다.</strong>',
      },
      {
        question: '"음식이 차가웠다"는 사실인데 문제 되나요?',
        answer:
          '<strong>객관적 사실은 보호 영역이며 사진·온도 자료가 진실성 입증의 핵심입니다.</strong>',
      },
      {
        question: '합의가 가능한가요?',
        answer:
          '<strong>사실적시 명예훼손은 반의사불벌이라 합의 시 처벌 면제 가능합니다.</strong>',
      },
      {
        question: '리뷰를 삭제하면 책임 면해지나요?',
        answer:
          '<strong>이미 게시한 책임은 잔존하지만 합의·반성 사정으로 작용할 수 있는 영역입니다.</strong>',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 대응', href: '/guide/defamation/defamation-accused-response' },
      { label: '사실적시 vs 공익성', href: '/guide/defamation/defamation-public-interest-defense' },
      { label: '사실 vs 의견', href: '/guide/defamation/defamation-opinion-vs-fact' },
      { label: '반의사불벌', href: '/guide/defamation/defamation-no-prosecution-against-victim-will' },
      { label: '온라인 리뷰 진실 방어', href: '/guide/defamation/defamation-online-review-truth-defense' },
    ],
  },

  // ─── 2. defamation-mom-cafe-academy-warning-info-share-accused-track ───
  {
    domain: 'defamation',
    slug: 'defamation-mom-cafe-academy-warning-info-share-accused-track',
    keyword: '맘카페 학원 부정후기 명예훼손',
    questionKeyword: '맘카페에 다닌 영어학원 결제·환불 거절 후기를 "다른 학부모들 참고하세요"라며 올렸는데 학원이 명예훼손으로 고소했어요.',
    ctaKeyword: '맘카페 학원 후기 명예훼손 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '맘카페 학원 부정후기 명예훼손 — 5단계 공익성·310조 다툼 | 로앤가이드',
      description:
        '맘카페에 학원 부정후기를 올렸다가 명예훼손 고소를 받았다면 정보 공유·공익성 + 형법 310조 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"동네 맘카페에 다니던 영어학원의 결제·환불 거절 경험을 \"다른 학부모님들도 참고하세요\"라며 정리해 올렸어요. 며칠 뒤 학원 원장이 \"허위·과장으로 학원 평판을 훼손했다\"며 정보통신망법상 명예훼손으로 고소했다는 통지를 받았습니다. 본인은 실제 결제·환불 거절을 겪은 학부모 입장에서 \"같은 피해 막자\"는 의도였는데 어떻게 방어해야 할지 막막한 영역입니다.\" 맘카페 학원 후기 명예훼손은 ① 정통망법 70조 1·2항 ② 사실적시도 비방 목적 + 공익성 부재 시 처벌 ③ 형법 310조 위법성조각(진실 + 공공의 이익) ④ 맘카페 = "학부모 정보 공동체" 공익성 인정 가능 ⑤ 반의사불벌 5가지 트랙이 결합되는 영역. 혐의를 받고 있다면 "다른 학부모 정보 제공" 공익성 입증이 면책 트랙. 대응은 ① 후기 보존 ② 결제 자료 ③ 공익성 입증 ④ 합의 ⑤ 방어 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 맘카페 학원 후기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 후기·진실·공익·합의·방어 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 후기 내용 분석</strong> — 사실 적시 vs 단정형 평가.</li>\n<li><strong>② 진실성 입증</strong> — 결제 영수증·환불 거절 카톡.</li>\n<li><strong>③ 공익성 입증</strong> — 맘카페 학부모 정보 제공.</li>\n<li><strong>④ 합의 검토</strong> — 일부 표현 수정·삭제.</li>\n<li><strong>⑤ 형법 310조 위법성조각 변론</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사실과 다르게 신고되었다면 진실한 사실 + 공공의 이익 변론. 결제·환불 자료가 진실성 입증의 핵심. \"환불 거절 사실\" 같은 객관적 사실은 보호, \"사기 학원이다\" 같은 단정형 평가는 보호 약화.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·상담·방어 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 후기·결제·환불 자료 보존 (즉시)</strong></li>\n<li><strong>2단계 — 변호인 상담 (1주 내)</strong> — 표현·공익성 평가.</li>\n<li><strong>3단계 — 맘카페 회원 진술·유사 후기 자료 정리</strong></li>\n<li><strong>4단계 — 합의·일부 수정 검토</strong></li>\n<li><strong>5단계 — 경찰·검찰 조사 대응·민사 방어</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">맘카페 학원 후기 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 후기·결제·공익 갈래입니다.</strong></p>\n<ul>\n<li><strong>후기 원본·URL·작성일시 캡처</strong></li>\n<li><strong>학원 결제 영수증·계약서·환불 거절 자료</strong></li>\n<li><strong>학원과의 카톡·문자·통화 녹음</strong></li>\n<li><strong>다른 학부모 유사 후기·진술서</strong></li>\n<li><strong>고소장·경찰 통지서</strong></li>\n<li><strong>본인 맘카페 활동 이력·학부모 자료</strong></li>\n<li><strong>변호인 의견서·면담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 맘카페는 회원만 보지만 정통망법 70조 \"공공연성\" 인정 영역. 단, 다른 학부모에게 정보 제공 의도면 공익성 강화. \"환불 거절 사실\"은 객관 사실로 보호, \"학부모 등쳐먹는 학원\" 단정형은 보호 약화.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>비방 목적</strong> — 보복성 vs 정보 공유 측면.</li>\n<li><strong>공익성</strong> — 맘카페 학부모 정보 공동체.</li>\n<li><strong>진실성</strong> — 결제·환불 자료와 일치.</li>\n<li><strong>사실 vs 의견</strong> — "환불 거절"은 사실, "사기"는 평가.</li>\n<li><strong>공공연성</strong> — 다수 학부모 회원에게 전파 가능성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>교육청 학원 분쟁 상담</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 의견 표명과 명예훼손 성립',
        summary:
          '대법원 2022다242649(2025.06.26 선고) 영역에서 법원은 민법상 불법행위가 되는 \'명예훼손\'의 의미를 다루며, 순수한 의견 표명 자체만으로는 명예훼손이 성립하지 않고 어떠한 표현이 사실의 적시인지 의견 표명인지를 판단할 때는 그 표현의 객관적 내용·표현 방식·문맥과 사회적 흐름 등을 종합 고려해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '"환불 거절 사실"은 사실, "참고하세요"는 의견. 맥락상 공익성 결합 시 위법성조각 트랙.',
      },
    ],
    faq: [
      {
        question: '맘카페 회원만 봐도 명예훼손인가요?',
        answer:
          '<strong>회원 다수 전파 가능성이 있으면 공공연성 인정 영역입니다.</strong>',
      },
      {
        question: '실제 환불 거절 사실인데 처벌받나요?',
        answer:
          '<strong>사실적시도 비방 목적 + 공익성 부재 시 평가, 공익성 입증 시 면책 영역입니다.</strong>',
      },
      {
        question: '"다른 학부모 참고하세요"라고 명시했어요',
        answer:
          '<strong>정보 공유 의도가 글에 명시되어 있으면 공익성 입증에 유리합니다.</strong>',
      },
      {
        question: '학원이 손해배상도 청구하나요?',
        answer:
          '<strong>형사 + 민사 동시 진행 가능하며 형사 결과가 민사에 영향 줄 수 있습니다.</strong>',
      },
      {
        question: '후기를 수정·삭제하면 책임 면해지나요?',
        answer:
          '<strong>이미 게시한 책임은 잔존하지만 합의·반성 사정으로 작용 가능합니다.</strong>',
      },
    ],
    cta: { text: '삭제·합의·방어 포인트, AI로 먼저 점검하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 대응', href: '/guide/defamation/defamation-accused-response' },
      { label: '사실적시 vs 공익성', href: '/guide/defamation/defamation-public-interest-defense' },
      { label: '사실 vs 의견', href: '/guide/defamation/defamation-opinion-vs-fact' },
      { label: '반의사불벌', href: '/guide/defamation/defamation-no-prosecution-against-victim-will' },
      { label: '학부모 단톡 명예훼손', href: '/guide/defamation/defamation-school-parent-chat-defamation' },
    ],
  },

  // ─── 3. defamation-livestream-chat-screen-capture-secondary-spread-victim-track ───
  {
    domain: 'defamation',
    slug: 'defamation-livestream-chat-screen-capture-secondary-spread-victim-track',
    keyword: '라이브 방송 채팅 캡처 SNS 2차 유포',
    questionKeyword: '제 라이브 방송 중 시청자가 인신공격 채팅을 했고, 다른 사람이 그 채팅 화면을 캡처해 SNS·커뮤니티에 2차 유포했어요.',
    ctaKeyword: '라이브 채팅 캡처 2차 유포 명예훼손 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '라이브 채팅 캡처 SNS 2차 유포 — 5단계 작성자·유포자 결합 책임 | 로앤가이드',
      description:
        '라이브 방송 채팅 인신공격을 다른 사용자가 캡처해 SNS·커뮤니티에 2차 유포했다면 작성자·유포자 결합 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 게임 라이브 방송을 운영하는 스트리머예요. 한 시청자가 방송 중 채팅창에 본인 외모·신상에 대한 인신공격성 채팅을 반복했고, 다른 시청자가 그 채팅 화면을 캡처해 X(트위터)·디시인사이드·커뮤니티 게시판에 \"○○ 스트리머가 이런 댓글 받음\"이라며 2차 유포했어요. 며칠 사이 수만 조회가 발생하고 본인 SNS에 욕설 DM이 쏟아지는 영역입니다.\" 라이브 채팅 캡처 2차 유포는 ① 정통망법 70조(원작성자 + 유포자 결합 책임) ② 모욕죄 311조 결합 ③ 캡처·재유포자도 독립적 명예훼손 책임 ④ 플랫폼 IP·계정 추적 ⑤ 형사 + 민사 5가지 트랙이 결합되는 영역. 대응은 ① 캡처·로그 ② 플랫폼 신고 ③ IP 추적 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 라이브 채팅 캡처 2차 유포 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 캡처·플랫폼·추적·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 원본 채팅·캡처·유포 자료 보존</strong></li>\n<li><strong>② 방송 플랫폼·SNS 신고 (계정 정지)</strong></li>\n<li><strong>③ 사이버수사·IP 추적 (원작성자 + 유포자)</strong></li>\n<li><strong>④ 형사 명예훼손·모욕 고소</strong></li>\n<li><strong>⑤ 민사 손해배상·삭제 가처분</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 원작성자 + 캡처·유포자 모두 독립적 명예훼손 책임 부담. 유포자는 "그냥 옮긴 것"이라 해도 별개 평가. 라이브 채팅도 다수에게 노출되면 공공연성 인정 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·플랫폼·추적 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 채팅 원본·캡처·유포 게시물 보존 (즉시)</strong></li>\n<li><strong>2단계 — 플랫폼 신고·삭제 요청 (3~7일 내)</strong></li>\n<li><strong>3단계 — 사이버 수사·IP 추적·플랫폼 협조</strong></li>\n<li><strong>4단계 — 형사 명예훼손·모욕 고소</strong></li>\n<li><strong>5단계 — 민사 손해배상 + 삭제 가처분</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">라이브 채팅 2차 유포 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 채팅·캡처·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>원본 라이브 방송 다시보기·채팅 로그</strong></li>\n<li><strong>캡처·유포된 SNS·커뮤니티 게시물 URL·시점</strong></li>\n<li><strong>유포 게시물 조회·확산 자료 (조회수·공유·인용)</strong></li>\n<li><strong>플랫폼 신고 접수증·답변</strong></li>\n<li><strong>본인 SNS·DM 욕설·2차 피해 자료</strong></li>\n<li><strong>본인 신상·평판·수입 피해 자료</strong></li>\n<li><strong>변호인 의견서·면담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 라이브 채팅은 시간 지나면 사라질 수 있어 즉시 다시보기·녹화 보존 핵심. 유포 게시물도 빠르게 삭제·수정될 수 있어 URL·캡처·시점 모두 보존. 플랫폼 협조로 IP·계정 추적 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>원작성자 vs 유포자</strong> — 독립 책임 영역.</li>\n<li><strong>공공연성</strong> — 라이브 시청자 + 유포 확산.</li>\n<li><strong>특정성</strong> — 스트리머 이름·채널 결합.</li>\n<li><strong>유포자 면책 주장</strong> — "그냥 옮긴 것" 인정 안 됨.</li>\n<li><strong>플랫폼 책임</strong> — 신고 응대·삭제 의무.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>경찰청 사이버범죄 신고 ecrm.police.go.kr</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 모욕죄 보호법익',
        summary:
          '대법원 2022도15971 영역에서 법원은 모욕죄의 보호법익이 외부적 명예라는 점과 \'모욕\'의 의미를 다루며, 어떠한 표현이 모욕죄의 모욕에 해당하는지를 판단할 때는 상대방을 불쾌하게 할 수 있다는 것만으로는 부족하고 사람의 사회적 평가를 저하시킬 만한 추상적 판단·경멸적 감정 표시가 있어야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '외모·신상 인신공격 채팅은 모욕죄 평가 영역. 캡처·유포자도 독립 책임 트랙.',
      },
    ],
    faq: [
      {
        question: '원작성자만 책임지면 되나요?',
        answer:
          '<strong>아닙니다. 캡처·유포자도 독립적 명예훼손 책임 부담 영역입니다.</strong>',
      },
      {
        question: '라이브 채팅이 사라졌어요',
        answer:
          '<strong>플랫폼 사실조회·다시보기·시청자 캡처로 복원 가능한 영역입니다.</strong>',
      },
      {
        question: '유포자가 익명이면 어떻게 찾나요?',
        answer:
          '<strong>사이버수사대 IP 추적·플랫폼 협조로 신원 확인 가능합니다.</strong>',
      },
      {
        question: '플랫폼이 응대 안 하면요?',
        answer:
          '<strong>방송통신심의위 신고로 차단·삭제 명령 가능한 영역입니다.</strong>',
      },
      {
        question: '민사 손해배상은 얼마 수준인가요?',
        answer:
          '<strong>피해 정도·확산 범위·수입 영향에 따라 사례별 차이가 큰 영역입니다.</strong> 변호인 상담 권장.',
      },
    ],
    cta: { text: '명예훼손 피해 대응 순서, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 피해 대응', href: '/guide/defamation/defamation-victim-response' },
      { label: '온라인 명예훼손', href: '/guide/defamation/defamation-online-procedure' },
      { label: '라이브 방송 명예훼손', href: '/guide/defamation/defamation-livestream-realtime-defamation-victim' },
      { label: '삭제 가처분', href: '/guide/defamation/defamation-takedown-injunction' },
      { label: '손해배상 청구', href: '/guide/defamation/defamation-damage-claim' },
    ],
  },

  // ─── 4. jeonse-underwater-kkangtong-pre-contract-risk-check-track ───
  {
    domain: 'jeonse',
    slug: 'jeonse-underwater-kkangtong-pre-contract-risk-check-track',
    keyword: '깡통전세 사전 리스크 체크',
    questionKeyword: '전세 계약 전에 깡통전세 위험을 어떻게 점검하나요? 등기부·시세·근저당·국세체납 무엇을 봐야 하나요?',
    ctaKeyword: '깡통전세 사전 체크 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '깡통전세 사전 체크 — 5단계 등기·시세·근저당 다툼 | 로앤가이드',
      description:
        '깡통전세 계약 전 등기부·시세·근저당·국세체납·HUG 보증가입가능 5가지 점검 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"신혼집을 알아보다 시세보다 살짝 싼 전세 매물을 발견했어요. 중개사는 \"문제없다\"고 하지만 최근 뉴스에서 깡통전세 사기 사례를 봐서 불안한 영역입니다. 등기부등본 어디를 봐야 하는지, 근저당이 얼마면 위험한지, 국세체납이 있다면 본인 보증금이 안전한지, HUG 보증보험에 가입할 수 있는 물건인지 확인하는 방법이 막막한 영역입니다.\" 깡통전세 사전 체크는 ① 등기부등본(소유자·근저당·가압류) ② 시세 대비 보증금 비율(80% 이상 위험) ③ 근저당 + 보증금 합계가 시세 초과 여부 ④ 임대인 국세체납·세금 우선변제 위험 ⑤ HUG 보증보험 가입 가능 여부 5가지 트랙이 결합되는 영역. 계약 전 점검이 사후 회수보다 훨씬 효과적. 대응은 ① 등기부 ② 시세 ③ 근저당 ④ 국세 ⑤ HUG 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 깡통전세 사전 체크 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 등기부·시세·근저당·국세·HUG 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 등기부등본 발급·소유자·근저당 확인</strong></li>\n<li><strong>② 국토부 실거래가·시세 대비 보증금 비율</strong></li>\n<li><strong>③ 근저당 + 보증금 합계가 시세 80% 이내인가</strong></li>\n<li><strong>④ 임대인 국세체납 열람 (전세금 1천만원 초과)</strong></li>\n<li><strong>⑤ HUG 보증보험 가입 가능 여부 사전 조회</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 시세 대비 보증금 비율 80% 초과 + 선순위 근저당이면 경매 시 우선변제권 행사해도 보증금 일부 회수 어려운 영역. HUG 가입 가능 물건이면 1차 안전장치. 국세체납은 보증금보다 우선하므로 사전 열람 필수.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 등기부·시세·HUG 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 등기부등본 발급 (인터넷등기소·1,000원, 즉시)</strong></li>\n<li><strong>2단계 — 국토부 실거래가·시세 비교 (rt.molit.go.kr)</strong></li>\n<li><strong>3단계 — 근저당 + 보증금 = 시세 80% 이내 확인</strong></li>\n<li><strong>4단계 — 임대인 국세체납 열람 신청 (세무서, 계약 전)</strong></li>\n<li><strong>5단계 — HUG 보증보험 가입 가능 여부 사전 조회</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">깡통전세 사전 체크 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 등기·시세·HUG 갈래입니다.</strong></p>\n<ul>\n<li><strong>등기부등본 (소유자·근저당·가압류·전세권)</strong></li>\n<li><strong>국토부 실거래가 조회 결과 (rt.molit.go.kr)</strong></li>\n<li><strong>네이버·KB부동산 시세 조회 결과</strong></li>\n<li><strong>임대인 국세체납 사실증명 (세무서 발급)</strong></li>\n<li><strong>중개대상물 확인설명서 (전세금·근저당·시설)</strong></li>\n<li><strong>HUG 보증보험 사전 가입가능 확인서</strong></li>\n<li><strong>중개사 공제증서·자격증 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임대인 국세체납 열람은 2023년 4월부터 임차인이 임대인 동의 없이도 신청 가능 (전세금 1천만원 초과 시). 중개대상물 확인설명서는 중개사가 권리관계 자료를 성실·정확하게 제공할 의무가 있어 누락 시 책임 평가 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>시세 산정 기준</strong> — 공시가·실거래가·KB시세 차이.</li>\n<li><strong>근저당 후순위 위험</strong> — 보증금 시점 vs 근저당 시점.</li>\n<li><strong>국세체납 우선변제</strong> — 보증금 회수 어려움.</li>\n<li><strong>HUG 거부</strong> — 단독·다가구·근저당 과다.</li>\n<li><strong>중개사 설명 의무</strong> — 누락 시 책임.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>주택임대차분쟁조정위원회 1670-7777</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다가구주택 중개사 설명 의무',
        summary:
          '대법원 2024다283668 영역에서 법원은 다가구주택 일부에 대한 임대차계약을 중개하는 개업공인중개사가 임차의뢰인에게 부담하는 의무의 내용을 다루며, 해당 다가구주택에 선순위 임대차보증금채권 등 권리관계 자료를 성실·정확하게 제공할 의무가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '중개사 설명 의무 누락은 깡통전세 피해 보강 사유. 등기부·국세 열람은 임차인 직접 확인 트랙.',
      },
    ],
    faq: [
      {
        question: '시세 대비 보증금 비율 몇 %부터 위험한가요?',
        answer:
          '<strong>80% 초과부터 경매 시 회수 어려운 위험 영역으로 평가됩니다.</strong>',
      },
      {
        question: '근저당이 있어도 계약해도 되나요?',
        answer:
          '<strong>근저당 + 보증금 합계가 시세 80% 이내면 검토 가능한 영역입니다.</strong>',
      },
      {
        question: '임대인 국세체납을 어떻게 알아보나요?',
        answer:
          '<strong>2023년부터 임차인이 세무서에서 동의 없이 열람 가능합니다 (전세금 1천만원 초과).</strong>',
      },
      {
        question: 'HUG 가입 가능 여부는 어디서 조회하나요?',
        answer:
          '<strong>HUG 홈페이지·1566-9009로 사전 조회 가능한 영역입니다.</strong>',
      },
      {
        question: '중개사가 \"문제없다\"고 했는데 못 믿겠어요',
        answer:
          '<strong>중개대상물 확인설명서를 직접 보고 의문점은 서면 답변 요구가 안전합니다.</strong>',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '보증금 반환 절차', href: '/guide/jeonse/jeonse-deposit-return-procedure' },
      { label: '깡통전세 경고', href: '/guide/jeonse/jeonse-empty-house-warning-pre-contract-check' },
      { label: '보증보험 가입', href: '/guide/jeonse/jeonse-deposit-guarantee-insurance-guide' },
      { label: '다가구 우선변제', href: '/guide/jeonse/jeonse-multifamily-priority-payment-no-hug' },
      { label: '소액임차인 보호', href: '/guide/jeonse/jeonse-small-tenant-priority' },
    ],
  },

  // ─── 5. jeonse-hug-guarantee-denial-rejection-response-track ───
  {
    domain: 'jeonse',
    slug: 'jeonse-hug-guarantee-denial-rejection-response-track',
    keyword: 'HUG 보증 가입 거부 대응',
    questionKeyword: '계약 후 HUG 보증보험 가입을 신청했는데 거부됐어요. 어떻게 대응해야 하나요? 계약 해지 가능한가요?',
    ctaKeyword: 'HUG 보증 거부 대응 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'HUG 보증 가입 거부 대응 — 5단계 이의신청·계약해지 다툼 | 로앤가이드',
      description:
        'HUG 보증보험 가입이 거부·반려됐다면 이의신청·우회 보증·계약 해지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세 2억 5천 계약을 하고 입주 전에 HUG 보증보험을 신청했는데 \"공시가 대비 부채비율 초과\"라는 이유로 거부 통지를 받았어요. 본인은 보증보험 가입을 전제로 계약했는데 임대인은 \"그건 본인 책임\"이라며 계약 유지를 요구합니다. 이미 계약금 2천만원을 냈고 잔금 일정도 잡혀있어 막막한 영역입니다.\" HUG 거부 대응은 ① 거부 사유 확인(공시가·부채비율·신탁·근저당 과다) ② 이의신청·재심사 신청 ③ SGI서울보증·민간보증 우회 가입 ④ 임대인 귀책 사유면 계약 해지 + 계약금 반환 ⑤ 임차권등기 + 우선변제권 5가지 트랙이 결합되는 영역. \"보증보험 가입 가능\"이 계약 조건이었다면 임대인 귀책 평가 가능. 대응은 ① 거부 사유 ② 이의 ③ 우회 ④ 해지 ⑤ 등기 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. HUG 거부 대응 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사유·이의·우회·해지·등기 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거부 사유 확인</strong> — 공시가·부채·신탁·근저당.</li>\n<li><strong>② 이의신청·재심사 (HUG)</strong></li>\n<li><strong>③ SGI서울보증·민간 보증 우회 검토</strong></li>\n<li><strong>④ 계약 해지·계약금 반환 (임대인 귀책 시)</strong></li>\n<li><strong>⑤ 임차권등기 + 우선변제권 확보 (계약 유지 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 계약서에 \"보증보험 가입 가능\"이 조건으로 명시되어 있거나 임대인이 그렇게 안내한 영역이면 임대인 귀책 사유로 계약 해지 + 계약금 반환 청구 트랙. 거부 사유가 임대인 측 부채비율·신탁이면 더욱 명확.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 거부·이의·해지 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — HUG 거부 사유 공식 통지 확보 (즉시)</strong></li>\n<li><strong>2단계 — 이의신청·재심사 (7~14일 내)</strong></li>\n<li><strong>3단계 — SGI서울보증·민간 보증 우회 검토</strong></li>\n<li><strong>4단계 — 계약 해지·내용증명 (임대인 귀책 시)</strong></li>\n<li><strong>5단계 — 임차권등기명령 (계약 유지 시 우선변제권)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">HUG 거부 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 거부·계약·이의 갈래입니다.</strong></p>\n<ul>\n<li><strong>HUG 거부 통지서 (사유·근거)</strong></li>\n<li><strong>임대차계약서·계약금 영수증</strong></li>\n<li><strong>등기부등본·공시가·시세 자료</strong></li>\n<li><strong>임대인 안내·메시지 (보증보험 언급)</strong></li>\n<li><strong>중개대상물 확인설명서</strong></li>\n<li><strong>SGI서울보증·민간 보증 사전 조회 결과</strong></li>\n<li><strong>이의신청서·재심사 요청서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 계약서·중개대상물 확인설명서에 \"보증보험 가입 가능\"이 기재된 영역이면 임대인·중개사 책임 강화. HUG 거부 사유가 임대인 부채비율·신탁 등 임대인 측 사유면 임대인 귀책 명확. SGI서울보증이 HUG보다 가입조건이 유리한 경우도 있음.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>거부 사유 귀책</strong> — 임대인 측 vs 임차인 측.</li>\n<li><strong>계약서 보증조건 기재</strong> — 임대인 책임 여부.</li>\n<li><strong>이의·재심사 가능성</strong> — 일부 사례 인정.</li>\n<li><strong>우회 보증 가용성</strong> — SGI·민간.</li>\n<li><strong>계약금 반환</strong> — 임대인 귀책 시 전액.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>SGI서울보증 1670-7000</strong></li>\n<li><strong>주택임대차분쟁조정위원회 1670-7777</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차인 점유 상실과 대항력',
        summary:
          '대법원 2024다326398 영역에서 법원은 주택 임차인이 전입신고를 마치고 주택을 인도받아 임차권의 대항력을 취득한 후 주택의 점유를 상실한 경우 대항력이 소멸한다는 점과 임차권등기로 회복 가능한 트랙을 다루며, 임차인이 대항력을 회복하려면 임차권등기명령에 의해 등기를 마쳐야 한다고 본 사례 흐름이 있습니다.',
        takeaway: 'HUG 거부로 계약 유지 시 임차권등기로 대항력·우선변제권 확보 트랙. 이사 전 등기 완료 권장.',
      },
    ],
    faq: [
      {
        question: 'HUG 거부 사유가 임대인 측이면 계약 해지 가능한가요?',
        answer:
          '<strong>계약서·안내에 보증조건 명시된 영역이면 임대인 귀책으로 해지·계약금 반환 가능합니다.</strong>',
      },
      {
        question: '이의신청은 어떻게 하나요?',
        answer:
          '<strong>HUG 거부 통지 후 7~14일 내 이의신청·재심사 요청 가능합니다.</strong>',
      },
      {
        question: 'SGI서울보증은 가입 가능한가요?',
        answer:
          '<strong>가입조건이 HUG와 다르므로 별도 사전 조회 권장 영역입니다.</strong>',
      },
      {
        question: '계약 유지하면 보증금은 어떻게 보호하나요?',
        answer:
          '<strong>임차권등기 + 우선변제권 + 소액임차인 보호 트랙으로 일부 보호 가능합니다.</strong>',
      },
      {
        question: '계약금 반환 청구는 어떻게 하나요?',
        answer:
          '<strong>내용증명으로 임대인 귀책 통지 후 반환 청구·민사소송 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '보증보험 가입', href: '/guide/jeonse/jeonse-deposit-guarantee-insurance-guide' },
      { label: '임차권등기명령', href: '/guide/jeonse/jeonse-tenant-right-registration' },
      { label: '보증금 반환 절차', href: '/guide/jeonse/jeonse-deposit-return-procedure' },
      { label: '주택임대차분쟁조정', href: '/guide/jeonse/jeonse-mediation-procedure' },
      { label: '소액임차인 보호', href: '/guide/jeonse/jeonse-small-tenant-priority' },
    ],
  },

  // ─── 6. stalking-ex-spouse-visitation-handover-pretext-track ───
  {
    domain: 'stalking',
    slug: 'stalking-ex-spouse-visitation-handover-pretext-track',
    keyword: '면접교섭 인계 빙자 스토킹',
    questionKeyword: '이혼 후 자녀 면접교섭·인계 시간을 빙자해 옛 배우자가 본인 집 근처에서 매주 대기·미행해요. 스토킹 신고할 수 있나요?',
    ctaKeyword: '면접교섭 빙자 스토킹 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '면접교섭 빙자 스토킹 — 5단계 가사·스토킹법 결합 다툼 | 로앤가이드',
      description:
        '이혼 후 면접교섭·자녀 인계 시간을 빙자해 옛 배우자가 반복 접근·미행한다면 가사·스토킹법 결합 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3년 전 이혼하고 본인이 7세 자녀 양육권을 가졌어요. 옛 배우자에게 월 2회 면접교섭권이 있는데 인계 시간 외에도 매주 본인 집 근처에서 대기하거나 마트·어린이집까지 따라옵니다. \"아이 보고 싶었다\"는 변명을 반복하고, 거부 의사를 표시해도 \"법으로 인정된 면접교섭권이다\"라며 안 멈춰요. 본인은 불안해서 이사도 고민 중인 영역입니다.\" 면접교섭 빙자 스토킹은 ① 스토킹처벌법(지속·반복 접근·미행) ② 가사사건(면접교섭 권리행사 한계) ③ 잠정조치 100m 접근금지·전기통신 금지 ④ 면접교섭 변경·정지 (가정법원) ⑤ 형사 + 민사 5가지 트랙이 결합되는 영역. 면접교섭권은 정해진 시간·장소 한정. 그 외 접근은 별개 평가. 대응은 ① 증거 ② 잠정조치 ③ 면접교섭 조정 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 면접교섭 빙자 스토킹 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·잠정조치·조정·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 접근·미행 증거 누적</strong> — CCTV·블랙박스·일시.</li>\n<li><strong>② 거부 의사 명시 기록 (카톡·문자)</strong></li>\n<li><strong>③ 경찰·112 신고 + 잠정조치 신청</strong></li>\n<li><strong>④ 가정법원 면접교섭 변경·정지 신청</strong></li>\n<li><strong>⑤ 스토킹처벌법 형사 고소 + 민사 손해배상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 면접교섭권은 정해진 시간·장소·방법 한정. 그 외 접근·미행은 별개 스토킹 평가 영역. 자녀 핑계는 면접교섭 시간 외 접근의 정당화 사유 아님. 가정법원이 자녀 복리상 면접교섭 변경·정지 결정 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·잠정조치·조정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 접근·미행 증거 수집 (CCTV·블랙박스·일시)</strong></li>\n<li><strong>2단계 — 거부 의사 명시 카톡·문자 보존</strong></li>\n<li><strong>3단계 — 경찰·112 신고 + 잠정조치 (100m 접근금지)</strong></li>\n<li><strong>4단계 — 가정법원 면접교섭 변경·정지 청구</strong></li>\n<li><strong>5단계 — 스토킹처벌법 형사 고소 + 민사 손해배상</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 접근금지·처벌 가능성, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">면접교섭 빙자 스토킹 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·가사·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>이혼·면접교섭 판결문·조정조서</strong></li>\n<li><strong>접근·미행 증거 (CCTV·블랙박스·사진·녹음)</strong></li>\n<li><strong>거부 의사 명시 카톡·문자·통화 기록</strong></li>\n<li><strong>자녀 양육권·실거주지 자료</strong></li>\n<li><strong>본인 정신적 피해 진단서·상담 기록</strong></li>\n<li><strong>증인 진술서 (이웃·어린이집 교사)</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 면접교섭 시간 외 접근은 자녀 복리 침해 사유. 가정법원이 면접교섭 변경(중립 장소·제3자 동석) 또는 일시 정지 결정 가능. 자녀가 스토킹 행위를 목격했다면 자녀 정신적 피해도 별도 자료화.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>면접교섭권 한계</strong> — 정해진 시간·장소.</li>\n<li><strong>자녀 핑계 정당화</strong> — 인정 안 됨.</li>\n<li><strong>지속·반복성</strong> — 매주 접근 누적.</li>\n<li><strong>자녀 복리</strong> — 가정법원 변경·정지.</li>\n<li><strong>잠정조치 가능 여부</strong> — 옛 배우자에 대해 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>스토킹 신고 112</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 옛 연인 반복 접근과 스토킹',
        summary:
          '서울중앙지법 2024노711 영역에서 법원은 피고인이 교제하던 피해자와 헤어진 후 피해자에게 스토킹행위·주거침입 등 범행으로 징역형을 복역한 전력이 있고, 헤어진 후에도 피해자 명의 계좌로 소액의 돈을 반복 송금하는 등의 행위가 피해자에게 불안감·공포심을 일으키기에 충분하다며 스토킹범죄로 본 사례 흐름이 있습니다.',
        takeaway: '옛 배우자 반복 접근·연락은 스토킹 평가 영역. 면접교섭 빙자 접근도 동일 트랙.',
      },
    ],
    faq: [
      {
        question: '면접교섭권이 있어도 스토킹인가요?',
        answer:
          '<strong>정해진 시간·장소 외 접근·미행은 별개 스토킹 평가 영역입니다.</strong>',
      },
      {
        question: '면접교섭을 정지·변경할 수 있나요?',
        answer:
          '<strong>가정법원이 자녀 복리상 변경·정지 결정 가능한 영역입니다.</strong>',
      },
      {
        question: '옛 배우자에게 잠정조치 가능한가요?',
        answer:
          '<strong>네, 가족관계라도 잠정조치 가능합니다.</strong>',
      },
      {
        question: '자녀가 스토킹 행위를 보면 어떻게 하나요?',
        answer:
          '<strong>자녀 정신적 피해도 별도 자료화 + 자녀 복리 침해 사유로 활용 가능합니다.</strong>',
      },
      {
        question: '이사하면 면접교섭 어떻게 되나요?',
        answer:
          '<strong>주소 비공개 + 중립 장소 인계로 면접교섭 변경 가능합니다.</strong>',
      },
    ],
    cta: { text: '접근금지·처벌 가능성, AI로 확인하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 신고 절차', href: '/guide/stalking/stalking-complaint-procedure' },
      { label: '접근금지·잠정조치', href: '/guide/stalking/stalking-protection-order' },
      { label: '옛 배우자 양육 다툼', href: '/guide/stalking/stalking-ex-spouse-custody-dispute-pretext' },
      { label: '면접교섭 변경', href: '/guide/divorce/divorce-visitation-modification' },
      { label: '손해배상 청구', href: '/guide/stalking/stalking-damage-claim' },
    ],
  },

  // ─── 7. stalking-provisional-measure-violation-recidivism-aggravation-track ───
  {
    domain: 'stalking',
    slug: 'stalking-provisional-measure-violation-recidivism-aggravation-track',
    keyword: '잠정조치 위반 재범 가중처벌',
    questionKeyword: '가해자가 잠정조치 100m 접근금지를 위반하고 또 연락·접근해요. 구속영장·재범 가중처벌 가능한가요?',
    ctaKeyword: '잠정조치 위반 재범 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '잠정조치 위반 재범 — 5단계 가중처벌·구속영장 다툼 | 로앤가이드',
      description:
        '스토킹 잠정조치 100m 접근금지·전기통신 금지를 위반한 가해자에게 재범 가중·구속영장 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3개월 전 스토킹 피해로 가해자에게 잠정조치 1호(서면 경고)·2호(100m 접근금지)·3호(전기통신 금지)가 발효됐어요. 그런데 어제부터 가해자가 다시 SNS DM·문자를 보내기 시작했고, 어제는 본인 집 근처에서 목격됐다는 이웃 제보까지 받았습니다. 잠정조치 위반이지만 가해자가 \"실수다\"라며 빠져나갈까봐 불안한 영역입니다.\" 잠정조치 위반 재범은 ① 스토킹처벌법 위반(2년 이하 징역 또는 2천만원 이하 벌금) ② 잠정조치 4호(유치장 유치) 추가 결정 ③ 재범 시 구속영장 청구 가능성 ④ 본 스토킹 사건 양형 가중 사유 ⑤ 민사 손해배상 5가지 트랙이 결합되는 영역. 위반 자체가 별도 범죄. 대응은 ① 증거 즉시 보존 ② 신고 ③ 4호 신청 ④ 영장 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 잠정조치 위반 재범 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·4호·영장·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 위반 행위 증거 즉시 보존 (DM·문자·CCTV)</strong></li>\n<li><strong>② 경찰·112 신고 + 위반 사실 통지</strong></li>\n<li><strong>③ 잠정조치 4호(유치장 유치) 신청</strong></li>\n<li><strong>④ 검찰 구속영장 청구 (재범·증거인멸 우려)</strong></li>\n<li><strong>⑤ 본 사건 양형 가중 + 민사 손해배상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 잠정조치 위반은 별도 범죄(2년 이하 징역 또는 2천만원 이하 벌금). \"실수\" 변명은 인정 안 됨. 본 스토킹 사건 양형에도 가중 사유로 반영. 재범·증거인멸 우려 시 구속영장 청구 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·4호 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 위반 증거 즉시 보존 (DM·문자·CCTV·녹취, 즉시)</strong></li>\n<li><strong>2단계 — 경찰·112 신고 + 잠정조치 위반 명시</strong></li>\n<li><strong>3단계 — 잠정조치 4호(유치장 유치) 신청</strong></li>\n<li><strong>4단계 — 검찰 구속영장 청구 (재범·도주·증거인멸)</strong></li>\n<li><strong>5단계 — 본 사건 양형 가중 + 민사 손해배상</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">잠정조치 위반 재범 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 잠정조치·위반·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>잠정조치 결정문 (1·2·3호 발효일·내용)</strong></li>\n<li><strong>위반 증거 (DM·문자·통화·접근 CCTV)</strong></li>\n<li><strong>위반 일시·장소·방법 정리표</strong></li>\n<li><strong>이웃·목격자 진술서</strong></li>\n<li><strong>본인 정신적 피해 진단서·상담 기록</strong></li>\n<li><strong>경찰 신고 접수증·진행상황</strong></li>\n<li><strong>변호인 의견서·면담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 위반 사실 발견 즉시 보존이 핵심. 가해자가 메시지를 삭제하거나 계정을 폐기할 수 있어 화면 캡처·시간 기록 동시 확보. 잠정조치 4호는 최대 1개월 유치 + 연장 가능. 위반 누적 시 구속영장 인용 가능성 강화.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>위반 고의성</strong> — "실수" 변명 평가.</li>\n<li><strong>위반 횟수·반복성</strong> — 가중 사유.</li>\n<li><strong>접근 거리</strong> — 100m 이내 입증.</li>\n<li><strong>구속영장 요건</strong> — 재범·도주·증거인멸.</li>\n<li><strong>본 사건 양형</strong> — 위반은 가중 사유.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>스토킹 신고 112</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 잠정조치 항고와 결정 효력',
        summary:
          '대법원 2025모3144 영역에서 법원은 스토킹범죄의 처벌 등에 관한 법률상 잠정조치 결정(잠정조치 기간 연장·종류 변경 결정 포함)에 대한 항고에 원심법원의 항고 기각 결정 효력을 다루며, 잠정조치 결정의 위반 여부와 그 효력이 항고심에서 어떻게 평가되는지를 본 사례 흐름이 있습니다.',
        takeaway: '잠정조치 위반은 별도 범죄로 평가. 본 사건 양형에 가중 영향 트랙.',
      },
    ],
    faq: [
      {
        question: '잠정조치 위반은 어느 정도 처벌되나요?',
        answer:
          '<strong>2년 이하 징역 또는 2천만원 이하 벌금으로 별도 범죄 영역입니다.</strong>',
      },
      {
        question: '4호(유치장 유치)는 어떻게 신청하나요?',
        answer:
          '<strong>위반 사실 신고 후 경찰·검찰을 통해 법원에 신청 가능합니다.</strong>',
      },
      {
        question: '"실수다" 변명이 받아들여지나요?',
        answer:
          '<strong>인정되기 어려운 영역이며 반복 시 양형 가중 사유입니다.</strong>',
      },
      {
        question: '구속영장은 어떤 경우 청구되나요?',
        answer:
          '<strong>재범·도주·증거인멸 우려 시 검찰이 청구 가능한 영역입니다.</strong>',
      },
      {
        question: '민사 손해배상도 가능한가요?',
        answer:
          '<strong>네, 위반 사실이 정신적 피해 가중 사유로 산정 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 신고 절차', href: '/guide/stalking/stalking-complaint-procedure' },
      { label: '잠정조치 신청', href: '/guide/stalking/stalking-provisional-measure-application-effect' },
      { label: '잠정조치 항고', href: '/guide/stalking/stalking-provisional-measure-appeal-procedure' },
      { label: '응급조치 위반', href: '/guide/stalking/stalking-emergency-measure-violation-response' },
      { label: '손해배상 청구', href: '/guide/stalking/stalking-damage-claim' },
    ],
  },
];
