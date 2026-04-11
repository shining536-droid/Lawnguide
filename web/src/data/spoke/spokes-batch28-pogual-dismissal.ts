import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// batch28: 포괄임금 직종별 5개 + 해고 4개 = 총 9개
//
// 1. wage-pogual-it-developer
//    이 페이지는 [IT개발자]의 [포괄임금 계약으로 야근수당을 못 받는 상황]에서
//    [근로대가 실질 판단 기준과 차액 청구 방법]을 돕는 페이지다.
//
// 2. wage-pogual-new-employee-check
//    이 페이지는 [신입사원]의 [처음 받은 근로계약서에 포괄임금 조항이 있는 상황]에서
//    [계약서 점검 포인트와 불리한 조항 대처법]을 돕는 페이지다.
//
// 3. wage-pogual-driver-transport
//    이 페이지는 [운수업 기사]의 [격일제 근무로 야간수당을 못 받는 상황]에서
//    [격일제 임금 산정 기준과 야간수당 청구 방법]을 돕는 페이지다.
//
// 4. wage-pogual-hospital-nurse
//    이 페이지는 [간호사]의 [3교대 야간근무에도 포괄임금으로 야간수당이 없는 상황]에서
//    [평균임금 관행 판단과 야간수당 차액 청구 방법]을 돕는 페이지다.
//
// 5. wage-pogual-restaurant-worker
//    이 페이지는 [음식점 근로자]의 [포괄임금제가 최저임금에 미달하는지 모르는 상황]에서
//    [최저임금 기준 무효 판단과 차액 청구 방법]을 돕는 페이지다.
//
// 6. dismissal-pregnancy-protection
//    이 페이지는 [임신 중인 근로자]의 [임신을 이유로 해고 위협을 받는 상황]에서
//    [법적 보호 요건과 구제 절차]를 돕는 페이지다.
//
// 7. dismissal-whistleblower-retaliation
//    이 페이지는 [내부고발 근로자]의 [부정행위 신고 후 보복 해고를 당한 상황]에서
//    [공익신고자 보호법 적용과 구제 방법]을 돕는 페이지다.
//
// 8. dismissal-part-time-unfair
//    이 페이지는 [아르바이트 근로자]의 [부당하게 해고되었지만 권리를 모르는 상황]에서
//    [근로자성 입증과 부당해고 구제 절차]를 돕는 페이지다.
//
// 9. dismissal-disciplinary-excessive
//    이 페이지는 [징계해고를 받은 근로자]의 [징계 사유에 비해 해고가 과중한 상황]에서
//    [징계 절차 적법성 판단과 무효 구제 방법]을 돕는 페이지다.
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch28PogualDismissal: SpokePage[] = [
  // ══════════ 포괄임금 직종별 5개 ══════════

  // ── 1. IT개발자 포괄임금 야근수당 ──
  {
    domain: 'wage',
    slug: 'wage-pogual-it-developer',
    keyword: 'IT개발자 포괄임금 야근수당',
    questionKeyword: 'IT개발자인데 포괄임금제로 야근수당을 못 받고 있습니다',
    ctaKeyword: 'IT개발자 포괄임금 야근수당 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: 'IT개발자 포괄임금 야근수당 3가지 청구 방법 | 로앤가이드',
      description:
        'IT개발자인데 포괄임금제로 야근수당이 0원이라면, 근로대가 실질 판단 기준과 차액 청구 방법을 지금 확인하세요.',
    },
    intro:
      '<p>스프린트 마감 때마다 새벽 2시까지 야근하지만, 급여명세서에는 연장근로수당이 없습니다. 연봉계약서에 "포괄임금"이라고 적혀 있으니 당연한 걸까요? 2026년 4월 포괄임금 오남용 방지 지침에 따르면, 실제 근로시간을 산정할 수 있는 IT직군에서는 포괄임금 약정이 무효가 될 수 있습니다. 내 상황에서 청구 가능한 금액을 확인해보세요.</p>',
    timelineSteps: [
      '1단계: 근로계약서 포괄임금 조항 확인',
      '2단계: 실제 근로시간 증거 확보',
      '3단계: 법정수당 차액 계산 및 청구',
    ],
    sections: [
      {
        title: 'IT개발자에게 포괄임금이 무효가 되는 이유',
        content:
          '<p><strong style="color:#1e3a5f">포괄임금 약정은 "근로시간 산정이 어려운 경우"에만 유효합니다. IT개발자는 해당하지 않을 가능성이 높습니다.</strong></p>\n<ol>\n<li><strong>근로시간 산정 가능성</strong> — Git 커밋 로그, VPN 접속 기록, 사내 메신저(슬랙·잔디) 활동 시간 등으로 실제 근로시간을 분 단위까지 산정할 수 있습니다.</li>\n<li><strong>2026년 지침 강화</strong> — 고용노동부는 "근로시간 산정이 가능한 업무에 포괄임금을 적용하면 오남용"이라고 명시했습니다.</li>\n<li><strong>법정수당 미달 시 무효</strong> — 포괄임금에 포함된 수당액이 실제 법정수당보다 적으면, 그 차액은 근로자에게 불이익하여 무효입니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: PC 로그온·오프, Git 기록, 사내 메신저 로그가 모두 근로시간 증거가 됩니다. "재량근로"라는 명목만으로 포괄임금이 정당화되지 않습니다.</blockquote>',
      },
      {
        title: 'IT개발자가 확보해야 할 증거 3가지',
        content:
          '<p><strong style="color:#1e3a5f">차액 청구의 핵심은 "실제 근로시간"을 입증하는 것입니다.</strong></p>\n<ul>\n<li><strong>Git 커밋·PR 기록</strong> — 코드 커밋 시각이 야근·주말근무를 증명합니다. GitHub, GitLab, Bitbucket 등에서 커밋 히스토리를 다운로드해 두세요.</li>\n<li><strong>VPN·사내 시스템 접속 로그</strong> — 재택근무 시 VPN 접속 시간이 출퇴근 기록을 대체합니다. IT관리자에게 로그 열람을 요청하거나, 퇴직 전 스크린샷을 저장하세요.</li>\n<li><strong>슬랙·카카오톡 업무 지시 내역</strong> — 퇴근 후 업무 지시 메시지는 연장근로의 직접 증거입니다. 대화 내용을 캡처하거나 내보내기하세요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>내 야근시간 기준 포괄임금 차액, AI가 즉시 계산해드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">월급, 평균 야근시간만 입력하면 청구 가능 금액을 무료로 확인하세요.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '차액 청구 절차 — 재직 중과 퇴직 후',
        content:
          '<p><strong style="color:#1e3a5f">재직 중이라면 익명신고센터, 퇴직 후라면 내용증명부터 시작합니다.</strong></p>\n<ol>\n<li><strong>재직 중</strong> — 2026년 4월 신설된 포괄임금 익명신고센터에 접수하면 실명 노출 없이 감독이 진행됩니다. 또는 고용노동청에 직접 진정을 접수할 수 있습니다.</li>\n<li><strong>퇴직 후</strong> — 내용증명으로 차액을 청구한 뒤, 미응답 시 고용노동청 진정 → 소액사건심판 또는 민사소송 순서로 진행합니다.</li>\n<li><strong>소멸시효</strong> — 각 임금 지급일로부터 3년입니다. 퇴직 후에도 3년 이내라면 청구 가능합니다.</li>\n</ol>',
      },
      {
        title: 'IT업계에서 흔한 포괄임금 오해 3가지',
        content:
          '<p><strong style="color:#1e3a5f">개발자들이 자주 오해하는 포인트를 정리합니다.</strong></p>\n<ul>\n<li><strong>"연봉제=포괄임금"은 아닙니다</strong> — 연봉제라도 기본급과 수당은 구분해야 합니다. 연봉 총액만 정하고 수당 구분이 없으면 포괄임금 오남용입니다.</li>\n<li><strong>"재량근로=야근수당 없음"은 틀립니다</strong> — 재량근로 간주제를 적용하더라도 간주시간을 초과하면 연장근로수당을 지급해야 합니다.</li>\n<li><strong>"CTO·리드급이면 관리감독자"라는 주장</strong> — 관리감독자 적용은 매우 엄격합니다. 출퇴근 자유가 없고, 경영 관련 결정권이 실질적으로 없다면 관리감독자에 해당하지 않습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 경영성과급의 근로대가 실질 판단',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 사기업 경영성과급이 평균임금 산정의 기초가 되는 임금에 해당하는지를 판단하면서, 근로의 대가로서 실질적으로 지급되는 금품인지를 기준으로 판단해야 한다고 판시했습니다.',
        takeaway:
          '비슷한 상황이라면 포괄임금에 포함된 각종 수당이 실제 근로의 대가인지 실질적으로 판단해야 합니다. 명목만 "수당"이고 실제로는 기본급에 해당한다면 별도 법정수당을 추가로 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: 'IT 스타트업에서도 포괄임금 무효를 주장할 수 있나요?',
        answer:
          '<p>네, 회사 규모와 관계없이 근로시간 산정이 가능한 업무에 포괄임금을 적용하면 오남용입니다. 스타트업이라도 Git, 슬랙 등 디지털 기록으로 근로시간을 입증할 수 있습니다.</p>',
      },
      {
        question: '재택근무 시 야근시간도 연장근로에 포함되나요?',
        answer:
          '<p>네, 재택근무 중 업무 지시를 받고 실제 근로한 시간은 연장근로에 해당합니다. VPN 접속 기록, 메신저 활동 시간이 증거가 됩니다.</p>',
      },
      {
        question: '연봉에 "OT 40시간 포함"이라고 계약서에 적혀 있으면?',
        answer:
          '<p>실제 야근이 40시간을 초과하면 초과분에 대한 수당을 추가로 받아야 합니다. 또한 고정OT 40시간의 금액이 법정 연장근로수당보다 적으면 그 차액도 청구 가능합니다.</p>',
      },
      {
        question: '개발 완료 후 대기시간도 근로시간인가요?',
        answer:
          '<p>사용자의 지휘·감독 아래 대기하는 시간은 근로시간에 포함됩니다. 배포 대기, 장애 대응 대기 등이 이에 해당합니다.</p>',
      },
      {
        question: '포괄임금 차액을 청구하면 회사에서 불이익을 주지 않을까요?',
        answer:
          '<p>임금 청구를 이유로 불이익을 주면 근로기준법 위반으로 형사처벌 대상입니다. 재직 중이라면 익명신고센터를 활용해 실명 노출 없이 신고할 수 있습니다.</p>',
      },
    ],
    cta: { text: 'IT개발자 포괄임금 야근수당 차액 AI로 계산하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '2026 포괄임금 지침 체크리스트', href: '/guide/wage/wage-pogual-2026-guideline-checklist' },
      { label: '포괄임금 초과근무 차액 계산법', href: '/guide/wage/wage-pogual-overtime-calculation-method' },
      { label: '포괄임금 대법원 무효 판례', href: '/guide/wage/wage-pogual-supreme-court-void-cases' },
      { label: '고정OT와 포괄임금 차이', href: '/guide/wage/wage-pogual-fixed-vs-ot-difference' },
      { label: '초과근로수당 청구 절차', href: '/guide/wage/overtime-pay-calculation-claim' },
    ],
  },

  // ── 2. 신입사원 포괄임금 계약서 점검 ──
  {
    domain: 'wage',
    slug: 'wage-pogual-new-employee-check',
    keyword: '신입사원 포괄임금 계약서 점검',
    questionKeyword: '첫 직장 계약서에 포괄임금이라고 적혀 있는데 괜찮은 건가요?',
    ctaKeyword: '신입사원 포괄임금 계약서 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '신입사원 포괄임금 계약서 점검 5가지 체크포인트 | 로앤가이드',
      description:
        '첫 직장 계약서에 포괄임금이 적혀 있다면, 불리한 조항 5가지를 반드시 점검하세요. 계약서 점검 방법을 지금 확인하세요.',
    },
    intro:
      '<p>첫 직장에 합격했는데, 근로계약서에 "포괄임금제 적용"이라고 적혀 있습니다. 선배들은 "원래 다 그렇다"고 하지만 정말 괜찮은 걸까요? 2026년 포괄임금 오남용 방지 지침 시행으로, 기존에 관행이라고 넘어갔던 조항도 무효가 될 수 있습니다. 서명 전에 꼭 확인해야 할 포인트를 정리해보세요.</p>',
    timelineSteps: [
      '1단계: 계약서 포괄임금 조항 확인',
      '2단계: 기본급·수당 구분 여부 점검',
      '3단계: 불리한 조항 발견 시 수정 요청',
    ],
    sections: [
      {
        title: '계약서에서 반드시 확인해야 할 5가지',
        content:
          '<p><strong style="color:#1e3a5f">신입사원이 놓치기 쉬운 포괄임금 계약서의 핵심 체크포인트입니다.</strong></p>\n<ol>\n<li><strong>기본급과 수당이 구분되어 있는가</strong> — "월급 총액 OOO만원"만 적혀 있고 기본급과 각종 수당(연장·야간·휴일)이 분리되어 있지 않으면 위험합니다.</li>\n<li><strong>고정OT 시간이 명시되어 있는가</strong> — "OT 20시간 포함" 등 포함된 초과근로시간이 구체적으로 적혀 있어야 합니다.</li>\n<li><strong>초과분 별도 지급 조항이 있는가</strong> — 고정OT를 초과하는 연장근로에 대해 별도로 수당을 지급한다는 조항이 있어야 합니다.</li>\n<li><strong>최저임금 이상인가</strong> — 기본급을 소정근로시간(209시간)으로 나눈 시급이 2026년 최저시급(10,030원) 이상이어야 합니다.</li>\n<li><strong>퇴직금이 월급에 포함되어 있지 않은가</strong> — "퇴직금 포함"이라는 조항은 무효입니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 계약서에 서명했더라도 법에 반하는 조항은 무효입니다. 서명 후에도 문제 제기가 가능합니다.</blockquote>',
      },
      {
        title: '불리한 조항 발견 시 대처법',
        content:
          '<p><strong style="color:#1e3a5f">입사 전이라면 수정을 요청하고, 입사 후라도 무효 주장이 가능합니다.</strong></p>\n<ol>\n<li><strong>입사 전</strong> — 인사 담당자에게 "기본급과 수당을 구분해서 명시해 달라"고 요청합니다. 이 요청 자체는 정당한 권리이며, 이를 이유로 채용 취소를 하면 위법입니다.</li>\n<li><strong>입사 후</strong> — 이미 서명했더라도 근로기준법에 반하는 조항은 효력이 없습니다. 실제 야근수당이 미지급되면 그때 차액을 청구할 수 있습니다.</li>\n<li><strong>증거 확보 습관</strong> — 입사 첫날부터 출퇴근 시간을 기록하는 습관을 들이세요. 카카오톡 퇴근 후 업무 지시도 캡처해두면 나중에 강력한 증거가 됩니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>내 계약서의 포괄임금 조항, AI가 점검해드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">계약서 내용을 입력하면 불리한 조항 여부를 무료로 확인하세요.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '2026년 지침으로 바뀐 것들',
        content:
          '<p><strong style="color:#1e3a5f">2026년 4월 9일 시행된 포괄임금 오남용 방지 지침의 핵심 변화입니다.</strong></p>\n<ul>\n<li><strong>근로시간 산정 가능 업무</strong> — 출퇴근 기록이 있는 사무직·기술직에 포괄임금을 적용하면 오남용으로 봅니다.</li>\n<li><strong>익명신고센터 신설</strong> — 재직 중이라도 실명 노출 없이 포괄임금 오남용을 신고할 수 있습니다.</li>\n<li><strong>기획감독 강화</strong> — 하반기 기획감독에서 포괄임금 운영 실태를 집중 점검합니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임금 관행의 실질 판단',
        summary:
          '대법원 2022다255454 사건(대법원, 2026.01.29 선고)에서 법원은 사기업 경영성과급이 평균임금에 포함되는지를 판단하면서, 단순히 계약서 문구가 아닌 실제 임금 지급 관행에 따라 근로의 대가 여부를 판단해야 한다고 판시했습니다.',
        takeaway:
          '비슷한 상황이라면 계약서에 "포괄임금"이라고 적혀 있더라도, 실제 임금 지급 관행이 법정수당 미달이라면 무효를 주장할 수 있습니다. 신입사원이라도 실질적으로 판단됩니다.',
      },
    ],
    faq: [
      {
        question: '계약서에 서명했는데 나중에 무효를 주장할 수 있나요?',
        answer:
          '<p>네, 근로기준법에 반하는 조항은 서명 여부와 관계없이 무효입니다. 법정수당보다 적게 지급된 차액은 언제든 청구할 수 있습니다.</p>',
      },
      {
        question: '수습 기간에도 포괄임금 무효를 주장할 수 있나요?',
        answer:
          '<p>네, 수습 기간에도 근로기준법이 동일하게 적용됩니다. 수습이라는 이유로 야근수당을 지급하지 않는 것은 위법입니다.</p>',
      },
      {
        question: '계약서 수정을 요청하면 채용 취소될까요?',
        answer:
          '<p>정당한 근로조건 확인 요청을 이유로 채용을 취소하면 위법입니다. 다만 현실적으로 우려된다면, 먼저 입사 후 증거를 확보한 뒤 문제를 제기하는 방법도 있습니다.</p>',
      },
      {
        question: '동기들도 같은 계약서인데 혼자만 문제를 제기해도 되나요?',
        answer:
          '<p>물론입니다. 개인 권리 행사이므로 다른 직원의 동의가 필요 없습니다. 익명신고센터를 이용하면 실명 노출 없이 문제를 제기할 수 있습니다.</p>',
      },
      {
        question: '포괄임금 계약서를 분석해주는 무료 서비스가 있나요?',
        answer:
          '<p>고용노동부 고객상담센터(1350)에서 무료로 상담받을 수 있습니다. 로앤가이드 AI 상담에서도 계약서 조항을 입력하면 즉시 점검이 가능합니다.</p>',
      },
    ],
    cta: { text: '신입사원 포괄임금 계약서 AI로 점검하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '2026 포괄임금 지침 체크리스트', href: '/guide/wage/wage-pogual-2026-guideline-checklist' },
      { label: '포괄임금 초과근무 차액 계산법', href: '/guide/wage/wage-pogual-overtime-calculation-method' },
      { label: '포괄임금 대법원 무효 판례', href: '/guide/wage/wage-pogual-supreme-court-void-cases' },
      { label: '고정OT와 포괄임금 차이', href: '/guide/wage/wage-pogual-fixed-vs-ot-difference' },
      { label: '초과근로수당 청구 절차', href: '/guide/wage/overtime-pay-calculation-claim' },
    ],
  },

  // ── 3. 운수업 기사 포괄임금 야간수당 ──
  {
    domain: 'wage',
    slug: 'wage-pogual-driver-transport',
    keyword: '운수업 기사 포괄임금 야간수당',
    questionKeyword: '버스·택시 기사인데 격일제 야간수당을 못 받고 있습니다',
    ctaKeyword: '운수업 기사 포괄임금 야간수당 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '운수업 기사 포괄임금 야간수당 청구 방법 3단계 | 로앤가이드',
      description:
        '운수업 격일제 기사인데 야간수당이 포괄임금에 포함됐다면, 임금 산정 기준과 차액 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>격일제로 24시간 근무를 하고 있습니다. 야간 시간대에도 운행하지만 급여에는 야간수당 항목이 없습니다. 회사는 "포괄임금에 다 포함돼 있다"고 합니다. 격일제 운수업에서 소정근로시간과 야간수당은 어떻게 계산해야 할까요? 대법원 판례를 기준으로 확인해보세요.</p>',
    timelineSteps: [
      '1단계: 격일제 소정근로시간 산정',
      '2단계: 야간근로(22시~06시) 시간 계산',
      '3단계: 포괄임금 대비 법정수당 차액 청구',
    ],
    sections: [
      {
        title: '격일제 근무의 소정근로시간 산정 기준',
        content:
          '<p><strong style="color:#1e3a5f">격일제 근무에서 소정근로시간은 1일 8시간에 제한되지 않습니다.</strong></p>\n<ol>\n<li><strong>대법원 판단 기준</strong> — 격일제 근무의 소정근로시간은 24시간 근무 중 휴게시간을 뺀 실제 근로시간입니다. 1일 8시간 한도가 아닌, 실제 근무 형태에 따라 산정합니다.</li>\n<li><strong>야간근로 시간 구분</strong> — 22시부터 다음 날 06시까지의 근로는 야간근로에 해당하며, 통상임금의 50%를 가산하여 지급해야 합니다.</li>\n<li><strong>최저임금 적용</strong> — 격일제 근무라도 시급으로 환산했을 때 최저임금 이상이어야 합니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 격일제 24시간 근무에서 야간 8시간(22시~06시)에 대한 야간가산수당은 반드시 별도로 지급되어야 합니다.</blockquote>',
      },
      {
        title: '운수업 기사 야간수당 차액 계산 예시',
        content:
          '<p><strong style="color:#1e3a5f">월 15일 격일제 근무 기준, 야간수당 차액을 계산해보겠습니다.</strong></p>\n<ul>\n<li><strong>월급 280만원(포괄임금)</strong>, 기본급·수당 구분 없음</li>\n<li><strong>격일제 1회당 실근로 20시간</strong>(휴게 4시간 제외), 월 15회 근무</li>\n<li><strong>야간근로 1회당 8시간</strong>(22시~06시) × 15회 = 월 120시간</li>\n<li><strong>통상시급 약 9,300원</strong> 기준, 야간가산수당 = 9,300원 × 0.5 × 120시간 = 약 55만 8천원</li>\n<li>포괄임금에 야간수당이 포함되어 있지 않다면 <strong>월 약 56만원</strong> 청구 가능</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>내 격일제 근무 야간수당 차액, AI가 즉시 계산해드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">월급, 근무 횟수, 야간 시간만 입력하면 차액을 무료로 확인하세요.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '운수업 포괄임금 특수 쟁점',
        content:
          '<p><strong style="color:#1e3a5f">운수업에서 자주 발생하는 포괄임금 문제를 정리합니다.</strong></p>\n<ul>\n<li><strong>대기시간 근로시간 포함 여부</strong> — 차고지에서 배차를 기다리는 대기시간도 사용자 지휘 아래 있으면 근로시간입니다.</li>\n<li><strong>운행일지와 디지털 운행기록</strong> — DTG(디지털운행기록장치) 데이터는 실제 운행시간의 가장 강력한 증거입니다.</li>\n<li><strong>노선 변경에 따른 근로시간 변동</strong> — 노선이 변경되어 야간 운행 시간이 늘어나면, 포괄임금 약정을 초과하는 차액이 발생할 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 격일제 근무 최저임금 산정 기준',
        summary:
          '대법원 2022다257238 사건(대법원, 2025.07.18 선고)에서 법원은 격일제 근무 형태에서 최저임금액 이상의 임금을 지급해야 하는 소정근로시간이 1일 8시간에 제한되지 않는다고 판시했습니다. 격일제의 실제 근로시간을 기준으로 최저임금 충족 여부를 판단해야 합니다.',
        takeaway:
          '비슷한 상황이라면 격일제 근무의 전체 실근로시간을 기준으로 최저임금 충족 여부를 확인하세요. 포괄임금 총액을 실근로시간으로 나눈 시급이 최저임금 미만이면 차액을 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '택시기사도 야간수당을 받을 수 있나요?',
        answer:
          '<p>네, 택시기사가 근로기준법상 근로자에 해당하면 22시~06시 야간근로에 대해 50% 가산수당을 받을 권리가 있습니다. 개인택시 사업자는 해당하지 않습니다.</p>',
      },
      {
        question: 'DTG 기록을 회사가 안 줄 때 어떻게 하나요?',
        answer:
          '<p>고용노동청에 임금체불 진정을 접수하면 근로감독관이 회사에 DTG 기록 제출을 요구할 수 있습니다. 개인적으로 운행일지를 작성해두면 보조 증거가 됩니다.</p>',
      },
      {
        question: '격일제 대기시간에 잠을 자도 근로시간인가요?',
        answer:
          '<p>회사의 지시에 따라 차고지에서 대기해야 하는 시간이라면, 수면 여부와 관계없이 근로시간으로 인정될 수 있습니다. 자유롭게 이동할 수 없는 대기는 근로시간입니다.</p>',
      },
      {
        question: '운수업은 포괄임금이 관행인데 바꿀 수 있나요?',
        answer:
          '<p>2026년 포괄임금 오남용 방지 지침에 따라 관행이라는 이유만으로 포괄임금이 정당화되지 않습니다. 운수업도 DTG, GPS 기록으로 근로시간 산정이 가능하므로 오남용에 해당할 수 있습니다.</p>',
      },
    ],
    cta: { text: '운수업 기사 야간수당 차액 AI로 계산하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '2026 포괄임금 지침 체크리스트', href: '/guide/wage/wage-pogual-2026-guideline-checklist' },
      { label: '포괄임금 초과근무 차액 계산법', href: '/guide/wage/wage-pogual-overtime-calculation-method' },
      { label: '포괄임금 대법원 무효 판례', href: '/guide/wage/wage-pogual-supreme-court-void-cases' },
      { label: '고정OT와 포괄임금 차이', href: '/guide/wage/wage-pogual-fixed-vs-ot-difference' },
      { label: '초과근로수당 청구 절차', href: '/guide/wage/overtime-pay-calculation-claim' },
    ],
  },

  // ── 4. 간호사 야간수당 포괄임금 ──
  {
    domain: 'wage',
    slug: 'wage-pogual-hospital-nurse',
    keyword: '간호사 야간수당 포괄임금',
    questionKeyword: '간호사인데 3교대 야간근무를 해도 야간수당이 없습니다',
    ctaKeyword: '간호사 야간수당 포괄임금 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '간호사 야간수당 포괄임금 차액 청구 4단계 절차 | 로앤가이드',
      description:
        '3교대 간호사인데 야간수당이 포괄임금에 포함됐다면, 평균임금 기준과 차액 청구 방법을 지금 확인하세요.',
    },
    intro:
      '<p>나이트 근무를 한 달에 10회씩 하고 있지만, 급여명세서에 야간근로수당은 보이지 않습니다. 병원 측은 "기본급에 다 포함되어 있다"고 합니다. 3교대 간호사의 야간근무 시간은 정확히 산정할 수 있으므로, 포괄임금 약정이 무효가 될 수 있습니다. 차액 청구 방법을 확인해보세요.</p>',
    timelineSteps: [
      '1단계: 교대 스케줄 기반 야간근로시간 산정',
      '2단계: 급여명세서에서 야간수당 항목 확인',
      '3단계: 법정 야간수당 차액 계산',
      '4단계: 병원에 차액 청구 또는 노동청 진정',
    ],
    sections: [
      {
        title: '간호사 3교대와 야간수당의 관계',
        content:
          '<p><strong style="color:#1e3a5f">3교대 간호사의 야간근로(22시~06시)에 대해서는 반드시 50% 가산수당을 지급해야 합니다.</strong></p>\n<ol>\n<li><strong>야간근로수당 법적 근거</strong> — 근로기준법 제56조에 따라 야간근로(22시~06시)에 대해 통상임금의 50%를 가산하여 지급해야 합니다.</li>\n<li><strong>3교대 스케줄</strong> — 나이트 근무(보통 22시~07시)의 전체 시간이 야간근로에 해당합니다. 이브닝 근무(보통 14시~22시)도 22시까지의 시간은 야간근로입니다.</li>\n<li><strong>근로시간 산정 용이</strong> — 병원은 간호사 근무표, 전자차트 로그인 기록 등으로 정확한 근로시간을 산정할 수 있습니다. 따라서 포괄임금 적용의 전제("근로시간 산정이 어려운 경우")에 해당하지 않습니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 간호사 근무표와 EMR(전자의무기록) 로그인 시간은 야간근로시간의 직접 증거입니다. 포괄임금 약정이 있더라도 법정수당 미달이면 무효입니다.</blockquote>',
      },
      {
        title: '야간수당 차액 계산 방법',
        content:
          '<p><strong style="color:#1e3a5f">월 나이트 근무 10회 기준으로 차액을 계산해보겠습니다.</strong></p>\n<ul>\n<li><strong>월급 320만원</strong>, 기본급·수당 구분 없는 포괄임금</li>\n<li><strong>나이트 근무 1회당 야간근로 8시간</strong>(22시~06시) × 10회 = 월 80시간</li>\n<li><strong>통상시급 약 15,300원</strong> 기준, 야간가산수당 = 15,300원 × 0.5 × 80시간 = 약 61만 2천원</li>\n<li>급여에 야간수당이 별도로 반영되지 않았다면 <strong>월 약 61만원</strong> 차액 발생</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>나이트 근무 횟수로 야간수당 차액, AI가 즉시 계산해드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">월급과 나이트 횟수만 입력하면 청구 가능 금액을 무료로 확인하세요.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '병원에서 자주 쓰는 반론과 대응',
        content:
          '<p><strong style="color:#1e3a5f">병원이 자주 내세우는 주장과 그에 대한 법적 대응을 정리합니다.</strong></p>\n<ul>\n<li><strong>"기본급에 야간수당이 포함되어 있다"</strong> — 급여명세서에 야간수당 항목이 별도로 구분되어 있지 않으면 포함되어 있다고 볼 수 없습니다.</li>\n<li><strong>"병원 업계 관행이다"</strong> — 관행이라는 이유로 법정수당 미지급이 정당화되지 않습니다. 2026년 지침에서도 관행적 포괄임금을 오남용으로 분류합니다.</li>\n<li><strong>"간호사 수당은 의료수가에 포함돼 있다"</strong> — 의료수가 체계와 근로기준법상 수당 지급 의무는 별개 문제입니다.</li>\n</ul>',
      },
      {
        title: '확보해야 할 증거 목록',
        content:
          '<p><strong style="color:#1e3a5f">차액 청구를 위해 미리 확보해야 할 자료입니다.</strong></p>\n<ul>\n<li><strong>근무표(듀티 스케줄)</strong> — 나이트·이브닝·데이 근무 배정 내역을 촬영하거나 사본을 보관하세요.</li>\n<li><strong>급여명세서</strong> — 기본급·수당 항목 구분 여부를 확인하세요. 야간수당 항목이 없으면 핵심 증거입니다.</li>\n<li><strong>EMR 로그인 기록</strong> — 전자의무기록 시스템 접속 시간이 실제 근로시간을 증명합니다.</li>\n<li><strong>인수인계 기록</strong> — 교대 시 인수인계 시간도 근로시간에 포함됩니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 평균임금 산정 시 임금 관행 판단',
        summary:
          '대법원 2022다255454 사건(대법원, 2026.01.29 선고)에서 법원은 경영성과급 등 정기적으로 지급되는 금품이 평균임금 산정의 기초가 되는지를 판단할 때, 단순히 명칭이 아니라 실제 지급 관행에 따라 근로의 대가 여부를 판단해야 한다고 판시했습니다.',
        takeaway:
          '비슷한 상황이라면 병원이 "기본급에 포함"이라고 주장하더라도, 실제 급여 지급 관행에서 야간수당이 별도로 산정·지급되지 않았다면 미지급 수당으로 차액을 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '인수인계 시간도 야간근로에 포함되나요?',
        answer:
          '<p>네, 인수인계가 22시 이후에 이루어지면 그 시간도 야간근로에 해당합니다. 나이트 근무 전 인수인계로 21시 30분에 출근해야 한다면 21시 30분~22시는 연장근로, 22시 이후는 야간근로입니다.</p>',
      },
      {
        question: '이브닝 근무도 야간수당 대상인가요?',
        answer:
          '<p>이브닝 근무가 22시까지 이어지는 경우, 22시 이후 인수인계 시간이 야간근로에 해당합니다. 22시 이전에 퇴근한다면 야간수당 대상이 아닙니다.</p>',
      },
      {
        question: '프리셉터 기간에는 야간수당이 다른가요?',
        answer:
          '<p>프리셉터(신규 교육) 기간이라도 야간근로에 대한 가산수당은 동일하게 적용됩니다. 교육생이라는 이유로 수당을 줄이거나 미지급하면 위법입니다.</p>',
      },
      {
        question: '동료 간호사들과 함께 청구할 수 있나요?',
        answer:
          '<p>같은 사업장 근로자들이 공동으로 진정을 접수하면 사업장 전체에 대한 조사로 확대될 수 있습니다. 고용노동청 진정은 개별적으로도 가능하고, 공동으로도 가능합니다.</p>',
      },
      {
        question: '퇴직한 간호사도 야간수당 차액을 받을 수 있나요?',
        answer:
          '<p>네, 각 임금 지급일로부터 3년 이내라면 퇴직 후에도 차액을 청구할 수 있습니다. 내용증명 발송 후 노동청 진정 또는 소송으로 진행합니다.</p>',
      },
    ],
    cta: { text: '간호사 야간수당 차액 AI로 계산하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '2026 포괄임금 지침 체크리스트', href: '/guide/wage/wage-pogual-2026-guideline-checklist' },
      { label: '포괄임금 초과근무 차액 계산법', href: '/guide/wage/wage-pogual-overtime-calculation-method' },
      { label: '포괄임금 대법원 무효 판례', href: '/guide/wage/wage-pogual-supreme-court-void-cases' },
      { label: '고정OT와 포괄임금 차이', href: '/guide/wage/wage-pogual-fixed-vs-ot-difference' },
      { label: '초과근로수당 청구 절차', href: '/guide/wage/overtime-pay-calculation-claim' },
    ],
  },

  // ── 5. 음식점 포괄임금제 무효 조건 ──
  {
    domain: 'wage',
    slug: 'wage-pogual-restaurant-worker',
    keyword: '음식점 포괄임금제 무효 조건',
    questionKeyword: '음식점에서 일하는데 포괄임금이 최저임금보다 낮은 것 같습니다',
    ctaKeyword: '음식점 포괄임금 무효 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '음식점 포괄임금제 무효 조건 3가지 판단 기준 | 로앤가이드',
      description:
        '음식점 포괄임금제가 최저임금에 미달한다면 계약 자체가 무효입니다. 무효 판단 기준 3가지를 지금 확인하세요.',
    },
    intro:
      '<p>하루 12시간씩 주 6일 근무하는데, 월급은 250만원입니다. 계약서에는 "포괄임금제"라고만 적혀 있고, 기본급과 수당 구분이 없습니다. 시급으로 계산해보면 최저임금에도 못 미치는 것 같습니다. 이런 포괄임금 약정은 무효가 될 수 있습니다.</p>',
    timelineSteps: [
      '1단계: 실제 근로시간 기반 시급 역산',
      '2단계: 최저임금 충족 여부 판단',
      '3단계: 무효 확인 후 차액 청구',
    ],
    sections: [
      {
        title: '포괄임금이 무효가 되는 3가지 조건',
        content:
          '<p><strong style="color:#1e3a5f">아래 3가지 중 하나라도 해당하면 포괄임금 약정은 무효입니다.</strong></p>\n<ol>\n<li><strong>최저임금 미달</strong> — 포괄임금 총액을 실제 총 근로시간으로 나눈 시급이 최저시급(2026년 10,030원) 미만이면 무효입니다.</li>\n<li><strong>근로시간 산정 가능</strong> — 출퇴근 시간이 정해져 있고 근로시간을 산정할 수 있는 음식점에서 포괄임금을 적용하면 오남용입니다.</li>\n<li><strong>기본급·수당 미구분</strong> — "월급 총액 OOO만원"만 적혀 있고 기본급, 연장수당, 야간수당, 주휴수당이 구분되어 있지 않으면 위법합니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 음식점은 영업시간이 정해져 있어 근로시간 산정이 가능합니다. 포괄임금 적용의 전제 조건에 해당하지 않습니다.</blockquote>',
      },
      {
        title: '시급 역산 방법 — 직접 계산해보세요',
        content:
          '<p><strong style="color:#1e3a5f">내 월급이 최저임금 이상인지 직접 확인할 수 있습니다.</strong></p>\n<ol>\n<li><strong>총 근로시간 계산</strong> — 하루 12시간 × 6일 = 주 72시간. 소정근로 40시간 + 연장근로 32시간입니다.</li>\n<li><strong>법정수당 포함 환산</strong> — 기본급(40시간) + 연장수당(32시간×1.5배) + 주휴수당(8시간) = 96시간분의 임금이 필요합니다.</li>\n<li><strong>시급 역산</strong> — 월급 250만원 ÷ (96시간 × 4.345주) ≒ 약 5,994원. 최저시급 10,030원에 한참 못 미칩니다.</li>\n<li><strong>월 최저임금</strong> — 같은 근무 패턴이면 월 최저 약 419만원을 받아야 합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>내 월급이 최저임금 이상인지, AI가 즉시 계산해드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">근무시간과 월급만 입력하면 최저임금 충족 여부와 차액을 무료로 확인하세요.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '음식점 근로자가 흔히 겪는 문제',
        content:
          '<p><strong style="color:#1e3a5f">음식점 포괄임금 피해의 전형적인 패턴입니다.</strong></p>\n<ul>\n<li><strong>근로계약서 미작성</strong> — 계약서 자체가 없는 경우가 많습니다. 구두 약정만으로도 근로관계는 성립하며, 법정수당 청구가 가능합니다.</li>\n<li><strong>"식대·숙박비 포함"이라는 주장</strong> — 현물 급여는 근로자 동의 없이 임금에서 공제할 수 없습니다.</li>\n<li><strong>주휴수당 미지급</strong> — 주 15시간 이상 근무하면 주휴수당을 받을 권리가 있습니다. 포괄임금에 주휴수당이 포함되어 있다는 주장은 구분 기재가 없으면 인정되지 않습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 격일제 근무 최저임금 기준',
        summary:
          '대법원 2022다257238 사건(대법원, 2025.07.18 선고)에서 법원은 격일제 근무 형태에서 최저임금액 이상의 임금을 지급해야 하는 소정근로시간이 1일 8시간에 제한되지 않는다고 판시했습니다. 장시간 근로에서도 실근로시간 전체를 기준으로 최저임금 충족 여부를 판단해야 합니다.',
        takeaway:
          '비슷한 상황이라면 음식점에서 하루 12시간 이상 근무하는 경우, 총 근로시간을 기준으로 시급을 역산하여 최저임금 미달 여부를 확인하세요. 미달이면 포괄임금 약정 자체가 무효이고 차액 전액을 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '근로계약서가 없어도 차액을 청구할 수 있나요?',
        answer:
          '<p>네, 근로계약서가 없어도 실제 근로한 사실이 있으면 근로관계가 인정됩니다. 통장 입금내역, 동료 증언, CCTV 등이 증거가 됩니다.</p>',
      },
      {
        question: '5인 미만 음식점이면 연장근로수당을 못 받나요?',
        answer:
          '<p>5인 미만 사업장에는 연장·야간·휴일근로 가산수당 규정이 적용되지 않습니다. 다만 최저임금법은 사업장 규모와 관계없이 적용되므로, 최저임금 미달 시 차액 청구는 가능합니다.</p>',
      },
      {
        question: '사장님이 "식비가 포함된 월급"이라고 하면?',
        answer:
          '<p>식비를 임금에서 공제하려면 근로자의 서면 동의가 필요합니다. 동의 없이 공제하면 임금 전액 지급 원칙에 위반됩니다.</p>',
      },
      {
        question: '외국인 근로자도 최저임금 보호를 받나요?',
        answer:
          '<p>네, 국적과 관계없이 최저임금법은 모든 근로자에게 적용됩니다. 체류 자격과 관계없이 최저임금 미달 차액을 청구할 수 있습니다.</p>',
      },
      {
        question: '아르바이트생도 주휴수당을 받을 수 있나요?',
        answer:
          '<p>주 15시간 이상 근무하고 소정 근로일을 개근했다면 주휴수당을 받을 권리가 있습니다. 포괄임금에 포함되어 있다는 주장은 급여명세서에 구분 기재가 없으면 인정되지 않습니다.</p>',
      },
    ],
    cta: { text: '음식점 포괄임금 최저임금 미달 여부 AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '2026 포괄임금 지침 체크리스트', href: '/guide/wage/wage-pogual-2026-guideline-checklist' },
      { label: '포괄임금 초과근무 차액 계산법', href: '/guide/wage/wage-pogual-overtime-calculation-method' },
      { label: '포괄임금 대법원 무효 판례', href: '/guide/wage/wage-pogual-supreme-court-void-cases' },
      { label: '고정OT와 포괄임금 차이', href: '/guide/wage/wage-pogual-fixed-vs-ot-difference' },
      { label: '초과근로수당 청구 절차', href: '/guide/wage/overtime-pay-calculation-claim' },
    ],
  },

  // ══════════ 해고 4개 ══════════

  // ── 6. 임신 중 해고 법적 보호 ──
  {
    domain: 'dismissal',
    slug: 'dismissal-pregnancy-protection',
    keyword: '임신 중 해고 법적 보호',
    questionKeyword: '임신 중인데 해고 통보를 받았습니다. 법적으로 보호받을 수 있나요?',
    ctaKeyword: '임신 중 해고 보호 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임신 중 해고 법적 보호 3가지 구제 방법 | 로앤가이드',
      description:
        '임신 중 해고 통보를 받았다면, 근로기준법이 보장하는 해고 금지 규정과 3가지 구제 방법을 지금 확인하세요.',
    },
    intro:
      '<p>임신 사실을 알렸더니 "계약 종료"라는 통보를 받았습니다. 근로기준법 제23조 제2항은 임신 중인 여성 근로자를 해고할 수 없다고 명시하고 있습니다. 임신을 이유로 한 해고는 그 자체로 위법이며, 해고 사유가 다른 것이라 하더라도 임신 기간 중에는 해고가 금지됩니다. 구제 방법을 확인해보세요.</p>',
    timelineSteps: [
      '1단계: 해고 금지 기간 해당 여부 확인',
      '2단계: 해고 통보 증거 확보',
      '3단계: 부당해고 구제신청 또는 형사 고소',
    ],
    sections: [
      {
        title: '임신 중 해고가 금지되는 법적 근거',
        content:
          '<p><strong style="color:#1e3a5f">임신 중인 여성 근로자에 대한 해고는 절대적으로 금지됩니다.</strong></p>\n<ol>\n<li><strong>근로기준법 제23조 제2항</strong> — 사용자는 임신 중인 여성에 대하여 산전·산후 휴가 기간과 그 후 30일간은 해고하지 못합니다.</li>\n<li><strong>남녀고용평등법 제11조</strong> — 임신·출산·육아를 이유로 한 해고나 불리한 처우를 금지합니다.</li>\n<li><strong>위반 시 처벌</strong> — 근로기준법 위반 시 5년 이하 징역 또는 5천만원 이하 벌금, 남녀고용평등법 위반 시 3년 이하 징역 또는 3천만원 이하 벌금에 처합니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: "경영 악화", "성과 부진" 등 다른 사유를 내세우더라도, 임신 기간 중에는 해고 자체가 불가능합니다. 해고 사유의 정당성 여부와 관계없이 금지됩니다.</blockquote>',
      },
      {
        title: '구제 방법 3가지',
        content:
          '<p><strong style="color:#1e3a5f">임신 중 해고를 당했다면 아래 3가지 경로로 구제받을 수 있습니다.</strong></p>\n<ol>\n<li><strong>노동위원회 부당해고 구제신청</strong> — 해고일로부터 3개월 이내에 관할 지방노동위원회에 구제신청합니다. 인용되면 원직복직 + 해고기간 임금 지급 명령이 내려집니다.</li>\n<li><strong>고용노동청 형사 고소</strong> — 근로기준법 제23조 위반으로 사용자를 형사 고소할 수 있습니다. 고용노동청에 진정서를 제출하면 근로감독관이 수사합니다.</li>\n<li><strong>민사 손해배상 청구</strong> — 해고로 인한 임금 상당액과 정신적 손해에 대한 위자료를 민사소송으로 청구할 수 있습니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>임신 중 해고, AI가 구제 절차를 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">해고 시기, 사유, 증거 상황을 입력하면 최적의 구제 방법을 무료로 확인하세요.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '해고가 아닌 형태의 불이익도 위법',
        content:
          '<p><strong style="color:#1e3a5f">직접 해고가 아니더라도 다음과 같은 불이익은 위법입니다.</strong></p>\n<ul>\n<li><strong>계약 갱신 거부</strong> — 기간제 근로자의 경우 계약 만료를 이유로 갱신을 거부하더라도, 임신이 실질적 원인이면 부당해고에 해당합니다.</li>\n<li><strong>근로조건 불이익 변경</strong> — 임신 후 업무량 축소, 부서 이동, 임금 삭감 등은 불이익 처우에 해당합니다.</li>\n<li><strong>자발적 퇴직 강요</strong> — "쉬는 게 좋지 않겠느냐"는 퇴직 권유도 실질적으로 거부 불가능하면 해고와 동일하게 봅니다.</li>\n</ul>',
      },
      {
        title: '즉시 확보해야 할 증거',
        content:
          '<p><strong style="color:#1e3a5f">구제신청의 성패는 증거에 달려 있습니다.</strong></p>\n<ul>\n<li><strong>임신 확인서</strong> — 산부인과에서 발급받은 임신 확인서(임신 주수 포함)가 해고 시점에 임신 중이었음을 증명합니다.</li>\n<li><strong>해고 통보 기록</strong> — 해고 통보 대화 녹음, 카카오톡 메시지, 이메일, 해고 사유서 등</li>\n<li><strong>임신 사실 통보 기록</strong> — 회사에 임신 사실을 알린 시점과 방법(카톡, 이메일 등)을 증거로 남기세요.</li>\n<li><strong>동료 증언</strong> — 해고 전후 정황을 아는 동료의 진술서도 유력한 증거입니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 근로자성의 실질 판단',
        summary:
          '대법원 2023두54914 사건(대법원, 2026.01.29 선고)에서 법원은 근로기준법상 근로자에 해당하는지를 판단할 때, 계약 형식이 아닌 실질적인 종속관계 여부를 기준으로 판단해야 한다고 판시했습니다. 협동조합 조합원 형태로 활동하더라도 실질적으로 종속적 관계가 있으면 근로자에 해당합니다.',
        takeaway:
          '비슷한 상황이라면 프리랜서·위촉직 등 비정규 형태로 계약했더라도, 실질적으로 사용자의 지휘·감독 아래 근무했다면 근로자로 인정되어 임신 중 해고 금지 규정의 보호를 받을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '기간제 근로자도 임신 중 해고 보호를 받나요?',
        answer:
          '<p>네, 기간제 근로자도 근로기준법상 임신 중 해고 금지 규정의 보호를 받습니다. 계약 만료를 명목으로 하더라도 실질적으로 임신이 원인이면 부당해고입니다.</p>',
      },
      {
        question: '임신 초기라 아직 회사에 알리지 않았는데 해고를 통보받았습니다',
        answer:
          '<p>회사가 임신 사실을 몰랐더라도, 해고 시점에 임신 중이었다면 해고 금지 규정이 적용됩니다. 임신 확인서로 해고일 현재 임신 상태였음을 입증하면 됩니다.</p>',
      },
      {
        question: '수습 기간 중에도 임신 해고 보호가 적용되나요?',
        answer:
          '<p>네, 수습 기간이라도 임신 중 해고 금지 규정은 동일하게 적용됩니다. 수습 종료를 이유로 한 해고도 임신 기간 중이면 위법입니다.</p>',
      },
      {
        question: '5인 미만 사업장이면 보호를 못 받나요?',
        answer:
          '<p>노동위원회 부당해고 구제신청은 5인 이상 사업장에만 해당하지만, 남녀고용평등법 위반으로 고용노동청에 신고하거나 민사소송을 제기하는 것은 사업장 규모와 관계없이 가능합니다.</p>',
      },
    ],
    cta: { text: '임신 중 해고 구제 방법 AI로 확인하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '해고 통보 후 24시간 대응', href: '/guide/dismissal/fired-notice-first-24-hours' },
      { label: '해고예고수당', href: '/guide/dismissal/dismissal-notice-pay' },
      { label: '권고사직 대응법', href: '/guide/dismissal/forced-resignation-defense' },
      { label: '부당해고 무효 판례', href: '/guide/dismissal/unfair-dismissal-void-cases' },
    ],
  },

  // ── 7. 내부고발 보복해고 대응 ──
  {
    domain: 'dismissal',
    slug: 'dismissal-whistleblower-retaliation',
    keyword: '내부고발 보복해고 대응',
    questionKeyword: '회사 부정을 신고했더니 보복 해고를 당했습니다',
    ctaKeyword: '내부고발 보복해고 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '내부고발 보복해고 대응 4단계 구제 절차 | 로앤가이드',
      description:
        '회사 부정을 신고한 뒤 보복 해고를 당했다면, 공익신고자 보호법에 따른 4단계 구제 절차를 지금 확인하세요.',
    },
    intro:
      '<p>회사의 분식회계를 감독기관에 신고했더니 2주 만에 "업무 태만"을 이유로 해고 통보를 받았습니다. 공익신고자 보호법은 공익침해행위를 신고한 근로자에 대한 불이익 처우를 금지합니다. 신고와 해고 사이에 인과관계가 인정되면 원직복직과 손해배상을 받을 수 있습니다.</p>',
    timelineSteps: [
      '1단계: 공익신고자 보호 대상 해당 여부 확인',
      '2단계: 신고와 해고의 인과관계 증거 확보',
      '3단계: 국민권익위원회 보호조치 신청',
      '4단계: 노동위원회 부당해고 구제신청',
    ],
    sections: [
      {
        title: '내부고발자를 보호하는 법적 장치',
        content:
          '<p><strong style="color:#1e3a5f">공익신고자 보호법과 근로기준법이 이중으로 보호합니다.</strong></p>\n<ol>\n<li><strong>공익신고자 보호법</strong> — 공익침해행위(법률 위반, 국민 건강·안전·환경 침해 등)를 신고한 사람에 대한 불이익 조치를 금지합니다. 위반 시 3년 이하 징역 또는 3천만원 이하 벌금입니다.</li>\n<li><strong>근로기준법 제23조</strong> — 정당한 이유 없는 해고는 무효입니다. 내부고발에 대한 보복이 실질적 해고 사유라면 정당한 이유가 없습니다.</li>\n<li><strong>국민권익위원회 보호조치</strong> — 신고자가 불이익을 받으면 국민권익위원회에 보호조치를 신청할 수 있습니다. 원직복직, 전보, 징계의 취소를 명령할 수 있습니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 신고와 해고 사이의 시간적 근접성, 해고 사유의 불합리성이 인과관계를 입증하는 핵심 요소입니다.</blockquote>',
      },
      {
        title: '보복해고 구제 4단계',
        content:
          '<p><strong style="color:#1e3a5f">보복해고를 당했다면 두 가지 경로를 동시에 진행하세요.</strong></p>\n<ol>\n<li><strong>국민권익위원회 보호조치 신청</strong> — 공익신고 후 불이익 조치를 받은 날로부터 3개월 이내에 신청합니다. 위원회가 조사 후 보호조치를 결정합니다.</li>\n<li><strong>노동위원회 부당해고 구제신청</strong> — 해고일로부터 3개월 이내에 병행 신청합니다. 두 절차는 별개이므로 동시에 진행 가능합니다.</li>\n<li><strong>형사 고소</strong> — 공익신고자 보호법 위반으로 사용자를 형사 고소할 수 있습니다.</li>\n<li><strong>민사 손해배상</strong> — 해고로 인한 임금 손실, 정신적 손해에 대한 위자료를 청구합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>내부고발 보복해고, AI가 구제 전략을 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">신고 내용과 해고 경위를 입력하면 보호 대상 해당 여부를 무료로 확인하세요.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '인과관계 입증을 위한 핵심 증거',
        content:
          '<p><strong style="color:#1e3a5f">보복해고의 핵심은 "신고 때문에 해고되었다"는 인과관계 입증입니다.</strong></p>\n<ul>\n<li><strong>시간적 근접성</strong> — 신고 후 단기간 내(수일~수주) 해고되었다면 보복 추정이 강해집니다.</li>\n<li><strong>해고 사유의 불합리성</strong> — 이전까지 정상 근무했는데 갑자기 "업무 태만"이라는 사유가 나왔다면 보복 가능성이 높습니다.</li>\n<li><strong>신고 접수 확인서</strong> — 감독기관·수사기관에 신고한 접수증, 접수 확인 이메일을 보관하세요.</li>\n<li><strong>신고 전 근무평가 기록</strong> — 신고 전 인사평가가 양호했다면, 해고 사유가 조작되었음을 입증하는 핵심 증거입니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부당해고 구제의 이익과 범위',
        summary:
          '대법원 2025두33276 사건(대법원, 2025.10.16 선고)에서 법원은 근로자가 사직서를 제출한 후에도 부당해고 구제신청을 할 수 있는지를 판단하면서, 근로계약관계가 종료된 경우에도 해고기간 중 임금 상당액을 받을 필요가 있다면 구제명령의 이익이 있다고 판시했습니다.',
        takeaway:
          '비슷한 상황이라면 보복해고 후 다른 회사에 취업하거나 사직서를 제출했더라도, 해고기간 동안의 임금 상당액을 받기 위한 구제신청이 가능합니다. 포기하지 마세요.',
      },
    ],
    faq: [
      {
        question: '어떤 신고가 공익신고에 해당하나요?',
        answer:
          '<p>횡령, 분식회계, 안전기준 위반, 환경오염, 식품위생법 위반 등 국민 건강·안전·환경·소비자 이익에 관한 법률 위반 신고가 해당합니다. 공익신고자 보호법 별표에 열거된 법률 위반이 대상입니다.</p>',
      },
      {
        question: '내부 제보(사내 신고)도 보호 대상인가요?',
        answer:
          '<p>회사 내부의 감사팀이나 준법감시인에게 신고한 경우에도 공익신고자 보호법의 보호를 받을 수 있습니다. 외부 기관(검찰, 감독기관)에 한정되지 않습니다.</p>',
      },
      {
        question: '익명으로 신고했는데 회사가 알아냈습니다',
        answer:
          '<p>공익신고자 보호법은 신고자의 인적사항을 동의 없이 공개하는 것을 금지합니다. 인적사항이 유출되어 불이익을 받았다면 유출 자체에 대해서도 별도로 처벌을 구할 수 있습니다.</p>',
      },
      {
        question: '보복해고 구제와 일반 부당해고 구제의 차이는?',
        answer:
          '<p>일반 부당해고는 노동위원회에만 구제를 신청하지만, 공익신고 보복해고는 국민권익위원회 보호조치와 노동위원회 구제를 동시에 진행할 수 있어 구제 경로가 더 넓습니다.</p>',
      },
      {
        question: '보복해고 증거가 부족하면 어떻게 하나요?',
        answer:
          '<p>공익신고자 보호법은 입증책임을 사용자에게 전환합니다. 즉, "해고가 신고 때문이 아니라 정당한 사유 때문"이라는 점을 회사가 증명해야 합니다. 근로자는 신고 사실과 불이익만 입증하면 됩니다.</p>',
      },
    ],
    cta: { text: '내부고발 보복해고 구제 방법 AI로 확인하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '해고 통보 후 24시간 대응', href: '/guide/dismissal/fired-notice-first-24-hours' },
      { label: '해고예고수당', href: '/guide/dismissal/dismissal-notice-pay' },
      { label: '권고사직 대응법', href: '/guide/dismissal/forced-resignation-defense' },
      { label: '부당해고 무효 판례', href: '/guide/dismissal/unfair-dismissal-void-cases' },
    ],
  },

  // ── 8. 아르바이트 부당해고 구제 ──
  {
    domain: 'dismissal',
    slug: 'dismissal-part-time-unfair',
    keyword: '아르바이트 부당해고 구제',
    questionKeyword: '알바인데 갑자기 해고당했습니다. 구제받을 수 있나요?',
    ctaKeyword: '아르바이트 부당해고 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '아르바이트 부당해고 구제 방법 4가지 핵심 정리 | 로앤가이드',
      description:
        '아르바이트인데 갑자기 해고당했다면, 근로자성 입증과 부당해고 구제 방법 4가지를 지금 확인하세요.',
    },
    intro:
      '<p>편의점에서 6개월간 일했는데, 어제 사장님이 "내일부터 안 나와도 돼"라고 했습니다. 아르바이트라서 해고를 당연하게 받아들여야 할까요? 아르바이트도 근로기준법상 근로자입니다. 정당한 사유 없는 해고는 무효이며, 구제신청을 할 수 있습니다.</p>',
    timelineSteps: [
      '1단계: 근로자성 확인',
      '2단계: 해고 사유·절차 위법 여부 판단',
      '3단계: 증거 확보 (근무 기록, 해고 통보)',
      '4단계: 부당해고 구제신청 또는 민사소송',
    ],
    sections: [
      {
        title: '아르바이트도 근로기준법 보호를 받는다',
        content:
          '<p><strong style="color:#1e3a5f">아르바이트, 파트타임, 일용직도 근로기준법상 근로자에 해당합니다.</strong></p>\n<ol>\n<li><strong>근로자 판단 기준</strong> — 사용자의 지휘·감독 아래 근로를 제공하고 임금을 받으면 근로자입니다. 고용 형태, 호칭(알바, 프리랜서 등)은 중요하지 않습니다.</li>\n<li><strong>해고 제한</strong> — 5인 이상 사업장에서는 정당한 이유 없는 해고가 금지됩니다(근로기준법 제23조). 해고 시 서면 통지도 필수입니다.</li>\n<li><strong>해고예고수당</strong> — 30일 전 예고 없이 해고하면 30일분 통상임금을 지급해야 합니다. 다만 3개월 미만 근속자는 예외입니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: "알바는 아무 때나 자를 수 있다"는 것은 잘못된 상식입니다. 정당한 사유와 서면 통지가 없으면 부당해고입니다.</blockquote>',
      },
      {
        title: '구제 방법 4가지',
        content:
          '<p><strong style="color:#1e3a5f">아르바이트 부당해고 구제는 사업장 규모에 따라 방법이 달라집니다.</strong></p>\n<ol>\n<li><strong>5인 이상 사업장</strong> — 노동위원회 부당해고 구제신청(해고일로부터 3개월 이내). 원직복직 + 임금 지급 명령을 받을 수 있습니다.</li>\n<li><strong>5인 미만 사업장</strong> — 노동위원회 구제신청은 불가하지만, 민사소송으로 해고무효 확인 + 임금 청구가 가능합니다.</li>\n<li><strong>해고예고수당 청구</strong> — 30일 전 예고 없이 즉시 해고되었다면 해고예고수당을 청구합니다.</li>\n<li><strong>임금체불 진정</strong> — 미지급 임금이 있다면 고용노동청에 임금체불 진정을 함께 접수합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>아르바이트 부당해고, AI가 구제 방법을 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">근무 기간, 사업장 규모, 해고 사유를 입력하면 구제 경로를 무료로 확인하세요.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '프리랜서 계약이라고 하면?',
        content:
          '<p><strong style="color:#1e3a5f">계약서에 "프리랜서"라고 적혀 있어도 실질이 근로자이면 보호받습니다.</strong></p>\n<ul>\n<li><strong>실질 판단 기준</strong> — 출퇴근 시간이 정해져 있는지, 사용자의 지시에 따라 업무를 수행하는지, 다른 곳에서 일할 수 없는지 등을 종합 판단합니다.</li>\n<li><strong>사업소득 신고(3.3% 원천징수)</strong> — 3.3% 사업소득으로 신고되었더라도 실질적으로 근로자이면 근로기준법이 적용됩니다.</li>\n<li><strong>근로자성 분쟁 시</strong> — 고용노동청에 근로자 지위 확인을 요청할 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 프리랜서 형태 근로자성 판단',
        summary:
          '서울중앙지법 2023가합96954 사건(서울중앙지법, 2025.05.01 선고)에서 법원은 홈쇼핑 프리랜서 쇼핑호스트가 근로기준법상 근로자에 해당하는지를 판단하면서, 회사가 업무수행에 대해 구체적이고 직접적인 지휘·감독을 했는지를 기준으로 근로자성 여부를 판단했습니다.',
        takeaway:
          '비슷한 상황이라면 아르바이트 계약이 "프리랜서" 형태라 하더라도, 출퇴근 시간 지정, 업무 지시 여부, 근무 장소 지정 등 실질적 지휘·감독이 있었다면 근로자로 인정받을 수 있습니다. 계약서 형식보다 실질이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '3개월 미만 근무했으면 구제를 못 받나요?',
        answer:
          '<p>해고예고수당은 3개월 미만 근속 시 적용되지 않지만, 부당해고 구제신청은 근속기간과 관계없이 가능합니다(5인 이상 사업장).</p>',
      },
      {
        question: '아르바이트인데 근로계약서를 쓴 적이 없습니다',
        answer:
          '<p>근로계약서 미교부 자체가 근로기준법 위반입니다(500만원 이하 벌금). 근로계약서가 없어도 실제 근로 사실이 있으면 근로자로 인정됩니다.</p>',
      },
      {
        question: '해고 후 다른 알바를 구했는데도 구제신청 가능한가요?',
        answer:
          '<p>네, 다른 곳에 취업했더라도 해고기간 동안의 임금 상당액을 받을 수 있으므로 구제신청의 이익이 있습니다.</p>',
      },
      {
        question: '편의점 본사에 불만을 접수하면 도움이 되나요?',
        answer:
          '<p>프랜차이즈 본사 민원은 법적 구제와 별개입니다. 고용노동청 진정이나 노동위원회 구제신청이 법적 효력이 있는 경로입니다.</p>',
      },
    ],
    cta: { text: '아르바이트 부당해고 구제 방법 AI로 확인하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '해고 통보 후 24시간 대응', href: '/guide/dismissal/fired-notice-first-24-hours' },
      { label: '해고예고수당', href: '/guide/dismissal/dismissal-notice-pay' },
      { label: '권고사직 대응법', href: '/guide/dismissal/forced-resignation-defense' },
      { label: '부당해고 무효 판례', href: '/guide/dismissal/unfair-dismissal-void-cases' },
    ],
  },

  // ── 9. 과중 징계해고 무효 구제 ──
  {
    domain: 'dismissal',
    slug: 'dismissal-disciplinary-excessive',
    keyword: '과중 징계해고 무효 구제',
    questionKeyword: '사소한 잘못으로 징계해고를 당했는데 너무 무겁지 않나요?',
    ctaKeyword: '과중 징계해고 무효 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '과중 징계해고 무효 구제 절차 4단계 핵심 정리 | 로앤가이드',
      description:
        '징계 사유에 비해 해고가 너무 무겁다면, 비례의 원칙 위반으로 무효를 주장할 수 있습니다. 구제 절차를 지금 확인하세요.',
    },
    intro:
      '<p>한 번의 지각을 이유로 징계해고를 통보받았습니다. 그동안 10년간 성실히 근무해왔는데, 이 정도 잘못으로 해고까지 해야 하는 걸까요? 징계해고는 비위의 정도에 비해 양정이 과중하면 무효입니다. 비례의 원칙을 기준으로 구제받을 수 있는지 확인해보세요.</p>',
    timelineSteps: [
      '1단계: 징계 사유와 절차의 적법성 확인',
      '2단계: 비례의 원칙 위반 여부 판단',
      '3단계: 징계위원회 절차적 하자 확인',
      '4단계: 부당해고 구제신청',
    ],
    sections: [
      {
        title: '징계해고가 무효가 되는 3가지 유형',
        content:
          '<p><strong style="color:#1e3a5f">징계해고가 무효로 판단되는 대표적인 유형을 정리합니다.</strong></p>\n<ol>\n<li><strong>비례의 원칙 위반</strong> — 비위 행위의 경중에 비해 징계 양정이 과중합니다. 경미한 규정 위반에 해고는 과합니다. 경고·감봉·정직 등 더 가벼운 처분이 가능한데 바로 해고하면 무효입니다.</li>\n<li><strong>징계 절차 위반</strong> — 취업규칙이나 단체협약에 정한 징계절차(징계위원회 소집, 소명 기회 부여 등)를 거치지 않으면 절차적 하자로 무효입니다.</li>\n<li><strong>징계 사유 부존재</strong> — 사실관계가 틀리거나 해당 행위가 징계 사유에 해당하지 않으면 징계 자체가 무효입니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 징계 사유가 있더라도 해고가 "유일한 선택"이었는지가 관건입니다. 경고나 감봉으로 충분한 사안에서 해고는 과중합니다.</blockquote>',
      },
      {
        title: '비례의 원칙 — 법원은 어떻게 판단하는가',
        content:
          '<p><strong style="color:#1e3a5f">법원이 징계 양정의 적정성을 판단하는 고려 요소입니다.</strong></p>\n<ul>\n<li><strong>비위 행위의 경중</strong> — 고의인지 과실인지, 반복적인지 일회성인지, 회사에 실제 손해를 끼쳤는지</li>\n<li><strong>근속기간과 근무태도</strong> — 오랜 기간 성실히 근무한 직원에 대한 경미한 비위 징계해고는 과중</li>\n<li><strong>동일 사안 선례</strong> — 같은 비위를 한 다른 직원에게 가벼운 징계를 했다면 형평에 반합니다</li>\n<li><strong>소명 기회 부여 여부</strong> — 변명의 기회를 주었는지도 중요한 판단 요소입니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>내 징계해고가 과중한지, AI가 판단 기준을 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">징계 사유, 근속기간, 절차를 입력하면 무효 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '징계 절차에서 확인해야 할 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">징계 절차의 적법성을 확인하는 핵심 포인트입니다.</strong></p>\n<ul>\n<li><strong>징계위원회 구성</strong> — 취업규칙에 정한 위원 수와 자격 요건을 갖추었는지 확인합니다.</li>\n<li><strong>소명 기회</strong> — 징계위원회 개최 전에 서면으로 출석 통보를 받았는지, 변명할 기회가 있었는지 확인합니다.</li>\n<li><strong>징계 사유 통지</strong> — 어떤 행위가 어떤 규정을 위반했는지 구체적으로 통지받았는지 확인합니다.</li>\n<li><strong>징계 시효</strong> — 비위 행위를 안 날로부터 일정 기간(통상 3개월~1년) 내에 징계해야 합니다. 시효가 지난 징계는 무효입니다.</li>\n</ul>',
      },
      {
        title: '구제신청 시 유리한 증거',
        content:
          '<p><strong style="color:#1e3a5f">징계해고 무효를 주장하기 위해 확보해야 할 증거입니다.</strong></p>\n<ul>\n<li><strong>인사평가 기록</strong> — 과거 근무평가가 양호했다면 징계해고가 과중하다는 강력한 증거입니다.</li>\n<li><strong>동일 사안 처리 선례</strong> — 같은 비위를 한 동료에게 가벼운 처분을 한 사례가 있다면 형평 위반입니다.</li>\n<li><strong>징계위원회 회의록</strong> — 징계위원회 회의록 열람을 요청하세요. 절차적 하자를 확인할 수 있습니다.</li>\n<li><strong>취업규칙·단체협약</strong> — 징계 절차와 사유가 규정대로 진행되었는지 대조합니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 징계 절차 적법성 판단',
        summary:
          '서울행법 2024구합52434 사건(서울행법, 2025.04.18 선고)에서 법원은 노동조합 사무실 제공 등 단체협약 관련 사안에서 절차적 적법성을 엄격하게 심사하면서, 사용자가 정해진 절차를 준수하지 않으면 그 처분은 위법하다고 판단했습니다.',
        takeaway:
          '비슷한 상황이라면 징계해고 시 취업규칙이나 단체협약에 정한 절차(징계위원회 구성, 소명 기회, 서면 통지 등)를 위반하면 징계 자체가 무효가 될 수 있습니다. 절차적 하자를 꼼꼼히 확인하세요.',
      },
    ],
    faq: [
      {
        question: '징계위원회에 출석하지 않으면 불리한가요?',
        answer:
          '<p>출석 통보를 받았다면 출석하여 소명하는 것이 유리합니다. 불출석 시 서면 소명서라도 제출하세요. 출석 통보 자체가 없었다면 절차적 하자로 징계 무효를 주장할 수 있습니다.</p>',
      },
      {
        question: '경고 → 정직 → 해고 순서를 거치지 않고 바로 해고했습니다',
        answer:
          '<p>취업규칙에 단계적 징계 절차가 규정되어 있다면, 이를 건너뛰고 바로 해고한 것은 절차 위반입니다. 다만 극히 중대한 비위(횡령, 폭행 등)는 즉시 해고가 인정될 수 있습니다.</p>',
      },
      {
        question: '동료도 같은 잘못을 했는데 저만 해고됐습니다',
        answer:
          '<p>같은 비위에 대해 다른 직원에게는 경고·감봉만 하고 특정인만 해고한 것은 형평의 원칙에 위반됩니다. 동료의 징계 결과를 증거로 확보하세요.</p>',
      },
      {
        question: '징계해고 무효가 인정되면 어떻게 되나요?',
        answer:
          '<p>원직복직 + 해고기간 동안의 임금 전액 지급 명령이 내려집니다. 복직이 어려운 경우 금전보상으로 대체할 수 있습니다.</p>',
      },
      {
        question: '시말서를 썼는데도 부당해고를 주장할 수 있나요?',
        answer:
          '<p>시말서 작성이 해고에 동의한 것은 아닙니다. 시말서를 쓴 사실이 있더라도 징계 양정이 과중하면 부당해고로 구제받을 수 있습니다.</p>',
      },
    ],
    cta: { text: '징계해고 과중 여부 AI로 분석하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '해고 통보 후 24시간 대응', href: '/guide/dismissal/fired-notice-first-24-hours' },
      { label: '해고예고수당', href: '/guide/dismissal/dismissal-notice-pay' },
      { label: '권고사직 대응법', href: '/guide/dismissal/forced-resignation-defense' },
      { label: '부당해고 무효 판례', href: '/guide/dismissal/unfair-dismissal-void-cases' },
    ],
  },
];
