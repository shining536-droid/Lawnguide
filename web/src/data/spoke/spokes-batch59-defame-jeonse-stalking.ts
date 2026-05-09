import { SpokePage } from '../spoke-pages';

// batch59 defamation 3 + jeonse 2 + stalking 2 = 7개 (2026-05-09):
// 1. defamation / 직장 단톡방 험담 캡처 — 유포자 vs 캡처 당사자 두 입장 비교
// 2. defamation / 유튜브 댓글 실명 비방 — 신원조회 + 손해배상 민사 트랙 (피해자)
// 3. defamation / 유포자(가해자) 정상참작 합의 트랙 (방어형)
// 4. jeonse / 임대인 사망 후 상속인 보증금 미반환 — 상속포기·한정승인 위험
// 5. jeonse / 임차권등기명령 후 추가 임대 진행 시 후순위 보호
// 6. stalking / 헤어진 연인 재접촉 — 잠정조치 1호 vs 2호 비교
// 7. stalking / 스토킹처벌법 vs 경범죄(접근금지) 분기 판단
//
// 고유 존재 이유:
// 1. 이 페이지는 직장 단톡방에 동료 험담을 캡처해 외부에 유포한 사람과 험담 발언이 캡처되어 외부로 흘러나간 발언자가 동시에 명예훼손 위험에 직면한 상황에서, 두 입장의 책임 분기와 방어 포인트를 정리하도록 돕는 페이지다.
// 2. 이 페이지는 유튜브 댓글에 실명·계정·신상이 노출된 채 비방을 받은 피해자가 신원조회(통신자료 + 신원확인) → 형사 고소 + 민사 손해배상 청구를 결합 진행하는 트랙을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 명예훼손 유포자(가해자)로 입건된 사람이 단순 전달·전파가능성 미필 인식·합의·반성 자료를 결합해 정상참작·기소유예·약식벌금 트랙으로 양형을 낮추는 합의 전략을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 임대인이 임대차 기간 중 사망하고 상속인들이 상속포기·한정승인을 검토하는 가운데 보증금 반환을 못 받은 임차인이 공동임대인 지위 승계·불가분채무·구상 4가지 트랙을 정리하도록 돕는 페이지다.
// 5. 이 페이지는 임차권등기명령을 마쳤지만 임대인이 또 새로운 세입자를 받으면서 후순위 임차인이 보증금 회수에 위협을 받는 상황에서, 등기 우선변제권·후순위 임차인 정보 확인·경매 시 배당 4가지 트랙을 정리하도록 돕는 페이지다.
// 6. 이 페이지는 헤어진 연인이 재접촉하는 상황에서 스토킹처벌법 잠정조치 1호(서면 경고) 와 2호(주거·직장 100m 접근금지) 의 차이·신청 시기·연장·위반 효과를 비교해 본인 상황에 맞는 청구 전략을 정리하도록 돕는 페이지다.
// 7. 이 페이지는 반복 접촉·따라다님이 스토킹처벌법(형사처벌)에 해당하는지 경범죄처벌법(불안감 조성)·민사 접근금지가처분에 해당하는지 분기 판단해 본인 상황에 맞는 트랙을 선택하도록 돕는 페이지다.

export const spokesBatch59DefameJeonseStalking: SpokePage[] = [
  // ─── 1. defamation / defamation-coworker-groupchat-screenshot-spreader-vs-captured ───
  {
    domain: 'defamation',
    slug: 'defamation-coworker-groupchat-screenshot-spreader-vs-captured',
    keyword: '단톡방 캡처 유포 명예훼손 책임 분기',
    questionKeyword: '동료 단톡방 험담을 캡처해 다른 단톡방에 올린 유포자와 캡처된 발언자 둘 다 명예훼손 책임이 있나요?',
    ctaKeyword: '단톡방 캡처 유포 책임 분기 점검',
    type: '비교형',
    perspective: 'neutral',
    meta: {
      title: '단톡방 캡처 유포 — 유포자·발언자 4가지 책임 분기 | 로앤가이드',
      description:
        '단톡방 험담이 캡처돼 외부로 흘러갔다면 캡처 유포자와 발언자 각각의 4가지 책임 분기와 방어 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>"부서 단톡방에서 팀장 험담을 했는데 누군가가 그걸 캡처해서 다른 부서 단톡방·인스타 스토리에 올렸어요. 팀장이 본인을 명예훼손으로 고소했는데 캡처해서 퍼뜨린 사람은 책임이 없나요? 반대로 험담을 한 본인은 \'사적 대화였다\'는 변명이 가능한가요?" 단톡방 험담이 캡처되어 외부로 유포되는 상황은 두 갈래의 책임 트랙이 동시에 작동하는 영역입니다. 발언자(원래 험담을 한 사람)는 ① 사적 대화 항변 ② 전파가능성 미필 인식 부정 트랙, 캡처 유포자(외부 전파자)는 ③ 새로운 명예훼손 행위 책임 ④ 통신비밀 침해 + 정통망법 가능성 트랙으로 각각 평가되는 영역. 대법원 2020도5813(전파가능성 사건) 판결은 단톡방 같은 폐쇄 공간 발언이라도 \'전파가능성에 대한 미필적 고의\'가 인정되면 공연성 성립 영역이라고 판시했어요. 즉 발언자도 \'캡처될 수 있다\'는 위험을 용인했다면 책임 영역. 동시에 캡처 유포자는 \'새로운 적시 행위\'로 별도 책임 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 발언자·유포자 4가지 책임 분기 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 사적 대화·전파가능성·새로운 적시·통신비밀 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 발언자: 사적 대화 항변 (제한적)</strong> — 단톡방이 친밀·폐쇄 모임이라면 일부 항변 가능 영역이지만, 인원·관계·정황 종합 판단. 직장 부서 단톡방은 \'사적\' 평가 어려운 영역.</li>\n<li><strong>② 발언자: 전파가능성 미필 인식 (2020도5813)</strong> — \'캡처돼 흘러나갈 수 있다\'는 위험 용인 여부 핵심. 인원 30명·외부 인사 포함이면 미필적 고의 인정 영역.</li>\n<li><strong>③ 캡처 유포자: 새로운 적시 행위</strong> — 캡처를 외부에 올리는 것은 \'재배포\'가 아닌 \'새로운 사실 적시\' 영역. 별도 명예훼손 + 모욕 책임. 정통망법 결합 가능 영역.</li>\n<li><strong>④ 캡처 유포자: 통신비밀보호법·정통망법</strong> — 본인 참여 단톡방 캡처는 통신비밀 위반 아니지만, 비참여 단톡방 캡처를 받아 유포하면 별개 영역. 사생활 침해·정보통신망 명예훼손 결합.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 발언자·유포자 둘 다 책임 영역인 사례가 많은 영역. 발언자는 전파가능성 인식 다툼, 유포자는 \'새로운 적시\' 책임. 합의·자료 정리 트랙도 각각 다름.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 두 입장별 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 발언자·유포자 각각 자료 보존 → 변호인 → 조사 → 합의 → 본안 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 단톡방 전체 캡처·본인 발언 전후 맥락·캡처 유포 경로(다른 단톡방·SNS).</li>\n<li><strong>2단계 — 변호인 선임 (출석 전 권장)</strong> — 발언자는 전파가능성 미필 부정, 유포자는 새로운 적시 책임 회피 전략 분기.</li>\n<li><strong>3단계 — 경찰 조사 (10~14일 내)</strong> — 발언 의도·캡처 동기·유포 경로 진술. 두 입장 사실관계가 다르므로 변호인 자문 필수.</li>\n<li><strong>4단계 — 합의 시도</strong> — 발언자·유포자 각자 합의금 협상. 유포자는 외부 확산 정도에 따라 합의금 상승 영역.</li>\n<li><strong>5단계 — 형사 본안 (불합의 시)</strong> — 발언자는 공연성 다툼, 유포자는 새로운 명예훼손 + 정통망법 다툼. 양쪽 다 양형 자료 별도.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">단톡방 캡처 유포 책임 분기를 발언자·유포자 입장별로 AI가 안내해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 단톡방 자료 + 유포 경로 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>원본 단톡방 전체 캡처</strong> — 본인 발언·전후 맥락·참여자 명단.</li>\n<li><strong>단톡방 인원 구성 자료</strong> — 친밀도·관계 정황(공연성 다툼).</li>\n<li><strong>캡처 유포 경로 자료</strong> — 다른 단톡방·SNS 게시물·확산 범위.</li>\n<li><strong>유포 시점·확산 정도 자료</strong> — 조회수·댓글·공유 횟수.</li>\n<li><strong>본인 발언 의도 정황 메모</strong> — 농담·푸념·정보 공유 목적.</li>\n<li><strong>피해자와의 관계 자료</strong> — 갈등 유무·동기 부재 입증.</li>\n<li><strong>합의 시도·처벌불원서</strong> — 협상 진행 자료.</li>\n<li><strong>반성문·평판 자료</strong> — 양형 자료(초범·반성).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 캡처 유포자가 따로 있다는 사실을 입증하면 발언자의 \'직접 외부 전파 의도\'는 부정될 영역. 다만 전파가능성 미필 인식은 별개 다툼. 단톡방 외부에 동료가 아닌 인사가 포함됐는지가 핵심 정황.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 검찰·피해자 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"단톡방은 사적 공간이라 처벌 못 한다" 발언자 주장 부분 반박</strong> — 사적 공간이라도 전파가능성 미필 인식 시 공연성 성립 영역(2020도5813).</li>\n<li><strong>"캡처는 단순 전달이라 책임 없다" 유포자 주장 반박</strong> — 캡처를 외부에 올리는 것은 \'새로운 적시\'로 별도 책임 영역. 정통망법 + 형법 모두 적용.</li>\n<li><strong>"발언자가 1차 잘못이라 유포자는 가벼운 처벌" 주장 부분 반박</strong> — 두 행위는 별개. 유포자는 외부 확산 정도에 따라 양형 가중 영역.</li>\n<li><strong>합의 우선 권장</strong> — 정통망법 명예훼손은 반의사불벌. 두 사람 모두 합의 + 처벌불원서 시 \'공소권 없음\' 종결 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 형사 무료 상담.</li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.police.go.kr) / 182</strong> — 부당 출석·민원.</li>\n<li><strong>방송통신심의위원회 1377</strong> — 정보통신망 명예훼손 삭제 신고.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 단톡방 등 폐쇄 공간 발언과 전파가능성 이론',
        summary:
          '대법원 2020도5813 사건(대법원, 2020.11.19 선고)에서 법원은 명예훼손죄의 공연성에 관한 전파가능성 이론을 유지하면서, 명예훼손죄 공연성 인정의 위험성에 비추어 행위자에게 \'전파가능성에 대한 미필적 고의\'가 필요하고 이에 더해 그 위험을 용인하는 내심의 의사도 필요하다고 판시했습니다. 단톡방·소수 모임 같은 폐쇄 공간 발언이라도 캡처·재전송 위험이 객관적으로 존재하고 행위자가 이를 용인했다면 공연성 영역. 다만 친밀 관계라면 미필 고의 부정 트랙이 열리는 영역이라는 시사점이 있습니다.',
        takeaway: '단톡방 험담은 사적 공간이라도 전파가능성 미필 인식 + 위험 용인 시 공연성 성립 영역이라, 발언자·캡처 유포자 각자의 책임 트랙이 다르게 평가되는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '단톡방이 사적 공간이라 명예훼손 안 되는 거 아닌가요?',
        answer:
          '<strong>전파가능성 미필 인식 시 공연성 성립 영역입니다(2020도5813).</strong> 단톡방 인원·관계·정황 종합 판단. 직장·외부 인사 포함이면 미필 고의 인정 영역.',
      },
      {
        question: '캡처해서 다른 곳에 올린 사람만 처벌되나요?',
        answer:
          '<strong>둘 다 처벌 가능 영역입니다.</strong> 발언자는 원래 적시 + 전파가능성 책임, 유포자는 새로운 적시 + 정통망법 책임. 두 행위 별개 영역.',
      },
      {
        question: '캡처해서 인스타 스토리에 올렸는데 정통망법인가요?',
        answer:
          '<strong>정통망법 제70조(허위사실은 제2항, 사실은 제1항)에 해당 영역입니다.</strong> 정보통신망 통한 명예훼손은 형법보다 양형 무거움(7년 또는 3년 이하).',
      },
      {
        question: '본인은 발언자인데 캡처 유포자가 누군지 모릅니다',
        answer:
          '<strong>경찰 사건 자료 + 통신사실확인으로 추적 가능 영역입니다.</strong> 본인 변호인 통해 \'캡처 유포자가 따로 있다\'는 정황 자료 제출. 양형·합의에 영향.',
      },
      {
        question: '합의금은 어느 정도 수준인가요?',
        answer:
          '<strong>발언자 200~500만원, 유포자 300~800만원 영역이 일반적입니다.</strong> 외부 확산 정도·피해자 입장·합의 시기에 따라 변동. 변호사 자문 권장.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '단톡방 캡처 증거 가치', href: '/guide/defamation/defamation-group-chat-screenshot-evidence-value' },
      { label: '회사 단톡방 험담 캡처', href: '/guide/defamation/defamation-workplace-group-chat-screenshot-leak' },
      { label: '단톡방 가짜뉴스 유포 방어', href: '/guide/defamation/defamation-groupchat-fake-news-spread-accused' },
      { label: '캡처 재배포 책임', href: '/guide/defamation/defamation-screenshot-redistribute-liability' },
      { label: '직장 동료 소문 유포', href: '/guide/defamation/defamation-coworker-spread-victim' },
    ],
  },

  // ─── 2. defamation / defamation-youtube-realname-attack-civil-damages-victim ───
  {
    domain: 'defamation',
    slug: 'defamation-youtube-realname-attack-civil-damages-victim',
    keyword: '유튜브 댓글 실명 비방 신원조회 손해배상',
    questionKeyword: '유튜브 댓글에 실명·직장·가족 정보까지 노출돼 비방 받았어요. 작성자 신원조회 + 손해배상 어떻게 진행하나요?',
    ctaKeyword: '유튜브 실명 비방 신원조회 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '유튜브 실명 비방 — 신원조회·손해배상 4단계 트랙 | 로앤가이드',
      description:
        '유튜브 댓글에 실명·신상이 노출된 채 비방을 받았다면 신원조회 + 형사 + 민사 손해배상 4단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"한 유튜브 채널 영상 댓글창에 누군가 본인 실명·다니는 회사·가족 사진까지 올리며 \'사기꾼이다\' \'전과자다\' 비방했어요. 댓글에 좋아요 수백 개에 캡처돼 다른 곳에도 퍼지고 있습니다. 작성자가 누군지 모르는데 어떻게 신원을 알아내고 손해배상까지 받을 수 있나요?" 유튜브 실명 비방은 ① 정통망법 제44조의2 임시조치(삭제·차단) ② 통신자료·통신사실확인을 통한 신원조회 ③ 형사 고소(정통망법 제70조 명예훼손) ④ 민사 손해배상 + 위자료 4단계 결합 진행 가능 영역입니다. 익명 댓글이라도 구글·KISA·통신사 자료로 작성자 추적이 가능. 대법원 2022도699 판결은 정통망법 비방 목적 입증 책임이 검사에게 있다고 판시했지만, 실명·신상 결합 비방은 비방 목적 인정 영역. 형사 + 민사 동시 진행이 손해 회복에 효과적입니다.</p>',
    sections: [
      {
        title: 'Q. 유튜브 실명 비방 4단계 대응 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 임시조치·신원조회·형사 고소·민사 손해배상 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 임시조치(삭제·차단) (정통망법 제44조의2)</strong> — 본인이 유튜브·구글에 권리침해정보 신고 → 30일 임시조치. 방통심의위(1377) 결합. 즉시 확산 차단 영역.</li>\n<li><strong>② 신원조회(통신자료·통신사실확인)</strong> — 경찰 사건번호 발급 후 통신사·구글에 자료 요청. 작성자 IP·계정 정보 확보 영역.</li>\n<li><strong>③ 형사 고소(정통망법 제70조)</strong> — 허위사실(실명·전과 거짓)이면 제70조 제2항(7년 이하), 사실 적시면 제70조 제1항(3년 이하). 비방 목적 + 공연성 입증.</li>\n<li><strong>④ 민사 손해배상 + 위자료</strong> — 명예훼손 + 사생활 침해 + 신상 노출. 위자료 500~3,000만원 영역(확산 정도·피해 종합).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 유튜브 실명 비방은 형사 + 민사 동시 진행이 효과적. 임시조치로 즉시 확산 차단 + 신원조회로 작성자 특정 + 손해배상으로 회복. 댓글 캡처·확산 자료가 핵심 입증 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 임시조치 → 형사 고소 → 신원조회 → 민사 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 댓글 URL·작성자 계정·작성시점·좋아요 수·답글·캡처. 외부 확산 자료(다른 영상·SNS 공유).</li>\n<li><strong>2단계 — 임시조치 신청 (1~3일)</strong> — 유튜브 직접 신고 + 방통심의위 권리침해 신고(1377). 30일 임시조치 명령.</li>\n<li><strong>3단계 — 형사 고소 (1~2주 내)</strong> — 관할 경찰서 사이버수사대 또는 ecrm.police.go.kr. 정통망법 + 형법 결합.</li>\n<li><strong>4단계 — 신원조회 진행</strong> — 경찰이 구글(유튜브) 본사에 자료 요청 + 통신사실확인. 작성자 IP·계정 명세 확인. 외국 본사라 1~3개월 소요 영역.</li>\n<li><strong>5단계 — 민사 손해배상 (작성자 특정 후)</strong> — 손해배상 + 위자료. 영업·직장 피해 자료 결합. 형사 + 민사 동시 진행 가능 영역.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">유튜브 실명 비방 4단계 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 댓글 자료 + 피해 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>댓글 전체 캡처</strong> — URL·작성자 ID·작성시점·좋아요·답글.</li>\n<li><strong>외부 확산 자료</strong> — 다른 영상·SNS 공유·언론 인용.</li>\n<li><strong>본인 신원 자료</strong> — 주민등록증·사업자등록증·재직증명서.</li>\n<li><strong>실명·직장·가족 노출 자료</strong> — 댓글 내 신상정보.</li>\n<li><strong>허위 사실 반박 자료</strong> — \'전과자\' 거짓이면 범죄경력회보서, \'사기꾼\' 거짓이면 거래 자료.</li>\n<li><strong>임시조치 신청 자료</strong> — 유튜브·방통심의위 신고 영수증.</li>\n<li><strong>피해 자료</strong> — 영업 매출 변화·직장 평판·정신과 진료.</li>\n<li><strong>경찰 사건번호</strong> — 신원조회용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 댓글이 외부 캡처돼 SNS·블로그·다른 영상에 확산된 자료가 \'확산 정도\' 입증. 위자료 산정 시 좋아요·공유 수보다 외부 재확산 정도가 더 중요한 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 작성자 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"댓글은 의견 평가" 주장 부분 반박</strong> — \'전과자\'·\'사기꾼\'은 사실 적시 영역(허위면 가중). 의견 평가 영역 아님.</li>\n<li><strong>"비방 목적 없었다" 주장 반박</strong> — 실명·신상·직장 결합 노출은 비방 목적 추정 정황 강함(2022도699 비방 목적 검사 입증 책임).</li>\n<li><strong>"공연성 부정" 주장 반박</strong> — 유튜브 댓글창은 불특정 다수 접근 가능. 공연성 명백 영역.</li>\n<li><strong>외국 본사(구글·메타) 자료 요청 시간 소요 영역</strong> — 1~3개월. 그 사이 임시조치 + 다른 정황 자료 정리.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>방송통신심의위원회 1377</strong> — 권리침해정보 신고 + 임시조치.</li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.police.go.kr) / 182</strong></li>\n<li><strong>한국인터넷진흥원 KISA 118</strong> — 디지털 분쟁 상담.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정통망법 명예훼손죄에서 비방 목적과 사회적 평가의 별개 구성요건성',
        summary:
          '대법원 2022도699 사건(대법원, 2024.01.04 선고)에서 법원은 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제70조 제1항 명예훼손죄의 구성요건 중 \'비방할 목적\'과 \'드러낸 사실이 사회적 평가를 떨어뜨릴 만한 것인지\'는 별개의 구성요건이고, 사회적 평가를 떨어뜨리는 사실이라고 해서 비방 목적이 당연히 인정되는 것은 아니며 모든 구성요건에 대한 증명책임은 검사에게 있다고 판시했습니다. 다만 실명·신상·직장이 결합된 비방은 객관적으로 비방 목적이 추정될 정황이 강한 영역이라는 시사점이 있습니다.',
        takeaway: '유튜브 실명 비방은 정통망법 + 민사 결합 영역이라, 댓글·외부 확산·피해 자료를 정리하면 4단계 트랙(임시조치·신원조회·형사·민사)이 모두 열려 손해 회복 가능한 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '익명 댓글인데 작성자 알 수 있나요?',
        answer:
          '<strong>경찰 사건번호 발급 후 통신사실확인 + 구글 자료요청으로 가능 영역입니다.</strong> 외국 본사라 1~3개월 소요. 임시조치 + 신원조회 동시 진행 권장.',
      },
      {
        question: '유튜브에 직접 신고했는데 안 지워줘요',
        answer:
          '<strong>방통심의위(1377) 권리침해 신고 + 임시조치 트랙이 강력합니다.</strong> 30일 임시조치 명령 후 강제 차단 + 그 사이 본안 절차 진행.',
      },
      {
        question: '위자료는 얼마 받을 수 있나요?',
        answer:
          '<strong>실명·신상 결합 비방은 위자료 500~3,000만원 영역이 일반적입니다.</strong> 외부 확산 정도·피해 자료(영업·직장)·확산 시간 종합. 사례별 차이 큼.',
      },
      {
        question: '형사·민사 동시 진행 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 형사 고소(정통망법) + 민사 손해배상 별개. 형사 합의 시 \'공소권 없음\' 종결되지만 민사는 별도 진행. 합의금에 위자료 포함 협상.',
      },
      {
        question: '본인 직장이 노출됐는데 영업 피해도 청구 가능한가요?',
        answer:
          '<strong>매출 변화·고객 이탈 자료 입증 시 영업손실 청구 가능 영역입니다.</strong> 사업자라면 영업방해죄(형법 제314조) 결합도 검토. 세무·POS 자료 핵심.',
      },
    ],
    cta: { text: '삭제·합의·방어 포인트, AI로 먼저 점검하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '익명 게시판 작성자 추적', href: '/guide/defamation/defamation-anonymous-poster-identity-trace' },
      { label: '온라인 게시글 삭제 청구', href: '/guide/defamation/defamation-online-post-deletion-request-procedure' },
      { label: '유튜브 신상공개 피해', href: '/guide/defamation/defamation-youtube-doxxing-victim-takedown' },
      { label: '명예훼손 손해배상 산정', href: '/guide/defamation/defamation-damages-amount-standard' },
      { label: '온라인 명예훼손 소송 절차', href: '/guide/defamation/online-defamation-lawsuit-process' },
    ],
  },

  // ─── 3. defamation / defamation-spreader-accused-mitigation-settlement-track ───
  {
    domain: 'defamation',
    slug: 'defamation-spreader-accused-mitigation-settlement-track',
    keyword: '명예훼손 유포자 정상참작 합의',
    questionKeyword: '동료 험담을 듣고 다른 사람에게 옮겼다가 명예훼손으로 입건됐어요. 정상참작·합의로 양형 낮출 수 있나요?',
    ctaKeyword: '유포자 정상참작 합의 점검',
    type: '방어형',
    perspective: 'accused',
    meta: {
      title: '유포자 정상참작 — 4단계 합의·기소유예 트랙 | 로앤가이드',
      description:
        '명예훼손 유포자로 입건된 후 정상참작·합의·기소유예로 양형을 낮추려면 4단계 양형 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"회사 동료 둘이 본인에게 \'C가 회삿돈 빼돌렸대\'라는 소문을 흘렸고 본인은 사실인 줄 알고 다른 동료 두 명에게 옮겼어요. 알고 보니 사실이 아니었고 C가 본인을 명예훼손으로 고소했어요. 처음엔 \'들은 걸 옮겼을 뿐\'이라고 했지만 입건돼버렸습니다. 정상참작·합의로 처벌을 낮출 수 있나요?" 명예훼손 유포자(가해자)가 입건된 후 양형을 낮추는 트랙은 ① 단순 전달자 위치 입증 ② 합의 + 처벌불원서 ③ 반성문·기부·봉사 양형 자료 ④ 기소유예·약식벌금 4단계로 정리되는 영역입니다. 정통망법·형법 명예훼손은 반의사불벌이라 합의 시 \'공소권 없음\'으로 종결. 합의 어렵다면 \'단순 전달자\' 위치(소문 출처 따로 있음) + 초범·반성 자료로 기소유예 또는 약식벌금 트랙으로 양형 낮출 수 있는 영역. 대법원 2022도699 판결은 \'비방 목적\'을 검사가 입증해야 한다고 판시해, \'주의 환기·정보 공유 의도\' 변론이 가능한 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 유포자 4가지 양형 낮추기 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 단순 전달자·합의·반성·기소유예 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 단순 전달자 위치 입증</strong> — 소문 출처가 본인이 아니라는 점·들은 정황 메모. \'직접 적시\' vs \'전달\' 구별. 양형 차이 영역.</li>\n<li><strong>② 합의 + 처벌불원서 (반의사불벌)</strong> — 정통망법·형법 명예훼손 모두 반의사불벌. 합의 시 \'공소권 없음\' 종결. 합의금 200~500만원 영역.</li>\n<li><strong>③ 반성문·기부·봉사 양형 자료</strong> — 초범·반성·사회 기여 자료. 기소유예 또는 벌금형 감액. 변호인 의견서 결합.</li>\n<li><strong>④ 기소유예·약식벌금 트랙</strong> — 검찰 단계 기소유예(전과 안 남음) 또는 약식벌금(공판 안 가고 종결). 변호인 자문 핵심.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 유포자도 합의 + 단순 전달 + 반성 자료 결합으로 기소유예·약식벌금 트랙 가능. 합의가 가장 강력한 카드. 검찰 단계 종결이 핵심 목표.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 양형 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 변호인 → 합의·반성 → 검찰 처분 → 본안 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 본인 발언 맥락·소문 출처(누가 처음 말했는지)·전달 동기·전달 대상자 명단.</li>\n<li><strong>2단계 — 변호인 선임 (출석 전 권장)</strong> — 단순 전달자 + 비방 목적 부정 + 합의 트랙 정리.</li>\n<li><strong>3단계 — 합의 시도 + 반성 자료 (1~2주 내)</strong> — 피해자에게 사과 + 합의금 + 처벌불원서 요청. 동시 반성문·기부·봉사 자료 준비.</li>\n<li><strong>4단계 — 검찰 처분</strong> — 합의 + 초범 + 반성 결합 시 기소유예 가능. 합의 어려움 시 약식벌금 + 정상참작.</li>\n<li><strong>5단계 — 형사 본안 (불합의 + 기소 시)</strong> — 단순 전달·비방 목적 부정 변론. 양형 자료 추가 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">유포자 정상참작·합의 4단계 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사건 자료 + 양형 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>본인 발언 전후 맥락</strong> — 어디서·누구에게·어떻게 옮겼는지.</li>\n<li><strong>소문 출처 자료</strong> — 누가 처음 말했는지·언제 들었는지 메모.</li>\n<li><strong>본인 인식 정황</strong> — 사실인 줄 알았던 근거.</li>\n<li><strong>전달 동기 메모</strong> — 주의 환기·정보 공유·우려 표명.</li>\n<li><strong>합의서·처벌불원서</strong> — 합의 진행 자료.</li>\n<li><strong>반성문·사과편지</strong> — 진정한 반성 표현.</li>\n<li><strong>기부·봉사 영수증</strong> — 양형 자료(초범·사회 기여).</li>\n<li><strong>경력증명서·상장·평판 자료</strong> — 본인 평소 평판.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 합의금이 부담된다면 분할납입·일부선납 협상도 가능 영역. 합의서에 \'합의금 완납 시 처벌불원\' 조건부 명시하면 양 당사자 안전. 합의 진행 자체가 양형 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 검찰·피해자 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"전달도 명백한 적시 행위" 주장 부분 반박</strong> — 전달 사실 자체는 인정하되, 비방 목적·허위 인식 부정 트랙으로 제307조 제1항·정통망법 제70조 제1항 적용 영역으로 평가될 여지.</li>\n<li><strong>"비방 목적 명백" 주장 반박</strong> — 검사 입증 책임(2022도699). 주의 환기·정보 공유 의도였다면 비방 목적 부정.</li>\n<li><strong>"합의금 과다 요구" 시 협상</strong> — 합의금 200~500만원 영역이 일반적. 분할납입 + 변호인 협상.</li>\n<li><strong>합의 어려움 시 차선</strong> — 공탁 + 반성 자료 + 단순 전달 변론. 기소유예 또는 약식벌금 트랙.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 형사 무료 상담.</li>\n<li><strong>국선변호인 (대한변협 02-2087-7700)</strong> — 자격 요건 시.</li>\n<li><strong>경찰 민원 110·182</strong> — 부당 출석 민원.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정통망법 명예훼손에서 비방 목적의 검사 입증 책임',
        summary:
          '대법원 2022도699 사건(대법원, 2024.01.04 선고)에서 법원은 정보통신망법 제70조 제1항 명예훼손죄의 \'비방할 목적\'과 \'드러낸 사실이 사회적 평가를 떨어뜨리는 것인지\'는 별개의 구성요건이고, 사회적 평가를 떨어뜨리는 사실이라도 비방 목적이 당연히 인정되는 것은 아니며 모든 구성요건에 대한 증명책임은 검사에게 있다고 판시했습니다. 단순 전달자가 \'주의 환기·정보 공유 의도\'였다고 변론하면 비방 목적 부정 트랙이 열릴 수 있는 영역이라는 시사점이 있습니다.',
        takeaway: '유포자도 단순 전달 위치 + 비방 목적 부정 + 합의 + 반성 자료 결합 시 기소유예·약식벌금 트랙 가능 영역이라, 검찰 단계 종결을 노리는 양형 전략이 효과적인 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '합의금은 얼마가 적정한가요?',
        answer:
          '<strong>정통망법 명예훼손 합의금은 200~500만원 영역이 일반적입니다.</strong> 발언 정도·확산 범위·피해자 입장 종합. 분할납입·일부선납 협상 가능. 변호사 자문.',
      },
      {
        question: '기소유예 받으면 전과 남나요?',
        answer:
          '<strong>형사 처벌 전과는 안 남습니다.</strong> 다만 검찰 처분 기록은 남음(수사경력회보서). 일반 취업·이직에는 영향 없는 영역.',
      },
      {
        question: '소문 출처를 알려주면 본인 처벌 가벼워지나요?',
        answer:
          '<strong>양형에 유리한 영역입니다.</strong> 단순 전달자 위치 입증 + 출처가 따로 있음 명시 시 비방 목적 부정 + 양형 감경 자료. 다만 출처 사람도 같이 입건될 가능성.',
      },
      {
        question: '반성문 어떻게 써야 하나요?',
        answer:
          '<strong>본인 행위 사실 인정 + 진정한 반성 + 재발 방지 다짐 3요소가 핵심입니다.</strong> 변명 톤 금지. 피해자 직접 사과 + 변호인 의견서 결합 권장.',
      },
      {
        question: '합의 안 되면 어떻게 되나요?',
        answer:
          '<strong>공탁 + 반성 자료 + 단순 전달 변론으로 차선 트랙입니다.</strong> 약식벌금 또는 정식재판 → 벌금형. 변호인이 양형 자료 추가 제출. 초범이라면 벌금 100~300만원 영역.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '단톡방 가짜뉴스 유포 방어', href: '/guide/defamation/defamation-groupchat-fake-news-spread-accused' },
      { label: '명예훼손 가해자 시작점', href: '/guide/defamation/defamation-accused-where-to-start' },
      { label: '명예훼손 합의금 가이드', href: '/guide/defamation/defamation-settlement-amount-guide' },
      { label: '진실 적시 가해자 대응', href: '/guide/defamation/truth-defamation-accused-response' },
      { label: '직장 동료 명예훼손', href: '/guide/defamation/workplace-defamation-by-colleague' },
    ],
  },

  // ─── 4. jeonse / jeonse-landlord-death-heirs-renunciation-deposit-risk ───
  {
    domain: 'jeonse',
    slug: 'jeonse-landlord-death-heirs-renunciation-deposit-risk',
    keyword: '임대인 사망 상속포기 보증금',
    questionKeyword: '전세 살고 있는데 임대인이 사망했고 상속인들이 상속포기·한정승인을 검토 중이래요. 보증금은 어떻게 되나요?',
    ctaKeyword: '임대인 사망 상속포기 보증금 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '임대인 사망 상속포기 — 4단계 보증금 보호 트랙 | 로앤가이드',
      description:
        '임대인 사망 후 상속인들이 상속포기·한정승인을 검토 중이라면 임차인 보증금 보호 4단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세로 들어간 지 1년 됐는데 임대인이 사망했어요. 상속인은 자녀 셋이고 \'아버지 빚이 많아 상속포기·한정승인을 할 예정\'이라며 보증금 반환을 미루고 있어요. 상속포기하면 본인 보증금은 돌려받지 못하나요?" 임대인 사망 시 임차인 보증금은 ① 공동임대인 지위 자동 승계(주임법 제3조 제4항·상임법 제3조 제2항) ② 보증금 반환채무 = 불가분채무 ③ 상속포기·한정승인 시 절차 ④ 상속재산 경매·우선변제 4단계로 정리되는 영역입니다. 대법원 2015다59801 판결은 상속에 따라 임차건물 소유권을 취득한 자도 \'임차건물의 양수인\'에 해당하고 공동임대인의 보증금 반환채무는 \'불가분채무\'라고 판시했어요. 즉 상속인 1명이라도 변제 가능하면 임차인은 그에게 전액 청구 가능. 다만 상속포기·한정승인이 적법하게 이뤄지면 \'한정\'된 책임만 부담하는 영역. 핵심은 본인이 우선변제권을 가지고 있는지(전입신고+확정일자), 임대인 자력이 어땠는지에 따라 달라집니다.</p>',
    sections: [
      {
        title: 'Q. 임대인 사망 4가지 보증금 보호 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 공동임대인·불가분채무·상속포기·우선변제 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 공동임대인 자동 승계 (주임법·상임법)</strong> — 상속인이 임대인 지위 자동 승계. 별도 합의 불필요. 새 계약서 안 써도 효력 유지.</li>\n<li><strong>② 보증금 반환채무 = 불가분채무 (2015다59801)</strong> — 공동상속인 모두에게 전액 청구 가능. 1명이 변제 시 다른 상속인에게 구상.</li>\n<li><strong>③ 상속포기·한정승인 시 절차</strong> — 상속개시(사망) 안 날부터 3개월 내 가정법원 신고. 상속포기 시 자녀 → 손자녀 → 형제 순으로 책임 이동 영역.</li>\n<li><strong>④ 우선변제권·임차권등기 + 경매</strong> — 전입신고+확정일자 시 우선변제권. 임대인 사망 + 상속재산 경매 시 우선 배당. 본인 보증금 보호 핵심.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임대인 사망해도 상속인이 임대인 지위 자동 승계. 다만 상속포기 + 자력 부족이면 회수 어려운 영역. 본인 우선변제권(전입+확정일자) + 임차권등기가 핵심 보호.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 정리 → 상속인 확인 → 청구 → 임차권등기 → 경매·배당 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 정리 (즉시)</strong> — 임대차계약서·전입신고·확정일자·등기부등본·임대인 사망 정황(사망진단서).</li>\n<li><strong>2단계 — 상속인 확인 (1~2주)</strong> — 가족관계증명서 또는 가정법원 한정승인·상속포기 신고 여부 조회.</li>\n<li><strong>3단계 — 보증금 반환 청구 (만기 시 또는 즉시 검토)</strong> — 상속인 전원에게 내용증명. 불가분채무로 1명에게 전액 청구 가능 영역.</li>\n<li><strong>4단계 — 임차권등기명령 + 가압류 (이사 필요 시)</strong> — 우선변제권 유지 + 상속재산 가압류로 처분 방지.</li>\n<li><strong>5단계 — 상속재산 경매·배당</strong> — 자력 부족 시 임차권 + 우선변제권으로 경매 배당 신청. HUG 가입자라면 보증보험 청구 결합.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임대인 사망 후 4단계 보증금 보호 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 임차 자료 + 상속·재산 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·만기일</strong> — 보증금 액수·임대인 명의.</li>\n<li><strong>전입신고·확정일자</strong> — 우선변제권 자료.</li>\n<li><strong>등기부등본</strong> — 임대인 부동산 + 근저당 정보.</li>\n<li><strong>임대인 사망진단서·기본증명서</strong> — 사망 시점.</li>\n<li><strong>상속인 가족관계증명서</strong> — 상속인 확인.</li>\n<li><strong>한정승인·상속포기 신고서</strong> — 가정법원 자료(공개 여부 확인).</li>\n<li><strong>상속재산 자료</strong> — 부동산·예금·주식 등 자력 평가.</li>\n<li><strong>HUG·SGI 보증보험 가입증</strong> — 가입자라면 보증청구 트랙.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상속포기 신고는 \'사망 안 날부터 3개월\' 이내. 본인은 그 기간 동안 임차권등기 + 가압류로 권리 보전 우선. 상속포기 후 다음 순위(손자녀·형제) 확인 절차로 시간 더 걸리는 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 상속인 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"상속포기했으니 책임 없다" 주장 검토</strong> — 적법 신고면 책임 면제 영역. 다만 본인 우선변제권은 부동산에 그대로 유효.</li>\n<li><strong>"한정승인이라 보증금 못 준다" 주장 부분 반박</strong> — 한정승인은 상속재산 한도 내 변제. 부동산 자체에 우선변제권 있다면 경매 배당 가능.</li>\n<li><strong>"새 계약서 다시 써야 한다" 요구 거부 영역</strong> — 임대인 지위 자동 승계. 새 계약서 안 써도 기존 계약 유효(2015다59801).</li>\n<li><strong>"본인은 1/3 지분만 책임" 주장 반박</strong> — 불가분채무. 1명에게 전액 청구 가능. 그 후 다른 상속인에게 구상은 상속인 사이 문제.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 임대차·상속 무료 상담.</li>\n<li><strong>전세사기피해지원센터 1533-8119</strong> — 전세 피해 상담.</li>\n<li><strong>HUG 1670-9009</strong> — 전세보증보험 사고 신고.</li>\n<li><strong>가정법원 종합민원실</strong> — 상속포기·한정승인 신고 여부 확인.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상속에 따른 임차건물 소유권 승계와 공동임대인 불가분채무',
        summary:
          '대법원 2015다59801 사건(대법원, 2021.01.28 선고)에서 법원은 상가건물 임대차보호법 제3조의 양수인에는 상속에 따라 임차건물 소유권을 취득한 자도 포함되며, 임대인 지위를 공동으로 승계한 공동임대인들의 임차보증금 반환채무는 성질상 \'불가분채무\'에 해당한다고 판시했습니다. 또 민법 제1019조 제3항의 \'중대한 과실로 알지 못한 경우\' 증명책임은 상속인에게 있고, 한정승인 후 고의로 재산목록에 누락하면 단순승인 의제 영역이라는 시사점이 있습니다. 즉 임차인은 상속인 1명에게 전액 청구 가능하고 한정승인이 부정될 정황이 있다면 책임 한도가 없어질 영역.',
        takeaway: '임대인 사망 시 보증금은 공동임대인 불가분채무 영역이라, 상속인 가족관계·재산 자료를 정리하면 4단계 보호 트랙(승계·청구·임차권등기·경매배당)이 모두 열려 회수 가능한 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '상속포기하면 보증금 못 받나요?',
        answer:
          '<strong>본인 우선변제권은 부동산 자체에 있어 영향 없는 영역입니다.</strong> 다만 \'상속인 인적 책임\'은 면제. 부동산 경매 배당으로 회수. 자력·근저당 자료 평가가 핵심.',
      },
      {
        question: '한정승인이라도 보증금 청구 가능한가요?',
        answer:
          '<strong>가능 영역입니다.</strong> 한정승인은 상속재산 한도 내 변제. 임차인 보증금은 부동산 자체에 우선변제권. 경매 배당으로 회수.',
      },
      {
        question: '상속인이 여러 명인데 누구에게 청구하나요?',
        answer:
          '<strong>전원 또는 1명에게 전액 청구 가능 영역입니다(2015다59801).</strong> 불가분채무라 누구에게나 전액 청구. 변제 후 상속인 사이 구상은 별개 영역.',
      },
      {
        question: '새 계약서를 다시 써야 하나요?',
        answer:
          '<strong>아닙니다.</strong> 임대인 지위 자동 승계. 기존 계약 그대로 유효. 다만 임대인 명의 변경 등기부 확인은 필요. 보증금 반환 의무는 상속인.',
      },
      {
        question: '임차권등기는 언제 신청하나요?',
        answer:
          '<strong>이사 필요할 때 즉시 신청 영역입니다.</strong> 사망 후 상속인 확정 전에도 가능. 우선변제권 유지 + 가압류 결합으로 권리 보전. 변호사 또는 법률구조공단 자문.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '임대인 사망 보증금 반환', href: '/guide/jeonse/jeonse-landlord-death-deposit-return' },
      { label: '임차권등기 후 미반환', href: '/guide/jeonse/jeonse-after-rental-rights-registration-still-unpaid' },
      { label: '임대인 파산 우선변제', href: '/guide/jeonse/jeonse-landlord-bankruptcy-priority-payment' },
      { label: '임대인 변경 위험', href: '/guide/jeonse/jeonse-landlord-change-deposit-risk' },
      { label: '보증금 반환 종합 가이드', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
    ],
  },

  // ─── 5. jeonse / jeonse-rental-registration-after-additional-tenant-junior-risk ───
  {
    domain: 'jeonse',
    slug: 'jeonse-rental-registration-after-additional-tenant-junior-risk',
    keyword: '임차권등기 후 추가 임대 후순위',
    questionKeyword: '본인이 임차권등기를 마친 뒤 임대인이 또 새 세입자를 받았어요. 본인 보증금 회수에 위협이 되나요?',
    ctaKeyword: '임차권등기 후 추가 임대 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '임차권등기 후 추가 임대 — 4단계 후순위 보호 트랙 | 로앤가이드',
      description:
        '임차권등기 마친 뒤 임대인이 새 세입자를 받았다면 우선변제권 유지·후순위 임차인 정보·경매 배당 4단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세 만기 지나도 임대인이 보증금을 안 줘서 임차권등기명령 받고 이사 나왔어요. 그런데 등기부를 확인해보니 임대인이 또 새 세입자를 받아 들였어요. 본인 보증금 회수에 영향이 있나요? 새 세입자에게 어떤 의무가 있나요?" 임차권등기 후 추가 임대는 ① 본인 우선변제권 유지(주임법 제3조의3) ② 새 세입자는 후순위 임차인 ③ 후순위 임차인 알림 의무 정황 ④ 경매 시 배당 순위 4단계로 정리되는 영역입니다. 대법원 2024다326398 판결은 \'임차권등기 마치면 대항력·우선변제권이 등기 시점부터 발생\'한다고 판시. 본인이 등기 마친 시점이 우선순위 기준. 새 세입자는 본인보다 후순위로 들어왔으므로 경매 시 본인 우선 배당. 다만 새 세입자가 \'임차권등기 사실을 모르고 들어온\' 경우 임대인 + 중개사 책임 영역. 본인은 안전. 핵심은 본인이 등기를 정확히 마쳤는지 + 등기부에 표기됐는지입니다.</p>',
    sections: [
      {
        title: 'Q. 임차권등기 후 4가지 후순위 보호 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 우선변제권·후순위·중개사 책임·경매 배당 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 본인 우선변제권 유지 (2024다326398)</strong> — 임차권등기 마치면 등기 시점부터 대항력·우선변제권 발생. 이사 나갔어도 권리 유지 영역.</li>\n<li><strong>② 새 세입자 = 후순위 임차인</strong> — 본인 등기 후 들어온 세입자는 본인보다 후순위. 경매 시 본인 우선 배당.</li>\n<li><strong>③ 새 세입자에 대한 임대인·중개사 알림 의무</strong> — 등기부에 임차권 표기됐다면 새 세입자는 \'알았어야 할 정황\'. 임대인이 숨기고 계약하면 임대인 + 중개사 손해배상 책임 영역.</li>\n<li><strong>④ 경매 시 배당 순위 + HUG 결합</strong> — 임대인 자력 부족 시 경매 → 본인 등기 시점 우선순위로 배당. HUG 가입자라면 보증보험 청구 결합.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임차권등기 후 추가 임대는 본인 권리에 영향 없는 영역. 본인 우선변제권 유지 + 새 세입자 후순위. 등기부 표기 확인 + 자력 평가가 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 등기 확인 → 자력 평가 → 청구 → 경매 → 배당 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임차권등기 표기 확인 (즉시)</strong> — 등기부등본 발급 → 본인 임차권 등기 정확히 표기됐는지 확인. 새 세입자 정보도 확인.</li>\n<li><strong>2단계 — 임대인 자력 평가</strong> — 부동산 가치·근저당·기타 채무. 자력 부족이면 경매 트랙 검토.</li>\n<li><strong>3단계 — 본인 보증금 청구 + 지연이자</strong> — 내용증명 + 지급명령·소송. 만기 후 연 5% + 소장 송달 후 12% 가중.</li>\n<li><strong>4단계 — 강제집행·경매 신청</strong> — 판결 확정 후 강제경매. 본인 등기 시점 우선순위 + 후순위 세입자 확인.</li>\n<li><strong>5단계 — 경매 배당</strong> — 본인 우선 배당. 부족 시 임차인 보호 한도 내 보상 + HUG 가입자라면 보증보험.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 계약 종료 후 무엇부터 해야 하는지 AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">임차권등기 후 추가 임대 4단계 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 본인 권리 자료 + 임대인 자력 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>임차권등기 결정문·등기부등본</strong> — 우선변제권 표기 확인.</li>\n<li><strong>임대차계약서·만기일</strong> — 보증금 액수·기간.</li>\n<li><strong>전입신고·확정일자 자료</strong> — 등기 전 우선변제권.</li>\n<li><strong>이사 후 점유 상실 자료</strong> — 등기 시점 기준 권리 발생.</li>\n<li><strong>임대인 부동산 시세·근저당 자료</strong> — 자력 평가.</li>\n<li><strong>새 세입자 정보 (등기부)</strong> — 후순위 입증.</li>\n<li><strong>HUG·SGI 보증보험 가입증</strong> — 결합 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 등기부에 본인 임차권이 표기됐는데도 새 세입자가 모르고 계약했다면 임대인 + 중개사 손해배상 책임. 본인은 영향 없음. 다만 자력 부족이라면 경매 + HUG 결합 트랙으로 안전.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 임대인 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"새 세입자 들어왔으니 보증금 줄게" 주장 검토</strong> — 새 세입자 보증금이 본인 회수 자금일 수 있어 신중. 임차권등기 + 지연이자 별도 청구 지속.</li>\n<li><strong>"본인 등기 무효" 주장 반박</strong> — 임차권등기는 법원 결정. 무효 주장은 별도 절차 필요. 본인 우선변제권 유효 영역.</li>\n<li><strong>"새 세입자가 우선" 주장 반박</strong> — 등기 시점 기준 우선순위. 본인 등기가 먼저라면 우선(2024다326398).</li>\n<li><strong>임대인 자력 부족 정황</strong> — 즉시 강제집행 + 경매 신청. HUG 가입자라면 보증보험 청구 동시.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 임대차·강제집행 무료 상담.</li>\n<li><strong>HUG 1670-9009</strong> — 전세보증보험 사고 신고.</li>\n<li><strong>전세사기피해지원센터 1533-8119</strong> — 전세 피해 상담.</li>\n<li><strong>전자소송 (ecfs.scourt.go.kr)</strong> — 강제집행 온라인.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차권등기 시 대항력·우선변제권의 시점',
        summary:
          '대법원 2024다326398 사건(대법원, 2025.04.15 선고)에서 법원은 주택 임차인이 전입신고+주택 인도로 대항력을 취득했더라도 그 후 점유를 상실하면 대항력은 소멸하고, 임차권등기를 마치면 등기 시점부터 \'동일성이 없는 새로운 대항력\'이 발생한다고 판시했습니다. 또 경매로 인한 매각 시 경매로 소멸하는 저당권보다 후에 등기되었거나 대항력을 갖춘 임차권은 매수인에게 주장할 수 없다고 판시. 즉 임차권등기 시점이 대항력·우선변제권의 기준점이고, 그 후에 들어온 세입자는 후순위라는 시사점이 있습니다.',
        takeaway: '임차권등기는 등기 시점 기준 우선변제권 발생 영역이라, 등기부·임대인 자력·HUG 자료를 정리하면 4단계 후순위 보호 트랙이 모두 열려 보증금 회수 가능한 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '본인 등기 후 들어온 세입자가 우선인 거 아닌가요?',
        answer:
          '<strong>아닙니다(2024다326398).</strong> 등기 시점 기준 우선순위. 본인이 먼저 등기 마쳤다면 본인 우선. 새 세입자는 후순위 영역.',
      },
      {
        question: '새 세입자 들어와서 임대인이 보증금 준다는데 받아도 되나요?',
        answer:
          '<strong>받되 영수증·합의서 명시 필수입니다.</strong> 일부 수령 시 \'잔여분 청구권 보류\' 명시. 지연이자도 별도 청구 가능. 임차권등기 말소는 전액 회수 후.',
      },
      {
        question: '임대인 자력 부족하면 어떻게 되나요?',
        answer:
          '<strong>경매 + HUG 보증보험 결합 트랙입니다.</strong> 강제경매 신청 → 본인 우선 배당. 부족분은 HUG 가입자라면 보증보험 청구. 미가입자는 임차인 보호 한도 내 보상.',
      },
      {
        question: '새 세입자에게 본인이 직접 알려야 하나요?',
        answer:
          '<strong>아닙니다.</strong> 등기부에 표기되어 있으므로 새 세입자가 \'알았어야 할 정황\'. 임대인 + 중개사 알림 의무. 본인은 권리 그대로 유지.',
      },
      {
        question: '임차권등기 말소는 언제 하나요?',
        answer:
          '<strong>보증금 전액 회수 후 말소 영역입니다.</strong> 일부 수령 후 말소하면 우선변제권 잃을 위험. 전액 + 지연이자 + 등기비용 회수 확인 후 말소.',
      },
    ],
    cta: { text: '계약 종료 후 무엇부터 해야 하는지 AI로 확인하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '임차권등기 후 미반환', href: '/guide/jeonse/jeonse-after-rental-rights-registration-still-unpaid' },
      { label: '다가구 후순위 임차인 회수', href: '/guide/jeonse/jeonse-multifamily-junior-tenant-recovery' },
      { label: '경매 시 우선 배당 절차', href: '/guide/jeonse/jeonse-auction-priority-distribution-procedure' },
      { label: '임차권등기 신청 절차', href: '/guide/jeonse/lease-registration-order-process' },
      { label: '보증금 반환 종합 가이드', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
    ],
  },

  // ─── 6. stalking / stalking-ex-lover-recontact-provisional-1-vs-2-compare ───
  {
    domain: 'stalking',
    slug: 'stalking-ex-lover-recontact-provisional-1-vs-2-compare',
    keyword: '잠정조치 1호 2호 차이',
    questionKeyword: '헤어진 연인이 또 연락해요. 잠정조치 1호(서면 경고)와 2호(접근금지) 중 어떤 걸 청구해야 하나요?',
    ctaKeyword: '잠정조치 1호 2호 비교 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '잠정조치 1호 vs 2호 — 4가지 비교 포인트 | 로앤가이드',
      description:
        '헤어진 연인이 재접촉할 때 잠정조치 1호(서면 경고)와 2호(접근금지) 중 어떤 걸 청구해야 할지 4가지 비교 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>"3개월 전 헤어진 전 남자친구가 또 \'한번만 만나달라\'며 카톡·전화·집 앞 대기까지 시작했어요. 경찰에 신고하니 \'잠정조치 1호(서면 경고)부터 받아보자\'고 하는데, 인터넷에 보면 \'2호 접근금지가 더 강력\'하다고도 합니다. 어떤 게 더 나은가요?" 스토킹처벌법 잠정조치(제9조)는 ① 1호: 서면 경고 ② 2호: 100m 이내 접근 금지 ③ 3호: 전기통신 이용 금지 ④ 4호: 유치장·구치소 유치 4단계로 구성되는 영역입니다. 1호는 절차 간소·즉시 효과, 2호는 물리적 거리 제한 + 위반 시 강한 처벌이 트랙. 대법원 2025모3144 판결은 잠정조치 결정에 대한 항고 요건을 명확히 했고, 2022모2092는 만료 후 동일 사건사실로 \'재청구\' 가능하다고 판시. 본인 상황(가해자 위협 정도·물리적 위협 유무·전기통신 위주인지)에 따라 1호·2호·3호 단독 또는 결합 청구가 달라지는 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 잠정조치 1호·2호 4가지 비교 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 효과·요건·기간·위반 처벌 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 효과 차이</strong> — 1호(서면 경고)는 가해자에게 \'더 이상 접근하지 말라\' 명령서. 심리적 압박. 2호(100m 접근금지)는 주거·직장 100m 이내 물리적 접근 금지. 강한 효과.</li>\n<li><strong>② 요건 차이</strong> — 1호는 \'스토킹범죄 우려\' 정황 충분. 2호는 \'재발 위험성\' + \'물리적 접근 가능성\' 추가 입증. 자료 부담 다름.</li>\n<li><strong>③ 기간·연장</strong> — 1호 3개월(연장 가능), 2호 2개월(2회 연장 → 최대 6개월, 2022모2092로 동일 사건사실 재청구도 가능 영역).</li>\n<li><strong>④ 위반 시 처벌</strong> — 1호 위반은 별도 처벌 없음(다만 \'재발 정황\'으로 2호 청구 정황). 2호 위반은 2년 이하 징역 또는 2,000만원 이하 벌금. 강한 압박.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 1호는 빠르고 부담 적은 트랙. 2호는 강하지만 자료·요건 부담. 가해자 위협 정도·물리적 접근 가능성·전기통신 위주인지에 따라 단독 또는 결합 청구. 3호(전기통신 금지) 결합도 강력.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 신고 → 1호 또는 2호 청구 → 결정 → 위반 시 가중 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 카톡·전화·SNS·집 앞 대기·CCTV·증인 자료. 가해자 위협 정도 + 물리적 접근 가능성 입증.</li>\n<li><strong>2단계 — 경찰 신고 (즉시)</strong> — 112 또는 ecrm.police.go.kr. 친고죄 폐지로 즉시 신고 가능.</li>\n<li><strong>3단계 — 잠정조치 청구</strong> — 검사가 법원에 청구. 1호(빠른 처리)·2호(자료 충분)·3호(전기통신) 결합 가능.</li>\n<li><strong>4단계 — 법원 결정·고지</strong> — 가해자에게 결정문 송달. 효력 즉시 발생.</li>\n<li><strong>5단계 — 위반 시 가중 + 신변보호</strong> — 2호 위반은 별도 처벌 + 본안 형사 가중. 신변보호조치 결합.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 접근금지·처벌 가능성, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">잠정조치 1호·2호 비교 + 본인 상황별 선택을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 위협 자료 + 본인 위치 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>가해자 연락 자료</strong> — 카톡·전화 통화기록·SNS DM 캡처.</li>\n<li><strong>물리적 접근 자료</strong> — 집 앞·직장·동선 CCTV·증인.</li>\n<li><strong>가해자 위협 표현</strong> — 폭언·협박·자해 위협 정황.</li>\n<li><strong>본인 주거·직장 위치</strong> — 100m 영역 설정용.</li>\n<li><strong>관계 종료 정황</strong> — 헤어진 시점·거부 의사 표명.</li>\n<li><strong>본인 정신과·진단서</strong> — 피해 자료.</li>\n<li><strong>경찰 신고 사건번호</strong> — 잠정조치 청구 절차.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 1호로 시작했는데 가해자가 무시하고 계속 접근하면 \'재발 정황\'으로 2호 + 3호 결합 청구가 강해지는 영역. 1호 → 2호 단계적 접근도 자료 정황 자체로 변호인 자문.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 가해자 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"단순 사과 연락이라 스토킹 아니다" 주장 반박</strong> — 본인 거부 의사 + 반복 접근이면 의도 무관 스토킹 영역(2025도36).</li>\n<li><strong>"100m는 너무 넓다" 주장 부분 반박</strong> — 100m는 법정 거리. 다만 같은 동·같은 직장이면 본인 일상 보호 영역.</li>\n<li><strong>"기간 만료 후엔 또 연락 가능" 주장 반박</strong> — 만료 후라도 \'동일 사건사실\'로 재청구 가능(2022모2092).</li>\n<li><strong>1호·2호 결합 권장</strong> — 자료 충분하면 처음부터 2호 + 3호 결합. 강한 보호 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.police.go.kr) / 182</strong></li>\n<li><strong>112 신고 + 신변보호심사위원회</strong></li>\n<li><strong>여성긴급전화 1366</strong> — 24시간 상담·임시숙소.</li>\n<li><strong>한국여성의전화 02-2263-6464</strong> — 스토킹 피해 지원.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 잠정조치 결정의 항고 요건과 동일 사건사실 재청구 가능성',
        summary:
          '대법원 2025모3144 사건(대법원, 2025.12.11 선고)에서 법원은 스토킹처벌법상 잠정조치 결정(연장·종류 변경 결정 포함)에 대한 항고 절차에서 형사소송법 제407조가 준용되지 않으며, 결정 고지일부터 7일 이내 항고 가능하다고 판시했습니다. 또한 대법원 2022모2092(2023.02.23) 판결은 잠정조치 기간 만료 후에도 검사가 \'동일한 스토킹범죄사실\'로 새로운 잠정조치를 청구할 수 있다고 판시. 즉 1호·2호·3호 만료 후라도 재발 정황 자료가 있다면 재청구로 보호 폭이 유지된다는 시사점이 있습니다.',
        takeaway: '잠정조치 1호·2호는 효과·요건·기간·위반 처벌이 다른 트랙이라, 본인 위협 정도·물리적 접근 가능성 자료를 정리하면 단독 또는 결합 청구로 본인 상황에 맞는 보호가 가능한 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '1호·2호 동시 청구 가능한가요?',
        answer:
          '<strong>가능 영역입니다.</strong> 자료 충분하면 1호 + 2호 + 3호(전기통신 금지) 결합 청구. 강한 보호. 다만 자료 부족하면 1호 단독 → 재발 시 2호.',
      },
      {
        question: '1호 받았는데 가해자가 또 연락하면?',
        answer:
          '<strong>2호·3호 청구 정황 강해지는 영역입니다.</strong> 1호 위반 자체는 별도 처벌 없지만 \'재발 정황\'으로 2호 + 3호 결합 청구. 강한 압박.',
      },
      {
        question: '2호 위반하면 처벌 어떻게 되나요?',
        answer:
          '<strong>2년 이하 징역 또는 2,000만원 이하 벌금 영역입니다.</strong> 본안 형사도 가중 양형. 부재중 전화·수신차단 표시도 잠정조치 위반(2024도7832).',
      },
      {
        question: '잠정조치 만료 후 또 연락 오면?',
        answer:
          '<strong>동일 사건사실로 재청구 가능 영역입니다(2022모2092).</strong> 검사에게 만료 전 연장 또는 만료 후 재청구. 자료 새로 정리 + 재발 정황 입증.',
      },
      {
        question: '본인 직장도 보호 가능한가요?',
        answer:
          '<strong>2호 100m 접근금지 + 직장 명시 가능 영역입니다.</strong> 청구 시 본인 주거·직장·자녀 학교 등 명시. 동선 보호 가능.',
      },
    ],
    cta: { text: '접근금지·처벌 가능성, AI로 확인하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '잠정조치 적용 효과', href: '/guide/stalking/stalking-provisional-measure-application-effect' },
      { label: '잠정조치 항고 절차', href: '/guide/stalking/stalking-provisional-measure-appeal-procedure' },
      { label: '긴급응급조치 신청', href: '/guide/stalking/stalking-emergency-measure-application' },
      { label: '신고 후 접근금지', href: '/guide/stalking/stalking-report-and-restraining-order' },
      { label: '전 연인 재접촉 형사', href: '/guide/stalking/stalking-ex-partner-message-criminal' },
    ],
  },

  // ─── 7. stalking / stalking-act-vs-minor-offense-restraining-bifurcation ───
  {
    domain: 'stalking',
    slug: 'stalking-act-vs-minor-offense-restraining-bifurcation',
    keyword: '스토킹처벌법 경범죄 분기',
    questionKeyword: '반복 접촉이 스토킹처벌법인지 경범죄(불안감 조성)인지 헷갈려요. 어떤 트랙으로 가야 하나요?',
    ctaKeyword: '스토킹법 경범죄 분기 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '스토킹법 vs 경범죄 — 4가지 분기 판단 트랙 | 로앤가이드',
      description:
        '반복 접촉·따라다님이 스토킹처벌법인지 경범죄(불안감 조성)인지 4가지 분기 판단 + 본인 상황별 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"동네 주민이 본인을 자꾸 따라다니고 인사를 강요해요. 위협적이지는 않은데 부담스러워서 거부했더니 \'한 번만 더 보자\'며 계속 접근해요. 스토킹처벌법으로 신고할 수 있나요? 아니면 경범죄·민사 접근금지가 더 맞나요?" 반복 접촉·따라다님은 ① 스토킹처벌법(형사·잠정조치) ② 경범죄처벌법 제3조 제1항 제19호(불안감 조성·10만원 이하 벌금) ③ 민사 접근금지가처분 ④ 정통망법(전기통신 위주) 4가지 트랙으로 분기되는 영역입니다. 대법원 2023도6411·2023도10313·2025도36 판결은 \'객관적·일반적으로 불안감·공포심을 일으키기 충분한 정도\'면 피해자 현실 인식과 무관하게 스토킹행위 영역이라고 판시. 그러나 \'불안감 조성\' 정도가 약하거나 1~2회 단발이면 경범죄 트랙. 본인 위협 정도·반복성·물리적 접근 정도·전기통신 결합 여부에 따라 트랙이 달라지는 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 스토킹법·경범죄·민사 4가지 분기 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 반복성·위협 정도·트랙·실효성 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 스토킹처벌법 (반복+위협 충분)</strong> — \'지속 또는 반복적\' + \'객관적·일반적 불안감 충분\' 정도. 형사처벌(3년 이하) + 잠정조치 가능. 강한 보호.</li>\n<li><strong>② 경범죄처벌법 제3조 제1항 제19호 (단발·약한 위협)</strong> — 1~2회 단발 + 위협 약함. 10만원 이하 벌금 또는 구류. 잠정조치 없음.</li>\n<li><strong>③ 민사 접근금지가처분 (형사 부담스러울 때)</strong> — 가정법원·민사법원 가처분. 100m 접근금지 + 위반 시 간접강제. 형사 안 거치고 빠른 보호 가능 영역.</li>\n<li><strong>④ 정통망법 (전기통신 위주일 때)</strong> — 카톡·SNS·이메일 위주면 정통망법 제74조(공포심·불안감 조성 글) 결합. 형사처벌 + 본안 결합.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 반복성 + 위협 정도가 분기 핵심. 스토킹법은 \'객관적·일반적\' 정도. 경범죄는 단발·약함. 민사는 빠른 보호. 정통망법은 전기통신 위주. 본인 상황별 결합 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 분기 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 정리 → 분기 판단 → 신고·청구 → 결정 → 결합 트랙 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 정리 (즉시)</strong> — 접촉 횟수·시간·장소·내용·위협 표현 정도. 본인 거부 의사 표명 자료.</li>\n<li><strong>2단계 — 분기 판단</strong> — 반복성(3회 이상)·위협 정도(객관적 불안감)·전기통신 결합 여부. 변호인·법률구조공단 자문.</li>\n<li><strong>3단계 — 신고·청구</strong> — 스토킹법(112) / 경범죄(112·관할 경찰서) / 민사가처분(법원). 결합 가능.</li>\n<li><strong>4단계 — 결정·효력</strong> — 스토킹법은 잠정조치, 경범죄는 즉결심판, 민사는 가처분 결정. 효력 즉시.</li>\n<li><strong>5단계 — 결합 트랙</strong> — 스토킹법 형사 + 민사 접근금지가처분 결합. 본안·가처분·잠정조치 동시 보호. 신변보호조치 추가.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">스토킹법·경범죄·민사 분기 판단을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 접촉 자료 + 본인 거부 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>접촉 횟수·시간·장소 기록</strong> — 일시별 정황 메모.</li>\n<li><strong>대화·메시지 자료</strong> — 카톡·전화 통화기록·SNS DM.</li>\n<li><strong>물리적 접근 자료</strong> — CCTV·증인.</li>\n<li><strong>위협 표현·정황</strong> — 폭언·협박·자해 위협.</li>\n<li><strong>본인 거부 의사 표명 자료</strong> — \'그만 연락해주세요\' 메시지·녹취.</li>\n<li><strong>본인 정신과·진단서</strong> — 불안·수면장애 자료.</li>\n<li><strong>경찰 신고 사건번호</strong> — 분기 트랙별.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인 거부 의사를 \'명시적·반복적\'으로 표명한 자료가 분기 판단의 결정적 정황. 거부 후에도 접근 → 스토킹법 영역. 거부 전 1~2회 → 경범죄 영역. 자료의 \'시점\'이 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 가해자 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"위협 의도 없었다" 주장 반박</strong> — 객관적·일반적 불안감 충분 정도면 의도 무관 스토킹 영역(2023도6411·2025도36).</li>\n<li><strong>"피해자가 거부 의사 안 했다" 주장 반박</strong> — 거부 의사 명시 자료 + 객관적 위협이면 인정 영역.</li>\n<li><strong>경범죄 청구 시 즉결심판 트랙 부분 인정</strong> — 단발·약한 위협이면 경범죄. 다만 반복 시 스토킹법으로 전환 가능.</li>\n<li><strong>민사 가처분 빠른 보호 권장</strong> — 형사 부담스러우면 민사 접근금지가처분. 1~2주 내 결정 가능 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.police.go.kr) / 182</strong></li>\n<li><strong>112 신고 + 신변보호심사위원회</strong></li>\n<li><strong>여성긴급전화 1366</strong> — 24시간 상담·임시숙소.</li>\n<li><strong>한국여성의전화 02-2263-6464</strong> — 스토킹 피해 지원.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 스토킹행위 성립의 객관적·일반적 기준',
        summary:
          '대법원 2023도6411 사건(대법원, 2023.09.27 선고)에서 법원은 스토킹범죄처벌법 제2조 제1호 각 목의 행위가 \'객관적·일반적으로 볼 때 이를 인식한 상대방에게 불안감 또는 공포심을 일으키기에 충분한 정도\'라고 평가될 수 있다면 현실적으로 상대방이 불안감·공포심을 갖게 되었는지와 관계없이 스토킹행위에 해당한다고 판시했습니다. 또 대법원 2023도10313(2023.12.14)·2025도36(2025.10.30)도 같은 취지를 확인. 즉 가해자 위협 의도나 피해자 현실 인식과 무관하게 \'객관적 정도\'가 분기 기준이고, 그 정도가 약하면 경범죄·민사 트랙으로 분기되는 영역이라는 시사점이 있습니다.',
        takeaway: '반복 접촉의 위협 정도는 객관적·일반적 기준으로 판단되는 영역이라, 접촉 횟수·거부 의사·위협 표현 자료를 정리하면 스토킹법·경범죄·민사 + 정통망법 4가지 분기 트랙에서 본인 상황에 맞는 선택이 가능한 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '몇 번 반복되어야 스토킹법 적용되나요?',
        answer:
          '<strong>법정 횟수 명시 없습니다.</strong> 다만 일반적으로 3회 이상 + 거부 의사 후 지속이면 인정. 객관적·일반적 위협 정도가 핵심(2023도6411).',
      },
      {
        question: '경범죄로 신고하면 가해자 처벌은?',
        answer:
          '<strong>10만원 이하 벌금 또는 구류 영역입니다.</strong> 잠정조치 없음. 빠른 즉결심판이지만 보호 약함. 반복 시 스토킹법으로 전환.',
      },
      {
        question: '민사 접근금지가처분이 빠른 건가요?',
        answer:
          '<strong>1~2주 내 결정 가능 영역입니다.</strong> 형사 절차 안 거치고 빠른 보호. 위반 시 간접강제(1일 50~100만원). 본안 결합 가능.',
      },
      {
        question: '카톡·전화만 있을 때 어떤 트랙인가요?',
        answer:
          '<strong>스토킹법 + 정통망법 결합 영역입니다.</strong> 정통망법 제74조(공포심·불안감 조성 글)도 적용. 둘 다 형사처벌. 잠정조치 3호(전기통신 금지) 결합.',
      },
      {
        question: '본인이 거부 의사를 안 했는데 신고 가능한가요?',
        answer:
          '<strong>가능 영역입니다(2023도6411·2025도36).</strong> 객관적·일반적 위협이면 본인 거부 의사·인식과 무관. 다만 거부 의사 자료가 있으면 정황 강해짐.',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 법적 기준', href: '/guide/stalking/stalking-legal-criteria' },
      { label: '잠정조치 적용 효과', href: '/guide/stalking/stalking-provisional-measure-application-effect' },
      { label: '온라인만 있는 경우 적용', href: '/guide/stalking/stalking-online-only-still-applicable' },
      { label: '피해자 인식 부재 2025', href: '/guide/stalking/stalking-no-victim-awareness-supreme-2025' },
      { label: '신변보호 즉시 대응', href: '/guide/stalking/stalking-immediate-response' },
    ],
  },
];
