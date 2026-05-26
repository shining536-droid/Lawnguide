import { SpokePage } from '../spoke-pages';

// batch79 defamation+jeonse-fraud — 8개 (2026-05-27) = 4+4
//
// 고유 존재 이유:
// defamation 4:
// 1. [defamation] 온라인 후기에서 의견 표명인지 사실 적시인지 다투는 피해자 — '의견 vs 사실 적시 구별 + 묵시적 기초사실 + 명예훼손 평가' 트랙 (victim)
// 2. [defamation] 직장 평가 플랫폼 후기를 올렸다가 명예훼손 혐의를 받는 입장 — '진실성·공익성 위법성 조각 + 증명책임 + 혐의 방어' 트랙 (accused)
// 3. [defamation] 사진·이미지 합성으로 시각적 조롱을 당한 피해자 — '비언어적·시각적 수단 모욕 + 경멸적 감정 표현 + 공연성' 트랙 (victim)
// 4. [defamation] 무례한 표현을 두고 모욕죄로 고소당한 입장 — '무례·예의 벗어난 표현은 모욕죄 부정 여지 + 혐의 방어' 트랙 (accused)
//
// jeonse-fraud 4:
// 5. [jeonse-fraud] 점유를 잃은 뒤 임차권등기로 대항력을 회복하려는 피해자 — '점유 상실 대항력 소멸 + 임차권등기 새 대항력 + 우선변제권' 트랙 (victim)
// 6. [jeonse-fraud] 중개사가 선순위 보증금을 잘못 설명해 보증금이 위험해진 피해자 — '중개사 조사·설명의무 위반 + 손해배상 + 보증금 회수' 트랙 (victim)
// 7. [jeonse-fraud] 전입·점유를 유지해 우선변제권을 지키려는 피해자 — '대항요건 계속 존속 + 우선변제권 유지 + 반환 청구' 트랙 (victim)
// 8. [jeonse-fraud] 임차권등기 비용을 임대인에게 청구·회수하려는 피해자 — '임차권등기 비용 상환청구권 + 상계 + 보증금 회수' 트랙 (victim)

export const spokesBatch79DefameJeonseFraud: SpokePage[] = [
  // ─── 1. defamation-online-review-opinion-vs-fact-victim-track (victim) ───
  {
    domain: 'defamation',
    slug: 'defamation-online-review-opinion-vs-fact-victim-track',
    keyword: '온라인 후기 의견 사실적시 구분 명예훼손',
    questionKeyword: '누군가 저에 대한 후기를 올리면서 \'의견일 뿐\'이라고 주장하는데, 사실상 허위 사실을 깔고 평판을 떨어뜨렸어요. 의견인지 사실 적시인지로 명예훼손 대응이 갈리나요?',
    ctaKeyword: '온라인 후기 의견 사실적시 구분 명예훼손 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '온라인 후기 의견·사실적시 구분 명예훼손 — 5단계 점검 | 로앤가이드',
      description:
        '후기 작성자가 \'의견일 뿐\'이라며 빠져나가도 그 안의 숨은 사실이 평판을 떨어뜨렸다면, 형법 제307조 의견·사실 적시 구별과 보존·고소·민사 5가지 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"거래·서비스 후기 형식으로 누군가 본인에 대한 글을 올렸는데, \'내 느낌일 뿐\'·\'개인 의견\'이라는 표현으로 포장해 두고는, 그 안에 \'돈을 떼먹었다·약속을 어겼다\'는 식의 검증되지 않은 사실을 깔아 두었습니다. 글을 본 사람들은 의견이 아니라 사실로 받아들였고, 본인의 거래·평판이 눈에 띄게 나빠졌어요. 상대는 \'의견 표명이라 문제될 것 없다\'고 버티지만, 본인은 사실상 허위사실을 퍼뜨린 것이라 막막합니다." 형법 제307조는 \'공연히 사실을 적시해 명예를 훼손한 행위\'를 명예훼손으로 규정하고, 정보통신망법 제70조는 정보통신망을 통한 비방 목적 명예훼손을 규정합니다. 후기 형식 + 의견 포장 + 숨은 사실 결합은 \'순수한 의견인지 vs 의견 속에 묵시적으로 사실이 적시됐는지\' 평가가 갈리는 트랙. 피해자라면 ① 표현 분석 ② 보존 ③ 삭제 요청 ④ 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 온라인 후기 의견·사실적시 구분 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 표현분석·보존·삭제·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 표현 분석</strong> — 순수 의견인지, 의견 속에 묵시적 사실이 적시됐는지 문구별 구분.</li>\n<li><strong>② 게시글 보존</strong> — 후기 전문·작성 시각·열람 수·반응 캡처.</li>\n<li><strong>③ 삭제·정정 요청</strong> — 플랫폼 권리침해 신고 + 임시조치 요청.</li>\n<li><strong>④ 형사 고소</strong> — 형법 제307조·정보통신망법 제70조 검토(허위·진위 구분).</li>\n<li><strong>⑤ 민사 손해배상</strong> — 위자료·정신적 피해 청구(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 명예훼손은 가치판단·평가를 내용으로 하는 \'의견\'이 아니라 증명 가능한 \'사실의 적시\'가 있어야 검토되는 영역. 다만 의견 형식이라도 그 속에 평가의 근거가 되는 숨은 사실이 묵시적으로 깔려 있고 그 사실이 사회적 평가를 떨어뜨릴 수 있다면 평가가 갈릴 수 있어, 문구별 구분이 우선입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 분석·보존·신고·고소 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 후기 즉시 보존 (인지 당일)</strong> — 전문 캡처·URL·작성 시각·열람 수·댓글 반응.</li>\n<li><strong>2단계 — 표현 문구별 분석 (1주 내)</strong> — 의견 부분과 사실 적시 부분을 표시·분리 정리.</li>\n<li><strong>3단계 — 플랫폼 권리침해 신고 + 방송통신심의위원회 심의 (병행)</strong> — 삭제·임시조치 검토.</li>\n<li><strong>4단계 — 경찰 고소 (1개월 내)</strong> — 형법 제307조·정보통신망법 제70조 + 허위·진위 소명.</li>\n<li><strong>5단계 — 민사 손해배상 청구 (시효 3년)</strong> — 위자료·정신적 피해 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인 후기 의견·사실적시 구분 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 표현·허위 반박·손해 갈래입니다.</strong></p>\n<ul>\n<li><strong>후기 전문 캡처 (URL·작성 시각·열람 수 포함)</strong></li>\n<li><strong>의견·사실 적시 구분 표시 자료 (문구별 분류)</strong></li>\n<li><strong>숨은 사실의 허위·진위 반박 자료 (거래 내역·정황 증빙)</strong></li>\n<li><strong>본인 식별 가능 정보 포함 부분 표시 자료</strong></li>\n<li><strong>플랫폼 신고 접수·처리 결과 캡처</strong></li>\n<li><strong>댓글·2차 확산 정황 자료</strong></li>\n<li><strong>정신적 피해 정황 자료 (진료·상담 기록, 필요 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \'의견\'이라는 표현 한 줄로 묻히지 않도록, 글 전체에서 사실로 읽히는 문장을 따로 표시해두면 평가에 도움이 되는 자료입니다. 작성자가 글을 수정·삭제하기 전에 전문(全文)을 시각·URL과 함께 캡처해두는 것이 우선입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>의견 vs 사실</strong> — 증명 가능한 사실 적시인지 순수 가치판단인지 구분.</li>\n<li><strong>묵시적 사실</strong> — 의견 속에 숨은 기초 사실이 평가 저하로 이어지는지.</li>\n<li><strong>허위성</strong> — 적시된 사실이 객관적으로 허위인지 진위 여부.</li>\n<li><strong>특정 가능성</strong> — 후기 대상이 본인으로 식별되는 범위.</li>\n<li><strong>공연성</strong> — 다수가 열람하는 플랫폼은 공연성 평가가 가능한 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보분쟁조정위원회 (kopico.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 의견 표명과 사실 적시 구별 평가 영역',
        summary:
          '대법원 2022다242649(대법원, 2025.06.26 선고) 영역에서 법원은 순수한 의견 표명만으로는 명예훼손이 성립하지 않지만, 의견이나 논평 형식이라도 전체적 취지에 비추어 의견의 근거가 되는 숨겨진 기초 사실의 적시가 묵시적으로 포함되어 있고 그 사실이 사회적 평가를 침해할 수 있다면 명예훼손에 해당할 수 있다고 판시했습니다. 후기 형식의 글에서도 의견 속 묵시적 사실 적시 여부가 핵심 평가 트랙으로 검토될 수 있습니다.',
        takeaway: '의견 형식이라도 숨은 사실 적시가 있으면 명예훼손 평가가 가능한 영역 — 문구별 구분 자료 정리 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '상대가 \'의견일 뿐\'이라고 하면 명예훼손이 안 되나요?',
        answer:
          '<strong>의견 속에 숨은 사실 적시가 있는지에 따라 평가가 갈리는 영역입니다.</strong> 문구별 구분 자료가 핵심.',
      },
      {
        question: '의견인지 사실인지 어떻게 구분하나요?',
        answer:
          '<strong>증명 가능한 사실 보고인지, 가치판단인지로 구분하는 영역입니다.</strong> 글 전체 맥락·문구별 분석이 중요.',
      },
      {
        question: '후기에 제 이름이 직접 안 나와도 대응되나요?',
        answer:
          '<strong>식별 가능 정보로 본인으로 특정되면 평가가 가능한 영역입니다.</strong> 식별 정보 표시가 도움.',
      },
      {
        question: '플랫폼에 신고하면 후기가 바로 지워지나요?',
        answer:
          '<strong>권리침해 신고 시 임시조치·검토 절차가 진행되는 영역입니다.</strong> 삭제 전 전문 캡처가 우선.',
      },
      {
        question: '평판이 떨어졌는데 민사 손해배상도 되나요?',
        answer:
          '<strong>정신적 피해와의 관계를 정리하면 손해배상 청구를 검토할 수 있는 영역입니다.</strong> 확산 정황 자료가 도움.',
      },
    ],
    cta: { text: '명예훼손 대응 포인트, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '온라인 리뷰 악평 명예훼손', href: '/guide/defamation/defamation-online-review-bad-writing' },
      { label: '온라인 명예훼손 증거 수집', href: '/guide/defamation/online-defamation-evidence-collection' },
      { label: '명예훼손 피해자 시작', href: '/guide/defamation/defamation-victim-where-to-start' },
      { label: '사실 vs 허위 명예훼손', href: '/guide/defamation/fact-vs-false-defamation' },
      { label: '명예훼손 합의금 기준', href: '/guide/defamation/defamation-settlement-amount-guide' },
    ],
  },

  // ─── 2. defamation-job-review-platform-public-interest-truth-defense (accused) ───
  {
    domain: 'defamation',
    slug: 'defamation-job-review-platform-public-interest-truth-defense',
    keyword: '회사 평가 플랫폼 후기 진실 공익 항변',
    questionKeyword: '재직 중 겪은 사실을 회사 평가 플랫폼에 후기로 올렸는데 회사가 명예훼손으로 고소했어요. 제가 겪은 진실이고 구직자에게 도움 되라고 쓴 건데 방어가 되나요?',
    ctaKeyword: '회사 평가 플랫폼 후기 진실 공익 항변 정리',
    type: '준비형',
    perspective: 'accused',
    meta: {
      title: '회사 평가 플랫폼 후기 진실·공익 항변 — 5단계 방어 점검 | 로앤가이드',
      description:
        '겪은 사실을 회사 후기로 올렸다가 명예훼손 혐의를 받고 있다면, 형법 제310조 진실성·공익성 위법성 조각과 증명책임 정리까지 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전 직장에서 겪은 임금·근무 환경 문제를 회사 평가 플랫폼에 후기로 적었습니다. 구직자들이 같은 일을 겪지 않길 바라는 마음에 본인이 직접 경험한 일을 사실대로 썼는데, 회사가 \'후기 때문에 채용·평판에 손해를 봤다\'며 명예훼손으로 고소했어요. 본인은 거짓을 쓴 적이 없고 공익적 목적이었다는 입장인데, 사실을 적어도 명예훼손이 될 수 있다는 말에 막막합니다." 혐의를 받고 있다면 형법 제307조는 \'공연히 사실을 적시해 명예를 훼손한 행위\'도 명예훼손 영역으로 규정하지만, 같은 법 제310조는 \'적시 사실이 진실하고 오로지 공공의 이익을 위한 것\'이면 위법성이 조각될 수 있다고 규정합니다. 회사 후기 + 사실 적시 + 공개 플랫폼 결합은 \'공연성 인정 vs 진실·공익 위법성 조각\' 평가가 갈리는 트랙. ① 진실성 ② 공익성 ③ 표현 절제 ④ 변호인 의견서 ⑤ 합의 5중 트랙으로 방어를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 회사 평가 플랫폼 후기 진실·공익 항변 5단계 방어 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진실성·공익성·표현·의견서·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실 진실성</strong> — 후기 내용이 본인이 겪은 객관 사실에 부합하는지 근거 정리.</li>\n<li><strong>② 공익성 평가</strong> — 구직자 알권리·근로 환경 정보 목적인지 사익적 동기 비중 평가.</li>\n<li><strong>③ 표현 절제 검토</strong> — 단정·인신공격 없이 경험 위주로 작성됐는지 점검.</li>\n<li><strong>④ 변호인 의견서</strong> — 형법 제310조 위법성 조각 항변 + 증명책임 정리.</li>\n<li><strong>⑤ 합의·정정 검토</strong> — 정정·일부 합의 조합.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사실을 적시해 명예를 훼손한 경우에도 그 목적이 오로지 공공의 이익을 위한 것이고 적시 사실이 진실이라는 증명이 있으면 위법성 조각을 검토할 수 있는 영역. 다만 그 증명책임은 표현행위를 한 측에 있는 것으로 평가되므로, 진실성 근거 자료를 충실히 모아두는 것이 먼저입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·의견서·조사·정정·합의 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 후기·근거 자료 보존 (즉시)</strong> — 후기 전문·작성 경위·경험 입증 자료 정리.</li>\n<li><strong>2단계 — 변호인 선임 + 의견서 (1~2주)</strong> — 형법 제310조 위법성 조각 항변 + 진실성·공익성 증빙 정리.</li>\n<li><strong>3단계 — 경찰 조사 출석 (1개월 내)</strong> — 공익 목적·표현 절제 소명 진술.</li>\n<li><strong>4단계 — 후기 정정·보완 (필요 시)</strong> — 단정·감정적 표현 부분 정리.</li>\n<li><strong>5단계 — 합의·민사 협의</strong> — 정정·일부 손해배상 조합 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">회사 평가 플랫폼 후기 진실·공익 항변 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진실·공익·표현 갈래입니다.</strong></p>\n<ul>\n<li><strong>후기 전문 보존 (삭제 전 캡처·URL)</strong></li>\n<li><strong>후기 내용의 경험·사실 근거 자료 (급여명세·근로계약·메시지)</strong></li>\n<li><strong>공익 목적 정황 자료 (구직자 알권리·정보 제공 맥락)</strong></li>\n<li><strong>표현 절제 여부 검토 자료 (인신공격·감정어 부분)</strong></li>\n<li><strong>작성 동기·경위 정리 자료</strong></li>\n<li><strong>변호인 의견서·항변 자료</strong></li>\n<li><strong>고소장·수사기관 통지 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 형사재판에서 유죄 인정은 합리적 의심이 없는 증명이 필요한 영역이므로, 후기에 적은 사실이 진실이라는 근거 자료가 충실할수록 방어에 유리한 트랙으로 검토될 수 있습니다. 급여명세·근로계약·당시 메시지처럼 경험을 객관적으로 뒷받침하는 자료를 함께 모아두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실 진실성</strong> — 후기 내용의 객관 근거 자료 충실성이 핵심.</li>\n<li><strong>공익성</strong> — 구직자 알권리·정보 제공 목적 vs 사익적 동기 비중 평가.</li>\n<li><strong>증명책임</strong> — 진실성·공익성 증명은 표현행위를 한 측이 부담하는 것으로 평가.</li>\n<li><strong>표현 방식</strong> — 단정·인신공격 회피가 위법성 조각 항변에 유리.</li>\n<li><strong>합의 타이밍</strong> — 조사 단계 합의가 처분에 영향을 줄 수 있는 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>국민권익위원회 부패·공익신고 1398</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실적시 명예훼손 위법성 조각과 증명책임 평가 영역',
        summary:
          '대법원 2021다270654(대법원, 2024.05.09 선고) 영역에서 법원은 언론매체 등이 사실을 적시해 명예를 훼손한 경우라도 그것이 공공의 이해에 관한 사항으로서 목적이 오로지 공공의 이익을 위한 것이고 적시 사실이 진실하거나 진실이라고 믿을 상당한 이유가 있으면 위법성이 없으며, 그 증명책임은 표현행위를 한 측에 있다고 판시했습니다. 회사 후기 사안에서도 진실성·공익성 항변과 그 증명이 핵심 방어 트랙으로 검토될 수 있습니다.',
        takeaway: '진실·공익 결합 시 위법성 조각 항변이 가능하나 증명책임은 작성 측 — 진실성 근거 자료 보존 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '제가 겪은 진실을 썼는데도 명예훼손이 되나요?',
        answer:
          '<strong>사실 적시도 공연성 인정 시 명예훼손 평가가 가능한 영역입니다.</strong> 진실 + 공익 결합 시 위법성 조각 항변.',
      },
      {
        question: '진실이라는 건 누가 증명해야 하나요?',
        answer:
          '<strong>진실성·공익성 증명은 표현행위를 한 측이 부담하는 것으로 평가되는 영역입니다.</strong> 근거 자료 충실성이 관건.',
      },
      {
        question: '구직자에게 도움 되라고 쓴 건 공익으로 인정되나요?',
        answer:
          '<strong>구직자 알권리·정보 제공 맥락 자료가 핵심 영역입니다.</strong> 작성 동기·근거가 중요.',
      },
      {
        question: '후기를 지금 정정·삭제하는 게 나을까요?',
        answer:
          '<strong>변호인 자문 후 결정 영역입니다.</strong> 감정적 표현 정정이 도움이 될 수 있으나 전문 보존이 먼저.',
      },
      {
        question: '합의로 마무리할 수 있을까요?',
        answer:
          '<strong>근거 자료 충실도에 따라 합의 조건이 달라지는 영역입니다.</strong> 정정·일부 배상 조합 검토.',
      },
    ],
    cta: { text: '삭제·합의·방어 포인트, AI로 먼저 점검하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '회사 리뷰 명예훼손 방어', href: '/guide/defamation/defamation-employer-review-defense' },
      { label: '잡플래닛 직장 후기 명예훼손 대응', href: '/guide/defamation/defamation-job-review-app-defense' },
      { label: '사실적시 명예훼손 방어', href: '/guide/defamation/truth-defamation-accused-response' },
      { label: '공익 명예훼손 방어', href: '/guide/defamation/public-interest-defamation-defense' },
      { label: '명예훼손 피의자 시작', href: '/guide/defamation/defamation-accused-where-to-start' },
    ],
  },

  // ─── 3. defamation-photo-composite-visual-mockery-victim-track (victim) ───
  {
    domain: 'defamation',
    slug: 'defamation-photo-composite-visual-mockery-victim-track',
    keyword: '사진 합성 시각적 조롱 모욕',
    questionKeyword: '제 사진을 우스꽝스럽게 합성하거나 동물·물건에 붙여 온라인에서 조롱거리로 만들어 퍼뜨렸어요. 글자 욕설은 아닌데 이런 이미지도 모욕죄가 되나요?',
    ctaKeyword: '사진 합성 시각적 조롱 모욕 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사진 합성 시각적 조롱 모욕 — 5단계 대응 점검 | 로앤가이드',
      description:
        '제 사진을 합성·조롱 이미지로 만들어 퍼뜨렸다면, 욕설이 없어도 형법 제311조 비언어적 모욕·공연성 평가와 보존·고소·민사 5가지 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"누군가 본인의 사진을 우스꽝스럽게 합성하거나, 동물·물건 이미지에 본인 얼굴을 붙여 \'조롱용\' 게시물로 만들어 온라인에 퍼뜨렸습니다. 직접적인 욕설 문장은 없지만, 보는 사람 누구나 본인을 비웃고 깎아내리는 의도로 만든 것임을 알 수 있었고, 댓글에는 비웃는 반응이 줄줄이 달렸어요. 상대는 \'그냥 짤·드립일 뿐\'이라고 하지만, 본인은 얼굴이 박제되어 돌아다니는 것 같아 모욕감이 큽니다." 형법 제311조는 \'공연히 사람을 모욕한 행위\'를 모욕죄로 규정하고, 모욕은 사실 적시 없이 사회적 평가를 떨어뜨리는 경멸적 감정 표현이면 검토 대상이 될 수 있는 영역입니다. 조롱 합성 이미지 + 다수 열람 + 경멸 의도 결합은 비언어적·시각적 수단 모욕·공연성 평가가 가능한 트랙. 피해자라면 ① 이미지 보존 ② 삭제 요청 ③ 작성자 특정 ④ 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 사진 합성 시각적 조롱 모욕 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·삭제·특정·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 이미지 보존</strong> — 합성 이미지·게시 위치·작성 시각·열람 수·댓글 반응 캡처.</li>\n<li><strong>② 삭제·차단 요청</strong> — 플랫폼 권리침해 신고 + 방송통신심의위 심의 검토.</li>\n<li><strong>③ 작성자 특정</strong> — 닉네임·계정·IP 확인을 수사기관 통해 검토.</li>\n<li><strong>④ 형사 고소</strong> — 형법 제311조 모욕 검토(친고죄, 고소기간 유의).</li>\n<li><strong>⑤ 민사 손해배상</strong> — 위자료·초상 관련 정신적 피해 청구(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 모욕은 언어적 수단뿐 아니라 비언어적·시각적 수단으로도 사회적 평가를 떨어뜨리는 경멸적 감정을 전달하면 검토 대상이 될 수 있는 영역. 다만 단순히 불쾌하기만 한 표현과 경멸적 모욕 표현의 구분이 다툼이 되므로, 이미지의 맥락·반응을 함께 보존하는 것이 우선입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·신고·고소 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 합성 이미지 즉시 보존 (인지 당일)</strong> — 이미지·게시 위치·작성 시각·열람 수·댓글 반응.</li>\n<li><strong>2단계 — 플랫폼 권리침해 신고 (1주 내)</strong> — 삭제·임시조치 요청.</li>\n<li><strong>3단계 — 방송통신심의위원회 심의 신청 (병행)</strong> — 반복 게시·확산 삭제·차단 검토.</li>\n<li><strong>4단계 — 경찰 고소 + 작성자 특정 (안 날부터 6개월 내)</strong> — 형법 제311조 + 계정·IP 확인 검토.</li>\n<li><strong>5단계 — 민사 손해배상 청구 (시효 3년)</strong> — 위자료·정신적 피해 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사진 합성 시각적 조롱 모욕 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 이미지·공연성·피해 갈래입니다.</strong></p>\n<ul>\n<li><strong>합성 조롱 이미지 캡처 (게시 위치·작성 시각 포함)</strong></li>\n<li><strong>원본 사진과 합성본 비교 자료</strong></li>\n<li><strong>이미지가 게시된 플랫폼·열람 범위 자료</strong></li>\n<li><strong>비웃는 댓글·2차 확산 정황 자료</strong></li>\n<li><strong>본인으로 식별 가능한 부분 표시 자료</strong></li>\n<li><strong>작성자 닉네임·계정 활동 이력 정황</strong></li>\n<li><strong>정신적 피해 정황 자료 (진료·상담 기록, 필요 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이미지는 작성자가 지우거나 다른 곳으로 옮기면 추적이 어려워지므로, 인지 즉시 게시 위치·시각과 함께 캡처해두는 것이 우선입니다. 댓글의 비웃는 반응까지 함께 보존해두면 경멸적 의도·확산 범위를 보여주는 자료가 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>모욕 vs 단순 불쾌</strong> — 경멸적 감정 표현인지 단순 불쾌한 짤인지 평가.</li>\n<li><strong>비언어적 수단</strong> — 이미지·합성도 경멸적 감정 전달 시 모욕 평가가 가능한 영역.</li>\n<li><strong>공연성</strong> — 다수가 열람하는 게시 공간은 공연성 평가가 가능한 영역.</li>\n<li><strong>친고죄 고소기간</strong> — 통상 안 날부터 6개월 내 고소가 검토되는 영역.</li>\n<li><strong>작성자 특정</strong> — 익명 계정은 수사기관 통한 계정·IP 확인 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보분쟁조정위원회 (kopico.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 비언어적·시각적 수단 모욕 성립 평가 영역',
        summary:
          '대법원 2022도4719(대법원, 2023.02.02 선고) 영역에서 법원은 모욕의 수단과 방법에는 제한이 없으므로 언어적 수단이 아닌 비언어적·시각적 수단만을 사용한 표현이라도 사람의 사회적 평가를 저하시킬 만한 추상적 판단이나 경멸적 감정을 전달하는 것이면 모욕죄가 성립할 수 있다고 판시했습니다. 합성·조롱 이미지 사안에서도 시각적 표현의 경멸적 의도·공연성이 핵심 평가 트랙으로 검토될 수 있습니다.',
        takeaway: '이미지·합성도 경멸적 감정 전달 시 모욕 평가가 가능한 영역 — 이미지·반응 보존 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '글자 욕설이 없는 합성 이미지도 모욕죄가 되나요?',
        answer:
          '<strong>경멸적 감정을 전달하는 시각적 표현이면 모욕 평가가 가능한 영역입니다.</strong> 이미지 맥락·반응 보존이 중요.',
      },
      {
        question: '상대가 \'그냥 짤·드립\'이라고 하면 어떻게 되나요?',
        answer:
          '<strong>단순 불쾌함인지 경멸적 모욕인지 평가가 갈리는 영역입니다.</strong> 의도·맥락 자료가 핵심.',
      },
      {
        question: '이미지가 여러 곳으로 퍼졌으면 어떻게 하나요?',
        answer:
          '<strong>2차 확산 정황은 피해 범위 자료가 되는 영역입니다.</strong> 확산 경로 캡처를 함께 보존하는 것이 좋습니다.',
      },
      {
        question: '익명 계정이 만든 건데 작성자를 찾을 수 있나요?',
        answer:
          '<strong>계정·IP 확인을 수사기관 통해 검토하는 영역입니다.</strong> 인지 즉시 원본 보존이 핵심.',
      },
      {
        question: '얼굴 사진이 박제됐는데 민사도 가능한가요?',
        answer:
          '<strong>초상 관련 정신적 피해와의 관계를 정리하면 손해배상을 검토할 수 있는 영역입니다.</strong> 확산 정황 자료가 도움.',
      },
    ],
    cta: { text: '명예훼손 대응 포인트, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '딥페이크 합성 명예훼손', href: '/guide/defamation/defamation-deepfake-synthesis-defamation' },
      { label: '온라인 모욕 고소·처벌', href: '/guide/defamation/online-insult-lawsuit-penalty' },
      { label: '명예훼손 피해자 시작', href: '/guide/defamation/defamation-victim-where-to-start' },
      { label: '온라인 명예훼손 증거 수집', href: '/guide/defamation/online-defamation-evidence-collection' },
      { label: '명예훼손 합의금 기준', href: '/guide/defamation/defamation-settlement-amount-guide' },
    ],
  },

  // ─── 4. defamation-rude-expression-not-insult-accused-defense (accused) ───
  {
    domain: 'defamation',
    slug: 'defamation-rude-expression-not-insult-accused-defense',
    keyword: '무례한 표현 모욕죄 고소 혐의 방어',
    questionKeyword: '말다툼 중 다소 무례하거나 거친 표현을 했다고 상대가 저를 모욕죄로 고소했어요. 욕설이라기보다 기분 상하는 정도였는데 모두 모욕죄가 되나요?',
    ctaKeyword: '무례한 표현 모욕죄 고소 혐의 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '무례한 표현 모욕죄 고소 혐의 — 5단계 방어 점검 | 로앤가이드',
      description:
        '다툼 중 거친 표현 한마디로 모욕죄 혐의를 받고 있다면, 형법 제311조 사회적 평가 저하·무례한 표현 구분과 맥락 정리까지 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"상대와 말다툼이 오가던 중 다소 무례하거나 거친 표현이 본인 입에서 나왔습니다. 욕설이라기보다는 상대를 비판하거나 답답함을 드러낸 정도였는데, 상대가 그 표현을 캡처해 \'모욕을 당했다\'며 본인을 고소했어요. 본인은 경멸적 욕설을 한 것이 아니라 다툼 과정의 거친 한마디였다는 입장인데, 무례한 말도 전부 모욕죄가 된다는 말에 막막합니다." 혐의를 받고 있다면 형법 제311조의 모욕죄는 사람의 사회적 평가를 떨어뜨릴 만한 추상적 판단이나 경멸적 감정을 표현하는 것을 의미하고, 상대를 불쾌하게 하는 정도의 무례한 표현이 곧바로 모욕죄가 되는 것은 아니라는 평가가 가능한 영역입니다. 다툼 중 거친 표현 + 경멸 의도 여부 + 맥락 결합은 \'모욕죄 구성요건 충족 vs 단순 무례\' 평가가 갈리는 트랙. ① 표현 분석 ② 맥락 정리 ③ 위법성 검토 ④ 변호인 의견서 ⑤ 합의 5중 트랙으로 방어를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 무례한 표현 모욕죄 고소 혐의 5단계 방어 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 표현분석·맥락·위법성·의견서·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 표현 분석</strong> — 경멸적 감정 표현인지 단순 무례·비판 표현인지 문구별 구분.</li>\n<li><strong>② 맥락 정리</strong> — 다툼 경위·상대 태도·당시 상황 등 전후 맥락 정리.</li>\n<li><strong>③ 위법성 검토</strong> — 의견 강조 과정의 표현이면 사회상규 위배 여부 검토.</li>\n<li><strong>④ 변호인 의견서</strong> — 모욕죄 구성요건 미충족·위법성 조각 항변 정리.</li>\n<li><strong>⑤ 합의·정리 검토</strong> — 사과·합의 조합 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 모욕죄의 모욕은 사회적 평가를 저하시킬 만한 경멸적 감정 표현을 의미하므로, 상대를 불쾌하게 하는 정도의 무례한 표현이 곧바로 모욕죄 구성요건에 해당하는 것은 아니라는 평가가 가능한 영역. 표현의 경위·상황 등 객관적 제반 사정을 함께 정리하는 것이 먼저입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·의견서·조사·정리·합의 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 대화·표현 전후 맥락 보존 (즉시)</strong> — 전체 대화·다툼 경위·상대 태도 기록 정리.</li>\n<li><strong>2단계 — 변호인 선임 + 의견서 (1~2주)</strong> — 모욕죄 구성요건 미충족·사회상규 위배 여부 항변 정리.</li>\n<li><strong>3단계 — 경찰 조사 출석 (1개월 내)</strong> — 경멸 의도 부재·다툼 맥락 소명 진술.</li>\n<li><strong>4단계 — 사과·정리 검토 (필요 시)</strong> — 표현으로 인한 감정 정리.</li>\n<li><strong>5단계 — 합의 협의</strong> — 사과·합의 조합 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 대응 포인트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">무례한 표현 모욕죄 고소 혐의 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 표현·맥락·항변 갈래입니다.</strong></p>\n<ul>\n<li><strong>문제 된 표현 전문·캡처</strong></li>\n<li><strong>표현 전후 전체 대화·다툼 기록</strong></li>\n<li><strong>다툼 경위·상대 태도 정리 자료</strong></li>\n<li><strong>경멸 의도가 아닌 비판·답답함 표현이었다는 정황 자료</strong></li>\n<li><strong>표현이 이루어진 장소·열람 범위 자료</strong></li>\n<li><strong>변호인 의견서·항변 자료</strong></li>\n<li><strong>고소장·수사기관 통지 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 모욕죄 여부는 표현 한마디만 떼어 보지 않고 당사자 관계·표현에 이르게 된 경위·당시 상황 등 객관적 제반 사정을 종합해 평가되는 영역이므로, 문제 된 표현만이 아니라 전후 대화 전체를 함께 보존해두는 것이 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>모욕 vs 무례</strong> — 경멸적 감정 표현인지 단순 불쾌·무례한 표현인지 평가.</li>\n<li><strong>경멸 의도</strong> — 사회적 평가 저하 의도가 있었는지 맥락으로 평가.</li>\n<li><strong>전후 맥락</strong> — 다툼 경위·상대 태도가 표현 평가에 반영되는 영역.</li>\n<li><strong>사회상규</strong> — 의견 강조 과정의 표현은 위법성 조각 여지.</li>\n<li><strong>합의 타이밍</strong> — 조사 단계 정리·합의가 처분에 영향을 줄 수 있는 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보분쟁조정위원회 (kopico.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 무례한 표현과 모욕죄 구성요건 평가 영역',
        summary:
          '대법원 2019도7370(대법원, 2022.08.31 선고) 영역에서 법원은 모욕죄의 모욕은 사회적 평가를 저하시킬 만한 경멸적 감정 표현을 의미하고, 상대방을 불쾌하게 할 수 있는 무례하고 예의에 벗어난 정도의 표현이거나 경미한 수준의 추상적 표현·욕설에 그치는 경우에는 원칙적으로 모욕죄의 구성요건에 해당하지 않는다고 판시했습니다. 다툼 중 거친 표현 사안에서도 경멸 의도·맥락이 핵심 방어 트랙으로 검토될 수 있습니다.',
        takeaway: '단순 무례·예의 벗어난 표현은 모욕죄 구성요건에서 벗어날 여지가 있는 영역 — 전후 맥락 보존 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '무례한 말 한마디도 전부 모욕죄가 되나요?',
        answer:
          '<strong>단순 불쾌·무례한 표현은 모욕죄 구성요건에서 벗어날 여지가 있는 영역입니다.</strong> 경멸 의도·맥락이 관건.',
      },
      {
        question: '말다툼 중에 나온 거친 표현도 처벌되나요?',
        answer:
          '<strong>다툼 경위·상대 태도 등 전후 맥락이 평가에 반영되는 영역입니다.</strong> 전체 대화 보존이 중요.',
      },
      {
        question: '경멸할 의도는 없었는데 어떻게 소명하나요?',
        answer:
          '<strong>표현 경위·상황 등 객관적 제반 사정으로 의도를 평가하는 영역입니다.</strong> 맥락 정리 자료가 핵심.',
      },
      {
        question: '비판하려다 표현이 거칠어진 경우는 어떤가요?',
        answer:
          '<strong>의견 강조 과정의 표현은 사회상규 위배 여부를 검토하는 영역입니다.</strong> 비판 맥락 자료가 도움.',
      },
      {
        question: '합의하면 사건이 정리될까요?',
        answer:
          '<strong>조사 단계 정리·합의가 처분에 영향을 줄 수 있는 영역입니다.</strong> 사과·합의 조합을 검토해볼 수 있습니다.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 고소 대응', href: '/guide/defamation/defamation-accused-response' },
      { label: '회사 단톡 욕설 모욕 명예훼손 구분', href: '/guide/defamation/defamation-company-chat-insult-vs-defamation' },
      { label: '명예훼손 가해자 방어 전략', href: '/guide/defamation/defamation-accused-defense-strategy' },
      { label: '명예훼손 피의자 시작', href: '/guide/defamation/defamation-accused-where-to-start' },
      { label: '정당한 비판 고소 대응', href: '/guide/defamation/legitimate-criticism-prosecution' },
    ],
  },

  // ─── 5. jeonse-fraud-occupancy-loss-dap-power-recovery-track (victim) ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-occupancy-loss-dap-power-recovery-track',
    keyword: '점유 상실 후 임차권등기 대항력 회복',
    questionKeyword: '보증금을 못 받은 채 사정상 이미 이사를 나와 짐을 뺐는데, 대항력이 사라졌다고 들었어요. 임차권등기를 하면 권리를 다시 살릴 수 있나요?',
    ctaKeyword: '점유 상실 후 임차권등기 대항력 회복 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '점유 상실 후 임차권등기 대항력 회복 — 5단계 점검 | 로앤가이드',
      description:
        '보증금을 못 받은 채 이미 이사를 나와 대항력이 사라졌다면, 주택임대차보호법 임차권등기로 새 대항력을 취득하는 5가지 회복 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"보증금을 돌려받지 못한 상황인데, 직장·가족 사정으로 어쩔 수 없이 먼저 이사를 나오고 짐을 모두 뺐습니다. 전입신고도 옮기고 나니 \'점유를 잃어서 대항력이 사라졌다\'는 말을 들었어요. 만기는 지났는데 보증금은 그대로 묶여 있고, 이제 와서 임차권등기를 하면 권리가 되살아나는지, 너무 늦은 건 아닌지 막막합니다." 주택임대차보호법 제3조 제1항은 \'주택 인도와 전입신고를 갖추면 대항력이 생긴다\'고 규정하고, 같은 법 제3조의3은 \'임차권등기명령\' 절차를 안내합니다. 점유·전입 이전 + 대항력 소멸 + 임차권등기 결합은 \'기존 대항력 소멸 vs 임차권등기로 새 대항력 취득\' 평가가 갈리는 트랙. 피해자라면 ① 권리 시점 확인 ② 임차권등기 ③ 내용증명 ④ 반환소송 ⑤ 피해자 결정 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 점유 상실 후 임차권등기 대항력 회복 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 시점확인·임차권등기·내용증명·반환소송·결정 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리 시점 확인</strong> — 점유·전입 이전 시점·기존 대항력 소멸 여부 정리.</li>\n<li><strong>② 임차권등기명령 신청</strong> — 등기로 새 대항력·우선변제권 취득 검토(서둘러 신청).</li>\n<li><strong>③ 내용증명 발송</strong> — 만기 보증금 반환 청구 + 이행 기한 통지.</li>\n<li><strong>④ 보증금 반환소송·강제집행</strong> — 지급명령·반환소송·가압류 검토.</li>\n<li><strong>⑤ 전세사기피해자 결정</strong> — 요건 충족 시 피해지원센터 신청 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 주택 인도·전입이라는 대항요건은 취득 시뿐 아니라 유지를 위해서도 계속 존속해야 하는 영역이라, 점유를 잃으면 기존 대항력은 소멸할 수 있습니다. 다만 임차권등기를 마치면 등기 시점부터 새로운 대항력·우선변제권 취득을 검토할 수 있어, 등기를 서두르는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 전세사기피해지원센터·법원 안내 절차를 참고한 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리 시점 자료 즉시 확보 (즉시)</strong> — 계약서·점유·전입 이전 시점·등기부·확정일자 정리.</li>\n<li><strong>2단계 — 임차권등기명령 신청 (서둘러, 1~2개월)</strong> — 법원 신청 + 등기 시점부터 새 대항력 취득 검토.</li>\n<li><strong>3단계 — 내용증명 발송 (병행)</strong> — 만기 보증금 반환 청구 + 기한 통지.</li>\n<li><strong>4단계 — 지급명령·반환소송·가압류 (만기 후)</strong> — 집주인 재산 파악·강제집행 검토.</li>\n<li><strong>5단계 — 전세사기피해자 결정 신청 (요건 충족 시)</strong> — 피해지원센터·정부 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">점유 상실 후 임차권등기 대항력 회복 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 시점·권리·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서·보증금 송금 영수증</strong></li>\n<li><strong>점유·전입 이전 시점 확인 자료 (이사·전출 기록)</strong></li>\n<li><strong>기존 전입세대 확인·확정일자 자료</strong></li>\n<li><strong>등기부등본 (선순위 권리 확인)</strong></li>\n<li><strong>집주인 반환 거절·지연 메시지·통화 정황</strong></li>\n<li><strong>임차권등기명령 신청·완료 등기부등본</strong></li>\n<li><strong>인근 시세 비교 자료 (시세 하락 입증, 필요 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이미 점유를 잃은 상황이라면 임차권등기를 가능한 한 빨리 마치는 것이 새 대항력·우선변제권 취득 검토에 도움이 되는 영역입니다. 등기 전에 선순위 권리가 늘어날수록 회수 범위가 좁아질 수 있으니 등기부를 먼저 확인하는 것이 우선입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대항력 소멸</strong> — 점유 상실 시점에 기존 대항력이 소멸할 수 있는 영역.</li>\n<li><strong>새 대항력 취득</strong> — 임차권등기 시점부터 새로운 대항력 취득을 검토.</li>\n<li><strong>등기 시점</strong> — 선순위 권리가 늘기 전에 등기를 마치는 것이 회수에 유리.</li>\n<li><strong>우선변제권 범위</strong> — 새 대항력 기준 우선변제 순위 평가.</li>\n<li><strong>강제집행 대상</strong> — 집주인 재산 파악·가압류가 회수의 관건.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>전세사기피해지원센터 1533-8119</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 점유 상실 대항력 소멸과 임차권등기 새 대항력 평가 영역',
        summary:
          '대법원 2024다326398(대법원, 2025.04.15 선고) 영역에서 법원은 주택 임차인이 전입신고와 인도로 대항력을 취득했더라도 그 후 점유를 상실하면 대항력은 점유 상실 시 소멸하고, 그 이후 임차권등기를 마쳐도 대항력이 소급해 회복되지는 않으나 등기가 마쳐진 때부터 그와 동일성이 없는 새로운 대항력이 발생한다고 판시했습니다. 점유를 잃은 사안에서도 임차권등기로 새 대항력을 취득할 수 있는지가 핵심 평가 트랙으로 검토될 수 있습니다.',
        takeaway: '점유 상실로 기존 대항력은 소멸해도 임차권등기 시점부터 새 대항력 취득이 검토되는 영역 — 등기를 서두르고 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '이미 이사를 나왔는데 대항력이 사라졌나요?',
        answer:
          '<strong>점유 상실 시점에 기존 대항력이 소멸할 수 있는 영역입니다.</strong> 임차권등기로 새 대항력 취득을 검토.',
      },
      {
        question: '임차권등기를 하면 권리가 소급해서 살아나나요?',
        answer:
          '<strong>소급 회복이 아니라 등기 시점부터 새 대항력이 생기는 것으로 검토되는 영역입니다.</strong> 등기를 서두르는 것이 관건.',
      },
      {
        question: '전입신고를 옮긴 것도 문제가 되나요?',
        answer:
          '<strong>점유·전입이 유지되지 않으면 기존 대항력이 흔들릴 수 있는 영역입니다.</strong> 임차권등기 신청이 우선.',
      },
      {
        question: '등기 전에 다른 권리가 끼면 불리한가요?',
        answer:
          '<strong>선순위 권리가 늘수록 회수 범위가 좁아질 수 있는 영역입니다.</strong> 등기부 확인 후 빠른 등기가 도움.',
      },
      {
        question: '이런 경우도 전세사기피해자 결정이 되나요?',
        answer:
          '<strong>미반환 정황과 요건 충족 여부에 따라 검토하는 영역입니다.</strong> 피해지원센터 상담 권장.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 첫 확인', href: '/guide/jeonse-fraud/jeonse-fraud-first-check' },
      { label: '전세보증금 미반환 대응', href: '/guide/jeonse-fraud/jeonse-deposit-not-returned-response' },
      { label: '전세사기 보증금 우선 순위', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-priority-order' },
      { label: '전세사기 피해자 인정 절차', href: '/guide/jeonse-fraud/jeonse-fraud-victim-recognition-process' },
      { label: '전세사기 구제 절차 일정', href: '/guide/jeonse-fraud/jeonse-fraud-relief-timeline' },
    ],
  },

  // ─── 6. jeonse-fraud-broker-senior-deposit-misinfo-liability-track (victim) ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-broker-senior-deposit-misinfo-liability-track',
    keyword: '중개사 선순위 보증금 설명 누락 손해',
    questionKeyword: '중개사 말만 믿고 계약했는데 알고 보니 선순위 보증금·근저당이 훨씬 많았어요. 중개사가 제대로 설명 안 한 건데 손해를 물을 수 있나요?',
    ctaKeyword: '중개사 선순위 보증금 설명 누락 손해 정리',
    type: '준비형',
    perspective: 'victim',
    meta: {
      title: '중개사 선순위 보증금 설명 누락 손해 — 5단계 점검 | 로앤가이드',
      description:
        '중개사 말만 믿고 계약했는데 선순위 보증금·근저당이 훨씬 많아 보증금이 위험해졌다면, 공인중개사법 설명의무 위반·손해배상 5가지 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"다가구주택 전세를 알아보며 중개사에게 \'앞순위 보증금이 얼마나 되는지\'를 물었더니 \'문제없는 수준\'이라고 해서 그 말을 믿고 계약했습니다. 그런데 만기에 보증금을 못 받게 되어 등기부를 다시 떼어 보니, 선순위 보증금과 근저당이 본인이 들은 것보다 훨씬 많아 회수가 어려운 상황이었어요. 중개사는 \'정확히 말한 적 없다\'며 발을 빼고 있는데, 잘못된 설명을 믿고 계약한 책임을 물을 수 있는지 막막합니다." 공인중개사법은 \'개업공인중개사가 선량한 관리자의 주의로 권리관계 등을 조사·확인해 의뢰인에게 성실·정확하게 설명할 의무\'를 규정하고, 같은 법 제30조는 손해배상책임과 공제·보증 절차를 안내합니다. 잘못된 설명 + 선순위 누락 + 손해 발생 결합은 중개사 설명의무 위반·손해배상 평가가 가능한 트랙. 피해자라면 ① 설명 정황 확인 ② 손해 산정 ③ 보증금 회수 절차 ④ 손해배상 청구 ⑤ 피해자 결정 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중개사 선순위 보증금 설명 누락 손해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 설명확인·손해산정·회수절차·배상청구·결정 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 설명 정황 확인</strong> — 중개 당시 설명 내용·확인설명서·메시지·통화 정황 정리.</li>\n<li><strong>② 손해 산정</strong> — 실제 선순위 보증금·근저당과 들은 내용의 차이·회수 부족분 산정.</li>\n<li><strong>③ 보증금 회수 절차</strong> — 임차권등기·반환소송·경매 배당 검토.</li>\n<li><strong>④ 손해배상 청구</strong> — 중개사·공제·보증 상대 손해배상 검토(공인중개사법 제30조).</li>\n<li><strong>⑤ 전세사기피해자 결정</strong> — 요건 충족 시 피해지원센터 신청 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 개업공인중개사는 선량한 관리자의 주의로 권리관계를 조사·확인해 의뢰인에게 성실·정확하게 설명할 의무가 있는 영역이라, 선순위 보증금을 잘못 설명해 손해가 발생했다면 손해배상 검토가 가능한 트랙. 다만 잘못된 설명과 손해의 인과·범위가 다툼이 되므로 설명 정황 자료가 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 전세사기피해지원센터·법원 안내 절차를 참고한 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 설명 정황·등기부 자료 즉시 확보 (즉시)</strong> — 확인설명서·중개 당시 메시지·통화·등기부등본 정리.</li>\n<li><strong>2단계 — 손해 산정 정리 (1주 내)</strong> — 들은 선순위 보증금과 실제 차이·회수 부족분 정리.</li>\n<li><strong>3단계 — 임차권등기명령 신청 (이사 전, 1~2개월)</strong> — 법원 신청 + 대항력 유지.</li>\n<li><strong>4단계 — 보증금 회수 + 손해배상 청구 (만기 후)</strong> — 반환소송·경매 배당 + 중개사·공제 상대 배상 검토.</li>\n<li><strong>5단계 — 전세사기피해자 결정 신청 (요건 충족 시)</strong> — 피해지원센터·정부 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">중개사 선순위 보증금 설명 누락 손해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 설명·손해·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서·중개대상물 확인·설명서</strong></li>\n<li><strong>중개 당시 설명 정황 자료 (메시지·통화·메모)</strong></li>\n<li><strong>계약 당시·현재 등기부등본 (선순위 보증금·근저당 비교)</strong></li>\n<li><strong>보증금 송금 영수증·전입세대 확인·확정일자 자료</strong></li>\n<li><strong>회수 부족분·손해 산정 자료</strong></li>\n<li><strong>중개사 공제증서·보증 관련 자료</strong></li>\n<li><strong>임차권등기명령 신청 서류</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 중개사 책임은 \'무엇을 어떻게 설명했는지\'가 핵심이므로, 계약 당시 들은 선순위 보증금 액수가 적힌 확인설명서·메시지·메모를 함께 모아두는 것이 도움이 되는 영역입니다. 계약 당시와 현재 등기부를 함께 떼어 선순위 변동을 비교해두는 것이 우선입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>설명의무 범위</strong> — 선순위 보증금·권리관계를 성실·정확하게 설명했는지.</li>\n<li><strong>설명 내용 입증</strong> — 잘못된 설명 정황을 어떤 자료로 입증할지가 핵심.</li>\n<li><strong>인과·손해 범위</strong> — 설명 잘못과 손해 사이 인과·배상 범위 평가.</li>\n<li><strong>공제·보증</strong> — 공인중개사 공제·보증을 통한 회수 범위 검토.</li>\n<li><strong>보증금 회수 병행</strong> — 임차권등기·반환소송·경매 배당과 함께 진행.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>전세사기피해지원센터 1533-8119</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 중개사 선순위 보증금 조사·설명의무와 손해배상 평가 영역',
        summary:
          '대법원 2024다283668(대법원, 2025.12.04 선고) 영역에서 법원은 다가구주택 일부에 대한 임대차를 중개하는 개업공인중개사는 선량한 관리자의 주의로 해당 주택에 선순위 임대차보증금채권이 얼마나 있을 수 있는지 조사·확인해 임차의뢰인에게 성실하게 설명할 의무가 있고, 고의나 과실로 이를 위반해 손해를 발생하게 한 경우 공인중개사법에 따른 배상책임을 진다고 판시했습니다. 중개사가 선순위 보증금을 잘못 설명한 사안에서도 설명의무 위반·손해배상이 핵심 평가 트랙으로 검토될 수 있습니다.',
        takeaway: '중개사의 선순위 보증금 조사·설명의무 위반 시 손해배상이 검토되는 영역 — 설명 정황 자료 보존 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '중개사 말만 믿고 계약했는데 책임을 물을 수 있나요?',
        answer:
          '<strong>선순위 보증금 설명의무 위반·손해배상이 검토되는 영역입니다.</strong> 설명 정황 자료가 핵심.',
      },
      {
        question: '중개사가 \'정확히 말한 적 없다\'고 하면 어떻게 하나요?',
        answer:
          '<strong>설명 내용을 어떤 자료로 입증하는지가 관건인 영역입니다.</strong> 확인설명서·메시지·메모가 도움.',
      },
      {
        question: '손해배상은 누구를 상대로 청구하나요?',
        answer:
          '<strong>중개사와 공제·보증을 함께 검토하는 영역입니다.</strong> 공제증서·보증 자료 확보가 우선.',
      },
      {
        question: '보증금 회수와 손해배상을 같이 진행할 수 있나요?',
        answer:
          '<strong>임차권등기·반환소송·경매 배당과 배상 청구를 병행 검토하는 영역입니다.</strong> 회수 부족분 산정이 도움.',
      },
      {
        question: '이런 경우도 전세사기피해자 결정이 되나요?',
        answer:
          '<strong>미반환 정황과 요건 충족 여부에 따라 검토하는 영역입니다.</strong> 피해지원센터 상담 권장.',
      },
    ],
    cta: { text: '보증금 돌려받을 수 있는지 AI로 점검하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 중개사 책임 범위', href: '/guide/jeonse-fraud/jeonse-fraud-broker-liability' },
      { label: '선순위 근저당 은폐 전세사기', href: '/guide/jeonse-fraud/jeonse-fraud-hidden-senior-mortgage-track' },
      { label: '전세사기 첫 확인', href: '/guide/jeonse-fraud/jeonse-fraud-first-check' },
      { label: '전세사기 보증금 우선 순위', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-priority-order' },
      { label: '전세사기 피해자 인정 절차', href: '/guide/jeonse-fraud/jeonse-fraud-victim-recognition-process' },
    ],
  },

  // ─── 7. jeonse-fraud-resident-registration-maintain-priority-track (victim) ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-resident-registration-maintain-priority-track',
    keyword: '전입 점유 유지 우선변제권 보전',
    questionKeyword: '보증금을 못 받고 있는데 직장 때문에 전입신고를 옮기거나 비워둬야 할 상황이에요. 전입·점유를 함부로 바꾸면 우선변제권이 위험해지나요?',
    ctaKeyword: '전입 점유 유지 우선변제권 보전 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '전입·점유 유지 우선변제권 보전 — 5단계 점검 | 로앤가이드',
      description:
        '보증금을 못 받았는데 직장·학교 사정으로 전입신고를 옮겨야 한다면, 주택임대차보호법 대항요건 계속 존속·우선변제권 5가지 보전 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"보증금을 돌려받지 못한 채 만기를 넘겼는데, 직장 발령·자녀 학교 문제로 전입신고를 옮기거나 집을 한동안 비워둬야 할 사정이 생겼습니다. 주변에서는 \'전입을 빼면 권리가 약해진다\'고 하고, 또 누구는 \'잠깐은 괜찮다\'고 해서 헷갈려요. 보증금이 묶여 있는 상황에서 전입·점유를 함부로 바꿨다가 우선변제권이 사라지면 큰일이라 어떻게 움직여야 할지 막막합니다." 주택임대차보호법 제3조 제1항은 \'주택 인도와 전입신고를 갖추면 대항력이 생긴다\'고 규정하고, 같은 법 제3조의2는 \'전입 + 확정일자를 갖춘 임차인의 우선변제권\'을 보호합니다. 미반환 상황 + 전입·점유 변경 필요 + 우선변제권 결합은 \'대항요건 계속 존속 vs 임차권등기로 권리 보전\' 평가가 갈리는 트랙. 피해자라면 ① 권리 점검 ② 임차권등기 ③ 내용증명 ④ 반환소송 ⑤ 피해자 결정 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 전입·점유 유지 우선변제권 보전 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리점검·임차권등기·내용증명·반환소송·결정 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리 점검</strong> — 전입·확정일자·점유 존속 상태와 우선변제 순위 확인.</li>\n<li><strong>② 임차권등기명령 신청</strong> — 전입·점유 변경 전 등기로 대항력·우선변제권 보전.</li>\n<li><strong>③ 내용증명 발송</strong> — 만기 보증금 반환 청구 + 이행 기한 통지.</li>\n<li><strong>④ 보증금 반환소송·강제집행</strong> — 지급명령·반환소송·가압류 검토.</li>\n<li><strong>⑤ 전세사기피해자 결정</strong> — 요건 충족 시 피해지원센터 신청 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 주택 인도·전입이라는 대항요건은 대항력 취득 시뿐 아니라 유지를 위해서도 계속 존속해야 하는 영역이라, 전입을 빼거나 점유를 잃으면 우선변제권이 흔들릴 소지가 있습니다. 부득이 전입·점유를 옮겨야 한다면 그 전에 임차권등기를 마치는 것이 권리 보전의 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보전 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 전세사기피해지원센터·법원 안내 절차를 참고한 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·존속 자료 즉시 점검 (즉시)</strong> — 전입세대 확인·확정일자·점유 상태·등기부 정리.</li>\n<li><strong>2단계 — 임차권등기명령 신청 (전입·점유 변경 전, 1~2개월)</strong> — 법원 신청 + 등기 완료 확인 후 이동.</li>\n<li><strong>3단계 — 내용증명 발송 (병행)</strong> — 만기 보증금 반환 청구 + 기한 통지.</li>\n<li><strong>4단계 — 지급명령·반환소송·가압류 (만기 후)</strong> — 집주인 재산 파악·강제집행 검토.</li>\n<li><strong>5단계 — 전세사기피해자 결정 신청 (요건 충족 시)</strong> — 피해지원센터·정부 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">전입·점유 유지 우선변제권 보전 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리·존속·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서·보증금 송금 영수증</strong></li>\n<li><strong>전입세대 확인·확정일자 자료</strong></li>\n<li><strong>점유 존속 정황 자료 (관리비·공과금 납부 내역 등)</strong></li>\n<li><strong>등기부등본 (선순위 권리·우선변제 순위 확인)</strong></li>\n<li><strong>집주인 반환 거절·지연 메시지·통화 정황</strong></li>\n<li><strong>임차권등기명령 신청·완료 등기부등본</strong></li>\n<li><strong>전입·점유 변경이 필요한 사유 자료 (발령·학교 등)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보증금을 못 받은 상태에서는 전입신고를 빼거나 짐을 다 빼기 전에 임차권등기 완료 여부를 먼저 확인하는 것이 권리 보전에 도움이 되는 영역입니다. \'잠깐은 괜찮다\'는 통념에 기대 전입·점유를 먼저 옮기면 우선변제권이 흔들릴 소지가 있으니 등기 완료가 우선입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대항요건 존속</strong> — 전입·점유는 취득뿐 아니라 유지를 위해서도 계속 존속해야 하는 영역.</li>\n<li><strong>우선변제권 보전</strong> — 전입·점유 변경 전 임차권등기 완료가 핵심.</li>\n<li><strong>등기 시점</strong> — 등기 완료 전에 전입을 빼면 우선변제권이 흔들릴 소지.</li>\n<li><strong>점유 입증</strong> — 점유 존속을 보여줄 정황 자료 정리.</li>\n<li><strong>강제집행 대상</strong> — 집주인 재산 파악·가압류가 회수의 관건.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>전세사기피해지원센터 1533-8119</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대항요건의 계속 존속 요건 평가 영역',
        summary:
          '대법원 2025다213466(대법원, 2026.01.08 선고) 영역에서 법원은 주택임대차보호법 제3조 제1항의 주택 인도와 주민등록이라는 대항요건은 대항력 취득 시만이 아니라 대항력을 유지하기 위해서도 계속 존속하고 있어야 한다고 판시했습니다. 보증금을 못 받은 상황에서 전입·점유 변경이 필요한 사안에서도 대항요건의 계속 존속과 임차권등기를 통한 권리 보전이 핵심 평가 트랙으로 검토될 수 있습니다.',
        takeaway: '대항요건은 유지 위해서도 계속 존속해야 하는 영역 — 전입·점유 변경 전 임차권등기 완료 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '전입신고를 옮기면 우선변제권이 사라지나요?',
        answer:
          '<strong>전입·점유가 유지되지 않으면 우선변제권이 흔들릴 소지가 있는 영역입니다.</strong> 변경 전 임차권등기가 핵심.',
      },
      {
        question: '\'잠깐은 괜찮다\'는 말이 맞나요?',
        answer:
          '<strong>대항요건은 유지를 위해서도 계속 존속해야 하는 것으로 검토되는 영역입니다.</strong> 통념에 기대기보다 등기 완료가 우선.',
      },
      {
        question: '임차권등기를 먼저 하면 전입을 옮겨도 되나요?',
        answer:
          '<strong>등기 완료 후 권리 보전을 검토할 수 있는 영역입니다.</strong> 등기 완료 확인 후 이동이 안전.',
      },
      {
        question: '집을 비워두기만 해도 권리가 약해지나요?',
        answer:
          '<strong>점유 존속이 흔들리면 대항요건이 약해질 소지가 있는 영역입니다.</strong> 점유 정황 자료·임차권등기가 도움.',
      },
      {
        question: '이런 경우도 전세사기피해자 결정이 되나요?',
        answer:
          '<strong>미반환 정황과 요건 충족 여부에 따라 검토하는 영역입니다.</strong> 피해지원센터 상담 권장.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 첫 확인', href: '/guide/jeonse-fraud/jeonse-fraud-first-check' },
      { label: '전세보증금 미반환 대응', href: '/guide/jeonse-fraud/jeonse-deposit-not-returned-response' },
      { label: '전세사기 보증금 우선 순위', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-priority-order' },
      { label: '전세사기 경매 배당 우선변제', href: '/guide/jeonse-fraud/jeonse-fraud-auction-priority-repayment' },
      { label: '전세사기 구제 절차 일정', href: '/guide/jeonse-fraud/jeonse-fraud-relief-timeline' },
    ],
  },

  // ─── 8. jeonse-fraud-lease-registration-cost-claim-recovery-track (victim) ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-lease-registration-cost-claim-recovery-track',
    keyword: '임차권등기 비용 임대인 청구 회수',
    questionKeyword: '보증금을 못 받아 임차권등기명령을 신청하면서 등기 비용·신청 비용이 들었어요. 이 비용도 집주인에게 따로 청구해서 받아낼 수 있나요?',
    ctaKeyword: '임차권등기 비용 임대인 청구 회수 정리',
    type: '준비형',
    perspective: 'victim',
    meta: {
      title: '임차권등기 비용 임대인 청구 회수 — 5단계 점검 | 로앤가이드',
      description:
        '보증금을 못 받아 임차권등기를 하며 든 신청·등기 비용까지 받아낼 수 있을지 궁금하다면, 주택임대차보호법 비용상환청구권 5가지 회수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"보증금을 돌려받지 못해 이사 전에 임차권등기명령을 신청했는데, 그 과정에서 신청 비용과 등기 비용이 적지 않게 들었습니다. 집주인 때문에 어쩔 수 없이 쓴 돈인데, 보증금만 돌려받으면 이 비용은 그냥 본인 부담으로 끝나는 건지, 아니면 따로 청구해서 받아낼 수 있는지 헷갈려요. 보증금 회수도 막막한데 비용까지 떠안는 건 억울하다는 생각이 듭니다." 주택임대차보호법 제3조의3 제8항은 \'임차인은 임차권등기명령 신청과 그에 따른 임차권등기와 관련해 든 비용을 임대인에게 청구할 수 있다\'고 규정하고, 같은 조는 임차권등기명령 절차를 안내합니다. 임차권등기 + 신청·등기 비용 + 보증금 미반환 결합은 비용상환청구권 행사·회수 방법 평가가 가능한 트랙. 피해자라면 ① 비용 정리 ② 임차권등기 ③ 비용상환청구 ④ 반환소송 병합 ⑤ 피해자 결정 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 임차권등기 비용 임대인 청구 회수 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 비용정리·임차권등기·비용청구·소송병합·결정 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 비용 정리</strong> — 임차권등기명령 신청 비용·등기 비용 영수증·증빙 정리.</li>\n<li><strong>② 임차권등기명령</strong> — 이사 시에도 대항력·우선변제권 유지.</li>\n<li><strong>③ 비용상환청구권 행사</strong> — 임대인에게 등기 관련 비용 청구 검토(법 제3조의3 제8항).</li>\n<li><strong>④ 반환소송 병합</strong> — 보증금 반환소송에 비용상환청구를 함께 청구·상계 검토.</li>\n<li><strong>⑤ 전세사기피해자 결정</strong> — 요건 충족 시 피해지원센터 신청 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임차인은 임차권등기명령 신청과 그에 따른 임차권등기와 관련해 든 비용을 임대인에게 청구할 수 있는 영역이라, 보증금과 별개로 비용상환청구를 검토할 수 있습니다. 비용 청구는 민사소송으로 청구하거나 상계의 자동채권으로 삼는 등의 방법으로 행사할 수 있어 영수증 보존이 우선입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 전세사기피해지원센터·법원 안내 절차를 참고한 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 비용 영수증·증빙 즉시 확보 (즉시)</strong> — 신청 비용·등기 비용·등록면허세 등 영수증 정리.</li>\n<li><strong>2단계 — 임차권등기명령 신청 (이사 전, 1~2개월)</strong> — 법원 신청 + 대항력 유지.</li>\n<li><strong>3단계 — 내용증명으로 비용·보증금 청구 (병행)</strong> — 보증금 + 등기 관련 비용 청구 통지.</li>\n<li><strong>4단계 — 반환소송에 비용상환청구 병합 (만기 후)</strong> — 지급명령·반환소송 + 비용 청구·상계 검토.</li>\n<li><strong>5단계 — 전세사기피해자 결정 신청 (요건 충족 시)</strong> — 피해지원센터·정부 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임차권등기 비용 임대인 청구 회수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 비용·권리·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서·보증금 송금 영수증</strong></li>\n<li><strong>임차권등기명령 신청 비용 영수증</strong></li>\n<li><strong>등기 비용·등록면허세 등 납부 영수증</strong></li>\n<li><strong>임차권등기명령 결정문·완료 등기부등본</strong></li>\n<li><strong>전입세대 확인·확정일자 자료</strong></li>\n<li><strong>집주인 반환 거절·지연 메시지·통화 정황</strong></li>\n<li><strong>비용·보증금 청구 내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 비용상환청구는 영수증 같은 객관 증빙이 있어야 청구 범위가 분명해지므로, 임차권등기 과정에서 든 신청 비용·등기 비용·세금 영수증을 한곳에 모아두는 것이 도움이 되는 영역입니다. 보증금 반환소송을 낼 때 비용 청구를 함께 묶으면 절차를 한 번에 정리할 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>비용상환청구권</strong> — 등기 신청·등기 관련 비용을 임대인에게 청구할 수 있는 영역.</li>\n<li><strong>청구 방법</strong> — 민사소송 청구 또는 상계의 자동채권으로 삼는 방법 검토.</li>\n<li><strong>비용 범위</strong> — 신청 비용·등기 비용·세금 등 어디까지 포함되는지 평가.</li>\n<li><strong>증빙 충실성</strong> — 영수증 등 객관 증빙이 청구 범위를 좌우.</li>\n<li><strong>보증금 회수 병행</strong> — 반환소송에 비용 청구를 병합·상계 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>전세사기피해지원센터 1533-8119</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차권등기 비용 상환청구권 행사 방법 평가 영역',
        summary:
          '대법원 2024다221455(대법원, 2025.04.24 선고) 영역에서 법원은 주택임대차보호법 제3조의3 제8항이 임차권등기명령 신청비용과 임차권등기비용에 대한 비용상환청구권을 인정하면서 청구 방법·절차에 관한 별도 규정을 두지 않았으므로, 임차인은 민사소송으로 청구하거나 이를 상계의 자동채권으로 삼는 등의 방법으로 행사할 수 있다고 판시했습니다. 임차권등기 비용 회수 사안에서도 비용상환청구권의 행사 방법이 핵심 평가 트랙으로 검토될 수 있습니다.',
        takeaway: '임차권등기 신청·등기 비용은 임대인에게 청구하거나 상계로 행사할 수 있는 영역 — 비용 영수증 보존 + 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '임차권등기 비용도 집주인에게 받을 수 있나요?',
        answer:
          '<strong>신청·등기 관련 비용을 임대인에게 청구할 수 있는 영역입니다.</strong> 비용 영수증 보존이 우선.',
      },
      {
        question: '비용은 어떤 방법으로 청구하나요?',
        answer:
          '<strong>민사소송으로 청구하거나 상계의 자동채권으로 삼는 방법을 검토하는 영역입니다.</strong> 증빙 정리가 관건.',
      },
      {
        question: '어떤 비용까지 청구 범위에 들어가나요?',
        answer:
          '<strong>신청 비용·등기 비용·세금 등 범위가 평가되는 영역입니다.</strong> 영수증으로 범위를 분명히 하는 것이 도움.',
      },
      {
        question: '보증금 반환소송과 같이 청구할 수 있나요?',
        answer:
          '<strong>반환소송에 비용 청구를 병합·상계 검토할 수 있는 영역입니다.</strong> 절차를 한 번에 정리하면 효율적.',
      },
      {
        question: '이런 경우도 전세사기피해자 결정이 되나요?',
        answer:
          '<strong>미반환 정황과 요건 충족 여부에 따라 검토하는 영역입니다.</strong> 피해지원센터 상담 권장.',
      },
    ],
    cta: { text: '보증금 돌려받을 수 있는지 AI로 점검하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 첫 확인', href: '/guide/jeonse-fraud/jeonse-fraud-first-check' },
      { label: '전세보증금 미반환 대응', href: '/guide/jeonse-fraud/jeonse-deposit-not-returned-response' },
      { label: '전세사기 보증금 우선 순위', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-priority-order' },
      { label: '전세사기 구제 절차 일정', href: '/guide/jeonse-fraud/jeonse-fraud-relief-timeline' },
      { label: '전세사기 민사 vs 형사', href: '/guide/jeonse-fraud/jeonse-fraud-civil-vs-criminal' },
    ],
  },
];
