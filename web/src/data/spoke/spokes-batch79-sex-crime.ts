import { SpokePage } from '../spoke-pages';

// batch79 sex-crime — 4개 (2026-05-27)
//
// 고유 존재 이유:
// 1. 영상통화 신체노출 강요·녹화 피해 — '영상통화 중 신체노출 유도·몰래 녹화 + 성폭력처벌법 제14조 + 증거 보존·삭제' 트랙 (준비형, victim)
// 2. 동의 촬영물 사후 유포 피해 — '연인 시절 동의 촬영물을 이별 후 의사에 반해 유포 + 성폭력처벌법 제14조 제2항 + 삭제·신고' 트랙 (절차형, victim)
// 3. 약물·만취 항거불능 준강간 피해 진술 — '수면·만취로 항거불능 상태에서의 준강간 + 형법 제299조 + 진술 신빙성·증거 정리' 트랙 (판단형, victim)
// 4. 클럽·페스티벌 공중밀집장소 추행 피해 — '클럽·페스티벌 등 혼잡 공간 추행 + 성폭력처벌법 제11조 + 현장 증거·신고' 트랙 (절차형, victim)

export const spokesBatch79SexCrime: SpokePage[] = [
  // ─── 1. sex-crime-video-call-body-exposure-recording-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-video-call-body-exposure-recording-track',
    keyword: '영상통화 신체노출 녹화 피해',
    questionKeyword: '영상통화 중에 신체를 보여달라고 유도당하거나 모르는 사이에 녹화된 것 같아요. 어떻게 신고하고 영상을 막을 수 있나요?',
    ctaKeyword: '영상통화 신체노출 녹화 피해 대응 정리',
    type: '준비형',
    perspective: 'victim',
    meta: {
      title: '영상통화 신체노출 녹화 피해 — 5단계 대응 | 로앤가이드',
      description:
        '영상통화 중 신체노출을 유도당하거나 몰래 녹화된 피해라면 증거 보존·신고·삭제 5단계 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>영상통화를 하다가 상대가 집요하게 신체를 보여달라고 유도하거나, 나도 모르는 사이 통화 화면이 녹화·캡처된 정황을 알게 됐다면 "내가 직접 보낸 화면도 신고가 되는지", "이미 저장됐으면 어떻게 막는지" 혼란스럽고 두려우실 것입니다. 그 영상이 어딘가로 퍼질지 모른다는 불안도 크실 텐데요. 성폭력범죄의 처벌 등에 관한 특례법 제14조는 \'사람의 신체를 촬영대상자의 의사에 반하여 촬영\'하거나 그 촬영물·복제물을 반포·전시한 행위, 그리고 사후에 의사에 반하여 반포한 행위를 처벌 대상으로 규정합니다. 대법원은 영상통화 기능을 이용해 일방 당사자가 자신의 신체를 직접 카메라에 비춰 생성·전송한 영상정보가 제14조 제2항 후단의 \'촬영물\'에 해당하는지 등을 입법 취지에 따라 판단해야 한다고 판시(2024도16133)한 바 있습니다. 영상통화 신체노출 녹화 피해라면 ① 증거 보존 ② 경찰 신고 ③ 발신자 특정 ④ 삭제·모니터링 ⑤ 민사 배상 5중 트랙을 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 영상통화 신체노출 녹화 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·신고·특정·삭제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 증거 보존</strong> — 통화 화면·메시지·요구 정황 캡처, 통화 일시·계정 ID 기록.</li>\n<li><strong>② 경찰 신고</strong> — 성폭력처벌법 제14조 위반 가능성, 여성청소년수사대 또는 사이버범죄 신고.</li>\n<li><strong>③ 발신자 특정</strong> — 통신자료 제공요청·압수수색으로 상대 계정 추적.</li>\n<li><strong>④ 삭제·모니터링</strong> — 디지털성범죄피해자지원센터(d4u.stop.or.kr) 삭제·모니터링 신청.</li>\n<li><strong>⑤ 민사 배상</strong> — 녹화·유포자 대상 위자료 청구 트랙 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 영상통화 화면을 동의 없이 녹화·캡처하거나 사후에 의사에 반해 유포하는 행위는 별도로 검토 대상이 될 수 있는 영역입니다. 요구 메시지와 통화 정황을 먼저 캡처해두면 피해 경위 입증에 도움이 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·신고·특정·삭제 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보존 (인지 즉시)</strong> — 통화 화면·요구 메시지·계정 정보 캡처, 차단 전 백업.</li>\n<li><strong>2단계 — 경찰 신고 (즉시)</strong> — 사이버범죄 신고시스템(ECRM) 또는 여성청소년수사대 접수.</li>\n<li><strong>3단계 — 발신자 특정 (1~3개월)</strong> — 통신자료·압수수색으로 상대 계정·IP 추적.</li>\n<li><strong>4단계 — 삭제·모니터링 (즉시 병행)</strong> — 디지털성범죄피해자지원센터 삭제·유포 모니터링 신청.</li>\n<li><strong>5단계 — 민사 청구 (시효 별도)</strong> — 녹화·유포자 대상 위자료 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">영상통화 신체노출 녹화 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 통화·신고·삭제 갈래 서류입니다.</strong></p>\n<ul>\n<li><strong>통화 화면·요구 메시지 전체 캡처(일시·계정 포함)</strong></li>\n<li><strong>상대 계정 ID·프로필·핸들·연락처 기록</strong></li>\n<li><strong>통화 앱 알림·대화 목록 백업(차단 전)</strong></li>\n<li><strong>녹화·유포 정황 발견 화면 캡처(있을 경우)</strong></li>\n<li><strong>경찰 신고 접수증·사건번호</strong></li>\n<li><strong>디지털성범죄피해자지원센터 신청 확인증</strong></li>\n<li><strong>피해 경위 시간순 정리표(통화 횟수·요구 내용)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 통화 앱에서 차단을 먼저 누르면 대화·요구 기록이 사라지는 경우가 있으니 캡처·백업을 먼저 해두는 것이 좋습니다. 화면 캡처에는 상대 계정과 통화 일시가 함께 보이도록 남기는 것이 입증에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>촬영물 해당 여부</strong> — 영상통화 화면이 촬영·녹화물에 해당하는지.</li>\n<li><strong>의사 반함 여부</strong> — 녹화·캡처·유포가 의사에 반했는지.</li>\n<li><strong>발신자 특정</strong> — 계정 IP·통신자료 추적 가능성.</li>\n<li><strong>유도·기망 정황</strong> — 신체노출을 유도한 경위·반복성.</li>\n<li><strong>2차 피해 차단</strong> — 캡처물 확산·재유포 방지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> (무료 법률 상담)</li>\n<li><strong>여성긴급전화 1366</strong> (24시간 상담)</li>\n<li><strong>디지털성범죄피해자지원센터 (d4u.stop.or.kr)</strong> (삭제·모니터링)</li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 영상통화 영상정보의 촬영물 판단 기준',
        summary:
          '대법원 2024도16133(대법원, 2025.06.05 선고) 영역에서 법원은 성폭력처벌법 제14조 제1항이 촬영 대상을 \'사람의 신체\'로 규정해 신체 자체를 직접 촬영한 행위가 이에 해당하고, 영상통화 기능을 이용해 일방 당사자가 자신의 신체를 직접 카메라에 비춰 생성·전송한 영상정보가 제14조 제2항 후단의 \'촬영물\'에 해당하는지는 입법 취지에 따라 판단해야 한다고 판시했습니다. 영상통화 신체노출 녹화 피해에서는 통화 화면·요구 정황 캡처가 핵심 입증 자료가 될 수 있으므로 차단 전에 먼저 보존해두는 것이 도움이 됩니다.',
        takeaway: '영상통화 화면의 촬영물·반포 해당 여부가 다퉈질 수 있음 — 통화 화면·요구 메시지를 캡처·백업한 뒤 사이버범죄 신고를 병행해 검토 권장.',
      },
    ],
    faq: [
      {
        question: '제가 직접 보여준 화면도 신고 대상이 되나요?',
        answer:
          '<strong>녹화·캡처·유포가 의사에 반했는지가 평가되는 영역입니다.</strong> 사후 의사에 반한 반포·전시는 별도로 신고를 검토해볼 수 있습니다.',
      },
      {
        question: '아직 유포된 건 아닌데 녹화만 한 것 같아도 신고할 수 있나요?',
        answer:
          '<strong>유포 전 단계에서도 신고·선제 모니터링을 검토해볼 수 있는 영역입니다.</strong> 요구 정황과 통화 기록을 먼저 보존해두세요.',
      },
      {
        question: '상대가 누구인지 모르는 익명 계정인데 특정이 되나요?',
        answer:
          '<strong>통신자료 제공요청·압수수색으로 발신자 추적을 시도하는 영역입니다.</strong> 경찰 수사 단계에서 검토해볼 수 있습니다.',
      },
      {
        question: '통화 기록을 이미 지웠는데 증거가 없으면 어떡하나요?',
        answer:
          '<strong>앱 신고 기록·서버 로그로 복원을 시도하는 영역입니다.</strong> 다음부터는 캡처·백업을 먼저 해두는 것이 좋습니다.',
      },
      {
        question: '너무 수치스럽고 힘든데 도움받을 곳이 있나요?',
        answer:
          '<strong>여성긴급전화(1366)나 디지털성범죄피해자지원센터(d4u.stop.or.kr)에서 상담·삭제 지원을 받아볼 수 있는 영역입니다.</strong> 24시간 상담이 가능합니다.',
      },
    ],
    cta: { text: '성범죄 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 신고부터 재판까지', href: '/guide/sex-crime/sexual-assault-report-to-trial' },
      { label: '성범죄 공소시효', href: '/guide/sex-crime/sex-crime-statute-of-limitations' },
      { label: '디지털 증거 타임라인', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '촬영물 이용 협박 대응', href: '/guide/sex-crime/sex-crime-filming-blackmail-threat-track' },
      { label: '성폭력 고소 절차', href: '/guide/sex-crime/sexual-violence-complaint-process' },
    ],
  },

  // ─── 2. sex-crime-consensual-footage-later-distribution-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-consensual-footage-later-distribution-track',
    keyword: '동의 촬영물 사후 유포 피해',
    questionKeyword: '연인 시절 동의하에 찍은 영상을 헤어진 뒤 상대가 유포한 것 같아요. 동의했던 영상도 신고하고 삭제할 수 있나요?',
    ctaKeyword: '동의 촬영물 사후 유포 피해 대응 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '동의 촬영물 사후 유포 — 5단계 신고·삭제 대응 | 로앤가이드',
      description:
        '연인 시절 동의했던 영상을 헤어진 뒤 유포당한 피해라면 성폭력처벌법·삭제·신고 5단계 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>연인 사이였을 때 동의하에 촬영했던 사진·영상을 헤어진 뒤 상대가 SNS나 메신저에 올리거나 지인에게 보낸 정황을 알게 됐다면, "그때는 동의했으니 신고가 안 되는 건 아닌지", "이미 퍼졌으면 어떻게 막는지" 막막하고 두려우실 것입니다. 다시 떠올리기조차 힘든 일이라 더 답답하실 텐데요. 성폭력범죄의 처벌 등에 관한 특례법 제14조 제2항은 촬영이 촬영 당시에는 의사에 반하지 않았더라도 사후에 그 촬영물·복제물을 \'촬영대상자의 의사에 반하여 반포·판매·제공 또는 공공연하게 전시·상영\'한 행위를 처벌 대상으로 규정합니다. 대법원은 위 죄가 반포 등 행위 시를 기준으로 의사에 반하여 그 행위를 함으로써 성립하므로, 촬영이 의사에 반하지 않았더라도 사후 반포가 의사에 반하면 죄가 성립할 수 있다고 판시(2022도15414)한 바 있습니다. 동의 촬영물 사후 유포 피해라면 ① 증거 보존 ② 경찰 신고 ③ 삭제 지원 ④ 유포 차단 ⑤ 민사 배상 5중 트랙을 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 동의 촬영물 사후 유포 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·신고·삭제·차단·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 증거 보존</strong> — 유포 게시 화면·URL·게시자 계정 캡처, 다운로드 자제(2차 유포 방지).</li>\n<li><strong>② 경찰 신고</strong> — 성폭력처벌법 제14조 제2항 위반 가능성, 여성청소년수사대.</li>\n<li><strong>③ 삭제 지원</strong> — 디지털성범죄피해자지원센터(d4u.stop.or.kr) 삭제·모니터링 신청.</li>\n<li><strong>④ 유포 차단</strong> — 방심위·플랫폼 삭제 요청, 검색 노출 차단.</li>\n<li><strong>⑤ 민사 배상</strong> — 유포자 대상 위자료 청구 트랙 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 촬영 당시 동의가 있었더라도 사후 유포가 의사에 반하면 별도로 검토 대상이 될 수 있는 영역입니다. 게시물을 직접 내려받기보다 URL·화면만 캡처해 신고하는 것이 2차 유포 위험을 줄이는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·신고·삭제·차단 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보존 (인지 즉시)</strong> — 유포 게시 화면·URL·게시자 계정 캡처, 직접 다운로드 자제.</li>\n<li><strong>2단계 — 디지털성범죄피해자지원센터 신청 (즉시)</strong> — d4u.stop.or.kr 삭제·모니터링 신청.</li>\n<li><strong>3단계 — 경찰 신고 (즉시 병행)</strong> — 여성청소년수사대, 유포 경로·게시자 수사.</li>\n<li><strong>4단계 — 긴급 삭제·차단 (1~2주)</strong> — 방심위·플랫폼 삭제 요청, 검색 노출 차단.</li>\n<li><strong>5단계 — 민사 청구 (시효 별도)</strong> — 유포자 대상 위자료 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">동의 촬영물 사후 유포 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 유포물·신고·삭제 갈래 서류입니다.</strong></p>\n<ul>\n<li><strong>유포 게시 화면 캡처(URL·게시 일시 포함)</strong></li>\n<li><strong>게시자·전달 계정 ID·핸들·연락처 기록</strong></li>\n<li><strong>유포자와 과거 관계·대화 내역(있을 경우)</strong></li>\n<li><strong>디지털성범죄피해자지원센터 신청 확인증</strong></li>\n<li><strong>경찰 신고 접수증·사건번호</strong></li>\n<li><strong>플랫폼·방심위 삭제 요청 접수 번호</strong></li>\n<li><strong>피해 경위·확산 정황 시간순 정리표</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 유포물을 직접 내려받아 보관하면 의도와 무관하게 2차 유포로 오해될 수 있으니 URL·화면 캡처만 남기는 것이 안전합니다. 디지털성범죄피해자지원센터에서는 무료로 삭제·모니터링을 신청할 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>반포 시 의사 반함</strong> — 촬영 동의와 별개로 유포가 의사에 반했는지.</li>\n<li><strong>반포·전시 여부</strong> — 불특정·다수가 접할 수 있는 상태였는지.</li>\n<li><strong>유포자 특정</strong> — 게시 계정·전달 경로·통신자료 추적.</li>\n<li><strong>확산 범위</strong> — 단일 게시인지 다중 플랫폼 확산인지.</li>\n<li><strong>2차 피해 차단</strong> — 신속 삭제·검색 차단·재유포 방지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> (무료 법률 상담)</li>\n<li><strong>여성긴급전화 1366</strong> (24시간 상담)</li>\n<li><strong>디지털성범죄피해자지원센터 (d4u.stop.or.kr)</strong> (삭제·모니터링)</li>\n<li><strong>경찰청 112 / 182</strong> (신고·상담)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사후 반포 시 의사 반함 판단 기준',
        summary:
          '대법원 2022도15414(대법원, 2023.06.15 선고) 영역에서 법원은 성폭력처벌법 제14조 제2항 위반죄가 반포 등 행위 시를 기준으로 촬영대상자의 의사에 반하여 그 행위를 함으로써 성립하므로, 촬영이 촬영 당시에는 의사에 반하지 않았더라도 사후에 의사에 반하여 반포한 경우 죄가 성립할 수 있다고 판시했습니다. 동의 촬영물 사후 유포 피해에서는 유포 게시 화면·게시자 정보·확산 정황이 핵심 입증 자료가 될 수 있으므로 직접 다운로드 대신 URL과 화면을 보존해두는 것이 도움이 됩니다.',
        takeaway: '촬영 동의와 별개로 사후 유포가 의사에 반하면 별도로 검토될 수 있음 — URL·게시 화면을 보존하고 디지털성범죄피해자지원센터·경찰 신고를 병행해 검토 권장.',
      },
    ],
    faq: [
      {
        question: '그때는 제가 동의해서 찍은 영상인데도 신고가 되나요?',
        answer:
          '<strong>촬영 동의와 별개로 사후 유포가 의사에 반했는지가 평가되는 영역입니다.</strong> 제14조 제2항 사후 반포 규정을 검토해볼 수 있습니다.',
      },
      {
        question: '증거로 영상을 직접 저장해둬야 하나요?',
        answer:
          '<strong>직접 다운로드는 2차 유포 위험이 있어 URL·화면 캡처만 남기는 것이 안전한 영역입니다.</strong> 보존은 캡처 위주로 권장합니다.',
      },
      {
        question: '이미 여러 곳에 퍼졌는데 다 삭제할 수 있나요?',
        answer:
          '<strong>디지털성범죄피해자지원센터에서 다중 플랫폼 삭제·모니터링을 신청할 수 있는 영역입니다.</strong> 즉시 신청을 권장합니다.',
      },
      {
        question: '유포한 사람이 옛 연인인데 관계를 입증해야 하나요?',
        answer:
          '<strong>과거 대화 내역·관계 정황도 유포자 특정 자료가 되는 영역입니다.</strong> 게시 계정·전달 경로와 함께 정리해두세요.',
      },
      {
        question: '다시 떠올리기 힘든데 상담받을 곳이 있나요?',
        answer:
          '<strong>해바라기센터(1899-3075)·여성긴급전화(1366)에서 심리·법률 통합 지원을 받아볼 수 있는 영역입니다.</strong> 24시간 이용 가능합니다.',
      },
    ],
    cta: { text: '성범죄 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 신고부터 재판까지', href: '/guide/sex-crime/sexual-assault-report-to-trial' },
      { label: '성범죄 공소시효', href: '/guide/sex-crime/sex-crime-statute-of-limitations' },
      { label: '디지털 증거 타임라인', href: '/guide/sex-crime/sex-crime-digital-evidence-timeline' },
      { label: '딥페이크 합성 영상 대응', href: '/guide/sex-crime/sex-crime-deepfake-synthetic-video-track' },
      { label: '성폭력 고소 절차', href: '/guide/sex-crime/sexual-violence-complaint-process' },
    ],
  },

  // ─── 3. sex-crime-incapacitated-drug-alcohol-victim-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-incapacitated-drug-alcohol-victim-track',
    keyword: '만취 항거불능 준강간 피해',
    questionKeyword: '술이나 약 때문에 의식이 흐릿한 상태에서 성폭력 피해를 입은 것 같은데 기억이 또렷하지 않아요. 진술이 부족해도 신고할 수 있나요?',
    ctaKeyword: '만취 항거불능 준강간 피해 대응 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '만취 항거불능 준강간 피해 — 5단계 증거 정리 | 로앤가이드',
      description:
        '술이나 약으로 의식이 흐릿한 상태에서 성폭력 피해를 입어 기억이 또렷하지 않다면 증거 정리·진술 5단계 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>술자리나 약물로 의식이 흐릿했던 사이에 성폭력 피해를 입은 것 같은데 기억이 군데군데 끊겨 있다면, "기억이 또렷하지 않은데 신고가 되는지", "내 진술만으로 부족한 건 아닌지" 막막하고 자책감마저 드실 수 있습니다. 무엇부터 해야 할지 머릿속이 하얘지실 텐데요. 형법 제299조 준강간죄는 \'사람의 심신상실 또는 항거불능의 상태를 이용하여 간음하거나 추행\'한 행위를 처벌 대상으로 규정합니다. 대법원은 피고인이 공소사실을 부인하고 직접증거로 사실상 피해자의 진술이 유일한 경우, 그 진술이 합리적 의심을 배제할 만한 신빙성이 있는지는 주요 부분이 일관·구체적인지 등을 종합해 신중히 판단해야 한다고 판시(2022도9676)한 바 있습니다. 만취·약물 항거불능 준강간 피해라면 ① 즉시 증거 채취 ② 진술 정리 ③ 경찰 신고 ④ 보호 지원 ⑤ 절차 진행 5중 트랙을 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 만취 항거불능 준강간 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거채취·진술·신고·보호·절차 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 즉시 증거 채취</strong> — 씻기 전 해바라기센터에서 응급 키트·체액·혈중알코올 검사 가능성 확인.</li>\n<li><strong>② 진술 정리</strong> — 기억나는 시간대·장소·정황을 끊긴 부분까지 솔직히 메모.</li>\n<li><strong>③ 경찰 신고</strong> — 형법 제299조 준강간 가능성, 여성청소년수사대.</li>\n<li><strong>④ 보호 지원</strong> — 해바라기센터 의료·심리·법률 통합 지원, 국선변호사 연계.</li>\n<li><strong>⑤ 절차 진행</strong> — CCTV·통화·메시지 등 객관 증거 확보 병행.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 기억이 끊겨 있어도 진술의 일관성·구체성과 객관 증거가 함께 평가되는 영역입니다. 씻거나 옷을 갈아입기 전에 해바라기센터에서 증거 채취 가능성을 먼저 확인하는 것이 입증에 도움이 될 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거채취·신고·보호·절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 응급 증거 채취 (피해 직후 가능한 빨리)</strong> — 해바라기센터 방문, 씻기 전 응급 키트·검사 검토.</li>\n<li><strong>2단계 — 진술 정리 (당일~수일)</strong> — 기억나는 정황을 시간순으로 메모, 끊긴 부분도 솔직히 기록.</li>\n<li><strong>3단계 — 경찰 신고 (가능한 빨리)</strong> — 여성청소년수사대, 항거불능 정황 설명.</li>\n<li><strong>4단계 — 객관 증거 확보 (수사 단계)</strong> — CCTV·통화·메시지·동행자 진술 수집.</li>\n<li><strong>5단계 — 보호·재판 절차 (수개월)</strong> — 국선변호사·신뢰관계인 동석, 2차 피해 방지.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">만취 항거불능 준강간 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거채취·진술·신고 갈래 서류입니다.</strong></p>\n<ul>\n<li><strong>해바라기센터 응급 키트·진료 기록</strong></li>\n<li><strong>피해 직후 사진·상처·옷 등 보존물</strong></li>\n<li><strong>기억나는 정황 시간순 메모(끊긴 부분 포함)</strong></li>\n<li><strong>당일 동선 확인 자료(영수증·교통·CCTV 단서)</strong></li>\n<li><strong>상대·동행자와 통화·메시지 기록</strong></li>\n<li><strong>경찰 신고 접수증·사건번호</strong></li>\n<li><strong>국선변호사·신뢰관계인 동석 신청서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시간이 지나면 체액·혈중알코올 등 증거가 사라질 수 있으니 가능한 한 빨리 해바라기센터에서 채취 가능성을 확인하는 것이 도움이 됩니다. 기억이 또렷하지 않아도 떠오르는 정황을 솔직히 메모해두는 것이 진술 일관성 정리에 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>항거불능 상태 여부</strong> — 술·약물로 의사 표현이 어려웠는지.</li>\n<li><strong>진술 신빙성</strong> — 주요 부분의 일관성·구체성·객관 정황 부합.</li>\n<li><strong>객관 증거</strong> — CCTV·통화·동행자 진술 등 보강 자료.</li>\n<li><strong>응급 채취 시점</strong> — 씻기 전 증거 채취 여부가 관건.</li>\n<li><strong>2차 피해 차단</strong> — 신뢰관계인 동석·진술 보호.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> (무료 법률 상담)</li>\n<li><strong>여성긴급전화 1366</strong> (24시간 상담)</li>\n<li><strong>해바라기센터 1899-3075</strong> (의료·심리·법률 통합)</li>\n<li><strong>경찰청 112 / 182</strong> (신고·상담)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 피해자 진술 신빙성 판단 기준',
        summary:
          '대법원 2022도9676(대법원, 2025.06.05 선고) 영역에서 법원은 피고인이 공소사실을 부인하는 성폭력 사건에서 직접증거로 사실상 피해자의 진술이 유일한 경우, 그 진술의 신빙성은 진술 내용의 주요 부분이 일관되고 구체적인지, 논리와 경험칙에 비추어 합리적이고 객관적 사정과 모순되지 않는지 등을 종합해 신중히 판단해야 한다고 판시했습니다. 만취·약물 항거불능 준강간 피해에서는 기억이 끊겨 있더라도 떠오르는 정황의 일관된 정리와 응급 증거·객관 자료 확보가 입증에 도움이 될 수 있습니다.',
        takeaway: '진술의 일관성·구체성과 객관 증거가 함께 평가됨 — 씻기 전 응급 채취와 정황 메모를 확보한 뒤 신뢰관계인 동석 신고를 검토 권장.',
      },
    ],
    faq: [
      {
        question: '기억이 군데군데 끊겼는데도 신고할 수 있나요?',
        answer:
          '<strong>기억이 또렷하지 않아도 떠오르는 정황과 객관 증거가 함께 평가되는 영역입니다.</strong> 기억나는 부분을 솔직히 메모해 신고를 검토해볼 수 있습니다.',
      },
      {
        question: '제 진술만 있고 다른 증거가 없으면 안 되나요?',
        answer:
          '<strong>진술의 일관성·구체성과 CCTV·통화 등 보강 자료가 종합 평가되는 영역입니다.</strong> 객관 증거를 함께 모아두는 것이 도움이 됩니다.',
      },
      {
        question: '이미 씻고 시간이 지났는데 증거가 남아 있을까요?',
        answer:
          '<strong>가능한 한 빨리 해바라기센터에서 채취·검사 가능성을 확인하는 것이 좋은 영역입니다.</strong> 시간이 지나도 객관 자료 수집은 검토해볼 수 있습니다.',
      },
      {
        question: '제가 술을 마신 게 불리하게 작용하지 않을까요?',
        answer:
          '<strong>술·약물로 인한 항거불능 상태 자체가 준강간죄에서 평가되는 요소인 영역입니다.</strong> 자책보다 정황 정리와 상담을 먼저 권장합니다.',
      },
      {
        question: '혼자 조사받기 무서운데 도움받을 곳이 있나요?',
        answer:
          '<strong>해바라기센터(1899-3075)와 국선변호사·신뢰관계인 동석 제도를 활용할 수 있는 영역입니다.</strong> 여성긴급전화(1366)도 24시간 상담이 가능합니다.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '성범죄 신고부터 재판까지', href: '/guide/sex-crime/sexual-assault-report-to-trial' },
      { label: '음주 상태 동의 여부 판단', href: '/guide/sex-crime/sex-crime-drunk-consent-issue' },
      { label: '성폭력 피해자 국선변호사', href: '/guide/sex-crime/sexual-assault-public-defender' },
      { label: '수사부터 재판 절차', href: '/guide/sex-crime/sexual-assault-investigation-to-trial' },
      { label: '성폭력 고소 절차', href: '/guide/sex-crime/sexual-violence-complaint-process' },
    ],
  },

  // ─── 4. sex-crime-club-festival-crowd-molestation-track ───
  {
    domain: 'sex-crime',
    slug: 'sex-crime-club-festival-crowd-molestation-track',
    keyword: '클럽 페스티벌 공중밀집 추행',
    questionKeyword: '클럽이나 페스티벌처럼 사람이 빽빽한 곳에서 추행을 당했어요. 혼잡한 곳이라 증거가 애매한데 신고할 수 있나요?',
    ctaKeyword: '클럽 페스티벌 공중밀집 추행 피해 대응 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '클럽·페스티벌 공중밀집 추행 — 5단계 신고 대응 | 로앤가이드',
      description:
        '클럽이나 페스티벌처럼 혼잡한 곳에서 추행 피해를 입어 증거가 애매하다면 현장 증거·신고 5단계 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>클럽이나 페스티벌, 콘서트장처럼 사람이 빽빽하게 들어찬 공간에서 누군가 의도적으로 신체를 만지고 지나간 것 같다면, "혼잡한 곳이라 실수인지 추행인지 애매하지 않을까", "증거도 없는데 신고가 되는지" 막막하실 것입니다. 순식간에 벌어져 누가 그랬는지조차 혼란스러우실 텐데요. 성폭력범죄의 처벌 등에 관한 특례법 제11조는 \'대중교통수단, 공연·집회 장소, 그 밖에 공중이 밀집하는 장소에서 사람을 추행\'한 행위를 처벌 대상으로 규정합니다. 대법원은 공중밀집장소 추행죄가 성립하려면 추행을 한다는 인식과 미필적으로나마 이를 용인하는 의사가 있어야 하고, 고의를 부인하면 간접사실로 이를 판단해야 한다고 판시(2023도13081)한 바 있습니다. 클럽·페스티벌 공중밀집 추행 피해라면 ① 현장 증거 확보 ② 즉시 신고 ③ 가해자 특정 ④ 진술 정리 ⑤ 절차 진행 5중 트랙을 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 클럽·페스티벌 공중밀집 추행 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장증거·신고·특정·진술·절차 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 현장 증거 확보</strong> — 위치·시간·접촉 부위 즉시 메모, 주변 CCTV·일행 목격 확인.</li>\n<li><strong>② 즉시 신고</strong> — 성폭력처벌법 제11조 공중밀집장소 추행 가능성, 현장 112 신고.</li>\n<li><strong>③ 가해자 특정</strong> — 인상착의·동선·CCTV로 추적, 현장 보안·주최 측 협조 요청.</li>\n<li><strong>④ 진술 정리</strong> — 접촉 경위·고의 정황(반복·위치)을 구체적으로 기록.</li>\n<li><strong>⑤ 절차 진행</strong> — 여성청소년수사대 접수, 객관 증거 보강.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혼잡한 공간이라도 접촉의 위치·반복·태양 등 간접사실로 추행 고의가 평가되는 영역입니다. 현장에서 바로 위치와 시간, 인상착의를 메모하고 CCTV 확보를 요청하는 것이 입증에 도움이 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장증거·신고·특정·절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 증거 확보 (즉시)</strong> — 위치·시간·접촉 부위·인상착의 메모, 일행 목격 확인.</li>\n<li><strong>2단계 — 현장 신고 (즉시)</strong> — 112 신고, 현장 보안·주최 측에 CCTV 보존 요청.</li>\n<li><strong>3단계 — 가해자 특정 (1~4주)</strong> — CCTV·동선·결제 기록으로 추적.</li>\n<li><strong>4단계 — 진술 정리·접수 (가능한 빨리)</strong> — 여성청소년수사대, 접촉 경위·고의 정황 구체화.</li>\n<li><strong>5단계 — 수사·재판 절차 (수개월)</strong> — 객관 증거 보강, 신뢰관계인 동석 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 성범죄 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">클럽·페스티벌 공중밀집 추행 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=sex-crime" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·신고·특정 갈래 서류입니다.</strong></p>\n<ul>\n<li><strong>피해 위치·시간·접촉 부위 메모(즉시 기록)</strong></li>\n<li><strong>가해자 인상착의·동선·복장 기록</strong></li>\n<li><strong>현장 CCTV 보존 요청 접수 자료</strong></li>\n<li><strong>일행·주변 목격자 연락처·진술</strong></li>\n<li><strong>입장권·결제 내역(시간대·동선 확인)</strong></li>\n<li><strong>경찰 신고 접수증·사건번호</strong></li>\n<li><strong>피해 경위 시간순 정리표(고의 정황 포함)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공연장·클럽 CCTV는 보존 기간이 짧은 경우가 많으니 현장에서 바로 주최 측·보안에 보존을 요청하는 것이 도움이 됩니다. 접촉이 단순 부딪힘이 아니라 의도적이었던 정황(위치·반복·방향)을 구체적으로 메모해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>추행 고의 여부</strong> — 혼잡 중 우연한 접촉인지 의도적이었는지.</li>\n<li><strong>추행 해당 여부</strong> — 접촉 부위·태양이 성적 침해에 이르렀는지.</li>\n<li><strong>가해자 특정</strong> — CCTV·동선·결제 기록 확보 여부.</li>\n<li><strong>현장 증거 보존</strong> — CCTV 보존 기간 경과 전 요청 여부.</li>\n<li><strong>진술 구체성</strong> — 접촉 경위·정황의 일관성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> (무료 법률 상담)</li>\n<li><strong>여성긴급전화 1366</strong> (24시간 상담)</li>\n<li><strong>해바라기센터 1899-3075</strong> (의료·심리·법률 통합)</li>\n<li><strong>경찰청 112 / 182</strong> (신고·상담)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공중밀집장소 추행죄 고의 판단 기준',
        summary:
          '대법원 2023도13081(대법원, 2024.01.04 선고) 영역에서 법원은 공중밀집장소 추행죄의 \'추행\'은 일반인 기준으로 성적 수치심이나 혐오감을 일으키고 성적 자기결정권을 침해하는 행위를 의미하며, 성립을 위해서는 추행을 한다는 인식과 미필적으로나마 용인하는 의사가 있어야 하고 고의를 부인하는 경우 고의와 관련성 있는 간접사실로 판단해야 한다고 판시했습니다. 클럽·페스티벌 공중밀집 추행 피해에서는 접촉의 위치·반복·태양 등 정황이 핵심 자료가 될 수 있으므로 현장에서 즉시 메모·CCTV 보존을 확보해두는 것이 도움이 됩니다.',
        takeaway: '혼잡 공간이라도 간접사실로 추행 고의가 평가됨 — 위치·시간·인상착의를 즉시 메모하고 현장 CCTV 보존을 요청한 뒤 신고를 검토 권장.',
      },
    ],
    faq: [
      {
        question: '사람이 너무 많은 곳이라 실수인지 추행인지 애매한데 신고가 되나요?',
        answer:
          '<strong>접촉의 위치·반복·방향 등 간접사실로 고의가 평가되는 영역입니다.</strong> 의도적이었던 정황을 메모해 신고를 검토해볼 수 있습니다.',
      },
      {
        question: '순식간이라 증거가 없는데도 신고할 수 있나요?',
        answer:
          '<strong>현장 CCTV·일행 목격·즉시 메모가 보강 자료가 되는 영역입니다.</strong> 가능한 한 빨리 현장에서 확보를 시도하는 것이 좋습니다.',
      },
      {
        question: '가해자가 누군지 모르는데 특정이 되나요?',
        answer:
          '<strong>CCTV·동선·결제 기록으로 추적을 시도하는 영역입니다.</strong> 인상착의와 시간대를 정확히 기록해두면 도움이 됩니다.',
      },
      {
        question: '현장 CCTV는 어떻게 확보하나요?',
        answer:
          '<strong>보존 기간이 짧을 수 있어 즉시 주최 측·보안에 보존을 요청하는 것이 중요한 영역입니다.</strong> 경찰 신고 시 압수·제출도 검토됩니다.',
      },
      {
        question: '혼자 신고하기 부담스러운데 도움받을 곳이 있나요?',
        answer:
          '<strong>여성긴급전화(1366)나 해바라기센터(1899-3075)에서 동반 신고 지원을 받아볼 수 있는 영역입니다.</strong> 24시간 상담이 가능합니다.',
      },
    ],
    cta: { text: '성범죄 피해 대응 순서, AI로 정리하기', link: '/chat?domain=sex-crime' },
    internalLinks: [
      { label: '지하철 혼잡 추행 대응', href: '/guide/sex-crime/sex-crime-subway-crowded-molestation-track' },
      { label: '성범죄 신고부터 재판까지', href: '/guide/sex-crime/sexual-assault-report-to-trial' },
      { label: '성폭력 피해 고소 서류', href: '/guide/sex-crime/victim-complaint-required-docs' },
      { label: '수사부터 재판 절차', href: '/guide/sex-crime/sexual-assault-investigation-to-trial' },
      { label: '성폭력 고소 절차', href: '/guide/sex-crime/sexual-violence-complaint-process' },
    ],
  },
];
