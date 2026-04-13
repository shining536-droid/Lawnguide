import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 실업급여 심화 스포크 8개 (batch31)
//
// 1. unemployment-employer-forced-resignation
//    이 페이지는 [사업주의 압박으로 사직서를 쓴 근로자]의 [자진퇴사 처리되어 실업급여를 못 받을까 걱정하는 상황]에서
//    [강요에 의한 사직의 비자발적 이직 인정 기준과 증빙 방법]을 돕는 페이지다.
//
// 2. unemployment-burnout-mental-health-quit
//    이 페이지는 [직장 번아웃이나 우울증으로 퇴사를 고민하는 근로자]의 [정신건강 사유가 정당한 이직으로 인정되는지 모르는 상황]에서
//    [건강 사유 정당한 이직 요건과 진단서 확보 방법]을 돕는 페이지다.
//
// 3. unemployment-dispatch-contract-end
//    이 페이지는 [파견근로 계약이 종료된 근로자]의 [파견 종료가 실업급여 수급 사유에 해당하는지 모르는 상황]에서
//    [파견계약 종료 시 실업급여 수급 조건과 신청 절차]를 돕는 페이지다.
//
// 4. unemployment-business-transfer-quit
//    이 페이지는 [사업 양도양수로 고용 승계가 거부되거나 근로조건이 변경된 근로자]의 [실업급여 수급 가능 여부를 모르는 상황]에서
//    [사업 양도양수 시 퇴사 사유별 실업급여 인정 기준]을 돕는 페이지다.
//
// 5. unemployment-multiple-workplace-combined
//    이 페이지는 [여러 사업장에서 단시간 근무한 근로자]의 [피보험기간 180일을 채웠는지 확인이 안 되는 상황]에서
//    [복수 사업장 피보험기간 합산 방법과 확인 절차]를 돕는 페이지다.
//
// 6. unemployment-seasonal-short-repeat
//    이 페이지는 [계절근로나 단기반복 근로를 하는 근로자]의 [짧은 근무기간으로도 실업급여를 받을 수 있는지 모르는 상황]에서
//    [일용근로자·초단시간 근로자의 실업급여 수급 특례와 신청 방법]을 돕는 페이지다.
//
// 7. unemployment-internship-training-end
//    이 페이지는 [인턴이나 직업훈련 종료 후 정규직 전환이 안 된 근로자]의 [인턴 기간이 피보험기간에 포함되는지 모르는 상황]에서
//    [인턴·수습 종료 후 실업급여 수급 요건과 확인 방법]을 돕는 페이지다.
//
// 8. unemployment-disciplinary-fired-benefit
//    이 페이지는 [징계해고를 당한 근로자]의 [징계해고도 실업급여를 받을 수 있는지 모르는 상황]에서
//    [징계해고 시 실업급여 수급 가능 여부와 중대한 귀책사유 판단 기준]을 돕는 페이지다.
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch31Unemployment: SpokePage[] = [
  // ── 1. 사업주 강요 사직서 실업급여 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-employer-forced-resignation',
    keyword: '사업주 강요 사직서 실업급여',
    questionKeyword: '사업주 압박으로 사직서를 썼는데 실업급여 받을 수 있나요?',
    ctaKeyword: '강요 사직 실업급여 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '사업주 강요 사직서 실업급여 받는 3가지 조건 | 로앤가이드',
      description:
        '사업주 압박으로 사직서를 썼다면 자진퇴사가 아닌 비자발적 이직으로 인정받을 수 있는 기준과 증빙 방법을 지금 확인하세요.',
    },
    intro:
      '<p>상사가 "사직서를 안 쓰면 징계해고 하겠다"며 사직서를 강요했습니다. 울며 겨자 먹기로 사직서를 제출했는데, 이직확인서에는 "자발적 퇴사"로 기재되어 있습니다. 고용센터에서 자진퇴사로 보면 실업급여를 못 받는 것 아닌지 걱정됩니다. 고용보험법 시행규칙 별표2에 따르면 사업주의 강요에 의한 사직은 비자발적 이직으로 인정될 수 있으며, 증거만 확보하면 실업급여 수급이 가능합니다.</p>',
    sections: [
      {
        title: '강요에 의한 사직이 비자발적 이직인 이유',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 시행규칙 별표2에 따라 사업주의 강요·권유에 의한 사직은 비자발적 이직으로 인정됩니다.</strong></p>\n<p>형식적으로 사직서를 제출했더라도, 실질적으로 근로자의 자유로운 의사에 의한 것이 아니라 사업주의 압박이나 강요에 의한 것이라면 이는 비자발적 이직에 해당합니다. 고용센터는 사직서 제출 경위와 전후 상황을 종합적으로 판단합니다.</p>\n<ol>\n<li><strong>징계해고 위협 후 사직 강요</strong> — "사직서를 안 쓰면 징계처리 하겠다"는 식의 압박이 있었다면, 실질적으로 해고와 다름없어 비자발적 이직으로 봅니다.</li>\n<li><strong>근로조건 악화로 인한 사직 유도</strong> — 부서 전환, 업무 배제, 임금 삭감 등으로 근로조건을 의도적으로 악화시켜 사직을 유도한 경우도 포함됩니다.</li>\n<li><strong>퇴직 권고 반복</strong> — 상사나 인사부서가 반복적으로 퇴직을 권유한 경우, 근로자의 자유로운 의사 결정이 제한된 것으로 볼 수 있습니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 사직서를 썼어도 사업주의 강요가 입증되면 비자발적 이직으로 인정받아 실업급여를 받을 수 있습니다.</blockquote>',
      },
      {
        title: '강요 사직 입증을 위한 증거 확보 방법',
        content:
          '<p><strong style="color:#1e3a5f">사직서 제출 전후의 정황 증거를 최대한 확보하세요. 퇴사 후에는 수집이 어렵습니다.</strong></p>\n<ul>\n<li><strong>대화 녹음</strong> — 사직을 강요하는 상사와의 대화를 녹음하세요. 본인이 참여한 대화 녹음은 증거로 인정됩니다.</li>\n<li><strong>문자·이메일·카톡 캡처</strong> — "사직서를 내라", "더 이상 여기서 일할 수 없다" 등의 메시지를 캡처합니다.</li>\n<li><strong>동료 진술서</strong> — 강요 상황을 목격하거나 알고 있는 동료에게 진술서를 받아두세요.</li>\n<li><strong>인사 관련 문서</strong> — 사직서 제출 직전의 부당한 인사발령, 업무 배제 통보 등의 문서를 확보합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>사업주 강요 사직, 실업급여 수급 가능성을 AI가 즉시 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">퇴사 경위와 보유 증거를 입력하면 비자발적 이직 인정 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '이직확인서 사유가 "자발적 퇴사"로 잘못 기재된 경우',
        content:
          '<p><strong style="color:#1e3a5f">이직확인서 사유가 잘못 기재되어도 고용센터에 이의신청으로 정정할 수 있습니다.</strong></p>\n<p>사업주가 이직확인서에 "자발적 퇴사"로 기재하더라도, 고용센터에서 사실관계를 조사한 후 이직 사유를 변경할 수 있습니다. 고용보험법 제44조에 따라 고용센터는 이직확인서의 내용이 사실과 다르면 직권으로 정정할 권한이 있습니다.</p>\n<ol>\n<li><strong>이의신청서 제출</strong> — 관할 고용센터에 이직확인서 이의신청서를 작성하여 제출합니다. 강요 경위를 상세히 기술하세요.</li>\n<li><strong>증거자료 첨부</strong> — 녹음파일, 문자 캡처, 동료 진술서 등 증거를 함께 제출합니다.</li>\n<li><strong>사업주 조사</strong> — 고용센터에서 사업주에게 사실관계를 확인합니다. 사업주가 허위 기재한 것으로 확인되면 과태료가 부과될 수 있습니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 이직확인서 발급일로부터 3개월 이내에 이의신청하세요. 증거가 충분하면 고용센터가 직권으로 사유를 변경합니다.</blockquote>',
      },
      {
        title: '강요 사직 근로자가 놓치기 쉬운 실수 3가지',
        content:
          '<p><strong style="color:#1e3a5f">사직서 제출 전 증거 확보가 가장 중요합니다.</strong></p>\n<ul>\n<li><strong>사직서에 "일신상의 사유"라고 기재</strong> — 강요 상황을 기재하지 않고 "개인 사정"으로 쓰면 자발적 퇴사의 증거가 됩니다. 사직서에 "사업주 권유에 따라" 또는 "근로조건 악화로 인해"라고 명시하세요.</li>\n<li><strong>합의서 무조건 서명</strong> — 퇴직 합의서에 "자발적 퇴사에 동의한다"는 조항이 있으면 추후 이의신청이 어려워집니다. 서명 전 내용을 반드시 확인하세요.</li>\n<li><strong>퇴사 후 바로 신청하지 않음</strong> — 퇴직일 다음 날부터 12개월 이내에 실업급여를 신청해야 합니다. 기한을 놓치면 수급권이 소멸됩니다.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 근로조건 저하에 따른 퇴사와 수급자격 인정',
        summary:
          '서울행법 2014구합2270 사건(서울행정법원, 2014.07.03 선고)에서 법원은 사업주의 부서이동 지시로 임금이 46% 이상 하락할 것이 예상되어 퇴사한 근로자에게 고용보험법 시행규칙 별표2에 따라 정당한 이직 사유에 해당한다며 실업급여 수급자격을 인정했습니다.',
        takeaway:
          '사업주가 사직을 직접 강요하지 않더라도, 근로조건을 의도적으로 악화시켜 퇴사를 유도한 경우에도 비자발적 이직으로 인정됩니다. 임금 삭감, 부당한 인사이동 등의 증거를 확보하세요.',
      },
    ],
    faq: [
      {
        question: '사직서에 "자발적 퇴사"라고 이미 썼는데 번복할 수 있나요?',
        answer:
          '<p>네, 사직서 내용과 관계없이 고용센터에서 실질적인 퇴사 경위를 조사합니다. 강요 증거(녹음, 문자 등)가 있으면 비자발적 이직으로 인정받을 수 있습니다.</p>',
      },
      {
        question: '구두로만 사직을 강요당했는데 증거가 없으면 어떡하나요?',
        answer:
          '<p>동료 진술서, 사직 전후의 부당한 인사조치 기록, 업무 배제 사실 등 정황 증거를 수집하세요. 직접적 증거가 없어도 정황을 종합하여 판단합니다.</p>',
      },
      {
        question: '사직서를 강요당한 후 부당해고 구제신청도 할 수 있나요?',
        answer:
          '<p>네, 강요에 의한 사직은 실질적 해고로 볼 수 있어 퇴직일로부터 3개월 이내에 노동위원회에 부당해고 구제신청이 가능합니다. 실업급여 신청과 병행할 수 있습니다.</p>',
      },
      {
        question: '사업주가 "권고사직으로 처리해주겠다"고 했는데 이직확인서에는 자발적 퇴사라고 기재되었어요.',
        answer:
          '<p>사업주의 구두 약속을 녹음하거나 문자로 확인한 기록이 있다면, 이를 증거로 고용센터에 이의신청하세요. 사업주의 허위 기재가 확인되면 과태료가 부과될 수 있습니다.</p>',
      },
      {
        question: '사직서를 쓰고 한 달 뒤에 실제 퇴사했는데, 그 기간도 문제가 되나요?',
        answer:
          '<p>사직서 제출 후 일정 기간 근무한 것은 인수인계 등 합리적 사유가 있으면 문제되지 않습니다. 다만 사직서 제출 후 수개월간 정상 근무했다면 강요 주장이 약해질 수 있습니다.</p>',
      },
    ],
    cta: { text: '강요 사직 실업급여 자격 AI로 즉시 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건 총정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '자발적 퇴사 실업급여', href: '/guide/unemployment/unemployment-voluntary-quit-benefits' },
      { label: '권고사직 실업급여', href: '/guide/unemployment/recommended-resignation-unemployment-benefit' },
      { label: '실업급여 거부 시 불복 방법', href: '/guide/unemployment/unemployment-appeal-rejection' },
      { label: '고용보험 미가입 대응', href: '/guide/unemployment/unemployment-employer-no-insurance' },
    ],
  },

  // ── 2. 번아웃 우울증 퇴사 실업급여 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-burnout-mental-health-quit',
    keyword: '번아웃 우울증 퇴사 실업급여',
    questionKeyword: '번아웃이나 우울증으로 퇴사해도 실업급여 받을 수 있나요?',
    ctaKeyword: '정신건강 퇴사 실업급여 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '번아웃 우울증 퇴사 실업급여 조건 4가지 | 로앤가이드',
      description:
        '직장 번아웃이나 우울증으로 퇴사를 고민 중이라면, 건강 사유 정당한 이직 인정 요건과 진단서 확보법을 지금 확인하세요.',
    },
    intro:
      '<p>매일 야근에 시달리다 어느 날부터 출근이 두려워졌습니다. 병원에서 우울증 진단을 받았지만, 회사에 말하면 불이익이 올까 참고 버텼습니다. 더 이상 버틸 수 없어 퇴사를 결심했는데, 건강 문제로 그만두면 자진퇴사라 실업급여를 못 받는다는 걱정이 앞섭니다. 고용보험법 시행규칙 별표2에 따르면 질병·부상으로 업무 수행이 곤란한 경우 정당한 이직 사유에 해당하며, 정신건강 사유도 포함됩니다.</p>',
    sections: [
      {
        title: '정신건강 사유가 정당한 이직으로 인정되는 조건',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 시행규칙 별표2 제1호 (나)목에 따라 본인의 질병·부상으로 업무를 수행하기 어려운 경우는 정당한 이직 사유입니다.</strong></p>\n<p>우울증, 번아웃 증후군, 불안장애, 공황장애 등 정신건강 질환도 신체 질병과 동일하게 정당한 이직 사유로 인정됩니다. 다만 의료기관의 진단이 필수적이며, 업무와 질병의 연관성을 소명해야 합니다.</p>\n<ol>\n<li><strong>의사 진단서 필수</strong> — 정신건강의학과에서 발급받은 진단서가 있어야 합니다. "업무 수행이 곤란하다"는 의사 소견이 핵심입니다.</li>\n<li><strong>치료 기간 중 업무 어려움</strong> — 치료를 받았으나 업무 수행이 여전히 곤란하다는 점을 보여야 합니다. 통원 기록, 처방전 등이 증거가 됩니다.</li>\n<li><strong>사업주에게 배치전환 요청</strong> — 퇴사 전 사업주에게 업무 경감이나 부서이동을 요청했으나 거부당한 기록이 있으면 유리합니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 우울증·번아웃도 의사 진단서가 있으면 정당한 이직 사유로 실업급여 수급이 가능합니다.</blockquote>',
      },
      {
        title: '퇴사 전 반드시 준비할 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">퇴사 전에 의료기록과 근무환경 증거를 확보해야 고용센터에서 인정받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>☑ 정신건강의학과 진단서</strong> — "우울증(또는 적응장애 등)으로 인해 업무 수행이 곤란하다"는 소견이 포함된 진단서를 발급받으세요.</li>\n<li><strong>☑ 통원 치료 기록</strong> — 최소 2~3개월간 정기적으로 치료받은 기록이 있으면 질병의 지속성을 입증할 수 있습니다.</li>\n<li><strong>☑ 근무 환경 기록</strong> — 야근 시간, 업무량, 직장 내 갈등 등 정신건강 악화 원인을 보여주는 자료를 정리하세요.</li>\n<li><strong>☑ 업무 경감 요청 기록</strong> — 사업주에게 부서이동이나 업무 경감을 요청한 이메일, 문자 등을 보관하세요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>번아웃·우울증 퇴사 후 실업급여 수급 가능성, AI가 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">진단 내용과 근무 상황을 입력하면 정당한 이직 인정 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '산업재해 인정과 병행 가능 여부',
        content:
          '<p><strong style="color:#1e3a5f">업무상 스트레스로 인한 정신질환은 산업재해로도 인정받을 수 있습니다.</strong></p>\n<p>근로복지공단에 업무상 질병 인정을 신청하면, 실업급여와 별도로 산재보험 급여(요양급여, 휴업급여 등)를 받을 수 있습니다. 다만 산재 인정 절차는 별도이며, 실업급여와 동시에 받을 수는 없습니다.</p>\n<ul>\n<li><strong>산재 신청 가능 사유</strong> — 과도한 업무량, 직장 내 괴롭힘, 장시간 근로 등이 원인인 정신질환은 산재 대상입니다.</li>\n<li><strong>실업급여와의 관계</strong> — 산재 치료 중에는 실업급여를 받을 수 없지만, 치료 종료 후 구직활동이 가능해지면 실업급여를 신청할 수 있습니다.</li>\n<li><strong>전략적 선택</strong> — 산재 인정이 되면 치료비와 휴업급여를 받으므로, 먼저 산재 신청을 검토한 뒤 실업급여를 결정하는 것이 유리할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 업무가 원인인 정신질환이라면 산재와 실업급여 중 유리한 경로를 먼저 검토하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 징계해고 후 부당해고 구제와 구직급여 회수 사안',
        summary:
          '대구지법 2014구합1590 사건(대구지방법원, 2014.12.24 선고)에서 법원은 징계해고 후 부당해고 구제신청을 통해 원직복직이 이루어진 경우, 해고 시점으로 소급하여 고용관계가 계속된 것으로 보아 기지급 구직급여를 회수할 수 있다고 판시했습니다.',
        takeaway:
          '건강 사유로 퇴사한 후 실업급여를 받는 동안 원직복직 등으로 고용관계가 소급 회복되면 구직급여를 반환해야 합니다. 퇴사 결정 시 복직 가능성도 함께 고려하세요.',
      },
    ],
    faq: [
      {
        question: '번아웃은 정식 질병인가요? 진단서를 받을 수 있나요?',
        answer:
          '<p>번아웃 증후군은 WHO에서 직업 관련 현상으로 분류하고 있습니다. 정신건강의학과에서 "적응장애" 또는 "직업 관련 스트레스 반응" 등으로 진단서를 발급받을 수 있습니다.</p>',
      },
      {
        question: '회사에 우울증 사실을 알리지 않고 퇴사해도 실업급여를 받을 수 있나요?',
        answer:
          '<p>회사에 알릴 의무는 없지만, 사업주에게 업무 경감이나 배치전환을 요청한 기록이 있으면 정당한 이직 인정에 유리합니다. 최소한 이메일로 건강 문제를 언급해두세요.</p>',
      },
      {
        question: '진단서 날짜가 퇴사 후인데 괜찮나요?',
        answer:
          '<p>퇴사 전 진단서가 더 유리하지만, 퇴사 후 진단서도 증거로 사용할 수 있습니다. 다만 재직 중 치료받은 통원 기록이 함께 있으면 입증력이 높아집니다.</p>',
      },
      {
        question: '우울증으로 구직활동이 어려운데 실업인정을 받을 수 있나요?',
        answer:
          '<p>질병으로 구직활동이 곤란하면 상병급여(고용보험법 제63조)를 신청할 수 있습니다. 의사 소견서를 제출하면 구직활동 없이도 급여를 받을 수 있습니다.</p>',
      },
      {
        question: '퇴사 전 휴직을 먼저 하는 게 유리한가요?',
        answer:
          '<p>병가나 휴직을 먼저 사용하면 치료에 전념할 수 있고, 치료 후에도 복귀가 어려워 퇴사하면 정당한 이직 입증이 더 쉬워집니다. 가능하다면 휴직을 먼저 검토하세요.</p>',
      },
    ],
    cta: { text: '번아웃·우울증 퇴사 실업급여 자격 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건 총정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '자발적 퇴사 실업급여', href: '/guide/unemployment/unemployment-voluntary-quit-benefits' },
      { label: '실업급여 거부 시 불복 방법', href: '/guide/unemployment/unemployment-appeal-rejection' },
      { label: '직업훈련 수당 안내', href: '/guide/unemployment/unemployment-training-allowance' },
      { label: '권고사직 실업급여', href: '/guide/unemployment/recommended-resignation-unemployment-benefit' },
    ],
  },

  // ── 3. 파견근로 계약종료 실업급여 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-dispatch-contract-end',
    keyword: '파견근로 계약종료 실업급여',
    questionKeyword: '파견근로 계약이 끝났는데 실업급여 받을 수 있나요?',
    ctaKeyword: '파견 계약종료 실업급여 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '파견근로 계약종료 실업급여 신청 절차 3단계 | 로앤가이드',
      description:
        '파견근로 계약이 종료되어 실업급여를 받으려면 파견사업주와 사용사업주 관계를 정확히 알아야 합니다. 수급 조건을 지금 확인하세요.',
    },
    intro:
      '<p>1년간 파견직으로 근무한 공장에서 계약 만료를 통보받았습니다. 파견회사에서는 다른 사업장 배치를 약속했지만, 한 달이 지나도 새 배치가 나오지 않습니다. 파견 계약이 끝난 건데 실업급여를 받을 수 있는지, 파견회사와 공장 중 어디에서 이직확인서를 받아야 하는지 혼란스럽습니다. 파견근로자의 고용보험 가입 사업주는 파견사업주이며, 파견계약 종료는 비자발적 이직 사유에 해당합니다.</p>',
    sections: [
      {
        title: '파견근로자의 실업급여 수급 구조 이해',
        content:
          '<p><strong style="color:#1e3a5f">파견근로자의 고용보험 가입 주체는 파견사업주(파견회사)이며, 이직확인서도 파견사업주가 발급합니다.</strong></p>\n<p>파견근로자보호법에 따라 파견근로자는 파견사업주와 근로계약을 맺고 사용사업주의 사업장에서 근무합니다. 고용보험 가입과 실업급여 관련 의무는 파견사업주에게 있습니다.</p>\n<ol>\n<li><strong>파견계약 종료 = 비자발적 이직</strong> — 사용사업주와의 파견계약이 종료되어 배치 해지된 경우, 근로자의 귀책사유가 아니므로 비자발적 이직에 해당합니다.</li>\n<li><strong>파견사업주 미배치</strong> — 파견계약 종료 후 파견사업주가 새 사업장을 배치하지 않으면, 이것도 실질적 이직 사유가 됩니다.</li>\n<li><strong>피보험기간 산정</strong> — 여러 사용사업주에서 근무했더라도 파견사업주가 동일하면 피보험기간은 연속으로 합산됩니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 파견계약 종료로 일을 잃었다면 실업급여 수급이 가능합니다. 파견회사에 이직확인서를 요청하세요.</blockquote>',
      },
      {
        title: '파견근로자 실업급여 신청 3단계',
        content:
          '<p><strong style="color:#1e3a5f">파견사업주에게 이직확인서를 요청하고, 고용센터에 실업급여를 신청하세요.</strong></p>\n<ol>\n<li><strong>1단계: 이직확인서 요청</strong> — 파견사업주(파견회사)에게 이직확인서 발급을 요청합니다. 파견회사가 거부하면 고용센터에 직접 요청하세요. 고용보험법 제42조에 따라 사업주는 10일 이내에 이직확인서를 발급해야 합니다.</li>\n<li><strong>2단계: 워크넷 구직등록</strong> — 워크넷(www.work.go.kr)에 구직등록을 합니다. 실업급여 신청 전 구직등록이 선행되어야 합니다.</li>\n<li><strong>3단계: 고용센터 방문 신청</strong> — 관할 고용센터에 방문하여 수급자격 인정 신청서를 제출합니다. 이직확인서, 신분증, 통장 사본을 지참하세요.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>파견근로 계약종료 실업급여 수급 자격, AI가 즉시 확인합니다</strong></p>\n<p style="margin:0;font-size:0.95em">파견 근무기간과 계약 형태를 입력하면 수급 가능성을 무료로 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '파견근로자가 주의할 이직 유형별 차이',
        content:
          '<p><strong style="color:#1e3a5f">같은 파견근로자라도 이직 사유에 따라 실업급여 수급 가능 여부가 달라집니다.</strong></p>\n<ul>\n<li><strong>파견계약 만료</strong> — 사용사업주와의 파견계약이 종료된 경우, 비자발적 이직으로 실업급여 수급이 가능합니다.</li>\n<li><strong>파견사업주 폐업</strong> — 파견회사가 폐업하면 사업장 폐쇄에 해당하여 당연히 비자발적 이직입니다.</li>\n<li><strong>본인 의사로 파견 거부</strong> — 파견사업주가 새 사업장을 배치했는데 근로자가 거부한 경우, 자발적 이직으로 볼 수 있어 주의가 필요합니다.</li>\n<li><strong>사용사업주의 파견 해지 요청</strong> — 사용사업주가 근로자를 돌려보낸 경우에도, 파견사업주가 새 배치를 하지 않으면 비자발적 이직입니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 파견사업주가 새 사업장을 배치하지 않는 것이 핵심 이직 사유입니다. 배치 대기 기간도 기록해두세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 해외 법인 전출 근무 후 퇴직 시 고용보험 수급자격',
        summary:
          '울산지법 2013구합2840 사건(울산지방법원, 2014.04.24 선고)에서 법원은 국내 기업에서 해외 현지법인으로 전출되어 근무하다 퇴직한 근로자에 대해, 국내 고용관계가 전출 시점에 종료되었으므로 전출일로부터 12개월 이내에 실업급여를 신청해야 한다고 판시했습니다.',
        takeaway:
          '파견근로자도 고용관계의 종료 시점을 정확히 확인해야 합니다. 파견사업주와의 근로계약 종료일이 기준이며, 사용사업주에서의 근무 종료일과 다를 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '파견회사가 이직확인서를 안 줘요. 어떻게 하나요?',
        answer:
          '<p>고용보험법 제42조에 따라 사업주는 이직확인서를 발급할 의무가 있습니다. 거부 시 고용센터에 직접 확인 요청을 하면 고용센터가 사업주에게 발급을 지시합니다.</p>',
      },
      {
        question: '파견회사를 옮겨가며 일했는데 피보험기간이 합산되나요?',
        answer:
          '<p>파견사업주가 다르면 각각 별개의 피보험기간입니다. 다만 이직일 이전 18개월 이내의 피보험기간은 합산하여 180일을 충족하면 수급자격이 생깁니다.</p>',
      },
      {
        question: '파견 근무 중에 사용사업주에서 직접고용 제안을 거절했는데 불이익이 있나요?',
        answer:
          '<p>직접고용 전환 제안을 거절한 것 자체가 실업급여 수급 결격사유는 아닙니다. 파견계약 종료 후 파견사업주가 새 배치를 하지 않으면 비자발적 이직입니다.</p>',
      },
      {
        question: '파견계약 종료 후 대기 기간에 급여를 안 받았는데 이 기간은 어떻게 되나요?',
        answer:
          '<p>파견사업주와 근로계약이 유지된 상태라면 피보험기간에 포함됩니다. 근로계약이 종료된 상태에서 대기 중이라면 이미 이직한 것이므로 즉시 실업급여를 신청하세요.</p>',
      },
    ],
    cta: { text: '파견근로 계약종료 실업급여 자격 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건 총정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '계약만료 실업급여', href: '/guide/unemployment/contract-expiry-unemployment-benefit' },
      { label: '일용근로자 실업급여', href: '/guide/unemployment/unemployment-daily-worker-qualification' },
      { label: '고용보험 미가입 대응', href: '/guide/unemployment/unemployment-employer-no-insurance' },
      { label: '실업급여 거부 시 불복 방법', href: '/guide/unemployment/unemployment-appeal-rejection' },
    ],
  },

  // ── 4. 사업양도양수 퇴사 실업급여 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-business-transfer-quit',
    keyword: '사업양도양수 퇴사 실업급여',
    questionKeyword: '사업 양도양수로 근로조건이 바뀌어 퇴사하면 실업급여를 받을 수 있나요?',
    ctaKeyword: '사업양도양수 퇴사 실업급여 상담',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '사업양도양수 퇴사 실업급여 사유별 비교 | 로앤가이드',
      description:
        '사업 양도양수로 고용 승계가 거부되거나 근로조건이 변경되었다면, 퇴사 사유별 실업급여 인정 기준을 지금 확인하세요.',
    },
    intro:
      '<p>10년 다니던 회사가 갑자기 다른 기업에 매각되었습니다. 새 사업주는 기존 직원 일부만 승계하겠다고 했고, 승계되더라도 임금과 직급이 달라질 수 있다고 합니다. 승계가 거부되면 해고인 건지, 직접 그만두면 자진퇴사인 건지 헷갈립니다. 사업 양도양수 시 고용 승계 여부와 근로조건 변경에 따라 실업급여 수급 가능 여부가 달라집니다.</p>',
    sections: [
      {
        title: '사업 양도양수 시 퇴사 유형별 실업급여 비교',
        content:
          '<p><strong style="color:#1e3a5f">사업 양도양수 상황에서의 퇴사는 크게 3가지 유형으로 나뉘며, 각각 실업급여 수급 가능 여부가 다릅니다.</strong></p>\n<table style="width:100%;border-collapse:collapse;margin:12px 0">\n<tr style="background:#f0f4f8"><th style="padding:8px;border:1px solid #ddd;text-align:left">퇴사 유형</th><th style="padding:8px;border:1px solid #ddd;text-align:left">실업급여</th><th style="padding:8px;border:1px solid #ddd;text-align:left">핵심 포인트</th></tr>\n<tr><td style="padding:8px;border:1px solid #ddd">승계 거부(사업주측)</td><td style="padding:8px;border:1px solid #ddd">수급 가능</td><td style="padding:8px;border:1px solid #ddd">사업주가 승계를 거부한 것이므로 해고와 동일</td></tr>\n<tr><td style="padding:8px;border:1px solid #ddd">근로조건 변경으로 퇴사</td><td style="padding:8px;border:1px solid #ddd">수급 가능</td><td style="padding:8px;border:1px solid #ddd">임금·직급 등 중요 근로조건이 불이익하게 변경된 경우</td></tr>\n<tr><td style="padding:8px;border:1px solid #ddd">단순 거부(근로자측)</td><td style="padding:8px;border:1px solid #ddd">수급 어려움</td><td style="padding:8px;border:1px solid #ddd">동일 조건 승계인데 근로자가 거부하면 자발적 퇴사</td></tr>\n</table>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 사업주가 승계를 거부하거나 근로조건을 불이익하게 변경하면 비자발적 이직으로 실업급여 수급이 가능합니다.</blockquote>',
      },
      {
        title: '양도양수 시 고용 승계와 퇴직금 정산',
        content:
          '<p><strong style="color:#1e3a5f">사업 양도양수 시 고용관계가 포괄적으로 승계되면 퇴직금 정산 없이 근속년수가 이어집니다.</strong></p>\n<p>대법원 판례에 따르면 사업의 동일성이 유지되는 영업양도의 경우 근로관계가 포괄적으로 승계됩니다. 이 경우 양수인(새 사업주)이 근로자의 승계를 거부하면 이는 부당해고에 해당할 수 있습니다.</p>\n<ul>\n<li><strong>포괄 승계인 경우</strong> — 근로조건 변경 없이 승계되면 고용관계가 유지됩니다. 이때 퇴직은 자발적 이직이 될 수 있습니다.</li>\n<li><strong>일부 승계(선별 승계)</strong> — 양수인이 일부 직원만 선별 승계하면 미승계 근로자는 양도인의 정리해고와 유사하게 처리됩니다.</li>\n<li><strong>퇴직금 중간정산</strong> — 사업 양도양수를 사유로 퇴직금을 중간정산할 수 있습니다. 승계 후 퇴직 시 양수인 재직 기간에 대해 별도 퇴직금을 받습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>사업양도양수 퇴사 실업급여 수급 가능성, AI가 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">양도양수 상황과 퇴사 경위를 입력하면 수급 자격을 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '양도양수 시 실업급여 신청 전 확인할 서류',
        content:
          '<p><strong style="color:#1e3a5f">사업 양도양수 관련 증빙서류를 미리 확보해야 고용센터에서 이직 사유를 인정받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>사업 양도양수 계약서(또는 공고문)</strong> — 양도양수 사실을 확인할 수 있는 서류입니다. 회사 내부 공지문도 유효합니다.</li>\n<li><strong>승계 거부 또는 근로조건 변경 통보서</strong> — 새 사업주가 승계를 거부하거나 근로조건 변경을 통보한 서류를 확보하세요.</li>\n<li><strong>기존 근로계약서</strong> — 양도양수 전 근로조건을 증명할 수 있는 서류입니다. 변경 전후를 비교하는 데 필요합니다.</li>\n<li><strong>이직확인서</strong> — 양도인(기존 사업주) 또는 양수인(새 사업주) 중 최종 고용관계가 있는 사업주에게 요청합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 승계 거부 통보서나 근로조건 변경 통보서가 가장 중요한 증거입니다. 구두 통보만 받았다면 문자나 이메일로 확인을 요청하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사업주의 보험관계 인식과 보험료 납부 의무',
        summary:
          '대법원 2011두6745 사건(대법원, 2014.02.13 선고)에서 법원은 사업주가 보험관계 성립을 인식하지 못했더라도 고용보험료 신고·납부 의무가 면제되지 않으며, 보험자도 보험관계 성립에 대한 착오로 보험료를 징수하지 않았다고 하여 보험급여 지급을 거절할 수 없다고 판시했습니다.',
        takeaway:
          '사업 양도양수 시 새 사업주가 고용보험 가입을 누락해도 근로자의 실업급여 수급권은 보호됩니다. 보험관계는 사업 개시와 동시에 당연히 성립하므로, 미가입이 확인되면 고용센터에 신고하세요.',
      },
    ],
    faq: [
      {
        question: '사업 양도양수인지 폐업인지 구분이 안 돼요. 어떻게 확인하나요?',
        answer:
          '<p>사업자등록이 폐업 처리되고 새 사업자가 동일 장소에서 사업을 시작했다면 양도양수보다 폐업에 가깝습니다. 사업자등록증 변경 여부를 확인하세요. 폐업이면 별도 증빙 없이 비자발적 이직으로 인정됩니다.</p>',
      },
      {
        question: '양수인이 6개월 수습 기간을 두겠다고 하는데 이건 근로조건 변경인가요?',
        answer:
          '<p>기존에 정규직이었는데 양수인이 수습 조건을 붙이면 근로조건의 불이익 변경에 해당할 수 있습니다. 수습 기간 중 임금 감액이 있다면 더욱 그러합니다.</p>',
      },
      {
        question: '양도양수 과정에서 퇴직금을 먼저 받았는데 실업급여와 관계가 있나요?',
        answer:
          '<p>퇴직금 수령과 실업급여는 별개의 제도입니다. 퇴직금을 받았다고 해서 실업급여가 제한되지 않습니다. 다만 퇴직금을 받으면서 "원만한 퇴사"에 합의하지 않았는지 확인하세요.</p>',
      },
      {
        question: '승계를 거부당한 후 양도인에게도 양수인에게도 이직확인서를 못 받으면 어떻게 하나요?',
        answer:
          '<p>고용센터에 직접 방문하여 이직확인서 발급 요청을 하세요. 고용센터가 양도인과 양수인 모두에게 발급을 명령할 수 있으며, 거부 시 과태료가 부과됩니다.</p>',
      },
      {
        question: '양도양수 후 근무지가 변경되면 통근 곤란으로 퇴사할 수 있나요?',
        answer:
          '<p>네, 양도양수 후 사업장 위치가 변경되어 왕복 3시간 이상 통근이 필요하면 통근 곤란 사유로 정당한 이직이 인정됩니다.</p>',
      },
    ],
    cta: { text: '사업양도양수 퇴사 실업급여 자격 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건 총정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '사업장 폐쇄 실업급여', href: '/guide/unemployment/unemployment-workplace-closure' },
      { label: '권고사직 실업급여', href: '/guide/unemployment/recommended-resignation-unemployment-benefit' },
      { label: '실업급여 거부 시 불복 방법', href: '/guide/unemployment/unemployment-appeal-rejection' },
      { label: '고용보험 미가입 대응', href: '/guide/unemployment/unemployment-employer-no-insurance' },
    ],
  },

  // ── 5. 복수사업장 피보험기간 합산 실업급여 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-multiple-workplace-combined',
    keyword: '복수사업장 피보험기간 합산 실업급여',
    questionKeyword: '여러 곳에서 단시간 일했는데 피보험기간을 합산해서 실업급여 받을 수 있나요?',
    ctaKeyword: '복수사업장 피보험기간 합산 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '복수사업장 피보험기간 합산 실업급여 조건 | 로앤가이드',
      description:
        '여러 사업장에서 단시간 근무했다면 피보험기간 합산으로 실업급여 180일 요건을 충족할 수 있는지 지금 확인하세요.',
    },
    intro:
      '<p>오전에는 카페에서, 오후에는 학원에서 파트타임으로 일했습니다. 두 곳 모두 고용보험에 가입되어 있었는데, 카페가 폐업하면서 한 곳에서의 근무가 끝났습니다. 한 곳에서만 4개월 일해서 180일이 안 되는데, 두 곳의 피보험기간을 합산하면 180일을 넘깁니다. 고용보험법 제41조에 따르면 복수 사업장의 피보험기간은 합산이 가능하며, 합산하여 180일 이상이면 실업급여 수급자격이 인정됩니다.</p>',
    sections: [
      {
        title: '복수 사업장 피보험기간 합산 원리',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 제41조에 따라 이직일 이전 18개월 이내의 피보험기간은 사업장이 달라도 합산됩니다.</strong></p>\n<p>실업급여 수급을 위한 피보험기간 180일은 하나의 사업장에서만 채울 필요가 없습니다. 여러 사업장에서의 근무 기간을 합산하여 계산합니다. 다만 중복 기간(같은 날 두 곳에서 근무)은 중복 산정하지 않고 하루로 계산합니다.</p>\n<ol>\n<li><strong>합산 기준 기간</strong> — 마지막 이직일 이전 18개월 이내의 피보험 단위기간을 합산합니다. 18개월보다 더 오래된 기간은 제외됩니다.</li>\n<li><strong>중복 기간 처리</strong> — 같은 날 2개 사업장에서 근무해도 피보험기간은 1일로 계산됩니다. 단, 각 사업장의 보수는 각각 신고됩니다.</li>\n<li><strong>이직한 사업장 기준</strong> — 실업급여는 마지막으로 이직한 사업장을 기준으로 신청합니다. 다른 사업장에서 계속 근무 중이면 해당 사업장은 이직에 해당하지 않습니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 여러 사업장의 피보험기간을 합산하면 180일을 충족할 수 있습니다. 고용보험 가입 이력을 확인하세요.</blockquote>',
      },
      {
        title: '피보험기간 확인 방법과 합산 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용보험 피보험기간은 워크넷 또는 고용센터에서 확인할 수 있습니다.</strong></p>\n<ul>\n<li><strong>워크넷 확인</strong> — 워크넷(www.work.go.kr)에 로그인하면 "피보험기간 조회"에서 전체 가입 이력을 확인할 수 있습니다.</li>\n<li><strong>고용센터 방문 확인</strong> — 관할 고용센터에 방문하면 피보험기간 상세 내역을 출력받을 수 있습니다.</li>\n<li><strong>4대 사회보험포털</strong> — 4대보험 정보연계센터(www.4insure.or.kr)에서 고용보험 가입 이력을 확인할 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>복수 사업장 피보험기간 합산 가능 여부, AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">각 사업장의 근무기간을 입력하면 180일 충족 여부를 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '복수 사업장 근로자가 놓치기 쉬운 수치·기한 정리',
        content:
          '<p><strong style="color:#1e3a5f">피보험기간 합산 시 핵심 수치와 기한을 정리했습니다.</strong></p>\n<ul>\n<li><strong>180일</strong> — 실업급여 수급에 필요한 최소 피보험기간입니다. 여러 사업장을 합산하여 충족할 수 있습니다.</li>\n<li><strong>18개월</strong> — 기준기간입니다. 이직일 이전 18개월 이내의 피보험기간만 합산됩니다. 질병·부상 등으로 3년까지 연장될 수 있습니다.</li>\n<li><strong>12개월</strong> — 실업급여 수급기간입니다. 퇴직일 다음 날부터 12개월 이내에 신청해야 합니다.</li>\n<li><strong>주 15시간 미만</strong> — 초단시간 근로자(주 15시간 미만)는 고용보험 적용이 제외될 수 있으니 가입 여부를 확인하세요. 3개월 이상 계속 근무하면 적용됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 18개월 기준기간 안에서 180일을 합산으로 채우면 됩니다. 오래된 근무 기간은 합산되지 않으니 시기를 확인하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임기제 공무원 고용보험 가입신청 기간과 피보험기간 산정',
        summary:
          '광주고법 2018누1338 사건(광주고등법원 제주, 2018.10.24 선고)에서 법원은 소속기관의 장이 가입의사 확인의무를 해태한 경우, 가입대상 공무원이 그 사유를 안 날부터 3개월 이내에 고용보험 가입신청을 할 수 있으며 소급 가입이 인정된다고 판시했습니다.',
        takeaway:
          '복수 사업장 근무 시 일부 사업장에서 고용보험 가입이 누락되었더라도, 사업주의 귀책사유가 있으면 소급 가입이 가능합니다. 피보험기간이 부족하면 미가입 이력을 확인하세요.',
      },
    ],
    faq: [
      {
        question: '한 곳에서 계속 일하면서 다른 곳을 그만둔 경우에도 실업급여를 받을 수 있나요?',
        answer:
          '<p>네, 한 사업장에서 비자발적으로 이직하면서 다른 사업장에서 주 15시간 미만 근무 중이라면 실업급여 수급이 가능할 수 있습니다. 다만 근로시간에 따라 다르므로 고용센터에 확인하세요.</p>',
      },
      {
        question: '고용보험 가입 여부를 사업주가 알려주지 않았는데 확인할 방법이 있나요?',
        answer:
          '<p>4대 사회보험 정보연계센터(www.4insure.or.kr)에서 본인의 고용보험 가입 이력을 직접 조회할 수 있습니다. 급여명세서에서 고용보험료 공제 여부로도 확인 가능합니다.</p>',
      },
      {
        question: '두 사업장에서 동시에 이직하면 실업급여를 두 번 받을 수 있나요?',
        answer:
          '<p>아닙니다. 실업급여는 1건만 신청할 수 있으며, 두 사업장의 피보험기간을 합산하여 하나의 수급자격으로 처리됩니다. 이직 사유가 비자발적인 사업장을 기준으로 신청하세요.</p>',
      },
      {
        question: '3개월 전에 그만둔 사업장의 피보험기간도 합산되나요?',
        answer:
          '<p>네, 마지막 이직일 이전 18개월 이내의 피보험기간은 모두 합산됩니다. 3개월 전 퇴사한 사업장도 18개월 범위 안이면 합산 대상입니다.</p>',
      },
    ],
    cta: { text: '복수 사업장 피보험기간 합산 여부 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건 총정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '일용근로자 실업급여', href: '/guide/unemployment/unemployment-daily-worker-qualification' },
      { label: '계약만료 실업급여', href: '/guide/unemployment/contract-expiry-unemployment-benefit' },
      { label: '고용보험 미가입 대응', href: '/guide/unemployment/unemployment-employer-no-insurance' },
      { label: '실업급여 부정수급 대응', href: '/guide/unemployment/unemployment-fraud-penalty-response' },
    ],
  },

  // ── 6. 계절근로 단기반복 실업급여 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-seasonal-short-repeat',
    keyword: '계절근로 단기반복 실업급여',
    questionKeyword: '계절근로나 단기반복 일을 해도 실업급여를 받을 수 있나요?',
    ctaKeyword: '단기반복 근로 실업급여 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '계절근로 단기반복 실업급여 수급 특례 조건 | 로앤가이드',
      description:
        '계절근로나 단기반복 근로를 하고 있다면, 일용근로자·초단시간 근로자의 실업급여 수급 특례를 지금 확인하세요.',
    },
    intro:
      '<p>겨울마다 스키장에서 3개월씩 일하고, 여름에는 해수욕장에서 2개월씩 일합니다. 이렇게 계절마다 짧게 일하는데, 일이 끝나면 몇 달간 쉬어야 합니다. 쉬는 동안 실업급여를 받을 수 있는지, 짧은 근무기간으로도 자격이 되는지 궁금합니다. 고용보험법에 따르면 일용근로자와 초단시간 근로자에게도 실업급여 수급 특례가 있으며, 단기반복 근로도 피보험기간을 합산하여 수급자격을 충족할 수 있습니다.</p>',
    sections: [
      {
        title: '일용근로자·초단시간 근로자의 실업급여 수급 특례',
        content:
          '<p><strong style="color:#1e3a5f">일용근로자는 이직일 이전 18개월 중 피보험 단위기간 180일 이상이면 실업급여를 받을 수 있습니다.</strong></p>\n<p>일용근로자란 1개월 미만 동안 고용되는 근로자를 말합니다(고용보험법 제2조). 일용근로자의 실업급여 수급 요건은 일반 근로자와 다소 다릅니다.</p>\n<ol>\n<li><strong>피보험기간 180일</strong> — 이직일 이전 18개월 중 피보험 단위기간이 통산 180일 이상이어야 합니다. 여러 사업장의 근무일수를 합산합니다.</li>\n<li><strong>수급자격 신청일 이전 1개월간 근로일수 10일 미만</strong> — 최근 1개월간 일한 날이 10일 미만이어야 실업 상태로 인정됩니다.</li>\n<li><strong>최종 이직일 이전 기준기간 내 90일 이상 근로</strong> — 수급자격 신청일 이전 1개월간 일용근로 내역이 있어야 합니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 계절근로도 일용근로 피보험기간을 합산하면 180일을 채울 수 있습니다. 근로내역 신고가 핵심입니다.</blockquote>',
      },
      {
        title: '단기반복 근로자의 피보험기간 관리 방법',
        content:
          '<p><strong style="color:#1e3a5f">사업주가 일용근로자의 근로내역을 매월 고용보험에 신고해야 피보험기간이 인정됩니다.</strong></p>\n<ul>\n<li><strong>근로내역 확인</strong> — 사업주가 매월 근로내역을 신고하고 있는지 고용보험 피보험자격 확인서를 통해 확인하세요.</li>\n<li><strong>미신고 시 대응</strong> — 사업주가 근로내역을 신고하지 않으면 고용센터에 피보험자격 확인 청구를 하세요. 3년 이내의 근무기간은 소급하여 인정받을 수 있습니다.</li>\n<li><strong>급여명세서 보관</strong> — 급여명세서, 출퇴근 기록, 급여 입금 내역 등을 보관하면 미신고 기간의 근무 사실을 입증할 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>계절근로·단기반복 실업급여 수급 자격, AI가 즉시 확인합니다</strong></p>\n<p style="margin:0;font-size:0.95em">근무 이력과 기간을 입력하면 피보험기간 합산 결과와 수급 가능성을 무료로 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '계절근로자가 주의할 점 3가지',
        content:
          '<p><strong style="color:#1e3a5f">짧은 근무기간이 반복되는 만큼, 피보험기간 관리와 신청 시기가 특히 중요합니다.</strong></p>\n<ul>\n<li><strong>신청 시기 놓치지 않기</strong> — 마지막 근무 종료일부터 12개월 이내에 실업급여를 신청해야 합니다. 계절이 끝나고 방심하다가 기한을 놓치는 경우가 많습니다.</li>\n<li><strong>반복 수급 제한</strong> — 최근 3년간 3회 이상 실업급여를 받으면 소정급여일수의 50%가 감액됩니다. 계절근로자는 매년 반복 수급할 수 있으니 이 규정을 숙지하세요.</li>\n<li><strong>고용보험 미가입 사업장 주의</strong> — 소규모 계절 사업장은 고용보험에 가입하지 않는 경우가 있습니다. 근무 시작 시 고용보험 가입 여부를 반드시 확인하세요.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 계절근로자는 매번 근로내역 신고 여부를 확인하고, 3회 이상 반복 수급 시 감액 규정을 기억하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 고용보험 관련 행정처분의 피고적격 및 보험관계 성립',
        summary:
          '대법원 2012두22904 사건(대법원, 2013.02.28 선고)에서 법원은 고용보험의 보험관계는 법령에서 예외로 규정한 사업을 제외하고는 사업 개시로 당연히 성립한다고 판시하며, 보험료 부과·고지 권한의 위임·위탁에 따른 피고적격을 확인했습니다.',
        takeaway:
          '계절 사업장도 사업 개시와 동시에 고용보험관계가 당연히 성립합니다. 사업주가 가입하지 않았다고 해도 보험관계는 존재하므로, 미가입 사실을 고용센터에 신고하면 소급 가입이 가능합니다.',
      },
    ],
    faq: [
      {
        question: '매년 같은 사업장에서 3개월씩 일하는데 매번 실업급여를 받을 수 있나요?',
        answer:
          '<p>피보험기간 180일을 매번 충족하면 가능하지만, 3년간 3회 이상 수급 시 소정급여일수가 50% 감액됩니다. 4회째부터는 급여액이 상당히 줄어들 수 있습니다.</p>',
      },
      {
        question: '일용근로자인데 고용보험에 자동으로 가입되나요?',
        answer:
          '<p>사업주가 일용근로자를 고용하면 근로내역을 매월 고용보험에 신고해야 합니다. 자동 가입이 아니라 사업주의 신고가 필요하므로, 급여에서 고용보험료가 공제되는지 확인하세요.</p>',
      },
      {
        question: '계절근로 외에 프리랜서 일도 했는데 이것도 피보험기간에 포함되나요?',
        answer:
          '<p>프리랜서는 고용보험 적용 대상이 아닌 경우가 많습니다. 다만 특수형태근로종사자나 예술인에 해당하면 별도의 고용보험이 적용됩니다. 사업주와의 계약 형태를 확인하세요.</p>',
      },
      {
        question: '계절 사업이 끝나고 사업주가 폐업하면 이직확인서를 어떻게 받나요?',
        answer:
          '<p>사업주가 폐업한 경우에도 고용센터에 직접 이직확인서 발급을 요청할 수 있습니다. 고용센터가 건강보험공단 등의 자료를 통해 사실관계를 확인하고 발급합니다.</p>',
      },
      {
        question: '하루 4시간만 일하는 초단시간 근로자도 피보험기간에 포함되나요?',
        answer:
          '<p>주 소정근로시간이 15시간 미만이면 원칙적으로 고용보험 적용이 제외됩니다. 다만 3개월 이상 계속 근무하면 고용보험이 적용되어 피보험기간에 포함됩니다.</p>',
      },
    ],
    cta: { text: '계절근로 단기반복 실업급여 자격 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건 총정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '일용근로자 실업급여', href: '/guide/unemployment/unemployment-daily-worker-qualification' },
      { label: '고용보험 미가입 대응', href: '/guide/unemployment/unemployment-employer-no-insurance' },
      { label: '실업급여 부정수급 대응', href: '/guide/unemployment/unemployment-fraud-penalty-response' },
      { label: '계약만료 실업급여', href: '/guide/unemployment/contract-expiry-unemployment-benefit' },
    ],
  },

  // ── 7. 인턴 종료 실업급여 수급 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-internship-training-end',
    keyword: '인턴 종료 실업급여 수급',
    questionKeyword: '인턴이나 수습 종료 후 정규직 전환이 안 됐는데 실업급여를 받을 수 있나요?',
    ctaKeyword: '인턴 종료 실업급여 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '인턴 수습 종료 후 실업급여 받는 조건 4가지 | 로앤가이드',
      description:
        '인턴이나 수습 기간이 끝나고 정규직 전환이 안 됐다면, 실업급여 수급 요건과 피보험기간 포함 여부를 지금 확인하세요.',
    },
    intro:
      '<p>6개월 인턴 계약이 끝났는데, 정규직 전환 심사에서 탈락했습니다. 인턴 기간 동안 고용보험에 가입되어 있었는지도 모르겠고, 설령 가입되어 있더라도 인턴 신분으로 실업급여를 받을 수 있는지 확신이 없습니다. 인턴·수습 기간도 근로계약에 따라 고용보험이 적용되며, 계약 만료로 정규직 전환이 안 되면 비자발적 이직으로 실업급여 수급이 가능합니다.</p>',
    sections: [
      {
        title: '인턴·수습 기간의 고용보험 적용 여부 확인',
        content:
          '<p><strong style="color:#1e3a5f">인턴이라도 근로계약을 맺고 급여를 받으면 고용보험 적용 대상입니다.</strong></p>\n<p>인턴, 수습, 견습 등 명칭과 관계없이 사용종속관계에서 근로를 제공하고 임금을 받으면 근로기준법상 근로자에 해당합니다. 근로자에 해당하면 고용보험 가입 의무가 있습니다.</p>\n<ol>\n<li><strong>☑ 근로계약서 확인</strong> — 인턴 계약서에 "근로계약"이라고 명시되어 있으면 고용보험 적용 대상입니다. "위촉계약"이나 "자원봉사"로 되어 있으면 적용이 어려울 수 있습니다.</li>\n<li><strong>☑ 급여명세서 확인</strong> — 급여에서 고용보험료가 공제되었다면 가입된 것입니다. 고용보험료는 급여의 0.9%입니다.</li>\n<li><strong>☑ 4대보험 가입 확인</strong> — 4대 사회보험 정보연계센터에서 본인의 고용보험 가입 여부를 직접 조회할 수 있습니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 인턴이라는 명칭이 아니라 실질적 근로관계 여부가 기준입니다. 급여명세서에서 고용보험료 공제를 확인하세요.</blockquote>',
      },
      {
        title: '인턴 종료 후 실업급여 수급 조건 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지 조건을 모두 충족하면 인턴 종료 후에도 실업급여를 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>☑ 고용보험 가입</strong> — 인턴 기간 동안 고용보험에 가입되어 있어야 합니다.</li>\n<li><strong>☑ 피보험기간 180일 이상</strong> — 이직일 이전 18개월 중 피보험기간이 180일 이상이어야 합니다. 인턴 기간만으로 180일이 안 되면 이전 직장의 피보험기간과 합산합니다.</li>\n<li><strong>☑ 비자발적 이직</strong> — 인턴 계약 만료, 정규직 전환 거부, 수습 해지 등은 비자발적 이직에 해당합니다.</li>\n<li><strong>☑ 근로의 의사와 능력</strong> — 재취업 의사가 있고 근로 능력이 있어야 합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>인턴·수습 종료 실업급여 수급 가능 여부, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">인턴 근무기간과 계약 형태를 입력하면 수급 자격을 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '인턴이 실업급여를 못 받는 경우와 대처법',
        content:
          '<p><strong style="color:#1e3a5f">고용보험 미가입, 짧은 피보험기간 등의 문제가 있다면 아래 방법을 검토하세요.</strong></p>\n<ul>\n<li><strong>고용보험 미가입 시</strong> — 사업주가 고용보험에 가입하지 않았다면, 고용센터에 피보험자격 확인 청구를 하세요. 근로계약서, 급여 입금 내역 등으로 근무 사실을 입증하면 소급 가입이 가능합니다.</li>\n<li><strong>피보험기간 180일 미충족 시</strong> — 이전 직장의 피보험기간이 있다면 합산하세요. 이전 18개월 이내의 기간만 합산됩니다.</li>\n<li><strong>인턴이 아닌 "교육생"으로 처리된 경우</strong> — 실질적으로 업무를 수행하고 지시를 받았다면 교육생이라는 명칭과 관계없이 근로자로 인정될 수 있습니다. 업무 내용을 기록해두세요.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 인턴 기간의 고용보험 미가입이 가장 큰 장애물입니다. 미가입이 확인되면 소급 가입으로 해결할 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 고용유지지원금 부정수급과 고용보험법 적용 범위',
        summary:
          '대법원 2018도2429 사건(대법원, 2018.06.28 선고)에서 법원은 고용보험법 제116조 제2항은 실업급여, 육아휴직급여, 출산전후휴가급여 등에만 적용되며, 고용유지지원금에는 적용할 수 없다고 판시하여 고용보험법의 적용 범위를 명확히 했습니다.',
        takeaway:
          '실업급여는 고용보험법에서 명확하게 규정한 급여입니다. 인턴이라도 고용보험 피보험자 자격이 인정되면 법률에 따라 실업급여를 수급할 권리가 있습니다.',
      },
    ],
    faq: [
      {
        question: '3개월 인턴만 했는데 피보험기간 180일이 안 됩니다. 방법이 없나요?',
        answer:
          '<p>이전 18개월 이내에 다른 직장에서 일한 이력이 있다면 피보험기간을 합산할 수 있습니다. 없다면 아쉽지만 180일 미충족으로 실업급여 수급이 어렵습니다.</p>',
      },
      {
        question: '정규직 전환 심사에서 탈락하면 해고인가요, 계약만료인가요?',
        answer:
          '<p>인턴 계약서에 "정규직 전환 심사 후 결정"이라고 되어 있다면 계약 만료에 해당합니다. 별도의 정규직 근로계약 없이 인턴 계약이 종료된 것이므로 비자발적 이직으로 봅니다.</p>',
      },
      {
        question: '수습 기간 중에 해고당하면 실업급여를 받을 수 있나요?',
        answer:
          '<p>수습 기간 중 해고도 비자발적 이직입니다. 다만 수습 기간이 3개월 미만인 경우 해고 예고 의무가 면제될 수 있으나, 실업급여 수급 자격에는 영향이 없습니다.</p>',
      },
      {
        question: '정부 지원 인턴(청년인턴 등)도 고용보험이 적용되나요?',
        answer:
          '<p>대부분의 정부 지원 인턴사업(청년인턴, 중소기업 체험형 인턴 등)은 고용보험이 적용됩니다. 다만 프로그램에 따라 다를 수 있으니 계약 시 고용보험 가입 여부를 확인하세요.</p>',
      },
      {
        question: '인턴 종료 후 같은 회사에 다시 인턴으로 입사하면 실업급여를 못 받나요?',
        answer:
          '<p>인턴 종료 후 실업급여를 수급하다가 같은 회사에 재입사하면, 재취업 시점부터 실업급여가 중단됩니다. 재입사 전에 실업급여를 신청·수급하는 것은 문제없습니다.</p>',
      },
    ],
    cta: { text: '인턴 종료 실업급여 수급 자격 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건 총정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '계약만료 실업급여', href: '/guide/unemployment/contract-expiry-unemployment-benefit' },
      { label: '고용보험 미가입 대응', href: '/guide/unemployment/unemployment-employer-no-insurance' },
      { label: '직업훈련 수당 안내', href: '/guide/unemployment/unemployment-training-allowance' },
      { label: '실업급여 거부 시 불복 방법', href: '/guide/unemployment/unemployment-appeal-rejection' },
    ],
  },

  // ── 8. 징계해고 실업급여 수급 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-disciplinary-fired-benefit',
    keyword: '징계해고 실업급여 수급',
    questionKeyword: '징계해고를 당했는데 실업급여를 받을 수 있나요?',
    ctaKeyword: '징계해고 실업급여 상담',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '징계해고 실업급여 수급 가능 여부 판단 기준 | 로앤가이드',
      description:
        '징계해고를 당했다면 실업급여 수급 가능 여부는 귀책사유의 중대성에 달려 있습니다. 판단 기준을 지금 확인하세요.',
    },
    intro:
      '<p>회사에서 사규 위반을 이유로 징계해고 통보를 받았습니다. 해고 사유가 억울하기도 하지만, 당장 생활비가 걱정입니다. 징계해고면 본인 잘못이니까 실업급여를 못 받는다고 들었는데, 정말인지 궁금합니다. 고용보험법 제58조에 따르면 징계해고라도 "중대한 귀책사유"에 해당하지 않으면 실업급여 수급이 가능하며, 중대한 귀책사유의 범위는 법률로 한정되어 있습니다.</p>',
    sections: [
      {
        title: '징계해고와 실업급여의 관계: 중대한 귀책사유란',
        content:
          '<p><strong style="color:#1e3a5f">징계해고 = 실업급여 불가가 아닙니다. 고용보험법 시행규칙 별표2에 규정된 중대한 귀책사유에 해당하는 경우에만 수급이 제한됩니다.</strong></p>\n<p>많은 분이 징계해고면 무조건 실업급여를 못 받는다고 오해하지만, 실제로는 "중대한 귀책사유"에 해당하는 극히 제한된 경우에만 수급자격이 제한됩니다.</p>\n<table style="width:100%;border-collapse:collapse;margin:12px 0">\n<tr style="background:#f0f4f8"><th style="padding:8px;border:1px solid #ddd;text-align:left">해고 사유</th><th style="padding:8px;border:1px solid #ddd;text-align:left">실업급여</th></tr>\n<tr><td style="padding:8px;border:1px solid #ddd">횡령, 배임, 절도 등 형사범죄</td><td style="padding:8px;border:1px solid #ddd">수급 제한 가능</td></tr>\n<tr><td style="padding:8px;border:1px solid #ddd">정당한 사유 없는 장기 무단결근</td><td style="padding:8px;border:1px solid #ddd">수급 제한 가능</td></tr>\n<tr><td style="padding:8px;border:1px solid #ddd">사업에 막대한 지장을 초래한 경우</td><td style="padding:8px;border:1px solid #ddd">수급 제한 가능</td></tr>\n<tr><td style="padding:8px;border:1px solid #ddd">일반 사규 위반, 성과 미달</td><td style="padding:8px;border:1px solid #ddd">수급 가능</td></tr>\n<tr><td style="padding:8px;border:1px solid #ddd">경미한 과실, 단순 실수</td><td style="padding:8px;border:1px solid #ddd">수급 가능</td></tr>\n</table>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 징계해고라도 대부분의 경우 실업급여 수급이 가능합니다. 중대한 귀책사유에 해당하는지가 핵심입니다.</blockquote>',
      },
      {
        title: '징계해고 후 실업급여 신청 절차',
        content:
          '<p><strong style="color:#1e3a5f">징계해고도 해고이므로 비자발적 이직에 해당합니다. 이직확인서를 요청하고 고용센터에 신청하세요.</strong></p>\n<ol>\n<li><strong>이직확인서 발급 요청</strong> — 사업주에게 이직확인서를 요청합니다. 징계해고도 이직확인서 발급 의무가 있습니다.</li>\n<li><strong>이직 사유 확인</strong> — 이직확인서의 이직 사유 코드가 "징계해고"로 기재되어 있는지 확인합니다. 사업주가 "중대한 귀책사유"로 기재할 수 있으니 주의하세요.</li>\n<li><strong>고용센터 수급자격 심사</strong> — 고용센터에서 징계해고 사유가 중대한 귀책사유에 해당하는지를 심사합니다. 해당하지 않으면 수급자격이 인정됩니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>징계해고 실업급여 수급 가능 여부, AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">징계 사유와 해고 경위를 입력하면 중대한 귀책사유 해당 여부를 무료로 분석하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '부당해고 구제신청과 실업급여 병행 가능 여부',
        content:
          '<p><strong style="color:#1e3a5f">징계해고가 부당하다면 노동위원회에 구제신청을 하면서 동시에 실업급여를 받을 수 있습니다.</strong></p>\n<p>부당해고 구제신청과 실업급여 신청은 별개의 절차이며, 동시에 진행할 수 있습니다. 다만 구제신청이 인용되어 원직복직하면 기지급 구직급여를 반환해야 할 수 있습니다.</p>\n<ul>\n<li><strong>구제신청 기한</strong> — 해고일로부터 3개월 이내에 노동위원회에 부당해고 구제신청을 하세요.</li>\n<li><strong>실업급여 동시 수급</strong> — 구제신청 중에도 실업급여를 받을 수 있습니다. 구제 결과와 관계없이 생계 보호를 위한 제도입니다.</li>\n<li><strong>원직복직 시 반환</strong> — 구제신청이 인용되어 원직복직하면, 해고 기간 동안 임금을 소급 지급받으므로 기지급 구직급여를 반환해야 합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 징계해고가 억울하면 부당해고 구제신청과 실업급여를 동시에 진행하세요. 생계와 권리 보호를 함께 챙길 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 징계해고 후 원직복직 시 구직급여 회수',
        summary:
          '대구지법 2014구합1590 사건(대구지방법원, 2014.12.24 선고)에서 법원은 징계해고된 근로자가 부당해고 구제신청을 통해 원직복직한 경우, 해고 시점으로 소급하여 고용관계가 계속된 것이므로 기지급 구직급여를 회수하는 처분이 적법하다고 판시했습니다.',
        takeaway:
          '징계해고 후 실업급여를 받으면서 부당해고 구제신청도 진행할 수 있지만, 원직복직이 결정되면 구직급여를 반환해야 합니다. 복직 가능성까지 고려하여 자금 계획을 세우세요.',
      },
    ],
    faq: [
      {
        question: '무단결근으로 징계해고당하면 실업급여를 못 받나요?',
        answer:
          '<p>정당한 사유 없는 장기간(통상 7일 이상) 무단결근은 중대한 귀책사유에 해당할 수 있습니다. 다만 질병, 가족 돌봄 등 정당한 사유가 있었다면 수급 가능합니다.</p>',
      },
      {
        question: '징계해고인데 사업주가 이직확인서를 안 줘요.',
        answer:
          '<p>사업주는 고용보험법 제42조에 따라 이직확인서를 발급할 의무가 있습니다. 거부 시 고용센터에 요청하면 사업주에게 발급을 명령하고, 불이행 시 과태료가 부과됩니다.</p>',
      },
      {
        question: '해고 예고수당을 받으면 실업급여에 영향이 있나요?',
        answer:
          '<p>해고 예고수당은 근로기준법상 의무이며, 실업급여와는 별개입니다. 해고 예고수당을 받았더라도 실업급여 수급에 영향을 미치지 않습니다.</p>',
      },
      {
        question: '징계위원회 결과에 불복하면서 실업급여를 먼저 받을 수 있나요?',
        answer:
          '<p>네, 해고가 실행된 시점부터 실업급여를 신청할 수 있습니다. 징계 불복 절차(노동위원회 구제신청, 행정소송 등)와 실업급여 수급은 병행 가능합니다.</p>',
      },
      {
        question: '중대한 귀책사유로 수급이 거부되면 어떻게 이의를 제기하나요?',
        answer:
          '<p>고용센터의 수급자격 불인정 처분에 대해 90일 이내에 고용보험심사위원회에 심사청구를 할 수 있습니다. 심사 결과에 불복하면 행정소송도 가능합니다.</p>',
      },
    ],
    cta: { text: '징계해고 실업급여 수급 가능 여부 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건 총정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '실업급여 거부 시 불복 방법', href: '/guide/unemployment/unemployment-appeal-rejection' },
      { label: '실업급여 부정수급 대응', href: '/guide/unemployment/unemployment-fraud-penalty-response' },
      { label: '권고사직 실업급여', href: '/guide/unemployment/recommended-resignation-unemployment-benefit' },
      { label: '자발적 퇴사 실업급여', href: '/guide/unemployment/unemployment-voluntary-quit-benefits' },
    ],
  },
];
