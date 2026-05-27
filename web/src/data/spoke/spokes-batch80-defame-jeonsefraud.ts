import { SpokePage } from '../spoke-pages';

// batch80 defamation+jeonse-fraud — 7개 (2026-05-28) = 4+3
//
// 고유 존재 이유:
// defamation 4:
// 1. [defamation] 단톡방에서 한두 명에게 한 험담이 허위사실로 퍼진 피해자 — '소수 전달이라도 전파가능성으로 공연성 인정 + 보존·고소·민사' 트랙 (victim)
// 2. [defamation] 직장 상사 갑질을 폭로했다가 명예훼손 혐의를 받는 입장 — '공적·업무 관계 사실 확인 과정 발언은 전파가능성 신중 평가 + 혐의 방어' 트랙 (accused)
// 3. [defamation] 맘카페 익명 비방글로 평판이 떨어진 피해자 — '익명 게시 + 전파가능성 공연성 + 작성자 특정·고소' 트랙 (victim)
// 4. [defamation] 가게·서비스 별점·리뷰 악평으로 모욕 고소를 당한 입장 — '비판·평가성 표현은 사회상규 위배 아니면 모욕죄 부정 여지 + 혐의 방어' 트랙 (accused)
//
// jeonse-fraud 3 (모두 victim 절차형):
// 5. [jeonse-fraud] 깡통전세로 보증금이 시세를 넘겨 묶인 피해자 — 'HUG 보증이행 청구 + 채권 행사·시효 관리 + 보증금 회수' 트랙 (victim)
// 6. [jeonse-fraud] 신탁 부동산인 줄 모르고 계약해 보증금이 위험해진 피해자 — '신탁 권리관계 설명 + 회수 절차 + 피해자 결정' 트랙 (victim)
// 7. [jeonse-fraud] 매매로 임대인이 바뀐 뒤 새 집주인이 반환을 거부하는 피해자 — '임차주택 양수인 보증금 반환의무 승계 + 청구·집행' 트랙 (victim)

export const spokesBatch80DefameJeonseFraud: SpokePage[] = [
  // ─── 1. defamation-groupchat-false-fact-transmission-public-victim-track (victim) ───
  {
    domain: 'defamation',
    slug: 'defamation-groupchat-false-fact-transmission-public-victim-track',
    keyword: '단톡방 허위사실 유포 명예훼손',
    questionKeyword: '누가 단톡방에서 저에 대한 허위 사실을 몇 사람에게만 말했는데, 그게 캡처돼서 여기저기 퍼졌어요. 소수에게만 말한 건데도 명예훼손이 되나요?',
    ctaKeyword: '단톡방 허위사실 유포 명예훼손 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '단톡방 허위사실 유포 명예훼손 — 5단계 점검 | 로앤가이드',
      description:
        '단톡방에서 한두 명에게만 한 험담이 캡처돼 퍼졌다면, 전파가능성으로 공연성이 인정되는 영역과 보존·고소·민사 5가지 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"같은 모임·직장 단체 대화방에서 누군가 본인에 대한 사실과 다른 이야기를 꺼냈습니다. 처음엔 한두 사람만 보는 자리였는데, 그 대화가 캡처돼 다른 방·다른 사람에게 퍼지면서 본인이 \'그런 사람\'으로 소문이 났어요. 상대는 \'몇 명한테만 말한 거라 문제없다\'고 하지만, 본인은 이미 평판이 크게 흔들려 막막합니다." 형법 제307조는 \'공연히 사실을 적시해 사람의 명예를 훼손한 행위\'를 명예훼손으로 규정하고, 같은 법은 허위사실 적시를 더 무겁게 다루는 영역입니다. 여기서 \'공연성\'은 불특정 또는 다수인이 인식할 수 있는 상태를 의미하는데, 개별적으로 소수에게 말했더라도 그로부터 불특정·다수에게 전파될 가능성이 있으면 공연성이 인정될 수 있다는 평가가 가능한 영역입니다. 소수 전달 + 허위 정황 + 캡처 확산 결합은 \'전파가능성으로 공연성 인정 vs 부정\' 평가가 갈리는 트랙. 피해자라면 ① 표현·확산 분석 ② 보존 ③ 삭제 요청 ④ 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 단톡방 허위사실 유포 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 분석·보존·삭제·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 표현·확산 분석</strong> — 적시된 내용이 허위인지, 어디까지 전파됐는지 정리.</li>\n<li><strong>② 대화·캡처 보존</strong> — 원 대화·캡처 경로·전달 받은 사람·시각 정리.</li>\n<li><strong>③ 삭제·정정 요청</strong> — 추가 확산 방지 + 정정 요청 검토.</li>\n<li><strong>④ 형사 고소</strong> — 형법 제307조 검토(허위·진실 적시 구분).</li>\n<li><strong>⑤ 민사 손해배상</strong> — 위자료·정신적 피해 청구(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공연성은 불특정 또는 다수인이 인식할 수 있는 상태를 의미하지만, 개별적으로 소수에게 말한 경우라도 그로부터 불특정·다수인에게 전파될 가능성이 있으면 공연성이 인정될 수 있는 영역. 전파가능성은 발언 경위·상대와의 관계 등으로 평가되므로 확산 경로 자료가 우선입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·분석·신고·고소 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 대화·캡처 즉시 보존 (인지 당일)</strong> — 원 대화·캡처·전달 경로·시각·참여자 범위 정리.</li>\n<li><strong>2단계 — 허위·확산 분석 (1주 내)</strong> — 적시 사실의 허위 여부와 전파 범위 정리.</li>\n<li><strong>3단계 — 추가 확산 차단 요청 (병행)</strong> — 방 관리자·플랫폼에 정정·삭제 요청 검토.</li>\n<li><strong>4단계 — 경찰 고소 (1개월 내)</strong> — 형법 제307조 + 전파가능성·허위 소명.</li>\n<li><strong>5단계 — 민사 손해배상 청구 (시효 3년)</strong> — 위자료·정신적 피해 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">단톡방 허위사실 유포 명예훼손 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 표현·전파·손해 갈래입니다.</strong></p>\n<ul>\n<li><strong>원 대화 전문 캡처 (방 이름·시각·참여자 포함)</strong></li>\n<li><strong>캡처가 다른 곳으로 전달된 경로 자료</strong></li>\n<li><strong>적시 사실의 허위 반박 자료 (사실관계 증빙)</strong></li>\n<li><strong>본인으로 특정되는 부분 표시 자료</strong></li>\n<li><strong>전달 받은 사람·열람 범위 정황 자료</strong></li>\n<li><strong>소문 확인·2차 확산 정황 자료</strong></li>\n<li><strong>정신적 피해 정황 자료 (진료·상담 기록, 필요 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 소수에게만 한 말이라도 캡처가 어디로 전달됐는지 확산 경로를 보여주는 자료가 전파가능성 평가에 도움이 되는 영역입니다. 상대가 대화를 지우기 전에 원 대화와 캡처를 시각과 함께 보존해두는 것이 우선입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>전파가능성</strong> — 소수 전달이라도 불특정·다수 전파 가능성이 있는지 평가.</li>\n<li><strong>공연성 부정 사정</strong> — 친밀·사적 관계는 전파가능성이 부정될 여지도 있는 영역.</li>\n<li><strong>허위성</strong> — 적시된 사실이 객관적으로 허위인지 진실인지 구분.</li>\n<li><strong>특정 가능성</strong> — 대화에서 본인으로 식별되는 범위.</li>\n<li><strong>미필적 고의</strong> — 전파가능성을 인식·용인했는지 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr) / 신고 112</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보분쟁조정위원회 (kopico.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 소수 전달과 전파가능성에 따른 공연성 평가 영역',
        summary:
          '대법원 2020도5813(대법원, 2020.11.19 선고) 영역에서 법원은 명예훼손죄의 공연성은 불특정 또는 다수인이 인식할 수 있는 상태를 의미하고, 개별적으로 소수의 사람에게 사실을 적시했더라도 그 상대방이 불특정 또는 다수인에게 전파할 가능성이 있는 때에는 공연성이 인정된다는 전파가능성 법리를 확인했습니다. 단톡방에서 소수에게 한 말이 캡처로 퍼진 사안에서도 전파가능성에 따른 공연성 인정 여부가 핵심 평가 트랙으로 검토될 수 있습니다.',
        takeaway: '소수 전달이라도 전파가능성이 있으면 공연성 평가가 가능한 영역 — 확산 경로 자료 보존 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '단톡방에서 한두 명한테만 말한 것도 명예훼손이 되나요?',
        answer:
          '<strong>소수 전달이라도 전파가능성이 있으면 공연성이 인정될 수 있는 영역입니다.</strong> 확산 경로 자료가 핵심.',
      },
      {
        question: '제가 직접 퍼뜨린 게 아니라 캡처가 돈 경우는요?',
        answer:
          '<strong>전달 받은 사람의 전파가능성으로 공연성을 평가하는 영역입니다.</strong> 캡처 전달 경로 보존이 중요.',
      },
      {
        question: '친한 사람들끼리만 본 방이면 공연성이 부정되나요?',
        answer:
          '<strong>친밀·사적 관계는 전파가능성이 부정될 여지도 있는 영역입니다.</strong> 방 성격·전달 정황이 관건.',
      },
      {
        question: '허위가 아니라 사실을 말한 경우도 대응되나요?',
        answer:
          '<strong>사실 적시도 공연성 인정 시 명예훼손 평가가 가능한 영역입니다.</strong> 허위·진실 구분에 따라 적용 조문이 달라집니다.',
      },
      {
        question: '평판이 떨어졌는데 민사 손해배상도 되나요?',
        answer:
          '<strong>정신적 피해와의 관계를 정리하면 손해배상 청구를 검토할 수 있는 영역입니다.</strong> 확산 정황 자료가 도움.',
      },
    ],
    cta: { text: '명예훼손 대응 포인트, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '단톡방 명예훼손 증거', href: '/guide/defamation/defamation-group-chat-insult-evidence' },
      { label: '단톡방 캡처 재유포 책임', href: '/guide/defamation/defamation-screenshot-redistribute-liability' },
      { label: '명예훼손 피해자 시작', href: '/guide/defamation/defamation-victim-where-to-start' },
      { label: '온라인 명예훼손 증거 수집', href: '/guide/defamation/online-defamation-evidence-collection' },
      { label: '명예훼손 합의금 기준', href: '/guide/defamation/defamation-settlement-amount-guide' },
    ],
  },

  // ─── 2. defamation-boss-workplace-abuse-disclosure-accused-track (accused) ───
  {
    domain: 'defamation',
    slug: 'defamation-boss-workplace-abuse-disclosure-accused-track',
    keyword: '직장 상사 갑질 폭로 명예훼손 고소',
    questionKeyword: '상사의 갑질을 회사 내부에서 동료들에게 알리고 문제 제기를 했는데, 상사가 저를 명예훼손으로 고소했어요. 겪은 사실을 알린 건데도 처벌되나요?',
    ctaKeyword: '직장 상사 갑질 폭로 명예훼손 고소 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '직장 상사 갑질 폭로 명예훼손 고소 — 5단계 방어 점검 | 로앤가이드',
      description:
        '상사 갑질을 내부에 알렸다가 명예훼손 혐의를 받고 있다면, 업무 관련 사실 확인 과정 발언의 전파가능성 신중 평가와 진실·공익 항변까지 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"상사의 부당한 지시·폭언 같은 갑질을 더는 참기 어려워 회사 내부에서 동료·상급 부서에 문제를 제기하고, 같은 일을 겪은 사람들과 상황을 공유했습니다. 본인은 겪은 일을 사실대로 알리고 개선을 요구한 것뿐인데, 상사가 \'허위로 명예를 훼손했다\'며 고소했어요. 사실을 말한 것도 명예훼손이 될 수 있다는 말에 막막합니다." 혐의를 받고 있다면 형법 제307조는 사실 적시 명예훼손도 영역으로 규정하지만, 공연성의 한 요소인 전파가능성은 조직 업무와 관련해 사실의 확인·규명 과정에서 발언하게 된 경우라면 그 인식·용인을 신중하게 인정해야 한다는 평가가 가능한 영역입니다. 또한 같은 법 제310조는 진실하고 오로지 공공의 이익을 위한 적시면 위법성 조각을 검토할 수 있다고 규정합니다. 업무 관련 문제 제기 + 사실 확인 과정 + 내부 공유 결합은 \'공연성·비방목적 인정 vs 신중 평가·위법성 조각\' 트랙. 사실과 다르게 신고되었다면 ① 사실 확인 과정 정리 ② 진실성 ③ 공익성 ④ 변호인 의견서 ⑤ 합의 5중 트랙으로 방어를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 직장 상사 갑질 폭로 명예훼손 고소 5단계 방어 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위정리·진실성·공익성·의견서·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 발언 경위 정리</strong> — 업무 관련 사실 확인·규명 과정에서 나온 발언인지 맥락 정리.</li>\n<li><strong>② 사실 진실성</strong> — 폭로 내용이 본인이 겪은 객관 사실에 부합하는지 근거 정리.</li>\n<li><strong>③ 공익성 평가</strong> — 조직 개선·동료 보호 목적인지 사익적 동기 비중 평가.</li>\n<li><strong>④ 변호인 의견서</strong> — 전파가능성 신중 평가·형법 제310조 위법성 조각 항변 정리.</li>\n<li><strong>⑤ 합의·정리 검토</strong> — 사과·일부 합의 조합 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공적·업무 관계에서 조직 업무와 관련해 사실의 확인·규명 과정에서 발언하게 된 경우라면 발언자의 전파가능성에 대한 인식과 용인을 신중하게 인정해야 한다는 평가가 가능한 영역. 발언이 어떤 경위·목적으로 나왔는지 맥락 자료가 먼저입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·의견서·조사·정리·합의 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 발언 경위·근거 자료 보존 (즉시)</strong> — 문제 제기 경위·갑질 입증 자료·발언 맥락 정리.</li>\n<li><strong>2단계 — 변호인 선임 + 의견서 (1~2주)</strong> — 전파가능성 신중 평가·진실성·공익성 항변 정리.</li>\n<li><strong>3단계 — 경찰 조사 출석 (1개월 내)</strong> — 사실 확인 과정·개선 목적 소명 진술.</li>\n<li><strong>4단계 — 표현 정리·보완 (필요 시)</strong> — 단정·감정적 표현 부분 정리.</li>\n<li><strong>5단계 — 합의·민사 협의</strong> — 사과·일부 정리 조합 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">직장 상사 갑질 폭로 명예훼손 고소 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·진실·공익 갈래입니다.</strong></p>\n<ul>\n<li><strong>문제 제기 경위·발언 맥락 정리 자료</strong></li>\n<li><strong>갑질·부당지시 입증 자료 (지시 내용·메시지·녹취 등)</strong></li>\n<li><strong>같은 일을 겪은 동료 정황·공유 맥락 자료</strong></li>\n<li><strong>발언이 이루어진 범위·상대 관계 자료</strong></li>\n<li><strong>조직 개선·재발 방지 목적 정황 자료</strong></li>\n<li><strong>변호인 의견서·항변 자료</strong></li>\n<li><strong>고소장·수사기관 통지 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 업무 관련 발언은 그것이 사실 확인·규명 과정에서 나온 것인지가 전파가능성 평가에 중요하므로, 어떤 경위·목적으로 누구에게 말했는지를 함께 정리해두면 방어에 도움이 되는 자료입니다. 폭로 내용이 진실이라는 근거 자료도 함께 모아두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>전파가능성 신중 평가</strong> — 업무 관련 사실 확인 과정 발언은 인식·용인을 신중히 보는 영역.</li>\n<li><strong>사실 진실성</strong> — 폭로 내용의 객관 근거 자료 충실성이 핵심.</li>\n<li><strong>공익성</strong> — 조직 개선·동료 보호 목적 vs 사익적 동기 비중 평가.</li>\n<li><strong>비방 목적</strong> — 가해 의사·목적이 있었는지 별도 구성요건으로 평가.</li>\n<li><strong>표현 방식</strong> — 단정·인신공격 회피가 방어에 유리.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr) / 신고 112</strong></li>\n<li><strong>고용노동부 직장 내 괴롭힘 상담 1350</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 업무 관련 사실 확인 과정 발언의 전파가능성 신중 평가 영역',
        summary:
          '대법원 2020도8336(대법원, 2022.07.28 선고) 영역에서 법원은 전파가능성을 이유로 공연성을 인정할 때는 미필적 고의로서 전파가능성에 대한 인식과 위험을 용인하는 내심의 의사가 필요하고, 공적인 관계에서 조직 등의 업무와 관련해 사실의 확인 또는 규명 과정에서 발언하게 된 경우 등이라면 그 인식·용인을 인정하는 데 신중해야 한다고 판시했습니다. 직장 내 갑질을 업무 관련으로 알린 사안에서도 발언 경위에 따른 전파가능성 신중 평가가 핵심 방어 트랙으로 검토될 수 있습니다.',
        takeaway: '업무 관련 사실 확인 과정 발언은 전파가능성 인식·용인을 신중히 평가하는 영역 — 발언 경위 자료 보존 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '겪은 사실을 회사에 알린 것도 명예훼손이 되나요?',
        answer:
          '<strong>사실 적시도 공연성 인정 시 평가 대상이 되지만 발언 경위에 따라 달라지는 영역입니다.</strong> 사실 확인 과정 발언인지가 관건.',
      },
      {
        question: '동료들에게 말한 것도 공연성이 인정되나요?',
        answer:
          '<strong>업무 관련 사실 확인·규명 과정 발언은 전파가능성을 신중히 보는 영역입니다.</strong> 발언 경위·범위 자료가 핵심.',
      },
      {
        question: '갑질을 알린 게 공익으로 인정될 수 있나요?',
        answer:
          '<strong>조직 개선·동료 보호 목적이면 진실·공익 항변을 검토하는 영역입니다.</strong> 작성 동기·근거가 중요.',
      },
      {
        question: '진실이라는 건 누가 증명하나요?',
        answer:
          '<strong>진실성·공익성 항변의 증명은 표현행위를 한 측이 부담하는 것으로 평가되는 영역입니다.</strong> 갑질 입증 자료가 관건.',
      },
      {
        question: '합의로 마무리할 수 있을까요?',
        answer:
          '<strong>근거 자료 충실도에 따라 합의 조건이 달라지는 영역입니다.</strong> 사과·일부 정리 조합을 검토해볼 수 있습니다.',
      },
    ],
    cta: { text: '삭제·합의·방어 포인트, AI로 먼저 점검하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '회사 단톡 욕설 모욕 명예훼손 구분', href: '/guide/defamation/defamation-company-chat-insult-vs-defamation' },
      { label: '회사 단톡방 비판 명예훼손 대응', href: '/guide/defamation/defamation-company-groupchat-criticism-accused' },
      { label: '사실적시 명예훼손 방어', href: '/guide/defamation/truth-defamation-accused-response' },
      { label: '공익 명예훼손 방어', href: '/guide/defamation/public-interest-defamation-defense' },
      { label: '명예훼손 피의자 시작', href: '/guide/defamation/defamation-accused-where-to-start' },
    ],
  },

  // ─── 3. defamation-momcafe-anonymous-slander-post-victim-track (victim) ───
  {
    domain: 'defamation',
    slug: 'defamation-momcafe-anonymous-slander-post-victim-track',
    keyword: '맘카페 익명 비방글 명예훼손',
    questionKeyword: '맘카페에 누가 익명으로 저를 콕 집어 비방하는 글을 올렸어요. 이름은 안 썼지만 누군지 다 알 수 있게 써서 동네에 소문이 났는데 대응할 수 있나요?',
    ctaKeyword: '맘카페 익명 비방글 명예훼손 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '맘카페 익명 비방글 명예훼손 — 5단계 대응 점검 | 로앤가이드',
      description:
        '맘카페에 익명으로 나를 콕 집어 비방하는 글이 올라와 동네에 소문이 났다면, 정보통신망법 비방 명예훼손·작성자 특정과 보존·고소·민사 5가지 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"동네 맘카페에 누군가 익명으로 본인을 겨냥한 비방글을 올렸습니다. 실명은 적지 않았지만 사는 동네·아이 학교·가게 같은 정보가 함께 적혀 있어, 글을 본 회원들은 그게 본인이라는 걸 어렵지 않게 알아챘어요. 댓글로 소문이 번지면서 동네에서 본인을 보는 눈이 달라졌고, 작성자가 누군지도 몰라 막막합니다." 정보통신망법 제70조는 \'비방할 목적으로 정보통신망을 통해 공공연하게 사실을 드러내 다른 사람의 명예를 훼손한 행위\'를 규정하고, 허위사실 적시는 더 무겁게 다루는 영역입니다. 다수 회원이 보는 카페 게시는 공연성 평가가 가능한 영역이고, 실명이 없어도 주변 정보로 본인이 특정되면 대상이 될 수 있다는 평가가 가능한 트랙. 익명 게시 + 식별 가능 정보 + 카페 확산 결합은 \'비방 목적·공연성 인정 vs 부정\' 평가가 갈리는 영역입니다. 피해자라면 ① 보존 ② 삭제 요청 ③ 작성자 특정 ④ 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 맘카페 익명 비방글 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·삭제·특정·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 게시글 보존</strong> — 비방글 전문·URL·작성 시각·열람 수·댓글 캡처.</li>\n<li><strong>② 삭제·정정 요청</strong> — 카페 운영자·플랫폼 권리침해 신고 + 임시조치.</li>\n<li><strong>③ 작성자 특정</strong> — 닉네임·계정·IP 확인을 수사기관 통해 검토.</li>\n<li><strong>④ 형사 고소</strong> — 정보통신망법 제70조 검토(허위·진실 적시 구분).</li>\n<li><strong>⑤ 민사 손해배상</strong> — 위자료·정신적 피해 청구(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정보통신망법 비방 명예훼손은 비방할 목적이 별도 구성요건이고 그 증명책임은 검사에게 있는 영역. 다수 회원이 보는 카페 게시는 공연성 평가가 가능하고, 실명이 없어도 주변 정보로 본인이 특정되면 대상이 될 수 있어 식별 정보·확산 자료를 함께 보존하는 것이 우선입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·신고·특정·고소 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 비방글 즉시 보존 (인지 당일)</strong> — 전문·URL·작성 시각·열람 수·댓글 반응 캡처.</li>\n<li><strong>2단계 — 카페·플랫폼 권리침해 신고 (1주 내)</strong> — 삭제·임시조치 요청.</li>\n<li><strong>3단계 — 방송통신심의위원회 심의 신청 (병행)</strong> — 반복 게시·확산 삭제·차단 검토.</li>\n<li><strong>4단계 — 경찰 고소 + 작성자 특정 (1개월 내)</strong> — 정보통신망법 제70조 + 계정·IP 확인.</li>\n<li><strong>5단계 — 민사 손해배상 청구 (시효 3년)</strong> — 위자료·정신적 피해 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">맘카페 익명 비방글 명예훼손 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 게시·특정·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>비방글 전문 캡처 (URL·작성 시각·열람 수 포함)</strong></li>\n<li><strong>본인으로 특정되는 식별 정보 표시 자료 (동네·학교·가게 등)</strong></li>\n<li><strong>적시 사실의 허위 반박 자료 (필요 시)</strong></li>\n<li><strong>댓글·2차 확산 정황 자료</strong></li>\n<li><strong>작성자 닉네임·계정 활동 이력 정황</strong></li>\n<li><strong>카페·플랫폼 신고 접수·처리 결과 캡처</strong></li>\n<li><strong>정신적 피해 정황 자료 (진료·상담 기록, 필요 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 실명이 없더라도 글에서 본인을 알아볼 수 있게 한 동네·학교·가게 같은 식별 정보를 따로 표시해두면 특정 가능성 평가에 도움이 되는 자료입니다. 작성자가 글을 지우기 전에 전문과 댓글까지 시각·URL과 함께 보존해두는 것이 우선입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>비방 목적</strong> — 가해 의사·목적이 있었는지 별도 구성요건으로 평가.</li>\n<li><strong>특정 가능성</strong> — 실명이 없어도 주변 정보로 본인이 식별되는 범위.</li>\n<li><strong>공연성</strong> — 다수 회원이 보는 카페 게시는 공연성 평가가 가능한 영역.</li>\n<li><strong>허위성</strong> — 적시 사실의 허위·진실 구분에 따라 적용 조문이 달라지는 영역.</li>\n<li><strong>작성자 특정</strong> — 익명 계정은 수사기관 통한 계정·IP 확인 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr) / 신고 112</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보분쟁조정위원회 (kopico.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 익명 게시와 전파가능성·특정 평가 영역',
        summary:
          '대법원 2018도4200(대법원, 2018.06.15 선고) 영역에서 법원은 명예훼손죄의 공연성은 불특정 또는 다수인이 인식할 수 있는 상태를 말하고, 개별적으로 한 사람에게 사실을 유포했더라도 불특정·다수인에게 전파될 가능성이 있으면 공연성이 인정되며 그 경우 미필적 고의로서 전파가능성에 대한 인식과 위험을 용인하는 의사가 필요하다고 판시했습니다. 익명으로 카페에 올린 글이 동네에 퍼진 사안에서도 전파가능성·특정과 미필적 고의가 핵심 평가 트랙으로 검토될 수 있습니다.',
        takeaway: '익명 게시라도 전파가능성·특정이 인정되면 평가가 가능한 영역 — 식별 정보·확산 자료 보존 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '실명을 안 썼는데도 명예훼손이 되나요?',
        answer:
          '<strong>주변 정보로 본인이 특정되면 대상이 될 수 있는 영역입니다.</strong> 식별 정보 표시 자료가 핵심.',
      },
      {
        question: '익명 작성자를 찾을 수 있나요?',
        answer:
          '<strong>계정·IP 확인을 수사기관 통해 검토하는 영역입니다.</strong> 인지 즉시 게시글 보존이 우선.',
      },
      {
        question: '카페 글이라 회원만 보는데 공연성이 되나요?',
        answer:
          '<strong>다수 회원이 열람하는 게시는 공연성 평가가 가능한 영역입니다.</strong> 열람 범위·댓글 자료가 도움.',
      },
      {
        question: '운영자에게 신고하면 글이 바로 지워지나요?',
        answer:
          '<strong>권리침해 신고 시 임시조치·검토 절차가 진행되는 영역입니다.</strong> 삭제 전 전문 캡처가 우선.',
      },
      {
        question: '동네 소문까지 났는데 민사도 가능한가요?',
        answer:
          '<strong>정신적 피해와의 관계를 정리하면 손해배상 청구를 검토할 수 있는 영역입니다.</strong> 확산 정황 자료가 도움.',
      },
    ],
    cta: { text: '명예훼손 대응 포인트, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '아파트 주민 카페 비방 대응', href: '/guide/defamation/defamation-apartment-resident-cafe-slander-track' },
      { label: '익명 게시자 IP 추적', href: '/guide/defamation/defamation-anonymous-board-ip-tracking' },
      { label: '명예훼손 피해자 시작', href: '/guide/defamation/defamation-victim-where-to-start' },
      { label: '온라인 명예훼손 증거 수집', href: '/guide/defamation/online-defamation-evidence-collection' },
      { label: '명예훼손 합의금 기준', href: '/guide/defamation/defamation-settlement-amount-guide' },
    ],
  },

  // ─── 4. defamation-store-review-bad-rating-insult-accused-defense (accused) ───
  {
    domain: 'defamation',
    slug: 'defamation-store-review-bad-rating-insult-accused-defense',
    keyword: '가게 별점 리뷰 악평 모욕 고소 방어',
    questionKeyword: '가게에서 안 좋았던 경험을 별점 낮게 주고 솔직하게 리뷰를 썼는데, 사장이 저를 모욕죄로 고소했어요. 비판한 거지 욕한 게 아닌데 처벌되나요?',
    ctaKeyword: '가게 별점 리뷰 악평 모욕 고소 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '가게 별점·리뷰 악평 모욕 고소 — 5단계 방어 점검 | 로앤가이드',
      description:
        '솔직한 별점·리뷰를 남겼다가 모욕죄 혐의를 받고 있다면, 형법 제311조 평가성 표현·사회상규 위배 구분과 맥락 정리까지 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"가게나 서비스를 이용하고 만족스럽지 못했던 경험을 별점을 낮게 주고 리뷰로 솔직하게 적었습니다. 다소 강한 표현이 섞이긴 했지만 본인은 다른 손님에게 참고가 되라고 평가를 남긴 것이었는데, 사장이 그 리뷰를 두고 \'모욕을 당했다\'며 본인을 고소했어요. 욕설을 한 것도 아니고 이용 경험을 비판한 것뿐인데, 별점·리뷰도 전부 모욕죄가 된다는 말에 막막합니다." 혐의를 받고 있다면 형법 제311조의 모욕죄는 사회적 평가를 떨어뜨릴 만한 경멸적 감정 표현을 의미하지만, 모욕적 표현을 포함한 의견·평가라도 그 시대의 건전한 사회통념에 비추어 사회상규에 위배되지 않으면 정당행위로서 위법성이 조각될 수 있다는 평가가 가능한 영역입니다. 이용 경험 비판 + 평가성 표현 + 사회상규 결합은 \'모욕죄 성립 vs 정당한 비판·위법성 조각\' 평가가 갈리는 트랙. 사실과 다르게 신고되었다면 ① 표현 분석 ② 맥락 정리 ③ 사회상규 검토 ④ 변호인 의견서 ⑤ 합의 5중 트랙으로 방어를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 가게 별점·리뷰 악평 모욕 고소 5단계 방어 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 표현분석·맥락·사회상규·의견서·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 표현 분석</strong> — 경멸적 감정 표현인지 이용 경험 비판·평가인지 문구별 구분.</li>\n<li><strong>② 맥락 정리</strong> — 실제 이용 경험·불만 사유·작성 경위 정리.</li>\n<li><strong>③ 사회상규 검토</strong> — 평가 과정의 표현이 사회상규에 위배되지 않는지 검토.</li>\n<li><strong>④ 변호인 의견서</strong> — 모욕죄 구성요건 미충족·정당행위 위법성 조각 항변 정리.</li>\n<li><strong>⑤ 합의·정리 검토</strong> — 정정·사과·합의 조합 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 모욕적 표현을 포함한 의견·평가라도 건전한 사회통념에 비추어 사회상규에 위배되지 않으면 정당행위로서 위법성이 조각될 수 있는 영역. 실제 이용 경험에 근거한 평가인지, 경멸 자체가 목적인 표현인지 맥락을 정리하는 것이 먼저입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·의견서·조사·정리·합의 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 리뷰·이용 경험 자료 보존 (즉시)</strong> — 리뷰 전문·이용 내역·불만 사유 입증 자료 정리.</li>\n<li><strong>2단계 — 변호인 선임 + 의견서 (1~2주)</strong> — 모욕죄 구성요건 미충족·사회상규 위배 여부 항변 정리.</li>\n<li><strong>3단계 — 경찰 조사 출석 (1개월 내)</strong> — 실제 경험 근거·평가 목적 소명 진술.</li>\n<li><strong>4단계 — 리뷰 정정·보완 (필요 시)</strong> — 감정적·과장 표현 부분 정리.</li>\n<li><strong>5단계 — 합의 협의</strong> — 정정·사과·합의 조합 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">가게 별점·리뷰 악평 모욕 고소 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 표현·경험·항변 갈래입니다.</strong></p>\n<ul>\n<li><strong>문제 된 리뷰·별점 전문 캡처</strong></li>\n<li><strong>실제 이용 내역 자료 (주문·결제·예약 기록)</strong></li>\n<li><strong>불만 사유 입증 자료 (사진·메시지·상황 기록)</strong></li>\n<li><strong>리뷰 작성 경위·평가 목적 정리 자료</strong></li>\n<li><strong>경멸 자체가 목적이 아닌 비판 표현이었다는 정황 자료</strong></li>\n<li><strong>변호인 의견서·항변 자료</strong></li>\n<li><strong>고소장·수사기관 통지 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 리뷰가 실제 이용 경험에 근거했다는 점을 보여주는 주문·결제·상황 자료를 함께 모아두면, 평가성 표현인지 경멸 목적 표현인지 구분에 도움이 되는 영역입니다. 문제 된 표현만이 아니라 리뷰 전체 맥락을 함께 보존해두는 것이 우선입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>평가 vs 경멸</strong> — 이용 경험 비판·평가인지 경멸적 모욕인지 구분.</li>\n<li><strong>사회상규</strong> — 평가 과정의 표현은 사회상규 위배 아니면 위법성 조각 여지.</li>\n<li><strong>경험 근거</strong> — 실제 이용 경험에 근거한 평가인지가 방어에 유리.</li>\n<li><strong>표현 정도</strong> — 과장·인신공격 정도가 평가에 반영되는 영역.</li>\n<li><strong>합의 타이밍</strong> — 조사 단계 정정·합의가 처분에 영향을 줄 수 있는 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr) / 신고 112</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>한국소비자원 1372 (소비자 상담)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 평가성 표현과 모욕죄 사회상규 위법성 조각 평가 영역',
        summary:
          '대법원 2020도14576(대법원, 2021.08.19 선고) 영역에서 법원은 어떠한 글이 모욕적 표현을 포함하는 판단이나 의견을 담고 있더라도 그 시대의 건전한 사회통념에 비추어 사회상규에 위배되지 않는 행위로 볼 수 있는 때에는 형법 제20조의 정당행위로서 위법성이 조각된다고 판시했습니다. 이용 경험을 별점·리뷰로 평가한 사안에서도 표현의 평가성·사회상규 위배 여부가 핵심 방어 트랙으로 검토될 수 있습니다.',
        takeaway: '평가성 표현이 사회상규에 위배되지 않으면 정당행위로 위법성 조각이 검토되는 영역 — 경험 근거·맥락 보존 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '별점 낮게 주고 리뷰 쓴 것도 모욕죄가 되나요?',
        answer:
          '<strong>평가성 표현이 사회상규에 위배되지 않으면 위법성 조각을 검토하는 영역입니다.</strong> 경험 근거·표현 정도가 관건.',
      },
      {
        question: '강한 표현을 썼는데 다 처벌되나요?',
        answer:
          '<strong>경멸 자체가 목적인지, 평가 과정의 표현인지 구분하는 영역입니다.</strong> 작성 경위·맥락 자료가 핵심.',
      },
      {
        question: '실제 겪은 일을 쓴 건데 인정받을 수 있나요?',
        answer:
          '<strong>실제 이용 경험에 근거한 평가인지가 방어에 유리한 영역입니다.</strong> 주문·결제·상황 자료가 도움.',
      },
      {
        question: '리뷰를 지금 지우거나 고치는 게 나을까요?',
        answer:
          '<strong>변호인 자문 후 결정하는 영역입니다.</strong> 과장 표현 정정이 도움될 수 있으나 전문 보존이 먼저.',
      },
      {
        question: '사장과 합의하면 정리될까요?',
        answer:
          '<strong>조사 단계 정정·합의가 처분에 영향을 줄 수 있는 영역입니다.</strong> 정정·사과·합의 조합을 검토해볼 수 있습니다.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '온라인 리뷰 악평 명예훼손', href: '/guide/defamation/defamation-online-review-bad-writing' },
      { label: '가게 리뷰 진실 항변', href: '/guide/defamation/defamation-business-review-truth-defense' },
      { label: '명예훼손 가해자 방어 전략', href: '/guide/defamation/defamation-accused-defense-strategy' },
      { label: '명예훼손 피의자 시작', href: '/guide/defamation/defamation-accused-where-to-start' },
      { label: '정당한 비판 고소 대응', href: '/guide/defamation/legitimate-criticism-prosecution' },
    ],
  },

  // ─── 5. jeonse-fraud-underwater-deposit-hug-guarantee-claim-track (victim) ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-underwater-deposit-hug-guarantee-claim-track',
    keyword: '깡통전세 보증금 미반환 HUG 보증이행',
    questionKeyword: '집값이 떨어져 보증금이 시세를 넘는 깡통전세가 됐는데 집주인이 보증금을 못 준대요. 전세보증금반환보증에 가입했었는데 HUG에 이행청구를 하면 되나요?',
    ctaKeyword: '깡통전세 보증금 미반환 HUG 보증이행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '깡통전세 HUG 보증이행 청구 — 5단계 회수 점검 | 로앤가이드',
      description:
        '집값 하락으로 보증금이 시세를 넘긴 깡통전세에서 집주인이 반환을 못 한다면, HUG 전세보증금반환보증 이행청구와 채권 행사·회수 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세로 들어올 때만 해도 보증금이 시세보다 낮았는데, 집값·전셋값이 떨어지면서 보증금이 시세를 넘는 \'깡통전세\'가 됐습니다. 만기가 됐는데 집주인은 \'다음 세입자가 들어와야 돌려줄 수 있다\'며 보증금을 주지 못한다고 해요. 다행히 전세보증금반환보증에 가입해 둔 게 있는데, 이걸로 보증금을 돌려받으려면 어디서부터 어떻게 청구해야 하는지 막막합니다." 주택임대차보호법은 임차인의 보증금 반환 채권과 우선변제권을 보호하고, HUG 전세보증금반환보증은 임대인이 보증금을 돌려주지 못할 때 보증기관이 대신 이행하는 절차를 안내합니다. 깡통전세 + 미반환 + 반환보증 가입 결합은 \'보증이행 청구 vs 일반 회수 절차\' 평가가 갈리는 트랙. 피해자라면 ① 권리·보증 점검 ② 임차권등기 ③ 보증이행 청구 ④ 반환소송·집행 ⑤ 피해자 결정 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 깡통전세 보증금 미반환 HUG 보증이행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리점검·임차권등기·보증이행·소송집행·결정 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리·보증 점검</strong> — 반환보증 가입 여부·보증 범위·전입·확정일자·등기부 정리.</li>\n<li><strong>② 임차권등기명령</strong> — 이사 시에도 대항력·우선변제권 유지 검토.</li>\n<li><strong>③ HUG 보증이행 청구</strong> — 미반환 확정 후 보증기관에 이행청구 검토.</li>\n<li><strong>④ 반환소송·강제집행</strong> — 보증 미가입·부족분은 지급명령·반환소송·가압류 검토.</li>\n<li><strong>⑤ 전세사기피해자 결정</strong> — 요건 충족 시 피해지원센터 신청 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보증금이 시세를 넘긴 깡통전세라도 전세보증금반환보증에 가입돼 있으면 임대인이 반환하지 못할 때 보증이행 청구를 검토할 수 있는 영역. 보증 범위·청구 기한·필요 자료가 보증 약관에 따라 달라지므로 가입 내용을 먼저 확인하는 것이 우선입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. HUG·전세사기피해지원센터·법원 안내 절차를 참고한 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·보증 자료 즉시 확보 (즉시)</strong> — 계약서·반환보증 증권·전입세대 확인·확정일자·등기부 정리.</li>\n<li><strong>2단계 — 임차권등기명령 신청 (이사 전, 1~2개월)</strong> — 법원 신청 + 대항력 유지.</li>\n<li><strong>3단계 — HUG 보증이행 청구 (미반환 확정 후, 보증 약관 기한 내)</strong> — 보증기관 이행청구·서류 제출.</li>\n<li><strong>4단계 — 부족분 반환소송·강제집행 (만기 후)</strong> — 보증 미가입·초과분은 소송·가압류 검토.</li>\n<li><strong>5단계 — 전세사기피해자 결정 신청 (요건 충족 시)</strong> — 피해지원센터·정부 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">깡통전세 보증금 미반환 HUG 보증이행 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리·보증·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서·보증금 송금 영수증</strong></li>\n<li><strong>전세보증금반환보증 증권·약관</strong></li>\n<li><strong>전입세대 확인·확정일자 자료</strong></li>\n<li><strong>등기부등본 (선순위 권리·시세 대비 확인)</strong></li>\n<li><strong>집주인 반환 거절·지연 메시지·통화 정황</strong></li>\n<li><strong>임차권등기명령 신청·완료 등기부등본</strong></li>\n<li><strong>인근 시세 비교 자료 (시세 하락·깡통 입증)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 반환보증에 가입돼 있다면 증권·약관에서 보증 범위와 이행청구 기한을 먼저 확인하는 것이 회수에 도움이 되는 영역입니다. 보증 범위를 넘는 부족분은 반환소송·집행으로 따로 회수해야 할 수 있으니 시세·등기부 자료를 함께 정리해두는 것이 우선입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>보증 범위</strong> — 반환보증이 보증금 전액을 보장하는지·한도가 있는지 평가.</li>\n<li><strong>이행청구 기한</strong> — 미반환 확정 후 약관에 정한 기한 내 청구가 핵심.</li>\n<li><strong>대항요건 유지</strong> — 이행청구 전 전입·점유·확정일자 존속이 중요.</li>\n<li><strong>부족분 회수</strong> — 보증 한도 초과분은 반환소송·집행으로 별도 회수 검토.</li>\n<li><strong>구상·승계</strong> — 보증이행 후 보증기관의 구상과 권리 이전 관계 정리.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세사기피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보증금 반환 채권의 권리 행사와 소멸시효 평가 영역',
        summary:
          '대법원 2016다244224(대법원, 2020.07.09 선고) 영역에서 법원은 소멸시효가 완성되려면 권리의 불행사라는 사실상태가 일정 기간 계속되어야 하고, 채권을 행사하는 방법에는 직접 이행청구 외에도 변제 수령·상계·소송상 청구나 항변으로 채권을 주장하는 경우 등이 포함되므로 채권을 계속 행사하고 있다고 볼 수 있으면 소멸시효가 진행하지 않는다고 판시했습니다. 깡통전세에서 보증금 반환이 지연되는 사안에서도 채권을 적극 행사해 권리를 관리하는 것이 핵심 트랙으로 검토될 수 있습니다.',
        takeaway: '보증금 채권은 이행청구·소송·항변 등으로 계속 행사하면 시효가 진행하지 않는 것으로 평가되는 영역 — 청구 기록 보존 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '깡통전세라도 HUG로 보증금을 돌려받을 수 있나요?',
        answer:
          '<strong>반환보증에 가입돼 있으면 보증이행 청구를 검토할 수 있는 영역입니다.</strong> 증권·약관의 보증 범위 확인이 우선.',
      },
      {
        question: '집주인이 \'다음 세입자 오면 준다\'는데 기다려야 하나요?',
        answer:
          '<strong>만기 미반환이면 채권을 적극 행사해 권리를 관리하는 영역입니다.</strong> 내용증명·청구 기록을 남겨두는 것이 도움.',
      },
      {
        question: '이사를 가면 보증이행 청구가 불리해지나요?',
        answer:
          '<strong>이행청구 전 대항요건 유지가 중요한 영역입니다.</strong> 이사 전 임차권등기 완료 확인이 우선.',
      },
      {
        question: '보증 한도를 넘는 부족분은 어떻게 받나요?',
        answer:
          '<strong>초과분은 반환소송·강제집행으로 별도 회수를 검토하는 영역입니다.</strong> 시세·등기부 자료 정리가 도움.',
      },
      {
        question: '이런 경우도 전세사기피해자 결정이 되나요?',
        answer:
          '<strong>미반환 정황과 요건 충족 여부에 따라 검토하는 영역입니다.</strong> 피해지원센터 상담 권장.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 HUG 보증이행 거절 대응', href: '/guide/jeonse-fraud/jeonse-fraud-hug-guarantee-claim-rejection-track' },
      { label: '깡통전세 시세 하락 대응', href: '/guide/jeonse-fraud/jeonse-fraud-underwater-lease-price-drop-track' },
      { label: '전세사기 첫 확인', href: '/guide/jeonse-fraud/jeonse-fraud-first-check' },
      { label: '전세보증금 미반환 대응', href: '/guide/jeonse-fraud/jeonse-deposit-not-returned-response' },
      { label: '전세사기 구제 절차 일정', href: '/guide/jeonse-fraud/jeonse-fraud-relief-timeline' },
    ],
  },

  // ─── 6. jeonse-fraud-trust-property-deposit-recovery-track (victim) ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-trust-property-deposit-recovery-track',
    keyword: '신탁 부동산 임대차 보증금 피해',
    questionKeyword: '계약 후에 알고 보니 집이 신탁 부동산이라 진짜 소유자는 신탁회사였대요. 신탁회사 동의 없이 한 계약이라는데 보증금을 돌려받을 수 있나요?',
    ctaKeyword: '신탁 부동산 임대차 보증금 피해 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '신탁 부동산 임대차 보증금 피해 — 5단계 회수 점검 | 로앤가이드',
      description:
        '집이 신탁 부동산이라 신탁회사 동의 없이 계약했다는 사실을 뒤늦게 알았다면, 신탁 권리관계 확인과 보증금 회수·피해자 결정 5가지 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세 계약을 마치고 들어와 살던 중, 등기부를 다시 떼어 보고서야 그 집이 신탁회사 앞으로 신탁된 부동산이라는 걸 알게 됐습니다. 계약은 등기부상 위탁자인 기존 집주인과 했는데, \'신탁회사 동의 없이 임대인이 한 계약이라 신탁회사에는 대항하기 어렵다\'는 말을 들었어요. 보증금이 그대로 묶여 있는데 누구에게 어떻게 돌려받아야 하는지 막막합니다." 신탁 부동산은 소유권이 신탁회사(수탁자)에게 있고, 임대 권한·보증금 반환 의무가 신탁계약·동의 여부에 따라 달라지는 영역입니다. 신탁등기 + 동의 여부 + 보증금 미반환 결합은 \'신탁회사 대항 가능 vs 위탁자 상대 회수\' 평가가 갈리는 트랙. 피해자라면 ① 신탁·권리관계 확인 ② 임차권등기 ③ 반환 청구 상대 정리 ④ 반환소송·집행 ⑤ 피해자 결정 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 신탁 부동산 임대차 보증금 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신탁확인·임차권등기·상대정리·소송집행·결정 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 신탁·권리관계 확인</strong> — 등기부·신탁원부에서 수탁자·임대 동의·우선수익자 확인.</li>\n<li><strong>② 임차권등기명령</strong> — 대항요건 유지·점유 보전 검토.</li>\n<li><strong>③ 반환 청구 상대 정리</strong> — 신탁회사 동의 여부에 따라 청구 상대 정리.</li>\n<li><strong>④ 반환소송·강제집행</strong> — 위탁자·수탁자 중 책임 주체 상대 청구·집행 검토.</li>\n<li><strong>⑤ 전세사기피해자 결정</strong> — 요건 충족 시 피해지원센터 신청 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 신탁 부동산은 소유권이 수탁자(신탁회사)에게 있어, 신탁회사 동의 없이 위탁자와 한 임대차는 신탁회사에 대항하기 어려운 소지가 있는 영역. 신탁원부에서 임대 권한·동의 여부를 확인해 누구를 상대로 청구할지 정리하는 것이 우선입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 전세사기피해지원센터·법원 안내 절차를 참고한 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신탁·권리관계 자료 즉시 확보 (즉시)</strong> — 등기부·신탁원부·계약서·동의서 유무 정리.</li>\n<li><strong>2단계 — 임차권등기명령 신청 (이사 전, 1~2개월)</strong> — 법원 신청 + 대항요건 유지.</li>\n<li><strong>3단계 — 반환 청구 상대 정리 (1~2주)</strong> — 신탁회사 동의 여부에 따라 위탁자·수탁자 정리.</li>\n<li><strong>4단계 — 반환소송·강제집행 (만기 후)</strong> — 책임 주체 상대 지급명령·반환소송·가압류 검토.</li>\n<li><strong>5단계 — 전세사기피해자 결정 신청 (요건 충족 시)</strong> — 피해지원센터·정부 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">신탁 부동산 임대차 보증금 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신탁·권리·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서·보증금 송금 영수증</strong></li>\n<li><strong>등기부등본 (신탁등기 표시 확인)</strong></li>\n<li><strong>신탁원부 (수탁자·임대 권한·우선수익자 확인)</strong></li>\n<li><strong>신탁회사 임대 동의서 유무 자료</strong></li>\n<li><strong>전입세대 확인·확정일자 자료</strong></li>\n<li><strong>집주인(위탁자) 반환 거절·지연 메시지·통화 정황</strong></li>\n<li><strong>임차권등기명령 신청·완료 등기부등본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 신탁 부동산은 등기부만으로는 권리관계를 다 알기 어려우므로, 등기소에서 신탁원부를 함께 떼어 수탁자·임대 동의 여부를 확인해두는 것이 회수 상대 정리에 도움이 되는 영역입니다. 신탁회사 동의서가 있었는지가 청구 방향을 좌우하므로 계약 당시 받은 서류를 모아두는 것이 우선입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임대 권한</strong> — 위탁자에게 임대 권한·동의가 있었는지 신탁원부로 확인.</li>\n<li><strong>대항 가능성</strong> — 신탁회사 동의 없는 계약은 수탁자에 대항하기 어려운 소지.</li>\n<li><strong>청구 상대</strong> — 위탁자·수탁자 중 책임 주체를 정리하는 것이 핵심.</li>\n<li><strong>우선수익자</strong> — 신탁상 우선수익권이 회수 순위에 미치는 영향 평가.</li>\n<li><strong>강제집행 대상</strong> — 책임 주체 재산 파악·가압류가 회수의 관건.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>전세사기피해지원센터 1533-8119</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 중개사의 권리관계 조사·설명의무 평가 영역',
        summary:
          '대법원 2023다259743(대법원, 2023.11.30 선고) 영역에서 법원은 부동산 중개업자는 선량한 관리자의 주의로 중개대상물의 권리관계 등을 조사·확인해 의뢰인에게 설명할 의무가 있고, 직접 조사·확인할 의무가 없는 사항이라도 중개의뢰인이 계약 체결 여부를 결정하는 데 중요한 것이라면 그릇된 정보를 제공하거나 진실인 것처럼 전달해 계약을 체결하게 해서는 안 된다고 판시했습니다. 신탁 부동산 여부 같은 핵심 권리관계 설명이 누락·잘못된 사안에서도 설명의무 위반과 회수 상대 정리가 핵심 트랙으로 검토될 수 있습니다.',
        takeaway: '신탁 등 핵심 권리관계는 중개사 설명의무 대상이고 동의 여부가 청구 상대를 좌우하는 영역 — 신탁원부·동의서 확인 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '계약 후에 신탁 부동산인 걸 알았는데 보증금을 받을 수 있나요?',
        answer:
          '<strong>신탁회사 동의 여부에 따라 청구 상대와 회수 방향이 갈리는 영역입니다.</strong> 신탁원부·동의서 확인이 우선.',
      },
      {
        question: '신탁회사 동의 없이 한 계약은 어떻게 되나요?',
        answer:
          '<strong>수탁자에 대항하기 어려운 소지가 있어 위탁자 상대 회수를 검토하는 영역입니다.</strong> 동의서 유무가 핵심.',
      },
      {
        question: '보증금은 집주인과 신탁회사 중 누구에게 청구하나요?',
        answer:
          '<strong>동의 여부에 따라 위탁자·수탁자 중 책임 주체를 정리하는 영역입니다.</strong> 신탁원부 확인 후 정리가 도움.',
      },
      {
        question: '중개사가 신탁이라는 걸 설명 안 했으면 책임이 있나요?',
        answer:
          '<strong>핵심 권리관계 설명의무 위반·손해배상을 검토할 수 있는 영역입니다.</strong> 확인설명서·설명 정황 자료가 도움.',
      },
      {
        question: '이런 경우도 전세사기피해자 결정이 되나요?',
        answer:
          '<strong>미반환 정황과 요건 충족 여부에 따라 검토하는 영역입니다.</strong> 피해지원센터 상담 권장.',
      },
    ],
    cta: { text: '보증금 돌려받을 수 있는지 AI로 점검하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '신탁 부동산 보증금 피해', href: '/guide/jeonse-fraud/jeonse-fraud-trust-property-deposit-track' },
      { label: '선순위 근저당 은폐 전세사기', href: '/guide/jeonse-fraud/jeonse-fraud-hidden-senior-mortgage-track' },
      { label: '전세사기 첫 확인', href: '/guide/jeonse-fraud/jeonse-fraud-first-check' },
      { label: '전세사기 피해자 인정 절차', href: '/guide/jeonse-fraud/jeonse-fraud-victim-recognition-process' },
      { label: '전세사기 구제 절차 일정', href: '/guide/jeonse-fraud/jeonse-fraud-relief-timeline' },
    ],
  },

  // ─── 7. jeonse-fraud-landlord-sale-new-owner-refuse-deposit-track (victim) ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-landlord-sale-new-owner-refuse-deposit-track',
    keyword: '임대인 매매 변경 새 집주인 보증금 거부',
    questionKeyword: '살던 집이 매매돼 집주인이 바뀌었는데, 새 집주인이 \'나는 보증금 받은 적 없으니 모른다\'며 반환을 거부해요. 누구에게 보증금을 받아야 하나요?',
    ctaKeyword: '임대인 매매 변경 새 집주인 보증금 거부 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임대인 매매 변경 새 집주인 보증금 거부 — 5단계 점검 | 로앤가이드',
      description:
        '집이 매매돼 바뀐 새 집주인이 \'보증금 받은 적 없다\'며 반환을 거부한다면, 주택임대차보호법 양수인 반환의무 승계와 청구·집행 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세로 살던 집이 만기 전에 다른 사람에게 매매됐고, 그 뒤 집주인이 바뀌었습니다. 만기가 되어 보증금을 돌려달라고 했더니, 새 집주인은 \'나는 전 주인에게 보증금을 받은 적이 없으니 책임이 없다\'며 반환을 거부해요. 전 집주인은 \'이제 집을 팔았으니 나와는 상관없다\'고 하고, 본인은 양쪽 사이에 끼어 누구에게 보증금을 받아야 하는지 막막합니다." 주택임대차보호법 제3조 제4항은 \'대항요건을 갖춘 임차주택의 양수인은 임대인의 지위를 승계한다\'고 규정해, 일정 요건을 갖춘 임차인에게는 새 소유자가 보증금 반환 의무를 이어받는 것으로 평가되는 영역입니다. 매매로 임대인 변경 + 대항요건 + 반환 거부 결합은 \'양수인 지위 승계 vs 전 임대인 책임\' 평가가 갈리는 트랙. 피해자라면 ① 대항요건·승계 점검 ② 임차권등기 ③ 내용증명 ④ 반환소송·집행 ⑤ 피해자 결정 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 임대인 매매 변경 새 집주인 보증금 거부 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 승계점검·임차권등기·내용증명·반환소송·결정 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 대항요건·승계 점검</strong> — 전입·확정일자·점유로 양수인 지위 승계 여부 확인.</li>\n<li><strong>② 임차권등기명령</strong> — 이사 시에도 대항력·우선변제권 유지 검토.</li>\n<li><strong>③ 내용증명 발송</strong> — 새 집주인(양수인) 상대 만기 보증금 반환 청구.</li>\n<li><strong>④ 보증금 반환소송·강제집행</strong> — 책임 주체 상대 지급명령·반환소송·가압류 검토.</li>\n<li><strong>⑤ 전세사기피해자 결정</strong> — 요건 충족 시 피해지원센터 신청 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대항요건을 갖춘 임차주택이 양도되면 양수인이 임대인의 지위를 승계하는 것으로 평가되는 영역이라, 새 집주인이 \'보증금을 받은 적 없다\'고 해도 반환 의무가 양수인에게 이어질 소지가 있습니다. 전입·확정일자·점유가 언제부터 유지됐는지 시점 자료가 우선입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 전세사기피해지원센터·법원 안내 절차를 참고한 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 승계·권리 자료 즉시 확보 (즉시)</strong> — 계약서·전입세대 확인·확정일자·등기부(소유권 이전) 정리.</li>\n<li><strong>2단계 — 임차권등기명령 신청 (이사 전, 1~2개월)</strong> — 법원 신청 + 대항요건 유지.</li>\n<li><strong>3단계 — 내용증명 발송 (병행)</strong> — 새 집주인 상대 만기 보증금 반환 청구·기한 통지.</li>\n<li><strong>4단계 — 지급명령·반환소송·가압류 (만기 후)</strong> — 책임 주체 재산 파악·강제집행 검토.</li>\n<li><strong>5단계 — 전세사기피해자 결정 신청 (요건 충족 시)</strong> — 피해지원센터·정부 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임대인 매매 변경 새 집주인 보증금 거부 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 승계·권리·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서·보증금 송금 영수증</strong></li>\n<li><strong>전입세대 확인·확정일자 자료 (대항요건 시점)</strong></li>\n<li><strong>등기부등본 (소유권 이전·변경 이력 확인)</strong></li>\n<li><strong>점유 존속 정황 자료</strong></li>\n<li><strong>새 집주인·전 집주인 반환 거절 메시지·통화 정황</strong></li>\n<li><strong>임차권등기명령 신청·완료 등기부등본</strong></li>\n<li><strong>매매·소유권 변동 시점 확인 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 양수인 지위 승계는 전입·확정일자·점유 같은 대항요건을 매매 시점 전부터 갖추고 유지했는지가 관건이므로, 그 시점을 보여주는 자료를 등기부의 소유권 이전 시점과 함께 정리해두는 것이 도움이 되는 영역입니다. 새 집주인과 전 집주인 사이 책임을 따지기 전에 대항요건 시점부터 확인하는 것이 우선입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>지위 승계</strong> — 대항요건을 갖춘 임차주택의 양수인이 임대인 지위를 승계하는 영역.</li>\n<li><strong>대항요건 시점</strong> — 전입·확정일자·점유가 매매 시점 전부터 유지됐는지가 핵심.</li>\n<li><strong>청구 상대</strong> — 새 집주인(양수인)을 상대로 반환 청구를 검토.</li>\n<li><strong>전 임대인 책임</strong> — 승계 여부에 따라 전 임대인 책임 범위 평가.</li>\n<li><strong>강제집행 대상</strong> — 책임 주체 재산 파악·가압류가 회수의 관건.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>전세사기피해지원센터 1533-8119</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대항요건의 계속 존속과 임대인 지위 승계 평가 영역',
        summary:
          '대법원 2025다213466(대법원, 2026.01.08 선고) 영역에서 법원은 주택임대차보호법 제3조 제1항의 주택 인도와 주민등록이라는 대항요건은 대항력 취득 시뿐 아니라 대항력을 유지하기 위해서도 계속 존속하고 있어야 한다고 판시했습니다. 매매로 임대인이 바뀐 사안에서도 대항요건을 매매 시점 전부터 갖추고 유지했는지에 따라 양수인의 임대인 지위 승계와 보증금 반환 의무 여부가 핵심 평가 트랙으로 검토될 수 있습니다.',
        takeaway: '대항요건을 갖춘 임차주택은 양수인이 임대인 지위를 승계하는 것으로 평가되는 영역 — 대항요건 시점 자료 보존 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '집주인이 바뀌면 보증금은 누구에게 받나요?',
        answer:
          '<strong>대항요건을 갖췄으면 새 집주인(양수인)을 상대로 청구를 검토하는 영역입니다.</strong> 대항요건 시점 자료가 핵심.',
      },
      {
        question: '새 집주인이 \'보증금 받은 적 없다\'고 하면요?',
        answer:
          '<strong>승계가 인정되면 받은 적 없다는 사정만으로 반환 의무가 면제되지 않는 것으로 평가되는 영역입니다.</strong> 승계 요건 확인이 관건.',
      },
      {
        question: '전 집주인에게는 더 이상 청구할 수 없나요?',
        answer:
          '<strong>승계 여부에 따라 전 임대인 책임 범위가 달라지는 영역입니다.</strong> 대항요건·매매 시점 정리가 도움.',
      },
      {
        question: '전입·확정일자를 매매 전에 해뒀는지가 왜 중요한가요?',
        answer:
          '<strong>대항요건을 매매 시점 전부터 갖췄는지가 양수인 승계를 좌우하는 영역입니다.</strong> 시점 입증 자료가 핵심.',
      },
      {
        question: '이런 경우도 전세사기피해자 결정이 되나요?',
        answer:
          '<strong>미반환 정황과 요건 충족 여부에 따라 검토하는 영역입니다.</strong> 피해지원센터 상담 권장.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '임대인 변경 보증금 승계 대응', href: '/guide/jeonse-fraud/jeonse-fraud-landlord-change-deposit-succession-track' },
      { label: '전세사기 첫 확인', href: '/guide/jeonse-fraud/jeonse-fraud-first-check' },
      { label: '전세보증금 미반환 대응', href: '/guide/jeonse-fraud/jeonse-deposit-not-returned-response' },
      { label: '전세사기 보증금 우선 순위', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-priority-order' },
      { label: '전세사기 구제 절차 일정', href: '/guide/jeonse-fraud/jeonse-fraud-relief-timeline' },
    ],
  },
];
