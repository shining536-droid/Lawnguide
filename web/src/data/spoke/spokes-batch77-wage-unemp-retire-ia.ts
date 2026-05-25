import { SpokePage } from '../spoke-pages';

// batch77 wage / unemployment / retirement / industrial-accident — 6개 (2026-05-25)
//
// 고유 존재 이유:
// 1. 야간·휴일·연장 가산수당 미지급 — 일반 임금체불 류와 분기. 여기는 '야간·휴일·연장근로 발생 + 50% 가산수당 미산정 + 통상임금 기준 재계산' 트랙. 근기법 제56조 가산수당 결합.
// 2. 연차수당 미지급 — 일반 임금체불 류와 분기. 여기는 '미사용 연차휴가 연차수당 미지급 + 15일 이상 발생 요건 + 청구 시효' 트랙. 근기법 제60조·제61조 결합.
// 3. 계약만료 실업급여 수급 — 일반 실업급여 수급 류와 분기. 여기는 '계약기간 만료 이직 + 피보험단위기간 180일 + 수급자격 제한 여부' 트랙. 고용보험법 제40조·제58조 결합.
// 4. 1년 미만 계속근로 퇴직금 — 일반 퇴직금 청구 류와 분기. 여기는 '계속근로 1년 미만 주장 + 기간 산정 다툼 + 실질 계속근로 입증' 트랙. 근퇴법 제8조 결합.
// 5. 퇴직금 중간정산 무효 후 재산정 — 일반 퇴직금 청구 류와 분기. 여기는 '요건 없는 중간정산 약정 무효 + 전체 계속근로 기준 퇴직금 재산정 + 차액 청구' 트랙. 근퇴법 제8조+제2조 결합.
// 6. 근골격계 질환 산재 — 일반 산재 류와 분기. 여기는 '반복작업 근골격계 질환 + 업무상 재해 인과관계 + 요양급여 신청' 트랙. 산재보험법 제37조+제5조 결합.

export const spokesBatch77WageUnempRetireIa: SpokePage[] = [
  // ─── 1. wage-night-holiday-overtime-premium-track ───
  {
    domain: 'wage',
    slug: 'wage-night-holiday-overtime-premium-track',
    keyword: '야간 휴일 연장 가산수당 미지급',
    questionKeyword: '야간·휴일·연장근로를 했는데 회사가 가산수당(50%)을 제대로 지급하지 않은 것 같아요. 어떻게 청구할 수 있나요?',
    ctaKeyword: '야간 휴일 연장 가산수당 미지급 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '야간 휴일 연장 가산수당 미지급 — 5단계 재산정 점검 | 로앤가이드',
      description:
        '야간·휴일·연장근로 가산수당(50%)이 빠지거나 적게 지급됐다면 통상임금 기준 재산정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"제조업 현장에서 야간조로 근무하는 근로자입니다. 매주 야간근무와 토요일 휴일근로를 반복하고 있고, 월마다 연장근로도 20시간 이상 발생합니다. 그런데 받은 임금명세서를 꼼꼼히 살펴보니 야간·휴일·연장 각각의 가산수당이 제대로 계산됐는지 의심스러운 상태예요. 회사는 \'포괄임금제로 이미 포함돼 있다\'·\'수당은 기본급 기준으로 계산한다\'고 하지만, 실제 법정 가산율이 반영된 금액인지 확인이 안 됩니다." 근로기준법 제56조는 연장·야간(오후 10시~오전 6시)·휴일 근로에 대해 통상임금의 50% 이상을 가산해 지급하도록 정하고, 통상임금은 정기·일률·고정으로 지급되는 임금으로 산정되는 영역입니다. 포괄임금제가 실제 법정 가산수당을 하회하는 경우 그 차액은 청구 가능한지 검토해볼 수 있는 트랙이고, 임금 청구 시효는 3년입니다. 근로자라면 ① 근로기록 ② 통상임금 ③ 차액 산정 ④ 청구·진정 ⑤ 시효 관리 5중 트랙을 정리해둘 수 있습니다. 대응은 ① 기록 ② 산정 ③ 차액 ④ 청구 ⑤ 시효 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 야간 휴일 연장 가산수당 미지급 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 기록·통상임금·차액·청구·시효 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 근로기록 확인</strong> — 야간·휴일·연장근로 발생 시간을 근태·출근부로 정리.</li>\n<li><strong>② 통상임금 산정</strong> — 정기·일률·고정 지급 임금을 기준으로 통상임금 범위 확인.</li>\n<li><strong>③ 법정 가산수당 차액 산정</strong> — 통상임금 × 50% 기준 가산수당과 실제 지급액 차이 계산.</li>\n<li><strong>④ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정.</li>\n<li><strong>⑤ 시효 관리</strong> — 임금 청구 시효 3년·소멸 도과 위험 관리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 포괄임금제라고 해도 실제 법정 가산수당(통상임금 × 50%)에 미달하면 차액 청구가 가능한지 검토해볼 수 있는 영역. 야간·휴일·연장이 중복될 때 각각의 가산율이 제대로 적용됐는지 확인이 핵심 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 야간·휴일·연장 가산수당 미지급 5단계',
        content:
          '<p><strong>A. 고용노동부·근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근로기록·명세서 보존 (즉시)</strong> — 야간·휴일·연장 발생 시간 기록·임금명세서·근태 자료 확보.</li>\n<li><strong>2단계 — 통상임금 확인 (1~2주)</strong> — 정기·일률·고정 지급 항목 정리, 통상임금 범위 산정.</li>\n<li><strong>3단계 — 법정 가산수당 차액 산정 (2~3주)</strong> — 통상임금 × 50% 기준 가산수당 재계산·차액 도출.</li>\n<li><strong>4단계 — 고용노동부 진정 또는 회사 청구 (시효 3년 내)</strong> — 1350 진정 또는 내용증명 발송.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의 협상.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">야간·휴일·연장 가산수당 미지급 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 기록·산정·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>야간·휴일·연장 근로시간 기록 (근태·출근부)</strong></li>\n<li><strong>월별 임금명세서 (가산수당 항목 구분)</strong></li>\n<li><strong>근로계약서·포괄임금제 약정서 (있을 경우)</strong></li>\n<li><strong>통상임금 산정 자료 (기본급·정기수당 내역)</strong></li>\n<li><strong>법정 가산수당 차액 산정표</strong></li>\n<li><strong>취업규칙·단체협약 (가산 기준 규정)</strong></li>\n<li><strong>회사 회신·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 야간·연장·휴일이 같은 날 겹치면 각각의 가산율이 중복 적용되는지 확인이 핵심. 포괄임금 약정이 있어도 실제 지급액이 법정 가산수당 합계에 미달하면 차액 청구를 검토해볼 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>포괄임금제 효력</strong> — 실제 가산수당에 미달하면 차액 청구가 검토되는 영역.</li>\n<li><strong>통상임금 범위</strong> — 가산수당 산정 기준이 되는 통상임금 항목 확인.</li>\n<li><strong>근로시간 입증</strong> — 야간·휴일·연장 발생 시간의 객관적 기록 확보.</li>\n<li><strong>가산율 중복 적용</strong> — 야간+연장·휴일+연장 중복 시 각각의 가산율 적용 여부.</li>\n<li><strong>시효 관리</strong> — 임금 청구 시효 3년·소멸 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (임금체불 신고)</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 임금체불 진정 온라인 (moel.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 통상임금 범위와 포괄임금 약정의 효력 평가',
        summary:
          '대법원 2012다89399(대법원, 2013.12.18 선고) 영역에서 법원은 어떠한 임금이 통상임금에 속하는지 판단하는 기준을 다루면서, 정기·일률·고정으로 지급되는 금품은 명칭과 무관하게 통상임금에 포함될 수 있고 그 통상임금에 속하는 임금을 통상임금에서 제외하기로 한 노사합의의 효력이 문제된 사례 흐름이 있으며, 야간·휴일·연장 가산수당 산정 기준이 되는 통상임금 범위를 검토할 때에도 동일한 기준을 살펴볼 수 있습니다.',
        takeaway: '야간·휴일·연장 가산수당은 통상임금 × 50% 기준으로 산정되는 영역 — 포괄임금 미달분 차액 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '포괄임금제라서 가산수당이 이미 포함됐다는데 맞나요?',
        answer:
          '<strong>포괄임금이 법정 가산수당 합계에 미달하면 차액 청구가 가능한지 검토해볼 수 있는 영역입니다.</strong> 실제 지급액과 법정 가산수당을 비교 산정.',
      },
      {
        question: '야간근무와 연장근무가 겹치면 어떻게 되나요?',
        answer:
          '<strong>야간·연장이 중복되면 각각의 가산율이 적용되는 영역입니다.</strong> 연장(50%)+야간(50%)이 별도 적용되는지 명세서로 확인.',
      },
      {
        question: '가산수당 기준이 되는 통상임금은 어떻게 계산하나요?',
        answer:
          '<strong>정기·일률·고정으로 지급된 임금 항목 합산이 통상임금 산정의 출발점인 영역입니다.</strong> 식대·직책수당 등 포함 여부 확인.',
      },
      {
        question: '몇 년치까지 청구할 수 있나요?',
        answer:
          '<strong>임금 청구 시효는 3년인 영역입니다.</strong> 지급일로부터 3년 내 차액 청구 가능.',
      },
      {
        question: '회사가 시정을 거부하면 어떻게 하나요?',
        answer:
          '<strong>고용노동부 1350 진정 또는 민사 청구를 검토해볼 수 있는 영역입니다.</strong> 근태 기록·명세서로 차액 산정 후 진정.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 진정 서류', href: '/guide/wage/unpaid-wage-complaint-docs' },
      { label: '연장근로수당 청구', href: '/guide/wage/wage-overtime-unpaid-claim' },
      { label: '포괄임금제 차액 청구', href: '/guide/wage/comprehensive-wage-overtime-response' },
      { label: '체불임금 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '퇴사 후 임금', href: '/guide/wage/unpaid-salary-after-resignation' },
    ],
  },

  // ─── 2. wage-annual-leave-allowance-unpaid-track ───
  {
    domain: 'wage',
    slug: 'wage-annual-leave-allowance-unpaid-track',
    keyword: '연차수당 미지급',
    questionKeyword: '퇴사 시 미사용 연차휴가에 대한 연차수당을 받지 못했어요. 청구할 수 있나요?',
    ctaKeyword: '연차수당 미지급 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '연차수당 미지급 — 5단계 미사용 연차수당 청구 점검 | 로앤가이드',
      description:
        '퇴사 후 미사용 연차휴가에 대한 연차수당을 받지 못했다면 청구 요건·시효·절차 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3년 근무한 회사를 최근 퇴사한 근로자입니다. 재직 중 연차휴가를 절반도 쓰지 못한 채 쌓여있었고, 퇴사 시 미사용 연차를 정산해달라고 요청했지만 회사는 \'연차를 쓰지 않은 건 본인 사정\'이라며 수당을 지급하지 않겠다고 했습니다. 연차 사용 촉진 통보를 받은 기억도 없고, 업무가 바빠 사실상 연차를 사용하기 어려운 환경이었어요. 미사용 연차가 수십 일분인데 이게 그냥 사라지는 건지 막막합니다." 근로기준법 제60조는 계속근로 1년에 대해 15일 이상의 유급 연차휴가를 정하고, 제61조는 사용 촉진 절차를 이행하지 않은 사용자는 미사용 연차에 대해 수당을 지급하도록 규정하는 영역입니다. 연차수당 청구 시효는 퇴직일로부터 3년이고, 사용 촉진 절차 준수 여부가 지급 의무의 핵심 분기점이 되는 트랙입니다. 근로자라면 ① 연차 발생 ② 촉진 절차 ③ 미사용 연차 산정 ④ 청구·진정 ⑤ 시효 관리 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 발생 ② 절차 ③ 산정 ④ 청구 ⑤ 시효 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 연차수당 미지급 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 발생·촉진절차·산정·청구·시효 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 연차 발생 확인</strong> — 계속근로 기간·연차 발생 일수를 근태 기록으로 확인.</li>\n<li><strong>② 사용 촉진 절차 여부</strong> — 회사의 연차 사용 촉진 통보(서면·이메일) 여부 확인.</li>\n<li><strong>③ 미사용 연차 산정</strong> — 발생 연차에서 사용 연차를 뺀 미사용 일수 계산.</li>\n<li><strong>④ 연차수당 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정.</li>\n<li><strong>⑤ 시효 관리</strong> — 연차수당 청구 시효 3년·소멸 도과 위험 관리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사용 촉진 절차(서면 통보 2회)를 이행하지 않은 사용자는 미사용 연차에 대해 수당을 지급해야 하는 영역. 촉진 통보를 받은 기억이 없다면 절차 이행 여부부터 확인해볼 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 연차수당 미지급 5단계',
        content:
          '<p><strong>A. 고용노동부·근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근태 기록·명세서 보존 (즉시)</strong> — 연차 발생·사용 내역·급여명세서·근로계약서 확보.</li>\n<li><strong>2단계 — 사용 촉진 절차 여부 확인 (1~2주)</strong> — 회사의 서면 통보(이메일·공문) 수령 여부 정리.</li>\n<li><strong>3단계 — 미사용 연차수당 산정 (2~3주)</strong> — 통상임금 기준 1일분 × 미사용 일수 계산.</li>\n<li><strong>4단계 — 고용노동부 진정 또는 회사 청구 (시효 3년 내)</strong> — 1350 진정 또는 내용증명 발송.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의 협상.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">연차수당 미지급 청구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 발생·절차·산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>연차 발생·사용 내역 (근태 기록·연차대장)</strong></li>\n<li><strong>월별 임금명세서 (통상임금 항목 포함)</strong></li>\n<li><strong>근로계약서·취업규칙 (연차 관련 규정)</strong></li>\n<li><strong>회사 사용 촉진 통보 자료 (서면·이메일·없음 확인)</strong></li>\n<li><strong>미사용 연차수당 산정표 (통상임금 × 미사용 일수)</strong></li>\n<li><strong>퇴직 확인서·이직확인서</strong></li>\n<li><strong>회사 회신·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 연차수당은 통상임금 1일분 × 미사용 일수로 산정되는 영역. 촉진 통보 기록이 없거나 통보 절차가 법정 요건에 미달하면 수당 청구 여지가 커지는 트랙입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사용 촉진 절차 이행 여부</strong> — 서면 통보 2회 절차 충족 여부가 지급 의무의 분기점.</li>\n<li><strong>연차 발생 일수</strong> — 계속근로 기간·출근율에 따른 발생 일수 산정.</li>\n<li><strong>통상임금 기준</strong> — 1일분 연차수당 산정 기준이 되는 통상임금 범위.</li>\n<li><strong>사용 불가 환경 주장</strong> — 업무 사정으로 연차 사용이 사실상 불가했던 정황.</li>\n<li><strong>시효 관리</strong> — 퇴직일로부터 3년 내 청구 필요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (임금체불 신고)</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 임금체불 진정 온라인 (moel.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 연차수당 지급 의무와 사용 촉진 절차 미이행 평가',
        summary:
          '대법원 95다32631(대법원, 1996.12.23 선고) 영역에서 법원은 취업규칙이 근로자 집단의 동의 없이 불이익하게 변경된 경우의 효력을 다루면서, 사용자가 정한 규정이 근로자에게 불이익한 경우 동의 절차 없이는 효력이 제한될 수 있다는 취지 흐름이 있고, 연차수당 지급 의무를 배제하거나 제한하는 취업규칙 조항의 효력 평가에도 동일한 기준을 살펴볼 수 있습니다.',
        takeaway: '연차수당은 사용 촉진 절차 미이행 시 지급 의무가 발생하는 영역 — 미사용 연차수당 차액 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '연차를 쓰지 않으면 수당으로 받을 수 있나요?',
        answer:
          '<strong>사용 촉진 절차를 이행하지 않은 경우 수당 청구가 가능한지 검토해볼 수 있는 영역입니다.</strong> 촉진 통보 여부가 핵심 분기.',
      },
      {
        question: '연차 사용 촉진 통보를 받은 기억이 없어요',
        answer:
          '<strong>서면 통보 2회 절차를 이행하지 않으면 수당 지급 의무가 남는 영역입니다.</strong> 이메일·공문 수령 여부 확인.',
      },
      {
        question: '연차수당은 얼마로 계산하나요?',
        answer:
          '<strong>통상임금 1일분 × 미사용 연차 일수로 산정하는 영역입니다.</strong> 통상임금 항목·미사용 일수 정리.',
      },
      {
        question: '퇴사 후 얼마나 지나도 청구할 수 있나요?',
        answer:
          '<strong>연차수당 청구 시효는 퇴직일로부터 3년인 영역입니다.</strong> 3년 이내 청구 가능.',
      },
      {
        question: '재직 중에도 연차수당을 청구할 수 있나요?',
        answer:
          '<strong>연차 기산일 이후 미사용분은 재직 중에도 청구를 검토해볼 수 있는 영역입니다.</strong> 발생 연도 다음 해 분부터 청구 검토.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 진정 서류', href: '/guide/wage/unpaid-wage-complaint-docs' },
      { label: '연차수당 미지급 대응', href: '/guide/wage/annual-leave-pay-unpaid-response' },
      { label: '체불임금 신고 절차', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '퇴사 후 임금', href: '/guide/wage/unpaid-salary-after-resignation' },
      { label: '최저임금 위반 진정', href: '/guide/wage/minimum-wage-violation-complaint' },
    ],
  },

  // ─── 3. unemployment-contract-expiry-eligibility-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-contract-expiry-eligibility-track',
    keyword: '계약만료 실업급여 수급',
    questionKeyword: '계약기간이 만료돼 퇴사했는데 실업급여(구직급여)를 받을 수 있나요?',
    ctaKeyword: '계약만료 실업급여 수급 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '계약만료 실업급여 수급 — 5단계 수급자격 점검 | 로앤가이드',
      description:
        '계약기간 만료로 이직했다면 피보험단위기간·수급자격 제한 여부 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"1년 계약직으로 일하다 계약기간이 끝나 이직한 근로자입니다. 회사가 재계약을 해주지 않았고, 본인도 계속 일하고 싶었지만 선택의 여지가 없었어요. 고용보험은 입사부터 꼬박꼬박 납부해왔고, 이전 직장까지 합치면 피보험 기간도 꽤 됩니다. 그런데 계약만료가 \'자진퇴사\'로 처리되는 건 아닌지, 이직확인서에 이직 사유가 어떻게 기재되는지가 막막한 상태예요." 고용보험법 제40조는 구직급여 수급자격으로 이직 전 18개월 중 피보험단위기간 180일 이상을 정하고, 제58조는 수급자격 제한 사유를 규정하지만, 계약기간 만료로 인한 이직은 원칙적으로 수급자격이 제한되지 않는 영역입니다. 다만 갱신 거절·재계약 거부·기간 산정 등 세부 사정에 따라 이직사유 기재와 수급자격 판정이 달라질 수 있어 확인이 필요한 트랙입니다. ① 이직사유 확인 ② 피보험단위기간 ③ 수급자격 제한 여부 ④ 수급 신청 ⑤ 불인정 시 심사 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 사유 ② 기간 ③ 제한 ④ 신청 ⑤ 심사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 계약만료 실업급여 수급 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 이직사유·피보험기간·제한여부·신청·심사 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 이직사유 확인</strong> — 이직확인서에 계약기간 만료로 기재됐는지 확인.</li>\n<li><strong>② 피보험단위기간</strong> — 이직 전 18개월 중 180일 이상 충족 확인.</li>\n<li><strong>③ 수급자격 제한 여부</strong> — 계약만료 이직의 수급자격 제한 사유 해당 여부 검토.</li>\n<li><strong>④ 수급 신청</strong> — 워크넷 등록 + 고용센터 수급 신청.</li>\n<li><strong>⑤ 불인정 시 심사</strong> — 수급자격 불인정 시 심사 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 계약기간 만료는 원칙적으로 수급자격 제한 사유가 아닌 영역. 이직확인서의 이직 사유 기재가 실제 사유와 일치하는지, 피보험단위기간 180일이 충족됐는지가 수급 가능성 점검의 핵심 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 계약만료 실업급여 5단계',
        content:
          '<p><strong>A. 고용노동부·고용보험 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 이직확인서·고용보험 이력 확인 (이직 직후)</strong> — 이직 사유 기재·피보험단위기간 180일 충족 확인.</li>\n<li><strong>2단계 — 워크넷 등록 (이직 후 신속)</strong> — 구직자 등록 후 고용센터 방문 준비.</li>\n<li><strong>3단계 — 고용센터 수급 신청</strong> — 신청서·이직확인서·고용보험 이력 자료 제출.</li>\n<li><strong>4단계 — 수급자격 판정 (고용센터)</strong> — 이직 사유·피보험기간·제한 사유 심사.</li>\n<li><strong>5단계 — 불인정 시 심사 청구 (송달 후 90일 내)</strong> — 고용보험심사위원회 심사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">계약만료 실업급여 수급 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 이직사유·기간·신청 갈래입니다.</strong></p>\n<ul>\n<li><strong>이직확인서 (이직 사유: 계약기간 만료 기재 확인)</strong></li>\n<li><strong>고용보험 피보험단위기간 이력</strong></li>\n<li><strong>근로계약서 (계약기간·갱신 조항 포함)</strong></li>\n<li><strong>고용보험 가입 기간 조회 자료</strong></li>\n<li><strong>워크넷 구직자 등록 확인서</strong></li>\n<li><strong>회사의 재계약 거부 통보 자료 (있을 경우)</strong></li>\n<li><strong>수급 신청서 (고용센터 양식)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이직확인서 이직 사유가 \'계약기간 만료\'로 기재됐는지 꼭 확인. 자진퇴사로 기재됐다면 실제 사유로 정정 신청을 검토해볼 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>이직사유 기재</strong> — 이직확인서 사유가 실제와 다르게 기재된 경우 정정 가능.</li>\n<li><strong>피보험단위기간</strong> — 18개월 중 180일 이상 충족 여부.</li>\n<li><strong>재계약 희망 여부</strong> — 계속 근무 의사가 있었음에도 재계약이 불발된 사정.</li>\n<li><strong>갱신 기대권</strong> — 반복 계약으로 갱신 기대권이 인정될 수 있는지 검토.</li>\n<li><strong>불인정 시 심사</strong> — 송달 후 90일 내 심사 청구 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부·고용보험 1350</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용보험 고객센터 (1588-0075)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 계약기간 만료 이직과 수급자격 제한 판단',
        summary:
          '고용보험심사위원회 2020재결 제72호(고용보험심사위원회, 2020.06.24) 영역에서 심사위원회는 실제와 다른 이직사유로 수급자격을 인정받았더라도 실제 이직사유가 수급자격 제한 사유가 아니라면 부정수급으로 볼 수 없다고 판단했습니다. 계약기간 만료 이직의 수급자격 제한 여부를 검토할 때에도 이직사유의 실질을 살펴볼 수 있는 영역입니다.',
        takeaway: '계약기간 만료 이직은 원칙적으로 수급자격 제한 사유가 아닌 영역 — 이직사유 기재 확인·수급 신청 트랙.',
      },
    ],
    faq: [
      {
        question: '계약만료로 퇴사했는데 실업급여를 받을 수 있나요?',
        answer:
          '<strong>계약기간 만료는 원칙적으로 수급자격 제한 사유가 아닌 영역입니다.</strong> 피보험단위기간 180일 충족 여부 확인.',
      },
      {
        question: '이직확인서에 자진퇴사로 잘못 기재됐어요',
        answer:
          '<strong>실제 사유(계약만료)로 정정 신청을 검토해볼 수 있는 영역입니다.</strong> 고용센터에 정정 신청 절차 확인.',
      },
      {
        question: '단기 계약을 반복했는데 피보험단위기간이 합산되나요?',
        answer:
          '<strong>복수 사업장·계약의 피보험단위기간은 합산 평가하는 영역입니다.</strong> 고용보험 이력 조회로 확인.',
      },
      {
        question: '재계약을 원했는데 회사가 거부했어요. 유리한가요?',
        answer:
          '<strong>재계약 희망 사정은 이직사유 평가에 영향을 줄 수 있는 영역입니다.</strong> 거부 통보 자료를 보관.',
      },
      {
        question: '수급자격 불인정이 나오면 어떻게 하나요?',
        answer:
          '<strong>고용보험심사위원회에 심사를 청구해볼 수 있는 영역입니다.</strong> 결정 송달 후 90일 내 청구.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 신청 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '실업급여 수급 서류', href: '/guide/unemployment/application-required-documents-checklist' },
      { label: '계약만료 실업급여 신청', href: '/guide/unemployment/contract-expiry-benefit-application-order' },
      { label: '수급 중 소득', href: '/guide/unemployment/unemployment-side-income-during-benefit' },
      { label: '자진퇴사 수급 가능', href: '/guide/unemployment/voluntary-resignation-eligibility' },
    ],
  },

  // ─── 4. retirement-under-one-year-eligibility-track ───
  {
    domain: 'retirement',
    slug: 'retirement-under-one-year-eligibility-track',
    keyword: '1년 미만 퇴직금',
    questionKeyword: '회사가 계속근로 1년이 안 됐다며 퇴직금을 안 준다고 해요. 정말 못 받는 건가요?',
    ctaKeyword: '1년 미만 퇴직금 수급 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '1년 미만 퇴직금 — 5단계 계속근로 기간 점검 | 로앤가이드',
      description:
        '회사가 계속근로 1년 미만을 주장하며 퇴직금을 거부한다면 기간 산정 다툼 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"여러 계약서를 거치며 이 회사에서 일해온 근로자입니다. 처음엔 3개월 계약, 그다음엔 6개월, 마지막엔 5개월 계약을 연속으로 체결했어요. 실제로 일을 쉰 적은 없고 계약과 계약 사이도 며칠 공백뿐이었는데, 퇴사할 때 회사는 \'마지막 계약이 5개월이라 1년이 안 된다\'며 퇴직금을 지급하지 않겠다고 했습니다. 본인 입장에서는 총 14개월을 실질적으로 근무한 셈인데, 계약서를 쪼갰다는 이유로 퇴직금이 사라지는 게 맞는 건지 납득이 어렵습니다." 근로자퇴직급여보장법 제8조는 계속근로기간 1년에 대해 30일분 이상의 평균임금을 퇴직금으로 지급하도록 정하고, 계속근로기간 산정에서는 형식적 계약 갱신보다 실질적 근로의 계속성이 기준이 되는 영역입니다. 계약과 계약 사이 공백기간의 성격·갱신 기대 여부·실질 근로 계속성 등이 계속근로 인정의 핵심 검토 사정이 되는 트랙입니다. ① 계약 경위 ② 계속근로 실질 ③ 기간 산정 ④ 청구·진정 ⑤ 시효 관리 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 경위 ② 실질 ③ 산정 ④ 청구 ⑤ 시효 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 1년 미만 퇴직금 계속근로 기간 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·실질·산정·청구·시효 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약 경위 확인</strong> — 계약서별 기간·공백·갱신 경위를 문서로 정리.</li>\n<li><strong>② 계속근로 실질 평가</strong> — 실질적 근로 계속성·공백의 성격 검토.</li>\n<li><strong>③ 계속근로기간 산정</strong> — 전체 실질 계속근로 기간 기준으로 퇴직금 산정.</li>\n<li><strong>④ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 고용노동부 1350 진정.</li>\n<li><strong>⑤ 시효 관리</strong> — 퇴직금 청구 시효 3년·소멸 도과 위험 관리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 계속근로기간은 형식적 계약 갱신이 아니라 실질적 근로 계속성으로 평가하는 영역. 계약과 계약 사이 며칠 공백이 있어도 실질적으로 근로가 끊기지 않았다면 전체 기간을 합산해볼 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 1년 미만 퇴직금 5단계',
        content:
          '<p><strong>A. 고용노동부·근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약서·근태 기록 보존 (즉시)</strong> — 전체 계약서·근태 기록·임금명세서·공백기 증빙 확보.</li>\n<li><strong>2단계 — 계속근로 실질 정리 (1~2주)</strong> — 공백기 사정·업무 연속성·갱신 기대 정황 정리.</li>\n<li><strong>3단계 — 계속근로기간 산정 (2~3주)</strong> — 실질 계속근로 기준 총 기간 계산·퇴직금 산정.</li>\n<li><strong>4단계 — 고용노동부 진정 또는 회사 청구 (시효 3년 내)</strong> — 1350 진정 또는 내용증명.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의 협상.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">1년 미만 계속근로 퇴직금 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·실질·산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>계약별 근로계약서 (갱신·공백 기간 포함)</strong></li>\n<li><strong>전체 근무 기간 근태 기록·출근부</strong></li>\n<li><strong>월별 임금명세서 (공백기 전후 포함)</strong></li>\n<li><strong>갱신 기대 정황 자료 (문자·메일·구두 약속 등)</strong></li>\n<li><strong>공백기 사정 자료 (대기 발령·교육·무급휴가 등)</strong></li>\n<li><strong>실질 계속근로기간 기준 퇴직금 산정표</strong></li>\n<li><strong>회사 회신·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 계약과 계약 사이 공백기가 단순 행정 처리 기간에 불과하거나 실질 업무가 계속됐다는 점이 입증되면 계속근로 인정 여지가 커지는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>계속근로 실질</strong> — 공백기·계약 형식보다 실질 근로 계속성 평가.</li>\n<li><strong>공백기 성격</strong> — 공백이 단순 행정 처리인지, 실질 근로 단절인지 구분.</li>\n<li><strong>갱신 기대</strong> — 반복 갱신으로 계속근로 기대권 인정 여지 검토.</li>\n<li><strong>계약서 분리</strong> — 의도적 계약 분할로 퇴직금 회피 여부 평가.</li>\n<li><strong>시효 관리</strong> — 퇴직금 청구 시효 3년·소멸 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (퇴직금 미지급 신고)</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 퇴직급여 제도 안내 (moel.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 계속근로기간 산정과 일용직 실질 계속근로 평가',
        summary:
          '대법원 93다26168(대법원, 1995.07.11 선고) 영역에서 법원은 형식상 일용직이라도 일용관계가 중단되지 않고 계속돼 온 경우 실질적 계속근로자로 볼 수 있다고 판단했으며, 반드시 매월 일정 일수 이상 근무해야만 계속성 요건을 충족하는 것은 아니라는 취지를 다룬 사례 흐름이 있습니다. 계약서를 분리했더라도 실질 근로가 계속됐다면 계속근로기간 합산을 검토해볼 수 있는 트랙입니다.',
        takeaway: '형식적 계약 분리보다 실질 근로 계속성으로 계속근로기간을 평가하는 영역 — 퇴직금 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '계약서를 쪼갰는데 전체 기간이 합산되나요?',
        answer:
          '<strong>실질 근로 계속성이 인정되면 전체 기간 합산을 검토해볼 수 있는 영역입니다.</strong> 공백 성격·갱신 기대 정황 정리.',
      },
      {
        question: '계약 사이에 며칠 공백이 있어도 되나요?',
        answer:
          '<strong>단순 행정 처리 공백은 계속근로 단절로 보기 어려운 영역입니다.</strong> 공백 사정·실질 업무 연속성 입증.',
      },
      {
        question: '1년이 하루라도 부족하면 퇴직금을 못 받나요?',
        answer:
          '<strong>실질 계속근로기간 합산으로 1년 이상이 되면 청구를 검토해볼 수 있는 영역입니다.</strong> 전체 기간 기준 재산정.',
      },
      {
        question: '회사가 계속근로를 인정하지 않으면 어떻게 하나요?',
        answer:
          '<strong>고용노동부 1350 진정 또는 민사 청구를 검토해볼 수 있는 영역입니다.</strong> 계약서·근태 기록으로 실질 입증.',
      },
      {
        question: '퇴직금 청구 시효가 지나면 어떻게 되나요?',
        answer:
          '<strong>퇴직금 청구 시효는 3년인 영역입니다.</strong> 퇴직일로부터 3년 내 청구 가능.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 진정', href: '/guide/retirement/retirement-pay-complaint' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '1년 미만 수급 가능성', href: '/guide/retirement/retirement-less-than-1year-eligibility' },
      { label: '기간제 합산', href: '/guide/retirement/retirement-fixed-term-aggregation' },
      { label: '중간정산 요건', href: '/guide/retirement/interim-settlement-7-eligible-cases' },
    ],
  },

  // ─── 5. retirement-interim-settlement-invalid-track ───
  {
    domain: 'retirement',
    slug: 'retirement-interim-settlement-invalid-track',
    keyword: '퇴직금 중간정산 무효',
    questionKeyword: '법적 요건 없이 퇴직금 중간정산을 했는데 퇴직 시 다시 전체 기간 기준으로 퇴직금을 받을 수 있나요?',
    ctaKeyword: '퇴직금 중간정산 무효 후 재산정 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '퇴직금 중간정산 무효 후 재산정 — 5단계 청구 점검 | 로앤가이드',
      description:
        '요건 없는 퇴직금 중간정산 후 퇴사했다면 전체 계속근로 기간 기준 재산정·차액 청구 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"한 회사에서 10년째 근무 중인 근로자입니다. 몇 년 전 회사가 \'사정이 어렵다\'며 직원들에게 퇴직금 중간정산을 요청했고, 본인도 어쩔 수 없이 서명했습니다. 당시 법에서 정한 중간정산 요건(주택 구입, 전세보증금 반환 등)에 해당하는 상황도 아니었고, 그냥 회사 사정으로 받은 것이었어요. 최근 퇴사를 준비하면서 알아보니 요건 없는 중간정산은 무효라는 말을 들었는데, 그렇다면 입사부터 전체 기간을 기준으로 퇴직금을 다시 받을 수 있는 건지 궁금합니다." 근로자퇴직급여보장법 제8조 제2항은 주택 구입 등 대통령령이 정한 사유에 해당하는 경우에만 퇴직금 중간정산을 허용하고, 그 외 사유로 한 중간정산 약정은 효력이 부정될 수 있는 영역입니다. 무효인 중간정산이 이뤄진 경우 퇴직 시 전체 계속근로기간을 기준으로 퇴직금 총액을 산정하고, 이미 받은 금액을 공제한 차액을 청구해볼 수 있는 트랙입니다. ① 중간정산 경위 ② 요건 충족 여부 ③ 무효 평가 ④ 재산정·차액 ⑤ 청구·진정 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 경위 ② 요건 ③ 무효 ④ 재산정 ⑤ 청구 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 퇴직금 중간정산 무효 후 재산정 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·요건·무효평가·재산정·청구 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 중간정산 경위 확인</strong> — 중간정산 시점·서류·사유·동의 과정 자료 정리.</li>\n<li><strong>② 법정 요건 충족 여부</strong> — 주택 구입 등 대통령령이 정한 사유 해당 여부 평가.</li>\n<li><strong>③ 무효 평가</strong> — 요건 미충족 시 중간정산 약정 효력 부정 여부 검토.</li>\n<li><strong>④ 전체 기간 기준 재산정</strong> — 입사부터 전체 계속근로기간 기준 퇴직금 총액 계산.</li>\n<li><strong>⑤ 차액 청구·진정 (시효 3년)</strong> — 총액에서 기수령액 공제 후 차액 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 요건 없는 퇴직금 중간정산은 효력이 부정될 수 있는 영역. 무효로 평가되면 퇴직 시 전체 계속근로기간 기준으로 퇴직금을 재산정하고, 이미 받은 금액을 공제한 차액을 청구해볼 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 퇴직금 중간정산 무효 후 재산정 5단계',
        content:
          '<p><strong>A. 고용노동부·근로복지공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 중간정산 자료 보존 (즉시)</strong> — 중간정산 동의서·영수증·사유 서류·근로계약서 확보.</li>\n<li><strong>2단계 — 법정 요건 충족 여부 확인 (1~2주)</strong> — 당시 대통령령 규정 사유(주택 구입 등)에 해당했는지 검토.</li>\n<li><strong>3단계 — 무효 평가 + 재산정 (2~3주)</strong> — 요건 미충족 확인 후 전체 계속근로 기준 퇴직금 총액 재계산.</li>\n<li><strong>4단계 — 고용노동부 진정 또는 회사 청구 (시효 3년 내)</strong> — 1350 진정 또는 내용증명.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의 협상.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">퇴직금 중간정산 무효 후 재산정 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·요건·재산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>중간정산 동의서·영수증·사유 확인 서류</strong></li>\n<li><strong>전체 근로계약서·입사일 확인 서류</strong></li>\n<li><strong>전체 기간 임금명세서 (퇴직 전 3개월 포함)</strong></li>\n<li><strong>중간정산 당시 대통령령 규정 사유 확인 자료</strong></li>\n<li><strong>전체 계속근로기간 기준 퇴직금 총액 산정표</strong></li>\n<li><strong>기수령 중간정산금 영수증·통장 입금 내역</strong></li>\n<li><strong>회사 회신·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 무효인 중간정산도 이미 받은 금액은 공제 후 차액만 청구하는 구조. 중간정산 당시 사유가 대통령령 규정 항목에 해당하지 않았다는 점이 무효 주장의 핵심 자료입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>법정 요건 해당 여부</strong> — 당시 대통령령 사유에 해당했는지가 무효 평가의 분기점.</li>\n<li><strong>동의 효력</strong> — 사실상 강요에 의한 동의의 효력 다툼 여지.</li>\n<li><strong>재산정 기준</strong> — 전체 계속근로기간 기준 퇴직금 총액 산정 방식.</li>\n<li><strong>기수령액 공제</strong> — 이미 받은 중간정산금은 총액에서 공제.</li>\n<li><strong>시효 관리</strong> — 퇴직금 청구 시효 3년·소멸 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (퇴직금 미지급 신고)</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>고용노동부 퇴직급여 제도 안내 (moel.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 요건 없는 퇴직금 중간정산 약정의 효력 평가',
        summary:
          '대법원 2007다90760(대법원, 2010.05.20 선고) 영역에서 법원은 사용자와 근로자가 매월 지급하는 월급과 함께 퇴직금으로 일정 금원을 미리 지급하기로 약정(퇴직금 분할 약정)한 경우라도 그 효력이 근퇴법이 정한 요건을 갖추지 않으면 부정될 수 있다고 판단한 사례 흐름이 있으며, 요건 없는 중간정산 후 퇴직 시 전체 기간 기준 재산정 차액 청구를 검토할 때에도 동일한 기준을 살펴볼 수 있습니다.',
        takeaway: '법정 요건 없는 퇴직금 중간정산은 효력이 부정될 수 있는 영역 — 전체 기간 기준 재산정·차액 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '요건 없이 중간정산을 받았는데 나중에 다시 청구할 수 있나요?',
        answer:
          '<strong>요건 미충족 중간정산은 효력이 부정될 수 있어 재산정 차액 청구를 검토해볼 수 있는 영역입니다.</strong> 당시 사유 확인이 먼저.',
      },
      {
        question: '중간정산 동의서에 서명했는데도 무효를 주장할 수 있나요?',
        answer:
          '<strong>법정 요건 미충족이면 동의 여부와 무관하게 효력 다툼이 가능한 영역입니다.</strong> 강요 정황도 다툼 자료.',
      },
      {
        question: '중간정산을 받았으면 얼마를 더 받을 수 있나요?',
        answer:
          '<strong>전체 계속근로기간 기준 퇴직금 총액에서 기수령액을 공제한 차액을 청구하는 영역입니다.</strong> 총액 재산정이 먼저.',
      },
      {
        question: '중간정산이 무효라면 이미 받은 돈을 돌려줘야 하나요?',
        answer:
          '<strong>기수령액은 총액에서 공제 처리하는 구조인 영역입니다.</strong> 반환 의무가 아니라 차액만 추가 청구.',
      },
      {
        question: '퇴직금 재산정 청구 시효는 얼마인가요?',
        answer:
          '<strong>퇴직금 청구 시효는 퇴직일로부터 3년인 영역입니다.</strong> 3년 내 차액 청구 필요.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 진정', href: '/guide/retirement/retirement-pay-complaint' },
      { label: '중간정산 요건', href: '/guide/retirement/interim-settlement-7-eligible-cases' },
      { label: '퇴직금 계산', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '연봉에 퇴직금 포함 무효', href: '/guide/retirement/retirement-annual-salary-includes-severance-invalid' },
      { label: '1년 미만 수급', href: '/guide/retirement/retirement-less-than-1year-eligibility' },
    ],
  },

  // ─── 6. industrial-accident-musculoskeletal-disease-track ───
  {
    domain: 'industrial-accident',
    slug: 'industrial-accident-musculoskeletal-disease-track',
    keyword: '근골격계 질환 산재',
    questionKeyword: '반복 작업으로 어깨·허리·손목에 근골격계 질환이 생겼는데 업무상 재해로 인정받을 수 있나요?',
    ctaKeyword: '근골격계 질환 산재 요양급여 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '근골격계 질환 산재 인정 — 5단계 요양급여 신청 점검 | 로앤가이드',
      description:
        '반복 작업으로 근골격계 질환이 생겼다면 업무상 재해 인과관계·요양급여 신청 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"생산 라인에서 10년째 동일한 동작을 반복해온 근로자입니다. 최근 어깨 회전근개 파열과 허리 추간판 탈출증 진단을 받았는데, 의사는 반복 작업이 원인일 가능성이 높다고 했어요. 회사는 \'나이가 들면서 생기는 거지 작업 때문이 아니다\'·\'개인 질환\'이라며 산재 처리에 협조하지 않고 있습니다. 10년 동안 같은 동작을 반복해왔고 같은 라인 동료들도 비슷한 증상을 호소하는 상황인데, 본인 혼자 감당해야 하는 건지 막막합니다." 산업재해보상보험법 제37조는 근로자가 업무상의 사유로 부상·질병에 걸린 경우 업무상 재해로 정하고, 제5조는 그 인정 요건으로 업무와 재해 사이의 인과관계를 규정하는 영역입니다. 근골격계 질환은 반복 작업·부담 자세·과도한 힘 등 업무 요인과의 인과관계가 핵심 쟁점이 되고, 회사가 협조하지 않아도 근로자 본인이 근로복지공단에 직접 신청할 수 있는 트랙입니다. ① 진단·업무 관련 기록 ② 인과관계 입증 ③ 요양급여 신청 ④ 공단 심사 ⑤ 급여·재심사 5중 트랙을 정리해볼 수 있습니다. 대응은 ① 기록 ② 인과 ③ 신청 ④ 심사 ⑤ 급여 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 근골격계 질환 산재 인정 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 기록·인과관계·신청·심사·급여 5단계로 점검해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 진단·업무 관련 기록 확보</strong> — 진단서·치료 기록·업무 기술 자료 수집.</li>\n<li><strong>② 인과관계 입증</strong> — 반복 작업·부담 자세·근무 기간과 질환의 연관성 정리.</li>\n<li><strong>③ 요양급여 신청</strong> — 근로복지공단에 요양급여 신청서 + 진단서 제출.</li>\n<li><strong>④ 공단 심사</strong> — 업무상 재해 해당 여부·인과관계 심사.</li>\n<li><strong>⑤ 급여·재심사</strong> — 요양·휴업급여 청구, 불승인 시 재심사.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 근골격계 질환은 업무 요인(반복 작업·부담 자세·과도한 힘)과의 인과관계가 핵심. 회사가 부인해도 근로자 본인이 공단에 직접 신청할 수 있고, 인과관계 입증을 위한 자료 준비가 결정적입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 근골격계 질환 산재 5단계',
        content:
          '<p><strong>A. 근로복지공단·고용노동부 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·치료 자료 보존 (즉시)</strong> — 진단서·치료 기록·영상 검사 결과·치료비 영수증 확보.</li>\n<li><strong>2단계 — 업무 관련 기록 정리 (1~2주)</strong> — 담당 업무 기술서·반복 동작 빈도·근무 기간·동료 유사 증상 정황 정리.</li>\n<li><strong>3단계 — 근로복지공단 요양급여 신청 (신속)</strong> — 신청서 + 진단서 + 업무 기술 자료 제출.</li>\n<li><strong>4단계 — 공단 심사 (수주~수개월)</strong> — 업무상 재해 해당 여부·인과관계 심사.</li>\n<li><strong>5단계 — 급여 청구·재심사</strong> — 요양·휴업급여 청구, 불승인 시 재심사·심사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 산재 요양급여 신청 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">근골격계 질환 산재 인정 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=industrial-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·업무·신청 갈래입니다.</strong></p>\n<ul>\n<li><strong>진단서 (질환명·진단일·원인 소견 포함)</strong></li>\n<li><strong>치료 기록·영상 검사(MRI·X-ray) 결과</strong></li>\n<li><strong>치료비 영수증·진료 명세</strong></li>\n<li><strong>담당 업무 기술서 (반복 동작·부담 자세·빈도 기술)</strong></li>\n<li><strong>근무 기간·업무 이력 자료 (근로계약서·업무 배치 이력)</strong></li>\n<li><strong>동료 유사 증상 정황 자료 (있을 경우)</strong></li>\n<li><strong>요양급여 신청서 (공단 양식)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 담당 업무의 반복 동작 빈도·부담 자세를 구체적으로 기술한 업무 기술서가 인과관계 입증의 핵심 자료. 장기 근무·동일 라인 동료 유사 증상 정황이 있으면 업무 기인성 평가에 도움이 될 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>인과관계 입증</strong> — 업무 요인과 질환 사이의 상당 인과관계 입증이 핵심.</li>\n<li><strong>업무 기인성 vs 개인 질환</strong> — 반복 작업·부담 자세 기여도와 개인 소인 구분.</li>\n<li><strong>복수 사업장 근무</strong> — 여러 사업장에 걸쳐 축적된 업무 요인의 인정 범위.</li>\n<li><strong>회사 협조 부재</strong> — 회사 협조 없이도 본인이 직접 공단에 신청 가능.</li>\n<li><strong>불승인 시 재심사</strong> — 산재보험 재심사·심사 청구 절차 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>근로복지공단 1588-0075 (산재 신청·상담)</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>산재근로자 지원센터 (근로복지공단 운영)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 복수 사업장 근무 근골격계 질환 업무상 재해 인과관계 평가',
        summary:
          '대법원 2022두47391(대법원, 2023.04.13 선고) 영역에서 법원은 산업재해보상보험법의 적용 대상 근로자가 여러 사업장을 옮겨 다니며 근무하다 질병에 걸린 경우, 해당 질병이 업무상 재해에 해당하는지를 판단할 때에는 근로자가 복수의 사업장에서 경험한 업무 요인을 통합적으로 평가해야 한다고 판단한 사례 흐름이 있으며, 장기 반복 작업 근골격계 질환의 인과관계를 검토할 때에도 동일한 기준을 살펴볼 수 있습니다.',
        takeaway: '반복 작업 근골격계 질환도 업무 요인과의 인과관계가 인정될 수 있는 영역 — 요양급여 신청·인과관계 입증 트랙.',
      },
    ],
    faq: [
      {
        question: '반복 작업으로 생긴 근골격계 질환도 산재가 되나요?',
        answer:
          '<strong>업무 요인과의 인과관계가 인정되면 업무상 재해로 검토될 수 있는 영역입니다.</strong> 반복 동작·부담 자세 입증이 핵심.',
      },
      {
        question: '회사가 개인 질환이라며 협조를 안 해요',
        answer:
          '<strong>근로자 본인이 근로복지공단에 직접 신청해볼 수 있는 영역입니다.</strong> 회사 협조 없이도 신청 가능.',
      },
      {
        question: '오래 근무할수록 산재 인정에 유리한가요?',
        answer:
          '<strong>장기 근무·동일 업무 반복이 업무 기인성 평가에 영향을 줄 수 있는 영역입니다.</strong> 근무 기간·업무 이력 자료 정리.',
      },
      {
        question: '산재 불승인이 나오면 어떻게 하나요?',
        answer:
          '<strong>재심사·심사 청구를 해볼 수 있는 영역입니다.</strong> 결정 송달 후 기한 내 불복 절차 검토.',
      },
      {
        question: '요양급여로 어떤 비용을 받을 수 있나요?',
        answer:
          '<strong>치료비·입원비·재활 비용이 요양급여 대상이 될 수 있는 영역입니다.</strong> 근로복지공단 승인 의료기관 이용.',
      },
    ],
    cta: { text: '산재 요양급여 신청 절차, AI로 정리하기', link: '/chat?domain=industrial-accident' },
    internalLinks: [
      { label: '산재 신청 절차', href: '/guide/industrial-accident/workers-comp-claim-process' },
      { label: '산재 불승인 이의', href: '/guide/industrial-accident/industrial-accident-denial-appeal' },
      { label: '직업병 인정', href: '/guide/industrial-accident/occupational-disease-recognition' },
      { label: '산재 구비서류', href: '/guide/industrial-accident/workers-comp-required-documents' },
      { label: '출퇴근 재해 인정', href: '/guide/industrial-accident/commute-accident-workers-comp' },
    ],
  },
];
