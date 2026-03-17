import { SpokePage } from '../spoke-pages';

export const digitalSexCrimePages: SpokePage[] = [
  {
    domain: 'digital-sex-crime',
    slug: 'hidden-camera-evidence-report',
    keyword: '불법촬영 피해 발견 시 증거 확보와 신고',
    questionKeyword: '불법촬영 피해를 발견했는데 어떻게 증거를 확보하고 신고하나요?',
    ctaKeyword: '불법촬영 증거 확보·신고',
    type: '상황형',
    meta: {
      title: '불법촬영 피해 발견 시 증거 확보와 신고 | 로앤가이드',
      description:
        '불법촬영(몰카) 피해 발견 시 성폭력처벌법 제14조에 따른 증거 확보, 디지털성범죄 피해자지원센터 활용, 삭제 지원, 수사 절차를 정리했습니다.',
    },
    intro:
      '화장실이나 탈의실에서 몰래 카메라가 설치된 것을 발견했습니다. 또는 누군가 내 사진이나 영상을 동의 없이 촬영하여 유포하고 있다는 것을 알게 되었습니다. 충격과 공포 속에서도 지금 즉시 해야 할 조치가 있습니다.',
    timelineSteps: ['증거 확보·현장 보존', '경찰 신고', '삭제 지원 요청', '수사·재판 진행'],
    sections: [
      {
        title: '현장을 보존하고 증거를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">카메라를 발견해도 함부로 제거하지 말고 현장을 보존하세요</strong></p>\n<p>몰래 카메라를 발견한 경우 <strong>카메라를 제거하지 마세요</strong>. 설치 위치와 각도가 중요한 증거이기 때문입니다. ①카메라의 <strong>설치 위치와 상태를 사진·동영상</strong>으로 촬영하고, ②발견 <strong>일시와 장소</strong>를 기록하세요.</p>\n<p>온라인에 유포된 경우 ①해당 <strong>게시물 URL</strong>, ②<strong>스크린샷</strong>(작성자 ID, 게시 일시 포함), ③<strong>유포 경로</strong>(사이트, 채팅방 등)를 확보하세요. 스크린샷에 날짜와 시간이 표시되도록 하는 것이 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">현장: 카메라 제거 금지, 설치 상태 촬영 | 온라인: URL, 스크린샷, 유포 경로 확보</blockquote>',
      },
      {
        title: '경찰에 신고하고 성폭력처벌법 적용을 요청하세요',
        content:
          '<p><strong style="color:#1e3a5f">불법촬영은 성폭력처벌법 제14조에 따라 7년 이하 징역에 처해집니다</strong></p>\n<p><strong>성폭력범죄의 처벌 등에 관한 특례법 제14조</strong>(카메라 등을 이용한 촬영)에 따라 동의 없이 성적 욕망 또는 수치심을 유발할 수 있는 신체를 촬영한 자는 <strong>7년 이하 징역 또는 5,000만원 이하 벌금</strong>에 처해집니다.</p>\n<p>촬영물을 <strong>유포</strong>한 경우에는 <strong>7년 이하 징역 또는 5,000만원 이하 벌금</strong>, 영리 목적 유포는 <strong>3년 이상 유기징역</strong>으로 가중됩니다. 경찰 신고 시 증거 자료를 함께 제출하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">처벌: 불법촬영 7년/5,000만원 | 유포 7년/5,000만원 | 영리 유포 3년 이상</blockquote>',
      },
      {
        title: '디지털성범죄 피해자지원센터에 삭제 지원을 요청하세요',
        content:
          '<p><strong style="color:#1e3a5f">촬영물이 유포된 경우 전문 기관에서 삭제를 지원받을 수 있습니다</strong></p>\n<p><strong>한국여성인권진흥원 디지털성범죄 피해자지원센터</strong>(전화 02-735-8994)에서 ①유포 영상·사진의 <strong>삭제 지원</strong>, ②<strong>유포 현황 모니터링</strong>, ③<strong>수사·법률·의료 지원 연계</strong> 서비스를 무료로 제공합니다.</p>\n<p>센터에 연락하면 전문 상담원이 유포된 콘텐츠를 <strong>추적하여 삭제를 요청</strong>합니다. 해외 사이트에 유포된 경우에도 <strong>방송통신심의위원회</strong>를 통해 접속 차단 등 조치를 받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">지원: 디지털성범죄 피해자지원센터(02-735-8994) | 삭제·모니터링·법률 지원</blockquote>',
      },
      {
        title: '수사 절차를 이해하고 피해자 권리를 행사하세요',
        content:
          '<p><strong style="color:#1e3a5f">피해자는 수사·재판 과정에서 다양한 보호와 지원을 받을 수 있습니다</strong></p>\n<p>경찰에 신고하면 ①<strong>디지털 포렌식</strong>을 통해 촬영 기기와 저장 매체를 분석하고, ②<strong>유포 경로</strong>를 추적하여 가해자를 특정합니다. 수사 과정에서 피해자의 <strong>신원 비공개</strong>가 보장됩니다.</p>\n<p>재판 과정에서 피해자는 ①<strong>비공개 재판</strong> 요청, ②<strong>피해자 국선변호사</strong> 선임(무료), ③<strong>신뢰관계인 동석</strong>을 요청할 수 있습니다. 가해자에 대해 <strong>손해배상</strong>도 청구할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">피해자 권리: 신원 비공개, 비공개 재판, 국선변호사, 손해배상 청구</blockquote>',
      },
    ],
    cases: [
      {
        title: '화장실 몰래카메라 설치자가 실형을 선고받은 사례',
        summary:
          '관련 사례에서도 공중화장실에 초소형 카메라를 설치하여 불법촬영한 자에게 징역 1년 6개월이 선고된 경우가 있습니다. 카메라 설치 위치와 촬영 파일이 핵심 증거로 활용되었습니다.',
        takeaway:
          '비슷한 상황이라면 카메라 발견 시 제거하지 말고 설치 상태 그대로 사진을 찍은 후 즉시 경찰에 신고하세요.',
      },
      {
        title: '유포 영상이 디지털성범죄 피해자지원센터를 통해 삭제된 사례',
        summary:
          '관련 사례에서도 전 연인이 동의 없이 촬영한 영상을 온라인에 유포하였으나, 피해자지원센터를 통해 국내외 30여 개 사이트에서 해당 영상이 삭제된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 디지털성범죄 피해자지원센터(02-735-8994)에 즉시 연락하여 삭제와 모니터링을 요청하세요.',
      },
    ],
    faq: [
      {
        question: '동의 없이 촬영했지만 유포하지 않아도 처벌되나요?',
        answer:
          '네, <strong>촬영 행위 자체만으로도</strong> 성폭력처벌법 제14조 위반으로 7년 이하 징역 또는 5,000만원 이하 벌금에 처해집니다.',
      },
      {
        question: '연인 사이에 동의하고 찍었는데 헤어진 후 유포하면?',
        answer:
          '촬영 당시 동의가 있었더라도 <strong>유포에 대한 동의가 없으면</strong> 성폭력처벌법 제14조의3(촬영물 등 이용 협박·강요)에 해당할 수 있습니다.',
      },
      {
        question: '가해자가 누구인지 모르면 신고할 수 있나요?',
        answer:
          '네, <strong>성명불상</strong>으로 신고할 수 있습니다. 경찰이 디지털 포렌식과 IP 추적 등을 통해 가해자를 특정합니다.',
      },
      {
        question: '디지털성범죄 피해자지원센터 이용은 무료인가요?',
        answer:
          '네, <strong>모든 서비스가 무료</strong>입니다. 삭제 지원, 모니터링, 법률 상담, 의료 지원 연계까지 무료로 제공됩니다.',
      },
      {
        question: '해외 사이트에 유포된 경우에도 삭제가 가능한가요?',
        answer:
          '<strong>방송통신심의위원회</strong>를 통해 해외 사이트 접속 차단 및 삭제 요청이 가능합니다.',
      },
      {
        question: '피해자 국선변호사는 어떻게 신청하나요?',
        answer:
          '경찰 수사 단계부터 <strong>검찰 또는 법원에 국선변호사 선정을 요청</strong>할 수 있으며, 비용은 국가가 부담합니다.',
      },
      {
        question: '불법촬영 신고 시 신원이 공개되나요?',
        answer:
          '성폭력 피해자의 <strong>신원은 비공개가 원칙</strong>입니다. 수사·재판 과정 전체에서 보호됩니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단</strong>(전화 132), 디지털성범죄 피해자지원센터(02-735-8994), 여성긴급전화(1366)를 활용해보세요.',
      },
    ],
    cta: {
      text: '내 불법촬영 피해 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/digital-sex-crime',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '디지털성범죄 진단', href: '/diagnosis/digital-sex-crime' },
      { label: '악플로 명예훼손 당했을 때 대응법', href: '/guide/defamation/online-defamation-response' },
      { label: '스토킹 즉시 대응법', href: '/guide/stalking/stalking-immediate-response' },
    ],
  },
  {
    domain: 'digital-sex-crime',
    slug: 'illegal-filming-deletion-support',
    keyword: '불법촬영물 삭제 지원 신청 방법과 절차',
    ctaKeyword: '불법촬영물 삭제 지원',
    type: '절차형',
    meta: {
      title: '불법촬영물 삭제 지원 신청 방법과 절차 | 로앤가이드',
      description:
        '불법촬영물이 유포되었을 때 디지털성범죄피해자지원센터, 방통위 임시조치, 경찰 신고, 유포금지 가처분까지 삭제 지원 절차를 정리했습니다.',
    },
    intro:
      '불법촬영물이 인터넷에 유포된 것을 발견했습니다. 하루라도 빨리 삭제하고 싶은데 어디에 어떻게 신청해야 하는지 모르겠습니다. 지금 바로 활용할 수 있는 삭제 지원 절차를 확인해보세요.',
    timelineSteps: ['지원센터 신청', '방통위 임시조치', '경찰 신고·증거 확보', '가처분·모니터링'],
    sections: [
      {
        title: '디지털성범죄피해자지원센터에 삭제 지원을 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">전문 기관에서 무료로 유포 영상 삭제와 모니터링을 지원합니다</strong></p>\n<p><strong>한국여성인권진흥원 디지털성범죄피해자지원센터</strong>(전화 02-735-8994)에 연락하세요. 센터에서 ①유포된 영상·사진의 <strong>삭제 지원</strong>, ②<strong>유포 현황 모니터링</strong>, ③<strong>수사·법률·의료 지원 연계</strong>를 무료로 제공합니다.</p>\n<p>온라인 상담(d4u.stop.or.kr)도 가능하며, <strong>24시간 긴급 삭제 요청</strong>도 접수됩니다. 국내 사이트는 물론 해외 사이트에 유포된 경우에도 삭제를 추진합니다. 센터 연락 시 유포 URL과 스크린샷을 준비하면 빠르게 처리됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">지원센터: 02-735-8994 | 무료 삭제·모니터링·법률 연계 | 24시간 긴급 접수</blockquote>',
      },
      {
        title: '방송통신위원회에 임시조치를 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">방통위 임시조치로 게시물을 30일간 차단할 수 있습니다</strong></p>\n<p><strong>방송통신위원회</strong>(전화 1377)에 <strong>임시조치(접근 차단)</strong>를 신청하세요. 정보통신망법 제44조의2에 따라 권리를 침해하는 정보에 대해 <strong>30일간 게시물 접근 차단</strong> 조치를 받을 수 있습니다.</p>\n<p>신청 방법은 ①방통위 홈페이지에서 <strong>온라인 신청</strong>, ②전화(1377)로 <strong>상담 후 신청</strong>할 수 있습니다. 해당 게시물의 <strong>URL, 스크린샷, 피해 내용</strong>을 함께 제출하세요. 해외 사이트는 <strong>방송통신심의위원회</strong>를 통해 접속 차단도 요청할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">방통위: 1377 | 임시조치 30일 차단 | 해외 사이트는 방심위 접속 차단</blockquote>',
      },
      {
        title: '경찰에 신고하고 증거를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">경찰 신고와 동시에 URL, 스크린샷 등 증거를 체계적으로 확보하세요</strong></p>\n<p>불법촬영물 유포는 <strong>성폭력처벌법 제14조</strong>에 따라 <strong>7년 이하 징역 또는 5,000만원 이하 벌금</strong>에 처해집니다. 경찰에 신고할 때 다음 증거를 함께 제출하세요.</p>\n<p>①유포된 게시물의 <strong>URL</strong>(가능한 모든 사이트), ②<strong>스크린샷</strong>(작성자 ID, 게시 일시, 조회수 포함), ③<strong>유포 경로</strong>(사이트명, 채팅방 등), ④본인 확인이 가능한 <strong>신분증</strong>을 준비하세요. 스크린샷에는 반드시 <strong>날짜와 시간</strong>이 표시되도록 하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거: URL + 스크린샷(날짜·시간) + 유포 경로 | 처벌: 7년/5,000만원</blockquote>',
      },
      {
        title: '유포금지 가처분을 신청하고 추가 유포를 모니터링하세요',
        content:
          '<p><strong style="color:#1e3a5f">법원의 가처분으로 추가 유포를 법적으로 차단할 수 있습니다</strong></p>\n<p>가해자가 특정된 경우 법원에 <strong>유포금지 가처분</strong>을 신청할 수 있습니다. 가처분이 인용되면 가해자가 해당 촬영물을 <strong>추가로 유포하는 것이 법적으로 금지</strong>되며, 위반 시 <strong>간접강제(이행강제금)</strong>가 부과됩니다.</p>\n<p>삭제 후에도 <strong>재유포 가능성</strong>이 있으므로 지속적인 모니터링이 필요합니다. 디지털성범죄피해자지원센터에서 <strong>최대 1년간 모니터링</strong>을 지원합니다. 새로운 유포가 발견되면 즉시 추가 삭제를 요청하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">가처분: 유포금지 명령 + 이행강제금 | 모니터링: 지원센터 최대 1년 지원</blockquote>',
      },
    ],
    cases: [
      {
        title: '지원센터를 통해 국내외 사이트에서 영상이 삭제된 사례',
        summary:
          '관련 사례에서도 디지털성범죄피해자지원센터에 삭제를 요청한 후, 국내 20여 개 사이트와 해외 10여 개 사이트에서 불법촬영물이 삭제된 경우가 있습니다. 센터의 지속적 모니터링으로 재유포도 차단되었습니다.',
        takeaway:
          '비슷한 상황이라면 디지털성범죄피해자지원센터(02-735-8994)에 즉시 삭제 지원을 요청하세요.',
      },
      {
        title: '방통위 임시조치로 게시물이 신속하게 차단된 사례',
        summary:
          '관련 사례에서도 방송통신위원회에 임시조치를 신청한 후 3일 만에 해당 게시물이 접근 차단된 경우가 있습니다. 이후 경찰 수사를 통해 유포자가 검거되었습니다.',
        takeaway:
          '비슷한 상황이라면 방통위(1377)에 임시조치를 신청하여 빠르게 게시물을 차단하세요.',
      },
    ],
    faq: [
      {
        question: '삭제 지원 서비스는 무료인가요?',
        answer:
          '네, <strong>디지털성범죄피해자지원센터의 모든 서비스는 무료</strong>입니다. 삭제, 모니터링, 법률 상담까지 무료로 제공됩니다.',
      },
      {
        question: '해외 사이트에 유포된 경우에도 삭제가 가능한가요?',
        answer:
          '네, 지원센터에서 <strong>해외 사이트 삭제도 추진</strong>합니다. 추가로 방송통신심의위원회를 통해 접속 차단 조치를 받을 수 있습니다.',
      },
      {
        question: '삭제되기까지 얼마나 걸리나요?',
        answer:
          '국내 사이트는 <strong>보통 1~7일</strong>이 소요됩니다. 해외 사이트는 더 오래 걸릴 수 있으며, 접속 차단이 먼저 이루어집니다.',
      },
      {
        question: '가해자를 모르는데 경찰 신고가 가능한가요?',
        answer:
          '네, <strong>성명불상으로 신고</strong>할 수 있습니다. 경찰이 IP 추적 등을 통해 유포자를 특정합니다.',
      },
      {
        question: '임시조치와 삭제의 차이는 무엇인가요?',
        answer:
          '임시조치는 <strong>30일간 접근을 차단</strong>하는 것이고, 삭제는 <strong>게시물 자체를 영구 제거</strong>하는 것입니다. 병행하는 것이 효과적입니다.',
      },
      {
        question: '유포금지 가처분은 어떻게 신청하나요?',
        answer:
          '<strong>법원에 가처분 신청서를 제출</strong>합니다. 국선변호사나 법률구조공단(132)의 도움을 받을 수 있습니다.',
      },
      {
        question: '삭제 후 재유포되면 어떻게 하나요?',
        answer:
          '지원센터에서 <strong>최대 1년간 모니터링</strong>을 제공합니다. 재유포가 발견되면 즉시 추가 삭제를 요청하세요.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단</strong>(132), 디지털성범죄피해자지원센터(02-735-8994), 여성긴급전화(1366)를 활용해보세요.',
      },
    ],
    cta: {
      text: '내 불법촬영물 피해 상황에 맞는 삭제 지원 방법을 확인해보세요',
      link: '/diagnosis/digital-sex-crime',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '디지털성범죄 진단', href: '/diagnosis/digital-sex-crime' },
      { label: '불법촬영 증거 확보와 신고', href: '/guide/digital-sex-crime/hidden-camera-evidence-report' },
      { label: '성범죄 가이드', href: '/guide/sex-crime/groping-accused-response' },
      { label: '스토킹 즉시 대응법', href: '/guide/stalking/stalking-immediate-response' },
    ],
  },
];
