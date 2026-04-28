import { SpokePage } from '../spoke-pages';

// batch48 misc 7개
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 비정규직에서 정규직으로 전환된 근로자가 전환 전후 계속근로기간 통산 여부와 퇴직금 산정 기준을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 과거 퇴직금 중간정산을 받은 근로자가 어떤 사유에서 재정산이 가능한지 검토하도록 돕는 페이지다.
// 3. 이 페이지는 비양육친이 해외에 거주해 양육비를 추심하기 어려운 양육자가 국제사법·외국판결승인·이행관리원 협력 절차를 정리하도록 돕는 페이지다.
// 4. 이 페이지는 카드론을 다른 카드사 대출로 돌려막다 한도가 막힌 채무자가 개인회생 신청 가능성과 채권자목록 작성 시 유의점을 점검하도록 돕는 페이지다.
// 5. 이 페이지는 주채무자 부도로 보증채무를 떠안은 보증인이 파산·면책으로 보증채무가 정리될 수 있는지 절차를 정리하도록 돕는 페이지다.
// 6. 이 페이지는 출퇴근 중 사고를 당한 근로자가 출퇴근재해(통근재해) 인정 요건과 산재 신청 흐름을 정리하도록 돕는 페이지다.
// 7. 이 페이지는 음주운전으로 면허 취소·정지 처분을 받은 운전자가 행정심판으로 면허 회복(감경)을 시도할 때 절차와 준비서류를 정리하도록 돕는 페이지다.

export const spokesBatch48Misc: SpokePage[] = [
  // ─── 1. retirement / 비정규→정규 전환 계속근로기간 통산 ───
  {
    domain: 'retirement',
    slug: 'retirement-irregular-to-regular-conversion-calc',
    keyword: '비정규직 정규직 전환 계속근로기간 퇴직금',
    questionKeyword: '계약직으로 2년 일하다 정규직 전환됐는데 퇴직금 계산할 때 계약직 기간도 합산되나요?',
    ctaKeyword: '계속근로기간 통산 여부 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '비정규→정규 전환 퇴직금 계속근로기간 통산 5단계 | 로앤가이드',
      description:
        '계약직·파견직에서 정규직으로 전환된 근로자의 계속근로기간 통산 기준과 퇴직금 산정 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"계약직 2년 + 정규직 3년 = 총 5년인데 퇴직금이 정규직 3년치만 나왔어요"라는 상담이 자주 들어옵니다. 회사가 "전환 시점에 한 번 정산했다"고 주장하거나 계약 형태가 바뀌면서 자동으로 계속근로기간이 끊겼다고 안내하는 경우가 있죠. 그러나 근로자퇴직급여보장법은 실질적으로 동일한 사용자 아래에서 계속 근로한 기간을 합산해 산정하도록 규정하고 있습니다. 어떤 경우에 통산이 인정되고 어떤 경우에 단절되는지를 정리합니다.</p>',
    sections: [
      {
        title: '계속근로기간 통산이 인정되는 핵심 기준',
        content:
          '<p><strong style="color:#1e3a5f">근로 형태가 바뀌어도 동일 사용자·실질적 계속 근무라면 통산되는 것이 원칙입니다.</strong></p>\n<ul>\n<li><strong>실질적 동일 사용자</strong> — 사업장명·사용자가 같으면 계약 형태(계약직→정규직)가 바뀌어도 계속근로로 봅니다. 외형적 계약 갱신·해지 절차가 있더라도 형식적이라면 통산됩니다.</li>\n<li><strong>중간 단절 기간</strong> — 보통 1~2개월 이내의 짧은 공백은 단절로 보지 않습니다. 단, 단절 기간이 길고 그 사이 다른 회사에 취업했다면 단절될 수 있습니다.</li>\n<li><strong>중간 정산 효과</strong> — 근로자가 명시적으로 동의해 적법하게 중간정산을 받았다면 그 시점부터 새로 기산됩니다(근로자퇴직급여보장법 제8조 제2항).</li>\n<li><strong>파견·하청에서 직접고용으로 전환</strong> — 파견근로자보호법상 직접고용간주 효과가 발생한 경우, 파견 기간도 산입되는지는 사실관계에 따라 달라질 수 있어 개별 검토가 필요합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "전환 시 형식적으로 계약을 한 번 끊었다"는 회사 주장은 실질을 보고 판단합니다. 단순한 서류 절차만으로 통산이 차단되지 않습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 통산 여부 확인부터 청구까지 5단계',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 안내 절차 기준으로 보면, 다음 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근로계약서·재직증명서 수집 (즉시)</strong> — 비정규직 시기부터 정규직 전환 이후까지 모든 계약서·재직증명서·급여명세서를 모읍니다. 단절 여부 판단의 기초자료입니다.</li>\n<li><strong>2단계 — 중간정산 동의서·수령 영수증 확인 (1주)</strong> — 회사가 "중간정산했다"고 주장한다면 본인 서명 동의서가 있는지 확인합니다. 동의서 없거나 실수령액이 없으면 중간정산 효력이 부인될 수 있습니다.</li>\n<li><strong>3단계 — 회사에 퇴직금 재산정 요청 (서면, 2주 내)</strong> — 정규직 전환 전 기간을 포함한 통산 계속근로기간 기준으로 재산정을 서면 요청합니다. 내용증명으로 발송하면 시효 중단 효과가 있을 수 있습니다.</li>\n<li><strong>4단계 — 노동청 진정 (요청 거부 시)</strong> — 관할 고용노동지청에 임금체불(퇴직금 미지급) 진정. 근로감독관 조사 → 시정지시 → 미이행 시 형사 송치.</li>\n<li><strong>5단계 — 민사소송 (필요 시)</strong> — 노동청 절차로 해결되지 않으면 임금청구 소송. 퇴직금 청구권 시효는 3년이므로 시효 관리가 중요합니다.</li>\n</ol>\n<p><strong>준비서류 핵심</strong></p>\n<ul>\n<li>전 기간 근로계약서 (비정규직·정규직 전부)</li>\n<li>재직증명서·경력증명서 (입사일·전환일·퇴사일 명시)</li>\n<li>최근 3개월 급여명세서 (평균임금 산정용)</li>\n<li>중간정산 동의서·수령 내역 (있다면)</li>\n<li>4대보험 가입이력 (국민연금공단 발급)</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">계약 형태 변경 시 통산 여부와 평균임금 산정 포인트를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '평균임금 산정 — 정규직 전환 후 임금이 오른 경우',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금은 통상 퇴직 직전 3개월 평균임금 기준으로 산정합니다.</strong></p>\n<ul>\n<li><strong>퇴직 직전 3개월</strong> — 근로기준법 제2조 제1항 제6호. 정규직 시기 임금이 오른 상태로 퇴직했다면 그 임금 기준으로 전 계속근로기간 분량이 산정됩니다.</li>\n<li><strong>특별한 사정이 있는 경우</strong> — 직전 3개월에 휴직·휴업이 있거나 특수 사정으로 평균임금이 통상 임금보다 낮으면 통상임금 기준으로 산정될 수 있습니다.</li>\n<li><strong>상여금·고정수당 포함</strong> — 정기적·계속적으로 지급된 상여금·식대·교통비 등 고정수당은 평균임금에 포함됩니다. 회사가 "기본급 기준"만 적용하면 다툴 수 있습니다.</li>\n<li><strong>퇴직금 = 평균임금 30일분 × (계속근로연수)</strong> — 통산 인정 시 비정규직 기간도 포함해 계산합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 평균임금 계산은 정확한 항목 분류가 중요합니다. 급여명세서를 보관하고 항목별 정기성·계속성 여부를 정리해두면 다툴 때 유리합니다.</blockquote>',
      },
      {
        title: '흔한 실수 — 통산 청구를 막는 함정',
        content:
          '<p><strong style="color:#1e3a5f">아래 3가지를 피하면 청구가 훨씬 수월해집니다.</strong></p>\n<ul>\n<li><strong>회사가 만든 "전환 동의서" 무심코 서명</strong> — "전환 시 이전 기간을 정산받음에 동의함" 같은 문구가 들어 있으면 후일 분쟁의 빌미가 됩니다. 서명 전 가능한 한 노동상담을 받아보는 것이 좋습니다.</li>\n<li><strong>중간정산을 받았다고만 알고 동의서·수령액을 확인 안 함</strong> — 적법 중간정산이 아니면 효력이 없을 수 있습니다. 동의서·실수령액 영수증을 확인하세요.</li>\n<li><strong>퇴직금 청구권 시효 3년 경과</strong> — 퇴직일로부터 3년 내에 청구해야 합니다. 시효가 임박했다면 내용증명으로 시효 중단 조치를 우선 검토하세요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 무료 상담은 대한법률구조공단 132 또는 고용노동부 1350에서 받아보실 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 파견근로자 직접고용간주 후 계속근로기간 산정',
        summary:
          '대법원 2020다287921 사건(대법원, 2024.07.25 선고)에서 법원은 구 파견근로자 보호 등에 관한 법률에 따라 직접고용간주의 효과가 발생하였으나 사용사업주가 현실적으로 직접고용을 하지 않아 파견근로자가 파견사업주 소속으로 계속 사용사업주에게 근로를 제공한 경우, 그 기간의 근로 실태를 종합적으로 고려해 계속근로기간을 평가해야 한다고 판시했습니다.',
        takeaway: '계약 형태가 변하더라도 실질적 근로관계의 연속성이 인정되면 계속근로로 평가될 수 있다는 점을 시사합니다.',
      },
    ],
    faq: [
      {
        question: '계약직으로 1년 끝난 뒤 1개월 쉬고 정규직으로 들어왔어요. 통산되나요?',
        answer:
          '<strong>1개월 정도의 단절은 통상 단절로 보지 않습니다.</strong> 같은 회사·같은 업무로 복귀했고 단절이 형식적이었다면 계속근로로 인정될 가능성이 있습니다. 단절 사유와 그 기간을 함께 검토해야 합니다.',
      },
      {
        question: '비정규직 시기에 받은 퇴직금이 있는데 어떻게 처리되나요?',
        answer:
          '<strong>적법한 중간정산이라면 그 시점부터 새로 기산됩니다.</strong> 다만 근로자 동의 없이 회사가 일방적으로 정산했거나 동의서가 부실하면 효력이 부인될 수 있어 다툴 여지가 있습니다.',
      },
      {
        question: '파견회사 소속으로 일하다 직접고용된 경우 파견 기간도 합산되나요?',
        answer:
          '<strong>경우에 따라 다릅니다.</strong> 파견근로자보호법상 직접고용간주 사유가 인정되거나 실질적 사용자가 동일하다고 평가되면 통산될 수 있습니다. 사실관계 검토가 필요합니다.',
      },
      {
        question: '회사가 "전환 시 정산했으니 더 줄 게 없다"고 합니다. 어떻게 다투나요?',
        answer:
          '<strong>적법한 중간정산이었는지 먼저 확인해야 합니다.</strong> 본인 서명 동의서·실수령액 영수증이 없으면 중간정산 효력이 부인될 수 있습니다. 노동청 진정으로 객관적 판단을 받아보는 방법을 검토하세요.',
      },
      {
        question: '퇴직금 청구권은 언제까지 행사할 수 있나요?',
        answer:
          '<strong>퇴직일로부터 3년입니다(근로자퇴직급여보장법 제10조).</strong> 시효가 임박했다면 내용증명 발송으로 시효 중단을 시도하거나 곧바로 노동청 진정·민사소송을 검토하는 것이 좋습니다.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산법과 평균임금 기준', href: '/guide/retirement/retirement-calculation-average-wage' },
      { label: '퇴직금 중간정산 사유와 절차', href: '/guide/retirement/retirement-interim-settlement-guide' },
      { label: '계약직 퇴직금 청구 권리', href: '/guide/retirement/retirement-fixed-term-eligibility' },
      { label: '퇴직금 미지급 노동청 진정', href: '/guide/retirement/retirement-unpaid-labor-office-complaint' },
      { label: '평균임금 vs 통상임금 차이', href: '/guide/retirement/retirement-average-vs-ordinary-wage' },
    ],
  },

  // ─── 2. retirement / 중간정산 후 재정산 가능성 ───
  {
    domain: 'retirement',
    slug: 'retirement-interim-settlement-redo-conditions',
    keyword: '퇴직금 중간정산 후 재정산',
    questionKeyword: '몇 년 전에 퇴직금 중간정산을 받았는데 다시 정산받을 수 있는 방법이 있나요?',
    ctaKeyword: '중간정산 후 재정산 가능성 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '퇴직금 중간정산 후 재정산 5가지 가능 사유 | 로앤가이드',
      description:
        '과거 퇴직금 중간정산을 받았지만 다시 정산이 가능한 사유와 무효 주장 가능성, 노동청 진정 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"3년 전쯤 퇴직금 중간정산을 받았는데 그게 정말 효력이 있었는지 모르겠어요"라는 상담이 늘고 있습니다. 회사가 권유해서 무심코 서명했거나, 정작 받은 돈이 산정 기준에 비해 적었다는 의문이 드는 분들이 계실 거예요. 근로자퇴직급여보장법 제8조 제2항은 적법한 중간정산 사유와 동의 절차를 엄격히 규정합니다. 이 요건을 갖추지 못한 중간정산은 효력이 부인될 수 있고, 그 경우 전 계속근로기간 기준으로 재산정이 가능합니다. 핵심을 정리합니다.</p>',
    sections: [
      {
        title: 'Q. 중간정산이 무효가 되는 사유는 어떤 것이 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 법령상 사유에 해당하지 않거나 근로자 동의가 부실하면 중간정산 효력이 부인될 수 있습니다.</strong></p>\n<ul>\n<li><strong>법령상 중간정산 사유</strong> — 근로자퇴직급여보장법 시행령 제3조에 따른 무주택자 주택구입·전세, 본인·가족 6개월 이상 요양, 파산·회생 결정, 임금피크제 도입 등 한정 사유. 이 사유에 해당하지 않으면 무효 주장이 가능합니다.</li>\n<li><strong>근로자 서명 동의 부재</strong> — 회사가 일방적으로 정산했거나 동의서가 백지·서명 위조라면 효력이 인정되지 않습니다.</li>\n<li><strong>실수령액 부족</strong> — 동의서가 있어도 실제 지급액이 산정 기준보다 현저히 적으면 미지급 분량을 다툴 수 있습니다.</li>\n<li><strong>합의 형식 분쟁</strong> — "퇴직금 일부 선지급"이 실질적으로 중간정산이었는지, 단순 가불금이었는지에 따라 효력이 달라집니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "동의서에 서명했으니 끝"이 아닙니다. 사유·금액·실수령 모두를 함께 검토해야 합니다.</blockquote>',
      },
      {
        title: 'Q. 무효라면 그 시기의 계속근로기간은 어떻게 처리되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 중간정산이 무효라면 그 시점에 단절된 것으로 보지 않고, 입사일부터 퇴직일까지 통산해 다시 산정합니다.</strong></p>\n<ul>\n<li><strong>전 계속근로기간으로 재산정</strong> — 무효이면 처음부터 단절이 없었던 것처럼 평균임금 기준으로 다시 계산합니다. 받은 중간정산금은 임시 선지급으로 처리되어 최종 퇴직금에서 공제됩니다.</li>\n<li><strong>최근 3개월 평균임금 기준</strong> — 퇴직 직전 3개월 평균임금이 기준이므로, 중간정산 당시 임금보다 현재 임금이 더 높다면 차액이 발생합니다.</li>\n<li><strong>이자·지연손해금</strong> — 미지급 임금에 대한 지연이자 청구도 가능할 수 있습니다(임금채권 연 5% 또는 14% 가산이자).</li>\n<li><strong>시효 관리</strong> — 청구권은 퇴직일로부터 3년. 재직 중에는 진행되지 않으니 퇴사 후 빨리 움직이는 것이 좋습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">중간정산 무효 가능성과 차액 산정 방법을 AI가 사례별로 안내해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 재정산 청구 흐름',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 절차 기준으로 보면, 다음 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 수집 (즉시, 1~2주)</strong> — 입사·중간정산·퇴사 시점의 모든 근로계약서·급여명세서·중간정산 동의서·수령액 영수증을 모읍니다.</li>\n<li><strong>2단계 — 무효 사유 점검 (전문가 상담 1회)</strong> — 동의서·법령상 사유·실수령액을 점검해 무효 주장 근거를 정리합니다. 132(법률구조공단) 또는 1350(고용노동부) 무료 상담 활용.</li>\n<li><strong>3단계 — 회사에 재산정 요청 (서면, 2주)</strong> — 내용증명으로 무효 주장과 차액 청구를 통지합니다. 시효 중단 효과를 기대할 수 있습니다.</li>\n<li><strong>4단계 — 노동청 진정 (회사 거부 시)</strong> — 관할 고용노동지청에 임금체불 진정. 근로감독관 조사·시정지시 → 미이행 시 형사 송치.</li>\n<li><strong>5단계 — 민사소송 (필요 시)</strong> — 시정지시로 해결되지 않으면 임금청구 소송. 노동청 절차와 병행하는 경우도 있습니다.</li>\n</ol>',
      },
      {
        title: 'Q. 회사가 폐업해 사업주가 사라지면 어떻게 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 도산대지급금 제도로 일부 회수가 가능할 수 있습니다.</strong></p>\n<ul>\n<li><strong>도산대지급금</strong> — 임금채권보장법에 따라 사업주 도산 시 정부가 체불 임금·퇴직금 일부를 대신 지급. 최대 700만원 한도(연차별 차등).</li>\n<li><strong>간이대지급금</strong> — 도산이 아니더라도 법원 확정판결 또는 노동청의 체불 확인 시 700만원 한도로 지급. 절차가 간소합니다.</li>\n<li><strong>신청 기한</strong> — 사실상 도산 인정일 또는 확인서 발급일로부터 2년 이내. 빨리 신청하는 것이 좋습니다.</li>\n<li><strong>국세 압류 시 우선변제권</strong> — 임금채권은 다른 채권에 우선합니다(근로기준법 제38조). 회사 재산이 남아 있다면 우선변제 신청을 검토해볼 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 도산대지급금·간이대지급금은 신청 자격과 한도가 정해져 있습니다. 사례별 확인이 필요하니 1350 또는 132로 상담을 받아보세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 평균임금 산정의 기초 임금 의미',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 평균임금 산정의 기초가 되는 임금은 사용자가 근로의 대가로 근로자에게 지급하는 금품으로서, 계속적·정기적으로 지급되고 단체협약·취업규칙·급여규정·근로계약·노동관행 등에 의해 사용자에게 지급의무가 부여된 것이라고 판시했습니다.',
        takeaway: '중간정산·퇴직금 산정 시 정기적·고정적으로 받은 수당이 누락되었는지 검토할 가치가 있습니다.',
      },
    ],
    faq: [
      {
        question: '중간정산 동의서에 서명했는데도 무효 주장이 가능한가요?',
        answer:
          '<strong>법령상 중간정산 사유에 해당하지 않으면 동의서가 있어도 무효 주장 가능성이 있습니다.</strong> 시행령 제3조의 한정 사유 외 자유로운 중간정산은 효력이 부인될 수 있으니 사유부터 확인하세요.',
      },
      {
        question: '중간정산 받은 금액이 너무 적었던 것 같아요. 어떻게 확인하나요?',
        answer:
          '<strong>당시 평균임금 × 30일 × 계속근로연수 공식으로 재계산해보세요.</strong> 회사가 일부만 지급했다면 차액 청구가 가능할 수 있습니다. 급여명세서가 핵심 자료입니다.',
      },
      {
        question: '재정산 청구권 시효는 어떻게 되나요?',
        answer:
          '<strong>퇴직금 청구권은 퇴직일로부터 3년입니다.</strong> 다만 재직 중에는 시효가 진행되지 않을 수 있어 퇴직 후의 시효 관리가 중요합니다.',
      },
      {
        question: '회사가 "이미 정산이 끝났다"며 자료 제공을 거부하면 어떻게 하나요?',
        answer:
          '<strong>노동청 진정 시 근로감독관이 자료 제출을 명령할 수 있습니다.</strong> 회사가 자발적으로 응하지 않으면 노동청을 통해 자료 확보를 시도하는 것이 효과적입니다.',
      },
      {
        question: '동료가 같은 회사에서 재정산을 받았다는데 저도 자동으로 되나요?',
        answer:
          '<strong>개별 사정에 따라 결과가 달라집니다.</strong> 같은 회사라도 동의서 내용·평균임금 구성·근로 형태에 따라 결론이 달라질 수 있으니 본인 자료로 별도 검토가 필요합니다.',
      },
    ],
    cta: { text: '퇴직금 포함 항목, AI로 먼저 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 중간정산 적법 사유', href: '/guide/retirement/retirement-interim-settlement-2024-rules' },
      { label: '평균임금 산정 기준', href: '/guide/retirement/retirement-average-wage-criteria' },
      { label: '퇴직금 미지급 시 도산대지급금', href: '/guide/retirement/retirement-unpaid-substitute-payment' },
      { label: '임금체불 노동청 진정 절차', href: '/guide/wage/wage-unpaid-labor-office-complaint' },
      { label: '퇴직금 시효 관리법', href: '/guide/retirement/retirement-claim-expiration' },
    ],
  },

  // ─── 3. child-support / 해외 거주 부모 양육비 추심 ───
  {
    domain: 'child-support',
    slug: 'child-support-overseas-parent-pursuit',
    keyword: '해외 거주 부모 양육비 추심',
    questionKeyword: '비양육친이 해외에 살고 있는데 양육비를 받아낼 방법이 있나요?',
    ctaKeyword: '국제 양육비 추심 절차 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외 거주 부모 양육비 추심 5단계 절차 | 로앤가이드',
      description:
        '비양육친이 외국에 거주할 때 양육비이행관리원·국제사법·외국판결 승인 절차를 활용한 추심 흐름을 지금 확인하세요.',
    },
    intro:
      '<p>"전 배우자가 한국을 떠나 외국으로 갔는데 그 뒤로 양육비가 끊겼어요"라는 상담이 점점 늘고 있습니다. 출국한 사람을 어떻게 추심할 수 있을지 막막하고, 한국 법원 결정문이 외국에서도 효력이 있는지 의문이 드시죠. 양육비이행관리원(CSA)은 한국이 가입한 헤이그 아동부양협약을 통해 일부 국가와 국제 추심 협력을 진행하고 있습니다. 협약 가입국·미가입국별로 절차가 다른데 핵심을 정리합니다.</p>',
    sections: [
      {
        title: '국제 양육비 추심 — 무엇이 가능한가',
        content:
          '<p><strong style="color:#1e3a5f">한국은 2025년 헤이그 아동부양협약 발효국입니다. 협약 가입국에는 한국 결정의 승인·집행을 요청할 수 있습니다.</strong></p>\n<ul>\n<li><strong>헤이그 아동부양협약(2025년 한국 발효)</strong> — 가입국 간 양육비 결정의 승인·집행 협력. 미국·EU 다수국·호주·뉴질랜드 등 가입.</li>\n<li><strong>미가입국 — 외국법원 별도 소송</strong> — 한국 결정의 효력이 자동 인정되지 않으므로 해당 국가 법원에 별도로 양육비 청구 소송을 제기해야 할 수 있습니다.</li>\n<li><strong>국제사법 적용</strong> — 외국적 요소가 있는 양육비 사건은 국제사법 또는 협약에 따른 준거법·관할 결정이 필요합니다. 법원이 직권으로 조사할 의무가 있습니다.</li>\n<li><strong>한국 내 자산 추심</strong> — 비양육친이 한국에 부동산·예금·주식 등 재산을 남겨뒀다면 한국 내에서 강제집행이 가능할 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "외국에 산다 = 추심 불가"는 아닙니다. 가입국이라면 협약 절차, 미가입국이라면 외국법원 소송, 한국 자산이 있다면 국내 집행을 단계적으로 검토할 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 국제 추심 5단계',
        content:
          '<p><strong style="color:#1e3a5f">양육비이행관리원(CSA) 공식 절차 기준으로 보면, 다음 흐름으로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 양육비이행관리원 신청 (1644-6621, 즉시)</strong> — 국제 추심 협력 사건으로 접수. 거주국 정보·집행권원·신분 자료 제출.</li>\n<li><strong>2단계 — 비양육친 거주지 특정 (1~3개월)</strong> — 거주국 주소·고용 상태 등 확인. 출국기록·SNS·지인 진술도 자료가 됩니다. 외교부·재외공관 협조 요청도 검토.</li>\n<li><strong>3단계 — 헤이그 협약에 의한 외국 중앙당국 송부 (협약국, 3~6개월)</strong> — 외교부 또는 법무부를 통해 상대국 중앙당국에 한국 결정 송부. 상대국이 자체 절차로 집행을 진행합니다.</li>\n<li><strong>4단계 — 미가입국 — 해당국 법원에 직접 소송 (변호사 선임 필요)</strong> — 한국 결정의 외국 승인 가능성과 별도로 해당 국가에 양육비 청구 소송을 제기해야 할 수 있습니다.</li>\n<li><strong>5단계 — 한국 내 자산 강제집행 (병행 가능)</strong> — 비양육친이 한국에 남긴 재산이 있다면 가정법원의 직접지급명령·재산조회를 통해 한국 내 집행을 병행할 수 있습니다.</li>\n</ol>\n<p><strong>준비서류 핵심</strong></p>\n<ul>\n<li>집행권원 정본 (양육비 심판문·조정조서·공정증서)</li>\n<li>가족관계증명서·자녀 기본증명서</li>\n<li>비양육친 출국·거주국 자료 (출국기록·전 직장·연락처)</li>\n<li>한국 자산 존재 자료 (있는 경우)</li>\n<li>본인 신분증·통장 사본</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 산정기준표, AI로 계산해보기</strong></p>\n<p style="margin:0;font-size:0.95em">국제 추심과 국내 자산 강제집행을 어떻게 병행할지 AI가 흐름을 안내해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '협약 미가입국·소재 불명 시 대안',
        content:
          '<p><strong style="color:#1e3a5f">상대 국가가 협약에 미가입이거나 소재가 불명이라도 검토할 수 있는 경로가 있습니다.</strong></p>\n<ul>\n<li><strong>해당국 변호사 선임</strong> — 일부 국가는 한국 결정문을 외국에서 승인받기 위한 별도 절차가 필요할 수 있습니다. 현지 가족법 전문 변호사가 필요한 경우가 많습니다.</li>\n<li><strong>외교부 영사조력 신청</strong> — 비양육친 소재 파악에 영사·재외공관 협조를 요청할 수 있습니다. 단, 영사가 직접 양육비를 추심해주는 것은 아닙니다.</li>\n<li><strong>출입국·관세청 자료 활용</strong> — 가정법원의 사실조회 신청을 통해 출입국기록·세관 자료 등으로 한국 입국 시 위치를 추적할 수 있습니다.</li>\n<li><strong>한국 입국 시 강제집행</strong> — 비양육친이 일시 귀국할 때 출국금지·예금 압류·재산 조회 등 강제집행 조치를 검토할 수 있습니다.</li>\n<li><strong>한시적 양육비 긴급지원</strong> — 양육비이행관리원의 한시적 양육비 지원 제도(긴급지원금)를 통해 추심 진행 중에도 일정 금액을 받을 수 있는 가능성이 있습니다(요건 확인 필요).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 양육비 추심이 장기화되면 양육자 가계가 흔들립니다. 한시적 양육비 긴급지원이 가능한지 양육비이행관리원에 먼저 문의해보세요.</blockquote>',
      },
      {
        title: '국제 추심 시 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 3가지를 피하면 추심 절차가 한결 빨라집니다.</strong></p>\n<ul>\n<li><strong>한국 결정 없이 바로 외국 소송 시도</strong> — 협약·승인 절차의 출발점은 한국 집행권원입니다. 우선 한국 가정법원에서 양육비 심판·조정을 확정해두는 것이 좋습니다.</li>\n<li><strong>거주국 특정 없이 막연히 신청</strong> — 비양육친의 현재 거주지·국적이 분명해야 협약 절차가 진행됩니다. 출국기록·통신·SNS로 거주국을 먼저 특정하세요.</li>\n<li><strong>한국 자산 추심을 빼먹기</strong> — 외국에 있더라도 한국에 부동산·예금·주식 등이 남아 있다면 국내 집행이 가장 빠른 길일 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 무료 상담은 양육비이행관리원(1644-6621), 대한법률구조공단(132)에서 받아보실 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 외국적 요소 있는 양육비 사건의 준거법',
        summary:
          '대법원 2023스643 사건(대법원, 2023.10.31 선고)에서 법원은 외국적 요소가 있는 법률관계에 적용되는 준거법으로서의 외국법은 사실이 아니라 법으로서, 법원이 직권으로 그 내용을 조사해야 한다고 판시했습니다. 따라서 외국적 요소가 있는 양육비 사건이라면 당사자 주장이 없더라도 법원이 국제협약·국제사법에 따른 준거법을 심리·조사할 의무가 있습니다.',
        takeaway: '국제 양육비 사건은 법원이 직권으로 준거법·관할을 검토하므로 사실관계 자료를 충분히 제출하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '비양육친이 미국에 사는데 한국 결정으로 미국 회사 월급에서 받을 수 있나요?',
        answer:
          '<strong>2025년 헤이그 아동부양협약 발효국이라면 가능성이 있습니다.</strong> 협약 절차에 따라 미국 중앙당국에 한국 결정 송부 후 미국 자체 절차로 집행이 진행됩니다. 양육비이행관리원에 신청해보세요.',
      },
      {
        question: '비양육친이 어디 사는지도 모릅니다. 어떻게 시작하나요?',
        answer:
          '<strong>출국기록·전 직장·SNS·지인 진술 등으로 거주국을 먼저 특정해야 합니다.</strong> 가정법원 사실조회 신청과 외교부 영사조력을 함께 활용하는 방법을 검토할 수 있습니다.',
      },
      {
        question: '한국에 비양육친 부동산이 있어요. 그것부터 압류할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 한국 내 자산은 거주지와 무관하게 한국 결정으로 강제집행할 수 있습니다. 부동산 등기부 확인 후 가압류·강제경매 절차를 검토해볼 수 있습니다.',
      },
      {
        question: '국제 추심은 시간이 얼마나 걸리나요?',
        answer:
          '<strong>협약 가입국이라도 통상 6개월~2년이 걸리는 경우가 많습니다.</strong> 미가입국 별도 소송은 더 길어질 수 있어 한국 자산 집행과 병행하는 방법을 검토하세요.',
      },
      {
        question: '한시적 양육비 긴급지원은 누구나 받을 수 있나요?',
        answer:
          '<strong>일정 요건(소득·미지급 기간 등)에 해당해야 합니다.</strong> 양육비이행관리원에 신청·심사 후 결정됩니다. 추심이 장기화될 때 검토할 만한 제도입니다.',
      },
    ],
    cta: { text: '양육비 못 받을 때 다음 단계, AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비이행관리원 무료 지원', href: '/guide/child-support/child-support-csa-free-support' },
      { label: '양육비 직접지급명령 절차', href: '/guide/child-support/child-support-direct-payment-order-process' },
      { label: '양육비 강제집행 재산 조회', href: '/guide/child-support/child-support-asset-investigation' },
      { label: '양육비 한시적 긴급지원 제도', href: '/guide/child-support/child-support-emergency-support' },
      { label: '국제 이혼·양육 사건 관할', href: '/guide/divorce/divorce-international-jurisdiction' },
    ],
  },

  // ─── 4. rehabilitation / 카드론 대환 후 회생 가능성 ───
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-card-loan-rollover-eligibility',
    keyword: '카드론 대환 개인회생 가능성',
    questionKeyword: '카드론을 다른 카드로 돌려막다가 더 이상 안 돼서 회생을 알아보는데 가능한가요?',
    ctaKeyword: '카드론 대환 후 회생 자격 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '카드론 돌려막기 후 개인회생 5가지 핵심 점검 | 로앤가이드',
      description:
        '카드론 대환·돌려막기로 한도가 막힌 채무자가 개인회생 신청 가능성과 채권자목록 작성 시 유의점을 지금 확인하세요.',
    },
    intro:
      '<p>"카드 한도가 다 막혀서 더 이상 돌려막을 곳이 없어요"라는 상담이 자주 들어옵니다. 카드론을 다른 카드로 막고, 그것을 또 다른 대출로 막다 보면 결국 모두가 한꺼번에 청구되는 시점이 옵니다. 개인회생은 정기 소득이 있는 채무자가 변제계획안에 따라 일정 기간 변제 후 남은 빚을 면책받을 수 있는 제도입니다(채무자 회생 및 파산에 관한 법률 제579조 이하). 카드론 대환 이력이 회생 신청에 어떻게 영향을 주는지 정리합니다.</p>',
    sections: [
      {
        title: 'Q. 카드론 대환·돌려막기 이력이 회생 신청을 막나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 단순 돌려막기 자체가 회생 신청을 막지는 않지만, "고의·악의 차입" 여부가 면책에 영향을 줄 수 있습니다.</strong></p>\n<ul>\n<li><strong>회생 자격</strong> — 정기·반복 소득 + 무담보채무 10억원 이하 + 담보채무 15억원 이하면 신청 가능. 대환 이력 자체는 결격사유가 아닙니다.</li>\n<li><strong>면책 불허가 사유 점검</strong> — 채무자 회생 및 파산에 관한 법률 제624조는 "재산을 은닉·손괴하거나 사기·도박 등으로 채무를 늘렸을 때" 면책 불허가 사유로 정합니다. 대환이 정상 생활비 충당이었다면 큰 문제가 되지 않을 가능성이 큽니다.</li>\n<li><strong>최근 차입 주의</strong> — 신청 직전 1년 이내 대규모 차입은 "면책 의도"로 의심받을 수 있습니다. 차입 시기·사용 내역 소명 자료가 중요합니다.</li>\n<li><strong>전부 채권자 목록 기재</strong> — 카드론·신용대출·사인 채무까지 빠짐없이 기재해야 면책 효력이 미칩니다(법 제625조).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 돌려막기 그 자체는 결격이 아닙니다. 다만 차입 시기·용도 소명이 약하면 면책 불허가 가능성이 생기므로 자료 정리가 관건입니다.</blockquote>',
      },
      {
        title: 'Q. 채권자목록에 누락된 빚도 면책되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 원칙적으로 면책 효력이 미치지 않습니다. 누락 채무는 절차 후에도 청구당할 수 있으니 빠짐없이 기재해야 합니다.</strong></p>\n<ul>\n<li><strong>법 제625조 제2항 단서 제1호</strong> — 채무자가 악의로 채권자목록에 기재하지 아니한 청구권은 면책에서 제외됩니다.</li>\n<li><strong>모든 채권자 빠짐없이</strong> — 카드사·캐피탈·저축은행·대부업체·지인 차용금까지 모두 기재. 소액이라도 빠뜨리지 마세요.</li>\n<li><strong>주민등록 주소·연락처 정확히</strong> — 채권자 송달이 안 되면 절차 지연. 최근 채권자 주소를 확인해 기재해야 합니다.</li>\n<li><strong>보증인이 있는 채무</strong> — 주채무자의 변제계획 인가가 보증채무에 미치는 영향이 제한적입니다(대법원 2024다221042 참조). 보증인이 따로 있다면 그에게도 영향을 미칠 수 있어 사전 안내가 필요합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 개인회생 신청 자격, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">카드론 대환 이력과 채권자목록 작성 시 주의점을 AI가 사례별로 안내해드립니다.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — KLAC 무료지원 활용 회생 절차',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단(KLAC) 공식 절차 기준으로 보면, 다음 흐름으로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — KLAC 132 상담 (사전 예약)</strong> — 기준 중위소득 125% 이하 또는 기초생활수급자라면 변호사 비용 면제 가능성 검토. 상담 시 카드론 사용 내역을 솔직히 공개.</li>\n<li><strong>2단계 — 채권자·소득·재산 자료 수집 (1~2주)</strong> — 모든 카드사·금융기관에 채무 잔액 조회. 신용정보원·신용회복위원회 자료도 활용.</li>\n<li><strong>3단계 — resu.klac.or.kr 신청서 자동작성 (1~2주)</strong> — 채권자목록·재산목록·변제계획안 작성. 차입 사용 내역(생활비·대환 충당) 소명 자료 첨부.</li>\n<li><strong>4단계 — 법원 개시 결정 → 변제계획 인가 (1~3개월)</strong> — 회생위원·법원 심사. 자동 중지 효과로 추심·압류 일시 차단.</li>\n<li><strong>5단계 — 변제 진행(3~5년) → 면책 결정</strong> — 변제 완료 시 잔여 채무 면책. 변제 중 사정변경 시 변제계획 변경 신청 가능.</li>\n</ol>',
      },
      {
        title: 'Q. 카드론 외에 다른 빚도 정리되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 채권자목록에 기재한 무담보·담보 채무 대부분이 변제계획에 포함됩니다. 다만 일부 비면책채권은 제외될 수 있습니다.</strong></p>\n<ul>\n<li><strong>포함되는 채무</strong> — 카드론·신용대출·캐피탈·저축은행·대부업체 채무 등 대부분의 일반 금융채무.</li>\n<li><strong>비면책채권 (법 제625조 제2항)</strong> — 조세·벌금·고의 불법행위 손해배상·양육비·고용임금·재해보상금 등 일부 채권은 면책 대상에서 제외됩니다.</li>\n<li><strong>주택담보대출</strong> — 별제권으로 다뤄지므로 변제계획에 따라 별도 처리. 주택을 유지할지 환가할지 전략적 판단이 필요합니다.</li>\n<li><strong>도박·횡령 등 악성 차입</strong> — 면책 불허가 사유에 해당하면 잔여 채무가 면책되지 않을 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: KLAC 무료 지원 자격이 안 된다면 신용회복위원회의 채무조정(워크아웃·프리워크아웃)을 함께 검토해보세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 채권자목록 누락 채권의 면책 효력',
        summary:
          '대법원 2024다221042 사건(대법원, 2025.10.16 선고)에서 법원은 개인회생채권자목록에 기재되지 아니한 청구권에는 원칙적으로 면책결정의 효력이 미치지 않는다고 판시했습니다. 채무자 회생 및 파산에 관한 법률 제625조 제2항 본문은 변제계획에 따라 변제한 것을 제외하고 책임이 면제된다고 규정하지만, 단서 제1호는 악의로 채권자목록에 기재하지 아니한 청구권을 예외로 둡니다.',
        takeaway: '돌려막기 도중 잊어버린 소액 채권자도 빠짐없이 기재하지 않으면 면책에서 제외될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '카드론 받은 지 얼마 안 됐는데 바로 회생 신청하면 안 되나요?',
        answer:
          '<strong>최근 1년 내 대규모 차입은 "면책 의도"로 의심받을 수 있습니다.</strong> 차입 사용 내역(생활비·대환·치료비 등)이 정당함을 소명할 자료를 준비하면 다툴 여지가 있습니다.',
      },
      {
        question: '연체된 카드론과 정상 카드론을 모두 회생에 포함하나요?',
        answer:
          '<strong>네, 연체 여부와 무관하게 모든 채무를 채권자목록에 기재해야 합니다.</strong> 정상 변제 중인 채무도 면책 대상에 포함됩니다.',
      },
      {
        question: '가족이 보증인이 된 카드론은 회생으로 어떻게 되나요?',
        answer:
          '<strong>보증인의 보증채무는 별도로 남을 수 있습니다.</strong> 본인 면책이 보증인에게 자동 효력이 미치지 않으니 사전에 가족과 상의가 필요합니다.',
      },
      {
        question: '회생 신청하면 추심·압류는 멈추나요?',
        answer:
          '<strong>개시 결정 후 자동 중지 효과로 일시 차단됩니다.</strong> 다만 신청부터 개시 결정까지 1~2개월이 걸리므로 그 사이 가압류 위험이 있다면 보전처분 신청을 함께 검토하세요.',
      },
      {
        question: 'KLAC 자격 안 되면 비용이 얼마나 드나요?',
        answer:
          '<strong>변호사 선임 시 200~400만원대가 통상이지만 사건마다 차이가 큽니다.</strong> 신용회복위원회의 무료 채무조정 상담도 병행 검토해볼 수 있습니다.',
      },
    ],
    cta: { text: '개인회생 신청 자격, AI로 점검하기', link: '/chat?domain=rehabilitation' },
    internalLinks: [
      { label: '개인회생 신청 자격 요건', href: '/guide/rehabilitation/rehabilitation-eligibility-requirements' },
      { label: '회생 vs 파산 선택 기준', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy-comparison' },
      { label: '변제계획안 작성 포인트', href: '/guide/rehabilitation/rehabilitation-repayment-plan-writing' },
      { label: 'KLAC 법률구조 무료 지원', href: '/guide/rehabilitation/rehabilitation-klac-free-support' },
      { label: '카드론 채무 정리 옵션 비교', href: '/guide/rehabilitation/rehabilitation-card-loan-included' },
    ],
  },

  // ─── 5. bankruptcy / 보증채무 파산 면책 ───
  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-guarantee-debt-discharge-process',
    keyword: '보증채무 파산 면책 절차',
    questionKeyword: '주채무자가 부도나면서 떠안은 보증채무가 너무 커서 파산 면책으로 정리할 수 있나요?',
    ctaKeyword: '보증채무 파산 면책 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '보증채무 파산 면책 5단계 절차 한눈에 정리 | 로앤가이드',
      description:
        '주채무자 부도로 떠안은 보증채무를 파산 면책으로 정리할 때 신청 자격·자료·절차 핵심을 지금 확인하세요.',
    },
    intro:
      '<p>"가족·지인을 도와주려고 보증을 섰는데 그분이 부도나면서 그 빚이 모두 제 앞으로 돌아왔어요"라는 상담은 늘 마음을 무겁게 합니다. 본인 빚이 아닌데도 채권자가 본인에게 청구하면서 가압류·급여 압류까지 들어오는 경우가 많죠. 보증채무도 채무자 회생 및 파산에 관한 법률상 파산채권에 해당하므로 파산·면책 절차로 정리할 가능성이 있습니다. 다만 면책 불허가 사유 점검이 중요한데 핵심을 정리합니다.</p>',
    sections: [
      {
        title: '보증채무 파산 면책 — 가능한가',
        content:
          '<p><strong style="color:#1e3a5f">보증채무도 일반 파산채권에 해당하므로 면책 대상이 됩니다. 단, 절차상 검토 포인트가 있습니다.</strong></p>\n<ul>\n<li><strong>파산 신청 자격</strong> — 채무 변제 불능 상태(지급불능)이면 신청 가능. 보증채무가 본인 자력을 초과하면 지급불능에 해당할 가능성이 높습니다.</li>\n<li><strong>면책 불허가 사유 점검 (법 제564조)</strong> — 재산 은닉·허위 채무·도박 등이 있으면 면책 불허가. 단순 보증채무 이행 불가는 면책 불허가 사유가 아닙니다.</li>\n<li><strong>주채무자와 별도 절차</strong> — 본인이 보증인으로서 받은 면책은 주채무자에게 영향을 주지 않습니다. 반대로 주채무자의 회생·파산이 보증인에게 직접 효력을 미치지도 않습니다.</li>\n<li><strong>구상권 행사 가능성</strong> — 면책 후 본인이 변제한 부분에 대한 주채무자에 대한 구상권은 별도로 검토할 필요가 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "본인 빚이 아니다"는 면책 거부 사유가 아닙니다. 보증채무는 본인의 채무로 평가되어 파산·면책 대상에 들어갑니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 파산·면책 5단계',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단(KLAC) 무료지원 절차 기준으로 보면, 다음 흐름으로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — KLAC 132 상담 (사전 예약)</strong> — 기준 중위소득 125% 이하 또는 기초생활수급자라면 변호사 비용 면제 검토. 보증 경위·주채무자 상태 자료 정리.</li>\n<li><strong>2단계 — 채권자·재산 자료 수집 (1~2주)</strong> — 보증채무 잔액 확인, 본인 재산(부동산·예금·자동차) 평가. 가압류·급여 압류 진행 상황 점검.</li>\n<li><strong>3단계 — resu.klac.or.kr 신청서 자동작성 (1~2주)</strong> — 채권자목록(보증채무·일반채무 모두)·재산목록 작성. 보증 사유·주채무자 부도 경위 진술서 첨부.</li>\n<li><strong>4단계 — 법원 파산선고 → 파산관재인 선임 (수개월)</strong> — 파산재단 환가·배당 진행. 자동 중지 효과로 채권자의 강제집행 일시 차단.</li>\n<li><strong>5단계 — 면책 심리 → 면책 결정 (파산선고 후 1~3년)</strong> — 면책 불허가 사유 없는 경우 면책 결정. 결정 확정 시 보증채무 책임 소멸.</li>\n</ol>\n<p><strong>준비서류 핵심</strong></p>\n<ul>\n<li>보증계약서·근보증서</li>\n<li>주채무자의 부도·회생·파산 자료</li>\n<li>채권자별 잔액 청구서·내용증명</li>\n<li>본인 재산·소득 자료 (등기부·예금·급여명세서)</li>\n<li>본인 신분증·가족관계증명서</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 파산 면책 가능성, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">보증채무 파산·면책 자격과 절차 흐름을 AI가 사례별로 안내해드립니다.</p>\n<a href="/chat?domain=bankruptcy" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '면책 불허가 위험을 줄이는 핵심 포인트',
        content:
          '<p><strong style="color:#1e3a5f">아래 항목을 미리 점검하면 면책 결정 가능성을 높일 수 있습니다.</strong></p>\n<ul>\n<li><strong>재산 처분·이전 자제</strong> — 파산 신청 직전 가족·지인에게 재산을 이전하면 사해행위로 의심받을 수 있습니다. 부득이한 처분이라면 사유 자료를 보관하세요.</li>\n<li><strong>모든 채권자 빠짐없이 기재</strong> — 보증채무·본인 채무·소액 채무 모두 기재. 누락 채권자는 면책 효력이 미치지 않을 수 있습니다.</li>\n<li><strong>도박·과소비 차입 점검</strong> — 면책 불허가 사유(법 제564조)에 해당하지 않는지 확인. 보증채무 외에 본인 차입 내역도 정리해두세요.</li>\n<li><strong>주채무자 정보 정확히 기재</strong> — 주채무자가 회생·파산 절차 중이라면 그 사실을 함께 기재해 절차 진행 상황이 명확해지도록 합니다.</li>\n<li><strong>면책심문 성실 출석</strong> — 법원이 채무자에게 채무 형성 경위·재산 사용처 등을 묻는 면책심문을 진행할 수 있습니다. 성실 답변이 면책 결정의 핵심입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 면책 불허가 사유에 해당할 우려가 있다면 면책 신청 전 KLAC 또는 회생법원 셀프헬프데스크에서 미리 점검을 받아보는 것이 좋습니다.</blockquote>',
      },
      {
        title: '면책 후 — 신용 회복과 구상권 검토',
        content:
          '<p><strong style="color:#1e3a5f">면책이 확정되면 보증채무 책임은 사라지지만, 후속 관리가 필요합니다.</strong></p>\n<ul>\n<li><strong>신용정보 등록 5년</strong> — 파산·면책 정보는 통상 5년간 신용정보원에 등록됩니다. 그 기간 동안은 신규 대출·신용카드 발급이 제한될 수 있습니다.</li>\n<li><strong>채무불이행자명부 정정</strong> — 면책 후 채무불이행자명부에서 삭제 신청. 등재된 정보는 본인이 직접 정정 신청해야 하는 경우가 많습니다.</li>\n<li><strong>구상권 행사 검토</strong> — 면책되기 전 본인이 일부 변제했다면 그 부분에 대해 주채무자에게 구상권을 행사할 수 있는지 검토합니다. 다만 주채무자가 회생·파산 중이면 회수 가능성이 낮을 수 있습니다.</li>\n<li><strong>주거 안정·재취업</strong> — 면책 후 신용 회복은 시간이 필요합니다. 신용회복위원회·근로복지공단의 자활 지원 프로그램도 활용 가능성이 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 면책 후에도 비면책채권(조세·벌금·고의 불법행위 손해배상 등)은 남습니다. 보증채무 외에 이런 채권이 있는지 함께 확인하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 보증인 인적담보가 있어도 사해행위 판단은 주채무자 자력 기준',
        summary:
          '대법원 2025다211379 사건(대법원, 2025.12.04 선고)에서 법원은 채권자취소권의 피보전채권에 보증인 등의 인적 담보가 붙어 있더라도, 주채무자의 법률행위가 사해행위에 해당하는지 여부를 판단할 때 보증인 등의 변제자력은 고려할 요소가 아니고, 오로지 주채무자 자신의 자력만이 판단 기준이라고 판시했습니다.',
        takeaway: '보증인의 자력은 사해행위 판단 자료가 아니므로, 보증인이 자기 파산을 신청해도 주채무자에 대한 채권자취소 소송에 직접 영향을 주지 않을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '주채무자가 갚을 능력이 있어 보이는데도 보증인 본인이 파산을 신청할 수 있나요?',
        answer:
          '<strong>본인이 지급불능이면 신청 가능합니다.</strong> 보증채무 청구가 본인 자력을 초과한다면 주채무자 상태와 무관하게 본인의 파산을 검토할 수 있습니다.',
      },
      {
        question: '주채무자가 변제하면 보증인 면책에 영향이 있나요?',
        answer:
          '<strong>주채무 변제로 보증채무가 소멸되면 그만큼 면책 대상이 줄어듭니다.</strong> 다만 주채무자 변제 일정이 불확실하면 본인 파산을 우선 검토하는 것이 안전할 수 있습니다.',
      },
      {
        question: '보증한 사실을 잊어서 채권자목록에 빠뜨리면 어떻게 되나요?',
        answer:
          '<strong>누락 채권자에게는 면책 효력이 미치지 않을 수 있습니다.</strong> 신청 전 신용정보원·은행연합회 채무조회로 모든 보증·연대채무를 확인하세요.',
      },
      {
        question: '직장에 파산 사실이 알려질까봐 걱정됩니다.',
        answer:
          '<strong>파산 결정문이 회사로 직접 송달되지는 않습니다.</strong> 다만 급여 압류가 있던 채권자가 절차에 참여하면서 회사가 알게 될 수 있어 주의가 필요합니다.',
      },
      {
        question: '파산 후 다시 보증 요청을 받으면 어떻게 해야 하나요?',
        answer:
          '<strong>가급적 거절하는 것이 안전합니다.</strong> 면책 후 5년이 지나야 파산 신청이 다시 가능하므로 연속 보증은 위험이 큽니다. 부득이하다면 보증 한도를 명시한 한정근보증으로 제한하는 방법을 검토하세요.',
      },
    ],
    cta: { text: '파산 신청 절차와 서류, AI로 정리하기', link: '/chat?domain=bankruptcy' },
    internalLinks: [
      { label: '파산 신청 절차와 준비서류', href: '/guide/bankruptcy/bankruptcy-personal-filing-procedure' },
      { label: '파산 면책 비면책채권 구분', href: '/guide/bankruptcy/bankruptcy-non-dischargeable-claims' },
      { label: 'KLAC 무료 회생·파산 지원', href: '/guide/bankruptcy/bankruptcy-klac-free-support' },
      { label: '면책 불허가 사유 점검표', href: '/guide/bankruptcy/bankruptcy-discharge-denial-reasons' },
      { label: '파산 후 신용 회복 절차', href: '/guide/bankruptcy/bankruptcy-after-credit-recovery' },
    ],
  },

  // ─── 6. industrial-accident / 출퇴근 재해 산재 인정 ───
  {
    domain: 'industrial-accident',
    slug: 'industrial-accident-commute-accident-eligibility',
    keyword: '출퇴근 재해 산재 인정 요건',
    questionKeyword: '출근하다 교통사고가 났는데 산재로 처리할 수 있나요?',
    ctaKeyword: '출퇴근 재해 산재 인정 절차',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '출퇴근 재해 산재 인정 5가지 요건과 신청 절차 | 로앤가이드',
      description:
        '출퇴근 중 사고가 통근재해(산재)로 인정되는 요건과 근로복지공단 신청 흐름, 자동차보험과의 차이를 지금 확인하세요.',
    },
    intro:
      '<p>"출근길에 사고가 났는데 자동차보험과 산재 중 어떤 게 유리한지 모르겠어요"라는 상담이 늘고 있습니다. 2017년 산업재해보상보험법 개정으로 통상적인 출퇴근 중 사고도 산재 보상 대상이 되었는데, 막상 신청하려면 어떤 경로·시간·방법이 인정되는지 헷갈리실 수 있죠. 산재로 인정되면 요양급여·휴업급여·장해급여 등이 자동차보험과 별도로 지급될 수 있고, 본인 과실이 있더라도 일정 보장이 가능합니다. 핵심을 정리합니다.</p>',
    sections: [
      {
        title: '출퇴근 재해 인정 요건 — 무엇을 보는가',
        content:
          '<p><strong style="color:#1e3a5f">산업재해보상보험법 제37조 제1항 제3호는 통상적 경로·방법으로 출퇴근하는 중의 사고를 업무상 재해로 정합니다.</strong></p>\n<ul>\n<li><strong>출퇴근 행위</strong> — 자택 ↔ 직장의 이동. 이중 취업자의 경우 사업장 간 이동도 포함.</li>\n<li><strong>통상적 경로·방법</strong> — 평소 사용하는 경로·교통수단. 약간의 우회·교통수단 변경(자가용→대중교통)도 통상으로 볼 수 있습니다.</li>\n<li><strong>일상생활에 필요한 행위 중 이탈·중단</strong> — 시행령 제35조 제2항: 일용품 구입, 병원·약국 방문, 자녀 등하원, 직업훈련 등 일상생활 필수행위에 한해 인정.</li>\n<li><strong>자가용 출퇴근</strong> — 2018년부터 자가용 통근 사고도 통근재해 대상. 단, 음주·중과실은 제한 가능성이 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "통상" 판단은 합리적 범위의 일상 이동입니다. 약간 돌아갔다고 자동 탈락하지 않습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 산재 신청 5단계',
        content:
          '<p><strong style="color:#1e3a5f">근로복지공단(comwel) 공식 절차 기준으로 보면, 다음 흐름으로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 산재 지정 병원 진료 (사고 당일)</strong> — 통근재해도 산재 지정 의료기관에서 진료받는 것이 원칙. 일반 보험으로 먼저 처리하면 추후 정산이 복잡해질 수 있습니다.</li>\n<li><strong>2단계 — 요양급여신청서 제출 (진료 후 즉시)</strong> — 신청서 + 의사 소견서 + 사고 경위서(경로·시간·교통수단 명시)를 근로복지공단에 제출. 회사 확인란이 있지만 사업주 동의 없이도 신청 가능합니다.</li>\n<li><strong>3단계 — 공단 심사 (신청 후 7일 이내 결정 원칙)</strong> — 경로·시간·목적이 통상적 출퇴근에 해당하는지 심사. 추가 조사가 필요하면 기간 연장.</li>\n<li><strong>4단계 — 승인 시 요양 진행 (휴업급여·장해급여 별도 청구)</strong> — 요양 종결 후 휴업급여·장해급여를 청구. 휴업급여는 평균임금의 70%, 최대 진료 기간 동안 지급될 수 있습니다.</li>\n<li><strong>5단계 — 불승인 시 불복 (90일 이내 심사청구)</strong> — 산재심사위원회 → 재심사위원회 → 행정소송 3단계. 경위 소명 자료 보강이 핵심.</li>\n</ol>\n<p><strong>준비서류 핵심</strong></p>\n<ul>\n<li>요양급여신청서 (공단 양식)</li>\n<li>의사 진단서·소견서</li>\n<li>사고 경위서 (경로·시간·목적 상세)</li>\n<li>경로 지도 (평소 경로 vs 사고 당일)</li>\n<li>CCTV·블랙박스 영상 (가능하면 72시간 내 확보)</li>\n<li>목격자 진술서 또는 연락처</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 산재 인정 가능성, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">출퇴근 사고 인정 요건과 자동차보험 병행 처리 방법을 AI가 사례별로 안내해드립니다.</p>\n<a href="/chat?domain=industrial-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '산재 vs 자동차보험 — 어떻게 병행하나',
        content:
          '<p><strong style="color:#1e3a5f">산재와 자동차보험은 별도 제도이므로 병행 처리가 원칙입니다. 다만 중복 보상은 조정됩니다.</strong></p>\n<ul>\n<li><strong>산재 — 본인 과실 무관 보장</strong> — 본인 과실이 있어도 요양급여·휴업급여 등 일정 부분 지급. 다만 음주·중과실은 제한될 수 있습니다.</li>\n<li><strong>자동차보험 — 상대방 과실에 따른 손해배상</strong> — 가해 차량 자동차보험에서 인적 손해 보상.</li>\n<li><strong>중복 보상 조정</strong> — 같은 항목(치료비 등)을 양쪽에서 받지 않도록 공단·보험사 간 정산. 위자료·휴업손해 일부는 자동차보험 추가 청구가 가능할 수 있습니다.</li>\n<li><strong>산재 우선 처리 권장</strong> — 본인 과실 비율이 클 때 산재가 더 유리할 수 있습니다. 자동차보험은 과실 비율만큼 감액되지만 산재는 본인 과실 무관 일정 보장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사고 후 자동차보험을 먼저 청구해도 산재 신청은 별도로 가능합니다. 다만 일부 절차에서 정산이 복잡해질 수 있어 사전 상담이 좋습니다.</blockquote>',
      },
      {
        title: '출퇴근 재해 인정 시 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 3가지를 피하면 산재 인정 가능성을 높일 수 있습니다.</strong></p>\n<ul>\n<li><strong>일반 보험으로 먼저 결제 후 산재 신청</strong> — 일반 보험으로 결제하면 산재 진료비 정산이 까다로워집니다. 사고 시점에 산재 지정 병원을 우선 방문하세요.</li>\n<li><strong>경위서를 너무 짧게 쓰기</strong> — "출근 중 사고" 한 줄로는 인정 심사가 어렵습니다. 출발지·도착지·시간·교통수단·경로·경유 목적을 구체적으로 적어야 합니다.</li>\n<li><strong>증거 영상 확보 늦기</strong> — CCTV는 통상 7~30일 내 자동 덮어쓰기됩니다. 72시간 내에 인근 상점·관공서·차량 블랙박스 보존을 요청하세요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회사가 "산재 신청하면 회사에 불이익"이라며 만류해도 근로자는 사업주 동의 없이 직접 공단에 신청할 권리가 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 산재 보험급여와 손해배상 청구의 관계',
        summary:
          '대법원 2023다297141 사건(대법원, 2025.06.26 선고)에서 법원은 산업재해보상보험법에 따라 보험급여를 받은 재해근로자가 사업주와 제3자의 공동불법행위를 원인으로 사업주를 상대로 손해배상을 청구할 때, 재해근로자의 과실이 있다고 하더라도 보험급여 지급 자체에 영향을 주는 것은 아니라고 판시했습니다.',
        takeaway: '본인 과실이 있어도 산재 보험급여는 지급되며, 자동차보험·민사 손해배상은 별도로 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '회사 차량으로 출근하다 사고가 나도 통근재해로 처리되나요?',
        answer:
          '<strong>회사 차량 통근도 통상 경로·시간이라면 인정 가능성이 있습니다.</strong> 다만 회사 업무 수행 중 사고로 평가되면 통근재해보다 일반 업무상 재해로 분류될 수 있습니다.',
      },
      {
        question: '회식 후 귀가 중 사고도 산재가 되나요?',
        answer:
          '<strong>회식이 업무의 연장으로 평가되는 경우 인정될 수 있습니다.</strong> 사용자 강제·회사 비용 지출 여부, 참석 의무 등을 종합 판단하므로 사례마다 다릅니다.',
      },
      {
        question: '본인 과실 100%인 사고도 산재 처리 가능한가요?',
        answer:
          '<strong>일반적인 과실은 산재 보장에 영향을 주지 않습니다.</strong> 다만 음주·고의·중과실은 제한될 수 있어 사례 검토가 필요합니다.',
      },
      {
        question: '출근 시간보다 너무 일찍 또는 늦게 사고가 나면 어떻게 되나요?',
        answer:
          '<strong>합리적 출퇴근 시간 내라면 인정될 가능성이 있습니다.</strong> 1~2시간 일찍 또는 늦게 출발했다고 해서 자동 제외되지 않으나, 이유가 명확해야 합니다(회의 준비·교통 사정 등).',
      },
      {
        question: '산재 신청 기한이 있나요?',
        answer:
          '<strong>요양급여 자체에 일반적 시효 규정은 없으나 빠를수록 좋습니다.</strong> 휴업급여·장해급여는 사유 발생일로부터 3년 이내 청구해야 합니다(산재보험법 제112조).',
      },
    ],
    cta: { text: '산재 인정 가능성, AI로 점검하기', link: '/chat?domain=industrial-accident' },
    internalLinks: [
      { label: '통근재해 우회로 인정 기준', href: '/guide/industrial-accident/industrial-accident-commute-detour-coverage' },
      { label: '산재 요양급여 신청 절차', href: '/guide/industrial-accident/industrial-accident-medical-care-application' },
      { label: '산재 휴업급여 계산법', href: '/guide/industrial-accident/industrial-accident-disability-benefit-calculation' },
      { label: '산재 불승인 심사청구 절차', href: '/guide/industrial-accident/industrial-accident-appeal-procedure' },
      { label: '산재 vs 자동차보험 차이', href: '/guide/industrial-accident/industrial-accident-vs-auto-insurance' },
    ],
  },

  // ─── 7. dui / 음주운전 행정심판 면허 회복 ───
  {
    domain: 'dui',
    slug: 'dui-administrative-trial-license-recovery',
    keyword: '음주운전 행정심판 면허 회복',
    questionKeyword: '음주운전으로 면허가 취소됐는데 행정심판으로 다시 받을 수 있는 방법이 있나요?',
    ctaKeyword: '음주운전 행정심판 면허 회복 절차',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '음주운전 행정심판 면허 회복 5단계 절차 정리 | 로앤가이드',
      description:
        '음주운전 면허 취소·정지 처분에 행정심판으로 감경을 시도할 때 신청 기한·자료·인용 가능성을 지금 확인하세요.',
    },
    intro:
      '<p>"음주운전으로 면허가 취소됐는데 출퇴근·생계 때문에 운전이 꼭 필요해요"라는 상담은 늘 절박합니다. 형사 처벌과 별도로 행정 처분(면허 취소·정지)이 진행되는데, 이는 일반 형사 절차와 다른 트랙으로 다툴 수 있습니다. 처분일로부터 90일 이내에 행정심판을 청구하면 감경(예: 110일 정지로 단축) 가능성을 검토할 수 있습니다. 다만 인용률은 사례별 차이가 크니 절차와 전략을 미리 정리해두는 것이 중요합니다.</p>',
    sections: [
      {
        title: '면허 취소·정지 행정 처분 — 형사와 별도 트랙',
        content:
          '<p><strong style="color:#1e3a5f">음주운전은 형사 처벌(검찰·법원)과 행정 처분(경찰·도로교통공단)이 별도 진행됩니다.</strong></p>\n<ul>\n<li><strong>형사 처벌</strong> — 도로교통법 위반(음주운전)으로 형사 입건 → 검찰 송치 → 약식명령 또는 정식재판. 0.03% 이상은 5년 이하 징역 또는 2천만원 이하 벌금 등 농도별 차등.</li>\n<li><strong>행정 처분</strong> — 운전면허 취소·정지. 0.03% 이상 0.08% 미만은 정지 100일, 0.08% 이상은 취소(결격 1년~).</li>\n<li><strong>행정심판 청구</strong> — 처분일로부터 90일 이내 중앙행정심판위원회 또는 시·도 행정심판위원회에 청구. 인용 시 감경 가능성.</li>\n<li><strong>행정소송</strong> — 행정심판 결과에 불복하면 행정법원에 처분 취소 소송. 통상 행정심판이 먼저(전치주의 일부 폐지로 직접 소송도 가능).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형사 처벌이 가벼워졌다고 행정 처분이 자동 감경되지 않습니다. 행정심판은 별도로 청구해야 합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 행정심판 5단계',
        content:
          '<p><strong style="color:#1e3a5f">중앙행정심판위원회 공식 절차 기준으로 보면, 다음 흐름으로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 처분서 수령 후 90일 이내 청구 준비 (즉시)</strong> — 처분일이 아니라 처분서 수령일 기준. 청구 기한 도과 시 각하될 수 있어 날짜 관리가 중요합니다.</li>\n<li><strong>2단계 — 청구서·증거자료 작성 (1~2주)</strong> — 행정심판 청구서 + 처분서 사본 + 운전 필요성 자료(생계·가족·통근) + 반성문·기부증서 등.</li>\n<li><strong>3단계 — 위원회 접수·답변서 송달 (2~4주)</strong> — 청구서 접수 → 처분청 답변서 → 청구인 보충서면. 이 단계에서 추가 자료 보강 가능.</li>\n<li><strong>4단계 — 구술심리 또는 서면심리 (청구 후 60일 이내 결정 원칙)</strong> — 위원회가 처분 적법성·재량권 일탈 여부 심리. 인용 시 처분 취소·변경.</li>\n<li><strong>5단계 — 결정 송달 → 효력 발생</strong> — 인용 시 면허 회복 또는 정지 단축. 기각 시 행정소송 검토(결정문 송달 후 90일 이내).</li>\n</ol>\n<p><strong>준비서류 핵심</strong></p>\n<ul>\n<li>행정심판 청구서 (공식 양식)</li>\n<li>운전면허 취소·정지 처분서 사본</li>\n<li>운전 필요성 입증자료 (재직증명서·통근 거리·가족 상황·소득 자료)</li>\n<li>반성·재발방지 자료 (반성문·교통안전교육 수료증·기부증서)</li>\n<li>형사 사건 처분서·약식명령 (있는 경우)</li>\n<li>본인 신분증·운전면허증 사본</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">행정심판 인용 가능성과 자료 보강 포인트를 AI가 사례별로 안내해드립니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 체크하기 →</a>\n</div>',
      },
      {
        title: '인용 가능성을 높이는 자료 보강 포인트',
        content:
          '<p><strong style="color:#1e3a5f">아래 항목을 잘 준비할수록 재량권 일탈·남용 주장이 설득력을 갖습니다.</strong></p>\n<ul>\n<li><strong>운전 필수성</strong> — 본인이 가족 부양 책임자인지, 통근에 대중교통이 어려운지, 자녀 등하원·환자 가족 케어가 필요한지 등 구체적 자료. 회사 재직증명서·소득자료·가족관계증명서.</li>\n<li><strong>음주 정황 소명</strong> — 단발성 음주였는지, 짧은 거리 운전이었는지, 사고·인명피해 없었는지 등. 0.03~0.08% 구간이라면 감경 여지가 더 있을 수 있습니다.</li>\n<li><strong>재발 방지 노력</strong> — 한국교통안전공단 음주운전 예방교육 수료증, 자발적 참여 사회봉사, 기부증서, 반성문.</li>\n<li><strong>형사 사건 처분 결과</strong> — 약식명령 벌금 100만원 이하 등 비교적 경미한 처분이라면 행정 처분도 비례적 감경을 주장할 수 있습니다.</li>\n<li><strong>전문가 검토</strong> — 사례별 인용 가능성·자료 보강 방향이 다르므로 132(법률구조공단)에서 무료 상담을 받아본 후 진행 방향을 정하는 것이 좋습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 재범·고농도(0.2% 이상)·인사사고 동반은 인용이 어려운 편입니다. 사실관계에 따라 솔직하게 가능성을 평가받는 것이 중요합니다.</blockquote>',
      },
      {
        title: '행정심판 후 — 기각 시 다음 단계',
        content:
          '<p><strong style="color:#1e3a5f">기각되더라도 추가 검토 경로가 있습니다.</strong></p>\n<ul>\n<li><strong>행정소송 (결정문 송달 후 90일 이내)</strong> — 행정법원에 처분 취소 소송. 행정심판 자료 + 위원회 결정 이유에 대한 반박 서면을 준비합니다.</li>\n<li><strong>면허 결격 기간 단축 신청 검토</strong> — 일정 요건 하에 결격 기간 중 일부 감경 검토 여지가 있는지 도로교통공단에 문의.</li>\n<li><strong>면허 재취득</strong> — 결격 기간 경과 후 면허 학과·기능시험 재응시. 음주운전 재발방지 교육 수료가 의무.</li>\n<li><strong>대중교통·카카오모빌리티 등 대안</strong> — 결격 기간 중 통근·이동 대안을 미리 준비해두면 생계 충격을 줄일 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 결격 기간 중 무면허 운전은 별도 형사처벌(1년 이하 징역 또는 300만원 이하 벌금) 대상이 됩니다. 절대 운전하지 마세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 자동차운전면허 처분의 행정처분성과 다툼 대상',
        summary:
          '대법원 2024도8903 사건(대법원, 2024.10.31 선고)에서 법원은 자동차운전면허대장상 벌점의 배점 자체만으로는 국민의 권리를 구체적으로 제한·박탈하지 않으므로 그 자체를 다투는 행정처분으로 보기 어렵다고 판시한 한편, 면허 취소·정지 처분으로 권리가 제한되는 경우 행정쟁송으로 다툴 수 있음을 시사했습니다.',
        takeaway: '벌점 배점이 아닌 면허 취소·정지 처분이 다툼 대상이며, 행정심판·행정소송으로 처분 적법성을 다툴 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '행정심판은 변호사 없이 본인이 직접 청구할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 중앙행정심판위원회 온라인 시스템(simpan.go.kr)에서 직접 청구 가능. 단, 자료 작성·법리 구성이 까다로우면 KLAC 132 무료 상담 또는 변호사 도움을 검토할 수 있습니다.',
      },
      {
        question: '형사 사건이 진행 중이라도 행정심판을 먼저 청구해야 하나요?',
        answer:
          '<strong>행정심판 청구 기한이 90일이라 빠른 결정이 필요합니다.</strong> 형사 처분 결과를 기다리다 기한을 놓칠 수 있어 두 절차를 병행 검토하는 것이 안전합니다.',
      },
      {
        question: '인용률이 어느 정도인가요?',
        answer:
          '<strong>사례·농도·정황에 따라 차이가 큽니다.</strong> 통상 단순 정지 처분 대비 취소 처분 인용은 까다롭고, 0.03~0.08% 단순 정지 사례는 감경 여지가 더 있는 경향이 보입니다. 사실관계별 검토가 필요합니다.',
      },
      {
        question: '음주측정 거부 사건도 행정심판이 가능한가요?',
        answer:
          '<strong>청구는 가능하지만 인용은 어려운 편입니다.</strong> 측정 거부는 도로교통법상 더 무겁게 평가되어 감경이 쉽지 않을 수 있습니다.',
      },
      {
        question: '직장에서 운전이 직무인 경우 더 유리한가요?',
        answer:
          '<strong>운전 필수성은 재량권 판단에 중요한 자료입니다.</strong> 영업직·배달직·운수업 등 운전이 본업이라면 회사 재직증명서·업무분장표를 함께 제출해 운전 필수성을 강조할 수 있습니다.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 행정심판 준비서류', href: '/guide/dui/dui-administrative-appeal-required-docs' },
      { label: '음주운전 면허 청문 절차', href: '/guide/dui/dui-administrative-license-hearing' },
      { label: '음주운전 행정처분 절차', href: '/guide/dui/dui-administrative-license-procedure' },
      { label: '음주운전 형사 처벌 기준', href: '/guide/dui/dui-criminal-penalty-standards' },
      { label: '음주운전 합의·반성 요소', href: '/guide/dui/dui-settlement-mitigation-factors' },
    ],
  },
];
