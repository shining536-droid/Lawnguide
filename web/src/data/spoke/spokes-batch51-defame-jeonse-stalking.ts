import { SpokePage } from '../spoke-pages';

// batch51 defame+jeonse+stalking 7개 (defamation 3 + jeonse 2 + stalking 2)
//
// 고유 존재 이유:
// 1. 이 페이지는 직장 내 허위 소문·험담으로 명예가 훼손된 직원이 회사 내부 진술서·메신저·소셜 증거를 정리해 형사 고소·민사 손배·사내 징계를 동시에 검토하도록 돕는 페이지다.
// 2. 이 페이지는 라이브 방송에서 발언으로 명예훼손 다툼에 휘말린 진행자가 사실 적시·공익 면책 항변과 라이브 영상 보존·분석 절차를 정리하도록 돕는 페이지다.
// 3. 이 페이지는 익명 메시지앱(블라인드·에브리타임 등)에 명예훼손 글이 올라온 피해자가 통신사 자료보전 신청·신원확인 청구·형사 고소를 단계별로 진행하도록 돕는 페이지다.
// 4. 이 페이지는 미등기 신축·등기 지연 주택 임차인이 전입신고·확정일자·임차권등기명령으로 보증금을 보호하는 절차를 정리하도록 돕는 페이지다.
// 5. 이 페이지는 다가구주택 임차인이 보증금 우선변제·소액임차인 한도와 주임법 제8조·시행령 우선변제 절차를 정리하도록 돕는 페이지다.
// 6. 이 페이지는 직장 동료 스토킹 피해자가 사내 인사조치·직장 내 괴롭힘·스토킹처벌법을 결합해 보호 절차를 정리하도록 돕는 페이지다.
// 7. 이 페이지는 학교 내 후배·동급생 스토킹·학폭 피해자가 학교폭력예방법·스토킹처벌법을 결합해 학교 심의·형사 고소를 동시에 검토하도록 돕는 페이지다.

export const spokesBatch51DefameJeonseStalking: SpokePage[] = [
  // ─── 1. defamation / false-rumor-workplace-claim (절차형, victim) ───
  {
    domain: 'defamation',
    slug: 'defamation-false-rumor-workplace-claim',
    keyword: '직장 내 허위 소문 명예훼손 입증',
    questionKeyword: '직장에서 동료가 허위 소문을 퍼뜨려 명예가 훼손됐어요',
    ctaKeyword: '직장 허위 소문 명예훼손 입증 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '직장 내 허위 소문 명예훼손 입증 5단계 절차 | 로앤가이드',
      description:
        '직장 동료의 허위 소문·험담으로 명예가 훼손됐다면 진술서·메신저·소셜 증거 5단계 입증 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"동료가 회의실 밖에서 사실이 아닌 소문을 퍼뜨리고 있다는 걸 다른 직원에게 들었어요. 인사 평가에도 영향이 갈 것 같아 너무 답답합니다." 직장 내 허위 소문은 형법 제307조 제2항(허위사실 명예훼손) + 정보통신망법 제70조 제2항(메신저 사용 시) + 사내 직장 내 괴롭힘 신고가 동시에 검토 대상이 됩니다. 핵심은 소문의 출처·전파 경로·내용이 허위라는 점을 객관적으로 입증할 자료를 정리하는 것입니다.</p>',
    sections: [
      {
        title: '직장 허위 소문 명예훼손 입증 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단(KLAC) 명예훼손 형사 절차를 참고하면 아래 순서로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 소문 인지 즉시 기록 (즉시)</strong> — 들은 일자·장소·발언자·내용을 시간 순으로 기록. 들은 직원의 인적사항·진술 가능 여부 확인.</li>\n<li><strong>2단계 — 디지털 증거 수집 (1주 내)</strong> — 사내 메신저(잔디·슬랙·카카오워크)·이메일·단톡방 캡처. 발언 시각·발신자 ID·전체 화면 보존.</li>\n<li><strong>3단계 — 사실관계 자료 정리</strong> — 소문이 허위라는 점을 보여주는 자료(근태·실적·재무 자료 등)를 함께 정리. 허위사실 명예훼손은 가중 처벌(7년 이하·정보통신망법 위반 시).</li>\n<li><strong>4단계 — 사내 신고 + 형사 고소 동시 검토</strong> — 인사팀·고충처리위원회에 직장 내 괴롭힘 신고 + 경찰 형사 고소장 제출. 동일 사건이 사내 징계·형사 처벌·민사 손배로 다층 진행 가능.</li>\n<li><strong>5단계 — 민사 손배 + 사내 분리·인사조치</strong> — 민법 제750조 위자료 청구 + 인사 분리 요청(부서 이동·재배치). 회사가 분리 의무를 다하지 않으면 사용자 책임도 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">직장 허위 소문 입증 가능성과 형사·사내 절차를 AI가 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">직장 명예훼손 AI 상담 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 진술서·소셜 증거 확보 실무',
        content:
          '<p><strong style="color:#1e3a5f">직장 내 명예훼손은 "공연성" 입증이 핵심입니다. 다수 직원이 인지·전파했음을 보여주는 자료가 필요합니다.</strong></p>\n<ul>\n<li><strong>공연성 의미</strong> — 형법 제307조는 "공연히 사실을 적시"한 경우 처벌. 단톡방·회의실·휴게실에서 다수 직원에게 전달된 정황이 공연성 입증 자료.</li>\n<li><strong>들은 직원 진술서</strong> — 누가·언제·어디서·어떻게 들었는지 시간 순으로 기재. 가능하면 인감·서명·날짜 포함. 진술 거부하는 동료는 사실조회 신청으로 대체 검토.</li>\n<li><strong>사내 메신저 캡처</strong> — 잔디·슬랙·카카오워크 등 사내 협업툴에서 오간 메시지 보존. 회사 보존 정책상 30~90일 후 삭제될 수 있어 빠른 캡처가 안전.</li>\n<li><strong>전파 영향 자료</strong> — 인사 평가·동료 응대 변화·평판 저하 영향 자료. 정신과 진료 기록·상담 기록도 위자료 산정 근거로 활용.</li>\n<li><strong>회사 자료 보전 요청</strong> — 메신저 서버 로그·이메일 백업 등 회사 보유 자료에 대한 보전 요청 공문 발송. 폐기되면 입증이 어려워집니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 동료에게 직접 따지면 가해자가 증거를 삭제하거나 입을 맞추는 사례가 있습니다. 증거 수집·신고 단계를 거친 후 공식 절차로 대응하는 것이 안전합니다.</blockquote>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">형사·민사·사내 3트랙 동시 진행에 필요한 자료를 미리 정리하세요.</strong></p>\n<ul>\n<li><strong>형사 고소장</strong> — 고소 취지·피해 사실(시간 순)·증거목록 + 본인 신분증·재직증명서·사내 조직도.</li>\n<li><strong>증거 자료</strong> — 들은 직원 진술서·인감증명·연락처 + 사내 메신저 캡처(시간정보 포함) + 이메일 백업 + 단톡방 캡처.</li>\n<li><strong>허위사실 입증 자료</strong> — 소문 내용이 허위임을 보여주는 객관 자료(근태·실적·재무·공식 발표 등). 허위 입증이 강할수록 정보통신망법 가중 처벌 검토 가능.</li>\n<li><strong>사내 신고 자료</strong> — 인사팀·고충처리위원회 신고서 + 직장 내 괴롭힘 진정서. 회사 처리 결과 보존(징계·미징계 무관).</li>\n<li><strong>민사 손배 자료</strong> — 정신과 진료 기록·상담 기록·인사 평가 자료·이직 의사 결정 자료. 손해 발생을 객관적으로 보여주는 자료가 위자료 산정 근거.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사내 신고와 형사 고소를 동시에 진행하면 회사가 분리·재배치 의무를 다하지 않을 경우 사용자 책임을 함께 다툴 수 있는 사례가 있습니다.</blockquote>',
      },
      {
        title: '다툴 포인트 — 허위·진실 명예훼손 구분',
        content:
          '<p><strong style="color:#1e3a5f">허위사실인지 진실 적시인지에 따라 처벌·항변 구조가 다릅니다.</strong></p>\n<ul>\n<li><strong>허위사실 명예훼손(형법 제307조 제2항·정보통신망법 제70조 제2항)</strong> — 5년 이하·7년 이하로 가중 처벌. 진실성 항변 불가. 본인 명예 보호에 가장 유리한 구성요건.</li>\n<li><strong>진실 적시 명예훼손(제307조 제1항)</strong> — 진실이라도 처벌 가능하지만 형법 제310조 위법성조각(공익성) 항변 가능. 가해자가 진실성 입증해도 반드시 면책되지는 않음.</li>\n<li><strong>모욕죄(제311조)</strong> — 사실 적시 없이 욕설·비하만 있으면 모욕죄. 1년 이하·200만원 이하. 친고죄로 6개월 내 고소 필요.</li>\n<li><strong>직장 내 괴롭힘(근로기준법 제76조의2)</strong> — 사용자에게 조사·조치 의무. 회사가 분리·재배치를 안 하면 사용자도 손배 책임 검토 대상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "직장 내 일이라 형사가 가능한지 모르겠다"고 미루다 증거가 폐기되는 사례가 있습니다. 사내 신고와 형사 고소는 별개 트랙으로 동시 검토할 수 있어요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 단톡방 직장 내 명예훼손과 공연성 입증',
        summary:
          '대법원 2021도6416 사건(대법원, 2021.08.26 선고)에서 법원은 직장 내에서 사실 적시 명예훼손이 문제된 사안에서 공연성 요건과 전파가능성 법리를 적용해 명예훼손의 성립 여부를 판단한 사례입니다.',
        takeaway:
          '직장 내 허위 소문은 듣는 사람이 한정되어 있어도 "전파 가능성"이 인정되면 공연성이 성립할 수 있어, 들은 직원 진술서·전파 경로 자료를 체계적으로 정리해두는 것이 입증에 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '회사 단톡방에서 한 발언도 명예훼손이 되나요?',
        answer:
          '<strong>네, 정보통신망법 제70조 적용 검토 대상입니다.</strong> 사내 메신저·단톡방도 정보통신망에 해당해 비방 목적이 인정되면 가중 처벌이 가능해요.',
      },
      {
        question: '들은 동료가 진술을 거부하면 입증이 어렵나요?',
        answer:
          '<strong>법원 사실조회·증인 신문으로 대체 가능합니다.</strong> 동료가 직접 진술서를 안 써도 메신저 캡처·이메일 백업으로 보강하고 형사 단계에서 참고인 조사 요청을 검토하세요.',
      },
      {
        question: '인사팀에 신고했는데 회사가 별다른 조치를 안 하면 어떻게 하나요?',
        answer:
          '<strong>고용노동부 진정·근로기준법 제76조의2 위반 신고 + 사용자 손배 청구를 검토할 수 있습니다.</strong> 회사 책임도 함께 다툴 수 있는 사례가 있어요.',
      },
      {
        question: '명예훼손 고소 후 회사에서 보복 인사를 당할 수 있나요?',
        answer:
          '<strong>근로기준법 제76조의3에 따라 신고로 인한 불이익 처우는 금지됩니다.</strong> 보복 인사가 의심되면 노동위·KLAC(132) 무료 상담을 받아보실 수 있어요.',
      },
      {
        question: '소문의 최초 출처를 모를 때도 고소가 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 형사 단계에서 수사기관이 메신저 로그·통신자료로 출처를 추적하는 사례가 있어, 들은 직원·전파 경로부터 정리해 고소장을 제출하세요.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '온라인 후기 사실 명예훼손 항변', href: '/guide/defamation/defamation-online-review-truth-defense' },
      { label: '공인 비판 명예훼손 방어', href: '/guide/defamation/defamation-public-figure-criticism-protect' },
      { label: '익명 작성자 신원확인 절차', href: '/guide/defamation/defamation-anonymous-poster-identity-trace' },
      { label: '명예훼손 고소장 작성 가이드', href: '/guide/defamation/defamation-complaint-writing-guide' },
      { label: '온라인 명예훼손 형사 대응', href: '/guide/defamation/defamation-online-criminal-response' },
    ],
  },

  // ─── 2. defamation / livestream-broadcast-criminal (Q&A형, accused) ───
  {
    domain: 'defamation',
    slug: 'defamation-livestream-broadcast-criminal',
    keyword: '라이브 방송 발언 명예훼손 항변',
    questionKeyword: '라이브 방송에서 한 발언으로 명예훼손 고소를 당했어요',
    ctaKeyword: '라이브 방송 명예훼손 항변 가능성 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '라이브 방송 명예훼손 항변 4가지 포인트 | 로앤가이드',
      description:
        '라이브 방송 발언으로 명예훼손 혐의를 받고 있다면 사실 적시·공익 면책 항변과 영상 보존·분석 4가지 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>"유튜브 라이브에서 다른 크리에이터에 대해 의견을 말했는데, 다음 날 명예훼손 고소장이 들어왔어요. 사실 적시였고 공익적 동기였는데 처벌을 받을지 막막합니다." 라이브 방송 발언은 정보통신망법 제70조(인터넷 명예훼손) 적용 대상이 됩니다. 혐의를 받고 있다면 라이브 영상 원본·발언 맥락·공익성 동기를 정리해 진실성·공익성·비방 목적 부정 항변을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 라이브 방송 발언도 인터넷 명예훼손인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 네, 정보통신망법 제70조 적용 대상으로 봅니다.</strong></p>\n<ul>\n<li><strong>정보통신망법 제70조 제1항(사실 적시)</strong> — 사람을 비방할 목적으로 정보통신망을 통해 공공연히 사실을 드러내 명예 훼손 시 3년 이하·3,000만원 이하.</li>\n<li><strong>정보통신망법 제70조 제2항(허위사실)</strong> — 비방 목적 + 허위사실 적시 시 7년 이하·5,000만원 이하 가중.</li>\n<li><strong>비방 목적 — 검사 입증 책임</strong> — 비방 목적은 별도 구성요건. 검사가 입증해야 처벌 가능. 공익적 동기가 주된 목적이면 비방 목적 부정 항변 가능.</li>\n<li><strong>공익성 항변 — 형법 제310조 준용</strong> — 진실한 사실 적시 + 오로지 공공의 이익에 관한 때는 위법성 조각. 라이브 방송도 공익적 사안이면 항변 검토 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혐의를 받고 있다면 라이브 영상 원본 + 공익적 동기 + 진실성 입증 자료 3종 세트가 항변 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 영상 보존·분석·항변 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단(KLAC) 형사 항변 절차를 참고하면 아래 순서로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 라이브 영상 원본 확보 (즉시)</strong> — 플랫폼 다운로드 + 본인 백업 + 채팅 로그 보존. 삭제 전 백업이 핵심. 가능하면 공증·해시값 보존.</li>\n<li><strong>2단계 — 발언 부분 시간 순 분리</strong> — 문제 발언이 등장한 시각·전후 맥락·답변 흐름 분리. 사실/의견/감정 표현 문장별 분류.</li>\n<li><strong>3단계 — 진실성·공익성 입증 자료 수집 (1~2주 내)</strong> — 발언이 진실이라는 객관 자료(언론 보도·공개 데이터)·공공 토론 기여 동기 자료.</li>\n<li><strong>4단계 — 변호인 또는 KLAC(132) 상담</strong> — 진실성·공익성·비방 목적 부정·의견 표명 항변 가능성 검토. 의견서 초안 작성.</li>\n<li><strong>5단계 — 경찰 출석·송치 전 합의 검토</strong> — 항변 자료 제출 + 진술 일관성 유지. 송치 전 합의가 불기소 처분에 참작될 수 있어 합의 가능성 동시 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">혐의를 받고 있다면 AI가 라이브 방송 항변 가능성을 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">라이브 방송 항변 AI 상담 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">라이브 방송 항변에 필요한 자료를 단계별로 준비하세요.</strong></p>\n<ul>\n<li><strong>영상 원본</strong> — 라이브 풀버전 다운로드(플랫폼 제공 시) + 본인 녹화본 + 시각·날짜 보존. 채팅 로그 별도 백업.</li>\n<li><strong>발언 분석표</strong> — 문제 발언 시각(분·초)·전후 맥락·발화 흐름·청자 반응을 표로 정리. 사실/의견/감정 분류.</li>\n<li><strong>진실성 입증</strong> — 인용한 언론 보도·공식 발표·SNS 공개 게시물·통계·이전 발언 영상 등. URL·캡처·발행일 포함.</li>\n<li><strong>공익성 입증</strong> — 동일 주제 공공 토론 기록·다른 채널 비판·언론 보도. 공공 관심 사안임을 보여주는 자료.</li>\n<li><strong>본인 활동 자료</strong> — 평소 채널 운영 패턴·과거 발언 비교·일회성 여부. 상습 비방이 아니라 일관된 비평 활동임을 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 라이브 영상은 플랫폼 정책에 따라 일정 기간 후 자동 삭제되거나 화질이 낮아질 수 있습니다. 고소 통지를 받으면 즉시 본인 백업·공증부터 진행하세요.</blockquote>',
      },
      {
        title: '다툴 포인트 — 라이브 방송 특수성',
        content:
          '<p><strong style="color:#1e3a5f">사실과 다르게 신고되었다면 라이브 방송 특수성을 고려한 항변을 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>즉흥성·맥락 의존성</strong> — 라이브는 시청자 질문에 답하는 즉흥 발언이 많아 일부 표현이 부정확해도 전체 맥락에서 진실성·공익성을 평가할 소지가 있습니다.</li>\n<li><strong>의견 표명 항변</strong> — 평가·비평·풍자는 명예훼손 성립이 어려운 편. 사실 전제가 깔린 의견인지 순수 의견인지 분리해 다툴 수 있습니다.</li>\n<li><strong>비방 목적 부정</strong> — 정보통신망법 제70조의 비방 목적은 별도 구성요건. 공공 관심 사안 비평이 주된 동기였다면 비방 목적이 부정될 가능성이 있습니다.</li>\n<li><strong>합의 병행</strong> — 라이브 시청자 다수가 인지한 사안이라 명예 회복을 위한 정정 방송·사과 라이브가 합의 자료로 활용될 수 있어요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 라이브 영상을 즉시 삭제하면 오히려 증거 인멸로 의심받을 수 있습니다. 본인 항변 자료로도 활용해야 하니 보존이 우선입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보통신망법 비방 목적과 공공의 이익 관계',
        summary:
          '대법원 2022도699 사건(대법원, 2024.01.04 선고)에서 법원은 정보통신망법 제70조 제1항 명예훼손죄의 비방 목적은 사회적 평가 저하 인식과 별개의 구성요건이며, 적시한 사실이 공공의 이익에 관한 것이면 특별한 사정이 없는 한 비방 목적은 부인된다고 판시했습니다.',
        takeaway:
          '라이브 방송 발언도 공공 관심 사안에 대한 비평이 주된 동기라면 비방 목적이 부정될 소지가 있어, 영상 원본 + 공익성 동기 자료를 체계적으로 정리해두는 것이 항변에 유리합니다.',
      },
    ],
    faq: [
      {
        question: '라이브 영상이 이미 삭제됐어요. 항변이 어렵나요?',
        answer:
          '<strong>플랫폼 보존 정책상 일정 기간 서버 보관이 있을 수 있습니다.</strong> 플랫폼에 자료보전 요청 + 시청자가 녹화한 클립 수집을 검토해보세요.',
      },
      {
        question: '시청자가 캡처해 퍼뜨린 클립이 본인 영상보다 더 퍼졌어요',
        answer:
          '<strong>클립의 부분성·맥락 누락을 다툴 수 있습니다.</strong> 원본 풀영상에서 발언 전후 맥락을 함께 제시하면 전체 의도가 다르다는 점을 입증할 수 있어요.',
      },
      {
        question: '게스트 발언인데 본인이 진행자라 같이 고소당했어요',
        answer:
          '<strong>진행자 책임 범위는 사안마다 다릅니다.</strong> 발언 당시 적극 동조·확산 여부에 따라 공동정범·방조 검토. 본인이 발언을 적극 부정·중단했다면 책임 감면 다툴 소지가 있어요.',
      },
      {
        question: '라이브 후 정정 방송을 해도 처벌이 면제되나요?',
        answer:
          '<strong>정정 방송만으로 자동 면제되지는 않습니다.</strong> 다만 피해 회복 노력으로 양형에 참작되고, 합의·민사 손배 감액 자료로도 활용될 수 있어요.',
      },
      {
        question: '변호사 비용이 부담됩니다. 무료 상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 상담을 받아보실 수 있습니다.</strong> 일정 소득 이하면 KLAC 소송구조 신청으로 형사 변호인 선임 비용을 낮출 수 있어요.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '온라인 후기 사실 명예훼손 항변', href: '/guide/defamation/defamation-online-review-truth-defense' },
      { label: '공인 비판 명예훼손 방어', href: '/guide/defamation/defamation-public-figure-criticism-protect' },
      { label: '익명 작성자 신원확인 절차', href: '/guide/defamation/defamation-anonymous-poster-identity-trace' },
      { label: '온라인 명예훼손 형사 대응', href: '/guide/defamation/defamation-online-criminal-response' },
      { label: '명예훼손 게시글 삭제 요청', href: '/guide/defamation/defamation-deletion-request-platform' },
    ],
  },

  // ─── 3. defamation / anonymous-app-criminal (Q&A형, victim) ───
  {
    domain: 'defamation',
    slug: 'defamation-anonymous-app-criminal',
    keyword: '익명 메시지앱 명예훼손 신원확인',
    questionKeyword: '블라인드·에브리타임 익명앱에 명예훼손 글이 올라왔어요',
    ctaKeyword: '익명앱 명예훼손 자료보전 신원확인 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '익명앱 명예훼손 자료보전 4단계 신원확인 절차 | 로앤가이드',
      description:
        '블라인드·에브리타임 등 익명 메시지앱 명예훼손 글의 작성자를 확인하려면 통신사 자료보전·신원확인 4단계를 지금 확인하세요.',
    },
    intro:
      '<p>"블라인드에 본인이 누군지 알 만한 글이 올라왔는데 작성자를 어떻게 찾아야 할지 막막해요." 블라인드·에브리타임 같은 익명 메시지앱은 회사·학교 인증을 거쳐도 작성자 신원이 외부에 비공개입니다. 다만 형사 고소 + 통신사 자료보전 신청 + 법원 사실조회로 단계적으로 신원을 특정할 수 있는 사례가 있습니다. 핵심은 게시 즉시 캡처 + 빠른 신고로 통신 로그가 자동 삭제되기 전에 보전하는 것입니다.</p>',
    sections: [
      {
        title: 'Q. 익명앱 작성자도 형사 고소가 가능한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 네, 형사 고소 + 통신자료 제공 요청으로 신원 특정이 가능한 사례가 있습니다.</strong></p>\n<ul>\n<li><strong>익명앱 가입 구조</strong> — 블라인드·에브리타임은 회사 이메일·학교 이메일·휴대폰 인증 등을 거치므로, 플랫폼이 가입자 식별 정보(이메일·휴대폰)를 보유한 경우가 많음.</li>\n<li><strong>형사 고소 + 통신자료 제공 요청</strong> — 수사기관이 플랫폼·통신사에 가입자 정보·접속 IP를 요청. 통신비밀보호법 절차로 법원 허가 후 진행.</li>\n<li><strong>법원 사실조회</strong> — 민사 가처분·본안소송 단계에서 법원 명령으로 플랫폼이 가입자 정보 제공.</li>\n<li><strong>정보통신망법 제44조의6</strong> — 권리침해정보 작성자 정보 제공 청구. 30일 내 판단 통보. 거절 시 형사·민사 단계로.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 익명앱이라도 가입자 식별 정보가 플랫폼·통신사에 남아있어 형사·민사 절차로 특정할 수 있는 사례가 있습니다. 빠른 신고가 핵심.</blockquote>',
      },
      {
        title: 'Q. 통신사 자료보전 신청은 어떻게 진행하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 형사 고소 + 통신비밀보호법 자료보전 요청 절차를 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>1단계 — 게시 즉시 캡처 + 신고 (24~72시간 내)</strong> — URL·작성 시각·닉네임·내용 + 본인 특정 부분 표시. 가능하면 공증·해시값 보존.</li>\n<li><strong>2단계 — 형사 고소장 제출</strong> — 정보통신망법 제70조 위반 고소. 고소장에 통신자료 제공 요청 의견서 첨부.</li>\n<li><strong>3단계 — 수사기관 통신자료 제공 요청</strong> — 검사·경찰이 플랫폼·통신사에 가입자 정보·접속 IP·로그 요청. 통신비밀보호법 제13조 절차.</li>\n<li><strong>4단계 — 신원 확정 후 형사·민사 진행</strong> — IP·계정 확인 후 가해자 신원 특정 → 형사 고소 보강 + 민법 제750조 위자료 청구.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">익명앱 신원확인 가능성과 형사·민사 절차를 AI가 정리해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">익명앱 신원확인 AI 상담 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 자료보전·신원확인 단계',
        content:
          '<p><strong style="color:#1e3a5f">통신 로그가 자동 삭제되기 전에 한꺼번에 자료를 모아두세요.</strong></p>\n<ul>\n<li><strong>증거 보존</strong> — 게시글 URL·캡처(시간정보 포함)·닉네임·게시 일자·내용 전문·댓글·공유 통계.</li>\n<li><strong>본인 특정 자료</strong> — 게시글에서 본인이 누군지 알 만한 부분 표시 + 본인이 그 사람임을 증명하는 자료(소속·직업·SNS 매칭).</li>\n<li><strong>형사 고소 자료</strong> — 고소장(피해 사실·고소 취지·증거목록) + 신분증·재직증명서·진단서(정신적 피해).</li>\n<li><strong>통신자료 보전 요청서</strong> — 플랫폼·통신사 앞 자료 보존 요청 공문(가입자 정보·접속 IP·로그). 형사 고소 후 수사기관 협조 요청.</li>\n<li><strong>피해 영향 자료</strong> — 사내 평판 변화·인사 평가·정신과 진료 기록. 위자료 산정 근거.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 통신사 IP·접속 로그는 통상 3~12개월 후 자동 삭제됩니다. 게시 발견 즉시(48~72시간 내) 형사 고소 + 자료보전 요청을 진행하는 것이 안전합니다.</blockquote>',
      },
      {
        title: '다툴 포인트 — 익명앱 특수성',
        content:
          '<p><strong style="color:#1e3a5f">익명앱별 특수성을 고려해 신원확인 가능성을 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>블라인드(직장인 인증)</strong> — 회사 이메일 인증으로 가입. 플랫폼이 직장 도메인 정보 보유. 회사 단위 게시판은 동료 범위가 좁아 신원확인 가능성 높은 편.</li>\n<li><strong>에브리타임(학교 인증)</strong> — 학교 이메일 인증. 학생 신분 식별 가능. 학내 분쟁이라 학교 측 협조 가능성도 검토.</li>\n<li><strong>본인 특정 입증 자료</strong> — 게시글에서 본인을 알아볼 수 있는 부분(소속·직위·외형·발언 패턴 등)을 본인이 입증해야 함.</li>\n<li><strong>공용 IP·VPN 사용 시</strong> — 사무실·학교 와이파이·VPN 사용 시 IP만으로 특정 어려움. 게시 시간·기기 식별 정보 등 다른 정황 증거 필요.</li>\n<li><strong>신원확인 후 형사·민사 동시 진행</strong> — 정보통신망법 제70조 형사 고소 + 민법 제750조 민사 손배 + 사내·교내 징계 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 게시글을 발견한 직후 댓글로 항의·반박하면 가해자가 글을 삭제하거나 추가 가해 행위로 이어질 수 있습니다. 캡처·신고가 우선이고 직접 대응은 신중히 진행하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사회적 평가 저하 인식과 비방 목적 분리 판단',
        summary:
          '대법원 2022도699 사건(대법원, 2024.01.04 선고)에서 법원은 정보통신망법 제70조 제1항 명예훼손죄의 비방 목적은 사회적 평가 저하 인식과 별개의 구성요건이며, 적시한 사실이 공공의 이익에 관한 것이면 특별한 사정이 없는 한 비방 목적이 부인된다고 판시했습니다.',
        takeaway:
          '익명앱 명예훼손 사건에서도 글 내용·동기·맥락에 따라 비방 목적 인정 여부가 달라질 수 있어, 게시 의도·전파 효과·피해자 식별 가능성을 객관적으로 정리해두는 것이 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '익명앱 글이 이미 삭제됐는데 신원확인이 가능한가요?',
        answer:
          '<strong>플랫폼 서버에 일정 기간 보존 로그가 남을 수 있습니다.</strong> 형사 고소 + 자료보전 요청을 즉시 진행해 보존 가능성을 확인해보세요.',
      },
      {
        question: '본인이 게시글의 대상이라는 점을 어떻게 입증하나요?',
        answer:
          '<strong>제3자가 보고 누구인지 알 만하면 충분합니다.</strong> 소속·직위·외형·말투·구체적 사건 묘사 등으로 특정 가능하면 본인 진술 + 동료 진술서로 보강하세요.',
      },
      {
        question: '통신사 IP를 받아도 가해자가 사무실 와이파이를 썼으면 의미가 없나요?',
        answer:
          '<strong>IP만으로는 특정이 어렵지만 게시 시간·기기 식별 정보·접속 패턴을 결합하면 특정 가능한 사례가 있습니다.</strong> 다른 정황 증거를 함께 수집하세요.',
      },
      {
        question: '신원확인까지 시간이 얼마나 걸리나요?',
        answer:
          '<strong>형사 단계 통상 3~6개월입니다.</strong> 통신비밀보호법 절차상 법원 허가가 필요해 시간이 걸리니 게시 즉시 신고가 안전해요.',
      },
      {
        question: '익명앱이 외국 회사면 자료 협조가 어렵나요?',
        answer:
          '<strong>국내 플랫폼보다 협조 한계가 있습니다.</strong> 다만 국내 서비스 제공 사업자로 등록된 경우 통신비밀보호법 적용 가능. 변호사 또는 KLAC(132) 상담으로 가능성을 확인해보세요.',
      },
    ],
    cta: { text: '삭제·합의·방어 포인트, AI로 먼저 점검하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '익명 작성자 신원확인 절차', href: '/guide/defamation/defamation-anonymous-poster-identity-trace' },
      { label: '직장 내 허위 소문 명예훼손', href: '/guide/defamation/defamation-false-rumor-workplace-claim' },
      { label: '명예훼손 고소장 작성 가이드', href: '/guide/defamation/defamation-complaint-writing-guide' },
      { label: '온라인 명예훼손 형사 대응', href: '/guide/defamation/defamation-online-criminal-response' },
      { label: '명예훼손 게시글 삭제 요청', href: '/guide/defamation/defamation-deletion-request-platform' },
    ],
  },

  // ─── 4. jeonse / housing-not-registered-deposit (Q&A형, victim) ───
  {
    domain: 'jeonse',
    slug: 'jeonse-housing-not-registered-deposit',
    keyword: '미등기 신축 주택 보증금 보호',
    questionKeyword: '미등기 신축 주택에 입주했는데 보증금이 안전한가요?',
    ctaKeyword: '미등기 주택 전입신고 확정일자 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '미등기 신축 주택 보증금 보호 4가지 절차 | 로앤가이드',
      description:
        '미등기 신축·등기 지연 주택에 입주한 임차인이 전입신고·확정일자·임차권등기 4단계로 보증금을 보호하는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"신축 빌라에 입주했는데 등기부등본을 떼보니 아직 등기가 안 됐대요. 보증금 1억 5천이 너무 걱정됩니다." 미등기 신축·등기 지연 주택은 일반 등기 주택보다 보증금 보호가 까다롭습니다. 다만 주택임대차보호법은 등기 여부와 무관하게 전입신고·인도로 대항력을 인정하고, 확정일자·임차권등기로 우선변제권까지 확보할 수 있는 사례가 있습니다. 핵심은 입주 즉시 4단계 절차를 빠짐없이 진행하는 것입니다.</p>',
    sections: [
      {
        title: 'Q. 미등기 주택도 주임법 보호를 받나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 네, 주택임대차보호법은 등기 여부와 무관하게 전입신고·인도로 대항력을 인정합니다.</strong></p>\n<ul>\n<li><strong>주임법 제3조 — 대항력 요건</strong> — 임차인이 주택을 인도받고 주민등록(전입신고)을 마치면 다음 날부터 대항력 발생. 등기 유무와 무관.</li>\n<li><strong>주임법 제3조의2 — 우선변제권</strong> — 대항력 + 확정일자 받은 임대차계약서를 갖추면 후순위 권리자보다 우선 변제. 확정일자는 주민센터·법원·공증인 사무소에서 받을 수 있음.</li>\n<li><strong>주임법 제3조의3 — 임차권등기명령</strong> — 임대차 종료 후 보증금 미반환 시 법원 명령으로 임차권 등기. 등기 후에는 점유 상실 시에도 대항력·우선변제권 유지.</li>\n<li><strong>미등기 주택 추가 위험</strong> — 건축물대장 등재 전·소유권 분쟁 가능성·다른 채권자 위험 → 입주 전 건축물대장·과세대장·임대인 신용 확인 필수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 미등기라도 전입신고·확정일자만 갖추면 대항력·우선변제권은 확보 가능. 단, 등기가 추가로 요구되는 사례를 위해 임차권등기명령까지 준비해두는 것이 안전합니다.</blockquote>',
      },
      {
        title: 'Q. 입주 후 어떤 순서로 진행해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 4단계 순서로 빠르게 진행하면 보증금 보호 가능성이 높아집니다.</strong></p>\n<ul>\n<li><strong>1단계 — 입주 당일 전입신고 + 확정일자</strong> — 주민센터에 전입신고 + 임대차계약서 확정일자 받기. 같은 날 한꺼번에 처리.</li>\n<li><strong>2단계 — 입주 직후 등기부등본·건축물대장 확인</strong> — 등기 진행 상황·소유권 상태·다른 권리(근저당·압류) 확인. 미등기 상태 점검.</li>\n<li><strong>3단계 — 등기 완료 모니터링 (월 1회)</strong> — 임대인에게 등기 진행 상황 정기 문의. 1~3개월 내 등기 완료가 일반적.</li>\n<li><strong>4단계 — 계약 종료 시 임차권등기 신청 검토</strong> — 보증금 미반환 시 임차권등기명령 신청. 등기 후에는 점유 상실에도 권리 유지.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">미등기 신축 보증금 보호 가능성과 절차를 AI가 단계별로 정리해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">미등기 보증금 보호 AI 상담 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 미등기 신축 입주 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단(KLAC) 보증금 보호 절차를 참고하면 아래 순서로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 입주 전 자료 수집</strong> — 건축물대장·과세대장·임대인 신용 정보·HUG 보증보험 가입 가능 여부. 미등기 + 임대인 채무 과다는 위험 신호.</li>\n<li><strong>2단계 — 입주 당일 전입신고 + 확정일자</strong> — 주민센터 한 번 방문으로 전입신고 + 확정일자 처리. 다음 날부터 대항력, 같은 날 우선변제권 효력.</li>\n<li><strong>3단계 — HUG 보증보험 가입 검토 (1개월 내)</strong> — 미등기 주택은 가입 조건이 까다로운 편. 등기 완료 후 다시 검토 가능. 보증료 약 보증금 0.115~0.154%.</li>\n<li><strong>4단계 — 등기 완료 후 등기부등본 재확인</strong> — 등기 완료 후 등기부등본을 다시 발급받아 본인 임차 권리 확인. 다른 권리 추가 여부 점검.</li>\n<li><strong>5단계 — 계약 종료 시 임차권등기명령</strong> — 보증금 미반환 위험 발생 시 즉시 임차권등기명령 신청. 등기 후 강제경매·HUG 이행청구로 회수 절차 진행.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "등기가 곧 된다"는 임대인 말만 믿고 전입신고·확정일자를 미루면 다른 채권자에게 우선 순위를 빼앗길 수 있습니다. 등기 여부와 무관하게 입주 당일 처리하세요.</blockquote>',
      },
      {
        title: '다툴 포인트 — 미등기 주택 위험 신호',
        content:
          '<p><strong style="color:#1e3a5f">미등기 신축은 보증금 위험이 일반 주택보다 높을 수 있어 사전 점검이 핵심입니다.</strong></p>\n<ul>\n<li><strong>신축 vs 미보존등기</strong> — 신축 후 6개월~1년 내 미등기는 통상적. 1년 이상 지연되면 분양가 분쟁·시공사 부도 등 다른 사유 가능성 검토.</li>\n<li><strong>임대인 신용 확인</strong> — 임대인 명의 다른 부동산 등기부등본·법인등기부 + 신용 확인서. 다중 채무·체납 시 위험 신호.</li>\n<li><strong>HUG 보증보험 가입 가능성</strong> — 미등기 주택은 가입 조건이 까다로움. 가입 거부 시 임대차 자체를 재검토할 수 있음.</li>\n<li><strong>건축물대장·과세대장 점검</strong> — 사용승인일·과세 시작일 확인. 사용승인 안 된 무허가 건축물은 보호가 더 약함.</li>\n<li><strong>전세사기 의심 정황</strong> — 미등기 + 시세 대비 보증금 과다 + 임대인 정보 불투명 → 전세사기피해지원센터(1533-8119) 사전 상담 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "전세보증금은 무조건 돌려받는다"는 단정은 위험합니다. 미등기 + 다른 채권자 우선순위가 본인보다 앞서면 회수가 어려울 수 있어 단계별로 검토할 수 있는 경로를 점검하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차권 대항력의 점유 요건과 임차권등기 효과',
        summary:
          '대법원 2024다326398 사건(대법원, 2025.04.15 선고)에서 법원은 주택 임차인이 점유를 상실한 후 마쳐진 임차권등기의 대항력 문제를 다루며, 임차권등기명령에 따른 등기를 마친 경우 점유 상실에도 대항력·우선변제권이 유지된다는 점을 확인했습니다.',
        takeaway:
          '미등기 신축 주택에서도 임차권등기명령을 신청해두면 점유 상실 후에도 대항력·우선변제권을 유지할 수 있어, 계약 종료·이사 시점에 가장 강력한 안전장치가 됩니다.',
      },
    ],
    faq: [
      {
        question: '입주 시점에 등기가 안 됐는데 전입신고가 가능한가요?',
        answer:
          '<strong>네, 가능합니다.</strong> 전입신고는 주민등록법상 거주지 변경 신고이며 등기 여부와 무관해요. 주민센터에서 임대차계약서·신분증으로 처리할 수 있어요.',
      },
      {
        question: '확정일자는 미등기여도 받을 수 있나요?',
        answer:
          '<strong>네, 받을 수 있습니다.</strong> 주민센터·법원·공증인 사무소에서 임대차계약서 원본에 확정일자를 받을 수 있고, 미등기여도 우선변제권 효력이 발생해요.',
      },
      {
        question: 'HUG 보증보험은 미등기여도 가입할 수 있나요?',
        answer:
          '<strong>등기 완료 후 가입이 일반적입니다.</strong> 미등기 상태에서는 가입 조건이 까다로워 등기 완료 후 다시 신청하거나, 가입 가능한 다른 보증 상품을 검토해보세요.',
      },
      {
        question: '등기가 1년이 지나도 안 되면 계약 해지가 가능한가요?',
        answer:
          '<strong>임대차 본질적 의무 위반·신뢰 관계 파탄으로 다툴 소지가 있습니다.</strong> 변호사 상담으로 계약 해지·보증금 반환 청구 가능성을 검토해보세요.',
      },
      {
        question: '미등기 신축은 전세사기 위험이 높나요?',
        answer:
          '<strong>일반 주택보다 위험이 높을 수 있습니다.</strong> 시세 대비 보증금 과다·임대인 정보 불투명 등 위험 신호가 결합되면 전세사기피해지원센터(1533-8119) 사전 상담을 검토해보세요.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '집주인이 집을 팔았어요 보증금 반환', href: '/guide/jeonse/jeonse-landlord-sold-deposit' },
      { label: '보증금 미반환 시 우선변제권', href: '/guide/jeonse/jeonse-deposit-not-returned-priority' },
      { label: '주택임대차 우선변제 청구 절차', href: '/guide/jeonse/jeonse-priority-payment-claim' },
      { label: '보증금 도배·청소비 부당공제', href: '/guide/jeonse/jeonse-deposit-illegal-deduction-fight' },
      { label: '보증금 미반환 대위변제 회수', href: '/guide/jeonse/jeonse-tenant-substitute-payment-recovery' },
    ],
  },

  // ─── 5. jeonse / multi-family-priority-claim (절차형, victim) ───
  {
    domain: 'jeonse',
    slug: 'jeonse-multi-family-priority-claim',
    keyword: '다가구주택 보증금 우선변제 소액임차인',
    questionKeyword: '다가구주택에 사는데 보증금 우선변제 한도가 어떻게 되나요?',
    ctaKeyword: '다가구 우선변제 소액임차인 한도 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '다가구주택 보증금 우선변제 5단계 절차 | 로앤가이드',
      description:
        '다가구주택 임차인의 보증금 우선변제·소액임차인 한도와 주임법 제8조·시행령 적용 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"다가구주택 1층에 살고 있는데, 다른 호실 임차인들도 많고 임대인 채무도 많아서 보증금이 안전한지 걱정됩니다." 다가구주택은 한 건물 안에 여러 임차인이 있는 구조라 보증금 우선순위가 더욱 중요합니다. 주임법 제3조의2 우선변제권 + 제8조 소액임차인 최우선변제권을 단계별로 활용하면 일정 금액은 다른 채권자보다 먼저 돌려받을 수 있는 사례가 있습니다.</p>',
    sections: [
      {
        title: '다가구 보증금 우선변제 5단계 절차',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단(KLAC) 보증금 회수 절차를 참고하면 아래 순서로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 입주 당일 전입신고 + 확정일자 (즉시)</strong> — 주민센터에서 전입신고 + 임대차계약서 확정일자. 다음 날부터 대항력, 같은 날 우선변제권 효력. 다른 호실보다 빠른 처리가 핵심.</li>\n<li><strong>2단계 — 등기부등본·다른 임차인 정보 확인 (1주 내)</strong> — 본인 임대 부분 확인 + 같은 건물 다른 호실 임차인·근저당 권리관계 확인. 다가구는 같은 건물 안 우선순위가 중요.</li>\n<li><strong>3단계 — HUG 보증보험 가입 검토</strong> — 다가구주택은 한 동 전체 한도가 있어 다른 호실 가입 여부 함께 확인. 보증료 보증금 대비 약 0.115~0.154%.</li>\n<li><strong>4단계 — 임대차 종료 시 임차권등기명령 (이사 1~2개월 전)</strong> — 보증금 미반환 위험 시 임차권등기명령 신청. 등기 후 점유 상실에도 권리 유지.</li>\n<li><strong>5단계 — 강제경매 시 우선변제·최우선변제 신청</strong> — 임대주택이 경매로 가면 배당요구 신청. 주임법 제8조 소액임차인 한도 내 최우선변제 + 확정일자 우선변제 적용.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세보증금 반환 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">다가구 우선변제 가능성과 소액임차인 한도를 AI가 정리해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">다가구 우선변제 AI 상담 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 주임법 제8조 소액임차인 최우선변제',
        content:
          '<p><strong style="color:#1e3a5f">주임법 제8조 + 시행령 제10·11조에 따라 소액임차인은 보증금 일정 금액까지 최우선변제권이 인정됩니다.</strong></p>\n<ul>\n<li><strong>최우선변제 의미</strong> — 근저당 등 다른 권리보다 먼저 변제받는 권리. 소액임차인 한도 내 일정 금액에만 적용. 등기·확정일자 우선순위와 별개로 인정.</li>\n<li><strong>지역별 보증금 한도(시행령 제10조 참조)</strong> — 서울 1억 6,500만원·과밀억제권역 등 1억 4,500만원·광역시 8,500만원·기타 7,500만원 등 지역별 차등 적용(현행 기준, 시행령 개정 시 변동).</li>\n<li><strong>최우선변제 금액 한도(시행령 제11조 참조)</strong> — 서울 5,500만원·과밀억제권역 등 4,800만원·광역시 2,800만원·기타 2,500만원 등 지역별 차등.</li>\n<li><strong>요건</strong> — ① 소액 보증금 한도 이내 ② 대항력 요건(인도·전입신고) 갖춤 ③ 경매개시결정 등기 전 대항요건 갖춤 ④ 배당요구 신청.</li>\n<li><strong>시행령 개정 주의</strong> — 한도는 시행령 개정으로 자주 바뀜. 본인 임대차계약 시점·경매 시점 기준으로 한도 적용. 정확한 금액은 KLAC(132)·인근 법원에 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 보증금이 소액 한도를 넘으면 최우선변제 자체를 놓치는 경우가 있습니다. 본인 보증금이 지역별 한도 이내인지 시행령으로 정확히 확인하고, 한도 초과 시에는 확정일자 우선변제권 활용을 검토하세요.</blockquote>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">다가구 우선변제·최우선변제 단계별로 필요한 자료를 한꺼번에 준비하세요.</strong></p>\n<ul>\n<li><strong>대항력·우선변제 입증</strong> — 임대차계약서(확정일자) + 주민등록등본(전입신고) + 임대 부분 명시(호실·층수·면적).</li>\n<li><strong>임차권등기명령 신청</strong> — 신청서 + 위 자료 + 건물등기부등본 + 임차권등기 신청 사유서(보증금 미반환 등).</li>\n<li><strong>강제경매 배당요구</strong> — 배당요구서 + 임대차계약서 + 주민등록등본 + 임차권등기 등기부등본(있는 경우).</li>\n<li><strong>최우선변제 청구</strong> — 소액임차인 입증서(보증금 한도 이내) + 대항요건 입증 자료(전입신고·인도 시점).</li>\n<li><strong>HUG 이행청구(가입자만)</strong> — 보증증서 + 사고통지서 + 이행청구서 + 임차권등기 완료 등기부등본.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 다가구주택은 같은 건물 다른 호실 임차인들과 우선순위 경합이 발생할 수 있습니다. 본인 전입신고·확정일자 시점이 빠를수록 유리하니 입주 당일 처리가 안전합니다.</blockquote>',
      },
      {
        title: '다툴 포인트 — 다가구주택 특수 쟁점',
        content:
          '<p><strong style="color:#1e3a5f">다가구주택 임차인이 자주 겪는 쟁점과 다툴 포인트입니다.</strong></p>\n<ul>\n<li><strong>한 건물 다수 임차인 우선순위</strong> — 같은 건물 안 다른 호실 임차인과 우선순위 경합. 본인 전입신고·확정일자 시점이 가장 빠른 사례에 우선.</li>\n<li><strong>근저당과의 우선순위</strong> — 근저당 설정일과 본인 대항력 발생일 비교. 근저당 후 입주면 근저당이 우선이지만 소액임차인 최우선변제는 별개.</li>\n<li><strong>임대인 다른 호실 채무</strong> — 같은 건물 다른 호실 보증금 미반환·근저당 채무가 임대인 자력에 영향. 본인 회수율에도 간접 영향.</li>\n<li><strong>중개사 주의의무</strong> — 다가구주택 중개 시 공인중개사가 다른 임차인 정보·근저당 정보 고지 의무. 미고지 시 손배 청구 검토 가능(2023다259743 취지).</li>\n<li><strong>경매 시 배당 순서</strong> — ① 소액임차인 최우선변제 → ② 근저당·확정일자 우선변제 시간 순 → ③ 일반 채권자.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "전세보증금은 무조건 돌려받는다"는 단정은 위험합니다. 다가구는 다른 임차인·근저당과 경합이 많아 회수율이 사례마다 달라질 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 다가구주택 임대차 중개 공인중개사 주의의무',
        summary:
          '대법원 2023다259743 사건(대법원, 2023.11.30 선고)에서 법원은 다가구주택 임대차계약을 중개한 공인중개사가 다른 임차인 보증금 정보·근저당 정보 등 권리관계를 의뢰인에게 정확히 고지할 주의의무가 있다고 보아 중개사고 책임을 인정한 사례입니다.',
        takeaway:
          '다가구주택 임차인은 입주 전 다른 임차인·근저당 정보를 중개사에게 정식으로 요청·확인하고, 미고지로 손해가 발생하면 중개사·공제조합에 손배 청구를 검토할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '소액임차인 한도는 어떻게 확인하나요?',
        answer:
          '<strong>주임법 시행령 제10·11조 + 본인 지역 기준입니다.</strong> 시행령 개정으로 자주 바뀌니 KLAC(132)·관할 법원·국토교통부 안내로 정확한 한도를 확인하세요.',
      },
      {
        question: '본인 보증금이 한도를 넘으면 최우선변제는 못 받나요?',
        answer:
          '<strong>네, 한도 초과 시 최우선변제는 적용되지 않습니다.</strong> 다만 확정일자 우선변제권은 별도로 작동하니 등기·확정일자 시점을 잘 관리하세요.',
      },
      {
        question: '같은 건물 다른 호실 임차인이 본인보다 늦게 들어왔어요',
        answer:
          '<strong>본인 우선순위가 앞섭니다.</strong> 전입신고·확정일자 시점이 빠른 임차인이 우선. 본인 임대차계약서 확정일자 도장 일자를 보존하세요.',
      },
      {
        question: '중개사가 다른 임차인 정보를 안 줬어요',
        answer:
          '<strong>중개사 주의의무 위반으로 손배 청구를 검토할 수 있습니다.</strong> 한국공인중개사협회 공제조합·중개사 본인을 상대로 청구 가능. KLAC(132) 무료 상담을 받아보세요.',
      },
      {
        question: '경매 진행 중인데 배당요구는 언제까지 해야 하나요?',
        answer:
          '<strong>법원이 정한 배당요구 종기일까지 신청해야 합니다.</strong> 통상 경매개시 후 2~3개월 내. 종기일 지나면 배당에서 제외될 수 있어 즉시 진행하세요.',
      },
    ],
    cta: { text: '전세보증금 반환 절차, AI로 정리하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '미등기 신축 주택 보증금 보호', href: '/guide/jeonse/jeonse-housing-not-registered-deposit' },
      { label: '보증금 미반환 시 우선변제권', href: '/guide/jeonse/jeonse-deposit-not-returned-priority' },
      { label: '주택임대차 우선변제 청구 절차', href: '/guide/jeonse/jeonse-priority-payment-claim' },
      { label: '보증금 미반환 대위변제 회수', href: '/guide/jeonse/jeonse-tenant-substitute-payment-recovery' },
      { label: '집주인이 집을 팔았어요 보증금 반환', href: '/guide/jeonse/jeonse-landlord-sold-deposit' },
    ],
  },

  // ─── 6. stalking / workplace-coworker-criminal (절차형, victim) ───
  {
    domain: 'stalking',
    slug: 'stalking-workplace-coworker-criminal',
    keyword: '직장 동료 스토킹 처벌 인사조치',
    questionKeyword: '직장 동료가 계속 따라다니고 메시지를 보내요. 어떻게 대응하나요?',
    ctaKeyword: '직장 동료 스토킹 인사조치 형사 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '직장 동료 스토킹 처벌·인사조치 5단계 절차 | 로앤가이드',
      description:
        '직장 동료의 스토킹 피해를 받고 있다면 직장 내 괴롭힘과 스토킹처벌법을 결합한 5단계 보호 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"같은 부서 동료가 퇴근 시간마다 따라오고, 거절했는데도 계속 메시지를 보내요. 회사 내부 신고만으로 충분할지 막막합니다." 직장 동료 스토킹은 스토킹처벌법 + 근로기준법 제76조의2 직장 내 괴롭힘이 결합된 사안입니다. 회사 내부 인사조치(분리·재배치)와 형사 고소를 동시에 검토할 수 있고, 회사가 분리 의무를 다하지 않으면 사용자 책임도 다툴 소지가 있습니다.</p>',
    sections: [
      {
        title: '직장 동료 스토킹 5단계 보호 절차',
        content:
          '<p><strong style="color:#1e3a5f">경찰청·고용노동부 절차를 참고하면 아래 순서로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거부 의사 명확히 표시 (즉시)</strong> — 메시지·통화로 "더 이상 연락하지 마세요"를 캡처 가능한 형태로 남기기. 거부 의사 표시 시점이 스토킹행위 입증의 출발점.</li>\n<li><strong>2단계 — 증거 보존 (1주 내)</strong> — 통화내역·문자·사내 메신저·CCTV 영상·동료 진술서. 시간 순 정리.</li>\n<li><strong>3단계 — 회사 인사팀·고충처리위원회 신고</strong> — 직장 내 괴롭힘 신고서 제출. 분리·재배치·접근금지 사내 조치 요청. 근기법 제76조의3 보복 인사 금지.</li>\n<li><strong>4단계 — 경찰 신고 + 응급조치·잠정조치 신청 (3일 내)</strong> — 112 신고 또는 사이버범죄 신고시스템(ECRM). 경찰 응급조치(분리·접근금지) → 검사 청구 잠정조치(접근금지·통신금지·유치).</li>\n<li><strong>5단계 — 형사 고소 + 민사 손배 + 사용자 책임 검토</strong> — 스토킹처벌법 형사 고소 + 민법 제750조 위자료 + 회사가 분리 의무 미이행 시 사용자 책임(민법 제756조) 다툴 소지.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">직장 스토킹 사내 인사조치와 형사 절차를 AI가 정리해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">직장 스토킹 AI 상담 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 스토킹+직장 내 괴롭힘 결합 대응',
        content:
          '<p><strong style="color:#1e3a5f">두 법률을 결합하면 사내 조치 + 형사 처벌 + 민사 손배 3트랙 동시 진행이 가능합니다.</strong></p>\n<ul>\n<li><strong>스토킹처벌법 제2조</strong> — 의사에 반해 정당한 이유 없이 접근·따라다님·메시지 도달 등 행위. 지속·반복되면 스토킹범죄 성립(3년 이하·3,000만원 이하).</li>\n<li><strong>근로기준법 제76조의2 직장 내 괴롭힘</strong> — 사용자·근로자가 직장에서 지위·관계 우위 이용해 신체적·정신적 고통을 주거나 근무환경 악화시키는 행위. 사용자에게 조사·조치 의무.</li>\n<li><strong>근기법 제76조의3 — 보복 인사 금지</strong> — 신고로 인한 해고·전보·승진 누락 등 불이익 처우 금지. 보복 시 별도 처벌(3년 이하·3,000만원 이하).</li>\n<li><strong>사용자 책임(민법 제756조)</strong> — 회사가 분리·재배치 의무를 다하지 않으면 가해자 + 사용자 모두에게 손배 책임 다툴 소지. 회사 처리 결과 보존이 핵심.</li>\n<li><strong>응급조치·잠정조치 결합</strong> — 사내 분리(부서 이동) + 경찰 응급조치(접근금지) + 법원 잠정조치(통신금지·유치) 다층 적용 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "회사 일이라 사내 처리만 하면 된다"고 생각해 형사 신고를 미루면 가해자가 사내 처분 후 보복할 위험이 있습니다. 사내 신고와 경찰 신고를 동시에 진행하는 것이 안전합니다.</blockquote>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">사내+형사 동시 진행에 필요한 자료를 한꺼번에 준비하세요.</strong></p>\n<ul>\n<li><strong>거부 의사 표시 자료</strong> — "더 이상 연락하지 마세요" 메시지 캡처·통화 녹음. 거부 의사 표시 시점이 입증의 핵심.</li>\n<li><strong>스토킹 행위 증거</strong> — 통화내역·문자·사내 메신저(잔디·슬랙)·이메일 + 따라온 동선·시간 기록·CCTV 영상.</li>\n<li><strong>동료 진술서</strong> — 가해자의 행위를 직접 본 동료 진술서·연락처. 가능하면 인감·서명 포함.</li>\n<li><strong>사내 신고 자료</strong> — 직장 내 괴롭힘 신고서·고충처리위원회 진정서. 회사 처리 결과 보존(징계·미징계 무관).</li>\n<li><strong>형사 고소장</strong> — 스토킹처벌법 위반 고소장 + 위 자료 + 본인 신분증·재직증명서.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 사내 메신저 로그·CCTV를 보유한 자료는 빠르게 보전 요청해야 합니다. 사내 보존 정책상 30~90일 후 자동 삭제될 수 있으니 신고 즉시 보전 공문을 발송하세요.</blockquote>',
      },
      {
        title: '다툴 포인트 — 사용자 책임·보복 인사',
        content:
          '<p><strong style="color:#1e3a5f">직장 동료 스토킹은 회사 책임도 함께 다툴 수 있는 사례가 있습니다.</strong></p>\n<ul>\n<li><strong>사용자 분리 의무</strong> — 근기법 제76조의2에 따라 회사는 직장 내 괴롭힘 발생 시 즉시 조사 + 분리·재배치 등 조치 의무. 미이행 시 행정처분(과태료) + 민사 책임.</li>\n<li><strong>사용자 손배 책임(민법 제756조)</strong> — 회사 직무 범위 내 발생한 가해 행위에 대해 사용자 책임 다툴 소지. 가해자 + 회사 공동 피고로 청구 검토.</li>\n<li><strong>보복 인사 방어</strong> — 신고 후 부당 전보·승진 누락·해고 시 근기법 제76조의3 보복 인사 금지 위반. 노동위 부당해고 구제신청·진정 가능.</li>\n<li><strong>잠정조치 직장 적용</strong> — 법원 잠정조치(접근금지·통신금지)는 직장 내에서도 효력. 위반 시 스토킹처벌법 제18조 제2항 별도 처벌.</li>\n<li><strong>고용노동부 진정</strong> — 회사가 사내 조치를 안 하면 고용노동부 진정 + 근로감독관 조사. 행정처분으로 회사에 압박.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회사 분리 조치를 받은 후에도 가해자가 외부에서 접근하면 추가 신고·잠정조치 연장 검토가 필요합니다. 일회성 조치만으로 안심하지 말고 단계별로 확인하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 객관적·일반적으로 불안감·공포심을 일으키기에 충분하면 스토킹행위',
        summary:
          '대법원 2025도36 사건(대법원, 2025.10.30 선고)에서 법원은 스토킹처벌법 제2조 제1호 각 목의 행위가 객관적·일반적으로 볼 때 상대방이 인식할 경우 불안감·공포심을 일으키기에 충분한 정도라고 평가될 수 있다면, 현실적으로 상대방이 행위를 인식했는지 여부와 관계없이 스토킹행위에 해당하고, 그러한 일련의 행위가 지속·반복되면 스토킹범죄가 성립한다고 판시했습니다.',
        takeaway:
          '직장 동료의 반복 메시지·접근도 객관적으로 불안감을 일으키기에 충분하면 스토킹행위로 평가될 수 있어, 사내 신고와 형사 신고를 동시에 진행하는 것이 보호에 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '회사가 분리 조치를 안 하면 어떻게 하나요?',
        answer:
          '<strong>고용노동부 진정 + 사용자 손배 청구를 검토할 수 있습니다.</strong> 근기법 제76조의2 위반 신고 + 회사 책임을 함께 다툴 소지가 있어요.',
      },
      {
        question: '신고 후 회사에서 본인이 부서 이동을 당했어요',
        answer:
          '<strong>보복 인사 가능성이 있습니다.</strong> 근기법 제76조의3 위반으로 노동위 부당전보 구제신청 + 고용노동부 진정 검토. KLAC(132)·노동위 무료 상담을 받아보세요.',
      },
      {
        question: '동료가 사내 메신저로만 보내는데 직장 외 행위가 없어요',
        answer:
          '<strong>사내 메신저도 정보통신망법·스토킹처벌법 적용 대상입니다.</strong> 거부 의사 표시 후 반복되면 스토킹행위로 평가될 수 있어 캡처·신고가 안전해요.',
      },
      {
        question: '같은 부서라 형사 신고하면 분위기가 어색해질 것 같아요',
        answer:
          '<strong>안전이 우선입니다.</strong> 형사 신고와 사내 분리는 동시에 진행하는 것이 일반적이고, 회사가 분리 의무를 이행하지 않으면 사용자 책임도 다툴 수 있어요.',
      },
      {
        question: '여성긴급전화·해바라기센터 도움도 받을 수 있나요?',
        answer:
          '<strong>네, 받아보실 수 있습니다.</strong> 여성긴급전화(1366)·해바라기센터·대한법률구조공단(132)에서 무료 상담 + 법률지원 연결 가능해요.',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '이별 후 메시지 반복 스토킹', href: '/guide/stalking/stalking-ex-partner-message-criminal' },
      { label: '잠정조치·긴급응급조치 신청', href: '/guide/stalking/stalking-emergency-protection-order-apply' },
      { label: '스토킹 형사 고소 절차', href: '/guide/stalking/stalking-criminal-prosecution-process' },
      { label: '스토킹 피해자 보호조치', href: '/guide/stalking/stalking-victim-protection-order' },
      { label: '스토킹 증거 수집 체크리스트', href: '/guide/stalking/stalking-evidence-collection-checklist' },
    ],
  },

  // ─── 7. stalking / school-student-bullying-criminal (Q&A형, victim) ───
  {
    domain: 'stalking',
    slug: 'stalking-school-student-bullying-criminal',
    keyword: '학교 후배 동급생 스토킹 학폭 결합',
    questionKeyword: '학교에서 후배·동급생이 스토킹과 학폭을 같이 해요. 어떻게 대응하나요?',
    ctaKeyword: '학교 스토킹 학폭 결합 대응 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '학교 스토킹·학폭 결합 4단계 대응 절차 | 로앤가이드',
      description:
        '학교 후배·동급생의 스토킹·학폭 피해라면 학교폭력예방법과 스토킹처벌법 결합 4단계 대응 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"같은 학년 동급생이 매일 따라다니고 SNS DM도 계속 보내요. 학교 신고만으로 충분할지, 경찰까지 가야 할지 막막합니다." 학생 간 스토킹은 학교폭력예방법(학폭법) + 스토킹처벌법이 동시에 적용될 수 있는 사안입니다. 학교 사안처리(자체해결·심의위원회·처분)와 형사 고소를 함께 검토하면 가해 학생의 즉각적인 분리와 형사 처벌 가능성을 동시에 다룰 수 있는 사례가 있습니다.</p>',
    sections: [
      {
        title: 'Q. 학생 간 스토킹은 학폭으로만 처리하면 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 학폭법 + 스토킹처벌법 동시 적용 검토 가능합니다.</strong></p>\n<ul>\n<li><strong>학교폭력예방법 제2조</strong> — 학교 내외에서 학생을 대상으로 한 신체·정신·재산상 피해 행위. 스토킹·따돌림·SNS 괴롭힘도 포함.</li>\n<li><strong>스토킹처벌법 제2조</strong> — 의사에 반한 접근·따라다님·메시지 도달 등 반복 행위. 학생도 14세 이상이면 형사 책임 있음(촉법소년 10~13세는 보호처분).</li>\n<li><strong>학폭 사안처리 절차</strong> — 학교 자체해결 → 학교폭력대책심의위원회 → 처분(1~9호) → 재심·행정심판. 학교가 사안 인지하면 즉시 분리 조치 의무.</li>\n<li><strong>형사 고소 병행</strong> — 학교 처분과 별개로 형사 고소 가능. 스토킹범죄 3년 이하 징역·3,000만원 이하 벌금. 14세 이상은 형사처벌, 10~13세는 보호처분.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 학폭 신고 + 형사 고소는 별개 트랙으로 동시 진행 가능. 학교 처분이 약하다고 평가될 때 형사 고소가 추가 보호 장치가 됩니다.</blockquote>',
      },
      {
        title: 'Q. 어떤 순서로 진행하면 좋나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 학교 신고 + 경찰 신고 동시 진행이 일반적입니다.</strong></p>\n<ul>\n<li><strong>1단계 — 거부 의사 표시 + 증거 보존 (즉시)</strong> — "그만해주세요" 메시지 캡처·통화 녹음. 통화내역·SNS DM·CCTV·목격자 진술 정리.</li>\n<li><strong>2단계 — 학교 신고 (담임·학폭전담교사·교감)</strong> — 학교폭력 사안 신고. 학교는 즉시 분리·조사 의무. 학교폭력 사안조사·심의위원회 회부.</li>\n<li><strong>3단계 — 경찰 신고 + 응급조치 (3일 내)</strong> — 112 또는 117(학교폭력 신고 전용). 14세 이상 가해 학생은 형사 절차, 10~13세는 보호처분.</li>\n<li><strong>4단계 — 학폭 처분 + 형사·민사 결합</strong> — 학교폭력대책심의위원회 처분(1호 서면사과~9호 퇴학) + 형사 처벌 + 민법 제755조 친권자·감독자 책임 손배.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">학폭+스토킹 결합 대응 가능성과 절차를 AI가 정리해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">학교 스토킹 AI 상담 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">학교+형사+민사 동시 진행에 필요한 자료를 정리하세요.</strong></p>\n<ul>\n<li><strong>거부 의사·반복성 증거</strong> — 거부 메시지 캡처·통화 녹음·SNS DM 캡처(시각·발신자 ID 포함). 통화내역서(통신사 발급).</li>\n<li><strong>학교 내 행위 증거</strong> — 교실·복도·운동장 CCTV 영상·목격 학생 진술서·SNS 게시물·학교 단톡방 캡처.</li>\n<li><strong>학교 신고 자료</strong> — 학교폭력 신고서·학폭전담교사 면담 기록·심의위원회 회부 서류.</li>\n<li><strong>형사 고소 자료</strong> — 스토킹처벌법 위반 고소장(미성년자 고소는 법정대리인 동의 필요)·신분증·학생증·재학증명서.</li>\n<li><strong>민사 손배 자료</strong> — 정신과 진료 기록·심리상담 기록·학교 결석·성적 저하 자료. 친권자·감독자 책임 청구 시 가해 학생 부모 인적사항.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 학교 CCTV는 보존 기간이 짧을 수 있어(통상 30~60일) 즉시 학교에 보전 요청 공문을 보내야 안전합니다. 학부모를 통해 학교에 정식 요청하세요.</blockquote>',
      },
      {
        title: '다툴 포인트 — 학폭+형사 결합 전략',
        content:
          '<p><strong style="color:#1e3a5f">학폭과 형사를 결합하면 보호 효과가 강해집니다.</strong></p>\n<ul>\n<li><strong>학폭 사안조사 즉시 분리</strong> — 학교가 사안 인지 시 즉시 가해·피해 학생 분리. 가해자 출석정지·전학·반 분리 등.</li>\n<li><strong>학폭 처분 1~9호</strong> — 1호 서면사과 → 9호 퇴학. 처분 결과는 학교생활기록부 기재(중대 처분은 졸업 후 일정 기간 보존).</li>\n<li><strong>형사 처벌(14세 이상)</strong> — 스토킹처벌법 위반 형사 절차. 보호처분(1~10호)·기소유예·소년부 송치 등 다양한 결과 가능.</li>\n<li><strong>보호처분(10~13세 촉법소년)</strong> — 형사처벌 대신 소년법 보호처분. 1호 보호자 위탁 ~ 10호 장기소년원 송치.</li>\n<li><strong>친권자·감독자 책임</strong> — 민법 제755조에 따라 미성년자 가해 행위에 대한 친권자·감독자 손배 책임. 가해 학생 가족을 상대로 위자료 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: 학교 처분만 받고 만족하면 가해 학생이 SNS·외부에서 보복 행위를 이어갈 수 있습니다. 형사 절차나 잠정조치(접근금지) 등 법적 보호 장치를 함께 검토하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 잠정조치 연장결정 항고와 집행정지 효력',
        summary:
          '대법원 2025모3144 사건(대법원, 2025.12.11 선고)에서 법원은 스토킹처벌법에 따른 잠정조치 결정·연장결정에 대한 항고와 재항고에는 결정의 집행을 정지하는 효력이 없다고 판시했습니다. 잠정조치 연장 결정 후 가해자가 항고하더라도 결정 집행은 그대로 유지된다는 점이 확인된 사례입니다.',
        takeaway:
          '학교 내 스토킹에서도 가해 학생에 대해 잠정조치(접근금지·통신금지)가 인정되면 항고 진행 중에도 효력이 유지되어, 학교 분리 조치와 결합한 다층 보호가 가능한 구조입니다.',
      },
    ],
    faq: [
      {
        question: '14세 미만 가해 학생도 형사 처벌이 가능한가요?',
        answer:
          '<strong>10~13세는 형사처벌 대신 소년법 보호처분이 적용됩니다.</strong> 보호자 위탁·사회봉사·소년원 송치 등 보호처분 검토. 14세 이상은 형사 처벌도 가능해요.',
      },
      {
        question: '학폭 처분이 너무 약하면 어떻게 하나요?',
        answer:
          '<strong>처분 통보 후 15일 내 행정심판·행정소송으로 다툴 수 있습니다.</strong> 학교폭력대책심의위원회 처분에 불복하면 시·도 학교폭력대책심의위원회 재심도 검토 가능해요.',
      },
      {
        question: '신고 후 가해자가 보복하면 어떻게 하나요?',
        answer:
          '<strong>학교 즉시 분리 + 잠정조치 신청 + 보복행위 별도 신고가 필요합니다.</strong> 학교폭력예방법은 신고 보복 금지를 명문화하고 있어 추가 처분 검토 가능해요.',
      },
      {
        question: '미성년자가 형사 고소를 하려면 어떻게 하나요?',
        answer:
          '<strong>법정대리인(부모) 동의·대리 진행이 필요합니다.</strong> 본인이 14세 이상이라도 고소 절차는 부모와 함께 진행하는 것이 일반적이에요.',
      },
      {
        question: '무료 법률 상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단(132)·여성긴급전화(1366)·1388 청소년상담전화에서 무료 상담을 받아보실 수 있습니다.</strong> 학교폭력 117·해바라기센터도 함께 활용 가능해요.',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '직장 동료 스토킹 처벌·인사조치', href: '/guide/stalking/stalking-workplace-coworker-criminal' },
      { label: '이별 후 메시지 반복 스토킹', href: '/guide/stalking/stalking-ex-partner-message-criminal' },
      { label: '잠정조치·긴급응급조치 신청', href: '/guide/stalking/stalking-emergency-protection-order-apply' },
      { label: '스토킹 형사 고소 절차', href: '/guide/stalking/stalking-criminal-prosecution-process' },
      { label: '스토킹 피해자 보호조치', href: '/guide/stalking/stalking-victim-protection-order' },
    ],
  },
];
