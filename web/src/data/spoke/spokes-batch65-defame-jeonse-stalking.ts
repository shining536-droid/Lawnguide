import { SpokePage } from '../spoke-pages';

// batch65 defamation(3) + jeonse(2) + stalking(2) — 7개 (2026-05-15)
//
// 고유 존재 이유:
// 1. defamation-medical-malpractice-online-review — 의료사고 환자가 진료 후기 게시 → 병원 측 명예훼손 고소 (사실적시·공익성 다툼, accused).
// 2. defamation-political-public-figure-criticism-comment — 정치인 비판 댓글로 명예훼손 고소 (공인이론·공익 강도 높음, accused).
// 3. defamation-livestream-realtime-record-evidence — 라이브방송 중 실시간 발언 증거 보존·고소 절차 (victim).
// 4. jeonse-multi-household-officetel-residence-proof — 다가구·오피스텔 주거용 입증 (주임법 적용 여부 갈리는 트랙).
// 5. jeonse-landlord-tax-arrears-priority-loss — 임대인 국세 체납 → 당해세 우선특권으로 보증금 우선순위 상실.
// 6. stalking-celebrity-fan-private-info-tracking — 연예인 등 공인을 향한 팬의 개인정보 추적.
// 7. stalking-online-game-real-life-doxxing — 온라인 게임 채팅 → 현실 신상 노출·추적.

export const spokesBatch65DefameJeonseStalking: SpokePage[] = [
  // ─── 1. defamation-medical-malpractice-online-review-track ───
  {
    domain: 'defamation',
    slug: 'defamation-medical-malpractice-online-review-track',
    keyword: '의료사고 진료 후기 명예훼손',
    questionKeyword: '의료사고 후 진료 후기 올렸더니 병원에서 명예훼손으로 고소하겠다고 합니다.',
    ctaKeyword: '의료사고 진료 후기 명예훼손 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '의료사고 진료 후기 명예훼손 — 5단계 사실적시·공익성 다툼 | 로앤가이드',
      description:
        '의료사고 후 진료 후기 게시로 병원이 명예훼손 고소 통지했다면 사실적시·공익성 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"갑상선 수술 후 합병증이 생겨 다른 병원에서 재수술받은 분이, 본인 블로그에 \"○○병원에서 수술받았는데 합병증이 생겨 재수술했다\"는 후기를 올렸어요. 병원 측이 \"허위·과장이다, 명예훼손이다\"라며 고소 통지를 보냈습니다. 본인은 사실만 적었다고 생각하는데 처벌받을지 막막한 영역입니다.\" 진료 후기는 ① 정보통신망법 70조 1항(사실적시 명예훼손, 3년 이하) ② 비방 목적 vs 공공의 이익 ③ 진실성·상당성 ④ 소비자 보호 측면 공익성 ⑤ 형법 310조 위법성조각 5가지 트랙이 결합되는 영역. 사실적시도 비방 목적이 있으면 처벌되지만, 공공의 이익(다른 소비자 보호) 입증 시 면책될 여지가 있는 영역. 혐의를 받고 있다면 표현 분석 + 진실성 입증이 핵심. 대응은 ① 표현 ② 진실성 ③ 공익성 ④ 합의 ⑤ 방어 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 진료 후기 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 표현·진실·공익·합의·방어 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 표현 내용 분석</strong> — 사실 적시 vs 평가·의견.</li>\n<li><strong>② 진실성 입증</strong> — 진료기록·재수술 자료.</li>\n<li><strong>③ 공익성 입증</strong> — 소비자 보호·의료 정보.</li>\n<li><strong>④ 합의 검토</strong> — 일부 표현 수정·정정.</li>\n<li><strong>⑤ 형사 방어 + 민사 손해배상 대응</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사실적시 명예훼손도 비방 목적 + 공익성 부재 시 처벌 가능. 진료기록·재수술 자료로 진실성 입증 + 다른 환자 정보 제공 공익성 입증이 면책 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·상담·방어 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 후기·진료기록 자료 보존 (즉시)</strong> — 게시글·진료기록·재수술 자료.</li>\n<li><strong>2단계 — 변호인 상담 (1주 내)</strong> — 표현·공익성 평가.</li>\n<li><strong>3단계 — 합의 검토 (필요시)</strong> — 일부 표현 수정·정정.</li>\n<li><strong>4단계 — 경찰·검찰 조사 대응 (1~3개월)</strong> — 진실성·공익성 변론.</li>\n<li><strong>5단계 — 민사 손해배상 방어</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">진료 후기 명예훼손 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 표현·진실성·공익 갈래입니다.</strong></p>\n<ul>\n<li><strong>후기 게시글·URL·캡처 (게시일시 포함)</strong></li>\n<li><strong>본인 진료기록·수술기록·진단서</strong></li>\n<li><strong>재수술 병원 진료기록·소견서</strong></li>\n<li><strong>병원 측 통지서·고소장</strong></li>\n<li><strong>본인 신원·환자 본인 확인</strong></li>\n<li><strong>유사 후기·언론 보도 (있을 시)</strong></li>\n<li><strong>변호인 의견서·자문 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진료기록은 본인이 환자라면 의료법에 따라 발급 가능. 재수술 병원 진료기록까지 모아 \"본인이 직접 겪은 사실\"임을 객관적으로 뒷받침할 수 있는 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>비방 목적</strong> — 보복·악감정 표현이 있는지.</li>\n<li><strong>공익성</strong> — 다른 환자 정보 제공 측면.</li>\n<li><strong>진실성</strong> — 진료기록과 후기 내용 일치.</li>\n<li><strong>사실 vs 평가</strong> — \"실력이 부족\" 같은 평가는 보호 영역 차이.</li>\n<li><strong>반의사불벌</strong> — 사실적시는 합의 시 처벌 면제 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 진료 후기·정보통신망 명예훼손',
        summary:
          '대법원 2022도699(2024.01.04 선고) 영역에서 법원은 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제70조 제1항 명예훼손죄의 비방 목적 유무를 판단할 때 적시된 사실의 내용·표현 방식·공익 관련성·사회적 평가 영향 정도를 종합 고려해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '비방 목적 vs 공공의 이익 판단 종합. 진실성 + 소비자 정보 제공 공익성이 면책 트랙.',
      },
    ],
    faq: [
      {
        question: '본인이 겪은 사실만 적었는데도 처벌받나요?',
        answer:
          '<strong>사실적시도 비방 목적 + 공익성 부재 시 처벌 여지가 있는 영역입니다.</strong> 진실성·공익성 입증이 핵심.',
      },
      {
        question: '진료기록은 어떻게 받나요?',
        answer:
          '<strong>의료법상 환자 본인은 발급 청구 가능합니다.</strong> 병원 거부 시 보건소 신고.',
      },
      {
        question: '병원명을 가렸으면 명예훼손이 아닌가요?',
        answer:
          '<strong>특정 가능성이 있으면 성립할 여지가 있는 영역입니다.</strong>',
      },
      {
        question: '합의가 가능한가요?',
        answer:
          '<strong>사실적시 명예훼손은 반의사불벌이라 합의 시 처벌 면제 가능합니다.</strong>',
      },
      {
        question: '게시글 삭제하면 책임 면해지나요?',
        answer:
          '<strong>이미 게시한 책임은 잔존하지만 합의·반성 사정으로 작용할 수 있는 영역입니다.</strong>',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 대응', href: '/guide/defamation/defamation-accused-response' },
      { label: '공익성·면책', href: '/guide/defamation/defamation-public-interest-defense' },
      { label: '사실적시 명예훼손', href: '/guide/defamation/defamation-truth-statement' },
      { label: '반의사불벌', href: '/guide/defamation/defamation-no-prosecution-against-victim-will' },
      { label: '손해배상 방어', href: '/guide/defamation/defamation-civil-defense' },
    ],
  },

  // ─── 2. defamation-political-public-figure-criticism-comment-track ───
  {
    domain: 'defamation',
    slug: 'defamation-political-public-figure-criticism-comment-track',
    keyword: '정치인 비판 댓글 명예훼손',
    questionKeyword: '정치인 비판 댓글을 달았는데 명예훼손으로 고소한다고 합니다.',
    ctaKeyword: '정치인 비판 댓글 명예훼손 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '정치인 비판 댓글 명예훼손 — 5단계 공인이론 다툼 | 로앤가이드',
      description:
        '정치인 비판 댓글로 명예훼손 고소 통지를 받았다면 공인이론·공익성 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"한 정치인의 발언에 비판 댓글을 달았는데 \"허위사실 유포, 명예훼손이다\"라며 고소 통지를 받았어요. 본인은 \"정치인 비판은 공인 비판이라 보호된다\"고 들었는데 진짜인지, 어디까지가 허용 범위인지 막막한 상황입니다.\" 정치인·공직자 비판은 ① 공인이론(헌법재판소·대법원 인정) ② 공익성 강도 매우 높음(국민 알 권리) ③ 진실성·상당성 ④ 형법 310조 위법성조각 ⑤ 비방 목적·인신공격 회피 5가지 트랙이 핵심. 정치인은 일반 공인보다 보호 약하고 비판 허용 범위 더 넓은 영역. 혐의를 받고 있다면 표현 분석 + 공익성 입증이 면책 트랙입니다. 대응은 ① 표현 ② 공익성 ③ 진실성 ④ 합의 ⑤ 방어 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 정치인 비판 댓글 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 표현·공익·진실·합의·방어 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 표현 내용 분석</strong> — 사실 적시 vs 의견·논평.</li>\n<li><strong>② 공익성 입증 (국민 알 권리)</strong> — 정치인 자질·공약·발언 비판.</li>\n<li><strong>③ 진실성·상당성</strong> — 근거 자료·언론 보도.</li>\n<li><strong>④ 합의 검토</strong> — 일부 표현 수정.</li>\n<li><strong>⑤ 형법 310조 위법성조각 변론</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정치인 비판은 일반 공인보다 더 넓게 보호되는 영역. 단, 허위사실 적시 + 비방 목적은 보호 약화. 인신공격성 표현·사생활 공격은 별도 평가.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·상담·방어 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 댓글·근거 자료 보존 (즉시)</strong> — 댓글 캡처·원본 게시글·근거 자료.</li>\n<li><strong>2단계 — 변호인 상담 (1주 내)</strong> — 공인이론·표현 평가.</li>\n<li><strong>3단계 — 공익성 입증 자료 정리</strong> — 언론 보도·공약·발언.</li>\n<li><strong>4단계 — 경찰·검찰 조사 대응</strong> — 공인이론·진실성 변론.</li>\n<li><strong>5단계 — 민사 손해배상 방어</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">정치인 비판 댓글 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 표현·근거·공익 갈래입니다.</strong></p>\n<ul>\n<li><strong>댓글 원본 캡처·URL (게시일시 포함)</strong></li>\n<li><strong>비판 대상 정치인의 발언·공약 자료</strong></li>\n<li><strong>관련 언론 보도·기사</strong></li>\n<li><strong>고소장·통지서</strong></li>\n<li><strong>본인 신원·정치적 활동 이력</strong></li>\n<li><strong>유사 비판 댓글·여론 자료</strong></li>\n<li><strong>변호인 의견서·면담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \"의견·논평\"은 명예훼손이 잘 안 되고 \"허위 사실 적시\"가 문제. 댓글이 의견 표명인지 사실 적시인지 정밀 분석 + 근거 자료 보존이 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공인이론</strong> — 정치인·고위 공직자 보호 약화.</li>\n<li><strong>국민 알 권리</strong> — 공익성 강도 매우 높음.</li>\n<li><strong>의견 vs 사실</strong> — 의견 표명은 처벌 어려움.</li>\n<li><strong>인신공격 회피</strong> — 외모·사생활 공격은 보호 약화.</li>\n<li><strong>형법 310조</strong> — 위법성조각 사유 변론.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국언론진흥재단 02-2001-7114</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공익성과 위법성조각',
        summary:
          '대법원 2024도14555(2025.05.29 선고) 영역에서 법원은 형법 제310조의 위법성조각사유 중 \"진실한 사실\" 및 \"오로지 공공의 이익에 관한 때\"의 의미를 판단할 때, 적시된 사실의 내용·표현 방식·사회적 평가 영향·공익 관련성을 종합 고려해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '공익성 입증 시 위법성조각 가능. 정치인 비판은 보호 영역 넓되 인신공격 회피가 핵심.',
      },
    ],
    faq: [
      {
        question: '"의견 표명"이라고 하면 보호되나요?',
        answer:
          '<strong>의견과 사실의 경계가 모호한 경우 다툼 영역입니다.</strong> 변호인과 표현 분석.',
      },
      {
        question: '정치인은 어느 정도까지 비판이 가능한가요?',
        answer:
          '<strong>일반 공인보다 보호 약하고 비판 허용 범위가 넓은 영역입니다.</strong> 단, 허위사실·인신공격 회피.',
      },
      {
        question: '익명 댓글도 추적되나요?',
        answer:
          '<strong>경찰 IP 추적으로 신원 확인 가능합니다.</strong>',
      },
      {
        question: '합의가 가능한가요?',
        answer:
          '<strong>사실적시 명예훼손은 반의사불벌이라 합의 시 처벌 면제 가능합니다.</strong>',
      },
      {
        question: '댓글 삭제하면 책임 면해지나요?',
        answer:
          '<strong>이미 게시한 책임은 잔존하지만 합의·반성 사정으로 작용할 수 있는 영역입니다.</strong>',
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

  // ─── 3. defamation-livestream-realtime-record-evidence-track ───
  {
    domain: 'defamation',
    slug: 'defamation-livestream-realtime-record-evidence-track',
    keyword: '라이브방송 실시간 명예훼손',
    questionKeyword: '유튜브 라이브에서 제 험담이 실시간으로 나갔어요. 증거 보존 어떻게 하나요?',
    ctaKeyword: '라이브방송 명예훼손 증거 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '라이브방송 실시간 명예훼손 — 5단계 증거 보존·고소 다툼 | 로앤가이드',
      description:
        '라이브방송 중 본인 험담이 실시간 송출됐다면 증거 보존·임시조치·고소 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"한 유튜버가 라이브방송에서 본인 이름을 거론하며 \"○○씨는 사기꾼이다\" \"○○씨는 거짓말쟁이\"라고 30분 동안 발언했어요. 본인 직장명·SNS도 거론했고 수천 명이 실시간 시청. 방송 종료 후 영상도 삭제됐는데 캡처도 못 떴고 막막한 상황입니다.\" 라이브방송 명예훼손은 ① 정보통신망법 70조 1·2항 ② 사실/허위 적시 + 비방 목적 ③ 실시간이라 증거 보존이 어려운 트랙 ④ 플랫폼 협조 영상 보존 요청 ⑤ 임시조치 5가지 트랙이 결합되는 영역. 라이브는 종료 후 영상이 삭제되거나 비공개되어 \"방송 영상 자체 확보\"가 가장 시급. 대응은 ① 즉시 증거 보존 ② 플랫폼 협조 ③ 사이버 신고 ④ 형사 고소 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 라이브방송 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·플랫폼·신고·고소·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 라이브 실시간 녹화·캡처</strong> — 화면·소리 동시 녹화.</li>\n<li><strong>② 플랫폼 영상 보존 요청</strong> — 유튜브·트위치 등.</li>\n<li><strong>③ 사이버 명예훼손 신고 (ecrm)</strong></li>\n<li><strong>④ 형사 고소 (정통망법 70조)</strong></li>\n<li><strong>⑤ 민사 손해배상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 라이브는 종료 후 영상 삭제·비공개가 빈번한 영역. 본인 화면 녹화 + 플랫폼 영상 보존 요청 동시 진행이 증거 확보의 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·고소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 화면 녹화·캡처 (방송 중)</strong> — 화면 녹화 앱·스크린샷.</li>\n<li><strong>2단계 — 플랫폼 영상 보존 요청 (즉시)</strong> — 신고 + 보존 요청서.</li>\n<li><strong>3단계 — 사이버범죄 신고 (ecrm.police.go.kr)</strong></li>\n<li><strong>4단계 — 형사 고소·임시조치 신청</strong></li>\n<li><strong>5단계 — 민사 손해배상</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 삭제·합의·방어 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">라이브방송 명예훼손 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>라이브 화면 녹화·녹음 (시각 표시 포함)</strong></li>\n<li><strong>채팅창·시청자 수 캡처</strong></li>\n<li><strong>방송 URL·채널 정보·송출일시</strong></li>\n<li><strong>플랫폼 신고 접수증·영상 보존 요청서</strong></li>\n<li><strong>본인 신상·직장·SNS 거론 부분 별도 캡처</strong></li>\n<li><strong>정신적 피해 진단서·상담 기록</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 라이브 시작 즉시 휴대폰 + PC 양쪽으로 녹화 시작. 채팅창 + 시청자 수도 함께 캡처해 \"공연성\" 입증 자료 확보. 플랫폼엔 \"고소 진행 중\"이라며 영상 보존 요청.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>증거 보존</strong> — 라이브 종료 후 삭제 시 입증 곤란.</li>\n<li><strong>공연성</strong> — 시청자 수·채팅창으로 입증.</li>\n<li><strong>정통망법 70조</strong> — 사실/허위 적시 모두 처벌.</li>\n<li><strong>플랫폼 협조</strong> — 영상 보존·신원 확인.</li>\n<li><strong>임시조치</strong> — 채널 정지·게시물 차단.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버수사 182</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 방송 보도와 사실 적시',
        summary:
          '대법원 2010도17237(2011.09.02 선고) 영역에서 법원은 방송 프로그램을 통한 표현행위에서 명예훼손죄의 \"사실의 적시\" 의미와 판단 기준을 정리하면서, 매체의 실시간 송출 특성·시청자 규모·표현 맥락을 종합 고려해 명예훼손 성립 여부를 판단해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '방송 송출은 공연성·전파성 매우 높은 영역. 실시간 증거 보존 + 시청자 규모 자료가 핵심.',
      },
    ],
    faq: [
      {
        question: '라이브가 끝나고 영상이 삭제됐어요',
        answer:
          '<strong>경찰 영장으로 플랫폼 서버 데이터 확보 가능합니다.</strong> 즉시 사이버 신고.',
      },
      {
        question: '채팅창 캡처도 증거인가요?',
        answer:
          '<strong>네, 시청자 반응·공연성 입증 자료로 유효합니다.</strong>',
      },
      {
        question: '본인 이름이 직접 안 나왔으면요?',
        answer:
          '<strong>맥락상 특정 가능하면 성립 영역입니다.</strong>',
      },
      {
        question: '플랫폼이 영상 보존 거부하면요?',
        answer:
          '<strong>경찰 영장·법원 사실조회로 강제 협조 가능합니다.</strong>',
      },
      {
        question: '위자료는 얼마 정도인가요?',
        answer:
          '<strong>사례에 따라 다르지만 라이브 + 다수 시청은 위자료 가산이 검토되는 영역입니다.</strong>',
      },
    ],
    cta: { text: '명예훼손 삭제·합의·방어 포인트, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 신고', href: '/guide/defamation/defamation-victim-complaint' },
      { label: '사이버 명예훼손', href: '/guide/defamation/defamation-cyber-procedure' },
      { label: '임시조치 신청', href: '/guide/defamation/defamation-temporary-measure' },
      { label: '증거 보존', href: '/guide/defamation/defamation-evidence-preservation' },
      { label: '손해배상 청구', href: '/guide/defamation/defamation-damage-claim' },
    ],
  },

  // ─── 4. jeonse-multi-household-officetel-residence-proof-track ───
  {
    domain: 'jeonse',
    slug: 'jeonse-multi-household-officetel-residence-proof-track',
    keyword: '다가구·오피스텔 주거용 입증',
    questionKeyword: '오피스텔에 전세로 들어왔는데 주임법 적용이 안 된다고 합니다.',
    ctaKeyword: '오피스텔 다가구 주임법 적용 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '오피스텔·다가구 주거용 입증 — 5단계 주임법 적용 다툼 | 로앤가이드',
      description:
        '오피스텔·다가구주택 전세인데 주임법 적용 여부 논란이라면 주거용 입증 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오피스텔 전세 계약 후 임대인이 \"업무용이라 주임법 적용 안 된다\"고 주장. 계약서엔 \"업무용\"으로 기재됐지만 본인은 실제로 거주 중이고 전입신고도 했어요. 임대인은 보증금 반환 의무도 일반 채권이라고 주장합니다. 본인 권리 보호 어떻게 되는지 막막한 영역입니다.\" 오피스텔·다가구 주거용 입증은 ① 주임법 \"실제 주거용\" 기준 적용 ② 등기·건축물대장과 실사용 용도 불일치 시 실사용 우선 ③ 전입신고·확정일자 ④ 다가구는 일부 호실 임대도 적용 ⑤ 보증금 반환·대항력 5가지 트랙이 핵심. 등기상 \"업무용\"이라도 실거주 입증 시 주임법 적용 가능한 영역. 대응은 ① 실거주 입증 ② 전입·확정일자 ③ 분쟁조정 ④ 임차권등기 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 오피스텔·다가구 주거 입증 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 실거주·등기·신고·조정·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 실제 주거용 사용 입증</strong> — 가구·생활용품·관리비.</li>\n<li><strong>② 등기·건축물대장 확인</strong> — 용도 vs 실사용.</li>\n<li><strong>③ 전입신고·확정일자</strong> — 대항력·우선변제권.</li>\n<li><strong>④ 주임법 적용 분쟁조정 신청</strong> — 분쟁조정위.</li>\n<li><strong>⑤ 보증금 반환 민사 청구</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 주임법은 \"실제 주거용\" 기준 적용. 등기상 \"업무용\"이라도 실거주 입증 시 적용 가능한 영역. 가구·관리비 영수증·우편물이 입증 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·신고·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 실거주 자료 수집 (즉시)</strong> — 사진·관리비·우편물.</li>\n<li><strong>2단계 — 전입신고·확정일자 확인 (즉시)</strong> — 대항력·우선변제권.</li>\n<li><strong>3단계 — 임대인에 내용증명 (1~2주)</strong> — 주임법 적용·반환 청구.</li>\n<li><strong>4단계 — 주임분조위 분쟁조정 (60일 내)</strong></li>\n<li><strong>5단계 — 임차권등기·민사 보증금 반환</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">오피스텔 주거용 입증 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·실거주·등기 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·확정일자·전입신고증</strong></li>\n<li><strong>실거주 사진 (가구·침대·주방·생활용품)</strong></li>\n<li><strong>관리비·전기·수도 영수증 (생활 입증)</strong></li>\n<li><strong>본인 우편물·택배 수령 자료</strong></li>\n<li><strong>등기부등본·건축물대장</strong></li>\n<li><strong>임대인 보증금 반환 거부 자료</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 다가구주택은 호실별 임대 가능. 본인 호실 외 다른 임차인이 있더라도 본인 호실에 대해 주임법 적용 가능한 영역. 호실별 인도·실거주 입증 분리.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>등기상 용도 vs 실사용</strong> — 실사용 우선 원칙.</li>\n<li><strong>전입신고 가능성</strong> — 업무용 등기도 전입신고 가능 영역.</li>\n<li><strong>다가구 호실 분리</strong> — 호실별 적용 가능.</li>\n<li><strong>대항력·우선변제권</strong> — 인도 + 전입신고 + 확정일자.</li>\n<li><strong>소액임차인 최우선변제</strong> — 주임법 적용 시.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>주택임대차분쟁조정위원회 1670-7777</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다가구주택 임대차 보증금',
        summary:
          '대법원 2024다283668(2025.12.04 선고) 영역에서 법원은 다가구주택 일부에 대한 임대차계약을 중개할 때 개업공인중개사가 선순위 임대차보증금 채권의 존부·금액 등을 조사·확인해 설명할 의무가 있고, 이를 위반한 경우 임차인의 보증금 회수 곤란에 대한 책임이 평가될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '다가구는 호실별 임차권 보호. 선순위 보증금·근저당 확인 + 실거주 입증이 핵심.',
      },
    ],
    faq: [
      {
        question: '업무용 등기인데 전입신고가 가능한가요?',
        answer:
          '<strong>실거주가 인정되면 전입신고 가능한 영역입니다.</strong>',
      },
      {
        question: '주임법이 적용되면 어떤 보호가 있나요?',
        answer:
          '<strong>대항력·우선변제권·소액임차인 최우선변제 등 보호받을 수 있는 영역입니다.</strong>',
      },
      {
        question: '실거주 입증은 어떻게 하나요?',
        answer:
          '<strong>가구 사진·관리비·우편물·이웃 진술 등을 종합 제출합니다.</strong>',
      },
      {
        question: '주임분조위는 어떻게 신청하나요?',
        answer:
          '<strong>1670-7777로 신청하면 60일 내 조정 진행됩니다.</strong>',
      },
      {
        question: '계약서에 \"업무용\"이라고 적혀 있어도 보호되나요?',
        answer:
          '<strong>실제 주거 사용이 입증되면 적용될 여지가 있는 영역입니다.</strong>',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/guide/jeonse' },
    internalLinks: [
      { label: '주거용 입증', href: '/guide/jeonse/jeonse-residential-use-proof' },
      { label: '대항력·우선변제권', href: '/guide/jeonse/jeonse-confirmation-date-priority' },
      { label: '주임분조위 조정', href: '/guide/jeonse/jeonse-dispute-mediation' },
      { label: '임차권등기명령', href: '/guide/jeonse/jeonse-tenant-right-registration' },
      { label: '소액임차인 최우선변제', href: '/guide/jeonse/jeonse-small-tenant-priority' },
    ],
  },

  // ─── 5. jeonse-landlord-tax-arrears-priority-loss-track ───
  {
    domain: 'jeonse',
    slug: 'jeonse-landlord-tax-arrears-priority-loss-track',
    keyword: '임대인 국세 체납 보증금 우선순위',
    questionKeyword: '임대인이 국세 체납해서 보증금 우선순위 밀린다고 합니다.',
    ctaKeyword: '임대인 국세 체납 보증금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임대인 국세 체납 보증금 — 5단계 우선순위 다툼 | 로앤가이드',
      description:
        '임대인 국세 체납으로 보증금 우선순위가 밀린다면 당해세 예외·소액 최우선변제 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세 보증금 1억 5천만원 임대인이 국세 1억원 체납 상태. 세무서에서 집을 압류했다는 통지를 받고 등기부등본을 보니 국세 체납 압류가 본인 확정일자보다 늦은 시점에 잡혀 있어요. 그런데 \"당해세 우선특권\"이라며 보증금이 후순위로 밀린다고 합니다. 본인 보증금 회수 어떻게 되는지 막막한 영역입니다.\" 임대인 국세 체납은 ① 일반 국세는 확정일자 시점 vs 국세 법정기일 비교 ② 당해세(재산세·종부세 등)는 임차권보다 우선 ③ 2023.4.1 개정 — 임차인 확정일자 후 발생 당해세는 후순위 ④ 소액임차인 최우선변제 ⑤ 정부 안전망 5가지 트랙이 결합되는 영역. 2023년 개정으로 확정일자 후 발생 당해세는 보증금에 밀리는 영역 확장. 대응은 ① 등기·법정기일 ② 채권자 신고 ③ 경매 ④ 안전망 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 임대인 국세 체납 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 법정기일·당해세·경매·안전망·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 국세 법정기일 vs 확정일자 비교</strong> — 시점 우선순위.</li>\n<li><strong>② 당해세 vs 일반 국세 구분</strong> — 당해세는 우선 영역.</li>\n<li><strong>③ 2023.4.1 개정 — 후발 당해세 후순위</strong></li>\n<li><strong>④ 소액임차인 최우선변제</strong> — 보호.</li>\n<li><strong>⑤ 전세사기피해자 정부 지원</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 일반 국세는 법정기일 vs 확정일자 비교. 당해세도 2023.4.1 이후 발생분은 임차인 확정일자 후순위. 소액임차인 최우선변제는 국세와 무관 적용.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·신고·경매 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 등기·국세 법정기일 확인 (즉시)</strong> — 등기부 + 국세 체납 자료.</li>\n<li><strong>2단계 — 임대인에 보증금 반환 청구 (내용증명)</strong></li>\n<li><strong>3단계 — 경매·배당 요구·당해세 다툼</strong></li>\n<li><strong>4단계 — 전세사기피해자 신청 (해당 시)</strong></li>\n<li><strong>5단계 — 민사 보증금 반환 (10년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">국세 체납 보증금 우선순위 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·등기·국세 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·확정일자·전입신고증</strong></li>\n<li><strong>등기부등본 (압류·국세 체납 표시)</strong></li>\n<li><strong>국세 체납 법정기일 자료 (세무서 조회)</strong></li>\n<li><strong>경매 개시 자료·배당 요구서</strong></li>\n<li><strong>본인 신분증·소득 자료 (정부 지원)</strong></li>\n<li><strong>보증보험증서 (있을 시)</strong></li>\n<li><strong>임대인 소득·재산 자료 (가능 범위)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임대인 국세 체납 정보는 임차인 동의로 세무서 조회 가능(2023년 시행). 계약 전·갱신 전 미리 확인하면 위험 회피 가능한 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>법정기일 vs 확정일자</strong> — 시점 우선순위 다툼.</li>\n<li><strong>당해세 우선특권</strong> — 2023.4.1 이후 후발 당해세는 후순위.</li>\n<li><strong>임대인 국세 조회권</strong> — 임차인 동의로 가능.</li>\n<li><strong>소액임차인 최우선변제</strong> — 국세 무관 적용.</li>\n<li><strong>전세사기피해자 인정</strong> — 정부 지원 트랙.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>주택임대차분쟁조정위원회 1670-7777</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 주임법 대항력·우선변제',
        summary:
          '대법원 2025다213466(2026.01.08 선고) 영역에서 법원은 주택임대차보호법 제3조 제1항이 정한 주민등록이 대항력의 요건을 충족시키는 공시방법이 되기 위한 요건을 정리하면서, 임차주택에 대한 인도와 주민등록이 적법하게 이루어진 시점이 우선변제권 순위 판단의 기준이 된다고 본 사례 흐름이 있습니다.',
        takeaway: '인도 + 주민등록 + 확정일자 시점이 우선변제권 기준. 국세 법정기일과 비교 다툼.',
      },
    ],
    faq: [
      {
        question: '계약 전에 임대인 국세 체납 확인 가능한가요?',
        answer:
          '<strong>2023년부터 임차인 동의로 임대인 국세 체납 자료 열람 가능합니다.</strong>',
      },
      {
        question: '당해세는 무엇인가요?',
        answer:
          '<strong>재산세·종부세·상속세 등 해당 부동산에 부과되는 세금입니다.</strong>',
      },
      {
        question: '소액임차인 최우선변제 한도는요?',
        answer:
          '<strong>지역별 다르며 서울 6,500만원 (2024년 기준)입니다.</strong>',
      },
      {
        question: '확정일자가 국세 법정기일보다 빠르면요?',
        answer:
          '<strong>일반 국세에는 보증금이 우선합니다.</strong>',
      },
      {
        question: '전세사기피해자로 인정되면 어떤 지원이 있나요?',
        answer:
          '<strong>저리 대출·세금 감면·경매 우선매수권 등 지원이 있는 영역입니다.</strong>',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '보증금 반환 절차', href: '/guide/jeonse/jeonse-deposit-return-procedure' },
      { label: '국세 체납 조회', href: '/guide/jeonse/jeonse-landlord-tax-check' },
      { label: '소액임차인 최우선변제', href: '/guide/jeonse/jeonse-small-tenant-priority' },
      { label: '경매 배당 요구', href: '/guide/jeonse/jeonse-auction-distribution' },
      { label: '전세사기 피해 지원', href: '/guide/jeonse-fraud/jeonse-fraud-victim-support' },
    ],
  },

  // ─── 6. stalking-celebrity-fan-private-info-tracking-track ───
  {
    domain: 'stalking',
    slug: 'stalking-celebrity-fan-private-info-tracking-track',
    keyword: '연예인 팬 개인정보 추적',
    questionKeyword: '연예인인데 일부 팬이 제 집·일정·가족까지 추적합니다. 스토킹 신고 가능한가요?',
    ctaKeyword: '연예인 팬 스토킹 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '연예인 팬 개인정보 추적 — 5단계 사생활 스토킹 다툼 | 로앤가이드',
      description:
        '연예인 등 공인인데 일부 팬이 집·일정·가족 추적·접근한다면 스토킹·접근금지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 활동 중인 연예인인데 일부 팬이 본인 집 주소를 알아내 카페에서 대기, 가족 SNS 추적, 일정 노출 후 공항·숙소에 매번 출현. \"공인이라 어쩔 수 없다\"는 소리도 들었지만 사생활은 보호받고 싶은 상황. 회사는 \"이미지 신경 써서 강력 대응은 자제\"하라고 합니다.\" 공인을 향한 팬 추적은 ① 공인이라도 사생활 보호 영역 존재 ② 스토킹처벌법 \"지속·반복 접근·연락\" 충족 ③ 개인정보보호법 결합(주소·연락처 무단 수집) ④ 접근금지 가처분·잠정조치 ⑤ 잠정조치 100m 접근금지·전기통신 금지 5가지 트랙이 핵심. 공인이라도 활동 외 사생활 영역은 보호 대상인 영역. 대응은 ① 증거 누적 ② 사이버·경찰 신고 ③ 접근금지 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 연예인 팬 스토킹 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·접근금지·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 추적·접근 증거 누적</strong> — 사진·CCTV·SNS·메시지.</li>\n<li><strong>② 사이버 스토킹 신고 (ecrm)</strong></li>\n<li><strong>③ 접근금지 가처분 신청</strong> — 가정법원·민사.</li>\n<li><strong>④ 스토킹처벌법 형사 고소 + 잠정조치</strong></li>\n<li><strong>⑤ 민사 손해배상 + 개인정보 침해 결합</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공인도 사생활은 보호 영역. 활동·공적 일정이 아닌 집·가족·사생활 영역 침해는 스토킹·개인정보보호법 결합 평가 가능. 잠정조치 100m 접근금지 + 전기통신 금지가 즉시 보호 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·접근금지 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 누적 (1~3개월)</strong> — 출현 일시·사진·CCTV·SNS·메시지.</li>\n<li><strong>2단계 — 사이버범죄·경찰 신고 (즉시)</strong></li>\n<li><strong>3단계 — 접근금지 가처분 신청</strong> — 가정법원·민사.</li>\n<li><strong>4단계 — 스토킹 형사 고소 + 잠정조치 (100m 접근금지)</strong></li>\n<li><strong>5단계 — 민사 손해배상 + 개인정보 침해 청구</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">연예인 팬 스토킹 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신원·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>출현·접근 일시·장소 기록</strong></li>\n<li><strong>현장 사진·CCTV·매니저 진술</strong></li>\n<li><strong>SNS 추적·메시지·DM 캡처</strong></li>\n<li><strong>본인 집 주소·일정 노출 자료</strong></li>\n<li><strong>가족 SNS 추적 자료</strong></li>\n<li><strong>본인 정신적 피해 진단서</strong></li>\n<li><strong>본인 신분증·소속사 진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \"공인이라 어쩔 수 없다\"는 인식과 달리 활동 외 사적 영역 침해는 스토킹 평가 가능한 영역. 일정 노출 경로·집 주소 유출 경로 추적도 별도 개인정보 침해 트랙.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공인 vs 사생활</strong> — 활동 외 영역은 보호.</li>\n<li><strong>지속·반복 요건</strong> — 출현·접근 누적이 입증.</li>\n<li><strong>개인정보 침해 결합</strong> — 주소·연락처 무단 수집.</li>\n<li><strong>잠정조치</strong> — 100m 접근금지·전기통신 금지.</li>\n<li><strong>매니저·소속사 협조</strong> — 증인 진술·증거 수집.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>스토킹 112</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 스토킹 객관적 불안감',
        summary:
          '대법원 2025도36(2025.10.30 선고) 영역에서 법원은 구 스토킹범죄의 처벌 등에 관한 법률 제2조 제1호 각 목의 행위가 객관적·일반적으로 보아 상대방에게 불안감 또는 공포심을 일으키기에 충분한지 여부를 판단해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '스토킹 성립은 객관적 불안감 충족 여부 기준. 공인이라도 사생활 침해는 평가 대상.',
      },
    ],
    faq: [
      {
        question: '공인은 사생활도 다 노출되는 거 아닌가요?',
        answer:
          '<strong>활동·공적 영역은 그러하지만 집·가족·사생활은 보호 영역입니다.</strong>',
      },
      {
        question: '팬을 신고하면 이미지에 나쁘지 않나요?',
        answer:
          '<strong>이미지 우려는 있지만 안전이 우선이고, 신고 사실은 비공개 가능 영역입니다.</strong>',
      },
      {
        question: '접근금지를 받아도 따라다니면요?',
        answer:
          '<strong>잠정조치 위반은 형사 처벌 즉시 가능합니다.</strong>',
      },
      {
        question: '집 주소 유출 경로 추적이 가능한가요?',
        answer:
          '<strong>경찰·개인정보보호위에서 추적 가능합니다.</strong>',
      },
      {
        question: '소속사가 신고에 소극적이면요?',
        answer:
          '<strong>본인 단독 신고 가능합니다.</strong> 매니저 동행 권장.',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 신고 절차', href: '/guide/stalking/stalking-complaint-procedure' },
      { label: '접근금지·잠정조치', href: '/guide/stalking/stalking-protection-order' },
      { label: '사이버 스토킹', href: '/guide/stalking/stalking-cyber-procedure' },
      { label: '개인정보 침해', href: '/guide/defamation/defamation-privacy-protection' },
      { label: '손해배상 청구', href: '/guide/stalking/stalking-damage-claim' },
    ],
  },

  // ─── 7. stalking-online-game-real-life-doxxing-track ───
  {
    domain: 'stalking',
    slug: 'stalking-online-game-real-life-doxxing-track',
    keyword: '온라인 게임 현실 신상 노출',
    questionKeyword: '게임 채팅에서 만난 사람이 제 실명·직장까지 알아내 메시지를 보냅니다.',
    ctaKeyword: '온라인 게임 신상 노출 스토킹 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '온라인 게임 현실 신상 노출 — 5단계 사이버 추적 다툼 | 로앤가이드',
      description:
        '온라인 게임 채팅에서 만난 사람이 현실 실명·직장·집 주소까지 알아내 추적한다면 스토킹·도싱 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"온라인 게임 채팅에서 가볍게 대화한 사람이 본인 닉네임·말투로 SNS를 추적해 실명·직장·심지어 집 주소까지 알아냈어요. 본인 인스타에 \"오늘 ○○회사 앞에서 봤다\" 댓글이 달리고, 직장 동료 SNS에도 같은 사람이 접근. 본인은 닉네임 외엔 알려준 적 없습니다.\" 온라인 → 현실 신상 노출(도싱)은 ① 스토킹처벌법 적용(반복 접근·연락) ② 개인정보보호법 위반(무단 수집·공개) ③ 정보통신망법 명예훼손 결합 ④ 플랫폼 협조 신원 추적 ⑤ 잠정조치 5가지 트랙이 결합되는 영역. 게임 닉네임만으로 SNS·직장 추적은 \"무단 개인정보 수집·공개\" 별도 평가. 대응은 ① 캡처 ② 사이버 신고 ③ 플랫폼 협조 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 온라인 게임 신상 노출 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 캡처·신고·플랫폼·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 메시지·게시글 캡처 누적</strong> — 게임·SNS·현실 노출 모두.</li>\n<li><strong>② 사이버 스토킹 신고 (ecrm)</strong></li>\n<li><strong>③ 플랫폼·게임사·SNS 신원 협조</strong></li>\n<li><strong>④ 스토킹 + 개인정보보호법 형사 고소</strong></li>\n<li><strong>⑤ 민사 손해배상 + 개인정보 침해 결합</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 게임 닉네임 → 현실 신상 추적은 무단 개인정보 수집·공개로 스토킹 + 개인정보보호법 결합 평가 가능. 직장 앞 댓글 등 \"위치 노출\"은 추가 위협 평가 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 캡처·신고·형사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 메시지·게시글·댓글 캡처 (즉시)</strong> — 게임·SNS·현실 노출.</li>\n<li><strong>2단계 — 사이버범죄 신고 (ecrm.police.go.kr)</strong></li>\n<li><strong>3단계 — 플랫폼·게임사·SNS 신원 협조</strong></li>\n<li><strong>4단계 — 형사 고소·잠정조치 신청 (전기통신 금지)</strong></li>\n<li><strong>5단계 — 민사 손해배상 + 개인정보보호위 신고</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인 신상 노출 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 메시지·신원·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>게임 내 채팅·메시지 캡처 (일시·닉네임)</strong></li>\n<li><strong>SNS DM·댓글 캡처 (계정·일시)</strong></li>\n<li><strong>본인 실명·직장·집 주소 노출 부분 별도 캡처</strong></li>\n<li><strong>플랫폼·게임사 신고 접수증</strong></li>\n<li><strong>경찰 사이버 신고 접수번호</strong></li>\n<li><strong>본인 정신적 피해 진단서·상담 기록</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 게임 닉네임 → SNS 추적 경로 입증이 핵심. \"본인은 게임에 닉네임 외 알린 적 없다\"는 점을 진술 + 플랫폼 가입 시 수집된 정보 외 누출 가능 경로 차단.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>스토킹 반복성</strong> — 게임 + SNS + 현실 결합 평가.</li>\n<li><strong>개인정보 무단 수집</strong> — 게임 닉네임 → 실명 추적.</li>\n<li><strong>위치 노출</strong> — 직장 앞 댓글 = 추가 위협 평가.</li>\n<li><strong>플랫폼 협조</strong> — 게임사·SNS 신원 협조.</li>\n<li><strong>잠정조치</strong> — 전기통신·인터넷 금지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>스토킹 112 / 사이버수사 182</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>디지털성범죄피해자지원센터 02-735-8994</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전기통신 스토킹',
        summary:
          '대법원 2024도7832(2024.09.27 선고) 영역에서 법원은 피고인이 전화를 걸어 피해자 휴대전화에 부재중 전화 문구·수신차단 기호 등이 표시되도록 한 경우, 실제 전화통화가 이루어졌는지와 상관없이 상대방에게 불안감·공포심을 일으키는 행위로 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '전기통신 반복 접근은 통화 성사 여부 불문 스토킹 평가 가능. 메시지·DM도 동일 트랙.',
      },
    ],
    faq: [
      {
        question: '게임 닉네임밖에 안 알려줬는데 어떻게 추적되나요?',
        answer:
          '<strong>닉네임·말투·게임 활동 시간대 등으로 SNS 검색·추적이 가능한 영역입니다.</strong>',
      },
      {
        question: '게임사가 신원 협조해주나요?',
        answer:
          '<strong>경찰 영장·법원 사실조회 통해 협조 가능합니다.</strong>',
      },
      {
        question: '직장 앞 댓글도 스토킹인가요?',
        answer:
          '<strong>위치 노출 + 위협 결합으로 평가 가능합니다.</strong>',
      },
      {
        question: '잠정조치는 온라인에도 적용되나요?',
        answer:
          '<strong>전기통신·인터넷 통신 금지로 적용됩니다.</strong>',
      },
      {
        question: '개인정보보호위 신고도 따로 해야 하나요?',
        answer:
          '<strong>병행 신고가 가능하며 추가 보호 트랙입니다.</strong>',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 신고 절차', href: '/guide/stalking/stalking-complaint-procedure' },
      { label: '접근금지·잠정조치', href: '/guide/stalking/stalking-protection-order' },
      { label: '사이버 스토킹', href: '/guide/stalking/stalking-cyber-procedure' },
      { label: '개인정보 침해', href: '/guide/defamation/defamation-privacy-protection' },
      { label: '손해배상 청구', href: '/guide/stalking/stalking-damage-claim' },
    ],
  },
];
