import { SpokePage } from '../spoke-pages';

// batch47 misc 5개
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 확정 양육비 채권을 보유하고 있는데 비양육친의 급여를 직접 받고 싶은 양육자가 직접지급명령 절차와 준비서류를 정리하도록 돕는 페이지다.
// 2. 이 페이지는 소득이 들쭉날쭉한 자영업자로 개인회생 변제계획안 작성에서 변동소득 반영 방식을 모르는 사람이 현실적인 변제계획을 준비하도록 돕는 페이지다.
// 3. 이 페이지는 파산·면책 결정 이후 이혼 재산분할 협의를 앞둔 사람이 파산이 재산분할에 미치는 법적 영향을 파악하도록 돕는 페이지다.
// 4. 이 페이지는 통근 중 평소와 다른 우회로에서 사고가 난 근로자가 통근재해 인정 범위를 확인하고 산재 신청을 준비하도록 돕는 페이지다.
// 5. 이 페이지는 헤어진 연인이 SNS·메시지로 반복 연락하거나 계정을 찾아내 괴롭히는 피해자가 스토킹처벌법 잠정조치·접근금지 신청 절차를 정리하도록 돕는 페이지다.

export const spokesBatch47Misc: SpokePage[] = [
  // ─── 1. child-support / 직접지급명령 절차 ───
  {
    domain: 'child-support',
    slug: 'child-support-direct-payment-order-process',
    keyword: '양육비 직접지급명령 절차',
    questionKeyword: '비양육친 월급에서 양육비를 직접 받아낼 수 있는 방법이 있나요?',
    ctaKeyword: '양육비 직접지급명령 절차 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양육비 직접지급명령 신청 4단계 절차 총정리 | 로앤가이드',
      description:
        '확정 양육비를 안 줄 때 비양육친 회사에 직접 청구하는 직접지급명령 신청 절차와 준비서류를 지금 확인하세요.',
    },
    intro:
      '<p>매달 양육비 날짜가 되면 가슴이 철렁 내려앉는 분이 계실 겁니다. 이체 확인 메시지가 없고, 연락도 끊기고, 법원 이행명령에도 꿈쩍 않는 상황이라면 막막함이 이만저만이 아닐 거예요. 가사소송법 제63조의2에 따른 직접지급명령은 비양육친의 사용자(회사)가 직접 양육자에게 양육비를 지급하도록 법원이 명령하는 제도로, 급여 통장을 우회해 핵심을 차단하는 방법으로 검토해볼 수 있습니다. 확정 양육비 채권만 있으면 별도 소송 없이 신청할 수 있으니 절차를 먼저 정리해두는 것이 좋습니다.</p>',
    sections: [
      {
        title: '직접지급명령이란 — 이행명령·감치와 무엇이 다른가',
        content:
          '<p><strong style="color:#1e3a5f">이행명령·감치는 채무자를 압박하고, 직접지급명령은 채무자의 급여 자체를 막아서는 방식입니다.</strong></p>\n<ul>\n<li><strong>이행명령(가사소송법 제64조)</strong> — 법원이 채무자에게 이행 촉구. 불이행 시 1천만원 이하 과태료. 상습 회피자에게 한계가 있음.</li>\n<li><strong>감치명령(가사소송법 제68조)</strong> — 3기 이상 미이행 시 30일 이하 감치. 이행명령이 선행되어야 신청 가능.</li>\n<li><strong>직접지급명령(가사소송법 제63조의2)</strong> — 비양육친이 정기적 급여(임금·연금 등)를 받는 경우, 그 사용자(회사)가 양육자에게 직접 지급하도록 법원이 명령. 채무자 협조 불필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 비양육친이 직장이 있고 확정 양육비 채권이 있다면 직접지급명령이 가장 실효적인 수단으로 검토될 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 직접지급명령 4단계',
        content:
          '<p><strong style="color:#1e3a5f">양육비이행관리원(CSA) 공식 절차 기준으로 보면, 다음 흐름으로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 집행권원 확인 (즉시)</strong> — 법원 심판문·조정조서·공정증서 등 확정 양육비 채권 서류를 먼저 확보합니다. 집행권원 없으면 신청 자체가 불가합니다.</li>\n<li><strong>2단계 — 비양육친 근무지 파악 (1~2주)</strong> — 직접지급명령은 사용자에게 가는 것이므로 회사명·주소가 필요합니다. 모를 경우 양육비이행관리원(1644-6621)에 조사지원 신청이 가능합니다.</li>\n<li><strong>3단계 — 가정법원 신청 (서류 준비 후 즉시)</strong> — 관할 가정법원(가사법원)에 직접지급명령 신청서와 아래 준비서류를 제출합니다.</li>\n<li><strong>4단계 — 법원 결정·사용자 통보 (결정 후 1~2주)</strong> — 법원이 결정 후 비양육친 회사에 결정문을 송달하고, 이후 월급에서 양육비가 직접 이체됩니다.</li>\n</ol>\n<p><strong>준비서류</strong></p>\n<ul>\n<li>직접지급명령 신청서 (가정법원 서식)</li>\n<li>집행권원 정본 (심판문·조정조서·공정증서 중 해당)</li>\n<li>가족관계증명서 (자녀 포함)</li>\n<li>비양육친 근무지 확인 서류 (재직증명서·건강보험 가입내역 등)</li>\n<li>신청인 신분증 사본</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 미지급 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">직접지급명령 외에 이행명령·감치·제재조치까지 상황에 맞는 절차를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 절차 정리하기 →</a>\n</div>',
      },
      {
        title: '직접지급명령 이후 — 불이행·직장 변경 시 대응',
        content:
          '<p><strong style="color:#1e3a5f">직접지급명령이 확정돼도 비양육친이 퇴직하거나 회사가 이행을 거부할 수 있습니다. 이 경우 추가 절차를 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>사용자 과태료</strong> — 정당한 이유 없이 결정을 이행하지 않는 사용자는 1천만원 이하 과태료 대상이 될 수 있습니다(가사소송법 제67조의2 준용).</li>\n<li><strong>퇴직·이직 시 재신청</strong> — 비양육친이 직장을 변경하면 새 사용자에게 다시 신청해야 합니다. 양육비이행관리원에 근무지 조사 지원을 요청할 수 있습니다.</li>\n<li><strong>병행 조치 — 제재 신청</strong> — 이행 없이 계속 미지급 시 운전면허정지·출국금지·명단공개 신청을 양육비이행관리원을 통해 검토할 수 있습니다.</li>\n<li><strong>일시금지급명령</strong> — 담보제공명령 미이행 후 가사소송법 제63조의3 제4항에 따른 일시금지급명령으로 전환하는 방법도 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 비양육친 근무지를 모를 경우 건강보험공단에 가입자 자격 조회 협조요청(가사법원 경유)이나 양육비이행관리원 조사지원을 우선 검토하세요.</blockquote>',
      },
      {
        title: '직접지급명령 관련 자주 하는 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 3가지 실수를 피하면 절차가 훨씬 빨라집니다.</strong></p>\n<ul>\n<li><strong>집행권원 없이 신청</strong> — 법원 심판·조정·공정증서로 확정된 양육비여야 합니다. 협의이혼 서류만으로는 부족한 경우가 있으니 확인이 필요합니다.</li>\n<li><strong>비양육친 근무지를 모른 채 신청</strong> — 사용자가 특정되지 않으면 결정문 송달이 불가합니다. 먼저 근무지를 확인하세요.</li>\n<li><strong>직접지급명령만으로 모든 문제가 해결된다고 기대</strong> — 비양육친이 퇴사하면 효력이 상실됩니다. 양육비이행관리원 등록으로 추심 지원과 제재 조치를 병행하는 것이 현실적입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 이행명령을 한 번도 거치지 않아도 직접지급명령은 단독으로 신청이 가능합니다. 이행명령이 감치의 선행요건이지, 직접지급명령의 전제조건은 아닙니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 직접지급명령의 성격과 집행권원의 범위',
        summary:
          '대법원 2025으517 사건(대법원, 2025.05.23 선고)에서 법원은 가사소송법 제64조의 이행명령은 이미 확정된 의무의 실현 절차이므로, 확정된 의무의 범위를 넘어서 이행명령을 할 수 없다고 판시했습니다. 직접지급명령 역시 확정 양육비 채권의 내용과 범위 안에서만 사용자에 대한 지급을 명할 수 있다는 취지가 담겨 있습니다.',
        takeaway: '직접지급명령 신청 전 집행권원에 기재된 양육비 금액·주기를 정확히 확인하는 것이 우선입니다.',
      },
    ],
    faq: [
      {
        question: '비양육친이 프리랜서라 급여가 일정하지 않은데 신청할 수 있나요?',
        answer:
          '<strong>정기적 수입이 있는 경우에 적용됩니다.</strong> 프리랜서라도 특정 사업체에서 정기 보수를 받는다면 해당 사업체를 사용자로 특정해 신청을 검토할 수 있습니다. 불규칙 소득이라면 재산 압류·경매 쪽을 함께 고려하는 것이 좋습니다.',
      },
      {
        question: '비양육친이 직장을 숨기고 있어요. 어떻게 파악하나요?',
        answer:
          '<strong>양육비이행관리원(1644-6621)에 조사지원을 신청할 수 있습니다.</strong> 가정법원을 통해 국민건강보험공단·국세청에 가입자 정보를 조회하는 방법도 절차적으로 검토 가능합니다.',
      },
      {
        question: '직접지급명령은 가압류와 어떻게 다른가요?',
        answer:
          '<strong>가압류는 본안소송 전 보전처분이고, 직접지급명령은 이미 확정된 양육비 채권의 이행 수단입니다.</strong> 별도 소송 없이 집행권원(심판·조정 등)만 있으면 바로 신청 가능하므로 절차가 더 빠를 수 있습니다.',
      },
      {
        question: '직접지급명령 결정 후 비양육친 회사가 무시하면 어떻게 되나요?',
        answer:
          '<strong>사용자에게 과태료가 부과될 수 있습니다.</strong> 법원 결정을 이행하지 않는 사용자에게 가사소송법상 제재 조치를 신청할 수 있으니 결정문을 잘 보관해두세요.',
      },
      {
        question: '이행명령을 아직 신청하지 않았는데 직접지급명령 먼저 해도 되나요?',
        answer:
          '<strong>네, 이행명령은 직접지급명령의 전제조건이 아닙니다.</strong> 확정 양육비 채권이 있다면 이행명령 없이도 직접지급명령을 먼저 신청할 수 있습니다.',
      },
    ],
    cta: { text: '양육비 못 받을 때 다음 단계, AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 이행명령 신청 절차', href: '/guide/child-support/child-support-enforcement-order-steps' },
      { label: '감치명령 신청 요건', href: '/guide/child-support/child-support-detention-order-requirements' },
      { label: '양육비이행관리원 무료 지원', href: '/guide/child-support/child-support-csa-free-support' },
      { label: '양육비 강제집행 재산 조회', href: '/guide/child-support/child-support-asset-investigation' },
      { label: '양육비 산정기준표 활용법', href: '/guide/child-support/child-support-calculation-standard' },
    ],
  },

  // ─── 2. rehabilitation / 자영업 변동소득 변제계획 ───
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-self-employed-fluctuating-income',
    keyword: '자영업 변동 소득 개인회생 변제계획',
    questionKeyword: '자영업자인데 소득이 들쭉날쭉해서 개인회생 변제계획을 어떻게 세워야 하나요?',
    ctaKeyword: '자영업 변동소득 변제계획 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '자영업자 변동소득 개인회생 변제계획 5가지 핵심 | 로앤가이드',
      description:
        '소득이 매달 다른 자영업자가 개인회생 변제계획안을 작성할 때 변동소득 반영 방법과 최소변제 기준을 지금 확인하세요.',
    },
    intro:
      '<p>가게 매출이 한 달은 400만 원, 다음 달은 150만 원일 때 "내가 정말 개인회생 신청이 가능한 건지" 의문이 드는 분들이 많습니다. 직장인처럼 급여명세서가 없으니 소득 증빙 자체도 막막하고, 변제계획안을 어떻게 써야 할지 감이 오지 않을 겁니다. 자영업자는 직장인과 달리 "가처분소득"을 산출하는 방식이 다르고, 비용 공제 항목과 소득 평균화 방식도 법원마다 운용 기준이 조금씩 다릅니다. 아래에서 핵심 포인트를 정리해드립니다.</p>',
    sections: [
      {
        title: 'Q. 자영업자의 소득은 변제계획에서 어떻게 산정되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 통상 최근 3~12개월 평균 소득(순수익)을 기준으로 가처분소득을 산출합니다.</strong></p>\n<ul>\n<li><strong>소득 기준 기간</strong> — 법원마다 3개월~12개월 평균을 적용합니다. 회생법원은 일반적으로 최근 6~12개월을 요구하는 경우가 많으니 해당 법원 실무를 확인해야 합니다.</li>\n<li><strong>순수익 = 매출 – 사업 경비</strong> — 재료비·임차료·인건비·세금 등 실제 사업비를 공제한 금액이 소득입니다. 경비 증빙(세금계산서·간이영수증)을 모아두는 것이 중요합니다.</li>\n<li><strong>가처분소득 = 순수익 – 생계비</strong> — 법원이 인정하는 최저생계비(중위소득 기준)를 공제한 나머지가 변제 재원입니다.</li>\n<li><strong>최소변제 기준</strong> — 채무자 회생 및 파산에 관한 법률 제614조에 따라 비면제재산 가액 이상을 변제해야 합니다. 재산이 없더라도 가처분소득의 3년치가 하한이 될 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 소득 증빙이 핵심입니다. 부가세 신고서·종합소득세 신고서·장부·카드 매출 내역 등을 최소 6개월치 이상 준비해두세요.</blockquote>',
      },
      {
        title: 'Q. 소득이 들쭉날쭉하면 변제계획안을 어떻게 작성하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 비수기·성수기 편차가 크다면 계절 편차를 반영한 변제계획 설명을 함께 첨부하는 방식을 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>월 평균 소득 계산</strong> — 최근 12개월 순수익 합계 ÷ 12. 극단적 예외 월(폐업 직전 등)이 있다면 이유를 별도 소명합니다.</li>\n<li><strong>계절 편차 설명서 첨부</strong> — 음식점·관광업처럼 계절성이 강한 업종이라면 월별 변제액이 아니라 분기별 또는 연간 일정액으로 변제계획을 설계하는 방안을 검토할 수 있습니다.</li>\n<li><strong>변제 유예 구간 설정</strong> — 법원 허가를 전제로 일부 기간의 변제를 유예하거나 감액 변제 구간을 설정하는 방법도 있습니다.</li>\n<li><strong>사업 전망 소명</strong> — 향후 수입 예상 근거(계약서·단골 매출 추이)를 제출하면 법원이 변제 가능성을 더 우호적으로 판단할 수 있습니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 개인회생 신청 자격, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">변동소득 자영업자의 가처분소득 계산과 변제계획안 작성 포인트를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — KLAC 무료지원 포함 개인회생 절차',
        content:
          '<p><strong style="color:#1e3a5f">대한법률구조공단(KLAC) 공식 절차 기준으로 보면, 다음 흐름으로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — KLAC 법률상담 (132, 사전 예약)</strong> — 기준 중위소득 125% 이하 또는 기초생활수급자라면 변호사 비용 면제 구조 대상이 될 수 있습니다.</li>\n<li><strong>2단계 — 소득·재산 증빙 자료 준비 (1~2주)</strong> — 부가세 신고서, 종합소득세 신고서, 최근 6~12개월 카드 매출 내역, 사업 경비 영수증 일체.</li>\n<li><strong>3단계 — resu.klac.or.kr 신청서 자동작성</strong> — 공단 종합지원센터 프로그램으로 변제계획안 포함 신청서를 작성합니다.</li>\n<li><strong>4단계 — 법원 제출 및 개시 결정 대기 (1~2개월)</strong> — 법원이 개시 결정을 내리면 변제계획안 심리가 시작됩니다.</li>\n<li><strong>5단계 — 변제계획 인가 → 3~5년 변제 진행</strong> — 인가 후 매월 변제금을 납부하고, 완료 시 남은 채무가 면책될 수 있습니다.</li>\n</ol>\n<p><strong>준비서류 핵심 목록</strong></p>\n<ul>\n<li>최근 2년치 종합소득세 신고서 (세무서 발급)</li>\n<li>부가세 신고서 (해당자)</li>\n<li>사업용 카드 매출 내역 (최근 12개월)</li>\n<li>임차 사업장이면 임대차계약서</li>\n<li>채권자 목록 (금융기관·사인 채무 전부)</li>\n</ul>',
      },
      {
        title: 'Q. 폐업 후에도 개인회생 신청이 가능한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 폐업 후 재취업했거나 다른 소득이 있다면 신청 가능합니다.</strong></p>\n<ul>\n<li><strong>변제 재원 요건</strong> — 채무자 회생 및 파산에 관한 법률 제579조는 "장래에 계속적으로 또는 반복해서 수입을 얻을 가능성"을 요구합니다. 폐업 직후 취업했거나 재창업 준비 중이라도 소득이 입증되면 신청 가능합니다.</li>\n<li><strong>소득 없는 경우 — 파산·면책 검토</strong> — 변제 재원을 마련하기 어려운 상황이라면 개인회생보다 파산·면책 절차가 더 적합할 수 있습니다.</li>\n<li><strong>KLAC 상담 먼저</strong> — 어느 절차가 유리한지는 부채 규모·재산 현황·소득 전망을 종합해야 하므로 132로 먼저 상담을 받아보는 것이 좋습니다.</li>\n<li><strong>폐업 3개월 이내 급박한 채무 — 가압류 방어</strong> — 채권자가 재산 압류에 나서기 전에 신청을 서두르면 자동 중지 효과로 강제집행을 일시 차단할 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 개인회생 신청 후 재산 은닉·허위 신고가 발각되면 면책이 취소될 수 있습니다. 채권자 목록에서 빠뜨린 채무가 있으면 면책 효력이 미치지 않을 수 있으니 전부 기재해야 합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 개인회생 변제계획과 변제기 해석 원칙',
        summary:
          '대법원 2023다239756 사건(대법원, 2025.12.11 선고)에서 법원은 인가된 회생계획은 문언의 객관적 의미를 합리적으로 해석하되, 회생계획 작성 경위와 이해관계인의 진정한 의사 등을 종합하여 형평의 이념에 맞게 해석해야 한다고 판시했습니다.',
        takeaway: '변제계획안의 문구와 변제 구간을 명확히 작성해두지 않으면 이후 분쟁이 생길 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '카드 매출 내역만 있고 세금신고를 안 했어요. 소득 증빙이 될까요?',
        answer:
          '<strong>카드 매출 내역은 기본 증빙이 됩니다.</strong> 다만 세금신고 누락 사실이 드러날 수 있으니 KLAC 상담 시 솔직하게 공개하고 보완 서류를 함께 준비하는 것이 좋습니다.',
      },
      {
        question: '변제계획 기간 중 소득이 더 줄면 어떻게 되나요?',
        answer:
          '<strong>사정변경에 따른 변제계획 변경 신청이 가능합니다.</strong> 소득이 현저히 감소했다면 법원에 변제계획 변경 허가를 신청하는 절차를 검토해볼 수 있습니다.',
      },
      {
        question: '자영업 빚 중 보증채무도 개인회생에 포함되나요?',
        answer:
          '<strong>원칙적으로 포함됩니다.</strong> 다만 주채무자가 따로 있고 보증 채무가 연대보증인 경우 채권자 목록에 모두 기재해야 하고, 보증 대상 주채무자에게도 영향이 있을 수 있습니다.',
      },
      {
        question: '개인회생 중에 가게를 계속 운영할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 개인회생 개시 결정 후에도 사업을 계속하는 것이 가능하지만, 매출·경비 변동이 생기면 관리위원(또는 법원)에게 보고하는 의무가 있을 수 있습니다.',
      },
      {
        question: 'KLAC 무료 지원 자격이 안 되면 어떻게 하나요?',
        answer:
          '<strong>서울회생법원 자체 지원 프로그램이나 신용회복위원회를 병행 검토할 수 있습니다.</strong> 재산이 없고 소득이 낮다면 파산 면책 절차가 더 적합할 수 있으니 상담을 통해 확인하세요.',
      },
    ],
    cta: { text: '개인회생 신청 자격, AI로 점검하기', link: '/chat?domain=rehabilitation' },
    internalLinks: [
      { label: '개인회생 신청 자격 요건', href: '/guide/rehabilitation/rehabilitation-eligibility-requirements' },
      { label: '변제계획안 작성 포인트', href: '/guide/rehabilitation/rehabilitation-repayment-plan-writing' },
      { label: '개인회생 vs 파산 선택 기준', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy-comparison' },
      { label: 'KLAC 법률구조 무료 지원', href: '/guide/rehabilitation/rehabilitation-klac-free-support' },
      { label: '자영업 폐업 후 파산 절차', href: '/guide/bankruptcy/bankruptcy-self-employed-closing-procedure' },
    ],
  },

  // ─── 3. bankruptcy / 파산 후 이혼 재산분할 영향 ───
  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-divorce-property-impact',
    keyword: '파산 후 이혼 재산분할 영향',
    questionKeyword: '파산·면책 결정을 받았는데 이혼 재산분할 협의를 해야 해요. 파산이 영향을 주나요?',
    ctaKeyword: '파산 후 재산분할 쟁점 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '파산·면책 후 이혼 재산분할 5가지 쟁점 정리 | 로앤가이드',
      description:
        '파산 면책 후 이혼 재산분할을 할 때 파산재단·면책 범위·재산분할 청구권이 어떻게 상호작용하는지 지금 확인하세요.',
    },
    intro:
      '<p>"파산 면책을 받았는데 이혼도 해야 할 것 같은데, 재산이 아무것도 없는데 무슨 분할을 한다는 건지 모르겠어요"라는 상담이 늘고 있습니다. 파산·면책이 확정되면 대부분의 채무 책임은 면제되지만, 이혼 시 재산분할 청구권은 별개의 문제입니다. 남은 재산이 없더라도 혼인 중 쌓인 기여분을 다투는 경우가 있고, 반대로 상대방 배우자가 파산 절차 이전에 은닉했다고 주장하는 상황도 생깁니다. 두 절차가 얽히는 핵심 쟁점을 정리합니다.</p>',
    sections: [
      {
        title: 'Q. 파산 면책 후에도 이혼 재산분할 청구가 가능한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 파산·면책 절차와 이혼 재산분할은 별개이므로 면책 후에도 재산분할 청구가 가능합니다.</strong></p>\n<ul>\n<li><strong>재산분할청구권 독립성</strong> — 재산분할청구권은 채무가 아니라 혼인 중 공동재산 청산 권리이므로, 파산 면책의 영향을 받지 않습니다. 이혼 후 2년 내에 청구해야 합니다(민법 제839조의2).</li>\n<li><strong>파산재단 소멸 후 남은 재산</strong> — 파산 선고 후 취득한 재산(신득재산)은 파산재단에 속하지 않고 본인 재산으로 남습니다. 이 재산도 재산분할 대상이 될 수 있습니다.</li>\n<li><strong>기여분 인정</strong> — 직접 재산이 없더라도 혼인 기간 중 배우자의 소득 창출에 기여한 사실(가사 노동·육아)이 있다면 기여분으로 인정될 수 있습니다.</li>\n<li><strong>파산 전 재산 처분 여부</strong> — 배우자가 파산 전 재산을 증여·은닉한 사정이 있다면 사해행위 취소 또는 재산분할에서의 기여분 주장으로 다툴 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 이혼은 파산과 별개의 절차입니다. 면책 여부와 무관하게 혼인 중 기여분 계산이 재산분할의 출발점입니다.</blockquote>',
      },
      {
        title: 'Q. 파산재단에 넘어간 재산도 분할 대상이 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 파산재단에 귀속된 재산은 채권자 변제에 사용되므로 직접 분할 대상에서 제외되는 것이 원칙입니다.</strong></p>\n<ul>\n<li><strong>파산선고 전 재산 — 파산재단 귀속</strong> — 파산 선고 시점의 재산 전부가 파산재단을 구성하므로, 배우자가 그 재산에 대해 분할을 요구해도 이미 채권자에게 배당된 경우 실질적으로 받기 어렵습니다.</li>\n<li><strong>파산관재인 처분 이후</strong> — 파산관재인이 재산을 환가·배당 완료하면 잔여 재산이 없어 분할 대상이 소멸합니다.</li>\n<li><strong>공동명의 재산의 경우</strong> — 부부 공동명의 부동산 등은 파산재단 귀속 전 분할 협의가 복잡해질 수 있으므로 파산관재인과의 협의 또는 법원 허가가 필요할 수 있습니다.</li>\n<li><strong>면책 후 취득 재산</strong> — 면책 결정 확정 후 취득한 재산(면책 후 근로소득·상속 등)은 파산재단과 무관하므로 재산분할 대상이 될 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 파산 면책 가능성, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">파산 절차와 이혼 재산분할이 얽힌 상황에서 어느 절차를 먼저 진행할지 AI가 흐름을 안내해드립니다.</p>\n<a href="/chat?domain=bankruptcy" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 파산·이혼 병행 시 절차 흐름',
        content:
          '<p><strong style="color:#1e3a5f">KLAC 파산·회생 지원 절차 기준으로 보면, 다음 흐름으로 검토해볼 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — KLAC 상담 (132)</strong> — 파산과 이혼을 동시에 진행해야 하는 경우 어느 쪽을 먼저 처리할지 확인. 상황에 따라 이혼 조정 먼저가 나을 수도 있음.</li>\n<li><strong>2단계 — 파산 신청 (재산 목록·채권자 목록 작성)</strong> — resu.klac.or.kr 에서 신청서 자동작성. 배우자 공동재산이 있다면 명기.</li>\n<li><strong>3단계 — 파산선고·파산재단 확정 (수개월)</strong> — 파산관재인이 재산 환가 개시. 공동명의 재산이 있다면 이 시점에서 배우자와 협의 필요.</li>\n<li><strong>4단계 — 면책 결정 (파산선고 후 1~3년 내)</strong> — 면책 확정 후 채무 책임 소멸. 이 시점부터 신득재산이 본인 귀속.</li>\n<li><strong>5단계 — 이혼 재산분할 협의 또는 재판 (이혼 후 2년 내)</strong> — 면책 후 남은 재산·신득재산·기여분을 기준으로 재산분할 청구 진행.</li>\n</ol>',
      },
      {
        title: 'Q. 배우자의 파산으로 내 재산분할 청구권이 사라지나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 원칙적으로 사라지지 않습니다. 단, 회수 가능한 재산이 없을 수 있어 실질적 결과가 달라집니다.</strong></p>\n<ul>\n<li><strong>재산분할청구권은 비면책채권</strong> — 채무자 회생 및 파산에 관한 법률 제566조가 열거한 비면책채권에 재산분할청구권은 포함되지 않으나, 이미 파산재단에 넘어간 재산은 되찾기 어렵습니다.</li>\n<li><strong>사해행위 취소 검토</strong> — 배우자가 파산 직전 재산을 제3자에게 증여·이전했다면 사해행위 취소 소송으로 되돌리는 방법을 검토할 수 있습니다.</li>\n<li><strong>기여분 청구 우선</strong> — 재산이 없어도 혼인 기간 중 가사 기여분을 금전 배상으로 청구하는 방법이 있습니다. 법원은 혼인 기간·기여 사실 등을 종합적으로 고려합니다.</li>\n<li><strong>위자료는 별도 청구</strong> — 유책 배우자에 대한 위자료는 재산분할과 다른 청구로 파산 면책의 영향을 다르게 받을 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 파산·이혼 절차가 겹치면 법적 관계가 복잡해지므로 두 절차를 아는 전문가 상담이 중요합니다. 법률구조공단(132)에서 무료 상담을 받아보실 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 파산채권자에 대한 변제 효력과 파산관재인 추인',
        summary:
          '대법원 2023다316387 사건(대법원, 2026.01.29 선고)에서 법원은 파산선고 후 채무자의 재산에 관한 법률행위는 파산관재인에 대항할 수 없으나, 파산관재인이 채권자 전체의 이익을 위해 이를 추인하면 그 법률행위는 유효해진다고 판시했습니다.',
        takeaway: '파산 절차 중 재산 처분·협의가 필요할 때는 가능한 한 파산관재인의 동의 또는 법원 허가를 확인해야 합니다.',
      },
    ],
    faq: [
      {
        question: '파산 중에 이혼 조정 신청을 할 수 있나요?',
        answer:
          '<strong>할 수 있습니다.</strong> 파산 절차와 이혼 절차는 별개이므로 병행 진행이 가능합니다. 다만 재산 관련 부분은 파산관재인과 조율이 필요할 수 있습니다.',
      },
      {
        question: '파산 면책을 받으면 배우자에 대한 위자료도 면제되나요?',
        answer:
          '<strong>위자료가 비면책채권인지 여부는 사정에 따라 다를 수 있습니다.</strong> "악의"에 의한 불법행위로 인한 손해배상은 면책에서 제외될 수 있으므로, 위자료가 있는 경우 법원 판단이 필요합니다.',
      },
      {
        question: '배우자 파산 전에 아파트를 공동명의로 이전했는데 문제가 되나요?',
        answer:
          '<strong>사해행위로 다툼이 생길 수 있습니다.</strong> 파산 직전 제3자나 배우자로 재산을 이전하면 파산관재인이 취소 소송을 제기할 수 있습니다. 협의이전이더라도 채권자를 해할 의도가 인정되면 문제가 됩니다.',
      },
      {
        question: '이혼 재산분할 청구 시효는 언제까지인가요?',
        answer:
          '<strong>이혼한 날로부터 2년 이내입니다(민법 제839조의2 제3항).</strong> 시효가 지나면 청구 자체가 불가능해지므로 빠르게 움직이는 것이 중요합니다.',
      },
    ],
    cta: { text: '파산 면책 가능성, AI로 점검하기', link: '/chat?domain=bankruptcy' },
    internalLinks: [
      { label: '파산 신청 절차와 서류', href: '/guide/bankruptcy/bankruptcy-personal-filing-procedure' },
      { label: '파산 면책 비면책채권 구분', href: '/guide/bankruptcy/bankruptcy-non-dischargeable-claims' },
      { label: '파산 후 재산 취득과 신득재산', href: '/guide/bankruptcy/bankruptcy-after-property-acquisition' },
      { label: '이혼 재산분할 청구 절차', href: '/guide/divorce/divorce-property-division-procedure' },
      { label: '사해행위 취소 소송 검토', href: '/guide/bankruptcy/bankruptcy-fraudulent-transfer-cancel' },
    ],
  },

  // ─── 4. industrial-accident / 통근재해 우회로 인정 ───
  {
    domain: 'industrial-accident',
    slug: 'industrial-accident-commute-detour-coverage',
    keyword: '통근재해 우회로 인정',
    questionKeyword: '퇴근길에 마트에 들렀다가 사고가 났는데 산재 처리가 될까요?',
    ctaKeyword: '통근재해 인정 범위 확인',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '통근재해 우회로 산재 인정 5가지 판단 기준 | 로앤가이드',
      description:
        '마트·병원·탁아소 경유 퇴근 중 사고가 통근재해로 인정되는 조건과 근로복지공단 신청 절차를 지금 확인하세요.',
    },
    intro:
      '<p>퇴근길에 잠깐 마트에 들른 사이 사고가 났는데 "이게 산재가 되나?"라는 의문이 드셨을 겁니다. 가던 길을 조금만 돌아도 통근재해 인정이 취소된다는 이야기를 들었을 수도 있고요. 산업재해보상보험법 제37조 제1항 제3호는 통상적인 경로와 방법으로 출퇴근하는 중의 사고를 업무상 재해로 인정합니다. 단, 경로를 일탈하거나 중단한 경우에는 원칙적으로 그 후의 사고는 인정되지 않는데, 예외 규정이 있습니다. 어디서 어떻게 벗어나면 인정이 되고 안 되는지를 정리합니다.</p>',
    sections: [
      {
        title: 'Q. "통상적인 경로"는 어떤 기준으로 판단하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 일반적으로 사용하는 경로 + 시간대라면 약간의 우회도 통상 경로로 볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>고정 경로 불필요</strong> — 가능한 한 같은 길만 써야 하는 것이 아닙니다. 버스 노선 변경, 환승 방법 변화, 날씨·도로 상황에 따른 우회는 통상 경로 내로 볼 수 있습니다.</li>\n<li><strong>시간 기준</strong> — 출퇴근 시간대에 맞게 이동하고 있었다면 시간적 요건도 충족됩니다.</li>\n<li><strong>방법 기준</strong> — 도보·버스·지하철·자가용 등 평소와 다른 수단을 이용해도 통상 방법으로 인정될 수 있습니다.</li>\n<li><strong>목적지 기준</strong> — 자택 ↔ 직장이 기본이지만, 이중 취업자의 경우 사업장 간 이동도 포함됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "통상 경로"는 합리적 범위 내의 이동 경로 전반을 의미합니다. 조금 돌아갔다는 이유만으로 자동 탈락되지는 않습니다.</blockquote>',
      },
      {
        title: 'Q. 어떤 경유는 허용되고 어떤 경유는 안 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 산재법 제37조 제3항은 일상생활에 필요한 행위 중에서의 이탈·중단을 예외로 인정합니다.</strong></p>\n<ul>\n<li><strong>인정 가능성이 있는 경유</strong></li>\n<ul>\n<li>일용품·식품 구매 (마트·편의점 경유) — 생활에 필요한 최소 구매</li>\n<li>병원·약국 방문 — 본인 또는 동거 가족 치료 목적</li>\n<li>탁아소·어린이집 자녀 데리러 가기</li>\n<li>투표소 방문 (선거일)</li>\n</ul>\n<li><strong>인정 어려운 이탈</strong></li>\n<ul>\n<li>음주·유흥 목적 경유</li>\n<li>통근 경로에서 현저히 이탈한 장소 방문</li>\n<li>장시간 개인적 용무 처리 후 사고</li>\n</ul>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 통근재해 인정 범위, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">내 상황이 통근재해 예외 인정 사유에 해당하는지 AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=industrial-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 확인하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 통근재해 산재 신청 절차',
        content:
          '<p><strong style="color:#1e3a5f">근로복지공단(comwel) 공식 절차 기준으로 보면, 다음 흐름으로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 산재 지정 병원에서 진료 (사고 당일)</strong> — 통근재해도 요양급여 신청 대상입니다. 일반 보험으로 먼저 처리하면 나중에 정산 절차가 복잡해질 수 있으니 산재 지정 병원을 우선 방문하세요.</li>\n<li><strong>2단계 — 요양급여신청서 제출 (진료 직후)</strong> — 신청서 + 소견서 + 경위서(통근 경로·경유 목적 상세 기재)를 근로복지공단에 제출합니다.</li>\n<li><strong>3단계 — 공단 심사 (신청 후 7일 내 결정, 추가조사 시 연장)</strong> — 통근 경로·경유 목적이 일상생활에 필요한 행위였는지 심사합니다.</li>\n<li><strong>4단계 — 승인 시 요양 진행 / 불승인 시 불복 (90일 이내)</strong> — 불승인 결정에는 심사청구 → 재심사청구 → 행정소송 순으로 불복할 수 있습니다.</li>\n</ol>\n<p><strong>준비서류 핵심</strong></p>\n<ul>\n<li>요양급여신청서 + 의사 소견서</li>\n<li>통근 경로 지도 (평소 경로 + 사고 당일 경로 비교)</li>\n<li>경위서 (경유 목적·시간·장소 상세 기재)</li>\n<li>CCTV·블랙박스 영상 (있는 경우 즉시 확보)</li>\n<li>목격자 연락처</li>\n</ul>',
      },
      {
        title: 'Q. 불승인 결정을 받았는데 뒤집을 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 심사청구·재심사청구·행정소송 3단계 불복 절차가 있습니다. 경유 목적 소명이 핵심입니다.</strong></p>\n<ul>\n<li><strong>심사청구 (90일 이내)</strong> — 공단 산재심사위원회에 이의. 경위서·증거 보완 제출이 관건입니다.</li>\n<li><strong>재심사청구 (90일 이내)</strong> — 산업재해보상보험재심사위원회에 재청구.</li>\n<li><strong>행정소송 (90일 이내)</strong> — 법원에 처분 취소 소송 제기. 판례 축적이 많아 전문가 도움이 유리합니다.</li>\n<li><strong>소명 핵심</strong> — 경유 장소·시간이 일상생활상 합리적 범위(마트 10~15분, 약국 등)였음을 입증하는 자료를 준비해야 합니다. 카드 결제 내역·영수증도 유용합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 사고 직후 CCTV·블랙박스 영상은 시간이 지나면 덮어씌워집니다. 72시간 이내 경찰·병원·인근 상점에 영상 보존 요청을 먼저 하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 산재보험 제3자 범위와 공동 위험관계 기준',
        summary:
          '대법원 2022다214040 사건(대법원, 2026.01.22 선고)에서 법원은 산재보험법 제87조 제1항의 "제3자" 해당 여부는 사업장에 내재하는 동일한 위험을 공유하는지에 따라 결정해야 한다며, 건설기계 임대인 등이 원수급인의 지휘·명령 아래 작업했다면 공동 위험관계에 있어 제3자에 해당하지 않는다고 판시했습니다.',
        takeaway: '통근재해도 업무와의 연관성(이동 목적·경로)을 중심으로 공단이 판단하므로 경로·목적 소명이 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '마트에서 나오다 사고가 났는데 마트 안에서는 통근재해인가요?',
        answer:
          '<strong>경유 종료 후 복귀 경로에서 사고가 났다면 통근재해 인정 가능성이 있습니다.</strong> 마트 내부에서 매장 미끄럼 등으로 다쳤다면 통근재해가 아닌 일반 재해로 볼 수 있으니 상황에 따라 달리 접근해야 합니다.',
      },
      {
        question: '자가용 출퇴근 중 사고도 통근재해가 되나요?',
        answer:
          '<strong>가능합니다.</strong> 2017년 이후 산재법 개정으로 대중교통 외 자가용 통근 중 사고도 통근재해로 인정될 수 있습니다. 음주운전 등 본인의 중과실은 인정 범위에서 제외될 수 있습니다.',
      },
      {
        question: '출근 전 편의점에서 아침을 사다가 사고가 났어요. 인정되나요?',
        answer:
          '<strong>통상 경로 내 일상생활 필수 행위로 인정될 가능성이 있습니다.</strong> 편의점이 통근 경로상에 있거나 인근에 있다면 경유 목적이 생활 필수행위에 해당해 인정 대상으로 검토될 수 있습니다.',
      },
      {
        question: '산재 신청 기한이 있나요?',
        answer:
          '<strong>요양급여는 시효 규정은 없으나 빠를수록 좋습니다.</strong> 다만 휴업급여·장해급여는 지급 사유 발생일로부터 3년 이내에 청구해야 합니다(산재보험법 제112조).',
      },
      {
        question: '회사가 산재 신청을 막을 수 있나요?',
        answer:
          '<strong>불가능합니다.</strong> 근로자는 사업주 동의 없이 직접 근로복지공단에 요양급여를 신청할 수 있습니다. 사업주가 방해하면 산업안전보건법 위반이 될 수 있습니다.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=industrial-accident' },
    internalLinks: [
      { label: '산재 요양급여 신청 절차', href: '/guide/industrial-accident/industrial-accident-medical-care-application' },
      { label: '통근재해 인정 기준 총정리', href: '/guide/industrial-accident/industrial-accident-commute-coverage-comprehensive' },
      { label: '산재 불승인 심사청구 절차', href: '/guide/industrial-accident/industrial-accident-appeal-procedure' },
      { label: '통근재해 vs 교통사고 손해배상', href: '/guide/industrial-accident/industrial-accident-commute-traffic-comparison' },
      { label: '산재 휴업급여 계산법', href: '/guide/industrial-accident/industrial-accident-disability-benefit-calculation' },
    ],
  },

  // ─── 5. stalking / 헤어진 연인 온라인 스토킹 대응 ───
  {
    domain: 'stalking',
    slug: 'stalking-ex-partner-online-harass-relief',
    keyword: '헤어진 연인 온라인 스토킹 대응',
    questionKeyword: '헤어진 전 남자친구가 SNS로 계속 연락하고 계정을 찾아내 메시지를 보내는데 어떻게 막나요?',
    ctaKeyword: '온라인 스토킹 대응 절차 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '헤어진 연인 온라인 스토킹 대응 5단계 절차 | 로앤가이드',
      description:
        '전 파트너가 SNS·메시지·계정을 통해 반복 접근하는 온라인 스토킹에 잠정조치·접근금지 신청 절차를 지금 확인하세요.',
    },
    intro:
      '<p>차단해도 새 계정을 만들어 연락해오고, 지인을 통해 행방을 물어본다는 상담이 계속 들어옵니다. 헤어진 지 몇 달이 지났는데 여전히 근처를 서성이거나 직장 앞에 나타난다면 얼마나 공포스러울지, 말로 다 하기 힘든 상황일 겁니다. 스토킹처벌법(2021년 시행, 2023년 개정)은 피해자가 인식하지 못했더라도 객관적으로 불안감을 주기에 충분한 반복 행위를 스토킹으로 처벌합니다. 신고 → 잠정조치 → 접근금지까지 단계별로 정리합니다.</p>',
    sections: [
      {
        title: '스토킹처벌법이 온라인 행위를 어떻게 다루는가',
        content:
          '<p><strong style="color:#1e3a5f">스토킹처벌법 제2조는 정보통신망을 이용한 반복적 접근도 스토킹행위로 명시합니다.</strong></p>\n<ul>\n<li><strong>해당 행위 예시</strong></li>\n<ul>\n<li>차단 후 새 계정 생성 → 메시지 발송</li>\n<li>SNS 게시물 반복 조회·댓글·DM</li>\n<li>지인 계정을 통한 우회 연락</li>\n<li>카카오톡 차단 후 문자·이메일 반복 발송</li>\n<li>위치 태그 게시물로 간접적 존재 알리기</li>\n</ul>\n<li><strong>처벌 수위</strong> — 스토킹범죄: 3년 이하 징역 또는 3천만원 이하 벌금. 흉기·위험물 소지 또는 통신매체 이용 스토킹: 5년 이하 징역 또는 5천만원 이하 벌금.</li>\n<li><strong>피해자 인식 불필요</strong> — 대법원 2025도36 판결(2025.10.30 선고)은 피해자가 현실적으로 행위를 인식하지 않았더라도 객관적·일반적으로 불안감을 주기에 충분하면 스토킹행위에 해당한다고 판시했습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "차단했으니 법적 문제가 없다"는 상대방 주장은 성립하지 않습니다. 상대가 인식했든 안 했든 반복 행위 자체가 위법입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고부터 잠정조치까지 5단계',
        content:
          '<p><strong style="color:#1e3a5f">경찰청 공식 스토킹 피해자 지원 절차 기준으로 보면, 다음 흐름으로 검토해볼 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 수집 (신고 전 즉시)</strong> — 스크린샷·캡처(날짜·발신번호 포함) + 메시지 백업 + 계정 URL 저장. 캡처 시 타임스탬프가 보이도록 하세요.</li>\n<li><strong>2단계 — 112 신고 또는 경찰서 방문 (즉시)</strong> — 스토킹 피해 신고 접수. 현장 경찰관이 즉시 긴급응급조치(접근·연락 금지 등)를 취할 수 있습니다. 온라인 신고는 ecrm.police.go.kr.</li>\n<li><strong>3단계 — 잠정조치 신청 (신고 후 경찰 또는 검사 청구, 법원 결정)</strong> — 스토킹처벌법 제9조에 따라 법원이 결정으로 ① 100미터 이내 접근금지 ② 전기통신 이용 접근금지 ③ 유치장 유치 등을 명할 수 있습니다. 기간 최대 3개월(1개월씩 연장 가능).</li>\n<li><strong>4단계 — 피해자 보호 명령 신청 (가정법원 또는 형사법원)</strong> — 스토킹처벌법 제18조에 따른 피해자보호명령은 피해자가 직접 법원에 신청 가능. 최대 2년.</li>\n<li><strong>5단계 — 고소 접수 및 수사 진행</strong> — 피해자가 원하는 경우 스토킹범죄로 고소. 수사 후 구속영장·기소 여부 결정.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스토킹 고소 대응 순서, AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">내 상황에서 잠정조치와 피해자보호명령 중 무엇이 더 유효한지 AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '온라인 스토킹 대응 시 흔한 실수 3가지',
        content:
          '<p><strong style="color:#1e3a5f">아래 실수를 피하면 법적 보호를 더 빨리 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>차단만 하고 신고 미루기</strong> — 차단 후에도 새 계정으로 접근하면 "반복성"이 더 명확히 입증됩니다. 오히려 지금이 신고 적기입니다.</li>\n<li><strong>증거를 대화로 지우기</strong> — "왜 이러는 거야?"처럼 답장을 보내면 상대방이 "합의된 연락"이라 주장할 여지가 생깁니다. 답하지 말고 캡처만 하세요.</li>\n<li><strong>잠정조치를 경찰만 신청 가능하다고 오해</strong> — 경찰·검사가 청구하지 않아도 피해자가 직접 법원에 피해자보호명령을 신청할 수 있습니다(스토킹처벌법 제18조). 경찰이 소극적이면 법원에 직접 신청하는 방법을 검토하세요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 잠정조치·피해자보호명령 결정 후 상대방이 이를 어기면 2년 이하 징역 또는 2천만원 이하 벌금이 추가로 부과됩니다(스토킹처벌법 제20조). 위반 즉시 112에 신고하세요.</blockquote>',
      },
      {
        title: '무료 피해자 지원 기관 — 바로 연락할 수 있는 곳',
        content:
          '<p><strong style="color:#1e3a5f">스토킹 피해자는 아래 기관에서 심리·법률·주거 지원을 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>여성긴급전화 1366 (24시간)</strong> — 즉시 위기 상담·안전 조치 연계.</li>\n<li><strong>디지털성범죄 피해자지원센터 (02-735-8994)</strong> — 온라인 스토킹·불법촬영 피해 시 계정 삭제·차단 지원.</li>\n<li><strong>스마일센터 (범죄피해자지원센터)</strong> — 피해자 심리 상담·법률 지원.</li>\n<li><strong>대한법률구조공단 132</strong> — 고소장 작성·피해자보호명령 신청 법률 지원.</li>\n<li><strong>경찰청 사이버범죄 신고 ecrm.police.go.kr</strong> — 온라인 스토킹 신고 접수.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 피해자 인식 없이도 스토킹행위 성립',
        summary:
          '대법원 2025도36 사건(대법원, 2025.10.30 선고)에서 법원은 스토킹처벌법상 행위가 객관적·일반적으로 볼 때 상대방이 인식할 경우 불안감을 주기에 충분하다면, 현실적으로 피해자가 그 행위를 인식하지 않았더라도 스토킹행위에 해당한다고 판시했습니다.',
        takeaway: '상대방이 내 메시지를 읽지 않았다는 항변은 스토킹 성립을 막지 못합니다. 반복성과 행위 태양이 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '1~2번 연락했을 뿐인데 스토킹으로 신고할 수 있나요?',
        answer:
          '<strong>스토킹처벌법은 "지속·반복"을 요건으로 합니다.</strong> 횟수보다 "상대방이 거부 의사를 표시했음에도 계속했는지"가 중요합니다. 2~3회라도 명확한 거부 후 반복이라면 해당할 소지가 있습니다.',
      },
      {
        question: '차단했는데 공개 게시물에 계속 태그를 달아요. 이것도 스토킹인가요?',
        answer:
          '<strong>정보통신망을 이용한 접근으로 스토킹행위에 해당할 소지가 있습니다.</strong> 차단된 상태에서 다른 방법으로 반복 접근하는 행위가 객관적으로 불안감을 주기에 충분하다면 인정 가능성이 있습니다.',
      },
      {
        question: '가해자가 "좋아하는 마음에서 한 거라 죄가 아니다"라고 할 것 같아요.',
        answer:
          '<strong>동기와 관계없이 객관적 행위가 기준입니다.</strong> 판례(2025도36)도 피해자의 현실적 인식이나 가해자의 주관적 의도가 아니라 객관적·일반적 평가를 기준으로 판단합니다.',
      },
      {
        question: '잠정조치를 받으면 가해자는 어떻게 되나요?',
        answer:
          '<strong>법원 결정으로 ① 접근금지 ② 전기통신 금지 ③ 유치장 유치 등이 부과됩니다.</strong> 위반 시 2년 이하 징역이 추가됩니다. 기간은 최대 3개월이나 연장 가능합니다.',
      },
      {
        question: '신변보호(경찰 경호)도 신청할 수 있나요?',
        answer:
          '<strong>경찰서에 신변보호 신청이 가능합니다.</strong> 스토킹처벌법 제10조에 따라 위험성이 인정되면 경찰이 스마트워치 지급, 순찰 강화, 임시 거처 지원 등을 제공할 수 있습니다.',
      },
    ],
    cta: { text: '스토킹 고소 대응 순서, AI로 점검하기', link: '/chat?domain=stalking' },
    internalLinks: [
      { label: '스토킹처벌법 잠정조치 신청 방법', href: '/guide/stalking/stalking-provisional-measures-application' },
      { label: '피해자보호명령 신청 절차', href: '/guide/stalking/stalking-victim-protection-order' },
      { label: '온라인 스토킹 증거 수집법', href: '/guide/stalking/stalking-online-evidence-collection' },
      { label: '스토킹 고소 후 수사 흐름', href: '/guide/stalking/stalking-criminal-complaint-investigation' },
      { label: '접근금지 가처분과 스토킹 비교', href: '/guide/stalking/stalking-vs-restraining-order-comparison' },
    ],
  },
];
