import { SpokePage } from '../spoke-pages';

// batch58 inheritance — 3개:
// 1. 자필유언 증인 흠결로 무효 다툼 (검인 단계)
// 2. 유류분 시효 1년·10년 임박 — 권리 보전
// 3. 상속포기 후 후순위 상속인(자녀·형제) 채무 이전 (대습)
//
// 고유 존재 이유:
// 1. 이 페이지는 자필증서 유언이 형식 흠결(자필 미작성·증인서명 누락·날짜 미기재 등)로 무효 주장 다툼 상황에 놓인 다른 상속인이 검인 + 효력 다툼 + 유류분 결합 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 유류분 침해 사실은 알지만 시효(안 날 1년·상속개시 10년) 임박해 권리 보전이 급한 상속인이 시효 중단·반환청구 즉시 단계 트랙을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 1순위 상속인이 상속포기를 한 뒤 후순위 상속인(자녀·손자녀·형제자매)이 채무를 떠안는 위기 상황에서 후순위 상속인 전체 포기·한정승인 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch58Inheritance: SpokePage[] = [
  // ─── 1. inheritance / inheritance-handwritten-will-witness-defect-invalidation ───
  {
    domain: 'inheritance',
    slug: 'inheritance-handwritten-will-witness-defect-invalidation',
    keyword: '자필유언 증인서명 무효',
    questionKeyword: '아버지가 남기신 자필유언장에 증인 서명이 없거나 날짜가 빠져 있어요. 무효 다툴 수 있나요?',
    ctaKeyword: '자필유언 무효 다툼 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '자필유언장 형식 흠결 무효 다툼 — 4가지 다툼축 | 로앤가이드',
      description:
        '자필유언장에 자필 미작성·날짜 미기재·증인 서명 누락 등 흠결이 있다면 검인 + 효력 무효 + 유류분 결합 4가지 다툼축을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 사망한 뒤 형이 \'유언장이 있다\'며 자필 메모를 내밀었어요. 그런데 날짜는 \'2023년 봄\'으로만 적혀있고, 본인 이름·주소도 일부만 적혀 있어요. 이걸 유언장으로 인정해야 하나요?" 자필증서 유언은 민법 제1066조에 따라 ① 전문 자필 ② 연월일 ③ 주소 ④ 성명 ⑤ 날인 5가지 요건을 모두 갖춰야 효력이 인정되는 영역입니다. 하나라도 흠결이 있으면 무효 다툼이 가능한 영역. 자필증서·녹음·비밀증서 유언은 가정법원의 검인 절차를 거쳐야 하고(민법 제1091조), 검인 단계에서 형식 흠결을 다툴 수 있어요. 또한 유언이 무효로 판단되면 법정상속분으로 분할되거나, 유효라도 유류분 침해 시 반환청구 트랙(안 날 1년·상속개시 10년)이 결합되는 영역입니다. 자필 필체·종이·잉크 감정 자료가 핵심이에요.</p>',
    sections: [
      {
        title: 'Q. 자필유언 흠결 4가지 다툼축',
        content:
          '<p><strong style="color:#1e3a5f">A. 자필 + 연월일 + 주소·성명 + 날인 4가지 요건을 한 항목씩 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 자필 요건 (민법 제1066조 제1항)</strong> — 유언자가 \'전문\'을 직접 자필로 작성해야 하는 영역. 일부라도 타이핑·대필·인쇄가 섞이면 무효 주장 가능. 필체 감정으로 입증.</li>\n<li><strong>② 연월일 기재</strong> — 정확한 연·월·일이 기재돼야 하는 영역. \'2023년 봄\'·\'2023년\'만 적힌 경우 무효 다툼 가능. 다만 일부 사례는 \'환갑일\' 등 특정 가능 시 인정 여지.</li>\n<li><strong>③ 주소·성명 기재</strong> — 주소와 성명이 모두 자필로 기재돼야 하는 영역. 주소가 불명확하거나 누락 시 무효 다툼 가능.</li>\n<li><strong>④ 날인 (도장 또는 무인)</strong> — 도장이 누락되거나 사후 다른 사람이 찍은 정황이 있으면 무효 다툼 가능. 단, 무인(지장)도 인정되는 영역이라 사실 확인이 핵심.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자필증서 유언은 5가지 요건 중 하나라도 흠결 시 무효 가능 영역. 검인은 효력 판단이 아니라 \'존재 확인\' 절차이므로 검인 후에도 효력 다툼은 별도 소송으로 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 검인부터 무효 확인까지 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 검인 신청 → 효력 다툼 → 유류분 검토 → 분할 청구 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 유언장 원본·사본 확보 (즉시)</strong> — 가정법원 안내(민법 제1091조)에 따르면 유언서를 보관·발견한 사람은 지체 없이 가정법원에 검인 청구. 사본 촬영·자필 비교용 다른 자필 자료 확보.</li>\n<li><strong>2단계 — 검인 청구 (즉시·발견자 의무)</strong> — 피상속인 최후주소지 가정법원에 유언검인심판 청구. 상속인·이해관계인 입회 + 형식·내용 확인 절차.</li>\n<li><strong>3단계 — 형식 흠결 항변 (검인 절차 또는 별도 소)</strong> — 검인은 효력 판단 절차가 아니므로 \'유언무효확인의 소\' 또는 \'상속재산분할 청구\'에서 효력 다툼.</li>\n<li><strong>4단계 — 유류분 침해 여부 검토 (안 날 1년 시효)</strong> — 유언이 일부 유효이더라도 유류분(직계비속·배우자 1/2, 형제자매 1/3) 침해 시 반환청구 가능 영역.</li>\n<li><strong>5단계 — 분할 청구·등기 회복</strong> — 유언 전부 무효 시 법정상속분 + 협의·심판 분할. 일부 무효 시 유효 부분 + 잔여재산 분할.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">자필유언 흠결 4가지 다툼축을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 유언 원본 자료 + 자필 비교 자료 + 상속 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>유언장 원본·사본 (촬영본 포함)</strong> — 검인용 + 형식 흠결 입증.</li>\n<li><strong>피상속인 자필 비교 자료</strong> — 평소 편지·메모·일기·통장 서명. 필체 감정용.</li>\n<li><strong>피상속인 사망진단서·기본증명서</strong> — 사망 시점·상속 개시 입증.</li>\n<li><strong>가족관계증명서·제적등본</strong> — 상속인 확정.</li>\n<li><strong>상속재산 목록</strong> — 부동산 등기부·금융재산·동산.</li>\n<li><strong>유언검인심판청구서</strong> — 가정법원 양식.</li>\n<li><strong>유언자 정신상태 자료 (필요 시)</strong> — 유언 당시 인지·의사능력 진단.</li>\n<li><strong>유언 작성 정황 자료</strong> — 목격 가족·증인·당시 통화·SNS.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자필유언 무효 다툼은 \'요건 5가지 모두 갖췄는가\'를 한 항목씩 점검하는 영역. 일부 사례에서는 주소 누락만으로도 무효 판단되는 영역이라 가족 외 제3자 시각으로 자필 비교 자료를 정리해보면 약점이 보이는 사례가 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 형제 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"검인 통과했으니 유효" 주장 부분 반박</strong> — 검인은 \'존재·외형 확인\' 절차이지 효력 판단 절차 아닌 영역. 검인 후에도 효력 다툼 별도 가능.</li>\n<li><strong>"날짜 일부만 적혔어도 인정" 주장</strong> — 일부 사례는 인정, 일부는 무효. \'2023년 봄\'은 특정 어려움 영역. 사실관계 종합 판단.</li>\n<li><strong>"주소 누락은 사소" 주장 반박</strong> — 자필유언 5요건 중 주소도 명문 요건. 누락 시 무효 다툼 가능 영역(대법원 다수 사례).</li>\n<li><strong>"전부 자필 아닌데 일부만 인쇄" 주장 반박</strong> — \'전문\' 자필 요건 위반 영역. 인쇄·대필이 섞이면 무효 가능성 큼.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 상속·유언 무료 법률 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n<li><strong>대법원 전자가족관계등록 1899-9151</strong> — 가족관계증명서 발급 안내.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 유언 검인과 별도 효력 다툼',
        summary:
          '대법원 2022브10020 사건(수원고등법원, 2024.10.30 선고)에서 법원은 상속재산분할·기여분 청구 절차에서 유언과 분할 협의 효력에 관한 다툼을 종합적으로 심리한 바 있습니다. 또한 대법원 2024스866 사건(대법원, 2025.03.24 선고)은 마류 가사비송사건의 항고심 반대청구 적법성과 구체적 상속분 산정 방법을 판시했습니다. 자필유언 형식 흠결을 다투는 절차는 검인과 별도로 \'유언무효확인의 소\' 또는 상속재산분할 청구 절차에서 효력 다툼이 가능한 영역으로 평가될 여지가 있습니다.',
        takeaway: '자필유언 형식 흠결 다툼은 검인 + 효력 무효 확인 + 유류분 결합 트랙이라, 자필 비교 자료·날짜·주소·날인 한 항목씩 점검하면 다툼축이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '자필유언에 도장 대신 지장(무인)이 찍혔는데 무효인가요?',
        answer:
          '<strong>지장(무인)도 날인으로 인정되는 영역입니다(민법 제1066조 제1항).</strong> 다만 본인 지장인지 사후 다른 사람이 찍은 것인지 사실 다툼은 별도. 지문 감정 검토 가능한 영역.',
      },
      {
        question: '"2023년 봄"으로만 적힌 날짜는 무효인가요?',
        answer:
          '<strong>구체적 연월일 특정이 어려우면 무효 다툼 가능 영역입니다.</strong> 일부 \'환갑일·결혼기념일\'처럼 특정 가능 표현은 인정 사례 있으나, \'봄\'은 범위가 넓어 무효 위험.',
      },
      {
        question: '검인 끝났는데 효력 다툴 수 있나요?',
        answer:
          '<strong>검인은 효력 판단 절차가 아니라 가능합니다.</strong> 검인 = 존재·외형 확인. 효력 다툼은 \'유언무효확인의 소\' 또는 상속재산분할 청구에서 별도 진행.',
      },
      {
        question: '유언이 무효로 판단되면 어떻게 분할되나요?',
        answer:
          '<strong>법정상속분에 따라 분할되는 영역입니다.</strong> 협의 + 가능 시 원만 분할, 협의 결렬 시 가정법원 심판. 기여분·특별수익도 함께 고려.',
      },
      {
        question: '유언이 일부만 무효인 경우 유류분 청구 가능한가요?',
        answer:
          '<strong>유류분 침해 시 반환청구 가능한 영역입니다.</strong> 직계비속·배우자 1/2, 형제자매 1/3. 안 날 1년·상속개시 10년 시효 주의.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '유언장 효력 분쟁', href: '/guide/inheritance/inheritance-will-validity-dispute' },
      { label: '자필 vs 공정증서 유언 비교', href: '/guide/inheritance/inheritance-notarized-vs-handwritten-will-validity' },
      { label: '유언 위조·변조 다툼', href: '/guide/inheritance/inheritance-will-probate-forgery-dispute' },
      { label: '유류분 부족액 청구 절차', href: '/guide/inheritance/inheritance-yuryubun-shortage-claim-procedure' },
      { label: '상속재산 분할 협의', href: '/guide/inheritance/inheritance-division-disagreement-court-judgment' },
    ],
  },

  // ─── 2. inheritance / inheritance-yuryubun-time-limit-preservation ───
  {
    domain: 'inheritance',
    slug: 'inheritance-yuryubun-time-limit-preservation',
    keyword: '유류분 시효 1년 임박',
    questionKeyword: '유류분 침해 사실을 안 지 거의 1년 다 돼갑니다. 시효 보전 어떻게 하나요?',
    ctaKeyword: '유류분 시효 보전 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '유류분 시효 1년·10년 — 4단계 권리 보전 절차 | 로앤가이드',
      description:
        '유류분 침해 안 날 1년·상속개시 10년 시효 임박 시 내용증명·소장 접수·가처분 4단계 권리 보전 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 돌아가신 후 \'전 재산을 형에게 증여\'했다는 사실을 알게 됐어요. 알고 보니 그게 11개월 전이고, 시효가 1년이라는데 어떻게 해야 하나요?" 유류분 반환청구권은 ① 침해를 안 날부터 1년 ② 상속개시일부터 10년 두 가지 시효가 적용되는 영역입니다(민법 제1117조). 둘 중 하나라도 도과하면 권리가 소멸하는 영역이라 \'시효 보전\'이 급할 때 즉시 단계가 핵심이에요. 시효 중단을 위해서는 ① 내용증명 발송(재판상 청구 효과 X, 다만 반환청구 의사 표시 + 6개월 내 소 제기 효과) ② 소장 접수(재판상 청구로 시효 중단) ③ 가처분(시효 중단·재산 처분 방지) 트랙이 가능한 영역입니다. 유류분 비율·기초재산·시효는 사례별 다툼이 큰 영역이라 시효 보전을 먼저 한 뒤 본안 다툼이 안전합니다.</p>',
    sections: [
      {
        title: 'Q. 유류분 시효 4단계 보전 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 안 날 1년·상속개시 10년·재판상 청구·시효 중단 4가지 축으로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 안 날 1년 (단기 소멸시효, 민법 제1117조)</strong> — 유류분 침해 사실(증여·유증 + 침해 사실)을 안 날부터 1년 내 반환청구. 도과 시 권리 소멸 영역.</li>\n<li><strong>② 상속개시 10년 (장기 시효)</strong> — 안 날과 무관하게 상속개시일(피상속인 사망일)부터 10년. 둘 중 빠른 것 적용.</li>\n<li><strong>③ 시효 중단 트랙</strong> — 재판상 청구(소장 접수일이 시효 기준)·압류·가압류·가처분이 시효 중단 효과 영역. 내용증명은 6개월 내 소 제기 시 한정 효과.</li>\n<li><strong>④ 시효 임박 시 즉시 소 제기</strong> — 시효 임박 시 \'반환할 재산 일부\' 청구만으로도 우선 시효 중단 + 추후 청구취지 확장 트랙.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 유류분 시효 \'안 날 1년\'은 단기 영역. 시효 임박 시 본안 다툼보다 시효 보전이 우선. 소장 접수만으로 시효 중단 효과.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 시효 임박 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 안 날 확인 → 내용증명 → 소장 접수 → 가처분 → 본안 진행 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 안 날 시점 확정 (즉시)</strong> — 침해 사실(증여·유증 + 침해)을 알게 된 정확한 시점 확인. 시효 카운트 시작점.</li>\n<li><strong>2단계 — 내용증명 발송 (즉시)</strong> — 반환청구 의사 표시. 단, 시효 중단 효과는 6개월 내 소 제기 시 한정 영역. 주된 효과는 \'반환청구 의사 표시\'.</li>\n<li><strong>3단계 — 소장 접수 (시효 임박 시 우선)</strong> — 가정법원 또는 지방법원에 유류분 반환청구 소장 접수. 접수일 기준 시효 중단. 청구 금액 일부만 청구해도 시효 중단 효과.</li>\n<li><strong>4단계 — 가처분 (재산 처분 방지)</strong> — 침해자가 부동산·예금 처분 우려 시 부동산처분금지 가처분·예금가압류. 시효 중단 + 강제집행 보전.</li>\n<li><strong>5단계 — 본안 진행·청구 확장</strong> — 시효 보전 후 본안에서 유류분 비율·기초재산·반환 액수 다툼.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 상속 빚이 더 많은지, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">유류분 시효 보전 4단계를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 시효 입증 자료 + 침해 입증 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>피상속인 사망진단서·기본증명서</strong> — 상속개시일 입증(10년 시효 카운트).</li>\n<li><strong>침해 사실 안 날 입증 자료</strong> — 등기부등본 발급일·통장 입금 확인일·SNS·문자.</li>\n<li><strong>가족관계증명서·제적등본</strong> — 유류분 권리자 자격 입증.</li>\n<li><strong>증여·유증 자료</strong> — 등기부 변동 내역·증여계약서·유언장.</li>\n<li><strong>피상속인 재산 자료 (기초재산)</strong> — 상속개시일 시점 부동산·금융재산.</li>\n<li><strong>내용증명 발송 영수증</strong> — 우체국 등기 영수증.</li>\n<li><strong>소장·가처분 신청서</strong> — 법원 양식.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시효 임박 시 \'반환 청구 금액 일부\'(예: 1천만원)만 청구해도 시효 중단 효과. 본안에서 청구취지 확장 가능. 본안 다툼보다 시효 보전이 절대 우선이라는 점을 기억할 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 침해자 자주 항변과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"이미 1년 지났다" 항변 대응</strong> — \'안 날\' 시점 다툼 가능 영역. 등기부 발급일·통장 확인일·구체 정황 자료로 시효 카운트 다툼.</li>\n<li><strong>"내용증명만 보냈으니 시효 끝났다" 항변</strong> — 내용증명은 6개월 내 소 제기 시 시효 중단 효과 영역. 소 제기 안 하면 시효 도과.</li>\n<li><strong>"증여 아닌 매매" 항변 반박</strong> — 매매대금 송금 부재·시가 대비 현저히 낮은 가격 시 사실상 증여 추정 영역(대법원 사례).</li>\n<li><strong>"유류분 비율 0" 항변 반박</strong> — 직계비속·배우자 1/2, 직계존속·형제자매 1/3 명문. 분할협의서 단순 합의로 유류분 포기 추정 부정 사례.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 유류분·상속 무료 법률 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n<li><strong>법원 민사소송 안내</strong> — 가까운 가정·지방법원 민원실.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄적 유증과 유류분 부족액 산정',
        summary:
          '대법원 2022다220014 사건(대법원, 2025.05.29 선고)에서 법원은 유류분권리자의 유류분반환청구권 행사로 그의 유류분을 침해하는 범위 내에서 유증 또는 증여는 소급적으로 효력을 상실하며, 유류분 부족액은 유류분액에서 특별수익액과 순상속분액을 공제하는 방법으로 산정한다고 판시했습니다(민법 제1113조 제1항 적용). 또한 대법원 2023다304568 사건(대법원, 2024.06.13 선고)은 계약명의신탁 부동산이 유류분 산정의 기초재산에 산입되는 증여에 해당하는지 판단 기준을 명시했습니다. 유류분 시효는 안 날 1년·상속개시 10년이 적용되는 영역이라 시효 임박 시 우선 보전 후 본안에서 부족액을 다투는 트랙이 안전한 영역입니다.',
        takeaway: '유류분 시효 보전은 본안 다툼보다 우선이라, \'안 날\' 입증 자료 + 재산 자료를 정리한 뒤 일부 청구 소장이라도 먼저 접수하면 시효 중단 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '내용증명만 보내면 시효 멈추나요?',
        answer:
          '<strong>내용증명만으로는 시효 중단 효과 한정 영역입니다.</strong> 6개월 내 소 제기·압류·가압류·가처분 등 후속 절차 있어야 시효 중단 효과 인정. 안전한 방법은 소장 접수.',
      },
      {
        question: '시효 임박인데 액수 산정이 안 됐어요',
        answer:
          '<strong>일부 청구로 우선 시효 중단 가능한 영역입니다.</strong> \'1천만원 일부 청구\' 형태 소장 접수 후 본안에서 청구취지 확장. 시효 보전이 절대 우선.',
      },
      {
        question: '"안 날"은 정확히 언제부터 카운트되나요?',
        answer:
          '<strong>증여·유증 사실 + 본인 유류분 침해 사실 모두 안 날부터입니다.</strong> 단순히 사망 안 날 아닌 영역. 등기부 발급·통장 확인 시점 자료로 \'안 날\' 다툼 가능.',
      },
      {
        question: '유증 받은 형이 부동산을 팔아치울까 걱정돼요',
        answer:
          '<strong>부동산처분금지 가처분 + 가압류 트랙 검토 영역입니다.</strong> 시효 보전 + 강제집행 보전 결합 효과. 변호사 상담 후 신청 검토.',
      },
      {
        question: '상속개시일로부터 10년 지나면 무조건 끝인가요?',
        answer:
          '<strong>유류분 시효 \'상속개시 10년\'은 절대 시효 영역입니다.</strong> \'안 날 1년\'과 별개로 적용. 둘 중 빠른 시점 도과 시 권리 소멸. 10년 임박 사례는 즉시 소 제기.',
      },
    ],
    cta: { text: '상속 빚이 더 많은지, AI로 먼저 점검하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '유류분 부족액 청구 절차', href: '/guide/inheritance/inheritance-yuryubun-shortage-claim-procedure' },
      { label: '유류분 계산 방법', href: '/guide/inheritance/inheritance-yuryubun-claim-calculation' },
      { label: '생전 증여 유류분 산정', href: '/guide/inheritance/inheritance-pre-death-gift-yuryubun-calculation' },
      { label: '사인증여 청구 권리', href: '/guide/inheritance/inheritance-mortis-causa-gift-claim' },
      { label: '상속재산 분할 협의', href: '/guide/inheritance/inheritance-division-disagreement-court-judgment' },
    ],
  },

  // ─── 3. inheritance / inheritance-renunciation-junior-heirs-debt-transfer ───
  {
    domain: 'inheritance',
    slug: 'inheritance-renunciation-junior-heirs-debt-transfer',
    keyword: '상속포기 후순위 자녀 채무이전',
    questionKeyword: '아버지 빚 때문에 어머니랑 자녀가 상속포기 했더니 손자녀·삼촌이 빚을 떠안게 됐대요. 어떻게 막나요?',
    ctaKeyword: '후순위 상속포기 점검',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '상속포기 후 후순위 채무 이전 — 4단계 전체 포기 절차 | 로앤가이드',
      description:
        '1순위 상속포기 후 손자녀·형제자매·삼촌·조카가 채무를 떠안는 위기를 막는 후순위 전체 포기·한정승인 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 큰 빚을 남기고 돌아가셨어요. 어머니와 형제 모두 상속포기를 했는데, 알고 보니 채권자가 손자녀(미성년 자녀)에게 빚 청구를 하더라고요. 그 다음엔 삼촌·고모까지 차례로 받게 된대요. 어떻게 해야 하나요?" 민법 제1043조 + 제1044조에 따라 1순위(직계비속·배우자) 상속인이 모두 포기하면 ① 직계비속의 자녀(손자녀) → ② 직계존속(부모) → ③ 형제자매 → ④ 4촌 이내 방계혈족 순으로 채무가 이전되는 영역입니다. 가족 한 명만 포기하면 \'폭탄 돌리기\'가 시작되는 영역이라, 후순위 상속인 전체가 함께 포기하거나 일부는 한정승인을 결합하는 트랙이 핵심이에요. 또한 미성년 손자녀는 법정대리인(부모)의 동의·특별대리인 선임이 필요해 결정 기간 3개월이 짧을 수 있는 영역. 안심상속 원스톱서비스로 채무 한꺼번에 조회하고, 전체 가계도를 그려 누구까지 포기·한정승인 필요한지 미리 정리해야 합니다.</p>',
    sections: [
      {
        title: 'Q. 상속포기 후순위 4단계 채무 이전',
        content:
          '<p><strong style="color:#1e3a5f">A. 1순위 → 손자녀 → 직계존속 → 형제자매 → 방계혈족 순서로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 1순위 (직계비속·배우자)</strong> — 자녀·배우자가 1순위(민법 제1000조). 모두 포기 시 자동으로 손자녀(대습) 또는 직계존속에게 이전.</li>\n<li><strong>② 손자녀 대습상속</strong> — 1순위 직계비속이 포기 시 그 자녀(손자녀)에게 대습상속 영역. 미성년이면 법정대리인 동의 + 특별대리인 선임 필요할 수 있는 영역.</li>\n<li><strong>③ 직계존속 (부모·조부모)</strong> — 손자녀까지 모두 포기 시 직계존속 차순위. 보통 부모 사망 사례 많아 조부모까지 영향.</li>\n<li><strong>④ 형제자매·방계혈족</strong> — 직계존속 부재·포기 시 형제자매(2순위) → 4촌 이내 방계혈족. 평소 연락 안 한 친척까지 영향 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 1순위 1명만 포기 시 \'채무 폭탄 돌리기\' 시작. 한정승인은 받은 사람이 \'재산 한도 변제 후 종료\'라 후순위 이전 차단 효과. 가족 1명 한정승인 + 나머지 포기 결합 트랙도 가능한 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가족 전체 정리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 채무 조회 → 가계도 + 후순위 식별 → 전체 결정 → 신청 → 사후 관리 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 안심상속 원스톱서비스 + 채무 조회 (즉시)</strong> — 정부24 안심상속(부동산·금융·세금·연금 한꺼번에) + 한국신용정보원 채무조회. 보증채무는 별도 가족·지인 확인 영역.</li>\n<li><strong>2단계 — 가계도 작성 + 후순위 식별 (1주 내)</strong> — 직계비속·배우자 → 직계비속의 자녀(손자녀) → 직계존속 → 형제자매 → 4촌 이내 순. 평소 연락 안 한 친척까지 명단 작성.</li>\n<li><strong>3단계 — 가족 전체 결정 회의 (3개월 내)</strong> — 전원 포기 / 1명 한정승인 + 나머지 포기 / 1명 단순승인 + 나머지 포기 등 전략 결정. 미성년·고령자는 특별 절차 검토.</li>\n<li><strong>4단계 — 가정법원 신고 (상속 개시 안 날부터 3개월)</strong> — 한정승인심판청구서·상속포기심판청구서. 후순위 상속인은 \'상속 사실 안 날\'이 1순위 포기 사실 안 날부터 카운트되는 영역.</li>\n<li><strong>5단계 — 사후 관리 (6개월~)</strong> — 한정승인 시 신문 공고 + 채권자 비율 변제. 포기 후 채권자 추심 시 \'포기심판서\' 제시.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">후순위 상속포기 5단계를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 가족 식별 자료 + 신청 서류 + 채무 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>피상속인 사망진단서·기본증명서</strong> — 상속 개시 시점.</li>\n<li><strong>가족관계증명서·제적등본</strong> — 상속인·후순위 모두 식별.</li>\n<li><strong>안심상속 원스톱서비스 결과지</strong> — 부동산·금융·세금·연금 한꺼번에 조회.</li>\n<li><strong>채무 자료</strong> — 한국신용정보원 신용조회·카드사·통신사·보증채무.</li>\n<li><strong>한정승인심판청구서·상속포기심판청구서</strong> — 가정법원 양식.</li>\n<li><strong>재산목록 (한정승인 시 필수)</strong> — 정확한 재산 목록 누락 시 단순승인 간주 위험.</li>\n<li><strong>미성년 손자녀 특별대리인 선임 자료 (필요 시)</strong> — 법정대리인 동의 + 특별대리인 선임 트랙.</li>\n<li><strong>각 상속인 신분증·인감</strong> — 청구서 첨부.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가족 1명이 한정승인을 받고 신문 공고 + 채권자 비율 변제 절차를 마치면, 그 이후로 빚이 후순위로 이전되지 않고 \'그 한 사람에서 종료\'되는 영역. 미성년 손자녀가 후순위가 될 위험이 있다면 가족 1명이 한정승인을 떠안는 트랙이 자주 활용되는 사례.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생 위기 + 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>3개월 시한 도과 위기</strong> — 후순위 상속인은 \'1순위 포기 사실 안 날\'부터 3개월 영역. 채권자가 갑자기 청구할 때 시한 임박 위험.</li>\n<li><strong>특별한정승인 (단순승인 후 발견)</strong> — 단순승인 후 채무가 더 많음을 안 경우, 그 사실 안 날부터 3개월 내 특별한정승인 신청 가능 영역(민법 제1019조 제3항).</li>\n<li><strong>미성년 손자녀 특별대리인</strong> — 법정대리인이 미성년자 대신 결정 시 이해상반 시 특별대리인 선임 절차 필요할 수 있는 영역.</li>\n<li><strong>분할협의서 사해행위 위험</strong> — 채무자가 분할협의에서 자기 지분을 포기하면 사해행위 영역(대법원 2024다208315). 채권자가 사해행위취소 청구 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 한정승인·상속포기 무료 법률 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n<li><strong>정부24 안심상속 원스톱서비스</strong> — 재산·채무 한꺼번에 조회.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 분할협의 시 상속분 포기와 사해행위',
        summary:
          '대법원 2024다208315 사건(대법원, 2024.05.30 선고)에서 법원은 상속재산 분할협의는 사해행위취소권 행사의 대상이 될 수 있고, 이미 채무초과 상태에 있는 채무자가 상속재산 분할협의를 하면서 자신의 상속분에 관한 권리를 포기함으로써 일반 채권자에 대한 공동담보가 감소된 경우에는 원칙적으로 채권자에 대한 사해행위에 해당한다고 판시했습니다. 또한 분할협의가 사실상 상속포기와 같은 결과를 가져온다고 하여 사해행위에 해당하지 않는다고 볼 수 없다는 점도 확인했습니다. 후순위 상속인 채무 이전 위기에서 상속포기·한정승인 트랙은 가족 전체 결정이 핵심임을 보여주는 영역입니다.',
        takeaway: '후순위 상속포기는 가족 전체 가계도 + 시한 3개월 + 미성년 특별대리인 결합 트랙이라, 안심상속 원스톱서비스로 채무 조회 + 후순위 명단 사전 정리하면 \'채무 폭탄 돌리기\'를 막는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '미성년 손자녀까지 빚을 떠안나요?',
        answer:
          '<strong>1순위 직계비속이 포기 시 그 자녀(손자녀)에게 대습상속 영역입니다.</strong> 미성년이면 법정대리인 동의 + 특별대리인 선임 절차 필요. 가족 1명 한정승인 결합으로 차단 검토.',
      },
      {
        question: '평소 연락 안 한 삼촌·고모도 빚 떠안나요?',
        answer:
          '<strong>1·2순위 모두 포기 시 4촌 이내 방계혈족까지 차례로 채무 이전되는 영역입니다.</strong> 가족 전체 가계도 사전 작성 + 친척에게 미리 안내 필요.',
      },
      {
        question: '한정승인 1명 + 나머지 포기 조합이 가능한가요?',
        answer:
          '<strong>가능한 영역입니다.</strong> 한정승인 받은 1명이 신문 공고 + 채권자 비율 변제로 종료 → 후순위 이전 차단. 다만 한정승인 절차가 까다로워 변호사 조력 권장.',
      },
      {
        question: '단순승인했는데 빚이 더 많음을 알게 됐어요',
        answer:
          '<strong>특별한정승인 신청 가능한 영역입니다(민법 제1019조 제3항).</strong> 채무 초과 사실을 안 날부터 3개월 내 신청. 단, 중대한 과실 없어야 인정.',
      },
      {
        question: '분할협의에서 본인 지분만 포기해도 되나요?',
        answer:
          '<strong>채무초과 상태라면 사해행위 영역입니다(대법원 2024다208315).</strong> 채권자가 사해행위취소 청구 가능. 정식 상속포기심판 트랙이 안전.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '한정승인 vs 상속포기 비교', href: '/guide/inheritance/inheritance-renunciation-vs-limited-acceptance' },
      { label: '상속포기 절차 안내', href: '/guide/inheritance/inheritance-renunciation-process' },
      { label: '한정승인 채권자 대응', href: '/guide/inheritance/inheritance-limited-acceptance-creditor-response' },
      { label: '상속채무 우선순위', href: '/guide/inheritance/inheritance-deceased-debt-priority-order' },
      { label: '숨은 채무 발견 시 특별한정승인', href: '/guide/inheritance/inheritance-hidden-debt-discovery' },
    ],
  },
];
