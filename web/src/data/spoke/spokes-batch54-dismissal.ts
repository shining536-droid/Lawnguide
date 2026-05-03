import { SpokePage } from '../spoke-pages';

// batch54 dismissal 5개
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 출산전후휴가·육아휴직을 사용하고 복귀한 직후 부서변경·평가하락 끝에 해고된 근로자가 남녀고용평등법 제19조의5 일·가정 양립 배려의무 + 부당해고 결합 트랙으로 다툴 수 있도록 돕는 페이지다.
// 2. 이 페이지는 입사 1년 미만 단기근로자가 부당해고를 당했을 때 근로기준법 제35조 해고예고 적용 범위 + 노동위 구제신청 가능 여부를 정리해 다툼 트랙을 잡을 수 있도록 돕는 페이지다.
// 3. 이 페이지는 회사가 경영·영업비밀 유출 의심을 명목으로 즉시해고를 단행한 사안에서, 사용자 측 또는 그에 준하는 입장의 근로자가 취업규칙 명시·소명기회·비례성 요건 점검으로 분쟁 위험을 평가할 수 있도록 돕는 페이지다.
// 4. 이 페이지는 무단결근 3일 자동면직 조항으로 직권면직된 근로자가 자동면직 조항의 한계 + 결근 사정 입증 + 인사규정 면직사유 해석으로 다툴 수 있도록 돕는 페이지다.
// 5. 이 페이지는 노동조합 가입·노조활동을 사유로 해고된 근로자가 노동조합법 제81조 부당노동행위 + 부당해고 병행 트랙으로 다툴 수 있도록 돕는 페이지다.

export const spokesBatch54Dismissal: SpokePage[] = [
  // ─── 1. dismissal / dismissal-maternity-leave-return-immediate-fired ───
  {
    domain: 'dismissal',
    slug: 'dismissal-maternity-leave-return-immediate-fired',
    keyword: '출산휴가 육아휴직 복귀 직후 해고',
    questionKeyword: '출산전후휴가·육아휴직을 사용하고 복귀한 직후 부서변경·평가하락 끝에 해고됐어요. 다툴 수 있나요?',
    ctaKeyword: '출산휴가 복귀 직후 해고 정리',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '출산휴가 복귀 직후 해고 다투는 4가지 배려의무 | 로앤가이드',
      description:
        '출산전후휴가·육아휴직 후 복귀 직후 해고됐다면 남녀고용평등법 제19조의5 배려의무와 부당해고 4가지 포인트로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"육아휴직을 1년 사용하고 복귀한 첫 주에 \'기존 자리는 다른 사람이 맡고 있다\'며 한직으로 발령났어요. 이후 평가가 곤두박질쳤고 3개월 만에 \'성과 부진\'으로 해고 통보를 받았는데, 같은 시기 입사한 동료들은 그대로 자리를 지키고 있어 막막합니다." 출산전후휴가·육아휴직 직후 일정 기간 안에 부서변경·평가하락·전보 등 불이익 처분이 잇따르고 결국 해고로 이어진 사안은, 남녀고용평등과 일·가정 양립 지원에 관한 법률(이하 남녀고용평등법) 제19조의5 사업주 배려의무 위반 + 부당해고 결합 트랙으로 다툴 수 있는 사례가 있습니다. 노동위 부당해고 구제신청은 해고일 3개월 이내가 핵심 기한이며, 회사 측 사유의 합리성·동료 비교 자료가 결합되면 강력한 다툼 자료가 됩니다.</p>',
    sections: [
      {
        title: 'Q. 출산휴가·육아휴직 복귀 직후 해고에서 다툴 수 있는 4가지 입증 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 배려의무 위반·인과관계·합리성 부재·차별 정황 4가지로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 남녀고용평등법 제19조의5 배려의무 위반</strong> — 사업주는 만 8세 이하 또는 초등학교 2학년 이하 자녀를 양육하는 근로자에 대해 근로시간 조정·연장근로 제한·탄력적 운영 등 배려의무를 부담합니다. 복귀 후 양육 사정을 전혀 고려하지 않은 부서 배치·평가는 배려의무 위반 정황 자료가 됩니다.</li>\n<li><strong>② 복귀 시점과 후속 처분 시간 근접성</strong> — 복귀일로부터 3~6개월 내 부서변경·평가하락·해고가 이어졌다면 휴직과 후속 처분 사이의 인과관계 정황으로 평가될 여지가 있습니다.</li>\n<li><strong>③ 처분의 합리적 이유 부재</strong> — 휴직 전 평가·실적은 정상이었는데 복귀 직후부터 동일 잣대로 평가가 급락했다면 합리성 결여 정황입니다. 복귀 부서가 본래 직무와 동일성을 잃었다면 그 자체로 다툼 영역입니다.</li>\n<li><strong>④ 차별 정황</strong> — 같은 부서·직급에서 휴직을 사용하지 않은 동료의 처우와 비교, 같은 시기 입사한 동료의 잔류 정황 등 평등권 침해 정황 자료를 정리하면 입증력이 강해집니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 남녀고용평등법 제19조 출산휴가·제19조의2 육아휴직은 사용을 이유로 한 해고·차별 처분을 명시적으로 금지합니다. 복귀 직후 일정 기간(통상 3~6개월) 동안의 처분은 인과관계 정황이 강하게 추정되는 사례가 있어, 이 시기에 발생한 모든 처분 자료를 시간순으로 보존하는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위원회 부당해고 구제 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 휴직·복귀 자료 보존</strong> (즉시) — 출산전후휴가·육아휴직 신청서·승인서, 복귀 통보서, 복귀 부서 발령서, 본래 직무와의 동일성 비교 자료.</li>\n<li><strong>2단계 — 후속 처분 자료 정리</strong> — 휴직 전·후 인사평가서, 부서변경·전보 발령서, 동료와의 처우 비교 자료, 회사 측 발언 메일·메신저.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청</strong> (해고일 3개월 이내) — 사업장 소재지 관할 지방노동위에 구제신청서 + 입증자료 각 2부 제출. 5인 미만 사업장은 노동위 관할 아니므로 민사 해고무효확인 트랙 검토.</li>\n<li><strong>4단계 — 심문회의</strong> (접수일로부터 60일 이내) — 배려의무 위반·복귀 직후 인과관계·합리성 부재·차별 정황 4단계로 입증.</li>\n<li><strong>5단계 — 판정·재심·행정소송</strong> (재심 10일·행정소송 15일 이내) — 인용 시 원직복직(휴직 전 본래 직무로) + 임금상당액 또는 금전보상명령(통상 6~12개월치) 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">출산휴가·육아휴직 복귀 직후 해고 사안에서 배려의무·인과관계 다툼 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 휴직·복귀 정황 자료 + 후속 처분 시간순 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>출산전후휴가·육아휴직 신청서·승인서</strong> — 시작·종료 시점, 회사 측 안내 사항.</li>\n<li><strong>복귀 통보서·복귀 부서 발령서</strong> — 본래 직무와의 동일성 점검.</li>\n<li><strong>휴직 전·후 인사평가서</strong> — 등급 변화·평가자·평가 항목 비교.</li>\n<li><strong>해고통보서·해고사유서</strong> — 회사가 든 사유와 휴직 정황의 관련성.</li>\n<li><strong>동료 비교 자료</strong> — 휴직 미사용 동료의 처우, 같은 시기 입사 동료 잔류 정황 (차별 정황).</li>\n<li><strong>자녀 양육 정황 자료</strong> — 자녀 연령·어린이집 등하원 등 배려의무 청구 정황.</li>\n<li><strong>최근 12개월 급여명세서</strong> — 임금상당액 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 복귀 시 "기존 자리에 다른 사람이 있다"며 한직 발령을 내는 사례가 많아, 본래 직무 잔존 여부·신규 채용 정황도 함께 확인해두면 위장 처분 정황 자료가 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"성과 부진" 주장 반박</strong> — 휴직 전 평가가 정상이었다면 복귀 직후 갑작스러운 등급 하락 자체가 합리성 부재 정황. 평가 기준·평가자 변경 여부 점검.</li>\n<li><strong>"본래 자리가 없어졌다" 주장 반박</strong> — 본래 직무가 잔존하는데 다른 사람이 맡고 있다면 정당한 복귀 거부, 직무가 사라졌다면 정리해고 4요건 점검 영역으로 전환.</li>\n<li><strong>중간 단계 부재 비례성</strong> — 복귀 직후 곧바로 평가 → 해고로 간 패턴은 절차적 비례성 위반 정황입니다.</li>\n<li><strong>인권위·노동청 진정 병행</strong> — 모성 차별 정황이 결합된 경우 국가인권위(국번없이 1331) + 노동청(labor.moel.go.kr) 진정 트랙 병행 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 부당해고·모성 보호 무료 상담.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 구제신청 절차·서식 안내.</li>\n<li><strong>여성가족부 1366·고용노동부 노동포털 (labor.moel.go.kr)</strong> — 모성 보호 신고·진정 트랙.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회사가 복귀 후 곧바로 권고사직을 권하면서 위로금을 제시하는 사례가 많아, 사직서를 자필 작성하기 전에 노동위·법률구조공단 상담을 먼저 검토하는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 육아기 근로자 일·가정 양립 배려의무',
        summary:
          '대법원 2019두59349 사건(대법원, 2023.11.16 선고)에서 법원은 사업주는 만 8세 이하 또는 초등학교 2학년 이하 자녀를 양육하는 근로자의 일·가정 양립을 지원하기 위한 배려의무를 부담하며, 자녀 양육에 따른 근무상 어려움을 육아기 근로자 개인이 전적으로 감당해야 한다고 볼 수 없다는 취지를 보였습니다. 남녀고용평등법 제19조의5의 근로시간 조정·연장근로 제한 등의 조치를 사업주가 노력해야 한다고 판시했습니다.',
        takeaway: '복귀 직후 양육 사정을 고려하지 않은 부서 배치·평가가 결국 해고로 이어진 사안은 사업주 배려의무 위반 정황으로 평가될 여지가 있어, 자녀 양육 정황과 회사 측 처분의 부조화를 시간순으로 정리하는 것이 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '출산휴가·육아휴직을 사용했다는 이유만으로 해고하면 무조건 무효인가요?',
        answer:
          '<strong>남녀고용평등법 제19조 제3항이 휴직을 이유로 한 해고를 명시적으로 금지하고 있습니다.</strong> 다만 회사는 "성과 부진" 등 다른 사유를 들어 표면화하는 사례가 많아, 휴직과 해고 사이의 인과관계 입증이 핵심 다툼 영역입니다.',
      },
      {
        question: '복귀했는데 본래 자리가 없어져 다른 부서로 발령났어요. 다툴 수 있나요?',
        answer:
          '<strong>다툴 수 있는 사례가 있습니다.</strong> 본래 직무가 잔존하는데 다른 사람이 맡고 있다면 정당한 복귀 거부 정황, 직무가 실제 사라졌다면 정리해고 4요건 점검 영역으로 전환됩니다.',
      },
      {
        question: '복귀 후 6개월 만에 해고됐어요. 시간이 흘러 인과관계 인정이 어렵지 않나요?',
        answer:
          '<strong>중간 처분 자료가 시간순으로 입증되면 6개월 정도는 충분히 인과관계가 평가될 사례가 있습니다.</strong> 복귀 직후 부서변경·평가하락 등 압박 패턴 자료를 표로 정리해두는 것이 핵심입니다.',
      },
      {
        question: '5인 미만 사업장인데 출산휴가 후 해고됐어요. 노동위 구제신청 가능한가요?',
        answer:
          '<strong>5인 미만 사업장은 근로기준법 제23조·제24조 해고 제한이 적용되지 않아 노동위 부당해고 구제 트랙은 제한적입니다.</strong> 다만 남녀고용평등법 제19조 제3항 위반은 별도 트랙으로 노동청 진정·민사 해고무효확인 검토가 가능합니다.',
      },
      {
        question: '인권위 진정과 노동위 구제신청을 동시에 할 수 있나요?',
        answer:
          '<strong>병행 가능합니다.</strong> 노동위는 부당해고 구제 트랙, 인권위는 모성 차별 시정 트랙으로 목적이 달라, 위원회 권고가 노동위·민사 단계의 자료로 활용되는 사례가 있습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '출산휴가 복귀 후 부당해고', href: '/guide/dismissal/dismissal-maternity-return-fired' },
      { label: '임신 중 해고 보호 다툼', href: '/guide/dismissal/dismissal-pregnancy-protection' },
      { label: '임신·재고용 거절 구제', href: '/guide/dismissal/dismissal-pregnancy-rehire-rejected-relief' },
      { label: '권고사직 거부 후 압박 해고', href: '/guide/dismissal/dismissal-recommended-resignation-refused-pressure' },
      { label: '해고통보서 사유 부실 다툼', href: '/guide/dismissal/dismissal-incomplete-reason-letter' },
    ],
  },

  // ─── 2. dismissal / dismissal-under-1year-tenure-relief-eligibility ───
  {
    domain: 'dismissal',
    slug: 'dismissal-under-1year-tenure-relief-eligibility',
    keyword: '입사 1년 미만 단기근로자 부당해고',
    questionKeyword: '입사 1년 미만 단기근로자인데 부당해고 다툴 수 있나요? 노동위 구제신청 가능한가요?',
    ctaKeyword: '입사 1년 미만 해고 구제 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '입사 1년 미만 부당해고 구제 4단계 절차 정리 | 로앤가이드',
      description:
        '입사 1년 미만 단기근로자인데 부당해고당했다면 해고예고 적용·노동위 구제 가능 여부 4단계 절차로 다투는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"입사한 지 8개월 됐는데 어느 날 갑자기 \'다음 주까지만 근무하라\'는 통보를 받았어요. 회사는 \'아직 1년이 안 됐으니 자유롭게 해고할 수 있다\'고 주장하는데, 정말 그런 건지 막막합니다." 입사 기간이 짧다고 해서 사용자가 자유롭게 해고할 수 있는 것은 아닙니다. 근로기준법 제23조 정당한 이유 요건은 5인 이상 사업장의 모든 근로자에게 적용되며, 노동위 부당해고 구제신청도 입사 기간과 관계없이 해고일 3개월 이내라면 가능합니다. 다만 근로기준법 제35조 해고예고 의무는 계속근로 3개월 미만은 적용 제외라는 점, 5인 미만 사업장은 해고 제한 자체가 적용되지 않는다는 점 등 적용 범위 점검이 핵심입니다.</p>',
    sections: [
      {
        title: '입사 1년 미만 부당해고 다툼에서 점검할 4가지 적용 범위',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 적용 범위 + 구제 트랙 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사업장 규모 점검</strong> — 5인 이상 상시 근로자 사업장이면 근로기준법 제23조 정당한 이유 요건 + 노동위 부당해고 구제 트랙이 모두 적용됩니다. 5인 미만이면 노동위 트랙은 제한되지만 민사 해고무효확인 + 남녀고용평등법 위반 등 별도 트랙은 가능한 사례가 있습니다.</li>\n<li><strong>② 근로기준법 제35조 해고예고 적용</strong> — 계속근로 3개월 이상이면 해고예고 30일 의무 적용. 미준수 시 30일분 통상임금 상당액 청구 가능합니다. 입사 8개월·1년 미만은 모두 해당됩니다.</li>\n<li><strong>③ 근로기준법 제27조 서면통지</strong> — 입사 기간과 무관하게 해고 사유·시기를 서면으로 통지해야 효력이 있습니다. 구두·메신저 통보만 받았다면 형식 위반 정황 자료입니다.</li>\n<li><strong>④ 시용·수습 vs 정식근로자 구분</strong> — 시용·수습 신분이라면 사용자 유보 해약권 행사로 일반 해고보다 넓게 인정되지만, 그 경우에도 합리적 이유가 필요합니다. 근로계약서에 시용·수습 명시가 없다면 정식근로자로 평가됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 입사 기간이 짧다는 사실 자체는 해고 정당성을 자동으로 인정하는 사유가 아닙니다. 회사가 "아직 1년이 안 됐다"는 이유로 해고했다면 사유의 실질을 점검하고 노동위 구제신청을 검토할 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">노동위원회 부당해고 구제 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사업장 규모·근로계약 정황 확인</strong> (즉시) — 4대보험 가입 사업장 정보(고용보험 EDI 또는 사업자등록증 첨부 자료)로 상시 근로자 수 확인, 근로계약서·취업규칙 사본 확보.</li>\n<li><strong>2단계 — 해고통보서·사유 자료 정리</strong> — 통보 형식(서면·구두), 사유의 구체성, 본인 변명 기회 부여 여부, 같은 시기 동료 처우 비교.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청</strong> (해고일 3개월 이내) — 5인 이상 사업장이면 사업장 소재지 관할 지방노동위에 구제신청서 + 증거 각 2부. 5인 미만이면 해고무효확인 민사 트랙으로 대체 검토.</li>\n<li><strong>4단계 — 심문회의</strong> (접수일 60일 이내) — 정당한 이유 부재 + 서면통지 형식 위반 + 시용·수습 적용 여부 점검 단계별 입증.</li>\n<li><strong>5단계 — 판정·해고예고수당 청구 병행</strong> — 인용 시 원직복직 + 임금상당액 또는 금전보상명령 검토. 별도로 노동청에 해고예고수당(30일분 통상임금) 진정 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">입사 1년 미만 단기근로자 해고 사안에서 적용 범위·구제 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">사업장·근로신분 자료 + 해고 절차 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>근로계약서·취업규칙</strong> — 시용·수습 명시 여부, 정식근로자 신분 점검.</li>\n<li><strong>4대보험 가입 정보</strong> — 사업장 상시 근로자 수, 본인 가입 시점.</li>\n<li><strong>해고통보서·사유서</strong> — 통보 형식·서면 여부·사유 구체성.</li>\n<li><strong>해고 전 평가·근태·실적 자료</strong> — 회사 측 사유의 실질 점검.</li>\n<li><strong>같은 시기 입사 동료 처우</strong> — 차별 정황 입증 자료.</li>\n<li><strong>최근 급여명세서</strong> — 통상임금 산정용(해고예고수당 + 임금상당액).</li>\n<li><strong>출퇴근·메일·메신저 자료</strong> — 본인 업무 정황 객관 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 입사 1년 미만이라며 해고예고 30일 통보 없이 즉시 해고한 경우, 30일분 통상임금 상당액 청구는 별도 노동청 진정으로 가능하므로 노동위 트랙과 병행해두는 것이 효율적입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"1년 미만이라 자유롭게 해고 가능" 주장 반박</strong> — 근로기준법 제23조 정당한 이유 요건은 입사 기간과 무관하게 5인 이상 사업장 모든 근로자에게 적용됩니다.</li>\n<li><strong>"시용·수습 기간이라 해약권 자유" 주장 반박</strong> — 시용·수습도 합리적 이유가 필요하며, 근로계약서에 시용·수습 명시가 없으면 정식근로자로 평가될 여지가 큽니다.</li>\n<li><strong>"5인 미만 사업장이라 해고 제한 없음" 주장 점검</strong> — 사업장 규모 자체가 다툼 대상일 수 있습니다. 4대보험 가입 사업장이 분리돼 있더라도 실질이 같은 사용자라면 합산 가능한 사례가 있습니다.</li>\n<li><strong>해고예고수당 별도 청구</strong> — 인용 여부와 무관하게 30일 전 통보 없이 해고된 경우 30일분 통상임금 청구 가능(근로기준법 제26조).</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 부당해고·해고예고수당 무료 상담.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 구제신청 절차·서식 안내.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 해고예고수당 진정 온라인 접수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 5인 미만 사업장이라도 위장 분할 정황(같은 사용자가 사업장만 분리)이 있다면 합산 평가될 여지가 있어, 사업장 간 임원·재무·업무 연관성 자료를 함께 정리해두는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 5인 미만 사업장의 인사규정에 따른 해고 제한',
        summary:
          '서울고법 2021나2045702 사건(서울고법, 2023.01.18 선고)에서 법원은 상시 근로자 4명 사업장이라도 인사규정(취업규칙)에서 직권면직·자연면직·징계면직 사유를 한정 열거한 경우, 사용자는 인사규정에 정한 사유가 있을 때만 해고할 수 있고 그 외 사유로 한 해고는 무효라는 취지를 보였습니다.',
        takeaway: '5인 미만 사업장이라도 인사규정·취업규칙에 면직사유가 한정 열거돼 있다면 그 범위를 벗어난 해고는 무효 다툼 영역이므로, 입사 시 받은 인사규정·취업규칙 사본을 확보해두는 것이 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '입사 6개월차에 해고됐어요. 노동위 구제신청 할 수 있나요?',
        answer:
          '<strong>5인 이상 사업장이면 입사 기간과 관계없이 해고일 3개월 이내 노동위 구제신청이 가능합니다.</strong> 정당한 이유 요건은 모든 근로자에게 동일하게 적용됩니다.',
      },
      {
        question: '시용기간 중 해고됐어요. 다툴 수 있나요?',
        answer:
          '<strong>시용도 합리적 이유가 필요합니다.</strong> 근로계약서에 시용 명시가 없거나 평가가 자의적이라면 노동위·민사 트랙으로 다툴 영역입니다.',
      },
      {
        question: '해고통보서 없이 카톡으로만 통보받았어요. 효력이 있나요?',
        answer:
          '<strong>근로기준법 제27조 서면통지 위반 정황입니다.</strong> 사유의 구체성·통보 형식이 점검 대상이며, 형식 위반 자체로 효력이 부정되는 사례가 있습니다.',
      },
      {
        question: '해고예고 없이 즉시 해고됐어요. 어떻게 청구하나요?',
        answer:
          '<strong>노동청에 임금체불 진정 형식으로 30일분 통상임금 상당액을 청구할 수 있습니다.</strong> 노동포털(labor.moel.go.kr) 온라인 접수 가능, 처리기간 통상 25일 내외입니다.',
      },
      {
        question: '5인 미만 사업장인데 다툴 방법이 있나요?',
        answer:
          '<strong>노동위 부당해고 구제 트랙은 제한적이지만 민사 해고무효확인 + 인사규정 위반 + 차별 시정 등 별도 트랙은 가능한 사례가 있습니다.</strong> 법률구조공단 132 무료 상담을 검토해보세요.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '시용기간 차별 평가 정규직 전환 거절', href: '/guide/dismissal/dismissal-probation-period-bias-fired' },
      { label: '해고예고수당 청구 절차', href: '/guide/dismissal/dismissal-notice-pay-claim' },
      { label: '5인 미만 사업장 부당해고', href: '/guide/dismissal/dismissal-under-5-employee-workplace' },
      { label: '해고통보서 사유 부실 다툼', href: '/guide/dismissal/dismissal-incomplete-reason-letter' },
      { label: '시용기간 해고 확인권', href: '/guide/dismissal/dismissal-trial-period-fired-confirmation-right' },
    ],
  },

  // ─── 3. dismissal / dismissal-trade-secret-suspicion-immediate-fire ───
  {
    domain: 'dismissal',
    slug: 'dismissal-trade-secret-suspicion-immediate-fire',
    keyword: '경영 영업비밀 유출 의심 즉시해고',
    questionKeyword: '경영·영업비밀 유출 의심을 사유로 회사로부터 즉시해고 통보를 받았어요. 어떻게 다투나요?',
    ctaKeyword: '영업비밀 유출 의심 해고 정리',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '영업비밀 유출 의심 즉시해고 다투는 4가지 절차 | 로앤가이드',
      description:
        '경영·영업비밀 유출 혐의를 받고 있다면 취업규칙·소명기회·비례성 4가지 포인트로 즉시해고 절차를 점검하는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"회사가 본인이 외부 메일로 사내 자료를 보냈다는 의심을 들며 \'경영 비밀 유출\' 명목으로 즉시해고 통보를 했어요. 자료는 본인 업무 검토용이었고 외부 공유 의도는 없었는데, 회사는 소명 기회도 없이 곧바로 해고를 단행했습니다. 혐의를 받고 있다면 어떻게 대응해야 할지 막막합니다." 영업·경영비밀 유출 의심을 사유로 한 즉시해고는 사용자가 단행하기 쉬운 사례지만, 그 경우에도 ① 취업규칙상 징계사유 명시, ② 사실관계 객관성 입증, ③ 소명기회 부여, ④ 해고 비례성 4가지 요건을 모두 갖춰야 정당성이 인정됩니다(대법원 일관된 법리). 노동위 부당해고 구제신청은 해고일 3개월 이내가 핵심 기한이며, 형사 영업비밀 유출 고소가 별도로 진행되는 경우에도 해고 정당성은 별개로 다툴 수 있는 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 영업비밀 유출 의심 즉시해고에서 점검할 4가지 절차 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 취업규칙 명시·사실관계 객관성·소명기회·비례성 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 취업규칙상 징계사유 명시 여부</strong> — 영업·경영비밀 유출이 취업규칙에 징계해고 사유로 명시돼 있는지, 명시 표현이 본인 행위에 그대로 적용되는지 점검. 추상적 "회사 명예 훼손"만으로 즉시해고는 비례성 평가 대상이 됩니다.</li>\n<li><strong>② 사실관계 객관성 입증 책임</strong> — 회사가 어떤 자료를 누구에게 어떤 경로로 유출했는지 객관적 입증 책임을 집니다. 본인 업무 검토용·정상 업무 흐름이라면 "유출"이 아닌 "정상 처리" 정황으로 평가될 여지가 있습니다.</li>\n<li><strong>③ 소명기회 부여 절차</strong> — 징계위원회 출석·소명 자료 제출 기회 부여 등 절차 준수 여부. 통보 후 곧바로 해고 단행은 절차 위법 정황입니다.</li>\n<li><strong>④ 비례성 — 즉시해고의 적정성</strong> — 견책·감봉·정직 등 중간 단계 부재 채 곧바로 해고로 간 경우 비례성 위반 정황입니다. 동종 행위에 대한 사내 처우 관행도 비교 자료가 됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형사 영업비밀 유출 혐의(부정경쟁방지법 위반·업무상 배임)와 노동법상 해고 정당성은 별개 트랙입니다. 형사 무혐의·기소유예가 나오더라도 해고 정당성은 별도 다툼이 필요하며, 반대로 형사 유죄가 확정되더라도 절차 위반·비례성 부재로 해고만 무효가 되는 사례도 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위원회 부당해고 구제 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고 통보·사실관계 자료 보존</strong> (즉시) — 해고통보서·사유서, 회사가 든 유출 사실 인용 부분, 본인 업무 검토 정황(메일·메신저 발송 경위·수신자 본인 여부 등).</li>\n<li><strong>2단계 — 취업규칙·인사규정 점검</strong> — 영업비밀 유출 징계사유 명시 여부, 징계위원회 절차 규정, 동종 사례 처분 관행 비교.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청</strong> (해고일 3개월 이내) — 사업장 소재지 관할 지방노동위에 구제신청서 + 증거 각 2부. 형사 트랙과 별개로 진행 가능.</li>\n<li><strong>4단계 — 심문회의</strong> (접수일 60일 이내) — 사실관계 객관성 부재 + 소명기회 미부여 + 비례성 위반 단계별 입증.</li>\n<li><strong>5단계 — 판정·재심·행정소송</strong> — 인용 시 원직복직 + 임금상당액 또는 금전보상명령(통상 6~12개월치) 검토. 형사 트랙 무혐의·기소유예 시 해고 정당성에 유리한 정황 자료로 활용 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">영업비밀 유출 의심 즉시해고 사안에서 절차·비례성 다툼 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실관계 정황 자료 + 절차 점검 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>해고통보서·사유서</strong> — 사유의 구체성, 유출 사실 인용 부분, 통보 형식 점검.</li>\n<li><strong>본인 업무 메일·메신저 자료</strong> — 발송 시점·수신자·업무 검토 정황 객관 자료.</li>\n<li><strong>업무 분담·결재 라인 자료</strong> — 본인 업무 범위와 자료 접근 권한 정황.</li>\n<li><strong>취업규칙·인사규정·징계규정</strong> — 영업비밀 유출 징계사유 명시 여부.</li>\n<li><strong>징계위원회 통지·소명 자료 요청</strong> — 절차 준수 여부 점검.</li>\n<li><strong>동종 사례 처분 관행</strong> — 사내 동종 행위에 대한 견책·감봉 등 중간 단계 처분 비교.</li>\n<li><strong>최근 12개월 급여명세서</strong> — 임금상당액 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 형사 고소를 같이 진행한다면 형사 트랙은 별도 변호인 조력이 필요하지만, 노동법상 해고 정당성 트랙은 별개로 즉시 진행할 수 있습니다. 두 트랙 자료는 신중히 분리·관리하는 것이 안전합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"즉시해고 사유에 해당" 주장 반박</strong> — 취업규칙상 즉시해고 사유 명시·본인 행위와의 부합성·동종 사례 처분 관행 점검. 추상적 "회사 명예 훼손"만으로는 즉시해고 정당성이 인정되기 어려운 사례가 있습니다.</li>\n<li><strong>"소명기회 부여했다" 주장 반박</strong> — 통지 시점부터 징계위원회 개최까지 충분한 시간(통상 7일 이상) 부여 여부, 본인 변명 자료 제출 기회 부여 여부 점검.</li>\n<li><strong>"형사 고소 진행" 주장과 분리</strong> — 형사 트랙과 노동법상 해고 정당성 트랙은 별개입니다. 형사 결과 확정 전이라도 해고만 무효 다툼 가능.</li>\n<li><strong>비례성 — 중간 단계 부재</strong> — 견책·감봉 없이 곧바로 해고로 간 패턴은 비례성 위반 정황입니다.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 부당해고 무료 상담.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 구제신청 절차·서식 안내.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 임금체불·해고예고수당 진정 트랙.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회사가 영업비밀 유출 의심을 명목으로 PC·메일·휴대폰 자료를 일방 압수·열람한 경우 개인정보 보호법 위반 여지가 있어, 자료 입수 경위·동의 절차를 함께 정리해두는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 징계사유 해석과 비위행위의 취업규칙 부합 판단',
        summary:
          '대법원 2020다270770 사건(대법원, 2021.04.29 선고)에서 법원은 근로자의 비위행위가 정당한 징계사유에 해당하는지는 취업규칙상 징계사유를 정한 규정의 객관적 의미를 합리적으로 해석해 판단해야 하며, 징계처분 통보서에 어떤 용어를 썼는지가 아니라 해당 사업장의 취업규칙에서 정한 징계사유의 의미와 내용을 기준으로 판단해야 한다는 취지를 보였습니다.',
        takeaway: '"영업비밀 유출"·"신뢰관계 파탄" 같은 추상적 용어가 통보서에 적혔더라도 본인 행위가 실제 취업규칙상 징계사유에 부합하는지가 핵심 다툼 영역이므로, 취업규칙·인사규정 사본을 먼저 확보해 명시 표현과 본인 행위를 대조해두는 것이 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '회사가 즉시해고를 통보하면서 소명기회를 주지 않았어요. 이것만으로 무효 다툼 가능한가요?',
        answer:
          '<strong>다툴 수 있는 사례가 있습니다.</strong> 취업규칙·인사규정에 징계위원회 절차 규정이 있다면 절차 미준수는 그 자체로 효력 부정 정황으로 평가됩니다.',
      },
      {
        question: '형사 고소도 같이 들어왔어요. 노동위 트랙과 어떻게 다른가요?',
        answer:
          '<strong>형사 트랙(부정경쟁방지법·업무상 배임)과 노동법상 해고 정당성은 별개입니다.</strong> 두 트랙은 분리 관리하되, 형사 무혐의·기소유예가 나오면 노동위·민사에서 유리한 정황 자료로 활용될 여지가 있습니다.',
      },
      {
        question: '본인 업무 검토용으로 자료를 메일로 보냈는데 회사가 "유출"이라고 주장합니다',
        answer:
          '<strong>발송 경위·수신자·업무 흐름이 객관적으로 입증되면 정상 업무 처리 정황으로 평가될 여지가 있습니다.</strong> 메일 발송 기록·업무 일지를 시간순으로 정리하는 것이 핵심입니다.',
      },
      {
        question: '회사가 PC·메일을 일방 압수해서 자료를 입수했어요. 그 자료가 인정되나요?',
        answer:
          '<strong>입수 경위가 점검 대상입니다.</strong> 본인 동의 없는 일방 열람·압수는 개인정보 보호법 위반 여지가 있어 자료의 신뢰성 자체가 다툼 영역으로 평가될 수 있습니다.',
      },
      {
        question: '해고 후 회사가 손해배상도 청구한다고 합니다. 같이 다투나요?',
        answer:
          '<strong>손해배상은 별도 민사 트랙입니다.</strong> 노동위 부당해고 구제 트랙과 별개로 진행되며, 해고 무효가 인정되면 손해배상 청구의 근거도 흔들리는 사례가 있습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '영업비밀 유출 해고 구제', href: '/guide/dismissal/dismissal-confidentiality-trade-secret-relief' },
      { label: '직원 보안 유출 해고 다툼', href: '/guide/dismissal/dismissal-employee-security-leak-fired' },
      { label: '징계위원회 출석 절차 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '단일 위반 징계해고 비례성', href: '/guide/dismissal/dismissal-single-violation-disciplinary-fire' },
      { label: '해고통보서 사유 부실 다툼', href: '/guide/dismissal/dismissal-incomplete-reason-letter' },
    ],
  },

  // ─── 4. dismissal / dismissal-3days-absence-auto-termination-clause ───
  {
    domain: 'dismissal',
    slug: 'dismissal-3days-absence-auto-termination-clause',
    keyword: '무단결근 3일 자동면직 직권면직',
    questionKeyword: '무단결근 3일 자동면직 조항으로 직권면직됐어요. 사정이 있었는데 다툴 수 있나요?',
    ctaKeyword: '무단결근 자동면직 다툼 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '무단결근 3일 자동면직 다투는 4단계 사정 입증 | 로앤가이드',
      description:
        '무단결근 3일 자동면직으로 직권면직됐다면 자동면직 조항 한계와 사정 입증 4단계로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"갑작스러운 가족 응급 상황으로 3일간 출근하지 못했고 회사에 사정을 알리려 했지만 첫날 통신이 닿지 않았어요. 4일째 출근하니 \'취업규칙 무단결근 3일 자동면직 조항\'에 따라 이미 직권면직 처리됐다는 통보를 받았는데, 사정이 있었는데도 곧바로 면직된 게 막막합니다." 무단결근 3일 자동면직 같은 취업규칙·인사규정 자동면직 조항은 형식상 적용되더라도, 결근 사정의 정당성·연락 시도 여부·해고 비례성을 종합 점검해야 정당성이 인정됩니다(대법원 일관된 법리). 자동면직 조항은 사실관계가 객관적으로 충족된 경우에 한해 적용되며, 사정 입증·연락 시도·복귀 의사 등이 결합되면 무효 다툼 영역입니다. 노동위 부당해고 구제신청은 해고일(자동면직일) 3개월 이내가 핵심 기한입니다.</p>',
    sections: [
      {
        title: '무단결근 3일 자동면직 다툼에서 점검할 4단계 입증',
        content:
          '<p><strong style="color:#1e3a5f">자동면직 조항의 한계 + 사정 입증 + 절차 점검 4단계로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 자동면직 조항의 한계</strong> — "무단결근 3일 자동면직"은 형식 요건이지만, 결근이 "무단"인지 여부 자체가 다툼 영역입니다. 응급·질병·재해 등 정당한 사정이 있다면 "무단"이 아닌 "사정 결근"으로 평가될 여지가 있습니다.</li>\n<li><strong>② 결근 사정의 정당성 입증</strong> — 가족 응급, 본인 질병(진단서·119 출동 기록), 자연재해, 통신 두절 등 객관 자료로 사정의 정당성 입증. 정당한 사정이면 "무단" 요건이 충족되지 않습니다.</li>\n<li><strong>③ 연락 시도 자료</strong> — 결근 기간 중 회사·상사에게 연락 시도한 자료(전화·문자·카톡 발신 기록, 가족·동료를 통한 전달 시도). 일부 시도라도 있다면 "무단" 평가가 약해집니다.</li>\n<li><strong>④ 절차·비례성 점검</strong> — 자동면직 통보 형식(서면·구체적 사유), 본인 사정 확인 절차 부재 여부, 면담·복귀 의사 청취 절차 부재 등 절차 점검. 같은 사내 동종 사례 처분 관행도 비교 자료가 됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자동면직 조항이 있어도 회사가 "사정 확인 없이 곧바로 처리한다"는 의미는 아닙니다. 결근 사정이 객관적으로 정당하다면 자동면직 조항이 적용되지 않으며, 사정 확인 절차 부재 자체가 다툼 영역으로 평가될 여지가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">노동위원회 부당해고 구제 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 결근 사정·연락 시도 자료 보존</strong> (즉시) — 가족 응급·질병 진단서·119 출동 기록, 통신 발신 내역, 가족·동료를 통한 전달 시도 자료.</li>\n<li><strong>2단계 — 자동면직 통보·취업규칙 점검</strong> — 자동면직 통보서, 취업규칙·인사규정 면직조항 사본, 동종 사례 처분 관행 자료.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청</strong> (해고일 3개월 이내) — 사업장 소재지 관할 지방노동위에 구제신청서 + 증거 각 2부 제출. 5인 미만 사업장은 민사 해고무효확인 트랙 검토.</li>\n<li><strong>4단계 — 심문회의</strong> (접수일 60일 이내) — 결근 사정 정당성 + 연락 시도 자료 + 절차 부재 + 비례성 단계별 입증.</li>\n<li><strong>5단계 — 판정·재심·행정소송</strong> — 인용 시 원직복직 + 임금상당액 또는 금전보상명령(통상 6~12개월치) 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">무단결근 자동면직 사안에서 사정 입증·절차 다툼 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">결근 사정 자료 + 자동면직 절차 점검 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>결근 사정 객관 자료</strong> — 진단서·소견서·119 출동 기록, 가족 응급 정황 자료.</li>\n<li><strong>통신·연락 시도 자료</strong> — 결근 기간 중 전화·문자·카톡 발신 기록, 가족·동료를 통한 전달 시도 정황.</li>\n<li><strong>자동면직 통보서</strong> — 통보 형식·서면·구체적 사유 인용 부분.</li>\n<li><strong>취업규칙·인사규정·면직조항</strong> — 자동면직 사유의 명시 표현, 사정 확인 절차 규정 점검.</li>\n<li><strong>본인 복귀 시점·복귀 의사 자료</strong> — 4일째·복귀 시도 정황.</li>\n<li><strong>동종 사례 처분 관행</strong> — 사내 동종 결근 사례 처분 비교 자료.</li>\n<li><strong>최근 12개월 급여명세서</strong> — 임금상당액 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가족 응급 상황이라면 응급실 진료기록, 119 출동 기록, 가족 진단서 등이 강력한 객관 자료가 됩니다. 결근 직후 진료·진단을 받아두지 못했다면 결근 종료 직후라도 객관 자료 확보를 검토해보세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"자동면직 조항 적용했을 뿐" 주장 반박</strong> — 자동면직 조항도 결근이 "무단"인지가 사실관계 평가 대상이며, 정당한 사정이 있다면 "무단" 요건이 충족되지 않는 사례가 있습니다.</li>\n<li><strong>"연락 안 했다" 주장 반박</strong> — 통신 두절·응급 정황이라면 연락 불가능성 자체가 정황 자료. 일부 발신 기록·가족 전달 시도가 있다면 "무단" 평가 약화.</li>\n<li><strong>"사정 확인 의무 없다" 주장 반박</strong> — 인사규정에 사정 확인·면담 절차가 있거나 동종 사례에서 확인 절차가 있었다면 절차 위반 정황입니다.</li>\n<li><strong>비례성 — 자동면직 vs 견책·정직</strong> — 결근 사정이 일부 인정된다면 자동면직보다 견책·정직 등 중간 단계가 적정한 사례가 많아 비례성 위반 정황입니다.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 부당해고·자동면직 무료 상담.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 구제신청 절차·서식 안내.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 해고예고수당·임금체불 진정 병행 트랙.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 자동면직 통보가 우편·구두로만 이뤄졌다면 근로기준법 제27조 서면통지 요건 미흡 정황으로 평가될 여지가 있어, 통보 방식·시점·내용을 즉시 메모해두는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 인사규정 면직사유 한정 열거의 효력',
        summary:
          '서울고법 2021나2045702 사건(서울고법, 2023.01.18 선고)에서 법원은 사용자의 인사규정이 직원의 신분보장을 규정하면서 직권면직·자연면직·징계면직의 3가지 면직사유를 한정 열거한 경우, 사용자는 인사규정에 정한 사유가 있을 때만 해고할 수 있고 그 외 사유로 한 해고는 무효라는 취지를 보였습니다.',
        takeaway: '취업규칙·인사규정에 자동면직 사유가 한정 열거돼 있다면 그 명시 표현이 본인 결근 정황에 그대로 부합하는지가 핵심 다툼 영역이므로, 면직조항 사본을 확보해 명시 표현과 본인 사정을 대조해두는 것이 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '응급 사정으로 결근했는데 진단서가 없어요. 다툴 수 있나요?',
        answer:
          '<strong>진단서 외 객관 자료(119 출동 기록·약 처방전·가족 진료 기록 등)도 사정 입증 자료가 됩니다.</strong> 결근 종료 직후라도 진료·진단을 받아 사후 자료 확보를 검토해보세요.',
      },
      {
        question: '회사에 결근 사정을 알릴 방법이 없었어요. 그것만으로 다툴 수 있나요?',
        answer:
          '<strong>통신 두절·응급 정황이라면 연락 불가능성 자체가 정황 자료입니다.</strong> 일부 발신 시도·가족을 통한 전달 시도 자료가 있으면 "무단" 평가가 약해지는 사례가 있습니다.',
      },
      {
        question: '자동면직 통보 후 복귀 의사를 밝혔는데도 거부됐어요',
        answer:
          '<strong>복귀 시점·복귀 의사 표시 자료가 핵심입니다.</strong> 회사가 사정 확인·복귀 의사 청취 없이 면직을 유지했다면 절차 부재 정황으로 평가될 여지가 있습니다.',
      },
      {
        question: '취업규칙에 자동면직 조항 자체가 없는데 면직됐어요',
        answer:
          '<strong>자동면직 조항이 없다면 일반 해고 절차(징계위원회·소명기회)가 적용됩니다.</strong> 절차 미준수는 그 자체로 효력 부정 정황입니다.',
      },
      {
        question: '같은 사내에서 결근 5일에도 견책만 받은 동료가 있어요',
        answer:
          '<strong>동종 사례 처분 관행은 비례성 평가의 핵심 자료입니다.</strong> 같은 결근 사유에 대한 사내 처분 관행이 자동면직보다 약한 처분이었다면 비례성 위반 정황으로 평가됩니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '취업규칙 면직사유 한정 다툼', href: '/guide/dismissal/dismissal-rule-of-employment-cause-limited' },
      { label: '단일 위반 징계해고 비례성', href: '/guide/dismissal/dismissal-single-violation-disciplinary-fire' },
      { label: '징계위원회 출석 절차 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '경고 누적 해고 효력 다툼 5가지', href: '/guide/dismissal/dismissal-warning-letter-cumulative-validity' },
      { label: '해고통보서 사유 부실 다툼', href: '/guide/dismissal/dismissal-incomplete-reason-letter' },
    ],
  },

  // ─── 5. dismissal / dismissal-union-membership-activity-cause ───
  {
    domain: 'dismissal',
    slug: 'dismissal-union-membership-activity-cause',
    keyword: '노조 가입 노조활동 사유 해고',
    questionKeyword: '노동조합 가입·노조활동을 사유로 해고됐어요. 부당해고와 부당노동행위 어떻게 다투나요?',
    ctaKeyword: '노조활동 사유 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '노조활동 사유 해고 다투는 4단계 부당노동행위 | 로앤가이드',
      description:
        '노동조합 가입·노조활동을 사유로 해고됐다면 노동조합법 제81조 부당노동행위와 부당해고 4단계로 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"회사 내 새 노조에 가입하고 활동을 시작한 직후부터 부서변경·평가하락·징계가 잇따랐고 결국 \'근무 태도 불량\'으로 해고 통보를 받았어요. 사유는 추상적인데 노조 가입 시점과 너무 가까워 의심스럽고, 어떻게 다퉈야 할지 막막합니다." 노동조합법 제81조 제1항 제1호·제5호는 노동조합 가입·조직·활동을 사유로 한 해고·불이익 처분을 부당노동행위로 명시 금지하고, 같은 법 제82조는 부당노동행위 구제신청을 노동위원회에 할 수 있도록 규정합니다. 부당해고 구제신청과 부당노동행위 구제신청은 노동위에 동시에 제기 가능한 트랙이며, 노조 가입·활동과 해고 사이의 인과관계 입증이 핵심 영역입니다. 두 신청 모두 해고일·처분일 3개월 이내가 기한입니다.</p>',
    sections: [
      {
        title: '노조 가입·노조활동 사유 해고에서 다툴 수 있는 4단계 입증',
        content:
          '<p><strong style="color:#1e3a5f">노동조합법 제81조 부당노동행위 + 부당해고 4단계로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 노동조합법 제81조 제1호 부당노동행위 — 불이익 처분</strong> — 노동조합 가입·조직·활동을 사유로 한 해고·전보·평가하락 등 불이익 처분은 명시적으로 금지됩니다. 처분과 노조 활동 사이의 인과관계 정황이 핵심.</li>\n<li><strong>② 노동조합 활동 시점과 처분 시간 근접성</strong> — 노조 가입·활동 시작 시점부터 처분까지의 시간순 자료. 3~6개월 내 부서변경·평가하락·해고가 이어졌다면 강력한 인과관계 정황입니다.</li>\n<li><strong>③ 회사 측 노조 적대 발언·행위</strong> — 관리자·인사담당자의 노조 가입 만류 발언, 노조원과 비노조원 차별 대우, 노조 사무실 미제공 등 사용자 적대 정황 자료(메일·메신저·녹음·증인 진술).</li>\n<li><strong>④ 처분 사유의 추상성·합리성 부재</strong> — 회사가 든 "근무 태도 불량"·"성과 부진" 같은 추상적 사유의 실질 점검. 노조 활동 전 평가가 정상이었다면 합리성 결여 정황입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 부당노동행위 구제신청은 부당해고 구제신청과 별개로 동시 제기 가능합니다. 부당해고는 본인 구제(원직복직·임금상당액), 부당노동행위는 노조 단결권 보호(공고문 게시·관행 시정) 트랙이며, 두 신청을 병행하면 입증력이 강해집니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">노동위원회 부당해고 + 부당노동행위 구제 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 노조 활동·처분 자료 시간순 정리</strong> (즉시) — 노조 가입원·활동 기록, 처분 통보서, 회사 측 적대 발언·행위 자료, 노조원·비노조원 처우 비교 자료.</li>\n<li><strong>2단계 — 부당해고 + 부당노동행위 구제신청서 동시 작성</strong> — 사업장 소재지 관할 지방노동위에 두 신청서 + 증거 각 2부.</li>\n<li><strong>3단계 — 노동위 접수</strong> (해고일·처분일 3개월 이내) — 두 신청은 동시 접수·병합 심리 가능. 신청자는 본인(부당해고) + 노동조합(부당노동행위 — 단결권 침해) 모두 가능.</li>\n<li><strong>4단계 — 심문회의</strong> (접수일 60일 이내) — 노조 활동 시간 근접성 + 회사 적대 정황 + 사유 추상성 + 차별 정황 단계별 입증. 부당해고·부당노동행위 두 트랙 동시 심리.</li>\n<li><strong>5단계 — 판정·재심·행정소송</strong> — 부당해고 인용 시 원직복직 + 임금상당액 또는 금전보상명령. 부당노동행위 인용 시 사용자에 공고문 게시·재발 방지 명령 등 단결권 보호 조치 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">노조활동 사유 해고 사안에서 부당노동행위·부당해고 병행 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">노조 활동 자료 + 처분·차별 정황 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>노조 가입원·활동 기록</strong> — 가입 시점, 임원·대의원 직책, 단체교섭·집회 참여 기록.</li>\n<li><strong>처분 통보서·해고통보서</strong> — 처분 시점·사유·통보 형식 점검.</li>\n<li><strong>노조 활동 전·후 인사평가서</strong> — 등급 변화·평가자 동일성·평가 항목 비교.</li>\n<li><strong>회사 측 적대 발언·행위 자료</strong> — 관리자·인사담당자 발언 메일·메신저·녹음, 노조 사무실 미제공·집회 방해 정황.</li>\n<li><strong>노조원·비노조원 처우 비교</strong> — 같은 부서 내 평가·전보·징계 정황 비교.</li>\n<li><strong>노조 측 입장서·노조위원장 진술서</strong> — 노조 측 부당노동행위 구제신청 동참 자료.</li>\n<li><strong>최근 12개월 급여명세서</strong> — 임금상당액 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 부당노동행위 구제신청은 본인 외에 노동조합 명의로도 별도 신청 가능합니다. 두 신청이 결합되면 사용자 측 입증 부담이 더 커지므로, 노조위원장과 사전 상의해 동시 진행을 검토해보세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"노조와 무관한 사유" 주장 반박</strong> — 추상적 "근무 태도 불량"의 실질 점검. 노조 활동 전 평가가 정상이었다면 갑작스러운 평가 하락 자체가 합리성 부재 정황입니다.</li>\n<li><strong>"적대 발언 한 적 없다" 주장 반박</strong> — 메일·메신저·녹음 등 객관 자료 외에도 동료 증인 진술이 강력한 정황 자료가 됩니다. 노조원 vs 비노조원 처우 비교 표도 효과적.</li>\n<li><strong>인사고과·승격 차별 별도 트랙</strong> — 대법원 2023두41864 취지에 따라 인사고과·승격 차별이 "계속하는 행위"로 평가되면 제척기간 기산점이 달라질 수 있어, 누적된 차별을 묶어 신청 검토.</li>\n<li><strong>노동조합 명의 별도 신청</strong> — 단결권 침해 부당노동행위는 노조 명의로 별도 신청 가능, 본인 구제와 병행하면 입증력 강화.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 부당해고·부당노동행위 무료 상담.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 구제신청 절차·서식 안내.</li>\n<li><strong>한국노총 1577-2569·민주노총 02-2670-9100</strong> — 노조 차원 법률 지원·단체 대응 안내.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 노조 가입 직후 부서변경·전보 등 우회 처분이 단계적으로 이어진 사례가 많아, 가입 시점부터 모든 처분을 시간순 표로 정리해두는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 부당노동행위와 단결권 침해 결과 발생 요부',
        summary:
          '대법원 2017두54005 사건(대법원, 2022.05.12 선고)에서 법원은 사용자가 한 발언이 노동조합의 조직·운영을 지배하거나 이에 개입하는 행위로서 부당노동행위에 해당하는지는 발언 내용·시점·노조 운영에 미치는 영향 등을 종합해 판단하며, 부당노동행위 성립에 반드시 근로자의 단결권 침해라는 결과 발생을 요하지 않는다는 취지를 보였습니다. 또한 사업주를 위해 행동하는 자의 행위도 사업주의 부당노동행위로 인정될 수 있다고 판시했습니다.',
        takeaway: '단결권 침해 결과가 명백히 발생하지 않았더라도 사용자·관리자의 노조 적대 발언·행위는 부당노동행위로 평가될 여지가 있어, 발언 시점·내용·청자 자료를 폭넓게 보존해두는 것이 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '부당해고와 부당노동행위 구제신청을 동시에 하는 게 좋나요?',
        answer:
          '<strong>병행 신청을 검토하는 것이 일반적입니다.</strong> 부당해고는 본인 구제 트랙, 부당노동행위는 노조 단결권 보호 트랙으로 목적이 달라 두 트랙이 서로의 입증을 보완하는 사례가 많습니다.',
      },
      {
        question: '노조 가입 시점이 명확하지 않은데 어떻게 입증하나요?',
        answer:
          '<strong>노조 가입원 사본·노조 측 회원 명부 발췌·집회 참여 기록 등이 객관 자료입니다.</strong> 회사가 가입 사실을 알게 된 시점 자료(노조 측 통지·회사 측 발언)도 핵심 정황 자료가 됩니다.',
      },
      {
        question: '회사가 "노조 가입 만류한 적 없다"고 주장합니다',
        answer:
          '<strong>관리자·인사담당자 발언은 메일·메신저·녹음·동료 증인 진술 등 다양한 경로로 입증 가능합니다.</strong> 발언 시점·청자·내용을 메모해두는 것이 핵심입니다.',
      },
      {
        question: '인사고과 차별이 누적됐는데 제척기간 3개월이 지났어요. 다툴 수 있나요?',
        answer:
          '<strong>대법원 2023두41864 취지에 따라 누적된 차별이 "계속하는 행위"로 평가되면 제척기간 기산점이 달라질 수 있는 사례가 있습니다.</strong> 인사고과·승격 차별의 시간적 연속성을 입증하면 다툴 영역이 됩니다.',
      },
      {
        question: '부당노동행위 인용되면 어떤 구제가 이뤄지나요?',
        answer:
          '<strong>사용자에 대한 공고문 게시·재발 방지 명령·집단 협상 절차 시정 등 단결권 보호 조치가 검토됩니다.</strong> 본인 부당해고 구제(원직복직·임금상당액)와는 별개 트랙입니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '노조활동 보복 해고 구제', href: '/guide/dismissal/dismissal-union-activity-retaliation' },
      { label: '노조 사무실 미제공 단결권 침해', href: '/guide/dismissal/dismissal-union-office-eviction' },
      { label: '권고사직 거부 후 압박 해고', href: '/guide/dismissal/dismissal-recommended-resignation-refused-pressure' },
      { label: '징계위원회 출석 절차 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '해고통보서 사유 부실 다툼', href: '/guide/dismissal/dismissal-incomplete-reason-letter' },
    ],
  },
];
