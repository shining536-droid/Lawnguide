import { SpokePage } from '../spoke-pages';

// batch58 defamation — 3개:
// 1. 카톡 단톡방 허위 가짜뉴스 유포 가해자 방어 (전파가능성·허위성 인식 다툼)
// 2. 공직선거 기간 후보자 비판 가해자 방어 (공직선거법 + 명예훼손 별도 트랙)
// 3. 사업장 별점 테러 명예훼손 피해자 (음식점·학원 등 영업방해 결합)
//
// 고유 존재 이유:
// 1. 이 페이지는 카톡 단톡방에 다른 사람에 대한 허위 사실을 전파(가짜뉴스 유포)해 정통망법 명예훼손으로 고소된 가해자가 허위성 인식·전파가능성·공익성 4단계 방어를 정리하도록 돕는 페이지다.
// 2. 이 페이지는 공직선거 기간 SNS·블로그에서 후보자를 비판한 후 공직선거법 허위사실공표 + 명예훼손으로 고소된 가해자가 의견 표명·공약 검증·토론회 발언 4단계 방어를 정리하도록 돕는 페이지다.
// 3. 이 페이지는 음식점·학원 등 사업장이 별점 테러·악의적 후기 폭격으로 명예훼손 + 업무방해 피해를 입은 사업주가 후기 삭제·작성자 추적·민·형사 4가지 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch58Defamation: SpokePage[] = [
  // ─── 1. defamation / defamation-groupchat-fake-news-spread-accused ───
  {
    domain: 'defamation',
    slug: 'defamation-groupchat-fake-news-spread-accused',
    keyword: '단톡방 가짜뉴스 유포 명예훼손',
    questionKeyword: '카톡 단톡방에 다른 사람에 대한 허위 소문을 전했더니 명예훼손으로 고소됐어요. 방어 가능한가요?',
    ctaKeyword: '단톡방 허위사실 유포 방어 점검',
    type: '방어형',
    perspective: 'accused',
    meta: {
      title: '단톡방 가짜뉴스 유포 — 4가지 방어 트랙 | 로앤가이드',
      description:
        '단톡방에서 들은 소문을 전했다가 허위사실 명예훼손으로 고소됐다면 허위성 인식 + 전파가능성 4가지 방어를 지금 확인하세요.',
    },
    intro:
      '<p>"동호회 단톡방에 누군가 \'A씨가 회삿돈을 횡령했다\'는 소문을 흘렸길래 사실인 줄 알고 \'A씨 그 사람 그렇대\'라고 옮겼는데, 알고 보니 거짓이었고 A씨가 정통망법 허위사실 명예훼손으로 고소했어요. 들은 걸 그냥 옮겼을 뿐인데 처벌받나요?" 단톡방 허위사실 유포는 ① 형법 제307조 제2항 또는 정통망법 제70조 제2항 허위사실 명예훼손 영역이지만, 형법 제307조 제1항(사실 적시)와 제2항(허위 적시)은 \'행위자의 허위성에 대한 인식\'이 핵심 분기점입니다(대법원 2016도18024). 행위자에게 허위성 인식이 없었다면 제2항이 아닌 제1항 적용 영역이고, 사실 적시 + 공공의 이익 결합되면 위법성 조각도 가능. ① 허위성 인식 ② 전파가능성·공연성 ③ 비방 목적 ④ 공익·합의 4단계로 방어 트랙이 열리는 사례가 있어요.</p>',
    sections: [
      {
        title: 'Q. 단톡방 허위사실 유포 4가지 방어 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 허위성 인식·전파가능성·비방 목적·합의 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 허위성 인식 부재 (307조 1항 vs 2항)</strong> — 본인이 허위인 줄 알고 옮긴 게 아니라 사실인 줄 알고 옮겼다면 형법 제307조 제2항(5년 이하)이 아닌 제1항(2년 이하)으로 평가될 여지(2016도18024).</li>\n<li><strong>② 전파가능성·공연성 다툼</strong> — 단톡방 인원·관계·폐쇄성에 따라 공연성 다툼 영역. 대법원 2020도8336은 전파가능성에 대한 미필적 고의 + 위험 용인 의사 모두 필요하다고 판시.</li>\n<li><strong>③ 비방 목적 부정</strong> — 정통망법 제70조 제2항은 \'비방 목적\' 별도 요건. 본인이 주의 환기·정보 공유 의도였다면 비방 목적 부정 영역.</li>\n<li><strong>④ 합의 (반의사불벌)</strong> — 정통망법 명예훼손은 반의사불벌. 합의 + 처벌불원서 시 \'공소권 없음\' 종결 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단톡방 가짜뉴스 유포라도 허위 인식 + 비방 목적 + 전파가능성 모두 입증돼야 가중 처벌 영역. 들은 걸 사실인 줄 알고 옮긴 정황이 강하면 양형 트랙이 다른 영역이 될 여지.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 변호인 선임 → 조사 → 합의·검찰 → 본안 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 단톡방 전체 캡처·본인 발언 전후 맥락·소문 출처·다른 참여자 발언.</li>\n<li><strong>2단계 — 변호인 선임 (출석 전 권장)</strong> — 허위성 인식 부재 + 합의 전략 정리.</li>\n<li><strong>3단계 — 경찰 조사 (10~14일 내)</strong> — 소문 출처·본인 인식·발언 의도 진술. 진술서·의견서 제출.</li>\n<li><strong>4단계 — 합의 시도 (가능한 빨리)</strong> — 피해자 합의 + 처벌불원서 확보 시 \'공소권 없음\' 종결.</li>\n<li><strong>5단계 — 형사 본안 (불합의 시)</strong> — 허위 인식 다툼 + 비방 목적 다툼. 제307조 제1항 변경 다툼.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">단톡방 허위사실 유포 4가지 방어 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 단톡방 자료 + 소문 출처 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>단톡방 전체 캡처</strong> — 본인 발언 + 전후 맥락 + 다른 참여자 발언.</li>\n<li><strong>소문의 최초 출처 자료</strong> — 누구에게 들었는지·정황 메모.</li>\n<li><strong>본인 인식 정황 자료</strong> — 사실인 줄 알았던 근거·맥락.</li>\n<li><strong>주의 환기·정보 공유 의도 자료</strong> — 발언 의도 메모.</li>\n<li><strong>피해자와의 사전 관계 자료</strong> — 갈등 유무·동기 부재 입증.</li>\n<li><strong>합의 시도·처벌불원서</strong> — 합의금·처벌불원 의사.</li>\n<li><strong>본인 평판·반성 자료</strong> — 양형 자료(초범·반성문).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인이 소문을 \'전달자\' 위치였다는 정황(다른 참여자도 같은 소문을 듣고 있었음)을 입증하면 허위성 인식 부재 트랙이 강화될 영역. 단톡방 출처 사용자가 따로 있다는 점이 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 검찰·피해자 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"확인 없이 옮긴 자체가 허위 인식" 주장 부분 반박</strong> — 사실인 줄 알았다면 \'미필적 허위 인식\'까지 입증돼야 제2항 영역. 검사 입증 책임.</li>\n<li><strong>"단톡방 30명이라 무조건 공연성" 주장 반박</strong> — 친밀·폐쇄 모임이면 전파가능성 + 위험 용인 의사 별도 입증 필요(2020도8336).</li>\n<li><strong>"비방 목적 추정" 주장 반박</strong> — 비방 목적은 검사 별도 입증 사항. 정보 공유·주의 환기 의도라면 부정 영역.</li>\n<li><strong>합의 우선 권장</strong> — 정통망법 명예훼손은 반의사불벌. 합의금 200~500만원 영역에서 협의 가능 사례.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 형사 무료 상담.</li>\n<li><strong>국선변호인 (대한변협 02-2087-7700)</strong> — 자격 요건 시.</li>\n<li><strong>경찰 민원 110·182</strong> — 부당 출석 민원.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 허위사실 명예훼손에서 허위성 인식의 의미',
        summary:
          '대법원 2016도18024 사건(대법원, 2017.04.26 선고)에서 법원은 형법 제307조 제1항의 \'사실\'은 \'진실한 사실\'이 아니라 \'의견\'에 대치되는 개념이라고 정의하면서, 적시된 사실이 허위라고 하더라도 행위자에게 허위성에 대한 인식이 없는 경우에는 제307조 제2항(허위사실 명예훼손)이 아니라 제307조 제1항(사실 적시 명예훼손)이 성립한다고 판시했습니다. 제2항의 법정형이 5년 이하인 반면 제1항이 2년 이하인 것은 허위성 인식이라는 주관적 가벌성 차이를 반영한 것이라는 시사점이 있습니다.',
        takeaway: '단톡방 가짜뉴스 유포라도 본인이 허위라고 인식하고 옮겼는지가 핵심 분기점이라, 소문 출처·인식 정황·전파 의도 자료를 정리하면 양형 트랙이 달라지는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '들은 걸 옮긴 것뿐인데 명예훼손인가요?',
        answer:
          '<strong>전달행위도 명예훼손 영역입니다.</strong> 다만 본인이 사실인 줄 알았다면 형법 제307조 제2항이 아닌 제1항으로 평가될 여지(2016도18024). 양형 차이 영역.',
      },
      {
        question: '소문 출처가 명확하면 더 가벼운 처벌인가요?',
        answer:
          '<strong>출처 입증 시 허위성 인식 부재 + 정보 공유 의도 변론 트랙이 강화됩니다.</strong> 출처가 누구인지·언제 들었는지 메모·캡처가 핵심 자료.',
      },
      {
        question: '단톡방이 친한 사이뿐이면 공연성 부정되나요?',
        answer:
          '<strong>친밀 관계라도 공연성 인정 가능 영역입니다.</strong> 다만 전파가능성 + 위험 용인 미필적 고의 별도 입증 필요(2020도8336). 다툼 영역.',
      },
      {
        question: '합의금 적정 수준은 얼마인가요?',
        answer:
          '<strong>정통망법 허위사실 명예훼손 합의금은 200~500만원 영역이 일반적입니다.</strong> 발언 정도·확산 범위·피해자 입장 종합. 변호사 자문으로 협의.',
      },
      {
        question: '이미 단톡방을 나갔는데 캡처가 없어요',
        answer:
          '<strong>다른 참여자에게 캡처 요청 가능합니다.</strong> 또는 경찰 사건 자료에서 캡처 확인 가능. 본인 발언 맥락 입증을 위해 핵심 자료 확보 필수.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '회사 단톡방 가해자 방어', href: '/guide/defamation/defamation-company-groupchat-criticism-accused' },
      { label: '단톡방 모욕 캡처 증거', href: '/guide/defamation/defamation-group-chat-screenshot-evidence-value' },
      { label: '동료 소문 유포 피해자', href: '/guide/defamation/defamation-coworker-spread-victim' },
      { label: '진실 적시도 처벌 가능', href: '/guide/defamation/defamation-truth-still-guilty' },
      { label: '사적 대화 누설 방어', href: '/guide/defamation/defamation-private-chat-leak-accused' },
    ],
  },

  // ─── 2. defamation / defamation-election-candidate-criticism-accused ───
  {
    domain: 'defamation',
    slug: 'defamation-election-candidate-criticism-accused',
    keyword: '공직선거 후보자 비판 명예훼손',
    questionKeyword: '선거 기간 SNS에 후보자를 비판하는 글을 썼더니 공직선거법 + 명예훼손으로 고소됐어요. 방어 가능한가요?',
    ctaKeyword: '선거 후보자 비판 방어 점검',
    type: '방어형',
    perspective: 'accused',
    meta: {
      title: '선거 후보자 비판 — 4가지 공직선거법 방어 트랙 | 로앤가이드',
      description:
        '공직선거 기간 후보자 비판으로 공직선거법 + 명예훼손으로 고소됐다면 의견 표명 + 공약 검증 4가지 방어를 지금 확인하세요.',
    },
    intro:
      '<p>"지방선거 기간에 SNS에 \'A후보자가 과거 토지 투기 의혹이 있다\'고 비판하는 글을 올렸더니 공직선거법 위반(허위사실공표) + 정통망법 명예훼손으로 고소됐어요. 의혹 제기였는데 처벌받나요?" 선거 기간 후보자 비판은 공직선거법 제250조(허위사실공표) + 형법 또는 정통망법 명예훼손이 결합되는 영역입니다. 다만 대법원 2023도16586 판결은 \'정책공약이나 이를 비판·검증하는 표현은 보다 폭넓게 보호\'되어야 하고, 의견과 사실이 혼재된 표현은 전체적으로 \'의견 표명\'으로 평가될 영역이라고 판시했어요. ① 사실 vs 의견 구별 ② 공약 검증·정책 비판 영역 ③ 토론회 발언 면책 ④ 합의·반의사불벌 4가지로 방어 트랙이 열릴 여지가 있는 영역. 다만 공직선거법은 별도 트랙이고 양형이 무거워 변호인 자문이 핵심.</p>',
    sections: [
      {
        title: 'Q. 선거 비판 발언 4가지 방어 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실 vs 의견·공약 검증·토론회·합의 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실 vs 의견 구별</strong> — 표현이 \'사실 공표\'인지 \'의견 표명\'인지 핵심 분기. 의견·추상적 판단은 허위사실공표죄 영역 아님(2023도16586). 헌법상 표현의 자유 우월적 지위 인정.</li>\n<li><strong>② 정책공약 비판 영역</strong> — 후보자 정책공약 검증·비판은 보다 폭넓게 보호. 일부 과장·오류가 있어도 전체적 취지가 의견 표명이라면 처벌 어려운 영역.</li>\n<li><strong>③ 토론회 발언 면책</strong> — 후보자 토론회에서의 질문·답변·반론은 일방적 허위사실 표명 의도가 없다면 공직선거법 제250조 제1항 처벌 어려움(2023도16586).</li>\n<li><strong>④ 명예훼손 트랙 합의</strong> — 정통망법 명예훼손은 반의사불벌. 다만 공직선거법 위반은 반의사불벌 아니라 별도 변호인 자문 필수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 선거 비판은 정책 검증·의혹 제기 영역이라면 폭넓게 보호되는 트랙. 다만 공직선거법은 양형이 무거우므로 변호인 자문 + 의견 표명 입증 자료 정리가 필수.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 변호인 선임 → 조사 → 검찰 → 본안 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 본인 SNS 글·발언 전후 맥락·근거 자료(언론 보도·공약 자료)·작성 시점.</li>\n<li><strong>2단계 — 변호인 선임 (필수)</strong> — 공직선거법은 일반 형사보다 복잡. 선거 사건 전문 변호인 자문 권장.</li>\n<li><strong>3단계 — 경찰·검찰 조사</strong> — 발언 의도·근거 자료 진술. 의견 표명 영역 입증 핵심.</li>\n<li><strong>4단계 — 검찰 처분</strong> — 의견 표명 + 공약 검증 영역으로 평가되면 무혐의·기소유예 가능.</li>\n<li><strong>5단계 — 형사 본안 (기소 시)</strong> — 의견 vs 사실 다툼 + 정책 비판 보호 영역 변론. 명예훼손은 반의사불벌이라 합의 결합.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">선거 후보자 비판 4가지 방어 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 발언 자료 + 근거 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>본인 SNS·블로그·카드뉴스</strong> — 전체 글 캡처 + 작성 시점.</li>\n<li><strong>발언 근거 자료</strong> — 언론 보도·공약 자료·공공 자료(부동산 등기·정책 자료).</li>\n<li><strong>의견 vs 사실 구별 메모</strong> — 본인 발언이 의견·평가 영역임을 입증.</li>\n<li><strong>다른 후보 또는 언론의 유사 의혹 제기 자료</strong> — 공익 토론 영역 입증.</li>\n<li><strong>토론회 녹취·녹화</strong> — 토론회 발언이라면 면책 트랙.</li>\n<li><strong>합의 시도·처벌불원서</strong> — 명예훼손 트랙 합의금·의사.</li>\n<li><strong>변호인 의견서</strong> — 공직선거법 + 명예훼손 결합 변론.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인 발언이 \'언론 보도된 의혹을 인용·논평한 것\'이라는 정황이 있다면 \'의견 표명·논평\' 영역이 강화될 자료. 1차 출처가 본인이 아닌 점이 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 후보자 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"투기 의혹은 허위사실" 주장 반박</strong> — \'의혹\'·\'~로 의심된다\'는 표현은 의견·평가 영역으로 평가될 여지(2023도16586).</li>\n<li><strong>"선거 기간이라 가중처벌" 주장 부분 반박</strong> — 선거 기간이라도 정책 검증·의혹 제기는 폭넓게 보호. 다만 양형은 가중 영역.</li>\n<li><strong>"카드뉴스도 처벌 대상" 주장 반박</strong> — 카드뉴스가 의견 표명 영역이면 처벌 어려운 영역(2023도16586).</li>\n<li><strong>변호인 자문 필수</strong> — 공직선거법은 일반 형사보다 복잡 + 양형 무거움. 선거 사건 변호인 자문 강력 권장.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 형사 무료 상담.</li>\n<li><strong>국선변호인 (대한변협 02-2087-7700)</strong> — 자격 요건 시.</li>\n<li><strong>중앙선거관리위원회 1390</strong> — 선거법 안내.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 후보자 정책공약 검증 표현의 허위사실공표죄 적용 한계',
        summary:
          '대법원 2023도16586 사건(대법원, 2024.10.31 선고)에서 법원은 후보자가 라디오·TV 토론회 발언과 카드뉴스·보도자료를 통해 상대 후보의 토지 보유 관계와 공약을 비판한 사안에서, \'사실의 공표\'와 \'의견 표명\'을 구별할 때 헌법상 표현의 자유 우월적 지위·형벌법규 해석 원칙에 비추어 어느 범주에 속한다고 단정하기 어려운 표현은 원칙적으로 의견·추상적 판단 표명으로 파악해야 한다고 판시하면서, 정책공약 비판·검증 표현은 보다 폭넓게 보호되어야 한다고 명시했습니다. 토론회 발언도 일방적 허위사실 표명 의도 없으면 처벌 어려운 영역이라는 시사점이 있습니다.',
        takeaway: '선거 후보자 비판은 의견 표명·정책 검증 영역으로 평가될 여지가 있는 트랙이라, 발언 근거·의견 vs 사실 구별·토론회 면책 자료를 정리하면 4가지 방어 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '"의혹"이라는 표현도 처벌 대상인가요?',
        answer:
          '<strong>표현의 전체적 취지가 의견·논평이라면 처벌 어려운 영역입니다(2023도16586).</strong> "~로 보인다"·"~의심된다"는 의견 표명 영역이라는 시사점.',
      },
      {
        question: '카드뉴스로 만든 것도 명예훼손인가요?',
        answer:
          '<strong>전체적 취지가 의견 표명이라면 카드뉴스도 처벌 어려운 영역입니다.</strong> 다만 단정형 표현(\'~했다\')이 강하면 사실 공표로 평가될 여지.',
      },
      {
        question: '선거 끝나면 사건이 자동으로 끝나나요?',
        answer:
          '<strong>아닙니다.</strong> 공직선거법 위반 공소시효는 6개월(선거일 기준)이지만, 명예훼손은 별도 시효(7년) 진행 영역. 선거 후에도 사건 진행 가능.',
      },
      {
        question: '공직선거법 양형이 어느 정도인가요?',
        answer:
          '<strong>허위사실공표죄(공직선거법 제250조 제2항)는 7년 이하 징역 또는 5천만원 이하 벌금 영역입니다.</strong> 명예훼손보다 무거우므로 변호인 자문 필수.',
      },
      {
        question: '명예훼손은 합의되면 종결되나요?',
        answer:
          '<strong>정통망법·형법 명예훼손은 반의사불벌이라 합의 시 \'공소권 없음\' 종결입니다.</strong> 다만 공직선거법은 반의사불벌 아니라 별도 트랙. 변호인 자문.',
      },
    ],
    cta: { text: '삭제·합의·방어 포인트, AI로 먼저 점검하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '공인·연예인 비판 한계', href: '/guide/defamation/defamation-accused-public-criticism' },
      { label: '진실 적시도 처벌 가능', href: '/guide/defamation/defamation-truth-still-guilty' },
      { label: '공익 목적 명예훼손 방어', href: '/guide/defamation/public-interest-defamation-defense' },
      { label: '정당한 비판 기소 대응', href: '/guide/defamation/legitimate-criticism-prosecution' },
      { label: '온라인 명예훼손 대응', href: '/guide/defamation/online-defamation-response' },
    ],
  },

  // ─── 3. defamation / defamation-business-star-rating-attack-victim ───
  {
    domain: 'defamation',
    slug: 'defamation-business-star-rating-attack-victim',
    keyword: '음식점 별점 테러 명예훼손',
    questionKeyword: '경쟁업체로 의심되는 사람들이 별점 1점 + 허위 후기로 테러를 했어요. 어떻게 대응하나요?',
    ctaKeyword: '별점 테러 대응 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '별점 테러 대응 — 4단계 삭제·고소 트랙 | 로앤가이드',
      description:
        '음식점·학원 등 사업장이 별점 테러·악의적 후기로 영업 피해를 입었다면 명예훼손 + 업무방해 + 삭제 4단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"우리 음식점 평점이 4.5에서 갑자기 2.8로 떨어졌어요. 확인해보니 같은 시기에 처음 가입한 계정 30개가 별점 1점 + \'음식에서 머리카락이 나왔다\'·\'식중독 걸렸다\' 같은 허위 후기를 일제히 올렸습니다. 경쟁업체가 의심돼요." 별점 테러는 ① 형법 제307조 제2항 허위사실 명예훼손(또는 정통망법 제70조 제2항) ② 형법 제314조 업무방해죄(허위·위계) ③ 플랫폼 신고·삭제 트랙 ④ 민사 손해배상(영업손실+위자료) 4가지로 결합 대응 가능한 영역입니다. 작성자 추적은 통신사실확인자료 + 플랫폼 협조로 가능하고, 사업장 매출 감소가 입증되면 위계에 의한 업무방해도 결합 가능. 동시에 다수 계정·동일 시점·정형화 패턴은 조직적 행위 정황으로 평가되는 영역이에요.</p>',
    sections: [
      {
        title: 'Q. 별점 테러 4가지 대응 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 플랫폼 삭제·형사 고소·민사·작성자 추적 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 플랫폼 삭제 신고 (즉시)</strong> — 네이버지도·카카오맵·배민·요기요 등 자체 \'허위 후기 신고\' 절차. 24~72시간 내 처리.</li>\n<li><strong>② 형사 고소 (정통망법 + 업무방해)</strong> — 정통망법 제70조 제2항(허위사실 명예훼손) + 형법 제314조(허위·위계 업무방해) 결합. 양 죄 다 5년 이하.</li>\n<li><strong>③ 민사 손해배상</strong> — 영업손실(매출 감소액) + 위자료. 같은 시기 매출 자료가 핵심 입증 자료.</li>\n<li><strong>④ 작성자 추적·경쟁업체 의혹 입증</strong> — 통신사실확인자료 신청. 같은 IP·같은 시점·신규 가입 패턴은 조직적 행위 정황 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 별점 테러는 명예훼손 + 업무방해 결합 영역. 같은 시점 다수 신규 계정은 조직적 행위 정황으로 강력한 자료. 삭제 + 고소 + 매출 자료 동시 진행이 효과적.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 삭제·고소 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 플랫폼 신고 → 형사 고소 → 작성자 추적 → 민사 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 후기 캡처(URL·계정명·작성시점)·평점 변화 캡처·매출 변화 자료.</li>\n<li><strong>2단계 — 플랫폼 신고 (1~3일)</strong> — 각 플랫폼 자체 신고 절차. 다수 계정 + 정형화 패턴 신고 사유 명시.</li>\n<li><strong>3단계 — 형사 고소 (1~2주 내)</strong> — 관할 경찰서 사이버수사대 또는 ecrm.police.go.kr. 명예훼손 + 업무방해 결합.</li>\n<li><strong>4단계 — 작성자 추적</strong> — 통신사실확인자료 신청으로 IP·계정 추적. 경쟁업체 관련 정황 결합.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 영업손실(매출 감소 × 기간) + 위자료. 회계 자료 + 평점 회복 시점 자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">별점 테러 4단계 대응 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 후기 자료 + 매출 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>후기 전체 캡처</strong> — URL·계정명·작성시점·별점·내용.</li>\n<li><strong>평점 변화 추이 캡처</strong> — 테러 전후 평점 비교.</li>\n<li><strong>다수 계정·동일 시점 패턴 자료</strong> — 가입일·작성 시간대·IP 의심 정황.</li>\n<li><strong>매출 변화 자료</strong> — POS 자료·세무 자료·예약 자료(테러 전후 비교).</li>\n<li><strong>플랫폼 신고 영수증</strong> — 신고일·사유·처리 결과.</li>\n<li><strong>경쟁업체 의혹 자료</strong> — 인근 동종 업체 정보·갈등 정황.</li>\n<li><strong>실제 후기와의 차이 자료</strong> — 진성 후기 vs 테러 후기 비교.</li>\n<li><strong>업소 운영 자료</strong> — 위생관리·식재료 자료(허위 사실 반박).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 같은 시기에 가입한 계정 + 같은 시간대 작성 + 정형화된 문구 패턴은 조직적 행위 정황의 강력한 자료. 매출 감소 자료(전년 동기 비교)는 손해 입증의 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 작성자 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"후기는 개인 의견" 주장 부분 반박</strong> — \'머리카락 나왔다\'·\'식중독\'은 의견 아닌 사실 공표 영역. 사실 입증 없으면 허위 영역.</li>\n<li><strong>"별점 1점은 평가일 뿐" 주장 부분 인정</strong> — 별점 자체는 의견 평가 영역이지만 허위 사실 결합 시 명예훼손.</li>\n<li><strong>"경쟁업체 입증 어려움" 부분 인정</strong> — 직접 입증은 어려워도 IP·작성 패턴·정황 자료로 추정 가능 영역.</li>\n<li><strong>업무방해 결합 권장</strong> — 매출 감소 입증되면 형법 제314조 업무방해 결합 가능. 형사 + 민사 양 트랙.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>방송통신심의위원회 (kocsc.or.kr) 1377</strong> — 권리침해정보 신고.</li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.police.go.kr) / 182</strong></li>\n<li><strong>한국인터넷진흥원 KISA 118</strong> — 디지털 분쟁 상담.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 인터넷 게시 허위사실의 비방 목적과 공공의 이익 판단',
        summary:
          '대법원 2020도1669 사건(대법원, 2022.07.28 선고)에서 법원은 정통망법 제70조 제1항의 \'비방할 목적\'은 드러낸 사실의 내용·성질·표현 방법·훼손되는 명예의 침해 정도 등을 종합 판단해야 하며, 객관적으로 공공의 이익에 관한 것이라면 비방할 목적은 부정될 수 있다고 판시했습니다. 다만 사적 이익 추구 + 허위 내용 결합 + 사회적 평가 저하 정도가 강하다면 비방 목적 인정 영역으로, 별점 테러처럼 경쟁 의도 + 허위 사실 결합은 비방 목적 인정의 강한 정황으로 평가되는 영역이라는 시사점이 있습니다.',
        takeaway: '별점 테러는 명예훼손 + 업무방해 결합 영역이라, 후기·평점·매출 변화 자료를 정리하면 4단계 대응 트랙이 모두 열려 형사 + 민사 양 트랙 진행 가능한 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '경쟁업체 소행이라는 걸 어떻게 입증하나요?',
        answer:
          '<strong>통신사실확인자료로 IP 추적 가능합니다.</strong> 같은 IP·같은 시점·신규 가입 패턴은 조직적 정황 자료. 직접 입증 어려워도 정황 결합으로 추정 영역.',
      },
      {
        question: '플랫폼이 후기 삭제를 안 해줘요',
        answer:
          '<strong>방통심의위 신고 + 임시조치 트랙이 강력합니다.</strong> 30일 임시조치 명령 후 플랫폼 강제 삭제. 미이행 시 추가 행정 절차.',
      },
      {
        question: '매출 감소 손해 얼마 받을 수 있나요?',
        answer:
          '<strong>매출 자료 입증 시 영업손실 + 위자료 영역입니다.</strong> 일반적으로 영업손실은 전년 동기 매출 비교 + 회복 기간 산정. 위자료는 사업장 규모·피해 정도 종합.',
      },
      {
        question: '별점만 1점이면 처벌 안 되나요?',
        answer:
          '<strong>별점 자체는 의견 평가 영역이지만 허위 사실 결합 시 명예훼손 영역입니다.</strong> "머리카락"·"식중독" 같은 사실 주장이 결합되면 처벌 영역.',
      },
      {
        question: '업무방해죄로 추가 고소 가능한가요?',
        answer:
          '<strong>매출 감소 + 허위·위계 정황 결합 시 형법 제314조 업무방해 결합 가능합니다.</strong> 5년 이하 징역. 명예훼손과 양립 가능한 영역.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '온라인 게시글 삭제 청구', href: '/guide/defamation/defamation-online-post-deletion-request-procedure' },
      { label: '익명 게시판 작성자 추적', href: '/guide/defamation/defamation-anonymous-poster-identity-trace' },
      { label: '온라인 명예훼손 삭제 가처분', href: '/guide/defamation/defamation-online-false-deletion-injunction' },
      { label: '명예훼손 손해배상 산정', href: '/guide/defamation/defamation-damages-amount-standard' },
      { label: '온라인 명예훼손 소송 절차', href: '/guide/defamation/online-defamation-lawsuit-process' },
    ],
  },
];
