import { SpokePage } from '../spoke-pages';

// batch50 defame+jeonse 5개 (defamation 3 + jeonse 2)
//
// 고유 존재 이유:
// 1. 이 페이지는 음식점·서비스에 대한 온라인 후기를 사실대로 작성했지만 명예훼손 혐의를 받고 있는 작성자가 형법 제310조 진실성·공익성 위법성조각사유로 항변하도록 돕는 페이지다.
// 2. 이 페이지는 정치인·기업인 등 공인을 비판하는 발언으로 명예훼손·민사 손해배상 분쟁에 휘말린 일반인이 공인 이론·표현의 자유 보호 범위를 활용해 방어 절차를 정리하도록 돕는 페이지다.
// 3. 이 페이지는 익명 게시판·커뮤니티에서 명예훼손 게시글의 작성자 신원을 확인해 형사고소·민사청구를 진행하려는 피해자가 정보통신망법 제44조의6·KCSC·법원 사실조회 절차를 단계별로 활용하도록 돕는 페이지다.
// 4. 이 페이지는 임대인이 보증금에서 도배·청소비를 임의 공제해 분쟁 중인 임차인이 원상회복 의무 범위·통상 마모 기준·민사 청구 절차를 정리해 공제 부당 부분을 회수하도록 돕는 페이지다.
// 5. 이 페이지는 보증금 일부가 미반환된 임차인이 민법 제469조 대위변제 구조와 HUG 보증·압류·경매 절차를 결합해 회수 경로를 단계별로 검토하도록 돕는 페이지다.

export const spokesBatch50DefameJeonse: SpokePage[] = [
  // ─── 1. defamation / online-review-truth-defense ───
  {
    domain: 'defamation',
    slug: 'defamation-online-review-truth-defense',
    keyword: '온라인 후기 사실적시 명예훼손 진실성 항변',
    questionKeyword: '사실대로 후기를 썼는데 명예훼손으로 고소당했어요',
    ctaKeyword: '온라인 후기 사실적시 명예훼손 항변 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '온라인 후기 사실 명예훼손 항변 3가지 요건 | 로앤가이드',
      description:
        '사실대로 후기를 썼는데 명예훼손 혐의를 받고 있다면 형법 제310조 진실성·공익성 항변 3가지 요건과 합의 시점을 지금 확인하세요.',
    },
    intro:
      '<p>"실제 받은 서비스를 그대로 적었을 뿐인데 가게 사장이 고소했어요. 사실인데도 처벌받을 수 있나요?" 사실 적시 명예훼손은 처벌 가능한 범죄이지만, 형법 제310조 위법성조각사유(진실성+공익성)가 인정되면 처벌을 피할 수 있습니다. 혐의를 받고 있다면 후기 내용이 진실이라는 점을 입증할 자료를 정리하고, 공공의 이익에 부합하는 동기를 함께 설명할 수 있도록 준비하는 것이 핵심입니다.</p>',
    sections: [
      {
        title: 'Q. 사실대로 쓴 후기도 명예훼손이 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 형법 제307조 제1항은 진실한 사실 적시도 처벌 대상으로 두지만, 제310조로 위법성을 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>형법 제307조 제1항</strong> — 공연히 사실을 적시해 사람의 명예를 훼손하면 2년 이하 징역·500만원 이하 벌금 검토 대상.</li>\n<li><strong>형법 제310조 위법성조각</strong> — "진실한 사실로서 오로지 공공의 이익에 관한 때"는 처벌하지 않음. 진실성 + 공익성 두 요건 모두 충족 필요.</li>\n<li><strong>정보통신망법 제70조 제1항</strong> — 인터넷·앱 후기는 정보통신망법이 적용되며 "비방할 목적"이 별도 구성요건. 검사가 비방 목적을 입증해야 처벌이 가능합니다.</li>\n<li><strong>반의사불벌죄</strong> — 사실적시 명예훼손(형법 제307조 제1항)은 반의사불벌죄로 합의로 처벌 면제 가능. 정보통신망법은 반의사불벌죄가 아닙니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사실이라는 증거 + 공익적 동기가 있다면 형법 제310조 항변 또는 정보통신망법상 비방 목적 부정 항변을 검토할 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 진실성·공익성 항변 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단(KLAC) 형사 항변 절차를 참고하면 아래 순서로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 후기 내용 분류 (즉시)</strong> — 작성한 후기를 사실/의견/감정으로 문장별 분류. 사실 부분은 입증 자료 매칭, 의견·감정 부분은 별도 표시.</li>\n<li><strong>2단계 — 진실성 입증 자료 수집 (수일 내)</strong> — 영수증·서비스 받은 사진·메시지·동행자 진술·통화 녹취 등 후기에 적힌 사실의 근거를 시간 순으로 정리.</li>\n<li><strong>3단계 — 공익성 동기 정리 (수일 내)</strong> — 다른 소비자의 알 권리·선택권 보호, 위생·안전 문제 공론화 등 공공 이익에 기여하는 동기를 1~2단락으로 서면 정리.</li>\n<li><strong>4단계 — 변호인 또는 KLAC(132) 무료 상담</strong> — 형법 제310조·정보통신망법 비방 목적 부정 항변 가능성 검토. 의견서 초안 작성.</li>\n<li><strong>5단계 — 경찰 조사 출석</strong> — 진술 일관성 유지, 입증 자료 제출, 진실성 항변 + 공익성 동기 진술. 송치 전 합의 가능성도 함께 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">혐의를 받고 있다면 AI가 진실성·공익성 항변 가능성을 단계별로 분석해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">사실 후기 항변 AI 상담 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">진실성·공익성 항변에 필요한 자료를 미리 정리해두세요.</strong></p>\n<ul>\n<li><strong>진실성 입증</strong> — 영수증·결제 내역·예약 확인서·서비스 받은 사진(시간정보 포함)·동행자 진술서·매장 위치 GPS 기록·문자/메신저 대화·통화 녹취.</li>\n<li><strong>공익성 입증</strong> — 동일 가게에 대한 다른 후기·민원 사례·언론 보도·관할 지자체 위생점검 결과·소비자원 피해사례 데이터.</li>\n<li><strong>고의·과실 부재</strong> — 후기 작성 동기·작성 당시 인식·확인 절차(예: 매장에 직접 컴플레인했지만 거절당한 기록).</li>\n<li><strong>합의 시도 자료</strong> — 송치 전 합의가 처분 결정에 참작될 수 있으므로 합의 시도 메시지·합의서 초안 보관.</li>\n<li><strong>본인 신분 자료</strong> — 신분증·진술서·변호인 선임계(선임 시).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 영수증·결제 내역은 시간 경과로 누락되기 쉬우니 후기 작성 시점부터 별도 폴더에 보관하는 습관이 안전합니다. 카드 명세서 PDF 다운로드도 도움이 됩니다.</blockquote>',
      },
      {
        title: '다툴 포인트 — 항변 핵심 3가지',
        content:
          '<p><strong style="color:#1e3a5f">사실과 다르게 신고되었다면 아래 3가지 항변을 함께 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>진실성 항변</strong> — 후기 중요 부분이 객관적 사실과 합치하면 진실성이 인정될 소지가 있음. 일부 표현이 다소 과장되거나 세부가 부정확해도 핵심 사실이 진실이면 다툴 수 있습니다.</li>\n<li><strong>공익성 항변</strong> — 다른 소비자의 알 권리·합리적 선택권에 기여한 동기가 주된 목적이라면, 부수적으로 사익이 섞여 있더라도 공익성 인정을 검토할 수 있습니다.</li>\n<li><strong>비방 목적 부정 항변(정보통신망법)</strong> — 정보통신망법 제70조는 "비방 목적"을 별도 구성요건으로 두며 검사가 입증 책임을 부담. 공익적 동기가 주된 목적이라면 비방 목적이 부정될 가능성이 있습니다.</li>\n<li><strong>합의 병행</strong> — 항변과 별개로 송치 전 합의는 불기소 처분(혐의 없음·기소유예) 결정에 참작될 수 있어 동시 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 사실이 명백하다며 항변 자료 없이 출석하면 진술만으로 진실성 입증이 어려워집니다. 출석 전에 시간 순으로 정리한 자료 묶음을 준비하는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 형법 제310조 진실성·공익성 위법성조각사유 인정',
        summary:
          '대구지법 2023노3777 사건(대구지법, 2024.01.26 선고)에서 법원은 자동차 대리점주의 부당노동행위 등을 알리는 1인 시위 피켓 표현이 진실한 사실로서 다른 일반인의 합리적 선택권에 도움이 되는 공적 관심 사안에 해당한다고 보아 형법 제310조에 따른 위법성조각을 인정했습니다.',
        takeaway:
          '후기 등 사실 적시 명예훼손에서도 핵심 부분이 진실이고 공공의 이익에 기여하는 동기가 인정되면 처벌을 면할 소지가 있어, 항변 자료를 체계적으로 정리해두는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '후기에 일부 과장된 표현이 섞이면 항변이 무너지나요?',
        answer:
          '<strong>중요한 부분이 진실이면 세부 과장은 허용될 수 있습니다.</strong> 다만 핵심 사실 자체가 거짓이면 진실성 항변이 어려우니 사실/의견을 분리해 정리해두세요.',
      },
      {
        question: '후기를 즉시 삭제하면 처벌이 면제되나요?',
        answer:
          '<strong>삭제만으로 처벌이 자동 면제되지는 않습니다.</strong> 다만 피해 최소화 노력으로 참작 사유가 되며, 합의·항변과 결합되면 불기소 처분 가능성이 올라가요.',
      },
      {
        question: '공익성은 어떻게 입증하나요?',
        answer:
          '<strong>다른 소비자의 알 권리·선택권 보호 동기가 핵심입니다.</strong> 동일 가게의 다른 민원·언론 보도·위생점검 결과 등 공적 관심 사안임을 보여주는 자료를 함께 제출하세요.',
      },
      {
        question: '정보통신망법은 형법보다 처벌이 더 무거운가요?',
        answer:
          '<strong>정보통신망법 제70조는 사실 적시 3년·허위 7년 이하로 형법보다 무거운 편입니다.</strong> 다만 검사가 비방 목적을 입증해야 처벌이 가능해, 공익적 동기로 다툴 소지가 있어요.',
      },
      {
        question: '경찰 출석 전에 변호인 없이 가도 되나요?',
        answer:
          '<strong>가능하지만 진술 일관성·항변 정리에서 변호인 도움이 큽니다.</strong> 비용이 부담되면 KLAC(132)·당직변호인 제도·법률홈닥터 등 무료 상담 경로를 활용해보세요.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 고소장 작성 가이드', href: '/guide/defamation/defamation-complaint-writing-guide' },
      { label: '온라인 명예훼손 형사 대응', href: '/guide/defamation/defamation-online-criminal-response' },
      { label: '온라인 후기 명예훼손 형사', href: '/guide/defamation/defamation-online-review-criminal' },
      { label: '명예훼손 게시글 삭제 요청', href: '/guide/defamation/defamation-deletion-request-platform' },
      { label: '단톡방 모욕·명예훼손 캡처', href: '/guide/defamation/defamation-group-chat-insult-capture' },
    ],
  },

  // ─── 2. defamation / public-figure-criticism-protect ───
  {
    domain: 'defamation',
    slug: 'defamation-public-figure-criticism-protect',
    keyword: '공인 비판 명예훼손 방어',
    questionKeyword: '정치인·연예인 비판 글로 고소당했는데 어떻게 방어해야 하나요?',
    ctaKeyword: '공인 비판 명예훼손 방어 절차 점검',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '공인 비판 명예훼손 방어 5단계 절차 | 로앤가이드',
      description:
        '정치인·연예인 등 공인 비판 글로 명예훼손 혐의를 받고 있다면 공인 이론·표현의 자유 보호 범위와 방어 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"정치인 발언이 황당해서 SNS에 비판 글을 올렸는데, 다음 날 명예훼손으로 고소장이 들어왔어요." 공인에 대한 비판은 표현의 자유 보호 범위가 일반인보다 넓게 인정되는 경향이 있습니다. 혐의를 받고 있다면 공인 이론·공공 토론 기여 여부·악의성 부재를 단계별로 정리해 방어 자료를 준비하는 것이 도움이 됩니다.</p>',
    sections: [
      {
        title: '공인 비판 명예훼손 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단(KLAC) 형사 항변 절차를 참고하면 아래 순서로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시글·발언 보존 (즉시)</strong> — 본인 게시글 원본 + 작성 일자·플랫폼 캡처 + 댓글·반응 캡처. 삭제 전 본인 보관용으로 백업 필수.</li>\n<li><strong>2단계 — 공인 여부 확인</strong> — 정치인(국회의원·자치단체장)·고위 공무원·연예인·기업 임원 등은 공인성 인정 사례가 많음. 사인이라도 공적 활동에 관련되면 공인 이론 적용 검토 가능.</li>\n<li><strong>3단계 — 표현 분류</strong> — 사실 적시 vs 의견 표명을 분리. 의견 표명은 모욕죄 검토 대상이지만 명예훼손 성립이 어려우며, 사실 적시는 진실성·공익성 항변이 핵심.</li>\n<li><strong>4단계 — 변호인 또는 KLAC(132) 상담</strong> — 형법 제310조·정보통신망법 비방 목적·표현의 자유 위헌성 항변 가능성 검토.</li>\n<li><strong>5단계 — 답변권·정정보도 검토</strong> — 언론중재위원회 조정 신청·답변권 행사로 분쟁 조기 해결 검토. 민사 손배 청구가 병행되면 답변·정정으로 위자료가 감액될 수 있음.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">혐의를 받고 있다면 AI가 공인 이론·표현의 자유 항변 가능성을 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">공인 비판 방어 AI 상담 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 공인 이론 적용 기준',
        content:
          '<p><strong style="color:#1e3a5f">공인 비판 명예훼손은 표현의 자유 보호 범위가 더 넓게 검토되는 경향이 있습니다.</strong></p>\n<ul>\n<li><strong>공인 범주</strong> — 정치인·고위 공무원·언론인·기업 임원·연예인 등. 사인이라도 공적 활동을 한 영역에서 비판은 공인성 적용 검토 가능.</li>\n<li><strong>공적 관심 사안</strong> — 국정·정책·기업 윤리·연예인 활동 관련성·사회적 영향 등 공공 토론 기여 영역에 해당하는지 확인.</li>\n<li><strong>악의·중대 과실 부재</strong> — 공인 비판은 작성자가 진실로 믿을 만한 상당한 이유가 있었으면 책임이 다툴 소지가 있음. 단, 객관적 근거 없이 추측·풍문에 의존한 발언은 위험.</li>\n<li><strong>표현 형식</strong> — 의견·평가·풍자는 명예훼손 성립이 어려운 편. 다만 욕설·모욕 표현은 모욕죄 검토 대상으로 별도 다툴 사안.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "공인이라 마음대로 비판해도 된다"고 단정하면 위험합니다. 공인이라도 사생활 영역(가족·연애 등)은 공적 관심 사안에 해당하지 않아 보호 범위가 좁아질 수 있어요.</blockquote>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">공인 비판 방어에 필요한 자료를 단계별로 모아두세요.</strong></p>\n<ul>\n<li><strong>본인 게시글 보존</strong> — 원본 캡처 + 작성 일자·플랫폼 + 댓글·공유·반응 자료. 삭제 전 백업.</li>\n<li><strong>비판 근거 자료</strong> — 인용한 언론 보도·공식 발표·공개 데이터·통계·이전 발언 영상 등 작성 당시 진실로 믿었던 근거.</li>\n<li><strong>공적 관심 사안 입증</strong> — 동일 사안에 대한 다른 언론·SNS 토론·공개 토론회 기록 등 공공 토론 기여 자료.</li>\n<li><strong>본인 활동 자료</strong> — 평소 SNS·블로그 활동 패턴, 비판 글의 일회성 여부(상습 비방인지 단발성 의견인지).</li>\n<li><strong>합의·답변권 자료</strong> — 합의 시도 메시지·언론중재위 답변권 신청 자료(있는 경우).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 비판 근거로 인용한 언론 보도는 URL·기사 제목·발행일을 그대로 보관하세요. 기사 삭제 후에도 본인 캡처가 있으면 진실로 믿을 만한 이유 입증에 도움이 됩니다.</blockquote>',
      },
      {
        title: '다툴 포인트 — 민·형사 동시 검토',
        content:
          '<p><strong style="color:#1e3a5f">공인 비판 사건은 형사 + 민사 손배 + 답변권 절차를 함께 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>형사 항변</strong> — 형법 제310조 진실성·공익성 / 정보통신망법 비방 목적 부정 / 의견 표명에 그쳐 명예훼손 구성요건 미충족.</li>\n<li><strong>민사 손배 다툼</strong> — 공인 이론에 따른 위자료 감액 / 표현의 자유 우위 / 손해 발생 부재(이미 알려진 사실의 단순 반복).</li>\n<li><strong>삭제·답변권</strong> — 언론중재위원회 조정으로 정정보도·답변·반론 신청. 합의로 분쟁 조기 종결 가능.</li>\n<li><strong>위헌성 검토</strong> — 사실적시 명예훼손죄(형법 제307조 제1항)는 표현의 자유 침해 위헌 논쟁 진행 중. 헌법재판소 결정 동향 모니터링.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 민사 위자료 단정 표현은 피해야 합니다. 사례에 따라 다르지만 수백만원~수천만원 수준이 자주 보이며, 공인성·공익성 인정 시 감액되는 사례가 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망법상 비방 목적과 공공의 이익 관계',
        summary:
          '대법원 2022도699 사건(대법원, 2024.01.04 선고)에서 법원은 정보통신망법 제70조 제1항 명예훼손죄의 비방 목적은 사회적 평가 저하 인식과 별개의 구성요건이며, 적시한 사실이 공공의 이익에 관한 것이면 특별한 사정이 없는 한 비방 목적은 부인된다고 판시했습니다.',
        takeaway:
          '공인 비판 글은 공공 토론 기여라는 공익성 동기가 인정되면 비방 목적이 부정될 수 있어, 작성 동기와 인용 근거 자료를 체계적으로 정리해두는 것이 방어에 유리합니다.',
      },
    ],
    faq: [
      {
        question: '연예인 사생활 비판도 공인 이론이 적용되나요?',
        answer:
          '<strong>사생활 영역은 공인 이론 적용 범위가 좁아집니다.</strong> 연예인이라도 가족·연애 등 사적 영역은 공적 관심 사안으로 보기 어려워 표현의 자유 보호가 약해질 수 있어요.',
      },
      {
        question: '의견 표명이 명예훼손이 되나요?',
        answer:
          '<strong>순수한 의견·평가는 명예훼손 성립이 어렵습니다.</strong> 다만 의견 형식이라도 사실 전제가 깔려있으면 사실 적시로 평가될 수 있으니 표현 형식을 분리해두세요.',
      },
      {
        question: '풍자·패러디로 비판해도 처벌받을 수 있나요?',
        answer:
          '<strong>풍자·패러디는 보호 범위가 넓은 편입니다.</strong> 다만 일반인이 사실로 오인할 정도의 정교한 허위 영상·이미지는 명예훼손·정보통신망법 위반 검토 대상이 될 수 있어요.',
      },
      {
        question: '언론중재위 조정은 어떻게 신청하나요?',
        answer:
          '<strong>언론중재위(02-397-3000) 홈페이지에서 신청 가능합니다.</strong> 정정보도·반론·답변·손해배상 청구가 함께 신청 가능하고 통상 14~30일 내 조정 시도가 진행돼요.',
      },
      {
        question: '비판 글이 외국 SNS에 있어도 한국 법이 적용되나요?',
        answer:
          '<strong>한국 거주자가 작성하고 한국에서 게시·전파됐다면 적용 가능합니다.</strong> 다만 해외 플랫폼은 집행상 한계가 있어 형사·민사 절차를 신중히 설계해야 해요.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 고소장 작성 가이드', href: '/guide/defamation/defamation-complaint-writing-guide' },
      { label: '온라인 명예훼손 형사 대응', href: '/guide/defamation/defamation-online-criminal-response' },
      { label: '온라인 후기 명예훼손 형사', href: '/guide/defamation/defamation-online-review-criminal' },
      { label: '명예훼손 게시글 삭제 요청', href: '/guide/defamation/defamation-deletion-request-platform' },
      { label: '단톡방 모욕·명예훼손 캡처', href: '/guide/defamation/defamation-group-chat-insult-capture' },
    ],
  },

  // ─── 3. defamation / anonymous-poster-identity-trace ───
  {
    domain: 'defamation',
    slug: 'defamation-anonymous-poster-identity-trace',
    keyword: '익명 게시자 신원 확인 정보통신망법',
    questionKeyword: '익명으로 명예훼손한 사람의 신원을 어떻게 확인하나요?',
    ctaKeyword: '익명 명예훼손 작성자 신원확인 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '익명 명예훼손 작성자 신원확인 5단계 절차 | 로앤가이드',
      description:
        '익명 게시판·커뮤니티에 올라온 명예훼손 글의 작성자 신원을 확인하려면 정보통신망법 제44조의6·KCSC·법원 사실조회 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"이름은 없지만 저인 줄 알 만한 글이 익명 커뮤니티에 올라왔어요. 누가 썼는지부터 알아야 고소를 할 텐데 막막합니다." 익명 게시자 신원 확인은 정보통신망법 제44조의6 권리침해정보 신원확인 청구·방송통신심의위원회·법원 사실조회 등 여러 경로를 단계별로 활용할 수 있습니다. 형사 고소를 병행하면 수사기관이 직접 통신사 협조를 받아 가속화되는 경우가 많습니다.</p>',
    sections: [
      {
        title: '익명 게시자 신원확인 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단(KLAC) 신원확인 절차를 참고하면 아래 순서로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시글 증거 보존 (즉시)</strong> — URL·작성 일시·닉네임·내용 + 본인이 누구인지 알 만한 부분 표시. 공증 또는 해시값 캡처로 증거력 강화.</li>\n<li><strong>2단계 — 정보통신망법 제44조의6 신원확인 청구</strong> — 권리침해정보 작성자 정보를 플랫폼에 청구. 30일 이내 판단 통보. 거절 시 다음 단계 검토.</li>\n<li><strong>3단계 — 방송통신심의위원회(KCSC) 통신심의 + 형사 고소</strong> — 권리침해 시정요구·삭제 신청과 함께 경찰 형사 고소장 제출. 수사기관이 통신사·플랫폼에 직접 협조 요청 가능.</li>\n<li><strong>4단계 — 법원 사실조회 신청</strong> — 민사 가처분·본안소송 단계에서 법원이 플랫폼·통신사에 가입자 정보·접속 IP를 조회. 법원 판단 명령이 가장 강력한 경로.</li>\n<li><strong>5단계 — 신원 확정 후 형사·민사 진행</strong> — IP·계정 확인 후 가해자 신원 특정 → 형사 고소 보강 + 민법 제750조 위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">익명 게시자 신원확인 가능성과 형사·민사 절차를 AI가 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">신원확인 절차 AI 상담 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 정보통신망법 제44조의6 청구 실무',
        content:
          '<p><strong style="color:#1e3a5f">신원확인 청구는 사적 청구 + 공적 절차가 병행 가능합니다.</strong></p>\n<ul>\n<li><strong>청구 자격</strong> — 권리침해정보로 인해 명예·사생활 침해를 받은 본인. 침해 여부 입증 자료 첨부 필수.</li>\n<li><strong>청구 대상 정보</strong> — 작성자 성명·주소·연락처(플랫폼이 보유한 가입자 정보). 통신사 IP는 별도 통신비밀보호법 절차 필요.</li>\n<li><strong>처리 기간</strong> — 플랫폼은 청구 접수 후 30일 이내 판단 결과 통지. 거절 시 사유 명시.</li>\n<li><strong>비용</strong> — 청구 자체는 무료. 다만 플랫폼이 거절·심사 지연 시 변호인 선임·법원 절차 비용 발생 가능.</li>\n<li><strong>거절 시 대안</strong> — KCSC 권리침해 시정요구 + 형사 고소(가장 빠른 경로) + 민사 사실조회.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 게시글 캡처만으로 만족하고 URL·작성 시간 정보를 누락하면 신원확인 청구 시 게시물 특정이 어려울 수 있습니다. 캡처 + URL + 시간 + 닉네임 4종 세트로 보존하세요.</blockquote>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">신원확인 + 형사·민사 단계별로 필요한 자료를 한꺼번에 모아두세요.</strong></p>\n<ul>\n<li><strong>증거 보존</strong> — 게시글 URL·캡처(시간정보 포함)·닉네임·게시 일자·내용 전문·댓글·공유 통계.</li>\n<li><strong>본인 특정 자료</strong> — 게시글에서 본인이 누군지 알 만한 부분 표시 + 본인이 그 사람임을 증명하는 자료(소속·직업·SNS 매칭).</li>\n<li><strong>권리침해 입증</strong> — 게시글 내용이 명예·사생활을 침해함을 보여주는 자료. 동일 게시판의 다른 댓글·반응으로 전파 범위 입증.</li>\n<li><strong>형사 고소 자료</strong> — 고소장(피해 사실·고소 취지·증거목록) + 신분증·진단서(정신적 피해)·증인 진술서.</li>\n<li><strong>민사 가처분 자료</strong> — 가처분 신청서 + 보전 필요성 입증·게시글 삭제 시급성 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 익명 게시판은 운영진이 게시물·로그를 일정 기간 후 삭제할 수 있어 빠른 보존이 핵심입니다. 발견 즉시 캡처 + 가능하면 공증을 함께 받아두세요.</blockquote>',
      },
      {
        title: '다툴 포인트 — 신원확인 가능성 변수',
        content:
          '<p><strong style="color:#1e3a5f">신원확인 가능성에 영향을 미치는 변수들을 미리 파악하세요.</strong></p>\n<ul>\n<li><strong>플랫폼 보존 정책</strong> — 국내 플랫폼은 통신사실확인자료 일정 기간 보존(통신비밀보호법). 해외 플랫폼은 협조 한계 있음.</li>\n<li><strong>공용 IP·VPN</strong> — 가해자가 카페·도서관 공용 와이파이·VPN 사용 시 IP만으로 특정 어려움. 추가 정황 증거 필요.</li>\n<li><strong>형사 고소 병행</strong> — 수사기관 통신자료 제공 요청은 사적 청구보다 신속·강력. 형사 고소 병행이 가장 효과적.</li>\n<li><strong>법원 사실조회</strong> — 민사 단계에서 법원이 통신사·플랫폼에 직접 명령. 거절 시 강제력 발생.</li>\n<li><strong>통신비밀보호법 절차</strong> — 통신사실확인자료(IP·접속기록)는 법원 허가 필요. 형사·민사 절차에서 별도 신청.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "신원확인은 무조건 가능하다"는 단정은 금물입니다. 플랫폼·국가·시간 경과·증거 보존 상태에 따라 결과가 달라질 수 있어 단계별로 검토할 수 있는 절차를 점검하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 허위사실 명예훼손 범의의 단일성·계속성 판단',
        summary:
          '대법원 2022도10369 사건(대법원, 2025.10.30 선고)에서 법원은 동일 피해자에 대해 일정 기간 반복적으로 허위사실을 적시한 경우, 범의의 단일성·계속성 여부에 따라 포괄일죄 또는 별개 범행으로 평가될 수 있다고 판시했습니다.',
        takeaway:
          '익명 게시자가 동일 피해자에게 반복 게시한 경우 게시 일자별로 증거를 정리해두면, 신원확인 후 일괄 고소 또는 별개 고소 전략을 선택할 수 있는 근거가 됩니다.',
      },
    ],
    faq: [
      {
        question: '플랫폼이 신원확인 청구를 거절하면 어떻게 하나요?',
        answer:
          '<strong>형사 고소 + 법원 사실조회 병행이 가장 빠른 경로입니다.</strong> 수사기관·법원 명령은 강제력이 있어 플랫폼 거절을 우회할 수 있어요.',
      },
      {
        question: '게시 후 시간이 많이 지나면 신원확인이 어렵나요?',
        answer:
          '<strong>네, 통신사 IP·플랫폼 로그는 일정 기간 후 자동 삭제될 수 있습니다.</strong> 통상 3~12개월이 보존 기간이니 발견 즉시 보존 신청·고소를 진행하는 것이 안전해요.',
      },
      {
        question: '해외 SNS(트위터·인스타) 익명 계정도 확인 가능한가요?',
        answer:
          '<strong>국내 플랫폼보다 협조 한계가 있습니다.</strong> 다만 형사 고소 시 국제공조·MLAT 절차로 일부 사례에서 신원확인이 이루어진 사례가 있어요.',
      },
      {
        question: '본인을 특정 안 시키는 글도 명예훼손이 되나요?',
        answer:
          '<strong>제3자가 보고 누구인지 알 만하면 성립 검토 대상입니다.</strong> 소속·직업·외형 묘사 등으로 특정 가능하면 본인 입증과 함께 신원확인 청구를 진행할 수 있어요.',
      },
      {
        question: '신원확인까지 변호사 비용이 너무 들 것 같아요',
        answer:
          '<strong>KLAC(132)에서 명예훼손 신원확인 무료 상담이 가능합니다.</strong> 형사 고소 단계는 본인 직접 진행도 가능하고, 일정 소득 이하면 KLAC 소송구조 신청으로 비용 부담을 낮출 수 있어요.',
      },
    ],
    cta: { text: '삭제·합의·방어 포인트, AI로 먼저 점검하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 고소장 작성 가이드', href: '/guide/defamation/defamation-complaint-writing-guide' },
      { label: '온라인 명예훼손 형사 대응', href: '/guide/defamation/defamation-online-criminal-response' },
      { label: '온라인 후기 명예훼손 형사', href: '/guide/defamation/defamation-online-review-criminal' },
      { label: '명예훼손 게시글 삭제 요청', href: '/guide/defamation/defamation-deletion-request-platform' },
      { label: '단톡방 모욕·명예훼손 캡처', href: '/guide/defamation/defamation-group-chat-insult-capture' },
    ],
  },

  // ─── 4. jeonse / deposit-illegal-deduction-fight ───
  {
    domain: 'jeonse',
    slug: 'jeonse-deposit-illegal-deduction-fight',
    keyword: '보증금 도배 청소비 임의공제 다툼',
    questionKeyword: '집주인이 도배·청소비를 보증금에서 마음대로 떼고 돌려줬어요',
    ctaKeyword: '보증금 임의공제 부당공제 청구 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '보증금 도배·청소비 부당공제 다툼 4가지 기준 | 로앤가이드',
      description:
        '집주인이 보증금에서 도배·청소비를 임의 공제했다면 원상회복 의무 범위·통상 마모 기준 4가지를 확인하고 부당공제 회수 절차를 지금 정리하세요.',
    },
    intro:
      '<p>"3년 살았는데 도배비·청소비 명목으로 80만원이나 떼고 돌려줬어요. 정상 사용한 부분도 다 제 책임인가요?" 임차인의 원상회복 의무는 통상적인 사용·시간 경과로 인한 마모(통상 마모)를 제외합니다. 임대인이 임의로 공제한 금액은 통상 마모 범위인지 가려서 부당공제분을 청구할 수 있는 경우가 많습니다.</p>',
    sections: [
      {
        title: 'Q. 임차인의 원상회복 의무는 어디까지인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 통상 사용에 따른 마모는 임차인 책임이 아닙니다.</strong></p>\n<ul>\n<li><strong>주택임대차보호법·민법 제654조</strong> — 임차인은 임대차 종료 시 임차물을 원상회복해 반환할 의무가 있음. 다만 통상 사용에 따른 마모·노후화는 제외하는 것이 일반적 해석.</li>\n<li><strong>통상 마모(임차인 책임 X)</strong> — 벽지 자연 변색·바닥 가벼운 흠집·문턱 마모·시간 경과에 따른 노후화·기본 청소 수준의 먼지·생활자국.</li>\n<li><strong>특별 손상(임차인 책임 O)</strong> — 흡연으로 인한 변색·반려동물 긁힘·강한 충격으로 인한 파손·낙서·벽 구멍·고의·중과실 훼손.</li>\n<li><strong>장기 거주 감가상각</strong> — 벽지·장판은 통상 6~10년 사용 후 노후화로 보아 거주 기간이 길수록 임차인 부담이 줄어드는 경향.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 도배·청소비를 임의 공제당했다면 통상 마모 범위인지 사진·영상으로 입증해 부당공제분을 청구할 수 있는지 검토하세요.</blockquote>',
      },
      {
        title: 'Q. 부당공제 회수 절차는 어떻게 진행하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 내용증명 → 지급명령 또는 소송 → 강제집행 순서를 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>1단계 — 증거 정리</strong> — 입주 시점 사진·영상 + 퇴거 시점 사진·영상 + 임대인이 제시한 도배·청소 견적서·영수증 + 계약서.</li>\n<li><strong>2단계 — 내용증명</strong> — 부당공제 금액·근거·반환 기한(통상 2주) 명시. 미이행 시 법적 조치 예고.</li>\n<li><strong>3단계 — 지급명령 또는 소송</strong> — 3,000만원 이하면 소액사건심판(간편 절차). 지급명령은 1~2개월, 본안소송은 3~6개월 소요 예상.</li>\n<li><strong>4단계 — 강제집행</strong> — 판결·결정문 확정 후 임대인 재산(임대주택·예금·소득) 압류·추심.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">부당공제 회수 가능성과 절차를 AI가 단계별로 정리해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">부당공제 회수 AI 상담 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 부당공제 다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단(KLAC) 보증금 회수 절차를 참고하면 아래 순서로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 입주·퇴거 사진 비교 (즉시)</strong> — 입주 직후 + 퇴거 전 사진을 시간순으로 정리. 동일 위치·동일 각도 비교로 통상 마모 vs 특별 손상 구분.</li>\n<li><strong>2단계 — 임대인 견적서·영수증 확보</strong> — 공제 사유·금액 산정 근거 서면 요구. 견적서 없이 임의 공제는 부당공제 입증의 핵심 단서.</li>\n<li><strong>3단계 — 내용증명 발송 (퇴거 후 2주 내)</strong> — 부당공제 금액·근거·반환 기한 명시. 발송 시 우체국 내용증명 1통·본인 보관 1통·등기 발송.</li>\n<li><strong>4단계 — 소액사건심판 또는 지급명령</strong> — 3,000만원 이하 소액사건심판 활용. 지급명령은 1~2개월 소요, 임대인 이의 시 본안소송으로 이행.</li>\n<li><strong>5단계 — 강제집행 (판결 확정 후)</strong> — 임대인 부동산·예금·소득 압류·추심. 임대주택 자체에 강제집행 실행 가능.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 입주 시점 사진을 안 찍어두면 통상 마모 입증이 어려워집니다. 입주 첫날 모든 방·욕실·바닥·벽지를 동영상으로 한 번 더 찍어두는 것이 안전합니다.</blockquote>',
      },
      {
        title: '다툴 포인트 — 공제 항목별 기준',
        content:
          '<p><strong style="color:#1e3a5f">자주 분쟁이 되는 공제 항목별 기준을 미리 알아두세요.</strong></p>\n<ul>\n<li><strong>도배비</strong> — 거주 6~10년 후 자연 노후화는 임차인 책임 X. 흡연·반려동물·낙서 등 특별 손상은 임차인 부담 검토.</li>\n<li><strong>장판·바닥재</strong> — 일상 마모는 임차인 책임 X. 강한 충격·흠집·습기 관리 소홀로 인한 변형은 임차인 부담 검토.</li>\n<li><strong>청소비</strong> — 일상 사용 수준 청소는 임차인이 직접 하면 충분. 별도 청소비 공제는 합의 또는 특약이 없으면 부당공제 검토 가능.</li>\n<li><strong>도색·페인트</strong> — 자연 변색은 임차인 책임 X. 임의로 색을 바꾸거나 강한 흠집 발생 시 부담 검토.</li>\n<li><strong>가전·가구 손상</strong> — 임대인 제공 시설 자연 마모는 임차인 책임 X. 임차인 과실로 인한 파손은 부담 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 계약서 특약에 "원상회복 시 도배·청소 별도 부담" 같은 조항이 있으면 다툼 여지가 좁아집니다. 계약 체결 시 이런 특약을 거부하거나 범위를 명확히 하는 것이 중요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임대차보증금 공제와 임대인 의사표시',
        summary:
          '대법원 2024다302217 사건(대법원, 2025.03.27 선고)에서 법원은 임대차계약 종료 시 임대인의 보증금 반환의무는 임차인의 모든 채무를 공제한 나머지 금액에 한해 이행기에 도달한다고 보면서도, 임대인이 공제 사유와 금액에 대한 명확한 근거 없이 임의로 공제하는 것은 정당화되기 어렵다는 취지로 판시했습니다.',
        takeaway:
          '임대인이 공제 근거(견적서·영수증)를 제시하지 못하면 부당공제분을 임차인이 청구할 소지가 있어, 통상 마모와 특별 손상 입증 자료를 함께 정리해두는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '계약서에 청소비 부담 특약이 있어도 다툴 수 있나요?',
        answer:
          '<strong>특약 범위가 합리적이면 유효한 경우가 많습니다.</strong> 다만 통상 마모까지 임차인에 부담시키는 과도한 특약은 무효 검토 가능하니 변호사 상담을 통해 다툴 소지를 점검하세요.',
      },
      {
        question: '임대인이 견적서 없이 공제했어요. 어떻게 다투나요?',
        answer:
          '<strong>견적서·영수증 없는 공제는 부당공제로 다툴 소지가 큽니다.</strong> 내용증명으로 산정 근거를 요구하고, 미응답 시 지급명령·소송으로 회수 절차를 진행해보세요.',
      },
      {
        question: '입주 시점 사진을 못 찍어뒀어요',
        answer:
          '<strong>주변 동거인·이전 임차인 진술·이사업체 작성 점검표가 보조 증거가 됩니다.</strong> 가구 사진·생활 사진에 배경으로 찍힌 부분도 활용 가능하니 모두 모아두세요.',
      },
      {
        question: '소액사건심판은 변호사 없이 진행 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 3,000만원 이하 사건은 본인 직접 소송이 흔하며, 법원 안내·KLAC(132)·민원24 양식으로 신청서를 작성할 수 있어요.',
      },
      {
        question: '부당공제 회수 후 새 분쟁이 또 생길까요?',
        answer:
          '<strong>합의서·소송 결과를 서면으로 남기면 추후 분쟁 가능성이 줄어듭니다.</strong> 회수 시 "추후 추가 청구 없음" 조항을 합의서에 포함시켜두면 안전해요.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '집주인이 집을 팔았어요 보증금 반환', href: '/guide/jeonse/jeonse-landlord-sold-deposit' },
      { label: '계약 만료 1개월 전 통보 갱신 거절', href: '/guide/jeonse/jeonse-one-month-notice-renewal' },
      { label: '보증금 미반환 시 우선변제권', href: '/guide/jeonse/jeonse-deposit-not-returned-priority' },
      { label: '주택임대차 우선변제 청구 절차', href: '/guide/jeonse/jeonse-priority-payment-claim' },
      { label: '월세 공제 분쟁 방어', href: '/guide/jeonse/jeonse-rent-deduction-defense' },
    ],
  },

  // ─── 5. jeonse / tenant-substitute-payment-recovery ───
  {
    domain: 'jeonse',
    slug: 'jeonse-tenant-substitute-payment-recovery',
    keyword: '임차인 대위변제 보증금 회수',
    questionKeyword: '보증금 일부가 안 돌아오는데 대위변제로 회수할 수 있나요?',
    ctaKeyword: '보증금 미반환 대위변제 회수 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '보증금 미반환 대위변제 회수 5단계 절차 | 로앤가이드',
      description:
        '보증금 일부가 미반환됐다면 민법 제469조 대위변제·HUG 보증·압류·경매 5단계로 회수 절차를 정리할 수 있습니다. 지금 확인하세요.',
    },
    intro:
      '<p>"보증금 1억원 중 7천만원만 받고 나머지 3천이 안 돌아와요. 임대인은 돈이 없다는데 어떻게 회수할 수 있을지 막막합니다." 임대인이 자력으로 보증금을 못 돌려줄 때 임차인이 활용할 수 있는 경로는 민법 제469조 대위변제 구조 + HUG 보증보험 + 압류·경매까지 다층적입니다. 단계별로 검토해 가장 빠른 회수 경로를 설계하는 것이 핵심입니다.</p>',
    sections: [
      {
        title: '보증금 미반환 회수 5단계 절차',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단(KLAC) 보증금 회수 절차를 참고하면 아래 순서로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임차권등기명령 (이사 1~2개월 전)</strong> — 보증금 미반환 상태에서 이사를 가야 하면 임차권등기명령으로 대항력·우선변제권 유지. 신청 후 등기 완료까지 통상 4~8주.</li>\n<li><strong>2단계 — 내용증명 + 지급 청구</strong> — 미반환 금액·반환 기한(통상 2주)·미이행 시 법적 조치 예고. 임대인 자력 회복 시 가장 빠른 회수.</li>\n<li><strong>3단계 — HUG 보증보험 이행청구 (가입자만)</strong> — 계약 종료·해지 후 1개월 내 보증금 미반환 시 HUG에 사고통지·이행청구. 이행심사 약 2주 내 결정.</li>\n<li><strong>4단계 — 보증금반환소송 또는 지급명령</strong> — 미가입자는 본안소송·지급명령으로 집행권원 확보. 지급명령 1~2개월·본안소송 3~6개월 예상.</li>\n<li><strong>5단계 — 압류·경매</strong> — 판결 확정 후 임대주택·임대인 재산 압류 → 강제경매 신청 → 배당으로 회수. 우선변제권자로 배당 우선순위 확보.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">대위변제·HUG·압류·경매 회수 경로를 AI가 단계별로 정리해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">보증금 회수 AI 상담 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 민법 제469조 대위변제 활용',
        content:
          '<p><strong style="color:#1e3a5f">대위변제는 제3자가 채무자 대신 변제하고 구상권을 취득하는 구조입니다. 임차인이 직접 활용할 수 있는 사례가 있습니다.</strong></p>\n<ul>\n<li><strong>민법 제469조</strong> — 채무 변제는 제3자도 할 수 있으며, 변제한 자는 채무자에 대해 구상권을 취득. 변제할 정당한 이익이 있는 자는 채권자 의사와 무관하게 변제 가능.</li>\n<li><strong>임차인의 활용 사례</strong> — 임대인이 다른 채권자에게 부동산을 빼앗길 위기일 때 임차인이 그 채권을 대신 변제(대위변제)하고, 그 채권자 지위를 승계해 임대주택에 대한 권리를 확보하는 구조.</li>\n<li><strong>HUG 보증보험과의 차이</strong> — HUG가 임차인에게 먼저 보증금을 지급(대위변제)하고 임대인에게 구상하는 구조. 임차인은 보증료만 부담하면 빠른 회수가 가능.</li>\n<li><strong>실무 적용 시 주의</strong> — 대위변제는 법률 검토가 필수. 임대인 채무 구조·다른 채권자 우선순위·등기 상태를 함께 분석해야 안전.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 대위변제는 잘못 활용하면 오히려 채권 회수가 어려워질 수 있습니다. 무리한 대위변제 전에 변호사·KLAC(132) 상담으로 채무 구조를 점검하세요.</blockquote>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">대위변제·HUG·소송 단계별로 필요한 자료를 한꺼번에 준비하세요.</strong></p>\n<ul>\n<li><strong>임차권등기명령</strong> — 신청서 + 전세계약서(확정일자) + 주민등록등본(전입신고) + 건물등기부등본 + 계약 종료 증빙(내용증명·문자).</li>\n<li><strong>HUG 이행청구</strong> — 보증증서 + 사고통지서 + 이행청구서 + 임차권등기 완료 등기부등본 + 임대인 인적사항.</li>\n<li><strong>본안소송·지급명령</strong> — 소장 또는 지급명령 신청서 + 위 서류 + 미반환 금액 입증·임대인 답변 자료(있는 경우).</li>\n<li><strong>강제집행</strong> — 확정판결문(집행문 부여) + 송달증명·확정증명 + 임대인 재산조회 결과.</li>\n<li><strong>대위변제(법률 검토 후)</strong> — 임대인 채무 구조 분석 자료 + 다른 채권자 등기·우선순위 + 변제계약서·구상권 행사 통지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: HUG 가입자는 이행청구가 가장 빠른 회수 경로(약 2주)입니다. 가입 여부부터 확인한 뒤 미가입이면 임차권등기 + 소송 트랙으로 설계하세요.</blockquote>',
      },
      {
        title: '다툴 포인트 — 회수 경로 우선순위',
        content:
          '<p><strong style="color:#1e3a5f">상황별로 가장 빠른 회수 경로를 선택할 수 있습니다.</strong></p>\n<ul>\n<li><strong>HUG 보증보험 가입자</strong> — 이행청구 우선. 계약 종료·해지 후 1개월 내 사고통지 → 이행심사 약 2주 → 보증금 회수 후 HUG가 임대인에게 구상.</li>\n<li><strong>미가입자 + 임대인 자력 있음</strong> — 내용증명 + 지급명령(1~2개월). 임대인이 응답하면 가장 빠른 회수.</li>\n<li><strong>미가입자 + 임대인 자력 부족</strong> — 본안소송 + 임대주택 강제경매. 우선변제권으로 배당 우선순위 확보. 6개월~1년 소요 가능.</li>\n<li><strong>임대인 도산·파산 절차 진행 중</strong> — 회생·파산 채권자 신고 + 임대주택 별제권 행사 검토. 변호사 필수.</li>\n<li><strong>대위변제 활용</strong> — 임대인 다른 채권자 우선순위가 본인보다 앞설 때 그 채권을 대신 변제하고 권리 승계. 법률 검토 필수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "전세보증금은 무조건 돌려받는다"는 단정은 위험합니다. 임대인 자력·다른 채권자·우선순위에 따라 회수율이 달라지는 사례가 있어 단계별로 검토할 수 있는 경로를 점검하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차권 대항력의 점유 요건과 임차권등기 효과',
        summary:
          '대법원 2025다213466 사건(대법원, 2026.01.08 선고)에서 법원은 주택 임차인이 전입신고·인도로 대항력을 취득했더라도 점유를 상실하면 대항력이 소멸한다는 원칙을 재확인하면서, 임차권등기명령에 따른 등기를 마친 경우에는 점유 상실에도 대항력·우선변제권이 유지된다는 점을 확인했습니다.',
        takeaway:
          '보증금 미반환 회수 절차에서 임차권등기명령이 가장 기본적인 안전장치이며, 등기 없이 이사하면 회수율이 크게 떨어질 위험이 있어 우선 검토 대상입니다.',
      },
    ],
    faq: [
      {
        question: 'HUG 보증보험에 가입돼 있는데 어디부터 시작하나요?',
        answer:
          '<strong>HUG 콜센터(1566-9009) 상담 → 사고통지 → 이행청구 순입니다.</strong> 계약 종료·해지 후 1개월 내 사고통지 의무이니 즉시 진행하는 것이 안전해요.',
      },
      {
        question: '임대인이 잠적했어요. 소송이 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 공시송달로 소장을 송달할 수 있고, 임대인 재산조회·재산명시 신청으로 강제집행 대상을 찾을 수 있어요.',
      },
      {
        question: '대위변제는 임차인이 직접 할 수 있나요?',
        answer:
          '<strong>법률상 가능하지만 변호사 검토가 필수입니다.</strong> 잘못 활용하면 오히려 채권 회수가 더 어려워질 수 있어 KLAC(132)·전세사기피해지원센터(1533-8119) 상담을 거치세요.',
      },
      {
        question: '강제경매를 신청하면 본인 보증금이 우선 배당되나요?',
        answer:
          '<strong>대항력·확정일자·임차권등기를 갖췄으면 우선변제권자로 배당받을 수 있습니다.</strong> 다만 선순위 근저당·세금 우선순위가 있으면 회수액이 줄어들 수 있어요.',
      },
      {
        question: '회수까지 변호사 비용이 크게 들 것 같아요',
        answer:
          '<strong>일정 소득 이하면 KLAC 소송구조 신청으로 무료·저비용 변호 가능합니다.</strong> 전세사기피해지원센터(1533-8119)도 무료 상담·법률지원 연결을 제공해요.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '집주인이 집을 팔았어요 보증금 반환', href: '/guide/jeonse/jeonse-landlord-sold-deposit' },
      { label: '계약 만료 1개월 전 통보 갱신 거절', href: '/guide/jeonse/jeonse-one-month-notice-renewal' },
      { label: '보증금 미반환 시 우선변제권', href: '/guide/jeonse/jeonse-deposit-not-returned-priority' },
      { label: '주택임대차 우선변제 청구 절차', href: '/guide/jeonse/jeonse-priority-payment-claim' },
      { label: '월세 공제 분쟁 방어', href: '/guide/jeonse/jeonse-rent-deduction-defense' },
    ],
  },
];
