import { SpokePage } from '../spoke-pages';

// batch54 wage+unemp+retire 7개 (2026-05-04)
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 회사가 야근·휴일근로 동의서를 일괄 강요하거나 동의 없는 시간만큼 연장근로를 시키는 근로자가 근로기준법 제53조 한도·집단동의·개별동의 한계를 정리해 동의 무효 다툼 + 가산수당 청구 가능성을 검토하도록 돕는 페이지다.
// 2. 이 페이지는 임금피크제 적용으로 임금이 일방 삭감됐는데 본인이 개별 동의하지 않은 근로자가 적법 요건(노조 집단동의 + 개별 근로계약 우선) 다툼과 삭감액 차액 청구 절차를 정리하도록 돕는 페이지다.
// 3. 이 페이지는 카페·배달·콜센터·매장 등에서 휴게시간 명목이지만 실제 호출 대기·고객 응대로 자유롭게 쉴 수 없었던 근로자가 휴게시간을 근로시간으로 편입해 임금·연장수당 차액 청구 가능성을 검토하도록 돕는 페이지다.
// 4. 이 페이지는 실업급여 수급 중 며칠 단기 알바를 하고 신고 누락한 근로자가 부정수급 처분의 고의·과실 다툼 + 자진 신고·이의신청 트랙으로 처분 완화 가능성을 검토하도록 돕는 페이지다.
// 5. 이 페이지는 임신·출산·육아로 업무 전환·휴직이 거절돼 자진퇴사한 근로자가 정당이직 사유 인정 자료(휴직 거부·업무전환 불허·근무환경 불가) 정리와 수급자격 인정 절차를 검토하도록 돕는 페이지다.
// 6. 이 페이지는 1년 미만 근로 후 퇴직했지만 시용·수습·재입사·계약갱신으로 사실상 1년 이상 근무한 근로자가 계속근로기간 통산 + 퇴직금 청구 가능성과 절차를 검토하도록 돕는 페이지다.
// 7. 이 페이지는 24시간 격일제·교대제로 근무한 근로자가 실제 근로일수 기준의 평균임금·통상임금 산정 + 가산수당 누락 다툼으로 퇴직금·수당 차액 청구 가능성을 검토하도록 돕는 페이지다.

export const spokesBatch54WageUnempRetire: SpokePage[] = [
  // ─── 1. wage / wage-overtime-consent-coercion-invalid ───
  {
    domain: 'wage',
    slug: 'wage-overtime-consent-coercion-invalid',
    keyword: '야근 휴일 동의서 강요 무효',
    questionKeyword: '야근·휴일근로 동의서를 일괄 강요받았는데 무효 다툴 수 있나요?',
    ctaKeyword: '야근 동의서 강요 무효 + 가산수당 차액 청구 가능성 확인',
    type: '정리형',
    perspective: 'victim',
    meta: {
      title: '야근·휴일 동의서 강요 — 무효 다툼 5단계 절차 | 로앤가이드',
      description:
        '야근·휴일근로 동의서를 일괄 강요당했거나 동의 없는 연장근로를 강제당했다면 무효 다툼과 가산수당 차액 청구가 가능합니다. 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"입사 첫날 야근·휴일근로 동의서를 일괄 받아갔고, 거부하면 평가에 반영한다고 압박해요. 무효 다툴 수 있나요?" 연장근로(주 12시간 한도)·휴일근로는 근로자 개별 동의가 원칙이고, 강요·일괄 서명·집단동의로 갈음할 수 없다는 것이 일관된 해석입니다(근로기준법 제53조·제94조 + 대법원 2018다200709 취지). 강요 정황과 실근로 자료가 있다면 동의 무효 다툼 + 가산수당 차액 청구 가능성을 함께 검토할 수 있어요.</p>',
    sections: [
      {
        title: '연장·휴일근로 동의의 한계 — 무효로 다툴 수 있는 4가지 신호',
        content:
          '<p><strong style="color:#1e3a5f">근로기준법 제53조와 대법원 2018다200709 취지를 종합하면 다음 사정이 강할수록 동의 무효 다툼이 가능합니다.</strong></p>\n<ul>\n<li><strong>① 일괄·강제 서명 압박</strong> — 입사 첫날·집단 회의에서 거부 옵션 없이 일괄 서명 강요. 거부 시 평가·계약갱신 불이익 시사.</li>\n<li><strong>② 주 12시간 한도 초과 강제</strong> — 근로기준법 제53조에서 정한 1주 12시간 연장근로 한도를 초과하는 동의는 그 한도 초과 부분 무효. 휴일근로 합산 52시간 초과도 한도 위반.</li>\n<li><strong>③ 집단동의로 개별동의 갈음 시도</strong> — 노사협의·취업규칙 변경에 노조·과반수 동의가 있어도 개별 근로자에게 불리하게 적용되는 구체적 동의는 별도. 대법원 2018다200709 취지에서 개별 근로계약이 더 유리하면 그 내용이 우선.</li>\n<li><strong>④ 실제 근로 vs 동의 범위 괴리</strong> — 동의서 양식엔 "월 30시간"이라 적혀 있지만 실제 60~80시간 강제. 동의 범위 밖 초과분은 별도 가산수당 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 동의서 양식만으로는 강요·압박·한도 초과·개별동의 부재 다툼이 가능합니다. 사후라도 무효 다툼 + 가산수당 청구가 가능한 사례가 다수예요.</blockquote>',
      },
      {
        title: '회사가 자주 내세우는 반박과 대응 포인트',
        content:
          '<p><strong style="color:#1e3a5f">근로자가 동의 무효를 주장할 때 회사 측 반박과 대응 논리는 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"이미 서명한 동의서다"</strong> → 강요·일괄 서명·거부 시 불이익 정황을 메일·메신저·동료 증언으로 입증하면 동의 효력 다툼 여지.</li>\n<li><strong>"노조·과반수 동의 받았다"</strong> → 집단동의는 취업규칙 변경 요건일 뿐, 개별 근로자에게 불리하면 개별 근로계약 우선(대법원 2018다200709 취지).</li>\n<li><strong>"포괄임금이라 추가 청구 안 된다"</strong> → 시간 산정 가능 직종(사무·물류·콜센터)이면 포괄임금 효력 한계 다툼 가능.</li>\n<li><strong>"근로자가 자발적으로 야근했다"</strong> → 업무 지시·메신저·이메일·POS·CCTV로 사용자 지시·묵시 인정 자료 확보.</li>\n</ul>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 동의 무효 다툼 + 가산수당 차액 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 + 민사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 동의서 사본·강요 정황 자료 확보</strong> (즉시) — 동의서 원본·서명 시점·이메일·메신저·면담 녹취·동료 증언. 1주 12시간 한도 초과·휴일 합산 52시간 초과 자료.</li>\n<li><strong>2단계 — 실근로 시간 입증 자료 정리</strong> (즉시) — 출퇴근 기록·근태 시스템·메신저·이메일·POS·CCTV·차량 운행기록 등 객관 자료로 실제 연장·야간·휴일 시간 입증.</li>\n<li><strong>3단계 — 가산수당 차액 산출</strong> (즉시) — 통상임금 시급 × 1.5(연장)·1.5(야간 가산 또는 합산 200%)·1.5(휴일) × 동의 범위 초과·한도 초과 시간. 시효 3년치까지.</li>\n<li><strong>4단계 — 노동청 진정</strong> (3년 이내) — 노동포털(labor.moel.go.kr) 또는 관할 지방고용노동지청. 처리기간 25일(연장 가능). 시정지시 미이행 시 형사 송치(3년 이하 징역 또는 3,000만 원 이하 벌금).</li>\n<li><strong>5단계 — 민사 임금 청구 (필요 시)</strong> — 차액 + 연 20% 지연이자(퇴직자). 3,000만 원 이하면 소액심판으로 통상 2~3개월 판결.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 야근·휴일 동의서 강요, AI로 무효 가능성을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">동의서 작성 경위·실근로 시간·한도 초과 여부를 입력하면 무효 다툼과 차액 청구 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 / ⚠️ 다툼 포인트 / 🏛️ 신청·상담 경로',
        content:
          '<h4>📋 준비서류 체크리스트</h4>\n<ul>\n<li>야근·휴일근로 동의서 사본 (서명 시점·작성 경위 포함)</li>\n<li>근로계약서·취업규칙·임금협정·노사협의 회의록</li>\n<li>최근 3년 급여명세서 (가산수당 항목 추적)</li>\n<li>출퇴근 기록·근태 시스템·메신저·이메일·POS·CCTV 등 실근로 자료</li>\n<li>업무 지시·연장 요청 메일·문자·메신저</li>\n<li>강요·압박 정황 자료 (면담 녹취·동료 증언·평가 불이익 시사)</li>\n</ul>\n<h4>⚠️ 다툼 포인트</h4>\n<ul>\n<li>"이미 동의서 서명" → 강요 정황 입증으로 동의 효력 다툼.</li>\n<li>"집단동의 받았다" → 개별 근로자 불리 적용 시 개별 근로계약 우선(대법원 2018다200709 취지).</li>\n<li>"한도 초과 연장은 비상 상황" → 비상사태 판단 엄격, 일상적 강제는 한도 위반.</li>\n</ul>\n<h4>🏛️ 신청·상담 경로</h4>\n<ul>\n<li>고용노동부 노동포털 (labor.moel.go.kr) — 임금체불 진정 온라인 접수</li>\n<li>고용노동부 고객상담센터 1350 — 무료 안내</li>\n<li>대한법률구조공단 132 — 무료 법률상담</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 취업규칙의 불리 변경과 개별 근로계약의 우선 적용',
        summary:
          '대법원 2018다200709 사건(대법원, 2019.11.14 선고)에서 법원은 근로기준법 제94조에서 정한 집단적 동의를 받아 근로자에게 불리한 내용으로 취업규칙이 변경된 경우라도 변경된 취업규칙의 기준에 의해 그보다 유리한 근로조건을 정한 기존의 개별 근로계약 내용이 자동 변경되지 않으며, 근로자의 개별적 동의가 없는 한 취업규칙보다 유리한 근로계약 내용이 우선하여 적용된다고 판시했습니다.',
        takeaway: '집단동의로 개별 근로자에게 불리한 변경이 자동 강제되지 않습니다. 야근·휴일 동의서 강요나 한도 초과 연장도 개별 동의·한도 준수 여부를 다퉈 무효 가능성을 검토할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '입사 첫날 일괄로 야근 동의서에 서명했어요. 다툴 수 있나요?',
        answer:
          '<strong>강요·거부 시 불이익 정황이 있으면 동의 효력 다툼 여지가 있습니다.</strong> 이메일·메신저·동료 증언으로 작성 경위를 입증해보세요.',
      },
      {
        question: '주 12시간 한도를 초과해 연장근로 시키는데 합법인가요?',
        answer:
          '<strong>근로기준법 제53조 한도 초과 부분은 무효입니다.</strong> 비상사태 등 예외 사유 없이 일상적으로 한도를 초과하면 위반이고 가산수당과 별도로 형사 책임도 발생할 수 있어요.',
      },
      {
        question: '회사가 "노조 동의 받았다"고 합니다',
        answer:
          '<strong>집단동의는 취업규칙 변경 요건일 뿐, 개별 근로자에게 불리하면 개별 근로계약 우선(대법원 2018다200709 취지).</strong> 본인 근로계약과 대조해보세요.',
      },
      {
        question: '동의 없는 휴일근로도 청구 가능한가요?',
        answer:
          '<strong>네. 사용자 지시·묵시 동의로 휴일근로한 사실이 입증되면 휴일근로 가산수당 청구 가능합니다.</strong> 출퇴근 기록·메신저로 입증해보세요.',
      },
      {
        question: '이미 퇴직했는데 청구 가능한가요?',
        answer:
          '<strong>임금채권 시효는 3년이라 직전 36개월치 차액 청구가 가능합니다.</strong> 퇴직자라면 연 20% 지연이자도 함께 청구할 수 있어요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '연장근로 한도 52시간 위반', href: '/guide/wage/wage-overtime-over-weekly-52' },
      { label: '고정연장수당 실근로 차이', href: '/guide/wage/wage-fixed-overtime-actual-mismatch' },
      { label: '취업규칙 불리 변경 다툼', href: '/guide/wage/wage-employment-rule-change-unfavorable' },
      { label: '휴일근로 가산수당 청구', href: '/guide/wage/wage-holiday-work-150-percent-calculation' },
      { label: '야간근로 50% 가산수당', href: '/guide/wage/wage-night-work-50-percent-extra' },
    ],
  },

  // ─── 2. wage / wage-imgeumpeak-individual-consent-required ───
  {
    domain: 'wage',
    slug: 'wage-imgeumpeak-individual-consent-required',
    keyword: '임금피크제 개별동의 차감 다툼',
    questionKeyword: '회사가 임금피크제로 임금을 깎았는데 저는 개별 동의 안 했어요. 다툴 수 있나요?',
    ctaKeyword: '임금피크제 개별동의 부재 차액 청구 가능성 확인',
    type: '정리형',
    perspective: 'victim',
    meta: {
      title: '임금피크제 개별동의 — 차감액 차액 청구 5단계 | 로앤가이드',
      description:
        '임금피크제로 임금이 일방 삭감됐는데 본인이 개별 동의하지 않았다면 차감액 차액 청구가 가능합니다. 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"정년이 가까워졌다고 회사가 임금피크제를 적용해 임금을 60%로 삭감했어요. 노조 동의는 받았다는데 저는 개별 동의 안 했습니다. 다툴 수 있나요?" 임금피크제 적용으로 기존 근로계약상 임금이 삭감되는 경우 노조·과반수 집단동의가 있어도 개별 근로자가 동의하지 않으면 기존 근로계약이 우선 적용됩니다(대법원 2018다200709 판시). 시효 3년 안에서 차감액 차액 청구를 검토할 수 있어요.</p>',
    sections: [
      {
        title: '임금피크제 적법 요건 — 개별 동의가 필요한 4가지 사정',
        content:
          '<p><strong style="color:#1e3a5f">임금피크제로 인한 임금 삭감이 적법하려면 다음 요건이 모두 충족돼야 합니다.</strong></p>\n<ul>\n<li><strong>① 정년 연장·고용 보장 등 정당한 목적</strong> — 단순 인건비 절감만이 아니라 정년 연장·재고용 등 보상 조치가 함께 있어야 합리성 인정.</li>\n<li><strong>② 합리적 비교 — 삭감률 vs 보상 조치</strong> — 삭감 폭이 과도하면 합리성 부정. 보상 조치(정년 연장·업무 경감·교육 등)와 균형 필요.</li>\n<li><strong>③ 집단동의 (취업규칙 불리 변경)</strong> — 노조 또는 과반수 근로자 동의(근로기준법 제94조). 다만 집단동의만으로 개별 근로계약이 자동 변경되지 않음.</li>\n<li><strong>④ 개별 근로자 동의 (개별 근로계약 변경)</strong> — 기존 개별 근로계약상 임금 조건이 더 유리하다면 개별 동의 없이 임금피크 기준으로 삭감할 수 없음(대법원 2018다200709 판시).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 노조 집단동의 + 개별 동의가 모두 있어야 임금피크제가 적법하게 적용됩니다. 개별 동의 부재 시 기존 근로계약상 임금이 우선이고 차감액 차액 청구가 가능해요.</blockquote>',
      },
      {
        title: '회사가 자주 내세우는 반박과 대응 포인트',
        content:
          '<p><strong style="color:#1e3a5f">근로자가 차감액 차액을 청구할 때 회사 측 반박과 대응 논리는 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"노조 과반수 동의 받았다"</strong> → 집단동의는 취업규칙 변경 요건일 뿐 개별 근로계약 변경 효력 없음(대법원 2018다200709 판시).</li>\n<li><strong>"개별 동의서 받았다"</strong> → 강요·일괄 서명·거부 시 불이익 정황을 입증하면 동의 효력 다툼 가능. 동의 시점·작성 경위 자료 확보.</li>\n<li><strong>"정년 연장 보상이 있다"</strong> → 정년 연장 폭·실효성 vs 삭감률 비교. 보상이 형식적이거나 과도한 삭감이면 합리성 부정.</li>\n<li><strong>"이미 임금피크 기준으로 받아왔다"</strong> → 시효 3년 안 차감액은 청구 가능. 시효 지난 부분도 회사 신뢰 행위가 있으면 권리남용 항변(대법원 2024다294705) 검토.</li>\n</ul>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 임금피크 차감액 차액 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 + 민사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임금피크제 도입·적용 자료 확보</strong> (즉시) — 단체협약·취업규칙·노사협의 회의록·집단동의서·개별동의서·임금피크제 운용세칙. 본인 근로계약서 + 시점별 임금 변동.</li>\n<li><strong>2단계 — 차감액 산출</strong> (즉시) — 기존 근로계약상 임금 - 임금피크 적용 후 임금 = 차감액. 시효 3년치까지 합산. 통상임금·평균임금에 미친 영향(연장수당·퇴직금)도 함께 산출.</li>\n<li><strong>3단계 — 회사 정정 요청</strong> (선택) — 인사팀에 서면으로 개별동의 부재 다툼 + 차감액 정산 요청. 14일 회신 없으면 다음 단계.</li>\n<li><strong>4단계 — 노동청 진정</strong> (3년 이내) — 노동포털(labor.moel.go.kr). 처리기간 25일(연장 가능). 시정지시 미이행 시 형사 송치 가능.</li>\n<li><strong>5단계 — 민사 임금 청구 (필요 시)</strong> — 차액 + 연 20% 지연이자(퇴직자). 통상임금·평균임금 영향 함께 묶으면 청구 규모 확대 가능. 다수 근로자라면 집단소송 형태도 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금피크 개별동의 부재, AI로 차액 청구 가능성을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">임금피크 도입 시점·동의 경위·삭감률을 입력하면 차액 청구 가능성과 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 / ⚠️ 다툼 포인트 / 🏛️ 신청·상담 경로',
        content:
          '<h4>📋 준비서류 체크리스트</h4>\n<ul>\n<li>본인 근로계약서·연봉계약서 (임금피크 도입 전 기준)</li>\n<li>임금피크제 도입 단체협약·취업규칙·운용세칙</li>\n<li>노사협의 회의록·집단동의서·서명자 명부</li>\n<li>본인 개별동의 요청·서명·거부 정황 자료</li>\n<li>최근 3년 급여명세서 (시점별 임금 변동 추적)</li>\n<li>정년 연장·보상 조치 안내문 (회사 공식 자료)</li>\n</ul>\n<h4>⚠️ 다툼 포인트</h4>\n<ul>\n<li>"노조 동의 받았다" → 집단동의 vs 개별동의 구분 필요(대법원 2018다200709 판시).</li>\n<li>"보상 조치가 있다" → 보상 폭과 삭감률 균형 검토.</li>\n<li>"이미 받아왔다" → 시효 3년 안 차감액 청구 가능. 시효 도과분도 권리남용 항변 검토.</li>\n</ul>\n<h4>🏛️ 신청·상담 경로</h4>\n<ul>\n<li>고용노동부 노동포털 (labor.moel.go.kr) — 임금체불 진정 접수</li>\n<li>고용노동부 고객상담센터 1350 — 무료 안내</li>\n<li>대한법률구조공단 132 — 무료 법률상담</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임금피크 운용세칙 + 개별 근로자 동의 부재 시 효력',
        summary:
          '대법원 2018다200709 사건(대법원, 2019.11.14 선고)에서 법원은 근로자인 甲과 사용자가 기본연봉을 정한 연봉계약을 체결한 후 회사가 노조 과반수 동의를 받아 임금피크제 운용세칙을 제정·공고했지만 甲이 임금피크제 적용에 동의하지 않은 사안에서, 노조 동의를 받았더라도 기존 근로계약은 유효하게 존속하고 취업규칙에 따라 기존 근로계약상 연봉액을 삭감할 수 없다고 판시했습니다.',
        takeaway: '집단동의가 있어도 본인 개별동의 없이는 임금피크 적용으로 임금이 삭감되지 않습니다. 차감액에 대해 차액 청구를 검토할 수 있어요.',
      },
    ],
    faq: [
      {
        question: '회사가 노조 동의 받았다고 임금피크 적용했어요',
        answer:
          '<strong>노조 집단동의는 취업규칙 변경 요건일 뿐 개별 근로계약 자동 변경 효력 없습니다(대법원 2018다200709 판시).</strong> 개별 동의 부재로 다툴 여지가 있어요.',
      },
      {
        question: '강요로 개별동의서를 받았는데 효력 있나요?',
        answer:
          '<strong>강요·거부 시 불이익 정황이 입증되면 동의 효력 다툼이 가능합니다.</strong> 작성 경위·면담 녹취·메일을 모아두세요.',
      },
      {
        question: '임금피크 도입 후 3년 넘었는데 차액 청구 가능한가요?',
        answer:
          '<strong>시효 3년이라 직전 36개월치 차감액 청구가 가능합니다.</strong> 시효 지난 부분도 회사 신뢰 행위가 있으면 권리남용 항변(대법원 2024다294705) 검토 가능해요.',
      },
      {
        question: '정년 연장 보상이 있으면 임금피크가 적법한가요?',
        answer:
          '<strong>보상 폭·실효성과 삭감률 균형이 합리적이어야 적법성 인정됩니다.</strong> 형식적 보상이거나 과도한 삭감이면 합리성 부정 가능성이 있어요.',
      },
      {
        question: '퇴직금에도 영향이 있나요?',
        answer:
          '<strong>네. 임금피크로 평균임금이 줄면 퇴직금도 같이 줄어듭니다.</strong> 차액 청구 시 퇴직금 재산정도 함께 검토해보세요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '취업규칙 불리 변경 다툼', href: '/guide/wage/wage-employment-rule-change-unfavorable' },
      { label: '임금피크 퇴직금 영향', href: '/guide/retirement/retirement-wage-peak-severance' },
      { label: '평균임금 상여·연차수당 산입', href: '/guide/retirement/retirement-average-wage-bonus-dispute' },
      { label: '정기상여 통상임금 산입', href: '/guide/wage/wage-ordinary-wage-bonus-included' },
      { label: '임금 지연이자 연 20% 청구', href: '/guide/wage/wage-late-payment-interest-claim' },
    ],
  },

  // ─── 3. wage / wage-break-standby-time-included ───
  {
    domain: 'wage',
    slug: 'wage-break-standby-time-included',
    keyword: '휴게시간 근로시간 편입',
    questionKeyword: '카페·매장 휴게시간에 호출 받으면 근로시간으로 인정받을 수 있나요?',
    ctaKeyword: '휴게시간 근로시간 편입 + 임금 차액 청구 가능성 확인',
    type: '정리형',
    perspective: 'victim',
    meta: {
      title: '휴게시간 근로시간 편입 — 임금 차액 청구 5단계 | 로앤가이드',
      description:
        '카페·매장·콜센터 휴게시간이 사실상 호출 대기였다면 근로시간으로 편입해 임금·연장수당 차액 청구가 가능합니다. 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"오후 1시간 휴게시간이라는데 그 시간에도 매장 안에 있고 손님이 오면 응대해야 했어요. 임금 청구 가능한가요?" 휴게시간(근로기준법 제54조)은 근로자가 자유롭게 이용할 수 있는 시간이어야 합니다. 사용자 지휘·감독 아래서 호출 대기·고객 응대 가능성이 있는 시간은 휴게가 아니라 대기시간(근로시간)으로 평가될 수 있어요(고용노동부 행정해석 근기 68207-3298 등). 시효 3년 안에서 임금·연장수당 차액 청구를 검토할 수 있습니다.</p>',
    sections: [
      {
        title: '휴게 vs 대기 — 근로시간 편입이 인정되기 쉬운 4가지 신호',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 행정해석과 다수 판례 흐름을 종합하면 다음 사정이 강할수록 휴게시간이 근로시간으로 편입되기 쉽습니다.</strong></p>\n<ul>\n<li><strong>① 사업장 이탈 제한</strong> — 휴게시간이지만 매장·사무실·차량 안에 있어야 하거나 일정 거리 이상 이동 금지된 경우.</li>\n<li><strong>② 즉시 호출·복귀 의무</strong> — 손님이 오면 응대, 전화·무전기 호출 시 즉시 대응. 카페·매장·콜센터·배달 대기·시설관리·간병에서 자주 발생.</li>\n<li><strong>③ 식사·휴식조차 자유롭지 않음</strong> — 식사를 매장 안에서 빠르게 해결, 카운터 옆에서 대기, 화장실 가는 것조차 양해를 구해야 하는 경우.</li>\n<li><strong>④ 회사가 휴게시간 통제·기록</strong> — 근태시스템에 휴게시간을 자동 차감하지만 실제로는 대기 강제, 회사 측이 휴게시간 운영을 통제.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 명목상 휴게라도 사용자 지휘·감독 아래 자유 이용이 제한되면 근로시간으로 평가될 수 있어요. 임금·연장수당·주휴수당까지 차액 청구가 가능한 사례가 있습니다.</blockquote>',
      },
      {
        title: '회사가 자주 내세우는 반박과 대응 포인트',
        content:
          '<p><strong style="color:#1e3a5f">근로자가 휴게시간을 근로시간으로 다툴 때 회사 측 반박과 대응 논리는 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"근로계약서에 휴게 1시간 명시"</strong> → 명시는 형식, 실제 자유 이용 가능성으로 판단. 매장 이탈 제한·호출 대기 자료 확보.</li>\n<li><strong>"식사할 시간은 줬다"</strong> → 식사 시간이라도 호출 대기·자유 이탈 제한이면 휴게로 보기 어려움.</li>\n<li><strong>"근태시스템에 휴게 자동 차감"</strong> → 실제 자유 이용 여부 입증으로 시스템 처리 무효 다툼.</li>\n<li><strong>"근로자가 자발적으로 매장에 있었다"</strong> → 사용자 지휘·암묵적 지시·고객 응대 빈도 자료로 다툼.</li>\n</ul>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 휴게시간 근로시간 편입 + 임금 차액 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 + 민사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 휴게 운영 자료 확보</strong> (즉시) — 근로계약서·취업규칙·근태시스템 화면·휴게시간 안내문·매장 운영 매뉴얼.</li>\n<li><strong>2단계 — 휴게시간 사용 실태 입증</strong> (즉시) — 매장 이탈 금지·호출 대기 정황 자료. CCTV·POS·메신저·동료 증언·고객 응대 빈도·식사 사진 등.</li>\n<li><strong>3단계 — 근로시간 재산정 + 차액 산출</strong> (즉시) — 휴게시간 → 근로시간 편입 후 1일·1주 근로시간 재계산. 한도 초과 부분은 가산수당 별도. 시효 3년치까지 합산.</li>\n<li><strong>4단계 — 노동청 진정</strong> (3년 이내) — 노동포털(labor.moel.go.kr). 처리기간 25일(연장 가능). 행정해석을 인용해 휴게시간 다툼 명확히.</li>\n<li><strong>5단계 — 민사 임금 청구 (필요 시)</strong> — 차액 + 연 20% 지연이자(퇴직자). 동료 다수면 집단소송 형태도 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 휴게시간 근로 편입, AI로 차액 청구 가능성을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">휴게 운영 실태·이탈 제한·호출 대기 자료를 입력하면 근로시간 편입 가능성과 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 / ⚠️ 다툼 포인트 / 🏛️ 신청·상담 경로',
        content:
          '<h4>📋 준비서류 체크리스트</h4>\n<ul>\n<li>근로계약서·취업규칙 (휴게시간 명시 부분)</li>\n<li>근태시스템·출퇴근 기록·휴게 자동차감 화면 캡처</li>\n<li>매장 운영 매뉴얼·휴게시간 안내문·근무표</li>\n<li>호출 대기·고객 응대 자료 (CCTV·POS·메신저)</li>\n<li>이탈 제한 정황 (매장 안 휴게실·식사 사진)</li>\n<li>동료 증언서·동일 직군 다수 진술</li>\n</ul>\n<h4>⚠️ 다툼 포인트</h4>\n<ul>\n<li>"휴게시간 명시" → 자유 이용 실태로 효력 다툼.</li>\n<li>"식사 시간 줬다" → 식사 중 호출·이탈 제한 자료 확보.</li>\n<li>"근태시스템 자동 차감" → 시스템 처리는 형식, 실제 사용 실태 우선.</li>\n</ul>\n<h4>🏛️ 신청·상담 경로</h4>\n<ul>\n<li>고용노동부 노동포털 (labor.moel.go.kr) — 임금체불 진정 접수</li>\n<li>고용노동부 고객상담센터 1350 — 무료 안내</li>\n<li>대한법률구조공단 132 — 무료 법률상담</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 휴게시간 자유 이용과 통상임금 시급 산정',
        summary:
          '대구고법 2020나22408 사건(대구고법, 2022.03.23 선고)에서 법원은 도급 근로자에 대한 시간급 통상임금 산정에 있어서 1일 8시간 근무 중 1시간 휴게시간을 제외한 시간을 총근로시간으로 본 사례를 통해 휴게시간이 근로시간에서 제외되려면 자유 이용이 가능해야 한다는 전제를 확인했습니다. 자유 이용이 사실상 제한된 시간이라면 근로시간으로 편입해 임금·가산수당을 산정할 수 있다는 시사점을 제공합니다.',
        takeaway: '명목상 휴게라도 사용자 지휘 아래 자유 이용이 제한되면 근로시간으로 편입돼 임금·가산수당 차액 청구를 검토할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '카페에서 점심시간 1시간이 휴게라는데 매장 안에 있어야 했어요',
        answer:
          '<strong>매장 이탈 제한·호출 대기 정황이 입증되면 근로시간으로 편입 가능성이 있습니다.</strong> CCTV·POS·동료 증언으로 자료를 모아보세요.',
      },
      {
        question: '식사 시간은 줬는데 손님 오면 응대해야 했어요',
        answer:
          '<strong>식사 중 호출 응대 의무가 있으면 휴게로 보기 어렵습니다.</strong> 응대 빈도·메신저 호출 기록을 확보해보세요.',
      },
      {
        question: '근태시스템이 휴게시간 자동 차감해요. 다툴 수 있나요?',
        answer:
          '<strong>시스템 처리는 형식, 실제 자유 이용 실태가 우선입니다.</strong> 매장 이탈 금지·이용 제한 자료로 시스템 처리 무효를 다퉈볼 수 있어요.',
      },
      {
        question: '근로시간으로 편입되면 어떤 임금이 늘어나나요?',
        answer:
          '<strong>기본임금·연장수당·야간수당·휴일수당·주휴수당이 모두 재산정됩니다.</strong> 통상임금 단가가 변하면 추가 청구 규모가 커질 수 있어요.',
      },
      {
        question: '이미 퇴직했는데 청구 가능한가요?',
        answer:
          '<strong>임금채권 시효는 3년이라 직전 36개월치 차액 청구가 가능합니다.</strong> 퇴직자라면 연 20% 지연이자도 함께 청구할 수 있어요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '대기시간 근로시간 인정', href: '/guide/wage/wage-commute-standby-time-included' },
      { label: '야간수면시간 근로시간 다툼', href: '/guide/wage/wage-night-sleeping-hours-working-time' },
      { label: '연장근로 가산수당 청구', href: '/guide/wage/wage-overtime-unpaid-claim' },
      { label: '주휴수당 최저임금 산입', href: '/guide/wage/wage-minimum-weekly-holiday-included' },
      { label: '임금 지연이자 연 20% 청구', href: '/guide/wage/wage-late-payment-interest-claim' },
    ],
  },

  // ─── 4. unemployment / unemployment-short-part-time-unreport-rescue ───
  {
    domain: 'unemployment',
    slug: 'unemployment-short-part-time-unreport-rescue',
    keyword: '실업급여 단기 알바 신고 누락',
    questionKeyword: '실업급여 받는 동안 며칠 알바 한 걸 신고 못 했어요. 어떻게 대응하나요?',
    ctaKeyword: '단기 알바 미신고 부정수급 처분 완화 가능성 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '실업급여 단기 알바 미신고 — 부정수급 대응 5단계 | 로앤가이드',
      description:
        '실업급여 수급 중 단기 알바 신고 누락으로 부정수급 처분을 받았다면 고의 부재 다툼 + 이의신청으로 처분 완화가 가능합니다. 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"실업급여 받는 중에 며칠 일당 알바 한 걸 깜빡 신고 못 했더니 부정수급으로 전액 반환 통보를 받았어요. 다툴 수 있나요?" 부정수급 처분의 핵심 쟁점은 "고의 vs 과실"입니다. 실업인정 신청서에 단기 일용근로를 단순 착오로 누락한 경우라면 고의 부재 다툼·근로내역 해석 다툼·자진 신고 트랙으로 처분 완화 가능성을 검토할 수 있어요(2023재결 제32호 vs 2023재결 제42호 흐름). 이의신청·심사청구는 처분 통지 후 90일 안에 접수해야 합니다.</p>',
    sections: [
      {
        title: '단기 알바 미신고 처분 완화가 가능한 4가지 신호',
        content:
          '<p><strong style="color:#1e3a5f">고용보험심사위원회 재결례 흐름을 종합하면 다음 사정이 강할수록 처분 완화 가능성이 강화됩니다.</strong></p>\n<ul>\n<li><strong>① 일용근로 vs 노무제공 해석 다툼</strong> — 건설일용근로자 등 일부 사례에서는 "근로내역"에 노무제공내역이 포함되지 않는다는 해석으로 처분 취소 사례가 있음(2023재결 제42호 참조).</li>\n<li><strong>② 단순 착오·해석 부주의</strong> — 알바 직후 신고를 까먹은 단순 망각이거나 "알바=신고 대상" 인식 부족인 경우. 다음 실업인정에 정정 신고했으면 신뢰도 강화.</li>\n<li><strong>③ 자진 신고·정정 노력</strong> — 적발 전에 본인이 먼저 고용센터에 정정 신고했거나 잘못을 인정하고 협조했다면 추가징수 완화 가능성.</li>\n<li><strong>④ 생계곤란·반복성 부재</strong> — 처음 실수이고 환수액이 생계곤란 사정이 있다면 분할납부·일부 면제 신청 인정 폭이 넓음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단기 알바 미신고는 사정에 따라 처분 폭이 크게 달라집니다. 사실관계와 사정을 구체적으로 정리해 이의신청·심사청구 트랙을 활용해보세요.</blockquote>',
      },
      {
        title: '환수·반환·추가징수 처분 구성과 분할납부 가능성',
        content:
          '<p><strong style="color:#1e3a5f">단기 알바 미신고 부정수급 처분은 통상 다음 3가지로 구성됩니다.</strong></p>\n<ul>\n<li><strong>지급제한</strong> — 부정수급 적발 후 잔여 수급일수 지급 중단.</li>\n<li><strong>반환명령</strong> — 부정수급 기간 지급된 구직급여 전액 또는 1회분 반환.</li>\n<li><strong>추가징수</strong> — 부정수급액의 최대 5배까지 추가징수 가능(고용보험법 제62조). 다만 단순 착오·고의 부재가 인정되면 추가징수가 면제·완화되는 사례도 있음.</li>\n</ul>\n<p style="margin-top:12px"><strong>분할납부·일부 면제</strong>는 생계곤란·고의 부재·환수액 과다 등 사정이 있으면 신청 가능. 처분 통지서에 분할납부 신청 안내가 함께 오는 경우가 많아요.</p>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 며칠 일용근로(예: 3일) 미신고로 인한 부정수급은 단순 착오·자진 신고·생계 사정 입증 시 추가징수 면제·반환액 일부 감면 사례가 있어요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 부정수급 처분 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">고용보험 이의신청 + 심사청구 + 재심사 트랙을 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 처분 통지서·근거자료 확보</strong> (즉시) — 부정수급 처분 통지서·근거 사실관계·계산 내역. 본인이 신고한 실업인정 자료·일용근로 통장 입금 내역 대조.</li>\n<li><strong>2단계 — 고의·과실 여부 정리</strong> (즉시) — 미신고가 단순 착오인지 고의인지 시점·사정 정리. 자진 신고·정정 노력·신고 누락 사유 자료 확보.</li>\n<li><strong>3단계 — 고용보험 심사청구</strong> (처분 통지 후 90일 내) — 고용보험심사관에 심사청구서 제출. 처리기간 약 3개월. 단순 착오·근로내역 해석·자진 신고 등 사정 강조.</li>\n<li><strong>4단계 — 고용보험심사위원회 재심사</strong> (심사 결정 후 90일 내) — 심사 기각 시 재심사. 처분 취소·일부 변경·완화 사례 다수.</li>\n<li><strong>5단계 — 분할납부·일부 면제 신청</strong> — 생계곤란 입증 자료(소득증빙·가족관계·의료비 등) + 분할납부 계획서 제출. 형사 송치 별건이라면 변호사 상담을 검토해보세요.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 단기 알바 미신고 처분, AI로 대응 가능성을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">처분 내용·미신고 사정·자진 신고 여부를 입력하면 다툼 가능성과 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">실업급여 받을 수 있는지 AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 / ⚠️ 다툼 포인트 / 🏛️ 신청·상담 경로',
        content:
          '<h4>📋 준비서류 체크리스트</h4>\n<ul>\n<li>부정수급 처분 통지서·계산 내역</li>\n<li>실업인정 신청서·구직활동 자료 사본</li>\n<li>일용근로·노무제공 내역·통장 입금 내역</li>\n<li>미신고 사유 입증자료 (메모·이메일·메시지)</li>\n<li>자진 신고·정정 노력 자료 (고용센터 방문기록·전화기록)</li>\n<li>생계곤란 입증자료 (소득증빙·가족관계·의료비)</li>\n</ul>\n<h4>⚠️ 다툼 포인트</h4>\n<ul>\n<li>"근로내역 vs 노무제공내역" → 일부 직군에서 노무제공내역은 근로내역에 미포함 해석 가능(2023재결 제42호 참조).</li>\n<li>"고의 부재" → 단순 착오·해석 부주의면 추가징수 완화 여지.</li>\n<li>"자진 신고" → 적발 전 본인 신고 시 처분 폭 줄어드는 사례.</li>\n</ul>\n<h4>🏛️ 신청·상담 경로</h4>\n<ul>\n<li>관할 고용센터 — 정정 신고·이의신청·분할납부 신청</li>\n<li>고용보험심사관 / 고용보험심사위원회 — 심사·재심사</li>\n<li>고용노동부 고객상담센터 1350 — 무료 안내</li>\n<li>대한법률구조공단 132 — 무료 법률상담</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '재결례 — 일용근로 3일 미신고에 대한 부정수급 처분 적법 사례',
        summary:
          '고용보험심사위원회 2023재결 제32호 사건(고용보험심사위원회, 2023.05.10 선고)에서 위원회는 일용근로 한 사실이 3일에 불과하더라도 실업인정 시 신고하지 않고 구직급여를 부정하게 지급받았으므로 해당 실업인정 대상기간에 지급받은 구직급여 전부를 반환토록 한 처분은 적법하다고 판단했습니다. 다만 사정에 따라 추가징수 면제·일부 완화 가능성은 별도로 검토될 여지가 있습니다.',
        takeaway: '단기 알바 미신고는 처분이 적법하게 인정되는 사례가 있어, 근로내역 해석·고의 부재·자진 신고 등 사정을 구체적으로 정리해 이의신청·심사청구로 처분 폭 완화를 검토하는 것이 안전합니다.',
      },
    ],
    faq: [
      {
        question: '며칠 알바 미신고로 전액 반환 통보를 받았어요',
        answer:
          '<strong>처분 통지 후 90일 안에 이의신청·심사청구가 가능합니다.</strong> 단순 착오·자진 신고 사정을 정리해 처분 완화를 다퉈보세요.',
      },
      {
        question: '알바한 사실을 다음 실업인정에 정정 신고했는데도 부정수급인가요?',
        answer:
          '<strong>자진 신고는 처분 완화 사정으로 작용할 수 있습니다.</strong> 적발 전 정정 신고였다면 추가징수 면제·반환액 일부 감면 가능성 있어요.',
      },
      {
        question: '대리운전·플랫폼 노동도 신고 대상인가요?',
        answer:
          '<strong>일부 직군에서 "근로내역"과 "노무제공내역"이 구분되는 해석이 있습니다(2023재결 제42호 참조).</strong> 본인 직군별로 구체 사실관계를 다퉈볼 수 있어요.',
      },
      {
        question: '환수액이 너무 많아 한 번에 갚기 어려워요',
        answer:
          '<strong>분할납부·일부 면제 신청이 가능합니다.</strong> 생계곤란 입증 자료(소득증빙·의료비·가족관계)를 첨부해 신청해보세요.',
      },
      {
        question: '형사 송치 통보까지 받으면 어떻게 하나요?',
        answer:
          '<strong>고의가 강한 부정수급은 형사 절차도 별도 진행됩니다.</strong> 행정 처분 다툼과 별도로 변호사 상담을 검토해보세요.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '부정수급 환수 통보 대응', href: '/guide/unemployment/unemployment-fraud-claim-recovery-procedure' },
      { label: '부정수급 처벌 대응', href: '/guide/unemployment/unemployment-fraud-penalty-response' },
      { label: '실업급여 정당이직 사유', href: '/guide/unemployment/unemployment-voluntary-quit-benefits' },
      { label: '실업급여 수급자격 점검', href: '/guide/unemployment/unemployment-eligibility-check-guide' },
      { label: '재취업 활동 신고 방법', href: '/guide/unemployment/unemployment-reemployment-activity-report' },
    ],
  },

  // ─── 5. unemployment / unemployment-pregnancy-maternity-just-cause ───
  {
    domain: 'unemployment',
    slug: 'unemployment-pregnancy-maternity-just-cause',
    keyword: '임신 출산 자진퇴사 정당이직',
    questionKeyword: '임신·출산으로 자진퇴사했는데 실업급여 받을 수 있나요?',
    ctaKeyword: '임신 출산 자진퇴사 정당이직 인정 가능성 확인',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '임신·출산 자진퇴사 — 정당이직 인정 5단계 | 로앤가이드',
      description:
        '임신·출산·육아로 업무전환·휴직이 거절돼 자진퇴사한 경우 정당이직 사유로 실업급여 수급이 가능합니다. 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"임신 후기에 무거운 짐 나르는 일이 부담돼 부서 이동을 요청했는데 회사가 거절해 결국 자진퇴사했어요. 실업급여 받을 수 있나요?" 본인 사정으로 자진퇴사한 경우라도 임신·출산·육아로 업무 종류 전환이나 휴직이 허용되지 않아 부득이 이직한 경우는 정당이직 사유로 인정될 여지가 큽니다(고용보험법 제58조 제2호 + 2021재결 제264호 흐름). 휴직 거부·업무 전환 불허·근무환경 부적합 자료를 정리하면 수급자격 인정 가능성을 검토할 수 있어요.</p>',
    sections: [
      {
        title: '임신·출산 자진퇴사가 정당이직으로 인정되기 쉬운 4가지 정황',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 제58조와 재결례 흐름을 종합하면 다음 사정이 강할수록 정당이직 인정 가능성이 강화됩니다.</strong></p>\n<ul>\n<li><strong>① 업무 종류 전환 요청 → 거절</strong> — 임신 후기에 무거운 짐·장시간 서서 일·야간·교대 등 업무 부담을 줄여달라 요청했지만 회사가 거절. 부서 이동 요청·서면 회신 자료가 핵심.</li>\n<li><strong>② 휴직 신청 → 거절</strong> — 임신 후기·산전후·육아휴직 신청에 대해 회사가 거절·회피. 근로기준법 제74조·남녀고용평등법 위반 정황이 강하면 수급자격 + 별도 권리구제도 가능.</li>\n<li><strong>③ 근무환경 부적합 + 회사 조치 부재</strong> — 의사 진단으로 위험 작업 금지·근무시간 단축 권고가 있었는데 회사가 적정 조치 없이 기존 업무 강요.</li>\n<li><strong>④ 본인 사직서 사유 vs 실제 정황 차이</strong> — 사직서에 "개인사정"으로 적었어도 실제 임신·출산 사정이 객관 자료로 입증되면 정정 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사직서 양식이 자진퇴사여도 임신·출산·육아 사정을 회사에 알리고 업무전환·휴직을 요청한 자료가 있으면 정당이직으로 다툴 여지가 큽니다.</blockquote>',
      },
      {
        title: '자진퇴사로 굳어지는 사정 (반박 포인트)',
        content:
          '<p><strong style="color:#1e3a5f">반대로 다음 사정이 강하면 자진퇴사로 굳어지기 쉬워 다툼 난이도가 올라갑니다.</strong></p>\n<ul>\n<li><strong>업무전환·휴직 요청 부재</strong> — 회사에 사정을 알리거나 조정 요청을 하지 않고 바로 사직한 경우. 정당이직 정황 입증 약화.</li>\n<li><strong>회사가 적정 조치 제안 → 본인 거절</strong> — 회사가 부서 이동·재택근무·휴직을 제안했으나 본인이 거절한 경우.</li>\n<li><strong>자료 부재</strong> — 부서 이동 요청·휴직 신청 등 객관 자료(메일·문자·인사부 대화) 없이 본인 진술만 있는 경우.</li>\n<li><strong>본인이 먼저 이직 의사 표명</strong> — 회사 거절 전에 본인이 먼저 이직 의사를 밝힌 메일·면담 기록.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인 사정에 따른 자진퇴사라 해도 회사 측 거절·근무환경 부적합 자료가 강하면 정당이직 인정 사례가 있어요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 임신·출산 정당이직 + 실업급여 5단계',
        content:
          '<p><strong style="color:#1e3a5f">고용센터 이직사유 정정 + 심사청구 트랙을 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 임신·출산 사정 입증 자료 정리</strong> (즉시) — 산모수첩·진단서·의사 권고·임신 시점 메모. 부서 이동 요청 메일·휴직 신청서·인사부 회신 정리.</li>\n<li><strong>2단계 — 회사에 이직사유 정정 요청</strong> (즉시) — 인사팀에 서면으로 임신·출산 사유 정정 + 이직확인서 재발급 요청. 회사 미응 시 다음 단계로.</li>\n<li><strong>3단계 — 고용센터 이직사유 정정 신청</strong> (90일 내) — 본인이 직접 고용센터에 정정 신청 가능. 임신·출산 정황 자료 첨부. 고용센터에서 사실관계 조사.</li>\n<li><strong>4단계 — 고용보험 심사청구</strong> (이의 결정 후 90일 내) — 이의신청 결과 불복 시 고용보험심사관에 심사청구. 처리기간 약 3개월.</li>\n<li><strong>5단계 — 고용보험심사위원회 재심사</strong> (심사 결정 후 90일 내) — 심사 기각 시 재심사. 임신·출산·돌봄 정당이직 사유 인정 사례 다수.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임신·출산 자진퇴사, AI로 정당이직 인정 가능성을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">사직 경위·휴직 요청·업무 전환 거절 자료를 입력하면 정당이직 가능성과 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">실업급여 받을 수 있는지 AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 / ⚠️ 다툼 포인트 / 🏛️ 신청·상담 경로',
        content:
          '<h4>📋 준비서류 체크리스트</h4>\n<ul>\n<li>사직서·이직확인서·고용보험 피보험자격 상실신고서 사본</li>\n<li>산모수첩·진단서·의사 권고 자료 (위험 작업 금지·근무시간 단축 등)</li>\n<li>부서 이동·업무 전환 요청 메일·문자·메신저</li>\n<li>휴직 신청서·인사부 회신·거절 사유 통보</li>\n<li>근무환경 부적합 정황 (업무 사진·근무표·근무 강도 자료)</li>\n<li>실업급여 수급자격 불인정 처분 통보서</li>\n<li>고용센터 이직사유 정정 신청서·심사청구서 사본</li>\n</ul>\n<h4>⚠️ 다툼 포인트</h4>\n<ul>\n<li>"사직서 본인 사유 기재" → 작성 경위·임신 사정을 객관 자료로 보완.</li>\n<li>"휴직 신청 안 했다" → 비공식 면담·구두 요청 자료도 보조자료로 활용.</li>\n<li>"회사가 부서 이동 제안했다" → 제안 내용의 적정성·실효성 다툼.</li>\n</ul>\n<h4>🏛️ 신청·상담 경로</h4>\n<ul>\n<li>관할 고용센터 — 이직사유 정정 신청</li>\n<li>고용보험심사관 / 고용보험심사위원회 — 심사·재심사</li>\n<li>고용노동부 고객상담센터 1350 — 무료 안내</li>\n<li>대한법률구조공단 132 — 무료 법률상담</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '재결례 — 업무 전환·휴직 불허로 인한 이직의 정당이직 인정',
        summary:
          '고용보험심사위원회 2021재결 제264호 사건(고용보험심사위원회, 2021.12.22 선고)에서 위원회는 청구인이 손목 통증으로 업무 수행이 곤란해 회사에 업무 전환이나 휴직을 요청했지만 허용되지 않아 이직한 사안에서, 업무 종류의 전환이나 휴직이 허용되지 않아 이직한 경우에 해당하므로 수급자격이 제한되지 않는 정당한 이직사유에 해당한다고 보고 수급자격을 인정한 사례입니다.',
        takeaway: '본인 사정에 따른 자진퇴사라도 업무 전환·휴직 요청이 거절돼 부득이 이직한 경우는 정당이직으로 인정될 여지가 큽니다. 임신·출산·육아 사정도 같은 맥락에서 다툴 수 있어요.',
      },
    ],
    faq: [
      {
        question: '임신 후기에 무거운 짐 나르기 부담돼 부서 이동 요청했는데 거절당했어요',
        answer:
          '<strong>업무 전환 요청·거절 자료가 있으면 정당이직 인정 가능성이 큽니다.</strong> 메일·문자·인사부 회신을 모아 정정 신청해보세요.',
      },
      {
        question: '산전후휴가·육아휴직 신청을 회사가 거부했어요',
        answer:
          '<strong>휴직 거부는 정당이직 사유로 작용할 수 있고, 근로기준법·남녀고용평등법 위반도 별도 다툴 수 있습니다.</strong> 신청서·회신·거절 사유 자료를 확보하세요.',
      },
      {
        question: '사직서에 "개인사정"으로 적었는데 정정 가능한가요?',
        answer:
          '<strong>임신·출산 사정이 객관 자료로 입증되면 정정 가능성이 있습니다.</strong> 산모수첩·진단서·요청 메일을 시점순으로 정리하세요.',
      },
      {
        question: '회사가 재택근무를 제안했는데 거절했어요. 다툴 수 있나요?',
        answer:
          '<strong>제안 내용의 적정성·실효성 다툼이 가능합니다.</strong> 재택의 직무 적합성·실제 운영 가능성을 자료로 입증해보세요.',
      },
      {
        question: '실업급여 거절 통지 받은 지 60일 지났어요',
        answer:
          '<strong>처분 통지 후 90일 안에 이의신청·심사청구가 가능합니다.</strong> 시한이 임박하면 우선 서면 접수부터 하는 게 안전해요.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 정당이직 사유 가이드', href: '/guide/unemployment/unemployment-voluntary-quit-benefits' },
      { label: '권고사직 vs 자진퇴사 경계', href: '/guide/unemployment/unemployment-recommendation-vs-resignation-boundary' },
      { label: '임신 자진퇴사 수급자격', href: '/guide/unemployment/unemployment-pregnancy-resignation-eligibility' },
      { label: '임신 고위험 자진퇴사', href: '/guide/unemployment/unemployment-pregnancy-high-risk-quit' },
      { label: '실업급여 수급자격 점검', href: '/guide/unemployment/unemployment-eligibility-check-guide' },
    ],
  },

  // ─── 6. retirement / retirement-under-1-year-continuous-service-claim ───
  {
    domain: 'retirement',
    slug: 'retirement-under-1-year-continuous-service-claim',
    keyword: '1년 미만 퇴직금 계속근로 통산',
    questionKeyword: '1년 안 됐는데 시용·재입사·계약갱신 거치면 퇴직금 받을 수 있나요?',
    ctaKeyword: '1년 미만 퇴직금 계속근로 통산 가능성 확인',
    type: '정리형',
    perspective: 'victim',
    meta: {
      title: '1년 미만 퇴직금 — 계속근로 통산 청구 5단계 | 로앤가이드',
      description:
        '1년 미만 근로 후 퇴직했어도 시용·수습·재입사·계약갱신으로 사실상 1년 이상 근무했다면 계속근로 통산 + 퇴직금 청구가 가능합니다. 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"수습 1개월 + 본 계약 11개월 = 1년 정확히 채우고 퇴직했는데 회사가 \'본 계약 11개월이라 퇴직금 없다\'고 합니다. 다툴 수 있나요?" 시용·수습기간이 만료된 후 공백 없이 본 근로계약이 이어진 경우 시용기간과 본 계약기간을 통산한 기간을 퇴직금 산정의 기초가 되는 계속근로기간으로 봐야 한다는 것이 대법원 일관 입장입니다(대법원 2021다218083). 형식적 사직·재입사·계약 갱신·부서 이동 등이 있어도 실질이 계속근로면 통산 가능성이 강해요.</p>',
    sections: [
      {
        title: '계속근로기간 통산이 인정되기 쉬운 4가지 사정',
        content:
          '<p><strong style="color:#1e3a5f">대법원 2021다218083 판시 흐름을 종합하면 다음 사정이 강할수록 통산 가능성이 강화됩니다.</strong></p>\n<ul>\n<li><strong>① 시용·수습 + 본 계약 (공백 없음)</strong> — 시용기간 만료 후 공백 없이 본 근로계약 체결 → 시용기간 + 본 계약기간 통산. 시용기간도 퇴직금 산정 기초.</li>\n<li><strong>② 형식적 사직 → 즉시 재입사</strong> — 회사 권유로 형식적으로 사직서 제출 후 곧바로 재입사한 경우(예: 군 복무 후 복직, 정년 후 재고용). 사직·재입사가 형식적이면 통산 가능 사례 있음.</li>\n<li><strong>③ 부서 이동·직군 변경</strong> — 같은 회사 내 부서·직군·고용형태(비정규→정규) 변경 시 근로 단절 없으면 통산.</li>\n<li><strong>④ 계약직 갱신 반복</strong> — 단기 계약을 반복 갱신해 사실상 계속근로한 경우. 전체 기간 합산 1년 이상이면 퇴직금 청구 가능성.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형식적 단절(사직서·재계약)에 좌우되지 말고 실제 근로 제공 흐름을 봐야 합니다. 하루·짧은 공백도 회사 측 사정이거나 근로 단절이 아닌 형식적 처리면 통산 가능성이 큽니다.</blockquote>',
      },
      {
        title: '회사가 자주 내세우는 반박과 대응 포인트',
        content:
          '<p><strong style="color:#1e3a5f">근로자가 통산 청구할 때 회사 측 반박과 대응 논리는 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"수습은 본 계약과 별개"</strong> → 시용·수습기간 만료 후 공백 없이 본 계약이면 통산(대법원 2021다218083 판시).</li>\n<li><strong>"본인이 사직서 제출"</strong> → 회사 권유·형식적 사직이면 실질 통산 다툼 가능.</li>\n<li><strong>"퇴직금은 1년 이상만 지급"</strong> → 통산 시 1년 이상이면 퇴직급여보장법상 청구 자격.</li>\n<li><strong>"계약직이라 퇴직금 없다"</strong> → 4주 평균 1주 15시간 이상이면 계약직도 퇴직금 청구 자격(근로자퇴직급여보장법 제4조).</li>\n</ul>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 계속근로 통산 + 퇴직금 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 퇴직금 미지급 진정 + 민사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근로기간 통산 자료 확보</strong> (즉시) — 시용·수습계약서·본 근로계약서·재입사 통보서·계약갱신 자료. 4대 보험 가입이력·급여 입금내역으로 단절 여부 확인.</li>\n<li><strong>2단계 — 계속근로기간 산정 + 퇴직금 산출</strong> (즉시) — 통산 기간 1년 이상 확인. 평균임금 × 30 × 근속연수(통산) = 퇴직금. 시효 3년치까지.</li>\n<li><strong>3단계 — 회사 정정 요청</strong> (선택) — 인사팀에 서면으로 통산 + 퇴직금 정산 요청. 14일 회신 없으면 다음 단계.</li>\n<li><strong>4단계 — 노동청 진정</strong> (3년 이내) — 노동포털(labor.moel.go.kr). 처리기간 25일(연장 가능). 시정지시 미이행 시 형사 송치(3년 이하 징역 또는 3,000만 원 이하 벌금).</li>\n<li><strong>5단계 — 민사 퇴직금 청구 (필요 시)</strong> — 차액 + 연 20% 지연이자(퇴직 후 14일 경과). 통산 다툼이 핵심이면 노동청 시정지시 결과를 우선 활용해 협상력 강화.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 1년 미만 퇴직금 계속근로 통산, AI로 청구 가능성을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">시용·재입사·계약갱신 시점·근로 단절 여부를 입력하면 통산 가능성과 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">퇴직금 계산과 청구 절차, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 / ⚠️ 다툼 포인트 / 🏛️ 신청·상담 경로',
        content:
          '<h4>📋 준비서류 체크리스트</h4>\n<ul>\n<li>시용·수습·본 근로계약서 전부 (시점·기간 명시)</li>\n<li>재입사·재계약·계약갱신 통보서·발령서</li>\n<li>4대 보험 가입이력 (단절 여부 확인)</li>\n<li>급여 입금내역·통장사본 (계속 입금 여부)</li>\n<li>인사발령·부서이동·직군 변경 자료</li>\n<li>이직확인서·퇴직증명서·퇴직금 산정내역</li>\n<li>회사의 사직 권유·형식적 처리 정황 자료</li>\n</ul>\n<h4>⚠️ 다툼 포인트</h4>\n<ul>\n<li>"수습 별개" → 공백 없이 본 계약 이어지면 통산(대법원 2021다218083 판시).</li>\n<li>"형식적 사직" → 회사 권유·즉시 재입사면 통산 다툼.</li>\n<li>"계약직이라 별개" → 반복 갱신·실질 계속근로면 통산.</li>\n</ul>\n<h4>🏛️ 신청·상담 경로</h4>\n<ul>\n<li>고용노동부 노동포털 (labor.moel.go.kr) — 퇴직금 미지급 진정</li>\n<li>고용노동부 고객상담센터 1350 — 무료 안내</li>\n<li>대한법률구조공단 132 — 무료 법률상담</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 시용기간 만료 후 본 계약 시 통산 인정',
        summary:
          '대법원 2021다218083 사건(대법원, 2022.02.17 선고)에서 법원은 시용이란 본 근로계약 체결 이전에 근로자의 직업적 능력·자질·인품·성실성 등 업무적격성을 관찰·판단하기 위해 일정기간 시험적으로 고용하는 것이며, 시용기간 만료 후 본 근로계약을 체결해 공백 기간 없이 계속 근무한 경우에는 시용기간과 본 근로계약기간을 통산한 기간을 퇴직금 산정의 기초가 되는 계속근로기간으로 봐야 한다고 판시했습니다.',
        takeaway: '시용·수습 + 본 계약이 공백 없이 이어졌다면 통산해 1년 이상이면 퇴직금 청구 자격이 인정됩니다. 단순 형식 처리에 좌우되지 말고 실질 근로 흐름을 살펴보세요.',
      },
    ],
    faq: [
      {
        question: '수습 1개월 + 본 계약 11개월이면 퇴직금 받을 수 있나요?',
        answer:
          '<strong>공백 없이 이어졌다면 통산 1년이라 퇴직금 청구 자격 가능성이 큽니다(대법원 2021다218083 판시).</strong> 시용·수습계약서와 본 계약서를 함께 챙겨두세요.',
      },
      {
        question: '회사 권유로 사직서 내고 다음 날 재입사했어요',
        answer:
          '<strong>형식적 사직·즉시 재입사면 실질 통산 다툼이 가능합니다.</strong> 사직 경위·재입사 메일·인사발령 자료를 시점순으로 정리해보세요.',
      },
      {
        question: '계약직 1년에 갱신 1년이라 합쳐 2년인데 퇴직금 안 준다는데요',
        answer:
          '<strong>반복 갱신·계속근로 흐름이 인정되면 통산 청구 가능합니다.</strong> 갱신 사이 공백·실제 업무 변화 여부가 핵심이에요.',
      },
      {
        question: '주 15시간 미만 근무는 퇴직금 안 되나요?',
        answer:
          '<strong>4주 평균 1주 15시간 이상이면 계약직·시간제도 퇴직금 청구 자격이 있습니다(근로자퇴직급여보장법 제4조).</strong> 주별 근로시간을 산정해보세요.',
      },
      {
        question: '시효 지나면 어떻게 되나요?',
        answer:
          '<strong>퇴직금 시효는 3년이라 빠른 청구가 안전합니다.</strong> 시효 도과분도 회사가 신뢰 행위를 했다면 권리남용 항변(대법원 2024다294705) 검토 가능해요.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 1년 미만 자격', href: '/guide/retirement/retirement-less-than-1year-eligibility' },
      { label: '시용·수습기간 산정', href: '/guide/retirement/retirement-probation-period-calculation' },
      { label: '재입사 계속근로 산정', href: '/guide/retirement/retirement-rehire-continuous-service-calculation' },
      { label: '퇴직금 계산 가이드', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '평균임금 상여·연차수당 산입', href: '/guide/retirement/retirement-average-wage-bonus-dispute' },
    ],
  },

  // ─── 7. retirement / retirement-alternate-day-shift-calculation ───
  {
    domain: 'retirement',
    slug: 'retirement-alternate-day-shift-calculation',
    keyword: '격일제 퇴직금 평균임금 산정',
    questionKeyword: '24시간 격일제 근무인데 퇴직금 산정 어떻게 되나요?',
    ctaKeyword: '격일제 근로자 퇴직금 평균임금 산정 가능성 확인',
    type: '정리형',
    perspective: 'victim',
    meta: {
      title: '격일제 근로자 퇴직금 — 평균임금 산정 5단계 | 로앤가이드',
      description:
        '24시간 격일제·교대제 근로자의 퇴직금은 실제 근로일수와 통상임금 산정 기준이 핵심입니다. 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"24시간 격일제(주야 1일 근무 + 1일 휴식)로 일했는데 퇴직금이 일반 근로자 기준으로 적게 나왔어요. 다툴 수 있나요?" 격일제 근무는 1일 근무 후 다음 날 휴식 형태로, 퇴직금 산정 시 평균임금 + 통상임금에서 실제 근로일수·근로시간 산정 기준이 일반 근로자와 달라 분쟁이 자주 생깁니다(대법원 2022다257238 흐름). 시효 3년 안에서 통상임금 재산정 + 퇴직금 차액 청구를 검토할 수 있어요.</p>',
    sections: [
      {
        title: '격일제 근무 퇴직금 다툼이 자주 발생하는 4가지 쟁점',
        content:
          '<p><strong style="color:#1e3a5f">대법원 2022다257238 판시 흐름과 다수 실무 사례를 종합하면 격일제 근로자의 퇴직금 다툼은 다음 쟁점에서 자주 발생합니다.</strong></p>\n<ul>\n<li><strong>① 소정근로일수·근로시간 산정 기준</strong> — 1일 8시간 + 주 40시간 한도를 어떻게 격일제에 적용할지. 1일 24시간 근무 중 휴게시간을 어떻게 차감할지가 핵심.</li>\n<li><strong>② 연장근로시간 산정 (대법원 2022다257238 흐름)</strong> — 1주 40시간·1일 8시간 초과분은 연장근로시간으로, 격일제도 마찬가지로 적용. 초과분에 대한 가산수당 누락 시 차액 청구 가능.</li>\n<li><strong>③ 통상임금 단가 산정</strong> — 격일제 근로자의 시급 통상임금 산정에 분모(총근로시간) 기준이 무엇이냐로 분쟁. 휴게시간 자유 이용 여부에 따라 근로시간 폭 변동.</li>\n<li><strong>④ 평균임금 산정 — 격일제 임금 패턴</strong> — 임금이 매달 일정한 격일제도 있고, 일급·시급제로 변동 폭이 큰 경우도 있음. 변동 폭이 크면 퇴직 직전 3개월 평균임금이 실제 임금보다 적게 나와 차액 분쟁.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 격일제는 "일반 근로자 기준"으로 산정하면 누락이 자주 발생합니다. 1주 40시간·1일 8시간 한도와 휴게시간 자유 이용 여부를 핵심 쟁점으로 다퉈보세요.</blockquote>',
      },
      {
        title: '회사가 자주 내세우는 반박과 대응 포인트',
        content:
          '<p><strong style="color:#1e3a5f">근로자가 격일제 퇴직금 차액을 청구할 때 회사 측 반박과 대응 논리는 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"감시·단속적 근로 인가 받았다"</strong> → 인가 범위·실제 업무 형태가 인가와 일치하는지 확인. 실질이 일반 근로면 인가 효력 다툼 가능.</li>\n<li><strong>"휴게시간 자유 이용"</strong> → 매장·차량·시설 안에 있어야 하거나 호출 대기면 근로시간으로 편입 가능.</li>\n<li><strong>"임금협정에 합의 명시"</strong> → 강행규정(근로기준법 제56조 가산임금)은 합의로 배제 불가.</li>\n<li><strong>"평균임금 3개월이라 변동 인정 안 됨"</strong> → 변동 폭이 큰 경우 통상임금 재산정으로 보완 청구 가능.</li>\n</ul>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 격일제 통상임금 재산정 + 퇴직금 차액 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 퇴직금 미지급 진정 + 민사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 격일제 근무 자료 확보</strong> (즉시) — 근로계약서·임금협정·취업규칙·근태시스템·근무표·휴게시간 운영 매뉴얼. 최근 3년 급여명세서 + 근로일수 기록.</li>\n<li><strong>2단계 — 근로시간 재산정 + 통상임금 재산정</strong> (즉시) — 1일 24시간 중 자유 이용 가능한 휴게시간만 차감해 실제 근로시간 산정. 1일 8시간·1주 40시간 초과분 연장근로 산출. 통상임금 시급 재산정.</li>\n<li><strong>3단계 — 평균임금 재산정 + 퇴직금 차액 산출</strong> (즉시) — 통상임금 재산정 결과를 평균임금에 반영해 퇴직금 차액 산출. 시효 3년치까지 합산.</li>\n<li><strong>4단계 — 노동청 진정</strong> (3년 이내) — 노동포털(labor.moel.go.kr). 처리기간 25일(연장 가능). 시정지시 미이행 시 형사 송치 가능.</li>\n<li><strong>5단계 — 민사 임금·퇴직금 청구 (필요 시)</strong> — 차액 + 연 20% 지연이자(퇴직 후 14일 경과). 격일제는 가산수당 누락 차액도 함께 묶어 청구 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 격일제 퇴직금 산정, AI로 차액 청구 가능성을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">근무 형태·휴게시간·시급을 입력하면 통상임금 재산정과 퇴직금 차액 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">퇴직금 계산과 청구 절차, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 / ⚠️ 다툼 포인트 / 🏛️ 신청·상담 경로',
        content:
          '<h4>📋 준비서류 체크리스트</h4>\n<ul>\n<li>근로계약서·임금협정·취업규칙 (격일제·휴게시간 명시 부분)</li>\n<li>최근 3년 급여명세서·근로일수 기록</li>\n<li>근태시스템·근무표·교대표·휴게시간 운영 매뉴얼</li>\n<li>휴게시간 사용 실태 자료 (CCTV·POS·메신저·동료 증언)</li>\n<li>회사가 산정한 퇴직금·평균임금 산정 내역서</li>\n<li>이직확인서·퇴직증명서</li>\n</ul>\n<h4>⚠️ 다툼 포인트</h4>\n<ul>\n<li>"감시·단속적 근로 인가" → 실제 업무 형태와 인가 범위 일치 여부.</li>\n<li>"휴게시간 자유 이용" → 자유 이용 실태로 근로시간 편입 다툼.</li>\n<li>"임금협정 합의" → 강행규정 우선이라 합의 효력 제한.</li>\n</ul>\n<h4>🏛️ 신청·상담 경로</h4>\n<ul>\n<li>고용노동부 노동포털 (labor.moel.go.kr) — 퇴직금 미지급 진정</li>\n<li>고용노동부 고객상담센터 1350 — 무료 안내</li>\n<li>대한법률구조공단 132 — 무료 법률상담</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 격일제 근무에서 1주 40시간 초과 연장근로 산정',
        summary:
          '대법원 2022다257238 사건(대법원, 2025.07.18 선고)에서 법원은 근로자와 사용자가 정한 1주 근로시간이 40시간을 초과하거나 1일 근로시간이 8시간을 초과하는 경우 그 초과 부분인 연장근로시간은 다른 특별한 사정이 없는 한 최저임금액 이상의 임금을 지급해야 하는 시간에 포함되지 않으며, 이는 1일 근무하고 그다음 날 쉬는 격일제 근무 형태에서도 마찬가지라고 판시했습니다.',
        takeaway: '격일제도 1일 8시간·1주 40시간 한도를 기준으로 연장근로 산정해야 합니다. 실제 근로시간을 정밀 산정하면 누락된 가산수당과 평균임금 영향까지 함께 다툴 여지가 있어요.',
      },
    ],
    faq: [
      {
        question: '24시간 격일제인데 휴게 8시간이면 근로 16시간 인정되나요?',
        answer:
          '<strong>휴게시간이 자유 이용 가능했는지가 핵심입니다.</strong> 시설 안 대기·호출 응대 강제면 근로시간으로 편입 가능성이 있어요.',
      },
      {
        question: '회사가 감시·단속적 근로 인가 받았다는데 가산수당 안 주나요?',
        answer:
          '<strong>인가 범위와 실제 업무 형태가 일치해야 합니다.</strong> 일반 근로자와 다를 바 없는 실질이면 인가 효력 다툼 가능해요.',
      },
      {
        question: '평균임금 3개월이 너무 낮게 나왔어요. 다툴 수 있나요?',
        answer:
          '<strong>변동 폭이 큰 경우 통상임금 재산정으로 보완 가능성이 있습니다.</strong> 정기상여·연차수당 산입 여지도 함께 검토해보세요.',
      },
      {
        question: '시효 3년 지난 차액도 받을 수 있나요?',
        answer:
          '<strong>퇴직금 시효는 3년이라 직전 36개월치 청구가 가능합니다.</strong> 시효 도과분도 회사 신뢰 행위가 있으면 권리남용 항변(대법원 2024다294705) 검토 가능해요.',
      },
      {
        question: '연장수당 누락도 함께 청구 가능한가요?',
        answer:
          '<strong>네. 1주 40시간·1일 8시간 초과분 연장수당 누락도 같은 트랙으로 청구 가능합니다(대법원 2022다257238 판시).</strong> 통상임금 재산정과 묶으면 차액 규모가 커져요.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '평균임금 상여·연차수당 산입', href: '/guide/retirement/retirement-average-wage-bonus-dispute' },
      { label: '야간·교대근로 평균임금', href: '/guide/retirement/retirement-night-shift-average-wage' },
      { label: '야간수면시간 근로시간 다툼', href: '/guide/wage/wage-night-sleeping-hours-working-time' },
      { label: '퇴직금 계산 가이드', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '연장근로 한도 52시간 위반', href: '/guide/wage/wage-overtime-over-weekly-52' },
    ],
  },
];
