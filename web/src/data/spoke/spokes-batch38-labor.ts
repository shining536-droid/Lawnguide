import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// batch38 노동 10개: 실업 3 + 퇴직 3 + 임금 2 + 해고 2
// ───────────────────────────────────────────────────────────────────────────────

// 고유 존재 이유:
// 1. 퇴직금 수령 후 실업급여까지 받을 수 있는지 궁금한 근로자에게 두 제도의 독립성과 동시 수령 가능성 안내.
// 2. 실업급여 신청이 늦어진 근로자에게 12개월 수급기간 내 남은 일수 계산과 연장 신청 기준 안내.
// 3. 가족 사업장에서 일하다 퇴사한 근로자에게 고용보험 가입·근로자성 입증·비자발 사유 판정 기준 안내.
// 4. 근로자에서 임원으로 승진한 사람에게 근속 합산 여부와 퇴직금 이중 청구 가능성 안내.
// 5. 회사에서 빌린 돈이 있는 퇴직자에게 퇴직금 상계 요건·전액지급 원칙 위배 판단 안내.
// 6. 근로자성이 쟁점인 프리랜서·파견에게 노동위 조정·지위 확인 절차 활용 가이드.
// 7. 식대·교통비 등 정기 지급 수당이 통상임금에 포함되는지 궁금한 근로자에게 임금성 판단 기준 안내.
// 8. 명절·연말 특별수당이 갑자기 끊긴 근로자에게 임금성·불이익 변경·청구 경로 안내.
// 9. 사내연애 이유로 해고당한 근로자에게 인격권 침해·취업규칙 무효 주장 기준 안내.
// 10. 흡연 시간이 길다는 이유로 해고된 근로자에게 비례원칙·업무 공백 입증 책임 안내.

export const spokesBatch38Labor: SpokePage[] = [
  // ─── 1. unemployment / severance-separate-payment ───
  {
    domain: 'unemployment',
    slug: 'unemployment-severance-separate-payment',
    keyword: '퇴직금 받은 후 실업급여 수령 가능',
    questionKeyword: '퇴직금 받았는데 실업급여도 받을 수 있나요?',
    ctaKeyword: '퇴직금·실업급여 동시 수령 확인',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '퇴직금과 실업급여 동시 수령 가능 여부 | 로앤가이드',
      description:
        '퇴직금을 받으면 실업급여가 제한된다는 오해가 많습니다. 두 제도의 독립성과 동시 수령 조건을 지금 확인하세요.',
    },
    intro:
      '<p>퇴사하면서 퇴직금을 받고 나면 "실업급여는 이제 못 받는 것 아니냐"는 잘못된 정보에 혼란을 겪는 경우가 많습니다. 퇴직금은 근로자퇴직급여보장법에 따른 사적 급여이고, 실업급여는 고용보험법상 공적 급여로 제도 성격이 완전히 다릅니다. 두 급여의 독립성과 동시 수령 시 주의할 점을 정리합니다.</p>',
    sections: [
      {
        title: '두 제도의 법적 성격과 독립성',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금과 실업급여는 근거법·목적·지급 주체가 모두 다른 별개 제도이며, 하나를 받았다고 다른 하나의 자격이 사라지지 않습니다.</strong></p>\n<ul>\n<li><strong>퇴직금의 성격</strong> — 근로자퇴직급여보장법에 따라 사용자가 지급하는 사적 급여입니다. 근로자의 장기 근속에 대한 보상입니다.</li>\n<li><strong>실업급여의 성격</strong> — 고용보험법에 따라 국가가 지급하는 공적 급여입니다. 실직 근로자의 생활 안정과 재취업 촉진이 목적입니다.</li>\n<li><strong>지급 주체의 차이</strong> — 퇴직금은 사용자, 실업급여는 고용보험기금(국가)이 지급하므로 재원이 분리됩니다.</li>\n<li><strong>수급 요건 독립</strong> — 실업급여 수급 요건은 비자발적 퇴사·피보험단위기간 180일이며, 퇴직금 수령 여부는 요건에 포함되지 않습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 퇴직금을 받았다는 사실만으로 실업급여가 감액·제한되는 일은 없습니다.</blockquote>',
      },
      {
        title: '퇴직 위로금·명예퇴직금의 영향',
        content:
          '<p><strong style="color:#1e3a5f">회사가 권고사직 조건으로 지급하는 추가 위로금·명예퇴직금도 원칙적으로 실업급여 수급에 영향을 주지 않습니다.</strong></p>\n<ul>\n<li><strong>임금성 없음</strong> — 위로금은 근로의 대가가 아닌 일회성 보상이므로 수급 중 소득 신고 대상이 아닙니다.</li>\n<li><strong>비자발 사유 중요</strong> — 이직확인서의 퇴직 사유가 "권고사직·경영상 해고" 등 비자발로 표기되어야 합니다.</li>\n<li><strong>자진퇴사 위장 주의</strong> — "위로금 주는 대신 자진퇴사로 처리하자"는 협상은 실업급여 자격을 잃게 하므로 수용하면 안 됩니다.</li>\n<li><strong>서면 확보</strong> — 권고사직 합의서·해직 통지서 등 서면 증빙을 가능한 한 남겨두세요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 퇴직금·위로금 수령이 실업급여에 미치는 영향을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '수급 중 취업·근로 시 감액 규정',
        content:
          '<p><strong style="color:#1e3a5f">수급 기간 중 단기 취업·근로 소득이 발생하면 해당 일수만큼 급여가 감액·중단됩니다.</strong></p>\n<ul>\n<li><strong>취업신고 의무</strong> — 고용보험법 제44조: 취업한 날부터는 구직급여를 받을 수 없으며, 가능한 한 고용센터에 취업신고를 해야 합니다.</li>\n<li><strong>단기 알바</strong> — 일용근로·단기 알바도 신고 대상이며, 해당 일수 급여가 부지급 처리됩니다.</li>\n<li><strong>부정수급 제재</strong> — 미신고 시 부정수급으로 최대 5배 추징 + 형사 처벌(1년 이하 징역 또는 300만 원 이하 벌금).</li>\n<li><strong>재취업 성공 시</strong> — 소정급여일수의 1/2 이상 남긴 채 재취업하면 조기재취업수당을 받을 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 퇴직금 수령 자체는 영향 없지만, 수급 중 취업·근로 소득은 가능한 한 신고해야 합니다.</blockquote>',
      },
      {
        title: '신청 절차와 타이밍',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금 정산이 끝났더라도 실업급여는 별도로 신청해야 하며, 퇴사 후 12개월 내 수급 기간을 지켜야 합니다.</strong></p>\n<ul>\n<li><strong>이직확인서 확인</strong> — 고용보험 홈페이지(work.go.kr)에서 회사가 발송한 이직확인서 처리 상태를 확인합니다.</li>\n<li><strong>고용센터 신청</strong> — 거주지 관할 고용센터 방문 또는 온라인으로 구직신청 + 수급자격 신청을 합니다.</li>\n<li><strong>실업인정일 준수</strong> — 최초 실업인정일 이후 4주마다 실업인정을 받으며, 구직활동 실적을 제출합니다.</li>\n<li><strong>수급기간 12개월</strong> — 퇴사 후 12개월이 지나면 남은 일수가 있어도 지급되지 않습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 퇴사일 확정 즉시 고용센터 상담 → 이직확인서 확인 → 구직신청 순서로 진행하는 것이 가장 효율적입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 구직급여의 공공급여 성격 확인',
        summary:
          '대법원 2018두63235 사건(대법원, 2022.10.27 선고)에서 법원은 고용보험법상 구직급여가 실직 근로자의 생활 안정과 재취업 촉진을 목적으로 하는 공공급여로서 일반 소득과 구별되는 성격을 가진다고 판시했습니다.',
        takeaway:
          '구직급여는 사적 급여인 퇴직금과 독립적 제도로 운영되며, 퇴직금 수령 여부와 무관하게 요건만 충족하면 수급할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '자진 퇴사인데 퇴직금 있으면 실업급여 받을 수 있나요?',
        answer:
          '<strong>자진 퇴사는 원칙적으로 실업급여 수급이 제한됩니다.</strong> 퇴직금 수령과 무관하게 자진 퇴사 자체가 자격 요건 미충족입니다. 정당한 사유(임금체불·직장 내 괴롭힘 등)가 있으면 예외 인정 가능.',
      },
      {
        question: '퇴직금 IRP 계좌로 받으면 실업급여 영향 있나요?',
        answer:
          '<strong>영향 없습니다.</strong> IRP는 퇴직금의 수령 방식일 뿐이며, 실업급여 수급 요건과는 무관합니다.',
      },
      {
        question: '명예퇴직금도 신고해야 하나요?',
        answer:
          '<strong>실업인정일에 "근로·사업소득"으로 신고 대상은 아니나, 고용센터 담당자에게 수령 사실을 알려 오해를 방지하는 것이 안전합니다.</strong> 명예퇴직금은 임금성이 없어 감액 사유가 되지 않습니다.',
      },
      {
        question: '퇴직금을 일부만 받았는데 어떻게 하나요?',
        answer:
          '<strong>미지급분은 별도로 노동청 진정·민사 청구로 회수하세요.</strong> 퇴직금 미지급 분쟁과 실업급여 수급은 별개 절차이며 병행 가능합니다.',
      },
      {
        question: '실업급여 수급 중 퇴직금 추가 수령하면 문제되나요?',
        answer:
          '<strong>퇴직금 추가 수령은 수급에 영향이 없습니다.</strong> 근로의 대가가 아닌 기존 권리에 대한 지급이므로 소득 신고 대상이 아닙니다.',
      },
    ],
    cta: {
      text: '퇴직금·실업급여 AI 점검',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 신청 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '자발적 퇴사 실업급여 예외', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '실업급여 부정수급 제재', href: '/guide/unemployment/unemployment-fraud-penalty-response' },
      { label: '조기재취업수당 요건', href: '/guide/unemployment/unemployment-early-reemployment-bonus' },
      { label: '퇴직금 청구 시작 가이드', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
    ],
  },

  // ─── 2. unemployment / late-application-remaining-days ───
  {
    domain: 'unemployment',
    slug: 'unemployment-late-application-remaining-days',
    keyword: '실업급여 늦은 신청 남은 일수',
    questionKeyword: '퇴사 후 한참 뒤에 실업급여 신청하면 남은 일수만 받나요?',
    ctaKeyword: '늦은 신청 실업급여 점검',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '실업급여 늦게 신청하면 받을 수 있는 일수 | 로앤가이드',
      description:
        '퇴사 후 실업급여 신청이 늦어져도 12개월 안이라면 받을 수 있습니다. 기한·연장 사유·잔여 일수 계산을 지금 확인하세요.',
    },
    intro:
      '<p>퇴사한 지 몇 달이 지나서야 실업급여 제도를 알게 되셨거나, 다른 일을 알아보느라 신청을 미루다 늦게 신청하려는 경우가 많습니다. 수급기간 12개월 안이면 남은 일수만이라도 받을 수 있지만, 신청이 늦을수록 손해가 커집니다. 기한 계산 방법·연장 사유·실무 대응 절차를 정리합니다.</p>',
    sections: [
      {
        title: '수급기간 12개월의 법적 근거',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 제48조는 실업급여의 수급기간을 원칙적으로 이직일 다음 날부터 12개월로 규정합니다.</strong></p>\n<ul>\n<li><strong>이직일 기준</strong> — 퇴사한 날(이직일) 다음 날부터 12개월이 기산됩니다. 신청일이 아닌 퇴사일이 기준입니다.</li>\n<li><strong>소정급여일수</strong> — 피보험기간·연령에 따라 120~270일이 지급됩니다. 12개월 안에 이 일수를 모두 받지 못하면 남은 일수는 소멸합니다.</li>\n<li><strong>부분 수령</strong> — 퇴사 8개월 후 신청하면 남은 4개월 안에만 지급되므로 소정급여일수의 일부만 받게 됩니다.</li>\n<li><strong>예시 계산</strong> — 소정급여일수 210일인데 11개월 뒤 신청하면 남은 30일치만 받을 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 신청이 1개월 늦어지면 그만큼 수급 가능 일수가 줄어듭니다. 퇴사 직후 신청이 원칙입니다.</blockquote>',
      },
      {
        title: '수급기간 연장 사유 — 최대 4년까지',
        content:
          '<p><strong style="color:#1e3a5f">질병·부상·임신·출산·육아 등 법정 사유로 구직활동이 어려웠다면 최대 4년까지 수급기간이 연장될 수 있습니다.</strong></p>\n<ul>\n<li><strong>법적 근거</strong> — 고용보험법 시행령 제66조는 연장 사유를 열거합니다.</li>\n<li><strong>연장 사유</strong> — 본인의 질병·부상, 임신·출산·육아, 배우자·직계존비속 간병, 병역 복무 등.</li>\n<li><strong>신청 시점</strong> — 사유 발생일로부터 30일 이내 연장 신청서 제출이 원칙이며, 긴급 상황은 예외 인정 가능.</li>\n<li><strong>증빙 서류</strong> — 진단서·입원확인서·출생증명서·가족관계증명서 등 사유별 입증 자료 필요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 상황의 연장 사유 해당 여부와 남은 일수를 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '이직확인서 처리 지연과 소명',
        content:
          '<p><strong style="color:#1e3a5f">회사의 이직확인서 발급 지연으로 신청이 늦어진 경우에는 사유 소명을 통해 구제받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>이직확인서 의무</strong> — 사업주는 퇴사 후 10일 이내 이직확인서를 근로복지공단에 제출해야 합니다.</li>\n<li><strong>처리 상태 조회</strong> — work.go.kr에서 본인 이직확인서 처리 상태를 직접 조회할 수 있습니다.</li>\n<li><strong>미발급 시 독촉</strong> — 회사에 서면·카톡 등으로 발급 요청하고, 응답이 없으면 근로복지공단(1588-0075)에 신고합니다.</li>\n<li><strong>직권 확인 요청</strong> — 회사가 끝까지 발급하지 않으면 고용센터가 직권으로 사실을 확인할 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이직확인서 독촉 기록(카톡·메일)을 보관해두면 늦은 신청 사유 소명에 유리합니다.</blockquote>',
      },
      {
        title: '실무 대응 — 지금 바로 해야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">신청이 이미 늦어졌다면 하루라도 빨리 움직여야 남은 일수 손실을 최소화할 수 있습니다.</strong></p>\n<ul>\n<li><strong>1단계: 이직확인서 확인</strong> — work.go.kr 또는 고용센터 방문으로 이직확인서 처리 여부 확인.</li>\n<li><strong>2단계: 연장 사유 점검</strong> — 해당하면 연장 신청서·증빙 준비.</li>\n<li><strong>3단계: 수급자격 신청</strong> — 거주지 관할 고용센터에 방문 또는 온라인 신청.</li>\n<li><strong>4단계: 실업인정 즉시 시작</strong> — 대기기간 7일 이후 첫 실업인정일까지 구직활동을 준비합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 수급기간은 연장 사유가 없으면 12개월로 고정되므로, 단 하루라도 빨리 신청하는 것이 중요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 이직일 기준 수급자격·기한 원칙',
        summary:
          '대법원 2018두47264 사건(대법원, 2021.03.18 선고)에서 법원은 구직급여의 수급자격과 청구 기한을 이직일 기준으로 산정해야 하며, 기한 초과 시 정당한 사유 없이는 청구권을 행사할 수 없다고 판시했습니다.',
        takeaway:
          '실업급여 12개월 수급기간은 엄격하게 적용되므로 퇴사 후 즉시 신청이 원칙이며, 늦어진 경우 연장 사유·이직확인서 지연 소명 등 구제 경로를 적극 활용해야 합니다.',
      },
    ],
    faq: [
      {
        question: '퇴사 후 1년이 지났는데 받을 수 있나요?',
        answer:
          '<strong>원칙적으로 12개월 초과 시 지급이 불가합니다.</strong> 다만 연장 사유(질병·출산 등)가 인정되면 최대 4년까지 연장이 가능하므로 해당 여부를 확인하세요.',
      },
      {
        question: '외국에 있었는데 늦은 신청을 소명할 수 있나요?',
        answer:
          '<strong>해외 체류는 일반적으로 연장 사유가 아닙니다.</strong> 다만 업무상 해외 파견이나 긴급 상황이 있었다면 구체적 사정을 입증하면 예외 고려가 가능합니다.',
      },
      {
        question: '연장 신청은 어디서 하나요?',
        answer:
          '<strong>거주지 관할 고용센터에 "수급기간 연장 신청서"를 제출합니다.</strong> 온라인(ei.go.kr)에서도 가능하며 사유별 증빙 서류를 첨부해야 합니다.',
      },
      {
        question: '재취업 후 다시 퇴사하면 남은 일수를 이어서 받나요?',
        answer:
          '<strong>수급 중 재취업 후 다시 실직하면 남은 일수를 수급할 수 있습니다.</strong> 다만 12개월 기산점은 최초 이직일이므로 기간 초과 여부를 확인해야 합니다.',
      },
      {
        question: '대기기간 7일도 수급기간에 포함되나요?',
        answer:
          '<strong>대기기간은 수급일수에 포함되지 않지만 12개월 수급기간 안에서 진행됩니다.</strong> 신청 직후 7일은 급여 지급이 안 되지만 소정급여일수는 그대로 보존됩니다.',
      },
    ],
    cta: {
      text: '늦은 신청 실업급여 AI 점검',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 신청 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '수급기간 연장 사유 정리', href: '/guide/unemployment/benefit-period-extension-cases' },
      { label: '이직확인서 발급 분쟁', href: '/guide/unemployment/unemployment-separation-confirmation-dispute' },
      { label: '늦은 신청 구제 사례', href: '/guide/unemployment/unemployment-late-application-rescue' },
      { label: '실업급여 180일 요건', href: '/guide/unemployment/unemployment-180days-insurance-period-calc' },
    ],
  },

  // ─── 3. unemployment / family-business-eligibility ───
  {
    domain: 'unemployment',
    slug: 'unemployment-family-business-eligibility',
    keyword: '가족 회사 근무 실업급여 자격',
    questionKeyword: '부모·형제 회사에서 일했는데 실업급여 받을 수 있나요?',
    ctaKeyword: '가족 사업장 실업급여 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '가족 회사 근무 후 실업급여 — 자격 요건 총정리 | 로앤가이드',
      description:
        '가족 사업장에서 일한 후 실업급여를 받으려면 고용보험 가입·근로자성 입증이 필요합니다. 요건과 심사 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>부모님·형제가 운영하는 사업장에서 근무하다가 그만둔 경우 실업급여 자격이 있는지 헷갈립니다. 친족근로자도 고용보험에 정상 가입되어 있었고 실질적 근로관계였다면 수급이 가능하지만, 일반 직장보다 심사가 엄격합니다. 자격 요건·입증 자료·심사 포인트를 체계적으로 정리합니다.</p>',
    sections: [
      {
        title: '친족근로자의 고용보험 가입 조건',
        content:
          '<p><strong style="color:#1e3a5f">사업주의 배우자·4촌 이내 친족은 원칙적으로 고용보험 당연가입 대상이 아니지만 특정 요건을 충족하면 임의가입이 가능합니다.</strong></p>\n<ul>\n<li><strong>당연가입 예외</strong> — 고용보험법 시행령 제2조: 사업주의 배우자·4촌 이내 친족은 당연가입 대상에서 제외됩니다.</li>\n<li><strong>임의가입 허용</strong> — 실제 고용관계와 임금 수령이 객관적으로 입증되면 임의 가입이 가능합니다.</li>\n<li><strong>가입 이력 조회</strong> — work.go.kr에서 "피보험자격 이력조회"로 본인의 가입 이력을 확인할 수 있습니다.</li>\n<li><strong>미가입 시 소급 신고</strong> — 실제 근로했는데 미가입이면 근로복지공단에 소급 가입 신청이 가능합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 고용보험 가입 + 보험료 납부 이력이 있어야 실업급여 자격 심사의 출발선에 설 수 있습니다.</blockquote>',
      },
      {
        title: '근로자성 입증 — 실질적 종속관계 요건',
        content:
          '<p><strong style="color:#1e3a5f">가족 사업장에서는 근로자성 판단이 까다롭기 때문에 실질적 종속 관계를 객관적으로 입증해야 합니다.</strong></p>\n<ul>\n<li><strong>출퇴근 관리</strong> — 정해진 시간에 출근·퇴근한 기록이 있어야 합니다.</li>\n<li><strong>업무 지시</strong> — 사업주의 지시·감독 하에 일했음을 입증하는 업무 이메일·카톡·지시문.</li>\n<li><strong>급여 정기 지급</strong> — 매월 일정 금액이 본인 계좌로 이체된 내역. 현금 지급·부정기적 지급은 불리.</li>\n<li><strong>4대보험 가입</strong> — 국민연금·건강보험·고용보험·산재보험 전부 가입 상태.</li>\n<li><strong>업무 독립성 결여</strong> — 본인이 독립 자영업자가 아니라 지시 받아 일한 종속 노동자임.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 상황의 근로자성 입증 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '비자발적 퇴사 사유 입증',
        content:
          '<p><strong style="color:#1e3a5f">가족 회사 퇴사는 허위 처리 의심을 받기 쉽기 때문에 비자발적 사유를 명확히 입증해야 합니다.</strong></p>\n<ul>\n<li><strong>사업장 폐업</strong> — 사업자 등록 말소·폐업 신고서 등 객관적 자료로 입증.</li>\n<li><strong>권고사직</strong> — 권고사직 합의서·해직 통지서에 사유·시기를 명확히 기재.</li>\n<li><strong>경영상 해고</strong> — 경영 악화 자료(재무제표·매출 감소 증빙) 등을 함께 제출.</li>\n<li><strong>이직확인서 사유 코드</strong> — 회사가 발급한 이직확인서에 비자발 사유 코드가 기재되어야 합니다.</li>\n<li><strong>현장 조사 대비</strong> — 고용센터가 사업장 방문 조사를 할 수 있으므로 근무 사실을 입증할 자료를 정리해두세요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "가족이니까 편의를 봐달라"고 자진 퇴사로 기재하면 수급 자격이 박탈됩니다.</blockquote>',
      },
      {
        title: '심사 단계에서 주의할 점',
        content:
          '<p><strong style="color:#1e3a5f">가족 사업장 퇴사자는 일반 근로자보다 심사가 엄격하므로 증빙 자료를 체계적으로 준비해야 합니다.</strong></p>\n<ul>\n<li><strong>담당자 사전 상담</strong> — 신청 전에 고용센터 담당자와 상담해 필요한 서류를 정확히 파악.</li>\n<li><strong>자료 일관성</strong> — 근로계약서·급여 이체·업무 지시 기록이 모두 일관된 내용이어야 합니다.</li>\n<li><strong>허위 진술 금지</strong> — 가족과 짜고 허위 이직 사유를 제출하면 부정수급으로 처벌 대상으로 검토될 수 있습니다.</li>\n<li><strong>불수리 시 이의신청</strong> — 수급자격 불인정 시 90일 이내에 심사청구·재심사청구를 할 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가족 회사 퇴사자는 노무사·변호사 상담을 받은 뒤 신청하는 것이 수급 확률을 높이는 길입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 근로자성 판단의 종합적 기준',
        summary:
          '대법원 2023다54914 사건(대법원, 2026.01.29 선고)에서 법원은 근로자 해당 여부를 판단할 때 "사용자의 지휘·감독 관계, 업무 내용의 귀속, 근로 제공의 독립성 등을 종합적으로 고려해야 한다"고 판시했습니다.',
        takeaway:
          '가족 사업장에서도 지휘·감독 관계가 실질적으로 인정되면 근로자로 보호되어 실업급여 자격이 인정될 수 있으며, 자료 준비와 입증 전략이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '사업주 배우자도 실업급여 받을 수 있나요?',
        answer:
          '<strong>배우자는 원칙적으로 고용보험 당연가입 대상이 아니지만, 임의가입과 근로자성 인정 시 가능합니다.</strong> 일반 직장보다 심사가 엄격하며 자료 준비가 필수입니다.',
      },
      {
        question: '현금으로 급여를 받았으면 불리한가요?',
        answer:
          '<strong>네, 매우 불리합니다.</strong> 계좌 이체 기록이 없으면 근로자성 입증이 어렵습니다. 이체 내역·세금 원천징수·급여명세서 등 간접 증거를 최대한 확보하세요.',
      },
      {
        question: '사업장이 폐업한 경우 증빙 어떻게 하나요?',
        answer:
          '<strong>사업자 등록 말소·폐업 신고서·세무서 폐업 증명서를 제출합니다.</strong> 고용센터는 폐업 사실을 확인한 뒤 비자발적 사유로 인정합니다.',
      },
      {
        question: '고용보험 소급 가입이 가능한가요?',
        answer:
          '<strong>네, 근로 사실 입증 시 소급 가입이 가능합니다.</strong> 근로복지공단(1588-0075)에 신청하며, 근로계약서·급여 이체·세금 원천징수 기록이 필요합니다.',
      },
      {
        question: '수급자격 거부됐는데 이의제기 가능한가요?',
        answer:
          '<strong>네, 결정 통지일로부터 90일 이내에 심사청구가 가능합니다.</strong> 고용보험심사관에게 서면으로 청구하며, 재심사는 고용보험심사위원회에서 진행됩니다.',
      },
    ],
    cta: {
      text: '가족 회사 실업급여 AI 점검',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 신청 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '이직확인서 발급 분쟁', href: '/guide/unemployment/unemployment-separation-confirmation-dispute' },
      { label: '자발적 퇴사 예외 사례', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '근로자성 판단 기준 심화', href: '/guide/dismissal/dismissal-freelancer-worker-status' },
      { label: '실업급여 수급자격 불인정 대응', href: '/guide/unemployment/unemployment-wrongful-denial-appeal-procedure' },
    ],
  },

  // ─── 4. retirement / director-promotion-continuous-service ───
  {
    domain: 'retirement',
    slug: 'retirement-director-promotion-continuous-service',
    keyword: '임원 승진 퇴직금 근속 합산',
    questionKeyword: '근로자에서 임원으로 승진하면 근속연수 합산되나요?',
    ctaKeyword: '임원 승진 퇴직금 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '근로자→임원 승진 시 퇴직금 근속 합산 기준 | 로앤가이드',
      description:
        '임원 승진 시 근로자 기간 퇴직금이 끊기는지 합산되는지 기준을 정리했습니다. 중간정산 유효성과 이중 청구 가능성을 지금 확인하세요.',
    },
    intro:
      '<p>근로자로 오래 일하다가 임원으로 승진한 경우, 회사가 "근로자 기간 퇴직금은 여기서 끝내고 임원으로 새로 시작한다"고 하면 근속 합산 여부가 중요한 쟁점이 됩니다. 대법원은 실질적 근로자 지위가 유지된다면 전체 기간을 합산해야 한다는 입장이며, 중간정산 요건도 엄격하게 해석합니다.</p>',
    sections: [
      {
        title: '근로자성 유지 여부가 핵심 기준',
        content:
          '<p><strong style="color:#1e3a5f">임원 승진 후에도 실질적으로 사용자의 지휘·감독을 받으며 근로를 제공했다면 근로자 지위가 유지된 것으로 보아 전체 기간을 합산해 퇴직금을 산정합니다.</strong></p>\n<ul>\n<li><strong>형식 vs 실질</strong> — 대법원은 이사·감사 등 임원 직함이 있어도 실질 판단을 우선합니다.</li>\n<li><strong>근로자성 인정 사례</strong> — 독자적 경영 판단 없이 대표이사 지시를 받아 업무 수행, 출퇴근 관리 지속, 근태·성과 평가 적용 시.</li>\n<li><strong>근로자성 부정 사례</strong> — 이사회 주요 의사결정권 보유, 독립 경영 판단, 별도 임원 급여 체계 적용 시.</li>\n<li><strong>입증 자료</strong> — 업무 지시 이메일·카톡, 인사명령서, 급여 체계 변동 내역 등.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임원 직함이 아니라 실질적 업무 수행 방식이 퇴직금 근속 합산의 기준입니다.</blockquote>',
      },
      {
        title: '중간정산 요건과 강행규정 위반',
        content:
          '<p><strong style="color:#1e3a5f">근로자퇴직급여보장법 제8조 제2항은 중간정산 사유를 한정적으로 열거하며, "임원 전환"은 법정 사유가 아닙니다.</strong></p>\n<ul>\n<li><strong>법정 사유</strong> — 무주택자 주택 구입, 주거 목적 전세금·보증금, 본인·가족 6개월 이상 요양, 파산·개인회생, 임금피크제 시행 등.</li>\n<li><strong>임원 전환 제외</strong> — 임원 승진은 법정 사유가 아니므로 중간정산 대상이 되지 않습니다.</li>\n<li><strong>강제 중간정산 무효</strong> — 근로자 의사에 반해 강요된 중간정산은 효력이 없으며, 차후 차액 청구 가능.</li>\n<li><strong>합의서 주의</strong> — "과거 근속 포기" 문구가 있는 합의서에 서명했어도 불공정·강박 요소가 있으면 무효 주장 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 임원 승진 시 퇴직금 합산 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '임원 퇴직금의 상법상 별도 요건',
        content:
          '<p><strong style="color:#1e3a5f">등기 임원의 퇴직금은 상법 제388조에 따라 주주총회 결의 또는 정관 규정이 있어야 효력이 있습니다.</strong></p>\n<ul>\n<li><strong>상법 제388조 강행규정</strong> — 이사 보수는 정관에 정하거나 주주총회 결의로 정해야 합니다.</li>\n<li><strong>무효 시 근로자 기간 합산</strong> — 주주총회 결의 없이 정해진 임원퇴직금은 무효가 되므로, 근로자 기간 전체를 합산해 퇴직금을 청구할 수 있습니다.</li>\n<li><strong>이중 청구 가능성</strong> — 실질이 근로자 + 형식이 임원인 경우, 근로자 기간 퇴직금 + 임원 기간 임원퇴직금을 모두 청구할 수 있는 사례도 있습니다.</li>\n<li><strong>주주총회 의사록 확인</strong> — 임원 발령 시 주주총회 결의·정관 개정 여부를 가능한 한 확인하세요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 주주총회 의사록·정관 사본을 미리 확보해 임원 퇴직금 규정의 적법성을 점검하세요.</blockquote>',
      },
      {
        title: '청구 전략과 소멸시효',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금 차액 청구는 노동청 진정·민사소송을 병행하며 3년 시효를 준수해야 합니다.</strong></p>\n<ul>\n<li><strong>1단계: 내용증명</strong> — 정확한 퇴직금 계산 결과와 근거를 회사에 내용증명으로 통지.</li>\n<li><strong>2단계: 노동청 진정</strong> — 근로자 지위 쟁점이 되면 고용노동지청에 임금체불 진정 제기.</li>\n<li><strong>3단계: 지방노동위원회 병행</strong> — 근로자성 자체가 쟁점이면 지방노동위원회에 근로자 지위 확인 신청.</li>\n<li><strong>4단계: 민사소송</strong> — 지급명령·소액사건 심판 또는 일반 민사소송으로 확정판결을 받아 강제집행 준비.</li>\n<li><strong>소멸시효 3년</strong> — 퇴직일부터 3년이 지나면 청구권이 소멸합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 시효 중단을 위해 내용증명+민사 지급명령을 병행하는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 주주총회 없는 이사 보수의 효력',
        summary:
          '대법원 2025다214605 사건(대법원, 2025.12.11 선고)에서 법원은 상법 제388조가 강행규정임을 확인하며, 주주총회 결의 없이 정해진 이사 보수는 효력이 인정되지 않는다고 판시했습니다.',
        takeaway:
          '임원 퇴직금 규정이 주주총회 결의를 거치지 않았다면 무효이며, 이 경우 근로자 기간 퇴직금 전체를 합산해 청구할 수 있는 근거가 됩니다.',
      },
    ],
    faq: [
      {
        question: '직함만 "이사"로 바뀌었는데 근로자로 인정되나요?',
        answer:
          '<strong>실제 업무 수행 방식이 근로자와 동일하면 인정될 수 있습니다.</strong> 형식적 임원 직함은 중요하지 않고, 사용자의 지휘·감독 하에서 일했는지가 핵심입니다.',
      },
      {
        question: '임원 승진 시 "과거 근속 포기" 서명했는데 무효 가능한가요?',
        answer:
          '<strong>강박·기만·불공정 요소가 있으면 무효 주장 가능합니다.</strong> 서명 당시의 구체적 경위·설명 부재 등을 입증하면 효력을 다툴 수 있습니다.',
      },
      {
        question: '중간정산 받은 금액은 돌려줘야 하나요?',
        answer:
          '<strong>중간정산이 무효로 판단되면 회사는 해당 금액을 반환받고 전체 근속을 기준으로 재계산해 차액을 지급합니다.</strong> 근로자에게 반환 의무는 있으나 결국 전체 퇴직금이 더 커지는 경우가 많습니다.',
      },
      {
        question: '이사회 참여만 했어도 근로자성 부정되나요?',
        answer:
          '<strong>참여만으로는 부정되지 않습니다.</strong> 실질적 의사결정권 유무, 업무 지시 수용 여부, 독립성 정도를 종합적으로 판단합니다.',
      },
      {
        question: '임원 퇴직금과 근로자 퇴직금을 모두 받을 수 있나요?',
        answer:
          '<strong>사안에 따라 가능합니다.</strong> 실질 근로자이면서 형식 임원이었고 주주총회 결의된 임원퇴직금 규정이 있으면 이중 청구가 인정된 사례가 있습니다.',
      },
    ],
    cta: {
      text: '임원 승진 퇴직금 AI 점검',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 계산 공식', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '중간정산 요건 정리', href: '/guide/retirement/retirement-interim-settlement-guide' },
      { label: '임원 퇴직금 한도', href: '/guide/retirement/retirement-executive-severance-limit' },
      { label: '근로자성 판단 기준', href: '/guide/dismissal/dismissal-freelancer-worker-status' },
      { label: '퇴직금 재계산 요구', href: '/guide/retirement/retirement-recalculation-wrong-amount' },
    ],
  },

  // ─── 5. retirement / severance-offset-company-loan ───
  {
    domain: 'retirement',
    slug: 'retirement-severance-offset-company-loan',
    keyword: '퇴직금 사내대출 상계 금지',
    questionKeyword: '회사 대출 있는 직원 퇴직금에서 바로 빼도 되나요?',
    ctaKeyword: '퇴직금 상계 적법성 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '퇴직금에서 회사 대출 상계, 합법인가요? | 로앤가이드',
      description:
        '회사가 퇴직금에서 사내 대출을 임의 공제하는 것은 원칙적으로 위법입니다. 전액지급 원칙과 차액 청구 경로를 지금 확인하세요.',
    },
    intro:
      '<p>재직 중 회사로부터 주택자금·연수비·긴급대출을 받은 근로자가 퇴사할 때 회사가 "퇴직금에서 대출을 뺀다"며 일방 공제하는 경우가 있습니다. 이는 원칙적으로 근로기준법의 전액지급 원칙에 위배되며, 근로자의 명시적 동의 없이는 상계할 수 없습니다. 상계 요건·무효 판단·차액 청구 절차를 정리합니다.</p>',
    sections: [
      {
        title: '임금·퇴직금 전액지급 원칙과 강행규정',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제43조는 임금을 "통화·직접·전액·매월 1회 이상·정기일"로 지급하도록 규정하며, 이는 퇴직금에도 동일하게 적용됩니다.</strong></p>\n<ul>\n<li><strong>강행규정</strong> — 제43조는 당사자 합의로 배제할 수 없는 강행규정이며, 위반 시 형사 처벌까지 가능합니다.</li>\n<li><strong>상계 금지 원칙</strong> — 사용자가 근로자 동의 없이 퇴직금에서 임의로 채권을 상계하는 것은 전액지급 원칙 위반입니다.</li>\n<li><strong>관행·약정 무효</strong> — 취업규칙·관행에 "대출금 상계" 조항이 있어도 강행규정에 위배되는 부분은 무효가 될 수 있습니다.</li>\n<li><strong>형사 처벌</strong> — 사용자가 고의로 임금을 전액 지급하지 않으면 3년 이하 징역 또는 3,000만 원 이하 벌금.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 근로자의 자유로운 동의 없이 퇴직금에서 대출금을 공제하는 것은 법 위반입니다.</blockquote>',
      },
      {
        title: '예외적으로 상계가 허용되는 경우',
        content:
          '<p><strong style="color:#1e3a5f">근로자가 자유의사로 명시적 동의를 한 경우에만 상계가 적법하게 이루어질 수 있습니다.</strong></p>\n<ul>\n<li><strong>자유의사 동의</strong> — 근로자가 강박·착오 없이 명확한 의사 표시로 상계에 동의해야 합니다.</li>\n<li><strong>구체성 요건</strong> — 동의서에 공제 금액·시점·방식이 구체적으로 기재되어야 합니다.</li>\n<li><strong>판단 시점</strong> — 퇴직 직전 불리한 상황에서 받은 동의는 자유의사가 결여됐다고 판단될 수 있습니다.</li>\n<li><strong>압류 명령과 구분</strong> — 법원의 압류·전부명령에 따른 상계는 별도의 적법 절차로 허용됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 퇴직금 상계의 적법성을 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '차액 청구 — 대출은 별개 채권으로 분리',
        content:
          '<p><strong style="color:#1e3a5f">회사가 임의 공제한 퇴직금은 여전히 체불 상태이며, 대출금 채권은 별개 민사 청구로 진행해야 합니다.</strong></p>\n<ul>\n<li><strong>퇴직금 체불액 계산</strong> — 실제 퇴직금 전액 - 지급액 = 체불 차액.</li>\n<li><strong>지연이자 20%</strong> — 근로기준법 제37조: 퇴직 14일 이후 미지급 시 연 20% 지연이자 발생.</li>\n<li><strong>회사의 별도 소송 의무</strong> — 대출금은 회사가 별도 민사소송·지급명령으로 청구해야 합니다.</li>\n<li><strong>퇴직금 청구 포기 아님</strong> — 대출 채무가 있다고 해서 퇴직금 청구 자체가 포기되는 것은 아닙니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대출 문제가 걸려 포기하지 마세요. 퇴직금과 대출은 법적으로 완전히 분리된 채권·채무 관계입니다.</blockquote>',
      },
      {
        title: '실무 절차 — 노동청 진정·민사 병행',
        content:
          '<p><strong style="color:#1e3a5f">상계된 퇴직금은 노동청 진정과 민사 지급명령을 병행해 회수하는 것이 가장 효율적입니다.</strong></p>\n<ul>\n<li><strong>1단계: 내용증명</strong> — 공제된 금액의 반환을 요구하는 내용증명을 회사에 발송.</li>\n<li><strong>2단계: 노동청 진정</strong> — 관할 고용노동지청에 임금체불 진정 접수.</li>\n<li><strong>3단계: 민사 지급명령</strong> — 회사가 응하지 않으면 지급명령 신청으로 확정판결과 동일한 효력 확보.</li>\n<li><strong>4단계: 강제집행</strong> — 회사 계좌·부동산에 대한 가압류·강제집행으로 실질 회수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 3년 소멸시효를 지켜야 하며, 시효 중단을 위해 민사 절차를 가능한 한 병행하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임금의 본질과 지급의무 원칙',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 임금이란 "근로자에게 계속적·정기적으로 지급되고 사용자에게 지급의무가 지워져 있는 것"이며 근로의 대가로서 전액 지급되어야 한다고 판시했습니다.',
        takeaway:
          '퇴직금도 임금과 마찬가지로 근로의 대가로서 전액 지급되어야 하며, 사용자의 일방적 공제·상계는 원칙적으로 허용되지 않습니다.',
      },
    ],
    faq: [
      {
        question: '상계 동의서에 서명했는데 취소할 수 있나요?',
        answer:
          '<strong>강박·기망·착오 요소가 있으면 취소 주장이 가능합니다.</strong> 서명 당시 상황과 회사 설명 부족 등을 입증하면 민법상 취소가 인정될 수 있습니다.',
      },
      {
        question: '연수비 반환 약정도 퇴직금에서 상계되나요?',
        answer:
          '<strong>원칙적으로 별도 채권이며 임의 상계는 금지됩니다.</strong> 다만 근로자의 자유의사에 의한 명시적 동의가 있는 경우엔 상계 가능하며, 연수비 반환 약정 자체의 유효성도 별도로 다툴 수 있습니다.',
      },
      {
        question: '가불금이 있으면 퇴직금에서 뺄 수 있나요?',
        answer:
          '<strong>가불금은 이미 지급된 임금의 선지급이므로 공제가 허용되는 경우가 많지만, 실질이 대출이면 상계 금지 원칙이 적용됩니다.</strong> 계약서·약정서 내용에 따라 다릅니다.',
      },
      {
        question: '회사가 대출금을 담보로 퇴직금을 잡아두면 어떻게 하나요?',
        answer:
          '<strong>임의로 잡아두는 것은 위법입니다.</strong> 적법한 담보권이 설정되어 있지 않다면 법원 절차를 거쳐야 하며, 근로자는 노동청에 즉시 진정할 수 있습니다.',
      },
      {
        question: '대출을 안 갚아도 되나요?',
        answer:
          '<strong>대출 채무는 별개로 남아 있습니다.</strong> 퇴직금 청구와 대출 상환은 별도이며, 대출을 갚지 않으면 회사가 별도 민사소송으로 청구할 수 있습니다.',
      },
    ],
    cta: {
      text: '퇴직금 상계 적법성 AI 점검',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 14일 지급 원칙', href: '/guide/retirement/retirement-pay-14day-rule-detail' },
      { label: '퇴직금 지연이자 청구', href: '/guide/retirement/retirement-delay-interest-20percent' },
      { label: '퇴직금 체불 대응 가이드', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '간이대지급금 신청', href: '/guide/retirement/retirement-unpaid-guarantee-fund-simple' },
      { label: '퇴직금 재계산 요구', href: '/guide/retirement/retirement-recalculation-wrong-amount' },
    ],
  },

  // ─── 6. retirement / labor-commission-mediation ───
  {
    domain: 'retirement',
    slug: 'retirement-labor-commission-mediation',
    keyword: '퇴직금 노동위원회 조정',
    questionKeyword: '퇴직금 체불 노동위원회 조정 가능한가요?',
    ctaKeyword: '노동위 조정 활용 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '퇴직금 체불 노동위원회 조정 활용법 | 로앤가이드',
      description:
        '퇴직금 체불 시 노동위원회 조정을 언제·어떻게 활용할지 정리했습니다. 노동청 진정·민사소송과의 차이를 지금 확인하세요.',
    },
    intro:
      '<p>퇴직금 체불 시 대부분 노동청 진정을 떠올리지만 노동위원회 조정도 상황에 따라 효과적인 해결 경로가 됩니다. 특히 근로자성 분쟁이 있거나 사용자와 합의 의지는 있지만 절차 부담으로 지연되는 경우에 적합합니다. 조정·진정·소송의 차이와 병행 전략을 정리합니다.</p>',
    sections: [
      {
        title: '노동위원회의 역할과 퇴직금 분쟁',
        content:
          '<p><strong style="color:#1e3a5f">노동위원회는 부당해고 구제·단체교섭 조정·근로자 지위 확인 등을 담당하며, 개별 권리 분쟁 조정에도 활용될 수 있습니다.</strong></p>\n<ul>\n<li><strong>주요 기능</strong> — 부당해고·부당노동행위 구제, 단체교섭 조정·중재, 임금·근로조건 분쟁 조정.</li>\n<li><strong>근로자 지위 확인</strong> — 프리랜서·파견·도급 관계에서 근로자성 다툼이 있으면 노동위원회 판정이 결정적 역할을 합니다.</li>\n<li><strong>집행력 있는 조정조서</strong> — 조정 성립 시 조정조서에 집행력이 있어 민사 판결과 동일하게 강제집행이 가능합니다.</li>\n<li><strong>관할</strong> — 사업장 소재지 관할 지방노동위원회(서울·경기·부산 등) 신청.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 근로자성 분쟁이 있거나 합의 의지는 있으나 절차 지연이 문제라면 노동위 조정을 고려하세요.</blockquote>',
      },
      {
        title: '노동청 진정과 비교 — 적합한 경우',
        content:
          '<p><strong style="color:#1e3a5f">단순 체불 금액 다툼은 노동청 진정이, 지위·자격 분쟁은 노동위원회가 유리합니다.</strong></p>\n<ul>\n<li><strong>노동청 진정 적합</strong> — 체불 금액·기간이 명확하고, 사용자가 지급 의무 자체는 인정하는 경우.</li>\n<li><strong>노동위원회 조정 적합</strong> — 근로자성이 쟁점(프리랜서·파견 등)이거나, 양측이 조정 의지가 있는 경우.</li>\n<li><strong>진정은 형사 압박</strong> — 노동청 진정 결과 시정 거부 시 형사 입건되므로 사용자에게 압박 효과 큼.</li>\n<li><strong>조정은 자발 합의</strong> — 조정은 강제력이 약해 사용자가 거부하면 조정 불성립할 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 사안에 맞는 절차(노동청 vs 노동위)를 안내해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '조정 신청 절차와 조정조서',
        content:
          '<p><strong style="color:#1e3a5f">노동위원회 조정은 신청서 제출 → 조정위원 배정 → 심문·조정 → 조정조서 작성으로 진행됩니다.</strong></p>\n<ul>\n<li><strong>신청서 작성</strong> — 당사자 정보·분쟁 내용·청구 취지를 정리해 서면으로 제출.</li>\n<li><strong>조정 기일</strong> — 조정위원이 양측 의견을 듣고 합의안을 제시합니다.</li>\n<li><strong>조정 성립</strong> — 양측이 수용하면 조정조서가 작성되고 확정판결과 동일한 효력을 갖습니다.</li>\n<li><strong>조정 불성립</strong> — 합의에 이르지 못하면 노동청 진정·민사소송으로 진행해야 합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 조정조서 작성 시 지급 시기·방식·지연이자·집행 방법까지 구체적으로 기재하세요.</blockquote>',
      },
      {
        title: '병행 전략과 시효 관리',
        content:
          '<p><strong style="color:#1e3a5f">최적 전략은 노동청 진정 + 민사 지급명령 + (필요 시) 노동위 지위 확인을 병행하는 것입니다.</strong></p>\n<ul>\n<li><strong>노동청 진정 먼저</strong> — 체불 사실 공적 인정과 형사 압박.</li>\n<li><strong>민사 지급명령 병행</strong> — 시효 중단과 집행 권원 확보.</li>\n<li><strong>근로자성 쟁점 시 노동위</strong> — 프리랜서·파견 분쟁은 지방노동위원회에 근로자 지위 확인 신청.</li>\n<li><strong>소멸시효 3년</strong> — 퇴직일부터 3년 이내 절차 시작이 원칙.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 노동위 조정만 진행하면서 민사 시효가 지나는 것이 가장 큰 리스크입니다. 병행이 원칙입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 근로자성 판단의 종합 기준',
        summary:
          '대법원 2023다54914 사건(대법원, 2026.01.29 선고)에서 법원은 근로자 판단 시 "사용자의 지휘·감독 관계, 업무 내용의 귀속, 근로 제공의 독립성 등을 종합 고려해야 한다"고 판시했습니다.',
        takeaway:
          '프리랜서·파견 형태로 일한 경우에도 실질적 근로자성이 인정되면 퇴직금 청구가 가능하며, 노동위원회 지위 확인이 결정적 역할을 할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '노동위원회 조정은 무료인가요?',
        answer:
          '<strong>네, 신청 수수료가 없습니다.</strong> 변호사 선임은 별도 비용이 발생하나 본인이 직접 신청·진행도 가능합니다.',
      },
      {
        question: '조정 불성립이면 시간만 낭비 아닌가요?',
        answer:
          '<strong>병행 전략으로 리스크를 최소화할 수 있습니다.</strong> 노동청 진정·민사 지급명령을 동시 진행하면 조정 불성립 시에도 다른 경로로 구제가 진행됩니다.',
      },
      {
        question: '조정조서와 민사 판결의 효력 차이는?',
        answer:
          '<strong>집행력 측면에서 동일합니다.</strong> 조정조서로도 강제집행이 가능하며 민사 판결과 동일한 효력이 인정될 수 있습니다.',
      },
      {
        question: '프리랜서도 노동위원회에 신청 가능한가요?',
        answer:
          '<strong>근로자성 인정 가능성이 있으면 지위 확인 신청이 가능합니다.</strong> 실질적 종속관계 입증 자료를 준비해 신청하세요.',
      },
      {
        question: '사용자가 조정에 응하지 않으면 어떻게 하나요?',
        answer:
          '<strong>조정 불성립으로 종료되며 다른 절차로 진행해야 합니다.</strong> 노동청 진정이나 민사소송으로 전환하며, 이 경우에도 이미 진행한 기록이 증거로 활용됩니다.',
      },
    ],
    cta: {
      text: '노동위 조정 활용 AI 점검',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 청구 노동청 vs 민사', href: '/guide/retirement/retirement-pay-labor-report-vs-civil-claim' },
      { label: '퇴직금 체불 대응 가이드', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '간이대지급금 신청', href: '/guide/retirement/retirement-unpaid-guarantee-fund-simple' },
      { label: '퇴직금 재계산 요구', href: '/guide/retirement/retirement-recalculation-wrong-amount' },
      { label: '근로자성 판단 기준', href: '/guide/dismissal/dismissal-freelancer-worker-status' },
    ],
  },

  // ─── 7. wage / meal-expense-ordinary-wage ───
  {
    domain: 'wage',
    slug: 'wage-meal-expense-ordinary-wage',
    keyword: '식대 통상임금 포함',
    questionKeyword: '식대 10만원 통상임금에 포함되나요?',
    ctaKeyword: '식대 통상임금 포함 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '식대·중식비 통상임금 포함 기준 총정리 | 로앤가이드',
      description:
        '식대가 통상임금에 포함되면 수당·퇴직금이 오릅니다. 정기성·일률성 기준과 차액 청구 방법을 지금 확인하세요.',
    },
    intro:
      '<p>매월 정액으로 받는 식대 10~20만 원이 통상임금에 포함되는지에 따라 연장·야간·휴일수당과 퇴직금이 달라집니다. 대법원은 명칭이 아닌 실질을 기준으로 판단하며, 정기성·일률성이 인정되면 임금으로 봅니다. 판단 기준과 차액 청구 절차를 정리합니다.</p>',
    sections: [
      {
        title: '통상임금의 법적 정의와 식대의 위치',
        content:
          '<p><strong style="color:#1e3a5f">통상임금은 근로자에게 "정기적·일률적·고정적"으로 지급되는 소정근로의 대가이며, 식대가 이 요건을 충족하면 통상임금에 포함됩니다.</strong></p>\n<ul>\n<li><strong>정기성</strong> — 매월 또는 일정 주기로 지급되는 경우.</li>\n<li><strong>일률성</strong> — 모든 근로자 또는 특정 조건을 충족하는 모든 근로자에게 동일 기준으로 지급되는 경우.</li>\n<li><strong>고정성</strong> — 지급 여부·금액이 사전에 확정되어 있는 경우(성과에 따라 변동 X).</li>\n<li><strong>실질 판단</strong> — 대법원은 "식대·중식비" 명칭이 아니라 지급 방식의 실질로 판단합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정기·일률·고정 세 요건이 모두 충족되면 식대도 통상임금에 포함됩니다.</blockquote>',
      },
      {
        title: '실비 변상 vs 임금성 — 지급 방식이 관건',
        content:
          '<p><strong style="color:#1e3a5f">식대가 실비 변상 성격이면 임금에서 제외되지만, 정액 지급이면 임금으로 인정되는 것이 일반적입니다.</strong></p>\n<ul>\n<li><strong>정액·고정 지급</strong> — 매월 10만 원·15만 원 등 정해진 금액을 일률 지급 → 임금으로 인정.</li>\n<li><strong>영수증 정산</strong> — 실제 식사 후 영수증 제출로 보전 → 실비 변상으로 제외.</li>\n<li><strong>출장 시만 지급</strong> — 출장 시 식대만 지급되는 경우 → 실비 변상 가능성 큼.</li>\n<li><strong>근로계약서 문구</strong> — "식대는 임금에 포함하지 않는다"는 조항이 있어도 실질이 정액·일률이면 무효 주장 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 식대의 통상임금 포함 여부를 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '통상임금 변경 시 재계산되는 항목',
        content:
          '<p><strong style="color:#1e3a5f">식대가 통상임금에 포함되면 연장·야간·휴일수당과 퇴직금 평균임금까지 연쇄적으로 올라갑니다.</strong></p>\n<ul>\n<li><strong>연장근로수당</strong> — 통상임금 × 1.5배 × 초과시간 → 식대 포함 시 증가.</li>\n<li><strong>야간·휴일근로수당</strong> — 통상임금 × 0.5배 × 해당시간 → 식대 포함 시 증가.</li>\n<li><strong>연차수당</strong> — 통상임금 기준 연차 미사용 보상 → 식대 포함 시 증가.</li>\n<li><strong>평균임금·퇴직금</strong> — 식대는 평균임금에도 포함되어 퇴직금 계산도 늘어납니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 연 10~30만 원씩 수당 차액이 누적되어 3년이면 100만 원 이상 될 수 있습니다.</blockquote>',
      },
      {
        title: '차액 청구 절차와 시효',
        content:
          '<p><strong style="color:#1e3a5f">식대 미포함으로 과소 지급된 수당·퇴직금은 3년 시효 내 청구 가능합니다.</strong></p>\n<ul>\n<li><strong>1단계: 계산</strong> — 최근 3년치 급여명세서로 통상임금 재계산 + 차액 산정.</li>\n<li><strong>2단계: 회사 요구</strong> — 내용증명으로 차액 지급 요구.</li>\n<li><strong>3단계: 노동청 진정</strong> — 회사 거부 시 임금체불 진정.</li>\n<li><strong>4단계: 민사 지급명령</strong> — 확정판결 확보로 강제집행 가능.</li>\n<li><strong>집단 소송</strong> — 동일 사업장 다수 근로자가 함께 청구하면 승소 가능성이 높아집니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 소멸시효 3년을 놓치지 않도록 시효 중단을 위한 민사 절차를 병행하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임금의 정의와 지급의무의 실질 판단',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 임금이란 "근로자에게 계속적·정기적으로 지급되고 사용자에게 지급의무가 지워져 있는 것"이라고 판시했습니다.',
        takeaway:
          '식대·중식비가 정기·일률적으로 지급된다면 비과세 처리 여부와 무관하게 임금에 해당하며, 통상임금·평균임금 산정 시 포함되어야 합니다.',
      },
    ],
    faq: [
      {
        question: '식대가 비과세인데 임금에 포함되나요?',
        answer:
          '<strong>세법상 비과세와 근로기준법상 임금성은 별개 개념입니다.</strong> 세금이 면제되더라도 정기·일률 지급이면 임금으로 인정될 수 있습니다.',
      },
      {
        question: '식권으로 받는 경우는?',
        answer:
          '<strong>식권도 정액으로 일률 지급되면 임금성이 있습니다.</strong> 다만 실제 식당 이용 시만 사용 가능하고 환산·환급이 안 되면 실비 변상으로 판단될 여지가 있습니다.',
      },
      {
        question: '회사 식당 이용 시 식비 공제되는 경우는?',
        answer:
          '<strong>실비 변상 성격이 강해 임금성이 약합니다.</strong> 다만 본인 선택이 없고 강제 공제라면 임금에서 위법한 공제에 해당할 수 있습니다.',
      },
      {
        question: '신규 입사자에게만 지급되면 임금인가요?',
        answer:
          '<strong>일률성 요건이 약해질 수 있습니다.</strong> 일정 기간·조건을 충족하는 모든 근로자에게 지급되면 일률성이 인정되지만, 자의적 대상 선정이면 부정됩니다.',
      },
      {
        question: '소멸시효 3년이 지난 차액도 받을 수 있나요?',
        answer:
          '<strong>원칙적으로 불가합니다.</strong> 3년 이내의 차액만 청구 가능하며, 시효 중단을 위해 민사 절차를 신속히 시작해야 합니다.',
      },
    ],
    cta: {
      text: '식대 통상임금 AI 점검',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '연장근로수당 계산', href: '/guide/wage/wage-overtime-unpaid-claim' },
      { label: '야간·휴일근로 가산수당', href: '/guide/wage/wage-night-shift-premium-claim' },
      { label: '임금체불 진정 절차', href: '/guide/wage/wage-complaint-full-procedure-timeline' },
      { label: '통상임금 기본 정리', href: '/guide/wage' },
      { label: '포괄임금제 시간외수당', href: '/guide/wage/wage-pogual-fixed-vs-ot-difference' },
    ],
  },

  // ─── 8. wage / holiday-special-pay-claim ───
  {
    domain: 'wage',
    slug: 'wage-holiday-special-pay-claim',
    keyword: '명절 상여금 특별수당 미지급',
    questionKeyword: '매년 받던 명절 상여금 안 주면 청구 가능한가요?',
    ctaKeyword: '특별수당 미지급 청구 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '명절 상여금·특별수당 미지급 시 청구 기준 | 로앤가이드',
      description:
        '매년 받던 명절·연말 특별수당이 갑자기 끊겼다면 임금성 판단과 청구 경로를 정리했습니다. 지금 확인하세요.',
    },
    intro:
      '<p>수년간 빠짐없이 받아오던 명절 상여금이나 연말 특별수당이 올해 갑자기 미지급된다면 임금체불일 수 있습니다. 회사가 "경영 사정"이라며 미지급해도 정기·계속성이 인정되면 임금으로 청구 가능합니다. 임금성 판단·취업규칙 변경 쟁점·청구 절차를 정리합니다.</p>',
    sections: [
      {
        title: '정기 지급된 특별수당의 임금성',
        content:
          '<p><strong style="color:#1e3a5f">여러 해에 걸쳐 동일 시기·동일 비율로 지급돼온 명절 상여금·연말 특별수당은 근로관행·취업규칙에 따른 임금으로 인정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>정기성</strong> — 매년 동일 시기(설·추석·연말)에 반복 지급.</li>\n<li><strong>계속성</strong> — 최소 3~5년 이상 지속된 지급 관행.</li>\n<li><strong>지급의무 인정</strong> — 사용자에게 지급의무가 있음이 관행·규정·단체협약 등으로 확인.</li>\n<li><strong>자유재량 아님</strong> — 지급 기준이 공개되어 있고 지급 여부를 사용자가 임의로 결정하지 못함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 수년간 반복 지급된 특별수당은 "회사 재량 보너스"가 아니라 임금으로 인정될 가능성이 큽니다.</blockquote>',
      },
      {
        title: '일회성·임시 지급과의 구분',
        content:
          '<p><strong style="color:#1e3a5f">단발성 격려금·포상은 임금성이 부정되므로 본인 케이스가 어느 유형인지 정확히 구분해야 합니다.</strong></p>\n<ul>\n<li><strong>일회성 격려금</strong> — 특정 해 성과가 좋아 지급된 보너스. 임금성 없음.</li>\n<li><strong>우수사원 포상</strong> — 특정 대상자에게만 지급되는 포상. 일률성 결여.</li>\n<li><strong>명절 위로금</strong> — 명절 기준 매년 반복·전 직원 지급이면 임금성 인정 가능성 높음.</li>\n<li><strong>구분 포인트</strong> — 지급 기준 공개 여부, 지급 결정 시점, 지급 이력의 지속성.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 특별수당의 임금성 여부를 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '취업규칙 변경 — 불이익 변경은 제한됨',
        content:
          '<p><strong style="color:#1e3a5f">회사가 취업규칙을 개정해 특별수당을 축소·폐지했다면 불이익 변경에 해당하며 근로자 과반수 동의가 필요합니다.</strong></p>\n<ul>\n<li><strong>근로기준법 제94조</strong> — 취업규칙 불이익 변경 시 근로자 과반수 동의(노동조합 있으면 노조 동의) 필요.</li>\n<li><strong>동의 없는 변경 무효</strong> — 과반수 동의 없이 일방 개정된 부분은 효력이 없습니다.</li>\n<li><strong>사회통념상 합리성</strong> — 예외적으로 사회통념상 합리성이 인정되는 경우에만 동의 없어도 유효하나 엄격하게 해석됩니다.</li>\n<li><strong>기존 근로자 적용</strong> — 변경 전 근로자에게는 기존 조항이 그대로 적용된다는 판례 경향.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 묵시적 동의로 간주되지 않도록 변경 반대 의사를 서면으로 명확히 표현하세요.</blockquote>',
      },
      {
        title: '청구 절차와 시효',
        content:
          '<p><strong style="color:#1e3a5f">미지급 특별수당은 임금체불로 간주되어 3년 시효 내 청구 가능합니다.</strong></p>\n<ul>\n<li><strong>1단계: 과거 내역 정리</strong> — 최근 3~5년간 지급 내역·지급 시기·금액을 정리해 정기성 입증.</li>\n<li><strong>2단계: 내용증명</strong> — 임금성 근거·미지급액을 명시한 내용증명 발송.</li>\n<li><strong>3단계: 노동청 진정</strong> — 관할 고용노동지청에 임금체불 진정 접수.</li>\n<li><strong>4단계: 민사 지급명령</strong> — 시효 중단과 집행 권원 확보.</li>\n<li><strong>집단 청구</strong> — 동일 사업장 근로자 다수가 함께 청구하면 승소 가능성이 높아집니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사 내부 공지·과거 지급 엑셀·급여명세서 등 증거를 체계적으로 보관하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 기업 관행의 근로계약 내용 인정 요건',
        summary:
          '대법원 2022다255454 사건(대법원, 2026.01.29 선고)에서 법원은 기업 관행이 근로계약 내용으로 인정되려면 "규범적 사실로 명확히 승인되거나 구성원에 의해 당연한 것으로 받아들여져 사실상의 제도로 확립"되어야 한다고 판시했습니다.',
        takeaway:
          '매년 동일 시기에 반복 지급된 명절 상여금이 사내 관행으로 정착됐다면 회사가 일방적으로 미지급할 수 없으며, 근로자는 임금으로 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '3년 전까지 받았는데 그 이후 안 받은 금액 청구 가능한가요?',
        answer:
          '<strong>소멸시효 3년 안의 미지급분은 청구 가능합니다.</strong> 단 정기성·계속성 입증이 필요하며, 과거 지급 이력이 짧으면 관행 인정이 어려울 수 있습니다.',
      },
      {
        question: '취업규칙에 "경영 사정으로 변경 가능" 조항이 있으면 미지급 정당한가요?',
        answer:
          '<strong>조항이 있어도 근로자 과반수 동의 없이 불이익 변경은 무효입니다.</strong> 근로기준법 제94조의 강행규정에 어긋나므로 미지급은 체불로 청구 가능합니다.',
      },
      {
        question: '노동조합 합의로 미지급됐으면 어떻게 되나요?',
        answer:
          '<strong>적법한 절차로 노조가 동의한 경우엔 유효할 수 있습니다.</strong> 그러나 노조원이 아닌 근로자나 의견 반영이 부족했던 근로자는 개별 다툼이 가능합니다.',
      },
      {
        question: '이직 후에도 청구 가능한가요?',
        answer:
          '<strong>네, 재직 여부와 무관하게 3년 시효 내 청구 가능합니다.</strong> 이직 후라도 과거 재직 기간의 미지급 수당은 청구권이 유지됩니다.',
      },
      {
        question: '특별수당이 통상임금에도 포함되나요?',
        answer:
          '<strong>정기·일률·고정성이 인정되면 통상임금에도 포함됩니다.</strong> 그 경우 다른 수당 계산 기준이 바뀌므로 별도 재계산이 필요합니다.',
      },
    ],
    cta: {
      text: '특별수당 미지급 AI 점검',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '정기 상여금 통상임금 포함', href: '/guide/wage' },
      { label: '임금체불 진정 절차', href: '/guide/wage/wage-complaint-full-procedure-timeline' },
      { label: '취업규칙 불이익 변경', href: '/guide/wage/wage-employment-rule-change-unfavorable' },
      { label: '식대 통상임금 포함', href: '/guide/wage/wage-meal-expense-ordinary-wage' },
      { label: '퇴직금 상여금 포함', href: '/guide/retirement/retirement-bonus-included-calculation' },
    ],
  },

  // ─── 9. dismissal / office-romance-unlawful ───
  {
    domain: 'dismissal',
    slug: 'dismissal-office-romance-unlawful',
    keyword: '사내연애 해고 부당성',
    questionKeyword: '사내연애로 해고됐는데 부당해고 주장 가능한가요?',
    ctaKeyword: '사내연애 해고 부당성 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '사내연애 해고 부당성 판단 기준 총정리 | 로앤가이드',
      description:
        '사내연애를 이유로 해고됐다면 인격권 침해·취업규칙 무효 등 부당해고 주장이 가능합니다. 판단 기준을 지금 확인하세요.',
    },
    intro:
      '<p>회사 동료와 사귀다가 알려졌다는 이유로 해고 통보를 받으면 당황스럽고 억울합니다. 사내연애 자체는 개인의 사생활 영역이며 헌법상 인격권·행복추구권으로 보호됩니다. 해고 정당성 판단 기준, 취업규칙 무효 가능성, 이해상충 상황의 예외를 정리합니다.</p>',
    sections: [
      {
        title: '사내연애의 법적 성격 — 인격권 보호',
        content:
          '<p><strong style="color:#1e3a5f">연애는 헌법이 보호하는 사생활·인격권의 영역으로, 업무와 직접적 관련이 없는 한 해고 사유로 인정되기 어렵습니다.</strong></p>\n<ul>\n<li><strong>헌법 제10조</strong> — 인간의 존엄과 행복추구권으로 사생활 자유가 보호됩니다.</li>\n<li><strong>헌법 제17조</strong> — 사생활 비밀과 자유가 침해받지 않을 권리.</li>\n<li><strong>근로기준법 제23조</strong> — 해고에는 "정당한 이유"가 필요하며, 사회통념상 고용관계 유지가 불가능할 정도여야 합니다.</li>\n<li><strong>판례 경향</strong> — 사내연애 자체를 이유로 한 해고는 인격권 침해로 정당성이 부정되는 경향.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 연애는 기본권이며, 업무 지장이 구체적으로 입증되지 않으면 해고 사유가 되기 어렵습니다.</blockquote>',
      },
      {
        title: '사내연애 금지 취업규칙의 무효 가능성',
        content:
          '<p><strong style="color:#1e3a5f">일부 회사의 "사내연애 금지"·"부부 직원 중 1명 퇴사" 규정은 인격권·혼인의 자유를 과도하게 제한하여 무효가 될 수 있습니다.</strong></p>\n<ul>\n<li><strong>공서양속 위반</strong> — 민법 제103조: 사회질서에 반하는 법률행위는 무효.</li>\n<li><strong>근로기준법 위반</strong> — 헌법상 보호되는 기본권을 과도하게 제한하는 취업규칙은 근로기준법에 위배.</li>\n<li><strong>판례 태도</strong> — 대법원은 사내연애 금지·부부 중 1인 퇴사 규정을 무효로 본 사례가 다수.</li>\n<li><strong>특수 직군 예외</strong> — 공무원·군인 등 직무 특성상 필요한 제한은 일부 예외 인정될 수 있음.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 케이스의 해고 무효 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '상사-부하 관계의 예외적 고려',
        content:
          '<p><strong style="color:#1e3a5f">같은 부서 상사-부하 간 연애는 업무 공정성·이해상충 문제로 일부 제한이 정당화될 수 있지만, 곧바로 해고는 비례의 원칙 위반입니다.</strong></p>\n<ul>\n<li><strong>이해상충</strong> — 평가·승진 결정권을 가진 상사와 부하 간 연애는 공정성 훼손 가능성.</li>\n<li><strong>덜 가혹한 조치 우선</strong> — 부서 이동·직무 분리 등 경한 조치로 해결 가능하면 해고는 과잉 징계.</li>\n<li><strong>공개·신고 의무</strong> — 회사가 사전에 "관계 공개 의무"를 규정하고 공개 기회를 줬다면 일부 정당성 인정.</li>\n<li><strong>증거 요건</strong> — 업무 지장·공정성 훼손이 구체적으로 입증되어야 함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상하관계 연애라면 회사에 먼저 "부서 이동·직무 분리"를 제안해 해고를 피하는 것이 실무적입니다.</blockquote>',
      },
      {
        title: '부당해고 구제 절차',
        content:
          '<p><strong style="color:#1e3a5f">해고 통지일로부터 3개월 이내에 지방노동위원회에 부당해고 구제신청을 해야 합니다.</strong></p>\n<ul>\n<li><strong>기한 3개월</strong> — 근로기준법 제28조: 해고일부터 3개월 초과 시 구제 불가.</li>\n<li><strong>증거 확보</strong> — 해고 통지서, 사유서, 취업규칙 조항, 업무 성과 자료 등.</li>\n<li><strong>구제 신청서</strong> — 사업장 소재지 관할 지방노동위원회에 제출.</li>\n<li><strong>인용 효과</strong> — 원직복직 + 해고 기간 임금 상당액 지급. 복직 불가능 시 금전보상.</li>\n<li><strong>민사 별도 병행</strong> — 인격권 침해 손해배상도 별도로 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 3개월 기한은 제척기간으로 엄격히 적용되므로 통지 직후 즉시 상담을 받고 절차를 시작하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 근로자 지위 판단의 종합적 기준',
        summary:
          '대법원 2023다54914 사건(대법원, 2026.01.29 선고)에서 법원은 근로자 해당 여부를 판단할 때 "사용자의 지휘·감독 관계, 업무 내용의 귀속, 근로 제공의 독립성 등을 종합적으로 고려해야 한다"고 판시했습니다.',
        takeaway:
          '사내연애와 같은 사적 영역은 사용자의 지휘·감독 밖에 있으므로 업무에 구체적 지장이 입증되지 않으면 해고 사유가 되기 어렵습니다.',
      },
    ],
    faq: [
      {
        question: '부부가 같은 회사에 다니면 1명 퇴사해야 하나요?',
        answer:
          '<strong>일방 퇴사 강요는 헌법상 혼인의 자유 침해로 원칙적으로 무효입니다.</strong> 특수 직군 예외를 제외하면 강제할 수 없습니다.',
      },
      {
        question: '사내연애 사실을 숨겨서 해고됐으면 정당한가요?',
        answer:
          '<strong>회사가 공개 의무를 사전에 명시했고 이를 위반한 경우 일부 정당성이 인정될 수 있으나, 곧바로 해고는 과잉 징계입니다.</strong> 경고·부서이동 등 경한 조치가 우선입니다.',
      },
      {
        question: '상사와 연애 중인데 해고 위험이 있나요?',
        answer:
          '<strong>이해상충 가능성이 있어 부서이동·직무분리를 먼저 검토해야 합니다.</strong> 회사에 선제적으로 관계 공개와 대안을 제안하면 해고 리스크를 줄일 수 있습니다.',
      },
      {
        question: '사내연애 때문에 왕따 당하고 해고되면 어떻게 하나요?',
        answer:
          '<strong>직장 내 괴롭힘으로 별도 대응 + 부당해고 구제신청을 병행할 수 있습니다.</strong> 근로기준법 제76조의2 위반과 부당해고 이중 쟁점이 됩니다.',
      },
      {
        question: '노동위원회 판정 불복 시 어떻게 하나요?',
        answer:
          '<strong>중앙노동위원회 재심 → 행정소송으로 이어집니다.</strong> 각 단계별 15일·30일 기한이 있으므로 즉시 대응해야 합니다.',
      },
    ],
    cta: {
      text: '사내연애 해고 AI 점검',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '부당해고 구제신청 가이드', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
      { label: '해고 서면통지 요건', href: '/guide/dismissal/dismissal-nonface-notification-validity' },
      { label: '징계 절차 하자 부당해고', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '직장 내 괴롭힘 해고 대응', href: '/guide/dismissal/dismissal-bullying-report-retaliation' },
      { label: '해고 사유서 요청 방법', href: '/guide/dismissal/dismissal-reason-request-template' },
    ],
  },

  // ─── 10. dismissal / smoking-performance-quit ───
  {
    domain: 'dismissal',
    slug: 'dismissal-smoking-break-performance',
    keyword: '흡연 시간 해고 정당성',
    questionKeyword: '흡연 시간이 많다고 해고됐는데 부당해고인가요?',
    ctaKeyword: '흡연 해고 부당성 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '흡연 시간 과다 해고, 정당할까요? | 로앤가이드',
      description:
        '흡연을 이유로 한 해고의 정당성 판단 기준과 부당해고 구제 절차를 정리했습니다. 비례원칙·업무 공백 입증을 지금 확인하세요.',
    },
    intro:
      '<p>"담배 피우러 자주 자리를 비운다"는 이유로 해고 통보를 받으면 당혹스럽습니다. 흡연 자체는 법적 금지 행위가 아니며, 해고가 정당하려면 업무 공백·실적 저하 등 구체적 피해가 입증되어야 합니다. 비례원칙·절차 하자·구제 절차를 정리합니다.</p>',
    sections: [
      {
        title: '흡연 자체의 법적 성격과 해고 사유',
        content:
          '<p><strong style="color:#1e3a5f">흡연은 법적으로 금지된 행위가 아니므로 그 자체가 해고 사유로 인정되지는 않습니다.</strong></p>\n<ul>\n<li><strong>흡연의 합법성</strong> — 국민건강증진법 등으로 금연 구역이 지정되지만, 지정 구역 외 흡연은 합법.</li>\n<li><strong>해고의 정당 사유</strong> — 근로기준법 제23조: "정당한 이유" 필요. 사회통념상 고용 유지 불가 정도여야 함.</li>\n<li><strong>업무 공백 입증</strong> — "흡연이 많아 업무에 지장을 줬다"는 구체적 입증이 필요함.</li>\n<li><strong>업무 성과와의 관계</strong> — 본인 업무 실적이 정상 범주라면 흡연 시간을 이유로 한 해고는 부당.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 흡연 자체가 아니라 업무 공백·실적 저하가 해고 사유의 실질입니다.</blockquote>',
      },
      {
        title: '비례의 원칙 — 덜 가혹한 조치 우선',
        content:
          '<p><strong style="color:#1e3a5f">경고·감봉·정직 등 덜 가혹한 조치로 해결 가능하면 곧바로 해고는 비례의 원칙 위반입니다.</strong></p>\n<ul>\n<li><strong>징계 단계</strong> — 취업규칙에 정해진 징계 단계(경고→견책→감봉→정직→해고) 준수 여부 확인.</li>\n<li><strong>개선 기회 부여</strong> — 사전 서면 경고와 개선 기간 부여 없이 바로 해고하면 과잉 징계.</li>\n<li><strong>평등 처분 원칙</strong> — 같은 비위를 한 다른 직원은 경고만 받았는데 본인만 해고됐다면 부당해고 가능성 큼.</li>\n<li><strong>사회통념 기준</strong> — 흡연 시간이 사회통념상 용인되는 수준을 크게 넘어야 해고 정당성 검토 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 흡연 해고의 부당성 여부를 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '절차 하자 — 서면통지·소명 기회',
        content:
          '<p><strong style="color:#1e3a5f">해고 사유가 정당해도 절차를 지키지 않으면 무효가 됩니다.</strong></p>\n<ul>\n<li><strong>서면 통지 의무</strong> — 근로기준법 제27조: 해고 사유와 시기를 서면으로 통지해야 효력 발생.</li>\n<li><strong>인사위원회·소명 기회</strong> — 취업규칙에 절차가 있으면 가능한 한 준수해야 함.</li>\n<li><strong>해고 예고</strong> — 3개월 이상 근속자는 30일 전 예고 또는 30일분 해고예고수당 지급.</li>\n<li><strong>사유 구체성</strong> — "근태 불량" 같은 추상적 사유는 부족. 구체적 일시·행위 기재 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 해고 통지 즉시 "해고 사유서" 서면 교부를 요청하고 미수령 시 증거로 남기세요.</blockquote>',
      },
      {
        title: '구제 절차와 증거 준비',
        content:
          '<p><strong style="color:#1e3a5f">해고 통지일로부터 3개월 이내 지방노동위원회에 부당해고 구제신청을 해야 합니다.</strong></p>\n<ul>\n<li><strong>기한 3개월</strong> — 제척기간으로 엄격 적용.</li>\n<li><strong>필수 증거</strong> — 해고 통지서, 사유서, 취업규칙 사본, 업무 실적 자료, 사전 경고 기록.</li>\n<li><strong>동료 진술</strong> — 다른 직원의 흡연 시간과 비교하는 진술서가 평등 처분 원칙 입증에 도움.</li>\n<li><strong>인용 효과</strong> — 원직복직 + 해고 기간 임금 상당액 지급. 복직 불가능 시 금전보상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 해고 직후 업무 성과·기여도 증빙 자료를 회사에 남아 있는 동안 확보해두세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 금전보상 방법의 구제 가능성',
        summary:
          '대법원 2025두33276 사건(대법원, 2025.10.16 선고)에서 법원은 부당해고 구제신청 시 정년 도달이나 근로계약 기간 만료로 원직복직이 불가능한 경우에도 금전보상 방법에 의한 구제가 가능하다고 판시했습니다.',
        takeaway:
          '흡연 해고 후 재취업 상황에서도 구제신청 시점만 놓치지 않으면 금전보상 명령으로 실질적 회복이 가능합니다.',
      },
    ],
    faq: [
      {
        question: '몇 번 지적받고 바로 해고는 부당한가요?',
        answer:
          '<strong>서면 경고·개선 기간 없이 바로 해고한 경우 과잉 징계로 부당해고 가능성이 큽니다.</strong> 취업규칙상 징계 단계 준수 여부를 확인하세요.',
      },
      {
        question: '다른 흡연 직원은 계속 근무 중이면 어떻게 되나요?',
        answer:
          '<strong>평등 처분 원칙 위반으로 강력한 부당해고 근거가 됩니다.</strong> 동료의 흡연 빈도·업무 성과와 본인의 차이를 비교해 진술서를 확보하세요.',
      },
      {
        question: '흡연실이 멀어서 시간이 오래 걸린다면?',
        answer:
          '<strong>회사의 근무 환경 요인이 반영되어야 하며, 근로자 귀책으로만 돌릴 수 없습니다.</strong> 작업 동선·흡연실 위치 등을 고려해야 합니다.',
      },
      {
        question: '회사가 전자 담배 흡연실 이용을 금지한 경우는?',
        answer:
          '<strong>사업장 내 흡연 전면 금지는 적법하나, 이로 인한 업무 방식 변경은 합리적 조정이 필요합니다.</strong> 일방적 징계는 정당성이 제한될 수 있습니다.',
      },
      {
        question: '구제신청 결과가 나오기까지 얼마나 걸리나요?',
        answer:
          '<strong>초심 판정까지 보통 2~4개월 소요됩니다.</strong> 중앙노동위원회 재심·행정소송까지 가면 1~2년 이상 걸릴 수 있습니다.',
      },
    ],
    cta: {
      text: '흡연 해고 부당성 AI 점검',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '부당해고 구제신청 가이드', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
      { label: '해고 서면통지 요건', href: '/guide/dismissal/dismissal-nonface-notification-validity' },
      { label: '근태 불량 해고 정당성', href: '/guide/dismissal/dismissal-tardiness-repeated-discipline' },
      { label: '해고예고수당 계산', href: '/guide/dismissal/dismissal-notice-pay-calculation' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
    ],
  },
];
