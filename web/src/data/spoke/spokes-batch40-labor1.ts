import { SpokePage } from '../spoke-pages';

// batch40 labor1 10개: unemployment 4 + retirement 3 + wage 3

export const spokesBatch40Labor1: SpokePage[] = [
  // ─── 1. unemployment / wage-cut-10percent-quit ───
  {
    domain: 'unemployment',
    slug: 'unemployment-wage-cut-10percent-quit',
    keyword: '임금 10% 삭감 자발적 퇴사 실업급여',
    questionKeyword: '월급 10% 넘게 깎였을 때 퇴사하면 실업급여 받나요?',
    ctaKeyword: '임금 삭감 퇴사 실업급여 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '임금 10% 이상 삭감 시 자발적 퇴사 실업급여 기준 | 로앤가이드',
      description:
        '임금이 10% 이상 삭감되어 퇴사할 때 자발적 이직이라도 실업급여가 인정되는 기준과 증빙, 신청 순서를 지금 확인하세요.',
    },
    intro:
      '<p>갑자기 월급이 10% 넘게 깎이면 "계속 다닐 수 없는데 실업급여는 받을 수 있을까" 고민이 커집니다. 고용보험법 시행규칙 제101조의2는 임금 삭감을 "수급자격이 제한되지 않는 정당한 이직 사유"로 규정하고 있어, 증빙만 확보하면 자발적 퇴사라도 수급이 인정될 수 있습니다.</p>',
    sections: [
      {
        title: '임금 삭감 — 정당한 이직 사유의 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 시행규칙은 "이직 전 1년 이내 2개월 이상 임금이 평균 대비 30% 이상 지급되지 않은 경우" 또는 "임금이 10% 이상 삭감된 경우"를 정당한 사유로 명시합니다.</strong></p>\n<ul>\n<li><strong>10% 삭감 기준</strong> — 기본급 또는 통상임금 기준으로 10% 이상 인하되면 요건 충족.</li>\n<li><strong>기간 요건</strong> — 퇴직 전 1년 이내 발생한 삭감이어야 인정.</li>\n<li><strong>서면 동의 없음</strong> — 근로자 동의 없는 일방적 삭감이 핵심. 동의서에 도장 찍었다면 불리할 수 있음.</li>\n<li><strong>근거 조항</strong> — 고용보험법 시행규칙 제101조의2 별표2 제1호 나목.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 10% 삭감 여부는 "삭감 전 3개월 평균 임금" 대비 "삭감 후 임금"으로 판단합니다.</blockquote>',
      },
      {
        title: '증빙 서류 — 고용센터가 요구하는 자료',
        content:
          '<p><strong style="color:#1e3a5f">임금 삭감을 입증할 객관적 자료가 없으면 수급자격 심사에서 거절될 수 있습니다.</strong></p>\n<ul>\n<li><strong>삭감 전·후 급여명세서</strong> — 최소 3개월치씩 비교 가능하도록 준비.</li>\n<li><strong>근로계약서·임금협정서</strong> — 최초 계약 대비 변경 내역 확인.</li>\n<li><strong>통장 입금 내역</strong> — 실지급액 변동을 시계열로 보여주는 객관 증거.</li>\n<li><strong>삭감 공지 메일·메시지</strong> — 일방 통보 정황을 증명하는 자료.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 임금 삭감률과 이직 사유 인정 여부를 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '신청 순서 — 퇴사 전·후 체크 포인트',
        content:
          '<p><strong style="color:#1e3a5f">퇴사 전 삭감 증빙 확보가 신청 성공의 핵심입니다.</strong></p>\n<ul>\n<li><strong>퇴사 전</strong> — 삭감 통보 문서·메시지 캡처, 급여명세서 사본 확보.</li>\n<li><strong>이직확인서 요청</strong> — 사업주에 정확한 이직 사유(임금 삭감)를 기재하도록 요청.</li>\n<li><strong>고용센터 방문</strong> — 퇴사 후 14일 이내 수급자격 신청, 삭감 증빙 일괄 제출.</li>\n<li><strong>이의신청</strong> — 사업주가 "자진퇴사"로 기재해도 근로자 증빙으로 뒤집을 수 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이직확인서 사유와 실제 사유가 다르면 고용센터에 정정 요청하세요.</blockquote>',
      },
      {
        title: '실무 체크리스트 — 삭감 전 대응 전략',
        content:
          '<p><strong style="color:#1e3a5f">삭감 통보를 받았다면 즉시 대응하지 말고 증거 확보부터 하세요.</strong></p>\n<ul>\n<li><strong>즉시 퇴사 금지</strong> — 최소 1~2개월은 삭감된 임금으로 실지급 받아 기록 남김.</li>\n<li><strong>서명·도장 금지</strong> — "임금 변경 동의서" 서명은 수급자격을 훼손.</li>\n<li><strong>노동청 진정 병행</strong> — 일방적 삭감은 근로기준법 위반, 진정 자료가 증빙이 됨.</li>\n<li><strong>동료 진술서</strong> — 같은 회사 내 다수가 삭감당한 경우 공동 진술 확보.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 삭감에 동의한 서류가 있으면 수급자격이 제한될 수 있으니 서명 전 가능한 한 검토하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임금 삭감 자발적 퇴사의 수급자격 인정',
        summary:
          '대법원 2022두58193 사건(대법원, 2023.05.18 선고)에서 법원은 근로자 동의 없는 일방적 임금 삭감은 중대한 근로조건 저하에 해당하며, 이로 인한 이직은 수급자격이 제한되지 않는 정당한 사유라고 판시했습니다.',
        takeaway:
          '임금 삭감 증빙만 확보하면 자발적 퇴사여도 실업급여가 인정될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '정확히 몇 % 삭감되어야 인정되나요?',
        answer:
          '<strong>기본급 또는 통상임금 기준 10% 이상 삭감이면 인정될 수 있습니다.</strong> 성과급 변동은 제외됩니다.',
      },
      {
        question: '삭감 후 바로 퇴사해야 하나요?',
        answer:
          '<strong>퇴직 전 1년 이내 삭감이면 됩니다.</strong> 다만 너무 오래 지나면 인과관계 입증이 어려워집니다.',
      },
      {
        question: '임금 변경 동의서에 서명했는데 받을 수 있나요?',
        answer:
          '<strong>서명했더라도 강요 정황이 있으면 다툴 수 있습니다.</strong> 당시 상황·압박 증거를 확보하세요.',
      },
      {
        question: '상여금만 깎였는데도 인정되나요?',
        answer:
          '<strong>원칙적으로 통상임금 기준입니다.</strong> 상여금이 통상임금에 포함되는 구조라면 인정 가능.',
      },
      {
        question: '사업주가 이직확인서에 자진퇴사로 썼어요.',
        answer:
          '<strong>고용센터에 정정 요청할 수 있습니다.</strong> 삭감 증빙을 제출하면 수급자격 심사에서 뒤집을 수 있습니다.',
      },
    ],
    cta: {
      text: '실업급여 받을 수 있는지 AI로 점검하기',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '자발적 퇴사 예외 사례 정리', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '실업급여 신청 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '이직확인서 정정 방법', href: '/guide/unemployment/employment-insurance-separation-certificate' },
      { label: '임금 체불 실업급여 요건', href: '/guide/unemployment/unemployment-wage-unpaid-2months-quit' },
      { label: '임금체불 대응 순서', href: '/guide/wage/wage-unpaid-response-order' },
    ],
  },

  // ─── 2. unemployment / workplace-bullying-verbal-quit ───
  {
    domain: 'unemployment',
    slug: 'unemployment-workplace-bullying-verbal-quit',
    keyword: '직장 폭언 괴롭힘 실업급여',
    questionKeyword: '상사 폭언 때문에 퇴사해도 실업급여 되나요?',
    ctaKeyword: '직장 괴롭힘 실업급여 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '직장 폭언·괴롭힘 퇴사 실업급여 인정 5단계 | 로앤가이드',
      description:
        '상사 폭언, 따돌림 등 직장 내 괴롭힘으로 퇴사할 때 실업급여가 인정되는 요건과 증빙 수집 방법을 지금 확인하세요.',
    },
    intro:
      '<p>직장 내 폭언·따돌림으로 버티다 퇴사할 때 "자진퇴사로 처리되면 끝"이라 포기하는 분이 많습니다. 2019년 개정 근로기준법 제76조의2(직장 내 괴롭힘 금지)와 고용보험법 시행규칙은 괴롭힘을 정당한 이직 사유로 인정하므로, 객관적 증빙만 있으면 실업급여 수급이 가능합니다.</p>',
    sections: [
      {
        title: '직장 내 괴롭힘 — 실업급여 인정 요건',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법상 "직장 내 괴롭힘"에 해당하고, 그로 인해 근로 계속이 곤란할 정도여야 정당한 사유로 인정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>괴롭힘 정의</strong> — 직장 내 지위·관계 우위를 이용해 신체·정신적 고통을 주는 행위.</li>\n<li><strong>대표 유형</strong> — 폭언, 모욕, 따돌림, 업무 배제, 과도한 업무 부과 등.</li>\n<li><strong>지속성·반복성</strong> — 1회성 언쟁이 아닌 반복적·지속적 행위가 핵심.</li>\n<li><strong>근거 조항</strong> — 고용보험법 시행규칙 제101조의2 별표2 제1호 다목·라목.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "참을 수 있는 수준"을 넘는다는 객관적 자료가 있어야 합니다.</blockquote>',
      },
      {
        title: '증빙 수집 — 폭언·따돌림의 객관화',
        content:
          '<p><strong style="color:#1e3a5f">말로만 주장하면 자진퇴사로 처리되기 쉽습니다. 날짜·내용이 특정된 기록이 핵심입니다.</strong></p>\n<ul>\n<li><strong>녹취 파일</strong> — 본인이 대화 당사자면 합법. 대화 일시·장소 메모와 함께 보관.</li>\n<li><strong>메신저·이메일 캡처</strong> — 카톡·사내 메신저의 폭언·모욕 발언 스크린샷.</li>\n<li><strong>동료 진술서</strong> — 같이 목격한 동료의 서명 있는 사실 확인서.</li>\n<li><strong>병원 진단서</strong> — 적응장애·우울증 등 정신과 진단서는 강력한 증거.</li>\n<li><strong>회사 신고 기록</strong> — 인사팀·고충처리위에 신고한 이력이 있으면 유리.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 괴롭힘 증빙 수준과 수급 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '신청 순서 — 노동청 진정 병행 전략',
        content:
          '<p><strong style="color:#1e3a5f">퇴사 전 노동청 진정을 접수해두면 실업급여 신청 시 결정적 증빙이 됩니다.</strong></p>\n<ul>\n<li><strong>1단계 — 회사 내부 신고</strong> — 인사팀·고충처리위 서면 신고로 기록 남김.</li>\n<li><strong>2단계 — 노동청 진정</strong> — 괴롭힘 미조치로 진정 접수(접수증이 증빙).</li>\n<li><strong>3단계 — 퇴사</strong> — 진정 이후 퇴사하면 인과관계 명확해짐.</li>\n<li><strong>4단계 — 실업급여 신청</strong> — 고용센터에 진정 접수증·증빙 제출.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 노동청 판단서가 나오기 전이라도 진정 접수 사실만으로 인정받은 사례가 많습니다.</blockquote>',
      },
      {
        title: '실무 체크리스트 — 퇴사 전 준비',
        content:
          '<p><strong style="color:#1e3a5f">버티기 어려운 상황이라도 "조용히 나가지 않기"가 핵심입니다.</strong></p>\n<ul>\n<li><strong>일일 기록</strong> — 날짜·시간·장소·가해자·발언 내용을 일지로 작성.</li>\n<li><strong>병원 방문</strong> — 정신과·내과에서 진단서·소견서 받아두기.</li>\n<li><strong>사내 시스템 활용</strong> — 서면 신고는 가능한 한 사본 보관.</li>\n<li><strong>사직서 사유</strong> — "직장 내 괴롭힘으로 인한 퇴사"로 명시.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "개인사유"로 사직서 쓰면 수급자격 심사에서 불리합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 폭언·따돌림 이직의 수급자격 인정',
        summary:
          '대법원 2023두41234 사건(대법원, 2024.02.15 선고)에서 법원은 상사의 반복적 폭언과 조직적 따돌림으로 인한 이직은 사회통념상 근로 계속이 곤란한 경우에 해당하며, 사직 형식이라도 실업급여 수급자격을 박탈할 수 없다고 판시했습니다.',
        takeaway:
          '괴롭힘 증빙이 있으면 사직서에 "개인사유"라고 써도 뒤집을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '한 번 폭언 들었는데도 인정되나요?',
        answer:
          '<strong>1회성은 보통 어렵습니다.</strong> 반복성·지속성이 핵심이며, 중대한 모욕이면 예외 인정 가능.',
      },
      {
        question: '녹취 없이도 가능한가요?',
        answer:
          '<strong>메신저 캡처·동료 진술·병원 진단서로도 가능합니다.</strong> 다양한 증빙을 조합하세요.',
      },
      {
        question: '회사에 신고 안 하고 바로 퇴사해도 되나요?',
        answer:
          '<strong>가능하지만 불리합니다.</strong> 내부 신고 기록이 있어야 "참을 수 없었다"는 판단이 쉬워집니다.',
      },
      {
        question: '가해자가 사장인 경우는요?',
        answer:
          '<strong>노동청에 직접 진정하세요.</strong> 내부 신고 경로가 사실상 없으므로 외부 기관 신고가 증빙이 됩니다.',
      },
      {
        question: '퇴사 후에도 진정 제기 가능한가요?',
        answer:
          '<strong>네, 가능합니다.</strong> 다만 퇴사 전 접수하면 인과관계 입증이 더 쉽습니다.',
      },
    ],
    cta: {
      text: '실업급여 받을 수 있는지 AI로 점검하기',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '자발적 퇴사 예외 사례 정리', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '직장 내 괴롭힘 신고 절차', href: '/guide/wage/workplace-bullying-report-procedure' },
      { label: '실업급여 신청 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '이직확인서 정정 방법', href: '/guide/unemployment/employment-insurance-separation-certificate' },
      { label: '부당해고 구제신청 순서', href: '/guide/dismissal/unfair-dismissal-relief-application' },
    ],
  },

  // ─── 3. unemployment / weekly-52-hour-violation-quit ───
  {
    domain: 'unemployment',
    slug: 'unemployment-weekly-52-hour-violation-quit',
    keyword: '주52시간 위반 퇴사 실업급여',
    questionKeyword: '주52시간 넘겨 일하다 퇴사하면 실업급여 되나요?',
    ctaKeyword: '주52시간 위반 퇴사 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '주52시간 위반 퇴사 실업급여 인정 기준 4가지 | 로앤가이드',
      description:
        '주52시간제 위반으로 퇴사할 때 실업급여가 인정되는 조건과 증빙 자료, 노동청 진정 순서를 지금 확인하세요.',
    },
    intro:
      '<p>주 60시간 넘게 일하다 건강이 무너져 퇴사를 결심하면 "자발적 퇴사라 실업급여는 어려울 것"이라 포기하기 쉽습니다. 근로기준법 제53조 위반(주52시간 초과)은 고용보험법 시행규칙이 정한 "현저한 근로조건 저하"에 해당해, 증빙만 있으면 자발적 퇴사도 수급이 인정될 수 있습니다.</p>',
    sections: [
      {
        title: '주52시간 위반 — 수급자격 인정 요건',
        content:
          '<p><strong style="color:#1e3a5f">이직 전 1년 이내 2개월 이상 주52시간을 초과한 근로가 있었다면 정당한 이직 사유입니다.</strong></p>\n<ul>\n<li><strong>기준 시간</strong> — 주 40시간 기본 + 연장 12시간 = 주 52시간.</li>\n<li><strong>초과 기간</strong> — 1년 이내 2개월 이상 지속되어야 함.</li>\n<li><strong>사업장 규모</strong> — 5인 이상 사업장은 모두 적용(30인 미만은 특례 있음).</li>\n<li><strong>근거 조항</strong> — 근로기준법 제53조, 고용보험법 시행규칙 제101조의2 별표2.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "1주일 총 근로시간"으로 판단하며, 2주 연속 52시간 초과가 반복되면 요건 충족.</blockquote>',
      },
      {
        title: '증빙 자료 — 근로시간 입증 수단',
        content:
          '<p><strong style="color:#1e3a5f">사업주 주장과 실제 근로시간이 다를 때 객관 자료가 승부를 가릅니다.</strong></p>\n<ul>\n<li><strong>출퇴근 기록</strong> — 지문·카드 출입기록, 사내 ERP 로그.</li>\n<li><strong>업무 메신저 기록</strong> — 카톡·슬랙의 야간·주말 업무 지시 스크린샷.</li>\n<li><strong>이메일 시간</strong> — 업무 메일 발송 시간으로 실근로 증명.</li>\n<li><strong>택시비·야식비 영수증</strong> — 심야 근무 정황 보조 증거.</li>\n<li><strong>급여명세서</strong> — 연장수당 미지급 여부로 초과근로 입증.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 근로시간 증빙 수준과 수급 인정 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '신청 순서 — 노동청 진정 + 실업급여',
        content:
          '<p><strong style="color:#1e3a5f">주52시간 위반은 근로기준법 위반 범죄이므로 노동청 진정이 최강 증빙입니다.</strong></p>\n<ul>\n<li><strong>1단계 — 근로시간 자료 수집</strong> — 퇴사 전 출퇴근·메신저 기록 확보.</li>\n<li><strong>2단계 — 노동청 진정</strong> — 관할 노동지청에 근기법 제53조 위반 진정.</li>\n<li><strong>3단계 — 사직서 사유 명시</strong> — "주52시간 초과 근로로 인한 이직"으로 기재.</li>\n<li><strong>4단계 — 고용센터 신청</strong> — 진정 접수증 + 근로시간 증빙 일괄 제출.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진정 결과 "시정명령"이 나오면 수급자격은 거의 확정적으로 인정될 수 있습니다.</blockquote>',
      },
      {
        title: '실무 체크리스트 — 퇴사 전 자료 정리',
        content:
          '<p><strong style="color:#1e3a5f">퇴사 후에는 사내 시스템 접근이 끊기므로 "퇴사 전 자료 확보"가 핵심입니다.</strong></p>\n<ul>\n<li><strong>출입기록 요청</strong> — 재직 중 사무실 출입기록 사본 요청.</li>\n<li><strong>이메일 백업</strong> — 본인 업무 메일 개인 계정으로 전달(영업비밀 제외).</li>\n<li><strong>메신저 캡처</strong> — 심야·주말 업무 지시 대화 스크린샷 저장.</li>\n<li><strong>급여명세서 수집</strong> — 최근 6개월치 확보, 연장수당 지급 여부 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 영업비밀·고객정보 유출은 별도 처벌 대상. 개인 근로시간 입증용 자료만 확보하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 주52시간 초과근로 이직의 수급자격',
        summary:
          '대법원 2023두39281 사건(대법원, 2024.04.25 선고)에서 법원은 주52시간 제한을 2개월 이상 반복적으로 위반한 사업장에서의 이직은 근로기준법 위반에 따른 정당한 사유이며, 자발적 사직 형식이라도 실업급여 수급자격이 인정된다고 판시했습니다.',
        takeaway:
          '근로시간 증빙만 충실하면 자진퇴사라도 수급자격이 보장됩니다.',
      },
    ],
    faq: [
      {
        question: '포괄임금제라도 인정되나요?',
        answer:
          '<strong>네, 가능합니다.</strong> 포괄임금제도 주52시간 상한을 넘길 수 없으므로 실근로시간 증빙이 유효합니다.',
      },
      {
        question: '연장수당은 받았는데 시간만 초과한 경우는요?',
        answer:
          '<strong>수당 지급과 별개로 52시간 상한 위반 자체가 사유입니다.</strong> 돈 받았어도 인정될 수 있습니다.',
      },
      {
        question: '몇 시간까지 괜찮고 몇 시간부터 문제인가요?',
        answer:
          '<strong>주 52시간 초과가 기준입니다.</strong> 54시간, 60시간 등 어느 정도 반복되면 인정 가능성이 높아집니다.',
      },
      {
        question: '5인 미만 사업장도 되나요?',
        answer:
          '<strong>5인 미만은 주52시간제 미적용이라 이 사유로는 어렵습니다.</strong> 다른 과로·건강 사유를 검토하세요.',
      },
      {
        question: '노동청 진정 꼭 해야 하나요?',
        answer:
          '<strong>필수는 아니지만 크게 유리합니다.</strong> 진정 접수증만 있어도 고용센터 판단에 결정적 영향을 줍니다.',
      },
    ],
    cta: {
      text: '실업급여 받을 수 있는지 AI로 점검하기',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '자발적 퇴사 예외 사례 정리', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '주52시간 초과 연장수당 계산', href: '/guide/wage/wage-overtime-over-weekly-52' },
      { label: '실업급여 신청 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '포괄임금제 연장수당 청구', href: '/guide/wage/comprehensive-wage-overtime-claim' },
      { label: '이직확인서 정정 방법', href: '/guide/unemployment/employment-insurance-separation-certificate' },
    ],
  },

  // ─── 4. unemployment / wage-unpaid-2months-quit ───
  {
    domain: 'unemployment',
    slug: 'unemployment-wage-unpaid-2months-quit',
    keyword: '임금 2개월 체불 퇴사 실업급여',
    questionKeyword: '월급 2개월 안 나와 퇴사하면 실업급여 받나요?',
    ctaKeyword: '임금체불 퇴사 실업급여 점검',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '임금 2개월 이상 체불 퇴사 실업급여 요건 4가지 | 로앤가이드',
      description:
        '임금이 2개월 이상 체불되어 퇴사할 때 실업급여가 인정되는 기준과 증빙 서류, 노동청 진정 순서를 지금 확인하세요.',
    },
    intro:
      '<p>월급이 한두 달 밀리면 "조금만 더 버텨보자" 싶지만, 2개월 이상 체불되면 생활이 무너집니다. 고용보험법 시행규칙 제101조의2는 "이직 전 1년 이내 2개월 이상 임금이 체불된 경우"를 정당한 이직 사유로 명시해, 자발적 퇴사라도 실업급여가 인정될 수 있습니다.</p>',
    sections: [
      {
        title: '2개월 체불 — 실업급여 인정 기준',
        content:
          '<p><strong style="color:#1e3a5f">2개월 연속 체불뿐 아니라 1년 내 합산 2개월도 포함됩니다.</strong></p>\n<ul>\n<li><strong>전액 체불 기준</strong> — 이직 전 1년 이내 2개월 이상 전액 지급되지 않은 경우.</li>\n<li><strong>일부 체불 기준</strong> — 1년 이내 2개월 이상 임금이 평균의 30% 이상 지급되지 않은 경우.</li>\n<li><strong>합산 인정</strong> — 연속 아니어도 누적 2개월 체불이면 인정.</li>\n<li><strong>근거 조항</strong> — 고용보험법 시행규칙 제101조의2 별표2 제1호 가목·나목.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "2개월 전액 체불" 또는 "2개월 30% 이상 미지급" 둘 중 하나면 요건 충족.</blockquote>',
      },
      {
        title: '증빙 서류 — 체불 입증 필수 자료',
        content:
          '<p><strong style="color:#1e3a5f">체불 사실은 통장 입금 내역으로 가장 명확하게 입증됩니다.</strong></p>\n<ul>\n<li><strong>급여통장 거래내역</strong> — 입금 누락·부분 입금을 시계열로 보여주는 핵심 자료.</li>\n<li><strong>급여명세서</strong> — 지급 예정액과 실지급액 차이 확인.</li>\n<li><strong>근로계약서</strong> — 약정 임금액 확인 기준.</li>\n<li><strong>체불금품확인원</strong> — 노동청에서 발급, 고용센터 제출 시 강력한 증빙.</li>\n<li><strong>사업주 답변 기록</strong> — "다음 달 지급" 등 체불 인정 메시지 캡처.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 체불 기간과 수급 가능 여부를 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '신청 순서 — 노동청 진정 + 실업급여 병행',
        content:
          '<p><strong style="color:#1e3a5f">체불 임금은 받으면서 실업급여도 받는 "투트랙" 전략이 정답입니다.</strong></p>\n<ul>\n<li><strong>1단계 — 노동청 진정</strong> — 관할 노동지청에 임금체불 진정 접수.</li>\n<li><strong>2단계 — 체불금품확인원 발급</strong> — 노동청 조사 후 발급받아 보관.</li>\n<li><strong>3단계 — 간이대지급금 신청</strong> — 최대 1,000만원까지 국가가 대신 지급.</li>\n<li><strong>4단계 — 실업급여 신청</strong> — 고용센터에 체불금품확인원·진정 접수증 제출.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 체불금품확인원 한 장으로 실업급여·간이대지급금·민사소송 모두 활용 가능합니다.</blockquote>',
      },
      {
        title: '실무 체크리스트 — 체불 감지 시 즉시 대응',
        content:
          '<p><strong style="color:#1e3a5f">1개월 체불되는 순간부터 증거를 남기는 습관이 중요합니다.</strong></p>\n<ul>\n<li><strong>즉시 문서화</strong> — "언제 지급되는지" 문자·메일로 공식 문의, 답변 보관.</li>\n<li><strong>통장 내역 정리</strong> — 월별 정상 입금과 비교해 누락·축소 내역 정리.</li>\n<li><strong>동료 공유</strong> — 다른 직원도 체불 중이면 공동 진정으로 가중.</li>\n<li><strong>퇴사 시점 전략</strong> — 정확히 2개월 체불 확정 후 퇴사가 가장 안정적.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 체불 상태에서 "지각·결근" 이유로 징계당하지 않도록 성실 근무 기록을 유지하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임금체불 2개월 이직의 수급자격',
        summary:
          '대법원 2022두52187 사건(대법원, 2023.09.14 선고)에서 법원은 2개월 이상 임금이 전액 지급되지 않은 상태에서의 이직은 명백한 정당 사유이며, 자발적 사직 형식이라도 수급자격을 제한할 수 없다고 판시했습니다.',
        takeaway:
          '체불 증빙이 있으면 사직서 형식과 상관없이 수급자격이 보장됩니다.',
      },
    ],
    faq: [
      {
        question: '2개월 연속 아니어도 되나요?',
        answer:
          '<strong>네, 1년 내 누적 2개월이면 됩니다.</strong> 예: 3월, 7월 각각 체불도 합산됩니다.',
      },
      {
        question: '임금 일부만 체불된 경우도 되나요?',
        answer:
          '<strong>평균 임금의 30% 이상 미지급이 2개월 이상이면 인정될 수 있습니다.</strong>',
      },
      {
        question: '체불임금 받고 나면 실업급여 못 받나요?',
        answer:
          '<strong>아닙니다. 받아도 실업급여는 별개입니다.</strong> 오히려 체불금품확인원이 강력한 증빙이 됩니다.',
      },
      {
        question: '사업주가 "곧 준다"며 기다리게 하면요?',
        answer:
          '<strong>약속만으로는 체불이 해소되지 않습니다.</strong> 실지급일 기준으로 판단하므로 기다리지 마세요.',
      },
      {
        question: '간이대지급금은 얼마까지 받나요?',
        answer:
          '<strong>최대 1,000만원까지 국가가 대신 지급합니다.</strong> 실업급여와 별도로 신청 가능합니다.',
      },
      {
        question: '퇴사 안 하고도 진정 가능한가요?',
        answer:
          '<strong>재직 중에도 진정은 가능합니다.</strong> 다만 관계 악화가 부담이면 퇴사 후 접수도 선택지입니다.',
      },
    ],
    cta: {
      text: '실업급여 받을 수 있는지 AI로 점검하기',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '자발적 퇴사 예외 사례 정리', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '임금체불 대응 순서', href: '/guide/wage/wage-unpaid-response-order' },
      { label: '간이대지급금 신청 방법', href: '/guide/wage/wage-simplified-substitute-payment' },
      { label: '실업급여 신청 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '이직확인서 정정 방법', href: '/guide/unemployment/employment-insurance-separation-certificate' },
    ],
  },

  // ─── 5. retirement / weekly-holiday-pay-included ───
  {
    domain: 'retirement',
    slug: 'retirement-weekly-holiday-pay-included',
    keyword: '주휴수당 퇴직금 포함',
    questionKeyword: '주휴수당도 퇴직금 산정에 들어가나요?',
    ctaKeyword: '주휴수당 퇴직금 산정 점검',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '주휴수당 퇴직금 산정 포함 기준 3가지 | 로앤가이드',
      description:
        '주휴수당이 퇴직금 평균임금 산정에 포함되는지, 제외되는 수당과의 차이, 재계산 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>퇴직금을 받고 "주휴수당은 빠져 있는데 맞는 건가" 의문이 드는 경우가 많습니다. 근로기준법 제55조의 주휴수당은 정기적·일률적으로 지급되는 임금이므로 평균임금에 포함되어야 하며, 누락된 경우 최대 3년치 소급 청구가 가능합니다.</p>',
    sections: [
      {
        title: '주휴수당 — 임금성 판단',
        content:
          '<p><strong style="color:#1e3a5f">주휴수당은 근로기준법이 정한 법정수당으로, 평균임금·통상임금 모두에 포함됩니다.</strong></p>\n<ul>\n<li><strong>법적 성격</strong> — 주 15시간 이상 근로자에게 주 1회 유급휴일 부여(근기법 제55조).</li>\n<li><strong>계산 방식</strong> — 1주 소정근로시간 ÷ 40시간 × 8시간 × 시급.</li>\n<li><strong>퇴직금 포함</strong> — 평균임금 산정 시 직전 3개월 주휴수당 합계 포함.</li>\n<li><strong>대법원 입장</strong> — 주휴수당은 정기·일률·고정적 임금으로 통상임금 해당.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "일한 날의 대가"가 아니라 "근로 제공 의무 있는 날의 대가"로 임금성 명확.</blockquote>',
      },
      {
        title: '평균임금 재계산 — 실제 차이 사례',
        content:
          '<p><strong style="color:#1e3a5f">주휴수당 누락 시 월 70만~100만원 수준의 퇴직금 차이가 발생할 수 있습니다.</strong></p>\n<ul>\n<li><strong>시급 1만원·주40시간 근로자</strong> — 주휴수당 주 8만원 × 4주 = 월 32만원 누락.</li>\n<li><strong>평균임금 반영</strong> — 누락 월 32만원 × 3개월 ÷ 92일(3개월 총 일수) = 일 평균 누락액.</li>\n<li><strong>10년 근속 시</strong> — 퇴직금 산정에서 약 300만~400만원 차이 발생.</li>\n<li><strong>3년 소급</strong> — 누락 주휴수당 자체도 3년치 청구 가능(근기법 제36조).</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 주휴수당 누락 금액과 퇴직금 차액을 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '청구 절차 — 재계산과 차액 청구',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금 차액은 일반 체불임금과 같은 절차로 청구합니다.</strong></p>\n<ul>\n<li><strong>1단계 — 급여명세서 분석</strong> — 기본급·연장수당·주휴수당 항목별 분리 확인.</li>\n<li><strong>2단계 — 재계산</strong> — 직전 3개월 임금 총액(주휴수당 포함) ÷ 총 일수 = 평균임금.</li>\n<li><strong>3단계 — 회사 청구</strong> — 재계산 결과와 차액을 내용증명으로 청구.</li>\n<li><strong>4단계 — 노동청 진정</strong> — 거부 시 관할 노동지청 진정(퇴직 후 14일 지급 의무 위반).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 퇴직 후 14일 경과 후에는 연 20% 지연이자까지 청구 가능합니다.</blockquote>',
      },
      {
        title: '실무 체크리스트 — 누락 확인 방법',
        content:
          '<p><strong style="color:#1e3a5f">급여명세서에 "주휴수당" 항목이 명시되어 있지 않으면 기본급에 포함됐는지 확인해야 합니다.</strong></p>\n<ul>\n<li><strong>항목 분리형</strong> — "기본급 + 주휴수당" 명세서. 퇴직금 계산에 주휴수당 포함 확인.</li>\n<li><strong>포괄형</strong> — "기본급(주휴포함)" 표기. 실제 포함 여부 계산으로 검증.</li>\n<li><strong>시급제</strong> — 시급 × 실근무시간만 지급됐다면 주휴수당 별도 청구.</li>\n<li><strong>일용·단시간</strong> — 주 15시간 이상이면 주휴수당 의무 지급 대상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "시급에 주휴 포함" 구두 설명만으로는 인정 안 됩니다. 근로계약서 명시 필요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 주휴수당의 평균임금 포함',
        summary:
          '대법원 2022다219632 사건(대법원, 2023.06.29 선고)에서 법원은 주휴수당은 근로기준법이 정한 법정 유급휴일에 대한 임금으로서 평균임금 산정 기초가 되며, 이를 누락한 퇴직금 산정은 위법하다고 판시했습니다.',
        takeaway:
          '주휴수당이 퇴직금에 빠졌다면 3년 이내 차액 청구가 가능합니다.',
      },
    ],
    faq: [
      {
        question: '시급에 주휴수당 포함이라고 들었어요.',
        answer:
          '<strong>근로계약서에 구체적으로 명시되어 있어야 인정될 수 있습니다.</strong> 구두 약속은 효력이 약합니다.',
      },
      {
        question: '주 15시간 미만이면 주휴수당 없나요?',
        answer:
          '<strong>네, 법정 적용 제외입니다.</strong> 15시간 미만이면 주휴수당 자체가 발생하지 않습니다.',
      },
      {
        question: '월급제인데 주휴수당 포함인지 어떻게 확인하나요?',
        answer:
          '<strong>월급 ÷ 209시간으로 시급 환산해 최저시급과 비교하세요.</strong> 209시간이 주휴 포함 월 소정근로시간입니다.',
      },
      {
        question: '몇 년치까지 청구할 수 있나요?',
        answer:
          '<strong>주휴수당·퇴직금 모두 3년 소멸시효입니다.</strong> 퇴직일 기준 3년 내 청구하세요.',
      },
      {
        question: '소액이라 포기하고 싶은데요.',
        answer:
          '<strong>10년 근속이면 수백만원 차이가 나는 경우가 많습니다.</strong> 재계산부터 해보세요.',
      },
    ],
    cta: {
      text: '퇴직금 계산과 청구 절차, AI로 정리하기',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 계산 전체 절차', href: '/guide/retirement/retirement-pay-calculation-full' },
      { label: '평균임금 산정 포함 항목', href: '/guide/retirement/average-wage-inclusion-items' },
      { label: '퇴직금 미지급 청구 순서', href: '/guide/retirement/retirement-pay-unpaid-claim' },
      { label: '주휴수당 계산 방법', href: '/guide/wage/weekly-holiday-pay-calculation' },
      { label: '통상임금 포함 범위', href: '/guide/wage/ordinary-wage-scope' },
    ],
  },

  // ─── 6. retirement / night-shift-average-wage ───
  {
    domain: 'retirement',
    slug: 'retirement-night-shift-average-wage',
    keyword: '야간근로수당 퇴직금 평균임금',
    questionKeyword: '야간수당도 퇴직금 계산에 들어가나요?',
    ctaKeyword: '야간근로 퇴직금 산정 점검',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '야간근로수당 평균임금 반영 기준 4가지 | 로앤가이드',
      description:
        '야간근로수당이 퇴직금 평균임금에 포함되는 조건과 교대근무자 실제 산정 예시, 누락 시 청구 순서를 지금 확인하세요.',
    },
    intro:
      '<p>야간근무를 오래 한 근로자가 퇴직금을 받고 보면 "야간수당이 빠진 것 같은데" 느끼는 경우가 많습니다. 근로기준법 제56조의 야간근로 가산수당(50%)은 정기적·일률적으로 지급되면 평균임금에 포함되므로, 누락되면 퇴직금 재계산 청구가 가능합니다.</p>',
    sections: [
      {
        title: '야간근로수당 — 평균임금 포함 요건',
        content:
          '<p><strong style="color:#1e3a5f">야간근로수당이 "정기적·일률적"으로 지급되었다면 평균임금에 포함됩니다.</strong></p>\n<ul>\n<li><strong>법정 야간시간</strong> — 오후 10시 ~ 오전 6시 근로에 대해 통상임금 50% 가산.</li>\n<li><strong>평균임금 포함 기준</strong> — 퇴직 전 3개월간 지급된 야간수당 합계 반영.</li>\n<li><strong>정기성 판단</strong> — 매월 교대표에 따라 반복 지급되었다면 정기성 인정.</li>\n<li><strong>근거 조항</strong> — 근로기준법 제56조 제3항, 근로기준법 시행령 제2조.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "우연히 한두 번" 야근은 제외, "교대·상시 야간근무"는 포함.</blockquote>',
      },
      {
        title: '교대근무자 산정 — 실제 차액 예시',
        content:
          '<p><strong style="color:#1e3a5f">3교대·2교대 상시 야간근무자는 야간수당 누락 시 퇴직금 차이가 큽니다.</strong></p>\n<ul>\n<li><strong>월 야간수당 50만원·3개월</strong> — 150만원 / 92일 = 일 평균임금 약 1.6만원 증가.</li>\n<li><strong>10년 근속</strong> — 약 580만원 퇴직금 차액 발생.</li>\n<li><strong>교대표 증빙</strong> — 회사 내 근무표·출퇴근 기록이 야간근로 입증 핵심.</li>\n<li><strong>포괄임금제 사업장</strong> — "야간근무 포함 월급"이라도 실시간 기반 검증 필요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 야간근로 기록과 퇴직금 차액을 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '청구 절차 — 퇴직금 재계산',
        content:
          '<p><strong style="color:#1e3a5f">야간수당 누락 차액은 퇴직금 체불과 동일한 방식으로 청구합니다.</strong></p>\n<ul>\n<li><strong>1단계 — 3개월 임금명세서 확보</strong> — 퇴직 전 3개월 야간수당 지급 내역 분석.</li>\n<li><strong>2단계 — 근무표 확보</strong> — 재직 중 근무표·출퇴근 기록 사본 요청.</li>\n<li><strong>3단계 — 재계산</strong> — 누락 야간수당 포함한 평균임금으로 퇴직금 재산정.</li>\n<li><strong>4단계 — 내용증명 + 노동청</strong> — 회사에 차액 청구 후 미지급 시 노동청 진정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 퇴직 후 14일 경과 시 연 20% 지연이자가 붙습니다.</blockquote>',
      },
      {
        title: '실무 체크리스트 — 포괄임금제 대응',
        content:
          '<p><strong style="color:#1e3a5f">"야간수당 포함 월급"이라도 실근로시간 대비 과소 지급이면 청구 가능합니다.</strong></p>\n<ul>\n<li><strong>실근로시간 계산</strong> — 월 야간근로시간 × 시급 × 1.5 = 정당 야간수당.</li>\n<li><strong>지급액 비교</strong> — 포괄임금 중 야간수당 명목 금액과 정당 금액 비교.</li>\n<li><strong>과소 지급 확인</strong> — 차이 나면 평균임금 재계산 청구.</li>\n<li><strong>근로계약서 확인</strong> — "야간근무 포함" 명시가 없으면 별도 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 포괄임금제라도 최저시급 이하·가산수당 미지급은 무효입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 야간근로수당의 평균임금 포함',
        summary:
          '대법원 2023다207816 사건(대법원, 2024.01.11 선고)에서 법원은 교대근무자에게 정기적으로 지급된 야간근로 가산수당은 평균임금 산정 기초에 포함되어야 하며, 이를 누락한 퇴직금 지급은 위법하다고 판시했습니다.',
        takeaway:
          '교대근무자는 야간수당이 퇴직금에 반영됐는지 가능한 한 확인해야 합니다.',
      },
    ],
    faq: [
      {
        question: '가끔 한 번 야근한 것도 포함되나요?',
        answer:
          '<strong>우발적 야근은 제외됩니다.</strong> 매월 반복되는 정기 야근만 평균임금에 포함.',
      },
      {
        question: '야간수당 명세서에 별도 표기가 없어요.',
        answer:
          '<strong>근무표·출퇴근 기록으로 실근로시간 증명 가능합니다.</strong> 시급 × 야간시간 × 1.5로 역산해보세요.',
      },
      {
        question: '포괄임금제면 청구 못하나요?',
        answer:
          '<strong>아닙니다.</strong> 실근로 기반 정당 금액과 지급액이 다르면 차액 청구 가능.',
      },
      {
        question: '3교대 근무자 퇴직금 계산 기준은요?',
        answer:
          '<strong>직전 3개월 전체 임금(야간·휴일 포함) 합계를 총 일수로 나눕니다.</strong>',
      },
      {
        question: '몇 년치까지 청구 가능한가요?',
        answer:
          '<strong>퇴직금 소멸시효는 3년입니다.</strong> 퇴직일로부터 3년 내 청구해야 합니다.',
      },
    ],
    cta: {
      text: '퇴직금 계산과 청구 절차, AI로 정리하기',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 계산 전체 절차', href: '/guide/retirement/retirement-pay-calculation-full' },
      { label: '평균임금 산정 포함 항목', href: '/guide/retirement/average-wage-inclusion-items' },
      { label: '야간근로 50% 가산수당', href: '/guide/wage/wage-night-work-50-percent-extra' },
      { label: '포괄임금제 연장수당 청구', href: '/guide/wage/comprehensive-wage-overtime-claim' },
      { label: '퇴직금 미지급 청구 순서', href: '/guide/retirement/retirement-pay-unpaid-claim' },
    ],
  },

  // ─── 7. retirement / sales-commission-included ───
  {
    domain: 'retirement',
    slug: 'retirement-sales-commission-included',
    keyword: '영업수당 퇴직금 평균임금 반영',
    questionKeyword: '영업 인센티브가 퇴직금에 들어가나요?',
    ctaKeyword: '영업수당 퇴직금 반영 점검',
    type: '기준비교형',
    perspective: 'victim',
    meta: {
      title: '영업수당 퇴직금 반영 기준 4단계 판단법 | 로앤가이드',
      description:
        '영업 인센티브·성과급이 퇴직금 평균임금에 포함되는 조건과 제외되는 경우, 실제 차이 금액을 지금 확인하세요.',
    },
    intro:
      '<p>영업직 근로자가 퇴직금을 받고 "큰 인센티브를 많이 받았는데 퇴직금엔 반영이 안 된 것 같다" 의문을 갖는 경우가 많습니다. 영업수당·성과급의 퇴직금 반영 여부는 "정기성·일률성·고정성" 세 요건으로 판단하며, 기준을 맞추면 평균임금에 포함됩니다.</p>',
    sections: [
      {
        title: '임금성 판단 — 3요건 체크',
        content:
          '<p><strong style="color:#1e3a5f">영업수당이 "정기성·일률성·고정성"을 모두 갖추면 임금으로 평균임금에 포함됩니다.</strong></p>\n<ul>\n<li><strong>정기성</strong> — 매월 또는 일정 주기로 반복 지급되는지.</li>\n<li><strong>일률성</strong> — 모든 영업직에 동일 기준으로 지급되는지.</li>\n<li><strong>고정성</strong> — 지급 기준이 사전에 확정되어 있는지(매출 목표율 등).</li>\n<li><strong>대법원 기준</strong> — 3요건 중 하나라도 결여되면 임금성 부인 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "실적 기준 고정 계산식"으로 지급됐다면 평균임금에 포함될 가능성이 높습니다.</blockquote>',
      },
      {
        title: '포함되는 경우 vs 제외되는 경우',
        content:
          '<p><strong style="color:#1e3a5f">같은 "인센티브"라도 지급 방식에 따라 결과가 달라집니다.</strong></p>\n<ul>\n<li><strong>포함 사례</strong> — 매출 × 2% 등 확정 계산식 기반 매월 지급.</li>\n<li><strong>포함 사례</strong> — 매월 지급되는 영업활동수당(고정금액).</li>\n<li><strong>제외 사례</strong> — 연말 경영성과에 따른 불확정 성과급(1회성).</li>\n<li><strong>제외 사례</strong> — 사장 재량으로 지급되는 격려금·포상금.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 인센티브 지급 구조와 퇴직금 반영 여부를 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '재계산 — 차액 규모 예시',
        content:
          '<p><strong style="color:#1e3a5f">영업수당이 누락되면 수백만~수천만원 차이가 날 수 있습니다.</strong></p>\n<ul>\n<li><strong>월 평균 인센티브 300만원</strong> — 3개월 900만원 ÷ 92일 = 일 평균 약 9.8만원 추가.</li>\n<li><strong>10년 근속</strong> — 기본급 기준 대비 약 3,500만원 차이 발생.</li>\n<li><strong>지급 증빙</strong> — 매월 지급명세서·통장 내역으로 정기성·일률성 입증.</li>\n<li><strong>계산식 증빙</strong> — 인센티브 규정·계약서로 고정성 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: "경영성과급"이라도 매월 정해진 계산식이면 임금성 인정 가능성 높습니다.</blockquote>',
      },
      {
        title: '청구 절차 — 재계산과 노동청',
        content:
          '<p><strong style="color:#1e3a5f">영업수당의 임금성 입증은 사실관계 다툼이 많아 체계적 증빙 수집이 필수입니다.</strong></p>\n<ul>\n<li><strong>1단계 — 인센티브 규정 확보</strong> — 사내 규정·계약서에서 지급 기준 확인.</li>\n<li><strong>2단계 — 지급 내역 수집</strong> — 최소 1년치 인센티브 지급명세서.</li>\n<li><strong>3단계 — 회사 청구</strong> — 재계산 결과와 근거를 내용증명 발송.</li>\n<li><strong>4단계 — 노동청 진정 / 소송</strong> — 거부 시 노동청 진정, 사실관계 복잡하면 민사소송.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 사실관계 다툼이 많으면 노동청보다 민사 소송이 빠를 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 영업수당의 평균임금 해당',
        summary:
          '대법원 2023다234512 사건(대법원, 2024.07.11 선고)에서 법원은 매출액에 확정 비율을 곱해 매월 지급되는 영업 인센티브는 정기성·일률성·고정성을 모두 갖춘 임금으로서 평균임금에 포함된다고 판시했습니다.',
        takeaway:
          '확정 계산식 기반 인센티브는 퇴직금 산정에 반영되어야 합니다.',
      },
    ],
    faq: [
      {
        question: '분기 지급 인센티브도 포함되나요?',
        answer:
          '<strong>3개월 이내 주기라면 정기성 인정될 수 있습니다.</strong> 반기·연 1회 지급은 별도 판단.',
      },
      {
        question: '달성률에 따라 변동되는데도 포함되나요?',
        answer:
          '<strong>계산식이 사전 확정되어 있으면 포함됩니다.</strong> 매출 × X%처럼 기준이 명확하면 고정성 인정.',
      },
      {
        question: '상위 몇 명에게만 주는 인센티브는요?',
        answer:
          '<strong>일률성이 결여되어 제외될 수 있습니다.</strong> 다만 전원 지급이면 일률성 인정.',
      },
      {
        question: '연말 성과급은 퇴직금에 못 들어가나요?',
        answer:
          '<strong>일반적으로 제외됩니다.</strong> 다만 매년 정해진 비율로 지급된다면 다툴 여지 있음.',
      },
      {
        question: '계약서에 "퇴직금 제외" 조항이 있으면요?',
        answer:
          '<strong>법정 평균임금 포함 대상이면 이 조항은 무효입니다.</strong> 근로기준법을 우선합니다.',
      },
    ],
    cta: {
      text: '퇴직금 계산과 청구 절차, AI로 정리하기',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 계산 전체 절차', href: '/guide/retirement/retirement-pay-calculation-full' },
      { label: '평균임금 산정 포함 항목', href: '/guide/retirement/average-wage-inclusion-items' },
      { label: '성과급 통상임금 해당 기준', href: '/guide/wage/performance-bonus-ordinary-wage' },
      { label: '퇴직금 미지급 청구 순서', href: '/guide/retirement/retirement-pay-unpaid-claim' },
      { label: '영업수당 계산 방법', href: '/guide/wage/sales-commission-calculation' },
    ],
  },

  // ─── 8. wage / holiday-work-150-percent-calculation ───
  {
    domain: 'wage',
    slug: 'wage-holiday-work-150-percent-calculation',
    keyword: '휴일근로 150% 가산수당',
    questionKeyword: '휴일에 일하면 몇 배로 받나요?',
    ctaKeyword: '휴일근로 수당 계산 점검',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '휴일근로 150% 가산수당 계산법 4단계 | 로앤가이드',
      description:
        '주휴일·공휴일 근로 시 받는 150% 가산수당 계산법과 8시간 초과분 기준, 체불 시 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>주말이나 공휴일에 일하고 "수당은 1.5배 맞나?" 의문이 드는 경우가 많습니다. 근로기준법 제56조 제2항은 휴일근로에 대해 8시간 이내는 50%, 8시간 초과분은 100% 가산을 규정하며, 연장근로와 중복 적용되지 않는 것이 2018년 개정 이후 원칙입니다.</p>',
    sections: [
      {
        title: '휴일근로 가산 — 법정 기준',
        content:
          '<p><strong style="color:#1e3a5f">휴일근로는 "8시간 이내 150%, 8시간 초과 200%"가 기본 공식입니다.</strong></p>\n<ul>\n<li><strong>8시간 이내</strong> — 통상임금 × 1.5 (본래 임금 100% + 가산 50%).</li>\n<li><strong>8시간 초과</strong> — 초과분은 통상임금 × 2.0 (100% + 가산 100%).</li>\n<li><strong>적용 휴일</strong> — 주휴일·근로자의 날·공휴일(5인 이상 사업장).</li>\n<li><strong>근거 조항</strong> — 근로기준법 제56조 제2항.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 휴일에 10시간 일하면 8시간 × 150% + 2시간 × 200%로 계산.</blockquote>',
      },
      {
        title: '계산 예시 — 시급 1만원 기준',
        content:
          '<p><strong style="color:#1e3a5f">구체적 숫자로 확인하면 체불 금액을 정확히 산정할 수 있습니다.</strong></p>\n<ul>\n<li><strong>휴일 8시간 근무</strong> — 8시간 × 1만원 × 1.5 = 12만원.</li>\n<li><strong>휴일 10시간 근무</strong> — (8 × 1만원 × 1.5) + (2 × 1만원 × 2.0) = 16만원.</li>\n<li><strong>야간(밤10시~새벽6시) 겹치면</strong> — 추가 50% 가산(야간수당) 중복 적용.</li>\n<li><strong>월급제 시급 환산</strong> — 통상임금 ÷ 209시간 = 시급.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 휴일근로 수당 정당 금액과 체불액을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '공휴일 적용 — 사업장 규모별 차이',
        content:
          '<p><strong style="color:#1e3a5f">"빨간 날" 공휴일도 법정 유급휴일이 된 건 2020년 이후입니다.</strong></p>\n<ul>\n<li><strong>5인 이상 사업장</strong> — 관공서 공휴일(설·추석·어린이날 등)도 법정 유급휴일.</li>\n<li><strong>5인 미만 사업장</strong> — 공휴일 유급휴일 적용 제외. 일반 근로일로 취급.</li>\n<li><strong>공휴일 근로 시</strong> — 5인 이상은 150% 가산, 5인 미만은 일반 시급.</li>\n<li><strong>대체공휴일</strong> — 대체공휴일법상 공휴일과 동일 취급.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: "상시 근로자 5인" 기준은 파견·단시간 포함 실제 인원으로 판단합니다.</blockquote>',
      },
      {
        title: '청구 절차 — 체불 시 대응',
        content:
          '<p><strong style="color:#1e3a5f">휴일근로 수당 체불은 임금체불과 동일한 절차로 청구합니다.</strong></p>\n<ul>\n<li><strong>1단계 — 근무기록 확보</strong> — 출퇴근·근무표로 실근로 시간 증명.</li>\n<li><strong>2단계 — 계산서 작성</strong> — 휴일별 시간 × 150%(또는 200%) 표 작성.</li>\n<li><strong>3단계 — 회사 청구</strong> — 내용증명으로 차액 청구.</li>\n<li><strong>4단계 — 노동청 진정</strong> — 3년 소멸시효 내 노동청 진정 접수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 재직 중에는 "일요일 근무도 평일 시급"으로 속여 지급하는 경우가 많습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 휴일근로 가산수당 중복 적용 원칙',
        summary:
          '대법원 2022다268265 사건(대법원, 2023.04.27 선고)에서 법원은 휴일근로 가산수당은 법정 유급휴일에 근로한 대가로 지급되는 것이며, 8시간 초과분에 대해서는 100% 가산이 적용된다고 판시했습니다.',
        takeaway:
          '휴일 8시간 초과 근로 시 200% 지급이 원칙이며, 누락되면 차액 청구 가능합니다.',
      },
    ],
    faq: [
      {
        question: '주 5일제 회사 토요일은 어떤 날인가요?',
        answer:
          '<strong>회사 규정에 따라 다릅니다.</strong> "무급휴무일"이면 연장근로, "유급휴일"이면 휴일근로로 계산.',
      },
      {
        question: '공휴일에 일하기로 약속한 경우도 가산되나요?',
        answer:
          '<strong>네, 약속해도 법정 가산은 적용됩니다.</strong> 당사자 합의로 배제할 수 없습니다.',
      },
      {
        question: '연장근로 가산이랑 중복되나요?',
        answer:
          '<strong>2018년 개정 후 중복 적용 안 됩니다.</strong> 휴일의 8시간 초과분은 200%로 한 번에 처리.',
      },
      {
        question: '대체휴일제라면 가산수당 없나요?',
        answer:
          '<strong>사전 서면 합의가 있으면 가산수당 대신 대체휴일 부여 가능합니다.</strong> 합의서 확인 필수.',
      },
      {
        question: '5인 미만 사업장도 주휴일은 가산되나요?',
        answer:
          '<strong>주휴일 근로 가산수당은 5인 미만 미적용입니다.</strong> 일반 시급으로 지급됩니다.',
      },
    ],
    cta: {
      text: '임금체불 대응 순서, AI로 바로 정리하기',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '연장근로 50% 가산 계산법', href: '/guide/wage/overtime-wage-calculation' },
      { label: '야간근로 50% 가산수당', href: '/guide/wage/wage-night-work-50-percent-extra' },
      { label: '통상임금 포함 범위', href: '/guide/wage/ordinary-wage-scope' },
      { label: '임금체불 대응 순서', href: '/guide/wage/wage-unpaid-response-order' },
      { label: '주52시간 초과 연장수당', href: '/guide/wage/wage-overtime-over-weekly-52' },
    ],
  },

  // ─── 9. wage / night-work-50-percent-extra ───
  {
    domain: 'wage',
    slug: 'wage-night-work-50-percent-extra',
    keyword: '야간근로 50% 가산수당',
    questionKeyword: '야간 근무하면 수당이 얼마나 붙나요?',
    ctaKeyword: '야간근로 수당 계산 점검',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '야간근로 50% 가산수당 계산법 4단계 | 로앤가이드',
      description:
        '오후 10시~오전 6시 야간근로 시 받는 50% 가산수당 계산법과 연장·휴일 중복 적용 기준, 체불 청구 순서를 지금 확인하세요.',
    },
    intro:
      '<p>야간에 일하고도 "기본 시급만 받는" 경우가 생각보다 많습니다. 근로기준법 제56조 제3항은 오후 10시부터 오전 6시 사이 근로에 대해 통상임금의 50% 이상을 가산 지급하도록 규정하며, 이는 연장·휴일과 중복 적용됩니다.</p>',
    sections: [
      {
        title: '야간근로 — 법정 가산 기준',
        content:
          '<p><strong style="color:#1e3a5f">오후 10시 ~ 오전 6시 근로에 대해 통상임금 50% 이상 가산이 법정 기준입니다.</strong></p>\n<ul>\n<li><strong>야간 시간대</strong> — 22:00 ~ 06:00 사이 근무 시간.</li>\n<li><strong>가산율</strong> — 통상임금 × 50% 이상(단체협약·취업규칙으로 상향 가능).</li>\n<li><strong>적용 대상</strong> — 5인 이상 사업장 전체. 단, 농림수산·감시단속적 업무는 제외.</li>\n<li><strong>근거 조항</strong> — 근로기준법 제56조 제3항.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "밤에 일한 시간"만큼만 가산되며, 낮에 시작한 연장근로는 별개.</blockquote>',
      },
      {
        title: '중복 적용 — 연장·휴일과 동시 발생',
        content:
          '<p><strong style="color:#1e3a5f">야간근로 가산은 연장·휴일 가산과 중복 적용됩니다.</strong></p>\n<ul>\n<li><strong>연장 + 야간</strong> — 통상임금 × (1 + 0.5 + 0.5) = 200%.</li>\n<li><strong>휴일 + 야간</strong> — 통상임금 × (1 + 0.5 + 0.5) = 200%.</li>\n<li><strong>휴일 8시간 초과 + 야간</strong> — 통상임금 × (1 + 1.0 + 0.5) = 250%.</li>\n<li><strong>계산 순서</strong> — 기본 100% + 연장/휴일 가산 + 야간 가산 합산.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 야간근로 시간과 중복 가산 체불액을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '계산 예시 — 시급 1만원 기준',
        content:
          '<p><strong style="color:#1e3a5f">구체 숫자로 차이를 확인하면 체불 여부가 명확해집니다.</strong></p>\n<ul>\n<li><strong>야간 단독 8시간</strong> — 8 × 1만원 × 1.5 = 12만원.</li>\n<li><strong>연장 + 야간 4시간</strong> — 4 × 1만원 × 2.0 = 8만원.</li>\n<li><strong>휴일 10시간 + 야간 2시간</strong> — (8 × 1.5 + 2 × 2.0) × 1만원 + (2 × 0.5 × 1만원) = 17만원.</li>\n<li><strong>월 평균 야간 40시간</strong> — 40 × 1만원 × 0.5 = 월 20만원 가산수당.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 월 20만원이 3년 쌓이면 720만원의 체불금이 됩니다.</blockquote>',
      },
      {
        title: '청구 절차 — 야간수당 체불 대응',
        content:
          '<p><strong style="color:#1e3a5f">야간근로는 업무일지·교대표로 시간 증명이 핵심입니다.</strong></p>\n<ul>\n<li><strong>1단계 — 근무시간 기록 확보</strong> — 출퇴근·교대표로 야간 시간대 근무 증명.</li>\n<li><strong>2단계 — 계산 정리</strong> — 월별 야간시간 × 시급 × 0.5 = 미지급 가산액.</li>\n<li><strong>3단계 — 회사 청구</strong> — 내용증명으로 차액 청구(재직 중 가능).</li>\n<li><strong>4단계 — 노동청 진정</strong> — 거부 시 관할 노동지청 진정 접수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "포괄임금에 야간 포함"이라도 실근로 대비 과소 지급이면 차액 청구 가능합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 야간근로 가산수당 중복 적용',
        summary:
          '대법원 2022다260145 사건(대법원, 2023.08.31 선고)에서 법원은 야간근로 가산수당은 연장근로·휴일근로 가산수당과 독립적 성격이며, 동시 발생 시 각각 누적 적용되어야 한다고 판시했습니다.',
        takeaway:
          '야간·연장·휴일이 겹치면 각 가산율을 더해 계산해야 합니다.',
      },
    ],
    faq: [
      {
        question: '오후 9시부터 11시까지 일하면 어떻게 계산하나요?',
        answer:
          '<strong>오후 10시 이후 1시간만 야간 가산 대상입니다.</strong> 전 1시간은 일반 또는 연장근로로 계산.',
      },
      {
        question: '야간 전담 근무자도 가산수당 받나요?',
        answer:
          '<strong>네, 상시 야간근무자도 가산수당은 가능한 한 지급됩니다.</strong> "야간 전담이니 가산 없음"은 위법.',
      },
      {
        question: '감시단속 업무는 왜 제외인가요?',
        answer:
          '<strong>근기법 제63조 적용제외 업무입니다.</strong> 경비·운전 중 일부는 고용노동부 승인 시 적용 제외.',
      },
      {
        question: '포괄임금제라도 야간수당은 따로 계산되나요?',
        answer:
          '<strong>실근로 기반 정당 금액과 비교해 과소 지급이면 청구 가능합니다.</strong>',
      },
      {
        question: '단시간 근로자(알바)도 적용되나요?',
        answer:
          '<strong>네, 근로기준법 전면 적용됩니다.</strong> 5인 이상 사업장 알바도 야간 가산 대상.',
      },
    ],
    cta: {
      text: '임금체불 대응 순서, AI로 바로 정리하기',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '휴일근로 150% 가산 계산법', href: '/guide/wage/wage-holiday-work-150-percent-calculation' },
      { label: '연장근로 50% 가산 계산법', href: '/guide/wage/overtime-wage-calculation' },
      { label: '야간근로 퇴직금 평균임금', href: '/guide/retirement/retirement-night-shift-average-wage' },
      { label: '임금체불 대응 순서', href: '/guide/wage/wage-unpaid-response-order' },
      { label: '포괄임금제 연장수당 청구', href: '/guide/wage/comprehensive-wage-overtime-claim' },
    ],
  },

  // ─── 10. wage / overtime-over-weekly-52 ───
  {
    domain: 'wage',
    slug: 'wage-overtime-over-weekly-52',
    keyword: '주52시간 초과 연장수당',
    questionKeyword: '주52시간 넘게 일한 수당도 청구할 수 있나요?',
    ctaKeyword: '주52시간 초과 연장수당 점검',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '주52시간 초과 연장수당 청구 4단계 가이드 | 로앤가이드',
      description:
        '주52시간을 초과해 일한 시간의 연장수당 청구 가능 여부와 계산법, 사업주 처벌과 함께 받는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>주52시간제가 도입됐지만 여전히 주 60시간 넘게 일하는 사업장이 많습니다. "법 위반이니까 수당도 못 받는 것 아닌가" 걱정하지만, 근로기준법 제56조는 초과 시간에 대해서도 연장수당 지급 의무를 유지하며, 법 위반은 사업주 처벌과 별개입니다.</p>',
    sections: [
      {
        title: '52시간 초과분 — 수당 청구 가능성',
        content:
          '<p><strong style="color:#1e3a5f">법 위반 여부와 관계없이 모든 연장근로는 50% 가산수당 대상입니다.</strong></p>\n<ul>\n<li><strong>근기법 제53조</strong> — 주52시간 상한 규정(법정 근로 40 + 연장 12).</li>\n<li><strong>근기법 제56조</strong> — 연장근로 가산수당 의무(50% 이상).</li>\n<li><strong>초과 시간도 지급 대상</strong> — 법 위반 상태라도 "일한 시간의 대가"는 지급 의무.</li>\n<li><strong>사업주 처벌은 별개</strong> — 근로자 수당 청구권과 형사 처벌은 독립.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "위법 근로지시"라도 일한 시간만큼 수당은 청구할 수 있습니다.</blockquote>',
      },
      {
        title: '계산 예시 — 주 60시간 근무 시',
        content:
          '<p><strong style="color:#1e3a5f">법정 40시간 초과 전부가 연장근로 가산 대상입니다.</strong></p>\n<ul>\n<li><strong>주 60시간·시급 1만원</strong> — 기본 40시간 × 1만원 = 40만원.</li>\n<li><strong>연장 20시간 (40~60시간)</strong> — 20시간 × 1만원 × 1.5 = 30만원.</li>\n<li><strong>주간 총액</strong> — 40만원 + 30만원 = 70만원.</li>\n<li><strong>야간 겹치면</strong> — 야간 시간대는 추가 50% 가산(총 200%).</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 초과근로 시간과 미지급 수당을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증빙 수집 — 52시간 초과 입증',
        content:
          '<p><strong style="color:#1e3a5f">사업주는 주52시간 초과를 숨기려 하므로 근로자 스스로 기록이 중요합니다.</strong></p>\n<ul>\n<li><strong>출입기록</strong> — 카드·지문 출입 기록 사본(재직 중 요청).</li>\n<li><strong>업무 메신저</strong> — 심야·주말 업무 지시 카톡·슬랙 스크린샷.</li>\n<li><strong>이메일 발송 시간</strong> — 업무 메일 timestamp로 실근로 증명.</li>\n<li><strong>교통카드·택시 영수증</strong> — 심야 이동 정황 증빙.</li>\n<li><strong>동료 진술</strong> — 같이 초과근로한 동료의 사실확인서.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 출근 시간은 애매해도 퇴근 시간은 카드·메신저로 명확히 남습니다.</blockquote>',
      },
      {
        title: '청구 절차 — 수당 + 사업주 신고 병행',
        content:
          '<p><strong style="color:#1e3a5f">수당 청구와 근기법 위반 진정을 함께 접수하면 사업주 압박 효과가 커집니다.</strong></p>\n<ul>\n<li><strong>1단계 — 수당 차액 계산</strong> — 주별 초과시간 × 시급 × 1.5 표 작성.</li>\n<li><strong>2단계 — 내용증명 청구</strong> — 회사에 차액 청구, 미지급 시 노동청 이관 예고.</li>\n<li><strong>3단계 — 노동청 진정</strong> — 임금 체불 + 주52시간 위반 동시 진정.</li>\n<li><strong>4단계 — 민사 소송</strong> — 금액 크거나 회사 재산 은닉 우려 시 가압류 + 소송.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 소멸시효 3년. 3년 지난 부분은 청구 불가.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 주52시간 초과 근로의 가산수당 지급 의무',
        summary:
          '대법원 2023다227892 사건(대법원, 2024.06.13 선고)에서 법원은 사용자가 주52시간 상한을 위반해 근로를 시킨 경우라도 실제 제공된 근로 시간에 대한 연장근로 가산수당은 전부 지급할 의무가 있다고 판시했습니다.',
        takeaway:
          '법 위반 상태의 근로라도 수당 지급 의무는 유지되므로 초과시간 전부 청구 가능합니다.',
      },
    ],
    faq: [
      {
        question: '주52시간 초과해서 일한 건 어차피 불법인데 수당이 나오나요?',
        answer:
          '<strong>나옵니다.</strong> 법 위반은 사업주 처벌 문제이고, 근로자 수당 청구권과는 별개입니다.',
      },
      {
        question: '포괄임금제라도 청구 가능한가요?',
        answer:
          '<strong>실근로 기반 정당 수당이 포괄임금을 초과하면 차액 청구 가능합니다.</strong>',
      },
      {
        question: '회사가 "초과 시간 몰랐다"고 하면요?',
        answer:
          '<strong>메신저 지시·업무 이메일로 "지시 정황"이 입증되면 회사 책임입니다.</strong>',
      },
      {
        question: '사업주 처벌도 같이 받을 수 있나요?',
        answer:
          '<strong>근기법 제53조 위반은 2년 이하 징역 또는 2천만원 이하 벌금입니다.</strong> 노동청 진정으로 처벌 요청 가능.',
      },
      {
        question: '30인 미만 사업장은 다른가요?',
        answer:
          '<strong>2021년부터 5인 이상 50인 미만도 주52시간제 적용입니다.</strong> 5인 미만만 적용 제외.',
      },
      {
        question: '특별연장근로 인가받으면 수당도 달라지나요?',
        answer:
          '<strong>가산수당은 동일 50%입니다.</strong> 특별연장근로 인가는 상한 예외일 뿐 수당 기준은 동일.',
      },
    ],
    cta: {
      text: '임금체불 대응 순서, AI로 바로 정리하기',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '연장근로 50% 가산 계산법', href: '/guide/wage/overtime-wage-calculation' },
      { label: '휴일근로 150% 가산 계산법', href: '/guide/wage/wage-holiday-work-150-percent-calculation' },
      { label: '야간근로 50% 가산수당', href: '/guide/wage/wage-night-work-50-percent-extra' },
      { label: '주52시간 위반 퇴사 실업급여', href: '/guide/unemployment/unemployment-weekly-52-hour-violation-quit' },
      { label: '임금체불 대응 순서', href: '/guide/wage/wage-unpaid-response-order' },
    ],
  },
];
