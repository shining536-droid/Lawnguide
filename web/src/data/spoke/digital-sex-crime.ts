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
];
