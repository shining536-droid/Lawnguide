import { SpokePage } from '../spoke-pages';

// batch46 nonlabor3 10개: defamation 3 + jeonse 2 + child-support 1 + rehabilitation 1 + bankruptcy 1 + industrial-accident 1 + stalking 1
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 전 직장 상사·인사담당자가 새 회사·헤드헌터에게 평판 정보를 부정적으로 흘려 채용이 무산됐다는 의심을 받는 평판 유출자(accused)가 사적 평가의 위법성·공연성 한계를 정리하도록 돕는 페이지다.
// 2. 이 페이지는 익명 게시판(블라인드·디시·에펨코리아)에서 자신을 직접 거론한 글에 댓글·반박글로 응수했다가 명예훼손 신고당한 작성자(accused)가 반론 권리·공연성 다툼·삭제·합의 우선순위를 정리하도록 돕는 페이지다.
// 3. 이 페이지는 환자가 작성한 진료 후기·의료사고 의혹에 의사·병원장이 댓글·블로그·SNS로 직접 반론하다가 환자로부터 명예훼손 신고당한 의료인(accused)이 답변 표현 수위와 공익성 항변을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 임대인의 종합부동산세·재산세·국세 체납으로 경매·공매가 진행될 때 임차인이 보증금 우선변제 순위를 점검하고 HUG 보증·임차권등기·당해세 우선 한도 검토를 안전하게 진행하도록 돕는 페이지다.
// 5. 이 페이지는 월세 계약갱신요구권 행사 시 임대인이 5% 초과 인상을 요구하거나 보증금→월세 전환을 시도할 때 차임증액 한도·전환율 상한을 점검하도록 돕는 페이지다.
// 6. 이 페이지는 부부가 시간을 나눠 자녀를 함께 키우는 공동양육 형태에서 양육비를 산정·청구할 때 양육시간 비율·소득 차이·양육비산정기준표를 어떻게 적용하는지 정리하도록 돕는 페이지다.
// 7. 이 페이지는 카드론·현금서비스·리볼빙으로 채무가 누적된 사람이 개인회생 신청 시 카드론 채권이 회생채권으로 포함되는지 변제 비율·인가 후 책임은 어떻게 되는지 점검하도록 돕는 페이지다.
// 8. 이 페이지는 소득이 없는 전업주부가 배우자 명의 카드 사용·생활비 대출로 채무가 쌓였을 때 개인파산 신청 자격(지급불능 판단)과 면책 가능성을 점검하도록 돕는 페이지다.
// 9. 이 페이지는 배달기사·라이더가 출퇴근(사업주 제공 차량 또는 통상의 경로) 중 사고를 당했을 때 산재 신청 가능 여부와 특수형태근로종사자 적용 기준을 정리하도록 돕는 페이지다.
// 10. 이 페이지는 전 직장에서 알게 된 동료가 퇴사 후에도 집·SNS·전화로 추적해오는 피해자가 스토킹범죄 신고 가능성·증거 체크리스트·접근금지 잠정조치 신청을 정리하도록 돕는 페이지다.

export const spokesBatch46Nonlabor3: SpokePage[] = [
  // ─── 1. defamation / employer-reference-leak ───
  {
    domain: 'defamation',
    slug: 'defamation-employer-reference-leak',
    keyword: '전 직장 평판 유출 명예훼손',
    questionKeyword: '전 직장에서 새 회사에 부정적 평판을 흘렸다는 의심으로 명예훼손 신고를 받았어요',
    ctaKeyword: '평판 유출 명예훼손 방어 점검',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '전 직장 평판 유출 명예훼손 4가지 다툼 포인트 | 로앤가이드',
      description:
        '전 직장 인사·상사 입장에서 평판 정보 유출로 명예훼손 혐의를 받고 있다면 공연성·진실 항변·공익성 3가지 축으로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"퇴사한 직원이 채용이 무산됐다며 우리가 평판을 흘렸다고 신고했다"는 사연이 늘고 있습니다. 평판 정보(reference) 제공은 헤드헌터·후임 회사 인사담당자처럼 직무상 알 필요가 있는 사람에게 한정 전달된 경우가 많아 정보통신망법 제70조의 "비방할 목적"이나 형법 제307조의 "공연성"이 인정되지 않을 가능성이 있습니다. 혐의를 받고 있다면 누구에게·언제·무슨 내용을 전달했는지 시간순으로 정리해 첫 진술 전에 다음 4가지 축으로 방어선을 세우세요.</p>',
    sections: [
      {
        title: '공연성 — "직무상 필요한 한 사람"에게만 전달했나',
        content:
          '<p><strong style="color:#1e3a5f">정보통신망법·형법 명예훼손은 공연성(불특정·다수 전파 가능성)이 핵심 구성요건입니다.</strong></p>\n<ul>\n<li><strong>1:1 전달 여부</strong> — 헤드헌터 1명·인사담당자 1명에게만 전달했다면 공연성이 부정될 소지가 있습니다.</li>\n<li><strong>전파 가능성</strong> — 받은 사람이 비밀유지의무가 있고 외부에 공유할 가능성이 낮으면 공연성 약화.</li>\n<li><strong>다수 채널 사용</strong> — 단톡방·업계 모임에서 거론했다면 공연성 인정 가능성이 큽니다.</li>\n<li><strong>증거 정리</strong> — 통화·이메일 1대1 송수신 기록을 시간순 정리, 전달 범위 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공연성이 부정되면 명예훼손 자체가 성립하기 어렵습니다(전파가능성 법리, 대법원 일관된 입장).</blockquote>',
      },
      {
        title: '4단계 대응 — 신고 통보 후 해야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">조사 출석 전에 "발신 채널·내용·근거 자료"를 시간순으로 정돈해야 합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 전달 채널 정리</strong> — 통화 일시·이메일·메신저 단일 수신자 여부를 시간순 표로 작성.</li>\n<li><strong>2단계 — 평가 근거 자료 수집</strong> — 인사평가서·근태기록·징계기록·시말서 등 평가의 사실 근거 보관.</li>\n<li><strong>3단계 — 표현 수위 점검</strong> — "성격 결함"·"사기성" 같은 모욕적 단정 표현이 있었는지 자체 점검.</li>\n<li><strong>4단계 — 의견서 제출</strong> — 직무상 필요 + 1대1 전달 + 사실 근거 3축으로 무혐의 의견 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">전달한 평판 정보가 공연성·비방 목적에 해당할 소지가 있는지, AI가 발언 단위로 위험도를 점검해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '진실성·공익성 — 형법 제310조 항변 정돈',
        content:
          '<p><strong style="color:#1e3a5f">사실이고 공공의 이익을 위한 것이면 위법성이 조각될 수 있습니다(형법 제310조).</strong></p>\n<ul>\n<li><strong>진실성</strong> — 평가 항목별로 인사평가·징계기록 등 사실 근거 매칭.</li>\n<li><strong>공익성</strong> — 후임 회사의 채용 적합성 판단을 도울 목적이라는 동기 입증.</li>\n<li><strong>주관 평가의 한계</strong> — "성과가 낮았다"는 사실 적시지만 "사기꾼"은 가치판단 + 모욕 위험.</li>\n<li><strong>표현 방법의 적정성</strong> — 사실 위주·감정 절제로 전달했다는 정황 자료 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 평판 조회는 동의·요청 기반인 경우가 많아, 후임 회사가 먼저 문의했다는 자료를 확보하면 공익성 인정에 유리합니다.</blockquote>',
      },
      {
        title: '합의·반의사불벌 — 위험 종결 카드',
        content:
          '<p><strong style="color:#1e3a5f">정보통신망법 제70조 명예훼손은 반의사불벌죄(같은 법 제70조 제3항)로 1심 판결 전 합의 시 공소기각으로 종결될 수 있습니다.</strong></p>\n<ul>\n<li><strong>합의금 시세</strong> — 1대1 전달·단발성·근거 자료가 있는 경우 100~300만 원선이 일반적, 채용 무산 손해 입증 시 가변.</li>\n<li><strong>처벌불원서 + 사과 표현</strong> — "사실 근거가 일부 부족했음을 사과한다" 정도의 절제된 표현으로 위험 최소화.</li>\n<li><strong>재발 방지 약정</strong> — 향후 동일·유사 평판 전달 시 위약금 조항 포함 검토.</li>\n<li><strong>민사 별도 진행 위험</strong> — 형사 합의 후에도 채용 무산 손해배상 민사가 별도로 들어올 수 있어, 합의서에 민사 포함 명시 권장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합의 시 "허위사실을 인정한다"는 문구는 가급적 피하고, 위법성 인정 진술이 되지 않도록 표현을 다듬어야 합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 전파가능성 법리(공연성의 판단 기준)',
        summary:
          '대법원 2020도5813 사건(대법원, 2020.11.19 선고)에서 법원은 명예훼손죄의 공연성은 불특정 또는 다수인이 인식할 수 있는 상태를 의미하지만, 개별적으로 한 사람에게 사실을 적시한 경우라도 그로부터 불특정 또는 다수에게 전파될 가능성이 있다면 공연성이 인정될 수 있다고 판시했습니다. 다만 받은 사람이 직무상 비밀을 지킬 위치라면 전파 가능성이 부정될 수 있다는 법리도 함께 확인됐습니다.',
        takeaway: '평판을 직무상 1대1로 전달했고 받은 사람이 외부 공유 가능성이 낮다면, 공연성 부정으로 무혐의 다툼이 가능합니다.',
      },
    ],
    faq: [
      {
        question: '헤드헌터에게만 평판을 말했는데도 명예훼손이 되나요?',
        answer:
          '<strong>1대1 전달이고 받은 사람이 외부 공유할 가능성이 낮으면 공연성이 부정될 소지가 있습니다.</strong> 다만 헤드헌터가 다른 후보자·기업에 동일 정보를 전달했다면 공연성이 인정될 수 있어요.',
      },
      {
        question: '인사평가서를 바탕으로 사실 그대로 말했는데도 처벌받나요?',
        answer:
          '<strong>형법 제310조에 따라 진실 + 공익 목적이면 위법성이 조각될 수 있습니다.</strong> 사실 근거 자료를 의견서에 첨부해 진실성을 적극 입증하세요.',
      },
      {
        question: '신고자가 채용 무산 손해배상까지 청구한다고 합니다',
        answer:
          '<strong>형사 사건과 민사 손해배상은 별개로 진행됩니다.</strong> 평판 전달과 채용 무산 사이의 인과관계 입증이 쟁점이라 형사 무혐의 시 민사도 다툴 여지가 큽니다.',
      },
      {
        question: '회사 명의 메일·업무용 메신저로 전달했는데 회사 책임도 있나요?',
        answer:
          '<strong>업무수행 중 행위라면 사용자책임(민법 제756조) 문제가 별도로 발생할 수 있습니다.</strong> 회사 법무팀과 함께 대응선을 정리하는 것이 안전합니다.',
      },
      {
        question: '신원이 어떻게 특정됐는지 모르겠어요',
        answer:
          '<strong>신고자가 후임 회사·헤드헌터로부터 발언 출처를 확보한 경우가 일반적입니다.</strong> 어떤 경로로 평판 내용이 신고자에게 전달됐는지부터 의견서에서 다투어보는 것이 유리합니다.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 공연성 다툼 정리', href: '/guide/defamation/defamation-publicity-element-defense' },
      { label: '진실한 사실 적시 항변', href: '/guide/defamation/defamation-truth-public-interest' },
      { label: '회사 리뷰 명예훼손 방어', href: '/guide/defamation/defamation-employer-review-defense' },
      { label: '명예훼손 합의금 시세', href: '/guide/defamation/defamation-settlement-amount-guide' },
      { label: '경찰 조사 출석 전 점검', href: '/guide/defamation/defamation-police-investigation-prep' },
    ],
  },

  // ─── 2. defamation / anonymous-board-counter ───
  {
    domain: 'defamation',
    slug: 'defamation-anonymous-board-counter',
    keyword: '익명 게시판 반박글 명예훼손',
    questionKeyword: '블라인드·디시 익명 게시판에서 나를 거론한 글에 반박했더니 명예훼손으로 신고당했어요',
    ctaKeyword: '익명 게시판 반박 명예훼손 방어 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '익명 게시판 반박 명예훼손 5가지 다툼 포인트 | 로앤가이드',
      description:
        '익명 게시판에서 나를 거론한 글에 반박했다가 명예훼손 혐의를 받고 있다면 정당한 반론·공연성·표현 수위 3가지로 방어하는 순서를 지금 확인하세요.',
    },
    intro:
      '<p>"내 욕을 하는 글이 올라와서 댓글로 반박했더니 그 사람이 나를 명예훼손으로 신고했다"는 사연이 적지 않습니다. 정당한 반론은 표현의 자유 영역으로 보호받을 여지가 있지만, 반박 과정에서 상대방을 특정해 사실·허위를 적시했다면 별개의 명예훼손이 성립할 가능성도 있습니다. 혐의를 받고 있다면 어느 글이 어떤 글에 대한 반박인지 시간순으로 정리하고, 표현 수위가 모욕·인신공격에 해당할 소지가 있는지부터 자체 점검해야 합니다.</p>',
    sections: [
      {
        title: '반론권 — 정당한 반박은 어디까지 보호되나',
        content:
          '<p><strong style="color:#1e3a5f">먼저 공격당한 사람이 사실관계를 바로잡는 반론은 사회상규에 위배되지 않는 행위로 평가될 여지가 있습니다(형법 제20조).</strong></p>\n<ul>\n<li><strong>선행 발언 존재</strong> — 본인을 직접 거론한 글이 먼저 게시됐다는 캡처 시간순 확보.</li>\n<li><strong>대응 비례성</strong> — 반박 범위가 원글의 쟁점에 한정됐는지 점검.</li>\n<li><strong>새로운 사실 적시 자제</strong> — 반박을 넘어 상대방 사생활·과거를 새로 폭로하면 별개 명예훼손 위험.</li>\n<li><strong>표현 수위</strong> — "거짓말쟁이"·"사기꾼" 같은 단정은 모욕죄 위험.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정당방위 유사 법리로 다투려면 "선행 공격 → 한정 반박" 시간순이 명확해야 합니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 신고 통보 후 정돈할 것',
        content:
          '<p><strong style="color:#1e3a5f">원글·반박글 캡처와 게시 일시가 가장 핵심 증거입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 원글 캡처 보존</strong> — 본인을 거론한 글의 작성일시·게시판·계정명을 메타정보까지 캡처.</li>\n<li><strong>2단계 — 반박글 원본 확보</strong> — 본인 반박글 작성일시·전문·삭제 여부 정리.</li>\n<li><strong>3단계 — 표현 수위 자체 점검</strong> — 모욕·인신공격 표현은 자진 삭제·정정 검토.</li>\n<li><strong>4단계 — 게시 중단 요청 검토</strong> — 정보통신망법 제44조의2 임시조치로 본인 글 자진 삭제 진행.</li>\n<li><strong>5단계 — 의견서 제출</strong> — 정당한 반론 + 공연성 다툼 + 진실 항변을 묶어 무혐의 주장.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">반박 표현 단위로 모욕·명예훼손 위험도가 어떤지, AI가 문장별 다툼 가능성을 점검해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '신원 특정 — 익명이라도 어떻게 추적되나',
        content:
          '<p><strong style="color:#1e3a5f">익명 게시판이라도 통신자료·압수영장으로 가입자 정보가 특정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>통신자료제공요청</strong> — 검·경이 회사명·게시판 운영사에 가입자 정보 요청.</li>\n<li><strong>IP·접속기록</strong> — 회사 와이파이·자택 IP가 특정 ID와 매칭되면 신원 추정.</li>\n<li><strong>본인 명의 가입</strong> — 휴대폰 인증으로 가입한 계정은 통상 특정이 어렵지 않습니다.</li>\n<li><strong>대체 다툼 포인트</strong> — 신원 특정 단계의 절차적 하자도 함께 점검.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가입정보·접속 IP가 본인이 아닐 가능성이 있으면 통신자료의 정확성도 다툴 여지가 있습니다.</blockquote>',
      },
      {
        title: '합의·삭제·반의사불벌 — 종결 카드 정리',
        content:
          '<p><strong style="color:#1e3a5f">정보통신망법 제70조 명예훼손은 반의사불벌죄로 1심 판결 전 합의가 가능합니다(같은 법 제70조 제3항).</strong></p>\n<ul>\n<li><strong>합의금 시세</strong> — 단발성 댓글·반박글이면 50~200만 원선이 일반적, 조회수·확산 정도에 따라 가변.</li>\n<li><strong>자진 삭제 + 사과</strong> — 합의 조건으로 본인 게시글 전체 삭제 + 절제된 사과 표현.</li>\n<li><strong>재게시 금지 약정</strong> — "동일·유사 내용 재게시 시 위약금" 조항 포함 검토.</li>\n<li><strong>모욕죄 분리 검토</strong> — 명예훼손은 합의돼도 모욕죄(형법 제311조)는 친고죄라 별도 고소 가능성 점검.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합의 시 "허위사실 인정" 문구는 가급적 피하고, "표현 수위가 부적절했음을 사과한다" 정도로 다듬는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망법 명예훼손의 비방 목적과 공공의 이익',
        summary:
          '대법원 2022도699 사건(대법원, 2024.01.04 선고)에서 법원은 정보통신망법 제70조 제1항 명예훼손죄에서 "비방할 목적"과 "사회적 평가 저하"는 별개 구성요건이고, 적시된 사실이 공공의 이익에 관한 것이거나 자기 권리를 방어하기 위한 것이면 비방 목적이 부정될 수 있다고 판시했습니다.',
        takeaway: '본인을 향한 공격에 한정된 반박이라면 "비방 목적" 부정 다툼이 가능하므로 의견서에 반론 동기를 명확히 기재하세요.',
      },
    ],
    faq: [
      {
        question: '먼저 욕을 한 사람은 처벌 안 되고 저만 처벌받는 건 부당한 것 같은데요',
        answer:
          '<strong>맞고소(쌍방 고소)가 가능합니다.</strong> 원글의 내용·표현이 본인을 특정한 모욕·명예훼손에 해당할 소지가 있다면 별도 고소장으로 다투세요.',
      },
      {
        question: '댓글 한 줄도 명예훼손이 될 소지가 있나요?',
        answer:
          '<strong>한 줄이라도 특정인을 향해 사실·허위 적시 + 공연성이 인정되면 성립할 수 있습니다.</strong> 다만 가치판단·모욕적 단어 단발은 명예훼손보다 모욕죄로 분류될 가능성이 큽니다.',
      },
      {
        question: '게시글을 자진 삭제하면 처벌이 가벼워지나요?',
        answer:
          '<strong>자진 삭제는 양형에 유리한 정상참작 사유로 평가될 수 있습니다.</strong> 다만 삭제 전 캡처가 이미 있는 경우 증거 자체는 그대로 사용됩니다.',
      },
      {
        question: '익명이라도 회사·동료가 알아챌까봐 걱정인데요',
        answer:
          '<strong>수사 과정에서 가입자 정보·IP가 특정되며, 신원이 회사에 알려질 가능성도 있습니다.</strong> 합의로 종결하면 외부 노출을 줄일 수 있어요.',
      },
      {
        question: '공익적 폭로라고 주장할 수 있나요?',
        answer:
          '<strong>업계 관행·소비자 정보 공유 등 공익성 있는 사안이라면 가능합니다.</strong> 다만 사적 분쟁에 가까운 반박이라면 공익성이 인정되기 어려울 수 있어요.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 비방 목적 다툼', href: '/guide/defamation/defamation-purpose-of-slander-defense' },
      { label: '온라인 게시글 임시조치', href: '/guide/defamation/defamation-online-post-deletion-request-procedure' },
      { label: '익명 게시자 신원 특정', href: '/guide/defamation/defamation-anonymous-post-writer-identification' },
      { label: '명예훼손 합의금 시세', href: '/guide/defamation/defamation-settlement-amount-guide' },
      { label: '모욕죄와 명예훼손의 차이', href: '/guide/defamation/defamation-insult-difference' },
    ],
  },

  // ─── 3. defamation / doctor-malpractice-review ───
  {
    domain: 'defamation',
    slug: 'defamation-doctor-malpractice-review',
    keyword: '의사 환자 후기 반론 명예훼손',
    questionKeyword: '환자가 올린 의료사고 의혹 글에 댓글·블로그로 반론했더니 환자가 명예훼손으로 신고했어요',
    ctaKeyword: '의사 환자 후기 반론 방어 점검',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '의사 환자 후기 반론 명예훼손 4가지 방어 포인트 | 로앤가이드',
      description:
        '환자 의료사고 의혹 글에 반론했다가 명예훼손 혐의를 받고 있다면 표현 수위·진료 사실 입증·환자 식별 정보 노출 3가지를 점검하는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"환자가 의료사고라며 SNS에 올린 글에 사실 관계를 바로잡으려 댓글·블로그로 반론했는데 명예훼손으로 신고당했다"는 의료인의 사연이 늘고 있습니다. 의료법 제19조의 비밀유지의무가 작동하는 영역이라 환자가 먼저 공개한 영역에 한정 반론하더라도 진료기록·식별정보를 함께 공개하면 별개의 위법 소지가 발생할 수 있습니다. 혐의를 받고 있다면 환자 식별 가능 정보 포함 여부와 표현 수위부터 점검하고 다음 4단계로 정리하세요.</p>',
    sections: [
      {
        title: '반론의 위험 — 의료인이 쉽게 빠지는 함정',
        content:
          '<p><strong style="color:#1e3a5f">환자가 먼저 공개했더라도 의료인의 반론은 의료법·개인정보법·명예훼손 3중 위험을 검토해야 합니다.</strong></p>\n<ul>\n<li><strong>진료기록 공개</strong> — 환자 동의 없이 진단명·수술기록을 게시하면 의료법 제19조 위반 소지.</li>\n<li><strong>환자 식별 정보</strong> — 이니셜·진료일자·연령대 조합으로 특정되면 별개 명예훼손 위험.</li>\n<li><strong>표현 수위</strong> — "거짓 환자"·"악성 민원" 같은 단정은 모욕·역명예훼손 위험.</li>\n<li><strong>공익성 한계</strong> — 사적 분쟁에 가까운 반론은 공익성 인정이 어려울 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 환자가 먼저 공개했다고 해서 의료인이 진료기록을 자유롭게 공개할 권한을 얻는 것은 아닙니다.</blockquote>',
      },
      {
        title: '4단계 대응 — 신고 통보 후 정돈할 것',
        content:
          '<p><strong style="color:#1e3a5f">반론 게시물 자체와 진료기록 공개 범위를 분리해 점검해야 합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 본인 게시물 캡처 보존</strong> — 댓글·블로그·SNS 본인 작성분 일자·전문 정리.</li>\n<li><strong>2단계 — 환자 식별 정보 점검</strong> — 진료일·진단명·연령·증상 조합으로 특정 가능한지 점검 후 자진 수정·삭제.</li>\n<li><strong>3단계 — 진료 사실 근거 확보</strong> — 진료차트·동의서·CCTV 등 사실 근거를 별도 보관(공개는 별개 문제).</li>\n<li><strong>4단계 — 의견서 제출</strong> — 정당한 반론 + 환자 비식별 + 진실 항변을 묶어 무혐의·기소유예 의견 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">반론 게시물에 환자 식별 정보·모욕적 표현이 들어 있는지, AI가 문장별 위험도를 점검해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '진실 항변 — 의료 분쟁에서 자주 인정되는 한계',
        content:
          '<p><strong style="color:#1e3a5f">사실이고 공공의 이익을 위한 것이면 형법 제310조 위법성 조각 검토가 가능합니다.</strong></p>\n<ul>\n<li><strong>진료 사실 일치</strong> — 차트·검사결과·수술기록과 게시 내용이 일치해야 진실 항변 가능.</li>\n<li><strong>공익 vs 자기방어</strong> — 다른 환자 보호 목적이면 공익성, 본인 평판 방어 목적이면 자기방어 항변.</li>\n<li><strong>가치판단의 영역</strong> — "최선을 다했다"는 평가형 진술은 명예훼손 구성요건과 거리.</li>\n<li><strong>표현 방법의 적정성</strong> — 사실 위주·감정 절제 + 환자 비식별 표현이 항변 인용에 유리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 환자 동의를 받아 의료광고심의를 거친 사례로 게시하는 것이 안전한 선택지입니다.</blockquote>',
      },
      {
        title: '합의 + 의료분쟁조정 병행 — 두 갈래 종결 카드',
        content:
          '<p><strong style="color:#1e3a5f">의료 분쟁은 한국의료분쟁조정중재원(K-Medi)에서 90~120일 내 조정이 가능해 형사·민사 동시 종결을 노릴 수 있습니다.</strong></p>\n<ul>\n<li><strong>형사 합의</strong> — 정보통신망법 제70조 반의사불벌, 1심 판결 전 처벌불원서로 공소기각.</li>\n<li><strong>의료조정중재원</strong> — 진료 적정성·합의금 일괄 합의, 신청일부터 약 60일 내 1차 결정.</li>\n<li><strong>게시물 삭제 합의</strong> — 환자 측 원글 + 본인 반론 동시 삭제 약정으로 위험 차단.</li>\n<li><strong>합의금 시세</strong> — 단발성 게시·식별 정보 한정적이면 100~300만 원선, 진료 과실 인정 시 별도.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 형사 합의 후에도 의료법 제19조 비밀유지의무 위반 별도 고발 가능성이 남아 식별 정보 삭제는 가능한 한 빨리 진행하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망법 명예훼손의 비방 목적·공공의 이익 판단',
        summary:
          '대법원 2022도699 사건(대법원, 2024.01.04 선고)에서 법원은 정보통신망법 제70조 제1항 명예훼손죄에서 "비방할 목적"은 별개 구성요건으로, 적시 사실이 공공의 이익에 관한 것이거나 자기 권리·평판을 방어하기 위한 부수적 동기가 주된 것이면 비방 목적이 부정될 수 있다고 판시했습니다.',
        takeaway: '환자 글에 대한 한정 반론이라면 "비방 목적" 부정 다툼이 가능하므로 반론 동기와 표현 절제 자료를 의견서에 첨부하세요.',
      },
    ],
    faq: [
      {
        question: '환자가 먼저 SNS에 글을 올렸는데도 제가 반론한 게 명예훼손이 될 소지가 있나요?',
        answer:
          '<strong>반론 자체는 사회상규에 위배되지 않을 여지가 있습니다.</strong> 다만 반론 과정에서 환자 식별 정보·진료기록을 노출하면 별개의 위법 소지가 발생할 수 있어요.',
      },
      {
        question: '진료차트를 사진 올려 반박해도 되나요?',
        answer:
          '<strong>의료법 제19조 비밀유지의무 위반에 해당할 소지가 있습니다.</strong> 환자 동의 없이 진료기록을 공개하면 형사 처벌 + 의료법 제재가 별도로 진행될 수 있어요.',
      },
      {
        question: '이니셜만 썼는데도 환자가 자신을 특정했다고 합니다',
        answer:
          '<strong>이니셜 + 진료일 + 시술명 조합이면 특정 가능성이 인정될 수 있습니다.</strong> 비식별화는 단순 익명화 이상으로 충분히 일반화돼야 합니다.',
      },
      {
        question: '병원 측이 의료분쟁조정중재원으로 가자고 합니다',
        answer:
          '<strong>형사·민사를 한 번에 정리할 수 있어 일반적으로 유리한 선택지입니다.</strong> 다만 조정 결정 수용 시 형사 처벌불원서 + 게시물 삭제 약정을 동시 처리하세요.',
      },
      {
        question: '병원 변호사 없이 혼자 대응해도 되나요?',
        answer:
          '<strong>의료법·개인정보법·명예훼손이 동시 적용되는 사안은 변호사 상담을 권장합니다.</strong> 첫 진술 전에 표현 수위·식별 정보 점검을 함께 진행하는 것이 안전합니다.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '의료기관 후기 명예훼손 방어', href: '/guide/defamation/defamation-medical-review-sued-response' },
      { label: '진실한 사실 적시 항변', href: '/guide/defamation/defamation-truth-public-interest' },
      { label: '명예훼손 비방 목적 다툼', href: '/guide/defamation/defamation-purpose-of-slander-defense' },
      { label: '온라인 게시글 삭제 요청 절차', href: '/guide/defamation/defamation-online-post-deletion-request-procedure' },
      { label: '경찰 조사 출석 전 점검', href: '/guide/defamation/defamation-police-investigation-prep' },
    ],
  },

  // ─── 4. jeonse / tax-arrears-priority-payment ───
  {
    domain: 'jeonse',
    slug: 'jeonse-tax-arrears-priority-payment',
    keyword: '임대인 세금 체납 보증금',
    questionKeyword: '임대인이 세금을 체납해서 집이 경매로 넘어가는데 보증금을 받을 수 있나요?',
    ctaKeyword: '체납 임대인 우선변제 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임대인 세금 체납 보증금 4가지 우선변제 점검 | 로앤가이드',
      description:
        '임대인 종부세·재산세 체납으로 경매·공매가 진행될 때 보증금 우선변제 순위와 당해세 한도, 임차권등기 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"임대인이 종합부동산세를 체납해 집이 공매로 넘어간다는 통지를 받았다"는 사연이 늘고 있습니다. 보증금은 주택임대차보호법상 우선변제권으로 보호되지만, 국세·지방세 중 "당해세"는 보증금보다 우선할 수 있어 단순히 대항력만 갖춘다고 안전하지 않습니다. 다만 2023년 말 개정으로 임차인 보증금이 당해세보다 먼저 변제되는 한도가 명확해져 보호 폭이 넓어졌습니다. 통지를 받은 즉시 다음 4단계로 정리해 보증금 회수 가능성부터 점검하세요.</p>',
    sections: [
      {
        title: '확인할 4가지 — 보증금 회수 가능성 점검',
        content:
          '<p><strong style="color:#1e3a5f">대항력·확정일자·당해세·보증보험 4가지 축으로 자료를 모으세요.</strong></p>\n<ul>\n<li><strong>대항력 + 확정일자</strong> — 전입신고 + 점유 + 확정일자 3요건이 모두 갖춰진 시점이 우선변제 기준일.</li>\n<li><strong>당해세 vs 임차보증금</strong> — 2023년 말 개정 국세기본법 제35조에 따라 임차인 보증금은 일정 한도까지 당해세보다 먼저 변제될 수 있음.</li>\n<li><strong>등기부 갑·을구</strong> — 가압류·근저당·체납공시 등 선순위 권리 시점 확인.</li>\n<li><strong>보증보험 가입 여부</strong> — HUG 전세보증금반환보증·SGI 가입자라면 별도 청구 절차로 빠른 회수 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 등기부등본 + 국세 체납내역 + 임대차계약서 3종을 한 번에 정리하면 우선순위 판정이 빠릅니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 통지 직후 해야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">공매·경매 시작 전부터 임차권등기 + 배당요구 + 보증보험 청구 3개 트랙을 동시에 가동하세요.</strong></p>\n<ol>\n<li><strong>1단계 — 등기부·체납자료 확보</strong> — 등기부등본·체납액 공시·과세관청 공문을 확보해 우선순위 판정.</li>\n<li><strong>2단계 — 임차권등기명령 신청</strong> — 보증금 미반환 + 계약 종료 상태면 관할법원에 임차권등기명령(주임법 제3조의3) 신청, 주민등록 이전해도 대항력 유지.</li>\n<li><strong>3단계 — 배당요구</strong> — 경매 배당요구 종기까지 권리신고서·확정일자부 임대차계약서 사본 제출.</li>\n<li><strong>4단계 — HUG 보증 청구 검토</strong> — HUG 전세금반환보증 가입자라면 보증채무이행 청구로 빠른 회수, HUG가 대위해 임대인에 구상.</li>\n<li><strong>5단계 — 전세사기특별법 검토</strong> — 임대인 다수 보유 + 체납 + 보증금 반환 회피 정황 시 특별법 피해자 인정 신청.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">대항력·확정일자·당해세 한도를 입력하면 AI가 보증금 회수 가능 액수와 우선순위를 추정해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '당해세 우선 한도 — 2023년 말 개정 핵심',
        content:
          '<p><strong style="color:#1e3a5f">국세기본법 제35조·지방세기본법 제71조 개정으로 임차인 보증금이 당해세보다 먼저 변제될 수 있는 범위가 넓어졌습니다.</strong></p>\n<ul>\n<li><strong>당해세 정의</strong> — 그 부동산에 부과된 종부세·재산세·종합소득세 일부 등.</li>\n<li><strong>임차인 우선 한도</strong> — 임차인이 확정일자를 갖춘 후 법정기일이 도래한 당해세에 대해, 보증금 중 일정액이 우선.</li>\n<li><strong>법정기일 기준</strong> — 임차인 확정일자 < 당해세 법정기일이어야 임차인이 우선.</li>\n<li><strong>잔여 당해세</strong> — 우선 변제 한도를 넘어선 부분은 여전히 당해세가 우선될 수 있어 잔액 회수 못 할 위험.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 관할 세무서·구청에 "법정기일 확인"을 요청하면 우선순위가 명확해집니다.</blockquote>',
      },
      {
        title: '회수 결과 — 배당·보증·구상의 흐름',
        content:
          '<p><strong style="color:#1e3a5f">경매 배당 + HUG 보증 + 전세사기특별법 3개 경로 중 본인 상황에 맞는 조합을 선택하세요.</strong></p>\n<ul>\n<li><strong>경매 배당</strong> — 매각대금에서 우선변제 순서에 따라 배당, 통상 신청~배당 6~12개월.</li>\n<li><strong>HUG 보증 이행</strong> — 가입자라면 가장 빠른 경로, 보증사가 대위 후 임대인에 구상.</li>\n<li><strong>전세사기특별법 지원</strong> — 피해자 인정 시 우선매수권·세금 감면·저리 대출 지원.</li>\n<li><strong>잔여 채권 별도 청구</strong> — 배당 부족분은 임대인 상대 보증금 반환 소송으로 별도 회수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 임차권등기 없이 이사·전입 이전하면 대항력이 상실될 소지가 있어, 임차권등기 등록 확인 후 이사를 진행하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차인의 대항력·우선변제권 상실 여부',
        summary:
          '대법원 2025다213466 사건(대법원, 2026.01.08 선고)에서 법원은 임차인이 임차주택의 소유권을 취득한 경우 주택임대차보호법상 대항력과 우선변제권이 어떻게 처리되는지 판단하면서, 임차인의 권리 보호 범위를 임대차 관계의 실질에 따라 살펴야 한다고 판시했습니다.',
        takeaway: '경매 진행 중에도 임차인의 대항력·우선변제권 요건이 그대로 유지되는지 시점별로 점검하면 회수 가능성을 높일 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '확정일자가 종부세 부과일보다 빠르면 원칙적으로 보증금이 먼저 변제되나요?',
        answer:
          '<strong>당해세 법정기일과 임차인 확정일자 시점 비교가 핵심입니다.</strong> 확정일자가 빠르면 우선변제 가능성이 크지만, 한도 규정도 함께 점검하세요.',
      },
      {
        question: '임차권등기는 언제 신청해야 하나요?',
        answer:
          '<strong>계약 종료 + 보증금 미반환 상태가 되면 즉시 신청 가능합니다.</strong> 신청 후 등기 완료까지 통상 2~4주 소요되고, 등기 완료 후 이사·전출하면 대항력이 유지됩니다.',
      },
      {
        question: '경매 배당요구 시점을 놓치면 어떻게 되나요?',
        answer:
          '<strong>배당요구 종기까지 신고하지 않으면 우선변제권을 가지더라도 배당에서 제외될 수 있습니다.</strong> 통지 즉시 법원 사건검색으로 종기 확인 후 배당요구를 진행하세요.',
      },
      {
        question: 'HUG 보증 가입자도 임차권등기를 해야 하나요?',
        answer:
          '<strong>보증사 청구와 별개로 등기로 권리를 보전해두는 것이 안전합니다.</strong> HUG 청구 절차상 임차권등기 또는 임차주택 점유 유지가 요구될 수 있어요.',
      },
      {
        question: '임대인이 다수 주택을 가진 의심 전세사기 정황이면 어떻게 하나요?',
        answer:
          '<strong>전세사기피해자 결정 신청이 가능합니다.</strong> 피해자 인정 시 우선매수권·저리 대출·법률지원이 함께 제공됩니다.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '임차권등기명령 절차', href: '/guide/jeonse/jeonse-lease-registration-procedure' },
      { label: '전세보증금 반환 소송', href: '/guide/jeonse/jeonse-deposit-return-lawsuit' },
      { label: 'HUG 보증보험 청구 절차', href: '/guide/jeonse/jeonse-hug-insurance-claim' },
      { label: '경매 시 배당요구 절차', href: '/guide/jeonse/jeonse-auction-distribution-claim' },
      { label: '전세사기 피해자 신청', href: '/guide/jeonse-fraud/jeonse-fraud-victim-application' },
    ],
  },

  // ─── 5. jeonse / monthly-renewal-cap ───
  {
    domain: 'jeonse',
    slug: 'jeonse-monthly-renewal-cap',
    keyword: '월세 갱신 인상 한도 5%',
    questionKeyword: '월세 계약갱신요구권을 행사했는데 임대인이 5% 넘게 올려달라고 해요',
    ctaKeyword: '월세 갱신 인상 한도 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '월세 갱신 인상 5가지 한도 점검 포인트 | 로앤가이드',
      description:
        '월세 계약갱신 시 5% 한도와 보증금-월세 전환율 상한, 임대인의 한도 초과 요구에 대응하는 5가지 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"월세 계약갱신요구권을 썼는데 임대인이 10만 원 더 올려달라고 한다"는 사연이 자주 들어옵니다. 주택임대차보호법 제7조에 따르면 갱신 시 차임·보증금 증액 청구는 약정 차임·보증금의 20분의 1(=5%)을 초과할 수 없습니다. 또 보증금을 월세로 전환할 때 적용되는 전환율도 같은 법 제7조의2에 따라 상한이 정해져 있어, 임대인의 일방적 인상 요구에 그대로 응할 필요가 없습니다. 다음 5가지로 점검해 본인이 동의하지 않을 권리부터 확보하세요.</p>',
    sections: [
      {
        title: '인상 한도 5%의 작동 원리',
        content:
          '<p><strong style="color:#1e3a5f">갱신 차임·보증금 증액은 5%(20분의 1)이 상한이며, 그 안에서도 합의가 필요합니다.</strong></p>\n<ul>\n<li><strong>적용 시점</strong> — 계약갱신요구권을 행사해 갱신된 계약(주임법 제6조의3) 또는 묵시적 갱신 후 증액 청구.</li>\n<li><strong>5% 한도</strong> — 약정 차임 또는 보증금의 20분의 1을 초과하는 증액은 임차인이 거부 가능.</li>\n<li><strong>지자체 조례 한도</strong> — 시·도 조례로 5%보다 낮게 정한 곳도 있음(예: 서울 일부 시기).</li>\n<li><strong>증액 합의의 효력</strong> — 한도 내라도 임차인 동의가 없으면 자동 인상되지 않습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 5%는 상한이지 자동 적용이 아니며, 한도 초과 합의는 초과 부분만 무효로 평가될 수 있습니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 임대인이 한도 초과 요구할 때',
        content:
          '<p><strong style="color:#1e3a5f">한도 초과 요구는 거부 권리부터 확보하고 그 다음에 협의에 들어가야 합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 갱신요구 의사 명확화</strong> — 만료 6개월~2개월 전, 내용증명·문자로 갱신요구권 행사 통지.</li>\n<li><strong>2단계 — 5% 한도 명시 통지</strong> — "주임법 제7조에 따라 증액 청구는 5%를 초과할 수 없다"는 점을 답변에 포함.</li>\n<li><strong>3단계 — 보증금-월세 전환율 점검</strong> — 임대인이 보증금을 월세로 돌리려 하면 같은 법 제7조의2 전환율 상한 점검.</li>\n<li><strong>4단계 — 갈등 시 분쟁조정위원회</strong> — 주택임대차분쟁조정위원회(시·도청)에 조정 신청, 신청일부터 60일 내 조정안.</li>\n<li><strong>5단계 — 차임증감 청구의 소</strong> — 한도 초과 일방 인상이 강행되면 법원에 차임증감청구의 소(주임법 제7조 제2항)로 다툼.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">현재 보증금·월세를 입력하면 AI가 5% 한도와 전환율 상한을 자동 계산해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '보증금-월세 전환율 상한',
        content:
          '<p><strong style="color:#1e3a5f">보증금을 월세로 전환할 때 적용되는 전환율은 주임법 제7조의2에 따라 상한이 정해져 있습니다.</strong></p>\n<ul>\n<li><strong>전환율 산식</strong> — 보증금 일부를 월세로 전환할 때 곱하는 비율, 한국은행 기준금리 + 대통령령 비율 중 낮은 쪽.</li>\n<li><strong>최근 한도</strong> — 기준금리 변동에 따라 변하지만, 일반적으로 5~6% 수준에서 상한 형성(시기별 확인 필요).</li>\n<li><strong>위반 시 효과</strong> — 상한 초과 부분은 무효로 평가되어 임차인이 차액 반환 청구 가능.</li>\n<li><strong>점검 자료</strong> — 한국은행 기준금리·국토부 안내문·임대차분쟁조정위원회 자료로 시기별 한도 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 전환율 상한은 시기별로 변하므로 갱신 시점의 한국은행 기준금리를 함께 확인하세요.</blockquote>',
      },
      {
        title: '회수·정정 — 이미 더 낸 차액의 처리',
        content:
          '<p><strong style="color:#1e3a5f">임대인 요구에 응해 5% 초과 또는 전환율 상한 초과로 더 낸 차임·월세는 부당이득 반환 청구 대상이 될 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>차액 계산</strong> — 한도 내 차임 vs 실제 지급 차임의 월별 차액 합계.</li>\n<li><strong>증거</strong> — 갱신 전 계약서·갱신 후 합의서·이체 내역·영수증.</li>\n<li><strong>청구 절차</strong> — 내용증명 → 분쟁조정위 → 부당이득반환청구의 소(소액 사건 가능).</li>\n<li><strong>소멸시효</strong> — 부당이득 반환 채권은 일반적으로 10년이지만, 사안에 따라 단기소멸시효 적용 가능성도 점검.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 임대인이 갱신 거절 + 명도 압박을 함께 한다면 갱신요구권 행사 통지를 내용증명으로 별도 보내는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임대차계약의 갱신과 차임 증액',
        summary:
          '대법원 2024다315046 사건(대법원, 2025년 선고)에서 법원은 임대차계약이 갱신되었는지 여부와 차임 증액 청구의 효력 범위를 다투면서, 갱신된 임대차에서 약정 차임·보증금의 증감 청구는 법령상 한도 안에서 이루어져야 한다는 취지로 판시했습니다.',
        takeaway: '갱신된 계약에서 5% 한도를 넘는 일방적 증액은 인정되지 않을 수 있으므로 한도 산식부터 명확히 정리하세요.',
      },
    ],
    faq: [
      {
        question: '임대인이 "월세는 5% 한도 적용 안 된다"고 합니다',
        answer:
          '<strong>월세도 차임에 해당해 5% 한도가 적용됩니다.</strong> 주임법 제7조는 "차임 또는 보증금"에 동일하게 적용된다고 규정하고 있어요.',
      },
      {
        question: '갱신요구권을 안 쓰고 묵시적 갱신된 경우에도 5% 한도가 적용되나요?',
        answer:
          '<strong>묵시적 갱신 중 임대인의 증액 청구도 5% 한도 적용을 받습니다.</strong> 묵시적 갱신은 종전 조건 그대로 갱신되는 것이 원칙이에요.',
      },
      {
        question: '한도 초과로 합의해 더 낸 돈은 돌려받을 수 있나요?',
        answer:
          '<strong>초과 부분은 무효로 평가될 소지가 있어 부당이득 반환 청구 대상이 될 수 있습니다.</strong> 차액·기간·이체 내역을 정리해 내용증명부터 보내세요.',
      },
      {
        question: '임대인이 5% 안 받아주면 안 나가달라고 합니다',
        answer:
          '<strong>갱신요구권을 적법하게 행사했다면 임대인은 정당한 사유 없이 갱신을 거절할 수 없습니다(주임법 제6조의3).</strong> 거절 사유 점검이 우선이에요.',
      },
      {
        question: '분쟁조정위원회는 비용이 드나요?',
        answer:
          '<strong>주택임대차분쟁조정위원회는 신청 비용이 무료이거나 저렴한 편입니다.</strong> 60일 내 조정안이 나오므로 소송 전 우선 시도해보는 것이 안전해요.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '계약갱신요구권 행사 절차', href: '/guide/jeonse/jeonse-renewal-request-procedure' },
      { label: '주택임대차분쟁조정위원회 신청', href: '/guide/jeonse/jeonse-dispute-mediation-application' },
      { label: '묵시적 갱신과 종전 조건', href: '/guide/jeonse/jeonse-implied-renewal-terms' },
      { label: '월세 보증금 전환율 계산', href: '/guide/jeonse/jeonse-deposit-monthly-conversion-rate' },
      { label: '차임증감 청구의 소', href: '/guide/jeonse/jeonse-rent-adjustment-lawsuit' },
    ],
  },

  // ─── 6. child-support / shared-custody-payment ───
  {
    domain: 'child-support',
    slug: 'child-support-shared-custody-payment',
    keyword: '공동양육 양육비 산정',
    questionKeyword: '공동양육으로 시간을 나눠 키우는데 양육비를 어떻게 산정하나요?',
    ctaKeyword: '공동양육 양육비 산정 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '공동양육 양육비 5가지 산정 포인트 | 로앤가이드',
      description:
        '부부가 시간을 나눠 자녀를 키우는 공동양육에서 양육비산정기준표 적용 + 양육시간 비율·소득 차이 반영 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"한 주는 엄마, 한 주는 아빠가 키우는 공동양육인데 양육비를 누가 얼마나 내야 하나"라는 상담이 늘고 있습니다. 서울가정법원 양육비산정기준표는 양육친 1명이 자녀를 키우는 전제로 만들어져, 공동양육은 양육시간 비율과 부모 소득 차이를 반영해 별도로 조정해야 합니다. 협의 또는 가정법원 심판으로 합리적 분담안을 도출하려면 먼저 다음 5가지를 점검하세요.</p>',
    sections: [
      {
        title: '공동양육 양육비 — 기본 원칙 5가지',
        content:
          '<p><strong style="color:#1e3a5f">양육비산정기준표 기본 금액에서 양육시간 비율·소득 차이를 반영해 조정합니다.</strong></p>\n<ul>\n<li><strong>표준 양육비 확인</strong> — 부모 합산 소득 + 자녀 연령 구간으로 양육비산정기준표 기본 금액 산출.</li>\n<li><strong>양육시간 비율</strong> — 일주일·월간 자녀와 함께 보내는 시간 비율을 정량화(예: 50:50, 60:40).</li>\n<li><strong>부모 소득 비율</strong> — 양 부모 합산 소득에서 각자의 비율(예: 60:40)을 산정.</li>\n<li><strong>실비 분담 항목</strong> — 학원비·의료비·여행비 등 큰 지출은 별도 분담률 합의.</li>\n<li><strong>합의 우선 → 심판 보충</strong> — 협의가 어려우면 가사조사 + 양육비 심판으로 결정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "양육시간이 비슷해도 소득 차가 크면 고소득자가 차액을 더 분담"하는 것이 일반적입니다.</blockquote>',
      },
      {
        title: '실제 산정 예시 — 시간 50:50, 소득 60:40인 경우',
        content:
          '<p><strong style="color:#1e3a5f">기준표 기본 금액 × 소득 비율 - 본인이 직접 부담한 양육시간 비용 = 상대방에 줄 보충금</strong></p>\n<ul>\n<li><strong>예시 가정</strong> — 자녀 1명, 부모 합산 월 600만 원, 기준표 기본 양육비 월 130만 원.</li>\n<li><strong>고소득자 부담</strong> — 합산 소득 비율 60% × 130만 원 = 78만 원이 고소득자가 자녀에 책임지는 분담.</li>\n<li><strong>실 부담 보정</strong> — 양육시간이 50:50이라 실제 직접 부담은 65만 원 가정 시, 차액 13만 원을 상대방에 송금.</li>\n<li><strong>협의 시 변동성</strong> — 학원·과외·의료비를 별도 합산하면 송금액이 달라질 수 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 산정기준표는 가정법원·서울가정법원 양육비계산기에서 자녀 연령·합산소득 입력으로 즉시 확인할 수 있습니다.</blockquote>',
      },
      {
        title: '5단계 절차 — 협의에서 심판까지',
        content:
          '<p><strong style="color:#1e3a5f">분쟁이 커지기 전 협의·조정 단계에서 정리하는 것이 비용·시간상 유리합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 양육시간 기록</strong> — 캘린더·일지로 한 달간 실제 양육시간을 정량화.</li>\n<li><strong>2단계 — 소득 자료 교환</strong> — 근로소득원천징수영수증·종합소득세 신고서 등 객관 자료 교환.</li>\n<li><strong>3단계 — 산정안 합의</strong> — 기본 금액 + 양육시간 비율 + 실비 분담을 정리한 합의서 작성.</li>\n<li><strong>4단계 — 가사조정 신청</strong> — 협의 어려우면 가정법원 가사조정 신청, 조정성립 시 집행권원으로 활용.</li>\n<li><strong>5단계 — 양육비 심판</strong> — 조정 불성립 시 양육비 심판, 가사조사관이 양육시간·소득을 조사해 결정.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">자녀 연령·합산 소득·양육시간 비율을 입력하면 AI가 양육비 분담안을 시뮬레이션해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '실비 분담 — 학원·의료비·교통비 처리',
        content:
          '<p><strong style="color:#1e3a5f">기준표 기본 금액과 별도로 큰 실비 항목은 비율 합의하는 것이 일반적입니다.</strong></p>\n<ul>\n<li><strong>학원·과외</strong> — 본인이 결제 후 영수증 첨부해 절반·소득 비율로 정산.</li>\n<li><strong>의료비</strong> — 치과·교정·수술 등은 발생 시점에 비율 분담, 영수증 보관 필수.</li>\n<li><strong>여행·체험학습</strong> — 사전 협의 후 결제, 일방 결정 결제는 분담 거부 사유 가능.</li>\n<li><strong>분담률 산식</strong> — 통상 부모 소득 비율과 동일하게 적용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 실비 분담은 합의서·영수증·정산 주기를 명시해두지 않으면 분쟁이 빠르게 커질 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비부담조서와 이행명령의 범위',
        summary:
          '대법원 2025으517 사건(대법원, 2025.05.23 선고)에서 법원은 양육비부담조서에 의해 확정된 양육비 지급 의무 중 미이행 의무의 범위를 넘어서까지 이행명령을 한 것은 위법하다는 취지로 판시했습니다. 합의·심판으로 확정된 양육비 분담의 효력 범위가 명확하다는 점을 보여줍니다.',
        takeaway: '공동양육에서도 합의서·심판으로 양육비 분담을 명확히 확정해두면 이후 이행명령·강제집행 단계가 안정적으로 진행됩니다.',
      },
    ],
    faq: [
      {
        question: '양육시간 50:50인데 양육비를 따로 줘야 하나요?',
        answer:
          '<strong>소득 차이가 크면 고소득자가 차액을 분담하는 것이 일반적입니다.</strong> 양육시간 외에 학원·의료비 같은 실비도 함께 정산해 형평을 맞추세요.',
      },
      {
        question: '서울가정법원 양육비계산기 결과 그대로 적용하면 되나요?',
        answer:
          '<strong>기준표는 양육친 1명을 전제로 만들어져 공동양육은 별도 조정이 필요합니다.</strong> 기본 금액을 출발점으로 양육시간 비율을 곱해 조정하세요.',
      },
      {
        question: '상대방이 양육비 산정 자료를 공유하지 않습니다',
        answer:
          '<strong>가정법원에 사실조회·자료제출명령을 신청할 수 있습니다.</strong> 가사조사관이 소득자료·근로계약서를 직권으로 확인할 수 있어요.',
      },
      {
        question: '공동양육 합의서 효력은 어디까지인가요?',
        answer:
          '<strong>가정법원에서 조정 또는 심판으로 확정되어야 강제집행이 쉽습니다.</strong> 사적 합의만으로는 이행명령·압류 단계에서 절차가 길어질 수 있어요.',
      },
      {
        question: '시간이 지나서 소득 차이가 변했는데 재산정 가능한가요?',
        answer:
          '<strong>사정변경이 있으면 양육비 변경 청구(가사소송법 제2조)로 재산정이 가능합니다.</strong> 소득 변동 자료·자녀 연령 변경을 근거로 신청하세요.',
      },
    ],
    cta: { text: '양육비 산정기준표, AI로 계산해보기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비산정기준표 적용 방법', href: '/guide/child-support/child-support-calculation-table' },
      { label: '양육비 변경 청구 절차', href: '/guide/child-support/child-support-modification-procedure' },
      { label: '양육비 이행명령과 강제집행', href: '/guide/child-support/child-support-enforcement-procedure' },
      { label: '가사조정 신청 절차', href: '/guide/child-support/child-support-family-mediation' },
      { label: '실비 분담 합의서 작성', href: '/guide/child-support/child-support-actual-cost-agreement' },
    ],
  },

  // ─── 7. rehabilitation / card-loan-included ───
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-card-loan-included',
    keyword: '카드론 개인회생 포함',
    questionKeyword: '카드론·현금서비스·리볼빙 빚도 개인회생에 포함되나요?',
    ctaKeyword: '카드론 개인회생 포함 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '카드론·현금서비스 개인회생 5가지 포함 점검 | 로앤가이드',
      description:
        '카드론·현금서비스·리볼빙 채무를 개인회생에 포함시켜 변제 부담을 줄이는 절차와 KLAC 무료 지원 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"카드론·현금서비스 합쳐 6천만 원이 됐는데 회생으로 정리할 수 있나"라는 사연이 잦습니다. 카드론·현금서비스·리볼빙 채무는 모두 무담보채권으로 채무자회생법상 일반 회생채권에 해당해 변제계획에 포함될 수 있습니다. 가용소득(=월 소득 - 생계비)을 36~60개월 분할 변제하고 잔여는 면책되는 구조라, 카드 빚 부담이 큰 분에게 일반적으로 유리한 절차입니다. 다음 5단계로 본인 상황을 점검하고 KLAC(대한법률구조공단) 무료 지원도 활용하세요.</p>',
    sections: [
      {
        title: '카드론·현금서비스 — 회생채권 포함 원리',
        content:
          '<p><strong style="color:#1e3a5f">카드사 채권은 모두 무담보 회생채권에 해당해 채권자목록에 포함시키면 변제계획 적용을 받습니다.</strong></p>\n<ul>\n<li><strong>대상 범위</strong> — 카드론·현금서비스·리볼빙·할부금·연체이자 모두 포함.</li>\n<li><strong>이자 멈춤</strong> — 회생개시결정 시점부터 변제계획 인가 시까지 이자 정지(채무자회생법 제581조).</li>\n<li><strong>변제율</strong> — 가용소득 기준 청산가치 보장 원칙 충족 시 통상 5~30% 수준에서 변제 후 면책.</li>\n<li><strong>채권자목록 누락 위험</strong> — 한 채권자라도 누락되면 그 채권은 면책되지 않으므로 카드 명세서·계약서 전부 정리 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 카드사 청구내역서·연체통지서를 전부 모아 채권자목록에 빠짐없이 기재하는 것이 1순위입니다.</blockquote>',
      },
      {
        title: '5단계 절차 — KLAC 무료 지원 활용',
        content:
          '<p><strong style="color:#1e3a5f">법률구조공단(KLAC)은 일정 소득 이하인 분에게 회생 신청 무료 대리를 제공합니다.</strong></p>\n<ol>\n<li><strong>1단계 — KLAC 상담 예약</strong> — 132번 또는 KLAC 홈페이지에서 무료 상담 신청, 평균 1~3주 내 1차 상담.</li>\n<li><strong>2단계 — 채권자목록 정리</strong> — 신용정보원 채무 조회 + 카드사 거래내역 + 휴대폰 결제 등 누락 없이 정리.</li>\n<li><strong>3단계 — 변제계획안 설계</strong> — 월 소득·생계비·청산가치를 산정해 36~60개월 변제율 시뮬레이션.</li>\n<li><strong>4단계 — 법원 신청·개시결정</strong> — 신청서 + 채권자목록 + 변제계획안 제출, 통상 신청 후 4~8주 내 개시결정.</li>\n<li><strong>5단계 — 변제 + 면책</strong> — 변제계획 인가 후 정해진 기간 변제 후 잔여 채무 면책 결정.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">카드 채무 합계와 월 소득을 입력하면 AI가 변제율·기간을 시뮬레이션해드립니다.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '면책 후 효과 — 카드 사용·신용 회복',
        content:
          '<p><strong style="color:#1e3a5f">면책 결정 후 잔여 카드 채무는 청구 불가, 단 신용회복까지는 시간이 필요합니다.</strong></p>\n<ul>\n<li><strong>면책 효력</strong> — 변제계획 완료 + 면책 결정으로 잔여 채무는 자연채무화, 강제 청구 불가.</li>\n<li><strong>신용정보 등재</strong> — 회생절차 진행·인가·면책 정보가 공공정보로 일정 기간 등재.</li>\n<li><strong>카드 재발급</strong> — 면책 후 일정 기간(통상 5~7년) 동안 신용카드 신규 발급이 제한.</li>\n<li><strong>예금·적금 활용</strong> — 면책 후 체크카드·후불교통카드부터 시작해 신용 회복.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 면책 후 5~7년이 신용회복의 표준 구간이고, 그 안에 연체 없이 체크카드·소액 대출을 정상 상환하면 회복이 빠릅니다.</blockquote>',
      },
      {
        title: '면책 불허 위험 — 미리 점검할 신호',
        content:
          '<p><strong style="color:#1e3a5f">사기적 사용·재산 은닉이 있으면 면책 불허가가 될 소지가 있어 사전 점검이 중요합니다.</strong></p>\n<ul>\n<li><strong>신청 직전 대출·카드 사용</strong> — 신청 6개월 이내 다액 사용·송금 내역은 면책 불허 사유 검토 대상.</li>\n<li><strong>현금화·도박 사용</strong> — 카드깡·도박 결제 등 사기적 사용 정황은 면책 불허 가능성.</li>\n<li><strong>재산 은닉</strong> — 명의 이전·해외 송금·차명 계좌 운용 시 면책 불허 또는 취소 위험.</li>\n<li><strong>성실 변제</strong> — 인가 후 변제계획을 충실히 이행하면 일반적으로 면책 결정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 신청 직전 카드 사용은 가급적 자제하고, 부득이한 사용은 변호사·KLAC와 협의해 사용 내역을 명확히 정리하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 변제계획에 따른 회생채권의 변제 효력',
        summary:
          '대법원 2023다239756 사건(대법원, 2025.12.11 선고)에서 법원은 미확정 회생채권의 변제에 관한 회생계획의 해석이 문제된 사안에서, 회생계획에 정해진 절차와 조건에 따라 변제가 이루어지면 그 효력이 채권 전체에 미친다는 취지로 판시했습니다.',
        takeaway: '카드론·현금서비스 등 회생채권도 변제계획에 정해진 비율·기간대로 변제를 이행하면 잔여는 면책 대상이 됩니다.',
      },
    ],
    faq: [
      {
        question: '리볼빙도 회생에 포함되나요?',
        answer:
          '<strong>리볼빙은 카드사 채권으로 회생채권에 해당해 포함됩니다.</strong> 다만 리볼빙은 이자율이 높아 변제계획 설계 시 우선 정리 대상이 되는 편이에요.',
      },
      {
        question: '카드론 받은 지 얼마 안 됐는데 회생 가능한가요?',
        answer:
          '<strong>최근 사용분은 면책 불허 위험이 있어 면밀히 점검해야 합니다.</strong> 변호사·KLAC와 사용 내역을 정리해 사기적 사용으로 보이지 않도록 입증 자료를 준비하세요.',
      },
      {
        question: '신용정보원 채무 조회로 카드사 외 다른 채무도 다 잡히나요?',
        answer:
          '<strong>일반 금융권 채무는 대부분 잡히지만 개인 간 채무·휴대폰 결제·일부 대부업체는 누락될 수 있습니다.</strong> 본인이 알고 있는 채권자도 함께 정리해 누락을 막으세요.',
      },
      {
        question: 'KLAC 외에 변호사 비용은 얼마쯤 드나요?',
        answer:
          '<strong>일반적으로 200~400만 원선이 시세지만 분할 납부도 가능합니다.</strong> 소득이 낮으면 KLAC·신용회복위원회의 무료·저비용 지원을 우선 검토하세요.',
      },
      {
        question: '회생 신청 사실이 직장에 알려지나요?',
        answer:
          '<strong>법원 절차상 직장에 통지되지는 않지만, 급여 압류 중이면 회생 인가 사실이 공식 통지될 수 있습니다.</strong> 신청 전에 압류·집행 상태를 함께 점검하세요.',
      },
    ],
    cta: { text: '개인회생 신청 자격, AI로 점검하기', link: '/chat?domain=rehabilitation' },
    internalLinks: [
      { label: '개인회생 신청 자격 점검', href: '/guide/rehabilitation/rehabilitation-eligibility-check' },
      { label: '변제계획안 설계 절차', href: '/guide/rehabilitation/rehabilitation-payment-plan-design' },
      { label: '채권자목록 누락 방지', href: '/guide/rehabilitation/rehabilitation-creditor-list-completeness' },
      { label: 'KLAC 무료 회생 지원', href: '/guide/rehabilitation/rehabilitation-klac-free-support' },
      { label: '면책 불허 사유와 대응', href: '/guide/rehabilitation/rehabilitation-discharge-denial-grounds' },
    ],
  },

  // ─── 8. bankruptcy / housewife-no-income-eligibility ───
  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-housewife-no-income-eligibility',
    keyword: '전업주부 개인파산 자격',
    questionKeyword: '소득이 없는 전업주부도 개인파산을 신청할 수 있나요?',
    ctaKeyword: '전업주부 파산 자격 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '전업주부 개인파산 5가지 자격 점검 포인트 | 로앤가이드',
      description:
        '소득 없는 전업주부의 개인파산 신청 자격(지급불능)·면책 가능성과 KLAC 무료 지원 절차 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"카드값·생활비 대출이 쌓였는데 저는 전업주부라 갚을 길이 없다"는 사연이 늘고 있습니다. 채무자회생법 제305조의 지급불능은 "변제기에 도래한 채무를 일반적·계속적으로 변제할 수 없는 상태"를 의미해, 소득이 없는 전업주부도 채무 규모와 재산 상태에 따라 파산 신청이 가능합니다. 다만 배우자 명의 재산은 본인 것이 아니므로 영향이 제한적이지만, 본인 명의 부동산·예금이 있다면 환가 후 배당 절차를 거치게 됩니다. 다음 5단계로 점검하세요.</p>',
    sections: [
      {
        title: '지급불능 — 전업주부도 인정될 수 있는 조건',
        content:
          '<p><strong style="color:#1e3a5f">소득이 없거나 미미하고 본인 명의 재산이 부족하면 지급불능 인정 가능성이 큽니다.</strong></p>\n<ul>\n<li><strong>본인 소득 부재</strong> — 근로소득·사업소득 거의 없음(월 수십만 원 이하).</li>\n<li><strong>본인 명의 재산</strong> — 부동산·예금·자동차 합계가 채무 대비 현저히 부족.</li>\n<li><strong>채무 변제 시도 흔적</strong> — 일부 변제 시도·돌려막기·연체 통지 등 변제 곤란 정황.</li>\n<li><strong>배우자 명의 재산</strong> — 본인 채무에는 직접 책임 없음(공동 명의 또는 사해행위 없는 경우).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 배우자가 잘 산다고 해서 전업주부 본인의 파산이 막히는 것은 아닙니다.</blockquote>',
      },
      {
        title: '5단계 절차 — KLAC 무료 지원 활용',
        content:
          '<p><strong style="color:#1e3a5f">법률구조공단(KLAC)은 소득·재산 일정 이하인 분에게 무료 대리를 제공합니다.</strong></p>\n<ol>\n<li><strong>1단계 — KLAC 상담 예약</strong> — 132번 또는 홈페이지로 무료 상담 신청, 평균 1~3주 내 1차 상담.</li>\n<li><strong>2단계 — 채권자목록·재산목록 정리</strong> — 신용정보원 채무 조회 + 본인 명의 부동산·예금·자동차 정리.</li>\n<li><strong>3단계 — 신청서 제출</strong> — 관할 법원에 파산·면책 동시 신청, 평균 변호사 선임료 100~300만 원선(KLAC 무료 가능).</li>\n<li><strong>4단계 — 파산선고·관재인 선임</strong> — 신청 후 4~8주 내 파산선고, 본인 재산 환가 후 채권자에 배당.</li>\n<li><strong>5단계 — 면책 결정</strong> — 환가·배당 후 면책 심문 거쳐 잔여 채무 면책, 신청부터 6~12개월 소요.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">채무 규모·본인 명의 재산을 입력하면 AI가 파산·면책 가능성을 시뮬레이션해드립니다.</p>\n<a href="/chat?domain=bankruptcy" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '배우자 재산 영향 — 어디까지가 본인의 책임인가',
        content:
          '<p><strong style="color:#1e3a5f">민법상 부부별산제(제830조)에 따라 배우자 명의 재산은 원칙적으로 본인 채무 변제 대상이 아닙니다.</strong></p>\n<ul>\n<li><strong>배우자 단독 명의</strong> — 부동산·예금·차량이 배우자 단독 명의면 본인 파산에 직접 영향 없음.</li>\n<li><strong>공동 명의</strong> — 공동 명의 재산은 지분 비율로 본인 몫이 환가 대상.</li>\n<li><strong>명의신탁·차명</strong> — 본인이 실질적 권리자인 명의신탁 재산은 환가 대상이 될 수 있어 점검 필요.</li>\n<li><strong>사해행위 위험</strong> — 신청 직전 본인 명의 재산을 배우자에게 이전했다면 부인권(채무자회생법 제391조) 행사 대상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 신청 1~2년 전 재산 이전 내역이 있다면 변호사·KLAC와 미리 정리해 사해행위로 보이지 않도록 자료를 준비하세요.</blockquote>',
      },
      {
        title: '면책 후 효과 — 카드·신용·재산 권리 회복',
        content:
          '<p><strong style="color:#1e3a5f">면책 결정 후 잔여 채무는 자연채무화, 신용 회복까지 시간이 필요합니다.</strong></p>\n<ul>\n<li><strong>면책 효력</strong> — 잔여 채무 강제 청구 불가, 추심·압류 종료.</li>\n<li><strong>공공정보 등재</strong> — 파산·면책 정보가 일정 기간(통상 5~7년) 신용정보로 등재.</li>\n<li><strong>자격 제한 해제</strong> — 파산선고 시 일부 자격(공무원·일부 라이선스) 제한이 면책으로 회복.</li>\n<li><strong>재산 분리 명확화</strong> — 면책 후에는 새로 취득한 재산이 본인 명의로 보호됨.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 면책 불허 사유(사기적 사용·재산 은닉)가 있으면 면책 결정이 늦어지거나 거부될 소지가 있어 사전 점검이 중요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 파산절차에서 채무자의 권리·책임 범위',
        summary:
          '대법원 2024마8320 사건(대법원, 2025년 결정)에서 법원은 파산선고 절차의 진행과 관련된 쟁점을 다루면서, 채무자의 재산·책임 범위가 명확히 구분돼야 절차가 안정적으로 진행될 수 있다는 취지의 판단을 보여주었습니다. 본인·배우자 명의 재산의 분리가 파산절차에서도 중요하다는 점을 시사합니다.',
        takeaway: '전업주부 파산에서도 본인 명의 재산 + 배우자 명의 재산을 명확히 구분해 신청하면 면책까지의 절차가 안정적으로 진행됩니다.',
      },
    ],
    faq: [
      {
        question: '소득이 0원인 전업주부도 신청 가능한가요?',
        answer:
          '<strong>소득이 없어도 채무 규모와 본인 재산 상태로 지급불능이 인정되면 가능합니다.</strong> 오히려 회생보다 파산이 일반적으로 적합한 선택지일 수 있어요.',
      },
      {
        question: '배우자에게 알리지 않고 신청할 수 있나요?',
        answer:
          '<strong>본인 명의 채무·재산만으로 진행 가능해 배우자 통지 의무는 없습니다.</strong> 다만 공동 명의 재산이 있으면 절차상 사실이 알려질 수 있어요.',
      },
      {
        question: '본인 명의 부동산·차량이 있으면 원칙적으로 환가되나요?',
        answer:
          '<strong>일정 한도(생활 필수 가재도구·소액 임차보증금 등)는 환가 대상에서 제외됩니다.</strong> 다만 부동산·자동차는 일반적으로 환가 대상이 됩니다.',
      },
      {
        question: '신청 후 카드는 즉시 정지되나요?',
        answer:
          '<strong>파산 신청 사실이 카드사에 알려지면 카드 사용이 정지됩니다.</strong> 신청 전 자동이체 등은 미리 정리해두세요.',
      },
      {
        question: '면책 후 다시 카드 발급이 가능한가요?',
        answer:
          '<strong>면책 후 5~7년 이후 점진적으로 발급이 가능해집니다.</strong> 그동안은 체크카드·후불교통카드를 활용해 신용 회복 기록을 쌓는 것이 효과적이에요.',
      },
    ],
    cta: { text: '파산 면책 가능성, AI로 점검하기', link: '/chat?domain=bankruptcy' },
    internalLinks: [
      { label: '개인파산 신청 자격 점검', href: '/guide/bankruptcy/bankruptcy-eligibility-check' },
      { label: '면책 불허가 사유와 대응', href: '/guide/bankruptcy/bankruptcy-discharge-denial-grounds' },
      { label: 'KLAC 무료 파산 지원', href: '/guide/bankruptcy/bankruptcy-klac-free-support' },
      { label: '채권자목록 누락 방지', href: '/guide/bankruptcy/bankruptcy-creditor-list-completeness' },
      { label: '파산과 회생의 차이 점검', href: '/guide/bankruptcy/bankruptcy-rehabilitation-comparison' },
    ],
  },

  // ─── 9. industrial-accident / commute-delivery-rider ───
  {
    domain: 'industrial-accident',
    slug: 'industrial-accident-commute-delivery-rider',
    keyword: '배달기사 출퇴근 산재',
    questionKeyword: '배달기사인데 출근 중 사고를 당했어요. 산재로 처리되나요?',
    ctaKeyword: '배달기사 통근 산재 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '배달기사 출퇴근 사고 5가지 산재 점검 포인트 | 로앤가이드',
      description:
        '배달기사·라이더의 출퇴근 사고 산재 인정 요건과 특수형태근로종사자 적용 기준, 요양급여 신청 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"배달 출근하다가 빙판에 미끄러져 다쳤다"는 라이더 사연이 적지 않습니다. 산업재해보상보험법은 2018년부터 통상의 출퇴근 재해(같은 법 제37조 제1항 제3호)를 산재로 인정하고 있고, 배달기사는 특수형태근로종사자 또는 노무제공자로 산재보험 적용 대상입니다. 사고 직후부터 7일 이내 의료기관 방문 + 90일 내 요양급여 신청이라는 일정이 있어, 다음 5단계로 정리하지 않으면 인정 시기·금액이 줄어들 수 있습니다.</p>',
    sections: [
      {
        title: '배달기사 산재 — 적용 조건 5가지',
        content:
          '<p><strong style="color:#1e3a5f">배달 플랫폼·중개업체와의 계약 형태에 따라 적용 근거 조항이 달라집니다.</strong></p>\n<ul>\n<li><strong>특수형태근로종사자(특고)</strong> — 산재법 제125조 적용 직종 포함, 배달원·퀵서비스기사 모두 해당.</li>\n<li><strong>노무제공자</strong> — 2023년 시행 산재법 개정으로 플랫폼 노무제공자 범위 확대.</li>\n<li><strong>가입 의무화</strong> — 사업주가 산재보험 가입을 누락해도 본인 신청으로 인정 가능.</li>\n<li><strong>통상의 출퇴근</strong> — 합리적 경로·방법으로 출근·퇴근 중 발생한 사고.</li>\n<li><strong>업무 중 사고</strong> — 배달·콜 수행 중 사고는 업무상재해(같은 법 제37조 제1항 제1호)로 별도 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가입 누락이라도 본인이 산재보험 가입 의제 사실을 입증하면 요양급여를 받을 가능성이 큽니다.</blockquote>',
      },
      {
        title: '5단계 절차 — 사고 직후 ~ 심사까지',
        content:
          '<p><strong style="color:#1e3a5f">7일 이내 의료기관 방문, 90일 내 요양급여 신청이 표준 일정입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고 즉시 의료기관 방문</strong> — 가급적 7일 이내 방문, 진단서·소견서에 사고 일시·경위 명시.</li>\n<li><strong>2단계 — 사고 경위 정리</strong> — 사고 시간·장소·경로·블랙박스·CCTV·동료 진술 시간순 정리.</li>\n<li><strong>3단계 — 요양급여 신청</strong> — 근로복지공단(comwel) 지사에 요양급여 신청서 제출, 사고일부터 가능한 한 빠르게.</li>\n<li><strong>4단계 — 공단 조사·결정</strong> — 통상 30~90일 내 결정, 인정 시 요양비·휴업급여 지급.</li>\n<li><strong>5단계 — 불승인 시 심사·재심사</strong> — 불승인 통지 후 90일 이내 산재심사위원회 심사, 그 결과에 90일 내 산업재해보상보험재심사위 재심사.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">사고 경위·경로·계약 형태를 입력하면 AI가 산재 인정 가능성과 신청 일정을 점검해드립니다.</p>\n<a href="/chat?domain=industrial-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '통상의 경로 — 인정·불인정 사례 정리',
        content:
          '<p><strong style="color:#1e3a5f">"합리적 경로·방법" 여부가 통근재해 인정의 핵심 쟁점입니다.</strong></p>\n<ul>\n<li><strong>인정 사례</strong> — 자택 → 콜 시작 거점, 거점 → 자택 등 일상적 경로의 사고.</li>\n<li><strong>이탈 짧은 우회</strong> — 출근길 편의점·약국 잠시 들른 후 사고는 일반적으로 인정.</li>\n<li><strong>장시간 사적 일</strong> — 친구 만남·취미 활동 후 다시 출근 중 사고는 인정 어려움.</li>\n<li><strong>업무용 차량 vs 사적 차량</strong> — 어느 쪽이든 통상의 경로면 적용, 다만 업무용 차량은 업무 중 재해로도 다툴 여지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사고 직후 휴대폰 위치기록·내비게이션 로그를 보존하면 경로 입증이 쉽습니다.</blockquote>',
      },
      {
        title: '받을 수 있는 보상 — 요양·휴업·장해',
        content:
          '<p><strong style="color:#1e3a5f">산재 인정 시 의료비 + 휴업급여 + 장해급여 + 유족급여까지 단계별 지급됩니다.</strong></p>\n<ul>\n<li><strong>요양급여</strong> — 진료비·입원비·약제비 전액(공단 직접지급).</li>\n<li><strong>휴업급여</strong> — 요양 기간 중 평균임금의 70% 일당으로 지급.</li>\n<li><strong>장해급여</strong> — 치료 종결 후 장해등급에 따라 일시금·연금.</li>\n<li><strong>중복 보상 조정</strong> — 가해자 자동차보험 보상과 산재보상은 일부 조정, 본인이 유리한 순서로 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 자동차보험 합의 후에도 산재 청구는 가능하지만 중복 항목은 조정되므로 합의 전 산재 신청을 먼저 검토하는 것이 일반적으로 유리합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 배달원의 특수형태근로종사자 인정 여부',
        summary:
          '대법원 2016두49372 사건(대법원, 선고)에서 법원은 스마트폰 애플리케이션 배달대행업체의 배달원이 산업재해보상보험법 시행령상 "택배원"에 해당해 특수형태근로종사자로 인정될 수 있다는 취지로 판시했습니다. 배달 플랫폼 종사자에게 산재보험 적용이 확장된다는 의미입니다.',
        takeaway: '배달 플랫폼·중개업체와 계약한 라이더도 특수형태근로종사자로서 통근·업무재해 산재 적용 대상이 될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '사업주가 산재보험에 가입 안 했어도 받을 수 있나요?',
        answer:
          '<strong>특수형태근로종사자는 가입 의무화 대상이라 누락이어도 인정 가능성이 큽니다.</strong> 사업주에는 사후 보험료 추징, 본인은 정상 청구 가능해요.',
      },
      {
        question: '배달 콜이 끝나고 자택으로 가는 길 사고도 산재인가요?',
        answer:
          '<strong>퇴근 중 통상의 경로·방법이면 통근재해로 인정될 수 있습니다.</strong> 합리적 경로 입증이 핵심이에요.',
      },
      {
        question: '본인 과실이 큰 사고도 산재가 되나요?',
        answer:
          '<strong>고의·중과실이 아닌 한 본인 과실이 있어도 산재 인정에 영향이 적습니다.</strong> 다만 음주·신호위반 같은 중대 위반은 감액·불인정 사유 가능성.',
      },
      {
        question: '근로복지공단 결정에 불복하려면 어디로 가야 하나요?',
        answer:
          '<strong>결정 통지 후 90일 이내 산재심사위원회에 심사청구, 그 결정에 90일 내 재심사위 재심사 가능합니다.</strong> 그 후 행정소송도 가능해요.',
      },
      {
        question: '치료비 외 휴업급여는 언제부터 받을 수 있나요?',
        answer:
          '<strong>요양 기간 중 휴업한 날부터 평균임금 70% 일당으로 지급됩니다.</strong> 지급은 산재 인정 결정 후 일괄 지급이 원칙이에요.',
      },
    ],
    cta: { text: '산재 인정 가능성, AI로 점검하기', link: '/chat?domain=industrial-accident' },
    internalLinks: [
      { label: '특수형태근로종사자 산재 적용', href: '/guide/industrial-accident/industrial-accident-special-employment-coverage' },
      { label: '통근재해 인정 기준', href: '/guide/industrial-accident/industrial-accident-commute-recognition-criteria' },
      { label: '요양급여 신청 절차', href: '/guide/industrial-accident/industrial-accident-medical-benefit-procedure' },
      { label: '산재 불승인 심사·재심사', href: '/guide/industrial-accident/industrial-accident-review-procedure' },
      { label: '자동차보험과 산재 중복 조정', href: '/guide/industrial-accident/industrial-accident-auto-insurance-overlap' },
    ],
  },

  // ─── 10. stalking / ex-coworker-checklist ───
  {
    domain: 'stalking',
    slug: 'stalking-ex-coworker-checklist',
    keyword: '전 직장동료 스토킹 신고',
    questionKeyword: '퇴사 후에도 전 직장동료가 집·SNS·전화로 추적해 와요. 어떻게 신고하나요?',
    ctaKeyword: '전 동료 스토킹 신고 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '전 직장동료 스토킹 5가지 신고 체크리스트 | 로앤가이드',
      description:
        '퇴사 후에도 추적해오는 전 직장동료 스토킹을 신고할 때 증거 체크리스트와 잠정조치·접근금지 신청 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"퇴사한 회사 동료가 집 앞·SNS·전화로 계속 따라온다"는 사연이 늘고 있습니다. 스토킹범죄의 처벌 등에 관한 법률(스토킹처벌법) 제2조는 상대방의 의사에 반해 정당한 이유 없이 접근·따라다님·연락·물건 도달 등의 행위를 반복하는 것을 스토킹행위로 규정하고, 같은 법 제18조에 따라 형사처벌 + 잠정조치(접근금지·전기통신차단)를 동시에 청구할 수 있습니다. 다음 5단계 체크리스트로 정리해 경찰·KISA 절차를 빠르게 가동하세요.</p>',
    sections: [
      {
        title: '스토킹 인정 — 어떤 행위가 해당하는지',
        content:
          '<p><strong style="color:#1e3a5f">스토킹처벌법 제2조 5가지 유형 중 하나라도 반복되면 스토킹행위로 평가될 가능성이 큽니다.</strong></p>\n<ul>\n<li><strong>접근·따라다님</strong> — 집·직장·이동경로에 나타나거나 진로 차단.</li>\n<li><strong>연락·DM</strong> — 전화·문자·SNS DM·이메일 반복 발송.</li>\n<li><strong>물건 도달</strong> — 선물·편지·물건을 우편·택배로 보냄.</li>\n<li><strong>지켜보기·기다림</strong> — 인근에서 관찰·대기.</li>\n<li><strong>정보 게시·공개</strong> — 본인 사진·연락처·SNS 글 무단 공개.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단발성이 아닌 "반복" + "상대방 의사에 반함" + "정당한 이유 없음" 3요소를 입증하는 것이 신고의 출발점입니다.</blockquote>',
      },
      {
        title: '5단계 절차 — 신고에서 잠정조치까지',
        content:
          '<p><strong style="color:#1e3a5f">112 신고 + 경찰서 진정 + 잠정조치 신청을 동시 가동하면 보호 강도가 높아집니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 즉시 보존</strong> — 통화·문자 캡처(시간·번호 노출), DM·SNS 캡처(URL·날짜 포함), CCTV·블랙박스 영상 확보.</li>\n<li><strong>2단계 — 112 신고 + 경찰서 방문</strong> — 위급 시 112, 진행 중이면 가까운 경찰서에서 진정·고소장 접수.</li>\n<li><strong>3단계 — 응급조치·잠정조치 신청</strong> — 경찰의 응급조치(접근금지 100m·전기통신 금지) 후 검사·법원에 잠정조치 청구.</li>\n<li><strong>4단계 — KISA 정보 차단 요청</strong> — 본인 사진·전화번호·SNS 글이 무단 공개됐다면 KISA 110 또는 방심위로 삭제 요청.</li>\n<li><strong>5단계 — 형사처벌 + 손해배상 병행</strong> — 스토킹처벌법 제18조 형사 + 민사 손해배상(위자료·치료비) 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">스토킹 행위 유형·반복 횟수를 입력하면 AI가 신고·잠정조치 가능성을 점검해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증거 체크리스트 — 무엇을 어떻게 모을까',
        content:
          '<p><strong style="color:#1e3a5f">시간순 정리 + 메타정보 보존이 핵심입니다.</strong></p>\n<ul>\n<li><strong>통화·문자</strong> — 통화내역서(통신사 발급), 문자 캡처 시 발신번호·시간 함께.</li>\n<li><strong>SNS·DM</strong> — 본인 단말 캡처 + URL + 작성 일시 + 가능한 경우 화면 녹화.</li>\n<li><strong>대면 접근</strong> — 자택·직장 인근 CCTV(아파트 관리실·상가) 영상 보존 요청, 블랙박스도 활용.</li>\n<li><strong>주변 진술</strong> — 동료·이웃이 목격한 진술서·녹취·문자.</li>\n<li><strong>본인 일지</strong> — 일자별 사건 일지(시간·장소·내용)를 직접 작성.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 캡처는 동일 화면을 다른 단말로도 한 번 더 찍어두면 위·변조 의심을 예방할 수 있습니다.</blockquote>',
      },
      {
        title: '잠정조치 + 형사처벌 — 보호 강도 높이기',
        content:
          '<p><strong style="color:#1e3a5f">잠정조치는 법원 결정으로 접근금지·연락금지·유치장 유치까지 가능합니다(스토킹처벌법 제9조).</strong></p>\n<ul>\n<li><strong>1호 서면 경고</strong> — 경찰의 서면 경고로 추가 행위 시 가중처벌 근거.</li>\n<li><strong>2호 접근금지</strong> — 100m 이내 접근금지, 위반 시 가중처벌.</li>\n<li><strong>3호 전기통신금지</strong> — 전화·문자·메신저 등 전기통신 이용 접근금지.</li>\n<li><strong>4호 유치</strong> — 위반 반복 시 일정 기간 유치장 유치 가능.</li>\n<li><strong>형사처벌 형량</strong> — 스토킹범죄(제18조) 3년 이하 징역 또는 3천만 원 이하 벌금, 흉기 휴대 시 5년 이하 징역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 잠정조치 위반은 별개 형사처벌(같은 법 제20조) 대상이라 위반 정황이 보이면 즉시 112 신고하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 잠정조치 연장 결정의 적법성',
        summary:
          '대법원 2025모3144 사건(대법원, 2025.12.11 결정)에서 법원은 스토킹범죄의 처벌 등에 관한 법률에 따른 잠정조치 연장결정을 다투는 사안에서, 잠정조치의 필요성과 연장 요건이 법령상 절차에 따라 충족되었는지 종합 판단해야 한다는 취지로 판단했습니다. 잠정조치가 일회적 결정이 아니라 필요 시 연장될 수 있다는 점을 보여줍니다.',
        takeaway: '스토킹 행위가 지속될 우려가 있으면 잠정조치 연장 신청을 통해 보호기간을 늘릴 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '문자·DM 한 번씩만 보내도 스토킹인가요?',
        answer:
          '<strong>"반복" 요건 충족 여부가 쟁점입니다.</strong> 짧은 기간에 다수 또는 장기간 간헐적으로 반복되면 스토킹행위로 평가될 가능성이 커집니다.',
      },
      {
        question: '잠정조치는 며칠 만에 결정되나요?',
        answer:
          '<strong>경찰 응급조치는 신고 즉시 가능, 법원 잠정조치는 통상 1~3주 내 결정됩니다.</strong> 위급 상황은 응급조치를 먼저 활용하세요.',
      },
      {
        question: '직장에 알려질까봐 신고가 망설여지는데요',
        answer:
          '<strong>피해자 신원·진술은 비공개 처리 원칙이 적용됩니다.</strong> 다만 가해자가 회사 동료라 회사 차원에서 인지될 가능성이 있어 사전 상담을 권장합니다.',
      },
      {
        question: '가해자가 "사과하면 끝"이라며 합의를 요구해요',
        answer:
          '<strong>스토킹범죄는 반의사불벌죄 규정이 폐지되어 합의로 종결되지 않습니다(2023년 개정).</strong> 합의를 양형 자료로 사용할 수 있을 뿐이에요.',
      },
      {
        question: 'SNS 차단했더니 새 계정으로 또 옵니다',
        answer:
          '<strong>새 계정 생성·접근도 동일 스토킹행위로 평가될 가능성이 큽니다.</strong> 새 계정 ID·접근 시각 캡처를 추가 증거로 정리해 신고에 보강하세요.',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹 응급조치·잠정조치 신청', href: '/guide/stalking/stalking-emergency-protective-measures' },
      { label: '스토킹 증거 수집 체크리스트', href: '/guide/stalking/stalking-evidence-collection-checklist' },
      { label: '잠정조치 위반 시 대응', href: '/guide/stalking/stalking-protective-order-violation' },
      { label: 'KISA 정보 삭제 요청', href: '/guide/stalking/stalking-kisa-information-removal' },
      { label: '스토킹 손해배상 청구', href: '/guide/stalking/stalking-civil-damages-claim' },
    ],
  },
];
