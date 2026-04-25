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
      title: '불법촬영 피해 즉시 대응 4단계 — 증거 확보부터 수사까지 | 로앤가이드',
      description: '불법촬영(몰카) 피해를 발견했다면 증거 보전 → 경찰 신고 → 디지털성범죄피해자지원센터 연계 → 삭제 지원 요청 4단계로 대응하세요. 성폭력처벌법 제14조 기준 처벌과 절차를 지금 확인하세요.',
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
      title: '불법촬영물 삭제 지원 — 신청 방법 4단계 총정리 | 로앤가이드',
      description: '불법촬영물이 유포되었다면 디지털성범죄피해자지원센터(02-735-8994), 방통위 임시조치, 경찰 신고, 유포금지 가처분 4단계로 삭제 지원을 받으세요. 신청 절차를 바로 정리해보세요.',
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
          '<p><strong style="color:#1e3a5f">경찰 신고와 동시에 URL, 스크린샷 등 증거를 체계적으로 확보하세요</strong></p>\n<p>불법촬영물 유포는 <strong>성폭력처벌법 제14조</strong>에 따라 <strong>7년 이하 징역 또는 5,000만원 이하 벌금</strong>에 처해집니다. 경찰에 신고할 때 다음 증거를 함께 제출하세요.</p>\n<p>①유포된 게시물의 <strong>URL</strong>(가능한 모든 사이트), ②<strong>스크린샷</strong>(작성자 ID, 게시 일시, 조회수 포함), ③<strong>유포 경로</strong>(사이트명, 채팅방 등), ④본인 확인이 가능한 <strong>신분증</strong>을 준비하세요. 스크린샷에는 가능한 한 <strong>날짜와 시간</strong>이 표시되도록 하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거: URL + 스크린샷(날짜·시간) + 유포 경로 | 처벌: 7년/5,000만원</blockquote>',
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
  {
    domain: 'digital-sex-crime',
    slug: 'hidden-camera-found-immediate-response',
    keyword: '몰래카메라 발견했을 때 즉시 대응법',
    questionKeyword: '몰래카메라를 발견했는데 어떻게 대응해야 하나요?',
    ctaKeyword: '몰카 발견 즉시 대응',
    type: '상황형',
    meta: {
      title: '몰래카메라 발견 시 즉시 대응 3단계 | 로앤가이드',
      description: '숙소·화장실·탈의실에서 몰래카메라를 발견했다면 만지지 말고 사진 촬영 → 112 신고 → 피해 구제 절차 3단계로 대응하세요. 증거 보전 방법과 피해자 지원 제도를 지금 확인하세요.',
    },
    intro: '숙소 화장실에서 이상한 구멍을 발견했습니다. 자세히 보니 렌즈 같은 것이 보입니다. 심장이 쿵 내려앉지만 어떻게 해야 할지 모르겠습니다. 만져도 되는 건지, 바로 경찰에 신고해야 하는 건지, 영상이 이미 유포된 건 아닌지 공포가 밀려옵니다. 몰래카메라를 발견한 그 순간부터 해야 할 일을 정리했습니다.',
    sections: [
      {
        title: '현장 보존 — 절대 만지지 말고 사진부터 찍으세요',
        content:
          '<p><strong style="color:#1e3a5f">몰카 기기를 발견하면 손대지 말고 현재 상태 그대로 촬영하세요</strong></p>\n<p>몰래카메라를 발견했을 때 가장 중요한 것은 <strong>현장 보존</strong>입니다. 기기를 뽑거나 만지면 지문, 설치 방법 등 핵심 증거가 훼손됩니다. 스마트폰으로 기기의 위치, 각도, 주변 환경을 <strong>여러 각도에서 사진과 동영상</strong>으로 기록하세요.</p>\n<p>발견 시점의 <strong>날짜, 시각, 장소(주소)</strong>를 메모에 남기세요. 함께 있던 사람이 있다면 목격자로 확인해두는 것이 좋습니다. 숙소(에어비앤비, 펜션 등)라면 예약 내역 스크린샷도 저장하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">즉시 행동: ①기기에 손대지 않기 ②사진·동영상 촬영 ③발견 시각·장소 메모 ④해당 공간 사용 중단</blockquote>',
      },
      {
        title: '경찰 신고 — 112에 즉시 신고하세요',
        content:
          '<p><strong style="color:#1e3a5f">성폭력범죄의 처벌 등에 관한 특례법 제14조 위반으로 112에 신고하세요</strong></p>\n<p>몰래카메라를 이용한 촬영은 <strong>카메라등이용촬영죄</strong>에 해당하며, 7년 이하의 징역 또는 5,000만 원 이하의 벌금에 처해집니다(성폭력처벌법 제14조 제1항). 112에 전화하여 "불법 촬영 기기를 발견했다"고 신고하면 경찰이 출동합니다.</p>\n<p>경찰이 도착하면 기기를 <strong>증거물로 수거</strong>하고, 내부 저장 데이터와 연결된 서버·클라우드를 분석합니다. 숙소·건물 관리자에게도 연락하여 CCTV 영상 확보를 요청하세요. 설치자를 특정하는 데 <strong>건물 출입 기록과 CCTV</strong>가 결정적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신고 방법: 112 전화 → "불법촬영 기기 발견" 신고 → 경찰 출동 대기 → 진술서 작성. 신고 시 사건번호를 가능한 한 받아두세요.</blockquote>',
      },
      {
        title: '유포 여부 확인 — 디지털성범죄피해자지원센터 활용',
        content:
          '<p><strong style="color:#1e3a5f">촬영물이 유포되었는지 확인하고, 유포된 경우 즉시 삭제 지원을 요청하세요</strong></p>\n<p><strong>디지털성범죄피해자지원센터</strong>(전화 02-735-8994)에 연락하면 촬영물의 온라인 유포 여부를 모니터링하고, 유포된 경우 <strong>삭제 지원</strong>을 받을 수 있습니다. 한국여성인권진흥원이 운영하며 24시간 상담이 가능합니다.</p>\n<p>성폭력처벌법 제14조 제2항에 따라 촬영물을 <strong>유포한 자는 7년 이하의 징역 또는 5,000만 원 이하의 벌금</strong>에 처해집니다. 영리 목적 유포는 3년 이상의 유기징역으로 가중 처벌 대상으로 검토될 수 있습니다. 방송통신심의위원회를 통해 해당 게시물에 대한 <strong>접속 차단 및 삭제 요청</strong>도 병행하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">지원센터: 디지털성범죄피해자지원센터(02-735-8994), 여성긴급전화(1366), 방송통신심의위원회(www.kocsc.or.kr)</blockquote>',
      },
      {
        title: '피해 구제 — 손해배상 청구와 피해자 보호',
        content:
          '<p><strong style="color:#1e3a5f">형사 고소와 별도로 민사 손해배상 청구가 가능합니다</strong></p>\n<p>불법촬영 피해자는 촬영자(및 유포자)를 상대로 <strong>정신적 피해에 대한 위자료</strong>를 청구할 수 있습니다. 불법촬영 사건의 위자료는 피해 정도에 따라 <strong>수백만 원에서 수천만 원</strong>까지 인정될 수 있습니다. 촬영물이 유포된 경우 배상액이 크게 증가합니다.</p>\n<p>숙소에서 발생한 경우 <strong>숙소 운영자의 관리 책임</strong>도 물을 수 있습니다. 숙소 운영자가 정기적인 점검을 소홀히 했다면 공동불법행위에 따른 손해배상 책임이 인정될 수 있습니다. 법률구조공단(132)에서 무료 법률 지원을 받아 소송을 진행할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">피해 구제: 형사 고소(성폭력처벌법 제14조) + 민사 손해배상 청구 + 숙소 운영자 책임 추궁을 병행하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '숙소 내 몰래카메라 설치 — 카메라등이용촬영죄(성폭력처벌법 제14조)',
        summary: '펜션 운영자가 객실 화장실에 소형 카메라를 설치하여 투숙객을 촬영한 사안입니다. 법원은 카메라등이용촬영죄를 적용하여 징역 3년을 선고하고, 피해자 다수에게 각 500만 원의 위자료를 인정했습니다.',
        takeaway: '숙소에서 몰카를 발견하면 숙소 운영자도 피의자가 될 수 있으므로, 운영자가 아닌 경찰에 먼저 신고하세요.',
      },
      {
        title: '촬영물 유포에 대한 가중처벌 사례',
        summary: '불법촬영물을 인터넷에 유포한 피고인에게 법원은 성폭력처벌법 제14조 제2항을 적용하여 징역 5년을 선고했습니다. 유포 범위가 넓고 피해자가 다수인 점이 양형에 크게 반영되었습니다.',
        takeaway: '촬영물 유포가 의심되면 즉시 디지털성범죄피해자지원센터에 삭제 지원을 요청하세요.',
      },
    ],
    faq: [
      {
        question: '몰카를 발견했는데 만져도 되나요?',
        answer: '<strong>절대 만지지 마세요</strong>. 지문, 설치 흔적 등 증거가 훼손됩니다. 사진만 찍고 경찰 출동을 기다리세요.',
      },
      {
        question: '몰카인지 확실하지 않으면 어떻게 하나요?',
        answer: '의심스러운 물체를 발견하면 일단 <strong>사진을 찍고 112에 신고</strong>하세요. 경찰이 전문 장비로 확인합니다.',
      },
      {
        question: '몰카 탐지 앱은 신뢰할 수 있나요?',
        answer: '앱은 보조 수단일 뿐 <strong>100% 탐지는 불가능</strong>합니다. 의심이 되면 경찰이나 전문 탐지 업체에 의뢰하세요.',
      },
      {
        question: '촬영물이 유포되었는지 어떻게 확인하나요?',
        answer: '<strong>디지털성범죄피해자지원센터</strong>(02-735-8994)에서 모니터링 및 삭제 지원을 무료로 제공합니다.',
      },
      {
        question: '숙소 운영자에게도 책임을 물을 수 있나요?',
        answer: '숙소 운영자가 <strong>안전 관리 의무를 소홀히</strong> 한 경우 손해배상 책임을 물을 수 있습니다.',
      },
      {
        question: '불법촬영 피해자인데 신원이 노출될까 걱정됩니다.',
        answer: '성폭력 피해자는 <strong>수사·재판 과정에서 신원이 보호</strong>됩니다. 비공개 재판도 신청할 수 있습니다.',
      },
      {
        question: '가해자를 모르는데 처벌이 가능한가요?',
        answer: '네, <strong>성명불상으로 고소</strong>할 수 있습니다. 경찰이 기기 분석, CCTV, IP 추적 등으로 설치자를 특정합니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(132), 디지털성범죄피해자지원센터(02-735-8994), 여성긴급전화(1366)를 활용하세요.',
      },
    ],
    cta: {
      text: '몰래카메라 피해 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/digital-sex-crime',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '디지털성범죄 가이드', href: '/guide/digital-sex-crime' },
      { label: '불법촬영 증거 확보와 신고', href: '/guide/digital-sex-crime/hidden-camera-evidence-report' },
      { label: '스토킹 즉시 대응법', href: '/guide/stalking/stalking-immediate-response' },
      { label: '디지털성범죄 진단', href: '/diagnosis/digital-sex-crime' },
    ],
  },
  {
    domain: 'digital-sex-crime',
    slug: 'deepfake-pornography-report-removal',
    keyword: '딥페이크 음란물 신고 및 삭제 절차',
    questionKeyword: '딥페이크 음란물 피해를 당했는데 신고하고 삭제하려면 어떻게 하나요?',
    ctaKeyword: '딥페이크 음란물 삭제',
    type: '절차형',
    meta: {
      title: '딥페이크 음란물 신고·삭제 — 즉시 대응 4단계 | 로앤가이드',
      description: '딥페이크 합성 음란물 피해를 입었다면 경찰 신고, 방심위 삭제 요청, 디지털성범죄피해자지원센터 연계, 법적 처벌(5년 이하 징역)까지 4단계 대응 절차를 정리했습니다. 지금 확인하세요.',
    },
    intro:
      'SNS에서 지인이 보내온 링크를 눌렀더니 내 얼굴이 합성된 영상이 올라와 있었습니다. 손이 떨리고 머리가 하얘집니다. 딥페이크 음란물 피해는 빠르게 확산되기 때문에 신고와 삭제를 동시에 진행해야 합니다. 지금 해야 할 일을 순서대로 정리했습니다.',
    sections: [
      {
        title: '증거를 먼저 확보한 뒤 경찰에 신고하세요',
        content:
          '<p><strong style="color:#1e3a5f">삭제 요청 전에 가능한 한 증거 화면을 캡처해두어야 합니다</strong></p>\n<p>딥페이크 영상의 <strong>URL, 게시자 계정명, 게시 날짜, 화면 캡처</strong>를 먼저 저장하세요. 삭제 후에는 증거 확보가 어려우므로 이 단계를 절대 건너뛰지 마세요. 스크린 녹화도 함께 해두면 더 확실합니다.</p>\n<p>증거를 확보했으면 가까운 <strong>경찰서 사이버수사팀</strong>에 방문하거나 <strong>사이버범죄 신고시스템(ECRM)</strong>을 통해 온라인으로 신고하세요. <strong>성폭력범죄의 처벌 등에 관한 특례법 제14조의2</strong>(허위영상물 등의 반포)에 따라 가해자는 <strong>5년 이하 징역 또는 5,000만 원 이하 벌금</strong>에 처해집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거 확보: URL · 계정명 · 캡처 · 녹화 | 신고: 경찰서 사이버수사팀 또는 ECRM | 처벌: 5년 이하 징역/5,000만 원 이하 벌금</blockquote>',
      },
      {
        title: '디지털성범죄피해자지원센터에 삭제를 요청하세요',
        content:
          '<p><strong style="color:#1e3a5f">지원센터에 연락하면 삭제 지원과 법률 상담을 한 번에 받을 수 있습니다</strong></p>\n<p><strong>디지털성범죄피해자지원센터</strong>(전화 <strong>02-735-8994</strong>, 카카오톡 상담 가능)에 연락하면 전문 상담원이 피해 영상의 <strong>삭제 지원</strong>, <strong>유포 현황 모니터링</strong>, <strong>수사·법률 상담 연계</strong>를 무료로 도와줍니다. 24시간 운영되므로 발견 즉시 연락하세요.</p>\n<p>지원센터는 국내외 웹사이트, 소셜미디어, 메신저 플랫폼에 대해 <strong>피해 영상 삭제 요청을 대행</strong>합니다. 피해자가 직접 플랫폼에 연락하기 어려운 경우에도 센터가 대신 처리하므로 심리적 부담을 줄일 수 있습니다.</p>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">딥페이크 음란물 피해를 당했다면, 지금 상황에 맞는 대응 절차를 <a href="/diagnosis/digital-sex-crime" style="color:#2563eb;font-weight:600">무료 진단</a>으로 확인해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">지원센터: 02-735-8994 (24시간) | 삭제 대행 · 모니터링 · 법률 상담 무료</blockquote>',
      },
      {
        title: '방송통신심의위원회에 시정 요청을 하세요',
        content:
          '<p><strong style="color:#1e3a5f">방심위 시정 요청은 국내 사이트의 불법 콘텐츠를 강제 차단할 수 있는 수단입니다</strong></p>\n<p><strong>방송통신심의위원회</strong>(방심위)에 불법촬영물·허위영상물 <strong>시정 요청</strong>을 하면, 심의를 거쳐 해당 게시물의 <strong>삭제·접속 차단</strong> 명령이 내려집니다. 방심위 홈페이지 또는 <strong>전화 1377</strong>로 신청할 수 있습니다.</p>\n<p>해외 사이트에 게시된 경우에도 방심위가 <strong>접속 차단</strong> 조치를 취할 수 있으며, 디지털성범죄피해자지원센터를 통해 해외 플랫폼에 직접 삭제 요청을 병행하는 것이 효과적입니다. 방심위 심의 기간은 통상 <strong>7~10일</strong>이 소요됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">방심위: 홈페이지 또는 전화 1377 | 심의 기간 7~10일 | 해외 사이트 접속 차단 가능</blockquote>',
      },
      {
        title: '가해자 처벌과 손해배상까지 진행하세요',
        content:
          '<p><strong style="color:#1e3a5f">딥페이크 제작·유포자는 형사 처벌과 민사 손해배상 모두 가능합니다</strong></p>\n<p><strong>성폭력처벌법 제14조의2</strong>에 따라 딥페이크 영상을 <strong>제작</strong>한 자도 처벌 대상이며, <strong>영리 목적으로 유포</strong>한 경우에는 <strong>7년 이하 징역</strong>으로 가중 처벌 대상으로 검토될 수 있습니다. 수사 과정에서 경찰은 IP 추적, 계정 정보 확인 등으로 가해자를 특정합니다.</p>\n<p>형사 절차와 별도로 가해자에게 <strong>정신적 피해에 대한 손해배상</strong>(민법 제750조·제751조)을 청구할 수 있습니다. 피해로 인한 <strong>심리 상담비, 치료비, 업무 손실</strong> 등을 구체적으로 산정하여 청구하세요. <strong>여성긴급전화 1366</strong>에서도 법률 지원을 연계받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">형사: 제작 5년 이하 징역 · 영리 유포 7년 이하 | 민사: 손해배상 청구 | 지원: 여성긴급전화 1366</blockquote>',
      },
    ],
    cases: [
      {
        title: '딥페이크 영상 제작·유포자에게 징역형이 선고된 사례',
        summary:
          '피해자의 SNS 사진을 이용해 딥페이크 음란물을 제작·유포한 피고인에게 법원은 성폭력처벌법 제14조의2를 적용하여 징역 3년을 선고했습니다. 피해 영상이 다수 사이트에 유포된 점이 양형에 반영되었습니다.',
        takeaway:
          '딥페이크 영상을 발견하면 유포 범위를 파악하기 위해 디지털성범죄피해자지원센터의 모니터링 서비스를 활용하세요.',
      },
      {
        title: '피해자가 손해배상 3,000만 원을 인정받은 사례',
        summary:
          '딥페이크 합성물로 인해 직장을 그만두고 심리 치료를 받아야 했던 피해자가 가해자를 상대로 손해배상 소송을 제기하여 법원이 위자료 3,000만 원을 인정했습니다.',
        takeaway:
          '피해로 인한 치료비 영수증, 상담 기록, 업무 손실 증빙을 체계적으로 보관하면 손해배상 청구에 유리합니다.',
      },
    ],
    faq: [
      {
        question: '딥페이크 음란물을 발견하면 가장 먼저 뭘 해야 하나요?',
        answer: '삭제 요청 전에 <strong>URL, 게시자 계정, 화면 캡처, 스크린 녹화</strong>로 증거를 먼저 확보하세요. 삭제 후에는 증거 수집이 어렵습니다.',
      },
      {
        question: '가해자를 모르는데 신고가 가능한가요?',
        answer: '네, <strong>성명불상으로 고소</strong>할 수 있습니다. 경찰이 IP 추적, 계정 정보 분석 등으로 가해자를 특정합니다.',
      },
      {
        question: '디지털성범죄피해자지원센터는 무료인가요?',
        answer: '네, <strong>삭제 지원, 모니터링, 법률 상담 모두 무료</strong>입니다. 전화 <strong>02-735-8994</strong>로 24시간 상담 가능합니다.',
      },
      {
        question: '해외 사이트에 올라간 영상도 삭제할 수 있나요?',
        answer: '디지털성범죄피해자지원센터가 <strong>해외 플랫폼에 삭제 요청을 대행</strong>하며, 방심위를 통해 <strong>국내 접속 차단</strong>도 가능합니다.',
      },
      {
        question: '딥페이크 제작만 하고 유포하지 않아도 처벌되나요?',
        answer: '성폭력처벌법 개정으로 <strong>허위영상물을 제작만 해도 5년 이하 징역 또는 5,000만 원 이하 벌금</strong>에 처해집니다.',
      },
      {
        question: '삭제 요청을 했는데 사이트가 응하지 않으면 어떻게 하나요?',
        answer: '<strong>방심위 시정 요청</strong>을 통해 강제 삭제·접속 차단 명령을 받을 수 있습니다. 전화 1377로 신청하세요.',
      },
      {
        question: '피해 사실이 주변에 알려질까 걱정됩니다.',
        answer: '성폭력 피해자는 수사·재판 과정에서 <strong>신원이 보호</strong>됩니다. 비공개 재판 신청도 가능하며, 언론 보도 시 피해자 인적사항 공개는 금지됩니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>디지털성범죄피해자지원센터</strong>(02-735-8994), <strong>대한법률구조공단</strong>(132), <strong>여성긴급전화</strong>(1366)에서 무료 상담을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '1분 안에 딥페이크 음란물 삭제 준비사항 확인하기',
      link: '/diagnosis/digital-sex-crime',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '디지털성범죄 가이드', href: '/guide/digital-sex-crime' },
      { label: '불법촬영물 삭제 지원', href: '/guide/digital-sex-crime/illegal-filming-deletion-support' },
      { label: '몰래카메라 발견 시 즉시 대응법', href: '/guide/digital-sex-crime/hidden-camera-found-immediate-response' },
      { label: '디지털성범죄 진단', href: '/diagnosis/digital-sex-crime' },
    ],
  },
  {
    domain: 'digital-sex-crime',
    slug: 'ex-threatens-to-share-intimate-video',
    keyword: '헤어진 연인이 사적 영상 유포 협박할 때 대처법',
    questionKeyword: '헤어진 연인이 사적 영상을 유포하겠다고 협박하면 어떻게 해야 하나요?',
    ctaKeyword: '사적 영상 유포 협박 대처',
    type: '상황형',
    meta: {
      title: '전 연인 영상 유포 협박 — 즉시 대응법 총정리 | 로앤가이드',
      description: '전 연인이 사적 영상 유포를 협박한다면 대화 녹음·캡처 → 경찰 신고 → 삭제 지원 요청으로 대응하세요. 성폭력처벌법 제14조 제2항 기준 3년 이하 징역에 해당할 소지가 있습니다. 지금 확인하세요.',
    },
    intro: '이별 후 전 연인에게서 메시지가 왔습니다. "우리가 찍었던 영상, 뿌려버릴 수도 있어." 심장이 멈추는 기분입니다. 아직 유포되지 않았을 수도 있고, 이미 일부가 퍼졌을 수도 있습니다. 당장 전화를 해서 사정해야 할 것 같지만, 감정적으로 대응하면 상황이 더 나빠질 수 있습니다. 지금 가장 먼저 해야 할 것은 증거를 확보하고 법적 절차를 밟는 것입니다.',
    timelineSteps: ['협박 증거 확보', '경찰 신고·접근금지', '유포 차단·삭제 지원', '형사·민사 법적 조치'],
    sections: [
      {
        title: '협박 메시지를 삭제하지 말고 모두 저장하세요',
        content:
          '<p><strong style="color:#1e3a5f">협박 증거를 확보하는 것이 법적 대응의 첫걸음입니다</strong></p>\n<p>전 연인이 카카오톡, 문자, DM 등으로 영상 유포를 협박하는 메시지를 보냈다면, 절대로 삭제하지 마세요. 해당 메시지를 <strong>스크린샷으로 캡처</strong>하되, 가능한 한 ①<strong>상대방 프로필(이름·ID)</strong>, ②<strong>메시지 내용 전체</strong>, ③<strong>발송 날짜와 시간</strong>이 모두 화면에 표시되도록 하세요.</p>\n<p>전화 통화로 협박한 경우에도 <strong>통화 녹음</strong>이 증거로 인정될 수 있습니다. 대한민국에서는 대화 당사자인 본인이 녹음하는 것이 합법입니다. 이후 추가 연락이 오면 녹음 앱을 켜두세요. 협박 내용을 날짜별로 정리한 <strong>일지</strong>를 작성해두면 수사와 재판에서 유리합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거 확보: 메시지 스크린샷(프로필+날짜+시간) | 통화 녹음 | 협박 일지 작성</blockquote>',
      },
      {
        title: '경찰에 즉시 신고하고 접근금지를 요청하세요',
        content:
          '<p><strong style="color:#1e3a5f">영상 유포 협박은 성폭력처벌법 제14조 제2항과 형법 제283조에 해당합니다</strong></p>\n<p><strong>성폭력처벌법 제14조 제2항</strong>은 촬영 대상자의 의사에 반하여 촬영물을 유포하겠다고 <strong>협박</strong>하는 행위를 처벌합니다. 실제 유포 여부와 관계없이 협박 자체가 범죄입니다. 또한 <strong>형법 제283조(협박죄)</strong>도 함께 적용될 수 있으며, 2년 이하 징역 또는 500만원 이하 벌금에 처해집니다.</p>\n<p>경찰서에 직접 방문하거나 <strong>사이버수사대</strong>(경찰청 182)에 신고할 수 있습니다. 신고 시 확보한 증거를 제출하고, <strong>접근금지 임시조치</strong>(스토킹처벌법 제4조)를 요청하세요. 상대가 계속 연락하는 것 자체를 차단할 수 있는 법적 장치입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신고: 사이버수사대(182) 또는 관할 경찰서 | 접근금지 임시조치 요청 | 증거 일체 제출</blockquote>',
      },
      {
        title: '디지털성범죄피해자지원센터를 통해 유포 차단과 삭제를 요청하세요',
        content:
          '<p><strong style="color:#1e3a5f">이미 유포되었더라도 삭제와 차단이 가능합니다</strong></p>\n<p><strong>디지털성범죄피해자지원센터</strong>(02-735-8994)는 여성가족부 산하 기관으로, 불법 촬영물과 유포 영상의 <strong>삭제 지원</strong>을 무료로 제공합니다. 24시간 운영되며, 해외 사이트에 올라간 영상도 삭제 요청이 가능합니다.</p>\n<p>아직 유포되지 않았더라도 미리 지원센터에 연락하여 <strong>모니터링</strong>을 요청할 수 있습니다. 상대방이 특정 사이트에 영상을 업로드하면 즉시 감지하고 삭제 절차를 밟을 수 있습니다. 또한 <strong>방송통신심의위원회</strong>에 불법 촬영물 유통 차단을 신청하면 국내 사이트 접근이 차단됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">삭제 지원: 디지털성범죄피해자지원센터(02-735-8994) 24시간 | 방통심의위 유통 차단 신청</blockquote>',
      },
      {
        title: '형사 고소와 민사 손해배상을 동시에 진행하세요',
        content:
          '<p><strong style="color:#1e3a5f">협박만으로도 형사 고소가 가능하고, 정신적 피해에 대한 배상도 청구할 수 있습니다</strong></p>\n<p>형사 고소는 <strong>성폭력처벌법 제14조 제2항</strong>(촬영물 유포 협박, 5년 이하 징역 또는 5,000만원 이하 벌금)과 <strong>형법 제283조</strong>(협박죄)로 진행합니다. 실제 유포가 이루어진 경우에는 <strong>성폭력처벌법 제14조 제1항</strong>(유포, 7년 이하 징역)이 추가 적용됩니다.</p>\n<p>민사적으로는 <strong>불법행위에 따른 손해배상 청구</strong>(민법 제750조)가 가능합니다. 정신적 고통에 대한 <strong>위자료</strong>와 치료비(심리상담·정신과 치료) 등을 청구할 수 있습니다. 관련 판례에서 영상 유포 협박으로 인한 위자료로 500만원~2,000만원이 인정된 경우가 있으므로, 변호사와 함께 구체적인 청구 금액을 산정하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">형사: 성폭력처벌법 제14조 제2항 + 협박죄 | 민사: 불법행위 손해배상(민법 제750조) + 위자료</blockquote>',
      },
    ],
    cases: [
      {
        title: '전 연인이 사적 영상 유포를 협박하여 징역형을 선고받은 사례',
        summary:
          '관련 사례에서도 헤어진 후 전 연인에게 "영상을 지인들에게 뿌리겠다"고 반복 협박한 피고인에게 성폭력처벌법 제14조 제2항을 적용하여 징역 1년을 선고한 경우가 있습니다. 법원은 실제 유포 여부와 무관하게 협박 행위 자체의 위법성을 무겁게 판단했습니다.',
        takeaway:
          '비슷한 상황이라면 협박 메시지를 빠짐없이 저장하고, 즉시 경찰에 신고하여 형사 고소를 진행하세요.',
      },
      {
        title: '사적 영상 유포 후 피해자가 민·형사 병행으로 배상받은 사례',
        summary:
          '관련 사례에서도 전 연인이 실제로 사적 영상을 SNS에 유포한 사건에서, 피해자가 형사 고소와 민사 손해배상 소송을 동시에 진행하여 형사 처벌(징역 2년)과 위자료 1,500만원을 인정받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 형사 고소와 민사 소송을 병행하고, 디지털성범죄피해자지원센터를 통해 삭제 지원을 즉시 요청하세요.',
      },
    ],
    faq: [
      {
        question: '아직 영상이 유포되지 않았는데도 경찰에 신고할 수 있나요?',
        answer: '네, <strong>유포 협박 자체</strong>가 성폭력처벌법 제14조 제2항 위반입니다. 실제 유포 여부와 관계없이 협박 메시지 증거만으로 신고가 가능합니다.',
      },
      {
        question: '협박에 응해서 돈을 보내면 해결되나요?',
        answer: '절대 금전을 지급하지 마세요. 한 번 응하면 <strong>반복 협박(공갈)</strong>으로 이어지는 경우가 대부분이고, 영상 삭제를 보장받을 수도 없습니다.',
      },
      {
        question: '상대방이 영상을 삭제했다고 하면 고소를 취하해야 하나요?',
        answer: '삭제 여부를 확인할 수 없고, 복사본이 존재할 수 있습니다. 고소 취하는 <strong>변호사와 상의</strong> 후 결정하세요. 합의서에 재유포 금지 조항과 위약벌 조항을 가능한 한 포함해야 합니다.',
      },
      {
        question: '교제 중 동의하에 촬영한 영상도 유포하면 처벌되나요?',
        answer: '네. 촬영 당시 동의가 있었더라도 <strong>유포에 대한 동의가 없으면</strong> 성폭력처벌법 제14조 위반으로 처벌 대상으로 검토될 수 있습니다.',
      },
      {
        question: '디지털성범죄피해자지원센터 이용은 무료인가요?',
        answer: '네, <strong>완전 무료</strong>이며 24시간 운영됩니다. 상담, 삭제 지원, 모니터링, 법률 지원까지 원스톱으로 제공합니다.',
      },
      {
        question: '해외 사이트에 유포된 경우에도 삭제가 가능한가요?',
        answer: '디지털성범죄피해자지원센터를 통해 <strong>해외 사이트에도 삭제 요청</strong>이 가능합니다. 다만 국내 사이트보다 시간이 더 걸릴 수 있습니다.',
      },
      {
        question: '전 연인이 아닌 제3자가 영상을 유포 협박하면 어떻게 하나요?',
        answer: '동일하게 <strong>성폭력처벌법 제14조</strong>와 <strong>형법 제283조(협박죄)</strong>가 적용됩니다. 제3자가 금전을 요구하면 <strong>공갈죄</strong>(형법 제350조, 10년 이하 징역)도 추가됩니다.',
      },
      {
        question: '피해자인데 2차 피해가 걱정됩니다. 수사 과정에서 보호받을 수 있나요?',
        answer: '<strong>성폭력범죄 피해자</strong>는 수사·재판 과정에서 신원 비공개, 영상 녹화 진술, 신뢰관계인 동석 등 <strong>피해자 보호조치</strong>를 받을 수 있습니다. 수사관에게 적극적으로 요청하세요.',
      },
    ],
    cta: {
      text: '내 상황에 맞는 영상 유포 협박 대응 방법을 확인해보세요',
      link: '/diagnosis/digital-sex-crime',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '디지털성범죄 진단', href: '/diagnosis/digital-sex-crime' },
      { label: '불법촬영 증거 확보·신고', href: '/guide/digital-sex-crime/hidden-camera-evidence-report' },
      { label: '딥페이크 음란물 신고·삭제', href: '/guide/digital-sex-crime/deepfake-pornography-report-removal' },
    ],
  },
  {
    domain: 'digital-sex-crime',
    slug: 'filming-false-accusation-defense',
    keyword: '불법촬영 무고 대응법',
    questionKeyword: '불법촬영을 하지 않았는데 무고당했으면 어떻게 해야 하나요?',
    ctaKeyword: '불법촬영 무고 대응',
    type: '상황형',
    meta: {
      title: '불법촬영 무고 대응 — 혐의 방어부터 반대고소까지 | 로앤가이드',
      description: '불법촬영을 하지 않았는데 무고당했다면 휴대폰 포렌식 결과 확보, 알리바이 입증, 무고죄(형법 제156조) 반대고소 3단계로 대응하세요. 혐의 방어 전략을 바로 정리해보세요.',
    },
    intro: '지하철에서 스마트폰을 사용하고 있었을 뿐인데, 옆에 있던 사람이 "촬영당했다"며 경찰을 불렀습니다. 휴대폰을 열어 보여줘도 의심의 눈초리를 거두지 않습니다. 경찰서에서 조사를 받게 되었고, 불법촬영 혐의로 입건될 수 있다는 말을 들었습니다. 억울하지만, 감정적으로 대응하면 상황이 더 불리해집니다. 지금 해야 할 것은 체계적인 방어 전략을 세우는 것입니다.',
    timelineSteps: ['혐의 내용 확인', '증거 확보·변호사 선임', '수사 대응·진술', '무고죄 반소 검토'],
    sections: [
      {
        title: '당황하지 말고 혐의 내용을 정확히 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">어떤 행위가 문제되는지, 피의자 신분인지부터 파악해야 합니다</strong></p>\n<p>불법촬영 혐의는 <strong>성폭력처벌법 제14조</strong>(카메라 등을 이용한 촬영)에 따라 7년 이하 징역 또는 5,000만원 이하 벌금의 중대한 범죄입니다. 현장에서 경찰이 왔다면, 먼저 ①<strong>정확히 어떤 행위가 촬영으로 의심되는지</strong>, ②<strong>피의자 신분으로 조사받는 것인지</strong>를 확인하세요.</p>\n<p>현장에서 흥분하여 상대방에게 고함을 지르거나, 경찰에게 강하게 항의하는 것은 오히려 <strong>불리한 인상</strong>을 줄 수 있습니다. 침착하게 대응하되, 수사관의 질문에는 <strong>진술거부권</strong>(형사소송법 제244조의3)을 행사할 수 있음을 기억하세요. "변호사와 상의 후 진술하겠습니다"라고 말하는 것이 가장 안전합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">1단계: 혐의 행위 특정 → 피의자 여부 확인 → 침착하게 대응 → 진술 보류 가능</blockquote>',
      },
      {
        title: '결백을 입증할 증거를 즉시 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">휴대폰 갤러리, CCTV, 목격자 증언이 핵심 방어 증거입니다</strong></p>\n<p>가장 강력한 방어 증거는 <strong>휴대폰 포렌식 결과</strong>입니다. 촬영한 사실이 없다면 갤러리, 최근 삭제된 파일, 카메라 앱 로그 등에서 <strong>촬영 이력이 없음</strong>이 확인됩니다. 경찰이 휴대폰 제출을 요구하면, <strong>영장 없이는 거부</strong>할 수 있지만, 결백을 입증하려면 자발적 제출이 유리할 수 있습니다. 이 판단은 가능한 한 변호사와 상의하세요.</p>\n<p>현장 <strong>CCTV</strong>가 있다면 보존을 요청하세요. 대부분의 CCTV는 <strong>30일 이내</strong>에 덮어쓰기되므로, 시간이 지나면 증거가 사라집니다. 당시 함께 있던 <strong>동행인이나 목격자</strong>의 연락처를 확보하고, 진술서 작성을 요청하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거 확보: 휴대폰 포렌식(촬영 이력 없음 입증) | CCTV 보존 요청(30일 이내) | 목격자 진술서</blockquote>',
      },
      {
        title: '수사 단계에서 변호사와 함께 체계적으로 방어하세요',
        content:
          '<p><strong style="color:#1e3a5f">혐의 없음(불기소)을 받기 위한 수사 단계 대응이 가장 중요합니다</strong></p>\n<p>불법촬영 무고 사건에서 가장 좋은 결과는 검찰의 <strong>혐의 없음(불기소) 처분</strong>입니다. 이를 위해서는 수사 단계에서 변호사의 도움을 받아 ①<strong>촬영 사실 부존재</strong>를 입증하는 증거를 체계적으로 제출하고, ②<strong>피의자 신문조서</strong>에 유리한 내용이 정확하게 기재되도록 해야 합니다.</p>\n<p>변호사는 <strong>의견서</strong>를 수사기관에 제출하여, 포렌식 결과, CCTV 분석, 목격자 진술 등을 종합한 법률적 논거를 전달합니다. 경찰 조사 시 변호사가 <strong>동석</strong>할 수 있으며(형사소송법 제243조의2), 부당한 질문에 이의를 제기할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">목표: 불기소(혐의 없음) 처분 | 변호사 의견서 제출 + 조사 동석 + 조서 검토</blockquote>',
      },
      {
        title: '허위 신고자에 대한 무고죄 반소를 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">고의로 허위 신고한 경우 형법 제156조 무고죄로 처벌받을 수 있습니다</strong></p>\n<p><strong>형법 제156조(무고죄)</strong>는 타인으로 하여금 형사처분을 받게 할 목적으로 허위 사실을 신고한 자를 <strong>10년 이하 징역 또는 1,500만원 이하 벌금</strong>에 처하도록 규정합니다. 상대방이 촬영 사실이 없음을 알면서도 고의로 신고한 경우, 무고죄로 <strong>맞고소</strong>할 수 있습니다.</p>\n<p>다만 무고죄가 성립하려면 신고 내용이 <strong>객관적 사실에 반하고</strong>, 신고자에게 <strong>허위 인식</strong>이 있었음을 입증해야 합니다(대법원 2006도2961). 단순히 오해로 신고한 경우에는 무고죄가 성립하지 않을 수 있습니다. 무고죄 반소 여부는 가능한 한 변호사와 상의하여 전략적으로 판단하세요. 민사적으로도 <strong>허위 신고로 인한 손해배상</strong>(민법 제750조)을 청구할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">반소: 무고죄(형법 제156조, 10년↓) | 요건: 허위 사실 + 고의 | 민사 손해배상도 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '불법촬영 혐의를 받았으나 포렌식으로 무혐의 처분을 받은 사례',
        summary:
          '관련 사례에서도 대중교통에서 스마트폰 사용 중 불법촬영 혐의로 신고된 남성이 휴대폰 포렌식 결과 촬영 이력이 전혀 없음이 확인되어 검찰에서 혐의 없음(불기소) 처분을 받은 경우가 있습니다. 당시 CCTV 영상에서도 촬영 행위가 확인되지 않았습니다.',
        takeaway:
          '비슷한 상황이라면 휴대폰을 초기화하거나 데이터를 삭제하지 말고, 변호사와 상의하여 포렌식 제출 여부를 결정하세요.',
      },
      {
        title: '허위 불법촬영 신고자가 무고죄로 처벌받은 사례',
        summary:
          '관련 사례에서도 개인적 감정으로 상대방을 불법촬영범으로 허위 신고한 신고자에 대해 형법 제156조 무고죄를 적용하여 징역 6월에 집행유예 1년을 선고한 경우가 있습니다. 법원은 신고 내용과 객관적 증거 사이의 명백한 불일치를 근거로 고의성을 인정했습니다.',
        takeaway:
          '비슷한 상황이라면 혐의 없음 처분을 받은 후 변호사와 함께 무고죄 맞고소 가능성을 검토하세요.',
      },
    ],
    faq: [
      {
        question: '현장에서 경찰이 휴대폰을 보여달라고 하면 가능한 한 보여줘야 하나요?',
        answer: '<strong>압수수색영장</strong> 없이는 휴대폰 제출을 거부할 수 있습니다. 다만 결백 입증을 위해 자발적 제출이 유리할 수 있으므로, 변호사와 상의 후 결정하세요.',
      },
      {
        question: '불법촬영 혐의로 체포되나요?',
        answer: '현행범으로 체포될 수 있지만, 촬영 행위가 현장에서 명확히 확인되지 않으면 <strong>임의동행이나 출석 요구</strong> 형태가 일반적입니다.',
      },
      {
        question: '휴대폰 포렌식은 어떻게 진행되나요?',
        answer: '수사기관이 <strong>전문 포렌식 장비</strong>로 삭제된 파일까지 복원·분석합니다. 촬영 이력, 카메라 앱 실행 기록, 저장 파일 등을 확인하며, 통상 <strong>2~4주</strong> 소요됩니다.',
      },
      {
        question: '무고죄 맞고소는 언제 하는 것이 좋은가요?',
        answer: '본인의 <strong>혐의 없음 처분이 확정된 후</strong> 진행하는 것이 가장 효과적입니다. 수사 중에 맞고소하면 양쪽 사건이 병행되어 복잡해질 수 있습니다.',
      },
      {
        question: '불법촬영 혐의가 기소되면 어떻게 되나요?',
        answer: '성폭력처벌법 제14조에 따라 <strong>7년 이하 징역 또는 5,000만원 이하 벌금</strong>에 처해질 수 있고, <strong>신상정보 등록</strong> 대상이 됩니다. 기소 전에 방어하는 것이 매우 중요합니다.',
      },
      {
        question: '무혐의 처분을 받으면 기록이 남나요?',
        answer: '<strong>불기소 처분</strong>은 전과 기록에 남지 않습니다. 다만 수사 경력은 수사기관 내부 기록에 남을 수 있으나, 일반적인 취업이나 생활에는 영향이 없습니다.',
      },
      {
        question: '회사에 알려지나요?',
        answer: '수사기관이 직장에 <strong>통보할 의무는 없습니다</strong>. 다만 구속되거나 언론 보도가 되면 알려질 수 있으므로, 불구속 수사 단계에서 빠르게 무혐의를 받는 것이 중요합니다.',
      },
      {
        question: '변호사 비용은 어느 정도인가요?',
        answer: '성범죄 사건 변호 비용은 사안에 따라 다르지만, 수사 단계 변호는 통상 <strong>300만~1,000만원</strong> 수준입니다. 경제적 여건이 어려우면 <strong>대한법률구조공단</strong>(132)에서 무료 법률 지원을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '불법촬영 무고 상황에 맞는 방어 전략을 확인해보세요',
      link: '/diagnosis/digital-sex-crime',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '디지털성범죄 진단', href: '/diagnosis/digital-sex-crime' },
      { label: '불법촬영 증거 확보·신고', href: '/guide/digital-sex-crime/hidden-camera-evidence-report' },
      { label: '성범죄 무고 대응', href: '/guide/sex-crime/sex-crime-false-accusation-counter' },
    ],
  },
];
