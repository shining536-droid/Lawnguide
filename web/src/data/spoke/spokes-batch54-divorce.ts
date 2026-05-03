import { SpokePage } from '../spoke-pages';

// batch54 divorce 4개: 황혼이혼 노년 재산분할(가사노동·연금) + 이혼 후 양육비 미지급 강제집행 통합 절차 + 가정폭력 피해자보호명령 절차 + 사실혼 잠적·일방 사망 시 청구권 시효
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 30년 이상 전업주부였거나 60대 이상에서 황혼이혼을 검토하는 당사자가 가사노동 기여도 입증·공무원·국민연금 분할연금 청구를 정리하도록 돕는 페이지다.
// 2. 이 페이지는 이혼 판결·심판으로 양육비 집행권원을 확보했지만 비양육친이 미지급하는 상황에서 직접지급명령·담보제공명령·이행명령·감치명령·CSA 추심까지 5단계 흐름을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 배우자의 폭행·학대로 가정폭력 상황에 노출된 피해자가 임시조치·피해자보호명령·신변보호·이혼소송 병행 트랙을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 사실혼 배우자가 잠적했거나 일방이 사망한 후 재산분할청구권을 행사하려는 당사자가 2년 제척기간·청구 가능 범위·소재 추적 절차를 정리하도록 돕는 페이지다.

export const spokesBatch54Divorce: SpokePage[] = [
  // ─── 1. divorce / late-life-housework-contribution-proof ───
  {
    domain: 'divorce',
    slug: 'divorce-late-life-housework-contribution-proof',
    keyword: '황혼이혼 가사노동 기여도 연금분할',
    questionKeyword: '30년간 전업주부였는데 황혼이혼 시 재산분할 절반 받을 수 있나요?',
    ctaKeyword: '황혼이혼 재산·연금분할 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '황혼이혼 가사노동 기여도 — 연금·재산분할 청구 5단계 | 로앤가이드',
      description:
        '30년 이상 전업주부·60대 이상에서 황혼이혼을 검토 중이라면 가사노동 기여도 입증·공무원·국민연금 분할연금 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"30년 넘게 살림하고 자녀 키우고 시부모님 모시며 살았어요. 남편이 공무원으로 평생 월급 받았고 노후에 받을 연금도 있는데, 이 나이에 이혼하면 제가 받을 수 있는 게 있을까 막막합니다." 황혼이혼은 가사노동 기여도와 연금분할이 핵심입니다. 대법원은 전업주부의 가사노동·자녀양육·시부모 부양 같은 무형 기여를 재산 형성·유지에 대한 협력으로 보고 재산분할 대상에 적극 포함시켜 왔어요. 공무원연금·국민연금도 혼인기간 중 형성된 부분은 분할 대상이고, 별도의 분할연금 청구권도 인정됩니다(국민연금법 제64조). 다만 재산분할 청구는 이혼 후 2년 제척기간이 있어 이혼·청구 시점 설계가 중요합니다.</p>',
    sections: [
      {
        title: '황혼이혼 재산·연금분할 — 4가지 핵심 쟁점',
        content:
          '<p><strong style="color:#1e3a5f">노년 이혼은 일반 이혼과 분할 대상·기준이 일부 다릅니다.</strong></p>\n<ul>\n<li><strong>가사노동 기여도 인정</strong> — 전업주부의 가사·양육·부모 부양은 재산 형성에 협력한 무형 기여로 평가. 30년 이상 장기 혼인은 통상 40~50% 수준으로 검토되는 사례가 많음.</li>\n<li><strong>공무원·사학·군인연금 분할 대상</strong> — 이혼 시점에 아직 재직 중이어도 잠재적 가치 평가 가능한 퇴직급여·퇴직수당 채권은 분할 대상(대법원 2017므11917).</li>\n<li><strong>국민연금 분할연금 청구권</strong> — 혼인기간 5년 이상 + 이혼 + 본인 65세 도달 시 별도 청구 가능. 재산분할 합의서·심판에 명시 안 되어 있어도 권리 보존(대법원 2018두65088 취지).</li>\n<li><strong>특유재산 vs 공동재산</strong> — 결혼 전 자산·상속·증여재산은 원칙 특유재산. 그러나 장기간 유지·증식에 기여했다면 일부 분할 가능성 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 황혼이혼은 단발적 이혼소송이 아니라 노후 소득 설계와 결합. 재산분할 + 위자료 + 연금분할 + 분할연금 신청을 일관된 트랙으로 검토.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 황혼이혼 재산·연금분할 5단계',
        content:
          '<p><strong style="color:#1e3a5f">자료 정리·이혼 청구·분할 심리·연금 신청·행정신고 순서로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 재산·연금 자료 수집 (1~2개월)</strong> — 부동산 등기부·예금·주식·차량·공무원 재직증명·국민연금 가입내역·예상연금월액 조회.</li>\n<li><strong>2단계 — 이혼 + 재산분할 + 위자료 청구 (가정법원, 조정전치)</strong> — 협의 가능하면 협의이혼 + 재산분할 합의서. 협의 불성립 시 재판상 이혼.</li>\n<li><strong>3단계 — 재산명시·재산조회 (2~3개월)</strong> — 가사소송법 제48조의2·3에 따라 상대방 보유 재산 명시. 미이행 시 1년 이하 징역·1천만 원 이하 과태료.</li>\n<li><strong>4단계 — 분할 결정 + 연금분할 비율 명시 (변론 종결 후 1~3개월)</strong> — 합의서·심판문에 연금분할 비율 명시 권장. 미명시 시 국민연금법 제64조의 균등분할 적용.</li>\n<li><strong>5단계 — 분할연금 청구 (본인 65세 도달 시)</strong> — 국민연금공단에 분할연금 청구. 공무원연금은 공단에 분할 신청.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">가사노동 기여도·연금분할·재산명시 트랙을 AI가 케이스별로 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 황혼이혼 재산·연금 입증 7가지',
        content:
          '<p><strong style="color:#1e3a5f">노년 재산분할 청구에 필요한 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 본인·배우자 신분 자료</strong> — 가족관계증명서·혼인관계증명서·주민등록등본·기본증명서.</li>\n<li><strong>2. 부동산·예금·주식 자료</strong> — 부동산 등기부등본·은행 잔고증명·주식·펀드 잔고·차량 등록.</li>\n<li><strong>3. 공무원·사학·군인연금 자료</strong> — 재직증명·예상퇴직급여 조회(공무원연금공단 1588-4321).</li>\n<li><strong>4. 국민연금 가입내역</strong> — 국민연금공단(1355) 가입증명·예상연금월액 조회·혼인기간 확인.</li>\n<li><strong>5. 가사노동 기여 입증</strong> — 자녀 출생·교육·결혼 비용·시부모 부양 증빙(사진·진료비·보호자 서명 영수증).</li>\n<li><strong>6. 혼인기간 입증 자료</strong> — 혼인신고 시점·별거·실질적 혼인관계 단절 시점 자료.</li>\n<li><strong>7. 노후 생계 자료</strong> — 본인 소득·재산·건강 상태 자료. 위자료·분할 금액 산정 참작.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공무원연금 가입자 배우자는 별거기간·실질 혼인 단절기간을 명확히 정리. 공무원연금법은 실질 혼인기간만 분할 대상으로 인정. 국민연금은 본인 65세 도달 후 청구 가능하므로 시점 메모.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 황혼이혼 사건에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"전업주부는 받을 수 없다"는 오해</strong> — 가사노동·양육·부양은 재산 형성 협력으로 인정. 30년 장기 혼인은 통상 40~50% 수준으로 검토되는 사례가 많음.</li>\n<li><strong>합의서·심판문에 연금분할 비율 미명시</strong> — 미명시 시 국민연금법 제64조의 균등분할 원칙. 별도 협의가 있었다고 단정할 수 없으므로 명시적 합의 권장(대법원 2018두65088 취지).</li>\n<li><strong>재산분할 2년 제척기간 도과</strong> — 민법 제839조의2 제3항에 따라 이혼 후 2년 내 청구 필수. 도과 시 청구 불가(대법원 2020스561 등).</li>\n<li><strong>특유재산 무분별 청구</strong> — 결혼 전 자산·상속분은 원칙 분할 제외. 다만 장기간 유지·증식 기여가 입증되면 일부 분할 검토 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 한국가정법률상담소 1644-7077 / 국민연금공단 1355 / 공무원연금공단 1588-4321 / 사선 변호사 조력은 가사노동 기여도 입증·연금분할 비율 합의 설계에 효과적.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 공무원 퇴직급여 채권의 재산분할 대상성',
        summary:
          '대법원 2017므11917 사건(대법원, 2019.09.25 선고)에서 법원은 이혼 당시 부부 일방이 아직 공무원으로 재직 중이어서 실제 퇴직급여 등을 수령하지 않았더라도 이혼소송의 사실심 변론종결 시에 이미 잠재적으로 존재하여 경제적 가치의 현실적 평가가 가능한 재산인 퇴직급여 및 퇴직수당 채권은 상대방 배우자의 협력이 기여한 것으로 인정되는 한 재산분할의 대상에 포함시킬 수 있다고 판시했습니다. 공무원연금법상 이혼배우자의 분할연금 수급권 규정이 적용되지 않는 퇴직수당 채권도 협력 기여가 인정되면 재산분할 대상이 될 수 있다는 시사점이 있어, 황혼이혼 시 공무원·사학·군인 등 직역연금 자료를 일관되게 정리해두면 도움이 됩니다.',
        takeaway: '재직 중 퇴직급여·퇴직수당도 잠재적 가치 평가가 가능하면 재산분할 대상이 되므로, 가사노동·부양 기여 자료와 함께 연금공단 예상지급액 자료를 일관되게 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '30년 전업주부의 재산분할 비율은 어느 정도 사례가 있나요?',
        answer:
          '<strong>사건별 차이가 크지만 30년 이상 장기 혼인·전업주부는 40~50% 수준으로 검토되는 사례가 많습니다.</strong> 자녀 양육·부모 부양·재산 형성 기여도가 입증되면 더 높게 산정되는 사례도 있어 단정형 비율 표기는 어려움.',
      },
      {
        question: '국민연금 분할연금은 얼마나 받을 수 있나요?',
        answer:
          '<strong>혼인기간 5년 이상 + 본인 65세 도달 시 상대방 노령연금액 중 혼인기간 해당분의 균등분할이 원칙입니다.</strong> 합의·심판으로 비율 별도 정할 수 있음. 본인 65세 도달 후 5년 내 청구 필요.',
      },
      {
        question: '황혼이혼 위자료는 얼마 정도 인정되나요?',
        answer:
          '<strong>사건별 차이가 큽니다.</strong> 외도·폭력·악의 유기 같은 유책 사유가 입증되고 장기 혼인이 파탄된 경우 1,000만~5,000만 원 수준으로 검토되는 사례가 많지만, 단정형 금액은 어려움.',
      },
      {
        question: '재산분할 청구는 언제까지 해야 하나요?',
        answer:
          '<strong>이혼 후 2년 이내 청구해야 합니다(민법 제839조의2 제3항).</strong> 제척기간이라 도과 시 청구 불가. 협의이혼 시 재산분할 합의서를 함께 작성하면 시점 다툼 줄어듭니다.',
      },
      {
        question: '이혼 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 한국가정법률상담소(1644-7077)도 황혼이혼·연금분할 상담 운영. 사선 변호사는 가사노동 기여도 입증·연금분할 합의 설계에서 효과 큼.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '황혼이혼 30년 재산분할', href: '/guide/divorce/divorce-late-life-30years-property-division' },
      { label: '황혼이혼 재산분할 연금', href: '/guide/divorce/divorce-elderly-property-division' },
      { label: '연금분할 청구 기한', href: '/guide/divorce/divorce-pension-division-timeline' },
      { label: '국민연금 분할연금 신청', href: '/guide/divorce/divorce-pension-split-formula' },
      { label: '특유재산과 기여도 평가', href: '/guide/divorce/divorce-special-property-contribution' },
    ],
  },

  // ─── 2. divorce / post-divorce-child-support-non-payment-full-procedure ───
  {
    domain: 'divorce',
    slug: 'divorce-post-divorce-child-support-non-payment-full-procedure',
    keyword: '이혼 후 양육비 미지급 강제집행 감치명령 절차',
    questionKeyword: '이혼 판결로 양육비 받기로 했는데 안 줍니다. 감치까지 어떻게 진행하나요?',
    ctaKeyword: '양육비 미지급 통합 집행 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '이혼 후 양육비 미지급 — 직접지급·감치·CSA 5단계 통합 절차 | 로앤가이드',
      description:
        '이혼 판결로 양육비 집행권원을 확보했지만 비양육친이 미지급하는 상황이라면 직접지급명령·이행명령·감치·양육비이행관리원 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"이혼하면서 매달 80만원 양육비 받기로 판결문에 적었는데, 처음 두 달만 입금되고 1년째 한 푼도 못 받고 있습니다. 어디서부터 어떻게 강제할지 막막해요." 이혼·심판으로 확보한 양육비 집행권원이 있다면 가사소송법은 단계별 강제 수단을 마련해 두고 있습니다. 직접지급명령(제63조의2), 담보제공명령(제63조의3), 이행명령(제64조), 감치명령(제68조) 순으로 강도가 올라가고, 양육비이행관리원(CSA, 1644-6621)이 추심·재산조사·제재조치를 일괄 지원해요. 감치명령은 이행명령 후 정당한 사유 없이 3기 이상 미이행 요건이 있어 단계 누락 시 기각됩니다.</p>',
    sections: [
      {
        title: '양육비 미지급 강제 수단 — 5가지 트랙',
        content:
          '<p><strong style="color:#1e3a5f">집행권원이 있는 양육비는 단계별 강제 수단으로 집행합니다.</strong></p>\n<ul>\n<li><strong>직접지급명령 (가사소송법 제63조의2)</strong> — 비양육친의 소득세 원천징수의무자(회사)에게 양육비를 양육친 계좌로 직접 지급하도록 명령.</li>\n<li><strong>담보제공명령·일시금지급명령 (제63조의3)</strong> — 미이행 우려 시 담보 제공 명령. 불응 시 일시금 지급명령으로 전환.</li>\n<li><strong>이행명령 (제64조)</strong> — 정당한 사유 없이 양육비 미지급 시 이행 촉구 명령. 위반 시 1천만원 이하 과태료.</li>\n<li><strong>감치명령 (제68조)</strong> — 이행명령 후 정당한 사유 없이 3기 이상 미이행 시 30일 이내 감치(구금).</li>\n<li><strong>CSA 추심·제재조치</strong> — 양육비이행관리원이 재산조사·압류·운전면허정지·출국금지·명단공개·채무불이행자명부 등재 일괄 지원.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직접지급명령 → 이행명령 → 감치 순서로 진행. 감치는 이행명령 후 3기 이상 미이행 요건이라 단계 누락 시 기각. CSA는 모든 단계에서 무료 법률·추심 지원.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 양육비 미지급 강제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">집행권원 확인·직접지급·이행명령·감치·CSA 추심 순서로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 집행권원·미지급 자료 정리 (즉시)</strong> — 이혼판결문·심판문·조정조서·확정증명서 + 미지급 내역(계좌이체 내역·문자·카톡).</li>\n<li><strong>2단계 — 직접지급명령 신청 (관할 가정법원)</strong> — 비양육친 근무처 확보 시 우선 검토. 회사가 양육비를 양육친 계좌로 직접 송금.</li>\n<li><strong>3단계 — 이행명령 신청 (가사소송법 제64조)</strong> — 직접지급명령이 어렵거나 자영업자라면 이행명령 우선. 위반 시 1천만 원 이하 과태료.</li>\n<li><strong>4단계 — 감치명령 신청 (제68조)</strong> — 이행명령 후 정당한 사유 없이 3기 이상 미이행 + 감치 결정 당시 채무 3,000만 원 이상이면 출국금지 병행 검토. 30일 이내 감치(구금).</li>\n<li><strong>5단계 — CSA 추심·제재조치 (1644-6621, 양육비이행관리원)</strong> — 재산조사·압류·운전면허정지(100일)·명단공개(3년)·채무불이행자명부 등재. 소득기준 충족 시 선지급(기준중위소득 150% 이하).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">집행권원 확인·직접지급·감치·CSA 추심 트랙을 AI가 케이스별로 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 양육비 강제집행 입증 7가지',
        content:
          '<p><strong style="color:#1e3a5f">집행 단계별로 필요한 자료를 정리합니다.</strong></p>\n<ul>\n<li><strong>1. 집행권원 자료</strong> — 이혼판결문·심판문·조정조서·공정증서 + 확정증명서.</li>\n<li><strong>2. 미지급 내역 입증</strong> — 계좌이체 내역·문자·카톡·내용증명·미지급 기간 정리표.</li>\n<li><strong>3. 비양육친 신원·연락처</strong> — 주민등록상 주소·근무처·연락처. 모르면 CSA·법원 사실조회 활용.</li>\n<li><strong>4. 비양육친 재산 자료</strong> — 부동산 등기부·차량 등록·예금 추정 자료. 미상이면 가사소송법상 재산명시·재산조회 신청.</li>\n<li><strong>5. 본인 신분·자녀 자료</strong> — 가족관계증명서·기본증명서·주민등록등본·자녀 학적 자료.</li>\n<li><strong>6. CSA 신청 서류</strong> — 양육비 이행확보 지원 신청서(.hwp)·신분증 사본·소득증빙(선지급 신청 시).</li>\n<li><strong>7. 감치 신청 시 추가</strong> — 이행명령 결정문·이행명령 후 미이행 기수(3기 이상) 입증·소명자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 양육비이행관리원(CSA)은 모든 단계에서 무료 법률지원·추심·재산조사를 일괄 지원. 양육친이 직접 변호사 없이도 진행 가능. 1644-6621 또는 childsupport.or.kr.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 양육비 미지급 집행 사건에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>이행명령 없이 바로 감치 신청</strong> — 감치는 이행명령 후 정당한 사유 없이 3기 이상 미이행 요건. 단계 누락 시 기각.</li>\n<li><strong>비양육친 주소·근무처 모른다고 포기</strong> — CSA·법원 사실조회로 주소·근무지 확보 가능. 포기하지 말고 절차 활용.</li>\n<li><strong>"공정증서 없으니 못 한다"는 오해</strong> — 이혼판결문·심판문·조정조서도 집행권원. 공정증서·판결문 모두 직접지급명령·이행명령 가능.</li>\n<li><strong>장래양육비 기산일 다툼</strong> — 항소심에서 비양육친이 여전히 양육하지 않으면 기산일 재조정 검토(대법원 2024므14761 취지). 변경 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 양육비이행관리원 1644-6621 / 대한법률구조공단 132 / 한국가정법률상담소 1644-7077 / 가정법원 민원실 / 사선 변호사 조력은 직접지급명령·감치 신청 설계에 효과적.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 장래양육비 기산일과 비양육친 양육 미실행',
        summary:
          '대법원 2024므14761 사건(대법원, 2023.12.26 선고)에서 법원은 제1심 가정법원이 이혼 청구를 받아들이면서 변론종결 당시 비양육친이었던 부모 일방을 양육자로 지정하고 제1심판결 선고일 다음 날을 기산점으로 삼아 장래양육비의 분담을 정하였는데, 항소심법원이 양육에 관한 사항을 심리한 결과 여전히 비양육친이 양육하지 않고 있는 사실이 확인된 경우 이를 반영하여 장래양육비의 지급을 명하는 기산일을 다시 정하여야 한다고 판시했습니다. 양육비 집행권원의 기산일은 실제 양육 사실에 따라 조정될 수 있다는 시사점이 있어, 이혼 후 양육비 집행 단계에서도 실제 양육 자료를 일관되게 정리해두면 도움이 됩니다.',
        takeaway: '양육비 집행권원의 기산일과 금액은 실제 양육 사실에 따라 변경 청구 가능하므로, 미지급 내역과 양육 사실 자료를 일관되게 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '직접지급명령과 이행명령은 동시에 신청 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 비양육친이 직장인이면 직접지급명령(제63조의2) + 이행명령(제64조) 병행. 자영업자·무직이면 이행명령 → 감치 트랙 우선.',
      },
      {
        question: '감치명령 후에도 양육비를 못 받으면 어떻게 하나요?',
        answer:
          '<strong>CSA 제재조치 + 강제집행 병행입니다.</strong> 감치 후에도 미이행 시 운전면허정지(100일)·출국금지·명단공개(3년)·채무불이행자명부 등재. 부동산·차량 압류·경매도 가능.',
      },
      {
        question: '양육비 선지급 제도는 누가 받을 수 있나요?',
        answer:
          '<strong>기준 중위소득 150% 이하 + 양육비 채권 확정 + 비양육친 미지급이 조건입니다.</strong> CSA(1644-6621)에 신청. 국가가 정기 양육비 지급 후 비양육친에게 국세체납처분으로 회수.',
      },
      {
        question: 'CSA 지원을 받으면 변호사 없이도 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 양육비이행관리원이 무료 법률지원·소송대리·추심·재산조사 일괄 지원. 사선 변호사 조력은 복잡한 재산 추적·해외 거주 비양육친 사건에서 효과 큼.',
      },
      {
        question: '이혼·양육비 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 양육비이행관리원(1644-6621)·한국가정법률상담소(1644-7077)도 양육비 미지급 상담 운영.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '양육비 감치명령 신청', href: '/guide/child-support/child-support-enforcement-contempt-order' },
      { label: '양육비 감치 절차', href: '/guide/child-support/child-support-contempt-detention-procedure' },
      { label: '양육비 이행명령 신청', href: '/guide/child-support/child-support-enforcement-order-apply' },
      { label: '양육비 변경 청구 절차', href: '/guide/divorce/divorce-post-divorce-child-support-modification' },
      { label: '과거 양육비 청구', href: '/guide/divorce/divorce-past-child-support-claim-years-later' },
    ],
  },

  // ─── 3. divorce / domestic-violence-victim-protection-order-procedure ───
  {
    domain: 'divorce',
    slug: 'divorce-domestic-violence-victim-protection-order-procedure',
    keyword: '가정폭력 피해자보호명령 임시조치 절차',
    questionKeyword: '남편의 폭행이 반복되어 더는 못 살겠어요. 임시조치·피해자보호명령은 어떻게 신청하나요?',
    ctaKeyword: '가정폭력 피해자보호명령 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '가정폭력 피해자보호명령 — 임시조치·신변보호 5단계 절차 | 로앤가이드',
      description:
        '배우자 폭행·학대로 가정폭력 상황에 있다면 임시조치·피해자보호명령·신변보호·이혼소송 병행 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"몇 달째 폭언·폭행이 반복되고 있어요. 신고하면 더 큰 보복이 올까봐 무섭고, 어디로 도망가야 할지도 막막합니다." 가정폭력은 형사 처벌(가정폭력처벌법) + 피해자보호명령 + 이혼소송 + 신변보호가 동시에 가능한 상황입니다. 경찰이 현장에서 즉시 응급조치(현장 격리·임시조치 신청)를 하고, 검사·법원이 가해자에게 접근금지·퇴거 등 임시조치(가정폭력처벌법 제29조)를 부과해요. 피해자가 직접 가정법원에 피해자보호명령(제55조의2)을 신청할 수도 있고, 피해자에 대한 신변보호조치도 별도 운영됩니다. 폭력은 민법 제840조 제3호 "심히 부당한 대우"로 재판상 이혼 사유가 됩니다(대법원 2020므14763).</p>',
    sections: [
      {
        title: '가정폭력 피해자 보호 — 4가지 동시 트랙',
        content:
          '<p><strong style="color:#1e3a5f">한 사건에서 여러 보호 절차를 병행할 수 있습니다.</strong></p>\n<ul>\n<li><strong>응급조치·임시조치 (가정폭력처벌법 제5조·제29조)</strong> — 경찰 현장 응급조치 → 검사 청구 → 법원 임시조치(접근금지·퇴거·통신금지). 위반 시 형사 처벌.</li>\n<li><strong>피해자보호명령 (제55조의2)</strong> — 피해자가 직접 가정법원에 신청. 가해자 접근·통신·자녀 면접교섭 금지 명령. 임시조치 없이도 신청 가능.</li>\n<li><strong>형사 고소·수사 (제2조)</strong> — 폭행·상해·협박 등 형사 처벌. 가정보호사건 송치 또는 일반 형사재판.</li>\n<li><strong>이혼소송 + 위자료 (민법 제840조 제3·6호)</strong> — 폭력은 "심히 부당한 대우"·"혼인을 계속하기 어려운 중대한 사유"에 해당(대법원 2020므14763 등).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 신고만으로는 부족할 수 있어 임시조치·피해자보호명령·이혼소송을 병행 검토. 여성긴급전화 1366·112·해바라기센터(15개소)에서 통합 지원.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 피해자보호명령 5단계',
        content:
          '<p><strong style="color:#1e3a5f">신고·응급조치·임시조치·피해자보호명령·이혼 병행 순서로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신고·응급조치 (즉시)</strong> — 112·1366·해바라기센터 신고. 경찰이 현장 격리·증거 확보·임시조치 신청. 진단서·112 신고 기록 보존.</li>\n<li><strong>2단계 — 임시조치 청구 (24시간 내)</strong> — 검사가 법원에 임시조치(접근금지 100m·퇴거·통신금지·국가기관 보호시설 위탁) 청구. 법원 결정 즉시 효력.</li>\n<li><strong>3단계 — 피해자보호명령 신청 (가정법원, 임시조치와 별개 가능)</strong> — 피해자가 직접 가정법원에 신청. 임시조치 없어도 가능. 결정 후 6개월~2년 효력(연장 가능).</li>\n<li><strong>4단계 — 이혼소송 + 위자료 청구 (민법 제840조 제3·6호)</strong> — 폭력 자료(진단서·112 기록·임시조치 결정문) 첨부하여 이혼·위자료·재산분할·친권·양육 일괄 청구.</li>\n<li><strong>5단계 — 신변보호·쉼터 보호 (1366·해바라기)</strong> — 가정폭력 피해자 보호시설 입소(최장 2년)·신변보호 요청·자녀 동반 입소 가능. 비공개 거주지 보장.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">신고·임시조치·피해자보호명령·이혼 병행 트랙을 AI가 케이스별로 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 가정폭력 피해 입증 7가지',
        content:
          '<p><strong style="color:#1e3a5f">보호명령·이혼소송에 필요한 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 신분 자료</strong> — 본인·가해자 가족관계증명서·혼인관계증명서·주민등록등본.</li>\n<li><strong>2. 폭력 입증 자료</strong> — 진단서(상해 부위·치료 기간 명시)·사진(상처 메타데이터)·112·119 신고 기록.</li>\n<li><strong>3. 응급·임시조치 결정문</strong> — 경찰 응급조치·법원 임시조치 결정문 사본.</li>\n<li><strong>4. 가해자 위협·통신 자료</strong> — 본인 명의 카톡·문자·녹음(본인 참여)·SNS 메시지.</li>\n<li><strong>5. 자녀 피해 자료</strong> — 자녀 진료 기록·심리 검사·교사 면담·자녀 진술서(자발).</li>\n<li><strong>6. 정신과 진료·심리상담 기록</strong> — 본인의 정신적 피해 입증. 위자료 액수 산정.</li>\n<li><strong>7. 쉼터·신변보호 신청 기록</strong> — 1366·해바라기·보호시설 입소 기록.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 폭력 발생 직후 진단서를 받고 사진을 찍어두면 입증이 강해집니다. 메타데이터(시간·장소)가 보존되도록 원본 보관. 비공개 거주지는 가족관계증명서·주민등록등본 발급 제한 신청으로 보호 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 가정폭력 사건에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"신고하면 가족이 망가진다"는 부담으로 대응 늦춤</strong> — 폭력은 반복·악화되는 경향. 1차 신고·진단서 확보가 향후 보호명령·이혼·위자료 청구의 핵심 자료.</li>\n<li><strong>임시조치만 받고 피해자보호명령 미신청</strong> — 임시조치는 검사·법원 직권 결정. 피해자보호명령은 별도 신청해야 가해자에게 직접 효력. 두 절차 병행 권장.</li>\n<li><strong>합의·각서로만 끝내고 이혼 미진행</strong> — 폭력은 반복 사례 많음. 보호명령·이혼·위자료 일괄 검토. "다시는 안 그러겠다" 각서로만 마무리하면 재발 시 입증 약화.</li>\n<li><strong>위법 녹음·해킹 시도</strong> — 본인 참여 녹음은 합법(통신비밀보호법). 가해자 휴대폰 몰래 보거나 위치추적 앱 설치는 형사 처벌. 합법 자료로만.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 여성긴급전화 1366 / 112(긴급) / 해바라기센터(전국 15개소) / 대한법률구조공단 132 / 한국가정법률상담소 1644-7077 / 가정폭력 보호시설 1366 안내 / 사선 변호사 조력은 보호명령 신청·이혼소송 설계에 효과적.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 배우자 폭력과 재판상 이혼사유 인정',
        summary:
          '대법원 2020므14763 사건(대법원, 2021.03.25 선고)에서 법원은 베트남 국민 甲과 대한민국 국민 乙이 혼인신고를 마친 법률상 부부로서 甲이 乙의 계속된 폭행 등으로 혼인이 파탄되었다고 주장한 사안에서, 乙의 행위는 甲에 대한 부당한 대우에 해당할 뿐만 아니라 甲과 乙의 혼인관계는 乙의 폭력 행사 이래 그 바탕이 되어야 할 애정과 신뢰가 상실되어 회복할 수 없을 정도로 파탄되었으므로 민법 제840조 제3호 또는 제6호의 재판상 이혼사유에 해당한다고 판시했습니다. 폭력 사실의 입증과 혼인관계 파탄의 인과관계 자료를 일관되게 정리해두면 도움이 됩니다.',
        takeaway: '배우자의 계속된 폭력은 민법 제840조 제3호 "심히 부당한 대우" + 제6호 "혼인을 계속하기 어려운 중대한 사유" 양쪽에 해당할 수 있으므로, 진단서·신고기록·임시조치 결정문을 일관되게 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '신고하면 남편이 바로 구속되나요?',
        answer:
          '<strong>구속은 별도 요건이 필요합니다.</strong> 일반적으로 응급조치·임시조치(접근금지·퇴거)부터 부과되고, 상해·협박이 중하거나 재범 위험이 높으면 구속영장 검토. 신고가 곧 구속은 아닙니다.',
      },
      {
        question: '피해자보호명령은 이혼하지 않아도 신청 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 가정폭력처벌법 제55조의2에 따라 혼인 중·이혼 중·이혼 후 모두 신청 가능. 임시조치 없이도 직접 가정법원에 신청 가능합니다.',
      },
      {
        question: '쉼터에 자녀와 함께 입소할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 가정폭력 피해자 보호시설은 자녀 동반 입소 허용. 비공개 거주지 보장. 입소 기간 최장 2년 + 자립지원 연계. 1366으로 안내 받으세요.',
      },
      {
        question: '폭력 위자료는 얼마 정도 인정되나요?',
        answer:
          '<strong>사건별 차이가 큽니다.</strong> 폭력 빈도·기간·상해 정도·정신적 피해 입증에 따라 1,000만~5,000만 원 수준으로 검토되는 사례가 많지만, 단정형 금액은 어려움.',
      },
      {
        question: '이혼·가정폭력 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>여성긴급전화(1366)·대한법률구조공단(132)에서 무료 상담을 받아보실 수 있습니다.</strong> 해바라기센터(전국 15개소)는 의료·법률·심리 통합 지원. 한국가정법률상담소(1644-7077)도 가정폭력 상담 운영.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '가정폭력 긴급피난처', href: '/guide/divorce/divorce-domestic-violence-emergency-shelter' },
      { label: '가정폭력 증거 수집', href: '/guide/divorce/divorce-domestic-violence-evidence-collection' },
      { label: '가정폭력 보호명령 병행', href: '/guide/divorce/divorce-domestic-violence-protection-order-parallel' },
      { label: '재판상 이혼 사유', href: '/guide/divorce/divorce-litigation-grounds-civil-840' },
      { label: '협의이혼 준비 절차', href: '/guide/divorce/divorce-consensual-procedure-step-by-step' },
    ],
  },

  // ─── 4. divorce / de-facto-marriage-claim-deadline-spouse-missing ───
  {
    domain: 'divorce',
    slug: 'divorce-de-facto-marriage-claim-deadline-spouse-missing',
    keyword: '사실혼 일방 잠적 사망 재산분할 제척기간',
    questionKeyword: '사실혼 배우자가 잠적한 지 1년 됐어요. 지금이라도 재산분할 청구 가능한가요?',
    ctaKeyword: '사실혼 잠적·사망 청구권 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '사실혼 잠적·사망 — 재산분할 2년 제척기간 5단계 점검 | 로앤가이드',
      description:
        '사실혼 배우자가 잠적했거나 일방이 사망한 후 재산분할청구를 검토 중이라면 2년 제척기간·청구 가능 범위·소재 추적 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"10년 가까이 사실혼으로 살았는데 어느 날 갑자기 짐을 싸들고 떠난 뒤 1년째 연락이 안 됩니다. 같이 모은 재산이 있고 일부는 상대방 명의로 되어 있는데, 지금이라도 재산분할이 가능한지 막막해요." 사실혼 해소를 원인으로 한 재산분할청구권은 민법 제839조의2 제3항을 유추 적용해 행사기간이 2년의 제척기간으로 운영됩니다(대법원 2020스561 등). 잠적·연락두절은 해소로 인정되는 사례가 많고, 그 시점부터 2년 안에 가정법원에 심판청구를 해야 권리가 보존돼요. 일방 사망의 경우는 사실혼 배우자에게 상속권이 없는 점·잔존재산에 대한 청구 가능성을 별도로 검토해야 합니다.</p>',
    sections: [
      {
        title: '사실혼 잠적·사망 시 청구권 — 4가지 핵심 쟁점',
        content:
          '<p><strong style="color:#1e3a5f">잠적·사망에 따라 청구 트랙이 달라집니다.</strong></p>\n<ul>\n<li><strong>해소 시점 = 분할 기준 + 시효 기산점</strong> — 잠적·짐 정리·연락두절 시점이 통상 사실혼 해소로 인정되는 사례가 많음(대법원 2022므11027 등). 이때부터 2년 내 청구.</li>\n<li><strong>제척기간 2년 (출소기간)</strong> — 민법 제839조의2 제3항을 유추 적용. 단순 시효 아닌 출소기간이라 기간 내 심판청구를 해야 권리 보존(대법원 2020스561).</li>\n<li><strong>일방 사망 시 상속권 없음</strong> — 사실혼 배우자에게 상속권 인정 안 됨. 다만 사망 전 형성·기여한 재산에 대한 청구 가능 여부는 사례별 판단.</li>\n<li><strong>잠적 시 소재 추적·사실조회</strong> — 가정법원 사실조회·통신사·금융기관 협조 요청. 모르면 공시송달로도 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사실혼은 시효 도과가 흔한 함정. 해소 시점을 명확히 기록하고 2년 안에 가정법원에 청구. 잠적이라도 절차 진행 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 사실혼 잠적·사망 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">해소 시점 확정·소재 추적·청구·재산명시·결정 순서로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사실혼 해소 시점·자료 정리 (즉시)</strong> — 짐 정리 사진·일방 통보 카톡·문자·연락두절 시점·주민등록 분리 등. 시효 기산점이 됩니다.</li>\n<li><strong>2단계 — 상대방 소재·재산 자료 확보 (1~2개월)</strong> — 마지막 거주지·근무처·차량·계좌. 가정법원 사실조회 신청으로 통신사·금융기관 자료 확보.</li>\n<li><strong>3단계 — 가정법원 재산분할 심판청구 (제척기간 내)</strong> — 사실혼 해소일로부터 2년 안에 심판청구. 잠적이면 공시송달 병행.</li>\n<li><strong>4단계 — 재산명시·재산조회 (2~3개월)</strong> — 가사소송법상 재산명시 명령. 미이행 시 1년 이하 징역·1천만 원 이하 과태료.</li>\n<li><strong>5단계 — 분할 결정 + 집행 (변론 종결 후 1~3개월)</strong> — 사실혼 해소 시점 시가 기준으로 분할(대법원 2022므11027 취지). 미이행 시 강제집행·가압류.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">제척기간·소재 추적·재산명시 트랙을 AI가 케이스별로 정리해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 사실혼 잠적·사망 청구 7가지',
        content:
          '<p><strong style="color:#1e3a5f">청구 단계별로 필요한 자료를 정리합니다.</strong></p>\n<ul>\n<li><strong>1. 사실혼 입증 자료</strong> — 결혼식·예물·청첩장·양가 인사 사진·동거 시작 시점 자료(주민등록·임대차계약).</li>\n<li><strong>2. 공동생활 입증 자료</strong> — 통장 거래내역·생활비 송금·공과금 분담·SNS 게시물.</li>\n<li><strong>3. 해소 시점 입증 자료</strong> — 짐 정리 사진·일방 통보 카톡·문자·연락두절 시점·주민등록 분리.</li>\n<li><strong>4. 상대방 신원·소재 자료</strong> — 마지막 주소·근무처·차량·연락처. 모르면 사실조회 신청.</li>\n<li><strong>5. 공동 형성 재산 자료</strong> — 부동산 등기부·예금·주식·차량 등기·공동 명의 자산.</li>\n<li><strong>6. 본인 기여 입증 자료</strong> — 본인 소득·생활비 분담·가사 기여·자녀 양육 자료.</li>\n<li><strong>7. (사망 시) 사망 자료</strong> — 사망진단서·기본증명서·잔존재산 자료·상속인 정보.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 잠적 후 시간이 흐를수록 자료 확보·소재 추적이 어려워집니다. 해소 시점부터 빠르게 청구 준비를 시작하면 도움이 됩니다. 시효는 출소기간이라 기간 내 심판청구가 필수.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 사실혼 잠적·사망 사건에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>2년 제척기간 도과</strong> — 사실혼 해소일로부터 2년 안에 심판청구 안 하면 권리 소멸. 단순 협의·내용증명만으로는 부족(대법원 2020스561 취지).</li>\n<li><strong>"잠적이라 청구 못 한다"는 오해</strong> — 사실조회·공시송달로 절차 진행 가능. 소재 불명도 청구 포기 사유 아님.</li>\n<li><strong>일방 사망 시 상속권 주장</strong> — 사실혼 배우자에게 상속권 없음. 사망 전 공동 형성·기여 재산에 대한 부분만 별도 청구 검토 가능. 상속분 다툼은 다른 트랙.</li>\n<li><strong>해소 시점 모호 → 시효 기산점 다툼</strong> — 짐 정리·통보 카톡·주민등록 분리 등 객관적 시점 자료가 약하면 시효 기산점 다툼. 시점 자료를 명확히 기록.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 한국가정법률상담소 1644-7077 / 가정법원 민원실 / 사선 변호사 조력은 사실혼 입증·소재 추적·재산명시 신청 설계에 효과적.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실혼 재산분할청구권의 제척기간',
        summary:
          '대법원 2020스561 사건(대법원, 2022.06.30 선고)에서 법원은 재산분할에 관한 민법 규정이 사실혼관계에 유추적용된다고 판단하면서 민법 제839조의2 제3항에서 정한 재산분할청구권 행사기간의 법적 성질이 제척기간이고, 위 제척기간이 그 기간 내에 재산분할심판 청구를 하여야 하는 출소기간이라고 판시했습니다. 사실혼 해소 후 단순 협의·내용증명만으로는 권리 보존이 어렵고 기간 내 가정법원 심판청구가 필수라는 시사점이 있어, 해소 시점부터 청구 준비를 일관되게 정리해두면 도움이 됩니다.',
        takeaway: '사실혼 재산분할청구권은 해소일로부터 2년의 제척기간(출소기간)이므로, 잠적·연락두절이라도 시점을 확정하고 빠르게 가정법원 심판청구로 권리를 보존해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '잠적한 지 얼마부터 사실혼 해소로 보나요?',
        answer:
          '<strong>일방적 짐 정리·연락두절·주민등록 분리 시점을 통상 해소로 보는 사례가 많습니다.</strong> 짧은 다툼·일시적 별거는 해소로 보기 어려움. 객관적 시점 자료가 핵심.',
      },
      {
        question: '상대방 소재를 모르는데 청구할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 가정법원 사실조회로 통신사·금융기관·국세청 협조로 주소·근무지 확보 가능. 끝까지 소재 불명이면 공시송달로 절차 진행.',
      },
      {
        question: '사실혼 배우자가 사망하면 재산은 어떻게 되나요?',
        answer:
          '<strong>상속권은 없습니다.</strong> 다만 사망 전 공동 형성·기여한 재산에 대한 청구 가능 여부는 사례별 판단. 공무원연금·국민연금 유족급여는 사실혼 배우자 인정. 별도 신청 필요.',
      },
      {
        question: '제척기간을 놓치면 끝인가요?',
        answer:
          '<strong>원칙적으로 2년 도과 시 청구 불가입니다.</strong> 제척기간은 출소기간이라 기간 내 심판청구가 필수. 다만 사기·강박으로 청구 방해된 사례 등 예외 검토 여지가 있어 변호사 자문 권장.',
      },
      {
        question: '사실혼·이혼 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 한국가정법률상담소(1644-7077)도 사실혼 상담 운영. 사선 변호사는 사실혼 입증·소재 추적·재산명시 설계에서 효과 큼.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '사실혼 해소 재산분할', href: '/guide/divorce/divorce-de-facto-marriage-dissolution' },
      { label: '사실혼 위자료 청구', href: '/guide/divorce/divorce-de-facto-marriage-alimony-claim' },
      { label: '동거 재산 정리', href: '/guide/divorce/divorce-cohabitation-property-dissolution' },
      { label: '동거 재산 분할', href: '/guide/divorce/divorce-cohabitation-property-division' },
      { label: '사망 후 재산 청구', href: '/guide/divorce/divorce-after-spouse-death-property-claim' },
    ],
  },
];
