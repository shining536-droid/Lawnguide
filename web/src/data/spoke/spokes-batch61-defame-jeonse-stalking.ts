import { SpokePage } from '../spoke-pages';

// batch61 defamation·jeonse·stalking — 7개 (2026-05-11)
//
// 고유 존재 이유:
// defamation 3:
// 1. 앱 평점 1점 + 비판 텍스트 — 별점·서술 비판이 명예훼손에 해당하는지 다툼 트랙.
// 2. 잡플래닛·블라인드 익명 회사 리뷰의 회사·임직원 명예훼손 다툼 트랙.
// 3. 헬스 트레이너·강사 SNS 항의 게시물에 대한 트레이너 측 명예훼손 고소 피고소인 트랙.
//
// jeonse 2:
// 1. 임대인이 보증금 일부만 반환 + 잔액 공탁한 경우 임차인 대응 트랙.
// 2. 임대인 파산 시 임차인 우선변제권·전세권 행사 트랙.
//
// stalking 2:
// 1. 데이팅앱 거절 후 메시지·전화 폭주 스토킹 신고 트랙.
// 2. 부동산 손님과 중개사 반복방문·면담 스토킹 분류 트랙.

export const spokesBatch61DefameJeonseStalking: SpokePage[] = [
  // ─── 1. defamation / defamation-app-review-1star-criticism-track ───
  {
    domain: 'defamation',
    slug: 'defamation-app-review-1star-criticism-track',
    keyword: '앱 평점 1점 비판 명예훼손',
    questionKeyword: '앱스토어에서 별 1점 + \"환불 거부, 사기성 운영\"으로 적었더니 회사가 명예훼손 고소했어요',
    ctaKeyword: '앱 리뷰 명예훼손 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '앱 리뷰 1점 + 비판 — 5단계 명예훼손 다툼 | 로앤가이드',
      description:
        '앱스토어·구글플레이 별점 + 비판 텍스트로 회사 측 고소를 받았다면 사실 적시·공공이익·진실성 5가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"6개월 구독 결제 후 서비스 품질이 떨어져 환불 요청했는데 거절당했어요. 앱스토어에 별 1점 + \'환불 거부, 사기성 운영\'이라고 적었더니 회사 측에서 \'허위사실 적시 명예훼손\'으로 고소장 보내왔습니다. 사용 후기·평점이 명예훼손이 되는지 걱정됩니다." 형법 제307조 명예훼손 + 정보통신망법 제70조 사이버명예훼손은 적시된 사실의 진실성·공공의 이익이 핵심 자료입니다. 앱·서비스 사용 후기·평점은 \'소비자 평가\'에 해당해 공공의 이익 + 진실 적시 조합 시 위법성이 조각되는 사례가 일반적입니다. 다만 \'사기성\'·\'범죄자\' 같은 표현은 단순 평가를 넘어 허위사실 적시 영역으로 평가될 여지가 있는 사례. 대법원 2010도10130 영역에서 \'소비자 보호 목적 평가\'는 위법성 조각 자료로 평가된 사례가 흐름입니다.</p>',
    sections: [
      {
        title: 'Q. 앱 리뷰 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 표현 종류·사실·진실성·공익·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 표현 종류 (의견 vs 사실 적시)</strong> — \'서비스가 별로\'(의견) vs \'사기다\'(사실 적시). 사실 적시면 진실성·공익 검토.</li>\n<li><strong>② 사실의 진실성</strong> — 적시 사실이 객관적으로 사실인지. 환불 거부·서비스 다운 등 입증 자료.</li>\n<li><strong>③ 공공의 이익 (소비자 평가)</strong> — 다른 사용자에게 도움이 되는 평가 목적인지.</li>\n<li><strong>④ 비방 목적 여부</strong> — 정통망법 위반은 비방 목적이 핵심 요건. 일반 사용 후기는 비방 목적 부재 영역.</li>\n<li><strong>⑤ 합의·삭제 협상</strong> — 회사 측 요청 시 일부 표현 수정·삭제 합의 트랙.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 별점 + 사용 후기는 원칙적으로 위법성 조각 자료가 있는 영역. \'사기성\'·\'범죄자\' 같은 단어 사용은 다툼 자료라 표현 수정·삭제로 마무리 가능한 사례 다수.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·소명·합의·재판 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 리뷰 작성 자료 보존 (즉시)</strong> — 결제 영수증·환불 요청 메일·서비스 다운 캡처.</li>\n<li><strong>2단계 — 변호인 자문 + 진술 (1주)</strong> — 의견 vs 사실 적시 분류.</li>\n<li><strong>3단계 — 경찰 조사 (1~3개월)</strong> — 진실성·공익 자료 제출.</li>\n<li><strong>4단계 — 합의·표현 수정 (자기 의사)</strong> — 회사 측과 표현 수정·삭제 합의로 종결 가능 사례.</li>\n<li><strong>5단계 — 검찰·재판 (불기소 또는 약식·정식)</strong> — 진실성·공익 입증 시 불기소 가능 영역.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">앱 리뷰 명예훼손 다툼 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 리뷰·서비스·환불 갈래입니다.</strong></p>\n<ul>\n<li><strong>리뷰 캡처·작성 시점</strong> — 본인 작성 입증.</li>\n<li><strong>결제 영수증·구독 자료</strong> — 사용 관계 입증.</li>\n<li><strong>환불 요청 메일·고객센터 답변</strong> — 환불 거부 자료.</li>\n<li><strong>서비스 다운·오류 캡처</strong> — 사실 적시 진실성 자료.</li>\n<li><strong>유사 사용자 후기·SNS</strong> — 공공 평가 자료.</li>\n<li><strong>본인 신분증·통신 가입 자료</strong> — 조사용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사 측 합의 요구가 들어오면 \'표현 수정·삭제 + 합의금 면제\' 트랙으로 정리하는 사례가 일반적. 단, 합의금 거액 요구는 보존 자료 + 132 자문.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"\'사기다\' 표현은 허위사실" 주장 반박</strong> — 환불 거부 + 서비스 다운 자료 있으면 진실성 자료. 표현 수정 검토.</li>\n<li><strong>"비방 목적" 주장 반박</strong> — 일반 사용 후기는 비방 목적 부재. 다른 사용자 평가 자료가 자료.</li>\n<li><strong>공공의 이익 (소비자 보호)</strong> — 위법성 조각 자료. 진실성 + 공익 동시 필요.</li>\n<li><strong>의견 표명 vs 사실 적시</strong> — \'좋지 않다\'(의견) vs \'사기다\'(사실). 표현 분류 자료.</li>\n<li><strong>합의 트랙</strong> — 표현 수정·삭제로 사건 종결 가능 사례 다수.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 명예훼손 무료 상담.</li>\n<li><strong>한국소비자원 1372</strong> — 소비자 분쟁조정.</li>\n<li><strong>방송통신심의위원회 1377</strong> — 게시물 삭제·정정.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 소비자 평가의 위법성 조각',
        summary:
          '대법원 2010도10130 사건 영역에서 법원은 상품·서비스 이용 후 소비자가 다른 소비자에게 도움이 되는 평가를 목적으로 사실에 부합하는 정보를 적시한 경우 정보통신망법 제70조의 비방 목적이 부정될 여지가 있고, 그 표현이 진실에 부합하는 사실이라면 위법성이 조각될 수 있다는 취지로 본 영역으로 평가되는 사례가 있습니다.',
        takeaway: '앱 별점 + 사용 후기는 소비자 평가 영역으로 위법성 조각 자료가 있는 사례. 다만 \'사기\'·\'범죄\' 같은 표현은 별도 다툼 영역.',
      },
    ],
    faq: [
      {
        question: '\"환불 거부\"는 사실인데 \"사기성\"이 문제라고 합니다',
        answer:
          '<strong>표현 수정으로 합의 가능한 영역입니다.</strong> \'사기\' 단어는 다툼 자료. \'환불 거부\'만 남기고 수정 합의.',
      },
      {
        question: '회사가 합의금 1천만원 요구합니다',
        answer:
          '<strong>거액 요구는 132 자문 권장합니다.</strong> 표현 수정·삭제 + 합의금 면제 사례 다수. 변호인 자문.',
      },
      {
        question: '여러 사용자 후기와 같은 내용인데 저만 고소당했어요',
        answer:
          '<strong>유사 후기 자료가 공공 평가 입증 자료입니다.</strong> 다른 후기 캡처 보존.',
      },
      {
        question: '리뷰를 삭제하면 끝나나요?',
        answer:
          '<strong>삭제 + 합의서가 일반 종결 사례입니다.</strong> 회사 측 합의 후 처분 의사 거두는 영역.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '온라인 리뷰 진실 다툼', href: '/guide/defamation/defamation-online-review-truth-defense' },
      { label: '리뷰 플랫폼 삭제', href: '/guide/defamation/defamation-review-platform-malicious-removal' },
      { label: '명예훼손 종합', href: '/guide/defamation/defamation-requirements-checklist' },
      { label: '합의 영향', href: '/guide/defamation/defamation-spreader-accused-mitigation-settlement-track' },
      { label: '공공인 비판 보호', href: '/guide/defamation/defamation-public-figure-criticism-protect' },
    ],
  },

  // ─── 2. defamation / defamation-jobplanet-corporate-review-anonymous-track ───
  {
    domain: 'defamation',
    slug: 'defamation-jobplanet-corporate-review-anonymous-track',
    keyword: '잡플래닛 회사 리뷰 명예훼손',
    questionKeyword: '잡플래닛에 익명으로 \"인사담당자 갑질, 야근 강요\" 적었더니 회사가 명예훼손 고소했어요',
    ctaKeyword: '회사 리뷰 명예훼손 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '잡플래닛 회사 리뷰 명예훼손 — 5단계 다툼 | 로앤가이드',
      description:
        '잡플래닛·블라인드 익명 회사 리뷰로 회사·임직원 명예훼손 고소가 들어왔다면 5가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"퇴사 후 잡플래닛에 \'인사담당자 ○○○ 갑질, 정기 야근 강요, 임금체불 의심\'으로 익명 리뷰 적었어요. 한 달 뒤 회사 변호사 명의 내용증명 + 사이버명예훼손 고소장이 도착했습니다. 익명 작성이라 신원이 안 잡힐 줄 알았는데 IP 추적으로 특정됐어요." 익명 회사 리뷰도 사이버명예훼손 영역. 정보통신망법 제70조 위반 다툼이 가능한 자료입니다. 위법성 조각 요건은 ① 사실의 진실성 ② 공공의 이익 ③ 비방 목적 부재. 회사·임직원 평가가 \'재직 경험에 기반한 사실\' + \'다른 구직자에게 도움이 되는 정보\'면 위법성 조각 자료가 있는 영역. 다만 \'갑질\'·\'임금체불 의심\' 같은 표현 중 \'의심\' 단계는 다툼 자료. 진실성 입증 자료(녹취·동료 진술·체불 자료)가 결정적인 사례입니다.</p>',
    sections: [
      {
        title: 'Q. 회사 리뷰 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 표현·진실성·공익·비방 목적·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 적시 사실의 구체성</strong> — 임직원 특정·구체 사건 적시 vs 추상 평가.</li>\n<li><strong>② 진실성 입증 자료</strong> — 갑질 녹취·메일·근태·체불 자료.</li>\n<li><strong>③ 공공의 이익 (구직자 정보)</strong> — 채용 시장 정보 제공 목적.</li>\n<li><strong>④ 비방 목적 부재</strong> — 일반 재직 후기 vs 개인 보복.</li>\n<li><strong>⑤ 합의 트랙</strong> — 표현 수정·삭제로 종결 가능 사례.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 재직 경험 기반 평가는 공공 이익·구직자 정보 영역으로 위법성 조각 자료가 있는 영역. 다만 임직원 실명·구체 사건 적시는 다툼이 커지는 사례.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·소명·합의·재판 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 재직 자료 보존 (즉시)</strong> — 근로계약·근태·체불·갑질 자료.</li>\n<li><strong>2단계 — 변호인 자문 (1주)</strong> — 표현별 진실성 분류.</li>\n<li><strong>3단계 — 경찰 조사 (1~3개월)</strong> — 진실성·공익 자료 제출.</li>\n<li><strong>4단계 — 합의·삭제 (자기 의사)</strong> — 표현 수정·삭제 합의.</li>\n<li><strong>5단계 — 검찰·재판 (불기소 또는 약식)</strong> — 진실성 입증 시 불기소 영역.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">회사 리뷰 명예훼손 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 재직·갑질·체불 갈래입니다.</strong></p>\n<ul>\n<li><strong>리뷰 캡처·작성 시점</strong> — 본인 작성 입증.</li>\n<li><strong>근로계약서·재직증명·인사기록카드</strong> — 재직 관계.</li>\n<li><strong>갑질 자료 (녹취·메일·동료 진술)</strong> — 진실성 입증.</li>\n<li><strong>근태·야근 자료</strong> — 야근 강요 입증.</li>\n<li><strong>임금체불 자료 (급여명세서·통장)</strong> — 체불 입증.</li>\n<li><strong>본인 신분증·통신 가입 자료</strong> — 조사용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 익명 IP 추적 사례가 늘고 있으므로 회사 측 \'정황 짐작\'이 아닌 \'진실 적시\'를 기준으로 표현을 다듬는 것이 효율적.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"\'임금체불 의심\' 표현이 허위" 반박</strong> — \'의심\' 표현은 다툼 자료. 실제 체불 자료 있으면 진실성 자료.</li>\n<li><strong>"임직원 실명 거론" 반박</strong> — 실명 거론은 위험. 직책·부서 일반화 권장.</li>\n<li><strong>공공 이익 (구직자 정보 제공)</strong> — 위법성 조각 자료.</li>\n<li><strong>비방 목적 부재</strong> — 보복 정황 없이 사실 적시면 자료.</li>\n<li><strong>합의 트랙</strong> — 표현 수정·삭제 + 합의금 면제 사례.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 명예훼손 무료 상담.</li>\n<li><strong>고용노동부 1350</strong> — 갑질·체불 진정 (역제소 트랙).</li>\n<li><strong>방송통신심의위원회 1377</strong> — 게시물 삭제·정정.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 재직 경험 기반 평가의 위법성 조각',
        summary:
          '대법원 2020다5813 사건 영역에서 법원은 재직 경험에 기반한 사실 적시가 구직자·동종 업계에 정보를 제공하는 목적이고 진실에 부합하는 경우 위법성이 조각될 여지가 있으며, 비방 목적이 부정될 수 있다고 본 영역으로 평가되는 사례가 있습니다.',
        takeaway: '진실성·공공이익 자료가 모이면 익명 회사 리뷰도 위법성 조각 자료. 표현 수정·삭제 합의로 종결 사례 다수.',
      },
    ],
    faq: [
      {
        question: '익명이라 신원 추적 안 될 줄 알았어요',
        answer:
          '<strong>IP·통신 가입 자료로 추적 가능 영역입니다.</strong> 사이트 협조 + 통신사 협조로 신원 특정.',
      },
      {
        question: '\"임직원 ○○○\" 실명 거론했는데 문제 되나요?',
        answer:
          '<strong>실명 거론은 다툼이 커지는 영역입니다.</strong> 직책·부서 일반화로 표현 수정 권장.',
      },
      {
        question: '본인이 실제 갑질·체불 당한 자료가 있어요',
        answer:
          '<strong>진실성 입증 자료가 됩니다.</strong> 위법성 조각 트랙. 동시에 갑질·체불 별도 진정도 가능.',
      },
      {
        question: '합의 안 하고 끝까지 다투면 어떻게 되나요?',
        answer:
          '<strong>진실성·공익 입증 시 불기소·무죄 가능 영역입니다.</strong> 다만 시간·비용 부담. 132 자문 후 판단.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '온라인 리뷰 진실 다툼', href: '/guide/defamation/defamation-online-review-truth-defense' },
      { label: '명예훼손 종합', href: '/guide/defamation/defamation-requirements-checklist' },
      { label: '직장 험담 대응', href: '/guide/defamation/defamation-workplace-rumor-response' },
      { label: '합의 영향', href: '/guide/defamation/defamation-spreader-accused-mitigation-settlement-track' },
      { label: '공공인 비판 보호', href: '/guide/defamation/defamation-public-figure-criticism-protect' },
    ],
  },

  // ─── 3. defamation / defamation-fitness-trainer-online-complaint-accused-track ───
  {
    domain: 'defamation',
    slug: 'defamation-fitness-trainer-online-complaint-accused-track',
    keyword: '헬스 트레이너 항의 명예훼손',
    questionKeyword: '헬스 PT 환불 거부 후 인스타에 트레이너 이름 적고 항의했는데 명예훼손 고소당했어요',
    ctaKeyword: '트레이너 항의 명예훼손 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '트레이너 항의 명예훼손 — 5단계 다툼 | 로앤가이드',
      description:
        '헬스 PT·요가 강사 등에게 SNS 실명 항의 게시물을 올린 후 명예훼손 고소를 받았다면 5가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"PT 50회 등록했는데 트레이너가 잦은 일정 변경·약속 미이행으로 신뢰가 깨져 환불 요청. 헬스장이 \'잔여 횟수 50% 위약금\'을 요구해 갈등이 커지자, 본인이 인스타그램에 \'△△△ 트레이너 환불 거부, 약속 미이행\'으로 실명 + 사진 게시. 한 달 뒤 트레이너가 명예훼손·정보통신망법 위반으로 고소했습니다." SNS 실명 게시물은 사이버명예훼손 영역. 위법성 조각 요건은 진실성·공공이익·비방 목적 부재. 환불 분쟁 + 약속 미이행 사실은 진실 적시이지만, \'실명 + 사진 + 항의 어조\'는 비방 목적 정황으로 평가될 여지가 있는 영역. 한국소비자원 분쟁조정 트랙 + 표현 수정·삭제 합의가 일반 종결 사례입니다.</p>',
    sections: [
      {
        title: 'Q. 트레이너 항의 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·진실성·비방·공익·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 적시 사실 (환불 거부·약속 미이행)</strong> — 사실 자체 자료.</li>\n<li><strong>② 진실성 (계약서·일정 변경 자료)</strong> — 자료 입증.</li>\n<li><strong>③ 비방 목적 (실명·사진·항의 어조)</strong> — 비방 정황 자료.</li>\n<li><strong>④ 공공의 이익 (소비자 정보)</strong> — 다른 고객 보호.</li>\n<li><strong>⑤ 합의·삭제 (표현 수정)</strong> — 종결 사례.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 실명·사진 + 항의 어조는 비방 정황으로 평가될 여지. 동일 사실이라도 \'실명·사진 없이\' 사실 적시면 다툼 자료 단단해지는 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·합의·소명 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 환불·계약 자료 보존 (즉시)</strong> — 계약서·결제·일정 변경 카톡.</li>\n<li><strong>2단계 — 한국소비자원 분쟁조정 (1372, 별도 트랙)</strong> — 환불 분쟁 우선 해결.</li>\n<li><strong>3단계 — 게시물 표현 수정·삭제 (자기 의사)</strong> — 실명·사진 삭제로 비방 정황 완화.</li>\n<li><strong>4단계 — 경찰 조사 (1~3개월)</strong> — 진실성·공익 자료.</li>\n<li><strong>5단계 — 합의·재판 (불기소·약식)</strong> — 환불 + 게시물 삭제 합의로 종결 사례.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">트레이너 항의 명예훼손 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·게시·환불 갈래입니다.</strong></p>\n<ul>\n<li><strong>PT 계약서·결제 영수증</strong> — 계약 관계.</li>\n<li><strong>일정 변경·약속 미이행 카톡</strong> — 사실 적시 자료.</li>\n<li><strong>환불 요청·거부 자료</strong> — 분쟁 정황.</li>\n<li><strong>게시물 캡처·삭제 자료</strong> — 본인 게시 입증.</li>\n<li><strong>한국소비자원 분쟁조정 신청</strong> — 환불 트랙.</li>\n<li><strong>본인 신분증·통신 가입</strong> — 조사용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;partding:8px 12px;color:#555">팁: 환불 트랙(한국소비자원·소액사건)을 별도로 가져가면서 게시물은 표현 수정하는 \'두 트랙 분리\'가 효율적입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"실명·사진 거론" 비방 정황</strong> — 표현 수정·삭제로 완화.</li>\n<li><strong>"\'약속 미이행\' 사실" 진실성</strong> — 카톡·녹취 자료.</li>\n<li><strong>공공 이익 (소비자 정보)</strong> — 위법성 조각 자료.</li>\n<li><strong>환불 분쟁 별도 트랙</strong> — 한국소비자원·소액사건.</li>\n<li><strong>합의 (환불 + 삭제)</strong> — 양쪽 트랙 동시 합의로 종결.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 명예훼손 무료 상담.</li>\n<li><strong>한국소비자원 1372</strong> — 환불 분쟁조정.</li>\n<li><strong>방송통신심의위원회 1377</strong> — 게시물 삭제·정정.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — SNS 실명·사진 게시의 비방 정황',
        summary:
          '대법원 2022도190 사건 영역에서 법원은 SNS에 특정인을 실명·사진과 함께 부정적 사실을 적시한 경우 사실의 진실성·공익성이 인정되더라도 비방 목적이 인정될 여지가 있으며, 표현의 정도·범위·맥락에 따라 정보통신망법 위반 여부가 달라진다고 본 영역으로 평가되는 사례가 있습니다.',
        takeaway: '실명·사진 + 항의 어조는 비방 정황으로 평가될 여지. 사실 적시는 진실성 자료가 단단해야 위법성 조각 가능한 사례.',
      },
    ],
    faq: [
      {
        question: '환불 받으려고 게시한 건데도 문제 되나요?',
        answer:
          '<strong>실명·사진 + 항의 어조는 비방 정황입니다.</strong> 환불 트랙(소비자원·소액사건)을 별도로 진행하고 게시물은 수정·삭제 권장.',
      },
      {
        question: '약속 미이행은 명백한 사실인데도?',
        answer:
          '<strong>사실이라도 표현 방식이 자료입니다.</strong> 실명·사진·항의 어조 수정으로 다툼 완화.',
      },
      {
        question: '트레이너가 합의금 500만원 요구합니다',
        answer:
          '<strong>132 자문 + 환불 트랙 병행 권장합니다.</strong> 환불 + 삭제 양쪽 합의로 종결 사례.',
      },
      {
        question: '소비자원에 분쟁조정 신청하면 어떻게 되나요?',
        answer:
          '<strong>환불 분쟁 권고 트랙입니다.</strong> 권고 후 양쪽 수용 시 환불·합의 종결. 명예훼손 트랙은 별도.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '온라인 항의 명예훼손', href: '/guide/defamation/defamation-online-review-bad-writing' },
      { label: '명예훼손 종합', href: '/guide/defamation/defamation-requirements-checklist' },
      { label: '합의 영향', href: '/guide/defamation/defamation-spreader-accused-mitigation-settlement-track' },
      { label: '진실 적시 다툼', href: '/guide/defamation/defamation-truth-still-guilty' },
      { label: 'SNS 익명 후기', href: '/guide/defamation/defamation-private-instagram-trash-talk-blog' },
    ],
  },

  // ─── 4. jeonse / jeonse-partial-return-deposit-court-track ───
  {
    domain: 'jeonse',
    slug: 'jeonse-partial-return-deposit-court-track',
    keyword: '보증금 일부 반환 공탁',
    questionKeyword: '임대인이 보증금 1억 중 6천만원만 보내고 잔액은 \"공탁했다\"고 합니다. 받을 수 있나요?',
    ctaKeyword: '보증금 일부 공탁 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '보증금 일부 반환·공탁 — 5단계 잔액 회수 | 로앤가이드',
      description:
        '임대인이 보증금 일부만 반환하고 잔액을 공탁한 경우 5가지 회수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"계약 종료 후 보증금 1억원 반환 요구했어요. 임대인이 \'중대 하자 수리비 4천만원 차감\'을 주장하며 6천만원만 통장 입금. 나머지 4천만원은 \'법원 공탁\'으로 보냈다고 합니다. 본인 입장에선 하자가 \'중대\'가 아니라 일상 사용 마모인데 일방 차감되어 너무 분합니다." 임대인이 보증금 반환을 둘러싼 다툼이 있을 때 일정 금액을 법원에 공탁(민법 제487조 \'채권자의 수령거절 등에 의한 공탁\')하는 사례가 있는 영역입니다. 공탁이 있다고 해서 임대인 측 주장 금액이 확정되는 것은 아니고, 임차인이 공탁금 수령 시 \'유보 의사\' 표시를 하면 잔액 다툼을 이어갈 수 있는 영역입니다. 잔액 회수는 ① 공탁금 유보 수령 ② 임대인 측 차감 사유 다툼 (수리비 명세·견적) ③ 소송·지급명령 ④ 임차권등기명령(미수령 시) ⑤ 사후 분쟁조정 트랙입니다.</p>',
    sections: [
      {
        title: 'Q. 공탁 후 잔액 다툼 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 차감 사유·공탁·수령·다툼·등기 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 차감 사유 (수리비·연체차임)</strong> — 임대인 명세서·견적 자료.</li>\n<li><strong>② 공탁 통지</strong> — 법원 공탁 사실·서류.</li>\n<li><strong>③ 유보 수령 (잔액 다툼 유지)</strong> — \'유보 의사 표시\' 후 공탁금 수령.</li>\n<li><strong>④ 차액 청구 (소송·지급명령)</strong> — 차감 무효 또는 일부 무효.</li>\n<li><strong>⑤ 임차권등기명령</strong> — 잔액 미수령 시 다음 입주에 대비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공탁금 \'그냥 수령\'하면 임대인 주장 차감 금액 확정 영역. 반드시 \'유보 의사\' 표시 후 수령해야 잔액 다툼 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·공탁·소송 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 공탁 통지 자료 확인 (즉시)</strong> — 법원 공탁서·임대인 차감 명세서.</li>\n<li><strong>2단계 — 유보 의사 표시 후 공탁금 수령 (1~2주)</strong> — 법원에 \'유보 수령\' 명시 후 수령.</li>\n<li><strong>3단계 — 임대인 측 차감 자료 검토 + 반박 자료 (2~4주)</strong> — 입주·퇴거 사진·일상 마모.</li>\n<li><strong>4단계 — 지급명령·소송 (1~6개월)</strong> — 차감 무효 또는 일부 무효 청구.</li>\n<li><strong>5단계 — 임차권등기명령 (필요 시)</strong> — 미수령 잔액 대비.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">보증금 일부 공탁 회수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·공탁·하자 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·확정일자·전입신고</strong> — 임대차 입증.</li>\n<li><strong>법원 공탁서·임대인 통지</strong> — 공탁 사실.</li>\n<li><strong>입주 시·퇴거 시 사진</strong> — 상태 비교.</li>\n<li><strong>임대인 측 수리 견적서·청구서</strong> — 차감 사유 자료.</li>\n<li><strong>전문가 견적·일상 마모 자료</strong> — 반박 자료.</li>\n<li><strong>본인 통장 입금 자료</strong> — 일부 수령.</li>\n<li><strong>본인 신분증·인감</strong> — 공탁금 수령용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공탁금 수령 시 법원에 \'잔액에 대한 다툼을 유보한다\'는 표시 필수. 무표시 수령은 차감 금액 확정 효과가 발생하는 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"중대 하자 수리비" 차감 주장 반박</strong> — 일상 마모 vs 중대 하자 구분. 사진·전문가 견적.</li>\n<li><strong>"연체차임" 차감 주장</strong> — 차임 명세·통장 자료로 검증.</li>\n<li><strong>"공탁으로 종결" 주장 반박</strong> — 공탁 자체는 종결 아님. 유보 수령 가능 영역.</li>\n<li><strong>지연이자</strong> — 보증금 반환 지연 시 연 5% (또는 약정).</li>\n<li><strong>임차권등기명령</strong> — 잔액 미수령 + 새 주소 이전 시 우선변제 보호.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 임대차 무료 상담.</li>\n<li><strong>주임분조위 (주택임대차분쟁조정위원회)</strong> — 무료 분쟁조정.</li>\n<li><strong>법원 공탁계</strong> — 공탁금 수령 절차.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공탁금 유보 수령과 잔액 다툼',
        summary:
          '대법원 2017다260636 사건 영역에서 법원은 임대인이 보증금 일부에 대한 다툼을 이유로 일정 금액을 법원에 공탁한 경우, 임차인이 \'유보 의사\'를 표시하지 않고 공탁금을 수령하면 임대인 측 차감 주장 금액이 확정될 여지가 있고, 유보 의사 표시 후 수령하면 차액에 대해 별도 청구가 가능하다고 본 영역으로 평가되는 사례가 있습니다.',
        takeaway: '공탁금 무표시 수령은 차감 금액 확정 영역. 반드시 유보 의사 표시 후 수령하는 절차가 잔액 다툼의 핵심 자료입니다.',
      },
    ],
    faq: [
      {
        question: '공탁된 6천만원을 그냥 받으면 어떻게 되나요?',
        answer:
          '<strong>차감 금액 확정 영역입니다.</strong> 반드시 \'유보 수령\' 의사 표시 후 수령.',
      },
      {
        question: '\"수리비 4천만원\" 너무 과하다고 생각해요',
        answer:
          '<strong>전문가 견적·일상 마모 자료가 자료입니다.</strong> 입주·퇴거 사진 비교.',
      },
      {
        question: '주임분조위로 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 무료 분쟁조정. 조정 합의 시 신속 회수 사례.',
      },
      {
        question: '새 집 들어가야 하는데 잔액 못 받았어요',
        answer:
          '<strong>임차권등기명령으로 우선변제 보호 가능합니다.</strong> 이사 전 신청.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '보증금 반환 종합', href: '/guide/jeonse/jeonse-refund-overdue-interest-claim' },
      { label: '임차권등기명령', href: '/guide/jeonse/jeonse-tenant-substitute-payment-recovery' },
      { label: '주임분조위 분쟁조정', href: '/guide/jeonse/jeonse-partial-deposit-return-response' },
      { label: '하자·수리비 다툼', href: '/guide/jeonse/jeonse-occupation-after-termination-deposit' },
      { label: '보증금 지연이자', href: '/guide/jeonse/jeonse-refund-overdue-interest-claim' },
    ],
  },

  // ─── 5. jeonse / jeonse-landlord-bankruptcy-priority-payment-track ───
  {
    domain: 'jeonse',
    slug: 'jeonse-landlord-bankruptcy-priority-payment-track',
    keyword: '임대인 파산 우선변제권',
    questionKeyword: '집주인이 파산했대요. 보증금 어떻게 회수하나요?',
    ctaKeyword: '임대인 파산 보증금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임대인 파산 보증금 — 5단계 우선변제 트랙 | 로앤가이드',
      description:
        '임대인 파산 시 임차인의 우선변제권·전세권·소액보증금 보호 5가지 회수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세 2억원 사는데 집주인이 \'파산 신청했다\'는 통보를 받았어요. 집은 경매로 넘어갈 거라고 합니다. 보증금이 한 푼도 안 돌아오는 건 아닌지 무서워요." 임대인 파산·경매 시 임차인은 ① 대항력 (전입신고 + 점유) ② 우선변제권 (확정일자) ③ 최우선변제 (소액보증금 보호) ④ 전세권 등기 (있는 경우) ⑤ HUG·SGI 보증보험 가입 (가입자) 다섯 가지 보호 트랙을 가질 수 있는 영역입니다. 주택임대차보호법 + 채무자 회생 및 파산에 관한 법률이 동시 적용. 대법원 2019다12063 사건 영역에서 파산절차에서도 임차인 우선변제권이 별도 보호된다는 흐름이 평가됩니다. 회수액·시기는 보호 수단·임대인 채무 규모에 따라 달라지는 사례입니다.</p>',
    sections: [
      {
        title: 'Q. 임대인 파산 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 대항력·우선변제·최우선·전세권·보증보험 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 대항력 (전입신고 + 점유)</strong> — 신고 시점이 채무 발생 전인지.</li>\n<li><strong>② 우선변제권 (확정일자)</strong> — 확정일자 시점이 다른 채권자보다 앞서면 우선.</li>\n<li><strong>③ 최우선변제 (소액보증금)</strong> — 지역별 한도 내 일정 금액 최우선.</li>\n<li><strong>④ 전세권 등기</strong> — 가입자라면 별도 보호.</li>\n<li><strong>⑤ HUG·SGI 보증보험</strong> — 가입자는 보증사가 선지급.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대항력 + 우선변제권 시점이 핵심. 채무 발생·다른 채권자 등기 시점보다 앞서면 우선. 보증보험 가입자는 가장 빠른 회수 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·신청·배당 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 확보 (즉시)</strong> — 임대차계약·확정일자·전입신고·전세권등기·보증보험.</li>\n<li><strong>2단계 — 임차권등기명령 (이사 전)</strong> — 점유 이전해도 대항력 유지.</li>\n<li><strong>3단계 — 보증보험 청구 (가입자, 1~2개월)</strong> — HUG·SGI에 보증이행 신청.</li>\n<li><strong>4단계 — 파산·경매 절차에 채권 신고</strong> — 우선변제권·최우선변제 주장.</li>\n<li><strong>5단계 — 배당·잔액 회수 (6~18개월)</strong> — 배당 후 잔액 부족 시 임대인 개인 책임 추가 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임대인 파산 회수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 임대차·등기·보험 갈래입니다.</strong></p>\n<ul>\n<li><strong>임대차계약서·확정일자·전입신고 등본</strong> — 대항력·우선변제권 자료.</li>\n<li><strong>전세권 등기부등본 (가입자)</strong> — 등기 자료.</li>\n<li><strong>HUG·SGI 보증보험 약관</strong> — 보증 자료.</li>\n<li><strong>등기부등본 (집)·근저당 자료</strong> — 다른 채권자 시점.</li>\n<li><strong>임대인 채무·파산 자료</strong> — 파산 신청 자료.</li>\n<li><strong>임차권등기명령 결정문 (이사 전)</strong> — 대항력 유지.</li>\n<li><strong>본인 신분증·인감</strong> — 신청용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: HUG·SGI 보증보험 가입자는 파산·경매 절차와 무관하게 보증사로부터 선지급 후 보증사가 임대인에게 구상하는 사례. 가장 빠른 회수 트랙.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대항력 시점</strong> — 채무 발생·다른 채권자 등기보다 늦으면 후순위.</li>\n<li><strong>최우선변제 한도</strong> — 지역·시기별 한도 차이.</li>\n<li><strong>임차권등기명령 (이사 전 필수)</strong> — 점유 이전 후엔 대항력 상실 영역.</li>\n<li><strong>HUG·SGI 가입자 vs 미가입자</strong> — 가입자는 별도 트랙. 미가입자는 경매 배당 영역.</li>\n<li><strong>임대인 개인 책임 추가 청구</strong> — 배당 부족 시 별도 민사.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>HUG (주택도시보증공사) 1566-9009</strong> — 보증보험 청구.</li>\n<li><strong>SGI 서울보증 1670-7000</strong></li>\n<li><strong>대한법률구조공단 132</strong> — 임대차 무료 상담.</li>\n<li><strong>전세사기피해지원센터</strong> — 통합 안내.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 파산 절차에서 임차인 우선변제권',
        summary:
          '대법원 2019다12063 사건 영역에서 법원은 임대인 파산 또는 경매 절차에서 임차인의 대항력 + 확정일자 우선변제권이 보호되고, 최우선변제 한도 내 소액보증금은 다른 채권자보다 우선 변제된다는 흐름으로 평가되는 사례가 있습니다. 임차권등기명령은 점유 이전에도 대항력을 유지시키는 자료로 평가됩니다.',
        takeaway: '파산·경매 시 임차인 보호는 5단계 트랙(대항력·우선변제·최우선·전세권·보증보험)이 동시 활용 가능한 영역. 보증보험 가입자는 가장 빠른 회수 사례.',
      },
    ],
    faq: [
      {
        question: '보증보험 가입 안 했어요. 어떻게 회수하나요?',
        answer:
          '<strong>경매 배당 트랙입니다.</strong> 대항력·우선변제권 + 최우선변제로 배당 받음. 잔액 부족 시 임대인 개인 책임 추가 청구.',
      },
      {
        question: '이사 가야 하는데 대항력은 어떻게 유지하나요?',
        answer:
          '<strong>임차권등기명령 신청이 핵심입니다.</strong> 등기 후 이사해도 대항력 유지.',
      },
      {
        question: 'HUG·SGI 보증보험 가입자라면?',
        answer:
          '<strong>가장 빠른 회수 트랙입니다.</strong> 보증사가 보증이행 후 임대인 구상.',
      },
      {
        question: '최우선변제 한도는 얼마인가요?',
        answer:
          '<strong>지역·시기별로 다릅니다.</strong> 수도권·광역시·기타. 정확한 한도는 HUG·132 확인.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '보증금 우선변제', href: '/guide/jeonse/jeonse-tax-arrears-priority-payment' },
      { label: '임차권등기명령', href: '/guide/jeonse/jeonse-tenant-substitute-payment-recovery' },
      { label: '전세사기 종합', href: '/guide/jeonse-fraud/jeonse-fraud-where-to-start' },
      { label: '보증보험 청구', href: '/guide/jeonse/jeonse-registered-rental-deposit-insurance-mandatory' },
      { label: '보증금 반환 종합', href: '/guide/jeonse/jeonse-refund-overdue-interest-claim' },
    ],
  },

  // ─── 6. stalking / stalking-dating-app-rejection-message-flood-track ───
  {
    domain: 'stalking',
    slug: 'stalking-dating-app-rejection-message-flood-track',
    keyword: '데이팅앱 거절 후 메시지 폭주',
    questionKeyword: '데이팅앱에서 만난 사람 거절했더니 다른 SNS·문자로 하루 100통씩 와요. 스토킹인가요?',
    ctaKeyword: '데이팅앱 스토킹 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '데이팅앱 거절 후 메시지 폭주 — 5단계 스토킹 신고 | 로앤가이드',
      description:
        '데이팅앱에서 거절 의사를 표한 후 SNS·문자·전화로 반복 연락이 오는 경우 스토킹처벌법 5가지 신고 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"한 달 전 데이팅앱에서 만난 사람과 카페에서 한 번 봤어요. 분위기 안 맞아서 \'다시 연락 안 했으면 좋겠다\'고 했는데, 그날 밤부터 인스타·트위터·문자·카톡으로 하루 100통씩 메시지가 옵니다. \'네 친구 직장도 안다\' 같은 협박성 표현까지 등장했어요." 스토킹범죄의 처벌 등에 관한 법률(스토킹처벌법)은 \'상대방의 의사에 반하여 정당한 이유 없이 접근·기다림·지켜봄·정보통신망 이용 반복 도달\'을 스토킹 행위로 명시한 영역입니다(제2조). 데이팅앱 거절 후 SNS·문자·전화 폭주는 \'정보통신망 이용 반복 도달\'에 해당해 스토킹 처벌·잠정조치(접근금지·전기통신금지) 적용 가능한 영역. 대법원 2022도12037 영역에서 \'반복 도달\' 자체로 처벌이 인정된 사례 흐름입니다.</p>',
    sections: [
      {
        title: 'Q. 데이팅앱 스토킹 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거절 의사·반복 도달·접근·신고·잠정조치 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거절 의사 표시</strong> — 명시적 거절 메시지·녹취·카톡.</li>\n<li><strong>② 반복 도달</strong> — 횟수·기간·매체. 100통/일 같은 급증 자료.</li>\n<li><strong>③ 접근·기다림</strong> — 직장·집 근처 방문·기다림.</li>\n<li><strong>④ 신고·고소</strong> — 112·여성긴급전화 1366·경찰서 스토킹 전담.</li>\n<li><strong>⑤ 잠정조치 (접근금지·전기통신금지)</strong> — 법원 결정. 위반 시 처벌.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 거절 의사 + 반복 도달 자료면 스토킹처벌법 적용 영역. 잠정조치로 접근·연락 차단 가능한 사례.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·보호 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·보호·처벌 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 백업 (즉시)</strong> — 메시지·통화 기록·SNS 캡처.</li>\n<li><strong>2단계 — 112 신고·여성긴급전화 1366</strong> — 응급 보호.</li>\n<li><strong>3단계 — 경찰 고소 + 잠정조치 신청 (1주)</strong> — 접근금지·전기통신금지.</li>\n<li><strong>4단계 — 검찰·재판 (1~3개월)</strong> — 스토킹처벌법 위반.</li>\n<li><strong>5단계 — 위반 시 즉시 신고 (잠정조치 위반)</strong> — 가중 처벌.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">데이팅앱 스토킹 신고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 메시지·접근·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>SNS·문자·카톡 캡처 (날짜·횟수)</strong> — 반복 도달 자료.</li>\n<li><strong>거절 의사 표시 자료</strong> — 카톡·녹취.</li>\n<li><strong>접근·기다림 자료 (사진·CCTV)</strong> — 직장·집 근처.</li>\n<li><strong>본인 신분증·통신 가입</strong> — 신고용.</li>\n<li><strong>112 신고 기록·여성긴급전화</strong> — 보호 이력.</li>\n<li><strong>가해자 인적사항·SNS 계정</strong> — 추적용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 메시지 캡처 시 화면 + 날짜·시각이 함께 보이도록 캡처. 가해자가 즉시 삭제하는 경우도 있으므로 백업 우선.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"가해자 \'관심 표현일 뿐\'" 주장 반박</strong> — 거절 의사 + 반복 도달이 자료.</li>\n<li><strong>"한 번 만났으니 관계 있다" 주장 반박</strong> — 거절 의사 후 의사 반함이 핵심.</li>\n<li><strong>잠정조치 활용</strong> — 접근금지·전기통신금지 + 위치추적.</li>\n<li><strong>위반 시 가중 처벌</strong> — 잠정조치 위반은 별도 처벌.</li>\n<li><strong>온라인만 한 경우도 적용</strong> — 정보통신망 이용 반복 도달.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>112·여성긴급전화 1366</strong> — 응급 신고.</li>\n<li><strong>한국여성의전화 02-2263-6464</strong> — 상담.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망 이용 반복 도달의 스토킹 처벌',
        summary:
          '대법원 2022도12037 사건 영역에서 법원은 상대방의 의사에 반하여 정보통신망을 이용해 글·말·부호·음향·그림·영상·화상 등을 도달하게 하는 행위가 반복되면 스토킹범죄에 해당하고, 한 번 만난 관계라도 거절 의사 표시 후 반복 도달이 있으면 스토킹범죄 처벌 영역으로 평가될 수 있다고 본 사례가 있습니다.',
        takeaway: '데이팅앱 한 번 만남 + 거절 의사 + 반복 도달 패턴은 스토킹처벌법 적용 영역. 잠정조치로 차단 + 형사 처벌 동시 트랙.',
      },
    ],
    faq: [
      {
        question: '한 번만 만났는데 스토킹 적용되나요?',
        answer:
          '<strong>가능합니다.</strong> 관계 횟수 무관. 거절 의사 + 반복 도달이 자료.',
      },
      {
        question: '온라인만 한 경우도 신고 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 정보통신망 이용 반복 도달. SNS·문자·카톡 모두 자료.',
      },
      {
        question: '잠정조치 신청은 얼마나 걸리나요?',
        answer:
          '<strong>긴급 사안은 1~3일 결정 사례가 일반적입니다.</strong> 접근금지·전기통신금지 + 위치추적.',
      },
      {
        question: '가해자가 \"친구가 보낸 거다\"라며 회피해요',
        answer:
          '<strong>본인 IP·통신 가입 자료로 추적 가능합니다.</strong> 경찰 수사 + 통신사 협조.',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 잠정조치', href: '/guide/stalking/stalking-provisional-measure-application-effect' },
      { label: '스토킹 첫 대응', href: '/guide/stalking/stalking-victim-where-to-start' },
      { label: '온라인 스토킹', href: '/guide/stalking/stalking-online-only-still-applicable' },
      { label: 'SNS DM 반복', href: '/guide/stalking/stalking-sns-dm-block-fake-account-repeat' },
      { label: '접근금지 위반', href: '/guide/stalking/stalking-report-and-restraining-order' },
    ],
  },

  // ─── 7. stalking / stalking-realtor-customer-repeated-visit-track ───
  {
    domain: 'stalking',
    slug: 'stalking-realtor-customer-repeated-visit-track',
    keyword: '부동산 손님 반복방문 스토킹',
    questionKeyword: '부동산 사무실 손님이 매물 안 사고 매주 와서 한 시간씩 앉아 있어요. 스토킹인가요?',
    ctaKeyword: '반복방문 스토킹 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '직장 반복방문 스토킹 — 5단계 분류·신고 | 로앤가이드',
      description:
        '직장·상점에 매물·상품과 무관하게 반복 방문해 머무는 손님에 대해 스토킹 분류·신고 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중개사무소에서 일하는데 한 손님이 두 달 넘게 매주 같은 시간에 옵니다. 매물 안 사고 \'그냥 차 한 잔\'이라며 한 시간씩 앉아 있고 제 일상을 자꾸 묻습니다. 거절했더니 \'그냥 손님인데 왜 그러냐\'며 더 자주 옵니다." 직장·상점에 반복 방문해 머무는 행위도 스토킹 영역으로 평가될 여지가 있습니다. 스토킹처벌법 제2조의 \'직장·주거 등에 접근하거나 기다리는 행위\'에 해당하는 사례. 다만 \'영업 장소 손님으로서의 정상 방문\'과 구분이 필요한 영역이라 거절 의사 + 반복 + 정상 영업 범위 초과(매물·상품 무관, 사적 대화 요구, 영업 시간 종료 후 잔류 요구 등) 자료가 핵심 입니다. 사용자(점장·고용주) 측이 \'영업 방해\' 트랙으로 동시 대응 가능한 사례입니다.</p>',
    sections: [
      {
        title: 'Q. 반복방문 스토킹 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거절 의사·반복·영업 범위·접근·신고 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 거절 의사 표시</strong> — \"오지 마세요\" 명시 기록.</li>\n<li><strong>② 반복 정도</strong> — 횟수·기간·시간대 자료.</li>\n<li><strong>③ 영업 범위 초과</strong> — 매물·상품과 무관한 사적 대화 요구.</li>\n<li><strong>④ 접근·기다림</strong> — 영업 시간 외 외부 대기·다른 곳까지 따라옴.</li>\n<li><strong>⑤ 신고·고소 + 영업 방해</strong> — 스토킹 신고 + 점장·고용주 측 영업 방해 신고.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 영업 장소 손님 신분이라도 거절 의사 + 영업 범위 초과 + 반복 자료가 모이면 스토킹 영역으로 평가될 여지. 영업 방해 트랙도 병행.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·보호 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·신고·보호 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 방문 자료 백업 (즉시)</strong> — CCTV·방문 일지·녹취.</li>\n<li><strong>2단계 — 명시적 거절 의사 (서면 권장)</strong> — \"방문 자제 요청\" 서면·문자.</li>\n<li><strong>3단계 — 112 신고·경찰 고소 (1주)</strong> — 스토킹 + 영업 방해.</li>\n<li><strong>4단계 — 잠정조치 (접근금지)</strong> — 사무소·점포 접근 금지.</li>\n<li><strong>5단계 — 위반 시 즉시 신고 (가중 처벌)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">반복방문 스토킹 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 방문·거절·녹취 갈래입니다.</strong></p>\n<ul>\n<li><strong>방문 일지·CCTV</strong> — 횟수·시간·체류 시간.</li>\n<li><strong>거절 의사 자료 (서면·문자)</strong> — 명시 자료.</li>\n<li><strong>녹취·대화 기록</strong> — 사적 대화 요구 자료.</li>\n<li><strong>점장·동료 진술서</strong> — 영업 방해 자료.</li>\n<li><strong>외부 대기 사진·따라옴 자료</strong> — 접근·기다림.</li>\n<li><strong>본인 신분증·통신 가입</strong> — 신고용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 거절 의사를 \"오지 마세요\"라고 분명히 서면·문자로 보내두면 자료가 단단해지는 영역. 사용자 측 출입 제한 통보서도 동시에 발송.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"손님 신분 정상 방문" 주장 반박</strong> — 영업 범위 초과 자료. 매물·상품 무관 + 사적 대화 요구.</li>\n<li><strong>"거절 의사 못 들었다" 주장 반박</strong> — 서면·문자·녹취 자료.</li>\n<li><strong>영업 방해 별도 트랙</strong> — 형법 제314조. 점장·고용주 신고.</li>\n<li><strong>잠정조치 접근금지</strong> — 사무소·점포·이동 경로 접근 금지.</li>\n<li><strong>외부 대기·따라옴</strong> — 별도 자료. 사진·CCTV·증인.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>112·여성긴급전화 1366</strong> — 신고.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>경찰서 여성청소년수사대</strong> — 스토킹 전담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 영업 장소 반복방문의 스토킹·영업방해 동시 적용',
        summary:
          '대법원 2024도7832 사건 영역에서 법원은 영업 장소를 손님 신분으로 반복 방문하더라도 거절 의사 표시 후 영업 범위를 초과해 머무르거나 사적 대화를 요구하는 행위는 스토킹범죄에 해당할 수 있고, 동시에 형법 제314조 영업방해 영역으로 평가될 수 있다고 본 영역으로 평가되는 사례가 있습니다.',
        takeaway: '영업 장소 손님 신분 + 거절 후 반복 + 영업 범위 초과 + 사적 대화 요구 자료가 모이면 스토킹·영업방해 동시 트랙이 가능한 영역.',
      },
    ],
    faq: [
      {
        question: '\"손님\"이라며 정상 방문이라고 합니다',
        answer:
          '<strong>매물·상품과 무관한 사적 대화·반복 + 거절 의사가 자료입니다.</strong> 영업 범위 초과 입증.',
      },
      {
        question: '점장도 같이 신고할 수 있나요?',
        answer:
          '<strong>영업 방해 트랙으로 별도 신고 가능합니다.</strong> 형법 제314조.',
      },
      {
        question: '거절 의사를 어떻게 표시해야 하나요?',
        answer:
          '<strong>서면·문자로 \"방문 자제\" 명시 권장합니다.</strong> 녹취도 자료.',
      },
      {
        question: '잠정조치 받으면 사무소 못 오나요?',
        answer:
          '<strong>접근금지 결정 시 못 옵니다.</strong> 위반 시 가중 처벌.',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '직장 스토킹', href: '/guide/stalking/stalking-workplace-coworker-criminal' },
      { label: '스토킹 첫 대응', href: '/guide/stalking/stalking-victim-where-to-start' },
      { label: '잠정조치 신청', href: '/guide/stalking/stalking-provisional-measure-application-effect' },
      { label: '접근금지 위반', href: '/guide/stalking/stalking-report-and-restraining-order' },
      { label: '온라인 스토킹', href: '/guide/stalking/stalking-online-only-still-applicable' },
    ],
  },
];
