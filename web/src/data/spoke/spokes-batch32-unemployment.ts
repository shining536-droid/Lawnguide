import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 실업급여 심화 스포크 8개 (batch32)
//
// 1. unemployment-workplace-bullying-evidence-quit
//    이 페이지는 [직장 내 괴롭힘 피해를 받아 퇴사한 근로자]의 [괴롭힘이 정당한 이직 사유로 인정되는지 모르는 상황]에서
//    [괴롭힘 증거 확보와 비자발적 이직 인정 절차]를 돕는 페이지다.
//
// 2. unemployment-childcare-return-demotion
//    이 페이지는 [육아휴직 복귀 후 원래 부서가 아닌 다른 부서로 배치되어 퇴사한 근로자]의
//    [실업급여 수급 가능 여부를 모르는 상황]에서 [육아휴직 복귀자의 불이익 처우와 실업급여 인정 기준]을 돕는 페이지다.
//
// 3. unemployment-remote-cancelled-commute
//    이 페이지는 [재택근무가 폐지되어 출퇴근이 곤란해진 근로자]의
//    [재택근무 폐지가 정당한 이직 사유에 해당하는지 모르는 상황]에서
//    [근로조건 변경에 따른 비자발적 이직 인정 기준]을 돕는 페이지다.
//
// 4. unemployment-side-income-during-benefit
//    이 페이지는 [실업급여를 받으면서 아르바이트나 부업을 하고 싶은 구직자]의
//    [부업 소득이 있으면 실업급여가 삭감되는지 모르는 상황]에서
//    [수급 중 허용되는 소득 범위와 신고 의무]를 돕는 페이지다.
//
// 5. unemployment-late-application-rescue
//    이 페이지는 [퇴직 후 12개월이 지나 실업급여 신청 기한을 놓친 근로자]의
//    [기한 초과 후에도 구제받을 수 있는지 모르는 상황]에서
//    [신청 기한 관련 예외와 대안]을 돕는 페이지다.
//
// 6. unemployment-contract-breach-quit
//    이 페이지는 [채용 시 약속한 근로조건이 지켜지지 않아 퇴사한 근로자]의
//    [근로조건 위반이 정당한 이직 사유에 해당하는지 모르는 상황]에서
//    [근로조건 위반 유형별 실업급여 인정 기준과 증빙 방법]을 돕는 페이지다.
//
// 7. unemployment-military-discharge-eligibility
//    이 페이지는 [군 전역 후 취업 준비 중인 전역 군인]의
//    [고용보험 가입 이력이 없어 실업급여를 받을 수 있는지 모르는 상황]에서
//    [전역 군인의 실업급여 수급 요건과 대안]을 돕는 페이지다.
//
// 8. unemployment-small-biz-closure-daily
//    이 페이지는 [5인 미만 소규모 사업장이 폐업되어 실직한 일용직 근로자]의
//    [소규모 사업장 일용직도 실업급여를 받을 수 있는지 모르는 상황]에서
//    [소규모 사업장 일용직의 실업급여 수급 특례와 신청 절차]를 돕는 페이지다.
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch32Unemployment: SpokePage[] = [
  // ── 1. 직장 내 괴롭힘 퇴사 실업급여 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-workplace-bullying-evidence-quit',
    keyword: '직장 내 괴롭힘 퇴사 실업급여',
    questionKeyword: '직장 내 괴롭힘으로 퇴사하면 실업급여 받을 수 있나요?',
    ctaKeyword: '괴롭힘 퇴사 실업급여 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '직장 내 괴롭힘 퇴사 실업급여 받는 4단계 | 로앤가이드',
      description:
        '직장 내 괴롭힘으로 더 이상 버틸 수 없어 퇴사를 결심했다면, 비자발적 이직 인정 요건과 증거 확보 방법을 지금 확인하세요.',
    },
    intro:
      '<p>매일 회의 때마다 상사가 모든 직원 앞에서 인격적 모욕을 합니다. 업무에서 배제되고, 단체 카톡에서도 제외되었습니다. 인사팀에 신고했지만 "너도 잘못이 있다"는 답변만 돌아왔습니다. 도저히 견딜 수 없어 퇴사를 결심했지만, 자진퇴사로 분류되면 실업급여를 못 받을까 걱정됩니다. 근로기준법 제76조의2에 따른 직장 내 괴롭힘이 인정되면, 고용보험법 시행규칙 별표2에 의해 비자발적 이직으로 실업급여 수급이 가능합니다.</p>',
    sections: [
      {
        title: '직장 내 괴롭힘이 정당한 이직 사유인 이유',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제76조의2는 직장 내 괴롭힘을 금지하며, 이로 인한 퇴사는 고용보험법상 비자발적 이직으로 인정될 수 있습니다.</strong></p>\n<p>2019년 7월부터 시행된 직장 내 괴롭힘 금지법에 따라, 사용자 또는 근로자가 직장에서의 지위 또는 관계 등의 우위를 이용하여 업무상 적정 범위를 넘어 다른 근로자에게 신체적·정신적 고통을 주거나 근무환경을 악화시키는 행위는 불법입니다.</p>\n<ol>\n<li><strong>괴롭힘 신고 후 조치 미흡</strong> — 사업주에게 괴롭힘을 신고했으나 적절한 조치가 이루어지지 않은 경우, 이는 고용보험법 시행규칙 별표2에 따른 정당한 이직 사유에 해당할 소지가 있습니다.</li>\n<li><strong>괴롭힘으로 인한 근로조건 악화</strong> — 업무 배제, 부당한 인사이동, 집단 따돌림 등으로 실질적 근로조건이 악화된 경우도 포함됩니다.</li>\n<li><strong>건강상 업무 수행 곤란</strong> — 괴롭힘으로 인해 우울증, 불안장애 등 정신건강이 악화되어 업무 수행이 어려운 경우 질병 사유와 병행하여 인정될 수 있습니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 직장 내 괴롭힘을 신고했으나 조치가 없었거나, 괴롭힘으로 근로조건이 악화된 경우 비자발적 이직으로 실업급여를 받을 수 있습니다.</blockquote>',
      },
      {
        title: '괴롭힘 증거 확보 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">증거 없이 퇴사하면 "자진퇴사"로 처리됩니다. 퇴사 전에 가능한 한 증거를 확보하세요.</strong></p>\n<ul>\n<li><strong>☑ 괴롭힘 행위 녹음·녹화</strong> — 모욕적 발언, 폭언 등을 녹음하세요. 본인이 참여한 대화의 녹음은 증거로 인정될 수 있습니다.</li>\n<li><strong>☑ 문자·이메일·메신저 캡처</strong> — 업무 배제 통보, 모욕적 메시지, 부당 지시 등 괴롭힘 관련 메시지를 모두 캡처합니다.</li>\n<li><strong>☑ 괴롭힘 일지 작성</strong> — 날짜·시간·장소·행위자·내용·목격자를 구체적으로 기록한 일지를 작성하세요.</li>\n<li><strong>☑ 사내 신고 기록</strong> — 인사팀이나 노동조합에 괴롭힘을 신고한 이메일, 접수 확인서 등을 보관합니다.</li>\n<li><strong>☑ 진단서</strong> — 괴롭힘으로 정신건강이 악화되었다면 정신건강의학과 진단서를 발급받으세요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>직장 내 괴롭힘으로 퇴사한 경우, 실업급여 수급 가능성을 AI가 즉시 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">괴롭힘 유형과 보유 증거를 입력하면 비자발적 이직 인정 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '고용센터 신청 시 주의할 점 3가지',
        content:
          '<p><strong style="color:#1e3a5f">이직확인서 사유와 실제 퇴사 사유가 다를 수 있으므로 고용센터에 정확히 소명해야 합니다.</strong></p>\n<ol>\n<li><strong>이직확인서 사유 확인</strong> — 사업주가 "자발적 퇴사"로 기재했더라도 고용센터에 이의를 제기할 수 있습니다. 괴롭힘 증거와 함께 이의신청서를 제출하세요.</li>\n<li><strong>고용센터 상담 시 구체적 진술</strong> — "괴롭힘이 있었다"는 막연한 진술보다, 구체적인 행위·날짜·증거를 정리하여 제출하면 인정률이 높아집니다.</li>\n<li><strong>노동청 진정과 병행</strong> — 지방고용노동청에 직장 내 괴롭힘 진정을 제기하고, 그 접수증을 고용센터에 제출하면 비자발적 이직 인정에 유리합니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 괴롭힘 퇴사 시 노동청 진정 접수와 고용센터 실업급여 신청을 동시에 진행하면 인정 가능성이 높아집니다.</blockquote>',
      },
      {
        title: '괴롭힘 퇴사자가 흔히 저지르는 실수',
        content:
          '<p><strong style="color:#1e3a5f">증거 없이 퇴사하거나, 퇴직 합의서에 무심코 서명하면 실업급여를 놓칠 수 있습니다.</strong></p>\n<ul>\n<li><strong>사직서에 "개인 사정"으로 기재</strong> — 괴롭힘 퇴사임에도 사직서에 "일신상의 사유"라고 쓰면 자발적 퇴사의 증거가 됩니다. "직장 내 괴롭힘으로 인한 근로환경 악화"라고 명시하세요.</li>\n<li><strong>합의금 받고 "자발적 퇴사 동의" 서명</strong> — 퇴직 합의서에 "자발적 퇴사에 동의한다"는 조항이 있으면 추후 이의신청이 매우 어렵습니다. 서명 전 가능한 한 내용을 확인하세요.</li>\n<li><strong>증거 수집 없이 감정적으로 퇴사</strong> — 참다 못해 즉시 퇴사하면 증거를 확보할 기회를 잃습니다. 최소 2~4주의 증거 수집 기간을 확보하세요.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부서이동에 따른 근로조건 저하와 정당한 이직 인정',
        summary:
          '서울행법 2014구합2270 사건(서울행정법원, 2014.07.03 선고)에서 법원은 사업주의 부서이동 지시로 월 평균 임금이 46% 이상 하락할 것이 예상되어 퇴사한 근로자에게 고용보험법 시행규칙 별표2에 따라 정당한 이직 사유에 해당한다며 실업급여 수급자격을 인정했습니다.',
        takeaway:
          '직장 내 괴롭힘의 일환으로 부당한 부서이동이나 업무 배제가 이루어진 경우, 근로조건 저하를 근거로 정당한 이직 사유를 주장할 수 있습니다. 괴롭힘 행위와 근로조건 변화를 연결하여 증빙하세요.',
      },
    ],
    faq: [
      {
        question: '직장 내 괴롭힘 신고를 하지 않고 바로 퇴사해도 실업급여를 받을 수 있나요?',
        answer:
          '<p>가능하지만 인정이 어려워집니다. 사내 신고 기록이 없으면 괴롭힘 사실 자체를 입증하기 어렵습니다. 퇴사 전 이메일이라도 보내서 신고 기록을 남기세요.</p>',
      },
      {
        question: '괴롭힘 가해자가 사업주(대표)인 경우에도 같은 방법으로 신청하면 되나요?',
        answer:
          '<p>네, 사업주가 직접 괴롭힘을 한 경우에도 동일하게 비자발적 이직 사유에 해당할 소지가 있습니다. 다만 사내 신고 대신 지방고용노동청에 직접 진정을 제기하는 것이 더 효과적입니다.</p>',
      },
      {
        question: '괴롭힘 목격자가 없는데 증거가 될 만한 것이 있나요?',
        answer:
          '<p>괴롭힘 일지(날짜·시간·장소·행위 기록), 업무 배제 통보 이메일, 갑작스러운 인사이동 문서, 정신건강의학과 진단서 등이 정황 증거로 사용됩니다. 직접적 증거 외에도 정황을 종합하여 판단합니다.</p>',
      },
      {
        question: '괴롭힘으로 퇴사하면서 동시에 손해배상 소송도 가능한가요?',
        answer:
          '<p>네, 실업급여 신청과 민사상 손해배상 청구는 별개의 절차입니다. 괴롭힘으로 정신적·물질적 피해를 입었다면 민사소송을 통해 위자료를 청구할 수 있고, 실업급여와 병행 가능합니다.</p>',
      },
      {
        question: '괴롭힘을 이유로 산업재해 인정도 받을 수 있나요?',
        answer:
          '<p>직장 내 괴롭힘으로 인한 우울증, 적응장애 등 정신질환은 산업재해로도 인정받을 수 있습니다. 근로복지공단에 업무상 질병 인정 신청을 하면 됩니다. 다만 산재 치료 중에는 실업급여를 동시에 받을 수 없습니다.</p>',
      },
    ],
    cta: { text: '직장 내 괴롭힘 퇴사 실업급여 자격 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건 총정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '자발적 퇴사 실업급여', href: '/guide/unemployment/unemployment-voluntary-quit-benefits' },
      { label: '실업급여 거부 시 불복 방법', href: '/guide/unemployment/unemployment-appeal-rejection' },
      { label: '고용보험 미가입 대응', href: '/guide/unemployment/unemployment-employer-no-insurance' },
      { label: '실업급여 감액 제재', href: '/guide/unemployment/unemployment-benefit-reduction-penalty' },
    ],
  },

  // ── 2. 육아휴직 복귀 부서전환 퇴사 실업급여 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-childcare-return-demotion',
    keyword: '육아휴직 복귀 부서전환 퇴사 실업급여',
    questionKeyword: '육아휴직 복귀 후 다른 부서로 배치되어 퇴사하면 실업급여 받을 수 있나요?',
    ctaKeyword: '육아휴직 복귀 퇴사 실업급여 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '육아휴직 복귀 후 퇴사 실업급여 3가지 조건 | 로앤가이드',
      description:
        '육아휴직에서 복귀했는데 원래 부서가 아닌 곳으로 배치되어 퇴사를 고민 중이라면, 실업급여 인정 기준을 지금 확인하세요.',
    },
    intro:
      '<p>1년간의 육아휴직을 마치고 복귀했더니, 원래 담당하던 기획팀이 아닌 전혀 다른 부서로 발령이 났습니다. 업무 내용도 완전히 달라지고, 직급은 유지되었지만 실질적으로 한직입니다. 남녀고용평등법 제19조에 따르면 사업주는 육아휴직 복귀 시 같은 업무 또는 같은 수준의 임금을 지급하는 직무에 복귀시켜야 할 의무가 있으며, 이를 위반한 경우 비자발적 이직으로 인정받아 실업급여 수급이 가능합니다.</p>',
    sections: [
      {
        title: '육아휴직 복귀자에 대한 사업주의 법적 의무',
        content:
          '<p><strong style="color:#1e3a5f">남녀고용평등법 제19조 제4항은 육아휴직 후 같은 업무 또는 같은 수준의 임금을 지급하는 직무에 복귀시킬 의무를 규정합니다.</strong></p>\n<p>사업주가 육아휴직 복귀자를 의도적으로 다른 업무에 배치하거나 불이익을 주는 것은 불법입니다. 이를 위반하면 500만원 이하의 벌금이 부과되며, 근로자는 이를 근거로 비자발적 이직을 주장할 수 있습니다.</p>\n<ol>\n<li><strong>같은 업무 복귀 원칙</strong> — 휴직 전과 같은 업무에 복귀시켜야 합니다. 부서가 변경되더라도 업무 내용과 직급이 동일하면 위반이 아닙니다.</li>\n<li><strong>같은 수준의 임금 보장</strong> — 복귀 후 임금이 감소하면 법 위반입니다. 기본급뿐 아니라 성과급, 수당 등 전체 급여 수준이 유지되어야 합니다.</li>\n<li><strong>불이익 처우 금지</strong> — 해고, 전보, 인사평가 불이익 등 육아휴직을 이유로 한 어떤 불이익도 금지됩니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 육아휴직 복귀 시 업무·임금이 이전과 달라졌다면, 이는 법 위반이며 비자발적 이직 사유에 해당할 소지가 있습니다.</blockquote>',
      },
      {
        title: '실업급여 인정을 위한 준비 절차',
        content:
          '<p><strong style="color:#1e3a5f">퇴사 전에 불이익 처우 증거를 확보하고, 사업주에게 원직복귀를 요청한 기록을 남겨야 합니다.</strong></p>\n<ul>\n<li><strong>원직복귀 요청 기록</strong> — 이메일이나 내용증명으로 "남녀고용평등법에 따라 원래 업무로 복귀시켜 달라"고 요청하세요. 거부 답변도 증거가 됩니다.</li>\n<li><strong>인사발령 문서</strong> — 복귀 시 받은 인사발령 통보서, 업무 변경 내역 등을 확보합니다.</li>\n<li><strong>임금 비교 자료</strong> — 휴직 전과 복귀 후의 급여명세서를 비교하여 임금 감소 여부를 확인합니다.</li>\n<li><strong>노동청 진정 병행</strong> — 지방고용노동청에 남녀고용평등법 위반으로 진정을 제기하면 실업급여 인정에도 유리합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>육아휴직 복귀 후 불이익 퇴사, 실업급여 받을 수 있는지 AI가 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">복귀 후 변경된 업무·임금 조건을 입력하면 비자발적 이직 인정 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '육아휴직급여와 실업급여의 관계',
        content:
          '<p><strong style="color:#1e3a5f">육아휴직급여와 실업급여는 별개의 제도이며, 육아휴직급여 수급 이력이 실업급여에 불이익을 주지 않습니다.</strong></p>\n<p>다만 육아휴직급여 신청기한과 실업급여 신청기한은 각각 별도로 관리되므로 주의해야 합니다.</p>\n<ol>\n<li><strong>육아휴직급여 미지급분 청구</strong> — 복귀 후 25% 사후지급금이 남아있다면, 퇴사 후에도 청구 가능합니다. 다만 복귀 후 6개월 이상 근무해야 지급됩니다.</li>\n<li><strong>피보험기간 산정</strong> — 육아휴직 기간은 피보험기간에 포함되므로, 실업급여 수급자격(피보험기간 180일) 판단 시 유리합니다.</li>\n<li><strong>수급 기한</strong> — 퇴직일 다음 날부터 12개월 이내에 실업급여를 신청해야 합니다. 기한을 놓치면 수급권이 소멸됩니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 육아휴직 기간은 피보험기간에 포함되며, 복귀 후 부당 처우로 퇴사하면 비자발적 이직으로 실업급여를 받을 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 육아휴직급여 신청기간과 강행규정 해석',
        summary:
          '대법원 2018두47264 사건(대법원, 2021.03.18 선고)에서 법원은 고용보험법 제70조 제2항에서 정한 육아휴직급여 신청기간(육아휴직 종료 후 12개월)은 강행규정인 제척기간이라고 판시했습니다.',
        takeaway:
          '육아휴직급여와 실업급여 모두 신청기한이 엄격하게 적용됩니다. 복귀 후 퇴사를 결심했다면 각 급여의 신청기한을 가능한 한 확인하고 기한 내에 신청하세요.',
      },
    ],
    faq: [
      {
        question: '육아휴직 복귀 후 3개월 만에 퇴사해도 실업급여를 받을 수 있나요?',
        answer:
          '<p>네, 피보험기간 180일만 충족하면 됩니다. 육아휴직 기간이 피보험기간에 포함되므로, 복귀 후 짧은 기간 근무하고 퇴사해도 수급자격이 인정될 수 있습니다.</p>',
      },
      {
        question: '부서가 바뀌었지만 임금은 동일한데도 비자발적 이직으로 인정되나요?',
        answer:
          '<p>임금이 동일해도 업무 내용이 크게 달라지거나, 이전에 쌓은 경력·전문성을 전혀 활용할 수 없는 부서로 배치된 경우에는 실질적 근로조건 저하로 볼 수 있습니다. 다만 입증이 쉽지 않으므로 구체적 증거가 필요합니다.</p>',
      },
      {
        question: '사업주가 "구조조정으로 인한 부서 통폐합"이라고 주장하면 어떡하나요?',
        answer:
          '<p>구조조정이 실제로 있었더라도 같은 수준의 임금과 직무를 보장해야 합니다. 다른 직원은 원래 업무에 복귀했는데 본인만 다른 부서로 배치되었다면 차별적 처우를 주장할 수 있습니다.</p>',
      },
      {
        question: '육아휴직 복귀 후 퇴사하면 사후지급금(25%)을 포기해야 하나요?',
        answer:
          '<p>네, 육아휴직급여 사후지급금은 복귀 후 6개월 이상 근무해야 지급됩니다. 6개월 미만 근무 후 퇴사하면 사후지급금은 받을 수 없지만, 실업급여는 별도로 신청 가능합니다.</p>',
      },
    ],
    cta: { text: '육아휴직 복귀 후 퇴사 실업급여 자격 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건 총정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '자발적 퇴사 실업급여', href: '/guide/unemployment/unemployment-voluntary-quit-benefits' },
      { label: '실업급여 거부 시 불복 방법', href: '/guide/unemployment/unemployment-appeal-rejection' },
      { label: '직업훈련 수당 안내', href: '/guide/unemployment/unemployment-training-allowance' },
      { label: '수급 중 소득 제한', href: '/guide/unemployment/unemployment-part-time-income-limit' },
    ],
  },

  // ── 3. 재택근무 폐지 통근곤란 퇴사 실업급여 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-remote-cancelled-commute',
    keyword: '재택근무 폐지 통근곤란 퇴사 실업급여',
    questionKeyword: '재택근무가 폐지되어 출퇴근이 어려워지면 실업급여 받을 수 있나요?',
    ctaKeyword: '재택근무 폐지 퇴사 실업급여 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '재택근무 폐지 퇴사 실업급여 받는 3가지 기준 | 로앤가이드',
      description:
        '재택근무가 갑자기 폐지되어 출퇴근이 곤란해졌다면, 비자발적 이직 인정 가능 여부와 증빙 방법을 지금 확인하세요.',
    },
    intro:
      '<p>코로나 이후 3년간 재택근무를 해왔는데, 갑자기 회사에서 전면 출근을 통보했습니다. 재택근무를 전제로 지방에 이사까지 했는데, 편도 2시간 이상의 통근이 현실적으로 불가능합니다. 재택근무 폐지로 근로조건이 크게 변경된 경우, 고용보험법 시행규칙 별표2에 따라 통근곤란 또는 근로조건 변경 사유로 비자발적 이직이 인정될 수 있습니다.</p>',
    sections: [
      {
        title: '재택근무 폐지가 정당한 이직 사유인 경우',
        content:
          '<p><strong style="color:#1e3a5f">재택근무가 근로계약의 내용이었거나 장기간 관행으로 정착된 경우, 일방적 폐지는 근로조건 변경에 해당할 소지가 있습니다.</strong></p>\n<p>고용보험법 시행규칙 별표2에 따르면 근로조건이 채용 시 제시된 것보다 낮아진 경우와 통근곤란(편도 3시간 이상)은 정당한 이직 사유입니다.</p>\n<ol>\n<li><strong>근로계약서에 재택근무가 명시된 경우</strong> — 채용 시 "재택근무" 조건으로 계약했다면, 일방적 폐지는 근로조건 변경에 해당할 소지가 있습니다. 가장 강력한 사유입니다.</li>\n<li><strong>통근시간 편도 3시간 이상</strong> — 재택근무 폐지로 출퇴근 시간이 편도 3시간 이상이 된다면, 별도로 통근곤란 사유도 인정될 수 있습니다.</li>\n<li><strong>장기간 재택근무 관행</strong> — 계약서에 명시되지 않았더라도 2~3년 이상 재택근무가 지속되었다면, 이를 근로조건으로 볼 수 있는 여지가 있습니다. 다만 입증이 어려울 수 있습니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 근로계약서에 재택근무가 명시되어 있거나 통근 시간이 편도 3시간 이상이면 비자발적 이직 인정 가능성이 높습니다.</blockquote>',
      },
      {
        title: '재택근무 폐지 퇴사 시 필요한 증빙 서류',
        content:
          '<p><strong style="color:#1e3a5f">근로계약서와 통근 거리·시간을 증명할 자료가 핵심 증거입니다.</strong></p>\n<ul>\n<li><strong>근로계약서·채용공고문</strong> — "재택근무" 또는 "원격근무" 조건이 명시된 계약서, 채용공고 캡처를 확보하세요.</li>\n<li><strong>재택근무 폐지 통보 문서</strong> — 전면 출근 통보 이메일, 공지사항, 사내 게시물 등을 캡처합니다.</li>\n<li><strong>통근거리 증빙</strong> — 자택에서 사업장까지의 대중교통 경로 검색 결과, 소요 시간 스크린샷을 준비합니다.</li>\n<li><strong>사업주에 대한 이의 기록</strong> — 재택근무 유지 요청 이메일, 회사의 거부 답변 등을 보관하세요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>재택근무 폐지 후 퇴사, 실업급여 받을 수 있는지 AI가 즉시 판단합니다</strong></p>\n<p style="margin:0;font-size:0.95em">통근 거리와 계약 조건을 입력하면 비자발적 이직 인정 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '재택근무 관행만으로 인정받기 어려운 경우와 대안',
        content:
          '<p><strong style="color:#1e3a5f">근로계약서에 근무 장소가 "사업장"으로 되어 있고 재택근무가 임시 조치였던 경우, 인정이 어려울 수 있습니다.</strong></p>\n<p>코로나 팬데믹 기간의 일시적 재택근무는 "회사의 임시 조치"로 판단될 가능성이 있습니다. 이 경우 대안을 마련해야 합니다.</p>\n<ol>\n<li><strong>통근곤란 사유 활용</strong> — 재택근무 관행 인정이 어렵더라도, 전면 출근 시 편도 통근 시간이 3시간 이상이면 통근곤란 사유로 인정될 수 있습니다.</li>\n<li><strong>사업주와 재택근무 유지 협의</strong> — 재택근무 유지를 요청하되, 거부 답변을 문서로 받아두세요. 협의 과정이 기록되면 고용센터에서 유리하게 판단합니다.</li>\n<li><strong>점진적 전환 요청</strong> — "주 2~3일 출근"과 같은 하이브리드 근무를 제안했으나 거부된 기록이 있으면, 근로자가 합리적 대안을 시도했음을 보여줍니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 계약서에 재택근무가 명시되지 않았더라도, 통근곤란 사유를 병행하여 비자발적 이직을 주장하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 근로조건 저하에 따른 정당한 이직 인정',
        summary:
          '서울행법 2014구합2270 사건(서울행정법원, 2014.07.03 선고)에서 법원은 사업주의 일방적 부서이동 지시로 근로조건(임금)이 크게 저하된 경우 고용보험법 시행규칙 별표2에 따라 정당한 이직 사유에 해당한다고 판시했습니다.',
        takeaway:
          '재택근무 폐지도 근로조건의 일방적 변경에 해당할 수 있으며, 특히 채용 시 약속된 근무 형태가 변경된 경우 이 판례의 논리를 활용할 수 있습니다. 근무 조건 변경 전후를 구체적으로 비교하여 증빙하세요.',
      },
    ],
    faq: [
      {
        question: '재택근무가 계약서에 명시되지 않았는데도 비자발적 이직으로 인정될 수 있나요?',
        answer:
          '<p>어렵지만 가능합니다. 장기간 재택근무가 관행으로 정착되었고 이를 전제로 생활 기반을 옮겼다면, 통근곤란 사유(편도 3시간 이상)와 결합하여 인정받을 수 있습니다.</p>',
      },
      {
        question: '편도 통근 시간이 2시간인데 통근곤란으로 인정되나요?',
        answer:
          '<p>고용보험법 시행규칙상 통근곤란 기준은 편도 3시간 이상입니다. 2시간이라면 통근곤란 단독으로는 어렵지만, 근로계약서상 재택근무 조건이 있었다면 근로조건 변경 사유로 주장할 수 있습니다.</p>',
      },
      {
        question: '재택근무 폐지 전에 이사를 하면 유리한가요?',
        answer:
          '<p>아닙니다. 이미 재택근무 중에 자발적으로 먼 곳으로 이사한 것은 본인 선택이므로, 이후 출근 명령으로 통근이 곤란해져도 인정받기 어려울 수 있습니다. 채용 시점의 근무 조건이 핵심입니다.</p>',
      },
      {
        question: '다른 회사에서 재택근무 채용을 받으면 실업급여 대신 이직하는 게 나은가요?',
        answer:
          '<p>상황에 따라 다릅니다. 새 직장이 안정적이라면 이직이 유리할 수 있습니다. 다만 현 회사에서 부당하게 근로조건을 변경한 것이 확실하다면, 퇴사 후 실업급여를 받으면서 구직하는 것도 합리적 선택입니다.</p>',
      },
      {
        question: '회사가 "재택근무는 회사 재량"이라고 주장하면 어떡하나요?',
        answer:
          '<p>취업규칙이나 사내 규정에 재택근무 관련 규정이 있다면 그 내용을 확인하세요. 채용공고에 "재택근무 가능"이라고 명시했다면 이를 증거로 제출할 수 있습니다.</p>',
      },
    ],
    cta: { text: '재택근무 폐지 퇴사 실업급여 자격 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건 총정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '자발적 퇴사 실업급여', href: '/guide/unemployment/unemployment-voluntary-quit-benefits' },
      { label: '실업급여 거부 시 불복 방법', href: '/guide/unemployment/unemployment-appeal-rejection' },
      { label: '계약 만료 실업급여', href: '/guide/unemployment/unemployment-contract-end-no-renewal' },
      { label: '조기재취업수당', href: '/guide/unemployment/unemployment-early-reemployment-bonus' },
    ],
  },

  // ── 4. 실업급여 수급 중 부업 소득 한도 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-side-income-during-benefit',
    keyword: '실업급여 수급 중 부업 소득 한도',
    questionKeyword: '실업급여 받으면서 부업을 해도 되나요?',
    ctaKeyword: '실업급여 부업 소득 한도 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '실업급여 수급 중 부업 소득 한도 5가지 기준 | 로앤가이드',
      description:
        '실업급여를 받으면서 아르바이트나 프리랜서 일을 하고 싶다면, 허용되는 소득 범위와 신고 의무를 지금 확인하세요.',
    },
    intro:
      '<p>실업급여를 받으면서 생활비가 빠듯해 가벼운 아르바이트를 하고 싶습니다. 그런데 부업 소득이 생기면 실업급여가 깎이거나 중단되는 건 아닌지 걱정됩니다. 고용보험법 제58조에 따르면 실업급여 수급 중에도 일정 조건 하에 취업활동이 가능하지만, 신고 의무를 지키지 않으면 부정수급으로 처벌받을 수 있으므로 정확한 기준을 가능한 한 알아야 합니다.</p>',
    sections: [
      {
        title: '실업급여 수급 중 허용되는 소득 범위',
        content:
          '<p><strong style="color:#1e3a5f">월 60시간(주 15시간) 미만의 단시간 근로는 취업으로 보지 않으며, 실업급여와 병행할 수 있습니다.</strong></p>\n<p>다만 모든 소득 활동은 고용센터에 가능한 한 신고해야 합니다. 미신고 시 부정수급에 해당할 소지가 있습니다.</p>\n<ol>\n<li><strong>주 15시간(월 60시간) 미만</strong> — 1주 소정근로시간이 15시간 미만이면 취업으로 보지 않습니다. 다만 3개월 이상 계속 근로하면 취업으로 간주됩니다.</li>\n<li><strong>일용직 근로</strong> — 1일 단위로 고용되는 일용직 근로를 한 날은 그날의 실업급여가 지급되지 않지만, 나머지 날의 실업급여는 정상 지급됩니다.</li>\n<li><strong>자영업 준비 활동</strong> — 사업자등록 없이 단순 준비 활동(시장조사, 사업계획서 작성 등)을 하는 것은 허용됩니다. 다만 실제 영업을 시작하면 취업으로 봅니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 주 15시간 미만 단시간 근로는 실업급여와 병행 가능하지만, 가능한 한 고용센터에 신고해야 합니다.</blockquote>',
      },
      {
        title: '소득 발생 시 신고 방법과 실업급여 조정',
        content:
          '<p><strong style="color:#1e3a5f">실업인정일에 소득 활동 내역을 정확히 신고해야 합니다. 미신고는 부정수급입니다.</strong></p>\n<ul>\n<li><strong>실업인정 신청서에 기재</strong> — 실업인정일에 제출하는 신청서의 "취업·소득 활동" 란에 근로 날짜, 시간, 소득 금액을 정확히 기재합니다.</li>\n<li><strong>근로한 날 실업급여 미지급</strong> — 근로를 한 날에 대해서는 그날의 구직급여가 지급되지 않습니다. 다만 소정급여일수는 소진되지 않고 뒤로 밀립니다.</li>\n<li><strong>소득에 따른 감액</strong> — 1일 소득이 구직급여 일액의 일정 비율을 초과하면 그날의 구직급여가 감액됩니다. 구체적 기준은 고용센터에 확인하세요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>실업급여 수급 중 부업, 얼마까지 괜찮은지 AI가 즉시 계산합니다</strong></p>\n<p style="margin:0;font-size:0.95em">예상 근로시간과 소득을 입력하면 실업급여 감액 여부를 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '부정수급 위험을 피하기 위한 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">부정수급이 적발되면 받은 금액의 최대 5배를 반환해야 합니다. 신고를 철저히 지키세요.</strong></p>\n<ul>\n<li><strong>☑ 모든 소득 활동 신고</strong> — 현금 아르바이트, 프리랜서 수입, 온라인 판매 수익 등 어떤 형태든 소득이 발생하면 가능한 한 신고합니다.</li>\n<li><strong>☑ 근로시간 관리</strong> — 주 15시간 이상 근로하면 "취업"으로 간주되어 실업급여가 중단됩니다. 근로시간을 정확히 기록하세요.</li>\n<li><strong>☑ 3개월 이상 반복 근로 주의</strong> — 주 15시간 미만이라도 동일 사업장에서 3개월 이상 계속 근로하면 취업으로 봅니다.</li>\n<li><strong>☑ 가족 사업 참여 주의</strong> — 배우자나 가족의 사업을 무급으로 돕는 것도 취업 활동으로 간주될 수 있습니다. 고용센터에 미리 확인하세요.</li>\n</ul>',
      },
      {
        title: '부업 유형별 실업급여 영향 비교',
        content:
          '<p><strong style="color:#1e3a5f">부업의 형태에 따라 실업급여 수급에 미치는 영향이 다릅니다.</strong></p>\n<ol>\n<li><strong>배달 라이더(플랫폼 노동)</strong> — 건별 수입이 발생하므로 근로한 날마다 신고해야 합니다. 주 15시간 이상이면 취업으로 간주됩니다.</li>\n<li><strong>온라인 판매(스마트스토어 등)</strong> — 사업자등록을 하면 자영업 개시로 보아 실업급여가 중단됩니다. 사업자등록 없이 소규모 판매는 소득 신고 후 수급 가능합니다.</li>\n<li><strong>프리랜서 용역</strong> — 건별 계약이라도 소득이 발생한 날은 신고해야 합니다. 계속적인 거래관계가 있으면 취업으로 볼 수 있습니다.</li>\n<li><strong>과외·강의</strong> — 정기적인 과외나 강의는 주 15시간 이상이면 취업입니다. 일회성 특강은 해당 날만 신고하면 됩니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 어떤 형태의 부업이든 소득 발생 시 가능한 한 신고하세요. 미신고 적발 시 최대 5배 반환 + 형사처벌까지 가능합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 해외체류 중 대리 신고와 부정수급 인정',
        summary:
          '대구지법 2018구합23680 사건(대구지방법원, 2019.04.17 선고)에서 법원은 수급자가 해외에 체류하면서 형이 인터넷으로 대리 신고한 행위가 고용보험법 제61조의 "거짓이나 부정한 방법"에 해당한다며 구직급여 반환 처분을 적법하다고 판시했습니다.',
        takeaway:
          '실업급여 수급 중 소득 활동을 숨기거나 대리 신고하면 부정수급으로 처벌 대상으로 검토될 수 있습니다. 아르바이트 수입이 적더라도 가능한 한 본인이 직접 정확하게 신고하세요.',
      },
    ],
    faq: [
      {
        question: '하루 3시간 아르바이트를 주 3일 하면 실업급여가 중단되나요?',
        answer:
          '<p>주 9시간(3시간 x 3일)이므로 주 15시간 미만에 해당하여 취업으로 보지 않습니다. 다만 근로한 날의 실업급여는 조정될 수 있으며, 가능한 한 실업인정 시 신고해야 합니다.</p>',
      },
      {
        question: '중고거래로 물건을 팔아서 수입이 생겼는데 이것도 신고해야 하나요?',
        answer:
          '<p>개인 소유물을 일시적으로 판매하는 것은 소득 활동으로 보지 않습니다. 다만 반복적으로 물품을 구매하여 되파는 형태라면 영업 활동에 해당하므로 신고가 필요합니다.</p>',
      },
      {
        question: '실업급여 수급 중 주식 투자 수익이 생기면 신고해야 하나요?',
        answer:
          '<p>주식·부동산 등 투자 수익은 근로소득이 아니므로 실업급여 신고 대상이 아닙니다. 다만 전업으로 투자 활동을 하면서 구직 의사가 없는 것으로 판단되면 수급이 제한될 수 있습니다.</p>',
      },
      {
        question: '부정수급 적발 시 정확히 어떤 처벌을 받나요?',
        answer:
          '<p>부정수급액 반환 + 추가징수(최대 부정수급액의 5배)가 부과됩니다. 또한 향후 실업급여 수급자격이 제한되며, 고의적인 경우 고용보험법 제116조에 따라 형사처벌(3년 이하 징역 또는 3천만원 이하 벌금)도 가능합니다.</p>',
      },
      {
        question: '부업 소득이 일 5만원인데 구직급여가 깎이나요?',
        answer:
          '<p>근로한 날의 구직급여 일액보다 부업 소득이 적으면 차액만 지급되고, 많으면 그날의 구직급여는 지급되지 않습니다. 정확한 감액 기준은 본인의 구직급여 일액에 따라 다르므로 고용센터에 확인하세요.</p>',
      },
    ],
    cta: { text: '실업급여 수급 중 부업 가능 여부 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건 총정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '수급 중 소득 제한', href: '/guide/unemployment/unemployment-part-time-income-limit' },
      { label: '실업급여 감액 제재', href: '/guide/unemployment/unemployment-benefit-reduction-penalty' },
      { label: '조기재취업수당', href: '/guide/unemployment/unemployment-early-reemployment-bonus' },
      { label: '직업훈련 수당 안내', href: '/guide/unemployment/unemployment-training-allowance' },
    ],
  },

  // ── 5. 실업급여 신청 기한 초과 구제 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-late-application-rescue',
    keyword: '실업급여 신청 기한 초과 구제',
    questionKeyword: '퇴직 후 12개월이 지났는데 실업급여를 아직 받을 수 있나요?',
    ctaKeyword: '실업급여 기한 초과 구제 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '실업급여 신청 기한 놓쳤을 때 구제 방법 3가지 | 로앤가이드',
      description:
        '퇴직 후 12개월이 지나 실업급여 신청 기한을 놓쳤다면, 기한 초과 시 가능한 구제 방법과 대안을 지금 확인하세요.',
    },
    intro:
      '<p>퇴직하고 한동안 건강이 좋지 않아 치료에만 집중했습니다. 정신을 차려보니 퇴직 후 12개월이 지나 있었습니다. 고용보험법 제43조에 따르면 실업급여 수급기간은 퇴직일의 다음 날부터 12개월입니다. 이 기간이 지나면 원칙적으로 수급권이 소멸하지만, 예외적 구제가 가능한 경우와 활용할 수 있는 대안이 있습니다.</p>',
    sections: [
      {
        title: '실업급여 수급 기간 12개월의 법적 의미',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 제43조에 따라 구직급여 수급기간은 퇴직일 다음 날부터 12개월이며, 이 기간을 넘기면 잔여 급여일수가 남아있어도 소멸합니다.</strong></p>\n<p>수급기간은 "실업급여를 받을 수 있는 기간"을 의미하며, 신청 기한과 구분해야 합니다. 퇴직 후 빨리 신청할수록 더 많은 급여를 받을 수 있습니다.</p>\n<ol>\n<li><strong>수급기간 12개월</strong> — 퇴직일 다음 날부터 12개월 이내에 소정급여일수만큼 받을 수 있습니다. 12개월이 지나면 남은 급여일수가 있어도 받을 수 없습니다.</li>\n<li><strong>수급자격 인정 신청</strong> — 퇴직 후 지체 없이 고용센터에 수급자격 인정 신청을 해야 합니다. 신청이 늦어지면 그만큼 받을 수 있는 기간이 줄어듭니다.</li>\n<li><strong>대기기간 7일</strong> — 수급자격 인정 후 최초 7일은 대기기간으로 급여가 지급되지 않습니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 12개월 수급기간은 엄격히 적용됩니다. 퇴직 후 가능한 한 빨리 고용센터에 신청하세요.</blockquote>',
      },
      {
        title: '기한 초과 시 예외적 구제가 가능한 경우',
        content:
          '<p><strong style="color:#1e3a5f">질병, 부상, 재해 등 불가피한 사유로 수급기간 내 신청이 불가능했다면 수급기간 연장이 인정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>상병급여 전환</strong> — 퇴직 후 질병이나 부상으로 취업이 불가능한 경우, 고용보험법 제63조에 따라 상병급여를 신청할 수 있습니다. 상병급여는 구직급여 수급기간 내에 질병으로 7일 이상 취업이 곤란한 경우 지급됩니다.</li>\n<li><strong>수급기간 연장 사유</strong> — 질병·부상, 출산, 병역 의무 이행 등의 사유로 취업이 불가능한 기간은 수급기간에 산입하지 않습니다(고용보험법 제43조 제2항). 최대 4년까지 연장 가능합니다.</li>\n<li><strong>연장 신청 절차</strong> — 해당 사유 발생 시 고용센터에 수급기간 연장 신청서와 증빙서류(진단서, 입영통지서 등)를 제출합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>실업급여 기한을 놓쳤다면, 구제 가능한 방법이 있는지 AI가 즉시 확인합니다</strong></p>\n<p style="margin:0;font-size:0.95em">퇴직 시기와 신청 못한 사유를 입력하면 수급기간 연장 가능성을 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '기한이 완전히 지난 경우의 대안',
        content:
          '<p><strong style="color:#1e3a5f">수급기간이 완전히 지나 구제가 불가능하더라도, 다른 제도를 활용할 수 있습니다.</strong></p>\n<ol>\n<li><strong>국민취업지원제도</strong> — 실업급여 수급이 불가능한 경우 고용노동부의 국민취업지원제도를 통해 구직촉진수당(월 50만원, 최대 6개월)과 취업지원서비스를 받을 수 있습니다.</li>\n<li><strong>긴급복지지원</strong> — 위기 상황(생계곤란)에 처한 경우 긴급복지지원을 통해 생계비, 의료비 등을 지원받을 수 있습니다. 주민센터에 신청하세요.</li>\n<li><strong>직업훈련</strong> — 내일배움카드를 발급받아 직업훈련을 받으면서 훈련수당을 지급받을 수 있습니다. 실업급여와 별개로 신청 가능합니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 실업급여 기한을 놓쳤더라도 국민취업지원제도, 긴급복지지원 등 대안 제도를 활용하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 이직 후 12개월 경과와 수급기간 만료',
        summary:
          '울산지법 2013구합2840 사건(울산지방법원, 2014.04.24 선고)에서 법원은 해외 법인으로 전출된 근로자가 국내 회사 퇴직일로부터 12개월이 지난 후에 수급자격 인정을 신청한 사안에서, 구직급여 수급기간이 이미 만료되었다고 판시했습니다.',
        takeaway:
          '법원은 12개월 수급기간을 엄격하게 적용합니다. 퇴직 후 사정이 있더라도 가능한 한 빨리 고용센터에 방문하여 수급자격 인정과 수급기간 연장 신청을 동시에 진행하세요.',
      },
    ],
    faq: [
      {
        question: '퇴직 후 질병으로 6개월간 입원했는데 수급기간이 연장되나요?',
        answer:
          '<p>네, 질병·부상으로 취업이 불가능한 기간은 수급기간에 산입하지 않습니다. 입원 진단서 등을 증빙으로 고용센터에 수급기간 연장 신청을 하세요.</p>',
      },
      {
        question: '수급기간 연장은 언제까지 신청할 수 있나요?',
        answer:
          '<p>해당 사유가 발생한 때 지체 없이 신청해야 합니다. 사유 발생 후 너무 늦게 신청하면 인정받기 어려울 수 있으므로, 질병 등의 사유가 생기면 즉시 고용센터에 연락하세요.</p>',
      },
      {
        question: '재취업했다가 다시 퇴사하면 이전 미사용 실업급여를 받을 수 있나요?',
        answer:
          '<p>아닙니다. 이전 직장의 수급기간(12개월)은 별도이며, 새 직장에서 퇴직 시에는 새로운 수급자격을 확인해야 합니다. 이전에 남은 소정급여일수는 소멸됩니다.</p>',
      },
      {
        question: '국민취업지원제도는 누구나 받을 수 있나요?',
        answer:
          '<p>만 15~69세 구직자로서 가구 중위소득 60% 이하(I유형) 또는 그 이상(II유형)에 해당하면 신청 가능합니다. I유형은 구직촉진수당 지급, II유형은 취업지원서비스 위주입니다. 고용센터에서 자격을 확인하세요.</p>',
      },
    ],
    cta: { text: '실업급여 기한 초과 구제 가능성 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건 총정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '실업급여 거부 시 불복 방법', href: '/guide/unemployment/unemployment-appeal-rejection' },
      { label: '직업훈련 수당 안내', href: '/guide/unemployment/unemployment-training-allowance' },
      { label: '일용직 실업급여 자격', href: '/guide/unemployment/unemployment-daily-worker-qualification' },
      { label: '고용보험 미가입 대응', href: '/guide/unemployment/unemployment-employer-no-insurance' },
    ],
  },

  // ── 6. 근로조건 위반 퇴사 실업급여 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-contract-breach-quit',
    keyword: '근로조건 위반 퇴사 실업급여',
    questionKeyword: '채용 시 약속한 근로조건이 지켜지지 않아 퇴사하면 실업급여 받을 수 있나요?',
    ctaKeyword: '근로조건 위반 퇴사 실업급여 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '근로조건 위반 퇴사 실업급여 인정 4가지 유형 | 로앤가이드',
      description:
        '채용 시 약속받은 급여·업무가 실제와 다르다면, 근로조건 위반으로 실업급여를 받을 수 있는 기준과 증빙 방법을 지금 확인하세요.',
    },
    intro:
      '<p>면접에서 연봉 3,500만원에 마케팅 업무를 하겠다고 합의했습니다. 그런데 입사 후 계약서에는 2,800만원이 적혀 있고, 실제 업무는 콜센터 상담이었습니다. 항의했더니 "수습 기간이니 참아라"는 말만 들었습니다. 고용보험법 시행규칙 별표2에 따르면, 채용 시 제시된 근로조건이 실제와 다른 경우 2개월 이상 지속되면 정당한 이직 사유에 해당하여 실업급여 수급이 가능합니다.</p>',
    sections: [
      {
        title: '근로조건 위반이 정당한 이직 사유로 인정되는 유형',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 시행규칙 별표2 제1호 (가)목에 따라, 근로조건이 채용 시 제시된 것보다 낮아진 경우 정당한 이직 사유입니다.</strong></p>\n<p>다만 "2개월 이상" 근로조건이 낮아진 상태가 지속되어야 합니다.</p>\n<ol>\n<li><strong>임금 관련 위반</strong> — 채용 공고나 면접에서 약속한 급여보다 실제 급여가 낮은 경우. 기본급 삭감, 성과급 미지급, 수당 누락 등이 해당합니다.</li>\n<li><strong>업무 내용 변경</strong> — 채용 시 약속한 직무와 완전히 다른 업무를 부여받은 경우. 예: 개발자로 채용했으나 영업 업무를 시킨 경우.</li>\n<li><strong>근무시간·장소 변경</strong> — 주 5일 근무 조건으로 입사했으나 주 6일 근무를 요구하거나, 서울 근무 조건이었으나 지방 발령을 받은 경우.</li>\n<li><strong>복리후생 미이행</strong> — 채용 시 약속한 4대보험, 연차, 퇴직금 등이 제공되지 않는 경우.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 채용 시 약속과 실제 근로조건이 다르고 2개월 이상 지속되면, 퇴사 시 비자발적 이직으로 실업급여를 받을 수 있습니다.</blockquote>',
      },
      {
        title: '근로조건 위반 증빙을 위한 서류 준비',
        content:
          '<p><strong style="color:#1e3a5f">"약속된 조건"과 "실제 조건"의 차이를 객관적으로 증명하는 서류가 핵심입니다.</strong></p>\n<ul>\n<li><strong>☑ 채용공고문 캡처</strong> — 지원 당시의 채용공고문에 명시된 급여, 업무, 근무조건을 캡처해두세요. 채용 플랫폼의 공고가 삭제되었다면 웹 아카이브를 확인합니다.</li>\n<li><strong>☑ 근로계약서</strong> — 입사 시 작성한 근로계약서의 조건과 실제 지급받은 급여명세서를 비교합니다.</li>\n<li><strong>☑ 면접 시 약속 기록</strong> — 면접 시 구두로 약속한 조건을 이메일이나 문자로 확인받은 기록이 있으면 강력한 증거입니다.</li>\n<li><strong>☑ 급여명세서</strong> — 실제 지급받은 급여가 약속과 다름을 보여주는 급여명세서를 확보합니다.</li>\n<li><strong>☑ 사업주에 대한 시정 요구 기록</strong> — 근로조건 이행을 요구한 이메일, 문자, 내용증명 등을 보관하세요.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>근로조건 위반으로 퇴사한 경우, 실업급여 수급 가능성을 AI가 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">약속된 조건과 실제 조건의 차이를 입력하면 비자발적 이직 인정 기준을 무료로 확인하세요.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '2개월 미만 근무 후 퇴사한 경우',
        content:
          '<p><strong style="color:#1e3a5f">근로조건 위반 사유는 2개월 이상 지속되어야 하지만, 예외가 있습니다.</strong></p>\n<p>입사 후 2개월이 안 되었더라도 다른 정당한 이직 사유에 해당하면 실업급여를 받을 수 있습니다.</p>\n<ol>\n<li><strong>임금 체불</strong> — 고용보험법 시행규칙 별표2 제1호 (가)목에 따라, 임금이 지급되지 않으면 기간에 관계없이 정당한 이직 사유입니다.</li>\n<li><strong>사업주의 근로계약 위반</strong> — 근로기준법 제19조에 따르면 명시된 근로조건이 사실과 다를 경우 즉시 근로계약을 해제할 수 있습니다.</li>\n<li><strong>피보험기간 충족 문제</strong> — 2개월 미만 근무 시 이 직장의 피보험기간만으로는 180일을 충족할 수 없으므로, 이전 직장의 피보험기간과 합산해야 합니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 2개월 미만 근무라도 임금 체불이 있으면 즉시 퇴사하고 실업급여를 신청할 수 있습니다. 피보험기간 합산을 확인하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 근로조건 저하에 따른 수급자격 인정',
        summary:
          '서울행법 2014구합2270 사건(서울행정법원, 2014.07.03 선고)에서 법원은 부서이동으로 실적급 지급구조가 변경되어 월 평균 임금이 46% 이상 하락할 것이 예상되는 경우, 고용보험법 시행규칙 별표2 제1호 (가)목에 따른 정당한 이직 사유에 해당한다고 판시했습니다.',
        takeaway:
          '채용 시 약속된 급여 수준이 일방적으로 변경되어 임금이 크게 하락하면, 비자발적 이직으로 인정될 수 있습니다. 급여 변경 전후의 급여명세서를 가능한 한 비교 확보하세요.',
      },
    ],
    faq: [
      {
        question: '구두로만 약속한 조건도 근로조건 위반으로 인정되나요?',
        answer:
          '<p>증거 확보가 어렵지만, 구두 약속을 뒷받침하는 채용공고문, 면접 후 이메일 확인, 동종업계 급여 수준 등으로 간접 증빙이 가능합니다. 서면 기록이 없다면 인정이 어려울 수 있습니다.</p>',
      },
      {
        question: '수습 기간 중 급여가 본채용 때보다 낮은 것도 근로조건 위반인가요?',
        answer:
          '<p>근로계약서에 "수습 기간 급여 90%"와 같이 명시되어 있다면 위반이 아닙니다. 다만 수습 기간 급여 감액 조건 없이 채용했으면서 일방적으로 급여를 낮춘 경우는 위반에 해당할 소지가 있습니다.</p>',
      },
      {
        question: '회사가 "경영 사정으로 근로조건을 변경했다"고 주장하면 어떡하나요?',
        answer:
          '<p>경영 사정이 있더라도 근로자의 동의 없이 일방적으로 근로조건을 불이익하게 변경할 수 없습니다. 근로자의 동의를 구하지 않은 일방적 변경은 근로기준법 위반이며, 정당한 이직 사유가 됩니다.</p>',
      },
      {
        question: '4대보험 미가입도 근로조건 위반에 해당하나요?',
        answer:
          '<p>네, 채용 시 4대보험 가입을 약속했으나 실제로 가입하지 않은 경우 근로조건 위반입니다. 또한 4대보험 미가입 자체가 법 위반이므로 노동청 진정도 가능합니다.</p>',
      },
      {
        question: '근로계약서를 쓰지 않았는데 근로조건 위반을 주장할 수 있나요?',
        answer:
          '<p>근로계약서 미작성은 사업주의 법 위반(근로기준법 제17조)입니다. 채용공고, 면접 기록, 입사 안내 이메일 등으로 약속된 조건을 증명할 수 있고, 계약서 미작성 자체가 노동청 신고 사유입니다.</p>',
      },
    ],
    cta: { text: '근로조건 위반 퇴사 실업급여 자격 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건 총정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '자발적 퇴사 실업급여', href: '/guide/unemployment/unemployment-voluntary-quit-benefits' },
      { label: '실업급여 거부 시 불복 방법', href: '/guide/unemployment/unemployment-appeal-rejection' },
      { label: '고용보험 미가입 대응', href: '/guide/unemployment/unemployment-employer-no-insurance' },
      { label: '계약 만료 실업급여', href: '/guide/unemployment/unemployment-contract-end-no-renewal' },
    ],
  },

  // ── 7. 전역 군인 실업급여 수급 자격 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-military-discharge-eligibility',
    keyword: '전역 군인 실업급여 수급 자격',
    questionKeyword: '군 전역 후 실업급여를 받을 수 있나요?',
    ctaKeyword: '전역 군인 실업급여 자격 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '전역 군인 실업급여 수급 자격 3가지 확인법 | 로앤가이드',
      description:
        '군 전역 후 취업 준비 중인데 실업급여를 받을 수 있는지 궁금하다면, 전역 군인의 수급 요건과 대안 제도를 지금 확인하세요.',
    },
    intro:
      '<p>장기복무를 마치고 전역했습니다. 아직 취업처를 정하지 못해 생활비가 걱정되는데, 군 복무 기간에 고용보험에 가입되어 있었는지도 모르겠습니다. 직업군인이라면 고용보험 가입 여부에 따라 실업급여 수급 가능성이 달라지며, 의무복무 병사의 경우에는 고용보험 적용 대상이 아니므로 대안 제도를 활용해야 합니다.</p>',
    sections: [
      {
        title: '군인의 고용보험 가입 여부 확인',
        content:
          '<p><strong style="color:#1e3a5f">의무복무 병사는 고용보험 적용 대상이 아니지만, 직업군인(장교·부사관)은 2019년부터 고용보험에 가입할 수 있습니다.</strong></p>\n<p>실업급여 수급 가능 여부는 고용보험 가입 이력에 달려 있습니다.</p>\n<ol>\n<li><strong>의무복무 병사</strong> — 고용보험 적용 대상이 아닙니다. 전역 후 실업급여를 받을 수 없으며, 대안 제도를 활용해야 합니다.</li>\n<li><strong>직업군인(장교·부사관)</strong> — 2019년 1월부터 임기제 부사관 등은 고용보험에 가입할 수 있습니다. 가입 이력이 있고 피보험기간 180일을 충족하면 실업급여 수급이 가능합니다.</li>\n<li><strong>군무원</strong> — 공무원이지만 고용보험 가입 대상인 경우가 있습니다. 개인별로 가입 여부를 확인해야 합니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 고용보험 가입 여부를 고용보험 홈페이지(www.ei.go.kr)에서 먼저 확인하세요.</blockquote>',
      },
      {
        title: '전역 군인이 활용할 수 있는 대안 제도',
        content:
          '<p><strong style="color:#1e3a5f">고용보험 미가입 전역 군인도 국가보훈처와 고용노동부의 지원 제도를 활용할 수 있습니다.</strong></p>\n<ul>\n<li><strong>국민취업지원제도</strong> — 실업급여 수급자격이 없는 구직자도 신청 가능합니다. 구직촉진수당(월 50만원, 최대 6개월)과 취업지원서비스를 제공합니다.</li>\n<li><strong>제대군인 전직지원</strong> — 국가보훈처의 제대군인지원센터에서 직업상담, 취업교육, 일자리 알선 등을 무료로 제공합니다. 장기복무 전역자는 전직수당도 받을 수 있습니다.</li>\n<li><strong>내일배움카드</strong> — 전역 군인도 내일배움카드를 발급받아 직업훈련을 받으면서 훈련수당을 지급받을 수 있습니다. 최대 500만원 한도의 훈련비를 지원합니다.</li>\n<li><strong>군인공제회 전역지원금</strong> — 군 복무 중 불입한 공제금을 전역 시 일시금으로 수령할 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>전역 후 실업급여·지원금 수급 가능 여부, AI가 즉시 확인합니다</strong></p>\n<p style="margin:0;font-size:0.95em">복무 유형과 전역 시기를 입력하면 받을 수 있는 지원 제도를 무료로 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '전역 전 준비해야 할 사항',
        content:
          '<p><strong style="color:#1e3a5f">전역 후 빈틈 없이 지원을 받으려면 전역 전에 미리 준비해야 합니다.</strong></p>\n<ol>\n<li><strong>고용보험 가입 여부 확인</strong> — 고용보험 홈페이지(www.ei.go.kr)에서 본인의 피보험자격 취득 이력을 확인하세요. 입대 전 직장에서 가입한 이력이 있을 수도 있습니다.</li>\n<li><strong>제대군인지원센터 사전 등록</strong> — 전역 3~6개월 전에 국가보훈처 제대군인지원센터에 사전 등록하면 전역 직후 바로 지원을 받을 수 있습니다.</li>\n<li><strong>내일배움카드 발급</strong> — 전역 후 바로 직업훈련을 시작할 수 있도록 전역 전에 내일배움카드 발급 절차를 알아두세요.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 입대 전 직장의 고용보험 가입 이력이 있다면 피보험기간을 합산할 수 있습니다. 가능한 한 확인하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 고용보험 가입신청 기간 도과와 기관장 의무',
        summary:
          '대법원 2018두63235 사건(대법원, 2022.10.27 선고)에서 법원은 소속기관장이 고용보험 가입의사 확인의무를 게을리하여 가입대상 공무원이 3개월의 신청기간을 도과한 경우, 공무원이 그 사유를 안 날부터 다시 3개월 내에 가입신청을 할 수 있다고 판시했습니다.',
        takeaway:
          '군무원이나 임기제 공무원 등 고용보험 가입 대상이었으나 기관의 과실로 미가입된 경우, 소급 가입이 가능할 수 있습니다. 기관에 문의하여 가입 누락 여부를 확인하세요.',
      },
    ],
    faq: [
      {
        question: '입대 전 직장에서 고용보험에 6개월 가입했는데, 전역 후 이 기간을 활용할 수 있나요?',
        answer:
          '<p>원칙적으로 이직일(입대 전 퇴사일)로부터 12개월 이내에 실업급여를 신청해야 합니다. 병역 의무로 인한 기간은 수급기간 연장 사유에 해당하므로, 전역 후 고용센터에 확인하세요.</p>',
      },
      {
        question: '의무복무 병사도 전역 후 국민취업지원제도를 바로 신청할 수 있나요?',
        answer:
          '<p>네, 전역증 또는 병적증명서를 지참하고 관할 고용센터에 방문하면 바로 신청 가능합니다. 소득·재산 요건에 따라 I유형 또는 II유형으로 분류됩니다.</p>',
      },
      {
        question: '중도 전역(의원면직)인데 실업급여를 받을 수 있나요?',
        answer:
          '<p>고용보험에 가입되어 있었다면, 의원면직이 자발적 퇴직에 해당하여 실업급여가 제한될 수 있습니다. 다만 건강 악화, 부대 내 괴롭힘 등 정당한 사유가 있었다면 비자발적 이직으로 인정받을 수 있습니다.</p>',
      },
      {
        question: '장기복무 전역자 전직수당은 얼마인가요?',
        answer:
          '<p>장기복무(10년 이상) 전역자에게는 군인사법에 따라 전직수당이 지급됩니다. 금액은 복무기간과 계급에 따라 다르며, 국가보훈처 제대군인지원센터에서 정확한 금액을 확인할 수 있습니다.</p>',
      },
    ],
    cta: { text: '전역 군인 실업급여·지원금 자격 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건 총정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '고용보험 미가입 대응', href: '/guide/unemployment/unemployment-employer-no-insurance' },
      { label: '직업훈련 수당 안내', href: '/guide/unemployment/unemployment-training-allowance' },
      { label: '자발적 퇴사 실업급여', href: '/guide/unemployment/unemployment-voluntary-quit-benefits' },
      { label: '실업급여 거부 시 불복 방법', href: '/guide/unemployment/unemployment-appeal-rejection' },
    ],
  },

  // ── 8. 5인 미만 사업장 폐업 일용직 실업급여 ──
  {
    domain: 'unemployment',
    slug: 'unemployment-small-biz-closure-daily',
    keyword: '5인 미만 사업장 폐업 일용직 실업급여',
    questionKeyword: '5인 미만 소규모 사업장이 폐업하면 일용직도 실업급여를 받을 수 있나요?',
    ctaKeyword: '소규모 사업장 일용직 실업급여 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '5인 미만 폐업 일용직 실업급여 신청 3단계 | 로앤가이드',
      description:
        '소규모 사업장이 폐업되어 실직한 일용직이라면, 실업급여 수급 가능 여부와 신청 절차를 지금 확인하세요.',
    },
    intro:
      '<p>동네 식당에서 3년간 일용직으로 일했는데, 사장님이 갑자기 가게를 접었습니다. 직원이 사장님 포함 3명뿐인 작은 가게였는데, 고용보험에 가입되어 있었는지도 모르겠습니다. 2인 이상 사업장이라면 원칙적으로 고용보험 당연적용 대상이며, 사업주가 미가입했더라도 피보험자격 확인 청구를 통해 소급 가입하고 실업급여를 받을 수 있는 방법이 있습니다.</p>',
    sections: [
      {
        title: '5인 미만 사업장 일용직의 고용보험 가입 기준',
        content:
          '<p><strong style="color:#1e3a5f">1인 이상 근로자를 고용하는 모든 사업장은 고용보험 당연적용 대상입니다. 5인 미만이라도 예외가 아닙니다.</strong></p>\n<p>고용보험법 제8조에 따라 근로자를 고용하는 모든 사업 또는 사업장에 고용보험이 적용됩니다. 다만 일부 업종과 근로 형태는 적용이 제외될 수 있습니다.</p>\n<ol>\n<li><strong>당연적용 원칙</strong> — 사업장 규모에 관계없이 근로자가 있으면 고용보험 가입 의무가 있습니다. 사업주가 미가입했더라도 근로자의 수급권은 보호됩니다.</li>\n<li><strong>일용직 고용보험 특례</strong> — 1개월간 소정근로시간이 60시간(주 15시간) 이상인 일용근로자는 고용보험 가입 대상입니다. 60시간 미만이라도 3개월 이상 계속 근로했다면 가입 대상입니다.</li>\n<li><strong>적용제외 대상</strong> — 65세 이후 새로 고용된 경우, 월 소정근로시간 60시간 미만(주 15시간 미만)이면서 3개월 미만 근로한 경우 등은 적용이 제외됩니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 5인 미만 사업장이라도 고용보험 가입 의무가 있으며, 미가입 시 소급 가입이 가능합니다.</blockquote>',
      },
      {
        title: '고용보험 미가입 시 소급 가입 절차',
        content:
          '<p><strong style="color:#1e3a5f">사업주가 고용보험에 가입하지 않았어도 근로자가 직접 피보험자격 확인 청구를 할 수 있습니다.</strong></p>\n<ul>\n<li><strong>피보험자격 확인 청구</strong> — 고용센터에 "피보험자격 확인 청구서"를 제출합니다. 근로사실 확인 서류(급여 이체 기록, 출근 기록 등)를 함께 제출하세요.</li>\n<li><strong>근로사실 증빙 서류</strong> — 급여 계좌 이체 내역, 문자 메시지(출근 요청 등), 사업장 CCTV, 동료 진술서 등이 근로 사실을 입증하는 증거가 됩니다.</li>\n<li><strong>고용센터 조사</strong> — 고용센터에서 사업주에게 사실관계를 확인합니다. 사업주가 인정하면 소급 가입 처리되고, 미납 보험료는 사업주에게 부과됩니다.</li>\n<li><strong>사업주 연락 불가 시</strong> — 폐업으로 사업주와 연락이 안 되면, 근로복지공단에 사업장 조사를 요청하고 근로 증빙으로 소급 가입을 추진합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>소규모 사업장 폐업 후 실업급여 수급 가능성, AI가 즉시 확인합니다</strong></p>\n<p style="margin:0;font-size:0.95em">근무 기간과 고용보험 가입 여부를 입력하면 실업급여 신청 방법을 무료로 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '일용직 실업급여 수급 요건과 급여 계산',
        content:
          '<p><strong style="color:#1e3a5f">일용근로자의 실업급여 수급 요건은 일반 근로자와 다릅니다.</strong></p>\n<ol>\n<li><strong>피보험단위기간</strong> — 이직일 이전 18개월간 피보험단위기간이 합산 180일 이상이어야 합니다(일반 근로자는 이직일 이전 18개월).</li>\n<li><strong>최종 이직일 이전 1개월간 근로일수</strong> — 최종 이직일 이전 1개월간 근로일수가 10일 미만이어야 합니다.</li>\n<li><strong>구직급여 일액</strong> — 이직일 이전 1년간 1일 평균 보수의 60%에 해당하며, 상한액(일 66,000원)과 하한액이 적용됩니다.</li>\n<li><strong>소정급여일수</strong> — 연령과 피보험기간에 따라 120일~270일입니다.</li>\n</ol>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 일용직은 피보험단위기간 계산 방식이 다르므로, 고용보험 홈페이지에서 정확한 피보험기간을 확인하세요.</blockquote>',
      },
      {
        title: '이직확인서 발급이 안 될 때 대처법',
        content:
          '<p><strong style="color:#1e3a5f">사업장이 폐업하여 사업주가 이직확인서를 발급해주지 못하는 경우에도 실업급여 신청이 가능합니다.</strong></p>\n<ol>\n<li><strong>고용센터에 이직확인서 미발급 신고</strong> — 고용센터에 사업주의 이직확인서 미발급 사실을 신고하면, 고용센터에서 직권으로 발급할 수 있습니다.</li>\n<li><strong>근로복지공단 확인</strong> — 사업장의 고용보험 가입 이력을 근로복지공단에서 확인하여 이직확인서를 대체할 수 있습니다.</li>\n<li><strong>사업자등록증 폐업 확인</strong> — 국세청 홈택스에서 사업자등록 상태를 조회하여 폐업 사실을 증빙합니다. 폐업확인서를 고용센터에 제출하세요.</li>\n</ol>',
      },
    ],
    cases: [
      {
        title: '판례 — 고용보험 가입 의무와 사업주 책임',
        summary:
          '대법원 2011두6745 사건(대법원, 2014.02.13 선고)에서 법원은 고용보험 보험관계는 사업 개시로 당연히 성립하며, 사업주가 보험관계 성립을 인식하지 못했다 하여 보험료 납부 의무를 면할 수 없고, 보험자도 보험료를 징수하지 않았다 하여 보험급여 지급을 거절할 수 없다고 판시했습니다.',
        takeaway:
          '사업주가 고용보험에 가입하지 않았더라도 근로자의 수급권은 보호됩니다. 소규모 사업장 일용직이라도 근로 사실이 입증되면 소급 가입 후 실업급여 신청이 가능합니다.',
      },
    ],
    faq: [
      {
        question: '사업주가 폐업하고 연락이 안 되는데 어떻게 해야 하나요?',
        answer:
          '<p>고용센터에 사업주 연락 불가 사실을 알리고, 근로 증빙 서류(급여 이체 기록, 문자, 사진 등)를 제출하세요. 고용센터가 직권으로 피보험자격 확인과 이직확인서 발급을 진행할 수 있습니다.</p>',
      },
      {
        question: '현금으로 급여를 받아서 이체 기록이 없는데 어떡하나요?',
        answer:
          '<p>동료 근로자의 진술서, 사업장 출입 기록, 문자 메시지(출근 요청, 급여 관련), 사업장 주변 CCTV 등을 통해 근로 사실을 증명할 수 있습니다. 최대한 다양한 정황 증거를 수집하세요.</p>',
      },
      {
        question: '5인 미만 사업장은 근로기준법 적용이 안 된다고 들었는데, 고용보험도 적용 안 되나요?',
        answer:
          '<p>아닙니다. 근로기준법 일부 조항(해고 예고, 연차 등)은 5인 미만 사업장에 적용되지 않지만, 고용보험법은 규모에 관계없이 모든 사업장에 적용됩니다. 고용보험과 근로기준법은 별개의 법률입니다.</p>',
      },
      {
        question: '일용직 피보험기간 180일은 실제 근로일수 기준인가요?',
        answer:
          '<p>네, 일용근로자의 피보험단위기간은 실제 근로한 날을 기준으로 산정합니다. 이직일 이전 18개월간 실제 근로일수가 합산 180일 이상이어야 합니다.</p>',
      },
      {
        question: '폐업으로 실직했는데 체불 임금도 같이 청구할 수 있나요?',
        answer:
          '<p>네, 실업급여 신청과 별도로 체불 임금에 대해서는 노동청에 체불 진정을 제기하거나, 사업주가 도산한 경우 근로복지공단에 체당금 신청(고용보험법상 도산 등 사실인정)을 할 수 있습니다.</p>',
      },
    ],
    cta: { text: '소규모 사업장 폐업 일용직 실업급여 자격 AI로 확인하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건 총정리', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '일용직 실업급여 자격', href: '/guide/unemployment/unemployment-daily-worker-qualification' },
      { label: '고용보험 미가입 대응', href: '/guide/unemployment/unemployment-employer-no-insurance' },
      { label: '실업급여 거부 시 불복 방법', href: '/guide/unemployment/unemployment-appeal-rejection' },
      { label: '직업훈련 수당 안내', href: '/guide/unemployment/unemployment-training-allowance' },
    ],
  },
];
