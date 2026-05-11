import { SpokePage } from '../spoke-pages';

// batch55 retire 2개 (2026-05-05)
//
// 고유 존재 이유:
// 1. 이 페이지는 5인 미만 사업장에서 9년 근무 후 퇴직한 근로자가 근로자퇴직급여보장법 적용 여부(전 사업장 적용)와 청구 절차를 정리해 미지급 퇴직금 청구 가능성을 검토하도록 돕는 페이지다.
// 2. 이 페이지는 퇴직금 중간정산을 받았는데 회사가 누적 계속근로기간을 부정하면서 잔여 퇴직금 산정을 다투는 근로자가 근로자퇴직급여보장법 제8조 요건과 다툼 절차를 정리하도록 돕는 페이지다.

export const spokesBatch55Retire: SpokePage[] = [
  // ─── 1. retirement / retirement-under-five-9years-claim ───
  {
    domain: 'retirement',
    slug: 'retirement-under-five-9years-claim',
    keyword: '5인 미만 9년 근무 퇴직금',
    questionKeyword: '5인 미만 사업장에서 9년 근무하고 퇴직했어요. 퇴직금 받을 수 있나요?',
    ctaKeyword: '5인 미만 사업장 9년 근속 퇴직금 청구 가능성 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '5인 미만 사업장 9년 근무 퇴직금 청구 5단계 | 로앤가이드',
      description:
        '5인 미만 사업장이라도 1년 이상 근무하면 퇴직금 지급 대상입니다. 9년 근속 후 퇴직금 청구 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"5인 미만 사업장에서 9년 일하고 퇴사했는데 사장님이 \'우리는 5인 미만이라 퇴직금 안 줘도 된다\'고 해요. 정말 못 받나요?" 결론부터 보면, 근로자퇴직급여보장법은 5인 미만 사업장에도 전면 적용됩니다(2010.12.1부터). 1년 이상 계속근로한 모든 근로자는 퇴직금 청구가 가능하고, 9년 근속이면 시효 3년 안에서 큰 금액을 청구할 수 있는 상황으로 보입니다.</p>',
    sections: [
      {
        title: '5인 미만 사업장 퇴직금 — 자주 오해하는 4가지 포인트',
        content:
          '<p><strong style="color:#1e3a5f">근로자퇴직급여보장법 제3조·제4조와 시행 경과를 종합하면 다음 사정을 먼저 확인해야 합니다.</strong></p>\n<ul>\n<li><strong>① 5인 미만이라도 퇴직금 적용</strong> — 근로자퇴직급여보장법은 상시근로자 1인 이상 모든 사업장에 적용됩니다(법 제3조). 2010.12.1 이후 5인 미만 사업장도 100% 적용 대상이에요. "우리는 작아서 안 준다"는 사장님 말은 근거가 없습니다.</li>\n<li><strong>② 1년 이상 계속근로 + 주 15시간 이상</strong> — 1년 이상 계속근로하고 4주 평균 1주 소정근로시간이 15시간 이상이면 대상. 9년 근속이면 당연히 충족합니다.</li>\n<li><strong>③ 정규직·계약직·아르바이트 모두 적용</strong> — 명칭과 무관, 실제 사용자 지휘를 받았는지가 기준. 사대보험 미가입이라도 근로자성이 인정되면 퇴직금 대상입니다.</li>\n<li><strong>④ 퇴직금 산정 — 평균임금 30일분 × 근속연수</strong> — 퇴직 직전 3개월 임금 총액 ÷ 근무일수 = 평균임금 일액. 9년 근속이면 평균임금 30일분 × 9 = 약 9개월치 임금 수준이 기준이에요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 5인 미만 사업장 퇴직금은 법적 권리이며, "5인 미만이라 안 준다"는 주장은 근거가 없습니다. 9년 근속이면 청구 가능성이 큰 상황으로 보여요.</blockquote>',
      },
      {
        title: '회사가 자주 내세우는 반박과 대응 포인트',
        content:
          '<p><strong style="color:#1e3a5f">5인 미만 사업장에서 자주 등장하는 회사 측 반박과 대응 논리는 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"5인 미만이라 근로기준법 적용 안 된다"</strong> → 근로기준법 일부 조항(연차·연장수당 등)은 적용 제외이지만, 퇴직금은 별도 법률(퇴직급여보장법)이라 5인 미만에도 적용됩니다.</li>\n<li><strong>"4대보험에 가입 안 했으니 근로자가 아니다"</strong> → 근로자성은 사회보험 가입 여부가 아니라 사용자 지휘·종속관계로 판단. 출퇴근 지시·업무 지시·급여 정기 지급 정황이 있으면 근로자로 인정됩니다.</li>\n<li><strong>"퇴직금 미리 월급에 포함시켰다"</strong> → 사전 퇴직금 분할 약정은 무효라는 것이 일관된 해석(대법원 2007다90760 등). 별도 청구 가능합니다.</li>\n<li><strong>"폐업해서 줄 돈이 없다"</strong> → 근로복지공단 체당금(현 대지급금) 제도로 일정액까지 국가가 우선 지급, 이후 사용자에게 구상하는 절차가 있어요.</li>\n</ul>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 퇴직금 청구 5단계 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 + 민사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근로자성·계속근로 입증 자료 확보</strong> (즉시) — 근로계약서·급여이체 내역·업무 지시 메신저·동료 증언·출퇴근 기록.</li>\n<li><strong>2단계 — 퇴직금액 산출</strong> (즉시) — 퇴직 직전 3개월 임금 총액 ÷ 근무일수 = 평균임금 일액 × 30 × 근속연수. 9년이면 약 9개월치 평균임금 수준.</li>\n<li><strong>3단계 — 사용자에게 지급 요구 (내용증명)</strong> (퇴직 후 14일 이내 지급 원칙) — 근로기준법 제36조에 따라 퇴직 후 14일 이내 지급 의무. 미지급 시 연 20% 지연이자 발생.</li>\n<li><strong>4단계 — 노동청 진정</strong> (퇴직 후 3년 이내) — 노동포털(labor.moel.go.kr) 또는 관할 지방고용노동지청. 처리기간 25일(연장 가능). 시정지시 미이행 시 형사 송치(3년 이하 징역 또는 3,000만 원 이하 벌금).</li>\n<li><strong>5단계 — 민사 청구 또는 대지급금 (필요 시)</strong> — 사업주 자력 있으면 민사 임금 청구(소액심판 통상 2~3개월). 폐업·도산이면 근로복지공단 대지급금 신청을 검토할 수 있습니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 5인 미만 9년 근속 퇴직금, AI로 청구 절차를 정리하세요</strong></p>\n<p style="margin:0;font-size:0.95em">근속 형태·임금 자료·사업주 상태를 입력하면 청구액 산정과 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">퇴직금 계산과 청구 절차, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 / ⚠️ 다툼 포인트 / 🏛️ 신청·상담 경로',
        content:
          '<h4>📋 준비서류 체크리스트</h4>\n<ul>\n<li>근로계약서 (없다면 채용 메신저·이메일로 대체)</li>\n<li>최근 3개월 + 가능하면 9년치 급여이체 내역 (평균임금 산정 근거)</li>\n<li>업무 지시 메신저·이메일·근태 기록 (근로자성·계속근로 입증)</li>\n<li>4대보험 가입이력 (국민연금·건강보험 자료)</li>\n<li>사업자등록증·사업장 주소·동료 증언 (5인 미만이라도 사업장 실재 입증)</li>\n<li>퇴직 사유서·문자·면담 내용 (퇴직 일자 확정)</li>\n</ul>\n<h4>⚠️ 다툼 포인트</h4>\n<ul>\n<li>"5인 미만이라 퇴직금 없다" → 근로자퇴직급여보장법 제3조에 따라 1인 이상 사업장 모두 적용.</li>\n<li>"월급에 퇴직금 미리 포함" → 사전 분할 약정은 무효(대법원 2007다90760 취지), 별도 청구 가능.</li>\n<li>"4대보험 미가입이라 근로자 아니다" → 근로자성은 보험가입이 아니라 지휘·종속관계로 판단.</li>\n</ul>\n<h4>🏛️ 신청·상담 경로</h4>\n<ul>\n<li>고용노동부 노동포털 (labor.moel.go.kr) — 임금체불 진정 온라인 접수</li>\n<li>고용노동부 고객상담센터 1350 — 무료 안내</li>\n<li>대한법률구조공단 132 — 무료 법률상담</li>\n<li>근로복지공단 1588-0075 — 도산 시 대지급금 안내</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 시용기간과 정식 근로기간의 통산',
        summary:
          '대법원 2021다218083 사건(대법원, 2022.02.17 선고)에서 법원은 시용이란 근로계약 체결 전후 해당 근로자의 직업적 능력·자질·인품·성실성 등 직업적격성을 판단하기 위한 일정 기간 시험적으로 사용하는 것을 말하고, 시용기간 만료 후 본 근로계약을 체결하여 다시 일정 기간 동안 계속 근무한 경우에는 시용기간과 본 근로계약기간을 합산한 기간을 퇴직금 산정의 기초가 되는 계속근로기간으로 보아야 한다고 판시했습니다.',
        takeaway: '시용·수습·재입사로 단절된 듯 보이는 기간도 실질적으로 계속근로면 통산됩니다. 5인 미만 사업장에서 형태 변경이 있었더라도 9년 근속을 통산해 퇴직금 청구를 검토할 수 있어요.',
      },
    ],
    faq: [
      {
        question: '5인 미만 사업장도 정말 퇴직금 줘야 하나요?',
        answer:
          '<strong>네. 근로자퇴직급여보장법 제3조에 따라 1인 이상 모든 사업장에 적용됩니다.</strong> 1년 이상 근속 + 주 15시간 이상이면 대상이에요.',
      },
      {
        question: '4대보험 가입 안 했어요. 그래도 청구 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 근로자성은 보험가입이 아니라 사용자 지휘·종속관계로 판단해요. 업무 지시·급여 정기 이체 자료가 있으면 근로자로 인정될 수 있습니다.',
      },
      {
        question: '"월급에 퇴직금 미리 포함시켰다"고 합니다',
        answer:
          '<strong>사전 분할 약정은 무효라는 일관된 해석이 있습니다.</strong> 별도로 퇴직금 청구가 가능한 사례가 많아요.',
      },
      {
        question: '9년 근속 퇴직금 얼마 정도 받을 수 있나요?',
        answer:
          '<strong>퇴직 직전 3개월 평균임금 × 30일 × 9년이 기준입니다.</strong> 월급 250만 원 정도였다면 약 2,200~2,500만 원 수준이 검토되는 사례가 많아요(평균임금 산정 방식에 따라 차이).',
      },
      {
        question: '회사가 폐업했어요. 받을 방법 있나요?',
        answer:
          '<strong>근로복지공단 대지급금(구 체당금) 제도로 일정액까지 국가가 먼저 지급하는 절차가 있습니다.</strong> 도산 등 사실관계 인정이 필요하니 1588-0075로 안내받아보세요.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산기 평균임금 통상임금', href: '/guide/retirement/retirement-calculation-average-ordinary-wage' },
      { label: '퇴직금 미지급 진정 절차', href: '/guide/retirement/retirement-unpaid-complaint-procedure' },
      { label: '아르바이트·계약직 퇴직금 적용', href: '/guide/retirement/retirement-part-time-eligibility' },
      { label: '체당금(대지급금) 신청 5단계', href: '/guide/retirement/retirement-substitute-payment-5steps' },
      { label: '퇴직금 시효 3년 보전 절차', href: '/guide/retirement/retirement-statute-near-expiry-preserve' },
    ],
  },

  // ─── 2. retirement / retirement-dc-mid-settlement-cumulative-denied ───
  {
    domain: 'retirement',
    slug: 'retirement-dc-mid-settlement-cumulative-denied',
    keyword: '퇴직금 중간정산 누적기간 부정',
    questionKeyword: '퇴직금 중간정산 받았는데 회사가 누적 계속근로기간을 부정해요. 다툴 수 있나요?',
    ctaKeyword: '퇴직금 중간정산 후 누적기간 다툼 가능성 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '퇴직금 중간정산 후 누적기간 다툼 4단계 | 로앤가이드',
      description:
        '퇴직금 중간정산을 받았다고 해서 이전 근로기간이 사라지지 않습니다. 누적 계속근로기간 다툼 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"몇 년 전 주택 구입 사유로 퇴직금 중간정산을 받았는데, 이번 퇴사할 때 회사가 \'중간정산으로 근속 끊겼으니 그 이후 기간만 계산한다\'고 해요. 정말 그런가요?" 중간정산은 적법 사유가 있을 때만 가능하고(근로자퇴직급여보장법 제8조 제2항·시행령 제3조), 사후 정산이라도 사유 충족이 의심되면 무효 다툼 + 누적 계속근로기간 인정으로 차액 청구를 검토할 수 있는 상황으로 보입니다.</p>',
    sections: [
      {
        title: '중간정산 적법 요건 — 사유 미충족 시 무효 다툼이 가능한 4가지 신호',
        content:
          '<p><strong style="color:#1e3a5f">근로자퇴직급여보장법 제8조 제2항·시행령 제3조를 종합하면 중간정산은 다음 사유에 한해서만 적법합니다.</strong></p>\n<ul>\n<li><strong>① 무주택자의 본인 명의 주택 구입</strong> — 무주택 입증 + 본인 명의 매매계약서·등기 자료 필요. 가족 명의 구입은 사유 불충족.</li>\n<li><strong>② 무주택자의 전세금·임차보증금 부담</strong> — 본인 명의 임대차계약 + 보증금 송금 자료. 1회만 인정.</li>\n<li><strong>③ 본인·배우자·부양가족 6개월 이상 요양</strong> — 진단서·치료 영수증으로 6개월 이상 입증.</li>\n<li><strong>④ 임금피크제·근로시간 단축·천재지변 등 한정 사유</strong> — 시행령 열거 사유에 한정. 사유서·증빙 필수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 위 사유 중 어느 것도 정확히 충족되지 않은 채 회사가 일방 정산했다면 정산 자체가 무효이고, 누적 계속근로기간 전부에 대한 잔여 퇴직금 차액 청구가 가능한 상황으로 보여요.</blockquote>',
      },
      {
        title: '회사가 자주 내세우는 반박과 대응 포인트',
        content:
          '<p><strong style="color:#1e3a5f">중간정산을 받은 근로자가 누적기간을 다툴 때 회사 측 반박과 대응 논리는 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"본인이 신청서 썼다"</strong> → 신청서가 있어도 법정 사유를 충족하지 못하면 무효라는 해석. 사유 입증서류 누락·허위면 다툼 여지가 있어요.</li>\n<li><strong>"이미 정산금 받아 갔다"</strong> → 정산이 무효이면 받은 돈은 잔여 퇴직금에 충당하고 차액만 청구하는 구조. 부당이득 반환과 별도 트랙입니다.</li>\n<li><strong>"중간정산 이후 새로 입사한 거다"</strong> → 근로계약이 형식만 새로 작성됐을 뿐 실제 동일한 사용자·동일 사업장에서 계속 근무했다면 계속근로 인정.</li>\n<li><strong>"DC형 가입자라 중간정산 자유"</strong> → 확정기여형(DC)도 적립 단위는 자유롭지만 계속근로기간은 별도. 퇴직 시점의 평균임금 기준 차액 다툼 여지 있음.</li>\n</ul>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 누적기간 다툼 + 차액 청구 4단계',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 + 민사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 중간정산 사유 입증 자료 검토</strong> (즉시) — 정산 신청서·매매계약서·임대차계약서·진단서·임금피크제 도입 자료. 사유 충족 여부 자체를 점검합니다.</li>\n<li><strong>2단계 — 누적 계속근로기간 입증</strong> (즉시) — 입사일·재직증명·4대보험 가입이력·급여이체로 정산 전후 동일 사용자·동일 사업장 근무 입증. 형식적 단절(재계약·소속 변경)이라도 실질 통산 다툼 가능.</li>\n<li><strong>3단계 — 차액 산출 + 노동청 진정</strong> (퇴직 후 3년 이내) — 퇴직 시점 평균임금 × 30일 × 누적연수 − 기수령 정산금 = 차액. 노동포털(labor.moel.go.kr) 진정 또는 관할 지방고용노동지청. 처리기간 25일(연장 가능).</li>\n<li><strong>4단계 — 민사 임금 청구 (필요 시)</strong> — 차액 + 연 20% 지연이자(퇴직자). 사실관계 다툼이 큰 사안이라 시효(3년) 보전 위해 내용증명·소장 접수 시기를 놓치지 않는 것이 중요해요.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 중간정산 후 누적기간 다툼, AI로 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">정산 사유·근속 형태·정산 금액을 입력하면 차액 청구 가능성과 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">퇴직금 포함 항목, AI로 먼저 확인하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 / ⚠️ 다툼 포인트 / 🏛️ 신청·상담 경로',
        content:
          '<h4>📋 준비서류 체크리스트</h4>\n<ul>\n<li>중간정산 신청서·합의서·정산금 이체 내역</li>\n<li>정산 사유 입증서류 (매매계약서·임대차계약서·진단서 등) — 또는 미존재 사실</li>\n<li>입사일·재직증명서·4대보험 가입이력 (계속근로 입증)</li>\n<li>최근 3개월 급여명세서 + 가능하면 정산 시점 급여명세서 (평균임금 비교)</li>\n<li>근로계약서·취업규칙·DC 가입 약정서</li>\n<li>퇴직 사유서·면담 녹취·메신저 (정산 후 근무 형태 확인)</li>\n</ul>\n<h4>⚠️ 다툼 포인트</h4>\n<ul>\n<li>"신청서 본인 서명" → 사유 미충족이면 무효 다툼 여지. 신청서만으로 적법 결론 X.</li>\n<li>"중간정산 후 새로 입사" → 동일 사용자·동일 사업장 계속근무면 계속근로 통산 가능.</li>\n<li>"DC형이라 자유 정산" → 계속근로기간과 적립 단위는 별개. 퇴직 시점 평균임금 기준 차액 다툼 여지.</li>\n</ul>\n<h4>🏛️ 신청·상담 경로</h4>\n<ul>\n<li>고용노동부 노동포털 (labor.moel.go.kr) — 임금체불 진정 온라인 접수</li>\n<li>고용노동부 고객상담센터 1350 — 무료 안내</li>\n<li>대한법률구조공단 132 — 무료 법률상담</li>\n<li>근로복지공단 1588-0075 — DC·DB 적립금 조회 안내</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사전 퇴직금청구권 포기 약정의 효력',
        summary:
          '대법원 2018다21821 사건(대법원, 2018.07.12 선고)에서 법원은 사용자가 일정 기간 계속근로하고 퇴직하는 근로자에게 계속근로에 대한 대가로 지급하는 후불적 임금의 성질을 띤 금원으로서 구체적인 퇴직금청구권은 근로관계가 종료된 때부터 발생하며, 발생하기 전 미리 포기하는 것은 강행규정인 근로기준법·근로자퇴직급여보장법에 위반되어 무효라고 판시했습니다.',
        takeaway: '근로 중 작성한 \'퇴직금 포기·일괄 정산 동의\'는 강행규정 위반으로 무효 다툼이 가능합니다. 형식적 정산이 있어도 누적 계속근로기간을 다투어 차액 청구를 검토할 수 있어요.',
      },
    ],
    faq: [
      {
        question: '몇 년 전 중간정산 받았는데 회사가 그 이후 기간만 계산한다고 해요',
        answer:
          '<strong>중간정산이 적법 사유 없이 이뤄졌다면 무효 다툼 여지가 있습니다.</strong> 누적 계속근로기간 전부 기준 차액을 청구할 수 있는 사례가 있어요.',
      },
      {
        question: '본인 명의 신청서에 서명했는데 다툴 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 신청서가 있어도 법정 사유(주택 구입·요양 등) 입증이 없거나 허위면 정산 자체가 무효라는 해석이 가능해요.',
      },
      {
        question: 'DC형 가입자라 중간정산이 자유롭다고 합니다',
        answer:
          '<strong>적립 단위 자유와 계속근로기간 인정은 별개입니다.</strong> 퇴직 시점 평균임금 기준 차액 다툼은 여전히 가능한 사례가 있어요.',
      },
      {
        question: '중간정산 후 회사 형식만 바뀌고 같은 자리에서 일했어요',
        answer:
          '<strong>실질적으로 동일 사용자·동일 사업장이면 계속근로로 통산 가능한 사례가 많습니다.</strong> 4대보험 이력·급여이체로 입증해보세요.',
      },
      {
        question: '시효는 얼마나 남았나요?',
        answer:
          '<strong>퇴직금 시효는 3년입니다.</strong> 퇴직일로부터 3년 안에 진정·소송으로 시효 보전이 필요해요.',
      },
    ],
    cta: { text: '퇴직금 포함 항목, AI로 먼저 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 계산기 평균임금 통상임금', href: '/guide/retirement/retirement-calculation-average-ordinary-wage' },
      { label: 'DC형 퇴직연금 평균임금 차액', href: '/guide/retirement/retirement-dc-wage-cut-loss' },
      { label: '퇴직금 시효 3년 보전 절차', href: '/guide/retirement/retirement-statute-near-expiry-preserve' },
      { label: '퇴직금 미지급 진정 절차', href: '/guide/retirement/retirement-unpaid-complaint-procedure' },
      { label: '계속근로 통산 1년 미만 후 재입사', href: '/guide/retirement/retirement-continuous-service-rejoining' },
    ],
  },
];
