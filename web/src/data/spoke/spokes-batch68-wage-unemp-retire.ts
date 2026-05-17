import { SpokePage } from '../spoke-pages';

// batch68 wage-unemp-retire — 5개 (2026-05-18)
//
// 고유 존재 이유:
// 1. wage-business-loss-compensation-deduction-illegal-track — 회사 손해 변상 명목으로 임금을 일방 공제하는 사용자에 대해 근로기준법 제43조 임금 전액불 원칙 + 별도 손배 청구 분리 트랙 (기존 penalty-deduction·uniform-cost·attendance-incentive 결합 부재).
// 2. wage-workplace-shutdown-60percent-allowance-track — 사용자 귀책 휴업 시 평균임금 70% 또는 통상임금 100% 보장 휴업수당(근기법 제46조) 미지급 다툼 (기존 employer-early-dismissal-shutdown-pay·standby-order 결합 부재).
// 3. unemployment-separation-code-employer-refuse-correction-track — 회사가 이직사유 코드 정정 자체를 거부하는 사용자 대응 트랙 (기존 separation-code-recommendation-to-voluntary-correction 은 절차, 본 페이지는 회사 거부 시 강제절차 결합 부재).
// 4. retirement-collective-agreement-cap-individual-claim-track — 단체협약상 퇴직금 상한 합의 + 개별 근로자 차액 청구 가능성 트랙 (기존 waiver-agreement-invalid·partial-payment-agreement-void 결합 부재).
// 5. retirement-fixed-term-contract-gap-tenure-link-track — 기간제 갱신 사이 공백기 끼고 재계약 시 계속근로 단절·연결 다툼 (기존 rehire-continuous-service·under-1-year 결합 부재).

export const spokesBatch68WageUnempRetire: SpokePage[] = [
  // ─── 1. wage-business-loss-compensation-deduction-illegal-track ───
  {
    domain: 'wage',
    slug: 'wage-business-loss-compensation-deduction-illegal-track',
    keyword: '회사 손해 변상 임금 공제',
    questionKeyword: '제가 실수로 회사 장비를 파손했다며 회사가 한 달 월급에서 80만원을 임의로 빼고 입금했어요.',
    ctaKeyword: '손해 변상 임금 공제 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '회사 손해 변상 임금 공제 — 5단계 전액불 원칙·차액 청구 정리 | 로앤가이드',
      description:
        '회사가 손해 변상 명목으로 월급을 임의 공제했다면 임금 전액불·손배 분리 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"입사 2년차에 운반 중 회사 장비 1대를 떨어뜨려 파손했어요. 회사는 \'수리비 80만원을 너희가 부담해야 한다\'며 동의서·합의서 한 장 없이 다음 달 월급에서 80만원을 통째로 빼고 220만원만 입금했습니다. 항의했더니 \'손해는 네가 낸 거니까 당연하다\'는 답변뿐이에요." 근로기준법 제43조는 ① 임금은 통화로 ② 전액을 ③ 직접 ④ 정기적으로 지급해야 한다는 전액불 원칙을 명시한 영역. 사용자의 손해배상 채권과 임금 채권은 별개로, 사전 서면 합의나 법령 근거 없는 일방 공제는 위법으로 평가되는 트랙입니다. 손해가 실제로 발생했다면 회사는 별도 손해배상 청구 절차를 거쳐야 하며 그 사이 임금은 전액 지급되어야 합니다. 대응은 ① 공제 자료 ② 동의 부재 ③ 노동청 진정 ④ 차액 청구 ⑤ 손해 분리 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 손해 변상 임금 공제 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 공제·동의·진정·차액·손해 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 공제 내역 확인</strong> — 공제 항목·금액·시점.</li>\n<li><strong>② 사전 동의·서면 합의 부재</strong> — 임금 전액불 위반 평가.</li>\n<li><strong>③ 노동청 임금체불 진정</strong> — 공제분 차액 신청.</li>\n<li><strong>④ 민사 임금 청구</strong> — 공제분 회수.</li>\n<li><strong>⑤ 회사 손배 청구 분리 대응</strong> — 별개 절차 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 손해 발생 여부와 무관하게 일방 공제 자체가 임금 전액불 위반으로 평가될 여지가 있는 영역. 회사는 손해배상 청구를 별도로 제기해야 하며 그 사이 임금은 전액 지급되어야 하는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용노동부 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 공제 자료 보존 (즉시)</strong> — 급여명세서·이체 내역·공제 통지.</li>\n<li><strong>2단계 — 동의서·합의서 부재 확인 (즉시)</strong> — 서면 동의 없음 입증.</li>\n<li><strong>3단계 — 노동청 임금체불 진정 (관할 지방고용노동청)</strong> — 공제분 차액 신청.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 전액불 위반 심사·시정 권고.</li>\n<li><strong>5단계 — 민사 임금청구 + 손배 분리 대응</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">손해 변상 명목 임금 공제 차액 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 공제·동의·손해 갈래입니다.</strong></p>\n<ul>\n<li><strong>최근 6개월 급여명세서 (공제 항목 표시)</strong></li>\n<li><strong>월 급여 이체 내역 (실제 입금액 입증)</strong></li>\n<li><strong>공제 통지 메일·문자·구두 녹취</strong></li>\n<li><strong>근로계약서·취업규칙·복무규정</strong></li>\n<li><strong>동의서·합의서 부재 확인 자료</strong></li>\n<li><strong>손해 발생 경위 자료 (사고 보고서·CCTV)</strong></li>\n<li><strong>회사 손해액 주장 근거 자료 (견적서·수리비)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공제 직전 카카오톡·메일로 \"동의 못 한다\"는 의사 표시를 남겼다면 일방 공제 입증 강력. 손해액·과실 비율을 다투는 자료는 손해배상 분리 절차에서 별도 활용.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임금 전액불 원칙</strong> — 근기법 제43조 적용 범위.</li>\n<li><strong>사전 서면 동의</strong> — 공제 항목·금액 특정 합의.</li>\n<li><strong>법령 근거 공제</strong> — 4대보험·소득세·노조비.</li>\n<li><strong>고의·중과실</strong> — 손해배상 책임 비율 별도 판단.</li>\n<li><strong>3년 시효</strong> — 각 임금 지급일별.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임금 전액불 원칙과 일방 공제',
        summary:
          '대법원 2023다206138(대법원, 2024.10.25 선고) 영역에서 법원은 임금[최저임금법 특례조항이 적용되는 시점에 임시 산정된 임금이라 하더라도, 사용자가 일방적으로 그 일부를 공제하거나 차감할 수 있는지 여부]를 다툰 사례 흐름이 있습니다.',
        takeaway: '임금 채권과 사용자의 손해배상 채권은 별개. 사전 서면 동의 없는 일방 공제는 전액불 위반 평가 영역.',
      },
    ],
    faq: [
      {
        question: '제가 명백히 잘못해 손해를 냈는데도 공제는 위법인가요?',
        answer:
          '<strong>손해 발생 여부와 무관하게 사전 서면 동의 없는 일방 공제는 임금 전액불 위반으로 평가될 영역입니다.</strong>',
      },
      {
        question: '입사 시 "손해는 본인이 부담"이라는 일반 조항에 사인했어요',
        answer:
          '<strong>구체적 항목·금액이 특정되지 않은 포괄 동의는 효력이 제한되는 영역입니다.</strong>',
      },
      {
        question: '회사가 "퇴직금에서 공제하겠다"고 하는데요?',
        answer:
          '<strong>퇴직금도 임금 전액불 원칙 적용 영역. 별도 합의 없는 공제는 위법 평가가 가능합니다.</strong>',
      },
      {
        question: '공제 후에 사인한 동의서는 유효한가요?',
        answer:
          '<strong>사후 추인이라도 자유 의사 평가가 필요하며 강요·압박 정황은 별도 다툼 영역입니다.</strong>',
      },
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>각 공제된 임금 지급일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 신고', href: '/guide/wage/wage-unpaid-complaint-procedure' },
      { label: '임금 시효', href: '/guide/wage/wage-claim-statute-of-limitations' },
      { label: '징벌 공제 금지', href: '/guide/wage/wage-penalty-deduction-prohibition-claim' },
      { label: '유니폼 비용 공제', href: '/guide/wage/wage-uniform-cost-deducted-illegal' },
      { label: '간이대지급금', href: '/guide/wage/wage-simplified-replacement-payment' },
    ],
  },

  // ─── 2. wage-workplace-shutdown-60percent-allowance-track ───
  {
    domain: 'wage',
    slug: 'wage-workplace-shutdown-60percent-allowance-track',
    keyword: '사용자 귀책 휴업수당 평균임금 70',
    questionKeyword: '회사가 갑자기 "물량이 없으니 다음 주부터 한 달 쉬어라"며 휴업했는데 휴업수당은 한 푼도 안 줘요.',
    ctaKeyword: '휴업수당 미지급 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '휴업수당 미지급 — 5단계 평균임금 70%·통상임금 100% 정리 | 로앤가이드',
      description:
        '사용자 귀책 휴업 시 휴업수당이 한 푼도 없다면 평균임금 70%·통상임금 100% 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"회사가 \'납품 거래처가 끊겨 물량이 없다\'며 다음 주부터 한 달 휴업한다고 통보했어요. 임원진은 그대로 출근하고 생산직만 강제 휴업입니다. 한 달 동안 한 푼도 입금되지 않았고, 회사는 \'노느라 안 받는 게 당연하다\'며 휴업수당 자체를 부정. 4대보험료도 그대로 빠지니 손해만 큽니다." 근로기준법 제46조는 ① 사용자의 귀책 사유로 휴업하는 경우 ② 평균임금의 70% 이상 ③ 또는 그 금액이 통상임금을 초과하면 통상임금으로 지급해야 한다는 점을 명시한 영역. 거래처 감소·경영 사정·물량 부족은 원칙적으로 사용자 귀책 사정으로 평가되는 트랙입니다. 노동위 승인 없는 일방 휴업은 통상임금 100% 청구도 가능합니다. 대응은 ① 휴업 통보 ② 귀책 사정 ③ 노동청 진정 ④ 휴업수당 ⑤ 통상임금 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 휴업수당 미지급 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 통보·귀책·진정·휴업수당·통상임금 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 휴업 통보 시점·기간 확인</strong> — 일방 통보 vs 합의 휴업.</li>\n<li><strong>② 사용자 귀책 사정 평가</strong> — 물량·거래처·경영 사유.</li>\n<li><strong>③ 노동청 임금체불 진정</strong> — 휴업수당 차액 신청.</li>\n<li><strong>④ 휴업수당 평균임금 70% 청구</strong> — 근기법 제46조.</li>\n<li><strong>⑤ 노동위 미승인 시 통상임금 100% 청구</strong> — 일방 휴업.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \"물량이 없다\"·\"거래처가 끊겼다\"는 사정은 원칙적으로 사용자 귀책으로 평가되는 영역. 천재지변·노동위 부득이한 사유 승인 없는 일방 휴업은 휴업수당 미지급 시 통상임금 전액 청구도 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용노동부 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 휴업 통보 자료 보존 (즉시)</strong> — 통보 문자·메일·사내 공지.</li>\n<li><strong>2단계 — 귀책 사정 자료 수집 (1~2주)</strong> — 거래처 감소·경영 사유.</li>\n<li><strong>3단계 — 노동청 임금체불 진정 (관할 지방고용노동청)</strong> — 미지급 휴업수당 신청.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 귀책·금액 심사.</li>\n<li><strong>5단계 — 민사 임금청구 (3년 시효)</strong> — 통상임금 청구 병행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사용자 귀책 휴업수당 차액 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 통보·귀책·산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>휴업 통보 문자·메일·사내 게시 자료</strong></li>\n<li><strong>근로계약서·취업규칙·휴업 관련 규정</strong></li>\n<li><strong>최근 3개월 급여명세서 (평균임금 산정 기준)</strong></li>\n<li><strong>휴업 직전 출근부·근태 기록 (정상 근로 입증)</strong></li>\n<li><strong>거래처 감소·물량 부족 회사 주장 자료</strong></li>\n<li><strong>임원·관리직 출근 자료 (생산직 차별 입증)</strong></li>\n<li><strong>4대보험·세금 공제 내역 (휴업 중 부담)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 노동위에 \"부득이한 사유\" 휴업 승인 신청을 한 적이 없다면 통상임금 100% 청구 평가에 유리. 동료들의 같은 휴업 통보 자료는 일률성 입증에 도움.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사용자 귀책 vs 불가항력</strong> — 천재지변·노동위 승인 여부.</li>\n<li><strong>평균임금 70%</strong> — 직전 3개월 산정 기준.</li>\n<li><strong>통상임금 100%</strong> — 70%가 통상임금 초과 시 통상임금.</li>\n<li><strong>일부 휴업</strong> — 부분 근로 + 잔여 시간 휴업수당 산정.</li>\n<li><strong>3년 시효</strong> — 각 휴업일 지급 예정일별.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 휴업수당과 평균임금 산정',
        summary:
          '대법원 2020다16228(대법원, 2023.06.15 선고) 영역에서 법원은 근로기준법 위반·최저임금법 위반 쟁점이 결합된 사안에서 사용자의 귀책 사유로 인한 휴업이 인정되면 평균임금의 일정 비율을 보장하는 휴업수당 규정의 적용 범위를 다툰 사례 흐름이 있습니다.',
        takeaway: '거래처·물량 사정에 의한 휴업은 원칙적으로 사용자 귀책 평가 영역. 평균임금 70% 또는 통상임금 100% 청구 가능.',
      },
    ],
    faq: [
      {
        question: '회사가 "코로나·경기 침체"라며 휴업수당을 부정해요',
        answer:
          '<strong>일반 경기 사정은 사용자 귀책으로 평가되며 노동위 승인이 별도 필요한 영역입니다.</strong>',
      },
      {
        question: '평균임금 70%면 너무 적은데 더 받을 방법은요?',
        answer:
          '<strong>70%가 통상임금을 초과하면 통상임금 기준이며 일방 휴업은 100% 청구도 가능 영역입니다.</strong>',
      },
      {
        question: '휴업 기간에도 4대보험은 빠지나요?',
        answer:
          '<strong>휴업수당도 보수의 일부로 보험료 산정에 포함되는 영역입니다.</strong>',
      },
      {
        question: '제가 휴업에 동의한 것 같은데도 청구 가능한가요?',
        answer:
          '<strong>동의가 있어도 사용자 귀책 사유라면 법정 휴업수당은 별도로 청구 가능 영역입니다.</strong>',
      },
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>각 휴업일의 휴업수당 지급일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 신고', href: '/guide/wage/wage-unpaid-complaint-procedure' },
      { label: '평균임금 계산', href: '/guide/wage/wage-ordinary-wage-calculation' },
      { label: '대기명령 평균임금', href: '/guide/wage/wage-standby-order-average-wage-restoration' },
      { label: '조기 단축 휴업', href: '/guide/wage/wage-employer-early-dismissal-shutdown-pay' },
      { label: '임금 시효', href: '/guide/wage/wage-claim-statute-of-limitations' },
    ],
  },

  // ─── 3. unemployment-separation-code-employer-refuse-correction-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-separation-code-employer-refuse-correction-track',
    keyword: '이직사유 코드 정정 거부 회사 강제',
    questionKeyword: '권고사직으로 그만뒀는데 회사가 이직확인서에 "자진퇴사"로 적어 보냈고 정정 요청도 거부해요.',
    ctaKeyword: '이직사유 정정 거부 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '이직사유 정정 거부 — 5단계 권고사직 입증·이직확인서 강제 정리 | 로앤가이드',
      description:
        '회사가 이직사유 코드 정정을 거부했다면 권고사직 입증·고용센터 직권 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3년 다닌 회사에서 \'경영 사정상 더는 자리가 없으니 그만둬 줘\'라는 권고사직 통보를 받고 사직서를 냈어요. 그런데 회사가 고용센터에 보낸 이직확인서를 보니 이직사유가 \'개인 사정\' 자진퇴사 코드(11번)로 기재. 회사에 정정을 요청하니 \'기존 처리대로 갈 수밖에 없다\'며 거부했어요. 이대로면 실업급여를 못 받습니다." 고용보험법 시행규칙은 ① 사업주가 이직확인서를 사실대로 작성·제출할 의무가 있고 ② 근로자는 정정 요청 + 고용센터에 \"이직사유 분쟁\" 신청이 가능한 영역. 권고사직 정황 자료가 충분하면 회사 정정 거부와 무관하게 고용센터가 직권으로 이직사유를 평가하는 트랙입니다. 대응은 ① 정황 입증 ② 회사 정정 요청 ③ 고용센터 분쟁 신청 ④ 직권 조사 ⑤ 이의신청 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 이직사유 정정 거부 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 정황·요청·분쟁신청·직권·이의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권고사직 정황 입증</strong> — 면담 녹음·메일·문자.</li>\n<li><strong>② 회사 정정 요청 (서면)</strong> — 거부 답변 보존.</li>\n<li><strong>③ 고용센터 이직사유 분쟁 신청</strong> — 정정 거부 대응.</li>\n<li><strong>④ 고용센터 직권 조사 (1~2개월)</strong> — 사실관계 평가.</li>\n<li><strong>⑤ 이의신청 (90일)</strong> — 고용보험심사관·심사위.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회사가 정정을 거부해도 고용센터가 직권으로 이직사유를 판단하는 영역. 권고사직 정황 자료가 명확하면 자진퇴사 코드로 적힌 이직확인서와 별개로 비자발 이직 평가가 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신청 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용센터 안내 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권고사직 정황 자료 보존 (즉시)</strong> — 면담 녹음·메일·문자·동료 진술.</li>\n<li><strong>2단계 — 회사 정정 요청 (서면·내용증명)</strong> — 거부 답변 입증.</li>\n<li><strong>3단계 — 고용센터 이직사유 분쟁 신청</strong> — 정황 자료 첨부.</li>\n<li><strong>4단계 — 고용센터 직권 조사 (1~2개월)</strong> — 사용자·근로자 면담.</li>\n<li><strong>5단계 — 부지급 시 이의신청 (90일)</strong> — 심사관·심사위·재심사.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">이직사유 정정 거부 직권 조사 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 정황·요청·분쟁 갈래입니다.</strong></p>\n<ul>\n<li><strong>권고사직 면담 녹음 (날짜·발화자 식별 명확)</strong></li>\n<li><strong>권고 메일·문자·카카오톡 (직장 상사 발화)</strong></li>\n<li><strong>사직서·사직 권유 문서 (회사 양식)</strong></li>\n<li><strong>회사 정정 요청 서면·내용증명·답변 자료</strong></li>\n<li><strong>이직확인서 사본 (자진퇴사 코드 기재 입증)</strong></li>\n<li><strong>동료·관리자 진술서 (권고사직 분위기 입증)</strong></li>\n<li><strong>경영 사정 자료 (구조조정·인력감축 공지)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 면담 녹음이 없어도 회사가 동시기에 다른 직원에게도 권고사직을 한 정황이 있다면 직권 평가에 유리. 회사 인사 게시판·구조조정 공지 자료도 결정적 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>이직확인서 vs 실질 사유</strong> — 직권 조사로 평가.</li>\n<li><strong>사직서 자필 작성</strong> — 강요·압박 입증 시 자진퇴사 부정 가능.</li>\n<li><strong>정정 요청 시기</strong> — 신청 전 사전 요청 권장.</li>\n<li><strong>회사 부정 답변</strong> — 그 자체가 분쟁 자료.</li>\n<li><strong>이직 12개월 내 신청</strong> — 신청 기간 도과 주의.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 고객센터 1350</strong></li>\n<li><strong>고용보험 1577-7114</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 이직사유 분쟁과 직권 평가',
        summary:
          '고용보험심사위원회 2022재결 제139호(고용보험심사위원회, 2022.10.13 선고) 영역에서 위원회는 고용보험 피보험자가 부지급처분 취소를 청구한 사안에서 사업주가 이직확인서에 기재한 사유와 실제 이직 정황이 다른 경우 직권 조사를 통해 이직사유를 평가할 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '회사 이직확인서 코드와 무관하게 정황 자료로 비자발 이직 평가 가능. 직권 조사·이의신청 트랙 가능 영역.',
      },
    ],
    faq: [
      {
        question: '면담 녹음을 안 했는데도 가능할까요?',
        answer:
          '<strong>녹음이 없어도 메일·문자·동료 진술·구조조정 공지 등으로 정황 평가가 가능한 영역입니다.</strong>',
      },
      {
        question: '사직서를 자필로 썼는데 자진퇴사로 굳어지나요?',
        answer:
          '<strong>사직서 자필 작성과 자진퇴사 평가는 별개. 권고·압박 정황이 있다면 비자발 평가가 가능합니다.</strong>',
      },
      {
        question: '회사가 끝까지 정정 안 해 주면 어떻게 하나요?',
        answer:
          '<strong>고용센터 이직사유 분쟁 신청 + 직권 조사 트랙으로 정정 없이도 평가가 가능한 영역입니다.</strong>',
      },
      {
        question: '권고사직 위로금을 받으면 자진퇴사가 되나요?',
        answer:
          '<strong>위로금 수령과 권고사직 사실은 별개로, 권고사직 정황이 인정되면 비자발 평가가 유지되는 영역입니다.</strong>',
      },
      {
        question: '회사가 허위 기재 시 처벌은요?',
        answer:
          '<strong>사업주가 거짓 이직확인서를 제출하면 과태료 부과 대상이 되는 영역입니다.</strong>',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '이직확인서 정정', href: '/guide/unemployment/unemployment-separation-document-correction' },
      { label: '권고사직 입증', href: '/guide/unemployment/unemployment-recommended-resign-proof-method' },
      { label: '권고사직 vs 자진퇴사', href: '/guide/unemployment/unemployment-recommendation-vs-resignation-boundary' },
      { label: '실업급여 이의신청', href: '/guide/unemployment/unemployment-objection-procedure' },
      { label: '실업급여 수급자격', href: '/guide/unemployment/unemployment-eligibility-requirements' },
    ],
  },

  // ─── 4. retirement-collective-agreement-cap-individual-claim-track ───
  {
    domain: 'retirement',
    slug: 'retirement-collective-agreement-cap-individual-claim-track',
    keyword: '단체협약 퇴직금 상한 개별 차액',
    questionKeyword: '단체협약에서 "퇴직금은 5천만원 상한"으로 합의한 적이 있어요. 법정 산정액은 6천 5백인데 차액 청구 되나요?',
    ctaKeyword: '단체협약 퇴직금 상한 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '단체협약 퇴직금 상한 — 5단계 법정 차액·개별 청구 정리 | 로앤가이드',
      description:
        '단체협약에서 퇴직금 상한이 있어도 법정 산정액과 차이가 크다면 개별 차액 청구 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"30년 근속 후 정년퇴직하면서 회사가 \'단체협약상 퇴직금 상한 5천만원\'을 적용해 5천만원만 입금했어요. 법정 산정(평균임금 × 1/30 × 근속일수)으로 계산하면 6천 5백만원 정도 됩니다. 차액 1천 5백만원이 단체협약 합의 때문에 사라진 셈인데, 저는 그 합의 당시 노조원도 아니었고 합의 내용도 사후에 알았어요." 근로기준법은 ① 법정 퇴직금은 강행 규정으로 ② 단체협약·취업규칙·근로계약으로 법정 기준을 하회할 수 없고 ③ 근로자에게 불리한 단체협약은 그 한도에서 무효로 평가되는 영역. 다만 단체협약 적용 범위·근로자 동의 절차·비조합원 적용 여부 다툼이 결합된 트랙입니다. 대응은 ① 법정 산정 ② 단체협약 적용 ③ 노동청 진정 ④ 차액 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 단체협약 퇴직금 상한 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 법정·단협·진정·차액·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 법정 퇴직금 산정</strong> — 평균임금 × 1/30 × 근속일수.</li>\n<li><strong>② 단체협약 적용 범위 평가</strong> — 조합원·비조합원·하한 vs 상한.</li>\n<li><strong>③ 노동청 임금체불 진정</strong> — 차액 신청.</li>\n<li><strong>④ 단체협약 일부 무효 주장</strong> — 강행 규정 위반 평가.</li>\n<li><strong>⑤ 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단체협약은 법정 기준을 \"상회\"할 수는 있어도 \"하회\"하지 못하는 영역. 법정 산정액보다 낮은 상한을 정한 부분은 강행 규정 위반으로 일부 무효 평가가 가능한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·재산정·진정·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 평균임금·근속일수 자료 보존 (즉시)</strong> — 직전 3개월 명세서·입사일.</li>\n<li><strong>2단계 — 단체협약·취업규칙·합의서 수집 (1~2주)</strong> — 상한 조항 입증.</li>\n<li><strong>3단계 — 법정 산정 vs 단협 산정 비교</strong> — 차액 확정.</li>\n<li><strong>4단계 — 노동청 임금체불 진정</strong> — 차액 신청.</li>\n<li><strong>5단계 — 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">단체협약 퇴직금 상한 차액 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 산정·단협·동의 갈래입니다.</strong></p>\n<ul>\n<li><strong>직전 3개월 급여명세서 (평균임금 산정 기초)</strong></li>\n<li><strong>입사일·근속일수 입증 자료 (인사기록·4대보험)</strong></li>\n<li><strong>단체협약 원문·부속 합의서</strong></li>\n<li><strong>취업규칙·퇴직금 규정·임금규정</strong></li>\n<li><strong>퇴직금 산정서·이체 내역 (회사 산정 입증)</strong></li>\n<li><strong>노조 가입·탈퇴 자료 (조합원·비조합원 구분)</strong></li>\n<li><strong>단협 갱신·체결 시점 회의록·공고</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인이 비조합원이거나 단협 체결 후 입사·정년에 가까운 사정이라면 적용 범위 다툼에 유리. 정년퇴직 직전 평균임금이 높다면 차액 규모도 커지는 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>법정 강행 규정</strong> — 단협으로 하회 불가.</li>\n<li><strong>단협 적용 범위</strong> — 조합원 vs 비조합원.</li>\n<li><strong>유리 원칙</strong> — 근로자에게 유리한 기준 우선.</li>\n<li><strong>개별 동의</strong> — 단협 외 별도 합의 효력.</li>\n<li><strong>3년 시효</strong> — 퇴직일부터.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 단체협약과 퇴직금 강행 규정',
        summary:
          '대법원 2022다285097(대법원, 2024.01.04 선고) 영역에서 법원은 퇴직금 산정 기준이 단체협약과 법정 기준 사이에 차이가 있는 사안에서, 단체협약이 근로기준법의 강행 규정에 해당하는 퇴직금 기준을 하회하는 부분은 그 한도에서 효력이 제한될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '법정 퇴직금은 단협·취업규칙으로 하회 불가. 상한 합의 부분 일부 무효 + 차액 청구 평가 가능 영역.',
      },
    ],
    faq: [
      {
        question: '제가 노조원이 아니었는데도 단협이 적용되나요?',
        answer:
          '<strong>비조합원에게는 적용 범위가 제한되며 사업장 단협 자동 적용 여부는 다툼 영역입니다.</strong>',
      },
      {
        question: '단협 체결 시 제가 동의한 적이 없는데요?',
        answer:
          '<strong>단협은 노조 대표 체결이 원칙이며 근로자에게 불리한 부분은 강행 규정 위반으로 무효 평가가 가능합니다.</strong>',
      },
      {
        question: '퇴직금 상한이 인정된 판례가 있나요?',
        answer:
          '<strong>합리적 한도 내 임원 퇴직금 제한 등 일부 사례가 있으나 근로자 일반 퇴직금에는 제한적 영역입니다.</strong>',
      },
      {
        question: '회사가 "관행이라 어쩔 수 없다"고 하는데요?',
        answer:
          '<strong>관행이 법정 강행 규정을 변경하지 못하는 영역으로 차액 청구가 가능합니다.</strong>',
      },
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>퇴직일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '평균임금 계산', href: '/guide/retirement/retirement-average-wage-calculation' },
      { label: '퇴직금 청구 절차', href: '/guide/retirement/retirement-payment-claim-procedure' },
      { label: '퇴직금 일부 지급 합의 무효', href: '/guide/retirement/retirement-partial-payment-agreement-void-5reasons' },
      { label: '포기 합의 무효', href: '/guide/retirement/retirement-waiver-agreement-invalid' },
      { label: '퇴직금 시효', href: '/guide/retirement/retirement-statute-of-limitations' },
    ],
  },

  // ─── 5. retirement-fixed-term-contract-gap-tenure-link-track ───
  {
    domain: 'retirement',
    slug: 'retirement-fixed-term-contract-gap-tenure-link-track',
    keyword: '기간제 공백기 갱신 계속근로 연결',
    questionKeyword: '1년 계약직으로 일하다 1주 쉬고 다시 1년 갱신했는데 회사가 "공백 있어서 합산 안 된다"며 1년치 퇴직금만 줘요.',
    ctaKeyword: '기간제 공백기 계속근로 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '기간제 공백기 계속근로 — 5단계 갱신 연결·퇴직금 합산 정리 | 로앤가이드',
      description:
        '기간제 계약 사이 공백기가 있어도 갱신 연속성이 있다면 계속근로 합산·차액 청구 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"1년 기간제 계약직으로 입사해 만기 다음 날까지 일하고 1주일 쉰 다음, 다시 같은 자리에 같은 업무로 1년 계약을 갱신했습니다. 이렇게 3번 반복해 총 3년 일하고 그만뒀는데 회사가 \'계약 사이마다 1주씩 공백이 있어 계속근로 단절\'이라며 마지막 1년치 퇴직금만 지급. 290만원만 들어왔어요. 1주 공백이 정말 단절인가요?" 대법원 판례는 ① 단절기간이 일시적이고 ② 갱신의 합리적 기대가 형성됐으며 ③ 동일 업무·동일 사업장 반복 근무라면 계속근로기간으로 통산될 수 있다는 점을 시사한 영역. 단순 형식적 공백만으로는 단절을 인정하지 않는 트랙입니다. 대응은 ① 갱신 연속성 ② 공백 사유 ③ 노동청 진정 ④ 차액 청구 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 기간제 공백기 계속근로 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 연속성·공백·진정·차액·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 갱신 연속성 평가</strong> — 동일 업무·동일 사업장·짧은 공백.</li>\n<li><strong>② 공백 사유 평가</strong> — 회사 사정 vs 형식적 단절.</li>\n<li><strong>③ 노동청 임금체불 진정</strong> — 미산입 퇴직금 신청.</li>\n<li><strong>④ 계속근로 통산</strong> — 전체 기간 합산 산정.</li>\n<li><strong>⑤ 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 1주·2주 같은 일시적 공백은 형식적 단절로 평가되지 않을 여지가 있는 영역. 갱신의 합리적 기대·동일 업무·반복 근무 사정이 결합되면 전체 기간을 계속근로로 평가하는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·진정·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 전 기간 계약서·갱신 자료 보존 (즉시)</strong> — 3차례 계약서·근로조건.</li>\n<li><strong>2단계 — 공백기 사유·복귀 자료 (1주)</strong> — 회사 안내·복귀 통지.</li>\n<li><strong>3단계 — 노동청 임금체불 진정</strong> — 미산입 퇴직금 차액 신청.</li>\n<li><strong>4단계 — 노동청 조사 (1~2개월)</strong> — 계속근로 평가.</li>\n<li><strong>5단계 — 민사 퇴직금 청구</strong> — 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">기간제 공백기 계속근로 합산 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 연속성·공백·산정 갈래입니다.</strong></p>\n<ul>\n<li><strong>3차례 근로계약서·갱신계약서 (동일 직무 입증)</strong></li>\n<li><strong>업무 분장·직책·소속 부서 자료 (계속 동일성)</strong></li>\n<li><strong>공백기 회사 안내·복귀 통지·문자</strong></li>\n<li><strong>4대보험 가입·상실·재가입 이력</strong></li>\n<li><strong>출근부·근태·급여명세서 (반복 근무 입증)</strong></li>\n<li><strong>동료 진술서 (같은 자리 복귀 입증)</strong></li>\n<li><strong>회사 인사 시스템·사원증·계정 보존 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공백기 동안에도 사원증·이메일·시스템 권한이 살아 있었다면 형식적 단절 부정에 결정적. 같은 부서·같은 자리·같은 업무 복귀라면 계속근로 평가에 강력.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공백기 길이</strong> — 일시적 vs 실질적 단절.</li>\n<li><strong>갱신의 합리적 기대</strong> — 반복 갱신·회사 시사.</li>\n<li><strong>업무 동일성</strong> — 직무·부서·근무 장소.</li>\n<li><strong>퇴직금 중간 정산 여부</strong> — 단절 시 정산 이력 확인.</li>\n<li><strong>3년 시효</strong> — 최종 퇴직일부터.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 계속근로기간과 일시적 공백',
        summary:
          '대법원 2019다68185(대법원, 2020.11.26 선고) 영역에서 법원은 퇴직금 청구 사안에서 근로계약 사이의 일시적 공백이 있어도 갱신의 합리적 기대와 동일 업무 반복 근무 사정이 결합되면 계속근로기간으로 통산해 평가할 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '단순 형식적 공백만으로 단절 불인정. 갱신 연속성 + 동일 업무 시 전 기간 계속근로 평가 가능 영역.',
      },
    ],
    faq: [
      {
        question: '공백이 1주가 아니라 1개월이어도 합산되나요?',
        answer:
          '<strong>공백 길이만이 아니라 회사 사정·갱신 기대·동일 업무를 종합 평가하는 영역입니다.</strong>',
      },
      {
        question: '계약 종료 후 4대보험 상실 처리됐는데도 가능한가요?',
        answer:
          '<strong>형식적 상실·재가입과 실질적 계속근로는 별개로 평가될 수 있는 영역입니다.</strong>',
      },
      {
        question: '회사가 매 계약 끝마다 퇴직금을 정산해 줬어요',
        answer:
          '<strong>중간 정산 이력이 있으면 그 부분은 공제되고 잔여 차액만 청구 가능 영역입니다.</strong>',
      },
      {
        question: '담당 부서·직무가 조금 달랐는데 합산되나요?',
        answer:
          '<strong>본질적 동일 업무라면 일부 변경은 단절 사유로 평가되지 않을 여지가 있습니다.</strong>',
      },
      {
        question: '시효는 언제부터인가요?',
        answer:
          '<strong>최종 퇴직일부터 3년입니다.</strong>',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '평균임금 계산', href: '/guide/retirement/retirement-average-wage-calculation' },
      { label: '퇴직금 청구 절차', href: '/guide/retirement/retirement-payment-claim-procedure' },
      { label: '재입사 계속근로', href: '/guide/retirement/retirement-rehire-continuous-service-calculation' },
      { label: '1년 미만 계속근로', href: '/guide/retirement/retirement-under-1-year-continuous-service-claim' },
      { label: '퇴직금 시효', href: '/guide/retirement/retirement-statute-of-limitations' },
    ],
  },
];
