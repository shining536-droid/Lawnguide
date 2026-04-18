import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// batch37 노동 8개: 실업 2 + 퇴직 2 + 임금 2 + 해고 2
// ───────────────────────────────────────────────────────────────────────────────

// 고유 존재 이유:
// 1. 실업급여 180일 피보험단위기간 요건을 정확히 계산하려는 근로자에게 역산 기준과 합산 방법을 안내한다.
// 2. 실업급여 수급 중 임신·출산한 근로자에게 수급 기간 연장 신청과 재개 절차를 안내한다.
// 3. 체불 퇴직금을 국가 대지급금으로 먼저 지급받으려는 근로자에게 간이대지급금 요건·한도·절차를 안내한다.
// 4. 퇴직금이 잘못 계산된 근로자에게 재계산 기준과 차액 청구 경로를 안내한다.
// 5. 출장 시간이 근로시간으로 인정되는지 궁금한 근로자에게 판단 기준과 수당 청구 방법을 안내한다.
// 6. 회사 안팎 대기·이동 시간이 임금에 포함되는지 궁금한 근로자에게 근로시간 편입 기준을 안내한다.
// 7. SNS에 회사 비판 글을 올린 후 해고 통보를 받은 근로자에게 정당성 판단 기준을 안내한다.
// 8. 지각·결근 반복으로 해고된 근로자에게 정당성·절차 하자 여부를 판단하는 기준을 안내한다.

export const spokesBatch37Labor: SpokePage[] = [
  // ─── 1. unemployment / 180-days-insurance-period-calc ───
  {
    domain: 'unemployment',
    slug: 'unemployment-180days-insurance-period-calc',
    keyword: '실업급여 180일 피보험단위기간 계산',
    questionKeyword: '실업급여 180일 어떻게 계산하나요?',
    ctaKeyword: '실업급여 180일 요건 점검',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '실업급여 180일 피보험단위기간 정확히 계산하는 법 | 로앤가이드',
      description:
        '실업급여 180일은 어떻게 계산할까요? 이직일 이전 18개월 기준 역산, 유급일 산정, 여러 회사 합산 규정을 지금 확인하세요.',
    },
    intro:
      '<p>실업급여를 신청하려는데 "180일 이상 일해야 한다"는 조건이 걸립니다. 달력상 6개월이면 180일 같지만 실제 계산은 다릅니다. 피보험단위기간이라는 개념부터, 유급 처리된 날만 세는 방법, 여러 회사 근무 이력을 합산하는 규정까지 정확히 알아야 헛걸음을 줄일 수 있습니다. 고용보험법 제40조에 따른 수급 요건을 기준으로 정리해드립니다.</p>',
    sections: [
      {
        title: '180일 요건의 법적 근거와 기산점',
        content:
          '<p><strong style="color:#1e3a5f">실업급여(구직급여)는 이직일 이전 18개월 동안 피보험단위기간이 통산 180일 이상이어야 수급 자격이 인정됩니다.</strong></p>\n<ul>\n<li><strong>법적 근거</strong> — 고용보험법 제40조 제1항 제1호는 이직일 이전 18개월간 피보험단위기간 180일 이상을 구직급여 수급요건으로 규정합니다.</li>\n<li><strong>기산점은 이직일</strong> — 신청일이 아니라 퇴사한 날(이직일)이 기준입니다. 이직일로부터 18개월을 역산해 그 기간 내 피보험단위기간을 계산합니다.</li>\n<li><strong>피보험단위기간의 정의</strong> — 고용보험에 가입된 상태에서 임금을 지급받은 날로, 단순 재직일과 다릅니다. 무급 휴직일·결근일은 제외됩니다.</li>\n<li><strong>18개월의 연장</strong> — 질병·부상·임신·출산 등으로 근로를 제공할 수 없었던 기간이 30일 이상이면 그 일수만큼 18개월이 연장될 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 퇴사일 기준으로 역산 18개월 안에 유급으로 일한 날이 통산 180일 이상이어야 신청 가능합니다.</blockquote>',
      },
      {
        title: '유급일 산정 방식 — 주휴일·연차·공휴일도 포함',
        content:
          '<p><strong style="color:#1e3a5f">피보험단위기간은 실제 출근일이 아니라 유급 처리된 모든 날을 합산합니다.</strong></p>\n<ul>\n<li><strong>주 5일 근무자의 유급일</strong> — 주 5일 출근자도 주휴일(보통 일요일)이 유급으로 처리되므로 주 6일이 피보험단위기간으로 인정됩니다.</li>\n<li><strong>연차·공가 포함</strong> — 연차휴가·공가·출산휴가 등 유급으로 처리된 모든 날이 포함됩니다.</li>\n<li><strong>환산 기준</strong> — 주 5일 근무자는 약 30주(7개월)면 180일이 차며, 단시간 근로자는 주 소정근로시간 비례로 계산됩니다.</li>\n<li><strong>제외되는 날</strong> — 무급 휴직, 무급 결근, 주 15시간 미만 단시간 근로일은 제외되거나 감액 계산됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인의 180일 요건 충족 여부를 유급일 기준으로 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '여러 회사 근무 이력 합산 규칙',
        content:
          '<p><strong style="color:#1e3a5f">한 회사에서 180일을 채우지 못했다면 이전 직장 근무일과 합산해 수급 자격을 인정받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>합산 원칙</strong> — 직전 수급자격 인정 이후 새로 발생한 피보험 기간이 대상입니다. 이전에 실업급여를 받았다면 그 이전 이력은 합산에서 제외됩니다.</li>\n<li><strong>고용보험 가입 필수</strong> — 각 사업장에서 고용보험이 정상 가입되어 있어야 합니다. 미가입 기간은 소급 신고를 통해 인정받아야 합니다.</li>\n<li><strong>공백 기간 영향 없음</strong> — 직장 사이의 공백 기간 자체는 합산에 영향을 주지 않습니다. 다만 18개월 역산 범위를 벗어나면 합산이 안 됩니다.</li>\n<li><strong>단시간 근로자 합산</strong> — 주 15시간 미만 근로자도 2024년 개정으로 일부 합산 가능하지만, 총 피보험 기간이 24개월 이상이어야 합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이전 직장이 4대보험 미가입이었다면 근로복지공단(1588-0075)에 소급 신고를 요청해 피보험 기간을 회복하세요.</blockquote>',
      },
      {
        title: '180일이 안 채워질 때의 대안',
        content:
          '<p><strong style="color:#1e3a5f">180일이 모자란 경우에도 예외 규정이나 특례가 적용될 수 있으니 포기하지 말고 정확히 확인해야 합니다.</strong></p>\n<ul>\n<li><strong>건설일용근로자 특례</strong> — 일용근로자는 이직 전 신청일 기준으로 다른 기준이 적용되므로, 건설업 종사자는 별도 상담이 필요합니다.</li>\n<li><strong>예술인·특수형태근로자</strong> — 예술인·특수고용직은 고용보험 적용 기준이 다르므로 자격 조회 시 확인이 필요합니다.</li>\n<li><strong>재직 중 소급 가입</strong> — 회사가 고용보험 미가입 상태였다면 근로복지공단에 소급 가입 신청을 해 피보험 기간을 확보할 수 있습니다.</li>\n<li><strong>이직 연기 검토</strong> — 퇴사가 아직 확정되지 않았다면 며칠 더 일해 180일을 채우는 것이 실업급여 수급 측면에서 유리합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 피보험 이력은 고용보험 홈페이지(work.go.kr)에서 "피보험자격 이력조회"로 직접 확인 가능합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 구직급여 수급자격의 이직일 기준 원칙',
        summary:
          '대법원 2018두47264 사건(대법원, 2021.03.18 선고)에서 법원은 고용보험법상 구직급여 청구권의 수급자격 판단은 이직일을 기준으로 하며, 이직일을 기준으로 피보험단위기간과 수급기간이 계산된다는 원칙을 확인했습니다.',
        takeaway:
          '180일 요건 충족 여부는 반드시 퇴사일(이직일)을 기준으로 역산 18개월 내 유급일을 합산해 판단해야 하며, 퇴사 전 재직 이력의 고용보험 가입 여부를 꼼꼼히 확인하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '주 5일 근무로 몇 개월이면 180일이 채워지나요?',
        answer:
          '<strong>약 7개월(30주)이면 180일이 채워집니다.</strong> 주 5일 근무자도 주휴일이 유급으로 포함되므로 주 6일이 인정됩니다. 30주 × 6일 = 180일입니다. 연차·공휴일 사용 여부에 따라 다소 차이가 있을 수 있습니다.',
      },
      {
        question: '수습기간도 180일에 포함되나요?',
        answer:
          '<strong>네, 수습기간도 고용보험에 가입되어 있다면 포함됩니다.</strong> 수습 여부와 관계없이 임금을 지급받고 고용보험에 가입된 날이면 피보험단위기간에 포함됩니다. 고용보험 가입 여부를 반드시 확인하세요.',
      },
      {
        question: '전 직장 퇴직금이 정산됐는데 합산 가능한가요?',
        answer:
          '<strong>퇴직금 정산과 피보험단위기간 합산은 별개입니다.</strong> 전 직장에서 퇴직금을 받았더라도 18개월 역산 범위 내 피보험 기간이라면 합산이 가능합니다. 단, 이전에 실업급여를 이미 받았다면 그 이전 이력은 제외됩니다.</p>',
      },
      {
        question: '4대보험 미가입이었는데 소급 신고하면 인정되나요?',
        answer:
          '<strong>네, 소급 신고를 통해 피보험 기간을 인정받을 수 있습니다.</strong> 근로복지공단(1588-0075)에 미가입 기간의 근로 사실을 증빙(근로계약서·급여명세서·이체내역 등)과 함께 제출하면 소급 가입이 가능합니다.',
      },
      {
        question: '휴직 기간은 180일에 포함되나요?',
        answer:
          '<strong>유급 휴직은 포함되지만 무급 휴직은 제외됩니다.</strong> 출산전후휴가, 유급 병가 등은 피보험단위기간에 포함되며, 무급 육아휴직이나 개인 사유 무급휴직은 제외됩니다. 단 무급 기간이 30일 이상이면 18개월 역산 기간이 연장됩니다.',
      },
      {
        question: '피보험단위기간은 어디서 확인하나요?',
        answer:
          '<strong>고용보험 홈페이지(work.go.kr)의 "피보험자격 이력조회"에서 직접 확인할 수 있습니다.</strong> 공동인증서 또는 간편인증으로 로그인 후 본인의 전체 피보험 이력과 누적 피보험단위기간을 조회할 수 있습니다.',
      },
    ],
    cta: {
      text: '실업급여 180일 요건 AI 점검',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 신청 전체 절차 가이드', href: '/guide/unemployment' },
      { label: '이직확인서 발급 분쟁 해결', href: '/guide/unemployment/unemployment-separation-confirmation-dispute' },
      { label: '자발적 퇴사 실업급여 예외 사례', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '구직활동 인정 범위 정리', href: '/guide/unemployment/unemployment-job-search-recognized-types' },
      { label: '실업급여 수급액 계산 가이드', href: '/guide/unemployment/unemployment-comprehensive-benefit-amount-guide' },
    ],
  },

  // ─── 2. unemployment / pregnancy-benefit-extension ───
  {
    domain: 'unemployment',
    slug: 'unemployment-pregnancy-benefit-extension',
    keyword: '실업급여 수급 중 임신 출산 연장',
    questionKeyword: '실업급여 받다가 임신·출산하면 어떻게 되나요?',
    ctaKeyword: '실업급여 임신 연장 신청 확인',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '실업급여 수급 중 임신·출산 — 연장 신청하는 법 | 로앤가이드',
      description:
        '실업급여 받는 중 임신·출산했다면 수급기간을 최대 4년까지 연장 신청할 수 있습니다. 요건과 절차를 지금 확인하세요.',
    },
    intro:
      '<p>실업급여를 받고 있는데 임신·출산이 겹쳐 구직활동이 어려워졌습니다. 급여가 끊기는 건 아닌지, 출산 후 다시 받을 수는 있는지 걱정됩니다. 다행히 임신·출산은 고용보험법이 인정하는 수급기간 연장 사유이며, 최대 4년까지 기간을 늘릴 수 있습니다. 요건·신청 시기·재개 방법까지 정확히 정리해드립니다.</p>',
    sections: [
      {
        title: '임신·출산이 수급기간 연장 사유가 되는 법적 근거',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 시행령 제66조는 임신·출산·육아를 수급기간 연장 사유로 명시적으로 규정하고 있습니다.</strong></p>\n<ul>\n<li><strong>법적 근거</strong> — 고용보험법 제48조 제2항과 시행령 제66조는 본인의 질병·부상, 임신·출산·육아 등으로 즉시 재취업이 어려운 경우 수급기간을 연장할 수 있다고 규정합니다.</li>\n<li><strong>수급기간의 원칙</strong> — 원래 수급기간은 이직일 다음 날부터 12개월이며, 이 기간 내에 소정급여일수를 모두 받아야 합니다.</li>\n<li><strong>연장의 효과</strong> — 임신·출산 사유로 인한 연장 기간 동안은 급여 지급이 일시 정지되며, 사유 해소 후 남은 일수만큼 재개됩니다.</li>\n<li><strong>최대 4년</strong> — 모든 연장 사유를 합산해도 총 수급기간은 4년을 넘을 수 없습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임신·출산은 법이 보장하는 연장 사유이며, 자격 상실로 이어지지 않습니다. 반드시 사전에 연장 신청을 해야 보호됩니다.</blockquote>',
      },
      {
        title: '연장 신청 시기와 필수 서류',
        content:
          '<p><strong style="color:#1e3a5f">연장 신청은 사유가 발생한 날로부터 30일 이내에 고용센터에 제출해야 하며, 시기를 놓치면 연장이 거부될 수 있습니다.</strong></p>\n<ul>\n<li><strong>신청 시점</strong> — 구직활동이 불가능해진 날로부터 30일 이내입니다. 임신의 경우 산부인과 진단을 받고 구직활동이 어렵다고 판단된 시점, 출산의 경우 출산 예정일 또는 출산일이 기준입니다.</li>\n<li><strong>필수 서류</strong> — 수급기간 연장 신청서, 산모수첩·임신진단서·출생증명서 등 사유를 입증할 수 있는 자료가 필요합니다.</li>\n<li><strong>제출 방법</strong> — 거주지 관할 고용센터를 방문해 제출하거나, 고용보험 홈페이지(ei.go.kr)에서 온라인 신청이 가능합니다.</li>\n<li><strong>담당자 상담</strong> — 신청 전 담당자와 사유·기간·재개 시점을 정리해 상담받으면 절차가 더 원활합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 임신·출산 연장 신청 요건과 시점을 안내해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '출산휴가 급여와의 관계 — 중복 수령 불가',
        content:
          '<p><strong style="color:#1e3a5f">출산휴가 급여와 실업급여는 동시에 받을 수 없으며, 출산휴가 급여가 지급되는 기간에는 실업급여가 자동 정지됩니다.</strong></p>\n<ul>\n<li><strong>동시 수령 금지</strong> — 고용보험법에서는 출산전후휴가 급여·육아휴직 급여와 구직급여를 중복 지급하지 않습니다.</li>\n<li><strong>전환 선택 가능</strong> — 퇴사 직후 출산한 경우 출산전후휴가 급여 수급 조건을 갖추고 있다면 그 급여를 먼저 받고, 이후 실업급여를 연장된 범위에서 받을 수 있습니다.</li>\n<li><strong>유리한 쪽 선택</strong> — 두 급여의 일일 지급액과 지급 기간을 비교해 총 수령액이 큰 쪽을 우선 선택하는 것이 실무적입니다.</li>\n<li><strong>사전 확인 필수</strong> — 출산휴가 급여 수급요건을 갖추었는지 고용센터 또는 건강보험공단에서 미리 확인하세요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 출산휴가 급여와 실업급여 중 먼저 받은 쪽을 바꾸기는 어렵습니다. 신청 전에 반드시 상담하세요.</blockquote>',
      },
      {
        title: '사유 해소 후 급여 재개 방법',
        content:
          '<p><strong style="color:#1e3a5f">연장 사유가 해소되면 고용센터에 재개 신청을 해서 남은 일수만큼 다시 실업급여를 수령할 수 있습니다.</strong></p>\n<ul>\n<li><strong>재개 시점</strong> — 출산·육아로 인한 신체 회복이 끝나고 구직활동이 가능한 상태가 되면 재개 신청이 가능합니다. 보통 출산 후 1~3개월 사이에 가능합니다.</li>\n<li><strong>재개 신청 방법</strong> — 고용센터를 방문해 "수급기간 재개 신청서"를 제출하고, 구직 가능 상태임을 진술합니다.</li>\n<li><strong>잔여 일수 확인</strong> — 원래 소정급여일수에서 이미 지급된 일수를 차감한 잔여 일수가 지급됩니다.</li>\n<li><strong>실업인정 재개</strong> — 재개 후에는 다시 4주 간격의 실업인정 절차를 거치며, 구직활동 실적도 다시 제출해야 합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 총 4년의 연장 상한을 넘지 않도록 재개 시점을 전략적으로 조정하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 구직급여 수급기간의 성격과 연장 원칙',
        summary:
          '대법원 2018두63235 사건(대법원, 2022.10.27 선고)에서 법원은 고용보험법상 구직급여 수급기간을 원칙적으로 이직일 다음 날부터 12개월로 하되, 법정 사유가 있으면 해당 사유 해소 시까지 수급기간이 연장된다는 원칙을 확인했습니다.',
        takeaway:
          '임신·출산은 수급기간 연장의 확립된 사유이며, 정당한 절차로 연장을 신청하면 자격을 잃지 않고 출산 이후 남은 급여를 받을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '임신 초기에도 연장 신청이 가능한가요?',
        answer:
          '<strong>네, 구직활동이 실질적으로 어려운 상태임을 진단서 등으로 입증하면 가능합니다.</strong> 임신 초기라도 입덧·유산 위험 등으로 구직활동이 어렵다는 의사 소견이 있으면 연장 사유로 인정받을 수 있습니다.',
      },
      {
        question: '배우자가 대신 신청할 수 있나요?',
        answer:
          '<strong>대리인 신청이 가능하지만 위임장과 가족관계증명서가 필요합니다.</strong> 본인이 직접 방문이 어려운 경우 배우자·부모 등이 위임장·신분증·가족관계증명서를 지참해 대리 신청할 수 있습니다. 온라인 신청이 더 간편합니다.',
      },
      {
        question: '연장 기간 중 구직활동 의무가 있나요?',
        answer:
          '<strong>없습니다. 연장 사유가 인정된 기간에는 구직활동 의무가 면제됩니다.</strong> 급여 지급이 정지된 기간 동안은 실업인정도 요구되지 않습니다. 사유 해소 후 재개 신청 시점부터 구직활동 의무가 다시 시작됩니다.',
      },
      {
        question: '육아휴직 중인데 실업급여 연장이 가능한가요?',
        answer:
          '<strong>육아휴직 급여를 받고 있다면 그 기간에는 실업급여가 정지되며, 이후 육아로 구직활동이 어려운 기간만 연장할 수 있습니다.</strong> 두 급여는 동시 수령이 불가하며, 육아휴직 급여가 먼저 적용됩니다.',
      },
      {
        question: '연장 신청을 놓쳤는데 구제 방법이 있나요?',
        answer:
          '<strong>신청 기한(30일)을 놓쳐도 사후적으로 정당한 사유를 소명하면 예외적 인정이 가능할 수 있습니다.</strong> 입원·긴급 상황 등으로 신청이 늦어졌다면 즉시 고용센터에 사정을 설명하고, 필요한 서류를 제출해 예외 적용을 요청하세요.',
      },
      {
        question: '출산 이후 재개 신청은 언제 하는 것이 좋나요?',
        answer:
          '<strong>신체 회복 후 구직활동이 실질적으로 가능한 시점이 적정합니다.</strong> 보통 출산 후 1~3개월 후가 일반적이며, 무리하게 서두르면 구직활동 부담이 커질 수 있고, 너무 미루면 4년 상한에 걸릴 수 있어 균형 있게 판단하세요.',
      },
    ],
    cta: {
      text: '실업급여 임신·출산 연장 AI 안내',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '실업급여 수급기간 연장 가능한 경우', href: '/guide/unemployment/benefit-period-extension-cases' },
      { label: '출산휴가·육아휴직 급여 기본 안내', href: '/guide/unemployment' },
      { label: '실업급여 신청 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '임신 이유 자진 퇴사 수급 인정', href: '/guide/unemployment/unemployment-maternity-voluntary-quit' },
      { label: '실업급여 부정수급 제재', href: '/guide/unemployment/unemployment-fraud-penalty-response' },
    ],
  },

  // ─── 3. retirement / unpaid-guarantee-fund-simple ───
  {
    domain: 'retirement',
    slug: 'retirement-unpaid-guarantee-fund-simple',
    keyword: '퇴직금 간이대지급금 신청',
    questionKeyword: '퇴직금을 못 받았는데 국가에서 먼저 받을 수 있나요?',
    ctaKeyword: '간이대지급금 신청 가능 여부 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '퇴직금 간이대지급금 700만원까지 받는 절차 | 로앤가이드',
      description:
        '회사가 퇴직금을 주지 않을 때 국가가 대신 지급하는 간이대지급금 제도가 있습니다. 요건·한도·신청 절차를 지금 확인하세요.',
    },
    intro:
      '<p>퇴직금을 받지 못한 채 몇 달이 지났습니다. 회사는 돈이 없다고 버티고, 민사소송은 시간과 비용이 부담됩니다. 이럴 때 국가가 체불 임금·퇴직금 일부를 선지급하는 "간이대지급금(구 소액체당금)" 제도가 있습니다. 요건만 맞으면 사업주 재산 상태와 무관하게 빠르게 지급받을 수 있습니다. 신청 절차와 한도, 주의사항을 정리해드립니다.</p>',
    sections: [
      {
        title: '간이대지급금 제도의 법적 근거와 지원 한도',
        content:
          '<p><strong style="color:#1e3a5f">임금채권보장법은 체불 임금·퇴직금에 대해 국가가 사업주를 대신해 일부를 선지급하는 제도를 규정하고 있습니다.</strong></p>\n<ul>\n<li><strong>법적 근거</strong> — 임금채권보장법 제7조의2와 시행령은 재직자·퇴직자 모두에게 간이대지급금을 지급할 수 있도록 규정합니다.</li>\n<li><strong>지급 한도</strong> — 임금·퇴직금 합산 최대 1,000만 원이며, 이 중 퇴직금 항목은 700만 원 한도입니다.</li>\n<li><strong>선지급의 성격</strong> — 국가가 먼저 근로자에게 지급하고, 이후 사업주에게 구상권을 행사합니다. 사업주 재산 유무와 관계없이 지급됩니다.</li>\n<li><strong>일반 대지급금과 차이</strong> — 회사가 도산한 경우엔 일반 대지급금 절차로 진행되며, 한도·요건이 다릅니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 간이대지급금은 회사 재산 유무와 무관하게 국가가 선지급합니다. 포기하지 말고 반드시 신청하세요.</blockquote>',
      },
      {
        title: '신청 요건 — 체불확인서 또는 확정판결',
        content:
          '<p><strong style="color:#1e3a5f">간이대지급금을 받으려면 먼저 체불 사실을 공적으로 확인받아야 하며, 방법은 두 가지입니다.</strong></p>\n<ul>\n<li><strong>노동청 체불확인서</strong> — 고용노동지청에 임금체불 진정을 넣어 "체불 임금 등 사업주 확인서"를 발급받는 방법입니다. 보통 1~2개월 소요됩니다.</li>\n<li><strong>민사 확정판결</strong> — 체불액에 대해 확정판결, 지급명령, 이행권고결정 등을 받은 경우에도 신청 가능합니다.</li>\n<li><strong>퇴직 후 기한</strong> — 퇴직일로부터 임금은 1년, 퇴직금은 3년 이내에 신청해야 합니다(간이대지급금 기준).</li>\n<li><strong>사업주 요건</strong> — 사업주가 근로자를 고용하고 산재보험 적용 사업장이었거나, 일정 기간 이상 사업을 영위한 경우여야 합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 간이대지급금 신청 가능 여부와 서류를 안내해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '신청 절차 — 근로복지공단 접수',
        content:
          '<p><strong style="color:#1e3a5f">체불확인서·확정판결을 확보한 후 근로복지공단에 간이대지급금을 신청합니다.</strong></p>\n<ul>\n<li><strong>1단계: 체불 확인</strong> — 노동청 진정으로 체불확인서를 받거나, 민사 지급명령·소액사건 심판을 통해 확정판결을 받습니다.</li>\n<li><strong>2단계: 신청서 작성</strong> — 근로복지공단(1588-0075) 또는 고용·산재보험 토탈서비스(total.comwel.or.kr)에서 간이대지급금 청구서를 작성합니다.</li>\n<li><strong>3단계: 서류 제출</strong> — 체불확인서·판결문 원본, 근로계약서, 급여명세서, 통장 사본 등을 첨부합니다.</li>\n<li><strong>4단계: 지급</strong> — 서류 심사 후 보통 1~2개월 안에 본인 계좌로 입금됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 노동청 진정과 간이대지급금 신청은 동시에 상담받으면 전체 일정이 단축됩니다.</blockquote>',
      },
      {
        title: '한도 초과분은 별도 민사로 회수',
        content:
          '<p><strong style="color:#1e3a5f">간이대지급금 한도를 초과한 나머지 금액은 사업주에게 직접 청구하거나 민사소송으로 회수해야 합니다.</strong></p>\n<ul>\n<li><strong>한도 초과분</strong> — 퇴직금이 1,500만 원인데 간이대지급금으로 700만 원만 받았다면, 나머지 800만 원은 별도 청구가 필요합니다.</li>\n<li><strong>소액사건 심판</strong> — 3,000만 원 이하는 소액사건 심판으로 절차가 간소합니다. 인지대·송달료 부담도 크지 않습니다.</li>\n<li><strong>지급명령 신청</strong> — 사업주가 다투지 않을 가능성이 있다면 지급명령이 빠르고 비용이 저렴합니다. 이의신청이 들어오면 정식 소송으로 이행됩니다.</li>\n<li><strong>소멸시효 3년</strong> — 퇴직금 청구권은 퇴직일로부터 3년이므로 이 기간 안에 민사 조치까지 완료해야 합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 간이대지급금 수령 후 방심하다 3년 시효를 넘기면 나머지 금액은 영구적으로 받을 수 없습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 평균임금 산정의 기초가 되는 임금의 의미',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 평균임금 산정의 기초가 되는 임금이란 "근로자에게 계속적·정기적으로 지급되고 단체협약·취업규칙·급여규정·근로계약·노동관행 등에 의해 사용자에게 지급의무가 지워져 있는 것"이라고 판시했습니다.',
        takeaway:
          '간이대지급금 신청 전 체불액을 산정할 때는 기본급뿐 아니라 상여금·성과급·수당 등 평균임금에 포함되어야 할 모든 항목을 반영해야 최대 한도까지 지원받을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '사업주가 파산했는데도 간이대지급금이 나오나요?',
        answer:
          '<strong>파산·도산의 경우엔 일반 대지급금 절차가 적용됩니다.</strong> 간이대지급금은 사업주가 존속하는 경우가 기본이며, 도산한 사업장은 별도 "일반 대지급금"으로 신청합니다. 한도와 요건이 다르니 근로복지공단에 확인하세요.',
      },
      {
        question: '프리랜서·특수고용직도 신청할 수 있나요?',
        answer:
          '<strong>근로기준법상 근로자로 인정되면 가능합니다.</strong> 형식상 프리랜서라도 실질적 종속 관계가 인정되면 근로자로 판단됩니다. 노동청에서 근로자성 판단을 먼저 받고 체불확인서를 발급받으세요.',
      },
      {
        question: '신청 후 얼마나 걸려서 입금되나요?',
        answer:
          '<strong>서류 완비 후 1~2개월 안에 입금되는 것이 일반적입니다.</strong> 근로복지공단의 심사 일정에 따라 다소 차이가 있을 수 있으며, 서류 보완 요청이 있으면 지연될 수 있습니다.',
      },
      {
        question: '간이대지급금 받은 후 회사가 보복하면 어떻게 하나요?',
        answer:
          '<strong>임금체불 신고·대지급금 신청을 이유로 한 불이익 대우는 근로기준법 위반입니다.</strong> 해고·급여 삭감 등 불이익이 있으면 즉시 노동청에 별도 진정하고, 노동위원회 구제신청(3개월 이내)도 가능합니다.',
      },
      {
        question: '재직 중에도 간이대지급금 신청이 가능한가요?',
        answer:
          '<strong>네, 재직자도 체불이 있으면 신청 가능합니다.</strong> 2021년부터 재직자 대상으로도 간이대지급금이 확대되었습니다. 다만 재직자의 경우 한도와 요건이 다소 다르므로 근로복지공단에 확인이 필요합니다.',
      },
    ],
    cta: {
      text: '간이대지급금 신청 AI 안내',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 체불 대응 종합 가이드', href: '/guide/retirement' },
      { label: '퇴직금 14일 지급 원칙', href: '/guide/retirement/retirement-pay-14day-rule-detail' },
      { label: '퇴직금 민사청구·노동청 신고 비교', href: '/guide/retirement/retirement-pay-labor-report-vs-civil-claim' },
      { label: '체불임금 보장기금 신청 가이드', href: '/guide/wage/unpaid-wage-guarantee-fund-application' },
      { label: '회사 도산 시 체불임금 선지급', href: '/guide/retirement/retirement-company-bankrupt-deposit' },
    ],
  },

  // ─── 4. retirement / recalculation-wrong-amount ───
  {
    domain: 'retirement',
    slug: 'retirement-recalculation-wrong-amount',
    keyword: '퇴직금 잘못 계산 재계산 차액',
    questionKeyword: '퇴직금이 잘못 계산됐는데 다시 받을 수 있나요?',
    ctaKeyword: '퇴직금 재계산 AI 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '퇴직금 잘못 계산됐을 때 차액 받는 절차 | 로앤가이드',
      description:
        '퇴직금 금액이 이상할 때 평균임금 재계산과 차액 청구 절차를 정리했습니다. 지연이자 포함 청구 방법을 지금 확인하세요.',
    },
    intro:
      '<p>퇴직금을 받았는데 예상보다 훨씬 적고, 회사는 "규정대로 계산했다"며 재계산을 거부합니다. 실제로는 평균임금에서 상여금·성과급·야근수당이 빠져 있거나, 근속기간이 잘못 산정된 경우가 많습니다. 잘못 계산된 퇴직금은 차액 청구가 가능하며, 지연이자(연 20%)까지 함께 받을 수 있습니다. 단계별 절차를 정리합니다.</p>',
    sections: [
      {
        title: '퇴직금 계산 공식과 평균임금의 범위',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금은 평균임금 × 30일 × 근속연수로 계산되며, 평균임금에는 정기 지급된 모든 임금성 금품이 포함돼야 합니다.</strong></p>\n<ul>\n<li><strong>법적 공식</strong> — 근로자퇴직급여보장법 제8조: 퇴직금 = 1년에 대해 30일분 이상의 평균임금 × 계속근로연수.</li>\n<li><strong>평균임금의 정의</strong> — 퇴직 전 3개월간 지급된 임금 총액을 그 기간 총일수로 나눈 금액입니다.</li>\n<li><strong>포함되는 항목</strong> — 기본급, 정기상여금, 성과급(정기성 있음), 연장·야간·휴일근로수당, 직책수당, 식대(일정 조건), 연차수당 등.</li>\n<li><strong>제외되는 항목</strong> — 일회성 격려금, 실비 변상적 출장비, 경조금 등은 제외됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정기·계속적으로 지급되고 사용자에게 지급의무가 있는 모든 금품은 평균임금에 포함되어야 합니다.</blockquote>',
      },
      {
        title: '흔한 계산 오류 4가지',
        content:
          '<p><strong style="color:#1e3a5f">실무에서 퇴직금이 잘못 계산되는 대표 원인은 다음과 같으며, 본인의 경우 어떤 오류에 해당하는지 먼저 점검해야 합니다.</strong></p>\n<ul>\n<li><strong>정기상여금 누락</strong> — 분기별·반기별 상여금을 "임시 금품"으로 잘못 보고 평균임금에서 빼는 사례가 가장 흔합니다.</li>\n<li><strong>연장·야간수당 누락</strong> — 최근 3개월 동안 지급된 초과근로수당을 반영하지 않고 기본급만으로 평균임금을 계산하는 경우.</li>\n<li><strong>근속연수 단절 주장</strong> — 정규직 전환 전후, 계약 갱신 사이의 공백 등을 이유로 계속근로를 부정하는 경우.</li>\n<li><strong>일할 계산 오류</strong> — 1년 미만 잔여 기간의 일할 계산 방식이 부정확해 차액이 발생하는 경우.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 퇴직금의 재계산 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '차액 청구 단계별 절차',
        content:
          '<p><strong style="color:#1e3a5f">차액 청구는 내용증명 → 노동청 진정 → 민사소송 순서로 단계적으로 진행합니다.</strong></p>\n<ul>\n<li><strong>1단계: 재계산 요구</strong> — 본인이 계산한 정확한 퇴직금 금액과 근거를 정리해 회사에 내용증명으로 차액 지급을 요구합니다.</li>\n<li><strong>2단계: 노동청 진정</strong> — 회사가 거부하거나 무응답이면 관할 고용노동지청에 "임금체불(퇴직금 차액) 진정"을 접수합니다. 진정서에는 계산 내역과 근거 자료를 첨부합니다.</li>\n<li><strong>3단계: 시정지시·형사 입건</strong> — 조사 결과 차액이 확인되면 근로감독관이 시정지시를 내립니다. 이행 거부 시 형사 입건됩니다.</li>\n<li><strong>4단계: 민사소송</strong> — 형사절차와 별도로 민사 지급명령·소액사건 심판으로 확정판결을 받아 강제집행합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 노동청 진정과 민사소송은 병행할 수 있으며, 시효 중단 목적으로 민사 절차를 함께 진행하는 것이 안전합니다.</blockquote>',
      },
      {
        title: '지연이자·소멸시효 주의',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금 차액은 지연이자(연 20%)를 함께 청구할 수 있고, 소멸시효는 퇴직일로부터 3년입니다.</strong></p>\n<ul>\n<li><strong>지연이자</strong> — 근로기준법 제37조: 퇴직일 다음 날부터 14일 이내 미지급 시 연 20%의 지연이자가 발생합니다.</li>\n<li><strong>소멸시효 3년</strong> — 근로기준법 제49조: 임금·퇴직금 청구권은 3년이 지나면 소멸합니다.</li>\n<li><strong>시효 중단</strong> — 민사소송 제기, 지급명령 신청, 내용증명 발송 등으로 시효가 중단됩니다.</li>\n<li><strong>장기 체불 시 이익</strong> — 3년 가까이 된 체불 건은 지연이자만으로도 큰 금액이 되므로, 반드시 이자까지 계산해 청구하세요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 노동청 진정만으로는 시효 중단 효력이 약할 수 있습니다. 병행해서 민사 절차까지 진행하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 기업 관행이 근로계약 내용으로 인정되는 요건',
        summary:
          '대법원 2022다255454 사건(대법원, 2026.01.29 선고)에서 법원은 기업 내부 관행이 근로계약 내용으로 인정되려면 "일반적으로 근로관계를 규율하는 규범적 사실로 명확히 승인되거나 구성원에 의해 당연한 것으로 받아들여져 사실상의 제도로 확립"되어야 한다고 판시했습니다.',
        takeaway:
          '정기 상여금·성과급이 사내 관행으로 정착된 경우 평균임금에 포함되어야 하며, 이를 제외한 퇴직금 산정은 위법으로 차액 청구의 근거가 됩니다.',
      },
    ],
    faq: [
      {
        question: '상여금이 1년에 400% 있는데 평균임금에 다 포함되나요?',
        answer:
          '<strong>네, 정기·계속적으로 지급된 상여금은 모두 포함됩니다.</strong> 400% 상여금은 연간 기준 → 3개월 평균 환산 후 평균임금에 반영합니다. 회사가 일부만 반영했다면 차액 청구가 가능합니다.',
      },
      {
        question: '노동청 진정은 무료인가요?',
        answer:
          '<strong>네, 노동청 진정은 무료이며 인지대·수수료가 없습니다.</strong> 변호사 없이도 본인이 직접 진정할 수 있고, 조사·시정지시까지 모두 국가가 담당합니다.',
      },
      {
        question: '회사가 이미 정산했다고 주장하면 어떻게 하나요?',
        answer:
          '<strong>정산 기준이 잘못됐음을 증거로 입증해야 합니다.</strong> 급여명세서·근로계약서·취업규칙·상여금 지급 내역을 근거로 평균임금 항목을 재산정해 제시하면 회사 주장을 반박할 수 있습니다.',
      },
      {
        question: '민사소송은 얼마나 걸리나요?',
        answer:
          '<strong>지급명령은 1~2개월, 소액사건 심판은 3~6개월이 보통입니다.</strong> 사업주가 이의신청하면 정식 소송으로 이행되며, 1년 정도 걸릴 수 있습니다. 금액이 명확하면 지급명령이 가장 빠르고 저렴합니다.',
      },
      {
        question: '근로계약서가 없어도 차액 청구가 되나요?',
        answer:
          '<strong>네, 근로계약서가 없어도 급여명세서·이체 내역·카톡 등 간접 증거로 입증 가능합니다.</strong> 근로기준법은 서면 근로계약서 작성 의무를 사용자에게 부과하며, 미작성도 법 위반이므로 근로자에게 불리하게 작용하지 않습니다.',
      },
    ],
    cta: {
      text: '퇴직금 재계산 AI 분석',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 계산 공식과 평균임금', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '정기 상여금 평균임금 포함', href: '/guide/retirement/retirement-bonus-included-calculation' },
      { label: '퇴직금 노동청 진정 vs 민사소송', href: '/guide/retirement/retirement-pay-labor-report-vs-civil-claim' },
      { label: '퇴직금 14일 지연이자 청구', href: '/guide/retirement/retirement-delay-interest-20percent' },
      { label: '퇴직금 평균임금 분쟁 실제', href: '/guide/retirement/retirement-average-wage-dispute' },
    ],
  },

  // ─── 5. wage / business-trip-travel-time ───
  {
    domain: 'wage',
    slug: 'wage-business-trip-travel-time',
    keyword: '출장 이동시간 근로시간 임금',
    questionKeyword: '출장 이동시간도 근로시간에 포함되나요?',
    ctaKeyword: '출장 근로시간 인정 여부 확인',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '출장 이동시간 근로시간 인정 기준 총정리 | 로앤가이드',
      description:
        '출장 중 이동시간이 근로시간으로 인정되는 기준을 정리했습니다. 간주근로시간·가산수당 청구법을 지금 확인하세요.',
    },
    intro:
      '<p>지방 출장을 다녀왔더니 회사는 "이동시간은 근로시간이 아니다"라며 시간외수당을 지급하지 않습니다. 그런데 이동 중 업무 전화를 계속 받았고, 회사가 교통편과 시간까지 지정했습니다. 출장 이동시간이 근로시간으로 인정되는 기준, 간주근로시간제 운영 방식, 미지급 수당 청구 방법까지 정리합니다.</p>',
    sections: [
      {
        title: '근로시간의 법적 정의와 출장의 특수성',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제50조는 근로시간을 "사용자의 지휘·감독 아래 근로자가 노무를 제공하는 시간"으로 정의합니다.</strong></p>\n<ul>\n<li><strong>근로시간의 핵심 요건</strong> — 사용자의 지휘·감독, 노무 제공 의무, 근로자의 자유 제한 등이 복합적으로 판단됩니다.</li>\n<li><strong>출장 중 업무 시간</strong> — 출장지에서의 회의·업무 수행은 당연히 근로시간입니다. 이동 중 업무 관련 전화·메일·자료 처리도 근로시간에 포함됩니다.</li>\n<li><strong>이동시간의 판단</strong> — 사용자가 교통편·시간을 지정했거나, 이동 중 업무를 하도록 요구받은 경우 근로시간으로 인정되는 경향이 있습니다.</li>\n<li><strong>단순 이동시간의 제외</strong> — 근로자가 자유롭게 선택한 교통편으로 통상적 출퇴근과 유사한 이동만 한 경우엔 근로시간에서 제외될 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 이동 중 업무 지휘·감독이 있었는지 여부가 근로시간 인정의 결정적 기준입니다.</blockquote>',
      },
      {
        title: '간주근로시간제와 출장 특례',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제58조는 출장처럼 근로시간 산정이 어려운 경우 간주근로시간제를 적용할 수 있도록 규정합니다.</strong></p>\n<ul>\n<li><strong>제58조 제1항</strong> — 근로자가 출장 기타 사유로 근로시간 전부 또는 일부를 사업장 밖에서 근로하여 근로시간을 산정하기 어려운 경우 소정근로시간을 근로한 것으로 봅니다.</li>\n<li><strong>제58조 제2항</strong> — 해당 업무 수행에 통상적으로 필요한 시간이 소정근로시간을 초과하면 통상적 필요시간을 근로한 것으로 봅니다.</li>\n<li><strong>노사 서면합의</strong> — 간주 시간을 노사 서면합의로 정할 수 있으며, 이 경우 합의 시간을 기준으로 근로시간을 산정합니다.</li>\n<li><strong>법정근로시간 초과 시 수당</strong> — 간주근로시간이 1일 8시간 또는 1주 40시간을 초과하면 시간외수당이 발생합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 출장 이동시간의 근로시간 인정 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '휴일·야간 출장의 가산수당',
        content:
          '<p><strong style="color:#1e3a5f">주말·공휴일 또는 야간(22시~익일 6시)에 출장을 수행한 경우 가산수당이 추가됩니다.</strong></p>\n<ul>\n<li><strong>휴일근로 가산</strong> — 통상임금의 50% 추가(8시간 초과분은 100% 추가)입니다.</li>\n<li><strong>야간근로 가산</strong> — 22시부터 익일 6시까지 근로 시 통상임금의 50% 추가.</li>\n<li><strong>연장근로 가산</strong> — 1일 8시간 또는 1주 40시간 초과 시 통상임금의 50% 추가.</li>\n<li><strong>중복 적용</strong> — 휴일·야간·연장이 중복되면 가산율을 각각 적용하여 누적 산정합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 출장비·일비는 실비 변상적 성격이므로 시간외수당을 대체할 수 없습니다. 별도로 청구해야 합니다.</blockquote>',
      },
      {
        title: '미지급 수당 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">출장 관련 미지급 수당은 노동청 진정 또는 민사소송으로 청구할 수 있으며, 3년 시효를 지켜야 합니다.</strong></p>\n<ul>\n<li><strong>증거 확보</strong> — 출장명령서, 교통편 지정 메일, 출장 중 업무 기록, 숙박 영수증, 교통카드 이용 내역 등 시간과 업무 내용을 입증할 자료를 모읍니다.</li>\n<li><strong>미지급액 산정</strong> — 출장 시간 × 본인 통상임금 × 가산율을 적용해 구체적 금액을 계산합니다.</li>\n<li><strong>노동청 진정</strong> — 관할 고용노동지청에 임금체불 진정을 접수합니다. 조사 결과 미지급이 확인되면 시정지시가 내려집니다.</li>\n<li><strong>민사 청구</strong> — 병행하여 지급명령·소액사건 심판으로 확정판결을 받아 강제집행을 준비합니다. 소멸시효는 3년입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 취업규칙에 "출장비로 시간외수당을 갈음한다"는 조항이 있어도 이는 근로기준법에 위반되어 무효일 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 근로계약·단협·관행에 따른 임금의 범위',
        summary:
          '대법원 2022다255454 사건(대법원, 2026.01.29 선고)에서 법원은 "근로계약·단체협약·취업규칙·관행 등에 의해 사용자에게 지급의무가 지워져 있는 금품은 임금에 해당한다"고 판시하며, 실질적 지휘·감독 관계를 종합적으로 살펴 판단해야 한다고 확인했습니다.',
        takeaway:
          '출장 이동시간도 실제 사용자 지휘·감독 아래 업무를 수행했다면 근로시간으로 인정되며, 해당 시간에 대한 시간외수당·가산수당 청구가 가능합니다.',
      },
    ],
    faq: [
      {
        question: '비행기·KTX 이동 중 업무를 안 했으면 근로시간이 아닌가요?',
        answer:
          '<strong>업무를 하지 않았다면 근로시간에서 제외될 가능성이 높습니다.</strong> 다만 회사가 특정 시간대·교통편을 강제하고 자유로운 이동을 허용하지 않았다면 근로시간으로 인정될 여지가 있습니다. 구체적 사안 판단이 필요합니다.',
      },
      {
        question: '출장 중 주말에 쉬면 그 시간은 근로시간인가요?',
        answer:
          '<strong>자유롭게 쉬는 시간은 근로시간이 아닙니다.</strong> 다만 숙박지에서 업무 대기 상태를 유지하도록 지시받았다면 대기시간도 근로시간으로 인정될 수 있습니다.',
      },
      {
        question: '해외 출장도 같은 기준인가요?',
        answer:
          '<strong>기본 원칙은 동일합니다.</strong> 해외 출장도 이동 중 업무 수행·지휘·감독 여부가 판단 기준이며, 시차·현지 근무 시간도 별도로 고려됩니다. 구체적 업무 기록과 증거 확보가 중요합니다.',
      },
      {
        question: '출장 후 얼마나 지나서 수당 청구가 가능한가요?',
        answer:
          '<strong>임금·수당 청구권의 소멸시효는 3년입니다.</strong> 3년 이내 발생한 미지급 출장 수당은 청구 가능합니다. 증거 보존을 위해 가능한 빨리 대응하는 것이 유리합니다.',
      },
      {
        question: '간주근로시간제를 회사가 일방적으로 정할 수 있나요?',
        answer:
          '<strong>노사 서면합의가 원칙이며, 일방적 지정은 효력이 제한됩니다.</strong> 통상적 필요시간이 소정근로시간을 초과하면 법적으로 초과분을 인정해야 하며, 합의가 불공정하면 다툴 수 있습니다.',
      },
    ],
    cta: {
      text: '출장 근로시간 AI 점검',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '연장근로수당 계산법', href: '/guide/wage/wage-overtime-unpaid-claim' },
      { label: '야간·휴일근로 가산수당', href: '/guide/wage/wage-night-shift-premium-claim' },
      { label: '포괄임금제 시간외수당 판별', href: '/guide/wage/wage-pogual-fixed-vs-ot-difference' },
      { label: '임금체불 진정 절차', href: '/guide/wage/wage-complaint-full-procedure-timeline' },
      { label: '통상임금 산정 기준', href: '/guide/wage' },
    ],
  },

  // ─── 6. wage / commute-standby-time-included ───
  {
    domain: 'wage',
    slug: 'wage-commute-standby-time-included',
    keyword: '대기시간 근로시간 포함 임금',
    questionKeyword: '회사에서 대기하는 시간도 근로시간인가요?',
    ctaKeyword: '대기시간 근로 인정 여부 확인',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '회사 대기시간 근로시간 인정 기준 총정리 | 로앤가이드',
      description:
        '작업 사이 대기시간이 근로시간으로 인정되는 기준을 정리했습니다. 휴게시간과 구분법·임금 청구 방법을 지금 확인하세요.',
    },
    intro:
      '<p>작업과 작업 사이에 1시간씩 대기하는데 회사는 "쉬는 시간"이라며 임금을 주지 않습니다. 하지만 대기 중에도 자리를 벗어날 수 없고, 업무 호출이 오면 즉시 복귀해야 합니다. 이런 대기시간은 법적으로 근로시간에 포함될 가능성이 높습니다. 대기시간과 휴게시간의 구분 기준, 청구 방법을 정리합니다.</p>',
    sections: [
      {
        title: '대기시간과 휴게시간의 법적 구분',
        content:
          '<p><strong style="color:#1e3a5f">대기시간은 근로시간에 포함되고, 휴게시간은 근로시간에서 제외된다는 점이 가장 큰 차이입니다.</strong></p>\n<ul>\n<li><strong>대기시간의 정의</strong> — 근로기준법 제50조 제3항: 근로시간에는 근로자가 사용자의 지휘·감독 아래 있는 대기시간이 포함됩니다.</li>\n<li><strong>휴게시간의 정의</strong> — 근로기준법 제54조: 근로자가 자유롭게 사용할 수 있는 시간이어야 합니다. 식사·외출 등 자유 이용이 보장되어야 휴게시간입니다.</li>\n<li><strong>핵심 판단 요소</strong> — 장소 이탈 가능 여부, 호출 복귀 의무 여부, 사용자 지휘·감독의 지속성.</li>\n<li><strong>명칭의 무의미</strong> — 회사가 "휴게시간"이라고 불러도 실질이 대기시간이면 근로시간으로 인정됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자유 이용 가능성이 없으면 대기시간, 자유 이용이 보장되면 휴게시간입니다.</blockquote>',
      },
      {
        title: '대표적인 근로시간 인정 사례',
        content:
          '<p><strong style="color:#1e3a5f">실무에서 대기시간이 근로시간으로 인정되는 대표적 상황들은 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>운전직 대기</strong> — 다음 배차를 기다리며 차량·대기실에서 머무는 시간은 근로시간으로 인정됩니다.</li>\n<li><strong>경비원 야간 대기</strong> — 야간 순찰 사이 대기시간도 사용자의 지휘·감독이 지속되면 근로시간입니다.</li>\n<li><strong>판매직 고객 대기</strong> — 매장 내 고객 응대를 위해 대기하는 시간은 근로시간입니다.</li>\n<li><strong>교대 대기</strong> — 교대 근무자 간 인수인계를 위한 대기시간도 근로시간입니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인의 대기시간이 근로시간에 포함되는지 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '휴게시간 분할 운영의 위법성',
        content:
          '<p><strong style="color:#1e3a5f">법정 휴게시간을 쪼개 "자투리 쉬는 시간"으로 운영하는 방식은 휴게의 실효성이 없어 위법일 수 있습니다.</strong></p>\n<ul>\n<li><strong>최소 길이</strong> — 근로기준법 제54조는 4시간 근로마다 30분 이상, 8시간 근로마다 1시간 이상 휴게를 요구합니다.</li>\n<li><strong>쪼개기 운영</strong> — 1시간 휴게를 10분씩 6번으로 나누면 사실상 휴게 기능을 하지 못해 판례상 휴게시간으로 인정되지 않을 수 있습니다.</li>\n<li><strong>근로시간 환산</strong> — 휴게로 인정되지 않으면 그만큼 실근로시간이 늘어나 연장근로수당 대상이 됩니다.</li>\n<li><strong>입증 방법</strong> — 출근·퇴근 기록, CCTV, 업무 지시 메시지 등을 통해 실제 자유이용 여부를 입증합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 취업규칙·근로계약서에 적혔다는 이유만으로 휴게시간이 자동으로 인정되지 않습니다.</blockquote>',
      },
      {
        title: '미지급 임금 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">대기시간에 해당하는 미지급 임금은 노동청 진정·민사소송으로 청구 가능합니다.</strong></p>\n<ul>\n<li><strong>증거 확보</strong> — 근무 일지, 교대 기록, 업무 지시 메시지, CCTV 확인 요청 등을 통해 실제 대기시간을 입증합니다.</li>\n<li><strong>미지급액 산정</strong> — 대기시간 × 통상임금, 법정근로시간 초과분은 가산수당 적용.</li>\n<li><strong>노동청 진정</strong> — 관할 고용노동지청에 임금체불 진정서를 제출하고 조사를 요청합니다.</li>\n<li><strong>민사 청구</strong> — 지급명령·소액사건 심판으로 3년 시효 안에 청구·확정판결을 받습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 동료들과 함께 단체로 진정을 넣으면 조사 속도가 빨라지고 입증이 수월합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 대기시간의 근로시간성 판단 기준',
        summary:
          '대법원은 근로시간 해당성 판단 시 사용자의 지휘·감독 범위, 근로자의 자유 이용 가능성, 장소 이탈 여부 등을 종합적으로 고려해야 한다고 일관되게 판시해왔습니다. 2021다248299 판결은 임금의 정의에 관한 원칙적 판시로 근로시간에 해당하는 시간에 대해서는 임금 지급의무가 발생한다는 점을 확인했습니다.',
        takeaway:
          '사용자의 지휘·감독이 지속되고 자유롭게 장소를 이탈할 수 없다면 대기시간도 근로시간이며, 해당 시간에 대한 임금·수당을 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '식사 시간 동안 전화를 받으라고 하면 근로시간인가요?',
        answer:
          '<strong>네, 호출 대기 의무가 있으면 근로시간입니다.</strong> 식사 중이라도 업무 전화를 받아야 한다면 자유 이용이 제한되어 휴게시간이 아닌 대기시간으로 판단됩니다.',
      },
      {
        question: '매장 근무자인데 손님이 없을 때 쉬는 것도 근로시간인가요?',
        answer:
          '<strong>네, 매장 내에서 손님 대응을 위해 대기하는 시간은 근로시간입니다.</strong> 장소 이탈이 제한되고 언제든 손님 응대를 해야 하므로 실질은 대기시간으로 판단됩니다.',
      },
      {
        question: '회사가 "8시간 중 1시간은 쉬는 시간"이라고 적어놨으면 인정되나요?',
        answer:
          '<strong>명칭만으로 결정되지 않습니다.</strong> 실제로 1시간 동안 자유롭게 쉴 수 있었는지, 업무 호출이 있었는지, 장소를 이탈할 수 있었는지 등 실질로 판단됩니다.',
      },
      {
        question: '경비원인데 야간에 숙직실에서 자면 근로시간인가요?',
        answer:
          '<strong>호출 대기 상태라면 감시·단속적 근로시간으로 인정될 수 있습니다.</strong> 고용노동부 승인을 받은 감시·단속적 근로자는 근로시간·수당 규정이 일부 달라지므로 승인 여부를 확인하세요.',
      },
      {
        question: '포괄임금 계약인데 대기시간 수당이 따로 나오나요?',
        answer:
          '<strong>포괄임금에 대기시간 수당이 실질적으로 포함되지 않았다면 별도 청구 가능합니다.</strong> 포괄임금 금액이 정규 근로시간과 대기시간을 모두 커버하지 못하면 차액을 청구할 수 있습니다.',
      },
    ],
    cta: {
      text: '대기시간 임금 AI 점검',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '휴게시간 운영 기준과 위법 여부', href: '/guide/wage' },
      { label: '연장근로수당 정확한 계산', href: '/guide/wage/wage-overtime-unpaid-claim' },
      { label: '야간·휴일근로 가산수당', href: '/guide/wage/wage-night-shift-premium-claim' },
      { label: '포괄임금제 시간외수당 판별', href: '/guide/wage/wage-pogual-fixed-vs-ot-difference' },
      { label: '최저임금 위반 진정 절차', href: '/guide/wage/minimum-wage-violation-complaint' },
    ],
  },

  // ─── 7. dismissal / sns-criticism-legitimacy ───
  {
    domain: 'dismissal',
    slug: 'dismissal-sns-criticism-legitimacy',
    keyword: 'SNS 회사 비방 해고 정당성',
    questionKeyword: 'SNS에 회사 비판 글 올려서 해고됐는데 부당해고인가요?',
    ctaKeyword: 'SNS 비방 해고 부당성 확인',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: 'SNS 회사 비방 해고, 정당한가요? | 로앤가이드',
      description:
        '블라인드·SNS에 회사 비판 글을 올린 후 해고됐다면 정당성 여부를 확인하세요. 사실적시·특정성·절차 하자 판단 기준을 지금 정리합니다.',
    },
    intro:
      '<p>답답한 마음에 블라인드나 SNS에 회사 이야기를 올렸더니 "명예훼손이니 해고"라는 통보를 받았습니다. 표현의 자유와 회사 명예 사이의 경계가 헷갈리는데, 모든 비판 글이 곧 해고 사유가 되는 건 아닙니다. 사실 적시 여부, 회사 특정성, 징계 절차 준수 여부에 따라 해고가 부당해고로 판단될 수 있는 기준을 정리합니다.</p>',
    sections: [
      {
        title: '해고 정당성의 법적 기준',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제23조는 해고에 정당한 이유가 있어야 하며, 사회통념상 고용관계를 계속할 수 없을 정도의 중대한 사유가 필요합니다.</strong></p>\n<ul>\n<li><strong>징계해고의 요건</strong> — 취업규칙 등에 징계 사유가 명시되어 있어야 하고, 사회통념상 정당성이 인정되어야 합니다.</li>\n<li><strong>비례의 원칙</strong> — 징계 수준은 비위의 경중에 비례해야 하며, 경미한 사안에 해고를 적용하면 양정 과다로 부당해고가 될 수 있습니다.</li>\n<li><strong>절차 준수</strong> — 취업규칙상 인사위원회·소명 기회 등 절차를 반드시 거쳐야 합니다.</li>\n<li><strong>서면 통지</strong> — 근로기준법 제27조: 해고 사유와 시기를 서면으로 통지해야 효력이 발생합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 해고가 정당하려면 사유의 중대성·비례성·절차 준수가 모두 충족되어야 합니다.</blockquote>',
      },
      {
        title: '사실 적시 vs 허위 사실 — 징계 수위가 다릅니다',
        content:
          '<p><strong style="color:#1e3a5f">사실을 적시한 경우와 허위 사실을 유포한 경우는 법적 평가와 징계 수위가 크게 다릅니다.</strong></p>\n<ul>\n<li><strong>사실 적시</strong> — 형법상 명예훼손죄가 성립할 수 있지만 공공의 이익을 위한 것이면 위법성이 조각됩니다(형법 제310조). 해고 정당성도 공익성·진실성에 따라 달라집니다.</li>\n<li><strong>허위 사실</strong> — 회사에 구체적 손해가 발생했다면 해고 정당성이 인정되기 쉽고, 형사적으로도 가중 처벌됩니다.</li>\n<li><strong>의견 표명</strong> — 단순 의견 표명·감정 표현은 사실 적시와 달리 명예훼손이 성립하지 않을 가능성이 있습니다.</li>\n<li><strong>공익성 판단</strong> — 내부 부조리·위법 행위를 고발하는 내용이라면 공익 목적이 인정되어 징계 정당성이 약해집니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 상황의 해고 정당성을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '회사 특정성 — 익명 게시도 처벌 가능',
        content:
          '<p><strong style="color:#1e3a5f">익명 커뮤니티에 올린 글이라도 회사·직책·동료가 특정 가능하면 명예훼손이 성립할 수 있습니다.</strong></p>\n<ul>\n<li><strong>특정성 기준</strong> — 글의 내용, 게시된 커뮤니티의 성격, 회사 규모 등을 종합적으로 고려해 제3자가 해당 회사·인물을 알 수 있는지 판단합니다.</li>\n<li><strong>블라인드 특징</strong> — 블라인드는 회사 인증 기반이므로 동종 업계·내부 구성원에게 특정성이 높게 인정됩니다.</li>\n<li><strong>추적 가능성</strong> — 경찰·검찰 수사 단계에서 IP·계정 추적이 이루어지면 작성자 신원이 드러날 수 있습니다.</li>\n<li><strong>증거 제출 의무</strong> — 회사가 해고 사유로 특정성을 주장하려면 글 내용·게시 시각·특정성 근거 자료를 제시해야 합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "익명이니 안전하다"는 오판은 위험합니다. 작성 단계부터 특정성·사실성·표현 수위를 점검해야 합니다.</blockquote>',
      },
      {
        title: '해고 후 구제 절차 — 3개월 이내 노동위원회',
        content:
          '<p><strong style="color:#1e3a5f">해고가 부당하다고 판단되면 해고 통지일로부터 3개월 이내에 노동위원회에 구제신청을 해야 합니다.</strong></p>\n<ul>\n<li><strong>기한 3개월</strong> — 근로기준법 제28조: 해고 통지일부터 3개월이 지나면 구제신청이 불가능합니다. 이 기한은 엄격하게 적용됩니다.</li>\n<li><strong>증거 확보</strong> — 해고 통지서·인사위원회 소명자료·회사 징계 기록·해당 게시글 캡처·공익성 근거 자료 등을 정리합니다.</li>\n<li><strong>노동위원회 신청</strong> — 관할 지방노동위원회에 부당해고 구제신청서를 제출합니다. 조사·심문 과정을 거쳐 판정을 받습니다.</li>\n<li><strong>원직복직·금전보상</strong> — 구제 인용 시 원직복직이 원칙이며, 복직 불가능 시 금전보상이 가능합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 구제신청 전에 해고 사유서를 서면으로 요청해 회사의 주장을 정확히 파악하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 근로자 지위 판단의 종합 기준',
        summary:
          '대법원 2023다54914 사건(대법원, 2026.01.29 선고)에서 법원은 근로기준법상 근로자에 해당하는지 판단하는 기준으로 "사용자의 지휘·감독 관계, 업무 내용의 귀속, 근로 제공의 독립성 등을 종합적으로 고려해야 한다"고 판시했습니다.',
        takeaway:
          'SNS 발언이 해고 사유로 정당한지 판단할 때도 근로자 지위와 사용자의 지휘·감독 범위, 비위의 중대성·공익성을 종합적으로 검토해 결정해야 합니다.',
      },
    ],
    faq: [
      {
        question: '블라인드에 익명으로 올렸는데도 해고가 가능한가요?',
        answer:
          '<strong>특정성이 인정되면 가능합니다.</strong> 회사 인증 기반인 블라인드는 내용에 따라 특정성이 쉽게 인정되며, 경찰 수사로 작성자 추적도 가능합니다.',
      },
      {
        question: '사실을 올렸는데도 해고되나요?',
        answer:
          '<strong>사실 적시도 명예훼손이 될 수 있습니다.</strong> 다만 공공의 이익을 위한 목적이 인정되면 위법성이 조각되어 해고 정당성이 약해집니다.',
      },
      {
        question: '징계위원회를 안 거치고 바로 해고했으면 부당해고인가요?',
        answer:
          '<strong>네, 절차 하자로 해고가 무효가 될 수 있습니다.</strong> 취업규칙에 정해진 징계 절차를 거치지 않은 해고는 절차적 정당성이 부족하여 부당해고로 판단됩니다.',
      },
      {
        question: '해고 통지를 카톡으로만 받았어도 효력이 있나요?',
        answer:
          '<strong>근로기준법상 서면 통지가 원칙이므로 카톡만으로는 효력이 약합니다.</strong> 판례는 카톡·이메일 통지의 효력을 제한적으로만 인정하며, 서면이 아닌 해고는 무효 주장이 가능합니다.',
      },
      {
        question: '노동위원회 구제신청과 형사 명예훼손은 별개인가요?',
        answer:
          '<strong>네, 별개 절차입니다.</strong> 형사 명예훼손은 검찰·법원에서, 부당해고 구제는 노동위원회에서 진행되며 결과도 별개로 결정됩니다. 두 절차 모두 신중히 대응해야 합니다.',
      },
      {
        question: '해고 후 재취업했는데도 구제신청 실익이 있나요?',
        answer:
          '<strong>네, 금전보상으로 구제받을 수 있습니다.</strong> 재취업으로 원직복직이 불가능해도 노동위원회는 해고가 부당했다면 금전보상 명령을 내릴 수 있습니다.',
      },
    ],
    cta: {
      text: 'SNS 비방 해고 부당성 AI 점검',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '부당해고 구제신청 종합 가이드', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
      { label: '해고 서면통지 요건', href: '/guide/dismissal/dismissal-nonface-notification-validity' },
      { label: '징계해고 절차 위반', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '해고 사유서 요청 방법', href: '/guide/dismissal/dismissal-reason-request-template' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
    ],
  },

  // ─── 8. dismissal / tardiness-repeated-discipline ───
  {
    domain: 'dismissal',
    slug: 'dismissal-tardiness-repeated-discipline',
    keyword: '지각 결근 반복 해고 정당성',
    questionKeyword: '지각·결근 반복으로 해고됐는데 부당해고인가요?',
    ctaKeyword: '근태 해고 부당성 AI 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '지각·결근 반복 해고, 부당해고인가요? | 로앤가이드',
      description:
        '근태 불량으로 해고됐을 때 정당성 판단 기준과 구제 절차를 정리했습니다. 사전 경고·비례 원칙·절차 준수를 지금 확인하세요.',
    },
    intro:
      '<p>몇 번 지각하고 몇 번 결근했더니 회사가 "상습적 근태 불량"이라며 해고 통보를 했습니다. 근태 관리가 중요한 건 알지만 바로 해고가 정당한지 의문이 듭니다. 실제로 판례는 근태 불량을 이유로 한 해고에 반복성·상당성·개선 기회 부여의 세 가지 요건을 요구합니다. 부당해고 주장 기준과 구제 절차를 정리합니다.</p>',
    sections: [
      {
        title: '근태 불량 해고의 법적 요건',
        content:
          '<p><strong style="color:#1e3a5f">근태 불량으로 해고가 정당하려면 반복성, 상당성, 개선 여지 부재가 모두 충족되어야 합니다.</strong></p>\n<ul>\n<li><strong>반복성</strong> — 단발성 지각·결근이 아니라 지속적·빈번하게 발생해야 합니다.</li>\n<li><strong>상당성</strong> — 업무 지장·근로관계 유지 가능성 상실 등 사회통념상 고용관계를 이어갈 수 없을 정도여야 합니다.</li>\n<li><strong>개선 기회 부여</strong> — 회사가 서면 경고·시정 지시 등 개선 기회를 줬음에도 개선되지 않아야 합니다.</li>\n<li><strong>비례의 원칙</strong> — 경고·감봉 등 경한 징계로 해결 가능한 사안에 해고를 적용하면 양정 과다입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 한두 번의 지각·결근만으로는 해고가 정당화되기 어렵고, 서면 경고 없이 바로 해고한 경우도 부당해고로 판단되기 쉽습니다.</blockquote>',
      },
      {
        title: '정당한 지각·결근 사유의 인정',
        content:
          '<p><strong style="color:#1e3a5f">지각·결근에 정당한 사유가 있고 적절히 통보했다면 근태 불량으로 보기 어렵습니다.</strong></p>\n<ul>\n<li><strong>질병·부상</strong> — 병원 진료·입원으로 근무가 불가능한 경우 진단서로 소명하면 공가 또는 병가로 처리됩니다.</li>\n<li><strong>가족 돌봄</strong> — 가족 돌봄 휴가(남녀고용평등법), 가족 사망·긴급 간병 등은 정당한 사유입니다.</li>\n<li><strong>교통사고·천재지변</strong> — 교통사고·폭설·홍수 등 불가항력 사유는 지각·결근으로 보지 않습니다.</li>\n<li><strong>연차 사용</strong> — 사전 신청한 연차는 결근이 아니며, 회사의 시기변경권 행사가 위법이면 연차 취소가 불가합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 근태 해고의 정당성 여부를 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '절차 하자가 있는 해고의 무효',
        content:
          '<p><strong style="color:#1e3a5f">해고 사유가 정당해도 절차를 지키지 않으면 해고가 무효가 됩니다.</strong></p>\n<ul>\n<li><strong>취업규칙상 징계 절차</strong> — 인사위원회 개최, 본인 소명 기회 부여, 의견 진술 보장 등 사내 규정을 준수해야 합니다.</li>\n<li><strong>서면 통지 의무</strong> — 해고 사유와 시기를 서면으로 통지하지 않은 해고는 무효입니다(근로기준법 제27조).</li>\n<li><strong>해고 예고</strong> — 3개월 이상 근속한 근로자는 30일 전 예고 또는 30일분의 해고예고수당 지급이 필요합니다(제26조).</li>\n<li><strong>사유·시기 특정</strong> — 서면 통지서에 구체적 사유와 시기가 명시되어야 하며, 추상적 표현만 있으면 무효 주장이 가능합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 해고 후 30일분 수당을 받았다고 해서 해고의 정당성을 인정한 것은 아닙니다. 부당해고 구제신청은 별개로 가능합니다.</blockquote>',
      },
      {
        title: '구제 절차 — 3개월 이내 노동위원회',
        content:
          '<p><strong style="color:#1e3a5f">해고가 부당하다고 판단되면 해고 통지일로부터 3개월 이내에 지방노동위원회에 구제신청을 해야 합니다.</strong></p>\n<ul>\n<li><strong>기한 엄격</strong> — 3개월 기한은 제척기간으로, 하루라도 넘기면 구제신청이 불가능합니다.</li>\n<li><strong>증거 확보</strong> — 근태 기록, 사전 경고 여부, 해고 통지서, 소명 기회 부여 기록, 정당한 사유 입증 자료를 정리합니다.</li>\n<li><strong>구제 신청서 제출</strong> — 관할 지방노동위원회(사업장 소재지 기준)에 서면 또는 온라인으로 접수합니다.</li>\n<li><strong>인용 효과</strong> — 구제 인용 시 원직복직 + 해고 기간 임금 상당액 지급이 원칙입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 노동위원회 심판 결과에 불복하면 중앙노동위원회 재심 → 행정소송으로 다툴 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 근로자 지위 상실 시 금전보상 가능',
        summary:
          '대법원 2025두33276 사건(대법원, 2025.10.16 선고)에서 법원은 근로자가 부당해고 구제신청을 할 때 이미 정년 도달 또는 근로계약 기간 만료로 근로자 지위가 존재하지 않는 경우에도, 원직복직이 불가능하더라도 금전보상 방법에 의한 구제가 가능하다고 판시했습니다.',
        takeaway:
          '지각·결근 사유로 해고된 후 다른 사정으로 원직복직이 어려워도 노동위원회가 금전보상 명령을 내릴 수 있으므로, 구제신청 시점만 놓치지 않으면 실질적 회복이 가능합니다.',
      },
    ],
    faq: [
      {
        question: '몇 번 이상 지각하면 해고가 정당한가요?',
        answer:
          '<strong>정해진 횟수 기준은 없습니다.</strong> 업무 지장 정도, 사전 경고 여부, 정당한 사유 유무 등을 종합적으로 판단합니다. 일반적으로 수개월에 걸친 반복적·지속적 지각·결근이 문제가 됩니다.',
      },
      {
        question: '사전 경고 없이 바로 해고하면 부당해고인가요?',
        answer:
          '<strong>절차적 정당성이 부족해 부당해고로 판단될 가능성이 높습니다.</strong> 개선 기회를 주지 않은 해고는 비례의 원칙에 어긋나며, 사내 징계 규정 위반이 되면 무효입니다.',
      },
      {
        question: '진단서 제출로 소명한 지각도 결근으로 처리될 수 있나요?',
        answer:
          '<strong>정당한 사유로 소명된 지각은 결근이나 근태 불량으로 볼 수 없습니다.</strong> 진단서·교통확인서·가족관계증명서 등 객관적 자료가 있으면 회사가 이를 인정해야 합니다.',
      },
      {
        question: '해고예고수당을 받았는데 구제신청 가능한가요?',
        answer:
          '<strong>네, 별개 절차입니다.</strong> 해고예고수당은 절차적 권리 보장이고, 부당해고 구제는 사유·절차의 정당성 심사입니다. 둘은 독립적으로 주장할 수 있습니다.',
      },
      {
        question: '5인 미만 사업장도 부당해고 구제가 가능한가요?',
        answer:
          '<strong>5인 미만 사업장은 부당해고 구제신청 대상에서 제외됩니다.</strong> 다만 해고 예고 의무, 서면통지 의무는 일부 적용되며, 민사상 손해배상 청구는 가능합니다.',
      },
      {
        question: '구제신청 기한을 놓치면 방법이 없나요?',
        answer:
          '<strong>노동위원회 구제는 불가능하지만 민사 소송은 가능합니다.</strong> 해고 무효 확인 소송, 임금 상당액 청구 등을 민사 법원에 제기할 수 있으며, 이 경우 근로계약·임금청구권의 일반 소멸시효(3년)가 적용됩니다.',
      },
    ],
    cta: {
      text: '근태 해고 부당성 AI 점검',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '부당해고 구제신청 종합 가이드', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
      { label: '해고 서면통지 필수 요건', href: '/guide/dismissal/dismissal-nonface-notification-validity' },
      { label: '징계 절차 하자 부당해고', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '해고예고수당 계산법', href: '/guide/dismissal/dismissal-notice-pay-calculation' },
      { label: '5인 미만 사업장 해고 옵션', href: '/guide/dismissal/dismissal-small-business-under5-options' },
    ],
  },
];
