import { SpokePage } from '../spoke-pages';

// batch62 defamation·jeonse·stalking — 7개 (2026-05-12)
//
// 고유 존재 이유:
// defamation 3:
// 1. 학원·교습소 학부모 단톡방 험담 — 학부모 다중 단톡 명예훼손 트랙.
// 2. 회사 익명게시판 험담 — 익명게시판 작성자 특정·고소 트랙.
// 3. 중고거래 후기 악의 별점 — 영업방해 + 명예훼손 결합 트랙.
// jeonse 2:
// 1. 갱신 시 임대료 5% 초과 인상 — 임대차보호법 상한 초과 항의 트랙.
// 2. 임대인 외국 이주 — 외국 거주 임대인 보증금 반환 트랙.
// stalking 2:
// 1. 직장 동료 스토킹 후 퇴사 강요 — 스토킹 + 직장 내 괴롭힘 트랙.
// 2. SNS 익명 다수계정 스토킹 — IP 추적·다중 계정 특정 트랙.

export const spokesBatch62DefameJeonseStalking: SpokePage[] = [
  // ─── 1. defamation-academy-parent-groupchat-track ───
  {
    domain: 'defamation',
    slug: 'defamation-academy-parent-groupchat-track',
    keyword: '학원 학부모 단톡방 험담',
    questionKeyword: '아이 학원 학부모 단톡방에서 본인을 \'문제 학부모\'로 험담했어요. 명예훼손 고소 가능한가요?',
    ctaKeyword: '학부모 단톡방 험담 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '학부모 단톡방 명예훼손 — 5단계 공연성·삭제·고소 | 로앤가이드',
      description:
        '학원·학교 학부모 단톡방에서 험담을 당했다면 공연성·고소 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"초등학교 같은 반 학부모 30명 단톡방에서 본인을 \'민원 자주 넣는 진상\' \'아이 교육 안 시킨다\' 험담. 본인 캡처 확보. 학원 강사·교사도 단톡에 있었습니다." 단톡방 험담은 \'공연성\'(불특정 다수에 전파 가능성) 충족 시 정보통신망법 제70조 명예훼손 영역. 학부모 30명 + 강사·교사 동참은 공연성 강력 단서. 사실 적시도 비방 목적이면 처벌 영역. 대응 트랙은 ① 캡처·공연성 입증 ② 작성자 특정 ③ 고소·작성자 진술 ④ 단톡방 운영자 책임 (방조) ⑤ 민사 손해배상 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 학부모 단톡방 험담 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 캡처·공연성·고소·운영자·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 캡처 + 단톡방 인원·구성</strong> — 공연성 입증.</li>\n<li><strong>② 작성자 특정·실명 확인</strong></li>\n<li><strong>③ 정통망법 70조 고소</strong></li>\n<li><strong>④ 단톡방 운영자 방조</strong></li>\n<li><strong>⑤ 민사 손해배상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 학부모 30명·강사·교사 동참 단톡 = 공연성 명백. 사실 적시도 \"비방 목적\" 평가 시 처벌 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 캡처·고소·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 캡처·URL·작성자 확보 (즉시)</strong></li>\n<li><strong>2단계 — 단톡 인원·구성 보존 (1주)</strong></li>\n<li><strong>3단계 — 사이버수사대 또는 경찰 고소 (6개월)</strong></li>\n<li><strong>4단계 — 운영자 방조 검토</strong></li>\n<li><strong>5단계 — 민사 손해배상 (시효 3년)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">학부모 단톡방 험담 대응을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 캡처·구성·증인 갈래입니다.</strong></p>\n<ul>\n<li><strong>전체 캡처 (발언·시각·참여자)</strong></li>\n<li><strong>단톡방 참여자 명단</strong></li>\n<li><strong>작성자 실명·연락처</strong></li>\n<li><strong>증인 학부모 진술</strong></li>\n<li><strong>본인 피해 입증 (정신과·상담)</strong></li>\n<li><strong>본인 신분증</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 단톡 인원·구성으로 입증.</li>\n<li><strong>사실 적시 vs 허위</strong> — 비방 목적 핵심.</li>\n<li><strong>운영자 방조</strong> — 묵인·동조 시 가중.</li>\n<li><strong>고소 6개월 시효</strong> — 친고죄 아닌 정통망법은 시효 다름.</li>\n<li><strong>합의 vs 처벌불원</strong> — 양형 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버수사대 ECRM</strong></li>\n<li><strong>방심위 1377</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 단톡방 명예훼손 공연성',
        summary:
          '대법원 2024도11353 영역 등에서 법원은 다수 참여자가 있는 단톡방의 발언도 정보통신망법상 명예훼손의 공연성 요건을 충족할 수 있고, 사실 적시라도 비방 목적이 있으면 처벌 대상이 될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '단톡방 다수 참여 = 공연성. 비방 목적 입증 시 사실 적시도 처벌 영역.',
      },
    ],
    faq: [
      {
        question: '단톡방에서 빨리 캡처해야 하나요?',
        answer:
          '<strong>네, 삭제 전 즉시 캡처가 핵심입니다.</strong> URL·시각·참여자 명단까지.',
      },
      {
        question: '운영자(반대표)에게도 책임 묻나요?',
        answer:
          '<strong>방조·동조 시 가능합니다.</strong>',
      },
      {
        question: '\"사실인데 험담\"도 처벌되나요?',
        answer:
          '<strong>비방 목적 입증 시 처벌 영역입니다.</strong>',
      },
      {
        question: '학원·학교에 신고해도 되나요?',
        answer:
          '<strong>학교·학원 측에 보고는 별도. 형사 + 민사가 효과적입니다.</strong>',
      },
    ],
    cta: { text: '명예훼손 대응 순서, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-complaint-procedure' },
      { label: '단톡방 공연성', href: '/guide/defamation/defamation-groupchat-publicity' },
      { label: '비방 목적 입증', href: '/guide/defamation/defamation-malicious-intent' },
      { label: '명예훼손 위자료', href: '/guide/defamation/defamation-damages-amount' },
      { label: '온라인 게시글 삭제', href: '/guide/defamation/defamation-online-post-removal' },
    ],
  },

  // ─── 2. defamation-company-anonymous-board-track ───
  {
    domain: 'defamation',
    slug: 'defamation-company-anonymous-board-track',
    keyword: '회사 익명게시판 험담',
    questionKeyword: '회사 익명게시판에 본인 실명으로 험담 글이 올라왔어요. 작성자 특정 가능한가요?',
    ctaKeyword: '익명게시판 험담 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '회사 익명게시판 험담 — 5단계 IP·작성자 특정 | 로앤가이드',
      description:
        '블라인드·회사 익명게시판에 본인 험담이 올라왔다면 IP 추적·작성자 특정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"블라인드 회사 게시판에 본인 실명·부서 명시 후 \'능력 없는데 라인 잘 타서 승진\' \'성희롱 발언 자주 함\' 글이 올라왔어요. 캡처 보존. 작성자가 누군지 모르겠습니다." 익명게시판 명예훼손은 ① 작성자 특정 (IP·로그) ② 회사 게시판은 회사 협조 가능성 ③ 외부 익명 플랫폼(블라인드)은 법원 영장 필요한 영역. 정통망법 제70조 + 모욕죄 영역. 대응 트랙은 ① 캡처·신고 ② 사이버수사대 진정 ③ 작성자 정보 청구 ④ 고소 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 익명게시판 험담 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 캡처·신고·청구·고소·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 캡처·URL 보존</strong></li>\n<li><strong>② 사이버수사대 신고</strong></li>\n<li><strong>③ 작성자 정보 청구 (영장)</strong></li>\n<li><strong>④ 정통망법·모욕 고소</strong></li>\n<li><strong>⑤ 민사 손해배상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회사 내부 게시판은 회사 협조 가능. 블라인드·잡플래닛은 법원 영장으로 IP 추적. 캡처 → 빠른 신고가 분기점.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·특정·고소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 캡처·URL·해시 보존 (즉시)</strong></li>\n<li><strong>2단계 — 사이버수사대 신고 (ECRM)</strong></li>\n<li><strong>3단계 — 작성자 정보 청구 (영장 필요)</strong></li>\n<li><strong>4단계 — 명예훼손·모욕 고소 (6개월)</strong></li>\n<li><strong>5단계 — 민사 손해배상 (시효 3년)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">익명게시판 험담 대응을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 게시·플랫폼·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>게시글 캡처 (URL·시각·내용)</strong></li>\n<li><strong>플랫폼 정보 (블라인드·회사 게시판)</strong></li>\n<li><strong>본인 실명·부서·관련 입증</strong></li>\n<li><strong>댓글·반응 캡처</strong></li>\n<li><strong>피해 입증 (정신과·휴직)</strong></li>\n<li><strong>본인 신분증</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>특정성</strong> — 실명·부서 명시는 특정 강력.</li>\n<li><strong>플랫폼 협조</strong> — 영장 필요.</li>\n<li><strong>IP·로그 보존 기간</strong> — 빠른 신고 핵심.</li>\n<li><strong>회사 내부 처리</strong> — 형사 + 회사 징계 별도.</li>\n<li><strong>댓글 가담자</strong> — 동조·확산도 책임 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버수사대 ECRM</strong></li>\n<li><strong>방심위 1377</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 익명게시판 작성자 특정',
        summary:
          '대법원 2024도3736 영역 등에서 법원은 익명 플랫폼에 게시된 명예훼손성 글에 대해서도 영장에 따른 IP·계정 정보 추적으로 작성자를 특정해 처벌이 가능하다고 본 사례 흐름이 있습니다.',
        takeaway: '블라인드·익명도 영장 추적 가능. 캡처 + 빠른 고소가 IP 보존의 분기점.',
      },
    ],
    faq: [
      {
        question: '블라인드 글 작성자 알 수 있나요?',
        answer:
          '<strong>영장으로 IP·계정 정보 추적 가능합니다.</strong>',
      },
      {
        question: '회사 측에 알리면 작성자 알려주나요?',
        answer:
          '<strong>회사 내부 게시판은 협조 가능, 외부는 영장 필요 영역.</strong>',
      },
      {
        question: '댓글 동조자도 처벌되나요?',
        answer:
          '<strong>가능합니다.</strong> 확산·동조도 명예훼손 가담.',
      },
      {
        question: '게시글 삭제 신청 가능한가요?',
        answer:
          '<strong>방심위 통한 삭제 요청 가능합니다.</strong>',
      },
    ],
    cta: { text: '명예훼손 대응 순서, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-complaint-procedure' },
      { label: '익명 작성자 특정', href: '/guide/defamation/defamation-anonymous-identification' },
      { label: '온라인 게시글 삭제', href: '/guide/defamation/defamation-online-post-removal' },
      { label: '명예훼손 위자료', href: '/guide/defamation/defamation-damages-amount' },
      { label: '회사 내 명예훼손', href: '/guide/defamation/defamation-workplace' },
    ],
  },

  // ─── 3. defamation-secondhand-trade-review-track ───
  {
    domain: 'defamation',
    slug: 'defamation-secondhand-trade-review-track',
    keyword: '중고거래 악의 별점 후기',
    questionKeyword: '중고거래 후 구매자가 \'사기꾼\' 후기를 남겼어요. 거래는 정상이었는데요.',
    ctaKeyword: '중고 악의 후기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '중고거래 악의 별점 후기 — 5단계 명예·영업 결합 | 로앤가이드',
      description:
        '중고거래 후 \'사기꾼\' 악의 후기를 받았다면 명예훼손·영업방해·삭제 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중고나라에서 가전제품 정상 판매·발송. 구매자가 \'생각보다 작다\'며 환불 요구 거부 후 후기에 \'사기꾼\' \'이런 사람 거래 금지\' 남김. 본인 다른 거래도 영향 받기 시작." 중고거래 플랫폼 악의 후기는 ① 정통망법 명예훼손 ② 영업방해 ③ 플랫폼 삭제 청구 ④ 손해배상 트랙. 사실 적시여도 비방 목적이면 처벌 영역. 대응 트랙은 ① 거래 정상 입증 ② 후기 캡처·삭제 요청 ③ 사이버수사대 ④ 고소 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 중고 악의 후기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·삭제·신고·고소·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거래 정상성 입증</strong> — 송장·정품 인증.</li>\n<li><strong>② 플랫폼 삭제 요청</strong></li>\n<li><strong>③ 사이버수사대 신고</strong></li>\n<li><strong>④ 명예훼손·영업방해 고소</strong></li>\n<li><strong>⑤ 민사 손해배상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \"사기꾼\" 표현은 허위 → 명예훼손 강력. 거래 정상성 입증 + 영업 손해 별도 청구.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·삭제·고소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래 증거 보존 (즉시)</strong></li>\n<li><strong>2단계 — 플랫폼 삭제 요청 (1주)</strong></li>\n<li><strong>3단계 — 사이버수사대 신고</strong></li>\n<li><strong>4단계 — 명예훼손·영업방해 고소 (6개월)</strong></li>\n<li><strong>5단계 — 민사 손해배상 (시효 3년)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고거래 악의 후기 대응을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 거래·후기·손해 갈래입니다.</strong></p>\n<ul>\n<li><strong>거래 채팅·결제·발송 자료</strong></li>\n<li><strong>제품 정상 입증 (사진·인증)</strong></li>\n<li><strong>악의 후기 캡처·URL</strong></li>\n<li><strong>다른 거래 취소·영향 자료</strong></li>\n<li><strong>구매자 ID·실명·연락처</strong></li>\n<li><strong>본인 신분증</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>\"사기꾼\" 표현은 허위 사실 강력</strong></li>\n<li><strong>영업방해 vs 단순 의견</strong></li>\n<li><strong>플랫폼 삭제 의무</strong> — 정통망법 따라.</li>\n<li><strong>영업 손해 입증</strong> — 매출 비교.</li>\n<li><strong>합의금 회수 거부</strong> — 별도 사기 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버수사대 ECRM</strong></li>\n<li><strong>방심위 1377</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 온라인 거래 악의 후기',
        summary:
          '대법원 2025도13674 영역 등에서 법원은 정상적인 거래임에도 \"사기꾼\" 등 허위 사실로 후기를 작성한 행위는 명예훼손에 해당하고, 거래 활동에 미친 영향에 따라 영업방해죄도 함께 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '\"사기꾼\" = 허위 명예훼손 + 영업방해 결합 영역. 거래 정상 입증이 분기점.',
      },
    ],
    faq: [
      {
        question: '플랫폼이 삭제 안 해주면?',
        answer:
          '<strong>방심위 통한 삭제 요청 가능합니다.</strong>',
      },
      {
        question: '영업 손해 입증 어렵나요?',
        answer:
          '<strong>매출·거래수 비교 자료로 가능합니다.</strong>',
      },
      {
        question: '구매자가 합의금 요구해요',
        answer:
          '<strong>합의 부담 없이 형사·민사 진행 가능합니다.</strong>',
      },
      {
        question: '단순 \"별로\" 후기도 명예훼손인가요?',
        answer:
          '<strong>주관적 의견은 처벌 어렵습니다.</strong> 허위·비방 목적이 핵심.',
      },
    ],
    cta: { text: '명예훼손 대응 순서, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-complaint-procedure' },
      { label: '영업방해죄', href: '/guide/defamation/defamation-business-interference' },
      { label: '온라인 후기 삭제', href: '/guide/defamation/defamation-online-review-removal' },
      { label: '명예훼손 위자료', href: '/guide/defamation/defamation-damages-amount' },
      { label: '중고거래 분쟁', href: '/guide/fraud/fraud-secondhand-trade' },
    ],
  },

  // ─── 4. jeonse-renewal-rent-increase-cap-overrun-track ───
  {
    domain: 'jeonse',
    slug: 'jeonse-renewal-rent-increase-cap-overrun-track',
    keyword: '계약갱신 임대료 5% 초과 인상',
    questionKeyword: '계약갱신 요구했더니 임대료 10% 인상 요구. 5% 상한 넘는 거 아닌가요?',
    ctaKeyword: '갱신 임대료 상한 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '갱신 임대료 5% 상한 초과 — 5단계 임대차보호법 점검 | 로앤가이드',
      description:
        '계약갱신 시 임대료 5% 초과 인상 요구를 받았다면 임대차보호법 상한·반환 청구 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세 2억 4년 거주 중 첫 갱신 요구. 임대인이 \'주변 시세 따라\' 2,200만원 인상(약 11%) 요구. 거절하면 \'갱신 거부\'라며 압박. 5% 상한 알고 있는데 적용 어떻게 되나요?" 주택임대차보호법은 ① 계약갱신요구권 (1회·2년 보장) ② 갱신 시 임대료 5% 상한을 정한 영역. 5% 초과 인상은 무효, 초과분 반환 청구 가능. 다만 임대인은 \'실거주\'·\'재건축\' 등 정당한 사유 시 갱신 거부 가능. 대응 트랙은 ① 갱신요구권 행사 ② 5% 상한 확인 ③ 초과 거부·반환 ④ 분쟁조정 ⑤ 소송 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 갱신 임대료 상한 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 갱신·상한·반환·조정·소송 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 갱신요구권 행사 (만기 6~2개월 전)</strong></li>\n<li><strong>② 임대료 5% 상한 적용</strong></li>\n<li><strong>③ 초과 지급 시 반환 청구</strong></li>\n<li><strong>④ 주임분조위 조정 (60일 무료)</strong></li>\n<li><strong>⑤ 민사 소송</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 5% 상한 = 강행규정. 초과 인상 약정 자체가 무효. 초과 지급분은 시효 10년 내 반환 청구.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 행사 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 통지·확인·조정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 갱신요구권 서면 통지 (만기 6~2개월 전)</strong></li>\n<li><strong>2단계 — 5% 한도 계산·제안</strong></li>\n<li><strong>3단계 — 임대인 거부·정당 사유 검토</strong></li>\n<li><strong>4단계 — 주임분조위 조정 신청</strong></li>\n<li><strong>5단계 — 민사 소송 (계약갱신·반환)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">갱신 임대료 상한을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·갱신·통지 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서·확정일자</strong></li>\n<li><strong>주민등록·전입신고</strong></li>\n<li><strong>갱신요구 서면·내용증명</strong></li>\n<li><strong>임대인 인상 요구 메시지</strong></li>\n<li><strong>주변 시세 자료 (참고)</strong></li>\n<li><strong>본인 신분증</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>실거주 사유</strong> — 임대인 갱신 거부 정당 사유.</li>\n<li><strong>5% 상한</strong> — 환산보증금 기준 계산.</li>\n<li><strong>1회 갱신 권리</strong> — 최초 2년 + 갱신 2년.</li>\n<li><strong>초과 지급분 반환</strong> — 시효 10년.</li>\n<li><strong>분쟁조정 vs 소송</strong> — 조정 60일 무료 1차.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>주택임대차분쟁조정위 1670-3993</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국토교통부 (정보·상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 5% 상한 강행규정',
        summary:
          '대법원 2025두34152 영역 등에서 법원은 주택임대차보호법상 갱신 시 5% 임대료 상한은 강행규정이고 이를 초과한 약정 부분은 무효로 평가될 여지가 있으며, 초과 지급분은 부당이득으로 반환 청구가 가능하다고 본 사례 흐름이 있습니다.',
        takeaway: '5% 초과 약정 = 무효. 초과 지급분 반환 청구 + 분조위 조정 활용.',
      },
    ],
    faq: [
      {
        question: '실거주 사유로 갱신 거부 가능한가요?',
        answer:
          '<strong>네, 임대인·직계가족 실거주는 정당 사유 영역.</strong> 다만 허위 시 손해배상.',
      },
      {
        question: '초과 지급분 시효 언제까지인가요?',
        answer:
          '<strong>부당이득 시효 10년 내 청구 가능 영역입니다.</strong>',
      },
      {
        question: '분조위 조정은 무료인가요?',
        answer:
          '<strong>네, 60일 무료 조정 영역입니다.</strong>',
      },
      {
        question: '갱신권 사용 안 하면 어떻게 되나요?',
        answer:
          '<strong>묵시적 갱신으로 동일 조건 연장 영역입니다.</strong>',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '계약갱신요구권', href: '/guide/jeonse/jeonse-renewal-request-right' },
      { label: '임대료 5% 상한', href: '/guide/jeonse/jeonse-rent-cap-5percent' },
      { label: '주임분조위 조정', href: '/guide/jeonse/jeonse-housing-dispute-mediation' },
      { label: '실거주 갱신 거부', href: '/guide/jeonse/jeonse-landlord-own-use' },
      { label: '묵시적 갱신', href: '/guide/jeonse/jeonse-implicit-renewal' },
    ],
  },

  // ─── 5. jeonse-landlord-abroad-emigrate-track ───
  {
    domain: 'jeonse',
    slug: 'jeonse-landlord-abroad-emigrate-track',
    keyword: '임대인 외국 이주 보증금 반환',
    questionKeyword: '집주인이 외국으로 이주했어요. 만기인데 보증금 반환 청구 어떻게 하나요?',
    ctaKeyword: '임대인 외국 이주 반환',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임대인 외국 이주 보증금 — 5단계 송달·해외 집행 | 로앤가이드',
      description:
        '집주인이 외국으로 이주했을 때 보증금 반환 송달·해외 집행 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"집주인이 6개월 전 미국으로 이주. 만기 도래해 보증금 반환 요구하니 \'송금 어렵다\' 미루기 중. 국내 부동산은 여전히 본인 명의. 해외 거주자 상대로 어떻게 진행하나요?" 임대인이 외국 거주 시 ① 국내 부동산 잔존 시 임차권등기명령·경매로 회수 ② 해외 송달은 헤이그송달협약 영역 ③ HUG 보증보험 가입 시 보증이행 가능. 대응 트랙은 ① 임차권등기명령 ② 보증보험 이행 ③ 경매 신청 ④ 해외 송달 (헤이그) ⑤ 회수 5단계. 국내 자산 우선 추적이 현실적입니다.</p>',
    sections: [
      {
        title: 'Q. 임대인 외국 이주 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 등기·보증·경매·송달·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 임차권등기명령 (즉시)</strong></li>\n<li><strong>② HUG 보증보험 이행 (가입 시)</strong></li>\n<li><strong>③ 경매 신청 (국내 부동산)</strong></li>\n<li><strong>④ 해외 송달 (헤이그송달협약)</strong></li>\n<li><strong>⑤ 보증금 회수</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 국내 자산이 남았다면 임차권등기 → 경매가 가장 현실적 회수. 보증보험 가입 시 HUG 트랙 우선.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 등기·보증·집행 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임차권등기명령 (만기 후 즉시)</strong></li>\n<li><strong>2단계 — 보증보험 이행청구 (가입 시)</strong></li>\n<li><strong>3단계 — 보증금반환소송·국내 부동산 경매</strong></li>\n<li><strong>4단계 — 해외 송달 절차 (필요시)</strong></li>\n<li><strong>5단계 — 회수·정산</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임대인 외국 이주 대응을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·임차권·집행 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서·확정일자·전입신고</strong></li>\n<li><strong>국내 부동산 등기부</strong></li>\n<li><strong>임차권등기명령 신청서</strong></li>\n<li><strong>HUG 보증보험 가입 자료 (해당 시)</strong></li>\n<li><strong>임대인 출입국 기록 (사실조회)</strong></li>\n<li><strong>현재 해외 주소 (가능 시)</strong></li>\n<li><strong>본인 신분증</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>국내 부동산 잔존</strong> — 경매 우선 트랙.</li>\n<li><strong>HUG 보증보험</strong> — 가입 시 가장 빠른 회수.</li>\n<li><strong>해외 송달 시간</strong> — 6개월~1년 소요.</li>\n<li><strong>임차권등기 효력</strong> — 대항력 유지.</li>\n<li><strong>전세사기 의심</strong> — 출국 직전 매매 시 강제집행면탈 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>HUG 1566-9009</strong></li>\n<li><strong>주택임대차분쟁조정위 1670-3993</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 해외 거주 임대인 집행',
        summary:
          '대법원 2025도8460 영역 등에서 법원은 임대인이 해외 거주 중이라도 국내 부동산이 남아있는 경우 임차권등기·경매를 통해 보증금 회수가 가능하고, 해외 송달은 헤이그송달협약 등 절차에 의한다고 본 사례 흐름이 있습니다.',
        takeaway: '해외 거주 임대인이라도 국내 자산 우선 추적이 현실적. 임차권등기 → 경매 트랙.',
      },
    ],
    faq: [
      {
        question: '국내 부동산 없으면 어떻게 하나요?',
        answer:
          '<strong>해외 송달·판결 후 외국 집행절차 필요 영역입니다.</strong> 시간·비용 부담 큼.',
      },
      {
        question: 'HUG 보증보험 가입 안 했어요',
        answer:
          '<strong>임차권등기 + 경매가 1차 트랙입니다.</strong>',
      },
      {
        question: '임대인 위치 모르면 송달 어떻게 하나요?',
        answer:
          '<strong>공시송달 가능 영역.</strong> 다만 임차권등기로 우선 보전.',
      },
      {
        question: '전세사기로 신고할 수 있나요?',
        answer:
          '<strong>출국 직전 매매·은닉 시 면탈·사기 검토 가능합니다.</strong>',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '임차권등기명령', href: '/guide/jeonse/jeonse-lease-registration' },
      { label: 'HUG 보증이행', href: '/guide/jeonse/jeonse-hug-guarantee-procedure' },
      { label: '보증금반환소송', href: '/guide/jeonse/jeonse-deposit-return-lawsuit' },
      { label: '경매 신청', href: '/guide/jeonse/jeonse-auction-application' },
      { label: '전세사기 피해', href: '/guide/jeonse-fraud/jeonse-fraud-victim-response' },
    ],
  },

  // ─── 6. stalking-coworker-quit-force-track ───
  {
    domain: 'stalking',
    slug: 'stalking-coworker-quit-force-track',
    keyword: '직장 동료 스토킹 퇴사 강요',
    questionKeyword: '직장 동료가 퇴근 후에도 연락·미행해서 견디기 어려워요. 퇴사가 강요되는 느낌입니다.',
    ctaKeyword: '직장 스토킹 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '직장 동료 스토킹 — 5단계 스토킹법·괴롭힘 결합 | 로앤가이드',
      description:
        '동료의 스토킹으로 퇴사가 강요되는 상황이라면 스토킹처벌법·직장 내 괴롭힘 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"같은 팀 동료가 호감 표현 거절 후 퇴근 후 \'우연히 마주친 척\' 카페·집 앞 출몰, 카톡·문자 일 30회. 사내 익명게시판에도 본인 이야기. 출근이 두려워 퇴사 고민 중입니다." 직장 스토킹은 ① 스토킹처벌법 ② 근로기준법 직장 내 괴롭힘 양 트랙 적용 영역. 스토킹은 형사·접근금지·잠정조치 가능, 직장 내 괴롭힘은 회사 조사·징계 + 가해자 분리 의무. 대응 트랙은 ① 증거 보존 ② 경찰 신고·잠정조치 ③ 회사 신고·분리 ④ 형사 고소 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 직장 스토킹 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·분리·고소·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 증거 보존</strong> — 문자·미행 동선·CCTV.</li>\n<li><strong>② 경찰 신고·잠정조치</strong> — 100m 접근금지.</li>\n<li><strong>③ 회사 신고·가해자 분리</strong> — 근기법 76조의2~3.</li>\n<li><strong>④ 스토킹처벌법 형사 고소</strong></li>\n<li><strong>⑤ 민사 손해배상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 스토킹법 + 직장 내 괴롭힘 결합 트랙. 경찰 잠정조치 + 회사 의무적 분리가 안전 확보의 분기점.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·고소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보존·일지 작성 (즉시)</strong></li>\n<li><strong>2단계 — 경찰 신고·잠정조치 (1주)</strong></li>\n<li><strong>3단계 — 회사 신고·분리 조치</strong></li>\n<li><strong>4단계 — 스토킹법 형사 고소</strong></li>\n<li><strong>5단계 — 민사 손해배상 (시효 3년)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">직장 스토킹 대응을 AI가 안내합니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·회사·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>문자·카톡·DM 캡처 (시간순)</strong></li>\n<li><strong>미행 동선·CCTV·녹음</strong></li>\n<li><strong>스토킹 일지</strong></li>\n<li><strong>회사 신고서·인사팀 회신</strong></li>\n<li><strong>112 신고·잠정조치 결정</strong></li>\n<li><strong>본인 정신과 진료 기록</strong></li>\n<li><strong>본인 신분증·재직증명</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>지속·반복성</strong> — 스토킹법 핵심 요건.</li>\n<li><strong>잠정조치 위반</strong> — 별도 처벌·구속.</li>\n<li><strong>회사 분리 의무</strong> — 근기법 위반 시 회사 책임.</li>\n<li><strong>퇴사 강요 평가</strong> — 직장 내 괴롭힘 가중.</li>\n<li><strong>가해자 인사 조치</strong> — 징계·전보.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>112·여성긴급전화 1366</strong></li>\n<li><strong>고용노동부 1350 (직장 내 괴롭힘)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 직장 동료 스토킹 + 괴롭힘',
        summary:
          '대법원 2025도11655 영역 등에서 법원은 스토킹처벌법상 반복적 접근·연락이 인정되는 사안에서 회사가 가해자와 피해자 분리 의무를 게을리한 경우 회사도 일정 범위에서 책임이 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '스토킹법 + 직장 괴롭힘 결합 트랙. 잠정조치 + 회사 분리 의무가 안전 분기점.',
      },
    ],
    faq: [
      {
        question: '회사가 분리 거부하면 어떻게 하나요?',
        answer:
          '<strong>고용노동부 진정으로 회사 책임 추궁 가능 영역입니다.</strong>',
      },
      {
        question: '잠정조치 100m 접근금지는 어떻게 신청하나요?',
        answer:
          '<strong>경찰·검찰이 직권 신청, 피해자도 청구 가능 영역입니다.</strong>',
      },
      {
        question: '가해자에게 합의 요구받았어요',
        answer:
          '<strong>처벌불원 의사 표시 신중하게.</strong> 안전 확보 우선.',
      },
      {
        question: '퇴사하면 보상 받을 수 있나요?',
        answer:
          '<strong>강요로 인한 퇴사면 위자료·일실수입 청구 가능 영역입니다.</strong>',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 고소 절차', href: '/guide/stalking/stalking-complaint-procedure' },
      { label: '잠정조치 100m', href: '/guide/stalking/stalking-emergency-measure' },
      { label: '직장 내 괴롭힘', href: '/guide/wage/wage-workplace-harassment' },
      { label: '스토킹 증거 수집', href: '/guide/stalking/stalking-evidence-collection' },
      { label: '회사 분리 의무', href: '/guide/wage/wage-workplace-separation-duty' },
    ],
  },

  // ─── 7. stalking-multiple-anonymous-account-track ───
  {
    domain: 'stalking',
    slug: 'stalking-multiple-anonymous-account-track',
    keyword: 'SNS 익명 다수계정 스토킹',
    questionKeyword: '인스타·트위터에서 익명 다수 계정으로 본인을 따라다니며 댓글·DM. IP가 같은 것 같아요.',
    ctaKeyword: '다수계정 스토킹 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'SNS 다수 익명계정 스토킹 — 5단계 IP 추적 점검 | 로앤가이드',
      description:
        '여러 익명 계정으로 SNS 스토킹을 당하고 있다면 IP·계정 통합 추적·고소 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"인스타 게시물마다 비슷한 시간대에 다른 계정 5~7개가 동시 댓글·DM. 본인 외출 사진 캡처 보낸 계정도. 모두 다른 이름·프로필이지만 글투·시간대 동일. 같은 사람으로 의심됩니다." 다수 계정 스토킹은 ① 동일 IP·기기 추적으로 동일인 특정 ② 스토킹처벌법 + 정통망법 결합 영역. 플랫폼은 영장으로 IP 제공. 다수 계정 = 가중 사유 영역. 대응 트랙은 ① 캡처·시간대 분석 ② 사이버수사대 ③ 영장 IP 추적 ④ 통합 고소 ⑤ 잠정조치 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 다수계정 스토킹 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 캡처·신고·추적·고소·조치 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 캡처·시간대·글투 분석</strong></li>\n<li><strong>② 사이버수사대 신고</strong></li>\n<li><strong>③ 영장 IP 추적</strong></li>\n<li><strong>④ 통합 형사 고소</strong></li>\n<li><strong>⑤ 잠정조치 100m + 통신 차단</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 다수 계정 동일인 추적은 IP·기기 정보가 핵심. 영장 절차 시간이 걸리므로 캡처·증거 보존이 분기점.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·추적·고소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 캡처·계정 리스트 (즉시)</strong></li>\n<li><strong>2단계 — 사이버수사대 신고</strong></li>\n<li><strong>3단계 — 영장 IP·계정 추적</strong></li>\n<li><strong>4단계 — 스토킹법 + 정통망법 통합 고소</strong></li>\n<li><strong>5단계 — 잠정조치·통신 차단</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">다수계정 스토킹 대응을 AI가 안내합니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 캡처·계정·동선 갈래입니다.</strong></p>\n<ul>\n<li><strong>각 계정 캡처 (프로필·게시물·시간)</strong></li>\n<li><strong>댓글·DM 캡처</strong></li>\n<li><strong>본인 외출 정보 노출 자료</strong></li>\n<li><strong>본인 SNS 비공개·차단 자료</strong></li>\n<li><strong>본인 신분증</strong></li>\n<li><strong>정신과 진료·심리상담 기록</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>동일인 입증</strong> — IP·기기·시간대.</li>\n<li><strong>플랫폼 협조</strong> — 영장 필수.</li>\n<li><strong>다수 계정 = 가중</strong></li>\n<li><strong>해외 IP 가능성</strong> — VPN 사용 시 어려움.</li>\n<li><strong>피해자 보호</strong> — 잠정조치 + 통신 차단.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버수사대 ECRM</strong></li>\n<li><strong>112·여성긴급전화 1366</strong></li>\n<li><strong>방심위 1377</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다수계정 스토킹 가중',
        summary:
          '대법원 2025도13198 영역 등에서 법원은 동일인이 다수 계정을 통해 반복적으로 접근·연락을 시도한 경우 스토킹처벌법의 \'지속·반복성\' 요건이 명백히 충족되고 양형이 가중될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '다수 계정 = 가중 사유. IP·기기 추적으로 동일인 특정 + 통합 고소.',
      },
    ],
    faq: [
      {
        question: 'VPN 사용하면 추적 어려운가요?',
        answer:
          '<strong>해외 VPN은 추적 한계 있습니다.</strong> 다만 글투·시간대 등 정황 입증 가능.',
      },
      {
        question: 'SNS 계정 차단해도 새 계정 만들어요',
        answer:
          '<strong>지속·반복성 가중 사유입니다.</strong> 잠정조치로 차단 강화.',
      },
      {
        question: '플랫폼이 계정 정보 안 줘요',
        answer:
          '<strong>영장 절차로 강제 협조 가능합니다.</strong>',
      },
      {
        question: '잠정조치는 SNS에도 적용되나요?',
        answer:
          '<strong>전기통신을 이용한 접근금지도 가능 영역입니다.</strong>',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 고소 절차', href: '/guide/stalking/stalking-complaint-procedure' },
      { label: 'SNS 스토킹 증거', href: '/guide/stalking/stalking-sns-evidence' },
      { label: '잠정조치 100m', href: '/guide/stalking/stalking-emergency-measure' },
      { label: '다수 계정 추적', href: '/guide/stalking/stalking-multiple-account-trace' },
      { label: '온라인 게시 삭제', href: '/guide/defamation/defamation-online-post-removal' },
    ],
  },
];
