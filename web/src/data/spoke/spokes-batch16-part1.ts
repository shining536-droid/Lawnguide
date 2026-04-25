import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 1. 이 페이지는 [산재 불승인 통보를 받은 근로자]의 [공단 결정에 불복하는 상황]에서 [심사청구·재심사청구·행정소송 절차 준비]를 돕는 페이지다.
// 2. 이 페이지는 [출퇴근 중 교통사고를 당한 근로자]의 [산재 인정 여부가 불확실한 상황]에서 [출퇴근 재해 인정 요건 확인과 신청 준비]를 돕는 페이지다.
// 3. 이 페이지는 [산재 치료를 마치고 복직하는 근로자]의 [회사 복귀 시 불이익이 우려되는 상황]에서 [복직 후 불이익 방지와 권리 확보]를 돕는 페이지다.
// 4. 이 페이지는 [경매로 부동산을 낙찰받은 낙찰자]의 [점유자가 퇴거하지 않는 상황]에서 [명도소송 절차와 기간 파악]을 돕는 페이지다.
// 5. 이 페이지는 [경매 투자를 고려하는 일반인]의 [입찰 전 권리관계 파악이 필요한 상황]에서 [권리분석 체크리스트 확인]을 돕는 페이지다.

export const spokesBatch16Part1Pages: SpokePage[] = [
  {
    domain: 'industrial-accident',
    slug: 'industrial-accident-denial-appeal',
    keyword: '산업재해 인정 거부 시 불복 절차',
    questionKeyword: '산재 불승인 결정을 받았는데 어떻게 불복하나요?',
    ctaKeyword: '산재 불승인 불복',
    type: '절차타임라인형',
    meta: {
      title: '산재 불승인 불복 3단계 — 심사청구부터 행정소송까지 | 로앤가이드',
      description: '산재 요양급여가 불승인되었다면 90일 안에 심사청구를 해야 합니다. 심사청구·재심사청구·행정소송 절차와 준비서류를 단계별로 정리했습니다. 지금 확인하세요.',
    },
    intro: '산재 요양급여 신청을 했는데 근로복지공단에서 "업무상 재해에 해당하지 않는다"는 불승인 통보를 받았습니다. 치료비는 계속 나가고, 회사에서는 개인 질병이라며 관심도 없습니다. 불승인 결정에 불복할 수 있는 3단계 절차를 지금 바로 확인하세요.',
    timelineSteps: ['불승인 사유 확인', '심사청구 (90일)', '재심사청구 (90일)', '행정소송 (90일)'],
    sections: [
      {
        title: '첫째, 불승인 결정문의 사유를 꼼꼼히 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">공단이 불승인한 구체적 이유를 파악해야 대응이 가능합니다</strong></p>\n<p>근로복지공단의 불승인 결정문에는 <strong>업무 관련성이 인정되지 않는 이유</strong>가 구체적으로 기재되어 있습니다. "기존 질병의 자연경과", "업무와 상당인과관계 부족" 등 사유별로 대응 전략이 달라집니다.</p>\n<p>결정문을 받은 즉시 <strong>주치의 소견서, 작업환경 측정자료, 동료 진술서</strong> 등 반박 자료를 정리하세요. 특히 주치의에게 "업무와 질병 간의 인과관계"에 대한 의학적 소견서를 별도로 요청하는 것이 중요합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 불승인 결정문 사유 확인 → 주치의 소견서 요청 → 작업환경·동료진술 등 반박자료 수집</blockquote>',
      },
      {
        title: '둘째, 90일 이내에 산재보험 심사청구를 하세요',
        content:
          '<p><strong style="color:#1e3a5f">산업재해보상보험법 제103조에 따라 처분이 있음을 안 날로부터 90일 이내에 심사청구해야 합니다</strong></p>\n<p>불승인 결정에 불복하는 첫 번째 단계는 <strong>근로복지공단 심사위원회</strong>에 심사청구를 하는 것입니다. 심사청구서에 불승인 사유에 대한 반박 내용과 새로운 의학적 증거를 첨부하세요.</p>\n<p>심사청구는 <strong>처분이 있음을 안 날로부터 90일, 처분이 있은 날로부터 180일</strong> 이내에 해야 합니다. 이 기한을 넘기면 청구 자체가 각하됩니다. 심사청구 결과는 보통 <strong>60일 이내</strong>에 통보됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기한: 처분 안 날로부터 90일 | 제출처: 근로복지공단 심사위원회 | 결과: 60일 이내 통보</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/industrial-accident" style="color:#1565c0;font-weight:600">내 산재 불승인 상황에 맞는 불복 전략 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 심사청구가 기각되면 재심사청구를 하세요',
        content:
          '<p><strong style="color:#1e3a5f">산재보험 재심사위원회에 90일 이내 재심사청구가 가능합니다</strong></p>\n<p>심사청구가 기각되었다면 <strong>산업재해보상보험 재심사위원회</strong>(고용노동부 소속)에 재심사청구를 할 수 있습니다. 심사 결정을 안 날로부터 <strong>90일 이내</strong>에 제출해야 합니다.</p>\n<p>재심사 단계에서는 심사청구 때 제출하지 못한 <strong>새로운 증거</strong>가 특히 중요합니다. 다른 전문의의 추가 소견서, 유사 업무 종사자의 재해 사례, 작업장 유해요인 분석 보고서 등을 보강하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기한: 심사 결정 안 날로부터 90일 | 제출처: 산재보험 재심사위원회 | 핵심: 새 증거 보강</blockquote>',
      },
      {
        title: '넷째, 재심사도 기각되면 행정소송을 제기하세요',
        content:
          '<p><strong style="color:#1e3a5f">재심사 결정에도 불복하면 행정법원에 처분취소 소송을 제기할 수 있습니다</strong></p>\n<p>재심사청구가 기각된 경우, <strong>재결서 정본을 받은 날로부터 90일 이내</strong>에 행정법원에 처분취소 소송을 제기할 수 있습니다. 행정소송에서는 법원이 의학감정을 실시하는 경우가 많아 심사·재심사보다 <strong>인용률이 높은 편</strong>입니다.</p>\n<p>행정소송은 변호사 선임이 권장됩니다. <strong>대한법률구조공단</strong>(전화 132)에서 소득 기준 충족 시 무료 변호사 지원을 받을 수 있습니다. 소송 기간은 보통 <strong>6개월~1년</strong> 정도 소요됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기한: 재결서 받은 날로부터 90일 | 행정소송 인용률 상대적으로 높음 | 기간: 6개월~1년</blockquote>',
      },
      {
        title: '불복 절차 중에도 치료비를 받을 수 있는 방법',
        content:
          '<p><strong style="color:#1e3a5f">건강보험으로 우선 치료받고 산재 확정 후 환급받을 수 있습니다</strong></p>\n<p>산재 불승인 상태에서도 치료를 중단해서는 안 됩니다. <strong>건강보험</strong>으로 우선 치료를 받고, 이후 산재가 인정되면 근로복지공단에서 건강보험 부담금을 <strong>환급</strong>받을 수 있습니다.</p>\n<p>또한 불복 절차 중 <strong>국민건강보험공단</strong>에 "제3자 행위에 의한 상해"로 신고하면 건강보험 급여를 적용받을 수 있습니다. 나중에 산재가 확정되면 공단 간 정산이 이루어집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">방법: 건강보험으로 우선 치료 → 산재 확정 시 치료비 환급 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '장해등급 결정에 불복하여 행정소송에서 승소한 사례',
        summary:
          '대법원 2024두50063 사건(2025.12.11 선고)에서 법원은 산업재해보상보험법 시행규칙상 장해등급 세부기준의 "생명유지에 필요한 일상생활의 처리동작"을 넓게 해석하여, 이동·식사·개인위생 등 기초적 동작도 포함된다고 판시했습니다.',
        takeaway:
          '비슷한 상황이라면 장해등급 판정이 낮게 나왔을 때 세부기준의 해석에 대해 불복할 수 있습니다. 주치의 소견서로 일상생활 제한 정도를 구체적으로 입증하세요.',
      },
    ],
    faq: [
      {
        question: '심사청구 없이 바로 행정소송을 제기할 수 있나요?',
        answer: '산업재해보상보험법상 <strong>임의적 전치주의</strong>가 적용되어 심사청구나 재심사청구를 거치지 않고 바로 행정소송을 제기할 수도 있습니다. 다만 심사청구를 먼저 하는 것이 비용과 시간 면에서 유리합니다.',
      },
      {
        question: '불승인 결정 후 90일이 지났으면 방법이 없나요?',
        answer: '심사청구 기한(90일)이 지났더라도 <strong>처분이 있은 날로부터 180일 이내</strong>이면 가능할 수 있습니다. 기한 도과 시에는 행정소송 제기 가능 여부를 변호사와 상담하세요.',
      },
      {
        question: '심사청구 비용은 얼마인가요?',
        answer: '심사청구와 재심사청구는 <strong>무료</strong>입니다. 별도의 수수료가 없으며, 변호사 없이 본인이 직접 청구할 수 있습니다.',
      },
      {
        question: '산재 불승인 불복 중 실업급여를 받을 수 있나요?',
        answer: '산재 불승인 상태에서 퇴직했다면 <strong>고용보험 실업급여</strong> 수급 요건을 충족하는 경우 실업급여를 받을 수 있습니다. 산재 확정 시 사후 정산됩니다.',
      },
      {
        question: '회사가 산재 신청을 방해하면 어떻게 하나요?',
        answer: '사업주 확인 없이도 <strong>근로자 본인이 직접 산재 신청</strong>할 수 있습니다. 사업주의 산재 은폐는 산업안전보건법 위반으로 <strong>1년 이하 징역 또는 1천만원 이하 벌금</strong>에 해당할 소지가 있습니다.',
      },
    ],
    cta: {
      text: '내 산재 불승인 상황에 맞는 불복 전략을 확인해보세요',
      link: '/diagnosis/industrial-accident1',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '산재보험 진단', href: '/diagnosis/industrial-accident1' },
      { label: '산재보험 요양급여 신청 절차와 기한', href: '/guide/industrial-accident1' },
      { label: '출퇴근 사고 산재 인정 기준', href: '/guide/industrial-accident/commute-accident-workers-comp' },
      { label: '산재 후 회사 복귀 시 불이익 방지', href: '/guide/industrial-accident/return-to-work-after-injury' },
    ],
  },
  {
    domain: 'industrial-accident',
    slug: 'commute-accident-workers-comp',
    keyword: '출퇴근 사고 산재 인정 기준과 신청법',
    questionKeyword: '출퇴근 중 교통사고를 당했는데 산재로 인정되나요?',
    ctaKeyword: '출퇴근 산재 신청',
    type: '상황형',
    meta: {
      title: '출퇴근 사고 산재 인정 4가지 요건 — 2018년 개정 기준 | 로앤가이드',
      description: '출근길 교통사고를 당했는데 산재가 될까 고민이시라면, 출퇴근 재해 인정 4가지 요건과 예외 사유를 확인하세요. 지금 확인하세요.',
    },
    intro: '아침 출근길에 교통사고를 당했습니다. 회사에 연락했더니 "출퇴근 사고는 산재가 안 된다"고 합니다. 하지만 2018년 산업재해보상보험법 개정 이후 출퇴근 재해도 산재로 인정받을 수 있습니다. 인정 요건과 신청 방법을 확인하세요.',
    timelineSteps: ['사고 발생·증거 확보', '출퇴근 재해 해당 여부 확인', '산재 요양급여 신청', '보험급여 수령'],
    sections: [
      {
        title: '출퇴근 재해가 산재로 인정되는 4가지 요건',
        content:
          '<p><strong style="color:#1e3a5f">산업재해보상보험법 제37조 제1항 제3호에 따라 출퇴근 재해도 업무상 재해에 포함됩니다</strong></p>\n<p>2018년 1월 1일부터 <strong>모든 사업장 근로자</strong>의 출퇴근 재해가 산재로 인정될 수 있습니다. 다음 4가지 요건을 모두 충족해야 합니다.</p>\n<p><strong>① 통상적인 출퇴근 경로</strong>를 이용할 것 ② <strong>합리적인 방법</strong>으로 출퇴근할 것 ③ 출퇴근 <strong>도중</strong>에 발생한 사고일 것 ④ 근로자의 <strong>고의·자해행위</strong>가 아닐 것</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">4요건: 통상경로 + 합리적 방법 + 출퇴근 도중 + 고의·자해 아닐 것</blockquote>',
      },
      {
        title: '경로 이탈·중단 시에도 산재가 인정되는 예외',
        content:
          '<p><strong style="color:#1e3a5f">"일상생활에 필요한 행위"로 경로를 이탈한 경우에는 복귀 후 사고도 인정될 수 있습니다</strong></p>\n<p>산업재해보상보험법 시행령 제35조에 따라 <strong>일상생활에 필요한 행위</strong>로 경로를 벗어난 경우에는 예외적으로 인정될 수 있습니다. 구체적으로 ①자녀 등의 보육기관 등하원 ②선거권 행사 ③근로자가 사실상 보호하는 가족의 요양을 위한 의료기관 방문 ④생필품 구입 등이 해당합니다.</p>\n<p>다만 경로를 이탈·중단한 <strong>그 시점</strong>에서의 사고는 인정되지 않고, <strong>통상 경로에 복귀한 이후</strong>의 사고만 인정될 수 있습니다. 예를 들어 마트에서 장을 본 뒤 귀가 경로에서 사고가 나면 인정되지만, 마트 안에서 넘어진 것은 인정되지 않습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">예외 인정: 보육기관 등하원, 선거, 가족 병원, 생필품 구입 → 통상경로 복귀 후 사고만 인정</blockquote>',
      },
      {
        title: '출퇴근 재해 산재 신청 시 필요한 서류',
        content:
          '<p><strong style="color:#1e3a5f">교통사고 관련 증거를 가능한 한 확보한 뒤 산재 신청서를 제출하세요</strong></p>\n<p>출퇴근 재해 산재 신청에 필요한 핵심 서류는 다음과 같습니다.</p>\n<p><strong>① 요양급여 신청서</strong>(근로복지공단 서식) ② <strong>교통사고 사실확인원</strong>(경찰서 발급) ③ <strong>진단서</strong>(담당 의료기관) ④ <strong>출퇴근 경로 확인 자료</strong>(내비게이션 기록, 교통카드 이용내역) ⑤ <strong>재직증명서</strong> 또는 근로계약서 ⑥ 블랙박스 영상(있는 경우)</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">필수 서류: 요양급여 신청서, 교통사고 사실확인원, 진단서, 출퇴근 경로 증명자료</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/industrial-accident" style="color:#1565c0;font-weight:600">내 출퇴근 사고가 산재로 인정될 수 있는지 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '출퇴근 재해와 자동차보험 보상의 관계',
        content:
          '<p><strong style="color:#1e3a5f">자동차보험과 산재보험을 동시에 청구할 수는 없지만, 부족분은 보전됩니다</strong></p>\n<p>출퇴근 교통사고는 <strong>자동차보험</strong>에서도 보상받을 수 있고 <strong>산재보험</strong>에서도 보상받을 수 있습니다. 다만 동일한 손해에 대해 이중으로 받을 수는 없으며, 자동차보험에서 보상받지 못한 부분을 산재보험으로 보전받는 방식입니다.</p>\n<p>산재보험의 장점은 <strong>과실 비율과 무관</strong>하게 보상받을 수 있다는 것입니다. 본인 과실이 큰 사고라면 산재보험으로 신청하는 것이 유리할 수 있습니다. 또한 산재보험은 <strong>휴업급여</strong>(평균임금 70%)를 별도로 지급합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 본인 과실이 큰 경우 산재보험이 유리 | 휴업급여(평균임금 70%) 별도 지급</blockquote>',
      },
      {
        title: '재택근무·유연근무제 시 출퇴근 재해 인정 기준',
        content:
          '<p><strong style="color:#1e3a5f">재택근무 전환 시에도 사업장 방문 출퇴근은 출퇴근 재해로 인정될 수 있습니다</strong></p>\n<p>재택근무 중에도 <strong>회의나 업무 지시</strong>로 사업장에 출근하는 경우, 그 이동 중 사고는 출퇴근 재해로 인정될 수 있습니다. 유연근무제(시차출퇴근 등)를 하는 경우에도 <strong>실제 출퇴근 시각</strong>을 기준으로 판단합니다.</p>\n<p>다만 재택근무 중 <strong>자택 내 사고</strong>는 출퇴근 재해가 아닌 업무상 재해 여부로 판단되며, 인정 기준이 더 엄격합니다. 근무 시간표, 업무 지시 메시지, 사업장 출입 기록 등을 미리 확보해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">재택근무자: 사업장 방문 출퇴근 = 출퇴근 재해 인정 | 자택 내 사고 = 별도 기준 적용</blockquote>',
      },
    ],
    cases: [
      {
        title: '중대재해처벌법 적용 범위를 넓게 해석한 사례',
        summary:
          '대법원 2025도15060 사건(2026.01.29 선고)에서 법원은 중대재해처벌법의 "사업 또는 사업장"을 경영상 일체를 이루는 경제적·사회적 활동단위로 해석하여, 개별 지점에서 재해가 발생하더라도 본사를 포함한 전체 조직의 상시 근로자 수를 합산해야 한다고 판시했습니다.',
        takeaway:
          '비슷한 상황이라면 소규모 지점에서 사고가 났더라도 본사 포함 전체 근로자 수 기준으로 중대재해처벌법 적용 여부를 확인하세요. 50인 미만 사업장이라도 전체 기업 기준으로는 적용될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '자전거로 출퇴근 중 사고도 산재가 되나요?',
        answer: '네, <strong>합리적인 출퇴근 방법</strong>이라면 자전거, 도보, 대중교통, 자가용 모두 출퇴근 재해로 인정될 수 있습니다.',
      },
      {
        question: '출퇴근 중 본인 과실 100%인 사고도 산재가 되나요?',
        answer: '산재보험은 <strong>과실 비율과 무관</strong>하게 보상합니다. 다만 음주운전, 무면허운전 등 "고의·중대한 과실"은 급여가 제한될 수 있습니다.',
      },
      {
        question: '퇴근 후 회식에 참석하다 사고가 나면?',
        answer: '상사의 지시나 사실상 강제 참석인 <strong>업무 연장형 회식</strong>이면 업무상 재해로 인정될 수 있습니다. 자발적 참석이면 인정이 어렵습니다.',
      },
      {
        question: '출퇴근 재해 산재 신청 소멸시효는?',
        answer: '요양급여는 <strong>3년</strong> 이내에 청구해야 합니다. 사고 발생일이 아니라 요양의 필요가 발생한 날부터 기산합니다.',
      },
      {
        question: '배우자 회사에 먼저 들렀다가 사고가 나도 되나요?',
        answer: '통상적인 출퇴근 경로에서 <strong>일상생활에 필요한 행위</strong>로 이탈한 뒤 경로에 복귀한 이후의 사고는 인정될 수 있습니다. 경로 이탈 중 사고는 인정이 어렵습니다.',
      },
      {
        question: '무료 상담은 어디서 받나요?',
        answer: '<strong>근로복지공단</strong>(전화 1588-0075)과 <strong>대한법률구조공단</strong>(전화 132)에서 무료 상담을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '내 출퇴근 사고가 산재로 인정될 수 있는지 확인해보세요',
      link: '/diagnosis/industrial-accident1',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '산재보험 진단', href: '/diagnosis/industrial-accident1' },
      { label: '산재보험 요양급여 신청 절차와 기한', href: '/guide/industrial-accident1' },
      { label: '산재 불승인 불복 절차', href: '/guide/industrial-accident/industrial-accident-denial-appeal' },
      { label: '산재 후 회사 복귀 시 불이익 방지', href: '/guide/industrial-accident/return-to-work-after-injury' },
    ],
  },
  {
    domain: 'industrial-accident',
    slug: 'return-to-work-after-injury',
    keyword: '산재 후 회사 복귀 시 불이익 방지 체크리스트',
    questionKeyword: '산재 치료 후 복직할 때 회사에서 불이익을 주면 어떻게 하나요?',
    ctaKeyword: '산재 복직 불이익 방지',
    type: '체크리스트형',
    meta: {
      title: '산재 복직 후 불이익 방지 5가지 체크리스트 | 로앤가이드',
      description: '산재 치료 후 복직했더니 부서 이동, 업무 변경, 퇴직 압박을 받고 계신가요? 근로기준법이 보장하는 5가지 복직 권리를 지금 확인하세요.',
    },
    intro: '6개월간 산재 치료를 마치고 회사로 돌아갔습니다. 그런데 원래 부서가 아닌 다른 부서로 배치되고, 동료들은 "산재 넣더니 돌아왔네"라며 눈치를 줍니다. 산재 근로자의 복직 후 권리를 체크리스트로 확인하세요.',
    timelineSteps: ['복직 전 확인사항', '복직일 조치', '복직 후 모니터링', '불이익 대응'],
    sections: [
      {
        title: '산재 치료 중·후 해고는 원칙적으로 금지됩니다',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제23조 제2항: 요양 중과 복귀 후 30일간 해고가 금지됩니다</strong></p>\n<p>산재로 요양 중인 근로자를 해고하는 것은 <strong>근로기준법 제23조 제2항</strong>에 의해 금지됩니다. 요양이 끝난 후에도 <strong>30일간</strong>은 해고할 수 없습니다. 이를 위반한 해고는 무효입니다.</p>\n<p>다만 산업재해보상보험법에 따라 <strong>일시보상금</strong>을 지급한 경우에는 예외적으로 해고가 가능합니다. 회사가 일시보상을 제안하는 경우 가능한 한 금액의 적정성을 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크 ①: 요양 중 해고 = 무효 | 복귀 후 30일간 해고 금지 | 예외: 일시보상 지급 시</blockquote>',
      },
      {
        title: '원래 업무로 복귀할 권리가 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">산업재해보상보험법 제73조에 따라 사업주는 원직복귀 의무가 있습니다</strong></p>\n<p><strong>산업재해보상보험법 제73조</strong>에 따라 사업주는 산재 근로자가 요양을 마치면 <strong>원래 직무에 복귀</strong>시켜야 합니다. 정당한 사유 없이 원직복귀를 거부하거나 불리한 처우를 하면 <strong>2년 이하의 징역 또는 2천만원 이하의 벌금</strong>에 처해질 수 있습니다.</p>\n<p>신체적으로 원래 업무 수행이 어려운 경우, 사업주는 <strong>적합한 다른 업무</strong>에 배치해야 합니다. 이 경우에도 기존보다 불리하지 않은 근로조건이 보장되어야 합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크 ②: 원직복귀 의무 (산재보험법 제73조) | 위반 시 2년 이하 징역/2천만원 이하 벌금</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/industrial-accident" style="color:#1565c0;font-weight:600">내 복직 상황에서 불이익을 받고 있는지 진단하기 &rarr;</a>\n</div>',
      },
      {
        title: '임금 삭감·직급 강등도 불이익 처우입니다',
        content:
          '<p><strong style="color:#1e3a5f">산재를 이유로 한 임금 삭감, 승진 누락, 직급 강등은 위법 소지가 있습니다</strong></p>\n<p>복직 후 <strong>임금이 줄거나</strong>, 승진에서 누락되거나, 직급이 강등된다면 이는 산재를 이유로 한 <strong>불이익 처우</strong>에 해당할 소지가 있습니다. 사업주가 "성과가 없었으니까"라고 하더라도 산재 요양 기간은 근속기간에 포함됩니다.</p>\n<p>불이익 처우를 받으면 <strong>고용노동부</strong>(전화 1350)에 진정을 제기하거나, <strong>노동위원회</strong>에 구제신청을 할 수 있습니다. 불이익 처우의 증거(급여명세서 비교, 인사발령 문서, 메신저 대화 등)를 미리 확보하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크 ③: 임금 삭감·직급 강등 = 불이익 처우 | 대응: 노동청 진정 또는 노동위 구제신청</blockquote>',
      },
      {
        title: '직장 내 따돌림·괴롭힘에도 법적 보호를 받습니다',
        content:
          '<p><strong style="color:#1e3a5f">산재 복귀 후 동료나 상사의 따돌림은 직장 내 괴롭힘에 해당할 수 있습니다</strong></p>\n<p>"산재 넣은 사람"이라는 이유로 동료가 대화를 거부하거나, 업무에서 배제하거나, 험담을 하는 것은 <strong>근로기준법 제76조의2</strong>에 따른 직장 내 괴롭힘에 해당할 수 있습니다.</p>\n<p>직장 내 괴롭힘이 발생하면 <strong>사업주에게 신고</strong>하고, 사업주가 조치를 취하지 않으면 고용노동부에 신고할 수 있습니다. 괴롭힘 행위의 일시, 장소, 내용, 목격자 등을 기록해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크 ④: 산재 복귀 후 따돌림 = 직장 내 괴롭힘 (근로기준법 제76조의2) | 사업주 신고 → 노동청 신고</blockquote>',
      },
      {
        title: '복직 후에도 추가 치료가 필요하면 재요양 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">산업재해보상보험법 제51조에 따라 재요양을 신청할 수 있습니다</strong></p>\n<p>복직 후 산재 부위의 증상이 악화되거나 재발한 경우, <strong>재요양</strong>을 신청할 수 있습니다. 재요양 요건은 ①당초 산재와 동일한 부위일 것 ②증상이 악화되어 치료가 필요할 것 ③의학적 근거가 있을 것입니다.</p>\n<p>재요양이 승인되면 치료비와 <strong>휴업급여</strong>를 다시 받을 수 있습니다. 재요양 중에도 해고 금지 규정이 동일하게 적용됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크 ⑤: 증상 재발 시 재요양 신청 가능 | 치료비 + 휴업급여 재지급 | 해고 금지 동일 적용</blockquote>',
      },
    ],
    cases: [
      {
        title: '장해등급 판정에서 일상생활 동작 범위를 넓게 본 사례',
        summary:
          '대법원 2024두50063 사건(2025.12.11 선고)에서 법원은 산재 후 장해등급 판정 시 "생명유지에 필요한 일상생활 처리동작"에 이동·식사·개인위생 등 기초적 동작도 포함된다고 판시하여, 재해근로자의 장해등급을 상향 조정했습니다.',
        takeaway:
          '비슷한 상황이라면 복직 후에도 장해등급에 따른 장해급여를 수급하고 있는지, 그리고 등급이 적정한지 확인하세요. 일상생활 제한이 크다면 재판정을 요청할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '산재 요양 기간이 근속연수에 포함되나요?',
        answer: '네, 산재 요양 기간은 <strong>근속기간에 포함</strong>됩니다. 퇴직금 산정, 승진 요건 등에서 불이익을 받을 수 없습니다.',
      },
      {
        question: '복직 후 다른 부서로 전환 배치해도 되나요?',
        answer: '신체적 사유로 원래 업무가 어려운 경우 <strong>적합한 다른 업무</strong>로 배치할 수 있지만, 이것이 불이익 처우가 되어서는 안 됩니다.',
      },
      {
        question: '회사가 퇴직 합의를 권유하면 어떻게 하나요?',
        answer: '합의 전에 <strong>장해급여, 재요양 가능성</strong>을 먼저 확인하세요. 퇴직 합의서에 서명하면 복직 권리를 포기하게 될 수 있으니 전문가 상담 후 결정하세요.',
      },
      {
        question: '산재 복직 후 연차 계산은 어떻게 되나요?',
        answer: '산재 요양 기간은 <strong>출근한 것으로 간주</strong>됩니다(근로기준법 제60조 제6항). 연차 발생 요건인 80% 출근율 계산에서 불이익이 없습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>근로복지공단</strong>(1588-0075)과 <strong>대한법률구조공단</strong>(132)에서 산재 복직 관련 무료 상담을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '산재 복직 후 내 권리가 제대로 보호되고 있는지 확인해보세요',
      link: '/diagnosis/industrial-accident1',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '산재보험 진단', href: '/diagnosis/industrial-accident1' },
      { label: '산재보험 요양급여 신청 절차와 기한', href: '/guide/industrial-accident1' },
      { label: '산재 불승인 불복 절차', href: '/guide/industrial-accident/industrial-accident-denial-appeal' },
      { label: '부당해고 당했을 때 먼저 할 3가지', href: '/guide/dismissal/unfair-dismissal-first-steps' },
    ],
  },
  {
    domain: 'real-estate-auction',
    slug: 'auction-eviction-lawsuit-process',
    keyword: '경매 낙찰 후 명도소송 절차와 기간',
    questionKeyword: '경매로 낙찰받았는데 점유자가 안 나가면 어떻게 하나요?',
    ctaKeyword: '경매 명도소송',
    type: '절차타임라인형',
    meta: {
      title: '경매 명도소송 3단계 절차 — 인도명령부터 강제집행까지 | 로앤가이드',
      description: '경매로 부동산을 낙찰받았는데 점유자가 나가지 않아 곤란하신가요? 인도명령, 명도소송, 강제집행 절차와 소요 기간을 정리했습니다. 지금 확인하세요.',
    },
    intro: '법원 경매에서 아파트를 낙찰받고 잔금도 납부했습니다. 그런데 기존 점유자가 "나갈 돈이 없다"며 퇴거를 거부합니다. 명도소송을 해야 하는 건지, 더 간단한 방법은 없는지 막막합니다. 경매 낙찰자가 점유자를 퇴거시키는 절차를 단계별로 정리했습니다.',
    timelineSteps: ['대항력 확인', '인도명령 또는 명도소송', '강제집행 신청', '명도 완료'],
    sections: [
      {
        title: '첫째, 점유자의 권원과 대항력을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">점유자의 권리 유형에 따라 퇴거 절차가 완전히 달라집니다</strong></p>\n<p>경매 낙찰 후 가장 먼저 확인할 것은 <strong>점유자가 대항력 있는 임차인인지 여부</strong>입니다. 대항력이 없는 점유자(말소기준권리 이후 전입한 임차인, 소유자 본인, 불법점유자 등)는 간단한 <strong>인도명령</strong>으로 퇴거시킬 수 있습니다.</p>\n<p>반면 <strong>대항력 있는 임차인</strong>(말소기준권리 이전에 전입신고+점유를 갖춘 임차인)은 임대차 기간이 만료될 때까지 보호됩니다. 이 경우 낙찰자는 임대인 지위를 승계하게 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인: 매각물건명세서에서 인수되는 권리 확인 → 대항력 없는 점유자 = 인도명령 | 대항력 있는 임차인 = 임대인 승계</blockquote>',
      },
      {
        title: '인도명령은 잔금 납부 후 6개월 이내에 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">민사집행법 제136조에 따라 낙찰 후 6개월 이내 인도명령을 신청할 수 있습니다</strong></p>\n<p><strong>인도명령</strong>은 명도소송보다 훨씬 빠르고 간편한 절차입니다. 매수인이 <strong>잔금 납부 후 6개월 이내</strong>에 집행법원에 인도명령을 신청하면, 법원이 점유자에게 부동산을 인도하라는 결정을 내립니다.</p>\n<p>인도명령은 소송이 아니라 <strong>결정 절차</strong>이므로 보통 <strong>1~2주 이내</strong>에 결정이 나옵니다. 비용도 인지대 1,000원 + 송달료 정도로 매우 저렴합니다. 다만 6개월 기한이 지나면 인도명령이 불가하므로 잔금 납부 후 즉시 신청하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기한: 잔금 납부 후 6개월 이내 | 소요: 1~2주 | 비용: 인지대 1,000원 + 송달료</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/real-estate-auction" style="color:#1565c0;font-weight:600">내 경매 낙찰 물건의 명도 전략 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '인도명령이 불가하면 명도소송을 제기하세요',
        content:
          '<p><strong style="color:#1e3a5f">인도명령 기한(6개월)을 넘겼거나 복잡한 권리관계라면 명도소송이 필요합니다</strong></p>\n<p>인도명령 기한을 넘겼거나, 점유자가 <strong>대항력을 주장</strong>하며 다투는 경우에는 별도의 <strong>명도소송</strong>(건물인도 소송)을 제기해야 합니다. 소장은 부동산 소재지 관할 법원에 제출합니다.</p>\n<p>명도소송 기간은 보통 <strong>6개월~1년</strong> 정도 소요됩니다. 소송 중에도 점유자가 부동산을 계속 사용하므로, <strong>부당이득반환청구</strong>(차임 상당 손해배상)도 함께 청구하는 것이 일반적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">소요: 6개월~1년 | 함께 청구: 부당이득반환(차임 상당 손해배상) | 관할: 부동산 소재지 법원</blockquote>',
      },
      {
        title: '판결 또는 인도명령 확정 후 강제집행을 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">점유자가 자진 퇴거하지 않으면 법원 집행관을 통해 강제집행합니다</strong></p>\n<p>인도명령이나 명도소송 판결이 확정되었는데도 점유자가 퇴거하지 않으면, <strong>법원 집행관</strong>에게 강제집행을 신청합니다. 집행관이 현장에 방문하여 점유자의 짐을 <strong>보관 창고</strong>로 이동시키고 부동산을 인도합니다.</p>\n<p>강제집행 비용은 <strong>집행비용</strong>(집행관 수수료, 이사업체 비용, 보관비 등)이 발생하며, 보통 <strong>50만~200만원</strong> 정도입니다. 이 비용은 채무자(점유자)에게 청구할 수 있지만, 실제 회수가 어려운 경우가 많습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">강제집행 비용: 50만~200만원 | 절차: 집행관 신청 → 현장 방문 → 짐 보관 이동 → 인도</blockquote>',
      },
      {
        title: '점유자와 협의 퇴거도 적극 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">이사비를 지급하고 합의 퇴거하는 것이 시간·비용 면에서 유리할 수 있습니다</strong></p>\n<p>명도소송과 강제집행에 드는 시간(6개월~1년 이상)과 비용을 고려하면, 점유자에게 <strong>이사비(이주보상금)</strong>를 지급하고 합의 퇴거하는 것이 더 효율적일 수 있습니다. 이사비는 보통 <strong>100만~500만원</strong> 선에서 협의합니다.</p>\n<p>합의 시 가능한 한 <strong>퇴거 합의서</strong>를 작성하고, 퇴거 기한, 이사비 금액, 미이행 시 조치 등을 명시하세요. 합의서에 <strong>공증</strong>을 받아두면 이행하지 않을 때 바로 강제집행이 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">협의 퇴거: 이사비 100만~500만원 | 합의서 공증 필수 | 미이행 시 즉시 강제집행 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '허위 임차권으로 경매 방해한 행위가 유죄로 인정된 사례',
        summary:
          '대법원 2022도3103 사건(2025.01.09 선고)에서 법원은 부동산 경매절차에서 허위의 임차권에 기하여 권리신고 및 배당요구를 한 경우, 그 임차권에 대항력이나 우선변제권이 없더라도 경매에 참가하려는 자의 의사결정에 사실상 영향을 줄 수 있으므로 경매방해죄가 성립할 수 있다고 판시했습니다.',
        takeaway:
          '비슷한 상황이라면 점유자가 허위 임차권을 주장하며 배당을 요구하는 경우, 이는 경매방해죄에 해당할 수 있으니 즉시 법적 대응을 검토하세요.',
      },
    ],
    faq: [
      {
        question: '인도명령과 명도소송의 차이는 무엇인가요?',
        answer: '인도명령은 경매법원에 신청하는 <strong>간이 절차</strong>(1~2주)이고, 명도소송은 별도의 <strong>민사소송</strong>(6개월~1년)입니다. 인도명령이 가능하면 훨씬 빠릅니다.',
      },
      {
        question: '점유자가 인도명령에 이의를 제기하면?',
        answer: '점유자가 이의를 제기하면 인도명령 절차가 <strong>소송으로 전환</strong>됩니다. 이 경우 명도소송과 동일한 절차로 진행됩니다.',
      },
      {
        question: '잔금 납부 전에 점유자와 협의할 수 있나요?',
        answer: '가능합니다. 잔금 납부 전에 점유자를 만나 <strong>자진 퇴거 합의</strong>를 하는 것이 가장 이상적입니다. 다만 법적 강제력은 잔금 납부 후부터 발생합니다.',
      },
      {
        question: '강제집행 시 점유자의 짐은 어떻게 되나요?',
        answer: '집행관이 점유자의 동산을 <strong>보관 창고</strong>에 옮깁니다. 점유자가 일정 기간 내 찾아가지 않으면 경매 등의 절차로 처분됩니다.',
      },
      {
        question: '경매 명도 관련 무료 상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)과 <strong>대한법률구조재단</strong>에서 무료 법률상담을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '내 경매 낙찰 물건의 명도 절차를 확인해보세요',
      link: '/diagnosis/real-estate-auction',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '부동산 경매 진단', href: '/diagnosis/real-estate-auction' },
      { label: '경매 입찰 전 권리분석 체크리스트', href: '/guide/real-estate-auction/auction-rights-analysis-checklist' },
      { label: '전세사기 피해 대응 가이드', href: '/guide/jeonse-fraud/jeonse-fraud-first-check' },
      { label: '전세보증금 반환 청구 방법', href: '/guide/jeonse/deposit-return-process' },
    ],
  },
  {
    domain: 'real-estate-auction',
    slug: 'auction-rights-analysis-checklist',
    keyword: '경매 입찰 전 권리분석 필수 체크리스트',
    questionKeyword: '경매 입찰 전에 권리분석을 어떻게 해야 하나요?',
    ctaKeyword: '경매 권리분석',
    type: '체크리스트형',
    meta: {
      title: '경매 권리분석 7가지 필수 체크리스트 — 초보자용 | 로앤가이드',
      description: '경매 입찰을 준비하고 있지만 권리분석이 막막하신가요? 등기부등본부터 대항력, 유치권까지 7가지 핵심 체크포인트를 지금 확인하세요.',
    },
    intro: '법원 경매로 시세보다 저렴하게 부동산을 살 수 있다는 말에 관심이 생겼습니다. 그런데 "권리분석을 잘못하면 큰 손해를 본다"는 경고도 많습니다. 입찰 전에 가능한 한 확인해야 할 권리분석 핵심 체크리스트를 정리했습니다.',
    timelineSteps: ['등기부등본 분석', '매각물건명세서 확인', '현장조사', '입찰가 산정'],
    sections: [
      {
        title: '체크 1: 등기부등본의 권리관계를 분석하세요',
        content:
          '<p><strong style="color:#1e3a5f">말소기준권리를 찾아 소멸되는 권리와 인수되는 권리를 구분하세요</strong></p>\n<p>경매 권리분석의 핵심은 <strong>말소기준권리</strong>를 찾는 것입니다. 말소기준권리(압류, 가압류, 담보가등기, 근저당권 중 가장 먼저 설정된 것)를 기준으로, 그 <strong>이후</strong>에 설정된 권리는 매각으로 소멸하고, 그 <strong>이전</strong>에 설정된 권리는 낙찰자가 인수해야 합니다.</p>\n<p>특히 <strong>선순위 전세권, 지상권, 지역권</strong> 등이 있으면 낙찰자가 떠안게 됩니다. 인수해야 할 권리의 금액이 크면 실질적인 매입 비용이 늘어나므로 가능한 한 확인하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크 ①: 말소기준권리 찾기 → 이후 권리 = 소멸 | 이전 권리 = 인수 | 인수 금액 반영하여 입찰가 산정</blockquote>',
      },
      {
        title: '체크 2: 매각물건명세서와 현황조사보고서를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">법원이 작성한 공식 서류에서 점유관계와 인수 권리를 파악합니다</strong></p>\n<p><strong>매각물건명세서</strong>는 법원이 작성하는 서류로, 매각으로 소멸하지 않는 권리(인수해야 할 권리)가 기재되어 있습니다. <strong>현황조사보고서</strong>에는 점유자가 누구인지, 점유 원인이 무엇인지가 기재됩니다.</p>\n<p>특히 현황조사보고서에서 <strong>임차인의 전입일자, 확정일자, 보증금 액수</strong>를 확인하세요. 대항력 있는 임차인이 있으면 보증금을 낙찰자가 부담해야 할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크 ②: 매각물건명세서(인수 권리) + 현황조사보고서(점유자·임차인 정보) 필수 확인</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/real-estate-auction" style="color:#1565c0;font-weight:600">내가 관심 있는 경매 물건의 권리관계 분석하기 &rarr;</a>\n</div>',
      },
      {
        title: '체크 3: 대항력 있는 임차인 여부를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">주택임대차보호법에 따른 대항력 있는 임차인은 낙찰자가 보증금을 부담합니다</strong></p>\n<p>대항력 있는 임차인이란 <strong>말소기준권리 설정일 이전</strong>에 전입신고 + 점유(입주)를 마친 임차인입니다. 이 임차인이 <strong>배당에서 보증금 전액을 받지 못했다면</strong> 낙찰자가 나머지를 부담해야 합니다.</p>\n<p>예를 들어 보증금 2억원인 대항력 임차인이 배당에서 1억원만 받았다면, 낙찰자는 <strong>나머지 1억원</strong>을 임차인에게 반환해야 합니다. 이를 모르고 입찰하면 큰 손해를 봅니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크 ③: 대항력 임차인 유무 확인 → 미배당 보증금 = 낙찰자 부담 | 입찰가에 반영 필수</blockquote>',
      },
      {
        title: '체크 4: 유치권, 법정지상권 등 특수 권리를 주의하세요',
        content:
          '<p><strong style="color:#1e3a5f">유치권과 법정지상권은 등기부에 나타나지 않는 "숨은 위험"입니다</strong></p>\n<p><strong>유치권</strong>은 건물 수리비, 공사대금 등을 이유로 점유자가 부동산의 인도를 거부할 수 있는 권리입니다. 등기부에 나타나지 않아 현장 방문 시 직접 확인해야 합니다. 허위 유치권 주장도 많으므로 <strong>공사계약서, 세금계산서</strong> 등 증빙을 요구하세요.</p>\n<p><strong>법정지상권</strong>은 토지와 건물의 소유자가 다를 때 건물 소유자에게 인정되는 권리입니다. 토지만 낙찰받았는데 건물에 법정지상권이 있으면 건물 철거를 요구할 수 없습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크 ④: 유치권(현장 확인 필수) + 법정지상권(토지·건물 소유자 동일 여부) | 등기부에 안 나옴 주의</blockquote>',
      },
      {
        title: '체크 5: 현장 방문으로 실제 상태를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">서류만으로는 알 수 없는 정보를 현장에서 직접 확인해야 합니다</strong></p>\n<p>입찰 전 가능한 한 <strong>현장 방문</strong>을 하세요. 확인할 사항은 ①실제 점유자가 누구인지 ②건물 상태(하자, 노후도, 불법증축 여부) ③유치권 주장 유무 ④주변 시세와 임대 수요 ⑤도로 접도 여부(토지의 경우)입니다.</p>\n<p>점유자가 문을 열어주지 않을 수 있으므로, <strong>주변 부동산 중개사무소</strong>에 방문하여 해당 물건의 정보를 수집하는 것도 좋은 방법입니다. 현장 방문은 가급적 <strong>평일 낮과 주말</strong> 두 번 이상 방문하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크 ⑤: 현장 방문(점유자·건물상태·유치권·시세·접도) | 2회 이상 방문 권장 | 인근 중개소 정보 수집</blockquote>',
      },
      {
        title: '체크 6~7: 배당표 예상과 수익성 분석',
        content:
          '<p><strong style="color:#1e3a5f">예상 배당표를 작성하여 실질 매입가와 수익성을 분석하세요</strong></p>\n<p>낙찰가에서 각 채권자에게 돌아갈 <strong>배당금</strong>을 예상해보세요. 대항력 있는 임차인의 미배당 보증금, 체납 관리비 등을 낙찰가에 더한 것이 <strong>실질 매입가</strong>입니다. 이를 시세와 비교하여 수익성을 분석하세요.</p>\n<p>또한 <strong>취득세</strong>(경매의 경우 일반 매매와 동일), <strong>명도비용</strong>(이사비, 법적 비용), <strong>수리비</strong> 등 부대비용도 가능한 한 포함하세요. 시세 대비 <strong>70~80%</strong> 이하가 되어야 수익이 난다고 보는 것이 일반적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크 ⑥~⑦: 실질매입가 = 낙찰가 + 인수부담 + 부대비용 | 시세 70~80% 이하 목표</blockquote>',
      },
    ],
    cases: [
      {
        title: '경매절차에서 우선변제권의 요건을 명확히 한 사례',
        summary:
          '서울북부지법 2025가단107133 사건(2026.01.23 선고)에서 법원은 전세자금대출 보증약정에 따라 보증금을 대위변제한 주택도시보증공사가 민법 제481조에 따라 임차인의 우선변제권을 행사할 수 있다고 판시하여, 경매 배당에서 후순위 근저당권자보다 우선하여 배당받을 수 있다고 했습니다.',
        takeaway:
          '비슷한 상황이라면 경매 물건에 전세보증보험이 가입된 임차인이 있는 경우, 보증공사가 대위변제 후 우선변제권을 행사할 수 있으므로 배당 순위에 주의하세요.',
      },
    ],
    faq: [
      {
        question: '경매 초보자도 혼자 권리분석을 할 수 있나요?',
        answer: '기본적인 분석은 가능하지만, 처음이라면 <strong>경매 전문 법률사무소나 컨설팅</strong>의 도움을 받는 것을 권장합니다. 특히 유치권이나 법정지상권이 관련된 물건은 전문가 확인이 필수입니다.',
      },
      {
        question: '등기부등본은 어디서 발급받나요?',
        answer: '<strong>인터넷등기소</strong>(www.iros.go.kr)에서 온라인으로 발급받을 수 있습니다. 비용은 700원입니다.',
      },
      {
        question: '체납 관리비도 낙찰자가 부담하나요?',
        answer: '<strong>공용부분 관리비</strong>(일반관리비, 수선유지비 등)는 낙찰자가 승계하지만, <strong>전유부분 사용료</strong>(전기, 가스, 수도 등)는 승계하지 않는 것이 판례 입장입니다.',
      },
      {
        question: '입찰 보증금은 얼마인가요?',
        answer: '최저매각가격의 <strong>10%</strong>입니다. 낙찰받지 못하면 전액 환급됩니다.',
      },
      {
        question: '경매 물건 정보는 어디서 확인하나요?',
        answer: '<strong>대한민국 법원 경매정보</strong>(www.courtauction.go.kr)에서 전국 경매 물건을 무료로 검색할 수 있습니다.',
      },
      {
        question: '무료 법률상담은 어디서 받나요?',
        answer: '<strong>대한법률구조공단</strong>(전화 132)에서 무료 법률상담을 받을 수 있고, 각 지역 법원의 <strong>경매상담실</strong>도 활용하세요.',
      },
    ],
    cta: {
      text: '내가 관심 있는 경매 물건의 권리관계를 분석해보세요',
      link: '/diagnosis/real-estate-auction',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '부동산 경매 진단', href: '/diagnosis/real-estate-auction' },
      { label: '경매 낙찰 후 명도소송 절차', href: '/guide/real-estate-auction/auction-eviction-lawsuit-process' },
      { label: '전세보증금 반환 청구 방법', href: '/guide/jeonse/deposit-return-process' },
      { label: '전세사기 피해 대응 가이드', href: '/guide/jeonse-fraud/jeonse-fraud-first-check' },
    ],
  },
];
