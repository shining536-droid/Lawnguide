import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 실업급여 심화 스포크 10개 (batch30)
//
// 1. unemployment-workplace-relocation-forced-quit
//    이 페이지는 [사업장 원거리 이전으로 통근이 불가능해진 근로자]의 [자진퇴사라도 실업급여를 받을 수 있는지 모르는 상황]에서
//    [사업장 이전 사유 정당한 이직 인정 기준과 증빙 방법]을 돕는 페이지다.
//
// 2. unemployment-sexual-harassment-quit-benefit
//    이 페이지는 [직장 내 성희롱 피해로 퇴사한 근로자]의 [성희롱 퇴사 시 실업급여 수급 가능 여부를 모르는 상황]에서
//    [성희롱 피해 사유 정당한 이직 요건과 증거 확보 방법]을 돕는 페이지다.
//
// 3. unemployment-over65-exclusion-exception
//    이 페이지는 [65세 이상으로 고용보험 수급이 불가능하다고 알고 있는 근로자]의 [예외 적용 가능 여부를 모르는 상황]에서
//    [65세 이상 고용보험 적용 예외 사항과 실업급여 수급 가능성]을 돕는 페이지다.
//
// 4. unemployment-training-extended-benefit
//    이 페이지는 [구직급여 수급 중 직업훈련을 고려하는 실업자]의 [훈련연장급여 존재 여부와 신청 방법을 모르는 상황]에서
//    [훈련연장급여 수급 조건과 신청 절차]를 돕는 페이지다.
//
// 5. unemployment-special-extended-benefit
//    이 페이지는 [경기침체기에 구직급여가 종료된 실업자]의 [특별연장급여 수급 가능 여부를 모르는 상황]에서
//    [특별연장급여 발동 요건과 수급 조건 확인]을 돕는 페이지다.
//
// 6. unemployment-individual-extended-benefit
//    이 페이지는 [구직급여 종료 후에도 재취업이 어려운 저소득 실업자]의 [개별연장급여 존재 여부를 모르는 상황]에서
//    [개별연장급여 자격 요건과 신청 방법]을 돕는 페이지다.
//
// 7. unemployment-freelancer-artist-benefit
//    이 페이지는 [예술인·특수고용직으로 일하다가 일을 잃은 프리랜서]의 [고용보험 적용 여부를 모르는 상황]에서
//    [예술인·특수고용직 실업급여 수급 조건과 피보험기간 확인 방법]을 돕는 페이지다.
//
// 8. unemployment-job-search-recognized-types
//    이 페이지는 [실업급여 수급 중 구직활동 인정이 안 될까 걱정하는 실업자]의 [어떤 활동이 구직활동으로 인정되는지 모르는 상황]에서
//    [구직활동 인정 유형과 실업인정 신고 요령]을 돕는 페이지다.
//
// 9. unemployment-benefit-reduction-penalty
//    이 페이지는 [실업급여 감액·반환 통보를 받은 수급자]의 [왜 감액되었는지, 어떻게 대응해야 하는지 모르는 상황]에서
//    [감액·반환 사유와 이의신청 방법]을 돕는 페이지다.
//
// 10. unemployment-overseas-job-return-benefit
//    이 페이지는 [해외에서 취업하다가 귀국한 근로자]의 [해외 근무 기간이 실업급여에 반영되는지 모르는 상황]에서
//    [해외 취업 후 귀국 시 실업급여 수급 조건과 피보험기간 산정]을 돕는 페이지다.
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch30Unemployment: SpokePage[] = [
  // ── 1. 사업장 원거리 이전 퇴사 실업급여 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-workplace-relocation-forced-quit',
    keyword: '사업장 이전 퇴사 실업급여',
    questionKeyword: '회사가 멀리 이전해서 퇴사했는데 실업급여 받을 수 있나요?',
    ctaKeyword: '사업장 이전 퇴사 실업급여 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '사업장 이전 퇴사 실업급여 수급 조건 3가지 | 로앤가이드',
      description:
        '회사가 먼 곳으로 이전해 출퇴근이 불가능해졌다면, 자진퇴사라도 실업급여를 받을 수 있는 조건을 지금 확인하세요.',
    },
    intro:
      '<p>서울 본사에서 근무하던 회사가 갑자기 지방으로 이전한다는 공지를 받았습니다. 편도 2시간이 넘는 거리인데, 이사를 하자니 가족 사정이 여의치 않습니다. 어쩔 수 없이 퇴사를 결심했지만, 자진퇴사면 실업급여를 못 받는다는 말에 막막합니다. 고용보험법상 사업장 원거리 이전은 정당한 이직 사유에 해당하므로, 요건을 갖추면 자진퇴사라도 실업급여 수급이 가능합니다.</p>',
    sections: [
      {
        title: '사업장 이전이 정당한 이직 사유인 이유',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 시행규칙 별표2에 따라 사업장 이전으로 통근이 곤란해진 경우는 비자발적 이직으로 인정될 수 있습니다.</strong></p>\n<p>구체적으로 사업장의 이전으로 인해 출퇴근에 왕복 3시간 이상이 소요되는 경우, 근로자가 퇴사하더라도 정당한 이직 사유에 해당할 소지가 있습니다. 고용센터에서는 실제 통근 시간과 교통수단의 이용 가능성을 종합적으로 판단합니다.</p>\n<ol>\n<li><strong>왕복 통근시간 3시간 이상</strong> — 대중교통 기준으로 출퇴근에 왕복 3시간 이상 소요되면 통근 곤란으로 인정될 수 있습니다. 자가용이 아닌 대중교통 기준이 원칙입니다.</li>\n<li><strong>교통수단 변경 불가</strong> — 이전된 사업장까지 대중교통이 없거나 첫차·막차 시간이 근무시간과 맞지 않는 경우도 포함됩니다.</li>\n<li><strong>사업주의 대안 미제공</strong> — 사업주가 통근버스, 기숙사, 이전비 지원 등 합리적 대안을 제시하지 않은 경우 정당성이 더 강해집니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 사업장 이전 후 왕복 3시간 이상 통근이 필요하면, 자진퇴사라도 실업급여 수급이 가능합니다. 통근 경로와 소요시간을 가능한 한 캡처해두세요.</blockquote>',
      },
      {
        title: '실업급여 신청 전 준비해야 할 증빙서류',
        content:
          '<p><strong style="color:#1e3a5f">사업장 이전 사실과 통근 곤란을 입증할 수 있는 서류를 미리 준비하세요.</strong></p>\n<ul>\n<li><strong>사업장 이전 공지문</strong> — 회사 내부 공지, 이메일, 사내 게시판 캡처 등 이전 사실을 확인할 수 있는 서류입니다.</li>\n<li><strong>통근 경로 검색 결과</strong> — 네이버 지도, 카카오맵 등에서 기존 출퇴근 경로와 이전 후 경로를 각각 검색하여 소요시간을 비교한 캡처입니다.</li>\n<li><strong>근로계약서</strong> — 최초 근무지가 기재된 근로계약서입니다. 계약상 근무지와 이전된 사업장이 다르다는 것을 증명합니다.</li>\n<li><strong>사업주와의 대화 기록</strong> — 이전 관련 이의를 제기하거나 대안을 요청한 문자, 이메일 등의 기록입니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>사업장 이전 퇴사 후 실업급여 수급 자격, AI가 즉시 확인합니다</strong></p>\n<p style="margin:0;font-size:0.95em">이전 거리와 통근시간을 입력하면 정당한 이직 인정 가능성을 무료로 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '이직확인서 이직사유 코드 확인 방법',
        content:
          '<p><strong style="color:#1e3a5f">사업주가 이직확인서에 "자발적 퇴사"로 기재하면 즉시 이의신청하세요.</strong></p>\n<p>사업장 이전으로 퇴사했는데 사업주가 이직확인서 사유를 "개인 사정"으로 기재하는 경우가 있습니다. 이 경우 고용센터에 이의신청을 하면 사실관계를 확인한 후 사유를 변경할 수 있습니다.</p>\n<ul>\n<li><strong>이직사유 코드 확인</strong> — 이직확인서에 "사업장 이전" 또는 "근로조건 변동" 관련 코드가 기재되어야 합니다.</li>\n<li><strong>이의신청 기한</strong> — 이직확인서를 발급받은 날부터 3개월 이내에 고용센터에 이의신청서를 제출하세요.</li>\n<li><strong>증빙자료 함께 제출</strong> — 이전 공지문, 통근경로 캡처 등을 이의신청서와 함께 제출하면 처리가 빨라집니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 이직확인서 사유가 잘못 기재되어도 포기하지 마세요. 증빙서류를 준비하면 고용센터에서 직권으로 사유를 변경할 수 있습니다.</blockquote>',
      },
      {
        title: '사업장 이전 퇴사자가 놓치기 쉬운 실수 3가지',
        content:
          '<p><strong style="color:#1e3a5f">퇴사 전에 사업주에게 서면으로 이전 반대 의사를 전달해야 합니다.</strong></p>\n<ul>\n<li><strong>구두 통보만으로 퇴사</strong> — 이전에 반대한다는 의사를 문자나 이메일로 남기지 않으면 "이전에 동의한 것"으로 해석될 위험이 있습니다. 가능한 한 서면 기록을 남기세요.</li>\n<li><strong>이전 후 일정 기간 출근한 경우</strong> — 이전된 사업장에 몇 달간 출근한 뒤 퇴사하면 "통근 곤란"이 인정되기 어려울 수 있습니다. 이전 직후 퇴사 의사를 밝히는 것이 유리합니다.</li>\n<li><strong>신청 기한 도과</strong> — 퇴직일 다음 날부터 12개월 이내에 실업급여를 신청해야 합니다. 이전에 적응해보다 기한을 놓치는 경우가 있으니 주의하세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 근로조건 저하로 인한 퇴사와 수급자격 인정',
        summary:
          '서울행법 2014구합2270 사건(서울행정법원, 2014.07.03 선고)에서 법원은 사업주의 부서이동 지시로 임금이 46% 이상 하락할 것이 예상되어 퇴사한 근로자에게 실업급여 수급자격이 인정된다고 판시했습니다.',
        takeaway:
          '사업장 이전으로 인한 통근 곤란뿐 아니라, 이전에 따른 근로조건 변동(임금 하락, 직무 변경 등)도 정당한 이직 사유가 됩니다. 통근 문제와 함께 근로조건 변동도 주장하면 더 유리합니다.',
      },
    ],
    faq: [
      {
        question: '회사가 같은 시 내에서 이전했는데도 실업급여를 받을 수 있나요?',
        answer:
          '<p>같은 시 내 이전이라도 대중교통 기준 왕복 3시간 이상 소요되면 통근 곤란으로 인정될 수 있습니다. 실제 통근 경로와 소요시간이 기준입니다.</p>',
      },
      {
        question: '사업주가 이사비를 지원하겠다고 하면 퇴사 사유가 안 되나요?',
        answer:
          '<p>이사비 지원 제안이 있더라도, 가족 돌봄이나 자녀 교육 등 이사가 현실적으로 불가능한 사유가 있다면 정당한 이직으로 인정될 수 있습니다. 구체적 사정을 고용센터에 소명하세요.</p>',
      },
      {
        question: '재택근무가 가능한데 사업주가 출근을 강제하면 어떻게 되나요?',
        answer:
          '<p>재택근무 가능 업무인데 사업주가 이전 후 출근을 강제하면, 합리적 대안을 거부한 것으로 볼 수 있어 정당한 이직 사유 인정에 유리합니다.</p>',
      },
      {
        question: '사업장 이전 통보를 받고 얼마 안에 퇴사해야 실업급여가 되나요?',
        answer:
          '<p>명확한 기한은 없지만, 이전 후 장기간(6개월 이상) 출근한 뒤 퇴사하면 통근 곤란 사유가 약해질 수 있습니다. 이전 직후 퇴사 의사를 표시하는 것이 좋습니다.</p>',
      },
      {
        question: '이전 전 사업장 폐쇄와 사업장 이전은 다른 건가요?',
        answer:
          '<p>네, 사업장 폐쇄는 권고사직·정리해고와 유사하게 처리되어 별도 증빙 없이도 비자발적 이직으로 인정될 수 있습니다. 사업장 이전은 통근 곤란을 증명해야 합니다.</p>',
      },
    ],
    cta: { text: '사업장 이전 퇴사 실업급여 자격 AI로 즉시 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건 총정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '자발적 퇴사 실업급여', href: '/guide/unemployment/unemployment-voluntary-quit-benefits' },
      { label: '통근 곤란 퇴사 실업급여', href: '/guide/unemployment/unemployment-commute-hardship-quit' },
      { label: '이직확인서 분쟁 해결', href: '/guide/unemployment/unemployment-separation-confirmation-dispute' },
      { label: '실업급여 거부 시 불복 방법', href: '/guide/unemployment/unemployment-appeal-rejection' },
    ],
  },

  // ── 2. 직장 내 성희롱 퇴사 실업급여 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-sexual-harassment-quit-benefit',
    keyword: '직장 성희롱 퇴사 실업급여',
    questionKeyword: '직장 내 성희롱 피해로 퇴사했는데 실업급여를 받을 수 있나요?',
    ctaKeyword: '성희롱 퇴사 실업급여 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '직장 성희롱 퇴사 실업급여 받는 4가지 조건 | 로앤가이드',
      description:
        '직장 내 성희롱 피해로 퇴사를 결심했다면, 자진퇴사라도 실업급여를 받을 수 있는 조건과 증거 확보법을 지금 확인하세요.',
    },
    intro:
      '<p>상사에게 반복적인 성적 발언과 신체 접촉을 당했지만, 인사팀에 신고해도 제대로 된 조치가 없었습니다. 결국 견디다 못해 퇴사를 결심했는데, 자진퇴사로 처리되면 실업급여를 못 받을까 걱정됩니다. 고용보험법상 직장 내 성희롱 피해는 정당한 이직 사유에 해당하며, 증거만 확보하면 자진퇴사라도 실업급여 수급이 가능합니다.</p>',
    sections: [
      {
        title: '성희롱 퇴사가 정당한 이직 사유인 근거',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 시행규칙 별표2에 따라 성희롱·성폭력 피해로 인한 퇴사는 수급자격이 제한되지 않는 정당한 이직 사유입니다.</strong></p>\n<p>남녀고용평등법 제14조에 따라 사업주는 성희롱 발생 시 즉시 조사하고 피해자 보호 조치를 취해야 합니다. 사업주가 이 의무를 이행하지 않아 피해자가 퇴사한 경우, 이는 사업주의 귀책으로 인한 이직입니다.</p>\n<ol>\n<li><strong>성희롱 피해 사실</strong> — 언어적·시각적·물리적 성희롱이 반복되었음을 입증할 수 있어야 합니다.</li>\n<li><strong>사업주 미조치</strong> — 신고 후 사업주가 적절한 조치(가해자 분리, 징계, 부서이동 등)를 취하지 않았음을 증명합니다.</li>\n<li><strong>퇴사와 성희롱의 인과관계</strong> — 성희롱이 퇴사의 직접적 원인임을 보여주는 증거가 필요합니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 성희롱 피해를 회사에 신고했는데 적절한 조치가 없었다면, 퇴사 후 실업급여 수급 가능성이 높습니다.</blockquote>',
      },
      {
        title: '성희롱 퇴사 실업급여 신청 시 필수 증거 4가지',
        content:
          '<p><strong style="color:#1e3a5f">증거 확보는 퇴사 전에 완료해야 합니다. 퇴사 후에는 회사 자료에 접근이 어렵습니다.</strong></p>\n<ul>\n<li><strong>성희롱 내용 기록</strong> — 날짜, 시간, 장소, 가해자, 구체적 행위를 상세하게 기록한 일지입니다. 녹음이나 문자 캡처도 유효합니다.</li>\n<li><strong>사내 신고 기록</strong> — 인사팀이나 고충처리위원회에 성희롱을 신고한 이메일, 사내 시스템 캡처 등입니다.</li>\n<li><strong>목격자 진술</strong> — 동료 중 목격자가 있다면 진술서를 받아두세요. 퇴사 후에는 협조를 구하기 어려울 수 있습니다.</li>\n<li><strong>의료 기록(선택)</strong> — 성희롱으로 인한 우울증, 불안장애 등의 진단서가 있으면 피해 입증에 유리합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>성희롱 퇴사 후 실업급여 수급 가능성, AI가 즉시 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">피해 상황과 보유 증거를 입력하면 정당한 이직 인정 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '실업급여 외에 병행할 수 있는 법적 조치',
        content:
          '<p><strong style="color:#1e3a5f">실업급여 신청과 동시에 가해자·사업주에 대한 법적 대응도 진행할 수 있습니다.</strong></p>\n<ul>\n<li><strong>고용노동부 성희롱 진정</strong> — 사업주의 조치 의무 위반에 대해 고용노동부에 진정을 제기할 수 있습니다. 과태료 500만원 이하 부과 대상입니다.</li>\n<li><strong>형사고소</strong> — 강제추행 등 형법상 범죄에 해당하면 경찰에 형사고소가 가능합니다.</li>\n<li><strong>손해배상 청구</strong> — 가해자와 사업주를 상대로 정신적 피해에 대한 손해배상을 민사소송으로 청구할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 실업급여는 당장의 생계 보호, 진정·고소·소송은 피해 회복입니다. 두 절차를 동시에 진행하세요.</blockquote>',
      },
      {
        title: '성희롱 퇴사자가 주의할 점 3가지',
        content:
          '<p><strong style="color:#1e3a5f">합의서에 서명할 때 실업급여 수급에 영향이 없는지 가능한 한 확인하세요.</strong></p>\n<ul>\n<li><strong>합의 시 이직사유 확인</strong> — 사업주가 합의 조건으로 "원만한 퇴사" 처리를 요구할 수 있습니다. 이직확인서에 "성희롱 피해"가 이직사유로 기재되도록 협의하세요.</li>\n<li><strong>비밀유지 조항 주의</strong> — 합의서에 "일체의 민·형사상 이의를 제기하지 않는다"는 조항이 있으면 고용노동부 진정도 어려워질 수 있습니다. 실업급여 수급에 필요한 증거 사용은 별개라는 점을 명시하세요.</li>\n<li><strong>퇴사 후 증거 보관</strong> — 회사 이메일, 사내 시스템 접근이 차단되기 전에 필요한 증거를 개인 기기에 저장해두세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 해외 체류 중 대리 신고로 받은 구직급여의 부정수급 해당 여부',
        summary:
          '대구지법 2018구합23680 사건(대구지방법원, 2019.04.17 선고)에서 법원은 수급자격자가 직접 출석하거나 본인이 직접 인터넷 신고를 해야 하며, 제3자의 대리 신청을 통해 구직급여를 지급받은 것은 부정한 방법에 해당한다고 판시했습니다.',
        takeaway:
          '성희롱 피해로 정신적 고통이 크더라도 실업인정(구직활동 신고)은 가능한 한 본인이 직접 해야 합니다. 대리 신고는 부정수급으로 처벌받을 수 있으니, 온라인 신고를 활용하세요.',
      },
    ],
    faq: [
      {
        question: '성희롱을 회사에 신고하지 않고 바로 퇴사해도 실업급여가 되나요?',
        answer:
          '<p>사내 신고 기록이 없으면 정당한 이직 입증이 어려울 수 있습니다. 퇴사 전 최소한 이메일이나 문자로 신고 기록을 남기는 것이 좋습니다.</p>',
      },
      {
        question: '언어적 성희롱만으로도 정당한 이직 사유가 되나요?',
        answer:
          '<p>네, 성적 농담이나 외모 품평도 반복되면 직장 내 성희롱에 해당할 소지가 있습니다. 물리적 접촉이 아니더라도 정당한 이직 사유로 인정될 수 있습니다.</p>',
      },
      {
        question: '가해자가 같은 직급의 동료인데도 성희롱인가요?',
        answer:
          '<p>성희롱은 상하관계와 무관합니다. 동료, 거래처 직원, 고객에 의한 성희롱도 남녀고용평등법의 보호 대상이며, 사업주에게 조치 의무가 있습니다.</p>',
      },
      {
        question: '성희롱 증거가 녹음밖에 없는데 효력이 있나요?',
        answer:
          '<p>대화 당사자가 직접 녹음한 것은 증거로 인정될 수 있습니다. 다만 제3자의 대화를 몰래 녹음하면 통신비밀보호법 위반이 될 수 있으니, 본인이 참여한 대화만 녹음하세요.</p>',
      },
      {
        question: '실업급여 신청 시 성희롱 피해 사실이 외부에 알려지나요?',
        answer:
          '<p>고용센터는 개인정보보호법에 따라 이직 사유를 외부에 공개하지 않습니다. 다만, 사업주가 이직확인서를 통해 이직 사유를 알 수 있으므로 이 점은 참고하세요.</p>',
      },
    ],
    cta: { text: '성희롱 퇴사 실업급여 자격 AI로 즉시 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '직장 괴롭힘 퇴사 실업급여', href: '/guide/unemployment/unemployment-harassment-quit' },
      { label: '자발적 퇴사 실업급여', href: '/guide/unemployment/unemployment-voluntary-quit-benefits' },
      { label: '이직확인서 분쟁 해결', href: '/guide/unemployment/unemployment-separation-confirmation-dispute' },
      { label: '실업급여 거부 시 불복', href: '/guide/unemployment/unemployment-appeal-rejection' },
    ],
  },

  // ── 3. 65세 이상 고용보험 수급 예외 사항 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-over65-exclusion-exception',
    keyword: '65세 이상 실업급여 예외',
    questionKeyword: '65세가 넘었는데도 실업급여를 받을 수 있는 경우가 있나요?',
    ctaKeyword: '65세 이상 실업급여 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '65세 이상 실업급여 받는 2가지 예외 조건 | 로앤가이드',
      description:
        '65세 이후에 퇴직했는데 실업급여가 안 된다고 들었다면, 예외적으로 수급이 가능한 2가지 조건을 지금 확인하세요.',
    },
    intro:
      '<p>올해 67세인데 10년 넘게 다니던 회사에서 정년퇴직했습니다. 고용보험에 가입되어 있었는데 65세 이상은 실업급여를 못 받는다고 합니다. 원칙적으로 65세 이후에 고용된 사람은 고용보험 적용 제외 대상이지만, 65세 이전부터 피보험자격을 유지한 경우 등 예외가 있습니다. 본인의 상황에 해당하는지 확인해보세요.</p>',
    sections: [
      {
        title: '65세 이상 고용보험 적용 제외 원칙',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 제10조에 따라 65세 이후에 새로 고용된 자는 고용보험 적용 제외 대상입니다.</strong></p>\n<p>이 규정의 핵심은 "65세 이후에 새로 고용된" 경우에 한정된다는 점입니다. 65세 이전부터 계속 근무하면서 피보험자격을 유지한 근로자는 65세 이후에도 실업급여 수급이 가능합니다.</p>\n<ol>\n<li><strong>65세 이전 입사 + 계속 근무</strong> — 64세에 입사하여 66세에 퇴직한 경우, 65세 이전부터 피보험자격을 유지했으므로 실업급여 수급이 가능합니다.</li>\n<li><strong>65세 이후 신규 입사</strong> — 66세에 새로 취업한 경우, 고용보험 가입 자체가 되지 않으므로 실업급여를 받을 수 없습니다.</li>\n<li><strong>일용근로자 특례</strong> — 65세 이후에도 일용근로자로 고용된 경우에는 고용보험 가입이 가능하며, 일정 요건 충족 시 구직급여를 받을 수 있습니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 65세 이전부터 다니던 직장에서 퇴직한 경우, 65세가 넘었어도 실업급여를 받을 수 있습니다.</blockquote>',
      },
      {
        title: '65세 이상 실업급여 수급 시 확인할 사항',
        content:
          '<p><strong style="color:#1e3a5f">피보험기간 계산과 수급기간 산정에서 65세 이상 특유의 주의점이 있습니다.</strong></p>\n<ul>\n<li><strong>피보험기간 산정</strong> — 65세 이전부터의 근무 기간이 모두 피보험기간에 포함됩니다. 이직일 이전 18개월 중 180일 이상이면 요건 충족입니다.</li>\n<li><strong>구직급여 일수</strong> — 연령과 피보험기간에 따라 120일~270일까지 지급됩니다. 50세 이상은 동일 피보험기간 대비 30일 더 받습니다.</li>\n<li><strong>국민연금 동시수급</strong> — 65세 이상은 국민연금을 받으면서 실업급여도 동시에 수급할 수 있습니다. 다만 구직급여 일액의 50%가 감액될 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>65세 이상 실업급여 수급 가능 여부, AI가 즉시 확인합니다</strong></p>\n<p style="margin:0;font-size:0.95em">입사일, 퇴직일, 고용보험 가입 이력을 입력하면 수급 자격과 예상 급여액을 무료로 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '고용보험 가입 불인정 처분을 받았을 때 대응 방법',
        content:
          '<p><strong style="color:#1e3a5f">65세 이상이라는 이유만으로 가입이 거부되었다면 이의신청 또는 행정소송을 검토하세요.</strong></p>\n<p>고용보험공단이 65세 이후 피보험자격을 인정하지 않는 경우가 있습니다. 하지만 65세 이전부터 계속 근무한 경우에는 당연히 인정되어야 하며, 소속기관의 의무 해태로 가입이 누락된 경우에도 구제받을 수 있습니다.</p>\n<ul>\n<li><strong>심사청구</strong> — 고용보험심사관에게 60일 이내 심사청구를 제기합니다.</li>\n<li><strong>재심사청구</strong> — 심사 결과에 불복하면 고용보험심사위원회에 재심사청구가 가능합니다.</li>\n<li><strong>행정소송</strong> — 재심사에서도 기각되면 행정법원에 취소소송을 제기할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 65세 이전부터 피보험자격을 유지한 근로자에게 가입 불인정 처분을 한 것은 위법 소지가 있습니다. 이의신청으로 충분히 번복 가능합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 고용보험 가입신청기간 경과 후 가입 인정 여부',
        summary:
          '대법원 2018두63235 사건(대법원, 2022.10.27 선고)에서 법원은 소속기관장이 고용보험 가입의사 확인의무를 게을리하여 가입대상자가 신청기간을 놓친 경우, 그 사유를 안 날부터 다시 3개월 내에 가입신청을 할 수 있다고 판시했습니다.',
        takeaway:
          '65세 이상이라도 소속기관의 안내 미비로 고용보험 가입이 누락된 경우, 사유를 안 날부터 3개월 이내에 가입신청이 가능합니다. 가입 불인정 처분을 받았다면 가능한 한 이의를 제기하세요.',
      },
    ],
    faq: [
      {
        question: '65세 이후에 새 직장에 취업하면 고용보험에 가입할 수 있나요?',
        answer:
          '<p>원칙적으로 65세 이후 신규 고용은 고용보험 적용 제외입니다. 다만 일용근로자 또는 초단시간 근로자로 고용된 경우에는 가입이 가능할 수 있으니 고용센터에 확인하세요.</p>',
      },
      {
        question: '64세에 입사해서 66세에 퇴직하면 실업급여를 받을 수 있나요?',
        answer:
          '<p>네, 65세 이전에 입사하여 피보험자격을 취득한 경우 65세 이후 퇴직해도 실업급여를 받을 수 있습니다. 피보험기간 180일 이상 등 일반 요건을 충족해야 합니다.</p>',
      },
      {
        question: '국민연금과 실업급여를 동시에 받으면 감액되나요?',
        answer:
          '<p>네, 국민연금 수급자가 실업급여를 받으면 구직급여 일액에서 일정 비율이 감액될 수 있습니다. 정확한 감액 비율은 고용센터에서 안내받으세요.</p>',
      },
      {
        question: '정년퇴직이면 자발적 퇴사인가요, 비자발적 퇴사인가요?',
        answer:
          '<p>정년퇴직은 취업규칙이나 단체협약에 정해진 정년에 도달하여 자동으로 퇴직하는 것이므로, 비자발적 이직으로 처리됩니다. 별도 증빙 없이 실업급여 신청이 가능합니다.</p>',
      },
    ],
    cta: { text: '65세 이상 실업급여 수급 가능 여부 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '50세 이상 수급기간 연장', href: '/guide/unemployment/unemployment-50plus-extended-period' },
      { label: '국민연금 동시수급', href: '/guide/unemployment/unemployment-pension-simultaneous' },
      { label: '고용보험 미가입 대응', href: '/guide/unemployment/unemployment-employer-no-insurance' },
      { label: '실업급여 거부 불복', href: '/guide/unemployment/unemployment-appeal-rejection' },
    ],
  },

  // ── 4. 훈련연장급여 수급 조건과 신청 방법 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-training-extended-benefit',
    keyword: '훈련연장급여 신청 조건',
    questionKeyword: '훈련연장급여는 어떻게 받나요?',
    ctaKeyword: '훈련연장급여 신청 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '훈련연장급여 신청 조건 3가지와 절차 정리 | 로앤가이드',
      description:
        '구직급여 수급 중 직업훈련을 받으면 급여를 연장받을 수 있습니다. 훈련연장급여 요건과 신청 절차를 지금 확인하세요.',
    },
    intro:
      '<p>구직급여를 받으면서 국비지원 직업훈련을 시작했는데, 훈련이 끝나기 전에 구직급여 수급기간이 만료됩니다. 훈련을 중단하자니 아깝고, 생활비가 끊기면 훈련을 계속할 수 없습니다. 이런 경우 훈련연장급여를 신청하면 훈련 종료일까지 구직급여를 연장받을 수 있습니다.</p>',
    sections: [
      {
        title: '훈련연장급여란 무엇인가',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 제51조에 따라 직업능력개발훈련 수강 시 구직급여 수급기간을 최대 2년까지 연장받을 수 있습니다.</strong></p>\n<p>훈련연장급여는 구직급여 수급자가 고용센터의 지시에 따라 직업훈련을 받는 경우, 훈련 기간 동안 구직급여를 계속 지급받는 제도입니다. 일반 구직급여 수급기간이 끝나더라도 훈련이 진행 중이면 급여가 연장됩니다.</p>\n<ol>\n<li><strong>고용센터 지시 훈련</strong> — 고용센터에서 직업훈련을 지시받고 해당 훈련을 수강해야 합니다. 본인이 독자적으로 선택한 훈련은 대상이 아닙니다.</li>\n<li><strong>훈련 출석률 80% 이상</strong> — 훈련 과정에 성실하게 참석해야 합니다. 출석률이 80% 미만이면 훈련연장급여가 중단됩니다.</li>\n<li><strong>최대 2년 연장</strong> — 훈련 기간에 따라 최대 2년까지 구직급여를 연장받을 수 있습니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 훈련연장급여는 고용센터가 지시한 직업훈련을 수강하는 동안 구직급여를 계속 받을 수 있는 제도입니다.</blockquote>',
      },
      {
        title: '훈련연장급여 신청 절차 4단계',
        content:
          '<p><strong style="color:#1e3a5f">구직급여 수급기간이 끝나기 전에 미리 고용센터에 훈련연장급여를 신청해야 합니다.</strong></p>\n<ol>\n<li><strong>1단계: 훈련 상담</strong> — 고용센터 취업상담사에게 직업훈련 필요성을 상담합니다. 본인의 경력, 희망 직종에 맞는 훈련과정을 추천받습니다.</li>\n<li><strong>2단계: 훈련 지시서 발급</strong> — 고용센터가 적합한 훈련과정을 선정하여 훈련 지시서를 발급합니다. 이 지시서가 있어야 훈련연장급여 대상이 됩니다.</li>\n<li><strong>3단계: 훈련 수강 개시</strong> — 지시받은 훈련기관에 등록하고 수강을 시작합니다.</li>\n<li><strong>4단계: 연장급여 신청</strong> — 구직급여 수급기간 종료 전 고용센터에 훈련연장급여 신청서를 제출합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>훈련연장급여 수급 가능 여부, AI가 즉시 확인합니다</strong></p>\n<p style="margin:0;font-size:0.95em">현재 수급 상황과 훈련 계획을 입력하면 연장급여 수급 가능성을 무료로 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '훈련연장급여 지급액과 지급 기간',
        content:
          '<p><strong style="color:#1e3a5f">훈련연장급여는 기존 구직급여 일액의 100%를 훈련 종료일까지 지급합니다.</strong></p>\n<ul>\n<li><strong>지급액</strong> — 기존에 받던 구직급여 일액과 동일한 금액입니다. 감액 없이 전액 지급됩니다.</li>\n<li><strong>지급 기간</strong> — 훈련과정 종료일까지입니다. 훈련이 끝나면 급여도 종료됩니다.</li>\n<li><strong>훈련수당 별도</strong> — 훈련연장급여와 별도로 훈련수당(교통비·식대)이 지급될 수 있습니다. 훈련기관에 확인하세요.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 훈련연장급여는 감액 없이 기존 구직급여 일액 전액을 받습니다. 훈련수당까지 합치면 일반 구직급여보다 수령액이 많아질 수 있습니다.</blockquote>',
      },
      {
        title: '훈련연장급여가 중단되는 경우',
        content:
          '<p><strong style="color:#1e3a5f">훈련을 중도 포기하거나 출석률이 부족하면 훈련연장급여가 즉시 중단됩니다.</strong></p>\n<ul>\n<li><strong>출석률 80% 미만</strong> — 정당한 사유 없이 출석률이 80%에 미달하면 급여가 중단됩니다.</li>\n<li><strong>훈련 중도 포기</strong> — 본인 의사로 훈련을 중단하면 연장급여도 함께 종료됩니다.</li>\n<li><strong>재취업</strong> — 훈련 중 재취업하면 훈련연장급여는 중단됩니다. 다만 조기재취업수당을 받을 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고용보험 급여 신청기간의 법적 성격',
        summary:
          '대법원 2018두47264 사건(대법원, 2021.03.18 선고)에서 법원은 고용보험법상 급여 신청기간은 강행규정이자 제척기간이므로, 기간 내에 신청하지 않으면 수급권이 소멸한다고 판시했습니다.',
        takeaway:
          '훈련연장급여도 신청 기한을 놓치면 수급권이 소멸합니다. 구직급여 수급기간이 끝나기 전에 가능한 한 신청하세요. 기한 도과 후에는 구제받기 매우 어렵습니다.',
      },
    ],
    faq: [
      {
        question: '내일배움카드로 듣는 훈련도 훈련연장급여 대상인가요?',
        answer:
          '<p>내일배움카드로 수강하는 훈련이라도 고용센터의 훈련 지시를 받아야 훈련연장급여 대상이 됩니다. 본인이 독자적으로 선택한 과정은 해당되지 않으니, 고용센터와 먼저 상담하세요.</p>',
      },
      {
        question: '온라인 훈련과정도 훈련연장급여 대상이 되나요?',
        answer:
          '<p>고용센터가 지시한 훈련이라면 온라인 과정도 대상이 될 수 있습니다. 다만 출석률 확인이 가능한 과정이어야 하며, 학습 진도 인증이 필요합니다.</p>',
      },
      {
        question: '훈련 중간에 다른 과정으로 변경할 수 있나요?',
        answer:
          '<p>고용센터의 승인을 받으면 훈련과정 변경이 가능합니다. 단, 무단으로 과정을 바꾸면 훈련연장급여가 중단될 수 있으니 가능한 한 사전에 협의하세요.</p>',
      },
      {
        question: '훈련연장급여를 받다가 재취업하면 어떻게 되나요?',
        answer:
          '<p>재취업하면 훈련연장급여는 중단됩니다. 남은 구직급여 수급일수의 1/2 이상이 남아있으면 조기재취업수당을 받을 수 있습니다.</p>',
      },
    ],
    cta: { text: '훈련연장급여 수급 가능 여부 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '직업훈련 수당', href: '/guide/unemployment/unemployment-training-allowance' },
      { label: '조기재취업수당', href: '/guide/unemployment/unemployment-early-reemployment-bonus' },
      { label: '실업급여 거부 불복', href: '/guide/unemployment/unemployment-appeal-rejection' },
      { label: '50세 이상 수급기간', href: '/guide/unemployment/unemployment-50plus-extended-period' },
    ],
  },

  // ── 5. 특별연장급여 수급 요건 (경기침체 시) ──
  {
    domain: 'unemployment',
    slug: 'unemployment-special-extended-benefit',
    keyword: '특별연장급여 조건',
    questionKeyword: '경기침체 때 특별연장급여를 받을 수 있나요?',
    ctaKeyword: '특별연장급여 수급 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '특별연장급여 수급 요건 3가지 (경기침체 시) | 로앤가이드',
      description:
        '경기침체로 구직급여가 끝났는데 재취업이 안 된다면, 특별연장급여로 60일 더 받을 수 있는 조건을 지금 확인하세요.',
    },
    intro:
      '<p>구직급여 수급기간이 끝났는데 아직 일자리를 찾지 못했습니다. 뉴스에서 정부가 경기침체로 특별연장급여를 발동했다는 소식을 들었는데, 어떤 조건이 필요한지 몰라 답답합니다. 특별연장급여는 고용보험법 제53조에 따라 고용사정이 급격히 악화된 경우 정부가 고시하여 발동하는 제도로, 구직급여를 최대 60일 더 받을 수 있습니다.</p>',
    sections: [
      {
        title: '특별연장급여의 발동 요건',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 제53조에 따라 고용노동부 장관이 고시해야만 특별연장급여가 발동됩니다.</strong></p>\n<p>특별연장급여는 개인이 신청하는 것이 아니라 정부가 경기상황을 판단하여 발동하는 제도입니다. 전국 또는 특정 지역의 실업률이 급격히 상승하거나, 대규모 실업 사태가 발생한 경우에 한해 고용노동부 장관이 고시합니다.</p>\n<ol>\n<li><strong>실업률 급등</strong> — 전국 또는 특정 지역의 실업률이 이전 대비 급격히 상승한 경우입니다.</li>\n<li><strong>고용보험 수급자 급증</strong> — 실업급여 수급자가 급격히 증가한 경우 고용사정 악화의 지표로 활용됩니다.</li>\n<li><strong>고용노동부 장관 고시</strong> — 위 조건을 충족하여 고용노동부 장관이 공식적으로 특별연장급여 실시를 고시해야 합니다. 고시 없이는 수급이 불가합니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 특별연장급여는 정부가 발동해야만 받을 수 있습니다. 개인이 신청하는 제도가 아니므로, 고용노동부 고시 여부를 확인하세요.</blockquote>',
      },
      {
        title: '특별연장급여 수급 대상과 지급액',
        content:
          '<p><strong style="color:#1e3a5f">구직급여 수급이 종료된 자 중 재취업이 특히 곤란한 사람이 대상입니다.</strong></p>\n<ul>\n<li><strong>수급 대상</strong> — 구직급여 수급기간이 끝난 사람으로서, 고시에서 정한 요건(연령, 피부양자 수, 재산 등)을 충족해야 합니다.</li>\n<li><strong>지급 기간</strong> — 최대 60일입니다. 고시에 따라 단축될 수 있습니다.</li>\n<li><strong>지급액</strong> — 기존 구직급여 일액의 70%가 지급됩니다. 일반 구직급여 대비 30% 감액됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>특별연장급여 수급 자격, AI가 현재 고시 상황을 반영하여 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">구직급여 수급 이력과 현재 상황을 입력하면 특별연장급여 해당 여부를 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '특별연장급여와 다른 연장급여의 차이',
        content:
          '<p><strong style="color:#1e3a5f">실업급여 연장급여는 훈련연장·개별연장·특별연장 3가지가 있으며, 중복 수급은 불가합니다.</strong></p>\n<ul>\n<li><strong>훈련연장급여</strong> — 직업훈련을 받는 동안 구직급여를 연장합니다. 최대 2년, 구직급여 일액 100%입니다.</li>\n<li><strong>개별연장급여</strong> — 저소득 등 개인 사정에 따라 최대 60일 연장합니다. 구직급여 일액 70%입니다.</li>\n<li><strong>특별연장급여</strong> — 정부 고시에 의한 경기침체 시 최대 60일 연장합니다. 구직급여 일액 70%입니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 훈련연장급여가 지급액도 크고 기간도 길어 가장 유리합니다. 특별연장급여는 정부 발동이 필요한 특수한 제도입니다.</blockquote>',
      },
      {
        title: '특별연장급여 발동 시 신청 방법',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 고시가 발동되면 해당 기간 내에 관할 고용센터에 신청해야 합니다.</strong></p>\n<ul>\n<li><strong>신청 장소</strong> — 관할 고용센터 방문 또는 고용보험 홈페이지(www.ei.go.kr)에서 온라인 신청합니다.</li>\n<li><strong>필요 서류</strong> — 구직급여 수급 이력, 재취업 노력 증빙, 소득·재산 확인 서류 등입니다.</li>\n<li><strong>신청 기한</strong> — 고시에서 정한 기간 내에 신청해야 합니다. 기한을 놓치면 수급이 불가하니 가능한 한 확인하세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 고용보험법 위반죄의 적용 범위',
        summary:
          '대법원 2018도2429 사건(대법원, 2018.06.28 선고)에서 법원은 고용보험법 제116조 제2항의 처벌 대상은 실업급여·육아휴직급여·출산전후휴가급여에 한정되며, 고용유지지원금은 포함되지 않는다고 판시했습니다.',
        takeaway:
          '특별연장급여를 포함한 모든 실업급여는 거짓이나 부정한 방법으로 받으면 형사처벌 대상입니다. 연장급여 신청 시에도 사실에 기반한 정확한 정보를 제출하세요.',
      },
    ],
    faq: [
      {
        question: '현재 특별연장급여가 발동 중인지 어떻게 확인하나요?',
        answer:
          '<p>고용노동부 홈페이지(www.moel.go.kr)의 고시 목록이나 고용보험 홈페이지(www.ei.go.kr)에서 확인할 수 있습니다. 관할 고용센터에 전화(1350)로 문의해도 됩니다.</p>',
      },
      {
        question: '특별연장급여와 개별연장급여를 동시에 받을 수 있나요?',
        answer:
          '<p>아니요, 연장급여는 중복 수급이 불가합니다. 훈련연장, 개별연장, 특별연장 중 하나만 받을 수 있으며, 유리한 쪽을 선택해야 합니다.</p>',
      },
      {
        question: '특별연장급여 60일이 끝나면 추가 연장이 가능한가요?',
        answer:
          '<p>특별연장급여 60일이 끝나면 더 이상 연장은 어렵습니다. 다만 훈련연장급여 요건을 충족하면 별도로 신청이 가능할 수 있으니 고용센터에 상담하세요.</p>',
      },
      {
        question: '지역 특별연장급여가 따로 있나요?',
        answer:
          '<p>네, 전국 단위가 아닌 특정 지역(대규모 사업장 폐쇄 지역 등)에 한정하여 발동될 수 있습니다. 해당 지역 고용센터에서 안내받으세요.</p>',
      },
    ],
    cta: { text: '특별연장급여 수급 자격 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '훈련연장급여', href: '/guide/unemployment/unemployment-training-extended-benefit' },
      { label: '50세 이상 수급기간', href: '/guide/unemployment/unemployment-50plus-extended-period' },
      { label: '실업급여 거부 불복', href: '/guide/unemployment/unemployment-appeal-rejection' },
      { label: '반복수급 제한', href: '/guide/unemployment/unemployment-repeat-claim-limit' },
    ],
  },

  // ── 6. 개별연장급여 신청 방법과 자격 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-individual-extended-benefit',
    keyword: '개별연장급여 신청 자격',
    questionKeyword: '개별연장급여는 누가 받을 수 있나요?',
    ctaKeyword: '개별연장급여 신청 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '개별연장급여 신청 자격 4가지와 절차 정리 | 로앤가이드',
      description:
        '구직급여가 끝났는데 재취업이 안 되고 생활이 어렵다면, 개별연장급여로 60일 더 받을 수 있는 조건을 지금 확인하세요.',
    },
    intro:
      '<p>실업급여 수급기간이 끝났는데 아직 일자리를 찾지 못했습니다. 저축도 바닥나고 부양가족이 있어 당장 생활이 어렵습니다. 이런 상황에서 개별연장급여라는 제도가 있다는 것을 알게 되었습니다. 고용보험법 제52조에 따라 재취업이 곤란하고 생활이 어려운 수급자는 최대 60일간 급여를 연장받을 수 있습니다.</p>',
    sections: [
      {
        title: '개별연장급여 수급 자격 4가지',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 제52조에 따라 아래 4가지 요건을 모두 충족해야 개별연장급여를 받을 수 있습니다.</strong></p>\n<ol>\n<li><strong>구직급여 수급자격자</strong> — 구직급여를 수급 중이거나 수급이 종료된 자여야 합니다. 수급자격이 없던 사람은 대상이 아닙니다.</li>\n<li><strong>취업이 특히 곤란한 경우</strong> — 연령, 경력, 장애 등으로 재취업이 객관적으로 어려운 상황이어야 합니다. 고용센터가 구직활동 노력과 취업 가능성을 종합 판단합니다.</li>\n<li><strong>생활 곤란</strong> — 가구 소득·재산이 일정 기준 이하여야 합니다. 구체적 기준은 고용노동부 고시로 정합니다.</li>\n<li><strong>부양가족 존재</strong> — 배우자, 미성년 자녀, 65세 이상 부모 등 부양가족이 있는 경우 우선 대상입니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 개별연장급여는 취업이 곤란하고 생활이 어려운 수급자를 위한 안전망입니다. 소득·재산 기준을 충족하는지 고용센터에서 확인하세요.</blockquote>',
      },
      {
        title: '개별연장급여 신청 절차와 필요 서류',
        content:
          '<p><strong style="color:#1e3a5f">구직급여 수급기간이 끝나기 30일 전부터 신청이 가능합니다.</strong></p>\n<ul>\n<li><strong>신청 장소</strong> — 관할 고용센터에 방문하여 신청합니다. 온라인 신청은 현재 제한적입니다.</li>\n<li><strong>소득·재산 증명서류</strong> — 건강보험 자격확인서, 소득금액증명원, 재산세 과세증명서 등을 제출합니다.</li>\n<li><strong>부양가족 증명</strong> — 가족관계증명서, 주민등록등본 등으로 부양가족을 증명합니다.</li>\n<li><strong>구직활동 증빙</strong> — 그동안의 구직활동 내역(입사지원 기록, 면접 참석 확인 등)을 제출합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>개별연장급여 수급 자격, AI가 소득·재산 기준을 반영하여 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">가구 소득과 부양가족 정보를 입력하면 개별연장급여 해당 여부를 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '개별연장급여 지급액과 기간',
        content:
          '<p><strong style="color:#1e3a5f">개별연장급여는 기존 구직급여 일액의 70%를 최대 60일간 지급합니다.</strong></p>\n<ul>\n<li><strong>지급액</strong> — 기존 구직급여 일액의 70%입니다. 예를 들어 구직급여가 하루 66,000원이면 개별연장급여는 하루 46,200원입니다.</li>\n<li><strong>지급 기간</strong> — 최대 60일입니다. 60일 이전에 재취업하면 남은 기간의 급여는 지급되지 않습니다.</li>\n<li><strong>실업인정</strong> — 개별연장급여 수급 중에도 1~4주 간격으로 실업인정을 받아야 합니다. 구직활동 의무가 계속됩니다.</li>\n</ul>',
      },
      {
        title: '개별연장급여 신청 시 주의할 점',
        content:
          '<p><strong style="color:#1e3a5f">소득·재산 기준을 초과하면 즉시 수급이 중단되니, 변동 사항을 빠짐없이 신고하세요.</strong></p>\n<ul>\n<li><strong>소득 변동 신고</strong> — 가구 구성원의 소득이 변동되면 즉시 고용센터에 신고해야 합니다. 미신고 시 부정수급으로 처리될 수 있습니다.</li>\n<li><strong>구직활동 지속</strong> — 개별연장급여 수급 중에도 적극적인 구직활동을 해야 합니다. 구직활동이 부족하면 급여가 중단됩니다.</li>\n<li><strong>다른 연장급여와 중복 불가</strong> — 훈련연장급여, 특별연장급여와 중복 수급은 불가합니다. 본인에게 유리한 제도를 선택하세요.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 개별연장급여 수급 중 아르바이트 소득이 발생하면 가능한 한 신고하세요. 미신고 시 급여 전액 반환 + 추가징수 대상입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 부당해고 복직 후 구직급여 반환 여부',
        summary:
          '대구지법 2014구합1590 사건(대구지방법원, 2014.12.24 선고)에서 법원은 징계해고 후 부당해고 구제신청으로 원직복직된 경우, 이미 지급된 구직급여는 잘못 지급된 것으로서 징수 대상이 된다고 판시했습니다.',
        takeaway:
          '개별연장급여를 포함한 모든 실업급여는 수급 요건을 소급적으로 상실하면 반환 대상이 됩니다. 수급 자격에 의심이 있다면 미리 고용센터에 확인하세요.',
      },
    ],
    faq: [
      {
        question: '1인 가구도 개별연장급여를 받을 수 있나요?',
        answer:
          '<p>부양가족이 없는 1인 가구도 소득·재산 기준을 충족하고 취업이 곤란한 사정이 인정되면 수급이 가능합니다. 다만 부양가족이 있는 경우보다 심사 기준이 엄격할 수 있습니다.</p>',
      },
      {
        question: '개별연장급여와 긴급복지지원을 동시에 받을 수 있나요?',
        answer:
          '<p>개별연장급여와 긴급복지지원은 성격이 다른 제도이므로 병행 수급이 가능할 수 있습니다. 다만 소득 산정 시 다른 급여가 반영될 수 있으니 구청과 고용센터에 각각 확인하세요.</p>',
      },
      {
        question: '재산이 기준을 초과하는데 소득은 없으면 어떻게 되나요?',
        answer:
          '<p>소득과 재산 기준을 모두 충족해야 합니다. 재산이 기준을 초과하면 소득이 없더라도 개별연장급여 수급이 어려울 수 있습니다. 정확한 기준은 고용센터에서 확인하세요.</p>',
      },
      {
        question: '개별연장급여 신청이 거부되면 이의신청할 수 있나요?',
        answer:
          '<p>네, 고용보험심사관에게 60일 이내에 심사청구를 할 수 있습니다. 소득·재산 산정에 오류가 있다면 증빙서류를 첨부하여 이의를 제기하세요.</p>',
      },
      {
        question: '개별연장급여 60일이 끝나면 추가 지원을 받을 수 있나요?',
        answer:
          '<p>개별연장급여 이후 추가 연장은 어렵습니다. 다만 기초생활수급, 긴급복지지원, 취업성공패키지 등 다른 복지제도를 검토해보세요.</p>',
      },
    ],
    cta: { text: '개별연장급여 수급 자격 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '훈련연장급여', href: '/guide/unemployment/unemployment-training-extended-benefit' },
      { label: '특별연장급여', href: '/guide/unemployment/unemployment-special-extended-benefit' },
      { label: '실업급여 거부 불복', href: '/guide/unemployment/unemployment-appeal-rejection' },
      { label: '반복수급 제한', href: '/guide/unemployment/unemployment-repeat-claim-limit' },
    ],
  },

  // ── 7. 예술인·특수고용 실업급여 수급 조건 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-freelancer-artist-benefit',
    keyword: '예술인 특수고용 실업급여',
    questionKeyword: '프리랜서 예술인도 실업급여를 받을 수 있나요?',
    ctaKeyword: '예술인 실업급여 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '예술인·특수고용 실업급여 수급 조건 5가지 | 로앤가이드',
      description:
        '프리랜서 예술인이나 특수고용직으로 일하다가 일감이 끊겼다면, 실업급여를 받을 수 있는 조건을 지금 확인하세요.',
    },
    intro:
      '<p>프리랜서 영상 편집자로 2년간 꾸준히 일해왔는데, 주거래처와의 계약이 끝나고 새 일감을 찾지 못하고 있습니다. 프리랜서는 실업급여를 못 받는다고 알고 있었는데, 2020년부터 예술인 고용보험이, 2021년부터 특수고용직 고용보험이 시행되어 일정 요건을 충족하면 실업급여를 받을 수 있습니다.</p>',
    sections: [
      {
        title: '예술인·특수고용직 고용보험 적용 대상',
        content:
          '<p><strong style="color:#1e3a5f">예술인은 2020년 12월부터, 특수고용직은 2021년 7월부터 고용보험에 의무 가입되었습니다.</strong></p>\n<p>예술인 고용보험은 예술인복지법에 따른 예술활동증명을 받은 사람 또는 문화예술 분야 계약을 체결한 사람이 대상입니다. 특수고용직은 보험설계사, 학습지교사, 대리운전기사, 퀵서비스기사, 플랫폼 종사자 등 14개 직종이 대상입니다.</p>\n<ol>\n<li><strong>예술인</strong> — 문화예술용역 관련 계약을 체결하고 일하는 사람입니다. 영화, 방송, 음악, 미술, 문학 등 분야가 포함됩니다.</li>\n<li><strong>특수형태근로종사자</strong> — 노무를 제공하지만 근로기준법상 근로자가 아닌 14개 직종입니다. 대리운전, 퀵서비스, 배달 라이더 등이 포함됩니다.</li>\n<li><strong>플랫폼 종사자</strong> — 플랫폼을 통해 노무를 제공하는 사람으로, 2022년 1월부터 고용보험이 적용됩니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 프리랜서도 예술인·특수고용직·플랫폼 종사자에 해당하면 고용보험에 가입할 수 있고, 실업급여를 받을 수 있습니다.</blockquote>',
      },
      {
        title: '예술인·특수고용직 실업급여 수급 요건',
        content:
          '<p><strong style="color:#1e3a5f">일반 근로자와 달리 피보험 단위기간과 이직 사유 요건이 다릅니다.</strong></p>\n<ul>\n<li><strong>피보험 단위기간</strong> — 이직일 이전 24개월 중 9개월 이상 피보험 단위기간이 필요합니다. 일반 근로자의 18개월 중 180일보다 기간이 깁니다.</li>\n<li><strong>비자발적 이직</strong> — 계약 만료, 계약 해지, 일감 중단 등이 비자발적 이직에 해당할 소지가 있습니다. 본인이 스스로 계약을 해지한 경우에도 정당한 사유가 있으면 인정될 수 있습니다.</li>\n<li><strong>구직 의사와 능력</strong> — 재취업 의사가 있고 구직활동을 할 수 있는 상태여야 합니다.</li>\n<li><strong>구직급여 일액</strong> — 기초일액(이직 전 1년간 보수총액 ÷ 총 일수)의 60%입니다. 상한액과 하한액이 적용됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>예술인·특수고용직 실업급여 수급 자격, AI가 즉시 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">계약 형태와 피보험기간을 입력하면 수급 가능 여부와 예상 급여액을 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '고용보험 미가입 시 소급 가입 방법',
        content:
          '<p><strong style="color:#1e3a5f">사업주가 고용보험 가입의무를 이행하지 않았다면 소급 가입을 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>피보험자격 확인청구</strong> — 근로복지공단에 피보험자격 확인청구서를 제출합니다. 계약서, 보수 지급 내역 등을 증거로 첨부합니다.</li>\n<li><strong>소급 가입 범위</strong> — 최대 3년까지 소급하여 고용보험에 가입할 수 있습니다.</li>\n<li><strong>보험료 부담</strong> — 소급 가입 시 근로자 부담분 보험료를 납부해야 합니다. 사업주 부담분은 사업주에게 청구됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 사업주가 가입을 안 했더라도 포기하지 마세요. 소급 가입으로 피보험기간을 확보하면 실업급여를 받을 수 있습니다.</blockquote>',
      },
      {
        title: '예술인·특수고용직 실업급여 신청 시 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">여러 사업주와 동시 계약 중 일부만 종료된 경우, 수급 요건을 충족하지 못할 수 있습니다.</strong></p>\n<ul>\n<li><strong>동시 계약 문제</strong> — 2개 이상의 사업주와 계약 중 1개만 종료된 경우, 나머지 계약이 유지되면 "이직"으로 보지 않을 수 있습니다.</li>\n<li><strong>소득 신고 의무</strong> — 실업급여 수급 중 다른 일감으로 소득이 발생하면 가능한 한 실업인정 시 신고해야 합니다.</li>\n<li><strong>적용 제외 신청 주의</strong> — 특수고용직은 고용보험 적용 제외를 신청할 수 있지만, 적용 제외 기간은 피보험기간에 포함되지 않으므로 신중하게 결정하세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 소속기관의 의무 해태로 인한 고용보험 가입 불인정 처분의 위법성',
        summary:
          '광주고법(제주) 2018누1338 사건(광주고등법원, 2018.10.24 선고)에서 법원은 소속기관장이 고용보험 가입의사 확인의무를 해태하여 가입신청기간이 경과한 경우, 가입대상자가 그 사유를 안 날부터 3개월 내에 가입신청을 할 수 있다고 판시했습니다.',
        takeaway:
          '예술인·특수고용직도 사업주의 미신고로 고용보험 가입이 누락된 경우, 소급 가입이 가능합니다. 사유를 안 날부터 3개월 이내에 근로복지공단에 확인청구하세요.',
      },
    ],
    faq: [
      {
        question: '유튜버나 인플루언서도 예술인 고용보험에 가입할 수 있나요?',
        answer:
          '<p>문화예술용역 관련 계약을 체결하고 활동하는 경우 가입 대상이 될 수 있습니다. 단, 단순 광고 수익만으로는 어렵고, 영상 제작 용역 계약이 있어야 합니다.</p>',
      },
      {
        question: '배달 라이더인데 고용보험에 가입되어 있는지 어떻게 확인하나요?',
        answer:
          '<p>고용보험 홈페이지(www.ei.go.kr)에서 "피보험자격 이력조회"를 통해 확인할 수 있습니다. 플랫폼 회사가 가입 신고를 했는지 확인하세요.</p>',
      },
      {
        question: '여러 플랫폼에서 동시에 일하면 피보험기간이 합산되나요?',
        answer:
          '<p>네, 여러 사업주에게서 취득한 피보험 단위기간은 합산됩니다. 모든 플랫폼에서의 피보험기간을 합산하여 9개월 이상이면 요건을 충족합니다.</p>',
      },
      {
        question: '특수고용직 고용보험 적용 제외를 신청했는데 취소할 수 있나요?',
        answer:
          '<p>적용 제외 신청은 취소할 수 있습니다. 근로복지공단에 적용 제외 철회 신청서를 제출하면 됩니다. 다만 적용 제외 기간은 피보험기간에 포함되지 않습니다.</p>',
      },
      {
        question: '프리랜서 실업급여 구직활동은 어떻게 인정받나요?',
        answer:
          '<p>일반 근로자와 동일하게 입사지원, 면접 참석, 직업훈련 수강 등이 구직활동으로 인정될 수 있습니다. 예술인은 오디션 참석, 공모전 응모 등도 인정될 수 있습니다.</p>',
      },
    ],
    cta: { text: '예술인·특수고용직 실업급여 자격 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '플랫폼 노동자 실업급여', href: '/guide/unemployment/unemployment-gig-platform-worker' },
      { label: '고용보험 미가입 대응', href: '/guide/unemployment/unemployment-employer-no-insurance' },
      { label: '이직확인서 분쟁', href: '/guide/unemployment/unemployment-separation-confirmation-dispute' },
      { label: '자영업자 폐업 실업급여', href: '/guide/unemployment/unemployment-self-employed-closure' },
    ],
  },

  // ── 8. 구직활동 인정 유형 총정리 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-job-search-recognized-types',
    keyword: '구직활동 인정 유형',
    questionKeyword: '실업급여 구직활동으로 인정되는 것은 무엇인가요?',
    ctaKeyword: '구직활동 인정 유형 상담',
    type: '정보형',
    perspective: 'victim',
    meta: {
      title: '실업급여 구직활동 인정 유형 7가지 총정리 | 로앤가이드',
      description:
        '실업급여 받으면서 구직활동을 어떻게 해야 하는지 막막하다면, 인정되는 7가지 활동 유형을 지금 확인하세요.',
    },
    intro:
      '<p>실업급여를 받기 시작했는데, 2주마다 구직활동을 증명해야 한다고 합니다. 입사지원만 구직활동인 줄 알았는데, 실제로는 다양한 활동이 인정될 수 있습니다. 어떤 활동이 인정되는지 미리 알아두면 실업인정에 어려움 없이 구직급여를 받을 수 있습니다.</p>',
    sections: [
      {
        title: '구직활동 인정 유형 7가지',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 시행규칙에 따라 다음 7가지 유형의 구직활동이 실업인정 시 인정될 수 있습니다.</strong></p>\n<ol>\n<li><strong>구인업체 입사지원</strong> — 채용 공고에 이력서를 제출하고 지원한 활동입니다. 온라인(잡코리아, 사람인 등)과 오프라인 모두 인정될 수 있습니다.</li>\n<li><strong>채용면접 참석</strong> — 서류 통과 후 면접에 참석한 경우입니다. 전화·화상 면접도 인정될 수 있습니다.</li>\n<li><strong>직업훈련 수강</strong> — 국비지원 직업훈련, 내일배움카드 훈련 등을 수강하는 경우입니다.</li>\n<li><strong>고용센터 상담</strong> — 고용센터에서 취업상담을 받은 경우입니다. 온라인 상담도 포함됩니다.</li>\n<li><strong>취업특강·세미나 참석</strong> — 고용센터나 공공기관이 주관하는 취업 특강, 이력서 작성 교육 등에 참석한 경우입니다.</li>\n<li><strong>자격증 시험 응시</strong> — 취업에 도움이 되는 자격증 시험에 응시한 경우입니다. 시험 접수만으로는 부족하고, 실제 응시해야 합니다.</li>\n<li><strong>창업 준비활동</strong> — 소상공인지원센터 상담, 사업계획서 작성, 창업교육 수강 등이 해당됩니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 입사지원만이 구직활동이 아닙니다. 직업훈련, 자격증 시험, 창업 준비까지 다양한 활동이 인정될 수 있습니다.</blockquote>',
      },
      {
        title: '구직활동 증빙 방법과 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">각 활동별 증빙자료를 미리 준비해두면 실업인정 시 시간을 절약할 수 있습니다.</strong></p>\n<ul>\n<li><strong>입사지원</strong> — 지원 확인 이메일 캡처, 채용사이트 지원이력 화면 캡처입니다.</li>\n<li><strong>면접 참석</strong> — 면접 안내 문자·이메일, 면접 확인서입니다.</li>\n<li><strong>직업훈련</strong> — 훈련 출석 확인서, 수강 인증 화면입니다.</li>\n<li><strong>고용센터 상담</strong> — 상담 확인서 또는 워크넷 상담 이력입니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>구직활동 인정 여부가 확실하지 않다면, AI가 즉시 판단해드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">어떤 활동을 했는지 입력하면 실업인정에 인정되는지 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '실업인정 주기별 필요한 구직활동 횟수',
        content:
          '<p><strong style="color:#1e3a5f">실업인정 1~4차는 1회, 5차 이후부터는 매 실업인정일마다 2회 이상 구직활동을 해야 합니다.</strong></p>\n<ul>\n<li><strong>1~4차 실업인정</strong> — 각 실업인정 기간에 구직활동 1회 이상이면 됩니다. 초기에는 부담이 적습니다.</li>\n<li><strong>5차 이후 실업인정</strong> — 매 실업인정 기간에 구직활동 2회 이상이 필요합니다. 입사지원 2건, 또는 면접 1건 + 훈련 수강 1건 등 조합이 가능합니다.</li>\n<li><strong>주의</strong> — 같은 회사에 같은 날 2건 지원하는 것은 1회로 봅니다. 서로 다른 회사에 지원해야 합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 실업인정 5차부터 2회 이상 구직활동이 필요합니다. 미리 계획을 세워 누락 없이 준비하세요.</blockquote>',
      },
      {
        title: '구직활동 미인정 사례와 대응',
        content:
          '<p><strong style="color:#1e3a5f">구직활동이 불인정되면 해당 기간의 구직급여가 지급되지 않으니 주의하세요.</strong></p>\n<ul>\n<li><strong>허위 입사지원</strong> — 실제로 취업 의사 없이 형식적으로만 지원한 경우, 고용센터가 확인하면 불인정될 수 있습니다.</li>\n<li><strong>동일 회사 반복 지원</strong> — 같은 회사에 같은 포지션을 반복 지원하는 것은 구직활동으로 인정되지 않습니다.</li>\n<li><strong>증빙자료 미제출</strong> — 구직활동을 했지만 증빙자료를 제출하지 못하면 인정되지 않습니다.</li>\n<li><strong>불인정 시 대응</strong> — 해당 실업인정일의 급여만 보류되며, 다음 실업인정 시 보충 증빙을 제출하면 소급 인정받을 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 해외 체류 중 대리 재취업 노력신고의 부정수급 해당 여부',
        summary:
          '대구지법 2018구합23680 사건(대구지방법원, 2019.04.17 선고)에서 법원은 수급자격자가 해외 체류 중 제3자가 대리로 재취업 노력신고를 한 것은 부정한 방법에 의한 구직급여 수급에 해당한다고 판시했습니다.',
        takeaway:
          '구직활동 신고는 가능한 한 본인이 직접 해야 합니다. 가족이나 지인이 대신 신고하면 부정수급으로 처벌 대상으로 검토될 수 있습니다. 온라인 신고도 본인 계정으로 직접 해야 합니다.',
      },
    ],
    faq: [
      {
        question: '워크넷에서 입사지원만 해도 구직활동으로 인정되나요?',
        answer:
          '<p>네, 워크넷이나 민간 채용사이트(잡코리아, 사람인 등)에서의 입사지원은 구직활동으로 인정될 수 있습니다. 지원 이력 화면을 캡처해두세요.</p>',
      },
      {
        question: '같은 날 여러 회사에 지원하면 각각 인정되나요?',
        answer:
          '<p>네, 같은 날이라도 서로 다른 회사에 지원했다면 각각 별도의 구직활동으로 인정될 수 있습니다. 2회 이상 활동이 필요할 때 유용합니다.</p>',
      },
      {
        question: '해외 취업을 위한 구직활동도 인정되나요?',
        answer:
          '<p>해외 취업 지원도 구직활동으로 인정될 수 있습니다. 다만, 해외 체류 중에는 실업인정이 어려우므로 국내에서 지원하는 것이 안전합니다.</p>',
      },
      {
        question: '구직활동이 부족해서 실업인정이 안 되면 급여가 완전히 끊기나요?',
        answer:
          '<p>해당 실업인정 기간의 급여만 보류됩니다. 다음 실업인정 시 구직활동을 충족하면 이후 급여는 정상 지급됩니다. 보류된 급여도 보충 증빙으로 소급 인정받을 수 있습니다.</p>',
      },
    ],
    cta: { text: '구직활동 인정 여부 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '아르바이트 소득 한도', href: '/guide/unemployment/unemployment-part-time-income-limit' },
      { label: '직업훈련 수당', href: '/guide/unemployment/unemployment-training-allowance' },
      { label: '부정수급 처벌 대응', href: '/guide/unemployment/unemployment-fraud-penalty-response' },
      { label: '조기재취업수당', href: '/guide/unemployment/unemployment-early-reemployment-bonus' },
    ],
  },

  // ── 9. 실업급여 감액·반환 사유와 대응 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-benefit-reduction-penalty',
    keyword: '실업급여 감액 반환 사유',
    questionKeyword: '실업급여가 감액되거나 반환하라는 통보를 받았는데 어떻게 해야 하나요?',
    ctaKeyword: '실업급여 감액 반환 대응 상담',
    type: '대응형',
    perspective: 'victim',
    meta: {
      title: '실업급여 감액·반환 사유 6가지와 대응법 | 로앤가이드',
      description:
        '실업급여가 갑자기 감액되거나 반환 통보를 받았다면, 감액 사유와 이의신청 방법을 지금 확인하세요.',
    },
    intro:
      '<p>실업급여를 받던 중 고용센터에서 급여 일부를 반환하라는 통보가 왔습니다. 이유를 보니 아르바이트 소득을 신고하지 않았다는 것인데, 소액이라 괜찮은 줄 알았습니다. 실업급여 감액과 반환은 부정수급 처벌과는 다르지만, 대응하지 않으면 가산금까지 부과될 수 있습니다. 어떤 사유로 감액·반환이 되는지 미리 알아두세요.</p>',
    sections: [
      {
        title: '실업급여가 감액되는 6가지 사유',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법에 따라 다음 사유에 해당하면 구직급여가 감액 또는 지급 제한됩니다.</strong></p>\n<ol>\n<li><strong>취업 사실 미신고</strong> — 아르바이트, 프리랜서 소득 등 취업 사실을 실업인정 시 신고하지 않으면 해당 기간 급여가 환수됩니다.</li>\n<li><strong>구직활동 부족</strong> — 실업인정 기간에 필요한 구직활동 횟수를 채우지 못하면 해당 기간 급여가 지급되지 않습니다.</li>\n<li><strong>소득 발생</strong> — 일용직, 아르바이트 등으로 소득이 발생하면 그 금액에 따라 구직급여가 감액됩니다.</li>\n<li><strong>직업안정기관 지시 불이행</strong> — 고용센터가 지시한 직업훈련이나 취업 소개를 정당한 사유 없이 거부하면 급여가 제한됩니다.</li>\n<li><strong>국민연금 수급</strong> — 국민연금을 동시에 받는 경우 구직급여 일액이 일부 감액될 수 있습니다.</li>\n<li><strong>자영업 개시</strong> — 사업자등록을 하고 자영업을 시작하면 구직급여 수급이 중단됩니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 소액 아르바이트라도 가능한 한 실업인정 시 신고해야 합니다. 미신고 시 부정수급으로 처리되어 급여 전액 반환 + 추가징수 대상이 됩니다.</blockquote>',
      },
      {
        title: '반환 명령을 받았을 때 대응 방법',
        content:
          '<p><strong style="color:#1e3a5f">반환 명령에 불복하려면 60일 이내에 고용보험심사관에게 심사청구를 제기하세요.</strong></p>\n<ul>\n<li><strong>처분 내용 확인</strong> — 반환 명령서에 기재된 사유, 금액, 산정 근거를 꼼꼼히 확인합니다. 산정 오류가 있을 수 있습니다.</li>\n<li><strong>심사청구</strong> — 처분에 불복하면 처분을 안 날부터 90일 이내에 고용보험심사관에게 심사청구를 제기합니다.</li>\n<li><strong>재심사청구</strong> — 심사 결과에도 불복하면 재결서 정본을 받은 날부터 90일 이내에 고용보험심사위원회에 재심사청구를 합니다.</li>\n<li><strong>행정소송</strong> — 재심사에서도 기각되면 행정법원에 처분 취소소송을 제기할 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>실업급여 감액·반환 통보를 받았다면, AI가 대응 방법을 즉시 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">감액 사유와 금액을 입력하면 이의신청 가능 여부와 절차를 무료로 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '감액과 부정수급의 차이',
        content:
          '<p><strong style="color:#1e3a5f">단순 감액은 해당 기간 급여만 조정되지만, 부정수급은 전액 반환 + 추가징수 + 형사처벌까지 가능합니다.</strong></p>\n<ul>\n<li><strong>단순 감액</strong> — 소득 발생으로 인한 일부 감액은 해당 기간의 급여만 조정됩니다. 추가 제재는 없습니다.</li>\n<li><strong>부정수급</strong> — 거짓이나 부정한 방법으로 급여를 받은 경우, 부정수급액 전액 반환 + 부정수급액의 최대 5배 추가징수 + 형사처벌(고용보험법 제116조)까지 가능합니다.</li>\n<li><strong>구분 기준</strong> — 고의로 사실을 숨기거나 허위 신고한 경우 부정수급, 단순 실수나 제도 오해인 경우 감액으로 처리됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 실수로 신고를 누락한 경우에도 자진 신고하면 부정수급 제재를 피하거나 줄일 수 있습니다. 누락을 발견하면 즉시 고용센터에 알리세요.</blockquote>',
      },
      {
        title: '반환금 분할납부와 감면 제도',
        content:
          '<p><strong style="color:#1e3a5f">반환금을 일시에 납부하기 어려우면 분할납부를 신청할 수 있습니다.</strong></p>\n<ul>\n<li><strong>분할납부</strong> — 고용센터에 분할납부 신청서를 제출하면 최대 3년까지 나눠 납부할 수 있습니다.</li>\n<li><strong>가산금</strong> — 납부 기한을 넘기면 연 6%의 가산금이 부과됩니다. 기한 내 분할납부를 신청하세요.</li>\n<li><strong>생활 곤란 시 감면</strong> — 기초생활수급자 등 생활이 곤란한 경우 반환금의 일부 감면을 신청할 수 있습니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 실업급여 부정수급 반환명령의 적법성',
        summary:
          '대법원 2020두31323 사건(대법원, 2020.05.14 선고)에서 법원은 취업 사실 신고의무 위반을 처분사유로 하는 실업급여 지급제한 및 반환명령 규정이 그 자체로 헌법이나 법률에 위배되지 않는다고 판시했습니다.',
        takeaway:
          '취업 사실을 신고하지 않고 구직급여를 받은 경우 반환명령은 적법합니다. 소액이라도 가능한 한 신고해야 하며, 반환 명령을 받았다면 산정 오류 여부를 확인한 후 이의신청 여부를 결정하세요.',
      },
    ],
    faq: [
      {
        question: '하루짜리 일용직도 신고해야 하나요?',
        answer:
          '<p>네, 1일이라도 취업하면 실업인정 시 가능한 한 신고해야 합니다. 미신고 시 부정수급으로 처리될 수 있습니다.</p>',
      },
      {
        question: '반환 명령에 이의신청하면 납부를 안 해도 되나요?',
        answer:
          '<p>이의신청(심사청구)을 해도 반환 의무는 자동으로 유예되지 않습니다. 별도로 집행정지 신청을 하거나, 우선 납부 후 환급받는 방법을 검토하세요.</p>',
      },
      {
        question: '실업급여 감액분을 나중에 돌려받을 수 있나요?',
        answer:
          '<p>소득 발생으로 감액된 급여는 원칙적으로 돌려받을 수 없습니다. 다만 감액 산정에 오류가 있었다면 이의신청을 통해 차액을 받을 수 있습니다.</p>',
      },
      {
        question: '부정수급으로 처벌받으면 다음에 실업급여를 못 받나요?',
        answer:
          '<p>부정수급 처분을 받으면 그 이후 급여 지급이 제한됩니다. 다만 새로운 수급자격을 취득하면 다시 실업급여를 받을 수 있습니다. 반복 부정수급은 제재가 강화됩니다.</p>',
      },
      {
        question: '자진 신고하면 부정수급 제재가 줄어드나요?',
        answer:
          '<p>네, 고용센터 적발 전에 자진 신고하면 추가징수 배율이 감경될 수 있습니다. 누락을 발견하면 즉시 고용센터에 연락하세요.</p>',
      },
    ],
    cta: { text: '실업급여 감액·반환 대응 방법 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '부정수급 처벌 대응', href: '/guide/unemployment/unemployment-fraud-penalty-response' },
      { label: '아르바이트 소득 한도', href: '/guide/unemployment/unemployment-part-time-income-limit' },
      { label: '실업급여 거부 불복', href: '/guide/unemployment/unemployment-appeal-rejection' },
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '반복수급 제한', href: '/guide/unemployment/unemployment-repeat-claim-limit' },
    ],
  },

  // ── 10. 해외 취업 후 귀국 실업급여 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-overseas-job-return-benefit',
    keyword: '해외 취업 귀국 실업급여',
    questionKeyword: '해외에서 일하다가 귀국했는데 실업급여를 받을 수 있나요?',
    ctaKeyword: '해외 취업 귀국 실업급여 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '해외 취업 귀국 후 실업급여 받는 3가지 조건 | 로앤가이드',
      description:
        '해외에서 일하다가 귀국했는데 실업급여를 받을 수 있는지 궁금하다면, 피보험기간 산정 기준을 지금 확인하세요.',
    },
    intro:
      '<p>베트남 현지법인에서 3년간 근무하다가 계약이 끝나 귀국했습니다. 한국에서 고용보험에 가입되어 있었는지, 해외 근무 기간이 피보험기간에 포함되는지 알 수 없어 답답합니다. 해외 취업 후 귀국 시 실업급여 수급 가능 여부는 고용보험 피보험자격 유지 여부에 달려 있습니다.</p>',
    sections: [
      {
        title: '해외 취업 시 고용보험 적용 여부',
        content:
          '<p><strong style="color:#1e3a5f">해외 취업 유형에 따라 고용보험 적용 여부가 달라집니다.</strong></p>\n<ol>\n<li><strong>국내 기업의 해외 파견</strong> — 국내 기업에 소속된 채로 해외에 파견된 경우, 국내 고용보험이 계속 적용됩니다. 피보험기간에 포함됩니다.</li>\n<li><strong>해외 현지법인 직접 채용</strong> — 국내 기업과 근로계약을 종료하고 해외 현지법인에 새로 채용된 경우, 국내 고용보험이 적용되지 않습니다. 해외 근무 기간은 피보험기간에 포함되지 않습니다.</li>\n<li><strong>국내 기업에서 전출</strong> — 국내 기업에서 해외 계열사로 전출된 경우, 국내 기업과의 고용관계가 종료되었으면 고용보험 자격도 상실됩니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 국내 기업 소속 해외 파견이면 고용보험이 유지됩니다. 해외 현지법인 직접 채용이면 국내 고용보험이 적용되지 않으므로 피보험기간을 따로 확인해야 합니다.</blockquote>',
      },
      {
        title: '귀국 후 실업급여 신청 시 피보험기간 계산',
        content:
          '<p><strong style="color:#1e3a5f">해외 근무 유형에 따라 피보험기간 산정 방법이 다릅니다.</strong></p>\n<ul>\n<li><strong>해외 파견(국내 기업 소속 유지)</strong> — 해외 파견 기간 전체가 피보험기간에 포함됩니다. 귀국 후 퇴직하면 일반 실업급여 신청과 동일합니다.</li>\n<li><strong>해외 현지법인 채용</strong> — 국내 기업 퇴직 시점이 이직일이 됩니다. 이직일 이전 18개월 중 180일 이상 피보험기간이 있어야 합니다.</li>\n<li><strong>수급기간 주의</strong> — 실업급여는 이직일 다음 날부터 12개월 이내에 신청해야 합니다. 해외에서 오래 근무하다가 귀국하면 이미 수급기간이 지나 있을 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>해외 취업 귀국 후 실업급여 수급 가능 여부, AI가 즉시 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">해외 근무 유형과 기간을 입력하면 피보험기간 산정과 수급 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '해외 근무 기간이 피보험기간에 포함되지 않을 때 대안',
        content:
          '<p><strong style="color:#1e3a5f">해외 현지법인 채용으로 피보험기간이 부족하다면 이전 국내 직장의 피보험기간을 합산하세요.</strong></p>\n<ul>\n<li><strong>이전 피보험기간 합산</strong> — 해외 취업 전 국내에서 근무한 피보험기간이 있다면, 이직일 이전 18개월 범위 내에서 합산이 가능합니다.</li>\n<li><strong>고용보험 임의가입</strong> — 해외 취업 전 자영업자로서 고용보험에 임의 가입한 기간이 있다면 합산 대상입니다.</li>\n<li><strong>피보험자격 확인청구</strong> — 국내 기업과의 고용관계가 실질적으로 유지되었음을 증명할 수 있다면, 근로복지공단에 피보험자격 확인청구를 검토하세요.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 해외 근무 전 국내 직장의 피보험기간을 확인하세요. 합산하여 180일 이상이면 실업급여 수급이 가능할 수 있습니다.</blockquote>',
      },
      {
        title: '해외 취업 귀국자가 놓치기 쉬운 실수 3가지',
        content:
          '<p><strong style="color:#1e3a5f">수급기간 12개월을 넘기면 아무리 피보험기간이 충분해도 실업급여를 받을 수 없습니다.</strong></p>\n<ul>\n<li><strong>수급기간 도과</strong> — 국내 기업 퇴직일부터 12개월이 지나면 수급권이 소멸합니다. 해외에서 오래 일한 뒤 귀국하면 이미 기한이 지나 있을 수 있습니다.</li>\n<li><strong>이직 사유 미확인</strong> — 해외 파견 후 귀국하면서 퇴직한 경우, 이직확인서의 이직 사유를 가능한 한 확인하세요. "개인 사정"으로 처리되면 수급이 제한될 수 있습니다.</li>\n<li><strong>외국 법인 근무 기간 착각</strong> — 외국 법인에서 근무한 기간은 국내 피보험기간에 포함되지 않습니다. 국내 기업과의 고용관계 유지 여부를 정확히 확인하세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 해외 법인 전출과 고용보험 수급자격의 관계',
        summary:
          '울산지법 2013구합2840 사건(울산지방법원, 2014.04.24 선고)에서 법원은 국내 기업에서 해외 현지법인으로 전출되어 새로운 근로계약을 체결한 경우, 국내 기업과의 고용관계는 종료된 것으로 보아야 하며 이직일부터 12개월이 지나면 수급기간이 만료된다고 판시했습니다.',
        takeaway:
          '해외 법인으로 전출 시 퇴직금을 받고 새 계약을 체결했다면 고용관계가 종료된 것입니다. 전출 시점이 이직일이 되므로 12개월 이내에 실업급여를 신청해야 합니다.',
      },
    ],
    faq: [
      {
        question: '해외 파견 중 퇴직하면 현지에서 실업급여를 신청할 수 있나요?',
        answer:
          '<p>실업급여 신청은 국내 관할 고용센터에서 해야 합니다. 해외에서는 신청할 수 없으므로 귀국 후 신청하세요. 수급기간(12개월) 이내인지 가능한 한 확인하세요.</p>',
      },
      {
        question: '해외 법인에서 해고당했는데 한국에서 실업급여를 받을 수 있나요?',
        answer:
          '<p>해외 법인과의 고용관계는 국내 고용보험법 적용 대상이 아닙니다. 국내 기업과의 고용관계가 유지되고 있었는지 여부가 핵심입니다.</p>',
      },
      {
        question: '국내 기업 소속으로 해외 파견을 갔는데 현지에서 급여를 받았습니다. 고용보험이 유지되나요?',
        answer:
          '<p>국내 기업이 고용보험 피보험자격 신고를 유지했다면 고용보험이 계속 적용됩니다. 급여를 누가 지급했는지보다 피보험자격 유지 여부가 중요합니다.</p>',
      },
      {
        question: '해외 취업 전 국내에서 1년 일했는데, 5년 뒤 귀국해도 피보험기간이 인정되나요?',
        answer:
          '<p>이직일 이전 18개월 범위 내의 피보험기간만 인정될 수 있습니다. 5년 전 국내 근무 기간은 범위를 벗어나므로 합산이 어렵습니다.</p>',
      },
      {
        question: '해외 체류 중 한국 실업급여를 온라인으로 신청할 수 있나요?',
        answer:
          '<p>실업급여 최초 신청은 고용센터 방문이 원칙입니다. 해외에서 온라인만으로 신청하는 것은 불가하며, 대리 신청도 부정수급에 해당하므로 가능한 한 귀국 후 직접 방문하세요.</p>',
      },
    ],
    cta: { text: '해외 취업 귀국 실업급여 자격 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '외국인 근로자 수급 자격', href: '/guide/unemployment/unemployment-foreign-worker-eligibility' },
      { label: '고용보험 미가입 대응', href: '/guide/unemployment/unemployment-employer-no-insurance' },
      { label: '이직확인서 분쟁', href: '/guide/unemployment/unemployment-separation-confirmation-dispute' },
      { label: '실업급여 거부 불복', href: '/guide/unemployment/unemployment-appeal-rejection' },
    ],
  },
];
