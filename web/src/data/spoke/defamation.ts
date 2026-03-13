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
];
