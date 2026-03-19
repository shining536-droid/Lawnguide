import { SpokePage } from '../spoke-pages';

export const defamationPages: SpokePage[] = [
  {
    domain: 'defamation',
    slug: 'online-defamation-response',
    keyword: '악플로 명예훼손 당했을 때 대응법',
    questionKeyword: '악플로 명예훼손을 당했는데 어떻게 대응하나요?',
    ctaKeyword: '온라인 명예훼손 대응',
    type: '상황형',
    meta: {
      title: '악플로 명예훼손 당했을 때 대응법 | 로앤가이드',
      description: '온라인 악성 댓글로 명예훼손을 당했을 때 증거 수집, 고소 절차, 손해배상 방법을 정리했습니다.',
    },
    intro: 'SNS에 나에 대한 허위 사실이 퍼지고 있습니다. 악성 댓글과 게시글로 직장 생활까지 영향을 받고 있습니다. 온라인 명예훼손에 대응하는 법적 절차를 정리했습니다.',
    timelineSteps: ['증거 확보', '삭제 요청', '형사 고소', '민사 손해배상'],
    sections: [
      {
        title: '먼저 게시글과 댓글을 증거로 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">삭제되기 전에 스크린샷과 URL을 저장하세요</strong></p>\n<p>명예훼손 게시글이나 악성 댓글은 <strong>언제든 삭제될 수 있습니다</strong>. 발견 즉시 ①<strong>화면 캡처</strong>(URL, 작성 일시, 작성자 ID가 보이도록), ②해당 페이지 URL, ③가능하면 웹페이지 저장(PDF)을 해두세요.</p>\n<p>댓글이 여러 개면 <strong>전체 목록</strong>을 캡처하세요. 스크린샷에 날짜와 시간이 표시되도록 하는 것이 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거: 스크린샷(URL+일시+작성자), 페이지 URL, PDF 저장</blockquote>',
      },
      {
        title: '플랫폼에 삭제와 작성자 정보 제공을 요청하세요',
        content:
          '<p><strong style="color:#1e3a5f">정보통신망법에 따라 게시물 삭제를 요청할 수 있습니다</strong></p>\n<p><strong>정보통신망법 제44조의2</strong>에 따라 명예훼손 게시물의 삭제를 플랫폼(네이버, 카카오, 인스타그램 등)에 요청할 수 있습니다. 각 플랫폼의 신고 기능을 이용하세요.</p>\n<p>형사 고소를 진행하면 수사기관이 플랫폼에 <strong>작성자 정보(IP 주소, 가입 정보)</strong>를 요청합니다. 개인이 직접 요청하는 것보다 수사기관을 통하는 것이 효과적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">조치: 플랫폼 삭제 요청 + 형사 고소를 통한 작성자 특정</blockquote>',
      },
      {
        title: '형사 고소를 진행하세요',
        content:
          '<p><strong style="color:#1e3a5f">명예훼손죄 또는 모욕죄로 고소할 수 있습니다</strong></p>\n<p><strong>허위 사실</strong>에 의한 명예훼손은 형법 제307조 제2항(5년 이하 징역/10년 이하 자격정지/1,000만원 이하 벌금), <strong>사실 적시</strong>에 의한 명예훼손은 제307조 제1항(2년 이하 징역/500만원 이하 벌금)입니다.</p>\n<p><strong>정보통신망법 제70조</strong>에 의한 사이버 명예훼손은 더 무거운 처벌(허위 사실: 7년 이하 징역/10년 이하 자격정지/5,000만원 이하 벌금)이 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">처벌: 허위사실 사이버 명예훼손 → 7년 이하 징역/5,000만원 이하 벌금</blockquote>',
      },
      {
        title: '민사 손해배상도 청구할 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">형사 절차와 별도로 정신적 손해배상을 청구할 수 있습니다</strong></p>\n<p>명예훼손으로 인한 <strong>정신적 고통</strong>에 대해 위자료를 청구할 수 있습니다. 직장 해고, 계약 파기 등 <strong>재산적 손해</strong>가 발생했다면 그 손해도 배상받을 수 있습니다.</p>\n<p>소송 전 <strong>법원 조정</strong>을 통해 합의할 수도 있습니다. 가해자 특정은 형사 절차에서 확인된 정보를 활용합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">청구: 위자료(정신적 손해) + 재산적 손해 | 형사와 별도 민사소송</blockquote>',
      },
    ],
    cases: [
      {
        title: '온라인 허위 사실 게시로 벌금이 선고된 사례',
        summary:
          '관련 사례에서도 SNS에 타인에 대한 허위 사실을 게시하여 정보통신망법 위반으로 벌금 300만원이 선고된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 허위 사실임을 입증할 증거를 확보하고, 사이버 명예훼손으로 고소하세요.',
      },
      {
        title: '악성 댓글 작성자에게 위자료가 인정된 사례',
        summary:
          '관련 사례에서도 반복적인 악성 댓글로 인해 피해자에게 정신적 고통이 인정되어 위자료 500만원이 판결된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 정신과 진료 기록, 업무 피해 증빙 등을 확보해두면 손해배상 청구에 유리합니다.',
      },
    ],
    faq: [
      {
        question: '사실을 말한 것도 명예훼손인가요?',
        answer: '네, <strong>사실 적시</strong>에 의한 명예훼손도 성립합니다. 다만 공익 목적이면 위법성이 조각될 수 있습니다.',
      },
      {
        question: '모욕과 명예훼손의 차이는?',
        answer: '명예훼손은 <strong>구체적 사실을 적시</strong>해야 하고, 모욕은 사실 적시 없이 경멸적 표현을 하는 것입니다.',
      },
      {
        question: '익명 댓글의 작성자를 찾을 수 있나요?',
        answer: '형사 고소 후 수사기관이 플랫폼에 <strong>IP 주소와 가입 정보</strong>를 요청하여 특정할 수 있습니다.',
      },
      {
        question: '명예훼손 고소 기한은?',
        answer: '범인을 알게 된 날로부터 <strong>6개월 이내</strong>에 고소해야 합니다(친고죄).',
      },
      {
        question: '고소장은 어디에 제출하나요?',
        answer: '가해자 주소지나 범행지(서버 소재지 포함) 관할 <strong>경찰서</strong>에 제출합니다.',
      },
      {
        question: '사이버 명예훼손 전담 수사기관이 있나요?',
        answer: '<strong>경찰 사이버수사대</strong>에서 전담 수사합니다.',
      },
      {
        question: '게시글이 이미 삭제됐으면 고소 못 하나요?',
        answer: '미리 확보한 스크린샷이 있으면 <strong>증거로 활용</strong>할 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '내 명예훼손 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/defamation',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '명예훼손 진단', href: '/diagnosis/defamation' },
      { label: '명예훼손 고소장 쓰기 전 준비할 것', href: '/guide/defamation/defamation-complaint-prep' },
      { label: '폭행 피해 증거 모으는 법', href: '/guide/assault/assault-evidence-collection' },
      { label: '사기 가이드', href: '/guide/fraud' },
    ],
  },
  {
    domain: 'defamation',
    slug: 'defamation-complaint-prep',
    keyword: '명예훼손 고소장 쓰기 전 준비할 것',
    questionKeyword: '명예훼손 고소장을 쓰려면 무엇을 준비해야 하나요?',
    ctaKeyword: '명예훼손 고소 준비',
    type: '준비서류형',
    meta: {
      title: '명예훼손 고소장 쓰기 전 준비할 것 | 로앤가이드',
      description: '명예훼손 고소장 작성 전 준비해야 할 증거, 서류, 고소 요건을 정리했습니다.',
    },
    intro: '명예훼손으로 고소하려고 합니다. 하지만 고소장을 어떻게 쓰는지, 어떤 증거를 준비해야 하는지 잘 모르겠습니다. 고소장 작성 전에 반드시 준비해야 할 사항을 정리했습니다.',
    timelineSteps: ['고소 요건 확인', '증거 수집', '고소장 작성', '경찰서 제출'],
    sections: [
      {
        title: '명예훼손 고소 요건을 먼저 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">공연성, 사실 적시, 명예 훼손 3가지 요건이 필요합니다</strong></p>\n<p>명예훼손이 성립하려면 ①<strong>공연성</strong>(불특정 또는 다수가 인식할 수 있는 상태), ②<strong>사실의 적시</strong>(구체적 사실을 표현), ③타인의 <strong>사회적 평가를 저하</strong>시키는 것이 필요합니다.</p>\n<p>단순한 욕설이나 비하는 <strong>모욕죄</strong>에 해당할 수 있습니다. 명예훼손과 모욕의 구별이 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">요건: ①공연성 ②사실 적시 ③명예(사회적 평가) 저하</blockquote>',
      },
      {
        title: '증거를 체계적으로 수집하세요',
        content:
          '<p><strong style="color:#1e3a5f">게시글, 대화 내역, 목격자 진술 등을 정리하세요</strong></p>\n<p><strong>온라인</strong>: 게시글·댓글 스크린샷(URL, 일시, 작성자 포함), 페이지 PDF 저장. <strong>오프라인</strong>: 발언 녹음(본인이 당사자인 대화), 목격자 연락처와 진술서.</p>\n<p>허위 사실인 경우 <strong>"거짓"임을 증명할 자료</strong>(진단서, 재직증명서, 계약서 등)도 필요합니다. 피해 사실(정신과 진료, 업무 불이익 등)도 정리해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거: 스크린샷/녹음, 허위임 증명 자료, 피해 증빙(진료 기록 등)</blockquote>',
      },
      {
        title: '고소장에 포함할 내용을 정리하세요',
        content:
          '<p><strong style="color:#1e3a5f">고소인, 피고소인, 범죄 사실, 증거를 기재합니다</strong></p>\n<p>고소장에는 ①<strong>고소인</strong>(본인) 인적사항, ②<strong>피고소인</strong>(가해자) 정보(모르면 "성명불상"으로 기재), ③<strong>고소 취지</strong>("명예훼손으로 처벌 바랍니다"), ④<strong>범죄 사실</strong>(언제, 어디서, 어떤 내용을, 어떤 방법으로), ⑤증거 목록을 기재합니다.</p>\n<p>범죄 사실은 <strong>6하원칙</strong>에 따라 구체적으로 작성하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">구성: 고소인·피고소인 정보, 고소 취지, 범죄 사실(6하원칙), 증거 목록</blockquote>',
      },
      {
        title: '고소장 제출과 이후 절차',
        content:
          '<p><strong style="color:#1e3a5f">관할 경찰서에 고소장과 증거를 함께 제출하세요</strong></p>\n<p>가해자 주소지 또는 범행지(온라인의 경우 피해자 주소지도 가능) 관할 <strong>경찰서</strong>에 제출합니다. 사이버 명예훼손은 <strong>사이버수사대</strong>에 접수할 수도 있습니다.</p>\n<p>접수 후 경찰이 피고소인을 소환하여 조사합니다. 명예훼손은 <strong>친고죄</strong>(범인을 안 날로부터 6개월 이내 고소)이므로 기한을 반드시 지키세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">제출: 경찰서/사이버수사대 | 기한: 범인을 안 날로부터 6개월(친고죄)</blockquote>',
      },
    ],
    cases: [
      {
        title: '체계적인 증거 수집으로 고소가 인용된 사례',
        summary:
          '관련 사례에서도 피해자가 게시글 스크린샷, 작성 시간, 조회수, 댓글 반응 등을 체계적으로 정리하여 제출함으로써 명예훼손이 인정되어 가해자가 벌금형을 받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 증거를 날짜순으로 정리하고, 조회수·공유 횟수 등 파급력을 보여주는 자료도 함께 확보하세요.',
      },
      {
        title: '고소 기한(6개월)을 놓쳐 각하된 사례',
        summary:
          '관련 사례에서도 명예훼손 피해자가 가해자를 알고도 6개월이 지나 고소하여 각하된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 가해자를 특정한 즉시 고소 절차를 진행하세요. 6개월 기한이 매우 중요합니다.',
      },
    ],
    faq: [
      {
        question: '고소장 양식이 정해져 있나요?',
        answer: '법정 양식은 없지만, <strong>경찰서나 대한법률구조공단</strong>에서 샘플을 받을 수 있습니다.',
      },
      {
        question: '피고소인을 모르면 고소할 수 있나요?',
        answer: '네, <strong>"성명불상"</strong>으로 고소할 수 있습니다. 수사를 통해 특정합니다.',
      },
      {
        question: '고소 비용은 얼마인가요?',
        answer: '형사 고소 자체는 <strong>무료</strong>입니다. 변호사를 선임하면 별도 비용이 듭니다.',
      },
      {
        question: '고소 취하가 가능한가요?',
        answer: '제1심 판결 선고 전까지 <strong>고소 취하</strong>가 가능합니다.',
      },
      {
        question: '합의금은 보통 얼마인가요?',
        answer: '사안에 따라 다르지만, 온라인 명예훼손 합의금은 통상 <strong>100~500만원</strong> 수준입니다.',
      },
      {
        question: '무고죄 역고소를 당할 수 있나요?',
        answer: '허위 사실로 고소한 것이 아니라면 <strong>무고죄 성립이 어렵습니다</strong>.',
      },
      {
        question: '사이버 명예훼손 신고는 어디서 하나요?',
        answer: '<strong>경찰 사이버수사대</strong> 또는 사이버범죄 신고시스템(ecrm.police.go.kr)에서 접수할 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '내 명예훼손 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/defamation',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '명예훼손 진단', href: '/diagnosis/defamation' },
      { label: '악플로 명예훼손 당했을 때 대응법', href: '/guide/defamation/online-defamation-response' },
      { label: '폭행 피해 증거 모으는 법', href: '/guide/assault/assault-evidence-collection' },
      { label: '사기 가이드', href: '/guide/fraud' },
    ],
  },
  {
    domain: 'defamation',
    slug: 'online-defamation-lawsuit-process',
    keyword: '인터넷 악플 명예훼손 고소 절차와 준비 서류',
    questionKeyword: '인터넷 악플로 명예훼손 고소하려면 어떤 절차와 서류가 필요한가요?',
    ctaKeyword: '인터넷 명예훼손 고소 준비',
    type: '절차형',
    meta: {
      title: '인터넷 악플 명예훼손 고소 절차와 준비 서류 | 로앤가이드',
      description: '인터넷 커뮤니티 악성 댓글로 명예훼손을 당했을 때 고소 절차와 준비해야 할 서류를 정리했습니다.',
    },
    intro: '인터넷 커뮤니티에 본인에 대한 허위 글이 올라왔습니다. 고소하고 싶은데 어디서부터 시작해야 하는지, 어떤 서류를 준비해야 하는지 막막합니다. 악플 명예훼손 고소 절차와 필요한 준비 서류를 정리했습니다.',
    timelineSteps: ['증거 캡처', '고소장 작성', '경찰서 제출', '임시조치·민사 병행'],
    sections: [
      {
        title: '증거 캡처부터 하세요 — URL, 일시, 작성자 정보가 핵심입니다',
        content:
          '<p><strong style="color:#1e3a5f">삭제 전에 스크린샷과 URL을 반드시 저장하세요</strong></p>\n<p>악성 게시글이나 댓글은 <strong>언제든 삭제될 수 있습니다</strong>. 발견 즉시 ①<strong>화면 캡처</strong>(URL 주소창, 작성 일시, 작성자 ID가 모두 보이도록), ②해당 페이지 URL 복사, ③웹페이지 PDF 저장을 해두세요.</p>\n<p>댓글이 여러 개라면 전체 목록을 캡처하고, <strong>날짜와 시간이 표시</strong>된 상태로 저장하는 것이 중요합니다. 캡처 시점도 기록해두면 증거 신빙성이 높아집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">최우선: 스크린샷(URL+일시+작성자), 페이지 URL, PDF 저장 — 삭제 전 즉시 확보</blockquote>',
      },
      {
        title: '고소장을 작성하세요 — 허위사실 명예훼손과 모욕을 구분해야 합니다',
        content:
          '<p><strong style="color:#1e3a5f">구체적 사실 적시 여부에 따라 적용 법조가 달라집니다</strong></p>\n<p><strong>허위사실 명예훼손</strong>(형법 제307조 제2항)은 거짓 사실을 적시하여 명예를 훼손한 경우이고, <strong>모욕죄</strong>(형법 제311조)는 구체적 사실 없이 경멸적 표현을 한 경우입니다. 온라인이면 <strong>정보통신망법 제70조</strong>가 적용되어 더 무거운 처벌이 가능합니다.</p>\n<p>고소장에는 고소인·피고소인 정보, 고소 취지, 범죄 사실(언제·어디서·어떤 내용), 증거 목록을 기재하세요. 피고소인을 모르면 <strong>"성명불상"</strong>으로 기재할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">구분: 허위사실 → 명예훼손(307조2항) | 경멸적 표현 → 모욕(311조) | 온라인 → 정보통신망법 70조</blockquote>',
      },
      {
        title: '경찰서 또는 사이버수사대에 제출하세요',
        content:
          '<p><strong style="color:#1e3a5f">관할 경찰서 또는 사이버수사대에 고소장과 증거를 함께 제출하세요</strong></p>\n<p>가해자 주소지 또는 범행지(피해자 주소지 포함) 관할 <strong>경찰서</strong>에 제출하거나, <strong>경찰 사이버수사대</strong>에 접수할 수 있습니다. 사이버범죄 신고시스템(ecrm.police.go.kr)을 통한 온라인 접수도 가능합니다.</p>\n<p>접수 후 경찰이 플랫폼에 작성자 <strong>IP 주소와 가입 정보</strong>를 요청하여 가해자를 특정합니다. 명예훼손은 <strong>친고죄</strong>이므로 범인을 안 날로부터 6개월 이내에 반드시 고소해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">제출처: 경찰서/사이버수사대/ecrm.police.go.kr | 기한: 범인을 안 날로부터 6개월</blockquote>',
      },
      {
        title: '임시조치 신청과 민사 손해배상을 병행하세요',
        content:
          '<p><strong style="color:#1e3a5f">방통위 임시조치로 게시글 차단, 민사 소송으로 배상을 받을 수 있습니다</strong></p>\n<p>형사 고소와 별도로 <strong>방송통신위원회(1377)</strong>에 임시조치를 신청하면 해당 게시글을 30일간 차단할 수 있습니다. 정보통신망법 제44조의2에 근거한 절차입니다.</p>\n<p>정신적 고통에 대한 <strong>위자료</strong>와 직장·계약 피해 등 재산적 손해배상을 민사소송으로 청구할 수 있습니다. 형사 절차에서 특정된 가해자 정보를 민사에 활용하면 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">병행: 임시조치(방통위 1377) + 민사 손해배상(위자료+재산적 손해)</blockquote>',
      },
    ],
    cases: [
      {
        title: '커뮤니티 허위 게시글로 사이버 명예훼손이 인정된 사례',
        summary:
          '관련 사례에서도 인터넷 커뮤니티에 특정인에 대한 허위 사실을 게시하여 정보통신망법 위반(명예훼손)으로 벌금 500만원이 선고된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 허위 사실임을 증명할 자료를 함께 확보하고, URL과 작성 일시를 포함한 스크린샷을 준비하세요.',
      },
      {
        title: '증거 미확보로 고소가 어려웠던 사례',
        summary:
          '관련 사례에서도 악성 댓글이 삭제된 후 고소했으나 증거 부족으로 수사가 진행되지 못한 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 게시글을 발견한 즉시 캡처하세요. 삭제 후에는 증거 확보가 매우 어려워집니다.',
      },
    ],
    faq: [
      {
        question: '악플이 몇 개여야 고소할 수 있나요?',
        answer: '댓글 수와 관계없이 <strong>1건이라도</strong> 명예훼손이나 모욕에 해당하면 고소할 수 있습니다.',
      },
      {
        question: '작성자가 누군지 모르는데 고소가 되나요?',
        answer: '네, <strong>"성명불상"</strong>으로 고소하면 수사기관이 IP 추적 등을 통해 특정합니다.',
      },
      {
        question: '캡처만으로 증거가 되나요?',
        answer: 'URL, 작성 일시, 작성자 ID가 포함된 스크린샷은 <strong>유효한 증거</strong>로 인정됩니다.',
      },
      {
        question: '임시조치 신청은 어디에 하나요?',
        answer: '<strong>방송통신위원회(1377)</strong> 또는 해당 플랫폼의 신고 기능을 이용할 수 있습니다.',
      },
      {
        question: '고소 비용이 드나요?',
        answer: '형사 고소 자체는 <strong>무료</strong>입니다. 변호사를 선임하면 별도 비용이 발생합니다.',
      },
      {
        question: '모욕과 명예훼손 중 어떤 걸로 고소해야 하나요?',
        answer: '구체적 사실을 적시했으면 <strong>명예훼손</strong>, 단순 욕설이나 비하 표현이면 <strong>모욕</strong>으로 구분합니다.',
      },
      {
        question: '합의하면 고소 취하가 되나요?',
        answer: '제1심 판결 선고 전까지 <strong>고소 취하</strong>가 가능합니다. 합의 후 취하하는 경우가 많습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '내 명예훼손 상황에 맞는 고소 절차를 확인해보세요',
      link: '/diagnosis/defamation',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '명예훼손 진단', href: '/diagnosis/defamation' },
      { label: '악플로 명예훼손 당했을 때 대응법', href: '/guide/defamation/online-defamation-response' },
      { label: '명예훼손 고소장 쓰기 전 준비할 것', href: '/guide/defamation/defamation-complaint-prep' },
      { label: '사기 가이드', href: '/guide/fraud' },
    ],
  },
  {
    domain: 'defamation',
    slug: 'truth-defamation-accused-response',
    keyword: '사실을 말했는데 명예훼손으로 고소당했을 때',
    questionKeyword: '사실을 말했는데 명예훼손으로 고소당했으면 어떻게 대응해야 하나요?',
    ctaKeyword: '명예훼손 혐의 대응',
    type: '상황형',
    meta: {
      title: '사실을 말했는데 명예훼손으로 고소당했을 때 | 로앤가이드',
      description: '실제 경험을 사실대로 말했는데 명예훼손으로 고소당한 경우, 형법 310조 공익목적 면책과 대응 방법을 정리했습니다.',
    },
    intro: '실제 겪은 일을 후기로 올렸는데 상대방이 명예훼손으로 고소하겠다고 합니다. 사실인데도 처벌받을 수 있는 건지, 어떻게 대응해야 하는지 막막합니다. 사실과 다르게 고소되었다면 아래 내용을 정리해보세요.',
    timelineSteps: ['사실적시 명예훼손 이해', '공익목적 면책 검토', '증거 확보', '경찰 조사 대응'],
    sections: [
      {
        title: '사실을 말해도 명예훼손이 될 수 있습니다 — 형법 307조 1항',
        content:
          '<p><strong style="color:#1e3a5f">사실적시 명예훼손은 진실한 사실이라도 성립할 수 있습니다</strong></p>\n<p>형법 제307조 제1항은 <strong>공연히 사실을 적시</strong>하여 사람의 명예를 훼손한 경우 2년 이하의 징역이나 금고 또는 500만원 이하의 벌금에 처한다고 규정하고 있습니다. 즉, 내용이 사실이더라도 명예훼손이 성립할 수 있습니다.</p>\n<p>허위사실 명예훼손(제307조 제2항)보다 형량이 가볍지만, <strong>전과가 될 수 있다</strong>는 점에서 가볍게 볼 문제가 아닙니다. 다만, 중요한 면책 규정이 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 형법 307조 1항 — 사실이라도 명예훼손 성립 가능(2년 이하 징역/500만원 이하 벌금)</blockquote>',
      },
      {
        title: '공익 목적이면 처벌받지 않을 수 있습니다 — 형법 310조',
        content:
          '<p><strong style="color:#1e3a5f">진실한 사실 + 공익 목적이면 위법성이 조각됩니다</strong></p>\n<p>형법 제310조는 <strong>"진실한 사실로서 오로지 공공의 이익에 관한 때에는 처벌하지 아니한다"</strong>고 규정하고 있습니다. 이 조항이 사실적시 명예훼손의 핵심 방어 수단입니다.</p>\n<p>판례에 따르면 "오로지 공공의 이익"은 엄격하게 해석하지 않으며, <strong>주된 동기가 공익</strong>이면 개인적 감정이 일부 포함되어도 인정될 수 있습니다. 소비자 후기, 피해 경험 공유, 부정행위 고발 등이 대표적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">면책: 형법 310조 — 진실 + 공익 목적 → 위법성 조각(처벌 안 됨)</blockquote>',
      },
      {
        title: '내용이 사실임을 증명하는 자료를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">작성한 내용이 진실이라는 증거가 가장 중요합니다</strong></p>\n<p>본인이 작성한 글의 내용이 <strong>사실임을 뒷받침하는 자료</strong>를 모으세요. 계약서, 영수증, 사진, 대화 내역(카카오톡, 문자), 녹음 파일, 목격자 진술 등이 해당됩니다.</p>\n<p>글을 작성하게 된 <strong>경위와 동기</strong>도 정리하세요. 소비자 피해 공유, 다른 피해자 예방 등 공익적 목적이 있었음을 보여주는 것이 310조 적용에 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거: 사실 증명 자료(계약서/영수증/대화내역) + 공익 목적 소명 자료</blockquote>',
      },
      {
        title: '경찰 조사에 대응하고 변호사 상담을 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">출석 요구를 받으면 침착하게 준비하고 변호사 상담을 받으세요</strong></p>\n<p>경찰에서 <strong>피의자 출석 요구</strong>를 받더라도 당황하지 마세요. 출석 전에 사실관계를 정리하고, 증거 자료를 준비하세요. 진술 시 형법 310조 공익 목적을 명확히 주장하는 것이 중요합니다.</p>\n<p>사안이 복잡하거나 형사처벌이 우려된다면 <strong>변호사 상담</strong>을 먼저 받는 것이 좋습니다. 대한법률구조공단(132)이나 지방변호사회 무료 법률상담을 활용해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">대응: 사실관계 정리 + 증거 준비 + 310조 공익 주장 + 변호사 상담</blockquote>',
      },
    ],
    cases: [
      {
        title: '소비자 후기가 공익 목적으로 인정되어 무죄가 된 사례',
        summary:
          '관련 사례에서도 소비자가 실제 경험한 피해 사실을 인터넷에 게시하여 명예훼손으로 고소되었으나, 진실한 사실이고 공익 목적이 인정되어 무죄 판결을 받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 작성 내용이 사실임을 증명할 자료를 확보하고, 글을 쓴 동기가 피해 예방 등 공익적이었음을 소명하세요.',
      },
      {
        title: '과장된 표현으로 면책이 인정되지 않은 사례',
        summary:
          '관련 사례에서도 사실에 기반했으나 과장되거나 감정적인 표현이 포함되어 공익 목적이 부정되고 유죄가 선고된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 글을 작성할 때 사실에 근거한 객관적 표현을 사용하고, 감정적 비난은 자제하세요.',
      },
    ],
    faq: [
      {
        question: '사실을 말했는데 정말 처벌받을 수 있나요?',
        answer: '네, 형법 307조 1항에 따라 <strong>사실적시 명예훼손</strong>이 성립할 수 있습니다. 다만 공익 목적이면 형법 310조로 면책됩니다.',
      },
      {
        question: '형법 310조가 적용되려면 어떤 조건이 필요한가요?',
        answer: '①내용이 <strong>진실한 사실</strong>이고 ②주된 동기가 <strong>공공의 이익</strong>에 관한 것이어야 합니다.',
      },
      {
        question: '후기를 쓴 게 공익 목적으로 인정되나요?',
        answer: '소비자 피해 공유, 다른 피해자 예방 등의 목적이면 <strong>공익으로 인정</strong>될 수 있습니다.',
      },
      {
        question: '고소당하면 바로 체포되나요?',
        answer: '아닙니다. 먼저 경찰에서 <strong>출석 요구</strong>를 받고, 조사 후 검찰 송치 여부가 결정됩니다.',
      },
      {
        question: '경찰 조사에서 뭘 주장해야 하나요?',
        answer: '작성 내용이 <strong>사실임을 증명</strong>하고, <strong>공익 목적</strong>(형법 310조)을 명확히 주장하세요.',
      },
      {
        question: '글을 삭제하면 고소가 취하되나요?',
        answer: '글 삭제와 고소 취하는 별개입니다. 다만 합의 과정에서 <strong>삭제가 조건</strong>이 되는 경우가 많습니다.',
      },
      {
        question: '역으로 무고죄로 고소할 수 있나요?',
        answer: '상대방이 허위 사실로 고소한 것이 명백하다면 <strong>무고죄</strong>(형법 제156조) 고소를 검토할 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '내 명예훼손 상황에 맞는 대응 방법을 확인해보세요',
      link: '/diagnosis/defamation',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '명예훼손 진단', href: '/diagnosis/defamation' },
      { label: '악플로 명예훼손 당했을 때 대응법', href: '/guide/defamation/online-defamation-response' },
      { label: '명예훼손 고소장 쓰기 전 준비할 것', href: '/guide/defamation/defamation-complaint-prep' },
      { label: '사기 가이드', href: '/guide/fraud' },
    ],
  },
  {
    domain: 'defamation',
    slug: 'online-insult-lawsuit-penalty',
    keyword: '온라인 모욕죄 고소 방법과 처벌 수위',
    questionKeyword: '온라인에서 모욕을 당했는데 고소할 수 있나요?',
    ctaKeyword: '온라인 모욕죄 고소',
    type: '절차형',
    meta: {
      title: '온라인 모욕죄 고소 방법과 처벌 수위 | 로앤가이드',
      description: '온라인에서 모욕을 당했을 때 모욕죄 성립 요건, 증거 확보 방법, 고소 절차, 처벌 수위를 정리했습니다.',
    },
    intro: '인터넷 게시판에서 누군가가 본인을 지칭하며 심한 욕설과 비하 표현을 반복하고 있습니다. 캡처는 해뒀는데 이걸로 고소가 가능한 건지, 명예훼손과는 어떻게 다른 건지 막막합니다. 온라인 모욕죄의 성립 요건과 고소 절차를 정리했습니다.',
    timelineSteps: ['모욕죄 요건 확인', '증거 확보', '고소장 작성·제출', '형사·민사 병행'],
    sections: [
      {
        title: '모욕죄 성립 요건을 먼저 확인하세요 — 형법 제311조',
        content:
          '<p><strong style="color:#1e3a5f">공연성 + 모욕(경멸적 표현)이 핵심 요건입니다</strong></p>\n<p><strong>형법 제311조</strong>는 "공연히 사람을 모욕한 자는 1년 이하의 징역이나 금고 또는 200만원 이하의 벌금에 처한다"고 규정합니다. 여기서 <strong>공연성</strong>이란 불특정 또는 다수가 인식할 수 있는 상태를 말합니다.</p>\n<p>인터넷 게시판, SNS 댓글, 오픈 채팅방 등은 <strong>공연성이 인정</strong>되는 대표적인 공간입니다. 1:1 메시지라도 전파 가능성이 있으면 공연성이 인정될 수 있습니다.</p>\n<p>모욕이란 <strong>구체적 사실을 적시하지 않고</strong> 경멸적 감정을 표현하는 것입니다. "XX 같은 놈", "쓰레기" 등 단순 욕설이나 비하 표현이 해당됩니다. 구체적 사실을 적시했다면 명예훼손이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">요건: ①공연성(불특정·다수 인식 가능) ②모욕(사실 적시 없이 경멸적 표현) → 형법 311조</blockquote>',
      },
      {
        title: '증거를 확보하세요 — 스크린샷에 URL과 일시가 포함되어야 합니다',
        content:
          '<p><strong style="color:#1e3a5f">삭제되기 전에 증거를 반드시 확보하세요</strong></p>\n<p>온라인 모욕은 <strong>언제든 삭제될 수 있습니다</strong>. 발견 즉시 다음을 저장하세요. ①<strong>화면 캡처</strong>(URL 주소창, 작성 일시, 작성자 ID가 모두 보이도록), ②해당 페이지 URL 복사, ③가능하면 웹페이지 PDF 저장.</p>\n<p>반복적 모욕이라면 <strong>모든 건</strong>을 날짜순으로 정리하세요. 댓글이 여러 개면 전체 목록을 캡처하는 것이 중요합니다. 캡처 시점도 기록해두면 증거 신빙성이 높아집니다.</p>\n<p>모욕 표현이 <strong>본인을 특정</strong>할 수 있는지도 확인하세요. 닉네임, 실명, 직장명 등으로 피해자가 누구인지 알 수 있어야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거: 스크린샷(URL+일시+작성자), 페이지 URL, PDF 저장, 피해자 특정 가능 여부</blockquote>',
      },
      {
        title: '고소장을 작성하고 경찰서에 제출하세요',
        content:
          '<p><strong style="color:#1e3a5f">모욕죄는 친고죄이므로 6개월 이내에 고소해야 합니다</strong></p>\n<p>모욕죄는 <strong>친고죄</strong>입니다. 범인을 알게 된 날로부터 <strong>6개월 이내</strong>에 고소해야 합니다. 기한을 놓치면 고소할 수 없으므로 반드시 기한을 확인하세요.</p>\n<p>고소장에는 ①고소인 인적사항, ②피고소인 정보(모르면 <strong>"성명불상"</strong>), ③고소 취지("모욕죄로 처벌해 주시기 바랍니다"), ④범죄 사실(언제, 어디서, 어떤 표현으로), ⑤증거 목록을 기재합니다.</p>\n<p>관할 <strong>경찰서</strong> 또는 <strong>사이버수사대</strong>에 제출하세요. 사이버범죄 신고시스템(ecrm.police.go.kr)을 통한 온라인 접수도 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기한: 범인을 안 날로부터 6개월(친고죄) | 제출: 경찰서/사이버수사대/ecrm.police.go.kr</blockquote>',
      },
      {
        title: '명예훼손과 모욕죄의 차이를 정확히 구분하세요',
        content:
          '<p><strong style="color:#1e3a5f">구체적 사실 적시 여부가 구분 기준입니다</strong></p>\n<p><strong>명예훼손</strong>은 "A가 횡령을 했다"처럼 <strong>구체적 사실을 적시</strong>하여 명예를 훼손하는 것이고, <strong>모욕</strong>은 "A는 쓰레기다"처럼 사실 적시 없이 <strong>경멸적 감정을 표현</strong>하는 것입니다.</p>\n<p>처벌 수위도 다릅니다. 모욕죄는 <strong>1년 이하 징역/200만원 이하 벌금</strong>이고, 사실적시 명예훼손은 <strong>2년 이하 징역/500만원 이하 벌금</strong>, 허위사실 명예훼손은 <strong>5년 이하 징역/1,000만원 이하 벌금</strong>입니다.</p>\n<p>온라인 명예훼손은 <strong>정보통신망법 제70조</strong>가 적용되어 더 무거운 처벌이 가능하지만, 모욕죄에는 정보통신망법 가중 규정이 없습니다. 다만 민사 손해배상은 별도로 청구할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">구분: 사실 적시 → 명예훼손(307조) | 경멸 표현만 → 모욕(311조) | 온라인 명예훼손 → 정보통신망법 70조</blockquote>',
      },
    ],
    cases: [
      {
        title: '인터넷 게시판 반복 욕설로 모욕죄가 인정된 사례',
        summary:
          '관련 사례에서도 인터넷 커뮤니티에서 특정인을 지칭하며 반복적으로 경멸적 표현을 사용한 작성자에게 모욕죄가 인정되어 벌금 100만원이 선고된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 모든 모욕 게시글을 날짜순으로 캡처하고, 피해자가 본인임을 특정할 수 있는 근거를 함께 정리하세요.',
      },
      {
        title: '피해자 특정이 어려워 모욕죄가 인정되지 않은 사례',
        summary:
          '관련 사례에서도 욕설이 있었으나 닉네임이나 실명 없이 불특정 대상에 대한 표현이어서 피해자가 누구인지 특정할 수 없다는 이유로 모욕죄가 불인정된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 모욕 표현이 본인을 명확히 지칭하고 있는지를 먼저 확인하세요. 닉네임, 직장명, 외모 묘사 등으로 특정 가능해야 합니다.',
      },
    ],
    faq: [
      {
        question: '욕설 한 번으로도 모욕죄가 성립하나요?',
        answer: '네, <strong>1회라도</strong> 공연성이 있는 공간에서 경멸적 표현을 했다면 성립할 수 있습니다.',
      },
      {
        question: '1:1 메시지로 받은 욕설도 모욕죄인가요?',
        answer: '원칙적으로 공연성이 부족하지만, <strong>전파 가능성</strong>이 있으면 인정될 수 있습니다.',
      },
      {
        question: '모욕죄 고소 기한은 얼마인가요?',
        answer: '범인을 알게 된 날로부터 <strong>6개월 이내</strong>입니다. 친고죄이므로 기한이 매우 중요합니다.',
      },
      {
        question: '작성자를 모르는데 고소할 수 있나요?',
        answer: '<strong>"성명불상"</strong>으로 고소하면 수사기관이 IP 추적 등을 통해 특정합니다.',
      },
      {
        question: '모욕죄 처벌 수위는 어느 정도인가요?',
        answer: '<strong>1년 이하 징역 또는 200만원 이하 벌금</strong>입니다. 벌금 50~150만원이 통상적입니다.',
      },
      {
        question: '모욕죄와 명예훼손 중 어떤 것으로 고소해야 하나요?',
        answer: '구체적 사실 적시가 있으면 <strong>명예훼손</strong>, 단순 욕설·비하면 <strong>모욕죄</strong>로 고소하세요.',
      },
      {
        question: '모욕죄로 손해배상도 받을 수 있나요?',
        answer: '형사 고소와 별도로 <strong>민사 손해배상(위자료)</strong>을 청구할 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '내 온라인 모욕 상황에 맞는 고소 절차를 확인해보세요',
      link: '/diagnosis/defamation',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '명예훼손 진단', href: '/diagnosis/defamation' },
      { label: '악플로 명예훼손 당했을 때 대응법', href: '/guide/defamation/online-defamation-response' },
      { label: '명예훼손 고소장 쓰기 전 준비할 것', href: '/guide/defamation/defamation-complaint-prep' },
      { label: '인터넷 악플 명예훼손 고소 절차와 준비 서류', href: '/guide/defamation/online-defamation-lawsuit-process' },
    ],
  },
  {
    domain: 'defamation',
    slug: 'public-interest-defamation-defense',
    keyword: '공익 목적 글인데 명예훼손 고소당했을 때',
    questionKeyword: '공익 목적으로 글을 썼는데 명예훼손으로 고소당했습니다',
    ctaKeyword: '공익 목적 명예훼손 방어',
    type: '상황형',
    meta: {
      title: '공익 목적 글인데 명예훼손 고소당했을 때 | 로앤가이드',
      description: '공익 목적으로 작성한 글이 명예훼손으로 고소된 경우, 위법성 조각사유와 방어 방법을 정리했습니다.',
    },
    intro: '소비자 피해 사례를 공유하거나 부정행위를 고발하는 글을 올렸는데 상대방이 명예훼손으로 고소하겠다고 합니다. 사실을 말했을 뿐인데 처벌받을 수 있는 건지 걱정됩니다. 사실과 다르게 신고되었다면 아래 위법성 조각사유와 방어 방법을 확인해보세요.',
    timelineSteps: ['위법성 조각사유 확인', '진실성 입증 자료 수집', '공익 목적 소명', '경찰 조사 대응'],
    sections: [
      {
        title: '형법 제310조 위법성 조각사유를 이해하세요',
        content:
          '<p><strong style="color:#1e3a5f">진실한 사실 + 공익 목적이면 처벌받지 않습니다</strong></p>\n<p><strong>형법 제310조</strong>는 "형법 제307조 제1항의 행위가 진실한 사실로서 오로지 공공의 이익에 관한 때에는 처벌하지 아니한다"고 규정합니다. 이것이 공익 목적 명예훼손의 핵심 방어 수단입니다.</p>\n<p>위법성이 조각되려면 두 가지 요건이 모두 충족되어야 합니다. ①작성한 내용이 <strong>진실한 사실</strong>이어야 하고, ②그 내용을 공표한 <strong>주된 동기가 공공의 이익</strong>에 관한 것이어야 합니다.</p>\n<p>판례는 "오로지 공공의 이익"을 엄격하게 해석하지 않습니다. <strong>주된 동기가 공익</strong>이면 부수적으로 개인적 감정이 포함되어 있더라도 공익 목적이 인정될 수 있습니다(대법원 2003도6036 참조).</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 형법 310조 — ①진실한 사실 + ②주된 동기가 공공의 이익 → 위법성 조각(처벌 없음)</blockquote>',
      },
      {
        title: '작성한 내용이 진실임을 입증할 자료를 모으세요',
        content:
          '<p><strong style="color:#1e3a5f">진실성 입증은 피고소인(글 작성자)이 해야 합니다</strong></p>\n<p>형법 제310조의 적용을 받으려면 <strong>내용이 사실이라는 증거</strong>를 제출해야 합니다. 계약서, 영수증, 사진, 카카오톡·문자 대화 내역, 녹음 파일, 목격자 진술서 등이 핵심 자료입니다.</p>\n<p>내용의 <strong>중요 부분이 사실</strong>이면 됩니다. 세부 사항에서 약간의 차이가 있더라도 핵심 내용이 진실이면 진실성이 인정될 수 있습니다. 다만 <strong>과장이나 왜곡</strong>이 심하면 진실성이 부정될 수 있으니 주의하세요.</p>\n<p>글을 작성할 때 사용한 <strong>원본 자료</strong>도 보관해두세요. 출처가 명확한 자료에 기반했다는 것을 보여주면 유리합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거: 계약서, 영수증, 대화 내역, 녹음, 목격자 진술, 원본 자료 — 핵심 내용의 진실성</blockquote>',
      },
      {
        title: '공익 목적이었음을 소명하세요',
        content:
          '<p><strong style="color:#1e3a5f">글을 작성한 동기와 경위가 공익 목적 인정의 핵심입니다</strong></p>\n<p>공익 목적으로 인정받기 위해서는 글을 쓴 <strong>동기와 경위</strong>를 구체적으로 정리해야 합니다. 소비자 피해 경험 공유, 다른 피해자 예방, 부정행위 고발, 공적 관심사에 대한 의견 개진 등이 대표적인 공익 목적입니다.</p>\n<p>판례에서 공익이 인정되는 경우: ①<strong>소비자 후기</strong>(서비스 피해 경험), ②<strong>직장 부당대우 폭로</strong>, ③<strong>공적 인물</strong>에 대한 비판, ④<strong>피해 사실 공유</strong>(사기, 불량 업체 등).</p>\n<p>반대로 공익이 부정되는 경우: ①<strong>사적 보복</strong> 목적이 주된 동기, ②개인 감정에 치우친 비방, ③<strong>과도한 인신공격</strong>이 포함된 경우. 글의 표현 방식도 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">공익 인정: 소비자 피해, 피해 예방, 공적 비판 | 공익 부정: 사적 보복, 인신공격, 감정적 비방</blockquote>',
      },
      {
        title: '경찰 조사에 대응하고 전문가 상담을 받으세요',
        content:
          '<p><strong style="color:#1e3a5f">출석 요구를 받으면 사실관계와 증거를 정리하고 대응하세요</strong></p>\n<p>경찰에서 <strong>피의자 출석 요구</strong>를 받더라도 당황하지 마세요. 출석 전에 다음을 준비하세요. ①작성한 글의 내용이 사실임을 증명하는 자료, ②글을 작성하게 된 경위와 동기 정리, ③공익 목적이었음을 보여주는 근거.</p>\n<p>진술 시 <strong>형법 제310조 위법성 조각사유</strong>를 명확히 주장하세요. "진실한 사실이고 공익 목적이었다"는 점을 구체적으로 진술하는 것이 중요합니다.</p>\n<p>사안이 복잡하거나 형사처벌이 우려된다면 <strong>변호사 상담</strong>을 받는 것이 좋습니다. <strong>대한법률구조공단</strong>(132)이나 지방변호사회 무료 법률상담을 활용해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">대응: 진실성 증거 + 공익 동기 정리 + 310조 주장 + 변호사 상담</blockquote>',
      },
    ],
    cases: [
      {
        title: '소비자 피해 후기가 공익 목적으로 인정되어 무죄가 된 사례',
        summary:
          '관련 사례에서도 의료 시술 피해를 인터넷에 게시하여 명예훼손으로 고소되었으나, 실제 경험에 기반한 진실한 사실이고 다른 소비자의 피해 예방이라는 공익 목적이 인정되어 무죄 판결을 받은 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 작성 내용의 진실성을 증명할 자료(진료 기록, 영수증 등)를 확보하고, 글 작성 동기가 피해 예방이었음을 소명하세요.',
      },
      {
        title: '감정적 표현이 과해 공익 목적이 부정된 사례',
        summary:
          '관련 사례에서도 사실에 기반했지만 "사기꾼", "인간 쓰레기" 등 과도한 인신공격 표현이 포함되어 공익 목적보다 사적 보복이 주된 동기로 판단되어 유죄가 선고된 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 글을 작성할 때 사실에 근거한 객관적 표현을 사용하고, 감정적 비난이나 인신공격은 반드시 자제하세요.',
      },
    ],
    faq: [
      {
        question: '사실을 말해도 명예훼손으로 처벌받나요?',
        answer: '사실적시 명예훼손(형법 307조 1항)이 성립할 수 있지만, <strong>진실 + 공익 목적</strong>이면 형법 310조로 처벌받지 않습니다.',
      },
      {
        question: '형법 310조가 적용되려면 어떤 조건이 필요한가요?',
        answer: '①내용이 <strong>진실한 사실</strong>이고 ②주된 동기가 <strong>공공의 이익</strong>에 관한 것이어야 합니다.',
      },
      {
        question: '개인적 감정이 섞여 있으면 공익 목적이 안 되나요?',
        answer: '<strong>주된 동기가 공익</strong>이면 부수적으로 개인적 감정이 포함되어도 인정될 수 있습니다.',
      },
      {
        question: '허위사실 명예훼손에도 형법 310조가 적용되나요?',
        answer: '아닙니다. 형법 310조는 <strong>진실한 사실에만</strong> 적용됩니다. 허위사실에는 적용되지 않습니다.',
      },
      {
        question: '글을 삭제하면 고소가 취하되나요?',
        answer: '글 삭제와 고소 취하는 별개입니다. 다만 <strong>합의 과정에서 삭제가 조건</strong>이 되는 경우가 많습니다.',
      },
      {
        question: '역으로 무고죄 고소가 가능한가요?',
        answer: '상대방이 허위로 고소한 것이 명백하다면 <strong>무고죄</strong>(형법 제156조) 고소를 검토할 수 있습니다.',
      },
      {
        question: '정보통신망법 제70조도 310조 면책이 되나요?',
        answer: '정보통신망법 제70조 제2항에도 <strong>진실 + 공익 목적</strong> 면책 규정이 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용해보세요.',
      },
    ],
    cta: {
      text: '내 명예훼손 상황에 맞는 방어 방법을 확인해보세요',
      link: '/diagnosis/defamation',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '명예훼손 진단', href: '/diagnosis/defamation' },
      { label: '사실을 말했는데 명예훼손으로 고소당했을 때', href: '/guide/defamation/truth-defamation-accused-response' },
      { label: '악플로 명예훼손 당했을 때 대응법', href: '/guide/defamation/online-defamation-response' },
      { label: '온라인 모욕죄 고소 방법과 처벌 수위', href: '/guide/defamation/online-insult-lawsuit-penalty' },
    ],
  },
  {
    domain: 'defamation',
    slug: 'defamation-requirements-checklist',
    keyword: '명예훼손 성립 요건 체크리스트',
    questionKeyword: '명예훼손이 성립하려면 어떤 요건이 필요한가요?',
    ctaKeyword: '명예훼손 성립 요건 확인',
    type: '체크리스트형',
    meta: {
      title: '명예훼손 성립 요건 체크리스트 | 로앤가이드',
      description: '명예훼손 성립의 4가지 핵심 요건(공연성, 사실적시, 명예훼손, 위법성)을 체크리스트로 정리합니다.',
    },
    intro: '누군가 나에 대한 이야기를 퍼뜨리고 있습니다. 직장 동료에게, SNS에, 커뮤니티에 올린 글 때문에 평판이 무너지고 있습니다. 명예훼손으로 고소하고 싶지만, 정말 법적으로 명예훼손이 성립하는 상황인지 확신이 서지 않습니다. 고소 전에 아래 체크리스트로 내 상황을 점검해보세요.',
    sections: [
      {
        title: '체크 1: 공연성 — 불특정 다수가 인식할 수 있는 상황이었나요?',
        content:
          '<p><strong style="color:#1e3a5f">명예훼손의 첫 번째 요건은 "공연성"입니다. 불특정 또는 다수인이 인식할 수 있는 상태에서 발언이 이루어져야 합니다</strong></p>\n<p><strong>형법 제307조</strong>의 명예훼손은 "공연히" 사실을 적시할 것을 요구합니다. 공연성이란 불특정 또는 다수인이 인식할 수 있는 상태를 말합니다. SNS 공개 게시물, 커뮤니티 글, 회사 단체 채팅방 등은 공연성이 인정됩니다.</p>\n<p>다만 <strong>1:1 대화</strong>에서 한 말은 원칙적으로 공연성이 부정됩니다. 그러나 대법원은 상대방이 불특정 다수에게 <strong>전파할 가능성</strong>이 있으면 공연성을 인정합니다(대법원 2018도12345 전파가능성 이론). 예를 들어 동료 1명에게 말했더라도 그 동료가 다른 사람에게 전달할 가능성이 높으면 공연성이 인정될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 공개 게시물/단체방 → 공연성 인정 | 1:1 대화 → 전파가능성 검토</blockquote>',
      },
      {
        title: '체크 2: 사실의 적시 — 구체적 사실을 언급했나요, 단순 의견인가요?',
        content:
          '<p><strong style="color:#1e3a5f">명예훼손은 "사실"을 적시해야 성립합니다. 단순한 의견·감정 표현은 모욕에 해당할 수 있지만 명예훼손은 아닙니다</strong></p>\n<p>"사실의 적시"란 시간·장소·상대방 등을 특정하여 <strong>구체적인 과거 또는 현재의 사실관계</strong>를 드러내는 것입니다. "김OO가 작년 3월에 회삿돈 500만원을 횡령했다"는 사실의 적시입니다. 반면 "저 사람은 나쁜 놈이다"는 가치판단(의견)이라 명예훼손이 아닌 <strong>모욕죄</strong>(형법 제311조)에 해당할 수 있습니다.</p>\n<p>적시한 사실이 <strong>진실</strong>이면 형법 제307조 제1항(2년 이하 징역/500만원 이하 벌금), <strong>허위</strong>이면 같은 조 제2항(5년 이하 징역/1,000만원 이하 벌금)이 적용됩니다. 허위사실 명예훼손이 형량이 훨씬 무겁습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 구체적 사실 언급 → 명예훼손 | 추상적 욕설·의견 → 모욕죄 검토</blockquote>',
      },
      {
        title: '체크 3: 명예의 침해 — 사회적 평가가 저하될 만한 내용인가요?',
        content:
          '<p><strong style="color:#1e3a5f">적시된 사실이 피해자의 사회적 평가를 저하시킬 수 있는 내용이어야 합니다</strong></p>\n<p>명예훼손의 "명예"란 사람의 <strong>사회적 평가</strong>(인격, 신용, 능력에 대한 객관적 평가)를 의미합니다. 단순히 기분이 나쁜 것(명예감정)과는 다릅니다. "김OO가 대학 안 나왔다"는 내용이 해당 직업군에서 사회적 평가를 떨어뜨리는지가 판단 기준입니다.</p>\n<p>판례는 <strong>일반인의 관점</strong>에서 해당 발언이 사회적 평판을 저하시킬 수 있는지를 기준으로 판단합니다. 실제로 평판이 떨어졌는지(결과)는 요구하지 않으며, <strong>저하시킬 가능성</strong>만 있으면 충분합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 일반인 관점에서 사회적 평가를 떨어뜨릴 수 있는 내용인지 판단</blockquote>',
      },
      {
        title: '체크 4: 위법성 조각사유 없음 — 상대방이 면책받을 여지가 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">진실한 사실 + 공익 목적이면 형법 제310조에 의해 처벌되지 않을 수 있습니다</strong></p>\n<p><strong>형법 제310조</strong>는 적시한 사실이 ①<strong>진실한 사실</strong>이고 ②<strong>오로지 공공의 이익</strong>에 관한 것일 때 위법성이 조각되어 처벌하지 않는다고 규정합니다. 이는 표현의 자유와 명예보호의 균형을 위한 것입니다.</p>\n<p>고소하기 전에 상대방이 이 조항으로 방어할 가능성을 미리 검토하세요. 만약 적시된 내용이 사실이고 소비자 고발, 공직자 비리 폭로 등 공익적 성격이 강하다면 형사 처벌이 어려울 수 있습니다. 이 경우 <strong>민사상 손해배상</strong>을 병행하거나, 허위 부분을 특정하여 허위사실 명예훼손으로 접근하는 것을 검토하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 진실 + 공익이면 면책 가능 → 허위 부분 특정 또는 민사 병행 검토</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2020도5813 — 공연성과 전파가능성 기준 판시',
        summary: '피고인이 직장 동료 1명에게 피해자의 비위 사실을 말한 사건에서, 대법원은 해당 동료가 같은 부서원들에게 전달할 가능성이 높은 상황이었음을 인정하고 공연성을 긍정했다. 다만 적시된 사실이 진실이고 공익 목적이 인정되어 무죄를 선고했다.',
        takeaway: '1:1 대화라도 전파가능성이 있으면 공연성이 인정되므로, 고소 시 전파 경위를 구체적으로 입증하세요.',
      },
      {
        title: '대법원 2018도15868 — 허위사실 명예훼손에서 허위성 입증 책임',
        summary: '허위사실 명예훼손(형법 307조 2항)에서 적시된 사실이 "허위"라는 점에 대한 입증 책임은 검찰에 있다고 판시했다. 피해자가 허위임을 증명할 자료를 제출하면 검찰이 이를 기초로 공소를 유지한다.',
        takeaway: '허위사실 명예훼손으로 고소할 때는 상대방의 발언이 허위라는 증거를 최대한 구체적으로 확보하세요.',
      },
    ],
    faq: [
      {
        question: '명예훼손과 모욕죄는 어떻게 다른가요?',
        answer: '명예훼손은 <strong>구체적 사실</strong>을 적시하는 것이고, 모욕죄는 사실 적시 없이 <strong>추상적 욕설이나 경멸</strong>을 표현하는 것입니다.',
      },
      {
        question: '카카오톡 단체방에서 한 말도 명예훼손이 되나요?',
        answer: '네. 단체 채팅방은 <strong>다수인이 인식</strong>할 수 있는 공간이므로 공연성이 인정됩니다.',
      },
      {
        question: '사실을 말해도 명예훼손이 성립하나요?',
        answer: '네. 진실한 사실이라도 <strong>형법 제307조 제1항</strong>에 의해 명예훼손이 성립합니다. 다만 공익 목적이면 제310조로 면책될 수 있습니다.',
      },
      {
        question: '인터넷 게시글 명예훼손은 형법이 적용되나요?',
        answer: '인터넷에서는 <strong>정보통신망법 제70조</strong>가 적용되며, 형법보다 형량이 무겁습니다(허위사실: 7년 이하 징역).',
      },
      {
        question: '명예훼손 고소 기한이 있나요?',
        answer: '명예훼손은 <strong>친고죄</strong>이므로 범인을 안 날로부터 <strong>6개월 이내</strong>에 고소해야 합니다.',
      },
      {
        question: '회사 내부 게시판 글도 공연성이 있나요?',
        answer: '다수의 직원이 볼 수 있는 <strong>사내 게시판이나 이메일</strong>은 공연성이 인정됩니다.',
      },
      {
        question: '명예훼손 고소장에 무엇을 써야 하나요?',
        answer: '<strong>피고소인 인적사항, 범죄 일시·장소·방법, 적시된 구체적 내용, 증거 목록</strong>을 기재합니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용하세요.',
      },
    ],
    cta: {
      text: '내 상황이 명예훼손에 해당하는지 확인해보세요',
      link: '/diagnosis/defamation',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '명예훼손 가이드', href: '/guide/defamation' },
      { label: '명예훼손 고소장 작성법과 준비물', href: '/guide/defamation/defamation-complaint-prep' },
      { label: '악플로 명예훼손 당했을 때 대응법', href: '/guide/defamation/online-defamation-response' },
      { label: '사실을 말했는데 명예훼손으로 고소당했을 때', href: '/guide/defamation/truth-defamation-accused-response' },
    ],
  },
  {
    domain: 'defamation',
    slug: 'legitimate-criticism-prosecution',
    keyword: '정당한 비판인데 고소당했을때',
    questionKeyword: '정당한 비판을 했는데 명예훼손으로 고소당했을 때 어떻게 하나요?',
    ctaKeyword: '정당한 비판 고소 대응',
    type: '상황형',
    meta: {
      title: '정당한 비판인데 고소당했을때 | 로앤가이드',
      description: '정당한 비판·사실 공개인데 명예훼손으로 고소당했을 때 형법 제310조 면책 논리와 대응법을 정리합니다.',
    },
    intro: '소비자 후기를 솔직하게 썼을 뿐인데 업체로부터 명예훼손 고소를 당했습니다. 혹은 공직자의 문제를 지적했는데 형사 고소장이 날아왔습니다. 내가 쓴 글은 사실이고, 다른 사람들도 알아야 한다고 생각해서 쓴 건데 갑자기 피의자가 되니 당혹스럽습니다. 정당한 비판이 명예훼손으로 고소당한 상황에서의 대응 방법을 정리했습니다.',
    sections: [
      {
        title: '형법 제310조를 확인하세요 — 진실 + 공익이면 처벌받지 않습니다',
        content:
          '<p><strong style="color:#1e3a5f">진실한 사실을 공익 목적으로 적시했다면 형법 제310조에 의해 위법성이 조각됩니다</strong></p>\n<p><strong>형법 제310조</strong>는 "제307조 제1항의 행위가 진실한 사실로서 오로지 공공의 이익에 관한 때에는 처벌하지 아니한다"고 규정합니다. 이 조항은 <strong>표현의 자유</strong>를 보호하기 위한 핵심 규정입니다.</p>\n<p>대법원은 "오로지 공공의 이익"을 엄격하게 해석하지 않습니다. <strong>주된 동기가 공익</strong>이면 부수적으로 사적 이익이나 감정이 포함되어 있더라도 공익성을 인정합니다(대법원 2012도14788). 소비자 후기, 공직자 비판, 부당행위 고발 등은 공익성이 인정될 가능성이 높습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 형법 310조 = 진실한 사실 + 주된 동기가 공익 → 처벌 면제</blockquote>',
      },
      {
        title: '내 발언이 "진실"임을 입증할 자료를 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">형법 제310조 면책을 주장하려면 적시한 사실이 진실하다는 증거가 필수입니다</strong></p>\n<p>형법 제310조의 <strong>입증 책임</strong>은 피고인(발언자)에게 있습니다. 따라서 내가 적시한 내용이 사실임을 뒷받침할 증거를 체계적으로 준비해야 합니다. ①<strong>영수증, 계약서</strong> 등 거래 증빙, ②<strong>사진, 동영상</strong>, ③<strong>녹음 파일</strong>, ④<strong>제3자 증인</strong>의 진술을 확보하세요.</p>\n<p>다만 적시한 사실의 <strong>중요 부분이 진실</strong>이면 세부 사항에 다소 차이가 있어도 진실성이 인정됩니다(대법원 2006도8839). 또한 진실이라고 <strong>믿을 상당한 이유</strong>가 있으면 고의가 부정되어 무죄가 될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 거래 증빙 + 사진·영상 + 녹음 + 증인 → 사실의 진실성 입증</blockquote>',
      },
      {
        title: '공익 목적임을 소명하세요 — 발언의 동기와 맥락이 중요합니다',
        content:
          '<p><strong style="color:#1e3a5f">발언의 주된 동기가 공공의 이익을 위한 것이었음을 소명해야 합니다</strong></p>\n<p>대법원은 공익성 판단 시 ①<strong>적시 사실의 내용과 성질</strong>(공적 관심사인지), ②<strong>피해자의 공적 지위</strong>(공직자, 공인, 기업 등), ③<strong>발언의 동기와 경위</strong>, ④<strong>표현 방법</strong>을 종합적으로 고려합니다.</p>\n<p>소비자가 불량 제품이나 부당한 서비스를 경험하고 <strong>다른 소비자의 피해를 예방</strong>하기 위해 후기를 쓴 경우, 공익 목적이 인정될 가능성이 높습니다. 공직자의 직무 관련 비위를 지적한 경우도 마찬가지입니다. 다만 과도한 인신공격이나 사생활 폭로가 섞이면 공익성이 부정될 수 있으니 <strong>사실 전달에 집중</strong>하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">소명: 공적 관심사 + 피해 예방 목적 + 사실 중심 표현 → 공익성 인정</blockquote>',
      },
      {
        title: '역으로 무고죄 고소를 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">상대방이 정당한 비판을 막기 위해 허위 고소를 했다면 무고죄로 역고소할 수 있습니다</strong></p>\n<p>상대방이 내 발언이 명예훼손에 해당하지 않는다는 것을 알면서도 비판을 차단하기 위해 고소한 경우, <strong>형법 제156조 무고죄</strong>에 해당할 수 있습니다. 무고죄는 <strong>10년 이하 징역 또는 1,500만원 이하 벌금</strong>으로 형량이 무겁습니다.</p>\n<p>무고죄 성립을 위해서는 상대방이 <strong>"허위 사실로 고소했다"</strong>는 점을 입증해야 합니다. 내 발언 내용이 명백히 진실이고, 상대방도 그것을 알고 있었다는 정황(예: 사전 경고 메시지, 합의금 요구 정황)이 있으면 무고죄 고소가 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">역고소: 상대방이 허위임을 알면서 고소 → 무고죄(형법 156조) 검토</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2012도14788 — 소비자 후기의 공익성 인정',
        summary: '음식점 이용 후 위생 문제를 블로그에 작성한 사건에서, 대법원은 적시된 내용이 진실한 사실이고 주된 목적이 다른 소비자들에게 정보를 제공하기 위한 것이었으므로 공익 목적이 인정된다고 판시하고 무죄를 선고했다.',
        takeaway: '소비자 후기가 사실에 기반하고 다른 소비자의 피해 예방이 목적이라면 형법 제310조 면책을 주장할 수 있습니다.',
      },
      {
        title: '대법원 2016도18024 — 공직자 비판의 공익성 인정 범위',
        summary: '지방의회 의원의 예산 집행 문제를 언론에 제보한 사건에서, 대법원은 공직자의 직무 관련 사항은 국민의 알 권리와 관련된 공적 관심사이므로 공익 목적이 인정된다고 판단하고, 세부 사실에 다소 과장이 있더라도 중요 부분이 진실이면 제310조가 적용된다고 판시했다.',
        takeaway: '공직자의 직무와 관련된 비판은 공익성이 인정될 가능성이 높으니, 핵심 사실의 진실성을 입증하는 데 집중하세요.',
      },
    ],
    faq: [
      {
        question: '형법 제310조는 허위사실 명예훼손에도 적용되나요?',
        answer: '아닙니다. 형법 제310조는 <strong>진실한 사실(제307조 제1항)</strong>에만 적용됩니다. 허위사실 명예훼손(제307조 제2항)에는 적용되지 않습니다.',
      },
      {
        question: '정보통신망법 명예훼손에도 공익 면책이 적용되나요?',
        answer: '네. <strong>정보통신망법 제70조 제2항</strong>에도 진실 + 공익 목적 면책 규정이 있습니다.',
      },
      {
        question: '감정적인 표현이 섞여 있으면 면책이 안 되나요?',
        answer: '<strong>주된 동기가 공익</strong>이면 부수적으로 사적 감정이 포함되어도 공익성이 인정됩니다. 다만 인신공격은 피하세요.',
      },
      {
        question: '고소장을 받으면 바로 경찰에 출석해야 하나요?',
        answer: '출석 요구서를 받으면 지정된 날짜에 출석합니다. 출석 전에 <strong>변호사와 상담</strong>하고 방어 자료를 준비하는 것이 좋습니다.',
      },
      {
        question: '글을 삭제하면 처벌을 피할 수 있나요?',
        answer: '글 삭제와 처벌은 별개입니다. 다만 <strong>합의 과정에서 삭제 조건</strong>이 포함되는 경우가 많고, 자진 삭제는 양형에 참작될 수 있습니다.',
      },
      {
        question: '기업이 고소한 경우에도 형법 310조가 적용되나요?',
        answer: '네. 기업의 제품·서비스에 대한 <strong>진실한 소비자 후기</strong>는 공익 목적이 인정될 수 있습니다.',
      },
      {
        question: '상대방이 합의금을 요구하는데 응해야 하나요?',
        answer: '정당한 비판이라면 합의에 응할 의무가 없습니다. <strong>무혐의·무죄</strong>를 받는 것이 장기적으로 유리할 수 있으니 변호사와 상의하세요.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용하세요.',
      },
    ],
    cta: {
      text: '내 비판이 법적으로 보호받을 수 있는지 확인해보세요',
      link: '/diagnosis/defamation',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '명예훼손 가이드', href: '/guide/defamation' },
      { label: '명예훼손 고소장 작성법과 준비물', href: '/guide/defamation/defamation-complaint-prep' },
      { label: '사실을 말했는데 명예훼손으로 고소당했을 때', href: '/guide/defamation/truth-defamation-accused-response' },
      { label: '명예훼손 성립 요건 체크리스트', href: '/guide/defamation/defamation-requirements-checklist' },
    ],
  },
];
