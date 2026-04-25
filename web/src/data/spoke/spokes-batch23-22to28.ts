import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 22. 이 페이지는 [해고 통보를 처음 받은 근로자]의 [어디서 무엇부터 시작해야 하는지 막막한 상황]에서 [3개월 기한 내 구제신청 경로와 첫 3단계 행동 안내]를 돕는 페이지다.
// 23. 이 페이지는 [프리랜서·계약직 신분으로 해고된 근로자]의 [자신이 근로자로 인정받을 수 있는지 판례로 확인하려는 상황]에서 [판례 중심 근로자성 판단 기준과 해고무효 대응 안내]를 돕는 페이지다.
// 24. 이 페이지는 [직장 내 성희롱 피해를 입고 신고 절차가 궁금한 근로자]의 [어디에 신고하고 얼마나 걸리는지 모르는 상황]에서 [5단계 타임라인과 기관별 신고 방법 안내]를 돕는 페이지다.
// 25. 이 페이지는 [직장 내 성희롱을 당했지만 어디부터 시작해야 할지 모르는 피해자]의 [첫 대응 방향을 결정하지 못한 상황]에서 [증거 수집·사내 신고·외부 기관 3갈래 선택지 안내]를 돕는 페이지다.
// 26. 이 페이지는 [성희롱 가해자로 신고되었으나 사실과 다르다고 주장하는 피신고인]의 [무고 대응 전략을 모르는 상황]에서 [반박 증거 수집·진술 일관성·무고죄 고소 가능성 안내]를 돕는 페이지다.
// 27. 이 페이지는 [소액사건 소장을 처음 제출하려는 채권자]의 [소장 제출부터 판결·집행까지 전체 흐름을 모르는 상황]에서 [6단계 절차 타임라인과 각 단계별 준비사항 안내]를 돕는 페이지다.
// 28. 이 페이지는 [소액 채권 회수 방법을 비교하려는 채권자]의 [소액소송과 지급명령 중 무엇이 유리한지 모르는 상황]에서 [비교표와 상황별 선택 기준 안내]를 돕는 페이지다.

export const spokesBatch23_22to28: SpokePage[] = [
  // ───────────────────────────────────────────
  // 22. dismissal / dismissed-where-to-start
  // ───────────────────────────────────────────
  {
    domain: 'dismissal',
    slug: 'dismissed-where-to-start',
    keyword: '해고 통보 받았을 때 어디부터 해야 하나',
    questionKeyword: '해고 통보를 받았는데 처음에 무엇을 해야 하나요?',
    ctaKeyword: '해고 초기 대응',
    type: '어디부터형',
    perspective: '피해자',
    meta: {
      title: '해고 통보 받은 날 — 3개월 안에 해야 할 3가지 | 로앤가이드',
      description:
        '갑자기 해고 통보를 받았는데 어디서 어떻게 시작해야 할지 모르시겠나요? 해고일로부터 3개월 이내에 해야 할 첫 단계를 지금 확인하세요.',
    },
    intro:
      '<p>어제까지 아무 말 없더니 오늘 갑자기 "이번 주까지만 나오면 된다"는 통보를 받았습니다.</p><p>해고가 부당한 것 같은데, 어디에 신고해야 하는지, 증거를 어떻게 모아야 하는지, 변호사가 필요한지 아무것도 모르는 상태입니다.</p><p>해고를 당한 직후일수록 행동 순서가 중요합니다. 3개월이라는 구제신청 기한을 놓치면 법적으로 다툴 수 있는 권리 자체가 사라질 수 있습니다.</p><p>지금 당장 해야 할 3가지를 단계별로 정리했습니다.</p>',
    timelineSteps: [
      '해고 통보 내용 확보(서면·녹음)',
      '해고 사유·날짜 기록',
      '지방노동위원회 구제신청(3개월 이내)',
    ],
    sections: [
      {
        title: '1단계 — 해고 통보 내용을 즉시 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">서면 통지가 없다면 그 자체로 절차 위반입니다</strong></p>\n<p><strong>근로기준법 제27조</strong>에 따라 사용자는 해고 사유와 시기를 가능한 한 <strong>서면으로</strong> 통지해야 합니다. 카카오톡 메시지, 구두 통보, 문자만으로 한 해고는 절차 위반으로 부당해고에 해당할 소지가 있습니다.</p>\n<ul>\n<li>서면 해고통지서가 있다면 사본을 즉시 보관하세요</li>\n<li>구두로 통보받았다면 <strong>날짜·장소·발언 내용·상대방</strong>을 메모하고, 가능하면 대화 직후 녹음 파일이나 통화 기록을 남기세요</li>\n<li>카카오톡·이메일이라면 스크린샷을 클라우드에 백업하세요. 상대방이 메시지를 삭제할 수 있습니다</li>\n<li>동료가 목격했다면 연락처를 따로 메모해 두세요. 나중에 참고인 진술을 받을 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 서면 없는 해고 = 절차 위반 → 부당해고 주장 가능 | 모든 증거를 해고 당일 확보하세요</blockquote>',
      },
      {
        title: '2단계 — 부당해고 여부를 판단하는 기준을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">해고가 정당하려면 실질적·절차적 요건을 모두 충족해야 합니다</strong></p>\n<p><strong>근로기준법 제23조</strong>는 정당한 이유 없는 해고를 금지합니다. 법원과 노동위원회는 다음 두 가지 모두를 따집니다.</p>\n<ul>\n<li><strong>실질적 요건</strong> — 해고 사유가 사회통념상 고용관계를 유지할 수 없을 정도로 중대한가. 지각·결근 누적, 업무 능력 부족, 비위행위 등이 실제로 그 수준에 이르러야 합니다. "요즘 회사 어렵다"는 사유는 원칙적으로 정당한 해고 사유가 아닙니다</li>\n<li><strong>절차적 요건</strong> — 취업규칙이나 단체협약에 정한 징계 절차(소명 기회 제공, 징계위원회 개최 등)를 거쳤는가. 절차를 생략하면 내용이 정당하더라도 부당해고가 될 수 있습니다</li>\n<li><strong>해고 예고</strong> — 최소 <strong>30일 전에 예고</strong>하거나 30일분 통상임금(해고예고수당)을 지급해야 합니다. 즉각 해고라면 수당 지급 여부를 확인하세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계 — 지방노동위원회 구제신청을 하세요',
        content:
          '<p><strong style="color:#1e3a5f">해고일로부터 3개월 이내에 신청하지 않으면 권리가 소멸합니다</strong></p>\n<p><strong>근로기준법 제28조</strong>에 따라 부당해고를 당한 근로자는 <strong>지방노동위원회</strong>에 구제신청을 할 수 있습니다. 기한은 해고일로부터 <strong>3개월 이내</strong>입니다. 이 기한은 법정 기간으로 연장이 불가하므로, 해고 통보를 받은 직후 가능한 빠르게 준비하세요.</p>\n<ul>\n<li><strong>신청 비용</strong> — 무료입니다. 변호사 선임 없이 본인이 직접 할 수 있습니다</li>\n<li><strong>신청 장소</strong> — 사업장 소재지 관할 지방노동위원회(전국 12개 지역위원회 운영)</li>\n<li><strong>제출 서류</strong> — 구제신청서(노동위원회 홈페이지 양식), 해고통지서, 근로계약서, 임금명세서, 기타 관련 증거</li>\n<li><strong>구제 결과</strong> — 인용 시 원직 복직 + 해고 기간 임금 상당액 지급. 복직이 어렵거나 원하지 않으면 <strong>금전보상명령</strong>으로 대체 신청도 가능합니다</li>\n<li><strong>불복</strong> — 노동위원회 결과에 불복하면 중앙노동위원회 재심(10일 이내), 행정소송(재심판정 통보 후 15일 이내) 순으로 진행합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">3개월 기한 → 지방노동위원회 구제신청 → 인용 시 복직 또는 금전보상</blockquote>',
      },
      {
        title: '5인 미만 사업장과 계약직의 대응 방법',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 해고 제한 규정은 5인 이상 사업장에만 적용됩니다. 상황에 따라 대응 방법이 달라집니다</strong></p>\n<ul>\n<li><strong>5인 미만 사업장</strong> — 근로기준법 제23조(부당해고 금지)가 적용되지 않습니다. 그러나 <strong>서면 해고통지 의무, 해고예고수당</strong>은 5인 미만에도 적용됩니다. 또한 민사소송으로 근로계약 위반을 주장하거나, 고용보험 수급에는 영향이 없습니다</li>\n<li><strong>계약직(기간제)의 경우</strong> — 계약 기간 중 해고는 별도의 정당한 사유가 있어야 합니다. 계약 만료 형식이더라도 사실상 해고라면 구제 대상이 될 수 있습니다</li>\n<li><strong>수습 기간 중 해고</strong> — 수습 3개월 이내라도 정당한 이유 없이 해고할 수 없습니다. 다만 해고예고 의무는 면제됩니다</li>\n<li><strong>권고사직 압박의 경우</strong> — 사용자가 사직서를 강요했다면 <strong>강제된 사직</strong>으로 해고와 동일하게 다툴 수 있습니다. 사직서에 서명하기 전에 가능한 한 확인하세요</li>\n</ul>\n<p>내부링크: <a href="/guide/dismissal/unfair-dismissal-first-steps">부당해고 즉시 대응 3가지</a> | <a href="/guide/dismissal/dismissal-notice-pay">해고예고수당 청구 방법</a></p>',
      },
    ],
    cases: [
      {
        title: '대법원 2025두33276 — 구제신청 자격 소멸 요건',
        summary:
          '대법원 2025두33276 사건(대법원, 2025.10.16. 선고)에서 법원은 근로자가 부당해고 구제신청을 할 당시 이미 정년 도달, 근로계약 만료, 폐업 등으로 근로계약관계가 종료하여 근로자 지위에서 벗어난 경우에는 구제명령을 받을 이익이 소멸한다고 판시했습니다.',
        takeaway:
          '구제신청 기한(3개월)뿐 아니라, 신청 시점에 근로자 지위가 유지되고 있어야 구제 이익이 인정될 수 있습니다. 계약 만료·정년 도달 전에 신청하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '해고 통보 당일 바로 구제신청을 해야 하나요?',
        answer:
          '가능한 한 당일일 필요는 없지만, <strong>해고일로부터 3개월 이내</strong>에 가능한 한 신청해야 합니다. 증거 수집에 1~2주가 소요되더라도 기한 내에 접수하면 됩니다. 단, 기한을 넘기면 구제신청 자체가 각하됩니다.',
      },
      {
        question: '구제신청과 형사 고소를 동시에 할 수 있나요?',
        answer:
          '가능합니다. 노동위원회 구제신청(행정 절차)과 검찰·경찰 고소(형사 절차)는 별개입니다. 해고예고수당 미지급은 <strong>근로기준법 위반</strong>으로 고용노동청에 진정 또는 형사 고소도 병행할 수 있습니다.',
      },
      {
        question: '회사가 퇴직금을 빨리 주겠다고 하는데 사직서를 써야 하나요?',
        answer:
          '<strong>사직서에 서명하기 전에 가능한 한 확인하세요.</strong> 사직서를 자의로 제출하면 부당해고 구제신청에서 불리하게 작용할 수 있습니다. 퇴직금 수령과 부당해고 다툼은 별개이므로, 퇴직금을 받더라도 구제신청 권리는 유지됩니다.',
      },
      {
        question: '노동위원회 구제신청이 기각되면 어떻게 되나요?',
        answer:
          '지방노동위원회 기각 후 <strong>10일 이내</strong>에 중앙노동위원회에 재심을 청구할 수 있습니다. 재심도 기각되면 <strong>15일 이내</strong> 행정소송을 제기할 수 있습니다. 민사법원에 해고무효확인 소송을 별도로 제기하는 방법도 있습니다.',
      },
      {
        question: '5인 미만 식당에서 해고됐는데 방법이 없나요?',
        answer:
          '노동위원회 부당해고 구제신청은 어렵지만, <strong>해고예고수당 미지급이라면 고용노동청에 진정</strong>을 낼 수 있습니다. 또한 임금 미지급, 주휴수당 등 다른 권리침해가 있다면 함께 주장할 수 있습니다.',
      },
      {
        question: '구제신청 결과가 나오기까지 얼마나 걸리나요?',
        answer:
          '지방노동위원회는 접수 후 <strong>약 60일 이내</strong>에 판정을 내리는 것이 원칙입니다. 심문기일이 1~2회 열리고, 재심·행정소송까지 가면 총 6개월~1년 이상 소요될 수 있습니다.',
      },
    ],
    cta: {
      text: '해고 상황에 맞는 구제신청 방법을 확인해보세요',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '부당해고 즉시 대응 3가지', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '해고예고수당 청구 방법', href: '/guide/dismissal/dismissal-notice-pay' },
      { label: '권고사직 vs 해고 차이', href: '/guide/dismissal/voluntary-resignation-vs-dismissal' },
      { label: '부당해고 판례로 본 무효 사례', href: '/guide/dismissal/unfair-dismissal-void-cases' },
      { label: '임금체불 신고 방법', href: '/guide/wage/unpaid-wage-complaint-docs' },
    ],
  },

  // ───────────────────────────────────────────
  // 23. dismissal / unfair-dismissal-void-cases
  // ───────────────────────────────────────────
  {
    domain: 'dismissal',
    slug: 'unfair-dismissal-void-cases',
    keyword: '부당해고 판례로 본 해고 무효 사례',
    questionKeyword: '판례에서 해고가 무효로 인정된 사례는 어떤 경우인가요?',
    ctaKeyword: '부당해고 판례 확인',
    type: '판례형',
    perspective: '피해자',
    meta: {
      title: '부당해고 무효 판례 5가지 — 프리랜서·계약직 포함 | 로앤가이드',
      description:
        '프리랜서·계약직·정규직 할 것 없이 해고가 무효로 인정된 판례가 있습니다. 내 상황과 맞는 판례를 지금 확인하세요.',
    },
    intro:
      '<p>회사에서 "위촉계약이니까 언제든 계약 해지가 가능하다"고 했습니다. 하지만 매일 출퇴근하고, 업무 지시도 받고, 보험도 들어있는 상태였습니다.</p><p>법원은 이런 경우 근로자성을 인정하여 해고를 무효로 보기도 합니다. 어떤 기준으로 해고가 무효가 되는지, 실제 판례를 통해 확인해보겠습니다.</p><p>특히 프리랜서나 계약직이라는 이유로 포기하지 않도록, 판례가 제시하는 근로자성 판단 기준을 함께 정리했습니다.</p>',
    sections: [
      {
        title: '해고 무효가 되는 5가지 유형',
        content:
          '<p><strong style="color:#1e3a5f">법원과 노동위원회가 해고를 무효로 인정하는 대표적인 패턴이 있습니다</strong></p>\n<ul>\n<li><strong>① 서면 통지 누락</strong> — 근로기준법 제27조 위반. 구두 해고, 문자 해고는 형식 위반으로 절차적 무효. 사유가 정당하더라도 서면 없이는 해고 효력이 발생하지 않습니다</li>\n<li><strong>② 징계 절차 생략</strong> — 취업규칙·단체협약에 징계위원회 개최, 소명 기회 부여 등이 규정된 경우 이를 생략하면 실체적 사유가 있어도 무효</li>\n<li><strong>③ 해고 사유 불충분</strong> — "근무 태도가 불성실하다"는 추상적 사유, 한두 번의 지각, 상사와의 갈등 등은 해고 정당성으로 인정되지 않는 경우가 많습니다</li>\n<li><strong>④ 경영상 해고 요건 미충족</strong> — 긴박한 경영상 필요, 해고 회피 노력, 합리적·공정한 기준의 적용, 근로자 대표와의 사전 협의 4가지 요건 중 하나라도 빠지면 무효</li>\n<li><strong>⑤ 근로자성 부정 후 해고</strong> — 프리랜서·도급 형식이지만 실질적으로 근로자에 해당하는 경우, 사용자가 "위촉 해지"로 처리해도 부당해고로 다툴 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">해고 무효 5유형: 서면 누락 / 절차 생략 / 사유 불충분 / 경영상 요건 미충족 / 근로자성 부정</blockquote>',
      },
      {
        title: '홈쇼핑 호스트 판례 — 프리랜서라도 근로자가 될 수 있다',
        content:
          '<p><strong style="color:#1e3a5f">서울중앙지법 2023가합96954 사건에서 프리랜서 쇼핑호스트의 근로자성이 다투어졌습니다</strong></p>\n<p>홈쇼핑 회사와 위촉계약을 맺고 활동한 쇼핑호스트 乙씨가 계약 해지(해고무효확인)를 다툰 사건입니다. 법원은 이 사안에서 쇼핑호스트가 <strong>개인적 역량을 자율적으로 발휘하여 업무를 수행하며, 회사가 구체적이고 직접적인 지휘·감독을 했다고 볼 수 없다</strong>고 판단하여 근로자성을 부정했습니다.</p>\n<p>반면, 다른 사례에서는 동일한 프리랜서 형식이라도 출퇴근 지시, 업무 수행 방식의 구체적 통제, 전속성, 보수의 임금성 등이 인정되면 근로자로 인정될 수 있습니다.</p>\n<ul>\n<li><strong>근로자성 인정 요소</strong>: 사용자 지시에 따른 업무 수행, 취업규칙 적용, 전속 근무, 보수 고정성, 4대 보험 가입 여부</li>\n<li><strong>근로자성 부정 요소</strong>: 업무 수행 자율성, 복수 거래처 동시 작업, 결과물 단위 보수, 사업자등록 보유</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '해고 무효가 인정됐을 때 받을 수 있는 것들',
        content:
          '<p><strong style="color:#1e3a5f">해고 무효 판정 또는 부당해고 인용 시 원직 복직과 임금 상당액을 받을 수 있습니다</strong></p>\n<ul>\n<li><strong>원직 복직</strong> — 해고 이전 직위·업무로 복귀할 권리가 생깁니다. 회사가 복직을 거부하면 이행강제금(최대 3,000만원)이 부과됩니다</li>\n<li><strong>해고 기간 임금 상당액</strong> — 해고일부터 복직일까지 받았어야 할 임금에서 중간 수입을 공제한 금액을 받습니다. "미지급 임금" 형태로 청구합니다</li>\n<li><strong>금전보상명령</strong> — 복직이 현실적으로 어렵거나 원하지 않으면 금전 보상만 선택할 수 있습니다. 노동위원회 구제신청 시 명시적으로 신청해야 합니다</li>\n<li><strong>위자료</strong> — 민사소송에서 해고 과정에 불법성이 있으면 위자료도 청구 가능합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">결과: 복직 + 해고 기간 임금 / 복직 대신 금전보상 선택 가능 / 이행 거부 시 이행강제금</blockquote>',
      },
      {
        title: '내 상황이 부당해고인지 확인하는 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">아래 항목을 확인하여 부당해고 해당 여부를 점검하세요</strong></p>\n<ul>\n<li>☐ 해고 통지서를 서면으로 받지 못했다</li>\n<li>☐ 해고 사유가 모호하거나 납득이 되지 않는다</li>\n<li>☐ 징계위원회나 소명 기회 없이 해고됐다</li>\n<li>☐ 회사 어렵다는 이유로 해고됐는데 해고 회피 노력이 없었다</li>\n<li>☐ 계약 해지라고 했지만 사실상 직원처럼 일했다</li>\n<li>☐ 임신·육아 중이거나 노조 활동을 하다가 해고됐다</li>\n<li>☐ 내부고발이나 권리 주장 후 해고됐다</li>\n</ul>\n<p>위 항목 중 하나라도 해당되면 부당해고 가능성을 검토해야 합니다. 해고일로부터 <strong>3개월 이내</strong>에 지방노동위원회에 구제신청하거나, AI 상담을 통해 상황을 먼저 정리해보세요.</p>\n<p>참고 링크: <a href="/guide/dismissal/unfair-dismissal-first-steps">부당해고 즉시 대응 3가지</a> | <a href="/guide/dismissal/dismissed-where-to-start">해고 통보 받은 날 첫 단계</a></p>',
      },
    ],
    cases: [
      {
        title: '서울중앙지법 2023가합96954 — 홈쇼핑 호스트 해고무효 사건',
        summary:
          '서울중앙지법 2023가합96954 사건(2025.05.01. 선고)에서 프리랜서 쇼핑호스트가 해고무효확인을 청구했습니다. 법원은 회사가 쇼핑호스트의 업무 수행에 구체적·직접적 지휘·감독을 했다고 볼 수 없어 근로자성을 인정하기 어렵다고 판단하여 청구를 기각했습니다.',
        takeaway:
          '프리랜서·위촉 형식이라도 실질적으로 근로자에 해당하면 해고무효를 주장할 수 있습니다. 단, 지휘·감독 여부, 전속성, 보수 고정성 등을 종합적으로 따져야 합니다.',
      },
    ],
    faq: [
      {
        question: '계약직이라서 계약 만료로 해고됐는데 부당해고인가요?',
        answer:
          '계약 만료는 원칙적으로 부당해고가 아닙니다. 다만 <strong>반복 갱신으로 정규직과 유사한 기대가 생긴 경우</strong> 갱신 거절이 부당해고에 해당할 수 있습니다. "갱신 기대권" 법리로 다투어야 합니다.',
      },
      {
        question: '프리랜서인데 갑자기 계약 해지됐어요. 대응할 방법이 있나요?',
        answer:
          '프리랜서라도 실질이 근로자라면 부당해고 구제신청이 가능합니다. <strong>출퇴근 지시, 업무 방식 통제, 전속 근무, 4대 보험 가입</strong> 여부를 확인하세요. 하나라도 해당되면 근로자성을 주장할 수 있습니다.',
      },
      {
        question: '해고예고 없이 즉시 해고됐을 때 받을 수 있는 돈은?',
        answer:
          '<strong>30일분 통상임금(해고예고수당)</strong>을 청구할 수 있습니다. 계산식은 통상임금 × 30일입니다. 3개월 미만 근무자, 일용직 등은 적용 제외될 수 있습니다.',
      },
      {
        question: '서면 해고통지를 받지 못하면 원칙적으로 무효인가요?',
        answer:
          '원칙적으로 서면 통지 없는 해고는 무효입니다. 다만 사용자가 나중에 서면을 보내면서 해고 효력을 주장하는 경우도 있어, 해고 시점과 서면 발송 시점이 중요한 쟁점이 됩니다. <strong>서면을 받지 못했다면 즉시 증거로 남겨두세요.</strong>',
      },
      {
        question: '노동위원회 구제신청과 법원 소송을 동시에 할 수 있나요?',
        answer:
          '가능합니다. 노동위원회 구제신청(행정 절차)과 민사법원 해고무효확인 소송은 별개 절차입니다. 다만 한쪽에서 확정 결과가 나오면 다른 쪽에 영향을 줄 수 있으므로 전문가와 전략을 상의하는 것이 좋습니다.',
      },
    ],
    cta: {
      text: '내 해고가 무효인지 판례 기준으로 확인해보세요',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '부당해고 즉시 대응 3가지', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '해고예고수당 청구 방법', href: '/guide/dismissal/dismissal-notice-pay' },
      { label: '권고사직 vs 해고 차이', href: '/guide/dismissal/voluntary-resignation-vs-dismissal' },
      { label: '해고 통보 받은 날 첫 단계', href: '/guide/dismissal/dismissed-where-to-start' },
      { label: '임금체불 신고 방법', href: '/guide/wage/unpaid-wage-complaint-docs' },
    ],
  },

  // ───────────────────────────────────────────
  // 24. sexual-harassment / workplace-harassment-report-procedure
  // ───────────────────────────────────────────
  // 25. sexual-harassment / workplace-harassment-where-to-start
  // ───────────────────────────────────────────
  {
    domain: 'sexual-harassment',
    slug: 'workplace-harassment-where-to-start',
    keyword: '직장 내 성희롱 당했을 때 어디부터 시작하나',
    questionKeyword: '직장 내 성희롱을 당했는데 어디부터 시작해야 하나요?',
    ctaKeyword: '성희롱 대응 첫 단계',
    type: '어디부터형',
    perspective: '피해자',
    meta: {
      title: '직장 성희롱 당했을 때 — 오늘 해야 할 첫 3가지 | 로앤가이드',
      description:
        '직장에서 성희롱을 당했지만 무엇부터 해야 할지 모르겠다면 첫 단계와 선택지를 지금 확인하세요.',
    },
    intro:
      '<p>회식 자리에서 상사가 불쾌한 신체 접촉을 했습니다. 또는 업무 중에 반복적으로 외모를 평가하거나 성적 농담을 들었습니다.</p><p>신고를 해야 할 것 같은데, 증거도 없고 혼자 다 기억하고 있는 상황입니다. 어디서 무엇부터 시작해야 할지 막막합니다.</p><p>성희롱 피해를 당한 직후 오늘 해야 할 3가지를 정리했습니다. 이 3가지를 먼저 하고 나면 신고·합의·소송 중 어떤 방향으로 갈지 결정하기 훨씬 쉬워집니다.</p>',
    sections: [
      {
        title: '첫 번째 — 피해 내용을 지금 바로 기록하세요',
        content:
          '<p><strong style="color:#1e3a5f">기억은 시간이 지날수록 흐려집니다. 오늘 안에 기록으로 남기세요</strong></p>\n<p>성희롱은 단독 사건으로 끝나는 경우보다 반복적으로 발생하는 경우가 많습니다. 그리고 조사가 시작되면 구체적인 날짜, 장소, 발언 내용이 핵심 증거가 됩니다.</p>\n<ul>\n<li><strong>피해 일지 작성</strong>: 날짜 / 시간 / 장소 / 행위자 / 구체적 언행 / 목격자 유무를 적습니다. 메모앱, 노트 어디든 좋습니다</li>\n<li><strong>디지털 증거 백업</strong>: 카카오톡·문자·이메일에 성적 내용이 있다면 스크린샷을 찍고 클라우드에 저장하세요. 상대방이 삭제하면 복구가 어렵습니다</li>\n<li><strong>신뢰할 수 있는 사람에게 알리기</strong>: 동료·친구·가족에게 피해 사실을 알리는 카카오톡 메시지를 보내두면 나중에 간접 증거가 됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">오늘 할 일: 피해 일지 → 디지털 증거 백업 → 신뢰 있는 사람에게 알리기</blockquote>',
      },
      {
        title: '두 번째 — 3가지 신고 경로 중 하나를 선택하세요',
        content:
          '<p><strong style="color:#1e3a5f">상황에 따라 사내 신고, 외부 기관 신고, 형사 고소 중 선택할 수 있습니다</strong></p>\n<ul>\n<li><strong>사내 고충 신고</strong>: 회사 내 인사팀 또는 고충처리위원회에 신고. 가장 빠른 경로이지만 사업주가 가해자이거나 회사 분위기가 좋지 않으면 불이익을 우려할 수 있습니다. 법은 신고 이유로 불이익을 주는 것을 금지합니다</li>\n<li><strong>국가인권위원회 진정</strong>: 피해 발생일로부터 1년 이내. 사내 신고 없이도 가능. 성희롱 여부 자체를 공식적으로 판단받는 창구입니다</li>\n<li><strong>고용노동청 신고</strong>: 사업주가 조치 의무를 이행하지 않거나 불이익을 준 경우. 즉, 사내 신고 이후 결과가 좋지 않을 때 활용합니다</li>\n<li><strong>형사 고소</strong>: 신체 접촉(강제추행) 또는 통신매체를 이용한 음란 메시지 등 형사 처벌 대상인 경우</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=sexual-harassment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '세 번째 — 회사의 조치 결과를 반드시 기록하세요',
        content:
          '<p><strong style="color:#1e3a5f">사내 신고 이후 회사가 어떻게 대응했는지가 외부 기관 신고의 근거가 됩니다</strong></p>\n<p>사업주가 성희롱 신고를 받고도 조사를 하지 않거나, 행위자에게 아무런 조치도 취하지 않거나, 오히려 피해자를 불이익 처우하면 그 자체가 <strong>남녀고용평등법 위반</strong>입니다.</p>\n<ul>\n<li>사내 신고를 서면으로 했다면 접수 날짜와 담당자 이름을 기록하세요</li>\n<li>회사의 답변을 이메일로 요청하면 문서로 남습니다</li>\n<li>조사가 이루어지지 않거나 결과 통보가 없다면 그 사실을 기록한 뒤 고용노동청에 신고할 수 있습니다</li>\n<li>인사 발령·급여 변동·불이익 처우가 생기면 즉시 기록하고, 고용노동청·노동위원회에 신고하세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">사내 신고 기록 → 회사 조치 결과 문서화 → 미흡 시 고용노동청 신고</blockquote>',
      },
      {
        title: '성희롱 피해자가 받을 수 있는 지원',
        content:
          '<p><strong style="color:#1e3a5f">법적 지원 외에 심리·경제적 지원도 받을 수 있습니다</strong></p>\n<ul>\n<li><strong>대한법률구조공단(132)</strong> — 소득 기준 충족 시 무료 법률상담 및 소송 지원</li>\n<li><strong>한국여성노동자회 고충상담</strong> — 직장 내 성희롱·성차별 전문 상담</li>\n<li><strong>여성긴급전화 1366</strong> — 24시간 운영, 성폭력·성희롱 피해 접수 및 연계</li>\n<li><strong>성폭력피해자통합지원센터(해바라기센터)</strong> — 심리치료, 의료 지원, 법률 지원 통합 제공</li>\n</ul>\n<p>참고 링크: <a href="/guide/sexual-harassment/workplace-harassment-report-procedure">직장 성희롱 신고 절차 5단계</a> | <a href="/guide/sexual-harassment/physical-contact-at-company-dinner">회식 중 신체 접촉 성희롱 대응</a></p>',
      },
    ],
    cases: [
      {
        title: '사업주 불이익 조치에 대한 고용노동청 시정 명령 사례',
        summary:
          '관련 사례에서 직장 내 성희롱을 신고한 피해자를 다른 부서로 전보 발령하고 업무에서 배제한 것이 남녀고용평등법상 불이익 조치로 인정되어, 고용노동청이 사업주에게 시정 명령과 함께 과태료를 부과했습니다.',
        takeaway:
          '신고 후 인사 변동이 생기면 즉시 기록하고 고용노동청에 신고하세요. 불이익 조치 자체가 별도의 법 위반입니다.',
      },
    ],
    faq: [
      {
        question: '한 번만 있었던 일인데 성희롱이 될 수 있나요?',
        answer:
          '<strong>1회 행위도 성희롱에 해당</strong>할 수 있습니다. 반복성은 성희롱 인정의 필수 요건이 아닙니다. 피해자가 느낀 성적 굴욕감·혐오감이 합리적 피해자 기준에 비추어 타당하면 1회도 충분합니다.',
      },
      {
        question: '농담이었다고 하면 성희롱이 안 되나요?',
        answer:
          '아닙니다. 행위자의 의도가 아니라 <strong>피해자가 느끼는 성적 굴욕감·혐오감</strong>이 기준입니다. "농담으로 한 것"이라는 해명은 성희롱 인정에 영향을 미치지 않습니다.',
      },
      {
        question: '같은 직급 동료의 행위도 직장 내 성희롱인가요?',
        answer:
          '그렇습니다. 남녀고용평등법은 <strong>사업주, 상급자뿐 아니라 동료 근로자</strong>의 성희롱도 규율합니다. 직급이 같은 동료여도 피해를 입었다면 동일하게 신고할 수 있습니다.',
      },
      {
        question: '신고하지 않고 합의만 받아도 되나요?',
        answer:
          '가능합니다. 가해자 측에서 합의금을 제안할 수도 있습니다. 다만 합의서를 작성할 때 <strong>향후 민·형사 일체 청구 포기 조항</strong>이 들어가면 이후 추가 구제가 어려울 수 있으니 내용을 가능한 한 확인하세요.',
      },
      {
        question: '퇴직 후에도 신고할 수 있나요?',
        answer:
          '가능합니다. 퇴직 이후에도 <strong>피해 발생일로부터 1년 이내</strong>에 국가인권위원회에 진정을 낼 수 있고, 형사 고소에는 별도 기한 제한이 없습니다. 다만 증거가 살아있을 때 빠를수록 유리합니다.',
      },
    ],
    cta: {
      text: '내 상황에 맞는 성희롱 대응 첫 단계를 확인하세요',
      link: '/chat?domain=sexual-harassment',
    },
    internalLinks: [
      { label: '직장 성희롱 피해 시 먼저 확인할 것', href: '/guide/sexual-harassment/workplace-harassment-first-check' },
      { label: '직장 성희롱 신고 절차 5단계', href: '/guide/sexual-harassment/workplace-harassment-report-procedure' },
      { label: '회식 중 신체 접촉 성희롱 대응', href: '/guide/sexual-harassment/physical-contact-at-company-dinner' },
      { label: '성희롱 무고 대응법', href: '/guide/sexual-harassment/harassment-false-accusation-defense' },
      { label: '성희롱 합의금 기준과 합의서', href: '/guide/sexual-harassment/sexual-harassment-settlement' },
    ],
  },

  // ───────────────────────────────────────────
  // 26. sexual-harassment / harassment-false-accusation-defense
  // ───────────────────────────────────────────
  {
    domain: 'sexual-harassment',
    slug: 'harassment-false-accusation-defense',
    keyword: '성희롱 무고 대응법',
    questionKeyword: '성희롱으로 사실과 다르게 신고되었을 때 어떻게 대응하나요?',
    ctaKeyword: '성희롱 무고 대응',
    type: '상황형',
    perspective: '무고',
    meta: {
      title: '성희롱 무고 대응 — 사실과 다른 신고 시 4가지 전략 | 로앤가이드',
      description:
        '성희롱으로 사실과 다르게 신고되었다면 지금 바로 대응 준비가 필요합니다. 반박 증거와 진술 전략을 지금 확인하세요.',
    },
    intro:
      '<p>사실과 다르게 성희롱으로 신고되었습니다. 회사 조사가 시작되고, 동료들의 시선도 달라졌습니다.</p><p>억울하지만 아무 말도 못 하고 있으면 조사 결과가 불리하게 나올 수 있습니다. 무고에 해당하더라도 무고죄 고소는 쉽지 않으며, 우선은 조사 과정에서 자신의 입장을 정확히 전달하는 것이 중요합니다.</p><p>성희롱 피신고인으로서 사실과 다르게 신고되었을 때 취해야 할 4가지 대응 전략을 정리합니다.</p>',
    sections: [
      {
        title: '1단계 — 반박 증거를 즉시 수집하세요',
        content:
          '<p><strong style="color:#1e3a5f">신고가 들어온 순간부터 반박 자료를 모아야 합니다</strong></p>\n<p>성희롱 조사는 피해자·피신고인 양측의 진술을 비교합니다. 진술이 엇갈릴 때 증거가 결정적인 역할을 합니다.</p>\n<ul>\n<li><strong>대화 내역 보존</strong>: 신고된 발언이나 행위 관련 카카오톡·이메일·문자를 모두 백업하세요. 해당 대화가 신고 내용과 다른 맥락이라면 전후 대화를 모두 저장하는 것이 중요합니다</li>\n<li><strong>해당 시간 알리바이</strong>: 신고된 날짜·시간에 어디 있었는지 입증할 수 있는 자료(CCTV, 교통카드 내역, 다른 미팅 일정)를 확보하세요</li>\n<li><strong>목격자·동석자 확인</strong>: 해당 자리에 같이 있던 사람, 사건 후 대화한 동료 등 진술해줄 수 있는 사람을 파악하세요</li>\n<li><strong>업무 관련성 자료</strong>: 신고된 행위가 업무상 발생한 것이라면 그 맥락을 설명할 수 있는 문서(회의록, 이메일, 업무 지시 내역)를 준비하세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=sexual-harassment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '2단계 — 조사 절차에서 진술 일관성을 유지하세요',
        content:
          '<p><strong style="color:#1e3a5f">회사 조사, 노동위원회, 인권위, 형사 조사에서 진술이 엇갈리면 신뢰성이 떨어집니다</strong></p>\n<ul>\n<li><strong>진술 전 메모 준비</strong>: 신고된 내용을 미리 파악하고, 자신의 입장을 논리적으로 정리한 메모를 작성하세요. 갑작스러운 질문에 당황하지 않도록 핵심 사항을 사전에 정리하는 것이 중요합니다</li>\n<li><strong>과장하거나 축소하지 않기</strong>: 사실 그대로 진술하되, 신고 내용이 과장·왜곡된 부분을 구체적으로 지적하세요. "그런 말을 한 적이 없다"는 부인만으로는 부족하며, 실제 대화가 어떠했는지 설명해야 합니다</li>\n<li><strong>서면 진술 요청</strong>: 구두 진술만 요청하는 경우, 서면 진술서도 작성하여 제출을 요구하세요. 나중에 진술 내용을 확인할 수 있습니다</li>\n<li><strong>변호사 동행 또는 자문</strong>: 사내 조사나 인권위 조사에서도 변호사의 도움을 받을 수 있습니다. 법률 전문가의 검토를 받은 후 진술서를 작성하는 것이 안전합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">진술 준비: 핵심 사실 메모 → 구체적 반박 포인트 정리 → 서면 진술 병행 → 법률 자문</blockquote>',
      },
      {
        title: '3단계 — 사내 조치에 불복하는 방법',
        content:
          '<p><strong style="color:#1e3a5f">회사 징계나 조치 결과가 사실에 반한다면 이의 제기 절차를 활용하세요</strong></p>\n<ul>\n<li><strong>징계 절차 하자 확인</strong>: 취업규칙에 정한 징계 절차(소명 기회, 징계위원회, 통지 기간 등)를 회사가 제대로 지켰는지 확인하세요. 절차 위반이 있으면 징계 자체가 무효가 될 수 있습니다</li>\n<li><strong>이의신청</strong>: 취업규칙이나 단체협약에 징계 이의신청 제도가 있다면 정해진 기한 내에 이의를 제기하세요</li>\n<li><strong>노동위원회 구제신청</strong>: 징계 처분이 해고에 해당하면 해고일로부터 3개월 이내에 부당해고 구제신청을 할 수 있습니다</li>\n<li><strong>민사 소송</strong>: 징계가 무효임을 다투거나, 사실과 다른 신고로 명예가 훼손된 경우 신고인을 상대로 손해배상을 청구할 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">징계 불복 경로: 이의신청 → 노동위원회 구제신청(해고 시) → 민사 소송</blockquote>',
      },
      {
        title: '4단계 — 무고죄 고소 가능 여부 확인',
        content:
          '<p><strong style="color:#1e3a5f">신고 내용이 명백히 허위이고 고의성이 입증될 때만 무고죄 고소가 가능합니다</strong></p>\n<p>무고죄(형법 제156조)는 타인을 형사처분이나 징계에 받게 할 목적으로 허위 사실을 신고할 때 성립할 수 있습니다(10년 이하 징역 또는 1,500만원 이하 벌금). 그러나 무고죄 고소는 요건이 엄격합니다.</p>\n<ul>\n<li><strong>허위성</strong> — 신고된 사실이 객관적으로 허위임이 입증되어야 합니다. 단순히 성희롱 여부가 다투어지는 것만으로는 부족합니다</li>\n<li><strong>고의성</strong> — 신고인이 신고 내용이 허위라는 사실을 알면서 신고했음이 입증되어야 합니다. 오인이나 과장으로 신고한 경우는 무고가 성립하지 않습니다</li>\n<li><strong>실무적 어려움</strong> — 성희롱 사건에서 무고죄 고소가 인정되는 경우는 극히 드뭅니다. 먼저 조사 결과를 기다리고, 결과가 나온 후 무고 여부를 판단하는 것이 현실적입니다</li>\n<li><strong>명예훼손 민사 청구</strong> — 무고죄 형사 고소 대신, 허위 신고로 인한 명예훼손을 이유로 손해배상 청구가 더 현실적인 대응일 수 있습니다</li>\n</ul>\n<p>참고 링크: <a href="/guide/sexual-harassment/workplace-harassment-report-procedure">직장 성희롱 신고 절차</a> | <a href="/guide/sexual-harassment/workplace-harassment-first-check">성희롱 피해 시 먼저 확인할 것</a></p>',
      },
    ],
    cases: [
      {
        title: '성희롱 피신고인의 절차적 권리 보장 사례',
        summary:
          '관련 사례에서 회사가 피신고인에게 소명 기회를 부여하지 않고 징계 처분을 내렸습니다. 노동위원회는 취업규칙상 징계 절차를 위반하였으므로 징계 처분의 효력이 없다고 판정하여, 피신고인이 복직·소급 임금 지급을 받은 경우가 있습니다.',
        takeaway:
          '성희롱으로 신고되어 징계를 받더라도, 회사가 정한 절차를 지키지 않은 징계는 무효로 다툴 수 있습니다. 소명 기회 제공 여부를 가능한 한 확인하세요.',
      },
    ],
    faq: [
      {
        question: '사실과 다르게 신고됐다는 걸 어떻게 증명하나요?',
        answer:
          '신고된 내용과 실제 상황이 다르다는 것을 보여주는 <strong>대화 기록, 목격자 진술, 알리바이 자료</strong>를 제시하세요. 신고인의 진술과 모순되는 증거가 있으면 조사에서 결정적입니다.',
      },
      {
        question: '사내 조사에서 변호사를 대동할 수 있나요?',
        answer:
          '취업규칙에 별도 규정이 없다면 일반적으로 가능합니다. 다만 회사에 따라 내부 조사에는 외부인 동석을 제한하기도 합니다. <strong>변호사에게 자문을 먼저 받고 진술서를 작성</strong>하는 방법이 현실적입니다.',
      },
      {
        question: '성희롱 무고 피해를 입었을 때 손해배상을 받을 수 있나요?',
        answer:
          '허위 신고로 직위 해제·징계 등의 손해를 입었다면, 신고인을 상대로 <strong>민사 손해배상(위자료·재산적 손해)</strong>을 청구할 수 있습니다. 다만 신고인이 오인이 아닌 고의로 허위 신고했음을 입증해야 합니다.',
      },
      {
        question: '인권위 조사와 형사 수사가 동시에 진행될 수 있나요?',
        answer:
          '가능합니다. 인권위 진정(성희롱 해당 여부)과 경찰 수사(강제추행 등 형사 사건)는 별개 절차입니다. 피신고인은 두 절차 모두에서 진술 기회를 가집니다.',
      },
      {
        question: '억울하게 신고됐는데 회사가 이미 징계를 확정했어요.',
        answer:
          '징계 확정 후에도 불복 가능합니다. <strong>해고·정직·감봉 등의 징계는 노동위원회 구제신청(3개월 이내)</strong> 또는 민사 소송으로 다툴 수 있습니다. 징계 절차에 하자가 있었는지도 함께 확인하세요.',
      },
    ],
    cta: {
      text: '성희롱 무고 상황에서 대응 전략을 AI로 확인하세요',
      link: '/chat?domain=sexual-harassment',
    },
    internalLinks: [
      { label: '직장 성희롱 신고 절차 5단계', href: '/guide/sexual-harassment/workplace-harassment-report-procedure' },
      { label: '직장 성희롱 피해 시 먼저 확인할 것', href: '/guide/sexual-harassment/workplace-harassment-first-check' },
      { label: '직장 성희롱 어디부터 시작하나', href: '/guide/sexual-harassment/workplace-harassment-where-to-start' },
      { label: '회식 중 신체 접촉 성희롱 대응', href: '/guide/sexual-harassment/physical-contact-at-company-dinner' },
      { label: '부당해고 즉시 대응 3가지', href: '/guide/dismissal/unfair-dismissal-first-steps' },
    ],
  },

  // ───────────────────────────────────────────
  // 27. small-claims / complaint-to-judgment-full-procedure
  // ───────────────────────────────────────────
  // 28. small-claims / small-claims-vs-payment-order-comparison
  // ───────────────────────────────────────────
  {
    domain: 'small-claims',
    slug: 'small-claims-vs-payment-order-comparison',
    keyword: '소액소송 vs 지급명령 어떤 게 유리한가',
    questionKeyword: '소액소송과 지급명령 중 어떤 것을 선택해야 하나요?',
    ctaKeyword: '소액소송 vs 지급명령 선택',
    type: '비교형',
    perspective: '피해자',
    meta: {
      title: '소액소송 vs 지급명령 — 상황별 선택 기준 비교 | 로앤가이드',
      description:
        '소액 채권 회수에 소액소송과 지급명령 중 무엇이 유리한지 모르겠다면 비용·기간·이의 가능성을 지금 확인하세요.',
    },
    intro:
      '<p>친구에게 300만원을 빌려줬는데 1년째 안 갚고 있습니다. 소송을 해야 할 것 같은데, "소액소송을 하면 된다"는 말도 있고 "지급명령이 더 빠르다"는 말도 있습니다.</p><p>어떤 차이가 있는지, 내 상황에는 어떤 것이 맞는지 헷갈립니다.</p><p>소액소송과 지급명령 독촉절차를 핵심 항목별로 비교하고, 상황별로 어떤 것이 더 유리한지 정리했습니다.</p>',
    sections: [
      {
        title: '소액소송과 지급명령의 핵심 차이',
        content:
          '<p><strong style="color:#1e3a5f">두 절차는 신청 방법, 비용, 피고의 이의 가능성이 모두 다릅니다</strong></p>\n<p><strong>소액소송(소액사건심판)</strong>은 3,000만원 이하 사건에서 소장을 제출하면 자동으로 이행권고결정이 발령되고, 피고가 이의하면 1회 변론으로 판결이 납니다. <strong>지급명령</strong>은 채권자가 법원에 독촉신청서를 제출하여 발령을 요청하는 별도 절차입니다.</p>\n<ul>\n<li>소액소송에서는 소장 접수만으로 이행권고결정(사실상 자동 지급명령)이 나오므로, 별도로 지급명령 독촉절차를 신청할 실익이 줄어듭니다</li>\n<li>지급명령은 소송 비용이 소액소송보다 저렴하지만, 이의신청이 들어오면 소송으로 전환됩니다</li>\n<li>대법원 2024마5496 사건에서 지급명령 송달 전 이의신청은 부적법하지만, 이후 송달이 이루어지면 하자가 치유된다고 판시했습니다</li>\n</ul>',
      },
      {
        title: '상황별 선택 기준',
        content:
          '<p><strong style="color:#1e3a5f">상황에 따라 어떤 절차가 유리한지 달라집니다</strong></p>\n<ul>\n<li><strong>상대방이 다툴 여지가 없는 명확한 채권</strong> → 지급명령이 유리합니다. 비용이 더 저렴하고, 이의 없이 확정되면 신속하게 집행권원을 얻습니다</li>\n<li><strong>상대방이 이의할 가능성이 높은 경우</strong> → 소액소송이 유리합니다. 이의 시 바로 변론 절차로 전환되고 1회 변론으로 판결까지 받을 수 있어 같은 절차를 두 번 밟지 않아도 됩니다</li>\n<li><strong>3,000만원 이하 일반 금전 채권</strong> → 소액소송의 이행권고결정이 지급명령과 거의 동일한 효과를 내므로 이행권고결정을 활용하는 것이 효율적입니다</li>\n<li><strong>3,000만원 초과 채권</strong> → 소액사건심판법이 적용되지 않아 소액소송을 이용할 수 없습니다. 일반 민사소송 또는 지급명령 독촉절차를 이용해야 합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 맞춤 대응 전략을 세워드립니다.</p>\n<a href="/chat?domain=small-claims" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '지급명령 이의신청 — 판례로 본 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">지급명령 송달 전 이의신청은 원칙적으로 부적법하지만 치유될 수 있습니다</strong></p>\n<p>대법원 2024마5496 사건(대법원, 2024.06.07. 선고)에서 지급명령이 발령되었으나 채무자에게 송달되기 전에 이의신청이 제기된 경우, 그 이의신청은 부적법하지만 이후 채무자에게 지급명령이 적법하게 송달되면 <strong>하자가 치유</strong>되어 이의신청이 유효해진다고 판시했습니다.</p>\n<ul>\n<li>지급명령을 받은 채무자가 2주 이내에 이의신청을 하면 사건은 소송절차로 전환됩니다</li>\n<li>이의신청 후 소송으로 전환되면 추가 인지대를 납부해야 합니다</li>\n<li>복수의 채무자가 있는 경우 지급명령은 <strong>각자에게 개별적으로 송달</strong>해야 하며, 한 명에게만 송달해서는 전체에 효력이 미치지 않습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">지급명령: 발령 → 채무자 개별 송달 → 2주 내 이의 없으면 확정 → 집행권원 획득</blockquote>',
      },
      {
        title: '두 절차 모두 확정 후 강제집행 방법은 동일합니다',
        content:
          '<p><strong style="color:#1e3a5f">이행권고결정·지급명령·판결 모두 확정 후 강제집행 절차는 동일합니다</strong></p>\n<p>어떤 절차로 집행권원을 얻든, 상대방이 자발적으로 이행하지 않으면 강제집행 신청을 해야 합니다. 집행 방법은 동일합니다.</p>\n<ul>\n<li><strong>채권압류 및 추심명령</strong>: 은행 계좌 압류가 가장 신속하고 효과적입니다</li>\n<li><strong>급여 채권 압류</strong>: 상대방이 직장인이면 급여의 최대 1/2 압류 가능</li>\n<li><strong>부동산 강제경매</strong>: 상대방 명의 부동산에 신청. 시간이 걸리지만 금액이 큰 경우 유효</li>\n<li><strong>재산명시 및 재산조회</strong>: 상대방 재산을 파악하는 수단. 판결 후 법원에 신청</li>\n</ul>\n<p>참고 링크: <a href="/guide/small-claims/complaint-to-judgment-full-procedure">소장 제출부터 판결까지 6단계</a> | <a href="/guide/small-claims/lending-money-not-returned-lawsuit">돈 빌려줬는데 안 갚을 때</a></p>',
      },
    ],
    comparison: {
      title: '소액소송(이행권고결정) vs 지급명령 비교',
      headers: ['항목', '소액소송(이행권고결정)', '지급명령(독촉절차)'],
      rows: [
        { label: '적용 금액', values: ['3,000만원 이하', '금액 제한 없음'] },
        { label: '신청 방법', values: ['소장 접수 시 자동 발령', '별도 독촉신청서 제출'] },
        { label: '비용(인지대)', values: ['일반 민사소송 기준', '소송의 1/10 수준'] },
        { label: '상대방 이의 기간', values: ['결정 송달 후 2주', '결정 송달 후 2주'] },
        { label: '이의 시 절차', values: ['변론절차 자동 전환', '소송절차 전환(추가 인지대)'] },
        { label: '이의 없을 때', values: ['확정판결과 동일 효력', '확정판결과 동일 효력'] },
        { label: '적합한 상황', values: ['이의 가능성 있음, 3천만원 이하', '이의 없을 명확한 채권, 고액'] },
      ],
    },
    cases: [
      {
        title: '대법원 2024마5496 — 지급명령 송달 전 이의신청의 하자 치유',
        summary:
          '대법원 2024마5496 사건(대법원, 2024.06.07. 선고)에서 지급명령이 채무자에게 송달되기 전에 이의신청이 제기된 경우 부적법하지만, 이후 적법하게 송달되면 그 하자가 치유된다고 판시했습니다. 또한 복수 채무자에 대한 지급명령은 각자에게 개별적으로 송달해야 한다고 확인했습니다.',
        takeaway:
          '지급명령 이의신청은 송달 전이어도 이후 송달로 치유됩니다. 복수 채무자가 있으면 한 명에게만 송달해서는 안 됩니다. 절차상 하자를 미리 확인하세요.',
      },
    ],
    faq: [
      {
        question: '지급명령 비용이 소액소송보다 저렴한 게 맞나요?',
        answer:
          '지급명령 신청 시 인지대는 소송 인지대의 <strong>10분의 1</strong>입니다. 예를 들어 500만원 청구 시 소송 인지대 약 2만5천원인데, 지급명령은 약 2,500원입니다. 다만 이의신청으로 소송 전환되면 <strong>부족분 인지대를 추가 납부</strong>해야 합니다.',
      },
      {
        question: '소액소송에서 이행권고결정이 안 나오는 경우도 있나요?',
        answer:
          '있습니다. 판사가 청구 내용이 불명확하거나 이유 없다고 판단하면 이행권고결정 대신 <strong>바로 변론기일을 지정</strong>하는 경우가 있습니다. 소장을 명확하게 작성하는 것이 중요합니다.',
      },
      {
        question: '지급명령이 확정되면 항소할 수 있나요?',
        answer:
          '지급명령 확정 후에는 이의신청을 할 수 없으며, <strong>원칙적으로 불복 절차가 없습니다.</strong> 다만 무효 사유(서명 위조, 허위 채권 등)가 있으면 준재심 청구가 가능합니다.',
      },
      {
        question: '3,000만원을 넘는 채권은 소액소송을 이용할 수 없나요?',
        answer:
          '그렇습니다. 소액사건심판법은 <strong>3,000만원 이하</strong>에만 적용됩니다. 초과 금액은 일반 민사소송을 제기하거나, 지급명령 독촉절차를 이용해야 합니다.',
      },
      {
        question: '두 절차를 동시에 진행할 수 있나요?',
        answer:
          '같은 채권에 대해 지급명령과 소송을 동시에 진행하는 것은 중복 소제기에 해당하여 허용되지 않습니다. <strong>하나를 선택</strong>하여 진행하세요.',
      },
      {
        question: '승소 후 상대방이 아무 재산이 없으면 어떻게 되나요?',
        answer:
          '집행할 재산이 없으면 판결이 있어도 <strong>당장 돈을 받기 어렵습니다.</strong> 이 경우 재산명시 신청을 하거나, 상대방 재산이 생겼을 때를 기다려 추후 집행할 수 있습니다. 판결 확정 후 10년간 시효가 연장됩니다.',
      },
    ],
    cta: {
      text: '내 채권 회수에 어떤 절차가 유리한지 AI로 확인하세요',
      link: '/chat?domain=small-claims',
    },
    internalLinks: [
      { label: '소액소송 자주 묻는 질문 총정리', href: '/guide/small-claims/small-claims-faq-guide' },
      { label: '소장 제출부터 판결까지 6단계', href: '/guide/small-claims/complaint-to-judgment-full-procedure' },
      { label: '돈 빌려줬는데 안 갚을 때 소송', href: '/guide/small-claims/lending-money-not-returned-lawsuit' },
      { label: '물품대금 미지급 대응 방법', href: '/guide/small-claims/goods-payment-not-received' },
      { label: '사기죄 고소 전 준비할 것', href: '/guide/fraud/fraud-evidence-checklist' },
    ],
  },
];
