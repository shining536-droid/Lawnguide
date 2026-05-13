import { SpokePage } from '../spoke-pages';

// batch64 defamation(3) + jeonse(2) + stalking(2) — 7개 (2026-05-14)
//
// 고유 존재 이유:
// 1. defamation-celebrity-public-figure-criticism — 공인·연예인 비판 경계 (공인이론·공익성).
// 2. defamation-deceased-person — 사자 명예훼손 (형법 308조 특수 요건).
// 3. defamation-online-stalking-mass-comment — 좌표찍기·댓글 폭격 결합.
// 4. jeonse-fixed-term-end-renewal-refusal-no-reason — 계약갱신 거부 사유 부재.
// 5. jeonse-landlord-individual-bankruptcy-deposit — 개인 임대인 파산 보증금 회수.
// 6. stalking-ex-spouse-child-handover-recontact — 이혼 후 자녀 인도 시점 재접근.
// 7. stalking-online-game-channel-rejection — 게임 채널 거절 후 스토킹.

export const spokesBatch64DefameJeonseStalking: SpokePage[] = [
  // ─── 1. defamation-celebrity-public-figure-criticism-track ───
  {
    domain: 'defamation',
    slug: 'defamation-celebrity-public-figure-criticism-track',
    keyword: '공인·연예인 비판 경계',
    questionKeyword: '연예인을 비판했더니 명예훼손 고소 통지를 받았어요. 공인 비판은 어디까지 되나요?',
    ctaKeyword: '연예인 비판 명예훼손 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '연예인·공인 비판 명예훼손 — 5단계 공인이론 다툼 | 로앤가이드',
      description:
        '연예인·공인을 비판했다가 명예훼손 고소당했다면 공인이론·공익성 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"유튜브에 \"연예인 A의 광고 행위는 소비자 기만이다\"라고 비판하는 영상을 올렸어요. A 측 변호사가 명예훼손 고소 의사를 통지했고, 본인은 \"공인 비판은 공익\"이라고 했는데 정말 보호받을 수 있는지 막막한 상황. 본인이 비판할 권리를 너무 단정해 한 건 아닌가 걱정됩니다.\" 공인·연예인에 대한 비판은 ① 공인이론(헌법재판소 인정) + ② 공공의 이익 ③ 진실 또는 진실이라 믿을 만한 상당한 이유 ④ 비방 목적 부재 5가지를 충족하면 명예훼손 책임이 면제될 여지가 있는 영역. 단, 사실 적시도 \"진실이라도\" 명예훼손 성립 가능(형법 307조 1항)이라 \"공익\" 입증이 핵심. 대응은 ① 표현 분석 ② 공익성 입증 ③ 변호인 상담 ④ 합의 검토 ⑤ 형사 방어 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 연예인 비판 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 표현·공익·진실·합의·방어 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 표현 내용 분석</strong> — 사실 적시 vs 의견·논평.</li>\n<li><strong>② 공익성 입증</strong> — 소비자 보호·사회적 관심.</li>\n<li><strong>③ 진실성·상당성</strong> — 근거 자료·취재 흔적.</li>\n<li><strong>④ 합의 검토</strong> — 일부 표현 수정·사과.</li>\n<li><strong>⑤ 형사 방어 + 손해배상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공인 비판은 공익성 + 진실성 입증 시 명예훼손 책임이 약화될 수 있는 영역. 단, 비방 목적·인신공격이 들어가면 보호 약화됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·상담·방어 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 영상·표현 자료 보존 (즉시)</strong> — 원본·근거 자료·취재 메모.</li>\n<li><strong>2단계 — 변호인 상담 (1주 내)</strong> — 공익성·진실성 평가.</li>\n<li><strong>3단계 — 합의 검토 (필요시)</strong> — 일부 표현 수정·사과.</li>\n<li><strong>4단계 — 경찰·검찰 조사 대응</strong> — 공익·진실성 변론.</li>\n<li><strong>5단계 — 민사 손해배상 방어</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">연예인 비판 명예훼손 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 표현·근거·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>영상·게시글 원본·URL</strong></li>\n<li><strong>근거 자료 (기사·자료·취재 메모)</strong></li>\n<li><strong>관련 표현 맥락 (전체 영상)</strong></li>\n<li><strong>고소·통지 자료</strong></li>\n<li><strong>본인 신원·활동 이력</strong></li>\n<li><strong>유사 비판 사례·언론 보도</strong></li>\n<li><strong>변호인 의견서·면담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \"의견·논평\"은 명예훼손이 잘 안 되고 \"사실 적시\"가 문제. 표현이 의견인지 사실인지 정확히 구분해 변호인과 분석.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공인이론</strong> — 정치인·고위 공직자·연예인 일부.</li>\n<li><strong>공익성·진실성</strong> — 형법 310조 면책 사유.</li>\n<li><strong>의견 vs 사실</strong> — 의견 표명은 처벌 어려움.</li>\n<li><strong>인신공격 회피</strong> — 외모·사생활 공격은 보호 약화.</li>\n<li><strong>합의·반의사불벌</strong> — 사실적시 명예훼손은 반의사불벌.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국언론진흥재단 02-2001-7114</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공인이론과 명예훼손',
        summary:
          '대법원 2010도8265(2010.11.11 선고) 영역에서 법원은 공인에 대한 표현은 공적 관심 사안에 대한 공익성·진실성·상당성·비방 목적 부재 여부를 종합 고려해 명예훼손 책임 여부를 판단해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '공인 비판은 공익성·진실성 입증 시 책임 약화. 비방 목적·인신공격 회피가 핵심.',
      },
    ],
    faq: [
      {
        question: '"의견 표명"이라고 하면 무조건 보호되나요?',
        answer:
          '<strong>의견과 사실의 경계가 모호한 경우 다툼이 됩니다.</strong> 변호인과 표현 분석.',
      },
      {
        question: '연예인도 공인인가요?',
        answer:
          '<strong>활동 영역·공적 관심 정도에 따라 공인 평가가 갈리는 영역입니다.</strong>',
      },
      {
        question: '"광고 기만" 비판은 공익인가요?',
        answer:
          '<strong>소비자 보호 측면에서 공익성 인정 여지가 있는 영역입니다.</strong>',
      },
      {
        question: '합의가 가능한가요?',
        answer:
          '<strong>사실적시 명예훼손은 반의사불벌이라 합의 시 처벌 면제 가능합니다.</strong>',
      },
      {
        question: '영상 삭제하면 책임 면해지나요?',
        answer:
          '<strong>이미 게시한 사실에 대한 책임은 잔존합니다.</strong> 단, 합의·반성 사정으로 작용.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 대응', href: '/guide/defamation/defamation-accused-response' },
      { label: '공인이론·공익성', href: '/guide/defamation/defamation-public-interest-defense' },
      { label: '의견·사실 구분', href: '/guide/defamation/defamation-opinion-vs-fact' },
      { label: '반의사불벌', href: '/guide/defamation/defamation-no-prosecution-against-victim-will' },
      { label: '손해배상 방어', href: '/guide/defamation/defamation-civil-defense' },
    ],
  },

  // ─── 2. defamation-deceased-person-track ───
  {
    domain: 'defamation',
    slug: 'defamation-deceased-person-track',
    keyword: '사자 명예훼손',
    questionKeyword: '돌아가신 분에 대한 허위사실을 SNS에 올렸다는 고소를 유족이 했어요.',
    ctaKeyword: '사자 명예훼손 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '사자 명예훼손 — 5단계 형법 308조 특수 요건 다툼 | 로앤가이드',
      description:
        '돌아가신 분에 대한 표현으로 유족이 고소했다면 사자 명예훼손 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"역사 관련 SNS 게시물에 \"고인 A는 친일 행위가 있었다\"고 적었더니 A의 손자가 명예훼손 고소. 본인은 \"고인이라 명예훼손이 안 된다\"고 들었지만 \"사자 명예훼손\"이 있다고 합니다.\" 형법 제308조는 \"공연히 허위의 사실을 적시하여 사자의 명예를 훼손한 자\"를 처벌(2년 이하 징역·금고·500만원 이하 벌금)하는 영역. 단, ① 허위 사실 적시여야 하고 ② 진실 적시는 처벌 대상 아님 ③ 친고죄(유족 고소 필요) ④ 진실이라 믿을 만한 상당한 이유 면책 사유 5가지가 핵심. 단순 비판·진실 적시는 처벌 대상 아닌 영역입니다. 대응은 ① 표현 분석 ② 진실성 입증 ③ 합의 ④ 변호인 ⑤ 방어 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 사자 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 표현·진실·친고·합의·방어 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 표현 내용 분석</strong> — 허위 vs 진실 vs 의견.</li>\n<li><strong>② 진실 적시는 면책</strong> — 형법 308조 적용 대상 아님.</li>\n<li><strong>③ 친고죄 (유족 고소)</strong> — 직계존비속·배우자만 고소권.</li>\n<li><strong>④ 진실이라 믿을 상당한 이유</strong> — 면책 사유.</li>\n<li><strong>⑤ 합의·방어</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사자 명예훼손은 \"허위 사실\"만 처벌. 진실 적시는 처벌 안 되는 영역. 단, 진실 입증 책임이 본인에게 있는 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·진실성·합의 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 표현·근거 자료 확보 (즉시)</strong> — 원본·인용 자료·역사 자료.</li>\n<li><strong>2단계 — 진실성 입증 자료 (1~2주)</strong> — 학술 자료·언론 보도.</li>\n<li><strong>3단계 — 변호인 상담</strong> — 표현 분석·면책 검토.</li>\n<li><strong>4단계 — 합의 검토 (필요시)</strong> — 일부 표현 정정·사과.</li>\n<li><strong>5단계 — 형사 방어</strong> — 진실성·상당성 변론.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사자 명예훼손 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 표현·근거·방어 갈래입니다.</strong></p>\n<ul>\n<li><strong>게시글·영상 원본·URL</strong></li>\n<li><strong>인용 자료 (학술·언론·역사)</strong></li>\n<li><strong>진실성 뒷받침 자료</strong></li>\n<li><strong>고소장·통지서</strong></li>\n<li><strong>유족 관계 확인 (직계·배우자)</strong></li>\n<li><strong>본인 신원·활동 이력</strong></li>\n<li><strong>변호인 의견서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \"친일\" 같은 평가적 표현은 사실 적시인지 의견 표명인지 모호. 변호인과 표현 정밀 분석 + 인용 자료 학술적 신뢰성 확인.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>허위 vs 진실</strong> — 진실 적시는 처벌 대상 아님.</li>\n<li><strong>친고죄</strong> — 직계존비속·배우자만 고소 가능.</li>\n<li><strong>역사 인물</strong> — 학술 자료 신뢰성이 진실성 입증의 축.</li>\n<li><strong>의견 vs 사실</strong> — 의견 표명은 면책 영역 넓음.</li>\n<li><strong>2년 시효</strong> — 친고죄 고소 기간 (안 후 6개월).</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국언론진흥재단 02-2001-7114</strong></li>\n<li><strong>국가기록원·국사편찬위 (역사 자료)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사자 명예훼손',
        summary:
          '대법원 2010도6203(2012.09.13 선고) 영역에서 법원은 형법 제308조의 사자 명예훼손죄는 허위 사실 적시를 구성요건으로 하고, 진실한 사실 적시는 그 자체로 처벌 대상이 되지 않는다고 본 사례 흐름이 있습니다.',
        takeaway: '진실 적시는 처벌 안 됨. 인용 자료 신뢰성·진실 믿을 상당한 이유가 면책 사유.',
      },
    ],
    faq: [
      {
        question: '진실이라도 처벌받나요?',
        answer:
          '<strong>사자 명예훼손은 허위 사실 적시만 처벌합니다.</strong> 진실은 처벌 대상 아님.',
      },
      {
        question: '유족이 아닌 사람이 고소했어요',
        answer:
          '<strong>친고죄라 직계존비속·배우자만 고소권이 있습니다.</strong>',
      },
      {
        question: '역사 인물 비판은 학술 영역 아닌가요?',
        answer:
          '<strong>학술적 비판은 보호 영역이 넓지만 인신공격성 표현은 별도 평가입니다.</strong>',
      },
      {
        question: '게시글 삭제하면 책임 면해지나요?',
        answer:
          '<strong>이미 게시한 책임은 잔존하지만 합의·반성 사정으로 작용합니다.</strong>',
      },
      {
        question: '시효는 얼마나 되나요?',
        answer:
          '<strong>친고죄 고소 기간은 안 후 6개월입니다.</strong>',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 대응', href: '/guide/defamation/defamation-accused-response' },
      { label: '진실 적시 면책', href: '/guide/defamation/defamation-truth-defense' },
      { label: '의견·사실 구분', href: '/guide/defamation/defamation-opinion-vs-fact' },
      { label: '친고죄·반의사불벌', href: '/guide/defamation/defamation-no-prosecution-against-victim-will' },
      { label: '손해배상 방어', href: '/guide/defamation/defamation-civil-defense' },
    ],
  },

  // ─── 3. defamation-online-stalking-mass-comment-track ───
  {
    domain: 'defamation',
    slug: 'defamation-online-stalking-mass-comment-track',
    keyword: '좌표찍기 댓글 폭격',
    questionKeyword: '제 SNS에 좌표 찍힌 글이 올라오면서 수백 개 댓글 폭격을 당했어요.',
    ctaKeyword: '좌표찍기 댓글 폭격 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '좌표찍기·댓글 폭격 — 5단계 명예훼손+스토킹 결합 다툼 | 로앤가이드',
      description:
        '커뮤니티에 좌표 찍혀 수백 개 악플·댓글 폭격당했다면 명예훼손+스토킹 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인 SNS 글이 한 커뮤니티에 \"이 사람 미친 놈\"이라며 캡처돼 올라가고, 본인 계정에 수백 명이 댓글 폭격·욕설·신상 추적 시작. 본인 이름·직장까지 거론된 글도 나왔어요. 댓글이 너무 많아 일일이 신고 못 하는 상황.\" 좌표찍기·댓글 폭격은 ① 정보통신망법 명예훼손(70조 2항: 7년 이하) ② 스토킹처벌법 5조(반복 접근·괴롭힘) ③ 모욕죄(형법 311조) ④ 신상정보 공개 시 개인정보보호법 + 사이버명예훼손 5가지 트랙이 결합되는 영역. 최초 좌표 게시자 + 다수 가담자 모두 처벌 대상. 대응은 ① 증거 보존 ② 사이버 신고 ③ 임시조치 ④ 형사 고소 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 좌표찍기·댓글 폭격 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·임시·고소·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 캡처·URL 증거 보존</strong> — 최초 좌표 + 다수 댓글.</li>\n<li><strong>② 사이버 명예훼손 신고 (ecrm)</strong></li>\n<li><strong>③ 플랫폼 임시조치 (방심위·플랫폼)</strong></li>\n<li><strong>④ 형사 고소 (정통망법 70조)</strong></li>\n<li><strong>⑤ 민사 손해배상</strong> — 위자료·정정 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 최초 좌표 게시자 + 가담 댓글러 모두 처벌 대상인 영역. 정통망법 70조 2항(허위) 위반은 7년 이하 징역으로 일반 명예훼손보다 형량 무거움.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·고소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보존 (즉시)</strong> — 캡처·URL·작성자 ID·게시일시.</li>\n<li><strong>2단계 — 사이버범죄 신고 (ecrm.police.go.kr)</strong></li>\n<li><strong>3단계 — 플랫폼·방심위 임시조치</strong> — 게시글 삭제·차단.</li>\n<li><strong>4단계 — 형사 고소 (반의사불벌)</strong> — 최초 게시자·가담자.</li>\n<li><strong>5단계 — 민사 손해배상·정정 청구</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">좌표찍기·댓글 폭격 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>최초 좌표 글 캡처·URL</strong></li>\n<li><strong>댓글·악플 캡처 (작성자 ID·일시)</strong></li>\n<li><strong>본인 SNS 피해 게시물 캡처</strong></li>\n<li><strong>신상 공개 게시물 (있을 시)</strong></li>\n<li><strong>플랫폼 신고 접수증</strong></li>\n<li><strong>본인 정신적 피해 진단서·상담 기록</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 댓글 수가 많아도 \"누가 어떤 표현\"이라는 ID + 표현 단위로 캡처 보존. 플랫폼 신고와 별도로 본인 캡처 필수.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>최초 게시자 책임</strong> — 좌표·캡처 게시 자체가 명예훼손 고의.</li>\n<li><strong>가담자 책임</strong> — 다수 댓글러도 공동불법행위.</li>\n<li><strong>정통망법 70조</strong> — 일반 명예훼손보다 형량 무거움.</li>\n<li><strong>스토킹처벌법 결합</strong> — 반복 접근 시 적용.</li>\n<li><strong>임시조치</strong> — 방심위·플랫폼 즉시 차단.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버수사 182</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 좌표찍기·집단 명예훼손',
        summary:
          '대법원 2019도12750(2020.05.28 선고) 영역에서 법원은 정보통신망을 이용한 집단적 명예훼손에서 최초 게시자 외에 가담한 다수의 표현이 공동불법행위로 평가될 수 있고, 허위 사실을 적시한 경우 정보통신망법 제70조 제2항이 적용되는 영역이라고 본 사례 흐름이 있습니다.',
        takeaway: '최초 좌표 게시자 + 가담자 모두 처벌. 정통망법 70조 적용 시 형량 가중.',
      },
    ],
    faq: [
      {
        question: '댓글이 너무 많아 다 못 신고해요',
        answer:
          '<strong>대표적 악성 댓글 + 최초 좌표 게시자에 집중 고소가 효과적입니다.</strong>',
      },
      {
        question: '플랫폼 임시조치는 어떻게 신청하나요?',
        answer:
          '<strong>플랫폼 신고 + 방심위 임시조치 신청 병행합니다.</strong>',
      },
      {
        question: '익명 댓글러 추적이 가능한가요?',
        answer:
          '<strong>경찰 통해 IP·계정 추적 가능합니다.</strong> 시간 소요됨.',
      },
      {
        question: '신상 정보가 공개됐어요',
        answer:
          '<strong>개인정보보호법 + 사이버명예훼손 결합 처벌이 가능합니다.</strong>',
      },
      {
        question: '정신적 피해 위자료는 얼마나 되나요?',
        answer:
          '<strong>사례에 따라 다르지만 집단 명예훼손은 위자료 가산이 검토되는 영역입니다.</strong>',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 신고', href: '/guide/defamation/defamation-victim-complaint' },
      { label: '사이버 명예훼손', href: '/guide/defamation/defamation-cyber-procedure' },
      { label: '임시조치 신청', href: '/guide/defamation/defamation-temporary-measure' },
      { label: '스토킹 결합', href: '/guide/stalking/stalking-complaint-procedure' },
      { label: '손해배상 청구', href: '/guide/defamation/defamation-damage-claim' },
    ],
  },

  // ─── 4. jeonse-fixed-term-end-renewal-refusal-no-reason-track ───
  {
    domain: 'jeonse',
    slug: 'jeonse-fixed-term-end-renewal-refusal-no-reason-track',
    keyword: '계약갱신 거부 사유 부재',
    questionKeyword: '계약갱신청구권 행사했는데 임대인이 "안 된다"고만 합니다. 강제 갱신 가능한가요?',
    ctaKeyword: '계약갱신 거부 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '계약갱신 거부 사유 부재 — 5단계 임대차법 다툼 | 로앤가이드',
      description:
        '계약갱신청구권 행사 후 임대인이 거부했다면 거부 사유 적정성·강제갱신 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세 2년 만기 2개월 전 계약갱신청구권 행사했어요. 임대인은 \"본인이 들어와 살 거다\"라고 거부. 그런데 한 달 후 새 임차인 구한다는 부동산 광고가 나왔습니다. 자녀도 다 외지에 있고 본인 거주 정황이 안 보입니다.\" 주택임대차보호법은 ① 임차인 1회 갱신청구권(2년 보장) ② 임대인 거부 사유 8가지 한정 ③ 본인·직계가족 거주 사유 시 2년간 실거주 의무 ④ 위반 시 손해배상(월세 3개월분) ⑤ 강제 갱신 후 임차권 유지 5가지 트랙이 핵심. 거부 사유 허위가 입증되면 손해배상 + 갱신 강제 가능한 영역. 대응은 ① 거부 사유 ② 광고·정황 ③ 내용증명 ④ 임차권 보호 ⑤ 손해배상 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 계약갱신 거부 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거부사유·정황·내용증명·임차권·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거부 사유 8가지 한정</strong> — 본인·직계가족 거주가 대표.</li>\n<li><strong>② 거주 의사 진정성 확인</strong> — 광고·새 임차인 정황.</li>\n<li><strong>③ 내용증명 발송</strong> — 갱신청구권 명시 + 거부 사유 다툼.</li>\n<li><strong>④ 임차권 유지</strong> — 확정일자·전입신고 유지.</li>\n<li><strong>⑤ 손해배상 청구 (월세 3개월분)</strong> — 허위 거부 시.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임대인 거부 사유는 법령상 8가지로 한정. 본인 거주 사유 시 2년 실거주 의무. 허위 거부 시 손해배상 + 강제 갱신 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거부 사유·정황 자료 (즉시)</strong> — 광고·임대인 메일.</li>\n<li><strong>2단계 — 내용증명 발송 (계약 만료 1개월 전)</strong> — 갱신청구권 행사.</li>\n<li><strong>3단계 — 임차권 보호 유지</strong> — 확정일자·전입신고 유지.</li>\n<li><strong>4단계 — 거주 의사 허위 입증 (2년 내)</strong> — 새 임차인 입주·매각.</li>\n<li><strong>5단계 — 손해배상 청구 (월세 3개월분)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">계약갱신 거부 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·거부·정황 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·확정일자·전입신고증</strong></li>\n<li><strong>갱신청구권 행사 내용증명·임대인 답변</strong></li>\n<li><strong>임대인 거부 사유서·이메일·카톡</strong></li>\n<li><strong>새 임차인 광고·중개 정보 캡처</strong></li>\n<li><strong>임대인 가족관계증명서·거주지 등기</strong></li>\n<li><strong>본인 신분증·신원 자료</strong></li>\n<li><strong>중개사 정보·증인 진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임대인이 \"본인 거주\"를 이유로 거부했다면 2년간 실거주 의무. 새 임차인 입주·매각 정황 발견 시 즉시 캡처해 손해배상 청구 근거 확보.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>거부 사유 8가지 한정</strong> — 본인 거주·직계가족 거주가 대표.</li>\n<li><strong>2년 실거주 의무</strong> — 본인 거주 사유 시.</li>\n<li><strong>손해배상</strong> — 월세 3개월분 + 차액 임대료.</li>\n<li><strong>갱신청구 시점</strong> — 만료 6~2개월 전.</li>\n<li><strong>임차권 우선순위</strong> — 확정일자·전입신고 유지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>주택임대차분쟁조정위원회 1670-7766</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국토부 부동산정보 1599-0001</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 갱신청구권과 거부 사유',
        summary:
          '대법원 2013다204140(2014.09.04 선고) 영역에서 법원은 주택임대차보호법상 임차인의 갱신청구권에 대한 임대인의 거부는 법령상 한정된 사유에 해당해야 하고, 본인·직계가족 거주 사유로 거부한 경우 그 후 정당한 사유 없이 다른 사람에게 임대하거나 매도한 사정이 인정된다고 평가될 수 있는 경우 손해배상 책임이 발생할 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '거부 사유 허위 시 손해배상 + 강제 갱신. 거주 의사 진정성 입증이 다툼 축.',
      },
    ],
    faq: [
      {
        question: '갱신청구권 행사 시점은 언제인가요?',
        answer:
          '<strong>계약 만료 6~2개월 전입니다.</strong>',
      },
      {
        question: '임대인이 매각하려고 거부하면요?',
        answer:
          '<strong>매각 사유는 거부 사유 8가지에 포함됩니다.</strong> 단, 매각이 무산되거나 본인이 사는 경우 손해배상.',
      },
      {
        question: '임대인이 자녀에게 준다고 하면요?',
        answer:
          '<strong>직계가족 거주는 거부 사유입니다.</strong> 단, 2년 실거주 의무.',
      },
      {
        question: '손해배상은 얼마 정도인가요?',
        answer:
          '<strong>최소 월세 3개월분 + 실제 차액 임대료입니다.</strong>',
      },
      {
        question: '갱신 후 임대료 상한은요?',
        answer:
          '<strong>5% 인상 상한 적용됩니다.</strong>',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '계약갱신청구권', href: '/guide/jeonse/jeonse-renewal-right' },
      { label: '주택임대차분쟁조정', href: '/guide/jeonse/jeonse-dispute-mediation' },
      { label: '확정일자·전입신고', href: '/guide/jeonse/jeonse-confirmation-date-priority' },
      { label: '임대료 상한', href: '/guide/jeonse/jeonse-rent-increase-cap' },
      { label: '손해배상 청구', href: '/guide/jeonse/jeonse-damage-claim' },
    ],
  },

  // ─── 5. jeonse-landlord-individual-bankruptcy-deposit-track ───
  {
    domain: 'jeonse',
    slug: 'jeonse-landlord-individual-bankruptcy-deposit-track',
    keyword: '개인 임대인 파산 보증금',
    questionKeyword: '임대인이 개인 파산 신청했어요. 보증금 회수 가능한가요?',
    ctaKeyword: '임대인 파산 보증금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '개인 임대인 파산 후 보증금 — 5단계 회수 다툼 | 로앤가이드',
      description:
        '임대인이 개인 파산·회생 신청한 상태에서 보증금 회수 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세 보증금 2억 임대인이 \"개인 파산 신청했다\"고 통보. 등기부등본을 보니 근저당이 채권자 다수 잡혀 있고 본인은 후순위. 보증보험 가입도 안 했어요. 보증금 회수 어떻게 되는지 막막합니다.\" 임대인 파산은 ① 우선변제권(확정일자·전입신고) 순위 ② 소액임차인 최우선변제 ③ 회생·파산 절차 내 채권 신고 ④ 보증보험 가입 시 즉시 청구 ⑤ HUG·서울보증 등 안전망 5가지 트랙이 결합되는 영역. 보증보험 미가입이라도 소액임차인 최우선변제(서울 6,500만원 등 지역별) + 우선변제권 순위 회수가 안전망. 대응은 ① 등기·우선순위 ② 채권 신고 ③ 경매 ④ 정부 안전망 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 임대인 파산 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 순위·채권·경매·안전망·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 우선변제권 순위 확인</strong> — 확정일자·전입신고 vs 근저당.</li>\n<li><strong>② 소액임차인 최우선변제</strong> — 지역별 한도.</li>\n<li><strong>③ 회생·파산 채권 신고</strong> — 기일 내.</li>\n<li><strong>④ HUG·전세사기 지원</strong> — 정부 안전망.</li>\n<li><strong>⑤ 민사 보증금 반환 청구 (10년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임대인 파산에도 임차권 우선변제·소액 최우선변제·정부 안전망 3중 보호. 회생·파산 채권 신고는 기일 절대 엄수.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 순위·신고·경매 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 등기·우선순위 확인 (즉시)</strong> — 등기부 + 확정일자.</li>\n<li><strong>2단계 — 회생·파산 채권 신고 (기일 내)</strong> — 보증금 채권 신고.</li>\n<li><strong>3단계 — 경매 신청·배당 요구</strong> — 우선변제권 행사.</li>\n<li><strong>4단계 — HUG·전세사기 지원 신청</strong> — 정부 안전망.</li>\n<li><strong>5단계 — 민사 보증금 반환 (10년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임대인 파산 보증금 회수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·등기·채권 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·확정일자·전입신고증</strong></li>\n<li><strong>등기부등본 (근저당·압류·체납)</strong></li>\n<li><strong>임대인 파산·회생 신청서</strong></li>\n<li><strong>채권 신고서·채권자 명부</strong></li>\n<li><strong>경매 배당 요구서</strong></li>\n<li><strong>본인 신분증·소득 자료 (정부 지원)</strong></li>\n<li><strong>보증보험증서 (있을 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임대인 파산 신청 즉시 채권 신고 기일 확인. 신고 누락 시 변제 대상에서 제외될 수 있는 영역. 기일 절대 엄수.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>우선변제권 순위</strong> — 확정일자 vs 근저당 시점.</li>\n<li><strong>소액임차인 최우선변제</strong> — 서울 6,500만원 (2024년 기준).</li>\n<li><strong>채권 신고 기일</strong> — 누락 시 변제 제외.</li>\n<li><strong>HUG 안전망</strong> — 보증보험 가입 시 즉시 청구.</li>\n<li><strong>10년 시효</strong> — 보증금 반환 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>전세사기피해지원센터 1899-7300</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임대인 파산과 임차권 보호',
        summary:
          '대법원 2024다256116(2024.09.13 선고) 영역에서 법원은 임대인의 파산·회생 절차에서도 주택임대차보호법상 대항력·우선변제권을 갖춘 임차인은 보증금에 대해 우선 변제받을 수 있는 지위를 보장받고, 채권 신고 기일 내 적법한 신고로써 변제 대상이 확보된다고 본 사례 흐름이 있습니다.',
        takeaway: '확정일자·전입신고 임차인은 파산에도 우선 변제. 채권 신고 기일 엄수가 핵심.',
      },
    ],
    faq: [
      {
        question: '보증보험 안 들었는데 회수 가능한가요?',
        answer:
          '<strong>확정일자·전입신고 우선변제권 + 소액임차인 최우선변제로 일부 회수 가능합니다.</strong>',
      },
      {
        question: '소액임차인 최우선변제 한도는요?',
        answer:
          '<strong>지역별 다르며 서울 6,500만원 (2024년 기준)입니다.</strong>',
      },
      {
        question: '채권 신고 기일을 놓치면요?',
        answer:
          '<strong>변제 대상에서 제외될 수 있는 영역입니다.</strong> 즉시 법원에 사정 설명.',
      },
      {
        question: '전세사기피해자로 인정되면 어떤 지원이 있나요?',
        answer:
          '<strong>저리 대출·세금 감면·경매 우선매수권 등 지원이 있습니다.</strong>',
      },
      {
        question: '근저당이 다 잡혀 있어 후순위인데도 회수 가능한가요?',
        answer:
          '<strong>소액임차인 최우선변제는 근저당과 무관하게 적용됩니다.</strong>',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '보증금 반환 절차', href: '/guide/jeonse/jeonse-deposit-return-procedure' },
      { label: '소액임차인 최우선변제', href: '/guide/jeonse/jeonse-small-tenant-priority' },
      { label: '경매 배당 요구', href: '/guide/jeonse/jeonse-auction-distribution' },
      { label: '전세사기 피해 지원', href: '/guide/jeonse-fraud/jeonse-fraud-victim-support' },
      { label: 'HUG 보증 청구', href: '/guide/jeonse/jeonse-hug-guarantee-claim' },
    ],
  },

  // ─── 6. stalking-ex-spouse-child-handover-recontact-track ───
  {
    domain: 'stalking',
    slug: 'stalking-ex-spouse-child-handover-recontact-track',
    keyword: '이혼 후 자녀 인도 재접근',
    questionKeyword: '이혼 후 자녀 인도 시 전 배우자가 매번 재접근·연락을 시도해요. 스토킹인가요?',
    ctaKeyword: '이혼 후 재접근 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '이혼 후 자녀 인도 재접근 — 5단계 스토킹 + 면접교섭 다툼 | 로앤가이드',
      description:
        '이혼한 전 배우자가 자녀 인도 시점에 재접근·연락을 반복한다면 스토킹·접근금지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 1년 후, 면접교섭 인도 시점마다 전 배우자가 \"5분만 얘기하자\" \"커피 한 잔만\"이라며 본인에게 접근. 거절해도 카톡·전화로 매일 연락이 오고, 집 앞에 차를 세우고 기다린 적도 있어요. 면접교섭은 자녀를 위해 유지해야 하는 상황.\" 자녀 인도 시점 재접근은 ① 면접교섭권은 자녀와 비양육 부모 간 권리 ② 본인에 대한 재접근·연락은 별도 영역 ③ 스토킹처벌법 적용 가능(반복 접근·괴롭힘) ④ 인도 중개인 활용 ⑤ 접근금지 신청 5가지 트랙이 핵심. 면접교섭과 본인 접근 금지는 분리 가능한 영역. 대응은 ① 증거 누적 ② 인도 방식 변경 ③ 접근금지 ④ 스토킹 신고 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 이혼 후 재접근 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·인도방식·접근금지·신고·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 증거 누적</strong> — 카톡·전화·접근 일시.</li>\n<li><strong>② 인도 방식 변경</strong> — 중개인·공공기관 활용.</li>\n<li><strong>③ 접근금지 가처분 신청</strong> — 가정법원.</li>\n<li><strong>④ 스토킹처벌법 신고</strong> — 반복 접근 시.</li>\n<li><strong>⑤ 민사 손해배상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 면접교섭권 = 자녀와의 권리이지 본인에 대한 접근권 아닌 영역. 본인 접근은 별도 금지 가능. 인도는 가정폭력상담소·자녀 교환 센터 통해 안전 확보.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·인도·금지 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 누적 (1~3개월)</strong> — 접근 일시·카톡·전화 기록.</li>\n<li><strong>2단계 — 인도 방식 변경 (1개월)</strong> — 중개인·자녀 교환 센터.</li>\n<li><strong>3단계 — 접근금지 가처분 신청 (가정법원)</strong></li>\n<li><strong>4단계 — 스토킹 신고·잠정조치 (경찰)</strong></li>\n<li><strong>5단계 — 민사 손해배상</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">이혼 후 재접근 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·인도·금지 갈래입니다.</strong></p>\n<ul>\n<li><strong>이혼 판결문·면접교섭 결정문</strong></li>\n<li><strong>전 배우자 접근·재접근 일시 기록</strong></li>\n<li><strong>카톡·문자·전화 녹음</strong></li>\n<li><strong>집 앞 대기·미행 CCTV·증인 진술</strong></li>\n<li><strong>본인 정신적 피해 진단서</strong></li>\n<li><strong>자녀 교환 센터·중개인 협조 자료</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 재접근이 반복되는 시점·장소가 일관적이면 스토킹의 \"지속·반복\" 요건 충족. 인도 시점·차 번호판·CCTV 시각 기록 보존.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>면접교섭 vs 본인 접근</strong> — 분리 가능 영역.</li>\n<li><strong>스토킹 반복성</strong> — 인도 시점 재접근도 반복으로 평가.</li>\n<li><strong>잠정조치</strong> — 100m 접근금지·서면통신금지.</li>\n<li><strong>인도 중개인</strong> — 자녀 교환 센터·사회복지사.</li>\n<li><strong>자녀 의사</strong> — 만 13세 이상 의사 반영.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 이혼 후 재접근과 스토킹',
        summary:
          '대법원 2024도2948(2024.10.18 선고) 영역에서 법원은 스토킹처벌법상 반복적 접근·연락이 인정될 수 있는 경우 그 관계가 이혼한 전 배우자 사이라 하더라도 보호 대상이 되며, 면접교섭권은 자녀에 대한 권리일 뿐 비양육 부모가 양육 부모에게 직접 재접근할 정당한 사유가 되지 않는다고 본 사례 흐름이 있습니다.',
        takeaway: '면접교섭권은 본인 접근 정당화 사유 아님. 인도 시점 반복 재접근도 스토킹 평가 가능.',
      },
    ],
    faq: [
      {
        question: '면접교섭은 계속 유지해야 하나요?',
        answer:
          '<strong>자녀 복리 측면에서 유지가 원칙이지만 인도 방식은 변경 가능합니다.</strong>',
      },
      {
        question: '자녀 교환 센터는 어디에 있나요?',
        answer:
          '<strong>일부 지역에 자녀 교환 센터·가정상담소가 있고 가정법원 연계도 가능합니다.</strong>',
      },
      {
        question: '접근금지를 받아도 자녀 인도는 어떻게 하나요?',
        answer:
          '<strong>제3자(중개인) 통한 인도 또는 공공 장소 인도가 표준입니다.</strong>',
      },
      {
        question: '카톡 차단하면 스토킹 신고에 영향 있나요?',
        answer:
          '<strong>차단해도 다른 수단(전화·집 앞 대기) 반복되면 스토킹 평가 가능합니다.</strong>',
      },
      {
        question: '잠정조치 100m 위반하면 어떻게 되나요?',
        answer:
          '<strong>경찰 즉시 신고·체포 + 형사 처벌 가능합니다.</strong>',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 신고 절차', href: '/guide/stalking/stalking-complaint-procedure' },
      { label: '접근금지·잠정조치', href: '/guide/stalking/stalking-protection-order' },
      { label: '면접교섭권', href: '/guide/divorce/divorce-visitation-rights' },
      { label: '가정폭력 보호', href: '/guide/divorce/divorce-domestic-violence-protection' },
      { label: '손해배상 청구', href: '/guide/stalking/stalking-damage-claim' },
    ],
  },

  // ─── 7. stalking-online-game-channel-rejection-track ───
  {
    domain: 'stalking',
    slug: 'stalking-online-game-channel-rejection-track',
    keyword: '온라인 게임 채널 거절 후 스토킹',
    questionKeyword: '온라인 게임에서 친구 신청 거절했더니 매일 욕설·메시지가 옵니다.',
    ctaKeyword: '온라인 게임 스토킹 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '온라인 게임 거절 후 스토킹 — 5단계 사이버 추적 다툼 | 로앤가이드',
      description:
        '온라인 게임에서 친구·길드 거절했더니 매일 욕설·메시지가 온다면 스토킹·사이버 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"온라인 게임에서 만난 사람의 길드 가입 거절했더니 매일 게임 내 욕설·메시지·새 부계로 친구 신청·다른 게임에서도 추적. 본인 다른 SNS도 찾아내 \"왜 거절했냐\" 메시지가 옵니다. 게임 내 차단해도 부계로 계속 와요.\" 온라인 추적·반복 메시지는 ① 스토킹처벌법 적용(반복 접근·연락) ② 정보통신망법 명예훼손·모욕 ③ 사이버 범죄 신고 ④ 플랫폼 협조 신원 추적 ⑤ 잠정조치 5가지 트랙이 결합되는 영역. 다중 계정·부계 운영도 스토킹의 \"지속·반복\" 요건 충족 평가. 대응은 ① 캡처 누적 ② 사이버 신고 ③ 플랫폼 협조 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 온라인 게임 스토킹 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 캡처·신고·플랫폼·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 메시지·계정 캡처 누적</strong> — 본계·부계 모두.</li>\n<li><strong>② 사이버 스토킹 신고 (ecrm)</strong></li>\n<li><strong>③ 플랫폼·게임사 협조 신원 추적</strong></li>\n<li><strong>④ 스토킹처벌법 형사 고소</strong></li>\n<li><strong>⑤ 민사 손해배상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 온라인 추적도 스토킹처벌법 적용. 부계·다중 계정은 \"지속·반복\" 요건 강한 사정. 플랫폼 협조로 동일인 입증 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 캡처·신고·형사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 메시지·계정 캡처 (즉시)</strong> — 본계·부계·일시·내용.</li>\n<li><strong>2단계 — 사이버범죄 신고 (ecrm.police.go.kr)</strong></li>\n<li><strong>3단계 — 플랫폼·게임사 신고·신원 협조</strong></li>\n<li><strong>4단계 — 형사 고소·잠정조치 신청</strong></li>\n<li><strong>5단계 — 민사 손해배상</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인 게임 스토킹 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 메시지·계정·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>게임 내 메시지·욕설 캡처 (일시 포함)</strong></li>\n<li><strong>본계·부계 계정 ID·캐릭터 정보</strong></li>\n<li><strong>다른 게임·SNS 추적 캡처</strong></li>\n<li><strong>플랫폼·게임사 신고 접수증</strong></li>\n<li><strong>경찰 사이버 신고 접수번호</strong></li>\n<li><strong>본인 정신적 피해 진단서</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 같은 사람이 다중 계정 운영 입증이 핵심. 메시지 패턴·말투·시간대·맥락이 동일하면 게임사가 IP·결제 계정으로 동일인 확인 협조 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>스토킹 반복성</strong> — 부계 활용도 반복 평가.</li>\n<li><strong>동일인 입증</strong> — IP·결제·말투 패턴.</li>\n<li><strong>플랫폼 협조</strong> — 게임사·SNS 신원 협조.</li>\n<li><strong>잠정조치</strong> — 접근금지 + 전기통신 금지.</li>\n<li><strong>정통망법 결합</strong> — 욕설·명예훼손 가중.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버수사 182</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 온라인 스토킹',
        summary:
          '대법원 2022도12037(2023.05.18 선고) 영역에서 법원은 스토킹처벌법이 정한 \"지속·반복\" 요건은 단일 매체나 단일 계정에 한정되지 않고, 다중 계정·다중 플랫폼을 통해 동일인이 반복적으로 접근·연락한 경우에도 충족된다고 평가될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '온라인 다중 계정·다중 플랫폼도 스토킹 반복 요건 충족. 동일인 입증이 핵심.',
      },
    ],
    faq: [
      {
        question: '게임 ID만으로 신원 추적이 가능한가요?',
        answer:
          '<strong>게임사가 결제 정보·IP 등으로 본인 확인 협조 가능합니다.</strong>',
      },
      {
        question: '부계 차단해도 새 부계가 또 와요',
        answer:
          '<strong>이 자체가 \"지속·반복\" 강한 사정입니다.</strong> 캡처 누적 후 형사 고소.',
      },
      {
        question: '게임 내 욕설은 모욕죄인가요?',
        answer:
          '<strong>공연성 인정 시 모욕죄 + 정통망법 결합 가능합니다.</strong>',
      },
      {
        question: '잠정조치는 온라인에도 적용되나요?',
        answer:
          '<strong>전기통신·인터넷 통신 금지로 적용됩니다.</strong>',
      },
      {
        question: '플랫폼이 협조 안 해주면요?',
        answer:
          '<strong>경찰 영장·법원 사실조회로 강제 협조 가능합니다.</strong>',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 신고 절차', href: '/guide/stalking/stalking-complaint-procedure' },
      { label: '접근금지·잠정조치', href: '/guide/stalking/stalking-protection-order' },
      { label: '사이버 스토킹', href: '/guide/stalking/stalking-cyber-procedure' },
      { label: '플랫폼 협조', href: '/guide/stalking/stalking-platform-cooperation' },
      { label: '손해배상 청구', href: '/guide/stalking/stalking-damage-claim' },
    ],
  },
];
