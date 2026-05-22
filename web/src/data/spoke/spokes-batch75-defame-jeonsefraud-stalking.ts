import { SpokePage } from '../spoke-pages';

// batch75 defamation + jeonse-fraud + stalking — 9개 (2026-05-23) = 4+4+1
//
// 고유 존재 이유:
// defamation 4:
// 1. 학술 표절·왜곡 글로 공격받아 고소된 학자/저자 — '학술 비판 + 사실적시 + 학문 자유 항변' 트랙 (accused)
// 2. 정치 블로거 공익 항변 — '정치 비판 + 공익 + 사실적시 항변' 트랙 (accused)
// 3. 연예인 사칭·팬카페 단체 비난 — '단체 비난 + 신상유출 + 사이버불링' 트랙 (victim)
// 4. 병원 평점·악의적 후기 고소된 환자 — '의료 후기 + 소비자 항변 + 공익' 트랙 (accused)
//
// jeonse-fraud 4:
// 5. 불법건축 빌라 키머니 사기 — '위반건축물 + 키머니 + 보증 불가' 트랙 (victim)
// 6. 계약 후 이중저당 설정 — '근저당 추가 + 동의 부재 + 우선변제 위협' 트랙 (victim)
// 7. 관리비 과다부과 사기 — '관리비 부풀리기 + 내역 불투명 + 환급' 트랙 (victim)
// 8. 자격정지 중개사 사기 — '영업정지 중개사 + 중개수수료 + 손해배상' 트랙 (victim)
//
// stalking 1:
// 9. 온라인 게임 보이스챗 신상유출 — '게임 보이스챗 + 도싱 + SNS 공개' 트랙 (victim)

export const spokesBatch75DefameJeonseFraudStalking: SpokePage[] = [
  // ─── 1. defamation-academic-paper-misrepresent-track (accused) ───
  {
    domain: 'defamation',
    slug: 'defamation-academic-paper-misrepresent-track',
    keyword: '학술 표절·왜곡 글로 공격 (학자/저자 입장)',
    questionKeyword: 'SNS·블로그에 "○○ 박사 논문이 표절"이라는 글을 올렸는데 명예훼손 고소장을 받았어요. 학문 자유·사실적시 항변 가능한가요?',
    ctaKeyword: '학술 표절 글 고소 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '학술 표절 글 명예훼손 — 5단계 학문자유·사실 항변 | 로앤가이드',
      description:
        '학술 표절·왜곡 글 명예훼손 고소 시 학문 자유·사실적시·공익 항변 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 같은 분야 연구자로서 ○○ 박사의 2024년 학술지 논문이 본인 2021년 박사논문을 인용 없이 다수 문장 차용했다고 판단하고 SNS·연구자 블로그·학술 커뮤니티에 \'○○ 박사 논문 표절 의혹·문장 비교 캡처\'를 게시했습니다. 약 2주 만에 \'명예훼손·정보통신망법위반\' 고소장이 송달됐고, 상대 측은 \'표절 아닌 일반적 학술 표현\'이라며 형사 + 민사 손해배상까지 청구하는 상황이에요. 본인은 인용 표시·문장 비교 캡처·연구 윤리 자료를 보유 중이고 \'학술 비판은 학문 자유 영역\'이라는 입장입니다." 형법 제310조는 \'사실이 진실하고 오로지 공공의 이익을 위한 것\'이면 위법성이 조각된다고 규정하고, 정보통신망법 제70조 제1항도 동일한 영역입니다. 학술 표절 비판은 학문 자유 + 연구 윤리 공익 평가 가능한 트랙이지만, 표현 방식·악의 평가·증거 충실성이 다툼 핵심. 혐의를 받고 있다면 ① 사실 진실성 ② 공익성 ③ 표현 방식 ④ 변호인 의견서 ⑤ 합의·민사 5중 트랙이 가능한 영역. 대응은 ① 진실 ② 공익 ③ 표현 ④ 의견서 ⑤ 합의 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 학술 표절 글 고소 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진실·공익·표현·의견서·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실 진실성 입증</strong> — 표절 의혹 자료·문장 비교 캡처 보존.</li>\n<li><strong>② 공익성 평가</strong> — 학문 자유·연구 윤리 + 공익 평가.</li>\n<li><strong>③ 표현 방식 검토</strong> — 단정·악의·인신공격 표현 여부.</li>\n<li><strong>④ 변호인 의견서</strong> — 형법 제310조 위법성 조각 항변.</li>\n<li><strong>⑤ 합의·민사 대응</strong> — 게시물 일부 수정·정정·합의 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 학술 표절 비판은 공익 평가 가능 영역이지만, "표절 확정" 단정 표현·인신공격 결합 시 위법성 조각 어려울 소지가 있습니다. 문장 비교·인용 누락 객관 자료 + 절제된 표현이 항변 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·의견서·합의 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시물·증거 자료 보존 (즉시)</strong> — 문장 비교·인용 누락·연구 윤리 자료.</li>\n<li><strong>2단계 — 변호인 선임 + 의견서 (1~2주)</strong> — 형법 제310조 위법성 조각 항변 정리.</li>\n<li><strong>3단계 — 경찰 조사 출석 (1개월 내)</strong> — 진술 일관성·자료 제출.</li>\n<li><strong>4단계 — 게시물 일부 수정·정정 검토 (필요 시)</strong> — 단정 표현 → 의혹 표현 수정.</li>\n<li><strong>5단계 — 합의·민사 협의</strong> — 정정·사과·일부 손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">학술 표절 글 고소 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진실·공익·표현 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인 게시물 캡처·작성 일시·URL</strong></li>\n<li><strong>상대 논문 + 본인 박사논문 원문</strong></li>\n<li><strong>문장 비교·인용 누락 분석 자료</strong></li>\n<li><strong>학술지·연구 윤리 가이드라인 자료</strong></li>\n<li><strong>본인 연구자 신원·전공 자료 (공익 평가)</strong></li>\n<li><strong>변호인 의견서·항변 자료</strong></li>\n<li><strong>합의·민사 협의 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 학술 표절 비판은 "표절로 의심된다" 의혹 표현이 단정형보다 위험 낮은 영역. 인용 누락 분석·문장 일치도 객관 자료가 진실성 입증 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실 진실성</strong> — 표절 객관 자료·인용 누락 분석.</li>\n<li><strong>공익성</strong> — 학문 자유·연구 윤리 공익 평가.</li>\n<li><strong>표현 방식</strong> — 단정·악의·인신공격 회피.</li>\n<li><strong>위법성 조각</strong> — 형법 제310조 항변.</li>\n<li><strong>합의·민사</strong> — 정정·사과·일부 배상.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>한국연구재단 연구윤리센터</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망법 명예훼손 범의 단일성·계속성 평가 영역',
        summary:
          '대법원 2022도10369(대법원, 2025.10.30 선고) 영역에서 법원은 정보통신망이용촉진및정보보호등에관한법률위반(명예훼손) 사건에서 범의의 단일성·계속성 평가와 사실적시 명예훼손에서 위법성 조각 사정 영역을 다루면서, 게시물의 표현·맥락·공익성 평가가 결정 사정이라고 본 사례 흐름이 있고, 학술 표절 비판 게시물 평가에도 동일하게 적용됩니다.',
        takeaway: '학술 표절 비판은 객관 자료 + 절제된 표현 + 공익 평가 결합 시 위법성 조각 항변 가능 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '학술 비판은 항상 보호되나요?',
        answer:
          '<strong>학문 자유 영역이지만 단정·악의 표현은 위법성 조각 어려운 소지가 있습니다.</strong> 절제된 표현 + 객관 자료가 핵심.',
      },
      {
        question: '"표절 의혹" vs "표절 확정" 표현 차이가 크나요?',
        answer:
          '<strong>의혹 표현이 위법성 조각 항변에 유리한 영역입니다.</strong> 단정형은 진실성 입증 부담 증가.',
      },
      {
        question: '게시물을 지금 삭제해야 하나요?',
        answer:
          '<strong>변호인 자문 후 결정 영역입니다.</strong> 즉시 삭제는 자백처럼 평가될 소지가 있어 신중.',
      },
      {
        question: '연구 윤리 기관 신고도 병행 가능한가요?',
        answer:
          '<strong>한국연구재단 연구윤리센터 별도 신고 가능 영역입니다.</strong> 공익성 입증 보강 효과.',
      },
      {
        question: '합의는 어떤 조건이 적절한가요?',
        answer:
          '<strong>정정·사과·일부 배상 조합 영역입니다.</strong> 변호인 자문 권장.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '온라인 명예훼손 대응', href: '/guide/defamation/online-defamation-response' },
      { label: '사실적시 명예훼손 항변', href: '/guide/defamation/truth-defamation-accused-response' },
      { label: '명예훼손 고소당했을 때', href: '/guide/defamation/defamation-accused-response' },
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-complaint-prep' },
      { label: '온라인 명예훼손 소송', href: '/guide/defamation/online-defamation-lawsuit-process' },
    ],
  },

  // ─── 2. defamation-political-blogger-truth-defense-track (accused) ───
  {
    domain: 'defamation',
    slug: 'defamation-political-blogger-truth-defense-track',
    keyword: '정치 블로거 사실적시 공익 항변',
    questionKeyword: '정치인 비위 의혹 블로그 글로 명예훼손 고소를 받았어요. 사실적시·공익 항변 어떻게 준비하나요?',
    ctaKeyword: '정치 블로거 고소 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '정치 블로거 명예훼손 — 5단계 사실·공익 항변 | 로앤가이드',
      description:
        '정치인 비위 의혹 블로그 글 고소 시 사실적시·공익성·표현 5가지 항변 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 지역 정치 분석 블로거로 ○○ 지방의원의 \'예산 집행 의혹·이해충돌 정황·인사 청탁 의혹\'을 1년간 자료(예산서·SNS 캡처·언론보도 5건)를 모아 블로그 3건·X(트위터) 게시물 8건을 작성했습니다. 의원 측에서 \'허위사실 적시 명예훼손 + 정보통신망법위반\'으로 고소했고, 본인 게시물 일부에 \'뇌물 받았을 가능성·횡령 의심\' 표현이 포함돼 있어 다툼이 커진 상황이에요. 본인은 모든 의혹마다 출처·자료 링크를 명시했지만 일부 표현이 단정적이라는 우려가 있습니다." 형법 제310조는 \'사실이 진실하고 오로지 공공의 이익을 위한 것\'이면 위법성을 조각하고, 헌법재판소·대법원은 공직자 비판에 대해 표현의 자유 보호 영역을 인정하는 흐름이 있습니다. 다만 단정 표현·악의·소위 \'마녀사냥\' 평가는 항변 어려운 영역. 혐의를 받고 있다면 ① 사실 진실성 ② 공공성 ③ 표현 절제 ④ 출처 명시 ⑤ 변호인 의견서 5중 트랙이 가능한 영역. 대응은 ① 진실 ② 공공 ③ 표현 ④ 출처 ⑤ 의견서 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 정치 블로거 고소 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진실·공공·표현·출처·의견서 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실 진실성</strong> — 의혹 근거 자료·언론보도·공식 문건.</li>\n<li><strong>② 공공성 평가</strong> — 공직자 비위 + 시민 알 권리 공익 평가.</li>\n<li><strong>③ 표현 절제</strong> — 단정 표현 → 의혹·정황 표현으로 수정 검토.</li>\n<li><strong>④ 출처 명시</strong> — 모든 의혹에 출처·자료 링크 첨부.</li>\n<li><strong>⑤ 변호인 의견서</strong> — 형법 제310조 + 헌법상 표현 자유 항변.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공직자 비판은 표현의 자유 보호 영역이 넓지만, "뇌물 받았다·횡령했다" 단정 표현은 진실성 입증 부담 큰 트랙. 의혹 표현 + 출처 명시 + 절제된 어조가 항변 강도 결정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·정정·의견서 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시물·자료 보존 (즉시)</strong> — 게시물 캡처·출처 자료·언론보도.</li>\n<li><strong>2단계 — 단정 표현 정정 검토 (1주)</strong> — "받았다" → "받았을 가능성" 수정.</li>\n<li><strong>3단계 — 변호인 선임 + 의견서 (2주)</strong> — 형법 제310조 + 표현 자유 항변.</li>\n<li><strong>4단계 — 경찰 조사 출석 (1개월 내)</strong> — 진술 일관성·자료 제출.</li>\n<li><strong>5단계 — 추가 보도·반증 검토</strong> — 신규 자료·후속 보도 활용.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">정치 블로거 고소 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진실·공공·표현 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인 게시물 캡처·작성 일시·URL</strong></li>\n<li><strong>의혹 근거 자료 (예산서·SNS·문건)</strong></li>\n<li><strong>언론보도 자료 (5건)</strong></li>\n<li><strong>본인 블로거 활동 이력·전문성 자료</strong></li>\n<li><strong>표현 절제 정정 자료</strong></li>\n<li><strong>변호인 의견서</strong></li>\n<li><strong>고소장·통지 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공직자 비판은 사인 비판보다 표현 자유 보호 영역 넓지만, 단정 표현·악의·반복적 비방은 보호 약해지는 사정. 출처 첨부 + 의혹 표현 + 정정 의지가 항변 강화.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실 진실성</strong> — 출처·자료 충실성.</li>\n<li><strong>공공성</strong> — 공직자 비위·시민 알 권리.</li>\n<li><strong>표현 절제</strong> — 단정 vs 의혹 표현.</li>\n<li><strong>위법성 조각</strong> — 형법 제310조 항변.</li>\n<li><strong>표현의 자유</strong> — 헌법상 보호 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>국민권익위원회 1398 (공익신고)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망법 명예훼손 공익성 평가 영역',
        summary:
          '대법원 2022도10369(대법원, 2025.10.30 선고) 영역에서 법원은 정보통신망이용촉진및정보보호등에관한법률위반(명예훼손) 사건에서 범의 단일성·계속성과 함께 게시물의 공익성·표현 방식 평가 영역을 다루면서, 공직자 비판은 표현의 자유 보호 영역이 넓다는 흐름이 있고, 정치 블로거 의혹 게시물 평가에도 출처·표현·공익성 결합 항변이 핵심 트랙입니다.',
        takeaway: '공직자 비위 의혹 게시물은 출처 명시 + 의혹 표현 + 공익 평가 결합 시 위법성 조각 항변 가능 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '공직자 비판은 일반인 비판보다 보호 범위가 넓나요?',
        answer:
          '<strong>표현의 자유 보호 영역이 더 넓은 평가입니다.</strong> 다만 단정·악의 표현은 보호 약화.',
      },
      {
        question: '"의심된다" 표현도 명예훼손인가요?',
        answer:
          '<strong>단정형보다 위법성 약한 영역입니다.</strong> 다만 반복·악의 정황 결합 시 평가 달라질 소지.',
      },
      {
        question: '언론보도를 인용한 글도 책임이 있나요?',
        answer:
          '<strong>출처 명시 + 인용 범위 내 표현 시 책임 완화 영역입니다.</strong> 무단 추가 단정은 별개 평가.',
      },
      {
        question: '국민권익위 공익신고도 병행 가능한가요?',
        answer:
          '<strong>공익신고자 보호법상 신고 가능 영역입니다.</strong> 공익성 입증 보강 효과.',
      },
      {
        question: '합의 vs 재판 어떤 게 유리한가요?',
        answer:
          '<strong>증거 충실도에 따라 변호인 자문이 핵심 영역입니다.</strong> 일률 답변 어려운 사정.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '온라인 명예훼손 대응', href: '/guide/defamation/online-defamation-response' },
      { label: '사실적시 명예훼손 항변', href: '/guide/defamation/truth-defamation-accused-response' },
      { label: '명예훼손 고소당했을 때', href: '/guide/defamation/defamation-accused-response' },
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-complaint-prep' },
      { label: '온라인 명예훼손 소송', href: '/guide/defamation/online-defamation-lawsuit-process' },
    ],
  },

  // ─── 3. defamation-public-figure-fan-cafe-track (victim) ───
  {
    domain: 'defamation',
    slug: 'defamation-public-figure-fan-cafe-track',
    keyword: '연예인 사칭·팬카페 단체 비난',
    questionKeyword: '인플루언서 팬카페에서 본인을 단체로 비난·신상유출하고 있어요. 사이버불링·명예훼손 어떻게 대응하나요?',
    ctaKeyword: '팬카페 단체 비난 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '팬카페 단체 비난 — 5단계 사이버불링·신상유출 | 로앤가이드',
      description:
        '팬카페 단체 비난·신상유출 시 명예훼손·개인정보보호법·플랫폼 신고 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 일반인이지만 인플루언서 ○○의 SNS에 평범한 댓글 1건을 단 후 해당 인플루언서 팬카페 회원 약 500명이 본인 SNS 계정·실명·직장명·졸업학교를 추적해 \'안티팬·악플러\' 라벨로 단체 비난 글 30건 이상을 올렸습니다. 본인 카카오톡 오픈채팅에도 모르는 사람 50명이 단체로 메시지를 보내 \'사과해라·SNS 닫아라\' 압박했고, 본인 회사·가족에게도 전화·메일이 가서 사회적 평판이 저해되는 상황이에요. 일부 회원은 신상정보를 외부 사이트에 옮겨 확산되고 있습니다." 형법 제307조 명예훼손, 정보통신망법 제70조 사이버명예훼손, 개인정보보호법 + 스토킹처벌법까지 결합 가능 영역입니다. 단체 가해 행위는 \'공동 가해 책임\' 평가 가능 트랙. 피해자라면 ① 신상유출 ② 단체 명예훼손 ③ 플랫폼 ④ 형사 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 신상 ② 명예 ③ 플랫폼 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 팬카페 단체 비난 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신상·명예·플랫폼·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 신상유출 평가</strong> — 개인정보보호법 + 정보통신망법 위반.</li>\n<li><strong>② 단체 명예훼손</strong> — 공동 가해 책임 평가.</li>\n<li><strong>③ 플랫폼 임시조치</strong> — 팬카페·SNS·오픈채팅 신고.</li>\n<li><strong>④ 형사 고소</strong> — 주모자·확산자 집중 고소.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 위자료·사회적 평판 손해.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단체 가해는 주모자(글 작성자·정보 유출자) 집중 고소 트랙이 효과적. 단순 동조자보다 신상유출자·반복 비방자 우선. 플랫폼 임시조치 + 형사 + 민사 동시 진행이 회복 효과 결정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·신고·고소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시물·메시지 보존 (즉시)</strong> — 캡처·URL·작성자 ID·작성 시각.</li>\n<li><strong>2단계 — 플랫폼 임시조치 (1주)</strong> — 카페·SNS·오픈채팅 신고 + 차단.</li>\n<li><strong>3단계 — 경찰 신고 + 형사 고소 (2주)</strong> — 신상유출자·주모자 집중.</li>\n<li><strong>4단계 — 개인정보위 신고 (1개월)</strong> — 신상유출 별도 신고.</li>\n<li><strong>5단계 — 민사 손해배상 청구 (시효 3년)</strong> — 위자료·확산 손해.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">팬카페 단체 비난 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신상·명예·플랫폼 갈래입니다.</strong></p>\n<ul>\n<li><strong>비난 게시물·댓글 캡처·URL</strong></li>\n<li><strong>본인 신상유출 자료 (실명·직장·학교)</strong></li>\n<li><strong>오픈채팅 메시지·압박 자료</strong></li>\n<li><strong>회사·가족 전화·메일 자료</strong></li>\n<li><strong>플랫폼 신고 접수증</strong></li>\n<li><strong>의심 주모자·확산자 정황 자료</strong></li>\n<li><strong>경찰 사이버수사대 고소장</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 500명 단체 가해는 주모자 5~10명 집중 고소가 효과적. 단순 댓글 동조자 전원 고소는 실익 약함. 신상유출·반복 비방자 우선 처리가 회복 효과 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>신상유출</strong> — 개인정보보호법 별도 위반.</li>\n<li><strong>공동 가해</strong> — 주모자 집중 책임.</li>\n<li><strong>플랫폼 협조</strong> — 임시조치·작성자 추적.</li>\n<li><strong>형사 처벌</strong> — 사이버명예훼손 가중.</li>\n<li><strong>민사 배상</strong> — 위자료·실손해.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>개인정보보호위원회 118</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망법 명예훼손 공연성·확산성 평가 영역',
        summary:
          '대법원 2022도10369(대법원, 2025.10.30 선고) 영역에서 법원은 정보통신망이용촉진및정보보호등에관한법률위반(명예훼손) 사건에서 게시물의 공연성·확산성·범의 단일성 평가 영역을 다루면서, 다수 게시자·반복 게시 평가가 결정 사정이라고 본 사례 흐름이 있고, 팬카페 단체 비난 평가에도 공동 가해·확산 평가가 적용되는 트랙입니다.',
        takeaway: '단체 가해는 주모자 + 신상유출자 집중 고소 + 플랫폼 임시조치 결합 영역 — 변호인 상담·신속 신고 권장.',
      },
    ],
    faq: [
      {
        question: '500명 전원 고소해야 하나요?',
        answer:
          '<strong>주모자·신상유출자 5~10명 집중이 효과적 영역입니다.</strong> 단순 동조는 후순위.',
      },
      {
        question: '신상유출은 명예훼손과 별도 처벌되나요?',
        answer:
          '<strong>개인정보보호법 + 정보통신망법 별도 영역입니다.</strong> 결합 시 가중 평가.',
      },
      {
        question: '인플루언서 본인도 책임이 있나요?',
        answer:
          '<strong>직접 가담·선동 입증 시 평가 가능 영역입니다.</strong> 정황 자료 핵심.',
      },
      {
        question: '오픈채팅 단체 메시지도 처벌되나요?',
        answer:
          '<strong>스토킹처벌법 + 정보통신망법 결합 영역입니다.</strong> 반복·압박 평가.',
      },
      {
        question: '회사·가족 피해는 어떻게 보상받나요?',
        answer:
          '<strong>위자료 + 실손해 청구 영역입니다.</strong> 손해 자료 보존 핵심.',
      },
    ],
    cta: { text: '명예훼손 고소 대응 순서, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '온라인 명예훼손 대응', href: '/guide/defamation/online-defamation-response' },
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-complaint-prep' },
      { label: '온라인 명예훼손 소송', href: '/guide/defamation/online-defamation-lawsuit-process' },
      { label: '명예훼손 손해배상 기준', href: '/guide/defamation/defamation-damages-amount-standard' },
      { label: '사실적시 명예훼손 항변', href: '/guide/defamation/truth-defamation-accused-response' },
    ],
  },

  // ─── 4. defamation-medical-rating-unfair-review-track (accused) ───
  {
    domain: 'defamation',
    slug: 'defamation-medical-rating-unfair-review-track',
    keyword: '병원 평점·악의적 후기로 고소된 환자',
    questionKeyword: '진료받은 병원에 1점 후기·치료 결과 후기를 올렸는데 병원이 명예훼손으로 고소했어요. 소비자 항변 가능한가요?',
    ctaKeyword: '병원 후기 고소 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '병원 후기 명예훼손 — 5단계 소비자 항변·공익 | 로앤가이드',
      description:
        '병원 후기·평점 1점 글 고소 시 사실적시·소비자 알 권리·공익 5가지 항변 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 ○○ 의원에서 피부 시술을 받고 부작용(2개월 색소침착·재시술 필요)을 경험해 네이버 플레이스·구글 리뷰·맘카페에 1점 평점 + \'시술 부작용 + 재시술 권유 + 추가 비용 청구\' 후기 3건을 작성했습니다. 병원 측은 \'허위사실·영업방해 명예훼손\'으로 고소했고, \'본인 부작용은 환자 체질 차이\'라며 게시물 삭제 + 손해배상 200만원을 요구하는 상황이에요. 본인은 진료기록·시술 전후 사진·재시술 영수증을 보유 중이고 \'다른 환자 보호 목적 후기\'라는 입장입니다." 형법 제310조는 \'사실 + 공공의 이익\' 요건 시 위법성을 조각하고, 소비자 후기는 소비자 알 권리 + 공익 평가 가능한 영역입니다. 다만 단정 표현·악의·과장 평가 결합 시 항변 약해지는 트랙. 혐의를 받고 있다면 ① 사실 진실성 ② 소비자 공익 ③ 표현 절제 ④ 진료기록 ⑤ 변호인 의견서 5중 트랙이 가능한 영역. 대응은 ① 진실 ② 공익 ③ 표현 ④ 기록 ⑤ 의견서 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 병원 후기 고소 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진실·공익·표현·기록·의견서 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실 진실성</strong> — 진료기록·시술 전후 사진·영수증.</li>\n<li><strong>② 소비자 공익성</strong> — 다른 환자 보호 + 알 권리 평가.</li>\n<li><strong>③ 표현 절제</strong> — 단정·과장 표현 → 사실 기술 수정.</li>\n<li><strong>④ 의료기록 확보</strong> — 본인 진료기록 사본 청구.</li>\n<li><strong>⑤ 변호인 의견서</strong> — 형법 제310조 + 소비자 후기 보호 항변.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 의료 후기는 소비자 알 권리 공익 평가 영역이지만, "사기 시술·돈만 밝힘" 등 단정·악의 표현은 위법성 조각 약화 사정. 객관 사실 + 본인 체험 + 절제 표현이 항변 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 기록·정정·의견서 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시물·진료기록 보존 (즉시)</strong> — 후기·시술 사진·영수증·진료기록.</li>\n<li><strong>2단계 — 단정 표현 정정 검토 (1주)</strong> — "사기" 표현 → "부작용 경험" 수정.</li>\n<li><strong>3단계 — 변호인 선임 + 의견서 (2주)</strong> — 형법 제310조 + 소비자 항변.</li>\n<li><strong>4단계 — 경찰 조사 출석 (1개월 내)</strong> — 진료기록·체험 진술.</li>\n<li><strong>5단계 — 합의·민사 협의</strong> — 일부 정정·사과·민사 협의 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">병원 후기 고소 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진실·공익·기록 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인 후기 캡처·작성 일시·URL</strong></li>\n<li><strong>병원 진료기록 사본 (의료법 제21조 청구권)</strong></li>\n<li><strong>시술 전후 사진·부작용 자료</strong></li>\n<li><strong>재시술 영수증·추가 비용 자료</strong></li>\n<li><strong>다른 환자 유사 후기·평점 자료</strong></li>\n<li><strong>변호인 의견서·항변 자료</strong></li>\n<li><strong>고소장·통지 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 의료법 제21조에 따라 본인 진료기록 사본 청구권 보장. 진료기록 + 시술 전후 사진 + 영수증이 사실 진실성 입증 핵심. 한국소비자원·의료분쟁조정중재원 병행 검토.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실 진실성</strong> — 진료기록·사진·영수증.</li>\n<li><strong>소비자 공익</strong> — 다른 환자 보호 + 알 권리.</li>\n<li><strong>표현 절제</strong> — 단정 vs 체험 기술.</li>\n<li><strong>위법성 조각</strong> — 형법 제310조 항변.</li>\n<li><strong>의료분쟁</strong> — 별도 조정중재 트랙.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>한국의료분쟁조정중재원 1670-2545</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망법 명예훼손 사실적시 위법성 조각 영역',
        summary:
          '대법원 2022도10369(대법원, 2025.10.30 선고) 영역에서 법원은 정보통신망이용촉진및정보보호등에관한법률위반(명예훼손) 사건에서 사실적시 명예훼손에서 게시물의 공익성·표현·진실성 평가 영역을 다루면서, 소비자·시민 알 권리 공익 평가가 위법성 조각 사정이라고 본 사례 흐름이 있고, 의료 후기 평가에도 소비자 항변 결합 트랙이 적용됩니다.',
        takeaway: '의료 후기는 진료기록 + 객관 사실 + 소비자 공익 결합 시 위법성 조각 항변 가능 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '사실대로 쓴 후기도 명예훼손인가요?',
        answer:
          '<strong>사실적시 명예훼손 성립 가능 영역이지만 공익 항변 가능 사정입니다.</strong> 표현 절제·진료기록 핵심.',
      },
      {
        question: '진료기록은 어떻게 받나요?',
        answer:
          '<strong>의료법 제21조 사본 청구권 영역입니다.</strong> 병원이 거부 시 의료분쟁조정중재원.',
      },
      {
        question: '후기를 지금 삭제해야 하나요?',
        answer:
          '<strong>변호인 자문 후 결정 영역입니다.</strong> 즉시 삭제는 자백처럼 평가될 소지 신중.',
      },
      {
        question: '의료분쟁조정중재원도 병행 가능한가요?',
        answer:
          '<strong>의료사고·부작용 별도 조정 트랙 영역입니다.</strong> 형사와 별개 진행.',
      },
      {
        question: '병원의 200만원 배상 요구는 적정한가요?',
        answer:
          '<strong>표현·확산·실손해 평가에 따라 다른 영역입니다.</strong> 변호인 자문 권장.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '온라인 명예훼손 대응', href: '/guide/defamation/online-defamation-response' },
      { label: '사실적시 명예훼손 항변', href: '/guide/defamation/truth-defamation-accused-response' },
      { label: '명예훼손 고소당했을 때', href: '/guide/defamation/defamation-accused-response' },
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-complaint-prep' },
      { label: '온라인 명예훼손 소송', href: '/guide/defamation/online-defamation-lawsuit-process' },
    ],
  },

  // ─── 5. jeonse-fraud-key-money-illegal-villa-track (victim) ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-key-money-illegal-villa-track',
    keyword: '불법건축 빌라 키머니',
    questionKeyword: '시세보다 싼 키머니 5천만원·월세 30만원 신축 빌라가 알고보니 무허가 위반건축물이었어요. 보증금 회수 가능한가요?',
    ctaKeyword: '불법건축 빌라 키머니 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '불법건축 빌라 키머니 — 5단계 위반건축물·회수 다툼 | 로앤가이드',
      description:
        '불법건축 빌라 키머니 5천만원·보증 불가 시 사기·민사·HUG 보증 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 강서구 신축 빌라에 키머니(준전세 보증금) 5천만원 + 월세 30만원 조건으로 입주했습니다. 시세 대비 30% 저렴해 의심했지만 \'신축 분양 직전 단기 임대\'라는 임대인 설명을 믿었어요. 그런데 입주 6개월 후 구청 단속에서 \'무허가 4층 증축·근린생활시설 용도변경 미신청\' 위반건축물로 확인됐고, HUG 전세보증 가입도 거부됐습니다. 임대인은 \'정상화 진행 중\'이라며 보증금 환급을 미루고 있고, 본인은 강제집행도 어려운 \'위반건축물\' 함정에 빠진 상황이에요." 주택임대차보호법 + 건축법 + 형법 제347조(사기) 결합 영역이고, 위반건축물은 임차권등기·강제집행 + 경매 단계에서 불이익 사정. 피해자라면 ① 위반건축물 확인 ② 사기 평가 ③ 형사 고소 ④ 민사 청구 ⑤ 전세사기피해자 결정 5중 트랙이 가능한 영역. 대응은 ① 확인 ② 사기 ③ 형사 ④ 민사 ⑤ 결정 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 불법건축 빌라 키머니 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·사기·형사·민사·결정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 위반건축물 확인</strong> — 구청 건축물대장·위반 내역 확인.</li>\n<li><strong>② 사기 평가</strong> — 임대인의 위반 사실 고지의무 위반 + 시세 미달.</li>\n<li><strong>③ 형사 고소</strong> — 형법 제347조 사기 + 주택임대차보호법.</li>\n<li><strong>④ 민사 청구</strong> — 임대차 해지 + 보증금 반환 + 손해배상.</li>\n<li><strong>⑤ 전세사기피해자 결정 신청</strong> — 전세사기피해지원센터.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 위반건축물은 HUG 보증 거부 + 경매 시 매각가 하락 영역. 임대인의 위반 사실 미고지 + 시세 미달 결합 시 \'기망에 의한 임대차 계약\' 평가 가능 트랙. 전세사기피해자 결정 시 정부 지원 회수 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·고소·신청 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 위반건축물 자료 확보 (즉시)</strong> — 구청 건축물대장·단속 통지·시정명령.</li>\n<li><strong>2단계 — 내용증명 발송 (1주)</strong> — 임대차 해지 + 보증금 반환 청구.</li>\n<li><strong>3단계 — 임차권등기명령 (2주)</strong> — 법원 등기 + 대항력 유지.</li>\n<li><strong>4단계 — 형사 고소 + 민사 청구 (1개월 내)</strong> — 사기 + 손해배상 동시 진행.</li>\n<li><strong>5단계 — 전세사기피해자 결정 신청</strong> — 피해자 인정 + 정부 지원.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">불법건축 빌라 키머니 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·사기·신청 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·송금 영수증</strong></li>\n<li><strong>구청 건축물대장·위반 내역</strong></li>\n<li><strong>단속 통지·시정명령서</strong></li>\n<li><strong>HUG 보증 거부 통지</strong></li>\n<li><strong>시세 자료 (인근 매물 비교)</strong></li>\n<li><strong>임대인 사기 정황 자료 (위반 미고지 메시지)</strong></li>\n<li><strong>전세사기피해지원센터 신청 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 건축물대장은 정부24·구청 무료 발급. 위반 내역·시정명령 누락 시 사기 평가 강한 사정. 전세사기피해자 결정 시 우선매수권·세금 감면·금융 지원 결합.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>위반건축물 사실</strong> — 건축물대장·시정명령.</li>\n<li><strong>임대인 고지의무</strong> — 위반 사실 미고지 = 사기 평가.</li>\n<li><strong>보증 거부</strong> — HUG·SGI 가입 불가.</li>\n<li><strong>강제집행</strong> — 경매 시 매각가 하락.</li>\n<li><strong>피해자 결정</strong> — 정부 지원 결합.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>전세사기피해지원센터 1533-8119</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다가구주택 중개의무 위반 평가 영역',
        summary:
          '대법원 2024다283668(대법원, 2025.12.04 선고) 영역에서 법원은 다가구주택 임대차 사건에서 임대의뢰인·공인중개사의 확인·설명의무 평가 영역을 다루면서, 위반건축물·시세 미달 + 임대인 고지의무 위반 평가가 결정 사정이라고 본 사례 흐름이 있고, 불법건축 빌라 키머니 평가에도 동일한 항변 트랙이 적용됩니다.',
        takeaway: '위반건축물 + 임대인 미고지 + 시세 미달 결합 시 사기 + 손해배상 평가 가능 영역 — 변호인 상담·신속 신고 권장.',
      },
    ],
    faq: [
      {
        question: '위반건축물인 줄 어떻게 미리 아나요?',
        answer:
          '<strong>정부24·구청 건축물대장 무료 조회 영역입니다.</strong> 계약 전 필수 확인 사항.',
      },
      {
        question: '키머니 5천만원도 보증금으로 보호되나요?',
        answer:
          '<strong>주택임대차보호법 적용 영역입니다.</strong> 전입·확정·인도 결합 시.',
      },
      {
        question: '임대인이 정상화 중이라며 미루면 어떻게 하나요?',
        answer:
          '<strong>내용증명 + 임차권등기 + 형사 고소 병행 영역입니다.</strong> 지연 시 회수 어려움.',
      },
      {
        question: '전세사기피해자 결정 받으면 뭐가 달라지나요?',
        answer:
          '<strong>우선매수권·세금 감면·금융 지원 결합 영역입니다.</strong> 정부 종합 지원.',
      },
      {
        question: '강제집행으로 회수 가능한가요?',
        answer:
          '<strong>위반건축물은 경매 매각가 하락 사정 영역입니다.</strong> 변호인 자문 권장.',
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

  // ─── 6. jeonse-fraud-double-mortgage-after-contract-track (victim) ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-double-mortgage-after-contract-track',
    keyword: '계약 후 이중저당 설정',
    questionKeyword: '전세계약·전입신고 후 임대인이 동의 없이 근저당을 추가 설정했어요. 우선변제권이 위협받나요?',
    ctaKeyword: '계약 후 이중저당 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '계약 후 이중저당 — 5단계 우선변제 위협·대응 | 로앤가이드',
      description:
        '전세 후 임대인 근저당 추가 시 대항력·우선변제권 + 사기 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 2024년 12월 광진구 빌라에 전세 2억원으로 계약하고 즉시 전입신고·확정일자를 완료했습니다. 등기부등본상 선순위 근저당은 없었어요. 그런데 입주 4개월 후 본인 모르게 임대인이 추가 근저당 3억원을 설정한 사실을 등기부 열람에서 확인했습니다. 임대인은 \'운영자금 융통\'이라며 대수롭지 않게 말하지만, 본인은 \'추가 근저당이 우선변제 순위에 어떻게 영향 미치는지\' 불안한 상황이에요. 매월 임대료(보증금 외 별도) 인상도 압박하고 있습니다." 주택임대차보호법은 대항력·우선변제권을 보장하고, 본인이 \'전입신고+확정일자+점유\'를 임대인의 추가 근저당 설정보다 먼저 확보했다면 우선변제 순위가 보호되는 영역입니다. 다만 임대인의 의도적 자산 빼돌리기·과다 차입은 사기 평가 가능 트랙. 피해자라면 ① 우선변제 순위 ② 임대인 의도 ③ 사기 평가 ④ 임차권등기 ⑤ 회수 5중 트랙이 가능한 영역. 대응은 ① 순위 ② 의도 ③ 사기 ④ 등기 ⑤ 회수 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 계약 후 이중저당 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 순위·의도·사기·등기·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 우선변제 순위 확인</strong> — 전입+확정+점유 vs 근저당 설정일.</li>\n<li><strong>② 임대인 의도 평가</strong> — 자산 빼돌리기 정황 + 회수 회피.</li>\n<li><strong>③ 사기 평가</strong> — 보증금 반환 능력 부재 + 추가 차입.</li>\n<li><strong>④ 임차권등기 신청</strong> — 등기로 대항력·우선변제 유지.</li>\n<li><strong>⑤ 회수 전략</strong> — 보증금 반환 청구 + 경매 시 배당 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 본인이 \'전입+확정+점유\'를 추가 근저당 설정일 이전에 완료했다면 우선변제 순위 보호 영역. 다만 임대인의 의도적 자산 빼돌리기·과다 차입은 사기 평가 가능. HUG 보증 가입 여부 우선 확인.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·등기·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 등기부 등본 + 임대차계약서 보존 (즉시)</strong> — 설정일·전입일·확정일자 비교.</li>\n<li><strong>2단계 — 내용증명 발송 (1주)</strong> — 임대인에 보증금 반환 보장 요구.</li>\n<li><strong>3단계 — 임차권등기명령 (2주)</strong> — 법원 등기 + 대항력 유지.</li>\n<li><strong>4단계 — HUG 보증·민사 검토 (1개월)</strong> — 보증 가입 시 청구 + 사기 평가.</li>\n<li><strong>5단계 — 임대차 종료 + 보증금 반환 청구</strong> — 계약 만료 시 회수 절차.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">계약 후 이중저당 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 순위·의도·등기 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·송금 영수증</strong></li>\n<li><strong>전입신고·주민등록등본·확정일자</strong></li>\n<li><strong>등기부등본 (설정일 비교)</strong></li>\n<li><strong>임대인 추가 차입·메시지 자료</strong></li>\n<li><strong>HUG·SGI 보증서 (가입 시)</strong></li>\n<li><strong>임차권등기명령 신청서</strong></li>\n<li><strong>변호인 의견서·항변 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인 전입+확정 후 임대인 추가 근저당이라도 우선변제 순위는 본인이 앞서는 영역. 다만 보증금 회수 시 경매 매각가가 충분해야 실제 회수 가능. 채권보전 + HUG 보증 검토 결합.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>우선변제 순위</strong> — 전입+확정+점유 vs 근저당.</li>\n<li><strong>임대인 자산 빼돌리기</strong> — 사기 평가 가능.</li>\n<li><strong>임차권등기</strong> — 대항력·우선변제 유지.</li>\n<li><strong>HUG 보증</strong> — 가입 시 안전 회수.</li>\n<li><strong>경매 배당</strong> — 매각가 + 선순위 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>전세사기피해지원센터 1533-8119</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 주민등록 대항력 평가 영역',
        summary:
          '대법원 2025다213466(대법원, 2026.01.08 선고) 영역에서 법원은 부당이득금 사건에서 임차인의 주민등록이 임대차의 대항력 요건이 되는 평가 영역과 임대주택의 객관적 동일성 평가가 결정 사정이라고 본 사례 흐름이 있고, 계약 후 이중저당 평가에도 대항력 + 우선변제권 순위 평가 결합 트랙이 적용됩니다.',
        takeaway: '전입+확정+점유가 추가 근저당 설정일 이전이면 우선변제 순위 보호 영역 — 변호인 상담·임차권등기 권장.',
      },
    ],
    faq: [
      {
        question: '임대인이 동의 없이 근저당 설정해도 되나요?',
        answer:
          '<strong>소유자 권리이지만 임차인 우선변제 순위 침해는 불가능 영역입니다.</strong> 순위 보호.',
      },
      {
        question: '본인이 우선변제권자임을 어떻게 입증하나요?',
        answer:
          '<strong>전입신고·확정일자 + 등기부등본 설정일 비교 영역입니다.</strong> 시기 우선 확인.',
      },
      {
        question: '추가 근저당이 보증금보다 크면 어떻게 되나요?',
        answer:
          '<strong>경매 시 본인 순위는 보호되지만 매각가 부족 시 실제 회수 어려운 영역입니다.</strong> HUG 보증 핵심.',
      },
      {
        question: '임차권등기는 지금 신청해도 되나요?',
        answer:
          '<strong>계약 종료 전이라도 정당한 사유 입증 시 검토 가능 영역입니다.</strong> 변호인 자문.',
      },
      {
        question: '임대인 사기 고소도 가능한가요?',
        answer:
          '<strong>의도적 자산 빼돌리기·반환 능력 부재 입증 시 평가 영역입니다.</strong> 정황 자료 결정.',
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

  // ─── 7. jeonse-fraud-management-fee-inflate-track (victim) ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-management-fee-inflate-track',
    keyword: '관리비 과다부과 사기',
    questionKeyword: '신축 오피스텔 관리비가 인근 시세 2배·내역 불투명, 임대인이 부풀리고 있는 정황이에요. 환급·고소 가능한가요?',
    ctaKeyword: '관리비 과다부과 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '관리비 과다부과 사기 — 5단계 환급·내역 다툼 | 로앤가이드',
      description:
        '관리비 부풀리기·내역 불투명 시 집합건물법·환급 청구·사기 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 마포구 신축 오피스텔에 전세 1억 5천만원으로 입주했는데 매월 관리비가 35만원(전기·수도·청소·관리실 운영비 명목)이 부과되고 있습니다. 인근 동일 평수 오피스텔 관리비는 평균 15~18만원 수준이고, 본인 건물은 \'외부 위탁\'이라며 내역서를 요구해도 \'영업비밀\'이라며 거부당하고 있어요. 입주 1년간 누적 차액이 약 200만원에 이르고, 다른 호실 임차인들과 단톡방을 만들어 정보 공유한 결과 관리비 부풀리기·관리회사·임대인 공모 정황도 발견됐습니다." 집합건물의 소유 및 관리에 관한 법률 + 공동주택관리법 + 형법 제347조 사기·횡령 결합 평가 영역입니다. 관리비는 \'실제 발생 비용 + 합리적 관리비용\' 범위 내에서 부과되어야 하고, 부풀리기·내역 미공개는 환급 청구·사기 평가 가능 트랙. 피해자라면 ① 내역 청구 ② 시세 비교 ③ 환급 청구 ④ 사기 고소 ⑤ 단체 대응 5중 트랙이 가능한 영역. 대응은 ① 내역 ② 비교 ③ 환급 ④ 사기 ⑤ 단체 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 관리비 과다부과 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 내역·비교·환급·사기·단체 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 관리비 내역 청구</strong> — 집합건물법상 회계장부 열람권.</li>\n<li><strong>② 시세 비교 자료 확보</strong> — 인근 동일 평수·동일 시설 비교.</li>\n<li><strong>③ 환급 청구</strong> — 과다 부과분 부당이득 반환 청구.</li>\n<li><strong>④ 사기·횡령 고소</strong> — 형법 제347조 + 횡령 평가.</li>\n<li><strong>⑤ 단체 대응</strong> — 다른 임차인 + 한국소비자원 집단 신고.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 관리비는 \'실제 발생 비용 + 합리적 관리비용\' 영역. 내역서 공개 거부·부풀리기는 집합건물법 위반 + 사기 평가 가능 트랙. 단체 대응이 환급률 + 형사 평가 강화 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 청구·환급·고소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 관리비 영수증·내역 보존 (즉시)</strong> — 매월 영수증·계좌이체 내역.</li>\n<li><strong>2단계 — 내역 청구 + 시세 비교 (1~2주)</strong> — 집합건물법 회계장부 열람 청구.</li>\n<li><strong>3단계 — 환급 내용증명 (1개월)</strong> — 과다 부과분 환급 요구.</li>\n<li><strong>4단계 — 사기·횡령 고소 (2개월)</strong> — 경찰 사이버수사·지능범죄수사.</li>\n<li><strong>5단계 — 단체 민사 청구 + 한국소비자원 신고</strong> — 집단 환급 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">관리비 과다부과 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 내역·비교·단체 갈래입니다.</strong></p>\n<ul>\n<li><strong>관리비 영수증·매월 내역</strong></li>\n<li><strong>관리비 계좌이체 자료</strong></li>\n<li><strong>인근 시세 비교 자료 (3건 이상)</strong></li>\n<li><strong>내역 청구·거부 메시지 자료</strong></li>\n<li><strong>다른 임차인 단톡·진술서</strong></li>\n<li><strong>임대인·관리회사 공모 정황 자료</strong></li>\n<li><strong>한국소비자원 신고 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 집합건물법 제26조는 임차인·구분소유자의 회계장부 열람권 보장. 거부 시 법원 가처분 청구 가능. 다른 임차인 단체 대응이 환급률·형사 평가 결정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>내역 공개</strong> — 집합건물법 열람권.</li>\n<li><strong>시세 비교</strong> — 합리성 평가.</li>\n<li><strong>환급 청구</strong> — 부당이득 반환.</li>\n<li><strong>사기·횡령</strong> — 부풀리기 + 공모 평가.</li>\n<li><strong>단체 대응</strong> — 환급률·형사 강화.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>국토교통부 1599-0001 (집합건물 분쟁)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다세대주택 공제금 청구 평가 영역',
        summary:
          '대법원 2024다305087(대법원, 2025.12.04 선고) 영역에서 법원은 공제금등청구의소 사건에서 다세대주택 임대인·중개사의 확인·설명의무 평가 영역을 다루면서, 임차인의 권리 보호와 부당이득 반환 평가가 결정 사정이라고 본 사례 흐름이 있고, 관리비 과다부과 평가에도 부당이득 반환 + 단체 대응 결합 트랙이 적용됩니다.',
        takeaway: '관리비 부풀리기 + 내역 미공개 + 공모 정황 결합 시 환급 + 사기 평가 가능 영역 — 변호인 상담·단체 대응 권장.',
      },
    ],
    faq: [
      {
        question: '관리비 내역서를 임차인이 볼 수 있나요?',
        answer:
          '<strong>집합건물법 제26조 회계장부 열람권 영역입니다.</strong> 거부 시 가처분 청구.',
      },
      {
        question: '시세 2배가 부당하다는 기준이 있나요?',
        answer:
          '<strong>실제 발생 비용 + 합리적 관리비용 평가 영역입니다.</strong> 시세 비교 자료 핵심.',
      },
      {
        question: '환급은 얼마까지 청구 가능한가요?',
        answer:
          '<strong>입주 시점부터 과다분 전액 부당이득 반환 영역입니다.</strong> 시효 10년 적용.',
      },
      {
        question: '관리회사와 임대인 모두 책임이 있나요?',
        answer:
          '<strong>공모 정황 시 공동 책임 평가 영역입니다.</strong> 정황 자료 결정.',
      },
      {
        question: '단체 신고는 어디에 하나요?',
        answer:
          '<strong>한국소비자원·국토교통부 영역입니다.</strong> 집단 대응 효과.',
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

  // ─── 8. jeonse-fraud-broker-licence-suspended-track (victim) ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-broker-licence-suspended-track',
    keyword: '자격정지 중개사 사기',
    questionKeyword: '중개수수료를 낸 공인중개사가 알고보니 영업정지·자격취소 상태였어요. 계약·중개수수료 환급 가능한가요?',
    ctaKeyword: '자격정지 중개사 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '자격정지 중개사 — 5단계 중개무효·수수료 환급 | 로앤가이드',
      description:
        '영업정지·자격취소 중개사 사기 시 공인중개사법·수수료 환급·손해배상 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 강북구 빌라 전세 1억 8천만원 계약을 \'○○ 공인중개사\'를 통해 체결하고 법정 수수료 90만원을 지급했습니다. 계약 후 입주 2개월 만에 임대인 보증금 미반환 사기 의혹이 발생해 협회에 중개사 정보를 조회한 결과, 본인이 거래한 중개사가 \'2024년 8월부터 영업정지 6개월·2025년 1월부터 자격취소\' 상태였음을 확인했어요. 즉, 계약 시점에 이미 정상 중개 자격이 없는 중개사가 \'정상 영업 중인 척\' 거래를 중개했고, 본인은 보증금 사기 + 중개 무효 + 수수료 환급 + 손해배상까지 결합된 다중 피해 상황입니다." 공인중개사법 + 공제조합 + 형법 제347조 사기 결합 영역이고, 자격정지·취소 중개사의 중개행위는 무자격 중개로 법적 효력 다툼 가능 트랙. 피해자라면 ① 자격 확인 ② 중개 효력 ③ 수수료 환급 ④ 공제조합 ⑤ 사기 고소 5중 트랙이 가능한 영역. 대응은 ① 자격 ② 효력 ③ 환급 ④ 공제 ⑤ 사기 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 자격정지 중개사 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자격·효력·환급·공제·사기 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 자격 정지·취소 사실 확인</strong> — 공인중개사협회·시군구청 조회.</li>\n<li><strong>② 중개 무효·취소 평가</strong> — 무자격 중개행위 법적 효력.</li>\n<li><strong>③ 수수료 환급 청구</strong> — 부당이득 반환 + 법정 수수료 초과.</li>\n<li><strong>④ 공제조합 청구</strong> — 한국공인중개사협회 손해배상.</li>\n<li><strong>⑤ 사기 고소</strong> — 형법 제347조 + 공인중개사법 위반.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자격정지·취소 중개사가 \'정상 영업 중인 척\' 중개 시 사기 평가 가능 트랙. 공인중개사협회 공제조합은 1억원 한도 손해배상 청구 가능 영역. 중개수수료 + 손해배상 + 공제 결합 회수 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 조회·청구·고소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 중개사 자격 조회 + 계약 자료 보존 (즉시)</strong> — 협회·시군구청 정지·취소 통지.</li>\n<li><strong>2단계 — 수수료 환급 내용증명 (1주)</strong> — 부당이득 반환 청구.</li>\n<li><strong>3단계 — 공제조합 손해배상 신청 (1개월)</strong> — 한국공인중개사협회.</li>\n<li><strong>4단계 — 사기 고소 (2개월)</strong> — 형법 제347조 + 공인중개사법.</li>\n<li><strong>5단계 — 민사 손해배상 + 중개 무효 확인 소송</strong> — 임대인·중개사 공동 책임.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">자격정지 중개사 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 자격·환급·공제 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·중개대상물 확인설명서</strong></li>\n<li><strong>중개수수료 영수증·송금 자료</strong></li>\n<li><strong>중개사 명함·간판·사무실 사진</strong></li>\n<li><strong>공인중개사협회·시군구청 자격 정지·취소 조회 결과</strong></li>\n<li><strong>중개사·임대인 메시지·통화 자료</strong></li>\n<li><strong>공제조합 손해배상 신청서</strong></li>\n<li><strong>경찰 고소장·민사 청구서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공인중개사협회 공제조합은 사고 1건당 1억원 한도 손해배상 청구 영역. 보증보험과 별개로 활용 가능. 시군구청에 중개사 자격 사전 조회 가능 시스템 활용 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>자격 정지·취소</strong> — 협회·시군구청 조회.</li>\n<li><strong>중개 효력</strong> — 무자격 중개 무효 평가.</li>\n<li><strong>수수료 환급</strong> — 부당이득 반환.</li>\n<li><strong>공제조합</strong> — 1억원 한도 손해배상.</li>\n<li><strong>사기 평가</strong> — 정상 영업인 척 기망.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국공인중개사협회 02-3406-3500</strong></li>\n<li><strong>전세사기피해지원센터 1533-8119</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공인중개사 확인·설명의무 위반 평가 영역',
        summary:
          '대법원 2024다283668(대법원, 2025.12.04 선고) 영역에서 법원은 다가구주택 임대차 사건에서 임대의뢰인·공인중개사의 중개대상물에 대한 확인·설명의무 평가 영역을 다루면서, 중개사의 직무상 주의의무 위반과 손해배상 책임 평가가 결정 사정이라고 본 사례 흐름이 있고, 자격정지·취소 중개사의 \'정상 영업인 척\' 중개 평가에도 책임 강화 트랙이 적용됩니다.',
        takeaway: '자격정지·취소 중개사 중개 + 정상 영업 기망 결합 시 사기 + 공제조합 손해배상 결합 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '중개사 자격은 어떻게 미리 확인하나요?',
        answer:
          '<strong>한국공인중개사협회 02-3406-3500·시군구청 영역입니다.</strong> 무료 조회 가능.',
      },
      {
        question: '중개수수료는 전액 돌려받나요?',
        answer:
          '<strong>무자격 중개 시 부당이득 반환 청구 가능 영역입니다.</strong> 법정 한도 초과는 추가 환급.',
      },
      {
        question: '공제조합 손해배상은 얼마까지 받나요?',
        answer:
          '<strong>사고 1건당 1억원 한도 영역입니다.</strong> 임차인 보호 결합 트랙.',
      },
      {
        question: '계약 자체도 무효가 되나요?',
        answer:
          '<strong>임대인과의 계약은 별개 평가 영역입니다.</strong> 임대인 사기 별도 평가.',
      },
      {
        question: '경찰 신고 vs 협회 신고 어떤 게 먼저인가요?',
        answer:
          '<strong>동시 진행 가능 영역입니다.</strong> 협회는 자격 처분, 경찰은 형사 책임.',
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

  // ─── 9. stalking-online-game-voice-chat-doxing-track (victim) ───
  {
    domain: 'stalking',
    slug: 'stalking-online-game-voice-chat-doxing-track',
    keyword: '온라인 게임 보이스챗 신상유출',
    questionKeyword: '게임 보이스챗에서 다투던 상대가 본인 본명·주소·직장을 캐서 SNS에 공개하고 반복 메시지를 보내요. 스토킹으로 다툴 수 있나요?',
    ctaKeyword: '게임 보이스챗 신상유출 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '게임 보이스챗 신상유출 — 5단계 스토킹·도싱 다툼 | 로앤가이드',
      description:
        '온라인 게임 보이스챗 신상유출 + 반복 메시지 시 스토킹처벌법·개인정보·플랫폼 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 ○○ 온라인 게임 보이스챗에서 다른 유저와 게임 운영 방식을 놓고 다툰 후, 상대가 본인 게임 닉네임·스팀/디스코드 ID를 단서로 본인 본명(SNS 연결 추적)·거주 동·직장명까지 캐냈습니다. 이 신상정보를 \'○○ 게임 안티 카페·디스코드 서버\'에 공개했고, 본인 카카오톡·인스타 DM·이메일로 \'사과해라·게임 그만둬라\' 메시지를 하루 20건 이상 반복 송신하고 있어요. 게임 운영사에 신고했지만 \'게임 외 행위는 관할 외\'라는 답변만 받았습니다. 본인 직장 메일·동료에게도 연락이 가서 사회생활까지 위협받는 상황이에요." 스토킹범죄의처벌등에관한법률은 ① 지속·반복 ② 상대 의사 반함 ③ 불안·공포 행위를 처벌하고, 개인정보보호법 + 정보통신망법 결합 평가 영역입니다. 신상유출(도싱)은 사이버불링·신변 위협으로 평가 가능 트랙. 피해자라면 ① 스토킹 ② 신상유출 ③ 플랫폼 ④ 형사 ⑤ 보호조치 5중 트랙이 가능한 영역. 대응은 ① 스토킹 ② 신상 ③ 플랫폼 ④ 형사 ⑤ 보호 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 게임 보이스챗 신상유출 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 스토킹·신상·플랫폼·형사·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 스토킹 행위 입증</strong> — 반복 메시지·거부 의사·지속성.</li>\n<li><strong>② 신상유출(도싱) 평가</strong> — 개인정보보호법 + 정보통신망법.</li>\n<li><strong>③ 플랫폼 임시조치</strong> — 게임·디스코드·SNS·카페 신고.</li>\n<li><strong>④ 형사 고소</strong> — 스토킹처벌법 + 개인정보보호법 결합.</li>\n<li><strong>⑤ 잠정조치·보호명령</strong> — 접근금지·통신금지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 게임 닉네임·SNS·스팀 ID 추적 신상유출은 \'도싱(doxing)\' 평가 영역. 스토킹처벌법 + 개인정보보호법 + 정보통신망법 결합 형사 강화. 직장·가족 연락은 가중 사정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·신고·잠정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 메시지·게시물 보존 (즉시)</strong> — DM·이메일·카페 게시물·디스코드 로그.</li>\n<li><strong>2단계 — 플랫폼 임시조치 (1주)</strong> — 게임·디스코드·SNS·카페 신고.</li>\n<li><strong>3단계 — 112 신고 + 잠정조치 (2주)</strong> — 경찰 스토킹 신고.</li>\n<li><strong>4단계 — 형사 고소 + 개인정보위 신고 (1개월)</strong> — 스토킹 + 개인정보 결합.</li>\n<li><strong>5단계 — 보호명령 + 민사 손해배상</strong> — 접근금지·위자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">게임 보이스챗 신상유출 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 스토킹·신상·플랫폼 갈래입니다.</strong></p>\n<ul>\n<li><strong>게임 보이스챗·디스코드 로그·녹음</strong></li>\n<li><strong>신상유출 게시물·카페 공개 자료</strong></li>\n<li><strong>본인 거부 의사 표현 자료</strong></li>\n<li><strong>반복 메시지·DM·이메일 기록</strong></li>\n<li><strong>직장·가족 연락 정황 자료</strong></li>\n<li><strong>플랫폼 신고 접수증</strong></li>\n<li><strong>112 신고·고소장</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 스토킹 + 신상유출 + 직장 연락 결합은 가중 평가 영역. 잠정조치는 신고 후 24~48시간 내 가능. 디스코드 등 해외 플랫폼은 한국 협조 한계 있어 경찰 사이버수사대 적극 활용.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>스토킹 행위</strong> — 반복·거부·지속.</li>\n<li><strong>도싱(신상유출)</strong> — 개인정보보호법 위반.</li>\n<li><strong>플랫폼 책임</strong> — 게임사·SNS 협조.</li>\n<li><strong>형사 처벌</strong> — 스토킹 + 개인정보 결합.</li>\n<li><strong>잠정조치</strong> — 접근금지·통신금지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰 112 (스토킹 긴급 신고)</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>개인정보보호위원회 118</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 스토킹 잠정조치 연장·항고 평가 영역',
        summary:
          '대법원 2025모3144(대법원, 2025.12.11 선고) 영역에서 법원은 잠정조치연장결정에대한재항고 사건에서 스토킹범죄의 처벌 등에 관한 법률상 잠정조치 결정(잠정조치 기간을 연장하거나 그 종류를 변경하는 결정 포함)에 대한 항고 평가 영역을 다루면서, 잠정조치의 효력·연장·변경 평가가 결정 사정이라고 본 사례 흐름이 있고, 게임 보이스챗 신상유출·반복 메시지 평가에도 잠정조치 + 형사 결합 트랙이 적용됩니다.',
        takeaway: '게임 신상유출 + 반복 메시지 + 직장 연락 결합은 스토킹 + 도싱 가중 평가 영역 — 변호인 상담·신속 신고 권장.',
      },
    ],
    faq: [
      {
        question: '게임 닉네임으로 신상 추적된 것도 스토킹인가요?',
        answer:
          '<strong>도싱은 개인정보보호법 + 스토킹 평가 영역입니다.</strong> 결합 형사 강화.',
      },
      {
        question: '게임 운영사가 \'관할 외\'라고 하면 어디에 신고하나요?',
        answer:
          '<strong>112·경찰 사이버수사대 영역입니다.</strong> 게임 외 행위도 형사 평가.',
      },
      {
        question: '해외 플랫폼(디스코드)도 신고 가능한가요?',
        answer:
          '<strong>경찰 국제 협조로 가능한 영역입니다.</strong> 다만 시간 소요.',
      },
      {
        question: '직장·가족에게 연락한 것도 가중되나요?',
        answer:
          '<strong>가중 평가 사정 영역입니다.</strong> 사회생활 위협으로 보호명령 강화.',
      },
      {
        question: '잠정조치는 얼마 만에 받나요?',
        answer:
          '<strong>경찰 신고 후 24~48시간 내 영역입니다.</strong> 긴급 사안 신속 처리.',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 즉시 대응', href: '/guide/stalking/stalking-immediate-response' },
      { label: '스토킹 처벌·접근금지', href: '/guide/stalking/stalking-penalty-restraining-order' },
      { label: '스토킹 증거 수집 FAQ', href: '/guide/stalking/stalking-evidence-collection-faq' },
      { label: '스토킹 신고·접근금지명령', href: '/guide/stalking/stalking-report-and-restraining-order' },
      { label: '전 연인 연락 스토킹 기준', href: '/guide/stalking/ex-partner-contact-stalking-criteria' },
    ],
  },
];
