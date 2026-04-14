import { SpokePage } from '../spoke-pages';

// ───────────────────────────────────────────────────────────────────────────────
// 임금체불 2개 + 교통사고 3개 + 이혼 3개 + 회생·파산 3개 + 전세 2개 + 이웃분쟁 1개 (batch32)
// ───────────────────────────────────────────────────────────────────────────────

export const spokesBatch32Misc: SpokePage[] = [
  // ── 임금체불 1. 야간·연장근로수당 정확한 계산법 ──
  {
    domain: 'wage',
    slug: 'wage-night-overtime-exact-calculation',
    keyword: '야간 연장근로수당 정확한 계산법',
    questionKeyword: '야간근무와 연장근로수당은 정확히 어떻게 계산하나요?',
    ctaKeyword: '야간 연장근로수당 계산 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '야간·연장근로수당 계산법 3단계 공식 | 로앤가이드',
      description:
        '야간근무와 연장근로를 했는데 수당이 제대로 나오지 않아 답답하다면, 정확한 계산 공식과 청구 방법을 지금 확인하세요.',
    },
    intro:
      '<p>밤 10시부터 새벽 6시까지 야간근무를 했는데, 급여명세서를 보면 수당이 기본급과 큰 차이가 없습니다. 연장근로까지 겹쳤는데도 가산수당이 빠져 있는 것 같습니다. 야간수당과 연장수당은 법으로 정해진 가산율이 있어, 정확한 계산 공식만 알면 미지급 여부를 곧바로 확인할 수 있습니다.</p>',
    sections: [
      {
        title: '야간·연장근로수당의 법적 가산율',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제56조에 따라 연장·야간·휴일근로에는 통상임금의 50%를 가산해야 합니다.</strong></p>\n<ul>\n<li><strong>연장근로수당</strong> — 1일 8시간, 1주 40시간을 초과하는 근로에 대해 통상임금의 50%를 가산하여 지급합니다. 예: 시급 1만원이면 연장 1시간당 1만 5천원입니다.</li>\n<li><strong>야간근로수당</strong> — 밤 10시부터 새벽 6시 사이의 근로에 대해 통상임금의 50%를 가산합니다. 야간근로가 동시에 연장근로에 해당하면 가산율이 중첩되어 통상임금의 100%를 추가로 받게 됩니다.</li>\n<li><strong>휴일근로수당</strong> — 8시간 이내는 50%, 8시간 초과분은 100%를 가산합니다.</li>\n<li><strong>5인 미만 사업장 주의</strong> — 상시 근로자 5인 미만 사업장은 연장·야간·휴일 가산수당 적용이 제외됩니다. 다만 야간근로 자체에 대한 기본임금은 지급해야 합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 야간 + 연장이 겹치면 통상임금의 200%(기본 100% + 연장가산 50% + 야간가산 50%)를 받아야 합니다.</blockquote>',
      },
      {
        title: '통상임금 기준 수당 계산 공식',
        content:
          '<p><strong style="color:#1e3a5f">수당 계산의 출발점은 시간당 통상임금을 정확히 산정하는 것입니다.</strong></p>\n<ul>\n<li><strong>월급제 시간급 산정</strong> — 월 통상임금 ÷ 월 소정근로시간(209시간 기준)으로 시급을 구합니다. 예: 월급 250만원이면 시급 약 11,962원입니다.</li>\n<li><strong>연장근로수당 계산</strong> — 시급 × 1.5 × 연장근로시간. 월 20시간 연장 시 11,962 × 1.5 × 20 = 358,860원입니다.</li>\n<li><strong>야간근로수당 계산</strong> — 시급 × 0.5 × 야간근로시간(야간에 해당하는 시간만). 이미 기본급에 포함된 시간이므로 가산분 0.5만 추가합니다.</li>\n<li><strong>중복 가산 시</strong> — 야간 + 연장이 동시에 해당하면 시급 × 2.0으로 계산합니다(기본 1.0 + 연장 0.5 + 야간 0.5).</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>내 야간·연장수당 정확히 계산해 보세요</strong></p>\n<p style="margin:0;font-size:0.95em">근무시간과 급여 정보를 입력하면 미지급 수당을 AI가 무료로 계산합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '미지급 수당 청구 절차와 시효',
        content:
          '<p><strong style="color:#1e3a5f">미지급 수당은 3년 이내에 청구해야 하며, 노동청 진정이 가장 빠른 방법입니다.</strong></p>\n<ul>\n<li><strong>소멸시효 3년</strong> — 근로기준법 제49조에 따라 임금채권은 3년간 행사하지 않으면 시효로 소멸합니다. 매월 급여일 기준으로 각각 시효가 진행됩니다.</li>\n<li><strong>고용노동부 진정</strong> — 가까운 지방고용노동청에 임금체불 진정서를 제출합니다. 근로감독관이 사업주를 조사하여 시정명령을 내립니다.</li>\n<li><strong>준비 서류</strong> — 근로계약서, 급여명세서, 출퇴근 기록(타임카드·전자출퇴근), 연장·야간근무 지시 문자나 메일이 핵심 증거입니다.</li>\n<li><strong>지연이자</strong> — 퇴직 후 14일 이내에 미지급 임금을 지급하지 않으면 연 20%의 지연이자가 발생합니다(근로기준법 제37조).</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 포괄임금계약이라도 실제 근로시간 대비 최저임금에 미달하면 그 차액을 청구할 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금계약과 최저임금 미달 시 효력',
        summary:
          '대법원 2020다300299 사건(대법원, 2024.12.26 선고)에서 법원은 포괄임금계약에 따라 지급된 임금이 최저임금에 미달하는 경우 포괄임금계약이 유효하다고 볼 수 없고, 사용자는 그 미달액을 지급하여야 한다고 판시했습니다.',
        takeaway:
          '야간·연장수당을 포함한 포괄임금으로 급여를 받고 있더라도, 실제 근로시간 대비 최저임금 이상을 받고 있는지 반드시 확인하세요. 미달 시 차액 청구가 가능합니다.',
      },
    ],
    faq: [
      {
        question: '야간근로와 연장근로가 겹치면 가산율이 어떻게 되나요?',
        answer:
          '<p>야간근로(22시~06시)와 연장근로(8시간 초과)가 동시에 해당하면 통상임금의 100%가 추가됩니다. 기본급 포함 시급의 2배를 받게 됩니다. 예를 들어 시급 1만원이면 해당 시간에 대해 2만원이 지급되어야 합니다.</p>',
      },
      {
        question: '5인 미만 사업장에서도 야간수당을 받을 수 있나요?',
        answer:
          '<p>5인 미만 사업장은 근로기준법상 연장·야간·휴일 가산수당 규정이 적용되지 않습니다. 다만 야간에 실제 근로한 시간에 대한 기본임금은 받아야 하고, 최저임금 이상이어야 합니다.</p>',
      },
      {
        question: '급여명세서가 없으면 수당을 청구할 수 없나요?',
        answer:
          '<p>급여명세서가 없어도 청구 가능합니다. 출퇴근 기록, 업무 메신저, CCTV 기록, 동료 진술 등으로 근로시간을 입증할 수 있습니다. 2021년 11월부터 사업주는 임금명세서 교부 의무가 있으므로, 미교부 자체도 과태료 부과 대상입니다.</p>',
      },
      {
        question: '통상임금에 포함되는 항목은 어떤 것인가요?',
        answer:
          '<p>정기적·일률적·고정적으로 지급되는 금품이 통상임금에 해당합니다. 기본급, 직무수당, 직책수당, 기술수당 등이 포함됩니다. 실적에 따라 변동되는 성과급이나 경영성과 배분금은 통상임금에서 제외될 수 있습니다.</p>',
      },
      {
        question: '퇴직 후에도 미지급 수당을 청구할 수 있나요?',
        answer:
          '<p>네, 퇴직 후에도 3년의 소멸시효 내에서 청구 가능합니다. 퇴직 후 14일 이내에 미지급분이 지급되지 않으면 연 20%의 지연이자도 함께 청구할 수 있어 오히려 퇴직 후 청구가 유리한 경우도 있습니다.</p>',
      },
    ],
    cta: { text: '야간·연장근로수당 미지급 여부 AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 어디서부터', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '사업주 형사처벌', href: '/guide/wage/wage-employer-criminal-penalty' },
      { label: '지연이자 계산법', href: '/guide/wage/unpaid-wage-delay-interest-calculation' },
      { label: '임금체불 진정 전 체크리스트', href: '/guide/wage/wage-complaint-pre-filing-checklist' },
    ],
  },

  // ── 임금체불 2. 사업주 재산 압류 임금 회수 ──
  {
    domain: 'wage',
    slug: 'wage-asset-seizure-recovery',
    keyword: '사업주 재산 압류 임금 회수',
    questionKeyword: '사업주가 임금을 안 주는데 재산을 압류해서 받아낼 수 있나요?',
    ctaKeyword: '사업주 재산압류 임금회수 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사업주 재산 압류로 임금 회수하는 방법 4단계 | 로앤가이드',
      description:
        '사업주가 임금을 주지 않아 재산 압류를 고민 중이라면, 강제집행 절차와 준비사항을 지금 확인하세요.',
    },
    intro:
      '<p>노동청에 진정을 넣었지만 사업주가 "돈이 없다"는 말만 반복합니다. 시정명령이 나와도 이행하지 않으니, 직접 사업주의 통장이나 부동산을 압류해서라도 밀린 임금을 받아내고 싶습니다. 강제집행은 집행권원(확정판결이나 지급명령)만 있으면 가능하며, 생각보다 절차가 복잡하지 않습니다.</p>',
    sections: [
      {
        title: '강제집행을 위한 집행권원 확보 방법',
        content:
          '<p><strong style="color:#1e3a5f">재산을 압류하려면 먼저 법원에서 집행권원을 받아야 합니다.</strong></p>\n<ul>\n<li><strong>지급명령 신청</strong> — 소액의 임금채권이라면 법원에 지급명령을 신청하세요. 인지대가 소송의 1/10이고, 사업주가 이의하지 않으면 2주 만에 확정됩니다.</li>\n<li><strong>소액사건 소송</strong> — 청구금액 3천만원 이하는 소액사건으로 1회 변론으로 판결이 날 수 있습니다. 즉시 항고도 제한되어 빠르게 확정됩니다.</li>\n<li><strong>노동위원회 구제명령</strong> — 부당해고와 함께 임금을 다투는 경우 노동위원회 구제명령도 집행권원이 됩니다.</li>\n<li><strong>체불사업주 확인서</strong> — 고용노동부에서 발급받는 체불임금확인서는 소송 시 유력한 증거가 되지만, 그 자체로는 집행권원이 아닙니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 지급명령은 신청 후 약 2~3주면 발부되며, 상대방이 이의하지 않으면 확정판결과 같은 효력을 갖습니다.</blockquote>',
      },
      {
        title: '재산 압류 대상과 절차',
        content:
          '<p><strong style="color:#1e3a5f">사업주의 예금, 매출채권, 부동산, 차량 등 다양한 재산을 압류할 수 있습니다.</strong></p>\n<ul>\n<li><strong>예금 압류</strong> — 채권압류 및 추심명령을 신청합니다. 사업주 거래 은행을 알면 해당 은행에 압류가 걸려 출금이 차단됩니다.</li>\n<li><strong>매출채권 압류</strong> — 사업주의 거래처에서 받을 돈(매출채권)을 압류하면 거래처가 사업주 대신 근로자에게 직접 지급합니다.</li>\n<li><strong>부동산 강제경매</strong> — 사업주 소유 부동산에 대해 강제경매를 신청합니다. 다만 선순위 근저당이 많으면 배당을 받지 못할 수 있으니 등기부등본을 먼저 확인하세요.</li>\n<li><strong>재산조회 신청</strong> — 사업주 재산을 모를 때는 법원에 재산조회를 신청하면 금융기관, 국세청, 차량등록사업소 등에서 일괄 조회됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>사업주 재산 압류 절차, AI가 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">체불 금액과 상황을 입력하면 최적의 회수 전략을 무료로 확인하세요.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '임금채권 우선변제와 체당금 제도',
        content:
          '<p><strong style="color:#1e3a5f">임금채권은 다른 채권보다 우선 변제받을 수 있고, 사업주가 무자력이면 체당금 제도를 활용합니다.</strong></p>\n<ul>\n<li><strong>임금채권 우선변제</strong> — 근로기준법 제38조에 따라 최종 3개월분의 임금과 최종 3년분의 퇴직금은 질권·저당권보다 우선하여 변제됩니다.</li>\n<li><strong>체당금 제도</strong> — 사업주가 파산하거나 폐업한 경우, 근로복지공단에 체당금(최종 3개월 임금 + 최종 3년 퇴직금, 각 상한액 있음)을 신청할 수 있습니다.</li>\n<li><strong>간이대지급금</strong> — 소규모 사업장(상시 300인 미만)에서 임금이 체불되면 노동부 확인 후 간이대지급금을 먼저 받을 수 있습니다. 1인당 최대 1천만원입니다.</li>\n<li><strong>법률구조공단 무료소송</strong> — 대한법률구조공단에서 임금체불 사건에 대해 무료 소송 대리를 지원합니다. 사업주의 재산 파악부터 강제집행까지 도움받을 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 사업주가 재산을 빼돌린 정황이 있으면 사해행위취소 소송도 병행할 수 있습니다. 재산 처분 시점과 체불 시점을 비교하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임금채권의 우선변제 범위',
        summary:
          '대법원 2024다294705 사건(대법원, 2025.04.24 선고)에서 법원은 채권자가 소멸시효 완성을 주장하는 것이 신의칙에 반하여 권리남용에 해당하는 경우 그 주장이 배척된다고 판시하며, 사용자의 임금 지급 의무를 강조했습니다.',
        takeaway:
          '사업주가 "시효가 지났다"고 주장해도, 지급을 약속하거나 시효 완성을 유도한 정황이 있으면 권리남용으로 배척될 수 있습니다. 증거를 꼼꼼히 확보하세요.',
      },
    ],
    faq: [
      {
        question: '사업주의 재산이 어디 있는지 모르면 어떻게 하나요?',
        answer:
          '<p>집행권원을 받은 후 법원에 재산조회 신청을 하면 됩니다. 법원이 금융기관, 국세청, 건강보험공단, 자동차등록사업소 등에 일괄 조회하여 사업주의 예금, 부동산, 차량, 보험 가입 현황을 확인해 줍니다.</p>',
      },
      {
        question: '예금 압류를 하면 바로 돈을 받을 수 있나요?',
        answer:
          '<p>채권압류 및 추심명령이 은행에 송달되면 출금이 차단되고, 추심명령에 따라 은행에서 직접 인출할 수 있습니다. 다만 계좌 잔고가 없으면 실효성이 떨어지므로 매출입금 시점을 파악하는 것이 중요합니다.</p>',
      },
      {
        question: '사업주가 재산을 빼돌리면 어떻게 대응하나요?',
        answer:
          '<p>임금을 체불하면서 제3자에게 재산을 넘긴 행위는 사해행위에 해당할 수 있습니다. 사해행위취소 소송을 통해 재산 처분을 무효화하고 원상회복을 청구할 수 있습니다. 재산 이전 시점과 체불 시점이 가까우면 인정 가능성이 높습니다.</p>',
      },
      {
        question: '체당금과 간이대지급금의 차이는 무엇인가요?',
        answer:
          '<p>체당금은 사업주가 파산·폐업한 경우에 신청하며, 간이대지급금은 사업주가 영업 중이어도 체불이 확인되면 신청 가능합니다. 간이대지급금은 1인당 최대 1천만원이며, 체당금보다 절차가 간소하고 빠릅니다.</p>',
      },
      {
        question: '법률구조공단 무료소송 지원을 받으려면 어떤 조건이 필요한가요?',
        answer:
          '<p>대한법률구조공단은 임금체불 근로자에게 무료 소송대리를 지원합니다. 소득 기준과 관계없이 체불임금확인서가 있으면 신청 가능합니다. 지급명령 신청부터 강제집행까지 전 과정을 도와줍니다.</p>',
      },
    ],
    cta: { text: '사업주 재산 압류 절차 AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 어디서부터', href: '/guide/wage/unpaid-wage-where-to-start' },
      { label: '임금체불 증거 체크리스트', href: '/guide/wage/unpaid-wage-evidence-checklist' },
      { label: '사업주 형사처벌', href: '/guide/wage/wage-employer-criminal-penalty' },
      { label: '지연이자 계산법', href: '/guide/wage/unpaid-wage-delay-interest-calculation' },
      { label: '임금체불 진정 전 체크리스트', href: '/guide/wage/wage-complaint-pre-filing-checklist' },
    ],
  },

  // ── 교통사고 3. 블랙박스 증거 활용 가이드 ──
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-dashcam-evidence-guide',
    keyword: '블랙박스 증거 활용 교통사고',
    questionKeyword: '블랙박스 영상을 교통사고 증거로 어떻게 활용하나요?',
    ctaKeyword: '블랙박스 증거 활용 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '블랙박스 영상 교통사고 증거 활용법 5가지 | 로앤가이드',
      description:
        '교통사고 블랙박스 영상이 있는데 증거로 제대로 활용하는 방법을 모른다면, 보존부터 제출까지 지금 확인하세요.',
    },
    intro:
      '<p>사고가 나고 보니 상대방 운전자가 신호를 무시했는데, 현장에서는 "내가 먼저 출발했다"고 주장합니다. 다행히 블랙박스에 사고 순간이 찍혀 있지만, 이 영상을 어떻게 증거로 활용해야 할지 막막합니다. 블랙박스 영상은 보존 방법과 제출 시점만 잘 지키면 과실 비율 판정에 결정적인 역할을 합니다.</p>',
    sections: [
      {
        title: '블랙박스 영상 보존 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">사고 직후 영상을 안전하게 보존하는 것이 가장 중요합니다.</strong></p>\n<ul>\n<li><strong>즉시 SD카드 분리</strong> — 블랙박스는 저장 공간이 차면 덮어쓰기됩니다. 사고 후 가능한 한 빨리 SD카드를 분리하여 영상이 삭제되지 않도록 합니다.</li>\n<li><strong>원본 파일 백업</strong> — SD카드의 영상 파일을 PC나 클라우드에 원본 그대로 복사합니다. 편집하거나 잘라내면 증거 능력이 약해질 수 있습니다.</li>\n<li><strong>시간 설정 확인</strong> — 블랙박스의 시간이 실제 시각과 일치하는지 확인합니다. 시간이 틀려 있으면 신뢰도가 떨어집니다.</li>\n<li><strong>전후방·측면 카메라</strong> — 전방뿐 아니라 후방, 실내 카메라 영상도 함께 보존합니다. 탑승자의 행동이나 충격 정도를 보여주는 추가 증거가 됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 원본 파일의 메타데이터(촬영 일시, GPS 좌표)가 증거의 신뢰성을 높여줍니다. 절대 편집하지 마세요.</blockquote>',
      },
      {
        title: '블랙박스 영상 제출 방법과 활용처',
        content:
          '<p><strong style="color:#1e3a5f">보험사, 경찰, 법원에 제출하는 방법이 각각 다릅니다.</strong></p>\n<ul>\n<li><strong>보험사 제출</strong> — 보험사 앱이나 이메일로 영상 파일을 전송합니다. 과실 비율 협의 시 블랙박스 영상이 결정적 근거가 됩니다.</li>\n<li><strong>경찰 제출</strong> — 교통사고 조사 시 담당 수사관에게 USB나 SD카드로 원본을 제출합니다. 사고조사보고서에 블랙박스 영상 확인 사실이 기재됩니다.</li>\n<li><strong>법원 제출</strong> — 민사소송이나 형사재판에서 증거로 제출할 때는 USB에 원본 파일을 담아 증거설명서와 함께 제출합니다.</li>\n<li><strong>상대방 블랙박스 확보</strong> — 상대방이 블랙박스 영상 제출을 거부하면 법원에 문서제출명령이나 증거보전 신청을 할 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>블랙박스 증거 활용 전략, AI가 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">사고 상황과 영상 보유 여부를 입력하면 최적의 증거 활용법을 무료로 확인하세요.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '블랙박스 영상의 증거 능력과 한계',
        content:
          '<p><strong style="color:#1e3a5f">블랙박스 영상은 강력한 증거이지만, 한계도 알아두어야 합니다.</strong></p>\n<ul>\n<li><strong>증거 능력 인정 기준</strong> — 법원은 원본 무결성, 촬영 시각의 정확성, 연속 촬영 여부를 기준으로 증거 능력을 판단합니다.</li>\n<li><strong>화질 문제</strong> — 야간이나 역광 상황에서 신호등 색상이나 차량 번호가 식별되지 않으면 증거력이 떨어집니다. 영상 분석 전문기관에 감정을 의뢰할 수 있습니다.</li>\n<li><strong>촬영 범위 사각지대</strong> — 블랙박스의 화각 밖에서 발생한 상황은 담기지 않습니다. 주변 CCTV나 목격자 진술로 보완해야 합니다.</li>\n<li><strong>타인의 블랙박스</strong> — 사고 현장 주변 차량의 블랙박스 영상도 증거가 됩니다. 사고 직후 주변 차량 운전자에게 협조를 요청하세요.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 블랙박스 영상을 편집하거나 일부만 발췌하여 제출하면 오히려 불리하게 작용할 수 있습니다. 반드시 원본 전체를 제출하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 보험자의 손해방지의무와 증거 확보',
        summary:
          '대법원 2022다225897 사건(대법원, 2025.12.11 선고)에서 법원은 보험계약자가 사고 발생 시 부담하는 손해방지의무의 범위를 판시하며, 사고 직후 증거를 확보하고 보존하는 것이 손해방지의무의 일환임을 강조했습니다.',
        takeaway:
          '교통사고 직후 블랙박스 영상을 포함한 모든 증거를 즉시 확보하는 것이 피해자의 권리를 보호하는 가장 중요한 첫걸음입니다.',
      },
    ],
    faq: [
      {
        question: '블랙박스가 없으면 과실 비율을 다툴 수 없나요?',
        answer:
          '<p>블랙박스가 없어도 CCTV, 목격자 진술, 사고현장 사진, 차량 파손 부위 등으로 과실 비율을 다툴 수 있습니다. 다만 블랙박스 영상이 있으면 훨씬 빠르고 유리하게 해결됩니다.</p>',
      },
      {
        question: '상대방이 블랙박스 영상 제출을 거부하면 어떻게 하나요?',
        answer:
          '<p>법원에 문서제출명령을 신청할 수 있습니다. 정당한 사유 없이 제출을 거부하면 법원이 신청인의 주장을 진실한 것으로 인정할 수 있습니다(민사소송법 제349조).</p>',
      },
      {
        question: '블랙박스 영상의 시간이 실제와 다르면 증거로 인정되지 않나요?',
        answer:
          '<p>시간 오차만으로 증거 능력 자체가 부정되지는 않습니다. 다만 신뢰도가 낮아질 수 있으므로, 블랙박스 제조사의 시간 오차 범위 설명서나 다른 시간 기록(CCTV, 신고 접수 시간)으로 보정할 수 있습니다.</p>',
      },
      {
        question: '주차 중 사고도 블랙박스로 해결할 수 있나요?',
        answer:
          '<p>주차 모드가 활성화된 블랙박스라면 충격 감지 시 자동 녹화됩니다. 상대 차량의 번호판이 식별되면 뺑소니 사고의 결정적 증거가 됩니다. 주차 모드 설정을 미리 확인해 두세요.</p>',
      },
    ],
    cta: { text: '교통사고 블랙박스 증거 활용 전략 AI로 확인하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 어디서부터', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
      { label: '과실비율 분쟁 대응', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '합의 체크리스트', href: '/guide/traffic-accident/accident-settlement-checklist' },
      { label: '부상 보상금 청구', href: '/guide/traffic-accident/traffic-accident-injury-compensation' },
      { label: '과실 다툼 증거', href: '/guide/traffic-accident/traffic-accident-fault-dispute-evidence' },
    ],
  },

  // ── 교통사고 4. 무단횡단 보행자 과실 비율 ──
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-pedestrian-jaywalking-fault',
    keyword: '무단횡단 보행자 과실 비율',
    questionKeyword: '무단횡단 보행자 사고에서 운전자 과실 비율은 얼마나 되나요?',
    ctaKeyword: '무단횡단 사고 과실비율 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '무단횡단 보행자 사고 과실 비율 기준 3가지 | 로앤가이드',
      description:
        '무단횡단 보행자와 사고가 났는데 과실 비율이 어떻게 정해지는지 모른다면, 감경 기준과 판례를 지금 확인하세요.',
    },
    intro:
      '<p>횡단보도가 없는 왕복 4차선 도로에서 갑자기 보행자가 뛰어나왔습니다. 급브레이크를 밟았지만 충돌을 피하지 못했습니다. 상대방이 무단횡단을 한 것은 분명한데, 보험사에서는 운전자 과실이 30~40%라고 합니다. 무단횡단 사고에서 과실 비율은 도로 상황, 보행자 특성, 운전자의 주의의무 등을 종합하여 결정됩니다.</p>',
    sections: [
      {
        title: '무단횡단 사고 기본 과실 비율 기준',
        content:
          '<p><strong style="color:#1e3a5f">무단횡단 보행자 사고에서 운전자 과실은 통상 20~40% 범위에서 정해집니다.</strong></p>\n<ul>\n<li><strong>기본 비율</strong> — 보행자가 무단횡단한 경우에도 운전자에게 전방주시의무가 있으므로 운전자 과실이 완전히 0%가 되지는 않습니다. 기본 과실 비율은 보행자 70 : 운전자 30입니다.</li>\n<li><strong>도로 환경에 따른 변동</strong> — 왕복 6차선 이상의 넓은 도로, 중앙분리대가 있는 도로에서는 보행자 과실이 가중됩니다(보행자 80 : 운전자 20).</li>\n<li><strong>야간 사고</strong> — 야간에 어두운 옷을 입고 무단횡단한 경우 보행자 과실이 5~10% 추가됩니다.</li>\n<li><strong>제한속도 위반</strong> — 운전자가 제한속도를 초과한 상태였다면 운전자 과실이 10~20% 가중됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 보행자가 무단횡단했더라도 운전자에게 전방주시의무와 감속의무가 있으므로 과실이 인정됩니다.</blockquote>',
      },
      {
        title: '보행자 유형에 따른 과실 비율 조정',
        content:
          '<p><strong style="color:#1e3a5f">보행자가 어린이, 노인, 장애인인 경우 운전자 과실이 가중됩니다.</strong></p>\n<ul>\n<li><strong>어린이(13세 미만)</strong> — 어린이보호구역이 아니더라도 어린이가 무단횡단한 경우 운전자 과실이 10~15% 추가됩니다. 어린이는 판단 능력이 부족한 것으로 간주됩니다.</li>\n<li><strong>노인(65세 이상)</strong> — 노인은 보행 속도가 느리고 반응이 늦어 운전자에게 더 높은 주의의무가 요구됩니다. 운전자 과실이 5~10% 가중됩니다.</li>\n<li><strong>음주 보행자</strong> — 보행자가 음주 상태로 무단횡단한 경우 보행자 과실이 5~10% 추가됩니다. 다만 운전자도 음주 상태라면 운전자 과실이 크게 가중됩니다.</li>\n<li><strong>스쿨존 내 사고</strong> — 어린이보호구역에서는 보행자가 무단횡단했더라도 운전자 과실이 60~80%까지 올라갈 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>내 사고의 과실 비율, AI가 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">사고 상황을 입력하면 예상 과실 비율과 대응 전략을 무료로 확인하세요.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '과실 비율 감경을 위한 증거 확보',
        content:
          '<p><strong style="color:#1e3a5f">유리한 과실 비율을 주장하려면 사고 직후 증거를 확보해야 합니다.</strong></p>\n<ul>\n<li><strong>블랙박스 영상</strong> — 보행자의 갑작스러운 출현, 뛰어든 방향, 도로 진입 속도 등이 기록됩니다. 감속 여부와 브레이크 시점도 확인됩니다.</li>\n<li><strong>CCTV 확보</strong> — 사고 지점 주변 상점, 건물, 교통 CCTV를 경찰에 요청하세요. 보행자의 무단횡단 경로가 명확히 드러납니다.</li>\n<li><strong>도로 환경 기록</strong> — 중앙분리대 유무, 차선 수, 횡단보도까지의 거리, 방호울타리 설치 여부를 사진으로 기록합니다.</li>\n<li><strong>EDR 데이터</strong> — 차량에 장착된 사고기록장치(EDR)에서 충돌 직전 속도, 브레이크 작동 시점, 조향 각도 등을 추출할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 보험사가 제시하는 과실 비율에 동의할 수 없으면, 손해사정사를 선임하거나 법원에 소송을 제기하여 판단받을 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 쌍방과실 교통사고와 자기부담금 손해배상',
        summary:
          '대법원 2022다287284 사건(대법원, 2026.01.29 선고)에서 법원은 쌍방과실 교통사고에서 자차보험 자기부담금 상당액에 대해 상대방에게 과실 비율에 따른 손해배상을 청구할 수 있다고 판시했습니다.',
        takeaway:
          '무단횡단 사고에서도 상대방 과실이 인정되면 자기부담금 등 보험으로 보전되지 않는 손해에 대해 배상을 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '무단횡단 사고에서 운전자 과실이 0%가 될 수 있나요?',
        answer:
          '<p>극히 예외적인 경우에 가능합니다. 고속도로에서 보행자가 갑자기 뛰어든 경우, 운전자가 어떠한 조치를 취해도 사고를 피할 수 없었음이 인정되면 과실이 0%에 가까워질 수 있습니다. 그러나 일반 도로에서는 거의 인정되지 않습니다.</p>',
      },
      {
        question: '보험사가 제시한 과실 비율에 반드시 동의해야 하나요?',
        answer:
          '<p>아닙니다. 보험사의 과실 비율은 협의안일 뿐 법적 구속력이 없습니다. 이의가 있으면 손해사정사를 선임하거나 교통사고분쟁심의위원회에 조정 신청, 또는 법원 소송을 통해 다툴 수 있습니다.</p>',
      },
      {
        question: '무단횡단 보행자가 사망하면 운전자가 형사처벌을 받나요?',
        answer:
          '<p>교통사고처리특례법에 따라 종합보험에 가입한 경우 형사처벌이 면제되는 특례가 적용됩니다. 다만 신호위반, 음주운전 등 12개 중과실에 해당하면 특례가 적용되지 않습니다. 무단횡단 자체는 운전자의 중과실이 아닙니다.</p>',
      },
      {
        question: '횡단보도 근처에서 무단횡단한 경우 과실 비율이 달라지나요?',
        answer:
          '<p>네, 횡단보도로부터 매우 가까운 곳(약 10m 이내)에서 무단횡단한 경우 보행자 과실이 감경될 수 있습니다. 반대로 횡단보도가 있음에도 먼 곳에서 무단횡단하면 보행자 과실이 가중됩니다.</p>',
      },
    ],
    cta: { text: '무단횡단 사고 과실 비율 AI로 분석하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 어디서부터', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
      { label: '과실비율 분쟁 대응', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '합의 체크리스트', href: '/guide/traffic-accident/accident-settlement-checklist' },
      { label: '합의 실수 방지', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '과실 다툼 증거', href: '/guide/traffic-accident/traffic-accident-fault-dispute-evidence' },
    ],
  },

  // ── 교통사고 5. 대리운전·카풀 사고 책임 ──
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-rideshare-proxy-liability',
    keyword: '대리운전 카풀 사고 책임',
    questionKeyword: '대리운전이나 카풀 중 교통사고가 나면 누가 책임지나요?',
    ctaKeyword: '대리운전 카풀 사고 책임 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '대리운전·카풀 사고 책임 소재 판단 기준 3가지 | 로앤가이드',
      description:
        '대리운전이나 카풀 중 사고가 나서 누가 책임져야 하는지 모른다면, 운행자 책임 기준과 보험 적용 여부를 지금 확인하세요.',
    },
    intro:
      '<p>회식 후 대리운전을 불렀는데 사고가 났습니다. 내 차에 다른 사람이 다쳤는데, 대리기사가 책임을 져야 하는지 차주인 내가 책임을 져야 하는지 혼란스럽습니다. 자동차손해배상보장법상 "운행자"가 누구인지에 따라 책임 소재가 달라지며, 대리운전과 카풀은 적용 기준이 다릅니다.</p>',
    sections: [
      {
        title: '대리운전 사고의 책임 구조',
        content:
          '<p><strong style="color:#1e3a5f">대리운전 사고에서는 차주와 대리기사 모두 책임을 질 수 있습니다.</strong></p>\n<ul>\n<li><strong>운행자 책임(차주)</strong> — 자배법 제3조에 따라 "자기를 위하여 자동차를 운행하는 자"가 배상 책임을 집니다. 차주가 대리운전을 의뢰한 것이므로 운행지배와 운행이익이 차주에게 있어 차주도 운행자에 해당합니다.</li>\n<li><strong>대리기사의 직접 책임</strong> — 대리기사는 실제 운전자로서 민법 제750조 불법행위 책임을 집니다. 과실이 있으면 대리기사도 손해배상 의무가 있습니다.</li>\n<li><strong>대리운전 업체 책임</strong> — 대리기사가 업체 소속이면 사용자 책임(민법 제756조)이 업체에 있습니다. 다만 개인 대리기사와 업체 간 계약 형태에 따라 달라집니다.</li>\n<li><strong>보험 적용 관계</strong> — 차주의 자동차보험(대인·대물)이 우선 적용되고, 대리기사의 대리운전 배상책임보험이 보충적으로 적용됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 피해자는 차주와 대리기사 모두에게 손해배상을 청구할 수 있습니다. 차주의 보험으로 우선 처리됩니다.</blockquote>',
      },
      {
        title: '카풀 사고의 책임과 보험 적용',
        content:
          '<p><strong style="color:#1e3a5f">카풀 사고에서는 운전자가 운행자이자 직접 운전자로서 전적인 책임을 집니다.</strong></p>\n<ul>\n<li><strong>자가용 유상운송 문제</strong> — 카풀 중 비용을 분담받았다면 유상운송에 해당할 수 있습니다. 출퇴근 시간대 카풀은 여객자동차운수사업법에 따라 허용되지만, 그 외 시간에는 불법 유상운송이 될 수 있습니다.</li>\n<li><strong>동승자 과실 감경</strong> — 무상 동승자가 사고 위험을 알면서 탑승한 경우 운전자의 배상 범위가 20~30% 감경될 수 있습니다(호의동승 감액).</li>\n<li><strong>보험 처리</strong> — 카풀 운전자의 자동차보험으로 처리됩니다. 다만 영업용으로 간주되면 자가용 보험의 보상이 거부될 수 있으니 주의해야 합니다.</li>\n<li><strong>플랫폼 책임</strong> — 카풀 앱을 통한 매칭인 경우, 플랫폼의 운행 관여도에 따라 플랫폼에도 사용자 책임이 인정될 여지가 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>대리운전·카풀 사고 책임, AI가 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">사고 상황과 운전 형태를 입력하면 책임 소재와 보험 적용 여부를 무료로 확인하세요.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '피해자의 손해배상 청구 방법',
        content:
          '<p><strong style="color:#1e3a5f">피해자는 운전자, 차주, 보험사 등 여러 대상에게 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>보험사 직접 청구</strong> — 자배법에 따라 피해자는 가해 차량 보험사에 직접 보험금을 청구할 수 있습니다(직접청구권). 가장 빠른 방법입니다.</li>\n<li><strong>차주 + 운전자 공동 청구</strong> — 대리운전 사고에서 보험 보상이 부족하면 차주와 대리기사 모두에게 부족분을 청구할 수 있습니다.</li>\n<li><strong>탑승자 보험</strong> — 차주가 탑승자 보험에 가입했다면 동승자도 보상을 받을 수 있습니다. 대리운전 의뢰인 본인이 부상한 경우에도 적용됩니다.</li>\n<li><strong>정부보장사업</strong> — 가해 차량이 무보험이거나 대리기사가 배상 능력이 없으면 정부보장사업에 청구할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 대리운전 중 사고가 나면 즉시 대리기사의 신분증과 대리운전 보험 가입 여부를 확인하세요. 무보험 대리기사는 사후 보상이 어렵습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 운행자 책임과 운행지배의 판단',
        summary:
          '대법원 2021다220628 사건(대법원, 2025.09.25 선고)에서 법원은 자동차 소유자의 운행자 책임 판단 시 처분가능성, 운행이익의 귀속, 지배관계의 실질을 종합적으로 고려해야 한다고 판시했습니다.',
        takeaway:
          '대리운전 사고에서 차주는 "대리기사에게 맡겼으니 내 책임이 아니다"라고 주장할 수 없습니다. 차주에게 운행지배와 운행이익이 인정되면 운행자 책임을 집니다.',
      },
    ],
    faq: [
      {
        question: '대리운전 중 사고가 나면 차주 보험료가 올라가나요?',
        answer:
          '<p>네, 차주의 자동차보험으로 처리되면 사고 이력이 남아 보험료가 올라갈 수 있습니다. 다만 대리운전 배상책임보험이 적용되면 차주 보험을 사용하지 않을 수 있으므로, 대리기사의 보험 가입 여부를 반드시 확인하세요.</p>',
      },
      {
        question: '카풀 중 동승자가 다치면 운전자 보험으로 처리되나요?',
        answer:
          '<p>네, 카풀 운전자의 자동차보험 대인배상으로 처리됩니다. 다만 무상 동승(호의동승)으로 인정되면 배상액이 20~30% 감경될 수 있습니다. 동승자가 비용을 분담한 경우에는 호의동승 감액이 적용되지 않습니다.</p>',
      },
      {
        question: '대리기사가 음주 상태였으면 차주도 책임이 있나요?',
        answer:
          '<p>차주가 대리기사의 음주 사실을 알았거나 알 수 있었으면 차주의 과실이 가중됩니다. 반대로 차주가 전혀 몰랐다면 운행자 책임은 인정되지만, 과실 비율에서 차주에게 유리하게 작용합니다.</p>',
      },
      {
        question: '렌터카를 대리운전으로 맡겼을 때 사고가 나면 누가 책임지나요?',
        answer:
          '<p>렌터카 이용자(임차인)가 차주와 유사한 운행자 책임을 집니다. 렌터카 업체도 자배법상 운행자로 볼 수 있어, 피해자는 임차인, 대리기사, 렌터카 업체 모두에게 배상을 청구할 수 있습니다.</p>',
      },
    ],
    cta: { text: '대리운전·카풀 사고 책임 AI로 분석하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 어디서부터', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
      { label: '과실비율 분쟁 대응', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '부상 보상금 청구', href: '/guide/traffic-accident/traffic-accident-injury-compensation' },
      { label: '합의 체크리스트', href: '/guide/traffic-accident/accident-settlement-checklist' },
      { label: '합의 실수 방지', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
    ],
  },

  // ── 이혼 6. 조정이혼 vs 재판이혼 비교 전략 ──
  {
    domain: 'divorce',
    slug: 'divorce-mediation-vs-trial-strategy',
    keyword: '조정이혼 재판이혼 비교 전략',
    questionKeyword: '조정이혼과 재판이혼 중 어떤 것을 선택해야 하나요?',
    ctaKeyword: '조정이혼 재판이혼 비교 상담',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '조정이혼 vs 재판이혼 비교 선택 기준 4가지 | 로앤가이드',
      description:
        '이혼을 결심했는데 조정과 재판 중 어떤 방식이 유리한지 모른다면, 기간·비용·효과 비교를 지금 확인하세요.',
    },
    intro:
      '<p>배우자에게 이혼을 요구했지만 양육권, 재산분할, 위자료 문제에서 의견이 전혀 맞지 않습니다. 변호사에게 상담하니 "조정을 먼저 시도하라"고 하는데, 시간만 끌다가 결국 재판으로 가게 되는 건 아닌지 고민됩니다. 조정이혼과 재판이혼은 기간, 비용, 결과의 유연성에서 뚜렷한 차이가 있으므로 상황에 맞는 전략이 중요합니다.</p>',
    sections: [
      {
        title: '조정이혼의 장점과 적합한 상황',
        content:
          '<p><strong style="color:#1e3a5f">조정이혼은 법원의 중재로 합의를 이끌어내는 절차로, 비용과 시간을 절약합니다.</strong></p>\n<ul>\n<li><strong>기간</strong> — 보통 2~4개월 내 완료됩니다. 재판이혼(6개월~2년)보다 훨씬 빠릅니다.</li>\n<li><strong>비용</strong> — 조정 신청비용은 소송비용의 1/5 수준입니다. 변호사 선임 없이도 진행 가능합니다.</li>\n<li><strong>유연한 합의</strong> — 양육비 지급 방법, 면접교섭 세부사항 등을 당사자가 자유롭게 정할 수 있습니다. 재판에서는 법원이 정한 기준에 따르게 됩니다.</li>\n<li><strong>적합한 경우</strong> — 상대방이 이혼 자체에는 동의하지만 조건(양육권, 재산분할)에서 이견이 있을 때, 감정적 대립이 심하지 않을 때 적합합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 조정이 성립하면 확정판결과 동일한 효력이 있습니다. "조정은 약하다"는 것은 오해입니다.</blockquote>',
      },
      {
        title: '재판이혼이 필요한 상황과 절차',
        content:
          '<p><strong style="color:#1e3a5f">상대방이 이혼 자체를 거부하거나, 심각한 유책 사유가 있을 때는 재판이혼이 필요합니다.</strong></p>\n<ul>\n<li><strong>재판이혼 사유</strong> — 민법 제840조에 규정된 부정행위, 악의의 유기, 학대·모욕, 3년 이상 생사불명, 기타 혼인을 계속하기 어려운 중대한 사유 중 하나에 해당해야 합니다.</li>\n<li><strong>입증 책임</strong> — 원고가 이혼 사유를 입증해야 합니다. 부정행위 증거, 폭행 진단서, 별거 사실 등을 준비해야 합니다.</li>\n<li><strong>절차</strong> — 이혼 소장 제출 → 조정 회부(의무) → 조정 불성립 시 변론 → 판결. 1심만 6개월~1년, 항소 시 2년 이상 소요됩니다.</li>\n<li><strong>재판이혼의 장점</strong> — 상대방이 동의하지 않아도 이혼이 가능하고, 위자료·재산분할·양육권을 법원이 강제로 결정합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>조정이혼 vs 재판이혼, AI가 최적 전략을 알려드립니다</strong></p>\n<p style="margin:0;font-size:0.95em">현재 상황을 입력하면 어떤 방식이 유리한지 무료로 확인하세요.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '조정에서 재판으로 전환되는 경우',
        content:
          '<p><strong style="color:#1e3a5f">조정이 불성립되면 자동으로 재판 절차로 넘어갑니다.</strong></p>\n<ul>\n<li><strong>조정 불성립 사유</strong> — 상대방이 조정에 출석하지 않거나, 양측 의견 차이가 좁혀지지 않으면 조정위원이 불성립을 선언합니다.</li>\n<li><strong>자동 소송 전환</strong> — 조정 불성립 시 2주 이내에 소송으로 전환됩니다. 이미 제출한 자료와 조정 내용이 소송 기록에 반영됩니다.</li>\n<li><strong>조정 대신 판결(조정에 갈음하는 결정)</strong> — 법원이 직권으로 조정에 갈음하는 결정을 내릴 수 있습니다. 2주 이내에 이의하지 않으면 확정됩니다.</li>\n<li><strong>전략적 접근</strong> — 재판이혼이 최종 목표라도 먼저 조정을 신청하여 상대방의 입장을 파악하고, 증거 상황을 가늠한 후 재판으로 전환하는 것이 효율적입니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 조정 절차에서 한 발언이나 양보 제안은 소송에서 불리하게 작용하지 않습니다. 조정에서의 양보는 "소송상 자백"이 아닙니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 혼인파탄과 재산 일방 처분의 이혼 사유',
        summary:
          '대법원 2025므10730 사건(대법원, 2025.09.04 선고)에서 법원은 부부 일방이 정당한 이유 없이 공동 재산을 일방적으로 처분하여 가정공동체의 경제적 기반을 형해화하는 행위가 민법 제840조 제6호의 "혼인을 계속하기 어려운 중대한 사유"에 해당할 수 있다고 판시했습니다.',
        takeaway:
          '배우자가 공동 재산을 몰래 처분한 경우, 이를 재판이혼의 사유로 삼을 수 있습니다. 재산 처분 증거(등기부등본, 계좌이체 내역)를 확보하세요.',
      },
    ],
    faq: [
      {
        question: '조정이혼도 변호사를 선임해야 하나요?',
        answer:
          '<p>의무는 아니지만, 재산분할이나 양육권 쟁점이 복잡하면 변호사 선임이 유리합니다. 조정 과정에서 불리한 합의를 하면 번복이 어려우므로, 전문가의 조언을 받고 진행하는 것을 권장합니다.</p>',
      },
      {
        question: '조정이 성립하면 확정판결과 같은 효력이 있나요?',
        answer:
          '<p>네, 조정이 성립하면 확정판결과 동일한 효력이 있습니다(가사소송법 제59조 제3항). 양육비나 위자료를 상대방이 이행하지 않으면 강제집행도 가능합니다.</p>',
      },
      {
        question: '재판이혼에서 유책배우자도 이혼을 청구할 수 있나요?',
        answer:
          '<p>원칙적으로 유책배우자의 이혼 청구는 인정되지 않습니다. 다만 상대방에게도 과실이 있거나, 별거 기간이 상당히 길어 혼인이 형해화된 경우에는 예외적으로 인정될 수 있습니다.</p>',
      },
      {
        question: '조정이혼 중 상대방이 재산을 빼돌리면 어떻게 하나요?',
        answer:
          '<p>법원에 사전처분(가사소송법 제62조)을 신청하여 재산 처분을 금지시킬 수 있습니다. 부동산 처분금지가처분, 예금 가압류 등을 통해 재산을 보전하세요.</p>',
      },
      {
        question: '협의이혼과 조정이혼의 차이는 무엇인가요?',
        answer:
          '<p>협의이혼은 양측이 모든 조건에 합의한 상태에서 법원에 확인만 받는 절차이고, 조정이혼은 법원이 중재하여 합의를 이끌어내는 절차입니다. 협의이혼은 양육비 이행 강제 수단이 약하지만, 조정이혼은 확정판결의 효력이 있어 강제집행이 가능합니다.</p>',
      },
    ],
    cta: { text: '조정이혼 vs 재판이혼 전략 AI로 분석하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼 어디서부터', href: '/guide/divorce/decided-divorce-where-to-begin' },
      { label: '협의이혼 절차', href: '/guide/divorce/consensual-divorce-process' },
      { label: '재판이혼 소송 절차', href: '/guide/divorce/trial-divorce-lawsuit-procedure' },
      { label: '재산분할 범위', href: '/guide/divorce/divorce-property-division-scope-faq' },
      { label: '이혼 상담 준비', href: '/guide/divorce/divorce-consultation-prep' },
    ],
  },

  // ── 이혼 7. 청소년 자녀 양육권 의사 반영 ──
  {
    domain: 'divorce',
    slug: 'divorce-child-custody-teen-preference',
    keyword: '청소년 자녀 양육권 의사 반영',
    questionKeyword: '이혼 시 청소년 자녀의 의사가 양육권 결정에 어떻게 반영되나요?',
    ctaKeyword: '청소년 양육권 의사반영 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '이혼 시 청소년 자녀 의사 양육권 반영 기준 | 로앤가이드',
      description:
        '이혼 과정에서 중학생·고등학생 자녀가 한쪽 부모와 살고 싶다고 하는데, 자녀 의사가 얼마나 반영되는지 지금 확인하세요.',
    },
    intro:
      '<p>이혼 소송 중인데, 중학교 2학년인 아이가 "아빠랑 살고 싶다"고 합니다. 엄마인 저는 양육권을 포기하고 싶지 않은데, 아이의 의사가 얼마나 반영되는지 걱정됩니다. 법원은 만 13세 이상 자녀의 의견을 반드시 청취해야 하며, 특히 청소년의 의사는 양육권 판단에서 중요한 고려 요소입니다.</p>',
    sections: [
      {
        title: '자녀 의사 청취의 법적 근거와 연령 기준',
        content:
          '<p><strong style="color:#1e3a5f">가사소송법에 따라 법원은 만 13세 이상 자녀의 의견을 반드시 청취해야 합니다.</strong></p>\n<ul>\n<li><strong>의무적 의견 청취</strong> — 가사소송법 제25조에 따라 자녀가 만 13세 이상이면 법원이 양육자 지정 전에 반드시 자녀의 의견을 들어야 합니다.</li>\n<li><strong>13세 미만도 가능</strong> — 만 13세 미만이라도 의사 표현 능력이 있으면 법원이 재량으로 의견을 청취합니다. 초등학교 고학년(10~12세)부터 참고합니다.</li>\n<li><strong>청취 방법</strong> — 법원 심리관(가사조사관)이 자녀와 면담합니다. 부모 없이 별도 공간에서 진행되며, 자녀가 압력 없이 솔직하게 의견을 말할 수 있도록 합니다.</li>\n<li><strong>의사 반영 비중</strong> — 자녀 연령이 높을수록 의사 반영 비중이 커집니다. 고등학생(15~18세)의 의사는 거의 결정적 수준으로 반영됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 자녀의 의사는 양육권 판단의 유일한 기준이 아니라, 여러 고려 요소 중 하나입니다. 자녀의 복리가 최우선입니다.</blockquote>',
      },
      {
        title: '법원이 자녀 의사 외에 고려하는 요소',
        content:
          '<p><strong style="color:#1e3a5f">자녀의 의사 외에도 양육 환경, 부모의 양육 능력, 유대관계 등이 종합 판단됩니다.</strong></p>\n<ul>\n<li><strong>양육 환경 안정성</strong> — 주거, 학교, 친구 관계 등 현재 생활환경의 연속성이 중요합니다. 환경 변화를 최소화하는 방향이 선호됩니다.</li>\n<li><strong>주양육자 원칙</strong> — 지금까지 주로 양육을 담당한 부모(주양육자)에게 양육권이 인정되는 경향이 강합니다.</li>\n<li><strong>경제적 능력</strong> — 경제력만으로 양육권이 결정되지는 않지만, 안정적 양육 환경 제공 가능성은 고려됩니다.</li>\n<li><strong>부모의 의지와 계획</strong> — 양육 계획서(학교, 돌봄, 면접교섭 허용 의지)를 제출하면 법원이 참고합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>양육권 전략, AI가 상황별로 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">자녀 연령과 현재 상황을 입력하면 양육권 확보 전략을 무료로 확인하세요.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '자녀 의사가 왜곡된 경우 대응 방법',
        content:
          '<p><strong style="color:#1e3a5f">상대방이 자녀의 의사를 유도하거나 세뇌한 정황이 있으면 법원에 이를 소명해야 합니다.</strong></p>\n<ul>\n<li><strong>소외 증후군(PAS) 주장</strong> — 한쪽 부모가 자녀에게 다른 부모에 대한 부정적 인식을 심어주는 행위가 의심되면, 가사조사관의 심층 면담을 요청합니다.</li>\n<li><strong>전문가 감정 신청</strong> — 자녀의 진정한 의사를 파악하기 위해 심리전문가(임상심리사, 소아정신과 의사)의 감정을 법원에 신청할 수 있습니다.</li>\n<li><strong>면접교섭 실시 기록</strong> — 자녀와의 면접교섭(면접 만남)을 꾸준히 실시하고, 자녀가 즐거워하는 모습을 사진이나 일지로 기록합니다.</li>\n<li><strong>양육 실적 입증</strong> — 학교 행사 참여, 병원 동행, 학원 등하원 등 실질적 양육 참여를 증명하는 자료를 확보합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 자녀에게 "누구와 살고 싶으냐"고 직접 물어보며 압박하는 행위는 법원에서 매우 부정적으로 평가됩니다. 자녀를 분쟁의 도구로 삼지 마세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산분할 기준시점과 자녀의 복리',
        summary:
          '대법원 2025스595 사건(대법원, 2025.08.14 선고)에서 법원은 재판상 이혼의 재산분할 기준시점을 이혼소송의 사실심 변론종결일로 정하면서, 재산분할 제도가 혼인 해소 시 공동으로 형성한 재산을 공평하게 청산하는 것을 목적으로 한다고 판시했습니다.',
        takeaway:
          '양육권 확보 시 재산분할도 함께 고려해야 합니다. 자녀를 양육하는 부모에게 재산분할 비율이 유리하게 조정될 수 있으므로, 양육권과 재산분할을 연계하여 전략을 세우세요.',
      },
    ],
    faq: [
      {
        question: '만 13세 미만 자녀의 의사는 전혀 반영되지 않나요?',
        answer:
          '<p>아닙니다. 법원이 재량으로 의견을 청취할 수 있으며, 초등학교 고학년(10~12세)의 경우 의사를 참고합니다. 다만 어린 자녀일수록 의사 표현이 부모의 영향을 받기 쉬워 반영 비중이 낮아집니다.</p>',
      },
      {
        question: '자녀가 한쪽 부모와 살고 싶다고 하면 반드시 그렇게 되나요?',
        answer:
          '<p>아닙니다. 자녀의 의사는 중요한 고려 요소이지만, 법원은 양육 환경의 안정성, 주양육자의 양육 능력, 자녀의 복리 등을 종합적으로 판단합니다. 자녀의 의사가 진정한 것인지, 왜곡된 것인지도 살핍니다.</p>',
      },
      {
        question: '이혼 후 자녀가 양육자를 바꾸고 싶다고 하면 변경할 수 있나요?',
        answer:
          '<p>네, 양육권 변경 심판을 청구할 수 있습니다. 자녀의 복리를 위해 양육자 변경이 필요하다는 사정 변경이 있으면 법원이 양육자를 변경할 수 있습니다. 자녀의 의사도 중요한 판단 자료가 됩니다.</p>',
      },
      {
        question: '양육권 소송에서 가사조사관 면담은 어떻게 진행되나요?',
        answer:
          '<p>가사조사관이 부모와 자녀를 각각 면담합니다. 가정 방문 조사, 학교 적응 상태 확인, 자녀의 심리 상태 평가 등이 포함됩니다. 조사 보고서는 법원의 양육권 판단에 큰 영향을 미칩니다.</p>',
      },
    ],
    cta: { text: '청소년 자녀 양육권 확보 전략 AI로 확인하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼 어디서부터', href: '/guide/divorce/decided-divorce-where-to-begin' },
      { label: '양육비 증액 청구', href: '/guide/divorce/divorce-child-support-increase' },
      { label: '양육 합의 준비', href: '/guide/divorce/custody-agreement-prep' },
      { label: '재산분할 범위', href: '/guide/divorce/divorce-property-division-scope-faq' },
      { label: '이혼 상담 준비', href: '/guide/divorce/divorce-consultation-prep' },
    ],
  },

  // ── 이혼 8. 사업체 영업권 재산분할 ──
  {
    domain: 'divorce',
    slug: 'divorce-business-asset-division',
    keyword: '사업체 영업권 재산분할',
    questionKeyword: '이혼 시 배우자가 운영하는 사업체와 영업권도 재산분할 대상인가요?',
    ctaKeyword: '사업체 영업권 재산분할 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '이혼 사업체·영업권 재산분할 기준 3단계 | 로앤가이드',
      description:
        '배우자가 사업체를 운영하는데 이혼 시 영업권과 사업 자산이 분할 대상인지 모른다면, 평가 기준을 지금 확인하세요.',
    },
    intro:
      '<p>결혼 15년 동안 배우자가 식당을 운영하며 매출이 크게 늘었습니다. 저는 가사와 육아를 전담하며 배우자의 사업을 뒷받침했는데, 이혼하면서 사업체의 가치를 재산분할에 포함시킬 수 있는지 궁금합니다. 혼인 중 형성된 사업체 자산과 영업권은 재산분할 대상이 될 수 있으며, 정확한 가치 평가가 핵심입니다.</p>',
    sections: [
      {
        title: '사업체 자산의 재산분할 대상 범위',
        content:
          '<p><strong style="color:#1e3a5f">혼인 중 형성·유지된 사업 자산은 재산분할 대상이 됩니다.</strong></p>\n<ul>\n<li><strong>부동산·장비</strong> — 사업용 부동산, 인테리어, 설비, 차량 등 유형 자산은 등기부등본이나 취득 내역으로 확인됩니다.</li>\n<li><strong>매출채권·예금</strong> — 사업 계좌의 잔고, 미수금(외상 매출금) 등도 포함됩니다.</li>\n<li><strong>영업권(권리금)</strong> — 상가 권리금, 프랜차이즈 가맹권, 거래처 네트워크 등 무형 자산도 재산분할 대상이 될 수 있습니다.</li>\n<li><strong>사업 부채</strong> — 사업을 위해 발생한 대출금, 미지급금 등 부채도 재산분할에서 고려됩니다. 순자산(자산 - 부채)이 분할 대상입니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 사업체가 배우자 단독 명의라도, 혼인 중 배우자의 협력(가사·육아·자금 지원)으로 형성·유지되었으면 분할 대상입니다.</blockquote>',
      },
      {
        title: '사업체 가치 평가 방법',
        content:
          '<p><strong style="color:#1e3a5f">사업체의 가치는 회계법인이나 감정평가사의 전문 감정을 통해 산정합니다.</strong></p>\n<ul>\n<li><strong>순자산가치법</strong> — 사업체의 자산에서 부채를 차감한 순자산을 기준으로 합니다. 가장 기본적인 방법입니다.</li>\n<li><strong>수익가치법</strong> — 향후 기대되는 수익을 현재 가치로 환산합니다. 안정적 매출이 있는 사업에 적합합니다.</li>\n<li><strong>권리금 시세 참조</strong> — 같은 업종, 같은 지역의 권리금 시세를 참조하여 영업권 가치를 산정합니다.</li>\n<li><strong>감정 신청</strong> — 법원에 사업체 감정을 신청하면 회계법인이 재무제표, 매출 추이, 영업이익 등을 분석하여 가치를 평가합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>사업체 재산분할 전략, AI가 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">사업 유형과 혼인 기간을 입력하면 예상 분할 비율과 전략을 무료로 확인하세요.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '사업체 재산분할 시 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">배우자가 매출을 축소 신고하거나 재산을 은닉하는 경우에 대비해야 합니다.</strong></p>\n<ul>\n<li><strong>재무제표 확보</strong> — 법원에 금융거래정보제출명령, 사업소득 과세자료 제출을 신청하여 실제 매출을 파악합니다.</li>\n<li><strong>카드매출·현금영수증 조회</strong> — 국세청 홈택스에서 매출 내역을 조회할 수 있습니다. 법원을 통해 요청하세요.</li>\n<li><strong>기여도 입증</strong> — 가사·육아 전담, 사업 자금 지원, 사업에 직접 참여한 기록 등 본인의 기여도를 입증해야 분할 비율이 높아집니다.</li>\n<li><strong>혼인 전 자산 분리</strong> — 혼인 전부터 운영하던 사업이라면, 혼인 전 가치와 혼인 후 증가분을 구분해야 합니다. 혼인 후 증가분만 분할 대상입니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 이혼 소송 전에 사업체 관련 서류(세금신고서, 장부, 임대차계약서)를 미리 복사해 두세요. 소송 시작 후에는 상대방이 자료를 은닉할 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 이혼상 재산분할의 기여도 판단',
        summary:
          '대법원 2024므13669 사건(대법원, 2025.10.23 선고)에서 법원은 민법 제746조에 따른 불법원인급여라도 이혼 시 재산분할에서 당사자 쌍방의 협력으로 이룩한 재산에 포함될 수 있으며, 재산분할 비율은 쌍방의 기여도를 종합적으로 고려하여 정해야 한다고 판시했습니다.',
        takeaway:
          '사업체 재산분할에서 가사·육아를 전담한 배우자의 기여도도 인정됩니다. 직접적 사업 참여가 없더라도 간접적 기여를 입증하면 분할 비율이 높아질 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '배우자가 법인 대표인 경우에도 법인 자산이 분할 대상인가요?',
        answer:
          '<p>법인의 자산 자체는 분할 대상이 아니지만, 배우자가 보유한 법인 지분(주식)은 분할 대상입니다. 또한 법인에서 받은 급여, 배당금으로 형성한 개인 자산도 분할 대상이 됩니다.</p>',
      },
      {
        question: '배우자가 매출을 속이고 있는 것 같은데 어떻게 확인하나요?',
        answer:
          '<p>법원에 과세정보제출명령을 신청하면 국세청에서 사업소득 신고 내역을 받을 수 있습니다. 카드매출, 현금영수증 발급 내역도 조회 가능합니다. 실제 매출과 신고 매출의 차이가 드러나면 재산 은닉 증거가 됩니다.</p>',
      },
      {
        question: '사업체를 반으로 나눌 수는 없으니 어떻게 분할하나요?',
        answer:
          '<p>사업체 자체를 분할하는 것이 아니라, 사업체의 가치를 금전으로 평가한 후 분할 비율에 해당하는 금액을 현금으로 지급하는 방식(가액배상)이 일반적입니다.</p>',
      },
      {
        question: '혼인 전부터 운영하던 사업체도 분할 대상인가요?',
        answer:
          '<p>혼인 전 사업체의 가치 자체는 고유재산이므로 분할 대상이 아닙니다. 그러나 혼인 중 사업 가치가 증가한 부분은 배우자의 기여가 인정되면 분할 대상이 됩니다.</p>',
      },
    ],
    cta: { text: '사업체 재산분할 전략 AI로 확인하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼 어디서부터', href: '/guide/divorce/decided-divorce-where-to-begin' },
      { label: '재산분할 범위', href: '/guide/divorce/divorce-property-division-scope-faq' },
      { label: '재판이혼 소송 절차', href: '/guide/divorce/trial-divorce-lawsuit-procedure' },
      { label: '이혼 상담 준비', href: '/guide/divorce/divorce-consultation-prep' },
      { label: '양육 합의 준비', href: '/guide/divorce/custody-agreement-prep' },
    ],
  },

  // ── 회생 9. 개인회생 자동차 유지 조건 ──
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-car-keep-conditions',
    keyword: '개인회생 자동차 유지 조건',
    questionKeyword: '개인회생을 신청하면 자동차를 빼앗기나요?',
    ctaKeyword: '개인회생 자동차 유지 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '개인회생 자동차 유지 조건 4가지 체크리스트 | 로앤가이드',
      description:
        '개인회생을 신청하면 자동차를 빼앗기는지 걱정된다면, 차량 유지 조건과 기준금액을 지금 확인하세요.',
    },
    intro:
      '<p>출퇴근에 차가 필수인데, 개인회생을 신청하면 차를 빼앗기는 건 아닌지 걱정됩니다. 대출도 아직 남아 있고, 차를 팔면 출근 자체가 불가능합니다. 개인회생에서 자동차는 생계에 필수적이면 유지할 수 있으며, 차량 가치와 대출 잔액에 따라 변제금에 반영됩니다.</p>',
    sections: [
      {
        title: '개인회생에서 자동차를 유지할 수 있는 조건',
        content:
          '<p><strong style="color:#1e3a5f">생계·직업 활동에 필수적인 차량은 개인회생에서 유지할 수 있습니다.</strong></p>\n<ul>\n<li><strong>생계 필수성 입증</strong> — 대중교통이 불편한 지역에 거주하거나, 출퇴근에 차량이 반드시 필요하다는 점을 소명합니다. 직업상 차량이 필수인 경우(영업직, 배달직)도 해당됩니다.</li>\n<li><strong>차량 가치 기준</strong> — 차량의 시가가 500만원 이하인 경우(법원마다 다소 차이) 청산가치에 크게 영향을 미치지 않아 유지가 쉽습니다.</li>\n<li><strong>대출 잔액과의 관계</strong> — 차량 시가보다 대출 잔액이 많으면(음의 자산) 청산가치가 0이므로 유지가 용이합니다.</li>\n<li><strong>고급 차량은 곤란</strong> — 시가 1,500만원 이상의 고급 차량은 법원이 처분을 권고할 수 있습니다. 저가 차량으로 교체 후 차액을 변제금에 반영하는 방법이 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 개인회생은 파산과 달리 재산을 처분하지 않아도 됩니다. 다만 차량 가치만큼 변제금이 늘어날 수 있습니다(청산가치 보장 원칙).</blockquote>',
      },
      {
        title: '차량 가치가 변제금에 미치는 영향',
        content:
          '<p><strong style="color:#1e3a5f">청산가치 보장 원칙에 따라 차량 가치가 높으면 변제금도 늘어납니다.</strong></p>\n<ul>\n<li><strong>청산가치란</strong> — 채무자가 파산했을 때 채권자가 받을 수 있는 금액입니다. 개인회생 변제금은 이 금액 이상이어야 합니다(채무자회생법 제614조).</li>\n<li><strong>차량 가치 산정</strong> — 중고차 시세 사이트(KB차차차, 엔카)의 시세를 기준으로 합니다. 법원이 감정을 요구하면 감정평가사의 평가를 받습니다.</li>\n<li><strong>담보 차량인 경우</strong> — 차량 담보 대출이 있으면 시가에서 대출 잔액을 뺀 금액이 청산가치에 포함됩니다. 예: 시가 800만원, 대출 잔액 600만원이면 청산가치는 200만원입니다.</li>\n<li><strong>변제금 반영</strong> — 청산가치가 가용소득보다 큰 경우 변제금이 올라갑니다. 월 변제금 = 총 변제금 ÷ 36개월(또는 60개월)입니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>내 차량 유지 가능 여부, AI가 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">차량 정보와 대출 잔액을 입력하면 유지 가능성과 변제금 영향을 무료로 확인하세요.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '차량 담보 대출의 별제권 처리',
        content:
          '<p><strong style="color:#1e3a5f">차량 담보 대출이 있으면 별제권자로서 개인회생과 별도로 처리됩니다.</strong></p>\n<ul>\n<li><strong>별제권이란</strong> — 담보가 설정된 채권은 개인회생 변제계획과 별도로 담보물(차량)에서 우선 변제받을 수 있는 권리입니다.</li>\n<li><strong>대출금 계속 납부</strong> — 차량을 유지하려면 담보 대출금은 개인회생 변제금과 별도로 매월 계속 납부해야 합니다.</li>\n<li><strong>대출 연체 시 압류</strong> — 개인회생 절차 중이라도 차량 담보 대출을 연체하면 채권자가 차량을 압류·매각할 수 있습니다.</li>\n<li><strong>변제계획에 반영</strong> — 변제계획서에 차량 담보 대출 상환 계획을 명시하고, 생활비에서 대출 상환금을 제외한 금액이 가용소득이 됩니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 차량을 유지하면서 개인회생을 진행하려면 대출 상환 + 변제금을 동시에 감당할 수 있어야 합니다. 감당이 어려우면 차량 처분 후 저가 차량 구입을 검토하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 면책결정과 별제권의 효력',
        summary:
          '대법원 2022다256327 사건(대법원, 2025.05.15 선고)에서 법원은 면책결정이 확정되더라도 별제권자는 담보권을 실행할 수 있을 뿐, 채무자를 상대로 개인회생채권의 이행을 소구할 수는 없다고 판시했습니다.',
        takeaway:
          '차량 담보 대출이 있는 상태에서 개인회생을 진행하면, 대출 상환을 계속해야 차량을 유지할 수 있습니다. 면책을 받아도 담보권 자체는 소멸하지 않습니다.',
      },
    ],
    faq: [
      {
        question: '개인회생 중 차량을 새로 구입할 수 있나요?',
        answer:
          '<p>원칙적으로 변제기간 중 새 차량 구입은 어렵습니다. 법원의 허가가 필요하며, 생계에 필수적인 저가 차량으로의 교체만 허용됩니다. 고가 차량 구입은 성실한 변제 의지를 의심받을 수 있습니다.</p>',
      },
      {
        question: '차량 가치가 얼마 이하여야 유지할 수 있나요?',
        answer:
          '<p>법원마다 기준이 다르지만, 일반적으로 시가 500만원 이하의 차량은 생계 필수품으로 인정받기 쉽습니다. 시가 500만원~1,000만원은 필수성 소명이 필요하고, 1,500만원 이상은 처분 권고를 받을 수 있습니다.</p>',
      },
      {
        question: '리스·렌터카 차량도 개인회생에 영향이 있나요?',
        answer:
          '<p>운용리스·렌터카는 차량이 본인 소유가 아니므로 청산가치에 포함되지 않습니다. 다만 리스료·렌트비는 생활비로 산정되어 가용소득에 영향을 줍니다. 금융리스(소유권 이전 조건)는 담보 대출과 유사하게 취급됩니다.</p>',
      },
      {
        question: '배우자 명의 차량을 이용하면 문제가 없나요?',
        answer:
          '<p>배우자 명의 차량은 채무자 본인의 재산이 아니므로 청산가치에 포함되지 않습니다. 다만 법원이 실질적 소유자가 채무자라고 판단하면 재산 은닉으로 볼 수 있으니 주의하세요.</p>',
      },
    ],
    cta: { text: '개인회생 차량 유지 가능 여부 AI로 확인하기', link: '/chat?domain=rehabilitation' },
    internalLinks: [
      { label: '개인회생 절차 A to Z', href: '/guide/rehabilitation/rehabilitation-application-procedure-atoz' },
      { label: '개인회생 vs 파산 비교', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy-choice' },
      { label: '개인회생 자격 요건', href: '/guide/rehabilitation/rehabilitation-eligibility-requirements-faq' },
      { label: '변제금 산정 방법', href: '/guide/rehabilitation/rehabilitation-payment-calculation' },
      { label: '개인회생 기각 사유', href: '/guide/rehabilitation/rehabilitation-rejection-5-reasons' },
    ],
  },

  // ── 회생 10. 회생 폐지 후 파산 전환 절차 ──
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-failed-switch-bankruptcy',
    keyword: '회생 폐지 파산 전환 절차',
    questionKeyword: '개인회생이 폐지되면 파산으로 전환할 수 있나요?',
    ctaKeyword: '회생 폐지 파산전환 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '개인회생 폐지 후 파산 전환 절차 3단계 | 로앤가이드',
      description:
        '개인회생 변제금을 더 이상 납부할 수 없어 폐지될 상황이라면, 파산 전환 절차와 면책 가능성을 지금 확인하세요.',
    },
    intro:
      '<p>개인회생 변제금을 1년 넘게 납부했는데, 갑자기 실직하면서 더 이상 변제금을 내기 어렵습니다. 법원에서 "변제금을 3회 이상 연체하면 폐지된다"고 했는데, 폐지되면 모든 게 원점으로 돌아가는 건지 걱정입니다. 개인회생이 폐지되더라도 파산 전환을 통해 면책을 받을 수 있는 방법이 있습니다.</p>',
    sections: [
      {
        title: '개인회생 폐지 사유와 절차',
        content:
          '<p><strong style="color:#1e3a5f">변제금 미납, 소득 감소, 허위 신고 등이 주요 폐지 사유입니다.</strong></p>\n<ul>\n<li><strong>변제금 3회 연체</strong> — 변제금을 3회 이상 연체하면 법원이 직권으로 또는 채권자 신청에 의해 개인회생을 폐지합니다.</li>\n<li><strong>변제계획 이행 불가</strong> — 실직, 질병 등으로 소득이 크게 감소하여 변제계획 이행이 불가능해진 경우입니다.</li>\n<li><strong>허위·은닉 발각</strong> — 재산이나 소득을 허위로 신고하거나 은닉한 사실이 드러나면 폐지됩니다.</li>\n<li><strong>폐지 효과</strong> — 개인회생이 폐지되면 채권자의 개별 추심이 재개됩니다. 압류, 가압류 등이 다시 가능해집니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 변제금 납부가 어려워지면 폐지되기 전에 법원에 변제계획 변경을 신청하세요. 변제기간 연장(최대 5년)이나 변제금 감액이 가능할 수 있습니다.</blockquote>',
      },
      {
        title: '파산 전환 절차와 요건',
        content:
          '<p><strong style="color:#1e3a5f">개인회생 폐지 후 파산을 신청하면 면책을 통해 채무에서 벗어날 수 있습니다.</strong></p>\n<ul>\n<li><strong>파산 신청</strong> — 개인회생 폐지 후 관할 법원에 파산 및 면책 신청서를 제출합니다. 개인회생 때 제출한 서류를 상당 부분 활용할 수 있습니다.</li>\n<li><strong>지급불능 요건</strong> — 채무자가 변제 능력이 없어 채무를 지속적으로 변제할 수 없는 상태(지급불능)를 소명해야 합니다.</li>\n<li><strong>파산선고 → 면책심사</strong> — 파산선고 후 면책심사를 거쳐 면책결정을 받으면 채무에 대한 법적 책임이 면제됩니다.</li>\n<li><strong>기존 변제금 처리</strong> — 개인회생 중 납부한 변제금은 이미 채권자에게 배분된 것이므로 돌려받을 수 없지만, 파산 시 별도로 부담하지도 않습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>회생 폐지 후 파산 전환, AI가 절차를 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">현재 상황과 채무 내역을 입력하면 파산 전환 가능성을 무료로 분석합니다.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '파산 면책 시 주의사항',
        content:
          '<p><strong style="color:#1e3a5f">면책불허가 사유에 해당하지 않도록 주의해야 합니다.</strong></p>\n<ul>\n<li><strong>면책불허가 사유</strong> — 사행행위로 재산을 감소시킨 경우, 허위 채권자목록 제출, 과거 7년 이내 면책결정을 받은 경우, 설명의무 위반 등입니다(채무자회생법 제564조).</li>\n<li><strong>비면책채권 확인</strong> — 세금, 벌금, 양육비, 고의적 불법행위로 인한 손해배상금 등은 면책 대상에서 제외됩니다.</li>\n<li><strong>재량면책</strong> — 면책불허가 사유가 있더라도 파산에 이르게 된 경위 등을 고려하여 법원이 재량으로 면책을 허가할 수 있습니다.</li>\n<li><strong>면책 후 효과</strong> — 면책결정이 확정되면 채무에 대한 법적 책임이 면제됩니다. 다만 채무 자체가 소멸하는 것은 아니므로 자연채무로 남습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 개인회생이 허위 신고로 폐지된 경우, 파산 면책 심사에서도 불리하게 작용합니다. 모든 재산과 채무를 정직하게 신고하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 면책불허가 사유와 재량면책',
        summary:
          '대법원 2024마6789 사건(대법원, 2024.12.26 선고)에서 법원은 채무자의 설명의무 위반이 면책불허가 사유에 해당하더라도, 파산에 이르게 된 경위와 채무자의 경제적 재기 필요성 등을 고려하면 재량면책을 허용할 수 있다고 판시했습니다.',
        takeaway:
          '면책불허가 사유가 있어도 포기하지 마세요. 파산에 이르게 된 불가피한 사정, 채권자의 이의 유무 등을 소명하면 재량면책을 받을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '개인회생 폐지 후 바로 파산을 신청할 수 있나요?',
        answer:
          '<p>네, 개인회생 폐지 결정이 확정되면 곧바로 파산 및 면책을 신청할 수 있습니다. 개인회생 때 제출한 채권자목록과 재산목록을 활용할 수 있어 준비 기간을 단축할 수 있습니다.</p>',
      },
      {
        question: '개인회생을 다시 신청할 수도 있나요?',
        answer:
          '<p>네, 폐지 사유가 해소되었다면(예: 재취업으로 소득이 회복된 경우) 개인회생을 다시 신청할 수 있습니다. 다만 법원이 이전 폐지 이력을 고려하므로 변제 의지를 더 강하게 소명해야 합니다.</p>',
      },
      {
        question: '파산하면 집과 차를 모두 빼앗기나요?',
        answer:
          '<p>파산에서도 생활에 필수적인 재산(생활필수품, 1개월치 생활비, 직업에 필수적인 도구)은 면제재산으로 보호됩니다. 다만 고가의 부동산이나 차량은 파산관재인에 의해 환가될 수 있습니다.</p>',
      },
      {
        question: '파산 면책을 받으면 신용이 영구히 나빠지나요?',
        answer:
          '<p>면책결정 후 약 5~7년이 지나면 신용정보가 삭제됩니다. 면책 후 성실하게 경제활동을 하면 점진적으로 신용이 회복됩니다. 영구히 나빠지는 것은 아닙니다.</p>',
      },
      {
        question: '변제금을 80% 이상 납부했으면 면책을 받을 수 있나요?',
        answer:
          '<p>변제계획에 따른 변제금의 4/5(80%) 이상을 납부했고, 잔여 변제금 미납이 채무자의 책임이 아닌 사유로 발생한 경우에는 법원이 면책결정을 할 수 있습니다(채무자회생법 제624조 제2항).</p>',
      },
    ],
    cta: { text: '회생 폐지 후 파산 전환 가능성 AI로 확인하기', link: '/chat?domain=rehabilitation' },
    internalLinks: [
      { label: '개인회생 절차 A to Z', href: '/guide/rehabilitation/rehabilitation-application-procedure-atoz' },
      { label: '개인회생 vs 파산 비교', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy-choice' },
      { label: '변제금 산정 방법', href: '/guide/rehabilitation/rehabilitation-payment-calculation' },
      { label: '개인회생 자격 요건', href: '/guide/rehabilitation/rehabilitation-eligibility-requirements-faq' },
      { label: '개인회생 기각 사유', href: '/guide/rehabilitation/rehabilitation-rejection-5-reasons' },
    ],
  },

  // ── 파산 11. 자영업 폐업 파산 절차 특례 ──
  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-self-employed-closing',
    keyword: '자영업 폐업 파산 절차 특례',
    questionKeyword: '자영업을 폐업하고 파산을 신청하려면 어떻게 해야 하나요?',
    ctaKeyword: '자영업 폐업 파산 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '자영업 폐업 후 파산 면책 절차 4단계 | 로앤가이드',
      description:
        '자영업을 폐업했는데 빚이 너무 많아 파산을 고려 중이라면, 폐업 후 파산 절차와 면책 조건을 지금 확인하세요.',
    },
    intro:
      '<p>3년간 운영하던 카페를 폐업했습니다. 창업 대출 5천만원, 카드 빚 2천만원, 밀린 임대료까지 합하면 총 1억원이 넘는 빚이 남았습니다. 재취업을 해도 갚을 수 있는 금액이 아니라 파산을 생각하고 있습니다. 자영업자의 파산은 일반 개인파산과 절차가 유사하지만, 사업 관련 채무 처리에서 추가로 확인할 사항이 있습니다.</p>',
    sections: [
      {
        title: '자영업 폐업 후 파산 신청 준비',
        content:
          '<p><strong style="color:#1e3a5f">폐업 절차를 마무리한 후 파산 신청 서류를 준비합니다.</strong></p>\n<ul>\n<li><strong>폐업신고</strong> — 관할 세무서에 폐업신고를 합니다. 폐업일 이후 25일 이내에 부가가치세 확정신고, 다음 해 5월에 종합소득세 신고를 해야 합니다.</li>\n<li><strong>사업 관련 채무 정리</strong> — 창업 대출, 매입채무(거래처 미지급금), 미납 임대료, 직원 미지급 임금, 밀린 4대보험료 등을 모두 파악합니다.</li>\n<li><strong>밀린 세금 확인</strong> — 부가가치세, 소득세 등 체납 세금은 비면책채권이므로 파산 면책을 받아도 납부 의무가 남습니다.</li>\n<li><strong>보증채무 확인</strong> — 사업 대출 시 배우자나 가족이 보증을 선 경우, 파산해도 보증인의 채무는 소멸하지 않습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 폐업 전에 직원 임금과 퇴직금을 정산하세요. 임금체불은 형사처벌 대상이며, 파산으로도 면책되지 않을 수 있습니다.</blockquote>',
      },
      {
        title: '파산 신청 절차와 면책까지의 과정',
        content:
          '<p><strong style="color:#1e3a5f">파산 및 면책 신청서를 제출하면 6~12개월 내 면책결정을 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>신청서 제출</strong> — 거주지 관할 법원에 파산 및 면책 신청서, 채권자목록, 재산목록, 소득·지출 내역서를 제출합니다.</li>\n<li><strong>심문기일</strong> — 법원이 채무자 심문을 실시합니다. 파산에 이르게 된 경위, 현재 재산 상태, 소득 전망 등을 확인합니다.</li>\n<li><strong>파산선고</strong> — 지급불능 상태가 인정되면 파산이 선고됩니다. 재산이 거의 없으면 동시폐지 결정(파산관재인을 선임하지 않고 바로 폐지)이 내려집니다.</li>\n<li><strong>면책심사</strong> — 파산선고 후 면책심사를 거칩니다. 면책불허가 사유가 없으면 면책결정이 내려지고, 2주 후 확정됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>자영업 폐업 후 파산 절차, AI가 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">채무 내역과 현재 상황을 입력하면 파산·면책 가능성을 무료로 분석합니다.</p>\n<a href="/chat?domain=bankruptcy" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '자영업 폐업 파산의 특수 쟁점',
        content:
          '<p><strong style="color:#1e3a5f">사업 관련 채무는 면책 여부에서 일반 소비자 채무와 다른 쟁점이 있습니다.</strong></p>\n<ul>\n<li><strong>사업 실패와 면책불허가</strong> — 단순한 사업 실패는 면책불허가 사유가 아닙니다. 다만 사업자금을 유흥비나 도박에 사용한 경우에는 면책이 불허될 수 있습니다.</li>\n<li><strong>사해행위 조사</strong> — 폐업 전에 재산을 가족에게 이전하거나 특정 채권자에게만 변제한 행위는 사해행위로 조사 대상이 됩니다.</li>\n<li><strong>동시폐지</strong> — 자영업 폐업 후 파산 시 대부분 환가할 재산이 없어 동시폐지 결정이 납니다. 파산관재인이 선임되지 않아 절차가 간소합니다.</li>\n<li><strong>개인회생과의 비교</strong> — 재취업 후 안정적 소득이 있으면 개인회생이 유리할 수 있습니다. 파산은 재산을 포기하지만 변제금 부담이 없고, 개인회생은 재산을 유지하지만 3~5년간 변제해야 합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 폐업 직전 거래처에 외상대금을 선별적으로 갚은 행위(편파변제)는 파산관재인의 부인권 행사 대상이 됩니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 채무불이행자명부 등재와 면책 효력',
        summary:
          '대법원 2025마7576 사건(대법원, 2026.01.09 선고)에서 법원은 면책결정이 확정되면 채무불이행자명부 등재신청에 정당한 이유가 없으므로 기각해야 한다고 판시하며, 면책된 채무에 대한 간접강제도 허용되지 않는다고 했습니다.',
        takeaway:
          '파산 면책을 받으면 채무불이행자명부에서도 삭제됩니다. 면책 후 경제적 재기를 위한 법적 보호가 명확합니다.',
      },
    ],
    faq: [
      {
        question: '폐업 후 얼마 이내에 파산을 신청해야 하나요?',
        answer:
          '<p>기한 제한은 없습니다. 다만 폐업 후 시간이 지나면 채권자의 추심이 강화되고 재산이 더 줄어들 수 있으므로, 가능한 한 빨리 신청하는 것이 유리합니다.</p>',
      },
      {
        question: '밀린 세금도 파산으로 면책되나요?',
        answer:
          '<p>아닙니다. 국세, 지방세 등 조세채권은 비면책채권입니다. 파산 면책을 받아도 밀린 세금은 납부해야 합니다. 다만 납세담보 없이는 체납처분이 유예될 수 있으므로 세무서에 분납을 협의하세요.</p>',
      },
      {
        question: '폐업 후 파산하면 다시 사업을 할 수 있나요?',
        answer:
          '<p>면책결정이 확정되면 사업자등록을 다시 할 수 있습니다. 파산 면책은 채무를 정리하는 절차이지, 향후 사업 활동을 금지하는 것이 아닙니다. 다만 신용등급 회복까지 대출이 어려울 수 있습니다.</p>',
      },
      {
        question: '자영업 대출에 배우자가 보증을 섰는데, 파산하면 배우자는 어떻게 되나요?',
        answer:
          '<p>주채무자(사업자)가 파산 면책을 받아도 보증인(배우자)의 보증채무는 소멸하지 않습니다. 보증인이 별도로 개인회생이나 파산을 신청하지 않으면 채권자가 보증인에게 상환을 청구합니다.</p>',
      },
      {
        question: '파산 신청 비용은 얼마나 드나요?',
        answer:
          '<p>법원 인지대와 송달료는 약 5~10만원입니다. 변호사를 선임하면 150~300만원 정도의 비용이 듭니다. 대한법률구조공단에서 일정 소득 기준 이하이면 무료 법률구조를 받을 수 있습니다.</p>',
      },
    ],
    cta: { text: '자영업 폐업 후 파산 면책 가능성 AI로 확인하기', link: '/chat?domain=bankruptcy' },
    internalLinks: [
      { label: '파산에서 면책까지', href: '/guide/bankruptcy/bankruptcy-to-discharge-process' },
      { label: '파산 면책 전 절차', href: '/guide/bankruptcy/application-to-discharge-full-procedure' },
      { label: '파산 면제재산', href: '/guide/bankruptcy/bankruptcy-personal-property-exempt' },
      { label: '파산 후 신용회복', href: '/guide/bankruptcy/bankruptcy-credit-recovery-timeline' },
      { label: '개인회생 vs 파산 비교', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy-choice' },
    ],
  },

  // ── 전세 12. 전대차 세입자 보증금 보호 ──
  {
    domain: 'jeonse',
    slug: 'jeonse-sublet-sublease-protection',
    keyword: '전대차 세입자 보증금 보호',
    questionKeyword: '전대차(전전세)로 들어왔는데 보증금을 보호받을 수 있나요?',
    ctaKeyword: '전대차 보증금 보호 상담',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '전대차 세입자 보증금 보호 방법 3가지 | 로앤가이드',
      description:
        '전대차(전전세)로 입주했는데 보증금을 제대로 보호받을 수 있는지 불안하다면, 대항력 요건과 주의사항을 지금 확인하세요.',
    },
    intro:
      '<p>친구의 전세집을 전대차(전전세) 형태로 물려받아 입주했습니다. 임대인에게 동의도 받았다고 하는데, 나중에 보증금을 돌려받을 수 있을지 불안합니다. 전대차 세입자는 주택임대차보호법상 보호 범위가 직접 임차인과 다르므로, 대항력 요건을 꼼꼼히 확인해야 합니다.</p>',
    sections: [
      {
        title: '전대차 세입자의 법적 지위',
        content:
          '<p><strong style="color:#1e3a5f">전대차 세입자(전차인)는 임대인과 직접 계약한 것이 아니므로 보호 범위가 제한됩니다.</strong></p>\n<ul>\n<li><strong>전대차란</strong> — 임차인(전대인)이 자신의 임차권을 기초로 제3자(전차인)에게 다시 임대하는 것입니다. 임대인의 동의가 있어야 적법한 전대차입니다(민법 제629조).</li>\n<li><strong>적법한 전대차</strong> — 임대인이 전대에 동의한 경우, 전차인은 임대인에게 직접 의무를 부담합니다(민법 제630조). 다만 보증금 반환 청구권은 전대인에게 있습니다.</li>\n<li><strong>무단전대</strong> — 임대인의 동의 없는 전대는 임대인이 임대차 해지를 할 수 있고, 전차인은 보증금을 돌려받기 매우 어렵습니다.</li>\n<li><strong>주택임대차보호법 적용</strong> — 적법한 전대차의 전차인도 주택의 인도와 주민등록을 갖추면 제3자에 대한 대항력을 취득할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 전대차 계약 전에 반드시 임대인의 서면 동의를 확인하세요. 구두 동의만으로는 분쟁 시 입증이 어렵습니다.</blockquote>',
      },
      {
        title: '전대차 보증금 보호를 위한 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">전대차 세입자가 보증금을 보호받으려면 아래 사항을 반드시 확인하세요.</strong></p>\n<ul>\n<li><strong>임대인 동의서 확보</strong> — 임대인이 전대에 동의한다는 서면(내용증명 또는 동의서)을 반드시 받으세요. 전대차 계약서에 임대인이 서명하는 것이 가장 확실합니다.</li>\n<li><strong>전입신고 + 확정일자</strong> — 전대차 세입자도 전입신고와 확정일자를 받아야 대항력과 우선변제권을 취득합니다.</li>\n<li><strong>원임대차 계약 확인</strong> — 원임대차 계약의 기간, 보증금, 특약 사항을 확인하세요. 원임대차가 종료되면 전대차도 종료될 수 있습니다.</li>\n<li><strong>등기부등본 확인</strong> — 임대 목적물의 근저당, 가압류 등 권리관계를 확인하세요. 선순위 권리가 많으면 경매 시 배당을 받지 못할 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>전대차 보증금 보호 가능 여부, AI가 확인합니다</strong></p>\n<p style="margin:0;font-size:0.95em">전대차 계약 내용과 등기부등본 정보를 입력하면 보호 가능성을 무료로 분석합니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '보증금 반환 분쟁 시 대응 방법',
        content:
          '<p><strong style="color:#1e3a5f">전대차 보증금은 원칙적으로 전대인에게 청구하지만, 상황에 따라 임대인에게도 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>전대인에게 청구</strong> — 전대차 계약의 당사자는 전대인이므로 보증금 반환 의무도 전대인에게 있습니다.</li>\n<li><strong>임대인에게 직접 청구</strong> — 임대인이 전대에 동의하면서 보증금 반환 의무도 부담하기로 한 경우, 또는 원임대차가 합의해지되어 임대인이 전차인에 대해 직접 의무를 부담하는 경우에 가능합니다.</li>\n<li><strong>임차권등기명령</strong> — 전대차 종료 후 보증금을 돌려받지 못하면 법원에 임차권등기명령을 신청하여 대항력과 우선변제권을 유지한 채 이사할 수 있습니다.</li>\n<li><strong>지급명령·소송</strong> — 보증금 반환이 되지 않으면 지급명령이나 민사소송을 통해 강제집행할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 전대인이 원래 임대인에게 보증금을 돌려받지 못한 상태라면 전차인의 보증금 반환도 어려워질 수 있습니다. 원임대차의 보증금 관계를 미리 확인하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임대인 동의와 전대차의 효력',
        summary:
          '대법원 2024다283668 사건(대법원, 2025.12.04 선고)에서 법원은 개업공인중개사가 다가구주택 임대차 중개 시 선순위 임대차보증금채권이 얼마나 있을 수 있는지 조사·확인하여 임차의뢰인에게 설명해야 할 의무가 있다고 판시했습니다.',
        takeaway:
          '전대차 계약 시에도 부동산 중개인이 선순위 채권 현황을 설명할 의무가 있습니다. 중개인의 설명이 부족했다면 손해배상을 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '임대인의 동의 없이 전대차 계약을 했으면 어떻게 되나요?',
        answer:
          '<p>무단전대로서 임대인이 원임대차를 해지할 수 있습니다. 해지되면 전차인은 퇴거해야 하며, 보증금은 전대인에게만 청구할 수 있습니다. 전대인이 무자력이면 보증금 회수가 매우 어렵습니다.</p>',
      },
      {
        question: '전대차 세입자도 소액보증금 최우선변제를 받을 수 있나요?',
        answer:
          '<p>적법한 전대차의 전차인이 대항력(전입신고+점유)을 갖추면 소액보증금 최우선변제 대상이 될 수 있습니다. 다만 원임대차 보증금과 별도로 판단되므로 금액 기준을 확인해야 합니다.</p>',
      },
      {
        question: '원임대차 기간이 끝나면 전대차도 자동으로 종료되나요?',
        answer:
          '<p>원칙적으로 원임대차가 종료되면 전대차도 종료됩니다. 다만 임대인이 전대를 동의한 경우 임대인이 전차인에게 직접 반환을 청구해야 하고, 전차인에게 합리적인 퇴거 기간을 부여해야 합니다.</p>',
      },
      {
        question: '전대차와 임차권 양도의 차이는 무엇인가요?',
        answer:
          '<p>전대차는 원임차인이 여전히 임대인과의 관계를 유지하면서 제3자에게 재임대하는 것이고, 임차권 양도는 원임차인의 지위 자체를 제3자에게 넘기는 것입니다. 임차권 양도 시 양수인이 임대인과 직접 계약 관계를 갖게 됩니다.</p>',
      },
    ],
    cta: { text: '전대차 보증금 보호 가능 여부 AI로 확인하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '보증금 반환 절차', href: '/guide/jeonse/deposit-return-process' },
      { label: '보증금 미반환 대응', href: '/guide/jeonse/jeonse-deposit-not-returned-response' },
      { label: '전입신고 필수 요건', href: '/guide/jeonse/jeonse-tenant-registration-requirement' },
      { label: '계약갱신 거절 대응', href: '/guide/jeonse/jeonse-renewal-landlord-refusal' },
      { label: '계약만료 보증금 반환', href: '/guide/jeonse/lease-expiry-deposit-return-steps' },
    ],
  },

  // ── 전세 13. 임대인 세금체납 세입자 위험 ──
  {
    domain: 'jeonse',
    slug: 'jeonse-landlord-tax-delinquent-risk',
    keyword: '임대인 세금체납 세입자 위험',
    questionKeyword: '임대인이 세금을 체납하면 세입자 보증금에 영향이 있나요?',
    ctaKeyword: '임대인 세금체납 세입자 보호 상담',
    type: '체크리스트형',
    perspective: 'victim',
    meta: {
      title: '임대인 세금체납 시 세입자 보증금 위험 3가지 | 로앤가이드',
      description:
        '임대인이 세금을 체납해서 보증금이 위험할 수 있다고 들었다면, 확인 방법과 보호 대책을 지금 확인하세요.',
    },
    intro:
      '<p>전세 계약 후 살고 있는데, 집에 국세 체납 압류가 붙었다는 우편물이 날아왔습니다. 임대인이 세금을 체납하면 경매에 넘어갈 수 있고, 보증금을 돌려받지 못할 수도 있다고 합니다. 임대인의 체납세금은 세입자의 보증금보다 우선할 수 있어 매우 위험한 상황입니다.</p>',
    sections: [
      {
        title: '임대인 세금체납이 세입자에게 미치는 영향',
        content:
          '<p><strong style="color:#1e3a5f">체납 세금의 법정기일이 전입일보다 앞서면 보증금이 후순위로 밀립니다.</strong></p>\n<ul>\n<li><strong>국세·지방세 우선원칙</strong> — 국세징수법에 따라 국세와 지방세는 다른 채권보다 우선합니다. 다만 전세 보증금의 대항력 취득일(전입일 다음날)보다 법정기일이 늦은 세금은 보증금보다 후순위입니다.</li>\n<li><strong>법정기일이란</strong> — 세금의 법정기일은 신고납부 세금의 경우 신고일, 부과 세금의 경우 고지서 발송일입니다. 이 날짜가 전입신고일보다 앞서면 세금이 우선합니다.</li>\n<li><strong>경매 시 배당 순서</strong> — 체납세금 → 전세보증금(선순위) → 근저당권 → 일반채권 순서로 배당됩니다. 체납세금이 많으면 보증금 배당이 줄어듭니다.</li>\n<li><strong>당해세(해당 부동산 관련 세금)</strong> — 재산세, 종합부동산세 등 해당 부동산에 부과된 세금은 어떤 채권보다도 우선합니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 2023년 4월부터 주택임대차보호법 개정으로 임차인이 임대인의 미납 국세를 열람할 수 있게 되었습니다. 계약 전 반드시 확인하세요.</blockquote>',
      },
      {
        title: '임대인 세금체납 확인 방법',
        content:
          '<p><strong style="color:#1e3a5f">계약 전후로 임대인의 체납세금을 확인할 수 있는 방법이 있습니다.</strong></p>\n<ul>\n<li><strong>국세 미납 열람</strong> — 주택임대차보호법 제3조의6에 따라 임차인(예정자 포함)은 임대인의 동의 없이도 관할 세무서에서 임대인의 미납 국세를 열람할 수 있습니다.</li>\n<li><strong>지방세 미납 열람</strong> — 지방세징수법에 따라 구청·시청에서 임대인의 미납 지방세를 열람할 수 있습니다.</li>\n<li><strong>등기부등본 확인</strong> — 이미 압류가 된 경우 등기부등본에 압류 기재가 나타납니다. 계약 전 반드시 등기부등본을 확인하세요.</li>\n<li><strong>열람 시점</strong> — 계약 체결 전, 전입 직전, 계약 갱신 전 등 주요 시점마다 확인하는 것이 안전합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>임대인 세금체납 위험, AI가 분석합니다</strong></p>\n<p style="margin:0;font-size:0.95em">임대인 정보와 계약 내용을 입력하면 보증금 위험도와 대응 방법을 무료로 확인하세요.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '보증금 보호를 위한 대응 방법',
        content:
          '<p><strong style="color:#1e3a5f">체납 사실을 확인한 후 즉시 보증금 보호 조치를 취해야 합니다.</strong></p>\n<ul>\n<li><strong>전세보증금반환보증보험 가입</strong> — HUG(주택도시보증공사)나 SGI(서울보증보험)의 전세보증금반환보증에 가입하면 임대인이 보증금을 반환하지 않을 때 보증기관이 대신 지급합니다.</li>\n<li><strong>임차권등기명령</strong> — 보증금 반환이 되지 않으면 법원에 임차권등기명령을 신청하여 대항력을 유지한 채 이사할 수 있습니다.</li>\n<li><strong>배당요구</strong> — 경매가 진행되면 배당요구 종기까지 배당요구를 신청합니다. 대항력과 확정일자가 있으면 배당에 참여할 수 있습니다.</li>\n<li><strong>계약 해지·이사</strong> — 임대인의 채무불이행(건물 유지관리 의무 위반 등)이 있으면 계약 해지 후 보증금 반환을 청구할 수 있습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 이미 입주한 상태에서 체납 사실을 알았다면, 전세보증금반환보증보험 가입이 가능한지 즉시 확인하세요. 체납 압류가 있으면 가입이 거부될 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 대항력 있는 임차인의 보호 범위',
        summary:
          '대법원 2025다213466 사건(대법원, 2026.01.08 선고)에서 법원은 주택임대차보호법상 대항력의 요건인 주민등록은 대항력 취득 시뿐만 아니라 유지를 위해서도 계속 존속해야 하며, 임차인이 임차주택을 양수하면 대항력이 소멸한다고 판시했습니다.',
        takeaway:
          '전입신고를 유지하는 것이 대항력의 핵심입니다. 임대인 세금체납으로 경매에 넘어가더라도 전입신고와 확정일자를 유지하고 있으면 배당에서 보증금을 보호받을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '임대인의 세금 체납을 계약 전에 확인할 수 있나요?',
        answer:
          '<p>네, 2023년 4월부터 임차인(예정자)이 임대인의 동의 없이도 관할 세무서에서 미납 국세를 열람할 수 있습니다. 계약서 사본과 신분증을 지참하고 방문하세요.</p>',
      },
      {
        question: '체납 압류가 있는 집에 이미 전세로 들어왔으면 어떻게 하나요?',
        answer:
          '<p>즉시 전세보증금반환보증보험 가입 가능 여부를 확인하세요. 가입이 불가하면 임대인에게 체납세금 해결을 요구하고, 해결되지 않으면 계약 해지와 보증금 반환 소송을 검토해야 합니다.</p>',
      },
      {
        question: '경매에서 보증금을 전혀 돌려받지 못할 수도 있나요?',
        answer:
          '<p>네, 체납세금(특히 당해세)과 선순위 근저당 금액이 부동산 경매가보다 크면 후순위 보증금은 한 푼도 배당받지 못할 수 있습니다. 이 경우 임대인 개인에게 부족분을 청구하는 방법밖에 없습니다.</p>',
      },
      {
        question: '당해세란 무엇이고, 왜 가장 위험한가요?',
        answer:
          '<p>당해세는 해당 부동산 자체에 부과되는 세금(재산세, 종합부동산세)입니다. 당해세는 법정기일과 관계없이 모든 채권(근저당·전세보증금 포함)보다 우선 배당됩니다. 임대인의 재산세 체납이 많으면 보증금이 크게 줄어들 수 있습니다.</p>',
      },
    ],
    cta: { text: '임대인 세금체납 위험도 AI로 분석하기', link: '/chat?domain=jeonse' },
    internalLinks: [
      { label: '보증금 반환 절차', href: '/guide/jeonse/deposit-return-process' },
      { label: '보증금 미반환 대응', href: '/guide/jeonse/jeonse-deposit-not-returned-response' },
      { label: '전입신고 필수 요건', href: '/guide/jeonse/jeonse-tenant-registration-requirement' },
      { label: '계약갱신 거절 대응', href: '/guide/jeonse/jeonse-renewal-landlord-refusal' },
      { label: '계약만료 보증금 반환', href: '/guide/jeonse/lease-expiry-deposit-return-steps' },
    ],
  },

  // ── 이웃분쟁 14. 리모델링 공사소음 손해배상 ──
  {
    domain: 'neighbor-dispute',
    slug: 'neighbor-dispute-renovation-noise-claim',
    keyword: '리모델링 공사소음 손해배상',
    questionKeyword: '옆집 리모델링 공사소음이 너무 심한데 손해배상을 청구할 수 있나요?',
    ctaKeyword: '리모델링 공사소음 손해배상 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '리모델링 공사소음 손해배상 청구 방법 4단계 | 로앤가이드',
      description:
        '옆집 리모델링 공사소음이 너무 심해서 손해배상을 고려 중이라면, 참을 한도 기준과 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>옆집에서 한 달째 리모델링 공사를 하고 있습니다. 매일 오전 8시부터 저녁 6시까지 드릴 소리, 해머 소리가 끊이지 않아 재택근무도, 수면도 불가능합니다. 관리사무소에 민원을 넣었지만 "공사 허가를 받았다"는 답변만 돌아옵니다. 공사소음도 "참을 한도"를 넘으면 손해배상 청구가 가능하며, 소음 측정과 피해 입증이 핵심입니다.</p>',
    sections: [
      {
        title: '공사소음의 참을 한도 기준',
        content:
          '<p><strong style="color:#1e3a5f">"참을 한도"를 넘는 소음은 불법행위로서 손해배상 대상이 됩니다.</strong></p>\n<ul>\n<li><strong>참을 한도란</strong> — 대법원 판례에 따라 소음이 사회통념상 수인(참을 수 있는) 한도를 넘으면 위법한 침해로 봅니다. 구체적 기준은 소음의 정도, 지속 시간, 시간대, 지역 특성 등을 종합 판단합니다.</li>\n<li><strong>주거지역 소음 기준</strong> — 환경부 소음·진동관리법 시행규칙에 따라 주거지역 공사장 소음은 주간(07~18시) 65dB, 야간(22~06시) 50dB 이하여야 합니다.</li>\n<li><strong>공동주택 층간소음</strong> — 공동주택에서의 공사소음은 주간 1분간 등가소음도 45dB, 최고소음도 57dB 기준이 적용됩니다.</li>\n<li><strong>공사 허가와 무관</strong> — 공사 허가를 받았더라도 소음이 참을 한도를 초과하면 손해배상 책임이 있습니다. 허가는 행정적 허용일 뿐 민사 책임을 면제하지 않습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 법원은 소음 측정값만으로 판단하지 않고, 피해자의 건강 영향, 소음의 빈도와 패턴, 방음 조치 여부 등을 종합적으로 봅니다.</blockquote>',
      },
      {
        title: '소음 피해 증거 확보 방법',
        content:
          '<p><strong style="color:#1e3a5f">손해배상 청구를 위해서는 소음의 정도와 피해를 입증해야 합니다.</strong></p>\n<ul>\n<li><strong>소음 측정</strong> — 스마트폰 소음 측정 앱(데시벨 X 등)으로 일상적인 소음 수치를 기록합니다. 정밀 측정이 필요하면 한국환경공단이나 전문 측정업체에 의뢰합니다.</li>\n<li><strong>소음 일지 작성</strong> — 매일 소음 발생 시간, 종류(드릴·해머·절단기 등), 지속 시간, 체감 강도를 기록합니다.</li>\n<li><strong>건강 피해 증거</strong> — 수면장애, 두통, 이명 등 건강 피해가 있으면 병원 진료 기록을 확보합니다.</li>\n<li><strong>관리사무소 민원 기록</strong> — 관리사무소, 구청, 경찰에 민원을 접수한 기록을 보관합니다. 공식 민원 기록은 소음 피해 사실을 뒷받침합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>공사소음 손해배상 청구 전략, AI가 안내합니다</strong></p>\n<p style="margin:0;font-size:0.95em">소음 상황과 피해 내용을 입력하면 청구 가능성과 예상 배상액을 무료로 확인하세요.</p>\n<a href="/chat?domain=neighbor-dispute" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '손해배상 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">내용증명 발송부터 조정·소송까지 단계적으로 대응합니다.</strong></p>\n<ul>\n<li><strong>내용증명 발송</strong> — 공사 시행자(옆집 소유자 또는 시공업체)에게 소음 저감 조치와 공사시간 준수를 요구하는 내용증명을 보냅니다.</li>\n<li><strong>환경분쟁조정위원회</strong> — 환경부 산하 환경분쟁조정위원회에 분쟁 조정을 신청합니다. 소송보다 비용이 적고 빠르며(약 3~6개월), 배상금 결정도 가능합니다.</li>\n<li><strong>민사소송</strong> — 조정이 불성립하거나 배상액에 이의가 있으면 민사소송을 제기합니다. 위자료(정신적 손해)와 재산상 손해(의료비, 임시숙소비 등)를 청구합니다.</li>\n<li><strong>공사 금지 가처분</strong> — 소음이 극심하고 건강 피해가 급박한 경우, 법원에 공사 금지 가처분을 신청할 수 있습니다. 다만 전면 금지보다는 시간대 제한이 인정되는 경우가 많습니다.</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">주의: 공사소음 손해배상 소송에서 위자료는 보통 월 30만~100만원 수준입니다. 공사 기간, 소음 강도, 건강 피해 정도에 따라 달라집니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 도로소음 생활방해의 참을 한도 판단',
        summary:
          '대법원 2014다57846 사건에서 법원은 소음으로 인한 생활방해에 관해 "참을 한도"를 넘는지 여부는 소음의 정도, 성질, 지속성, 피해의 내용과 정도, 지역의 환경, 소음 방지 노력 등 여러 사정을 종합적으로 고려하여 판단해야 한다고 판시했습니다.',
        takeaway:
          '공사소음 손해배상에서도 동일한 "참을 한도" 기준이 적용됩니다. 소음 측정값, 피해 기록, 방음 조치 유무 등을 체계적으로 준비하면 손해배상 청구 가능성이 높아집니다.',
      },
    ],
    faq: [
      {
        question: '공사 허가를 받은 공사라도 소음 손해배상을 청구할 수 있나요?',
        answer:
          '<p>네, 가능합니다. 공사 허가는 행정법상의 허용이지 민사법상의 면책이 아닙니다. 공사 소음이 참을 한도를 넘으면 불법행위에 해당하여 손해배상 청구가 가능합니다.</p>',
      },
      {
        question: '공사소음 손해배상 소송에서 받을 수 있는 금액은 얼마인가요?',
        answer:
          '<p>위자료는 소음 기간, 강도, 건강 피해에 따라 월 30만~100만원 수준이 일반적입니다. 수면장애로 인한 의료비, 임시 거처 비용 등 실제 손해도 별도로 청구할 수 있습니다.</p>',
      },
      {
        question: '스마트폰 소음 측정 앱의 기록도 증거로 인정되나요?',
        answer:
          '<p>참고 자료로는 활용되지만, 법적 증거로서의 정밀도는 떨어집니다. 소송을 진행할 경우 한국환경공단이나 인증받은 측정기관의 정밀 측정이 필요합니다. 다만 일상적인 소음 패턴을 보여주는 보조 증거로는 유용합니다.</p>',
      },
      {
        question: '환경분쟁조정위원회에 신청하면 공사를 중단시킬 수 있나요?',
        answer:
          '<p>환경분쟁조정위원회는 공사 중단 명령 권한은 없지만, 소음 저감 조치와 손해배상을 결정할 수 있습니다. 공사 중단이 필요하면 법원에 가처분 신청을 별도로 해야 합니다.</p>',
      },
      {
        question: '공사 시간 제한 규정이 있나요?',
        answer:
          '<p>공동주택에서는 보통 관리규약에 따라 평일 오전 9시~오후 6시(또는 5시), 주말·공휴일은 공사 금지인 경우가 많습니다. 관리규약을 위반한 공사는 손해배상 청구 시 유리한 증거가 됩니다.</p>',
      },
    ],
    cta: { text: '공사소음 손해배상 청구 가능성 AI로 확인하기', link: '/chat?domain=neighbor-dispute' },
    internalLinks: [
      { label: '층간소음 분쟁 대응', href: '/guide/neighbor-dispute/floor-noise-dispute-response' },
      { label: '층간소음 피해자 가이드', href: '/guide/neighbor-dispute/floor-noise-victim-where-to-start' },
      { label: '소음 신고부터 조정까지', href: '/guide/neighbor-dispute/floor-noise-report-to-mediation-procedure' },
      { label: '이웃분쟁 냄새·반려동물·주차', href: '/guide/neighbor-dispute/neighbor-dispute-smell-pet-parking' },
      { label: '보증금 반환 절차', href: '/guide/jeonse/deposit-return-process' },
    ],
  },
];
