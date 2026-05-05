import { SpokePage } from '../spoke-pages';

// batch55 defamation 3개 (batch53/54와 다른 분기축):
//   1. 회사 단톡방 업무 비판 발언 → 정통망법 명예훼손 고소 (Q&A형, accused — 비방 목적·공연성 다툼)
//   2. 유튜브 댓글 사실관계 폭로 → 사실적시 명예훼손 + 형법 제310조 위법성 조각 (절차형, accused)
//   3. 학원 강사가 학부모 단톡에 험담 → 학부모가 모욕·명예훼손 고소 (절차형, victim)
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 회사 업무용 단톡방·사내 메신저에서 동료·상사의 업무 처리를 비판한 글이 정보통신망법 제70조 위반으로 고소된 가해자가, 비방 목적 부정·공연성 한정·합의 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 유튜브 영상 댓글로 사실관계를 폭로했다가 사실적시 명예훼손(형법 제307조 1항)으로 고소된 가해자가, 형법 제310조 위법성 조각(공익성 + 진실성) 항변을 4단계로 준비하도록 돕는 페이지다.
// 3. 이 페이지는 자녀가 다니는 학원·과외 강사가 학부모 단톡방·SNS에 본인을 험담한 글을 캡처한 학부모가, 모욕(형법 제311조)·정통망법 명예훼손 고소를 4단계로 준비하도록 돕는 페이지다.

export const spokesBatch55Defamation: SpokePage[] = [
  // ─── 1. defamation / company-groupchat-criticism-accused ───
  {
    domain: 'defamation',
    slug: 'defamation-company-groupchat-criticism-accused',
    keyword: '회사 단톡 비판 명예훼손 고소',
    questionKeyword: '회사 업무용 단톡방에 동료의 업무 실수를 적었는데 명예훼손으로 고소당했어요. 어떻게 방어해야 하나요?',
    ctaKeyword: '단톡 비판 고소 방어 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '회사 단톡 비판 명예훼손 고소당했다면 5가지 방어 | 로앤가이드',
      description:
        '회사 단톡방에서 동료 업무 비판 발언으로 정통망법 명예훼손 고소를 받았다면 비방 목적·공연성·합의 5가지 방어 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>"팀 업무용 단톡방에 동료의 반복된 업무 실수를 적시하며 \'이런 일은 다신 없어야 한다\'고 썼습니다. 며칠 뒤 정보통신망법 제70조 위반(명예훼손)으로 고소장이 접수됐다는 통지를 받았어요." 단톡·사내 메신저 발언이 형사고소로 이어지는 사례가 늘고 있어, 혐의를 받고 있다면 <strong>비방 목적 부정 + 공연성 한정 + 진실성·공익성 항변</strong>이 핵심 방어선이에요. 정통망법 제70조 1항(사실 적시)은 3년 이하 징역·3천만원 벌금, 2항(허위)은 7년 이하라 다툼 실익이 큽니다. 5가지 방어 포인트를 정리해두면 도움이 됩니다.</p>',
    sections: [
      {
        title: 'Q. 단톡방 발언이 정통망법 명예훼손이 되는 4가지 요건',
        content:
          '<p><strong style="color:#1e3a5f">A. 정통망법 제70조 성립엔 4요건이 모두 필요합니다.</strong></p>\n<ul>\n<li><strong>정보통신망 이용 — 단톡·SNS·메신저</strong> — 카카오톡·텔레그램·사내 메신저는 모두 정보통신망. 음성통화·대면 험담은 형법 제307조(일반 명예훼손) 트랙.</li>\n<li><strong>공연성</strong> — 불특정 다수 또는 전파 가능성. 단톡 인원수·구성·전달 가능성이 핵심 다툼. 소수 폐쇄 단톡엔 공연성 부정 사례 보고.</li>\n<li><strong>사실 적시 또는 허위 사실</strong> — 의견·평가는 명예훼손이 아니라 모욕(형법 제311조). "일을 못한다" 평가형은 모욕 영역.</li>\n<li><strong>비방할 목적</strong> — 정통망법 제70조의 핵심. 공익 목적·자기방어 목적이 인정되면 성립 부정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단톡 발언 명예훼손은 "비방 목적 + 공연성"이 가장 흔한 다툼 지점이라, 단톡 인원·발언 맥락·업무상 필요성을 시간순 정리해두면 도움이 됩니다.</blockquote>',
      },
      {
        title: 'Q. 가장 효과적인 5가지 방어 전략',
        content:
          '<p><strong style="color:#1e3a5f">A. 혐의를 받고 있다면 아래 5가지를 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 비방 목적 부정</strong> — 업무 개선·재발 방지·시정 요구가 주된 목적이면 비방 목적 인정 어려움. 단톡 전후 맥락(업무 보고·개선 논의)을 함께 제시.</li>\n<li><strong>② 공연성 한정 항변</strong> — 단톡 인원이 직접 관련자(같은 팀 5~10명) 한정이고 전파 우려가 낮으면 공연성 부정 다툼. 그룹 멤버 명단 + 업무 직접 관련성 입증.</li>\n<li><strong>③ 의견·평가형(모욕 영역) 주장</strong> — "일을 못한다", "비효율적이다" 같은 평가는 사실 적시가 아니라 모욕. 정통망법 70조보다 형법 311조 모욕(1년 이하·반의사불벌)이 합의·선처 폭이 큼.</li>\n<li><strong>④ 진실성 + 공익성(형법 제310조)</strong> — 정통망법 제70조 1항(사실 적시)은 형법 제310조 준용. 적시 사실이 진실이고 공익에 관한 것이면 위법성 조각.</li>\n<li><strong>⑤ 합의 + 반의사불벌 활용</strong> — 정통망법 70조는 반의사불벌죄. 합의서 + 처벌불원의사가 1심 변론종결 전까지 제출되면 공소기각.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">단톡 인원·발언 내용·진실성·합의 가능성에 따라 방어 전략이 달라요. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">경찰 조사·검찰 조사를 앞두고 아래 자료를 미리 정리해두면 진술이 빨라집니다.</strong></p>\n<ul>\n<li><strong>단톡 전체 캡처(검찰·경찰 제출용)</strong> — 문제 발언 전후 1~2주, 인원 명단(프로필 포함). 발언 맥락·업무 흐름 입증.</li>\n<li><strong>업무 관련 보고서·이메일</strong> — 단톡 발언이 업무 개선·시정 요구에서 출발했음을 입증. 비방 목적 부정 자료.</li>\n<li><strong>피해자(고소인) 업무 실수 기록</strong> — 적시 사실이 진실이라면 형법 제310조 항변 자료. 경위서·시말서·재발 사례.</li>\n<li><strong>단톡 멤버 진술서(가능한 경우)</strong> — 발언이 업무 맥락이었음·전파 의도 없었음을 증언.</li>\n<li><strong>합의서·처벌불원의사 제출용 양식</strong> — 반의사불벌 활용을 위해 변호사·법률구조공단 132 자문 후 작성.</li>\n<li><strong>본인 신분증·인감증명서</strong> — 조사 출석·합의서 작성용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 경찰 조사에서 "그냥 욕한 적 없다" 부인 일변도. 비방 목적이 없었음·업무 개선 목적이었음을 사실관계로 설명하는 것이 다툼 실익이 큽니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 단톡 명예훼손 방어 단계에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>단톡 캡처 삭제</strong> — 본인 휴대폰 단톡을 삭제하면 본인 항변 자료까지 사라짐. 불리해 보여도 원본 보존이 우선.</li>\n<li><strong>다른 단톡·SNS에서 추가 발언</strong> — 고소된 발언 외 추가 비판 글이 발견되면 비방 목적 입증 자료가 됨. 재발·이후 발언 자제.</li>\n<li><strong>합의 시점 놓침</strong> — 1심 변론종결 전까지 처벌불원의사 제출이 마지노선. 항소심에서 합의해도 공소기각 효력은 못 받음(다만 양형 참작).</li>\n<li><strong>회사 사규 위반과 형사 분리</strong> — 형사 무혐의가 나도 회사 징계는 별도 절차. 직장 내 괴롭힘·사규 위반과 형사 사건은 동시 대응 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / KISA 인터넷침해사고 118(피해 시 정보) / 방송통신심의위원회 권익보호국 / 경찰청 사이버범죄 신고시스템 ECRM(ecrm.police.go.kr).</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 단체 채팅방 명예훼손 발언과 비방 목적의 인정',
        summary:
          '대구지방법원 2021노3171(2022.03.25 선고) 사건에서 법원은 단체 채팅방에서 특정인의 업무·인격을 폄하하는 글을 반복 게시한 사안을 다루며, 정보통신망법 제70조 위반 여부를 판단할 때 채팅방의 인원·구성·발언의 동기와 맥락을 종합 검토해야 한다고 판시했습니다. 단톡 발언이 명예훼손인지 모욕인지, 비방 목적이 있었는지는 단톡 멤버 명단·발언 전후 맥락·업무 관련성을 종합적으로 살펴야 한다는 의미라, 혐의를 받고 있다면 단톡 원본·업무 보고서를 시간순 정리해두면 도움이 됩니다.',
        takeaway: '단톡 명예훼손은 인원·맥락·업무 관련성을 종합 판단하는 영역이라, 단톡 원본 보존 + 업무 보고서·이메일 시간순 정리 + 비방 목적이 아니었음을 뒷받침하는 자료를 함께 준비해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '5명짜리 팀 단톡인데도 공연성이 인정되나요?',
        answer:
          '<strong>인원수만으로 결정되지 않고 전파 가능성이 핵심입니다.</strong> 5명이라도 다른 부서·외부로 전달될 가능성이 있으면 공연성 인정. 반대로 직접 관련자(같은 팀)만 있고 전달 차단된 단톡이면 공연성 부정 다툼 가능.',
      },
      {
        question: '제가 적은 동료 업무 실수가 사실인데도 명예훼손인가요?',
        answer:
          '<strong>사실이라도 정통망법 제70조 1항(사실 적시) 성립 가능합니다.</strong> 다만 형법 제310조 준용으로 진실성 + 공익성이 인정되면 위법성 조각. 단순 비난이 아니라 업무 개선·재발 방지 목적이었음을 입증하는 것이 핵심.',
      },
      {
        question: '단톡 캡처를 삭제하고 부인하면 안 되나요?',
        answer:
          '<strong>증거인멸은 가중 사유가 될 수 있어 권장하지 않습니다.</strong> 또한 본인 단톡을 지워도 다른 멤버 단톡엔 남아 있어 효과가 없음. 원본 보존 + 맥락 자료로 비방 목적 부정·공익성 항변이 다툼 실익이 큽니다.',
      },
      {
        question: '합의금은 보통 얼마 정도 보고되나요?',
        answer:
          '<strong>사례에 따라 다르지만 100~500만원 수준이 자주 보입니다.</strong> 단톡 인원·전파 정도·피해자 사회적 평가 훼손 정도에 따라 차이. 합의서 작성 시 처벌불원의사 + 향후 동일 발언 금지 조항을 함께 정리.',
      },
      {
        question: '회사에서 동시에 징계 절차도 시작했는데 어떻게 대응하나요?',
        answer:
          '<strong>형사 사건과 회사 징계는 별도 트랙입니다.</strong> 형사 불기소·무혐의가 징계에 직접 영향은 제한적. 회사 인사위원회엔 비방 목적 없음·업무 개선 의도였음을 별도로 소명. 노동위 부당해고 구제신청 트랙도 함께 검토.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 가해자 방어 절차', href: '/guide/defamation/defamation-accused-defense-procedure' },
      { label: '정통망법 70조 비방 목적', href: '/guide/defamation/defamation-icnnsa-purpose-defense' },
      { label: '명예훼손 합의금 산정', href: '/guide/defamation/defamation-settlement-amount-guide' },
      { label: '모욕죄와 명예훼손 차이', href: '/guide/defamation/defamation-insult-difference' },
      { label: '반의사불벌 처벌불원 제출', href: '/guide/defamation/defamation-no-punishment-request' },
    ],
  },

  // ─── 2. defamation / youtube-comment-truth-defense ───
  {
    domain: 'defamation',
    slug: 'defamation-youtube-comment-truth-defense',
    keyword: '유튜브 댓글 사실 폭로 명예훼손',
    questionKeyword: '유튜브 댓글로 상대방의 사실관계를 폭로했는데 사실적시 명예훼손으로 고소됐어요. 형법 제310조 위법성 조각으로 다툴 수 있나요?',
    ctaKeyword: '유튜브 사실 폭로 방어 점검',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '유튜브 댓글 사실 폭로 명예훼손 4단계 방어 | 로앤가이드',
      description:
        '유튜브 댓글로 사실관계를 폭로해 사실적시 명예훼손 고소를 받았다면 형법 제310조 위법성 조각 항변 4단계를 지금 확인하세요.',
    },
    intro:
      '<p>"채널 운영자의 과거 사기 전과·환불 거부 사실을 유튜브 댓글로 적었어요. 사실 그대로인데도 사실적시 명예훼손(형법 제307조 1항)으로 고소됐다는 연락을 받았습니다." 사실을 적었다는 이유로 처벌받을 수 있다는 사실에 당황하기 쉬운데, 혐의를 받고 있다면 <strong>형법 제310조 위법성 조각(진실성 + 공익성)</strong> 항변이 핵심 방어선이에요. 형법 제307조 1항은 2년 이하·500만원 이하, 정통망법 제70조 1항은 3년 이하·3천만원 이하라 적용 법조에 따라 형량 차이가 큽니다. 4단계 방어 트랙을 정리해두면 도움이 됩니다.</p>',
    sections: [
      {
        title: '사실적시 명예훼손과 위법성 조각의 4가지 핵심',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지가 사실적시 명예훼손 방어의 골격입니다.</strong></p>\n<ul>\n<li><strong>형법 제307조 1항</strong> — 공연히 사실을 적시하여 명예훼손. 2년 이하 징역·500만원 이하 벌금. 사실이라도 처벌 대상.</li>\n<li><strong>정통망법 제70조 1항</strong> — 비방 목적 + 정보통신망(유튜브 댓글 포함) + 사실 적시. 3년 이하·3천만원 이하. 형법 307조보다 무거움.</li>\n<li><strong>형법 제310조 — 위법성 조각</strong> — 적시 사실이 진실이고 오로지 공공의 이익에 관한 때 처벌하지 않음. 형법 307조에 한정 적용(정통망법 70조 1항도 판례상 준용).</li>\n<li><strong>"오로지 공공의 이익" 판단 기준</strong> — 동기·목적·표현 방식·피해자 지위·사실의 공공성 종합 판단. 개인적 원한·금전 다툼이 주된 동기면 인정 어려움.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사실적시 명예훼손 방어는 "사실은 맞지만 공익 목적이었다"는 점을 입증하는 영역이라, 댓글 작성 동기·소비자 보호 의도·공익 관련성을 시간순 정리해두면 도움이 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 4단계 방어 절차',
        content:
          '<p><strong style="color:#1e3a5f">경찰 조사 출석부터 1심 변론까지 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 + 동기 정리 (고소장 수령 1주 내)</strong> — 댓글 캡처(자기 댓글·전후 맥락), 채널 운영자의 사실관계 입증 자료(환불 거부 메시지·전과 보도·소비자 후기), 작성 동기 메모(소비자 경고 목적).</li>\n<li><strong>2단계 — 경찰 조사 출석 + 진술 전략</strong> — "사실대로 적었다 + 공익 목적이었다 + 사적 이익·원한 없었다" 3축 진술. 변호사 동석 권장. 형법 제310조 항변 명시.</li>\n<li><strong>3단계 — 검찰 송치 후 합의·처벌불원 검토 (사건 시작 1~3개월)</strong> — 정통망법 70조는 반의사불벌. 형법 307조도 반의사불벌(제312조 2항). 합의 + 처벌불원의사 제출 시 공소기각·불기소 가능.</li>\n<li><strong>4단계 — 1심 변론 — 형법 310조 항변 (기소 시 6~12개월)</strong> — 진실성 입증 자료 + 공익성 입증 자료(소비자 다수 피해·사실관계 공공성)를 변론서에 정리. 무죄 주장이 인정되면 처벌 회피.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">사실적시인지 허위인지·공익성 인정 폭·합의 시점이 사안마다 달라요. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">경찰·검찰 조사와 1심 변론에 아래 자료를 미리 정리해두면 항변이 빨라집니다.</strong></p>\n<ul>\n<li><strong>본인 댓글 캡처(URL·일시 포함)</strong> — 화면 캡처 + URL + 작성 일시. 댓글 삭제 전 보존 필수.</li>\n<li><strong>적시 사실의 진실성 입증 자료</strong> — 사기 전과 보도·환불 거부 메신저 캡처·소비자 다수 피해 자료. 형법 310조 1요건.</li>\n<li><strong>공익성 입증 자료</strong> — 다른 소비자 후기·동일 피해 사례·소비자보호원 분쟁 접수. 단순 사적 원한이 아니었음 입증.</li>\n<li><strong>고소장·통지서 사본</strong> — 적용 법조(형법 307조 vs 정통망법 70조)에 따라 방어 전략 차이.</li>\n<li><strong>본인 입출금 내역(금전 다툼 입증용)</strong> — 채널과 금전 거래·환불 요청 내역. 사적 이익 부정 자료.</li>\n<li><strong>합의서 양식</strong> — 처벌불원의사 제출용. 변호사·법률구조공단 132 자문 후 작성.</li>\n<li><strong>본인 신분증·인감증명서</strong> — 조사 출석·합의서 작성용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 댓글을 삭제하고 "그런 댓글 안 썼다"고 부인. 유튜브·구글이 로그를 보존하고 있어 발각 시 가중 사유. 원본 보존 + 형법 310조 항변이 다툼 실익 큽니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 사실적시 명예훼손 방어 단계에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"사실이니까 처벌 안 된다" 오해</strong> — 사실이라도 형법 307조·정통망법 70조 1항으로 처벌 가능. 형법 310조 위법성 조각 입증이 별도 필요.</li>\n<li><strong>공익성 입증 부족</strong> — "내가 피해봐서 적었다"만 강조하면 사적 동기로 평가. 다른 소비자 보호·재발 방지 같은 공공성 자료가 핵심.</li>\n<li><strong>허위사실 적시(307조 2항·70조 2항) 적용 위험</strong> — 적시 사실에 일부 과장·추정이 섞이면 허위사실로 격상. 1항 5배 형량(7년·5천만원). 단정형 표현 자제 + 사실 한정 표현.</li>\n<li><strong>합의 시점 놓침</strong> — 정통망법 70조·형법 307조 모두 반의사불벌. 1심 변론종결 전까지가 마지노선. 항소심 합의해도 공소기각 못 받음(양형 참작).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / KISA 인터넷침해사고 118 / 방송통신심의위원회 권익보호국(불법정보 심의) / 경찰청 사이버범죄 신고시스템 ECRM.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실적시 정통망법 명예훼손과 비방 목적 판단',
        summary:
          '대법원 2022도699(대법원, 2024.01.04 선고) 사건에서 법원은 정보통신망법 제70조 1항 위반죄(사실 적시 명예훼손)의 비방할 목적은 적시한 사실이 공공의 이익에 관한 것인지 여부 등을 종합 판단하여야 한다고 판시했습니다. 사실적시 댓글이라도 공공의 이익을 위한 것이면 비방할 목적이 부정될 수 있다는 의미라, 혐의를 받고 있다면 작성 동기 + 다른 소비자 피해 자료 + 공익성을 함께 정리해두면 도움이 됩니다.',
        takeaway: '사실적시 명예훼손 방어는 "사실은 맞지만 공익 목적이었다"는 점이 핵심이라, 댓글 작성 동기 + 다른 피해자 자료 + 공공성 입증 자료를 시간순 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '사실인데도 처벌받는 게 말이 되나요?',
        answer:
          '<strong>형법 307조 1항·정통망법 70조 1항은 사실 적시도 처벌 대상입니다.</strong> 다만 형법 310조에 따라 진실 + 공익이면 위법성 조각. "사실이니 무조건 무죄" 오해 말고 공익성 입증 자료를 별도 준비.',
      },
      {
        question: '댓글을 지금이라도 지우는 게 좋나요?',
        answer:
          '<strong>본인 댓글 보존이 우선입니다.</strong> 댓글 삭제는 증거인멸 위험 + 본인 항변 자료(맥락·동기)까지 사라짐. 캡처 + 화면녹화 후 보존. 합의 시 삭제는 합의 조건으로 활용.',
      },
      {
        question: '소비자 경고 목적이라고 주장하면 인정되나요?',
        answer:
          '<strong>사례에 따라 다릅니다.</strong> 다른 피해자 후기·소비자보호원 분쟁·동일 피해 다수 자료가 있으면 공익성 인정 폭 큼. 본인만의 원한·환불 다툼이 주된 동기면 어려움.',
      },
      {
        question: '합의는 얼마 정도가 보고되나요?',
        answer:
          '<strong>사례에 따라 다르지만 100~700만원 수준이 자주 보입니다.</strong> 채널 영향력·댓글 노출 횟수·피해자 평판 훼손 정도에 따라 차이. 합의서에 댓글 삭제 + 향후 동일 댓글 금지 조항 함께 정리.',
      },
      {
        question: '정통망법 70조 2항(허위사실)으로 변경 기소될 위험이 있나요?',
        answer:
          '<strong>적시 사실에 과장·추정이 섞이면 위험합니다.</strong> 1항(사실)은 3년 이하, 2항(허위)은 7년 이하로 형량 차이 큼. 변론 시 사실 한정 + 추정 부분 명시 + 진실성 입증이 핵심.',
      },
    ],
    cta: { text: '삭제·합의·방어 포인트, AI로 먼저 점검하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '사실적시 명예훼손 위법성 조각', href: '/guide/defamation/defamation-truth-public-interest-defense' },
      { label: '정통망법 70조 비방 목적', href: '/guide/defamation/defamation-icnnsa-purpose-defense' },
      { label: '댓글 삭제·임시조치 절차', href: '/guide/defamation/defamation-comment-takedown-procedure' },
      { label: '명예훼손 합의금 산정', href: '/guide/defamation/defamation-settlement-amount-guide' },
      { label: '반의사불벌 처벌불원 제출', href: '/guide/defamation/defamation-no-punishment-request' },
    ],
  },

  // ─── 3. defamation / tutor-parent-groupchat-insult-victim ───
  {
    domain: 'defamation',
    slug: 'defamation-tutor-parent-groupchat-insult-victim',
    keyword: '학원 강사 단톡 험담 모욕',
    questionKeyword: '자녀가 다니는 학원 강사가 학부모 단톡방에 저를 험담한 캡처를 봤어요. 모욕·명예훼손 고소가 가능한가요?',
    ctaKeyword: '학원 강사 험담 고소 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '학원 강사 단톡 험담 모욕죄 4단계 대응 | 로앤가이드',
      description:
        '학원·과외 강사가 학부모 단톡방·SNS에 본인을 험담한 사실을 캡처했다면 모욕·명예훼손 고소 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"자녀가 다니는 학원 강사가 다른 학부모와의 단톡방에 \'그 학생 엄마는 진짜 진상이다\', \'전화 받기 싫다\' 같은 글을 올린 캡처를 우연히 보게 됐어요. 강사 신분으로 학부모를 험담한 게 너무 모욕적인데 어떻게 해야 할지 막막합니다." 학원 강사·과외교사·교사의 단톡방·SNS 험담은 모욕(형법 제311조)·명예훼손(형법 제307조 / 정통망법 제70조)이 함께 쟁점이 될 수 있어요. 모욕은 1년 이하·200만원 이하 친고죄, 정통망법 70조는 반의사불벌. 4단계 대응 트랙을 정리해두면 도움이 됩니다.</p>',
    sections: [
      {
        title: '모욕·명예훼손이 함께 쟁점이 되는 4가지 포인트',
        content:
          '<p><strong style="color:#1e3a5f">학원 강사 험담 사안에선 아래 4가지를 동시에 검토합니다.</strong></p>\n<ul>\n<li><strong>모욕(형법 제311조)</strong> — 공연히 사람을 모욕한 자. 1년 이하 징역·200만원 이하 벌금. 친고죄(피해자 고소 필요). 단순 욕설·평가형 표현은 모욕 영역.</li>\n<li><strong>사실적시 명예훼손(형법 제307조 1항)</strong> — 공연히 사실 적시. 2년 이하·500만원 이하. 반의사불벌.</li>\n<li><strong>정통망법 제70조 명예훼손</strong> — 정보통신망(단톡 포함) + 비방 목적 + 사실/허위 적시. 사실 3년 이하, 허위 7년 이하.</li>\n<li><strong>친고죄 시한</strong> — 모욕은 친고죄라 범인을 안 날부터 6개월 내 고소장 제출 필수. 명예훼손은 반의사불벌이라 시한 다름.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 험담 발언이 모욕인지 명예훼손인지에 따라 시한·합의 구조가 다르므로, 캡처 + 발언 분석을 빠르게 정리해두면 도움이 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 4단계 대응 절차',
        content:
          '<p><strong style="color:#1e3a5f">캡처 확보부터 형사 고소·민사 손배까지 아래 순서로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 캡처 + 원본 확보 (인지 직후 1주 내)</strong> — 단톡 화면 캡처(발언자·일시·앞뒤 맥락 포함), 캡처 보유자에게 원본 메신저 협조 요청, 학원 운영자에게 사실관계 통지(자체 시정 요구).</li>\n<li><strong>2단계 — 형사 고소장 작성 (1~2주 내)</strong> — 모욕(형법 311조 — 6개월 내 친고) + 명예훼손(307조 / 정통망법 70조) 동시 기재. 경찰서 사이버수사대 또는 ECRM 온라인 접수.</li>\n<li><strong>3단계 — 경찰·검찰 조사 + 합의 협상 (1~4개월)</strong> — 강사 측 합의 제안 가능. 합의금 + 사과문 + 학원 운영자 제재 + 향후 동일 행위 금지 조항 검토. 처벌불원의사 신중 결정.</li>\n<li><strong>4단계 — 민사 손해배상 청구 (별도 트랙, 시효 3년)</strong> — 정신적 손해배상(위자료) 청구. 사례에 따라 다르지만 100~500만원 수준이 자주 보임. 학원에 대한 사용자책임(민법 756조)도 검토 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">발언이 모욕인지 명예훼손인지·시한·합의 구조가 사안마다 달라요. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">고소장·민사 소장 작성에 아래 자료를 미리 정리해두면 절차가 빨라집니다.</strong></p>\n<ul>\n<li><strong>단톡 캡처(발언자·일시·앞뒤 맥락 포함)</strong> — 험담 글 + 단톡 인원수 + 본인 특정 가능성. 공연성·특정성 입증.</li>\n<li><strong>원본 메신저 보유자 진술서</strong> — "이 캡처는 진본이다·내가 직접 봤다" 진술. 위·변조 방지 입증.</li>\n<li><strong>본인 자녀의 학원 등록증·수강료 영수증</strong> — 강사·본인 관계 입증.</li>\n<li><strong>강사 인적사항 — 이름·소속 학원·연락처</strong> — 고소장 피고소인 특정. 학원 홈페이지·등원증.</li>\n<li><strong>본인 진단서·심리상담 기록(가능한 경우)</strong> — 정신적 피해 입증. 민사 위자료 산정 자료.</li>\n<li><strong>학원 운영자 연락처</strong> — 사용자책임 청구 + 자체 시정 요구.</li>\n<li><strong>본인 신분증·인감증명서</strong> — 고소장·소장 인감날인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 캡처를 보낸 다른 학부모와의 관계가 어색해질까봐 캡처 출처를 흐리는 것. 출처가 명확해야 진본 입증이 쉬워 협조 요청 + 진술서 작성을 부탁하는 것이 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 학원 강사 험담 대응 단계에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>모욕 친고 6개월 시한 도과</strong> — 모욕은 친고죄. 험담 캡처를 본 날(범인을 안 날)부터 6개월 내 고소 필수. 늦어지면 모욕 트랙 닫힘.</li>\n<li><strong>특정성 입증 부족</strong> — 험담에 본인 실명·특정 정보(자녀 이름·반)가 없으면 특정성 다툼. 단톡 멤버가 본인을 알아볼 수 있는 맥락 자료가 필요.</li>\n<li><strong>학원 자체 처분과 형사 분리</strong> — 학원이 강사를 해고해도 형사 사건은 별도. 동시에 진행 가능.</li>\n<li><strong>합의 결정 시점</strong> — 합의금 + 사과문 + 향후 동일 행위 금지가 함께 들어가야 실질적 보상. 단순 합의금만 받고 처벌불원하면 재발 우려.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / KISA 인터넷침해사고 118 / 방송통신심의위원회 권익보호국 / 경찰청 사이버범죄 신고시스템 ECRM(ecrm.police.go.kr) / 한국가정법률상담소 1644-7077.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 인터넷 댓글 평가형 표현의 모욕죄 성립',
        summary:
          '대법원 2017도19229(대법원, 2022.12.15 선고) 사건에서 법원은 인터넷 포털사이트 뉴스 댓글 란에 피해자에 대하여 "국민호텔녀", "퇴물" 등의 표현을 사용하여 모욕한 사안에서 모욕죄 성립을 인정한 원심 판단을 다루며, 사회 통념상 사람의 사회적 평가를 저하시킬 수 있는 추상적 판단·경멸적 감정 표현은 모욕에 해당한다고 판시했습니다. 학원 강사가 학부모를 "진상"·"답답하다" 같은 평가형 표현으로 단톡에 적시한 경우에도 사회적 평가 저하 여부를 종합 판단하는 영역이라, 험담 표현의 강도·반복성·맥락을 캡처와 함께 정리해두면 도움이 됩니다.',
        takeaway: '인터넷·단톡 험담의 모욕 성립은 표현의 강도·반복성·사회적 평가 저하 여부를 종합 판단하는 영역이라, 캡처 + 표현 분석 + 단톡 인원·맥락을 시간순 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '학부모 단톡 인원이 6명인데 공연성이 인정되나요?',
        answer:
          '<strong>인원수가 적어도 전파 가능성이 있으면 공연성 인정될 수 있습니다.</strong> 6명이라도 다른 학부모·학원 외부로 전달될 가능성이 있으면 공연성 인정 사례 보고. 본인이 외부로 알게 된 경위 자체가 전파 가능성 입증.',
      },
      {
        question: '강사가 본인 실명을 적지 않고 "그 학생 엄마"라고만 적었는데 특정성이 인정되나요?',
        answer:
          '<strong>단톡 멤버가 누구인지 알아볼 수 있으면 특정성 인정됩니다.</strong> 자녀 이름·반·수업 시간 같은 맥락 정보가 있으면 본인 특정 가능. 캡처 + 단톡 멤버 진술로 입증.',
      },
      {
        question: '캡처를 보낸 다른 학부모가 강사에게 알리는 게 부담스러운가 봐요. 협조 안 해주면 어떻게 하나요?',
        answer:
          '<strong>본인이 캡처를 직접 확보했다고 진술해도 됩니다.</strong> 진본 입증 부담은 본인이 부담. 다만 협조해주는 학부모 진술이 있으면 입증이 훨씬 쉬워 가능한 한 부탁하는 것이 도움이 됩니다.',
      },
      {
        question: '모욕 합의금은 보통 얼마 정도인가요?',
        answer:
          '<strong>사례에 따라 다르지만 100~300만원 수준이 자주 보입니다.</strong> 표현의 강도·반복성·전파 정도·강사의 사회적 지위에 따라 차이. 합의 시 사과문 + 향후 동일 행위 금지 + 학원 자체 제재 함께 요구 권장.',
      },
      {
        question: '학원에도 책임을 물을 수 있나요?',
        answer:
          '<strong>민법 제756조 사용자책임으로 검토 가능합니다.</strong> 강사가 학원 업무 수행 중(학부모 응대 관련) 발생한 행위면 사용자책임 인정 폭 있음. 학원 운영자에게 별도 내용증명 + 민사 손배 청구 검토.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '모욕죄 친고 6개월 시한', href: '/guide/defamation/defamation-insult-6month-statute' },
      { label: '단톡방 명예훼손 공연성', href: '/guide/defamation/defamation-groupchat-publicity' },
      { label: '명예훼손 민사 손해배상', href: '/guide/defamation/defamation-civil-damages-claim' },
      { label: '사용자책임 학원·회사 책임', href: '/guide/defamation/defamation-employer-liability' },
      { label: '명예훼손 고소장 작성법', href: '/guide/defamation/defamation-complaint-drafting' },
    ],
  },
];
