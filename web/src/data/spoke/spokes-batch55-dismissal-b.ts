import { SpokePage } from '../spoke-pages';

// batch55 dismissal-b 3개 (스포크 3·4·5)
//
// 고유 존재 이유:
// 3. 이 페이지는 정리해고 50명을 일괄 진행하면서 본인 1명에게만 사전통지·협의가 누락된 근로자가 근로기준법 제24조 제3항 50일 사전통지·성실협의 의무 위반 절차 다툼 트랙으로 부당해고 구제를 잡을 수 있도록 돕는 페이지다.
// 4. 이 페이지는 수습기간 만료 직전 평가 점수표·기준 없이 "부적합" 한 줄로 본채용이 거부된 근로자가 합리적 이유 부재·사유 서면 명시 위반·평가의 자의성 5가지 다툼 포인트로 노동위 구제신청을 검토할 수 있도록 돕는 페이지다.
// 5. 이 페이지는 회사 폐업을 이유로 해고된 직후 사장이 같은 업종 사업체를 곧바로 재개한 사안에서, 위장폐업 4가지 입증 포인트(실체 동일성·해고 시점 인접성·재개 사업 동종성·근로자 배제 의도)로 해고 무효 트랙을 잡을 수 있도록 돕는 페이지다.

export const spokesBatch55DismissalB: SpokePage[] = [
  // ─── 3. dismissal / dismissal-collective-redundancy-50plus-one-omitted-notice ───
  {
    domain: 'dismissal',
    slug: 'dismissal-collective-redundancy-50plus-one-omitted-notice',
    keyword: '정리해고 사전통지 누락',
    questionKeyword: '정리해고 50명 진행됐는데 저 1명만 50일 사전통지·협의 절차가 누락됐어요. 다툴 수 있나요?',
    ctaKeyword: '정리해고 사전통지 누락 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '정리해고 사전통지 누락 다투는 4단계 | 로앤가이드',
      description:
        '정리해고 50명 일괄 통보 중 본인만 50일 사전통지·협의 절차가 누락됐다면 근로기준법 제24조 절차 위반 4단계 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"우리 회사가 부서 통폐합으로 50명을 정리해고했는데 다른 49명은 한 달 반 전부터 설명회·면담을 받았어요. 그런데 저는 어느 날 갑자기 \'다음 주 자로 정리해고 대상\'이라는 메일 한 통을 받았고, 노동조합·근로자대표와의 협의 자리에도 제 명단이 빠져 있었습니다." 정리해고는 단순한 해고가 아니라 근로기준법 제24조 4요건(긴박한 경영상 필요 + 해고회피 노력 + 합리적·공정한 대상자 선정 + 50일 전 사전통지·성실협의)을 모두 충족해야 정당성이 인정되는 사례가 있습니다. 49명을 적법하게 진행했더라도 1명에게만 절차가 누락됐다면 그 1명에 대한 정리해고는 절차적 정당성을 잃을 여지가 있어, 노동위 구제신청 단계에서 다툴 영역으로 평가됩니다.</p>',
    sections: [
      {
        title: 'Q. 50명 중 본인만 사전통지가 누락된 정리해고에서 다툴 수 있는 4가지 절차 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 50일 사전통지·성실협의·대상자 선정·서면통지 4가지 절차 위반 포인트로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 근로기준법 제24조 제3항 50일 사전통지 의무</strong> — 사용자는 정리해고를 하려면 해고하려는 날의 50일 전까지 근로자대표에게 통보하고 성실하게 협의해야 합니다. 본인만 명단 누락·통보 누락이 있었다면 그 1명에 대한 절차 충족 여부는 별도로 점검할 영역입니다.</li>\n<li><strong>② 성실협의 의무</strong> — 49명에 대해 협의가 진행됐어도 본인이 협의 명단에서 빠져 의견 제시 기회를 갖지 못했다면 협의 의무 미이행 정황입니다. 협의 자리 참석자·논의 의제·결과 자료를 점검합니다.</li>\n<li><strong>③ 합리적·공정한 대상자 선정 기준</strong> — 49명과 본인이 같은 직군·기준에 의해 선정됐는지, 본인만 다른 잣대(개인 평가·근태 등)가 적용됐다면 정리해고 4요건이 아니라 통상해고로 우회한 정황 자료가 됩니다.</li>\n<li><strong>④ 근로기준법 제27조 서면통지</strong> — 메일 1통·메신저 통보만으로 사유와 시기를 통보했다면 형식 위반 정황입니다. 해고사유서가 추상적이거나 본인에게만 사유 설명이 부족했다면 별도 다툼 영역으로 평가됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정리해고는 회사 전체 차원에서 4요건 충족 여부를 보지만, 절차 충족 여부는 해고 대상자 개별로 평가되는 사례가 있습니다. 회사가 "다른 49명은 적법했으니 절차에 문제없다"고 주장해도, 본인 1명에 대한 통지 누락·협의 누락은 별도 다툼 영역으로 점검할 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 구제 4단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위원회 부당해고 구제 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정리해고 절차 자료 시간순 정리</strong> (즉시) — 회사가 49명에 대해 진행한 설명회·면담·근로자대표 협의 일정·참석자·의결사항 자료, 본인이 빠진 시점·이유 자료, 본인이 받은 통보 형식·날짜.</li>\n<li><strong>2단계 — 4요건 점검 자료 준비</strong> — 회사 재무제표·매출 흐름(긴박한 경영상 필요), 신규채용·임원감축·임금동결 등 해고회피 노력 자료, 대상자 선정기준 문서, 본인 선정 사유.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청</strong> (해고일 3개월 이내) — 사업장 소재지 관할 지방노동위원회에 구제신청서 + 입증자료 각 2부 제출. 절차 위반 + 4요건 결여 양 갈래로 신청서 작성.</li>\n<li><strong>4단계 — 심문회의·판정·재심·행정소송</strong> (접수 60일 이내 심문 → 재심 10일·행정소송 15일) — 인용 시 원직복직 + 임금상당액 또는 금전보상명령(통상 6~12개월치) 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">정리해고 사전통지 누락 사안에서 4요건·절차 위반 다툼 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사의 정리해고 진행 자료 + 본인 누락 정황 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>정리해고 통보서·해고사유서</strong> — 본인 수령 형식(메일·서면)과 일자, 사유의 구체성.</li>\n<li><strong>회사 측 50일 사전통지 자료</strong> — 노동조합·근로자대표 통보 공문·메일·게시문 사본.</li>\n<li><strong>설명회·면담 일정표</strong> — 49명 진행 일정과 본인이 빠진 시점·사유.</li>\n<li><strong>근로자대표 협의 회의록</strong> — 협의 의제·참석자·합의 사항.</li>\n<li><strong>대상자 선정기준 문서</strong> — 평가표·기준·점수 산정 자료.</li>\n<li><strong>회사 재무·매출 자료</strong> — 긴박한 경영상 필요 + 해고회피 노력 점검 자료.</li>\n<li><strong>최근 12개월 급여명세서</strong> — 임금상당액 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 본인을 협의 명단에서 누락한 후 사후에 면담 1회로 절차를 갈음했다면, 그 면담 일자·내용·결정 시점을 시간순으로 정리해 "성실협의가 아닌 형식적 통보"임을 입증하는 자료로 활용할 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"근로자대표와 협의했으니 개별 통지 불필요" 주장 점검</strong> — 50일 사전통지는 근로자대표 차원이지만, 본인이 정리해고 대상자임을 사전에 알고 의견 제시 기회가 있었는지는 별도 다툼 영역입니다.</li>\n<li><strong>"긴박한 경영상 필요" 주장 반박</strong> — 같은 시기 신규채용·임원 인상·자회사 설립 정황이 있다면 4요건 1번 결여 자료가 됩니다.</li>\n<li><strong>"본인은 다른 사유로 추가 정리" 주장 점검</strong> — 49명과 본인의 선정 기준이 다르다면 정리해고가 아닌 통상해고로 우회한 정황으로, 정당한 이유·서면통지·소명기회 별도 점검 영역으로 전환됩니다.</li>\n<li><strong>해고예고수당 별도 청구</strong> — 30일 전 통보 없이 해고된 경우 30일분 통상임금 별도 청구(근로기준법 제26조).</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 정리해고·부당해고 무료 상담.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 구제신청 절차·서식 안내.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 해고예고수당 진정 온라인 접수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회사가 정리해고 절차 누락을 인정하면서도 "위로금에 절차 흠 보전 포함"으로 합의를 유도하는 사례가 있어, 합의서 작성 전 노동위·법률구조공단 상담을 먼저 검토하는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정리해고 4요건과 60일 사전통지·성실협의 의무',
        summary:
          '대법원 2003두4119 사건(대법원, 2003.11.13 선고)에서 법원은 사용자가 경영상의 이유에 의하여 근로자를 해고하려면 긴박한 경영상의 필요가 있어야 하고, 해고를 피하기 위한 노력을 다해야 하며, 합리적이고 공정한 기준에 따라 대상자를 선정해야 하고, 해고를 피하기 위한 방법과 해고의 기준 등을 근로자의 과반수로 조직된 노동조합 또는 근로자대표에게 사전 통보하고 성실하게 협의해야 한다고 판시했습니다(현행 근로기준법 제24조는 50일 전 통보).',
        takeaway: '4요건은 확정적·고정적이지 않고 종합 판단되지만, 본인 1명에 대한 사전통지·협의 누락은 절차적 정당성 결여 정황으로 평가될 여지가 있어, 49명에 대한 자료와 본인 누락 정황을 시간순으로 비교 정리하는 것이 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '근로자대표와 협의가 끝났는데도 본인 1명에게 사전통지가 안 됐다면 다툴 수 있나요?',
        answer:
          '<strong>다툴 영역입니다.</strong> 본인이 정리해고 대상이라는 점을 사전에 알고 협의에 참여할 기회가 있었는지는 개별 평가되는 사례가 있어, 협의 명단·면담 일정 자료를 시간순으로 정리해두는 것이 핵심입니다.',
      },
      {
        question: '50일이 아니라 30일 전 통보였어요. 절차 위반인가요?',
        answer:
          '<strong>근로기준법 제24조 제3항은 50일 전까지 통보·협의를 요구합니다.</strong> 다만 단순한 기간 미달만으로 무효가 자동 인정되지는 않고 다른 4요건 충족 정도와 종합 판단되는 사례가 있어, 50일 미달 + 협의 형식·내용 두 갈래로 입증하는 것이 효율적입니다.',
      },
      {
        question: '회사가 "본인은 정리해고가 아니라 일반해고"라고 주장해요. 어떻게 다투나요?',
        answer:
          '<strong>실질 판단 영역입니다.</strong> 같은 시기 49명과 같은 사유·기준으로 진행됐다면 정리해고로 평가될 여지가 있어, 통보문 표현보다 실질을 점검하는 자료가 핵심입니다.',
      },
      {
        question: '노동위 구제 + 민사 해고무효확인 동시에 가능한가요?',
        answer:
          '<strong>병행 가능합니다.</strong> 다만 노동위 트랙이 빠르고 비용이 적어 통상 노동위를 우선하고 결과에 따라 민사 단계 진행 여부를 검토하는 사례가 많습니다.',
      },
      {
        question: '회사가 정리해고 직후 같은 직무로 신규채용 공고를 냈어요. 다툴 수 있나요?',
        answer:
          '<strong>해고회피 노력 위반 정황 자료입니다.</strong> 정리해고 후 같은 직무·같은 조건의 신규채용은 4요건 2번(해고회피 노력) 결여 정황으로 평가될 여지가 있어, 채용공고 캡처·날짜를 보존해두세요.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '정리해고 4요건 점검', href: '/guide/dismissal/dismissal-collective-redundancy-criteria' },
      { label: '경영상 해고 협의 의무', href: '/guide/dismissal/dismissal-management-consultation' },
      { label: '해고통보서 사유 부실 다툼', href: '/guide/dismissal/dismissal-incomplete-reason-letter' },
      { label: '권고사직 거부 후 압박 해고', href: '/guide/dismissal/dismissal-recommended-resignation-refused-pressure' },
      { label: '입사 1년 미만 부당해고 구제', href: '/guide/dismissal/dismissal-under-1year-tenure-relief-eligibility' },
    ],
  },

  // ─── 4. dismissal / dismissal-probation-no-evaluation-table-unfit ───
  {
    domain: 'dismissal',
    slug: 'dismissal-probation-no-evaluation-table-unfit',
    keyword: '수습 평가 점수표 없이 부적합',
    questionKeyword: '수습 평가 점수표·기준도 없이 "부적합" 한 줄로 본채용 거부됐어요. 다툴 수 있나요?',
    ctaKeyword: '수습 부적합 본채용 거부 정리',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '수습 평가 없이 부적합 통보 받았다면 — 5가지 다툼 | 로앤가이드',
      description:
        '수습기간 만료 직전 평가 점수표·기준 없이 "부적합" 한 줄로 본채용 거부됐다면 합리적 이유 부재 5가지 다툼 포인트와 노동위 구제 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"3개월 수습으로 입사했는데 만료 일주일 전에 \'근무평가 결과 부적합으로 본채용을 거부합니다\'는 메일 한 통을 받았어요. 평가 점수표·기준은 한 번도 받아본 적이 없고, 중간 피드백도 없었습니다. 면담을 요청했더니 \'이미 결정된 사항\'이라며 거절당했고요." 시용·수습기간 중 본채용 거부는 사용자의 유보 해약권 행사로 일반 해고보다 넓게 인정되는 사례가 있지만, 그 경우에도 객관적·합리적 이유와 사회통념상 상당성이 필요합니다. 평가 점수표·기준·중간 피드백이 전혀 없는 상태에서 "부적합" 한 줄로 본채용을 거부했다면 합리성 부재 + 서면 사유 명시 위반 + 평가의 자의성 등 5가지 다툼 포인트로 노동위 구제신청을 검토할 수 있는 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 수습 평가표·기준 없이 본채용 거부됐을 때 다툴 수 있는 5가지 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 평가 객관성·중간 피드백·서면 명시·시용 명시·합리성 5가지로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 평가의 객관성·자의성</strong> — 평가 항목·기준·점수가 사전에 공개됐는지, 평가자가 1명 자의 판단에 의존했는지 점검합니다. 객관 기준 없는 "부적합" 한 줄은 자의성 정황 자료입니다.</li>\n<li><strong>② 중간 피드백·개선 기회 부재</strong> — 수습 기간 중 1~2회 중간 평가·피드백이 있었는지, 미흡 사항을 통보하고 개선 기회를 부여했는지 점검합니다. 만료 직전 통보만 있었다면 절차적 비례성 결여 정황입니다.</li>\n<li><strong>③ 근로기준법 제27조 서면 사유 명시</strong> — 본채용 거부 통지에 사유가 구체적으로 적혀 있는지, "부적합" 한 줄·"평가 결과" 한 줄로 끝났다면 형식 위반 정황으로 평가됩니다.</li>\n<li><strong>④ 시용·수습 명시 여부</strong> — 근로계약서에 시용·수습이 명시돼 있는지, 명시 없이 일반 근로계약을 체결한 경우 정식근로자로 평가돼 일반 해고 정당성 기준이 적용되는 사례가 있습니다.</li>\n<li><strong>⑤ 사회통념상 상당성</strong> — 본채용 거부 사유가 단발성 사건·소수 의견·사적 갈등 등 본채용 거부 정도에 이르지 않는다면 합리성 결여 정황 자료가 됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 시용·수습이라도 본채용 거부에는 객관적·합리적 이유가 필요합니다. 평가 기준 자체가 사전에 공개되지 않고 결과 점수표도 없는 상태에서 "부적합" 한 줄로 거부됐다면 합리성 + 서면 명시 + 평가 자의성 양 갈래로 노동위 구제 트랙을 검토할 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 노동위 구제 4단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위원회 부당해고 구제 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근로계약·평가 자료 정리</strong> (즉시) — 근로계약서(시용·수습 명시 여부), 회사 인사규정·취업규칙(평가 항목·기준), 입사 후 받은 평가표·피드백·메일.</li>\n<li><strong>2단계 — 본채용 거부 통보 자료 정리</strong> — 통보 형식(메일·서면), 사유의 구체성, 면담 요청·거부 정황, 같은 시기 입사 동료의 본채용 결과 비교 자료.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청</strong> (본채용 거부일 3개월 이내) — 5인 이상 사업장이면 사업장 소재지 관할 지방노동위에 구제신청서 + 입증자료 각 2부 제출.</li>\n<li><strong>4단계 — 심문회의·판정</strong> (접수 60일 이내) — 평가 객관성·중간 피드백·서면 명시·시용 명시·합리성 5단계 입증. 인용 시 원직복직(정식 근로자 신분) + 임금상당액 또는 금전보상명령 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">수습 평가 부재 본채용 거부 사안에서 합리성·자의성 다툼 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 시용·수습 신분 자료 + 평가 부재 정황 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>근로계약서</strong> — 시용·수습 기간·평가 기준 명시 여부.</li>\n<li><strong>취업규칙·인사규정</strong> — 수습 평가 절차·기준 조항.</li>\n<li><strong>본채용 거부 통보서</strong> — 통보 형식·사유 구체성.</li>\n<li><strong>입사 후 받은 평가표·피드백</strong> — 부재 자체가 입증 자료(없다는 사실 증명).</li>\n<li><strong>업무 메일·메신저·결과물</strong> — 본인 업무 정황 객관 자료.</li>\n<li><strong>같은 시기 입사 동료 본채용 결과</strong> — 차별·자의성 정황.</li>\n<li><strong>최근 급여명세서</strong> — 임금상당액 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 평가표가 "없다"는 사실 자체가 핵심 입증 자료입니다. 회사에 평가표·기준·중간 피드백 자료를 서면으로 요청한 메일과 회사 답변(또는 무응답)을 기록으로 남겨두면 자의성 정황이 강해집니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"시용기간이라 자유롭게 거부 가능" 주장 반박</strong> — 시용·수습도 객관적·합리적 이유와 사회통념상 상당성이 필요합니다. 평가 기준 부재는 합리성 결여 정황입니다.</li>\n<li><strong>"평가는 회사 재량" 주장 점검</strong> — 재량이라도 평가 기준·항목·점수의 객관성은 다툼 영역입니다. 평가자 1명의 자의 판단은 자의성 정황으로 평가됩니다.</li>\n<li><strong>"근로계약서에 수습 명시했다" 주장 점검</strong> — 명시가 있어도 본채용 거부의 합리성 기준은 면제되지 않습니다. 다만 명시 자체가 없다면 정식근로자 평가로 일반 해고 기준 적용 영역입니다.</li>\n<li><strong>해고예고수당 별도 청구</strong> — 계속근로 3개월 이상 수습이고 30일 전 통보 없이 본채용 거부됐다면 30일분 통상임금 별도 청구(근로기준법 제26조).</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 시용·수습 본채용 거부 무료 상담.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 구제신청 절차·서식 안내.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 해고예고수당 진정 온라인 접수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회사가 본채용 거부 직후 사직서·합의서 작성을 권하는 사례가 있어, 자필 서명 전에 노동위·법률구조공단 상담을 먼저 검토하는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 시용기간 본채용 거부의 합리적 이유 요건',
        summary:
          '서울행정법원 2016구합78936 사건(서울행정법원, 2017.09.07 선고)에서 법원은 시용기간 만료 후 본채용을 거부하려면 사용자의 유보된 해약권 행사로서 객관적이고 합리적인 이유가 있어야 하며, 평가 결과의 타당성·필요한 전문지식·업무이해력·소통 등 종합 정황을 검토해야 한다는 취지를 보였습니다. 같은 사안에서 회사가 실시한 근무평가 결과의 합리성·평가 절차의 적정성을 함께 판단했습니다.',
        takeaway: '시용기간 본채용 거부도 평가 결과의 객관성·합리성이 필요하므로, 평가표·기준·중간 피드백 부재 정황은 노동위 구제 단계에서 합리적 이유 결여 자료로 평가될 여지가 있어 평가 부재 자체를 시간순으로 입증하는 것이 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '수습기간 본채용 거부도 부당해고 구제신청 대상인가요?',
        answer:
          '<strong>대상입니다.</strong> 시용·수습기간 만료 시 본채용 거부는 해고에 해당하는 사례가 있어, 본채용 거부일로부터 3개월 이내 노동위 구제신청을 검토할 수 있는 영역입니다.',
      },
      {
        question: '근로계약서에 "수습 3개월" 명시가 있어도 다툴 수 있나요?',
        answer:
          '<strong>다툴 수 있습니다.</strong> 명시가 있어도 본채용 거부에는 객관적·합리적 이유가 필요하고 평가 기준의 객관성도 점검 대상입니다.',
      },
      {
        question: '평가표를 단 한 번도 받지 못했어요. 그 사실 자체가 입증 자료가 되나요?',
        answer:
          '<strong>강력한 정황 자료입니다.</strong> 평가 부재 자체를 입증하기 위해 회사에 평가표 송부를 서면 요청한 메일과 답변(또는 무응답)을 기록으로 보존해두는 것이 효율적입니다.',
      },
      {
        question: '본채용 거부 통보서에 사유가 "부적합" 한 줄밖에 없어요. 형식 위반인가요?',
        answer:
          '<strong>근로기준법 제27조 서면 사유 명시 위반 정황입니다.</strong> 사유의 구체성이 결여돼 향후 다툼에서 사후에 새 사유를 추가하지 못하는 효과도 있어, 통보서 원본을 반드시 보존해두세요.',
      },
      {
        question: '5인 미만 사업장에서 수습 본채용 거부됐어요. 노동위 구제 가능한가요?',
        answer:
          '<strong>5인 미만 사업장은 근로기준법 제23조 해고 제한이 적용되지 않아 노동위 트랙은 제한적입니다.</strong> 다만 인사규정에 본채용 거부 사유가 한정 열거된 경우 민사 해고무효확인 트랙을 별도로 검토할 수 있는 사례가 있습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '시용기간 본채용 거부 다툼', href: '/guide/dismissal/dismissal-trial-period-rejection-criteria' },
      { label: '수습 평가 부재 부당해고', href: '/guide/dismissal/dismissal-probation-evaluation-missing' },
      { label: '입사 1년 미만 부당해고 구제', href: '/guide/dismissal/dismissal-under-1year-tenure-relief-eligibility' },
      { label: '해고통보서 사유 부실 다툼', href: '/guide/dismissal/dismissal-incomplete-reason-letter' },
      { label: '근로계약서 시용 명시 점검', href: '/guide/dismissal/dismissal-trial-clause-check' },
    ],
  },

  // ─── 5. dismissal / dismissal-fake-shutdown-resume-same-business ───
  {
    domain: 'dismissal',
    slug: 'dismissal-fake-shutdown-resume-same-business',
    keyword: '위장폐업 동종 사업 재개 해고',
    questionKeyword: '회사 폐업으로 해고됐는데 사장이 곧바로 동종 사업을 재개했어요. 위장폐업으로 다툴 수 있나요?',
    ctaKeyword: '위장폐업 해고 입증 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '위장폐업 해고 다투는 4가지 입증 포인트 | 로앤가이드',
      description:
        '폐업 해고 직후 사장이 동종 사업을 재개했다면 위장폐업 4가지 입증 포인트(실체 동일성·시점 인접·사업 동종성·근로자 배제)와 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'회사가 어려워서 폐업한다\'며 1주일 전에 해고 통보를 받았어요. 그런데 폐업 직후 사장님이 같은 건물 옆 사무실에서 거의 똑같은 사업을 다시 시작했고, 거래처·기계·고객 명단이 그대로 옮겨갔더라고요. 더 황당한 건 동료 절반은 새 회사로 이직 제안을 받았는데 저만 빠져 있었다는 점입니다." 사용자가 사업체를 폐업하고 근로자 전원을 해고하는 것은 원칙적으로 기업경영의 자유에 속하지만, 실제 폐업 의사 없이 노동조합 와해·특정 근로자 배제를 위한 위장폐업이라면 해고가 무효로 평가될 수 있는 사례가 있습니다. 폐업 직후 같은 사업이 재개됐다면 사업체 실체 동일성·시점 인접성·동종성·근로자 배제 의도 4가지 입증 포인트로 다툼 트랙을 잡을 수 있는 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 폐업 직후 동종 사업 재개 사안에서 위장폐업 4가지 입증 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 실체 동일성·시점 인접성·사업 동종성·근로자 배제 의도 4가지로 입증할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사업체 실체 동일성</strong> — 폐업 회사와 새 회사의 사업주·임원·주주가 같은지, 자본·자산·기계·집기가 그대로 이전됐는지, 거래처·고객·계약 관계가 승계됐는지 점검합니다. 법인 명의만 다를 뿐 실체가 같다면 위장폐업 정황 자료가 됩니다.</li>\n<li><strong>② 폐업·재개 시점 인접성</strong> — 폐업과 새 사업 개시 사이 기간이 짧을수록 위장폐업 정황이 강해지는 사례가 있습니다. 1~3개월 이내 재개됐다면 통상 의심 영역으로 평가됩니다.</li>\n<li><strong>③ 사업 동종성</strong> — 새 사업이 같은 업종·같은 거래처·같은 영업 방식을 유지하는지 점검합니다. 사명·법인만 바꾼 동일 사업이라면 사업의 폐지가 아닌 명의 교체에 불과한 정황입니다.</li>\n<li><strong>④ 근로자 배제 의도</strong> — 동료 절반은 새 회사로 이직 제안을 받았는데 본인만 빠졌다면 노동조합 활동·내부고발·임금체불 항의 등 특정 근로자 배제 동기가 있었는지 점검합니다. 배제 의도가 입증되면 위장폐업 정황 자료가 결정적으로 강화됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 폐업 자체는 기업경영의 자유 영역이지만, 같은 사업주가 동종 사업을 즉시 재개하면서 본인만 배제한 사안은 위장폐업 4가지 입증 포인트로 다툴 영역입니다. 사업자등록증·법인등기부·거래처 정황·새 회사 채용공고를 시간순으로 정리하는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 위장폐업 다툼 4단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 노동위·민사 트랙을 병행하는 공식 절차를 기준으로 보면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 폐업·재개 정황 자료 보존</strong> (즉시) — 폐업 회사 사업자등록 폐업증명서·법인등기 해산등기, 새 회사 사업자등록증·법인등기부, 같은 건물·같은 영업 정황(사진·영상), 거래처·고객 명단 이전 정황.</li>\n<li><strong>2단계 — 근로자 배제 정황 자료 정리</strong> — 동료 새 회사 이직 명단·시점, 본인 배제 사유, 폐업 전 본인의 노조활동·문제 제기 이력, 사장 발언 메일·메신저·녹취.</li>\n<li><strong>3단계 — 노동위 부당해고 구제신청</strong> (해고일 3개월 이내) — 사업장 소재지 관할 지방노동위에 구제신청서 + 위장폐업 입증자료 4갈래(실체·시점·동종성·배제) 각 2부 제출. 폐업이 위장이라는 점이 인정되면 새 회사가 사용자 지위 승계 여지로 평가될 사례가 있습니다.</li>\n<li><strong>4단계 — 민사 해고무효확인·임금청구 병행</strong> (3년 시효) — 노동위 트랙과 별도로 새 회사를 상대로 근로관계 존속 확인 + 폐업 이후 임금청구 트랙 검토. 새 회사의 실질이 동일하다면 해고무효 + 임금소급 청구가 가능한 사례가 있습니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">위장폐업 해고 사안에서 4가지 입증 포인트와 노동위·민사 병행 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 폐업 회사·새 회사의 실체 자료 + 본인 배제 정황 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>폐업 회사 사업자등록증·폐업증명서</strong> — 폐업 일자·사유.</li>\n<li><strong>폐업 회사 법인등기부등본</strong> — 해산등기·청산인 정보.</li>\n<li><strong>새 회사 사업자등록증·법인등기부</strong> — 설립일·사업주·임원·자본금.</li>\n<li><strong>같은 건물·같은 사무실 정황 자료</strong> — 위치 사진·영상, 임대차 승계 정황.</li>\n<li><strong>거래처·고객·기계 이전 정황</strong> — 거래내역·세금계산서 비교.</li>\n<li><strong>동료 새 회사 이직 명단</strong> — 본인 배제 정황 자료(차별 정황).</li>\n<li><strong>해고통보서·해고사유서</strong> — 폐업 사유 명시 부분.</li>\n<li><strong>최근 12개월 급여명세서</strong> — 임금상당액·소급임금 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 새 회사의 채용공고·홈페이지·SNS 캡처본을 폐업 시점부터 시간순으로 보존하면 동종성·인접성 입증이 한층 강해집니다. 같은 거래처에 발송된 인사 공문이 있다면 "사명만 바뀌었다"는 정황 자료가 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"적법한 폐업이라 다툼 대상 아님" 주장 반박</strong> — 폐업이 진실한지가 핵심 다툼 영역입니다. 동종 사업 재개·실체 동일성·근로자 배제 의도가 결합되면 위장폐업 정황으로 평가될 여지가 있습니다.</li>\n<li><strong>"새 회사는 별개 법인" 주장 점검</strong> — 법인 명의만 다를 뿐 사업주·자본·거래처가 같다면 실질 동일성 정황 자료입니다. 법인등기부·주주명부 점검이 핵심입니다.</li>\n<li><strong>"동료 일부 채용은 새 회사 결정" 주장 점검</strong> — 본인 배제 사유가 노조활동·문제 제기에 인접해 있다면 부당노동행위·차별 정황 자료가 됩니다(노동조합법 제81조 검토).</li>\n<li><strong>해고예고수당·체불임금 별도 청구</strong> — 위장폐업 다툼과 별도로 30일 전 통보 없이 해고된 경우 30일분 통상임금 + 체불임금·퇴직금 청구 검토(근로기준법 제26조·제36조).</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 위장폐업·부당해고 무료 상담.</li>\n<li><strong>지방노동위원회 1644-2010</strong> — 구제신청 절차·서식 안내.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 체불임금·해고예고수당 진정 온라인 접수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 새 회사가 직원 모집 공고를 내는 즉시 캡처해두지 않으면 사후에 사라지는 사례가 있어, 폐업 통보 시점부터 새 회사의 모든 공식 채널(홈페이지·잡사이트·SNS·세금계산서)을 시간순으로 자료화하는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 위장폐업의 정의와 해고 무효 요건',
        summary:
          '서울행정법원 2005구합3707 사건(서울행정법원, 2006.04.20 선고)에서 법원은 위장폐업이란 사업주가 진실한 사업폐지의 의사 없이 다만 근로자들이 노동조합을 결성하려 하거나 노동조합의 활동을 혐오하여 노동조합을 와해시키기 위한 수단으로 사업체를 해산하고 조합원을 전원 해고한 다음 새로운 사업체를 설립하는 등의 방법으로 사업체의 실체가 존속하면서 조합원을 배제한 채 사업 활동을 계속하는 경우를 말한다고 판시했습니다.',
        takeaway: '위장폐업이 인정되려면 사업체 실체 존속 + 근로자 배제 의도 + 사업 활동 계속 정황이 결합되어야 하므로, 폐업·재개의 시간적 인접성과 실체 동일성을 객관 자료로 입증하는 것이 핵심 다툼 영역으로 평가될 여지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '폐업으로 해고됐는데 노동위 구제신청 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 폐업이 진실한지(위장폐업 여부)가 다툼 대상이라면 해고일 3개월 이내 노동위 구제신청을 검토할 수 있는 사례가 있습니다. 다만 폐업이 진실로 인정되면 구제 이익이 소멸한다는 판례 흐름이 있어 실체 입증이 핵심입니다.',
      },
      {
        question: '새 회사가 별개 법인인데도 사용자 지위가 승계되나요?',
        answer:
          '<strong>법인 명의보다 실체가 우선되는 사례가 있습니다.</strong> 사업주·자본·거래처·기계가 그대로 이전됐다면 실질 동일성 정황으로 평가될 여지가 있어, 법인등기부·주주명부·자산이전 자료가 핵심입니다.',
      },
      {
        question: '동료 절반은 새 회사로 이직했는데 저만 빠졌어요. 부당노동행위인가요?',
        answer:
          '<strong>부당노동행위 정황 자료입니다.</strong> 본인이 노조활동·문제 제기·임금체불 항의 등 회사 측 비호감 사유가 있었다면 노동조합법 제81조 부당노동행위 트랙 병행 검토 영역입니다.',
      },
      {
        question: '폐업 후 6개월 만에 새 회사가 시작됐어요. 인접성 인정될까요?',
        answer:
          '<strong>다른 정황과 결합되면 충분히 인접성이 평가될 수 있는 사례가 있습니다.</strong> 시점만으로 판단하지 않고 실체 동일성·동종성·배제 의도와 종합적으로 평가되므로, 4가지 자료를 모두 시간순으로 정리하는 것이 효율적입니다.',
      },
      {
        question: '노동위 구제 + 민사 해고무효확인 + 체불임금 동시에 진행 가능한가요?',
        answer:
          '<strong>병행 가능합니다.</strong> 노동위는 빠른 원직복직, 민사는 새 회사 상대 근로관계 존속·임금소급, 노동청 진정은 체불임금·해고예고수당으로 트랙을 분리해 진행하는 사례가 있습니다.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '폐업 해고 구제 가능 여부', href: '/guide/dismissal/dismissal-shutdown-relief-availability' },
      { label: '정리해고 4요건 점검', href: '/guide/dismissal/dismissal-collective-redundancy-criteria' },
      { label: '경영상 해고 협의 의무', href: '/guide/dismissal/dismissal-management-consultation' },
      { label: '노조활동 부당노동행위 다툼', href: '/guide/dismissal/dismissal-union-activity-unfair-labor' },
      { label: '체불임금·해고예고수당 청구', href: '/guide/dismissal/dismissal-unpaid-wage-notice-pay' },
    ],
  },
];
