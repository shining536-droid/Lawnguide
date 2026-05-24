import { SpokePage } from '../spoke-pages';

// batch76 dismissal — 3개 (2026-05-24)
//
// 고유 존재 이유:
// 1. 직장내 괴롭힘 신고 후 보복해고 — 단순 성과 부진 해고 류와 분기. 여기는 '괴롭힘 신고 → 얼마 뒤 성과 부진 명목 해고' 트랙. 근로기준법 제76조의3 신고자 불이익 금지 + 제23조 정당한 이유 + 보복성·시간적 근접성 다툼.
// 2. SNS 회사 비방 게시글 징계해고 — 단순 품위유지 위반 류와 분기. 여기는 '개인 SNS 비판글 → 명예훼손·품위유지 위반 명목 징계해고 + 표현 내용·공개 범위 쟁점' 트랙. 근로기준법 제23조 + 취업규칙 징계규정 + 징계양정 형평 다툼.
// 3. 위장폐업 해고 구제 — 단순 정리해고 류와 분기. 여기는 '노조 활동·집단 항의 직후 폐업 선언 → 곧 같은 대표 유사 상호 재개' 트랙. 근로기준법 제23조·제24조 + 부당노동행위 + 위장폐업 입증·소의 이익 다툼.

export const spokesBatch76Dismissal: SpokePage[] = [
  // ─── 1. dismissal-workplace-harassment-report-retaliation-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-workplace-harassment-report-retaliation-track',
    keyword: '직장내 괴롭힘 신고 후 보복해고',
    questionKeyword: '직장 내 괴롭힘을 회사에 신고했더니 얼마 뒤 갑자기 성과 부진을 이유로 해고 통보를 받았어요. 보복성 해고로 다툴 수 있나요?',
    ctaKeyword: '직장내 괴롭힘 신고 후 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '괴롭힘 신고 후 해고 — 5단계 보복성·신고자 보호 다툼 | 로앤가이드',
      description:
        '직장 내 괴롭힘을 신고했더니 얼마 뒤 성과 부진 명목으로 해고됐다면 신고자 불이익 금지·정당한 이유·시간적 근접성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중견 회사 6년 차로 근무하던 중 상사의 지속적인 폭언·업무 배제를 견디다 못해 사내 고충처리 절차에 직장 내 괴롭힘을 정식 신고했습니다. 신고 접수 약 한 달 뒤 회사는 갑자기 \'최근 성과 부진\'·\'팀 적합성 미흡\'을 명목으로 해고를 통보했어요. 신고 이전 평가는 정상 범위였고 별다른 징계 이력도 없었으며, 같은 팀에 더 낮은 평가를 받은 동료는 아무 조치도 받지 않았습니다. 신고와 해고 사이의 시간 간격이 짧고 사유가 갑작스러워 보복성 해고가 의심되는 상황이에요." 근로기준법 제76조의3은 직장 내 괴롭힘을 신고하거나 피해를 주장한 근로자에게 해고 등 불리한 처우를 하는 것을 금지하는 영역이고, 제23조는 정당한 이유 없는 해고를 제한하는 영역입니다. 신고 이후의 갑작스러운 성과 부진 명목 해고 + 시간적 근접성 + 동료 형평성 격차 결합은 \'신고에 대한 보복\' 평가와 \'정당한 이유 부재\' 다툼이 가능한 트랙입니다. 피해자라면 ① 신고 사실 ② 시간적 근접성 ③ 사유 합리성 ④ 부당해고 구제 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 신고 ② 근접성 ③ 사유 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 괴롭힘 신고 후 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·근접성·사유·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 신고 사실 입증</strong> — 사내 고충처리 신고서·접수 확인·괴롭힘 정황 자료.</li>\n<li><strong>② 시간적 근접성</strong> — 신고 시점과 해고 통보 시점의 간격·인과 정황.</li>\n<li><strong>③ 해고 사유 합리성</strong> — \'성과 부진\' 명목의 객관 입증 부재 + 신고 전 정상 평가.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 신고자 불이익 금지 + 정당한 이유 부재 다툼.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 근로기준법 제76조의3은 괴롭힘 신고자에 대한 불리한 처우를 금지하는 영역. 신고 후 짧은 기간 내 갑작스러운 해고 + 신고 전 정상 평가 + 동료 형평성 격차는 보복성 추정의 강한 사정으로 검토될 소지가 있고, 해고 사유의 정당성 입증책임은 사용자 측 부담입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신고·해고 자료 보존 (즉시)</strong> — 괴롭힘 신고서·고충처리 접수 확인·해고 통보서·사유서.</li>\n<li><strong>2단계 — 시간적 근접성 정리 (1주)</strong> — 신고일·조사 진행·해고 통보일 시간선 정리.</li>\n<li><strong>3단계 — 사유 합리성 반박 자료 (2주)</strong> — 신고 전 정상 평가표·근태·동료 형평성 비교 자료.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 신고자 불이익 금지 + 정당한 이유 부재 다툼.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">괴롭힘 신고 후 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·근접성·사유 갈래입니다.</strong></p>\n<ul>\n<li><strong>직장 내 괴롭힘 신고서·고충처리 접수 확인</strong></li>\n<li><strong>괴롭힘 정황 자료 (폭언 녹음·메시지·증인 진술)</strong></li>\n<li><strong>해고 통보서·징계위원회 자료·사유서</strong></li>\n<li><strong>신고 전 평가표·근태 기록 (정상 범위 입증)</strong></li>\n<li><strong>신고일·조사·해고 통보일 시간선 정리</strong></li>\n<li><strong>같은 팀 동료 평가·처우 비교 자료 (형평성 격차)</strong></li>\n<li><strong>회사 고충처리 규정·괴롭힘 대응 절차 문서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 신고와 해고 사이의 시간적 근접성 + 신고 전 정상 평가 + 동료 형평성 격차 3요소가 결합되면 \'성과 부진\' 명목의 해고 사유가 객관 입증 부재 영역으로 평가될 소지가 있는 트랙. 괴롭힘 신고서·접수 확인은 신고자 보호 적용의 핵심 입증.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>신고자 불이익 금지</strong> — 근로기준법 제76조의3 적용 + 신고 사실 입증.</li>\n<li><strong>시간적 근접성</strong> — 신고와 해고 사이 짧은 간격이 보복성 추정 사정.</li>\n<li><strong>해고 사유 합리성</strong> — \'성과 부진\' 명목의 객관 입증 부재 + 신고 전 정상 평가.</li>\n<li><strong>동료 형평성</strong> — 더 낮은 평가 동료 무처분 vs 신고자 해고 격차.</li>\n<li><strong>입증책임 부담</strong> — 해고 정당성 입증은 사용자 측 부담.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정당한 이유 평가와 징계양정의 형평',
        summary:
          '대법원 91누5884(대법원, 1992.05.22 선고) 영역에서 법원은 해고의 \'정당한 이유\'란 사회통념상 고용관계를 더 이상 지속할 수 없을 정도의 사유가 있는지에 따라 평가되고, 같은 정도의 사정에 대한 다른 근로자와의 처우 균형 등 징계양정의 형평도 함께 검토될 수 있다고 본 사례 흐름이 있어, 괴롭힘 신고 직후 성과 부진을 명목으로 한 해고 사안에도 동일 평가 기준이 검토될 수 있습니다.',
        takeaway: '괴롭힘 신고 + 시간적 근접성 + 신고 전 정상 평가 + 동료 형평성 격차 결합 시 정당한 이유 부재 + 신고자 보호 영역 — 변호인 상담·구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '괴롭힘을 신고한 게 해고와 관련 있다고 어떻게 입증하나요?',
        answer:
          '<strong>신고일과 해고 통보일의 시간적 근접성이 핵심 입증 영역입니다.</strong> 신고서·접수 확인·시간선 정리 자료 확보.',
      },
      {
        question: '회사는 \'성과 부진\'이라는데 신고 전엔 평가가 정상이었어요',
        answer:
          '<strong>신고 전후 평가 격차는 사유의 객관성 부재를 가리키는 사정입니다.</strong> 신고 전 평가표·근태 기록 보존.',
      },
      {
        question: '더 낮은 평가를 받은 동료는 아무 조치가 없어요',
        answer:
          '<strong>동료 형평성 격차는 보복성 추정의 결정적 사정입니다.</strong> 동료 평가·처우 비교 자료 확보.',
      },
      {
        question: '근로기준법 제76조의3 신고자 보호가 적용되나요?',
        answer:
          '<strong>괴롭힘 신고자에 대한 불리한 처우 금지 영역입니다.</strong> 신고 사실 + 불이익 처우 인과 정황 정리.',
      },
      {
        question: '구제신청은 언제까지 해야 하나요?',
        answer:
          '<strong>해고일로부터 3개월 이내가 노동위 구제신청 기한입니다.</strong> 기한 도과 전 신속 진행 검토.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '기간제 갱신거절', href: '/guide/dismissal/dismissal-fixed-term-renewal-refusal' },
      { label: '사직 압박 철회', href: '/guide/dismissal/dismissal-resignation-pressure-revoke' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 2. dismissal-sns-company-criticism-disciplinary-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-sns-company-criticism-disciplinary-track',
    keyword: 'SNS 회사 비방 게시글 징계해고',
    questionKeyword: '개인 SNS에 회사·상사를 비판하는 글을 올렸다가 명예훼손·품위유지 위반을 이유로 징계해고됐어요. 표현 내용·공개 범위로 다툴 수 있나요?',
    ctaKeyword: 'SNS 회사 비방 징계해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'SNS 회사 비판 징계해고 — 5단계 표현·징계양정 다툼 | 로앤가이드',
      description:
        '개인 SNS에 회사를 비판한 글로 징계해고됐다면 표현 내용·공개 범위·징계양정 형평 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"제조 회사 5년 차로 근무하던 중 반복되는 부당 지시와 임금 미정산에 대한 답답함을 개인 SNS 계정에 비판 글로 올렸습니다. 회사 실명은 직접 적지 않았지만 상사를 특정할 만한 정황이 일부 담겼고, 친구 공개 범위로 게시했어요. 회사는 이 글을 캡처해 \'회사 명예훼손\'·\'품위유지 의무 위반\'을 명목으로 징계위원회를 열어 징계해고를 통보했습니다. 그런데 징계처분서에는 \'명예훼손\'만 적혀 있었는데 실제 징계위원회에서는 \'근무 태도\'·\'조직 융화\' 등 다른 사정도 거론된 정황이 있었고, 게시글의 공개 범위가 제한적이었던 점은 충분히 고려되지 않았어요." 근로기준법 제23조는 정당한 이유 없는 해고를 제한하는 영역이고, 취업규칙 징계규정은 비위행위의 정도에 비례한 징계양정을 요구하는 영역입니다. 표현의 구체적 내용·진실성·공개 범위·회사 손해의 실질이 종합 검토되어야 하고, 가장 무거운 징계해고가 비위 정도에 비해 과도한지가 다툼이 가능한 트랙입니다. 피해자라면 ① 게시 내용 ② 공개 범위 ③ 징계사유 ④ 징계양정 ⑤ 부당해고 구제 5중 트랙이 가능한 영역. 대응은 ① 내용 ② 범위 ③ 사유 ④ 양정 ⑤ 노동위 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. SNS 비판 징계해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 내용·범위·사유·양정·구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 게시 내용 검토</strong> — 비판 표현의 구체성·진실성·공익성 여부.</li>\n<li><strong>② 공개 범위</strong> — 전체 공개 vs 친구 공개·특정인 식별 가능성.</li>\n<li><strong>③ 징계사유 특정</strong> — 징계처분서 기재 사유와 실제 거론 사유의 정합성.</li>\n<li><strong>④ 징계양정 형평</strong> — 비위 정도 대비 징계해고의 과도성.</li>\n<li><strong>⑤ 노동위 구제신청 (3개월)</strong> — 정당한 이유 부재 + 양정 과도 다툼.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: SNS 게시글의 표현 내용·진실성·공개 범위·회사 손해의 실질이 종합 검토되는 영역. 공개 범위가 제한적이고 회사 실명이 직접 드러나지 않은 사정은 비위 정도 평가에서 중요하게 고려될 소지가 있고, 가장 무거운 징계해고가 과도한지에 대한 입증책임은 사용자 측 부담입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시글·징계 자료 보존 (즉시)</strong> — 게시글 원본·공개 범위 설정 화면·징계처분서·징계위원회 자료.</li>\n<li><strong>2단계 — 표현 내용·공개 범위 정리 (1주)</strong> — 게시 표현의 진실성·공익성·특정 가능성·열람 범위 정리.</li>\n<li><strong>3단계 — 징계사유·양정 검토 (2주)</strong> — 처분서 기재 사유와 실제 거론 사유 대조 + 유사 사례 징계 수위 비교.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 이내)</strong> — 정당한 이유 부재 + 징계양정 과도 다툼.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">SNS 비판 징계해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 내용·범위·양정 갈래입니다.</strong></p>\n<ul>\n<li><strong>SNS 게시글 원본·작성 시점·삭제 여부 자료</strong></li>\n<li><strong>게시글 공개 범위 설정 화면 (전체/친구/특정인)</strong></li>\n<li><strong>징계처분서·징계위원회 회의록·통지서</strong></li>\n<li><strong>취업규칙 징계규정·품위유지 조항</strong></li>\n<li><strong>게시 표현의 진실성·공익성 입증 자료 (부당 지시·임금 미정산 정황)</strong></li>\n<li><strong>유사 비위 사례의 징계 수위 비교 자료</strong></li>\n<li><strong>회사 실제 손해 발생 여부·범위 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 게시글의 공개 범위가 제한적이고 회사 실명이 직접 드러나지 않은 사정 + 표현의 진실성·공익성은 비위 정도를 낮추는 핵심 입증. 징계처분서에 기재되지 않은 사유가 실제 양정에 반영됐다면 절차적 다툼의 결정적 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>표현 내용·진실성</strong> — 비판 표현의 사실성·공익성 평가.</li>\n<li><strong>공개 범위</strong> — 친구 공개·특정인 식별 가능성이 손해 평가에 영향.</li>\n<li><strong>징계사유 특정</strong> — 처분서 기재 사유와 실제 거론 사유의 정합성.</li>\n<li><strong>징계양정 형평</strong> — 가장 무거운 징계해고가 비위 정도 대비 과도한지.</li>\n<li><strong>입증책임 부담</strong> — 징계 정당성·양정 적정성 입증은 사용자 측 부담.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 징계사유의 특정과 실제 삼은 사유 범위',
        summary:
          '대법원 95누16684(대법원, 1997.03.14 선고) 영역에서 법원은 어떤 비위행위가 징계사유에 해당하는지는 징계위원회가 실제 징계사유로 삼은 비위행위에 의하여 정해지고 징계처분서에 기재된 문구에만 한정되지 않는 것으로 평가될 수 있다고 본 사례 흐름이 있어, SNS 비판 게시글을 명예훼손·품위유지 위반으로 징계해고한 사안에서도 실제 삼은 사유의 범위와 징계양정의 적정성을 함께 검토할 수 있습니다.',
        takeaway: 'SNS 비판 표현 + 제한적 공개 범위 + 징계해고 양정 결합 시 정당한 이유·양정 적정성 검토 영역 — 변호인 상담·구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '회사 실명을 직접 안 적었는데도 명예훼손인가요?',
        answer:
          '<strong>특정 가능성·표현 내용·공개 범위가 종합 검토되는 영역입니다.</strong> 게시글 원본·공개 범위 설정 자료 보존.',
      },
      {
        question: '친구 공개로만 올렸는데 회사가 캡처해서 문제 삼았어요',
        answer:
          '<strong>공개 범위가 제한적인 사정은 비위 정도 평가에 영향을 줍니다.</strong> 공개 범위 설정 화면·열람자 범위 정리.',
      },
      {
        question: '징계처분서엔 \'명예훼손\'만 적혔는데 회의에선 다른 얘기도 나왔어요',
        answer:
          '<strong>실제 삼은 사유와 기재 사유의 정합성이 다툼 영역입니다.</strong> 징계위원회 회의록·통지서 대조 자료 확보.',
      },
      {
        question: '비판 글이 사실이었다면 유리한가요?',
        answer:
          '<strong>표현의 진실성·공익성은 비위 정도를 낮추는 사정입니다.</strong> 부당 지시·임금 미정산 정황 입증 자료 보존.',
      },
      {
        question: '바로 징계해고는 너무 과한 것 같아요',
        answer:
          '<strong>비위 정도 대비 양정 과도성은 핵심 다툼 영역입니다.</strong> 유사 사례 징계 수위 비교 자료 확보.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '기간제 갱신거절', href: '/guide/dismissal/dismissal-fixed-term-renewal-refusal' },
      { label: '사직 압박 철회', href: '/guide/dismissal/dismissal-resignation-pressure-revoke' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 3. dismissal-fake-closure-disguised-shutdown-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-fake-closure-disguised-shutdown-track',
    keyword: '위장폐업 해고 구제',
    questionKeyword: '노조 활동·집단 항의 직후 회사가 폐업을 선언하고 전원 해고했는데, 곧 같은 대표가 유사 상호로 사업을 재개했어요. 위장폐업으로 다툴 수 있나요?',
    ctaKeyword: '위장폐업 해고 구제 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '위장폐업 해고 — 5단계 부당노동행위·소의 이익 다툼 | 로앤가이드',
      description:
        '노조 활동 직후 폐업 선언으로 전원 해고됐는데 같은 대표가 유사 상호로 재개했다면 위장폐업·부당노동행위 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중소 제조업체 8년 차로 근무하던 중 임금 미정산과 근로조건 악화에 동료들과 노조를 결성하고 집단 항의에 나섰습니다. 그러자 회사는 약 2주 만에 \'경영 악화로 인한 폐업\'을 선언하고 노조 가입 직원을 포함한 전원에게 해고를 통보했어요. 그런데 폐업 신고 후 한두 달 만에 같은 대표가 거의 동일한 설비·거래처·사업장 위치에서 \'유사한 상호\'로 사업을 다시 시작했고, 기존 직원 중 노조와 무관한 일부만 다시 채용한 정황이 확인됐습니다. 노조 활동을 이유로 한 폐업 위장이 의심되는 상황이에요." 근로기준법 제23조는 정당한 이유 없는 해고를 제한하고, 제24조는 경영상 해고의 요건을 규정하는 영역이며, 노동조합 활동을 이유로 한 불이익은 부당노동행위로 다툴 수 있는 영역입니다. 진정한 폐업이 아니라 노조를 와해할 목적의 \'위장폐업\'이라면 그 해고는 무효로 다툴 수 있는 트랙이지만, 회사가 청산종결까지 마쳐 근로관계 회복이 객관적으로 불가능해진 경우에는 구제신청의 소의 이익이 문제될 수 있어 위장 여부 입증이 중요한 영역입니다. 피해자라면 ① 시간적 근접성 ② 사업 동일성 ③ 부당노동행위 ④ 부당해고 구제 ⑤ 청산 여부 5중 트랙이 가능한 영역. 대응은 ① 근접성 ② 동일성 ③ 노동행위 ④ 노동위 ⑤ 청산 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 위장폐업 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 근접성·동일성·노동행위·구제·청산 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 시간적 근접성</strong> — 노조 활동·집단 항의와 폐업 선언 사이의 간격.</li>\n<li><strong>② 사업 동일성</strong> — 설비·거래처·사업장·상호의 실질적 연속성.</li>\n<li><strong>③ 부당노동행위</strong> — 노조 와해 목적 정황 + 노조원 선별 배제.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 위장폐업 + 부당노동행위 결합 다툼.</li>\n<li><strong>⑤ 청산 여부 확인</strong> — 법인 청산종결 여부와 소의 이익 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 진정한 폐업이 아니라 노조 와해 목적의 위장폐업이라면 해고를 무효로 다툴 수 있는 영역. 다만 회사가 청산종결까지 마쳐 근로관계 회복이 객관적으로 불가능해진 경우에는 구제신청의 소의 이익이 문제될 수 있어, 동일 대표의 유사 상호 재개·설비 연속성 입증이 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·노동위 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 폐업·해고·노조 자료 보존 (즉시)</strong> — 폐업 공지·해고 통보서·노조 결성·집단 항의 자료.</li>\n<li><strong>2단계 — 시간적 근접성 정리 (1주)</strong> — 노조 활동일·집단 항의일·폐업 선언일 시간선 정리.</li>\n<li><strong>3단계 — 사업 동일성 자료 (2주)</strong> — 유사 상호 사업자등록·설비·거래처·사업장 위치·재채용 인원 비교.</li>\n<li><strong>4단계 — 노동위 구제신청 + 부당노동행위 구제 (해고일 3개월 이내)</strong> — 위장폐업 + 노조 와해 목적 다툼.</li>\n<li><strong>5단계 — 청산 여부 확인 + 민사 손해배상</strong> — 법인등기 청산 여부 + 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">위장폐업 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 근접성·동일성·노동행위 갈래입니다.</strong></p>\n<ul>\n<li><strong>폐업 공지·폐업 신고 자료·해고 통보서</strong></li>\n<li><strong>노조 결성·가입·집단 항의 자료 (시점 입증)</strong></li>\n<li><strong>유사 상호 사업자등록·법인등기 자료</strong></li>\n<li><strong>설비·거래처·사업장 위치 연속성 정황</strong></li>\n<li><strong>재채용 인원 명단 (노조원 배제 정황 비교)</strong></li>\n<li><strong>기존 법인 청산종결 여부 등기 자료</strong></li>\n<li><strong>노조 와해 발언·압박 정황 자료 (녹음·메시지)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 노조 활동과 폐업의 시간적 근접성 + 동일 대표의 유사 상호 재개 + 설비·거래처 연속성 + 노조원 선별 배제 4요소가 결합되면 위장폐업 평가의 강한 사정. 청산종결 여부는 소의 이익 판단의 핵심이라 법인등기 확인이 우선.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>시간적 근접성</strong> — 노조 활동·집단 항의와 폐업 선언 사이 간격.</li>\n<li><strong>사업 동일성</strong> — 설비·거래처·사업장·상호의 실질적 연속성.</li>\n<li><strong>부당노동행위</strong> — 노조 와해 목적 + 노조원 선별 배제 정황.</li>\n<li><strong>소의 이익</strong> — 청산종결로 근로관계 회복 불가 시 소의 이익 다툼.</li>\n<li><strong>입증책임</strong> — 위장 여부 입증이 구제 인용의 결정 사정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위장폐업 다툼과 구제신청의 소의 이익',
        summary:
          '대법원 99두6910(대법원, 2000.08.22 선고) 영역에서 법원은 회사가 청산종결까지 마쳐 근로관계의 회복이 객관적으로 불가능해진 경우 부당해고 구제신청의 소의 이익이 문제될 수 있다고 본 사례 흐름이 있어, 노조 활동 직후 폐업을 선언하고 곧 같은 대표가 유사 상호로 사업을 재개한 위장폐업 의심 사안에서는 폐업의 진정성·청산 여부와 위장 여부 입증이 함께 검토될 수 있습니다.',
        takeaway: '노조 활동 + 폐업 선언 + 동일 대표 유사 상호 재개 + 청산 여부 결합 시 위장폐업·소의 이익 검토 영역 — 변호인 상담·구제신청 권장.',
      },
    ],
    faq: [
      {
        question: '회사가 폐업했는데도 구제신청이 가능한가요?',
        answer:
          '<strong>위장폐업이라면 해고를 무효로 다툴 수 있는 영역입니다.</strong> 다만 청산종결 여부에 따라 소의 이익이 검토됩니다.',
      },
      {
        question: '같은 대표가 유사 상호로 다시 사업을 시작했어요',
        answer:
          '<strong>설비·거래처·사업장 연속성이 위장폐업 입증의 핵심입니다.</strong> 유사 상호 사업자등록·재채용 인원 비교 자료 확보.',
      },
      {
        question: '노조원만 빼고 다시 채용한 정황이 있어요',
        answer:
          '<strong>노조원 선별 배제는 부당노동행위 평가의 강한 사정입니다.</strong> 재채용 명단·노조 가입 여부 비교 정리.',
      },
      {
        question: '법인이 청산까지 끝났으면 다툼이 어려운가요?',
        answer:
          '<strong>청산종결 여부는 소의 이익 판단의 핵심 영역입니다.</strong> 법인등기 청산 여부 확인이 우선 검토 사항.',
      },
      {
        question: '노조 활동과 폐업의 관련성을 어떻게 보여주나요?',
        answer:
          '<strong>활동 시점과 폐업 선언의 시간적 근접성이 핵심 입증입니다.</strong> 노조 결성·집단 항의·폐업 시간선 정리.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '기간제 갱신거절', href: '/guide/dismissal/dismissal-fixed-term-renewal-refusal' },
      { label: '사직 압박 철회', href: '/guide/dismissal/dismissal-resignation-pressure-revoke' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },
];
