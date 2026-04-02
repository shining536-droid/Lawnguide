import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 6. 이 페이지는 [디지털성범죄 피해자]의 [경찰 신고 전 증거를 정리해야 하는 상황]에서 [필요한 증거 목록과 확보 방법 파악]을 돕는 페이지다.
// 7. 이 페이지는 [해고 통보를 받은 근로자]의 [해고 사유서를 받지 못한 상황]에서 [사유서 요청 방법과 양식 작성]을 돕는 페이지다.
// 8. 이 페이지는 [협의이혼을 결심한 부부]의 [법원에 이혼 신청을 준비하는 상황]에서 [필요한 서류 목록과 절차 파악]을 돕는 페이지다.
// 9. 이 페이지는 [마약 초범으로 기소된 피의자]의 [집행유예 가능성을 알고 싶은 상황]에서 [실제 판례 분석과 유리한 양형 요소 파악]을 돕는 페이지다.
// 10. 이 페이지는 [음주운전으로 적발된 운전자]의 [면허 행정처분 절차가 궁금한 상황]에서 [처분 단계별 일정과 대응 방법 파악]을 돕는 페이지다.

export const spokesBatch18_6to10: SpokePage[] = [
  {
    domain: 'digital-sex-crime',
    slug: 'report-required-evidence-list',
    keyword: '디지털성범죄 피해 신고 시 필요한 증거 목록',
    questionKeyword: '디지털성범죄 피해를 신고하려면 어떤 증거를 준비해야 하나요?',
    ctaKeyword: '디지털성범죄 증거',
    type: '준비서류형',
    perspective: '피해자',
    meta: {
      title: '디지털성범죄 신고 증거 7가지 — 확보 순서 총정리 | 로앤가이드',
      description: '디지털성범죄 피해를 당했는데 어떤 증거부터 모아야 할지 모르겠다면, 경찰 신고 전 반드시 확보해야 할 필수 증거 7가지와 캡처·저장·제출 방법을 지금 확인하세요.',
    },
    intro: '누군가 내 사진을 합성해서 유포하고 있다는 사실을 알게 됐습니다. 당장 경찰에 신고하고 싶지만, 막상 무엇을 가져가야 할지 막막합니다. 증거가 부족하면 수사가 제대로 진행되지 않을 수 있어 사전 준비가 중요합니다. 신고 전 반드시 확보해야 할 증거 목록을 정리해보세요.',
    sections: [
      {
        title: '첫째, 불법 촬영물·합성물의 화면 캡처와 URL을 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">성폭력범죄의처벌등에관한특례법 제14조에 따라 불법촬영물 유포는 7년 이하의 징역 또는 5천만원 이하의 벌금에 해당합니다</strong></p>\n<p>피해 영상이나 이미지를 발견하면 <strong>삭제되기 전에 화면 캡처</strong>를 해야 합니다. 캡처 시 반드시 <strong>URL(웹주소), 게시일시, 작성자 닉네임</strong>이 함께 보이도록 찍으세요.</p>\n<p>캡처한 파일에는 <strong>날짜와 시간이 자동 기록</strong>되는 기기를 사용하고, 원본 파일을 별도 USB나 클라우드에 백업해두세요. 웹사이트가 해외 서버라면 한국어와 함께 원문 페이지도 캡처하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: URL 포함 캡처 → 게시일시·작성자 표시 → USB·클라우드 이중 백업</blockquote>',
      },
      {
        title: '둘째, 가해자와의 대화 기록·협박 메시지를 모두 저장하세요',
        content:
          '<p><strong style="color:#1e3a5f">카카오톡, 텔레그램, SNS DM 등 플랫폼별 대화 내역이 핵심 증거입니다</strong></p>\n<p>가해자가 보낸 <strong>협박 메시지, 금전 요구 문자, 유포 예고 메시지</strong>를 캡처하세요. 대화 내용 전체를 시간순으로 저장하는 것이 중요하며, 중간에 삭제된 부분이 없어야 합니다.</p>\n<p>카카오톡은 <strong>대화 내보내기</strong> 기능으로 텍스트 파일을 추출할 수 있고, 텔레그램은 <strong>Export chat history</strong>로 백업합니다. 음성통화로 협박받은 경우 <strong>통화 녹음</strong>도 증거가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 대화 전체 캡처(삭제 금지) → 플랫폼별 내보내기 → 음성 녹음 포함</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/digital-sex-crime" style="color:#1565c0;font-weight:600">내 디지털성범죄 피해 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 유포 경로·플랫폼 정보와 가해자 특정 단서를 정리하세요',
        content:
          '<p><strong style="color:#1e3a5f">어떤 플랫폼에서 어떻게 유포되었는지 경로를 특정해야 수사 속도가 빨라집니다</strong></p>\n<p>피해 콘텐츠가 게시된 <strong>사이트명, 게시판 이름, 채팅방 이름</strong>을 구체적으로 기록하세요. 같은 콘텐츠가 여러 곳에 유포된 경우 <strong>각각의 URL을 모두 정리</strong>하세요.</p>\n<p>가해자를 특정할 수 있는 단서도 함께 수집합니다. <strong>닉네임, 프로필 사진, 계좌번호(금전 요구 시), 전화번호, IP 주소</strong> 등을 정리해두면 수사기관이 신속하게 추적할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">정리 항목: 사이트·게시판·채팅방 → 가해자 닉네임·계좌·전화번호</blockquote>',
      },
      {
        title: '넷째, 디지털성범죄 피해자 지원센터에 삭제 지원을 먼저 요청하세요',
        content:
          '<p><strong style="color:#1e3a5f">한국여성인권진흥원 디지털성범죄 피해자 지원센터(02-735-8994)에서 무료 삭제 지원을 받을 수 있습니다</strong></p>\n<p>경찰 수사와 별개로 <strong>피해 영상의 확산을 막는 것이 시급</strong>합니다. 디지털성범죄 피해자 지원센터에 연락하면 <strong>불법촬영물 삭제 지원, 모니터링, 법률·심리 상담</strong>을 무료로 받을 수 있습니다.</p>\n<p>방송통신심의위원회를 통한 <strong>시정요구</strong>도 병행하세요. 국내 사이트는 삭제 요청 후 보통 <strong>24~72시간 내 조치</strong>됩니다. 해외 사이트는 시간이 더 걸리므로 조기 신청이 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">지원: 피해자지원센터(02-735-8994) → 삭제 지원 + 모니터링 + 법률상담 무료</blockquote>',
      },
      {
        title: '다섯째, 경찰서 방문 전 피해 경위서를 미리 작성해 가세요',
        content:
          '<p><strong style="color:#1e3a5f">피해 사실을 시간순으로 정리한 경위서가 있으면 조사가 훨씬 원활합니다</strong></p>\n<p>경위서에는 <strong>①최초 피해 인지 시점 ②가해자와의 관계 ③피해 내용(촬영·유포·협박 등) ④피해 발생 경위 ⑤현재까지 확인된 유포 범위</strong>를 시간순으로 기술하세요.</p>\n<p>증거 목록을 <strong>별도 표로 정리</strong>하여 첨부하면 담당 수사관이 사건 전체를 빠르게 파악할 수 있습니다. 피해 신고는 가까운 <strong>경찰서 사이버수사팀</strong> 또는 <strong>경찰청 사이버수사국(182)</strong>에서 접수합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">경위서 구성: 피해 인지 시점 → 가해자 관계 → 피해 내용 → 유포 범위 → 증거 목록표</blockquote>',
      },
    ],
    cases: [
      {
        title: '아동·청소년 성착취물 제작·유포 협박에 대한 대법원 판결',
        summary:
          '대법원 2025도7992 사건(2025.08.14 선고)에서 법원은 아동·청소년이 등장하여 성적 행위를 하는 영상물은 당사자 동의 여부나 사적 소지 목적과 관계없이 아동·청소년성착취물에 해당하며, 이를 유포하겠다는 협박 역시 처벌 대상이라고 판시했습니다.',
        takeaway:
          '디지털성범죄는 피해자의 동의 여부와 무관하게 성립할 수 있습니다. 가해자가 "동의 하에 촬영한 것"이라 주장하더라도 유포·협박 행위 자체가 범죄이므로, 협박 증거를 빠짐없이 확보해 신고하세요.',
      },
    ],
    faq: [
      {
        question: '캡처한 불법 영상을 내가 소지하고 있어도 괜찮은가요?',
        answer: '<strong>수사 목적의 증거 확보를 위한 소지는 처벌 대상이 아닙니다</strong>. 다만 제3자에게 전달하거나 다른 용도로 사용하면 문제가 될 수 있으므로, 증거 보관 용도로만 별도 저장하고 경찰에 그대로 제출하세요.',
      },
      {
        question: '가해자가 누구인지 모르는데도 신고할 수 있나요?',
        answer: '<strong>가해자를 모르더라도 신고할 수 있습니다</strong>. 닉네임, 게시 플랫폼, 대화 기록 등 확보된 단서를 제출하면 경찰 사이버수사팀에서 IP 추적 등으로 수사를 진행합니다.',
      },
      {
        question: '해외 사이트에 올라간 영상도 삭제 요청이 가능한가요?',
        answer: '방송통신심의위원회를 통해 <strong>해외 사이트에도 삭제 요청</strong>이 가능합니다. 다만 국내 사이트보다 시간이 오래 걸리며, 디지털성범죄 피해자 지원센터를 통해 국제 공조 삭제 지원을 받을 수 있습니다.',
      },
      {
        question: '증거를 확보하기 전에 영상이 삭제되면 어떻게 하나요?',
        answer: '삭제된 영상이라도 <strong>사이트 캐시, 웹 아카이브, 수사기관의 디지털 포렌식</strong>을 통해 복구할 수 있는 경우가 있습니다. 삭제 전 확보한 URL과 게시 정보라도 정리하여 수사기관에 제출하세요.',
      },
      {
        question: '신고 후 피해 사실이 주변에 알려질까 걱정됩니다',
        answer: '성폭력범죄의처벌등에관한특례법에 따라 <strong>수사·재판 과정에서 피해자의 신원이 공개되지 않습니다</strong>. 수사기관에 비공개 조사를 요청할 수 있으며, 피해자 국선변호사 제도도 무료로 이용 가능합니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/digital-sex-crime',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '디지털성범죄 진단', href: '/diagnosis/digital-sex-crime' },
      { label: '불법촬영 피해 증거 확보와 신고', href: '/guide/digital-sex-crime/hidden-camera-evidence-report' },
      { label: '불법촬영물 삭제 지원 신청', href: '/guide/digital-sex-crime/illegal-filming-deletion-support' },
      { label: '딥페이크 음란물 신고 및 삭제', href: '/guide/digital-sex-crime/deepfake-pornography-report-removal' },
    ],
  },
  {
    domain: 'dismissal',
    slug: 'dismissal-reason-request-template',
    keyword: '해고 사유서 요청 방법과 양식',
    questionKeyword: '해고 사유서를 달라고 했는데 회사가 안 주면 어떻게 하나요?',
    ctaKeyword: '해고 사유서 요청',
    type: '템플릿형',
    perspective: '피해자',
    meta: {
      title: '해고 사유서 요청 3단계 — 양식과 거부 시 대응법 | 로앤가이드',
      description: '갑자기 해고 통보를 받았는데 사유서를 주지 않는다면, 근로기준법 제27조에 따른 서면 요청 방법과 내용증명 양식, 거부 시 구제신청까지 지금 확인하세요.',
    },
    intro: '어느 날 갑자기 "내일부터 나오지 마세요"라는 통보를 받았습니다. 해고 사유를 물어도 구두로만 얼버무리고, 서면 사유서는 주지 않습니다. 부당해고를 다투려면 사유서가 핵심 증거인데, 어떻게 받아야 할지 막막합니다. 해고 사유서 요청 절차와 양식을 정리해보세요.',
    sections: [
      {
        title: '첫째, 근로기준법 제27조에 따라 사용자는 해고 사유를 서면으로 통지할 의무가 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제27조에 따르면 사용자는 해고 사유와 해고 시기를 서면으로 통지해야 하며, 이를 위반한 해고는 효력이 없습니다</strong></p>\n<p><strong>해고 사유서</strong>는 사용자가 근로자에게 해고 사유와 해고 시기를 적어 교부하는 문서입니다. 이 문서가 없으면 <strong>해고 자체가 무효</strong>가 됩니다. 구두 통보만으로는 적법한 해고가 성립하지 않습니다.</p>\n<p>따라서 해고 통보를 받은 즉시 회사에 <strong>"해고 사유와 시기를 서면으로 교부해 달라"</strong>고 요청하세요. 사용자가 이를 거부하면 그 자체가 부당해고의 증거가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 근로기준법 제27조 → 서면 통지 없는 해고 = 무효 → 사유서 미교부 자체가 부당해고 증거</blockquote>',
      },
      {
        title: '둘째, 내용증명으로 해고 사유서 교부를 공식 요청하세요',
        content:
          '<p><strong style="color:#1e3a5f">구두 요청만으로는 증거가 남지 않으므로, 내용증명 우편으로 요청하세요</strong></p>\n<p>내용증명에 기재할 내용은 다음과 같습니다. <strong>①본인의 인적사항 ②입사일과 소속 부서 ③해고 통보 일자 ④근로기준법 제27조에 따른 해고 사유서 교부 요청 ⑤답변 기한(수령 후 7일 이내)</strong></p>\n<p>내용증명은 가까운 <strong>우체국에서 3부 작성</strong>(발신인·수신인·우체국 각 1부)하여 보냅니다. 비용은 약 3,000~5,000원입니다. 이메일이나 등기우편으로도 가능하지만, <strong>내용증명이 법적 증거력이 가장 높습니다</strong>.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기재 항목: 인적사항 + 입사일 + 해고 통보일 + 사유서 요청 + 7일 기한</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/dismissal" style="color:#1565c0;font-weight:600">내 해고 상황에 맞는 대응법 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 회사가 사유서 교부를 거부하면 노동위원회에 구제신청을 하세요',
        content:
          '<p><strong style="color:#1e3a5f">서면 통지 없는 해고는 그 자체로 부당해고에 해당하여 구제신청 대상입니다</strong></p>\n<p>내용증명을 보냈는데도 회사가 <strong>7일 이내에 사유서를 교부하지 않으면</strong>, 이는 근로기준법 제27조 위반입니다. 이 경우 <strong>노동위원회에 부당해고 구제신청</strong>을 할 수 있습니다.</p>\n<p>구제신청은 <strong>해고일로부터 3개월 이내</strong>에 사업장 소재지 관할 지방노동위원회에 접수합니다. 신청서에 <strong>①해고 사실 ②서면 통지 미이행 사실 ③내용증명 발송 증거</strong>를 첨부하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 사유서 거부 확인 → 3개월 이내 구제신청 → 내용증명 증거 첨부</blockquote>',
      },
      {
        title: '넷째, 해고 사유서 요청과 동시에 확보해야 할 증거를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">해고 관련 증거는 퇴사 전에 확보해야 합니다</strong></p>\n<p>해고 통보 즉시 다음 자료를 확보하세요. <strong>①근로계약서 사본 ②급여명세서(최근 3개월) ③해고 통보 문자·이메일·녹취 ④출근 기록·업무일지 ⑤인사규정·취업규칙</strong></p>\n<p>특히 <strong>해고 통보 당시의 대화 녹음</strong>은 사유서가 없을 때 가장 중요한 증거가 됩니다. 대한민국에서는 대화 당사자의 녹음이 적법하므로, 상사와의 대화를 녹음해 보관하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">퇴사 전 필수: 근로계약서 + 급여명세서 + 해고 통보 녹취 + 인사규정 확보</blockquote>',
      },
      {
        title: '다섯째, 해고 사유서 양식 — 이 항목이 포함되어야 합니다',
        content:
          '<p><strong style="color:#1e3a5f">유효한 해고 사유서에는 최소 4가지 필수 항목이 포함되어야 합니다</strong></p>\n<p>해고 사유서에 반드시 포함되어야 할 항목: <strong>①해고 대상 근로자 인적사항 ②구체적 해고 사유(사유가 복수인 경우 각각 기재) ③해고 시기(해고 효력 발생일) ④사용자 서명 또는 직인</strong></p>\n<p>해고 사유가 <strong>"근무 태도 불량" 등 추상적 문구</strong>로만 기재된 경우에도 서면 통지 의무를 다하지 못한 것으로 볼 수 있습니다. 사유는 <strong>구체적 사실관계</strong>(일시, 행위, 규정 위반 내용)가 적시되어야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">필수 항목: 근로자 정보 + 구체적 사유 + 해고 시기 + 사용자 서명</blockquote>',
      },
    ],
    cases: [
      {
        title: '근로자 지위 확인과 부당해고 구제에 대한 대법원 판결',
        summary:
          '대법원 2023두54914 사건(2026.01.29 선고)에서 법원은 근로기준법상 근로자인지 여부는 계약 형식이 아니라 실질적으로 사용자에게 종속적인 관계에서 근로를 제공했는지에 따라 판단해야 하며, 영업양도가 이루어진 경우 근로관계는 포괄적으로 승계된다고 판시했습니다.',
        takeaway:
          '도급·위탁 등 계약 형식과 관계없이 실질적으로 근로자라면 해고 사유서 교부 의무가 적용됩니다. 회사가 "근로자가 아니다"라고 주장하더라도 실질에 따라 부당해고를 다툴 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '해고 사유서를 안 주면 바로 부당해고인가요?',
        answer: '<strong>근로기준법 제27조에 따라 서면 통지 없는 해고는 효력이 없습니다</strong>. 즉, 사유서를 교부하지 않은 것만으로도 해고가 무효이므로 별도로 사유의 정당성을 따질 필요 없이 부당해고로 인정될 수 있습니다.',
      },
      {
        question: '이메일로 해고 통보를 받았으면 서면 통지에 해당하나요?',
        answer: '판례에 따르면 이메일도 <strong>서면에 준하는 것으로 인정</strong>될 수 있습니다. 다만 이메일에 해고 사유와 시기가 구체적으로 적시되어야 하며, 단순히 "내일부터 출근하지 마세요"만으로는 적법한 서면 통지로 보기 어렵습니다.',
      },
      {
        question: '수습 기간 중에도 해고 사유서를 받을 수 있나요?',
        answer: '수습 기간 중이라도 <strong>3개월이 경과한 후에 해고</strong>하려면 서면 통지 의무가 적용됩니다. 수습 3개월 이내에는 해고 예고 의무가 면제되지만, 부당해고 구제신청은 여전히 가능합니다.',
      },
      {
        question: '해고 사유서에 사유가 여러 개 적혀 있으면 어떻게 대응하나요?',
        answer: '사유서에 기재된 <strong>각각의 사유에 대해 반박 자료를 준비</strong>하세요. 노동위원회는 사유서에 기재된 사유만을 심사 대상으로 하므로, 사유서에 없는 새로운 사유를 회사가 추가 주장하면 인정되지 않습니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/dismissal',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '해고 진단', href: '/diagnosis/dismissal' },
      { label: '부당해고 당했을 때 먼저 할 3가지', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '부당해고 구제신청 절차와 기간', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '해고예고수당 못 받았을 때 대처법', href: '/guide/dismissal/dismissal-notice-pay' },
    ],
  },
  {
    domain: 'divorce',
    slug: 'consensual-divorce-required-documents',
    keyword: '협의이혼 신청 시 필요한 서류 목록',
    questionKeyword: '협의이혼을 신청하려면 어떤 서류를 준비해야 하나요?',
    ctaKeyword: '협의이혼 서류',
    type: '준비서류형',
    perspective: '피해자',
    meta: {
      title: '협의이혼 필요 서류 6가지 — 신청 전 체크리스트 | 로앤가이드',
      description: '협의이혼을 결심했는데 어떤 서류를 챙겨야 할지 모르겠다면, 가정법원 제출 필수 서류 6가지와 양육 합의서·재산분할서 작성 순서를 지금 확인하세요.',
    },
    intro: '부부가 함께 이혼에 합의했습니다. 재판 없이 협의이혼을 하고 싶은데, 법원에 무엇을 가져가야 하는지 모르겠습니다. 서류가 하나라도 빠지면 다시 방문해야 하니 한 번에 준비하는 것이 중요합니다. 협의이혼 신청에 필요한 서류를 정리해보세요.',
    sections: [
      {
        title: '첫째, 협의이혼의사확인 신청서를 작성하세요',
        content:
          '<p><strong style="color:#1e3a5f">민법 제836조에 따라 협의이혼은 가정법원의 확인을 받아야 효력이 발생합니다</strong></p>\n<p>협의이혼의 첫 단계는 <strong>협의이혼의사확인 신청서</strong>를 작성하는 것입니다. 이 양식은 <strong>대법원 전자민원센터</strong>(efamily.scourt.go.kr)에서 다운로드하거나 관할 가정법원에서 직접 받을 수 있습니다.</p>\n<p>신청서에는 <strong>부부 쌍방의 인적사항, 혼인신고일, 미성년 자녀 유무, 재산분할·양육비 합의 여부</strong> 등을 기재합니다. 부부가 함께 서명·날인해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">작성: 신청서 다운로드(전자민원센터) → 부부 인적사항·자녀 정보 기재 → 쌍방 서명</blockquote>',
      },
      {
        title: '둘째, 가족관계증명서와 혼인관계증명서를 발급받으세요',
        content:
          '<p><strong style="color:#1e3a5f">두 서류 모두 발급일로부터 3개월 이내의 것을 제출해야 합니다</strong></p>\n<p><strong>가족관계증명서</strong>는 미성년 자녀의 존재를 확인하기 위해 필요하고, <strong>혼인관계증명서</strong>는 현재 혼인 상태를 증명합니다. 두 서류 모두 <strong>부부 각각 1부씩</strong> 준비하세요.</p>\n<p>발급은 <strong>주민센터, 대법원 전자가족관계등록시스템</strong>(efamily.scourt.go.kr), <strong>정부24</strong>(gov.kr)에서 가능합니다. 온라인 발급 시 공동인증서가 필요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">필수: 가족관계증명서(부부 각 1부) + 혼인관계증명서(부부 각 1부) → 3개월 이내 발급분</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/divorce" style="color:#1565c0;font-weight:600">내 이혼 상황에 맞는 준비사항 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 미성년 자녀가 있으면 양육에 관한 협의서를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">미성년 자녀가 있는 경우 양육자 지정·양육비·면접교섭권에 대한 합의가 반드시 필요합니다</strong></p>\n<p>민법 제836조의2에 따라 미성년 자녀가 있는 부부는 <strong>①친권자 지정 ②양육자 지정 ③양육비 부담 ④면접교섭권 행사 방법</strong>에 대해 협의해야 합니다. 이 합의 내용을 <strong>양육사항 협의서</strong>에 작성합니다.</p>\n<p>양육비 금액은 <strong>양육비 산정기준표</strong>(대법원 제공)를 참고하세요. 합의가 되지 않으면 법원이 직권으로 결정하며, 이 경우 <strong>이혼 숙려기간이 3개월로 연장</strong>될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">양육 합의: 친권자 + 양육자 + 양육비 + 면접교섭권 → 미합의 시 숙려기간 3개월</blockquote>',
      },
      {
        title: '넷째, 재산분할과 위자료에 관한 합의서를 작성하세요',
        content:
          '<p><strong style="color:#1e3a5f">민법 제839조의2에 따라 이혼 시 혼인 중 형성한 재산에 대해 분할을 청구할 수 있습니다</strong></p>\n<p>협의이혼 시 <strong>재산분할과 위자료에 대한 합의</strong>는 필수는 아니지만, 이혼 후 분쟁을 예방하려면 미리 정해두는 것이 좋습니다. 합의서에는 <strong>부동산, 예금, 보험, 차량 등 재산 목록과 분할 비율</strong>을 구체적으로 적으세요.</p>\n<p>합의서를 <strong>공증</strong>받아두면 나중에 상대방이 이행하지 않을 때 별도 소송 없이 <strong>강제집행</strong>할 수 있습니다. 공증 비용은 금액에 따라 다르지만 보통 10~30만원 수준입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">재산분할 합의서: 재산 목록 + 분할 비율 + 위자료 → 공증 시 강제집행 가능</blockquote>',
      },
      {
        title: '다섯째, 법원 방문 시 신분증과 도장을 꼭 지참하세요',
        content:
          '<p><strong style="color:#1e3a5f">부부 모두 법원에 직접 출석해야 하며, 신분증 미지참 시 절차가 진행되지 않습니다</strong></p>\n<p>협의이혼의사확인 신청 시 <strong>부부 모두 관할 가정법원에 직접 출석</strong>해야 합니다. 준비물은 <strong>①신분증(주민등록증 또는 운전면허증) ②도장(서명 가능) ③신청서 및 첨부서류</strong>입니다.</p>\n<p>신청 접수 후 <strong>숙려기간</strong>이 부여됩니다. 미성년 자녀가 없으면 <strong>1개월</strong>, 있으면 <strong>3개월</strong>입니다. 숙려기간 경과 후 다시 법원에 출석하여 이혼의사를 확인받으면 <strong>이혼의사확인서</strong>가 발급됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">법원 출석: 부부 동반 + 신분증 + 도장 → 숙려기간(자녀 없으면 1개월, 있으면 3개월) → 확인서 발급</blockquote>',
      },
    ],
    cases: [
      {
        title: '재판상 이혼 후 재산분할 기준시점에 대한 대법원 판결',
        summary:
          '대법원 2025스595 사건(2025.08.14 선고)에서 법원은 재산분할의 대상과 가액은 법원이 직권으로 조사·판단할 수 있으며, 재판상 이혼의 경우 사실심 변론종결일을, 조정 성립의 경우 조정 성립일을 기준으로 정해야 한다고 판시했습니다.',
        takeaway:
          '협의이혼 시에도 재산분할은 중요한 쟁점입니다. 이혼 합의 시점을 기준으로 재산 목록을 확정하고, 이후 재산 변동이 있으면 분쟁의 소지가 있으므로 합의서에 기준시점을 명시하세요.',
      },
    ],
    faq: [
      {
        question: '협의이혼을 신청하면 비용이 얼마나 드나요?',
        answer: '협의이혼의사확인 신청 수수료는 <strong>무료</strong>입니다. 다만 가족관계증명서·혼인관계증명서 발급 비용(각 1,000원), 이혼신고 후 호적정리 비용 등 소액의 부대비용이 발생합니다.',
      },
      {
        question: '배우자가 해외에 있어도 협의이혼이 가능한가요?',
        answer: '원칙적으로 <strong>부부 모두 법원에 직접 출석</strong>해야 합니다. 다만 재외국민의 경우 <strong>재외공관(대사관·영사관)</strong>을 통해 이혼의사 확인 절차를 진행할 수 있으니, 해당 공관에 문의하세요.',
      },
      {
        question: '숙려기간을 단축할 수 있나요?',
        answer: '<strong>가정폭력, 아동학대 등 긴급한 사유</strong>가 있으면 법원에 숙려기간 면제 또는 단축을 신청할 수 있습니다. 이를 위해 진단서, 고소장 사본, 보호명령 결정문 등 소명자료가 필요합니다.',
      },
      {
        question: '이혼의사확인서를 받은 후 기한이 있나요?',
        answer: '이혼의사확인서를 받은 후 <strong>3개월 이내에 이혼신고</strong>를 해야 합니다. 기한을 넘기면 확인서가 무효가 되어 처음부터 다시 절차를 진행해야 합니다.',
      },
      {
        question: '협의이혼 후에도 재산분할을 청구할 수 있나요?',
        answer: '네, <strong>이혼 후 2년 이내</strong>에 재산분할 청구가 가능합니다(민법 제839조의2 제3항). 다만 시간이 지날수록 재산 확인이 어려워지므로 이혼 전에 합의하는 것이 유리합니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/divorce',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '이혼 진단', href: '/diagnosis/divorce' },
      { label: '협의이혼 준비서류 체크리스트', href: '/guide/divorce/consensual-divorce-required-documents-checklist' },
      { label: '이혼 재산분할 절차', href: '/guide/divorce/divorce-property-division' },
      { label: '양육비 산정 기준과 청구 방법', href: '/guide/divorce/child-custody-support' },
    ],
  },
  {
    domain: 'drug-crime',
    slug: 'first-offense-probation-cases',
    keyword: '마약 초범 집행유예 판례 분석',
    questionKeyword: '마약 초범인데 집행유예를 받을 수 있나요?',
    ctaKeyword: '마약 초범 집행유예',
    type: '판례형',
    perspective: '가해자',
    meta: {
      title: '마약 초범 집행유예 3가지 판례 — 양형 기준 분석 | 로앤가이드',
      description: '마약 사건 초범으로 혐의를 받고 있다면, 집행유예가 실제로 선고된 대법원 판례와 양형 감경 조건 4가지, 치료 프로그램 참여 방법까지 한눈에 지금 확인하세요.',
    },
    intro: '처음으로 마약류 사건에 연루되었습니다. 지인의 권유로 한 번 투약했을 뿐인데, 구속될까 봐 잠을 이루지 못합니다. 초범이면 집행유예가 나올 수 있다는 말을 들었지만, 실제로 어떤 경우에 가능한지 확인하고 싶습니다. 판례를 통해 집행유예 가능성을 분석해보세요.',
    sections: [
      {
        title: '첫째, 마약류관리법상 투약·흡연죄의 법정형을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">마약류 관리에 관한 법률 제60조에 따라 향정신성의약품 투약은 10년 이하의 징역에 해당합니다</strong></p>\n<p>마약류관리법은 마약류를 <strong>마약, 향정신성의약품, 대마</strong> 3가지로 분류하며, 각각 법정형이 다릅니다. 필로폰(메스암페타민)은 <strong>향정신성의약품</strong>에 해당하여 투약 시 10년 이하의 징역에 처해집니다.</p>\n<p>대마 흡연은 <strong>5년 이하의 징역</strong>으로 상대적으로 법정형이 낮습니다. 법정형의 범위 내에서 실제 선고형은 <strong>양형기준에 따라 결정</strong>되며, 초범 여부가 중요한 양형 요소입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">법정형: 향정(필로폰) 투약 10년 이하 징역 / 대마 흡연 5년 이하 징역 → 초범 감경 가능</blockquote>',
      },
      {
        title: '둘째, 양형위원회 양형기준에서 초범 감경 요소를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">양형기준상 마약 단순 투약 초범은 징역 8월~2년이 권고 범위이며, 집행유예 가능</strong></p>\n<p>대법원 양형위원회는 마약류 사건의 양형기준을 마련하고 있습니다. <strong>단순 투약·흡연(자가 소비 목적)</strong>의 경우 감경 인자가 있으면 <strong>징역 8월~2년</strong>이 권고됩니다.</p>\n<p>초범에게 유리한 <strong>감경 인자</strong>로는 ①<strong>동종 전과 없음</strong> ②자발적 자수·수사 협조 ③투약 횟수가 극히 적음 ④치료·재활 의지 표명 등이 있습니다. 이러한 요소가 인정되면 <strong>집행유예 선고 가능성</strong>이 높아집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">감경 인자: 초범 + 자수·수사 협조 + 소량 투약 + 재활 의지 → 집행유예 가능</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/drug-crime" style="color:#1565c0;font-weight:600">내 마약 사건 양형 가능성 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 집행유예를 위해 변호인과 함께 준비해야 할 자료를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">재판부에 제출할 양형 자료가 집행유예 여부를 결정합니다</strong></p>\n<p>집행유예 선고를 위해 준비해야 할 핵심 자료: <strong>①마약류 치료·재활 프로그램 참여 확인서 ②주거지 확인서(도주 우려 없음 소명) ③직장 재직증명서 또는 사업자등록증 ④가족 탄원서 ⑤반성문</strong></p>\n<p>특히 <strong>한국마약퇴치운동본부</strong>(1899-0893)의 상담·치료 프로그램에 자발적으로 참여한 사실은 법원에서 긍정적으로 평가합니다. 기소 전이라도 <strong>미리 프로그램에 등록</strong>하여 재활 의지를 증명하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">양형 자료: 치료 프로그램 참여 + 재직증명 + 가족 탄원서 + 반성문</blockquote>',
      },
      {
        title: '넷째, 이수명령·수강명령 병과 가능성을 이해하세요',
        content:
          '<p><strong style="color:#1e3a5f">마약류관리법 제40조의2에 따라 유죄 판결 시 이수명령 또는 수강명령이 원칙적으로 병과됩니다</strong></p>\n<p>마약류사범에 대해 선고유예 외의 유죄판결을 선고하는 경우, 법원은 <strong>수강명령이나 이수명령을 원칙적으로 병과</strong>합니다. 수강명령은 집행유예 기간 내에, 이수명령은 벌금 이상의 형 선고 시 병과됩니다.</p>\n<p>이수명령은 마약류 <strong>중독성으로 인한 재범 방지</strong>를 위한 치료·교육 프로그램입니다. 시간은 보통 <strong>40~200시간</strong>이며, 성실히 이행하면 재범 시에도 양형에 긍정적 영향을 줍니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">이수명령: 유죄 판결 시 원칙 병과 → 40~200시간 치료·교육 → 성실 이행 중요</blockquote>',
      },
      {
        title: '다섯째, 구속 영장 방어와 보석 청구 전략을 세우세요',
        content:
          '<p><strong style="color:#1e3a5f">초범이라도 마약 사건은 구속 수사가 원칙이므로, 영장실질심사 대비가 필수입니다</strong></p>\n<p>마약 사건은 증거인멸·도주 우려를 이유로 <strong>구속영장이 청구되는 비율이 높습니다</strong>. 영장실질심사에서 <strong>①고정 주거지 ②안정적 직업 ③가족 유대 ④증거인멸 불가능 소명</strong>이 중요합니다.</p>\n<p>구속된 경우에도 <strong>보석(구속적부심)</strong>을 청구할 수 있습니다. 초범이고 단순 투약이며 수사에 협조한 점을 소명하면 보석이 허가될 수 있습니다. 보석보증금은 통상 <strong>1,000만~3,000만원</strong> 수준입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">영장 방어: 고정 주거 + 직업 + 가족 유대 → 보석: 보증금 1,000~3,000만원</blockquote>',
      },
    ],
    cases: [
      {
        title: '마약류 불능미수범에 대한 이수명령 병과 인정 사례',
        summary:
          '대법원 2025도2199 사건(2025.05.29 선고)에서 법원은 향정신성의약품 투약죄의 불능미수범도 마약류관리법 제40조의2가 정한 "마약류사범"에 해당하며, 이수명령을 병과할 수 있다고 판시했습니다. 이수명령의 취지는 마약류 중독성으로 인한 재범 방지와 건강한 사회복귀 지원에 있다고 밝혔습니다.',
        takeaway:
          '초범이라도 유죄 판결 시 이수명령이 병과될 수 있습니다. 재판 전 자발적으로 치료 프로그램에 참여한 사실을 증명하면 양형에서 유리하게 작용할 수 있으니, 기소 전이라도 한국마약퇴치운동본부에 먼저 상담을 받으세요.',
      },
    ],
    faq: [
      {
        question: '마약 초범이면 반드시 집행유예가 나오나요?',
        answer: '<strong>초범이라고 반드시 집행유예가 나오는 것은 아닙니다</strong>. 투약 횟수, 마약류 종류, 반성 정도, 재활 의지 등을 종합적으로 고려합니다. 다만 초범 + 단순 소량 투약 + 재활 참여의 경우 집행유예 비율이 높은 편입니다.',
      },
      {
        question: '마약 초범인데 모발검사에서 양성이 나왔습니다. 어떻게 해야 하나요?',
        answer: '모발검사 양성 결과는 <strong>투약 사실의 강력한 증거</strong>가 됩니다. 부인하기보다는 <strong>변호인과 상의하여 자백 시점과 방법을 전략적으로 결정</strong>하는 것이 양형에 유리합니다. 자발적 자백은 감경 사유가 됩니다.',
      },
      {
        question: '마약 전과가 생기면 취업에 어떤 영향이 있나요?',
        answer: '마약류 전과는 <strong>공무원, 교육기관, 의료기관 등 일부 직종 취업에 제한</strong>이 있습니다. 다만 집행유예 기간이 경과하면 형의 선고 효력이 실효되며, 5년 후 전과 말소 등 제도를 확인하세요.',
      },
      {
        question: '지인이 강제로 투약하게 했는데도 처벌받나요?',
        answer: '강제 투약의 경우에도 <strong>본인의 투약 사실 자체는 범죄</strong>에 해당합니다. 다만 강요에 의한 투약이었다는 점은 <strong>양형에서 유리한 감경 사유</strong>가 될 수 있으며, 강요한 사람에 대한 별도 고소도 가능합니다.',
      },
      {
        question: '마약 투약 후 자수하면 형이 줄어드나요?',
        answer: '형법 제52조에 따라 <strong>자수한 경우 그 형을 감경 또는 면제</strong>할 수 있습니다. 수사기관에 발각되기 전 자발적으로 자수하면 양형에서 상당히 유리하며, 집행유예 가능성이 높아집니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/drug-crime',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '마약 사건 진단', href: '/diagnosis/drug-crime' },
      { label: '마약 사건 첫 대응 가이드', href: '/guide/drug-crime/drug-crime-first-response' },
      { label: '마약 수사 절차와 처벌 기준', href: '/guide/drug-crime/drug-crime-investigation-process' },
      { label: '마약 사건 변호사 선임 시 확인사항', href: '/guide/drug-crime/drug-crime-lawyer-checklist' },
    ],
  },
  {
    domain: 'dui',
    slug: 'dui-administrative-license-procedure',
    keyword: '음주운전 면허 행정처분 절차',
    questionKeyword: '음주운전으로 걸렸는데 면허 행정처분은 어떻게 진행되나요?',
    ctaKeyword: '음주운전 면허 행정처분',
    type: '절차타임라인형',
    perspective: '가해자',
    meta: {
      title: '음주운전 면허 행정처분 5단계 — 절차와 대응법 | 로앤가이드',
      description: '음주운전으로 적발되어 면허 정지나 취소가 걱정이라면, 임시운전증명서 발급부터 의견제출·청문·행정심판까지 5단계 행정처분 절차를 지금 확인하세요.',
    },
    intro: '새벽에 대리운전 대신 직접 운전대를 잡았다가 음주 단속에 걸렸습니다. 혈중알코올농도 0.08%로 측정되었고, 면허가 취소될 수 있다는 말을 들었습니다. 형사처벌과 별개로 면허 행정처분은 어떤 절차로 진행되는지 확인해보세요.',
    timelineSteps: ['음주 측정·적발', '임시운전증명서 발급(40일)', '면허 행정처분 사전통지', '의견제출·청문', '처분 결정·이의신청'],
    sections: [
      {
        title: '첫째, 음주 단속 적발 시 현장에서 임시운전증명서를 발급받습니다',
        content:
          '<p><strong style="color:#1e3a5f">도로교통법 제93조에 따라 혈중알코올농도 0.03% 이상이면 면허 정지 또는 취소 대상입니다</strong></p>\n<p>음주 단속에 적발되면 경찰관이 <strong>운전면허증을 수거</strong>하고 대신 <strong>임시운전증명서</strong>를 발급합니다. 임시운전증명서의 유효기간은 <strong>40일</strong>이며, 이 기간 동안은 정상적으로 운전할 수 있습니다.</p>\n<p>혈중알코올농도에 따른 행정처분 기준: <strong>0.03~0.08% 미만 → 면허 정지(100일)</strong>, <strong>0.08% 이상 → 면허 취소</strong>, <strong>0.2% 이상 → 면허 취소 + 가중처벌</strong></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">단속: 면허증 수거 → 임시운전증명서 40일 → 농도별 정지/취소 결정</blockquote>',
      },
      {
        title: '둘째, 임시운전증명서 기간 내에 처분 사전통지서가 발송됩니다',
        content:
          '<p><strong style="color:#1e3a5f">경찰청 운전면허행정처분과에서 우편으로 사전통지서를 보냅니다</strong></p>\n<p>적발 후 약 <strong>2~3주 이내</strong>에 처분 사전통지서가 등기우편으로 발송됩니다. 통지서에는 <strong>예정된 처분 내용(면허 정지/취소), 처분 사유, 의견제출 기한</strong>이 기재되어 있습니다.</p>\n<p>통지서를 수령하면 <strong>의견제출 기한(보통 10일)</strong>을 반드시 확인하세요. 이 기한 내에 의견을 제출하지 않으면 통지서대로 처분이 확정됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">사전통지: 적발 후 2~3주 → 예정 처분·사유·기한 기재 → 의견제출 기한 10일</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/dui" style="color:#1565c0;font-weight:600">내 음주운전 면허처분 대응법 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 의견제출서를 작성하여 감경을 요청하세요',
        content:
          '<p><strong style="color:#1e3a5f">도로교통법 시행규칙 별표 28에 따라 일정 요건 충족 시 처분이 감경될 수 있습니다</strong></p>\n<p>의견제출서에 <strong>감경 사유</strong>를 구체적으로 적어 제출하면 처분이 줄어들 수 있습니다. 주요 감경 사유: <strong>①생계형 운전(운전이 유일한 생계수단) ②음주 측정 결과에 대한 이의 ③교통사고 미발생 ④모범운전 경력 ⑤반성 및 재발 방지 서약</strong></p>\n<p>감경 요청 시 <strong>재직증명서, 소득증명서, 무사고 경력증명서, 반성문</strong> 등을 첨부하면 효과적입니다. 운전이 생업과 직결되는 경우(택배, 대리운전, 영업직 등) <strong>생계 곤란 소명</strong>이 가장 강력한 감경 사유입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">감경 사유: 생계형 운전 + 사고 미발생 + 모범운전 경력 + 반성문 → 소명자료 첨부</blockquote>',
      },
      {
        title: '넷째, 면허 취소 처분의 경우 청문 절차가 진행됩니다',
        content:
          '<p><strong style="color:#1e3a5f">행정절차법 제22조에 따라 면허 취소 시 청문 기회가 부여됩니다</strong></p>\n<p>면허 <strong>취소</strong> 처분의 경우, 사전통지 후 별도의 <strong>청문 절차</strong>가 진행됩니다. 청문은 처분청이 지정한 일시·장소에서 <strong>본인이 직접 출석</strong>하여 의견을 진술하는 절차입니다.</p>\n<p>청문에서는 <strong>변호사 또는 대리인 동행</strong>이 가능합니다. 혈중알코올농도 측정 과정의 위법성, 음주 측정기 오류 가능성, 생계 곤란 등을 <strong>구두로 소명</strong>할 수 있으며, 이 자리에서 추가 증거를 제출할 수도 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">청문: 취소 처분 시 진행 → 본인 출석 + 대리인 가능 → 구두 소명 + 추가 증거 제출</blockquote>',
      },
      {
        title: '다섯째, 처분 확정 후에도 행정심판·행정소송으로 다툴 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">처분에 불복하면 90일 이내 행정심판, 처분을 안 날로부터 90일 이내 행정소송 제기 가능</strong></p>\n<p>면허 행정처분이 확정되었더라도 <strong>행정심판위원회에 심판 청구</strong>(처분이 있음을 안 날로부터 90일 이내)를 하거나 <strong>행정법원에 취소소송</strong>을 제기할 수 있습니다.</p>\n<p>행정심판에서 인용되는 주요 사유: <strong>①측정 절차 위법(호흡측정 전 구강 확인 미실시) ②위드마크 공식 적용 오류 ③처분 비례원칙 위반(생계형 운전자에 대한 과도한 처분)</strong> 등입니다. 행정심판은 <strong>무료</strong>이며, 결정까지 약 60일 소요됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">불복: 행정심판(무료, 90일 이내) 또는 행정소송 → 측정 절차 위법·비례원칙 위반 주장</blockquote>',
      },
    ],
    cases: [
      {
        title: '음주운전 포함 복합 범죄의 양형에 대한 대법원 판결',
        summary:
          '대법원 2025도9717 사건(2025.11.06 선고)에서 법원은 항소심이 제1심의 양형이 과중하다고 인정하여 제1심판결을 파기하면서도 동일한 형을 선고한 것은 판결의 이유와 주문이 모순되는 위법이라고 판시했습니다. 확정판결 전후 범죄에 대해서는 각 주문별로 개별적으로 가벼운 형을 선고해야 한다고 밝혔습니다.',
        takeaway:
          '음주운전 행정처분과 형사처벌은 별도로 진행됩니다. 형사재판에서 양형이 감경되더라도 행정처분이 자동으로 변경되지 않으므로, 행정처분에 대해서도 별도로 의견제출이나 행정심판을 통해 대응하세요.',
      },
    ],
    faq: [
      {
        question: '면허 정지와 취소의 기준은 무엇인가요?',
        answer: '혈중알코올농도 <strong>0.03~0.08% 미만이면 면허 정지(100일)</strong>, <strong>0.08% 이상이면 면허 취소</strong>입니다. 2회 이상 적발 시에는 농도와 관계없이 취소 대상이며, 음주 사고 시 가중됩니다.',
      },
      {
        question: '면허가 취소되면 언제 다시 딸 수 있나요?',
        answer: '음주운전 면허 취소 시 <strong>결격기간 1~3년</strong>이 적용됩니다. 1회 위반은 1년, 2회 위반은 2년, 3회 이상 또는 사고 발생 시 3년입니다. 결격기간 경과 후 학과·기능·도로주행 시험을 다시 봐야 합니다.',
      },
      {
        question: '음주 측정 결과에 이의가 있으면 어떻게 하나요?',
        answer: '호흡 측정 결과에 이의가 있으면 <strong>현장에서 혈액 채취 측정을 요구</strong>할 수 있습니다. 이미 처분이 진행된 경우에는 의견제출서에 측정 과정의 절차 위반을 구체적으로 기재하세요.',
      },
      {
        question: '행정처분과 형사처벌은 각각 별도로 진행되나요?',
        answer: '네, <strong>면허 행정처분(정지/취소)과 형사처벌(벌금/징역)은 별개</strong>입니다. 형사재판에서 무죄가 나와도 행정처분이 자동 취소되지 않으며, 반대로 행정심판에서 처분이 취소되어도 형사처벌에는 영향이 없습니다.',
      },
      {
        question: '임시운전증명서 40일이 지나면 바로 운전 못 하나요?',
        answer: '임시운전증명서 유효기간(40일)이 만료되면 <strong>면허 정지/취소 처분이 확정될 때까지 운전할 수 없습니다</strong>. 이 기간에 운전하면 무면허 운전으로 추가 처벌을 받을 수 있으니 주의하세요.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/dui',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '음주운전 진단', href: '/diagnosis/dui' },
      { label: '음주운전 적발 후 첫 48시간 대응법', href: '/guide/dui/dui-first-48hours' },
      { label: '음주운전 초범 면허 처분 대응법', href: '/guide/dui/dui-first-license' },
      { label: '음주운전 2회 적발 시 대응법', href: '/guide/dui/dui-second-offense' },
    ],
  },
];
