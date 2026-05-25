import { SpokePage } from '../spoke-pages';

// batch78 sex-crime — 4개 절차형
//
// 고유 존재 이유:
// 1. SNS 통신매체이용음란 — 'SNS·메신저로 성적 메시지 도달 + 성폭력처벌법 제13조 + 피해자 대응' 트랙
// 2. 딥페이크 합성 피해 — '얼굴 합성·허위영상물 편집·반포 + 성폭력처벌법 제14조의2 + 삭제·신고' 트랙
// 3. 촬영물이용협박 — '몰카·영상 빌미 협박(유포 위협) + 성폭력처벌법 제14조의3 + 즉시 대응' 트랙
// 4. 운전연수 신체접촉 강제추행 혐의 — '지도·연수 중 접촉 + 고의·추행 다툼 + 방어 관점(accused)' 트랙

export const spokesBatch78SexCrime: SpokePage[] = [
  // ─── 1. sex-crime-sns-message-cyber-obscenity-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-sns-message-cyber-obscenity-track',
    keyword: 'SNS 통신매체이용음란',
    questionKeyword: 'SNS와 메신저로 성적 수치심을 일으키는 글과 사진을 반복해서 받았어요. 통신매체이용음란으로 신고할 수 있나요?',
    ctaKeyword: 'SNS 통신매체이용음란 피해 대응 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'SNS 통신매체이용음란 — 5단계 신고 대응 | 로앤가이드',
      description:
        'SNS·메신저로 성적 메시지·사진을 받아 통신매체이용음란 피해라면 캡처·신고·삭제 5단계 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>SNS 다이렉트 메시지나 메신저, 게시글 멘션을 통해 성적 수치심이나 혐오감을 일으키는 글·사진을 반복해서 받게 됐다면, "차단하면 끝나는 일인지", "캡처만으로 신고가 되는지" 막막하실 수 있습니다. 보낸 사람이 익명 계정이라 누구인지 모를 때는 더 답답하실 것입니다. 성폭력범죄의 처벌 등에 관한 특례법 제13조는 \'성적 욕망을 유발하거나 만족시킬 목적으로 전화·우편·컴퓨터, 그 밖의 통신매체를 통하여 성적 수치심이나 혐오감을 일으키는 말·글·영상 등을 상대방에게 도달하게 한 사람\'을 처벌 대상으로 규정합니다. 대법원은 상대방이 별다른 제한 없이 그 글 등을 바로 접할 수 있는 상태에 이르렀다면 실제로 인식·확인했는지와 상관없이 \'도달\'에 해당한다고 판시(2025도986)한 바 있습니다. SNS 성적 메시지 도달 피해라면 ① 증거 캡처 ② 경찰 신고 ③ 계정 특정 ④ 삭제·차단 ⑤ 민사 배상 5중 트랙을 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. SNS 통신매체이용음란 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 캡처·신고·특정·삭제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 증거 캡처</strong> — 메시지·게시글·멘션 전체 화면 캡처, 발신 계정 ID·URL·수신 일시 기록.</li>\n<li><strong>② 경찰 신고</strong> — 성폭력처벌법 제13조 위반, 사이버범죄 신고 또는 여성청소년수사대.</li>\n<li><strong>③ 발신 계정 특정</strong> — 압수수색·통신자료 제공요청으로 익명 계정 추적.</li>\n<li><strong>④ 삭제·차단</strong> — 플랫폼 신고·차단, 디지털성범죄피해자지원센터 모니터링.</li>\n<li><strong>⑤ 민사 배상</strong> — 발신자 대상 위자료 청구 트랙 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통신매체이용음란은 차단했더라도 보낸 글이 바로 접할 수 있는 상태에 이른 시점에 도달이 성립할 수 있는 영역입니다. 메시지를 지우기 전에 발신 계정과 함께 전체 화면을 캡처해두는 것이 입증에 도움이 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·특정·삭제 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 캡처 (인지 즉시)</strong> — 메시지·계정·일시 화면 캡처, 차단 전 백업.</li>\n<li><strong>2단계 — 경찰 신고 (즉시)</strong> — 사이버범죄 신고시스템(ECRM) 또는 여성청소년수사대 접수.</li>\n<li><strong>3단계 — 계정 특정 (1~3개월)</strong> — 통신자료·압수수색으로 익명 발신자 추적.</li>\n<li><strong>4단계 — 삭제·모니터링 (즉시 병행)</strong> — 플랫폼 신고, 디지털성범죄피해자지원센터 유포 모니터링.</li>\n<li><strong>5단계 — 민사 청구 (시효 별도)</strong> — 발신자 대상 위자료 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">SNS 통신매체이용음란 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 캡처·계정·신고 갈래 서류입니다.</strong></p>\n<ul>\n<li><strong>메시지·게시글 전체 화면 캡처(발신 ID·일시 포함)</strong></li>\n<li><strong>발신 계정 URL·프로필·핸들 기록</strong></li>\n<li><strong>수신 알림·대화 목록 백업(차단 전)</strong></li>\n<li><strong>플랫폼 신고 접수 번호·캡처</strong></li>\n<li><strong>경찰 신고 접수증·사건번호</strong></li>\n<li><strong>디지털성범죄피해자지원센터 신청 확인증</strong></li>\n<li><strong>피해 경위 시간순 정리표(반복 횟수·기간)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 차단을 먼저 누르면 대화 내역이 사라지는 플랫폼도 있으니 캡처·백업을 먼저 해두는 것이 좋습니다. 화면 캡처에는 발신 계정과 수신 일시가 함께 보이도록 남기는 것이 입증에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>도달 시점</strong> — 차단했어도 접할 수 있는 상태였는지.</li>\n<li><strong>성적 목적 여부</strong> — 발신자의 성적 욕망 유발·만족 목적 평가.</li>\n<li><strong>발신자 특정</strong> — 익명 계정 IP·통신자료 추적 가능성.</li>\n<li><strong>반복·지속성</strong> — 1회성인지 반복 발송인지.</li>\n<li><strong>2차 피해 차단</strong> — 캡처물 확산·재유포 방지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> (무료 법률 상담)</li>\n<li><strong>여성긴급전화 1366</strong> (24시간 상담)</li>\n<li><strong>해바라기센터 1899-3075</strong> (의료·심리·법률 통합)</li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 통신매체이용음란죄 도달의 의미',
        summary:
          '대법원 2025도986(대법원, 2025.08.14 선고) 영역에서 법원은 통신매체를 통해 성적 수치심을 일으키는 글 등을 전송해 상대방이 별다른 제한 없이 바로 접할 수 있는 상태에 이르게 한 경우, 상대방이 실제로 인식·확인했는지와 상관없이 성폭력처벌법 제13조의 구성요건을 충족한다고 판시했습니다. SNS 성적 메시지 피해에서는 차단·미확인 여부와 무관하게 도달 시점의 캡처가 핵심 입증 자료가 될 수 있습니다.',
        takeaway: '확인·차단 여부와 무관하게 \'접할 수 있는 상태\'면 도달 — 메시지·계정 캡처를 먼저 보존한 뒤 사이버범죄 신고를 병행해 검토 권장.',
      },
    ],
    faq: [
      {
        question: '이미 차단했는데도 신고할 수 있나요?',
        answer:
          '<strong>차단 전 도달 시점이 있었다면 신고를 검토해볼 수 있는 영역입니다.</strong> 대법원은 접할 수 있는 상태에 이른 시점에 도달이 성립할 수 있다고 봅니다.',
      },
      {
        question: '메시지를 다 지웠는데 증거가 없으면 어떡하나요?',
        answer:
          '<strong>플랫폼 신고 기록·서버 로그로 복원을 시도하는 영역입니다.</strong> 다음부터는 캡처·백업을 먼저 해두는 것이 좋습니다.',
      },
      {
        question: '익명 계정이라 누가 보냈는지 모르는데 특정이 되나요?',
        answer:
          '<strong>통신자료 제공요청·압수수색으로 발신자 추적을 시도하는 영역입니다.</strong> 경찰 수사 단계에서 검토해볼 수 있습니다.',
      },
      {
        question: '딱 한 번 받은 것도 신고 대상이 되나요?',
        answer:
          '<strong>반복 여부와 별개로 성적 목적·도달 여부가 평가되는 영역입니다.</strong> 1회 발송도 신고를 검토해볼 수 있습니다.',
      },
      {
        question: '혼자 신고하기 부담스러운데 도움받을 곳이 있나요?',
        answer:
          '<strong>여성긴급전화(1366)나 해바라기센터(1899-3075)에서 동반 신고 지원을 받아볼 수 있는 영역입니다.</strong> 24시간 상담이 가능합니다.',
      },
    ],
    cta: { text: '성범죄 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 신고부터 재판까지', href: '/guide/sex-crime/sexual-assault-report-to-trial' },
      { label: '성범죄 공소시효', href: '/guide/sex-crime/sex-crime-statute-of-limitations' },
      { label: '디지털 증거 타임라인', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '수사부터 재판 절차', href: '/guide/sex-crime/sexual-assault-investigation-to-trial' },
      { label: '성폭력 고소 절차', href: '/guide/sex-crime/sexual-violence-complaint-process' },
    ],
  },

  // ─── 2. sex-crime-deepfake-synthetic-video-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-deepfake-synthetic-video-track',
    keyword: '딥페이크 합성 영상물',
    questionKeyword: '제 얼굴을 음란물에 합성한 딥페이크 영상이 유포된 것 같아요. 어떻게 신고하고 삭제할 수 있나요?',
    ctaKeyword: '딥페이크 합성 피해 대응 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '딥페이크 합성 영상 — 5단계 신고·삭제 대응 | 로앤가이드',
      description:
        '내 얼굴을 음란물에 합성한 딥페이크 영상이 유포된 피해라면 성폭력처벌법·삭제·신고 5단계 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>내 얼굴 사진이 음란물이나 성적 영상에 합성돼 유포된 정황을 알게 됐다면, "실제 촬영도 아닌데 처벌이 되는지", "어떻게 빨리 삭제할 수 있는지" 혼란스럽고 두려우실 것입니다. 합성물이 계속 퍼지고 있을지 모른다는 불안도 크실 텐데요. 성폭력범죄의 처벌 등에 관한 특례법 제14조의2는 \'사람의 얼굴·신체 또는 음성을 대상으로 성적 욕망 또는 수치심을 유발할 수 있는 형태로 편집·합성·가공\'한 허위영상물을 그 의사에 반하여 반포한 행위를 처벌 대상으로 규정합니다. 대법원은 디지털 성범죄 사건에서 합성물의 성격과 표현물 해당 여부를 입법 취지에 따라 판단해야 한다고 판시(2024도17801)한 바 있습니다. 딥페이크 합성 피해라면 ① 증거 보존 ② 경찰 신고 ③ 삭제 지원 ④ 유포 차단 ⑤ 민사 배상 5중 트랙을 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 딥페이크 합성 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·신고·삭제·차단·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 증거 보존</strong> — 합성물 URL·게시 화면·게시자 계정 캡처, 다운로드 자제(2차 유포 방지).</li>\n<li><strong>② 경찰 신고</strong> — 성폭력처벌법 제14조의2 위반, 여성청소년수사대.</li>\n<li><strong>③ 삭제 지원</strong> — 디지털성범죄피해자지원센터(d4u.stop.or.kr) 삭제·모니터링 신청.</li>\n<li><strong>④ 유포 차단</strong> — 방심위·플랫폼 긴급 삭제 요청, 검색 차단.</li>\n<li><strong>⑤ 민사 배상</strong> — 제작·유포자 대상 위자료 청구 트랙.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 딥페이크 합성물은 실제 촬영이 아니어도 편집·합성·반포 행위가 별도로 처벌 대상으로 검토될 수 있는 영역입니다. 합성물을 직접 저장·재전송하면 2차 유포 위험이 있으니 URL과 화면만 캡처해 신고하는 것이 안전합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·신고·삭제·차단 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보존 (인지 즉시)</strong> — 합성물 URL·게시 화면·게시자 계정 캡처, 직접 다운로드 자제.</li>\n<li><strong>2단계 — 디지털성범죄피해자지원센터 신청 (즉시)</strong> — d4u.stop.or.kr 삭제·모니터링 신청.</li>\n<li><strong>3단계 — 경찰 신고 (즉시 병행)</strong> — 여성청소년수사대, 제작·유포 경로 수사.</li>\n<li><strong>4단계 — 긴급 삭제·차단 (1~2주)</strong> — 방심위·플랫폼 삭제 요청, 검색 노출 차단.</li>\n<li><strong>5단계 — 민사 청구 (시효 별도)</strong> — 제작·유포자 대상 위자료 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">딥페이크 합성 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 합성물·신고·삭제 갈래 서류입니다.</strong></p>\n<ul>\n<li><strong>합성물 게시 화면 캡처(URL·게시 일시 포함)</strong></li>\n<li><strong>게시자·유포 계정 ID·핸들 기록</strong></li>\n<li><strong>원본 사진 출처 추정 자료(도용된 SNS 등)</strong></li>\n<li><strong>디지털성범죄피해자지원센터 신청 확인증</strong></li>\n<li><strong>경찰 신고 접수증·사건번호</strong></li>\n<li><strong>플랫폼·방심위 삭제 요청 접수 번호</strong></li>\n<li><strong>피해 경위·확산 정황 시간순 정리표</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 합성물을 직접 내려받아 보관하면 의도와 무관하게 2차 유포로 오해될 수 있으니 URL과 화면 캡처만 남기는 것이 안전합니다. 디지털성범죄피해자지원센터에서는 무료로 삭제·모니터링을 신청할 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>합성·편집 입증</strong> — 원본 사진 도용·합성 경위 확인.</li>\n<li><strong>반포 의사 여부</strong> — 의사에 반한 유포·전시 여부.</li>\n<li><strong>제작·유포자 특정</strong> — 계정 IP·통신자료 추적.</li>\n<li><strong>확산 범위</strong> — 단일 게시인지 다중 플랫폼 확산인지.</li>\n<li><strong>2차 피해 차단</strong> — 신속 삭제·검색 차단·재유포 방지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> (무료 법률 상담)</li>\n<li><strong>여성긴급전화 1366</strong> (24시간 상담)</li>\n<li><strong>디지털성범죄피해자지원센터 (d4u.stop.or.kr)</strong> (삭제·모니터링)</li>\n<li><strong>경찰청 112 / 182</strong> (신고·상담)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 합성물·딥페이크 표현물 판단 기준',
        summary:
          '대법원 2024도17801(대법원, 2025.08.14 선고) 영역에서 법원은 청소년성보호법상 합성 사진·딥페이크 영상이 \'명백하게 인식될 수 있는 표현물이 등장하는 성착취물\'에 해당하는지는 입법 배경과 취지, 표현물의 구분 기준을 종합해 판단해야 한다고 판시했습니다. 딥페이크 합성 피해에서는 합성 경위·표현물의 성격이 적용 여부 판단의 핵심 자료가 될 수 있으므로 게시 화면·원본 도용 정황을 보존해두는 것이 도움이 됩니다.',
        takeaway: '합성·편집물도 별도 규정으로 검토될 수 있음 — URL·게시 화면 캡처를 보존하고 디지털성범죄피해자지원센터·경찰 신고를 병행해 검토 권장.',
      },
    ],
    faq: [
      {
        question: '실제 촬영이 아니라 합성인데도 신고가 되나요?',
        answer:
          '<strong>편집·합성·반포 행위가 별도로 검토 대상이 되는 영역입니다.</strong> 성폭력처벌법 제14조의2 허위영상물 규정을 검토해볼 수 있습니다.',
      },
      {
        question: '합성물을 증거로 저장해둬야 하나요?',
        answer:
          '<strong>직접 다운로드는 2차 유포 위험이 있어 URL·화면 캡처만 남기는 것이 안전한 영역입니다.</strong> 보존은 캡처 위주로 권장합니다.',
      },
      {
        question: '이미 여러 곳에 퍼졌는데 다 삭제할 수 있나요?',
        answer:
          '<strong>디지털성범죄피해자지원센터에서 다중 플랫폼 삭제·모니터링을 신청할 수 있는 영역입니다.</strong> 즉시 신청을 권장합니다.',
      },
      {
        question: '누가 만들었는지 모르는데 처벌이 가능한가요?',
        answer:
          '<strong>계정 IP·통신자료 추적으로 제작·유포자 특정을 시도하는 영역입니다.</strong> 경찰 수사 단계에서 검토해볼 수 있습니다.',
      },
      {
        question: '심리적으로 너무 힘든데 상담받을 곳이 있나요?',
        answer:
          '<strong>해바라기센터(1899-3075)·여성긴급전화(1366)에서 심리·법률 통합 지원을 받아볼 수 있는 영역입니다.</strong> 24시간 이용 가능합니다.',
      },
    ],
    cta: { text: '성범죄 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 신고부터 재판까지', href: '/guide/sex-crime/sexual-assault-report-to-trial' },
      { label: '성범죄 공소시효', href: '/guide/sex-crime/sex-crime-statute-of-limitations' },
      { label: '디지털 증거 타임라인', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '수사부터 재판 절차', href: '/guide/sex-crime/sexual-assault-investigation-to-trial' },
      { label: '성폭력 고소 절차', href: '/guide/sex-crime/sexual-violence-complaint-process' },
    ],
  },

  // ─── 3. sex-crime-filming-blackmail-threat-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-filming-blackmail-threat-track',
    keyword: '촬영물 이용 협박',
    questionKeyword: '상대가 제 영상을 가지고 있다며 유포하겠다고 협박해요. 어디에 신고하고 어떻게 대응해야 하나요?',
    ctaKeyword: '촬영물 이용 협박 피해 대응 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '촬영물 이용 협박 — 5단계 즉시 신고 대응 | 로앤가이드',
      description:
        '내 영상을 유포하겠다는 촬영물 이용 협박 피해라면 증거 보존·신고·차단 5단계 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>상대방이 과거에 촬영된 내 영상이나 사진을 가지고 있다며 "유포하겠다", "가족에게 보내겠다"는 식으로 협박해온 상황이라면, 당장 어떻게 해야 할지 머릿속이 하얘지고 시키는 대로 따라야 하나 고민되실 것입니다. 혼자 끙끙 앓다가 돈을 보내거나 요구를 들어주면 협박이 반복되는 경우가 많아 걱정이 크실 텐데요. 성폭력범죄의 처벌 등에 관한 특례법 제14조의3은 \'성적 욕망 또는 수치심을 유발할 수 있는 촬영물 또는 복제물을 이용하여 사람을 협박\'한 행위를 형법상 협박죄보다 가중해 처벌 대상으로 규정합니다. 대법원은 실제로 만들어진 촬영물 등을 방편·수단으로 삼아 공포심을 일으킬 해악을 고지한 경우 위 죄가 성립할 수 있다고 판시(2024도14039)한 바 있습니다. 촬영물 이용 협박 피해라면 ① 협박 증거 보존 ② 경찰 신고 ③ 유포 차단 ④ 신변보호 ⑤ 삭제 지원 5중 트랙을 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 촬영물 이용 협박 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·차단·신변보호·삭제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 협박 증거 보존</strong> — 협박 메시지·통화 녹음·요구 내용 캡처, 송금 요구 시 계좌 기록.</li>\n<li><strong>② 경찰 신고 (즉시)</strong> — 성폭력처벌법 제14조의3 위반, 여성청소년수사대.</li>\n<li><strong>③ 유포 차단</strong> — 디지털성범죄피해자지원센터 선제 모니터링·삭제 신청.</li>\n<li><strong>④ 신변보호</strong> — 신변보호 요청, 접근 차단·연락 차단.</li>\n<li><strong>⑤ 삭제 지원</strong> — 유포 시 신속 삭제, 검색 노출 차단.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 협박에 응해 돈을 보내거나 요구를 들어주면 협박이 반복될 위험이 큽니다. 요구에 응하기 전에 협박 메시지를 보존하고 경찰·디지털성범죄피해자지원센터에 먼저 연락하는 것이 안전한 대응이 될 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·차단·신변보호 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 협박 증거 보존 (인지 즉시)</strong> — 메시지·통화 녹음·요구 내용·계좌 캡처, 응하기 전 보존.</li>\n<li><strong>2단계 — 경찰 신고 (즉시)</strong> — 112 또는 여성청소년수사대, 협박·유포 위협 신고.</li>\n<li><strong>3단계 — 디지털성범죄피해자지원센터 (즉시 병행)</strong> — d4u.stop.or.kr 선제 모니터링·삭제 신청.</li>\n<li><strong>4단계 — 신변보호 요청 (수사 단계)</strong> — 신변보호·연락 차단·접근금지 검토.</li>\n<li><strong>5단계 — 유포 시 삭제·민사 (시효 별도)</strong> — 신속 삭제 + 협박·유포자 대상 위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">촬영물 이용 협박 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 협박·신고·차단 갈래 서류입니다.</strong></p>\n<ul>\n<li><strong>협박 메시지·통화 녹음(요구 내용·일시 포함)</strong></li>\n<li><strong>상대 계정·연락처·송금 요구 계좌 기록</strong></li>\n<li><strong>이미 송금했다면 이체 내역·영수증</strong></li>\n<li><strong>경찰 신고 접수증·사건번호</strong></li>\n<li><strong>디지털성범죄피해자지원센터 신청 확인증</strong></li>\n<li><strong>신변보호 요청 접수 기록</strong></li>\n<li><strong>피해 경위 시간순 정리표(협박 시작·반복 횟수)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 협박범의 연락을 무서워 바로 차단하기보다 메시지를 캡처·녹음해 증거를 먼저 확보하는 것이 수사에 도움이 됩니다. 디지털성범죄피해자지원센터는 아직 유포되지 않은 단계에서도 선제 모니터링을 신청할 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>해악 고지 여부</strong> — 유포 위협이 공포심을 일으킬 정도였는지.</li>\n<li><strong>촬영물 존재·이용</strong> — 실제 영상을 수단으로 삼았는지.</li>\n<li><strong>협박자 특정</strong> — 계정·계좌·통신자료 추적.</li>\n<li><strong>반복·금전 요구</strong> — 송금 요구·반복 협박 정황.</li>\n<li><strong>2차 피해 차단</strong> — 선제 모니터링·신변보호.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> (무료 법률 상담)</li>\n<li><strong>여성긴급전화 1366</strong> (24시간 상담)</li>\n<li><strong>디지털성범죄피해자지원센터 (d4u.stop.or.kr)</strong> (선제 모니터링·삭제)</li>\n<li><strong>경찰청 112 / 182</strong> (긴급 신고·상담)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 촬영물이용협박죄 성립 범위',
        summary:
          '대법원 2024도14039(대법원, 2025.06.12 선고) 영역에서 법원은 성폭력처벌법 제14조의3에서 \'촬영물 등을 이용하여\'란 실제로 만들어진 촬영물 등을 인식하고 방편·수단으로 삼아 공포심을 일으킬 해악을 고지하는 것을 의미한다고 판시했습니다. 촬영물 이용 협박 피해에서는 협박 메시지·요구 내용·촬영물 존재 정황이 핵심 입증 자료가 될 수 있으므로 응하기 전에 증거를 먼저 보존해두는 것이 도움이 됩니다.',
        takeaway: '실제 촬영물을 수단으로 한 유포 위협은 가중 처벌 대상으로 검토될 수 있음 — 협박 메시지·녹음을 보존한 뒤 즉시 경찰 신고를 검토 권장.',
      },
    ],
    faq: [
      {
        question: '요구대로 돈을 보내면 끝나지 않을까요?',
        answer:
          '<strong>응할수록 협박이 반복되는 경우가 많은 영역입니다.</strong> 응하기 전에 증거를 보존하고 경찰·디지털성범죄피해자지원센터에 먼저 연락하는 것을 권장합니다.',
      },
      {
        question: '아직 유포되지 않았는데도 신고할 수 있나요?',
        answer:
          '<strong>유포 전 협박 단계에서도 신고를 검토해볼 수 있는 영역입니다.</strong> 선제 모니터링도 함께 신청할 수 있습니다.',
      },
      {
        question: '협박범이 누군지 모르는데 잡을 수 있나요?',
        answer:
          '<strong>계정·계좌·통신자료 추적으로 특정을 시도하는 영역입니다.</strong> 경찰 수사 단계에서 검토해볼 수 있습니다.',
      },
      {
        question: '이미 한 번 돈을 보냈는데 어떻게 해야 하나요?',
        answer:
          '<strong>이체 내역도 협박 입증 자료가 되는 영역입니다.</strong> 더 응하기 전에 기록을 모아 신고를 검토해보세요.',
      },
      {
        question: '유포될까 봐 무서운데 미리 막을 방법이 있나요?',
        answer:
          '<strong>디지털성범죄피해자지원센터(d4u.stop.or.kr)에서 선제 모니터링·삭제를 신청할 수 있는 영역입니다.</strong> 즉시 신청을 권장합니다.',
      },
    ],
    cta: { text: '성범죄 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 신고부터 재판까지', href: '/guide/sex-crime/sexual-assault-report-to-trial' },
      { label: '성범죄 공소시효', href: '/guide/sex-crime/sex-crime-statute-of-limitations' },
      { label: '디지털 증거 타임라인', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '수사부터 재판 절차', href: '/guide/sex-crime/sexual-assault-investigation-to-trial' },
      { label: '성폭력 고소 절차', href: '/guide/sex-crime/sexual-violence-complaint-process' },
    ],
  },

  // ─── 4. sex-crime-driving-lesson-touch-defense-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-driving-lesson-touch-defense-track',
    keyword: '운전연수 신체접촉 추행 혐의',
    questionKeyword: '운전연수를 지도하다 자세 교정 중 신체가 닿았는데 강제추행 혐의를 받게 됐어요. 고의가 없었다고 어떻게 소명하나요?',
    ctaKeyword: '운전연수 신체접촉 혐의 대응 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '운전연수 신체접촉 혐의 — 5단계 방어 대응 | 로앤가이드',
      description:
        '운전연수 지도 중 신체접촉으로 강제추행 혐의를 받고 있다면 고의·추행 다툼 5단계 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>혐의를 받고 있다면, 이런 상황일 수 있습니다. 운전연수나 강습 과정에서 수강생의 자세·동작을 교정하려다 신체가 닿았는데, 상대방이 이를 추행으로 받아들여 강제추행 혐의로 조사를 받게 된 상황입니다. 지도 목적이었을 뿐 성적 의도가 전혀 없었다고 주장하고 싶지만 어떻게 소명할지 막막하실 것입니다. 형법 제298조 강제추행죄는 폭행 또는 협박으로 사람을 추행한 행위를 규율하며, 대법원은 추행에 해당하는지는 행위자와 피해자의 관계, 행위에 이르게 된 경위, 구체적 행위태양 등을 종합적으로 고려해 신중하게 결정해야 하고, 추행의 범의에 대한 증명이 부족하면 유죄로 판단할 수 없다고 판시(2024도3061)한 바 있습니다. 지도 중 신체접촉 + 추행 고의·경위 다툼 구조에서 ① 초동 대응 ② 경위 정리 ③ 진술 방어 ④ 변호인 선임 ⑤ 합의 검토 5단계 방어 트랙을 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 운전연수 신체접촉 혐의 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 초동·경위정리·진술·변호인·합의 5단계로 방어 트랙을 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 초동 대응</strong> — 첫 진술 신중, 변호인 면담 전 단정적 답변 자제.</li>\n<li><strong>② 경위 정리</strong> — 지도 목적·자세 교정 맥락·접촉 부위·지속 시간 구체화.</li>\n<li><strong>③ 진술 방어</strong> — 추행 고의 부재 소명, 차량 내 동선·블랙박스 활용.</li>\n<li><strong>④ 변호인 선임</strong> — 성폭력 전담 수사 대응, 진술 방향 조율.</li>\n<li><strong>⑤ 합의 검토</strong> — 형사 처분 단계 양형 자료 검토(강요 아닌 자발적 합의).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 강제추행죄는 추행 행위와 함께 추행의 범의(고의)가 인정되어야 하는 영역입니다. 대법원은 범의 증명이 부족하면 유죄로 판단할 수 없다고 봅니다. 지도 목적·접촉 경위·차량 블랙박스가 고의 다툼의 핵심 방어 자료가 될 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰·검찰·법원 단계 방어 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 초동 대응 (인지 당일)</strong> — 단정적 진술 자제, 차량 블랙박스·강습 기록 보존.</li>\n<li><strong>2단계 — 변호인 선임·진술 준비 (수사 전)</strong> — 성폭력 전담 변호인 선임, 경위 정리.</li>\n<li><strong>3단계 — 경찰 조사 (1~2개월)</strong> — 지도 목적·접촉 경위 구체적 진술, 블랙박스 제출.</li>\n<li><strong>4단계 — 검사 처분 단계 (2~4개월)</strong> — 불기소 의견서 제출, 합의 여부 검토.</li>\n<li><strong>5단계 — 기소 시 법원 재판 (6개월~)</strong> — 추행 고의·경위 다툼 변론.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">운전연수 신체접촉 혐의 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 고의 부재 입증·방어 갈래 서류입니다.</strong></p>\n<ul>\n<li><strong>차량 블랙박스 영상(실내·실외, 보존신청)</strong></li>\n<li><strong>강습·연수 계약서·일정·수강 기록</strong></li>\n<li><strong>지도 목적·자세 교정 맥락 설명서(시간순 정리)</strong></li>\n<li><strong>접촉 부위·지속 시간·동선 정리표</strong></li>\n<li><strong>변호인 면담 확인서</strong></li>\n<li><strong>목격자·동승자 진술(있을 경우)</strong></li>\n<li><strong>불기소 의견서 또는 탄원서(단계별)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 차량 블랙박스는 저장 용량 초과 시 자동 삭제될 수 있으니 혐의 인지 즉시 영상을 별도 저장·보존하는 것이 도움이 됩니다. 첫 경찰 조사 전 변호인과 지도 경위 진술 방향을 미리 조율하는 것이 방어에 유리할 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 고의 인정 여부</strong> — 지도 목적·접촉 경위·범의 종합 평가.</li>\n<li><strong>추행 해당 여부</strong> — 자세 교정 맥락인지 성적 행위인지.</li>\n<li><strong>블랙박스 확보</strong> — 보존 기간 경과 전 저장 여부가 관건.</li>\n<li><strong>피해자 진술 신빙성</strong> — 일관성·정황과의 부합 여부.</li>\n<li><strong>합의 시점과 방법</strong> — 강요 아닌 자발적 합의, 양형 효과 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> (무료 법률 상담)</li>\n<li><strong>대한변협 법률상담센터 (02-3476-6500)</strong></li>\n<li><strong>형사국선변호인 제도</strong> (구속 시 국선 신청 가능)</li>\n<li><strong>한국성폭력위기센터 02-883-9284</strong> (피해·가해 양측 상담)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강제추행죄 추행 고의 증명 기준',
        summary:
          '대법원 2024도3061(대법원, 2024.08.01 선고) 영역에서 법원은 운전연수 중 수강생의 허벅지를 밀친 행위에 대해 추행에 해당하는지는 관계·경위·행위태양을 종합해 신중히 판단해야 하고 추행의 범의에 대한 증명이 부족하면 유죄로 인정할 수 없다고 판시했습니다. 운전연수 신체접촉 혐의에서 고의 부재를 주장할 때 지도 목적·접촉 경위·블랙박스 정황이 핵심 방어 자료가 될 수 있습니다.',
        takeaway: '추행 행위와 별개로 범의 증명이 핵심 — 지도 경위·블랙박스·동선을 정리하고 변호인 선임 후 진술 방향을 조율해 검토 권장.',
      },
    ],
    faq: [
      {
        question: '혐의를 받고 있는데 조사에서 바로 다 설명해도 되나요?',
        answer:
          '<strong>첫 진술이 이후 수사 방향에 영향을 줄 수 있는 영역입니다.</strong> 변호인 면담 후 경위 진술 방향을 조율하는 것이 방어에 유리할 수 있습니다.',
      },
      {
        question: '지도 목적이었다는 걸 어떻게 입증하나요?',
        answer:
          '<strong>강습 계약·일정·블랙박스·접촉 경위 정리가 정황 자료가 되는 영역입니다.</strong> 자세 교정 맥락을 시간순으로 구체화해두세요.',
      },
      {
        question: '블랙박스 영상이 오히려 불리하게 쓰일 수도 있나요?',
        answer:
          '<strong>블랙박스는 쌍방 주장을 뒷받침하는 자료로 활용되는 영역입니다.</strong> 지도 경위·동선이 담겨 있다면 방어 자료가 될 수도 있습니다.',
      },
      {
        question: '추행 의도가 없었으면 바로 무혐의가 되나요?',
        answer:
          '<strong>고의·경위·행위태양이 종합 평가되는 영역입니다.</strong> 대법원은 범의 증명이 부족하면 유죄로 판단할 수 없다고 봅니다.',
      },
      {
        question: '합의를 하면 처분이 가벼워지나요?',
        answer:
          '<strong>합의는 형사 처분 단계에서 양형 자료로 검토되는 영역입니다.</strong> 강요가 아닌 자발적 합의임을 분명히 하는 것이 중요합니다.',
      },
    ],
    cta: { text: '성범죄 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '강제추행 성립 기준', href: '/guide/sex-crime/forced-molestation-standard' },
      { label: '추행 혐의 대응', href: '/guide/sex-crime/groping-accused-response' },
      { label: '국선변호인 지원', href: '/guide/sex-crime/sexual-assault-public-defender' },
      { label: '수사부터 재판 절차', href: '/guide/sex-crime/sexual-assault-investigation-to-trial' },
      { label: '합의 여부와 영향', href: '/guide/sex-crime/sex-crime-settlement-vs-no-settlement' },
    ],
  },
];
