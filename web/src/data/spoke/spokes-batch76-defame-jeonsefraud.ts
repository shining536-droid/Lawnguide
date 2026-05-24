import { SpokePage } from '../spoke-pages';

// batch76 defamation + jeonse-fraud — 6개 (2026-05-24) = 3+3
//
// 고유 존재 이유:
// defamation 3:
// 1. 아파트 입주민 카페 비방글 피해 — '입주민 온라인 카페 + 특정 + 허위사실 반복 게시' 트랙 (victim)
// 2. 유튜브 댓글 허위사실 유포 피해 — '유튜브 댓글 + 단정 적시·확산 + 구독자 이탈 평판' 트랙 (victim)
// 3. 동창 단톡방 과거 폭로 고소 — '단톡방 사실 언급 + 공익 항변 + 위법성 조각' 트랙 (accused)
//
// jeonse-fraud 3:
// 4. 깡통전세 시세하락 보증금 미반환 — '시세 급락 + 후속 세입자 부재 + 우선변제·임차권등기' 트랙 (victim)
// 5. 신탁부동산 임대 보증금 사기 — '신탁 등기 미고지 + 신탁회사 동의 부재 + 회수 위태' 트랙 (victim)
// 6. 임대인 대리인 위임장 위조 — '위조 위임장·인감 + 무권대리 + 사문서위조·사기' 트랙 (victim)

export const spokesBatch76DefameJeonseFraud: SpokePage[] = [
  // ─── 1. defamation-apartment-resident-cafe-slander-track (victim) ───
  {
    domain: 'defamation',
    slug: 'defamation-apartment-resident-cafe-slander-track',
    keyword: '아파트 입주민 카페 비방글',
    questionKeyword: '아파트 입주민 온라인 카페에 저를 특정해 허위사실로 비방하는 글이 반복 게시돼 이웃들이 수군거려요. 어떻게 대응하나요?',
    ctaKeyword: '입주민 카페 비방글 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '입주민 카페 비방글 명예훼손 — 5단계 대응 점검 | 로앤가이드',
      description:
        '아파트 입주민 카페에 특정해 허위사실 비방글이 반복 게시돼 고통받고 있다면 정보통신망법·형법 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"같은 아파트 입주민 온라인 카페에 \'○○동 ○○○호 주민이 관리비를 횡령했다·이웃과 싸움을 일삼는다\'는 식으로 본인을 특정한 허위사실 비방글이 한 달 넘게 반복 게시됐습니다. 글 아래에는 본인 동·호수가 노출됐고, 댓글로 신상이 추측·확산되면서 엘리베이터에서 마주치는 이웃들이 수군거려 일상이 힘들어졌어요. 작성자는 닉네임 뒤에 숨어 누구인지 확인하기 어려운 상황입니다." 정보통신망법 제70조는 \'정보통신망을 통한 비방 목적의 허위사실 적시\'를 가중 영역으로 규정하고, 형법 제307조는 \'공연히 사실 또는 허위사실을 적시해 명예를 훼손한 행위\'를 명예훼손 영역으로 규정합니다. 카페라는 다수 접근 공간 + 특정 가능성 + 허위사실 반복 게시 결합은 \'공연성·비방 목적\' 평가가 가능한 트랙. 피해자라면 ① 게시물 보존 ② 임시조치 ③ 작성자 특정 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 입주민 카페 비방글 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·임시조치·특정·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 게시물 보존</strong> — 글·댓글 캡처·URL·작성 시각·닉네임 보존.</li>\n<li><strong>② 플랫폼 임시조치</strong> — 카페 운영자·포털에 삭제·블라인드 요청.</li>\n<li><strong>③ 작성자 특정</strong> — 수사기관 통한 IP·가입정보 확인 검토.</li>\n<li><strong>④ 형사 고소</strong> — 정보통신망법 제70조·형법 제307조 검토.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 위자료·확산 손해 청구(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 입주민 카페는 회원 다수가 접근하는 공간이라 \'공연성\' 평가가 가능한 영역. 동·호수 노출 + 반복 게시 + 허위 정황이 비방 목적 평가의 결정 자료가 될 수 있습니다. 삭제 전 원본 캡처 보존이 우선.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·임시조치·고소 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시물·댓글 즉시 보존 (인지 당일)</strong> — 캡처·URL·작성 시각·닉네임·동호수 노출 부분.</li>\n<li><strong>2단계 — 플랫폼 임시조치 요청 (1주 내)</strong> — 카페 운영자·포털 권리침해 신고(블라인드 30일).</li>\n<li><strong>3단계 — 경찰 사이버 고소 + 작성자 특정 (1개월 내)</strong> — IP·가입정보 확인 검토.</li>\n<li><strong>4단계 — 방송통신심의위원회 심의 신청 (병행)</strong> — 반복 게시 시 삭제·접속차단 검토.</li>\n<li><strong>5단계 — 민사 손해배상 청구 (시효 3년)</strong> — 위자료·확산 손해.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">입주민 카페 비방글 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·특정·손해 갈래입니다.</strong></p>\n<ul>\n<li><strong>비방글·댓글 캡처 (작성 시각·URL 포함)</strong></li>\n<li><strong>본인 특정 정황 자료 (동·호수·실명 노출 부분)</strong></li>\n<li><strong>허위사실 반박 자료 (관리비 납부·사실관계 증빙)</strong></li>\n<li><strong>카페 운영자·포털 신고 접수증</strong></li>\n<li><strong>이웃의 인지·확산 정황 (목격 진술 등)</strong></li>\n<li><strong>작성자 닉네임·활동 이력 캡처</strong></li>\n<li><strong>정신적 피해 정황 자료 (진료·상담 기록, 필요 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 캡처는 화면 전체(URL·시각 포함)로 남겨야 증거력 평가에 유리한 영역. 작성자가 글을 지우기 전 보존이 핵심이고, 반복 게시 정황은 별도 폴더로 정리해두면 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>특정 가능성</strong> — 동·호수·외형 묘사로 본인 식별 가능한지 평가.</li>\n<li><strong>공연성</strong> — 회원제 카페도 다수 접근 시 공연성 평가 가능 영역.</li>\n<li><strong>허위 vs 사실</strong> — 허위사실이면 가중, 사실적시도 평가 가능.</li>\n<li><strong>비방 목적</strong> — 반복·악의 정황이 비방 목적 평가 자료.</li>\n<li><strong>작성자 특정</strong> — 익명 닉네임은 수사기관 통한 확인 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>한국인터넷진흥원 개인정보침해 신고 118</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망 허위사실 명예훼손 증명책임 평가 영역',
        summary:
          '대법원 2009도12132(대법원, 2010.11.25 선고) 영역에서 법원은 정보통신망을 통한 허위사실 적시 명예훼손에서 \'허위의 인식\' 등 구성요건은 검사가 증명해야 하는 사정으로 평가될 수 있다고 본 사례 흐름이 있고, 입주민 카페 비방글 평가에도 허위성·인식·공연성 자료가 핵심 트랙으로 검토될 수 있습니다.',
        takeaway: '허위사실 명예훼손은 허위성·인식 입증이 다툼 핵심 영역 — 원본 보존 + 사실관계 증빙 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '회원제 카페 글도 명예훼손이 될 수 있나요?',
        answer:
          '<strong>다수 회원이 접근 가능하면 공연성 평가가 가능한 영역입니다.</strong> 회원 수·접근성 정황이 자료.',
      },
      {
        question: '동·호수만 적혀 있어도 \'특정\'으로 볼 수 있나요?',
        answer:
          '<strong>주변 정황으로 본인 식별이 가능하면 특정 평가가 가능한 영역입니다.</strong> 묘사·맥락 종합.',
      },
      {
        question: '작성자가 닉네임이라 누군지 모르는데 고소가 되나요?',
        answer:
          '<strong>수사기관 통한 IP·가입정보 확인 검토 영역입니다.</strong> 글 보존 후 고소부터 시작.',
      },
      {
        question: '글이 사실이면 명예훼손이 아닌가요?',
        answer:
          '<strong>사실적시도 명예훼손 평가가 가능한 영역입니다.</strong> 공익성·표현 방식에 따라 달라질 소지.',
      },
      {
        question: '카페 운영자에게 삭제 요청하면 바로 지워지나요?',
        answer:
          '<strong>권리침해 신고 시 임시조치(블라인드) 검토 영역입니다.</strong> 삭제 전 원본 캡처 우선.',
      },
    ],
    cta: { text: '삭제·합의·방어 포인트, AI로 먼저 점검하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '온라인 명예훼손 대응', href: '/guide/defamation/online-defamation-response' },
      { label: '사실적시 명예훼손 방어', href: '/guide/defamation/truth-defamation-accused-response' },
      { label: '명예훼손 고소 대응', href: '/guide/defamation/defamation-accused-response' },
      { label: '명예훼손 고소 준비', href: '/guide/defamation/defamation-complaint-prep' },
      { label: '온라인 명예훼손 소송', href: '/guide/defamation/online-defamation-lawsuit-process' },
    ],
  },

  // ─── 2. defamation-youtube-comment-false-fact-track (victim) ───
  {
    domain: 'defamation',
    slug: 'defamation-youtube-comment-false-fact-track',
    keyword: '유튜브 댓글 허위사실 유포',
    questionKeyword: '제 영상·신상에 대해 유튜브 댓글로 허위사실을 단정적으로 적어 퍼뜨려 구독자가 이탈하고 평판이 무너지고 있어요.',
    ctaKeyword: '유튜브 댓글 허위사실 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '유튜브 댓글 허위사실 명예훼손 — 5단계 대응 점검 | 로앤가이드',
      description:
        '유튜브 댓글로 허위사실을 단정적으로 적시·확산해 구독자 이탈과 평판 훼손을 겪고 있다면 정보통신망법·형법 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인 유튜브 채널 영상과 신상에 대해 한 시청자가 댓글로 \'이 사람은 협찬을 숨기고 시청자를 속였다·전과가 있다\'는 식의 허위사실을 단정적으로 적었습니다. 해당 댓글이 \'좋아요\'를 받아 상단에 고정되면서 다른 영상에도 같은 내용이 복사·확산됐고, 구독자가 빠르게 이탈하면서 채널 평판과 수익에 직접 타격을 받고 있어요. 작성자는 여러 계정을 번갈아 쓰며 같은 내용을 반복 게시하고 있습니다." 정보통신망법 제70조는 \'정보통신망을 통한 비방 목적의 사실·허위사실 적시\'를 명예훼손 영역으로 규정하고, 형법 제307조는 \'공연히 사실 또는 허위사실을 적시해 명예를 훼손한 행위\'를 규정합니다. 유튜브 댓글이라는 다수 노출 공간 + 단정적 적시 + 반복·확산 결합은 \'공연성·비방 목적\' 평가가 가능한 트랙. 피해자라면 ① 댓글 보존 ② 임시조치 ③ 작성자 특정 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 유튜브 댓글 허위사실 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·임시조치·특정·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 댓글 보존</strong> — 댓글·계정명·URL·작성 시각·좋아요 수 캡처.</li>\n<li><strong>② 플랫폼 신고·임시조치</strong> — 유튜브 신고 + 권리침해 삭제 요청.</li>\n<li><strong>③ 작성자 특정</strong> — 다계정 정황 정리 + 수사기관 통한 확인 검토.</li>\n<li><strong>④ 형사 고소</strong> — 정보통신망법 제70조·형법 제307조 검토.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 위자료·구독·수익 손해(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상단 고정 댓글·다영상 복사·다계정 반복은 확산성·비방 목적 평가의 결정 자료가 될 수 있는 영역. 구독자 이탈·수익 변동 자료는 손해 입증에 도움이 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·신고·고소 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 댓글·계정 즉시 보존 (인지 당일)</strong> — 캡처·URL·작성 시각·다계정 목록.</li>\n<li><strong>2단계 — 유튜브 신고 + 권리침해 삭제 요청 (1주 내)</strong> — 명예훼손·괴롭힘 신고 양식.</li>\n<li><strong>3단계 — 경찰 사이버 고소 + 작성자 특정 (1개월 내)</strong> — 다계정 IP 확인 검토.</li>\n<li><strong>4단계 — 방송통신심의위원회 심의 신청 (병행)</strong> — 반복·확산 시 삭제·차단 검토.</li>\n<li><strong>5단계 — 민사 손해배상 청구 (시효 3년)</strong> — 위자료·수익 손해.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">유튜브 댓글 허위사실 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·특정·손해 갈래입니다.</strong></p>\n<ul>\n<li><strong>문제 댓글 캡처 (계정명·URL·작성 시각·좋아요 수)</strong></li>\n<li><strong>다영상 복사·다계정 반복 게시 정황 자료</strong></li>\n<li><strong>허위사실 반박 자료 (협찬 표기·사실관계 증빙)</strong></li>\n<li><strong>유튜브 신고 접수·처리 결과 캡처</strong></li>\n<li><strong>구독자 이탈·노출·수익 변동 통계</strong></li>\n<li><strong>작성자 계정 활동 이력·연관 계정 정황</strong></li>\n<li><strong>정신적 피해 정황 자료 (진료·상담 기록, 필요 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 유튜브 스튜디오 분석 데이터(구독 취소·노출 변화)는 손해와의 연관성 정리에 도움이 되는 자료. 댓글이 지워지기 전 화면 전체 캡처(URL·시각 포함)가 우선입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실 vs 의견</strong> — 단정적 사실 적시인지 단순 의견인지 평가.</li>\n<li><strong>허위성·인식</strong> — 허위사실이면 가중, 인식 입증이 핵심.</li>\n<li><strong>확산성</strong> — 상단 고정·다영상 복사가 확산 평가 자료.</li>\n<li><strong>다계정 동일인</strong> — 반복 게시 계정의 연관성 정황.</li>\n<li><strong>손해 산정</strong> — 구독 이탈·수익 변동과 인과관계 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>한국인터넷진흥원 개인정보침해 신고 118</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 인용 형식 표현의 사실 적시 평가 영역',
        summary:
          '대법원 2007도5312(대법원, 2008.11.27 선고) 영역에서 법원은 전문·추측을 인용하는 형식이라도 글 전체 취지상 사실의 존재를 암시하면 \'사실 적시\'로 평가될 수 있다고 본 사례 흐름이 있고, 유튜브 댓글에서 \'~라더라\' 식 인용 표현으로 허위를 암시한 경우에도 사실 적시 평가가 검토될 수 있습니다.',
        takeaway: '인용·추측 형식이라도 사실 암시 시 사실 적시 평가가 가능한 영역 — 전체 맥락 보존 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '\'~라던데\' 같은 인용 형식 댓글도 명예훼손이 될 수 있나요?',
        answer:
          '<strong>전체 취지상 사실을 암시하면 사실 적시 평가가 가능한 영역입니다.</strong> 맥락 종합 판단.',
      },
      {
        question: '유튜브에 신고하면 댓글이 바로 삭제되나요?',
        answer:
          '<strong>신고·권리침해 요청으로 검토되는 영역입니다.</strong> 삭제 전 원본 캡처가 우선.',
      },
      {
        question: '여러 계정으로 같은 내용을 도배하는데 다 처벌되나요?',
        answer:
          '<strong>동일인 다계정 정황은 반복·확산 평가 자료입니다.</strong> 계정 연관성 정리가 핵심.',
      },
      {
        question: '구독자 이탈 손해도 배상받을 수 있나요?',
        answer:
          '<strong>위자료 + 수익 손해 청구가 가능한 영역입니다.</strong> 인과관계·통계 자료가 결정.',
      },
      {
        question: '작성자가 해외 계정이면 추적이 어려운가요?',
        answer:
          '<strong>국제공조·플랫폼 협조 검토 영역입니다.</strong> 변호인·수사기관 상담 권장.',
      },
    ],
    cta: { text: '삭제·합의·방어 포인트, AI로 먼저 점검하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '온라인 명예훼손 대응', href: '/guide/defamation/online-defamation-response' },
      { label: '사실적시 명예훼손 방어', href: '/guide/defamation/truth-defamation-accused-response' },
      { label: '명예훼손 고소 대응', href: '/guide/defamation/defamation-accused-response' },
      { label: '명예훼손 고소 준비', href: '/guide/defamation/defamation-complaint-prep' },
      { label: '온라인 명예훼손 소송', href: '/guide/defamation/online-defamation-lawsuit-process' },
    ],
  },

  // ─── 3. defamation-alumni-chatroom-past-disclosure-accused-track (accused) ───
  {
    domain: 'defamation',
    slug: 'defamation-alumni-chatroom-past-disclosure-accused-track',
    keyword: '동창 단톡방 과거 폭로 명예훼손 고소',
    questionKeyword: '동창 단체 채팅방에서 한 사람의 과거 행실을 말했다가 명예훼손으로 고소당했어요. 저는 사실을 말했고 공익 목적이었는데 방어가 가능한가요?',
    ctaKeyword: '단톡방 과거 폭로 고소 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '단톡방 과거 폭로 명예훼손 — 5단계 방어 점검 | 로앤가이드',
      description:
        '동창 단톡방에서 과거 사실을 말했다가 명예훼손으로 고소당해 막막하다면 형법 제307조·제310조 위법성조각 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"동창 단체 채팅방(약 30명)에서 한 동창이 모임 총무를 맡으려 하자, 본인이 과거 그 사람의 회비 관련 행실을 언급했습니다. 본인은 \'겪은 사실을 동창들에게 알려야 한다\'는 생각이었는데, 며칠 뒤 그 동창으로부터 명예훼손 고소장을 받았어요. 본인은 \'있었던 사실을 말했고 모임의 공동 이익을 위한 것\'이라는 입장이지만, 단톡방 다수에게 전파됐다는 점이 다툼이 되고 있습니다." 형법 제307조는 \'공연히 사실을 적시해 명예를 훼손한 행위\'도 명예훼손 영역으로 규정하지만, 같은 법 제310조는 \'적시 사실이 진실하고 오로지 공공의 이익을 위한 것\'이면 위법성이 조각될 수 있다고 규정합니다. 단톡방 다수 전파 + 사실 적시 + 공익 목적 주장 결합은 \'공연성 인정 vs 위법성 조각\' 평가가 갈리는 트랙. 사실과 다르게 신고되었다거나 혐의를 받고 있다면 ① 사실 진실성 ② 공익성 ③ 표현 절제 ④ 변호인 의견서 ⑤ 합의 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 단톡방 과거 폭로 고소 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진실·공익·표현·의견서·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실 진실성</strong> — 언급한 내용이 객관 사실인지 증빙 정리.</li>\n<li><strong>② 공익성 평가</strong> — 모임 공동 이익 목적인지 사익·악감정인지 평가.</li>\n<li><strong>③ 표현 방식 검토</strong> — 단정·인신공격·과장 표현 여부.</li>\n<li><strong>④ 변호인 의견서</strong> — 형법 제310조 위법성 조각 항변 정리.</li>\n<li><strong>⑤ 합의·정정 대응</strong> — 정정·사과·일부 합의 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사실을 말했더라도 단톡방 다수 전파는 공연성 평가가 가능한 영역. 다만 \'진실 + 오로지 공익\' 결합 시 위법성 조각 항변이 가능한 트랙으로 검토할 수 있습니다. 사적 감정·인신공격 결합 시 항변이 약해질 소지가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·의견서·합의 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 대화·증거 자료 보존 (즉시)</strong> — 단톡방 전체 맥락·앞뒤 대화·언급 사실 증빙.</li>\n<li><strong>2단계 — 변호인 선임 + 의견서 (1~2주)</strong> — 형법 제310조 위법성 조각 항변 정리.</li>\n<li><strong>3단계 — 경찰 조사 출석 (1개월 내)</strong> — 진술 일관성·공익 목적 소명.</li>\n<li><strong>4단계 — 표현 정정·사과 검토 (필요 시)</strong> — 단정·감정 표현 부분 정리.</li>\n<li><strong>5단계 — 합의·민사 협의</strong> — 정정·사과·일부 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">단톡방 과거 폭로 고소 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진실·공익·표현 갈래입니다.</strong></p>\n<ul>\n<li><strong>단톡방 대화 전체 캡처 (앞뒤 맥락 포함)</strong></li>\n<li><strong>언급 사실의 객관 증빙 (회비 내역·증인 진술 등)</strong></li>\n<li><strong>공익 목적 정황 자료 (모임 운영·총무 선임 맥락)</strong></li>\n<li><strong>표현 절제 여부 검토 자료 (단정·감정어 부분)</strong></li>\n<li><strong>본인 동창·모임 관계 자료</strong></li>\n<li><strong>변호인 의견서·항변 자료</strong></li>\n<li><strong>고소장·통지 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \'사실을 말했다\'만으로는 충분하지 않고, \'진실 + 오로지 공익\' 결합이 위법성 조각 항변의 핵심 영역. 단톡방 전체 흐름과 발언 맥락을 함께 보존해두면 공익 목적 소명에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 단톡방 다수 전파가 공연성 평가 자료.</li>\n<li><strong>사실 진실성</strong> — 언급 내용의 객관 증빙 충실성.</li>\n<li><strong>공익성</strong> — 공동 이익 목적 vs 사적 감정 평가.</li>\n<li><strong>표현 방식</strong> — 단정·인신공격 회피가 항변에 유리.</li>\n<li><strong>위법성 조각</strong> — 형법 제310조 항변 가능성 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 명예·모욕 보호법익과 표현의 자유 평가 영역',
        summary:
          '대법원 2014도15290(대법원, 2016.12.27 선고) 영역에서 법원은 명예훼손·모욕이 보호하는 외부적 명예는 개인적 법익이며 공적 사안에 대한 비판은 표현의 자유와 함께 평가될 수 있다고 본 사례 흐름이 있고, 단톡방 과거 사실 언급 평가에도 사실 진실성·공익 목적·표현 방식 결합 항변이 핵심 트랙으로 검토될 수 있습니다.',
        takeaway: '사실 적시도 진실 + 오로지 공익 결합 시 위법성 조각 항변이 가능한 영역 — 맥락 보존 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '사실대로 말했는데도 명예훼손이 될 수 있나요?',
        answer:
          '<strong>사실 적시도 공연성 인정 시 평가가 가능한 영역입니다.</strong> 진실 + 공익 결합 시 위법성 조각 항변.',
      },
      {
        question: '단톡방도 \'공연히\' 말한 것으로 보나요?',
        answer:
          '<strong>다수에게 전파되면 공연성 평가가 가능한 영역입니다.</strong> 인원·전파 정황이 자료.',
      },
      {
        question: '공익 목적이었다는 점은 어떻게 소명하나요?',
        answer:
          '<strong>모임 공동 이익·맥락 자료가 핵심 영역입니다.</strong> 사적 감정·악의 배제 정황 정리.',
      },
      {
        question: '지금 단톡방 발언을 삭제하는 게 나을까요?',
        answer:
          '<strong>변호인 자문 후 결정 영역입니다.</strong> 전체 맥락 보존이 우선, 임의 삭제는 신중.',
      },
      {
        question: '합의로 끝내는 게 나을까요?',
        answer:
          '<strong>증빙 충실도에 따라 변호인 자문이 핵심 영역입니다.</strong> 정정·사과·일부 배상 조합 검토.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '온라인 명예훼손 대응', href: '/guide/defamation/online-defamation-response' },
      { label: '사실적시 명예훼손 방어', href: '/guide/defamation/truth-defamation-accused-response' },
      { label: '명예훼손 고소 대응', href: '/guide/defamation/defamation-accused-response' },
      { label: '명예훼손 고소 준비', href: '/guide/defamation/defamation-complaint-prep' },
      { label: '온라인 명예훼손 소송', href: '/guide/defamation/online-defamation-lawsuit-process' },
    ],
  },

  // ─── 4. jeonse-fraud-underwater-lease-price-drop-track (victim) ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-underwater-lease-price-drop-track',
    keyword: '깡통전세 시세하락 보증금 미반환',
    questionKeyword: '전세 계약 때보다 집값·전세 시세가 크게 떨어졌고, 임대인이 새 세입자를 못 구했다며 만기에도 보증금을 못 돌려준다고 해요.',
    ctaKeyword: '깡통전세 시세하락 보증금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '깡통전세 시세하락 보증금 — 5단계 회수 절차 점검 | 로앤가이드',
      description:
        '시세 급락으로 임대인이 새 세입자를 못 구해 만기에도 보증금을 못 돌려준다며 막막하다면 우선변제·임차권등기 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세 계약 당시보다 집값과 전세 시세가 크게 떨어지면서, 만기가 됐는데도 임대인이 \'새 세입자를 못 구했다·시세가 빠져 돈이 모자란다\'며 보증금 반환을 미루고 있습니다. 다음 집 이사 날짜는 정해졌는데 보증금이 묶여 잔금을 치르기 어려워졌고, 이른바 \'깡통전세\'라 경매로 넘어가도 다 받을 수 있을지 불안한 상황이에요." 주택임대차보호법 제3조의2는 \'대항요건과 확정일자를 갖춘 임차인은 후순위 권리자보다 보증금을 우선변제 받을 수 있다\'고 규정하고, 같은 법 임차권등기명령 제도는 \'이사 후에도 대항력·우선변제권을 유지\'할 수 있도록 합니다. 시세 하락 + 후속 세입자 부재 + 만기 미반환 결합은 우선변제·임차권등기·내용증명 절차를 단계로 검토할 수 있는 트랙. 피해자라면 ① 권리 확인 ② 내용증명 ③ 임차권등기 ④ 보증·소송 ⑤ 피해자 결정 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 깡통전세 보증금 미반환 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리확인·내용증명·임차권등기·소송·결정 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리 확인</strong> — 전입·확정일자·점유로 대항력·우선변제권 점검.</li>\n<li><strong>② 내용증명 발송</strong> — 만기 보증금 반환 청구 + 이행 기한 통지.</li>\n<li><strong>③ 임차권등기명령</strong> — 이사 후에도 대항력·우선변제권 유지.</li>\n<li><strong>④ 보증이행·반환소송</strong> — HUG 보증 가입 시 이행청구 / 미가입 시 소송 검토.</li>\n<li><strong>⑤ 전세사기피해자 결정</strong> — 요건 충족 시 피해지원센터 신청 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보증금을 전액 돌려받는다고 단정하기는 어렵지만, 전입·확정일자·점유가 갖춰져 있으면 우선변제 순위를 확보해 반환 절차를 검토해볼 수 있는 영역. 이사 전 임차권등기 완료가 권리 유지의 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. HUG·전세사기피해지원센터 안내 절차를 참고한 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·시세 자료 확보 (즉시)</strong> — 등기부·전입·확정일자·인근 시세 비교.</li>\n<li><strong>2단계 — 내용증명 발송 (1주 내)</strong> — 만기 반환 청구 + 이행 기한 통지.</li>\n<li><strong>3단계 — 임차권등기명령 신청 (이사 전, 1~2개월)</strong> — 법원 등기 + 대항력 유지.</li>\n<li><strong>4단계 — HUG 보증이행 청구 또는 반환소송 (보증 만기 내)</strong> — 가입 여부에 따라 분기.</li>\n<li><strong>5단계 — 전세사기피해자 결정 신청 (요건 충족 시)</strong> — 피해지원센터·정부 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">깡통전세 보증금 미반환 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리·시세·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서·보증금 송금 영수증</strong></li>\n<li><strong>전입세대 확인·확정일자 자료</strong></li>\n<li><strong>등기부등본 (선순위 권리·근저당 확인)</strong></li>\n<li><strong>인근 시세 비교 자료 (시세 하락 입증)</strong></li>\n<li><strong>임대인 반환 거절·지연 메시지·통화 정황</strong></li>\n<li><strong>HUG 보증 가입 증서 (가입 시) 또는 미가입 확인</strong></li>\n<li><strong>임차권등기명령 신청 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 등기부등본은 인터넷등기소에서 즉시 발급 가능. 선순위 근저당 규모와 시세를 비교해두면 우선변제 순위와 회수 가능 범위를 가늠하는 데 도움이 됩니다. 이사는 임차권등기 완료를 확인한 뒤 검토하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대항요건 유지</strong> — 이사 전 임차권등기 미완료 시 우선변제권 흔들릴 소지.</li>\n<li><strong>선순위 권리</strong> — 근저당 규모에 따라 배당 회수 범위 달라질 수 있음.</li>\n<li><strong>시세 하락 입증</strong> — 인근 매물·실거래 비교 자료.</li>\n<li><strong>보증 가입 여부</strong> — HUG·SGI 가입 시 이행청구 절차 분기.</li>\n<li><strong>피해자 결정 요건</strong> — 요건 충족 여부에 따라 정부 지원 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>전세사기피해지원센터 1533-8119</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 우선변제 후 대항력 유지 평가 영역',
        summary:
          '대법원 2022다255126(대법원, 2023.02.02 선고) 영역에서 법원은 우선변제권을 행사해 일부만 배당받은 임차인도 대항요건을 유지하면 임대차관계의 존속을 주장할 수 있다고 본 사례 흐름이 있고, 깡통전세에서 시세 하락으로 일부만 배당받는 상황에도 대항력 유지 여부가 핵심 트랙으로 검토될 수 있습니다.',
        takeaway: '일부 배당에 그쳐도 대항요건을 유지하면 잔여 보증금 회수를 검토해볼 수 있는 영역 — 임차권등기·변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '시세가 보증금보다 낮아도 돌려받을 수 있나요?',
        answer:
          '<strong>우선변제 순위에 따라 회수 범위가 달라지는 영역입니다.</strong> 선순위 근저당 규모가 관건.',
      },
      {
        question: '이사를 먼저 가도 보증금 권리가 유지되나요?',
        answer:
          '<strong>임차권등기 완료 후 이사하면 대항력·우선변제권 유지를 검토할 수 있습니다.</strong> 순서가 중요.',
      },
      {
        question: '임대인이 \'새 세입자 구하면 준다\'고만 하면 어떻게 하나요?',
        answer:
          '<strong>내용증명 + 임차권등기 병행이 필요한 영역입니다.</strong> 지연 시 권리 보전부터 검토.',
      },
      {
        question: 'HUG 보증에 안 들었으면 회수가 어렵나요?',
        answer:
          '<strong>미가입 시 반환소송·강제집행 트랙을 검토하는 영역입니다.</strong> 권리 순위·재산 파악이 핵심.',
      },
      {
        question: '전세사기피해자 결정도 받을 수 있나요?',
        answer:
          '<strong>요건 충족 여부에 따라 신청을 검토할 수 있는 영역입니다.</strong> 피해지원센터 상담 권장.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 첫 확인', href: '/guide/jeonse-fraud/jeonse-fraud-first-check' },
      { label: '전세사기 피해자 신청서류', href: '/guide/jeonse-fraud/jeonse-fraud-victim-application-docs' },
      { label: '전세사기 피해자 인정 절차', href: '/guide/jeonse-fraud/jeonse-fraud-victim-recognition-process' },
      { label: '전세사기 신고 절차', href: '/guide/jeonse-fraud/jeonse-fraud-report-procedure' },
      { label: '전세사기 민사 vs 형사', href: '/guide/jeonse-fraud/jeonse-fraud-civil-vs-criminal' },
    ],
  },

  // ─── 5. jeonse-fraud-trust-property-deposit-track (victim) ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-trust-property-deposit-track',
    keyword: '신탁부동산 임대 보증금 사기',
    questionKeyword: '등기부에 신탁이 설정된 집인데 임대인이 제대로 알려주지 않고 전세계약을 했고, 알고 보니 신탁회사 동의 없는 계약이라 보증금 회수가 위태로워요.',
    ctaKeyword: '신탁부동산 전세 보증금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '신탁부동산 전세 보증금 — 5단계 회수 절차 점검 | 로앤가이드',
      description:
        '신탁 설정 사실을 모르고 전세계약을 했다가 신탁회사 동의 없는 계약이라 보증금이 위태롭다면 회수 절차 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세계약을 하면서 등기부를 봤지만 \'신탁\'이라는 표시의 의미를 정확히 모른 채, 임대인(위탁자)의 \'문제없다\'는 말만 믿고 보증금을 임대인 계좌로 송금했습니다. 입주 뒤 알아보니 그 집은 신탁회사 앞으로 소유권이 넘어가 있어, 신탁회사의 동의 없이 임대인이 단독으로 한 전세계약이라 효력과 보증금 회수가 위태로운 상황이에요. 신탁회사는 \'동의한 적 없다\'며 명도(퇴거)를 요구할 수도 있다고 합니다." 신탁법은 \'신탁재산의 소유권은 수탁자(신탁회사)에게 있고, 처분·임대 등은 신탁계약이 정한 권한 범위에서만 가능\'하다는 영역을 규정하고, 주택임대차보호법은 \'대항요건·확정일자\'를 갖춘 임차인의 우선변제권을 규정합니다. 신탁 등기 미고지 + 신탁회사 동의 부재 결합은 계약 효력·우선수익자 순위·사기 평가를 함께 검토해야 하는 트랙. 피해자라면 ① 신탁원부 확인 ② 동의 여부 ③ 형사 ④ 민사 ⑤ 피해자 결정 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 신탁부동산 전세 보증금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신탁확인·동의·형사·민사·결정 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 신탁원부 확인</strong> — 등기부 + 신탁원부로 권한·우선수익자 파악.</li>\n<li><strong>② 동의 여부 확인</strong> — 신탁회사의 임대 동의서 존재 여부 확인.</li>\n<li><strong>③ 형사 검토</strong> — 임대인의 신탁 사실 미고지 정황 + 형법 제347조 사기 검토.</li>\n<li><strong>④ 민사 청구</strong> — 보증금 반환·손해배상 + 우선순위 점검.</li>\n<li><strong>⑤ 전세사기피해자 결정</strong> — 요건 충족 시 피해지원센터 신청 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 신탁부동산은 신탁회사 동의 여부에 따라 임차인 권리 보호 범위가 크게 달라지는 영역. 동의서 없이 임대인 단독으로 한 계약은 회수가 위태로울 수 있어, 신탁원부 확인이 가장 먼저 검토할 자료입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 전세사기피해지원센터·법원 안내 절차를 참고한 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신탁원부·계약 자료 확보 (즉시)</strong> — 등기부·신탁원부·계약서·송금 영수증.</li>\n<li><strong>2단계 — 신탁회사 동의 여부 확인 (1주 내)</strong> — 임대 동의서·우선수익자 통지 확인.</li>\n<li><strong>3단계 — 내용증명 + 형사 고소 검토 (1개월 내)</strong> — 미고지 정황 + 보증금 반환 청구.</li>\n<li><strong>4단계 — 민사 반환소송·우선순위 정리 (소멸시효 내)</strong> — 회수 가능 범위 점검.</li>\n<li><strong>5단계 — 전세사기피해자 결정 신청 (요건 충족 시)</strong> — 피해지원센터·정부 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">신탁부동산 전세 보증금 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신탁·동의·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서·보증금 송금 영수증</strong></li>\n<li><strong>등기부등본 (신탁 설정 표시 확인)</strong></li>\n<li><strong>신탁원부 (수탁자 권한·우선수익자 내역)</strong></li>\n<li><strong>신탁회사 임대 동의서 유무 확인 자료</strong></li>\n<li><strong>임대인의 신탁 미고지·\'문제없다\' 정황 메시지</strong></li>\n<li><strong>전입·확정일자 자료</strong></li>\n<li><strong>전세사기피해지원센터 신청 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 신탁원부는 등기소에서 별도로 열람·발급해야 권한 범위와 우선수익자를 확인할 수 있는 자료. 임대인이 \'신탁이라도 괜찮다\'고 한 메시지가 남아 있으면 미고지 정황 정리에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>계약 효력</strong> — 신탁회사 동의 없는 단독 임대의 효력 평가.</li>\n<li><strong>우선수익자 순위</strong> — 신탁 우선수익자와의 배당 순위 다툼.</li>\n<li><strong>미고지 정황</strong> — 임대인의 신탁 사실 미고지가 사기 평가 자료.</li>\n<li><strong>명도 요구</strong> — 신탁회사의 퇴거 요구 가능성과 대항력 평가.</li>\n<li><strong>피해자 결정 요건</strong> — 요건 충족 시 정부 지원 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>전세사기피해지원센터 1533-8119</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전세권 보증금 반환과 등기 말소 동시이행 평가 영역',
        summary:
          '대법원 2010다95062(대법원, 2011.03.24 선고) 영역에서 법원은 임대차보증금을 전세금으로 한 전세권설정의 경우 보증금 반환의무와 전세권등기 말소의무가 동시이행 관계로 평가될 수 있다고 본 사례 흐름이 있고, 신탁부동산 임대에서 보증금 회수와 권리 관계 정리에도 동시이행·우선순위 평가가 핵심 트랙으로 검토될 수 있습니다.',
        takeaway: '보증금 반환과 등기 관계는 동시이행으로 평가될 수 있는 영역 — 신탁원부·우선순위 확인 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '등기부에 \'신탁\'이라고 적혀 있으면 위험한가요?',
        answer:
          '<strong>신탁회사 동의 여부에 따라 권리 보호가 달라지는 영역입니다.</strong> 신탁원부 확인이 우선.',
      },
      {
        question: '신탁회사 동의 없는 전세계약은 무효인가요?',
        answer:
          '<strong>권한 범위에 따라 효력이 달라질 수 있는 영역입니다.</strong> 신탁원부·동의서 확인이 핵심.',
      },
      {
        question: '임대인이 신탁이라고 말 안 했는데 사기인가요?',
        answer:
          '<strong>미고지 정황은 사기 평가 자료가 될 수 있는 영역입니다.</strong> 단정은 어렵고 정황 정리부터.',
      },
      {
        question: '신탁회사가 나가라고 하면 바로 나가야 하나요?',
        answer:
          '<strong>대항력 여부에 따라 대응이 달라지는 영역입니다.</strong> 명도 요구 시 변호인 상담 권장.',
      },
      {
        question: '신탁부동산도 전세사기피해자 결정이 되나요?',
        answer:
          '<strong>요건 충족 여부에 따라 신청을 검토할 수 있는 영역입니다.</strong> 피해지원센터 상담 권장.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 첫 확인', href: '/guide/jeonse-fraud/jeonse-fraud-first-check' },
      { label: '전세사기 피해자 신청서류', href: '/guide/jeonse-fraud/jeonse-fraud-victim-application-docs' },
      { label: '전세사기 피해자 인정 절차', href: '/guide/jeonse-fraud/jeonse-fraud-victim-recognition-process' },
      { label: '전세사기 신고 절차', href: '/guide/jeonse-fraud/jeonse-fraud-report-procedure' },
      { label: '전세사기 민사 vs 형사', href: '/guide/jeonse-fraud/jeonse-fraud-civil-vs-criminal' },
    ],
  },

  // ─── 6. jeonse-fraud-agent-power-of-attorney-forgery-track (victim) ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-agent-power-of-attorney-forgery-track',
    keyword: '임대인 대리인 위임장 위조 전세사기',
    questionKeyword: '임대인을 대리한다는 사람이 위조한 위임장·인감으로 전세계약을 하고 보증금을 가로챈 것 같은데, 실제 소유자는 계약을 모른다고 해요.',
    ctaKeyword: '대리인 위임장 위조 전세사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '대리인 위임장 위조 전세사기 — 5단계 회수 절차 점검 | 로앤가이드',
      description:
        '대리인이 위조 위임장·인감으로 전세계약을 하고 보증금을 가로챘는데 실소유자는 계약을 모른다며 막막하다면 회수 절차 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"임대인을 대신한다는 사람이 \'위임장과 인감증명서가 있다\'며 전세계약을 진행해, 본인은 그 서류를 믿고 보증금을 그 대리인이 알려준 계좌로 송금했습니다. 그런데 이후 실제 소유자에게 연락하니 \'그런 위임을 한 적 없다·계약을 모른다\'고 해, 위임장과 인감이 위조된 무권대리 정황으로 보이고 보증금 회수가 위태로운 상황이에요. 대리인은 연락이 점점 어려워지고 있습니다." 형법 제347조는 \'기망에 의한 재물 교부\'를 사기 영역으로, 같은 법 제231조는 \'권리·의무에 관한 사문서 위조\'를 처벌 영역으로 규정하고, 주택임대차보호법은 \'대항요건·확정일자\'를 갖춘 임차인의 우선변제권을 규정합니다. 위조 위임장·인감 + 무권대리 + 보증금 편취 정황 결합은 사기·사문서위조 형사 + 민사 회수를 함께 검토해야 하는 트랙. 피해자라면 ① 위조 입증 ② 권리 확인 ③ 형사 고소 ④ 민사 청구 ⑤ 피해자 결정 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 대리인 위임장 위조 전세사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 위조입증·권리·형사·민사·결정 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 위조 입증 자료</strong> — 위임장·인감증명서 원본·발급 이력 대조.</li>\n<li><strong>② 권리 확인</strong> — 전입·확정일자·점유로 대항력 점검.</li>\n<li><strong>③ 형사 고소</strong> — 형법 제347조 사기 + 제231조 사문서위조 검토.</li>\n<li><strong>④ 민사 청구</strong> — 대리인·관여자 상대 보증금 반환·손해배상.</li>\n<li><strong>⑤ 전세사기피해자 결정</strong> — 요건 충족 시 피해지원센터 신청 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 위임장·인감이 위조된 무권대리라면 실소유자에게 계약 효력을 주장하기 어려울 수 있어, 위조 입증과 대리인·관여자에 대한 형사·민사 회수가 핵심 영역. 위임장 원본과 인감증명서 발급 이력 대조가 가장 먼저 검토할 자료입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰·전세사기피해지원센터·법원 안내 절차를 참고한 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·위임 자료 즉시 보존 (인지 당일)</strong> — 위임장·인감증명서·계약서·송금 영수증·대화.</li>\n<li><strong>2단계 — 실소유자·인감 발급 이력 확인 (1주 내)</strong> — 위임 부인 진술·발급 사실 대조.</li>\n<li><strong>3단계 — 경찰 고소 (1개월 내)</strong> — 사기·사문서위조 + 대리인 신원·계좌 추적 검토.</li>\n<li><strong>4단계 — 민사 반환·손해배상 + 가압류 (소멸시효 내)</strong> — 대리인·관여자 재산 보전 검토.</li>\n<li><strong>5단계 — 전세사기피해자 결정 신청 (요건 충족 시)</strong> — 피해지원센터·정부 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">대리인 위임장 위조 전세사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 위조·권리·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서·보증금 송금 영수증 (대리인 계좌 포함)</strong></li>\n<li><strong>위임장 원본·사본</strong></li>\n<li><strong>인감증명서 + 발급 이력 대조 자료</strong></li>\n<li><strong>실소유자의 위임 부인 진술·연락 기록</strong></li>\n<li><strong>등기부등본·전입·확정일자 자료</strong></li>\n<li><strong>대리인 신원·연락처·대화·계좌 정황</strong></li>\n<li><strong>전세사기피해지원센터 신청 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 인감증명서는 발급 사실·용도를 대조하면 위조 여부 정리에 도움이 되는 자료. 보증금이 대리인 개인계좌로 송금됐다면 그 흐름을 명확히 보존해 추적·가압류 검토의 근거로 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대리권 존부</strong> — 위임장·인감 위조 시 무권대리 평가.</li>\n<li><strong>계약 효력</strong> — 실소유자에 대한 효력 주장 가능성 평가.</li>\n<li><strong>위조 입증</strong> — 인감 발급 이력·필적 대조 자료.</li>\n<li><strong>회수 대상</strong> — 대리인·관여자 재산 추적·가압류.</li>\n<li><strong>피해자 결정 요건</strong> — 요건 충족 시 정부 지원 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>전세사기피해지원센터 1533-8119</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임대차보증금 공제 약정 효력 평가 영역',
        summary:
          '대법원 2022다311736(대법원, 2025.07.18 선고) 영역에서 법원은 임대차보증금 공제 약정의 효력을 강행규정·견련성 등을 종합해 평가할 수 있다고 본 사례 흐름이 있고, 위임장 위조·무권대리가 문제 된 전세계약에서 보증금 회수 범위와 공제·정산 관계를 정리할 때도 종합 평가가 핵심 트랙으로 검토될 수 있습니다.',
        takeaway: '보증금 회수·공제 관계는 강행규정·견련성을 종합해 평가될 수 있는 영역 — 위조 입증 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '위임장이 진짜인지 어떻게 확인하나요?',
        answer:
          '<strong>인감증명서 발급 이력·실소유자 확인이 핵심 영역입니다.</strong> 원본 대조부터 검토.',
      },
      {
        question: '실소유자가 모르는 계약이면 보증금은 누구에게 받나요?',
        answer:
          '<strong>대리인·관여자 상대 회수를 검토하는 영역입니다.</strong> 신원·계좌 추적이 관건.',
      },
      {
        question: '대리인이 연락을 끊으면 회수가 불가능한가요?',
        answer:
          '<strong>형사 고소 + 가압류 병행을 검토하는 영역입니다.</strong> 재산 보전을 빠르게 검토.',
      },
      {
        question: '보증금을 대리인 개인계좌로 보냈는데 괜찮나요?',
        answer:
          '<strong>송금 흐름이 추적·입증의 핵심 자료가 되는 영역입니다.</strong> 이체 내역 보존 우선.',
      },
      {
        question: '이런 경우도 전세사기피해자 결정이 되나요?',
        answer:
          '<strong>요건 충족 여부에 따라 신청을 검토할 수 있는 영역입니다.</strong> 피해지원센터 상담 권장.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 첫 확인', href: '/guide/jeonse-fraud/jeonse-fraud-first-check' },
      { label: '전세사기 피해자 신청서류', href: '/guide/jeonse-fraud/jeonse-fraud-victim-application-docs' },
      { label: '전세사기 피해자 인정 절차', href: '/guide/jeonse-fraud/jeonse-fraud-victim-recognition-process' },
      { label: '전세사기 신고 절차', href: '/guide/jeonse-fraud/jeonse-fraud-report-procedure' },
      { label: '전세사기 민사 vs 형사', href: '/guide/jeonse-fraud/jeonse-fraud-civil-vs-criminal' },
    ],
  },
];
