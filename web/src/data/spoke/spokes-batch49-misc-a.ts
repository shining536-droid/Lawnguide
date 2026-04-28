import { SpokePage } from '../spoke-pages';

// batch49 misc-a 6개 (defamation 3 + jeonse 2 + child-support 1)
//
// 고유 존재 이유:
// 1. 이 페이지는 단톡방·메신저에서 욕설을 캡처한 직장인이 모욕죄(형법 311조)와 명예훼손죄(형법 307조)를 공연성 기준으로 구분해 적정한 형사 절차를 선택하도록 돕는 페이지다.
// 2. 이 페이지는 인터넷 댓글로 명예훼손 피해를 입은 피해자가 정보통신망법 제70조 가중처벌 조항과 형법 제307조 일반 명예훼손의 차이를 비교해 어느 죄로 고소해야 유리한지 판단하도록 돕는 페이지다.
// 3. 이 페이지는 익명 게시판에 본인을 대상으로 한 허위·비방 글이 올라온 피해자가 IP 추적·작성자 신원 특정·고소까지의 5단계 절차를 정리해 진행하도록 돕는 페이지다.
// 4. 이 페이지는 전세 만기를 앞두고 묵시적 갱신을 막아야 하는 임차인이 주임법 제6조의 1개월 전 해지 통보 요건과 갱신요구권 행사 시점을 정리하도록 돕는 페이지다.
// 5. 이 페이지는 임대인이 주택을 매도해 양수인이 새 임대인이 된 임차인이 주임법 제3조 제4항 양수인 승계 책임 판례를 통해 보증금 반환 청구 상대방을 명확히 판단하도록 돕는 페이지다.
// 6. 이 페이지는 양육비 미지급 상태인 양육자가 가소법 제64조·제68조 이행명령·감치와 압류·추심 강제집행을 단계별로 진행하도록 돕는 페이지다.

export const spokesBatch49MiscA: SpokePage[] = [
  // ─── 1. defamation / defamation-group-chat-insult-evidence ───
  {
    domain: 'defamation',
    slug: 'defamation-group-chat-insult-evidence',
    keyword: '단톡방 욕설 명예훼손 모욕죄 성립',
    questionKeyword: '단톡방에서 욕설을 들었는데 명예훼손인가요 모욕죄인가요?',
    ctaKeyword: '단톡방 욕설 모욕·명예훼손 성립 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '단톡방 욕설 캡처 — 명예훼손 vs 모욕죄 성립 기준 정리 | 로앤가이드',
      description:
        '단톡방·메신저에서 욕설을 들었다면 형법 제311조 모욕죄와 제307조 명예훼손 성립 5가지 기준을 지금 확인하세요.',
    },
    intro:
      '<p>"단톡방에서 제 이름을 거명하면서 욕을 했는데 캡처는 있어요. 모욕죄로 가야 할지 명예훼손으로 가야 할지 헷갈립니다." 단톡방 욕설은 모욕죄와 명예훼손죄가 동시에 검토될 수 있고, 어느 죄로 가느냐에 따라 친고죄·공소시효·합의 효과가 달라집니다. 발언 내용·공연성·사실 적시 여부 세 축으로 정리하면 적정한 절차를 선택할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 단톡방 욕설은 모욕죄인가요 명예훼손인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. "사실 적시"가 있는지 여부가 1차 갈림길입니다.</strong></p>\n<ul>\n<li><strong>모욕죄(형법 제311조)</strong> — 사실을 적시하지 않고 단순 인격 비하·욕설로 사회적 평가 저하. "멍청이", "쓰레기", "또라이". 1년 이하 징역·200만원 이하 벌금. 친고죄(피해자 고소 필수, 6개월 내).</li>\n<li><strong>명예훼손죄(형법 제307조)</strong> — 구체적 사실 적시로 사회적 평가 저하. "○○씨가 회삿돈 횡령했다"처럼 검증 가능한 사실. 사실 적시 2년 이하·허위 5년 이하. 사실적시는 반의사불벌죄, 허위는 친고·반의사불벌 모두 아님.</li>\n<li><strong>병합 검토 가능</strong> — 같은 발언에 욕설+허위 사실이 함께 있으면 두 죄 모두 검토할 수 있습니다.</li>\n<li><strong>고소 기간</strong> — 모욕죄·사실적시 명예훼손은 6개월 내 고소가 원칙입니다. 캡처 후 즉시 절차 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 욕설만이라면 모욕죄, 사실 적시가 섞이면 명예훼손까지 검토할 수 있습니다. 두 죄 모두 검토 후 유리한 절차를 선택하세요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 캡처 보존 + 형사 고소 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단(KLAC) 형사 고소 절차를 참고하면 아래 순서로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 캡처 보존 (즉시)</strong> — 단톡방 메시지 캡처(시간·발신자·내용 모두 보이게), 카카오톡 대화 내보내기 기능으로 텍스트 백업, 동참자 명단 확보. 단톡방 나가기 전 백업이 필수.</li>\n<li><strong>2단계 — 발언 분류 (24시간 내)</strong> — 발언을 문장 단위로 나눠 욕설(모욕)/사실 적시(명예훼손)/추측·의견(처벌 어려움)으로 분류.</li>\n<li><strong>3단계 — 무료 상담 (KLAC 132)</strong> — 모욕·명예훼손 두 죄 중 어느 것으로 가는 것이 유리한지, 정통망법 적용 여부 검토.</li>\n<li><strong>4단계 — 형사 고소장 제출 (6개월 내)</strong> — 관할 경찰서에 고소장 + 캡처 + 동참자 진술서. 친고죄·반의사불벌죄 안내받기.</li>\n<li><strong>5단계 — 민사 손해배상 청구</strong> — 형사 결과와 별개로 민법 제750조 불법행위 위자료 청구를 함께 검토할 수 있습니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 단톡방 욕설 상황, AI로 먼저 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">모욕·명예훼손 성립 여부와 적정 절차를 AI가 분석해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">단톡방 욕설 AI 상담 →</a>\n</div>',
      },
      {
        title: '준비서류 — 형사 고소 + 진술 자료',
        content:
          '<p><strong style="color:#1e3a5f">고소장 접수와 경찰 조사에 필요한 자료를 사전에 정리해두세요.</strong></p>\n<ul>\n<li><strong>고소인 본인 자료</strong> — 신분증·주민등록등본(주소 확인용) + 인감증명서(필요 시).</li>\n<li><strong>발언 입증 자료</strong> — 단톡방 캡처(원본 출력 + 시간·발신자 표시) + 카카오톡 대화 내보내기 텍스트 파일 + 메시지 백업 USB·CD.</li>\n<li><strong>공연성 입증</strong> — 단톡방 참여자 명단(직책·소속) + 동참자 진술서(가능 시) + 부서 조직도 등.</li>\n<li><strong>피해 입증</strong> — 정신과 상담 기록·진단서·휴직 기록·상담일지 등 (위자료 청구 시 활용).</li>\n<li><strong>가해자 인적사항</strong> — 가해자 이름·소속·직책. 본명을 모르면 닉네임·전화번호로 시작 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 카카오톡 대화 내보내기 기능으로 받은 .txt 파일은 발언 시각이 표시되어 캡처보다 강한 증거가 될 수 있습니다. 캡처와 함께 제출하세요.</blockquote>',
      },
      {
        title: '⚠️ 흔한 실수 — 단톡방 즉시 탈퇴와 추가 도발',
        content:
          '<p><strong style="color:#1e3a5f">캡처·증거 확보 전에 흥분해서 행동하면 증거가 사라지거나 새 분쟁이 생길 수 있습니다.</strong></p>\n<ul>\n<li><strong>단톡방 즉시 탈퇴</strong> — 백업 없이 나가면 추가 메시지를 확보할 수 없고, 탈퇴 후 본인이 빠진 상태에서 가해자가 변명·왜곡할 위험. 캡처 + 대화 내보내기 + 동참자 캡처 협조까지 마친 뒤 탈퇴 검토.</li>\n<li><strong>가해자에게 직접 항의</strong> — "고소하겠다"·"두고 보자" 같은 발언은 협박죄로 역고소 위험. 변호인·KLAC을 통해 정식 절차로 진행.</li>\n<li><strong>SNS·외부에 공개</strong> — 가해자 실명·소속을 SNS에 공개하면 본인이 명예훼손 가해자가 될 수 있습니다. 절차 진행 중에는 외부 공개 자제.</li>\n<li><strong>합의 단정 금지</strong> — 합의금 사례별 차이가 크며 발언 강도·전파 범위·정신적 피해에 따라 수십만원~수백만원 수준이 자주 보입니다. 단정형 표현 회피.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 친고죄(모욕죄)는 6개월 고소 기간이 매우 짧습니다. 캡처 시점부터 6개월 카운트가 시작되니 망설이지 말고 KLAC 무료 상담부터 시작하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 명예훼손죄의 공연성과 전파가능성 이론',
        summary:
          '대법원 2020도5813 사건(대법원, 2020.11.19 선고)에서 법원은 명예훼손죄의 공연성에 관해 확립된 ‘전파가능성 이론’을 유지한다고 판시했습니다. 한 사람에게 사실을 유포했더라도 그 상대방이 불특정 또는 다수인에게 전파할 가능성이 객관적으로 인정되면 공연성 요건을 충족합니다.',
        takeaway:
          '단톡방에 5~10명이 참여하고 있더라도 그 참여자들이 다른 동료에게 전파할 가능성이 인정되면 공연성이 성립할 수 있어, 부서 단톡방 욕설도 명예훼손·모욕 절차로 다툴 소지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '욕설만 있고 사실 적시가 없으면 어떻게 되나요?',
        answer:
          '<strong>모욕죄로 검토할 수 있습니다.</strong> 모욕죄는 친고죄라 6개월 내 고소가 원칙이고, 캡처 + 단톡방 참여자 명단으로 공연성을 입증하면 성립 가능성이 있어요.',
      },
      {
        question: '1:1 메시지로 욕한 경우도 처벌 가능한가요?',
        answer:
          '<strong>1:1은 공연성이 부족해 명예훼손·모욕 성립이 어렵습니다.</strong> 다만 협박·통신매체이용음란 등 다른 죄가 검토될 수 있고, 수신자가 제3자에게 전달했다면 새 책임이 발생할 수 있어요.',
      },
      {
        question: '단톡방을 이미 나갔는데 캡처가 없어요',
        answer:
          '<strong>다른 참여자에게 캡처 협조를 요청해보세요.</strong> 동료 진술서도 증거가 될 수 있고, 카카오톡 본사 보존 자료는 법원 명령으로 일부 회수가 가능한 사례가 있어요.',
      },
      {
        question: '회사 단톡방 욕설은 직장 내 괴롭힘으로도 신고 가능한가요?',
        answer:
          '<strong>근로기준법 제76조의2 직장 내 괴롭힘 신고가 가능합니다.</strong> 회사 내부 절차 + 외부 형사 고소를 병행하면 회사가 적극 조치할 가능성이 높아져요.',
      },
      {
        question: '합의금은 어느 정도 수준에서 결정되는 사례가 많나요?',
        answer:
          '<strong>사례별 차이가 크지만 수십만원~수백만원 수준이 자주 보입니다.</strong> 발언 강도·전파 범위·정신적 피해 정도에 따라 협상으로 결정되는 사례가 일반적이에요.',
      },
    ],
    cta: { text: '단톡방 욕설 상황, AI로 먼저 점검하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '회사 단톡방 욕설 모욕 vs 명예훼손 5가지 구분', href: '/guide/defamation/defamation-company-chat-insult-vs-defamation' },
      { label: '인터넷 댓글 명예훼손 정통망법 vs 형법 비교', href: '/guide/defamation/defamation-online-comment-information-network-act' },
      { label: '익명 게시판 명예훼손 IP 추적 절차', href: '/guide/defamation/defamation-anonymous-board-ip-tracking' },
      { label: '거짓 후기 명예훼손 혐의 대응', href: '/guide/defamation/defamation-false-review-perpetrator-defense' },
      { label: '네이버카페 익명 ID 신원공개 청구', href: '/guide/defamation/defamation-cafe-id-disclosure-request' },
    ],
  },

  // ─── 2. defamation / defamation-online-comment-information-network-act ───
  {
    domain: 'defamation',
    slug: 'defamation-online-comment-information-network-act',
    keyword: '인터넷 댓글 명예훼손 정통망법 형법 비교',
    questionKeyword: '인터넷 댓글로 명예훼손당했어요. 정통망법으로 가야 하나요 형법으로 가야 하나요?',
    ctaKeyword: '인터넷 댓글 명예훼손 정통망법 형법 비교',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '인터넷 댓글 명예훼손 — 정통망법 vs 형법 처벌 비교 | 로앤가이드',
      description:
        '인터넷 댓글·게시글로 명예훼손 피해를 입었다면 정통망법 제70조와 형법 제307조 처벌 차이 5가지를 지금 확인하세요.',
    },
    intro:
      '<p>"포털 뉴스 댓글에 제 이름을 적시한 허위 글이 올라왔어요. 형법 명예훼손과 정통망법 명예훼손 중 어느 죄로 고소해야 유리한지 모르겠습니다." 인터넷 매체를 통한 명예훼손은 정통망법 제70조가 우선 적용되며 형법 제307조보다 처벌이 무거운 경향입니다. 비방 목적·매체 특수성·반의사불벌 여부 세 축으로 비교해야 절차 선택이 정확해집니다.</p>',
    sections: [
      {
        title: '정통망법 제70조 vs 형법 제307조 — 5가지 차이',
        content:
          '<p><strong style="color:#1e3a5f">두 조문은 매체·요건·처벌 수위가 모두 다릅니다.</strong></p>\n<ul>\n<li><strong>① 매체 — </strong>정통망법은 정보통신망(인터넷·SNS·메신저·앱) 한정. 형법은 모든 매체(말·종이 포함).</li>\n<li><strong>② 요건 — </strong>정통망법은 "비방 목적"이 별도 구성요건. 형법은 비방 목적 불요.</li>\n<li><strong>③ 처벌 — </strong>정통망법 사실적시 3년·1천만원, 허위 7년·5천만원. 형법 사실적시 2년·5백만원, 허위 5년·1천만원. 정통망법이 가중처벌.</li>\n<li><strong>④ 친고·반의사불벌 — </strong>정통망법은 반의사불벌죄(피해자 처벌의사 없으면 처벌 X). 형법 사실적시 명예훼손도 반의사불벌. 형법 허위 명예훼손은 친고·반의사불벌 모두 아님.</li>\n<li><strong>⑤ 공소시효 — </strong>정통망법 사실적시 5년·허위 7년. 형법 사실적시 5년·허위 7년. 시효는 비슷하나 적용 우선순위는 정통망법.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 인터넷 댓글은 정통망법이 1차 적용되며, 비방 목적이 인정되면 형법보다 1.5~2배 무거운 처벌이 검토될 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 인터넷 댓글 고소 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단(KLAC) 사이버 명예훼손 절차를 참고하면 아래 순서로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보존 (즉시)</strong> — 댓글 URL·캡처(시간·작성자 ID 포함)·페이지 전체 PDF 저장. 댓글이 삭제되기 전 신속히 확보. 화면녹화도 권장.</li>\n<li><strong>2단계 — 임시조치 신청 (1~2주 내)</strong> — 정통망법 제44조의2에 따라 플랫폼에 게시글 임시조치(블라인드) 요청. 신청 후 통상 24시간~7일 내 조치.</li>\n<li><strong>3단계 — 형사 고소장 제출 (5년 내)</strong> — 관할 경찰서 사이버수사대 또는 경찰청 사이버범죄 신고시스템(ECRM, ecrm.police.go.kr). 정통망법 + 형법 동시 적용 청구.</li>\n<li><strong>4단계 — 작성자 신원 확인 — </strong>경찰이 플랫폼·통신사에 IP·계정 정보 영장 청구. 익명 작성자도 IP 추적으로 특정 가능.</li>\n<li><strong>5단계 — 민사 손해배상 청구 — </strong>형사 결과와 별개로 민법 제750조 불법행위 위자료 청구를 함께 검토할 수 있습니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">정통망법·형법 중 어느 절차가 유리한지 AI가 단계별로 분석해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">인터넷 댓글 명예훼손 AI 상담 →</a>\n</div>',
      },
      {
        title: '준비서류 — 사이버 고소 자료 정리',
        content:
          '<p><strong style="color:#1e3a5f">사이버 명예훼손은 디지털 증거가 핵심이라 형식 요건이 까다롭습니다.</strong></p>\n<ul>\n<li><strong>본인 신원 자료</strong> — 신분증·주민등록등본 + 명함·재직증명서(피해자 사회적 평가가 있는 인물임을 입증).</li>\n<li><strong>댓글·게시글 증거</strong> — URL + 캡처(작성 시간·작성자 ID·전체 페이지 표시) + PDF 저장 + 화면녹화 + 페이지 소스 보기.</li>\n<li><strong>해시값 산출(권장)</strong> — 캡처·녹화 파일의 해시값(SHA256)을 미리 산출해두면 위변조 방지 입증에 유리.</li>\n<li><strong>피해 입증</strong> — 정신과 상담 기록·휴직 기록 + 가족·동료 진술서 + 사회적 평가 저하 입증 자료(SNS 반응 등).</li>\n<li><strong>플랫폼 정보</strong> — 작성자 닉네임·아이디·게시판명·게시 시각.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 캡처는 단순 이미지보다 화면녹화 + URL 표시 영상이 위변조 의혹을 차단합니다. 가능하면 두 형식 모두 확보해 제출하세요.</blockquote>',
      },
      {
        title: '⚠️ 흔한 실수 — 비방 목적과 공익성의 갈림길',
        content:
          '<p><strong style="color:#1e3a5f">정통망법 제70조의 "비방 목적"은 공익성이 인정되면 부정될 수 있어, 가해자의 항변 가능성을 미리 알아두세요.</strong></p>\n<ul>\n<li><strong>비방 목적 vs 공공의 이익</strong> — 댓글 내용이 다수 소비자의 알 권리·선택권에 기여하면 공익성이 인정될 수 있고, 그러면 비방 목적이 부정돼 무죄·불기소 가능성이 있습니다.</li>\n<li><strong>표현 방식 검토</strong> — 같은 사실이라도 인격 비하·욕설 형태면 비방 목적이 인정될 가능성이 큽니다. 가해자 댓글의 표현 방식을 분석해두세요.</li>\n<li><strong>피해자 공인 여부</strong> — 정치인·연예인 등 공인은 비판 보호 범위가 넓어 비방 목적이 부정되는 경우가 많습니다.</li>\n<li><strong>댓글 즉시 삭제 요구</strong> — 가해자에게 직접 삭제·사과를 요구하면 협박 역고소 위험. 임시조치 신청은 플랫폼·KLAC을 통해.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 댓글 캡처 후 가해자에게 직접 항의 메시지를 보내면 협박·위협으로 역고소당할 수 있습니다. 모든 접촉은 KLAC(132) 또는 변호인을 통해 진행하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정통망법상 비방 목적과 공공의 이익 판단 기준',
        summary:
          '대법원 2018도15868 사건(대법원, 2020.03.02 선고)에서 법원은 정보통신망법 제70조 제1항의 "사람을 비방할 목적"의 의미와 판단 기준을 정리하면서, 적시한 사실이 "공공의 이익"에 관한 것인지 판단할 때는 표현의 자유와 명예 보호의 균형을 고려해 행위자의 주요 동기·목적·표현 내용·사회적 가치를 종합 검토해야 한다고 판시했습니다.',
        takeaway:
          '인터넷 댓글 명예훼손 사건에서 가해자가 "공익성" 항변을 시도할 가능성이 큰 만큼, 댓글의 표현 방식·인격 비하 정도·작성 동기를 입증해 비방 목적을 명확히 부각하는 자료 정리가 중요합니다.',
      },
    ],
    faq: [
      {
        question: '댓글이 삭제됐는데 어떻게 증거를 확보하나요?',
        answer:
          '<strong>플랫폼·웨이백머신·구글 캐시·다른 사용자 캡처를 우선 확인하세요.</strong> 경찰 조사 단계에서 플랫폼 측 보존 자료를 영장으로 회수할 수 있는 사례도 있어요.',
      },
      {
        question: '익명·외국 IP로 작성된 경우도 추적 가능한가요?',
        answer:
          '<strong>국내 플랫폼이면 IP·계정 정보 영장 회수가 가능합니다.</strong> 외국 IP·외국 플랫폼은 협조가 어려워 정통망법 적용에도 한계가 있을 수 있어요.',
      },
      {
        question: '정통망법과 형법 어느 죄로 고소해야 유리한가요?',
        answer:
          '<strong>인터넷 매체면 정통망법이 우선 적용되며 처벌도 무겁습니다.</strong> 다만 비방 목적 입증이 핵심이라 캡처·표현 방식 분석을 충실히 준비하는 것이 중요해요.',
      },
      {
        question: '댓글 임시조치(블라인드)와 형사 고소 중 어느 게 먼저인가요?',
        answer:
          '<strong>임시조치를 먼저 신청해 추가 확산을 막은 뒤 고소 절차를 진행하는 것이 일반적입니다.</strong> 두 절차는 별개라 동시 진행도 가능해요.',
      },
      {
        question: '합의로 처벌 면제가 가능한가요?',
        answer:
          '<strong>정통망법은 반의사불벌죄라 피해자가 처벌 의사를 철회하면 처벌이 면제됩니다.</strong> 다만 합의금·삭제·재게시 금지 조건을 합의서에 명확히 기재하세요.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '단톡방 욕설 명예훼손 vs 모욕죄 성립 기준', href: '/guide/defamation/defamation-group-chat-insult-evidence' },
      { label: '익명 게시판 명예훼손 IP 추적 절차', href: '/guide/defamation/defamation-anonymous-board-ip-tracking' },
      { label: '회사 단톡방 욕설 모욕 vs 명예훼손 5가지 구분', href: '/guide/defamation/defamation-company-chat-insult-vs-defamation' },
      { label: '거짓 후기 명예훼손 혐의 대응', href: '/guide/defamation/defamation-false-review-perpetrator-defense' },
      { label: '네이버카페 익명 ID 신원공개 청구', href: '/guide/defamation/defamation-cafe-id-disclosure-request' },
    ],
  },

  // ─── 3. defamation / defamation-anonymous-board-ip-tracking ───
  {
    domain: 'defamation',
    slug: 'defamation-anonymous-board-ip-tracking',
    keyword: '익명 게시판 명예훼손 IP 추적 고소',
    questionKeyword: '익명 게시판에 제 욕이 올라왔는데 작성자를 어떻게 찾나요?',
    ctaKeyword: '익명 게시판 명예훼손 IP 추적 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '익명 게시판 명예훼손 — IP 추적·고소 절차 5단계 | 로앤가이드',
      description:
        '익명 게시판에 본인 명예훼손 글이 올라왔다면 KISA·법원 영장으로 IP 추적해 작성자를 특정하는 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"디시인사이드·블라인드 같은 익명 게시판에 저를 비방하는 글이 올라왔는데 작성자를 어떻게 찾을지 막막해요." 익명 게시판도 형사 고소 → 경찰 영장 → 플랫폼 IP 회수 → 통신사 가입자 조회 단계를 거치면 작성자 신원을 특정할 수 있는 사례가 있습니다. 핵심은 캡처 시점부터 5단계를 빠르게 진행해 게시글이 삭제되거나 IP 로그가 소멸하기 전에 자료를 확보하는 것입니다.</p>',
    sections: [
      {
        title: '익명 게시판 IP 추적 5단계 절차',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단(KLAC)·경찰청 사이버수사대 절차를 참고하면 아래 5단계로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보존 (즉시)</strong> — 게시글 URL + 캡처(시간·닉네임·내용 표시) + PDF 저장 + 페이지 소스 보기 + 화면녹화. 게시글이 삭제되기 전 확보가 핵심.</li>\n<li><strong>2단계 — 임시조치 신청 (1주 내)</strong> — 정통망법 제44조의2에 따라 플랫폼에 게시글 블라인드·삭제 요청. 거부 시 방송통신심의위원회(02-3219-5000) 통신심의.</li>\n<li><strong>3단계 — 형사 고소 (6개월~5년 내)</strong> — 관할 경찰서 사이버수사대 또는 ECRM(ecrm.police.go.kr) 신고. 정통망법 제70조 + 형법 제307조 동시 적용.</li>\n<li><strong>4단계 — 경찰 영장으로 IP 회수</strong> — 경찰이 압수수색영장으로 플랫폼 운영사에 작성자 IP·계정 정보 회수. 통상 영장 청구~회수까지 2~6주.</li>\n<li><strong>5단계 — 통신사 가입자 조회</strong> — 회수한 IP를 근거로 통신사(KT·SKT·LGU+)에 가입자 신원 조회. 작성자 신원 특정 후 정식 입건·조사.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 익명 게시판 IP 추적 절차, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">증거 보존부터 작성자 특정까지 단계별 절차를 AI가 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">익명 게시판 명예훼손 AI 상담 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — IP 로그 보존 기간 점검',
        content:
          '<p><strong style="color:#1e3a5f">IP 로그는 무한 보관되지 않으므로 시기가 중요합니다.</strong></p>\n<ul>\n<li><strong>플랫폼 IP 로그 보존 기간</strong> — 통신비밀보호법 시행령에 따라 통상 3개월~1년. 일부 플랫폼은 더 길게 보관하나 명확히 보장되지 않음.</li>\n<li><strong>통신사 가입자 정보 — </strong>유동 IP는 통상 1년 이내 회수 가능. 사후 회수가 어려우니 신속한 영장 청구 필요.</li>\n<li><strong>VPN·해외 서버 — </strong>VPN을 거친 경우 추적 단절 가능성. 다만 결제 정보·로그인 패턴으로 우회 특정 가능한 사례가 있음.</li>\n<li><strong>외국 플랫폼 — </strong>인스타·X·페이스북 등은 미국 본사에 영장 협조 요청 절차 필요. 통상 6개월 이상 소요.</li>\n<li><strong>한국인터넷진흥원(KISA) 협조 — </strong>118 콜센터, 사이버범죄 신고 협조 안내 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 게시글을 발견하고 며칠~몇 주 망설이다 고소하면 IP 로그가 소멸할 수 있습니다. 캡처 직후 24시간 내 ECRM 신고 또는 경찰 사이버수사대 방문이 안전합니다.</blockquote>',
      },
      {
        title: '준비서류 — 익명 게시판 사이버 고소 자료',
        content:
          '<p><strong style="color:#1e3a5f">증거 형식 요건이 까다로우므로 처음부터 체계적으로 준비하세요.</strong></p>\n<ul>\n<li><strong>본인 신원 자료</strong> — 신분증·주민등록등본 + 본인이 게시글 대상자임을 입증할 자료(이름·소속·사진 일치).</li>\n<li><strong>게시글 증거</strong> — 게시글 URL + 캡처(전체 페이지·시간·닉네임·작성 시점) + PDF + 페이지 소스 + 화면녹화.</li>\n<li><strong>해시값(SHA256)</strong> — 캡처·녹화 파일의 해시값을 산출해 위변조 방지. 일부 변호인은 공증을 권유.</li>\n<li><strong>플랫폼 정보</strong> — 게시판명·서비스 운영사·작성자 닉네임·게시 시각·조회수·댓글 수.</li>\n<li><strong>피해 입증</strong> — 진단서·상담 기록 + 사회적 평가 저하 자료(직장 동료·지인 진술서, 게시글 확산 흔적).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 디지털 증거 위변조 의혹을 차단하려면 캡처 + 화면녹화 + 페이지 소스 + PDF 4종을 모두 확보해 일관성을 보여주세요.</blockquote>',
      },
      {
        title: '⚠️ 흔한 실수 — 직접 추적·신상 공개 위험',
        content:
          '<p><strong style="color:#1e3a5f">감정이 격해도 직접 행동하면 본인이 가해자가 될 수 있습니다.</strong></p>\n<ul>\n<li><strong>직접 IP 추적 시도</strong> — 해킹·접속 로그 무단 회수는 정보통신망법 위반. 절대 직접 추적 시도 금지.</li>\n<li><strong>댓글로 가해자 도발</strong> — 같은 게시판에 가해자를 자극하는 댓글을 달면 명예훼손·모욕 역고소 위험.</li>\n<li><strong>SNS에 의심 인물 공개</strong> — "○○가 작성자 같다"·"의심된다" 같은 글은 본인이 명예훼손 가해자가 될 수 있습니다.</li>\n<li><strong>플랫폼 운영사에 직접 신상 요구</strong> — 플랫폼은 법원·경찰 영장 없이 개인정보 제공 불가. 정식 형사 고소 절차로만 진행.</li>\n<li><strong>합의금 단정 금지</strong> — 사례별 차이가 크며, 게시글 전파 범위·기간·악의성에 따라 수십만원~수백만원 수준이 자주 보입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "이 사람이 분명하다"고 추측되는 사람을 SNS에 공개하면 본인이 명예훼손·모욕 가해자가 됩니다. 의심만으로 외부 발설은 절대 금지하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 인터넷 ID만 있고 작성자를 추지할 자료가 없는 경우',
        summary:
          '의정부지법 2014고정1619 사건(의정부지법, 2014.10.23 선고)에서 법원은 인터넷 아이디(ID)만 알 수 있을 뿐 그 아이디를 가진 사람이 누구인지 추지할 자료가 없는 피해자에 대해 허위사실을 적시한 경우, 사회적 평가 저하의 대상이 되는 "특정인"이라고 보기 어려워 명예훼손죄가 성립하기 어렵다고 판시했습니다.',
        takeaway:
          '익명 게시판 명예훼손도 피해자가 누구인지 다른 사람들이 알 수 있는 정도의 단서(이름·소속·사진·구체적 정황)가 게시글에 있어야 성립이 인정될 수 있어, 캡처와 함께 본인 특정 가능성을 입증하는 자료를 함께 준비하세요.',
      },
    ],
    faq: [
      {
        question: 'IP 추적해도 가입자 명의가 다른 사람이면 어떻게 되나요?',
        answer:
          '<strong>가족·지인 명의 IP일 가능성이 있어 추가 조사가 필요합니다.</strong> 경찰이 통신사 정보 + 접속 시간대·기기 패턴 분석으로 실사용자를 좁혀나가는 사례가 있어요.',
      },
      {
        question: '오래된 게시글도 추적 가능한가요?',
        answer:
          '<strong>IP 로그 보존 기간(통상 3개월~1년)이 지나면 추적이 어렵습니다.</strong> 다만 플랫폼이 자체적으로 더 보관하는 사례도 있으니 일단 형사 고소를 시도하는 것이 좋아요.',
      },
      {
        question: 'VPN으로 우회한 작성자도 잡을 수 있나요?',
        answer:
          '<strong>VPN은 추적이 까다롭지만 불가능하지는 않습니다.</strong> 결제 정보·로그인 패턴·다른 게시글 행적으로 우회 특정되는 사례가 있어 사이버수사대 협조가 중요해요.',
      },
      {
        question: '해외 플랫폼(트위터·인스타) 작성자도 추적 가능한가요?',
        answer:
          '<strong>가능하지만 시간이 오래 걸립니다.</strong> 미국 본사 영장 협조 + 법무부 국제공조 절차로 통상 6개월 이상이며, 협조 거부 사례도 있어요.',
      },
      {
        question: '추적 비용은 누가 부담하나요?',
        answer:
          '<strong>형사 절차는 경찰·검찰이 진행하므로 본인 비용은 들지 않습니다.</strong> 다만 변호사 선임 시 별도 비용이 발생하며, KLAC(132)에서 일정 요건 충족 시 무료 상담을 받을 수 있어요.',
      },
    ],
    cta: { text: '익명 게시판 명예훼손 IP 추적 절차 점검', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '인터넷 댓글 명예훼손 정통망법 vs 형법 비교', href: '/guide/defamation/defamation-online-comment-information-network-act' },
      { label: '단톡방 욕설 명예훼손 vs 모욕죄 성립 기준', href: '/guide/defamation/defamation-group-chat-insult-evidence' },
      { label: '네이버카페 익명 ID 신원공개 청구', href: '/guide/defamation/defamation-cafe-id-disclosure-request' },
      { label: '회사 단톡방 욕설 모욕 vs 명예훼손 5가지 구분', href: '/guide/defamation/defamation-company-chat-insult-vs-defamation' },
      { label: '사망자 명예훼손 유족 대응 절차', href: '/guide/defamation/defamation-deceased-defamation-survivors-action' },
    ],
  },

  // ─── 4. jeonse / jeonse-one-month-notice-implicit-renewal ───
  {
    domain: 'jeonse',
    slug: 'jeonse-one-month-notice-implicit-renewal',
    keyword: '전세 1개월 전 해지 통보 묵시적 갱신 차단',
    questionKeyword: '전세 만기 1개월 전에 통보 안 하면 묵시적 갱신되나요?',
    ctaKeyword: '묵시적 갱신 차단 1개월 통보 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '전세 1개월 전 해지 통보 — 묵시적 갱신 차단 조건 정리 | 로앤가이드',
      description:
        '전세 만기 직전 묵시적 갱신을 막아야 한다면 주임법 제6조 1개월 전 해지 통보 요건과 갱신요구권 차이를 지금 확인하세요.',
    },
    intro:
      '<p>"전세 만기가 두 달 남았는데 이사를 가야 해요. 1개월 전까지 통보하지 않으면 묵시적 갱신이 된다고 들었는데 정확한 시점이 헷갈립니다." 묵시적 갱신은 임차인이 통보를 놓치면 동일 조건으로 2년이 자동 연장되는 제도입니다. 주임법 제6조의 통보 시점과 제6조의2 해지권을 정확히 알면 만기 후에도 자유롭게 이사할 수 있습니다.</p>',
    sections: [
      {
        title: '묵시적 갱신 차단 — 시점별 5가지 핵심',
        content:
          '<p><strong style="color:#1e3a5f">주택임대차보호법 제6조는 통보 시점을 명확히 규정하고 있습니다.</strong></p>\n<ul>\n<li><strong>① 임차인 통보 — </strong>주임법 제6조 제1항: 임차인은 임대차 기간 만료 6개월 전부터 2개월 전까지 갱신 거절 또는 조건 변경 통지를 하지 않으면 동일 조건 갱신 간주.</li>\n<li><strong>② 임대인 통보 — </strong>임대인도 동일 기간(6개월~2개월 전)에 갱신 거절 통지를 하지 않으면 묵시적 갱신.</li>\n<li><strong>③ 갱신요구권 — </strong>주임법 제6조의3: 임차인은 만기 6개월~2개월 전 사이에 갱신요구권을 행사하면 1회 2년 갱신 가능. 묵시적 갱신과 별개 제도.</li>\n<li><strong>④ 묵시적 갱신 후 해지권 — </strong>주임법 제6조의2 제1항: 묵시적 갱신 후 임차인은 언제든 계약 해지 통지 가능. 통지 후 3개월이 지나면 효력 발생.</li>\n<li><strong>⑤ 통보 형식 — </strong>구두·문자·이메일도 가능하나 분쟁 방지를 위해 내용증명이 안전. 통보 시점·내용·도달일이 모두 입증되어야 함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 2020년 7월 31일 시행 개정법으로 통보 기한이 "1개월 전"에서 "2개월 전"으로 연장됐습니다. 만기 2개월 전까지 통보하는 것이 안전합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 내용증명 통보 절차',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단(KLAC) 임대차 분쟁 절차를 참고하면 아래 순서로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 만기일 확인 (만기 6개월 전)</strong> — 전세계약서에서 정확한 만기일 확인. 통보 시한(2개월 전)을 캘린더에 표시.</li>\n<li><strong>2단계 — 통보 내용 작성 (만기 2~6개월 전)</strong> — "본인은 임대차계약 갱신을 원하지 않으며 만기일 ○○년 ○○월 ○○일자로 계약을 종료합니다" 명시. 본인·임대인 인적사항·주소·계약일 포함.</li>\n<li><strong>3단계 — 내용증명 발송 (만기 2개월 전 이전 도달)</strong> — 우체국 내용증명으로 임대인 주소지에 발송. 등기우편 + 내용증명 동시 신청. 발송 후 도달증명 보관.</li>\n<li><strong>4단계 — 새 집 계약 + 임차권등기 검토 (만기 1~2개월 전)</strong> — 새 집 계약 진행. 보증금 반환이 불확실하면 임차권등기명령 신청 검토(통상 4~8주 소요).</li>\n<li><strong>5단계 — 만기일 보증금 수령 + 인도 — </strong>만기일에 보증금 수령 + 키 반납. 미반환 시 임차권등기 후 이사 + 보증금반환소송 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">묵시적 갱신 차단부터 보증금 반환까지 절차를 AI가 정리해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">전세 묵시적 갱신 AI 상담 →</a>\n</div>',
      },
      {
        title: '준비서류 — 통보·해지·이사 자료',
        content:
          '<p><strong style="color:#1e3a5f">묵시적 갱신 차단부터 보증금 회수까지 단계별로 자료를 준비하세요.</strong></p>\n<ul>\n<li><strong>통보 단계</strong> — 전세계약서(원본 보관) + 임대인 인적사항(주소·연락처) + 내용증명 발송 영수증·도달증명.</li>\n<li><strong>임차권등기 단계</strong> — 임차권등기명령 신청서 + 전세계약서(확정일자 날인) + 주민등록등본(전입신고 확인) + 건물등기부등본 + 계약 종료 증빙(내용증명·문자·통화 녹취).</li>\n<li><strong>보증금 반환 청구</strong> — 지급명령신청서 또는 소장 + 위 서류 + 보증금 미반환 증빙(통장 내역 등).</li>\n<li><strong>HUG 보증보험 가입자</strong> — 보증증서 + 사고통지서 + 이행청구서. 만기 후 1개월 내 미반환 시 HUG 영업점에 사고통지.</li>\n<li><strong>이사 단계</strong> — 새 집 잔금 일정 조정 자료 + 이사 견적서 + 새 임대인 협조 요청 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 내용증명은 "갱신 거절 의사"와 "만기일 종료 의사"를 함께 명시하는 것이 안전합니다. 한 가지만 적으면 임대인이 다른 의도로 해석할 위험이 있어요.</blockquote>',
      },
      {
        title: '⚠️ 흔한 실수 — 통보 시점 착오와 묵시적 갱신 후 해지',
        content:
          '<p><strong style="color:#1e3a5f">시점 계산 실수가 묵시적 갱신을 자동 발동시킬 수 있습니다.</strong></p>\n<ul>\n<li><strong>"1개월 전" 통보 착오 — </strong>2020년 7월 31일 이후 체결·갱신 계약은 "2개월 전" 통보가 기준. 1개월 전 통보는 묵시적 갱신을 막지 못합니다.</li>\n<li><strong>도달주의 vs 발송주의 — </strong>통보는 도달주의입니다. 만기 2개월 전 "이전에 임대인에게 도달"해야 함. 우편 지연 고려해 2개월 + 7~14일 여유를 두고 발송.</li>\n<li><strong>구두 통보만 — </strong>전화·구두로만 통보하면 분쟁 시 입증이 어려움. 내용증명이 안전.</li>\n<li><strong>묵시적 갱신 후 즉시 이사 — </strong>제6조의2 해지 통지 후 3개월이 지나야 효력 발생. 즉시 이사하면 보증금 반환 청구가 늦어집니다.</li>\n<li><strong>갱신요구권 행사 후 철회 — </strong>주임법 제6조의3 갱신요구권을 행사한 뒤 마음을 바꾸려면 제6조의2 해지 통지 + 3개월 경과 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 통보 기한이 임박하면 "임대인이 알아서 받겠지"하고 우편 지연을 가볍게 보지 마세요. 만기 3개월 전부터 내용증명 발송 준비를 시작하는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 갱신요구·해지 통지의 효력 발생 시점',
        summary:
          '대법원 2023다258672 사건(대법원, 2024.01.11 선고)에서 법원은 임차인이 주택임대차보호법 제6조의3 제1항에 따라 임대차계약의 갱신을 요구한 경우 갱신의 효력은 임대인에게 갱신요구가 도달한 때 발생하며, 임차인이 같은 법 제6조의2 제1항에 따라 한 계약해지 통지가 갱신된 임대차계약 기간 중에도 효력을 발생할 수 있다고 판시했습니다.',
        takeaway:
          '갱신요구권을 이미 행사했더라도 묵시적 갱신 후 해지 통지로 다시 종료할 수 있어, 만기 직전에 마음이 바뀌어도 3개월 통지 + 도달일 입증으로 보증금 반환 절차를 진행할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '문자·카톡으로 통보해도 인정되나요?',
        answer:
          '<strong>법적으로는 가능하지만 분쟁 시 도달일 입증이 어렵습니다.</strong> 내용증명이 가장 안전하고, 문자·카톡은 보조 증거로 활용하는 것이 좋아요.',
      },
      {
        question: '묵시적 갱신이 됐는데 즉시 이사 가야 하면 어떻게 하나요?',
        answer:
          '<strong>주임법 제6조의2 해지 통지 후 3개월이 지나야 계약이 종료됩니다.</strong> 그 사이 보증금 미반환 시 임차권등기명령으로 대항력을 보존하세요.',
      },
      {
        question: '임대인이 통보를 무시하고 묵시적 갱신을 주장해요',
        answer:
          '<strong>내용증명 발송 영수증·도달증명으로 통보 시점을 입증할 수 있습니다.</strong> KLAC(132)에서 무료 상담 후 분쟁조정 또는 소송을 검토하세요.',
      },
      {
        question: '전세금 인상 요구가 있어도 묵시적 갱신을 막을 수 있나요?',
        answer:
          '<strong>임대인이 조건 변경 통지를 했다면 묵시적 갱신은 발동하지 않습니다.</strong> 그 경우 임차인은 갱신요구권(제6조의3)으로 5% 인상 한도 내 갱신을 요구할 수 있어요.',
      },
      {
        question: '갱신요구권을 행사하면 묵시적 갱신과 어떻게 다른가요?',
        answer:
          '<strong>갱신요구권은 임차인 권리로 1회 2년 갱신, 차임 5% 인상 한도가 적용됩니다.</strong> 묵시적 갱신은 동일 조건 2년 자동 연장이며, 둘 다 임차인 해지 통지 후 3개월로 종료 가능해요.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '전세 묵시적 갱신 후 중도 해지', href: '/guide/jeonse/jeonse-implicit-renewal-termination' },
      { label: '전세 갱신 거절 임대인 통보 시점', href: '/guide/jeonse/jeonse-renewal-landlord-refusal' },
      { label: '전세 갱신 거절 후 이사비용 청구', href: '/guide/jeonse/jeonse-renewal-refused-relocation-cost' },
      { label: '보증금 미반환 이사 임차권등기 절차', href: '/guide/jeonse/jeonse-deposit-not-returned-move-out-procedure' },
      { label: '깡통전세 사전 점검 7가지 항목', href: '/guide/jeonse/jeonse-empty-house-warning-pre-contract-check' },
    ],
  },

  // ─── 5. jeonse / jeonse-landlord-sold-deposit-successor-liability ───
  {
    domain: 'jeonse',
    slug: 'jeonse-landlord-sold-deposit-successor-liability',
    keyword: '임대인 매도 양수인 보증금 승계 책임',
    questionKeyword: '집주인이 집을 팔았는데 보증금은 누구에게 청구해야 하나요?',
    ctaKeyword: '임대인 매도 양수인 승계 보증금 청구 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임대인 매도 후 보증금 — 양수인 승계 책임 판례 정리 | 로앤가이드',
      description:
        '집주인이 주택을 매도해 양수인이 새 임대인이 됐다면 주임법 제3조 제4항 보증금 반환 승계 책임 5가지 기준을 지금 확인하세요.',
    },
    intro:
      '<p>"전세 살고 있는데 집주인이 갑자기 집을 팔았다고 합니다. 새 집주인에게 보증금을 청구해야 할지, 원래 집주인에게 받아야 할지 헷갈립니다." 주임법 제3조 제4항은 대항력 있는 임차인의 보증금반환의무가 양수인에게 자동 승계된다고 규정합니다. 다만 임차인이 승계를 원치 않으면 양도인에게 직접 청구할 수도 있어, 본인 상황에 맞는 선택지를 정확히 알면 회수 경로가 명확해집니다.</p>',
    sections: [
      {
        title: '임대인 매도 — 양수인 승계 5가지 기준',
        content:
          '<p><strong style="color:#1e3a5f">주택임대차보호법 제3조 제4항은 양수인 승계의 핵심 규정입니다.</strong></p>\n<ul>\n<li><strong>① 대항력 보유 — </strong>임차인이 전입신고 + 주택 인도(거주)로 대항력을 갖춘 상태여야 함. 전입신고 누락·전출은 대항력 상실.</li>\n<li><strong>② 양수인 승계 의무 — </strong>주임법 제3조 제4항: 양수인은 주택 소유권 이전과 함께 임대인의 임대차계약상 권리·의무 일체를 그대로 승계. 보증금 반환 책임은 새 임대인에게 이전.</li>\n<li><strong>③ 양도인 면책 원칙 — </strong>승계가 일어나면 양도인(원 임대인)은 임대차관계에서 탈퇴해 보증금 반환 의무에서 벗어나는 것이 원칙.</li>\n<li><strong>④ 임차인의 선택권 — </strong>임차인이 승계를 원치 않으면 임대인과 합의하여 계약을 해지하고 양도인(원 임대인)에게 직접 보증금 반환을 청구할 수 있는 사례가 있습니다.</li>\n<li><strong>⑤ 대항력 미보유 시 — </strong>전입신고가 없는 임차인은 양수인에게 대항할 수 없어, 양도인(원 임대인)에게 보증금 반환을 청구해야 합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대항력 보유 + 매도 사실을 안 시점에 본인이 양수인 승계를 받아들일지 거부할지 선택할 수 있는 사례가 있어, 변호사·KLAC 상담을 거쳐 결정하는 것이 안전합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 매도 통보 후 5단계 대응',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단(KLAC) 임대차 분쟁 절차를 참고하면 아래 순서로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 등기부등본 확인 (즉시)</strong> — 인터넷등기소에서 등기부등본 발급(700원). 새 소유자 인적사항·소유권 이전 시점·근저당 신설 여부 확인.</li>\n<li><strong>2단계 — 새 임대인 정보 확보 (1주 내)</strong> — 양수인 이름·주소·연락처 확인. 양도인에게 인계 자료(계약서·임차인 정보) 인계 여부 확인.</li>\n<li><strong>3단계 — 승계 수용 vs 해지 결정 (2~4주 내)</strong> — 새 임대인 신용·자산 상황 점검. 승계가 위험하면 양도인과 합의 해지 후 양도인에게 보증금 반환 청구 검토.</li>\n<li><strong>4단계 — 의사 표시 통지 — </strong>승계 수용 또는 해지 의사를 양도인·양수인 양쪽에 내용증명 발송. 만기까지 기다릴 수 있고, 즉시 해지 협의도 가능.</li>\n<li><strong>5단계 — 보증금 반환 청구 — </strong>승계 수용이면 만기 시 새 임대인에게 청구. 해지 합의면 양도인에게 직접 청구. 미반환 시 지급명령·소송 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">양수인 승계·양도인 직접 청구 중 어느 쪽이 유리한지 AI가 분석해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임대인 매도 보증금 AI 상담 →</a>\n</div>',
      },
      {
        title: '준비서류 — 등기부 확인 + 의사 표시',
        content:
          '<p><strong style="color:#1e3a5f">매도 통보 직후 자료를 신속히 정리해두세요.</strong></p>\n<ul>\n<li><strong>대항력 입증</strong> — 주민등록등본(전입신고 일자) + 전세계약서(확정일자 날인) + 거주 증빙(우편물·관리비 영수증).</li>\n<li><strong>등기부등본</strong> — 인터넷등기소에서 발급. 매도 전후 비교를 위해 매도 직전 + 매도 직후 두 번 발급.</li>\n<li><strong>매매 관련 자료</strong> — 양도인이 임차인에게 통보한 매도 사실 안내문(문자·카톡·우편) + 매매 시점 입증 자료.</li>\n<li><strong>의사 표시 내용증명</strong> — 승계 수용 또는 해지 의사 통지서 + 보증금 반환 청구서. 양도인·양수인 양쪽에 동시 발송.</li>\n<li><strong>보증금 반환 청구</strong> — 지급명령 또는 소장 + 위 서류 + 미반환 입증 자료(통장 내역).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 매도 직후 등기부에 새 근저당이 잡혔다면 양수인 자산 부족 신호일 수 있습니다. 그 경우 해지 합의 후 양도인에게 직접 청구하는 쪽이 안전한 사례가 많아요.</blockquote>',
      },
      {
        title: '⚠️ 흔한 실수 — 점유 상실과 새 임대인 신용 미점검',
        content:
          '<p><strong style="color:#1e3a5f">매도 직후 흔히 발생하는 위험을 미리 차단하세요.</strong></p>\n<ul>\n<li><strong>점유·전입신고 상실 — </strong>매도 통보 직후 이사·전출하면 대항력이 끊겨 양수인 승계 자체가 불가능해집니다. 임차권등기 없이 절대 전출 금지.</li>\n<li><strong>새 임대인 신용 미점검 — </strong>양수인이 보증금 반환 자력이 없으면 회수가 어려워질 수 있음. 등기부등본·근저당 확인 필수.</li>\n<li><strong>해지 의사 표시 시점 착오 — </strong>해지 합의는 매도 사실을 안 후 합리적 기간 내 의사 표시가 필요한 사례가 있습니다. 변호인·KLAC 상담을 거쳐 시점 결정.</li>\n<li><strong>양도인·양수인 동시 청구 시 모순 — </strong>승계를 수용하면 양도인은 면책되는 것이 원칙이라 양쪽 동시 청구가 모순될 수 있음. 한쪽 선택 후 명확히 통지.</li>\n<li><strong>매매대금에 보증금 공제 약정 — </strong>매매계약서에 "보증금은 매매대금에서 공제하고 양수인이 인수"라는 약정이 있어도 임차인 동의 없이는 효력에 다툼이 있을 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "양수인이 새 집주인이니 알아서 돌려주겠지"하고 의사 표시 없이 만기까지 기다리면 양도인은 면책되고 양수인이 자력이 없을 경우 회수가 어려워질 수 있습니다. 매도 통보 직후 신용 점검과 의사 표시가 핵심입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 양수인의 임대차계약상 권리·의무 일체 승계',
        summary:
          '대법원 2021다251929 사건(대법원, 2021.11.11 선고)에서 법원은 주택임대차보호법 제3조 제4항에서 정한 대항요건을 갖춘 임대주택이 양도된 경우, 양수인이 주택의 소유권과 결합하여 임대인의 임대차계약상의 권리·의무 일체를 그대로 승계하며, 양도인은 임대차관계에서 탈퇴하여 임차인에 대한 보증금 반환의무를 면한다고 판시했습니다.',
        takeaway:
          '대항력 있는 임차인은 매도 후 양수인을 상대로 보증금 반환을 청구하는 것이 원칙이며, 양도인 면책이 발생하므로 양수인의 자력을 사전에 점검해 승계 수용 여부를 결정하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '양수인이 보증금 반환을 거부하면 어떻게 하나요?',
        answer:
          '<strong>임차권등기명령 + 지급명령 또는 소송으로 청구할 수 있습니다.</strong> 회수가 어려우면 임대주택 경매 신청으로 배당 절차를 검토하는 사례가 있어요.',
      },
      {
        question: '전입신고를 안 했는데 집주인이 바뀌면 어떻게 하나요?',
        answer:
          '<strong>대항력이 없어 양수인에게 청구할 수 없고 양도인(원 집주인)에게 청구해야 합니다.</strong> 원 집주인이 면책을 주장할 수 없는 사례가 많아요.',
      },
      {
        question: '양도인이 보증금을 양수인에게 인계하지 않았다면?',
        answer:
          '<strong>양도인·양수인 간 내부 정산 문제이며 임차인에게는 영향이 없습니다.</strong> 임차인은 대항력만 있다면 양수인에게 청구하면 돼요.',
      },
      {
        question: '매매 사실을 임차인에게 통보하지 않았다면 위법인가요?',
        answer:
          '<strong>법상 사전 통보 의무 규정은 없으나 신의칙상 통보가 권장됩니다.</strong> 매도 사실을 안 시점부터 임차인이 승계 수용 여부를 결정할 수 있어요.',
      },
      {
        question: '전세보증보험에 가입돼 있다면 매도와 무관하게 회수 가능한가요?',
        answer:
          '<strong>HUG 보증보험 가입자는 양수인 승계와 별개로 보증사에 이행청구가 가능합니다.</strong> 만기 후 1개월 내 미반환 시 HUG 영업점에 사고통지하세요.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '집주인이 바뀐 후 보증금 반환', href: '/guide/jeonse/jeonse-house-sold-new-landlord-deposit' },
      { label: '임대인 변경 시 보증금 위험 점검', href: '/guide/jeonse/jeonse-landlord-change-deposit-risk' },
      { label: '보증금 미반환 이사 임차권등기 절차', href: '/guide/jeonse/jeonse-deposit-not-returned-move-out-procedure' },
      { label: '전세보증금반환보증 가입 절차', href: '/guide/jeonse/jeonse-deposit-guarantee-insurance-guide' },
      { label: '전세 1개월 전 해지 통보 묵시적 갱신', href: '/guide/jeonse/jeonse-one-month-notice-implicit-renewal' },
    ],
  },

  // ─── 6. child-support / child-support-enforcement-attach-imprison ───
  {
    domain: 'child-support',
    slug: 'child-support-enforcement-attach-imprison',
    keyword: '양육비 강제집행 압류 이행명령 감치',
    questionKeyword: '양육비를 안 주는데 압류·감치까지 어떻게 진행하나요?',
    ctaKeyword: '양육비 강제집행 단계별 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양육비 강제집행 — 압류·이행명령·감치 단계별 절차 | 로앤가이드',
      description:
        '양육비 미지급 상황에서 가소법 제64조·제68조 이행명령·감치와 압류·추심 강제집행 단계별 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 후 양육비를 몇 달째 안 주는데 어디서부터 시작해야 할지 막막해요. 압류·감치라는 말은 들었는데 순서가 헷갈립니다." 양육비 강제집행은 집행권원 확보 → 이행명령 → 압류·추심 → 감치 순서로 단계가 정해져 있습니다. 단계를 건너뛰면 신청이 기각되거나 실효성이 떨어질 수 있어, 가사소송법 제64조·제68조 절차를 정확히 알면 회수 가능성이 높아집니다.</p>',
    sections: [
      {
        title: '양육비 강제집행 5단계 — 가소법·민집법 절차',
        content:
          '<p><strong style="color:#1e3a5f">양육비이행관리원·가정법원 절차를 참고하면 아래 순서로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 집행권원 확보 (필수)</strong> — 양육비 심판·조정 결정문 또는 양육비부담조서. 집행권원 없이는 어떤 절차도 진행 불가.</li>\n<li><strong>2단계 — 이행명령 신청 (가소법 제64조)</strong> — 가정법원에 이행명령 신청. 법원이 의무자에게 일정 기한 내 이행 명령. 미이행 시 1천만원 이하 과태료(제67조).</li>\n<li><strong>3단계 — 압류·추심·전부명령 (민집법)</strong> — 의무자 급여·예금·동산 압류. 직장이 있으면 급여 압류가 가장 효과적. 매월 자동 추심.</li>\n<li><strong>4단계 — 직접지급명령 (가소법 제63조의2) — </strong>의무자 사용자(직장)에게 직접 양육비 지급 명령. 정기금 양육비에 한해 가능. 사용자가 직접 입금.</li>\n<li><strong>5단계 — 감치명령 (가소법 제68조)</strong> — 이행명령 후 정당한 사유 없이 3기 이상 미이행 시 30일 이내 감치. 단계를 건너뛰면 기각.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 강제집행 절차, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">집행권원·이행명령·감치 순서를 AI가 단계별로 정리해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">양육비 강제집행 AI 상담 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 양육비이행관리원 무료 지원',
        content:
          '<p><strong style="color:#1e3a5f">양육비이행관리원(1644-6621)은 무료로 강제집행을 대행 지원합니다.</strong></p>\n<ul>\n<li><strong>양육비이행관리원 신청 — </strong>홈페이지(childsupport.or.kr) 또는 1644-6621 전화. 협의·심판·조정으로 확정된 양육비 사건만 대상.</li>\n<li><strong>지원 범위 — </strong>이행명령·압류·추심·감치 신청 무료 대행. 변호사 비용 부담 없이 절차 진행.</li>\n<li><strong>한시적 양육비 긴급지원 — </strong>일정 요건 충족 시 월 20만원·최대 12개월 한시 지원. 신청 후 양육비이행관리원이 의무자에게 추후 환수.</li>\n<li><strong>제재 조치 — </strong>운전면허 정지·출국금지·신상공개·형사처벌(양육비이행법 제27조의2) 등. 의무자 압박 효과.</li>\n<li><strong>처리 기간 — </strong>이행명령 결정까지 통상 2~4개월. 감치명령은 이행명령 후 3기 이상 미이행 입증 + 추가 1~2개월 소요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 감치명령은 "이행명령 후 3기 이상 미이행" 요건이 필수입니다. 단계를 건너뛰고 바로 감치를 신청하면 기각되니 가능한 한 이행명령부터 진행하세요.</blockquote>',
      },
      {
        title: '준비서류 — 강제집행 단계별 자료',
        content:
          '<p><strong style="color:#1e3a5f">단계마다 필요한 서류가 다르므로 사전에 정리해두세요.</strong></p>\n<ul>\n<li><strong>집행권원</strong> — 양육비 심판·조정 결정문(집행문 부여) + 송달증명·확정증명 + 양육비부담조서.</li>\n<li><strong>이행명령 신청</strong> — 이행명령 신청서 + 집행권원 사본 + 미지급 입증(통장 내역, 의무자 거부 메시지) + 본인·자녀 가족관계증명서.</li>\n<li><strong>압류·추심</strong> — 채권압류 및 추심명령 신청서 + 집행권원(집행문 부여) + 의무자 인적사항(주민번호·주소·직장) + 제3채무자 정보(은행·고용주).</li>\n<li><strong>직접지급명령</strong> — 직접지급명령 신청서 + 집행권원 + 의무자 사용자(직장) 정보 + 정기금 양육비 입증.</li>\n<li><strong>감치명령</strong> — 감치명령 신청서 + 이행명령 결정문 + 3기 이상 미이행 입증(통장 내역·미지급 기간 정리).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 의무자의 직장·재산을 모르면 가정법원 재산명시·재산조회 신청을 먼저 하세요. 의무자가 거짓 신고 시 과태료 또는 형사처벌 가능.</blockquote>',
      },
      {
        title: '⚠️ 흔한 실수 — 이행명령 범위와 단계 건너뛰기',
        content:
          '<p><strong style="color:#1e3a5f">실무에서 가장 자주 발생하는 실수를 미리 알고 회피하세요.</strong></p>\n<ul>\n<li><strong>이행명령 범위 초과 — </strong>대법원 2025으517 판례: 양육비부담조서로 확정된 의무 범위를 넘어 이행명령은 불가. 미지급 금액·기간을 정확히 계산해 신청.</li>\n<li><strong>단계 건너뛰고 감치 신청 — </strong>이행명령 없이 바로 감치 신청은 기각. 가능한 한 이행명령 → 3기 이상 미이행 입증 → 감치 순서.</li>\n<li><strong>의무자 직장 변동 미반영 — </strong>의무자가 이직하면 압류 효력이 끊김. 새 직장 정보를 신속히 파악해 추가 압류 신청.</li>\n<li><strong>미지급 입증 부족 — </strong>구두 약속·문자만으로 입증 어려움. 통장 내역·송금 거부 메시지·약속 위반 정황을 시간순으로 정리.</li>\n<li><strong>합의 후 효력 단정 — </strong>양육비 합의금 단정 표현 회피. 사례별 차이가 크며, 협의·조정·심판 단계에서 결정되는 사례가 많습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "감치되면 원칙적으로 받을 수 있다"고 단정하면 안 됩니다. 감치 후에도 의무자가 자력이 없으면 회수가 어려운 사례가 있어, 한시적 양육비 긴급지원 + 형사처벌 + 신상공개 등 다중 압박을 병행 검토하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 이행명령은 양육비부담조서 확정 의무 범위 내에서만 가능',
        summary:
          '대법원 2025으517 사건(대법원, 2025.05.23 선고)에서 법원은 양육비부담조서 등에 의해 확정된 의무 범위를 넘어서 가사소송법 제64조에서 정한 이행명령을 할 수는 없다고 판시했습니다. 즉 이행명령은 집행권원에 명시된 양육비 의무 범위 안에서만 발동됩니다.',
        takeaway:
          '미지급 금액·기간을 정확히 계산해 집행권원에 부합하는 범위로 이행명령을 신청해야 기각을 피할 수 있어, 양육비부담조서·심판 결정문 사본을 사전에 정리해 청구 범위를 명확히 하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '집행권원이 없으면 강제집행이 안 되나요?',
        answer:
          '<strong>네, 양육비 심판·조정 결정문 또는 양육비부담조서가 필수입니다.</strong> 협의이혼 양육비 합의서만 있다면 양육비 청구 심판으로 집행권원을 먼저 확보해야 해요.',
      },
      {
        question: '의무자가 무직인데도 강제집행 가능한가요?',
        answer:
          '<strong>예금·부동산·동산 등 다른 재산이 있으면 압류 가능합니다.</strong> 가정법원 재산명시·재산조회로 자산을 파악하고, 양육비이행관리원의 한시적 긴급지원도 검토하세요.',
      },
      {
        question: '의무자가 해외로 도피하면 어떻게 하나요?',
        answer:
          '<strong>출국금지 신청과 국제공조를 검토할 수 있습니다.</strong> 양육비이행법상 출국금지 + 한국과 협약을 맺은 국가는 양육비 추심 협조가 가능한 사례가 있어요.',
      },
      {
        question: '직접지급명령과 압류 중 어느 게 효과적인가요?',
        answer:
          '<strong>직접지급명령은 정기금 양육비에 더 효과적입니다.</strong> 사용자가 직접 매월 입금해 절차가 간단하지만, 의무자가 이직하면 다시 신청이 필요해요.',
      },
      {
        question: '감치 후 의무자가 양육비를 지급하면 풀려나나요?',
        answer:
          '<strong>가소법 제68조에 따라 감치 중이라도 의무를 이행하면 즉시 석방됩니다.</strong> 감치는 처벌이 아니라 이행 강제 수단이라 체납분 지급이 핵심이에요.',
      },
    ],
    cta: { text: '양육비 못 받을 때 다음 단계, AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 미지급 회수 절차 정리', href: '/guide/child-support/child-support-overdue-collection' },
      { label: '양육비 강제집행 방법 단계별', href: '/guide/child-support/child-support-enforcement-method' },
      { label: '양육비 이행명령 신청 절차', href: '/guide/child-support/child-support-enforcement-order-apply' },
      { label: '양육비 직접지급명령 절차', href: '/guide/child-support/child-support-direct-payment-order-procedure' },
      { label: '양육비 미지급 급여 압류 절차', href: '/guide/child-support/child-support-overdue-salary-seizure-procedure' },
    ],
  },
];
