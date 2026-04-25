import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 퇴직금 5개 + 임금체불 5개 (batch27)
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch27RetirementWage: SpokePage[] = [
  // ══════════ 퇴직금 5개 ══════════

  // ── 1. 회사 도산 시 퇴직금 체당금 ──
  {
    domain: 'retirement',
    slug: 'retirement-company-bankrupt-deposit',
    keyword: '회사 도산 퇴직금 체당금 신청',
    questionKeyword: '회사가 부도났는데 퇴직금은 어떻게 받나요?',
    ctaKeyword: '회사 도산 퇴직금 체당금 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '회사 부도·도산 시 퇴직금 체당금 신청 4단계 | 로앤가이드',
      description: '회사가 부도나도 근로복지공단 체당금으로 퇴직금을 받을 수 있습니다. 신청 절차 4단계를 지금 확인하세요.',
    },
    intro: '<p>갑자기 회사가 부도 처리됐습니다. 밀린 월급도 있고 퇴직금도 못 받았는데, 사장님은 연락이 안 됩니다. 이런 경우 근로복지공단의 체당금 제도를 활용하면 밀린 임금과 퇴직금을 대신 지급받을 수 있습니다.</p>',
    timelineSteps: ['1단계: 도산등사실인정 신청', '2단계: 체당금 지급 청구', '3단계: 근로복지공단 심사', '4단계: 체당금 수령'],
    sections: [
      {
        title: '체당금이란?',
        content: '<p><strong style="color:#1e3a5f">사업주가 파산·도산하여 임금을 지급할 능력이 없을 때, 근로복지공단이 대신 지급하는 제도입니다.</strong></p>\n<ul>\n<li><strong>일반체당금</strong> — 파산·회생이 확인된 경우: 최종 3개월분 임금 + 최종 3년분 퇴직금 + 최종 3개월분 휴업수당</li>\n<li><strong>간이대지급금</strong> — 소규모 사업장(도산등사실인정): 최대 1,000만원 한도</li>\n<li><strong>상한액</strong> — 나이에 따라 상한액이 다릅니다(30세 미만 220만원/월, 30~39세 310만원/월, 40세 이상 350만원/월)</li>\n</ul>',
      },
      {
        title: '신청 절차 4단계',
        content: '<p><strong style="color:#1e3a5f">체당금 신청은 도산 확인 → 청구 → 심사 → 수령 순서입니다.</strong></p>\n<ol>\n<li><strong>도산등사실인정 신청</strong> — 사업주가 사실상 도산한 경우, 관할 지방고용노동청에 도산등사실인정을 신청합니다.</li>\n<li><strong>체당금 지급 청구</strong> — 인정서를 받으면 근로복지공단에 체당금을 청구합니다.</li>\n<li><strong>심사·확인</strong> — 공단이 임금대장, 근로계약서 등을 확인합니다.</li>\n<li><strong>지급</strong> — 심사 완료 후 계좌로 입금됩니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>체당금 신청 자격과 예상 금액, AI가 계산합니다</strong></p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '필요 서류와 주의사항',
        content: '<p><strong style="color:#1e3a5f">체당금 청구 시 필요한 서류를 미리 준비하세요.</strong></p>\n<ul>\n<li>근로계약서, 급여명세서, 통장 입금내역</li>\n<li>퇴직금 미지급 확인 자료</li>\n<li>도산등사실인정서 또는 법원 파산선고 결정문</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 체당금 청구 기한은 도산등사실인정일로부터 2년입니다. 기한을 넘기면 청구할 수 없습니다.</blockquote>',
      },
    ],
    cases: [{ title: '판례 — 퇴직금은 후불임금', summary: '대법원 판례에 따르면 퇴직금은 후불적 임금으로서 근로관계가 종료되는 때에 비로소 지급의무가 발생합니다. 회사가 도산하더라도 퇴직금 청구권은 소멸하지 않으며, 체당금 또는 사업주 개인에 대한 청구가 가능합니다.', takeaway: '비슷한 상황이라면 회사가 도산해도 포기하지 마세요. 체당금 제도를 통해 퇴직금을 받을 수 있습니다.' }],
    faq: [
      { question: '사장님 개인에게도 청구할 수 있나요?', answer: '<p>법인이 아닌 개인사업자라면 사업주 개인 재산에 대해 청구할 수 있습니다. 법인이라도 대표이사에게 개인적 책임을 물을 수 있는 경우가 있습니다.</p>' },
      { question: '체당금으로 밀린 월급도 받을 수 있나요?', answer: '<p>네, 최종 3개월분 임금과 최종 3년분 퇴직금, 최종 3개월분 휴업수당이 체당금 대상입니다.</p>' },
      { question: '체당금 상한액은 얼마인가요?', answer: '<p>나이에 따라 다릅니다. 40세 이상은 월 350만원, 30~39세는 월 310만원, 30세 미만은 월 220만원이 상한입니다.</p>' },
      { question: '사업자등록 폐업만 한 경우에도 체당금을 받을 수 있나요?', answer: '<p>도산등사실인정을 받으면 가능합니다. 관할 지방고용노동청에 사실상 도산 여부 인정을 신청하세요.</p>' },
    ],
    cta: { text: '회사 도산 시 체당금 신청 절차 AI로 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [{ label: '홈', href: '/' }, { label: '퇴직금 가이드', href: '/guide/retirement' }, { label: '퇴직금 미지급 신고', href: '/guide/retirement/retirement-pay-complaint' }, { label: '임금체불 사업주 도산', href: '/guide/wage/wage-bankrupt-employer-how-to-claim' }, { label: '퇴직금 계산법', href: '/guide/retirement/retirement-pay-calculation' }],
  },

  // ── 2. 퇴직금 지연이자 20% ──
  {
    domain: 'retirement',
    slug: 'retirement-delay-interest-20percent',
    keyword: '퇴직금 지연이자 연 20% 계산',
    questionKeyword: '퇴직금을 14일 넘겨서 받으면 이자가 붙나요?',
    ctaKeyword: '퇴직금 지연이자 계산 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '퇴직금 14일 초과 미지급 시 지연이자 연 20% 계산법 | 로앤가이드',
      description: '퇴직 후 14일 이내 퇴직금을 받지 못하면 연 20% 지연이자가 붙습니다. 지연이자 계산법을 지금 확인하세요.',
    },
    intro: '<p>퇴직한 지 한 달이 넘었는데 아직 퇴직금을 못 받았습니다. 근로기준법에 따르면 퇴직 후 14일 이내에 퇴직금을 지급해야 하며, 이를 초과하면 연 20%의 지연이자가 붙습니다. 내가 받을 수 있는 지연이자를 계산해보세요.</p>',
    timelineSteps: ['1단계: 퇴직일과 퇴직금 지급일 확인', '2단계: 14일 초과 여부 판단', '3단계: 지연이자 계산', '4단계: 내용증명 또는 진정 접수'],
    sections: [
      {
        title: '지연이자 발생 조건',
        content: '<p><strong style="color:#1e3a5f">근로기준법 제36조에 따라 퇴직 후 14일 이내에 퇴직금을 포함한 모든 금품을 지급해야 합니다.</strong></p>\n<ul>\n<li><strong>14일 기산점</strong> — 퇴직일의 다음 날부터 계산합니다.</li>\n<li><strong>지연이자율</strong> — 14일 초과 시점부터 미지급 금액에 대해 연 20%의 지연이자가 발생합니다.</li>\n<li><strong>특별한 합의가 있는 경우</strong> — 당사자 간 합의로 14일을 초과하여 지급하기로 한 경우에는 지연이자가 적용되지 않을 수 있습니다.</li>\n</ul>',
      },
      {
        title: '지연이자 계산 예시',
        content: '<p><strong style="color:#1e3a5f">퇴직금 1,000만원을 60일 지연 지급한 경우:</strong></p>\n<p>지연이자 = 1,000만원 × 20% × (60일-14일) / 365일 ≈ <strong>약 25만원</strong></p>\n<p>3개월(90일) 지연 시: 1,000만원 × 20% × 76일/365일 ≈ <strong>약 42만원</strong></p>\n<p>6개월(180일) 지연 시: 1,000만원 × 20% × 166일/365일 ≈ <strong>약 91만원</strong></p>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>내 퇴직금 지연이자, AI가 즉시 계산합니다</strong></p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '지연이자 청구 방법',
        content: '<p><strong style="color:#1e3a5f">지연이자는 퇴직금과 함께 청구할 수 있습니다.</strong></p>\n<ol>\n<li><strong>내용증명 발송</strong> — 퇴직금 원금 + 지연이자를 구체적으로 산정하여 회사에 서면 요구합니다.</li>\n<li><strong>고용노동청 진정</strong> — 14일 이내 미지급은 임금체불에 해당하므로 진정 접수가 가능합니다.</li>\n<li><strong>민사소송</strong> — 진정으로 해결되지 않으면 민사소송을 제기합니다. 지연이자도 함께 청구합니다.</li>\n</ol>',
      },
    ],
    cases: [{ title: '판례 — 퇴직금 14일 규정', summary: '근로기준법 제36조는 사용자에게 근로자가 사망 또는 퇴직한 경우 14일 이내에 임금, 보상금, 그 밖의 모든 금품을 지급하도록 의무화하고 있으며, 이를 위반하면 3년 이하의 징역 또는 3,000만원 이하의 벌금에 처합니다.', takeaway: '비슷한 상황이라면 14일이 지났다면 지연이자와 함께 청구하세요. 사업주의 형사처벌 사유이기도 합니다.' }],
    faq: [
      { question: '14일 계산 시 공휴일도 포함되나요?', answer: '<p>네, 달력일 기준 14일입니다. 공휴일, 주말을 포함합니다.</p>' },
      { question: '지연이자 20%는 복리인가요?', answer: '<p>단리입니다. 미지급 원금에 대해 연 20%의 단리가 적용됩니다.</p>' },
      { question: '회사가 일부만 지급하고 나머지를 안 주면?', answer: '<p>미지급 잔액에 대해서만 지연이자가 발생합니다.</p>' },
      { question: '지연이자를 포기하라는 합의서에 서명했으면?', answer: '<p>근로기준법 제36조는 강행규정이므로, 이에 반하는 합의는 무효입니다. 지연이자를 별도로 청구할 수 있습니다.</p>' },
    ],
    cta: { text: '퇴직금 지연이자 계산 AI로 즉시 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [{ label: '홈', href: '/' }, { label: '퇴직금 가이드', href: '/guide/retirement' }, { label: '퇴직금 14일 규정', href: '/guide/retirement/retirement-pay-14day-rule-detail' }, { label: '퇴직금 미지급 신고', href: '/guide/retirement/retirement-pay-complaint' }, { label: '퇴직금 계산법', href: '/guide/retirement/retirement-pay-calculation' }],
  },

  // ── 4. 사업양도·합병 시 퇴직금 ──
  {
    domain: 'retirement',
    slug: 'retirement-business-transfer-responsibility',
    keyword: '사업양도 합병 퇴직금 책임',
    questionKeyword: '회사가 인수합병되면 퇴직금은 누가 주나요?',
    ctaKeyword: '사업양도 퇴직금 책임 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사업 양도·합병 시 퇴직금 지급 책임 주체 확인법 | 로앤가이드',
      description: '회사가 인수합병되면 퇴직금 책임이 어디로 가는지 확인하세요. 양도인·양수인 책임 구분을 지금 확인하세요.',
    },
    intro: '<p>10년 다니던 회사가 다른 회사에 인수됐습니다. 새 회사는 "우리는 이전 퇴직금까지 책임지지 않는다"고 합니다. 이게 맞는 건지, 퇴직금은 어디에 청구해야 하는지 확인해보세요.</p>',
    timelineSteps: ['1단계: 사업양도·합병 형태 확인', '2단계: 근로관계 승계 여부 확인', '3단계: 퇴직금 지급 책임 주체 판단', '4단계: 미지급 시 청구 절차'],
    sections: [
      {
        title: '사업양도 시 퇴직금 원칙',
        content: '<p><strong style="color:#1e3a5f">영업양도의 경우 근로관계가 양수인에게 포괄적으로 승계됩니다.</strong></p>\n<ul>\n<li><strong>포괄적 승계</strong> — 양도인의 근로자에 대한 퇴직금 지급의무도 양수인에게 이전됩니다.</li>\n<li><strong>양도인의 연대책임</strong> — 양도인도 퇴직금 지급에 대해 연대 책임을 질 수 있습니다.</li>\n<li><strong>근속기간 합산</strong> — 양도 전후 근무기간이 합산되어 퇴직금이 계산됩니다.</li>\n</ul>',
      },
      {
        title: '합병의 경우',
        content: '<p><strong style="color:#1e3a5f">합병의 경우 존속회사(합병 후 남는 회사)가 모든 의무를 승계합니다.</strong></p>\n<p>흡수합병이든 신설합병이든, 소멸회사의 퇴직금 지급의무는 존속회사 또는 신설회사가 승계합니다. 근속기간도 합산됩니다.</p>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>사업양도·합병 시 퇴직금 책임 확인, AI가 도와드립니다</strong></p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '"퇴직금 정산 후 재입사" 요구 시 대응',
        content: '<p><strong style="color:#1e3a5f">인수 과정에서 "기존 퇴직금을 정산하고 새로 시작하자"고 요구하는 경우가 있습니다.</strong></p>\n<ul>\n<li><strong>동의 없는 중간정산은 불가</strong> — 근로자의 동의 없이 일방적으로 퇴직금을 중간정산할 수 없습니다.</li>\n<li><strong>불이익 변경 주의</strong> — 중간정산으로 인해 근속기간이 초기화되면 향후 퇴직금이 줄어들므로 신중하게 판단하세요.</li>\n<li><strong>서면 기록</strong> — 동의·거부 의사를 서면으로 남기세요.</li>\n</ul>',
      },
    ],
    cases: [{ title: '판례 — 사업양도와 근로관계 승계', summary: '대법원 판례에 따르면 영업양도에 있어 양도인과 양수인 사이에 근로관계의 일부를 승계 대상에서 제외하기로 합의하더라도, 근로자에게 불이익한 것은 효력이 없습니다. 양수인은 양도인의 근로자에 대한 퇴직금 의무를 승계합니다.', takeaway: '비슷한 상황이라면 "이전 회사 퇴직금은 우리 책임이 아니다"라는 주장에 동의하지 마세요. 양수인이 승계 의무를 집니다.' }],
    faq: [
      { question: '양도인 회사가 소멸했으면 누구에게 청구하나요?', answer: '<p>양수인(인수한 회사)이 포괄적으로 의무를 승계하므로 양수인에게 청구합니다.</p>' },
      { question: '인수합병 시 근속기간이 초기화되나요?', answer: '<p>원칙적으로 근속기간은 합산됩니다. 다만 근로자가 자발적으로 중간정산에 동의한 경우 그 시점부터 다시 계산됩니다.</p>' },
      { question: '주식양수도인데도 동일한가요?', answer: '<p>주식양수도는 법인 자체가 동일하므로 근로관계에 변동이 없습니다. 퇴직금도 그대로 유지됩니다.</p>' },
      { question: '인수 후 근로조건이 불리하게 바뀌면?', answer: '<p>근로조건 불이익 변경은 근로자 동의가 필요합니다. 동의 없이 임금 삭감 등이 이루어지면 부당노동행위로 구제신청이 가능합니다.</p>' },
    ],
    cta: { text: '사업양도 퇴직금 승계 여부 AI로 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [{ label: '홈', href: '/' }, { label: '퇴직금 가이드', href: '/guide/retirement' }, { label: '퇴직금 미지급 신고', href: '/guide/retirement/retirement-pay-complaint' }, { label: '퇴직금 포기 합의 무효', href: '/guide/retirement/retirement-waiver-agreement-invalid' }, { label: '퇴직금 계산법', href: '/guide/retirement/retirement-pay-calculation' }],
  },

  // ── 5. 퇴직연금 DC·DB형 차이 ──
  {
    domain: 'retirement',
    slug: 'retirement-dc-db-type-difference',
    keyword: '퇴직연금 DC DB형 차이 선택',
    questionKeyword: '퇴직연금 DC형과 DB형 중 뭐가 유리한가요?',
    ctaKeyword: '퇴직연금 유형 선택 상담',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '퇴직연금 DC형 vs DB형 차이와 유리한 선택법 | 로앤가이드',
      description: '퇴직연금 DC형과 DB형의 핵심 차이를 비교하고, 내 상황에 유리한 유형을 선택하세요. 지금 확인하세요.',
    },
    intro: '<p>회사에서 퇴직연금을 DC형과 DB형 중 선택하라고 합니다. 뭐가 다르고 어떤 게 나한테 유리한지 잘 모르겠습니다. 두 유형의 핵심 차이와 상황별 유리한 선택을 정리해보세요.</p>',
    timelineSteps: ['1단계: DC형·DB형 핵심 차이 이해', '2단계: 내 상황 점검 (임금상승률, 근속연수)', '3단계: 유리한 유형 선택', '4단계: 퇴직 시 수령 방법 확인'],
    sections: [
      {
        title: 'DC형과 DB형 핵심 차이',
        content: '<p><strong style="color:#1e3a5f">DB형은 회사가 운용 책임을 지고, DC형은 근로자 본인이 운용합니다.</strong></p>\n<table style="width:100%;border-collapse:collapse;margin:16px 0">\n<tr style="background:#f0f4f8"><th style="padding:8px;border:1px solid #ddd">구분</th><th style="padding:8px;border:1px solid #ddd">DB형 (확정급여형)</th><th style="padding:8px;border:1px solid #ddd">DC형 (확정기여형)</th></tr>\n<tr><td style="padding:8px;border:1px solid #ddd"><strong>적립 방식</strong></td><td style="padding:8px;border:1px solid #ddd">회사가 운용·적립</td><td style="padding:8px;border:1px solid #ddd">회사가 매년 연봉 1/12을 적립, 근로자가 운용</td></tr>\n<tr><td style="padding:8px;border:1px solid #ddd"><strong>퇴직금 산정</strong></td><td style="padding:8px;border:1px solid #ddd">퇴직 시 평균임금 × 근속연수</td><td style="padding:8px;border:1px solid #ddd">적립금 + 운용 수익</td></tr>\n<tr><td style="padding:8px;border:1px solid #ddd"><strong>운용 위험</strong></td><td style="padding:8px;border:1px solid #ddd">회사 부담</td><td style="padding:8px;border:1px solid #ddd">근로자 부담</td></tr>\n<tr><td style="padding:8px;border:1px solid #ddd"><strong>유리한 경우</strong></td><td style="padding:8px;border:1px solid #ddd">임금 상승률이 높을 때</td><td style="padding:8px;border:1px solid #ddd">임금 변동이 적고, 투자에 자신 있을 때</td></tr>\n</table>',
      },
      {
        title: '상황별 유리한 선택',
        content: '<p><strong style="color:#1e3a5f">내 상황에 따라 유리한 유형이 달라집니다.</strong></p>\n<ul>\n<li><strong>DB형이 유리한 경우</strong> — 매년 임금이 꾸준히 오르는 경우(승진·호봉 인상), 장기 근속 예정인 경우, 투자에 관심이 없는 경우</li>\n<li><strong>DC형이 유리한 경우</strong> — 임금이 정체되거나 삭감될 가능성이 있는 경우, 투자 경험이 있는 경우, 이직이 잦은 경우</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>내 상황에 유리한 퇴직연금 유형, AI가 분석합니다</strong></p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '퇴직 시 수령 방법',
        content: '<p><strong style="color:#1e3a5f">퇴직연금은 IRP(개인형퇴직연금) 계좌로 이전한 후 수령합니다.</strong></p>\n<ul>\n<li><strong>55세 이전 퇴직</strong> — IRP 계좌로 의무 이전됩니다. 55세 이후 연금 또는 일시금으로 수령합니다.</li>\n<li><strong>55세 이후 퇴직</strong> — 연금 또는 일시금 수령을 선택할 수 있습니다.</li>\n<li><strong>세금 혜택</strong> — 연금으로 수령하면 퇴직소득세의 60~70%만 과세됩니다.</li>\n</ul>',
      },
    ],
    cases: [{ title: '판례 — 퇴직금 산정 기초임금', summary: '대법원은 퇴직금 산정의 기초가 되는 평균임금에 정기적·일률적으로 지급되는 모든 금품이 포함된다고 판시합니다. DB형의 경우 퇴직 시 평균임금이 높을수록 퇴직금이 커지므로, 상여금·수당 등의 포함 여부가 중요합니다.', takeaway: 'DB형을 선택한 경우, 퇴직 전 평균임금에 포함되는 항목을 확인하세요. 누락된 항목이 있으면 추가 청구가 가능합니다.' }],
    faq: [
      { question: 'DC형에서 DB형으로 변경할 수 있나요?', answer: '<p>회사의 퇴직연금 규약에 따라 변경이 가능한 경우가 있습니다. 인사팀에 확인하세요.</p>' },
      { question: 'DC형에서 원금이 손실될 수 있나요?', answer: '<p>원리금 보장형 상품을 선택하면 원금이 보장됩니다. 실적배당형 상품은 원금 손실 가능성이 있습니다.</p>' },
      { question: '중간정산은 두 유형 모두 가능한가요?', answer: '<p>DB형은 법정 사유(주택 구입, 6개월 이상 요양 등)에 한해 중간정산이 가능합니다. DC형은 중간정산이 아닌 중도인출 형태로 가능합니다.</p>' },
      { question: '회사가 부도나면 퇴직연금은 안전한가요?', answer: '<p>퇴직연금은 회사 자산과 분리된 별도의 금융기관에 적립되어 있으므로, 회사가 부도나도 보호됩니다.</p>' },
    ],
    cta: { text: '내 퇴직연금 유형 비교 분석 AI로 무료 확인하기', link: '/chat?domain=retirement' },
    internalLinks: [{ label: '홈', href: '/' }, { label: '퇴직금 가이드', href: '/guide/retirement' }, { label: '퇴직금 계산법', href: '/guide/retirement/retirement-pay-calculation' }, { label: '퇴직금 포함·제외 항목', href: '/guide/retirement/retirement-pay-included-excluded-items' }, { label: '중간정산 가이드', href: '/guide/retirement/retirement-interim-settlement-guide' }],
  },

  // ══════════ 임금체불 5개 ══════════

  // ── 6. 야간수당 미지급 ──
  {
    domain: 'wage',
    slug: 'wage-night-shift-premium-claim',
    keyword: '야간수당 미지급 청구 절차',
    questionKeyword: '야간근무를 하는데 야간수당을 안 줍니다. 청구할 수 있나요?',
    ctaKeyword: '야간수당 미지급 청구 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '야간수당 미지급 시 청구 절차 4단계 | 로앤가이드',
      description: '밤 10시~새벽 6시 근무에 대한 야간수당을 못 받고 있다면, 통상임금의 50% 가산수당을 청구하세요. 지금 확인하세요.',
    },
    intro: '<p>편의점 야간 알바를 하고 있는데 기본 시급만 받습니다. 밤 10시부터 새벽 6시까지의 근로에는 통상임금의 50%를 가산한 야간근로수당을 지급해야 합니다. 야간수당을 받지 못했다면 청구할 수 있습니다.</p>',
    timelineSteps: ['1단계: 야간근로시간 확인', '2단계: 미지급 야간수당 계산', '3단계: 회사에 서면 요청', '4단계: 미지급 시 진정 접수'],
    sections: [
      {
        title: '야간수당이란?',
        content: '<p><strong style="color:#1e3a5f">근로기준법 제56조에 따라 오후 10시~오전 6시 사이의 근로에 대해 통상임금의 50%를 가산하여 지급해야 합니다.</strong></p>\n<ul>\n<li><strong>적용 대상</strong> — 5인 이상 사업장에 근무하는 모든 근로자(정규직, 계약직, 아르바이트 포함)</li>\n<li><strong>계산 예시</strong> — 시급 10,030원(2026년 최저임금), 야간 4시간 근무 시: 10,030원 × 1.5 × 4시간 = 60,180원</li>\n<li><strong>연장+야간 중복</strong> — 야간에 연장근로까지 하면 통상임금의 100%(연장 50% + 야간 50%)가 가산됩니다.</li>\n</ul>',
      },
      {
        title: '미지급 야간수당 청구 방법',
        content: '<p><strong style="color:#1e3a5f">야간수당을 받지 못했다면 아래 절차로 청구하세요.</strong></p>\n<ol>\n<li><strong>근무시간 증거 확보</strong> — 야간 근무 기록(출퇴근 기록, CCTV, 근무일지)을 확보합니다.</li>\n<li><strong>미지급 금액 계산</strong> — (통상시급 × 0.5) × 야간근로시간 × 미지급 개월 수로 계산합니다.</li>\n<li><strong>회사에 서면 요청</strong> — 내용증명으로 야간수당 지급을 요청합니다.</li>\n<li><strong>고용노동청 진정</strong> — 14일 내 미지급 시 임금체불로 진정합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>미지급 야간수당 금액, AI가 계산합니다</strong></p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '5인 미만 사업장의 경우',
        content: '<p><strong style="color:#1e3a5f">5인 미만 사업장에서는 야간근로 가산수당 의무가 적용되지 않습니다.</strong></p>\n<p>다만 근로계약서나 취업규칙에 야간수당 지급이 명시되어 있다면, 사업장 규모와 관계없이 지급받을 수 있습니다.</p>',
      },
    ],
    cases: [{ title: '판례 — 야간근로수당은 강행규정', summary: '근로기준법 제56조의 야간근로수당은 강행규정으로, 근로계약이나 취업규칙으로 이를 배제할 수 없습니다. 야간수당을 지급하지 않는 약정은 무효이며, 미지급분은 임금채권으로 3년 이내 청구할 수 있습니다.', takeaway: '비슷한 상황이라면 "야간수당은 월급에 포함"이라는 약정이 있어도, 실제 계산 결과 부족분이 있으면 차액을 청구하세요.' }],
    faq: [
      { question: '야간 알바 시급이 다른데 이게 야간수당 포함인가요?', answer: '<p>시급이 기본 시급의 1.5배 이상이면 야간수당이 포함된 것으로 볼 수 있습니다. 미달이면 차액을 청구할 수 있습니다.</p>' },
      { question: '감시·단속 근무자도 야간수당을 받나요?', answer: '<p>고용노동부 승인을 받은 감시·단속적 근로자는 야간근로수당 적용이 제외될 수 있습니다. 승인 여부를 확인하세요.</p>' },
      { question: '야간수당 소멸시효는?', answer: '<p>임금채권이므로 3년입니다. 3년 이내의 미지급 야간수당을 소급 청구할 수 있습니다.</p>' },
      { question: '야간수당과 연장수당을 동시에 받을 수 있나요?', answer: '<p>네, 야간시간대에 연장근로를 하면 야간수당(50%) + 연장수당(50%) = 통상임금의 200%를 받을 수 있습니다.</p>' },
    ],
    cta: { text: '미지급 야간수당 금액 AI로 계산하기', link: '/chat?domain=wage' },
    internalLinks: [{ label: '홈', href: '/' }, { label: '임금체불 가이드', href: '/guide/wage' }, { label: '포괄임금 초과근무 청구', href: '/guide/wage/wage-pogualkeum-overtime-void-claim' }, { label: '임금체불 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' }, { label: '야근수당 청구', href: '/guide/wage/wage-overtime-unpaid-claim' }],
  },

  // ── 7. 5인 미만 사업장 임금 권리 ──
  {
    domain: 'wage',
    slug: 'wage-under5-employees-rights',
    keyword: '5인 미만 사업장 임금체불 권리',
    questionKeyword: '5인 미만 사업장인데 임금체불 신고할 수 있나요?',
    ctaKeyword: '5인 미만 임금체불 상담',
    type: '자격확인형',
    perspective: 'victim',
    meta: {
      title: '5인 미만 사업장 임금체불 신고 가능 여부 확인법 | 로앤가이드',
      description: '5인 미만 사업장이라도 최저임금, 임금 지급, 퇴직금은 적용됩니다. 보호받을 수 있는 권리를 지금 확인하세요.',
    },
    intro: '<p>"우리 가게는 5인 미만이라 노동법이 안 된다"는 말을 들었습니다. 정말인가요? 5인 미만 사업장에서도 임금 지급, 최저임금, 퇴직금 등 핵심 규정은 적용됩니다. 어디까지 보호받을 수 있는지 확인해보세요.</p>',
    timelineSteps: ['1단계: 적용·미적용 규정 확인', '2단계: 위반 사항 파악', '3단계: 증거 확보', '4단계: 진정 또는 민사소송'],
    sections: [
      {
        title: '5인 미만에도 적용되는 규정',
        content: '<p><strong style="color:#1e3a5f">5인 미만 사업장에서도 다음 규정은 가능한 한 적용됩니다.</strong></p>\n<ul>\n<li><strong>임금 지급 원칙</strong> — 임금은 매월 1회 이상 정기적으로 전액 지급해야 합니다.</li>\n<li><strong>최저임금</strong> — 2026년 시급 10,030원이 동일하게 적용됩니다.</li>\n<li><strong>퇴직금</strong> — 1년 이상 근무 시 퇴직금을 지급해야 합니다.</li>\n<li><strong>근로계약서 교부</strong> — 서면 근로계약서 교부 의무가 있습니다.</li>\n<li><strong>퇴직 후 14일 내 금품 청산</strong> — 퇴직 후 14일 내에 모든 금품을 지급해야 합니다.</li>\n</ul>',
      },
      {
        title: '5인 미만에서 적용되지 않는 규정',
        content: '<p><strong style="color:#1e3a5f">아래 규정은 5인 미만 사업장에서 적용되지 않습니다.</strong></p>\n<ul>\n<li>연장·야간·휴일 근로수당 가산(50%)</li>\n<li>연차유급휴가</li>\n<li>부당해고 구제신청(노동위원회)</li>\n<li>생리휴가, 육아휴직(고용보험법 적용은 가능)</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 가산수당과 연차는 적용되지 않지만, 임금 지급 자체와 퇴직금은 가능한 한 보호됩니다.</blockquote>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>5인 미만 사업장에서 내 권리, AI가 정리합니다</strong></p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '임금체불 신고 방법',
        content: '<p><strong style="color:#1e3a5f">5인 미만이라도 임금체불 신고는 동일하게 가능합니다.</strong></p>\n<ol>\n<li><strong>고용노동청 진정</strong> — 관할 고용노동청에 임금체불 진정을 접수합니다.</li>\n<li><strong>소액사건심판</strong> — 3,000만원 이하 청구 시 간편하게 소송을 제기할 수 있습니다.</li>\n<li><strong>형사 고소</strong> — 임금체불은 형사처벌 대상이므로 사업주를 고소할 수 있습니다.</li>\n</ol>',
      },
    ],
    cases: [{ title: '판례 — 5인 미만 사업장과 최저임금', summary: '최저임금법은 사업장 규모에 관계없이 모든 사업장에 적용됩니다. 5인 미만이라도 최저임금 미달 지급은 3년 이하 징역 또는 2,000만원 이하 벌금에 해당할 소지가 있습니다.', takeaway: '"5인 미만이라 못 받는다"는 말에 속지 마세요. 최저임금, 퇴직금, 임금 지급 원칙은 동일하게 적용됩니다.' }],
    faq: [
      { question: '5인 기준은 어떻게 계산하나요?', answer: '<p>상시 근로자 수 기준입니다. 사업장에서 통상적으로 일하는 근로자(아르바이트 포함)의 수를 매일 파악하여 산정합니다.</p>' },
      { question: '야근해도 가산수당을 못 받는 건가요?', answer: '<p>5인 미만 사업장에서는 연장·야간·휴일 가산수당 규정이 적용되지 않습니다. 다만 근로계약서에 별도 약정이 있으면 그에 따릅니다.</p>' },
      { question: '부당해고를 당하면 어디에 구제를 청하나요?', answer: '<p>노동위원회 구제신청은 불가하지만, 민사소송으로 해고무효 확인 및 임금 청구가 가능합니다.</p>' },
      { question: '5인 미만인데 주휴수당도 안 줘도 되나요?', answer: '<p>주휴수당은 5인 미만에도 적용됩니다. 1주 소정근로시간이 15시간 이상이면 주휴수당을 받을 수 있습니다.</p>' },
    ],
    cta: { text: '5인 미만 사업장 임금 권리 AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [{ label: '홈', href: '/' }, { label: '임금체불 가이드', href: '/guide/wage' }, { label: '최저임금 미달 자가진단', href: '/guide/wage/wage-pogual-minimum-wage-test' }, { label: '임금체불 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' }, { label: '퇴직금 미지급', href: '/guide/retirement/retirement-pay-complaint' }],
  },

  // ── 8. 휴일근로수당 미지급 ──
  {
    domain: 'wage',
    slug: 'wage-holiday-work-unpaid-claim',
    keyword: '휴일근로수당 미지급 청구',
    questionKeyword: '주말에 일했는데 휴일수당을 안 줍니다. 어떻게 하나요?',
    ctaKeyword: '휴일근로수당 미지급 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '휴일근로수당 미지급 시 청구 방법 3단계 | 로앤가이드',
      description: '주말·공휴일 근무에 대한 휴일근로수당(통상임금 150%)을 못 받았다면, 3단계 청구 절차를 지금 확인하세요.',
    },
    intro: '<p>토요일마다 출근하는데 평일과 같은 시급만 받습니다. 휴일에 근무하면 통상임금의 50%를 가산한 휴일근로수당을 받아야 합니다. 미지급된 휴일수당을 청구하는 방법을 확인해보세요.</p>',
    timelineSteps: ['1단계: 휴일근로 해당 여부 확인', '2단계: 미지급 수당 계산', '3단계: 청구 및 신고'],
    sections: [
      {
        title: '휴일근로수당 계산법',
        content: '<p><strong style="color:#1e3a5f">휴일근로수당은 통상임금의 50%를 가산하여 지급합니다.</strong></p>\n<ul>\n<li><strong>8시간 이내</strong> — 통상임금의 150% (기본 100% + 가산 50%)</li>\n<li><strong>8시간 초과</strong> — 통상임금의 200% (기본 100% + 휴일 가산 50% + 연장 가산 50%)</li>\n<li><strong>적용 대상</strong> — 5인 이상 사업장의 근로기준법상 휴일(주휴일, 법정 공휴일)</li>\n</ul>',
      },
      {
        title: '청구 절차',
        content: '<p><strong style="color:#1e3a5f">미지급 휴일수당은 임금체불로 신고할 수 있습니다.</strong></p>\n<ol>\n<li><strong>휴일 근무 증거 확보</strong> — 출퇴근 기록, 업무 기록, 동료 진술 등</li>\n<li><strong>미지급 금액 산정</strong> — (통상시급 × 0.5) × 휴일근로시간 × 미지급 개월 수</li>\n<li><strong>고용노동청 진정 또는 민사소송</strong> — 임금채권 소멸시효 3년 이내 청구</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>미지급 휴일수당 금액, AI가 계산합니다</strong></p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '법정 공휴일도 유급휴일',
        content: '<p><strong style="color:#1e3a5f">2022년부터 5인 이상 사업장은 법정 공휴일도 유급휴일로 적용됩니다.</strong></p>\n<p>설, 추석, 삼일절, 광복절 등 법정 공휴일에 근무하면 휴일근로수당을 받아야 합니다. 대체휴일을 부여하는 경우에는 휴일수당 대신 대체휴일을 사용할 수 있습니다.</p>',
      },
    ],
    cases: [{ title: '판례 — 휴일근로와 연장근로 중복 가산', summary: '근로기준법 개정(2018)으로 휴일근로와 연장근로 가산수당은 중복 적용됩니다. 휴일에 8시간 초과 근무 시 통상임금의 200%를 지급해야 합니다.', takeaway: '비슷한 상황이라면 주말에 8시간 넘게 일했다면 휴일가산(50%) + 연장가산(50%) = 통상임금의 200%를 받을 수 있습니다.' }],
    faq: [
      { question: '토요일은 휴일인가요?', answer: '<p>취업규칙이나 근로계약서에서 토요일을 휴일로 정했다면 휴일입니다. 일반적으로 주 5일제 사업장에서 토요일은 무급휴무일(휴일이 아님)인 경우가 많으므로 확인이 필요합니다.</p>' },
      { question: '대체휴일을 주면 휴일수당을 안 줘도 되나요?', answer: '<p>근로자 대표와 합의하여 다른 날을 휴일로 대체하면 원래 휴일에 근무하더라도 휴일가산수당을 지급하지 않아도 됩니다.</p>' },
      { question: '공휴일 근무 시 휴일수당+대체휴일 둘 다 받을 수 있나요?', answer: '<p>대체휴일을 부여하면 휴일수당 대신 대체휴일을 사용합니다. 둘 다 받는 것은 아닙니다.</p>' },
      { question: '5인 미만 사업장은 휴일수당이 없나요?', answer: '<p>5인 미만 사업장에서는 휴일근로 가산수당 규정이 적용되지 않습니다. 다만 별도 약정이 있으면 그에 따릅니다.</p>' },
    ],
    cta: { text: '미지급 휴일수당 청구 절차 AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [{ label: '홈', href: '/' }, { label: '임금체불 가이드', href: '/guide/wage' }, { label: '야간수당 미지급 청구', href: '/guide/wage/wage-night-shift-premium-claim' }, { label: '임금체불 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' }, { label: '5인 미만 임금 권리', href: '/guide/wage/wage-under5-employees-rights' }],
  },

  // ── 9. 퇴직 후 마지막 급여 미지급 ──
  {
    domain: 'wage',
    slug: 'wage-resignation-final-pay-delay',
    keyword: '퇴직 후 마지막 급여 미지급 대처',
    questionKeyword: '퇴사했는데 마지막 월급을 안 줍니다',
    ctaKeyword: '퇴직 후 급여 미지급 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '퇴직 후 마지막 급여 미지급 시 대처법 4단계 | 로앤가이드',
      description: '퇴사 후 14일 이내에 마지막 급여를 못 받았다면 임금체불에 해당할 소지가 있습니다. 대처법 4단계를 지금 확인하세요.',
    },
    intro: '<p>한 달 전에 퇴사했는데 아직 마지막 월급을 못 받았습니다. 회사에 연락해도 "곧 준다"는 말만 반복합니다. 근로기준법 제36조에 따라 퇴직 후 14일 이내에 모든 금품을 지급해야 하며, 이를 초과하면 임금체불에 해당할 소지가 있습니다.</p>',
    timelineSteps: ['1단계: 14일 경과 여부 확인', '2단계: 내용증명 발송', '3단계: 고용노동청 진정', '4단계: 지연이자 포함 청구'],
    sections: [
      {
        title: '14일 내 미지급은 임금체불',
        content: '<p><strong style="color:#1e3a5f">근로기준법 제36조는 퇴직 후 14일 이내에 임금, 퇴직금, 기타 금품을 전액 지급하도록 의무화합니다.</strong></p>\n<ul>\n<li><strong>위반 시 처벌</strong> — 3년 이하 징역 또는 3,000만원 이하 벌금</li>\n<li><strong>지연이자</strong> — 14일 초과 시 연 20% 지연이자 발생</li>\n<li><strong>지급 대상</strong> — 기본급, 상여금, 미사용 연차수당, 퇴직금 등 모든 금품</li>\n</ul>',
      },
      {
        title: '대처 4단계',
        content: '<p><strong style="color:#1e3a5f">체계적으로 대응하면 받을 수 있습니다.</strong></p>\n<ol>\n<li><strong>내용증명 발송</strong> — 미지급 금액과 지급 기한(7일 이내)을 명시하여 우체국 내용증명으로 발송합니다.</li>\n<li><strong>고용노동청 진정</strong> — 내용증명 무응답 시 관할 고용노동청에 임금체불 진정을 접수합니다.</li>\n<li><strong>근로감독관 조사</strong> — 감독관이 사업주에게 지급 지시를 내립니다.</li>\n<li><strong>소송 또는 형사 고소</strong> — 여전히 미지급 시 민사소송(지연이자 포함) 또는 형사 고소를 진행합니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>미지급 급여 + 지연이자, AI가 계산합니다</strong></p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '준비해야 할 증거',
        content: '<p><strong style="color:#1e3a5f">아래 증거를 미리 확보하세요.</strong></p>\n<ul>\n<li>근로계약서, 급여명세서, 통장 입금내역</li>\n<li>퇴직일 확인 자료 (사직서 사본, 퇴직 통보 카톡 등)</li>\n<li>미지급 금액 산정 근거</li>\n<li>회사에 지급 요청한 기록 (카톡, 이메일)</li>\n</ul>',
      },
    ],
    cases: [{ title: '판례 — 퇴직 후 14일 규정은 강행규정', summary: '근로기준법 제36조의 금품 청산 의무는 강행규정으로, 당사자 합의로 이를 연장하더라도 합의의 합리성이 인정되지 않으면 무효입니다. 사용자는 퇴직 후 14일 이내에 모든 금품을 지급해야 합니다.', takeaway: '비슷한 상황이라면 "다음 월급날에 준다"는 약속만으로는 14일 규정이 면제되지 않습니다. 14일이 지나면 즉시 신고하세요.' }],
    faq: [
      { question: '마지막 급여에 미사용 연차수당도 포함되나요?', answer: '<p>네, 퇴직 시 미사용 연차에 대한 수당도 14일 내에 지급해야 합니다.</p>' },
      { question: '인수인계를 안 했다며 급여를 안 준다는데?', answer: '<p>인수인계 미완료를 이유로 임금 지급을 거부하는 것은 위법입니다. 임금과 인수인계는 별개의 문제입니다.</p>' },
      { question: '소액이라도 진정을 넣을 수 있나요?', answer: '<p>금액에 관계없이 임금체불 진정이 가능합니다. 소액이라도 사업주의 형사처벌 사유에 해당할 소지가 있습니다.</p>' },
      { question: '사업주가 연락이 안 되면?', answer: '<p>고용노동청 진정을 접수하면 감독관이 사업주를 직접 조사합니다. 사업주 소재가 불명이면 형사 고발을 통해 수배 처리될 수 있습니다.</p>' },
    ],
    cta: { text: '퇴직 후 미지급 급여 + 지연이자 AI로 계산하기', link: '/chat?domain=wage' },
    internalLinks: [{ label: '홈', href: '/' }, { label: '임금체불 가이드', href: '/guide/wage' }, { label: '퇴직금 14일 규정', href: '/guide/retirement/retirement-pay-14day-rule-detail' }, { label: '임금체불 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' }, { label: '퇴직금 지연이자', href: '/guide/retirement/retirement-delay-interest-20percent' }],
  },

  // ── 10. 임금체불 사업주 형사처벌 ──
  {
    domain: 'wage',
    slug: 'wage-employer-criminal-penalty',
    keyword: '임금체불 사업주 형사처벌 기준',
    questionKeyword: '임금체불 사장님을 형사처벌할 수 있나요?',
    ctaKeyword: '임금체불 형사처벌 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임금체불 사업주 형사처벌 기준과 절차 | 로앤가이드',
      description: '임금체불은 3년 이하 징역 또는 3,000만원 이하 벌금에 해당할 소지가 있습니다. 형사처벌 절차를 지금 확인하세요.',
    },
    intro: '<p>6개월째 월급이 밀리고 있는데 사장님은 "곧 준다"만 반복합니다. 더 이상 기다릴 수 없어 형사 고소를 고려하고 있습니다. 임금체불은 근로기준법 제109조에 따라 3년 이하의 징역 또는 3,000만원 이하의 벌금에 처하는 범죄입니다.</p>',
    timelineSteps: ['1단계: 임금체불 증거 확보', '2단계: 고용노동청 진정 접수', '3단계: 근로감독관 수사', '4단계: 검찰 송치·기소'],
    sections: [
      {
        title: '임금체불 형사처벌 기준',
        content: '<p><strong style="color:#1e3a5f">근로기준법 제109조에 따른 처벌 기준입니다.</strong></p>\n<ul>\n<li><strong>임금·퇴직금 미지급</strong> — 3년 이하 징역 또는 3,000만원 이하 벌금</li>\n<li><strong>반의사불벌죄</strong> — 근로자가 처벌을 원하지 않으면 처벌하지 않습니다. 단, 체불 상태가 계속되면 반의사불벌죄 조항이 적용되지 않습니다(2022년 개정).</li>\n<li><strong>반복 체불 가중처벌</strong> — 3년 이내 2회 이상 체불한 사업주는 반의사불벌죄 적용이 배제됩니다.</li>\n</ul>',
      },
      {
        title: '형사 절차 흐름',
        content: '<p><strong style="color:#1e3a5f">임금체불 형사처벌은 진정 → 수사 → 검찰 → 기소 순서입니다.</strong></p>\n<ol>\n<li><strong>고용노동청 진정</strong> — 관할 고용노동청에 임금체불 진정을 접수합니다.</li>\n<li><strong>근로감독관 수사</strong> — 감독관이 사업주를 조사하고 시정지시를 내립니다.</li>\n<li><strong>검찰 송치</strong> — 시정하지 않으면 사건을 검찰에 송치합니다.</li>\n<li><strong>기소·재판</strong> — 검찰이 기소하면 형사재판이 진행됩니다.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>임금체불 형사고소 절차, AI가 단계별로 안내합니다</strong></p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '형사처벌 외 동시 진행 가능한 절차',
        content: '<p><strong style="color:#1e3a5f">형사 절차와 별개로 민사 청구와 체당금 신청을 동시에 진행할 수 있습니다.</strong></p>\n<ul>\n<li><strong>민사소송</strong> — 미지급 임금 + 지연이자(연 20%)를 청구합니다.</li>\n<li><strong>체당금 신청</strong> — 사업주의 도산 시 근로복지공단에 체당금을 신청합니다.</li>\n<li><strong>재산 조회·가압류</strong> — 사업주의 재산을 조회하고 가압류하여 회수를 확보합니다.</li>\n</ul>',
      },
    ],
    cases: [{ title: '판례 — 반복 체불 사업주 가중처벌', summary: '2022년 근로기준법 개정으로 3년 이내 2회 이상 임금을 체불한 사업주에 대해서는 반의사불벌죄 조항이 적용되지 않습니다. 즉, 근로자가 처벌을 원하지 않더라도 검찰이 기소할 수 있습니다.', takeaway: '비슷한 상황이라면 사장님이 "합의하면 안 잡아간다"고 해도, 반복 체불이면 합의와 무관하게 처벌받을 수 있습니다.' }],
    faq: [
      { question: '형사 고소하면 밀린 월급을 받을 수 있나요?', answer: '<p>형사처벌과 임금 지급은 별개입니다. 형사 절차가 임금 지급 압박이 될 수 있지만, 확실한 회수를 위해서는 민사소송을 동시에 진행하세요.</p>' },
      { question: '사장님이 "돈이 없어서 못 준다"고 하면 처벌이 안 되나요?', answer: '<p>지불 능력이 없다는 것만으로 면책되지 않습니다. 다만 검찰이 기소 여부를 판단할 때 참고할 수 있습니다.</p>' },
      { question: '진정 후 사장님이 합의를 제안하면?', answer: '<p>미지급 임금 전액 + 지연이자를 포함한 합의가 아니면 수락하지 않는 것이 유리합니다. 합의 시 처벌불원서를 요구하는 경우가 많으므로 신중하게 판단하세요.</p>' },
      { question: '진정 접수부터 기소까지 얼마나 걸리나요?', answer: '<p>보통 3~6개월이 소요됩니다. 사안이 복잡하면 더 길어질 수 있습니다.</p>' },
    ],
    cta: { text: '임금체불 형사고소 가능 여부 AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [{ label: '홈', href: '/' }, { label: '임금체불 가이드', href: '/guide/wage' }, { label: '임금체불 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' }, { label: '퇴직 후 급여 미지급', href: '/guide/wage/wage-resignation-final-pay-delay' }, { label: '사업주 도산 시 체당금', href: '/guide/wage/wage-bankrupt-employer-how-to-claim' }],
  },
];
