import { SpokePage } from '../spoke-pages';

// batch42 nonlabor3 (5개): child-support 1 + rehabilitation 1 + bankruptcy 1 + stalking 1 + dui 1
// 1. 이 페이지는 양육비를 6개월 이상 받지 못한 양육자의 직접지급명령 신청을 돕는 페이지다.
// 2. 이 페이지는 개인회생 인가 후 소득이 감소한 채무자의 변제계획 변경 신청을 돕는 페이지다.
// 3. 이 페이지는 개인파산 면책을 받은 채무자의 신용회복 5단계 실행을 돕는 페이지다.
// 4. 이 페이지는 스토킹 피해자의 잠정조치 신청과 효과 확인을 돕는 페이지다.
// 5. 이 페이지는 음주측정 거부 혐의를 받고 있는 운전자의 처벌 대응과 행정심판 준비를 돕는 페이지다.

export const spokesBatch42Nonlabor3: SpokePage[] = [
  // ─── 1. child-support / child-support-direct-payment-order-procedure ───
  {
    domain: 'child-support',
    slug: 'child-support-direct-payment-order-procedure',
    keyword: '양육비 직접지급명령 신청 절차',
    questionKeyword: '양육비를 3개월 이상 못 받았는데 직접지급명령으로 월급에서 받을 수 있나요?',
    ctaKeyword: '양육비 직접지급명령 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양육비 직접지급명령 신청 절차 5단계 | 로앤가이드',
      description:
        '양육비를 2회 이상 받지 못했을 때 전 배우자의 급여에서 직접 양육비를 받는 직접지급명령 신청 요건과 절차를 지금 확인하세요.',
    },
    intro:
      '<p>양육비를 2회 이상 받지 못하면 더 이상 사정하지 않아도 됩니다. 가사소송법 제63조의2에 따른 직접지급명령을 신청하면, 법원이 전 배우자의 회사에 명령을 보내 매달 급여에서 양육비를 떼어 양육자 계좌로 바로 송금하게 할 수 있습니다. 이미 확정된 양육비부담조서·심판서가 있다면 이 제도로 월마다 반복되는 추심 부담을 한 번에 끝낼 수 있습니다.</p>',
    sections: [
      {
        title: '직접지급명령 — 신청 요건 4가지',
        content:
          '<p><strong style="color:#1e3a5f">가사소송법 제63조의2 제1항은 정기 양육비를 2회 이상 미이행한 경우 신청할 수 있다고 규정합니다.</strong></p>\n<ul>\n<li><strong>① 집행권원 존재</strong> — 양육비부담조서·이행명령·확정 심판서·조정조서 중 하나 필요.</li>\n<li><strong>② 2회 이상 미지급</strong> — 연속이 아니어도 총 2회 이상이면 요건 충족.</li>\n<li><strong>③ 정기 양육비일 것</strong> — 일시금 양육비는 일반 채권추심·압류 절차로 진행.</li>\n<li><strong>④ 소득원(제3채무자) 확인</strong> — 전 배우자 재직 회사명·주소 파악 필수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 이혼 판결문만 있고 양육비부담조서가 없으면 먼저 가정법원에 "양육비 이행명령"부터 받아야 합니다.</blockquote>',
      },
      {
        title: '신청 서류와 법원 — 관할·비용',
        content:
          '<p><strong style="color:#1e3a5f">양육자 주소지 가정법원에 신청하면 인지대·송달료를 포함해 5만 원 내외로 진행됩니다.</strong></p>\n<ul>\n<li><strong>집행권원 정본</strong> — 양육비부담조서 또는 심판·판결 정본과 송달·확정증명.</li>\n<li><strong>미지급 내역 소명자료</strong> — 통장 입금내역·문자·카톡 등 미지급 증거.</li>\n<li><strong>제3채무자 특정자료</strong> — 전 배우자 재직증명서·건강보험자격득실확인서·국민연금 가입이력.</li>\n<li><strong>가족관계증명서·주민등록등본</strong> — 양육자와 자녀 관계 확인용.</li>\n<li><strong>비용</strong> — 인지대 2,000원, 송달료 약 3만~5만 원.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 직접지급명령 요건과 제출서류를 정리해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '신청 절차 — 접수부터 송금까지 5단계',
        content:
          '<p><strong style="color:#1e3a5f">평균 4~8주 내 회사로부터 첫 양육비가 양육자 계좌에 입금됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 소득원 조사</strong> — 법원에 재산조회 신청(가사소송법 제48조의2)으로 회사 특정.</li>\n<li><strong>2단계 — 신청서 접수</strong> — 양육자 주소지 가정법원에 직접지급명령 신청서 제출.</li>\n<li><strong>3단계 — 법원 심사·결정</strong> — 2~4주 내 결정문 발송, 제3채무자에게 송달.</li>\n<li><strong>4단계 — 회사 송금 개시</strong> — 회사가 매월 급여일 양육자 계좌로 직접 송금.</li>\n<li><strong>5단계 — 이행 감시</strong> — 회사가 명령 무시 시 과태료·손해배상 책임(가사소송법 제67조).</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 전 배우자가 이직하면 회사명 변경 신청을 다시 해야 합니다. 국민연금공단 이력 조회로 추적 가능합니다.</blockquote>',
      },
      {
        title: '안 통할 때 — 담보제공·이행명령·감치 병행',
        content:
          '<p><strong style="color:#1e3a5f">상대가 자영업·무직이면 직접지급명령이 어려워 다른 수단과 병행해야 합니다.</strong></p>\n<ul>\n<li><strong>담보제공명령</strong> — 가사소송법 제63조의3, 미래 양육비 담보로 공탁·보증보험 요구.</li>\n<li><strong>일시금 지급명령</strong> — 가사소송법 제63조의3 제4항, 장래 양육비를 일시금으로 받을 수 있음.</li>\n<li><strong>이행명령·감치</strong> — 이행명령 불이행 시 30일 이내 감치(구속) 가능.</li>\n<li><strong>양육비 이행관리원</strong> — 무료 법률·추심 지원, 소송 비용 절감.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 직접지급명령·이행명령·감치는 중복 신청 가능. 하나가 막히면 바로 다음 수단으로 넘어가세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비부담조서에 확정된 의무 범위를 넘는 이행명령 불허',
        summary:
          '대법원 2025으517 사건(대법원, 2025.05.23 선고)에서 법원은 양육비부담조서 등에 의하여 확정된 의무에 관하여 의무자가 이행하지 아니한 의무의 범위를 넘어서는 가사소송법 제64조의 이행명령을 할 수 없다고 판시했습니다.',
        takeaway:
          '직접지급명령도 집행권원에 기재된 정기 양육비 범위 안에서만 인정되므로, 조서·심판서 상 금액·기간을 정확히 특정해 신청해야 합니다.',
      },
    ],
    faq: [
      {
        question: '전 배우자가 회사를 알려주지 않는데 어떻게 찾나요?',
        answer:
          '<strong>법원에 재산조회(가사소송법 제48조의2)를 신청하면 국민연금·건강보험 이력을 조회해 재직 회사를 특정할 수 있습니다.</strong> 양육비 이행관리원도 무료로 조회 지원합니다.',
      },
      {
        question: '자영업자나 프리랜서도 직접지급명령이 되나요?',
        answer:
          '<strong>급여가 없으면 직접지급명령은 어렵고, 담보제공명령·일시금 지급명령·통장 가압류를 병행해야 합니다.</strong> 사업 매출 입금 계좌 압류가 효과적.',
      },
      {
        question: '이혼한 지 10년이 넘었는데도 신청할 수 있나요?',
        answer:
          '<strong>과거 미지급분은 소멸시효 10년이 지나면 청구 불가이지만, 장래 양육비는 집행권원이 살아 있는 한 신청 가능합니다.</strong> 시효 주장 대비해 가능한 빨리 접수하세요.',
      },
      {
        question: '회사가 명령을 무시하고 송금을 안 하면 어떻게 하나요?',
        answer:
          '<strong>제3채무자에게 지급 청구 소송을 제기할 수 있고, 회사는 미이행 양육비 상당액을 손해배상해야 합니다(가사소송법 제67조).</strong> 과태료도 부과됩니다.',
      },
      {
        question: '직접지급명령이 나오면 전 배우자가 퇴사하는 건 아닌가요?',
        answer:
          '<strong>퇴사 또는 이직 시에도 이력 추적이 가능하고, 반복되면 담보제공명령·감치 등 더 강한 수단으로 넘어갑니다.</strong> 고의적 회피는 형사 처벌 대상.',
      },
      {
        question: '한 번 신청하면 자녀가 성년 될 때까지 계속 효력이 있나요?',
        answer:
          '<strong>네, 집행권원에 기재된 지급 기간(주로 만 19세)까지 계속 효력이 있습니다.</strong> 이직 시에만 회사 변경 신청을 다시 하면 됩니다.',
      },
    ],
    cta: {
      text: '양육비 산정기준표, AI로 계산해보기',
      link: '/chat?domain=child-support',
    },
    internalLinks: [
      { label: '양육비 이행명령·감치 절차', href: '/guide/child-support/child-support-enforcement-contempt-order' },
      { label: '양육비 직접지급명령 신청서 양식', href: '/guide/child-support/child-support-claim-form-template' },
      { label: '양육비 미지급 급여 압류 절차', href: '/guide/child-support/child-support-overdue-salary-seizure-procedure' },
      { label: '양육비 이행관리원 무료 지원', href: '/guide/child-support/child-support-enforcement-method' },
      { label: '과거 양육비 소멸시효 정리', href: '/guide/child-support/child-support-overdue-collection' },
    ],
  },

  // ─── 2. rehabilitation / rehabilitation-post-approval-income-decrease-modify ───
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-post-approval-income-decrease-modify',
    keyword: '개인회생 인가 후 변제계획 변경',
    questionKeyword: '회생 인가 후 월급이 줄었는데 변제금액을 낮출 수 있나요?',
    ctaKeyword: '회생 변제계획 변경 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '개인회생 인가 후 변제계획 변경 신청 3단계 | 로앤가이드',
      description:
        '개인회생 인가 결정 후 소득이 20% 이상 줄었을 때 변제계획 변경 신청 요건·서류·기간을 지금 확인하세요.',
    },
    intro:
      '<p>개인회생 인가결정을 받고 3년째 성실하게 변제해 오던 중 갑자기 회사가 구조조정을 시작하거나, 가족이 아파 의료비가 커지면 월 변제금이 부담스러워집니다. 이럴 때 포기하고 파산으로 돌아설 필요는 없습니다. 채무자 회생 및 파산에 관한 법률 제619조는 인가 후에도 사정 변경이 있으면 변제계획 변경이 가능하다고 규정합니다. 늦기 전에 법원에 재조정을 신청하세요.</p>',
    sections: [
      {
        title: '변경 신청 요건 — 사정변경 3가지 기준',
        content:
          '<p><strong style="color:#1e3a5f">소득 20% 이상 감소·지출 30% 이상 증가·가용소득 구조 변동 중 하나면 인정됩니다.</strong></p>\n<ul>\n<li><strong>① 소득 감소</strong> — 실직·이직·급여삭감·휴직 등으로 월 실수령액이 인가 당시 대비 20% 이상 감소.</li>\n<li><strong>② 지출 증가</strong> — 의료비·부양가족 추가·임차료 인상 등 객관 증빙 가능한 증가.</li>\n<li><strong>③ 부양가족 변동</strong> — 자녀 출생·가족 실직 등 부양 인원 변화.</li>\n<li><strong>근거 조항</strong> — 채무자 회생 및 파산에 관한 법률 제619조·규칙 제85조.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 변경은 변제금 "감액"만이 아니라 "기간 연장"(최대 5년)·"변제 중단 유예"도 포함합니다.</blockquote>',
      },
      {
        title: '제출 서류 — 소득·지출 변화 증빙 핵심',
        content:
          '<p><strong style="color:#1e3a5f">사정변경이 객관적 자료로 입증되지 않으면 기각됩니다.</strong></p>\n<ul>\n<li><strong>변제계획 변경안</strong> — 기존 변제계획 대비 변경 내용·금액·기간 비교표.</li>\n<li><strong>소득 증빙</strong> — 최근 3개월 급여명세서·원천징수영수증·건강보험자격득실확인서.</li>\n<li><strong>지출 증빙</strong> — 의료비 영수증·임대차계약서·자녀 학적부 등.</li>\n<li><strong>사유서</strong> — 사정변경 경위와 현 생활비 내역 상세 기재(4~5쪽 권장).</li>\n<li><strong>신청서·채권자 목록</strong> — 기존 회생 사건번호·관재인·채권자 전원 기재.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 변경 요건 충족 여부와 예상 변제금을 시뮬레이션해드립니다.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '신청 절차 — 법원 접수부터 인가까지 3단계',
        content:
          '<p><strong style="color:#1e3a5f">평균 2~4개월이 걸리고, 그 사이 기존 변제금은 계속 납부해야 합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 관재인 협의</strong> — 변경안 초안을 미리 관재인에게 보내 의견 조율(기각 리스크 감소).</li>\n<li><strong>2단계 — 법원 접수·심리</strong> — 관할 회생법원에 변경안 제출, 채권자 집회 개최(통상 1회).</li>\n<li><strong>3단계 — 변경 인가결정</strong> — 법원이 변경안 인가 시 새 변제계획 적용, 다음 달부터 변경 금액으로 납부.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 심리 중에도 기존 변제금은 납부 유지해야 합니다. 중단 시 회생 폐지 위험.</blockquote>',
      },
      {
        title: '실패 시 대안 — 변제 유예·면책·파산 전환',
        content:
          '<p><strong style="color:#1e3a5f">변경이 기각되거나 소득이 더 급격히 감소했다면 다음 단계를 준비해야 합니다.</strong></p>\n<ul>\n<li><strong>변제 유예</strong> — 최대 1년 변제금 납부 중단(법원 허가 필요).</li>\n<li><strong>조기 면책</strong> — 변제율 70% 이상 이행 시 조기 면책 검토 가능.</li>\n<li><strong>파산 전환</strong> — 소득 지속 불가 시 회생 폐지 → 개인파산 신청.</li>\n<li><strong>재신청</strong> — 회생 폐지 후 최소 5년 경과 시 다시 개인회생 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 무단 변제 중단은 회생 폐지 후 채권 전액이 되살아나므로 반드시 법원 승인을 받고 유예하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 채권자목록 누락된 보증인의 구상금채권 면책 효력',
        summary:
          '대법원 2024다221042 사건(대법원, 2025.10.16 선고)에서 법원은 개인회생채권자목록에 기재되지 아니한 청구권에 면책결정의 효력이 미치지 않음이 원칙이나, 보증인이 인가결정 후 전액 대위변제했고 채무자가 누락 사실을 몰랐던 경우 등 사정을 종합해 효력을 달리 판단할 수 있다고 판시했습니다.',
        takeaway:
          '변제계획 변경·인가 후 절차에서도 채권자목록 정확성이 결정적이므로, 누락된 보증인·채권자가 있으면 변경안에 반드시 추가 반영해야 합니다.',
      },
    ],
    faq: [
      {
        question: '변제금을 얼마까지 낮출 수 있나요?',
        answer:
          '<strong>법원은 가용소득(월 소득 − 최저생계비)의 100%를 변제금으로 책정하므로, 소득 감소폭만큼 대체로 비례해서 낮출 수 있습니다.</strong> 최저변제율 3년 변제 시 원금 기준 변동 가능.',
      },
      {
        question: '변제 기간을 5년으로 늘리면 총 변제액이 늘지 않나요?',
        answer:
          '<strong>기간을 늘려도 총 변제액은 가용소득 × 기간 범위에서 정해지므로 반드시 증가하진 않습니다.</strong> 월 부담은 확실히 감소.',
      },
      {
        question: '변경 신청 중에 변제금을 못 내면 회생이 폐지되나요?',
        answer:
          '<strong>3개월 이상 미납 시 폐지 위험이 매우 큽니다.</strong> 변경 인가 전까지 최소한 종전 금액의 50~80%라도 입금해 성실 의지를 보여야 합니다.',
      },
      {
        question: '실직 후 재취업하면 변제금이 다시 올라가나요?',
        answer:
          '<strong>네, 소득이 회복되면 법원·관재인이 재조정을 요구할 수 있습니다.</strong> 다만 즉시 상향이 아니라 사정에 따라 협의.',
      },
      {
        question: '변경 신청 비용은 얼마나 드나요?',
        answer:
          '<strong>인지대 1만 원, 송달료 약 5만~10만 원, 변호사 선임 시 50만~150만 원 정도입니다.</strong> 법률구조공단 무료 지원 대상 여부 확인하세요.',
      },
      {
        question: '관재인이 변경에 반대하면 어떻게 되나요?',
        answer:
          '<strong>관재인 의견은 참고 사항이고 최종 결정은 법원이 합니다.</strong> 채무자가 증빙을 충실히 갖추면 반대에도 인가되는 경우가 있습니다.',
      },
    ],
    cta: {
      text: '개인회생 신청 자격, AI로 점검하기',
      link: '/chat?domain=rehabilitation',
    },
    internalLinks: [
      { label: '회생 소득 변동 변제금 재조정', href: '/guide/rehabilitation/rehabilitation-income-change-repayment-revision' },
      { label: '회생 인가 후 채권자 이의 대응', href: '/guide/rehabilitation/rehabilitation-creditor-objection-response' },
      { label: '회생 실패 파산 전환 조건', href: '/guide/rehabilitation/rehabilitation-failed-switch-bankruptcy' },
      { label: '회생 변제 중 실직 대처', href: '/guide/rehabilitation/rehabilitation-creditor-collection-stop' },
      { label: '회생 재신청 5년 요건', href: '/guide/rehabilitation/rehabilitation-eligibility-requirements-faq' },
    ],
  },

  // ─── 3. bankruptcy / bankruptcy-post-discharge-credit-rebuild-5steps ───
  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-post-discharge-credit-rebuild-5steps',
    keyword: '파산 면책 후 신용회복 5단계',
    questionKeyword: '파산 면책받았는데 신용점수는 언제 회복되나요?',
    ctaKeyword: '파산 후 신용회복 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '파산 면책 후 신용회복 5단계 로드맵 | 로앤가이드',
      description:
        '파산 면책결정 후 신용점수 회복까지 평균 5~7년이 걸리는 이유와 체크카드·소액대출로 신용을 되살리는 5단계 실행 순서를 지금 확인하세요.',
    },
    intro:
      '<p>파산 면책결정문을 받은 그날 빚은 사라지지만, 신용정보원의 "면책 정보"는 5년간 남고 공공정보 제공 기간은 추가로 이어집니다. 그래서 면책 다음 날 대출이 나오는 것은 아닙니다. 하지만 1년·3년·5년 단위로 끊어서 실행 계획만 세우면 체크카드·통신요금·소액대출 순서로 신용을 다시 쌓을 수 있습니다. 아래 5단계는 회복 속도를 가장 빠르게 만드는 공식 경로입니다.</p>',
    sections: [
      {
        title: '면책 직후 — 공공정보 등록 기간 이해',
        content:
          '<p><strong style="color:#1e3a5f">면책결정 후에도 한국신용정보원에 "면책정보"가 등록되어 최대 5년간 제공됩니다.</strong></p>\n<ul>\n<li><strong>등록 근거</strong> — 신용정보의 이용 및 보호에 관한 법률 제25조·시행령.</li>\n<li><strong>기간</strong> — 면책결정 확정일부터 5년(일부 기관은 7년까지 참고).</li>\n<li><strong>영향</strong> — 신용평가사 등급이 하위권으로 유지, 주류 카드사·은행 신규 거래 제한.</li>\n<li><strong>조회 방법</strong> — 올크레딧·KCB·나이스평가정보에서 본인 신용보고서 무료 열람.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "연체정보"는 면책으로 삭제되지만 "면책정보" 자체는 별도로 등록됩니다. 기간 단축 방법은 없습니다.</blockquote>',
      },
      {
        title: '1~2년 차 — 체크카드·통신요금 성실이행',
        content:
          '<p><strong style="color:#1e3a5f">신용카드가 막혀도 체크카드 사용 이력과 통신요금 성실납부는 신용 재평가 가점입니다.</strong></p>\n<ul>\n<li><strong>체크카드 전용 사용</strong> — 월 30만 원 이상 꾸준히 사용, 가계부 입증 가능.</li>\n<li><strong>통신 3사 요금</strong> — 6개월 이상 무연체 시 신용평가사 가점(스마트폰 자동이체 권장).</li>\n<li><strong>국민연금·건강보험</strong> — 체납 없이 납부해야 공공정보 불이익 방지.</li>\n<li><strong>급여 통장 고정</strong> — 한 은행 거래 실적 쌓아두기(추후 거래은행 대출 심사 유리).</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 면책 후 단계별 신용회복 로드맵과 주의사항을 정리해드립니다.</p>\n<a href="/chat?domain=bankruptcy" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3~5년 차 — 신용보증재단·서민금융 활용',
        content:
          '<p><strong style="color:#1e3a5f">햇살론·미소금융 등 서민금융 상품은 면책자도 일정 조건 충족 시 이용 가능합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 햇살론</strong> — 근로 6개월 이상·연소득 3,500만 원 이하면 최대 2,000만 원.</li>\n<li><strong>2단계 — 미소금융</strong> — 면책 후 3년 이상 경과 + 소득 증빙 시 창업·생계자금.</li>\n<li><strong>3단계 — 새희망홀씨</strong> — 은행권 서민금융, 연 10% 이하 금리 가능.</li>\n<li><strong>4단계 — 신용평가 재진단</strong> — 18개월 단위로 본인 점수 확인, 회복 추이 체크.</li>\n<li><strong>5단계 — 신용카드 재발급</strong> — 면책 5년 경과·소득 지속 시 하이브리드 카드부터 재신청.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 서민금융진흥원(1397)에서 본인 상황에 맞는 상품을 무료 상담받을 수 있습니다.</blockquote>',
      },
      {
        title: '절대 금지 사항 — 3가지만 지키면 회복 보장',
        content:
          '<p><strong style="color:#1e3a5f">재도전 실패의 80%는 아래 3가지 중 하나 때문입니다.</strong></p>\n<ul>\n<li><strong>① 대부업·사금융</strong> — 제도권 아닌 곳에서 차입하면 신용 하락 + 고리채 늪.</li>\n<li><strong>② 명의 대여</strong> — 지인 명의로 카드·대출 → 사기·명의도용 형사 책임.</li>\n<li><strong>③ 단기 연체</strong> — 통신·카드대금 1회 연체만으로도 회복 속도 1~2년 지연.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 면책 5년이 지났어도 새 연체가 생기면 신용점수는 면책 직후 수준으로 되돌아갑니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 면책결정 확정 후 채무불이행자명부 등재 기각',
        summary:
          '대법원 2025마7576 사건(대법원, 2026.01.09 선고)에서 법원은 채무자에 대한 면책결정이 확정되어 해당 채무에 대한 책임이 면제된 경우 채무불이행자명부 등재신청에 정당한 이유가 없는 것으로 보아 신청을 기각하여야 한다고 판시했습니다.',
        takeaway:
          '면책결정이 확정되면 채무자명부 등재 신청은 기각되므로, 신용회복 과정에서 이러한 부당 등재를 발견하면 즉시 이의를 제기해 삭제할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '면책 후 5년이 지나면 자동으로 신용점수가 올라가나요?',
        answer:
          '<strong>면책정보가 삭제되면서 기본 점수는 올라가지만, 거래 이력이 없으면 정체됩니다.</strong> 체크카드·통신비 성실 납부로 꾸준히 이력을 쌓아야 실질적 상승.',
      },
      {
        question: '면책자도 신용카드를 발급받을 수 있나요?',
        answer:
          '<strong>면책 5년이 지나고 정기 소득이 확인되면 하이브리드 카드부터 재발급 가능합니다.</strong> 이용한도 처음에는 20만~50만 원 수준.',
      },
      {
        question: '전세대출은 언제부터 가능한가요?',
        answer:
          '<strong>면책 후 3년 이상 + 소득 증빙 + 보증기관(HUG·HF) 보증 가능 조건이면 가능합니다.</strong> 일반 시중은행은 5년 경과 후 유리.',
      },
      {
        question: '면책 정보를 조기에 삭제하는 방법이 있나요?',
        answer:
          '<strong>법정 5년 기간은 단축 불가이며 어떤 업체의 "조기 삭제" 광고는 사기입니다.</strong> 신용회복은 시간 + 성실 이행만이 정답.',
      },
      {
        question: '햇살론을 받으면 신용점수에 도움이 되나요?',
        answer:
          '<strong>햇살론 대출 자체보다 성실 상환 이력이 가점입니다.</strong> 연체 없이 완납하면 상당한 가점, 연체 시 오히려 점수 하락.',
      },
    ],
    cta: {
      text: '파산 면책 가능성, AI로 점검하기',
      link: '/chat?domain=bankruptcy',
    },
    internalLinks: [
      { label: '파산 면책 후 신용점수 회복 경로', href: '/guide/bankruptcy/bankruptcy-credit-recovery-steps' },
      { label: '면책 후 삶의 변화 전반', href: '/guide/bankruptcy/bankruptcy-after-discharge-life-changes' },
      { label: '면책 후 숨은 재산 발견 시', href: '/guide/bankruptcy/bankruptcy-post-discharge-asset-found' },
      { label: '면책 제외 채무 유형 정리', href: '/guide/bankruptcy/bankruptcy-non-dischargeable-debt-types' },
      { label: '자영업자 면책 후 재창업', href: '/guide/bankruptcy/bankruptcy-self-employed-restart-after-discharge' },
    ],
  },

  // ─── 4. stalking / stalking-provisional-measure-application-effect ───
  {
    domain: 'stalking',
    slug: 'stalking-provisional-measure-application-effect',
    keyword: '스토킹 잠정조치 신청 절차 효과',
    questionKeyword: '스토킹 고소했는데 잠정조치로 접근을 막을 수 있나요?',
    ctaKeyword: '스토킹 잠정조치 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '스토킹 잠정조치 신청 절차와 효과 4단계 | 로앤가이드',
      description:
        '스토킹 피해자가 가해자의 접근을 법적으로 차단하는 잠정조치 신청 방법·유치장 구금 요건·위반 시 처벌을 지금 확인하세요.',
    },
    intro:
      '<p>신고만으로는 가해자의 접근을 끊을 수 없다는 현실에 분노와 두려움이 커지기 쉽습니다. 스토킹범죄의 처벌 등에 관한 법률 제9조의 잠정조치는 바로 이 공백을 메우기 위한 제도로, 경찰 신고 후 법원이 가해자에게 접근금지·통신금지·유치장 구금을 명령할 수 있게 합니다. 피해자 스스로 신청할 수 있으며, 결정까지 평균 2~5일이 걸립니다.</p>',
    sections: [
      {
        title: '잠정조치 — 4가지 유형과 효과',
        content:
          '<p><strong style="color:#1e3a5f">스토킹처벌법 제9조는 법원이 결정할 수 있는 4가지 잠정조치를 규정합니다.</strong></p>\n<ul>\n<li><strong>1호 — 서면경고</strong> — 가해자에게 서면 경고 조치(실효성 제한적).</li>\n<li><strong>2호 — 접근금지</strong> — 피해자·주거지·직장 100m 이내 접근 금지.</li>\n<li><strong>3호 — 통신금지</strong> — 전화·문자·SNS·메신저·이메일 등 일체 차단.</li>\n<li><strong>4호 — 유치장 구금</strong> — 가해자를 국가경찰관서 유치장에 최대 1개월 구금.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 2호·3호는 기본형, 4호는 재범 우려·중대 폭력 우려 시 긴급 결정. 기간은 3개월, 2회까지 연장 가능해 최대 9개월.</blockquote>',
      },
      {
        title: '신청 서류와 기관 — 경찰·검찰·법원 경로',
        content:
          '<p><strong style="color:#1e3a5f">피해자 신청 또는 수사기관 직권으로 진행되며, 결정은 반드시 법원(판사)이 합니다.</strong></p>\n<ul>\n<li><strong>신청서</strong> — 피해자 신청서(경찰서 비치) 또는 변호인 대리 신청서.</li>\n<li><strong>고소·신고 접수증</strong> — 스토킹 범죄 신고·고소 접수 확인 필수.</li>\n<li><strong>증거자료</strong> — 문자·카톡 캡처·통화녹음·CCTV·위치추적 로그.</li>\n<li><strong>피해 경위서</strong> — 시간순 사건 기록, 일시·장소·방법·심리적 피해 기재.</li>\n<li><strong>의료기록</strong> — 정신과 상담·수면제 처방 등 피해 객관화 자료.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 잠정조치 신청 요건과 증거 목록을 정리해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '신청 절차 — 경찰 신고부터 결정까지 4단계',
        content:
          '<p><strong style="color:#1e3a5f">긴급한 경우 신고 다음 날 결정 나오기도 합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 112 신고·고소 접수</strong> — 현장 출동 시 응급조치(접근금지·격리)가 먼저 내려질 수 있음.</li>\n<li><strong>2단계 — 잠정조치 신청</strong> — 경찰이 검사에게 청구, 검사가 법원에 청구.</li>\n<li><strong>3단계 — 법원 심사·결정</strong> — 판사가 서면 또는 심문 후 결정(평균 48시간 내).</li>\n<li><strong>4단계 — 결정 집행</strong> — 가해자에게 송달, 즉시 효력 발생.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 응급조치(경찰 독자 결정) → 긴급응급조치(검사 청구) → 잠정조치(법원 결정) 순으로 강도가 올라갑니다.</blockquote>',
      },
      {
        title: '위반 시 처벌 — 가해자가 무시하면',
        content:
          '<p><strong style="color:#1e3a5f">스토킹처벌법 제20조는 잠정조치 위반을 별도 범죄로 처벌합니다.</strong></p>\n<ul>\n<li><strong>2호·3호 위반</strong> — 2년 이하 징역 또는 2,000만 원 이하 벌금.</li>\n<li><strong>4호 위반(유치 중 도주)</strong> — 형법 별도 적용, 가중 처벌.</li>\n<li><strong>신고 방법</strong> — 즉시 112 또는 담당 수사관에게 직접 연락.</li>\n<li><strong>증거 보존</strong> — 접근·연락 시도 시각·장소·방법 기록이 위반 입증 핵심.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 가해자가 제3자를 통해 연락하는 것도 통신금지 위반으로 인정될 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 잠정조치 연장결정 재항고와 절차',
        summary:
          '대법원 2025모3144 사건(대법원, 2025.12.11 선고)에서 법원은 스토킹범죄의 처벌 등에 관한 법률상 잠정조치 결정(연장·종류 변경 포함)에 대한 항고의 절차적 쟁점을 정리하며, 피해자 보호 공백이 없도록 원심법원의 조치 기준을 제시했습니다.',
        takeaway:
          '잠정조치는 연장·변경 결정도 가능해 3개월이 지나도 피해자 보호가 계속 이어질 수 있으므로, 필요하면 연장 신청을 반드시 준비하세요.',
      },
    ],
    faq: [
      {
        question: '잠정조치 결정까지 얼마나 걸리나요?',
        answer:
          '<strong>평균 2~5일이 걸리고, 급박한 경우 긴급응급조치로 몇 시간 내 임시 조치가 가능합니다.</strong> 증거가 명확할수록 결정이 빠릅니다.',
      },
      {
        question: '가해자와 같은 직장인 경우에도 신청되나요?',
        answer:
          '<strong>같은 건물 내 근무지 분리가 가능하도록 회사에 협조 요청하고, 접근금지 명령을 받을 수 있습니다.</strong> 회사 인사팀과 사전 조율 필요.',
      },
      {
        question: '피해자 변호사 없이 혼자 신청할 수 있나요?',
        answer:
          '<strong>네, 신청서만 작성하면 되고 경찰이 조력합니다.</strong> 복잡한 사건은 여성긴급전화1366·대한법률구조공단 무료 지원 활용하세요.',
      },
      {
        question: '잠정조치가 기각되면 끝인가요?',
        answer:
          '<strong>재신청·추가 증거 제출로 다시 청구할 수 있고, 항고도 가능합니다.</strong> 기각 사유를 확인해 보완하세요.',
      },
      {
        question: '가해자가 외국인이어도 집행되나요?',
        answer:
          '<strong>국내 체류 중이라면 동일하게 집행됩니다.</strong> 위반 시 형사 처벌은 물론 출입국 제재도 병행 가능.',
      },
    ],
    cta: {
      text: '스토킹 고소 대응 순서, AI로 점검하기',
      link: '/chat?domain=stalking',
    },
    internalLinks: [
      { label: '스토킹 응급조치 신청 방법', href: '/guide/stalking/stalking-emergency-measure-application' },
      { label: '스토킹 접근금지 위반 대응', href: '/guide/stalking/stalking-emergency-measure-violation-response' },
      { label: '스토킹 증거 수집 체크리스트', href: '/guide/stalking/stalking-evidence-collection-faq' },
      { label: '스토킹 피해자 바로 할 일', href: '/guide/stalking/stalking-victim-where-to-start' },
      { label: '스토킹 처벌·접근금지 개요', href: '/guide/stalking/stalking-penalty-restraining-order' },
    ],
  },

  // ─── 5. dui / dui-measurement-refusal-penalty-appeal ───
  {
    domain: 'dui',
    slug: 'dui-measurement-refusal-penalty-appeal',
    keyword: '음주측정 거부 처벌 행정심판',
    questionKeyword: '음주측정을 거부했는데 처벌 수위와 행정심판 준비는 어떻게 하나요?',
    ctaKeyword: '음주측정 거부 대응 점검',
    type: '상황형',
    perspective: 'accused',
    meta: {
      title: '음주측정 거부 처벌과 행정심판 대응 4단계 | 로앤가이드',
      description:
        '음주측정 거부로 형사·행정 처분을 동시에 받을 수 있는 혐의를 받고 있다면, 처벌 기준과 행정심판 준비 순서를 지금 확인하세요.',
    },
    intro:
      '<p>현장에서 경찰의 음주측정을 거부했다면 이후 형사·행정 두 갈래 절차가 동시에 진행됩니다. 혐의를 받고 있다면 당황해서 자백·무대응으로 넘기기보다 도로교통법 제148조의2 제2항의 처벌 수위와 면허 취소 처분 시점을 먼저 이해하고, 행정심판 청구 기한(처분 통지 후 90일)을 놓치지 않는 것이 핵심입니다. 감경 포인트는 생각보다 촘촘히 열려 있습니다.</p>',
    sections: [
      {
        title: '음주측정 거부 — 처벌 기준과 양형 구간',
        content:
          '<p><strong style="color:#1e3a5f">도로교통법 제148조의2 제2항은 혈중알코올농도 0.2% 수준 처벌과 동일하게 규정합니다.</strong></p>\n<ul>\n<li><strong>형사 처벌</strong> — 1년 이상 5년 이하 징역 또는 500만 원 이상 2,000만 원 이하 벌금.</li>\n<li><strong>면허 처분</strong> — 면허 취소(결격기간 1년, 재취득 제한).</li>\n<li><strong>가중 사유</strong> — 최근 10년 내 음주운전·거부 전력 시 가중 처벌(재범).</li>\n<li><strong>정당 거부 인정 범위</strong> — 의식 혼미·심각한 지병·의사표현 불가 등 객관 증빙 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "측정기 오류가 걱정돼서 거부"는 정당 사유로 인정되지 않습니다. 단 1회 재측정 요청은 가능합니다.</blockquote>',
      },
      {
        title: '혐의를 받고 있다면 — 초기 48시간 대응',
        content:
          '<p><strong style="color:#1e3a5f">현장 진술과 초동 증거가 이후 재판·행정심판 전체 방향을 결정합니다.</strong></p>\n<ul>\n<li><strong>진술 최소화</strong> — 변호인 선임 전 구체적 음주량·시각 진술 자제.</li>\n<li><strong>혈액 채취 요청</strong> — 본인 비용 부담으로 병원 혈액 검사 받아 측정 방법 다툴 증거 확보.</li>\n<li><strong>현장 녹음·블랙박스</strong> — 경찰 측정 요구 절차·경고 방식 확인(적법 절차 쟁점).</li>\n<li><strong>의료기록 확보</strong> — 호흡 곤란·과호흡·지병이 있었다면 당일 병원 기록 즉시 확보.</li>\n<li><strong>변호인 선임</strong> — 음주운전·측정거부 전담 변호사 조기 상담 권장.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 혐의 구성 여부와 초기 대응 순서를 정리해드립니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '행정심판 — 면허 취소 대응 4단계',
        content:
          '<p><strong style="color:#1e3a5f">처분 통지서 수령 후 90일 이내 중앙행정심판위원회에 청구하지 않으면 구제 기회 소멸.</strong></p>\n<ol>\n<li><strong>1단계 — 청구 접수</strong> — 처분청(지방경찰청) 또는 온라인(onlinesimpan.go.kr) 제출.</li>\n<li><strong>2단계 — 의견서 작성</strong> — 생계유지 필요성·재범 방지 조치·사회봉사 이력 증빙.</li>\n<li><strong>3단계 — 심리·재결</strong> — 평균 3~5개월, 심판 일정에 맞춰 추가 서류 보완.</li>\n<li><strong>4단계 — 재결 이행</strong> — 인용 시 면허 복원, 기각 시 행정소송 준비(90일 내).</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 행정심판 중에도 면허 정지/취소 처분 효력은 유지되므로, 대중교통 대안·업무 조정 필수.</blockquote>',
      },
      {
        title: '감경 포인트 — 재결·판결에서 유리해지는 요소',
        content:
          '<p><strong style="color:#1e3a5f">사정이 해당할 소지가 있으면 실제로 면허 100일 감경 또는 집행유예 사례가 존재합니다.</strong></p>\n<ul>\n<li><strong>초범·전과 없음</strong> — 최근 10년 내 음주·거부 전력 없으면 큰 가점.</li>\n<li><strong>생계 필수성</strong> — 운전이 직업·가족 부양에 불가결함(화물·택시·방문영업 등).</li>\n<li><strong>자발적 교육</strong> — 음주운전예방교육(16시간) 수료증 제출.</li>\n<li><strong>봉사활동·반성문</strong> — 구체적 반성·사회공헌 활동 증빙.</li>\n<li><strong>당시 사정</strong> — 측정기 결함 의심·경찰 절차 위반 등 해당할 소지가 있는 경우 집중 부각.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "현장에서 경찰이 고압적이었다"는 주장만으로는 감경 사유 불충분. 녹음·영상 등 객관 자료 필요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주측정 절차 적법성과 임의수사 한계',
        summary:
          '대법원 2025도6752 사건(대법원, 2025.12.11 선고)에서 법원은 수사기관이 불특정 다수 출입 장소에 통상적 방법으로 출입해 아무런 물리력 없이 피의자를 찾아 음주운전 여부를 확인한 것은 임의수사의 한 방법으로 허용되며, 절차적 위법이 없다면 측정 결과는 증거로 유효하다고 판시했습니다.',
        takeaway:
          '측정 절차의 적법성은 혐의 다툼의 핵심 포인트이므로, 경찰 접근·경고·측정 요구 각 단계의 영상·녹음을 확보해 임의수사 한계를 따져야 합니다.',
      },
    ],
    faq: [
      {
        question: '측정을 거부했는데 나중에 혈액 검사로 음주가 확인되지 않으면 처벌이 풀리나요?',
        answer:
          '<strong>아닙니다, 측정 거부 자체가 독립 범죄로 처벌됩니다.</strong> 혈중알코올농도 0%여도 거부죄는 별도로 성립합니다.',
      },
      {
        question: '처분 통지를 못 받았으면 90일 기한이 안 지나간 건가요?',
        answer:
          '<strong>주소지 송달이 법상 원칙이므로, 송달 날짜부터 기산합니다.</strong> 등기반송 등 객관 증거 있으면 기산점 다툴 여지.',
      },
      {
        question: '면허 취소 기간 중 운전하면 어떻게 되나요?',
        answer:
          '<strong>무면허 운전으로 별도 처벌 + 취소 기간 연장됩니다.</strong> 대체로 집행유예 기회도 사라지므로 절대 금물.',
      },
      {
        question: '벌금과 징역은 모두 선고되나요?',
        answer:
          '<strong>초범이고 사고가 없었다면 통상 벌금 또는 집행유예로 결정되는 경우가 많습니다.</strong> 재범·사고 병발 시 실형 가능성 높음.',
      },
      {
        question: '행정심판과 형사재판 중 어느 쪽을 먼저 준비해야 하나요?',
        answer:
          '<strong>둘은 별개 절차라 동시에 진행됩니다.</strong> 다만 행정심판 기한(90일)이 짧아 먼저 청구부터 하는 것이 안전.',
      },
      {
        question: '거부 사유로 인정되는 경우가 있나요?',
        answer:
          '<strong>의식 혼미·호흡 불가·실신 등 의학적 불가능 사유에 해당할 소지가 있다면 당일 의료기록으로 입증해야 합니다.</strong> 단순 "의심되어서"는 인정 불가.',
      },
    ],
    cta: {
      text: '음주운전 행정심판 준비서류, AI로 체크하기',
      link: '/chat?domain=dui',
    },
    internalLinks: [
      { label: '음주측정 거부 현장 대응 정리', href: '/guide/dui/dui-breathalyzer-refusal' },
      { label: '음주운전 행정심판 필요서류', href: '/guide/dui/dui-administrative-appeal-required-docs' },
      { label: '면허 취소 청문 절차', href: '/guide/dui/dui-administrative-license-hearing' },
      { label: '탄원서·감경 요소 정리', href: '/guide/dui/dui-leniency-petition-documents' },
      { label: '음주 수사 흔한 실수', href: '/guide/dui/dui-investigation-common-mistakes' },
    ],
  },
];
