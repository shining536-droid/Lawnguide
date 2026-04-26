import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 1. settlement-amount-calculation: 이 페이지는 [교통사고 피해자]의 [합의금 산정 단계]에서 [적정 금액 계산과 항목별 청구 준비]를 돕는 페이지다.
// 2. settlement-vs-lawsuit-comparison: 이 페이지는 [교통사고 피해자]의 [보상 방법 선택 단계]에서 [합의와 소송의 장단점 비교 판단]을 돕는 페이지다.
// 3. unpaid-wage-settlement-delayed-interest: 이 페이지는 [임금체불 피해 근로자]의 [합의금 협상 단계]에서 [적정 합의금 산정과 지연이자 청구]를 돕는 페이지다.
// 4. unpaid-wage-evidence-checklist: 이 페이지는 [임금체불 피해 근로자]의 [신고 전 준비 단계]에서 [증거 수집과 자료 정리]를 돕는 페이지다.
// 5. does-filing-lead-to-immediate-arrest: 이 페이지는 [스토킹 피해자]의 [고소 검토 단계]에서 [고소 후 구속 여부와 현실적 절차 이해]를 돕는 페이지다.

export const spokesBatch17_21to25: SpokePage[] = [
  // ─── 1. 교통사고 합의금 적정 금액 산정법 (수치기한형) ───
  {
    domain: 'traffic-accident',
    slug: 'settlement-amount-calculation',
    keyword: '교통사고 합의금 적정 금액 산정법',
    questionKeyword: '교통사고 합의금은 어떻게 계산하나요?',
    ctaKeyword: '교통사고 합의금 계산',
    type: '수치기한형',
    perspective: '피해자',
    meta: {
      title: '교통사고 합의금 5가지 항목별 적정 금액 산정법 | 로앤가이드',
      description:
        '교통사고를 당했는데 보험사가 제시한 합의금이 적정한지 모르겠다면, 항목별 산정 기준과 실제 청구 금액을 지금 확인하세요.',
    },
    intro:
      '교통사고 후 보험사에서 합의금을 제시받았습니다. 그런데 이 금액이 적정한지, 더 받을 수 있는 건 아닌지 판단이 어렵습니다. 치료비 외에도 위자료, 일실수입, 향후 치료비 등 여러 항목이 합의금에 포함되는데, 각 항목의 산정 기준을 모르면 보험사 제안을 그대로 수용하게 됩니다. 항목별 적정 금액 산정법을 정리해드립니다.',
    timelineSteps: [
      '손해 항목 파악',
      '항목별 금액 산정',
      '보험사 제시액 비교',
      '추가 청구·합의',
    ],
    sections: [
      {
        title: '첫째, 교통사고 합의금을 구성하는 5가지 항목을 파악하세요',
        content:
          '<p><strong style="color:#1e3a5f">합의금은 단일 금액이 아니라 5가지 손해 항목의 합산입니다</strong></p>\n<p>교통사고 합의금은 크게 <strong>치료비</strong>, <strong>휴업손해(일실수입)</strong>, <strong>위자료</strong>, <strong>향후 치료비</strong>, <strong>기타 손해</strong>로 구성됩니다. 보험사가 제시하는 금액은 이 항목들을 합산한 것이지만, 각 항목의 산정 근거를 공개하지 않는 경우가 많습니다.</p>\n<p>따라서 합의 전에 가능한 한 <strong>항목별 내역서</strong>를 요청하세요. 내역서 없이 총액만 제시하면 어떤 항목이 과소 산정됐는지 알 수 없습니다. 내역서를 받으면 각 항목을 아래 기준으로 직접 검증할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 합의금 = 치료비 + 휴업손해 + 위자료 + 향후 치료비 + 기타 손해 → 항목별 내역서를 가능한 한 요청</blockquote>',
      },
      {
        title: '둘째, 치료비와 휴업손해를 정확히 계산하세요',
        content:
          '<p><strong style="color:#1e3a5f">실제 지출한 치료비 전액과 입증 가능한 소득 손실을 청구할 수 있습니다</strong></p>\n<p><strong>치료비</strong>는 진료비, 약제비, 입원비, 통원 교통비, 보조기구 비용까지 포함됩니다. 건강보험이 적용된 본인부담금뿐 아니라 <strong>비급여 항목</strong>(MRI, 도수치료 등)도 청구 대상입니다. 진료비 세부 내역서와 영수증을 모두 보관하세요.</p>\n<p><strong>휴업손해</strong>는 사고로 일하지 못한 기간의 소득 손실입니다. 직장인은 <strong>급여명세서 기준</strong>으로, 자영업자는 <strong>소득금액증명원</strong>으로, 무직자는 <strong>일용근로자 임금(2024년 기준 일 약 15만 원)</strong>으로 산정합니다. 입원 기간은 100%, 통원 기간은 보통 <strong>85%</strong>를 인정받습니다.</p>\n<p style="margin-top:12px;padding:12px 16px;background:linear-gradient(135deg,#fff8e1,#fff3c4);border-radius:8px;border-left:4px solid #f9a825;font-weight:600;color:#5d4037">지금 내 상황에서 받을 수 있는 합의금이 궁금하다면 → <a href="/diagnosis/traffic-accident" style="color:#1565c0;text-decoration:underline">AI 무료 진단 받기</a></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 치료비 영수증 전부 보관 + 비급여 항목 확인 + 휴업기간 소득 자료 준비</blockquote>',
      },
      {
        title: '셋째, 위자료는 상해등급에 따라 산정 기준이 다릅니다',
        content:
          '<p><strong style="color:#1e3a5f">자배법 시행령 기준 상해등급 1~14급별 위자료가 정해져 있습니다</strong></p>\n<p><strong>위자료</strong>는 정신적 고통에 대한 보상입니다. 자동차손해배상 보장법 시행령에 따라 상해등급별로 기본 위자료가 정해져 있으며, <strong>1급 3,000만 원</strong>에서 <strong>14급 30만 원</strong>까지 차이가 큽니다.</p>\n<p>보험사는 상해등급을 낮게 책정하는 경향이 있으므로, 주치의에게 <strong>정확한 진단서</strong>를 받아 등급이 적정한지 확인하세요. 특히 경추·요추 염좌(12~14급)와 골절(4~8급)은 위자료 차이가 수백만 원에 달합니다. 후유장해가 남은 경우 <strong>후유장해 위자료</strong>를 별도로 청구할 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">상해등급별 위자료: 1급 3,000만 원 ~ 14급 30만 원 | 후유장해 위자료 별도 청구 가능</blockquote>',
      },
      {
        title: '넷째, 향후 치료비와 일실수입은 장기 손해를 반영합니다',
        content:
          '<p><strong style="color:#1e3a5f">치료가 끝나지 않았다면 향후 치료비를 포함하여 합의해야 합니다</strong></p>\n<p><strong>향후 치료비</strong>는 현재 치료가 종료되지 않았거나 추가 수술이 예상되는 경우에 청구합니다. 주치의의 <strong>향후 치료 소견서</strong>에 예상 치료 기간과 비용을 기재받으세요. 보험사는 이 항목을 누락시키는 경우가 많으므로 가능한 한 확인하세요.</p>\n<p><strong>일실수입</strong>은 후유장해로 인한 미래 소득 감소분입니다. 장해율, 현재 나이, 가동 연한(통상 <strong>만 65세</strong>)을 기준으로 계산합니다. 예를 들어 35세 직장인이 노동능력 상실률 20%를 인정받으면, 잔여 가동 연한 30년간 소득의 20%를 현재 가치로 환산하여 청구합니다. 이 금액은 수천만 원에서 수억 원까지 차이가 납니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">향후 치료비 + 일실수입 = 장기 손해 → 합의 전 가능한 한 포함 여부 확인</blockquote>',
      },
      {
        title: '다섯째, 보험사 제시 금액과 직접 산정 금액을 비교하세요',
        content:
          '<p><strong style="color:#1e3a5f">보험사 최초 제시액은 적정 금액의 50~70% 수준인 경우가 많습니다</strong></p>\n<p>각 항목을 직접 산정한 후 보험사 제시액과 비교하세요. 실무적으로 보험사 최초 제시 금액은 적정 보상액보다 <strong>30~50% 낮은 경우</strong>가 일반적입니다. 특히 위자료와 일실수입에서 차이가 크게 발생합니다.</p>\n<p>합의 전 확인 사항: (1) 항목별 내역서를 받았는지, (2) 치료가 완전히 종료되었는지, (3) 후유장해 진단이 필요한지, (4) 과실비율이 적정한지. 이 4가지 중 하나라도 미확인 상태라면 <strong>합의서에 서명하지 마세요</strong>. 한 번 합의하면 추가 청구가 원칙적으로 불가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">합의 전 4대 체크: 항목별 내역서 확인 + 치료 종료 여부 + 후유장해 진단 + 과실비율 적정성</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2023다297141 사건 (2025.06.26 선고)',
        summary:
          '이 사건에서 대법원은 산업재해 손해배상 산정 시 보험급여와 같은 성질의 손해액에서 먼저 보험급여를 공제한 다음 과실상계를 해야 한다고 판시했습니다. 교통사고에서도 손해배상액 산정 순서가 결과에 큰 영향을 미칩니다.',
        takeaway:
          '합의금 산정 시 각 손해 항목을 정확히 파악하고, 과실비율 적용 전후의 금액을 모두 확인하세요. 산정 순서에 따라 수백만 원 차이가 발생할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '보험사가 제시한 합의금이 적정한지 어떻게 알 수 있나요?',
        answer:
          '<strong>항목별 내역서</strong>를 요청한 뒤 치료비, 휴업손해, 위자료, 향후 치료비, 일실수입 각각의 산정 근거를 확인하세요. 하나라도 누락되었거나 과소 산정된 항목이 있다면 적정 금액이 아닙니다.',
      },
      {
        question: '치료가 아직 끝나지 않았는데 합의해도 되나요?',
        answer:
          '<strong>치료가 종료되지 않은 상태에서 합의하면 안 됩니다.</strong> 치료 종결 후 후유장해 진단까지 받은 뒤에 합의해야 향후 치료비와 일실수입을 제대로 청구할 수 있습니다.',
      },
      {
        question: '자영업자인데 휴업손해는 어떻게 계산하나요?',
        answer:
          '<strong>소득금액증명원</strong>과 부가가치세 과세표준증명원으로 월 소득을 입증합니다. 소득 입증이 어려우면 통계청 <strong>한국표준직업분류</strong> 기준 동종 업종 평균 소득으로 산정할 수 있습니다.',
      },
      {
        question: '합의 후에 추가 청구가 가능한 경우가 있나요?',
        answer:
          '합의 당시 <strong>예측할 수 없었던 후유증</strong>이 발생한 경우에 한해 추가 청구가 가능합니다. 다만 이를 입증하려면 합의 당시 의료 기록과 이후 새로 발생한 증상 간의 차이를 의학적으로 증명해야 합니다.',
      },
      {
        question: '과실비율이 합의금에 얼마나 영향을 미치나요?',
        answer:
          '과실비율은 <strong>총 손해액에 직접 곱해집니다</strong>. 예를 들어 총 손해액 5,000만 원에 내 과실 30%라면 합의금은 3,500만 원이 됩니다. 과실비율 10% 차이로 수백만 원이 달라지므로 가능한 한 다투세요.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/traffic-accident',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '교통사고 진단', href: '/diagnosis/traffic-accident' },
      {
        label: '교통사고 합의 체크리스트',
        href: '/guide/traffic-accident/accident-settlement-checklist',
      },
      {
        label: '교통사고 과실 다툼 증거 수집법',
        href: '/guide/traffic-accident/traffic-accident-fault-dispute-evidence',
      },
      {
        label: '교통사고 후유증 추가 치료비 청구',
        href: '/guide/traffic-accident/traffic-accident-aftereffect-treatment-claim',
      },
    ],
  },

  // ─── 2. 합의 vs 소송 교통사고 보상 비교 (비교형) ───
  {
    domain: 'traffic-accident',
    slug: 'settlement-vs-lawsuit-comparison',
    keyword: '합의 vs 소송 교통사고 보상 비교',
    questionKeyword: '교통사고 합의와 소송 중 어떤 게 유리한가요?',
    ctaKeyword: '교통사고 합의 소송 비교',
    type: '비교형',
    perspective: '피해자',
    meta: {
      title: '교통사고 합의 vs 소송 보상금 3가지 핵심 비교 | 로앤가이드',
      description:
        '교통사고 보상을 합의로 받을지 소송으로 갈지 고민이라면, 금액·기간·비용 3가지 기준으로 비교해 판단하세요. 지금 확인하세요.',
    },
    intro:
      '보험사가 합의금을 제시했지만 턱없이 낮습니다. 소송을 하면 더 받을 수 있다고 하는데, 시간과 비용이 걱정됩니다. 합의와 소송, 어떤 선택이 내 상황에 유리한지 금액, 소요 기간, 비용 3가지 기준으로 비교해보겠습니다.',
    timelineSteps: ['합의 제안 검토', '합의·소송 비교', '방법 결정'],
    sections: [
      {
        title: '첫째, 합의와 소송의 보상 금액 차이를 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">소송 보상금은 합의금의 1.3~2배 수준인 경우가 많습니다</strong></p>\n<p><strong>합의</strong>는 보험사 기준으로 산정되므로 항목별 금액이 보수적입니다. 특히 위자료와 일실수입에서 보험사 내부 기준이 법원 인정 금액보다 낮은 경우가 대부분입니다. <strong>소송</strong>에서는 법원 감정을 통해 객관적인 장해율과 일실수입이 산정되므로 합의금 대비 <strong>30~100%</strong> 높은 보상을 받는 사례가 실무에서 흔합니다.</p>\n<p>다만 소송에서도 과실비율이 높거나 후유장해가 경미하면 합의금보다 크게 늘어나지 않을 수 있습니다. <strong>손해액이 3,000만 원 이상</strong>이거나 보험사 제시액과 직접 산정액의 차이가 <strong>30% 이상</strong>일 때 소송의 실익이 큽니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">소송 실익 기준: 손해액 3,000만 원+ 또는 보험사 제시액 대비 30%+ 차이</blockquote>',
      },
      {
        title: '둘째, 소요 기간과 정신적 부담을 비교하세요',
        content:
          '<p><strong style="color:#1e3a5f">합의는 1~3개월, 소송은 6개월~2년이 걸립니다</strong></p>\n<p><strong>합의</strong>는 보험사와 협상만으로 진행되므로 빠르면 <strong>1개월</strong>, 길어도 <strong>3개월</strong> 내에 마무리됩니다. 서류 제출과 전화 협상이 주된 과정이라 일상생활에 큰 지장이 없습니다.</p>\n<p><strong>소송</strong>은 소장 제출부터 판결까지 <strong>6개월~2년</strong>이 소요됩니다. 법원 감정, 변론기일 참석 등이 필요하고, 1심 판결 후 항소가 진행되면 추가 1년이 걸릴 수 있습니다. 다만 소송 중에도 <strong>조정</strong>이나 <strong>화해권고결정</strong>으로 조기 종결되는 비율이 약 <strong>40%</strong>입니다.</p>\n<p style="margin-top:12px;padding:12px 16px;background:linear-gradient(135deg,#fff8e1,#fff3c4);border-radius:8px;border-left:4px solid #f9a825;font-weight:600;color:#5d4037">합의와 소송 중 어떤 게 유리한지 확인하려면 → <a href="/diagnosis/traffic-accident" style="color:#1565c0;text-decoration:underline">AI 무료 진단 받기</a></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">합의: 1~3개월 | 소송: 6개월~2년(조정 조기 종결 약 40%)</blockquote>',
      },
      {
        title: '셋째, 비용 구조가 다르므로 실수령액을 계산하세요',
        content:
          '<p><strong style="color:#1e3a5f">합의는 비용이 거의 없고, 소송은 변호사 비용 + 소송비용이 발생합니다</strong></p>\n<p><strong>합의</strong>는 별도 비용 없이 보험사 제시 금액을 받으므로 <strong>실수령액 = 합의금</strong>입니다. <strong>소송</strong>은 인지대·송달료(수만~수십만 원), 감정비용(50~150만 원), 변호사 수임료(통상 착수금 200~500만 원 + 성공보수 10~15%)가 발생합니다.</p>\n<p>예시로 비교하면: 합의금 2,000만 원 vs 소송 판결금 3,500만 원(변호사 비용 400만 원 + 소송비용 100만 원 공제 시 실수령 3,000만 원). 이 경우 소송이 <strong>1,000만 원 유리</strong>합니다. 하지만 합의금 2,000만 원 vs 소송 판결금 2,500만 원이면 비용 차감 후 실수령 2,000만 원으로 <strong>합의가 유리</strong>합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">판단 기준: (소송 예상 판결금 - 변호사비 - 소송비용) > 합의금이면 소송 실익 있음</blockquote>',
      },
      {
        title: '넷째, 소송이 유리한 상황과 합의가 유리한 상황을 구분하세요',
        content:
          '<p><strong style="color:#1e3a5f">후유장해가 있거나 보험사가 과실을 과다 주장하면 소송이 유리합니다</strong></p>\n<p><strong>소송이 유리한 경우</strong>: (1) 후유장해 등급이 확정되었고 보험사 제시 보상금이 법원 기준보다 낮은 경우, (2) 과실비율에 대한 다툼이 있는 경우, (3) 보험사가 치료비 지급을 중단한 경우, (4) 피해 금액이 3,000만 원 이상인 경우.</p>\n<p><strong>합의가 유리한 경우</strong>: (1) 경상(경추 염좌 등)으로 후유장해가 없는 경우, (2) 과실비율에 다툼이 없는 경우, (3) 보험사 제시액이 직접 산정 금액의 80% 이상인 경우, (4) 빠른 보상이 필요한 경우.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">소송 적합: 후유장해 있음 + 과실 다툼 + 피해 3,000만 원+ | 합의 적합: 경상 + 과실 합의 + 제시액 80%+</blockquote>',
      },
      {
        title: '다섯째, 합의 전 소송 가능성을 알리면 협상력이 높아집니다',
        content:
          '<p><strong style="color:#1e3a5f">소송 의사를 보이면 보험사가 합의금을 올려주는 경우가 많습니다</strong></p>\n<p>실무에서 보험사는 소송비용과 시간을 아끼려 합니다. 따라서 피해자가 소송 의사를 명확히 전달하면 <strong>합의금을 20~40% 증액</strong>하여 재제시하는 경우가 흔합니다. 이때 핵심은 단순히 "소송하겠다"가 아니라, <strong>직접 산정한 손해 내역서</strong>를 함께 제출하는 것입니다.</p>\n<p>변호사 선임 전에 직접 항목별 손해액을 산정해보고, 보험사 제시액과의 차이를 정리한 문서를 보내세요. 이 과정만으로도 합의금이 올라가는 경우가 많습니다. 그래도 합의가 안 되면 그때 소송을 진행해도 늦지 않습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">전략: 손해 내역서 직접 작성 → 보험사에 제출 → 소송 의사 표시 → 합의금 재협상</blockquote>',
      },
    ],
    comparison: {
      title: '교통사고 합의 vs 소송 핵심 비교표',
      headers: ['비교 항목', '합의', '소송'],
      rows: [
        {
          label: '보상 금액',
          values: ['보험사 내부 기준 산정', '법원 기준 산정 (합의 대비 1.3~2배)'],
        },
        {
          label: '소요 기간',
          values: ['1~3개월', '6개월~2년'],
        },
        {
          label: '비용',
          values: ['없음', '변호사비 + 소송비용 (500~700만 원+)'],
        },
        {
          label: '과실비율 다툼',
          values: ['보험사 기준 적용', '법원이 최종 결정'],
        },
        {
          label: '후유장해 반영',
          values: ['보험사 자문 기준', '법원 감정인 감정'],
        },
        {
          label: '추가 청구',
          values: ['합의 후 원칙적 불가', '판결 확정 전까지 청구 변경 가능'],
        },
      ],
    },
    cases: [
      {
        title: '대법원 2022다225897 사건 (2025.10.16 선고)',
        summary:
          '이 사건에서 대법원은 보험금 지급에 있어 피해자에게 발생한 실제 손해액을 기준으로 보상 범위를 산정해야 한다고 판시했습니다. 보험사의 일방적 내부 기준이 아닌 실질적 손해가 보상의 기준이 됩니다.',
        takeaway:
          '보험사 합의금이 낮다고 느껴진다면, 법원 기준으로 손해액을 다시 산정해보세요. 소송에서는 보험사 기준이 아닌 실제 손해에 기반한 보상이 이루어집니다.',
      },
    ],
    faq: [
      {
        question: '소송하면 보험사가 불이익을 주나요?',
        answer:
          '<strong>불이익을 줄 수 없습니다.</strong> 보험사는 법적 의무에 따라 보상해야 하며, 소송을 이유로 치료비 지급을 중단하거나 불이익을 주는 행위는 보험업법 위반에 해당할 소지가 있습니다.',
      },
      {
        question: '소송 중에도 합의할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 소송 진행 중에도 양측 합의로 종결할 수 있으며, 법원이 <strong>화해권고결정</strong>을 내리기도 합니다. 실제로 교통사고 소송의 약 40%가 판결 전에 조정 또는 화해로 종결됩니다.',
      },
      {
        question: '변호사 없이 직접 소송할 수 있나요?',
        answer:
          '민사소송은 <strong>본인 소송</strong>이 가능합니다. 다만 손해액 산정, 의학 감정, 과실비율 다툼 등 전문 지식이 필요하므로, 피해 금액이 1,000만 원 이상이면 변호사 선임을 권합니다.',
      },
      {
        question: '소송 비용은 누가 부담하나요?',
        answer:
          '원칙적으로 <strong>패소한 쪽</strong>이 소송비용을 부담합니다. 다만 변호사 보수는 대한변호사협회 기준 범위 내에서만 상대방에게 청구할 수 있어, 실제 수임료 전액 회수는 어렵습니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/traffic-accident',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '교통사고 진단', href: '/diagnosis/traffic-accident' },
      {
        label: '교통사고 합의금 산정법',
        href: '/guide/traffic-accident/settlement-amount-calculation',
      },
      {
        label: '교통사고 합의 체크리스트',
        href: '/guide/traffic-accident/accident-settlement-checklist',
      },
      {
        label: '교통사고 과실비율 이의절차',
        href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute',
      },
    ],
  },

  // ─── 3. 임금체불 합의금 적정 금액과 지연이자 (수치기한형) ───
  {
    domain: 'wage',
    slug: 'unpaid-wage-settlement-delayed-interest',
    keyword: '임금체불 합의금 적정 금액과 지연이자',
    questionKeyword: '임금체불 합의금과 지연이자는 얼마나 받을 수 있나요?',
    ctaKeyword: '임금체불 합의금 지연이자',
    type: '수치기한형',
    perspective: '피해자',
    meta: {
      title: '임금체불 합의금 산정 + 지연이자 연 20% 계산법 | 로앤가이드',
      description:
        '밀린 월급을 합의로 받으려는데 적정 금액을 모르겠다면, 원금에 지연이자 연 20%까지 포함한 청구 방법을 지금 확인하세요.',
    },
    intro:
      '회사가 3개월째 월급을 주지 않고 있습니다. 노동청에 신고하면 시간이 오래 걸린다고 해서 합의를 먼저 시도하려 합니다. 그런데 밀린 월급만 받으면 되는 건지, 지연이자까지 청구할 수 있는 건지 모르겠습니다. 임금체불 합의금 산정 기준과 지연이자 계산법을 정리해드립니다.',
    timelineSteps: [
      '체불 금액 확인',
      '지연이자 계산',
      '합의금 산정',
      '합의·진정 결정',
    ],
    sections: [
      {
        title: '첫째, 체불 임금의 정확한 금액을 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">기본급뿐 아니라 수당, 퇴직금, 연차수당까지 포함해야 합니다</strong></p>\n<p>체불 임금에는 <strong>기본급</strong>은 물론 <strong>연장근로수당</strong>, <strong>야간근로수당</strong>, <strong>휴일근로수당</strong>, <strong>연차미사용수당</strong>, <strong>퇴직금</strong>이 모두 포함됩니다. 근로기준법 제36조에 따라 사용자는 근로자가 퇴직한 경우 <strong>14일 이내</strong>에 임금, 보상금, 그 밖의 모든 금품을 지급해야 합니다.</p>\n<p>급여명세서, 근로계약서, 취업규칙을 기준으로 체불 금액을 항목별로 정리하세요. 급여명세서가 없으면 <strong>계좌 입금 내역</strong>으로 실수령액을 역산할 수 있습니다. 항목별로 정리하면 합의 시 회사가 일부 항목만 인정하더라도 정확히 다툴 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체불 범위: 기본급 + 연장·야간·휴일수당 + 연차수당 + 퇴직금 → 항목별 금액 정리 필수</blockquote>',
      },
      {
        title: '둘째, 지연이자 연 20%를 반드시 청구하세요',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제37조에 따라 미지급 임금에 연 20%의 지연이자가 붙습니다</strong></p>\n<p>사용자가 퇴직 후 <strong>14일</strong>이 지나도 임금을 지급하지 않으면, 그 다음 날부터 <strong>연 20%의 지연이자</strong>가 발생합니다(근로기준법 제37조). 예를 들어 체불 임금이 900만 원이고 지급 기한 초과일이 6개월이면, 지연이자는 900만 원 × 20% × (6/12) = <strong>90만 원</strong>입니다.</p>\n<p>재직 중 체불의 경우에도 <strong>지급일 다음 날부터</strong> 지연이자가 발생합니다. 다만 5인 미만 사업장, 천재사변, 경영 악화(법원 회생절차 개시 등)에는 지연이자가 적용되지 않을 수 있으니 확인이 필요합니다.</p>\n<p style="margin-top:12px;padding:12px 16px;background:linear-gradient(135deg,#fff8e1,#fff3c4);border-radius:8px;border-left:4px solid #f9a825;font-weight:600;color:#5d4037">내 체불 임금과 지연이자를 계산해보려면 → <a href="/diagnosis/wage" style="color:#1565c0;text-decoration:underline">AI 무료 진단 받기</a></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">지연이자 계산: 체불 원금 × 20% × (지연일수 / 365) → 퇴직 후 14일 경과 시점부터 기산</blockquote>',
      },
      {
        title: '셋째, 합의금은 원금 + 지연이자 + 위로금으로 산정하세요',
        content:
          '<p><strong style="color:#1e3a5f">합의금에 지연이자와 정신적 손해를 포함해야 적정 금액입니다</strong></p>\n<p>임금체불 합의금의 적정 범위는 <strong>체불 원금 + 지연이자 + 위로금(원금의 10~30%)</strong>입니다. 위로금은 법적 의무는 아니지만, 노동청 진정이나 소송 시 사업주에게 <strong>형사처벌(3년 이하 징역 또는 3,000만 원 이하 벌금)</strong>이 가능하므로 합의 과정에서 협상력으로 작용합니다.</p>\n<p>예시: 체불 원금 900만 원 + 지연이자 90만 원(6개월) + 위로금 180만 원(원금의 20%) = <strong>합의금 1,170만 원</strong>. 사업주가 위로금을 거부하더라도 최소한 <strong>원금 + 지연이자</strong>는 가능한 한 받으세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">적정 합의금 = 체불 원금 + 지연이자(연 20%) + 위로금(원금의 10~30%)</blockquote>',
      },
      {
        title: '넷째, 합의서 작성 시 반드시 포함해야 할 조항이 있습니다',
        content:
          '<p><strong style="color:#1e3a5f">지급 기한, 불이행 시 조치, 추가 청구권 포기 범위를 명시하세요</strong></p>\n<p>합의서에는 다음 5가지를 가능한 한 포함하세요. (1) <strong>합의금 총액</strong>과 항목별 내역, (2) <strong>지급 기한</strong>(가급적 합의일로부터 7일 이내), (3) 기한 내 미지급 시 <strong>노동청 진정 및 민사소송 진행</strong> 조항, (4) 합의금 <strong>수령 방법</strong>(계좌이체), (5) 근로자의 <strong>추가 청구 포기 범위</strong>(합의 대상 임금에 한정).</p>\n<p>분할 지급은 가급적 피하세요. 불가피하게 분할 합의할 경우 <strong>1회라도 미지급 시 잔액 전액 즉시 이행</strong> 조항을 넣으세요. 합의서는 공증받으면 불이행 시 별도 소송 없이 바로 <strong>강제집행</strong>이 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">합의서 필수 조항: 금액·내역 + 지급기한 + 미지급 시 조치 + 수령방법 + 포기범위</blockquote>',
      },
      {
        title: '다섯째, 합의가 안 되면 노동청 진정을 즉시 제기하세요',
        content:
          '<p><strong style="color:#1e3a5f">임금체불 진정은 퇴직일로부터 3년 이내에 해야 합니다</strong></p>\n<p>합의가 결렬되면 <strong>고용노동부(관할 지방노동청)</strong>에 임금체불 진정을 제기하세요. 진정은 온라인(고용노동부 민원마당)으로도 가능하며, 접수 후 <strong>20일 이내</strong>에 근로감독관이 사업주를 조사합니다. 근로감독관이 체불 사실을 확인하면 사업주에게 <strong>시정 지시</strong>를 내리고, 불이행 시 <strong>형사 고발</strong>합니다.</p>\n<p>임금채권의 소멸시효는 <strong>3년</strong>입니다(근로기준법 제49조). 퇴직금은 퇴직일 다음 날부터, 임금은 각 지급일 다음 날부터 3년이므로, 체불 기간이 길수록 시효가 지난 부분이 생길 수 있습니다. <strong>가능한 빨리 진정하세요.</strong></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">노동청 진정: 온라인 접수 가능 + 20일 내 조사 + 시효 3년 주의</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2022다257238 사건 (2025.07.18 선고)',
        summary:
          '이 사건에서 대법원은 격일제 근무 형태에서도 1일 8시간을 초과하는 연장근로시간은 최저임금 산정 시간에 포함되지 않는다고 판시했습니다. 이는 체불 임금 계산 시 소정근로시간과 연장근로시간의 구분이 중요하다는 점을 확인한 판례입니다.',
        takeaway:
          '체불 금액을 산정할 때 기본급과 수당을 정확히 구분하세요. 연장·야간·휴일 수당은 통상임금의 50% 이상을 가산해서 계산해야 하며, 이를 누락하면 합의금이 줄어듭니다.',
      },
    ],
    faq: [
      {
        question: '재직 중에도 지연이자를 받을 수 있나요?',
        answer:
          '<strong>받을 수 있습니다.</strong> 재직 중이라도 정해진 지급일을 넘기면 그 다음 날부터 연 20%의 지연이자가 발생합니다. 다만 5인 미만 사업장이나 회생절차 중인 기업은 예외일 수 있습니다.',
      },
      {
        question: '사업주가 돈이 없다고 하면 어떻게 하나요?',
        answer:
          '사업주의 재산이 없어도 <strong>체당금 제도</strong>를 활용할 수 있습니다. 고용노동부에서 체불 임금 중 최대 <strong>1,000만 원</strong>까지 근로복지공단이 대신 지급하고, 사업주에게 구상합니다.',
      },
      {
        question: '퇴직금도 지연이자 대상인가요?',
        answer:
          '<strong>대상입니다.</strong> 퇴직금도 퇴직일로부터 14일 이내에 지급해야 하며, 기한을 넘기면 연 20% 지연이자가 적용됩니다. 퇴직금은 금액이 크므로 지연이자도 상당합니다.',
      },
      {
        question: '합의 없이 바로 소송할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 임금청구소송은 합의나 노동청 진정 없이도 바로 제기할 수 있습니다. 체불 금액이 3,000만 원 이하면 <strong>소액사건</strong>으로 신속 처리됩니다.',
      },
      {
        question: '합의할 때 지연이자를 포기하면 안 되나요?',
        answer:
          '지연이자는 <strong>법정 권리</strong>이므로 포기할 수는 있지만 권하지 않습니다. 사업주에게 형사처벌 가능성이 있으므로, 최소한 원금 + 지연이자는 받는 것이 적정한 합의입니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/wage',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '임금체불 진단', href: '/diagnosis/wage' },
      {
        label: '임금체불 진정서 작성법',
        href: '/guide/wage/unpaid-wage-petition-writing',
      },
      {
        label: '임금체불 어디서부터 시작해야 하나',
        href: '/guide/wage/unpaid-wage-where-to-start',
      },
      {
        label: '임금체불 소멸시효 완벽 정리',
        href: '/guide/wage/unpaid-wage-statute-of-limitations',
      },
    ],
  },

  // ─── 4. 임금체불 증거 수집 체크리스트 (체크리스트형) ───
  {
    domain: 'wage',
    slug: 'unpaid-wage-evidence-checklist',
    keyword: '임금체불 증거 수집 체크리스트',
    questionKeyword: '임금체불 신고하려면 어떤 증거를 모아야 하나요?',
    ctaKeyword: '임금체불 증거 체크리스트',
    type: '체크리스트형',
    perspective: '피해자',
    meta: {
      title: '임금체불 증거 수집 체크리스트 7가지 필수 자료 | 로앤가이드',
      description:
        '임금체불로 신고하려는데 어떤 증거를 준비해야 할지 모르겠다면, 근로감독관이 확인하는 7가지 필수 자료를 지금 확인하세요.',
    },
    intro:
      '월급이 3개월째 밀렸습니다. 노동청에 신고하려는데 무슨 증거를 가져가야 하는지 모르겠습니다. 근로계약서도 안 썼고 급여명세서도 제대로 받은 적이 없습니다. 증거가 없으면 신고해도 소용없는 건 아닌지 걱정입니다. 근로감독관이 실제로 확인하는 증거 7가지를 체크리스트로 정리해드립니다.',
    timelineSteps: [
      '근로관계 증거 확보',
      '임금 지급 기록 확보',
      '체불 사실 입증 자료 정리',
    ],
    sections: [
      {
        title: '첫째, 근로관계를 증명하는 서류를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">근로계약서가 없어도 근로관계를 증명할 수 있습니다</strong></p>\n<p>가장 확실한 증거는 <strong>근로계약서</strong>입니다. 하지만 근로계약서를 작성하지 않은 경우가 많습니다(이 자체가 근로기준법 제17조 위반으로 500만 원 이하 벌금). 근로계약서가 없다면 다음 자료로 대체하세요.</p>\n<p>(1) <strong>4대 보험 가입 확인서</strong>(국민연금관리공단에서 발급), (2) <strong>출퇴근 기록</strong>(출입카드, 지문인식 기록, 출퇴근 시간 문자·카톡), (3) <strong>업무 지시 메시지</strong>(카카오톡, 이메일, 사내 메신저), (4) <strong>명함이나 사원증</strong>. 이 중 2개 이상 확보하면 근로관계 입증이 가능합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 근로계약서 또는 4대보험 가입확인서 + 출퇴근 기록 + 업무지시 메시지 중 2개 이상</blockquote>',
      },
      {
        title: '둘째, 임금 지급 기록과 체불 사실을 증명하세요',
        content:
          '<p><strong style="color:#1e3a5f">급여명세서와 통장 입금 내역이 핵심 증거입니다</strong></p>\n<p><strong>급여명세서</strong>가 있으면 약정 임금과 실제 지급액의 차이를 바로 확인할 수 있습니다. 급여명세서가 없으면 <strong>통장 입금 내역</strong>으로 매월 지급된 금액을 확인하세요. 최근 입금이 중단된 시점이 체불 시작일의 증거가 됩니다.</p>\n<p>추가로 확보하면 좋은 자료: (1) <strong>취업규칙 또는 급여 규정</strong>(회사 내부 서버나 공유 폴더에서 캡처), (2) <strong>연봉 협상 이메일</strong>이나 연봉 통보서, (3) 사업주가 "다음에 준다", "조금만 기다려라"라고 말한 <strong>녹취록이나 카카오톡</strong>. 사업주가 체불 사실 자체를 인정하는 대화는 결정적 증거가 됩니다.</p>\n<p style="margin-top:12px;padding:12px 16px;background:linear-gradient(135deg,#fff8e1,#fff3c4);border-radius:8px;border-left:4px solid #f9a825;font-weight:600;color:#5d4037">어떤 증거가 더 필요한지 확인하려면 → <a href="/diagnosis/wage" style="color:#1565c0;text-decoration:underline">AI 무료 진단 받기</a></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 급여명세서 + 통장 입금 내역 + 사업주 체불 인정 대화(카카오톡·녹취)</blockquote>',
      },
      {
        title: '셋째, 근로시간을 증명하는 자료를 별도로 정리하세요',
        content:
          '<p><strong style="color:#1e3a5f">연장·야간·휴일 근로수당을 받으려면 근로시간 증거가 필요합니다</strong></p>\n<p>기본급 체불만이 아니라 <strong>연장근로수당</strong>, <strong>야간근로수당</strong>, <strong>휴일근로수당</strong>도 체불 대상일 수 있습니다. 이를 청구하려면 실제 근무시간을 증명해야 합니다.</p>\n<p>(1) <strong>출퇴근 기록</strong>(회사 시스템, 지문인식, 교통카드), (2) <strong>야근·주말 출근 카카오톡</strong>(업무 지시나 보고 메시지 시간 확인), (3) <strong>CCTV 출입 기록</strong>(회사에 보존 요청 또는 근로감독관 조사 시 확보), (4) <strong>직접 기록한 근무일지</strong>(날짜, 출퇴근 시간, 업무 내용). 특히 직접 작성한 근무일지도 증거로 인정되므로, 지금부터라도 매일 기록하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">체크: 출퇴근 기록 + 야근 메시지 시간 + 직접 작성 근무일지(날짜·시간·업무)</blockquote>',
      },
      {
        title: '넷째, 증거를 체계적으로 정리하여 진정서에 첨부하세요',
        content:
          '<p><strong style="color:#1e3a5f">증거를 항목별로 정리하면 근로감독관의 조사가 빨라집니다</strong></p>\n<p>수집한 증거를 다음 <strong>7가지 항목</strong>으로 분류해서 정리하세요.</p>\n<p><strong>1. 근로계약서</strong>(없으면 대체 서류) | <strong>2. 4대보험 가입 확인서</strong> | <strong>3. 급여명세서</strong>(없으면 통장 입금 내역) | <strong>4. 체불 금액 산정표</strong>(항목별 월별 정리) | <strong>5. 출퇴근·근로시간 기록</strong> | <strong>6. 사업주 대화 기록</strong>(체불 인정·지급 약속) | <strong>7. 기타</strong>(취업규칙, 연봉통보서, 명함 등)</p>\n<p>진정서와 함께 이 자료를 <strong>목차가 있는 파일</strong>로 정리해서 제출하면 근로감독관이 사실 확인을 빠르게 할 수 있고, 사업주도 부인하기 어려워집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">7가지 증거 체크리스트: 근로계약서 + 4대보험 + 급여명세서 + 산정표 + 근로시간 + 대화기록 + 기타</blockquote>',
      },
      {
        title: '다섯째, 증거가 부족해도 포기하지 마세요',
        content:
          '<p><strong style="color:#1e3a5f">근로감독관은 사업주에게도 자료 제출을 요구합니다</strong></p>\n<p>증거가 부족하다고 신고를 포기할 필요는 없습니다. 근로기준법 제48조에 따라 <strong>근로감독관은 사업주에게 임금대장, 근로계약서, 출근부 등의 자료 제출을 요구</strong>할 수 있습니다. 사업주가 자료를 제출하지 않거나 거짓 자료를 제출하면 <strong>500만 원 이하의 과태료</strong>가 부과됩니다.</p>\n<p>또한 <strong>동료 근로자의 진술</strong>도 유력한 증거입니다. 같은 회사에서 함께 체불을 당한 동료가 있다면 공동으로 진정하면 입증력이 크게 높아집니다. 혼자 증거를 다 갖추지 못하더라도, 있는 증거만으로 진정하면 근로감독관이 나머지를 조사합니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">증거 부족해도 진정 가능 → 근로감독관이 사업주에게 자료 제출 요구 + 동료 진술 활용</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2021다248299 사건 (2026.01.29 선고)',
        summary:
          '이 사건에서 대법원은 목표 인센티브가 계속적·정기적으로 지급되고 사용자에게 지급의무가 있는 경우 근로의 대가인 임금에 해당한다고 판시했습니다. 임금의 범위를 넓게 인정한 판례로, 인센티브도 체불 대상이 될 수 있습니다.',
        takeaway:
          '기본급 외에 정기적으로 받던 인센티브나 성과급도 체불 대상일 수 있습니다. 급여명세서에서 매월 고정적으로 받던 항목을 모두 확인하고 청구 대상에 포함하세요.',
      },
    ],
    faq: [
      {
        question: '근로계약서를 안 썼으면 신고할 수 없나요?',
        answer:
          '<strong>신고할 수 있습니다.</strong> 근로계약서 미작성 자체가 사업주의 위법이며, 4대보험 가입 기록, 통장 입금 내역, 업무 지시 메시지 등으로 근로관계를 충분히 증명할 수 있습니다.',
      },
      {
        question: '카카오톡 대화도 증거로 인정되나요?',
        answer:
          '<strong>인정될 수 있습니다.</strong> 사업주가 "다음 달에 준다", "조금만 기다려라"라고 말한 카카오톡 대화는 체불 사실을 인정한 증거로 활용됩니다. <strong>스크린샷과 원본 파일</strong>을 모두 보관하세요.',
      },
      {
        question: '녹음은 불법 아닌가요?',
        answer:
          '대화 당사자가 직접 녹음하는 것은 <strong>합법</strong>입니다. 사업주와의 면담이나 전화 통화를 녹음할 수 있으며, 이 녹음 파일은 노동청 진정과 소송에서 증거로 사용할 수 있습니다.',
      },
      {
        question: '이미 퇴사했는데 증거를 어떻게 모으나요?',
        answer:
          '퇴사 후에도 <strong>4대보험 가입 이력</strong>은 국민연금공단에서 발급받을 수 있고, <strong>통장 입금 내역</strong>은 은행에서 조회할 수 있습니다. 재직 시 주고받은 카카오톡이나 이메일도 확인하세요.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/wage',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '임금체불 진단', href: '/diagnosis/wage' },
      {
        label: '임금체불 신고 절차 타임라인',
        href: '/guide/wage/unpaid-wage-report-procedure-timeline',
      },
      {
        label: '임금체불 진정서 작성법',
        href: '/guide/wage/unpaid-wage-petition-writing',
      },
      {
        label: '임금체불 합의금과 지연이자',
        href: '/guide/wage/unpaid-wage-settlement-delayed-interest',
      },
    ],
  },

  // ─── 5. 스토킹으로 고소하면 상대방이 바로 구속되나요 (Q&A형) ───
  {
    domain: 'stalking',
    slug: 'does-filing-lead-to-immediate-arrest',
    keyword: '스토킹 고소하면 바로 구속되나요',
    questionKeyword: '스토킹으로 고소하면 상대방이 바로 잡혀가나요?',
    ctaKeyword: '스토킹 고소 구속 여부',
    type: 'Q&A형',
    perspective: '피해자',
    meta: {
      title: '스토킹 고소하면 바로 구속? 3단계 절차 정리 | 로앤가이드',
      description:
        '스토킹을 신고했는데 상대방이 바로 잡혀가는지 궁금하다면, 긴급응급조치부터 구속까지 실제 절차를 지금 확인하세요.',
    },
    intro:
      '매일 집 앞에서 기다리고, 수십 통의 전화를 하는 사람이 있습니다. 경찰에 신고하면 바로 잡혀가는 건지, 아니면 또 풀려나서 보복할까 봐 두렵습니다. 스토킹 고소 후 실제로 어떤 절차가 진행되는지, 상대방은 언제 구속되는지 현실적인 흐름을 정리해드립니다.',
    timelineSteps: [
      '112 신고·긴급응급조치',
      '잠정조치(접근금지)',
      '수사·기소',
      '구속 여부 결정',
    ],
    sections: [
      {
        title: '첫째, 신고 즉시 긴급응급조치가 내려집니다',
        content:
          '<p><strong style="color:#1e3a5f">경찰은 신고 접수 즉시 긴급응급조치를 할 수 있습니다</strong></p>\n<p>스토킹처벌법 제3조에 따라 경찰관은 스토킹행위 신고를 받으면 즉시 현장에 출동하여 <strong>긴급응급조치</strong>를 할 수 있습니다. 긴급응급조치 내용: (1) <strong>접근 금지</strong>(피해자 주거·직장 100m 이내 접근 금지), (2) <strong>연락 금지</strong>(전화·문자·이메일·SNS 등), (3) <strong>분리 조치</strong>.</p>\n<p>긴급응급조치는 <strong>현장에서 즉시</strong> 가능하며, 별도의 법원 결정이 필요하지 않습니다. 다만 이 조치는 <strong>임시 조치</strong>이므로 구속과는 다릅니다. 상대방이 긴급응급조치를 위반하면 <strong>1년 이하의 징역 또는 1,000만 원 이하의 벌금</strong>에 처해집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">긴급응급조치: 신고 즉시 접근금지 + 연락금지 가능 | 위반 시 1년 이하 징역</blockquote>',
      },
      {
        title: '둘째, 법원의 잠정조치로 접근금지가 강화됩니다',
        content:
          '<p><strong style="color:#1e3a5f">검사가 법원에 잠정조치를 청구하면 최대 6개월 접근금지가 가능합니다</strong></p>\n<p>긴급응급조치 후 경찰은 검사에게 <strong>잠정조치</strong>를 신청하고, 검사가 법원에 청구합니다. 법원이 결정하는 잠정조치는 (1) <strong>접근 금지</strong>, (2) <strong>전기통신 이용 접근 금지</strong>, (3) <strong>유치장 또는 구치소 유치</strong>입니다.</p>\n<p>잠정조치 기간은 <strong>최대 2개월</strong>이며, 2회 연장하여 최대 <strong>6개월</strong>까지 유지됩니다. 특히 제3호 조치인 <strong>유치장·구치소 유치</strong>는 사실상 구속과 같은 효과를 가집니다. 잠정조치를 위반하면 <strong>2년 이하의 징역 또는 2,000만 원 이하의 벌금</strong>입니다.</p>\n<p style="margin-top:12px;padding:12px 16px;background:linear-gradient(135deg,#fff8e1,#fff3c4);border-radius:8px;border-left:4px solid #f9a825;font-weight:600;color:#5d4037">내 상황에서 잠정조치를 받을 수 있는지 확인하려면 → <a href="/diagnosis/stalking" style="color:#1565c0;text-decoration:underline">AI 무료 진단 받기</a></p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">잠정조치: 접근금지 최대 6개월 + 유치장 유치 가능 | 위반 시 2년 이하 징역</blockquote>',
      },
      {
        title: '셋째, 구속은 수사 후 검사의 영장 청구로 결정됩니다',
        content:
          '<p><strong style="color:#1e3a5f">고소 즉시 구속되는 것은 아니며, 수사 후 구속영장이 청구됩니다</strong></p>\n<p>스토킹 고소만으로 상대방이 바로 구속되지는 않습니다. 구속은 <strong>도주 우려</strong>, <strong>증거 인멸 우려</strong>, <strong>재범 우려</strong>가 있을 때 검사가 법원에 <strong>구속영장</strong>을 청구하고 법원이 발부해야 가능합니다.</p>\n<p>다만 스토킹범죄의 경우 <strong>재범 위험성</strong>이 높게 평가되므로 구속률이 다른 범죄보다 높은 편입니다. 특히 다음 경우 구속 가능성이 크게 높아집니다: (1) <strong>긴급응급조치나 잠정조치를 위반</strong>한 경우, (2) <strong>반복적으로 신고된 이력</strong>이 있는 경우, (3) <strong>폭행·협박</strong>이 동반된 경우, (4) <strong>피해자의 일상이 심각하게 침해</strong>된 경우.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">구속 요건: 도주·증거인멸·재범 우려 | 잠정조치 위반 시 구속 가능성 크게 상승</blockquote>',
      },
      {
        title: '넷째, 고소 전에 증거를 확보해야 구속까지 연결됩니다',
        content:
          '<p><strong style="color:#1e3a5f">반복성과 불안감을 입증하는 증거가 구속 결정에 영향을 줍니다</strong></p>\n<p>스토킹처벌법상 스토킹행위는 <strong>"반복적으로" 불안감 또는 공포심을 일으키는 행위</strong>입니다. 대법원 2025도36 판례에 따르면, 피해자가 실제로 인식하지 못했더라도 객관적으로 불안감을 일으키기에 충분하면 스토킹행위에 해당할 소지가 있습니다.</p>\n<p>확보해야 할 증거: (1) <strong>전화·문자·카카오톡 기록</strong>(일시, 횟수, 내용 캡처), (2) <strong>CCTV·블랙박스 영상</strong>(집·직장 앞 대기 장면), (3) <strong>112 신고 이력</strong>(반복 신고 기록), (4) <strong>목격자 진술</strong>, (5) <strong>진단서</strong>(불안장애, 수면장애 등). 증거가 많을수록 검사의 영장 청구와 법원의 구속 결정 가능성이 높아집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 증거: 반복된 연락 기록 + CCTV 영상 + 112 신고 이력 + 진단서</blockquote>',
      },
      {
        title: '다섯째, 처벌 수위와 보호 방법을 함께 확인하세요',
        content:
          '<p><strong style="color:#1e3a5f">스토킹범죄는 3년 이하의 징역 또는 3,000만 원 이하의 벌금입니다</strong></p>\n<p>스토킹처벌법 제18조에 따라 스토킹범죄(반복적 스토킹행위)는 <strong>3년 이하의 징역 또는 3,000만 원 이하의 벌금</strong>에 처할 수 있습니다. 흉기 등 위험한 물건을 사용하면 <strong>5년 이하의 징역 또는 5,000만 원 이하의 벌금</strong>으로 가중됩니다.</p>\n<p>고소와 별도로 피해자 보호를 위해 <strong>스마트워치 안심 서비스</strong>(경찰 112에 문의), <strong>주소지 변경 후 열람 제한</strong>(주민센터에서 신청), <strong>피해자 국선 변호사</strong>(검찰청에 신청) 등을 활용하세요. 특히 스마트워치는 위급 시 버튼 하나로 112에 자동 신고되므로, 접근금지 조치 기간 중 꼭 활용하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">처벌: 3년 이하 징역 / 흉기 사용 시 5년 이하 징역 | 피해자 보호: 스마트워치 + 주소 열람 제한 + 국선변호사</blockquote>',
      },
    ],
    cases: [
      {
        title: '대법원 2025도36 사건 (2025.10.30 선고)',
        summary:
          '이 사건에서 대법원은 스토킹처벌법상 스토킹행위가 객관적·일반적으로 볼 때 불안감 또는 공포심을 일으키기에 충분한 정도라면, 피해자가 현실적으로 인식하지 못했더라도 스토킹행위에 해당한다고 판시했습니다.',
        takeaway:
          '상대방이 "피해자가 모르니 스토킹이 아니다"라고 주장하더라도 법적으로 스토킹에 해당할 수 있습니다. 객관적으로 불안감을 줄 수 있는 행위라면 증거를 확보하고 신고하세요.',
      },
    ],
    faq: [
      {
        question: '신고하면 당일에 잡혀가나요?',
        answer:
          '당일 <strong>긴급응급조치</strong>(접근금지·연락금지)는 가능하지만, <strong>구속</strong>은 수사 후 영장 청구 절차를 거쳐야 합니다. 다만 현장에서 폭행 등이 동반되면 <strong>현행범 체포</strong>가 가능합니다.',
      },
      {
        question: '접근금지 조치를 받았는데 또 연락이 옵니다. 어떻게 하나요?',
        answer:
          '<strong>즉시 112에 신고하세요.</strong> 긴급응급조치 위반은 1년 이하 징역, 잠정조치 위반은 2년 이하 징역으로 처벌 대상으로 검토될 수 있습니다. 위반 증거(문자 캡처 등)를 가능한 한 보관하세요.',
      },
      {
        question: '고소를 취소하면 처벌이 안 되나요?',
        answer:
          '2023년 7월 법 개정 이후 스토킹범죄는 <strong>반의사불벌죄가 아닙니다</strong>. 고소를 취소해도 검사가 기소할 수 있으므로, 피해자가 합의를 강요받을 필요가 없습니다.',
      },
      {
        question: '전 연인의 연락이 스토킹에 해당하나요?',
        answer:
          '헤어진 후 <strong>상대방이 원하지 않는데도 반복적으로</strong> 전화·문자·방문하면 스토킹행위에 해당할 소지가 있습니다. "안부 차 연락했다"는 변명은 법적으로 통하지 않습니다.',
      },
      {
        question: '증거가 전화 기록밖에 없는데 신고할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 반복된 전화 기록(발신 내역)만으로도 스토킹행위 입증이 가능합니다. 여기에 <strong>112 신고 이력</strong>이 추가되면 입증력이 크게 높아집니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 상황에 맞는 대응 전략 확인하기',
      link: '/diagnosis/stalking',
    },
    internalLinks: [
      { label: '홈', href: '/' },
      { label: '스토킹 진단', href: '/diagnosis/stalking' },
      {
        label: '스토킹 긴급보호조치 안내',
        href: '/guide/stalking/stalking-emergency-protective-measures',
      },
      {
        label: '스토킹 증거 수집 FAQ',
        href: '/guide/stalking/stalking-evidence-collection-faq',
      },
      {
        label: '스토킹 처벌·접근금지 안내',
        href: '/guide/stalking/stalking-penalty-restraining-order',
      },
    ],
  },
];
