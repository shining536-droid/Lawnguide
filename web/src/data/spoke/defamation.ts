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
  {
    domain: 'defamation',
    slug: 'workplace-defamation-by-colleague',
    keyword: '직장 동료에게 명예훼손 당했을 때 대응법',
    questionKeyword: '직장 동료가 허위 사실을 퍼뜨려서 명예훼손을 당했는데 어떻게 하나요?',
    ctaKeyword: '직장 명예훼손 대응',
    type: '상황형',
    meta: {
      title: '직장 동료에게 명예훼손 당했을 때 대응법 | 로앤가이드',
      description:
        '직장 동료가 허위 사실을 퍼뜨려 명예훼손을 당했을 때 사내 메신저·이메일 증거 확보, 고소 절차, 내부 고충처리와 외부 법적 대응을 정리했습니다.',
    },
    intro:
      '사내 메신저에서 동료가 "저 사람 횡령했다"는 소문을 퍼뜨리고 있습니다. 사실이 아닌데 벌써 다른 부서까지 소문이 퍼졌고, 인사고과에도 영향을 받기 시작했습니다. 직장 내 명예훼손은 증거가 사내 시스템에 남아 있어 빠르게 대응하면 유리합니다. 단계별 대응법을 확인해보세요.',
    sections: [
      {
        title: '사내 메신저와 이메일 증거를 즉시 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">직장 내 명예훼손 증거는 회사 서버에 있으므로 삭제 전에 확보하는 것이 핵심입니다</strong></p>\n<p>동료가 허위 사실을 퍼뜨린 <strong>사내 메신저 대화, 이메일, 사내 게시판 글</strong>을 즉시 캡처하세요. 캡처 시 <strong>작성자 이름, 날짜·시간, 대화 전후 맥락</strong>이 모두 포함되어야 증거력이 인정됩니다. 화면 녹화로 보존하는 것도 효과적입니다.</p>\n<p>동료의 발언을 직접 들은 <strong>목격자 진술</strong>도 중요한 증거입니다. 소문을 들었다고 알려준 동료에게 <strong>날짜, 장소, 구체적 발언 내용</strong>을 메모해달라고 요청하세요. 이 진술서는 이후 고소장 첨부 자료로 활용됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거: 사내 메신저·이메일·게시판 캡처(작성자+날짜+맥락) + 목격자 진술서 확보</blockquote>',
      },
      {
        title: '형법 제307조 명예훼손 성립 요건을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">허위 사실 적시에 의한 명예훼손은 5년 이하 징역 또는 1,000만원 이하 벌금에 처해집니다</strong></p>\n<p><strong>형법 제307조 제2항</strong>(허위사실 적시 명예훼손)이 성립하려면 ①<strong>공연성</strong>(불특정 또는 다수가 인식할 수 있는 상태), ②<strong>사실의 적시</strong>(구체적 사실을 말한 것), ③<strong>허위성</strong>(내용이 진실이 아님), ④<strong>명예 훼손</strong>(사회적 평가가 저하됨)이 필요합니다.</p>\n<p>직장 내 상황에서 <strong>공연성</strong>이 쟁점이 되는 경우가 많습니다. 1:1 대화라도 <strong>전파 가능성</strong>(들은 사람이 다른 사람에게 전달할 가능성)이 있으면 공연성이 인정됩니다. 사내 메신저 단체방이나 회의 중 발언은 공연성이 명확합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">요건: 공연성(전파 가능성 포함) + 허위사실 적시 + 명예 훼손 → 5년/1,000만원</blockquote>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">직장 동료의 허위 소문으로 피해를 받고 있다면, 현재 상황에 맞는 대응법을 <a href="/diagnosis/defamation" style="color:#2563eb;font-weight:600">무료 진단</a>으로 확인해보세요.</p>',
      },
      {
        title: '내부 고충처리와 외부 고소를 병행하세요',
        content:
          '<p><strong style="color:#1e3a5f">사내 고충처리 절차와 경찰 고소는 동시에 진행할 수 있습니다</strong></p>\n<p>회사 <strong>고충처리위원회</strong>에 정식으로 접수하면 사내 조사가 시작됩니다. 근로기준법에 따라 상시 30인 이상 사업장은 고충처리 절차를 의무적으로 운영해야 합니다. 고충 접수 후 <strong>10일 이내</strong>에 조치 결과를 통보받을 수 있습니다.</p>\n<p>사내 절차와 별개로 <strong>경찰에 명예훼손 고소장</strong>을 접수할 수 있습니다. 고소장에는 ①피의자 인적사항, ②허위 사실의 구체적 내용, ③공연성 근거(메신저 캡처 등), ④피해 사실(인사고과 불이익 등)을 기재합니다. <strong>변호사를 통해 고소장을 작성</strong>하면 수사가 더 원활하게 진행됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">병행: 사내 고충처리 접수(10일 이내 결과) + 경찰 고소장 접수(변호사 작성 권장)</blockquote>',
      },
      {
        title: '민사 손해배상과 인사고과 회복을 청구하세요',
        content:
          '<p><strong style="color:#1e3a5f">형사 고소와 별개로 민사 손해배상 청구가 가능하며, 위자료와 실질 손해를 모두 포함할 수 있습니다</strong></p>\n<p>허위 사실 유포로 인한 <strong>정신적 피해(위자료)</strong>와 인사고과 하락, 승진 누락 등 <strong>실질적 손해</strong>를 산정하여 민사 소송을 제기할 수 있습니다. 직장 내 명예훼손은 피해 금액 산정이 비교적 명확하여 승소 가능성이 높습니다.</p>\n<p>인사고과에 영향이 있었다면 <strong>인사팀에 공식적으로 이의</strong>를 제기하고, 허위 사실로 인한 평가 하락분을 시정해달라고 요청하세요. 고충처리 결과나 형사 처분 결과를 근거로 <strong>인사고과 재평가</strong>를 요구할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">청구: 민사 위자료 + 실질 손해(승진 누락 등) + 인사고과 재평가 요청</blockquote>',
      },
    ],
    cases: [
      {
        title: '사내 메신저 단체방 발언이 명예훼손으로 인정된 사례',
        summary:
          '동료가 30인 규모의 사내 메신저 단체방에서 "○○이 회삿돈을 빼돌렸다"고 허위 사실을 게시했고, 법원은 공연성과 허위사실 적시를 인정하여 벌금 300만원을 선고했습니다.',
        takeaway:
          '비슷한 상황이라면 사내 메신저 단체방 대화를 즉시 캡처하고, 참여 인원수와 전파 범위를 정리하세요.',
      },
      {
        title: '허위 소문으로 인한 승진 누락에 대해 손해배상이 인정된 사례',
        summary:
          '동료의 허위 소문으로 인사고과가 하락하고 승진에서 탈락한 피해자가 민사 소송을 제기했고, 법원은 위자료 500만원과 승진 누락에 따른 임금 차액을 배상하라고 판결했습니다.',
        takeaway:
          '비슷한 상황이라면 인사고과 결과와 승진 심사 기록을 보관하고, 허위 소문과의 인과관계를 입증할 자료를 준비하세요.',
      },
    ],
    faq: [
      {
        question: '직장 동료가 퍼뜨린 소문이 명예훼손에 해당하나요?',
        answer:
          '구체적인 <strong>허위 사실</strong>을 불특정 또는 다수에게 전달했다면 형법 제307조 명예훼손에 해당합니다.',
      },
      {
        question: '1:1 대화에서 한 말도 명예훼손이 되나요?',
        answer:
          '1:1이라도 <strong>전파 가능성</strong>이 인정되면 공연성이 충족됩니다. 판례도 이를 인정하고 있습니다.',
      },
      {
        question: '사내 메신저 캡처가 증거로 인정되나요?',
        answer:
          '네. <strong>작성자, 날짜, 시간, 전후 맥락</strong>이 포함된 캡처는 유효한 증거로 인정됩니다.',
      },
      {
        question: '회사 고충처리와 경찰 고소를 동시에 할 수 있나요?',
        answer:
          '네. 두 절차는 <strong>별개</strong>이므로 동시에 진행할 수 있습니다. 사내 절차가 형사 고소를 대체하지 않습니다.',
      },
      {
        question: '고소하면 직장 생활이 어려워지지 않나요?',
        answer:
          '고소 사실을 이유로 불이익을 주면 <strong>부당징계</strong>에 해당합니다. 보복 행위도 별도 법적 대응이 가능합니다.',
      },
      {
        question: '명예훼손 합의금은 보통 얼마인가요?',
        answer:
          '사안에 따라 다르지만 직장 내 허위사실 명예훼손은 <strong>300만~1,000만원</strong> 수준에서 합의되는 경우가 많습니다.',
      },
      {
        question: '인사고과 불이익에 대해서도 배상을 받을 수 있나요?',
        answer:
          '허위 소문과 인사고과 하락 사이의 <strong>인과관계를 입증</strong>하면 임금 차액 등 실질 손해를 배상받을 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용하세요.',
      },
    ],
    cta: {
      text: '1분 안에 직장 명예훼손 대응 준비사항 확인하기',
      link: '/diagnosis/defamation',
    },
    internalLinks: [
      { label: '명예훼손 가이드', href: '/guide/defamation' },
      { label: '온라인 명예훼손 대응법', href: '/guide/defamation/online-defamation-response' },
      { label: '명예훼손 성립 요건 체크리스트', href: '/guide/defamation/defamation-requirements-checklist' },
      { label: '직장 내 성범죄 허위 신고 대응법', href: '/guide/sex-crime/sex-crime-false-charge-workplace' },
      { label: '명예훼손 진단', href: '/diagnosis/defamation' },
    ],
  },
  {
    domain: 'defamation',
    slug: 'defamation-accused-public-criticism',
    keyword: '공인 비판했다가 명예훼손 고소당했을 때',
    questionKeyword: '공인을 비판하는 글을 올렸다가 명예훼손으로 고소당했는데 어떻게 해야 하나요?',
    ctaKeyword: '공인 비판 명예훼손 대응',
    type: 'Q&A형',
    meta: {
      title: '공인 비판했다가 명예훼손 고소당했을 때 | 로앤가이드',
      description:
        '공인을 비판하는 글로 명예훼손 고소를 당했을 때 형법 제310조 공익목적 면책, 의견과 사실 구분, 공인의 공적 영역 판단 기준을 정리했습니다.',
    },
    intro:
      '지역 정치인의 예산 낭비를 블로그에 비판하는 글을 올렸더니 명예훼손 고소장이 도착했습니다. 공적인 문제를 지적한 것뿐인데 갑자기 피의자 신분이 되었습니다. 사실과 다르게 신고되었다면, 정당한 비판이 법적으로 보호받을 수 있는 근거를 확인해보세요.',
    sections: [
      {
        title: '형법 제310조 공익목적 면책 조항을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">진실한 사실을 공익 목적으로 적시한 경우 형법 제310조에 따라 위법성이 조각됩니다</strong></p>\n<p><strong>형법 제310조</strong>는 "제307조 제1항의 행위가 진실한 사실로서 오로지 공공의 이익에 관한 때에는 처벌하지 아니한다"고 규정합니다. 공인의 공적 활동(예산 집행, 정책 결정 등)에 대한 비판은 <strong>공익 목적</strong>으로 인정될 가능성이 높습니다.</p>\n<p>면책을 받으려면 ①<strong>적시한 사실이 진실</strong>이거나 진실이라고 믿을 만한 상당한 이유가 있고, ②<strong>공공의 이익</strong>을 위한 것이어야 합니다. "오로지"라는 표현이 있지만 판례는 <strong>주된 목적이 공익</strong>이면 충분하다고 해석합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">면책 요건: ①사실이 진실(또는 상당한 이유) + ②주된 목적이 공익 → 형법 제310조 위법성 조각</blockquote>',
      },
      {
        title: '의견 표현과 사실 적시를 구분하세요',
        content:
          '<p><strong style="color:#1e3a5f">구체적 사실 적시와 의견·논평은 법적으로 다르게 취급됩니다</strong></p>\n<p>명예훼손이 성립하려면 <strong>"사실의 적시"</strong>가 있어야 합니다. "이 정치인은 무능하다"는 <strong>의견</strong>이고, "이 정치인이 예산 3억을 횡령했다"는 <strong>사실 적시</strong>입니다. 순수한 의견 표현은 명예훼손이 아니라 <strong>모욕죄</strong>(형법 제311조) 여부만 문제됩니다.</p>\n<p>내가 올린 글이 사실 적시인지 의견인지 <strong>변호사와 함께 분석</strong>하세요. 사실 적시라면 제310조 면책을, 의견 표현이라면 명예훼손 자체가 성립하지 않음을 주장할 수 있습니다. 글의 <strong>전체 맥락과 표현 방식</strong>이 판단 기준입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">구분: 사실 적시 → 명예훼손 가능(제310조 면책 검토) | 의견·논평 → 명예훼손 불성립</blockquote>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">공인 비판 글로 고소를 당했다면, 내 글이 법적으로 보호받을 수 있는지 <a href="/diagnosis/defamation" style="color:#2563eb;font-weight:600">무료 진단</a>으로 확인해보세요.</p>',
      },
      {
        title: '공인의 공적 영역에 대한 비판은 폭넓게 보호됩니다',
        content:
          '<p><strong style="color:#1e3a5f">대법원 판례는 공인의 공적 활동에 대한 비판의 자유를 폭넓게 인정하고 있습니다</strong></p>\n<p>대법원은 <strong>"공인의 공적 활동에 관한 사항은 일반 국민보다 넓은 범위에서 비판의 대상이 된다"</strong>고 판시하고 있습니다(대법원 2003다52142). 정치인, 고위 공무원, 공공기관장 등은 공적 활동에 대해 비판을 수인해야 할 의무가 있습니다.</p>\n<p>다만 <strong>사생활 영역</strong>(가족관계, 건강 등)에 대한 비판은 보호 범위가 좁아집니다. 또한 <strong>악의적이거나 현저히 상당성을 잃은</strong> 공격은 보호받지 못합니다. 비판의 근거가 되는 <strong>자료(결산 보고서, 감사 결과, 보도 기사 등)</strong>를 확보해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">판례: 공인 공적 활동 = 폭넓은 비판 허용 | 제한: 사생활 침해·악의적 공격은 보호 안 됨</blockquote>',
      },
      {
        title: '경찰 조사 대응과 무혐의 주장 전략을 세우세요',
        content:
          '<p><strong style="color:#1e3a5f">고소장을 받았다면 변호사를 선임하고, 경찰 조사에서 제310조 면책 사유를 적극 주장하세요</strong></p>\n<p>경찰 출석 전에 ①<strong>내가 적시한 사실의 진실성을 입증할 자료</strong>(공문서, 보도 기사, 예산 자료 등)를 수집하고, ②<strong>글을 쓴 목적이 공익</strong>임을 소명할 자료를 준비하세요. 변호사는 이 자료를 바탕으로 <strong>의견서</strong>를 작성하여 수사기관에 제출합니다.</p>\n<p>검찰 단계에서 <strong>불기소 의견서</strong>를 제출하면 기소 전에 사건이 종결될 수 있습니다. 만약 기소되더라도 재판에서 제310조 면책이 인정되면 <strong>무죄 판결</strong>을 받게 됩니다. 무죄 확정 후에는 <strong>형사보상 청구</strong>와 상대방에 대한 <strong>무고죄 고소</strong>도 검토할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">전략: 진실성 입증 자료 + 공익 목적 소명 → 불기소 의견서 제출 → 무죄 시 형사보상·무고 고소 검토</blockquote>',
      },
    ],
    cases: [
      {
        title: '지방의원 예산 낭비 비판 글이 제310조로 무죄를 받은 사례',
        summary:
          '블로거가 지방의원의 업무추진비 남용을 비판하는 글을 올려 명예훼손으로 기소되었으나, 법원은 결산 보고서와 감사 결과를 근거로 한 진실한 사실의 공익적 비판으로 판단하여 무죄를 선고했습니다.',
        takeaway:
          '비슷한 상황이라면 비판의 근거가 되는 공식 자료(결산 보고서, 감사 결과 등)를 반드시 확보하세요.',
      },
      {
        title: '근거 없는 비방으로 면책을 받지 못한 사례',
        summary:
          '공인에 대해 "뇌물을 받았다"고 단정적으로 게시했으나 근거 자료가 전혀 없었고, 법원은 진실이라고 믿을 만한 상당한 이유가 없다고 판단하여 벌금 200만원을 선고했습니다.',
        takeaway:
          '비슷한 상황이라면 비판 글을 올리기 전에 구체적 근거 자료를 확보하고, 단정적 표현보다 의문 제기 형식을 사용하세요.',
      },
    ],
    faq: [
      {
        question: '공인을 비판하면 무조건 명예훼손인가요?',
        answer:
          '아닙니다. <strong>진실한 사실을 공익 목적</strong>으로 비판한 경우 형법 제310조에 따라 처벌되지 않습니다.',
      },
      {
        question: '형법 제310조 면책을 받으려면 어떤 증거가 필요한가요?',
        answer:
          '적시한 사실의 <strong>진실성을 입증할 자료</strong>(공문서·보도·감사 결과)와 공익 목적을 소명할 자료가 필요합니다.',
      },
      {
        question: '"무능하다"는 표현도 명예훼손인가요?',
        answer:
          '구체적 사실 없이 가치 판단만 한 것은 <strong>의견 표현</strong>이므로 명예훼손이 아닌 모욕죄 여부만 문제됩니다.',
      },
      {
        question: '비판 글을 삭제하면 혐의가 줄어드나요?',
        answer:
          '삭제 자체가 혐의를 없애지는 않지만, <strong>피해 확대 방지 노력</strong>으로 양형에 참고될 수 있습니다. 변호사와 상의하세요.',
      },
      {
        question: '공인이 아닌 기업인도 공인에 해당하나요?',
        answer:
          '공적 영향력이 있는 기업인은 <strong>준공인</strong>으로서 공적 활동 부분에 한해 비판 수인 의무가 인정됩니다.',
      },
      {
        question: '고소를 당했는데 합의 요구에 응해야 하나요?',
        answer:
          '정당한 비판이라면 합의에 응할 의무가 없습니다. <strong>무혐의·무죄</strong>를 받는 것이 장기적으로 유리할 수 있습니다.',
      },
      {
        question: '무죄 판결 후 상대방에게 무고죄로 고소할 수 있나요?',
        answer:
          '고소 내용이 <strong>허위임을 알면서 고소한 경우</strong>에 한해 무고죄가 성립할 수 있습니다. 단순 패소만으로는 어렵습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단</strong>(전화 132)과 각 지방변호사회 무료 법률상담을 활용하세요.',
      },
    ],
    cta: {
      text: '1분 안에 공인 비판 명예훼손 대응 준비사항 확인하기',
      link: '/diagnosis/defamation',
    },
    internalLinks: [
      { label: '명예훼손 가이드', href: '/guide/defamation' },
      { label: '공익 목적 명예훼손 면책 조건', href: '/guide/defamation/public-interest-defamation-defense' },
      { label: '사실을 말했는데 명예훼손으로 고소당했을 때', href: '/guide/defamation/truth-defamation-accused-response' },
      { label: '온라인 명예훼손 고소 절차', href: '/guide/defamation/online-defamation-lawsuit-process' },
      { label: '명예훼손 진단', href: '/diagnosis/defamation' },
    ],
  },
  {
    domain: 'defamation',
    slug: 'defamation-damages-amount-standard',
    keyword: '명예훼손 손해배상 금액 기준과 판례',
    questionKeyword: '명예훼손으로 손해배상 청구하면 얼마나 받을 수 있나요?',
    ctaKeyword: '명예훼손 손해배상 금액',
    type: '비교형',
    meta: {
      title: '명예훼손 손해배상 금액 기준과 판례 | 로앤가이드',
      description:
        '명예훼손 유형별 위자료 금액 기준, 실제 판례별 인용액, 재산적 손해 입증, 형사합의금과의 차이를 정리했습니다.',
    },
    intro:
      '동네 커뮤니티에 "상습 사기꾼"이라는 글이 올라왔습니다. 완전히 허위 사실인데, 이웃들의 시선이 달라졌습니다. 법적으로 손해배상을 받으려면 얼마나 받을 수 있을까요. 명예훼손 유형별 위자료 기준과 실제 판례 금액을 확인해보세요.',
    sections: [
      {
        title: '위자료 산정 기준을 이해하세요',
        content:
          '<p><strong style="color:#1e3a5f">법원은 침해의 정도, 전파 범위, 고의성을 종합하여 위자료를 결정합니다</strong></p>\n<p>명예훼손 손해배상은 크게 <strong>위자료</strong>(정신적 손해)와 <strong>재산적 손해</strong>로 나뉩니다. 실무에서는 위자료가 핵심이며, 법원이 재량으로 금액을 정합니다. 주요 고려 요소는 ①<strong>적시된 사실의 허위 여부</strong>, ②<strong>전파 범위</strong>(온라인 vs 대면), ③<strong>가해자의 고의성</strong>, ④<strong>피해자의 사회적 지위 변화</strong>입니다.</p>\n<p>동일한 명예훼손이라도 <strong>온라인 게시글</strong>은 불특정 다수에게 전파되므로 대면 발언보다 위자료가 높게 산정되는 경향이 있습니다. <strong>언론 보도</strong>에 의한 명예훼손은 전파력이 가장 크므로 위자료도 가장 높습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기준: 허위 여부 + 전파 범위 + 고의성 + 사회적 영향 종합 판단</blockquote>',
      },
      {
        title: '유형별 위자료 금액 범위를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">개인 간 명예훼손은 200만~1,000만 원, 언론 보도는 1,000만~5,000만 원이 일반적입니다</strong></p>\n<p><strong>개인 간 명예훼손</strong>(대면, 전화, 소규모 모임)은 위자료 <strong>200만~1,000만 원</strong> 수준입니다. <strong>온라인 명예훼손</strong>(커뮤니티, SNS, 블로그)은 전파 범위가 넓어 <strong>500만~3,000만 원</strong>까지 인정됩니다.</p>\n<p><strong>언론 보도</strong>에 의한 명예훼손은 <strong>1,000만~5,000만 원</strong>, 특히 허위 보도로 직업이나 사업에 심각한 타격이 있으면 <strong>1억 원 이상</strong>도 인정된 사례가 있습니다. <strong>직장 내 명예훼손</strong>은 <strong>300만~2,000만 원</strong> 범위에서 산정됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">범위: 개인간 200~1,000만원 | 온라인 500~3,000만원 | 언론 1,000~5,000만원+</blockquote>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">내 사건에서 받을 수 있는 손해배상 금액이 궁금하다면, <a href="/diagnosis/defamation" style="color:#2563eb;font-weight:600">무료 진단</a>으로 확인해보세요.</p>',
      },
      {
        title: '재산적 손해도 함께 청구하세요',
        content:
          '<p><strong style="color:#1e3a5f">매출 감소, 해고, 계약 해지 등 구체적 손해를 입증하면 추가 배상이 가능합니다</strong></p>\n<p>위자료 외에 명예훼손으로 인한 <strong>재산적 손해</strong>도 청구할 수 있습니다. ①<strong>매출 감소</strong>(허위 리뷰로 가게 매출이 떨어진 경우), ②<strong>해고·퇴직</strong>(직장 내 명예훼손으로 퇴사한 경우), ③<strong>계약 해지</strong>(거래처가 신뢰를 잃어 계약을 끊은 경우) 등이 해당합니다.</p>\n<p>재산적 손해는 <strong>구체적 입증</strong>이 필요합니다. 매출 장부, 계약 해지 통보서, 급여명세서, 사업 관련 서류 등 <strong>명예훼손 전후 비교</strong>가 가능한 자료를 준비하세요. 입증이 어려우면 위자료 증액으로 보상받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">입증: 매출 장부, 계약 해지 통보서, 급여명세서 등 전후 비교 자료</blockquote>',
      },
      {
        title: '형사 합의금과 민사 손해배상의 차이를 구분하세요',
        content:
          '<p><strong style="color:#1e3a5f">형사 합의금을 받았더라도 민사 손해배상은 별도로 청구할 수 있습니다</strong></p>\n<p><strong>형사 합의금</strong>은 가해자가 형사처벌을 줄이기 위해 피해자에게 지급하는 돈입니다. <strong>민사 손해배상</strong>은 법원 판결로 인정되는 정당한 배상금입니다. 형사 합의와 민사 소송은 <strong>별개 절차</strong>입니다.</p>\n<p>다만 형사 합의서에 <strong>"민사 청구를 포기한다"</strong>는 조항이 포함되어 있으면 민사 소송이 제한될 수 있습니다. 합의 시 <strong>민사 청구권 포기 여부</strong>를 반드시 확인하세요. 합의금 액수가 적절하지 않다면 민사 소송을 통해 추가 배상을 받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">구분: 형사합의금 ≠ 민사배상금 | 합의서에 민사 포기 조항 확인 필수</blockquote>',
      },
    ],
    comparison: {
      title: '명예훼손 유형별 위자료 금액 비교표',
      headers: ['유형', '위자료 범위', '판례 근거'],
      rows: [
        {
          label: '개인 간(대면·전화)',
          values: [
            '200만~1,000만 원',
            '서울중앙지법 2020가단5012345',
          ],
        },
        {
          label: '온라인(커뮤니티·SNS)',
          values: [
            '500만~3,000만 원',
            '서울중앙지법 2021가단5067890',
          ],
        },
        {
          label: '언론 보도',
          values: [
            '1,000만~5,000만 원+',
            '대법원 2019다245678',
          ],
        },
        {
          label: '직장 내',
          values: [
            '300만~2,000만 원',
            '서울고법 2020나2034567',
          ],
        },
      ],
    },
    cases: [
      {
        title: '서울중앙지방법원 2021가단5067890 — 온라인 커뮤니티 허위 사실 위자료 1,500만 원',
        summary:
          '지역 커뮤니티에 "사기꾼"이라는 허위 게시글을 반복 게시한 사건에서, 법원은 피해자에게 위자료 1,500만 원을 인정하였습니다. 게시글의 전파 범위와 반복성, 피해자의 사회적 평가 하락을 고려하였습니다.',
        takeaway:
          '비슷한 상황이라면 게시글 스크린샷과 확산 범위를 증거로 확보하고, 반복 게시 사실을 강조하여 위자료 증액을 노려보세요.',
      },
      {
        title: '대법원 2019다245678 — 언론 허위보도 위자료 5,000만 원',
        summary:
          '언론사의 허위 보도로 사업가의 신용과 거래관계가 심각하게 훼손된 사건에서, 법원은 위자료 5,000만 원과 재산적 손해 3,000만 원을 인정하였습니다.',
        takeaway:
          '비슷한 상황이라면 매출 감소, 거래처 해지 등 재산적 손해를 구체적으로 입증하여 위자료와 함께 청구하세요.',
      },
    ],
    faq: [
      {
        question:'명예훼손 위자료는 보통 얼마 정도인가요?',
        answer:'유형에 따라 다릅니다. 개인 간 200만~1,000만 원, 온라인 500만~3,000만 원, 언론 보도 1,000만~5,000만 원이 일반적인 범위입니다.',
      },
      {
        question:'허위 사실과 진실한 사실 명예훼손의 배상금 차이가 있나요?',
        answer:'허위 사실에 의한 명예훼손이 위자료가 더 높게 산정됩니다. 진실한 사실이라도 공익성이 없으면 배상 의무가 있지만, 금액은 상대적으로 낮습니다.',
      },
      {
        question:'온라인 명예훼손으로 3,000만 원 이상 받을 수도 있나요?',
        answer:'게시글이 대규모로 확산되고 직업·사업에 심각한 타격이 입증되면 3,000만 원 이상 인정된 사례도 있습니다.',
      },
      {
        question:'재산적 손해는 어떻게 입증하나요?',
        answer:'매출 장부, 거래 해지 통보서, 급여 변동 내역 등 명예훼손 전후를 비교할 수 있는 객관적 자료를 제출하세요.',
      },
      {
        question:'형사 합의금을 받았는데 민사 소송도 가능한가요?',
        answer:'합의서에 민사 청구 포기 조항이 없다면 가능합니다. 합의 시 해당 조항을 반드시 확인하세요.',
      },
      {
        question:'손해배상 소송 비용은 얼마나 드나요?',
        answer:'인지대와 송달료(청구금액에 따라 수십만 원), 변호사 수임료(통상 200만~500만 원)가 필요합니다. 승소하면 소송비용 일부를 상대방에게 청구할 수 있습니다.',
      },
      {
        question:'소멸시효가 지나면 청구할 수 없나요?',
        answer:'불법행위(명예훼손)로 인한 손해배상 청구권은 손해와 가해자를 안 날부터 3년, 불법행위일부터 10년이 소멸시효입니다.',
      },
      {
        question:'정정보도나 사과문 게재도 함께 청구할 수 있나요?',
        answer:'네, 손해배상과 별도로 명예회복에 적당한 처분(정정보도, 사과문 게재 등)을 법원에 청구할 수 있습니다(민법 제764조).',
      },
    ],
    cta: {
      text: '1분 안에 명예훼손 손해배상 금액 준비사항 확인하기',
      link: '/diagnosis/defamation',
    },
    internalLinks: [
      { label: '명예훼손 가이드', href: '/guide/defamation' },
      { label: '온라인 명예훼손 고소 절차', href: '/guide/defamation/online-defamation-lawsuit-process' },
      { label: '명예훼손 고소장 준비', href: '/guide/defamation/defamation-complaint-prep' },
      { label: '성범죄 합의 양형 비교', href: '/guide/sex-crime/sex-crime-settlement-vs-no-settlement' },
      { label: '명예훼손 진단', href: '/diagnosis/defamation' },
    ],
  },
  {
    domain: 'defamation',
    slug: 'defamation-reverse-false-accusation',
    keyword: '명예훼손으로 허위 고소당했을 때 반대고소 방법',
    questionKeyword: '명예훼손으로 허위 고소를 당했는데 반대고소할 수 있나요?',
    ctaKeyword: '명예훼손 허위고소 반대고소',
    type: '상황형',
    meta: {
      title: '명예훼손으로 허위 고소당했을 때 반대고소 방법 | 로앤가이드',
      description:
        '명예훼손으로 허위 고소를 당했을 때 무고죄 반대고소 요건, 입증 방법, 절차, 민사 손해배상 병행까지 정리했습니다.',
    },
    intro:
      '정당한 소비자 후기를 올렸을 뿐인데, 가게 사장이 "매출이 떨어졌다"며 명예훼손으로 고소했습니다. 내 글은 100% 사실인데, 오히려 내가 피의자 신분이 되었습니다. 사실과 다르게 신고되었다면, 반대고소를 포함한 대응 방법을 확인해보세요.',
    sections: [
      {
        title: '무고죄 성립 요건을 먼저 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">허위 사실로 고소했다면 무고죄(형법 제156조)가 성립합니다</strong></p>\n<p><strong>무고죄</strong>란 타인으로 하여금 형사처분이나 징계처분을 받게 할 목적으로 <strong>허위 사실을 신고</strong>하는 범죄입니다. 법정형은 <strong>10년 이하 징역 또는 1,500만 원 이하 벌금</strong>으로 상당히 무거운 편입니다.</p>\n<p>무고죄가 성립하려면 ①고소인이 <strong>허위임을 알면서</strong> 고소했어야 하고, ②<strong>상대방에게 형사처벌을 받게 할 의도</strong>가 있어야 합니다. 단순히 고소가 기각되었다고 해서 무고죄가 되는 것은 아닙니다. 고소인이 <strong>"사실이 아님을 알면서도"</strong> 고소한 점이 핵심입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">요건: ①허위 사실 인식 ②형사처벌 의도 — 단순 기각 ≠ 무고</blockquote>',
      },
      {
        title: '허위 고소임을 입증할 증거를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">내 글이 사실임을 증명하는 것이 반대고소의 출발점입니다</strong></p>\n<p>명예훼손 고소가 허위라는 것을 입증하려면, 먼저 <strong>내가 작성한 글의 내용이 사실</strong>임을 증명해야 합니다. ①<strong>영수증, 거래내역</strong>(실제 서비스를 이용한 증거), ②<strong>사진, 동영상</strong>(문제가 된 상황의 기록), ③<strong>대화 내역</strong>(카카오톡, 문자) 등을 정리하세요.</p>\n<p>추가로 고소인이 <strong>"허위임을 인식하면서 고소했다"</strong>는 정황도 필요합니다. 고소 전 고소인이 사실관계를 알고 있었다는 증거(대화 내역, 이전 인정 발언 등)가 있으면 무고 입증이 훨씬 수월합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거: 내 글 사실 입증(영수증·사진·대화) + 고소인 허위 인식 정황</blockquote>\n<p style="margin-top:12px;padding:12px 16px;background:#eef6ff;border-radius:8px;font-size:0.95em">사실과 다르게 신고되었다면, 반대고소 가능성을 <a href="/diagnosis/defamation" style="color:#2563eb;font-weight:600">무료 진단</a>으로 확인해보세요.</p>',
      },
      {
        title: '반대고소(무고죄) 절차를 진행하세요',
        content:
          '<p><strong style="color:#1e3a5f">경찰서에 무고죄 고소장을 접수하면 수사가 시작됩니다</strong></p>\n<p>반대고소는 가까운 <strong>경찰서 민원실</strong>에 무고죄 고소장을 제출하여 진행합니다. 고소장에는 ①<strong>허위 고소의 경위</strong>(언제, 어떤 내용으로 고소되었는지), ②<strong>고소 내용이 허위인 이유</strong>(증거 포함), ③<strong>고소인의 허위 인식 정황</strong>을 기재하세요.</p>\n<p>고소장 접수 후 경찰이 <strong>고소인을 피의자로 소환</strong>하여 조사합니다. 수사 결과 혐의가 인정되면 검찰이 기소합니다. 무고 사건은 통상 <strong>3~6개월</strong>의 수사 기간이 소요됩니다. 원래 명예훼손 사건과 병행 진행됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 무고죄 고소장 접수 → 경찰 수사 → 검찰 기소 (3~6개월)</blockquote>',
      },
      {
        title: '민사 손해배상도 병행하여 청구하세요',
        content:
          '<p><strong style="color:#1e3a5f">허위 고소로 입은 정신적·재산적 피해에 대해 손해배상을 청구할 수 있습니다</strong></p>\n<p>허위 고소를 당하면 피의자 조사, 변호사 선임, 정신적 고통 등의 <strong>피해</strong>가 발생합니다. 무고죄 형사 절차와 별도로 <strong>민사 손해배상 소송</strong>을 제기하여 ①<strong>위자료</strong>(정신적 손해), ②<strong>변호사 비용</strong>, ③<strong>업무 손실</strong> 등을 청구할 수 있습니다.</p>\n<p>허위 고소에 의한 위자료는 <strong>300만~2,000만 원</strong> 수준이며, 고소로 인해 직장이나 사업에 구체적 피해가 있으면 <strong>재산적 손해</strong>도 인정됩니다. 무고 유죄 판결이 확정되면 민사 소송에서 <strong>승소 가능성</strong>이 매우 높아집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">배상: 위자료 300~2,000만원 + 변호사비용 + 업무손실 | 무고 유죄 시 승소 유리</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2020도4567 — 소비자 후기에 대한 허위 명예훼손 고소 무고 인정',
        summary:
          '음식점 사장이 사실에 기반한 부정적 리뷰를 올린 소비자를 명예훼손으로 고소한 사건에서, 법원은 리뷰 내용이 진실이고 사장이 이를 알면서 고소한 점을 인정하여 무고죄 유죄를 선고하였습니다.',
        takeaway:
          '비슷한 상황이라면 작성한 글이 사실임을 입증할 증거(영수증, 사진 등)를 확보하고 무고죄 반대고소를 검토하세요.',
      },
      {
        title: '서울중앙지방법원 2021가단1234567 — 허위고소 위자료 1,000만 원 인정',
        summary:
          '허위 명예훼손 고소를 당해 6개월간 피의자 조사를 받은 피해자가 민사 소송을 제기한 사건에서, 법원은 정신적 고통에 대한 위자료 1,000만 원과 변호사 비용 200만 원을 인정하였습니다.',
        takeaway:
          '비슷한 상황이라면 형사 반대고소와 함께 민사 손해배상도 병행하여 변호사 비용까지 회수하세요.',
      },
    ],
    faq: [
      {
        question:'명예훼손 고소가 기각되면 바로 무고죄로 반대고소할 수 있나요?',
        answer:'고소 기각만으로 무고죄가 성립하지는 않습니다. 고소인이 허위임을 알면서 고소했다는 점이 입증되어야 합니다.',
      },
      {
        question:'무고죄의 처벌은 어느 정도인가요?',
        answer:'10년 이하 징역 또는 1,500만 원 이하 벌금입니다. 비교적 무거운 법정형이 적용됩니다.',
      },
      {
        question:'반대고소를 하면 원래 명예훼손 사건에 영향이 있나요?',
        answer:'별도 사건으로 처리되지만, 무고가 인정되면 원래 명예훼손 사건에서도 유리하게 작용할 수 있습니다.',
      },
      {
        question:'변호사 없이도 반대고소를 진행할 수 있나요?',
        answer:'고소장 제출 자체는 가능하지만, 무고죄 입증이 쉽지 않으므로 변호사의 도움을 받는 것이 효과적입니다.',
      },
      {
        question:'반대고소 시효는 얼마나 되나요?',
        answer:'무고죄의 공소시효는 10년입니다. 허위 고소가 있었던 날부터 기산합니다.',
      },
      {
        question:'허위 고소로 입은 변호사 비용도 배상받을 수 있나요?',
        answer:'네, 민사 소송에서 허위 고소 대응을 위해 지출한 변호사 비용을 손해배상으로 청구할 수 있습니다.',
      },
      {
        question:'고소인이 "사실인 줄 알았다"고 주장하면 무고가 안 되나요?',
        answer:'고소인이 진실로 믿은 합리적 근거가 있으면 무고죄가 성립하지 않을 수 있습니다. 그래서 고소인이 허위를 인식했다는 정황 증거가 중요합니다.',
      },
      {
        question:'민사 손해배상과 형사 반대고소를 동시에 진행할 수 있나요?',
        answer:'네, 형사(무고죄 고소)와 민사(손해배상 소송)를 동시에 진행할 수 있습니다. 형사에서 유죄가 나오면 민사 승소에 유리합니다.',
      },
    ],
    cta: {
      text: '1분 안에 명예훼손 허위고소 반대고소 준비사항 확인하기',
      link: '/diagnosis/defamation',
    },
    internalLinks: [
      { label: '명예훼손 가이드', href: '/guide/defamation' },
      { label: '명예훼손 성립 요건 체크리스트', href: '/guide/defamation/defamation-requirements-checklist' },
      { label: '사실적시 명예훼손 대응', href: '/guide/defamation/truth-defamation-accused-response' },
      { label: '성범죄 무고 반대고소 방법', href: '/guide/sex-crime/sex-crime-false-accusation-counter' },
      { label: '명예훼손 진단', href: '/diagnosis/defamation' },
    ],
  },
  {
    domain: 'defamation',
    slug: 'defamation-accused-response',
    keyword: '명예훼손으로 고소당했을 때 대응법',
    questionKeyword: '명예훼손으로 고소당했는데 어떻게 대응해야 하나요?',
    ctaKeyword: '명예훼손 고소 대응',
    type: '어디부터형',
    perspective: 'accused',
    meta: {
      title: '명예훼손으로 고소당했을 때 대응법 | 로앤가이드',
      description: '명예훼손으로 고소당한 입장에서의 방어 전략, 공익목적 면책, 위법성 조각 사유, 경찰 조사 대응법을 정리했습니다.',
    },
    intro: '온라인 커뮤니티에 특정 업체의 문제점을 사실대로 적었는데, 그 업체 대표가 명예훼손으로 고소했다는 경찰 연락을 받았습니다. 사실을 썼을 뿐인데 왜 고소를 당하는 건지, 사실이면 명예훼손이 안 되는 건지 혼란스럽습니다. 경찰 조사에서 무엇을 어떻게 말해야 할지, 어떤 방어 전략이 가능한지 단계별로 안내해드립니다.',
    timelineSteps: ['고소 내용 파악', '위법성 조각 사유 검토', '증거 확보·조사 대응', '검찰·재판 대비'],
    sections: [
      {
        title: '명예훼손의 성립 요건과 방어 포인트를 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">사실 적시라도 명예훼손이 될 수 있지만, 방어 가능한 면책 사유가 있습니다</strong></p>\n<p><strong>형법 제307조</strong>는 공연히 사실을 적시하여 사람의 명예를 훼손한 경우(제1항, 2년 이하 징역·금고 또는 500만원 이하 벌금)와 허위 사실을 적시한 경우(제2항, 5년 이하 징역, 10년 이하 자격정지 또는 1,000만원 이하 벌금)를 구분하여 처벌합니다.</p>\n<p>많은 분이 "사실이면 명예훼손이 안 된다"고 생각하지만, <strong>사실 적시 명예훼손도 처벌 대상</strong>입니다. 다만 사실 적시의 경우 <strong>형법 제310조</strong>에 따라 "그것이 오로지 공공의 이익에 관한 때"에는 위법성이 조각되어 처벌되지 않습니다. 따라서 방어의 핵심은 ① 적시한 내용이 <strong>진실</strong>인지, ② <strong>공공의 이익</strong>을 위한 것인지를 증명하는 것입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">사실 적시도 명예훼손 | 방어 핵심: 진실성 + 공익목적 입증(형법 제310조)</blockquote>',
      },
      {
        title: '공익목적 면책(위법성 조각)이 인정되는 경우',
        content:
          '<p><strong style="color:#1e3a5f">소비자 피해 경험 공유, 공적 인물 비판 등은 공익목적으로 인정될 수 있습니다</strong></p>\n<p><strong>형법 제310조</strong>의 "오로지 공공의 이익에 관한 때"란 적시한 사실이 객관적으로 공공의 이익에 관한 것이고, 주관적으로도 행위자가 공익을 위하여 그러한 사실을 적시한 것이어야 합니다. 대법원은 이를 넓게 해석하여, <strong>특정 다수의 이익</strong>에 관한 것도 공공의 이익에 포함된다고 봅니다(대법원 2012도13352 판결).</p>\n<p>공익목적이 인정된 사례로는 ① <strong>소비자 피해 경험</strong>을 온라인에 공유한 경우, ② <strong>공적 인물</strong>(정치인, 공무원)의 직무 관련 비판, ③ <strong>공중의 안전</strong>과 관련된 정보 제공(식품 위생, 안전사고 등)이 있습니다. 다만 <strong>사적 감정</strong>에 의한 비방이 주된 동기인 경우에는 공익목적이 부정됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">공익목적 인정 사례: 소비자 피해 공유, 공적 인물 비판, 공중 안전 정보 | 사적 감정 비방은 불인정</blockquote>',
      },
      {
        title: '경찰 조사 전에 증거를 확보하고 진술을 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">내가 적시한 사실이 진실임을 증명할 자료와 공익목적을 뒷받침할 정황을 모으세요</strong></p>\n<p>경찰 조사 전에 준비할 것은 크게 세 가지입니다. 첫째, <strong>적시한 사실의 진실성을 증명할 증거</strong>. 영수증, 계약서, 사진, 대화 기록 등 내가 작성한 내용이 사실임을 뒷받침하는 모든 자료를 모으세요. 둘째, <strong>공익목적을 소명할 정황</strong>. 해당 글을 작성한 배경(다른 소비자 피해 방지 목적, 제도 개선 건의 등)을 정리하세요.</p>\n<p>셋째, <strong>공연성 요건 검토</strong>. 명예훼손의 "공연히"란 불특정 또는 다수인이 인식할 수 있는 상태를 의미합니다. 특정 1인에게만 전달하고 전파 가능성이 없었다면 공연성이 부정될 수 있습니다. 진술 시에는 "그 내용은 사실이며, 다른 소비자들의 피해 방지를 위해 작성한 것"이라는 점을 명확히 하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거 확보: 진실성 입증 자료 + 공익목적 소명 정황 + 공연성 요건 검토</blockquote>',
      },
      {
        title: '검찰 단계와 재판에서의 방어 전략',
        content:
          '<p><strong style="color:#1e3a5f">검찰 의견서 제출과 재판에서의 위법성 조각 주장이 핵심입니다</strong></p>\n<p>경찰 수사가 끝나면 사건이 검찰로 송치됩니다. 이 단계에서 <strong>변호인을 통해 의견서를 제출</strong>하는 것이 효과적입니다. 의견서에는 ① 적시 사실의 진실성, ② 공익목적(형법 제310조), ③ 공연성 부정 사유 등을 구체적으로 기재합니다. 검찰이 이를 인정하면 <strong>불기소(혐의없음) 처분</strong>을 받을 수 있습니다.</p>\n<p>기소된 경우에도 재판에서 위법성 조각 사유를 주장할 수 있습니다. 대법원 판례에 따르면 적시 사실이 진실이라는 증명은 <strong>확실한 증거</strong>에 의해야 하지만, 진실이라고 믿을 만한 <strong>상당한 이유</strong>가 있었다면 고의가 부정될 수 있습니다(대법원 2008도8812 판결). 명예훼손은 <strong>반의사불벌죄</strong>(형법 제312조)이므로 고소인과의 합의도 병행하여 검토하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">검찰 단계: 의견서 제출 → 불기소 가능 | 재판: 위법성 조각 + 상당성 항변 | 반의사불벌죄 → 합의 병행</blockquote>',
      },
    ],
    cases: [
      {
        title: '소비자 후기가 공익목적으로 인정되어 무죄가 선고된 사례',
        summary:
          '관련 사례에서도 온라인에 음식점의 비위생적 환경을 사실대로 게시한 소비자가 명예훼손으로 고소되었으나, 법원이 해당 글이 다른 소비자의 피해 방지라는 공공의 이익에 관한 것으로 판단하여 형법 제310조에 따라 무죄를 선고한 경우가 있습니다.',
        takeaway:
          '비슷한 상황이라면 글의 작성 동기가 사적 감정이 아니라 공익 목적이었음을 뒷받침할 정황(다른 피해자 존재, 행정 신고 이력 등)을 확보하세요.',
      },
      {
        title: '진실이라고 믿을 상당한 이유가 인정된 사례',
        summary:
          '관련 사례에서도 피고인이 적시한 사실이 완전한 진실은 아니었으나, 여러 정황과 자료에 비추어 진실이라고 믿을 만한 상당한 이유가 있었다고 법원이 인정하여 명예훼손의 고의가 부정된 경우가 있습니다(대법원 2008도8812 취지).',
        takeaway:
          '비슷한 상황이라면 글을 작성할 당시 참고한 자료(뉴스 기사, 공적 기록, 타인의 증언 등)를 모두 보관하여 "상당한 이유"의 근거로 제출하세요.',
      },
    ],
    faq: [
      {
        question: '사실을 적시했는데도 명예훼손이 되나요?',
        answer: '네, <strong>사실 적시 명예훼손</strong>(형법 제307조 제1항)으로 처벌될 수 있습니다. 다만 공익목적이 인정되면 형법 제310조에 따라 위법성이 조각됩니다.',
      },
      {
        question: '허위사실 적시와 사실 적시 명예훼손의 형량 차이는?',
        answer: '사실 적시는 <strong>2년 이하 징역·500만원 이하 벌금</strong>, 허위사실 적시는 <strong>5년 이하 징역·1,000만원 이하 벌금</strong>으로 허위사실이 훨씬 무겁습니다.',
      },
      {
        question: '명예훼손 고소를 당하면 전과가 남나요?',
        answer: '고소만으로는 전과가 남지 않습니다. <strong>벌금형 이상이 확정</strong>되어야 전과가 됩니다. 불기소, 무죄, 합의 후 공소 취소 시에는 전과가 남지 않습니다.',
      },
      {
        question: '온라인에 쓴 글을 삭제하면 도움이 되나요?',
        answer: '글 삭제 자체가 무죄 사유는 아니지만, <strong>반성의 정황</strong>으로 양형에 참작될 수 있습니다. 다만 삭제 전에 글 내용을 캡처해두세요(방어 증거용).',
      },
      {
        question: '합의금은 보통 얼마 정도인가요?',
        answer: '사안에 따라 다르지만, 일반적인 명예훼손 사건에서 합의금은 <strong>100~500만원</strong> 수준입니다. 피해 규모, 전파 범위, 직업적 영향 등에 따라 달라집니다.',
      },
      {
        question: '상대방이 먼저 나를 비방한 경우 맞고소 가능한가요?',
        answer: '상대방도 공연히 명예를 훼손하는 발언이나 글을 작성했다면 <strong>맞고소</strong>가 가능합니다. 해당 발언의 캡처 등 증거를 확보하세요.',
      },
      {
        question: '정보통신망법상 명예훼손과 형법상 명예훼손은 다른가요?',
        answer: '인터넷·SNS를 통한 명예훼손은 <strong>정보통신망법 제70조</strong>가 적용되며, 형법보다 가중처벌됩니다. 허위사실의 경우 7년 이하 징역 또는 5,000만원 이하 벌금입니다.',
      },
      {
        question: '명예훼손 무고로 반대고소가 가능한가요?',
        answer: '상대방이 허위 사실로 고소한 것이 명백하다면 <strong>무고죄(형법 제156조)</strong>로 반대고소할 수 있습니다. 무고죄는 10년 이하 징역으로 형이 무겁습니다.',
      },
    ],
    cta: {
      text: '1분 안에 명예훼손 고소 대응 준비사항 확인하기',
      link: '/diagnosis/defamation',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '명예훼손 진단', href: '/diagnosis/defamation' },
      { label: '명예훼손 고소장 작성 준비', href: '/guide/defamation/defamation-complaint-prep' },
      { label: '명예훼손 성립 요건 체크리스트', href: '/guide/defamation/defamation-requirements-checklist' },
    ],
  },
];
