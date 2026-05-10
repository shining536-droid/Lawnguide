import { SpokePage } from '../spoke-pages';

// batch60 wage 2 + retirement 2 + unemployment 1 = 5개
//
// 고유 존재 이유:
// 1. 이 페이지는 격일제(1일 근무 + 1일 휴무) 근무자가 1일 8시간 초과·야간·휴일 가산수당을 별도 청구할 수 있는지 다투는 사람이 최저임금 산입 소정근로시간 8시간 한정 + 격일제 가산수당 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 회사 경영상 사정으로 작업 중단·조기퇴근·휴업 명령을 받아 임금이 70%로 줄어든 근로자가 휴업수당(평균임금 70% 이상) 청구 + 무노동무임금 영역 구분 + 부당 휴업 다툼 트랙을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 사업장이 확정급여형(DB)에서 확정기여형(DC) 퇴직연금으로 전환된 후 정당 부담금 미달·운용손실로 퇴직급여가 줄어든 가입자가 부담금 차액 + 지연이자 청구 트랙을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 명예퇴직·희망퇴직 합의서에 부제소합의·일체 청구권 포기 조항이 있어 추가 퇴직금 청구가 막힌다고 들은 근로자가 사전 포기 무효 + 별도 퇴직금 차액 청구 트랙을 정리하도록 돕는 페이지다.
// 5. 이 페이지는 사업주가 폐업 신고를 하지 않아 고용보험 자격상실·이직확인서가 처리되지 않은 근로자가 사실상 폐업 입증 + 직권 자격상실 + 실업급여 신청 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch60WageUnempRetire: SpokePage[] = [
  // ─── 1. wage / wage-alternate-day-shift-overtime-night-holiday-claim ───
  {
    domain: 'wage',
    slug: 'wage-alternate-day-shift-overtime-night-holiday-claim',
    keyword: '격일제 야간 휴일 가산수당 청구',
    questionKeyword: '격일제(하루 근무 + 하루 휴무)로 일하는데 1일 16시간씩 일해요. 1일 8시간 초과 + 야간(22~06시) + 휴일근로 가산수당이 별도로 인정되나요?',
    ctaKeyword: '격일제 야간 휴일 가산수당 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '격일제 근무자 야간·휴일 가산수당 4가지 청구 트랙 | 로앤가이드',
      description:
        '격일제(1일 근무 + 1일 휴무) 근로자의 1일 8시간 초과·야간·휴일근로 가산수당이 임금협정 통상임금에 포함되지 않은 경우 별도 청구 4가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"택시회사에서 격일제로 일한 지 3년차예요. 1일 16시간(오전 5시 ~ 오후 9시) 운행하고 다음 날 쉬는 구조인데, 임금협정엔 \'1일 소정근로 8시간 + 노선수당 100만원 = 가산수당 모두 포함\'이라고 적혀 있어요. 매주 야간(22~02시)·심야 시간 근무가 4~6시간씩 누적되고 휴일에도 격주로 근무하는데, 가산수당은 한 푼도 따로 안 들어옵니다. 격일제 근무자는 다른 가산수당 못 받는 건가요?" 1일 8시간을 초과한 연장근로시간은 최저임금 산입 소정근로시간에 포함되지 않으며, 이는 격일제 근무 형태에서도 마찬가지라는 영역입니다(대법원 2022다257238). 즉 격일제라도 1일 8시간 초과분은 별도 연장근로수당 산정 대상이고, 야간(22~06시)·휴일근로도 가산 영역입니다. 임금채권 시효 3년(근로기준법 제49조) 내라면 미지급 가산수당의 환수 검토가 가능한 영역이에요.</p>',
    sections: [
      {
        title: 'Q. 격일제 가산수당 4가지 점검 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 소정근로시간·연장근로 산정·야간·휴일 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 소정근로시간 한정 (대법원 2022다257238)</strong> — 1일의 근로시간이 8시간을 초과하는 경우 그 초과 부분인 연장근로시간은 다른 특별한 사정이 없는 한 최저임금액 이상의 임금을 지급해야 하는 시간에 포함되지 않고, 이는 격일제에서도 마찬가지 영역.</li>\n<li><strong>② 연장근로 가산 (1.5배)</strong> — 1일 8시간 또는 1주 40시간 초과분은 통상임금의 50% 이상 가산 영역(근로기준법 제56조 제1항). 격일제 16시간 근무라면 8시간이 연장근로 산정 대상.</li>\n<li><strong>③ 야간근로 가산 (0.5배 추가)</strong> — 22:00~06:00 사이 근로는 통상임금의 50% 가산 영역(제56조 제3항). 연장+야간이 겹치면 1.5배+0.5배 = 2.0배 산정.</li>\n<li><strong>④ 휴일근로 가산 (1.5배·8h 초과는 2.0배)</strong> — 휴일 8시간 이내 50% 가산, 8시간 초과분 100% 가산(제56조 제2항). 격주 휴일 출근도 가산수당 산정 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'노선수당 = 가산수당 모두 포함\' 식의 일률 면책은 산정 가능한 시간 자료(운행일지·태코그래프) 앞에서 무력화되는 영역. 협정 시간 초과분은 가산수당 별도 청구 트랙이 살아있는 사례입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가산수당 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 시간 자료 보존 → 시간 산정 → 가산수당 재계산 → 노동청 진정 → 민사 청구 순서로 진행됩니다(고용노동부 임금체불 절차 기준).</strong></p>\n<ol>\n<li><strong>1단계 — 시간 자료 보존 (즉시)</strong> — 최근 3년치 출퇴근 기록·근태표·운행일지·태코그래프·CCTV·임금협정서·근로계약서·취업규칙 보존.</li>\n<li><strong>2단계 — 야간·휴일·연장 시간 산정 (1~2주)</strong> — 일자별 시작·종료 시각으로 1일 8시간 초과분, 야간(22~06시) 시간, 휴일 출근 시간을 합산. 노무사·법률구조공단 132 자문 검토 가능.</li>\n<li><strong>3단계 — 가산수당 재계산 + 회사 내용증명 (회신 14일)</strong> — 통상임금 × 1.5(연장)·0.5(야간 추가)·1.5/2.0(휴일) 가산율로 차액 명세 산정 후 지급 요구.</li>\n<li><strong>4단계 — 노동청 임금체불 진정</strong> — 회사 미응답 시 사업장 관할 고용노동지청 진정(labor.moel.go.kr). 근로감독관 조사 약 25일 처리.</li>\n<li><strong>5단계 — 민사 청구 (소액심판·지급명령·본안)</strong> — 노동청 시정 한계 사안은 민사. 3,000만원 이하 소액심판, 청구액 무관 지급명령 트랙. 동료 다수 사안은 집단 청구 검토 가능 영역.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">격일제 야간·휴일 가산수당 4가지 점검을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 시간 자료 + 협정 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>최근 3년치 출퇴근 기록·근태표</strong> — 일자별 시작·종료 시각.</li>\n<li><strong>운행일지·태코그래프·GPS 기록 (운수업)</strong> — 객관 시간 입증 자료.</li>\n<li><strong>근로계약서·임금협정서</strong> — 격일제 소정근로시간·노선수당 약정 원문.</li>\n<li><strong>취업규칙·노선수당·상여금 지급규정</strong> — 가산수당 약정 정당성 다툼.</li>\n<li><strong>최근 3년치 급여명세서</strong> — 실제 지급 항목·금액.</li>\n<li><strong>가산수당 차액 산정표</strong> — 통상임금 × 가산율 재계산 명세.</li>\n<li><strong>동료 진술서·일근표 사진</strong> — 격일제 16시간 근무 사실 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 격일제 근무자는 1주 단위로 보면 \'2~3일 근무 + 4~5일 휴무\' 구조라 1주 40시간을 안 넘어 보일 수 있지만, 1일 8시간 초과·야간·휴일 가산수당은 별도 트랙. 1일 단위 시간 산정이 핵심 자료입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"격일제는 가산수당 적용 안 된다" 주장 반박</strong> — 1일 8시간 초과분 가산은 격일제에서도 마찬가지(2022다257238). 격일제 자체가 가산수당 면제 사유는 아닌 영역.</li>\n<li><strong>"노선수당에 모두 포함됐다" 주장 반박</strong> — 운행일지·태코그래프로 시간 산정 가능한 사업장이면 포괄임금 약정 효력에 다툼 트랙. 협정 시간 초과분은 별도 청구 영역.</li>\n<li><strong>"단체협약·노조 동의" 주장 반박</strong> — 단체협약이라도 강행규정(가산수당) 회피 효력 부정 영역. 노사 합의로 가산수당 면제 약정은 무효 정황.</li>\n<li><strong>3년 시효 주의</strong> — 임금채권 3년 시효(근로기준법 제49조). 시효 경과분은 청구 어려운 영역이라 자료 보존·진정 시기가 결과 좌우.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 임금체불·가산수당 무료 상담.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 임금체불 진정 트랙.</li>\n<li><strong>고용노동부 고객상담센터 1350</strong> — 격일제·근로시간 일반 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 격일제 근무자 1일 8시간 초과 연장근로와 최저임금',
        summary:
          '대법원 2022다257238 사건(대법원, 2025.07.18 선고)에서 법원은 일반택시운송사업을 영위하는 회사와 노동조합이 격일제 근로자의 임금협정을 체결한 사안에서, 근로자와 사용자가 정한 1일 근로시간이 8시간을 초과하는 경우 그 초과 부분인 연장근로시간은 다른 특별한 사정이 없는 한 최저임금액 이상의 임금을 지급해야 하는 시간에 포함되지 아니하고, 이는 1일 근무하고 그다음 날 쉬는 격일제 근무 형태에서도 마찬가지라고 판시했습니다. 또한 임금협정에서 정한 상여금이 \'중대 교통사고를 유발하지 않을 것\'이라는 추가적인 자격요건 달성에 대한 보상으로 지급되는 것이라면 소정근로 대가성이 결여되어 통상임금에 해당한다고 볼 수 없다고 정리한 사례입니다.',
        takeaway: '격일제 근무 형태라도 1일 8시간 초과분은 별도 연장근로수당 산정 트랙이 열리는 사례가 있어, 출퇴근 기록·운행일지·임금협정서를 시간순 정리하면 가산수당 환수가 검토되는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '격일제는 한 달 12일만 일하니까 야간수당 안 주는 게 맞다는데요?',
        answer:
          '<strong>야간(22~06시) 가산수당은 근로일수와 무관하게 해당 시간 근로 사실 자체로 발생하는 영역입니다(근로기준법 제56조 제3항).</strong> 5인 이상 사업장이면 야간 가산수당은 일률 적용 영역.',
      },
      {
        question: '운행일지가 없는데 시간 입증이 가능한가요?',
        answer:
          '<strong>가능 영역입니다.</strong> 동료 진술서·카카오톡 메시지·CCTV·태코그래프 외에도 거래내역(현금영수증·카드)·승객수 기록 등이 보조 자료. 노동청 진정 단계에서 회사에 자료제출명령 가능 영역.',
      },
      {
        question: '5인 미만 사업장에서도 격일제 가산수당 받을 수 있나요?',
        answer:
          '<strong>5인 미만은 연장·휴일 가산수당이 적용 면제 영역(근로기준법 제11조 단서)입니다.</strong> 다만 야간(22~06시) 가산수당은 일부 적용 영역이 있고 통상임금(시간외 임금) 자체는 청구 가능. 사업장 규모 확인이 1단계.',
      },
      {
        question: '임금협정에 사인했는데 다툴 수 있나요?',
        answer:
          '<strong>강행규정 회피 정황 약정은 사인 여부와 무관하게 무효 정황입니다.</strong> 단체협약·취업규칙이라도 근로기준법 가산수당 규정에 미달하면 그 부분은 무효(근로기준법 제15조).',
      },
      {
        question: '청구하면 회사가 보복해서 일감 줄일까 걱정돼요',
        answer:
          '<strong>임금체불 진정·소송을 이유로 한 불이익 처분은 부당해고·차별 다툼 영역입니다.</strong> 노동위원회 부당해고 구제신청·노동청 진정 결합 트랙. 보복 정황 입증 자료(메시지·녹음) 별도 보존이 1단계.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '야간·연장 정확한 계산', href: '/guide/wage/wage-night-overtime-exact-calculation' },
      { label: '야간 50% 추가 가산', href: '/guide/wage/wage-night-work-50-percent-extra' },
      { label: '휴일근로 150% 산정', href: '/guide/wage/wage-holiday-work-150-percent-calculation' },
      { label: '포괄임금 야간 휴일 차액', href: '/guide/wage/wage-comprehensive-night-holiday-overtime-shortfall' },
      { label: '52시간 초과 연장 청구', href: '/guide/wage/wage-overtime-over-weekly-52' },
    ],
  },

  // ─── 2. wage / wage-employer-early-dismissal-shutdown-pay ───
  {
    domain: 'wage',
    slug: 'wage-employer-early-dismissal-shutdown-pay',
    keyword: '회사 사정 조기퇴근 휴업수당',
    questionKeyword: '회사 경영상 사정으로 작업이 중단돼 매주 2~3일은 12시 전에 \'그냥 퇴근하라\'고 합니다. 그 시간 임금은 어떻게 되나요? 휴업수당인가요 무노동무임금인가요?',
    ctaKeyword: '조기퇴근 휴업수당 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '회사 조기퇴근 휴업수당 4가지 청구 트랙 | 로앤가이드',
      description:
        '회사 경영상 사정으로 조기퇴근·작업중단 명령을 받아 임금이 줄어든 근로자가 휴업수당(평균임금 70%) + 무노동무임금 영역 구분 + 부당 휴업 다툼 4가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"제조업 공장에서 5년차 근무하는데, 올해 들어 \'경영상 사정\'으로 매주 화·목요일은 오전 11시쯤 \'오늘은 그만 들어가라\'는 조기퇴근 지시가 떨어집니다. 회사는 \'근로 안 했으니 그 시간 임금 없다\'고 하는데, 매주 8시간씩 사라져 월급이 30% 가까이 줄었어요. 휴업수당 70%라도 받아야 하는 것 아닌가요? 아니면 정말 무노동무임금인가요?" 사용자의 책임 있는 사유로 휴업하는 경우 사용자는 휴업기간 중 평균임금의 70% 이상의 수당을 지급해야 한다는 영역입니다(근로기준법 제46조). 사용자 일방의 \'조기퇴근 명령·작업중단 명령\'은 근로자의 자발적 결근이 아니므로 휴업 영역으로 평가될 정황이고, 임금채권 시효 3년 내라면 휴업수당 차액 청구 트랙이 검토됩니다.</p>',
    sections: [
      {
        title: 'Q. 조기퇴근·휴업수당 4가지 점검 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 휴업 사유·휴업수당 산정·평균임금 기준·5인 미만 적용 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 휴업 사유 (근로기준법 제46조)</strong> — \'사용자의 책임 있는 사유\'로 휴업한 경우 휴업수당 70% 이상 지급 의무 영역. 매출 감소·자재 부족·생산 조정 등 경영상 사정은 일반적으로 사용자 책임 영역.</li>\n<li><strong>② 휴업수당 산정 (평균임금 70% 또는 통상임금)</strong> — 평균임금의 70% 이상 또는 통상임금 중 사용자가 선택해 지급(제46조 제1항 단서). 평균임금 70%가 통상임금보다 높으면 통상임금이 하한.</li>\n<li><strong>③ 평균임금 기준</strong> — 휴업 직전 3개월 평균임금이 산정 기초(근로기준법 제2조 제2항·시행령 제2조). 휴업 누적 기간이 길어지면 평균임금이 줄어 휴업수당도 줄어드는 정황 → 산정 예외 검토 영역.</li>\n<li><strong>④ 5인 미만 적용</strong> — 5인 미만 사업장은 휴업수당 적용 면제 영역(근로기준법 제11조 단서). 다만 임금 약정 위반·통상의 임금 청구 트랙은 별도로 살아있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'근로 안 했으니 임금 없다\'는 무노동무임금은 근로자가 자발적으로 빠진 경우의 원칙. 사용자가 일방적으로 \'그만 들어가라\' 한 시간은 휴업 영역에 가까운 정황이고, 휴업수당 70% 이상이 산정 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 휴업수당 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 휴업 시간 산정 → 휴업수당 청구 → 노동청 진정 → 민사 청구 순서로 진행됩니다(고용노동부 임금체불 절차 기준).</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 조기퇴근 지시 메시지(카톡·문자)·작업중단 공지문·출퇴근 기록·생산일지·근태표 보존. 회사 측 \'경영상 사정\' 안내문도 핵심 자료.</li>\n<li><strong>2단계 — 휴업 시간 산정 (1주)</strong> — 일자별 정상 종업시간 vs 실제 종업시간 차이 합산. 월별 휴업 시간 누적표 작성. 평균임금 × 70%로 휴업수당 추정액 계산.</li>\n<li><strong>3단계 — 회사에 휴업수당 청구 (내용증명)</strong> — 휴업 시간·평균임금·휴업수당 차액 명세 제시. 회신 기한 14일. 통상임금 vs 평균임금 70% 비교 후 유리한 쪽 선택 청구.</li>\n<li><strong>4단계 — 노동청 임금체불 진정</strong> — 미응답 시 사업장 관할 고용노동지청 진정(labor.moel.go.kr). 휴업수당 미지급도 임금체불 영역(제46조 위반).</li>\n<li><strong>5단계 — 민사 청구 (소액심판·지급명령·본안)</strong> — 노동청 시정 한계 사안은 민사. 3,000만원 이하 소액심판, 청구액 무관 지급명령. 다수 사안은 집단 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">조기퇴근 휴업수당 4가지 트랙을 AI가 점검해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 휴업 자료 + 임금 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>조기퇴근·작업중단 지시 자료</strong> — 카톡·문자·메일·구두 녹음, 일자·시간·이유.</li>\n<li><strong>출퇴근 기록·근태표·생산일지</strong> — 정상 종업시간 vs 실제 종업시간.</li>\n<li><strong>최근 3개월 급여명세서</strong> — 평균임금 산정 기초.</li>\n<li><strong>근로계약서·취업규칙</strong> — 소정근로시간·통상임금 정의.</li>\n<li><strong>회사 경영 공지문</strong> — \'매출 감소\'·\'자재 부족\' 등 휴업 사유 공식 자료.</li>\n<li><strong>휴업수당 차액 산정표</strong> — 평균임금 70% × 휴업 시간 재계산 명세.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \'조기퇴근하라\'는 메시지 1건만 있어도 휴업 명령 정황의 결정적 자료가 되는 사례. 즉시 캡처·녹음·이메일 자체발송으로 보존이 1단계.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"근로 안 했으니 무노동무임금" 주장 반박</strong> — 사용자 일방 조기퇴근 지시는 자발적 결근 아닌 영역. 근로기준법 제46조 휴업수당 적용 정황.</li>\n<li><strong>"천재지변·불가항력이라 휴업수당 면제" 주장 반박</strong> — 천재지변·전쟁 등 사용자 외 사유만 면제 영역(노동위원회 승인 절차). 매출 감소·자재 부족은 사용자 영역의 경영 위험.</li>\n<li><strong>"근로자가 동의했다" 주장 반박</strong> — 동의서·합의서로 휴업수당 70% 미만 약정은 강행규정 위반 무효 영역(근로기준법 제15조).</li>\n<li><strong>3년 시효 주의</strong> — 임금채권 3년 시효. 시효 경과분은 청구 어려운 영역. 자료 보존·진정 시기가 결과 좌우.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 휴업수당·임금체불 무료 상담.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 임금체불 진정 트랙.</li>\n<li><strong>고용노동부 고객상담센터 1350</strong> — 휴업수당·휴업명령 일반 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 휴업기간 포함 계속근로 인정과 휴업수당의 임금성',
        summary:
          '대법원 2009다35040 사건(대법원, 2011.04.14 선고)에서 법원은 매년 경주개최기간 단위로 근로계약을 반복적으로 체결한 사안에서, 계절적 요인으로 경주개최기간 이외의 기간에 현실적으로 근로를 제공하지 않았더라도 이는 휴업기간 또는 대기기간으로 볼 여지가 많으므로, 그 기간을 포함한 전체 근로기간에 걸쳐 퇴직금 지급의 전제가 되는 근로자의 상근성·계속성·존속성 요건을 충족한다고 본 원심 판단을 수긍한 사례입니다. 사용자 사정에 의한 휴업기간이라도 근로관계 자체는 단절되지 않고, 그 기간 임금·휴업수당 산정 트랙이 살아있다는 점이 확인된 영역입니다.',
        takeaway: '사용자 일방의 휴업·조기퇴근 명령으로 임금이 줄어든 경우 단순 \'무노동무임금\'으로 끝나지 않고 휴업수당(평균임금 70% 이상) 산정 트랙이 열리는 사례가 있어, 조기퇴근 지시 자료·근태표를 정리하면 차액 청구가 검토되는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '휴업수당과 무노동무임금은 어떻게 구분하나요?',
        answer:
          '<strong>핵심은 \'누가 근로를 끊었나\'입니다.</strong> 사용자 일방 휴업 명령 → 휴업수당(70% 이상). 근로자 자발 결근·지각 → 무노동무임금. 회사가 \'그만 들어가라\'한 시간은 사용자 일방 휴업 영역.',
      },
      {
        question: '천재지변·코로나로 회사가 문 닫은 경우도 휴업수당 받나요?',
        answer:
          '<strong>천재지변·전쟁 등 사용자 외 불가항력은 면제 영역입니다(노동위원회 승인 절차).</strong> 다만 코로나 휴업은 정부 지원금(고용유지지원금) 별도 트랙. 회사가 휴업수당 미지급한 시기 중 정부 지원 받았다면 다툼 사안.',
      },
      {
        question: '휴업수당 받으면 실업급여 자격 영향 있나요?',
        answer:
          '<strong>휴업 자체는 이직이 아니라 실업급여 자격 영향 없는 영역입니다.</strong> 휴업이 장기화되어 자진퇴사한 경우 \'평균임금 30% 이상 감소 2개월\' 자격 조건 충족 시 자발이라도 인정 영역(고용보험법 시행규칙 제101조).',
      },
      {
        question: '5인 미만 사업장도 휴업수당 적용되나요?',
        answer:
          '<strong>5인 미만은 휴업수당(제46조) 적용 면제 영역입니다(근로기준법 제11조 단서).</strong> 다만 약정 임금·통상임금 자체 청구 트랙은 살아있고, 사용자 일방 휴업 명령에 대한 손해배상 다툼은 별개 영역.',
      },
      {
        question: '회사가 \'아예 일거리 없으니 무급휴직 동의서 써라\'고 해요',
        answer:
          '<strong>무급휴직 동의서는 강요·기망 정황이면 무효 다툼 영역입니다.</strong> 휴업수당(70%)을 0%로 줄이는 동의는 근로기준법 강행규정 회피 정황. 거부 후 노동청 진정 트랙 우선 검토.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '대기발령 평균임금 환원', href: '/guide/wage/wage-standby-order-average-wage-restoration' },
      { label: '회사 일방 임금삭감 통지', href: '/guide/wage/wage-salary-freeze-unilateral-notice' },
      { label: '임금체불 노동청 진정', href: '/guide/wage/wage-payslip-nondelivery-report' },
      { label: '5인 미만 권리 정리', href: '/guide/wage/wage-under5-employees-rights' },
      { label: '임금체불 시효 3년', href: '/guide/wage/unpaid-wage-3year-limitation' },
    ],
  },

  // ─── 3. retirement / retirement-db-to-dc-conversion-loss-shortfall ───
  {
    domain: 'retirement',
    slug: 'retirement-db-to-dc-conversion-loss-shortfall',
    keyword: 'DB DC 전환 손실 부담금 차액',
    questionKeyword: '회사가 작년에 확정급여형(DB)에서 확정기여형(DC)으로 퇴직연금을 전환했어요. 이번에 퇴직했는데 운용손실에 부담금 미달까지 겹쳐 예상보다 1,500만원 적게 받았습니다. 다툴 수 있나요?',
    ctaKeyword: 'DB DC 전환 손실 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: 'DB→DC 전환 퇴직연금 4가지 손실 청구 트랙 | 로앤가이드',
      description:
        '확정급여형(DB)에서 확정기여형(DC)으로 퇴직연금이 전환된 후 부담금 미달·운용손실로 퇴직급여가 줄었다면 부담금 차액 + 지연이자 + 임금 공제 4가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"15년 근속 회사가 작년에 \'근로자 동의 받았다\'며 확정급여형(DB) 퇴직연금을 확정기여형(DC)으로 일괄 전환했어요. 매년 \'연간 임금총액의 1/12\'을 부담금으로 납입해야 한다는데, 명세서를 보니 회사가 일부 항목(상여금·연차수당)을 빼고 부담금을 산정했습니다. 게다가 DC는 운용 손실까지 가입자 부담이라, 퇴직 시 받은 금액이 예상보다 1,500만원이나 줄었어요. 부담금 차액이라도 청구할 수 있나요?" 확정기여형(DC) 퇴직연금에서 사용자가 매년 납입한 부담금이 \'연간 임금총액의 12분의 1\'에 미치지 못하는 경우, 가입자는 퇴직일로부터 14일이 지난 후에는 사용자에게 직접 정당한 부담금액과 이미 납입된 부담금액의 차액 + 퇴직급여법에서 정한 지연이자를 청구할 수 있다는 영역입니다(대법원 2018다244877). 다만 평균임금 재산정 방식의 추가 퇴직금 청구는 원칙적으로 어려운 영역이라, 부담금 차액 트랙이 핵심입니다.</p>',
    sections: [
      {
        title: 'Q. DB→DC 전환 4가지 점검 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 전환 동의 절차·부담금 정합성·운용손실·지연이자 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 전환 동의 절차 (근로자퇴직급여 보장법 제4조 제3항)</strong> — DB→DC 전환은 근로자 과반수 동의 필수 영역. 동의 절차 하자(개별 동의서 미수령·기망 정황)면 전환 자체 효력 다툼 트랙.</li>\n<li><strong>② 부담금 정합성 (대법원 2018다244877)</strong> — 사용자 매년 납입 부담금이 \'연간 임금총액의 1/12\' 이상 영역. 상여금·연차수당·정기 가산수당이 임금총액에 포함됐는지 검토 핵심.</li>\n<li><strong>③ 운용손실 부담</strong> — DC는 운용 책임이 가입자에 있는 영역. 다만 사용자가 부담금 자체를 미달 납입한 부분은 운용과 별개로 차액 청구 가능. 운용 결과 자체는 가입자 영역.</li>\n<li><strong>④ 지연이자 (퇴직급여법 시행령 제5조)</strong> — 부담금 미납·미달분에 대해 연 10% 지연이자 트랙. 퇴직일로부터 14일 경과 후 즉시 청구 가능 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: DC 가입자는 \'운용 손실은 내 책임\'이라는 점 인정하되, 부담금 자체가 정당하게 납입됐는지 별도 검토 영역. 임금총액 산정 방식 다툼이 결과를 좌우하는 사례.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 부담금 차액 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 정당 부담금 산정 → 회사 청구 → 노동청 진정 → 민사 청구 순서로 진행됩니다(고용노동부 임금체불 절차 기준).</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — DB→DC 전환 동의서·취업규칙 변경 공고·매년 부담금 납입증명서·급여명세서·연간 원천징수영수증·DC 운용내역서 보존.</li>\n<li><strong>2단계 — 정당 부담금 산정 (1~2주)</strong> — 매년 임금총액(상여금·연차수당·정기 가산수당 포함) × 1/12 = 정당 부담금. 회사가 실제 납입한 금액과 비교해 차액 산정. 노무사·법률구조공단 132 자문 검토 가능.</li>\n<li><strong>3단계 — 회사에 부담금 차액 청구 (내용증명)</strong> — 정당 부담금 - 실제 납입액 + 지연이자 명세 제시. 회신 기한 14일. 퇴직일로부터 14일 후 청구 가능 영역.</li>\n<li><strong>4단계 — 노동청 임금체불 진정</strong> — 미응답 시 사업장 관할 고용노동지청 진정(labor.moel.go.kr). 부담금 미달은 형사처벌 결합 트랙(근로자퇴직급여 보장법 제44조).</li>\n<li><strong>5단계 — 민사 청구 (지급명령·본안)</strong> — 청구액 무관 지급명령, 3,000만원 이하 소액심판. 동의 절차 다툼 사안은 본안 트랙으로 진행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">DB→DC 전환 부담금 4가지 점검을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 전환 자료 + 부담금 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>DB→DC 전환 동의서·근로자 과반수 동의 자료</strong> — 동의 절차 적법성 입증.</li>\n<li><strong>취업규칙 변경 공고·노사협의회 회의록</strong> — 전환 절차 자료.</li>\n<li><strong>매년 부담금 납입 증명서 (DC 운용회사 발급)</strong> — 실제 납입액 확인 핵심.</li>\n<li><strong>최근 5년치 급여명세서</strong> — 연간 임금총액 산정 기초(상여금·연차수당 포함 여부).</li>\n<li><strong>연간 원천징수영수증</strong> — 객관 임금총액 입증.</li>\n<li><strong>DC 적립금 운용내역서</strong> — 운용손실 vs 부담금 미달 구분 자료.</li>\n<li><strong>부담금 차액 산정표</strong> — 정당 부담금 - 실제 납입액 + 지연이자 명세.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 \'정기 상여금·연차수당은 임금총액에서 빠진다\'고 안내한 사례가 많지만, 임금 정의에 해당하면 임금총액 포함 영역. 이 부분이 결과 차이의 핵심 자료입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"DC는 운용 손실 모두 가입자 책임" 주장 반박</strong> — 운용 결과는 가입자 영역이지만 부담금 자체 정합성은 별개 영역(2018다244877). 부담금 미달분은 사용자 책임.</li>\n<li><strong>"상여금은 임금 아니라 임금총액 제외" 주장 반박</strong> — 정기·계속·일률적 지급 상여금은 임금성 인정 정황. 임금총액 포함 다툼 트랙(평균임금 산정 법리 준용).</li>\n<li><strong>"전환 시 동의서 받았으니 차액 없다" 주장 반박</strong> — 동의 자체가 부담금 정합성 면제 사유 아닌 영역. 강행규정(퇴직급여법 제20조 부담금 의무) 회피 정황은 무효.</li>\n<li><strong>3년 시효 주의</strong> — 부담금 차액 청구권은 3년 시효. 시효 경과분은 청구 어려운 영역. 다만 부당이득 일부는 10년 시효 다툼.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 퇴직연금·부담금 무료 상담.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 퇴직연금 미지급 진정 트랙.</li>\n<li><strong>금융감독원 1332</strong> — DC 운용·수수료 분쟁 일반 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — DC 부담금 미달 시 차액·지연이자 청구',
        summary:
          '대법원 2018다244877 사건(대법원, 2022.03.17 선고)에서 법원은 확정기여형 퇴직연금제도가 설정된 사업 또는 사업장에서 사용자가 퇴직한 가입자에 대하여 가입기간 동안 매년 납입한 부담금이 연간 임금총액의 12분의 1에 미치지 못하는 경우, 가입자인 근로자는 특별한 사정이 없는 한 퇴직일로부터 14일이 지난 후에는 사용자에게 직접 정당한 부담금액과 이미 납입된 부담금액의 차액 및 그에 대한 퇴직급여법에서 정한 지연이자를 지급할 것을 청구할 수 있고, 사용자가 확정기여형 퇴직연금의 부담금을 납입하면서 동액 상당을 근로자에게 지급하여야 할 임금에서 공제한 경우에도 해당 확정기여형 퇴직연금제도의 설정이나 부담금 납입행위 자체가 무효가 된다고 볼 수는 없다고 판시했습니다.',
        takeaway: 'DC 가입자는 부담금 자체가 \'연간 임금총액의 1/12\'에 미달한 경우 차액 + 지연이자 청구 트랙이 열리는 사례가 있어, 매년 부담금 납입증명서·급여명세서·임금총액 자료를 정리하면 차액 환수가 검토되는 영역입니다.',
      },
    ],
    faq: [
      {
        question: 'DB→DC 전환 시 동의 안 했는데도 일괄 전환됐어요',
        answer:
          '<strong>근로자 과반수 동의 없는 일괄 전환은 무효 정황입니다(퇴직급여법 제4조 제3항).</strong> 다만 \'개별 동의서 받았다\'고 회사가 주장하면 동의 절차 하자 다툼 트랙. 동의서 자필 서명·날짜 확인 1단계.',
      },
      {
        question: '운용손실로 줄어든 부분은 청구 못 하나요?',
        answer:
          '<strong>운용손실은 가입자 영역이라 직접 청구 어려운 영역입니다.</strong> 다만 운용회사가 설명의무·적합성 원칙을 위반한 정황이면 운용회사 상대 손해배상 트랙 별도 영역(자본시장법).',
      },
      {
        question: 'DB 시절 적립금이 DC로 전환될 때 적게 환산됐어요',
        answer:
          '<strong>DB→DC 전환 시 \'전환일 기준 평균임금 × 근속연수 × 30일\' 이상 환산 영역(퇴직급여법 시행령 제13조).</strong> 환산금액 자체가 적으면 별도 차액 다툼 트랙. 회사 발급 환산내역서 + 자체 산정 비교 핵심.',
      },
      {
        question: '평균임금 재산정으로 추가 퇴직금 청구는 안 되나요?',
        answer:
          '<strong>2018다244877은 평균임금 재산정 방식 추가 퇴직금 청구는 부정합니다.</strong> DC는 부담금 차액 + 지연이자 트랙이 본 절차. 다만 부담금에 포함되어야 할 임금 항목 다툼은 결과적으로 평균임금 다툼과 유사 효과 영역.',
      },
      {
        question: '5인 미만 사업장도 DC 청구 가능한가요?',
        answer:
          '<strong>2010년 이후 1인 이상 모든 사업장 적용 영역입니다(퇴직급여법 제3조).</strong> 5인 미만은 가산수당은 면제지만 퇴직급여 자체는 일률 적용. DC 부담금 차액 청구 트랙도 동일.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직연금 DC 부담금 미달', href: '/guide/retirement/retirement-dc-shortfall-claim' },
      { label: '연봉 퇴직금 포함 무효', href: '/guide/retirement/retirement-annual-salary-includes-severance-invalid' },
      { label: '평균임금 산정 분쟁', href: '/guide/retirement/retirement-average-wage-dispute' },
      { label: '퇴직금 14일 지급 규칙', href: '/guide/retirement/retirement-pay-14day-rule-detail' },
      { label: '퇴직금 노동청 vs 민사', href: '/guide/retirement/retirement-pay-labor-report-vs-civil-claim' },
    ],
  },

  // ─── 4. retirement / retirement-honorary-quit-extra-claim-waiver-invalid ───
  {
    domain: 'retirement',
    slug: 'retirement-honorary-quit-extra-claim-waiver-invalid',
    keyword: '명예퇴직 합의 후 별도 퇴직금 청구',
    questionKeyword: '명예퇴직 합의서에 \'일체 청구권을 포기한다\'는 부제소 조항이 있어요. 그래도 누락된 퇴직금·연차수당은 별도로 청구 가능한가요?',
    ctaKeyword: '명예퇴직 합의 후 별도 청구',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '명예퇴직 합의 후 별도 청구 4가지 트랙 | 로앤가이드',
      description:
        '명예퇴직·희망퇴직 합의서에 부제소합의·일체 청구권 포기 조항이 있어도 사전 포기 무효 영역에 해당하는 항목은 별도 청구 가능합니다. 4가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"22년 근속 후 명예퇴직 위로금 1억원에 합의해 퇴사했어요. 그런데 정산서를 보니 연차수당 미지급 280만원, 정기 상여금 평균임금 미산입으로 누락된 퇴직금 차액 720만원이 있더라고요. 회사에 문의하니 \'합의서 제5조에 \'근로관계 종료에 따른 일체의 청구권을 포기한다\'고 사인하셨으니 끝났다\'고 합니다. 정말 청구 못 하는 건가요?" 퇴직금은 사용자가 일정기간 계속근로하고 퇴직하는 근로자에게 그 계속근로에 대한 대가로서 지급하는 후불적 임금의 성질이고, 최종 퇴직 시 발생하는 퇴직금청구권을 \'사전\'에 포기하거나 사전에 그에 관한 민사상 소송을 제기하지 않겠다는 부제소특약은 강행법규 위반으로 무효라는 영역입니다(대법원 97다49732). 다만 \'사후\' 합의(이미 발생한 퇴직금에 대한 합의)는 효력 다툼이 까다로운 영역이라 합의 시점·내용·자유의사 정황 검토가 핵심입니다.</p>',
    sections: [
      {
        title: 'Q. 명예퇴직 합의 후 별도 청구 4가지 점검 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 사전·사후 구분·강행규정 위반 여부·정확한 인식·자유의사 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사전 포기 vs 사후 합의 (대법원 97다49732)</strong> — 퇴직 \'전\' 포기 약정은 무효(강행법규 위반). 퇴직 \'후\' 합의는 원칙 유효이나 실질 위법·기망 정황이면 다툼 가능 영역.</li>\n<li><strong>② 강행규정 위반 여부</strong> — 퇴직금 자체·법정 가산수당·실업급여 자격 등 근로기준법·퇴직급여법 강행규정상 권리는 사전 포기 무효 영역. 합의 시점이 \'퇴직 후\'라도 그 일부는 강행규정 보호.</li>\n<li><strong>③ 정확한 인식·정보 제공</strong> — 회사가 \'누락된 퇴직금·연차수당 잔액\'을 명시하지 않은 채 \'일체 청구권 포기\' 사인을 받은 사안은 정확한 인식 부재로 합의 효력 다툼 트랙 검토.</li>\n<li><strong>④ 자유의사 정황</strong> — 명예퇴직 거부 시 부당전직·해고 위협 등 강요 정황이 있으면 자유의사 결여 다툼. 합의서 사인 직전·직후 메시지·녹음·증인 자료가 핵심.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'사인했으니 끝\'은 회사 측 일률 주장. 강행규정 영역(퇴직금·연차수당·임금)은 사전 포기 무효 영역이고, 사후 합의도 정확한 인식·자유의사 결여 정황이면 효력 다툼 트랙이 살아있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 별도 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 누락 항목 산정 → 합의 효력 분석 → 회사 청구 → 노동청·민사 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 명예퇴직 합의서·정산서·내부 인사 공지·합의 직전 메시지·녹음·근로계약서·취업규칙·최근 3년치 급여명세서 보존.</li>\n<li><strong>2단계 — 누락 항목 산정 (1~2주)</strong> — 정상 퇴직금(평균임금 × 30일 × 근속연수) - 회사 지급액 = 누락 차액. 연차수당·정기 가산수당 미산입 분 별도 산정. 노무사·132 자문 검토.</li>\n<li><strong>3단계 — 합의 효력 분석</strong> — 부제소 조항이 \'사전 포기\' 영역인지, 강행규정 보호 항목까지 포함되는지, 정확한 인식·자유의사 정황 자료 정리. 합의 시점·서명 정황 메모.</li>\n<li><strong>4단계 — 회사에 별도 청구 (내용증명)</strong> — 누락 항목 + 합의 효력 부정 정황 명시. 회신 기한 14일. 미응답 시 노동청·민사 분기.</li>\n<li><strong>5단계 — 노동청 진정 + 민사 본안</strong> — 노동청은 부제소 합의 다툼에 한계가 있어 본안 민사가 일반적인 영역. 변호사 선임 검토. 청구액 3,000만원 이하면 소액심판 트랙.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">명예퇴직 합의 후 별도 청구 4가지 트랙을 AI가 점검해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 합의 자료 + 누락 산정 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>명예퇴직 합의서·부제소 조항 원문</strong> — 사전 포기 vs 사후 합의 구분 자료.</li>\n<li><strong>퇴직 정산서·이체 내역</strong> — 회사 지급 항목·금액.</li>\n<li><strong>최근 3~5년치 급여명세서·연간 원천징수영수증</strong> — 정상 평균임금·임금총액 산정 기초.</li>\n<li><strong>근로계약서·취업규칙·임금협정서</strong> — 정기 상여금·가산수당·연차수당 정의.</li>\n<li><strong>합의 직전 메시지·이메일·녹음</strong> — 자유의사·정확한 인식 정황 자료.</li>\n<li><strong>인사위원회 회의록·명예퇴직 안내문</strong> — 강요 정황 자료.</li>\n<li><strong>누락 항목 산정표</strong> — 정상 산정 - 회사 지급액 + 지연이자 명세.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 합의서 사인 직전·직후 메신저 대화에서 회사 인사담당자가 \'이대로 사인하시면 빨리 처리됩니다\' 식의 정확한 인식 차단 발언이 있으면 합의 효력 다툼의 결정적 자료. 캡처·녹음 즉시 보존이 1단계.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"부제소 조항 사인했으니 끝" 주장 반박</strong> — 사전 포기·강행규정 위반 부분은 무효 영역(97다49732). 사후 합의도 정확한 인식·자유의사 결여 정황이면 다툼 트랙.</li>\n<li><strong>"위로금 1억 받았으니 충분" 주장 반박</strong> — 위로금은 명예퇴직금 영역, 법정 퇴직금·연차수당·미지급 임금은 별개 항목. 명목 구분 정리가 결과 좌우.</li>\n<li><strong>"이미 정산서 사인했다" 주장 반박</strong> — 정산서 자체는 사실관계 확인 정황이지 권리 포기 아닌 영역. 누락 항목이 있다면 별도 청구 트랙 살아있음.</li>\n<li><strong>3년 시효 주의</strong> — 임금·퇴직금 청구권은 퇴직일로부터 3년. 시효 경과분은 청구 어려운 영역. 합의 효력 다툼은 본안에서 시효 항변과 결합.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 명예퇴직·합의서 효력 무료 상담.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 임금체불 진정 트랙.</li>\n<li><strong>한국공인노무사회 02-6293-1500</strong> — 명예퇴직 사건 노무사 자문.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직금 청구권 사전 포기·부제소특약의 무효',
        summary:
          '대법원 97다49732 사건(대법원, 1998.03.27 선고)에서 법원은 퇴직금은 사용자가 일정기간을 계속근로하고 퇴직하는 근로자에게 그 계속근로에 대한 대가로서 지급하는 후불적 임금의 성질을 띤 금원으로서 구체적인 퇴직금청구권은 계속근로가 끝나는 퇴직이라는 사실을 요건으로 하여 발생되는 것이라고 하면서, 최종 퇴직 시 발생하는 퇴직금청구권을 사전에 포기하거나 사전에 그에 관한 민사상 소송을 제기하지 않겠다는 부제소특약을 하는 것은 강행법규인 근로기준법에 위반되어 무효라고 판시했습니다. \'합의서에 사인했으니 끝\' 이라는 회사 일률 주장이 강행규정 영역에서는 통하지 않는 사례가 정리됐습니다.',
        takeaway: '명예퇴직·희망퇴직 합의서에 부제소 조항이 있어도 강행규정(퇴직금·연차수당·임금) 영역의 사전 포기는 무효 영역이라 별도 청구 트랙이 열리는 사례가 있어, 합의서·정산서·급여명세서를 정리하면 차액 환수가 검토되는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '합의서에 \'법정 수당 포함\'이라고 명시돼 있어요',
        answer:
          '<strong>명시 자체가 효력 보장은 아닙니다.</strong> 회사가 누락 항목을 정확히 알리지 않은 채 사인을 받은 정황이면 정확한 인식 부재 다툼. 누락 자료가 명백하면 별도 청구 트랙 살아있는 영역.',
      },
      {
        question: '명예퇴직금 1억은 환수해야 하나요?',
        answer:
          '<strong>위로금은 별개 영역으로 환수 의무 없는 사례가 일반적입니다.</strong> 다만 회사가 \'합의 깨졌으니 위로금 환수\' 주장 시 위로금 성격(은혜급부 vs 정산성)에 따른 다툼 트랙. 합의서 문언 검토 핵심.',
      },
      {
        question: '회사가 합의 후 \'추가 청구하면 명예훼손 손배 청구한다\'고 합니다',
        answer:
          '<strong>정당한 권리 행사는 명예훼손·손배 사유가 되지 않는 영역입니다.</strong> 합의 효력 자체를 본안에서 다투는 것은 적법한 권리. 회사 측 위협 메시지는 보복 정황 자료로 보존 1단계.',
      },
      {
        question: '연차수당은 사전 포기가 가능한 영역 아닌가요?',
        answer:
          '<strong>발생한 연차수당은 임금 영역으로 사전 포기 무효입니다(근로기준법 제43조 임금 전액지급 원칙).</strong> 합의 시점에 이미 발생한 연차수당 잔액은 강행규정 보호 영역.',
      },
      {
        question: '명예퇴직 거부했는데 회사가 부당전직 시켰어요',
        answer:
          '<strong>부당전직 구제신청 트랙(노동위원회) + 합의 강요 정황 다툼이 결합되는 영역입니다.</strong> 명예퇴직 강요 → 부당전직 → 결국 합의 사인이라면 자유의사 결여 다툼 자료가 결합되는 사례.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '명예퇴직 부제소 조항 효력', href: '/guide/retirement/retirement-no-suit-clause-validity' },
      { label: '퇴직금 사전 포기 약정 무효', href: '/guide/retirement/retirement-pre-waiver-invalid' },
      { label: '평균임금 상여 연차 다툼', href: '/guide/retirement/retirement-average-wage-bonus-dispute' },
      { label: '퇴직금 14일 지급 규칙', href: '/guide/retirement/retirement-pay-14day-rule-detail' },
      { label: '퇴직금 노동청 vs 민사', href: '/guide/retirement/retirement-pay-labor-report-vs-civil-claim' },
    ],
  },

  // ─── 5. unemployment / unemployment-employer-no-closure-report-de-facto-shutdown ───
  {
    domain: 'unemployment',
    slug: 'unemployment-employer-no-closure-report-de-facto-shutdown',
    keyword: '폐업 신고 안 한 사업주 사실상 폐업 입증',
    questionKeyword: '회사가 사실상 폐업 상태인데 사업주가 폐업 신고도, 고용보험 자격상실 신고도 안 해줘서 실업급여 신청이 막혔어요. 어떻게 해야 하나요?',
    ctaKeyword: '폐업 미신고 실업급여 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '폐업 미신고 사업주 — 실업급여 5단계 직권 처리 트랙 | 로앤가이드',
      description:
        '사업주가 폐업·고용보험 자격상실 신고를 미루어 실업급여 신청이 막혔다면 사실상 폐업 입증 + 직권 자격상실 + 실업급여 신청 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3년 다닌 회사가 작년 12월부터 사업장 문 닫고, 사업주는 잠적, 임금도 두 달 밀린 상태예요. 다른 직원들도 다 흩어졌습니다. 고용센터에 실업급여 신청하려니 \'사업주가 이직확인서·자격상실 신고를 안 했다\'고 진행이 막혀요. 사업자등록은 그대로 살아있고, 사업주는 연락 두절. 폐업 신고가 안 됐으니 \'재직 중\'으로 잡힌 상태입니다. 이런 경우 실업급여 받을 수 있나요?" 형식상 사업자등록이 있어도 사실상 폐업상태에 있어서 실질적으로 사업을 영위하지 않아 전혀 소득이 없었던 경우라면 사업자등록사실을 신고하지 않았다고 하더라도 \'허위 기타 부정한 방법\'으로 실업급여를 받은 경우에 해당하지 않는다는 영역입니다(대법원 2002두7494). 즉 사업주가 폐업 신고를 안 해도 사실상 폐업 입증 + 근로복지공단 직권 자격상실 처리 트랙이 살아있는 영역이에요.</p>',
    sections: [
      {
        title: 'Q. 폐업 미신고 사업주 5가지 점검 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실상 폐업 입증·직권 자격상실·체불임금 결합·정당 이직사유·심사청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실상 폐업 입증 (대법원 2002두7494)</strong> — 사업장 문 닫음·사업주 잠적·매출 0·직원 모두 이탈 등 실질 영위 부재 정황 입증. 사업자등록 존속 자체는 결정적 요소 아닌 영역.</li>\n<li><strong>② 직권 자격상실 (고용보험법 제15조 + 시행령 제7조)</strong> — 사업주 신고 부재 시 근로복지공단·근로자 본인이 \'고용보험 피보험자격 확인청구\' 트랙으로 직권 자격상실 처리 가능 영역.</li>\n<li><strong>③ 체불임금 결합 (정당 이직사유)</strong> — 임금체불 2개월 이상이면 자진퇴사도 정당 이직사유 영역(고용보험법 시행규칙 제101조 별표2 제1호). 폐업 정황 + 체불 자료 결합이 강력.</li>\n<li><strong>④ 정당 이직사유 인정</strong> — 사업장 사실상 폐업으로 근로 제공 불가 정황은 \'사업장 휴업·폐업\'에 준하는 정당 이직사유 영역(별표2 제2호 사업장 폐업).</li>\n<li><strong>⑤ 심사청구 트랙</strong> — 1차 처분이 불인정돼도 90일 이내 고용보험심사위원회 심사청구 트랙. 재심사·행정소송도 별개 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사업주가 \'협조 안 해도\' 실업급여 길이 닫히지 않는 영역. 근로복지공단 직권 자격상실 + 체불임금 결합 트랙이 핵심 우회로입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 폐업 미신고 실업급여 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 직권 자격상실 신청 → 체불임금 진정 → 실업급여 신청 → 심사청구 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 사업장 문 닫힌 사진·CCTV·동료 진술서·사업주 잠적 정황·최근 3개월 급여명세서·근로계약서·체불임금 산정표 보존.</li>\n<li><strong>2단계 — 근로복지공단 직권 자격상실 신청 (즉시)</strong> — \'고용보험 피보험자격 확인청구서\' 제출(고용보험·산재보험 토탈서비스 또는 관할 지사 방문). 사실상 폐업 정황 자료 첨부.</li>\n<li><strong>3단계 — 노동청 임금체불 진정</strong> — 사업장 관할 고용노동지청 진정(labor.moel.go.kr). 임금체불 2개월 이상이면 정당 이직사유 자료 결합. 도산대지급금 트랙 별도 검토.</li>\n<li><strong>4단계 — 고용센터 실업급여 신청</strong> — 워크넷 등록 + 거주지 관할 고용센터 방문. 직권 자격상실 결과 + 체불임금 진정 결과 + 사실상 폐업 정황 자료 첨부.</li>\n<li><strong>5단계 — 거절 시 심사청구 (90일 이내)</strong> — 고용보험심사위원회(www.ei.go.kr) 심사청구. 2002두7494 등 인용 사례 + 사실상 폐업 자료 보강. 재심사·행정소송 트랙도 열려 있음.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">폐업 미신고 사업주 5단계 점검을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 폐업 정황 자료 + 자격 입증 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>사업장 문 닫힌 현장 사진·동영상·CCTV</strong> — 사실상 폐업 핵심 자료.</li>\n<li><strong>동료 진술서·연락 두절 메시지·이메일</strong> — 사업주 잠적·전 직원 이탈 정황.</li>\n<li><strong>최근 3개월 급여명세서·체불임금 산정표</strong> — 임금체불 + 정당 이직사유 결합 자료.</li>\n<li><strong>근로계약서·재직증명서</strong> — 피보험자격 입증 기초.</li>\n<li><strong>4대보험 가입내역·고용보험 피보험자 자격득실 확인서</strong> — 자격 시작·종료 시점 입증.</li>\n<li><strong>매출 부재 정황 자료 (사업장 폐쇄 공지·거래처 단절)</strong> — 영위 부재 입증.</li>\n<li><strong>피보험자격 확인청구서</strong> — 직권 자격상실 처리용.</li>\n<li><strong>구직활동 계획서·워크넷 구직 등록 확인서</strong> — 실업급여 자격 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사업장 정문 사진 + 매월 폐쇄 상태 추적 사진(시간 경과 입증)이 사실상 폐업 결정적 자료. 동료 다수 사안이라면 \'전 직원 진술서\' 양식 통일이 효율적입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용센터·근로복지공단 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"사업자등록 살아있어 폐업 아니다" 주장 반박</strong> — 사업자등록 존속 ≠ 사실상 영위. 사실상 폐업 정황 입증으로 자격상실 처리 가능 영역(2002두7494).</li>\n<li><strong>"이직확인서 없으면 절차 진행 불가" 주장 반박</strong> — 사업주 미협조 시 근로복지공단 직권 자격상실 처리 트랙 살아있음. 고용보험 토탈서비스 또는 지사 방문 1단계.</li>\n<li><strong>"자진퇴사 처리한다" 주장 반박</strong> — 사실상 폐업 + 임금체불 결합 정황이면 정당 이직사유 영역. 고용보험법 시행규칙 별표2 제1호·제2호 적용.</li>\n<li><strong>이직일 자료 부재 시</strong> — 마지막 출근일·임금 미지급 시점·사업장 폐쇄 시점 등으로 이직일 추정 가능 영역. 근로복지공단 조사 단계에서 보완.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>고용노동부 고객상담센터 1350</strong> — 폐업 미신고·이직확인서 무료 상담.</li>\n<li><strong>고용보험 (ei.go.kr)</strong> — 피보험자격 확인청구·심사청구 안내.</li>\n<li><strong>대한법률구조공단 132</strong> — 체불임금·도산대지급금 무료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실상 폐업상태 사업자등록 미신고와 부정수급',
        summary:
          '대법원 2002두7494 사건(대법원, 2003.09.23 선고)에서 법원은 구 고용보험법 제48조 제1항 소정의 \'허위 기타 부정한 방법\'이라고 함은 일반적으로 수급자격 없는 사람이 수급자격을 가장하거나 취업사실 또는 소득의 발생사실 등을 감추는 일체의 부정행위를 말하는 것으로서 근로소득이 있는 자가 그 신고의무를 불이행한 경우에도 이에 해당한다고 볼 것이나, 구직급여를 수급받은 자가 형식상 자신의 명의로 된 사업자등록이 있었다고 하더라도 사실상 폐업상태에 있어서 실질적으로 사업을 영위하지 않아 전혀 소득이 없었던 경우에는 사업자등록사실을 신고하지 않았다고 하더라도 이를 \'허위 기타 부정한 방법\'으로 실업급여를 받은 경우에 해당한다고 볼 수 없다고 판시했습니다.',
        takeaway: '사업자등록이 형식상 살아있어도 사실상 폐업상태라면 실업급여 자격 다툼에서 결정적 요소가 되지 않는 사례가 있어, 사업장 폐쇄 사진·동료 진술서·체불임금 자료를 정리하면 직권 자격상실 + 실업급여 신청 트랙이 검토되는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '사업주가 잠적해서 임금체불 진정만으로도 인정될까요?',
        answer:
          '<strong>임금체불 2개월 이상이면 자진퇴사도 정당 이직사유 영역입니다(고용보험법 시행규칙 별표2 제1호).</strong> 사실상 폐업 정황 결합 시 인정 강도가 높아지는 사례. 노동청 진정 결과(체불임금 확인서) 첨부가 핵심.',
      },
      {
        question: '직권 자격상실 처리에 얼마나 걸리나요?',
        answer:
          '<strong>피보험자격 확인청구는 통상 1~2개월 처리 영역입니다.</strong> 근로복지공단 조사 단계에서 사실관계 확인 + 사업주 통지 절차. 자료 충실하면 빠른 처리 사례.',
      },
      {
        question: '도산대지급금과 실업급여 동시 받을 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 도산대지급금은 임금채권보장법 영역, 실업급여는 고용보험법 영역으로 별개 트랙. 자료 중복 활용 시 효율적인 사례. 노동청 임금체불 진정이 도산대지급금의 1단계.',
      },
      {
        question: '사업주가 \'폐업 안 했으니 자진퇴사로 처리하라\'고 했어요',
        answer:
          '<strong>사업주 자진퇴사 처리는 직접 효력 없는 영역입니다.</strong> 근로복지공단 조사·고용센터 판정으로 이직사유가 결정. 사실상 폐업 + 체불 자료가 자진퇴사 처리를 뒤집는 사례.',
      },
      {
        question: '이미 자진퇴사 처리됐는데 정정 가능한가요?',
        answer:
          '<strong>이직사유 정정 청구 트랙이 열려 있는 영역입니다.</strong> 근로복지공단 \'이직사유 정정 신고\' + 고용보험심사위원회 심사청구. 사실상 폐업 정황 자료 + 처분 통지일 90일 이내 청구 1단계.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '사업장 폐업 실업급여', href: '/guide/unemployment/unemployment-workplace-closure' },
      { label: '사업주 고용보험 미가입', href: '/guide/unemployment/unemployment-employer-no-insurance' },
      { label: '이직확인서 미발급 대응', href: '/guide/unemployment/employer-wont-send-employment-verification' },
      { label: '임금체불 자진퇴사 자격', href: '/guide/unemployment/unemployment-wage-unpaid-2months-quit' },
      { label: '실업급여 거절 심사청구', href: '/guide/unemployment/unemployment-benefit-rejection-appeal-procedure' },
    ],
  },
];
