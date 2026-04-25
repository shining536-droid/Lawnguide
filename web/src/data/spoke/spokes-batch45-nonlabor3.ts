import { SpokePage } from '../spoke-pages';

// batch45 nonlabor3 10개: defamation 3 + jeonse 2 + child-support 1 + rehabilitation 1 + bankruptcy 1 + industrial-accident 1 + stalking 1
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 의료기관 후기·별점에 불만 있던 병원이 정보통신망법 명예훼손으로 고소한 작성자가 "비방 목적 부정·공익성 항변"으로 방어하도록 돕는 페이지다.
// 2. 이 페이지는 학부모 단톡방·반모임 메신저에서 다른 학부모를 거론한 발언으로 명예훼손 신고당한 작성자가 공연성 다툼·합의 우선순위를 정리하도록 돕는 페이지다.
// 3. 이 페이지는 사업장(식당·헬스장·미용실) 후기에서 진실한 사실을 적었지만 명예훼손 고소를 당한 소비자가 형법 제310조 진실 항변·공익성으로 무혐의 받도록 돕는 페이지다.
// 4. 이 페이지는 옥탑방·근린생활시설(상가용도) 주거 임차인이 보증금이 보호되는지 몰라 막막한 상황에서 임차권등기·우선변제 가능성 점검을 돕는 페이지다.
// 5. 이 페이지는 임대인이 보증금을 한 번에 못 주고 분할반환을 제안할 때 합의서·이자·임차권등기 유지 여부를 안전하게 처리하도록 돕는 페이지다.
// 6. 이 페이지는 비양육친이 해외에 거주해 양육비가 송금되지 않는 양육친이 국제 이행 절차·국내 강제집행 활용으로 양육비를 받도록 돕는 페이지다.
// 7. 이 페이지는 국민연금만으로 생활하는 채무자가 회생 신청 자격·가용소득 산정에서 어떻게 인정되는지 점검하도록 돕는 페이지다.
// 8. 이 페이지는 국민연금이 입금되는 통장이 압류·면책 후에도 보호되는 조건과 압류금지 통장 전환 절차를 정리하도록 돕는 페이지다.
// 9. 이 페이지는 직장 내 괴롭힘·과로로 우울증·적응장애를 진단받은 근로자가 산재 신청 시 업무관련성 입증과 정신질환 산재 인정 기준을 정리하도록 돕는 페이지다.
// 10. 이 페이지는 온라인 게임에서 욕설·집요한 추적·DM 폭주를 당한 피해자가 스토킹범죄 신고 가능성과 증거 체크리스트를 빠르게 정리하도록 돕는 페이지다.

export const spokesBatch45Nonlabor3: SpokePage[] = [
  // ─── 1. defamation / medical-review-sued-response ───
  {
    domain: 'defamation',
    slug: 'defamation-medical-review-sued-response',
    keyword: '의료기관 후기 명예훼손 고소',
    questionKeyword: '병원·의원 후기를 썼는데 정보통신망법 명예훼손으로 고소장이 왔어요',
    ctaKeyword: '의료 후기 명예훼손 방어 점검',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '의료기관 후기 명예훼손 고소 4가지 방어 포인트 | 로앤가이드',
      description:
        '병원·의원 후기에 대해 정보통신망법 명예훼손 혐의를 받고 있다면 "비방 목적 부정"과 "공공의 이익" 항변으로 방어하는 4가지 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>"진료 후기 한 줄 썼더니 병원에서 고소장이 왔다"는 사연이 늘고 있습니다. 정보통신망법 제70조 제1항·제2항은 "비방할 목적"이 핵심 구성요건인데, 후기 작성자에게는 공공의 이익 측면이 인정될 여지가 큽니다. 형법 제310조와 같은 법리가 정보통신망법 명예훼손에도 유추 적용되어 위법성 조각이 가능하므로, 작성 동기·표현 수위·진료 사실 일치 여부를 정리하면 무혐의·기소유예로 갈 수 있습니다. 혐의를 받고 있다면 첫 진술 전에 다음 4가지를 정리해두세요.</p>',
    sections: [
      {
        title: '비방 목적 — 후기 작성자에게 쉽게 인정되지 않습니다',
        content:
          '<p><strong style="color:#1e3a5f">정보통신망법 명예훼손은 "비방할 목적"이 별개 구성요건이고, 검사가 입증해야 합니다.</strong></p>\n<ul>\n<li><strong>병원과 사적 갈등 없음</strong> — 진료 외 개인적 원한이 없는 일반 환자라면 비방 목적 입증이 어렵습니다.</li>\n<li><strong>다수 소비자에 대한 정보 공유</strong> — 같은 병원을 고민하는 사람에게 정보 제공 목적임을 진술.</li>\n<li><strong>실제 경험 기반 표현</strong> — 진료비 영수증·진료기록 사본 등 사실 근거 보유.</li>\n<li><strong>표현의 수위</strong> — "최악·돌팔이" 등 모욕적 표현 다수면 비방 목적이 인정될 위험 증가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 비방 목적이 부정되면 정보통신망법 제70조는 무죄 — 형법 제307조 사실적시 명예훼손으로만 다툴 여지가 남습니다.</blockquote>',
      },
      {
        title: '4단계 대응 — 고소장 받고 나서',
        content:
          '<p><strong style="color:#1e3a5f">조사 출석 전 "원본 후기·작성 경위·진료 사실"을 시간순으로 정리해야 합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 후기 원본 보존</strong> — 병원이 캡처한 시점·문구와 본인 작성본 대조, 일부 캡처·왜곡 여부 확인.</li>\n<li><strong>2단계 — 진료 사실 근거 수집</strong> — 진료비 영수증·진료확인서·예약 메시지·녹취 일부 확보.</li>\n<li><strong>3단계 — 표현 수정 검토</strong> — 모욕적 표현 부분 자진 삭제·정정, 정상참작 자료로 활용.</li>\n<li><strong>4단계 — 의견서 제출</strong> — 비방 목적 부정 + 공익 목적 + 진실한 사실 근거를 첨부, 무혐의 의견 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">고소장에 어떤 표현이 비방 목적으로 잡힐 수 있는지, AI가 후기 문구별 위험도를 분석해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '공공의 이익 — 후기에서 자주 인정되는 핵심 항변',
        content:
          '<p><strong style="color:#1e3a5f">의료서비스는 공공성이 강해, 다수 소비자 정보 제공 목적이 인정되기 쉽습니다.</strong></p>\n<ul>\n<li><strong>의료서비스 공공성</strong> — 다수 환자가 선택할 의료기관 정보로 공익성 인정.</li>\n<li><strong>주된 동기 판단</strong> — 사익적 동기가 부수적이면 형법 제310조 적용 가능.</li>\n<li><strong>표현 방법 적정성</strong> — 사실 위주·감정 절제로 작성했음을 입증할 자료 정리.</li>\n<li><strong>허위 여부</strong> — 일부 과장·주관 평가는 허위 적시가 아님(가치판단).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: "솔직 후기"·"다른 환자에게 도움 주려고"라는 작성 동기를 의견서에 명시하세요.</blockquote>',
      },
      {
        title: '합의·반의사불벌 — 비공식 종결 카드',
        content:
          '<p><strong style="color:#1e3a5f">정보통신망법 제70조 명예훼손은 반의사불벌죄입니다(같은 법 제70조 제3항).</strong></p>\n<ul>\n<li><strong>처벌불원서</strong> — 1심 판결 전 제출되면 공소기각으로 종결.</li>\n<li><strong>합의금 시세</strong> — 별점·후기 1건 단발성이면 50~200만 원선이 일반적, 게시 노출 기간·조회수에 따라 가변.</li>\n<li><strong>후기 자진 삭제</strong> — 합의 조건으로 사이트·블로그·플랫폼별 삭제 약정 명시.</li>\n<li><strong>재게시 금지 약정</strong> — 합의서에 "동일·유사 내용 재게시 시 위약금" 조항 포함 시 위험 감소.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합의 후라도 다른 플랫폼에 같은 글이 그대로 남아 있으면 형사 책임이 다시 문제될 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망법 명예훼손의 비방 목적과 공공의 이익',
        summary:
          '대법원 2022도699 사건(대법원, 2024.01.04 선고)에서 법원은 정보통신망법 제70조 제1항 명예훼손죄에서 "비방할 목적"과 "사회적 평가 저하"는 별개 구성요건이고, 적시 사실이 공공의 이익에 관한 것이면 비방 목적은 부정될 수 있다고 판시했습니다. 후기 작성자에게는 공익성이 인정될 여지가 크다는 점을 보여줍니다.',
        takeaway:
          '의료 후기 사건에서 검사가 비방 목적을 적극 입증하지 못하면 정보통신망법 명예훼손은 무죄로 갈 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '진료 결과에 만족 못 한 솔직한 후기도 명예훼손이 되나요?',
        answer:
          '<strong>주관 평가·일부 과장은 가치판단이라 허위사실 적시에 해당할 소지가 있는 것은 아닙니다.</strong> 다만 표현 수위가 모욕적이면 별도로 모욕죄·민사 책임이 문제될 수 있습니다.',
      },
      {
        question: '병원이 합의금 500만 원을 요구하는데 적정한가요?',
        answer:
          '<strong>단발성 후기·조회수 낮은 글이면 보통 50~200만 원선이 시세입니다.</strong> 합의 거절 시 무혐의 가능성이 높다면 진술서·의견서로 다투는 것이 유리할 수 있습니다.',
      },
      {
        question: '병원 측이 게시 중단을 요구하는데 응해야 하나요?',
        answer:
          '<strong>임시조치(게시 중단) 요청은 정보통신망법 제44조의2에 따른 별도 절차이므로 형사사건과 분리해 검토하세요.</strong> 임시조치에 불응 시 행정 제재는 없지만, 합의 협상에는 영향을 줍니다.',
      },
      {
        question: '익명 후기였는데 신원이 어떻게 특정됐나요?',
        answer:
          '<strong>플랫폼이 통신자료 제공 요청이나 압수영장으로 가입자 정보를 제공한 경우입니다.</strong> 가입정보·IP 기록을 본인 명의로 사용했다면 특정이 가능합니다.',
      },
      {
        question: '의사·병원이 민사로 손해배상도 청구할 수 있나요?',
        answer:
          '<strong>형사·민사는 별도라 형사 무혐의여도 민사로 손해배상 청구가 가능합니다.</strong> 다만 위법성이 조각되면 민사 손해배상도 인용되기 어렵습니다.',
      },
    ],
    cta: {
      text: '명예훼손 고소당했을 때 대응, AI로 정리하기',
      link: '/chat?domain=defamation',
    },
    internalLinks: [
      { label: '명예훼손 비방 목적 다툼', href: '/guide/defamation/defamation-purpose-of-slander-defense' },
      { label: '진실한 사실 적시 항변', href: '/guide/defamation/defamation-truth-public-interest' },
      { label: '온라인 게시글 임시조치', href: '/guide/defamation/defamation-online-takedown-procedure' },
      { label: '명예훼손 합의금 시세', href: '/guide/defamation/defamation-settlement-amount-guide' },
      { label: '경찰 조사 출석 전 점검', href: '/guide/defamation/defamation-police-investigation-prep' },
    ],
  },

  // ─── 2. defamation / school-parent-chat-defamation ───
  {
    domain: 'defamation',
    slug: 'defamation-school-parent-chat-defamation',
    keyword: '학부모 단톡방 명예훼손',
    questionKeyword: '학부모 단톡방에서 다른 엄마 얘기를 했는데 명예훼손으로 신고당했어요',
    ctaKeyword: '학부모 단톡방 명예훼손 점검',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '학부모 단톡방 명예훼손 4단계 대응 매뉴얼 | 로앤가이드',
      description:
        '학부모 단톡방·반 모임 메신저에서 다른 엄마·아빠를 거론한 글로 명예훼손 신고를 받고 있다면 공연성 다툼과 합의 우선순위를 4단계로 지금 확인하세요.',
    },
    intro:
      '<p>"엄마들 단톡방에서 한 마디 했을 뿐인데 고소장이 왔다"는 상담이 학기 초마다 늘어납니다. 단톡방 발언이 명예훼손이 되려면 "공연성"이 인정되어야 하는데, 단톡방 인원수·외부 전파 가능성에 따라 결론이 달라집니다. 사실관계 자체가 진실이라면 형법 제310조로 위법성 조각이 가능하고, 반의사불벌이라 처벌불원서 한 장으로 마무리되는 경우도 많습니다. 혐의를 받고 있다면 첫 진술 전에 4단계로 정리해보세요.</p>',
    sections: [
      {
        title: '공연성 — 단톡방 인원수·외부 전파성이 핵심',
        content:
          '<p><strong style="color:#1e3a5f">3~4명만 있는 폐쇄 단톡방도 외부 전파 가능성이 있으면 공연성이 인정될 수 있습니다(전파가능성 이론).</strong></p>\n<ul>\n<li><strong>다수 인원</strong> — 학급 전체 단톡방·학부모 회의방은 통상 공연성 인정.</li>\n<li><strong>전파 가능성</strong> — 특정 개인 한 명이라도 다른 학부모에게 전달할 가능성이 있으면 인정.</li>\n<li><strong>친밀 관계 예외</strong> — 가족·아주 가까운 1대1 대화는 공연성 부정 가능.</li>\n<li><strong>스크린샷 유출</strong> — 발언 후 스크린샷이 다른 채팅방에 돌면 공연성 입증이 강해짐.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "엄마들끼리 한 얘기"여도 단톡방 인원이 많고 캡처·전달이 쉬우면 공연성이 거의 인정될 수 있습니다.</blockquote>',
      },
      {
        title: '4단계 대응 — 신고 통보 직후 해야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">조사 출석 전 발언 원문·맥락·작성 경위를 시간순으로 정리해야 합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단톡방 원문 보존</strong> — 본인 메시지뿐 아니라 앞뒤 맥락·다른 학부모 동조 여부까지 백업.</li>\n<li><strong>2단계 — 사실관계 점검</strong> — 발언 내용이 진실/허위 어느 쪽인지 객관 자료(목격자·문자·녹음) 정리.</li>\n<li><strong>3단계 — 사과·합의 의사 표시</strong> — 학교·학원 공동체 분쟁이라 합의가 가장 빠른 종결책.</li>\n<li><strong>4단계 — 의견서 제출</strong> — 공연성 부정·진실 항변·합의 진행 사실을 종합 의견서로 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">단톡방 발언 중 어떤 부분이 위험한지, AI가 표현·맥락별 위험도를 분석해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '진실 항변·공익성 — 학부모 단톡방의 특수성',
        content:
          '<p><strong style="color:#1e3a5f">학교폭력·학부모 회비 횡령 등 공익적 사안이면 형법 제310조 위법성 조각이 가능합니다.</strong></p>\n<ul>\n<li><strong>학교폭력 정보 공유</strong> — 자녀 보호 목적의 정보 공유는 공익성 인정 여지.</li>\n<li><strong>회비·운영 투명성 문제</strong> — 학부모 공동 자금에 관한 발언은 공공성 강함.</li>\n<li><strong>특정인 비방 목적</strong> — 단순 험담·가족 갈등은 공익성 부정.</li>\n<li><strong>표현 절제</strong> — 욕설·인신공격이 들어가면 위법성 조각 어려움.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 발언 동기에 "다른 부모들에게 알려야 한다고 생각해서"라는 공익 목적이 있었음을 정리하세요.</blockquote>',
      },
      {
        title: '합의 우선 — 반의사불벌·기소유예 활용',
        content:
          '<p><strong style="color:#1e3a5f">사실적시·정보통신망법 명예훼손은 반의사불벌죄, 처벌불원서로 종결됩니다.</strong></p>\n<ul>\n<li><strong>학부모회·학교 중재</strong> — 학교·반 단위 중재로 사과·합의 가능성 높음.</li>\n<li><strong>합의금 시세</strong> — 단발 발언·캡처 1장 기준 30~150만 원선이 일반적.</li>\n<li><strong>처벌불원서 시점</strong> — 1심 판결 전까지 제출 시 공소기각.</li>\n<li><strong>재발 방지 약정</strong> — 단톡방 발언 자제·관련 화제 금지 등 명시.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합의 후 다른 학부모에게 사건 얘기를 또 하면 추가 명예훼손이 될 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 단톡방 발언의 공연성과 비방 목적',
        summary:
          '대법원 2020도8421 사건(대법원, 2022.07.28 선고)에서 법원은 형법 제310조 위법성 조각사유의 "진실한 사실"과 "오로지 공공의 이익"의 의미를 구체화했습니다. 사인의 발언이라도 사회 일반의 일부 이익이나 다수 소비자에 관한 사항이면 공익성이 인정될 수 있다고 판시했습니다.',
        takeaway:
          '학부모 단톡방 발언도 학교폭력·공동 회비처럼 공익적 사안이면 위법성 조각이 가능합니다.',
      },
    ],
    faq: [
      {
        question: '단톡방 인원이 5명뿐인데도 공연성이 인정되나요?',
        answer:
          '<strong>전파가능성 이론에 따라 5명도 공연성이 인정될 수 있습니다.</strong> 다만 가족·매우 친밀한 사적 모임은 부정될 수 있어 사정에 따라 다툴 여지가 있습니다.',
      },
      {
        question: '"~카더라"라고 전해 들은 얘기를 한 것도 명예훼손인가요?',
        answer:
          '<strong>전문(傳聞)으로 들은 사실도 그대로 전달하면 사실 적시에 해당할 수 있습니다.</strong> 다만 "확인된 건 아니지만"이라는 단서로 전한 정황은 비방 목적 부정에 유리합니다.',
      },
      {
        question: '합의금은 보통 얼마 정도인가요?',
        answer:
          '<strong>단톡방 단발 발언·캡처 1장 기준 30~150만 원이 시세입니다.</strong> 발언 횟수·인원·자녀 영향에 따라 더 올라갈 수 있습니다.',
      },
      {
        question: '경찰 조사 때 "기억 안 난다"고 해도 되나요?',
        answer:
          '<strong>증거가 캡처로 명확하다면 부인보다 사정 설명·반성이 유리합니다.</strong> 처음부터 변호사 또는 AI 진단으로 진술 방향을 잡으세요.',
      },
      {
        question: '합의 후 단톡방에서 또 얘기하면 어떻게 되나요?',
        answer:
          '<strong>처벌불원 효력은 해당 발언에만 미치므로 새 발언은 별건으로 추가 처벌 가능합니다.</strong> 합의 후에는 같은 화제 자체를 피하세요.',
      },
    ],
    cta: {
      text: '명예훼손 고소당했을 때 대응, AI로 정리하기',
      link: '/chat?domain=defamation',
    },
    internalLinks: [
      { label: '단톡방 공연성 다툼', href: '/guide/defamation/defamation-group-chat-public-nature' },
      { label: '명예훼손 합의금 시세', href: '/guide/defamation/defamation-settlement-amount-guide' },
      { label: '반의사불벌 처벌불원서', href: '/guide/defamation/defamation-no-punishment-letter' },
      { label: '진실 항변과 공익성', href: '/guide/defamation/defamation-truth-public-interest' },
      { label: '기소유예 의견서 작성', href: '/guide/defamation/defamation-suspension-prosecution-opinion' },
    ],
  },

  // ─── 3. defamation / business-review-truth-defense ───
  {
    domain: 'defamation',
    slug: 'defamation-business-review-truth-defense',
    keyword: '사업장 후기 진실 항변',
    questionKeyword: '식당·헬스장 후기를 사실대로 썼는데 명예훼손으로 고소당하면 어떻게 다투나요?',
    ctaKeyword: '사업장 후기 진실 항변 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '사업장 후기 진실 항변 4가지 핵심 Q&A | 로앤가이드',
      description:
        '식당·헬스장·미용실 후기에서 진실한 사실을 적었는데 명예훼손 고소를 당했다면 형법 제310조 진실 항변·공익성으로 무혐의 받는 4가지 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>"사실대로 썼는데도 고소가 가능한가요?" 사업장 후기 사건의 가장 흔한 질문입니다. 형법 제307조 제1항은 진실한 사실 적시여도 명예훼손이 성립하지만, 같은 법 제310조는 "오로지 공공의 이익에 관한 때"라면 위법성을 조각합니다. 후기 작성자에게는 공익성이 인정될 여지가 크고, 정보통신망법 명예훼손은 비방 목적이 별개 요건이라 무혐의로 갈 수 있습니다. 혐의를 받고 있다면 다음 4개 질문으로 방어 라인을 정리해보세요.</p>',
    sections: [
      {
        title: 'Q1. "진실"만 적었는데 왜 처벌 대상이 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">형법 제307조 제1항은 진실한 사실도 처벌 대상으로 하되, 제310조로 위법성 조각이 가능합니다.</strong></p>\n<ul>\n<li><strong>형법 제307조 제1항</strong> — 진실 적시도 사회적 평가 저하 시 명예훼손 성립.</li>\n<li><strong>형법 제310조</strong> — "진실한 사실" + "오로지 공공의 이익" → 위법성 조각.</li>\n<li><strong>정보통신망법 제70조 제1항</strong> — "비방 목적"이 별개 구성요건, 후기는 부정될 여지 큼.</li>\n<li><strong>실무 결과</strong> — 둘 중 어느 한쪽이라도 인정되면 무혐의·기소유예.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "진실하니까 괜찮다"는 자동으로 성립하지 않고, 공익성·비방목적 부정이 함께 입증돼야 합니다.</blockquote>',
      },
      {
        title: 'Q2. 사업장 후기에서 "공공의 이익"은 어떻게 인정되나요?',
        content:
          '<p><strong style="color:#1e3a5f">다수 소비자에 대한 정보 제공 목적이면 공익성이 인정될 가능성이 큽니다.</strong></p>\n<ul>\n<li><strong>다수 소비자 보호</strong> — 위생·서비스·요금 관련 사실은 공공성이 큼.</li>\n<li><strong>주된 동기 판단</strong> — 사적 보복이 아니라 정보 공유가 주된 목적인지가 핵심.</li>\n<li><strong>표현 수위</strong> — 모욕적 표현이 다수면 사적 동기가 인정돼 공익성이 약화.</li>\n<li><strong>공공기관·언론과 차이</strong> — 사인의 후기도 사회 일반 일부 이익에 관계되면 인정.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">후기 문구 중 어떤 부분이 공익성으로 보호되고 어떤 부분이 모욕으로 잡힐지, AI가 줄별로 분석해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: 'Q3. "비방 목적"은 어떻게 부정하나요?',
        content:
          '<p><strong style="color:#1e3a5f">정보통신망법 제70조의 비방 목적은 검사가 입증, 후기는 일반적으로 부정 여지가 큽니다.</strong></p>\n<ul>\n<li><strong>사적 갈등 부재</strong> — 사업주와 개인적 분쟁이 없는 일반 소비자라면 비방 목적 입증 어려움.</li>\n<li><strong>표현 수위</strong> — 사실 위주·감정 절제 표현이면 비방 목적 부정 유리.</li>\n<li><strong>비교 표현</strong> — 다른 업체와 비교·평가는 정보 제공 성격으로 비방 목적 부정.</li>\n<li><strong>반복성</strong> — 같은 사업장에 대한 반복 게시는 비방 목적이 인정될 위험 증가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 후기 1회 게시 + 다른 소비자 도움 목적 진술 + 욕설 없는 사실 위주 표현이 가장 안전합니다.</blockquote>',
      },
      {
        title: 'Q4. 합의·삭제로 빨리 끝낼 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">정보통신망법·사실적시 명예훼손은 반의사불벌, 1심 판결 전 처벌불원서로 공소기각 가능합니다.</strong></p>\n<ul>\n<li><strong>합의금 시세</strong> — 후기 1건·조회수 낮은 사례 50~200만 원, 노출 큰 플랫폼은 더 높음.</li>\n<li><strong>후기 자진 삭제</strong> — 합의 조건으로 게시 사이트·블로그·SNS 전부 삭제 약정.</li>\n<li><strong>처벌불원서 작성</strong> — 사업주 인적사항·사건번호·처벌 불원 의사·서명 필수.</li>\n<li><strong>민사·형사 동시 종결</strong> — 합의서에 "민사 손해배상도 포기" 조항 포함하면 분쟁 종결.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합의 후 다른 사이트·SNS에 같은 글을 다시 올리면 별건 명예훼손이 됩니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 진실 적시 후기와 위법성 조각',
        summary:
          '대법원 2024도14555 사건(대법원, 2025.05.29 선고)에서 법원은 형법 제310조의 "진실한 사실"과 "오로지 공공의 이익"의 의미를 정리했습니다. 행위자의 주된 동기가 공공의 이익이라면 부수적으로 사익적 동기가 있어도 제310조 적용이 배제되지 않는다고 판시했습니다.',
        takeaway:
          '후기 작성에 일부 감정이 섞였더라도 주된 동기가 다른 소비자 보호라면 위법성 조각이 가능합니다.',
      },
    ],
    faq: [
      {
        question: '진실한 사실을 적었으면 원칙적으로 무죄 아닌가요?',
        answer:
          '<strong>형법 제307조 제1항은 진실 적시도 처벌 대상이라, 제310조 위법성 조각이 별도로 입증돼야 합니다.</strong> 표현 수위·공익성을 함께 다투세요.',
      },
      {
        question: '욕설 한 줄이 들어갔는데 위법성 조각이 가능한가요?',
        answer:
          '<strong>모욕죄로 별도 처벌될 수 있고 비방 목적도 인정될 위험이 있습니다.</strong> 욕설 부분만 자진 삭제하면 정상참작 자료가 됩니다.',
      },
      {
        question: '식당 위생 문제 후기는 더 보호받나요?',
        answer:
          '<strong>위생·식자재 같은 안전 관련 사항은 공공성이 강해 위법성 조각 가능성이 높습니다.</strong> 사진·영수증 등 객관 자료가 있으면 더 강력합니다.',
      },
      {
        question: '플랫폼이 임시조치(블라인드)를 걸었는데 어떻게 하나요?',
        answer:
          '<strong>임시조치는 정보통신망법 제44조의2에 따른 행정 절차로 형사사건과 별개입니다.</strong> 이의신청·반박 자료 제출로 해제 요청 가능합니다.',
      },
      {
        question: '민사 손해배상까지 막을 수 있나요?',
        answer:
          '<strong>위법성이 조각되면 민사 손해배상도 인용되기 어렵습니다.</strong> 다만 형사 무혐의여도 민사는 별도라 합의 시 "민사 청구권 포기" 조항을 명시하세요.',
      },
    ],
    cta: {
      text: '명예훼손 고소당했을 때 대응, AI로 정리하기',
      link: '/chat?domain=defamation',
    },
    internalLinks: [
      { label: '진실 항변과 공익성', href: '/guide/defamation/defamation-truth-public-interest' },
      { label: '비방 목적 부정 다툼', href: '/guide/defamation/defamation-purpose-of-slander-defense' },
      { label: '명예훼손 합의금 시세', href: '/guide/defamation/defamation-settlement-amount-guide' },
      { label: '온라인 게시글 임시조치', href: '/guide/defamation/defamation-online-takedown-procedure' },
      { label: '경찰 조사 출석 전 점검', href: '/guide/defamation/defamation-police-investigation-prep' },
    ],
  },

  // ─── 4. jeonse / rooftop-illegal-housing-deposit ───
  {
    domain: 'jeonse',
    slug: 'jeonse-rooftop-illegal-housing-deposit',
    keyword: '옥탑방 근린생활시설 보증금 보호',
    questionKeyword: '옥탑방·근린생활시설(상가용도)인 곳에 전세로 사는데 보증금이 보호되나요?',
    ctaKeyword: '옥탑방 근린생활 보증금 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '옥탑방·근린생활시설 보증금 4가지 보호 핵심 | 로앤가이드',
      description:
        '용도가 옥탑·근린생활시설로 등록돼 주거가 아닌 곳에 전세로 살고 있다면 주택임대차보호법 적용 여부와 보증금 회수 방법 4가지를 지금 확인하세요.',
    },
    intro:
      '<p>"옥탑방인데 등기부엔 근린생활시설(상가)로 돼 있어요." 이 경우 주택임대차보호법이 적용되는지가 가장 큰 걱정입니다. 결론부터 말하면 등기부상 용도와 무관하게 "실질적으로 주거용으로 사용"하고 있으면 주택임대차보호법이 적용됩니다(같은 법 제2조). 다만 대출·경매 시 후순위로 밀릴 위험이 크니 임차권등기·우선변제권 확보가 필수입니다.</p>',
    sections: [
      {
        title: 'Q1. 등기부에 "근린생활시설"이라고 돼 있어도 보호되나요?',
        content:
          '<p><strong style="color:#1e3a5f">주택임대차보호법은 등기 용도가 아니라 "실제 주거 용도"로 사용하는지로 판단합니다.</strong></p>\n<ul>\n<li><strong>주택임대차보호법 제2조</strong> — "주거용 건물의 전부 또는 일부"가 적용 대상.</li>\n<li><strong>실질 사용 기준</strong> — 등기상 상가여도 잠자고 취사하는 주거 사용이면 적용.</li>\n<li><strong>대항력</strong> — 전입신고 + 인도(이사)로 발생, 같은 법 제3조.</li>\n<li><strong>옥탑방</strong> — 무허가·불법 증축이라도 주거 사용이면 보호 대상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 주택임대차보호법 적용은 등기보다 실제 사용으로 판단되니 전입신고·이사부터 가능한 한 하세요.</blockquote>',
      },
      {
        title: 'Q2. 우선변제권은 어떻게 확보하나요?',
        content:
          '<p><strong style="color:#1e3a5f">전입신고 + 확정일자(주택임대차보호법 제3조의2)로 우선변제권 확보가 핵심입니다.</strong></p>\n<ul>\n<li><strong>확정일자</strong> — 주민센터·인터넷등기소에서 임대차계약서에 확정일자 부여.</li>\n<li><strong>대항요건 + 확정일자</strong> — 둘 다 갖춘 날 다음 날부터 우선변제권 발생.</li>\n<li><strong>최우선변제</strong> — 소액임차인 기준 충족 시 일부 보증금은 최우선 변제.</li>\n<li><strong>다세대·다가구</strong> — 같은 건물 다른 임차인의 선순위 여부 등기부로 확인.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">옥탑방·근린생활시설의 우선변제권 순위와 회수 가능성을 AI가 등기부 정보 기반으로 분석해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: 'Q3. 임대인이 보증금 못 준다면 어떻게 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">계약 종료 후 보증금 미반환 시 임차권등기명령 → 보증금반환소송 + 강제집행 순서입니다.</strong></p>\n<ul>\n<li><strong>임차권등기명령</strong> — 주택임대차보호법 제3조의3, 이사 후에도 대항력·우선변제권 유지.</li>\n<li><strong>지급명령·소액심판</strong> — 보증금 3억 이하면 소액심판으로 6개월 내 결정.</li>\n<li><strong>강제집행</strong> — 임대인 다른 부동산·예금에 대한 압류·경매.</li>\n<li><strong>임차권등기 비용</strong> — 인지·송달·등기 비용 청구 가능(같은 법 제3조의3 제8항).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 옥탑방·근린생활시설은 경매 진행 시 후순위로 밀릴 위험이 크니 임차권등기를 빠르게 진행하세요.</blockquote>',
      },
      {
        title: 'Q4. 불법 증축·근생 위반이면 보증금이 사라지나요?',
        content:
          '<p><strong style="color:#1e3a5f">불법 증축이라도 주거 사용 사실이 있으면 보호되지만, 이행강제금·철거 위험이 별도로 발생합니다.</strong></p>\n<ul>\n<li><strong>주택임대차보호법 적용</strong> — 무허가 옥탑·근생 위반이라도 임차인은 보호.</li>\n<li><strong>이행강제금</strong> — 위반 사실은 임대인 책임, 임차인은 미통지 시 손해배상 청구 가능.</li>\n<li><strong>철거 명령</strong> — 행정대집행으로 철거 시 임차인 손해는 임대인 책임.</li>\n<li><strong>계약 시 고지의무</strong> — 임대인이 위반 사실 고지하지 않았으면 사기·기망 다툼 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 계약 전 건축물대장에서 "위반건축물" 표시 여부를 가능한 한 확인하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차권등기와 대항력 유지',
        summary:
          '대법원 2024다326398 사건(대법원, 2025.04.15 선고)에서 법원은 주택 임차인의 점유 상실 후 마쳐진 임차권등기의 대항력 문제를 정리했습니다. 임차권등기명령은 점유 이탈 후에도 대항력·우선변제권을 유지하는 핵심 수단이라는 점이 확인됐습니다.',
        takeaway:
          '옥탑방·근린생활시설 임차인도 임차권등기를 빠르게 신청하면 이사 후에도 보증금 회수 권리가 유지됩니다.',
      },
    ],
    faq: [
      {
        question: '월세 없이 보증금만 있는 전세인데도 보호되나요?',
        answer:
          '<strong>월세 유무와 무관하게 주택임대차보호법이 적용됩니다.</strong> 전입신고·확정일자로 대항력·우선변제권을 갖추면 됩니다.',
      },
      {
        question: '옥탑방 무허가라 주민센터에서 전입신고가 거절됐어요.',
        answer:
          '<strong>지번·동·호 단위로 전입신고가 가능하며, 무허가여도 주거지 등록이 가능합니다.</strong> 거절 시 행정심판 청구나 다른 동장 면담 요청도 검토하세요.',
      },
      {
        question: '소액임차인 최우선변제 기준은 어떻게 되나요?',
        answer:
          '<strong>지역·시점에 따라 다르며 서울 기준 최근 보증금 1억6,500만 원 이하 소액임차인은 5,500만 원까지 최우선변제됩니다.</strong> 정확한 금액은 주민센터·법률구조공단에서 확인하세요.',
      },
      {
        question: '이미 이사 나왔는데 임차권등기가 가능한가요?',
        answer:
          '<strong>점유 상실 후에도 임차권등기명령을 신청할 수 있습니다.</strong> 다만 임차권등기 비용은 임대인에게 청구 가능합니다(주택임대차보호법 제3조의3 제8항).',
      },
      {
        question: '임대인이 위반건축물 사실을 숨기고 계약했어요.',
        answer:
          '<strong>고지 누락은 기망행위에 해당해 계약 취소·손해배상 청구 가능합니다.</strong> 건축물대장·이행강제금 부과 자료를 증거로 보존하세요.',
      },
    ],
    cta: {
      text: '전세보증금 반환 절차, AI로 정리하기',
      link: '/chat?domain=jeonse',
    },
    internalLinks: [
      { label: '주택임대차보호법 적용 범위', href: '/guide/jeonse/jeonse-housing-protection-act-scope' },
      { label: '임차권등기명령 신청', href: '/guide/jeonse/jeonse-leasehold-registration-order' },
      { label: '소액임차인 최우선변제', href: '/guide/jeonse/jeonse-small-tenant-priority-payment' },
      { label: '위반건축물 고지의무', href: '/guide/jeonse/jeonse-illegal-building-disclosure' },
      { label: '보증금반환 소액심판 절차', href: '/guide/jeonse/jeonse-deposit-small-claims-procedure' },
    ],
  },

  // ─── 5. jeonse / deposit-installment-return ───
  {
    domain: 'jeonse',
    slug: 'jeonse-deposit-installment-return',
    keyword: '보증금 분할반환 합의',
    questionKeyword: '집주인이 보증금을 한 번에 못 준다며 분할반환을 제안하는데 어떻게 하나요?',
    ctaKeyword: '보증금 분할반환 합의서 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '보증금 분할반환 합의 5단계 안전 체크리스트 | 로앤가이드',
      description:
        '집주인이 보증금을 한 번에 못 준다며 분할반환을 제안한다면 합의서·이자·임차권등기 유지 여부를 안전하게 처리하는 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"보증금 못 받고 이사 갈 수도 없는데, 집주인이 분할로 주겠다고 한다"는 상담이 늘고 있습니다. 분할반환 자체는 가능하지만 합의 조건을 잘못 정하면 임차권등기·우선변제권을 잃거나 이자·지연손해금을 받지 못할 수 있습니다. 합의서를 쓸 때 가능한 한 5단계 체크리스트를 거쳐야 안전합니다.</p>',
    sections: [
      {
        title: '5단계 체크리스트 — 분할반환 합의 전 확인 사항',
        content:
          '<p><strong style="color:#1e3a5f">합의서 한 장이 보증금을 좌우하니 다음 5가지를 가능한 한 명시하세요.</strong></p>\n<ol>\n<li><strong>1단계 — 잔여 보증금 정확한 액수</strong> — 차임·관리비 정산 후 미반환 금액 확정.</li>\n<li><strong>2단계 — 분할 일정·금액</strong> — 회차별 지급일·금액 표 형식으로 명시, 1회 미지급 시 즉시 잔액 일시 청구권 명시.</li>\n<li><strong>3단계 — 지연이자 약정</strong> — 보증금 미반환 지연이자 연 5~12% 약정(상사 또는 약정 이율).</li>\n<li><strong>4단계 — 임차권등기 유지</strong> — 합의 중에도 임차권등기명령 유지·신규 신청 가능.</li>\n<li><strong>5단계 — 인감증명·공증</strong> — 합의서에 임대인 인감날인·공증 권고, 강제집행 시 즉시 활용.</li>\n</ol>',
      },
      {
        title: '임차권등기 — 합의해도 절대 풀지 마세요',
        content:
          '<p><strong style="color:#1e3a5f">분할반환 약속만 믿고 임차권등기를 말소하면 우선변제권이 사라집니다.</strong></p>\n<ul>\n<li><strong>등기 유지의 의미</strong> — 다른 채권자·경매 시에도 우선변제권 보호.</li>\n<li><strong>말소 시기</strong> — 보증금 전액 회수 + 통장 입금 확인 후 즉시 말소.</li>\n<li><strong>등기 신청 시점</strong> — 점유 상실 전 또는 후 모두 가능, 빨리 할수록 안전.</li>\n<li><strong>비용</strong> — 임대인 부담 청구 가능(주택임대차보호법 제3조의3 제8항).</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">집주인이 제시한 분할 조건이 안전한지, AI가 합의서 조항별 위험도를 분석해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '지연이자·지연손해금 — 약속 어기면 청구 가능',
        content:
          '<p><strong style="color:#1e3a5f">보증금 미반환 시 임대차 종료일 다음 날부터 지연이자가 발생합니다.</strong></p>\n<ul>\n<li><strong>법정이율</strong> — 일반 민사 연 5%(민법 제379조), 상사 연 6%(상법 제54조).</li>\n<li><strong>약정이율</strong> — 합의서에 연 12% 등 약정 시 우선 적용.</li>\n<li><strong>소송 후 지연손해금</strong> — 소촉법상 연 12% 적용(소장 송달 다음 날부터).</li>\n<li><strong>분할 미이행 시</strong> — "1회라도 지연 시 잔액 전액 즉시 청구"(기한이익 상실) 조항 필수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 분할기간이 6개월 이상이면 지연이자만 수십만 원이 추가되니 약정이율을 높게 설정하세요.</blockquote>',
      },
      {
        title: '강제집행 카드 — 합의 불이행 대비',
        content:
          '<p><strong style="color:#1e3a5f">분할 약속을 어길 때 즉시 집행할 수 있는 권원을 확보해야 합니다.</strong></p>\n<ul>\n<li><strong>공정증서</strong> — 공증사무소에서 "강제집행 인낙" 문구 포함 공증 시 즉시 집행권원.</li>\n<li><strong>지급명령</strong> — 합의서·임대차계약서·등기부 첨부, 2~4주 내 결정.</li>\n<li><strong>가압류</strong> — 임대인 다른 부동산·예금에 가압류, 자금 이탈 차단.</li>\n<li><strong>경매 신청</strong> — 임차권등기로 우선변제권 확보 후 임대인 부동산 경매 신청.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합의서만 있고 공정증서가 없으면 별도 소송이 필요해 시간이 더 걸립니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 보증금 미반환과 임대차계약 종료 후 사용이익',
        summary:
          '대법원 2024다227606 사건(대법원, 2025.08.14 선고)에서 법원은 임대차기간 만료 후 임대인이 보증금을 반환하지 않은 상태에서 임차인이 임차목적물을 계속 사용·수익한 경우 부당이득으로 볼 수 없다고 판시했습니다. 보증금 미반환 상태의 점유는 임차권 행사로 인정될 수 있습니다.',
        takeaway:
          '분할반환 합의 중에도 점유 유지·임차권등기 유지를 통해 임차인 권리는 살아 있다는 점을 확인할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '구두로만 분할 약속을 받았는데 효력이 있나요?',
        answer:
          '<strong>구두 합의도 유효하지만 입증이 어렵고 강제집행이 안 됩니다.</strong> 가능한 한 서면 합의서 + 인감날인 또는 공증을 받으세요.',
      },
      {
        question: '분할 도중 집주인이 부동산을 팔면 어떻게 되나요?',
        answer:
          '<strong>임차권등기·대항력이 유지되면 새 매수인에게도 보증금 반환 의무가 승계됩니다.</strong> 등기부 변동을 주기적으로 확인하세요.',
      },
      {
        question: '합의 중에 임차권등기 신청해도 되나요?',
        answer:
          '<strong>네, 분할 합의 중에도 임차권등기명령 신청은 가능합니다.</strong> 보증금 회수 전까지 등기는 유지하는 게 안전합니다.',
      },
      {
        question: '집주인이 "이자는 못 준다"고 하면 어떻게 하나요?',
        answer:
          '<strong>법정이율 연 5%(민사)는 약정 없어도 당연히 발생합니다.</strong> 약정이자 합의가 안 되면 법정이율로라도 청구 가능합니다.',
      },
      {
        question: '분할 1~2회 받고 연락 두절이면?',
        answer:
          '<strong>잔여 보증금 + 지연이자 + 강제집행을 즉시 진행하세요.</strong> 공정증서가 있으면 바로 집행, 없으면 지급명령부터.',
      },
    ],
    cta: {
      text: '전세보증금 반환 절차, AI로 정리하기',
      link: '/chat?domain=jeonse',
    },
    internalLinks: [
      { label: '임차권등기명령 신청', href: '/guide/jeonse/jeonse-leasehold-registration-order' },
      { label: '보증금 미반환 지연이자', href: '/guide/jeonse/jeonse-deposit-default-interest' },
      { label: '공정증서 강제집행', href: '/guide/jeonse/jeonse-notarized-deed-execution' },
      { label: '지급명령 신청 절차', href: '/guide/jeonse/jeonse-payment-order-procedure' },
      { label: '보증금 가압류 활용', href: '/guide/jeonse/jeonse-deposit-provisional-attachment' },
    ],
  },

  // ─── 6. child-support / overseas-residence-payment ───
  {
    domain: 'child-support',
    slug: 'child-support-overseas-residence-payment',
    keyword: '해외거주 비양육친 양육비',
    questionKeyword: '전 배우자가 해외에 살아서 양육비를 안 보내는데 어떻게 받나요?',
    ctaKeyword: '해외거주 비양육친 양육비 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외거주 비양육친 양육비 5단계 회수 절차 | 로앤가이드',
      description:
        '전 배우자가 해외에 거주하면서 양육비를 보내지 않는다면 국제양육비 회수 협약과 국내 강제집행을 활용하는 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"전 배우자가 미국·캐나다·호주로 가더니 양육비가 끊겼다"는 사연이 늘고 있습니다. 해외 거주라고 양육비를 포기할 필요는 없습니다. 국제양육비 회수 협약(헤이그 양육비 협약), 국내 재산 강제집행, 양육비 이행관리원 신청 등 활용할 수 있는 카드가 여러 장 있습니다. 양육비 부담조서·확정 심판이 있다면 5단계로 정리해보세요.</p>',
    sections: [
      {
        title: '5단계 회수 절차 — 해외거주 비양육친 대응',
        content:
          '<p><strong style="color:#1e3a5f">국내 자산이 있는지부터 확인하고, 없으면 국제 협약으로 진행해야 합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 양육비 부담조서·심판 확정 확인</strong> — 협의이혼 시 부담조서, 재판 이혼 시 양육비 심판 정본 보관.</li>\n<li><strong>2단계 — 국내 재산 조회</strong> — 부동산·예금·자동차·연금 등 가족관계등록부·국세청 자료로 확인.</li>\n<li><strong>3단계 — 양육비 이행관리원 신청</strong> — 양육비이행법에 따른 이행지원 서비스, 무료.</li>\n<li><strong>4단계 — 강제집행</strong> — 국내 재산이 있으면 압류·추심으로 즉시 회수.</li>\n<li><strong>5단계 — 국제양육비 회수 협약</strong> — 한국이 가입한 헤이그 협약 체약국에 송부, 외교부·법무부 협력.</li>\n</ol>',
      },
      {
        title: '국내 재산 강제집행 — 가장 빠른 회수 카드',
        content:
          '<p><strong style="color:#1e3a5f">해외에 살아도 한국에 부동산·예금·연금이 있으면 압류·추심이 가능합니다.</strong></p>\n<ul>\n<li><strong>부동산 등기부 조회</strong> — 인터넷등기소·등기소 방문으로 확인.</li>\n<li><strong>금융기관 예금 조회</strong> — 가사소송법 제62조 재산조회 신청.</li>\n<li><strong>연금·보험금</strong> — 국민연금·개인연금·생명보험 해약환급금 압류 가능.</li>\n<li><strong>출국금지·여권 무효화</strong> — 양육비 1,000만 원 이상 미지급 시 양육비이행법 제21조의3에 따라 신청.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">해외거주 비양육친에게서 양육비를 받을 수 있는 가장 빠른 경로를, AI가 사정에 맞게 분석해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '양육비 이행관리원 — 무료 종합 지원',
        content:
          '<p><strong style="color:#1e3a5f">한국건강가정진흥원 산하 양육비이행관리원은 무료로 이행 지원을 제공합니다.</strong></p>\n<ul>\n<li><strong>한시적 양육비 긴급 지원</strong> — 양육비이행법 제14조, 1인당 월 20만 원 최대 12개월.</li>\n<li><strong>이행명령 신청 대행</strong> — 가정법원 이행명령 신청을 대신 진행.</li>\n<li><strong>감치 신청 지원</strong> — 이행명령 불이행 시 30일 감치 신청.</li>\n<li><strong>국제양육비 송무 협력</strong> — 헤이그 협약 체약국 회수 절차 지원.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 양육비이행관리원에 먼저 상담하면 모든 절차를 무료로 진행할 수 있습니다.</blockquote>',
      },
      {
        title: '국제 협약 — 미국·EU·일본 등 체약국 회수',
        content:
          '<p><strong style="color:#1e3a5f">한국은 2025년 헤이그 양육비 협약 체결 효력 발생, 체약국 간 상호 인정·집행 가능합니다.</strong></p>\n<ul>\n<li><strong>체약국 확인</strong> — 외교부 홈페이지에서 헤이그 양육비 협약 체약국 목록 확인.</li>\n<li><strong>송달·인정 절차</strong> — 한국 결정문을 체약국 중앙당국에 송부, 자국법으로 집행.</li>\n<li><strong>비체약국</strong> — 상호주의·외국 변호사 선임으로 별도 진행, 비용 부담 큼.</li>\n<li><strong>외교부·법무부 협조</strong> — 양육비이행관리원이 창구 역할.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 비체약국 거주 시 회수가 어려울 수 있어, 국내 재산 집행을 우선 시도하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 외국 국적 양육자의 과거양육비 청구',
        summary:
          '대법원 2023스643 사건(대법원, 2023.10.31 선고)에서 법원은 외국 국적 양육자가 한국 국적 비양육자에 대해 인지판결 확정 전 과거양육비를 청구한 사안에서, 인지의 소급효와 별개로 과거양육비를 청구할 수 있다고 판시했습니다. 국적·거주지가 달라도 양육비 권리는 보호됩니다.',
        takeaway:
          '비양육친이 해외에 있어도 양육비 청구권 자체는 살아 있고, 절차적으로 회수 방법을 찾을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '비양육친이 시민권 취득해서 한국 국적이 아닌데도 청구 가능한가요?',
        answer:
          '<strong>가능합니다. 자녀의 한국 국적이 유지되거나 한국 법원에서 양육비 결정이 있었다면 청구권은 유효합니다.</strong> 다만 집행은 거주국 법에 따릅니다.',
      },
      {
        question: '비양육친이 해외 어디 사는지 모를 때는?',
        answer:
          '<strong>가족관계등록부 출입국 기록·외교부 협조로 일부 추적이 가능합니다.</strong> 양육비이행관리원에 의뢰하면 종합 조사를 받을 수 있습니다.',
      },
      {
        question: '국내 재산이 전혀 없으면 어떻게 하나요?',
        answer:
          '<strong>한시적 긴급 양육비 지원(이행관리원 월 20만 원)을 받으면서 헤이그 협약 절차로 진행해야 합니다.</strong> 비체약국이면 회수가 매우 어렵습니다.',
      },
      {
        question: '체약국에서 받은 양육비도 한국에 송금되나요?',
        answer:
          '<strong>체약국 중앙당국이 회수해 한국 양육비이행관리원으로 송금하는 방식입니다.</strong> 환율·송금 수수료가 일부 발생합니다.',
      },
      {
        question: '비양육친이 한국에 입국하면 출국금지 신청 가능한가요?',
        answer:
          '<strong>양육비 1,000만 원 이상 미지급 시 출국금지 가능(양육비이행법 제21조의3).</strong> 입국 시점을 미리 파악해 신청하면 강력한 압박이 됩니다.',
      },
    ],
    cta: {
      text: '양육비 산정기준표, AI로 계산해보기',
      link: '/chat?domain=child-support',
    },
    internalLinks: [
      { label: '양육비 강제집행 절차', href: '/guide/child-support/child-support-enforcement-procedure' },
      { label: '양육비 이행관리원 활용', href: '/guide/child-support/child-support-management-agency-guide' },
      { label: '출국금지·여권 무효화', href: '/guide/child-support/child-support-exit-ban-passport' },
      { label: '재산조회 신청', href: '/guide/child-support/child-support-asset-inquiry' },
      { label: '한시적 긴급 양육비', href: '/guide/child-support/child-support-emergency-temporary-aid' },
    ],
  },

  // ─── 7. rehabilitation / pension-income-treatment ───
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-pension-income-treatment',
    keyword: '국민연금 회생 가용소득',
    questionKeyword: '국민연금만 받는데 개인회생 신청이 가능한가요?',
    ctaKeyword: '국민연금 회생 가용소득 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '국민연금만 받아도 개인회생 신청 가능한가 4가지 핵심 | 로앤가이드',
      description:
        '국민연금만으로 생활하는 채무자가 개인회생을 신청할 수 있는지 자격·가용소득 산정·변제 가능 여부 4가지를 지금 확인하세요.',
    },
    intro:
      '<p>"국민연금 80만 원이 전부인데 회생이 될까요?" 자영업 폐업·은퇴 후 채무가 남은 분들의 가장 큰 걱정입니다. 결론은 "가능"합니다. 채무자회생법 제579조의 가용소득 기준을 충족하면 연금 수급자도 개인회생을 신청할 수 있고, 일정 부분 변제 후 면책으로 마무리됩니다. 다만 가용소득 계산·변제계획 수립이 까다로우니 4가지 핵심을 정리해보세요.</p>',
    sections: [
      {
        title: 'Q1. 연금만으로도 개인회생 자격이 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">정기적·계속적 수입이면 연금도 가용소득에 포함됩니다(채무자회생법 제579조 제3호).</strong></p>\n<ul>\n<li><strong>가용소득 의미</strong> — 채무자의 소득에서 생계비를 뺀 부분, 변제 재원.</li>\n<li><strong>연금 인정</strong> — 국민연금·공무원연금·사학연금·기초연금 모두 정기수입.</li>\n<li><strong>연금만 있어도 가능</strong> — 근로소득이 0이어도 연금이 생계비 초과면 변제 가능.</li>\n<li><strong>최저 변제율</strong> — 채권액의 5% 이상이거나 청산가치 이상이면 인가 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 연금 수급자도 가용소득이 0보다 크면 회생이 가능합니다.</blockquote>',
      },
      {
        title: 'Q2. 가용소득은 어떻게 계산하나요?',
        content:
          '<p><strong style="color:#1e3a5f">월 연금 - 보건복지부 고시 생계비 = 가용소득</strong></p>\n<ul>\n<li><strong>2024년 1인 가구 생계비</strong> — 약 124만 원(중위소득 60% 기준).</li>\n<li><strong>2인 가구</strong> — 약 207만 원, 가족 수에 따라 증가.</li>\n<li><strong>예시</strong> — 국민연금 150만 원 + 1인 가구 → 가용소득 약 26만 원/월.</li>\n<li><strong>변제기간</strong> — 36개월(3년) 기준 → 936만 원 변제 후 면책.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">국민연금·기초연금 합산 시 가용소득이 얼마인지, 변제계획이 가능한지 AI가 즉시 계산해드립니다.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: 'Q3. 연금이 너무 적어서 변제가 불가능하면?',
        content:
          '<p><strong style="color:#1e3a5f">가용소득이 0 이하면 개인회생 대신 개인파산을 검토해야 합니다.</strong></p>\n<ul>\n<li><strong>파산·면책 신청</strong> — 가용소득이 음수면 채무자회생법 제305조 파산 절차로.</li>\n<li><strong>비면책채권 확인</strong> — 양육비·세금·고의 불법행위 손해배상 등은 면책 안 됨.</li>\n<li><strong>국민연금 수령 보호</strong> — 국민연금법 제58조에 따라 압류 금지, 파산 후에도 수령 유지.</li>\n<li><strong>면책 신청</strong> — 파산선고 후 동시폐지 또는 면책결정으로 채무 소멸.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 연금이 매우 적으면 파산·면책 + 기초생활수급 조합이 더 유리합니다.</blockquote>',
      },
      {
        title: 'Q4. 회생 인가받으면 연금이 압류되나요?',
        content:
          '<p><strong style="color:#1e3a5f">회생절차개시결정 후 강제집행은 중지되고, 연금은 압류금지대상으로 보호됩니다.</strong></p>\n<ul>\n<li><strong>개시결정 효력</strong> — 채무자회생법 제593조, 모든 강제집행 중지.</li>\n<li><strong>국민연금 압류금지</strong> — 국민연금법 제58조, 회생 중에도 보호.</li>\n<li><strong>변제 방법</strong> — 채무자가 매월 자발적으로 변제계좌에 입금.</li>\n<li><strong>면책 후</strong> — 잔여 채무 소멸, 연금 수급권 그대로 유지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 연금 입금 통장이 다른 채권자에 의해 압류 중이면 압류금지 통장으로 전환해야 합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 면책결정의 효력 범위',
        summary:
          '대법원 2024마6789 사건(대법원, 2024.12.26 선고)에서 법원은 채무자의 설명의무위반을 이유로 한 면책불허가결정의 정당성을 다뤘습니다. 회생·파산 절차에서 채무자의 성실한 자료 제출이 면책 여부를 좌우한다는 점을 확인했습니다.',
        takeaway:
          '연금 수급 채무자도 소득·재산 자료를 정확히 제출하면 면책으로 새 출발이 가능합니다.',
      },
    ],
    faq: [
      {
        question: '기초연금만 30만 원 받는데도 회생이 가능한가요?',
        answer:
          '<strong>가용소득이 0 이하면 회생 대신 파산·면책을 신청해야 합니다.</strong> 기초연금 수급권은 그대로 보호되니 걱정 마세요.',
      },
      {
        question: '국민연금이 압류돼 있으면 회생 신청이 어렵나요?',
        answer:
          '<strong>회생 개시결정으로 압류는 중지되고, 국민연금은 압류금지로 보호됩니다.</strong> 다만 입금 통장 압류는 별도로 풀어야 합니다.',
      },
      {
        question: '연금 외에 부수입이 조금 있으면 어떻게 되나요?',
        answer:
          '<strong>아르바이트·임대수입 등은 모두 가용소득에 합산됩니다.</strong> 가용소득이 늘면 변제 가능액도 증가합니다.',
      },
      {
        question: '회생 변제기간을 줄일 수 있나요?',
        answer:
          '<strong>표준 36개월이지만 사정에 따라 단축 변경(채무자회생법 제619조) 신청이 가능합니다.</strong> 가용소득 증가·일시금 변제 시 활용하세요.',
      },
      {
        question: '회생 인가 후에도 연금 통장은 그대로 쓸 수 있나요?',
        answer:
          '<strong>네, 연금 수급 통장은 변동 없이 사용 가능합니다.</strong> 회생 변제는 별도 변제계좌로 입금하는 방식입니다.',
      },
    ],
    cta: {
      text: '개인회생 신청 자격, AI로 점검하기',
      link: '/chat?domain=rehabilitation',
    },
    internalLinks: [
      { label: '개인회생 가용소득 산정', href: '/guide/rehabilitation/rehabilitation-disposable-income-calculation' },
      { label: '국민연금 압류금지 보호', href: '/guide/rehabilitation/rehabilitation-pension-attachment-prohibition' },
      { label: '개인파산·면책 절차', href: '/guide/bankruptcy/bankruptcy-procedure-comprehensive' },
      { label: '회생 변제계획안 작성', href: '/guide/rehabilitation/rehabilitation-payment-plan-drafting' },
      { label: '비면책채권 점검', href: '/guide/rehabilitation/rehabilitation-non-dischargeable-debts' },
    ],
  },

  // ─── 8. bankruptcy / pension-account-protection ───
  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-pension-account-protection',
    keyword: '국민연금 통장 압류 면책 보호',
    questionKeyword: '파산·면책 후에도 국민연금 통장이 압류돼 있으면 어떻게 푸나요?',
    ctaKeyword: '국민연금 통장 압류금지 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '국민연금 압류금지 통장 4단계 보호 절차 | 로앤가이드',
      description:
        '파산·면책 후에도 국민연금 입금 통장이 압류되어 있다면 압류금지 통장 전환과 압류해제 신청 4단계를 지금 확인하세요.',
    },
    intro:
      '<p>"면책결정을 받았는데도 국민연금 통장이 막혀 있다"는 상담이 많습니다. 국민연금은 국민연금법 제58조로 압류가 금지되지만, 입금되는 통장 자체는 다른 채권자에 의해 압류될 수 있습니다. 압류금지 통장(행복지킴이통장 등)으로 전환하고 압류해제 신청을 함께 진행해야 연금을 자유롭게 사용할 수 있습니다.</p>',
    sections: [
      {
        title: '4단계 절차 — 연금 통장 압류 풀고 압류금지 통장 전환',
        content:
          '<p><strong style="color:#1e3a5f">압류 풀기 + 압류금지 통장 전환을 동시에 진행하는 게 핵심입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 압류통장 확인</strong> — 통장 거래내역에서 "법원 압류" 표시 확인, 등기우편 압류명령서 보관.</li>\n<li><strong>2단계 — 면책결정문 사본 준비</strong> — 법원에서 면책결정정본 발급, 채권자 목록 확인.</li>\n<li><strong>3단계 — 압류금지 신청 또는 압류해제</strong> — 집행법원에 "압류금지채권 범위 변경" 또는 "강제집행정지" 신청.</li>\n<li><strong>4단계 — 행복지킴이통장 개설</strong> — 국민연금공단·은행에서 압류금지 통장 개설, 연금 수령 계좌 변경.</li>\n</ol>',
      },
      {
        title: '국민연금 압류금지 — 법적 근거와 한도',
        content:
          '<p><strong style="color:#1e3a5f">국민연금법 제58조와 민사집행법 제246조에 따라 연금은 원칙적으로 압류금지입니다.</strong></p>\n<ul>\n<li><strong>국민연금법 제58조</strong> — 국민연금 수급권 양도·압류 금지.</li>\n<li><strong>민사집행법 제246조 제1항 제8호</strong> — 채무자의 국민연금 등 압류금지채권.</li>\n<li><strong>입금 후 통장 잔액</strong> — 입금된 후 자금은 일반 예금이 되어 압류 가능 → 그래서 압류금지 통장 필요.</li>\n<li><strong>최저생계비 보호</strong> — 같은 법 제246조 제1항 제8호의2, 월 185만 원까지 압류금지.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">압류 통장에서 연금을 인출하려면 어떤 신청서를 어디에 내야 하는지, AI가 즉시 안내해드립니다.</p>\n<a href="/chat?domain=bankruptcy" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '행복지킴이통장 — 압류금지 전용 통장',
        content:
          '<p><strong style="color:#1e3a5f">국민연금공단이 지정한 은행에서 개설하는 압류금지 전용 통장입니다.</strong></p>\n<ul>\n<li><strong>입금 한도</strong> — 월 185만 원까지(2024년 기준).</li>\n<li><strong>지정은행</strong> — 농협·우리·신한·국민·기업 등 주요 시중은행.</li>\n<li><strong>개설 서류</strong> — 신분증·국민연금 수급증서·인감 또는 서명.</li>\n<li><strong>수령계좌 변경</strong> — 국민연금공단에 연금 수령 계좌 변경 신청서 제출.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 면책결정 후 새 통장을 만들면 기존 압류는 해제 신청 없이도 자연스럽게 회피됩니다.</blockquote>',
      },
      {
        title: '압류해제 신청 — 기존 통장 정상화',
        content:
          '<p><strong style="color:#1e3a5f">면책된 채무는 강제집행 효력이 소멸되므로 압류해제를 신청할 수 있습니다.</strong></p>\n<ul>\n<li><strong>강제집행정지·취소 신청</strong> — 면책결정문 첨부, 집행법원에 신청(채무자회생법 제565조).</li>\n<li><strong>채권자 채권추심 신고 확인</strong> — 채권자 목록에 포함되어 면책된 채권인지 확인.</li>\n<li><strong>비면책채권 주의</strong> — 양육비·세금·벌금 등은 면책 후에도 강제집행 가능.</li>\n<li><strong>압류해제 통보</strong> — 법원 결정 후 은행에 결정문 사본 제출, 통장 정상화.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 면책결정문에 "압류해제"가 자동으로 들어가지 않으니 별도 신청이 필요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 면책결정의 효력과 압류 해제',
        summary:
          '대법원 2022다247378 사건(대법원, 2025.06.12 선고)에서 법원은 개인파산절차에서 면책결정의 효력이 우선변제권 있는 채권에까지 미치는지를 정리했습니다. 면책 효력 범위 안에 들어가는 채권의 압류는 효력을 잃고, 채무자는 강제집행 정지·취소를 신청할 수 있다는 점이 확인됐습니다.',
        takeaway:
          '면책된 채무 기반 압류는 더 이상 유효하지 않으므로 통장 정상화 신청이 가능합니다.',
      },
    ],
    faq: [
      {
        question: '연금 입금 직후 출금하면 압류를 피할 수 있나요?',
        answer:
          '<strong>입금 즉시 인출하면 잔액이 적어 영향이 없을 수 있지만, 매번 은행 방문이 번거롭습니다.</strong> 행복지킴이통장으로 전환하는 게 안전합니다.',
      },
      {
        question: '국민연금 외에 기초연금도 압류금지되나요?',
        answer:
          '<strong>네, 기초연금법 제21조와 민사집행법 제246조로 압류금지됩니다.</strong> 두 연금 모두 행복지킴이통장으로 받을 수 있습니다.',
      },
      {
        question: '압류해제 신청은 어디에 하나요?',
        answer:
          '<strong>강제집행을 신청한 집행법원(원래 채권자가 소송한 법원)에 신청합니다.</strong> 면책결정문 사본·신분증·신청서가 필요합니다.',
      },
      {
        question: '비면책채권으로 인한 압류는 어떻게 되나요?',
        answer:
          '<strong>양육비·세금·고의 불법행위 등 비면책채권은 면책 후에도 강제집행이 가능합니다.</strong> 이 경우 압류해제는 어렵고 행복지킴이통장으로 회피해야 합니다.',
      },
      {
        question: '행복지킴이통장 개설이 거절되면 어떻게 하나요?',
        answer:
          '<strong>국민연금공단에 직접 문의해 다른 지정은행에서 개설을 시도하세요.</strong> 신용불량 정보와 무관하게 개설 가능합니다.',
      },
    ],
    cta: {
      text: '파산 면책 가능성, AI로 점검하기',
      link: '/chat?domain=bankruptcy',
    },
    internalLinks: [
      { label: '면책결정 후 강제집행정지', href: '/guide/bankruptcy/bankruptcy-stay-of-execution-after-discharge' },
      { label: '압류금지 채권 범위', href: '/guide/bankruptcy/bankruptcy-attachment-prohibited-claims' },
      { label: '비면책채권 확인', href: '/guide/bankruptcy/bankruptcy-non-dischargeable-debts' },
      { label: '행복지킴이통장 개설', href: '/guide/bankruptcy/bankruptcy-happy-protection-account' },
      { label: '면책결정 후 신용 회복', href: '/guide/bankruptcy/bankruptcy-credit-rebuild-after-discharge' },
    ],
  },

  // ─── 9. industrial-accident / mental-illness-acknowledge ───
  {
    domain: 'industrial-accident',
    slug: 'industrial-accident-mental-illness-acknowledge',
    keyword: '직장 정신질환 산재 인정',
    questionKeyword: '직장 내 괴롭힘·과로로 우울증 진단을 받았는데 산재로 인정받을 수 있나요?',
    ctaKeyword: '정신질환 산재 인정 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '직장 정신질환 산재 5단계 인정 절차 | 로앤가이드',
      description:
        '직장 내 괴롭힘·과로·고객응대 스트레스로 우울증·적응장애 진단을 받았다면 산재 인정 5단계와 업무관련성 입증 자료를 지금 확인하세요.',
    },
    intro:
      '<p>"매일 회사 가는 게 너무 힘들어 정신과를 갔는데 적응장애·우울증 진단을 받았어요." 이 경우 산재 신청 가능성이 점점 넓어지고 있습니다. 산업재해보상보험법 제37조 제1항 제2호는 "업무상 질병"에 정신적 질병을 포함시키고, 시행령 제34조 별표3은 외상후스트레스장애·적응장애·우울에피소드까지 인정 기준을 두고 있습니다. 신청 전 5단계로 정리해보세요.</p>',
    sections: [
      {
        title: '5단계 인정 절차 — 정신질환 산재 신청',
        content:
          '<p><strong style="color:#1e3a5f">진단부터 인정·보상까지 5단계, 업무관련성 입증이 핵심입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정신과 진단·소견서</strong> — 우울증·적응장애·외상후스트레스장애 등 ICD-10 코드 명시.</li>\n<li><strong>2단계 — 업무관련성 자료 수집</strong> — 야근·괴롭힘·민원·사고 목격 등 사건 시간순 정리.</li>\n<li><strong>3단계 — 근로복지공단 요양급여 신청</strong> — 산재신청서·진단서·재해경위서 제출.</li>\n<li><strong>4단계 — 업무상질병판정위원회 심의</strong> — 의학적 판단 + 업무 인과관계 종합 심의.</li>\n<li><strong>5단계 — 인정 시 보상</strong> — 요양급여(치료비) + 휴업급여(평균임금 70%) + 후유장해 시 장해급여.</li>\n</ol>',
      },
      {
        title: '업무관련성 입증 — 어떤 자료가 필요한가',
        content:
          '<p><strong style="color:#1e3a5f">"업무→스트레스→정신질환"의 인과를 객관 자료로 입증해야 합니다.</strong></p>\n<ul>\n<li><strong>근무시간 자료</strong> — 출퇴근 기록·급여명세서로 야근·과로 입증.</li>\n<li><strong>괴롭힘 증거</strong> — 메신저·녹음·이메일·증인 진술서.</li>\n<li><strong>고객응대 강도</strong> — 콜센터·민원응대 부서면 통계·매뉴얼 자료.</li>\n<li><strong>사건 사고</strong> — 폭언·폭력·자해·동료 사망 목격 등 트라우마 사건 시간순 기록.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">정신질환 산재 인정 가능성을, AI가 진단명·근무환경·업무 사건 기준으로 분석해드립니다.</p>\n<a href="/chat?domain=industrial-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '인정 기준 — 산재보험법 시행령 별표3',
        content:
          '<p><strong style="color:#1e3a5f">시행령 제34조 별표3에 명시된 정신질환 인정 기준이 핵심입니다.</strong></p>\n<ul>\n<li><strong>외상후스트레스장애</strong> — 업무 중 충격 사건(폭력·사망목격 등) 6개월 내 발병.</li>\n<li><strong>적응장애·우울에피소드</strong> — 업무 변화·괴롭힘·해고통보 등 스트레스 사건 후 발병.</li>\n<li><strong>업무관련성 강도</strong> — "강한 정신적 부담"이 의학적 인정 기준.</li>\n<li><strong>개인적 요인</strong> — 가족·재정 문제 등 개인 사유와 업무 사유의 비중 비교.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진단명·발병 시점·업무 사건이 명확히 시간순으로 정리될수록 인정 가능성이 높아집니다.</blockquote>',
      },
      {
        title: '불승인 시 대응 — 심사·재심사·행정소송',
        content:
          '<p><strong style="color:#1e3a5f">산재 불승인 결정 시 90일 내 심사청구로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>심사청구</strong> — 결정문 받은 날부터 90일 이내 근로복지공단에 제출.</li>\n<li><strong>재심사청구</strong> — 심사 결과 불복 시 90일 이내 산업재해보상보험재심사위원회에 제출.</li>\n<li><strong>행정소송</strong> — 재심사 결정 후 90일 이내 행정법원 제소.</li>\n<li><strong>의사 소견서 추가</strong> — 정신과 전문의·산업의학과 전문의 추가 소견 확보.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 불승인 후에도 추가 자료·전문의 소견으로 인정되는 사례가 적지 않으니 포기하지 마세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 콜센터 상담원의 뇌출혈 업무상 재해',
        summary:
          '대법원 2022두47391 사건(대법원, 2023.04.13 선고)에서 법원은 콜센터 상담원의 "뇌기저핵출혈"이 업무상 재해에 해당하는지를 판단하면서, 정신적 스트레스가 신체적 질병으로 이어진 경우에도 업무 관련성을 인정했습니다. 정신적 부담이 누적된 업무 환경에서의 질병은 산재로 인정될 여지가 큽니다.',
        takeaway:
          '정신질환·정신적 부담에서 비롯된 신체 질병도 업무관련성이 입증되면 산재 보호 대상입니다.',
      },
    ],
    faq: [
      {
        question: '괴롭힘 증거가 부족해도 산재 인정이 가능한가요?',
        answer:
          '<strong>객관 자료가 적어도 동료 진술·근무환경 분석으로 인정될 수 있습니다.</strong> 다만 입증이 약하면 심사·재심사로 가야 할 가능성이 큽니다.',
      },
      {
        question: '퇴사한 후에도 산재 신청이 가능한가요?',
        answer:
          '<strong>네, 재해 발생일부터 3년 이내(요양급여)면 신청 가능합니다.</strong> 퇴사 사유가 정신질환 때문이면 더 강력한 입증이 됩니다.',
      },
      {
        question: '치료비는 어디까지 보상되나요?',
        answer:
          '<strong>산재 요양급여는 치료비 전액 + 약값 + 입원 시 식대까지 보상합니다.</strong> 본인부담 없이 산재 의료기관에서 치료받을 수 있습니다.',
      },
      {
        question: '정신질환 산재 평균 인정 기간은 얼마나 걸리나요?',
        answer:
          '<strong>업무상질병판정위원회 심의를 거쳐 보통 4~6개월 소요됩니다.</strong> 자료 보완 요구 시 더 길어질 수 있습니다.',
      },
      {
        question: '직장 내 괴롭힘 노동위 진정과 병행해도 되나요?',
        answer:
          '<strong>네, 산재 신청과 직장 내 괴롭힘 진정은 병행 가능합니다.</strong> 노동위 사실관계 확정이 산재 입증 자료로 활용될 수 있습니다.',
      },
    ],
    cta: {
      text: '산재 인정 가능성, AI로 점검하기',
      link: '/chat?domain=industrial-accident',
    },
    internalLinks: [
      { label: '산재 요양급여 신청', href: '/guide/industrial-accident/industrial-accident-medical-benefit-apply' },
      { label: '업무상 질병 인정 기준', href: '/guide/industrial-accident/industrial-accident-occupational-disease-criteria' },
      { label: '업무관련성 입증 자료', href: '/guide/industrial-accident/industrial-accident-work-relevance-evidence' },
      { label: '산재 불승인 심사청구', href: '/guide/industrial-accident/industrial-accident-review-claim-procedure' },
      { label: '직장 내 괴롭힘 진정', href: '/guide/dismissal/dismissal-workplace-bullying-claim' },
    ],
  },

  // ─── 10. stalking / online-game-harassment-checklist ───
  {
    domain: 'stalking',
    slug: 'stalking-online-game-harassment-checklist',
    keyword: '온라인 게임 스토킹 체크리스트',
    questionKeyword: '온라인 게임에서 욕설·집요한 추적·DM 폭주를 당하는데 스토킹으로 신고할 수 있나요?',
    ctaKeyword: '온라인 게임 스토킹 신고 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '온라인 게임 스토킹 4단계 신고 체크리스트 | 로앤가이드',
      description:
        '게임 내 채팅·DM·길드 추적·실시간 따라다니기로 괴롭힘을 당한다면 스토킹범죄 신고 가능성과 증거 체크리스트 4단계를 지금 확인하세요.',
    },
    intro:
      '<p>"게임 안에서 매일 따라다니고 DM 폭주, 길드 강퇴 협박을 받아요." 이런 온라인 게임 괴롭힘도 2024년 개정 이후 스토킹범죄로 신고할 수 있게 되었습니다. 스토킹범죄의 처벌 등에 관한 법률 제2조는 "정보통신망을 이용한 글·말·부호·음향" 반복도 스토킹행위로 규정하고 있습니다. 게임 캡처·로그를 정리하면 신고가 가능합니다.</p>',
    sections: [
      {
        title: '4단계 체크리스트 — 신고 전 정리',
        content:
          '<p><strong style="color:#1e3a5f">증거 캡처·로그 보존이 신고의 80%를 차지합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가해자 닉네임·계정 식별</strong> — 게임 ID·상위 길드명·채널·서버 정보 메모.</li>\n<li><strong>2단계 — 채팅·DM 캡처</strong> — 욕설·협박·DM 폭주를 시간순으로 캡처, 메타데이터 보존.</li>\n<li><strong>3단계 — 게임사 신고·로그 확보</strong> — 게임사에 1차 신고하고 운영팀에서 발급한 로그 보관.</li>\n<li><strong>4단계 — 경찰 스토킹범죄 신고</strong> — 캡처·로그·신원 정보로 관할 경찰서 또는 사이버수사대 접수.</li>\n</ol>',
      },
      {
        title: '스토킹행위 인정 — 게임 내 어떤 행동이 해당되나',
        content:
          '<p><strong style="color:#1e3a5f">스토킹범죄법 제2조는 "정보통신망 이용한 반복적 접근"을 명시합니다.</strong></p>\n<ul>\n<li><strong>반복적 DM·메시지</strong> — 차단해도 부계정으로 연락, 공포·불안 야기.</li>\n<li><strong>실시간 추적</strong> — 본인 캐릭터 위치 따라다니기, 같은 채널·맵 반복 이동.</li>\n<li><strong>욕설·협박·모욕</strong> — 게임 내 채팅·길드 단톡방에서 반복적 적시.</li>\n<li><strong>커뮤니티 신상 공개</strong> — 본인 게임 ID·실명·사진 등을 커뮤니티에 게시.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">게임 내 행동이 스토킹범죄로 신고될 수 있는지, AI가 캡처·로그 기준으로 분석해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '잠정조치·접근금지 — 신고 직후 보호',
        content:
          '<p><strong style="color:#1e3a5f">스토킹범죄법 제9조 잠정조치로 가해자 접근·연락을 금지할 수 있습니다.</strong></p>\n<ul>\n<li><strong>제1호 잠정조치</strong> — 서면경고.</li>\n<li><strong>제2호</strong> — 100m 이내 접근 금지.</li>\n<li><strong>제3호</strong> — 정보통신망 이용한 접근 금지(게임·DM·SNS 차단 명령).</li>\n<li><strong>제4호</strong> — 유치장·구치소 유치(중대 사안).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 게임 사건은 제3호(정보통신망 접근금지) 신청이 핵심입니다. 위반 시 즉시 처벌.</blockquote>',
      },
      {
        title: '게임사 협조·계정 차단 — 형사 외 보호 카드',
        content:
          '<p><strong style="color:#1e3a5f">경찰 신고와 별개로 게임사 신고를 병행하면 보호가 빨라집니다.</strong></p>\n<ul>\n<li><strong>게임사 1차 신고</strong> — 게임 내 신고 기능·고객센터로 가해자 계정 차단 요청.</li>\n<li><strong>로그 발급 요청</strong> — 형사 사건 진행 위해 게임사 로그 데이터 요청, 공문 첨부.</li>\n<li><strong>커뮤니티·SNS 차단</strong> — 같은 가해자가 다른 플랫폼으로 옮길 가능성 대비.</li>\n<li><strong>심리 지원</strong> — 한국여성의전화·서울해바라기센터 등 무료 상담·법률 지원.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 게임사 신고만으로는 형사 처벌이 없으니 가능한 한 경찰 스토킹 신고를 병행하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망 이용 반복 행위와 스토킹',
        summary:
          '대법원 2022도12037 사건(대법원, 2023.05.18 선고)에서 법원은 상대방에게 전화를 걸어 벨소리를 울리거나 부재중 전화 문구가 표시되도록 한 행위가 스토킹범죄에 해당하는지를 다뤘습니다. 정보통신망을 통한 반복적 접근이 피해자의 불안·공포를 유발하면 스토킹행위로 인정될 수 있습니다.',
        takeaway:
          '게임 내 DM 폭주·반복 알림·실시간 추적도 같은 법리로 스토킹범죄 인정이 가능합니다.',
      },
    ],
    faq: [
      {
        question: '닉네임만 알고 실제 신원을 모르는데 신고가 가능한가요?',
        answer:
          '<strong>네, 게임 ID만으로도 신고 가능합니다.</strong> 경찰이 게임사에 협조 요청해 가입자 정보를 특정합니다.',
      },
      {
        question: '게임 내 욕설 한두 번도 스토킹이 되나요?',
        answer:
          '<strong>1~2회 단발성은 모욕죄·명예훼손은 가능해도 스토킹은 "반복성"이 요건입니다.</strong> 보통 3회 이상 반복돼야 스토킹으로 인정될 수 있습니다.',
      },
      {
        question: '캡처에 시간·날짜가 안 보이면 증거가 안 되나요?',
        answer:
          '<strong>게임사 로그·시스템 메시지로 시점이 확인되면 보완됩니다.</strong> 캡처 시 가능하면 시계·시스템 시간이 보이도록 하세요.',
      },
      {
        question: '가해자가 부계정으로 또 접근하면 어떻게 하나요?',
        answer:
          '<strong>잠정조치 위반은 즉시 처벌(스토킹범죄법 제20조)되니 추가 캡처 후 즉시 신고하세요.</strong> 부계정도 같은 사람임이 입증되면 가중처벌 대상으로 검토될 수 있습니다.',
      },
      {
        question: '미성년자가 가해자면 어떻게 처리되나요?',
        answer:
          '<strong>14세 이상이면 형사 처벌 가능, 14세 미만이면 소년부 송치됩니다.</strong> 어느 쪽이든 보호자에게 통지되고 접근금지 조치는 가능합니다.',
      },
    ],
    cta: {
      text: '스토킹 고소 대응 순서, AI로 점검하기',
      link: '/chat?domain=stalking',
    },
    internalLinks: [
      { label: '스토킹범죄 신고 절차', href: '/guide/stalking/stalking-report-procedure' },
      { label: '잠정조치 접근금지 신청', href: '/guide/stalking/stalking-emergency-measures' },
      { label: '온라인 스토킹 증거 수집', href: '/guide/stalking/stalking-online-evidence-collection' },
      { label: '게임사·플랫폼 협조 요청', href: '/guide/stalking/stalking-platform-cooperation' },
      { label: '스토킹 피해자 보호 지원', href: '/guide/stalking/stalking-victim-protection-support' },
    ],
  },
];
