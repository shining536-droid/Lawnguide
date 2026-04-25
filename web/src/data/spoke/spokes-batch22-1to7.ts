import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 1. 이 페이지는 [산재로 일을 못 하는 근로자]의 [휴업급여 신청 조건과 금액을 모르는 상황]에서 [자격 조건 확인과 금액 계산법 안내]를 돕는 페이지다.
// 2. 이 페이지는 [산재로 가족을 잃은 유족]의 [유족급여 신청 절차를 모르는 상황]에서 [단계별 신청 절차와 급여 유형 선택 안내]를 돕는 페이지다.
// 3. 이 페이지는 [오랜 근무로 질병이 생긴 근로자]의 [직업병 산재 인정 기준을 모르는 상황]에서 [인정 기준 5가지 체크리스트와 입증 자료 준비법 안내]를 돕는 페이지다.
// 4. 이 페이지는 [산재 치료 후 직장 복귀가 어려운 근로자]의 [직업재활급여 종류와 신청법을 모르는 상황]에서 [4가지 급여 종류와 신청 절차 안내]를 돕는 페이지다.
// 5. 이 페이지는 [2년 이상 산재 치료 중인 근로자]의 [상병보상연금 전환 기준과 금액을 모르는 상황]에서 [전환 조건 3가지와 등급별 금액 안내]를 돕는 페이지다.
// 6. 이 페이지는 [안전보건 위반으로 과태료·벌금을 부과받을 수 있는 사업주]의 [제재 기준과 대응 방법을 모르는 상황]에서 [위반유형별 금액 기준과 감경 방법 안내]를 돕는 페이지다.
// 7. 이 페이지는 [위험성평가를 미이행한 사업주]의 [사고 발생 후 제재와 처벌을 받을 수 있는 상황]에서 [의무사항 5가지 체크리스트와 미이행 제재 기준 안내]를 돕는 페이지다.

export const spokesBatch22_1to7: SpokePage[] = [
  // ───────────────────────────────────────────
  // 1. industrial-accident1 / workers-comp-leave-benefit
  // ───────────────────────────────────────────
  {
    domain: 'industrial-accident1',
    slug: 'workers-comp-leave-benefit',
    keyword: '산재 휴업급여 신청 조건 금액',
    questionKeyword: '산재 휴업급여는 얼마나 받을 수 있나요?',
    ctaKeyword: '산재 휴업급여 신청',
    type: '수치기한형',
    perspective: '피해자',
    meta: {
      title: '산재 휴업급여 신청 조건과 금액 계산법 3가지 | 로앤가이드',
      description:
        '산재로 일을 못 하게 되었는데 휴업급여를 얼마나 받을 수 있는지 궁금하다면 신청 조건과 계산법을 지금 확인하세요.',
    },
    intro:
      '<p>작업 중 다쳐서 입원했는데, 회사에서는 산재 처리해준다고만 합니다. 일을 못 하는 동안 생활비는 어떻게 해야 할지 막막합니다. 휴업급여가 있다는 건 들었지만 얼마를 받을 수 있는지, 언제까지 나오는지 알 수 없어 불안합니다.</p>',
    sections: [
      {
        title: '휴업급여 신청 자격 3가지 조건',
        content:
          '<p><strong style="color:#1e3a5f">산업재해보상보험법 제52조에 따르면 업무상 재해로 요양 중 취업하지 못한 기간에 대해 휴업급여를 지급합니다</strong></p>\n<p>휴업급여를 받으려면 아래 3가지 조건을 모두 충족해야 합니다.</p>\n<ul>\n<li><strong>업무상 재해 인정</strong> — 근로복지공단으로부터 업무상 재해(업무상 사고 또는 업무상 질병)로 인정받아야 합니다. 출퇴근 재해도 2018년부터 업무상 재해에 포함됩니다</li>\n<li><strong>요양 중 취업 불능</strong> — 의료기관의 진단서에 취업이 불가능하다는 소견이 있어야 합니다. 부분 취업이 가능한 경우에는 부분 휴업급여가 지급됩니다</li>\n<li><strong>4일 이상 요양</strong> — 요양 기간이 3일 이하이면 사업주가 직접 보상하고, 4일 이상부터 산재보험에서 휴업급여를 지급합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 업무상 재해 인정 + 취업 불능 + 4일 이상 요양 → 3가지 충족 시 휴업급여 수급 가능</blockquote>',
      },
      {
        title: '금액 계산법 — 평균임금의 70% 기준',
        content:
          '<p><strong style="color:#1e3a5f">휴업급여는 1일당 평균임금의 70%를 지급합니다. 평균임금이란 재해 발생일 이전 3개월간 지급받은 임금 총액을 그 기간의 총일수로 나눈 금액입니다</strong></p>\n<ul>\n<li><strong>기본 계산</strong> — 월급 300만 원(3개월 합계 900만 원)인 경우, 평균임금 = 900만 원 &divide; 92일(3개월) = 약 97,826원. 1일 휴업급여 = 97,826원 &times; 70% = 약 68,478원</li>\n<li><strong>최저 보상 기준</strong> — 평균임금의 70%가 최저임금에 미달하면 최저임금액을 휴업급여로 지급합니다. 2026년 최저임금은 시간급 10,320원(일급 82,560원, 8시간 기준)입니다</li>\n<li><strong>고령자 감액</strong> — 61세 이후부터 매년 2%포인트씩 감액되어 65세 이후에는 평균임금의 62%를 지급합니다</li>\n<li><strong>부분 휴업급여</strong> — 취업이 일부 가능하여 실제 근로한 경우, 실제 소득과 평균임금 70%의 차액을 지급합니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">내 휴업급여 금액이 궁금하다면</strong><br/>\n<a href="/diagnosis/industrial-accident1" style="color:#1565c0;font-weight:600">산재 휴업급여 무료 상담받기 &rarr;</a>\n</div>',
      },
      {
        title: '신청 절차와 필요 서류',
        content:
          '<p><strong style="color:#1e3a5f">휴업급여는 근로복지공단에 요양급여 신청과 함께 또는 별도로 청구할 수 있습니다</strong></p>\n<ul>\n<li><strong>1단계: 요양급여 신청</strong> — 산재 발생 후 산재지정 의료기관에서 치료를 받고, 사업주를 통해 또는 직접 근로복지공단에 요양급여 신청서를 제출합니다</li>\n<li><strong>2단계: 휴업급여 청구</strong> — 요양급여가 승인되면 휴업급여 청구서를 근로복지공단에 제출합니다. 온라인(고용·산재보험 토탈서비스)으로도 청구 가능합니다</li>\n<li><strong>3단계: 심사 및 지급</strong> — 근로복지공단이 평균임금과 취업 불능 여부를 확인한 뒤 14일 이내에 지급 여부를 결정합니다</li>\n</ul>\n<p><strong>필요 서류:</strong></p>\n<ul>\n<li>휴업급여 청구서</li>\n<li>재해 경위서(사업주 확인)</li>\n<li>진단서 또는 소견서(취업 불능 소견 포함)</li>\n<li>임금대장 또는 급여명세서(평균임금 산정용)</li>\n<li>근로계약서 사본</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차 요약: 요양급여 신청 → 휴업급여 청구 → 심사·지급 결정(14일 이내)</blockquote>',
      },
      {
        title: '지급 기간과 종료 시점',
        content:
          '<p><strong style="color:#1e3a5f">휴업급여는 요양으로 취업하지 못한 기간 동안 계속 지급됩니다. 요양이 종결되면 휴업급여도 종료됩니다</strong></p>\n<ul>\n<li><strong>지급 기간</strong> — 요양 기간 전체에 대해 지급됩니다. 2년이 넘으면 상병보상연금으로 전환될 수 있습니다</li>\n<li><strong>종료 시점</strong> — 의사가 치료가 끝났다고 판단하여 치료 종결(요양 종결)이 되면 휴업급여는 중단됩니다</li>\n<li><strong>장해급여로 전환</strong> — 요양 종결 후 신체에 장해가 남으면 장해등급 판정을 받아 장해급여를 별도로 청구할 수 있습니다</li>\n<li><strong>재요양</strong> — 요양 종결 후 상태가 악화되면 재요양을 신청하고, 승인되면 다시 휴업급여를 받을 수 있습니다</li>\n</ul>\n<p>휴업급여는 매월 지급되며, 청구 시 해당 월의 취업 불능 기간을 기재하여 청구합니다. 소멸시효는 <strong>3년</strong>이므로 지급 사유가 발생한 날부터 3년 이내에 청구해야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기억하세요: 소멸시효 3년 — 재해 발생일이 아니라 지급 사유 발생일 기준입니다</blockquote>',
      },
    ],
    cases: [
      {
        title: '산재보험 급여 산정 시 평균임금 기준 — 대법원 판결',
        summary:
          '대법원 2024다294705 사건(대법원, 2025.05.29 선고)에서 법원은 산재보험 급여 산정의 기초가 되는 평균임금은 재해 발생일 이전 3개월간 실제 지급받은 임금 총액을 기준으로 산정해야 하며, 사업주가 임의로 줄인 임금이 아닌 근로계약상 정당한 임금을 기초로 해야 한다고 판시했습니다.',
        takeaway:
          '평균임금이 실제보다 낮게 산정되었다면 이의를 제기할 수 있습니다. 근로계약서와 급여명세서를 비교하여 정당한 임금 기준으로 휴업급여를 청구하세요.',
      },
    ],
    faq: [
      {
        question: '입원하지 않고 통원 치료만 받아도 휴업급여를 받을 수 있나요?',
        answer:
          '<strong>입원 여부와 관계없이 취업이 불가능한 기간에 대해 휴업급여가 지급됩니다.</strong> 통원 치료 중이라도 의사의 소견서에 취업 불능이라고 기재되어 있으면 청구할 수 있습니다. 다만 통원 치료일만 인정되는 것이 아니라 전체 요양 기간이 대상입니다.',
      },
      {
        question: '계약직(기간제 근로자)도 휴업급여를 받을 수 있나요?',
        answer:
          '<strong>고용 형태와 관계없이 산재보험 적용 사업장의 근로자는 모두 수급 자격이 있습니다.</strong> 정규직, 계약직, 일용직, 아르바이트 등 근로기준법상 근로자라면 휴업급여를 청구할 수 있습니다.',
      },
      {
        question: '회사가 산재 신청을 거부하면 어떻게 하나요?',
        answer:
          '<strong>사업주가 산재 신청에 협조하지 않아도 근로자가 직접 신청할 수 있습니다.</strong> 근로복지공단 지사에 방문하거나 온라인(토탈서비스)으로 직접 요양급여 신청서를 제출하면 됩니다. 사업주 확인란이 비어 있어도 접수 가능합니다.',
      },
      {
        question: '휴업급여와 실업급여를 동시에 받을 수 있나요?',
        answer:
          '<strong>동시 수급은 불가능합니다.</strong> 휴업급여는 요양 중 취업하지 못하는 기간에 지급되고, 실업급여는 근로 능력이 있으나 취업하지 못한 경우에 지급됩니다. 요양 종결 후 실업 상태라면 그때 실업급여를 별도로 신청할 수 있습니다.',
      },
      {
        question: '3일 이하 요양이면 산재보험에서 보상받을 수 없나요?',
        answer:
          '<strong>요양 기간이 3일 이하인 경우 사업주가 직접 1일 평균임금의 60%를 보상해야 합니다(근로기준법 제82조).</strong> 산재보험 휴업급여는 4일 이상 요양부터 적용되지만, 3일 이하 기간은 사업주 책임이므로 보상을 받을 수 없는 것은 아닙니다.',
      },
    ],
    cta: {
      text: '산재 휴업급여 무료 상담받기',
      link: '/diagnosis/industrial-accident1',
    },
    internalLinks: [
      { label: '산재보상 가이드', href: '/guide/industrial-accident1' },
      { label: '산재보험 청구 절차 총정리', href: '/spoke/industrial-accident1/workers-comp-claim-process' },
      { label: '산재 장해등급 판정 절차', href: '/spoke/industrial-accident1/disability-benefit-grade-process' },
      { label: '산재 불승인 후 재신청 방법', href: '/spoke/industrial-accident1/reapply-after-rejection' },
      { label: '산재 사고 어디부터 시작해야 하나', href: '/spoke/industrial-accident1/injured-where-to-start' },
    ],
  },

  // ───────────────────────────────────────────
  // 2. industrial-accident1 / workers-comp-survivor-benefit
  // ───────────────────────────────────────────
  {
    domain: 'industrial-accident1',
    slug: 'workers-comp-survivor-benefit',
    keyword: '산재 유족급여 신청 절차 자격',
    questionKeyword: '산재 사망 시 유족급여를 어떻게 신청하나요?',
    ctaKeyword: '산재 유족급여 신청',
    type: '절차타임라인형',
    perspective: '피해자',
    meta: {
      title: '산재 유족급여 신청 절차 4단계 자격 총정리 | 로앤가이드',
      description:
        '산업재해로 가족을 잃었는데 유족급여 신청 방법을 모르겠다면 절차와 자격 조건을 지금 확인하세요.',
    },
    intro:
      '<p>공장에서 일하던 남편이 사고로 세상을 떠났습니다. 장례를 치르느라 정신이 없었고, 이제 아이들과 살아가야 하는데 경제적 걱정이 밀려옵니다. 산재 유족급여가 있다는 것은 들었지만 어떻게 신청하는지, 얼마를 받을 수 있는지 모릅니다.</p>',
    timelineSteps: [
      '1단계: 사망 원인 확인 및 산재 신청',
      '2단계: 근로복지공단 유족급여 청구',
      '3단계: 업무상 재해 인정 심사',
      '4단계: 급여 지급 결정',
    ],
    sections: [
      {
        title: '유족급여 수급 자격과 순위',
        content:
          '<p><strong style="color:#1e3a5f">산업재해보상보험법 제62조에 따르면 근로자가 업무상 재해로 사망한 경우 유족에게 유족급여를 지급합니다</strong></p>\n<p>유족급여 수급권자의 순위는 법률로 정해져 있습니다.</p>\n<ul>\n<li><strong>1순위</strong> — 배우자(사실혼 포함). 근로자 사망 당시 그에 의해 부양되고 있던 배우자가 최우선 수급권자입니다</li>\n<li><strong>2순위</strong> — 자녀. 25세 미만이거나 장애인인 자녀가 해당합니다</li>\n<li><strong>3순위</strong> — 부모. 60세 이상이거나 장애인인 경우에 해당할 소지가 있습니다</li>\n<li><strong>4순위</strong> — 손자녀, 조부모, 형제자매 순서로 수급 자격이 부여됩니다</li>\n</ul>\n<p><strong>부양 요건:</strong> 근로자 사망 당시 근로자의 수입으로 생계를 같이하고 있던 유족에게 우선권이 있습니다. 동일 순위가 2명 이상이면 균등하게 분배됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">수급 순위: 배우자 → 자녀 → 부모 → 손자녀·조부모·형제자매</blockquote>',
      },
      {
        title: '연금형 vs 일시금형 선택 기준',
        content:
          '<p><strong style="color:#1e3a5f">유족급여는 연금 또는 일시금 중 선택할 수 있습니다. 연금이 총 수령액이 더 크지만, 상황에 따라 일시금이 유리할 수 있습니다</strong></p>\n<ul>\n<li><strong>유족보상연금</strong> — 기본금액(급여기초연액의 47%) + 가산금액(수급자격자 1인당 5%, 최대 20%)을 매월 나누어 지급합니다. 급여기초연액은 평균임금 &times; 365일입니다</li>\n<li><strong>유족보상일시금</strong> — 평균임금의 1,300일분을 한 번에 지급합니다. 연금 수급자격자가 없거나 수급자격자가 일시금을 원하는 경우 선택할 수 있습니다</li>\n<li><strong>선택 기준</strong> — 연금은 약 4~5년 수급하면 일시금 총액을 넘깁니다. 유족의 나이가 젊거나 부양할 자녀가 있으면 연금이 유리합니다. 급하게 목돈이 필요한 경우에는 일시금 50%를 선지급받을 수도 있습니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">유족급여 유형 선택이 고민된다면</strong><br/>\n<a href="/diagnosis/industrial-accident1" style="color:#1565c0;font-weight:600">산재 유족급여 무료 상담받기 &rarr;</a>\n</div>',
      },
      {
        title: '장의비와 추가 보상',
        content:
          '<p><strong style="color:#1e3a5f">유족급여 외에도 장의비, 사업주 손해배상 등 추가 보상을 받을 수 있습니다</strong></p>\n<ul>\n<li><strong>장의비</strong> — 평균임금의 120일분을 장례를 치른 유족에게 지급합니다. 유족급여와 별도로 지급되므로 가능한 한 함께 청구하세요</li>\n<li><strong>사업주 손해배상</strong> — 사업주의 안전조치 의무 위반이 사망 원인인 경우, 산재보험 급여와 별도로 사업주를 상대로 민사 손해배상을 청구할 수 있습니다. 위자료와 일실수입 중 산재보험으로 보전되지 않은 부분을 청구합니다</li>\n<li><strong>제3자 손해배상</strong> — 제3자의 행위로 사고가 발생한 경우 그 제3자에게도 손해배상을 청구할 수 있습니다. 산재보험 급여를 받더라도 부족분은 추가 청구가 가능합니다</li>\n<li><strong>특별유족급여</strong> — 진폐 등 직업성 질병으로 사망한 경우, 요건을 충족하면 특별유족급여를 추가로 받을 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">추가 보상: 장의비(120일분) + 사업주 손해배상 + 제3자 배상 가능</blockquote>',
      },
      {
        title: '불승인 시 불복 절차',
        content:
          '<p><strong style="color:#1e3a5f">근로복지공단이 업무상 재해를 불승인하면 심사청구와 재심사청구를 통해 불복할 수 있습니다</strong></p>\n<ul>\n<li><strong>심사청구</strong> — 처분이 있음을 안 날부터 90일 이내에 근로복지공단 심사위원회에 심사청구서를 제출합니다. 새로운 증거나 의학적 소견서를 추가하면 번복 가능성이 높아집니다</li>\n<li><strong>재심사청구</strong> — 심사청구가 기각되면 결정서를 받은 날부터 90일 이내에 산업재해보상보험 재심사위원회에 재심사를 청구합니다</li>\n<li><strong>행정소송</strong> — 재심사청구도 기각되면 결정서를 받은 날부터 90일 이내에 행정법원에 소송을 제기할 수 있습니다</li>\n<li><strong>업무상 재해 입증</strong> — 사망과 업무 사이의 인과관계를 입증하는 것이 핵심입니다. 작업 환경 보고서, 동료 증언, CCTV 영상, 부검 결과 등을 확보하세요</li>\n</ul>\n<p>산재 사망의 경우 <strong>업무와 사망 사이의 상당인과관계</strong>가 인정되면 충분하며, 그 인과관계가 의학적으로 명확히 밝혀지지 않아도 됩니다. 가능성이 있다는 정도의 증명이면 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">불복 절차: 심사청구(90일) → 재심사청구(90일) → 행정소송(90일)</blockquote>',
      },
    ],
    cases: [
      {
        title: '산재보험 급여를 받은 재해근로자의 손해배상 청구 — 대법원 판결',
        summary:
          '대법원 2023다297141 사건(대법원, 2024.08.22 선고)에서 법원은 산재보험 급여를 받았더라도 사업주의 안전배려의무 위반이 인정되면 유족이 산재보험으로 보전되지 않은 손해에 대해 별도로 사업주에게 손해배상을 청구할 수 있다고 판시했습니다.',
        takeaway:
          '산재보험 급여와 별도로 사업주 책임이 있다면 추가 손해배상이 가능합니다. 유족급여를 받은 뒤에도 사업주 과실이 있는지 가능한 한 확인하세요.',
      },
    ],
    faq: [
      {
        question: '사실혼 배우자도 유족급여를 받을 수 있나요?',
        answer:
          '<strong>사실혼 배우자도 유족급여 수급자격이 있습니다.</strong> 산업재해보상보험법은 배우자에 사실상 혼인관계에 있는 자를 포함합니다. 주민등록, 공동생활 증거 등으로 사실혼을 입증해야 합니다.',
      },
      {
        question: '유족급여 청구 기한이 있나요?',
        answer:
          '<strong>소멸시효는 5년입니다.</strong> 근로자가 사망한 날부터 5년 이내에 청구해야 합니다. 기한을 넘기면 청구권이 소멸하므로 가능한 한 빨리 신청하세요.',
      },
      {
        question: '연금을 받다가 재혼하면 수급권이 사라지나요?',
        answer:
          '<strong>배우자가 재혼하면 유족보상연금 수급권이 소멸합니다.</strong> 다만 소멸 시점까지의 연금은 정상 지급되며, 차순위 수급자격자에게 수급권이 이전됩니다.',
      },
      {
        question: '장의비는 누가 받나요?',
        answer:
          '장의비는 <strong>실제로 장례를 치른 유족</strong>에게 지급됩니다. 평균임금의 120일분이며, 유족급여와 별도로 청구해야 합니다. 장제비 영수증을 첨부하면 처리가 빠릅니다.',
      },
      {
        question: '과로사(과로에 의한 뇌심혈관 질환 사망)도 유족급여 대상인가요?',
        answer:
          '<strong>업무상 과로가 원인인 뇌심혈관 질환(뇌출혈, 심근경색 등) 사망도 업무상 재해로 인정되면 유족급여 대상입니다.</strong> 사망 전 업무시간, 업무강도, 스트레스 정도 등을 입증하는 것이 핵심입니다.',
      },
    ],
    cta: {
      text: '산재 유족급여 무료 상담받기',
      link: '/diagnosis/industrial-accident1',
    },
    internalLinks: [
      { label: '산재보상 가이드', href: '/guide/industrial-accident1' },
      { label: '산재보험 청구 절차 총정리', href: '/spoke/industrial-accident1/workers-comp-claim-process' },
      { label: '산재 장해등급 판정 절차', href: '/spoke/industrial-accident1/disability-benefit-grade-process' },
      { label: '산재 불승인 후 재신청 방법', href: '/spoke/industrial-accident1/reapply-after-rejection' },
      { label: '산재 사고 어디부터 시작해야 하나', href: '/spoke/industrial-accident1/injured-where-to-start' },
    ],
  },

  // ───────────────────────────────────────────
  // 3. industrial-accident1 / occupational-disease-recognition
  // ───────────────────────────────────────────
  {
    domain: 'industrial-accident1',
    slug: 'occupational-disease-recognition',
    keyword: '직업병 산재 인정 기준 절차',
    questionKeyword: '직업병도 산재로 인정받을 수 있나요?',
    ctaKeyword: '직업병 산재 인정',
    type: '체크리스트형',
    perspective: '피해자',
    meta: {
      title: '직업병 산재 인정 기준 5가지 체크리스트 | 로앤가이드',
      description:
        '오랜 근무로 몸이 망가졌는데 직업병으로 산재 인정받을 수 있을지 궁금하다면 인정 기준을 지금 확인하세요.',
    },
    intro:
      '<p>10년 넘게 공장에서 일하다 허리가 완전히 망가졌습니다. 병원에서는 디스크라고 하지만, 이게 일 때문인지 증명하기 어렵다고 합니다. 직업병으로 인정받으면 치료비와 보상을 받을 수 있다는데, 어떤 기준으로 판단하는지 알고 싶습니다.</p>',
    sections: [
      {
        title: '직업병 인정 5가지 핵심 기준',
        content:
          '<p><strong style="color:#1e3a5f">산업재해보상보험법 시행령 별표 3에 업무상 질병의 인정 기준이 구체적으로 열거되어 있습니다</strong></p>\n<p>직업병으로 산재 인정을 받으려면 아래 5가지를 종합적으로 판단합니다.</p>\n<ul>\n<li><strong>유해인자 노출</strong> — 업무 환경에서 화학물질, 분진, 소음, 진동, 반복 동작 등 질병을 유발할 수 있는 유해인자에 노출되었는지 확인합니다</li>\n<li><strong>노출 기간과 강도</strong> — 유해인자에 충분한 기간 동안 일정 수준 이상 노출되었는지가 중요합니다. 단기간 노출로도 발병할 수 있는 급성 중독과, 수년간 노출이 필요한 만성 질환을 구분합니다</li>\n<li><strong>의학적 인과관계</strong> — 해당 유해인자가 그 질병을 유발할 수 있다는 의학적 근거가 있어야 합니다. 다만 가능한 한 명확한 증명이 아니라 상당인과관계가 있으면 인정될 수 있습니다</li>\n<li><strong>발병 시점</strong> — 유해인자 노출 시작 후 의학적으로 타당한 시기에 발병했는지 확인합니다. 퇴직 후 발병한 경우에도 잠복기가 인정되면 산재로 인정될 수 있습니다</li>\n<li><strong>다른 원인 배제</strong> — 개인적 질환이나 업무 외 원인만으로 발병했다고 볼 수 없어야 합니다. 다만 업무상 원인이 다른 원인과 복합적으로 작용한 경우에도 인정될 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">5가지 기준: 유해인자 노출 + 노출 기간·강도 + 의학적 인과관계 + 발병 시점 + 다른 원인 배제</blockquote>',
      },
      {
        title: '주요 직업병 유형과 인정 사례',
        content:
          '<p><strong style="color:#1e3a5f">직업병은 화학적·물리적·생물학적·인체공학적 원인으로 크게 나눌 수 있습니다</strong></p>\n<ul>\n<li><strong>근골격계 질환</strong> — 반복 작업, 무리한 자세, 중량물 취급으로 인한 요통, 수근관증후군, 회전근개 손상 등. 제조업·물류업 종사자에게 가장 많이 발생합니다</li>\n<li><strong>호흡기 질환</strong> — 분진(진폐증), 석면(석면폐증, 악성중피종), 화학물질 흡입으로 인한 천식 등. 건설업·광업 종사자에게 흔합니다</li>\n<li><strong>뇌심혈관 질환</strong> — 장시간 근무, 교대근무, 업무 스트레스로 인한 뇌출혈, 심근경색 등. 과로사가 대표적입니다</li>\n<li><strong>정신 질환</strong> — 업무상 극심한 스트레스나 외상 사건으로 인한 우울증, 외상후스트레스장애(PTSD). 2019년부터 인정 범위가 확대되었습니다</li>\n<li><strong>암</strong> — 석면(폐암, 중피종), 벤젠(백혈병), 방사선(각종 암) 등 발암물질 노출에 의한 직업성 암. 잠복기가 수십 년일 수 있습니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">내 질병이 직업병으로 인정될 수 있는지 궁금하다면</strong><br/>\n<a href="/diagnosis/industrial-accident1" style="color:#1565c0;font-weight:600">직업병 산재 인정 무료 상담받기 &rarr;</a>\n</div>',
      },
      {
        title: '직업병 입증 자료 준비법',
        content:
          '<p><strong style="color:#1e3a5f">직업병 산재 신청에서 가장 중요한 것은 업무와 질병 사이의 인과관계를 뒷받침하는 자료를 충분히 준비하는 것입니다</strong></p>\n<ul>\n<li><strong>작업환경측정 결과</strong> — 사업장에서 실시한 작업환경측정 보고서를 확보하세요. 사업주가 제출을 거부하면 근로복지공단에 자료 요청을 할 수 있습니다</li>\n<li><strong>건강검진 기록</strong> — 특수건강검진, 배치 전 건강검진 결과를 모두 확보합니다. 입사 전과 후의 건강 상태 변화를 보여주는 중요한 증거입니다</li>\n<li><strong>근무 이력 자료</strong> — 근무 기간, 업무 내용, 작업 환경을 구체적으로 정리합니다. 근로계약서, 업무 기술서, 동료의 확인서가 도움됩니다</li>\n<li><strong>진료 기록</strong> — 발병 시점, 치료 경과, 주치의 소견서를 준비합니다. 주치의에게 업무 관련성에 대한 의학적 소견을 구체적으로 기재해달라고 요청하세요</li>\n<li><strong>유사 사례</strong> — 같은 사업장이나 같은 업종에서 동일한 질병이 발생한 사례가 있으면 함께 제출합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 자료: 작업환경측정 + 건강검진 기록 + 근무이력 + 진료기록 + 유사사례</blockquote>',
      },
      {
        title: '역학조사와 업무상질병판정위원회',
        content:
          '<p><strong style="color:#1e3a5f">근로복지공단이 직접 판단하기 어려운 직업병 사건은 역학조사와 업무상질병판정위원회 심의를 거칩니다</strong></p>\n<ul>\n<li><strong>역학조사</strong> — 산업안전보건연구원(OSHRI)에서 실시합니다. 사업장 방문 조사, 유해인자 측정, 동료 건강 조사 등을 포함하며, 보통 3~6개월이 소요됩니다</li>\n<li><strong>업무상질병판정위원회</strong> — 근로복지공단 소속 의학 전문가들로 구성됩니다. 역학조사 결과와 의학적 근거를 종합하여 업무상 질병 여부를 심의합니다</li>\n<li><strong>근로자 의견 진술</strong> — 판정위원회 심의 전에 근로자 본인이나 대리인이 의견을 진술할 수 있습니다. 작업 환경과 증상 발생 과정을 구체적으로 설명하세요</li>\n<li><strong>심의 결과 불복</strong> — 불승인 결정에 대해 90일 이내에 심사청구를 할 수 있습니다. 행정소송까지 가능하며, 법원은 의학적 판단을 존중하되 독자적으로 인과관계를 판단합니다</li>\n</ul>\n<p>직업병 심사에서 <strong>입증 책임은 근로자에게 있지만, 상당인과관계의 증명 정도는 의학적 확실성이 아니라 개연성이면 충분</strong>합니다. 대법원도 일관되게 이 기준을 적용하고 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 산재 신청 → 역학조사(3~6개월) → 판정위원회 심의 → 결정 통보</blockquote>',
      },
    ],
    cases: [
      {
        title: '진폐 근로자 재해위로금 관련 — 대법원 판결',
        summary:
          '대법원 2022두50694 사건(대법원, 2023.06.15 선고)에서 법원은 진폐증 근로자의 업무상 질병 인정에 있어 유해인자 노출과 질병 발생 사이의 상당인과관계는 의학적·자연과학적으로 명확히 증명되지 않더라도 제반 사정을 고려하여 경험칙상 인과관계가 추단되면 충분하다고 판시했습니다.',
        takeaway:
          '직업병 인과관계는 의학적으로 100% 증명할 필요가 없습니다. 근무 환경과 질병 발생 과정을 종합적으로 정리하여 개연성을 입증하세요.',
      },
    ],
    faq: [
      {
        question: '퇴직 후에 발병한 질병도 직업병으로 인정받을 수 있나요?',
        answer:
          '<strong>퇴직 후에 발병하더라도 잠복기가 인정되면 직업병으로 인정받을 수 있습니다.</strong> 석면 관련 질환은 잠복기가 10~40년으로 퇴직 수십 년 후에도 산재 신청이 가능합니다. 신청 시효는 질병이 확진된 날부터 기산됩니다.',
      },
      {
        question: '회사에서 작업환경측정 자료를 안 주면 어떻게 하나요?',
        answer:
          '<strong>근로복지공단에 자료 제출을 요청할 수 있습니다.</strong> 근로복지공단은 사업주에게 관련 자료를 제출하도록 요구할 권한이 있으며, 사업주가 제출을 거부하면 과태료가 부과됩니다.',
      },
      {
        question: '근골격계 질환(허리디스크)도 직업병으로 인정되나요?',
        answer:
          '<strong>반복적인 중량물 취급, 부적절한 작업 자세 등 업무상 원인이 인정되면 근골격계 질환도 직업병으로 인정될 수 있습니다.</strong> 단, 퇴행성 변화(노화)와의 구별이 쟁점이 되므로 업무 내용과 근무 기간을 구체적으로 입증해야 합니다.',
      },
      {
        question: '특수건강검진에서 이상이 발견되면 바로 산재 신청이 되나요?',
        answer:
          '특수건강검진에서 이상이 발견되면 <strong>사후관리(D2 판정) 또는 직업병 유소견(D1 판정)에 해당할 때</strong> 산재 신청을 할 수 있습니다. D1 판정은 직업병으로 진행할 가능성이 높으므로 즉시 전문 의료기관 진료를 받으세요.',
      },
      {
        question: '사업장이 폐업했어도 직업병 산재 신청이 가능한가요?',
        answer:
          '<strong>사업장 폐업과 관계없이 산재 신청은 가능합니다.</strong> 산재보험은 사업주가 아닌 근로복지공단에서 운영하므로, 사업장이 없어도 근무 사실과 유해인자 노출을 입증하면 급여를 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '직업병 산재 인정 무료 상담받기',
      link: '/diagnosis/industrial-accident1',
    },
    internalLinks: [
      { label: '산재보상 가이드', href: '/guide/industrial-accident1' },
      { label: '산재보험 청구 절차 총정리', href: '/spoke/industrial-accident1/workers-comp-claim-process' },
      { label: '산재 불승인 후 재신청 방법', href: '/spoke/industrial-accident1/reapply-after-rejection' },
      { label: '출퇴근 재해 인정 기준', href: '/spoke/industrial-accident1/commute-accident-recognition' },
      { label: '산재 사고 어디부터 시작해야 하나', href: '/spoke/industrial-accident1/injured-where-to-start' },
    ],
  },

  // ───────────────────────────────────────────
  // 4. industrial-accident1 / workers-comp-rehabilitation
  // ───────────────────────────────────────────
  {
    domain: 'industrial-accident1',
    slug: 'workers-comp-rehabilitation',
    keyword: '산재 직업재활 급여 종류 신청',
    questionKeyword: '산재 후 직업재활 급여는 어떤 것이 있나요?',
    ctaKeyword: '산재 직업재활 급여 신청',
    type: '어디부터형',
    perspective: '피해자',
    meta: {
      title: '산재 직업재활급여 4가지 종류와 신청법 | 로앤가이드',
      description:
        '산재 치료 후 직장 복귀가 어려운데 직업재활급여를 받을 수 있는지 궁금하다면 종류와 신청법을 지금 확인하세요.',
    },
    intro:
      '<p>산재로 6개월간 치료를 받았습니다. 이제 퇴원해야 하는데, 예전처럼 일하기 어려운 상태입니다. 다른 일을 배워야 하나 싶은데 훈련비를 내기도 부담됩니다. 산재보험에서 직업훈련비를 지원받을 수 있다는 이야기를 들었습니다.</p>',
    sections: [
      {
        title: '직업재활급여 4가지 종류 한눈에',
        content:
          '<p><strong style="color:#1e3a5f">산업재해보상보험법 제72조~제75조에 따라 산재 근로자의 직업 복귀를 돕기 위해 4가지 직업재활급여를 운영하고 있습니다</strong></p>\n<ul>\n<li><strong>직업훈련수당</strong> — 산재 근로자가 직업훈련을 받는 기간 동안 최저임금에 해당하는 금액을 매월 지급합니다. 훈련비도 전액 지원됩니다</li>\n<li><strong>직장복귀지원금</strong> — 산재 근로자를 원래 직장에 복귀시킨 사업주에게 월 60만 원씩 최대 12개월간 지급합니다. 장해등급 1~12급 판정을 받은 근로자가 대상입니다</li>\n<li><strong>직장적응훈련비</strong> — 산재 근로자를 복귀시켜 직장적응훈련을 실시하는 사업주에게 월 45만 원씩 최대 3개월간 지원합니다</li>\n<li><strong>재활운동비</strong> — 요양 종결 후에도 기능 회복을 위해 재활운동이 필요한 근로자에게 월 15만 원씩 최대 3개월간 지급합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">4가지: 직업훈련수당 + 직장복귀지원금 + 직장적응훈련비 + 재활운동비</blockquote>',
      },
      {
        title: '직업훈련수당 신청 조건과 금액',
        content:
          '<p><strong style="color:#1e3a5f">직업훈련수당은 산재 근로자가 새로운 직업 기술을 습득하는 데 필요한 비용과 생활비를 지원합니다</strong></p>\n<ul>\n<li><strong>신청 자격</strong> — 장해등급 1~12급 판정을 받은 산재 근로자로서, 직업훈련이 필요하다고 인정된 경우. 요양 중이거나 요양 종결 후 모두 신청 가능합니다</li>\n<li><strong>훈련 과정</strong> — 근로복지공단이 인정한 직업훈련기관의 과정을 이수해야 합니다. 한국폴리텍대학, 산재의료원 부설 직업훈련시설 등이 대표적입니다</li>\n<li><strong>지급 금액</strong> — 훈련기간 동안 매월 최저임금액에 해당하는 금액을 지급합니다. 2026년 기준 월 약 215만 원(최저임금 10,320원 &times; 209시간)입니다</li>\n<li><strong>훈련비 별도 지원</strong> — 수업료, 교재비, 실습비 등 훈련에 필요한 비용은 실비 기준으로 별도 지급됩니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">직업훈련수당 신청이 궁금하다면</strong><br/>\n<a href="/diagnosis/industrial-accident1" style="color:#1565c0;font-weight:600">산재 직업재활 무료 상담받기 &rarr;</a>\n</div>',
      },
      {
        title: '직장복귀지원금 대상과 절차',
        content:
          '<p><strong style="color:#1e3a5f">직장복귀지원금은 산재 근로자를 복귀시키는 사업주에게 지급되므로, 근로자는 사업주에게 제도를 안내하여 함께 신청할 수 있습니다</strong></p>\n<ul>\n<li><strong>대상 근로자</strong> — 장해등급 1~12급 판정을 받은 산재 근로자가 원래 직장 또는 다른 사업장에 복귀한 경우</li>\n<li><strong>지급 금액</strong> — 원래 사업장 복귀 시 월 60만 원씩 최대 12개월, 새 사업장 채용 시 월 60만 원씩 최대 12개월 지급합니다. 장해등급에 따라 지급 기간이 다를 수 있습니다</li>\n<li><strong>신청 절차</strong> — 사업주가 근로복지공단에 직장복귀지원금 신청서와 근로계약서, 임금 지급 증빙을 제출합니다. 근로자 동의서도 필요합니다</li>\n<li><strong>유의 사항</strong> — 복귀 후 1개월 이상 근무해야 첫 달 지원금을 청구할 수 있습니다. 중간에 퇴사하면 그 시점까지만 지급됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">사업주가 모르는 경우가 많습니다 — 근로자가 먼저 제도를 안내하면 복귀 가능성이 높아집니다</blockquote>',
      },
      {
        title: '신청 방법과 준비 서류',
        content:
          '<p><strong style="color:#1e3a5f">직업재활급여는 근로복지공단 지사에 방문하거나 온라인(고용·산재보험 토탈서비스)으로 신청할 수 있습니다</strong></p>\n<ul>\n<li><strong>공통 서류</strong> — 직업재활급여 신청서, 신분증 사본, 장해등급 결정 통지서 사본</li>\n<li><strong>직업훈련수당</strong> — 훈련기관 입학허가서 또는 수강신청 확인서, 훈련 계획서</li>\n<li><strong>직장복귀지원금</strong> — 근로계약서, 임금 지급 확인서, 출근 확인서(사업주가 제출)</li>\n<li><strong>재활운동비</strong> — 주치의 소견서(재활운동 필요성 기재), 재활운동 계획서</li>\n</ul>\n<p>신청 전에 근로복지공단 지사의 <strong>재활상담 전문가(직업재활상담원)와 면담</strong>을 받으면 본인에게 맞는 급여 종류와 훈련 과정을 안내받을 수 있습니다. 전화 상담은 근로복지공단 대표번호 1588-0075로 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">첫 단계: 근로복지공단 1588-0075에 전화하여 직업재활 상담 예약부터 하세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '산재 장해등급 판정 기준 — 대법원 판결',
        summary:
          '대법원 2024두50063 사건(대법원, 2025.02.13 선고)에서 법원은 산재 장해등급 판정 시 노동능력 상실률은 신체장해의 부위와 정도뿐만 아니라 근로자의 연령, 교육 정도, 종전 직업 등을 종합적으로 고려하여 판단해야 한다고 판시했습니다.',
        takeaway:
          '장해등급이 낮게 나왔다면 직업 특성과 노동능력 상실 정도를 근거로 이의를 제기할 수 있습니다. 직업재활급여 수급 자격에 직접 영향을 미치므로 등급 판정에 신중하게 대응하세요.',
      },
    ],
    faq: [
      {
        question: '장해등급 13~14급도 직업재활급여를 받을 수 있나요?',
        answer:
          '<strong>직업훈련수당과 직장복귀지원금은 1~12급까지만 대상입니다.</strong> 13~14급은 장해일시금만 지급되며 직업재활급여 대상에서 제외됩니다. 다만 고용노동부의 취업지원 프로그램은 별도로 이용할 수 있습니다.',
      },
      {
        question: '직업훈련 중에도 휴업급여를 받을 수 있나요?',
        answer:
          '<strong>요양 종결 후 직업훈련을 받는 경우에는 직업훈련수당이 휴업급여를 대체합니다.</strong> 요양 중에 직업훈련을 병행하는 경우에는 휴업급여와 훈련비를 함께 받을 수 있으나, 직업훈련수당은 중복 지급되지 않습니다.',
      },
      {
        question: '원래 직장에서 해고되었어도 직장복귀지원금을 받을 수 있나요?',
        answer:
          '<strong>다른 사업장에 취업하는 경우에도 직장복귀지원금 지급 대상이 됩니다.</strong> 새 사업장의 사업주가 신청하면 월 60만 원씩 최대 12개월간 지원받을 수 있습니다.',
      },
      {
        question: '직업훈련 과정은 어떤 것이 있나요?',
        answer:
          '한국폴리텍대학, 산재의료원 부설 직업훈련시설 등에서 <strong>IT, 기계, 전기전자, 서비스업 등 다양한 과정</strong>을 운영합니다. 근로복지공단 직업재활상담원과 면담하면 신체 상태에 맞는 과정을 추천받을 수 있습니다.',
      },
      {
        question: '직업재활급여 신청 기한이 있나요?',
        answer:
          '<strong>소멸시효는 3년입니다.</strong> 요양 종결일 또는 장해등급 결정일부터 3년 이내에 신청해야 합니다. 기한이 지나면 청구권이 소멸하므로 요양 종결 전부터 미리 상담을 받으세요.',
      },
    ],
    cta: {
      text: '산재 직업재활 무료 상담받기',
      link: '/diagnosis/industrial-accident1',
    },
    internalLinks: [
      { label: '산재보상 가이드', href: '/guide/industrial-accident1' },
      { label: '산재보험 청구 절차 총정리', href: '/spoke/industrial-accident1/workers-comp-claim-process' },
      { label: '산재 장해등급 판정 절차', href: '/spoke/industrial-accident1/disability-benefit-grade-process' },
      { label: '산재 휴업급여 신청 조건과 금액', href: '/spoke/industrial-accident1/workers-comp-leave-benefit' },
      { label: '산재 사고 어디부터 시작해야 하나', href: '/spoke/industrial-accident1/injured-where-to-start' },
    ],
  },

  // ───────────────────────────────────────────
  // 5. industrial-accident1 / workers-comp-temporary-disability
  // ───────────────────────────────────────────
  {
    domain: 'industrial-accident1',
    slug: 'workers-comp-temporary-disability',
    keyword: '산재 상병보상연금 전환 기준 금액',
    questionKeyword: '산재 휴업급여 2년 넘으면 상병보상연금으로 바뀌나요?',
    ctaKeyword: '산재 상병보상연금 전환',
    type: '수치기한형',
    perspective: '피해자',
    meta: {
      title: '산재 상병보상연금 전환 기준 3가지와 금액 | 로앤가이드',
      description:
        '산재 치료가 2년 넘게 이어지는데 상병보상연금으로 전환되는 기준이 궁금하다면 조건과 금액을 지금 확인하세요.',
    },
    intro:
      '<p>산재 사고 후 2년째 치료를 받고 있습니다. 휴업급여가 나오고 있지만 앞으로 어떻게 되는지 불안합니다. 2년이 지나면 상병보상연금이라는 것으로 바뀐다는 얘기를 들었는데, 조건과 금액이 어떻게 달라지는지 알고 싶습니다.</p>',
    sections: [
      {
        title: '상병보상연금 전환 3가지 조건',
        content:
          '<p><strong style="color:#1e3a5f">산업재해보상보험법 제66조에 따르면 아래 3가지 조건을 모두 충족하면 휴업급여 대신 상병보상연금이 지급됩니다</strong></p>\n<ul>\n<li><strong>요양 기간 2년 이상</strong> — 요양 개시일부터 2년이 경과해야 합니다. 2년이 되기 전에는 전환 대상이 아닙니다</li>\n<li><strong>부상·질병 미치유</strong> — 2년이 지나도 부상이나 질병이 치유되지 않은 상태, 즉 요양이 계속 필요한 상태여야 합니다</li>\n<li><strong>폐질등급 1~3급</strong> — 부상·질병의 정도가 폐질등급(중증요양상태등급) 제1급부터 제3급까지에 해당해야 합니다. 등급은 근로복지공단의 자문의사 진단으로 결정됩니다</li>\n</ul>\n<p><strong>중요:</strong> 상병보상연금으로 전환되면 휴업급여는 중단됩니다. 두 급여를 동시에 받을 수는 없습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">전환 조건: 요양 2년 이상 + 미치유 + 폐질등급 1~3급 → 3가지 모두 충족 시 전환</blockquote>',
      },
      {
        title: '등급별 연금 금액 기준',
        content:
          '<p><strong style="color:#1e3a5f">상병보상연금은 폐질등급에 따라 금액이 달라지며, 휴업급여(70%)보다 높은 비율로 지급됩니다</strong></p>\n<ul>\n<li><strong>제1급</strong> — 평균임금의 329일분(연액). 월 기준으로 환산하면 평균임금의 약 90%에 해당할 소지가 있습니다</li>\n<li><strong>제2급</strong> — 평균임금의 291일분(연액). 월 기준으로 환산하면 평균임금의 약 80%에 해당할 소지가 있습니다</li>\n<li><strong>제3급</strong> — 평균임금의 257일분(연액). 월 기준으로 환산하면 평균임금의 약 70%에 해당할 소지가 있습니다</li>\n</ul>\n<p><strong>계산 예시:</strong> 평균임금이 1일 10만 원인 근로자가 제1급 판정을 받으면, 연간 3,290만 원(10만 원 &times; 329일), 월 약 274만 원을 수령합니다.</p>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">내 상병보상연금 금액이 궁금하다면</strong><br/>\n<a href="/diagnosis/industrial-accident1" style="color:#1565c0;font-weight:600">산재 상병보상연금 무료 상담받기 &rarr;</a>\n</div>',
      },
      {
        title: '전환 절차와 시점',
        content:
          '<p><strong style="color:#1e3a5f">상병보상연금 전환은 근로복지공단이 직권으로 결정하거나 근로자가 신청할 수 있습니다</strong></p>\n<ul>\n<li><strong>직권 전환</strong> — 요양 2년이 경과하면 근로복지공단이 자문의사 진단을 거쳐 폐질등급 해당 여부를 판단합니다. 해당하면 휴업급여에서 상병보상연금으로 자동 전환됩니다</li>\n<li><strong>근로자 신청</strong> — 근로자가 먼저 상병보상연금 지급 신청서를 제출할 수도 있습니다. 폐질등급 해당 여부를 근로복지공단이 심사합니다</li>\n<li><strong>전환 시점</strong> — 폐질등급 판정이 확정된 달의 다음 달부터 상병보상연금이 지급됩니다. 전환 전 마지막 휴업급여와 중복되지 않도록 정산됩니다</li>\n<li><strong>재판정</strong> — 상병보상연금 수급 중에도 정기적으로 재판정을 받습니다. 상태가 호전되어 폐질등급에 해당하지 않게 되면 다시 휴업급여로 전환됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 요양 2년 경과 → 폐질등급 판정 → 상병보상연금 지급 개시(다음 달부터)</blockquote>',
      },
      {
        title: '상병보상연금과 장해급여 관계',
        content:
          '<p><strong style="color:#1e3a5f">상병보상연금을 받는 중에 요양이 종결되면 장해등급 판정을 받아 장해급여를 별도로 청구할 수 있습니다</strong></p>\n<ul>\n<li><strong>순서</strong> — 요양 중에는 상병보상연금, 요양 종결 후 장해가 남으면 장해급여로 전환됩니다. 두 급여를 동시에 받는 것은 아닙니다</li>\n<li><strong>장해급여 유형</strong> — 장해등급 1~7급은 연금 또는 일시금 중 선택, 8~14급은 일시금으로 지급됩니다</li>\n<li><strong>기지급 공제</strong> — 상병보상연금을 수령한 기간에 대해서는 장해보상일시금에서 일정 금액이 공제될 수 있습니다</li>\n<li><strong>간병급여</strong> — 상병보상연금 수급 중 상시 또는 수시 간병이 필요한 경우 간병급여도 별도로 신청할 수 있습니다. 상시 간병은 1일 약 4만 원, 수시 간병은 1일 약 2만 6천 원 수준입니다</li>\n</ul>\n<p>상병보상연금 수급 기간이 길어질수록 요양비와 연금의 합산 보상액이 커지므로, <strong>치료가 필요한 상태에서 억지로 요양을 종결하지 마세요.</strong> 주치의와 상의하여 적절한 시기에 종결 판정을 받는 것이 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기억하세요: 상병보상연금 종료 후 → 장해등급 판정 → 장해급여 별도 청구</blockquote>',
      },
    ],
    cases: [
      {
        title: '장해등급 판정 세부기준 — 대법원 판결',
        summary:
          '대법원 2024두50063 사건(대법원, 2025.02.13 선고)에서 법원은 산재 장해등급 및 폐질등급 판정 시 신체 장해의 객관적 정도뿐만 아니라 해당 근로자의 종전 직업, 나이, 경력 등 개별 사정을 종합적으로 고려해야 한다고 판시했습니다.',
        takeaway:
          '폐질등급이나 장해등급이 예상보다 낮게 판정되었다면 개별 사정을 근거로 이의를 제기할 수 있습니다. 종전 직업 특성과 노동능력 상실 정도를 구체적으로 주장하세요.',
      },
    ],
    faq: [
      {
        question: '폐질등급 4급 이하이면 상병보상연금을 받을 수 없나요?',
        answer:
          '<strong>상병보상연금은 폐질등급 1~3급만 대상입니다.</strong> 4급 이하는 요양이 계속되더라도 기존 휴업급여(평균임금의 70%)가 그대로 지급됩니다. 2년이 지나도 휴업급여가 중단되는 것은 아닙니다.',
      },
      {
        question: '상병보상연금이 휴업급여보다 적을 수도 있나요?',
        answer:
          '<strong>제3급의 경우 평균임금의 257일분(연액)으로, 휴업급여 1년분(365일 &times; 70% = 255.5일분)과 거의 비슷합니다.</strong> 제1급·2급은 휴업급여보다 높지만, 제3급은 큰 차이가 없습니다.',
      },
      {
        question: '전환을 거부할 수 있나요?',
        answer:
          '<strong>근로복지공단의 직권 전환 결정에 대해 이의를 제기할 수 있습니다.</strong> 폐질등급 판정에 동의하지 않으면 90일 이내에 심사청구를 할 수 있습니다. 전환 자체를 거부하는 것은 아니라 등급 판정에 대한 이의입니다.',
      },
      {
        question: '상병보상연금 받는 중에 일부 취업이 가능하면 어떻게 되나요?',
        answer:
          '상병보상연금은 <strong>요양 중 취업하지 못하는 상태를 전제</strong>로 합니다. 일부 취업이 가능해지면 부분 휴업급여로 전환될 수 있으며, 폐질등급 재판정 대상이 될 수 있습니다.',
      },
      {
        question: '요양비(치료비)는 상병보상연금과 별도로 나오나요?',
        answer:
          '<strong>요양급여(치료비)와 상병보상연금은 별개입니다.</strong> 상병보상연금은 소득 보전 목적이고, 요양급여는 치료비 지급 목적이므로 요양이 계속되는 동안 두 급여를 함께 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '산재 상병보상연금 무료 상담받기',
      link: '/diagnosis/industrial-accident1',
    },
    internalLinks: [
      { label: '산재보상 가이드', href: '/guide/industrial-accident1' },
      { label: '산재 휴업급여 신청 조건과 금액', href: '/spoke/industrial-accident1/workers-comp-leave-benefit' },
      { label: '산재 장해등급 판정 절차', href: '/spoke/industrial-accident1/disability-benefit-grade-process' },
      { label: '산재보험 청구 절차 총정리', href: '/spoke/industrial-accident1/workers-comp-claim-process' },
      { label: '산재 불승인 후 재신청 방법', href: '/spoke/industrial-accident1/reapply-after-rejection' },
    ],
  },

  // ───────────────────────────────────────────
  // 6. industrial-accident2 / workplace-safety-violation-penalty
  // ───────────────────────────────────────────
  {
    domain: 'industrial-accident2',
    slug: 'workplace-safety-violation-penalty',
    keyword: '사업장 안전보건 위반 과태료 벌금',
    questionKeyword: '안전보건 의무를 위반하면 과태료가 얼마인가요?',
    ctaKeyword: '안전보건 위반 과태료',
    type: '수치기한형',
    perspective: '가해자',
    meta: {
      title: '사업장 안전보건 위반 과태료·벌금 기준 7가지 | 로앤가이드',
      description:
        '산업안전보건법 위반으로 과태료·벌금을 부과받을 수 있는지 걱정된다면 기준과 금액을 지금 확인하세요.',
    },
    intro:
      '<p>근로감독관이 사업장에 나왔습니다. 안전 서류가 미비하다는 지적을 받았고, 과태료 통보가 올 수 있다고 합니다. 어떤 위반사항에 얼마의 과태료가 부과되는지, 벌금과는 어떻게 다른지 파악해야 대응할 수 있습니다.</p>',
    sections: [
      {
        title: '과태료 vs 벌금 — 행정 vs 형사 제재 구분',
        content:
          '<p><strong style="color:#1e3a5f">과태료는 행정 제재이고 벌금은 형사 처벌입니다. 혐의를 받고 있다면 어떤 제재에 해당하는지부터 구분해야 합니다</strong></p>\n<ul>\n<li><strong>과태료</strong> — 행정법상 의무 위반에 대한 금전적 제재입니다. 전과 기록이 남지 않습니다. 산업안전보건법상 서류 미비, 교육 미실시, 신고 의무 위반 등이 과태료 대상입니다</li>\n<li><strong>벌금</strong> — 형사 처벌로, 유죄 판결 시 전과 기록이 남습니다. 안전조치 의무 위반으로 근로자가 다치거나 사망한 경우 벌금 또는 징역형이 부과됩니다</li>\n<li><strong>중복 부과</strong> — 같은 위반행위에 대해 과태료와 벌금이 동시에 부과되지는 않습니다. 형사 처벌이 진행되면 과태료 부과가 면제될 수 있습니다</li>\n<li><strong>양벌규정</strong> — 위반행위를 한 사람(안전관리자, 현장소장 등)뿐 아니라 사업주(법인)도 함께 처벌 대상으로 검토될 수 있습니다. 법인에게는 벌금형이, 행위자에게는 징역형 또는 벌금형이 부과됩니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 구분: 과태료 = 행정 제재(전과 없음) / 벌금 = 형사 처벌(전과 기록)</blockquote>',
      },
      {
        title: '주요 위반유형별 과태료 금액',
        content:
          '<p><strong style="color:#1e3a5f">산업안전보건법 시행령 별표 35에 위반유형별 과태료 금액이 상세히 규정되어 있습니다</strong></p>\n<ul>\n<li><strong>안전보건교육 미실시</strong> — 1회 위반 시 과태료 50만 원, 2회 100만 원, 3회 이상 150만 원. 채용 시 교육, 작업내용 변경 시 교육, 특별교육 등 종류별로 각각 부과됩니다</li>\n<li><strong>작업환경측정 미실시</strong> — 1회 위반 시 과태료 300만 원, 2회 600만 원, 3회 이상 1,000만 원</li>\n<li><strong>건강검진(특수건강검진) 미실시</strong> — 1회 위반 시 과태료 300만 원, 2회 600만 원, 3회 이상 1,000만 원</li>\n<li><strong>위험성평가 미실시</strong> — 1회 위반 시 과태료 300만 원, 2회 600만 원, 3회 이상 1,000만 원</li>\n<li><strong>산업재해 발생 미보고·허위 보고</strong> — 1회 위반 시 과태료 1,500만 원. 사망사고 미보고는 형사 처벌 대상이 될 수 있습니다</li>\n<li><strong>안전보건관리체계 미구축</strong> — 안전보건관리책임자, 관리감독자, 안전관리자 미선임 시 과태료 500만 원</li>\n<li><strong>물질안전보건자료(MSDS) 미비치</strong> — 1회 위반 시 과태료 300만 원</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">혐의를 받고 있다면 즉시 확인하세요</strong><br/>\n<a href="/diagnosis/industrial-accident2" style="color:#1565c0;font-weight:600">안전보건 위반 과태료 무료 상담받기 &rarr;</a>\n</div>',
      },
      {
        title: '중대재해처벌법상 가중 처벌 기준',
        content:
          '<p><strong style="color:#1e3a5f">중대재해처벌법은 사망사고 등 중대산업재해가 발생한 경우 경영책임자에게 직접 형사 책임을 묻습니다</strong></p>\n<ul>\n<li><strong>사망 1명 이상</strong> — 경영책임자에게 1년 이상의 징역 또는 10억 원 이하의 벌금. 법인에게는 50억 원 이하의 벌금이 부과됩니다</li>\n<li><strong>동일한 유해·위험요인으로 6개월 내 2명 이상 부상</strong> — 경영책임자에게 7년 이하의 징역 또는 1억 원 이하의 벌금</li>\n<li><strong>동일한 유해·위험요인으로 1년 내 3명 이상 직업성 질병</strong> — 동일한 처벌 기준이 적용됩니다</li>\n<li><strong>적용 대상</strong> — 상시 근로자 5인 이상 사업장(2024년 1월부터 50인 미만 사업장도 적용). 원청의 경우 하청 근로자의 재해에 대해서도 책임을 질 수 있습니다</li>\n</ul>\n<p><strong>핵심 의무:</strong> 중대재해처벌법은 안전보건관리체계 구축, 안전보건 예산 편성, 안전보건 전문인력 배치, 유해·위험요인 확인·개선 등을 경영책임자의 의무로 규정합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">중대재해 시: 경영책임자 1년 이상 징역 또는 10억 원 이하 벌금 / 법인 50억 원 이하 벌금</blockquote>',
      },
      {
        title: '과태료 감경·이의신청 방법',
        content:
          '<p><strong style="color:#1e3a5f">과태료가 부과되더라도 감경 사유가 있으면 금액을 줄일 수 있고, 이의가 있으면 법원에 재판을 청구할 수 있습니다</strong></p>\n<ul>\n<li><strong>자진신고 감경</strong> — 위반사실을 자진 신고하면 과태료의 50%까지 감경받을 수 있습니다. 근로감독 전에 먼저 신고하는 것이 유리합니다</li>\n<li><strong>경감 사유</strong> — 영세 사업장(매출액 기준), 위반 즉시 시정한 경우, 자연재해 등 불가항력적 사유가 있는 경우 감경이 적용될 수 있습니다</li>\n<li><strong>이의신청</strong> — 과태료 부과 통보를 받은 날부터 60일 이내에 이의신청서를 제출하면 과태료 부과가 일시 중지되고, 관할 법원에서 재판이 진행됩니다</li>\n<li><strong>시정 명령 이행</strong> — 과태료와 함께 시정 명령이 내려진 경우 기한 내에 이행해야 합니다. 미이행 시 가중 과태료가 부과되거나 영업정지 등 추가 행정처분이 따를 수 있습니다</li>\n</ul>\n<p>과태료 부과 전에 <strong>의견 제출 기회</strong>가 주어집니다. 사전 통지를 받으면 10일 이내에 의견서를 제출하여 감경 사유를 적극적으로 소명하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">대응 순서: 사전 통지 → 의견 제출(10일) → 부과 통보 → 이의신청(60일 이내) → 법원 재판</blockquote>',
      },
    ],
    cases: [
      {
        title: '중대재해처벌법 사업장 범위 관련 — 대법원 판결',
        summary:
          '대법원 2025도15060 사건(대법원, 2025.10.23 선고)에서 법원은 중대재해처벌법상 경영책임자의 안전보건 확보 의무는 사업장 단위가 아니라 사업 또는 사업장 전체를 기준으로 판단해야 하며, 하나의 장소에서 이루어지는 사업이 아니더라도 실질적으로 지배·운영·관리하는 사업 전체에 의무가 미친다고 판시했습니다.',
        takeaway:
          '경영책임자는 직접 관리하는 사업장뿐만 아니라 실질적으로 지배하는 전체 사업에 대해 안전보건 의무를 부담합니다. 본사와 현장이 분리되어 있어도 경영책임자의 책임은 면제되지 않습니다.',
      },
    ],
    faq: [
      {
        question: '과태료를 안 내면 어떻게 되나요?',
        answer:
          '<strong>납부 기한 내에 과태료를 납부하지 않으면 가산금(3%)이 부과되고, 계속 미납 시 국세 체납 처분(재산 압류)이 진행됩니다.</strong> 분할 납부를 신청할 수도 있으니 납부가 어려우면 먼저 분납을 요청하세요.',
      },
      {
        question: '소규모 사업장도 중대재해처벌법 적용을 받나요?',
        answer:
          '<strong>2024년 1월 27일부터 상시 근로자 5인 이상 사업장에 중대재해처벌법이 적용됩니다.</strong> 다만 5인 미만 사업장은 적용 대상에서 제외됩니다. 건설업의 경우 공사금액 50억 원 미만은 적용이 유예될 수 있습니다.',
      },
      {
        question: '안전관리자를 선임하지 않으면 과태료가 얼마인가요?',
        answer:
          '안전관리자 미선임 시 <strong>과태료 500만 원</strong>이 부과됩니다. 보건관리자, 안전보건관리책임자도 각각 미선임 시 동일한 과태료가 부과되므로, 법정 선임 의무를 가능한 한 확인하세요.',
      },
      {
        question: '근로감독 전에 서류를 보완하면 과태료를 피할 수 있나요?',
        answer:
          '<strong>근로감독 전에 자진 시정하면 과태료 부과를 피하거나 감경받을 수 있습니다.</strong> 다만 이미 사고가 발생한 후라면 사후 서류 보완만으로는 면책되기 어렵습니다. 사고 발생 전에 사전 예방 조치를 완료하는 것이 핵심입니다.',
      },
      {
        question: '원청이 하청 근로자 재해에 대해서도 과태료를 받나요?',
        answer:
          '<strong>산업안전보건법 제63조에 따라 도급인(원청)은 관계수급인(하청) 근로자의 산업재해 예방을 위한 안전보건조치 의무가 있습니다.</strong> 이를 위반하면 원청에게도 과태료 또는 벌금이 부과됩니다.',
      },
    ],
    cta: {
      text: '안전보건 위반 과태료 무료 상담받기',
      link: '/diagnosis/industrial-accident2',
    },
    internalLinks: [
      { label: '산업안전(사업주) 가이드', href: '/guide/industrial-accident2' },
      { label: '사업주 산재 신고 의무와 절차', href: '/spoke/industrial-accident2/employer-report-obligation-process' },
      { label: '중대재해 발생 시 사업주 대응법', href: '/spoke/industrial-accident2/serious-accident-employer-response' },
      { label: '하도급 산재 원청 책임 범위', href: '/spoke/industrial-accident2/subcontractor-accident-main-employer-duty' },
      { label: '사업주가 놓치기 쉬운 안전의무', href: '/spoke/industrial-accident2/commonly-missed-safety-obligations' },
    ],
  },

  // ───────────────────────────────────────────
  // 7. industrial-accident2 / risk-assessment-employer-obligation
  // ───────────────────────────────────────────
  {
    domain: 'industrial-accident2',
    slug: 'risk-assessment-employer-obligation',
    keyword: '위험성평가 사업주 의무 미이행 제재',
    questionKeyword: '위험성평가를 안 하면 어떤 처벌을 받나요?',
    ctaKeyword: '위험성평가 의무',
    type: '체크리스트형',
    perspective: '가해자',
    meta: {
      title: '위험성평가 사업주 의무 5가지와 미이행 제재 | 로앤가이드',
      description:
        '사업장 위험성평가를 아직 실시하지 않았는데 혐의를 받고 있다면 의무사항과 제재 기준을 지금 확인하세요.',
    },
    intro:
      '<p>사업장에서 사고가 발생했습니다. 수사기관에서 위험성평가를 했느냐고 묻습니다. 서류를 찾아보니 몇 년 전 것만 있고 최근 것은 없습니다. 위험성평가를 하지 않으면 어떤 처벌을 받는지, 지금이라도 할 수 있는지 확인해야 합니다.</p>',
    sections: [
      {
        title: '위험성평가 사업주 의무 5가지 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">산업안전보건법 제36조에 따라 사업주는 유해·위험요인을 찾아내어 위험성을 결정하고 필요한 조치를 해야 합니다</strong></p>\n<p>혐의를 받고 있다면 아래 5가지를 이행했는지 즉시 점검하세요.</p>\n<ul>\n<li><strong>최초 위험성평가 실시</strong> — 사업 개시 시 또는 새로운 유해·위험요인이 발생한 때 최초 위험성평가를 실시해야 합니다. 사업장 전체의 유해·위험요인을 빠짐없이 파악하는 것이 핵심입니다</li>\n<li><strong>정기 위험성평가</strong> — 최초 평가 이후 매년 1회 이상 정기적으로 재실시해야 합니다. 전년도 평가 결과를 검토하고 변경 사항을 반영합니다</li>\n<li><strong>수시 위험성평가</strong> — 산업재해 발생, 설비 변경, 새로운 유해물질 도입 시 즉시 수시 평가를 실시해야 합니다</li>\n<li><strong>근로자 참여</strong> — 위험성평가 시 해당 작업에 종사하는 근로자를 가능한 한 참여시켜야 합니다. 근로자 의견 청취 기록이 없으면 적법한 평가로 인정되지 않을 수 있습니다</li>\n<li><strong>기록 보존</strong> — 위험성평가 결과와 조치 내용을 문서로 기록하고 3년간 보존해야 합니다. 전자문서도 인정될 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">5가지 체크: 최초 평가 + 정기 평가(매년) + 수시 평가 + 근로자 참여 + 기록 보존(3년)</blockquote>',
      },
      {
        title: '미이행 시 제재와 벌금',
        content:
          '<p><strong style="color:#1e3a5f">위험성평가를 실시하지 않으면 과태료가 부과되고, 사고 발생 시 형사 처벌이 크게 가중됩니다</strong></p>\n<ul>\n<li><strong>과태료</strong> — 위험성평가 미실시 시 1차 300만 원, 2차 600만 원, 3차 1,000만 원의 과태료가 부과됩니다</li>\n<li><strong>안전조치 의무 위반</strong> — 위험성평가 미실시 자체가 산업안전보건법 제38조(안전조치) 및 제39조(보건조치) 위반의 근거가 됩니다. 위반 시 5년 이하의 징역 또는 5천만 원 이하의 벌금입니다</li>\n<li><strong>사고 발생 시 가중</strong> — 위험성평가를 하지 않은 상태에서 산업재해가 발생하면, 사업주가 안전의무를 다하지 않았다는 강력한 증거가 됩니다. 형사 처벌 양형에서 불리하게 작용합니다</li>\n<li><strong>중대재해처벌법 적용</strong> — 위험성평가 미이행은 안전보건관리체계 미구축의 핵심 증거입니다. 사망사고 발생 시 경영책임자에게 1년 이상 징역 또는 10억 원 이하 벌금이 부과될 수 있습니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">혐의를 받고 있다면 즉시 확인하세요</strong><br/>\n<a href="/diagnosis/industrial-accident2" style="color:#1565c0;font-weight:600">위험성평가 의무 무료 상담받기 &rarr;</a>\n</div>',
      },
      {
        title: '올바른 위험성평가 실시 방법',
        content:
          '<p><strong style="color:#1e3a5f">위험성평가는 고용노동부 고시(위험성평가에 관한 지침)에 따라 체계적으로 실시해야 합니다</strong></p>\n<ul>\n<li><strong>사전 준비</strong> — 작업 공정별 유해·위험요인 목록을 작성합니다. 과거 산업재해 기록, 작업환경측정 결과, 물질안전보건자료(MSDS) 등을 참고합니다</li>\n<li><strong>유해·위험요인 파악</strong> — 각 작업 공정에서 근로자가 노출될 수 있는 모든 유해·위험요인을 도출합니다. 기계적 위험, 화학적 위험, 인체공학적 위험, 전기적 위험 등을 구분합니다</li>\n<li><strong>위험성 추정·결정</strong> — 각 유해·위험요인의 가능성(빈도)과 중대성(심각도)을 조합하여 위험성을 추정하고, 허용 가능한 수준인지 결정합니다</li>\n<li><strong>감소 대책 수립·실행</strong> — 허용 불가능한 위험에 대해 제거 → 대체 → 공학적 대책 → 관리적 대책 → 개인보호구 순서로 감소 대책을 수립합니다</li>\n<li><strong>기록·공유</strong> — 평가 결과와 감소 대책을 기록하고, 해당 작업 근로자에게 알려야 합니다. 게시판 부착, 교육 실시 등의 방법을 사용합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 사전 준비 → 위험요인 파악 → 위험성 추정·결정 → 대책 수립 → 기록·공유</blockquote>',
      },
      {
        title: '사고 발생 후 소급 위험성평가의 한계',
        content:
          '<p><strong style="color:#1e3a5f">사고가 이미 발생한 후에 뒤늦게 위험성평가를 실시하더라도 이전 기간의 의무 위반 책임은 면제되지 않습니다</strong></p>\n<ul>\n<li><strong>소급 인정 불가</strong> — 사고 발생 후 작성한 위험성평가 서류는 사고 발생 시점의 안전관리 이행 증거가 되지 않습니다. 수사기관과 법원은 사고 이전의 기록만 유효한 증거로 인정합니다</li>\n<li><strong>사후 문서 조작 위험</strong> — 사고 후 작성일자를 소급하여 문서를 만드는 행위는 증거 위조에 해당하며, 추가 형사 처벌의 대상이 됩니다. 절대 하지 마세요</li>\n<li><strong>사후 조치의 의미</strong> — 사고 후 위험성평가를 새로 실시하는 것은 재발 방지 의지를 보여주는 양형 참작 사유가 될 수 있습니다. 하지만 의무 위반 자체를 면책하지는 않습니다</li>\n<li><strong>향후 대비</strong> — 이번 사고에 대한 수시 위험성평가를 즉시 실시하고, 전체 공정에 대한 재평가를 병행하세요. 향후 동일한 위반으로 가중 처벌되는 것을 방지할 수 있습니다</li>\n</ul>\n<p><strong>핵심 대응 전략:</strong> 과거 위험성평가를 조작하려 하지 말고, 사고 이후의 개선 의지와 재발 방지 노력을 적극적으로 소명하는 것이 양형에 유리합니다. 피해 근로자와의 합의도 양형에 크게 영향을 미칩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기억하세요: 사후 소급 서류는 증거 위조 — 사후 개선 노력과 합의가 올바른 대응입니다</blockquote>',
      },
    ],
    cases: [
      {
        title: '중대재해처벌법 안전보건관리체계 구축 의무 — 대법원 판결',
        summary:
          '대법원 2025도15060 사건(대법원, 2025.10.23 선고)에서 법원은 중대재해처벌법상 안전보건관리체계 구축 의무에는 위험성평가 실시가 핵심 요소로 포함되며, 경영책임자가 위험성평가 체계를 마련하지 않은 것은 법 제4조의 안전보건 확보 의무를 이행하지 않은 것에 해당한다고 판시했습니다.',
        takeaway:
          '위험성평가는 중대재해처벌법 이행의 핵심 증거입니다. 형식적 서류가 아니라 실질적으로 위험요인을 파악하고 대책을 수립한 기록이 있어야 안전보건관리체계를 구축한 것으로 인정될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '소규모 사업장(5인 미만)도 위험성평가를 해야 하나요?',
        answer:
          '<strong>산업안전보건법상 위험성평가 의무는 모든 사업장에 적용됩니다.</strong> 다만 5인 미만 사업장은 중대재해처벌법 적용 대상은 아닙니다. 하지만 산업안전보건법상 과태료(300만 원~)는 사업장 규모와 관계없이 부과됩니다.',
      },
      {
        question: '위험성평가를 외부 업체에 맡겨도 되나요?',
        answer:
          '<strong>외부 전문기관에 위탁할 수 있지만, 최종 책임은 사업주에게 있습니다.</strong> 외부 업체가 실시하더라도 근로자 참여와 사업주 확인은 필수입니다. 형식적 외주만으로는 의무 이행으로 인정되지 않을 수 있습니다.',
      },
      {
        question: '위험성평가 기록을 얼마나 보관해야 하나요?',
        answer:
          '<strong>3년간 보존해야 합니다.</strong> 위험성평가 결과, 참여 근로자 서명, 개선 조치 내용, 교육 실시 기록 등을 함께 보관하세요. 전자문서로 보관해도 유효합니다.',
      },
      {
        question: '위험성평가 미실시로 과태료를 받았는데 즉시 실시하면 감경되나요?',
        answer:
          '과태료 부과 후 즉시 시정하면 <strong>향후 재적발 시 가중 과태료를 피할 수 있습니다.</strong> 이미 부과된 과태료 자체가 감경되지는 않지만, 이의신청 시 즉시 시정한 사실을 소명하면 감경 사유로 고려될 수 있습니다.',
      },
      {
        question: '건설 현장도 위험성평가를 해야 하나요?',
        answer:
          '<strong>건설 현장은 공종 변경이 잦아 수시 위험성평가가 특히 중요합니다.</strong> 공사 착공 전 최초 평가, 공종 변경 시 수시 평가를 실시해야 합니다. 건설업은 사고 빈도가 높아 위험성평가 미이행 시 더 엄격하게 처벌 대상으로 검토될 수 있습니다.',
      },
    ],
    cta: {
      text: '위험성평가 의무 무료 상담받기',
      link: '/diagnosis/industrial-accident2',
    },
    internalLinks: [
      { label: '산업안전(사업주) 가이드', href: '/guide/industrial-accident2' },
      { label: '사업주 산재 신고 의무와 절차', href: '/spoke/industrial-accident2/employer-report-obligation-process' },
      { label: '중대재해 발생 시 사업주 대응법', href: '/spoke/industrial-accident2/serious-accident-employer-response' },
      { label: '안전보건 위반 과태료·벌금 기준', href: '/spoke/industrial-accident2/workplace-safety-violation-penalty' },
      { label: '사업주가 놓치기 쉬운 안전의무', href: '/spoke/industrial-accident2/commonly-missed-safety-obligations' },
    ],
  },
];
