import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 포괄임금제 2개 + 교통사고 3개 (batch30)
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch30PogualTraffic: SpokePage[] = [
  // ── 포괄임금 1. 재택근무 포괄임금 초과근로 산정 ──
  {
    domain: 'wage',
    slug: 'wage-pogual-remote-work-overtime',
    keyword: '재택근무 포괄임금 초과근로 산정',
    questionKeyword: '재택근무인데 포괄임금에 초과근로수당이 포함된다고 합니다. 적법한가요?',
    ctaKeyword: '재택근무 포괄임금 상담',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '재택근무 포괄임금 초과근로 산정 방법 4단계 | 로앤가이드',
      description:
        '재택근무 중 야근·주말 업무를 했는데 포괄임금에 포함된다고 한다면, 초과근로수당 청구 가능 여부를 지금 확인하세요.',
    },
    intro:
      '<p>재택근무를 하면서 저녁 9시까지 메신저에 응답하고, 주말에도 업무 요청을 받습니다. 회사는 "재택이라 근로시간 산정이 어려우니 포괄임금으로 처리한다"고 합니다. 그런데 메신저 로그와 VPN 접속 기록에 근로시간이 고스란히 남아 있습니다. 재택근무에서도 초과근로수당을 받을 수 있는지 확인해보세요.</p>',
    sections: [
      {
        title: '재택근무에서 포괄임금이 유효한 경우와 무효인 경우',
        content:
          '<p><strong style="color:#1e3a5f">재택근무라도 근로시간 산정이 가능하면 포괄임금 약정은 무효입니다.</strong></p>\n<p>대법원은 포괄임금 약정이 유효하려면 "근로시간 산정이 어려운 경우"여야 한다고 보고 있습니다. 재택근무에서도 VPN 로그, 메신저 접속 기록, 이메일 발송 시각 등으로 근로시간이 산정 가능하면 포괄임금 전제가 무너집니다.</p>\n<ul>\n<li><strong>유효한 경우</strong> — 출퇴근 시간 없이 성과 기반으로 일하고, 업무 시간을 스스로 결정하며, 기록 수단이 전혀 없는 순수 재량근무.</li>\n<li><strong>무효인 경우</strong> — 화상회의 출석 의무, 메신저 응답 의무, VPN 접속 기록이 있는 등 근로시간이 사실상 관리되는 재택근무.</li>\n<li><strong>핵심 판단 기준</strong> — "회사가 근로시간을 관리할 수 있었는가"가 아니라 "근로시간이 산정 가능한가"가 기준입니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 메신저·VPN·이메일 기록이 있다면 재택근무여도 근로시간 산정이 가능합니다. 포괄임금이 무효일 수 있습니다.</blockquote>',
      },
      {
        title: '재택근무 초과근로시간 산정 방법 4단계',
        content:
          '<p><strong style="color:#1e3a5f">디지털 기록을 활용해 초과근로시간을 객관적으로 산정하세요.</strong></p>\n<ol>\n<li><strong>1단계: 기록 수집</strong> — VPN 접속/종료 시각, 메신저 첫/마지막 응답 시각, 이메일 발송 시각, 화상회의 참여 로그를 확보합니다.</li>\n<li><strong>2단계: 소정근로시간 확인</strong> — 근로계약서상 소정근로시간(통상 09:00~18:00, 주 40시간)을 확인합니다.</li>\n<li><strong>3단계: 초과분 산정</strong> — 1일 8시간, 1주 40시간을 초과하는 근로시간을 연장근로로 산정합니다. 22시~06시 근무는 야간근로로 별도 산정합니다.</li>\n<li><strong>4단계: 미지급 수당 계산</strong> — 초과근로시간 × 통상시급 × 1.5(연장가산) 또는 × 2.0(야간+연장 중복)으로 계산합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>재택근무 미지급 초과수당, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">근무기록과 급여 정보를 입력하면 미지급 수당 총액을 무료로 확인합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '재택근무 근로시간 입증 전략',
        content:
          '<p><strong style="color:#1e3a5f">디지털 흔적이 가장 강력한 증거입니다. 퇴사 전에 확보하세요.</strong></p>\n<ul>\n<li><strong>VPN 로그</strong> — IT 부서에 VPN 접속 기록을 요청하세요. 회사가 보유하고 있으므로 소송 시 법원에 문서제출명령을 신청할 수도 있습니다.</li>\n<li><strong>메신저 대화 캡처</strong> — 퇴근 시간 이후 업무 지시 메시지를 캡처하세요. 날짜와 시간이 표시되어야 합니다.</li>\n<li><strong>이메일 발송 기록</strong> — 업무 관련 이메일의 발송 시간이 증거가 됩니다.</li>\n<li><strong>업무 일지 자작</strong> — 매일 근로 시작·종료 시간을 기록해두면 보충 증거가 됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 회사 시스템의 디지털 기록은 퇴사하면 접근이 불가능해집니다. 재직 중에 가능한 한 확보하세요.</blockquote>',
      },
      {
        title: '사업장 밖 간주근로제와 포괄임금의 차이',
        content:
          '<p><strong style="color:#1e3a5f">재택근무에 간주근로시간제가 적용되는 경우와 포괄임금의 차이를 구분하세요.</strong></p>\n<ul>\n<li><strong>간주근로시간제</strong> — 근로기준법 제58조에 따라, 사업장 밖에서 근무하여 근로시간 산정이 어려운 경우 소정근로시간을 일한 것으로 간주합니다. 노사 서면합의가 필요합니다.</li>\n<li><strong>포괄임금</strong> — 법률 근거가 없는 약정으로, 판례에 의해 제한적으로만 유효합니다.</li>\n<li><strong>핵심 차이</strong> — 간주근로시간제는 법적 근거가 있고, 포괄임금은 판례에 의한 예외입니다. 간주근로시간제 요건을 갖추지 못한 채 포괄임금만 적용하면 이중으로 위법 소지가 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 격일제 근무 최저임금·포괄임금 판단',
        summary:
          '대법원 2022다257238 사건(대법원, 2025.07.18 선고)에서 법원은 근로시간이 산정 가능한 격일제 근무에서 소정근로시간을 초과하는 연장근로시간은 최저임금액 이상의 임금을 지급해야 하는 시간에 포함되지 않는다고 판시했습니다.',
        takeaway:
          '재택근무에서도 근로시간이 산정 가능하면, 소정근로시간과 초과근로시간을 명확히 구분하여 수당을 청구할 수 있습니다. 포괄임금으로 뭉뚱그려 지급하는 것은 위법입니다.',
      },
    ],
    faq: [
      {
        question: '재택근무인데 야근수당을 받을 수 있나요?',
        answer:
          '<p>VPN·메신저 등 기록으로 22시 이후 근무가 입증되면 야간근로수당(50% 가산)을 받을 수 있습니다. 재택이라는 이유만으로 야간수당이 면제되지 않습니다.</p>',
      },
      {
        question: '회사가 근로시간 기록 시스템을 안 만들어준 경우에도 청구할 수 있나요?',
        answer:
          '<p>근로시간 기록 의무는 사용자에게 있습니다(근로기준법 제66조). 기록 시스템이 없더라도 메신저·이메일 등 간접 증거로 입증하면 청구가 가능합니다.</p>',
      },
      {
        question: '재량근로제가 적용된 경우에는 어떤가요?',
        answer:
          '<p>재량근로시간제(제58조 제3항)가 노사 서면합의로 적용되었다면 간주시간만큼 일한 것으로 봅니다. 다만 야간근로수당은 별도로 발생합니다.</p>',
      },
      {
        question: '퇴사 후에도 재택근무 중 미지급 수당을 청구할 수 있나요?',
        answer:
          '<p>퇴직일로부터 3년 이내의 미지급 수당을 모두 청구할 수 있습니다. 다만 퇴사하면 VPN 기록 등에 접근이 어려우므로 재직 중에 증거를 확보하세요.</p>',
      },
      {
        question: '포괄임금 약정에 서명했으면 초과수당을 포기한 건가요?',
        answer:
          '<p>아닙니다. 포괄임금 약정은 근로시간 산정이 가능한 경우 무효입니다. 서명 여부와 관계없이 실제 초과근로에 대한 수당을 청구할 수 있습니다.</p>',
      },
    ],
    cta: { text: '재택근무 포괄임금 초과수당 AI로 즉시 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '포괄임금 초과수당 차액', href: '/guide/wage/wage-pogual-overtime-difference-claim' },
      { label: '포괄임금 무효 판례', href: '/guide/wage/wage-pogual-supreme-court-void-cases' },
      { label: '2026 포괄임금 지침', href: '/guide/wage/wage-pogual-2026-guideline-checklist' },
      { label: '포괄임금 초과수당 계산법', href: '/guide/wage/wage-pogual-overtime-calculation-method' },
      { label: '근로시간 기록 없을 때', href: '/guide/wage/wage-pogual-no-timesheet-report' },
    ],
  },

  // ── 포괄임금 2. 단시간근로자 포괄임금 적용 가능 여부 ──
  {
    domain: 'wage',
    slug: 'wage-pogual-part-time-application',
    keyword: '단시간근로자 포괄임금 적용',
    questionKeyword: '파트타임인데 포괄임금 계약이 가능한가요?',
    ctaKeyword: '단시간근로자 포괄임금 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '단시간근로자 포괄임금 적용 가능 여부 3가지 기준 | 로앤가이드',
      description:
        '파트타임으로 일하면서 포괄임금 계약을 했다면, 초과근로수당 청구 가능 여부를 지금 확인하세요.',
    },
    intro:
      '<p>하루 5시간, 주 25시간 파트타임으로 일하고 있습니다. 그런데 근로계약서에 "월 고정급에 초과근로수당이 포함"이라고 되어 있습니다. 매일 1~2시간 더 일하지만 추가 수당은 없습니다. 단시간근로자에게 포괄임금을 적용하는 것이 적법한지 확인해보세요.</p>',
    sections: [
      {
        title: '단시간근로자에게 포괄임금이 적용되기 어려운 이유',
        content:
          '<p><strong style="color:#1e3a5f">단시간근로자는 소정근로시간이 짧고 명확하므로 포괄임금 전제가 성립하지 않습니다.</strong></p>\n<p>포괄임금 약정이 유효하려면 "근로시간 산정이 어려운 경우"여야 합니다. 단시간근로자는 근로계약서에 소정근로시간이 구체적으로 명시되어 있고, 출퇴근 시간도 정해져 있습니다.</p>\n<ul>\n<li><strong>소정근로시간이 명확</strong> — 예: 09:00~14:00, 주 25시간. 근로시간 산정에 어려움이 전혀 없습니다.</li>\n<li><strong>초과근로 제한</strong> — 단시간근로자는 근로기준법상 소정근로시간을 초과하는 근로에 대해 통상임금의 50%를 가산해야 합니다(제18조 제3항).</li>\n<li><strong>서면 합의 필수</strong> — 단시간근로자의 초과근로는 본인의 서면 동의 없이 강제할 수 없고, 1주 12시간을 초과할 수 없습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 단시간근로자의 근로시간은 계약서에 명확히 정해져 있습니다. 포괄임금 적용 전제인 "근로시간 산정 곤란"에 해당하지 않습니다.</blockquote>',
      },
      {
        title: '단시간근로자의 초과근로수당 계산법',
        content:
          '<p><strong style="color:#1e3a5f">소정근로시간을 초과하는 매 시간에 대해 50% 가산수당을 받아야 합니다.</strong></p>\n<ul>\n<li><strong>가산 기준</strong> — 단시간근로자가 소정근로시간(예: 5시간)을 초과하면 그 즉시 50% 가산이 적용됩니다. 8시간이 아닌 소정근로시간이 기준입니다.</li>\n<li><strong>계산 예시</strong> — 시급 1만원, 하루 5시간 계약인데 7시간 일했다면: 초과 2시간 × 1만원 × 1.5 = 3만원 추가 지급.</li>\n<li><strong>주 12시간 상한</strong> — 단시간근로자의 초과근로는 주 12시간을 초과할 수 없습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>단시간근로자 미지급 초과수당, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">소정근로시간과 실제 근무시간을 입력하면 미지급 수당을 무료로 확인합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '포괄임금 약정이 있어도 수당을 청구할 수 있는 근거',
        content:
          '<p><strong style="color:#1e3a5f">단시간근로자 보호 규정은 강행규정이므로 포괄임금 약정으로 배제할 수 없습니다.</strong></p>\n<ul>\n<li><strong>근로기준법 제18조 제3항</strong> — 단시간근로자의 초과근로 가산 규정은 강행규정입니다. 당사자 합의로도 배제 불가합니다.</li>\n<li><strong>포괄임금 약정 vs 강행규정</strong> — 포괄임금 약정에 "초과수당 포함"이라고 되어 있어도, 실제 초과근로수당이 법정 기준에 미달하면 그 차액을 청구할 수 있습니다.</li>\n<li><strong>근로조건 서면 명시 의무</strong> — 단시간근로자에게는 근로일, 근로시간, 휴게시간을 서면으로 명시해야 합니다. 이를 위반하면 500만원 이하 과태료입니다.</li>\n</ul>',
      },
      {
        title: '증거 확보와 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">근로계약서상 소정근로시간과 실제 근무시간의 차이가 핵심 증거입니다.</strong></p>\n<ul>\n<li><strong>출퇴근 기록</strong> — POS, CCTV, 교대 기록 등 실제 근무시간을 증명할 기록을 확보하세요.</li>\n<li><strong>급여명세서</strong> — 포괄임금에 초과수당이 별도 항목으로 표시되었는지 확인하세요. 별도 항목이 없으면 초과수당 미지급 증거가 됩니다.</li>\n<li><strong>청구 순서</strong> — 사업주에게 서면 요청 → 미지급 시 고용노동부 진정 → 소액사건 소송.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임금 청구와 포괄임금 약정의 한계',
        summary:
          '대법원 2022다255454 사건(대법원, 2026.01.29 선고)에서 법원은 임금의 판단 기준으로, 금품 지급의무의 발생이 근로제공과 직접적으로 관련되거나 밀접하게 관련된 것이어야 한다고 판시했습니다.',
        takeaway:
          '단시간근로자의 초과근로는 근로제공과 직접 관련된 것이므로 당연히 임금으로 지급되어야 합니다. 포괄임금에 포함되었다는 주장은 근로시간 산정이 가능한 이상 받아들여지기 어렵습니다.',
      },
    ],
    faq: [
      {
        question: '파트타임인데 5시간 넘으면 바로 초과수당이 발생하나요?',
        answer:
          '<p>네, 단시간근로자는 소정근로시간(계약서상 시간)을 1시간이라도 초과하면 그 즉시 50% 가산수당이 발생합니다. 8시간 기준이 아닙니다.</p>',
      },
      {
        question: '알바인데 포괄임금 계약서에 서명했으면 효력이 있나요?',
        answer:
          '<p>서명 여부와 관계없이, 근로시간이 명확한 단시간근로자에게 포괄임금 적용은 무효입니다. 실제 초과근로에 대한 수당을 청구할 수 있습니다.</p>',
      },
      {
        question: '사장님이 "초과근로 동의서에 안 쓰면 일을 줄이겠다"고 합니다.',
        answer:
          '<p>단시간근로자의 초과근로는 본인의 서면 동의가 필수이며, 동의를 거부했다는 이유로 불이익을 주면 위법입니다. 녹음 등 증거를 확보하세요.</p>',
      },
      {
        question: '4대 보험에 가입 안 된 파트타임도 초과수당을 받을 수 있나요?',
        answer:
          '<p>4대 보험 가입 여부와 초과근로수당 지급 의무는 별개입니다. 근로관계가 인정되면 보험 미가입 상태에서도 수당을 청구할 수 있습니다.</p>',
      },
      {
        question: '주 15시간 미만 초단시간근로자도 해당되나요?',
        answer:
          '<p>주 15시간 미만 초단시간근로자는 근로기준법 제18조 제3항 적용이 제외되어 초과근로 가산수당 의무가 없습니다. 다만 최저임금은 적용됩니다.</p>',
      },
    ],
    cta: { text: '단시간근로자 초과수당 청구 가능성 AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '포괄임금 최저임금 테스트', href: '/guide/wage/wage-pogual-minimum-wage-test' },
      { label: '포괄임금 고정급 vs 수당 차이', href: '/guide/wage/wage-pogual-fixed-vs-ot-difference' },
      { label: '포괄임금 무효 판례', href: '/guide/wage/wage-pogual-supreme-court-void-cases' },
      { label: '포괄임금 초과수당 차액', href: '/guide/wage/wage-pogual-overtime-difference-claim' },
      { label: 'IT 개발자 포괄임금', href: '/guide/wage/wage-pogual-it-developer' },
    ],
  },

  // ── 교통사고 1. 택시 승객 교통사고 보상 청구 ──
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-taxi-passenger-claim',
    keyword: '택시 승객 교통사고 보상 청구',
    questionKeyword: '택시를 타고 가다가 교통사고가 났는데 어디에 보상을 청구하나요?',
    ctaKeyword: '택시 승객 사고 보상 상담',
    type: '절차타임라인형',
    perspective: 'victim',
    meta: {
      title: '택시 승객 교통사고 보상 청구 방법 3단계 | 로앤가이드',
      description:
        '택시를 타고 가다 교통사고를 당했다면, 택시 회사·상대 차량 보험사에 보상 청구하는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>택시를 타고 출퇴근하던 중 교통사고가 났습니다. 택시 기사는 "상대방 잘못"이라고 하고, 상대 보험사는 "택시 기사에게도 과실이 있다"고 합니다. 승객인 내가 직접 보상을 받으려면 어디에 청구해야 하는지 정리해보세요.</p>',
    sections: [
      {
        title: '택시 승객의 보상 청구 대상 3곳',
        content:
          '<p><strong style="color:#1e3a5f">택시 승객은 과실 여부와 관계없이, 택시 보험과 상대 차량 보험 모두에 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>상대 차량 보험사</strong> — 상대 차량에 과실이 있으면 상대 보험사의 대인배상으로 치료비·합의금을 청구합니다.</li>\n<li><strong>택시 보험사(공제조합)</strong> — 택시 기사에게도 과실이 있으면 택시 공제조합에도 청구 가능합니다. 택시 승객은 택시의 과실과 무관하게 보상받을 권리가 있습니다.</li>\n<li><strong>양쪽 공동 청구</strong> — 쌍방과실인 경우, 승객은 양쪽 보험사에 과실비율에 따라 나누어 청구하거나 한쪽에 전액 청구 후 구상권을 맡길 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 택시 승객은 사고의 과실이 전혀 없습니다. 어느 쪽 보험이든 전액 보상을 청구할 수 있습니다.</blockquote>',
      },
      {
        title: '보상 청구 절차 3단계',
        content:
          '<p><strong style="color:#1e3a5f">사고 직후부터 합의까지 단계별로 정리합니다.</strong></p>\n<ol>\n<li><strong>1단계: 사고 직후 대응</strong> — 경찰 신고(112) → 사고 현장 사진·영상 촬영 → 택시 번호·기사 정보·보험사 확인 → 즉시 병원 진료.</li>\n<li><strong>2단계: 보험사 접수</strong> — 상대 차량 보험사 또는 택시 공제조합에 피해자 직접 접수. "승객 피해자"임을 명확히 밝히세요.</li>\n<li><strong>3단계: 치료 완료 후 합의</strong> — 치료비 + 위자료 + 휴업손해 + 향후치료비를 합산하여 합의금을 산정합니다. 보험사 제시 금액이 부족하면 추가 협상 또는 소송.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>택시 승객 교통사고 보상금, AI가 즉시 예측합니다</strong></p>\n<p style="margin:0;font-size:0.95em">부상 정도와 치료 기간을 입력하면 예상 보상금을 무료로 확인합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '택시 공제조합 상대 시 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">택시 공제조합은 일반 보험사보다 합의금이 낮은 경우가 많습니다.</strong></p>\n<ul>\n<li><strong>낮은 합의금 제시</strong> — 공제조합은 합의금을 최소화하려는 경향이 있습니다. 첫 제시 금액을 그대로 수용하지 마세요.</li>\n<li><strong>자차보험 자기부담금</strong> — 쌍방과실 사고에서 자차보험 자기부담금도 상대 과실분만큼 청구 가능합니다.</li>\n<li><strong>합의 전 가능한 한 확인</strong> — 후유장해가 남을 수 있으므로 치료가 완전히 종료된 후 합의하세요.</li>\n</ul>',
      },
      {
        title: '택시 승객만 해당되는 특수한 보상 항목',
        content:
          '<p><strong style="color:#1e3a5f">승객은 출퇴근 재해, 교통비, 간병비 등 추가 보상 항목을 놓치지 마세요.</strong></p>\n<ul>\n<li><strong>출퇴근 중 사고</strong> — 출퇴근 재해로 인정되면 산재보험도 추가 적용됩니다.</li>\n<li><strong>교통비</strong> — 통원 치료 시 교통비를 별도로 청구할 수 있습니다.</li>\n<li><strong>위자료</strong> — 정신적 피해에 대한 위자료는 부상 등급에 따라 산정됩니다.</li>\n<li><strong>휴업손해</strong> — 사고로 일을 못 한 기간의 소득 손실을 청구합니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 쌍방과실 교통사고 자기부담금 보상',
        summary:
          '대법원 2022다287284 사건(대법원, 2026.01.29 선고)에서 법원은 쌍방과실 교통사고에서 자차보험 자기부담금 상당액을 상대 차량 측에 손해배상으로 청구할 수 있다고 판시했습니다.',
        takeaway:
          '택시 승객이 자차보험(개인 차량 탑승이 아닌 경우에도)으로 처리된 비용이 있다면, 상대 과실분만큼 자기부담금을 돌려받을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '택시 기사가 사고 접수를 안 해주면 어떻게 하나요?',
        answer:
          '<p>경찰 신고(112)를 직접 하세요. 경찰 사고 접수서가 있으면 택시 기사의 협조 없이도 공제조합에 직접 보상 청구가 가능합니다.</p>',
      },
      {
        question: '택시 승객도 과실이 붙나요?',
        answer:
          '<p>택시 승객에게는 원칙적으로 과실이 없습니다. 안전벨트 미착용 등 극히 예외적인 경우에만 5~10% 과실이 인정될 수 있습니다.</p>',
      },
      {
        question: '택시 사고 후 병원을 바로 안 갔는데 보상받을 수 있나요?',
        answer:
          '<p>사고 후 72시간 이내에 병원 진료를 받으면 인과관계 입증이 수월합니다. 시간이 지나면 "사고와 무관한 증상"이라는 보험사 주장이 나올 수 있습니다.</p>',
      },
      {
        question: '합의금은 얼마 정도 받을 수 있나요?',
        answer:
          '<p>부상 정도에 따라 다릅니다. 경미한 염좌 기준 치료비 + 위자료 약 100~300만원, 골절 등 중상은 수천만원까지 가능합니다. 정확한 금액은 진단서와 치료 기간으로 산정됩니다.</p>',
      },
      {
        question: '택시 탈 때 블랙박스 영상을 요청할 수 있나요?',
        answer:
          '<p>택시 블랙박스 영상은 개인정보보호법상 요청이 가능합니다. 보험사를 통해 요청하거나, 경찰 조사 과정에서 확보할 수 있습니다.</p>',
      },
    ],
    cta: { text: '택시 승객 교통사고 보상금 AI로 즉시 확인하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 대처법', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
      { label: '과실비율 분쟁', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '합의 실수 방지', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '승객 부상 보상', href: '/guide/traffic-accident/traffic-accident-passenger-injury-claim' },
      { label: '경추 염좌 보상', href: '/guide/traffic-accident/traffic-accident-whiplash-compensation' },
    ],
  },

  // ── 교통사고 2. 배달라이더 교통사고 산재 인정 ──
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-delivery-rider-workers-comp',
    keyword: '배달라이더 교통사고 산재',
    questionKeyword: '배달 중 교통사고를 당했는데 산재 처리가 되나요?',
    ctaKeyword: '배달라이더 산재 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '배달라이더 교통사고 산재 인정 기준 4가지 | 로앤가이드',
      description:
        '배달 중 교통사고를 당했다면, 산재보험 적용 가능 여부와 보상 범위를 지금 확인하세요.',
    },
    intro:
      '<p>배달 앱으로 음식을 배달하다가 차에 치였습니다. 병원비가 수백만원인데, 플랫폼에서는 "프리랜서라 산재가 안 된다"고 합니다. 2021년부터 배달라이더도 산재보험이 적용된다는 법이 시행되었습니다. 산재 인정 가능 여부를 확인해보세요.</p>',
    sections: [
      {
        title: '배달라이더 산재보험 적용 근거',
        content:
          '<p><strong style="color:#1e3a5f">2021년 7월부터 배달라이더도 산업재해보상보험법 특례로 산재보험이 적용됩니다.</strong></p>\n<p>산업재해보상보험법 제125조(특수형태근로종사자)에 따라 배달 플랫폼을 통해 일하는 라이더는 "특수형태근로종사자"로 분류되어 산재보험에 가입됩니다.</p>\n<ul>\n<li><strong>적용 대상</strong> — 배달의민족, 쿠팡이츠, 요기요 등 배달 플랫폼을 통해 배달 업무를 수행하는 라이더.</li>\n<li><strong>보험료 부담</strong> — 플랫폼 사업자가 보험료를 부담합니다. 라이더가 별도로 가입할 필요 없습니다.</li>\n<li><strong>적용 제외 신청</strong> — 라이더가 산재보험 적용 제외를 신청한 경우라도, 사고 발생 시 적용 제외 철회가 가능합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 플랫폼이 "프리랜서라 산재 안 된다"는 것은 잘못된 안내입니다. 배달라이더도 산재보험 적용 대상입니다.</blockquote>',
      },
      {
        title: '산재 인정 기준 4가지',
        content:
          '<p><strong style="color:#1e3a5f">배달 업무와 사고 사이에 인과관계가 인정되면 산재입니다.</strong></p>\n<ol>\n<li><strong>업무 수행 중 사고</strong> — 배달 콜을 수락한 후 픽업·배달·복귀 과정에서 발생한 사고.</li>\n<li><strong>업무 대기 중 사고</strong> — 앱에 로그인하여 콜을 대기하는 중에 발생한 사고도 업무 관련성이 인정될 수 있습니다.</li>\n<li><strong>이동 경로상 사고</strong> — 합리적 배달 경로에서 벗어나지 않는 한 인과관계가 인정될 수 있습니다.</li>\n<li><strong>장비 결함 사고</strong> — 배달 가방, 오토바이 등 업무 장비의 결함으로 인한 사고도 포함됩니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>배달라이더 산재 인정 가능성, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">사고 상황을 입력하면 산재 인정 가능성과 보상 범위를 무료로 확인합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '산재보험 보상 범위',
        content:
          '<p><strong style="color:#1e3a5f">산재가 인정되면 치료비 전액 + 휴업급여 + 장해급여를 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>요양급여</strong> — 치료비 전액(본인부담금 없음).</li>\n<li><strong>휴업급여</strong> — 평균임금의 70%를 치료 기간 동안 지급합니다.</li>\n<li><strong>장해급여</strong> — 치료 후 후유장해가 남으면 장해등급에 따라 일시금 또는 연금을 지급합니다.</li>\n<li><strong>상병보상연금</strong> — 치료 기간이 2년을 초과하고 중증이면 연금으로 전환됩니다.</li>\n<li><strong>유족급여</strong> — 사망 시 유족에게 평균임금의 1,300일분 + 장의비를 지급합니다.</li>\n</ul>',
      },
      {
        title: '산재 신청 절차와 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">사고 후 가능한 빨리 산재 신청을 하세요.</strong></p>\n<ul>\n<li><strong>신청 방법</strong> — 근로복지공단에 요양급여 신청서 제출. 온라인(고용·산재보험 토탈서비스)으로도 신청 가능합니다.</li>\n<li><strong>필요 서류</strong> — 사고경위서, 진단서, 배달 앱 기록(콜 수락·완료 내역), 경찰 사고접수확인서.</li>\n<li><strong>플랫폼 협조 요청</strong> — 배달 앱 기록(콜 내역, GPS 이동 경로)을 플랫폼에 요청하세요. 거부 시 근로복지공단이 직접 자료를 요청합니다.</li>\n<li><strong>자동차보험 병행</strong> — 상대 차량의 자동차보험 보상과 산재보험 보상은 병행 가능합니다. 다만 중복 보상은 조정됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 산재와 자동차보험을 동시에 신청하면 보상 범위가 넓어집니다. 어느 한쪽만 선택할 필요가 없습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 도급인의 산업안전 의무와 산재 인정',
        summary:
          '대법원 2025도4428 사건(대법원, 2025.08.14 선고)에서 법원은 도급인이 산업안전보건법 제63조에 따라 부담하는 안전·보건조치의무의 범위를 구체적으로 판시했습니다.',
        takeaway:
          '배달 플랫폼도 도급인으로서 라이더의 안전을 위한 조치 의무가 있습니다. 안전교육 미실시, 안전장비 미지급 등은 플랫폼의 책임 근거가 됩니다.',
      },
    ],
    faq: [
      {
        question: '산재보험 적용 제외를 신청한 적이 있는데 산재 처리가 되나요?',
        answer:
          '<p>적용 제외를 신청했더라도 사고 발생 후 적용 제외 철회 신청이 가능합니다. 근로복지공단에 철회를 신청하면 산재 처리가 가능합니다.</p>',
      },
      {
        question: '배달 대기 중(콜 수락 전) 사고도 산재인가요?',
        answer:
          '<p>앱에 로그인하여 배달 대기 중인 상태는 업무 관련성이 인정될 수 있습니다. 다만 개인 용무를 위해 이동 중이었다면 인과관계가 부정될 수 있습니다.</p>',
      },
      {
        question: '상대 차량 보험으로 치료받고 있는데 산재도 신청해야 하나요?',
        answer:
          '<p>산재를 함께 신청하면 휴업급여(소득 보전)를 추가로 받을 수 있습니다. 자동차보험은 치료비 위주이므로, 소득 손실은 산재로 보전하는 것이 유리합니다.</p>',
      },
      {
        question: '자전거로 배달하는 라이더도 산재 대상인가요?',
        answer:
          '<p>네, 오토바이뿐 아니라 자전거, 전동킥보드 등으로 배달하는 라이더도 플랫폼을 통해 업무를 수행하면 산재보험 적용 대상입니다.</p>',
      },
      {
        question: '배달 앱 두 개를 동시에 사용 중인데 어느 쪽에 산재를 신청하나요?',
        answer:
          '<p>사고 당시 배달 콜을 수락한 앱의 플랫폼에 산재를 신청합니다. 두 앱 모두 콜 수락 상태였다면 주된 업무 수행 앱 기준으로 판단합니다.</p>',
      },
    ],
    cta: { text: '배달라이더 산재 인정 가능성 AI로 즉시 확인하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 대처법', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
      { label: '과실비율 분쟁', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '자전거 보상', href: '/guide/traffic-accident/traffic-accident-bicycle-compensation' },
      { label: '합의 실수 방지', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '무보험 피해자', href: '/guide/traffic-accident/traffic-accident-uninsured-driver-victim' },
    ],
  },

  // ── 교통사고 3. 고속도로 다중추돌 과실비율 기준 ──
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-highway-multi-collision',
    keyword: '고속도로 다중추돌 과실비율',
    questionKeyword: '고속도로 다중추돌 사고에서 과실비율은 어떻게 정해지나요?',
    ctaKeyword: '다중추돌 과실비율 상담',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '고속도로 다중추돌 과실비율 기준 5가지 총정리 | 로앤가이드',
      description:
        '고속도로 다중추돌 사고에 휘말렸다면, 내 과실비율을 줄이는 방법과 보상 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>고속도로에서 앞차가 급정거하여 추돌했고, 뒤차도 연쇄적으로 추돌했습니다. 보험사는 "최초 추돌이 아니면 과실이 있다"고 합니다. 3대 이상이 연쇄추돌한 다중추돌 사고에서 과실비율이 어떻게 결정되는지 확인해보세요.</p>',
    sections: [
      {
        title: '고속도로 다중추돌 과실비율 결정 원칙',
        content:
          '<p><strong style="color:#1e3a5f">다중추돌에서 각 차량의 과실은 추돌 순서, 속도, 안전거리 유지 여부로 결정됩니다.</strong></p>\n<ul>\n<li><strong>최초 추돌 차량</strong> — 가장 높은 과실을 부담합니다(70~100%). 급정거·차선변경 등 원인을 제공한 차량.</li>\n<li><strong>후속 추돌 차량</strong> — 안전거리 미유지로 과실이 인정되지만(20~50%), 최초 추돌 차량보다 낮습니다.</li>\n<li><strong>정차 중 추돌된 차량</strong> — 정상 정차 후 뒤에서 추돌된 경우 과실이 0%에 가깝습니다.</li>\n<li><strong>최초 급정거 원인 차량</strong> — 급정거의 원인이 된 차량(갑작스런 끼어들기 등)이 별도로 있으면 해당 차량에도 과실이 배분됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 다중추돌에서 "내가 뒤에서 부딪혔으니 원칙적으로 내 과실"은 아닙니다. 최초 추돌 원인과 각 차량의 안전거리 유지 여부가 핵심입니다.</blockquote>',
      },
      {
        title: '과실비율에 영향을 미치는 5가지 요소',
        content:
          '<p><strong style="color:#1e3a5f">보험사가 과실을 높게 산정하면, 아래 요소를 근거로 반박하세요.</strong></p>\n<ol>\n<li><strong>안전거리 유지 여부</strong> — 고속도로 법정 안전거리(시속 100km 기준 약 100m)를 유지했으면 과실이 크게 줄어듭니다.</li>\n<li><strong>제동 흔적(스키드 마크)</strong> — 제동 흔적이 있으면 위험을 인지하고 대응했다는 증거입니다.</li>\n<li><strong>날씨·도로 상태</strong> — 우천, 안개, 결빙 등 도로 상태가 불량하면 안전거리 기준이 2배로 늘어납니다.</li>\n<li><strong>속도</strong> — 제한 속도를 초과하면 과실이 가중됩니다. 블랙박스로 속도 확인이 가능합니다.</li>\n<li><strong>차선 변경</strong> — 사고 직전 차선 변경이 있었다면 차선 변경 차량의 과실이 높아집니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>다중추돌 과실비율, AI가 즉시 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">사고 상황과 순서를 입력하면 예상 과실비율을 무료로 확인합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '과실비율을 줄이기 위한 증거 확보 전략',
        content:
          '<p><strong style="color:#1e3a5f">고속도로 사고는 블랙박스와 CCTV가 과실비율을 결정합니다.</strong></p>\n<ul>\n<li><strong>블랙박스 영상 확보</strong> — 내 차량뿐 아니라 앞·뒤 차량의 블랙박스도 확보해야 합니다. 상대방이 거부하면 보험사나 경찰을 통해 요청하세요.</li>\n<li><strong>고속도로 CCTV</strong> — 한국도로공사에 CCTV 영상 보존을 요청하세요. 일정 기간이 지나면 삭제됩니다.</li>\n<li><strong>사고 재구성</strong> — 경찰 사고조사 보고서에 추돌 순서, 차량 위치, 제동 흔적 등이 기록됩니다. 이 보고서가 과실비율 산정의 기초가 됩니다.</li>\n<li><strong>EDR(이벤트 데이터 레코더)</strong> — 차량에 내장된 EDR 데이터로 사고 직전 속도, 브레이크 작동 시점 등을 확인할 수 있습니다.</li>\n</ul>',
      },
      {
        title: '다중추돌 보상 청구 시 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">다중추돌은 관련 차량이 많아 보상 과정이 복잡합니다.</strong></p>\n<ul>\n<li><strong>보험사별 과실 주장 차이</strong> — 각 차량 보험사가 서로 다른 과실비율을 주장할 수 있습니다. 보험사 간 합의가 안 되면 분쟁조정위원회 또는 소송으로 해결합니다.</li>\n<li><strong>자차보험 선처리 후 구상</strong> — 과실비율 확정이 늦어지면 자차보험으로 먼저 수리하고, 확정 후 상대 과실분을 구상받는 방법도 있습니다.</li>\n<li><strong>인적 피해 우선</strong> — 차량 수리비보다 치료비·위자료를 먼저 확보하세요. 치료비는 상대 보험사의 대인배상으로 우선 처리합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 다중추돌은 보험사 간 과실 다툼이 길어질 수 있습니다. 자차보험으로 선처리 후 구상받는 전략도 검토하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주운전 혈중알코올농도 기준과 교통사고 과실',
        summary:
          '대법원 2025도8137 사건(대법원, 2025.12.11 선고)에서 법원은 혈중알코올농도 처벌 기준치 판단에 관하여, 위드마크 공식 적용 시 유리한 조건을 적용해야 한다고 판시했습니다.',
        takeaway:
          '다중추돌 사고에서 상대 차량이 음주운전이었다면 과실비율이 크게 유리해집니다. 경찰 조사에서 상대 음주 여부를 가능한 한 확인하세요.',
      },
    ],
    faq: [
      {
        question: '3대 추돌에서 가운데 차량의 과실은 어떻게 되나요?',
        answer:
          '<p>가운데 차량은 앞차 추돌(전방 과실)과 뒤차에 추돌당한 것(피해)이 분리됩니다. 뒤차의 추돌로 앞으로 밀린 경우 앞차와의 충돌에 대한 과실이 줄어듭니다.</p>',
      },
      {
        question: '고속도로에서 정차 중 추돌당했는데도 과실이 있나요?',
        answer:
          '<p>정상적인 이유(정체, 고장)로 정차했다면 원칙적으로 과실이 0%입니다. 다만 비상등 미점등, 갓길 미이동 등의 사유가 있으면 5~10% 과실이 인정될 수 있습니다.</p>',
      },
      {
        question: '블랙박스가 없으면 과실비율을 다툴 수 없나요?',
        answer:
          '<p>블랙박스 없이도 제동 흔적, 차량 파손 위치, 경찰 사고 보고서, 고속도로 CCTV 등으로 과실비율을 다툴 수 있습니다. 현장 증거를 최대한 확보하세요.</p>',
      },
      {
        question: '다중추돌 보험 처리가 오래 걸리는데 수리비를 먼저 받을 수 있나요?',
        answer:
          '<p>자차보험으로 먼저 수리하고, 과실비율 확정 후 상대 과실분을 구상받을 수 있습니다. 자차보험 할인·할증에 영향이 있으니 보험사와 상의하세요.</p>',
      },
    ],
    cta: { text: '고속도로 다중추돌 과실비율 AI로 즉시 분석하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '과실비율 분쟁', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '후방추돌 과실비율', href: '/guide/traffic-accident/traffic-accident-rear-end-fault-ratio' },
      { label: '합의 실수 방지', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '교통사고 대처법', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
      { label: '무보험 피해자', href: '/guide/traffic-accident/traffic-accident-uninsured-driver-victim' },
    ],
  },
];
