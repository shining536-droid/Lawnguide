import { SpokePage } from '../spoke-pages';

// batch78 defamation + jeonse-fraud — 6개 (2026-05-26) = 3+3
//
// 고유 존재 이유:
// defamation 3:
// 1. 온라인 카페 익명글 허위사실 명예훼손 — '익명 커뮤니티 + 비방 목적 + 정보통신망법 제70조' 트랙 (victim)
// 2. 단톡방 욕설·경멸 표현 모욕 — '단톡방 모욕 + 전파가능성 공연성 + 형법 제311조' 트랙 (victim)
// 3. 공익 제보글 사실적시 명예훼손 혐의 — '진실·공익 위법성 조각 항변 + 혐의를 받는 입장 방어' 트랙 (accused)
//
// jeonse-fraud 3:
// 4. 깡통전세 HUG 보증이행 청구 거절·이의 — '보증이행 심사 + 우선변제권 + 면책에도 보호' 트랙 (victim)
// 5. 계약갱신 후 해지 통지 보증금 미반환 — '갱신요구권 + 해지통지 3개월 + 만기 보증금' 트랙 (victim)
// 6. 임대인 변경 후 보증금 승계 깡통전세 — '소유권 양도·승계 + 불가분채무 + 보증금 청구 대상' 트랙 (victim)

export const spokesBatch78DefameJeonseFraud: SpokePage[] = [
  // ─── 1. defamation-anonymous-cafe-false-fact-network-act-track (victim) ───
  {
    domain: 'defamation',
    slug: 'defamation-anonymous-cafe-false-fact-network-act-track',
    keyword: '온라인 카페 익명글 허위사실 명예훼손',
    questionKeyword: '지역 온라인 카페에 누군가 익명으로 저에 대한 허위사실을 올려 회원들 사이에서 평판이 크게 떨어졌어요. 정보통신망법으로 대응할 수 있나요?',
    ctaKeyword: '온라인 카페 익명글 허위사실 명예훼손 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '온라인 카페 익명글 허위사실 명예훼손 — 5단계 점검 | 로앤가이드',
      description:
        '지역 카페에 익명으로 허위사실이 올라와 평판이 무너졌다면 정보통신망법 제70조 비방 목적·공연성 5가지 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"수천 명이 가입한 지역 온라인 카페에 누군가 익명 아이디로 \'그 사람이 돈을 떼먹고 잠적했다·이웃에게 사기를 쳤다\'는 허위사실을 사실인 양 올렸습니다. 글에는 본인이 누구인지 알아볼 수 있는 동네·직업 정보가 섞여 있었고, 댓글로 추측성 반응이 줄줄이 달리면서 동네에서 마주치는 사람들이 본인을 피하기 시작했어요. 작성자는 닉네임만 쓰고 있어 누구인지 특정하기 어렵습니다." 정보통신망법 제70조는 \'비방할 목적으로 정보통신망을 통해 공공연하게 거짓 사실을 드러내어 명예를 훼손한 행위\'를 규정하고, 형법 제307조는 \'공연히 허위사실을 적시해 명예를 훼손한 행위\'를 규정합니다. 카페 익명글 + 다수 회원 열람 + 본인 식별 가능 정보 결합은 비방 목적·공연성 평가가 가능한 트랙. 피해자라면 ① 글 보존 ② 카페 신고 ③ 작성자 특정 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 온라인 카페 익명글 허위사실 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·신고·특정·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 게시글 보존</strong> — 글·댓글 캡처·URL·작성 시각·열람 수 보존.</li>\n<li><strong>② 카페 신고·삭제 요청</strong> — 운영자·포털 권리침해 신고 + 임시조치 요청.</li>\n<li><strong>③ 작성자 특정</strong> — 닉네임·가입정보·IP 확인을 수사기관 통해 검토.</li>\n<li><strong>④ 형사 고소</strong> — 정보통신망법 제70조·형법 제307조 허위사실 명예훼손 검토.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 위자료·정신적 피해 청구(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정보통신망법 제70조는 비방 목적과 사회적 평가 저하가 별개의 구성요건으로 검토되는 영역이라, 익명 아이디라도 비방 정황·반복성·식별 가능 정보가 핵심 자료. 삭제 전 원본 캡처 보존이 우선입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·신고·고소 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 글·댓글 즉시 보존 (인지 당일)</strong> — 캡처·URL·작성 시각·닉네임·열람 수.</li>\n<li><strong>2단계 — 카페 운영자·포털 권리침해 신고 (1주 내)</strong> — 삭제·임시조치 요청.</li>\n<li><strong>3단계 — 방송통신심의위원회 심의 신청 (병행)</strong> — 반복 게시 삭제·차단 검토.</li>\n<li><strong>4단계 — 경찰 고소 + 작성자 특정 (1개월 내)</strong> — 정보통신망법 제70조 + 닉네임·IP 확인 검토.</li>\n<li><strong>5단계 — 민사 손해배상 청구 (시효 3년)</strong> — 위자료·정신적 피해 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인 카페 익명글 허위사실 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·허위 반박·손해 갈래입니다.</strong></p>\n<ul>\n<li><strong>게시글·댓글 캡처 (URL·작성 시각·닉네임·열람 수 포함)</strong></li>\n<li><strong>허위사실 반박 자료 (실제 거래 내역·정황 증빙)</strong></li>\n<li><strong>본인 식별 가능 정보가 포함된 부분 표시 자료</strong></li>\n<li><strong>카페·포털 신고 접수·처리 결과 캡처</strong></li>\n<li><strong>작성자 닉네임 활동 이력·연관 정황</strong></li>\n<li><strong>주변 회원의 반응·2차 확산 정황 자료</strong></li>\n<li><strong>정신적 피해 정황 자료 (진료·상담 기록, 필요 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 익명글은 작성자가 글을 지우면 추적이 어려워지므로 인지 즉시 전체 화면(URL·시각 포함) 캡처가 우선입니다. 댓글로 2차 확산된 정황도 함께 보존해두면 피해 범위 입증에 도움이 되는 자료입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>허위 vs 의견</strong> — 단정적 허위사실 적시인지 추측성 의견인지 평가.</li>\n<li><strong>비방 목적</strong> — 사회적 평가 저하와 별개의 구성요건으로 검토되는 영역.</li>\n<li><strong>공연성</strong> — 다수 회원이 열람하는 카페는 공연성 평가가 가능한 영역.</li>\n<li><strong>특정 가능성</strong> — 동네·직업 정보로 본인 식별이 어느 범위까지 가능한지.</li>\n<li><strong>작성자 특정</strong> — 익명 닉네임은 수사기관 통한 IP·가입정보 확인 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보분쟁조정위원회 (kopico.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망법 비방 목적과 공공의 이익 평가 영역',
        summary:
          '대법원 2022도699(대법원, 2024.01.04 선고) 영역에서 법원은 정보통신망법 제70조 명예훼손죄가 성립하려면 사회적 평가를 떨어뜨릴 사실 인식과 별개로 비방할 목적이 있어야 하고, 모든 구성요건의 증명책임은 검사에게 있다고 판시했습니다. 익명 카페글에서도 비방 목적·공공의 이익 여부가 핵심 평가 트랙으로 검토될 수 있습니다.',
        takeaway: '비방 목적은 사회적 평가 저하와 별개로 검토되는 영역 — 원본 보존 + 비방 정황 정리 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '익명 닉네임만 쓴 글도 작성자를 찾을 수 있나요?',
        answer:
          '<strong>닉네임·가입정보·IP 확인을 수사기관 통해 검토하는 영역입니다.</strong> 인지 즉시 원본 보존이 핵심.',
      },
      {
        question: '제 이름이 직접 안 나와도 명예훼손이 되나요?',
        answer:
          '<strong>동네·직업 정보로 식별 가능하면 특정 평가가 가능한 영역입니다.</strong> 식별 정보가 포함된 부분 표시가 중요.',
      },
      {
        question: '비방 목적은 어떻게 입증하나요?',
        answer:
          '<strong>반복성·표현 방식·맥락이 비방 목적 평가 자료가 되는 영역입니다.</strong> 사회적 평가 저하와 별개로 검토.',
      },
      {
        question: '카페 운영자에게 신고하면 글이 바로 지워지나요?',
        answer:
          '<strong>권리침해 신고 시 임시조치·검토 절차가 진행되는 영역입니다.</strong> 삭제 전 원본 캡처가 우선.',
      },
      {
        question: '허위사실로 동네에서 평판이 떨어졌는데 민사도 되나요?',
        answer:
          '<strong>정신적 피해와의 관계를 정리하면 손해배상 청구를 검토할 수 있는 영역입니다.</strong> 확산 정황 자료가 도움.',
      },
    ],
    cta: { text: '명예훼손 대응 포인트, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '온라인 명예훼손 대응', href: '/guide/defamation/online-defamation-response' },
      { label: '익명 게시자 신원 추적', href: '/guide/defamation/anonymous-poster-identification' },
      { label: '명예훼손 피해자 시작', href: '/guide/defamation/defamation-victim-where-to-start' },
      { label: '온라인 명예훼손 증거 수집', href: '/guide/defamation/online-defamation-evidence-collection' },
      { label: '명예훼손 합의금 기준', href: '/guide/defamation/defamation-settlement-amount-guide' },
    ],
  },

  // ─── 2. defamation-groupchat-insult-contempt-expression-track (victim) ───
  {
    domain: 'defamation',
    slug: 'defamation-groupchat-insult-contempt-expression-track',
    keyword: '단톡방 욕설 경멸 표현 모욕',
    questionKeyword: '단체 채팅방에서 누군가 저를 향해 욕설과 경멸적인 표현을 반복해 다른 참여자들 앞에서 모욕했어요. 모욕죄로 대응할 수 있나요?',
    ctaKeyword: '단톡방 욕설 경멸 표현 모욕 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '단톡방 욕설·경멸 표현 모욕 — 5단계 대응 점검 | 로앤가이드',
      description:
        '단체 채팅방에서 욕설·경멸 표현으로 여러 참여자 앞에서 모욕을 당했다면 형법 제311조 공연성·전파가능성 5가지 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"동호회 단체 채팅방에 참여자 20여 명이 있는데, 한 사람이 본인을 향해 \'머리가 빈 사람\'·입에 담기 어려운 욕설을 며칠에 걸쳐 반복해서 올렸습니다. 다른 참여자들이 모두 그 메시지를 읽었고, 일부는 캡처해서 다른 곳에 옮기기도 했어요. 상대는 \'농담이었다·기분 나쁘면 나가라\'는 식으로 넘기려 하지만, 본인은 모욕감과 함께 모임 내 위신이 크게 떨어졌습니다." 형법 제311조는 \'공연히 사람을 모욕한 행위\'를 모욕죄로 규정하고, 사실을 적시하지 않더라도 사회적 평가를 떨어뜨릴 경멸적 감정 표현이면 검토 대상이 될 수 있는 영역입니다. 단톡방 욕설 + 다수 참여자 열람 + 반복성 결합은 공연성·전파가능성 평가가 가능한 트랙. 피해자라면 ① 메시지 보존 ② 참여자 확인 ③ 고소 ④ 합의 협의 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 단톡방 욕설 경멸 표현 모욕 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·확인·고소·합의·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 메시지 보존</strong> — 욕설·경멸 표현 캡처·작성 시각·반복 횟수·참여자 수 보존.</li>\n<li><strong>② 참여자·전파 확인</strong> — 열람 참여자·캡처 2차 확산 정황 정리.</li>\n<li><strong>③ 형사 고소</strong> — 형법 제311조 모욕 검토(친고죄, 고소기간 유의).</li>\n<li><strong>④ 합의 협의</strong> — 사과·삭제·합의금 조합 검토.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 위자료·정신적 피해 청구(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 모욕죄는 친고죄라 통상 범인을 안 날부터 6개월 내 고소가 검토되는 영역. 다수가 있는 단톡방은 공연성 평가가 가능하지만, 단순 무례한 표현과 경멸적 모욕 표현의 구분이 다툼이 될 수 있어 표현 전체 맥락 보존이 우선입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·확인·고소 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 메시지 즉시 보존 (인지 당일)</strong> — 캡처·작성 시각·반복 횟수·참여자 명단·전파 정황.</li>\n<li><strong>2단계 — 참여자 진술·전파 정황 정리 (1주 내)</strong> — 메시지를 본 참여자 확인 + 2차 확산 캡처.</li>\n<li><strong>3단계 — 방송통신심의위원회 심의 신청 (병행)</strong> — 게시물 삭제·차단 검토.</li>\n<li><strong>4단계 — 경찰 고소 (안 날부터 6개월 내)</strong> — 형법 제311조 모욕 + 작성자 소명.</li>\n<li><strong>5단계 — 합의·민사 손해배상 (시효 3년)</strong> — 사과·삭제·위자료 조합.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">단톡방 욕설·경멸 표현 모욕 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 표현·공연성·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>욕설·경멸 표현 메시지 캡처 (작성 시각·반복 횟수 포함)</strong></li>\n<li><strong>단톡방 참여자 수·명단 자료</strong></li>\n<li><strong>메시지를 본 참여자 진술·확인 자료</strong></li>\n<li><strong>캡처 2차 확산·전파 정황 자료</strong></li>\n<li><strong>표현 전후 맥락 전체 대화 기록</strong></li>\n<li><strong>모임 내 위신·관계 피해 정황 자료</strong></li>\n<li><strong>정신적 피해 정황 자료 (진료·상담 기록, 필요 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 단톡방은 메시지가 삭제되거나 방이 폭파되면 증거가 사라지므로 인지 즉시 전체 대화를 캡처해두는 것이 우선입니다. 단순 무례한 표현인지 경멸적 모욕 표현인지가 다툼이 되므로 표현의 전후 맥락을 함께 보존하면 평가에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>모욕 vs 무례한 표현</strong> — 경멸적 감정 표현인지 단순 무례한 표현인지 평가.</li>\n<li><strong>공연성</strong> — 다수 참여 단톡방은 공연성 평가가 가능한 영역.</li>\n<li><strong>전파가능성</strong> — 소수 단톡방이라도 전파 정황 시 공연성 검토.</li>\n<li><strong>친고죄 고소기간</strong> — 통상 안 날부터 6개월 내 고소가 검토되는 영역.</li>\n<li><strong>사회상규 위배 여부</strong> — 의견 강조 과정의 표현은 위법성 조각 여지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보분쟁조정위원회 (kopico.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 모욕죄 공연성과 전파가능성 평가 영역',
        summary:
          '대법원 2022도14571(대법원, 2024.01.04 선고) 영역에서 법원은 모욕죄의 공연성에도 명예훼손죄 공연성 법리가 동일하게 적용돼, 개별적으로 소수에게 발언했더라도 불특정 또는 다수인에게 전파될 가능성이 객관적으로 인정되면 공연성을 인정할 수 있다고 판시했습니다. 단톡방 모욕에서도 참여자 수·전파가능성·고의가 핵심 평가 트랙으로 검토될 수 있습니다.',
        takeaway: '전파가능성 인정 시 공연성 검토가 가능한 영역 — 메시지·참여자 진술 보존 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '욕설을 들었는데 단순 기분 나쁜 표현도 모욕죄가 되나요?',
        answer:
          '<strong>경멸적 감정 표현인지 단순 무례한 표현인지 평가가 갈리는 영역입니다.</strong> 표현 전체 맥락 보존이 중요.',
      },
      {
        question: '단톡방 참여자가 적어도 공연성이 인정되나요?',
        answer:
          '<strong>전파가능성이 인정되면 소수 단톡방도 공연성 평가가 가능한 영역입니다.</strong> 전파 정황 정리가 관건.',
      },
      {
        question: '모욕죄는 고소기간이 따로 있나요?',
        answer:
          '<strong>모욕죄는 친고죄로 통상 안 날부터 6개월 내 고소가 검토되는 영역입니다.</strong> 기간 관리가 중요.',
      },
      {
        question: '상대가 \'농담이었다\'고 하면 처벌이 어려운가요?',
        answer:
          '<strong>표현 방식·반복성·맥락으로 고의를 평가하는 영역입니다.</strong> 반복 횟수·전후 맥락 자료가 핵심.',
      },
      {
        question: '캡처가 다른 방으로 퍼졌으면 어떻게 하나요?',
        answer:
          '<strong>2차 확산 정황은 피해 범위 자료가 되는 영역입니다.</strong> 전파 경로 캡처를 함께 보존하는 것이 좋습니다.',
      },
    ],
    cta: { text: '명예훼손 대응 포인트, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '단톡방 모욕 증거', href: '/guide/defamation/group-chat-insult-evidence' },
      { label: '명예훼손 피해자 시작', href: '/guide/defamation/defamation-victim-where-to-start' },
      { label: '단톡방 캡처 증거 가치', href: '/guide/defamation/group-chat-screenshot-evidence-value' },
      { label: '온라인 모욕 고소·처벌', href: '/guide/defamation/online-insult-lawsuit-penalty' },
      { label: '명예훼손 합의금 기준', href: '/guide/defamation/defamation-settlement-amount-guide' },
    ],
  },

  // ─── 3. defamation-public-interest-tip-off-truth-accused-track (accused) ───
  {
    domain: 'defamation',
    slug: 'defamation-public-interest-tip-off-truth-accused-track',
    keyword: '공익 제보글 사실적시 명예훼손 혐의',
    questionKeyword: '직장·단체의 비리를 사실에 기반해 공익 목적으로 제보·게시했는데 상대가 명예훼손으로 고소했어요. 사실이고 공익 목적인데 방어가 가능한가요?',
    ctaKeyword: '공익 제보글 사실적시 명예훼손 혐의 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '공익 제보글 사실적시 명예훼손 — 5단계 방어 점검 | 로앤가이드',
      description:
        '비리를 공익 목적으로 제보했다가 명예훼손 혐의를 받고 있다면 형법 제307조·제310조 진실성·공익성 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"소속 단체에서 회비 횡령·부당한 운영 정황을 확인하고, 회원들이 알아야 한다는 생각에 사실관계를 정리해 단체 게시판과 회원 채팅방에 올렸습니다. 근거 자료도 함께 첨부했고 표현도 절제하려 했지만, 지목된 임원이 \'명예를 훼손했다\'며 본인을 고소했어요. 본인은 사실을 알린 것이고 공익 목적이었다는 입장인데, 사실을 적시해도 명예훼손이 될 수 있다는 말을 듣고 막막합니다." 혐의를 받고 있다면 형법 제307조는 \'공연히 사실을 적시해 명예를 훼손한 행위\'도 명예훼손 영역으로 규정하지만, 같은 법 제310조는 \'적시 사실이 진실하고 오로지 공공의 이익을 위한 것\'이면 위법성이 조각될 수 있다고 규정합니다. 공익 제보 + 사실 적시 + 공개 게시 결합은 \'공연성 인정 vs 진실·공익 위법성 조각\' 평가가 갈리는 트랙. ① 진실성 ② 공익성 ③ 표현 절제 ④ 변호인 의견서 ⑤ 합의 5중 트랙으로 방어를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 공익 제보글 사실적시 명예훼손 5단계 방어 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진실성·공익성·표현·의견서·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실 진실성</strong> — 게시 내용이 객관 사실에 부합하는지 근거 자료 정리.</li>\n<li><strong>② 공익성 평가</strong> — 회원 알권리·단체 이익 목적인지 사익적 동기 비중 평가.</li>\n<li><strong>③ 표현 절제 검토</strong> — 단정·인신공격 없이 사실 위주로 작성됐는지 점검.</li>\n<li><strong>④ 변호인 의견서</strong> — 형법 제310조 위법성 조각 항변 + 합리적 의심 항변.</li>\n<li><strong>⑤ 합의·삭제 검토</strong> — 정정·일부 합의 조합.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형법 제310조는 \'진실한 사실 + 오로지 공공의 이익\'이면 위법성 조각을 검토할 수 있는 영역. 주된 동기가 공익이면 부수적 사익이 섞여 있어도 적용 여지가 있으나, 인신공격·감정적 표현이 섞이면 항변이 약해질 소지가 있어 표현 전체 점검이 먼저입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·의견서·조사·정정·합의 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시물·근거 자료 보존 (즉시)</strong> — 게시물 전체·첨부 자료·작성 경위 정리.</li>\n<li><strong>2단계 — 변호인 선임 + 의견서 (1~2주)</strong> — 형법 제310조 위법성 조각 항변 + 진실성 증빙 정리.</li>\n<li><strong>3단계 — 경찰 조사 출석 (1개월 내)</strong> — 공익 목적·표현 절제 소명 진술.</li>\n<li><strong>4단계 — 게시물 정정·보완 (필요 시)</strong> — 감정적 표현 부분 정리.</li>\n<li><strong>5단계 — 합의·민사 협의</strong> — 정정·일부 손해배상 조합 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">공익 제보글 사실적시 명예훼손 혐의 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진실·공익·표현 갈래입니다.</strong></p>\n<ul>\n<li><strong>게시물 전체 내용 보존 (삭제 전 캡처·URL)</strong></li>\n<li><strong>게시 내용의 객관 사실 근거 자료 (회계 자료·문서·증인)</strong></li>\n<li><strong>공익 목적 정황 자료 (회원 알권리·단체 이익 맥락)</strong></li>\n<li><strong>표현 절제 여부 검토 자료 (인신공격·감정어 부분)</strong></li>\n<li><strong>게시 경위·작성 동기 정리 자료</strong></li>\n<li><strong>변호인 의견서·항변 자료</strong></li>\n<li><strong>고소장·수사기관 통지 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 형사재판에서 유죄 인정은 합리적 의심이 없는 증명이 필요한 영역이므로, 사실 진실성 근거 자료가 충실할수록 방어에 유리한 트랙으로 검토될 수 있습니다. 게시 동기가 공익에 있었다는 정황과 첨부 자료를 함께 준비해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실 진실성</strong> — 게시 내용의 객관 근거 자료 충실성이 핵심.</li>\n<li><strong>공익성</strong> — 회원 알권리·단체 이익 목적 vs 사익적 동기 비중 평가.</li>\n<li><strong>표현 방식</strong> — 단정·인신공격 회피가 위법성 조각 항변에 유리.</li>\n<li><strong>주된 동기</strong> — 부수적 사익이 섞여도 주된 동기가 공익이면 적용 여지.</li>\n<li><strong>합의 타이밍</strong> — 조사 단계 합의가 처분에 영향을 줄 수 있는 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>국민권익위원회 부패·공익신고 1398</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실적시 명예훼손 진실성·공익성 위법성 조각 평가 영역',
        summary:
          '대법원 2022도13425(대법원, 2023.02.02 선고) 영역에서 법원은 형법 제310조의 \'진실한 사실\'은 중요한 부분이 객관 사실과 합치되면 다소 과장이 있어도 무방하고, \'오로지 공공의 이익\'에는 특정 사회집단·구성원 전체의 관심과 이익도 포함되며 주된 동기가 공익이면 부수적 사익이 있어도 적용될 수 있다고 판시했습니다. 공익 제보 사안에서 진실성·공익성 항변이 핵심 방어 트랙으로 검토될 수 있습니다.',
        takeaway: '사실적시라도 진실·공익 결합 시 위법성 조각 항변이 가능한 영역 — 근거 자료 보존 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '사실을 알린 건데도 명예훼손이 될 수 있나요?',
        answer:
          '<strong>사실 적시도 공연성 인정 시 명예훼손 평가가 가능한 영역입니다.</strong> 진실 + 공익 결합 시 위법성 조각 항변.',
      },
      {
        question: '공익 목적이었다는 건 어떻게 소명하나요?',
        answer:
          '<strong>회원 알권리·단체 이익 맥락 자료가 핵심 영역입니다.</strong> 게시 동기·첨부 근거가 중요.',
      },
      {
        question: '사익적 감정이 조금 섞였으면 항변이 안 되나요?',
        answer:
          '<strong>주된 동기가 공익이면 부수적 사익이 있어도 적용 여지가 있는 영역입니다.</strong> 동기 비중 정리가 관건.',
      },
      {
        question: '게시물을 지금 정정·삭제하는 게 나을까요?',
        answer:
          '<strong>변호인 자문 후 결정 영역입니다.</strong> 감정적 표현 정정이 도움이 될 수 있으나 전체 맥락 보존이 먼저.',
      },
      {
        question: '합의로 마무리할 수 있을까요?',
        answer:
          '<strong>근거 자료 충실도에 따라 합의 조건이 달라지는 영역입니다.</strong> 정정·일부 배상 조합 검토.',
      },
    ],
    cta: { text: '명예훼손 대응 포인트, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 고소 대응', href: '/guide/defamation/defamation-accused-response' },
      { label: '사실적시 명예훼손 방어', href: '/guide/defamation/truth-defamation-accused-response' },
      { label: '공익 명예훼손 방어', href: '/guide/defamation/public-interest-defamation-defense' },
      { label: '명예훼손 피의자 시작', href: '/guide/defamation/defamation-accused-where-to-start' },
      { label: '명예훼손 합의금 기준', href: '/guide/defamation/defamation-settlement-amount-guide' },
    ],
  },

  // ─── 4. jeonse-fraud-hug-guarantee-claim-rejection-track (victim) ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-hug-guarantee-claim-rejection-track',
    keyword: '깡통전세 HUG 보증이행 청구 거절',
    questionKeyword: '전세보증금반환보증에 가입했는데 만기에 집주인이 보증금을 안 주고, HUG에 보증이행을 청구했더니 서류·요건 문제로 진행이 지연되거나 거절된다고 해요. 어떻게 해야 하나요?',
    ctaKeyword: '깡통전세 HUG 보증이행 청구 거절 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '깡통전세 HUG 보증이행 청구 거절 — 5단계 회수 점검 | 로앤가이드',
      description:
        '전세보증보험에 가입했는데 HUG 보증이행이 서류·요건 문제로 지연·거절된다면 보증이행 청구·우선변제권 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세 계약 때 보증금반환보증에 가입해 두었는데, 만기가 지나도 집주인이 \'세입자를 못 구했다\'며 보증금을 돌려주지 않았습니다. HUG에 보증이행을 청구했더니 \'임차권등기·이행청구 요건이 안 갖춰졌다·집주인에게 반환 청구한 증빙이 부족하다\'며 진행이 지연되고 있어요. 만기는 넘겼는데 다음에 무엇을 챙겨야 할지, 보증금을 정말 받을 수 있는지 불안합니다." 주택임대차보호법 제3조의2는 \'전입 + 확정일자를 갖춘 임차인은 후순위 권리자보다 우선변제를 받을 수 있다\'고 규정하고, HUG 전세보증금반환보증은 \'요건을 갖춘 임차인의 보증이행 청구\' 절차를 안내합니다. 보증 가입 + 만기 미반환 + 보증이행 요건 결합은 요건 보완·우선변제권 유지·이의 절차를 함께 검토해야 하는 트랙. 피해자라면 ① 요건 점검 ② 이행청구 보완 ③ 임차권등기 ④ 이의·소송 ⑤ 피해자 결정 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 깡통전세 HUG 보증이행 청구 거절 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 요건점검·이행청구·임차권등기·이의소송·결정 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 보증·요건 점검</strong> — 보증서·전입·확정일자·계약 종료·반환 청구 증빙 확인.</li>\n<li><strong>② 이행청구 서류 보완</strong> — HUG 요구 서류·집주인 반환 청구 기록 보완.</li>\n<li><strong>③ 임차권등기명령</strong> — 이사 시에도 대항력·우선변제권 유지.</li>\n<li><strong>④ 이의·반환소송</strong> — 보증이행 거절 사유에 대한 소명·소송 검토.</li>\n<li><strong>⑤ 전세사기피해자 결정</strong> — 요건 충족 시 피해지원센터 신청 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보증이행은 계약 종료·이행청구·대항요건 등 요건 증빙이 갖춰져야 진행이 검토되는 영역이라, 거절·지연 사유를 정확히 확인해 그 부분 서류를 보완하는 것이 핵심. 이사 전 임차권등기 완료로 우선변제권을 유지해두는 것이 안전합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. HUG 주택도시보증공사·전세사기피해지원센터 안내 절차를 참고한 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 보증서·요건 자료 즉시 점검 (즉시)</strong> — 보증서·전입·확정일자·계약 종료 통지·반환 청구 증빙.</li>\n<li><strong>2단계 — 집주인 반환 청구 기록 보완 (1주 내)</strong> — 내용증명·통화·문자 등 이행청구 증빙 정리.</li>\n<li><strong>3단계 — 임차권등기명령 신청 (이사 전, 1~2개월)</strong> — 법원 신청 + 대항력 유지.</li>\n<li><strong>4단계 — HUG 보증이행 재청구 또는 이의 (거절 사유 보완 후)</strong> — 보완 서류 제출·이의 검토.</li>\n<li><strong>5단계 — 전세사기피해자 결정 신청 (요건 충족 시)</strong> — 피해지원센터·정부 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">깡통전세 HUG 보증이행 청구 거절 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 보증·요건·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세보증금반환보증서·보증 약관</strong></li>\n<li><strong>전세계약서·보증금 송금 영수증</strong></li>\n<li><strong>전입세대 확인·확정일자 자료</strong></li>\n<li><strong>계약 종료 통지·갱신 거절 통지 기록</strong></li>\n<li><strong>집주인 반환 청구 증빙 (내용증명·통화·문자)</strong></li>\n<li><strong>임차권등기명령 신청·완료 등기부등본</strong></li>\n<li><strong>HUG 보증이행 청구 접수·거절 사유 통지서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보증이행 거절·지연은 대부분 특정 요건 증빙이 빠져 있는 경우가 많으니, 거절 사유 통지서를 받아 어느 요건이 보완 대상인지 확인하는 것이 우선입니다. 이사 계획이 있다면 임차권등기를 먼저 마치고 움직이는 것이 우선변제권 유지에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>보증이행 요건</strong> — 계약 종료·이행청구·대항요건 증빙 충족 여부.</li>\n<li><strong>이행청구 증빙</strong> — 집주인 반환 청구 기록이 부족하면 보완 필요.</li>\n<li><strong>대항요건 유지</strong> — 이사 전 임차권등기 미완료 시 우선변제권 흔들릴 소지.</li>\n<li><strong>거절 사유 대응</strong> — 거절 사유 보완 후 재청구·이의 검토.</li>\n<li><strong>면책과 우선변제권</strong> — 집주인 도산 시에도 보증금반환채권 보호 범위 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세사기피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 면책결정과 우선변제권 보증금반환채권 보호 평가 영역',
        summary:
          '대법원 2022다247378(대법원, 2025.06.12 선고) 영역에서 법원은 채무자회생법상 면책결정의 효력이 우선변제권이 인정되는 부분을 포함한 주택임차인의 보증금반환채권 전부에 미친다고 판시했습니다. 보증·도산 상황에서도 대항요건·확정일자를 갖춘 임차인의 보증금반환채권 보호 범위가 핵심 평가 트랙으로 검토될 수 있습니다.',
        takeaway: '대항요건·확정일자 갖춘 임차인의 보증금반환채권 보호 범위가 검토되는 영역 — 우선변제권 유지 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: 'HUG가 보증이행을 거절하면 보증금을 못 받나요?',
        answer:
          '<strong>거절 사유를 보완한 뒤 재청구·이의를 검토할 수 있는 영역입니다.</strong> 거절 사유 통지서 확인이 우선.',
      },
      {
        question: '집주인에게 보증금을 달라고 했다는 증빙이 왜 필요한가요?',
        answer:
          '<strong>이행청구 요건 증빙으로 보증이행 심사에 검토되는 영역입니다.</strong> 내용증명·문자 기록 정리가 도움.',
      },
      {
        question: '이사를 먼저 가면 보증 처리에 불리한가요?',
        answer:
          '<strong>임차권등기 완료 후 이사해야 대항력·우선변제권이 유지되는 영역입니다.</strong> 이사 전 등기 완료가 우선.',
      },
      {
        question: '집주인이 파산하면 보증금 회수가 어려운가요?',
        answer:
          '<strong>대항요건·확정일자를 갖춘 보증금반환채권 보호 범위를 검토하는 영역입니다.</strong> 우선변제권 유지가 관건.',
      },
      {
        question: '보증이행이 지연되는 동안 다른 절차도 함께 할 수 있나요?',
        answer:
          '<strong>임차권등기·반환소송·피해자 결정을 병행 검토할 수 있는 영역입니다.</strong> 요건 보완과 함께 진행.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 첫 확인', href: '/guide/jeonse-fraud/jeonse-fraud-first-check' },
      { label: '전세사기 구제 절차 일정', href: '/guide/jeonse-fraud/jeonse-fraud-relief-timeline' },
      { label: '전세사기 보증금 우선 순위', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-priority-order' },
      { label: '전세사기 피해자 인정 절차', href: '/guide/jeonse-fraud/jeonse-fraud-victim-recognition-process' },
      { label: '전세사기 신고 절차', href: '/guide/jeonse-fraud/jeonse-fraud-report-procedure' },
    ],
  },

  // ─── 5. jeonse-fraud-renewal-termination-deposit-unreturned-track (victim) ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-renewal-termination-deposit-unreturned-track',
    keyword: '계약갱신 후 해지 통지 보증금 미반환',
    questionKeyword: '계약갱신요구권으로 갱신된 전세에서 해지를 통지했는데, 3개월이 지나 만기가 됐는데도 집주인이 보증금을 안 돌려줘요. 깡통전세 같아 불안한데 어떻게 해야 하나요?',
    ctaKeyword: '계약갱신 후 해지 통지 보증금 미반환 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '계약갱신 후 해지 통지 보증금 미반환 — 5단계 점검 | 로앤가이드',
      description:
        '갱신된 전세를 해지 통지하고 3개월이 지났는데도 집주인이 보증금을 안 준다면 해지 효력·우선변제권 5가지 회수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"계약갱신요구권을 써서 한 차례 갱신한 전세에 살고 있었는데, 사정이 생겨 집주인에게 \'해지하겠다\'고 통지했습니다. 통지 후 3개월이 지나면 효력이 생긴다고 들어 만기에 맞춰 이사 준비를 했는데, 정작 집주인은 \'새 세입자가 안 들어와 돈이 없다\'며 보증금을 돌려주지 않고 있어요. 주변 시세가 계약 때보다 많이 떨어져 깡통전세가 아닐지 불안하고, 이사도 못 가고 묶여 있는 상황입니다." 주택임대차보호법 제6조의2는 \'갱신된 임대차에서 임차인은 언제든 해지를 통지할 수 있고, 그 통지가 도달한 날부터 3개월이 지나면 효력이 생긴다\'고 규정하고, 같은 법 제3조의2는 \'전입 + 확정일자를 갖춘 임차인의 우선변제권\'을 보호합니다. 갱신 해지 + 만기 미반환 + 시세 하락 결합은 해지 효력·우선변제권 유지·반환 청구를 함께 검토해야 하는 트랙. 피해자라면 ① 해지 효력 확인 ② 내용증명 ③ 임차권등기 ④ 반환소송 ⑤ 피해자 결정 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 계약갱신 후 해지 통지 보증금 미반환 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 효력확인·내용증명·임차권등기·반환소송·결정 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 해지 효력 확인</strong> — 해지 통지 도달일·3개월 경과 시점 정리.</li>\n<li><strong>② 내용증명 발송</strong> — 만기 보증금 반환 청구 + 이행 기한 통지.</li>\n<li><strong>③ 임차권등기명령</strong> — 이사 시에도 대항력·우선변제권 유지.</li>\n<li><strong>④ 보증금 반환소송·강제집행</strong> — 지급명령·반환소송·가압류 검토.</li>\n<li><strong>⑤ 전세사기피해자 결정</strong> — 시세 하락·미반환 정황 + 요건 충족 시 신청 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 갱신된 임대차의 해지 통지는 도달일부터 3개월이 지나면 효력이 생기는 영역이라, 통지 도달 시점과 3개월 경과 시점 정리가 만기·반환 청구의 기준. 이사 전 임차권등기 완료로 우선변제권을 유지해두는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 전세사기피해지원센터·법원 안내 절차를 참고한 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해지 통지·도달 자료 확보 (즉시)</strong> — 해지 통지 기록·도달일·3개월 경과 시점·등기부·확정일자.</li>\n<li><strong>2단계 — 내용증명 발송 (1주 내)</strong> — 만기 보증금 반환 청구 + 기한 통지.</li>\n<li><strong>3단계 — 임차권등기명령 신청 (이사 전, 1~2개월)</strong> — 법원 신청 + 대항력 유지.</li>\n<li><strong>4단계 — 지급명령·반환소송·가압류 (만기 후)</strong> — 집주인 재산 파악·강제집행 검토.</li>\n<li><strong>5단계 — 전세사기피해자 결정 신청 (요건 충족 시)</strong> — 피해지원센터·정부 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">계약갱신 후 해지 통지 보증금 미반환 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 효력·권리·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서·갱신 관련 자료·보증금 송금 영수증</strong></li>\n<li><strong>해지 통지 기록·도달 증빙 (문자·내용증명·통화)</strong></li>\n<li><strong>전입세대 확인·확정일자 자료</strong></li>\n<li><strong>등기부등본 (선순위 권리 확인)</strong></li>\n<li><strong>인근 시세 비교 자료 (시세 하락 입증)</strong></li>\n<li><strong>집주인 반환 거절·지연 메시지·통화 정황</strong></li>\n<li><strong>임차권등기명령 신청 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 해지 통지는 도달 시점이 효력 기준이므로 문자·내용증명 등 도달을 입증할 수 있는 방법으로 보내고 그 기록을 보존하는 것이 도움이 됩니다. 시세 하락으로 새 세입자가 안 들어오는 깡통전세 정황이라면 임차권등기를 서둘러 마치고 반환 청구를 진행하는 것이 우선입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>해지 효력 시점</strong> — 통지 도달일부터 3개월 경과 여부가 만기 기준.</li>\n<li><strong>대항요건 유지</strong> — 이사 전 임차권등기 미완료 시 우선변제권 흔들릴 소지.</li>\n<li><strong>새 세입자 핑계</strong> — 새 세입자 유무와 무관하게 만기 반환 청구를 검토할 수 있음.</li>\n<li><strong>시세 하락 깡통 정황</strong> — 선순위 권리·시세 비교로 회수 범위 가늠.</li>\n<li><strong>강제집행 대상</strong> — 집주인 재산 파악·가압류가 회수의 관건.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>전세사기피해지원센터 1533-8119</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 갱신 임대차 해지 통지 효력 발생 시점 평가 영역',
        summary:
          '대법원 2023다258672(대법원, 2024.01.11 선고) 영역에서 법원은 주택임대차보호법 제6조의2에 따라 갱신된 임대차에서 임차인이 한 계약 해지의 통지는 임대인이 그 통지를 받은 날부터 3개월이 지나면 효력이 발생한다고 판시했습니다. 갱신 해지 후 보증금 미반환 사안에서도 해지 통지 도달일과 3개월 경과 시점이 만기·반환 청구의 핵심 평가 트랙으로 검토될 수 있습니다.',
        takeaway: '해지 통지는 도달일부터 3개월 경과 시 효력이 생기는 영역 — 도달 증빙 보존 + 이사 전 임차권등기 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '해지 통지하고 3개월이 지나면 바로 이사 가도 되나요?',
        answer:
          '<strong>해지 효력은 통지 도달일부터 3개월 경과 시 생기는 영역입니다.</strong> 이사 전 임차권등기 완료가 우선.',
      },
      {
        question: '집주인이 새 세입자가 안 들어온다며 미루면 어떻게 하나요?',
        answer:
          '<strong>새 세입자 유무와 무관하게 만기 반환 청구를 검토할 수 있는 영역입니다.</strong> 내용증명·반환소송 검토.',
      },
      {
        question: '시세가 떨어져서 깡통전세 같은데 회수가 가능한가요?',
        answer:
          '<strong>선순위 권리·시세 비교로 회수 범위를 가늠하는 영역입니다.</strong> 임차권등기·가압류를 서두르는 것이 도움.',
      },
      {
        question: '해지 통지를 문자로 했는데 효력이 있나요?',
        answer:
          '<strong>도달 시점이 효력 기준인 영역이라 도달 증빙이 중요합니다.</strong> 내용증명 등 도달 입증 방법이 안전.',
      },
      {
        question: '이런 경우도 전세사기피해자 결정이 되나요?',
        answer:
          '<strong>시세 하락·미반환 정황과 요건 충족 여부에 따라 검토하는 영역입니다.</strong> 피해지원센터 상담 권장.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 첫 확인', href: '/guide/jeonse-fraud/jeonse-fraud-first-check' },
      { label: '전세보증금 미반환 대응', href: '/guide/jeonse-fraud/jeonse-deposit-not-returned-response' },
      { label: '전세사기 보증금 우선 순위', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-priority-order' },
      { label: '전세사기 피해자 인정 절차', href: '/guide/jeonse-fraud/jeonse-fraud-victim-recognition-process' },
      { label: '전세사기 구제 절차 일정', href: '/guide/jeonse-fraud/jeonse-fraud-relief-timeline' },
    ],
  },

  // ─── 6. jeonse-fraud-landlord-change-deposit-succession-track (victim) ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-landlord-change-deposit-succession-track',
    keyword: '임대인 변경 후 보증금 승계 깡통전세',
    questionKeyword: '전세 사는 집이 새 집주인에게 팔렸는데, 새 집주인이 보증금을 못 주겠다고 하고 옛 집주인은 이미 넘어갔다고 발을 빼요. 누구에게 보증금을 청구해야 하나요?',
    ctaKeyword: '임대인 변경 후 보증금 승계 깡통전세 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임대인 변경 후 보증금 승계 깡통전세 — 5단계 점검 | 로앤가이드',
      description:
        '전세 살던 집이 팔려 새 집주인이 보증금 반환을 거부하고 옛 집주인은 발을 뺀다면 임대인 지위 승계·반환 청구 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세로 살던 집이 본인도 모르는 사이 새 집주인에게 팔렸습니다. 만기가 다가와 보증금을 달라고 했더니 새 집주인은 \'매수할 때 돈이 빠듯해 지금은 못 준다\'고 하고, 옛 집주인은 \'집을 넘겼으니 나는 책임이 없다\'며 발을 빼고 있어요. 전입신고와 확정일자는 계약 초기에 받아두었는데, 시세까지 떨어진 상황이라 누구에게 보증금을 청구해야 할지 막막합니다." 주택임대차보호법 제3조 제4항은 \'임차주택의 양수인은 임대인의 지위를 승계한 것으로 본다\'고 규정해, 대항요건을 갖춘 임차인은 새 집주인에게 보증금 반환을 청구할 수 있는 영역으로 평가됩니다. 같은 법 제3조의2는 우선변제권을 보호합니다. 소유권 양도 + 임대인 지위 승계 + 시세 하락 결합은 청구 대상 확정·대항력 유지·반환 청구를 함께 검토해야 하는 트랙. 피해자라면 ① 권리·승계 확인 ② 내용증명 ③ 임차권등기 ④ 반환소송 ⑤ 피해자 결정 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 임대인 변경 후 보증금 승계 깡통전세 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 승계확인·내용증명·임차권등기·반환소송·결정 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리·승계 확인</strong> — 전입·확정일자·소유권 이전 시점·대항요건 존속 점검.</li>\n<li><strong>② 청구 대상 확정 + 내용증명</strong> — 새 집주인(양수인) 상대 반환 청구 통지.</li>\n<li><strong>③ 임차권등기명령</strong> — 이사 시에도 대항력·우선변제권 유지.</li>\n<li><strong>④ 보증금 반환소송·강제집행</strong> — 지급명령·반환소송·가압류 검토.</li>\n<li><strong>⑤ 전세사기피해자 결정</strong> — 시세 하락·미반환 정황 + 요건 충족 시 신청 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대항요건을 갖춘 임차인은 임차주택 양수인이 임대인 지위를 승계한 것으로 보아 새 집주인에게 보증금 반환을 청구할 수 있는 영역. 소유권 이전 전부터 전입·점유가 유지됐는지가 승계 청구의 핵심 자료입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 전세사기피해지원센터·법원 안내 절차를 참고한 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·승계 자료 즉시 확보 (즉시)</strong> — 등기부·소유권 이전 시점·전입·확정일자·점유 존속 자료.</li>\n<li><strong>2단계 — 새 집주인 상대 내용증명 발송 (1주 내)</strong> — 임대인 지위 승계 + 만기 보증금 반환 청구.</li>\n<li><strong>3단계 — 임차권등기명령 신청 (이사 전, 1~2개월)</strong> — 법원 신청 + 대항력 유지.</li>\n<li><strong>4단계 — 지급명령·반환소송·가압류 (만기 후)</strong> — 청구 대상 재산 파악·강제집행 검토.</li>\n<li><strong>5단계 — 전세사기피해자 결정 신청 (요건 충족 시)</strong> — 피해지원센터·정부 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임대인 변경 후 보증금 승계 깡통전세 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 승계·권리·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서·보증금 송금 영수증</strong></li>\n<li><strong>등기부등본 (소유권 이전 시점·선순위 권리)</strong></li>\n<li><strong>전입세대 확인·확정일자 자료 (소유권 이전 전 존속 확인)</strong></li>\n<li><strong>새 집주인·옛 집주인 연락·통지 기록</strong></li>\n<li><strong>인근 시세 비교 자료 (시세 하락 입증)</strong></li>\n<li><strong>보증금 반환 거절·지연 메시지·통화 정황</strong></li>\n<li><strong>임차권등기명령 신청 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 소유권 이전 시점보다 전입·점유가 먼저 갖춰져 있었는지가 승계 청구의 핵심이므로 확정일자·전입 자료를 등기부 소유권 이전 시점과 함께 비교해두면 도움이 됩니다. 청구 대상이 새 집주인인지 옛 집주인인지 정리한 뒤 내용증명을 보내는 것이 우선입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임대인 지위 승계</strong> — 대항요건 갖춘 임차인은 양수인에게 청구를 검토할 수 있음.</li>\n<li><strong>청구 대상 확정</strong> — 새 집주인·옛 집주인 중 누구를 상대로 청구할지 평가.</li>\n<li><strong>대항요건 존속</strong> — 소유권 이전 전부터 전입·점유 유지 여부가 핵심.</li>\n<li><strong>시세 하락 깡통 정황</strong> — 선순위 권리·시세 비교로 회수 범위 가늠.</li>\n<li><strong>강제집행 대상</strong> — 청구 대상 재산 파악·가압류가 회수의 관건.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>전세사기피해지원센터 1533-8119</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차건물 양수인의 임대인 지위 승계 평가 영역',
        summary:
          '대법원 2023다318857(대법원, 2024.08.01 선고) 영역에서 법원은 임차건물의 양수인은 임대인의 지위를 승계한 것으로 보아 공동임대인의 임차보증금 반환채무는 성질상 불가분채무에 해당한다고 판시했습니다. 소유권 양도로 임대인이 바뀐 경우에도 대항요건을 갖춘 임차인은 양수인에게 보증금 반환을 청구할 수 있는 트랙으로 검토할 수 있습니다.',
        takeaway: '양수인이 임대인 지위를 승계해 보증금 반환 대상이 될 수 있는 영역 — 대항요건 존속 확인 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '집이 팔렸으면 옛 집주인과 새 집주인 중 누구에게 청구하나요?',
        answer:
          '<strong>대항요건을 갖춘 임차인은 양수인에게 청구를 검토할 수 있는 영역입니다.</strong> 청구 대상 확정이 우선.',
      },
      {
        question: '옛 집주인이 책임이 없다고 하는데 정말 그런가요?',
        answer:
          '<strong>승계 여부·대항요건 존속에 따라 책임 범위가 달라지는 영역입니다.</strong> 소유권 이전 시점 비교가 핵심.',
      },
      {
        question: '소유권이 넘어가도 제 보증금 권리는 유지되나요?',
        answer:
          '<strong>소유권 이전 전부터 대항요건을 유지했다면 권리 검토가 가능한 영역입니다.</strong> 전입·확정일자 존속 확인.',
      },
      {
        question: '새 집주인이 돈이 없다고 하면 어떻게 회수하나요?',
        answer:
          '<strong>반환소송·가압류 트랙을 검토하는 영역입니다.</strong> 청구 대상 재산 파악이 관건.',
      },
      {
        question: '이런 경우도 전세사기피해자 결정이 되나요?',
        answer:
          '<strong>시세 하락·미반환 정황과 요건 충족 여부에 따라 검토하는 영역입니다.</strong> 피해지원센터 상담 권장.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 첫 확인', href: '/guide/jeonse-fraud/jeonse-fraud-first-check' },
      { label: '전세보증금 미반환 대응', href: '/guide/jeonse-fraud/jeonse-deposit-not-returned-response' },
      { label: '전세사기 보증금 우선 순위', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-priority-order' },
      { label: '전세사기 피해자 인정 절차', href: '/guide/jeonse-fraud/jeonse-fraud-victim-recognition-process' },
      { label: '전세사기 민사 vs 형사', href: '/guide/jeonse-fraud/jeonse-fraud-civil-vs-criminal' },
    ],
  },
];
