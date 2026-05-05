import { SpokePage } from '../spoke-pages';

// batch56 defamation — 3개:
// 1. 학부모 단톡방 모욕 가해자 방어
// 2. 유튜브 댓글 신상공개 피해자
// 3. 익명 회사 후기 사이트 (블라인드 등) 가해자 방어
//
// 고유 존재 이유:
// 1. 이 페이지는 학부모 단톡방에서 다른 학부모를 \'무리한 사람\' 등으로 표현해 모욕죄로 고소된 가해자가 모욕죄 성립 요건 + 사회상규 위배 4단계 방어를 정리하도록 돕는 페이지다.
// 2. 이 페이지는 유튜브 영상 댓글에서 본인 신상(이름·직장·학교)이 폭로된 피해자가 정보통신망법 + 개인정보보호법 + 삭제·삭제요청 결합 트랙을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 블라인드 등 익명 회사 후기 사이트에 본인 회사·상사를 비판적으로 후기 작성 후 명예훼손으로 고소된 가해자가 진실·공익·사회상규 4단계 방어를 정리하도록 돕는 페이지다.

export const spokesBatch56Defamation: SpokePage[] = [
  // ─── 1. defamation / defamation-pta-groupchat-insult-charged ───
  {
    domain: 'defamation',
    slug: 'defamation-pta-groupchat-insult-charged',
    keyword: '학부모 단톡방 모욕 방어',
    questionKeyword: '학부모 단톡방에서 다른 학부모를 "무리한 사람"이라고 했다가 모욕으로 고소됐어요. 방어 가능한가요?',
    ctaKeyword: '학부모 단톡방 모욕 방어 점검',
    type: '방어형',
    perspective: 'accused',
    meta: {
      title: '학부모 단톡방 모욕 고소 — 4가지 방어 트랙 | 로앤가이드',
      description:
        '학부모 단톡방에서 표현 문제로 모욕죄 고소됐다면 모욕 성립 요건 + 공연성 + 사회상규 4가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"학부모 30명이 있는 학년 단톡방에서 다른 학부모의 행동을 두고 \'무리한 사람\', \'상식 밖\'이라고 발언했더니 모욕죄로 고소됐어요. 학부모 단톡방은 사적인 모임인데 모욕죄 성립되나요?" 단톡방 모욕은 형법 제311조 모욕죄(공연성·모욕적 표현·특정성)로 성립이 검토되는 영역이지만, 대법원 2019도7370 판결은 단톡방 발언이라도 \'무례하고 예의에 벗어난 정도\'·\'경미한 추상적 표현\'·\'경미한 욕설\'이라면 원칙적으로 모욕죄 구성요건에 해당하지 않는다고 판시했습니다. 또한 사회상규에 위배되지 않으면 위법성 조각 영역이라, ① 표현이 모욕에 해당하는지 ② 공연성(특정 다수 인식) ③ 사회상규 위배 ④ 합의·처벌불원 4단계로 방어할 수 있는 사례가 있어요.</p>',
    sections: [
      {
        title: 'Q. 단톡방 모욕 4가지 방어 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 모욕 성립·공연성·사회상규·합의 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 모욕적 표현 여부</strong> — \'무리한 사람\' 등은 부정적 의견·비판으로 평가될 여지가 있고 인격 가치 사회적 평가 저하 정도가 한정적이라면 모욕 부정 영역(2019도7370).</li>\n<li><strong>② 공연성 (특정 다수 인식)</strong> — 단톡방 30명이라도 학부모로 한정된 폐쇄 공간이면 공연성 다툼 영역. 다만 일반적으로 단톡방도 공연성 인정되는 사례 다수.</li>\n<li><strong>③ 사회상규 위배 여부</strong> — 표현의 맥락·의도·발언 경위 종합. 정당한 의견 교환 + 비판 의도 입증 시 사회상규 부합 정황으로 평가될 여지.</li>\n<li><strong>④ 합의·처벌불원 (반의사불벌)</strong> — 모욕죄는 반의사불벌 영역. 합의 + 처벌불원서 시 \'공소권 없음\'으로 종결 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단톡방 발언이라도 \'경미한 무례\' 수준이면 모욕죄 부정 영역. 표현 자체가 \'사회 평가 저하\' 정도여야 인정. 발언 맥락·전후 정황 정리가 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 변호인 선임 → 조사 출석 → 합의·검찰 → 본안 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 단톡방 전체 캡처·발언 전후 맥락·다른 참여자 발언·본인 발언 의도 자료.</li>\n<li><strong>2단계 — 변호인 선임 (출석 전 권장)</strong> — 모욕죄는 합의가 핵심이라 변호인 자문으로 합의 전략 + 진술 정리.</li>\n<li><strong>3단계 — 경찰 조사 출석 (10~14일 내)</strong> — 발언 맥락·의도 진술. 변호인 동석. 진술서·의견서 제출.</li>\n<li><strong>4단계 — 합의 시도 (가능한 빨리)</strong> — 피해자 합의 + 처벌불원서 확보 시 \'공소권 없음\' 종결 가능.</li>\n<li><strong>5단계 — 형사 본안 (불합의 시)</strong> — 모욕죄는 1년 이하 징역 또는 200만원 이하 벌금. 양형 다툼 + 위법성 조각 변론.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">학부모 단톡방 모욕 4가지 방어 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 단톡방 자료 + 발언 맥락 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>단톡방 전체 캡처</strong> — 본인 발언 + 전후 맥락.</li>\n<li><strong>다른 참여자 발언 자료</strong> — 의견 교환·논쟁 정황.</li>\n<li><strong>본인 발언 의도·맥락 정리</strong> — 의도서·메모.</li>\n<li><strong>피해자와의 사전 관계 자료</strong> — 갈등 정황·동기.</li>\n<li><strong>합의 시도·처벌불원서</strong> — 합의금·처벌불원 의사.</li>\n<li><strong>본인 직장·평판 자료</strong> — 양형 자료(초범·반성).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 단톡방 발언이 \'사적 의견 교환\'·\'경미한 무례\' 수준이고 다른 참여자도 비슷한 발언을 한 정황이 있다면 사회상규 부합 정황 자료. 본인 단독 표적 처벌 다툼 가능 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 검찰·피해자 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"단톡방도 공연성 인정" 주장 부분 인정</strong> — 일반적으로 단톡방 30명은 공연성 인정 영역. 다만 폐쇄성·관계 친밀도로 다툼 가능 영역.</li>\n<li><strong>"\'무리한 사람\'은 모욕적 표현" 주장 반박</strong> — 부정적 의견·비판 표현이지만 인격 평가 저하 정도가 한정적이면 모욕 부정 영역(2019도7370).</li>\n<li><strong>"공인이라 더 강한 비판도 허용" 결합 주장</strong> — 학부모는 공인이 아니라 적용 어려운 영역. 사적 영역 비판은 한계.</li>\n<li><strong>합의 우선 권장</strong> — 모욕죄는 반의사불벌이라 합의가 가장 빠른 종결. 합의금 50~200만원 영역에서 협의 가능 사례.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 형사 무료 상담.</li>\n<li><strong>국선변호인 (대한변협 02-2087-7700)</strong> — 자격 요건 시.</li>\n<li><strong>경찰 민원 110·182</strong> — 부당 출석 민원.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 단체채팅방 모욕 표현의 위법성 판단기준',
        summary:
          '대법원 2019도7370 사건(대법원, 2022.08.31 선고)에서 법원은 모욕죄에서 말하는 \'모욕\'의 의미를 정의하면서, 상대방을 불쾌하게 할 수 있는 무례하고 예의에 벗어난 정도의 표현이거나 부정적·비판적 의견·감정을 나타내면서 경미한 수준의 추상적 표현이나 욕설이 사용된 경우 원칙적으로 모욕죄 구성요건에 해당하지 않는다고 판시했습니다. 사업소 소장이 직원들에게 카카오톡 메시지로 동료를 비판한 사안에서 모욕죄 성립을 부정한 사례입니다.',
        takeaway: '단톡방 모욕은 표현의 정도·맥락·사회상규 위배 여부 결합 영역이라, 단톡방 캡처·발언 맥락·합의 시도 자료를 정리하면 모욕 부정 + 합의 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '단톡방 30명이면 공연성 무조건 인정되나요?',
        answer:
          '<strong>일반적으로 인정되는 영역이지만 폐쇄성·관계 친밀도로 다툼 가능합니다.</strong> 학부모 단톡방·동호회 등 친밀 관계 폐쇄 모임이라면 공연성 다툼 트랙. 단독 결정 요인은 아닌 영역.',
      },
      {
        question: '욕설 없이 \'무리하다\'고 한 것도 모욕인가요?',
        answer:
          '<strong>부정적 비판 표현으로 평가되지만 인격 평가 저하 정도가 한정적이면 모욕 부정 영역입니다(2019도7370).</strong> 표현 정도·맥락 종합 판단.',
      },
      {
        question: '합의 안 하면 무조건 처벌받나요?',
        answer:
          '<strong>모욕죄는 반의사불벌이지만 처벌 가능 영역입니다.</strong> 다만 위법성 조각·사회상규 부합 입증 시 무죄·기소유예 가능. 합의가 가장 빠른 종결 트랙.',
      },
      {
        question: '합의금 얼마가 적정한가요?',
        answer:
          '<strong>모욕죄 합의금은 50~200만원 영역이 일반적입니다.</strong> 발언 정도·관계·피해자 입장 종합. 변호사 자문으로 적정 합의금 협의.',
      },
      {
        question: '단톡방을 본인이 나갔는데 캡처가 없어요',
        answer:
          '<strong>다른 참여자에게 캡처 요청 가능 영역입니다.</strong> 또는 경찰 사건 자료에서 캡처 확인 가능. 본인 발언 맥락 입증을 위해 핵심 자료 확보 필수.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '단톡방 모욕 vs 명예훼손', href: '/guide/defamation/defamation-company-chat-insult-vs-defamation' },
      { label: '회사 단톡방 가해자 방어', href: '/guide/defamation/defamation-company-groupchat-criticism-accused' },
      { label: '단톡방 모욕 캡처 증거', href: '/guide/defamation/defamation-group-chat-screenshot-evidence-value' },
      { label: '카톡 사적 대화 누설', href: '/guide/defamation/defamation-private-chat-leak-accused' },
      { label: '학교 학부모 단톡방 명예훼손', href: '/guide/defamation/defamation-school-parent-chat-defamation' },
    ],
  },

  // ─── 2. defamation / defamation-youtube-doxxing-victim-takedown ───
  {
    domain: 'defamation',
    slug: 'defamation-youtube-doxxing-victim-takedown',
    keyword: '유튜브 댓글 신상공개 피해자',
    questionKeyword: '유튜브 영상 댓글에 본인 이름·직장이 폭로됐어요. 삭제·고소 어떻게 해야 하나요?',
    ctaKeyword: '유튜브 신상공개 삭제 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '유튜브 댓글 신상공개 — 4단계 삭제·고소 트랙 | 로앤가이드',
      description:
        '유튜브 영상 댓글에 본인 신상이 폭로됐다면 정보통신망법 + 개인정보보호법 + 삭제요청 4단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"유튜브 영상 댓글에 누군가 \'이 사람 OO회사 OO팀 OO인데, 사실 OO한 짓을 했다\'고 신상을 폭로했어요. 댓글이 1주일 만에 좋아요 500개에 답글 100개 달렸습니다." 유튜브 댓글 신상공개는 ① 정보통신망법 제70조 명예훼손 ② 개인정보보호법 위반 ③ 형법 제307조 명예훼손·제311조 모욕 ④ 임시조치 + 삭제요청 4가지 트랙으로 대응 가능한 영역입니다. 신상공개 + 사실 적시는 \'사실 적시 명예훼손\' 영역(허위 적시는 가중), 사실 적시라도 공익성·진실성 결합돼야 위법성 조각 가능. 작성자 IP 추적은 통신사실확인자료 제공 신청으로 가능하고, 임시조치는 유튜브 자체 신고 + 방통심의위 트랙으로 결합 가능합니다.</p>',
    sections: [
      {
        title: 'Q. 유튜브 신상공개 4가지 대응 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 삭제·임시조치·고소·민사 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 유튜브 자체 신고 + 임시조치</strong> — 유튜브 약관 위반 신고로 24~72시간 내 삭제 가능. 정보통신망법상 30일 임시조치도 가능.</li>\n<li><strong>② 방송통신심의위원회 신고</strong> — 위원회 \'개인정보 침해\'·\'권리침해정보\' 신고로 삭제 명령 가능. 무료, 평균 30~60일.</li>\n<li><strong>③ 형사 고소 (정보통신망법 + 형법 명예훼손)</strong> — 사실 적시 + 허위 적시 + 모욕 결합 가능. 작성자 추적은 통신사실확인자료 신청.</li>\n<li><strong>④ 민사 손해배상</strong> — 위자료(통상 300~1,000만원 영역) + 삭제 가처분 청구. 작성자 특정 시 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 신상공개 댓글은 즉시 캡처(URL·작성자ID·시간) + 유튜브 신고 + 방통심의위 신고 + 형사 고소 4단계 동시 진행이 효과적인 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 삭제·고소 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 삭제 요청 → 임시조치 → 형사 고소 → 작성자 추적 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 댓글 URL·캡처·작성자 ID·시간·답글·좋아요 수.</li>\n<li><strong>2단계 — 유튜브 신고 (1일 내)</strong> — 댓글 옆 \'신고\' 버튼 + 약관 위반 사유 명시. 평균 1~3일 처리.</li>\n<li><strong>3단계 — 방통심의위 신고 (1주 내)</strong> — kocsc.or.kr \'개인정보 침해\' 신고. 30일 임시조치 명령 가능.</li>\n<li><strong>4단계 — 형사 고소 (2주 내)</strong> — 관할 경찰서 사이버수사대 또는 ecrm.police.go.kr. 정보통신망법 + 형법 명예훼손 결합.</li>\n<li><strong>5단계 — 작성자 추적·민사</strong> — 통신사실확인자료 신청으로 IP 추적 + 작성자 특정. 민사 손해배상·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">유튜브 신상공개 4단계 대응을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 댓글 자료 + 본인 피해 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>댓글 URL·캡처</strong> — 영상 + 댓글 + 작성자 ID + 시간.</li>\n<li><strong>답글·좋아요 수</strong> — 확산 정황·피해 정도.</li>\n<li><strong>유튜브 신고 영수증</strong> — 신고일·사유.</li>\n<li><strong>방통심의위 신고서</strong> — 권리침해 사유.</li>\n<li><strong>본인 신상 공개 정황</strong> — 이름·직장·학교 등 폭로 범위.</li>\n<li><strong>피해 자료</strong> — 직장·지인 인지 정황·정신과 진료.</li>\n<li><strong>주변 지인 진술</strong> — 댓글 인지·신상 인식 정황.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 댓글이 작성된 영상의 조회수·구독자 수도 피해 정도 입증 자료. 100만 조회수 영상 댓글이라면 확산 정황의 강력한 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 작성자 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"사실 적시라 명예훼손 아니다" 주장 반박</strong> — 사실 적시도 명예훼손 영역(형법 제307조 제1항). 공익성·진실성 결합돼야 위법성 조각.</li>\n<li><strong>"본인 의견일 뿐" 주장 반박</strong> — 신상 공개 + 부정적 평가 결합은 단순 의견 표명을 넘는 영역.</li>\n<li><strong>"외국 거주" 작성자 추적 한계</strong> — 통신사실확인자료 + 인터폴 협조 필요. 추적이 어려운 사례 있음.</li>\n<li><strong>합의·삭제 우선 권장</strong> — 형사 절차보다 삭제·합의가 피해 최소화 트랙. 작성자 특정 후 합의 시도.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>방송통신심의위원회 (kocsc.or.kr) 1377</strong> — 권리침해정보 신고.</li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.police.go.kr) / 182</strong></li>\n<li><strong>개인정보분쟁조정위원회 (kopico.go.kr) 1833-6972</strong></li>\n<li><strong>대한법률구조공단 132</strong> — 무료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 인터넷 댓글의 모욕·명예훼손 위법성 판단',
        summary:
          '대법원 2017도19229 사건(대법원, 2022.12.15 선고)에서 법원은 인터넷 포털사이트 뉴스 댓글란에 피해자에 대해 \'국민호텔녀\', \'퇴물\' 등의 표현을 사용하여 모욕한 사안에서 모욕죄의 보호법익을 외부적 명예로 보고, 표현의 자유와 명예 보호 사이의 한계를 종합 판단해야 한다고 판시했습니다. 인터넷 공간 표현이라도 인격적 가치 사회적 평가 저하 정도에 따라 모욕·명예훼손 성립이 평가되는 영역으로, 신상공개 댓글은 더 강한 위법성 정황으로 평가될 여지가 있다는 시사점이 있습니다.',
        takeaway: '유튜브 댓글 신상공개는 정보통신망법 + 개인정보보호법 + 형법 명예훼손 결합 영역이라, 댓글 캡처·신고·고소 자료를 정리하면 4단계 대응 트랙이 모두 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '댓글이 사실 적시면 명예훼손 안 되나요?',
        answer:
          '<strong>사실 적시도 명예훼손 영역입니다(형법 제307조 제1항).</strong> 공익성·진실성 결합돼야 위법성 조각. 단순 신상 폭로는 공익성 인정 어려운 영역.',
      },
      {
        question: '유튜브가 댓글 삭제를 안 해줘요',
        answer:
          '<strong>방통심의위 신고 + 임시조치 트랙이 강력합니다.</strong> 30일 임시조치 명령 후 유튜브가 강제 삭제. 미이행 시 추가 행정 절차.',
      },
      {
        question: '작성자가 익명·외국 거주면 추적 가능한가요?',
        answer:
          '<strong>통신사실확인자료 + 인터폴 협조 필요 영역입니다.</strong> 국내 IP면 추적 가능, 해외 VPN이면 어려운 사례. 다만 삭제 트랙은 별도 가능.',
      },
      {
        question: '위자료 얼마 받을 수 있나요?',
        answer:
          '<strong>유튜브 신상공개 위자료는 300~1,000만원 영역이 일반적입니다.</strong> 확산 정도·피해 정도·작성자 의도 종합. 영상 조회수 + 댓글 좋아요·답글 자료가 핵심.',
      },
      {
        question: '직장에서 본인이 신상이 폭로된 걸 알게 됐어요',
        answer:
          '<strong>직장 인지 정황은 위자료 산정의 강한 자료입니다.</strong> 직장 동료 진술·인사평가 영향·정신과 진료 자료 결합 시 위자료 가중 영역.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '온라인 게시글 삭제 청구', href: '/guide/defamation/defamation-online-post-deletion-request-procedure' },
      { label: '익명 게시판 작성자 추적', href: '/guide/defamation/defamation-anonymous-poster-identity-trace' },
      { label: '유튜브 댓글 신상공개 가해자 방어', href: '/guide/defamation/defamation-youtube-comment-doxxing-accused' },
      { label: '딥페이크 명예훼손 삭제', href: '/guide/defamation/defamation-deepfake-victim-takedown-procedure' },
      { label: '온라인 명예훼손 삭제 가처분', href: '/guide/defamation/defamation-online-false-deletion-injunction' },
    ],
  },

  // ─── 3. defamation / defamation-blind-app-anonymous-employer-criticism ───
  {
    domain: 'defamation',
    slug: 'defamation-blind-app-anonymous-employer-criticism',
    keyword: '블라인드 익명 회사 후기 명예훼손',
    questionKeyword: '블라인드에 본인 회사 비판 후기를 익명으로 썼는데 회사가 고소했어요. 방어 가능한가요?',
    ctaKeyword: '블라인드 후기 방어 점검',
    type: '방어형',
    perspective: 'accused',
    meta: {
      title: '블라인드 익명 회사 후기 — 4가지 방어 트랙 | 로앤가이드',
      description:
        '블라인드·잡플래닛 등 익명 회사 후기로 명예훼손 고소됐다면 진실·공익·사회상규 4가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"블라인드에 \'우리 회사 야근 강요·갑질이 심하다\'는 익명 후기를 썼더니 회사가 본인 IP를 추적해 명예훼손으로 고소했어요. 익명 후기인데 처벌받나요?" 익명 회사 후기는 ① 형법 제307조 사실 적시·허위 적시 명예훼손 ② 정보통신망법 제70조 정보통신망 명예훼손 ③ 진실·공익·사회상규 4가지 트랙으로 다툼이 가능한 영역입니다. 사실 적시라도 명예훼손 성립 가능하지만, \'진실 + 공공의 이익\'이 결합되면 위법성 조각 영역(형법 제310조). 회사의 갑질·노동법 위반·근무 조건 등은 \'근로자의 정당한 의견 표명\'으로 평가될 수 있는 사례가 있어요. 익명이라도 통신사실확인자료로 추적 가능하지만, 후기 내용이 진실 + 공익 결합되면 방어 트랙이 열리는 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 블라인드 후기 4가지 방어 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 진실성·공익성·사회상규·합의 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 진실성 (형법 제310조)</strong> — 후기 내용이 사실에 부합하는지. 야근 강요·갑질 등 회사 내 사실 입증 자료가 있다면 진실성 인정 영역.</li>\n<li><strong>② 공공의 이익</strong> — 후기 내용이 \'근로자 일반의 이익\'·\'취업 준비자의 정보\' 등 공공 이익 결합 시 위법성 조각.</li>\n<li><strong>③ 사회상규 위배 여부</strong> — 표현 정도·맥락·의도 종합. 정당한 비판·의견 표명 입증 시 사회상규 부합.</li>\n<li><strong>④ 합의 (반의사불벌)</strong> — 정보통신망법 명예훼손은 반의사불벌. 합의 + 처벌불원서 시 \'공소권 없음\' 종결 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회사 후기는 진실 + 공익 결합 시 위법성 조각 가능 영역. 회사 갑질·노동법 위반·근무 조건은 일반적으로 공익 결합 정황. 자료 입증이 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 변호인 선임 → 조사 → 합의·검찰 → 본안 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 후기 캡처·진실성 입증 자료(야근·갑질 정황)·다른 직원 증언·노동법 위반 자료.</li>\n<li><strong>2단계 — 변호인 선임</strong> — 진실·공익 입증 + 합의 전략. 변호사·법률구조공단 132 자문.</li>\n<li><strong>3단계 — 경찰 조사 (10~14일 내)</strong> — 후기 의도·진실성 자료 진술. 변호인 동석.</li>\n<li><strong>4단계 — 합의 검토 또는 검찰 송치</strong> — 합의 시 \'공소권 없음\'. 진실·공익 입증 강하면 무혐의 검찰 의견 가능.</li>\n<li><strong>5단계 — 형사 본안 (불합의 + 기소 시)</strong> — 진실·공익·사회상규 본격 변론. 양형 다툼 결합.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">블라인드 후기 4가지 방어 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 후기 자료 + 진실 입증 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>후기 캡처</strong> — 본인 후기 + 시점.</li>\n<li><strong>진실성 입증 자료</strong> — 야근 시간·갑질 정황·근무 조건.</li>\n<li><strong>다른 직원 증언</strong> — 같은 정황 인지·증언.</li>\n<li><strong>노동법 위반 자료</strong> — 노동청 신고·근로감독관 자료.</li>\n<li><strong>회사 측 압박 정황</strong> — 후기 후 인사 불이익 등.</li>\n<li><strong>합의 시도 자료</strong> — 합의금·처벌불원 의사.</li>\n<li><strong>변호인 의견서</strong> — 위법성 조각 사유 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인 후기와 같은 정황을 다른 직원도 후기로 남긴 정황이 있다면 진실성 + 공공 이익의 강력한 자료. 회사 평판 평균이 낮은 정황도 정황 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"허위 사실이라 명예훼손" 주장 반박</strong> — 후기 내용이 사실에 부합한다면 허위 부정 영역. 진실성 입증 자료가 핵심.</li>\n<li><strong>"공익 아닌 사적 비방" 주장 반박</strong> — 회사 노동 환경·갑질 정황은 일반적으로 공익 결합 영역. 취업 준비자·근로자 일반의 이익.</li>\n<li><strong>"회사 평판 손상이라 처벌" 주장 부분 반박</strong> — 정당한 비판은 표현의 자유 영역. 사실 + 공익 결합 시 위법성 조각.</li>\n<li><strong>합의 + 후기 삭제 가능성</strong> — 합의 시 후기 삭제 + 합의금 결합. 처벌불원서로 \'공소권 없음\'.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 명예훼손 무료 상담.</li>\n<li><strong>국선변호인 (대한변협 02-2087-7700)</strong> — 자격 요건 시.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 노동법 위반 진정.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실 적시 명예훼손과 공공의 이익 위법성 조각',
        summary:
          '대법원 2017도17643 사건(대법원, 2021.03.25 선고)에서 법원은 인터넷 게시판에 작성된 단문의 글에 모욕적 표현이 포함되어 있더라도 그 글을 작성한 행위가 사회상규에 위배되지 않으면 위법성이 조각될 수 있다고 판시했습니다. 인터넷 신문 기사에 \'기레기\' 댓글을 남긴 사안에서 사회상규 위배 부정으로 무죄를 본 사례입니다. 회사 후기도 사회상규에 부합한다면 위법성 조각 영역으로 평가될 여지가 있다는 시사점이 있습니다.',
        takeaway: '블라인드 후기 명예훼손은 진실·공익·사회상규 결합 영역이라, 후기 캡처·진실 입증·다른 직원 증언 자료를 정리하면 4가지 방어 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '익명이라 추적 안 될 줄 알았어요',
        answer:
          '<strong>익명도 통신사실확인자료로 추적 가능 영역입니다.</strong> 다만 후기 내용이 진실 + 공익이라면 추적돼도 위법성 조각 가능. 자료 입증이 핵심.',
      },
      {
        question: '"진실 + 공익"은 어떻게 입증하나요?',
        answer:
          '<strong>야근 시간·갑질 정황·근무 조건 자료 + 다른 직원 증언이 핵심입니다.</strong> 노동청 신고·근로감독 자료가 있다면 더 강력. 변호사 자문으로 입증 자료 정리.',
      },
      {
        question: '합의금이 너무 부담돼요',
        answer:
          '<strong>변호사·법률구조공단 132 자문으로 합리적 합의금 협의 가능합니다.</strong> 일반적으로 100~500만원 영역. 진실·공익 입증 강하면 합의 없이도 무혐의 가능.',
      },
      {
        question: '후기 삭제 안 하면 더 큰 처벌받나요?',
        answer:
          '<strong>합의 시 후기 삭제 조건이 일반적입니다.</strong> 다만 후기가 진실 + 공익이라면 삭제 의무 부재. 합의 조건 협의 + 변호인 의견서.',
      },
      {
        question: '회사가 본인을 해고할까봐 두렵습니다',
        answer:
          '<strong>후기 작성을 이유로 한 해고는 부당해고 다툼 영역입니다.</strong> 노동위 부당해고 구제신청 + 별도 트랙. 후기 + 해고 결합 시 보복 정황으로 다툼 강화.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '회사 후기 진실 방어', href: '/guide/defamation/defamation-business-review-truth-defense' },
      { label: '글래스도어 익명 후기', href: '/guide/defamation/defamation-former-employee-review-glassdoor' },
      { label: '회사 후기 사실 적시 방어', href: '/guide/defamation/defamation-employer-review-defense' },
      { label: '진실 적시도 처벌 가능', href: '/guide/defamation/defamation-truth-still-guilty' },
      { label: '익명 게시글 작성자 추적', href: '/guide/defamation/defamation-anonymous-post-writer-identification' },
    ],
  },
];
