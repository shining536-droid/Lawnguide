import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 1. 이 페이지는 [성희롱 피해를 신고한 근로자]의 [신고 후 불이익 조치를 당한 상황]에서 [보복 조치 위법성 확인과 구제 절차 준비]를 돕는 페이지다.
// 2. 이 페이지는 [예고 없이 해고된 근로자]의 [해고예고수당 금액과 청구 기한이 궁금한 상황]에서 [수당 계산법과 3년 청구 기한 확인]을 돕는 페이지다.
// 3. 이 페이지는 [부당해고를 당한 근로자]의 [해고 무효를 다투려는 상황]에서 [해고 무효 판례와 구제 가능성 판단]을 돕는 페이지다.
// 4. 이 페이지는 [실업급여 수급 중인 구직자]의 [구직활동 인정 절차가 헷갈리는 상황]에서 [실업인정일별 구직활동 방법과 제출 서류 확인]을 돕는 페이지다.
// 5. 이 페이지는 [계약기간 만료로 퇴사한 근로자]의 [실업급여를 받을 수 있는지 궁금한 상황]에서 [계약만료 실업급여 수급 요건과 신청 절차 확인]을 돕는 페이지다.

export const spokesBatch17_6to10: SpokePage[] = [
  {
    domain: 'sexual-harassment',
    slug: 'retaliation-after-report-illegal-cases',
    keyword: '성희롱 신고 후 불이익 조치 위법 판례',
    questionKeyword: '성희롱 신고 후 불이익을 당했는데 법적으로 보호받을 수 있나요?',
    ctaKeyword: '성희롱 보복 조치 구제',
    type: '판례형',
    perspective: '피해자',
    meta: {
      title: '성희롱 신고 후 보복 조치 5가지 위법 유형과 판례 | 로앤가이드',
      description: '성희롱을 신고했더니 부서 이동이나 인사 불이익을 받으셨나요? 남녀고용평등법이 금지하는 보복 조치 5가지 유형과 구제 방법을 확인하세요. 지금 확인하세요.',
    },
    intro: '용기를 내어 성희롱 피해를 회사에 신고했습니다. 그런데 얼마 지나지 않아 갑자기 부서가 바뀌었고, 인사평가도 낮아졌습니다. 주변에서는 "괜히 신고해서 더 불이익을 받는다"고 합니다. 신고한 것이 잘못이었을까요? 법은 이러한 보복 조치를 명확히 금지하고 있습니다.',
    sections: [
      {
        title: '첫째, 남녀고용평등법이 금지하는 불이익 조치 5가지를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">남녀고용평등과 일·가정 양립 지원에 관한 법률 제14조 제2항은 성희롱 피해 신고를 이유로 한 불이익 조치를 명시적으로 금지하고 있습니다</strong></p>\n<p>법이 금지하는 불이익 조치에는 ①<strong>파면·해임·해고 또는 그에 해당하는 신분상실</strong> ②<strong>징계·정직·감봉·강등·승진 제한</strong> ③<strong>직무 미부여, 직무 재배치, 전보 등 본인의 의사에 반하는 인사조치</strong> ④<strong>성과평가·동료평가에서의 차별</strong> ⑤<strong>그 밖에 신고를 한 근로자에게 불리한 처우</strong>가 포함됩니다.</p>\n<p>회사가 "업무상 필요"라고 주장하더라도, 시기적으로 신고 직후이고 합리적 이유가 없다면 보복 조치로 추정될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 신고 후 부서이동·인사평가 하락·업무배제 등은 모두 위법한 보복 조치에 해당할 수 있습니다</blockquote>',
      },
      {
        title: '둘째, 보복 조치의 입증 방법을 정리하세요',
        content:
          '<p><strong style="color:#1e3a5f">신고 시점과 불이익 조치 시점의 시간적 근접성이 핵심 입증 요소입니다</strong></p>\n<p>보복 조치를 입증하려면 ①<strong>성희롱 신고 일자와 불이익 조치 일자의 시간적 근접성</strong> ②<strong>신고 전후 인사평가·급여·직무 변화 비교 자료</strong> ③<strong>동일 직급 동료와의 인사조치 차이</strong>를 정리해야 합니다.</p>\n<p>특히 회사 내부 메일, 인사발령 통지서, 근무평가 결과지 등을 <strong>날짜순으로 보관</strong>하세요. 신고 전에는 우수 평가를 받았는데 신고 후 갑자기 하위 평가를 받았다면 강력한 간접 증거가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 신고일 ↔ 불이익 조치일 시간차 확인 → 인사평가 전후 비교 → 동료 대비 차별 여부 확인</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/sexual-harassment" style="color:#1565c0;font-weight:600">내 상황에 맞는 성희롱 보복 조치 대응 전략 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 고용노동부에 권리구제를 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">사업주의 불이익 조치에 대해 노동위원회에 구제신청이 가능합니다</strong></p>\n<p>남녀고용평등법 제14조 위반 시 사업주에게는 <strong>3년 이하의 징역 또는 3천만원 이하의 벌금</strong>이 부과됩니다. 형사고소와 별개로 <strong>지방고용노동관서에 진정·고소</strong>를 제기할 수 있습니다.</p>\n<p>또한 불이익 조치가 해고·징계에 해당하는 경우 <strong>노동위원회에 부당해고 또는 부당징계 구제신청</strong>을 할 수 있습니다. 구제신청 기한은 <strong>불이익 조치일로부터 3개월 이내</strong>입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">구제 경로: ①고용노동부 진정 ②노동위원회 구제신청(3개월 이내) ③형사고소</blockquote>',
      },
      {
        title: '넷째, 손해배상 청구도 함께 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">보복 조치로 인한 정신적·경제적 피해에 대해 민사상 손해배상을 청구할 수 있습니다</strong></p>\n<p>보복 조치로 인한 <strong>급여 감소, 승진 기회 상실, 정신적 고통</strong> 등에 대해 사업주와 행위자를 상대로 손해배상을 청구할 수 있습니다. 위자료는 보복 조치의 종류와 기간에 따라 <strong>300만~2,000만원</strong> 수준이 인정되는 경우가 많습니다.</p>\n<p>손해배상 청구 시효는 <strong>불법행위를 안 날로부터 3년, 불법행위일로부터 10년</strong>입니다. 노동위원회 구제와 민사소송은 <strong>동시에 진행</strong>할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">시효: 안 날로부터 3년 | 위자료: 300만~2,000만원 수준 | 노동위원회 + 민사 병행 가능</blockquote>',
      },
      {
        title: '다섯째, 외부 지원기관을 적극 활용하세요',
        content:
          '<p><strong style="color:#1e3a5f">혼자 감당하지 마시고 전문 상담기관과 법률지원을 받으세요</strong></p>\n<p>① <strong>여성긴급전화 1366</strong>: 성희롱 피해 상담, 법률·의료 지원 연계<br/>② <strong>대한법률구조공단(전화 132)</strong>: 소득 기준 충족 시 무료 법률 대리<br/>③ <strong>국가인권위원회(전화 1331)</strong>: 성희롱 진정 접수 및 시정 권고</p>\n<p>특히 국가인권위원회 진정은 <strong>비용이 무료</strong>이고, 시정 권고 결과가 향후 소송에서 유력한 참고자료가 됩니다. 고용노동부 진정과 인권위 진정을 <strong>동시에 진행</strong>하는 것이 효과적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">지원: 1366(상담), 132(법률구조), 1331(인권위) → 고용노동부 + 인권위 동시 진행 추천</blockquote>',
      },
    ],
    cases: [
      {
        title: '성희롱 신고 후 부서 전환 배치를 보복 조치로 인정한 판례',
        summary:
          '대법원 2017다258029 사건(대법원, 2018.4.12 선고)에서 법원은 성희롱 피해를 신고한 근로자를 다른 부서로 전환 배치한 것에 대해, 해당 전환 배치가 근로자의 의사에 반하고 업무상 필요성이 인정되지 않으며 신고 직후에 이루어졌다면 남녀고용평등법 제14조가 금지하는 불이익 조치에 해당한다고 판시했습니다.',
        takeaway:
          '비슷한 상황이라면 신고 후 이루어진 부서 이동이 합리적 이유 없이 이루어졌다는 점을 입증하세요. 신고 일자와 인사발령 일자의 시간적 근접성이 핵심 증거입니다.',
      },
    ],
    faq: [
      {
        question: '성희롱 신고 후 "본인이 원해서 부서를 옮긴 것"이라고 회사가 주장하면 어떻게 하나요?',
        answer: '회사가 피해자의 동의를 받았다고 주장하더라도, <strong>실질적으로 자유로운 의사에 기한 동의인지</strong>가 중요합니다. 압력이나 불이익 암시 하에 작성된 동의서는 효력이 부정될 수 있으므로, 당시 정황을 기록해두세요.',
      },
      {
        question: '신고 후 동료들이 따돌리는 것도 보복 조치에 해당하나요?',
        answer: '동료의 개인적 행위는 사업주 책임이 아니지만, <strong>사업주가 이를 알고도 방치하거나 조장</strong>한 경우에는 직장 내 괴롭힘(근로기준법 제76조의2)에 해당할 수 있습니다. 회사에 서면으로 시정을 요청하세요.',
      },
      {
        question: '퇴사 후에도 보복 조치에 대해 문제를 제기할 수 있나요?',
        answer: '<strong>퇴사 후에도 가능합니다.</strong> 손해배상 청구는 불법행위를 안 날로부터 3년 이내, 고용노동부 진정은 퇴직 후에도 제기할 수 있습니다. 다만 노동위원회 구제신청은 3개월 기한에 주의하세요.',
      },
      {
        question: '성희롱 신고 후 계약 갱신을 거부당했는데 이것도 보복인가요?',
        answer: '기간제 근로자의 계약 갱신 거부도 <strong>실질적으로 해고에 해당</strong>할 수 있습니다. 특히 기존에 반복 갱신되어 오던 계약이 신고 직후 갱신 거부되었다면 보복 조치로 인정될 가능성이 높습니다.',
      },
      {
        question: '익명으로 신고했는데 회사가 제 신원을 알아냈다면 어떻게 하나요?',
        answer: '남녀고용평등법 제14조 제7항은 <strong>피해자 등의 의사에 반하여 신원 정보를 누설하는 것을 금지</strong>하고 있습니다. 위반 시 500만원 이하의 과태료가 부과되며, 이 자체로도 별도의 문제 제기가 가능합니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/sexual-harassment',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '성희롱 진단', href: '/diagnosis/sexual-harassment' },
      { label: '직장 내 성희롱 피해 시 첫 대응법', href: '/guide/sexual-harassment/workplace-harassment-first-check' },
      { label: '부당해고 당했을 때 먼저 할 3가지', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '직장 내 괴롭힘 보복 방지', href: '/guide/sexual-harassment/workplace-harassment-retaliation-protection' },
    ],
  },
  {
    domain: 'dismissal',
    slug: 'dismissal-notice-pay-calculation',
    keyword: '해고예고수당 계산법과 청구 기한',
    questionKeyword: '해고예고수당 금액은 어떻게 계산하고 언제까지 청구해야 하나요?',
    ctaKeyword: '해고예고수당 계산',
    type: '수치기한형',
    meta: {
      title: '해고예고수당 30일분 계산법 3단계 — 청구 기한과 예외 | 로앤가이드',
      description: '갑자기 해고되었는데 해고예고수당을 얼마나 받을 수 있는지 궁금하시죠? 30일분 통상임금 계산법과 3년 청구 기한을 확인하세요. 지금 확인하세요.',
    },
    intro: '오늘 갑자기 "내일부터 나오지 마라"는 통보를 받았습니다. 30일 전에 미리 말해주지도 않았고, 별도 수당도 지급하지 않았습니다. 해고예고수당이 있다는 말은 들었는데, 정확히 얼마를 받을 수 있는지, 언제까지 청구해야 하는지 계산법부터 정리해보겠습니다.',
    sections: [
      {
        title: '첫째, 해고예고수당 대상인지 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제26조에 따라 30일 전 해고 예고가 없으면 30일분 이상의 통상임금을 지급해야 합니다</strong></p>\n<p>해고예고수당은 <strong>사용자가 30일 전에 해고를 예고하지 않은 경우</strong> 지급해야 하는 수당입니다. 다만 아래 3가지에 해당하면 적용이 제외됩니다.</p>\n<p>① 근속기간이 <strong>3개월 미만</strong>인 근로자 ② <strong>일용근로자</strong>(1개월 미만 근무) ③ 2개월 이내의 기간을 정하여 사용된 근로자. 수습 기간 중이더라도 <strong>3개월을 초과</strong>하여 근무했다면 해고예고수당 대상입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">대상: 30일 전 미예고 해고된 근로자 | 예외: 3개월 미만·일용·2개월 단기 근로자</blockquote>',
      },
      {
        title: '둘째, 30일분 통상임금을 계산하세요',
        content:
          '<p><strong style="color:#1e3a5f">통상임금 = 기본급 + 정기적·일률적·고정적으로 지급되는 수당을 기준으로 계산합니다</strong></p>\n<p><strong>월급제</strong>인 경우: 해고예고수당 = 월 통상임금 × 1개월분. 예를 들어 월 통상임금이 300만원이면 해고예고수당은 <strong>300만원</strong>입니다.</p>\n<p><strong>시급제</strong>인 경우: 해고예고수당 = 1일 통상임금(시급 × 1일 소정근로시간) × 30일. 시급 10,030원, 1일 8시간 근무라면 10,030 × 8 × 30 = <strong>2,407,200원</strong>입니다.</p>\n<p>15일 전에 예고했다면 나머지 <strong>15일분</strong>만 지급하면 됩니다. 부분 예고도 인정됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">월급제: 월 통상임금 × 1 | 시급제: 시급 × 8시간 × 30일 | 부분 예고 시 미예고 일수분만</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/dismissal" style="color:#1565c0;font-weight:600">내 해고 상황에 맞는 수당 계산과 청구 전략 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 3년 이내에 반드시 청구하세요',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제49조에 따라 해고예고수당 청구권의 소멸시효는 3년입니다</strong></p>\n<p>해고예고수당은 <strong>해고일로부터 3년 이내</strong>에 청구해야 합니다. 이 기간이 지나면 청구권이 소멸합니다. 다만 사용자가 임의로 지급하겠다고 한 경우 시효 중단 효과가 있을 수 있습니다.</p>\n<p>청구 순서는 ①사업주에게 <strong>내용증명</strong>으로 지급 요청 ②미지급 시 <strong>관할 지방고용노동청에 진정</strong> ③그래도 지급하지 않으면 <strong>민사소송</strong>입니다. 미지급 시 사업주에게 <strong>2년 이하의 징역 또는 2천만원 이하의 벌금</strong>이 부과될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">시효: 해고일로부터 3년 | 벌칙: 2년 이하 징역 또는 2천만원 이하 벌금</blockquote>',
      },
      {
        title: '넷째, 해고예고수당과 퇴직금은 별개입니다',
        content:
          '<p><strong style="color:#1e3a5f">해고예고수당은 퇴직금, 미지급 임금과 별도로 청구할 수 있습니다</strong></p>\n<p>흔히 혼동하지만 해고예고수당과 퇴직금은 완전히 <strong>별개의 청구권</strong>입니다. 1년 이상 근무한 근로자는 퇴직금도 함께 청구하세요. 미지급 임금, 연차수당, 해고예고수당, 퇴직금을 <strong>한 번에 내용증명으로 청구</strong>하는 것이 효율적입니다.</p>\n<p>퇴직금 청구 시효도 <strong>3년</strong>이므로, 해고 직후 바로 정리하는 것이 좋습니다. 고용노동부 진정 시 해고예고수당·미지급 임금·퇴직금을 <strong>모두 포함</strong>하여 신고할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">해고예고수당 + 퇴직금 + 미지급 임금 = 한꺼번에 청구 가능 | 시효 모두 3년</blockquote>',
      },
      {
        title: '다섯째, 해고예고수당이 적용되지 않는 예외 사유를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제26조 단서에 따라 근로자에게 귀책사유가 있는 경우 예고 의무가 면제됩니다</strong></p>\n<p>사용자가 예고 없이 해고할 수 있는 "근로자의 귀책사유"란 ①<strong>납품업체 등으로부터 금품 수수</strong> ②<strong>인사기록 위조 등 부정채용</strong> ③<strong>업무상 비밀 누설로 회사에 재산상 손해를 끼친 경우</strong> 등 고용노동부령으로 정한 사유에 한정됩니다.</p>\n<p>"실적이 나빠서" "태도가 불량해서" 등 <strong>추상적 사유</strong>로는 예고 의무가 면제되지 않습니다. 회사가 귀책사유를 주장하더라도 그 사유가 시행규칙상 해당하는지 확인해보세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">예고 면제: 금품수수·부정채용·비밀누설 등 한정적 사유만 해당 | 실적부진은 해당 안 됨</blockquote>',
      },
    ],
    cases: [
      {
        title: '해고예고 없이 즉시 해고한 회사에 수당 지급을 명한 판례',
        summary:
          '대법원 2024두54683 사건(대법원, 2025.3.13 선고)에서 법원은 부당해고 구제신청 후 사용자가 해고를 취소하여 원직복직을 명하고 임금 상당액을 지급하더라도, 근로자가 금전보상명령을 받을 구제이익이 소멸하는 것은 아니라고 판시했습니다.',
        takeaway:
          '비슷한 상황이라면 회사가 사후에 해고를 취소하고 임금을 지급했더라도 금전보상 청구를 포기하지 마세요. 노동위원회를 통한 추가 구제가 가능합니다.',
      },
    ],
    faq: [
      {
        question: '해고예고수당에 세금이 붙나요?',
        answer: '해고예고수당은 <strong>근로소득으로 과세</strong>됩니다. 다만 퇴직소득과 달리 퇴직소득공제가 적용되지 않으므로, 원천징수 후 지급됩니다.',
      },
      {
        question: '구두로 해고 통보를 받았는데 해고예고수당을 받을 수 있나요?',
        answer: '<strong>구두 해고도 해고에 해당합니다.</strong> 다만 입증이 어려울 수 있으므로, 해고 통보 내용을 녹음하거나 문자·이메일로 해고 사실을 확인하는 메시지를 보내두세요.',
      },
      {
        question: '권고사직도 해고예고수당 대상인가요?',
        answer: '자발적 사직이라면 해당하지 않지만, <strong>실질적으로 사직을 강요</strong>받은 경우에는 해고로 인정될 수 있습니다. "사직서를 쓰지 않으면 불이익이 있다"는 식의 압박이 있었다면 해고예고수당 대상입니다.',
      },
      {
        question: '해고예고수당과 실업급여를 동시에 받을 수 있나요?',
        answer: '<strong>동시 수급이 가능합니다.</strong> 해고예고수당은 근로기준법상 사용자의 의무이고, 실업급여는 고용보험법상 별도의 급여이므로 서로 영향을 주지 않습니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/dismissal',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '해고 진단', href: '/diagnosis/dismissal' },
      { label: '부당해고 당했을 때 먼저 할 3가지', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '해고예고수당 못 받았을 때 대처법', href: '/guide/dismissal/dismissal-notice-pay' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
    ],
  },
  {
    domain: 'dismissal',
    slug: 'unfair-dismissal-void-cases',
    keyword: '부당해고 판례로 본 해고 무효 사례',
    questionKeyword: '부당해고로 해고가 무효가 된 판례가 있나요?',
    ctaKeyword: '부당해고 무효 확인',
    type: '판례형',
    perspective: '피해자',
    meta: {
      title: '부당해고 무효 판례 4가지 유형 — 해고 정당성 기준 | 로앤가이드',
      description: '부당하게 해고되어 억울하신가요? 법원이 해고 무효를 선고한 대표 판례 4가지 유형과 구제 방법을 단계별로 정리했습니다. 지금 확인하세요.',
    },
    intro: '회사에서 갑자기 해고를 당했습니다. 해고 사유도 납득이 되지 않고, 절차도 제대로 지켜지지 않은 것 같습니다. 실제로 법원에서 해고를 무효로 판단한 사례들이 적지 않습니다. 어떤 경우에 해고가 무효가 되는지 판례를 통해 확인해보세요.',
    sections: [
      {
        title: '첫째, 해고 사유가 정당하지 않으면 무효입니다',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제23조 제1항은 "사용자는 정당한 이유 없이 근로자를 해고하지 못한다"고 규정하고 있습니다</strong></p>\n<p>해고의 정당한 사유란 <strong>사회통념상 근로관계를 계속할 수 없을 정도</strong>의 사유를 말합니다. 단순 실적 부진, 상사와의 불화, 복장 규정 위반 등은 대부분 정당한 해고 사유로 인정되지 않습니다.</p>\n<p>법원은 해고 사유의 정당성을 판단할 때 ①<strong>비위행위의 동기·경위</strong> ②<strong>근무 성적과 태도</strong> ③<strong>징계 전력</strong> ④<strong>해고로 인한 근로자의 불이익</strong> 등을 종합적으로 고려합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기준: 사회통념상 근로관계를 계속할 수 없을 정도의 사유가 있어야 합니다</blockquote>',
      },
      {
        title: '둘째, 해고 절차를 위반하면 무효입니다',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제27조에 따라 해고는 반드시 서면으로 해고 사유와 해고 시기를 통지해야 합니다</strong></p>\n<p>회사가 <strong>해고 사유와 시기를 서면으로 통지하지 않은 해고</strong>는 그 자체로 무효입니다. 구두 통보, 문자 메시지만으로는 서면 통지 요건을 충족하지 못합니다.</p>\n<p>또한 취업규칙이나 단체협약에 징계위원회 절차가 규정되어 있다면, <strong>징계위원회를 거치지 않은 해고</strong>도 절차 위반으로 무효가 됩니다. 해고 통지서를 받지 못했다면 반드시 서면 교부를 요청하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 서면 통지 필수(사유+시기 명시) | 징계위원회 미개최 시에도 무효</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/dismissal" style="color:#1565c0;font-weight:600">내 해고가 무효에 해당하는지 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 경영상 해고도 요건을 갖추지 않으면 무효입니다',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제24조는 경영상 해고의 4가지 요건을 규정하고 있습니다</strong></p>\n<p>경영상 해고(정리해고)가 유효하려면 ①<strong>긴박한 경영상의 필요</strong> ②<strong>해고 회피 노력</strong>(배치전환, 근로시간 단축, 신규채용 중단 등) ③<strong>합리적이고 공정한 해고 기준</strong> ④<strong>근로자 대표와 50일 전 성실 협의</strong>를 모두 충족해야 합니다.</p>\n<p>대법원 2023두57876 사건에서는 일부 사업 폐지를 이유로 한 해고가 경영상 해고 요건을 갖추지 못한 경우, 폐업과 같다고 볼 특별한 사정이 없으면 무효라고 판시했습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">4요건: 긴박한 필요 + 회피 노력 + 공정 기준 + 50일 전 협의 → 1개라도 미충족 시 무효</blockquote>',
      },
      {
        title: '넷째, 노동위원회 구제신청으로 복직을 요구하세요',
        content:
          '<p><strong style="color:#1e3a5f">부당해고일로부터 3개월 이내에 지방노동위원회에 구제신청을 해야 합니다</strong></p>\n<p>구제신청이 인용되면 <strong>원직복직 + 해고기간 임금 전액 지급</strong>이 명해집니다. 복직을 원하지 않는 경우에는 <strong>금전보상명령</strong>(해고기간 임금 상당액 이상)을 신청할 수도 있습니다.</p>\n<p>구제절차: ①<strong>지방노동위원회 구제신청</strong>(해고일로부터 3개월 이내) → ②<strong>심문회의</strong>(보통 1~2개월 소요) → ③<strong>판정</strong> → ④불복 시 <strong>중앙노동위원회 재심</strong>(10일 이내) → ⑤<strong>행정소송</strong></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기한: 해고일로부터 3개월 | 구제: 원직복직 + 임금보전 또는 금전보상</blockquote>',
      },
      {
        title: '다섯째, 해고 무효 확인 소송도 함께 검토하세요',
        content:
          '<p><strong style="color:#1e3a5f">노동위원회 구제와 별도로 민사법원에 해고 무효 확인 소송을 제기할 수 있습니다</strong></p>\n<p>해고 무효 확인 소송에서 승소하면 <strong>해고일부터 복직일까지의 임금 전액</strong>을 받을 수 있습니다. 노동위원회 구제와 민사소송은 <strong>동시 진행</strong>이 가능합니다.</p>\n<p>법률구조가 필요하면 <strong>대한법률구조공단(전화 132)</strong>이나 <strong>대한변호사협회 법률구조재단</strong>에 무료 법률 지원을 신청하세요. 소득 기준 충족 시 변호사 비용 없이 소송을 진행할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">병행: 노동위원회 구제 + 민사 해고무효확인 소송 동시 가능 | 무료 법률구조: 132</blockquote>',
      },
    ],
    cases: [
      {
        title: '정년 소급 적용에 의한 해고를 무효로 판단한 판례',
        summary:
          '대법원 2024두41038 사건(대법원, 2024.11.20 선고)에서 법원은 정년 도달에 따른 근로관계 종료 여부는 해당 시점에 유효한 정년을 기준으로 판단해야 하고, 이후 소급 적용되는 정년을 근거로 정년퇴직 처리한 것은 해고에 해당한다고 판시했습니다.',
        takeaway:
          '비슷한 상황이라면 회사가 취업규칙을 소급 변경하여 퇴직 처리한 경우, 해당 시점에 유효하지 않았던 규정에 근거한 처리는 부당해고로 다툴 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '수습 기간 중 해고도 부당해고에 해당할 수 있나요?',
        answer: '<strong>수습 기간이라도 해고 제한이 적용됩니다.</strong> 다만 법원은 수습 기간 중 해고 기준을 다소 완화하여 적용합니다. 그러나 합리적 평가 없이 일방적으로 해고하면 부당해고로 인정됩니다.',
      },
      {
        question: '구제신청 3개월 기한을 넘기면 방법이 없나요?',
        answer: '노동위원회 구제신청은 3개월이 지나면 각하되지만, <strong>민사법원에 해고무효확인 소송</strong>은 별도로 제기할 수 있습니다. 소멸시효(3년) 이내라면 임금 청구도 가능합니다.',
      },
      {
        question: '해고 무효가 확정되면 회사에 반드시 복직해야 하나요?',
        answer: '복직이 곤란한 경우 <strong>금전보상명령</strong>을 신청할 수 있습니다. 해고기간 동안의 임금 상당액 이상의 금품을 회사로부터 받는 방식입니다.',
      },
      {
        question: '5인 미만 사업장에서도 부당해고 구제가 가능한가요?',
        answer: '근로기준법 제23조(부당해고 금지)는 <strong>5인 미만 사업장에는 적용되지 않습니다.</strong> 다만 민법상 불법행위로 인한 손해배상 청구는 가능할 수 있으므로 법률 상담을 받아보세요.',
      },
      {
        question: '해고 통지서를 받지 못했는데 어떻게 대응하나요?',
        answer: '서면 해고 통지가 없는 해고는 <strong>그 자체로 무효</strong>입니다. 회사에 서면 교부를 요청하고, 구두 해고 사실은 녹음이나 문자 등으로 증거를 확보하세요.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/dismissal',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '해고 진단', href: '/diagnosis/dismissal' },
      { label: '부당해고 당했을 때 먼저 할 3가지', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '해고예고수당 계산법과 청구 기한', href: '/guide/dismissal/dismissal-notice-pay-calculation' },
    ],
  },
  {
    domain: 'unemployment',
    slug: 'job-search-activity-recognition-procedure',
    keyword: '실업급여 구직활동 인정 절차',
    questionKeyword: '실업급여 받으려면 구직활동을 어떻게 인정받나요?',
    ctaKeyword: '구직활동 인정',
    type: '절차타임라인형',
    meta: {
      title: '실업급여 구직활동 인정 4단계 절차 — 인정 방법과 주의점 | 로앤가이드',
      description: '실업급여를 받으려면 구직활동을 해야 한다는데 구체적으로 뭘 해야 하는지 모르시겠죠? 실업인정 4단계 절차와 인정되는 활동 유형을 정리했습니다. 지금 확인하세요.',
    },
    intro: '실업급여 수급자격은 인정받았는데, 1~4주마다 "구직활동을 했다"는 것을 증명해야 한다고 합니다. 어떤 활동이 인정되는지, 어떻게 신고하는지 헷갈립니다. 한 번이라도 빠지면 급여가 끊긴다니 걱정이 됩니다.',
    timelineSteps: ['수급자격 인정 + 교육 수료', '실업인정일 확인', '구직활동 수행', '온라인/출석 실업인정 신고'],
    sections: [
      {
        title: '첫째, 수급자격 인정 후 취업지원 설명회에 참석하세요',
        content:
          '<p><strong style="color:#1e3a5f">고용센터에서 수급자격이 인정되면 취업지원 설명회(실업급여 교육)에 반드시 참석해야 합니다</strong></p>\n<p>수급자격 인정신청일로부터 <strong>14일 이내</strong>에 고용센터에서 취업지원 설명회가 진행됩니다. 이 교육에서 <strong>실업인정일 일정표, 구직활동 방법, 부정수급 주의사항</strong>을 안내받습니다.</p>\n<p>교육을 수료하지 않으면 첫 실업급여가 지급되지 않으므로 반드시 참석하세요. 교육 후 <strong>1차 실업인정일</strong>이 지정됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">필수: 취업지원 설명회 참석 → 실업인정일 일정표 수령 → 1차 인정일 확인</blockquote>',
      },
      {
        title: '둘째, 실업인정일마다 구직활동 실적을 제출하세요',
        content:
          '<p><strong style="color:#1e3a5f">실업인정은 1~4주 단위로 지정된 실업인정일에 구직활동 실적을 신고하는 것입니다</strong></p>\n<p>고용보험법 제44조에 따라 실업급여를 받으려면 <strong>실업인정일에 고용센터에 출석하거나 온라인으로 구직활동 내용을 신고</strong>해야 합니다. 실업인정 주기는 보통 <strong>1~4주 단위</strong>이며, 수급자격 인정 시 안내받은 일정표를 따릅니다.</p>\n<p>각 인정 기간마다 최소 <strong>2회 이상</strong>의 구직활동 실적이 필요합니다(1~3차 실업인정 시에는 1회로 완화되는 경우도 있음). 실업인정일을 놓치면 해당 기간 급여가 <strong>지급되지 않습니다</strong>.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주기: 1~4주 단위 | 최소 활동: 인정기간당 2회(초기 완화 있음) | 미신고 시 급여 미지급</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/unemployment" style="color:#1565c0;font-weight:600">내 실업급여 수급 상황에 맞는 구직활동 전략 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 인정되는 구직활동 6가지 유형을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">고용센터가 인정하는 구직활동 유형은 구체적으로 정해져 있습니다</strong></p>\n<p>① <strong>입사 지원</strong>: 워크넷·사람인·잡코리아 등을 통한 입사 지원(가장 일반적)<br/>② <strong>채용 면접</strong>: 기업 면접 참석(면접 확인서 필요)<br/>③ <strong>직업훈련</strong>: 국비지원 직업훈련 수강<br/>④ <strong>취업특강·취업박람회 참석</strong>: 고용센터 프로그램 참여<br/>⑤ <strong>창업 준비 활동</strong>: 소자본 창업 교육, 사업계획서 작성 등<br/>⑥ <strong>자원봉사</strong>: 1365 자원봉사포털 통한 봉사활동(일부 인정)</p>\n<p>워크넷을 통한 <strong>온라인 입사 지원</strong>이 가장 간편하고 확실하게 인정받는 방법입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">추천: 워크넷 입사 지원이 가장 간편 | 면접·훈련·특강·창업준비도 인정</blockquote>',
      },
      {
        title: '넷째, 온라인 실업인정 신고 방법을 숙지하세요',
        content:
          '<p><strong style="color:#1e3a5f">고용24(구 워크넷) 또는 고용보험 앱에서 온라인으로 실업인정 신고가 가능합니다</strong></p>\n<p>온라인 신고 절차: ①<strong>고용24 접속</strong>(www.work24.go.kr) → ②<strong>실업인정 인터넷 신청</strong> 메뉴 선택 → ③구직활동 <strong>내용·일자·결과 입력</strong> → ④<strong>증빙자료 첨부</strong>(필요 시) → ⑤<strong>제출</strong></p>\n<p>실업인정일 <strong>당일 자정까지</strong> 제출해야 합니다. 시스템 오류 등으로 제출이 안 되는 경우 고용센터에 <strong>전화(국번 없이 1350)</strong>로 사정을 설명하세요. 정당한 사유가 인정되면 소급 인정이 가능할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">신고: 고용24 또는 앱 | 기한: 실업인정일 당일 자정까지 | 문의: 1350</blockquote>',
      },
      {
        title: '다섯째, 부정수급에 해당하지 않도록 주의하세요',
        content:
          '<p><strong style="color:#1e3a5f">허위 구직활동 신고 시 지급받은 급여의 최대 5배를 반환해야 합니다</strong></p>\n<p>고용보험법 제62조에 따라 거짓이나 부정한 방법으로 구직급여를 받은 경우 ①<strong>이미 지급된 급여 전액 반환</strong> + ②<strong>추가징수(최대 5배)</strong> + ③<strong>남은 급여 지급 제한</strong>의 불이익이 있습니다.</p>\n<p>실제로 입사 지원을 하지 않고 허위로 지원 내역을 기재하거나, <strong>취업 중인 사실을 숨기고 급여를 수령</strong>하면 부정수급에 해당합니다. 단기 아르바이트라도 반드시 <strong>취업 사실을 신고</strong>하세요. 일부 소득은 공제 후 급여를 받을 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 허위 신고 시 최대 5배 반환 | 단기 알바도 반드시 신고 | 소득 공제 후 수급 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '대리인이 구직활동 신고를 한 것을 부정수급으로 인정한 판례',
        summary:
          '대구지법 2018구합23680 사건(대구지법, 2019.4.17 선고)에서 법원은 수급자격자가 해외에 체류하면서 형이 대리로 인터넷을 통해 재취업 노력신고를 한 것은 고용보험법 제61조 제1항의 "거짓이나 그 밖의 부정한 방법"으로 구직급여를 받은 경우에 해당한다고 판시했습니다.',
        takeaway:
          '구직활동 신고는 반드시 본인이 직접 해야 합니다. 해외 체류나 부득이한 사정이 있더라도 제3자가 대리 신고하면 부정수급으로 처분될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '워크넷에서 입사 지원만 해도 구직활동으로 인정되나요?',
        answer: '<strong>네, 인정됩니다.</strong> 워크넷·사람인·잡코리아 등 구인구직 사이트를 통한 입사 지원이 가장 일반적인 구직활동입니다. 다만 동일 회사에 반복 지원하는 것은 인정되지 않을 수 있습니다.',
      },
      {
        question: '실업인정일에 병원 진료가 있으면 어떻게 하나요?',
        answer: '질병·부상으로 출석이 어려운 경우 <strong>사전에 고용센터에 연락</strong>하면 실업인정일을 변경하거나 온라인 신고로 대체할 수 있습니다. 진단서를 첨부하면 됩니다.',
      },
      {
        question: '단기 아르바이트를 하면 실업급여가 끊기나요?',
        answer: '<strong>바로 끊기지는 않습니다.</strong> 주 15시간 미만의 단기 근로는 취업한 것으로 보지 않을 수 있으며, 근로 일수에 해당하는 급여만 차감됩니다. 다만 <strong>반드시 취업 사실을 신고</strong>해야 합니다.',
      },
      {
        question: '구직활동을 못 해서 실업인정일에 신고를 못 하면?',
        answer: '해당 인정 기간의 <strong>급여가 지급되지 않습니다.</strong> 다만 전체 수급 기간이 줄어드는 것은 아니므로, 다음 실업인정일에 정상적으로 신고하면 이후 급여는 다시 지급됩니다.',
      },
      {
        question: '직업훈련 중이면 별도 구직활동을 안 해도 되나요?',
        answer: '<strong>직업훈련 수강 자체가 구직활동으로 인정됩니다.</strong> 국비지원 직업훈련을 수강 중이라면 별도의 입사 지원 없이도 실업인정을 받을 수 있습니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/unemployment',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '실업급여 진단', href: '/diagnosis/unemployment' },
      { label: '실업급여 수급 요건 확인', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '자발적 퇴사 실업급여 수급 가능 여부', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '실업급여 부정수급 제재와 대응법', href: '/guide/unemployment/unemployment-fraud-penalty-response' },
    ],
  },
  {
    domain: 'unemployment',
    slug: 'contract-expiry-benefit-eligibility',
    keyword: '계약만료 후 실업급여 수급 가능 여부',
    questionKeyword: '계약직인데 계약 만료되면 실업급여를 받을 수 있나요?',
    ctaKeyword: '계약만료 실업급여',
    type: '상황형',
    meta: {
      title: '계약만료 실업급여 3가지 수급 요건 — 기간제 근로자 가이드 | 로앤가이드',
      description: '계약기간이 만료되었는데 실업급여를 받을 수 있을지 고민이신가요? 기간제 근로자의 실업급여 수급 요건 3가지와 신청 절차를 정리했습니다. 지금 확인하세요.',
    },
    intro: '2년간 일했던 계약직 자리의 계약기간이 끝났습니다. 회사에서는 계약 갱신을 하지 않겠다고 통보했습니다. 자발적으로 그만둔 것이 아닌데, 실업급여를 받을 수 있는 걸까요? 계약만료 후 실업급여 수급 가능 여부를 확인해보세요.',
    sections: [
      {
        title: '첫째, 계약만료는 비자발적 이직으로 인정됩니다',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 시행규칙 별표2에 따라 기간제 근로계약의 만료는 비자발적 이직 사유에 해당합니다</strong></p>\n<p>계약기간 만료로 인한 퇴사는 <strong>"자발적 퇴사"가 아닙니다</strong>. 고용보험법상 수급자격 제한 사유인 "자기 사정으로 이직"에 해당하지 않으므로, 다른 요건을 충족하면 실업급여를 받을 수 있습니다.</p>\n<p>다만, 회사가 계약 갱신을 제안했는데 <strong>근로자가 갱신을 거부</strong>한 경우에는 자발적 이직으로 볼 수 있어 주의가 필요합니다. 갱신 제안의 <strong>근로조건이 이전보다 현저히 불리</strong>한 경우에는 거부하더라도 비자발적 이직으로 인정될 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">원칙: 계약만료 = 비자발적 이직 | 예외: 갱신 제안을 근로자가 거부한 경우 자발적 이직 가능</blockquote>',
      },
      {
        title: '둘째, 실업급여 수급 3가지 요건을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">계약만료로 퇴사하더라도 아래 3가지 요건을 모두 충족해야 합니다</strong></p>\n<p>① <strong>피보험단위기간 180일 이상</strong>: 이직일 이전 18개월 동안 고용보험 가입기간이 합산 180일 이상이어야 합니다. 여러 직장의 기간을 합산할 수 있습니다.</p>\n<p>② <strong>근로의 의사와 능력</strong>: 적극적으로 구직활동을 할 의사와 능력이 있어야 합니다.</p>\n<p>③ <strong>비자발적 이직</strong>: 계약만료는 이 요건을 충족합니다. 단, 본인이 갱신을 거부한 경우 제외.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">3요건: ①피보험 180일+ ②구직 의사·능력 ③비자발적 이직(계약만료 해당)</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/unemployment" style="color:#1565c0;font-weight:600">내 계약만료 상황에서 실업급여 받을 수 있는지 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '셋째, 이직확인서와 피보험자격 상실 신고를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">사업주가 고용센터에 이직확인서를 제출해야 수급자격 심사가 진행됩니다</strong></p>\n<p>퇴사 후 <strong>사업주가 10일 이내</strong>에 고용센터에 피보험자격 상실 신고와 이직확인서를 제출해야 합니다. 이직확인서에는 <strong>이직 사유</strong>가 기재되는데, "계약기간 만료"로 기재되어야 합니다.</p>\n<p>만약 회사가 이직 사유를 "자진퇴사"로 잘못 기재하거나 이직확인서 제출을 지연하는 경우, <strong>고용센터(1350)에 신고</strong>하면 사업주에게 시정 명령이 내려집니다. 사업주가 이직확인서를 제출하지 않으면 <strong>과태료 300만원</strong>이 부과됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">확인: 이직사유 "계약기간 만료" 기재 여부 | 미제출 시 1350 신고 → 과태료 300만원</blockquote>',
      },
      {
        title: '넷째, 퇴사 후 12개월 이내에 신청하세요',
        content:
          '<p><strong style="color:#1e3a5f">실업급여 수급자격 인정신청은 이직일 다음 날부터 12개월 이내에 해야 합니다</strong></p>\n<p>고용보험법 제43조에 따라 수급 기간은 이직일 다음 날부터 <strong>12개월</strong>입니다. 이 기간 내에 신청하지 않으면 받을 수 있는 급여일수가 줄어들거나 아예 받지 못할 수 있습니다.</p>\n<p>신청 절차: ①<strong>워크넷 구직등록</strong> → ②<strong>관할 고용센터 방문</strong> → ③<strong>수급자격 인정신청</strong> → ④<strong>취업지원 설명회 참석</strong> → ⑤<strong>실업인정 시작</strong></p>\n<p>급여액은 <strong>퇴직 전 평균임금의 60% × 소정급여일수</strong>입니다. 2026년 기준 1일 상한액은 <strong>66,000원</strong>, 하한액은 <strong>63,104원</strong>입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">기한: 이직일 다음 날부터 12개월 | 급여: 평균임금 60% | 상한 66,000원/일</blockquote>',
      },
      {
        title: '다섯째, 계약직 반복 갱신 후 만료 시 특수한 경우를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">2년 이상 반복 갱신된 계약이 만료되면 부당해고에 해당할 수 있습니다</strong></p>\n<p>기간제법(기간제 및 단시간근로자 보호 등에 관한 법률) 제4조에 따라 <strong>2년을 초과</strong>하여 기간제 근로자를 사용하면 기간의 정함이 없는 근로자로 간주됩니다. 이 경우 계약만료를 이유로 한 고용 종료는 <strong>부당해고</strong>에 해당할 수 있습니다.</p>\n<p>또한 계약이 수차례 갱신되어 <strong>갱신 기대권</strong>이 인정되는 경우, 갱신 거부는 해고와 동일하게 취급됩니다. 실업급여와 별개로 <strong>부당해고 구제신청</strong>도 함께 검토하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">2년 초과 사용 → 무기계약 간주 | 갱신 기대권 → 갱신 거부 시 부당해고 가능</blockquote>',
      },
    ],
    cases: [
      {
        title: '근로조건 변경으로 인한 갱신 거부를 정당한 이직으로 인정한 판례',
        summary:
          '서울행정법원 2014구합2270 사건(서울행법, 2014.7.3 선고)에서 법원은 부서 이동으로 임금이 46% 이상 하락하는 경우 퇴직한 근로자에 대해, 실질적 근로조건 저하로 고용보험 시행규칙상 정당한 이직 사유에 해당한다고 판시했습니다.',
        takeaway:
          '비슷한 상황이라면 계약 갱신 시 근로조건이 현저히 불리하게 변경되는 경우, 갱신을 거부하더라도 비자발적 이직으로 인정받아 실업급여를 받을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '1년 미만 계약직도 실업급여를 받을 수 있나요?',
        answer: '<strong>피보험단위기간 180일 이상이면 가능합니다.</strong> 현재 직장 근무기간이 180일 미만이더라도, 이전 직장의 고용보험 가입기간과 합산하여 180일을 충족하면 수급 가능합니다.',
      },
      {
        question: '회사가 계약 갱신을 제안했는데 급여가 줄어든 경우는?',
        answer: '갱신 제안의 근로조건이 <strong>이전보다 현저히 불리</strong>한 경우(임금 삭감, 근무지 원거리 변경 등)에는 갱신을 거부하더라도 비자발적 이직으로 인정될 수 있습니다. 조건 변경 내용을 서면으로 보관하세요.',
      },
      {
        question: '파견직도 파견계약 만료 시 실업급여를 받을 수 있나요?',
        answer: '<strong>파견직도 고용보험에 가입되어 있다면 실업급여 수급이 가능합니다.</strong> 파견계약 만료는 비자발적 이직에 해당하며, 피보험기간 요건 등을 충족하면 됩니다.',
      },
      {
        question: '계약만료 후 바로 다른 회사에 취업하면 실업급여를 못 받나요?',
        answer: '새 직장에 취업하면 실업급여 대신 <strong>조기재취업수당</strong>을 받을 수 있습니다. 소정급여일수의 절반 이상을 남기고 재취업하면, 남은 급여의 절반을 일시금으로 받습니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/unemployment',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '실업급여 진단', href: '/diagnosis/unemployment' },
      { label: '실업급여 수급 요건 확인', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '실업급여 구직활동 인정 절차', href: '/guide/unemployment/job-search-activity-recognition-procedure' },
      { label: '부당해고 당했을 때 먼저 할 3가지', href: '/guide/dismissal/unfair-dismissal-first-steps' },
    ],
  },
];
