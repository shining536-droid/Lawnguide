import { SpokePage } from '../spoke-pages';

// batch63 defamation·jeonse·stalking — 7개 (2026-05-13)
//
// 고유 존재 이유:
// defamation 3:
// 1. 맘카페 실명 험담 — 동네 맘카페에서 본인 실명·아이 이름·동·호수 험담 트랙.
// 2. 배달 라이더 악의 후기 — 배달앱 별점 테러 + 영업방해 결합 트랙.
// 3. 전문가 평판 플랫폼(변호사·의사) 별점 — 후기 플랫폼 책임·삭제 트랙.
// jeonse 2:
// 1. 신축 다세대 근저당 후순위 — 입주 후 임대인이 추가 근저당 설정한 보증금 위협 트랙.
// 2. 부동산 중개사 보증금 횡령 — 중개사가 보증금 직접 받고 잠적한 추적 트랙.
// stalking 2:
// 1. 헬스장 PT 트레이너 회원 스토킹 — 운동 후 사적 연락·미행 트랙.
// 2. 학원 강사 학생·학부모 스토킹 — 강사의 학생·학부모 사적 연락·접근 트랙.

export const spokesBatch63DefameJeonseStalking: SpokePage[] = [
  // ─── 1. defamation-momcafe-realname-criticism-track ───
  {
    domain: 'defamation',
    slug: 'defamation-momcafe-realname-criticism-track',
    keyword: '맘카페 실명 험담',
    questionKeyword: '동네 맘카페에 본인 실명·아이 이름·아파트 동호수까지 적시되며 험담이 올라왔어요.',
    ctaKeyword: '맘카페 실명 험담 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '맘카페 실명 험담 — 5단계 카페 책임·작성자 추적 | 로앤가이드',
      description:
        '동네 맘카페에서 본인 실명과 거주지가 노출된 험담이 올라왔다면 명예훼손·삭제·작성자 추적 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"동네 맘카페(회원 5천 명)에 본인 실명·아이 이름·아파트 동호수까지 적시 후 \'아이 키 안 시킨다\' \'층간소음 진상\' 험담 글. 댓글 30개 동조. 학교에까지 소문이 퍼지기 시작했습니다." 맘카페 실명·거주지 적시 험담은 ① 정보통신망법 제70조 명예훼손(허위 시 가중) ② 특정성·공연성 명백 ③ 카페 운영자 삭제 의무 ④ 작성자 추적 영역. 지역 카페는 회원 다수 + 지역 한정으로 피해가 즉각적이라 빠른 삭제 + 운영자 책임 + 작성자 특정 트랙이 핵심. 대응 트랙은 ① 캡처·아카이브 ② 카페 운영자 삭제 요청 ③ 사이버수사대 신고 ④ 정통망법 고소 ⑤ 민사 손해배상 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 맘카페 실명 험담 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 캡처·삭제·신고·고소·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 캡처·URL·댓글 아카이브</strong> — 삭제 전 즉시.</li>\n<li><strong>② 카페 운영자 삭제 요청</strong> — 정통망법 제44조의2.</li>\n<li><strong>③ 방심위·사이버수사대 신고</strong></li>\n<li><strong>④ 정통망법 70조 고소 (6개월)</strong></li>\n<li><strong>⑤ 민사 손해배상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 실명·거주지 명시 = 특정성 명백. 회원 5천 명 = 공연성 명백. 운영자 미삭제 시 방조 책임.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·삭제·고소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 전체 캡처·URL·시각 보존 (즉시)</strong></li>\n<li><strong>2단계 — 카페 운영자에 삭제 요청 (1주, 정통망법 제44조의2)</strong></li>\n<li><strong>3단계 — 방심위 신고·삭제 명령 검토</strong></li>\n<li><strong>4단계 — 정통망법 명예훼손 고소 (6개월)</strong></li>\n<li><strong>5단계 — 민사 손해배상 (시효 3년)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">맘카페 실명 험담 대응을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 캡처·식별·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>게시글·댓글 전체 캡처 (URL·시각)</strong></li>\n<li><strong>카페 회원수·운영자 정보</strong></li>\n<li><strong>본인 실명·아이·거주지 식별 자료</strong></li>\n<li><strong>주변에 퍼진 정황 (학교·지인 진술)</strong></li>\n<li><strong>피해 입증 (상담·진료 기록)</strong></li>\n<li><strong>본인 신분증</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>운영자 방조 책임</strong> — 미삭제 시 가담.</li>\n<li><strong>특정성</strong> — 실명·동호수는 명백.</li>\n<li><strong>아동 식별 정보</strong> — 개인정보법 별도 위반 가능.</li>\n<li><strong>댓글 가담자</strong> — 동조도 처벌 영역.</li>\n<li><strong>고소 6개월 시효</strong></li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버수사대 ECRM</strong></li>\n<li><strong>방심위 1377</strong></li>\n<li><strong>개인정보분쟁조정위 1833-6972</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 카페·게시판 실명 명예훼손',
        summary:
          '대법원 2022도699 영역 등에서 법원은 인터넷 카페·게시판에 실명을 적시한 비방성 글에 대해 정보통신망법상 명예훼손이 성립하며, 운영자가 인지 후에도 삭제하지 않은 경우 일정 범위에서 책임이 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '실명 + 거주지 적시 = 특정성·공연성 명백. 운영자 미삭제 = 방조 평가.',
      },
    ],
    faq: [
      {
        question: '카페 운영자가 삭제 거부하면?',
        answer:
          '<strong>방심위 통한 삭제 명령 요청 가능합니다.</strong> 운영자도 가담 책임 영역.',
      },
      {
        question: '아이 이름까지 적힌 건 별도 처벌인가요?',
        answer:
          '<strong>개인정보보호법 위반 별도 신고 가능 영역입니다.</strong>',
      },
      {
        question: '댓글 단 회원도 처벌되나요?',
        answer:
          '<strong>가능 영역입니다.</strong> 확산·동조 댓글도 명예훼손 가담.',
      },
      {
        question: '카페 가입 안 했는데 알 수 있나요?',
        answer:
          '<strong>가입 회원에게 캡처 요청 또는 영장으로 확인 가능 영역입니다.</strong>',
      },
    ],
    cta: { text: '명예훼손 대응 순서, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-complaint-procedure' },
      { label: '온라인 게시 삭제', href: '/guide/defamation/defamation-online-post-removal' },
      { label: '명예훼손 위자료', href: '/guide/defamation/defamation-damages-amount' },
      { label: '방심위 삭제 요청', href: '/guide/defamation/defamation-broadcast-commission-removal' },
      { label: '카페 운영자 책임', href: '/guide/defamation/defamation-platform-operator-liability' },
    ],
  },

  // ─── 2. defamation-delivery-rider-customer-review-track ───
  {
    domain: 'defamation',
    slug: 'defamation-delivery-rider-customer-review-track',
    keyword: '배달 라이더 악의 후기',
    questionKeyword: '배달 라이더로 정상 배달했는데 고객이 \'무례\' \'사기꾼\' 후기로 별점 1점을 줬어요.',
    ctaKeyword: '라이더 악의 후기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '배달 라이더 악의 후기 — 5단계 명예·영업 결합 | 로앤가이드',
      description:
        '배달 라이더가 정상 배달 후 허위 별점·악의 후기를 받았다면 명예훼손·영업방해·삭제 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배민커넥트 라이더 활동 중 정상 배달(엘리베이터 사진 + 인증 완료) 후 고객이 \'태도 무례\' \'사기꾼\' 1점 후기. 본인 배차 거절률 상승·일감 30% 감소. 본인 닉네임·얼굴 사진 노출도 우려됩니다." 배달 플랫폼 라이더 악의 후기는 ① 정보통신망법 명예훼손(허위 시) ② 영업방해(일감 감소) ③ 플랫폼 삭제 의무 ④ 별점 정정 요청 트랙. 정상 배달 입증 + 별점 영향 입증이 핵심. 대응 트랙은 ① 배달 증거 보존 ② 플랫폼 삭제·정정 요청 ③ 사이버수사대 ④ 명예·영업 통합 고소 ⑤ 민사 손해배상 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 배달 라이더 후기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·삭제·신고·고소·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 정상 배달 증거 보존</strong> — 인증 사진·GPS·시각.</li>\n<li><strong>② 플랫폼 삭제·정정 요청</strong></li>\n<li><strong>③ 사이버수사대 신고</strong></li>\n<li><strong>④ 정통망법·영업방해 통합 고소 (6개월)</strong></li>\n<li><strong>⑤ 민사 손해배상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \"사기꾼\" 표현 = 허위 명예훼손. 배차 감소·일감 감소 입증 시 영업방해 결합 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·삭제·고소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 배달 증거·GPS·인증 사진 (즉시)</strong></li>\n<li><strong>2단계 — 플랫폼 삭제·정정 요청 (1주)</strong></li>\n<li><strong>3단계 — 사이버수사대 신고</strong></li>\n<li><strong>4단계 — 명예·영업방해 통합 고소 (6개월)</strong></li>\n<li><strong>5단계 — 민사 손해배상 (시효 3년)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">배달 라이더 악의 후기 대응을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 배달·후기·손해 갈래입니다.</strong></p>\n<ul>\n<li><strong>배달 인증 사진 (엘리베이터·문 앞)</strong></li>\n<li><strong>플랫폼 GPS·배달 시각 로그</strong></li>\n<li><strong>고객 후기·별점 캡처</strong></li>\n<li><strong>배차·일감 감소 자료 (수입 비교)</strong></li>\n<li><strong>본인 라이더 ID·플랫폼 협조 자료</strong></li>\n<li><strong>본인 신분증</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"사기꾼" = 허위 사실</strong></li>\n<li><strong>영업 손해 입증</strong> — 배차·수입 감소 비교.</li>\n<li><strong>플랫폼 삭제 의무</strong> — 정통망법.</li>\n<li><strong>주관적 의견 vs 허위</strong></li>\n<li><strong>고객 특정성</strong> — 닉네임·주문번호로 추적.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버수사대 ECRM</strong></li>\n<li><strong>방심위 1377</strong></li>\n<li><strong>플랫폼 라이더 노조·상담</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 플랫폼 별점·후기 명예훼손',
        summary:
          '대법원 2025도13674 영역 등에서 법원은 정상적인 거래·서비스 제공이었음에도 \"사기꾼\" 등 허위 사실로 후기를 작성한 행위는 명예훼손이 성립하고, 서비스 활동에 미친 영향에 따라 영업방해죄도 함께 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '\"사기꾼\" = 허위 명예훼손 + 영업방해 결합. 정상 배달 입증이 분기점.',
      },
    ],
    faq: [
      {
        question: '플랫폼이 후기 삭제 안 해주면?',
        answer:
          '<strong>방심위 삭제 명령 요청 가능합니다.</strong>',
      },
      {
        question: '일감 감소 입증 어떻게?',
        answer:
          '<strong>후기 전·후 수입·배차율 비교 자료로 입증 가능 영역입니다.</strong>',
      },
      {
        question: '고객 신원 모르는데 고소되나요?',
        answer:
          '<strong>플랫폼 협조 또는 영장으로 신원 확인 가능 영역입니다.</strong>',
      },
      {
        question: '단순 "별로" 후기도 처벌되나요?',
        answer:
          '<strong>주관적 의견은 처벌 어렵습니다.</strong> 허위·비방 목적이 핵심.',
      },
    ],
    cta: { text: '명예훼손 대응 순서, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-complaint-procedure' },
      { label: '영업방해죄', href: '/guide/defamation/defamation-business-interference' },
      { label: '온라인 후기 삭제', href: '/guide/defamation/defamation-online-review-removal' },
      { label: '명예훼손 위자료', href: '/guide/defamation/defamation-damages-amount' },
      { label: '플랫폼 운영자 책임', href: '/guide/defamation/defamation-platform-operator-liability' },
    ],
  },

  // ─── 3. defamation-lawyer-doctor-rating-platform-track ───
  {
    domain: 'defamation',
    slug: 'defamation-lawyer-doctor-rating-platform-track',
    keyword: '변호사 의사 평판 플랫폼 별점',
    questionKeyword: '본인이 변호사인데 평판 플랫폼에 \'사기 변호사\' 후기가 올라왔어요. 사건은 정상 진행했는데요.',
    ctaKeyword: '전문가 평판 별점 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '변호사·의사 평판 플랫폼 별점 — 5단계 영업·인격 결합 | 로앤가이드',
      description:
        '변호사·의사 등 전문가가 평판 플랫폼에서 허위 별점·악의 후기를 받았다면 명예훼손·영업방해·삭제 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인 변호사. 사건 패소했지만 정상 진행. 의뢰인이 평판 플랫폼(로톡·굿닥류)에 \'사기 변호사\' \'돈만 받고 일 안 함\' 별점 1점 후기. 본인 상담 문의 50% 감소. 사건 기록상 정상 진행 입증 가능합니다." 전문가 평판 플랫폼 명예훼손은 ① 정통망법 명예훼손 ② 영업방해 ③ 플랫폼 책임 ④ 별점·후기 삭제 트랙. 전문직은 평판이 핵심 자산이라 영업 손해 입증이 비교적 수월. 다만 사건 결과(승소/패소)와 별개로 \"사기\" 표현은 허위 사실 영역. 대응 트랙은 ① 사건 기록 정상 입증 ② 플랫폼 삭제 요청 ③ 사이버수사대 ④ 명예·영업 통합 고소 ⑤ 민사 손해배상 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 전문가 평판 별점 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·삭제·신고·고소·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사건·진료 정상 입증</strong> — 기록·동의서.</li>\n<li><strong>② 플랫폼 삭제·정정 요청</strong></li>\n<li><strong>③ 사이버수사대 신고</strong></li>\n<li><strong>④ 명예·영업방해 통합 고소</strong></li>\n<li><strong>⑤ 민사 손해배상 (영업 손해 포함)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사건 패소 자체는 사실이라도 \"사기\" 표현은 허위. 전문직 영업 손해 입증 수월.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·삭제·고소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사건·진료 기록 정리 (즉시)</strong></li>\n<li><strong>2단계 — 플랫폼 삭제·정정 요청 (1주)</strong></li>\n<li><strong>3단계 — 사이버수사대 신고</strong></li>\n<li><strong>4단계 — 명예·영업방해 통합 고소 (6개월)</strong></li>\n<li><strong>5단계 — 민사 손해배상 (시효 3년)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">전문가 평판 별점 대응을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 직무·후기·손해 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인 자격증·직무 입증</strong></li>\n<li><strong>의뢰·진료 계약·동의서</strong></li>\n<li><strong>사건·진료 진행 기록</strong></li>\n<li><strong>후기·별점 캡처 (URL·시각)</strong></li>\n<li><strong>상담 문의·매출 감소 자료</strong></li>\n<li><strong>의뢰인·환자 신원 확인 가능 자료</strong></li>\n<li><strong>본인 신분증</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>의뢰인·환자 의견 vs 허위</strong> — 패소·의료 결과 ≠ 사기.</li>\n<li><strong>전문직 영업 손해</strong> — 평판 자산 큼.</li>\n<li><strong>플랫폼 책임</strong> — 운영자 삭제 의무.</li>\n<li><strong>비밀유지 의무 충돌</strong> — 변호사 비밀·의사 의무 침해 별개 대응.</li>\n<li><strong>공익성 항변</strong> — 일반 시민의 정당한 평가는 인정 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버수사대 ECRM</strong></li>\n<li><strong>변호사회·의사회 (분야별)</strong></li>\n<li><strong>방심위 1377</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전문직 후기 명예훼손',
        summary:
          '대법원 2024도11353 영역 등에서 법원은 의뢰인·환자가 정당한 평가 범위를 넘어 \"사기\" 등 허위 사실을 적시한 경우 명예훼손이 성립할 수 있고, 전문직의 평판 손해는 영업방해와 결합해 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '패소·의료 결과 ≠ 사기. 허위 사실 적시 + 영업 손해 입증 시 결합 트랙.',
      },
    ],
    faq: [
      {
        question: '의뢰인의 솔직한 평가도 처벌되나요?',
        answer:
          '<strong>주관적 의견은 보호 영역입니다.</strong> 다만 \"사기\" 등 허위 사실은 별개.',
      },
      {
        question: '플랫폼이 책임 회피하면?',
        answer:
          '<strong>방심위·민사 청구로 책임 추궁 가능합니다.</strong>',
      },
      {
        question: '비밀유지 의무 위반은 별도 대응?',
        answer:
          '<strong>네, 의뢰인·환자 정보 공개 자체는 별도 위반 영역입니다.</strong>',
      },
      {
        question: '영업 손해 산정 어떻게?',
        answer:
          '<strong>매출·상담 문의 감소 + 평판 회복 비용으로 산정 영역입니다.</strong>',
      },
    ],
    cta: { text: '명예훼손 대응 순서, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 고소 절차', href: '/guide/defamation/defamation-complaint-procedure' },
      { label: '영업방해죄', href: '/guide/defamation/defamation-business-interference' },
      { label: '명예훼손 위자료', href: '/guide/defamation/defamation-damages-amount' },
      { label: '플랫폼 운영자 책임', href: '/guide/defamation/defamation-platform-operator-liability' },
      { label: '온라인 후기 삭제', href: '/guide/defamation/defamation-online-review-removal' },
    ],
  },

  // ─── 4. jeonse-newbuild-late-mortgage-priority-loss-track ───
  {
    domain: 'jeonse',
    slug: 'jeonse-newbuild-late-mortgage-priority-loss-track',
    keyword: '신축 다세대 입주 후 근저당 설정',
    questionKeyword: '신축 다세대 입주 후 임대인이 근저당을 새로 설정했어요. 보증금 후순위가 되나요?',
    ctaKeyword: '입주 후 근저당 후순위 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '입주 후 근저당 후순위 — 5단계 우선순위·해지 점검 | 로앤가이드',
      description:
        '신축 다세대 입주 후 임대인이 근저당을 추가 설정해 보증금이 위협받는다면 우선순위·해지 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3개월 전 신축 다세대 전세 1.8억 입주(전입신고·확정일자 완료). 등기부 깨끗했는데 어제 확인하니 임대인이 2주 전 은행 근저당 2억 설정. 본인 보증금 후순위 위협. 임대인은 \'곧 갚는다\' 안심시키지만 불안합니다." 주임법 제3조의2는 임차인이 ① 인도 + 주민등록(전입신고) + 확정일자를 갖춘 \'그 다음 날\'부터 대항력·우선변제권 발생을 정한 영역. 본인이 먼저 전입·확정일자 → 근저당 설정이 그 후라면 본인이 선순위 영역. 단 추가 근저당이 보증금을 침해 정도면 ① 계약 해지 검토 ② 보증금 일부 반환 청구 ③ 보증보험 가입 ④ 경매 시 우선변제 5단계 점검이 필요합니다.</p>',
    sections: [
      {
        title: 'Q. 입주 후 근저당 후순위 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 우선순위·해지·반환·보증·경매 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 본인 전입·확정일자 vs 근저당 일자</strong></li>\n<li><strong>② 계약 해지 사유 검토 (임대인 신뢰위반)</strong></li>\n<li><strong>③ 보증금 일부 반환·감액 협상</strong></li>\n<li><strong>④ HUG 전세보증보험 가입 (가능 시)</strong></li>\n<li><strong>⑤ 경매 시 우선변제권 행사</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 본인 대항력 발생일 < 근저당 설정일이면 본인 선순위. 다만 추가 근저당이 보증금을 위협 정도면 즉시 대응.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 점검 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 확인·해지·보증 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 등기부 발급·일자 비교 (즉시)</strong></li>\n<li><strong>2단계 — 임대인에 해명·내용증명 발송 (1주)</strong></li>\n<li><strong>3단계 — 계약 해지 또는 감액 협상</strong></li>\n<li><strong>4단계 — HUG 보증보험 가입 또는 임차권등기 검토</strong></li>\n<li><strong>5단계 — 경매·임의 매각 시 우선변제권 행사</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">입주 후 근저당 후순위 대응을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 등기·계약·통지 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서·확정일자 영수</strong></li>\n<li><strong>주민등록 등본·전입신고일</strong></li>\n<li><strong>최신 등기부 (근저당 일자 표시)</strong></li>\n<li><strong>임대인 내용증명·답변</strong></li>\n<li><strong>HUG 보증보험 가입 자료</strong></li>\n<li><strong>본인 신분증</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대항력 발생일</strong> — 인도 + 전입 + 확정일자 \'다음 날\'.</li>\n<li><strong>근저당 설정일</strong> — 등기부 갑·을구 비교.</li>\n<li><strong>임대인 신뢰위반</strong> — 해지 사유 가능.</li>\n<li><strong>보증금 침해 정도</strong> — 시세 vs 근저당 + 보증금 합계.</li>\n<li><strong>HUG 가입 시점</strong> — 잔금 전 가입 가능 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>HUG 1566-9009</strong></li>\n<li><strong>주택임대차분쟁조정위 1670-3993</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국토부 부동산민원 (1599-0001)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차인 대항력 vs 후순위 근저당',
        summary:
          '대법원 2024다326398 영역 등에서 법원은 임차인이 인도·주민등록·확정일자를 갖춘 다음 날부터 우선변제권이 발생하므로, 그 이후 설정된 근저당권에 대해 임차보증금이 우선 보호받을 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '본인 대항력 발생일 < 근저당 설정일 → 본인 선순위. 일자 비교가 분기점.',
      },
    ],
    faq: [
      {
        question: '근저당 알리지 않은 임대인 처벌되나요?',
        answer:
          '<strong>고지의무 위반·사기 검토 가능 영역입니다.</strong>',
      },
      {
        question: '지금이라도 HUG 보증보험 가입 가능한가요?',
        answer:
          '<strong>일부 가능 영역입니다.</strong> 임대인 동의·신용 평가 변수.',
      },
      {
        question: '계약 해지하고 나가도 보증금 받나요?',
        answer:
          '<strong>임차권등기 후 이사 시 대항력 유지 가능 영역입니다.</strong>',
      },
      {
        question: '근저당이 본인 대항력보다 늦으면 안전?',
        answer:
          '<strong>법적으로 선순위지만 경매 시 시세·낙찰가 변수 영역입니다.</strong>',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '대항력 발생 요건', href: '/guide/jeonse/jeonse-counterforce-requirement' },
      { label: '확정일자 우선변제권', href: '/guide/jeonse/jeonse-priority-right' },
      { label: 'HUG 보증보험', href: '/guide/jeonse/jeonse-hug-guarantee-procedure' },
      { label: '임차권등기명령', href: '/guide/jeonse/jeonse-lease-registration' },
      { label: '경매 우선변제', href: '/guide/jeonse/jeonse-auction-priority' },
    ],
  },

  // ─── 5. jeonse-broker-deposit-misappropriation-track ───
  {
    domain: 'jeonse',
    slug: 'jeonse-broker-deposit-misappropriation-track',
    keyword: '부동산 중개사 보증금 횡령',
    questionKeyword: '부동산 중개사를 통해 보증금을 송금했는데 임대인에게 전달되지 않고 중개사가 잠적했어요.',
    ctaKeyword: '중개사 보증금 횡령 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '중개사 보증금 횡령 — 5단계 형사·공제·민사 | 로앤가이드',
      description:
        '부동산 중개사가 보증금을 받고 잠적했다면 형사·공제금·민사 5가지 추적·회수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중개사 말 \'임대인이 외출 중이라 본인 계좌로 일단 보내달라\'에 1.5억 송금. 며칠 뒤 임대인에게 확인하니 \'보증금 못 받았다\'. 중개사 연락 두절. 사무실 폐쇄 확인. 신축 빌라 같은 라인에서 4명 추가 피해 발생." 중개사 보증금 횡령은 ① 형법 제355조 횡령·사기 ② 공인중개사법상 손해배상책임보험 ③ 한국공인중개사협회 공제금 ④ 민사 손해배상 트랙. 협회 공제금은 1억 한도 영역. 다수 피해자 시 집단 대응 효과적. 대응 트랙은 ① 형사 고소 ② 공제금 청구 ③ 임대인 직접 대응 ④ 협회 신고 ⑤ 민사 손해배상 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 중개사 보증금 횡령 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 형사·공제·임대인·협회·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 형법 355조 횡령·사기 고소 (즉시)</strong></li>\n<li><strong>② 한국공인중개사협회 공제금 청구 (1억 한도)</strong></li>\n<li><strong>③ 임대인에 직접 보증금 인정 협상</strong></li>\n<li><strong>④ 협회·구청 등록 취소 신고</strong></li>\n<li><strong>⑤ 민사 손해배상 (시효 3년)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 협회 공제 1억 한도 + 임대인 직접 대응 + 형사 추적 병행. 다수 피해자 시 집단 고소·민사 효과적.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 고소·공제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 송금·계약 증거 보존, 경찰 고소 (즉시)</strong></li>\n<li><strong>2단계 — 한국공인중개사협회 공제금 청구 (피해 발생일 ~)</strong></li>\n<li><strong>3단계 — 임대인 직접 협상·내용증명</strong></li>\n<li><strong>4단계 — 협회·구청 등록 취소 신고</strong></li>\n<li><strong>5단계 — 민사 손해배상 (시효 3년)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">중개사 횡령 대응을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·송금·중개사 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서·중개대상물 확인서</strong></li>\n<li><strong>중개사 사업자등록증·자격증·중개사무소 등록증</strong></li>\n<li><strong>송금 영수증·계좌 내역</strong></li>\n<li><strong>중개사와 카톡·문자·통화 녹음</strong></li>\n<li><strong>임대인 확인 진술·문자</strong></li>\n<li><strong>공인중개사 공제증서</strong></li>\n<li><strong>본인 신분증</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>중개사 계좌 송금 적법성</strong> — 통상 임대인 직접 송금이 원칙.</li>\n<li><strong>공제금 한도 1억</strong> — 초과분 별도 회수.</li>\n<li><strong>임대인 인정 여부</strong> — 임대인이 \"받았다\"고 하면 계약 유효.</li>\n<li><strong>중개사 잠적·도주</strong> — 출국금지·체포 신청.</li>\n<li><strong>다수 피해자 공동 대응</strong> — 효율·효과 큼.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국공인중개사협회 (공제금)</strong></li>\n<li><strong>경찰 사기·횡령 전담</strong></li>\n<li><strong>전세사기피해지원센터 1533-8119</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 중개사 횡령·고지의무 위반',
        summary:
          '대법원 2024다283668 영역 등에서 법원은 공인중개사가 중개과정에서 주의의무를 위반하거나 보증금 관련 사실을 적정하게 고지하지 않은 경우 손해배상 책임이 인정될 여지가 있고, 협회 공제금 청구도 가능한 트랙임을 인정한 사례 흐름이 있습니다.',
        takeaway: '중개사 횡령·고지의무 위반 시 협회 공제금 1억 + 형사·민사 병행 트랙.',
      },
    ],
    faq: [
      {
        question: '협회 공제금 1억 어떻게 청구하나요?',
        answer:
          '<strong>한국공인중개사협회에 공제금 청구서 + 계약·송금 증빙 제출 영역입니다.</strong>',
      },
      {
        question: '임대인이 "안 받았다"면 계약 무효?',
        answer:
          '<strong>중개사 사기 입증 시 임대인 책임 면제 영역, 본인이 손해 부담 가능.</strong>',
      },
      {
        question: '중개사 잠적해도 추적 가능?',
        answer:
          '<strong>출국금지·체포·재산조회 등 형사 절차로 추적 영역입니다.</strong>',
      },
      {
        question: '같은 라인 4명 피해자도 공동 대응?',
        answer:
          '<strong>네, 공동 고소·집단 민사가 효율적입니다.</strong>',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '중개사 책임', href: '/guide/jeonse/jeonse-broker-liability' },
      { label: '협회 공제금 청구', href: '/guide/jeonse/jeonse-broker-insurance-claim' },
      { label: '전세사기 피해 신고', href: '/guide/jeonse-fraud/jeonse-fraud-victim-response' },
      { label: '보증금 송금 안전', href: '/guide/jeonse/jeonse-deposit-transfer-safety' },
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
    ],
  },

  // ─── 6. stalking-pt-trainer-member-track ───
  {
    domain: 'stalking',
    slug: 'stalking-pt-trainer-member-track',
    keyword: '헬스장 PT 트레이너 회원 스토킹',
    questionKeyword: '헬스장 PT 트레이너가 본인 회원에게 운동 시간 외에도 연락·SNS 팔로우·집 앞 출몰을 합니다.',
    ctaKeyword: 'PT 트레이너 스토킹 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'PT 트레이너 회원 스토킹 — 5단계 신고·헬스장 분리 | 로앤가이드',
      description:
        '헬스장 PT 트레이너가 회원에게 스토킹을 한다면 스토킹법·시설 운영자 책임 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"PT 트레이너에게 본인 휴대폰 번호·집 근처 카페 정보를 무심코 알렸어요. 이후 \'운동 외 사적 만남\' 거절 후 카톡 일 20개·집 근처 카페 \'우연히\' 출몰·SNS 다중 계정 팔로우. PT 환불 요청에도 \'정 안 좋다\' 빈정거리며 거부." 헬스장 PT 트레이너 스토킹은 ① 스토킹처벌법 ② 사업장 분리 의무 (시설 운영자 책임) ③ 잠정조치 트랙. 회원 개인정보를 직무상 알게 된 점은 가중 사유 영역. 대응 트랙은 ① 증거 보존 ② 헬스장 운영자 신고·트레이너 분리 ③ 경찰 신고·잠정조치 ④ 스토킹법 형사 고소 ⑤ 민사 손해배상 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. PT 트레이너 스토킹 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·시설·신고·고소·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 증거 보존</strong> — 카톡·SNS·CCTV·출몰 동선.</li>\n<li><strong>② 헬스장 운영자 신고·트레이너 출입 제한</strong></li>\n<li><strong>③ 경찰 신고·잠정조치 100m 접근금지</strong></li>\n<li><strong>④ 스토킹처벌법 형사 고소</strong></li>\n<li><strong>⑤ 민사 손해배상 (PT 환불 + 위자료)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직무상 회원 정보 입수 후 사적 사용 = 가중. 헬스장 운영자 미조치 시 시설 책임 평가.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·고소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 카톡·SNS·CCTV 보존 (즉시)</strong></li>\n<li><strong>2단계 — 헬스장 운영자 서면 신고·분리 요청 (3일)</strong></li>\n<li><strong>3단계 — 경찰 신고·잠정조치 청구 (1주)</strong></li>\n<li><strong>4단계 — 스토킹법 고소·PT 환불 청구</strong></li>\n<li><strong>5단계 — 민사 손해배상 (시효 3년)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">PT 트레이너 스토킹 대응을 AI가 안내합니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·시설·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>카톡·문자·SNS DM 캡처 (시간순)</strong></li>\n<li><strong>CCTV·집 앞 출몰 사진</strong></li>\n<li><strong>스토킹 일지 (날짜·시각·내용)</strong></li>\n<li><strong>PT 계약서·환불 신청 자료</strong></li>\n<li><strong>헬스장 신고서·운영자 회신</strong></li>\n<li><strong>본인 심리상담·진료 기록</strong></li>\n<li><strong>본인 신분증</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>직무상 회원 정보 사용</strong> — 개인정보법 별도 위반.</li>\n<li><strong>지속·반복성</strong> — 스토킹법 요건.</li>\n<li><strong>헬스장 책임</strong> — 시설 운영자 분리 의무.</li>\n<li><strong>PT 환불</strong> — 트레이너 귀책 시 위약금 면제.</li>\n<li><strong>잠정조치 위반 처벌</strong> — 별도 형사.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>112·여성긴급전화 1366</strong></li>\n<li><strong>경찰청 사이버수사대 ECRM</strong></li>\n<li><strong>한국소비자원 1372 (PT 환불)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 직무상 알게 된 정보로 스토킹',
        summary:
          '대법원 2025도36 영역 등에서 법원은 직무상 알게 된 피해자의 개인정보·생활 패턴을 이용해 반복적으로 접근·연락한 경우 스토킹처벌법의 \'지속·반복성\' 요건을 충족하고 양형이 가중될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '직무상 정보 사용 = 가중 사유. 시설 운영자 분리 의무 + 잠정조치가 안전 분기점.',
      },
    ],
    faq: [
      {
        question: '헬스장이 분리 거부하면?',
        answer:
          '<strong>업주에 시설 책임 추궁·소비자 신고 가능 영역입니다.</strong>',
      },
      {
        question: 'PT 환불 받을 수 있나요?',
        answer:
          '<strong>트레이너 귀책 사유로 위약금 없이 환불 영역입니다.</strong>',
      },
      {
        question: '잠정조치는 어떻게 신청?',
        answer:
          '<strong>경찰·검찰이 직권 신청, 피해자도 청구 가능 영역입니다.</strong>',
      },
      {
        question: '회원 정보 사용도 별도 처벌?',
        answer:
          '<strong>개인정보보호법 별도 위반 영역입니다.</strong>',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 고소 절차', href: '/guide/stalking/stalking-complaint-procedure' },
      { label: '잠정조치 100m', href: '/guide/stalking/stalking-emergency-measure' },
      { label: '스토킹 증거 수집', href: '/guide/stalking/stalking-evidence-collection' },
      { label: '시설 운영자 책임', href: '/guide/stalking/stalking-facility-operator-liability' },
      { label: 'PT 환불 분쟁', href: '/guide/small-claims/small-claims-pt-refund-dispute' },
    ],
  },

  // ─── 7. stalking-academy-teacher-student-parent-track ───
  {
    domain: 'stalking',
    slug: 'stalking-academy-teacher-student-parent-track',
    keyword: '학원 강사 학생 학부모 스토킹',
    questionKeyword: '학원 강사가 본인 자녀(중2)·본인(학부모)에게 사적 카톡·집 방문을 시도해요.',
    ctaKeyword: '학원 강사 스토킹 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '학원 강사 학생·학부모 스토킹 — 5단계 신고·학원 분리 | 로앤가이드',
      description:
        '학원 강사가 학생·학부모에게 스토킹을 한다면 스토킹법·학원 운영자 책임 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중2 자녀 다니는 영어학원 강사가 \'특별지도\' 명목으로 자녀 카톡 일 10개·집 방문 시도. 본인(학부모) 거부 후 본인에게도 \'얘기 좀 하자\' 카톡·집 앞 출몰. 학원에 신고했으나 \'개인 일\' 미온적 대응." 학원 강사가 학생·학부모를 스토킹하는 사안은 ① 스토킹처벌법 ② 청소년 보호 가중 ③ 학원 운영자 분리 의무 ④ 교습소·학원법 행정처분 트랙. 미성년 자녀 대상이면 청소년성보호법 또는 아동복지법 결합 영역. 대응 트랙은 ① 증거 보존 ② 학원 신고·강사 분리 ③ 경찰 신고·잠정조치 ④ 스토킹법 형사 고소 ⑤ 교육청 행정 신고 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 학원 강사 스토킹 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·학원·신고·고소·행정 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 증거 보존</strong> — 카톡·집 앞 영상·녹음.</li>\n<li><strong>② 학원 신고·강사 분리·환불 요청</strong></li>\n<li><strong>③ 경찰 신고·잠정조치</strong></li>\n<li><strong>④ 스토킹법·아청법 형사 고소</strong></li>\n<li><strong>⑤ 교육청·관할 구청 학원 행정 신고</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 미성년 자녀 대상 시 아청법 결합 가능. 학원 미조치 시 행정처분·운영 정지 검토.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·행정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 카톡·집 앞 영상·진술 보존 (즉시)</strong></li>\n<li><strong>2단계 — 학원 운영자 서면 신고·환불 (3일)</strong></li>\n<li><strong>3단계 — 경찰 신고·잠정조치 청구 (1주)</strong></li>\n<li><strong>4단계 — 스토킹법·아청법 통합 고소</strong></li>\n<li><strong>5단계 — 교육청·구청 행정 신고</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">학원 강사 스토킹 대응을 AI가 안내합니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·학원·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>강사·자녀·본인 카톡·문자 캡처 (시간순)</strong></li>\n<li><strong>집 앞 CCTV·녹음·사진</strong></li>\n<li><strong>학원 계약서·환불 요청 자료</strong></li>\n<li><strong>학원 신고서·운영자 회신</strong></li>\n<li><strong>자녀 진술·심리상담 기록</strong></li>\n<li><strong>본인 정신과 진료 기록</strong></li>\n<li><strong>본인·자녀 신분증·가족관계증명</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>미성년 자녀 대상</strong> — 아청법·아동복지법 결합.</li>\n<li><strong>학원 운영자 책임</strong> — 분리·환불 의무.</li>\n<li><strong>강사 자격 정지</strong> — 행정처분 가능.</li>\n<li><strong>잠정조치 100m</strong> — 학원 출입 제한 효과.</li>\n<li><strong>학원비 환불</strong> — 강사 귀책 시 위약금 면제.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>112·여성긴급전화 1366</strong></li>\n<li><strong>아동학대 신고 112</strong></li>\n<li><strong>교육청 학원민원</strong></li>\n<li><strong>한국소비자원 1372 (환불)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 교육기관 종사자 스토킹·미성년 보호',
        summary:
          '대법원 2024도7832 영역 등에서 법원은 반복적·지속적 접근·연락은 스토킹처벌법의 행위에 해당하고, 피해자가 미성년인 경우 아동·청소년 보호법령 결합으로 더 엄정하게 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '학원 강사 미성년 학생 대상 = 스토킹법 + 아청법 결합. 학원 분리 의무 + 행정 신고 병행.',
      },
    ],
    faq: [
      {
        question: '학원이 강사 분리 거부하면?',
        answer:
          '<strong>교육청·구청에 행정 신고·운영 정지 검토 가능 영역입니다.</strong>',
      },
      {
        question: '학원비 환불 받을 수 있나요?',
        answer:
          '<strong>강사 귀책 사유로 위약금 없이 환불 영역입니다.</strong>',
      },
      {
        question: '미성년 자녀가 직접 진술해야 하나요?',
        answer:
          '<strong>전문가 동석 또는 영상 진술 가능 영역입니다.</strong>',
      },
      {
        question: '잠정조치로 학원 출입도 막을 수 있나요?',
        answer:
          '<strong>특정 장소 100m 접근금지 가능 영역입니다.</strong>',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 고소 절차', href: '/guide/stalking/stalking-complaint-procedure' },
      { label: '잠정조치 100m', href: '/guide/stalking/stalking-emergency-measure' },
      { label: '미성년 피해자 보호', href: '/guide/stalking/stalking-minor-victim-protection' },
      { label: '학원 운영자 책임', href: '/guide/stalking/stalking-academy-operator-liability' },
      { label: '아동학대 신고', href: '/guide/child-sex-crime/child-abuse-report-procedure' },
    ],
  },
];
