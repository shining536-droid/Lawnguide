import { SpokePage } from '../spoke-pages';

// batch53 wage+unemp+retire 7개 (2026-05-03)
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 정기상여금이 통상임금 산정에서 누락돼 연장·야간·휴일수당이 적게 계산된 근로자가 정기·일률·고정성 판단 기준과 통상임금 재산정 차액 청구 절차를 정리하도록 돕는 페이지다.
// 2. 이 페이지는 근로계약상 고정연장근로수당(예: 월 30시간분)을 받지만 실제 연장근로가 그보다 많거나 야간·휴일근로가 별도 발생한 근로자가 시간 산정 입증으로 차액 가산수당 청구 가능성을 검토하도록 돕는 페이지다.
// 3. 이 페이지는 퇴직 후 미지급 가산수당·연차수당·통상임금 차액을 14일·3년 시효 안에서 한 번에 묶어 청구하려는 퇴직자가 노동청 진정 + 민사 트랙 + 지연이자 청구를 정리하도록 돕는 페이지다.
// 4. 이 페이지는 회사가 권고사직을 제안하면서 사직서 양식만 자진퇴사로 받아 실업급여 거절을 받게 된 근로자가 권고사직 입증 자료와 자진퇴사 경계 다툼 트랙(이의신청·재심사)을 정리하도록 돕는 페이지다.
// 5. 이 페이지는 부정수급 환수·반환명령 통보를 받은 수급자가 고의·과실 여부 다툼·이의신청·심사·재심사 경로 + 분할납부·면제 가능성을 검토하도록 돕는 페이지다.
// 6. 이 페이지는 정기상여금·연차수당이 평균임금에 산입돼야 하는데 회사가 평균임금에서 빼고 퇴직금을 적게 산정한 퇴직자가 평균임금 재산정 차액 + 시효 3년 청구 절차를 정리하도록 돕는 페이지다.
// 7. 이 페이지는 사용자가 폐업·도산·임금체불 후 잠적해 퇴직금·임금을 받지 못한 근로자가 도산대지급금(구 체당금) 신청 자격·금액 한도·신청 절차를 정리해 우선 회수를 검토하도록 돕는 페이지다.

export const spokesBatch53WageUnempRetire: SpokePage[] = [
  // ─── 1. wage / wage-ordinary-wage-bonus-included ───
  {
    domain: 'wage',
    slug: 'wage-ordinary-wage-bonus-included',
    keyword: '정기상여 통상임금 산입',
    questionKeyword: '정기상여금이 통상임금에 들어가야 연장수당 차액 청구할 수 있나요?',
    ctaKeyword: '정기상여 통상임금 재산정 차액 청구 가능성 확인',
    type: '정리형',
    perspective: 'victim',
    meta: {
      title: '정기상여 통상임금 산입 — 재산정 차액 청구 5단계 | 로앤가이드',
      description:
        '정기상여금이 통상임금에서 빠져 연장·야간·휴일수당이 적게 산정됐다면 재산정 차액 청구가 가능합니다. 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"매년 짝수달에 100% 정기상여가 나오는데 회사가 통상임금에서 빼고 연장수당을 계산해요. 차액 청구 가능한가요?" 정기·일률·고정성을 모두 갖춘 정기상여금은 통상임금에 해당해, 연장·야간·휴일수당과 연차수당까지 함께 재산정해야 한다는 것이 대법원 일관 입장입니다(대법원 2022다257238 취지에서도 통상임금 판단의 기본 틀 확인). 시효 3년 안에서 차액 청구를 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: '정기상여 통상임금성 — 산입 가능성이 강한 4가지 사정',
        content:
          '<p><strong style="color:#1e3a5f">정기상여가 통상임금에 산입되면 연장·야간·휴일수당과 연차수당까지 단가가 올라갑니다.</strong></p>\n<ul>\n<li><strong>① 정기성</strong> — 매월·격월·분기 등 일정 주기로 반복 지급된 경우(예: 짝수달 100% 상여). 통상 1년 단위 반복 지급도 정기성 인정 사례 다수.</li>\n<li><strong>② 일률성</strong> — 일정 직급·근속 요건을 충족한 모든 근로자에게 동일 기준으로 지급. 특정 개인 평가가 아닌 객관 요건이면 일률성 강화.</li>\n<li><strong>③ 고정성</strong> — 추가 조건 없이 소정근로 제공만으로 지급액이 사전에 확정되는 성질. 근무일수 조건이 있어도 소정근로일수 안에서 충족 가능하면 고정성 부정되지 않음(대법원 2022다257238 취지).</li>\n<li><strong>④ 단체협약·취업규칙·임금협정 명시</strong> — 사전 산정 기준·지급 시기·금액이 문서화돼 있으면 통상임금 인정 강화.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "성과상여"·"명절상여"·"PI"·"PS" 등 명칭이 달라도 정기·일률·고정성을 모두 갖춘 경우라면 통상임금에 산입을 다툴 여지가 있습니다.</blockquote>',
      },
      {
        title: '경영성과·재량 vs 통상임금 — 산입 부정될 수 있는 사정',
        content:
          '<p><strong style="color:#1e3a5f">반대로 다음 사정이 강하면 통상임금 산입이 부정될 가능성이 있습니다.</strong></p>\n<ul>\n<li><strong>당기순이익·경영성과 종속</strong> — 회사 영업이익·EVA 등에 따라 지급률이 큰 폭으로 변동되는 경우(대법원 2022다255454 취지). 경영성과 분배로 평가될 가능성.</li>\n<li><strong>지급 여부 자체가 회사 재량</strong> — 단체협약·취업규칙에 회사가 일방 결정한다고 명시된 단발성 상여.</li>\n<li><strong>추가 자격요건 충족 시에만 지급</strong> — 소정근로 외 별도 자격(예: 무사고 1년)을 충족해야 지급되는 경우 소정근로 대가성 결여.</li>\n<li><strong>관행 미확립</strong> — 1~2회 임의 지급으로 정기성·계속성이 없는 경우.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인의 정기상여가 위 두 표 중 어느 쪽에 가까운지 자료로 정리하면 통상임금 산입 가능성 판단이 명확해집니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 통상임금 재산정 차액 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 + 민사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정기상여 지급 자료 확보</strong> (즉시) — 단체협약·취업규칙·임금협정·최근 3년 급여명세서. 정기성·일률성·고정성 입증 자료 정리.</li>\n<li><strong>2단계 — 통상임금 재산정 + 차액 산출</strong> (즉시) — 정기상여를 통상임금 시급으로 환산해 연장·야간·휴일수당, 연차수당 차액 산출. 시효 3년치까지.</li>\n<li><strong>3단계 — 회사 정정 요청</strong> (선택) — 인사팀에 서면으로 통상임금 산입 + 차액 정산 요청. 14일 회신 없으면 다음 단계로.</li>\n<li><strong>4단계 — 노동청 진정</strong> (3년 이내) — 노동포털(labor.moel.go.kr) 또는 관할 지방고용노동지청. 처리기간 25일(연장 가능). 시정지시 미이행 시 형사 송치(3년 이하 징역 또는 3,000만 원 이하 벌금).</li>\n<li><strong>5단계 — 민사 임금 청구 (필요 시)</strong> — 차액 + 연 20% 지연이자(퇴직자) + 연차수당 재산정까지 병합. 3,000만 원 이하면 소액심판으로 통상 2~3개월 판결. 인원 다수면 집단소송 형태도 검토 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 정기상여 통상임금 산입 차액, AI로 가능성을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">지급 주기·산정 기준·근무일수 조건을 입력하면 통상임금 산입 판단과 차액 청구 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 / ⚠️ 다툼 포인트 / 🏛️ 신청·상담 경로',
        content:
          '<h4>📋 준비서류 체크리스트</h4>\n<ul>\n<li>근로계약서·단체협약·취업규칙·임금협정</li>\n<li>최근 3년 급여명세서 (정기상여 항목 추적)</li>\n<li>회사의 정기상여 지급 공지·운영규정</li>\n<li>본인 연장·야간·휴일근로시간 기록 (출퇴근 기록·근무표)</li>\n<li>이직확인서·퇴직증명서 (퇴직자의 경우)</li>\n</ul>\n<h4>⚠️ 다툼 포인트 (회사가 자주 내세우는 반박)</h4>\n<ul>\n<li>"성과상여라 통상임금 아니다" → 평가 기준이 객관적이고 정기·일률 지급되면 산입 다툴 여지 있어요.</li>\n<li>"근무일수 조건이 있다" → 소정근로일수 이내 조건이면 고정성 부정되지 않습니다(대법원 2022다257238 취지).</li>\n<li>"임금협정에 통상임금 제외 명시" → 강행규정 우선이라 합의로도 통상임금성 부정 어려움.</li>\n</ul>\n<h4>🏛️ 신청·상담 경로</h4>\n<ul>\n<li>고용노동부 노동포털 (labor.moel.go.kr) — 임금체불 진정 온라인 접수</li>\n<li>고용노동부 고객상담센터 1350 — 무료 안내</li>\n<li>대한법률구조공단 132 — 무료 법률상담</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 통상임금 판단 기준과 근무일수 조건의 영향',
        summary:
          '대법원 2022다257238 사건(대법원, 2025.07.18 선고)에서 법원은 통상임금이 소정근로의 대가로서 정기적·일률적으로 지급하기로 정한 임금이라는 정의에 충실하게, 일정 근무일수를 충족해야만 지급한다는 조건이 부가되어 있더라도 그 조건이 소정근로일수 이내로 정해진 근무일수 조건이라면 그 사정만으로 통상임금성이 부정되지 않는다고 판시했습니다.',
        takeaway: '근무일수 조건이 있어도 소정근로 안에서 충족 가능하면 통상임금 산입을 다툴 여지가 있어, 정기상여를 통상임금에 산입한 재산정 차액 청구를 검토할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '회사가 "정기상여는 임금협정에서 통상임금 제외 합의했다"고 합니다',
        answer:
          '<strong>강행규정 우선이라 합의로 통상임금성을 부정하기 어렵습니다.</strong> 정기·일률·고정성이 갖춰졌다면 산입 다툼이 가능해요.',
      },
      {
        question: '근무일수 80% 이상 조건이 있어요. 통상임금 안 되나요?',
        answer:
          '<strong>소정근로일수 이내 조건이면 고정성 부정되지 않을 여지가 큽니다(대법원 2022다257238 취지).</strong> 조건이 소정근로 외 추가 자격이라면 다툴 여지가 좁아져요.',
      },
      {
        question: '재직자만 받는다는 조건이 있는데 어떻게 되나요?',
        answer:
          '<strong>재직자 조건의 통상임금성 평가는 사례별로 다릅니다.</strong> 지급 기준·관행·문언을 종합 검토해야 해요.',
      },
      {
        question: '시효 3년 지난 차액도 받을 수 있나요?',
        answer:
          '<strong>임금채권 시효는 3년이라 직전 36개월치 차액 청구가 가능합니다.</strong> 회사가 "곧 정산해줄게" 신뢰를 줬다면 권리남용 항변(대법원 2024다294705 취지)으로 더 다툴 여지도 있어요.',
      },
      {
        question: '통상임금이 올라가면 퇴직금까지 영향이 있나요?',
        answer:
          '<strong>네. 통상임금이 평균임금 산정에 반영되면 퇴직금까지 재산정 청구가 가능한 사례가 있습니다.</strong> 퇴직자라면 퇴직금 차액도 함께 검토해보세요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '명절상여 누락 차별 청구', href: '/guide/wage/wage-holiday-bonus-skipped-discrimination' },
      { label: '정기상여 평균임금 산입 다툼', href: '/guide/retirement/retirement-average-wage-bonus-dispute' },
      { label: '식대 통상임금 산입', href: '/guide/wage/wage-meal-expense-ordinary-wage' },
      { label: '연차수당 통상임금 영향', href: '/guide/wage/wage-annual-leave-pay-calculation' },
      { label: '임금 지연이자 연 20% 청구', href: '/guide/wage/wage-late-payment-interest-claim' },
    ],
  },

  // ─── 2. wage / wage-fixed-overtime-actual-mismatch ───
  {
    domain: 'wage',
    slug: 'wage-fixed-overtime-actual-mismatch',
    keyword: '고정연장수당 실근로 차이',
    questionKeyword: '고정연장수당 받는데 실제 야근이 그보다 더 많아요. 차액 받을 수 있나요?',
    ctaKeyword: '고정연장수당 차액 청구 가능성 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '고정연장수당 실근로 초과 — 차액 청구 5단계 | 로앤가이드',
      description:
        '고정연장근로수당을 받지만 실제 연장·야간·휴일근로가 더 많다면 시간 산정 가능성으로 차액 청구가 가능합니다. 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"근로계약에 \'고정연장근로수당 월 30시간분 포함\'이라 적혀 있는데, 실제로는 매달 50~60시간씩 연장근무를 해요. 차액 청구 가능한가요?" 고정연장수당(약정 시간만큼 사전 정액 지급)은 약정 시간을 초과한 실근로분까지 면제하지 않는다는 것이 대법원 일관 입장(대법원 2020다300299 취지). 출퇴근 기록·근무표·메신저 로그 등으로 시간 산정이 가능했다면 시효 3년 안에서 초과분 가산수당 차액 청구를 검토할 수 있습니다.</p>',
    sections: [
      {
        title: '고정연장수당의 한계 — 차액 청구가 인정되기 쉬운 4가지 신호',
        content:
          '<p><strong style="color:#1e3a5f">대법원 2020다300299 취지를 적용하면 다음 사정이 강할수록 초과분 차액 청구 가능성이 강화됩니다.</strong></p>\n<ul>\n<li><strong>① 약정 시간 초과 실근로</strong> — 예: 월 30시간분 약정인데 실제 60시간 연장 근로한 경우. 초과분(30시간) 가산수당 별도 청구 가능.</li>\n<li><strong>② 시간 산정이 객관적으로 가능</strong> — 출퇴근 기록·근무표·메신저 로그·POS·물류 시스템·차량 운행기록 등 객관 자료로 실제 시간 입증 가능한 경우.</li>\n<li><strong>③ 야간·휴일근로 별도 발생</strong> — 약정에 야간·휴일이 포함되지 않거나 고정수당이 연장만 커버한다면 야간·휴일 가산수당은 별도.</li>\n<li><strong>④ 최저임금 미달</strong> — 고정수당 포함 임금을 시간당으로 환산했을 때 최저임금에 미달하면 약정 효력 부인 + 미달액 지급 의무(대법원 2020다300299 판시).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "포괄임금" 명목이라도 시간 산정이 가능한 일반 사무·물류·콜센터·서비스직에서는 약정 시간 초과분에 대한 가산수당 청구가 가능할 여지가 큽니다.</blockquote>',
      },
      {
        title: '회사가 자주 내세우는 반박과 대응 포인트',
        content:
          '<p><strong style="color:#1e3a5f">근로자가 청구할 때 회사 측 반박과 대응 논리는 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"포괄임금이라 추가 청구 안 된다"</strong> → 근로시간 산정이 어려운 직종(감시·단속적 근로 등)에 한해 포괄임금 효력이 인정됩니다. 일반 사무·물류는 시간 산정 가능 → 초과분 청구 가능.</li>\n<li><strong>"연봉에 모든 수당 포함"</strong> → 기본임금과 법정수당이 구분되지 않은 경우 약정 시간을 명확히 정해 두지 않았다면 무효 다툼 여지.</li>\n<li><strong>"근로자가 동의한 약정"</strong> → 강행규정인 근로기준법 제56조(연장·야간·휴일근로 가산임금)는 합의로 배제 불가.</li>\n<li><strong>"출퇴근 기록 없다"</strong> → 메신저·이메일·CCTV·차량 운행기록·POS 로그·동료 진술 등 보조자료로 시간 산정 가능.</li>\n</ul>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고정연장수당 초과분 차액 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 + 민사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 약정 + 실근로 자료 확보</strong> (즉시) — 근로계약서·임금협정상 약정 시간 명시 부분 + 출퇴근 기록·근무표·메신저 로그·POS 등 실근로 자료.</li>\n<li><strong>2단계 — 약정 시간 초과분 산출</strong> (즉시) — 월별 실제 연장·야간·휴일 시간 - 약정 시간 = 초과분. 통상임금 시급 × 1.5(연장)·1.5(야간 가산 또는 합산 200%)·1.5(휴일) 곱해 차액 산출. 시효 3년치.</li>\n<li><strong>3단계 — 회사 정정 요청</strong> (선택) — 인사팀에 서면으로 약정 초과분 차액 정산 요청. 14일 회신 없으면 다음 단계로.</li>\n<li><strong>4단계 — 노동청 진정</strong> (3년 이내) — 노동포털(labor.moel.go.kr). 처리기간 25일(연장 가능). 시정지시 미이행 시 형사 송치(3년 이하 징역 또는 3,000만 원 이하 벌금).</li>\n<li><strong>5단계 — 민사 임금 청구 (필요 시)</strong> — 본 차액 + 연 20% 지연이자(퇴직자). 3,000만 원 이하면 소액심판으로 빠른 판결 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 고정연장수당 초과분, AI로 청구 가능성을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">약정 시간·실근로 시간·시급을 입력하면 차액 산출과 청구 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 / ⚠️ 다툼 포인트 / 🏛️ 신청·상담 경로',
        content:
          '<h4>📋 준비서류 체크리스트</h4>\n<ul>\n<li>근로계약서·임금협정 (약정 시간·고정수당 명시 부분)</li>\n<li>최근 3년 급여명세서 (고정연장수당 항목 추적)</li>\n<li>출퇴근 기록·근무표·근태 시스템 캡처 (실근로 입증)</li>\n<li>업무 메신저 로그·이메일·POS·차량 운행기록 등 보조자료</li>\n<li>야간·휴일근로 지시 문서·이메일</li>\n<li>이직확인서·퇴직증명서 (퇴직자의 경우)</li>\n</ul>\n<h4>⚠️ 다툼 포인트</h4>\n<ul>\n<li>"포괄임금 약정" → 시간 산정이 가능한 직종이면 약정 효력 한계 다툼.</li>\n<li>"근로자 동의" → 강행규정 위배로 합의 효력 제한.</li>\n<li>"실근로 시간 입증 부족" → 보조자료 다양하게 결합하면 입증 가능.</li>\n</ul>\n<h4>🏛️ 신청·상담 경로</h4>\n<ul>\n<li>고용노동부 노동포털 (labor.moel.go.kr) — 임금체불 진정 접수</li>\n<li>고용노동부 고객상담센터 1350 — 무료 안내</li>\n<li>대한법률구조공단 132 — 무료 법률상담</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금계약과 최저임금 미달 시 약정 효력',
        summary:
          '대법원 2020다300299 사건(대법원, 2024.12.26 선고)에서 법원은 포괄임금계약에 따라 지급된 임금이 최저임금에 미달하는 경우 포괄임금계약이 유효하다고 볼 수 없고 사용자는 그 미달액을 지급해야 한다고 판시하면서, 최저임금 미달 여부 판단을 위한 비교대상 시급의 산정 방법을 구체적으로 제시했습니다.',
        takeaway: '포괄임금 명목이라도 약정 임금이 최저임금에 미달하면 효력이 부인되고, 약정 시간을 초과한 실근로 가산수당까지 별도 청구 검토가 가능합니다.',
      },
    ],
    faq: [
      {
        question: '근로계약에 "월 OO시간분 고정연장수당 포함"이라 적혀 있어요',
        answer:
          '<strong>약정 시간 초과 실근로분은 별도 청구가 가능합니다.</strong> 출퇴근 기록·근무표로 초과분을 입증하면 차액 청구를 검토해볼 수 있어요.',
      },
      {
        question: '포괄임금이라 추가 수당이 없다는데 맞나요?',
        answer:
          '<strong>시간 산정이 객관적으로 어려운 직종(감시·단속적 근로 등)에 한해 인정됩니다.</strong> 일반 사무·물류·서비스직은 시간 산정 가능 → 약정 한계를 다툴 수 있어요.',
      },
      {
        question: '출퇴근 기록이 없는데 시간 입증 가능한가요?',
        answer:
          '<strong>메신저·이메일·CCTV·POS·차량 운행기록·동료 진술 등 보조자료를 결합하면 입증 가능한 사례가 많습니다.</strong> 자료를 폭넓게 수집해두세요.',
      },
      {
        question: '최저임금 미달이면 어떻게 되나요?',
        answer:
          '<strong>포괄임금 약정 효력이 부인되고 미달액 지급 의무가 발생합니다(대법원 2020다300299).</strong> 시급 환산 후 최저임금과 비교해보세요.',
      },
      {
        question: '퇴직 후에도 청구 가능한가요?',
        answer:
          '<strong>임금채권 시효는 3년입니다.</strong> 퇴직자라면 미지급 차액 + 연 20% 지연이자 + 평균임금 영향까지 함께 다툴 여지가 있어요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '물류·창고 야간 포괄임금 위법', href: '/guide/wage/wage-pogual-warehouse-logistics-shift-illegal' },
      { label: '연장근로 동의 범위 한계', href: '/guide/wage/wage-overtime-consent-scope' },
      { label: '연차수당 통상임금 영향', href: '/guide/wage/wage-annual-leave-pay-calculation' },
      { label: '임금 지연이자 연 20% 청구', href: '/guide/wage/wage-late-payment-interest-claim' },
      { label: '퇴직 후 미지급 수당 청구', href: '/guide/wage/wage-resigned-unpaid-allowance-claim' },
    ],
  },

  // ─── 3. wage / wage-resigned-unpaid-allowance-claim ───
  {
    domain: 'wage',
    slug: 'wage-resigned-unpaid-allowance-claim',
    keyword: '퇴직 후 미지급 수당 청구',
    questionKeyword: '퇴직했는데 연장수당·연차수당 미지급분이 있어요. 어떻게 청구하나요?',
    ctaKeyword: '퇴직 후 미지급 수당 청구 절차 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '퇴직 후 미지급 수당 청구 6단계 절차 | 로앤가이드',
      description:
        '퇴직 후 연장·야간·연차수당이 미지급됐다면 14일·3년 시효 안에서 노동청 진정 + 민사 청구가 가능합니다. 6단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"퇴직했는데 마지막 달 연장수당·연차수당·통상임금 차액이 한꺼번에 빠져 있어요. 무엇부터 챙겨야 하나요?" 퇴직자는 14일 청산 의무·3년 시효·연 20% 지연이자라는 강력한 트랙을 갖고 있습니다(근로기준법 제36조·제37조). 노동청 진정 + 민사 청구를 함께 묶어 진행하면 협상력과 회수 가능성을 함께 높일 수 있어요.</p>',
    sections: [
      {
        title: '퇴직자에게 유리한 3가지 강력 장치',
        content:
          '<p><strong style="color:#1e3a5f">퇴직자라면 다음 3가지 장치를 활용할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 14일 청산 의무</strong> — 퇴직일로부터 14일 이내 임금·퇴직금·수당 일체를 지급해야 합니다(근로기준법 제36조). 연장 합의 없이 미지급 시 형사 책임도 별도로 발생할 수 있어요.</li>\n<li><strong>② 연 20% 지연이자</strong> — 퇴직 후 14일 경과한 미지급 임금에 대해 연 20% 지연이자(근로기준법 제37조). 재직자 청구(민법 연 5%)보다 4배 높아 회수 인센티브가 큼.</li>\n<li><strong>③ 시효 3년 안에서 묶음 청구</strong> — 직전 36개월치 미지급 연장·야간·휴일·연차수당 + 통상임금 재산정 차액 + 평균임금성 다툼까지 함께 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 퇴직자라면 형사 압박(노동청 진정·고소) + 연 20% 지연이자(민사 청구)라는 두 트랙을 함께 운용하는 것이 협상력 확보에 유리합니다.</blockquote>',
      },
      {
        title: '청구 항목별 산출 가이드',
        content:
          '<p><strong style="color:#1e3a5f">퇴직 시 한 번에 묶어 청구할 수 있는 대표 항목은 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>연장·야간·휴일근로 가산수당</strong> — 통상임금 시급 × 1.5배. 출퇴근 기록·근무표·메신저 로그로 입증.</li>\n<li><strong>미사용 연차수당</strong> — 회계연도·근속연수에 따라 발생한 연차 중 미사용분 × 통상임금. 연차 미부여 자체에 대한 다툼도 함께 가능.</li>\n<li><strong>통상임금 재산정 차액</strong> — 정기상여·식대·교통비 등 통상임금 누락 항목이 있다면 재산정해 연장·야간·휴일·연차수당 차액 동시 청구.</li>\n<li><strong>퇴직금 차액</strong> — 평균임금에 누락된 항목(정기상여·연차수당 등)이 있으면 재산정해 차액 청구. 평균임금성 인정 시 큰 차액 발생 가능.</li>\n<li><strong>지연이자 연 20%</strong> — 모든 항목에 대해 퇴직 후 14일 경과 시점부터 자동 발생.</li>\n</ul>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 퇴직자 미지급 수당 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 + 민사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 미지급 자료 확보</strong> (즉시) — 근로계약서·취업규칙·최근 3년 급여명세서·연차사용내역·출퇴근 기록·이직확인서.</li>\n<li><strong>2단계 — 항목별 차액 산출</strong> (즉시) — 연장·야간·휴일·연차수당 + 통상임금 차액 + 퇴직금 차액 + 지연이자(연 20%) 합계 표 작성.</li>\n<li><strong>3단계 — 내용증명 발송</strong> (선택) — 14일 안에 일괄 지급 요청 + 시효 중단 효과. 회신 없으면 다음 단계.</li>\n<li><strong>4단계 — 노동청 진정·고소</strong> (3년 이내) — 노동포털(labor.moel.go.kr). 진정(지급 요구) + 고소(처벌 요구) 동시 접수 시 협상력 강화. 처리기간 25일.</li>\n<li><strong>5단계 — 시정지시·체불사업주명단 공개</strong> — 미이행 시 형사 송치 + 체불사업주명단 공개·신용제재 가능. 사업주 압박 강화.</li>\n<li><strong>6단계 — 민사 임금 청구 / 도산대지급금</strong> — 사업주 폐업·도산 시 도산대지급금 신청(근로복지공단). 운영 중이면 민사 청구로 강제집행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직 후 미지급 수당, AI로 청구 절차를 정리하세요</strong></p>\n<p style="margin:0;font-size:0.95em">퇴직일·미지급 항목·지급 요청 내역을 입력하면 14일·3년 트랙과 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 / ⚠️ 다툼 포인트 / 🏛️ 신청·상담 경로',
        content:
          '<h4>📋 준비서류 체크리스트</h4>\n<ul>\n<li>근로계약서·취업규칙·임금협정·단체협약</li>\n<li>최근 3년 급여명세서·연차사용내역</li>\n<li>출퇴근 기록·근무표·근태 시스템 캡처</li>\n<li>이직확인서·퇴직증명서·퇴직금 산정내역</li>\n<li>회사의 미지급 사유 통보·이메일·문자</li>\n<li>지급 요청 내용증명 사본·발송기록</li>\n</ul>\n<h4>⚠️ 다툼 포인트</h4>\n<ul>\n<li>"이미 퇴직금에 포함했다" → 항목별 명세 요구 + 실제 산입 여부 검토.</li>\n<li>"분할납부 합의" → 서면 합의 없이 구두면 시효 중단 효력 약함.</li>\n<li>"민사 합의서 서명" → 합의금 외 미지급분 포기 조항 유무 확인.</li>\n</ul>\n<h4>🏛️ 신청·상담 경로</h4>\n<ul>\n<li>고용노동부 노동포털 (labor.moel.go.kr) — 진정·고소 접수</li>\n<li>근로복지공단 1588-0075 — 도산대지급금 안내</li>\n<li>대한법률구조공단 132 — 무료 법률상담</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직금 청구권 시효와 권리남용 항변',
        summary:
          '대법원 2024다294705 사건(대법원, 2025.05.29 선고)에서 법원은 채무자의 소멸시효 항변이 신의성실 원칙에 반하는지를 판단할 때 시효완성 전 권리행사 곤란 사정·시효이익 포기 행동·채권자 보호 필요성 등을 종합 고려해야 한다고 판시했습니다. 다만 소멸시효 제도의 법적 안정성 요청을 고려해 권리남용 인정에 신중을 기할 필요가 있다고도 강조했습니다.',
        takeaway: '시효 3년이 지나가도 회사가 시효이익을 포기하는 듯한 태도를 보였다면 권리남용 항변 가능성이 있습니다. 다만 인정 폭이 좁아 시효 안에서 신속 청구가 안전합니다.',
      },
    ],
    faq: [
      {
        question: '퇴직 후 14일 지났는데도 회사가 미지급 상태입니다',
        answer:
          '<strong>지연이자 연 20%가 자동 발생합니다(근로기준법 제37조).</strong> 노동청 진정 + 민사 청구를 함께 검토해보세요.',
      },
      {
        question: '회사와 분할납부 합의했는데 1차분만 받고 끊겼어요',
        answer:
          '<strong>서면 합의서가 있다면 잔액 청구 + 시효 중단 효력 활용 가능합니다.</strong> 구두 합의면 다시 내용증명으로 청구하는 게 안전해요.',
      },
      {
        question: '회사가 폐업했어요. 어떻게 되나요?',
        answer:
          '<strong>도산대지급금(구 체당금) 제도를 검토해보세요.</strong> 근로복지공단(1588-0075)에서 임금·퇴직금 일부를 우선 지급받을 수 있는 절차가 있어요.',
      },
      {
        question: '연차수당도 같이 청구할 수 있나요?',
        answer:
          '<strong>네. 미사용 연차수당은 임금에 해당해 같은 트랙으로 청구 가능합니다.</strong> 연차 미부여·소멸 다툼도 함께 검토해보세요.',
      },
      {
        question: '퇴직금 차액도 한꺼번에 청구할 수 있나요?',
        answer:
          '<strong>네. 평균임금에 누락된 항목(정기상여·연차수당 등)이 있으면 재산정 차액 청구가 가능합니다.</strong> 통상임금 재산정과도 연동돼 영향이 클 수 있어요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금 지연이자 연 20% 청구', href: '/guide/wage/wage-late-payment-interest-claim' },
      { label: '정기상여 통상임금 산입', href: '/guide/wage/wage-ordinary-wage-bonus-included' },
      { label: '고정연장수당 실근로 차이', href: '/guide/wage/wage-fixed-overtime-actual-mismatch' },
      { label: '폐업·도산 시 도산대지급금', href: '/guide/retirement/retirement-business-closure-substitute-payment' },
      { label: '퇴직금 평균임금 재산정', href: '/guide/retirement/retirement-average-wage-bonus-dispute' },
    ],
  },

  // ─── 4. unemployment / unemployment-recommendation-vs-resignation-boundary ───
  {
    domain: 'unemployment',
    slug: 'unemployment-recommendation-vs-resignation-boundary',
    keyword: '권고사직 자진퇴사 경계',
    questionKeyword: '권고사직 받았는데 사직서는 자진퇴사로 썼어요. 실업급여 받을 수 있나요?',
    ctaKeyword: '권고사직 vs 자진퇴사 경계 다툼 가능성 확인',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '권고사직 vs 자진퇴사 — 경계 다툼·심사청구 5단계 | 로앤가이드',
      description:
        '권고사직을 받았는데 사직서가 자진퇴사로 처리돼 실업급여 거절을 받았다면 이의신청·심사청구로 다툴 수 있습니다. 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"부서장이 \'그만뒀으면 좋겠다\'고 해서 사직서를 냈는데, 회사가 자진퇴사로 처리해 실업급여 거절을 받았어요. 어떻게 다투나요?" 이직 사유는 사직서 양식이 아니라 실질로 판단됩니다. 회사가 이직을 권유·압박했음을 입증할 객관 자료(녹취·문자·메일·인사발령·면담 회의록)가 있다면 권고사직(비자발적 이직)으로 정정 처리받아 실업급여 수급 자격을 다툴 여지가 있어요. 이의신청·심사·재심사 트랙을 적극 활용해보세요.</p>',
    sections: [
      {
        title: '권고사직으로 인정될 수 있는 4가지 정황',
        content:
          '<p><strong style="color:#1e3a5f">사직서 명목과 무관하게 다음 정황이 입증되면 권고사직(비자발적 이직)으로 다툴 여지가 있습니다.</strong></p>\n<ul>\n<li><strong>① 명시적 이직 권유·통보</strong> — 임원·부서장 등이 구두·서면으로 "퇴사 검토" "팀 재편으로 자리가 없다" 등 명시 표현. 녹취·문자·메일이 핵심 자료.</li>\n<li><strong>② 사실상 인사 불이익</strong> — 부서 이동·업무 박탈·대기발령·평가 최하위 등으로 사직 압박. 인사발령서·메일·면담 회의록.</li>\n<li><strong>③ 회사 사정에 따른 일시·구조조정</strong> — 경영상 이유 인원감축·사업부 폐쇄·합병·매각 등 회사 사정으로 자리 소멸. 공고·이사회 결의·인사발령.</li>\n<li><strong>④ 사직서 작성 강요·압박</strong> — 사직서 양식·시점·문구가 회사 측 일방 결정. 작성 거부 시 추가 불이익 시사. 회의록·녹취·동료 증언.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 고용보험심사위원회 재결례에서도 사직서 양식만으로 자진퇴사 판단하지 않고 실질을 봐서 권고사직으로 정정한 사례가 다수 확인됩니다(예: 사실상 인사적체 해소 수단으로 명예퇴직 활용 — 2023재결 제13호).</blockquote>',
      },
      {
        title: '자진퇴사로 굳어지는 사정 (반박 포인트)',
        content:
          '<p><strong style="color:#1e3a5f">반대로 다음 사정이 강하면 자진퇴사로 굳어지기 쉬워 다툼 난이도가 올라갑니다.</strong></p>\n<ul>\n<li><strong>본인 사정 사직서 명시</strong> — "개인사정"·"건강"·"가족 돌봄"·"이직" 등 본인 사유를 사직서에 직접 기재한 경우. 정정 요구 자료가 강해야 다툴 여지.</li>\n<li><strong>퇴직금·위로금 추가 지급 합의</strong> — 권고사직 위로금·명예퇴직 가산금이 없는 단순 사직.</li>\n<li><strong>인사 불이익·압박 자료 부재</strong> — 객관 자료(메일·문자·녹취) 없이 본인 진술만 있는 경우.</li>\n<li><strong>본인이 먼저 이직 의사 표명</strong> — 회사 권유 전에 이직 의사를 본인이 먼저 밝힌 메일·면담 기록.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인 사정이 사직서에 적혀 있어도 회사 측 압박 자료가 더 강하면 권고사직 다툼이 가능한 사례가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 권고사직 정정 + 실업급여 다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">고용보험 이의신청 + 심사청구 + 재심사 트랙을 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권고사직 정황 자료 정리</strong> (즉시) — 녹취·문자·메일·인사발령·면담 회의록·동료 증언 등. 시점별 시간순 정리.</li>\n<li><strong>2단계 — 회사에 이직사유 정정 요청</strong> (즉시) — 인사팀에 서면으로 권고사직(비자발적) 정정 + 이직확인서 재발급 요청. 회사가 응하지 않으면 다음 단계.</li>\n<li><strong>3단계 — 고용센터 이직사유 정정 신청</strong> (90일 내) — 본인이 직접 고용센터에 정정 신청 가능. 권고사직 정황 자료 첨부. 고용센터에서 사실관계 조사.</li>\n<li><strong>4단계 — 고용보험 심사청구</strong> (이의 결정 후 90일 내) — 이의신청 결과 불복 시 고용보험심사관에 심사청구. 처리기간 약 3개월.</li>\n<li><strong>5단계 — 고용보험심사위원회 재심사</strong> (심사 결정 후 90일 내) — 심사 기각 시 고용보험심사위원회에 재심사. 권고사직·정당이직 사유 다툼 사례 다수.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 권고사직 vs 자진퇴사 경계, AI로 다툼 가능성을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">사직 경위·자료·이직확인서 처리 내용을 입력하면 정정 가능성과 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">실업급여 받을 수 있는지 AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 / ⚠️ 다툼 포인트 / 🏛️ 신청·상담 경로',
        content:
          '<h4>📋 준비서류 체크리스트</h4>\n<ul>\n<li>사직서·이직확인서·고용보험 피보험자격 상실신고서 사본</li>\n<li>임원·부서장과의 면담 녹취·메일·문자·메신저 캡처</li>\n<li>인사발령·대기발령·업무 변경 명령서</li>\n<li>경영상 이유 공고·이사회 결의·합병·매각 자료</li>\n<li>실업급여 수급자격 불인정 처분 통보서</li>\n<li>고용센터 이직사유 정정 신청서·심사청구서 사본</li>\n</ul>\n<h4>⚠️ 다툼 포인트</h4>\n<ul>\n<li>"사직서 본인 사유 기재" → 작성 경위·압박 정황을 객관 자료로 보완.</li>\n<li>"위로금 없음" → 권고사직 정황은 위로금 유무와 무관하게 다툴 수 있어요.</li>\n<li>"녹취 부재" → 메신저·동료 증언·인사 불이익 자료를 결합하면 입증 가능.</li>\n</ul>\n<h4>🏛️ 신청·상담 경로</h4>\n<ul>\n<li>관할 고용센터 — 이직사유 정정 신청</li>\n<li>고용보험심사관 / 고용보험심사위원회 — 심사·재심사</li>\n<li>고용노동부 고객상담센터 1350 — 무료 안내</li>\n<li>대한법률구조공단 132 — 무료 법률상담</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '재결례 — 사실상 인사적체 해소 수단으로 활용된 명예퇴직의 정당이직 인정',
        summary:
          '고용보험심사위원회 2023재결 제13호 사건(고용보험심사위원회, 2023.03.29 선고)에서 위원회는 임금피크제 적용 전 명예퇴직한 청구인에 대해 임금피크율이 상당히 높고 명예퇴직 전부터 후임자가 함께 근무하고 있는 등 제반 사정을 고려해 사실상 인사적체 해소 수단으로 명예퇴직제도가 사용된 것으로 판단해 수급자격이 제한되지 않는 정당이직 사유에 해당한다고 보고 수급자격을 인정한 사례입니다.',
        takeaway: '사직서 양식이 자진퇴사여도 회사 사정·인사 불이익·구조조정 정황이 객관 자료로 입증되면 권고사직·정당이직으로 다툴 여지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '사직서에 "개인사정"이라 적었는데 다툴 수 있나요?',
        answer:
          '<strong>회사 측 압박 자료가 강하면 다툴 여지가 있습니다.</strong> 사직 경위·녹취·인사발령 자료를 시점순으로 정리해보세요.',
      },
      {
        question: '회사가 이직확인서 정정을 거부하면 어떻게 하나요?',
        answer:
          '<strong>본인이 직접 고용센터에 이직사유 정정 신청이 가능합니다.</strong> 고용센터가 사실관계를 조사해 처분합니다.',
      },
      {
        question: '실업급여 거절 통지 받은 지 60일 지났어요',
        answer:
          '<strong>처분 통지 후 90일 안에 이의신청·심사청구가 가능합니다.</strong> 시한이 임박하면 우선 서면 접수부터 하는 게 안전해요.',
      },
      {
        question: '녹취 자료가 없어요. 입증 가능한가요?',
        answer:
          '<strong>메신저·이메일·면담 회의록·동료 증언·인사발령 등 보조자료를 결합하면 입증 가능한 사례가 많습니다.</strong> 자료를 폭넓게 수집해두세요.',
      },
      {
        question: '권고사직으로 인정되면 실업급여 외 다른 혜택도 있나요?',
        answer:
          '<strong>권고사직(비자발적)으로 처리되면 실업급여 수급 + 일부 정부 재취업 지원 사업 가산점 등 부수 혜택이 있을 수 있습니다.</strong> 고용센터 안내를 확인해보세요.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 정당이직 사유 가이드', href: '/guide/unemployment/unemployment-voluntary-quit-benefits' },
      { label: '부정수급 환수·반환 대응', href: '/guide/unemployment/unemployment-fraud-claim-recovery-procedure' },
      { label: '명예퇴직 정당이직 다툼', href: '/guide/unemployment/unemployment-honorary-retirement-justified' },
      { label: '권고사직 위로금 협상', href: '/guide/dismissal/dismissal-recommendation-settlement-negotiation' },
      { label: '실업급여 수급자격 점검', href: '/guide/unemployment/unemployment-eligibility-check-guide' },
    ],
  },

  // ─── 5. unemployment / unemployment-fraud-claim-recovery-procedure ───
  {
    domain: 'unemployment',
    slug: 'unemployment-fraud-claim-recovery-procedure',
    keyword: '실업급여 부정수급 환수 대응',
    questionKeyword: '부정수급 환수 통보 받았어요. 어떻게 대응하나요?',
    ctaKeyword: '부정수급 환수 통보 대응 절차 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '실업급여 부정수급 환수 — 이의·심사 5단계 대응 | 로앤가이드',
      description:
        '실업급여 부정수급 환수·반환명령 통보를 받았다면 고의·과실 다툼 + 이의신청·심사청구로 대응할 수 있습니다. 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"실업급여 받는 동안 일용근로 며칠 한 걸 신고 안 했더니 부정수급으로 전액 반환 + 추징 통보를 받았어요. 어떻게 대응하나요?" 부정수급은 고의·과실 여부와 미신고 사정에 따라 결정·반환·추징 범위가 크게 달라집니다. 14일·근로내역 해석·재취업 활동 곤란 사정 등 재결례 인정 사례가 있어 이의신청·심사청구로 처분 정정·완화를 다툴 여지가 있어요. 분할납부·일부 면제 가능성도 함께 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: '부정수급으로 처분되는 4가지 대표 유형과 다툼 포인트',
        content:
          '<p><strong style="color:#1e3a5f">고용보험심사위원회 재결례 기준으로 부정수급 처분이 자주 다투어지는 유형은 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>① 일용근로·노무제공 미신고</strong> — 실업인정 신청 시 단기 일용근로·노무제공을 신고하지 않은 경우. 다만 "근로내역에 노무제공내역이 포함되는지" 해석 다툼 인정 사례 있음(2023재결 제42호).</li>\n<li><strong>② 해외체류 중 우회 실업인정 신청</strong> — VPN 등으로 해외에서 실업인정 신청한 경우. 형식적 구직활동 평가될 가능성(2023재결 제41호).</li>\n<li><strong>③ 재취업 계획 미이행</strong> — 해외취업활동계획서 미이행 등. 다만 전쟁·재난 등 곤란 사정이 있으면 처분 취소 가능(2023재결 제50호).</li>\n<li><strong>④ 수급자격 신청 시 허위 기재</strong> — 이직사유·근로내역·소득 등 허위 기재. 고의·과실 정도에 따라 처분 폭 달라짐.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 부정수급 처분은 "고의 vs 과실" 판단이 핵심. 고의가 아닌 과실·착오로 인정되면 반환 범위·제재가 완화될 여지가 있습니다.</blockquote>',
      },
      {
        title: '환수·반환·추징 처분의 구성과 분할납부 가능성',
        content:
          '<p><strong style="color:#1e3a5f">부정수급 처분은 다음 3가지로 구성되는 경우가 많습니다.</strong></p>\n<ul>\n<li><strong>지급제한</strong> — 부정수급 적발 후 잔여 수급일수 지급 중단.</li>\n<li><strong>반환명령</strong> — 부정수급 기간 지급된 구직급여 전액 반환.</li>\n<li><strong>추가징수</strong> — 부정수급액의 최대 5배까지 추가징수 가능(고용보험법 제62조). 고의성·반복성에 따라 결정.</li>\n</ul>\n<p style="margin-top:12px"><strong>분할납부·일부 면제</strong>는 생계곤란·고의 부재·환수액 과다 등 사정이 있으면 신청 가능. 처분 통지서에 분할납부 신청 안내가 함께 오는 경우가 많습니다.</p>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 단순 미신고로 인한 부정수급(예: 며칠 일용근로)은 추가징수 대신 반환만 명령되는 경우도 있어 처분 통지서를 꼼꼼히 확인해보세요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 부정수급 처분 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">고용보험 이의신청 + 심사청구 + 재심사 트랙을 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 처분 통지서·근거자료 확보</strong> (즉시) — 부정수급 처분 통지서·근거 사실관계·계산 내역. 본인이 신고한 실업인정 자료·근로내역과 대조.</li>\n<li><strong>2단계 — 고의·과실 여부 정리</strong> (즉시) — 미신고가 단순 착오인지 고의인지 시점·사정 정리. 미신고 사유 자료(병원·가족·해외 사정 등) 확보.</li>\n<li><strong>3단계 — 고용보험 이의신청 / 심사청구</strong> (처분 통지 후 90일 내) — 고용보험심사관에 심사청구서 제출. 처리기간 약 3개월.</li>\n<li><strong>4단계 — 고용보험심사위원회 재심사</strong> (심사 결정 후 90일 내) — 심사 기각 시 재심사. 처분 취소·일부 변경·완화 사례 다수.</li>\n<li><strong>5단계 — 분할납부·일부 면제 신청</strong> — 생계곤란 입증 자료(소득증빙·가족관계·의료비 등) + 분할납부 계획서 제출. 형사 송치 별건이라면 변호사 상담을 검토해보세요.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부정수급 환수 통보, AI로 대응 절차를 정리하세요</strong></p>\n<p style="margin:0;font-size:0.95em">처분 내용·미신고 사정·생계 사정을 입력하면 다툼 가능성과 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">실업급여 받을 수 있는지 AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 / ⚠️ 다툼 포인트 / 🏛️ 신청·상담 경로',
        content:
          '<h4>📋 준비서류 체크리스트</h4>\n<ul>\n<li>부정수급 처분 통지서·계산 내역</li>\n<li>실업인정 신청서·구직활동 자료 사본</li>\n<li>일용근로·노무제공 내역·통장 입금 내역</li>\n<li>미신고 사유 입증자료 (병원·가족·해외 체류 사정 등)</li>\n<li>생계곤란 입증자료 (소득증빙·가족관계·의료비)</li>\n<li>심사청구서·재심사청구서 양식</li>\n</ul>\n<h4>⚠️ 다툼 포인트</h4>\n<ul>\n<li>"근로내역 vs 노무제공내역" → 건설일용근로자 등 일부 사례에서 노무제공내역은 근로내역에 포함 안 됨 해석 가능(2023재결 제42호 참조).</li>\n<li>"고의 부재" → 단순 착오·해석 부주의면 추가징수 완화 여지.</li>\n<li>"불가피 사정" → 전쟁·재난·질병 등으로 계획 미이행이면 처분 취소 가능(2023재결 제50호 참조).</li>\n</ul>\n<h4>🏛️ 신청·상담 경로</h4>\n<ul>\n<li>관할 고용센터 — 이의신청·분할납부 신청</li>\n<li>고용보험심사관 / 고용보험심사위원회 — 심사·재심사</li>\n<li>고용노동부 고객상담센터 1350 — 무료 안내</li>\n<li>대한법률구조공단 132 — 무료 법률상담</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '재결례 — 건설일용근로자 노무제공 미신고에 대한 부정수급 처분 취소',
        summary:
          '고용보험심사위원회 2023재결 제42호 사건(고용보험심사위원회, 2023.06.21 선고)에서 위원회는 건설일용근로자에 대한 "수급자격 인정신청일 이전 14일간 연속하여 근로내역이 없을 것" 요건 해석 시 근로내역에는 노무제공내역(예: 대리운전기사)이 포함되지 않는다고 해석해, 수급자격 신청 시 청구인의 2일간 노무제공내역 미신고를 사유로 한 부정수급 처분을 취소한 사례입니다.',
        takeaway: '미신고 처분이라도 "근로내역" 해석·고의 여부에 따라 처분 취소·완화 가능성이 있어, 단순 미신고로 보이는 사안도 이의신청·심사청구를 검토할 가치가 있습니다.',
      },
    ],
    faq: [
      {
        question: '며칠 일용근로 미신고로 전액 반환 + 5배 추징 처분을 받았어요',
        answer:
          '<strong>고의 부재·미신고 사정·계산 오류 등을 다투면 처분 완화 가능성이 있습니다.</strong> 이의신청·심사청구를 90일 안에 제출해보세요.',
      },
      {
        question: '해외 체류 중 VPN으로 실업인정 받았는데 환수 통보 왔어요',
        answer:
          '<strong>해외체류 자체는 처분 대상이 될 수 있지만 불가피 사정(전쟁·재난·질병)이 있으면 처분 취소 가능 사례 있어요(2023재결 제50호).</strong> 사정 자료 확보가 핵심.',
      },
      {
        question: '환수액이 너무 많아 한 번에 갚기 어려워요',
        answer:
          '<strong>분할납부·일부 면제 신청이 가능합니다.</strong> 생계곤란 입증 자료(소득증빙·의료비·가족관계)를 첨부해 신청해보세요.',
      },
      {
        question: '형사 송치 통보까지 받았어요',
        answer:
          '<strong>고의가 강한 부정수급은 형사 절차도 별도로 진행됩니다.</strong> 행정 처분 다툼과 별도로 변호사 상담을 검토해보세요.',
      },
      {
        question: '심사청구는 어디에 어떻게 제기하나요?',
        answer:
          '<strong>고용보험심사관에 처분 통지 후 90일 내 심사청구서 제출이 가능합니다.</strong> 결정 불복 시 90일 내 고용보험심사위원회에 재심사 청구도 가능해요.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '권고사직 vs 자진퇴사 경계', href: '/guide/unemployment/unemployment-recommendation-vs-resignation-boundary' },
      { label: '부정수급 처벌 대응', href: '/guide/unemployment/unemployment-fraud-penalty-response' },
      { label: '실업급여 정당이직 사유', href: '/guide/unemployment/unemployment-voluntary-quit-benefits' },
      { label: '실업급여 수급자격 점검', href: '/guide/unemployment/unemployment-eligibility-check-guide' },
      { label: '재취업 활동 신고 방법', href: '/guide/unemployment/unemployment-reemployment-activity-report' },
    ],
  },

  // ─── 6. retirement / retirement-average-wage-bonus-dispute ───
  {
    domain: 'retirement',
    slug: 'retirement-average-wage-bonus-dispute',
    keyword: '평균임금 상여 연차수당 다툼',
    questionKeyword: '정기상여·연차수당이 평균임금에 안 들어가서 퇴직금이 적게 나왔어요. 다툴 수 있나요?',
    ctaKeyword: '평균임금 재산정 차액 청구 가능성 확인',
    type: '정리형',
    perspective: 'victim',
    meta: {
      title: '평균임금 상여·연차수당 산입 — 퇴직금 재산정 5단계 | 로앤가이드',
      description:
        '정기상여·연차수당이 평균임금에서 빠져 퇴직금이 적게 산정됐다면 재산정 차액 청구가 가능합니다. 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"퇴직금이 정기상여 100%·연차수당을 빼고 산정돼 예상보다 훨씬 적게 나왔어요. 차액 청구 가능한가요?" 평균임금 산정의 기초가 되는 임금은 사용자가 근로의 대가로 계속적·정기적으로 지급하고 단체협약·취업규칙·노동관행 등에 의해 지급의무가 지워진 금품을 의미합니다(대법원 2021다248299 취지). 정기상여·연차수당이 이 요건에 해당하면 평균임금에 산입돼 퇴직금까지 재산정 차액 청구를 검토할 수 있어요. 시효 3년·연 20% 지연이자 트랙도 함께 활용 가능합니다.</p>',
    sections: [
      {
        title: '평균임금 산입이 인정되기 쉬운 4가지 사정',
        content:
          '<p><strong style="color:#1e3a5f">대법원 2021다248299·2022다255454 취지를 적용하면 다음 사정이 강할수록 평균임금 산입 가능성이 강화됩니다.</strong></p>\n<ul>\n<li><strong>① 계속적·정기적 지급</strong> — 매월·격월·분기·연 단위 등 일정 주기로 반복 지급된 경우. 정기상여·고정 인센티브가 대표적.</li>\n<li><strong>② 지급의무 명시</strong> — 단체협약·취업규칙·급여규정·근로계약·노동관행 등으로 사용자에게 지급의무가 지워져 있는 경우.</li>\n<li><strong>③ 근로 대가성</strong> — 근로제공과 직접·밀접 관련해 지급된 경우. 평가 등급 최하위라 받지 못한 경우라도 근로 대가성 자체가 부정되지 않으면 평균임금 산입 가능(대법원 2021다248299).</li>\n<li><strong>④ 연차수당</strong> — 미사용 연차수당은 임금에 해당. 퇴직 직전 1년간 발생·지급된 연차수당은 평균임금 계산 기준 기간(3개월) 산정 시 일정 비율 반영.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "성과·경영성과 분배" 성격이 강하면 평균임금 산입 부정될 수 있지만(대법원 2022다255454), 사전 산정 기준 + 정기성 + 노동관행이 강하면 산입 다툴 여지가 큽니다.</blockquote>',
      },
      {
        title: '경영성과 vs 임금 — 산입 부정될 수 있는 사정',
        content:
          '<p><strong style="color:#1e3a5f">반대로 다음 사정이 강하면 평균임금 산입이 부정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>당기순이익·경영성과 종속</strong> — 당기순이익 발생을 지급조건으로 한 특별성과급은 경영성과 분배로 평가될 가능성(대법원 2022다255454).</li>\n<li><strong>EVA·재무지표 종속 인센티브</strong> — EVA(경제적 부가가치) 등 재무지표에 따라 큰 폭 변동되는 인센티브는 임금성 부정 가능(대법원 2021다248299의 성과 인센티브 부분).</li>\n<li><strong>관행 미확립 / 회사 재량 명시</strong> — 회사가 매번 일방 결정하고 노동관행으로 굳어지지 않은 경우.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인이 받은 정기상여·인센티브가 대법원 2021다248299의 "목표 인센티브"(고정·근로 대가성) 쪽에 가까운지, "성과 인센티브"(EVA 종속) 쪽에 가까운지 자료로 정리해보세요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 평균임금 재산정 + 퇴직금 차액 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 퇴직금 미지급 진정 + 민사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 평균임금 산정 자료 확보</strong> (즉시) — 단체협약·취업규칙·급여규정·근로계약·최근 3년 급여명세서·연차사용내역. 정기상여·인센티브 지급 기준 자료.</li>\n<li><strong>2단계 — 평균임금 재산정</strong> (즉시) — 퇴직 직전 3개월 임금에 정기상여·연차수당 일정 비율 산입. 재산정 평균임금 × 30 × 근속연수 = 퇴직금 차액.</li>\n<li><strong>3단계 — 회사 정정 요청</strong> (선택) — 인사팀에 서면으로 평균임금 재산정 + 퇴직금 차액 정산 요청. 14일 회신 없으면 다음 단계.</li>\n<li><strong>4단계 — 노동청 진정</strong> (3년 이내) — 노동포털(labor.moel.go.kr). 처리기간 25일(연장 가능). 시정지시 미이행 시 형사 송치(3년 이하 징역 또는 3,000만 원 이하 벌금).</li>\n<li><strong>5단계 — 민사 퇴직금 청구 (필요 시)</strong> — 차액 + 연 20% 지연이자(퇴직 후 14일 경과). 통상임금 재산정과 함께 묶어 청구하면 차액 규모 더 커질 수 있음.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 평균임금 재산정 차액, AI로 청구 가능성을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">정기상여·연차수당·퇴직금 산정내역을 입력하면 평균임금 산입 판단과 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">퇴직금 계산과 청구 절차, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 / ⚠️ 다툼 포인트 / 🏛️ 신청·상담 경로',
        content:
          '<h4>📋 준비서류 체크리스트</h4>\n<ul>\n<li>근로계약서·단체협약·취업규칙·급여규정</li>\n<li>최근 3년 급여명세서 (정기상여·인센티브 항목 추적)</li>\n<li>연차사용내역·연차수당 지급내역</li>\n<li>회사가 산정한 평균임금·퇴직금 산정 내역서</li>\n<li>이직확인서·퇴직증명서</li>\n<li>회사의 정기상여·인센티브 운영규정</li>\n</ul>\n<h4>⚠️ 다툼 포인트</h4>\n<ul>\n<li>"성과 인센티브라 임금 아니다" → 사전 산정 기준·정기성·근로 대가성 입증으로 다툼.</li>\n<li>"평균임금에서 정기상여 제외 합의" → 강행규정 위배로 효력 제한.</li>\n<li>"연차수당 사용일수 차감" → 미사용 연차는 임금성 인정.</li>\n</ul>\n<h4>🏛️ 신청·상담 경로</h4>\n<ul>\n<li>고용노동부 노동포털 (labor.moel.go.kr) — 퇴직금 미지급 진정</li>\n<li>고용노동부 고객상담센터 1350 — 무료 안내</li>\n<li>대한법률구조공단 132 — 무료 법률상담</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 목표 인센티브의 평균임금 산입',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 재무성과·전략과제 이행 정도를 바탕으로 상여기초금액에 연동해 지급하는 \'목표 인센티브\'가 계속적·정기적으로 지급되고 회사에 지급의무가 지워져 있으며 그 지급의무 발생이 근로제공과 직접·밀접하게 관련된다고 보아 근로의 대가인 임금에 해당한다고 판시했습니다. 반면 EVA의 일부를 재원으로 한 \'성과 인센티브\'는 평균임금 산정의 기초 임금으로 볼 수 없다고 보았습니다.',
        takeaway: '인센티브·상여가 사전 산정 기준·정기성·근로 대가성을 갖췄다면 평균임금 산입 다툼이 가능하고, 퇴직금 재산정 차액까지 청구를 검토할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '회사가 "평균임금에 정기상여 제외 합의했다"고 합니다',
        answer:
          '<strong>강행규정 위배라 합의로 평균임금성을 부정하기 어렵습니다.</strong> 사전 산정 기준·정기성·근로 대가성이 갖춰지면 산입 다툼이 가능해요.',
      },
      {
        question: '인센티브가 매년 변동돼요. 평균임금에 들어가나요?',
        answer:
          '<strong>EVA·당기순이익 등 재무지표 종속 인센티브는 산입 부정될 수 있습니다(대법원 2021다248299·2022다255454).</strong> 사전 산정 기준이 명확한 \'목표 인센티브\'면 산입 가능성이 강해요.',
      },
      {
        question: '연차수당도 평균임금에 산입되나요?',
        answer:
          '<strong>미사용 연차수당은 임금성 인정. 퇴직 직전 1년 발생분은 일정 비율로 평균임금에 반영됩니다.</strong> 산정 내역을 자세히 확인해보세요.',
      },
      {
        question: '시효 3년 지난 차액도 받을 수 있나요?',
        answer:
          '<strong>퇴직금 시효는 3년이라 직전 36개월치 청구가 가능합니다.</strong> 회사가 시효이익 포기를 시사하는 행동을 했다면 권리남용 항변(대법원 2024다294705)도 검토 가능해요.',
      },
      {
        question: '통상임금 재산정과 함께 묶을 수 있나요?',
        answer:
          '<strong>네. 정기상여를 통상임금 + 평균임금 양쪽 모두 산입해 연장수당·퇴직금까지 한 번에 청구하는 사례가 많습니다.</strong> 차액 규모가 크게 늘 수 있어요.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '정기상여 통상임금 산입', href: '/guide/wage/wage-ordinary-wage-bonus-included' },
      { label: '퇴직금 계산 가이드', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 항목 포함·제외', href: '/guide/retirement/retirement-pay-included-excluded-items' },
      { label: '폐업·도산 시 도산대지급금', href: '/guide/retirement/retirement-business-closure-substitute-payment' },
      { label: '퇴직 후 미지급 수당 청구', href: '/guide/wage/wage-resigned-unpaid-allowance-claim' },
    ],
  },

  // ─── 7. retirement / retirement-business-closure-substitute-payment ───
  {
    domain: 'retirement',
    slug: 'retirement-business-closure-substitute-payment',
    keyword: '폐업 도산 도산대지급금',
    questionKeyword: '회사 폐업하고 사업주 잠적했어요. 퇴직금 받을 방법 있나요?',
    ctaKeyword: '도산대지급금 신청 자격 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '폐업·도산 도산대지급금 — 신청 5단계 절차 | 로앤가이드',
      description:
        '사업주 폐업·도산으로 퇴직금·임금을 못 받았다면 도산대지급금(구 체당금)으로 우선 회수가 가능합니다. 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"회사가 폐업하고 사업주가 연락 두절이에요. 퇴직금·미지급 임금을 받을 방법이 있나요?" 도산대지급금(구 체당금) 제도는 사업주 폐업·도산 시 근로자가 못 받은 임금·퇴직금 일부를 근로복지공단이 우선 지급해주고 사업주에게 구상하는 방식입니다(임금채권보장법). 간이대지급금(소액·신속)과 일반대지급금(법원 절차) 두 트랙이 있어 신청 사정에 맞춰 검토할 수 있어요.</p>',
    sections: [
      {
        title: '간이대지급금 vs 일반대지급금 — 두 트랙 비교',
        content:
          '<p><strong style="color:#1e3a5f">사업주 폐업·도산 시 활용할 수 있는 두 가지 도산대지급금 트랙입니다.</strong></p>\n<ul>\n<li><strong>① 간이대지급금</strong> — 노동청 체불사실 확인 또는 소액재판 확정판결만으로 신청 가능. 처리기간 짧음. 최근 3개월 임금·최종 3년 퇴직금 한도 + 상한 1,000만 원(임금 700·퇴직금 700, 합산 1,000).</li>\n<li><strong>② 일반대지급금</strong> — 법원 회생·파산 결정 또는 사실상 도산 인정 필요. 처리기간 김. 최근 3개월 임금·최종 3년 퇴직금 한도 + 월 상한 350만 원(연령·근속에 따라 변동).</li>\n<li><strong>공통 자격</strong> — 산재보험 적용 사업장에서 6개월 이상 사업영위 + 근로자 본인이 퇴직일로부터 일정 기간 내 신청.</li>\n<li><strong>병행 가능</strong> — 간이대지급금 받은 후 일반대지급금으로 추가 회수 가능한 사례 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사업주가 잠적·연락두절이라도 노동청 체불사실 확인서가 있으면 간이대지급금 신청이 가능합니다. 빠르고 신속한 회수 트랙입니다.</blockquote>',
      },
      {
        title: '신청 자격·금액·기한 핵심 정리',
        content:
          '<p><strong style="color:#1e3a5f">근로복지공단 도산대지급금 신청 시 꼭 확인할 항목입니다.</strong></p>\n<ul>\n<li><strong>신청기한</strong> — 간이대지급금: 체불사실 확인일·판결 확정일로부터 6개월 내. 일반대지급금: 도산 등 사실 인정일로부터 2년 내.</li>\n<li><strong>금액 한도</strong> — 최근 3개월 임금 + 최종 3년 퇴직금 한도. 상한액은 매년 고시. 본인 평균임금 × 한도 일수로 계산.</li>\n<li><strong>차액 회수</strong> — 도산대지급금으로 못 받은 차액은 사업주에 대한 민사 청구·강제집행으로 별도 회수 검토 가능.</li>\n<li><strong>주의</strong> — 근로기준법상 근로자 자격 충족 필요. 위탁계약·프리랜서 형식이라도 근로자성 인정 가능 사례 있음(대법원 2023다219752 취지).</li>\n</ul>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 도산대지급금 신청 5단계',
        content:
          '<p><strong style="color:#1e3a5f">근로복지공단 + 고용노동부 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 노동청 체불 신고</strong> (즉시) — 노동포털(labor.moel.go.kr) 또는 관할 지방고용노동지청. 임금·퇴직금 체불 진정. 처리기간 25일.</li>\n<li><strong>2단계 — 체불사실 확인서 발급 (간이대지급금)</strong> — 노동청 시정지시·확인서 발급. 사업주 폐업·잠적이라도 발급 가능한 경우 다수.</li>\n<li><strong>3단계 — 일반대지급금이라면 법원 도산 절차</strong> (사정에 따라) — 회생·파산 신청 또는 사실상 도산 인정 신청. 처리기간 6개월~1년+.</li>\n<li><strong>4단계 — 근로복지공단에 도산대지급금 신청</strong> (간이: 6개월 / 일반: 2년 내) — 근로복지공단 1588-0075. 신청서 + 체불사실 확인서·판결문·도산 결정서 + 임금·퇴직금 산정내역 + 통장사본.</li>\n<li><strong>5단계 — 차액 회수</strong> (필요 시) — 도산대지급금으로 못 받은 차액은 사업주 대상 민사 청구 + 강제집행. 사업주 재산 파악 어려우면 채무불이행자명부등재·재산명시 신청 활용.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폐업·도산 시 도산대지급금, AI로 자격을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">근속·폐업 시점·체불 항목을 입력하면 신청 자격·금액 한도·절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">퇴직금 계산과 청구 절차, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 / ⚠️ 다툼 포인트 / 🏛️ 신청·상담 경로',
        content:
          '<h4>📋 준비서류 체크리스트</h4>\n<ul>\n<li>근로계약서·취업규칙·급여명세서 (최근 3년)</li>\n<li>이직확인서·퇴직증명서·고용보험 이력</li>\n<li>노동청 체불사실 확인서 (간이대지급금)</li>\n<li>법원 회생·파산 결정문 또는 도산 등 사실 인정서 (일반대지급금)</li>\n<li>임금·퇴직금 산정내역 (회사 명세 또는 본인 작성)</li>\n<li>본인 통장사본·신분증</li>\n<li>사업주 폐업·잠적 입증 자료 (방문기록·등기부 등)</li>\n</ul>\n<h4>⚠️ 다툼 포인트</h4>\n<ul>\n<li>"근로자성 인정" — 위탁·프리랜서 형식이라도 종속적 근로 실질이 있으면 인정 가능(대법원 2023다219752 취지).</li>\n<li>"산재보험 적용" — 적용 사업장 확인. 미적용 시 다른 트랙 검토.</li>\n<li>"신청기한" — 6개월·2년 기한 엄수. 늦으면 권리 소멸.</li>\n</ul>\n<h4>🏛️ 신청·상담 경로</h4>\n<ul>\n<li>근로복지공단 1588-0075 — 도산대지급금 안내·접수</li>\n<li>고용노동부 노동포털 (labor.moel.go.kr) — 체불 진정</li>\n<li>고용노동부 고객상담센터 1350 — 무료 안내</li>\n<li>대한법률구조공단 132 — 무료 법률상담</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위탁계약 형식이라도 근로자성 인정 가능',
        summary:
          '대법원 2023다219752 사건(대법원, 2025.07.03 선고)에서 법원은 보험회사와 교육매니저 위촉계약을 체결한 후 약 5~9년간 신입 보험설계사 등을 교육한 사람들에 대해, 회사가 업무 내용을 정하고 업무 수행 과정에서 상당한 지휘·감독을 한 사정 등에 비추어 임금을 목적으로 종속적인 관계에서 근로를 제공한 근로기준법상 근로자에 해당한다고 볼 소지가 크다고 판시했습니다.',
        takeaway: '위탁·프리랜서 형식이라도 종속적 근로 실질이 있으면 근로자성 인정 → 도산대지급금 신청 자격 확보 가능. 계약 명목이 아니라 실질로 판단됩니다.',
      },
    ],
    faq: [
      {
        question: '사업주가 잠적했는데도 도산대지급금 받을 수 있나요?',
        answer:
          '<strong>네. 노동청 체불사실 확인서가 있으면 간이대지급금 신청이 가능합니다.</strong> 사업주 잠적이 오히려 일반대지급금 \'사실상 도산\' 인정의 한 사정으로 활용될 수 있어요.',
      },
      {
        question: '간이대지급금 한도가 어떻게 되나요?',
        answer:
          '<strong>임금 700만 원 + 퇴직금 700만 원, 합산 상한 1,000만 원입니다.</strong> 한도 초과분은 사업주 대상 민사 청구로 별도 회수 검토.',
      },
      {
        question: '신청기한은 언제까지인가요?',
        answer:
          '<strong>간이: 체불사실 확인일·판결 확정일로부터 6개월 내. 일반: 도산 등 사실 인정일로부터 2년 내입니다.</strong> 늦으면 권리 소멸하니 빠른 신청이 안전해요.',
      },
      {
        question: '프리랜서 계약인데 신청 가능한가요?',
        answer:
          '<strong>형식상 위탁이라도 종속적 근로 실질이 있으면 근로자성 인정 가능합니다(대법원 2023다219752).</strong> 업무 지휘·근태 관리 자료를 모아두세요.',
      },
      {
        question: '도산대지급금으로 못 받은 차액은 어떻게 회수하나요?',
        answer:
          '<strong>사업주 대상 민사 청구 + 강제집행으로 별도 회수가 가능합니다.</strong> 재산 파악 어려우면 재산명시·채무불이행자명부등재 신청을 검토해보세요.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직 후 미지급 수당 청구', href: '/guide/wage/wage-resigned-unpaid-allowance-claim' },
      { label: '평균임금 상여·연차수당 산입', href: '/guide/retirement/retirement-average-wage-bonus-dispute' },
      { label: '퇴직금 14일 청산 의무', href: '/guide/retirement/retirement-pay-14day-rule-detail' },
      { label: '퇴직금 미지급 노동청 진정', href: '/guide/retirement/retirement-pay-complaint' },
      { label: '임금 지연이자 연 20% 청구', href: '/guide/wage/wage-late-payment-interest-claim' },
    ],
  },
];
