import { SpokePage } from '../spoke-pages';

// batch58 retirement 2개
//
// 고유 존재 이유:
// 1. 이 페이지는 휴게시간으로 처리된 시간이 사실상 대기·호출 근로였던 근로자가 그 시간 임금이 평균임금에서 누락돼 퇴직금이 과소 산정됐을 때 평균임금 정정 + 퇴직금 차액 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 채권자에게 채권압류·전부명령으로 퇴직금이 압류된 근로자가 민사집행법 제246조 압류금지 범위와 압류금지 채권 범위변경 신청 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch58Retire: SpokePage[] = [
  // ─── 1. retirement / retirement-break-time-excluded-from-average-wage ───
  {
    domain: 'retirement',
    slug: 'retirement-break-time-excluded-from-average-wage',
    keyword: '휴게시간 평균임금 누락 퇴직금',
    questionKeyword: '휴게시간이라며 임금에서 빠진 시간이 평균임금에 안 들어가서 퇴직금이 적게 나왔어요. 다툴 수 있나요?',
    ctaKeyword: '휴게시간 평균임금 누락 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '휴게시간 임금 누락 — 평균임금·퇴직금 4가지 다툼 | 로앤가이드',
      description:
        '휴게시간이라며 임금이 누락돼 평균임금이 적게 산정됐다면 휴게시간 실질 + 평균임금 정정 + 퇴직금 차액 4가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"매장 카운터 단독 근무라 \'휴게시간 1시간\'이 사실상 호출 대기였어요. 손님 오면 즉시 응대해야 했고 자유롭게 쉴 수 없었습니다. 회사는 그 1시간을 임금에서 빼고 평균임금을 산정해 퇴직금을 줬는데, 실제 일한 시간이라면 평균임금이 더 높아야 하는 거 아닌가요?" 근로기준법 제54조의 휴게시간은 \'근로시간 중\'이라도 \'사용자 지휘·감독에서 벗어나 자유로이 이용할 수 있는 시간\'(대법원 2020다15393, 2019헌가29 취지)이어야 합니다. 호출 대기·즉시 응대 의무가 있던 시간은 휴게시간이 아니라 근로시간으로 평가될 영역으로, 그 시간 임금이 평균임금에 산입되면 퇴직금이 늘어나는 사례가 있습니다.</p>',
    sections: [
      {
        title: 'Q. 휴게시간 임금 누락 평균임금 4가지 다툼 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 휴게시간 실질·근로시간 편입·평균임금 정정·퇴직금 차액 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 휴게시간 실질 판단 (대법원 2020다15393)</strong> — 형식상 휴게시간이라도 사용자 지휘·감독에서 벗어나지 않았다면 근로시간으로 평가될 영역. 호출 대기·자리 비울 수 없는 시간은 다툼 자료.</li>\n<li><strong>② 근로시간 편입 + 미지급 임금</strong> — 휴게시간이 아닌 근로시간으로 인정되면 그 시간 임금 + 연장·야간·휴일 가산수당이 미지급된 사례. 1차 청구 영역.</li>\n<li><strong>③ 평균임금 재산정 (근로기준법 제2조 제6호)</strong> — 미지급 임금이 인정되면 퇴직 전 3개월 임금 총액이 늘어나 평균임금 정정. 평균임금이 비정상이라면 산정 특례 트랙도 검토 영역.</li>\n<li><strong>④ 퇴직금 차액 청구</strong> — 정정된 평균임금 × 30일 × (근속연수)로 재산정. 지급된 퇴직금과 차액 청구 가능한 영역. 시효는 퇴직일로부터 3년.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 휴게시간 실질 다툼이 임금 청구 + 평균임금 정정 + 퇴직금 차액 청구로 이어지는 3단 결합 영역. 시간 기록·CCTV·호출 정황·동료 진술이 결정적 증거가 되는 사례가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 평균임금 정정 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 휴게시간 실질 입증 → 임금 청구 → 평균임금 정정 → 퇴직금 차액 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 출퇴근 기록·근태표·CCTV 시간·휴게시간 호출 카톡·동료 진술서·매장 단독근무 정황. 시간대별 업무 일지 권장.</li>\n<li><strong>2단계 — 휴게시간 실질 정리 (1~2주)</strong> — 휴게시간 동안 (a) 자리 이탈 가능 여부 (b) 호출 응대 의무 (c) 자유 이용 정황 정리. 사용자 지휘·감독 종속 정황 핵심.</li>\n<li><strong>3단계 — 회사에 임금 + 퇴직금 차액 청구 (내용증명)</strong> — 휴게시간 근로시간 편입 + 미지급 임금 + 평균임금 정정 + 퇴직금 차액 일괄 청구.</li>\n<li><strong>4단계 — 노동청 임금체불 진정 (labor.moel.go.kr)</strong> — 회사 미응답 시 사업장 관할 고용노동지청 진정. 근로감독관 조사 트랙.</li>\n<li><strong>5단계 — 민사 청구 또는 지급명령</strong> — 노동청 트랙 한계 사안은 민사. 청구액 무관 지급명령 가능, 3,000만원 이하면 소액심판.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">휴게시간 평균임금 누락 4가지 다툼을 AI가 점검해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 시간 기록 + 휴게시간 실질 정황 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>출퇴근 기록·근태표</strong> — 휴게시간 시작·종료 시점.</li>\n<li><strong>매장·근무지 CCTV (보존 요청)</strong> — 휴게시간 중 자리 이탈 여부 입증 핵심. 통상 보관 30~60일이라 빠른 보존 요청.</li>\n<li><strong>호출 카톡·업무지시 메시지</strong> — 휴게시간 중 호출·응대 의무 정황.</li>\n<li><strong>근로계약서·취업규칙</strong> — 휴게시간 명문 규정.</li>\n<li><strong>퇴직 전 3개월 급여명세서</strong> — 평균임금 산정 기초.</li>\n<li><strong>퇴직금 산정 명세서</strong> — 회사가 적용한 평균임금 확인.</li>\n<li><strong>동료 진술서·매장 단독근무 정황</strong> — 자유 이용 불가 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 매장·카페·콜센터·경비실 등 단독 근무 직군은 \'사실상 호출 대기\'가 일반적인 사례가 많아 휴게시간 실질 다툼 트랙이 열리는 영역. CCTV 보존 요청은 노동청 진정 단계에서도 가능하니 빠르게 진행하는 것이 안전합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"근로계약서에 휴게시간 1시간 명시" 주장 반박</strong> — 명문 규정만으로 휴게시간 인정 안 되는 영역. 실질 자유 이용 가능했는지가 판단 기준(2020다15393 취지).</li>\n<li><strong>"본인이 자발적으로 자리 지킨 것" 주장 반박</strong> — 호출·즉시 응대 의무 정황이 있다면 자발 주장 어려운 영역. 카톡 호출 기록이 있으면 다툼 자료.</li>\n<li><strong>"휴게시간 임금 안 줘도 평균임금 영향 없다" 주장 반박</strong> — 휴게시간이 근로시간으로 인정되면 그 시간 임금이 평균임금 산입 → 퇴직금 차액 발생하는 영역.</li>\n<li><strong>"형사처벌은 별개다" 주장 반박</strong> — 휴게시간 미부여 자체는 형사처벌 영역(2019헌가29)이지만, 별도로 민사상 평균임금 정정 + 퇴직금 차액 청구 트랙은 살아있는 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 평균임금·퇴직금 무료 상담.</li>\n<li><strong>고용노동부 노동포털 (labor.moel.go.kr)</strong> — 임금체불·퇴직금 진정 트랙.</li>\n<li><strong>고용노동부 1350</strong> — 휴게시간·근로시간 일반 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 1주 12시간 초과 연장근로 한도와 휴게시간 부여',
        summary:
          '대법원 2020다15393 사건(대법원, 2023.12.07 선고)에서 법원은 근로기준법 제53조 제1항이 정한 연장근로 한도(1주 12시간)는 1주 단위 근로시간 40시간 초과분을 기준으로 판단하며, 1일 8시간 초과를 별도 기준으로 삼는 것이 아니라고 판시했습니다. 또한 1일 8시간 초과 4시간 연장근로 시 그 도중에 30분 이상의 휴게시간 부여 의무를 인정하고, 휴게시간 부여 의무 해석에 대한 판단 기준을 명확히 한 사례입니다.',
        takeaway: '휴게시간이 형식상 부여돼도 실질이 자유롭지 않다면 근로시간 편입 + 미지급 임금 + 평균임금 정정 + 퇴직금 차액 4단 결합 청구 트랙이 열리는 영역으로, 출퇴근 기록·CCTV·호출 정황을 정리하면 다툼 가능성이 큰 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '휴게시간이 점심시간이면 영향 없나요?',
        answer:
          '<strong>점심시간이라도 호출 대기였다면 다툼 영역입니다.</strong> 매장 단독근무자가 점심을 카운터에서 먹었거나 손님 오면 즉시 응대했다면 휴게시간 인정 어려운 사례. 자리 이탈 가능 여부가 핵심.',
      },
      {
        question: '휴게시간이 30분씩 여러 번 쪼개져 있어요',
        answer:
          '<strong>분할 휴게시간 자체도 적정성 다툼 영역입니다.</strong> 근로기준법 제54조는 4시간 근로 시 30분 이상, 8시간 근로 시 1시간 이상을 정해진 시간에 부여해야 한다는 영역. 쪼개기·자투리 휴게는 제도 취지 위반 다툼 가능.',
      },
      {
        question: '평균임금 정정만 하고 퇴직금 차액은 별도 청구해야 하나요?',
        answer:
          '<strong>한 번에 일괄 청구가 일반적입니다.</strong> 노동청 진정·민사 청구 모두 평균임금 정정 + 미지급 임금 + 퇴직금 차액 동시 청구 가능한 영역. 청구원인이 같아 분리 사유 없음.',
      },
      {
        question: 'CCTV가 이미 삭제됐어요',
        answer:
          '<strong>CCTV 부재 시 동료 진술·호출 카톡·업무 일지로 입증 가능 영역입니다.</strong> CCTV는 강력한 증거지만 유일한 증거는 아닌 사례. 다만 발견 즉시 보존 요청이 안전.',
      },
      {
        question: '시효 3년 지났어요. 어떻게 되나요?',
        answer:
          '<strong>퇴직금 차액 청구권은 퇴직일로부터 3년 시효입니다.</strong> 시효 경과 시 청구 어렵지만, 사용자가 시효 항변을 신의칙 위반으로 다툴 여지가 있는 사례도 있어 개별 검토 영역.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '평균임금 산정 분쟁', href: '/guide/retirement/retirement-average-wage-dispute' },
      { label: '평균임금 상여 연차수당 다툼', href: '/guide/retirement/retirement-average-wage-bonus-dispute' },
      { label: '휴게시간 근로시간 편입', href: '/guide/wage/wage-break-standby-time-included' },
      { label: '퇴직 후 미지급 수당 청구', href: '/guide/wage/wage-resigned-unpaid-allowance-claim' },
      { label: '퇴직금 계산식 공식', href: '/guide/retirement/retirement-pay-formula-guide' },
    ],
  },

  // ─── 2. retirement / retirement-pay-seizure-exempt-range ───
  {
    domain: 'retirement',
    slug: 'retirement-pay-seizure-exempt-range',
    keyword: '퇴직금 압류 압류금지 범위',
    questionKeyword: '채권자가 퇴직금을 압류했어요. 전부 가져가나요? 일부라도 받을 수 있나요?',
    ctaKeyword: '퇴직금 압류 출연 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '퇴직금 압류 — 압류금지 범위와 4가지 출연 트랙 | 로앤가이드',
      description:
        '채권자가 퇴직금을 압류했다면 압류금지 범위 + 범위변경 신청 + IRP 보호 + 면책 결합 4가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"신용카드 연체 때문에 채권자가 회사로 채권압류·추심명령을 보냈고, 회사는 \'퇴직금이 나오면 1/2 압류해야 한다\'고 합니다. 28년 일한 퇴직금을 절반 이상 가져가면 노후 생계가 막막합니다. 압류 못 막나요?" 민사집행법 제246조 제1항 제4호는 \'퇴직금·퇴직연금·퇴직위로금 그 밖에 이와 유사한 성질의 급여채권\'의 1/2 상당액을 \'압류금지채권\'으로 정하고 있어, 1/2은 보호 영역입니다(대법원 2015다51968 취지). 또한 같은 법 제246조 제3항·제4항에 따라 채무자 신청으로 압류금지채권 범위변경 결정으로 보호 범위를 추가 확대할 수 있는 영역이고, IRP 등 퇴직연금은 별도 보호 트랙도 있어 일률적 \'전액 압류\'는 다툴 수 있는 사례입니다.</p>',
    sections: [
      {
        title: 'Q. 퇴직금 압류 4가지 출연 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 압류금지 1/2·범위변경 신청·퇴직연금 보호·도산 결합 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 1/2 압류금지 (민사집행법 제246조 제1항 제4호)</strong> — 퇴직금·퇴직연금·퇴직위로금 그 밖에 유사한 성질 급여채권은 1/2 상당액 압류금지. 회사가 1/2 한도로 추심·전부명령을 따르도록 의무화되는 영역.</li>\n<li><strong>② 압류금지채권 범위변경 신청 (제246조 제3항)</strong> — 채무자가 법원에 신청하면 채무자·부양가족 생활 사정 고려해 압류금지 범위를 확대해주는 결정 가능 영역. 노후·실업·부양가족 정황 자료가 핵심.</li>\n<li><strong>③ 퇴직연금(DB·DC·IRP) 별도 보호</strong> — 근로자퇴직급여보장법 제7조에 따라 퇴직연금 수급권은 양도·담보·압류 금지. IRP에 적립된 부분은 통상 압류 어려운 영역. 회사 청산금 vs IRP 적립금 구분이 핵심.</li>\n<li><strong>④ 도산·회생·파산 결합 (대법원 2022다285097)</strong> — 채무자가 회생·파산 절차에 들어가면 별도 채권 분류 영역. 면책 트랙 결합 검토 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 1/2 압류금지는 자동 보호이지만, 1/2 추가 보호는 채무자가 직접 \'압류금지채권 범위변경 신청\'을 해야 인정되는 영역. 신청 시기·자료 정리가 결과 좌우.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 압류금지 범위변경 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 압류통지 확인 → 1/2 자동 보호 + 범위변경 신청 → 퇴직연금 분리 → 회생·파산 검토 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 압류 통지 확인 (즉시)</strong> — 채권압류 및 추심명령(또는 전부명령) 결정문 + 송달증명서 받아 채권자·청구금액·집행권원 확인.</li>\n<li><strong>2단계 — 1/2 압류금지 자동 적용</strong> — 회사는 민사집행법 제246조에 따라 1/2 한도만 추심자에게 지급. 회사가 전액 지급하려 하면 압류금지 위반 영역. 회사에 서면 통보 권장.</li>\n<li><strong>3단계 — 압류금지채권 범위변경 신청 (집행법원)</strong> — 채무자 주민등록·부양가족·소득·생활비·노후 정황 자료 첨부해 집행법원에 신청. 추가 보호 결정 가능 영역.</li>\n<li><strong>4단계 — 퇴직연금 분리 확인</strong> — DB·DC·IRP 적립분은 회사 청산 퇴직금과 별도. 근로자퇴직급여보장법 제7조 양도·담보·압류 금지 트랙 확인.</li>\n<li><strong>5단계 — 회생·파산 결합 검토</strong> — 채무 총액이 부담스럽다면 개인회생(소득 기준)·개인파산(자산 기준) 검토 영역. 면책 결정 시 채권 자체 소멸 가능 사례.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">퇴직금 압류 4가지 출연 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 압류 자료 + 생활 정황 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>채권압류·추심·전부명령 결정문</strong> — 압류 범위·금액·집행권원 확인 핵심.</li>\n<li><strong>송달증명서·압류통지서</strong> — 통지 시점.</li>\n<li><strong>퇴직금 산정 명세서·근속증명서</strong> — 보호 대상 금액 확정.</li>\n<li><strong>퇴직연금(IRP) 가입증명·잔고증명</strong> — 별도 보호 트랙 입증.</li>\n<li><strong>주민등록등본·가족관계증명서</strong> — 부양가족 입증.</li>\n<li><strong>소득증명·통장사본</strong> — 압류금지 범위변경 신청 자료.</li>\n<li><strong>의료비·임차료·자녀 학비 영수증</strong> — 생활비 정황 자료.</li>\n<li><strong>채권자 청구금액·이자 정리</strong> — 회생·파산 검토 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 \'퇴직금 전액 압류\' 통지를 받았다고 안내해도, 실제로는 1/2 한도가 자동 압류금지 영역. 회사 인사·총무에 민사집행법 제246조 제1항 제4호를 명시한 서면을 보내 1/2 보호를 사전 확인하는 것이 안전합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 회사·채권자 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"전부명령이라 전액 가져간다" 주장 반박</strong> — 전부명령도 압류금지채권 범위에는 효력 없는 영역. 1/2 보호는 전부명령에도 적용(대법원 2015다51968 취지).</li>\n<li><strong>"이미 회사가 채권자에게 전액 지급했다" 주장 반박</strong> — 압류금지 위반 지급은 무효 영역. 회사에 다시 청구할 여지가 있는 사례. 부당이득반환·임금채권 청구 결합 검토.</li>\n<li><strong>"압류금지채권 범위변경 신청은 거의 안 받아준다" 주장 반박</strong> — 자료가 부실하면 거절 사례 많지만, 부양가족·노후·실업 정황 자료가 충실하면 인용 사례 다수 영역. 신청 자체를 포기할 영역 아님.</li>\n<li><strong>"IRP도 압류된다" 주장 반박</strong> — 근로자퇴직급여보장법 제7조 양도·담보·압류 금지 명문 영역. 회사 청산 퇴직금과 IRP 적립 부분은 분리 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 압류금지·회생·파산 무료 상담.</li>\n<li><strong>서울회생법원 (court.go.kr)</strong> — 개인회생·파산 신청 트랙.</li>\n<li><strong>신용회복위원회 1600-5500</strong> — 채무조정 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 압류금지채권의 표지 변경과 압류 효력',
        summary:
          '대법원 2015다51968 사건(대법원, 2018.05.30 선고)에서 법원은 채권압류명령에서 \'압류된 채권의 표지\'에 기재된 채권의 해석은 위 표지의 내용에 따라 객관적·합리적으로 해석되어야 하고, 거기에 의미가 불명확한 경우에 그러한 사정은 압류 및 추심채권자에게 부담시키는 것이 옳다고 판시했습니다. 또한 민사집행법 제246조 제1항 제4호의 \'급료·연금·봉급·상여금·퇴직연금, 그 밖에 이와 유사한 성질을 가진 급여채권\'에 대한 압류금지 범위 해석을 다룬 사례입니다.',
        takeaway: '퇴직금·퇴직연금은 1/2 자동 압류금지 + 압류금지채권 범위변경 신청 + IRP 별도 보호 + 회생·파산 결합 4가지 트랙이 열리는 영역으로, 압류 결정문·부양가족·생활 정황 자료를 정리하면 보호 범위가 확대되는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '월 300만원 퇴직금이면 150만원만 받나요?',
        answer:
          '<strong>1/2 자동 보호는 시작점이고, 범위변경 신청으로 추가 보호 가능 영역입니다.</strong> 부양가족·노후·실업 정황 자료가 충실하면 1/2 초과 보호 결정 사례. 신청 자체가 포기 영역 아님.',
      },
      {
        question: 'IRP 계좌에 들어간 퇴직금도 압류되나요?',
        answer:
          '<strong>IRP 적립분은 근로자퇴직급여보장법 제7조 양도·담보·압류 금지 영역입니다.</strong> 회사 청산 퇴직금과 분리. 다만 IRP에서 인출해 일반 계좌로 옮긴 후에는 일반 예금채권으로 압류 가능한 사례.',
      },
      {
        question: '퇴직연금(DB·DC) 적립금도 보호되나요?',
        answer:
          '<strong>DB·DC형 퇴직연금 적립금도 같은 보호 영역입니다.</strong> 다만 퇴직 후 IRP로 의무 이전된 후 인출 시점부터는 일반 채권 영역. 시점별 보호 구분이 핵심.',
      },
      {
        question: '회생·파산하면 퇴직금 어떻게 되나요?',
        answer:
          '<strong>개인회생·파산 절차에서도 압류금지 범위는 별도 보호 영역입니다.</strong> 회생은 면책 시까지 변제계획에 따라 일정 부분 변제, 파산은 면책 시 잔여 채무 소멸 트랙. 퇴직금 자체는 압류금지 부분이 보호되는 사례.',
      },
      {
        question: '범위변경 신청은 어디에 하나요?',
        answer:
          '<strong>채권압류명령을 발령한 집행법원에 \'압류금지채권 범위변경 신청\'을 합니다.</strong> 신청서·생활 정황 자료 첨부. 1심 단독판사가 검토하며, 결정 1~2개월 소요 사례. 변호사 선임 의무 없음.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 IRP 이전', href: '/guide/retirement/retirement-irp-transfer-requirement' },
      { label: '퇴직금 IRP 의무이전 세제', href: '/guide/retirement/retirement-irp-mandatory-rollover-tax' },
      { label: '회사 도산 퇴직금 대지급금', href: '/guide/retirement/retirement-business-closure-substitute-payment' },
      { label: '폐업 도산 도산대지급금', href: '/guide/retirement/retirement-company-bankrupt-deposit' },
      { label: '퇴직금 지연이자 20%', href: '/guide/retirement/retirement-delay-interest-20percent' },
    ],
  },
];
