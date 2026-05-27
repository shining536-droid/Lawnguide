import { SpokePage } from '../spoke-pages';

// batch80 sex-crime — 4개 (2026-05-28)
//
// 고유 존재 이유:
// 1. 노래방·룸 합석 손님 강제추행 피해 — '술자리 합석 상황에서 모르는 손님의 신체 접촉 강제추행 + 형법 제298조·성폭력처벌법 + 현장 증거·신고' 트랙 (절차형, victim)
// 2. 길에서 모르는 취객이 갑자기 끌어안은 노상 기습추행 피해 — '노상에서 일면식 없는 사람의 기습추행 + 기습추행 법리(유형력 대소강약 불문) + 가해자 특정' 트랙 (판단형, victim)
// 3. 모르는 번호 전화로 음란한 말을 들은 통신매체이용음란 피해 — '음성통화로 성적 수치심 일으키는 말 전달 + 성폭력처벌법 제13조 통신매체이용음란 + 발신번호·녹취 보존' 트랙 (절차형, victim)
// 4. 모임 신체접촉이 강제추행으로 사실과 다르게 신고된 경우 방어 — '추행 범의 증명 부족 시 유죄 불가 법리 + 경위·관계 정황 소명' 트랙 (판단형, accused/무고)

export const spokesBatch80SexCrime: SpokePage[] = [
  // ─── 1. sex-crime-noraebang-room-stranger-forced-molestation-track ───
  // 이 페이지는 노래방·룸 술자리에서 합석한 모르는 손님에게 강제추행 피해를 입은 사람이 현장 증거 보존과 신고 순서를 정리하도록 돕는 페이지다.
  {
    domain: 'sex-crime',
    slug: 'sex-crime-noraebang-room-stranger-forced-molestation-track',
    keyword: '노래방 합석 손님 강제추행 피해',
    questionKeyword: '노래방에서 합석하게 된 모르는 손님이 갑자기 신체를 만지고 끌어안았어요. 술자리라 분위기상 항의도 못 했는데 신고할 수 있나요?',
    ctaKeyword: '노래방 합석 손님 강제추행 피해 대응 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '노래방 합석 손님 강제추행 — 5단계 신고 대응 | 로앤가이드',
      description:
        '노래방·룸 술자리에서 합석한 손님에게 강제추행 피해를 입어 항의도 못 했다면 현장 증거·신고 5단계 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>노래방이나 룸에서 일행이 부른 합석 손님, 또는 옆방에서 넘어온 모르는 사람이 술기운에 어깨를 감싸거나 허벅지·엉덩이를 만지고 갑자기 끌어안았다면 "분위기상 그 자리에서 강하게 항의도 못 했는데 이제 와서 신고가 되는지", "술자리에서 흔히 있는 일로 넘겨버리는 건 아닌지" 혼란스럽고 불쾌함이 가시지 않으실 것입니다. 모르는 사람이라 누구인지 특정할 수 있을지도 막막하실 텐데요. 형법 제298조 강제추행죄와 성폭력범죄의 처벌 등에 관한 특례법은 \'폭행 또는 협박으로 사람에 대하여 추행\'한 행위를 규율하는 영역으로, 폭행행위 자체가 곧바로 추행이 되는 이른바 기습추행도 포함하는 것으로 해석되어 왔습니다. 대법원은 강제추행죄의 \'폭행 또는 협박\'의 의미와 기준을 명확히 하며 폭행행위 자체가 추행에 해당하는 경우의 법리를 정리(2018도13877)한 바 있습니다. 노래방 합석 손님 강제추행 피해라면 ① 현장 증거 확보 ② 즉시 신고 ③ 가해자 특정 ④ 진술 정리 ⑤ 절차 진행 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 노래방 합석 손님 강제추행 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장증거·신고·특정·진술·절차 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 현장 증거 확보</strong> — 접촉 부위·시간·자리 배치를 즉시 메모, 업소 CCTV·결제 기록 확인.</li>\n<li><strong>② 즉시 신고</strong> — 형법 제298조 강제추행 가능성, 현장 112 신고로 가해자 확보.</li>\n<li><strong>③ 가해자 특정</strong> — 업주·종업원 진술, 합석 경위·연락처, CCTV로 인적사항 추적.</li>\n<li><strong>④ 진술 정리</strong> — 항의를 못 한 경위(술자리 분위기·당황)도 솔직히 기록.</li>\n<li><strong>⑤ 절차 진행</strong> — 여성청소년수사대 접수, 일행·목격자 진술 보강.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 그 자리에서 강하게 항의하지 못했더라도, 의사에 반하는 신체 접촉 자체가 별도로 검토 대상이 될 수 있는 영역입니다. 자리를 뜨기 전에 접촉 부위·시간·자리 배치를 메모하고 업소에 CCTV 보존을 요청해두면 피해 경위 입증에 도움이 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장증거·신고·특정·절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 증거 확보 (즉시)</strong> — 접촉 부위·시간·자리 배치·인상착의 메모, 일행 목격 확인.</li>\n<li><strong>2단계 — 현장 신고 (즉시)</strong> — 112 신고, 업주·종업원에게 CCTV 보존 요청.</li>\n<li><strong>3단계 — 가해자 특정 (1~4주)</strong> — 합석 경위·결제 기록·CCTV로 인적사항 추적.</li>\n<li><strong>4단계 — 진술 정리·접수 (가능한 빨리)</strong> — 여성청소년수사대, 접촉 경위·항의 못 한 정황 구체화.</li>\n<li><strong>5단계 — 수사·재판 절차 (수개월)</strong> — 목격자 진술 보강, 신뢰관계인 동석 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">노래방 합석 손님 강제추행 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·신고·특정 갈래 서류입니다.</strong></p>\n<ul>\n<li><strong>접촉 부위·시간·자리 배치 메모(즉시 기록)</strong></li>\n<li><strong>가해자 인상착의·복장·합석 경위 기록</strong></li>\n<li><strong>업소 CCTV 보존 요청 접수 자료</strong></li>\n<li><strong>일행·종업원 등 목격자 연락처·진술</strong></li>\n<li><strong>업소 결제·예약 내역(시간대 확인)</strong></li>\n<li><strong>경찰 신고 접수증·사건번호</strong></li>\n<li><strong>피해 경위 시간순 정리표(항의 못 한 정황 포함)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 노래방·룸 업소 CCTV는 보존 기간이 짧은 경우가 많으니 자리를 뜨기 전 업주·종업원에게 보존을 요청하는 것이 도움이 됩니다. 술자리 분위기상 항의를 못 했던 사정도 진술에 솔직히 담아두는 것이 경위 정리에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 해당 여부</strong> — 접촉 부위·태양이 성적 침해에 이르렀는지.</li>\n<li><strong>유형력 행사 여부</strong> — 의사에 반하는 신체 접촉이 있었는지.</li>\n<li><strong>가해자 특정</strong> — 합석 경위·CCTV·결제 기록 확보 여부.</li>\n<li><strong>현장 증거 보존</strong> — 업소 CCTV 보존 기간 경과 전 요청 여부.</li>\n<li><strong>항의 못 한 경위</strong> — 술자리 분위기·당황 정황의 설명.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> (무료 법률 상담)</li>\n<li><strong>여성긴급전화 1366</strong> (24시간 상담)</li>\n<li><strong>해바라기센터 1899-3075</strong> (의료·심리·법률 통합)</li>\n<li><strong>경찰청 112 / 182</strong> (신고·상담)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강제추행죄 폭행·협박 및 기습추행 법리',
        summary:
          '대법원 2018도13877(대법원, 2023.09.21 선고) 영역에서 법원은 강제추행죄의 \'폭행 또는 협박\'에 관하여, 폭행행위 자체가 곧바로 추행에 해당하는 이른바 기습추행의 경우 상대방의 의사를 억압할 정도의 것임을 요하지 않고 상대방의 의사에 반하는 유형력의 행사가 있는 이상 그 힘의 대소강약을 불문한다는 법리 등을 정리하며 해석 기준을 명확히 했습니다. 노래방 합석 손님 강제추행 피해에서는 접촉 부위·경위·자리 배치 등 정황과 현장 CCTV가 핵심 자료가 될 수 있으므로 자리를 뜨기 전 메모·보존 요청을 해두는 것이 도움이 됩니다.',
        takeaway: '항거를 억압할 정도가 아니어도 의사에 반하는 접촉은 평가될 수 있음 — 접촉 부위·시간·자리 배치를 메모하고 업소 CCTV 보존을 요청한 뒤 신고를 검토 권장.',
      },
    ],
    faq: [
      {
        question: '술자리라 그 자리에서 강하게 항의를 못 했는데도 신고가 되나요?',
        answer:
          '<strong>그 자리에서 항의를 못 했더라도 의사에 반하는 접촉 여부가 평가되는 영역입니다.</strong> 당황해 항의하지 못한 경위를 솔직히 기록해 신고를 검토해볼 수 있습니다.',
      },
      {
        question: '합석한 모르는 사람이라 누구인지 모르는데 특정이 되나요?',
        answer:
          '<strong>업주·종업원 진술과 합석 경위·결제 기록·CCTV로 추적을 시도하는 영역입니다.</strong> 인상착의와 시간대를 정확히 기록해두면 도움이 됩니다.',
      },
      {
        question: '술에 취해 일부 기억이 흐릿한데 진술이 부족하지 않을까요?',
        answer:
          '<strong>떠오르는 정황과 일행 목격·CCTV가 함께 평가되는 영역입니다.</strong> 기억나는 접촉 부위·순간을 솔직히 메모해두는 것이 진술 정리에 도움이 됩니다.',
      },
      {
        question: '업소 CCTV는 어떻게 확보하나요?',
        answer:
          '<strong>보존 기간이 짧을 수 있어 자리를 뜨기 전 업주·종업원에게 보존을 요청하는 것이 중요한 영역입니다.</strong> 경찰 신고 시 압수·제출도 검토됩니다.',
      },
      {
        question: '혼자 신고하기 부담스러운데 도움받을 곳이 있나요?',
        answer:
          '<strong>여성긴급전화(1366)나 해바라기센터(1899-3075)에서 동반 신고·심리 지원을 받아볼 수 있는 영역입니다.</strong> 24시간 상담이 가능합니다.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '강제추행 인정 기준', href: '/guide/sex-crime/forced-molestation-standard' },
      { label: '성범죄 신고부터 재판까지', href: '/guide/sex-crime/sexual-assault-report-to-trial' },
      { label: '성폭력 피해 고소 서류', href: '/guide/sex-crime/victim-complaint-required-docs' },
      { label: '디지털 증거 타임라인', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '성폭력 고소 절차', href: '/guide/sex-crime/sexual-violence-complaint-process' },
    ],
  },

  // ─── 2. sex-crime-street-stranger-sudden-embrace-grope-track ───
  // 이 페이지는 길에서 일면식 없는 사람에게 갑자기 끌어안기거나 신체를 만지는 노상 기습추행 피해를 입은 사람이 가해자 특정과 신고 가능성을 판단하도록 돕는 페이지다.
  {
    domain: 'sex-crime',
    slug: 'sex-crime-street-stranger-sudden-embrace-grope-track',
    keyword: '노상 모르는 사람 기습추행 피해',
    questionKeyword: '길에서 모르는 사람이 갑자기 다가와 끌어안거나 신체를 만지고 지나갔어요. 순식간이라 얼굴도 제대로 못 봤는데 신고할 수 있나요?',
    ctaKeyword: '노상 모르는 사람 기습추행 피해 대응 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '길에서 모르는 사람 기습추행 — 5단계 대응 점검 | 로앤가이드',
      description:
        '길에서 모르는 사람이 갑자기 끌어안거나 신체를 만지고 지나간 기습추행 피해라면 가해자 특정·신고 5단계 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>밤길이나 인적 드문 골목, 또는 사람 많은 거리에서 일면식도 없는 사람이 갑자기 다가와 끌어안거나 가슴·엉덩이를 만지고 도망치듯 지나갔다면 "순식간이라 얼굴도 제대로 못 봤는데 신고가 되는지", "잡지 못했으니 그냥 넘겨야 하는지" 황당하고 두려움이 한참 가시지 않으실 것입니다. 어디서부터 손을 써야 할지 막막하실 텐데요. 형법 제298조 강제추행죄는 폭행행위 자체가 곧바로 추행에 해당하는 이른바 기습추행도 규율하는 영역으로 해석되어 왔습니다. 대법원은 기습추행의 경우 추행행위와 동시에 저질러지는 폭행행위는 상대방의 의사를 억압할 정도일 것을 요하지 않고 의사에 반하는 유형력의 행사가 있으면 그 힘의 대소강약을 불문한다고 판시(2019도15994)한 바 있습니다. 노상 기습추행 피해라면 ① 현장 증거 확보 ② 즉시 신고 ③ 가해자 특정 ④ 진술 정리 ⑤ 절차 진행 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 노상 기습추행 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장증거·신고·특정·진술·절차 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 현장 증거 확보</strong> — 발생 위치·시간·이동 방향, 가해자 인상착의를 즉시 메모.</li>\n<li><strong>② 즉시 신고</strong> — 형법 제298조 기습추행 가능성, 현장 112 신고로 인근 순찰·추적 요청.</li>\n<li><strong>③ 가해자 특정</strong> — 주변 상점·가로·버스 CCTV, 목격자, 도주 동선 추적.</li>\n<li><strong>④ 진술 정리</strong> — 접촉 부위·순간·도주 방향을 구체적으로 기록.</li>\n<li><strong>⑤ 절차 진행</strong> — 여성청소년수사대 접수, CCTV 열람·보강.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가해자를 그 자리에서 붙잡지 못했더라도, 의사에 반하는 갑작스러운 신체 접촉 자체가 별도로 검토 대상이 될 수 있는 영역입니다. 발생 직후 위치·시간·이동 방향을 메모하고 주변 CCTV 위치를 기억해두면 가해자 특정에 도움이 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장증거·신고·특정·절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 증거 확보 (즉시)</strong> — 발생 위치·시간·도주 방향·인상착의 메모, 주변 CCTV 위치 기억.</li>\n<li><strong>2단계 — 즉시 신고 (즉시)</strong> — 112 신고, 인근 순찰·추적 요청과 CCTV 보존 요청.</li>\n<li><strong>3단계 — 가해자 특정 (1~4주)</strong> — 상점·가로·교통 CCTV, 목격자, 동선으로 추적.</li>\n<li><strong>4단계 — 진술 정리·접수 (가능한 빨리)</strong> — 여성청소년수사대, 접촉 경위·도주 정황 구체화.</li>\n<li><strong>5단계 — 수사·재판 절차 (수개월)</strong> — CCTV·목격 진술 보강, 신뢰관계인 동석 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">노상 모르는 사람 기습추행 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·신고·특정 갈래 서류입니다.</strong></p>\n<ul>\n<li><strong>발생 위치·시간·도주 방향 메모(즉시 기록)</strong></li>\n<li><strong>가해자 인상착의·복장·체격 기록</strong></li>\n<li><strong>주변 상점·가로·교통 CCTV 위치 메모</strong></li>\n<li><strong>목격자·동행자 연락처·진술</strong></li>\n<li><strong>당시 동선 확인 자료(교통·결제·통화 기록)</strong></li>\n<li><strong>경찰 신고 접수증·사건번호</strong></li>\n<li><strong>피해 경위 시간순 정리표(접촉 순간·도주 포함)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 거리·상점 CCTV는 보존 기간이 짧을 수 있으니 신고 시 발생 위치를 정확히 알려 경찰이 빠르게 확보하도록 하는 것이 도움이 됩니다. 얼굴을 못 봤더라도 체격·복장·이동 방향 같은 단서가 특정에 단서가 될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기습추행 해당 여부</strong> — 의사에 반하는 갑작스러운 접촉이었는지.</li>\n<li><strong>추행 해당 여부</strong> — 접촉 부위·태양이 성적 침해에 이르렀는지.</li>\n<li><strong>가해자 특정</strong> — CCTV·동선·목격으로 추적 가능 여부.</li>\n<li><strong>현장 증거 보존</strong> — 거리 CCTV 보존 기간 경과 전 확보 여부.</li>\n<li><strong>진술 구체성</strong> — 접촉 순간·도주 방향의 일관성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> (무료 법률 상담)</li>\n<li><strong>여성긴급전화 1366</strong> (24시간 상담)</li>\n<li><strong>해바라기센터 1899-3075</strong> (의료·심리·법률 통합)</li>\n<li><strong>경찰청 112 / 182</strong> (신고·상담)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기습추행에서의 유형력 행사 판단 기준',
        summary:
          '대법원 2019도15994(대법원, 2020.03.26 선고) 영역에서 법원은 강제추행죄에는 폭행·협박으로 항거를 곤란하게 한 뒤 추행하는 경우뿐 아니라 폭행행위 자체가 추행행위로 인정되는 이른바 기습추행도 포함되고, 기습추행의 경우 추행행위와 동시에 저질러지는 폭행행위는 상대방의 의사를 억압할 정도일 것을 요하지 않고 의사에 반하는 유형력의 행사가 있으면 그 힘의 대소강약을 불문한다고 판시했습니다. 노상 기습추행 피해에서는 접촉 순간·도주 방향·인상착의 메모와 주변 CCTV 확보가 가해자 특정과 입증에 도움이 될 수 있습니다.',
        takeaway: '갑작스러운 의사 반함 접촉은 힘의 강약을 불문하고 평가될 수 있음 — 위치·시간·도주 방향을 즉시 메모하고 주변 CCTV 보존을 요청한 뒤 신고를 검토 권장.',
      },
    ],
    faq: [
      {
        question: '순식간이라 얼굴도 제대로 못 봤는데 신고가 되나요?',
        answer:
          '<strong>얼굴을 못 봤어도 체격·복장·도주 방향과 주변 CCTV가 보강 자료가 되는 영역입니다.</strong> 떠오르는 단서를 즉시 메모해 신고를 검토해볼 수 있습니다.',
      },
      {
        question: '가해자를 못 잡았는데 특정이 가능할까요?',
        answer:
          '<strong>상점·가로·교통 CCTV와 동선·목격으로 추적을 시도하는 영역입니다.</strong> 발생 위치와 시간을 정확히 알려두면 도움이 됩니다.',
      },
      {
        question: '스치듯 만진 정도인데도 추행으로 볼 수 있나요?',
        answer:
          '<strong>접촉 부위·태양과 의사 반함 여부가 종합적으로 평가되는 영역입니다.</strong> 어떤 부위를 어떻게 접촉했는지 구체적으로 기록해두는 것이 좋습니다.',
      },
      {
        question: '거리 CCTV는 누가 확보하나요?',
        answer:
          '<strong>보존 기간이 짧을 수 있어 신고 시 발생 위치를 정확히 알려 경찰이 빠르게 확보하도록 하는 것이 중요한 영역입니다.</strong> 압수·열람 절차로 검토됩니다.',
      },
      {
        question: '너무 놀라고 무서운데 도움받을 곳이 있나요?',
        answer:
          '<strong>여성긴급전화(1366)나 해바라기센터(1899-3075)에서 심리·법률 통합 지원을 받아볼 수 있는 영역입니다.</strong> 24시간 상담이 가능합니다.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '강제추행 인정 기준', href: '/guide/sex-crime/forced-molestation-standard' },
      { label: '지하철 혼잡 추행 대응', href: '/guide/sex-crime/sex-crime-subway-crowded-molestation-track' },
      { label: '성범죄 신고부터 재판까지', href: '/guide/sex-crime/sexual-assault-report-to-trial' },
      { label: '디지털 증거 타임라인', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '성폭력 고소 절차', href: '/guide/sex-crime/sexual-violence-complaint-process' },
    ],
  },

  // ─── 3. sex-crime-unknown-number-phone-obscene-words-telecom-track ───
  // 이 페이지는 모르는 번호로 걸려온 전화에서 성적 수치심을 일으키는 음란한 말을 들은 통신매체이용음란 피해자가 발신번호·녹취 보존과 신고 순서를 정리하도록 돕는 페이지다.
  {
    domain: 'sex-crime',
    slug: 'sex-crime-unknown-number-phone-obscene-words-telecom-track',
    keyword: '모르는 번호 음란전화 통신매체이용음란 피해',
    questionKeyword: '모르는 번호로 전화가 와서 성적으로 수치심을 일으키는 말을 반복해서 들었어요. 통화라 증거가 남는지, 신고가 되는지 모르겠어요.',
    ctaKeyword: '모르는 번호 음란전화 피해 대응 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '모르는 번호 음란전화 — 5단계 신고·보존 대응 | 로앤가이드',
      description:
        '모르는 번호로 성적 수치심을 일으키는 말을 반복해 들은 음란전화 피해라면 발신번호·녹취 보존 5단계 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>모르는 번호로 전화가 걸려와 성적으로 노골적이고 수치심을 일으키는 말을 일방적으로 듣게 됐다면, 그리고 그런 전화가 한두 번이 아니라 반복된다면 "통화는 글이나 사진과 달라 증거가 남지 않는 건 아닌지", "이 정도로 신고가 되는지" 불쾌하고 불안하실 것입니다. 번호만 보고는 누구인지 알 수 없어 더 막막하실 텐데요. 성폭력범죄의 처벌 등에 관한 특례법 제13조는 \'성적 욕망을 유발하거나 만족시킬 목적으로 전화 등 통신매체를 통하여 성적 수치심이나 혐오감을 일으키는 말·음향·글 등을 상대방에게 도달하게 한\' 행위를 규율하는 통신매체이용음란 영역입니다. 대법원은 위 죄의 보호법익과 \'성적 수치심이나 혐오감을 일으키는 것\'의 의미를 풀이하며 사회 평균인의 성적 도의관념을 기준으로 판단해야 한다는 취지로 판시(2022도10688)한 바 있습니다. 모르는 번호 음란전화 피해라면 ① 발신번호·녹취 보존 ② 즉시 신고 ③ 발신자 특정 ④ 통신기록 확보 ⑤ 절차 진행 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 모르는 번호 음란전화 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·신고·특정·통신기록·절차 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 발신번호·녹취 보존</strong> — 발신번호·통화 일시·횟수 기록, 가능하면 통화 녹음·발신 화면 캡처.</li>\n<li><strong>② 즉시 신고</strong> — 성폭력처벌법 제13조 통신매체이용음란 가능성, 사이버범죄 신고시스템.</li>\n<li><strong>③ 발신자 특정</strong> — 통신사 통신자료 제공요청으로 가입자 추적.</li>\n<li><strong>④ 통신기록 확보</strong> — 통화 내역·문자 등 부수 기록 함께 보존.</li>\n<li><strong>⑤ 절차 진행</strong> — 여성청소년수사대 접수, 반복성·목적 정황 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 글·사진뿐 아니라 전화 통화로 성적 수치심을 일으키는 말을 도달하게 한 경우도 통신매체이용음란으로 검토될 수 있는 영역입니다. 통화 일시·발신번호·반복 횟수를 기록하고 가능하면 녹음을 남겨두면 도달 사실 입증에 도움이 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·신고·특정·절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 발신번호·녹취 보존 (인지 즉시)</strong> — 발신번호·통화 일시·횟수 기록, 통화 녹음·발신 화면 캡처.</li>\n<li><strong>2단계 — 경찰 신고 (즉시)</strong> — 사이버범죄 신고시스템(ECRM) 또는 여성청소년수사대 접수.</li>\n<li><strong>3단계 — 발신자 특정 (1~3개월)</strong> — 통신사 통신자료 제공요청으로 가입자 추적.</li>\n<li><strong>4단계 — 통신기록 확보 (수사 단계)</strong> — 통화 내역·발신 패턴·문자 등 부수 자료 수집.</li>\n<li><strong>5단계 — 수사·재판 절차 (수개월)</strong> — 반복성·목적 정황 보강, 추가 접촉 차단.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">모르는 번호 음란전화 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 통화·신고·특정 갈래 서류입니다.</strong></p>\n<ul>\n<li><strong>발신번호·통화 일시·횟수 기록</strong></li>\n<li><strong>통화 녹음 파일(있을 경우) 및 발신 화면 캡처</strong></li>\n<li><strong>통신사 통화 내역서(발신 패턴 확인)</strong></li>\n<li><strong>같은 번호의 문자·메신저 메시지(있을 경우)</strong></li>\n<li><strong>반복·증가 정황 시간순 정리표</strong></li>\n<li><strong>경찰 신고 접수증·사건번호</strong></li>\n<li><strong>피해로 인한 불안·진료 기록(있을 경우)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 통화는 끊으면 흔적이 남지 않는 듯해도 통신사 통화 내역과 발신번호로 도달 사실을 정리할 수 있는 영역입니다. 가능하면 통화 녹음을 남기되, 어려우면 통화 직후 들은 말의 내용·시간을 즉시 메모해두는 것이 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>수치심·혐오감 유발 여부</strong> — 사회 평균인 기준으로 성적 수치심을 일으키는 말이었는지.</li>\n<li><strong>목적 요건</strong> — 성적 욕망을 유발·만족할 목적이 있었는지.</li>\n<li><strong>도달 사실</strong> — 통화·통신매체로 상대방에게 도달했는지.</li>\n<li><strong>발신자 특정</strong> — 통신자료·가입자 정보 추적 가능성.</li>\n<li><strong>반복성</strong> — 1회인지 반복·지속적이었는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> (무료 법률 상담)</li>\n<li><strong>여성긴급전화 1366</strong> (24시간 상담)</li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>경찰청 112 / 182</strong> (신고·상담)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 통신매체이용음란죄 성립과 수치심 판단 기준',
        summary:
          '대법원 2022도10688(대법원, 2024.11.28 선고) 영역에서 법원은 성폭력처벌법 제13조 통신매체이용음란죄가 성적 자기결정권에 반하여 성적 수치심을 일으키는 글 등을 의사에 반해 접하지 않을 권리를 보장하기 위한 것이라고 보고, \'성적 수치심이나 혐오감을 일으키는 것\'은 단순한 부끄러움이나 불쾌감을 넘어 인격적 존재로서의 수치심·모욕감을 느끼게 하는 것으로서 사회 평균인의 성적 도의관념에 반하는 것을 의미한다고 판시했습니다. 모르는 번호 음란전화 피해에서는 발신번호·통화 일시·녹취와 반복 정황이 도달 사실과 목적 입증에 도움이 될 수 있습니다.',
        takeaway: '전화 통화로 도달한 음란한 말도 평가될 수 있음 — 발신번호·통화 일시·녹취와 반복 정황을 보존한 뒤 사이버범죄 신고를 검토 권장.',
      },
    ],
    faq: [
      {
        question: '글이나 사진이 아니라 전화 통화인데도 신고가 되나요?',
        answer:
          '<strong>전화 등 통신매체로 성적 수치심을 일으키는 말을 도달하게 한 경우도 검토되는 영역입니다.</strong> 통화 일시·발신번호와 들은 내용을 정리해두는 것이 좋습니다.',
      },
      {
        question: '녹음을 못 했는데 통화 내용이 증거가 될 수 있나요?',
        answer:
          '<strong>통신사 통화 내역과 발신번호·반복 정황, 직후 메모가 보강 자료가 되는 영역입니다.</strong> 다음 통화부터는 녹음·즉시 메모를 권장합니다.',
      },
      {
        question: '발신번호가 모르는 번호인데 누구인지 특정이 되나요?',
        answer:
          '<strong>통신사 통신자료 제공요청으로 가입자 추적을 시도하는 영역입니다.</strong> 경찰 수사 단계에서 검토해볼 수 있습니다.',
      },
      {
        question: '딱 한 번 온 전화인데도 신고할 수 있나요?',
        answer:
          '<strong>1회라도 목적과 수치심 유발 정황에 따라 검토될 수 있는 영역입니다.</strong> 반복되면 반복성·증가 정황도 함께 정리해두는 것이 좋습니다.',
      },
      {
        question: '계속 걸려와 불안한데 도움받을 곳이 있나요?',
        answer:
          '<strong>여성긴급전화(1366)나 사이버범죄 신고시스템(ecrm.police.go.kr)에서 상담·신고를 받아볼 수 있는 영역입니다.</strong> 24시간 상담이 가능합니다.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: 'SNS 메시지 사이버음란 대응', href: '/guide/sex-crime/sex-crime-sns-message-cyber-obscenity-track' },
      { label: '디지털 증거 타임라인', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '성범죄 신고부터 재판까지', href: '/guide/sex-crime/sexual-assault-report-to-trial' },
      { label: '성범죄 공소시효', href: '/guide/sex-crime/sex-crime-statute-of-limitations' },
      { label: '성폭력 고소 절차', href: '/guide/sex-crime/sexual-violence-complaint-process' },
    ],
  },

  // ─── 4. sex-crime-social-gathering-contact-false-report-defense ───
  // 이 페이지는 모임·회식 자리의 신체접촉이 강제추행으로 사실과 다르게 신고된 사람이 추행 범의 증명 부족 법리를 토대로 경위·관계 정황을 소명하도록 돕는 페이지다.
  {
    domain: 'sex-crime',
    slug: 'sex-crime-social-gathering-contact-false-report-defense',
    keyword: '모임 신체접촉 강제추행 무고 방어',
    questionKeyword: '모임 자리에서 우연히 닿은 신체접촉이 강제추행으로 사실과 다르게 신고됐어요. 추행할 의도가 없었다는 점을 어떻게 정리해야 하나요?',
    ctaKeyword: '모임 신체접촉 강제추행 사실과 다른 신고 대응 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '모임 신체접촉 강제추행 신고 — 5단계 방어 점검 | 로앤가이드',
      description:
        '모임 자리 신체접촉이 강제추행으로 사실과 다르게 신고됐다면 추행 범의·경위 소명 5단계 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>모임이나 회식 자리에서 좁은 자리·이동 중에 우연히 신체가 닿았을 뿐인데 강제추행으로 신고됐다는 연락을 받았다면, "추행할 의도가 전혀 없었는데 어떻게 해명해야 하는지", "당시 정황을 어떻게 입증해야 하는지" 머릿속이 하얘지실 것입니다. 사실과 다르게 신고되었다면 누구라도 억울하고 막막하실 텐데요. 형법 제298조 강제추행죄는 추행행위와 함께 그에 대한 범의(고의)가 인정되어야 성립하는 것으로 해석되는 영역입니다. 대법원은 강제추행죄가 성립하려면 문제가 되는 행위마다 폭행 또는 협박 외에 추행행위 및 그에 대한 범의가 인정되어야 하고, 추행의 범의에 대한 증명이 부족하다면 설령 유죄의 의심이 가더라도 유죄로 판단할 수 없다고 판시(2024도3061)한 바 있습니다. 모임 신체접촉이 사실과 다르게 신고되었다면 ① 사실관계 정리 ② 경위·관계 소명 ③ 객관 증거 확보 ④ 진술 일관성 ⑤ 절차 대응 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 모임 신체접촉 강제추행 신고 5단계 방어 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실관계·경위소명·객관증거·진술·절차 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실관계 정리</strong> — 접촉 시점·자리 배치·이동 동선을 시간순으로 객관적으로 정리.</li>\n<li><strong>② 경위·관계 소명</strong> — 우연한 접촉인지, 당시 자리·혼잡 정황을 구체적으로 설명.</li>\n<li><strong>③ 객관 증거 확보</strong> — CCTV·좌석 배치·동석자 진술 등 정황 자료 수집.</li>\n<li><strong>④ 진술 일관성</strong> — 추행 의도가 없었음과 경위를 일관되게 정리.</li>\n<li><strong>⑤ 절차 대응</strong> — 조사 일정 확인, 진술 전 사실관계 정리·상담 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 강제추행은 행위마다 추행행위와 그 범의가 함께 증명되어야 하는 영역이므로, 접촉 경위·자리 정황·동석자 진술 등 객관 자료를 시간순으로 정리해두는 것이 소명에 도움이 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실관계·소명·증거·절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사실관계 정리 (인지 즉시)</strong> — 접촉 시점·자리·동선을 시간순으로 정리, 추측 배제하고 사실만 기록.</li>\n<li><strong>2단계 — 객관 증거 확보 (가능한 빨리)</strong> — CCTV·좌석 배치·동석자 연락처 등 정황 자료 수집.</li>\n<li><strong>3단계 — 경위 소명 준비 (조사 전)</strong> — 우연한 접촉·혼잡 정황을 구체적으로 설명할 자료 정리.</li>\n<li><strong>4단계 — 조사 대응 (수사 단계)</strong> — 진술의 일관성 유지, 사실과 다른 부분은 차분히 정정.</li>\n<li><strong>5단계 — 절차 진행 (수개월)</strong> — 추가 정황·증거 보강, 필요 시 법률 상담 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">모임 신체접촉 강제추행 사실과 다른 신고 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실관계·소명·증거 갈래 서류입니다.</strong></p>\n<ul>\n<li><strong>접촉 시점·자리 배치·동선 시간순 정리표</strong></li>\n<li><strong>모임 장소 CCTV·좌석 배치도(확보 가능 시)</strong></li>\n<li><strong>동석자·목격자 연락처·진술</strong></li>\n<li><strong>당시 대화·메시지·단체 채팅 기록(있을 경우)</strong></li>\n<li><strong>참석·결제·이동 동선 확인 자료</strong></li>\n<li><strong>수사기관 출석요구서·사건번호</strong></li>\n<li><strong>신고인과의 관계·경위 설명 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사실과 다르게 신고되었다면 신고인을 직접 접촉해 회유·압박하는 것은 또 다른 문제가 될 수 있으니 피하고, 접촉 경위와 정황 자료를 객관적으로 정리하는 데 집중하는 것이 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 범의 여부</strong> — 추행행위에 대한 고의가 증명되는지.</li>\n<li><strong>접촉 경위</strong> — 우연·불가피한 접촉인지 의도적 행위인지.</li>\n<li><strong>객관 정황</strong> — 자리 배치·혼잡·동선 등 정황의 부합 여부.</li>\n<li><strong>진술 일관성</strong> — 양측 진술 중 어느 쪽이 객관 정황과 부합하는지.</li>\n<li><strong>증명 정도</strong> — 합리적 의심을 배제할 정도로 증명됐는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> (무료 법률 상담)</li>\n<li><strong>국선변호인 제도</strong> (요건 충족 시 법원 선정)</li>\n<li><strong>경찰청 182</strong> (민원·상담)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강제추행죄 추행 범의 증명 기준',
        summary:
          '대법원 2024도3061(대법원, 2024.08.01 선고) 영역에서 법원은 강제추행죄가 성립하려면 문제가 되는 행위마다 폭행 또는 협박 외에 추행행위 및 그에 대한 범의가 인정되어야 하고, 형사재판의 유죄 인정은 합리적 의심을 배제할 정도의 증명에 의하여야 하므로 추행의 범의에 대한 증명이 부족하다면 설령 유죄의 의심이 가더라도 강제추행죄의 유죄로 판단할 수는 없다는 취지로 판시했습니다. 모임 신체접촉이 사실과 다르게 신고된 경우에는 접촉 경위·자리 정황·동석자 진술 등 객관 자료가 범의·경위 판단에서 중요하게 평가될 수 있습니다.',
        takeaway: '추행 범의가 합리적 의심 없이 증명되어야 함 — 접촉 시점·자리 배치·동석자 진술을 시간순으로 정리해 경위를 소명하는 것을 검토 권장.',
      },
    ],
    faq: [
      {
        question: '우연히 닿은 건데 강제추행으로 신고됐어요. 어떻게 대응해야 하나요?',
        answer:
          '<strong>강제추행은 추행행위와 그 범의가 함께 증명되어야 하는 영역입니다.</strong> 접촉 경위·자리 정황을 시간순으로 정리해 소명을 준비해볼 수 있습니다.',
      },
      {
        question: '추행할 의도가 없었다는 걸 어떻게 입증하나요?',
        answer:
          '<strong>의도 자체보다 접촉 경위·자리 배치·동선 등 객관 정황이 종합 평가되는 영역입니다.</strong> 정황 자료와 동석자 진술을 함께 모아두는 것이 좋습니다.',
      },
      {
        question: '제 진술과 신고인 진술이 다른데 어느 쪽이 인정되나요?',
        answer:
          '<strong>양측 진술 중 객관 정황과 더 부합하는 쪽이 평가되는 영역입니다.</strong> CCTV·좌석 배치·동석자 진술 등 보강 자료가 중요합니다.',
      },
      {
        question: '신고한 사람에게 직접 연락해 오해를 풀어도 되나요?',
        answer:
          '<strong>직접 접촉은 회유·압박 문제가 생길 수 있어 신중해야 하는 영역입니다.</strong> 경위 자료를 객관적으로 정리하고 절차 안에서 소명하는 것을 권장합니다.',
      },
      {
        question: '혼자 조사받기 막막한데 도움받을 곳이 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률 상담을 받아볼 수 있고 요건 충족 시 국선변호인 제도를 검토할 수 있는 영역입니다.</strong> 진술 전 사실관계 정리를 먼저 권장합니다.',
      },
    ],
    cta: { text: '성범죄 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '강제추행 고소당했을 때 대응', href: '/guide/sex-crime/groping-accused-response' },
      { label: '강제추행 인정 기준', href: '/guide/sex-crime/forced-molestation-standard' },
      { label: '사실과 다른 신고 대응', href: '/guide/sex-crime/false-sexual-assault-report-response' },
      { label: '성폭력 무고 방어 절차', href: '/guide/sex-crime/sexual-assault-accusation-defense' },
      { label: '수사부터 재판 절차', href: '/guide/sex-crime/sexual-assault-investigation-to-trial' },
    ],
  },
];
