import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 퇴직금 2개 + 임금체불 2개 + 해고 2개 (batch33)
// ───────────────────────────────────────────────────────────────────────────────

// 고유 존재 이유:
// 1. 이 페이지는 [퇴직금 계산 공식을 정확히 모르는 근로자]의 [어떤 항목이 평균임금에 포함되는지 헷갈리는 상황]에서 [6가지 포함·제외 항목별 계산 공식 안내]를 돕는 페이지다.
// 2. 이 페이지는 [퇴직금을 청구하려는 근로자]의 [노동청·민사소송·지급명령 중 어느 방법이 유리한지 모르는 상황]에서 [3가지 청구 채널별 장단점 비교]를 돕는 페이지다.
// 3. 이 페이지는 [임금체불 신고를 처음 하는 근로자]의 [신고부터 지급까지 전체 흐름을 모르는 상황]에서 [5단계 절차 타임라인 안내]를 돕는 페이지다.
// 4. 이 페이지는 [지연이자를 청구하려는 체불 근로자]의 [연 20% 이자 계산 기준과 예외를 모르는 상황]에서 [지연이자 계산 방법과 적용 제외 사유 안내]를 돕는 페이지다.
// 5. 이 페이지는 [부당해고를 당한 근로자]의 [구제절차 전체 흐름을 모르는 상황]에서 [노동위원회 구제신청부터 행정소송까지 5단계 안내]를 돕는 페이지다.
// 6. 이 페이지는 [해고된 근로자]의 [퇴직금과 해고예고수당 계산 기준을 모르는 상황]에서 [각각의 계산 공식과 지급 기한 안내]를 돕는 페이지다.

export const spokesBatch33Labor: SpokePage[] = [
  // ───────────────────────────────────────────
  // 1. retirement / retirement-comprehensive-calculation-formula
  // ───────────────────────────────────────────
  {
    domain: 'retirement',
    slug: 'retirement-comprehensive-calculation-formula',
    keyword: '퇴직금 계산 공식 항목별 총정리',
    questionKeyword: '퇴직금 계산할 때 어떤 항목이 포함되고 제외되나요?',
    ctaKeyword: '퇴직금 계산 공식 확인 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '퇴직금 계산 공식과 포함 항목 6가지 | 로앤가이드',
      description:
        '퇴직금이 생각보다 적게 나왔다면 평균임금에 포함되는 6가지 항목과 정확한 계산 공식을 지금 확인하세요',
    },
    intro:
      '<p>퇴직금 명세서를 받아 들었는데 예상보다 금액이 훨씬 적습니다. 회사는 "기본급으로만 계산한다"고 했지만, 매달 고정으로 받던 식대와 상여금은 빠져 있습니다. 근로기준법상 퇴직금은 평균임금을 기준으로 산정하며, 어떤 항목이 평균임금에 포함되는지에 따라 수백만 원의 차이가 날 수 있습니다. 포함·제외 기준을 항목별로 확인해보세요.</p>',
    sections: [
      {
        title: '퇴직금 계산 기본 공식과 평균임금의 의미',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금 = 1일 평균임금 x 30일 x (총 재직일수 / 365일)로 계산합니다.</strong></p>\n<ul>\n<li><strong>평균임금</strong> — 퇴직 전 3개월간 지급받은 임금 총액을 그 기간의 총 일수(역일 기준)로 나눈 금액입니다</li>\n<li><strong>재직일수</strong> — 입사일부터 퇴직일까지의 총 일수입니다. 수습기간·시용기간도 포함됩니다</li>\n<li><strong>최소 근속 요건</strong> — 1년 이상 계속 근로하고 4주 평균 주 15시간 이상 근로해야 퇴직금이 발생합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">핵심: 평균임금이 통상임금보다 낮으면 통상임금을 평균임금으로 적용합니다(근로기준법 제2조 제2항)</blockquote>',
      },
      {
        title: '평균임금에 포함되는 6가지 항목',
        content:
          '<p><strong style="color:#1e3a5f">계속적·정기적으로 지급되고 사용자에게 지급의무가 있는 금품은 임금으로서 평균임금에 포함됩니다.</strong></p>\n<ol>\n<li><strong>기본급</strong> — 근로계약서에 명시된 월 기본급 전액이 포함됩니다</li>\n<li><strong>고정 수당</strong> — 직책수당, 자격수당, 가족수당, 근속수당 등 매월 고정 지급되는 수당이 포함됩니다</li>\n<li><strong>식대·교통비</strong> — 전 직원에게 일률적·정기적으로 지급되는 식대, 교통보조비는 임금에 해당할 소지가 있습니다</li>\n<li><strong>연장·야간·휴일근로수당</strong> — 퇴직 전 3개월간 실제 지급된 연장근로수당, 야간수당, 휴일수당이 포함됩니다</li>\n<li><strong>정기상여금</strong> — 지급 시기와 금액이 확정되어 매년 정기적으로 지급되는 상여금은 포함됩니다. 다만 3개월분 평균임금 산정 시 연간 상여금을 12로 나누어 3개월분을 반영합니다</li>\n<li><strong>목표 인센티브(고정형)</strong> — 지급 규모가 사전에 확정된 고정적 금원으로서 근로성과의 사후적 정산에 해당하는 인센티브는 임금에 포함됩니다</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인의 급여 항목별 포함 여부를 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '평균임금에서 제외되는 항목과 흔한 착각',
        content:
          '<p><strong style="color:#1e3a5f">경영성과에 따라 지급 여부가 달라지거나, 은혜적·임의적으로 지급되는 금품은 평균임금에서 제외됩니다.</strong></p>\n<ul>\n<li><strong>성과 인센티브(변동형)</strong> — EVA 등 경영성과에 연동되어 지급률이 크게 변동하는 인센티브는 근로의 대가가 아닌 경영성과 분배로 보아 제외됩니다</li>\n<li><strong>특별성과급</strong> — 당기순이익 실현을 조건으로 지급되는 특별성과급은 임금이 아니라 이익 배분에 해당할 소지가 있습니다</li>\n<li><strong>경조사비·축의금</strong> — 회사가 복리후생 차원에서 일시적으로 지급하는 경조사비는 제외됩니다</li>\n<li><strong>실비변상 성격의 금품</strong> — 출장비, 출장일비, 여비 등 실비를 보전하는 성격의 금품은 임금이 아닙니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">주의: "매달 받았으니까 당연히 포함"이 아닙니다. 지급의무가 확정되어 있고 근로의 대가인지가 핵심 판단 기준입니다</blockquote>',
      },
      {
        title: '실전 계산 예시와 확인 방법',
        content:
          '<p><strong style="color:#1e3a5f">퇴직 전 3개월간 총 임금과 재직일수를 대입하면 예상 퇴직금을 산출할 수 있습니다.</strong></p>\n<ul>\n<li><strong>계산 예시</strong> — 월 기본급 300만 원 + 식대 20만 원 + 직책수당 30만 원 = 월 350만 원인 근로자가 5년(1,826일) 재직했다면: 3개월 임금 총액 1,050만 원 ÷ 91일 = 1일 평균임금 약 115,385원 → 퇴직금 = 115,385 x 30 x (1,826/365) ≒ 약 17,320,000원</li>\n<li><strong>고용노동부 퇴직금 계산기</strong> — 고용노동부 홈페이지의 퇴직금 계산기를 활용하면 포함 항목을 입력하여 자동 산출할 수 있습니다</li>\n<li><strong>퇴직금 명세서 교부 의무</strong> — 사용자는 퇴직금 지급 시 계산 내역이 포함된 명세서를 교부해야 합니다. 명세서가 없으면 고용노동부에 문의하세요</li>\n<li><strong>이의가 있을 때</strong> — 회사의 계산이 틀렸다고 판단되면 급여명세서와 통장 거래내역을 근거로 고용노동부에 진정하거나 민사소송을 제기할 수 있습니다</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 인센티브의 평균임금 포함 여부 판단 기준',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 상여기초금액에 연동하여 지급되는 "목표 인센티브"는 지급 규모가 사전에 확정된 고정적 금원으로서 근로의 대가인 임금에 해당한다고 판시했습니다. 반면 EVA의 20%를 재원으로 삼아 지급되는 "성과 인센티브"는 근로제공과 밀접한 관련성이 없어 평균임금 산정 기초가 되는 임금으로 볼 수 없다고 했습니다.',
        takeaway:
          '인센티브가 평균임금에 포함되려면 지급 규모가 사전에 확정되어 있고 근로제공과 직접 관련되어야 합니다. 변동형 성과급은 제외될 수 있으므로 본인이 받는 인센티브의 성격을 가능한 한 확인하세요.',
      },
    ],
    faq: [
      {
        question: '상여금이 평균임금에 포함되려면 어떤 조건을 갖춰야 하나요?',
        answer:
          '<strong>지급 시기·금액이 확정되어 정기적·계속적으로 지급되고, 사용자에게 지급의무가 있어야 합니다.</strong> 취업규칙이나 단체협약에 "매년 설·추석에 기본급의 100%를 지급한다"고 명시되어 있으면 임금에 해당할 소지가 있습니다. 반면 사장 재량으로 주는 특별 보너스는 제외됩니다.',
      },
      {
        question: '퇴직 전 3개월에 무급휴직이 포함되면 어떻게 계산하나요?',
        answer:
          '<strong>무급휴직 기간은 평균임금 산정 기간에서 제외하고 그 직전 3개월을 기준으로 산정합니다.</strong> 근로기준법 시행령 제2조에 따라 업무외 부상·질병, 사용자 귀책 휴업 등의 기간은 평균임금 산정 기간에서 빼고 계산합니다.',
      },
      {
        question: '식대가 비과세 한도 내라도 퇴직금 계산에 포함되나요?',
        answer:
          '<strong>세법상 비과세 여부와 노동법상 임금 해당 여부는 별개입니다.</strong> 전 직원에게 매월 정기적으로 지급되는 식대는 비과세 한도(월 20만 원) 내외와 관계없이 평균임금에 포함됩니다.',
      },
      {
        question: '연차수당도 퇴직금 계산에 포함되나요?',
        answer:
          '<strong>퇴직 전 3개월 내에 지급된 연차미사용수당은 평균임금에 포함됩니다.</strong> 다만 연차수당이 퇴직 전 3개월 밖에 지급되었다면 해당 산정 기간에는 반영되지 않습니다. 연간 연차수당을 12로 나눈 뒤 3개월분을 반영하는 방식으로 산정할 수도 있습니다.',
      },
      {
        question: '통상임금과 평균임금 중 어느 것이 퇴직금에 유리한가요?',
        answer:
          '<strong>평균임금이 통상임금보다 낮으면 통상임금을 기준으로 퇴직금을 산정합니다.</strong> 연장근로가 많아 평균임금이 높은 경우에는 평균임금이 유리하고, 고정급 비중이 높은 경우에는 통상임금이 더 높을 수 있으니 두 금액을 모두 비교해보세요.',
      },
    ],
    cta: {
      text: '퇴직금 포함 항목, AI가 분석해드립니다',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 산정 공식 가이드', href: '/guide/retirement/retirement-pay-formula-guide' },
      { label: '퇴직금 계산 방법 안내', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 지연이자 20% 안내', href: '/guide/retirement/retirement-delay-interest-20percent' },
      { label: '퇴직금 청구 어디서부터 시작할까', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '퇴직금 체불 진정 절차', href: '/guide/retirement/retirement-pay-complaint' },
    ],
  },

  // ───────────────────────────────────────────
  // 2. retirement / retirement-claim-channel-comparison
  // ───────────────────────────────────────────
  {
    domain: 'retirement',
    slug: 'retirement-claim-channel-comparison',
    keyword: '퇴직금 청구 방법 비교 노동청 법원',
    questionKeyword: '퇴직금 못 받을 때 노동청과 법원 중 어디로 가야 하나요?',
    ctaKeyword: '퇴직금 청구 방법 비교 상담',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '퇴직금 청구 3가지 방법 비교 분석 | 로앤가이드',
      description:
        '퇴직금을 못 받아서 어디에 신고해야 할지 모르겠다면 노동청 진정·지급명령·민사소송 3가지 방법을 비교해서 지금 확인하세요',
    },
    intro:
      '<p>퇴직한 지 한 달이 넘었는데 사장님은 연락을 피합니다. 인터넷에서 "노동청에 신고하라", "지급명령을 신청하라", "소송을 하라" 등 다양한 조언이 나오는데 어느 것이 자기 상황에 맞는 방법인지 판단이 안 됩니다. 각 방법의 비용, 소요 기간, 강제력을 비교하면 가장 효과적인 청구 전략을 세울 수 있습니다.</p>',
    sections: [
      {
        title: '방법 1: 고용노동부 진정 — 비용 0원, 가장 빠른 출발',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 진정은 비용이 들지 않고 평균 25일 내에 처리되는 가장 접근성이 높은 방법입니다.</strong></p>\n<ul>\n<li><strong>비용</strong> — 무료. 진정서 작성 후 관할 고용노동지청에 제출하거나 온라인(민원마당)으로 접수합니다</li>\n<li><strong>처리 기간</strong> — 접수 후 근로감독관이 배정되어 사업주를 출석 요구하고 조사합니다. 평균 25일, 복잡한 사안은 1~2개월 소요됩니다</li>\n<li><strong>강제력</strong> — 시정지시(14일 이내 지급 명령)를 내리며, 불이행 시 사법처리(벌금·징역)로 전환됩니다. 근로기준법 제109조에 따라 3년 이하 징역 또는 3,000만 원 이하 벌금입니다</li>\n<li><strong>적합한 경우</strong> — 체불 사실이 명확하고 사업주가 지급 능력이 있지만 고의로 미지급하는 경우에 가장 효과적입니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">핵심: 진정만으로 해결되지 않으면 민사소송으로 전환할 수 있으며, 진정 과정에서 확보한 조사 자료가 소송 증거로 활용됩니다</blockquote>',
      },
      {
        title: '방법 2: 지급명령(독촉절차) — 소송보다 빠르고 비용 절반',
        content:
          '<p><strong style="color:#1e3a5f">지급명령 신청은 소송의 절반 비용으로 법원의 지급 명령을 받을 수 있는 간이 절차입니다.</strong></p>\n<ul>\n<li><strong>비용</strong> — 소송 인지대의 1/10 수준입니다. 예를 들어 청구금액 1,000만 원 기준 인지대 약 25,000원 + 송달료입니다</li>\n<li><strong>처리 기간</strong> — 신청서 제출 후 법원이 심사하여 약 2~3주 내에 지급명령을 발령합니다. 사업주가 이의신청을 하지 않으면 확정판결과 같은 효력이 생깁니다</li>\n<li><strong>강제력</strong> — 확정된 지급명령으로 강제집행(계좌압류, 부동산압류)이 가능합니다</li>\n<li><strong>주의사항</strong> — 사업주가 2주 이내에 이의신청을 하면 자동으로 민사소송으로 전환됩니다. 체불 사실에 다툼이 없는 경우에 가장 적합합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 상황에 맞는 청구 방법을 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '방법 3: 민사소송(소액사건 포함) — 확실한 강제력',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금 청구 금액이 3,000만 원 이하라면 소액사건심판으로 빠르게 판결을 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>비용</strong> — 인지대 + 송달료 + 변호사 비용(선임 시). 청구금액 1,000만 원 기준 인지대 약 50,000원입니다</li>\n<li><strong>처리 기간</strong> — 소액사건(3,000만 원 이하)은 1회 변론으로 종결될 수 있어 약 1~3개월 소요됩니다. 일반 민사소송은 6개월~1년 이상 걸릴 수 있습니다</li>\n<li><strong>강제력</strong> — 판결 확정 후 강제집행이 가능합니다. 지연이자(연 20%)도 함께 청구할 수 있습니다</li>\n<li><strong>적합한 경우</strong> — 사업주가 체불 사실 자체를 다투거나 평균임금 산정에 분쟁이 있는 경우, 또는 노동청 진정이 실효성이 없을 때 적합합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">비교 요약: 체불이 명확하면 → 노동청 진정 우선, 다툼이 없으면 → 지급명령, 분쟁이 있으면 → 민사소송 순으로 검토하세요</blockquote>',
      },
      {
        title: '소멸시효와 병행 전략',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금 청구권의 소멸시효는 3년이며, 여러 방법을 병행하면 회수 가능성이 높아집니다.</strong></p>\n<ul>\n<li><strong>소멸시효 3년</strong> — 퇴직일 다음 날부터 기산하여 3년이 지나면 청구권이 소멸합니다. 소멸시효가 임박했다면 지급명령 신청으로 시효를 중단시키세요</li>\n<li><strong>병행 전략</strong> — 노동청 진정과 지급명령을 동시에 진행할 수 있습니다. 노동청 진정으로 형사 압박을 가하면서 지급명령으로 강제집행 근거를 확보하는 투트랙 전략이 효과적입니다</li>\n<li><strong>체당금 제도</strong> — 사업주가 도산하거나 지급 불능일 경우 고용노동부의 체당금 제도(최대 1,000만 원)를 활용할 수 있습니다</li>\n<li><strong>사업주 재산 파악</strong> — 강제집행을 위해 사업주의 부동산·예금·매출채권 등을 미리 파악해두면 유리합니다. 법원의 재산조회 제도를 이용할 수도 있습니다</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직금 소멸시효와 권리남용 판단',
        summary:
          '대법원 2024다294705 사건(대법원, 2025.05.29 선고)에서 법원은 장례지도사들이 퇴직일로부터 3년이 지난 후 퇴직금을 청구한 사안에서, 사업주가 소멸시효 완성을 주장하는 것이 권리남용에 해당하는지를 심리했습니다.',
        takeaway:
          '퇴직금 청구권의 소멸시효는 3년이며, 시효가 지나면 사업주의 항변으로 청구가 어려워집니다. 퇴직 후 가능한 빨리 청구 절차를 시작하고, 시효가 임박하면 지급명령으로 시효를 중단시키는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '노동청 진정과 민사소송을 동시에 할 수 있나요?',
        answer:
          '<strong>동시에 진행할 수 있습니다.</strong> 노동청 진정은 형사적 압박을, 민사소송은 민사적 강제집행 근거를 확보하는 별개의 절차입니다. 두 가지를 병행하면 사업주가 빨리 지급할 가능성이 높아집니다.',
      },
      {
        question: '체불 금액이 소액이면 어떤 방법이 가장 효율적인가요?',
        answer:
          '<strong>500만 원 이하라면 노동청 진정이 가장 효율적입니다.</strong> 비용이 들지 않고 처리가 빠릅니다. 소송 비용이 아까운 소액이라도 노동청 진정으로 시정명령을 받으면 사업주는 형사처벌 부담 때문에 지급하는 경우가 많습니다.',
      },
      {
        question: '사장님이 폐업하면 퇴직금을 받을 수 없나요?',
        answer:
          '<strong>사업주가 도산하더라도 체당금 제도로 퇴직금을 받을 수 있습니다.</strong> 고용노동부에 체당금을 신청하면 최대 1,000만 원 범위에서 국가가 먼저 지급하고 사업주에게 구상합니다. 다만 퇴직 전 3년간의 퇴직금만 대상입니다.',
      },
      {
        question: '지급명령에 이의신청이 들어오면 처음부터 다시 해야 하나요?',
        answer:
          '<strong>처음부터 다시 하는 것이 아니라 자동으로 민사소송으로 전환됩니다.</strong> 이미 제출한 지급명령 신청서가 소장으로 간주되므로 추가 인지대 차액만 납부하면 됩니다. 증거자료만 보강하면 소송을 진행할 수 있습니다.',
      },
      {
        question: '퇴직금 청구 시 지연이자도 같이 받을 수 있나요?',
        answer:
          '<strong>퇴직일로부터 14일이 지나도 지급되지 않으면 연 20%의 지연이자가 발생합니다.</strong> 노동청 진정이나 민사소송에서 원금과 함께 지연이자도 청구할 수 있습니다. 체불 기간이 길수록 이자가 커지므로 가능한 한 함께 청구하세요.',
      },
    ],
    cta: {
      text: '퇴직금 청구 방법, AI가 비교해드립니다',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 체불 진정 절차', href: '/guide/retirement/retirement-pay-complaint' },
      { label: '퇴직금 청구 어디서부터 시작할까', href: '/guide/retirement/retirement-pay-claim-where-to-start' },
      { label: '퇴직금 소멸시효 안내', href: '/guide/retirement/retirement-statute-of-limitations' },
      { label: '퇴직금 계산 방법 안내', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 지연이자 20% 안내', href: '/guide/retirement/retirement-delay-interest-20percent' },
    ],
  },

  // ───────────────────────────────────────────
  // 3. wage / wage-complaint-full-procedure-timeline
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'wage-complaint-full-procedure-timeline',
    keyword: '임금체불 신고 절차 타임라인 총정리',
    questionKeyword: '임금체불 신고하면 언제까지 돈을 받을 수 있나요?',
    ctaKeyword: '임금체불 신고 절차 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임금체불 신고부터 지급까지 절차 5단계 | 로앤가이드',
      description:
        '월급을 못 받아서 신고하려는데 절차와 소요 기간을 모르겠다면 신고부터 지급까지 5단계를 지금 확인하세요',
    },
    intro:
      '<p>두 달째 월급이 밀렸습니다. 사장님은 "회사 사정이 어렵다"는 말만 반복합니다. 노동청에 신고하겠다고 마음먹었지만 실제로 신고하면 언제 돈을 받을 수 있는지, 중간에 합의하라고 하면 어떻게 대응해야 하는지 모릅니다. 신고 접수부터 최종 지급까지의 전체 흐름을 단계별로 정리해보세요.</p>',
    sections: [
      {
        title: '1단계: 증거 확보와 체불 금액 산출 (D-7~D-1)',
        content:
          '<p><strong style="color:#1e3a5f">신고 전 1주일 안에 체불 금액을 확정하고 증거를 갖추는 것이 성공적인 진정의 첫걸음입니다.</strong></p>\n<ul>\n<li><strong>근로계약서 확인</strong> — 약정 임금, 지급일, 수당 항목을 확인합니다. 서면 계약서가 없으면 채용 공고, 카카오톡 대화, 급여 입금 내역으로 대체합니다</li>\n<li><strong>체불 금액 산출</strong> — 미지급 기본급 + 연장근로수당 + 주휴수당 + 퇴직금을 월별로 구분하여 계산합니다</li>\n<li><strong>증거 수집</strong> — 급여명세서, 통장 거래내역(지급 이력), 출퇴근 기록, 사장님과의 대화(문자·녹취), 동료 진술서를 확보합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">핵심: "2025년 1월 기본급 250만 원 + 연장근로수당 45만 원 미지급" 식으로 월별·항목별로 구체적으로 정리해야 합니다</blockquote>',
      },
      {
        title: '2단계: 진정서 접수와 근로감독관 배정 (D-Day~D+14)',
        content:
          '<p><strong style="color:#1e3a5f">관할 고용노동지청에 진정서를 제출하면 약 1~2주 내에 근로감독관이 배정됩니다.</strong></p>\n<ul>\n<li><strong>접수 방법</strong> — 관할 고용노동지청 방문, 우편, 또는 고용노동부 민원마당(온라인) 접수 모두 가능합니다</li>\n<li><strong>진정서 기재 사항</strong> — 사업장명, 대표자명, 사업장 주소, 근로기간, 체불 금액·기간, 요구사항을 기재합니다</li>\n<li><strong>감독관 배정</strong> — 접수 후 약 7~14일 내에 담당 근로감독관이 배정되고, 사건번호와 함께 연락이 옵니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 진정서 작성 방향과 필요 증거를 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3단계: 조사와 시정지시 (D+14~D+40)',
        content:
          '<p><strong style="color:#1e3a5f">근로감독관이 사업주를 출석시켜 조사한 뒤, 체불이 확인되면 14일 이내 지급을 명하는 시정지시를 내립니다.</strong></p>\n<ul>\n<li><strong>사업주 출석 조사</strong> — 근로감독관이 사업주에게 출석 요구서를 발송하고, 임금대장·근로계약서 등 자료 제출을 요구합니다</li>\n<li><strong>합의 권유</strong> — 조사 과정에서 사업주가 분할 지급이나 일부 감액을 제안할 수 있습니다. 합의 시 지급 기한과 미이행 조치를 가능한 한 합의서에 명시하세요</li>\n<li><strong>시정지시</strong> — 체불이 인정되면 근로감독관이 사업주에게 14일 이내 전액 지급을 지시합니다</li>\n<li><strong>불이행 시</strong> — 시정지시를 이행하지 않으면 사법처리(검찰 송치) 절차로 전환됩니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">주의: 합의 시 "원금 80%만 받겠다"는 식의 감액 합의는 나중에 나머지 20%를 청구하기 어려울 수 있으니 신중하게 판단하세요</blockquote>',
      },
      {
        title: '4~5단계: 사법처리와 강제집행 (D+40 이후)',
        content:
          '<p><strong style="color:#1e3a5f">시정지시 불이행 시 검찰 송치, 그래도 미지급이면 민사소송과 강제집행으로 회수합니다.</strong></p>\n<ul>\n<li><strong>4단계: 사법처리</strong> — 근로감독관이 사업주를 검찰에 송치합니다. 근로기준법 제109조에 따라 3년 이하 징역 또는 3,000만 원 이하 벌금에 처해질 수 있습니다. 이 단계에서 사업주가 지급하는 경우가 많습니다</li>\n<li><strong>5단계: 민사소송·강제집행</strong> — 형사처벌에도 미지급이면 민사소송 또는 지급명령을 통해 판결을 받고 강제집행(예금 압류, 부동산 강제경매)에 착수합니다</li>\n<li><strong>체당금 대체</strong> — 사업주가 도산·폐업했으면 고용노동부 체당금 제도(일반체당금 최대 1,000만 원, 소액체당금 최대 400만 원)를 활용합니다</li>\n<li><strong>소요 기간</strong> — 전체 과정은 빠르면 1개월, 사법처리까지 가면 3~6개월, 강제집행까지 포함하면 6개월~1년 이상 소요될 수 있습니다</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상시 5인 이상 사업장 판단과 체불 처벌',
        summary:
          '대법원 2020도16228 사건(대법원, 2023.06.15 선고)에서 법원은 근로기준법상 "상시 5명 이상의 근로자를 사용하는 사업 또는 사업장"의 판단 기준을 제시하면서, 주휴일에 실제 출근하지 않은 근로자는 상시 사용 근로자 수에서 제외해야 한다고 판시했습니다.',
        takeaway:
          '사업장 규모에 따라 적용되는 근로기준법 조항이 달라지므로, 임금체불 신고 전에 상시 근로자 수를 정확히 파악해야 합니다. 5인 미만 사업장이라도 임금 지급 의무 위반에 대한 처벌 규정은 적용됩니다.',
      },
    ],
    faq: [
      {
        question: '노동청 진정 접수 후 사업주가 보복을 하면 어떻게 하나요?',
        answer:
          '<strong>진정을 이유로 한 불이익(해고, 감봉 등)은 근로기준법 제104조에 따라 불법입니다.</strong> 보복성 해고나 불이익 조치를 받으면 추가로 부당해고 구제신청과 형사고소를 진행할 수 있습니다.',
      },
      {
        question: '재직 중에도 임금체불 신고를 할 수 있나요?',
        answer:
          '<strong>재직 중에도 신고할 수 있습니다.</strong> 재직 중 신고하면 증거 확보가 쉽고 사업주가 빠르게 지급하는 경우가 많습니다. 다만 고용관계가 불편해질 수 있으므로 퇴직을 준비하면서 진행하는 것도 방법입니다.',
      },
      {
        question: '소멸시효 3년이 거의 다 됐는데 시간이 없으면 어떻게 하나요?',
        answer:
          '<strong>지급명령을 먼저 신청하면 소멸시효가 중단됩니다.</strong> 법원에 지급명령 신청서를 제출하면 접수일부터 시효가 중단되므로, 시효가 임박한 경우 가장 빠른 대응 방법입니다.',
      },
      {
        question: '사업주가 "돈이 없다"고 하면 어떻게 받나요?',
        answer:
          '<strong>사업주 재산(부동산, 예금, 매출채권)에 대해 강제집행이 가능합니다.</strong> 판결이나 지급명령이 확정되면 법원에 재산조회를 신청하여 사업주 재산을 파악한 뒤 압류·추심 절차를 진행할 수 있습니다. 도산한 경우에는 체당금 제도를 활용하세요.',
      },
      {
        question: '온라인으로도 진정서를 제출할 수 있나요?',
        answer:
          '<strong>고용노동부 민원마당 홈페이지에서 온라인 접수가 가능합니다.</strong> 공인인증서(또는 간편인증) 로그인 후 "임금체불 진정"을 선택하면 양식에 따라 작성·제출할 수 있습니다. 증거자료도 파일로 첨부할 수 있습니다.',
      },
      {
        question: '임금체불 진정과 별도로 지연이자도 청구할 수 있나요?',
        answer:
          '<strong>퇴직 후 14일이 지나도 지급되지 않은 임금·퇴직금에 대해 연 20% 지연이자를 청구할 수 있습니다.</strong> 노동청 진정서에 지연이자도 함께 기재하세요. 다만 재직 중 체불에 대해서는 지연이자가 적용되지 않습니다.',
      },
    ],
    cta: {
      text: '임금체불 신고 절차, AI가 단계별로 안내합니다',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '임금체불 어디서부터 시작할까', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '임금체불 사업주 형사처벌', href: '/guide/wage/wage-employer-criminal-penalty' },
      { label: '임금체불 지연이자 계산', href: '/guide/wage/unpaid-wage-delay-interest-calculation' },
      { label: '임금체불 신고 절차 타임라인', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
    ],
  },

  // ───────────────────────────────────────────
  // 4. wage / wage-delay-interest-calculation-guide
  // ───────────────────────────────────────────
  {
    domain: 'wage',
    slug: 'wage-delay-interest-calculation-guide',
    keyword: '임금체불 지연이자 계산 기준 총정리',
    questionKeyword: '임금체불 지연이자 20%는 어떻게 계산하나요?',
    ctaKeyword: '임금체불 지연이자 계산 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '임금체불 지연이자 20% 계산 기준과 예외 | 로앤가이드',
      description:
        '퇴직 후 임금이 안 나와서 지연이자를 받고 싶다면 연 20% 기산일과 예외 사유를 지금 확인하세요',
    },
    intro:
      '<p>퇴직한 지 두 달이 넘었는데 밀린 월급은커녕 퇴직금도 받지 못했습니다. "퇴직 후 14일이 지나면 이자가 붙는다"는 이야기를 들었는데 정확히 얼마를 더 받을 수 있는지, 어떤 경우에 이자가 면제되는지 모릅니다. 근로기준법 제37조가 정하는 지연이자의 계산 방법과 예외 사유를 확인해보세요.</p>',
    sections: [
      {
        title: '지연이자 20%의 법적 근거와 기산일',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제37조에 따라 사용자가 퇴직 후 14일 이내에 임금·퇴직금을 지급하지 않으면 미지급 금액에 대해 연 20%의 지연이자가 발생합니다.</strong></p>\n<ul>\n<li><strong>기산일</strong> — 퇴직일 다음 날부터 14일이 경과한 다음 날부터 지연이자가 계산됩니다. 예: 4월 1일 퇴직 → 4월 16일부터 이자 발생</li>\n<li><strong>적용 대상</strong> — 미지급 임금(기본급, 수당, 상여금 등)과 퇴직금 모두 해당됩니다</li>\n<li><strong>이율</strong> — 연 20%(일 0.0548%)입니다. 상법상 법정이율(연 6%)이나 민법 이율(연 5%)보다 훨씬 높습니다</li>\n<li><strong>종료 시점</strong> — 실제로 전액이 지급되는 날까지 이자가 계속 발생합니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">핵심: 지연이자는 원금과 별도로 청구할 수 있는 법정 이자이며, 사업주와 합의할 때도 빠뜨리지 말고 포함시키세요</blockquote>',
      },
      {
        title: '지연이자 계산 방법과 실전 예시',
        content:
          '<p><strong style="color:#1e3a5f">지연이자 = 미지급 금액 x 20% x (지연일수 / 365일)로 계산합니다.</strong></p>\n<ul>\n<li><strong>계산 예시 1</strong> — 퇴직금 1,000만 원을 90일간 미지급: 10,000,000 x 0.20 x (90/365) = 약 493,151원</li>\n<li><strong>계산 예시 2</strong> — 임금 500만 원 + 퇴직금 800만 원 = 총 1,300만 원을 180일간 미지급: 13,000,000 x 0.20 x (180/365) = 약 1,282,192원</li>\n<li><strong>복리 아님</strong> — 지연이자는 단리로 계산합니다. 이자에 이자가 붙지는 않습니다</li>\n<li><strong>일부 지급 시</strong> — 중간에 일부 금액이 지급되면 미지급 잔액 기준으로 이후 이자를 계산합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인의 지연이자 예상 금액을 계산해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '지연이자 면제(감면) 사유 4가지',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 시행령 제18조는 사용자의 귀책사유가 아닌 경우 지연이자를 면제하는 4가지 사유를 규정하고 있습니다.</strong></p>\n<ol>\n<li><strong>천재·사변 등 비상한 사유</strong> — 자연재해, 전쟁 등 불가항력으로 지급이 불가능한 경우</li>\n<li><strong>파산선고·회생절차 개시</strong> — 법원의 파산선고 또는 회생절차 개시결정이 있는 경우</li>\n<li><strong>임금채권 존부에 대한 다툼</strong> — 사업주가 임금 금액이나 지급 의무 자체를 다투고 있어 법적 절차가 진행 중인 경우. 다만 단순히 "돈이 없다"는 주장만으로는 면제되지 않습니다</li>\n<li><strong>기타 부득이한 사유</strong> — 사업주의 귀책사유 없이 지급이 지연된 것으로 인정되는 경우</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">주의: "경영이 어렵다", "매출이 없다"는 것만으로는 지연이자 면제 사유에 해당하지 않습니다. 면제 사유는 매우 제한적으로 해석됩니다</blockquote>',
      },
      {
        title: '지연이자 청구 방법과 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">지연이자는 임금체불 진정, 민사소송, 지급명령 신청 시 원금과 함께 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>노동청 진정 시</strong> — 진정서에 "미지급 임금 OOO원 및 근로기준법 제37조에 따른 지연이자 연 20%를 청구한다"고 기재하세요</li>\n<li><strong>민사소송 시</strong> — 소장의 청구취지에 "퇴직일로부터 14일이 경과한 날부터 다 갚는 날까지 연 20%의 비율에 의한 금원을 지급하라"고 기재합니다</li>\n<li><strong>재직 중 체불</strong> — 재직 중 체불에 대해서는 연 20% 지연이자가 적용되지 않습니다. 퇴직 후 미지급 금품에만 적용됩니다</li>\n<li><strong>합의 시 주의</strong> — 사업주와 합의할 때 원금만 합의하고 지연이자를 빠뜨리는 실수가 많습니다. 합의서에 지연이자 포함 여부를 명시하세요</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 특별성과급의 임금 해당 여부와 지연이자',
        summary:
          '대법원 2022다255454 사건(대법원, 2026.01.29 선고)에서 법원은 "당기순이익 실현"을 조건으로 지급되는 특별성과급은 경영성과 분배에 해당하므로 평균임금 산정의 기초가 되는 임금으로 볼 수 없다고 판시했습니다.',
        takeaway:
          '지연이자 계산의 기초가 되는 "미지급 임금"의 범위를 정확히 파악해야 합니다. 임금에 해당하지 않는 금품은 지연이자 청구 대상에서 제외되므로, 어떤 항목이 임금인지 사전에 확인하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '재직 중에 밀린 월급에도 연 20% 이자가 붙나요?',
        answer:
          '<strong>재직 중 체불에 대해서는 연 20% 지연이자가 적용되지 않습니다.</strong> 근로기준법 제37조의 지연이자는 퇴직 후 14일 이내에 지급하지 않은 금품에 한해 적용됩니다. 재직 중 체불에 대해서는 민법상 법정이율(연 5%)만 청구할 수 있습니다.',
      },
      {
        question: '사업주가 일부만 지급하면 이자는 어떻게 되나요?',
        answer:
          '<strong>일부 지급된 날을 기준으로 미지급 잔액에 대해서만 이후 이자가 계산됩니다.</strong> 예를 들어 총 1,000만 원 중 600만 원이 지급되면 그 이후부터는 나머지 400만 원에 대해서만 연 20%가 적용됩니다.',
      },
      {
        question: '지연이자만 따로 소송할 수 있나요?',
        answer:
          '<strong>원금과 별도로 지연이자만 청구하는 소송도 가능합니다.</strong> 원금은 이미 지급받았지만 지연이자를 받지 못한 경우, 별도의 민사소송으로 청구할 수 있습니다. 다만 소송 비용 대비 이자 금액을 비교하여 판단하세요.',
      },
      {
        question: '합의서에 "일체의 청구를 포기한다"고 쓰면 이자도 못 받나요?',
        answer:
          '<strong>포괄적 부제소 합의를 한 경우 지연이자도 포기한 것으로 해석될 수 있습니다.</strong> 합의 시 "원금 OOO원 + 지연이자 OOO원을 포함하여 총 OOO원에 합의한다"고 구체적으로 기재하는 것이 안전합니다.',
      },
      {
        question: '5인 미만 사업장에서도 지연이자를 받을 수 있나요?',
        answer:
          '<strong>근로기준법 제37조는 5인 미만 사업장에도 적용됩니다.</strong> 상시 근로자 5인 미만 사업장이라도 퇴직 후 14일 이내에 임금·퇴직금이 지급되지 않으면 연 20% 지연이자를 청구할 수 있습니다.',
      },
    ],
    cta: {
      text: '지연이자 금액, AI가 계산해드립니다',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '임금체불 어디서부터 시작할까', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '임금체불 신고 절차 타임라인', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '임금체불 사업주 형사처벌', href: '/guide/wage/wage-employer-criminal-penalty' },
      { label: '임금체불 지연이자 계산', href: '/guide/wage/unpaid-wage-delay-interest-calculation' },
    ],
  },

  // ───────────────────────────────────────────
  // 5. dismissal / dismissal-relief-procedure-comprehensive
  // ───────────────────────────────────────────
  {
    domain: 'dismissal',
    slug: 'dismissal-relief-procedure-comprehensive',
    keyword: '부당해고 구제절차 전체 흐름 총정리',
    questionKeyword: '부당해고 구제절차는 어떻게 진행되나요?',
    ctaKeyword: '부당해고 구제절차 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '부당해고 구제절차 5단계 완전 정리 | 로앤가이드',
      description:
        '갑자기 해고 통보를 받아 억울하다면 노동위원회 구제신청부터 행정소송까지 5단계 절차를 지금 확인하세요',
    },
    intro:
      '<p>"내일부터 나오지 마세요." 사장님의 한마디에 하루아침에 직장을 잃었습니다. 정당한 사유도 없이, 서면 통지도 없이 해고된 것 같은데 어디서부터 어떻게 다퉈야 할지 모릅니다. 근로기준법 제23조는 "정당한 이유 없이 해고하지 못한다"고 규정하고 있으며, 부당해고를 당했다면 노동위원회 구제신청을 통해 복직하거나 금전보상을 받을 수 있습니다.</p>',
    sections: [
      {
        title: '1단계: 해고 직후 즉시 해야 할 일 (D-Day~D+3)',
        content:
          '<p><strong style="color:#1e3a5f">해고 통보를 받은 직후 3일 안에 증거를 확보하고, 해고의 부당성을 판단하는 것이 가장 중요합니다.</strong></p>\n<ul>\n<li><strong>해고 통지서 확보</strong> — 해고 사유와 시기가 기재된 서면 통지를 요구하세요. 구두 해고인 경우 대화 내용을 녹취하거나 문자로 "해고 사유를 서면으로 알려 달라"고 요청하세요</li>\n<li><strong>증거 수집</strong> — 근로계약서, 급여명세서, 출퇴근 기록, 업무 이메일, 인사평가 자료 등을 확보합니다. 회사 계정이 차단되기 전에 필요한 자료를 복사해두세요</li>\n<li><strong>해고 사유 확인</strong> — 해고 사유가 근로기준법 제23조의 "정당한 이유"에 해당하는지 확인합니다. 서면 통지 없는 해고, 30일 전 예고 없는 즉시 해고는 절차적으로 위법 소지가 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">핵심: 해고 통보 후 "사직서를 쓰라"는 요구에 응하지 마세요. 사직서를 제출하면 자발적 퇴직으로 처리되어 구제신청이 어려워집니다</blockquote>',
      },
      {
        title: '2단계: 지방노동위원회 구제신청 (해고일로부터 3개월 이내)',
        content:
          '<p><strong style="color:#1e3a5f">부당해고 구제신청은 해고일로부터 3개월 이내에 관할 지방노동위원회에 제출해야 합니다.</strong></p>\n<ul>\n<li><strong>신청서 작성</strong> — 해고 경위, 해고 사유의 부당성, 요구사항(복직 또는 금전보상)을 구체적으로 기재합니다</li>\n<li><strong>제척기간 3개월</strong> — 해고일로부터 3개월이 지나면 구제신청을 할 수 없습니다. 이 기간은 연장되지 않으므로 가능한 한 기한 내에 신청하세요</li>\n<li><strong>금전보상명령</strong> — 복직을 원하지 않으면 해고기간 동안 받을 수 있었던 임금 상당액 이상의 금전보상을 신청할 수 있습니다(근로기준법 제30조 제3항)</li>\n<li><strong>심문 절차</strong> — 노동위원회가 양 당사자를 출석시켜 심문하고, 약 60~90일 내에 판정합니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 해고 사유의 부당성 여부를 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '3~4단계: 중앙노동위원회 재심과 행정소송',
        content:
          '<p><strong style="color:#1e3a5f">지방노동위원회 판정에 불복하면 중앙노동위원회 재심을 거쳐 행정소송까지 진행할 수 있습니다.</strong></p>\n<ul>\n<li><strong>3단계: 재심 신청</strong> — 초심 판정서를 송달받은 날로부터 10일 이내에 중앙노동위원회에 재심을 신청합니다. 재심도 약 60~90일 내에 판정됩니다</li>\n<li><strong>4단계: 행정소송</strong> — 재심 판정에도 불복하면 재심판정서를 송달받은 날로부터 15일 이내에 행정법원에 행정소송(재심판정취소소송)을 제기합니다</li>\n<li><strong>이행강제금</strong> — 사용자가 구제명령을 이행하지 않으면 노동위원회가 2,000만 원 이하의 이행강제금을 부과할 수 있습니다. 이행할 때까지 매년 2회 부과됩니다</li>\n<li><strong>별도 민사소송</strong> — 구제절차와 별도로 해고무효확인 및 임금 지급 청구의 민사소송을 법원에 제기할 수도 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">주의: 구제신청 중에 근로계약기간 만료, 정년 도달, 폐업 등으로 근로관계가 종료되면 구제명령을 받을 이익이 소멸할 수 있습니다</blockquote>',
      },
      {
        title: '5단계: 복직 또는 금전보상 이행 확인',
        content:
          '<p><strong style="color:#1e3a5f">구제명령이 확정되면 사용자는 복직 또는 금전보상을 이행해야 하며, 불이행 시 추가 제재가 가해집니다.</strong></p>\n<ul>\n<li><strong>복직 이행</strong> — 사용자가 원직복직과 해고기간 임금 상당액을 지급해야 합니다. 복직 후 보복성 인사조치(감봉, 전보)는 별도의 부당노동행위에 해당할 수 있습니다</li>\n<li><strong>금전보상 이행</strong> — 금전보상 결정 시 해고기간 임금 상당액 이상을 지급해야 합니다. 사용자가 해고를 취소하고 임금을 지급했더라도 금전보상명령의 구제이익은 소멸하지 않습니다</li>\n<li><strong>불이행 시 제재</strong> — 확정된 구제명령 불이행 시 1년 이하 징역 또는 1,000만 원 이하 벌금에 처해집니다(근로기준법 제111조)</li>\n<li><strong>전체 소요 기간</strong> — 구제신청부터 확정까지 빠르면 3~4개월, 행정소송까지 가면 1~2년 이상 소요될 수 있습니다</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 금전보상명령의 구제이익',
        summary:
          '대법원 2024두54683 사건(대법원, 2025.03.13 선고)에서 법원은 부당해고 구제신청 후 사용자가 해고를 취소하여 원직복직을 명하고 임금 상당액을 지급했더라도, 특별한 사정이 없는 한 근로자가 금전보상명령을 받을 구제이익이 소멸하는 것은 아니라고 판시했습니다.',
        takeaway:
          '사용자가 해고를 취소하고 복직시켰더라도 금전보상명령을 받을 권리는 유지됩니다. 구제신청 시 금전보상도 함께 신청해두면 더 유리한 결과를 얻을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '5인 미만 사업장에서도 부당해고 구제신청이 가능한가요?',
        answer:
          '<strong>상시 근로자 5인 미만 사업장에는 근로기준법 제23조(해고 제한)가 적용되지 않으므로 노동위원회 구제신청이 어렵습니다.</strong> 다만 해고예고수당(30일분 통상임금) 청구는 가능하고, 부당한 해고라면 민사소송으로 다툴 수 있습니다.',
      },
      {
        question: '구제신청 기간 3개월을 놓쳤으면 방법이 없나요?',
        answer:
          '<strong>노동위원회 구제신청은 불가하지만, 민사소송(해고무효확인소송)은 별도로 제기할 수 있습니다.</strong> 민사소송에는 별도의 제척기간이 없으므로 소멸시효(3년) 내에 소송을 제기하면 됩니다.',
      },
      {
        question: '구제신청 중에 다른 회사에 취업해도 되나요?',
        answer:
          '<strong>다른 회사에 취업하더라도 구제신청의 효력에는 영향이 없습니다.</strong> 다만 복직 구제를 받은 후 원래 회사로 복귀해야 하므로, 새 직장과의 근로계약 조건을 잘 조율해두세요.',
      },
      {
        question: '해고예고를 받지 못한 것도 부당해고에 해당하나요?',
        answer:
          '<strong>해고예고 의무 위반(30일 전 예고 미실시)은 해고예고수당 지급 의무를 발생시키지만, 그 자체로 해고가 무효가 되지는 않습니다.</strong> 해고의 부당성은 해고 "사유"의 정당성으로 판단되므로 별개로 검토해야 합니다.',
      },
      {
        question: '권고사직도 부당해고로 다툴 수 있나요?',
        answer:
          '<strong>회사의 강압에 의해 어쩔 수 없이 사직서를 쓴 경우라면 부당해고로 다툴 수 있습니다.</strong> 핵심은 사직의 의사가 진정한 자발적 의사였는지 여부입니다. 강압적 상황을 증명할 녹취, 문자, 증인 확보가 중요합니다.',
      },
      {
        question: '구제명령이 확정되면 밀린 임금도 받을 수 있나요?',
        answer:
          '<strong>복직 명령이 확정되면 해고기간 동안의 임금 상당액을 받을 수 있습니다.</strong> 다만 해고기간 중 다른 곳에서 벌어들인 중간수입은 공제될 수 있으므로 금액 산정에 주의가 필요합니다.',
      },
    ],
    cta: {
      text: '부당해고 구제절차, AI가 안내합니다',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '해고 어디서부터 시작할까', href: '/guide/dismissal/dismissed-where-to-start' },
      { label: '부당해고 첫 대응 가이드', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '부당해고 구제절차 안내', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '해고예고수당 계산 방법', href: '/guide/dismissal/dismissal-notice-pay-calculation' },
      { label: '부당해고 증거 수집 방법', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
    ],
  },

  // ───────────────────────────────────────────
  // 6. dismissal / dismissal-severance-calculation-fired
  // ───────────────────────────────────────────
  {
    domain: 'dismissal',
    slug: 'dismissal-severance-calculation-fired',
    keyword: '해고 시 퇴직금 해고수당 계산',
    questionKeyword: '해고당했을 때 퇴직금과 해고예고수당은 얼마인가요?',
    ctaKeyword: '해고 시 퇴직금·해고수당 계산 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '해고 시 퇴직금·해고예고수당 계산 기준 | 로앤가이드',
      description:
        '갑자기 해고를 당해서 퇴직금과 해고예고수당이 얼마인지 모르겠다면 각각의 계산 기준과 지급 기한을 지금 확인하세요',
    },
    intro:
      '<p>어제까지 멀쩡히 출근하던 회사에서 오늘 "그만 나와 달라"는 통보를 받았습니다. 30일 전 예고도 없었고, 퇴직금 이야기는 꺼내지도 못했습니다. 해고된 근로자는 퇴직금과 해고예고수당을 각각 별도로 받을 수 있으며, 두 가지는 계산 기준과 지급 시기가 다릅니다. 정확한 금액을 산출하여 빠짐없이 청구하세요.</p>',
    sections: [
      {
        title: '퇴직금 계산: 해고되어도 동일하게 적용',
        content:
          '<p><strong style="color:#1e3a5f">해고든 자발적 퇴직이든 퇴직금 계산 방식은 동일하며, 1년 이상 근속한 근로자에게 지급됩니다.</strong></p>\n<ul>\n<li><strong>계산 공식</strong> — 퇴직금 = 1일 평균임금 x 30일 x (총 재직일수 / 365일)</li>\n<li><strong>평균임금</strong> — 해고일 직전 3개월간 지급받은 임금 총액 ÷ 그 기간의 총 일수(역일 기준)</li>\n<li><strong>지급 기한</strong> — 해고일로부터 14일 이내에 지급해야 합니다. 미지급 시 연 20% 지연이자가 발생합니다</li>\n<li><strong>계산 예시</strong> — 월 기본급 300만 원 + 식대 20만 원인 근로자가 3년(1,095일) 근무 후 해고: 3개월 임금 960만 원 ÷ 91일 = 일 105,495원 → 퇴직금 = 105,495 x 30 x 3 ≒ 약 9,494,550원</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">핵심: 해고가 부당해고로 판정되어 복직하더라도, 해고 기간 동안의 퇴직금 산정 기간은 연속됩니다</blockquote>',
      },
      {
        title: '해고예고수당: 30일분 통상임금',
        content:
          '<p><strong style="color:#1e3a5f">사용자가 30일 전에 해고 예고를 하지 않았다면, 30일분 이상의 통상임금을 해고예고수당으로 지급해야 합니다.</strong></p>\n<ul>\n<li><strong>법적 근거</strong> — 근로기준법 제26조: 30일 전에 예고를 하지 않으면 30일분 이상의 통상임금을 지급해야 합니다</li>\n<li><strong>통상임금 기준</strong> — 기본급 + 고정 수당(직책수당, 자격수당 등) 등 정기적·일률적으로 지급되는 금품이 기준입니다. 연장근로수당은 제외됩니다</li>\n<li><strong>계산 예시</strong> — 통상임금이 월 320만 원(기본급 280만 원 + 직책수당 20만 원 + 자격수당 20만 원)이면 해고예고수당 = 320만 원</li>\n<li><strong>적용 예외</strong> — 일용근로자(3개월 미만 근무), 2개월 이내 기간제, 월급 근로자의 수습기간(3개월 이내) 등은 해고예고 의무가 면제됩니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 퇴직금과 해고예고수당 예상 금액을 계산해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '해고가 무효여도 해고예고수당은 받을 수 있다',
        content:
          '<p><strong style="color:#1e3a5f">부당해고로 판정되어 해고가 무효가 되더라도, 해고예고 없이 즉시 해고된 경우 해고예고수당 지급의무는 유지됩니다.</strong></p>\n<ul>\n<li><strong>대법원 판례 입장</strong> — 해고예고수당은 해고의 유효·무효와 관계없이 지급되어야 하는 금품입니다. 해고가 무효로 판정되더라도 근로자는 이미 받은 해고예고수당을 반환할 필요가 없습니다</li>\n<li><strong>근거</strong> — 해고예고제도는 근로자가 해고에 대비할 시간적·경제적 여유를 보장하려는 것으로, 해고의 효력과는 별개의 보호 장치입니다</li>\n<li><strong>실무 포인트</strong> — 부당해고 구제신청과 해고예고수당 청구를 동시에 진행할 수 있습니다. 구제신청은 노동위원회에, 해고예고수당은 노동청 진정이나 민사소송으로 각각 청구하세요</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;background:#f7f7f7;color:#555">주의: 해고예고수당을 받았다고 해서 해고를 승인한 것이 아닙니다. 수당을 수령하면서도 부당해고를 다툴 수 있습니다</blockquote>',
      },
      {
        title: '청구 절차와 지급 기한 정리',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금과 해고예고수당의 지급 기한과 청구 방법을 정리합니다.</strong></p>\n<ul>\n<li><strong>퇴직금 지급 기한</strong> — 해고일(퇴직일)로부터 14일 이내. 미지급 시 연 20% 지연이자 + 형사처벌(3년 이하 징역 또는 3,000만 원 이하 벌금)</li>\n<li><strong>해고예고수당 지급 기한</strong> — 해고 시 즉시 지급해야 합니다. 미지급 시 근로기준법 제110조에 따라 2년 이하 징역 또는 2,000만 원 이하 벌금</li>\n<li><strong>청구 방법</strong> — 두 가지 모두 고용노동부 진정, 지급명령, 민사소송으로 청구할 수 있습니다</li>\n<li><strong>소멸시효</strong> — 퇴직금은 3년, 해고예고수당은 3년의 소멸시효가 적용됩니다</li>\n<li><strong>체당금</strong> — 사업주 도산 시 퇴직금은 체당금으로 받을 수 있지만, 해고예고수당은 체당금 대상이 아닙니다</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 해고 무효와 해고예고수당 지급의무',
        summary:
          '대법원 2017다16778 사건(대법원, 2018.09.13 선고)에서 법원은 사용자가 근로자를 해고하면서 30일 전에 예고를 하지 않은 경우, 해고가 유효한지와 관계없이 해고예고수당을 지급해야 한다고 판시했습니다. 해고가 부당해고에 해당하여 효력이 없더라도 근로자가 해고예고수당을 부당이득으로 반환할 의무는 없다고 했습니다.',
        takeaway:
          '해고예고수당은 해고의 유·무효와 무관하게 받을 수 있는 법적 권리입니다. 즉시 해고를 통보받았다면 부당해고 다툼과 별도로 해고예고수당 30일분을 가능한 한 청구하세요.',
      },
    ],
    faq: [
      {
        question: '해고예고수당과 퇴직금을 둘 다 받을 수 있나요?',
        answer:
          '<strong>해고예고수당과 퇴직금은 별개의 권리이므로 둘 다 받을 수 있습니다.</strong> 해고예고수당은 예고 없는 해고에 대한 보상이고, 퇴직금은 근속에 대한 보상입니다. 하나를 받았다고 다른 하나가 소멸하지 않습니다.',
      },
      {
        question: '수습기간 중 해고되면 해고예고수당을 못 받나요?',
        answer:
          '<strong>3개월 이내의 수습기간 중이라면 해고예고 의무가 면제됩니다.</strong> 다만 수습기간이 3개월을 넘으면 해고예고 의무가 적용되므로, 3개월이 지난 후 즉시 해고된 경우 해고예고수당을 청구할 수 있습니다.',
      },
      {
        question: '해고예고를 15일 전에 받았으면 수당이 반만 나오나요?',
        answer:
          '<strong>해고예고 기간이 30일에 미달하면 부족한 일수분의 통상임금을 해고예고수당으로 지급해야 합니다.</strong> 예를 들어 15일 전에 예고를 받았다면 나머지 15일분의 통상임금을 청구할 수 있습니다.',
      },
      {
        question: '징계해고되면 퇴직금을 못 받나요?',
        answer:
          '<strong>징계해고라도 퇴직금은 지급해야 합니다.</strong> 퇴직금은 근로기준법상 근속 1년 이상인 모든 근로자에게 발생하는 법정 권리이며, 해고 사유와 관계없이 지급됩니다. 취업규칙에 "징계해고 시 퇴직금을 감액한다"는 규정이 있어도 무효입니다.',
      },
      {
        question: '해고예고수당을 받으면 부당해고로 싸울 수 없나요?',
        answer:
          '<strong>해고예고수당 수령은 해고 승인으로 볼 수 없으므로 부당해고 구제신청은 가능합니다.</strong> 대법원도 해고예고수당과 해고의 유·무효는 별개라고 판시하고 있습니다. 수당을 받으면서 동시에 부당해고를 다투세요.',
      },
    ],
    cta: {
      text: '해고 시 받을 수 있는 금액, AI가 계산합니다',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '해고예고수당 계산 방법', href: '/guide/dismissal/dismissal-notice-pay-calculation' },
      { label: '부당해고 첫 대응 가이드', href: '/guide/dismissal/unfair-dismissal-first-steps' },
      { label: '부당해고 구제절차 안내', href: '/guide/dismissal/unfair-dismissal-relief-procedure' },
      { label: '해고 어디서부터 시작할까', href: '/guide/dismissal/dismissed-where-to-start' },
      { label: '부당해고 증거 수집 방법', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
    ],
  },
];
