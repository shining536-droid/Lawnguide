import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 1. 이 페이지는 [퇴직금 중간정산이 가능한 법적 사유를 모르는 근로자]의 [본인 상황이 중간정산 대상인지 판단하려는 상황]에서 [7가지 법정 사유별 해당 여부 확인]을 돕는 페이지다.
// 2. 이 페이지는 [노동청 진정을 넣기 전인 체불 근로자]의 [무엇을 준비해야 하는지 모르는 상황]에서 [진정 전 필수 준비사항 체크리스트 안내]를 돕는 페이지다.
// 3. 이 페이지는 [갑작스러운 해고 통보를 받은 근로자]의 [첫 24시간 내 대응이 시급한 상황]에서 [즉시 해야 할 행동과 하지 말아야 할 행동 안내]를 돕는 페이지다.
// 4. 이 페이지는 [회사에서 권고사직을 제안받은 근로자]의 [사직서 서명 전 법적 권리를 모르는 상황]에서 [서명 전 필수 확인사항과 실업급여 요건 안내]를 돕는 페이지다.
// 5. 이 페이지는 [4대보험 미가입 상태로 근무 중인 근로자]의 [신고 가능 여부와 절차를 모르는 상황]에서 [신고 방법과 소급 가입 절차 안내]를 돕는 페이지다.
// 6. 이 페이지는 [연차수당을 받지 못한 근로자]의 [청구 가능 여부와 절차를 모르는 상황]에서 [연차수당 계산법과 청구 절차 안내]를 돕는 페이지다.
// 7. 이 페이지는 [주휴수당을 지급받지 못하는 근로자]의 [주휴수당 계산법과 청구 방법을 모르는 상황]에서 [주휴수당 요건 확인과 청구 절차 안내]를 돕는 페이지다.

export const spokesBatch24_1to7: SpokePage[] = [
  // ───────────────────────────────────────────
  // 1. retirement / interim-settlement-7-eligible-cases
  // ───────────────────────────────────────────
  {
    domain: 'retirement',
    slug: 'interim-settlement-7-eligible-cases',
    keyword: '퇴직금 중간정산 가능한 경우 7가지',
    questionKeyword: '퇴직금 중간정산이 가능한 경우는 어떤 게 있나요?',
    ctaKeyword: '퇴직금 중간정산 가능 여부 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '퇴직금 중간정산 가능한 경우 7가지 체크리스트 | 로앤가이드',
      description:
        '퇴직금을 당장 써야 하는데 중간정산이 되는 건지 모르겠다면 법정 허용 사유 7가지와 신청 절차를 지금 확인하세요',
    },
    intro:
      '<p>전세보증금을 올려줘야 하는데 통장에 여유가 없습니다. 퇴직금을 미리 받을 수 있다면 해결되는데, 회사 인사팀에서는 "중간정산은 아무나 못 한다"고만 합니다. 근로자퇴직급여 보장법은 일정한 사유가 있을 때 중간정산을 허용하고 있으며, 사유별로 필요한 서류가 다릅니다. 본인이 해당되는지 7가지 법정 사유를 하나씩 확인해보세요.</p>',
    sections: [
      {
        title: '근퇴법 시행령 제3조: 중간정산 허용 사유 7가지',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금 중간정산은 근로자퇴직급여 보장법 시행령 제3조에 열거된 사유에 해당해야만 신청할 수 있습니다.</strong></p>\n<ol>\n<li><strong>무주택자의 주거 마련</strong> — 본인 명의 주택 구입, 전세보증금 부담(보증금이 연 임금총액의 50% 이상인 경우)</li>\n<li><strong>6개월 이상의 요양</strong> — 근로자 본인, 배우자 또는 부양가족이 질병·부상으로 6개월 이상 요양이 필요한 경우</li>\n<li><strong>파산선고 또는 개인회생 개시결정</strong> — 법원의 파산선고 또는 개인회생절차 개시결정을 받은 경우</li>\n<li><strong>천재지변 등 고용노동부장관이 정한 사유</strong> — 재난 등 대통령령으로 정한 사유에 해당하는 경우</li>\n<li><strong>임금피크제 적용</strong> — 임금피크제로 임금이 줄어드는 경우</li>\n<li><strong>근로시간 단축</strong> — 소정근로시간 단축으로 퇴직급여가 감소할 것으로 예상되는 경우</li>\n<li><strong>그 밖에 고용노동부장관이 정한 사유</strong> — 소정근로시간 단축 전환 등 추가 고시 사유</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순히 목돈이 필요하다는 이유만으로는 중간정산이 불가하며, 가능한 한 법정 사유와 증빙서류가 갖춰져야 합니다</blockquote>',
      },
      {
        title: '중간정산 신청 절차와 필수 서류',
        content:
          '<p><strong style="color:#1e3a5f">사유별로 필요한 서류를 미리 준비한 뒤 회사에 서면으로 중간정산을 신청해야 합니다.</strong></p>\n<ul>\n<li><strong>주거 마련</strong> — 매매계약서 또는 임대차계약서, 무주택 확인서(등기부등본), 주민등록등본</li>\n<li><strong>6개월 이상 요양</strong> — 진단서(6개월 이상 치료 필요 명시), 가족관계증명서(부양가족인 경우)</li>\n<li><strong>파산·회생</strong> — 법원 파산선고 결정문 또는 개인회생 개시결정문 사본</li>\n<li><strong>임금피크제·근로시간 단축</strong> — 임금피크제 적용 확인서, 단축 근로계약서 또는 변경 통지서</li>\n</ul>\n<p>신청서는 인사팀에 제출하며, 회사는 14일 이내에 정산 가능 여부를 통보해야 합니다. 회사가 정당한 사유 없이 거부하면 고용노동부에 진정할 수 있습니다.</p>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 중간정산 해당 여부와 필요 서류를 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '중간정산 시 퇴직금 계산과 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">중간정산을 받으면 그 시점까지의 근속기간이 리셋되므로 향후 퇴직금이 줄어들 수 있습니다.</strong></p>\n<ul>\n<li><strong>계산 방식</strong> — 중간정산 시점까지의 평균임금 x 근속연수로 산출합니다. 이후 퇴직 시에는 중간정산 이후 기간만 반영됩니다</li>\n<li><strong>세금 문제</strong> — 중간정산 퇴직금에도 퇴직소득세가 부과됩니다. 향후 최종 퇴직 시 합산 정산하여 정산세를 추가 납부할 수 있습니다</li>\n<li><strong>회사 거부 시 대응</strong> — 법정 사유에 해당하는데도 회사가 거부하면 고용노동부 고객상담센터(1350)에 문의하거나 진정서를 제출할 수 있습니다</li>\n<li><strong>DC형 퇴직연금 가입자</strong> — 확정기여형(DC) 퇴직연금 가입자는 적립금 중도인출이 가능하며, 사유는 중간정산과 동일합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 중간정산 후 근속기간이 0부터 다시 시작되므로, 퇴직 예정 시점과 비교하여 유불리를 꼭 따져보세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직수당 부지급 처분 취소 및 소멸시효 판단',
        summary:
          '서울행법 2025구합54475 사건(서울행정법원, 2025.11.13 선고)에서 법원은 초등학교 교사가 23년간 재직 후 명예퇴직하면서 공무원연금공단의 잘못된 정보 전달로 퇴직수당을 수령하지 못한 사안을 심리하며, 소멸시효와 신의칙을 검토했습니다.',
        takeaway:
          '퇴직금 관련 권리는 소멸시효(3년)가 있으므로 중간정산이든 최종 퇴직금이든 청구 가능 시점을 확인하고 조기에 행사하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '전세보증금을 올려야 하는 경우에도 중간정산이 되나요?',
        answer:
          '<strong>무주택자가 전세보증금을 부담하는 경우 중간정산 사유에 해당할 소지가 있습니다.</strong> 다만 보증금 부담액이 연 임금총액의 50% 이상이어야 하고, 임대차계약서와 무주택 확인 서류를 함께 제출해야 합니다. 기존 전세 연장 시 인상분이 50%를 넘으면 가능합니다.',
      },
      {
        question: '주택 구입 외에 오피스텔 구입도 중간정산 사유가 되나요?',
        answer:
          '<strong>주거용 오피스텔도 사실상 주거를 위한 주택으로 인정되면 가능합니다.</strong> 다만 상업용 오피스텔이나 투자 목적 매입은 인정되지 않으므로, 전입신고와 실거주 목적을 증빙할 수 있어야 합니다.',
      },
      {
        question: '입사한 지 1년이 안 되었는데 중간정산을 신청할 수 있나요?',
        answer:
          '<strong>퇴직금 발생 요건인 1년 이상 근속을 충족해야 중간정산도 가능합니다.</strong> 재직기간이 1년 미만이면 퇴직급여 자체가 발생하지 않으므로 중간정산 대상이 아닙니다. 1년이 지난 뒤 법정 사유를 갖추어 신청해야 합니다.',
      },
      {
        question: '중간정산 후 퇴직하면 퇴직금이 얼마나 줄어드나요?',
        answer:
          '<strong>중간정산 시점부터 퇴직일까지의 기간만으로 퇴직금이 다시 계산됩니다.</strong> 예를 들어 10년 근무 중 5년 차에 중간정산을 받았다면, 퇴직 시에는 나머지 5년분만 지급됩니다. 평균임금이 올랐더라도 근속기간이 짧아지면 총액이 줄어들 수 있으니 꼭 비교해보세요.',
      },
      {
        question: '회사가 중간정산 신청을 거부하면 어떻게 해야 하나요?',
        answer:
          '<strong>법정 사유에 해당하는데 회사가 부당 거부하면 고용노동부에 진정을 넣을 수 있습니다.</strong> 고용노동부 고객상담센터(1350)에 먼저 상담한 뒤, 관할 고용노동지청에 진정서와 증빙서류를 제출하세요. 근로감독관이 사업장을 조사하고 시정명령을 내릴 수 있습니다.',
      },
    ],
    cta: {
      text: '퇴직금 중간정산 가능 여부, AI가 분석해드립니다',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 체불 진정 절차', href: '/guide/retirement/retirement-pay-complaint' },
      { label: '퇴직금 계산 방법 안내', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 산정 공식 가이드', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '퇴직금 청구 어디서부터 시작할까', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '임금체불 진정 필요 서류', href: '/guide/wage/unpaid-wage-complaint-docs' },
    ],
  },

  // ───────────────────────────────────────────
  // 2. wage / wage-complaint-pre-filing-checklist
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'wage-complaint-pre-filing-checklist',
    keyword: '임금체불 진정 넣기 전 체크리스트',
    questionKeyword: '노동청에 임금체불 진정 넣기 전에 뭘 준비해야 하나요?',
    ctaKeyword: '임금체불 진정 전 준비사항 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '임금체불 진정 전 준비사항 8가지 체크리스트 | 로앤가이드',
      description:
        '임금을 못 받아서 노동청에 진정을 넣으려는데 뭘 준비해야 할지 모르겠다면 실패 없는 8가지 체크리스트를 지금 확인하세요',
    },
    intro:
      '<p>월급날이 한 달째 지나도록 사장님은 "다음 달에 준다"만 반복합니다. 노동청에 진정을 넣겠다고 마음먹었지만 막상 뭘 어떻게 준비해야 할지 막막합니다. 증거가 부족하면 진정이 기각될 수 있고, 잘못된 정보로 신고하면 오히려 사업주에게 불리하게 작용할 수도 있습니다. 진정서를 제출하기 전에 가능한 한 확인해야 할 8가지를 정리해보세요.</p>',
    sections: [
      {
        title: '진정 전 필수 확인: 체불 금액과 기간 특정',
        content:
          '<p><strong style="color:#1e3a5f">진정서에는 체불 금액과 기간을 구체적으로 기재해야 하며, 이를 뒷받침하는 증거를 함께 제출해야 합니다.</strong></p>\n<ol>\n<li><strong>근로계약서 확인</strong> — 약정 임금, 지급일, 지급 방법이 명시된 근로계약서를 준비합니다. 구두 계약이라면 채용 공고, 문자, 카카오톡 대화를 증거로 확보하세요</li>\n<li><strong>체불 금액 계산</strong> — 기본급, 연장근로수당, 야간수당, 주휴수당을 각각 구분하여 미지급 금액을 산출합니다</li>\n<li><strong>급여명세서·통장 거래내역</strong> — 실제 지급된 금액을 확인할 수 있는 급여명세서와 계좌 입금 내역을 출력합니다</li>\n<li><strong>출퇴근 기록</strong> — 출퇴근 앱, CCTV, 교통카드 내역, 업무 카카오톡 등으로 실근로일수와 근로시간을 입증합니다</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 진정서에 "3개월간 총 450만 원 미지급"이 아니라 "2025년 1월분 150만 원, 2월분 150만 원, 3월분 150만 원" 식으로 구체적으로 적어야 합니다</blockquote>',
      },
      {
        title: '증거 보강과 진정서 작성 요령',
        content:
          '<p><strong style="color:#1e3a5f">진정서는 사실관계를 간결하게 정리하고, 요구사항을 명확히 기재하면 처리 속도가 빨라집니다.</strong></p>\n<ul>\n<li><strong>체불 확인서</strong> — 사업주에게 체불 사실을 인정하는 문자, 이메일, 녹취 등이 있으면 강력한 증거가 됩니다</li>\n<li><strong>동료 진술서</strong> — 같이 체불을 당한 동료가 있다면 공동 진정 또는 별도 진술서를 확보하세요</li>\n<li><strong>사업자등록정보</strong> — 회사명, 대표자명, 사업장 주소를 정확히 기재해야 합니다. 국세청 홈택스에서 사업자등록번호를 조회할 수 있습니다</li>\n<li><strong>진정서 양식</strong> — 고용노동부 홈페이지에서 표준 진정서 양식을 내려받을 수 있으며, 온라인(고용노동부 민원마당)으로도 접수 가능합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 체불 금액 산출과 진정서 작성 방향을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '진정 접수 후 절차와 실패 방지 포인트',
        content:
          '<p><strong style="color:#1e3a5f">진정 접수 후 근로감독관이 사업장을 조사하며, 평균 처리 기간은 약 25일입니다.</strong></p>\n<ul>\n<li><strong>접수 후 흐름</strong> — 진정 접수 → 근로감독관 배정 → 사업주 출석 요구 → 조사 → 시정지시(14일 이내 지급 명령) 또는 사법처리</li>\n<li><strong>사업주 합의 제안 시</strong> — 근로감독관 조사 중 사업주가 분할 지급을 제안할 수 있습니다. 합의서에는 지급 기한, 미이행 시 조치를 가능한 한 명시하세요</li>\n<li><strong>소멸시효 주의</strong> — 임금채권의 소멸시효는 <strong>3년</strong>입니다. 3년이 넘은 체불금은 청구가 어려우므로 가급적 빨리 진정하세요</li>\n<li><strong>체당금 제도</strong> — 사업주가 도산하거나 지급 능력이 없으면 고용노동부의 체당금 제도(최대 1,000만 원)를 활용할 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 퇴직 후 14일 이내에 퇴직금이 지급되지 않으면 이자(연 20%)가 발생하므로 진정서에 지연이자도 함께 청구하세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 격일제 근무 최저임금 산정 기준',
        summary:
          '대법원 2022다257238 사건(대법원, 2025.07.18 선고)에서 법원은 격일제 근무 형태에서 최저임금액 이상 임금 지급 여부를 판단할 때 소정근로시간을 1일 8시간, 1주 40시간 기준으로 산정해야 한다고 판시했습니다.',
        takeaway:
          '임금체불 진정 시 체불 금액을 산출하려면 소정근로시간 기준을 정확히 파악해야 하며, 특히 격일제·교대제 근로자는 근로시간 계산이 달라지므로 근로계약서와 실제 근무표를 가능한 한 비교 확인하세요.',
      },
    ],
    faq: [
      {
        question: '퇴직한 뒤에도 임금체불 진정을 넣을 수 있나요?',
        answer:
          '<strong>퇴직 후에도 3년의 소멸시효 내라면 진정이 가능합니다.</strong> 재직 중일 필요 없이, 퇴직 후에도 고용노동부 민원마당이나 관할 지청에 진정서를 제출할 수 있습니다. 다만 퇴직 후에는 증거 수집이 어려워지므로 재직 중에 자료를 확보해두는 것이 좋습니다.',
      },
      {
        question: '근로계약서를 쓰지 않았는데 진정이 가능한가요?',
        answer:
          '<strong>구두 계약이어도 근로관계가 인정되면 진정 가능합니다.</strong> 급여 이체 내역, 업무 지시 카카오톡, 출근 기록, 동료 증언 등으로 근로관계를 증명할 수 있습니다. 오히려 근로계약서 미작성 자체가 근로기준법 위반이므로 이 부분도 함께 신고할 수 있습니다.',
      },
      {
        question: '일용직이나 아르바이트도 진정 대상이 되나요?',
        answer:
          '<strong>고용 형태와 관계없이 근로기준법상 근로자라면 모두 진정 대상입니다.</strong> 일용직, 아르바이트, 프리랜서 명목이라도 실질적으로 사용자의 지휘·감독을 받았다면 근로자로 인정될 수 있습니다. 근무 일자와 시간, 지급받은 금액을 기록한 자료를 제출하세요.',
      },
      {
        question: '진정을 넣으면 회사에서 불이익을 주지 않을까요?',
        answer:
          '<strong>진정을 이유로 한 불이익 조치는 근로기준법 제104조 위반으로 처벌 대상입니다.</strong> 해고, 전보, 감봉 등 불이익을 받으면 부당해고 구제신청과 함께 추가 진정을 넣을 수 있습니다. 재직 중 진정이 부담스러우면 퇴직 후 진정도 가능합니다.',
      },
      {
        question: '사장이 법인 대표가 아니라 개인사업자인데 차이가 있나요?',
        answer:
          '<strong>개인사업자든 법인이든 진정 절차는 동일합니다.</strong> 다만 개인사업자는 대표 개인 재산으로 체불금을 변제해야 하고, 법인은 법인 자산에서 지급합니다. 체당금 신청 시에도 사업 형태에 관계없이 요건을 충족하면 지급받을 수 있습니다.',
      },
    ],
    cta: {
      text: '임금체불 진정 준비, AI가 체크리스트를 정리해드립니다',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '임금체불 진정서 작성법', href: '/guide/wage/unpaid-wage-petition-writing' },
      { label: '임금체불 신고 절차 타임라인', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '임금체불 어디서부터 시작할까', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '부당해고 첫 대응법', href: '/guide/dismissal/unfair-dismissal-first-steps' },
    ],
  },

  // ───────────────────────────────────────────
  // 3. dismissal / fired-notice-first-24-hours
  // ───────────────────────────────────────────
  {
    domain: 'dismissal',
    slug: 'fired-notice-first-24-hours',
    keyword: '해고 통보 받았을 때 첫 24시간 대응',
    questionKeyword: '해고 통보를 받았는데 지금 당장 뭘 해야 하나요?',
    ctaKeyword: '해고 통보 긴급 대응 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '해고 통보 후 첫 24시간 대응법 5단계 | 로앤가이드',
      description:
        '갑자기 해고 통보를 받아서 당장 뭘 해야 할지 모르겠다면 24시간 내 가능한 한 해야 할 5가지를 지금 확인하세요',
    },
    intro:
      '<p>오전 출근했더니 팀장이 "오늘부로 나가달라"고 통보합니다. 머릿속이 하얘지면서 이게 정당한 건지, 짐을 싸야 하는 건지, 변호사를 불러야 하는 건지 판단이 서지 않습니다. 해고를 당한 직후 24시간 안에 어떤 행동을 하느냐에 따라 부당해고 구제 가능성이 크게 달라집니다. 감정적으로 대응하기 전에 지금 해야 할 것과 절대 하지 말아야 할 것을 먼저 확인해보세요.</p>',
    sections: [
      {
        title: '해고 당일 즉시 해야 할 5가지 행동',
        content:
          '<p><strong style="color:#1e3a5f">해고 통보를 받은 직후에는 증거 확보와 법적 요건 확인이 가장 급합니다.</strong></p>\n<ol>\n<li><strong>해고 통보 내용 녹음·기록</strong> — 대화를 녹음하거나 직후에 날짜·시간·장소·통보 내용·참석자를 메모합니다. 구두 해고인지 서면 해고인지 구분이 중요합니다</li>\n<li><strong>해고 사유서 요구</strong> — 근로기준법 제27조에 따라 근로자가 요구하면 사용자는 해고 사유와 시기를 서면으로 통지해야 합니다. 구두로만 해고하면 부당해고 가능성이 높습니다</li>\n<li><strong>사직서 작성 거부</strong> — 회사가 "원만하게 사직 처리하자"며 사직서를 요구하면 절대 쓰지 마세요. 사직서를 쓰면 자발적 퇴직으로 처리되어 구제신청이 어렵습니다</li>\n<li><strong>업무 자료 백업</strong> — 이메일, 업무 성과 기록, 인사평가 자료 등 해고 부당성을 입증할 수 있는 자료를 개인 기기에 백업합니다</li>\n<li><strong>해고예고수당 확인</strong> — 30일 전 해고예고가 없었다면 30일분 이상의 통상임금을 해고예고수당으로 청구할 수 있습니다</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 해고 당일에 사직서를 쓰거나 합의서에 서명하면 부당해고 구제 경로가 막히므로 절대 서명하지 마세요</blockquote>',
      },
      {
        title: '24시간 내 절대 하지 말아야 할 행동',
        content:
          '<p><strong style="color:#1e3a5f">감정적 대응은 오히려 부당해고 구제 가능성을 낮추는 가장 흔한 실수입니다.</strong></p>\n<ul>\n<li><strong>사직서·합의서 서명 금지</strong> — 위로금을 제안하더라도 서명하면 자발적 퇴직이 됩니다. "검토 후 연락드리겠습니다"로 시간을 벌어야 합니다</li>\n<li><strong>SNS 발신 금지</strong> — 회사 비방을 SNS에 올리면 명예훼손 역고소 위험이 있고, 향후 합의에도 불리합니다</li>\n<li><strong>회사 물품 반납 서두르지 않기</strong> — 업무 관련 자료가 담긴 노트북·USB를 즉시 반납하면 증거가 사라집니다. 반납 요청 시 "퇴직 정산 후 반납하겠다"고 답하세요</li>\n<li><strong>동료에게 함부로 상황 공유 금지</strong> — 회사가 해고 사유를 날조할 때 동료 진술을 왜곡할 수 있으므로 신뢰할 수 있는 동료에게만 상황을 알리세요</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 해고의 정당성 여부와 구제 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '48시간 이내 다음 단계: 구제신청 준비',
        content:
          '<p><strong style="color:#1e3a5f">부당해고 구제신청은 해고일로부터 3개월 이내에 노동위원회에 제출해야 합니다.</strong></p>\n<ul>\n<li><strong>구제신청 기한</strong> — 해고일로부터 <strong>3개월 이내</strong>에 지방노동위원회에 신청해야 합니다. 기한을 넘기면 각하됩니다</li>\n<li><strong>필요 서류</strong> — 구제신청서, 해고 통보 증거(녹음·문자·해고 사유서), 근로계약서, 급여명세서, 업무 성과 자료</li>\n<li><strong>노동위원회 절차</strong> — 접수 → 조사 → 심문회의 → 판정(약 60일 소요). 원직복직 또는 금전보상 명령이 내려집니다</li>\n<li><strong>법률구조</strong> — 대한법률구조공단(132)에 무료 법률 상담을 신청하거나, 노무사 상담을 통해 구제신청서 작성을 도움받을 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">중요: 사직서를 이미 썼더라도 강압에 의한 것이었다면 의사표시 취소를 주장할 수 있으니 즉시 전문가와 상담하세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사직서 제출 후 구제신청 이익 소멸 판단',
        summary:
          '대법원 2025두33276 사건(대법원, 2025.10.16 선고)에서 법원은 근로자가 사직서를 제출한 후 노동위원회에 부당해고 구제신청을 한 사안에서, 이미 근로계약관계가 종료된 경우 구제명령을 받을 이익이 소멸한다고 판시했습니다.',
        takeaway:
          '사직서를 쓰면 구제신청 자체가 의미를 잃을 수 있으므로, 해고 직후 사직서·합의서에 절대 서명하지 않는 것이 가장 중요한 첫 번째 행동입니다.',
      },
    ],
    faq: [
      {
        question: '구두로 "내일부터 나오지 마"라고 하면 해고인가요?',
        answer:
          '<strong>구두 통보도 해고에 해당할 소지가 있습니다.</strong> 근로기준법은 해고 사유와 시기를 서면으로 통지하도록 규정하고 있어 구두 해고는 절차적으로 부당해고가 됩니다. 통보 즉시 녹음하거나 메모를 남기고 해고 사유서를 서면으로 요구하세요.',
      },
      {
        question: '수습기간 중에 해고되어도 구제신청이 가능한가요?',
        answer:
          '<strong>수습기간이더라도 3개월을 초과하여 근무했다면 부당해고 구제신청이 가능합니다.</strong> 다만 근속기간 3개월 미만의 수습 근로자는 해고예고 의무 대상에서 제외되므로 해고예고수당 청구는 어렵습니다. 수습 해고 사유의 정당성은 별도로 다툴 수 있습니다.',
      },
      {
        question: '해고예고수당은 얼마나 받을 수 있나요?',
        answer:
          '<strong>30일분 이상의 통상임금을 받을 수 있습니다.</strong> 사용자가 30일 전에 해고를 예고하지 않으면 30일분의 통상임금을 해고예고수당으로 지급해야 합니다. 월 통상임금이 300만 원이라면 300만 원을 청구할 수 있습니다.',
      },
      {
        question: '해고 당일 짐을 바로 빼야 하나요?',
        answer:
          '<strong>즉시 퇴거할 법적 의무는 없습니다.</strong> 회사가 즉시 퇴거를 요구하더라도 업무 관련 자료 백업, 개인 물품 정리를 위한 합리적 시간을 요청할 수 있습니다. 다만 업무 방해로 비춰지지 않도록 조용히 필요한 자료만 정리하세요.',
      },
      {
        question: '5인 미만 사업장에서 해고되면 구제 방법이 없나요?',
        answer:
          '<strong>5인 미만 사업장은 부당해고 구제신청 대상이 아니지만 민사소송은 가능합니다.</strong> 노동위원회 구제신청은 불가하지만, 해고가 부당하다면 법원에 해고무효확인 소송을 제기하거나 해고예고수당·퇴직금 등을 민사로 청구할 수 있습니다.',
      },
    ],
    cta: {
      text: '해고 정당성 여부, AI가 빠르게 분석해드립니다',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '부당해고 첫 대응법', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '해고예고수당 청구 방법', href: '/guide/dismissal/dismissal-notice-pay' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '임금체불 진정 필요 서류', href: '/guide/wage/unpaid-wage-complaint-docs' },
      { label: '퇴직금 체불 진정 절차', href: '/guide/retirement/retirement-pay-complaint' },
    ],
  },

  // ───────────────────────────────────────────
  // 4. dismissal / recommended-resignation-before-signing
  // ───────────────────────────────────────────
  {
    domain: 'dismissal',
    slug: 'recommended-resignation-before-signing',
    keyword: '권고사직서 쓰기 전 확인사항',
    questionKeyword: '회사에서 권고사직을 제안받았는데 사직서를 써야 하나요?',
    ctaKeyword: '권고사직 서명 전 확인사항 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '권고사직서 서명 전 확인할 것 6가지 | 로앤가이드',
      description:
        '회사에서 권고사직을 제안받았는데 사직서를 써야 할지 말아야 할지 고민된다면 서명 전 확인사항 6가지를 지금 확인하세요',
    },
    intro:
      '<p>인사팀에서 "자진 퇴사로 처리하면 경력에 흠이 안 된다"며 사직서를 건넵니다. 거부하면 징계 절차를 밟겠다는 뉘앙스도 풍깁니다. 사직서를 쓰면 실업급여를 못 받는 건지, 안 쓰면 정말 징계를 당하는 건지 판단이 어렵습니다. 권고사직은 처리 방식에 따라 실업급여 수급 여부와 부당해고 구제 가능성이 완전히 달라지므로 서명 전에 가능한 한 아래 사항을 확인해보세요.</p>',
    sections: [
      {
        title: '권고사직 vs 자진퇴사 vs 해고: 핵심 차이점',
        content:
          '<p><strong style="color:#1e3a5f">사직서의 문구 하나에 따라 실업급여 수급 여부가 갈리므로 정확한 구분이 필요합니다.</strong></p>\n<ul>\n<li><strong>권고사직(회사 귀책)</strong> — 회사의 경영상 이유 또는 인사상 판단으로 퇴직을 권유한 것. 이직확인서에 "권고사직"으로 기재되면 <strong>실업급여 수급 가능</strong></li>\n<li><strong>자진퇴사(근로자 귀책)</strong> — 근로자 본인이 자발적으로 퇴직한 것. 원칙적으로 실업급여 수급 불가(정당한 사유가 있으면 예외)</li>\n<li><strong>해고(사용자 일방 결정)</strong> — 사용자가 근로관계를 일방적으로 종료한 것. 정당한 사유가 없으면 부당해고로 구제신청 가능</li>\n</ul>\n<p>회사가 "자진 퇴사로 처리하겠다"고 하면서 사직서를 요구하면, 이직확인서에 자진퇴사로 기재되어 실업급여를 받지 못할 수 있습니다. 가능한 한 이직확인서 기재 사유를 확인하세요.</p>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사직서 작성 여부보다 이직확인서에 "권고사직"으로 기재되는지가 실업급여의 핵심 요건입니다</blockquote>',
      },
      {
        title: '서명 전 반드시 확인할 6가지 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">사직서에 서명하기 전에 아래 6가지를 확인하고 합의 조건을 문서화해야 합니다.</strong></p>\n<ol>\n<li><strong>이직확인서 기재 사유 확인</strong> — "권고사직"으로 기재한다는 서면 약속을 받으세요. 구두 약속은 나중에 번복될 수 있습니다</li>\n<li><strong>퇴직금 정산 확인</strong> — 퇴직금 산출 내역과 지급일을 합의서에 명시합니다. 퇴직일로부터 14일 이내 지급이 법정 기한입니다</li>\n<li><strong>미지급 임금·수당 정리</strong> — 연차수당, 연장근로수당, 상여금 등 미지급 금액이 있는지 확인합니다</li>\n<li><strong>위로금·퇴직 패키지</strong> — 회사가 위로금을 제안하면 금액, 지급 시기, 세금 처리 방식을 서면으로 확인합니다</li>\n<li><strong>경업금지·비밀유지 의무</strong> — 사직서에 경업금지 조항이 포함되어 있는지 확인합니다. 과도한 경업금지 약정은 무효를 주장할 수 있습니다</li>\n<li><strong>권리포기 조항 유무</strong> — "향후 일체의 민형사상 청구를 하지 않는다"는 조항이 있으면 부당해고 구제나 추가 청구가 막힐 수 있으므로 주의하세요</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 권고사직 조건의 적정성과 실업급여 수급 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '사직서를 이미 썼다면: 구제 가능성 검토',
        content:
          '<p><strong style="color:#1e3a5f">사직서를 이미 제출했더라도 강압이나 착오가 있었다면 의사표시 취소가 가능할 수 있습니다.</strong></p>\n<ul>\n<li><strong>강압에 의한 사직</strong> — "사직서를 안 쓰면 징계 해고한다"는 협박 아래 쓴 사직서는 민법 제110조(강박에 의한 의사표시)에 따라 취소할 수 있습니다</li>\n<li><strong>착오에 의한 사직</strong> — "권고사직으로 처리하겠다"고 해놓고 자진퇴사로 처리한 경우, 착오를 이유로 사직 의사표시를 취소하고 부당해고 구제신청을 할 수 있습니다</li>\n<li><strong>구제신청 기한</strong> — 퇴직일(사직서 수리일)로부터 <strong>3개월 이내</strong>에 노동위원회에 구제신청을 해야 합니다</li>\n<li><strong>증거 확보</strong> — 사직서 작성 당시의 녹음, 문자, 이메일, 참석자 진술 등 강압·착오를 입증할 수 있는 자료를 수집하세요</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">중요: 권고사직 합의가 성립했다면 합의 내용(이직확인서 기재, 퇴직금, 위로금 등)을 이메일이나 합의서로 가능한 한 문서화하세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 부당노동행위 구제신청 제척기간 판단',
        summary:
          '대법원 2023두41864 사건(대법원, 2025.04.03 선고)에서 법원은 하위 인사고과 부여, 승격 탈락 및 임금 차별에 대한 부당노동행위 구제신청에서 제척기간 기산점을 판단하며, 계속적 행위에 대한 구제신청 기간은 마지막 행위 시점부터 3개월이라고 판시했습니다.',
        takeaway:
          '권고사직 전에 인사상 불이익(저평가, 전보, 임금 삭감 등)이 있었다면 이를 부당노동행위로 다툴 수 있으며, 마지막 불이익 행위로부터 3개월 이내에 구제신청이 가능합니다.',
      },
    ],
    faq: [
      {
        question: '권고사직에 합의하면 실업급여를 받을 수 있나요?',
        answer:
          '<strong>이직확인서에 "권고사직"으로 기재되면 비자발적 이직으로 인정되어 실업급여를 받을 수 있습니다.</strong> 핵심은 사직서 작성 여부가 아니라 이직확인서 기재 내용입니다. 가능한 한 회사에 "권고사직"으로 기재한다는 서면 확인을 받으세요.',
      },
      {
        question: '회사가 "사직서를 안 쓰면 징계한다"고 하면 어떻게 하나요?',
        answer:
          '<strong>징계 사유가 실제로 존재하는지 먼저 확인해야 합니다.</strong> 징계 사유가 없는데 협박하는 것이라면 이를 녹음하고 부당해고에 준하는 강압으로 다툴 수 있습니다. "검토할 시간이 필요하다"고 말하고 즉시 노무사나 법률 전문가에게 상담받으세요.',
      },
      {
        question: '권고사직 시 위로금은 보통 얼마인가요?',
        answer:
          '<strong>법정 기준은 없으며 회사와 협상으로 결정됩니다.</strong> 통상 월 급여의 1~6개월분이 관행이지만, 근속연수, 해고 사유의 부당성, 회사의 재정 상황에 따라 다릅니다. 위로금을 수령하더라도 퇴직금·미지급 임금은 별도 지급이 원칙입니다.',
      },
      {
        question: '사직서에 퇴직 사유를 어떻게 쓰는 게 좋나요?',
        answer:
          '<strong>"회사의 권고에 따른 퇴직"으로 기재하는 것이 가장 안전합니다.</strong> "일신상의 사유" 또는 "개인 사정"으로 쓰면 자진퇴사로 해석될 수 있습니다. 사직서 문구를 회사가 지정해주는 경우라도 퇴직 사유가 왜곡되지 않도록 확인하세요.',
      },
      {
        question: '사직서를 쓴 뒤 번복할 수 있나요?',
        answer:
          '<strong>사직서가 수리되기 전이라면 철회가 가능합니다.</strong> 사용자가 사직서를 수리(승인)하면 근로관계가 종료되므로 그 전에 서면으로 철회 의사를 통보하세요. 이미 수리된 경우에도 강압·착오에 의한 것이었다면 의사표시 취소를 주장할 수 있습니다.',
      },
    ],
    cta: {
      text: '권고사직 조건 적정성, AI가 분석해드립니다',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '부당해고 첫 대응법', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '권고사직 실업급여 수급 요건', href: '/guide/unemployment/recommended-resignation-unemployment-benefit' },
      { label: '해고예고수당 청구 방법', href: '/guide/dismissal/dismissal-notice-pay' },
      { label: '임금체불 진정 필요 서류', href: '/guide/wage/unpaid-wage-complaint-docs' },
      { label: '퇴직금 체불 진정 절차', href: '/guide/retirement/retirement-pay-complaint' },
    ],
  },

  // ───────────────────────────────────────────
  // 5. wage / no-social-insurance-employer-report
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'no-social-insurance-employer-report',
    keyword: '4대보험 안 넣은 회사 신고 방법',
    questionKeyword: '회사가 4대보험을 안 넣었는데 신고할 수 있나요?',
    ctaKeyword: '4대보험 미가입 신고 상담',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '4대보험 미가입 회사 신고 방법 3단계 | 로앤가이드',
      description:
        '회사가 4대보험을 안 넣어서 불안한데 어떻게 해야 할지 모르겠다면 신고 방법과 소급 가입 절차를 지금 확인하세요',
    },
    intro:
      '<p>입사한 지 석 달이 지났는데 국민연금 납부 확인서를 떼보니 가입 기록이 없습니다. 사장님에게 물어봤더니 "소규모 회사라 안 넣어도 된다"고 합니다. 근로자를 1명이라도 고용하면 4대보험 가입은 사용자의 의무인데, 미가입 상태로 방치하면 산재, 실업급여, 건강보험 혜택을 모두 놓칠 수 있습니다. 지금 바로 신고 가능 여부와 구체적인 절차를 확인해보세요.</p>',
    sections: [
      {
        title: '4대보험 가입 의무와 미가입 시 근로자 피해',
        content:
          '<p><strong style="color:#1e3a5f">근로자를 1명 이상 고용하는 모든 사업장은 4대보험 가입이 의무이며, 위반 시 사업주에게 과태료가 부과됩니다.</strong></p>\n<ul>\n<li><strong>국민연금</strong> — 미가입 기간 동안 노후 연금 수급액이 줄어들고, 장애·유족연금 수급 자격에 영향을 줍니다</li>\n<li><strong>건강보험</strong> — 직장가입자 자격이 없으면 지역가입자로 전환되어 보험료가 더 비싸지고, 의료비 부담이 늘어납니다</li>\n<li><strong>고용보험</strong> — 미가입 상태에서 퇴직하면 <strong>실업급여를 받을 수 없습니다</strong>. 이것이 가장 큰 실질적 피해입니다</li>\n<li><strong>산재보험</strong> — 업무 중 사고가 나도 산재보험 급여를 바로 받기 어렵고 사업주에게 직접 손해배상을 청구해야 합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 산재보험은 근로자 부담분이 없는데도 미가입하는 것은 사업주의 명백한 법 위반이며, 산재 발생 시 사업주가 보험급여 전액을 부담합니다</blockquote>',
      },
      {
        title: '4대보험 미가입 신고 절차 3단계',
        content:
          '<p><strong style="color:#1e3a5f">각 보험별 관할 기관에 신고하면 사업주에게 소급 가입 명령과 과태료가 부과됩니다.</strong></p>\n<ol>\n<li><strong>1단계: 가입이력 확인</strong> — 국민연금공단(1355), 국민건강보험공단(1577-1000), 근로복지공단(1588-0075)에 전화하거나 각 공단 홈페이지에서 가입 이력을 조회합니다</li>\n<li><strong>2단계: 신고 접수</strong> — 국민연금·건강보험은 각 공단에, 고용보험·산재보험은 근로복지공단 또는 고용노동부에 신고합니다. 고용노동부 민원마당(minwon.moel.go.kr)에서 온라인 진정도 가능합니다</li>\n<li><strong>3단계: 소급 가입 확인</strong> — 신고 후 각 공단이 사업장을 조사하여 소급 가입 처리합니다. 근로자의 보험료 부담분은 소급 납부해야 할 수 있지만, 사업주 부담분과 과태료는 사업주가 납부합니다</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 4대보험 미가입 신고 방법과 소급 가입 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '소급 가입과 실업급여 수급 가능성',
        content:
          '<p><strong style="color:#1e3a5f">소급 가입이 완료되면 미가입 기간에 대한 보험 혜택도 소급 적용되므로 실업급여 수급이 가능해집니다.</strong></p>\n<ul>\n<li><strong>소급 가입 기간</strong> — 근로관계가 확인되는 시점부터 소급 가입됩니다. 근로계약서, 급여이체 내역, 출퇴근 기록이 핵심 증거입니다</li>\n<li><strong>실업급여 수급 요건</strong> — 고용보험 가입기간이 180일 이상이면 실업급여 수급이 가능합니다. 소급 가입으로 180일을 채울 수 있는지 확인하세요</li>\n<li><strong>사업주 과태료</strong> — 4대보험 미가입 시 보험별로 <strong>과태료 최대 300만 원</strong>이 부과되며, 소급 보험료와 연체금도 사업주가 부담합니다</li>\n<li><strong>보복 금지</strong> — 신고를 이유로 해고나 불이익 조치를 하면 근로기준법 위반으로 추가 제재를 받습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 소급 가입 시 근로자 부담분(국민연금 4.5%, 건강보험 약 3.5%, 고용보험 0.9%)도 소급 납부해야 하므로 금액을 미리 파악해두세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 고용보험 가입 불인정 처분 취소 청구',
        summary:
          '대법원 2018두63235 사건(대법원, 2022.10.27 선고)에서 법원은 단기계약직 공무원의 고용보험 가입 신청기간을 임용일부터 3개월로 제한한 시행령 규정의 유효성을 판단하며, 고용보험 가입 자격 요건을 엄격히 해석했습니다.',
        takeaway:
          '고용보험 가입 신청 기간이나 자격 요건에 제한이 있을 수 있으므로, 미가입 사실을 발견한 즉시 신고하여 소급 가입 기간을 최대한 확보하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '프리랜서 계약인데도 4대보험 가입을 요구할 수 있나요?',
        answer:
          '<strong>실질적으로 근로자에 해당하면 4대보험 가입을 요구할 수 있습니다.</strong> 계약서 명칭이 프리랜서·위탁·도급이라도 출퇴근 시간 지정, 업무 지시·감독, 보수의 근로 대가성 등이 인정되면 근로자로 판단됩니다. 이 경우 고용노동부에 근로자 지위 확인 신청을 할 수 있습니다.',
      },
      {
        question: '신고하면 회사에서 저를 해고하지 않을까요?',
        answer:
          '<strong>신고를 이유로 해고하면 부당해고에 해당하여 사업주가 추가 처벌을 받습니다.</strong> 근로기준법 제104조는 감독기관 신고를 이유로 한 불이익 처분을 금지하고 있으며, 위반 시 2년 이하의 징역 또는 2천만 원 이하의 벌금에 처해집니다.',
      },
      {
        question: '이미 퇴직했는데 소급 가입이 가능한가요?',
        answer:
          '<strong>퇴직 후에도 근로관계가 확인되면 소급 가입 처리가 가능합니다.</strong> 근로계약서, 급여 이체 내역 등 증거를 갖추어 각 공단에 신고하면 됩니다. 소급 가입 후 고용보험 180일 요건을 충족하면 실업급여 수급도 가능합니다.',
      },
      {
        question: '소규모 사업장(5인 미만)도 4대보험 의무 가입인가요?',
        answer:
          '<strong>산재보험은 1인 이상, 고용보험은 1인 이상, 건강보험은 1인 이상 사업장에서 의무입니다.</strong> 국민연금은 1인 이상 사업장에서 의무 가입이며, 5인 미만이라도 4대보험 가입 의무는 동일합니다. 사업주가 "소규모라 안 돼"라고 하는 것은 잘못된 정보입니다.',
      },
      {
        question: '4대보험 미가입 신고 시 어떤 증거를 준비해야 하나요?',
        answer:
          '<strong>근로관계를 입증할 수 있는 서류를 최대한 확보하세요.</strong> 근로계약서, 급여 이체 내역, 출퇴근 기록, 업무 지시 카카오톡, 명함, 사원증 등이 도움됩니다. 증거가 부족하면 공단 조사 과정에서 사업주가 근로관계를 부인할 수 있습니다.',
      },
    ],
    cta: {
      text: '4대보험 미가입 신고 가능 여부, AI가 분석해드립니다',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '임금체불 진정 필요 서류', href: '/guide/wage/unpaid-wage-complaint-docs' },
      { label: '임금체불 어디서부터 시작할까', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '근로계약서 미작성 시 구제 방법', href: '/guide/dismissal/no-employment-contract-remedies' },
      { label: '실업급여 수급 요건 안내', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '퇴직금 체불 진정 절차', href: '/guide/retirement/retirement-pay-complaint' },
    ],
  },

  // ───────────────────────────────────────────
  // 6. wage / annual-leave-pay-unpaid-response
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'annual-leave-pay-unpaid-response',
    keyword: '연차수당 못 받았을 때 대응 방법',
    questionKeyword: '연차수당을 못 받았는데 청구할 수 있나요?',
    ctaKeyword: '미지급 연차수당 청구 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '연차수당 미지급 시 청구 방법 4단계 | 로앤가이드',
      description:
        '퇴직하면서 연차수당을 못 받았는데 어디에 어떻게 청구해야 할지 모르겠다면 4단계 청구 절차를 지금 확인하세요',
    },
    intro:
      '<p>퇴직 정산서를 받아보니 연차수당이 한 푼도 포함되어 있지 않습니다. 3년간 사용하지 못한 연차가 15일 이상인데 회사에서는 "연차 사용을 촉진했으니 수당이 없다"고 합니다. 연차 사용 촉진 절차를 제대로 밟았는지, 미사용 연차수당은 얼마인지, 어디에 청구해야 하는지 하나씩 확인해보세요.</p>',
    sections: [
      {
        title: '연차수당 발생 요건과 사용 촉진 제도',
        content:
          '<p><strong style="color:#1e3a5f">미사용 연차에 대한 수당 청구는 사용자의 연차 사용 촉진 절차 이행 여부에 따라 결정됩니다.</strong></p>\n<ul>\n<li><strong>연차수당 발생 원칙</strong> — 근로기준법 제60조에 따라 1년간 80% 이상 출근한 근로자에게 15일의 유급휴가가 발생하며, 미사용 연차에 대해 수당을 지급해야 합니다</li>\n<li><strong>연차 사용 촉진 유효 요건</strong> — 사용자가 ①연차 사용 시기를 지정하라고 <strong>서면</strong>으로 촉구하고, ②근로자가 지정하지 않으면 사용자가 <strong>서면</strong>으로 시기를 지정해야 합니다. 두 번의 서면 통보가 모두 적법해야 수당 지급 의무가 면제됩니다</li>\n<li><strong>촉진 절차 하자</strong> — 구두 통보, 일괄 이메일만 보낸 경우, 시기 미지정 등 절차에 하자가 있으면 촉진이 무효가 되어 수당을 지급해야 합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회사가 "촉진했다"고 주장하더라도 두 번의 서면 통보가 모두 적법했는지 확인해보면 절차 하자가 발견되는 경우가 많습니다</blockquote>',
      },
      {
        title: '연차수당 계산법과 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">연차수당은 1일 통상임금 x 미사용 연차일수로 계산하며, 체불 시 임금체불 진정으로 대응합니다.</strong></p>\n<ul>\n<li><strong>계산 공식</strong> — 연차수당 = 1일 통상임금 × 미사용 연차일수. 통상임금에는 기본급, 고정 수당, 상여금(정기적·일률적·고정적)이 포함됩니다</li>\n<li><strong>청구 1단계</strong> — 회사에 연차수당 지급을 서면(내용증명)으로 요구합니다. 미사용 연차일수와 산출 근거를 명시하세요</li>\n<li><strong>청구 2단계</strong> — 회사가 14일 이내에 지급하지 않으면 고용노동부에 임금체불 진정서를 제출합니다</li>\n<li><strong>청구 3단계</strong> — 근로감독관 조사 후 시정명령이 내려지며, 불이행 시 사법처리(3년 이하 징역 또는 3,000만 원 이하 벌금)됩니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 연차수당 계산과 청구 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '소멸시효와 퇴직 후 추가 청구 포인트',
        content:
          '<p><strong style="color:#1e3a5f">연차수당 청구권의 소멸시효는 3년이며, 퇴직 후 14일이 지나면 지연이자도 추가 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>소멸시효 기산점</strong> — 연차수당 청구권은 연차가 발생한 해의 다음 해 첫날부터 3년간 행사할 수 있습니다. 예를 들어 2024년 발생 연차의 수당은 2025년 1월 1일부터 3년 이내에 청구해야 합니다</li>\n<li><strong>퇴직 시 즉시 정산</strong> — 퇴직일까지 미사용 연차수당은 퇴직 후 14일 이내에 퇴직금과 함께 지급되어야 합니다</li>\n<li><strong>지연이자</strong> — 퇴직 후 14일이 경과하면 미지급 임금에 대해 <strong>연 20%</strong>의 지연이자가 발생합니다. 진정서에 가능한 한 지연이자도 함께 청구하세요</li>\n<li><strong>재직 중 연차수당</strong> — 재직 중에도 전년도 미사용 연차에 대한 수당은 청구 가능합니다. 다만 사용 촉진이 적법하게 이루어졌다면 청구가 어렵습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">전략: 연차 사용 촉진 서면 통보의 적법성을 먼저 다투고, 하자가 있으면 재직 기간 전체의 미사용 연차수당을 일괄 청구하세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 기업 내부 관행의 임금성 판단',
        summary:
          '대법원 2022다255454 사건(대법원, 2026.01.29 선고)에서 법원은 기업 내부의 특정 관행이 근로계약 내용을 이루는지 판단하며, 관행이 규범적 사실로 승인되려면 기업 사회에서 일반적으로 근로관계를 규율하는 것이어야 한다고 판시했습니다.',
        takeaway:
          '연차수당 관련 회사의 내부 관행(예: "연차수당은 지급하지 않는 것이 관례")이 있더라도 이것이 근로기준법을 위반하는 관행이라면 법적 효력이 없으므로 적극적으로 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '1년 미만 근무자도 연차수당을 받을 수 있나요?',
        answer:
          '<strong>1년 미만 근무자도 월 1일씩 발생한 연차에 대해 수당을 받을 수 있습니다.</strong> 근로기준법 제60조 제2항에 따라 1년 미만 근로자는 1개월 개근 시 1일의 유급휴가가 발생하며, 미사용 시 수당으로 지급받을 수 있습니다.',
      },
      {
        question: '회사가 "연차 사용 촉진을 했다"고 하는데 확인 방법이 있나요?',
        answer:
          '<strong>서면 통보 2회(사용 시기 지정 촉구 + 사용자 시기 지정)를 받은 적이 있는지 확인하세요.</strong> 이메일, 사내 게시, 서면 통보문 등을 확인하고, 개별 근로자에게 서면으로 통보되지 않았다면 촉진 절차가 무효입니다.',
      },
      {
        question: '연차수당과 퇴직금은 별도로 계산되나요?',
        answer:
          '<strong>연차수당과 퇴직금은 완전히 별개의 채권입니다.</strong> 퇴직금은 평균임금 기준으로, 연차수당은 통상임금 기준으로 각각 산출됩니다. 둘 다 퇴직 후 14일 이내 지급이 원칙이며, 미지급 시 각각 임금체불로 진정할 수 있습니다.',
      },
      {
        question: '재직 중인데 작년 연차수당을 올해 청구할 수 있나요?',
        answer:
          '<strong>연차 사용 촉진이 적법하지 않았다면 재직 중에도 전년도 미사용 연차수당을 청구할 수 있습니다.</strong> 다만 촉진 절차가 적법했다면 사용자는 수당 지급 의무가 면제됩니다. 촉진 서면 통보를 받은 적이 없다면 청구 가능성이 높습니다.',
      },
      {
        question: '연차수당을 청구하면 회사에서 불이익을 줄 수 있나요?',
        answer:
          '<strong>임금 청구를 이유로 불이익을 주면 근로기준법 위반입니다.</strong> 연차수당은 법정 임금이므로 청구하는 것은 정당한 권리 행사입니다. 불이익 조치 시 부당해고 구제신청과 근로기준법 위반 진정을 할 수 있습니다.',
      },
    ],
    cta: {
      text: '미지급 연차수당 청구 가능성, AI가 분석해드립니다',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '연차수당 계산 방법', href: '/guide/wage/wage-annual-leave-pay-calculation' },
      { label: '임금체불 진정서 작성법', href: '/guide/wage/unpaid-wage-petition-writing' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '임금체불 신고 절차 타임라인', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '부당해고 첫 대응법', href: '/guide/dismissal/unfair-dismissal-first-steps' },
    ],
  },

  // ───────────────────────────────────────────
  // 7. wage / weekly-holiday-pay-claim-guide
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'weekly-holiday-pay-claim-guide',
    keyword: '주휴수당 안 줄 때 청구 방법',
    questionKeyword: '주휴수당을 안 준다고 하는데 받을 수 있나요?',
    ctaKeyword: '주휴수당 미지급 청구 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '주휴수당 미지급 시 계산법과 청구 3단계 | 로앤가이드',
      description:
        '주휴수당을 안 준다고 해서 억울한데 받을 수 있는 건지 모르겠다면 계산법과 청구 절차를 지금 확인하세요',
    },
    intro:
      '<p>매주 5일, 하루 6시간씩 알바를 하고 있는데 사장님이 "알바는 주휴수당 없다"고 합니다. 시급에 주휴수당이 포함되어 있다고도 하는데 급여를 계산해보면 시급 x 근무시간만 들어옵니다. 주 15시간 이상 근무하는 근로자라면 고용 형태와 관계없이 주휴수당을 받을 권리가 있습니다. 지금 당장 요건을 확인하고 청구 방법을 정리해보세요.</p>',
    sections: [
      {
        title: '주휴수당 발생 요건과 계산법',
        content:
          '<p><strong style="color:#1e3a5f">주 15시간 이상 근무하고 소정근로일을 개근한 근로자에게는 1주 1일의 유급 주휴일이 보장됩니다.</strong></p>\n<ul>\n<li><strong>발생 요건</strong> — ① 1주 소정근로시간이 15시간 이상, ② 소정근로일을 개근. 이 두 가지를 모두 충족하면 아르바이트·일용직도 주휴수당 대상입니다</li>\n<li><strong>계산 공식</strong> — 주휴수당 = 1일 소정근로시간 × 시급. 예: 주 5일 × 하루 5시간 근무 시 주휴수당 = 5시간 × 시급</li>\n<li><strong>월급제 근로자</strong> — 월급에 이미 주휴수당이 포함된 경우가 많습니다. 월 기본급 ÷ 209시간(주 40시간 기준) × 8시간 × 약 4.35주로 확인할 수 있습니다</li>\n<li><strong>시급제 근로자</strong> — 시급에 주휴수당이 포함되었다면 급여명세서에 별도 표기되어야 합니다. 명시가 없으면 미포함으로 추정됩니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 2024년 최저시급 9,860원 기준, 주 40시간 근무자의 주휴수당은 주 78,880원(월 약 343,000원)에 달합니다</blockquote>',
      },
      {
        title: '주휴수당 미지급 시 청구 절차 3단계',
        content:
          '<p><strong style="color:#1e3a5f">주휴수당은 임금에 해당하므로 미지급 시 임금체불로 신고할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계: 체불 금액 산출</strong> — 근무 기간 동안 지급받지 못한 주휴수당 총액을 계산합니다. 근무표, 급여명세서, 통장 이체 내역을 준비하세요</li>\n<li><strong>2단계: 사업주에게 서면 요구</strong> — 카카오톡, 문자, 내용증명 등으로 주휴수당 지급을 요구합니다. "주 00시간 근무, 개근하였으므로 주휴수당 000원을 지급해달라"고 구체적으로 기재하세요</li>\n<li><strong>3단계: 고용노동부 진정</strong> — 사업주가 지급하지 않으면 고용노동부 민원마당 또는 관할 지청에 임금체불 진정서를 제출합니다. 근로감독관이 조사하여 시정명령을 내립니다</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 주휴수당 발생 여부와 미지급 금액을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '주휴수당 관련 흔한 오해와 실무 포인트',
        content:
          '<p><strong style="color:#1e3a5f">사업주의 흔한 주장에 속지 말고 법적 기준을 정확히 알아두는 것이 중요합니다.</strong></p>\n<ul>\n<li><strong>"알바는 주휴수당 없다"</strong> — 거짓입니다. 주 15시간 이상 근무하는 근로자라면 정규직·비정규직·아르바이트 구분 없이 주휴수당을 받을 수 있습니다</li>\n<li><strong>"시급에 포함되어 있다"</strong> — 근로계약서나 급여명세서에 주휴수당 포함 여부가 명시되어야 합니다. 명시 없이 시급만 지급하면 별도 청구 대상입니다</li>\n<li><strong>"하루 결근하면 그 주 전체 주휴수당 없다"</strong> — 소정근로일에 결근하면 해당 주의 주휴수당은 발생하지 않는 것이 맞습니다. 다만 유급휴가(연차), 법정 공휴일은 결근이 아닙니다</li>\n<li><strong>소멸시효</strong> — 주휴수당 청구권도 <strong>3년</strong>의 소멸시효가 적용됩니다. 퇴직 후라도 3년 이내 미지급분을 청구할 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">전략: 근로계약서에 주휴수당 포함·미포함이 명시되어 있지 않으면 미포함으로 추정하여 별도 청구가 가능하므로 계약서를 먼저 확인하세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 평균임금 산정 기초가 되는 임금의 요건',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 평균임금 산정의 기초가 되는 임금은 사용자가 근로의 대가로 근로자에게 지급하는 금품으로서, 계속적·정기적으로 지급되고 단체협약·취업규칙·근로계약 등에 의해 사용자에게 지급의무가 지워진 것이어야 한다고 판시했습니다.',
        takeaway:
          '주휴수당은 근로기준법에 의해 사용자에게 지급의무가 지워진 임금이므로, 미지급 시 체불임금과 동일하게 진정·소송으로 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '주 15시간 미만이면 절대로 주휴수당을 못 받나요?',
        answer:
          '<strong>1주 소정근로시간이 15시간 미만이면 주휴수당 대상이 아닙니다.</strong> 다만 실제 근무시간이 15시간 이상인데 계약서에만 15시간 미만으로 기재한 경우, 실제 근로시간을 기준으로 주휴수당을 청구할 수 있습니다.',
      },
      {
        question: '주휴수당과 최저임금은 어떤 관계인가요?',
        answer:
          '<strong>최저임금 준수 여부를 판단할 때 주휴수당은 별도로 계산합니다.</strong> 시급이 최저임금 이상이더라도 주휴수당을 별도 지급하지 않으면 사실상 최저임금 위반이 될 수 있습니다. 주휴수당 포함 시급(209시간 기준)으로 환산해서 비교하세요.',
      },
      {
        question: '주 6일 근무하면 주휴수당이 더 많아지나요?',
        answer:
          '<strong>주휴수당은 1주 1일분이므로 근무일수와 관계없이 1일 소정근로시간 x 시급으로 계산됩니다.</strong> 다만 주 40시간을 초과하는 근무에 대해서는 연장근로수당(통상임금의 50% 가산)이 별도로 발생하므로 함께 확인하세요.',
      },
      {
        question: '사장이 "주휴수당 줄 거면 시급을 낮추겠다"고 하면 어떻게 하나요?',
        answer:
          '<strong>시급이 최저임금 아래로 내려가면 최저임금법 위반입니다.</strong> 사업주가 주휴수당 지급을 피하기 위해 시급을 낮추더라도 최저임금 이상이어야 하며, 이미 정해진 근로조건을 일방적으로 불이익하게 변경하는 것은 근로기준법 위반입니다.',
      },
      {
        question: '퇴직한 뒤에도 재직 기간의 주휴수당을 청구할 수 있나요?',
        answer:
          '<strong>3년의 소멸시효 내라면 퇴직 후에도 청구 가능합니다.</strong> 재직 기간 동안 지급받지 못한 주휴수당 전액을 고용노동부에 진정하거나 민사소송으로 청구할 수 있습니다. 근무표와 급여 이체 내역을 미리 확보해두세요.',
      },
    ],
    cta: {
      text: '주휴수당 미지급 청구 가능성, AI가 분석해드립니다',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '임금체불 진정 필요 서류', href: '/guide/wage/unpaid-wage-complaint-docs' },
      { label: '임금체불 어디서부터 시작할까', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 진정서 작성법', href: '/guide/wage/unpaid-wage-petition-writing' },
      { label: '임금체불 신고 절차 타임라인', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '퇴직금 계산 방법 안내', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },
];
