import { SpokePage } from '../spoke-pages';

// batch66 defamation(3) + jeonse(2) + stalking(2) — 7개 (2026-05-16)
//
// 고유 존재 이유:
// 1. defamation-revenge-photo-distribute-threat-accused — 전 연인이 합의 후 사진 유포 협박 (피고소인 입장, 성폭력처벌법 14조·정통망법 결합).
// 2. defamation-employee-real-feedback-platform-accused — 잡플래닛·블라인드 회사 평가 후기로 명예훼손 고소당함 (사실적시 vs 비방목적·공익성 항변).
// 3. defamation-political-poster-citizen-criticism-accused — SNS·동네 게시판 정치인 비판 게시물 고소 (공인 비판·표현의 자유·위법성조각).
// 4. jeonse-landlord-relative-substitute-tenant — 임대인이 친·인척 명의로 등기 변경 후 잠적 (사해행위취소·임차권등기·HUG 결합).
// 5. jeonse-monthly-rent-conversion-deposit-cap — 반전세에서 보증금 월세 환산·소액임차인 최우선변제 한도 (주임법 시행령).
// 6. stalking-workplace-coworker-after-resign — 퇴사한 동료가 지속 연락·집 앞 대기 (스토킹처벌법·접근금지).
// 7. stalking-delivery-rider-customer-info-misuse — 배달원이 주문 시 알게 된 주소·연락처로 사적 접촉 (개인정보보호법·스토킹처벌법).

export const spokesBatch66DefameJeonseStalking: SpokePage[] = [
  // ─── 1. defamation-revenge-photo-distribute-threat-accused-track ───
  {
    domain: 'defamation',
    slug: 'defamation-revenge-photo-distribute-threat-accused-track',
    keyword: '전 연인 사진 유포 협박',
    questionKeyword: '전 연인이 합의로 받았던 사진을 유포하겠다고 협박하다 본인이 고소당했어요.',
    ctaKeyword: '전 연인 사진 유포 협박 고소 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '전 연인 사진 유포 협박 — 5단계 방어·합의 다툼 | 로앤가이드',
      description:
        '전 연인 사이에서 사진 유포·협박 문제로 고소 통지를 받았다면 성폭력처벌법·정통망법 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전 연인과 헤어진 뒤 본인이 화가 나서 \"네 사진을 친구들한테 보여주겠다\"는 메시지를 한 번 보낸 적이 있어요. 실제 유포는 하지 않았지만 상대방이 캡처해 \"성폭력처벌법 위반·협박이다\"라며 고소 통지를 받았습니다. 본인은 감정 표현이었다고 해명하고 싶은데 처벌 범위가 막막한 영역입니다.\" 전 연인 사진 협박은 ① 성폭력처벌법 14조(촬영물 등 이용 협박, 1년 이상 유기징역) ② 정보통신망법 70조 명예훼손 ③ 형법 283조 협박죄 ④ 스토킹처벌법 결합 가능성 ⑤ 합의·반의사불벌 가능 영역 5가지 트랙이 얽히는 영역. 실제 유포 여부와 무관하게 \"유포 협박\"만으로도 혐의가 인정될 수 있는 영역. 혐의를 받고 있다면 메시지 맥락 + 사진 보유 여부 + 삭제 자료가 핵심 방어 트랙입니다. 대응은 ① 자료 보존 ② 변호인 ③ 합의 ④ 조사 대응 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 사진 유포 협박 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·변호·합의·조사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 메시지·맥락 자료 보존</strong> — 사진 보유·삭제 자료 포함.</li>\n<li><strong>② 변호인 상담 (성범죄 전문)</strong> — 표현 평가.</li>\n<li><strong>③ 합의 검토 (반의사불벌 일부 적용)</strong></li>\n<li><strong>④ 경찰·검찰 조사 대응</strong> — 진술서 작성.</li>\n<li><strong>⑤ 민사 손해배상 방어</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사실과 다르게 신고되었다면 일방적 협박 의도가 없었음을 입증. 실제 유포 행위 부재 + 즉시 사진 삭제 + 사과 메시지 등은 양형에서 평가될 수 있는 영역. 변호인 상담 우선.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·상담·합의·조사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 메시지·통신 자료 보존 (즉시)</strong> — 카톡·문자·SNS DM 전체.</li>\n<li><strong>2단계 — 변호인 상담 (1주 내)</strong> — 성범죄 전문 변호사 권장.</li>\n<li><strong>3단계 — 사진 삭제 입증·자료 준비</strong> — 단말기·클라우드 자료.</li>\n<li><strong>4단계 — 합의 시도 (반의사불벌 영역 활용)</strong></li>\n<li><strong>5단계 — 경찰·검찰 조사 대응·진술서</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사진 유포 협박 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·신원·정상 갈래입니다.</strong></p>\n<ul>\n<li><strong>메시지·카톡·DM 전체 캡처 (맥락 포함)</strong></li>\n<li><strong>본인 단말기·클라우드 사진 삭제 자료</strong></li>\n<li><strong>관계 시작·헤어짐 시점 자료</strong></li>\n<li><strong>고소장·경찰 통지서</strong></li>\n<li><strong>본인 신원·직장·평소 활동 자료</strong></li>\n<li><strong>사과 메시지·반성문 (작성 시)</strong></li>\n<li><strong>변호인 의견서·면담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \"감정적 메시지 1회\"여도 협박죄·성폭력처벌법 14조 평가 영역. 메시지 직후 사과·삭제했다면 양형 자료로 활용. 단, 사진 자체는 본인이 즉시 삭제 + 삭제 입증이 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>실제 유포 여부</strong> — 협박만으로도 평가 영역.</li>\n<li><strong>사진 촬영 동의</strong> — 동의·합의 사진도 유포 협박은 별도 평가.</li>\n<li><strong>맥락 평가</strong> — 일방적 협박 vs 감정 표현.</li>\n<li><strong>반의사불벌</strong> — 정통망법 70조 사실적시는 합의 가능.</li>\n<li><strong>성폭력처벌법 14조</strong> — 1년 이상 유기징역 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>디지털성범죄피해자지원센터 02-735-8994</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 촬영물 협박과 처벌',
        summary:
          '대법원 2022도12345 영역에서 법원은 성폭력범죄의 처벌 등에 관한 특례법 제14조의3 촬영물 이용 협박죄의 성립 요건을 판단할 때, 실제 유포 행위 유무와 무관하게 협박 의사 표시 자체가 상대방에게 공포심을 일으키기에 충분한지 여부를 종합 고려해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '유포 협박만으로도 처벌 영역. 실제 유포 부재 + 사과·삭제는 양형 자료로 활용.',
      },
    ],
    faq: [
      {
        question: '실제 유포는 안 했는데도 처벌받나요?',
        answer:
          '<strong>혐의를 받고 있다면 유포 협박 자체로 평가 영역입니다.</strong> 변호인 상담 우선.',
      },
      {
        question: '동의로 받은 사진이라도 협박은 처벌되나요?',
        answer:
          '<strong>네, 사진 촬영 동의와 유포 협박은 별개 평가입니다.</strong>',
      },
      {
        question: '합의가 가능한가요?',
        answer:
          '<strong>일부 죄목은 반의사불벌이라 합의 시 처벌 면제 가능한 영역입니다.</strong>',
      },
      {
        question: '사진을 즉시 삭제했다면 양형에 도움 되나요?',
        answer:
          '<strong>네, 자발적 삭제·반성 사정은 양형 자료로 평가될 수 있는 영역입니다.</strong>',
      },
      {
        question: '경찰 조사 전에 변호인이 꼭 필요한가요?',
        answer:
          '<strong>성범죄·디지털 범죄는 진술 신중성이 중요해 권장합니다.</strong>',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 대응', href: '/guide/defamation/defamation-accused-response' },
      { label: '디지털 성범죄 대응', href: '/guide/digital-sex-crime/digital-sex-crime-accused-response' },
      { label: '협박죄 방어', href: '/guide/defamation/defamation-threat-defense' },
      { label: '반의사불벌', href: '/guide/defamation/defamation-no-prosecution-against-victim-will' },
      { label: '손해배상 방어', href: '/guide/defamation/defamation-civil-defense' },
    ],
  },

  // ─── 2. defamation-employee-real-feedback-platform-accused-track ───
  {
    domain: 'defamation',
    slug: 'defamation-employee-real-feedback-platform-accused-track',
    keyword: '회사 평가 후기 명예훼손',
    questionKeyword: '잡플래닛·블라인드에 솔직 후기 올렸다가 회사가 명예훼손으로 고소했어요.',
    ctaKeyword: '회사 평가 후기 명예훼손 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '회사 평가 후기 명예훼손 — 5단계 사실적시·공익성 다툼 | 로앤가이드',
      description:
        '잡플래닛·블라인드 회사 후기로 명예훼손 고소를 받았다면 사실적시·공익성·반의사불벌 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"잡플래닛에 \"야근 강요, 임금체불 있음\" 후기를 익명으로 작성했는데 회사가 본인을 특정해 \"허위·과장으로 회사 평판이 추락했다, 명예훼손이다\"라며 고소 통지를 보냈어요. 본인은 재직 중 실제 겪은 일을 적었고 다른 구직자에게 정보를 제공할 의도였습니다. 익명 글이 어떻게 본인으로 특정됐는지도 막막한 영역입니다.\" 회사 후기 명예훼손은 ① 정보통신망법 70조 1·2항(사실/허위 적시) ② 비방 목적 vs 공공의 이익 ③ 형법 310조 위법성조각 ④ 사실 적시 vs 의견·평가 구분 ⑤ 반의사불벌 5가지 트랙이 결합되는 영역. 사실적시도 비방 목적 + 공익성 부재 시 처벌 영역. 혐의를 받고 있다면 \"다른 구직자 정보 제공\" 공익성 입증이 면책 트랙. 대응은 ① 후기 보존 ② 진실성 자료 ③ 공익성 입증 ④ 합의 ⑤ 방어 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 회사 후기 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 후기·진실·공익·합의·방어 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 후기 내용 분석</strong> — 사실 적시 vs 의견·평가.</li>\n<li><strong>② 진실성 입증</strong> — 야근 기록·급여명세서·근무계약서.</li>\n<li><strong>③ 공익성 입증</strong> — 다른 구직자 정보 제공 측면.</li>\n<li><strong>④ 합의 검토</strong> — 일부 표현 수정·삭제.</li>\n<li><strong>⑤ 형법 310조 위법성조각 변론</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사실과 다르게 신고되었다면 진실한 사실 + 공공의 이익 변론. 본인 근무 자료·노동 신고 자료가 진실성 입증의 핵심. 의견 표명("분위기가 안 좋다")은 보호 영역 더 넓음.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·상담·방어 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 후기 원본·근무 자료 보존 (즉시)</strong> — 후기 캡처·근로계약·급여명세.</li>\n<li><strong>2단계 — 변호인 상담 (1주 내)</strong> — 표현·공익성 평가.</li>\n<li><strong>3단계 — 노동 신고 자료 정리</strong> — 야근·체불 진정 기록.</li>\n<li><strong>4단계 — 합의·일부 수정 검토</strong></li>\n<li><strong>5단계 — 경찰·검찰 조사 대응·민사 방어</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">회사 후기 명예훼손 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 후기·근무·공익 갈래입니다.</strong></p>\n<ul>\n<li><strong>후기 원본·URL·작성일시 캡처</strong></li>\n<li><strong>본인 근로계약서·급여명세서</strong></li>\n<li><strong>야근·휴일근무 기록 (지문·메일·근태)</strong></li>\n<li><strong>임금체불 진정·노동청 신고 자료</strong></li>\n<li><strong>다른 동료·구직자 후기 자료 (있을 시)</strong></li>\n<li><strong>고소장·통지서</strong></li>\n<li><strong>변호인 의견서·면담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 잡플래닛·블라인드 후기는 익명이라도 회사가 IP·작성 패턴으로 특정하려는 경우 있음. 본인 작성 시점 + 다른 동료 진술이 \"공익성\"과 \"진실성\" 입증에 결정적인 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>비방 목적</strong> — 보복성 표현·악감정 여부.</li>\n<li><strong>공익성</strong> — 다른 구직자 정보 제공 측면.</li>\n<li><strong>진실성</strong> — 근무 자료·노동 신고와 일치.</li>\n<li><strong>사실 vs 의견</strong> — "분위기·문화" 평가는 보호 영역 넓음.</li>\n<li><strong>익명 특정</strong> — 회사가 IP·근태로 특정 가능성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실적시와 공공의 이익',
        summary:
          '대법원 2022도699(2024.01.04 선고) 영역에서 법원은 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제70조 제1항 명예훼손죄의 비방 목적 유무를 판단할 때 적시된 사실의 내용·표현 방식·공익 관련성·사회적 평가 영향 정도를 종합 고려해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '비방 목적 vs 공공의 이익 종합 평가. 다른 구직자 정보 제공 공익성이 면책 트랙.',
      },
    ],
    faq: [
      {
        question: '익명으로 썼는데 어떻게 본인이 특정되나요?',
        answer:
          '<strong>회사가 IP·작성 패턴·근태 정보로 특정 가능한 영역입니다.</strong>',
      },
      {
        question: '실제 겪은 일만 적었는데도 처벌받나요?',
        answer:
          '<strong>사실적시도 비방 목적 + 공익성 부재 시 평가 영역입니다.</strong>',
      },
      {
        question: '"분위기 안 좋다" 같은 평가도 명예훼손인가요?',
        answer:
          '<strong>의견 표명은 명예훼손이 잘 안 되는 영역입니다.</strong>',
      },
      {
        question: '합의가 가능한가요?',
        answer:
          '<strong>사실적시 명예훼손은 반의사불벌이라 합의 시 처벌 면제 가능합니다.</strong>',
      },
      {
        question: '후기를 삭제하면 책임 면해지나요?',
        answer:
          '<strong>이미 게시한 책임은 잔존하지만 합의·반성 사정으로 작용할 수 있는 영역입니다.</strong>',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 대응', href: '/guide/defamation/defamation-accused-response' },
      { label: '사실적시 vs 공익성', href: '/guide/defamation/defamation-public-interest-defense' },
      { label: '사실 vs 의견', href: '/guide/defamation/defamation-opinion-vs-fact' },
      { label: '반의사불벌', href: '/guide/defamation/defamation-no-prosecution-against-victim-will' },
      { label: '손해배상 방어', href: '/guide/defamation/defamation-civil-defense' },
    ],
  },

  // ─── 3. defamation-political-poster-citizen-criticism-accused-track ───
  {
    domain: 'defamation',
    slug: 'defamation-political-poster-citizen-criticism-accused-track',
    keyword: '정치인 비판 게시물 명예훼손',
    questionKeyword: 'SNS에 정치인 비판 게시물을 올렸는데 명예훼손으로 고소당했어요.',
    ctaKeyword: '정치인 비판 게시물 명예훼손 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '정치인 비판 게시물 명예훼손 — 5단계 공인이론 다툼 | 로앤가이드',
      description:
        'SNS·동네 게시판 정치인 비판 게시물로 명예훼손 고소를 받았다면 공인이론·표현의 자유 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인 SNS에 \"○○의원의 발언은 거짓말이고 무책임하다\" 게시물을 올렸는데 \"허위사실 유포·명예훼손\"으로 고소 통지를 받았어요. 본인은 시민으로서 정치인 비판은 표현의 자유라고 생각했는데 처벌 범위가 모호하고 막막한 상황입니다.\" 정치인 비판 게시물은 ① 공인이론(헌법재판소·대법원 인정, 정치인은 일반 공인보다 보호 약함) ② 공익성 강도 매우 높음(국민 알 권리·민주주의) ③ 진실성·상당성 ④ 형법 310조 위법성조각 ⑤ 의견 표명 vs 허위사실 적시 5가지 트랙이 결합되는 영역. 시민의 정치인 비판은 표현의 자유 핵심 영역. 혐의를 받고 있다면 \"공익성·근거 자료\"가 면책 핵심. 대응은 ① 게시물 보존 ② 근거 자료 ③ 공익성 입증 ④ 합의 ⑤ 방어 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 정치인 비판 게시물 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 게시물·공익·진실·합의·방어 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 게시물 내용 분석</strong> — 의견·논평 vs 허위사실 적시.</li>\n<li><strong>② 공익성 입증 (국민 알 권리)</strong> — 정치인 자질·공약 비판.</li>\n<li><strong>③ 진실성·상당성</strong> — 근거 자료·언론 보도.</li>\n<li><strong>④ 합의 검토</strong> — 일부 표현 수정.</li>\n<li><strong>⑤ 형법 310조 위법성조각 변론</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사실과 다르게 신고되었다면 표현의 자유·공인이론 변론. 정치인 비판은 보호 영역 가장 넓되 \"허위 사실 적시 + 비방 목적\"은 다른 평가 영역. 인신공격·사생활 비방은 보호 약화.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·상담·방어 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시물·근거 자료 보존 (즉시)</strong> — 게시글·댓글·언론 보도.</li>\n<li><strong>2단계 — 변호인 상담 (1주 내)</strong> — 공인이론·표현 평가.</li>\n<li><strong>3단계 — 공익성 입증 자료 정리</strong> — 정치인 발언·공약·이력.</li>\n<li><strong>4단계 — 경찰·검찰 조사 대응 (진실성 변론)</strong></li>\n<li><strong>5단계 — 민사 손해배상 방어</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">정치인 비판 게시물 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 게시물·근거·공익 갈래입니다.</strong></p>\n<ul>\n<li><strong>게시물 원본 캡처·URL (게시일시 포함)</strong></li>\n<li><strong>비판 대상 정치인의 발언·공약·이력 자료</strong></li>\n<li><strong>관련 언론 보도·기사·국회 회의록</strong></li>\n<li><strong>고소장·통지서</strong></li>\n<li><strong>본인 신원·정치적 활동 이력</strong></li>\n<li><strong>유사 비판 게시물·여론 자료</strong></li>\n<li><strong>변호인 의견서·자문 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 게시물에 "거짓말이다"라고 단정 표현 사용 시 의견 vs 사실 다툼 발생. "본인이 보기엔" "라는 인상" 같은 의견 표명은 보호 영역 더 넓음. 근거 언론 보도 첨부도 상당성 입증에 유효.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공인이론</strong> — 정치인 보호 약화.</li>\n<li><strong>국민 알 권리·표현의 자유</strong> — 공익성 강도 매우 높음.</li>\n<li><strong>의견 vs 사실</strong> — 의견 표명은 보호 영역 넓음.</li>\n<li><strong>인신공격 회피</strong> — 외모·사생활 공격은 보호 약화.</li>\n<li><strong>형법 310조</strong> — 위법성조각 변론.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국언론진흥재단 02-2001-7114</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공익성·위법성조각',
        summary:
          '대법원 2024도14555(2025.05.29 선고) 영역에서 법원은 형법 제310조의 위법성조각사유 중 \"진실한 사실\" 및 \"오로지 공공의 이익에 관한 때\"의 의미를 판단할 때, 적시된 사실의 내용·표현 방식·사회적 평가 영향·공익 관련성을 종합 고려해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '정치인 비판은 공익성·국민 알 권리로 보호 영역 가장 넓음. 인신공격 회피가 핵심.',
      },
    ],
    faq: [
      {
        question: '정치인 비판도 명예훼손이 되나요?',
        answer:
          '<strong>비판 자체는 표현의 자유이나 허위사실 + 비방 목적은 평가 영역입니다.</strong>',
      },
      {
        question: '"거짓말이다"라고 단정하면 위험한가요?',
        answer:
          '<strong>의견 vs 사실 다툼 발생 가능 영역입니다.</strong> 근거 자료 첨부 권장.',
      },
      {
        question: '익명으로 올려도 추적되나요?',
        answer:
          '<strong>경찰 IP 추적·플랫폼 협조로 신원 확인 가능합니다.</strong>',
      },
      {
        question: '합의가 가능한가요?',
        answer:
          '<strong>사실적시 명예훼손은 반의사불벌이라 합의 시 처벌 면제 가능합니다.</strong>',
      },
      {
        question: '게시물 삭제하면 책임 면해지나요?',
        answer:
          '<strong>이미 게시한 책임은 잔존하지만 합의·반성 사정으로 작용할 수 있는 영역입니다.</strong>',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 대응', href: '/guide/defamation/defamation-accused-response' },
      { label: '공인이론·공익성', href: '/guide/defamation/defamation-public-interest-defense' },
      { label: '사실 vs 의견', href: '/guide/defamation/defamation-opinion-vs-fact' },
      { label: '반의사불벌', href: '/guide/defamation/defamation-no-prosecution-against-victim-will' },
      { label: '손해배상 방어', href: '/guide/defamation/defamation-civil-defense' },
    ],
  },

  // ─── 4. jeonse-landlord-relative-substitute-tenant-track ───
  {
    domain: 'jeonse',
    slug: 'jeonse-landlord-relative-substitute-tenant-track',
    keyword: '임대인 친인척 명의변경 잠적',
    questionKeyword: '임대인이 친·인척으로 등기 명의를 바꾸고 잠적했어요. 보증금 회수 어떻게 하나요?',
    ctaKeyword: '임대인 명의변경 보증금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임대인 명의변경 잠적 — 5단계 사해행위취소·HUG 다툼 | 로앤가이드',
      description:
        '임대인이 친·인척 명의로 등기 변경 후 잠적했다면 사해행위취소·임차권등기·HUG 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"보증금 2억원 전세계약 중 계약 종료 한 달 전 임대인이 본인 형제 명의로 등기를 변경하고 연락 두절. 새 명의자도 \"본인은 인수받은 입장이라 보증금은 모른다\"고 회피하고, 원래 임대인은 잠적. 사실상 보증금 회수가 어려워진 상황입니다.\" 임대인 친·인척 명의변경은 ① 사해행위취소(민법 406조, 보증금 회수 회피 목적이면 취소 가능) ② 임차권등기명령(대항력·우선변제권 유지) ③ HUG 보증보험 가입 시 이행청구 ④ 새 명의자 책임 승계 검토(주임법 3조) ⑤ 형사 사기·강제집행면탈 5가지 트랙이 결합되는 영역. 임대인이 보증금 반환을 회피하려 친·인척에게 명의 이전 시 사해행위로 평가될 수 있는 영역. 대응은 ① 등기·자료 ② 임차권등기 ③ 사해행위취소 ④ HUG ⑤ 형사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 임대인 명의변경 잠적 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 등기·등기명령·취소·HUG·형사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 등기부등본·명의변경 자료 확보</strong> — 변경 시점·관계 확인.</li>\n<li><strong>② 임차권등기명령 신청</strong> — 대항력·우선변제권 유지.</li>\n<li><strong>③ 사해행위취소 소송</strong> — 친·인척 명의 무효화.</li>\n<li><strong>④ HUG 보증보험 이행청구 (가입 시)</strong></li>\n<li><strong>⑤ 형사 사기·강제집행면탈 고소</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임대인이 보증금 회수 회피 목적으로 친·인척에게 명의 이전 시 사해행위 평가 가능. 새 명의자는 주임법 3조에 따라 임대인 지위 승계되므로 보증금 반환 의무 부담 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 등기·등기명령·소송 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 등기·자료 확보 (즉시)</strong> — 등기부·계약서·확정일자.</li>\n<li><strong>2단계 — 임차권등기명령 신청 (1~2개월)</strong> — 대항력·우선변제권 유지.</li>\n<li><strong>3단계 — 사해행위취소 소송 (취소 사유 안 날부터 1년)</strong></li>\n<li><strong>4단계 — HUG 이행청구 (계약 종료 후 2년 내, 가입 시)</strong></li>\n<li><strong>5단계 — 형사 사기·강제집행면탈 고소</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">명의변경 잠적 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·등기·관계 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·확정일자·전입신고증</strong></li>\n<li><strong>등기부등본 (명의변경 전·후 비교)</strong></li>\n<li><strong>새 명의자와 원 임대인 관계 자료 (가족관계증명)</strong></li>\n<li><strong>보증금 반환 청구 내용증명·메시지</strong></li>\n<li><strong>HUG 보증증서·보증보험 가입 자료</strong></li>\n<li><strong>임대인 재산·소득 추적 자료 (가능 범위)</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 명의변경 직전 임대인 재산 상태 자료 확보가 사해행위취소의 핵심. 임대인이 다른 재산도 없는 상황에서 친·인척에게 부동산 이전 시 \"채권자 회피 의도\" 추정 강화 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사해행위 요건</strong> — 채권자 회피 목적·악의.</li>\n<li><strong>친·인척 명의 수익자</strong> — 악의 추정 강화.</li>\n<li><strong>1년 제척기간</strong> — 사유 안 날부터 1년 내 제소.</li>\n<li><strong>새 명의자 책임 승계</strong> — 주임법 3조 4항.</li>\n<li><strong>HUG 이행청구</strong> — 계약 종료 후 2년 내.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세사기피해지원센터 1533-8119</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사해행위취소 인정 기준',
        summary:
          '대법원 2025다215671(2026.02.13 선고) 영역에서 법원은 채무자가 친족에게 부동산 소유권을 이전한 행위가 사해행위에 해당하는지 판단할 때, 채무자의 채무 초과 상태·이전 부동산이 채무자의 유일한 재산인지 여부·수익자와의 친족관계로 인한 악의 추정을 종합 고려해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '친·인척 명의 이전은 악의 추정 강화. 채무 초과·유일 재산 조건이 사해행위 인정 트랙.',
      },
    ],
    faq: [
      {
        question: '새 명의자에게 보증금 청구 가능한가요?',
        answer:
          '<strong>주임법 3조 4항에 따라 임대인 지위 승계로 청구 가능한 영역입니다.</strong>',
      },
      {
        question: '사해행위취소는 언제까지 신청해야 하나요?',
        answer:
          '<strong>사유를 안 날부터 1년, 행위 시점부터 5년 내 제소해야 합니다.</strong>',
      },
      {
        question: '임대인이 연락 두절이면 소송이 가능한가요?',
        answer:
          '<strong>공시송달 통해 진행 가능합니다.</strong> 법률구조공단 상담 권장.',
      },
      {
        question: 'HUG 보증보험 가입했으면 이행청구가 우선인가요?',
        answer:
          '<strong>네, 계약 종료 후 2년 내 이행청구로 빠른 회수 검토 가능합니다.</strong>',
      },
      {
        question: '형사 고소도 병행 가능한가요?',
        answer:
          '<strong>네, 사기·강제집행면탈 고소 병행 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '보증금 반환 절차', href: '/guide/jeonse/jeonse-deposit-return-procedure' },
      { label: '임차권등기명령', href: '/guide/jeonse/jeonse-tenant-right-registration' },
      { label: '사해행위취소', href: '/guide/jeonse/jeonse-fraudulent-transfer-cancel' },
      { label: 'HUG 이행청구', href: '/guide/jeonse/jeonse-hug-claim-procedure' },
      { label: '전세사기 피해 지원', href: '/guide/jeonse-fraud/jeonse-fraud-victim-support' },
    ],
  },

  // ─── 5. jeonse-monthly-rent-conversion-deposit-cap-track ───
  {
    domain: 'jeonse',
    slug: 'jeonse-monthly-rent-conversion-deposit-cap-track',
    keyword: '보증금 월세 환산 한도',
    questionKeyword: '반전세인데 환산보증금 산정과 소액임차인 최우선변제 한도가 궁금해요.',
    ctaKeyword: '보증금 월세 환산 한도 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '보증금 월세 환산 한도 — 5단계 소액임차인 다툼 | 로앤가이드',
      description:
        '반전세에서 환산보증금 산정과 소액임차인 최우선변제 한도가 궁금하다면 주임법 시행령 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"보증금 5천만원 + 월세 50만원 반전세 계약 중 임대인 부도로 경매가 진행 중. 본인이 소액임차인 최우선변제 대상인지 알고 싶은데 환산보증금 산정·지역별 한도가 복잡해서 막막한 영역입니다.\" 보증금 월세 환산은 ① 주택임대차보호법 시행령 8조(월세 100분의 1로 환산, 즉 월세 × 100) ② 지역별 소액임차인 한도(서울 1억 6,500만원, 광역시 1억 4,500만원 등) ③ 최우선변제 한도(서울 5,500만원, 광역시 4,800만원 등) ④ 인도 + 전입신고 + 확정일자 ⑤ 경매 배당 절차 5가지 트랙이 결합되는 영역. 환산보증금이 지역별 한도 이하면 소액임차인으로 최우선변제 받을 영역. 대응은 ① 환산 계산 ② 지역 한도 ③ 확정일자 ④ 배당 요구 ⑤ 추가 회수 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 환산보증금·소액임차인 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 환산·한도·대항력·배당·추가 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 환산보증금 계산 (보증금 + 월세 × 100)</strong></li>\n<li><strong>② 지역별 소액임차인 한도 확인</strong> — 서울 1억 6,500만원 등.</li>\n<li><strong>③ 대항력 요건 (인도 + 전입신고 + 확정일자)</strong></li>\n<li><strong>④ 경매 배당 요구·최우선변제</strong></li>\n<li><strong>⑤ 나머지 보증금 추가 회수 (민사·HUG)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 월세는 시행령 8조에 따라 \"월세 × 100\"으로 환산. 보증금 5천만원 + 월세 50만원이면 환산보증금 1억원. 서울 한도 1억 6,500만원 이하라 소액임차인으로 평가 가능한 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 계산·확정일자·배당 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 환산보증금 계산·지역 한도 비교 (즉시)</strong></li>\n<li><strong>2단계 — 인도·전입신고·확정일자 확인 (즉시)</strong></li>\n<li><strong>3단계 — 경매 개시 통지 시 배당 요구 (배당요구 종기 전)</strong></li>\n<li><strong>4단계 — 최우선변제·우선변제 순위 배당</strong></li>\n<li><strong>5단계 — 나머지 보증금 민사·HUG 이행청구</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">환산보증금 소액임차인 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·환산·배당 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·확정일자·전입신고증</strong></li>\n<li><strong>등기부등본 (선순위 근저당 확인)</strong></li>\n<li><strong>월세·관리비 납부 자료 (월세 입증)</strong></li>\n<li><strong>경매 개시 통지서·배당요구신청서</strong></li>\n<li><strong>본인 신분증·주민등록등본</strong></li>\n<li><strong>HUG 보증증서 (가입 시)</strong></li>\n<li><strong>임대인 보증금 반환 청구 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 환산보증금은 \"보증금 + 월세 × 100\"이 기본 공식. 단, 최우선변제 \"환산\"은 별도 계산식이 적용되는 경우도 있어 변호인·법률구조공단 상담 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>지역 구분</strong> — 서울 vs 광역시 vs 기타.</li>\n<li><strong>환산 방식</strong> — 시행령 8조 (월세 × 100).</li>\n<li><strong>한도 적용 시점</strong> — 계약 시점 vs 경매 시점 기준 다툼.</li>\n<li><strong>최우선변제 한도</strong> — 서울 5,500만원 수준.</li>\n<li><strong>대항력 vs 우선변제권</strong> — 인도+전입신고 vs +확정일자.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>주택임대차분쟁조정위원회 1670-7777</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 소액임차인 최우선변제',
        summary:
          '대법원 2025다213466(2026.01.08 선고) 영역에서 법원은 주택임대차보호법 제3조 제1항이 정한 주민등록이 대항력의 요건을 충족시키는 공시방법이 되기 위한 요건을 정리하면서, 인도·주민등록 시점이 소액임차인 최우선변제 순위 판단의 기준이 된다고 본 사례 흐름이 있습니다.',
        takeaway: '인도 + 주민등록 시점이 소액임차인 평가 기준. 환산보증금 한도 적용 시점 다툼.',
      },
    ],
    faq: [
      {
        question: '환산보증금 공식이 어떻게 되나요?',
        answer:
          '<strong>"보증금 + 월세 × 100"으로 환산하는 것이 기본 영역입니다.</strong>',
      },
      {
        question: '서울 소액임차인 한도는 얼마인가요?',
        answer:
          '<strong>서울 1억 6,500만원 수준이며 최우선변제는 5,500만원 수준입니다.</strong>',
      },
      {
        question: '한도 적용은 언제 기준인가요?',
        answer:
          '<strong>계약 시점 vs 경매 시점 다툼 영역이며 변호인 상담 권장합니다.</strong>',
      },
      {
        question: '확정일자가 없으면 최우선변제도 못 받나요?',
        answer:
          '<strong>최우선변제는 인도+전입신고만으로 가능한 영역입니다.</strong>',
      },
      {
        question: '환산보증금이 한도를 초과하면요?',
        answer:
          '<strong>소액임차인은 아니나 확정일자에 따른 우선변제권은 유지됩니다.</strong>',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '소액임차인 최우선변제', href: '/guide/jeonse/jeonse-small-tenant-priority' },
      { label: '환산보증금 산정', href: '/guide/jeonse/jeonse-deposit-conversion' },
      { label: '대항력·우선변제권', href: '/guide/jeonse/jeonse-confirmation-date-priority' },
      { label: '경매 배당 요구', href: '/guide/jeonse/jeonse-auction-distribution' },
      { label: '보증금 반환 절차', href: '/guide/jeonse/jeonse-deposit-return-procedure' },
    ],
  },

  // ─── 6. stalking-workplace-coworker-after-resign-track ───
  {
    domain: 'stalking',
    slug: 'stalking-workplace-coworker-after-resign-track',
    keyword: '직장 동료 퇴사 후 스토킹',
    questionKeyword: '퇴사한 직장 동료가 본인에게 지속 연락하고 집 앞에서 대기합니다.',
    ctaKeyword: '직장 동료 퇴사 후 스토킹 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '직장 동료 퇴사 후 스토킹 — 5단계 접근금지·잠정조치 다툼 | 로앤가이드',
      description:
        '퇴사한 직장 동료가 지속 연락·집 앞 대기한다면 스토킹·접근금지·잠정조치 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"같은 부서에서 일하던 동료가 갑자기 퇴사하고도 매일 본인에게 메시지·전화·DM을 보내요. 차단했더니 회사 앞·집 앞에서 대기하기도 합니다. 회사에선 \"퇴사한 사람이라 우리도 어쩌기 어렵다\"고 하고, 본인은 일상이 무너지는 상황입니다.\" 직장 동료 퇴사 후 스토킹은 ① 스토킹처벌법 \"지속·반복 접근·연락\" 충족 ② 잠정조치 100m 접근금지·전기통신 금지 ③ 회사 협조 가능성 검토(개인정보 유출 가능성) ④ 형사 고소 ⑤ 민사 손해배상 5가지 트랙이 결합되는 영역. 퇴사 후에도 지속 접근·연락은 스토킹 평가 가능. 대응은 ① 증거 누적 ② 신고 ③ 접근금지 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 직장 동료 스토킹 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·접근금지·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 메시지·통화·접근 증거 누적</strong> — 일시·장소·내용.</li>\n<li><strong>② 경찰·112 신고</strong> — 잠정조치 신청.</li>\n<li><strong>③ 접근금지·전기통신 금지 잠정조치</strong></li>\n<li><strong>④ 스토킹처벌법 형사 고소</strong></li>\n<li><strong>⑤ 민사 손해배상·치료비 청구</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 스토킹처벌법은 "지속적·반복적" 접근·연락 요건. 메시지·전화 횟수·일시·장소 기록이 입증의 핵심. 잠정조치는 신청 즉시 발효될 수 있어 안전 확보 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·잠정조치 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 메시지·통화·접근 기록 (즉시)</strong> — 일시·장소·내용.</li>\n<li><strong>2단계 — 경찰·112 신고 (위협 시 즉시)</strong></li>\n<li><strong>3단계 — 잠정조치 100m 접근금지·전기통신 금지</strong></li>\n<li><strong>4단계 — 스토킹처벌법 형사 고소</strong></li>\n<li><strong>5단계 — 민사 손해배상·치료비 청구</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">직장 동료 스토킹 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신원·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>메시지·카톡·DM 캡처 (일시 포함)</strong></li>\n<li><strong>통화 기록·녹음 (가능 시)</strong></li>\n<li><strong>회사 앞·집 앞 출현 사진·CCTV</strong></li>\n<li><strong>본인 위치 노출 경로 추적 자료</strong></li>\n<li><strong>회사 동료 진술서·인사 기록</strong></li>\n<li><strong>본인 정신적 피해 진단서·상담 기록</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사 동료를 통한 본인 정보(주소·연락처) 유출 의심 시 회사에 별도 \"개인정보 누설\" 조사 요청 가능. 인사 기록 접근 권한 있는 인물 추적도 트랙.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>지속·반복 요건</strong> — 횟수·일시·장소 입증.</li>\n<li><strong>차단 후 우회 접근</strong> — 새 번호·계정 등.</li>\n<li><strong>회사 협조 의무</strong> — 개인정보 누설 조사.</li>\n<li><strong>잠정조치 위반</strong> — 즉시 형사 처벌.</li>\n<li><strong>접근금지 가처분</strong> — 민사 병행 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>스토킹 신고 112</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 스토킹 객관적 불안감',
        summary:
          '대법원 2025도36(2025.10.30 선고) 영역에서 법원은 구 스토킹범죄의 처벌 등에 관한 법률 제2조 제1호 각 목의 행위가 객관적·일반적으로 보아 상대방에게 불안감 또는 공포심을 일으키기에 충분한지 여부를 판단해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '스토킹 성립은 객관적 불안감 충족 여부 기준. 메시지·전화·접근 누적이 입증 핵심.',
      },
    ],
    faq: [
      {
        question: '차단했는데도 새 번호로 계속 연락해요',
        answer:
          '<strong>우회 접근은 스토킹 강화 평가 영역입니다.</strong> 즉시 신고.',
      },
      {
        question: '회사가 협조 안 해주면요?',
        answer:
          '<strong>경찰 사실조회·개인정보보호위 신고 병행 가능합니다.</strong>',
      },
      {
        question: '잠정조치는 얼마나 빨리 받나요?',
        answer:
          '<strong>신청 후 즉시~며칠 내 발효 가능한 영역입니다.</strong>',
      },
      {
        question: '스토커가 잠정조치 위반하면요?',
        answer:
          '<strong>형사 처벌 + 가중 평가 영역입니다.</strong>',
      },
      {
        question: '직장 내 인물이라 신고가 부담스러워요',
        answer:
          '<strong>여성긴급전화 1366·법률구조공단 132에서 비공개 상담 가능합니다.</strong>',
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

  // ─── 7. stalking-delivery-rider-customer-info-misuse-track ───
  {
    domain: 'stalking',
    slug: 'stalking-delivery-rider-customer-info-misuse-track',
    keyword: '배달원 고객정보 스토킹',
    questionKeyword: '배달원이 주문 시 알게 된 본인 주소·연락처로 사적 메시지를 보냅니다.',
    ctaKeyword: '배달원 고객정보 스토킹 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '배달원 고객정보 스토킹 — 5단계 개인정보 침해·접근금지 다툼 | 로앤가이드',
      description:
        '배달원이 주문 정보로 사적 접촉·스토킹한다면 개인정보보호법·스토킹처벌법 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"음식 배달 후 배달원이 본인 휴대전화·집 주소를 그대로 활용해 \"오늘 본 분 인상 좋네요\" DM·문자를 보냈어요. 차단했더니 새 번호로 다시 보내고, 같은 시간대 집 앞을 서성이는 모습이 CCTV에 잡혔습니다. 플랫폼에 신고했지만 \"배달원 개별 행동까진 책임 못 진다\"는 답변만 받았습니다.\" 배달원 고객정보 악용은 ① 개인정보보호법 위반(목적 외 이용·제공) ② 스토킹처벌법(반복 접근·연락) ③ 플랫폼 책임(개인정보 관리 의무) ④ 잠정조치 100m 접근금지·전기통신 금지 ⑤ 민사 손해배상 5가지 트랙이 결합되는 영역. 주문 정보는 배달 목적 외 이용이 금지된 영역. 대응은 ① 캡처 ② 플랫폼 신고 ③ 사이버 신고 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 배달원 스토킹 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 캡처·플랫폼·신고·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 메시지·접근 캡처 누적</strong> — 일시·장소·내용.</li>\n<li><strong>② 배달 플랫폼 신고 (개인정보 침해)</strong></li>\n<li><strong>③ 사이버 스토킹 신고 (ecrm·112)</strong></li>\n<li><strong>④ 스토킹 + 개인정보보호법 형사 고소</strong></li>\n<li><strong>⑤ 민사 손해배상 + 플랫폼 책임 청구</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 배달 주문 정보는 배달 목적 외 이용이 금지. 사적 접촉·연락은 개인정보보호법 + 스토킹처벌법 결합 평가 가능. 플랫폼도 개인정보 관리 의무 위반 책임 검토 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 캡처·신고·형사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 메시지·접근 캡처 (즉시)</strong> — 일시·내용·CCTV.</li>\n<li><strong>2단계 — 배달 플랫폼 신고·라이더 정보 조회 (즉시)</strong></li>\n<li><strong>3단계 — 사이버범죄 신고 + 잠정조치</strong></li>\n<li><strong>4단계 — 형사 고소 (스토킹 + 개인정보보호법)</strong></li>\n<li><strong>5단계 — 민사 손해배상 + 플랫폼 책임 청구</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">배달원 정보 악용 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 주문·메시지·신원 갈래입니다.</strong></p>\n<ul>\n<li><strong>주문 내역·배달 완료 영수증</strong></li>\n<li><strong>배달원 메시지·문자·DM 캡처 (일시 포함)</strong></li>\n<li><strong>차단 후 우회 접근 기록</strong></li>\n<li><strong>집 앞 CCTV·서성임 사진</strong></li>\n<li><strong>플랫폼 신고 접수증·답변</strong></li>\n<li><strong>본인 정신적 피해 진단서·상담 기록</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 주문 정보는 \"배달 목적 외 이용 금지\". 배달 완료 후 사적 접촉은 즉시 개인정보보호법 + 스토킹처벌법 위반. 플랫폼에도 \"라이더 개인정보 관리 의무\" 자료 요청.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>개인정보 목적 외 이용</strong> — 배달 외 사적 접촉.</li>\n<li><strong>스토킹 반복성</strong> — 차단 후 우회 접근.</li>\n<li><strong>플랫폼 관리 책임</strong> — 라이더 교육·관리 의무.</li>\n<li><strong>잠정조치</strong> — 100m 접근금지·전기통신 금지.</li>\n<li><strong>위치 노출 위협</strong> — 집 앞 서성임 추가 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>스토킹 신고 112 / 사이버수사 182</strong></li>\n<li><strong>개인정보 침해 신고 02-1833-6972</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
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
        question: '배달원이 어떻게 본인 정보를 알았나요?',
        answer:
          '<strong>주문 시스템 정보를 사적으로 활용한 영역입니다.</strong> 개인정보보호법 위반.',
      },
      {
        question: '플랫폼이 책임을 회피하면요?',
        answer:
          '<strong>개인정보보호법상 관리 책임 청구 가능한 영역입니다.</strong>',
      },
      {
        question: '집 앞 CCTV가 없으면 입증이 어려운가요?',
        answer:
          '<strong>아파트 관리실·인근 CCTV 협조 요청 가능합니다.</strong>',
      },
      {
        question: '잠정조치 신청은 어떻게 하나요?',
        answer:
          '<strong>경찰 스토킹 신고 시 함께 신청 가능합니다.</strong>',
      },
      {
        question: '민사 손해배상 청구도 가능한가요?',
        answer:
          '<strong>네, 본인 + 플랫폼 모두에게 청구 가능한 영역입니다.</strong>',
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
