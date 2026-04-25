import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 1. 이 페이지는 [임금을 체불당한 근로자]의 [진정서를 직접 작성해야 하는 상황]에서 [진정서 양식과 항목별 작성법 안내]를 돕는 페이지다.
// 2. 이 페이지는 [임금체불 피해 근로자]의 [신고 후 어떤 절차가 어느 기간에 진행되는지 모르는 상황]에서 [노동청 진정부터 종결까지 타임라인 안내]를 돕는 페이지다.
// 3. 이 페이지는 [임금을 못 받은 근로자]의 [어디부터 시작해야 할지 모르는 상황]에서 [첫 행동 순서와 준비물 안내]를 돕는 페이지다.
// 4. 이 페이지는 [임금체불 합의를 앞둔 근로자]의 [적정 합의금과 지연이자 계산을 모르는 상황]에서 [합의금 산정 기준과 지연이자율 수치 안내]를 돕는 페이지다.
// 5. 이 페이지는 [임금체불 증거를 모아야 하는 근로자]의 [어떤 자료가 증거가 되는지 모르는 상황]에서 [증거 유형별 수집 체크리스트 제공]을 돕는 페이지다.
// 6. 이 페이지는 [부당해고를 당한 근로자]의 [구제신청 절차와 기간을 모르는 상황]에서 [노동위원회 구제신청 단계별 타임라인 안내]를 돕는 페이지다.
// 7. 이 페이지는 [갑자기 해고 통보를 받은 근로자]의 [당장 무엇부터 해야 하는지 모르는 상황]에서 [해고 직후 첫 행동 순서와 대응 전략 안내]를 돕는 페이지다.

export const spokesBatch21_1to7: SpokePage[] = [
  // ───────────────────────────────────────────
  // 1. wage / unpaid-wage-petition-writing
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'unpaid-wage-petition-writing',
    keyword: '임금체불 진정서 작성법 양식',
    questionKeyword: '임금체불 진정서는 어떻게 작성하나요?',
    ctaKeyword: '임금체불 진정서 작성',
    type: '템플릿형',
    perspective: '피해자',
    meta: {
      title: '임금체불 진정서 작성법 5가지 핵심 항목 | 로앤가이드',
      description: '밀린 임금을 받기 위해 진정서를 써야 하는데 어떤 내용을 넣어야 할지 모르겠다면 항목별 작성법을 지금 확인하세요.',
    },
    intro:
      '<p>퇴사한 지 한 달이 넘었는데 월급이 들어오지 않습니다. 사장에게 연락하면 "다음 주에 보내겠다"는 말만 반복됩니다. 고용노동부에 진정서를 넣으라는 이야기를 들었지만 양식을 보면 어디에 무엇을 써야 할지 막막합니다. 진정서 한 장이 밀린 임금을 받는 첫걸음이 됩니다.</p>',
    sections: [
      {
        title: '진정서에 반드시 들어가야 하는 5가지 핵심 항목',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제36조에 따르면 사용자는 근로자가 퇴직한 날부터 14일 이내에 임금, 보상금, 그 밖의 금품을 지급해야 합니다</strong></p>\n<p>고용노동부 진정서에는 다음 5가지를 빠짐없이 기재해야 합니다.</p>\n<ul>\n<li><strong>피진정인 정보</strong> — 사업장 명칭, 대표자 성명, 사업장 주소, 사업자등록번호를 정확하게 기재하세요. 사업자등록번호는 홈택스에서 확인할 수 있습니다</li>\n<li><strong>근무 기간</strong> — 입사일과 퇴사일을 연월일로 명확하게 적으세요. 근로계약서가 있으면 함께 첨부합니다</li>\n<li><strong>체불 금액</strong> — 기본급, 연장근로수당, 퇴직금 등 항목별로 구분해서 기재하세요. 급여명세서나 계좌이체 내역으로 산출 근거를 제시하면 처리가 빨라집니다</li>\n<li><strong>체불 경위</strong> — 언제부터 임금이 지급되지 않았는지, 사업주에게 독촉한 사실이 있는지 시간순으로 정리합니다</li>\n<li><strong>증거자료 목록</strong> — 근로계약서, 급여명세서, 출퇴근 기록, 카카오톡 대화 캡처 등 첨부할 자료의 목록을 기재하세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 피진정인 정보 + 근무 기간 + 체불 금액 + 경위 + 증거 목록</blockquote>',
      },
      {
        title: '진정서 제출 방법 3가지',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 진정서는 온라인, 방문, 우편 3가지 방법으로 제출할 수 있습니다</strong></p>\n<ul>\n<li><strong>온라인 제출</strong> — 고용노동부 민원마당(minwon.moel.go.kr)에서 임금체불 진정서를 작성·제출합니다. 24시간 접수 가능하고, 첨부파일도 올릴 수 있어 가장 편리합니다</li>\n<li><strong>방문 제출</strong> — 사업장 소재지 관할 지방고용노동청에 직접 방문합니다. 근로감독관에게 상황을 설명하면 작성을 도와주기도 합니다</li>\n<li><strong>우편 제출</strong> — 진정서와 증거자료 사본을 관할 고용노동청에 등기우편으로 발송합니다. 접수 확인이 필요하므로 등기 발송을 권장합니다</li>\n</ul>\n<p><strong>2026년 최저임금은 시간급 10,320원</strong>입니다. 최저임금에 미달하는 임금을 받았다면 그 차액도 체불 금액에 포함시킬 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">제출 경로: 민원마당 온라인 > 관할 노동청 방문 > 등기우편</blockquote>',
      },
      {
        title: '진정서 작성 시 흔한 실수 4가지',
        content:
          '<p><strong style="color:#1e3a5f">진정서 내용이 부실하면 반려되거나 처리가 지연될 수 있으니 아래 실수를 가능한 한 피하세요</strong></p>\n<ul>\n<li><strong>체불 금액을 뭉뚱그려 적는 실수</strong> — "약 300만 원"이 아니라 기본급 200만 원 + 연장수당 50만 원 + 퇴직금 80만 원처럼 항목별로 분리해야 합니다</li>\n<li><strong>사업장 정보가 부정확한 실수</strong> — 상호명이 달라지거나 대표자가 변경된 경우 최신 사업자등록 정보를 확인하세요</li>\n<li><strong>증거를 첨부하지 않는 실수</strong> — 진정서만 내면 근로감독관이 사실 확인에 시간이 더 걸립니다. 급여명세서, 근로계약서 사본을 가능한 한 첨부하세요</li>\n<li><strong>퇴직금을 빠뜨리는 실수</strong> — 1년 이상 근무했다면 퇴직금도 체불 항목에 포함해야 합니다. 근로자퇴직급여 보장법에 따라 30일분 이상의 평균임금을 퇴직금으로 받을 수 있습니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/wage" style="color:#1565c0;font-weight:600">내 임금체불 진정서 무료 검토받기 &rarr;</a>\n</div>',
      },
      {
        title: '진정서 접수 후 처리 과정',
        content:
          '<p><strong style="color:#1e3a5f">진정서가 접수되면 근로감독관이 배정되어 출석 요구, 사실 조사, 시정 지시 순서로 진행됩니다</strong></p>\n<ul>\n<li><strong>접수 후 7일 이내</strong> — 담당 근로감독관이 배정되고, 진정인에게 접수 확인 연락이 옵니다</li>\n<li><strong>사업주 출석 요구</strong> — 근로감독관이 사업주에게 출석을 요구하여 체불 사실을 확인합니다</li>\n<li><strong>시정 지시</strong> — 체불이 확인되면 14일 이내에 임금을 지급하라는 시정 지시가 내려집니다</li>\n<li><strong>미이행 시 사법 처리</strong> — 시정 지시를 따르지 않으면 근로기준법 제109조에 따라 3년 이하의 징역 또는 3천만 원 이하의 벌금으로 사법 처리됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">처리 순서: 접수 → 감독관 배정 → 사업주 출석 → 시정 지시 → 미이행 시 사법 처리</blockquote>',
      },
    ],
    cases: [
      {
        title: '퇴직금 청구 소멸시효와 권리행사 — 대법원 판결',
        summary:
          '대법원 2024다294705 사건(대법원, 2025.05.29 선고)에서 법원은 퇴직금 청구권의 소멸시효는 퇴직일로부터 3년이며, 이 기간 내에 권리를 행사하지 않으면 시효가 완성되어 청구할 수 없다고 판시했습니다.',
        takeaway:
          '임금과 퇴직금은 퇴직 후 3년 이내에 청구해야 합니다. 진정서 제출은 빠를수록 유리하니 체불 사실을 확인하면 즉시 행동하세요.',
      },
    ],
    faq: [
      {
        question: '근로계약서 없이도 진정서를 낼 수 있나요?',
        answer:
          '<strong>근로계약서가 없어도 진정서 제출은 가능합니다.</strong> 급여 이체 내역, 출퇴근 기록, 동료 증언, 카카오톡 대화 등으로 근로 사실을 증명할 수 있습니다. 근로감독관도 사업장 조사를 통해 사실관계를 확인합니다.',
      },
      {
        question: '아르바이트생도 임금체불 진정서를 낼 수 있나요?',
        answer:
          '<strong>네, 아르바이트도 근로기준법상 근로자입니다.</strong> 주 15시간 미만 초단시간 근로자도 임금 지급 의무는 동일합니다. 일용직, 파트타임 모두 진정 대상입니다.',
      },
      {
        question: '진정서를 내면 사장이 보복할 수 있지 않나요?',
        answer:
          '근로기준법 제104조 제2항에 따라 <strong>진정을 이유로 근로자에게 불이익을 주는 행위는 처벌 대상</strong>입니다. 2년 이하의 징역 또는 2천만 원 이하의 벌금에 해당할 소지가 있습니다.',
      },
      {
        question: '체불 금액이 소액이어도 진정을 넣을 수 있나요?',
        answer:
          '금액 제한은 없습니다. <strong>1만 원이라도 체불이면 진정 대상</strong>입니다. 다만 소액 체불은 소액사건심판(3천만 원 이하)으로도 빠르게 해결할 수 있습니다.',
      },
      {
        question: '진정서를 내면 합의가 불가능해지나요?',
        answer:
          '아닙니다. <strong>진정 접수 후에도 사업주와 합의할 수 있습니다.</strong> 합의가 성립되면 진정을 취하할 수 있고, 오히려 진정서가 합의를 촉진하는 효과가 있습니다.',
      },
    ],
    cta: {
      text: '임금체불 진정서 작성 무료 상담받기',
      link: '/diagnosis/wage',
    },
    internalLinks: [
      { label: '임금체불 가이드', href: '/guide/wage' },
      { label: '임금체불 신고 절차와 처리 기간', href: '/spoke/wage/unpaid-wage-report-procedure-timeline' },
      { label: '임금체불 어디부터 시작해야 하나', href: '/spoke/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 증거 수집 체크리스트', href: '/spoke/wage/unpaid-wage-evidence-checklist' },
      { label: '임금체불 합의금과 지연이자', href: '/spoke/wage/unpaid-wage-settlement-delayed-interest' },
    ],
  },

  // ───────────────────────────────────────────
  // 2. wage / unpaid-wage-report-procedure-timeline
  // ───────────────────────────────────────────
  // 3. wage / unpaid-wage-where-to-start
  // ───────────────────────────────────────────
  // 4. wage / unpaid-wage-settlement-delayed-interest
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'unpaid-wage-settlement-delayed-interest',
    keyword: '임금체불 합의금 지연이자 계산',
    questionKeyword: '임금체불 합의금은 얼마가 적정하고 지연이자는 어떻게 되나요?',
    ctaKeyword: '임금체불 합의금 산정',
    type: '수치기한형',
    perspective: '피해자',
    meta: {
      title: '임금체불 합의금 산정과 지연이자 연 20% | 로앤가이드',
      description: '밀린 임금에 대한 합의를 앞두고 적정 금액과 지연이자율이 궁금하다면 계산법을 지금 확인하세요.',
    },
    intro:
      '<p>사업주가 "합의하자"며 원래 받을 금액보다 적은 액수를 제시합니다. 체불 금액은 500만 원인데 300만 원만 주겠다는 겁니다. 이게 적정한 건지, 지연이자는 따로 받을 수 있는 건지 판단이 안 됩니다. 합의는 한 번 하면 되돌리기 어려우니 기준을 먼저 알고 시작해야 합니다.</p>',
    sections: [
      {
        title: '지연이자 연 20% — 법이 정한 이자율',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제37조와 같은 법 시행령 제18조에 따르면 사업주가 퇴직 후 14일 이내에 임금을 지급하지 않으면 미지급 금액에 대해 연 20%의 지연이자를 지급해야 합니다</strong></p>\n<ul>\n<li><strong>적용 대상</strong> — 임금, 보상금, 퇴직금 등 근로관계로 인한 모든 미지급 금품</li>\n<li><strong>기산일</strong> — 퇴직일로부터 14일이 경과한 다음 날부터 지급일까지</li>\n<li><strong>이자율</strong> — 연 20% (하루 약 0.0548%)</li>\n<li><strong>계산 예시</strong> — 체불 500만 원, 14일 경과 후 180일 지연 시: 500만 원 × 20% × (180/365) = 약 49만 3천 원</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">지연이자 공식: 체불금액 × 20% × (지연일수 / 365일)</blockquote>',
      },
      {
        title: '합의금 적정 금액 산정 기준',
        content:
          '<p><strong style="color:#1e3a5f">합의금은 최소한 체불 원금 + 지연이자를 기준으로 산정해야 손해를 보지 않습니다</strong></p>\n<ul>\n<li><strong>최소 합의금</strong> — 체불 원금(기본급 + 연장수당 + 퇴직금 + 연차수당) + 지연이자</li>\n<li><strong>적정 합의금</strong> — 체불 원금 + 지연이자 + 정신적 피해에 대한 위자료. 위자료는 100~500만 원 수준이 일반적입니다</li>\n<li><strong>감액 허용 범위</strong> — 사업주의 지급 능력이 현저히 부족하고 즉시 지급이 가능한 경우에 한해 원금의 80~90% 선에서 합의하는 경우가 있습니다</li>\n</ul>\n<p><strong>체불 원금 이하로 합의하면 지연이자 청구권도 소멸</strong>합니다. 합의서 작성 시 "일체의 채권채무 관계를 정리한다"는 문구가 들어가면 추가 청구가 불가합니다.</p>',
      },
      {
        title: '합의서 작성 시 반드시 포함해야 할 5가지 항목',
        content:
          '<p><strong style="color:#1e3a5f">합의서는 법적 효력이 있는 문서이므로 빠뜨리는 항목 없이 작성해야 합니다</strong></p>\n<ul>\n<li><strong>합의 금액</strong> — 원금과 지연이자를 구분하여 총액을 명시합니다</li>\n<li><strong>지급 기한</strong> — 합의일로부터 며칠 이내에 지급할지 구체적 날짜를 적습니다</li>\n<li><strong>지급 방법</strong> — 계좌이체인 경우 계좌번호를 명시합니다</li>\n<li><strong>위약 조항</strong> — 기한 내 미지급 시 합의 무효 또는 추가 지연이자 발생을 명시합니다</li>\n<li><strong>진정·고소 취하 조건</strong> — 지급 완료를 조건으로 진정을 취하한다고 적습니다. 지급 전 취하는 절대 하지 마세요</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/wage" style="color:#1565c0;font-weight:600">내 임금체불 합의금 무료 계산받기 &rarr;</a>\n</div>',
      },
      {
        title: '합의를 거부하고 소송으로 가야 하는 경우',
        content:
          '<p><strong style="color:#1e3a5f">사업주의 제안이 체불 원금의 70% 미만이거나 지연이자를 전혀 인정하지 않는 경우 소송이 유리할 수 있습니다</strong></p>\n<ul>\n<li><strong>원금 대비 70% 미만 제안</strong> — 합의 가치가 없습니다. 소액사건심판으로 원금 + 지연이자 전액을 받는 것이 유리합니다</li>\n<li><strong>분할 지급 제안</strong> — 12개월 이상 분할이면 도중에 지급이 중단될 위험이 큽니다. 3개월 이내 분할까지만 수용하세요</li>\n<li><strong>사업주 재산이 충분한 경우</strong> — 부동산이나 매출이 있는 사업주라면 판결 후 강제집행으로 전액 회수가 가능합니다</li>\n<li><strong>주휴수당 포함 여부</strong> — 주 15시간 이상 근무했다면 주휴수당도 임금에 포함됩니다. 사업주가 주휴수당을 인정하지 않는다면 소송에서 다퉈야 합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">소송 기준: 제안이 원금 70% 미만이거나 지연이자 미인정 시 소송 검토</blockquote>',
      },
    ],
    cases: [
      {
        title: '주휴수당과 최저임금 지급 의무 — 대법원 판결',
        summary:
          '대법원 2021다246545 사건(대법원, 2024.07.25 선고)에서 법원은 근로기준법 제55조에 따라 부여되는 유급휴일에 대한 임금인 주휴수당은 소정근로의 대가로 매월 1회 이상 정기적으로 지급되는 임금이므로 사용자가 최저임금액 이상으로 지급해야 할 임금에 해당한다고 판시했습니다.',
        takeaway:
          '주휴수당은 합의 시 빠뜨리기 쉬운 항목입니다. 주 15시간 이상 근무했다면 주휴수당도 체불 금액에 포함시키세요.',
      },
    ],
    faq: [
      {
        question: '지연이자는 재직 중 체불에도 적용되나요?',
        answer:
          '근로기준법 제37조의 지연이자는 <strong>퇴직 후 미지급에 적용</strong>됩니다. 재직 중 체불에는 적용되지 않지만, 소송 시 민사법정이율(연 5% 또는 상사법정이율 연 6%)을 청구할 수 있습니다.',
      },
      {
        question: '5인 미만 사업장에도 지연이자가 적용되나요?',
        answer:
          '<strong>네, 사업장 규모와 관계없이 적용됩니다.</strong> 근로기준법 제37조와 시행령 제18조는 모든 사업장에 적용되는 규정입니다.',
      },
      {
        question: '합의서에 "추가 청구를 하지 않는다"고 적으면 지연이자도 포기하는 건가요?',
        answer:
          '<strong>네, 부제소 합의 조항이 있으면 지연이자 포함 모든 청구를 포기하게 됩니다.</strong> 합의 금액에 지연이자가 반영되었는지 가능한 한 확인하세요.',
      },
      {
        question: '합의 후 사업주가 약속한 날짜에 돈을 안 주면 어떡하나요?',
        answer:
          '합의서에 위약 조항이 있으면 <strong>합의를 해제하고 원래 청구금액 전액으로 소송</strong>을 제기할 수 있습니다. 합의서 자체가 증거가 됩니다.',
      },
    ],
    cta: {
      text: '임금체불 합의금 적정 금액 무료 산정받기',
      link: '/diagnosis/wage',
    },
    internalLinks: [
      { label: '임금체불 가이드', href: '/guide/wage' },
      { label: '임금체불 진정서 작성법과 양식', href: '/spoke/wage/unpaid-wage-petition-writing' },
      { label: '임금체불 어디부터 시작해야 하나', href: '/spoke/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 신고 절차와 처리 기간', href: '/spoke/wage/unpaid-wage-report-procedure-timeline' },
      { label: '임금체불 증거 수집 체크리스트', href: '/spoke/wage/unpaid-wage-evidence-checklist' },
    ],
  },

  // ───────────────────────────────────────────
  // 5. wage / unpaid-wage-evidence-checklist
  // ───────────────────────────────────────────
  // 6. dismissal / unfair-dismissal-relief-procedure
  // ───────────────────────────────────────────
  // 7. dismissal / dismissed-where-to-start
  // ───────────────────────────────────────────
  {
    domain: 'dismissal',
    slug: 'dismissed-where-to-start',
    keyword: '해고 통보 어디부터',
    questionKeyword: '해고 통보를 받았는데 어디부터 해야 하나요?',
    ctaKeyword: '해고 대응 시작',
    type: '어디부터형',
    perspective: '피해자',
    meta: {
      title: '해고 통보 받으면 즉시 할 일 5가지 | 로앤가이드',
      description: '갑자기 해고 통보를 받아서 어디부터 시작해야 할지 모르겠다면 지금 즉시 할 일 5가지를 지금 확인하세요.',
    },
    intro:
      '<p>출근했더니 인사팀에서 "오늘부로 퇴사 처리됩니다"라고 합니다. 머릿속이 하얘집니다. 당장 생활비가 걱정이고, 이게 정당한 건지도 모르겠습니다. 지금 감정에 휩쓸려 아무 서류에나 서명하면 나중에 되돌릴 수 없습니다. 해고 직후 72시간이 가장 중요합니다.</p>',
    sections: [
      {
        title: '즉시 할 일 1 — 어떤 서류에도 서명하지 마세요',
        content:
          '<p><strong style="color:#1e3a5f">해고 직후 사업주가 내미는 사직서, 합의서, 퇴직 동의서에 절대 서명하지 마세요. 서명하는 순간 자발적 퇴사로 처리될 수 있습니다</strong></p>\n<ul>\n<li><strong>사직서</strong> — "형식적인 거니까 써달라"는 말에 속지 마세요. 사직서를 쓰면 자발적 퇴사가 되어 부당해고 구제신청이 불가능해집니다</li>\n<li><strong>합의서</strong> — 퇴직위로금을 주겠다며 합의서를 내미는 경우가 있습니다. 합의 내용을 검토하기 전에는 서명하지 마세요</li>\n<li><strong>퇴직 동의서</strong> — 명칭이 무엇이든 "해고에 동의한다"는 취지의 서류에 서명하면 안 됩니다</li>\n</ul>\n<p>"생각할 시간이 필요합니다"라고 말하고 그 자리를 벗어나세요. <strong>법적으로 즉시 서명할 의무는 없습니다.</strong></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">원칙: 어떤 서류에도 당일 서명하지 않는다</blockquote>',
      },
      {
        title: '즉시 할 일 2 — 해고 증거를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">해고 사실과 경위를 증명할 자료를 최대한 빨리 확보해야 합니다</strong></p>\n<ul>\n<li><strong>해고 통지 기록</strong> — 해고를 통보받은 대화를 녹음하거나, 문자·이메일·카카오톡 메시지를 캡처하세요</li>\n<li><strong>해고 사유서 요구</strong> — 근로기준법 제27조에 따라 사용자에게 해고 사유와 해고 시기를 서면으로 통지하라고 요구하세요. 이 요구 자체도 문자나 이메일로 보내 기록을 남기세요</li>\n<li><strong>업무 자료 백업</strong> — 업무용 메일, 프로젝트 자료, 인사평가 결과 등 해고의 부당성을 보여줄 수 있는 자료를 퇴사 처리 전에 확보하세요</li>\n<li><strong>근로계약서·급여명세서</strong> — 원본이 없으면 사진으로라도 남기세요. 퇴사 후에는 접근이 어려워집니다</li>\n</ul>',
      },
      {
        title: '즉시 할 일 3 — 해고의 부당성을 판단하세요',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제23조 제1항은 사용자가 정당한 이유 없이 근로자를 해고할 수 없다고 규정합니다</strong></p>\n<p>아래 항목에 하나라도 해당하면 부당해고일 가능성이 높습니다.</p>\n<ul>\n<li><strong>서면 통지 없음</strong> — 해고 사유와 시기를 서면으로 통지하지 않은 경우(근로기준법 제27조 위반)</li>\n<li><strong>해고 예고 없음</strong> — 30일 전 예고 없이, 해고예고수당도 지급하지 않은 경우(근로기준법 제26조 위반)</li>\n<li><strong>사유가 모호함</strong> — "회사 분위기에 안 맞는다", "마음에 안 든다" 등 구체적이지 않은 사유</li>\n<li><strong>업무상 재해 중 해고</strong> — 업무상 부상·질병으로 휴업 중인 기간과 그 후 30일 동안은 해고가 금지됩니다(근로기준법 제23조 제2항)</li>\n<li><strong>임신·출산 중 해고</strong> — 출산 전후 휴가 기간과 그 후 30일 동안은 해고가 금지됩니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/dismissal" style="color:#1565c0;font-weight:600">내 해고가 부당한지 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '해고 후 72시간 이내에 해야 할 행정 절차',
        content:
          '<p><strong style="color:#1e3a5f">해고 직후 생활 안정을 위한 행정 절차도 빠르게 진행해야 합니다</strong></p>\n<ul>\n<li><strong>실업급여 수급자격 확인</strong> — 고용보험 피보험기간 180일 이상이면 실업급여 대상입니다. 비자발적 퇴사(해고)에 해당하므로 수급자격이 인정될 수 있습니다. 관할 고용센터에 구직 신청하세요</li>\n<li><strong>건강보험 전환</strong> — 직장건강보험에서 지역건강보험 또는 임의계속가입으로 전환해야 합니다. 퇴사 후 14일 이내에 신청하세요</li>\n<li><strong>국민연금 납부 유예</strong> — 소득이 없으면 국민연금 납부 유예를 신청할 수 있습니다</li>\n<li><strong>구제신청 기한 확인</strong> — 부당해고 구제신청은 <strong>해고일로부터 3개월 이내</strong>에 해야 합니다. 달력에 기한을 표시하세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">72시간 체크: 서명 거부 → 증거 확보 → 부당성 판단 → 실업급여·보험 전환 → 구제신청 기한 확인</blockquote>',
      },
    ],
    cases: [
      {
        title: '정년 소급 적용에 의한 퇴직 처리 — 부당해고 인정',
        summary:
          '대법원 2024두41038 사건(대법원, 2024.11.20 선고)에서 법원은 정년 도달에 따라 근로관계가 당연종료되었는지는 당연종료 여부가 다투어지는 시점에 유효한 정년을 기준으로 판단해야 하며, 소급 적용되는 정년을 기준으로 판단할 수 없다고 판시했습니다.',
        takeaway:
          '사업주가 취업규칙 변경이나 소급 적용을 근거로 퇴직 처리하더라도 그 시점에 유효하지 않은 규정이면 부당해고에 해당할 소지가 있습니다. 해고 근거의 유효성을 가능한 한 확인하세요.',
      },
    ],
    faq: [
      {
        question: '사직서를 이미 썼으면 되돌릴 수 없나요?',
        answer:
          '사직서를 쓴 경우에도 <strong>사업주가 수리하기 전이라면 철회할 수 있습니다.</strong> 또한 강박이나 기망에 의해 작성된 사직서는 무효를 주장할 수 있으니 포기하지 마세요.',
      },
      {
        question: '해고 통보를 전화로만 받았는데 증거가 되나요?',
        answer:
          '<strong>통화 녹음이 있으면 증거가 됩니다.</strong> 녹음이 없다면 해고 직후 사업주에게 문자나 이메일로 "오늘 해고 통보를 받았습니다. 서면 해고 사유서를 요청합니다"라고 보내 기록을 남기세요.',
      },
      {
        question: '수습 기간 중 해고도 부당해고인가요?',
        answer:
          '수습 기간이라도 <strong>합리적 이유 없는 해고는 부당해고</strong>에 해당할 소지가 있습니다. 다만 3개월 이내의 수습 기간 중에는 해고예고 의무가 면제됩니다.',
      },
      {
        question: '구두로 해고하면 어떻게 되나요?',
        answer:
          '근로기준법 제27조에 따라 <strong>서면 통지 없는 해고는 그 자체로 무효</strong>입니다. 해고 사유와 시기를 적은 서면을 받지 못했다면 이 점만으로도 구제신청이 가능합니다.',
      },
      {
        question: '해고 후 다른 회사에 입사해도 구제신청이 가능한가요?',
        answer:
          '<strong>네, 재취업 여부와 관계없이 구제신청이 가능합니다.</strong> 원직복직 대신 금전보상을 신청하면 됩니다. 해고 기간 중 받지 못한 임금 상당액을 청구할 수 있습니다.',
      },
    ],
    cta: {
      text: '해고 통보 후 즉시 대응 방법 무료 진단받기',
      link: '/diagnosis/dismissal',
    },
    internalLinks: [
      { label: '부당해고 가이드', href: '/guide/dismissal' },
      { label: '부당해고 구제신청 절차와 기간', href: '/spoke/dismissal/unfair-dismissal-relief-procedure' },
      { label: '해고예고수당 계산과 청구 방법', href: '/spoke/dismissal/dismissal-notice-pay-calculation' },
      { label: '퇴직금 계산과 지급 기한', href: '/spoke/dismissal/severance-pay-calculation-deadline' },
      { label: '권고사직 강요 시 대응법', href: '/spoke/dismissal/forced-resignation-defense' },
    ],
  },
];
