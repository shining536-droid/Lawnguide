import { SpokePage } from '../spoke-pages';

// batch65 wage(2) + unemployment(1) + retirement(2) — 5개 (2026-05-15)
//
// 고유 존재 이유:
// 1. wage-incentive-target-unilateral-revise-track — 인센티브 목표치 일방 상향 변경으로 사실상 미지급, 관행적 임금성 다툼 (기존 incentive-* 부재).
// 2. wage-night-shift-allowance-base-included-track — 야간수당이 기본급에 포함됐다는 회사 주장, 포괄임금 한계 다툼 (기존 night-* 부재, 포괄임금 결합).
// 3. unemployment-spouse-relocation-job-transfer-resign-track — 배우자 직장 발령 동반이주 자진퇴사 정당사유 (기존 unemployment-* 자녀양육은 batch64, 본 페이지는 배우자 사유 특수).
// 4. retirement-db-to-dc-pension-conversion-loss-track — DB→DC 강제 전환 시 손해·동의 효력 다툼 (기존 retirement-* 부재 영역).
// 5. retirement-overseas-assignment-period-included-track — 해외 파견 기간 퇴직금 산정 산입 여부 (기존 overseas-* 부재).

export const spokesBatch65WageUnempRetire: SpokePage[] = [
  // ─── 1. wage-incentive-target-unilateral-revise-track ───
  {
    domain: 'wage',
    slug: 'wage-incentive-target-unilateral-revise-track',
    keyword: '인센티브 목표 일방 상향',
    questionKeyword: '회사가 인센티브 목표치를 일방적으로 올려서 사실상 못 받게 됐어요. 청구 가능한가요?',
    ctaKeyword: '인센티브 목표 변경 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '인센티브 목표 일방 상향 — 5단계 임금성 다툼 정리 | 로앤가이드',
      description:
        '회사가 인센티브 목표치를 일방적으로 올려 사실상 못 받게 됐다면 관행적 임금성·차액 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3년간 매분기 매출 110% 달성 시 기본급 30% 인센티브를 받아왔는데, 올해부터 \'경영 환경 변화\'라며 목표가 갑자기 140%로 상향. 결국 같은 영업 성과로도 인센티브 0원. 같은 시기 임원 성과급은 그대로 지급됐고, 사전 협의도 없었습니다." 인센티브가 ① 정기적·일률적·고정적으로 지급되어 왔다면 ② 관행적 임금성으로 평가될 여지가 있고 ③ 산정 기준의 일방 변경은 근로조건 불이익 변경으로 다툼이 가능한 영역. 단순 재량적 보너스가 아니라 \"사실상 임금\"으로 평가되면 일방 상향은 근로계약 위반이 됩니다. 대응은 ① 지급 이력 ② 일방 변경 입증 ③ 노동청 진정 ④ 차액 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 인센티브 목표 일방 변경 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 이력·관행·변경·진정·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 지급 이력 입증</strong> — 3년 이상 정기 지급이면 관행 강력.</li>\n<li><strong>② 산정 기준 일방 변경</strong> — 사전 협의·동의 부재 입증.</li>\n<li><strong>③ 노동청 임금체불 진정</strong> — 미지급 인센티브 청구.</li>\n<li><strong>④ 평등 적용 점검</strong> — 임원·일부만 정상 지급 시 차별.</li>\n<li><strong>⑤ 민사 임금청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 인센티브가 정기·일률·고정적이면 임금성 평가 → 산정 기준 일방 변경은 근로조건 불이익 변경으로 무효 평가 여지. 임원 성과급 비교가 차별·강요 입증의 핵심 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·진정·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 지급 이력 보존 (즉시)</strong> — 3년치 인센티브 지급내역·산정표·취업규칙.</li>\n<li><strong>2단계 — 변경 통지 자료 (1~2주)</strong> — 목표치 변경 메일·공지·회의록.</li>\n<li><strong>3단계 — 노동청 임금체불 진정 (1~3개월)</strong> — 미지급 차액 신청.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 시정 권고·검찰 송치.</li>\n<li><strong>5단계 — 민사 임금청구·손해배상</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">인센티브 목표 일방 변경 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 이력·기준·비교 갈래입니다.</strong></p>\n<ul>\n<li><strong>3년치 인센티브 지급내역·이체 내역</strong></li>\n<li><strong>인센티브 산정표·KPI 기준 (변경 전 vs 후)</strong></li>\n<li><strong>취업규칙·인센티브 규정·근로계약서</strong></li>\n<li><strong>목표치 변경 통지·공지·회의록</strong></li>\n<li><strong>동료 진술서 (전 직원 동일 변경)</strong></li>\n<li><strong>임원 성과급 지급 자료 (비교용)</strong></li>\n<li><strong>본인 영업 성과 자료 (목표 달성 입증)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 변경 통지가 \"메일 한 통\" 수준이고 사전 협의·동의 절차가 부재했다면 일방 변경의 직접 증거. 임원 성과급은 그대로 지급된 자료가 차별 입증에 결정적.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임금성 vs 재량적 보너스</strong> — 정기·일률·고정 3요소 심사.</li>\n<li><strong>일방 변경 효력</strong> — 사전 협의·동의 부재 시 불이익 변경 평가.</li>\n<li><strong>임원·일부 차별</strong> — 평등 적용 부재 시 차별·강요 사정.</li>\n<li><strong>경영 사정 주장</strong> — 객관적 재무 자료로 검증.</li>\n<li><strong>3년 시효</strong> — 분기별 별도 시효.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 인센티브 임금성 평가',
        summary:
          '대법원 2021다248299(대법원, 2026.01.29 선고) 영역에서 법원은 회사가 재무실적과 자본비용 등을 고려하여 산정한 사내유보의 일정액을 임직원에게 분배하는 형태의 인센티브에서 발생한 일정한 부가가치가 임금성을 가진다고 평가될 여지가 있는지를 다툰 사례 흐름이 있습니다.',
        takeaway: '정기 지급된 인센티브는 임금성 평가 가능. 산정 기준 일방 변경은 불이익 변경으로 차액 청구권 발생.',
      },
    ],
    faq: [
      {
        question: '인센티브가 매번 다른데도 관행적 임금인가요?',
        answer:
          '<strong>지급 금액보다 산정 기준의 정기성·일률성·고정성이 평가 기준입니다.</strong>',
      },
      {
        question: '취업규칙에 "회사 재량"이라고 적혀 있어요',
        answer:
          '<strong>실제 운영 양태(3년 이상 정기 지급)가 더 결정적인 평가 사정입니다.</strong>',
      },
      {
        question: '임원 성과급은 그대로 지급됐어요',
        answer:
          '<strong>평등 적용 부재는 일방 변경 효력 부정의 강력 사정입니다.</strong>',
      },
      {
        question: '변경 동의서에 사인했어요',
        answer:
          '<strong>강요·기망 입증 시 의사표시 취소가 가능합니다.</strong> 변경 사유·임원 비교 자료가 핵심.',
      },
      {
        question: '시효는 언제 시작되나요?',
        answer:
          '<strong>각 인센티브 지급 시점부터 3년입니다.</strong> 분기별 별도 진행.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 신고', href: '/guide/wage/wage-unpaid-complaint-procedure' },
      { label: '근로조건 불이익 변경', href: '/guide/wage/wage-unfavorable-change-consent' },
      { label: '통상임금 계산', href: '/guide/wage/wage-ordinary-wage-calculation' },
      { label: '임금 시효', href: '/guide/wage/wage-claim-statute-of-limitations' },
      { label: '간이대지급금', href: '/guide/wage/wage-simplified-replacement-payment' },
    ],
  },

  // ─── 2. wage-night-shift-allowance-base-included-track ───
  {
    domain: 'wage',
    slug: 'wage-night-shift-allowance-base-included-track',
    keyword: '야간수당 기본급 포함 주장',
    questionKeyword: '회사가 야간수당이 기본급에 포함됐다고 별도 지급을 거부합니다. 청구 가능한가요?',
    ctaKeyword: '포괄임금 야간수당 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '야간수당 기본급 포함 주장 — 5단계 포괄임금 한계 다툼 | 로앤가이드',
      description:
        '회사가 야간수당을 기본급에 포함했다며 별도 지급을 거부한다면 포괄임금 효력·차액 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"교대근무 6년차인데 매일 야간(22시~익일 6시) 4시간씩 일해도 야간수당이 0원. 회사는 \'기본급에 포함된 포괄임금\'이라고 주장합니다. 그런데 계약서에는 \'기본급 250만원\'으로만 적혀 있고 야간수당 분 표시가 없어요. 같은 업종 동종 회사보다 시급도 낮습니다." 포괄임금제는 ① 근로시간 산정이 어려운 직종 ② 명확한 약정 ③ 근로자에게 불이익하지 않을 것 모두 충족해야 효력이 평가되는 영역. 단순히 \"수당 포함\"이라고 한 줄 적은 것만으로는 부족하고, 야간·연장·휴일수당 각 항목 분리·금액 명시가 핵심 다툼이 됩니다. 대응은 ① 계약서 분리 점검 ② 시급 비교 ③ 노동청 진정 ④ 차액 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 포괄임금 야간수당 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 분리·시급·진정·차액·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 수당 항목 분리 명시 여부</strong> — 야간·연장·휴일 각 금액 표시.</li>\n<li><strong>② 시급 비교</strong> — 최저임금·동종업계와 비교.</li>\n<li><strong>③ 노동청 임금체불 진정</strong> — 미지급 야간수당.</li>\n<li><strong>④ 차액 청구</strong> — 통상시급 × 50% × 야간시간.</li>\n<li><strong>⑤ 민사 임금청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 포괄임금은 \"수당 포함\" 한 줄로는 부족한 영역. 야간·연장·휴일 각 항목 분리·금액 명시가 효력 평가의 핵심 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·진정·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약서·수당 분리 점검 (즉시)</strong> — 야간·연장·휴일 금액 명시 확인.</li>\n<li><strong>2단계 — 시급 비교 (1주)</strong> — 최저임금·동종업계 시급과 대조.</li>\n<li><strong>3단계 — 노동청 임금체불 진정</strong> — 미지급 야간수당 신청.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 시정 권고·검찰 송치.</li>\n<li><strong>5단계 — 민사 임금청구·손해배상</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 야근수당 신고 가능성, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">포괄임금 야간수당 다툼 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·근무·비교 갈래입니다.</strong></p>\n<ul>\n<li><strong>근로계약서 (포괄임금 조항)</strong></li>\n<li><strong>급여명세서 (수당 항목 분리 확인)</strong></li>\n<li><strong>근무표·교대표 (야간시간 입증)</strong></li>\n<li><strong>출퇴근 기록·전자 입출입 기록</strong></li>\n<li><strong>취업규칙·임금규정</strong></li>\n<li><strong>같은 업종 동종 회사 시급 자료 (비교)</strong></li>\n<li><strong>최저임금 고시 (해당 연도)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 계약서에 \"수당 포함 월 250만원\" 한 줄만 있으면 분리 부재로 포괄임금 효력 부정 가능. 야간시간 입증을 위해 출퇴근 기록·교대표를 미리 확보.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>근로시간 산정 어려움</strong> — 교대근무는 산정 가능 → 포괄임금 적용 제한.</li>\n<li><strong>명확한 약정</strong> — 각 수당 분리·금액 명시 부재 시 무효.</li>\n<li><strong>근로자 불이익</strong> — 실제 수당 합산 대비 부족하면 차액 청구.</li>\n<li><strong>최저임금 위반</strong> — 야간 가산 후 시급이 최저임금 미달 시 별도 다툼.</li>\n<li><strong>3년 시효</strong> — 각 야간 근무일별 별도 진행.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금제 효력',
        summary:
          '대법원 2020다300299(대법원, 2024.12.26 선고) 영역에서 법원은 포괄임금계약에 의해 지급된 임금이 최저임금에 미달하는 경우 포괄임금계약이 유효하다고 볼 수 있는지, 이때 최저임금 미달 여부 판단을 위한 비교대상 시급을 어떻게 산정해야 하는지를 다툰 사례 흐름이 있습니다.',
        takeaway: '포괄임금이라도 최저임금 미달·수당 분리 부재 시 무효 평가 가능. 차액은 통상시급 기준으로 재계산.',
      },
    ],
    faq: [
      {
        question: '계약서에 "포괄임금"이라고 적혀 있으면 청구 못 하나요?',
        answer:
          '<strong>각 수당 항목 분리·금액 명시 부재 시 효력 부정 가능합니다.</strong>',
      },
      {
        question: '교대근무도 포괄임금 적용되나요?',
        answer:
          '<strong>근로시간 산정이 가능한 교대근무는 포괄임금 적용 제한적입니다.</strong>',
      },
      {
        question: '야간수당 계산은 어떻게 하나요?',
        answer:
          '<strong>통상시급 × 50% × 야간시간(22시~익일 6시)입니다.</strong> 5인 이상 사업장 적용.',
      },
      {
        question: '시급이 최저임금 미달이면 어떻게 되나요?',
        answer:
          '<strong>최저임금 위반 별도 청구가 가능한 영역입니다.</strong>',
      },
      {
        question: '시효는 언제부터 시작되나요?',
        answer:
          '<strong>각 야간 근무일 임금 지급일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '야근수당 신고 가능성, AI로 확인하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 신고', href: '/guide/wage/wage-unpaid-complaint-procedure' },
      { label: '연장근로수당', href: '/guide/wage/wage-overtime-allowance-claim' },
      { label: '통상임금 계산', href: '/guide/wage/wage-ordinary-wage-calculation' },
      { label: '임금 시효', href: '/guide/wage/wage-claim-statute-of-limitations' },
      { label: '간이대지급금', href: '/guide/wage/wage-simplified-replacement-payment' },
    ],
  },

  // ─── 3. unemployment-spouse-relocation-job-transfer-resign-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-spouse-relocation-job-transfer-resign-track',
    keyword: '배우자 발령 동반이주 자진퇴사',
    questionKeyword: '배우자 직장 발령으로 동반 이주하면서 자진퇴사했는데 실업급여 받을 수 있나요?',
    ctaKeyword: '배우자 이주 자진퇴사 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '배우자 발령 동반 이주 자진퇴사 — 5단계 실업급여 정당사유 정리 | 로앤가이드',
      description:
        '배우자 직장 발령으로 동반 이주 자진퇴사했다면 실업급여 정당사유 5가지 인정 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배우자가 지방으로 직장 발령을 받아 가족이 함께 이주해야 했어요. 기존 직장은 통근이 불가능한 거리(왕복 4시간 이상)라 자진퇴사. 그런데 고용센터에서 \'개인 사정 자진퇴사\'로 분류되어 수급 자격이 제한된다는 안내를 받았습니다." 고용보험법 시행규칙은 \"배우자·부양 가족과의 동거를 위한 거소 이전\"으로 통근이 어려워진 경우를 자진퇴사 정당 사유로 명시한 영역. 통근 거리·소요 시간·대중교통 가능성이 핵심 입증 자료가 됩니다. 대응은 ① 거리·통근시간 입증 ② 배우자 발령 자료 ③ 수급 신청 ④ 이의신청 ⑤ 행정 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 배우자 동반 이주 자진퇴사 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사유·이주·통근·신청·이의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 배우자 발령 사실</strong> — 인사명령서·재직증명.</li>\n<li><strong>② 동반 이주 사실</strong> — 주민등록 이전·임대차계약.</li>\n<li><strong>③ 통근 곤란성 입증</strong> — 왕복 3시간 이상·대중교통 부재.</li>\n<li><strong>④ 수급 신청 (이직일 12개월 내)</strong> — 정당 사유 기재.</li>\n<li><strong>⑤ 거부 시 이의신청·심사청구 (90일)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 시행규칙 상 동거 가족 이주에 따른 통근 곤란은 정당 사유 인정 영역. 통근시간·대중교통 부재·자녀 양육 등 가족 사정 결합 시 인정률이 올라가는 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신청 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·신청·이의 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 배우자 발령·이주 자료 보존 (즉시)</strong> — 인사명령서·전입신고.</li>\n<li><strong>2단계 — 통근 곤란 입증 (1~2주)</strong> — 거리·시간·대중교통 자료.</li>\n<li><strong>3단계 — 고용센터 수급 신청 (이직일 12개월 내)</strong> — 정당사유 자진퇴사 기재.</li>\n<li><strong>4단계 — 거부 시 이의신청 (90일 내)</strong> — 고용보험심사관.</li>\n<li><strong>5단계 — 심사청구·재심사청구 (90일)</strong> — 고용보험심사위원회.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">배우자 동반 이주 자진퇴사 정당사유 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 발령·이주·통근 갈래입니다.</strong></p>\n<ul>\n<li><strong>배우자 인사명령서·재직증명서·발령 통지</strong></li>\n<li><strong>주민등록등본 (이전 전 vs 후 주소)</strong></li>\n<li><strong>새 거주지 임대차계약서·매매계약서</strong></li>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>통근 거리·시간 자료 (지도·대중교통 시간표)</strong></li>\n<li><strong>이직확인서·고용보험 자격 확인</strong></li>\n<li><strong>회사에 통근·재택 요청·거부 자료 (있을 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 왕복 3시간 이상 또는 대중교통 부재로 출퇴근이 사실상 불가능한 정황 입증이 핵심. 카카오맵·네이버지도 캡처도 객관 자료로 활용 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>통근 곤란 기준</strong> — 왕복 3시간 이상 또는 대중교통 부재.</li>\n<li><strong>이주 시점·자진퇴사 시점</strong> — 인접해야 정당사유 인정에 유리.</li>\n<li><strong>회사 요청 흔적</strong> — 통근·재택·휴직 요청·거부 입증 시 유리.</li>\n<li><strong>12개월 신청 기간</strong> — 이직일 후 12개월 경과 시 수급권 소멸.</li>\n<li><strong>이의신청 90일</strong> — 거부 처분 통지 후 90일.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 고객센터 1350</strong></li>\n<li><strong>고용보험 1577-7114</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 배우자 동반 이주 정당사유',
        summary:
          '고용보험심사위원회 2020고심 제112호(고용보험심사위원회, 2020.08.12) 영역에서 위원회는 근로자가 직장에 다니다가 배우자가 친정의 부양사정(가족 사유)으로 이주한 경우와 같이, 배우자·부양 가족의 사정으로 인한 거소 이전과 그에 따른 통근 곤란이 자진퇴사 정당사유에 해당할 수 있다고 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '배우자·가족 동반 이주는 정당사유 인정 영역. 통근 거리·시간 입증이 결정적 사정.',
      },
    ],
    faq: [
      {
        question: '배우자가 자영업으로 지역 이전하는 경우도 인정되나요?',
        answer:
          '<strong>객관적 이주 사실·통근 곤란 입증되면 평가 영역입니다.</strong>',
      },
      {
        question: '이주 후 얼마나 뒤에 퇴사해도 되나요?',
        answer:
          '<strong>이주 시점과 인접할수록 정당사유 인정에 유리합니다.</strong> 통상 이주 직전·직후가 안전.',
      },
      {
        question: '회사에 재택근무·휴직 요청이 필요한가요?',
        answer:
          '<strong>요청·거부 흔적이 있으면 정당사유 인정에 결정적 사정입니다.</strong>',
      },
      {
        question: '왕복 통근이 2시간 30분이면 가능한가요?',
        answer:
          '<strong>3시간이 절대 기준은 아니며 대중교통 가능성·근무시간·자녀 양육 등 종합 평가 영역입니다.</strong>',
      },
      {
        question: '결혼 직후 동거 이주도 인정되나요?',
        answer:
          '<strong>혼인 사실 입증되면 같은 기준으로 평가 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 자진퇴사 정당사유', href: '/guide/unemployment/unemployment-voluntary-just-cause' },
      { label: '실업급여 신청 절차', href: '/guide/unemployment/unemployment-application-procedure' },
      { label: '이직확인서 정정', href: '/guide/unemployment/unemployment-separation-document-correction' },
      { label: '이의신청', href: '/guide/unemployment/unemployment-objection-procedure' },
      { label: '실업급여 수급자격', href: '/guide/unemployment/unemployment-eligibility-requirements' },
    ],
  },

  // ─── 4. retirement-db-to-dc-pension-conversion-loss-track ───
  {
    domain: 'retirement',
    slug: 'retirement-db-to-dc-pension-conversion-loss-track',
    keyword: 'DB DC 강제 전환 손해',
    questionKeyword: '회사가 확정급여형에서 확정기여형으로 강제 전환했는데 손해를 봤어요. 청구 가능한가요?',
    ctaKeyword: 'DB DC 전환 손해 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'DB→DC 강제 전환 손해 — 5단계 동의 효력·차액 정리 | 로앤가이드',
      description:
        '확정급여형에서 확정기여형으로 강제 전환되어 손해를 봤다면 동의 효력·차액 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"15년차 근로자인데 작년에 회사가 \'전 직원 DC(확정기여형)으로 전환\'한다며 동의서에 사인 받았어요. 그런데 올해 임금 인상률보다 DC 운용 수익률이 낮아 퇴직금이 사실상 동결. 같은 시기 신입은 차이가 없는데 장기근속자가 큰 손해를 봤습니다." DB(확정급여형) → DC(확정기여형) 전환은 ① 전 직원 동의 ② 손실 위험 충분한 설명 ③ 자유로운 의사 모두 충족해야 효력 평가가 가능한 영역. 사측의 일방적·부담 회피 목적 전환은 사용자의 부담 자체에 대한 효력 부정 가능성이 있습니다. 대응은 ① 동의 절차 ② 손실 입증 ③ 노동청 진정 ④ 차액 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. DB→DC 강제 전환 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 동의·손실·진정·차액·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 동의 절차 적법성</strong> — 전 직원 동의·설명·자유 의사.</li>\n<li><strong>② 손실 입증</strong> — DB 산정 시 vs DC 운용 시 차액.</li>\n<li><strong>③ 노동청 임금체불 진정</strong> — 미지급 부담분.</li>\n<li><strong>④ 차액 청구</strong> — 사용자 부담분 누락 시.</li>\n<li><strong>⑤ 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: DC 부담분 자체에 대한 효력이 부정될 여지가 있는 영역. 사측이 매년 임금총액 8.33%를 정상 적립하지 않았다면 차액 청구 가능 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·진정·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 전환 자료 보존 (즉시)</strong> — 동의서·취업규칙 변경 공지·회의록.</li>\n<li><strong>2단계 — 손실 산정 (1~2주)</strong> — DB 기준 vs DC 운용 실제.</li>\n<li><strong>3단계 — 노동청 임금체불 진정</strong> — 미적립 부담분·운용 수익 손해.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 시정 권고.</li>\n<li><strong>5단계 — 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">DB→DC 강제 전환 손해 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 동의·운용·손실 갈래입니다.</strong></p>\n<ul>\n<li><strong>DB→DC 전환 동의서 (사본)</strong></li>\n<li><strong>퇴직연금 규정·취업규칙 (변경 전 vs 후)</strong></li>\n<li><strong>전환 설명회 자료·회의록</strong></li>\n<li><strong>DC 운용 내역서·납부 내역 (매년)</strong></li>\n<li><strong>급여명세서 (DC 부담분 적정 여부)</strong></li>\n<li><strong>임금 인상률 자료 (장기 손실 입증)</strong></li>\n<li><strong>동료 진술서 (전 직원 동의 절차 입증)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: DC 부담분은 임금총액의 1/12 이상이 원칙. 매년 실제 적립액이 이에 미치지 못하면 차액 청구 가능. 운용 보고서로 사측 적립 여부 확인.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>동의 효력</strong> — 자유 의사·충분한 설명 부재 시 무효 평가 여지.</li>\n<li><strong>사용자 부담분 적정성</strong> — 임금총액 1/12 이상이 원칙.</li>\n<li><strong>운용 손실 책임</strong> — 원칙적 근로자 부담, 단 사용자 의무 불이행 별도.</li>\n<li><strong>장기근속자 차별</strong> — 신입 vs 장기 손익 격차 입증.</li>\n<li><strong>3년 시효</strong> — 적립 시점별 별도.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — DC 부담분 효력',
        summary:
          '대법원 2018다244877(대법원, 2022.03.17 선고) 영역에서 법원은 확정기여형 퇴직연금제도가 설정된 사업장에서 사용자가 확정기여형 퇴직연금의 부담금을 가산하면서 일정 금액을 근로자에게 지급하여 온 때, 해당 확정기여형 퇴직연금제도의 약정이나 부담금 가산에 관한 자체의 효력을 다툴 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: 'DC 부담분이 임금총액 1/12에 미달하면 미적립 차액 청구 가능. 동의 효력 별도 다툼 가능.',
      },
    ],
    faq: [
      {
        question: 'DC 전환 동의서에 사인했어요',
        answer:
          '<strong>자유 의사·충분한 설명 부재 시 효력 부정 가능합니다.</strong>',
      },
      {
        question: 'DC 운용 손실은 누구 책임인가요?',
        answer:
          '<strong>원칙적 근로자 부담입니다.</strong> 단, 사용자 부담분 미적립은 별도 청구 영역.',
      },
      {
        question: '사용자 부담분은 얼마여야 하나요?',
        answer:
          '<strong>임금총액의 1/12 이상이 원칙입니다.</strong>',
      },
      {
        question: '장기근속자 손해가 큰 경우는요?',
        answer:
          '<strong>전환 시 충분한 설명·자유 의사가 더 엄격히 평가될 여지가 있는 영역입니다.</strong>',
      },
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>각 부담분 적립 시점부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 청구 절차', href: '/guide/retirement/retirement-payment-claim-procedure' },
      { label: '퇴직연금 종류', href: '/guide/retirement/retirement-pension-types' },
      { label: '평균임금 계산', href: '/guide/retirement/retirement-average-wage-calculation' },
      { label: '중간정산 요건', href: '/guide/retirement/retirement-interim-settlement-requirements' },
      { label: '퇴직금 시효', href: '/guide/retirement/retirement-statute-of-limitations' },
    ],
  },

  // ─── 5. retirement-overseas-assignment-period-included-track ───
  {
    domain: 'retirement',
    slug: 'retirement-overseas-assignment-period-included-track',
    keyword: '해외 파견 기간 퇴직금 산정',
    questionKeyword: '해외 파견 5년 기간이 퇴직금 산정에서 빠졌어요. 합산 청구 가능한가요?',
    ctaKeyword: '해외 파견 근속 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외 파견 기간 퇴직금 산정 — 5단계 근속 합산 정리 | 로앤가이드',
      description:
        '해외 파견 기간이 퇴직금 산정에서 누락됐다면 근속 합산·평균임금 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본사 입사 후 8년 근무, 해외 자회사 파견 5년, 복귀 후 본사에서 3년 더 근무하고 퇴직했어요. 그런데 회사는 \'해외 파견 5년은 자회사 근무 기간\'이라며 11년만 인정해 퇴직금을 산정. 파견 기간 인사평가·승진·임금은 모두 본사에서 받았는데도 누락됐습니다." 해외 파견은 ① 본사와의 근로관계 유지 ② 임금·인사·복리 본사 결정 ③ 파견 종료 후 본사 복귀가 인정되면 본사 근속에 통산되는 영역. 형식상 자회사 소속이라도 \"실질적 본사 근무\"로 평가되면 파견 기간 산입이 가능합니다. 대응은 ① 파견 자료 ② 본사 근로관계 입증 ③ 노동청 진정 ④ 차액 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 해외 파견 기간 산입 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 파견·관계·복귀·진정·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 파견 명령·기간</strong> — 본사 인사명령서.</li>\n<li><strong>② 본사 근로관계 유지</strong> — 임금·인사평가·복리 본사 결정.</li>\n<li><strong>③ 파견 종료 후 본사 복귀</strong> — 자동 복귀·승진 등.</li>\n<li><strong>④ 노동청 임금체불 진정</strong> — 누락 근속 차액 청구.</li>\n<li><strong>⑤ 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형식상 자회사 소속이라도 실질적 본사 근무로 평가될 수 있는 영역. 본사가 임금·인사·복리를 직접 결정한 정황이 통산 입증의 핵심 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·진정·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 파견 자료 보존 (즉시)</strong> — 인사명령서·파견 통지·복귀 발령.</li>\n<li><strong>2단계 — 본사 근로관계 입증 (1~2주)</strong> — 임금·평가·복리 자료.</li>\n<li><strong>3단계 — 노동청 임금체불 진정</strong> — 누락 근속 차액 신청.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 시정 권고.</li>\n<li><strong>5단계 — 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외 파견 기간 합산 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 파견·관계·복귀 갈래입니다.</strong></p>\n<ul>\n<li><strong>본사 인사명령서·파견 통지서</strong></li>\n<li><strong>파견 기간 근로계약서·재직증명서</strong></li>\n<li><strong>파견 중 급여명세서·이체 내역 (본사 지급 입증)</strong></li>\n<li><strong>본사 인사평가서·승진 기록 (파견 기간)</strong></li>\n<li><strong>파견 종료 복귀 발령장</strong></li>\n<li><strong>취업규칙·해외파견규정</strong></li>\n<li><strong>4대보험 자격 변동 내역</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 파견 기간에도 본사 급여 시스템·인사평가를 받았다면 본사 근로관계 입증 강력. 4대보험 자격이 본사에 유지됐는지도 핵심 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>본사 vs 자회사 사용자</strong> — 임금·인사·복리 주체가 핵심 징표.</li>\n<li><strong>파견 명령 vs 전적</strong> — 명령은 통산, 전적은 별도 평가.</li>\n<li><strong>4대보험 자격</strong> — 본사 유지 시 통산 강력 사정.</li>\n<li><strong>평균임금 산정</strong> — 퇴직 전 3개월 임금 기준.</li>\n<li><strong>3년 시효</strong> — 퇴직일부터.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 해외 파견과 근속 통산',
        summary:
          '대법원 2015다59146(대법원, 2017.01.25 선고) 영역에서 법원은 회사와 매니지먼트계약을 체결하고 해외 파견되어 매니저로 근무하는 등 본사를 위한 노무를 제공한 경우와 같이, 본사가 임금을 지급하고 종속적인 관계에서 근로를 제공한 근로관계가 인정되는 사정 흐름을 다툰 사례가 있습니다.',
        takeaway: '해외 파견도 본사 근로관계 유지 입증 시 근속 통산. 임금·인사 주체가 본사인 것이 결정적 사정.',
      },
    ],
    faq: [
      {
        question: '파견 중 급여를 자회사에서 받았어요',
        answer:
          '<strong>본사 인사권 행사·복귀 보장 여부가 더 결정적인 평가 사정입니다.</strong>',
      },
      {
        question: '4대보험이 자회사로 옮겨졌으면 어떻게 되나요?',
        answer:
          '<strong>실질 근로관계가 본사에 있었다면 형식 부재는 결정적이지 않은 영역입니다.</strong>',
      },
      {
        question: '파견 종료 후 본사 자동 복귀했어요',
        answer:
          '<strong>본사 근로관계 유지의 강력 입증 사정입니다.</strong>',
      },
      {
        question: '전적 동의서에 사인했으면 통산 못하나요?',
        answer:
          '<strong>강요·기망 입증 시 효력 부정 가능합니다.</strong> 본인 의사 무관 이동이 핵심.',
      },
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>퇴직일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 청구 절차', href: '/guide/retirement/retirement-payment-claim-procedure' },
      { label: '근속 산정 기준', href: '/guide/retirement/retirement-tenure-calculation' },
      { label: '평균임금 계산', href: '/guide/retirement/retirement-average-wage-calculation' },
      { label: '영업양도 승계', href: '/guide/dismissal/dismissal-business-transfer-employment-succession-refused' },
      { label: '퇴직금 시효', href: '/guide/retirement/retirement-statute-of-limitations' },
    ],
  },
];
