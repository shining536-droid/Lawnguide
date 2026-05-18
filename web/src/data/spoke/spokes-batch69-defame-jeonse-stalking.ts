import { SpokePage } from '../spoke-pages';

// batch69 defame-jeonse-stalking — 7개 (2026-05-19)
//
// 고유 존재 이유:
// 1. defamation-foreign-review-site-cross-border-restaurant — 한국 음식점이 해외 리뷰 사이트(트립어드바이저·옐프)에서 외국인 작성 악평을 받았을 때 국제관할·언어 + 한국 명예훼손법 적용 다툼 트랙. 국내 리뷰 트랙과 분기.
// 2. defamation-online-community-poll-vote-target — "최악의 ~ 투표"·"비호감 랭킹" 형식으로 특정인을 표적화한 게시물 (투표·랭킹 형식 + 다수 동조 트랙). 단순 비방글과 분기.
// 3. defamation-deceased-criticism-bereaved-emotional-damage — 사망자에 대한 허위 비방으로 유족이 정신적 피해를 입은 경우 (형법 308조 사자명예훼손 + 유족 위자료 트랙). 일반 명예훼손(생존자)과 분기.
// 4. jeonse-small-amount-tenant-priority-payment-region-cap — 주임법 시행령상 지역별(서울/수도권/광역시/그 외) 한도가 다른 점 + 본인이 소액임차인 해당 여부 다툼 트랙. 일반 보증금반환 트랙과 분기.
// 5. jeonse-landlord-death-incapacity-deposit-return-procedure — 계약 중 임대인이 사망 또는 성년후견 개시한 경우 상속인 미확정/한정승인/후견인 청구 트랙. 일반 반환 거절 트랙과 분기.
// 6. stalking-online-game-stalker-griefing — 동일 가해자가 게임 내에서 캐릭터를 추적·욕설·동선 추적 (게임 내 지속 추적 자체). 기존 voice-chat(특정 행위)과 분기.
// 7. stalking-private-investigator-third-party-commissioned — 가해자가 흥신소·심부름센터를 의뢰해 제3자가 추적·조사 (의뢰인 + 실행자 양쪽 책임 트랙). 본인 직접 행위 X 트랙.

export const spokesBatch69DefameJeonseStalking: SpokePage[] = [
  // ─── 1. defamation-foreign-review-site-cross-border-restaurant-track ───
  {
    domain: 'defamation',
    slug: 'defamation-foreign-review-site-cross-border-restaurant-track',
    keyword: '해외 리뷰 사이트 악평 명예훼손',
    questionKeyword: '한국에서 식당을 운영 중인데 트립어드바이저·옐프에 외국인 손님이 영문으로 악평을 남겼어요. 한국 명예훼손법으로 대응 가능한가요?',
    ctaKeyword: '해외 리뷰 악평 명예훼손 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외 리뷰 악평 명예훼손 — 5단계 국제관할·삭제 다툼 | 로앤가이드',
      description:
        '트립어드바이저·옐프 등 해외 사이트에서 한국 음식점이 외국인 악평을 받았다면 국제관할·한국법 적용 5가지 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"서울에서 외국인 관광객 대상 한식당을 운영하는데 어느 날 트립어드바이저·옐프에 외국인 손님 명의로 \"음식에서 머리카락이 나왔다\" \"위생이 엉망\"이라는 영문 악평이 연달아 올라왔어요. 본인은 매장 CCTV로 그날 상황을 확인했지만 외국인 작성자가 누군지·정말 방문했는지도 불확실하고, 사이트가 미국 서버라 한국 법으로 어떻게 대응해야 할지 막막한 영역입니다.\" 해외 리뷰 명예훼손은 ① 국제관할(피해 발생지 한국 법원 + 한국법 적용 가능) ② 한국 정통망법 70조·형법 307조 ③ 플랫폼 본사 한국 지사·이메일 신고 ④ 작성자 IP·결제정보 추적(플랫폼 협조 의존) ⑤ 영업방해 + 민사 손해배상 5가지 트랙이 결합되는 영역. 외국인 작성자라도 한국 영업장에 대한 명예훼손은 한국 법원 관할 검토 가능. 대응은 ① 보존 ② 플랫폼 신고 ③ 추적 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 해외 리뷰 악평 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·플랫폼·추적·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 리뷰 원본·URL·번역본·작성일시 캡처</strong></li>\n<li><strong>② 플랫폼 정책 위반·삭제 신고 (영문)</strong></li>\n<li><strong>③ 작성자 추적·플랫폼 협조 요청</strong></li>\n<li><strong>④ 한국 경찰·검찰 형사 고소 검토</strong></li>\n<li><strong>⑤ 민사 손해배상·영업방해 청구</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 외국인 작성·해외 서버라도 한국 영업장 피해는 한국 법원 국제관할 검토 가능 영역. 단, 작성자 신원·송달 어려움은 실무 장벽. 플랫폼이 협조하면 IP·계정 추적 가능. 영문 리뷰는 공식 번역본 첨부가 자료 신빙성 확보.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·플랫폼·추적 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 리뷰 캡처·번역본 공증 (즉시)</strong></li>\n<li><strong>2단계 — 플랫폼 영문 신고·삭제 요청 (3~14일)</strong></li>\n<li><strong>3단계 — 매장 CCTV·주문·결제 자료로 허위 입증</strong></li>\n<li><strong>4단계 — 형사 고소·작성자 정보 협조 요청</strong></li>\n<li><strong>5단계 — 민사 손해배상 + 영업방해 청구</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외 리뷰 악평 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 리뷰·번역·매장 갈래입니다.</strong></p>\n<ul>\n<li><strong>리뷰 원본·URL·작성일시 캡처</strong></li>\n<li><strong>리뷰 공식 번역본·번역 공증</strong></li>\n<li><strong>매장 CCTV·POS·예약 기록 (방문 사실 입증)</strong></li>\n<li><strong>플랫폼 영문 삭제 요청서·답변</strong></li>\n<li><strong>유사 의심 리뷰·계정 패턴 자료</strong></li>\n<li><strong>매출 감소·예약 취소 자료 (영업 피해)</strong></li>\n<li><strong>변호인 의견서·국제관할 검토 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 트립어드바이저·옐프는 자체 정책상 허위·중복 리뷰 신고 시 삭제 가능 영역. CCTV로 방문 사실 자체가 없으면 허위성 입증 강화. 매장 매출·예약 감소 자료는 영업방해·손해배상 산정의 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>국제관할</strong> — 피해 발생지·영업지 한국 영역.</li>\n<li><strong>준거법</strong> — 한국 명예훼손법 적용 검토.</li>\n<li><strong>작성자 신원</strong> — 플랫폼 협조 의존.</li>\n<li><strong>송달 어려움</strong> — 외국 거주자 대상 한계.</li>\n<li><strong>사실 vs 의견</strong> — "음식이 안 맞았다"는 의견.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>경찰청 사이버범죄 신고 ecrm.police.go.kr</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 표현 자유와 사실 적시',
        summary:
          '대법원 2017도18697(2023.10.26 선고) 영역에서 법원은 학문의 자유·표현의 자유 본질과 명예훼손죄에서 사실의 적시 인정 범위를 다루며, 객관적으로 피해자의 사회적 평가를 저하시키는 사실에 관한 발언이 소문이나 제3자 말을 인용하는 방법으로 단정적 표현이 아닌 전문·추측의 형태로 표현되었으나 표현 전체 취지로 보아 사실이 존재할 수 있다는 것을 암시하는 방식이면 명예훼손죄의 \'사실의 적시\'로 인정될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '리뷰 형식의 추측·암시 표현도 전체 취지상 사실 적시 평가 영역. 외국인 작성·번역본도 동일 트랙.',
      },
    ],
    faq: [
      {
        question: '외국인이 영문으로 쓴 리뷰도 한국법으로 처벌되나요?',
        answer:
          '<strong>피해 발생지가 한국이면 국제관할·한국법 적용 검토 가능한 영역입니다.</strong>',
      },
      {
        question: '플랫폼이 미국 회사인데 어떻게 신고하나요?',
        answer:
          '<strong>플랫폼 자체 정책상 허위·중복 리뷰 영문 신고로 삭제 요청 가능합니다.</strong>',
      },
      {
        question: '작성자를 어떻게 찾나요?',
        answer:
          '<strong>플랫폼 협조·IP 추적·결제정보 요청을 통해 추적 가능한 영역입니다.</strong>',
      },
      {
        question: '매장에 안 온 사람이 쓴 가짜 리뷰면요?',
        answer:
          '<strong>CCTV·예약·POS 자료로 방문 사실 없음을 입증하면 허위성 강화됩니다.</strong>',
      },
      {
        question: '손해배상은 어느 정도 인정되나요?',
        answer:
          '<strong>매출 감소·예약 취소·확산 범위에 따라 사례별 차이가 큰 영역입니다.</strong>',
      },
    ],
    cta: { text: '명예훼손 피해 대응 순서, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 피해 대응', href: '/guide/defamation/defamation-victim-where-to-start' },
      { label: '온라인 리뷰 진실 방어', href: '/guide/defamation/defamation-online-review-truth-defense' },
      { label: '영업 별점 공격', href: '/guide/defamation/defamation-business-star-rating-attack-victim' },
      { label: '익명 게시판 IP 추적', href: '/guide/defamation/defamation-anonymous-board-ip-tracking' },
      { label: '온라인 삭제 가처분', href: '/guide/defamation/defamation-online-false-deletion-injunction' },
    ],
  },

  // ─── 2. defamation-online-community-poll-vote-target-track ───
  {
    domain: 'defamation',
    slug: 'defamation-online-community-poll-vote-target-track',
    keyword: '온라인 커뮤니티 투표 표적 명예훼손',
    questionKeyword: '온라인 커뮤니티에서 누군가 본인을 "최악의 ○○ 투표" 게시물에 올렸고, 수십 명이 댓글·투표로 동조해요. 명예훼손 가능한가요?',
    ctaKeyword: '커뮤니티 투표 표적 명예훼손 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '커뮤니티 투표 표적 명예훼손 — 5단계 다수 동조·게시자 책임 다툼 | 로앤가이드',
      description:
        '온라인 커뮤니티에서 "최악의 ○○ 투표"·"비호감 랭킹"으로 표적 게시된 피해자라면 게시자·동조자 5가지 책임 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인이 활동하는 동호회 커뮤니티에 어느 날 \"이 사람 비호감 투표\"라는 글이 올라왔고 본인 사진·실명까지 노출됐어요. 수십 명이 \"진짜 별로\" \"비호감 1위\" 같은 댓글·투표를 남겨 며칠 사이 조회 수천에 본인 이름이 다른 글에서도 조롱 대상으로 거론되기 시작했습니다. 게시자가 누군지·동조 댓글 작성자들에게도 책임을 물을 수 있는지 막막한 영역입니다.\" 커뮤니티 투표 표적 명예훼손은 ① 정통망법 70조(공공연성 다수 회원 인정) ② 게시자 + 다수 동조 댓글자 각자 독립 책임 ③ 모욕죄 311조 결합 ④ 사이버수사·IP 추적 ⑤ 형사 + 민사 5가지 트랙이 결합되는 영역. 투표·랭킹 형식은 다수 전파 가능성 명확. 대응은 ① 보존 ② 플랫폼 신고 ③ 추적 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 커뮤니티 투표 표적 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·플랫폼·추적·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 게시물·댓글·투표 결과 캡처</strong></li>\n<li><strong>② 플랫폼 신고·삭제 요청 (운영자)</strong></li>\n<li><strong>③ 게시자·악성 댓글자 IP 추적</strong></li>\n<li><strong>④ 형사 명예훼손·모욕 고소 (다수 대상)</strong></li>\n<li><strong>⑤ 민사 손해배상·삭제 가처분</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 투표·랭킹 형식은 다수 회원 전파 가능성이 객관적으로 인정되는 영역. 게시자뿐 아니라 악성 댓글 다수도 각자 별개 명예훼손·모욕 책임. "장난이었다" 변명은 인정되기 어렵고, 실명·사진 결합 시 특정성 명확.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·플랫폼·추적 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시물·댓글·투표 캡처·URL 보존 (즉시)</strong></li>\n<li><strong>2단계 — 플랫폼·운영자 신고·삭제 요청 (3~7일)</strong></li>\n<li><strong>3단계 — 사이버수사·IP 추적·플랫폼 협조</strong></li>\n<li><strong>4단계 — 형사 명예훼손·모욕 고소 (게시자 + 악성 댓글자)</strong></li>\n<li><strong>5단계 — 민사 손해배상 + 삭제 가처분</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">커뮤니티 투표 표적 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 게시물·댓글·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>원본 투표·랭킹 게시물·URL·조회수·투표결과</strong></li>\n<li><strong>악성 댓글·재인용 게시물 캡처·작성자ID</strong></li>\n<li><strong>본인 실명·사진·정보 노출 확인 자료</strong></li>\n<li><strong>플랫폼·운영자 신고 접수증·답변</strong></li>\n<li><strong>2차 피해 자료 (다른 글에서 조롱·언급)</strong></li>\n<li><strong>본인 정신적 피해 진단서·상담 기록</strong></li>\n<li><strong>변호인 의견서·고소장 초안</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 투표·랭킹 게시물은 운영자 신고 후에도 빠르게 삭제되지 않을 수 있어 자체 보존이 핵심. 악성 댓글 다수가 있을 경우 우선순위·대표 사례 선별 고소가 실무적. 게시판이 회원제라도 다수 회원 전파 가능성으로 공공연성 인정 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>특정성</strong> — 실명·사진·닉네임 결합 시 명확.</li>\n<li><strong>공공연성</strong> — 다수 회원 전파 가능성.</li>\n<li><strong>"장난·의견" 변명</strong> — 인정 안 됨.</li>\n<li><strong>게시자 + 동조자 책임</strong> — 각자 독립.</li>\n<li><strong>플랫폼 책임</strong> — 신고 응대·삭제 의무.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>경찰청 사이버범죄 신고 ecrm.police.go.kr</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 모욕죄 공연성과 전파가능성',
        summary:
          '대법원 2022도14571(2024.01.04 선고) 영역에서 법원은 모욕죄의 구성요건 중 \'공연성\'을 다루며, 개별적으로 소수의 사람에게 발언하였더라도 상대방이 불특정 또는 다수인에게 해당 내용을 전파할 가능성이 객관적으로 인정되는 경우에는 공연성이 인정될 수 있다고 본 사례 흐름이 있습니다. 회원 전용 게시판이라도 다수 전파 가능성이 인정되는 영역이라면 동일한 평가 트랙입니다.',
        takeaway: '회원제 커뮤니티의 투표·랭킹도 다수 전파 가능성 인정 시 공연성 영역. 표적 게시·동조 댓글 모두 독립 평가.',
      },
    ],
    faq: [
      {
        question: '회원제 커뮤니티인데도 명예훼손인가요?',
        answer:
          '<strong>회원이 다수면 전파 가능성으로 공연성 인정될 수 있는 영역입니다.</strong>',
      },
      {
        question: '동조 댓글 작성자들도 처벌되나요?',
        answer:
          '<strong>각자 독립적 명예훼손·모욕 책임 부담 가능한 영역입니다.</strong>',
      },
      {
        question: '"투표는 의견 표명"이라고 주장하면요?',
        answer:
          '<strong>실명·사진 표적 + 비방 표현이 결합되면 의견 보호 약화됩니다.</strong>',
      },
      {
        question: '게시자가 익명이면 어떻게 찾나요?',
        answer:
          '<strong>사이버수사·IP 추적·플랫폼 협조로 신원 확인 가능합니다.</strong>',
      },
      {
        question: '악성 댓글이 너무 많은데 다 고소해야 하나요?',
        answer:
          '<strong>대표·중대 사례 우선 선별 고소가 실무적인 영역입니다.</strong>',
      },
    ],
    cta: { text: '명예훼손 피해 대응 순서, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 피해 대응', href: '/guide/defamation/defamation-victim-where-to-start' },
      { label: '익명 게시판 IP 추적', href: '/guide/defamation/defamation-anonymous-board-ip-tracking' },
      { label: '온라인 스토킹 대량 댓글', href: '/guide/defamation/defamation-online-stalking-mass-comment-track' },
      { label: '온라인 삭제 가처분', href: '/guide/defamation/defamation-online-false-deletion-injunction' },
      { label: '손해배상 산정', href: '/guide/defamation/defamation-damages-amount-standard' },
    ],
  },

  // ─── 3. defamation-deceased-criticism-bereaved-emotional-damage-track ───
  {
    domain: 'defamation',
    slug: 'defamation-deceased-criticism-bereaved-emotional-damage-track',
    keyword: '고인 비방 사자명예훼손 유족 피해',
    questionKeyword: '돌아가신 부모님에 대해 허위 비방글이 SNS·커뮤니티에 올라왔고 유족들이 정신적 피해를 입었어요. 형법 308조 사자명예훼손과 위자료 청구 가능한가요?',
    ctaKeyword: '사자명예훼손 유족 위자료 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사자명예훼손 유족 피해 — 5단계 308조·위자료 다툼 | 로앤가이드',
      description:
        '고인에 대한 허위 비방으로 유족이 정신적 피해를 입었다면 형법 308조 사자명예훼손 + 유족 위자료 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"몇 달 전 돌아가신 아버지에 대해 옛 직장 동료라는 사람이 SNS·동네 커뮤니티에 \"○○○은 회삿돈을 횡령했고 가족에게도 폭력을 휘둘렀다\"는 허위 내용을 반복 게시했어요. 본인과 형제·어머니가 글을 보고 큰 충격을 받았고, 친지·이웃이 \"진짜냐\"고 물어와 유족 전체가 정신적 피해를 입은 영역입니다.\" 고인 비방 사자명예훼손은 ① 형법 308조 사자명예훼손(허위사실 적시만 처벌, 친고죄 - 친족 고소) ② 정통망법 적용 여부 ③ 유족 인격권·추모 인격권 침해(민사) ④ 유족 정신적 위자료 청구 ⑤ 게시물 삭제 가처분 5가지 트랙이 결합되는 영역. 친고죄라 고소권자 = 배우자·직계존비속 등. 6개월 내 고소 필요. 대응은 ① 보존 ② 고소 ③ 추적 ④ 민사 ⑤ 삭제 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 사자명예훼손 유족 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·고소·추적·민사·삭제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 게시물·URL·작성일시 보존 (허위성 입증)</strong></li>\n<li><strong>② 형법 308조 사자명예훼손 고소 (친족·6개월 내)</strong></li>\n<li><strong>③ 작성자 IP·계정 추적</strong></li>\n<li><strong>④ 유족 인격권 침해 민사 위자료 청구</strong></li>\n<li><strong>⑤ 게시물 삭제 가처분</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사자명예훼손은 허위사실 적시만 처벌(진실 적시는 불벌)이며 친고죄. 고소권자는 배우자·직계존비속·형제자매. 고소기간 범인을 안 날부터 6개월. 유족 자신의 인격권 침해(추모권)는 별개 민사 위자료 트랙으로 같이 진행 가능 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·고소·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시물·URL·작성일시 캡처·보존 (즉시)</strong></li>\n<li><strong>2단계 — 허위성 입증 자료 수집 (사실관계 자료)</strong></li>\n<li><strong>3단계 — 형법 308조 사자명예훼손 고소 (6개월 내)</strong></li>\n<li><strong>4단계 — 유족 위자료 민사소송 + IP 추적</strong></li>\n<li><strong>5단계 — 게시물 삭제 가처분 + 플랫폼 신고</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사자명예훼손 유족 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 게시물·고인·유족 갈래입니다.</strong></p>\n<ul>\n<li><strong>게시물 원본·URL·작성일시·조회수 캡처</strong></li>\n<li><strong>고인 사망진단서·기본증명서·가족관계증명서</strong></li>\n<li><strong>고소권자 신분증·관계 증명 (배우자·직계존비속)</strong></li>\n<li><strong>허위사실 반증 자료 (회사 자료·증인 진술)</strong></li>\n<li><strong>유족 정신적 피해 진단서·상담 기록</strong></li>\n<li><strong>친지·이웃 문의·확산 자료</strong></li>\n<li><strong>변호인 의견서·고소장 초안</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사자명예훼손은 허위만 처벌이므로 허위성 입증이 가장 중요. 회사 자료·증인 진술·공적 기록 등으로 사실관계 확인 필요. 고소권자 6개월 기간은 \"범인을 안 날\"부터 기산되므로 작성자 신원 확인 시점에 주의.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>허위성</strong> — 진실 적시는 사자명예훼손 불벌.</li>\n<li><strong>고소권자 자격</strong> — 친족 범위 한정.</li>\n<li><strong>6개월 기간</strong> — 범인을 안 날부터.</li>\n<li><strong>유족 인격권 별개</strong> — 민사 위자료 가능.</li>\n<li><strong>SNS·커뮤니티 공공연성</strong> — 다수 노출.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>경찰청 사이버범죄 신고 ecrm.police.go.kr</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사자명예훼손과 허위사실 인식',
        summary:
          '대법원 2013도12430(2014.03.13 선고) 영역에서 법원은 형법 제307조 제2항의 \'허위사실 적시에 의한 명예훼손죄\'에서 적시된 사실이 허위인지 행위자가 그 허위성을 인식하였는지 판단하는 기준과 미필적 고의에 의해서도 성립하는지 여부, 그리고 형법 제308조의 사자명예훼손죄 판단에서도 같은 법리가 적용되는지 여부를 다룬 사례 흐름이 있습니다.',
        takeaway: '사자명예훼손은 허위 적시 + 허위성 인식(미필적 고의 포함). 진실 적시는 308조 처벌 대상 아님.',
      },
    ],
    faq: [
      {
        question: '진실한 내용도 사자명예훼손인가요?',
        answer:
          '<strong>아닙니다. 형법 308조는 허위사실 적시만 처벌하는 영역입니다.</strong>',
      },
      {
        question: '고소는 누가 할 수 있나요?',
        answer:
          '<strong>배우자·직계존비속·형제자매 등 친족이 친고죄로 고소 가능합니다.</strong>',
      },
      {
        question: '고소 기간은 얼마인가요?',
        answer:
          '<strong>범인을 안 날부터 6개월 이내 고소 필요한 영역입니다.</strong>',
      },
      {
        question: '유족 위자료도 청구 가능한가요?',
        answer:
          '<strong>유족 인격권·추모권 침해로 별개 민사 위자료 청구 가능한 영역입니다.</strong>',
      },
      {
        question: '게시물 삭제는 어떻게 하나요?',
        answer:
          '<strong>가처분 신청 + 플랫폼 삭제 요청 + 방심위 신고 병행 가능합니다.</strong>',
      },
    ],
    cta: { text: '명예훼손 피해 대응 순서, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 피해 대응', href: '/guide/defamation/defamation-victim-where-to-start' },
      { label: '사자 명예훼손', href: '/guide/defamation/defamation-deceased-person-track' },
      { label: '유족 대응 절차', href: '/guide/defamation/defamation-deceased-defamation-survivors-action' },
      { label: '온라인 삭제 가처분', href: '/guide/defamation/defamation-online-false-deletion-injunction' },
      { label: '손해배상 산정', href: '/guide/defamation/defamation-damages-amount-standard' },
    ],
  },

  // ─── 4. jeonse-small-amount-tenant-priority-payment-region-cap-track ───
  {
    domain: 'jeonse',
    slug: 'jeonse-small-amount-tenant-priority-payment-region-cap-track',
    keyword: '소액임차인 우선변제 지역별 한도',
    questionKeyword: '제가 소액임차인 최우선변제 대상이 되는지 어떻게 확인하나요? 서울·수도권·광역시·기타 지역별 보증금 한도와 변제 금액이 다르다는데 무엇을 봐야 하나요?',
    ctaKeyword: '소액임차인 우선변제 한도 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '소액임차인 우선변제 한도 — 5단계 지역별·요건 다툼 | 로앤가이드',
      description:
        '소액임차인 최우선변제권 대상 여부와 지역별(서울·수도권·광역시·기타) 보증금 한도 5가지 점검 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세보증금 1억 2천만원으로 서울에서 살고 있는데 임대인이 보증금을 못 돌려주고 집이 경매로 넘어가게 됐어요. 본인이 \"소액임차인 최우선변제\" 대상에 해당하는지 알아보니 지역별 한도(서울 1억 6,500만원·과밀억제권역 1억 4,500만원·광역시 8,500만원·기타 7,500만원 등 기준)가 다르고, 우선변제 금액(서울 5,500만원·수도권 4,800만원 등 기준)도 따로 정해져 있어 본인 사례 적용이 막막한 영역입니다.\" 소액임차인 우선변제는 ① 주임법 시행령상 지역별 보증금 한도 ② 대항요건(전입신고 + 점유) 갖춘 시점 ③ 경매 신청 등기 전 대항력 ④ 우선변제 금액 한도 ⑤ 배당요구 종기 내 신청 5가지 트랙이 결합되는 영역. 최신 시행령 한도 직접 확인 필수. 대응은 ① 확인 ② 등기부 ③ 점유 ④ 배당요구 ⑤ 청구 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 소액임차인 우선변제 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 한도·등기·점유·배당·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 주임법 시행령 지역별 한도 확인 (서울/수도권/광역시/기타)</strong></li>\n<li><strong>② 본인 보증금이 한도 이내인지 확인</strong></li>\n<li><strong>③ 대항요건(전입신고+점유) 시점 vs 경매 신청 등기 시점</strong></li>\n<li><strong>④ 배당요구 종기 내 배당요구 신청</strong></li>\n<li><strong>⑤ 우선변제 금액 한도 내 배당 청구</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 소액임차인 한도·우선변제액은 시행령 개정에 따라 변동되는 영역. 지역 구분(서울 / 과밀억제권역 / 광역시 등 / 그 외)에 따라 기준 다름. 경매 신청 등기 \'전\' 대항요건 + 배당요구 종기 내 신청이 필수.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 한도·등기·배당 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현행 주임법 시행령 한도·우선변제액 확인</strong></li>\n<li><strong>2단계 — 등기부등본·경매 신청 등기 시점 확인</strong></li>\n<li><strong>3단계 — 전입신고·점유 시점 vs 경매 시점 대조</strong></li>\n<li><strong>4단계 — 배당요구 종기 내 배당요구 신청서 제출</strong></li>\n<li><strong>5단계 — 우선변제 금액 한도 내 배당 수령</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">소액임차인 우선변제 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 한도·대항력·배당 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·확정일자 자료</strong></li>\n<li><strong>주민등록등본·전입신고일 자료</strong></li>\n<li><strong>점유 시점 자료 (관리비·공과금·우편물)</strong></li>\n<li><strong>등기부등본 (경매 신청 등기 시점)</strong></li>\n<li><strong>주임법 시행령 한도·우선변제액표 (현행)</strong></li>\n<li><strong>경매 사건번호·매각공고·배당요구 종기</strong></li>\n<li><strong>배당요구신청서 및 첨부자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시행령 한도는 2010·2014·2016·2018·2021·2023년 등 여러 차례 개정됐고, 적용은 \'최초 근저당 설정일\' 시점 시행령 기준이라 사건별 다름. 본인 지역·임대차 시점·근저당 시점 모두 대조 필수.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>적용 시행령 시점</strong> — 최초 근저당 설정일 기준.</li>\n<li><strong>지역 구분</strong> — 서울/과밀억제/광역시/기타.</li>\n<li><strong>대항요건 시점</strong> — 경매 신청 등기 전.</li>\n<li><strong>배당요구 종기 누락</strong> — 우선변제 상실.</li>\n<li><strong>임차권등기 시 최우선변제 제외</strong> — 일반 우선변제만.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>주택임대차분쟁조정위원회 1670-7777</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차권등기 후 최우선변제 제외',
        summary:
          '대법원 2022다246610(2023.09.27 선고) 영역에서 법원은 임차권등기가 마쳐진 주택을 임차한 임차인에게 소액임차보증금에 관한 최우선변제권을 제외한 대항력과 우선변제권을 인정할 수 있는지 여부를 다루며, 이미 임차권등기가 경료된 주택의 후임 임차인은 소액임차인 최우선변제권 행사를 할 수 없지만 일반 대항력·우선변제권은 갖출 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '임차권등기된 주택의 후임 임차인은 최우선변제권 제외. 일반 대항력·우선변제권만 행사 가능 트랙.',
      },
    ],
    faq: [
      {
        question: '서울 보증금 1억 5천이면 소액임차인인가요?',
        answer:
          '<strong>현행 시행령상 서울 보증금 한도(약 1억 6,500만원 기준) 이내면 가능하나 적용 시행령 시점 확인이 필요합니다.</strong>',
      },
      {
        question: '우선변제는 보증금 전액 받나요?',
        answer:
          '<strong>아닙니다. 시행령상 우선변제 금액 한도(서울 약 5,500만원 등 기준) 내에서만 우선 변제됩니다.</strong>',
      },
      {
        question: '어느 시행령이 적용되나요?',
        answer:
          '<strong>최초 근저당권 설정 당시 시행령 기준으로 적용되는 영역입니다.</strong>',
      },
      {
        question: '배당요구를 안 하면 어떻게 되나요?',
        answer:
          '<strong>배당요구 종기 내 신청하지 않으면 우선변제 받지 못하는 영역입니다.</strong>',
      },
      {
        question: '임차권등기 후 들어온 임차인도 가능한가요?',
        answer:
          '<strong>최우선변제는 제외, 일반 대항력·우선변제권만 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '소액보증금 우선변제', href: '/guide/jeonse/jeonse-auction-small-deposit-priority-repay' },
      { label: '경매 우선변제 순서', href: '/guide/jeonse/jeonse-auction-priority-distribution-procedure' },
      { label: '다가구 우선변제', href: '/guide/jeonse/jeonse-multifamily-priority-payment-no-hug' },
      { label: '보증금 반환 절차', href: '/guide/jeonse/jeonse-deposit-not-returned-move-out-procedure' },
      { label: '임차권등기명령', href: '/guide/jeonse/jeonse-after-rental-rights-registration-still-unpaid' },
    ],
  },

  // ─── 5. jeonse-landlord-death-incapacity-deposit-return-procedure-track ───
  {
    domain: 'jeonse',
    slug: 'jeonse-landlord-death-incapacity-deposit-return-procedure-track',
    keyword: '임대인 사망 후견 보증금 반환',
    questionKeyword: '계약 중 임대인이 갑자기 사망했거나 성년후견이 개시됐어요. 상속인 미확정·한정승인·후견인 청구 어떻게 진행하나요?',
    ctaKeyword: '임대인 사망 후견 보증금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임대인 사망 후견 보증금 반환 — 5단계 상속·후견 다툼 | 로앤가이드',
      description:
        '계약 중 임대인이 사망하거나 성년후견 개시되어 보증금 반환이 막막하다면 상속인·한정승인·후견인 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세 2억으로 거주 중인데 임대인이 갑자기 사망했어요. 상속인이 누군지·상속받을 의사가 있는지 불확실하고, 한정승인을 한다는 이야기도 들립니다. 또 다른 친구는 임대인이 치매로 성년후견이 개시돼 보증금 반환 청구를 누구한테 해야 할지 막막한 영역입니다.\" 임대인 사망·후견 보증금 반환은 ① 상속에 따라 임대인 지위 공동 상속인 승계 ② 상속인 미확정·상속포기·한정승인 시 처리 ③ 성년후견 개시 시 후견인이 법정대리 ④ 임차권등기 + 우선변제권 확보 ⑤ 상속재산분할심판·후견심판과 별개 보증금 청구 5가지 트랙이 결합되는 영역. 임대인 지위 승계는 양도와 마찬가지로 임대차보호법 3조 2항 적용. 대응은 ① 상속·후견 확인 ② 등기 ③ 청구 ④ 소송 ⑤ 회수 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 임대인 사망 후견 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·등기·청구·소송·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 임대인 사망진단서·후견개시심판문 확인</strong></li>\n<li><strong>② 상속인·후견인 신원·연락처 파악</strong></li>\n<li><strong>③ 임차권등기명령 + 우선변제권 확보</strong></li>\n<li><strong>④ 상속인·후견인 상대 보증금 반환 청구</strong></li>\n<li><strong>⑤ 상속재산 부족 시 다른 회수 트랙 (HUG·SGI 등)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임대인 사망 시 임대인 지위는 상속인에게 승계되며 공동상속인들의 보증금 반환채무는 불가분채무. 한정승인 시 상속재산 한도 내 책임. 성년후견 개시 시 후견인이 법정대리인. 상속·후견 확정 전이라도 임차권등기로 우선변제권 확보 권장.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·등기·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임대인 사망진단서·기본증명서·후견심판문 확인 (즉시)</strong></li>\n<li><strong>2단계 — 상속인·후견인 정보 파악 (가족관계증명서)</strong></li>\n<li><strong>3단계 — 임차권등기명령 신청 (대항력·우선변제권 보전)</strong></li>\n<li><strong>4단계 — 상속인·후견인 상대 보증금 반환 내용증명 + 소송</strong></li>\n<li><strong>5단계 — 상속재산 부족 시 HUG 보증 + 임차보증 회수</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임대인 사망 후견 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사망·후견·임대차 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·확정일자·전입 자료</strong></li>\n<li><strong>임대인 사망진단서·기본증명서</strong></li>\n<li><strong>임대인 가족관계증명서·상속인 명단</strong></li>\n<li><strong>한정승인·상속포기 신고 자료 (가정법원)</strong></li>\n<li><strong>성년후견심판문·후견인 등기사항증명서</strong></li>\n<li><strong>임차권등기명령 신청서·결정문</strong></li>\n<li><strong>HUG·SGI 보증보험 가입증서 (해당 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상속인 미확정 단계에서도 임차권등기 신청 가능 영역. 다만 등기시 \"상속인 미정\" 또는 \"피상속인 ○○○의 상속인\" 표시. HUG 보증보험 가입한 영역이면 임대인 사망과 무관하게 보증 이행 청구 트랙 우선 검토.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공동상속인 불가분채무</strong> — 1인 상대 전액 청구 가능.</li>\n<li><strong>한정승인 한도</strong> — 상속재산 한도 내 책임.</li>\n<li><strong>상속포기</strong> — 청구 대상 변경.</li>\n<li><strong>후견인 법정대리</strong> — 후견인 상대 청구.</li>\n<li><strong>상속재산분할심판 중</strong> — 분할 전 공동 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>주택임대차분쟁조정위원회 1670-7777</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상속과 임대인 지위 공동 승계',
        summary:
          '대법원 2023다318857(2024.08.01 선고) 영역에서 법원은 상속에 따라 임차건물 소유권을 취득한 자가 임대차보호법상 \'임차건물의 양수인\'에 해당하는지 여부와 임대인 지위를 공동으로 승계한 공동임대인들의 임차보증금 반환채무가 불가분채무인지 여부를 다루며, 임대인 지위를 공동 승계한 공동상속인들의 보증금 반환채무는 성질상 불가분채무에 해당한다고 본 사례 흐름이 있습니다.',
        takeaway: '공동상속인의 보증금 반환채무는 불가분채무. 1인 상대 전액 청구 후 공동상속인 내부 구상 트랙.',
      },
    ],
    faq: [
      {
        question: '임대인 사망 시 누구에게 보증금 청구하나요?',
        answer:
          '<strong>상속인 전원이 임대인 지위 공동 승계, 1인 상대 전액 청구 가능한 영역입니다.</strong>',
      },
      {
        question: '상속인이 한정승인하면 회수 가능한가요?',
        answer:
          '<strong>상속재산 한도 내에서만 책임지므로 임차권등기로 우선변제권 확보가 안전합니다.</strong>',
      },
      {
        question: '상속인 전원이 상속포기하면요?',
        answer:
          '<strong>상속재산관리인 선임 청구 + 상속재산 한도 내 회수 트랙으로 진행 가능합니다.</strong>',
      },
      {
        question: '임대인이 치매로 후견 개시되면요?',
        answer:
          '<strong>후견인이 법정대리인으로 보증금 반환 청구 상대방이 됩니다.</strong>',
      },
      {
        question: 'HUG 보증보험 가입돼 있으면요?',
        answer:
          '<strong>임대인 사망과 무관하게 HUG에 보증 이행 청구 우선 검토 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '임대인 사망 보증금', href: '/guide/jeonse/jeonse-landlord-death-deposit-return' },
      { label: '상속·한정승인 위험', href: '/guide/jeonse/jeonse-landlord-death-heirs-renunciation-deposit-risk' },
      { label: '임차권등기명령', href: '/guide/jeonse/jeonse-after-rental-rights-registration-still-unpaid' },
      { label: '보증금 반환 절차', href: '/guide/jeonse/jeonse-deposit-not-returned-move-out-procedure' },
      { label: '보증보험 가입', href: '/guide/jeonse/jeonse-deposit-guarantee-insurance-guide' },
    ],
  },

  // ─── 6. stalking-online-game-stalker-griefing-track ───
  {
    domain: 'stalking',
    slug: 'stalking-online-game-stalker-griefing-track',
    keyword: '온라인 게임 스토커 추적',
    questionKeyword: '온라인 게임에서 동일 가해자가 본인 캐릭터를 매번 따라다니며 욕설·동선 추적·반복 친구신청을 해요. 게임 내 행위도 스토킹 처벌 되나요?',
    ctaKeyword: '온라인 게임 스토커 추적 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '온라인 게임 스토커 추적 — 5단계 게임내 지속·증거 다툼 | 로앤가이드',
      description:
        '온라인 게임에서 동일 가해자가 캐릭터 추적·욕설·반복 친구신청으로 괴롭힌다면 게임 내 스토킹 5가지 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 온라인 게임을 즐기는데 한 달 전부터 동일 가해자가 본인 캐릭터를 매번 따라다니며 채팅·욕설을 반복하고, 본인이 접속한 서버·채널을 추적해 옮기더라도 끝까지 따라옵니다. 친구신청·귓속말도 끊임없이 보내고 차단해도 새 계정으로 접근해요. 본인은 게임 접속만 해도 불안하고 친구들과 게임을 못 하게 된 영역입니다.\" 온라인 게임 스토커는 ① 스토킹처벌법 2조(반복 접근·연락·괴롭힘) ② 정통망법 결합(채팅·메시지 도달) ③ 게임사 신고·계정 정지 ④ 사이버수사·IP·결제정보 추적 ⑤ 형사 + 민사 5가지 트랙이 결합되는 영역. 게임 내 행위도 객관적 평가 시 스토킹행위로 평가 가능. 대응은 ① 증거 ② 게임사 ③ 추적 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 온라인 게임 스토커 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·게임사·추적·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 게임 내 채팅·접근·반복 행위 캡처</strong></li>\n<li><strong>② 게임사 신고·계정 정지·로그 보존 요청</strong></li>\n<li><strong>③ 사이버수사 IP·결제정보·계정 추적</strong></li>\n<li><strong>④ 스토킹처벌법 형사 고소 + 잠정조치</strong></li>\n<li><strong>⑤ 민사 손해배상 청구</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 게임 내 채팅·접근·반복 친구신청 등도 객관적으로 불안·공포심을 일으키기에 충분한 정도라면 스토킹행위로 평가될 수 있는 영역. 차단을 우회한 새 계정 접근은 가해자 동일성 입증 가능한 핵심 자료. 게임사 로그 보존이 결정적.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·게임사·수사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게임 내 채팅·접근 캡처·녹화 (즉시)</strong></li>\n<li><strong>2단계 — 게임사 신고·계정 정지·로그 보존 요청 (1주 내)</strong></li>\n<li><strong>3단계 — 사이버수사대 신고 + IP·결제정보 협조 요청</strong></li>\n<li><strong>4단계 — 스토킹처벌법 형사 고소 + 잠정조치 신청</strong></li>\n<li><strong>5단계 — 민사 손해배상 + 차단 가처분</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인 게임 스토커 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 게임·계정·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>게임 내 채팅·귓속말·친구신청 캡처·녹화</strong></li>\n<li><strong>가해자 계정 ID·캐릭터명·서버·시점 정리표</strong></li>\n<li><strong>차단 우회·새 계정 접근 자료 (동일성 입증)</strong></li>\n<li><strong>게임사 신고 접수증·답변·로그 보존 확인</strong></li>\n<li><strong>본인 활동 위축·게임 이탈 자료 (피해 입증)</strong></li>\n<li><strong>본인 정신적 피해 진단서·상담 기록</strong></li>\n<li><strong>변호인 의견서·고소장 초안</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 게임사는 일정 기간 후 로그를 자동 삭제할 수 있어 신고와 함께 로그 보존 요청 필수. 차단 우회 새 계정의 결제정보·IP가 동일하면 동일인 입증의 핵심 자료. 게임 내 행위로도 스토킹 평가 가능한 점이 최근 흐름.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>가해자 동일성</strong> — 새 계정·IP·결제 정보.</li>\n<li><strong>지속·반복성</strong> — 횟수·기간·서버 이동.</li>\n<li><strong>객관적 불안·공포</strong> — 일반 게이머 기준.</li>\n<li><strong>"게임은 가상이다" 변명</strong> — 인정 안 됨.</li>\n<li><strong>게임사 로그 보존</strong> — 신고 시점 핵심.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>스토킹 신고 112</strong></li>\n<li><strong>경찰청 사이버범죄 신고 ecrm.police.go.kr</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 디지털 매개 스토킹행위',
        summary:
          '대법원 2022도12037(2023.05.18 선고) 영역에서 법원은 전화를 걸어 상대방 휴대전화에 벨소리·부재중 전화 문구 등이 표시되도록 한 행위가 실제 통화 여부와 무관하게 스토킹처벌법 제2조 제1호 (다)목의 스토킹행위에 해당하는지 여부를 다루며, 통화 자체가 이루어지지 않았더라도 상대방에게 불안감·공포심을 일으키는 정보통신망 송신·도달 행위는 스토킹행위로 평가될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '게임 채팅·친구신청·귓속말 등 디지털 매개 반복 도달도 스토킹행위 평가 영역. 차단 우회는 가중 사유.',
      },
    ],
    faq: [
      {
        question: '게임 안에서만 일어난 일도 스토킹인가요?',
        answer:
          '<strong>게임 내 행위도 객관적 평가 시 스토킹행위로 평가될 수 있는 영역입니다.</strong>',
      },
      {
        question: '가해자가 새 계정으로 계속 접근해요',
        answer:
          '<strong>IP·결제정보로 동일인 입증 가능하며 차단 우회는 가중 사유입니다.</strong>',
      },
      {
        question: '게임사가 로그를 안 줘요',
        answer:
          '<strong>경찰·검찰 영장·사실조회 협조 요청으로 받을 수 있는 영역입니다.</strong>',
      },
      {
        question: '실명·실제 거주지 모를 텐데 가능한가요?',
        answer:
          '<strong>결제정보·통신정보 협조로 신원 확인 후 형사 절차 진행 가능합니다.</strong>',
      },
      {
        question: '잠정조치는 가능한가요?',
        answer:
          '<strong>접근금지·전기통신 금지 잠정조치 신청 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 신고 절차', href: '/guide/stalking/stalking-report-and-restraining-order' },
      { label: '게임 음성채팅 스토킹', href: '/guide/stalking/stalking-online-game-voice-chat-track' },
      { label: '게임 채널 거부', href: '/guide/stalking/stalking-online-game-channel-rejection-track' },
      { label: '온라인 증거 수집', href: '/guide/stalking/stalking-ex-lover-online-evidence-collect' },
      { label: '잠정조치 신청', href: '/guide/stalking/stalking-provisional-measure-application-effect' },
    ],
  },

  // ─── 7. stalking-private-investigator-third-party-commissioned-track ───
  {
    domain: 'stalking',
    slug: 'stalking-private-investigator-third-party-commissioned-track',
    keyword: '흥신소 의뢰 제3자 스토킹',
    questionKeyword: '가해자 본인이 직접 행위하지 않고 흥신소·심부름센터에 의뢰해 모르는 사람이 본인을 추적·조사하는 것 같아요. 의뢰인과 실행자 둘 다 처벌 가능한가요?',
    ctaKeyword: '흥신소 의뢰 제3자 스토킹 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '흥신소 의뢰 제3자 스토킹 — 5단계 의뢰인·실행자 결합 다툼 | 로앤가이드',
      description:
        '가해자가 흥신소·심부름센터에 의뢰해 제3자가 본인을 추적·조사한다면 의뢰인·실행자 결합 5가지 책임 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼한 옛 배우자가 본인에게 직접 연락은 안 오는데 어느 날부터 모르는 차량이 본인 집·직장 주변을 맴돌고, 어린이집 등하원 시간에 누군가 사진을 찍어가는 모습이 CCTV에 포착됐어요. 알아보니 옛 배우자가 흥신소·심부름센터에 의뢰해 본인 일상을 조사·미행시키는 정황입니다. 가해자 본인은 \"내가 한 게 아니다\"라고 빠져나갈까봐 막막한 영역입니다.\" 흥신소 의뢰 스토킹은 ① 스토킹처벌법(공동정범·교사범 검토) ② 의뢰인 = 교사·공모자 책임 ③ 실행자 = 직접 스토킹행위자 책임 ④ 신용정보법·개인정보보호법 결합 가능 ⑤ 형사 + 민사 5가지 트랙이 결합되는 영역. 의뢰인 본인이 행위 안 해도 책임 면제 X. 대응은 ① 증거 ② 추적 ③ 의뢰 입증 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 흥신소 의뢰 스토킹 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·추적·의뢰·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 미행·촬영·접근 증거 보존 (CCTV·블랙박스·사진)</strong></li>\n<li><strong>② 실행자(차량·인상착의·동선) 신원 추적</strong></li>\n<li><strong>③ 의뢰인 - 실행자 연결 입증 (계좌·통화내역)</strong></li>\n<li><strong>④ 스토킹처벌법 + 신용정보법·개인정보법 형사 고소</strong></li>\n<li><strong>⑤ 민사 손해배상 (의뢰인·실행자 공동)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 의뢰인 본인이 직접 행위하지 않아도 교사·공모·공동정범으로 책임 평가 영역. 흥신소·심부름센터의 무허가 조사·미행은 신용정보법·개인정보보호법 위반 결합 가능. 차량 번호판·계좌 송금 흐름이 의뢰-실행 연결의 핵심 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·추적·고소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 미행·촬영·차량 증거 즉시 보존 (CCTV·블랙박스)</strong></li>\n<li><strong>2단계 — 차량 번호·인상착의·동선 정리·경찰 협조 요청</strong></li>\n<li><strong>3단계 — 흥신소 의뢰 정황 정리 + 의뢰인 통화·계좌 흐름</strong></li>\n<li><strong>4단계 — 스토킹처벌법 + 신용정보법 결합 형사 고소</strong></li>\n<li><strong>5단계 — 의뢰인·실행자 공동 민사 손해배상 청구</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 접근금지·처벌 가능성, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">흥신소 의뢰 스토킹 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·차량·의뢰 갈래입니다.</strong></p>\n<ul>\n<li><strong>미행·촬영 사진·동영상·CCTV·블랙박스</strong></li>\n<li><strong>실행자 차량 번호·인상착의·동선 정리표</strong></li>\n<li><strong>의뢰인(가해자) 통화·문자·계좌 송금 자료</strong></li>\n<li><strong>흥신소·심부름센터 사용 정황 자료</strong></li>\n<li><strong>본인 거주·직장·가족 동선 노출 자료</strong></li>\n<li><strong>본인 정신적 피해 진단서·상담 기록</strong></li>\n<li><strong>변호인 의견서·경찰 신고 접수증</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 흥신소 의뢰 사건은 의뢰인-실행자 연결 입증이 관건. 가해자 계좌에서 흥신소 측 계좌로의 송금 흐름·통화 기록이 결정적. 경찰 수사에서는 흥신소 측 거래 장부·녹음 자료도 압수·확인되는 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>의뢰인 책임</strong> — 교사·공모·공동정범.</li>\n<li><strong>실행자 책임</strong> — 직접 스토킹행위자.</li>\n<li><strong>의뢰 입증</strong> — 계좌·통화·녹음.</li>\n<li><strong>신용정보법·개인정보법 결합</strong> — 가중 평가.</li>\n<li><strong>피해자 인식 무관</strong> — 객관적 평가 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>스토킹 신고 112</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 피해자 현실 인식과 객관적 평가',
        summary:
          '대법원 2025도36(2025.10.30 선고) 영역에서 법원은 스토킹처벌법 제2조 제1호 각 목의 행위가 객관적·일반적으로 상대방에게 불안감 또는 공포심을 일으키기에 충분한 정도라고 평가되는 경우 현실적으로 상대방이 위 행위를 인식했는지 또는 그 행위로 불안감을 갖게 되었는지와 관계없이 \'스토킹행위\'에 해당하는지 여부를 다룬 사례 흐름이 있습니다.',
        takeaway: '피해자가 흥신소 미행을 직접 인식 못해도 객관적 평가로 스토킹행위 평가 영역. 의뢰인 책임 트랙.',
      },
    ],
    faq: [
      {
        question: '가해자가 직접 행위 안 했는데 처벌되나요?',
        answer:
          '<strong>교사·공모·공동정범으로 책임 평가 가능한 영역입니다.</strong>',
      },
      {
        question: '흥신소 실행자도 처벌되나요?',
        answer:
          '<strong>직접 스토킹행위자로 별개 책임 부담합니다.</strong>',
      },
      {
        question: '의뢰 입증을 어떻게 하나요?',
        answer:
          '<strong>계좌 송금·통화 기록·흥신소 거래 장부 등이 핵심 자료입니다.</strong>',
      },
      {
        question: '신용정보법 위반도 결합되나요?',
        answer:
          '<strong>무허가 조사·미행은 신용정보법·개인정보보호법 위반 결합 가능합니다.</strong>',
      },
      {
        question: '본인이 미행을 직접 못 봤어도 가능한가요?',
        answer:
          '<strong>객관적 평가로 스토킹행위 평가 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '접근금지·처벌 가능성, AI로 확인하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 신고 절차', href: '/guide/stalking/stalking-report-and-restraining-order' },
      { label: '연예인 사생활 추적', href: '/guide/stalking/stalking-celebrity-fan-private-info-tracking-track' },
      { label: '익명·다중 계정 추적', href: '/guide/stalking/stalking-multiple-anonymous-account-track' },
      { label: '도주 가해자 추적', href: '/guide/stalking/stalking-suspect-absconded-criminal-track' },
      { label: '잠정조치 신청', href: '/guide/stalking/stalking-provisional-measure-application-effect' },
    ],
  },
];
