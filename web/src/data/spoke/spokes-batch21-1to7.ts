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
          '<p><strong style="color:#1e3a5f">진정서 내용이 부실하면 반려되거나 처리가 지연될 수 있으니 아래 실수를 반드시 피하세요</strong></p>\n<ul>\n<li><strong>체불 금액을 뭉뚱그려 적는 실수</strong> — "약 300만 원"이 아니라 기본급 200만 원 + 연장수당 50만 원 + 퇴직금 80만 원처럼 항목별로 분리해야 합니다</li>\n<li><strong>사업장 정보가 부정확한 실수</strong> — 상호명이 달라지거나 대표자가 변경된 경우 최신 사업자등록 정보를 확인하세요</li>\n<li><strong>증거를 첨부하지 않는 실수</strong> — 진정서만 내면 근로감독관이 사실 확인에 시간이 더 걸립니다. 급여명세서, 근로계약서 사본을 반드시 첨부하세요</li>\n<li><strong>퇴직금을 빠뜨리는 실수</strong> — 1년 이상 근무했다면 퇴직금도 체불 항목에 포함해야 합니다. 근로자퇴직급여 보장법에 따라 30일분 이상의 평균임금을 퇴직금으로 받을 수 있습니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/wage" style="color:#1565c0;font-weight:600">내 임금체불 진정서 무료 검토받기 &rarr;</a>\n</div>',
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
          '근로기준법 제104조 제2항에 따라 <strong>진정을 이유로 근로자에게 불이익을 주는 행위는 처벌 대상</strong>입니다. 2년 이하의 징역 또는 2천만 원 이하의 벌금에 해당합니다.',
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
  {
    domain: 'wage',
    slug: 'unpaid-wage-where-to-start',
    keyword: '임금체불 어디부터 시작',
    questionKeyword: '임금을 못 받았는데 어디부터 해야 하나요?',
    ctaKeyword: '임금체불 대응 시작',
    type: '어디부터형',
    perspective: '피해자',
    meta: {
      title: '임금체불 대응 첫 5단계 순서 정리 | 로앤가이드',
      description: '월급을 못 받았는데 뭘 먼저 해야 할지 모르겠다면 체불 대응 첫 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>퇴사를 했는데 마지막 달 월급이 안 들어옵니다. 사장에게 문자를 보내도 읽씹입니다. 주변에 물어보면 "노동청 가"라고 하지만, 그 전에 뭘 준비해야 하는지 모릅니다. 아무것도 안 하면 시간만 흐르고 시효는 다가옵니다. 지금 바로 할 수 있는 첫 행동부터 정리합니다.</p>',
    sections: [
      {
        title: '1단계 — 체불 금액을 정확하게 계산하세요',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제2조 제1항 제5호에 따르면 임금이란 사용자가 근로의 대가로 지급하는 모든 금품을 말합니다</strong></p>\n<p>체불 금액을 항목별로 분리해서 산출하세요.</p>\n<ul>\n<li><strong>기본급</strong> — 근로계약서에 명시된 월 급여를 일할 계산합니다</li>\n<li><strong>연장·야간·휴일 수당</strong> — 5인 이상 사업장이면 통상임금의 50% 가산. 출퇴근 기록으로 연장근로 시간을 확인하세요</li>\n<li><strong>퇴직금</strong> — 1년 이상 근무했다면 30일분 이상의 평균임금. 퇴직일 이전 3개월 총임금을 총일수로 나눠 계산합니다</li>\n<li><strong>연차수당</strong> — 사용하지 못한 연차 일수 × 통상임금 1일분</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체불 항목: 기본급 + 연장수당 + 퇴직금 + 연차수당</blockquote>',
      },
      {
        title: '2단계 — 증거를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">근로 사실과 체불 사실을 입증할 수 있는 자료를 최대한 많이 모으세요</strong></p>\n<ul>\n<li><strong>필수 증거</strong> — 근로계약서, 급여명세서, 급여 입금 내역(통장 거래내역), 출퇴근 기록</li>\n<li><strong>보조 증거</strong> — 업무 관련 카카오톡 대화, 업무 지시 메일, CCTV 기록, 동료 증언</li>\n<li><strong>독촉 기록</strong> — 사업주에게 임금 지급을 요청한 문자·카카오톡·이메일을 캡처하세요. 독촉 사실 자체가 체불 증거가 됩니다</li>\n</ul>\n<p>근로계약서가 없어도 <strong>급여 이체 내역과 출퇴근 기록만 있으면</strong> 근로 사실 입증이 가능합니다.</p>',
      },
      {
        title: '3단계 — 사업주에게 내용증명을 발송하세요',
        content:
          '<p><strong style="color:#1e3a5f">내용증명은 법적 효력이 있는 공식 독촉 수단으로, 임금 지급을 서면으로 요구한 증거가 됩니다</strong></p>\n<ul>\n<li><strong>기재 내용</strong> — 체불 항목, 금액, 지급 기한(수령 후 7~14일), 미지급 시 법적 조치 예고</li>\n<li><strong>발송 방법</strong> — 우체국 내용증명 서비스를 이용하거나, 전자내용증명(e-내용증명)으로 발송합니다</li>\n<li><strong>효과</strong> — 사업주가 내용증명을 받으면 문제의 심각성을 인식하고 자진 지급하는 경우가 많습니다. 자진 지급이 없으면 진정서 접수 시 독촉 사실 증거로 활용됩니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/wage" style="color:#1565c0;font-weight:600">내 임금체불 상황 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '4~5단계 — 노동청 진정과 추가 법적 절차',
        content:
          '<p><strong style="color:#1e3a5f">내용증명 발송 후에도 지급이 없으면 관할 지방고용노동청에 진정서를 접수하세요</strong></p>\n<ul>\n<li><strong>4단계: 노동청 진정</strong> — 고용노동부 민원마당 또는 관할 노동청에 진정서를 제출합니다. 앞서 정리한 체불 금액 산출 내역과 증거를 함께 첨부하세요</li>\n<li><strong>5단계: 민사소송 또는 소액사건심판</strong> — 진정으로 해결되지 않으면 민사소송을 제기합니다. 체불 금액이 3천만 원 이하면 소액사건심판으로 빠르게 판결을 받을 수 있습니다</li>\n</ul>\n<p>퇴직금을 포함한 임금 청구 소멸시효는 <strong>퇴직일로부터 3년</strong>입니다. 시효가 임박했다면 소송 제기로 시효를 중단시키는 것이 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">순서 정리: 금액 계산 → 증거 확보 → 내용증명 → 노동청 진정 → 민사소송</blockquote>',
      },
    ],
    cases: [
      {
        title: '임금의 범위와 근로의 대가 판단 기준 — 대법원 판결',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 근로자에게 계속적·정기적으로 지급되고 사용자에게 지급의무가 있는 금품은 그 명칭에 관계없이 임금에 해당하며, 지급의무의 발생이 근로제공과 직접적으로 관련되어야 한다고 판시했습니다.',
        takeaway:
          '기본급 외에 매달 정기적으로 받던 수당, 인센티브도 임금에 해당할 수 있습니다. 체불 금액 산정 시 빠뜨리는 항목이 없는지 꼼꼼하게 확인하세요.',
      },
    ],
    faq: [
      {
        question: '퇴사하지 않았는데도 임금체불 대응이 가능한가요?',
        answer:
          '<strong>재직 중에도 가능합니다.</strong> 다만 사업주와의 관계를 고려해 내용증명부터 시작하고, 해결되지 않으면 노동청 진정으로 넘어가는 단계적 접근이 좋습니다.',
      },
      {
        question: '사업주가 "회사가 어려워서 못 준다"고 하면 어떻게 하나요?',
        answer:
          '경영난은 임금 미지급의 정당한 사유가 아닙니다. <strong>근로기준법 제36조는 사업장 사정과 관계없이 14일 이내 지급을 의무</strong>로 규정합니다. 노동청 진정을 진행하세요.',
      },
      {
        question: '3년 소멸시효가 거의 다 되었는데 어떡하나요?',
        answer:
          '<strong>즉시 민사소송을 제기하세요.</strong> 소송 제기 시 시효가 중단됩니다. 노동청 진정은 시효 중단 효과가 없으므로 시효가 임박하면 소송이 먼저입니다.',
      },
      {
        question: '무료로 법률 상담을 받을 수 있는 곳이 있나요?',
        answer:
          '<strong>대한법률구조공단(전화 132)에서 무료 법률 상담과 소송 대리를 받을 수 있습니다.</strong> 월평균 소득 기준을 충족하면 무료 소송 지원도 가능합니다.',
      },
      {
        question: '노동청 진정과 민사소송을 동시에 할 수 있나요?',
        answer:
          '<strong>네, 병행이 가능합니다.</strong> 노동청 진정은 사업주에 대한 형사 처벌, 민사소송은 임금 지급 판결을 목적으로 하므로 별개의 절차입니다.',
      },
    ],
    cta: {
      text: '임금체불 첫 대응 방법 무료 진단받기',
      link: '/diagnosis/wage',
    },
    internalLinks: [
      { label: '임금체불 가이드', href: '/guide/wage' },
      { label: '임금체불 진정서 작성법과 양식', href: '/spoke/wage/unpaid-wage-petition-writing' },
      { label: '임금체불 신고 절차와 처리 기간', href: '/spoke/wage/unpaid-wage-report-procedure-timeline' },
      { label: '임금체불 증거 수집 체크리스트', href: '/spoke/wage/unpaid-wage-evidence-checklist' },
      { label: '임금체불 합의금과 지연이자', href: '/spoke/wage/unpaid-wage-settlement-delayed-interest' },
    ],
  },

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
          '<strong>네, 부제소 합의 조항이 있으면 지연이자 포함 모든 청구를 포기하게 됩니다.</strong> 합의 금액에 지연이자가 반영되었는지 반드시 확인하세요.',
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
  {
    domain: 'wage',
    slug: 'unpaid-wage-evidence-checklist',
    keyword: '임금체불 증거 수집 체크리스트',
    questionKeyword: '임금체불 증거로 어떤 자료를 모아야 하나요?',
    ctaKeyword: '임금체불 증거 확보',
    type: '체크리스트형',
    perspective: '피해자',
    meta: {
      title: '임금체불 증거 수집 8가지 체크리스트 | 로앤가이드',
      description: '밀린 임금을 받기 위해 증거를 모아야 하는데 어떤 자료가 필요한지 모르겠다면 8가지 체크리스트를 지금 확인하세요.',
    },
    intro:
      '<p>"증거 없으면 못 받는다"는 말이 무섭게 들립니다. 근로계약서도 없고, 급여명세서도 못 받았습니다. 그런데 포기하기는 이릅니다. 월급이 이체된 통장 기록, 카카오톡 대화, 출퇴근 사진만으로도 충분한 증거가 됩니다. 무엇이 증거가 되는지 하나씩 확인하세요.</p>',
    sections: [
      {
        title: '핵심 증거 4가지 — 이것만 있어도 시작할 수 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법에 따르면 사용자는 근로계약서를 서면으로 교부할 의무가 있지만(제17조), 교부하지 않았더라도 다른 자료로 근로 사실을 입증할 수 있습니다</strong></p>\n<ul>\n<li><strong>급여 입금 내역</strong> — 은행 앱에서 급여가 입금된 거래내역을 캡처하세요. 입금자명, 금액, 날짜가 표시된 화면이 필요합니다. 이것만으로 근로관계와 임금 수준을 동시에 입증할 수 있습니다</li>\n<li><strong>근로계약서</strong> — 원본이 없더라도 사진이나 스캔본도 증거로 인정됩니다. 계약서에 근무시간, 임금, 업무내용이 명시되어 있으면 강력한 증거입니다</li>\n<li><strong>급여명세서</strong> — 기본급, 수당, 공제 항목이 기재된 명세서. 사업장이 발급하지 않은 경우 급여 이체 내역으로 대체합니다</li>\n<li><strong>출퇴근 기록</strong> — 지문인식, 카드 태그, 출퇴근 앱 기록. 기록이 없다면 출퇴근 시 찍은 사진이나 교통카드 이용내역도 활용할 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 4가지: 급여 입금 내역 + 근로계약서 + 급여명세서 + 출퇴근 기록</blockquote>',
      },
      {
        title: '보조 증거 4가지 — 있으면 더 유리합니다',
        content:
          '<p><strong style="color:#1e3a5f">핵심 증거가 부족할 때 아래 보조 증거로 보완하면 입증력이 크게 높아집니다</strong></p>\n<ul>\n<li><strong>카카오톡·문자 대화</strong> — 업무 지시, 근무 일정 조율, 임금 독촉 대화를 모두 캡처하세요. 날짜와 상대방 이름이 표시되어야 합니다</li>\n<li><strong>업무 관련 이메일</strong> — 업무 지시 메일, 회의 참석 안내, 프로젝트 배정 메일 등 근로 사실을 보여주는 모든 이메일</li>\n<li><strong>동료 증언</strong> — 같이 근무한 동료의 진술서. 증인의 성명, 연락처, 근무 기간, 목격한 사실을 기재하면 됩니다</li>\n<li><strong>사업장 관련 자료</strong> — 명함, 사원증, 유니폼 사진, 사내 시스템 접속 기록, 사업장 출입 기록 등</li>\n</ul>\n<p>근로감독관은 <strong>사업장에 직접 조사</strong>하여 임금대장, 근로자 명부, 출퇴근 기록을 확인하므로 근로자가 모든 증거를 갖출 필요는 없습니다.</p>',
      },
      {
        title: '증거 수집 시 주의사항 3가지',
        content:
          '<p><strong style="color:#1e3a5f">증거의 효력을 유지하려면 수집 과정에서 아래 사항을 지켜야 합니다</strong></p>\n<ul>\n<li><strong>원본 보존</strong> — 문자, 카카오톡은 원본 상태의 스크린샷을 저장하세요. 대화 내용을 편집하면 증거 가치가 떨어집니다</li>\n<li><strong>날짜 확인</strong> — 모든 증거에 날짜가 명확하게 표시되어야 합니다. 은행 거래내역은 날짜가 자동 기록되므로 가장 신뢰도 높은 증거입니다</li>\n<li><strong>복사본 보관</strong> — 노동청에 제출하는 자료는 사본을 내고 원본은 본인이 보관하세요. USB, 클라우드에 백업하는 것을 추천합니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/wage" style="color:#1565c0;font-weight:600">내 증거 충분한지 무료 점검받기 &rarr;</a>\n</div>',
      },
      {
        title: '증거가 전혀 없는 경우 대처법',
        content:
          '<p><strong style="color:#1e3a5f">증거가 없다고 포기할 필요는 없습니다. 근로감독관의 조사 권한과 간접 증거를 활용할 수 있습니다</strong></p>\n<ul>\n<li><strong>근로감독관 조사</strong> — 진정서가 접수되면 근로감독관이 사업장의 임금대장, 4대 보험 가입 기록, 원천징수 내역을 직권으로 조사합니다</li>\n<li><strong>4대 보험 가입 이력</strong> — 국민건강보험공단이나 국민연금공단에서 본인의 가입 이력을 조회하면 해당 사업장에서의 근로 사실을 확인할 수 있습니다</li>\n<li><strong>원천징수영수증</strong> — 홈택스에서 근로소득 원천징수영수증을 조회하면 해당 연도에 어느 사업장에서 얼마의 소득이 있었는지 확인됩니다</li>\n<li><strong>신용카드 이용내역</strong> — 사업장 인근에서 결제한 신용카드 내역은 해당 시간에 그 장소에 있었다는 간접 증거가 됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거 없을 때: 4대 보험 이력 + 원천징수영수증 + 감독관 직권 조사 활용</blockquote>',
      },
    ],
    cases: [
      {
        title: '근로자성 인정과 근로 사실 입증 — 대법원 판결',
        summary:
          '대법원 2021다210829 사건(대법원, 2022.12.01 선고)에서 법원은 계약의 형식보다 근로제공 관계의 실질을 기준으로 근로기준법상 근로자에 해당하는지를 판단해야 하며, 사업장에서 임금을 목적으로 종속적인 관계에서 근로를 제공했다면 근로자에 해당한다고 판시했습니다.',
        takeaway:
          '위탁계약서나 프리랜서 계약서를 썼더라도 실질적으로 사업주의 지시를 받아 일했다면 근로자로 인정됩니다. 업무 지시 내역이 중요한 증거가 됩니다.',
      },
    ],
    faq: [
      {
        question: '녹음한 통화도 증거로 인정되나요?',
        answer:
          '<strong>본인이 참여한 대화의 녹음은 증거로 인정됩니다.</strong> 대법원 판례에 따르면 당사자 일방이 상대방의 동의 없이 녹음한 대화도 위법하지 않습니다.',
      },
      {
        question: 'CCTV 영상을 증거로 쓸 수 있나요?',
        answer:
          '사업장 CCTV는 사업주가 관리하므로 <strong>근로감독관에게 CCTV 확인을 요청</strong>할 수 있습니다. 감독관이 조사 시 사업장에 자료 제출을 요구하면 사업주는 이에 응해야 합니다.',
      },
      {
        question: '현금으로 급여를 받았는데 증거가 될까요?',
        answer:
          '현금 지급은 입증이 어렵습니다. <strong>급여를 받을 때 서명한 수령증, 사업주와의 금액 관련 대화</strong>가 있으면 증거가 됩니다. 앞으로는 계좌이체를 요청하세요.',
      },
      {
        question: '퇴사 후에도 증거를 모을 수 있나요?',
        answer:
          '<strong>은행 거래내역, 4대 보험 가입이력, 홈택스 원천징수영수증은 퇴사 후에도 조회 가능합니다.</strong> 다만 사업장 내부 자료는 접근이 어려우므로 재직 중에 미리 확보해두는 것이 좋습니다.',
      },
      {
        question: '증거를 조작하면 어떤 처벌을 받나요?',
        answer:
          '증거 조작은 <strong>형법 제229조(위조사문서행사)로 5년 이하의 징역</strong>에 해당할 수 있습니다. 증거는 있는 그대로 제출해야 합니다.',
      },
    ],
    cta: {
      text: '임금체불 증거 충분한지 무료 점검받기',
      link: '/diagnosis/wage',
    },
    internalLinks: [
      { label: '임금체불 가이드', href: '/guide/wage' },
      { label: '임금체불 진정서 작성법과 양식', href: '/spoke/wage/unpaid-wage-petition-writing' },
      { label: '임금체불 어디부터 시작해야 하나', href: '/spoke/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 신고 절차와 처리 기간', href: '/spoke/wage/unpaid-wage-report-procedure-timeline' },
      { label: '임금체불 합의금과 지연이자', href: '/spoke/wage/unpaid-wage-settlement-delayed-interest' },
    ],
  },

  // ───────────────────────────────────────────
  // 6. dismissal / unfair-dismissal-relief-procedure
  // ───────────────────────────────────────────
  {
    domain: 'dismissal',
    slug: 'unfair-dismissal-relief-procedure',
    keyword: '부당해고 구제신청 절차 기간',
    questionKeyword: '부당해고 구제신청은 어떻게 하고 기간은 얼마나 걸리나요?',
    ctaKeyword: '부당해고 구제신청',
    type: '절차타임라인형',
    perspective: '피해자',
    meta: {
      title: '부당해고 구제신청 절차 5단계 기간 | 로앤가이드',
      description: '부당하게 해고됐는데 구제신청 절차와 소요 기간이 궁금하다면 5단계 타임라인을 지금 확인하세요.',
    },
    intro:
      '<p>어제까지 멀쩡히 출근하던 회사에서 "내일부터 나오지 마"라는 통보를 받았습니다. 이유도 제대로 듣지 못했습니다. 근로기준법 제23조 제1항은 정당한 이유 없이 근로자를 해고할 수 없다고 규정합니다. 해고가 부당하다면 노동위원회에 구제신청을 할 수 있고, 해고일로부터 3개월 이내에 신청해야 합니다.</p>',
    timelineSteps: [
      '1단계: 해고 사유서 요구 및 부당해고 여부 확인',
      '2단계: 지방노동위원회에 구제신청 (해고일로부터 3개월 이내)',
      '3단계: 심문회의 (접수 후 약 40~60일)',
      '4단계: 판정서 송달 (심문 후 약 30일)',
      '5단계: 재심 신청 또는 행정소송 (판정서 송달 후 10일/15일 이내)',
    ],
    sections: [
      {
        title: '1단계 — 해고 사유서를 요구하세요',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제27조에 따르면 사용자는 근로자를 해고하려면 해고 사유와 해고 시기를 서면으로 통지해야 하며, 서면 통지가 없으면 해고 자체가 무효입니다</strong></p>\n<ul>\n<li><strong>서면 해고통지 확인</strong> — 해고 통보를 받았다면 서면으로 해고 사유서를 요구하세요. 구두 해고는 그 자체로 부당해고에 해당합니다</li>\n<li><strong>해고 사유 검토</strong> — 해고 사유가 근로기준법 제23조 제1항의 "정당한 이유"에 해당하는지 확인합니다. 단순 경영 악화, 근무 태도 불량 등 추상적 사유는 정당한 이유로 인정되기 어렵습니다</li>\n<li><strong>해고 예고</strong> — 사용자는 해고 30일 전에 예고하거나, 30일분 이상의 통상임금(해고예고수당)을 지급해야 합니다(근로기준법 제26조)</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">서면 통지 없는 해고 = 부당해고</blockquote>',
      },
      {
        title: '2단계 — 지방노동위원회에 구제신청 (3개월 이내)',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제28조에 따라 부당해고를 당한 근로자는 해고일로부터 3개월 이내에 지방노동위원회에 구제신청을 해야 합니다</strong></p>\n<ul>\n<li><strong>신청 서류</strong> — 구제신청서, 해고통지서(또는 해고 사실을 증명하는 자료), 근로계약서, 급여명세서, 출퇴근 기록 등</li>\n<li><strong>관할</strong> — 사업장 소재지를 관할하는 지방노동위원회에 신청합니다</li>\n<li><strong>구제 내용</strong> — 원직복직 + 해고기간 중 임금 상당액 지급, 또는 금전보상(원직복직을 원하지 않는 경우)을 신청할 수 있습니다</li>\n<li><strong>3개월 제척기간</strong> — 이 기간은 연장이 불가능한 제척기간이므로 하루라도 넘기면 신청 자체가 각하됩니다</li>\n</ul>\n<p><strong>상시 5인 이상 사업장</strong>만 구제신청 대상입니다. 5인 미만 사업장은 민사소송으로 해고무효확인을 구해야 합니다.</p>',
      },
      {
        title: '3~4단계 — 심문회의와 판정 (접수 후 60~90일)',
        content:
          '<p><strong style="color:#1e3a5f">노동위원회는 접수 후 60일 이내에 심문회의를 열고, 당사자 양측의 진술과 증거를 심리하여 판정합니다</strong></p>\n<ul>\n<li><strong>심문회의</strong> — 근로자와 사용자가 각각 출석하여 주장과 증거를 제출합니다. 변호사나 공인노무사를 대리인으로 선임할 수 있습니다</li>\n<li><strong>증거 제출</strong> — 해고 과정의 부당성을 보여주는 모든 자료(메일, 문자, 녹음, 인사 기록 등)를 제출합니다</li>\n<li><strong>판정</strong> — 해고가 부당하다고 인정되면 원직복직과 임금 상당액 지급을 명하는 구제명령이 내려집니다</li>\n<li><strong>금전보상</strong> — 근로기준법 제30조 제3항에 따라 근로자가 원직복직을 원하지 않으면 해고기간 중 임금 상당액 이상의 금전보상을 명할 수 있습니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/dismissal" style="color:#1565c0;font-weight:600">내 해고가 부당해고인지 무료 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '5단계 — 재심 신청과 행정소송',
        content:
          '<p><strong style="color:#1e3a5f">지방노동위원회 판정에 불복하면 중앙노동위원회에 재심을 신청하고, 재심 판정에도 불복하면 행정소송을 제기합니다</strong></p>\n<ul>\n<li><strong>재심 신청</strong> — 판정서를 송달받은 날부터 10일 이내에 중앙노동위원회에 재심을 신청합니다</li>\n<li><strong>행정소송</strong> — 재심 판정에 불복하면 재심판정서를 송달받은 날부터 15일 이내에 행정법원에 소를 제기합니다</li>\n<li><strong>이행강제금</strong> — 사용자가 구제명령을 이행하지 않으면 노동위원회는 2천만 원 이하의 이행강제금을 부과할 수 있습니다(근로기준법 제33조)</li>\n<li><strong>기간 도과 시 복직 대안</strong> — 구제신청 기간을 놓쳤거나 정년·계약 만료로 근로관계가 종료된 경우에는 민사소송(해고무효확인, 임금 청구)을 검토하세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">불복 경로: 초심 판정 → 재심(10일 이내) → 행정소송(15일 이내)</blockquote>',
      },
    ],
    cases: [
      {
        title: '부당해고 후 금전보상 구제이익 — 대법원 판결',
        summary:
          '대법원 2024두54683 사건(대법원, 2025.03.13 선고)에서 법원은 부당해고 구제신청 후 사용자가 해고를 취소하여 원직복직을 명하고 임금 상당액을 지급하더라도, 특별한 사정이 없는 한 근로자가 금전보상명령을 받을 구제이익은 소멸하지 않는다고 판시했습니다.',
        takeaway:
          '사용자가 뒤늦게 복직을 제안하더라도 금전보상 청구를 포기할 필요가 없습니다. 구제신청은 유지하되, 원하는 구제 내용(복직 또는 금전보상)을 명확히 하세요.',
      },
    ],
    faq: [
      {
        question: '5인 미만 사업장에서 해고됐으면 어떻게 하나요?',
        answer:
          '5인 미만 사업장은 노동위원회 구제신청 대상이 아닙니다. <strong>민사법원에 해고무효확인 소송</strong>을 제기하거나, 해고예고수당 미지급을 이유로 노동청에 진정할 수 있습니다.',
      },
      {
        question: '구제신청 비용은 얼마인가요?',
        answer:
          '<strong>노동위원회 구제신청에는 비용이 들지 않습니다.</strong> 무료입니다. 다만 변호사나 공인노무사를 대리인으로 선임하면 별도 비용이 발생합니다.',
      },
      {
        question: '해고 후 다른 직장에 취업해도 구제신청이 가능한가요?',
        answer:
          '<strong>네, 다른 곳에 취업했더라도 구제신청은 가능합니다.</strong> 원직복직 대신 금전보상을 신청하면 됩니다.',
      },
      {
        question: '구제신청이 인용되면 해고 기간 동안의 월급도 받나요?',
        answer:
          '<strong>네, 해고가 부당하다고 판정되면 해고 기간 동안 받지 못한 임금 상당액</strong>을 지급받습니다. 다만 해고 기간 중 다른 곳에서 번 수입은 일부 공제될 수 있습니다.',
      },
      {
        question: '경영상 이유에 의한 해고도 부당해고일 수 있나요?',
        answer:
          '<strong>경영상 해고도 근로기준법 제24조의 요건</strong>(긴박한 경영상 필요, 해고 회피 노력, 합리적 기준에 따른 대상자 선정, 근로자대표와 50일 전 통보·협의)을 갖추지 못하면 부당해고입니다.',
      },
    ],
    cta: {
      text: '부당해고 구제신청 가능 여부 무료 진단받기',
      link: '/diagnosis/dismissal',
    },
    internalLinks: [
      { label: '부당해고 가이드', href: '/guide/dismissal' },
      { label: '해고 통보 받았을 때 어디부터 해야 하나', href: '/spoke/dismissal/dismissed-where-to-start' },
      { label: '부당해고 원직복직과 금전보상 비교', href: '/spoke/dismissal/reinstatement-vs-monetary-compensation' },
      { label: '해고예고수당 계산과 청구 방법', href: '/spoke/dismissal/dismissal-notice-pay-calculation' },
      { label: '퇴직금 계산과 지급 기한', href: '/spoke/dismissal/severance-pay-calculation-deadline' },
    ],
  },

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
          '<p><strong style="color:#1e3a5f">해고 직후 생활 안정을 위한 행정 절차도 빠르게 진행해야 합니다</strong></p>\n<ul>\n<li><strong>실업급여 수급자격 확인</strong> — 고용보험 피보험기간 180일 이상이면 실업급여 대상입니다. 비자발적 퇴사(해고)에 해당하므로 수급자격이 인정됩니다. 관할 고용센터에 구직 신청하세요</li>\n<li><strong>건강보험 전환</strong> — 직장건강보험에서 지역건강보험 또는 임의계속가입으로 전환해야 합니다. 퇴사 후 14일 이내에 신청하세요</li>\n<li><strong>국민연금 납부 유예</strong> — 소득이 없으면 국민연금 납부 유예를 신청할 수 있습니다</li>\n<li><strong>구제신청 기한 확인</strong> — 부당해고 구제신청은 <strong>해고일로부터 3개월 이내</strong>에 해야 합니다. 달력에 기한을 표시하세요</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">72시간 체크: 서명 거부 → 증거 확보 → 부당성 판단 → 실업급여·보험 전환 → 구제신청 기한 확인</blockquote>',
      },
    ],
    cases: [
      {
        title: '정년 소급 적용에 의한 퇴직 처리 — 부당해고 인정',
        summary:
          '대법원 2024두41038 사건(대법원, 2024.11.20 선고)에서 법원은 정년 도달에 따라 근로관계가 당연종료되었는지는 당연종료 여부가 다투어지는 시점에 유효한 정년을 기준으로 판단해야 하며, 소급 적용되는 정년을 기준으로 판단할 수 없다고 판시했습니다.',
        takeaway:
          '사업주가 취업규칙 변경이나 소급 적용을 근거로 퇴직 처리하더라도 그 시점에 유효하지 않은 규정이면 부당해고에 해당합니다. 해고 근거의 유효성을 반드시 확인하세요.',
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
          '수습 기간이라도 <strong>합리적 이유 없는 해고는 부당해고</strong>에 해당합니다. 다만 3개월 이내의 수습 기간 중에는 해고예고 의무가 면제됩니다.',
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
