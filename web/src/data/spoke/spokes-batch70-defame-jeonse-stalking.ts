import { SpokePage } from '../spoke-pages';

// batch70 defame-jeonse-stalking — 7개 (2026-05-20)
//
// 고유 존재 이유:
// 1. defamation-kakaotalk-private-groupchat-screenshot-leak-public-victim — 사적 동호회·지인 단톡방 험담이 다른 회원의 캡처로 외부 SNS·커뮤니티에 유포된 사례 (단톡방 내부 명예훼손 + 캡처 유포자 별개 책임 트랙). 사내 단톡방 / 단톡방 내부 발언만 다루는 트랙과 분기.
// 2. defamation-corporate-internal-anonymous-board-post-accused-disciplinary — 회사 내부 익명게시판에 동료를 비방하는 글을 올린 후 본인이 작성자로 지목돼 회사 징계+형사 양트랙에 걸린 가해자 트랙. 일반 가해자 트랙·외부 게시판과 분기.
// 3. defamation-falsely-accused-counter-fact-disprove-victim-track — 본인이 명예훼손으로 고소당했으나 적시한 내용이 사실에 부합하거나 사실과 다르게 신고된 무고(사실과 다른 신고) 방어 트랙. 일반 accused 트랙과 분기.
// 4. jeonse-landlord-refuse-move-out-transfer-registration — 임대인이 전출신고를 거부·미협조해 새 임차인이 들어오지 못하고 보증금 반환이 막힌 경우 임차권등기·내용증명·이사 후 대항력 유지 트랙. 일반 반환 거절과 분기.
// 5. jeonse-implicit-renewal-landlord-rent-increase-demand-refuse — 묵시적 갱신 후 임대인이 새로 임대료 5~10% 인상을 요구·거부 시 즉시 종료 위협하는 사례 다툼. 갱신요구권·임대료 5% 상한·해지 통보 트랙. 갱신 종료 트랙과 분기.
// 6. stalking-ex-lover-sns-secondary-account-repeated-approach — 헤어진 연인이 차단 후 부계정·새 계정으로 SNS 팔로우·DM·게시물 좋아요 반복 접근. 차단 우회 + 다중 SNS 플랫폼 + 동일성 입증 트랙. 일반 SNS DM과 분기.
// 7. stalking-coworker-commute-route-following — 직장 동료가 퇴근길에 본인 동선을 반복 추적·따라오기. 직장 내부 + 외부 동선 추적 결합 트랙. 회사 신고 + 형사 양트랙. 일반 직장 스토킹·전 직장 트랙과 분기.

export const spokesBatch70DefameJeonseStalking: SpokePage[] = [
  // ─── 1. defamation-kakaotalk-private-groupchat-screenshot-leak-public-victim-track ───
  {
    domain: 'defamation',
    slug: 'defamation-kakaotalk-private-groupchat-screenshot-leak-public-victim-track',
    keyword: '단톡방 험담 캡처 외부 유포 명예훼손',
    questionKeyword: '동호회 카카오톡 단톡방에서 본인을 험담한 대화가 다른 회원의 캡처를 통해 외부 SNS·커뮤니티에 유포됐어요. 발언자와 유포자 모두 처벌 가능한가요?',
    ctaKeyword: '단톡방 험담 캡처 유포 명예훼손 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '단톡방 험담 캡처 외부 유포 — 5단계 발언·유포자 분리 책임 다툼 | 로앤가이드',
      description:
        '사적 단톡방 험담이 캡처로 외부 SNS·커뮤니티에 유포된 피해자라면 발언자·유포자 분리 책임 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인이 가입한 취미 동호회 카카오톡 단톡방에서 회원들끼리 본인을 두고 \"이상하다\" \"믿을 사람 못 된다\" \"전 회사에서 문제 일으켜서 잘렸다더라\" 같은 험담을 주고받았어요. 그 단톡방에 있던 다른 회원이 대화 일부를 캡처해 트위터·블라인드·동호회 외부 카페에 \"이런 사람 조심하라\"며 본인 실명과 함께 올렸고, 며칠 만에 수십 건 공유돼 본인이 다른 모임에서도 \"그 사람\"이라며 거론되는 상황입니다.\" 단톡방 험담 캡처 외부 유포는 ① 단톡방 내부 발언 자체의 명예훼손 (정통망법 70조·다수 회원 전파 가능성) ② 캡처 외부 유포자의 별도 명예훼손 (재게시·확산) ③ 발언자와 유포자 각자 독립 책임 ④ 모욕 311조 결합 ⑤ 사이버수사·민사 손해배상 5가지 트랙이 결합되는 영역. 캡처 유포는 원 발언과 별개 공공연 행위로 평가 가능. 대응은 ① 보존 ② 게시판 ③ 추적 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 단톡방 험담 캡처 유포 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·플랫폼·추적·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 원 단톡방 대화·외부 유포 게시물·공유자 캡처</strong></li>\n<li><strong>② 외부 플랫폼(트위터·블라인드·카페) 삭제 신고</strong></li>\n<li><strong>③ 발언자·유포자 신원·IP·계정 추적</strong></li>\n<li><strong>④ 발언자 + 유포자 각각 형사 명예훼손·모욕 고소</strong></li>\n<li><strong>⑤ 민사 손해배상·삭제 가처분</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단톡방 내부 발언과 외부 캡처 유포는 별개의 공공연한 행위로 평가될 수 있는 영역. 단톡방이 다수 회원이면 그 자체로 공연성 인정 가능, 외부 SNS·커뮤니티 유포는 전파성 명확. 발언자가 유포 자체에는 관여하지 않았어도 발언 자체 책임은 여전.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·신고·고소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 원 단톡방 대화·외부 유포 게시물·공유자 URL 캡처 보존 (즉시)</strong></li>\n<li><strong>2단계 — 외부 플랫폼 삭제 신고 + 방심위 신고 (3~14일)</strong></li>\n<li><strong>3단계 — 사이버수사대 신고 + IP·계정 협조 요청</strong></li>\n<li><strong>4단계 — 발언자·유포자 각각 정통망법 70조·모욕죄 고소</strong></li>\n<li><strong>5단계 — 민사 손해배상 + 삭제 가처분</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">단톡방 험담 외부 유포 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 원본·유포·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>원 단톡방 대화 전체 캡처·참여자 목록·일시</strong></li>\n<li><strong>외부 유포 게시물 URL·작성자ID·캡처</strong></li>\n<li><strong>유포 공유·리트윗·재게시 흐름 자료</strong></li>\n<li><strong>플랫폼 삭제 신고 접수증·답변</strong></li>\n<li><strong>2차 피해 자료(다른 모임에서 거론·문의)</strong></li>\n<li><strong>본인 정신적 피해 진단서·상담 기록</strong></li>\n<li><strong>변호인 의견서·고소장 초안</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 원 단톡방 대화는 본인이 회원이면 직접 캡처 가능. 본인이 단톡방 미참여면 다른 회원·캡처 유포자 확보 자료가 핵심. 외부 유포 시점·확산 범위가 손해배상 산정 핵심 변수. 발언자·유포자 둘 다 동일인이면 죄수관계는 별개 평가.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>단톡방 공공연성</strong> — 다수 회원 전파 가능성 인정 영역.</li>\n<li><strong>유포자 독립 책임</strong> — 원 발언과 별개.</li>\n<li><strong>특정성</strong> — 실명·사진 결합 시 명확.</li>\n<li><strong>사실 vs 의견</strong> — \"이상하다\"는 의견 보호 다툼.</li>\n<li><strong>유포자 발언자 동일인</strong> — 죄수 별개.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>경찰청 사이버범죄 신고 ecrm.police.go.kr</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 언론보도 진실성·중요 부분 합치',
        summary:
          '대법원 2022다251650(2024.10.08 선고) 영역에서 법원은 언론보도의 진실성의 의미와 인정 기준 그리고 언론·출판을 통해 사실을 적시함으로써 타인의 명예를 훼손하는 경우 위법성이 조각되기 위한 요건을 다루며, 보도내용 중 일부 허위사실의 적시가 있더라도 전체 취지에서 중요한 부분이 객관적 사실과 합치된다면 진실성이 인정될 수 있고, 다만 공공의 이익·공적 인물 여부·표현의 방법 등을 종합적으로 고려해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '단톡방 발언·외부 유포 모두 중요 부분이 허위면 명예훼손 평가 영역. 의견·과장 표현도 전체 취지로 평가.',
      },
    ],
    faq: [
      {
        question: '단톡방 내부 대화도 명예훼손인가요?',
        answer:
          '<strong>다수 회원이 참여한 단톡방이면 전파 가능성으로 공연성 인정될 수 있는 영역입니다.</strong>',
      },
      {
        question: '캡처 유포자도 별도 처벌되나요?',
        answer:
          '<strong>외부 유포는 원 발언과 별개의 공공연 행위로 평가될 수 있습니다.</strong>',
      },
      {
        question: '본인이 단톡방에 없는데 어떻게 캡처를 얻나요?',
        answer:
          '<strong>다른 회원 협조·유포자 게시물 캡처로 확보 가능한 영역입니다.</strong>',
      },
      {
        question: '"개인 의견 표명"이라고 변명하면요?',
        answer:
          '<strong>실명·구체적 사실 적시면 의견 보호 약화될 수 있습니다.</strong>',
      },
      {
        question: '손해배상은 어느 정도 인정되나요?',
        answer:
          '<strong>확산 범위·정신적 피해 진단서에 따라 사례별 차이가 큰 영역입니다.</strong>',
      },
    ],
    cta: { text: '명예훼손 피해 대응 순서, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 피해 대응', href: '/guide/defamation/defamation-victim-where-to-start' },
      { label: '단톡방 명예훼손 유출', href: '/guide/defamation/defamation-group-chat-leak-complaint' },
      { label: '사내 단톡방 캡처 유포', href: '/guide/defamation/defamation-workplace-group-chat-screenshot-leak' },
      { label: '익명 게시판 IP 추적', href: '/guide/defamation/defamation-anonymous-board-ip-tracking' },
      { label: '온라인 삭제 가처분', href: '/guide/defamation/defamation-online-false-deletion-injunction' },
    ],
  },

  // ─── 2. defamation-corporate-internal-anonymous-board-post-accused-disciplinary-track ───
  {
    domain: 'defamation',
    slug: 'defamation-corporate-internal-anonymous-board-post-accused-disciplinary-track',
    keyword: '회사 내부 익명게시판 비방 작성자 지목',
    questionKeyword: '회사 내부 익명게시판에 동료를 비방하는 글을 올렸는데 작성자로 지목되어 회사로부터 징계와 형사 고소를 동시에 받고 있어요. 어떻게 대응해야 하나요?',
    ctaKeyword: '사내 익명게시판 작성자 지목 대응 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '사내 익명게시판 작성자 지목 — 5단계 징계·형사 결합 다툼 | 로앤가이드',
      description:
        '회사 내부 익명게시판 비방 글의 작성자로 지목되어 징계·형사 고소를 받았다면 혐의를 받고 있다면 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인이 사내 익명게시판에 평소 본인을 괴롭히던 팀장에 대해 \"근무시간에 자리를 자주 비우고 업무를 후배에게 떠넘긴다\"는 취지의 글을 한 차례 올렸는데, 며칠 만에 IT팀이 IP·접속기록을 추적해 본인이 작성자로 지목됐어요. 회사는 \"명예훼손·조직 안정 저해\"를 사유로 징계위원회 회부를 통보했고, 팀장은 형사 명예훼손으로 고소까지 진행 중입니다. 본인은 적시한 내용 자체는 사실에 가깝다고 생각하지만 익명 표현이 거칠었던 점이 걸리는 영역입니다.\" 사내 익명 비방 작성자 지목은 ① 형법 307조 1항(진실) vs 2항(허위) 구분 ② 형법 310조 진실+공익 위법성 조각 ③ 회사 징계는 별개 절차(취업규칙 위반) ④ IP 추적·작성자 입증 ⑤ 노동위 부당징계 구제와 형사 분리 5가지 트랙이 결합되는 영역. 사실 적시 + 공익성 입증이 핵심. 혐의를 받고 있다면 ① 사실관계 ② 공익성 ③ 표현방법 ④ 징계 절차 ⑤ 형사 방어 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 사내 익명게시판 작성자 지목 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실관계·공익성·표현·징계·형사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 적시 내용 사실관계 입증자료 정리</strong></li>\n<li><strong>② 형법 310조 공공의 이익·공익 목적 입증</strong></li>\n<li><strong>③ 표현 방법·과장 여부 점검(과장 시 위법성 조각 어려움)</strong></li>\n<li><strong>④ 회사 징계위·취업규칙 위반 별개 절차 대응</strong></li>\n<li><strong>⑤ 형사 진술 전략 + 합의 가능성 검토</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 익명 게시판이라도 다수 직원 열람이면 공공연성 인정 영역. 적시 내용이 사실이면 형법 307조 1항(진실 적시 명예훼손, 2년 이하), 허위면 307조 2항(허위 명예훼손, 5년 이하). 진실+공익 입증되면 310조 위법성 조각 가능. 회사 징계는 형사와 별개 트랙이라 분리 대응 필요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실관계·공익성·진술 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 적시 내용 사실관계 입증자료 수집 (메일·메신저·업무기록)</strong></li>\n<li><strong>2단계 — 공공의 이익 목적 진술 정리 (직장 환경 개선 등)</strong></li>\n<li><strong>3단계 — 표현 방법 과장·인격 모욕 부분 별도 검토</strong></li>\n<li><strong>4단계 — 징계위 출석·소명자료 제출 (형사와 분리 대응)</strong></li>\n<li><strong>5단계 — 형사 진술 전략 + 피해자 합의·반성문 검토</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사내 익명 비방 작성자 지목 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·공익·징계 갈래입니다.</strong></p>\n<ul>\n<li><strong>적시 내용 사실관계 자료(이메일·메신저·업무기록)</strong></li>\n<li><strong>증인 진술서(다른 직원 동의 받은 자료)</strong></li>\n<li><strong>회사 취업규칙·징계 규정·게시판 운영 정책</strong></li>\n<li><strong>회사 IP 추적·작성자 지목 통보문</strong></li>\n<li><strong>본인 글 원본·작성 시점·삭제 여부</strong></li>\n<li><strong>피해자 측 고소장·진술서</strong></li>\n<li><strong>변호인 의견서·반성문(필요 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사실 적시였더라도 인격 모욕 표현이 섞이면 모욕죄 별도 평가될 수 있는 영역. 회사 징계는 노동위 부당징계 구제(3개월 내) + 행정소송 트랙으로 형사와 분리. 합의·반성문은 양형에 의미 있는 부분.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실 vs 허위</strong> — 307조 1항/2항 구분.</li>\n<li><strong>공공의 이익</strong> — 310조 위법성 조각 요건.</li>\n<li><strong>표현 방법 과장</strong> — 인격 모욕 시 별도 평가.</li>\n<li><strong>징계는 별개</strong> — 노동위 부당징계 구제.</li>\n<li><strong>익명 게시판 공공연성</strong> — 다수 직원 열람.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 1350</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 군 내부 익명 게시판 명예훼손',
        summary:
          '대법원 2023도10410(2025.09.04 선고) 영역에서 법원은 직장 등 공동체 내에서 구성원 사이의 명예훼손·모욕 사안에서 어떤 행위가 명예훼손·모욕에 해당하는지 판단하는 기준과 직장 공동체 내 발생한 행위가 의례적·사회적으로 상당한 범주를 다소 벗어나 부적절한 언동으로 받아들여질 여지가 있더라도 일정 요건을 갖추지 않으면 처벌 대상이 되지 않을 수 있다는 점에 대해 다룬 사례 흐름이 있습니다.',
        takeaway: '직장 내부 공동체 발언은 사실 적시 + 공공의 이익 입증 시 310조 위법성 조각 검토 영역. 표현 방법은 별도 평가.',
      },
    ],
    faq: [
      {
        question: '익명게시판인데도 명예훼손이 되나요?',
        answer:
          '<strong>다수 직원이 열람 가능하면 공공연성 인정될 수 있는 영역입니다.</strong>',
      },
      {
        question: '내용이 사실이면 무죄인가요?',
        answer:
          '<strong>형법 307조 1항(진실 적시)은 처벌 대상이나 310조 공익 입증 시 위법성 조각 가능합니다.</strong>',
      },
      {
        question: '회사 징계와 형사가 같이 진행되면요?',
        answer:
          '<strong>분리된 별개 절차로 각자 대응이 필요한 영역입니다.</strong>',
      },
      {
        question: 'IP 추적은 합법인가요?',
        answer:
          '<strong>회사 정책·취업규칙 동의 범위 내 추적 가능 영역이며 별도 다툼 가능합니다.</strong>',
      },
      {
        question: '합의하면 처벌이 줄어드나요?',
        answer:
          '<strong>반의사불벌죄는 아니나 양형에 의미 있는 요소가 됩니다.</strong>',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '가해자 대응 시작', href: '/guide/defamation/defamation-accused-where-to-start' },
      { label: '사내 익명게시판 트랙', href: '/guide/defamation/defamation-company-anonymous-board-track' },
      { label: '익명 게시판 IP 추적', href: '/guide/defamation/defamation-anonymous-board-ip-tracking' },
      { label: '명예훼손 피해 대응', href: '/guide/defamation/defamation-victim-where-to-start' },
      { label: '손해배상 산정', href: '/guide/defamation/defamation-damages-amount-standard' },
    ],
  },

  // ─── 3. defamation-falsely-accused-counter-fact-disprove-victim-track ───
  {
    domain: 'defamation',
    slug: 'defamation-falsely-accused-counter-fact-disprove-victim-track',
    keyword: '명예훼손 허위 고소 무고 방어',
    questionKeyword: '본인이 한 적도 없는 발언으로 명예훼손 고소를 당했어요. 사실과 다르게 신고된 상황을 어떻게 입증하고 무고죄까지 다툴 수 있나요?',
    ctaKeyword: '명예훼손 허위 고소 방어 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '명예훼손 허위 고소 방어 — 5단계 사실 입증·무고 다툼 | 로앤가이드',
      description:
        '본인이 하지 않은 발언으로 명예훼손 고소를 받았다면 사실과 다르게 신고되었다면 5가지 방어·무고 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인이 모임 자리에서 \"○○씨가 거래처로부터 돈을 받았다\"는 발언을 했다는 이유로 명예훼손 고소를 당했어요. 그런데 본인은 그 자리에 있지도 않았고 그런 말을 한 적도 없습니다. 고소인이 다른 참석자의 말을 본인이 한 것으로 잘못 알고 신고한 것 같은데, 경찰 출석 통보를 받으니 \"본인이 진짜 안 했는데 어떻게 입증해야 하나\" 막막한 영역입니다.\" 명예훼손 허위 고소는 ① 사실관계 입증(부재 알리바이·녹음·증인) ② 발언 주체 다툼(다른 참석자 발언) ③ 명예훼손 무혐의 처분 ④ 무고죄(형법 156조) 별개 고소 ⑤ 민사 손해배상(허위 고소로 인한 정신적 피해) 5가지 트랙이 결합되는 영역. 사실과 다르게 신고되었다면 진술 일관성 + 객관적 자료가 핵심. 대응은 ① 알리바이 ② 증인 ③ 무혐의 ④ 무고 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 명예훼손 허위 고소 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 알리바이·증인·무혐의·무고·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 본인 부재·발언 부정 알리바이 자료</strong></li>\n<li><strong>② 실제 발언자·참석자 증인 진술</strong></li>\n<li><strong>③ 명예훼손 무혐의·불기소 처분 진행</strong></li>\n<li><strong>④ 고소인 상대 무고죄 별개 고소 검토</strong></li>\n<li><strong>⑤ 민사 손해배상 청구 (허위 고소 피해)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사실과 다르게 신고되었다면 본인의 부재·발언 부정을 입증하는 객관적 자료(위치기록·결제내역·통화기록·증인)가 핵심. 무고죄는 \"허위사실 신고 고의\"가 입증돼야 성립. 단순 오인은 무고 불성립이지만 거짓을 알면서도 신고하면 무고죄 평가 영역. 명예훼손 무혐의 처분 후 무고 진행이 일반적.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 알리바이·진술·무고 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 본인 부재·발언 부정 알리바이 자료 수집 (즉시)</strong></li>\n<li><strong>2단계 — 실제 발언자·참석자 증인 진술 확보</strong></li>\n<li><strong>3단계 — 경찰·검찰 진술 + 무혐의·불기소 처분</strong></li>\n<li><strong>4단계 — 고소인 무고 고의 입증되면 무고죄 별개 고소</strong></li>\n<li><strong>5단계 — 민사 손해배상 청구 (정신적 피해·변호사비용)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">허위 고소·무고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 알리바이·증인·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인 위치·시간 알리바이 자료(GPS·결제·통화)</strong></li>\n<li><strong>당일 일정·CCTV·출입기록</strong></li>\n<li><strong>실제 발언자·참석자 증인 진술서</strong></li>\n<li><strong>고소장·고소인 진술서·경찰 출석 통보</strong></li>\n<li><strong>고소인이 사전에 사실관계를 알았다는 정황 자료</strong></li>\n<li><strong>본인 정신적 피해·변호사비용 자료</strong></li>\n<li><strong>변호인 의견서·반박 진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 무고죄는 \"허위 인식 + 형사처벌 받게 할 목적\" 양 요건 필수. 단순한 오인·잘못된 기억은 무고 불성립이지만 사전에 사실을 알면서도 신고했다면 무고 평가 영역. 명예훼손 무혐의 처분 후 무고죄 진행이 실무 흐름.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>알리바이 입증</strong> — 객관 자료 핵심.</li>\n<li><strong>발언 주체 다툼</strong> — 다른 참석자 진술.</li>\n<li><strong>무고 고의</strong> — 단순 오인 vs 허위 인식.</li>\n<li><strong>명예훼손 무혐의 선행</strong> — 무고 진행 순서.</li>\n<li><strong>민사 위자료</strong> — 허위 고소 정신적 피해.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 사이버범죄 신고 ecrm.police.go.kr</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 표현의 자유와 사실 적시 명예훼손 판단',
        summary:
          '대법원 2025도4697(2025.05.01 선고) 영역에서 법원은 어떤 표현이 허위사실을 공표한 것인지 판단하는 기준과 표현의 주체·대상 등에 따라 정치적·공적 표현의 자유가 보호되는 정도가 달라질 수 있다는 점, 그리고 공표된 사실 세부에 진실과 약간 차이가 있거나 다소 과장된 표현이 있으나 내용 전체 취지로 보아 중요한 부분이 객관적 사실과 합치되는 경우 이를 허위사실이라 단정하기 어렵다는 점을 다룬 사례 흐름이 있습니다.',
        takeaway: '명예훼손 평가는 전체 취지·중요부분 합치 기준. 본인이 발언하지 않은 사안이면 사실관계부터 정리 영역.',
      },
    ],
    faq: [
      {
        question: '본인이 한 적 없는 발언이라는 걸 어떻게 입증하나요?',
        answer:
          '<strong>위치·시간 알리바이 + 실제 발언자·참석자 진술이 핵심 자료가 됩니다.</strong>',
      },
      {
        question: '무고죄는 바로 고소 가능한가요?',
        answer:
          '<strong>명예훼손 무혐의 처분 후 무고 진행이 실무적인 영역입니다.</strong>',
      },
      {
        question: '고소인이 단순히 오해한 경우도 무고인가요?',
        answer:
          '<strong>아닙니다. 허위 인식 + 처벌 받게 할 목적이 입증돼야 무고 성립합니다.</strong>',
      },
      {
        question: '민사로 위자료 청구 가능한가요?',
        answer:
          '<strong>허위 고소로 인한 정신적 피해·변호사비용 청구 가능한 영역입니다.</strong>',
      },
      {
        question: '경찰 조사 진술 전략은요?',
        answer:
          '<strong>일관성·구체성·객관적 자료 결합이 핵심이며 변호인 동석 권장됩니다.</strong>',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '가해자 대응 시작', href: '/guide/defamation/defamation-accused-where-to-start' },
      { label: '온라인 리뷰 진실 방어', href: '/guide/defamation/defamation-online-review-truth-defense' },
      { label: '익명 게시판 IP 추적', href: '/guide/defamation/defamation-anonymous-board-ip-tracking' },
      { label: '명예훼손 피해 대응', href: '/guide/defamation/defamation-victim-where-to-start' },
      { label: '손해배상 산정', href: '/guide/defamation/defamation-damages-amount-standard' },
    ],
  },

  // ─── 4. jeonse-landlord-refuse-move-out-transfer-registration-track ───
  {
    domain: 'jeonse',
    slug: 'jeonse-landlord-refuse-move-out-transfer-registration-track',
    keyword: '임대인 전출신고 거부 임차권등기',
    questionKeyword: '임대인이 보증금을 안 돌려주는데 본인이 이사하면서 전출신고하면 대항력이 사라진다고 들었어요. 임차권등기명령을 어떻게 활용하나요?',
    ctaKeyword: '임대인 보증금 미반환 전출 임차권등기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임대인 보증금 미반환 전출·임차권등기 — 5단계 대항력 유지 다툼 | 로앤가이드',
      description:
        '임대인이 보증금을 안 돌려주는데 이사·전출신고가 필요한 임차인이라면 임차권등기로 대항력·우선변제권 유지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세 1억 8천만원으로 살던 집의 계약 만료일이 다가왔고 새 직장 때문에 다른 지역으로 이사해야 하는데, 임대인이 \"새 임차인이 들어오기 전엔 보증금을 못 준다\"며 시간을 끌고 있어요. 본인이 그냥 이사하면서 전출신고를 하면 주민등록 = 대항요건이 사라져 보증금 우선변제권을 잃을까봐 막막한 영역입니다. 임차권등기를 한다는 이야기는 들었는데 정확히 어떻게 진행되는지 모르겠습니다.\" 임대인 보증금 미반환 전출은 ① 주임법상 대항력 = 인도+주민등록 계속 유지 필요 ② 임차권등기명령(주임법 3조의3)으로 등기 후 대항력·우선변제권 보전 ③ 등기 완료 전 이사·전출 금지 ④ 임대인 비용상환·내용증명 ⑤ 본안 보증금반환소송 5가지 트랙이 결합되는 영역. 임차권등기 = 대항력 보전 핵심. 대응은 ① 통지 ② 등기신청 ③ 등기완료 확인 ④ 이사·전출 ⑤ 소송 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 임대인 보증금 미반환 전출 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 통지·등기·이사·소송·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 임대인 내용증명 (계약 종료·보증금 반환 통보)</strong></li>\n<li><strong>② 임차권등기명령 신청 (관할 지방법원)</strong></li>\n<li><strong>③ 등기 완료 확인 후 이사·전출신고</strong></li>\n<li><strong>④ 임차권등기 비용 임대인 상환청구</strong></li>\n<li><strong>⑤ 보증금반환 본안소송 + 강제집행</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임차권등기명령은 주임법 3조의3에 따른 \"대항력·우선변제권 보전\" 제도. 등기 \"완료\" 전에 이사·전출하면 대항요건 소멸 위험 영역이라 등기부등본 확인 필수. 등기 신청 후 평균 1~2개월 소요. 등기 비용은 임대인 상환청구 가능 (상계 자동채권으로도 행사 가능).</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 통지·등기·이사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임대인 내용증명 송부 (계약 종료 1개월 전·보증금 반환 청구)</strong></li>\n<li><strong>2단계 — 관할 지방법원 임차권등기명령 신청 (1~2개월)</strong></li>\n<li><strong>3단계 — 등기부등본 확인 후 이사·전출신고</strong></li>\n<li><strong>4단계 — 임차권등기 비용 임대인 상환청구 (상계 가능)</strong></li>\n<li><strong>5단계 — 보증금반환 본안소송 + 강제집행 + HUG 보증 (해당 시)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">전출 전 임차권등기 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·등기·내용증명 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·확정일자·전입신고 자료</strong></li>\n<li><strong>주민등록등본·점유 시점 자료</strong></li>\n<li><strong>임대인 내용증명·답변</strong></li>\n<li><strong>등기부등본 (임차권등기 전후 비교용)</strong></li>\n<li><strong>임차권등기명령 신청서·결정문</strong></li>\n<li><strong>등기 비용 영수증 (상환청구용)</strong></li>\n<li><strong>HUG·SGI 보증보험 가입증서 (해당 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임차권등기 완료 전 이사·전출 금지가 핵심. \"신청\"만 한 상태로 이사하면 대항력 공백 위험 영역. 등기부등본을 통해 등기 사실을 직접 확인해야 안전. 등기 후 새 거주지로 이사·전출신고 가능하며 대항력 유지된 상태로 보증금 반환 청구 트랙 진행.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대항요건 계속 유지</strong> — 인도+주민등록.</li>\n<li><strong>등기 완료 시점</strong> — 신청 아닌 등기부 기재.</li>\n<li><strong>이사·전출 시점</strong> — 등기 완료 후.</li>\n<li><strong>등기 비용 상환</strong> — 임대인 비용청구.</li>\n<li><strong>임차주택 매수 시 대항력 소멸</strong> — 별도 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>주택임대차분쟁조정위원회 1670-7777</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차권등기 비용상환청구 상계 행사',
        summary:
          '대법원 2024다221455(2025.04.24 선고) 영역에서 법원은 주택임대차보호법 제3조의3 제8항에서 정한 임차권등기명령 신청비용과 임차권등기비용에 대한 비용상환청구권을 임차인이 상계의 자동채권으로 삼는 등의 방법으로 행사할 수 있는지 여부를 다루며, 임차인은 민사소송으로 그 비용을 청구하거나 상계의 자동채권으로 삼는 등의 방법으로 비용상환청구권을 행사할 수 있다고 봄이 타당하다고 본 사례 흐름이 있습니다.',
        takeaway: '임차권등기 비용은 임대인에게 청구 가능하며 보증금 잔액과의 상계 자동채권으로도 행사 가능한 트랙.',
      },
    ],
    faq: [
      {
        question: '임차권등기 신청만 해도 대항력이 유지되나요?',
        answer:
          '<strong>신청이 아닌 등기 완료 시점부터 대항력이 보전됩니다.</strong>',
      },
      {
        question: '등기 완료까지 얼마나 걸리나요?',
        answer:
          '<strong>평균 1~2개월 정도 소요되며 법원·등기소에 따라 차이가 있습니다.</strong>',
      },
      {
        question: '등기 비용은 누가 부담하나요?',
        answer:
          '<strong>임차인이 선납 후 임대인에게 상환청구 + 보증금과 상계 가능합니다.</strong>',
      },
      {
        question: '등기 완료 전에 이사해야 하면요?',
        answer:
          '<strong>대항력 공백 위험이 있어 가족 1인 잔류·확인 후 이사를 검토하는 영역입니다.</strong>',
      },
      {
        question: '임대인이 등기명령에 이의신청하면요?',
        answer:
          '<strong>이의는 본안소송으로 이어지며 대항력은 등기로 보전된 상태에서 다툼 진행됩니다.</strong>',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '보증금 반환 절차', href: '/guide/jeonse/jeonse-deposit-not-returned-move-out-procedure' },
      { label: '임차권등기 후 미반환', href: '/guide/jeonse/jeonse-after-rental-rights-registration-still-unpaid' },
      { label: '임대인 사망 보증금', href: '/guide/jeonse/jeonse-landlord-death-deposit-return' },
      { label: '소액임차인 우선변제', href: '/guide/jeonse/jeonse-auction-small-deposit-priority-repay' },
      { label: '보증보험 가입', href: '/guide/jeonse/jeonse-deposit-guarantee-insurance-guide' },
    ],
  },

  // ─── 5. jeonse-implicit-renewal-landlord-rent-increase-demand-refuse-track ───
  {
    domain: 'jeonse',
    slug: 'jeonse-implicit-renewal-landlord-rent-increase-demand-refuse-track',
    keyword: '묵시적 갱신 임대료 인상 요구 거부',
    questionKeyword: '계약이 묵시적으로 갱신됐는데 임대인이 갑자기 임대료 10%를 올리거나 안 올리면 나가라고 해요. 어떻게 대응해야 하나요?',
    ctaKeyword: '묵시적 갱신 임대료 인상 거부 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '묵시적 갱신 임대료 인상 요구 — 5단계 5% 상한·해지 통보 다툼 | 로앤가이드',
      description:
        '묵시적 갱신 후 임대인이 임대료 인상을 요구·해지 위협한다면 5% 상한·해지권 분리 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세 2년 계약이 끝나기 전 임대인도 본인도 별다른 말이 없어 그대로 살고 있다가 묵시적으로 갱신된 상태인데, 어느 날 임대인이 \"시세가 올랐으니 보증금 10%를 올리거나 안 그러면 3개월 후 나가달라\"고 통보했어요. 본인은 갑작스러운 인상이 부담스럽고, 거절하면 정말 나가야 하는지 막막한 영역입니다.\" 묵시적 갱신 후 임대료 인상은 ① 주임법 6조 묵시적 갱신 = 동일 조건 2년 연장 ② 7조 차임증감청구권 (5% 상한·1년 이내 1회) ③ 임대인 임의 해지권 없음, 임차인만 해지 가능 ④ 갱신요구권(주임법 6조의3) 적용 여부 분기 ⑤ 분쟁조정·소송 5가지 트랙이 결합되는 영역. 묵시적 갱신은 임대인에게 즉시 해지권 없는 점이 핵심. 대응은 ① 통보 분석 ② 상한 확인 ③ 거부 통지 ④ 조정 ⑤ 소송 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 묵시적 갱신 임대료 인상 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 통보·상한·거부·조정·소송 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 임대인 인상 통보 내용·시점·근거 분석</strong></li>\n<li><strong>② 주임법 7조 5% 상한·1년 이내 1회 적용 확인</strong></li>\n<li><strong>③ 인상 거부·재계약 의사 명확히 통지</strong></li>\n<li><strong>④ 주택임대차분쟁조정위원회 조정 신청</strong></li>\n<li><strong>⑤ 차임증감청구 본안소송 + 명도소송 방어</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 묵시적 갱신 후엔 임대인의 임의 해지권 없음(주임법 6조 2항). 임차인만 \"언제든 해지 통지 → 3개월 후 효력\" 가능. 임대인이 임대료를 5% 초과 인상하라며 거절 시 나가라는 통보는 법적 효력 없는 영역. 다만 갱신요구권(2020년 신설) 행사 여부에 따라 분기.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 통보·거부·조정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임대인 인상 통보 내용·시점·근거 분석 (즉시)</strong></li>\n<li><strong>2단계 — 5% 상한·1년 이내 1회 적용 확인 (시세·공시지가 자료)</strong></li>\n<li><strong>3단계 — 인상 거부·계속 거주 의사 내용증명 송부</strong></li>\n<li><strong>4단계 — 주택임대차분쟁조정위원회 조정 신청 (60일 내 결과)</strong></li>\n<li><strong>5단계 — 차임증감청구 본안소송 + 명도소송 방어</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">묵시적 갱신 인상 거부 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·통보·시세 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·확정일자·전입 자료</strong></li>\n<li><strong>묵시적 갱신 시점 자료 (만료 6~2개월 전 통지 부재)</strong></li>\n<li><strong>임대인 인상 통보문·문자·녹음</strong></li>\n<li><strong>주변 시세·공시지가·실거래가 자료</strong></li>\n<li><strong>본인 재계약 거부 내용증명</strong></li>\n<li><strong>주택임대차분쟁조정위 신청서·답변</strong></li>\n<li><strong>이전 임대료 인상 이력 (1년 이내 1회 확인)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임대인이 묵시적 갱신 후 \"새 계약하자\"며 5% 초과 인상을 요구하는 사례가 흔한 영역. 5% 상한은 \"증액\" 한도이며 한도 내 합의는 가능. 임차인이 인상을 거부하면 종전 조건 그대로 묵시적 갱신 유지. 임대인의 명도소송 시 갱신요구권·5% 상한 항변으로 방어 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>5% 상한</strong> — 증액 한도 영역.</li>\n<li><strong>1년 이내 1회</strong> — 인상 빈도 제한.</li>\n<li><strong>임대인 임의 해지 X</strong> — 묵시적 갱신 시.</li>\n<li><strong>갱신요구권 별개</strong> — 2년 추가 보장.</li>\n<li><strong>차임증감청구</strong> — 본안소송 트랙.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>주택임대차분쟁조정위원회 1670-7777</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국토교통부 임대차상담센터 1599-0001</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보증금 채무 이행 거절 의사 명백 시 손해배상',
        summary:
          '대법원 2024다321973(2025.05.15 선고) 영역에서 법원은 쌍무계약에서 당사자 일방이 이행을 제공하더라도 상대방이 상당한 기간 내에 채무를 이행할 수 없음이 객관적으로 명백한 경우 그 일방이 자신의 채무 이행을 제공하지 않더라도 상대방의 이행지체를 이유로 계약을 해제하거나 손해배상을 청구할 수 있는지 여부를 다루며, 임대인이 \"새 임차인이 들어오지 않으면 보증금을 반환할 수 없다\"는 뜻을 명백히 한 경우 임차인은 인도의무 이행 제공 없이도 손해배상을 청구할 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '임대인이 임차인 거부·이행거절 의사 명백 시 임차인은 인도 이행 없이도 손해배상 청구 가능 영역.',
      },
    ],
    faq: [
      {
        question: '묵시적 갱신 후 임대인이 나가라고 할 수 있나요?',
        answer:
          '<strong>임대인의 임의 해지권은 인정되지 않으며 임차인만 해지 가능합니다.</strong>',
      },
      {
        question: '임대료를 10% 올려달라고 하면 줘야 하나요?',
        answer:
          '<strong>5% 상한 + 1년 이내 1회 제한이 적용되는 영역입니다.</strong>',
      },
      {
        question: '인상을 거부하면 어떻게 되나요?',
        answer:
          '<strong>종전 조건 그대로 묵시적 갱신이 유지되는 영역입니다.</strong>',
      },
      {
        question: '갱신요구권은 별도로 행사 가능한가요?',
        answer:
          '<strong>주임법 6조의3에 따라 1회 행사 가능하며 추가 2년 보장됩니다.</strong>',
      },
      {
        question: '분쟁조정 결과는 강제력이 있나요?',
        answer:
          '<strong>당사자 수락 시 확정판결과 동일한 효력이 발생합니다.</strong>',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '묵시적 갱신 종료', href: '/guide/jeonse/jeonse-implicit-renewal-termination' },
      { label: '보증금 반환 절차', href: '/guide/jeonse/jeonse-deposit-not-returned-move-out-procedure' },
      { label: '임차권등기명령', href: '/guide/jeonse/jeonse-after-rental-rights-registration-still-unpaid' },
      { label: '임대인 사망 보증금', href: '/guide/jeonse/jeonse-landlord-death-deposit-return' },
      { label: '소액임차인 우선변제', href: '/guide/jeonse/jeonse-auction-small-deposit-priority-repay' },
    ],
  },

  // ─── 6. stalking-ex-lover-sns-secondary-account-repeated-approach-track ───
  {
    domain: 'stalking',
    slug: 'stalking-ex-lover-sns-secondary-account-repeated-approach-track',
    keyword: '헤어진 연인 SNS 부계정 반복 접근 스토킹',
    questionKeyword: '헤어진 연인이 본계정을 차단했더니 부계정·새 계정으로 SNS 팔로우·DM·게시물 좋아요로 반복 접근해요. 스토킹으로 신고할 수 있나요?',
    ctaKeyword: '헤어진 연인 SNS 부계정 반복접근 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '헤어진 연인 SNS 부계정 반복 접근 — 5단계 차단 우회·동일성 입증 다툼 | 로앤가이드',
      description:
        '헤어진 연인이 차단 후 부계정·새 계정으로 SNS 팔로우·DM 반복 접근한다면 차단 우회·동일성 입증 5가지 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"6개월 전 헤어진 옛 연인을 본인이 인스타그램·페이스북·X(트위터)에서 모두 차단했는데, 어느 날부터 모르는 계정이 본인 게시물에 모두 좋아요를 누르고 알 듯 모를 듯한 DM을 보내옵니다. 글투·관심사·시간대를 보면 명백히 옛 연인 같고, 차단해도 며칠 후 다시 새 계정으로 접근해 두 달 사이 부계정 7개가 확인된 영역입니다.\" 헤어진 연인 SNS 부계정 반복 접근은 ① 스토킹처벌법 2조 1호 다목(정보통신망 송신·도달) ② 차단 우회 = 객관적으로 불안·공포 일으키기 충분 ③ 다중 플랫폼·다중 계정 동일성 입증 ④ 잠정조치(전기통신금지·접근금지) ⑤ 사이버수사·플랫폼 협조 5가지 트랙이 결합되는 영역. 차단 우회는 가중 사유 평가 영역. 대응은 ① 증거 ② 플랫폼 ③ 추적 ④ 잠정조치 ⑤ 형사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 헤어진 연인 SNS 부계정 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·플랫폼·추적·잠정조치·형사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 부계정 게시물·DM·좋아요·시간대 캡처 보존</strong></li>\n<li><strong>② SNS 플랫폼 신고·계정 정지·기록 보존 요청</strong></li>\n<li><strong>③ 차단·재접근 패턴·동일성 자료 정리</strong></li>\n<li><strong>④ 스토킹처벌법 잠정조치 (전기통신금지·접근금지)</strong></li>\n<li><strong>⑤ 형사 스토킹범죄 고소 + 민사 손해배상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 부계정·새 계정 반복 접근은 객관적으로 불안·공포심을 일으키기에 충분한 정도로 평가될 수 있는 영역. 피해자가 직접 인식하지 못한 좋아요·팔로우라도 객관적 평가 가능. 차단 우회는 스토킹 의도 명확화 + 가중 사유. 다중 플랫폼 패턴(인스타+페북+X)이 동일성 입증의 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·잠정조치 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 부계정 게시물·DM·좋아요·시점 캡처 보존 (즉시)</strong></li>\n<li><strong>2단계 — SNS 플랫폼 신고·계정 정지·기록 보존 요청 (1주 내)</strong></li>\n<li><strong>3단계 — 사이버수사대 신고 + IP·휴대전화 인증 협조 요청</strong></li>\n<li><strong>4단계 — 스토킹처벌법 잠정조치 신청 (전기통신금지·접근금지)</strong></li>\n<li><strong>5단계 — 형사 스토킹범죄 고소 + 민사 손해배상</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">SNS 부계정 반복접근 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계정·접근·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>부계정 ID·게시물·DM·좋아요·시점 캡처</strong></li>\n<li><strong>본계정 차단 이력·차단 우회 흐름</strong></li>\n<li><strong>다중 플랫폼(인스타·페북·X) 패턴 정리표</strong></li>\n<li><strong>SNS 플랫폼 신고 접수증·답변</strong></li>\n<li><strong>이전 교제 기간·이별 시점·연락 단절 자료</strong></li>\n<li><strong>본인 정신적 피해 진단서·상담 기록</strong></li>\n<li><strong>변호인 의견서·고소장 초안</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: SNS 플랫폼은 일정 기간 후 계정·로그를 삭제할 수 있어 신고 + 기록 보존 요청 필수. 휴대전화 인증·결제·이메일 정보가 동일하면 동일인 입증의 핵심. 잠정조치 \"전기통신금지\"는 부재중 전화 표시·SNS 알림 송신도 위반 평가 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>객관적 불안·공포 평가</strong> — 일반 기준.</li>\n<li><strong>차단 우회</strong> — 가중 사유.</li>\n<li><strong>동일성 입증</strong> — IP·휴대전화·결제 정보.</li>\n<li><strong>잠정조치 위반</strong> — 별개 죄(상상적 경합).</li>\n<li><strong>피해자 직접 인식 무관</strong> — 객관 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>스토킹 신고 112</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>경찰청 사이버범죄 신고 ecrm.police.go.kr</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부재중 전화·전기통신 잠정조치 위반',
        summary:
          '대법원 2024도7832(2024.09.27 선고) 영역에서 법원은 피고인이 전화를 걸어 피해자 휴대전화에 부재중 전화 문구·수신차단기호 등이 표시되도록 한 경우 실제 전화통화가 이루어졌는지와 상관없이 \"피해자의 휴대전화로 유선·무선·광선 및 기타의 전자적 방식에 의하여 부호·문언을 송신하지 말 것\"을 명하는 잠정조치를 위반한 것인지 여부와 스토킹범죄와 잠정조치 불이행의 죄수관계를 다루며, 송신 자체가 잠정조치 위반에 해당할 수 있고 두 죄는 상상적 경합관계라고 본 사례 흐름이 있습니다.',
        takeaway: 'SNS 알림 송신·DM·좋아요 알림도 \"송신·도달\"로 잠정조치 위반 평가 가능 영역. 차단 우회 부계정 동일 트랙.',
      },
    ],
    faq: [
      {
        question: 'SNS 좋아요만 누른 것도 스토킹인가요?',
        answer:
          '<strong>반복·차단 우회 결합 시 객관적 불안·공포 평가 가능한 영역입니다.</strong>',
      },
      {
        question: '부계정 동일인 입증을 어떻게 하나요?',
        answer:
          '<strong>휴대전화 인증·IP·결제정보·이메일이 핵심 자료입니다.</strong>',
      },
      {
        question: 'SNS 플랫폼이 정보를 안 주면요?',
        answer:
          '<strong>경찰·검찰 영장·사실조회 협조 요청으로 받을 수 있는 영역입니다.</strong>',
      },
      {
        question: '잠정조치는 얼마나 빨리 받나요?',
        answer:
          '<strong>긴급 잠정조치는 사건 즉시 신청 가능한 영역입니다.</strong>',
      },
      {
        question: '본인이 좋아요를 못 봤어도 처벌되나요?',
        answer:
          '<strong>피해자가 직접 인식하지 못해도 객관적 평가로 평가 가능합니다.</strong>',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 신고 절차', href: '/guide/stalking/stalking-report-and-restraining-order' },
      { label: '온라인 증거 수집', href: '/guide/stalking/stalking-ex-lover-online-evidence-collect' },
      { label: '잠정조치 신청', href: '/guide/stalking/stalking-provisional-measure-application-effect' },
      { label: '익명·다중 계정 추적', href: '/guide/stalking/stalking-multiple-anonymous-account-track' },
      { label: '스토킹 SNS DM 차단', href: '/guide/stalking/stalking-sns-dm-block-fake-account-repeat' },
    ],
  },

  // ─── 7. stalking-coworker-commute-route-following-track ───
  {
    domain: 'stalking',
    slug: 'stalking-coworker-commute-route-following-track',
    keyword: '직장 동료 퇴근길 동선 추적 스토킹',
    questionKeyword: '직장 동료가 퇴근 시간마다 본인 동선을 따라오고 같은 지하철·버스를 타며 집 근처까지 따라와요. 회사에 알리지 않고도 신고할 수 있나요?',
    ctaKeyword: '직장 동료 퇴근길 동선 추적 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '직장 동료 퇴근길 동선 추적 — 5단계 회사·형사 결합 다툼 | 로앤가이드',
      description:
        '직장 동료가 퇴근길 동선을 반복 추적한다면 회사 신고·형사 신고 결합 5가지 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"같은 부서 동료가 두 달 전부터 본인의 퇴근 시간에 맞춰 사무실에서 나오고, 같은 지하철·환승역·집 근처 버스 정류장까지 따라옵니다. 사적인 대화도 거의 없었는데 어느 날 \"우연이 너무 많네요\"라며 말을 걸어왔고, 본인이 다른 경로로 우회해도 며칠 후엔 그 경로에서도 마주칩니다. 회사에 알리면 보복·소문이 두렵고 그렇다고 그대로 두기엔 불안한 영역입니다.\" 직장 동료 퇴근길 동선 추적은 ① 스토킹처벌법 2조 1호 가목(접근·따라다니기) ② 직장 내부 + 외부 동선 결합 ③ 회사 신고 (직장 내 괴롭힘·인사규정) ④ 형사 스토킹 + 잠정조치(접근금지) ⑤ 민사 손해배상 + 정신적 피해 5가지 트랙이 결합되는 영역. 회사 신고와 형사는 분리·병행 가능. 대응은 ① 증거 ② 회사 ③ 형사 ④ 잠정조치 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 직장 동료 퇴근길 동선 추적 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·회사·형사·잠정조치·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 퇴근 시간·동선·일치 패턴 기록 (날짜별 정리표)</strong></li>\n<li><strong>② CCTV·지하철 교통카드·블랙박스 자료 확보</strong></li>\n<li><strong>③ 회사 신고 여부 결정 (직장 내 괴롭힘·인사위원회)</strong></li>\n<li><strong>④ 스토킹처벌법 형사 고소 + 잠정조치 (접근금지)</strong></li>\n<li><strong>⑤ 민사 손해배상 + 직장 변경·이사 비용 청구</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직장 동료라도 일반 동선이 우연히 겹치는 정도를 넘어 반복·우회 후에도 따라오면 객관적 불안·공포 평가 영역. 회사 신고는 직장 내 괴롭힘(근로기준법 76조의2) 트랙으로 분리 진행 가능. 형사 신고 시 회사 통보 의무 없음 (피해자 비밀유지 권리). 잠정조치 \"100m 이내 접근금지\" 신청 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·잠정조치 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 퇴근 시간·동선·일치 패턴 날짜별 기록표 작성 (즉시)</strong></li>\n<li><strong>2단계 — CCTV·교통카드·블랙박스·휴대전화 위치 자료 확보</strong></li>\n<li><strong>3단계 — 회사 신고(직장 내 괴롭힘) + 형사 신고 병행 선택</strong></li>\n<li><strong>4단계 — 스토킹처벌법 형사 고소 + 잠정조치 (접근금지)</strong></li>\n<li><strong>5단계 — 민사 손해배상 + 직장·거주지 변경 비용 청구</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 접근금지·처벌 가능성, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">직장 동료 동선 추적 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 동선·증거·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>퇴근 시간·경로·동선 일치 날짜별 기록표</strong></li>\n<li><strong>지하철·버스 교통카드 이용내역</strong></li>\n<li><strong>역·정류장·아파트 CCTV 자료</strong></li>\n<li><strong>블랙박스·휴대전화 위치 기록</strong></li>\n<li><strong>회사 출퇴근 시간·동선 회피 시도 자료</strong></li>\n<li><strong>본인 정신적 피해 진단서·상담 기록</strong></li>\n<li><strong>가해자 인사기록·직장 내 보고 이력</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 동선 일치를 \"우연\"으로 설명하기 어려운 정도(평균 3회 이상·우회 후에도 마주침)가 객관적 평가 핵심 영역. 회사 신고는 직장 내 괴롭힘 트랙으로 인사조사 + 분리조치 요구 가능. 형사 신고는 회사 통보 의무 없으므로 동시 진행도 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>우연 vs 의도적 추적</strong> — 우회 후 일치 여부.</li>\n<li><strong>객관적 불안·공포</strong> — 일반 기준.</li>\n<li><strong>회사 신고 의무 X</strong> — 형사와 분리.</li>\n<li><strong>접근금지 100m</strong> — 잠정조치 신청.</li>\n<li><strong>가해자 보복</strong> — 신고 후 별도 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>스토킹 신고 112</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 객관적·일반적 불안·공포 평가 기준',
        summary:
          '대법원 2023도10313(2023.12.14 선고) 영역에서 법원은 구 스토킹범죄의 처벌 등에 관한 법률 제2조 제1호 각 목의 행위가 객관적·일반적으로 볼 때 상대방에게 불안감 또는 공포심을 일으키기에 충분한 정도라고 평가되는 경우 현실적으로 상대방이 불안감 내지 공포심을 갖게 되었는지와 관계없이 \'스토킹행위\'에 해당하는지 여부와 이때 객관적 평가는 행위자·상대방의 관계·지위·성향, 행위 경위, 행위 태양, 주변 상황 등을 종합 고려한다고 본 사례 흐름이 있습니다.',
        takeaway: '직장 동료 동선 추적도 우연 범위를 넘는 반복·우회 후 일치 시 객관적 평가로 스토킹행위 평가 영역.',
      },
    ],
    faq: [
      {
        question: '동료라서 동선이 겹치는 게 우연 아닌가요?',
        answer:
          '<strong>우회 후에도 반복 일치하면 객관적 평가로 스토킹행위 평가 가능한 영역입니다.</strong>',
      },
      {
        question: '회사에 알리지 않아도 신고 가능한가요?',
        answer:
          '<strong>형사 신고는 회사 통보 의무 없이 단독 진행 가능합니다.</strong>',
      },
      {
        question: '회사 신고는 어떻게 진행되나요?',
        answer:
          '<strong>근로기준법 76조의2 직장 내 괴롭힘으로 인사조사·분리조치 요구 가능합니다.</strong>',
      },
      {
        question: '접근금지는 회사 안에서도 적용되나요?',
        answer:
          '<strong>잠정조치 100m 접근금지는 직장·주거 등 일상 동선 전반에 적용 가능 영역입니다.</strong>',
      },
      {
        question: '직장 변경 비용도 손해배상으로 받을 수 있나요?',
        answer:
          '<strong>가해 행위와 인과관계 입증되면 청구 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '접근금지·처벌 가능성, AI로 확인하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 신고 절차', href: '/guide/stalking/stalking-report-and-restraining-order' },
      { label: '잠정조치 신청', href: '/guide/stalking/stalking-provisional-measure-application-effect' },
      { label: '온라인 증거 수집', href: '/guide/stalking/stalking-ex-lover-online-evidence-collect' },
      { label: '익명·다중 계정 추적', href: '/guide/stalking/stalking-multiple-anonymous-account-track' },
      { label: '도주 가해자 추적', href: '/guide/stalking/stalking-suspect-absconded-criminal-track' },
    ],
  },
];
