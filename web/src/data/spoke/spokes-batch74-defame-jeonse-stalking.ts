import { SpokePage } from '../spoke-pages';

// batch74 defamation / jeonse / stalking — 7개 (2026-05-22) = 3+2+2
//
// 고유 존재 이유:
// defamation 3:
// 1. 학교 동문 비공개 온라인 커뮤니티 사적 폭로 — \'동문 비공개 + 사적 폭로 + 공연성 다툼\' 트랙
// 2. 식당 사장이 진상 손님 신상 공개 — \'사장 측 가해 + 사실적시 + 공공이익 부재\' 트랙
// 3. AI 딥페이크 합성 명예훼손 민사 — \'딥페이크 + 정보통신망법 + 민사 손해배상\' 트랙
//
// jeonse 2:
// 4. 법인 임대인 도산·파산 시 보증금 우선변제 — \'법인 임대인 도산 + 임차권등기 + 회생·파산 절차\' 트랙
// 5. 신축 분양 전세 사전계약 취소·보증금 회수 — \'분양 사전계약 + 시공사 문제 + 보증금 회수\' 트랙
//
// stalking 2:
// 6. 퇴사 동료가 회사 앞 반복 방문 — \'퇴직 후 + 회사 앞 반복 + 잠정조치\' 트랙
// 7. 배달 라이더가 고객 주소 반복 접근 — \'주소 노출 + 배달 라이더 + 개인정보 보호\' 트랙

export const spokesBatch74DefameJeonseStalking: SpokePage[] = [
  // ─── 1. defamation-school-alumni-secret-online-community-track ───
  {
    domain: 'defamation',
    slug: 'defamation-school-alumni-secret-online-community-track',
    keyword: '동문 비공개 커뮤니티 사적 폭로',
    questionKeyword: '대학 동문 비공개 카톡방·페북 그룹에 본인 사생활(연애·외도·금전 문제)을 익명으로 폭로당했어요. 다툴 수 있나요?',
    ctaKeyword: '동문 비공개 폭로 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '동문 비공개 커뮤니티 폭로 — 5단계 공연성·익명 추적 | 로앤가이드',
      description:
        '동문 비공개 커뮤니티에 사생활 폭로 시 공연성·정보통신망법·익명 추적 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"대학 동문 80명이 가입한 비공개 카톡방·페북 그룹에 \'A(본인) — 직장 상사와 외도 + 사채 빚\' 내용이 익명 계정으로 폭로됐습니다. 본인은 외도·사채 빚 모두 사실 아닌데 동문 일부가 \'카더라\' 식으로 댓글을 달면서 확산됐고, 이미 모교 채용·결혼 정보망에까지 일부 새어 나가는 상황이에요. 폭로자 계정은 익명이지만 동문 중 본인과 갈등 있던 1~2명이 의심됩니다." 정보통신망법 제70조는 \'사실/허위사실 적시 명예훼손\'을 처벌하고, 형법 제307조 명예훼손은 \'공연성 + 사실/허위 적시 + 사회적 평가 저해\'를 요건으로 합니다. 80명 동문 비공개 커뮤니티는 \'전파 가능성\' 평가로 공연성 인정 가능 영역이고, 익명 계정도 통신사·플랫폼 수사 협조로 추적 가능 트랙. 피해자라면 ① 공연성 ② 익명 추적 ③ 형사 고소 ④ 민사 배상 ⑤ 게시물 삭제 5중 트랙이 가능한 영역. 대응은 ① 공연성 ② 추적 ③ 형사 ④ 민사 ⑤ 삭제 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 동문 비공개 폭로 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 공연성·추적·형사·민사·삭제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 공연성 평가</strong> — 80명 비공개 커뮤니티 + 전파 가능성.</li>\n<li><strong>② 익명 추적</strong> — 통신사·플랫폼 수사 협조로 작성자 신원 확인.</li>\n<li><strong>③ 형사 고소</strong> — 정보통신망법 제70조 + 형법 제307조.</li>\n<li><strong>④ 민사 배상</strong> — 정신적 위자료·확산 손해.</li>\n<li><strong>⑤ 게시물 삭제</strong> — 플랫폼 신고·임시조치·방통위 신고.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 비공개 커뮤니티라도 80명 규모 + 전파 가능성 시 공연성 인정 영역. 익명도 통신사 IP·플랫폼 로그·과거 활동 패턴 통해 추적 가능. 허위사실 적시면 가중 처벌.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·고소·삭제 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시물 보존 (즉시)</strong> — 캡처·URL·작성 일시·작성자 닉네임.</li>\n<li><strong>2단계 — 플랫폼 임시조치 (1주)</strong> — 카카오·페북 신고 + 임시 차단.</li>\n<li><strong>3단계 — 형사 고소 (1개월 내)</strong> — 경찰서 사이버수사대 + 익명 추적 요청.</li>\n<li><strong>4단계 — 민사 손해배상 (시효 3년)</strong> — 위자료·확산 손해.</li>\n<li><strong>5단계 — 방통위 신고 + 영구 삭제</strong> — 임시조치 후 영구 삭제.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">동문 비공개 폭로 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 공연성·추적·삭제 갈래입니다.</strong></p>\n<ul>\n<li><strong>폭로 게시물 캡처·URL</strong></li>\n<li><strong>커뮤니티 회원 수·전파 정황 자료</strong></li>\n<li><strong>댓글·반응 캡처</strong></li>\n<li><strong>본인 정보 (외도·사채 사실 부재 입증)</strong></li>\n<li><strong>플랫폼 신고 접수증</strong></li>\n<li><strong>의심 작성자 정황 자료 (갈등 정황)</strong></li>\n<li><strong>경찰 사이버수사대 고소장</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임시조치는 작성자 확인 전이라도 진행 가능. 게시물 영구 보존 + 작성자 추적 + 민사 배상 동시 진행이 회복 효과 결정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 80명 비공개 + 전파 가능성.</li>\n<li><strong>익명 추적</strong> — 통신사·플랫폼 협조.</li>\n<li><strong>허위/사실</strong> — 허위 시 가중 처벌.</li>\n<li><strong>임시조치</strong> — 플랫폼·방통위 신고.</li>\n<li><strong>민사 배상</strong> — 위자료·확산 손해.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보분쟁조정위원회 1833-6972</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 인터넷 명예훼손과 후원계좌 운영자 평가 영역',
        summary:
          '부산지법 2025고단949(부산지법, 2025.08.20 선고) 영역에서 법원은 정보통신망이용촉진및정보보호등에관한법률위반(명예훼손)·전기통신기본법 사건에서 자신들이 운영하는 후원계좌가 표기된 채널 등 여러 동영상 플랫폼 채널에 사고 관련 허위사실을 적시한 평가를 다루면서, 정보통신망법 명예훼손 사건에서 공연성·적시·사회적 평가 저해 평가가 결정 사정이라고 본 사례 흐름이 있고, 비공개 커뮤니티 폭로 평가에도 동일하게 적용됩니다.',
        takeaway: '비공개 커뮤니티라도 80명 규모 + 전파 가능성 시 공연성 인정 영역 — 변호인 상담·고소 권장.',
      },
    ],
    faq: [
      {
        question: '비공개 커뮤니티라도 공연성이 인정되나요?',
        answer:
          '<strong>회원 수 + 전파 가능성 시 인정되는 영역입니다.</strong> 80명 규모는 충분.',
      },
      {
        question: '익명 작성자를 어떻게 찾아내나요?',
        answer:
          '<strong>경찰 수사·통신사·플랫폼 협조로 가능한 영역입니다.</strong> IP·로그 추적.',
      },
      {
        question: '허위 vs 사실 어떤 차이가 있나요?',
        answer:
          '<strong>허위 시 가중 처벌(7년/5천만 원 이하) 영역입니다.</strong> 사실도 명예훼손 성립.',
      },
      {
        question: '댓글 단 사람들도 처벌되나요?',
        answer:
          '<strong>댓글 내용에 따라 별도 평가 영역입니다.</strong> 동조·확산도 가담 사정.',
      },
      {
        question: '민사 배상은 얼마까지 가능한가요?',
        answer:
          '<strong>확산 정도·정신적 고통에 따라 다른 영역입니다.</strong> 변호인 자문 권장.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-complaint-procedure' },
      { label: '온라인 명예훼손', href: '/guide/defamation/defamation-online-response' },
      { label: '익명 작성자 추적', href: '/guide/defamation/defamation-anonymous-tracking' },
      { label: '게시물 삭제 임시조치', href: '/guide/defamation/defamation-post-removal-temporary' },
      { label: '명예훼손 민사 배상', href: '/guide/defamation/defamation-civil-damages' },
    ],
  },

  // ─── 2. defamation-restaurant-owner-customer-truth-revenge-track ───
  {
    domain: 'defamation',
    slug: 'defamation-restaurant-owner-customer-truth-revenge-track',
    keyword: '식당 사장 진상 손님 신상 공개',
    questionKeyword: '식당 사장이 본인을 \'진상 손님\'으로 SNS·블로그에 신상·사진과 함께 폭로해 손님이 줄었어요. 다툴 수 있나요?',
    ctaKeyword: '진상 손님 신상 공개 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '식당 사장 진상 손님 폭로 — 5단계 사실적시·공공이익 | 로앤가이드',
      description:
        '식당 사장이 손님 신상 공개 시 사실적시 명예훼손·공공이익·민사 배상 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 강남 한식당에서 식사 중 음식 위생 문제(머리카락·이물질)를 지적했고, 일부 환불을 요구했습니다. 사장과의 언쟁이 있었지만 폭언·폭행은 없었고 본인 측 발언 정도였어요. 그런데 사장이 매장 CCTV 영상 + 본인 얼굴 + 본인 실명 이니셜을 SNS·블로그·자영업자 커뮤니티에 \'진상 손님 — 환불 요구하며 폭언·매장 영업 방해\'라는 제목으로 폭로했고, 본인 지인·고객들이 이를 보면서 사회적 평판이 저해됐습니다." 형법 제307조 명예훼손은 \'사실적시\'도 처벌 대상이고, 정보통신망법 제70조는 인터넷 명예훼손을 가중 처벌하는 영역입니다. \'공공의 이익\'에 해당하면 위법성 조각되지만 \'개인 신상 공개 + 사적 보복\'은 공공이익 부정되는 트랙. CCTV 영상 무단 공개는 개인정보보호법 위반도 결합되는 영역. 피해자라면 ① 사실적시 ② 공공이익 ③ 개인정보 ④ 형사 고소 ⑤ 민사 배상 5중 트랙이 가능한 영역. 대응은 ① 사실 ② 이익 ③ 정보 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 진상 손님 신상 공개 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·이익·정보·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실적시 평가</strong> — 형법 제307조 사실적시 명예훼손.</li>\n<li><strong>② 공공이익 부재</strong> — \'사적 보복\' + 신상 공개는 공공이익 부정.</li>\n<li><strong>③ 개인정보보호법 위반</strong> — CCTV 영상·얼굴 무단 공개.</li>\n<li><strong>④ 형사 고소</strong> — 정보통신망법 + 개인정보보호법.</li>\n<li><strong>⑤ 민사 배상</strong> — 위자료·영업 손해·확산 손해.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사실적시도 명예훼손 성립 영역. \'공공의 이익\'(공익 제보·소비자 보호) 평가는 신중. 사적 보복 + 개인 신상 공개는 공공이익 부정 + 가해 평가 강한 트랙. CCTV 무단 공개는 개인정보보호법 별도 위반.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·삭제·고소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시물·CCTV 영상 보존 (즉시)</strong> — 캡처·URL·작성 시점.</li>\n<li><strong>2단계 — 플랫폼 임시조치 (1주)</strong> — SNS·블로그 신고 + 차단.</li>\n<li><strong>3단계 — 형사 고소 (1개월 내)</strong> — 명예훼손 + 개인정보보호법 동시 고소.</li>\n<li><strong>4단계 — 민사 배상 청구 (시효 3년)</strong> — 위자료·영업 손해.</li>\n<li><strong>5단계 — 게시물 영구 삭제</strong> — 임시조치 후 영구 삭제.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">진상 손님 신상 공개 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·이익·정보 갈래입니다.</strong></p>\n<ul>\n<li><strong>폭로 게시물 캡처·URL</strong></li>\n<li><strong>본인 얼굴·신상 노출 자료</strong></li>\n<li><strong>CCTV 영상·매장 영상 자료</strong></li>\n<li><strong>매장 방문 당일 정황 자료 (위생 문제 입증)</strong></li>\n<li><strong>플랫폼 신고 접수증</strong></li>\n<li><strong>지인·고객 진술서 (사회적 평가 저해 입증)</strong></li>\n<li><strong>경찰 사이버수사대 고소장</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 매장 CCTV는 본인 동의 없는 외부 공개 시 개인정보보호법 위반. 사장 측 \'영업 방해\' 주장도 별도 평가지만 신상 공개 자체는 정당화 어려운 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실적시</strong> — 사실도 명예훼손 성립.</li>\n<li><strong>공공이익 부재</strong> — 사적 보복 평가.</li>\n<li><strong>개인정보보호법</strong> — CCTV·얼굴·신상 공개.</li>\n<li><strong>영업 손해</strong> — 손님 감소·평판 저해.</li>\n<li><strong>민사 배상</strong> — 위자료·실손해 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>개인정보분쟁조정위원회 1833-6972</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정치인 명예훼손 발언 위법성조각사유 영역',
        summary:
          '대법원 2022다242649(대법원, 2025.06.26 선고) 영역에서 법원은 손해배상 사건에서 정치인의 명예훼손 발언에 대한 위법성조각사유 인정 평가를 다루면서, 민법상 불법행위가 되는 명예훼손의 의미와 사실의 적시에서 위법성 조각 평가 영역을 다루는 사례 흐름이 있고, 일반 명예훼손에서도 \'공공의 이익\' 평가가 결정 사정입니다.',
        takeaway: '사실적시 + 신상 공개 + 사적 보복 결합 시 공공이익 부정 + 명예훼손 성립 영역 — 변호인 상담·고소 권장.',
      },
    ],
    faq: [
      {
        question: '사실이라도 명예훼손이 되나요?',
        answer:
          '<strong>형법 제307조 사실적시 명예훼손 성립 영역입니다.</strong> 공공이익 평가 신중.',
      },
      {
        question: '사장이 \'영업 방해\'라고 주장해요',
        answer:
          '<strong>영업 방해는 별도 평가지만 신상 공개는 정당화 안 되는 영역입니다.</strong> 매장 방문 정황 자료.',
      },
      {
        question: 'CCTV 영상도 문제가 되나요?',
        answer:
          '<strong>개인정보보호법 위반 영역입니다.</strong> 별도 신고·고소 가능.',
      },
      {
        question: '영업 손해도 청구 가능한가요?',
        answer:
          '<strong>위자료 + 실손해(영업 손해) 청구 영역입니다.</strong> 손해 입증 자료 보존.',
      },
      {
        question: '게시물 영구 삭제는 어떻게 하나요?',
        answer:
          '<strong>임시조치 + 방통위 신고 + 민사 가처분 영역입니다.</strong> 신속 진행.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-complaint-procedure' },
      { label: '온라인 명예훼손', href: '/guide/defamation/defamation-online-response' },
      { label: '사실적시 명예훼손', href: '/guide/defamation/defamation-truth-statement' },
      { label: '개인정보 침해', href: '/guide/defamation/defamation-personal-info-violation' },
      { label: '명예훼손 민사 배상', href: '/guide/defamation/defamation-civil-damages' },
    ],
  },

  // ─── 3. defamation-aiart-deepfake-honor-injury-civil-track ───
  {
    domain: 'defamation',
    slug: 'defamation-aiart-deepfake-honor-injury-civil-track',
    keyword: 'AI 딥페이크 합성 명예훼손',
    questionKeyword: '본인 얼굴이 AI 딥페이크로 합성된 음란 영상·왜곡 영상이 온라인에 유포됐어요. 형사·민사 어떻게 대응하나요?',
    ctaKeyword: '딥페이크 명예훼손 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'AI 딥페이크 합성 명예훼손 — 5단계 형사·민사 | 로앤가이드',
      description:
        'AI 딥페이크 합성 영상 유포 시 정보통신망법·디지털성범죄·민사 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인 SNS·졸업앨범 사진이 AI 딥페이크 기술로 음란 영상·왜곡 영상에 합성돼 텔레그램·트위터·디시인사이드 등에 유포됐습니다. 본인은 영상 속 행위와 무관하고, 얼굴만 합성된 사실을 친구가 알려줘서 알게 됐어요. 동영상 일부는 본인 회사·가족·지인 단톡방에까지 퍼졌고 신원이 노출되기 시작했습니다. 작성자·유포자는 익명이지만 특정 이니셜·과거 갈등 정황으로 의심되는 인물이 있어요." AI 딥페이크 합성 음란물은 성폭력범죄처벌특례법 제14조의2(허위영상물 편집·반포)·정보통신망법 + 명예훼손법 종합 적용 영역이고, 디지털성범죄피해자지원센터·방심위 긴급 삭제 + 형사 고소 + 민사 배상 결합 트랙입니다. 피해자라면 ① 긴급 삭제 ② 형사 고소 ③ 작성자 추적 ④ 민사 배상 ⑤ 심리 지원 5중 트랙이 가능한 영역. 대응은 ① 삭제 ② 형사 ③ 추적 ④ 민사 ⑤ 지원 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 딥페이크 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 삭제·형사·추적·민사·지원 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 긴급 삭제</strong> — 방심위·디지털성범죄피해자지원센터.</li>\n<li><strong>② 형사 고소</strong> — 성폭력특례법 제14조의2 + 정보통신망법 + 명예훼손.</li>\n<li><strong>③ 작성자·유포자 추적</strong> — 경찰 사이버수사·플랫폼 협조.</li>\n<li><strong>④ 민사 배상</strong> — 위자료·정신적 고통.</li>\n<li><strong>⑤ 심리·생활 지원</strong> — 1366·여성긴급전화·디지털성범죄피해자지원센터.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 딥페이크 합성 음란물은 성폭력특례법 제14조의2 \'허위영상물 편집·반포\' 7년/5천만 원 이하 가중처벌 영역. 디지털성범죄피해자지원센터 1366-7942 24시간 긴급 삭제 + 심리 지원 결합 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 긴급·고소·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 영상 보존 + 긴급 삭제 (즉시)</strong> — 캡처·URL + 디지털성범죄지원센터 신고.</li>\n<li><strong>2단계 — 방심위 신고 (즉시)</strong> — 24시간 내 차단·삭제.</li>\n<li><strong>3단계 — 형사 고소 (1주)</strong> — 경찰 사이버수사대 + 성폭력특례법 적용.</li>\n<li><strong>4단계 — 작성자 추적·민사 (1~3개월)</strong> — IP·플랫폼 협조 + 손해배상.</li>\n<li><strong>5단계 — 심리·생활 지원</strong> — 1366·여성긴급전화 상담.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">딥페이크 명예훼손 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 삭제·고소·추적 갈래입니다.</strong></p>\n<ul>\n<li><strong>딥페이크 영상 캡처·URL·작성 일시</strong></li>\n<li><strong>원본 본인 사진 출처 자료 (SNS·졸업앨범)</strong></li>\n<li><strong>영상 합성 입증 자료 (얼굴 부분 합성)</strong></li>\n<li><strong>유포 확산 정황 자료 (회사·가족 단톡방)</strong></li>\n<li><strong>방심위·디지털성범죄지원센터 신고 접수증</strong></li>\n<li><strong>의심 작성자 정황 자료</strong></li>\n<li><strong>경찰 사이버수사대 고소장</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 디지털성범죄피해자지원센터(1366-7942)는 24시간 긴급 삭제 + 무료 변호인 연결 + 심리 상담 결합 지원. 신속 신고가 확산 최소화 결정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>긴급 삭제</strong> — 방심위·디지털성범죄지원센터.</li>\n<li><strong>성폭력특례법</strong> — 제14조의2 허위영상물 가중처벌.</li>\n<li><strong>작성자 추적</strong> — 경찰·플랫폼 협조.</li>\n<li><strong>민사 배상</strong> — 위자료·정신적 고통.</li>\n<li><strong>심리 지원</strong> — 1366·여성긴급전화.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>디지털성범죄피해자지원센터 1366-7942 (24시간)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 무고·명예훼손·폭행 결합 평가 영역',
        summary:
          '대전지방법원 2023노3777(대전지방법원, 2025.01.09 선고) 영역에서 법원은 무고·명예훼손·폭행 사건에서 결합 죄책 평가를 다루면서, 정보통신망 + 명예훼손 + 부수 범죄 결합 평가가 가중처벌 사정이라고 본 사례 흐름이 있고, 딥페이크 합성·유포에서도 성폭력특례법 + 정보통신망법 + 명예훼손 결합 평가가 적용되는 트랙입니다.',
        takeaway: '딥페이크 합성은 성폭력특례법 + 정보통신망법 + 명예훼손 결합 가중처벌 영역 — 변호인 상담·긴급 신고 권장.',
      },
    ],
    faq: [
      {
        question: '딥페이크는 어떤 법으로 처벌되나요?',
        answer:
          '<strong>성폭력특례법 제14조의2(7년/5천만 원 이하) 영역입니다.</strong> 영리 목적 시 가중.',
      },
      {
        question: '어디에 가장 빨리 신고해야 하나요?',
        answer:
          '<strong>디지털성범죄피해자지원센터 1366-7942(24시간) 영역입니다.</strong> 긴급 삭제 + 심리 상담.',
      },
      {
        question: '익명 작성자도 추적 가능한가요?',
        answer:
          '<strong>경찰 사이버수사·플랫폼 협조로 가능한 영역입니다.</strong> IP·로그 추적.',
      },
      {
        question: '민사 배상은 얼마까지 가능한가요?',
        answer:
          '<strong>확산·정신적 고통 정도에 따라 다른 영역입니다.</strong> 변호인 자문 권장.',
      },
      {
        question: '심리적 충격이 심해요',
        answer:
          '<strong>여성긴급전화 1366·디지털성범죄지원센터 심리 상담 영역입니다.</strong> 무료·24시간.</strong>',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-complaint-procedure' },
      { label: '온라인 명예훼손', href: '/guide/defamation/defamation-online-response' },
      { label: '딥페이크 디지털성범죄', href: '/guide/defamation/defamation-deepfake-digital-crime' },
      { label: '게시물 삭제 임시조치', href: '/guide/defamation/defamation-post-removal-temporary' },
      { label: '명예훼손 민사 배상', href: '/guide/defamation/defamation-civil-damages' },
    ],
  },

  // ─── 4. jeonse-corporate-landlord-bankruptcy-deposit-priority-track ───
  {
    domain: 'jeonse',
    slug: 'jeonse-corporate-landlord-bankruptcy-deposit-priority-track',
    keyword: '법인 임대인 도산 보증금 우선변제',
    questionKeyword: '법인 임대인이 도산·파산 신청을 했어요. 보증금 우선변제·임차권등기·회생절차 어떻게 대응하나요?',
    ctaKeyword: '법인 임대인 도산 보증금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '법인 임대인 도산 보증금 — 5단계 우선변제·회생 다툼 | 로앤가이드',
      description:
        '법인 임대인이 도산·파산 시 보증금 우선변제·임차권등기·회생 신고 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"법인이 소유한 오피스텔에 전세 2억 5천만 원 보증금으로 거주 중인데, 임대인 법인이 갑자기 \'채무 과다·회생절차 신청\' 통지를 받았습니다. 본인은 전입신고·확정일자·임차권등기명령을 갖춘 상태이고 \'주택임대차보호법상 대항력 + 우선변제권\'을 보유하고 있어요. 회생절차 진행 중이라 법인 자산이 동결됐고, 보증금 회수 시점·방법·우선순위가 불명확한 상황입니다." 주택임대차보호법은 임차인의 대항력·우선변제권을 보장하고, 채무자회생법은 임대인 회생·파산 절차에서 임차보증금의 평가·우선변제 영역을 규정합니다. 임차권등기 + 확정일자 + 회생절차 신고 결합이 보증금 회수의 핵심 트랙. 피해자라면 ① 대항력·우선변제권 ② 회생절차 채권신고 ③ HUG·SGI ④ 임차권등기 ⑤ 회수 5중 트랙이 가능한 영역. 대응은 ① 권리 ② 신고 ③ 보증 ④ 등기 ⑤ 회수 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 법인 임대인 도산 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리·신고·보증·등기·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 대항력·우선변제권 확인</strong> — 전입신고·확정일자·인도.</li>\n<li><strong>② 회생절차 채권신고</strong> — 회생법원에 보증금 채권 신고.</li>\n<li><strong>③ HUG·SGI 보증 활용</strong> — 보증 가입 시 우선 환급 신청.</li>\n<li><strong>④ 임차권등기명령</strong> — 등기로 대항력·우선변제권 유지.</li>\n<li><strong>⑤ 회수 전략</strong> — 회생계획안·청산 시 배당 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임대인 법인 도산 시 임차인의 보증금 채권은 \'회생·파산 채권\'으로 평가. 대항력 + 우선변제권 결합 시 우선 변제 평가. HUG·SGI 보증 가입은 가장 안전한 회수 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·등기·회수 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리 확인 + 통지 보존 (즉시)</strong> — 임대차계약서·전입신고·확정일자·법인 통지.</li>\n<li><strong>2단계 — 임차권등기 신청 (1주)</strong> — 법원에 임차권등기명령.</li>\n<li><strong>3단계 — 회생절차 채권신고 (1~2개월)</strong> — 회생법원 채권신고 기한 준수.</li>\n<li><strong>4단계 — HUG·SGI 보증 청구 (가입 시)</strong> — 보증 이행 청구.</li>\n<li><strong>5단계 — 회수 전략 + 강제집행</strong> — 회생계획안·청산 시 배당.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">법인 임대인 도산 보증금 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리·신고·보증 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·확정일자 자료</strong></li>\n<li><strong>전입신고·주민등록등본</strong></li>\n<li><strong>임차권등기명령 신청서·등기부등본</strong></li>\n<li><strong>임대인 법인 도산·회생 통지</strong></li>\n<li><strong>HUG·SGI 보증서·약관</strong></li>\n<li><strong>회생법원 채권신고서</strong></li>\n<li><strong>법인 등기부등본·재무 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임차권등기는 법인 도산·회생 진행 중에도 효력 보장. 회생절차 채권신고 기한 놓치면 회수 어려움. HUG·SGI 보증은 즉시 환급 트랙.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대항력·우선변제권</strong> — 전입·확정·인도 결합.</li>\n<li><strong>임차권등기</strong> — 회생 중에도 효력.</li>\n<li><strong>회생 채권신고</strong> — 기한 엄수.</li>\n<li><strong>HUG·SGI 보증</strong> — 즉시 환급 트랙.</li>\n<li><strong>회수 우선순위</strong> — 회생계획안·청산 시 배당.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>SGI 서울보증보험 1670-7000</strong></li>\n<li><strong>대한법률구조공단 132 (임차권등기 무료지원)</strong></li>\n<li><strong>회생법원·파산법원</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다세대주택 임차인 보증금 보호 평가 영역',
        summary:
          '대법원 2024다305087(대법원, 2025.12.04 선고) 영역에서 법원은 공제금등청구의소 사건에서 다세대주택 건물 중 임대의뢰인 소유의 특정 세대에 대한 개업공인중개사의 중개대상물에 대한 확인·설명의무 평가 영역을 다루면서, 공동저당권에 관한 민법 평가와 임차인 보증금 우선변제권 평가가 결정 사정이라고 본 사례 흐름이 있고, 법인 임대인 도산 시에도 임차권등기 + 우선변제권 평가가 회수 트랙의 핵심입니다.',
        takeaway: '법인 임대인 도산 시 임차권등기 + 회생 채권신고 + 보증 활용 결합 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '회생절차에서 보증금이 우선 변제되나요?',
        answer:
          '<strong>대항력·우선변제권 결합 시 우선 평가 영역입니다.</strong> 임차권등기 + 채권신고 핵심.',
      },
      {
        question: '임차권등기 신청은 어떻게 하나요?',
        answer:
          '<strong>법원에 임차권등기명령 신청 영역입니다.</strong> 통상 1~2주 소요.',
      },
      {
        question: 'HUG·SGI 보증에 가입했다면 어떻게 되나요?',
        answer:
          '<strong>즉시 환급 청구 가능 영역입니다.</strong> 보증사가 임대인 상대 구상 진행.',
      },
      {
        question: '회생계획안이 보증금을 감액할 수 있나요?',
        answer:
          '<strong>우선변제권 채권은 통상 감액 어려운 영역입니다.</strong> 회생법원 결정 평가.',
      },
      {
        question: '집을 비워줘야 하나요?',
        answer:
          '<strong>임차권등기 후엔 거주 유지 영역입니다.</strong> 다만 회생계획에 따라 변경 가능.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '전세보증금 반환', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
      { label: '임차권등기 절차', href: '/guide/jeonse/jeonse-lease-registration-procedure' },
      { label: 'HUG·SGI 보증 청구', href: '/guide/jeonse/jeonse-deposit-guarantee-claim' },
      { label: '임대인 도산 대응', href: '/guide/jeonse/jeonse-landlord-bankruptcy-response' },
      { label: '전세사기 종합 대응', href: '/guide/jeonse/jeonse-fraud-comprehensive-response' },
    ],
  },

  // ─── 5. jeonse-new-construction-prelease-cancellation-deposit-track ───
  {
    domain: 'jeonse',
    slug: 'jeonse-new-construction-prelease-cancellation-deposit-track',
    keyword: '신축 분양 전세 사전계약 취소',
    questionKeyword: '신축 아파트 분양 전세 \'사전계약\'을 했는데 시공사 부도·공사 지연으로 입주가 무기한 연기됐어요. 보증금 회수 가능한가요?',
    ctaKeyword: '신축 분양 전세 취소 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '신축 분양 전세 사전계약 취소 — 5단계 시공사·보증금 다툼 | 로앤가이드',
      description:
        '신축 분양 전세 사전계약 후 시공사 부도·공사 지연으로 보증금 회수 + 위약금 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 2025년 하반기 입주 예정 신축 아파트 분양 \'전세 사전계약\'을 체결하고 보증금 일부(계약금 10%인 4천만 원)를 송금했습니다. 그런데 시공사 부도·공사 지연으로 입주가 무기한 연기됐고, 본인은 기존 전세 계약 만료 + 이사 일정 + 자녀 학교 전학 등 일정에 큰 차질이 발생했어요. 분양사·시공사는 \'천재지변·시장 상황\'을 이유로 일방 통보만 하고 보증금 환급은 \'추후 정산\'으로 미루고 있습니다." 신축 분양 전세 사전계약은 일반 임대차계약과 달리 \'계약 시점\'과 \'입주 시점\' 사이 장기간 간격이 있고, 시공사·분양사의 부도·지연 시 보증금 회수 + 위약금 + 손해배상 다툼이 결합되는 영역입니다. HUG 분양 보증·주택도시기금 등 보증 활용 + 분양사 상대 민사 청구 트랙. 피해자라면 ① 계약 해제 ② 보증금 환급 ③ HUG 보증 ④ 위약금·손해 ⑤ 형사 5중 트랙이 가능한 영역. 대응은 ① 해제 ② 환급 ③ 보증 ④ 위약 ⑤ 형사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 신축 분양 전세 취소 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 해제·환급·보증·위약·형사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약 해제</strong> — 시공사·분양사 채무불이행 + 해제권 행사.</li>\n<li><strong>② 보증금 환급 청구</strong> — 계약금 + 중도금 일부 환급.</li>\n<li><strong>③ HUG 분양 보증</strong> — 보증 가입 시 환급 청구.</li>\n<li><strong>④ 위약금·손해배상</strong> — 이사 비용·전세 이중 부담·자녀 전학.</li>\n<li><strong>⑤ 사기 고소</strong> — 시공사·분양사 부도 인지 + 계약 강행 시.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 신축 분양 전세 사전계약은 \'채무불이행\'·\'분양사 부도\' 등 사정변경 시 해제권 + 보증금 환급 청구 가능 영역. HUG 분양 보증 가입은 가장 안전한 회수 트랙. 위약금·실손해 별도 청구.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 해제·환급·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·통지 자료 보존 (즉시)</strong> — 계약서·송금 영수증·통지 자료.</li>\n<li><strong>2단계 — 계약 해제 통지 (1주)</strong> — 내용증명 + 채무불이행 통지.</li>\n<li><strong>3단계 — HUG 분양 보증 청구 (2주)</strong> — 보증 약관에 따른 환급 청구.</li>\n<li><strong>4단계 — 민사 청구 + 가압류 (1~3개월)</strong> — 시공사·분양사 재산 보전.</li>\n<li><strong>5단계 — 사기 고소 (필요 시)</strong> — 부도 인지 + 계약 강행 입증.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">신축 분양 전세 취소 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 해제·환급·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세 사전계약서·약관</strong></li>\n<li><strong>송금 영수증·결제 자료</strong></li>\n<li><strong>시공사·분양사 통지·메시지 자료</strong></li>\n<li><strong>HUG 분양 보증서</strong></li>\n<li><strong>기존 전세 계약 만료·이사 일정 자료</strong></li>\n<li><strong>자녀 학교 전학·일정 차질 자료</strong></li>\n<li><strong>시공사·분양사 부도·재무 정황 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: HUG 분양 보증은 가장 안전한 회수 트랙. 가입 여부 우선 확인. 미가입 시 즉시 채권보전(가압류) 진행이 회수율 결정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>계약 해제</strong> — 채무불이행·해제권.</li>\n<li><strong>보증금 환급</strong> — 즉시 환급 청구.</li>\n<li><strong>HUG 보증</strong> — 가입 시 안전 회수.</li>\n<li><strong>위약·손해</strong> — 이사·전학·이중 부담.</li>\n<li><strong>사기 고소</strong> — 부도 인지 + 강행.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>국토교통부 1599-0001</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 컨테이너 임대차 적용 평가 영역',
        summary:
          '대법원 2024다293016(대법원, 2025.11.13 선고) 영역에서 법원은 토지인도 사건에서 임대차계약의 종료를 이유로 임대차 목적물인 컨테이너의 인도 평가 영역을 다루면서, 상가건물 임대차보호법이 적용되는 \'상가건물 임대차\'의 의미 및 법률상 독립 임대차 평가가 결정 사정이라고 본 사례 흐름이 있고, 신축 분양 전세 사전계약 평가에서도 계약 성립·해제·보증금 환급 평가가 핵심 트랙입니다.',
        takeaway: '신축 분양 전세 사전계약은 채무불이행 + HUG 보증 결합 회수 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: 'HUG 분양 보증에 가입했는지 어떻게 확인하나요?',
        answer:
          '<strong>HUG 1566-9009 조회 영역입니다.</strong> 분양사 가입 여부 확인.',
      },
      {
        question: '계약 해제하면 위약금도 받나요?',
        answer:
          '<strong>분양사 귀책 사유면 위약금 청구 가능 영역입니다.</strong> 약관·실손해 자료 보존.',
      },
      {
        question: '이미 송금한 돈을 전액 돌려받을 수 있나요?',
        answer:
          '<strong>HUG 보증 + 분양사 자산 회수 가능성에 따라 결정 영역입니다.</strong> 신속 청구.',
      },
      {
        question: '시공사 부도 정황을 알고도 계약을 강행했다면 사기인가요?',
        answer:
          '<strong>부도 인지 + 강행 입증 시 사기 평가 영역입니다.</strong> 정황 자료 결정.',
      },
      {
        question: '이중 전세 부담은 어떻게 보상받나요?',
        answer:
          '<strong>실손해로 위자료 + 위약금 청구 영역입니다.</strong> 영수증·일정 자료 보존.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '전세보증금 반환', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
      { label: 'HUG·SGI 보증 청구', href: '/guide/jeonse/jeonse-deposit-guarantee-claim' },
      { label: '임대인 도산 대응', href: '/guide/jeonse/jeonse-landlord-bankruptcy-response' },
      { label: '전세사기 종합 대응', href: '/guide/jeonse/jeonse-fraud-comprehensive-response' },
      { label: '임차권등기 절차', href: '/guide/jeonse/jeonse-lease-registration-procedure' },
    ],
  },

  // ─── 6. stalking-ex-coworker-after-quit-repeat-visit-office-track ───
  {
    domain: 'stalking',
    slug: 'stalking-ex-coworker-after-quit-repeat-visit-office-track',
    keyword: '퇴사 동료 회사 앞 반복 방문',
    questionKeyword: '퇴사한 전 동료가 본인을 만나려고 회사 앞에 매주 반복 방문하고 카톡·전화도 끊임없이 와요. 스토킹으로 다툴 수 있나요?',
    ctaKeyword: '퇴사 동료 회사 앞 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '퇴사 동료 회사 앞 반복 — 5단계 잠정조치·접근금지 | 로앤가이드',
      description:
        '퇴사 동료의 회사 앞 반복 방문·연락 시 스토킹처벌법·잠정조치·접근금지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"6개월 전 회사를 퇴사한 동료(이성)가 본인에게 \'정식 사귀고 싶다\'며 회사 앞에 매주 2~3회 반복 방문해 본인을 기다리고, 본인 카톡·전화·이메일에 \'사랑한다·답장해달라\'는 메시지를 하루 10건 이상 보내고 있습니다. 본인은 \'관심 없음·연락 중단\'을 명시적으로 표현했지만 상대는 \'본인 마음이 바뀔 때까지 기다리겠다\'며 행위를 지속하고 있어요. 회사 동료·경비실도 상대 인지 + 우려 표현하는 상황입니다." 스토킹범죄의처벌등에관한법률은 ① 불안감·공포심을 일으키는 ② 지속적·반복적 ③ 상대방 의사에 반하는 행위를 \'스토킹범죄\'로 처벌하고, 잠정조치(접근금지·통신금지) + 보호명령 + 형사 고소 결합 트랙입니다. 피해자라면 ① 스토킹 행위 입증 ② 신고 ③ 잠정조치 ④ 형사 고소 ⑤ 보호명령 5중 트랙이 가능한 영역. 대응은 ① 입증 ② 신고 ③ 잠정 ④ 형사 ⑤ 보호 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 퇴사 동료 회사 앞 반복 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·신고·잠정·형사·보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 스토킹 행위 입증</strong> — 반복·지속·상대 의사 반함 입증.</li>\n<li><strong>② 경찰 신고</strong> — 112 신고 + 스토킹범죄 신고.</li>\n<li><strong>③ 잠정조치</strong> — 접근금지·통신금지 + 위반 시 처벌.</li>\n<li><strong>④ 형사 고소</strong> — 스토킹처벌법 + 협박·위계 결합.</li>\n<li><strong>⑤ 보호명령</strong> — 가정법원·지방법원 보호명령.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 스토킹범죄는 \'지속·반복·상대 의사 반함\' 3요건. 본인의 명시적 거부 의사 표현 후에도 지속 시 입증 강한 트랙. 잠정조치는 위반 시 즉시 처벌 + 보호 효과 결합.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·잠정·고소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 행위 자료 보존 (즉시)</strong> — 카톡·전화·CCTV·증인 진술.</li>\n<li><strong>2단계 — 거부 의사 명시 (1주)</strong> — 카톡·문자로 명시적 거부.</li>\n<li><strong>3단계 — 112 신고 + 잠정조치 (1~2주)</strong> — 경찰 신고 + 접근금지·통신금지.</li>\n<li><strong>4단계 — 형사 고소 (1개월 내)</strong> — 스토킹처벌법 + 협박 결합.</li>\n<li><strong>5단계 — 보호명령 + 민사 손해배상</strong> — 위자료·정신적 고통.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">퇴사 동료 회사 앞 반복 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·신고·잠정 갈래입니다.</strong></p>\n<ul>\n<li><strong>카톡·문자·전화 기록 (반복성 입증)</strong></li>\n<li><strong>회사 앞 CCTV·경비실 일지</strong></li>\n<li><strong>본인 거부 의사 표현 자료</strong></li>\n<li><strong>동료·경비 진술서</strong></li>\n<li><strong>112 신고 접수증</strong></li>\n<li><strong>의사 진단서 (정신적 충격)</strong></li>\n<li><strong>잠정조치 신청서·접근금지 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 스토킹은 \'지속·반복·상대 의사 반함\' 3요건. 거부 의사 명시 + 지속 시 입증 강한 사정. 잠정조치 위반은 즉시 처벌(2년/2천만 원 이하).</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>지속·반복성</strong> — 행위 빈도·기간.</li>\n<li><strong>상대 의사 반함</strong> — 명시적 거부 의사.</li>\n<li><strong>잠정조치</strong> — 접근금지·통신금지.</li>\n<li><strong>형사 처벌</strong> — 스토킹처벌법(3년/3천만 원 이하).</li>\n<li><strong>민사 배상</strong> — 위자료·정신적 고통.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰 112 (스토킹 긴급 신고)</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>한국여성의전화 02-3156-5400</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 스토킹 잠정조치 연장 결정 영역',
        summary:
          '대법원 2025모3144(대법원, 2025.12.11 선고) 영역에서 법원은 잠정조치연장결정에대한재항고 사건에서 스토킹범죄의 처벌 등에 관한 법률상 잠정조치 결정(잠정조치 기간을 연장하거나 그 종류를 변경하는 결정 포함)에 대한 항고에 원심법원의 평가 영역을 다루면서, 잠정조치의 효력·연장·변경 평가가 결정 사정이라고 본 사례 흐름이 있고, 퇴사 동료 스토킹에도 동일하게 적용됩니다.',
        takeaway: '명시적 거부 후 지속 행위 + 잠정조치 + 형사 고소 결합 영역 — 변호인 상담·신속 신고 권장.',
      },
    ],
    faq: [
      {
        question: '\'사랑한다\'는 메시지만 와도 스토킹인가요?',
        answer:
          '<strong>거부 의사 후 지속·반복 시 성립 영역입니다.</strong> 거부 의사 명시가 핵심.',
      },
      {
        question: '잠정조치는 얼마 만에 결정되나요?',
        answer:
          '<strong>경찰 신고 후 24~48시간 내 가능한 영역입니다.</strong> 긴급 사안 신속 처리.',
      },
      {
        question: '회사 앞 방문도 스토킹에 해당하나요?',
        answer:
          '<strong>접근·정황 조성도 스토킹 영역입니다.</strong> CCTV·경비 진술 결정.',
      },
      {
        question: '형사 처벌은 얼마나 무거운가요?',
        answer:
          '<strong>3년/3천만 원 이하 영역입니다.</strong> 흉기 휴대 시 가중.',
      },
      {
        question: '심리적 충격이 심해요',
        answer:
          '<strong>여성긴급전화 1366·심리 상담 영역입니다.</strong> 무료·24시간.</strong>',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 고소 절차', href: '/guide/stalking/stalking-complaint-procedure' },
      { label: '잠정조치·접근금지', href: '/guide/stalking/stalking-emergency-measures' },
      { label: '스토킹 증거 수집', href: '/guide/stalking/stalking-evidence-collection' },
      { label: '스토킹 보호명령', href: '/guide/stalking/stalking-protection-order' },
      { label: '스토킹 민사 배상', href: '/guide/stalking/stalking-civil-damages' },
    ],
  },

  // ─── 7. stalking-delivery-rider-customer-address-leaked-track ───
  {
    domain: 'stalking',
    slug: 'stalking-delivery-rider-customer-address-leaked-track',
    keyword: '배달 라이더 고객 주소 반복 접근',
    questionKeyword: '배달 라이더(쿠팡·배민)가 본인 주소를 알고 \'사적 메시지·반복 접근\'을 하고 있어요. 어떻게 막아야 하나요?',
    ctaKeyword: '배달 라이더 주소 접근 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '배달 라이더 주소 접근 — 5단계 개인정보·스토킹 다툼 | 로앤가이드',
      description:
        '배달 라이더가 고객 주소·연락처 이용 사적 접근 시 개인정보보호법·스토킹처벌법 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배달 앱(쿠팡이츠·배민·요기요) 주문 후 배달 완료한 라이더가 본인 휴대전화로 \'얼굴 예쁘시네요·연락처 알려주세요\' 메시지를 보내기 시작했고, 거절 후에도 \'집 앞 자주 지나간다·만나고 싶다\' 메시지를 반복하고 있습니다. 본인은 \'배달 앱이 라이더에게 본인 주소·연락처를 노출한 사실\'을 알게 됐고, 라이더가 이를 이용해 사적 접근하는 상황이에요. 배달 앱에 신고했지만 \'개별 라이더 대응 불가\'라고 답하고, 본인은 거주 안전에 큰 불안을 느끼고 있습니다." 개인정보보호법은 \'수집 목적 외 이용 금지\'를 규정하고, 스토킹처벌법은 \'반복·지속 상대 의사 반함\' 행위를 처벌하는 영역입니다. 배달 앱은 \'개인정보 처리자\'로서 라이더 관리 책임 + 위반 시 처벌 + 손해배상 결합 트랙. 피해자라면 ① 스토킹 ② 개인정보 ③ 플랫폼 책임 ④ 형사 고소 ⑤ 민사 배상 5중 트랙이 가능한 영역. 대응은 ① 스토킹 ② 정보 ③ 플랫폼 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 배달 라이더 주소 접근 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 스토킹·정보·플랫폼·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 스토킹 행위 입증</strong> — 반복 메시지·집 앞 접근 정황.</li>\n<li><strong>② 개인정보 목적 외 이용</strong> — 배달 목적 외 사적 이용.</li>\n<li><strong>③ 플랫폼 책임</strong> — 배달 앱의 개인정보 처리자 책임.</li>\n<li><strong>④ 형사 고소</strong> — 스토킹처벌법 + 개인정보보호법.</li>\n<li><strong>⑤ 민사 배상</strong> — 위자료·생활 불안.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 배달 앱은 \'개인정보 처리자\'로서 라이더 관리 책임. 라이더 사적 이용 + 플랫폼 관리 부재 결합 시 다중 책임 평가 가능 트랙. 스토킹처벌법 + 개인정보보호법 결합 형사 처벌 강화.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·잠정·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 메시지·정황 자료 보존 (즉시)</strong> — 카톡·문자·접근 정황.</li>\n<li><strong>2단계 — 배달 앱 신고 (1주)</strong> — 플랫폼 신고 + 라이더 차단.</li>\n<li><strong>3단계 — 112 신고 + 잠정조치 (1~2주)</strong> — 경찰 스토킹 신고.</li>\n<li><strong>4단계 — 개인정보 신고 + 형사 고소 (1개월 내)</strong> — 개인정보위·경찰.</li>\n<li><strong>5단계 — 민사 배상 + 거주 안전 조치</strong> — 위자료 + 거주 변경 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 접근금지·처벌 가능성, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">배달 라이더 주소 접근 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 스토킹·정보·플랫폼 갈래입니다.</strong></p>\n<ul>\n<li><strong>라이더 메시지·문자 기록</strong></li>\n<li><strong>집 앞 접근 정황 자료 (CCTV·증인)</strong></li>\n<li><strong>배달 앱 주문 내역·라이더 정보</strong></li>\n<li><strong>플랫폼 신고 접수증</strong></li>\n<li><strong>본인 거부 의사 표현 자료</strong></li>\n<li><strong>112 신고 접수증</strong></li>\n<li><strong>의사 진단서 (생활 불안·정신적 충격)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 배달 앱은 \'개인정보 처리자\' 책임 영역. 플랫폼 신고 + 개인정보위 신고 + 경찰 동시 진행이 효과적. 거주 안전 우려 시 임시 거주 변경도 검토.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>스토킹</strong> — 반복·상대 의사 반함.</li>\n<li><strong>개인정보 목적 외 이용</strong> — 배달 목적 외 사적 이용.</li>\n<li><strong>플랫폼 책임</strong> — 개인정보 처리자 + 라이더 관리.</li>\n<li><strong>형사 처벌</strong> — 스토킹 + 개인정보보호법 결합.</li>\n<li><strong>민사 배상</strong> — 위자료·생활 불안.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰 112 (스토킹 긴급 신고)</strong></li>\n<li><strong>개인정보보호위원회 118</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 스토킹범죄 객관적 평가 영역',
        summary:
          '대법원 2025도36(대법원, 2025.10.30 선고) 영역에서 법원은 스토킹범죄의처벌등에관한법률위반 사건에서 구 스토킹범죄의 처벌 등에 관한 법률 제2조 제1호 각 목의 행위가 객관적·일반적으로 볼 때 이를 인식한 상대방에게 불안감 또는 공포심을 일으키는지 여부 평가를 다루면서, 행위의 성격·반복성·상대 의사 평가가 결정 사정이라고 본 사례 흐름이 있고, 배달 라이더 사적 접근에도 동일 평가 기준이 적용됩니다.',
        takeaway: '배달 라이더 사적 접근은 스토킹 + 개인정보 + 플랫폼 책임 결합 영역 — 변호인 상담·신속 신고 권장.',
      },
    ],
    faq: [
      {
        question: '배달 앱이 본인 주소를 라이더에게 노출하나요?',
        answer:
          '<strong>배달 목적 범위 내 노출 영역입니다.</strong> 사적 이용은 목적 외 위반.',
      },
      {
        question: '플랫폼에 신고했는데 \'개별 대응 불가\'라고 해요',
        answer:
          '<strong>개인정보 처리자 책임 + 관리 의무 위반 영역입니다.</strong> 개인정보위 별도 신고.',
      },
      {
        question: '거주 안전이 걱정돼요',
        answer:
          '<strong>잠정조치 + 거주 임시 변경 검토 영역입니다.</strong> 여성긴급전화 1366 상담.',
      },
      {
        question: '라이더 신원을 어떻게 확인하나요?',
        answer:
          '<strong>배달 앱·플랫폼 협조로 가능한 영역입니다.</strong> 주문 내역·라이더 정보 보존.',
      },
      {
        question: '심리적 충격이 심해요',
        answer:
          '<strong>여성긴급전화 1366·심리 상담 영역입니다.</strong> 무료·24시간.',
      },
    ],
    cta: { text: '접근금지·처벌 가능성, AI로 확인하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 고소 절차', href: '/guide/stalking/stalking-complaint-procedure' },
      { label: '잠정조치·접근금지', href: '/guide/stalking/stalking-emergency-measures' },
      { label: '스토킹 증거 수집', href: '/guide/stalking/stalking-evidence-collection' },
      { label: '개인정보 침해 대응', href: '/guide/stalking/stalking-personal-info-violation' },
      { label: '스토킹 민사 배상', href: '/guide/stalking/stalking-civil-damages' },
    ],
  },
];
