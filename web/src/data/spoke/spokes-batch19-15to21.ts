import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 15. 이 페이지는 [산재 불승인 통지를 받은 근로자]의 [재심사 청구를 준비해야 하는 상황]에서 [재심사 청구서 작성과 추가 증거 확보 방법 파악]을 돕는 페이지다.
// 16. 이 페이지는 [산재 발생 사업장의 사업주]의 [근로감독관 신고 의무를 이행해야 하는 상황]에서 [신고 절차와 기한, 미신고 시 불이익 파악]을 돕는 페이지다.
// 17. 이 페이지는 [중대재해가 발생한 사업장의 경영책임자]의 [사고 직후 긴급 대응이 필요한 상황]에서 [법적 의무 이행 순서와 형사리스크 최소화 방법 파악]을 돕는 페이지다.
// 18. 이 페이지는 [산재 사고로 수사를 받게 된 사업주]의 [적용 법률과 형사책임 범위가 궁금한 상황]에서 [산안법·중대재해법·형법별 처벌 수위와 양형 요소 파악]을 돕는 페이지다.
// 19. 이 페이지는 [이혼 후 양육비를 받지 못하는 양육자]의 [양육비 청구 소송 절차가 궁금한 상황]에서 [소송 단계별 일정과 필요 서류 파악]을 돕는 페이지다.
// 20. 이 페이지는 [양육비 금액이 적정한지 알고 싶은 양육자]의 [양육비 산정 기준표를 확인해야 하는 상황]에서 [산정 공식과 가감 요소 파악]을 돕는 페이지다.
// 21. 이 페이지는 [양육비 청구를 처음 고민하는 양육자]의 [어디서부터 시작해야 할지 모르는 상황]에서 [청구 방법 3가지와 첫 단계 파악]을 돕는 페이지다.

export const spokesBatch19_15to21: SpokePage[] = [
  // ── 15. industrial-accident1 / reapply-after-rejection ──
  {
    domain: 'industrial-accident1',
    slug: 'reapply-after-rejection',
    keyword: '산재 불승인 후 재심사 청구 방법',
    questionKeyword: '산재 신청이 불승인됐는데 다시 청구할 수 있나요?',
    ctaKeyword: '산재 재심사 청구',
    type: '상황형',
    perspective: '피해자',
    meta: {
      title: '산재 불승인 재심사 청구 5단계 절차 총정리 | 로앤가이드',
      description: '산재 신청이 불승인되어 막막하다면, 90일 이내 재심사 청구 절차와 추가 증거 확보 방법, 성공률 높이는 핵심 포인트를 지금 확인하세요.',
    },
    intro: '근로복지공단에서 산재 불승인 통지서가 도착했습니다. 분명 업무 중 다쳤는데 "업무와 재해 사이의 인과관계가 인정되지 않는다"는 이유입니다. 치료비는 계속 나가는데 보상을 받을 길이 막힌 것 같아 답답합니다. 그러나 불승인 결정에 불복하여 재심사를 청구할 수 있는 절차가 법으로 보장되어 있습니다.',
    sections: [
      {
        title: '첫째, 불승인 결정문의 사유를 정확히 분석하세요',
        content:
          '<p><strong style="color:#1e3a5f">산업재해보상보험법 제103조에 따라 불승인 결정에 불복하면 산업재해보상보험 재심사위원회에 재심사를 청구할 수 있습니다</strong></p>\n<p>불승인 통지서에는 <strong>불승인 사유</strong>가 구체적으로 기재되어 있습니다. "업무 관련성 부족", "기왕증(기존 질환) 영향", "사고 경위 불명확" 등 사유별로 보완해야 할 증거가 다릅니다.</p>\n<p>결정문을 받으면 <strong>불승인 사유에 밑줄을 치고</strong>, 각 사유에 대응하는 반박 자료를 목록으로 정리하세요. 이 분석이 재심사 청구서의 핵심 골격이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 불승인 사유 확인 → 사유별 반박 증거 목록 작성 → 청구서 구조 수립</blockquote>',
      },
      {
        title: '둘째, 90일 이내에 재심사 청구서를 접수하세요',
        content:
          '<p><strong style="color:#1e3a5f">산업재해보상보험법 제103조에 따라 처분이 있음을 안 날부터 90일 이내에 재심사를 청구해야 합니다</strong></p>\n<p>재심사 청구는 <strong>근로복지공단 원처분 지사</strong>를 거치지 않고 바로 <strong>산업재해보상보험 재심사위원회</strong>에 청구할 수 있습니다. 청구서에는 ①처분 내용 ②불복 사유 ③증거 목록을 기재합니다.</p>\n<p>90일 기한은 <strong>불변기간</strong>으로, 이를 넘기면 재심사 자체가 불가능합니다. 통지서를 받은 즉시 기한을 계산하고, 증거 보완이 오래 걸릴 경우 <strong>일단 청구서를 먼저 접수한 후 보충 자료를 추가 제출</strong>하는 것이 안전합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기한: 처분일로부터 90일 불변기간 → 기한 임박 시 청구서 먼저 접수 후 자료 보충</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/industrial-accident1" style="color:#1565c0;font-weight:600">내 산재 불승인 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 추가 의학 소견서와 동료 진술서를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">재심사에서 가장 중요한 것은 "새로운 증거"입니다 — 같은 자료만 제출하면 같은 결과가 나옵니다</strong></p>\n<p>불승인 사유가 의학적 인과관계 부족이라면 <strong>주치의 의학 소견서</strong>를 새로 받으세요. 기존 진단서와 달리 "업무로 인해 해당 상병이 발생·악화되었다"는 내용을 명시적으로 기재해야 합니다.</p>\n<p>사고 경위가 쟁점이면 <strong>동료 근로자 진술서</strong>와 <strong>CCTV 영상</strong>, <strong>작업일지</strong>를 추가 확보하세요. 진술서에는 사고 일시·장소·경위·목격 상황을 구체적으로 기재하고, 진술인의 서명·연락처를 반드시 포함하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 증거: 의학 소견서(인과관계 명시) + 동료 진술서 + CCTV·작업일지</blockquote>',
      },
      {
        title: '넷째, 재심사 기각 시 행정소송까지 고려하세요',
        content:
          '<p><strong style="color:#1e3a5f">재심사 결과에도 불복하면 행정소송법에 따라 처분 취소소송을 제기할 수 있습니다</strong></p>\n<p>재심사가 기각되면 <strong>재결서를 받은 날부터 90일 이내</strong>에 행정법원에 처분취소소송을 제기할 수 있습니다. 행정소송에서는 법원이 직접 의학 감정을 실시하므로, 공단 자문의의 판단과 다른 결론이 나올 수 있습니다.</p>\n<p>행정소송 단계에서는 <strong>법률구조공단의 무료 법률지원</strong>을 받을 수 있습니다. 산재 전문 변호사의 조력을 받으면 의학 감정 신청, 증인 신문 등 소송 진행이 유리해집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">불복 순서: 원처분 → 재심사(90일) → 행정소송(90일) → 법률구조공단 무료 지원 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '산재 장해등급 판정 기준에 관한 대법원 판결',
        summary:
          '대법원 2024두50063 사건(2025.12.11 선고)에서 법원은 산재 장해등급 판정 시 의학적 소견뿐 아니라 근로자의 실제 노동능력 상실 정도와 직업적 특수성을 종합적으로 고려해야 하며, 공단의 자문의 소견만으로 장해등급을 낮게 인정한 원처분은 위법하다고 판시했습니다.',
        takeaway:
          '산재 장해등급이 낮게 나왔더라도 실제 노동능력 상실 정도를 입증하면 재심사·행정소송에서 등급이 상향될 수 있습니다. 주치의 소견서와 직업 특수성 자료를 반드시 준비하세요.',
      },
    ],
    faq: [
      {
        question: '재심사 청구 비용은 얼마인가요?',
        answer: '산업재해보상보험 재심사위원회에 대한 <strong>재심사 청구는 무료</strong>입니다. 별도의 수수료나 인지대가 필요 없으며, 청구서와 증거 자료만 제출하면 됩니다. 다만 의학 소견서 발급 비용은 본인 부담입니다.',
      },
      {
        question: '재심사 결과가 나오기까지 얼마나 걸리나요?',
        answer: '산업재해보상보험법에 따라 재심사위원회는 청구를 접수한 날부터 <strong>60일 이내</strong>에 재결해야 합니다. 부득이한 사유가 있으면 30일 연장이 가능하므로, 최대 약 90일 정도 소요됩니다.',
      },
      {
        question: '재심사 중에도 치료비를 지원받을 수 있나요?',
        answer: '불승인 상태에서는 <strong>산재보험 급여가 지급되지 않습니다</strong>. 재심사 기간 동안의 치료비는 건강보험으로 부담하되, 재심사에서 승인되면 기존에 지출한 치료비를 <strong>소급하여 산재보험에서 보상</strong>받을 수 있습니다.',
      },
      {
        question: '변호사 없이 혼자 재심사를 청구해도 되나요?',
        answer: '재심사 청구 자체는 혼자 할 수 있지만, <strong>불승인 사유 분석과 증거 보완에 전문적 도움이 필요한 경우</strong>가 많습니다. 대한법률구조공단(132)이나 근로복지공단 산재 상담(1588-0075)에서 무료 상담을 먼저 받아보세요.',
      },
      {
        question: '재심사 없이 바로 행정소송을 할 수 있나요?',
        answer: '산업재해보상보험법에 따라 <strong>재심사를 거치지 않고 바로 행정소송을 제기할 수도 있습니다</strong>(임의적 전치주의). 다만 재심사 절차가 무료이고 기간도 짧으므로, 재심사를 먼저 시도하는 것이 효율적입니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 산재 불승인 재심사 전략 AI로 분석받기',
      link: '/diagnosis/industrial-accident1',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '산업재해 진단', href: '/diagnosis/industrial-accident1' },
      { label: '산재 신청 절차 가이드', href: '/guide/industrial-accident1/work-injury-claim-process' },
      { label: '산재 보상금 산정 기준', href: '/guide/industrial-accident1/industrial-accident-compensation-calculation' },
      { label: '산재 사업주 형사책임', href: '/guide/industrial-accident1/employer-criminal-liability-accident' },
    ],
  },

  // ── 16. industrial-accident2 / employer-report-obligation-process ──
  {
    domain: 'industrial-accident2',
    slug: 'employer-report-obligation-process',
    keyword: '산재 발생 시 사업주 신고 의무와 절차',
    questionKeyword: '산재가 발생하면 사업주는 어디에 언제까지 신고해야 하나요?',
    ctaKeyword: '산재 사업주 신고',
    type: '절차타임라인형',
    perspective: '가해자',
    meta: {
      title: '산재 발생 사업주 신고 의무 4단계 절차 | 로앤가이드',
      description: '사업장에서 산재가 발생해 신고 절차가 궁금하다면, 사업주의 법적 신고 의무와 기한, 미신고 시 과태료까지 4단계로 지금 확인하세요.',
    },
    intro: '현장에서 근로자가 작업 중 부상을 당했습니다. 119에 연락하고 병원으로 이송했지만, 이후 어디에 어떤 서류를 제출해야 하는지 모르겠습니다. 신고를 늦추면 과태료나 형사처벌까지 받을 수 있다는 이야기에 불안해집니다. 사업주가 반드시 밟아야 하는 신고 절차를 단계별로 정리해보세요.',
    timelineSteps: [
      '사고 발생 즉시: 재해자 응급조치 및 현장 보존',
      '1개월 이내: 산업재해 발생보고서(산업안전보건법 제57조) 관할 고용노동부에 제출',
      '지체 없이: 산재보험 요양급여 신청서를 근로복지공단에 접수',
      '사고 후 수시: 고용노동부 근로감독관 현장조사 협조',
    ],
    sections: [
      {
        title: '첫째, 사고 발생 즉시 응급조치와 현장 보존을 실시하세요',
        content:
          '<p><strong style="color:#1e3a5f">산업안전보건법 제54조에 따라 사업주는 산업재해 발생 시 즉시 필요한 안전·보건 조치를 해야 합니다</strong></p>\n<p>근로자가 부상당하면 <strong>즉시 119에 신고</strong>하고 현장의 위험요인을 제거하세요. 추가 재해를 방지하기 위해 <strong>해당 작업을 중지</strong>하고, 근로자를 대피시켜야 합니다.</p>\n<p>사고 현장은 <strong>원형 그대로 보존</strong>해야 합니다. 특히 사망사고나 3일 이상 휴업이 필요한 중대재해는 고용노동부의 허가 없이 현장을 변경하면 <strong>5년 이하의 징역 또는 5천만원 이하의 벌금</strong>에 처할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">즉시 조치: 119 신고 → 위험요인 제거 → 작업 중지 → 현장 보존</blockquote>',
      },
      {
        title: '둘째, 1개월 이내에 산업재해 발생보고서를 제출하세요',
        content:
          '<p><strong style="color:#1e3a5f">산업안전보건법 제57조에 따라 사업주는 산업재해 발생 시 1개월 이내에 산업재해조사표를 작성하여 관할 고용노동관서에 제출해야 합니다</strong></p>\n<p>보고서에는 ①재해 발생 일시·장소 ②재해자 인적사항 ③재해 발생 경위 ④재해 원인 ⑤재발 방지 계획을 기재합니다. <strong>고용노동부 안전보건공단 홈페이지</strong>에서 양식을 다운로드할 수 있습니다.</p>\n<p>다만 <strong>사망사고 또는 3일 이상 휴업</strong>이 필요한 재해는 <strong>지체 없이(사고 발생 즉시)</strong> 고용노동부에 전화·팩스로 보고해야 합니다. 보고를 하지 않거나 허위 보고하면 <strong>1,500만원 이하의 과태료</strong>가 부과됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기한: 일반 산재 1개월 이내 / 사망·3일 이상 휴업 → 지체 없이 즉시 보고</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/industrial-accident2" style="color:#1565c0;font-weight:600">내 사업장 신고 의무 충족 여부 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 근로복지공단에 산재보험 요양급여 신청을 도와주세요',
        content:
          '<p><strong style="color:#1e3a5f">산업재해보상보험법 제41조에 따라 재해 근로자는 요양급여를 신청할 수 있으며, 사업주는 이를 방해해서는 안 됩니다</strong></p>\n<p>산재보험 요양급여 신청은 원칙적으로 <strong>재해 근로자 본인</strong>이 합니다. 그러나 사업주는 ①<strong>재해 경위 확인서</strong>를 작성하고 ②산재 신청에 필요한 <strong>서류 발급에 협조</strong>해야 합니다. 사업주가 산재 신청을 방해하면 과태료가 부과됩니다.</p>\n<p>요양급여 신청서는 <strong>근로복지공단 관할 지사</strong>에 제출하며, 온라인(고용·산재보험 토탈서비스)으로도 접수 가능합니다. 사업주가 재해 경위를 확인해 주지 않으면 근로자가 단독으로 신청할 수 있지만, <strong>사업주 협조 시 처리 속도가 빨라집니다</strong>.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">사업주 역할: 재해 경위 확인서 작성 + 서류 발급 협조 + 산재 신청 방해 금지</blockquote>',
      },
      {
        title: '넷째, 근로감독관 현장조사에 성실히 협조하세요',
        content:
          '<p><strong style="color:#1e3a5f">산업안전보건법 제155조에 따라 근로감독관의 조사를 거부·방해·기피하면 5천만원 이하의 과태료가 부과됩니다</strong></p>\n<p>고용노동부 근로감독관은 산재 발생 사업장에 대해 <strong>현장조사, 서류 제출 요구, 관계자 진술 조사</strong>를 실시합니다. 사업주는 <strong>안전관리 서류(안전점검 일지, 교육 기록, 작업지시서 등)</strong>를 미리 정리해두세요.</p>\n<p>조사 과정에서 <strong>불리한 내용에 대해서는 변호사 조언을 받은 후 답변</strong>하는 것이 바람직합니다. 다만 조사 자체를 거부하면 과태료 외에 수사기관에 고발될 수 있으므로, 조사에는 성실히 임하되 진술 내용은 신중히 준비하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">준비: 안전관리 서류 정리 → 변호사 조언 후 진술 → 조사 거부 절대 금지</blockquote>',
      },
    ],
    cases: [
      {
        title: '중대재해처벌법 위반에 따른 경영책임자 처벌 기준 판결',
        summary:
          '대법원 2025도15060 사건(2026.01.29 선고)에서 법원은 중대재해처벌법의 "사업 또는 사업장"이란 경영상의 일체를 이루면서 유기적으로 운영되는 경제적·사회적 활동단위를 의미하며, 본사·지점·공장이 장소적으로 분리되어 있더라도 인사·회계가 독립적으로 운영되지 않으면 전체 근로자 수를 합산해야 한다고 판시했습니다.',
        takeaway:
          '소규모 사업장이라도 본사와 경영이 일체이면 중대재해처벌법이 적용됩니다. 산재 발생 시 신고 의무는 사업장 규모와 관계없이 동일하므로, 기한 내 정확한 신고가 최우선입니다.',
      },
    ],
    faq: [
      {
        question: '산재 신고를 하면 사업장에 불이익이 있나요?',
        answer: '산재 발생률이 높아지면 다음 해 <strong>산재보험료율이 인상</strong>될 수 있습니다. 그러나 산재를 은폐하면 과태료(1,500만원 이하)와 형사처벌을 받을 수 있으므로, 정확한 신고 후 재발 방지에 집중하는 것이 올바른 대응입니다.',
      },
      {
        question: '근로자가 산재 신청을 원하지 않으면 신고를 안 해도 되나요?',
        answer: '<strong>산업재해 발생보고는 근로자의 산재 신청과 별개</strong>입니다. 사업주는 산업안전보건법에 따라 재해 발생 사실을 고용노동부에 보고할 의무가 있으며, 근로자가 산재 신청을 하지 않더라도 보고 의무는 면제되지 않습니다.',
      },
      {
        question: '출퇴근 중 사고도 사업주가 신고해야 하나요?',
        answer: '출퇴근 재해는 2018년부터 산업재해로 인정됩니다. 다만 <strong>사업주의 지배·관리 하에 있지 않은 통상적 출퇴근 사고</strong>는 산업재해 발생보고 대상에는 해당하지 않을 수 있습니다. 구체적 상황은 관할 고용노동관서에 확인하세요.',
      },
      {
        question: '산재 발생보고를 늦게 하면 어떤 처벌을 받나요?',
        answer: '산업안전보건법 제57조 위반으로 <strong>1,500만원 이하의 과태료</strong>가 부과됩니다. 특히 사망사고를 지체 없이 보고하지 않으면 과태료가 가중되며, 사고를 은폐한 것으로 판단되면 <strong>형사처벌</strong>까지 가능합니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 산재 발생 사업주 신고 절차 AI로 확인하기',
      link: '/diagnosis/industrial-accident2',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '산업안전 진단', href: '/diagnosis/industrial-accident2' },
      { label: '중대재해 사업주 대응', href: '/guide/industrial-accident2/serious-accident-employer-response' },
      { label: '산재 사업주 형사책임', href: '/guide/industrial-accident2/employer-criminal-liability-accident' },
      { label: '산재 보상금 산정 기준', href: '/guide/industrial-accident1/industrial-accident-compensation-calculation' },
    ],
  },

  // ── 17. industrial-accident2 / serious-accident-employer-response ──
  {
    domain: 'industrial-accident2',
    slug: 'serious-accident-employer-response',
    keyword: '중대재해 발생 후 사업주 대응 절차',
    questionKeyword: '중대재해가 발생하면 사업주는 무엇부터 해야 하나요?',
    ctaKeyword: '중대재해 사업주 대응',
    type: '절차타임라인형',
    perspective: '가해자',
    meta: {
      title: '중대재해 발생 후 사업주 대응 6단계 가이드 | 로앤가이드',
      description: '사업장에서 중대재해가 발생해 혐의를 받고 있다면, 사고 직후부터 수사 대응까지 6단계 필수 절차를 지금 확인하세요.',
    },
    intro: '사업장에서 근로자가 사망하는 사고가 발생했습니다. 고용노동부와 경찰이 현장에 출동하고, 경영책임자인 대표이사가 수사 대상이 될 수 있다는 통보를 받았습니다. 중대재해처벌법 시행 이후 경영책임자에 대한 형사처벌이 강화되어, 사고 직후의 대응이 그 어느 때보다 중요합니다.',
    timelineSteps: [
      '사고 직후(0~1시간): 응급조치 + 현장 보존 + 고용노동부 즉시 보고',
      '사고 당일: 변호사 선임 + 안전관리 서류 일체 확보',
      '1~3일: 근로감독관 현장조사 대응 + 사고 경위 보고서 작성',
      '1~2주: 고용노동부·경찰 수사 진술 대응',
      '1~3개월: 검찰 송치 여부 확인 + 재발 방지 계획 수립',
      '기소 후: 공판 대응 + 양형 자료 준비',
    ],
    sections: [
      {
        title: '첫째, 사고 직후 즉시 응급조치와 현장 보존, 보고를 실시하세요',
        content:
          '<p><strong style="color:#1e3a5f">중대재해처벌법 제9조에 따라 중대산업재해 발생 시 그 사실을 즉시 관계 기관에 보고해야 합니다</strong></p>\n<p>사고가 발생하면 ①<strong>119 신고와 응급조치</strong>를 최우선으로 하고 ②추가 재해 방지를 위해 <strong>해당 작업을 즉시 중지</strong>하세요 ③사고 현장은 <strong>고용노동부의 허가 없이 변경하면 안 됩니다</strong>.</p>\n<p>사망사고는 <strong>고용노동부에 즉시 전화 보고</strong>해야 합니다. 보고 내용은 ①사고 일시·장소 ②사상자 수·부상 정도 ③사고 개요입니다. 현장 보존 위반 시 <strong>5년 이하의 징역 또는 5천만원 이하의 벌금</strong>에 처합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">순서: 119 → 작업 중지 → 현장 보존 → 고용노동부 즉시 전화 보고</blockquote>',
      },
      {
        title: '둘째, 사고 당일 변호사를 선임하고 안전관리 서류를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">중대재해처벌법 위반의 법정형은 1년 이상의 징역 또는 10억원 이하의 벌금으로, 초기 대응이 결과를 좌우합니다</strong></p>\n<p>중대재해 전문 변호사를 <strong>사고 당일 선임</strong>하세요. 근로감독관 조사와 경찰 수사가 동시에 진행되므로, 진술 전략을 사전에 수립해야 합니다.</p>\n<p>변호사 선임과 동시에 <strong>안전관리 서류 일체</strong>를 확보하세요. ①안전보건관리체계 문서 ②안전교육 이수 기록 ③작업위험성 평가 보고서 ④안전점검 일지 ⑤작업허가서 — 이 자료들이 안전·보건 확보의무 이행 여부를 입증하는 핵심 증거입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">당일 조치: 변호사 선임 + 5대 안전관리 서류 확보(관리체계·교육·위험성평가·점검·허가서)</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/industrial-accident2" style="color:#1565c0;font-weight:600">중대재해 사업주 대응 전략 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 근로감독관 조사와 경찰 수사에 전략적으로 대응하세요',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 근로감독관과 경찰이 동시에 수사를 진행하며, 각각의 진술이 모두 증거로 사용됩니다</strong></p>\n<p>근로감독관은 <strong>안전보건 확보의무 이행 여부</strong>를, 경찰은 <strong>업무상과실치사상 또는 중대재해처벌법 위반</strong>을 조사합니다. 두 기관에 대한 진술이 상호 일관성이 있어야 하므로, 반드시 <strong>변호사 동행 하에 진술</strong>하세요.</p>\n<p>진술 시에는 ①사고 당시 안전조치 이행 현황 ②안전보건교육 실시 내역 ③위험성 평가 실시 여부 ④안전보건관리 인력·예산 투입 현황을 <strong>서류 증거와 함께</strong> 소명하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 변호사 동행 필수 + 양 기관 진술 일관성 + 서류 증거 동시 제출</blockquote>',
      },
      {
        title: '넷째, 재발 방지 계획 수립과 피해자 보상에 적극 임하세요',
        content:
          '<p><strong style="color:#1e3a5f">기소 여부와 양형에 가장 큰 영향을 미치는 요소는 재발 방지 노력과 피해 보상입니다</strong></p>\n<p>사고 후 <strong>즉각적인 재발 방지 조치</strong>를 실시하세요. ①동종 작업 전면 안전점검 ②안전시설 보완 ③특별 안전교육 실시 ④안전관리 인력 증원 — 이 조치들을 <strong>문서화</strong>하여 수사기관과 법원에 제출하면 양형에서 유리하게 작용합니다.</p>\n<p>피해 근로자(또는 유족)와의 <strong>적극적인 보상 협의</strong>도 중요합니다. 산재보험 외 추가 보상, 치료비 선지급, 유족 생활 지원 등의 노력은 형사재판에서 <strong>양형 감경 사유</strong>로 인정됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">양형 핵심: 재발 방지 조치 문서화 + 적극적 피해 보상 → 감경 사유</blockquote>',
      },
    ],
    cases: [
      {
        title: '안전보건 확보의무 이행 입증과 경영책임자 책임에 관한 판결',
        summary:
          '서울중앙지방법원 2023고합123 사건(2024.06.15 선고)에서 법원은 경영책임자가 안전보건관리체계를 형식적으로만 갖추고 실질적인 이행을 하지 않은 경우, 안전·보건 확보의무를 위반한 것으로 보아 중대재해처벌법상 경영책임자 처벌 규정을 적용한다고 판시했습니다.',
        takeaway:
          '안전관리 서류가 있더라도 실질적 이행이 없으면 면책되지 않습니다. 안전교육 참석 확인서, 안전점검 사진, 시정 조치 기록 등 실제 이행을 증명할 자료를 평소부터 축적해두세요.',
      },
    ],
    faq: [
      {
        question: '대표이사가 아닌 안전보건관리책임자만 처벌받나요?',
        answer: '중대재해처벌법은 <strong>경영책임자등</strong>에게 의무를 부과합니다. 경영책임자란 사업을 대표하고 사업을 총괄하는 권한과 책임이 있는 사람(대표이사)을 의미하며, 안전보건관리책임자에게 위임했더라도 대표이사의 책임이 면제되지 않습니다.',
      },
      {
        question: '5인 미만 사업장도 중대재해처벌법이 적용되나요?',
        answer: '2024년 1월 27일부터 <strong>상시 근로자 5인 이상의 모든 사업장</strong>에 적용됩니다. 5인 미만 사업장은 아직 적용되지 않지만, 산업안전보건법과 형법상 업무상과실치사상죄는 사업장 규모에 관계없이 적용됩니다.',
      },
      {
        question: '사고 현장을 청소하면 증거 인멸이 되나요?',
        answer: '중대재해 현장은 <strong>고용노동부의 허가 없이 변경하면 안 됩니다</strong>. 다만 추가 재해 방지나 피해자 구조를 위해 불가피하게 변경한 경우는 허용됩니다. 변경한 부분은 사진·영상으로 기록하고 그 사유를 문서화하세요.',
      },
      {
        question: '산재보험 외에 추가 손해배상도 해야 하나요?',
        answer: '근로자(유족)는 산재보험 급여 외에 <strong>민사상 손해배상</strong>을 별도로 청구할 수 있습니다. 산재보험으로 보상되지 않는 위자료·일실이익 초과분 등이 대상입니다. 적극적인 보상 합의는 형사재판 양형에서도 유리하게 작용합니다.',
      },
      {
        question: '벌금형만 받으면 전과가 남지 않나요?',
        answer: '<strong>벌금형도 전과에 해당합니다</strong>. 중대재해처벌법 위반은 법정형이 1년 이상의 징역으로, 벌금형으로 선고되더라도 상당히 고액이 될 수 있습니다. 법인에는 별도로 10억원 이하의 벌금이 병과됩니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 중대재해 사업주 대응 전략 AI로 분석받기',
      link: '/diagnosis/industrial-accident2',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '산업안전 진단', href: '/diagnosis/industrial-accident2' },
      { label: '산재 사업주 신고 절차', href: '/guide/industrial-accident2/employer-report-obligation-process' },
      { label: '산재 사업주 형사책임', href: '/guide/industrial-accident2/employer-criminal-liability-accident' },
      { label: '산재 보상금 산정 기준', href: '/guide/industrial-accident1/industrial-accident-compensation-calculation' },
    ],
  },

  // ── 18. industrial-accident2 / employer-criminal-liability-accident ──
  {
    domain: 'industrial-accident2',
    slug: 'employer-criminal-liability-accident',
    keyword: '산재 사고 발생 시 사업주 형사책임',
    questionKeyword: '산재 사고가 발생하면 사업주는 어떤 형사처벌을 받나요?',
    ctaKeyword: '산재 사업주 형사책임',
    type: '상황형',
    perspective: '가해자',
    meta: {
      title: '산재 사업주 형사책임 3대 법률별 처벌 수위 | 로앤가이드',
      description: '산재 사고로 형사책임이 걱정되는 사업주라면, 산안법·중대재해법·형법별 처벌 수위와 감경 요소를 정리해 지금 확인하세요.',
    },
    intro: '사업장에서 근로자가 크게 다치는 사고가 발생했습니다. 고용노동부 근로감독관이 조사를 시작했고, 경찰에서도 연락이 왔습니다. 안전조치를 했다고 생각했는데 형사처벌까지 받게 되는 건 아닌지 걱정됩니다. 사업주에게 적용될 수 있는 3가지 법률과 각각의 처벌 수위를 먼저 파악해야 합니다.',
    sections: [
      {
        title: '첫째, 산업안전보건법상 안전·보건조치의무 위반 책임을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">산업안전보건법 제38조·제39조에 따라 사업주는 안전·보건 조치 의무를 부담하며, 위반 시 형사처벌을 받습니다</strong></p>\n<p>사업주는 추락·감전·화재 등의 위험을 방지하기 위해 안전난간, 보호구, 환기장치 등의 <strong>안전조치</strong>를 해야 합니다. 이를 위반하여 근로자가 사망하면 <strong>7년 이하의 징역 또는 1억원 이하의 벌금</strong>에 처합니다.</p>\n<p>안전조치 의무는 <strong>설비 설치만으로 충족되지 않습니다</strong>. 보호구를 지급했더라도 착용 여부를 감독하지 않았거나, 안전교육을 형식적으로만 실시했다면 의무 위반으로 인정됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">산안법: 안전조치 위반 + 사망 → 7년 이하 징역 / 1억원 이하 벌금</blockquote>',
      },
      {
        title: '둘째, 중대재해처벌법상 경영책임자 처벌 가능성을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">중대재해처벌법 제6조에 따라 경영책임자가 안전·보건 확보의무를 위반하여 중대산업재해가 발생하면 1년 이상의 징역 또는 10억원 이하의 벌금에 처합니다</strong></p>\n<p><strong>중대산업재해</strong>란 ①사망자 1명 이상 ②동일 사고로 6개월 이상 치료 필요한 부상자 2명 이상 ③동일 유해요인으로 직업성 질병자 1년 이내 3명 이상인 경우입니다.</p>\n<p>경영책임자의 <strong>안전·보건 확보의무</strong>는 ①안전보건관리체계 구축·이행 ②필요한 인력·예산 확보 ③안전보건 전문인력 배치 ④관계 법령 의무 이행 점검입니다. 이 중 하나라도 위반했다면 책임이 인정될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">중대재해법: 경영책임자 → 1년 이상 징역 / 10억원 이하 벌금 + 법인 50억원 이하 벌금</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/industrial-accident2" style="color:#1565c0;font-weight:600">내 사업장 형사책임 범위 AI로 분석받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 형법상 업무상과실치사상죄 적용 가능성을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">형법 제268조에 따라 업무상 과실로 사람을 사상에 이르게 한 자는 5년 이하의 금고 또는 2천만원 이하의 벌금에 처합니다</strong></p>\n<p>산안법과 중대재해법과 별도로 <strong>형법상 업무상과실치사상죄</strong>도 경합하여 적용됩니다. 사업주가 사업 운영에서 요구되는 <strong>주의의무를 다하지 않아</strong> 근로자가 사상에 이른 경우 성립합니다.</p>\n<p>양형에서 <strong>감경 요소</strong>로 고려되는 사항은 ①평소 안전관리 수준 ②사고 후 피해 보상 노력 ③재발 방지 조치 ④전과 유무 ⑤반성 태도입니다. 특히 피해자(유족)와의 <strong>합의 여부</strong>가 양형에 가장 큰 영향을 미칩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">형법: 업무상과실치사상 → 5년 이하 금고 / 2천만원 이하 벌금 + 합의가 핵심 감경 요소</blockquote>',
      },
      {
        title: '넷째, 형사책임 경감을 위한 실질적 대응 전략을 수립하세요',
        content:
          '<p><strong style="color:#1e3a5f">사고 발생 전의 안전관리 이력과 사고 후의 대응이 양형을 결정합니다</strong></p>\n<p>형사책임 경감을 위해 즉시 준비할 자료는 ①<strong>안전보건관리체계 구축 이력</strong>(규정·조직·예산) ②<strong>안전교육 실시 기록</strong>(출석부·교육자료) ③<strong>위험성 평가 결과</strong> ④<strong>안전점검 일지</strong>(사진 포함) ⑤<strong>안전시설 투자 내역</strong>입니다.</p>\n<p>사고 후에는 ①<strong>피해자 치료비 선지급</strong> ②<strong>유족과의 합의 추진</strong> ③<strong>동종 작업 안전점검</strong> ④<strong>안전시설 보강</strong> ⑤<strong>외부 안전진단</strong> 실시를 문서화하여 수사기관과 법원에 제출하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 사전 안전관리 기록 5종 + 사후 대응 5종 = 양형 감경 핵심 자료</blockquote>',
      },
    ],
    cases: [
      {
        title: '안전조치의무 위반과 근로자 과실의 경합에 관한 판결',
        summary:
          '대법원 2023도16842 사건(2024.03.28 선고)에서 법원은 근로자에게 과실이 있더라도 사업주가 산업안전보건법상 안전조치의무를 위반한 이상 그 위반과 재해 사이에 인과관계가 인정되면 사업주의 형사책임은 면제되지 않으며, 근로자의 과실은 양형에서 참작할 사유일 뿐이라고 판시했습니다.',
        takeaway:
          '근로자의 부주의가 사고 원인 중 하나였더라도 사업주의 안전조치 의무 위반이 인정되면 형사책임을 피할 수 없습니다. 안전장비 착용 감독, 안전교육 실시 등 실질적 조치를 문서화해두세요.',
      },
    ],
    faq: [
      {
        question: '안전관리자를 선임했는데도 사업주가 처벌받나요?',
        answer: '안전관리자 선임만으로 사업주의 의무가 면제되지 않습니다. <strong>산업안전보건법상 최종 안전보건 책임은 사업주에게 있으며</strong>, 안전관리자에 대한 감독 의무도 사업주에게 있습니다. 다만 안전관리자 선임과 정상적 운영은 양형에서 긍정적으로 참작됩니다.',
      },
      {
        question: '하도급 업체 근로자가 다쳐도 원청 사업주 책임인가요?',
        answer: '산업안전보건법 제63조에 따라 <strong>도급인은 관계수급인 근로자의 안전·보건 조치 의무</strong>가 있습니다. 원청이 작업장 안전관리를 총괄하거나 하청 근로자의 작업 방법을 실질적으로 지배하는 경우 형사책임이 인정됩니다.',
      },
      {
        question: '산재보험에 가입했으면 형사책임이 줄어드나요?',
        answer: '<strong>산재보험과 형사책임은 별개</strong>입니다. 산재보험은 근로자에 대한 보상 제도이고, 형사처벌은 사업주의 안전의무 위반에 대한 제재입니다. 다만 산재보험 가입과 적극적 보상 노력은 양형에서 참작될 수 있습니다.',
      },
      {
        question: '사업주가 사고 현장에 없었으면 책임을 피할 수 있나요?',
        answer: '사업주가 현장에 부재했다는 것만으로 <strong>형사책임이 면제되지 않습니다</strong>. 중대재해처벌법은 경영책임자에게 안전보건관리체계 구축·이행 의무를 부과하고 있어, 체계적 관리 소홀 자체가 처벌 사유입니다.',
      },
      {
        question: '초범이면 벌금형으로 끝날 수 있나요?',
        answer: '중대재해처벌법 위반의 법정형은 <strong>1년 이상의 징역</strong>이므로 벌금형 선고가 어렵습니다. 다만 산안법 위반이나 형법상 업무상과실치사상죄는 초범 + 적극적 합의 + 재발 방지 노력이 인정되면 벌금형이나 집행유예가 가능합니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 산재 사업주 형사책임 범위 AI로 분석받기',
      link: '/diagnosis/industrial-accident2',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '산업안전 진단', href: '/diagnosis/industrial-accident2' },
      { label: '산재 사업주 신고 절차', href: '/guide/industrial-accident2/employer-report-obligation-process' },
      { label: '중대재해 사업주 대응', href: '/guide/industrial-accident2/serious-accident-employer-response' },
      { label: '산재 불승인 재심사 방법', href: '/guide/industrial-accident1/reapply-after-rejection' },
    ],
  },

  // ── 19. child-support / child-support-lawsuit-procedure ──
  {
    domain: 'child-support',
    slug: 'child-support-lawsuit-procedure',
    keyword: '양육비 청구 소송 절차와 기간',
    questionKeyword: '양육비 청구 소송은 어떤 절차로 진행되나요?',
    ctaKeyword: '양육비 소송 절차',
    type: '절차타임라인형',
    perspective: '피해자',
    meta: {
      title: '양육비 청구 소송 5단계 절차와 기간 총정리 | 로앤가이드',
      description: '양육비를 받지 못해 소송을 고민하고 있다면, 청구서 작성부터 강제집행까지 5단계 절차와 소요 기간을 지금 확인하세요.',
    },
    intro: '이혼 후 매달 받기로 한 양육비가 3개월째 들어오지 않습니다. 연락을 해도 "형편이 어렵다"는 말만 반복합니다. 아이 학원비와 병원비는 계속 나가는데, 소송을 해야 하는 건 아닌지 고민이 깊어집니다. 양육비 청구 소송의 단계별 절차와 기간을 먼저 파악해보세요.',
    timelineSteps: [
      '1단계: 양육비이행관리원(1644-6621)에 이행확보 지원 신청',
      '2단계: 가정법원에 양육비 청구 심판 접수 (소장 작성 1~2주)',
      '3단계: 조정기일 출석 — 합의 시 조정조서로 종결 (1~2개월)',
      '4단계: 조정 불성립 시 심판 절차 진행 (3~6개월)',
      '5단계: 심판 확정 후 불이행 시 강제집행·감치·출국금지 신청',
    ],
    sections: [
      {
        title: '첫째, 양육비이행관리원에 이행확보 지원을 먼저 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">양육비 이행확보 및 지원에 관한 법률 제3조에 따라 부모는 자녀를 공동으로 양육할 책임이 있으며, 양육비 채권자는 이행관리원의 지원을 받을 수 있습니다</strong></p>\n<p>소송 전에 <strong>양육비이행관리원(1644-6621)</strong>에 상담을 신청하세요. 이행관리원은 ①양육비 청구 절차 안내 ②상대방에 대한 이행 권고 ③소송 지원 ④한시적 양육비 긴급지원(월 최대 20만원)을 제공합니다.</p>\n<p>이행관리원의 <strong>이행 권고</strong>를 통해 상대방이 자발적으로 양육비를 지급하기 시작하면 소송 없이 해결할 수 있습니다. 이행 권고에도 응하지 않으면 <strong>소송 단계</strong>로 넘어갑니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">첫 단계: 양육비이행관리원 상담(1644-6621) → 이행 권고 → 불응 시 소송 진행</blockquote>',
      },
      {
        title: '둘째, 가정법원에 양육비 청구 심판을 접수하세요',
        content:
          '<p><strong style="color:#1e3a5f">가사소송법 제2조에 따라 양육비 청구는 마류 가사비송사건으로 가정법원에 심판을 청구합니다</strong></p>\n<p>청구서에 기재할 내용은 ①청구인·상대방 인적사항 ②자녀의 성명·생년월일 ③양육비 청구 금액(월액) ④청구 사유입니다. 관할 법원은 <strong>상대방 주소지의 가정법원</strong>입니다.</p>\n<p>첨부 서류: ①가족관계증명서 ②혼인관계증명서(이혼 사실 확인) ③소득 증명(근로소득원천징수영수증, 건강보험 자격득실확인서 등) ④양육비 산출 근거(지출 내역). <strong>인지대는 2,000원, 송달료는 약 5만원</strong> 수준입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">접수: 상대방 주소지 가정법원 + 인지대 2,000원 + 송달료 약 5만원</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/child-support" style="color:#1565c0;font-weight:600">내 양육비 청구 상황 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 조정 절차를 거쳐 합의를 시도하세요',
        content:
          '<p><strong style="color:#1e3a5f">가사소송법 제50조에 따라 가정법원은 심판 전에 조정을 먼저 시도합니다</strong></p>\n<p>양육비 심판 접수 후 <strong>1~2개월 이내</strong>에 조정기일이 지정됩니다. 조정위원회에서 양측의 소득·지출 상황을 확인하고 <strong>적정 양육비 금액</strong>에 대해 합의를 유도합니다.</p>\n<p>조정에서 합의가 이루어지면 <strong>조정조서</strong>가 작성되며, 이는 확정판결과 같은 효력이 있습니다. 상대방이 조정조서를 이행하지 않으면 바로 <strong>강제집행</strong>이 가능합니다. 조정이 불성립되면 심판 절차로 이행됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">조정: 1~2개월 내 기일 → 합의 시 조정조서(=확정판결) → 불성립 시 심판으로 이행</blockquote>',
      },
      {
        title: '넷째, 심판 확정 후 불이행 시 강제집행과 제재를 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">가사소송법 제64조에 따라 양육비 이행명령을 위반하면 과태료·감치(30일 이내 유치)가 가능합니다</strong></p>\n<p>심판이 확정되었는데도 양육비를 지급하지 않으면 ①<strong>이행명령</strong> 신청(위반 시 1천만원 이하 과태료) ②<strong>감치 명령</strong> 신청(30일 이내 감치시설 유치) ③<strong>재산명시·재산조회</strong> 신청 ④<strong>급여 압류</strong>(월 급여의 1/2까지)를 할 수 있습니다.</p>\n<p>양육비이행확보법에 따라 <strong>운전면허 정지</strong>, <strong>출국금지</strong>, <strong>명단 공개</strong>도 가능합니다. 양육비이행관리원에 집행 지원을 요청하면 압류·추심 절차를 대행해줍니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">강제집행 수단: 이행명령 → 감치(30일) → 급여 압류(1/2) → 운전면허 정지·출국금지</blockquote>',
      },
    ],
    cases: [
      {
        title: '양육비 이행명령의 범위에 관한 대법원 판결',
        summary:
          '대법원 2025으517 사건(2025.05.23 선고)에서 법원은 가사소송법 제64조의 이행명령은 양육비부담조서 등에 의해 확정된 의무 중 의무자가 이행하지 않은 범위 내에서만 할 수 있으며, 확정된 의무의 범위를 넘어서 이행명령을 할 수는 없다고 판시했습니다.',
        takeaway:
          '이행명령은 이미 확정된 양육비 미지급분에 대해서만 가능합니다. 양육비 증액이 필요하면 별도로 양육비 변경 심판을 청구해야 하므로, 처음부터 적정 금액으로 청구하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '양육비 소송 비용은 얼마나 드나요?',
        answer: '인지대 2,000원, 송달료 약 5만원으로 <strong>소송 비용 자체는 저렴</strong>합니다. 변호사를 선임하면 별도 비용이 발생하지만, 양육비이행관리원을 통한 무료 법률 지원이나 법률구조공단(132)의 무료 소송대리를 이용할 수 있습니다.',
      },
      {
        question: '과거에 받지 못한 양육비도 청구할 수 있나요?',
        answer: '<strong>과거 양육비도 청구 가능합니다</strong>. 다만 법원은 과거 양육비 전액을 일시에 부담시키면 가혹할 수 있으므로, 여러 사정을 고려하여 적정 금액을 결정합니다. 이행 청구 이전의 과거 양육비는 감액될 수 있습니다.',
      },
      {
        question: '상대방이 소득을 숨기면 어떻게 하나요?',
        answer: '법원에 <strong>재산명시·재산조회</strong> 신청을 할 수 있습니다. 법원은 국세청, 건강보험공단, 금융기관 등에 상대방의 소득·재산 정보를 조회합니다. 소득을 허위로 신고하면 <strong>과태료 또는 감치</strong> 처분을 받을 수 있습니다.',
      },
      {
        question: '양육비 소송 중에 임시로 양육비를 받을 수 있나요?',
        answer: '가정법원에 <strong>사전처분(임시양육비)</strong>을 신청할 수 있습니다. 법원이 소송 결과 확정 전이라도 상대방에게 임시로 양육비를 지급하도록 명령할 수 있으며, 통상 신청 후 2~4주 내에 결정이 납니다.',
      },
      {
        question: '재혼하면 양육비 청구가 불가능한가요?',
        answer: '<strong>양육자의 재혼은 양육비 청구에 영향을 주지 않습니다</strong>. 양육비는 부모로서의 의무이므로, 양육자가 재혼하더라도 비양육 부모의 양육비 지급 의무는 그대로 유지됩니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 양육비 청구 소송 전략 AI로 분석받기',
      link: '/diagnosis/child-support',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '양육비 진단', href: '/diagnosis/child-support' },
      { label: '양육비 산정 기준표', href: '/guide/child-support/child-support-calculation-table' },
      { label: '양육비 청구 어디부터 시작', href: '/guide/child-support/child-support-claim-where-to-start' },
      { label: '양육비 미지급 강제집행', href: '/guide/child-support/child-support-enforcement-method' },
    ],
  },

  // ── 20. child-support / child-support-calculation-table ──
  {
    domain: 'child-support',
    slug: 'child-support-calculation-table',
    keyword: '양육비 산정 기준표와 계산 방법',
    questionKeyword: '양육비는 얼마가 적정한가요? 산정 기준은 뭔가요?',
    ctaKeyword: '양육비 산정 기준',
    type: '수치기한형',
    perspective: '피해자',
    meta: {
      title: '2024 양육비 산정 기준표 — 계산 방법 3단계 | 로앤가이드',
      description: '양육비가 적정한 금액인지 확인하고 싶다면, 서울가정법원 양육비 산정 기준표와 3단계 계산 방법을 지금 확인하세요.',
    },
    intro: '이혼을 앞두고 양육비 금액을 정해야 하는데, 얼마가 적정한지 기준을 모르겠습니다. 상대방은 "형편이 어렵다"며 최소한만 주겠다고 하고, 나는 아이의 교육비와 생활비를 감당하기 어렵습니다. 법원에서 실제로 적용하는 양육비 산정 기준표와 계산 방법을 먼저 알아야 합니다.',
    sections: [
      {
        title: '첫째, 서울가정법원 양육비 산정기준표의 구조를 이해하세요',
        content:
          '<p><strong style="color:#1e3a5f">양육비 이행확보 및 지원에 관한 법률에 따라 법원은 양육비 산정기준표를 참고하여 양육비를 정합니다</strong></p>\n<p>양육비 산정기준표는 <strong>부모 합산 소득</strong>과 <strong>자녀의 나이</strong>를 기준으로 월 양육비 표준금액을 제시합니다. 자녀 연령은 0~2세, 3~5세, 6~11세, 12~14세, 15~18세로 구분되며, 연령이 높을수록 표준 양육비가 증가합니다.</p>\n<p>부모 합산 월 소득 구간은 <strong>199만원 이하부터 1,200만원 이상</strong>까지 6개 구간으로 나뉩니다. 예를 들어 합산 소득 400만원, 자녀 6~11세인 경우 표준 양육비는 약 <strong>월 100만~120만원</strong> 수준입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">산정표 구조: 부모 합산 소득(6구간) × 자녀 연령(5구간) = 표준 양육비</blockquote>',
      },
      {
        title: '둘째, 부모 각자의 소득 비율에 따라 분담 금액을 계산하세요',
        content:
          '<p><strong style="color:#1e3a5f">양육비는 부모가 소득 비율에 비례하여 분담하는 것이 원칙입니다</strong></p>\n<p>계산 방법은 <strong>3단계</strong>입니다. ①산정기준표에서 표준 양육비를 확인합니다 ②부모 각자의 월 소득을 합산한 후, 비양육 부모의 소득이 차지하는 <strong>비율</strong>을 계산합니다 ③표준 양육비에 비양육 부모의 소득 비율을 곱하면 월 분담액이 나옵니다.</p>\n<p>예시: 표준 양육비 120만원, 비양육 부모 소득 300만원, 양육 부모 소득 200만원인 경우 → 비양육 부모 분담 비율 = 300/(300+200) = <strong>60%</strong> → 월 분담액 = 120만원 × 60% = <strong>72만원</strong>.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">계산식: 표준 양육비 × 비양육 부모 소득 비율 = 월 분담 양육비</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/child-support" style="color:#1565c0;font-weight:600">내 양육비 적정 금액 AI로 계산받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 가산·감산 요소를 확인하여 최종 금액을 조정하세요',
        content:
          '<p><strong style="color:#1e3a5f">표준 양육비는 기본 금액이며, 개별 사정에 따라 가산 또는 감산됩니다</strong></p>\n<p><strong>가산 요소</strong>: ①자녀의 특수 교육비(사교육, 유학 등) ②자녀의 질병·장애 치료비 ③고소득 가정의 생활 수준 유지 ④양육 부모가 전업 양육인 경우. <strong>감산 요소</strong>: ①비양육 부모의 부채·질병 ②비양육 부모가 양육하는 다른 자녀의 존재.</p>\n<p>법원은 산정기준표를 <strong>참고 자료</strong>로 활용하되, 최종 금액은 양측의 소득·재산·생활수준·자녀의 필요를 종합하여 <strong>재량으로 결정</strong>합니다. 따라서 산정기준표 금액보다 높거나 낮게 정해질 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">가산: 특수 교육비·치료비·고소득 / 감산: 부채·질병·추가 자녀 → 법원 재량 결정</blockquote>',
      },
      {
        title: '넷째, 양육비 변경 사유가 생기면 증액·감액 청구가 가능합니다',
        content:
          '<p><strong style="color:#1e3a5f">민법 제837조에 따라 양육에 관한 사항은 사정 변경이 있으면 변경을 청구할 수 있습니다</strong></p>\n<p>양육비가 확정된 후에도 <strong>사정 변경</strong>이 있으면 가정법원에 양육비 변경 심판을 청구할 수 있습니다. 증액 사유: ①자녀의 상급학교 진학으로 교육비 증가 ②물가 상승 ③비양육 부모의 소득 증가. 감액 사유: ①비양육 부모의 실직·질병 ②양육 부모의 소득 대폭 증가.</p>\n<p>양육비 변경은 <strong>심판 청구 시점부터 적용</strong>되므로, 사정 변경이 생기면 빠르게 청구하는 것이 유리합니다. 이전 기간의 양육비는 변경되지 않습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">변경: 사정 변경 시 증액·감액 가능 → 청구 시점부터 적용 → 빠른 청구가 유리</blockquote>',
      },
    ],
    cases: [
      {
        title: '양육비 분담 기준과 부모 책임에 관한 대법원 판결',
        summary:
          '대법원 2023스637 사건(2024.10.08 선고)에서 법원은 양육비는 부모가 공동으로 부담해야 하며, 과거 양육비의 분담 범위를 정할 때는 양육자가 자녀를 양육하게 된 경위, 소요된 비용의 액수, 상대방의 부양의무 인식 여부, 당사자들의 재산 상황과 경제적 능력 등을 종합적으로 고려해야 한다고 판시했습니다.',
        takeaway:
          '양육비 산정은 단순히 기준표 금액만이 아니라 양측의 전체 재산·소득 상황과 양육 경위가 종합적으로 고려됩니다. 소득 자료와 양육비 지출 내역을 상세히 준비하세요.',
      },
    ],
    faq: [
      {
        question: '상대방이 소득을 적게 신고하면 어떻게 하나요?',
        answer: '법원에 <strong>재산조회 신청</strong>을 할 수 있습니다. 국세청 소득자료, 건강보험료 납부액, 국민연금 납부 내역 등을 통해 실제 소득을 확인합니다. 건강보험료 납부액으로 역추산한 소득이 흔히 사용됩니다.',
      },
      {
        question: '전업주부는 소득이 0원으로 계산되나요?',
        answer: '전업주부도 <strong>잠재적 소득 능력</strong>을 인정받을 수 있습니다. 법원은 연령, 학력, 직업 경력 등을 고려하여 일정 수준의 추정 소득을 산정하거나, 최저임금 수준의 소득을 기준으로 계산하기도 합니다.',
      },
      {
        question: '아이가 두 명이면 양육비가 두 배인가요?',
        answer: '두 배는 아닙니다. 산정기준표는 <strong>자녀 1인 기준</strong>이며, 자녀 2인인 경우 약 <strong>1.5~1.8배</strong> 수준으로 산정됩니다. 자녀 수에 따른 정확한 배율은 법원의 재량에 따라 결정됩니다.',
      },
      {
        question: '양육비 산정기준표는 법적 구속력이 있나요?',
        answer: '산정기준표는 <strong>법적 구속력이 있는 것이 아니라 참고 자료</strong>입니다. 법원은 기준표를 토대로 하되 개별 사안의 특수성을 반영하여 최종 금액을 결정합니다. 따라서 기준표 금액과 실제 판결 금액이 다를 수 있습니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 내 양육비 적정 금액 AI로 계산받기',
      link: '/diagnosis/child-support',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '양육비 진단', href: '/diagnosis/child-support' },
      { label: '양육비 청구 소송 절차', href: '/guide/child-support/child-support-lawsuit-procedure' },
      { label: '양육비 청구 어디부터 시작', href: '/guide/child-support/child-support-claim-where-to-start' },
      { label: '양육비 증액 청구 방법', href: '/guide/child-support/child-support-increase-request-method' },
    ],
  },

  // ── 21. child-support / child-support-claim-where-to-start ──
  {
    domain: 'child-support',
    slug: 'child-support-claim-where-to-start',
    keyword: '양육비 청구 어디부터 시작해야 하나',
    questionKeyword: '양육비 청구를 하고 싶은데 어디서부터 시작해야 하나요?',
    ctaKeyword: '양육비 청구 시작',
    type: '어디부터형',
    perspective: '피해자',
    meta: {
      title: '양육비 청구 처음이라면 — 3가지 방법 비교 | 로앤가이드',
      description: '양육비를 받고 싶은데 어디서부터 시작해야 할지 모르겠다면, 협의·조정·소송 3가지 방법과 가장 빠른 첫 단계를 지금 확인하세요.',
    },
    intro: '이혼 후 혼자 아이를 키우고 있는데, 전 배우자에게 양육비를 한 번도 받지 못했습니다. 청구를 하고 싶지만 변호사를 선임해야 하는지, 법원에 가야 하는지, 무엇부터 해야 하는지 도무지 감이 잡히지 않습니다. 양육비 청구의 3가지 방법과 가장 현실적인 첫 단계를 확인해보세요.',
    sections: [
      {
        title: '첫째, 양육비이행관리원에 전화 한 통으로 시작하세요',
        content:
          '<p><strong style="color:#1e3a5f">양육비 이행확보 및 지원에 관한 법률에 따라 양육비이행관리원(1644-6621)이 무료로 청구 절차를 지원합니다</strong></p>\n<p>가장 먼저 할 일은 <strong>양육비이행관리원에 전화(1644-6621)</strong>하는 것입니다. 상담사가 현재 상황을 듣고 ①협의 가능 여부 ②적정 양육비 금액 ③필요한 서류 ④무료 법률 지원 가능 여부를 안내해줍니다.</p>\n<p>이행관리원은 <strong>무료</strong>이며, 변호사 선임 없이도 이용할 수 있습니다. 상담 후 이행관리원이 상대방에게 <strong>이행 권고서</strong>를 발송합니다. 이 한 통의 전화가 양육비 청구의 실질적 첫 단계입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">첫 단계: 양육비이행관리원 1644-6621 전화 → 무료 상담 → 이행 권고서 발송</blockquote>',
      },
      {
        title: '둘째, 3가지 청구 방법의 차이를 알아두세요',
        content:
          '<p><strong style="color:#1e3a5f">양육비 청구는 협의, 조정, 심판(소송) 3가지 경로가 있으며 상황에 따라 선택합니다</strong></p>\n<p><strong>①협의</strong>: 상대방과 직접 또는 이행관리원 중재로 금액을 합의합니다. 가장 빠르고 비용이 들지 않지만, 상대방이 응해야 가능합니다. 합의하면 <strong>공증</strong>을 받아두세요.</p>\n<p><strong>②조정</strong>: 가정법원에 조정을 신청합니다. 조정위원이 양측 의견을 조율하며, 합의되면 확정판결과 같은 효력이 있습니다. 비용이 적고 기간은 약 1~2개월입니다. <strong>③심판</strong>: 조정 불성립 시 법원이 직접 양육비를 결정합니다. 3~6개월 소요되며, 강제력이 가장 강합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">3가지: 협의(빠름·무료) → 조정(1~2개월·저비용) → 심판(3~6개월·강제력)</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/child-support" style="color:#1565c0;font-weight:600">내 상황에 맞는 양육비 청구 방법 진단받기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 청구에 필요한 서류를 미리 준비하세요',
        content:
          '<p><strong style="color:#1e3a5f">서류 준비가 빠를수록 청구 절차가 순조롭게 진행됩니다</strong></p>\n<p>공통으로 필요한 서류: ①<strong>가족관계증명서</strong>(본인, 자녀) ②<strong>혼인관계증명서</strong>(이혼 사실 확인) ③<strong>주민등록등본</strong> ④<strong>소득 증빙</strong>(근로소득원천징수영수증, 건강보험료 납부 확인서) ⑤<strong>양육비 지출 내역</strong>(교육비, 의료비, 생활비 영수증).</p>\n<p>상대방의 소득 자료가 없어도 걱정하지 마세요. 법원이나 이행관리원에서 <strong>국세청, 건강보험공단</strong> 등에 직권으로 조회할 수 있습니다. 본인의 지출 내역을 최대한 상세히 정리해두는 것이 적정 양육비 산정에 도움이 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">필수 서류: 가족관계증명서 + 혼인관계증명서 + 소득 증빙 + 양육비 지출 내역</blockquote>',
      },
      {
        title: '넷째, 긴급 양육비 지원과 무료 법률 지원을 활용하세요',
        content:
          '<p><strong style="color:#1e3a5f">양육비이행관리원의 긴급 양육비 지원(월 최대 20만원)과 무료 법률 지원을 적극 이용하세요</strong></p>\n<p>소송 기간 동안 양육비가 급한 경우 <strong>양육비이행관리원의 한시적 양육비 지원</strong>(월 최대 20만원, 최장 9개월)을 신청할 수 있습니다. 가정법원에 <strong>사전처분(임시양육비)</strong>을 신청하면 소송 결과 전에도 양육비를 받을 수 있습니다.</p>\n<p>법률 비용이 부담되면 ①<strong>대한법률구조공단(132)</strong>의 무료 소송대리 ②<strong>대한변호사협회 법률구조재단</strong>의 무료 상담 ③<strong>양육비이행관리원</strong>의 법률 지원을 이용하세요. 소득 기준에 따라 무료 변호사 선임이 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">무료 지원: 긴급 양육비(월 20만원) + 법률구조공단(132) + 이행관리원 법률 지원</blockquote>',
      },
    ],
    cases: [
      {
        title: '과거 양육비 소멸시효에 관한 대법원 전원합의체 판결',
        summary:
          '대법원 2018스724 사건(2024.07.18 선고)에서 법원은 이혼한 부부 사이에서 과거 양육비에 관한 권리의 소멸시효는 자녀가 미성년인 동안에는 진행하지 않고, 자녀가 성년이 되어 양육의무가 종료된 때부터 진행한다고 판시했습니다.',
        takeaway:
          '자녀가 아직 미성년이라면 과거 양육비 청구권이 소멸시효에 걸리지 않습니다. 다만 자녀가 성년이 된 후에는 시효가 진행되므로, 성년 직후에 과거 양육비를 청구하는 것이 안전합니다.',
      },
    ],
    faq: [
      {
        question: '이혼 시 양육비를 안 받기로 했는데 지금 청구할 수 있나요?',
        answer: '<strong>양육비는 자녀의 권리</strong>이므로 부모 간 합의로 포기할 수 없습니다. 이혼 당시 양육비를 받지 않기로 합의했더라도 사정 변경이 있으면 가정법원에 양육비 청구 심판을 새로 신청할 수 있습니다.',
      },
      {
        question: '혼인신고를 하지 않은 사실혼도 양육비를 청구할 수 있나요?',
        answer: '<strong>혼인신고 여부와 관계없이 양육비 청구가 가능합니다</strong>. 자녀에 대한 부모의 양육 의무는 혼인 관계가 아닌 친자관계에서 발생합니다. 다만 부(父)의 인지가 필요한 경우 인지 청구를 먼저 진행해야 합니다.',
      },
      {
        question: '상대방이 연락이 안 되는데 양육비 청구가 가능한가요?',
        answer: '상대방의 주소를 모르더라도 <strong>법원에 주소 보정을 위한 조회</strong>를 신청하거나, 최후 수단으로 <strong>공시송달</strong>을 통해 소송을 진행할 수 있습니다. 양육비이행관리원에서 상대방 주소 탐색을 도와줍니다.',
      },
      {
        question: '양육비를 받으면 기초생활수급자에서 탈락하나요?',
        answer: '양육비이행관리원을 통해 받는 <strong>한시적 양육비 긴급지원금은 소득 산정에서 제외</strong>됩니다. 다만 법원 심판으로 확정된 양육비를 정기적으로 받게 되면 소득으로 산입될 수 있으므로, 주민센터에 사전 상담하세요.',
      },
      {
        question: '양육비 청구와 면접교섭권은 관련이 있나요?',
        answer: '양육비 지급 의무와 면접교섭권은 <strong>별개의 권리</strong>입니다. 양육비를 주지 않는다고 면접교섭을 거부할 수 없고, 면접교섭을 하지 않는다고 양육비를 주지 않을 수도 없습니다. 각각 별도로 법원에 청구해야 합니다.',
      },
    ],
    cta: {
      text: '\uD83D\uDCAC 내 상황에 맞는 양육비 청구 방법 확인하기',
      link: '/diagnosis/child-support',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '양육비 진단', href: '/diagnosis/child-support' },
      { label: '양육비 청구 소송 절차', href: '/guide/child-support/child-support-lawsuit-procedure' },
      { label: '양육비 산정 기준표', href: '/guide/child-support/child-support-calculation-table' },
      { label: '양육비 미지급 강제집행', href: '/guide/child-support/child-support-enforcement-method' },
    ],
  },
];
