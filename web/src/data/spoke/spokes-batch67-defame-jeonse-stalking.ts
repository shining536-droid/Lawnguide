import { SpokePage } from '../spoke-pages';

// batch67 defame-jeonse-stalking — 7개 (2026-05-17)
//
// 고유 존재 이유:
// 1. defamation-naver-cafe-real-experience-comment-accused — 네이버 카페 실경험 후기로 명예훼손 고소당함 (사실적시 vs 공익성·310조 위법성조각).
// 2. defamation-chatbot-ai-generated-content — AI 챗봇이 생성한 허위 답변에 의한 명예훼손 (운영자/이용자 책임 분배 트랙).
// 3. defamation-broadcast-press-victim-secondary-leak — 정당 보도 이후 SNS 2차 가해 (보도사 + SNS 가해자 결합 책임).
// 4. jeonse-deposit-return-delay-monthly-interest-claim — 계약 종료 후 반환 지연 + 월 12% 지연이자 청구 트랙 (소상법 상한 결합).
// 5. jeonse-key-money-cash-receipt-no-paper — 현금·무영수증 보증금의 입증·복원 트랙 (계좌·증인·정황증거).
// 6. stalking-online-game-voice-chat — 온라인 게임 보이스챗 시작 + 게임 외 다중채널 추적 스토킹 트랙.
// 7. stalking-rental-property-landlord-resident — 임대인의 임차인 스토킹 (계약관계 + 무단 출입·감시 트랙).

export const spokesBatch67DefameJeonseStalking: SpokePage[] = [
  // ─── 1. defamation-naver-cafe-real-experience-comment-accused-track ───
  {
    domain: 'defamation',
    slug: 'defamation-naver-cafe-real-experience-comment-accused-track',
    keyword: '네이버 카페 실경험 후기 명예훼손',
    questionKeyword: '동네 헬스장 실경험 후기를 네이버 카페에 올렸는데 명예훼손으로 고소당했어요. 사실인데도 문제 되나요?',
    ctaKeyword: '네이버 카페 실경험 후기 명예훼손 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '네이버 카페 실경험 후기 명예훼손 — 5단계 사실적시·공익성 다툼 | 로앤가이드',
      description:
        '네이버 카페 실경험 후기로 명예훼손 고소를 받았다면 사실적시·공익성·310조 위법성조각 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"동네 헬스장에서 PT 결제 후 트레이너 교체·환불 거절 등을 겪고 네이버 동네 카페에 \"○○ 헬스장에서 이런 일이 있었습니다, 가입 전에 참고하세요\"라는 후기를 실명으로 올렸어요. 며칠 뒤 헬스장 측에서 \"허위·과장으로 영업방해다, 명예훼손이다\"라며 고소 통지가 도착했습니다. 본인은 실제 겪은 일을 그대로 적었을 뿐인데 처벌 범위가 막막한 영역입니다.\" 네이버 카페 실경험 후기 명예훼손은 ① 정보통신망법 70조 1·2항(사실/허위 적시) ② 사실적시도 비방 목적 + 공익성 부재 시 처벌 영역 ③ 형법 310조 위법성조각(진실 + 공공의 이익) ④ 동네 카페 회원 = "공익성 인정 가능한 정보 공동체" ⑤ 반의사불벌 5가지 트랙이 결합되는 영역. 혐의를 받고 있다면 \"다른 카페 회원·소비자에게 정보 제공\" 공익성 입증이 면책 트랙. 대응은 ① 후기 보존 ② 진실성 자료 ③ 공익성 입증 ④ 합의 ⑤ 방어 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 네이버 카페 실경험 후기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 후기·진실·공익·합의·방어 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 후기 내용 분석</strong> — 사실 적시 vs 의견·평가.</li>\n<li><strong>② 진실성 입증</strong> — 결제 영수증·카톡·문자·녹취록.</li>\n<li><strong>③ 공익성 입증</strong> — 동네 카페 회원·소비자 정보 제공 측면.</li>\n<li><strong>④ 합의 검토</strong> — 일부 표현 수정·삭제.</li>\n<li><strong>⑤ 형법 310조 위법성조각 변론</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사실과 다르게 신고되었다면 진실한 사실 + 공공의 이익 변론. 결제·환불 거절 자료가 진실성 입증의 핵심. 표현이 "허위" "악의적 비방" 색채면 보호 약화. 의견 표명("불친절하다")은 보호 영역 더 넓음.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·상담·방어 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 후기 원본·결제 자료 보존 (즉시)</strong> — 후기 캡처·영수증·카톡.</li>\n<li><strong>2단계 — 변호인 상담 (1주 내)</strong> — 표현·공익성 평가.</li>\n<li><strong>3단계 — 카페 회원 진술·유사 후기 자료 정리</strong></li>\n<li><strong>4단계 — 합의·일부 수정 검토</strong></li>\n<li><strong>5단계 — 경찰·검찰 조사 대응·민사 방어</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">카페 후기 명예훼손 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 후기·진실·공익 갈래입니다.</strong></p>\n<ul>\n<li><strong>후기 원본·URL·작성일시 캡처</strong></li>\n<li><strong>결제 영수증·계약서·환불 거절 자료</strong></li>\n<li><strong>업체와의 카톡·문자·통화 녹음</strong></li>\n<li><strong>다른 카페 회원 유사 후기·진술서</strong></li>\n<li><strong>고소장·경찰 통지서</strong></li>\n<li><strong>본인 카페 활동 이력·실명 자료</strong></li>\n<li><strong>변호인 의견서·면담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 동네 카페·맘카페 후기는 회원만 보지만 정통망법 70조 \"공공연성\" 인정 영역. 단, 회원 다수에게 정보 제공 의도면 공익성 강화. "환불 거절 사실" 같은 객관적 사실은 보호, "사기꾼이다" 같은 평가는 보호 약화.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>비방 목적</strong> — 보복성 vs 정보 공유 측면.</li>\n<li><strong>공익성</strong> — 동네 카페 회원·소비자 정보 제공.</li>\n<li><strong>진실성</strong> — 결제·환불 자료와 일치.</li>\n<li><strong>사실 vs 의견</strong> — "불친절"은 보호 영역.</li>\n<li><strong>공공연성</strong> — 회원 다수에게 전파 가능성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실적시와 공공의 이익',
        summary:
          '대구지방법원 2023고합389(2024.01.26 선고) 영역에서 법원은 사실 적시에 일부 사익적 동기가 포함되더라도 그 주된 동기와 목적이 사회 일반의 소비자·근로자 등에게 정보를 제공하는 공익적 측면이라면 형법 제310조에 의해 위법성이 조각될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '실경험 사실 + 공익성(소비자 정보 제공)은 위법성조각 트랙. 표현이 객관 사실 위주면 보호 강화.',
      },
    ],
    faq: [
      {
        question: '회원만 보는 카페에 올려도 명예훼손인가요?',
        answer:
          '<strong>회원 다수 전파 가능성이 있으면 공공연성 인정 영역입니다.</strong>',
      },
      {
        question: '실제 겪은 일만 적었는데도 처벌받나요?',
        answer:
          '<strong>사실적시도 비방 목적 + 공익성 부재 시 평가 영역입니다.</strong>',
      },
      {
        question: '"불친절하다" 같은 평가도 명예훼손인가요?',
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

  // ─── 2. defamation-chatbot-ai-generated-content-track ───
  {
    domain: 'defamation',
    slug: 'defamation-chatbot-ai-generated-content-track',
    keyword: 'AI 챗봇 생성 명예훼손',
    questionKeyword: '챗GPT 같은 AI 챗봇이 저에 대해 거짓 사실을 생성·유포하는 답변을 만들었어요. 누구를 상대로 신고하나요?',
    ctaKeyword: 'AI 챗봇 명예훼손 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'AI 챗봇 생성 명예훼손 — 5단계 운영자·이용자 책임 다툼 | 로앤가이드',
      description:
        'AI 챗봇이 거짓 사실을 생성·유포한 명예훼손이라면 운영자·이용자 책임 분배 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인 이름을 검색했더니 AI 챗봇이 \"○○○은 과거 사기 전과가 있다\"는 식의 거짓 답변을 생성했어요. 누군가 본인 직장에 캡처해서 돌리는 바람에 평판이 크게 훼손된 상황입니다. 챗봇 운영사에 삭제 요청을 했지만 \"AI가 자동 생성한 것이라 책임이 제한된다\"는 답변을 받았어요. 누구를 상대로 신고해야 하는지 막막한 영역입니다.\" AI 챗봇 명예훼손은 ① 정보통신망법 70조 명예훼손 ② AI 운영사 관리 의무(콘텐츠 검수·삭제 응대) ③ 챗봇 답변을 캡처·유포한 이용자 책임 ④ 개인정보보호법 결합(이름·신상 조합) ⑤ 민사 손해배상 5가지 트랙이 결합되는 영역. AI가 자동 생성했더라도 운영사는 \"명백한 허위 인지 + 삭제 의무 위반\" 시 책임 평가 가능. 대응은 ① 캡처·로그 ② 운영사 삭제 요청 ③ 유포자 추적 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. AI 챗봇 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 캡처·삭제·추적·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 챗봇 답변 화면 캡처·URL 보존</strong></li>\n<li><strong>② AI 운영사에 공식 삭제 요청</strong> — 응대 기록.</li>\n<li><strong>③ 캡처·유포한 이용자 추적 (IP·SNS)</strong></li>\n<li><strong>④ 형사 명예훼손 고소 (운영사 + 유포자)</strong></li>\n<li><strong>⑤ 민사 손해배상·콘텐츠 삭제 가처분</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: AI 챗봇 자동 생성도 \"운영사 관리 의무\" 영역. 운영사가 명백한 허위를 인지하고도 삭제·차단을 안 하면 책임 평가 가능. 캡처해 유포한 이용자는 독립 책임 부담.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 캡처·삭제·추적 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 챗봇 답변 화면·재현 가능 프롬프트 보존 (즉시)</strong></li>\n<li><strong>2단계 — AI 운영사·플랫폼 공식 삭제 요청 (3~7일 내)</strong></li>\n<li><strong>3단계 — 캡처·SNS 유포자 추적·신원 확인</strong></li>\n<li><strong>4단계 — 형사 명예훼손 고소</strong></li>\n<li><strong>5단계 — 민사 손해배상 + 삭제 가처분</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">AI 챗봇 명예훼손 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 캡처·운영사·유포자 갈래입니다.</strong></p>\n<ul>\n<li><strong>챗봇 답변 화면 캡처·일시·재현 프롬프트</strong></li>\n<li><strong>본인 이름·신상이 명확히 특정되는 자료</strong></li>\n<li><strong>운영사 공식 삭제 요청 메일·답변</strong></li>\n<li><strong>캡처·유포된 SNS·메신저 자료</strong></li>\n<li><strong>본인 직장·평판 피해 자료 (메일·진술)</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n<li><strong>변호인 의견서·면담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 챗봇 답변은 새로 생성될 때마다 달라질 수 있으므로 캡처 즉시 보존이 핵심. 재현 가능한 프롬프트·시점·계정 정보까지 함께 보존하면 운영사 책임 입증에 유효.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>AI 운영사 책임</strong> — 명백한 허위 인지·삭제 의무.</li>\n<li><strong>이용자 책임</strong> — 캡처·유포·재공유.</li>\n<li><strong>특정성</strong> — 이름·신상 조합으로 본인 특정.</li>\n<li><strong>허위성 입증</strong> — 본인 무관 자료.</li>\n<li><strong>국외 운영사</strong> — 송달·집행 어려움.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 침해 신고 02-1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정치인 허위사실·증명책임',
        summary:
          '대법원 2022다242649(2025.06.26 선고) 영역에서 법원은 명예훼손에서 사실적 주장이 진실한지를 판단할 때, 의혹을 받을 사실이 없다고 주장하는 사람에 대하여 그 의혹을 제기하는 사람이 사실의 존재를 수긍할 만한 소명자료를 제시할 부담을 진다고 본 사례 흐름이 있습니다.',
        takeaway: 'AI 챗봇 답변도 \"주장하는 측\"이 사실 근거 제시 부담. 본인 무관 입증으로 허위 증명 트랙.',
      },
    ],
    faq: [
      {
        question: 'AI가 자동 생성한 답변도 누군가 책임지나요?',
        answer:
          '<strong>운영사가 명백한 허위 인지 + 삭제 의무 위반 시 책임 평가 가능합니다.</strong>',
      },
      {
        question: '캡처해서 유포한 사람도 책임 있나요?',
        answer:
          '<strong>네, 유포자도 독립적 명예훼손 책임 부담 영역입니다.</strong>',
      },
      {
        question: '운영사가 외국 회사면 어떻게 하나요?',
        answer:
          '<strong>국내 사무소·대리인을 통한 송달, 방송통신심의위 차단 신고 병행 가능합니다.</strong>',
      },
      {
        question: '챗봇 답변이 매번 달라지면 입증이 어려운가요?',
        answer:
          '<strong>캡처·재현 프롬프트 보존이 핵심이며 다수 캡처가 입증에 유효합니다.</strong>',
      },
      {
        question: '민사 손해배상 청구도 가능한가요?',
        answer:
          '<strong>네, 운영사 + 유포자 모두에게 청구 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '명예훼손 피해 대응 순서, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 피해 대응', href: '/guide/defamation/defamation-victim-response' },
      { label: '온라인 명예훼손', href: '/guide/defamation/defamation-online-procedure' },
      { label: '삭제 가처분', href: '/guide/defamation/defamation-takedown-injunction' },
      { label: '손해배상 청구', href: '/guide/defamation/defamation-damage-claim' },
      { label: '개인정보 침해', href: '/guide/defamation/defamation-privacy-protection' },
    ],
  },

  // ─── 3. defamation-broadcast-press-victim-secondary-leak-track ───
  {
    domain: 'defamation',
    slug: 'defamation-broadcast-press-victim-secondary-leak-track',
    keyword: '방송 보도 후 SNS 2차 가해',
    questionKeyword: '신문 보도 이후 제 신상이 SNS에 무차별 노출되고 욕설이 쏟아져요. 보도사·SNS 가해자 모두 책임 있나요?',
    ctaKeyword: '보도 후 SNS 2차 가해 명예훼손 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '보도 후 SNS 2차 가해 — 5단계 언론사·가해자 결합 책임 | 로앤가이드',
      description:
        '정당 보도 후 SNS 2차 가해·욕설 폭주를 겪었다면 언론사 책임 + SNS 가해자 결합 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인이 사회적 사건에 연루된 사실이 신문에 보도된 이후 SNS·커뮤니티에 본인의 직장·실명·사진이 빠르게 퍼지면서 욕설·조롱·인신공격 댓글이 쏟아졌어요. 본인은 결국 무혐의·무죄 결과를 받았는데 이미 평판은 무너졌습니다. 보도사는 \"공익 보도였다\"고 하고, SNS 가해자들은 \"나는 그냥 옮긴 것뿐\"이라며 책임을 회피합니다.\" 보도 후 2차 가해는 ① 언론사 책임(공익성 vs 인격권 침해, 과잉 보도) ② SNS 가해자 책임(허위·악의적 비방) ③ 신상 노출·개인정보보호법 결합 ④ 정정보도청구·반론보도 ⑤ 민사 손해배상 5가지 트랙이 결합되는 영역. 정당 보도 후에도 \"공직자 개인에 대한 악의적·심히 경솔한 공격\"은 보호 약화. 대응은 ① 자료 ② 정정보도 ③ SNS 추적 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 보도 후 SNS 2차 가해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·정정·추적·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 보도·SNS 댓글·확산 경로 캡처</strong></li>\n<li><strong>② 정정보도·반론보도 청구 (언론중재위)</strong></li>\n<li><strong>③ SNS 가해자 IP·계정 추적 (사이버수사)</strong></li>\n<li><strong>④ 형사 명예훼손·모욕·정보통신망법 고소</strong></li>\n<li><strong>⑤ 민사 손해배상 (언론사 + 가해자 결합)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 언론 보도라도 \"공직자 개인에 대한 악의적이거나 심히 경솔한 공격\"이면 보호 약화. SNS 2차 가해자는 보도 인용을 빌미로 한 별개 책임 부담. 결합 청구 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·정정·추적 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 보도·SNS 자료 보존 (즉시)</strong> — 기사·댓글·확산 경로.</li>\n<li><strong>2단계 — 언론중재위 정정·반론보도 청구 (3개월 내)</strong></li>\n<li><strong>3단계 — 사이버 수사·SNS 가해자 추적</strong></li>\n<li><strong>4단계 — 형사 명예훼손·모욕 고소</strong></li>\n<li><strong>5단계 — 민사 손해배상 (언론사 + 가해자)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">보도 후 2차 가해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 보도·SNS·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>원본 기사 캡처·URL·게재일시</strong></li>\n<li><strong>SNS·커뮤니티 댓글·게시물 캡처</strong></li>\n<li><strong>본인 무혐의·무죄 결정문 (사건 종결 시)</strong></li>\n<li><strong>본인 직장·평판 피해 자료</strong></li>\n<li><strong>언론중재위 조정 신청서·답변</strong></li>\n<li><strong>본인 정신적 피해 진단서·상담 기록</strong></li>\n<li><strong>변호인 의견서·면담 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 언론중재위 조정은 보도일 또는 보도 사실 안 날부터 3개월·6개월 내 신청. 보도사가 응하지 않으면 정정보도소송으로 이행 가능. SNS 가해자는 별도 사이버 신고 트랙.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>언론 공익성</strong> — 공직자·공인 vs 사인.</li>\n<li><strong>과잉 보도</strong> — 악의적·심히 경솔한 공격.</li>\n<li><strong>SNS 가해자 책임</strong> — 보도 인용·별개 비방.</li>\n<li><strong>신상 노출</strong> — 직장·실명·사진.</li>\n<li><strong>전파성</strong> — 확산 속도·범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>언론중재위원회 02-397-3114</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 언론보도와 위법성조각',
        summary:
          '대법원 2021다270654(2024.05.09 선고) 영역에서 법원은 공공적·사회적인 의미를 가진 사안에 관한 표현의 경우 언론의 자유에 대한 제한이 완화되어야 하지만, 그 보도가 정당한 언론활동의 범위를 벗어나 개인에 대한 악의적이거나 심히 경솔한 공격으로서 현저히 상당성을 잃은 것인지는 표현의 내용·방식·취재과정 등을 종합 고려해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '언론도 \"악의적·현저히 상당성 결여\" 시 책임. SNS 2차 가해는 별개 평가 트랙.',
      },
    ],
    faq: [
      {
        question: '보도사·SNS 가해자 동시에 청구 가능한가요?',
        answer:
          '<strong>네, 결합 청구 또는 별개 청구 모두 가능한 영역입니다.</strong>',
      },
      {
        question: '정정보도 청구는 언제까지 가능한가요?',
        answer:
          '<strong>보도일 또는 안 날부터 3개월·6개월 내 신청해야 하는 영역입니다.</strong>',
      },
      {
        question: '익명 SNS 가해자를 어떻게 찾나요?',
        answer:
          '<strong>사이버수사대 IP 추적·플랫폼 협조로 신원 확인 가능합니다.</strong>',
      },
      {
        question: '무혐의·무죄 결과를 받았는데 보도는 그대로면요?',
        answer:
          '<strong>정정보도·반론보도 청구로 시정 가능한 영역입니다.</strong>',
      },
      {
        question: '손해배상은 얼마 수준까지 청구되나요?',
        answer:
          '<strong>피해 정도·확산 범위에 따라 사례별 차이가 큰 영역입니다.</strong> 변호인 상담 권장.',
      },
    ],
    cta: { text: '명예훼손 피해 대응 순서, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 피해 대응', href: '/guide/defamation/defamation-victim-response' },
      { label: '언론 보도 대응', href: '/guide/defamation/defamation-press-coverage' },
      { label: '온라인 명예훼손', href: '/guide/defamation/defamation-online-procedure' },
      { label: '삭제 가처분', href: '/guide/defamation/defamation-takedown-injunction' },
      { label: '손해배상 청구', href: '/guide/defamation/defamation-damage-claim' },
    ],
  },

  // ─── 4. jeonse-deposit-return-delay-monthly-interest-claim-track ───
  {
    domain: 'jeonse',
    slug: 'jeonse-deposit-return-delay-monthly-interest-claim-track',
    keyword: '보증금 반환 지연 월 12% 이자',
    questionKeyword: '계약 종료 후 3개월째 보증금 반환을 미루는 임대인. 월 12% 지연이자 청구할 수 있나요?',
    ctaKeyword: '보증금 반환 지연 이자 청구 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '보증금 반환 지연 월 12% 이자 — 5단계 지연이자·소송 다툼 | 로앤가이드',
      description:
        '계약 종료 후 임대인이 보증금 반환을 미루고 있다면 지연이자(소상법 12% 상한) + 임차권등기 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세 2년 계약 종료일에 맞춰 새 집으로 이사 갔는데, 임대인이 \"다음 임차인이 들어와야 보증금을 돌려준다\"며 3개월째 반환을 미루고 있어요. 본인은 새 집 잔금을 위해 대출까지 받은 상황. 보증금에 대한 지연이자라도 청구하고 싶은데 \"월 12%\" \"소상법 상한\" 같은 정보가 막막한 영역입니다.\" 보증금 반환 지연은 ① 민법 379조(법정이자 연 5%) + 소송촉진법(소제기 후 연 12%) ② 임차권등기명령으로 대항력·우선변제권 유지 ③ \"다음 임차인 못 찾았다\"는 임대인 사유는 면책 사유 아님(이행지체 평가) ④ HUG 보증보험 가입 시 이행청구 ⑤ 보증금반환 청구소송 + 강제집행 5가지 트랙이 결합되는 영역. 대응은 ① 내용증명 ② 임차권등기 ③ 소송 ④ HUG ⑤ 강제집행 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 보증금 반환 지연·지연이자 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 내용증명·등기·소송·HUG·집행 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 내용증명 송부 (반환 요구·지연이자 통지)</strong></li>\n<li><strong>② 임차권등기명령 신청</strong> — 대항력·우선변제권 유지.</li>\n<li><strong>③ 보증금반환 청구소송 (소제기 후 연 12% 지연이자)</strong></li>\n<li><strong>④ HUG 이행청구 (가입 시·계약 종료 후 2년 내)</strong></li>\n<li><strong>⑤ 강제집행 (부동산 경매·채권 압류)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임대인의 \"다음 임차인 미입주\"는 면책 사유 아님. 계약 종료일이 이행기. 소제기 후엔 소송촉진법에 따라 연 12% 지연이자 적용 영역. 미리 내용증명에서 \"연 5%(민법)\"부터 청구 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 내용증명·등기·소송 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 내용증명 송부 (즉시)</strong> — 반환 요구·지연이자 명시.</li>\n<li><strong>2단계 — 임차권등기명령 신청 (1~2개월)</strong></li>\n<li><strong>3단계 — 보증금반환 청구소송 (소제기 후 12%)</strong></li>\n<li><strong>4단계 — HUG 이행청구 (가입 시, 2년 내)</strong></li>\n<li><strong>5단계 — 강제집행 (경매·채권압류·추심)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">보증금 반환 지연 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·통지·등기 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·확정일자·전입신고증</strong></li>\n<li><strong>등기부등본·임대인 인적사항</strong></li>\n<li><strong>계약 종료·이사 완료 자료 (퇴거확인·우편물)</strong></li>\n<li><strong>내용증명·메시지·통화 기록</strong></li>\n<li><strong>HUG 보증증서·보증보험 가입 자료</strong></li>\n<li><strong>본인 신분증·진술서·새 집 계약서 (피해 입증)</strong></li>\n<li><strong>임차권등기 신청서 (1~2개월 후 등기 완료)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이사 후 점유 상실 + 임차권등기 전이면 대항력·우선변제권 일시 단절 위험 영역. 먼저 임차권등기 완료 확인 후 이사 권장. 등기 완료가 \"대항력·우선변제권 회복\"의 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>이행지체 시점</strong> — 계약 종료일 = 이행기.</li>\n<li><strong>면책 사유</strong> — "다음 임차인 미입주"는 면책 아님.</li>\n<li><strong>지연이자율</strong> — 소제기 전 연 5% / 후 12%.</li>\n<li><strong>임차권등기 효력 시점</strong> — 등기 완료 시 발생.</li>\n<li><strong>HUG 이행청구 기간</strong> — 계약 종료 후 2년 내.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>주택임대차분쟁조정위원회 1670-7777</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보증금 반환 이행지체',
        summary:
          '대법원 2024다321973(2025.05.15 선고) 영역에서 법원은 임대인이 새로운 임차인이 들어오지 않으면 임차보증금을 반환할 수 없다는 뜻을 명백히 한 경우, 임차인이 인도의무 이행을 제공하더라도 임대인이 상당한 기간 내에 자신의 보증금반환의무를 이행할 수 없음이 객관적으로 명백한 경우에 해당하므로 임차인은 자신의 인도의무 이행을 제공하지 않더라도 임대인의 보증금반환의무 이행지체를 이유로 손해배상을 청구할 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '\"다음 임차인 미입주\"는 면책 아님. 임대인 이행지체로 손해배상 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '계약 종료일부터 바로 지연이자가 발생하나요?',
        answer:
          '<strong>네, 종료일이 이행기이므로 그 다음 날부터 연 5% 영역입니다.</strong>',
      },
      {
        question: '"다음 임차인 못 찾았다"는 게 면책 사유인가요?',
        answer:
          '<strong>아닙니다. 임대인의 사정일 뿐 면책 사유는 아닌 영역입니다.</strong>',
      },
      {
        question: '소송 전에 12% 지연이자 청구 가능한가요?',
        answer:
          '<strong>소제기 전엔 연 5%, 소제기 후엔 연 12% 적용 영역입니다.</strong>',
      },
      {
        question: '이사 후엔 대항력이 사라지나요?',
        answer:
          '<strong>임차권등기 전에 점유 상실하면 대항력 단절 위험 영역입니다.</strong>',
      },
      {
        question: 'HUG 가입했으면 이행청구가 우선인가요?',
        answer:
          '<strong>네, 계약 종료 후 2년 내 이행청구로 빠른 회수 검토 가능합니다.</strong>',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '보증금 반환 절차', href: '/guide/jeonse/jeonse-deposit-return-procedure' },
      { label: '임차권등기명령', href: '/guide/jeonse/jeonse-tenant-right-registration' },
      { label: '지연이자 청구', href: '/guide/jeonse/jeonse-delay-interest-claim' },
      { label: 'HUG 이행청구', href: '/guide/jeonse/jeonse-hug-claim-procedure' },
      { label: '강제집행 절차', href: '/guide/jeonse/jeonse-enforcement-procedure' },
    ],
  },

  // ─── 5. jeonse-key-money-cash-receipt-no-paper-track ───
  {
    domain: 'jeonse',
    slug: 'jeonse-key-money-cash-receipt-no-paper-track',
    keyword: '전세 현금 영수증 없을 때 입증',
    questionKeyword: '5년 전 1억 5천 전세 보증금을 현금으로 줬는데 영수증을 못 받았어요. 지금 반환 청구하려면 어떻게 입증하나요?',
    ctaKeyword: '현금 보증금 입증 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '전세 현금 영수증 없을 때 입증 — 5단계 정황증거 다툼 | 로앤가이드',
      description:
        '현금으로 준 전세 보증금을 영수증 없이 입증해야 한다면 계좌·증인·정황증거 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"5년 전 친척 소개로 임대차계약을 맺으면서 \"가족끼리 편하게\"라며 보증금 1억 5천을 현금으로 전달했어요. 영수증도 안 받았고, 일부는 계좌 이체·일부는 봉투로 줬습니다. 이제 계약 종료를 앞두고 보증금을 돌려달라고 했더니 임대인이 \"그렇게 큰 금액을 현금으로 받은 적 없다\"고 잡아떼는 영역입니다.\" 현금·무영수증 보증금 입증은 ① 계약서 자체에 보증금 액수 명시 시 1차 증거 ② 계좌 이체 일부분만 있어도 정황증거 ③ 증인(소개해준 친척·중개인) ④ 카톡·문자에서 보증금 언급 ⑤ 임대차 시작 후 임대인 부동산 취득·소비 정황 5가지 트랙이 결합되는 영역. 입증책임은 임차인 측이지만 정황증거 누적으로 보증금 전달 사실 추정 가능. 대응은 ① 계약서·자료 ② 계좌·문자 ③ 증인 ④ 정황증거 ⑤ 소송 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 현금 보증금 입증 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약서·계좌·증인·정황·소송 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 임대차계약서·확정일자 확인</strong> — 보증금 액수 명시.</li>\n<li><strong>② 계좌 이체 내역 일부 확보</strong> — 부분 이체라도 정황.</li>\n<li><strong>③ 증인 진술서 (소개자·중개인·가족)</strong></li>\n<li><strong>④ 카톡·문자에서 보증금 언급 발췌</strong></li>\n<li><strong>⑤ 보증금반환 청구소송 + 정황증거 종합</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 계약서에 보증금 액수가 명시되어 있으면 임대인이 \"받은 적 없다\"는 부인이 어려운 영역. 일부 계좌 이체 + 임대차 점유 + 확정일자가 결합되면 \"전체 보증금 전달\" 추정 가능 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·증인·소송 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임대차계약서·확정일자·전입신고 자료 확보 (즉시)</strong></li>\n<li><strong>2단계 — 계좌 이체·카톡·문자 발췌 (보증금 언급)</strong></li>\n<li><strong>3단계 — 증인 진술서 받기 (소개자·중개인·가족)</strong></li>\n<li><strong>4단계 — 내용증명 송부·반환 청구</strong></li>\n<li><strong>5단계 — 보증금반환 청구소송 + 정황증거 종합 입증</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">현금 보증금 입증 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·이체·증인 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서 (보증금 액수 명시)·확정일자</strong></li>\n<li><strong>전입신고증·주민등록등본</strong></li>\n<li><strong>일부라도 보증금 관련 계좌 이체 내역</strong></li>\n<li><strong>임대인과의 카톡·문자·통화 녹음 (보증금 언급)</strong></li>\n<li><strong>증인 진술서 (소개자·중개인·가족)</strong></li>\n<li><strong>임대차 시작 후 임대인 부동산 취득·소비 정황 자료</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \"가족끼리\"라며 영수증 미수령한 경우가 가장 흔한 분쟁 영역. 임대차계약서가 정식으로 작성되어 있고 확정일자·전입신고가 있다면 보증금 \"존재\" 자체는 강한 추정. 임대인이 \"받지 않았다\" 주장은 부인 부담 큼.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>입증책임</strong> — 임차인 측이지만 정황증거 누적 가능.</li>\n<li><strong>계약서 효력</strong> — 보증금 액수 명시 시 강한 추정.</li>\n<li><strong>계좌 이체 부분</strong> — 일부만 있어도 보강 자료.</li>\n<li><strong>증인 신빙성</strong> — 친척 vs 제3자.</li>\n<li><strong>임대인 부동산 자금 출처</strong> — 정황증거.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>주택임대차분쟁조정위원회 1670-7777</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다가구주택 임대차보증금 입증',
        summary:
          '대법원 2023다259743(2023.11.30 선고) 영역에서 법원은 임대차보증금에 관한 입증을 다툴 때 임대인이 구두로 확인한 보증금 총액·확정일자·중개대상물 확인설명서 기재 내용 등 권리관계 자료를 성실하고 정확하게 제공할 의무가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '계약서·확정일자·중개 자료가 보증금 존재 추정 트랙. 정황증거 결합으로 입증 강화.',
      },
    ],
    faq: [
      {
        question: '계약서에 적힌 보증금 액수만으로 입증되나요?',
        answer:
          '<strong>강한 추정 자료이며 임대인이 부인하려면 부담이 큰 영역입니다.</strong>',
      },
      {
        question: '일부만 계좌 이체했는데 입증될까요?',
        answer:
          '<strong>부분 이체 + 계약서 + 점유 결합 시 정황증거로 강화 영역입니다.</strong>',
      },
      {
        question: '증인이 친척인데 진술 신빙성 인정되나요?',
        answer:
          '<strong>친척 진술도 다른 자료와 결합 시 신빙성 평가 영역입니다.</strong>',
      },
      {
        question: '5년 지났는데 시효는 어떻게 되나요?',
        answer:
          '<strong>보증금반환 채권 시효는 10년이라 청구 가능한 영역입니다.</strong>',
      },
      {
        question: '소액사건이면 변호사 없이도 가능한가요?',
        answer:
          '<strong>3,000만원 이하면 소액사건이지만 1억 5천은 일반 민사 영역입니다.</strong> 변호인 상담 권장.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '보증금 반환 절차', href: '/guide/jeonse/jeonse-deposit-return-procedure' },
      { label: '임차권등기명령', href: '/guide/jeonse/jeonse-tenant-right-registration' },
      { label: '보증금 입증 자료', href: '/guide/jeonse/jeonse-deposit-evidence' },
      { label: '주택임대차분쟁조정', href: '/guide/jeonse/jeonse-mediation-procedure' },
      { label: '소액임차인 보호', href: '/guide/jeonse/jeonse-small-tenant-priority' },
    ],
  },

  // ─── 6. stalking-online-game-voice-chat-track ───
  {
    domain: 'stalking',
    slug: 'stalking-online-game-voice-chat-track',
    keyword: '온라인 게임 보이스챗 스토킹',
    questionKeyword: '온라인 게임 보이스챗에서 만난 사람이 게임 외 카톡·SNS로 매일 수십 통 연락하고 거절해도 안 멈춰요.',
    ctaKeyword: '게임 보이스챗 스토킹 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '게임 보이스챗 스토킹 — 5단계 다중채널·접근금지 다툼 | 로앤가이드',
      description:
        '게임 보이스챗에서 시작된 스토킹이 카톡·SNS 다중 채널로 번졌다면 스토킹처벌법·접근금지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"파티 매칭 게임에서 보이스챗으로 알게 된 사람이 게임 내 채팅으로 카톡 ID를 요구해 알려줬어요. 그 뒤로 매일 수십 통의 카톡·인스타 DM·문자가 옵니다. \"지금 뭐해\" \"답장 왜 안 해\" \"화났어?\" 같은 메시지가 새벽까지 이어지고, 차단하면 새 계정으로 다시 보내요. 본인은 게임 내에선 보지 못해서 정체도 모르는데 일상 채널은 모두 노출된 영역입니다.\" 게임 보이스챗 시작 스토킹은 ① 스토킹처벌법 \"지속·반복 연락\" 충족 ② 다중채널(카톡·DM·문자) 결합 → 우회 접근 강화 ③ 게임 운영사 협조(가해자 계정·로그) ④ 잠정조치 100m 접근금지·전기통신 금지 ⑤ 형사·민사 5가지 트랙이 결합되는 영역. 대응은 ① 증거 누적 ② 운영사 신고 ③ 사이버 신고 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 게임 보이스챗 스토킹 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·운영사·신고·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 카톡·DM·문자 캡처 누적</strong> — 일시·횟수·내용.</li>\n<li><strong>② 게임 운영사 신고·가해자 계정 로그</strong></li>\n<li><strong>③ 사이버 스토킹 신고 (ecrm·112)</strong></li>\n<li><strong>④ 잠정조치 100m 접근금지·전기통신 금지</strong></li>\n<li><strong>⑤ 형사 + 민사 손해배상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 게임 보이스챗에서 시작했어도 게임 외 채널로 옮겨와 \"지속·반복\" 연락이면 스토킹처벌법 영역. 차단 후 새 계정·우회 접근은 가중 평가 사유. 게임 운영사 로그가 가해자 신원 입증의 핵심 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·운영사·신고 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 카톡·DM·문자·통화 기록 (즉시)</strong></li>\n<li><strong>2단계 — 게임 운영사 신고·가해자 계정 로그 요청</strong></li>\n<li><strong>3단계 — 사이버범죄 신고 (ecrm·112) + 잠정조치</strong></li>\n<li><strong>4단계 — 스토킹처벌법 형사 고소</strong></li>\n<li><strong>5단계 — 민사 손해배상·치료비 청구</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">게임 보이스챗 스토킹 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·계정·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>카톡·DM·문자 캡처 (일시·횟수 정렬)</strong></li>\n<li><strong>차단 후 우회 접근 기록 (새 계정·번호)</strong></li>\n<li><strong>게임 내 보이스챗 녹음·매칭 기록</strong></li>\n<li><strong>게임 운영사 신고 접수증·로그 자료</strong></li>\n<li><strong>본인 ID·계정·노출 정보 자료</strong></li>\n<li><strong>본인 정신적 피해 진단서·상담 기록</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 게임 운영사 로그는 가해자 본인 확인의 핵심 자료. 보이스챗·매칭 기록·계정 정보 요청 시 경찰 사실조회·운영사 협조 절차 활용. 차단 후 우회는 시점·방법 모두 캡처 필수.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>지속·반복 요건</strong> — 횟수·일시 기록.</li>\n<li><strong>본인 동의 단절</strong> — "그만 보내세요" 명시 기록.</li>\n<li><strong>다중 채널 결합</strong> — 카톡·DM·문자.</li>\n<li><strong>차단 후 우회</strong> — 새 계정·번호.</li>\n<li><strong>가해자 신원 확인</strong> — 게임 운영사 로그.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>스토킹 신고 112 / 사이버수사 182</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전화·메시지 스토킹',
        summary:
          '대법원 2022도12037(2023.05.18 선고) 영역에서 법원은 피고인이 피해자의 의사에 반하여 정당한 이유 없이 전화·메시지를 도달하게 한 행위는 통화 내용이 불안감 또는 공포심을 일으키는 것이었음이 밝혀지지 않더라도 행위 전후의 여러 사정을 종합하여 피해자의 불안감 또는 공포심을 일으키는 것으로 평가되면 스토킹행위에 해당한다고 본 사례 흐름이 있습니다.',
        takeaway: '카톡·DM·문자 등 전기통신 반복 도달은 내용 무관 스토킹 평가 영역. 다중채널 결합 시 가중.',
      },
    ],
    faq: [
      {
        question: '게임 내 보이스챗만 있었는데 스토킹인가요?',
        answer:
          '<strong>게임 외 채널로 옮겨와 지속·반복 연락이면 스토킹 평가 영역입니다.</strong>',
      },
      {
        question: '차단했는데 새 번호로 계속 보내요',
        answer:
          '<strong>우회 접근은 스토킹 강화 평가 영역입니다.</strong> 즉시 신고.',
      },
      {
        question: '게임 운영사가 가해자 정보를 안 줘요',
        answer:
          '<strong>경찰 사실조회·압수수색 영장으로 협조 가능한 영역입니다.</strong>',
      },
      {
        question: '잠정조치는 얼마나 빨리 받나요?',
        answer:
          '<strong>신청 후 즉시~며칠 내 발효 가능한 영역입니다.</strong>',
      },
      {
        question: '본인이 처음에 카톡 ID를 줬으면 책임이 있나요?',
        answer:
          '<strong>아닙니다. 동의 철회 후 지속 연락은 스토킹 평가 영역입니다.</strong>',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 신고 절차', href: '/guide/stalking/stalking-complaint-procedure' },
      { label: '접근금지·잠정조치', href: '/guide/stalking/stalking-protection-order' },
      { label: '사이버 스토킹', href: '/guide/stalking/stalking-cyber-procedure' },
      { label: '온라인 게임 스토킹', href: '/guide/stalking/stalking-online-game-channel-rejection-track' },
      { label: '손해배상 청구', href: '/guide/stalking/stalking-damage-claim' },
    ],
  },

  // ─── 7. stalking-rental-property-landlord-resident-track ───
  {
    domain: 'stalking',
    slug: 'stalking-rental-property-landlord-resident-track',
    keyword: '임대인 임차인 스토킹',
    questionKeyword: '집주인이 비밀번호로 무단 출입하거나 출퇴근 시간을 매일 확인해요. 임차인 보호받을 수 있나요?',
    ctaKeyword: '임대인 스토킹 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임대인 임차인 스토킹 — 5단계 무단출입·접근금지 다툼 | 로앤가이드',
      description:
        '집주인의 무단 출입·감시·반복 접근으로 스토킹 피해를 겪었다면 스토킹처벌법·주거침입 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세 1억 5천 계약을 맺고 입주한 지 6개월. 집주인이 \"수리 점검\"을 명목으로 본인 부재 중 비밀번호로 무단 출입했어요. CCTV 확인 결과 출퇴근 시간을 매일 체크하는 듯한 패턴도 발견됐습니다. 항의했더니 \"내 집이니 들어갈 수 있다\"는 답변. 본인은 잠도 못 자고 비밀번호를 바꿔도 다시 알아내는 것 같아 불안한 영역입니다.\" 임대인 스토킹은 ① 스토킹처벌법(지속·반복 접근·감시) ② 주거침입죄(임대차 점유는 임차인 영역, 임대인 무단 출입은 침입) ③ 잠정조치 100m 접근금지·전기통신 금지 ④ 임대차계약 해지·손해배상 ⑤ 형사 + 민사 5가지 트랙이 결합되는 영역. 계약관계라도 점유는 임차인. 대응은 ① 증거 ② CCTV ③ 신고 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 임대인 스토킹 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·CCTV·신고·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 무단 출입·감시 증거 누적</strong> — 도어록 로그·CCTV.</li>\n<li><strong>② 본인 집 CCTV·도어록 변경·증인</strong></li>\n<li><strong>③ 경찰·112 신고 (잠정조치 + 주거침입)</strong></li>\n<li><strong>④ 스토킹처벌법 + 주거침입 형사 고소</strong></li>\n<li><strong>⑤ 임대차계약 해지·손해배상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임대차계약 중에도 점유권은 임차인에게 있어 임대인 무단 출입은 주거침입 평가 영역. 반복 출입·감시는 스토킹 결합. 임대인은 \"수리 점검\" 빙자 출입도 사전 동의 없이는 침입.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·CCTV·신고 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 도어록 로그·CCTV·출입 자료 (즉시)</strong></li>\n<li><strong>2단계 — 본인 집 CCTV 설치·도어록 변경</strong></li>\n<li><strong>3단계 — 경찰·112 신고 + 잠정조치 신청</strong></li>\n<li><strong>4단계 — 스토킹처벌법 + 주거침입 형사 고소</strong></li>\n<li><strong>5단계 — 임대차계약 해지·민사 손해배상</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">임대인 스토킹 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·출입·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·전입신고증·확정일자</strong></li>\n<li><strong>도어록 출입 로그·앱 알림 캡처</strong></li>\n<li><strong>본인 집·복도 CCTV 영상</strong></li>\n<li><strong>임대인과의 메시지·통화 (출입 항의·답변)</strong></li>\n<li><strong>이웃·경비실 증인 진술서</strong></li>\n<li><strong>본인 정신적 피해 진단서·상담 기록</strong></li>\n<li><strong>본인 신분증·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임대인이 \"수리 점검\"이라며 들어와도 사전 동의 없는 출입은 주거침입 평가 영역. 도어록 변경 후에도 임대인이 다시 알아낸다면 비밀번호 유출·관리실 통로 등 추가 조사 트랙. CCTV 설치는 임차인 자기 점유 공간 내라면 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임차인 점유권</strong> — 계약 중에도 점유는 임차인.</li>\n<li><strong>임대인 출입 정당화 시도</strong> — "수리 점검" 빙자.</li>\n<li><strong>반복성</strong> — 1회 침입 + 반복 시 스토킹.</li>\n<li><strong>잠정조치 가능 여부</strong> — 계약관계라도 가능.</li>\n<li><strong>계약 해지·보증금</strong> — 임대인 책임 사유.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>스토킹 신고 112</strong></li>\n<li><strong>주택임대차분쟁조정위원회 1670-7777</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 이웃 간 반복 행위와 스토킹',
        summary:
          '대법원 2023도10313(2023.12.14 선고) 영역에서 법원은 빌라 아래층에 살던 피고인이 수개월에 걸쳐 반복하여 벽·천장을 두드리는 등 위층 피해자에게 \'쿵쿵\' 소리를 도달하게 한 행위가 사회통념상 합리적 범위 내 정당한 이유 있는 행위라 볼 수 없고 객관적·일반적으로 상대방에게 불안감·공포심을 일으키기에 충분하다며 스토킹범죄 구성을 인정한 사례 흐름이 있습니다.',
        takeaway: '주거 관계에서도 반복 접근·소리·감시 행위는 스토킹 평가 영역. 임대인 무단 출입도 동일 트랙.',
      },
    ],
    faq: [
      {
        question: '임대인이 자기 집인데 왜 침입인가요?',
        answer:
          '<strong>임대차 중에는 점유권이 임차인에게 있어 무단 출입은 주거침입 평가 영역입니다.</strong>',
      },
      {
        question: '"수리 점검"이라고 들어왔어도 침입인가요?',
        answer:
          '<strong>사전 동의 없는 출입이라면 정당화되기 어려운 영역입니다.</strong>',
      },
      {
        question: '임대인을 상대로 잠정조치 가능한가요?',
        answer:
          '<strong>네, 계약관계라도 잠정조치 가능한 영역입니다.</strong>',
      },
      {
        question: '계약을 중도 해지하면 보증금은요?',
        answer:
          '<strong>임대인 귀책이면 전액 반환 + 손해배상 청구 가능한 영역입니다.</strong>',
      },
      {
        question: '본인이 CCTV 설치해도 되나요?',
        answer:
          '<strong>임차인 점유 공간 내 자기 보호용은 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 신고 절차', href: '/guide/stalking/stalking-complaint-procedure' },
      { label: '접근금지·잠정조치', href: '/guide/stalking/stalking-protection-order' },
      { label: '주거침입·스토킹 결합', href: '/guide/stalking/stalking-housing-intrusion-combined' },
      { label: '임대차 분쟁 해결', href: '/guide/jeonse/jeonse-mediation-procedure' },
      { label: '손해배상 청구', href: '/guide/stalking/stalking-damage-claim' },
    ],
  },
];
