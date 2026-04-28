import { SpokePage } from '../spoke-pages';

// batch49 wage+unemp+retire 7개
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 임금체불 1년이 지나 청구를 포기한 근로자가 소멸시효 3년 적용·시효 중단·권리남용 항변을 점검해 청구 가능성을 확인하도록 돕는 페이지다.
// 2. 이 페이지는 회사로부터 연봉 동결을 일방 통보받은 근로자가 취업규칙 불이익 변경 + 개별 근로계약 우선 원칙을 검토해 동의 없는 동결의 무효 여지를 정리하도록 돕는 페이지다.
// 3. 이 페이지는 약속받은 인센티브 기준이 사후에 회사가 일방적으로 변경된 근로자가 통상임금성·임금 청구권을 점검해 차액 청구를 검토하도록 돕는 페이지다.
// 4. 이 페이지는 계약직 갱신거절을 당한 근로자가 자발·비자발 판단 기준과 갱신기대권 인정 시 정당이직 가능성을 정리해 실업급여 신청을 검토하도록 돕는 페이지다.
// 5. 이 페이지는 실업급여 부정수급 의혹·반환명령을 받은 수급자가 환수·가산금·형사처벌 단계와 자수·소명 시 감경 가능성을 검토하도록 돕는 페이지다 (혐의를 받고 있다면 톤).
// 6. 이 페이지는 퇴직소득세를 정산받은 근로자가 근속연수공제 5/10/20년 차이와 환급·정산 가능성을 점검하도록 돕는 페이지다.
// 7. 이 페이지는 명예퇴직금을 받은 후 동종업계 재취업으로 환수 요구를 받은 근로자가 재취업 제한 약정의 합리성·직업선택 자유 침해 여부를 점검하도록 돕는 페이지다.

export const spokesBatch49WageUnempRetire: SpokePage[] = [
  // ─── 1. wage / unpaid-one-year-statute-claim ───
  {
    domain: 'wage',
    slug: 'wage-unpaid-one-year-statute-claim',
    keyword: '임금체불 1년 경과 소멸시효',
    questionKeyword: '임금체불 1년이 지났는데 아직 청구할 수 있나요?',
    ctaKeyword: '임금체불 1년 경과 청구 가능성 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임금체불 1년 경과 — 소멸시효 3년 적용과 청구 절차 | 로앤가이드',
      description:
        '임금체불 1년이 지나도 소멸시효 3년 안이라면 청구할 수 있습니다. 시효 중단·권리남용 항변·진정 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"체불된 지 1년 넘어서 이젠 못 받는다고 생각했는데 다시 받을 방법이 있을까요?" 임금채권 소멸시효는 1년이 아니라 3년(근로기준법 제49조)이라 1년이 지나도 청구할 여지가 있습니다. 회사가 일부 변제·각서·문자로 채무를 인정했다면 시효가 중단됐을 가능성이 있고, 회사 측이 시효를 악용해 권리행사를 방해했다면 권리남용으로 다툴 수도 있습니다. 시효는 매월 임금별로 따로 진행되니, 가장 오래된 미지급분부터 빠르게 점검하세요.</p>',
    sections: [
      {
        title: '임금채권 소멸시효 — 1년이 아니라 3년',
        content:
          '<p><strong style="color:#1e3a5f">임금·퇴직금·연차수당의 소멸시효는 근로기준법상 3년입니다(근로기준법 제49조).</strong></p>\n<ul>\n<li><strong>3년 시효 적용 항목</strong> — 기본급, 연장·야간·휴일 가산수당, 식대·교통비·직책수당 같은 정기 수당, 연차유급휴가 미사용 수당, 퇴직금·퇴직연금 차액.</li>\n<li><strong>시효 진행 시점</strong> — 매월 임금별로 따로 진행. 예: 2024년 1월분 임금은 2024년 2월(지급일) 기준 3년 → 2027년 2월 무렵 시효 도래.</li>\n<li><strong>1년 시효 오해</strong> — 노동부 진정 자체에 1년 제한이 있다는 오해가 많지만 사실 아닙니다. 진정·민사 청구 모두 3년 이내라면 가능.</li>\n<li><strong>퇴직금은 별도</strong> — 퇴직금 청구권도 3년 시효이며, 퇴직일 다음날부터 기산.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "1년 지났으니 끝났다"는 회사 측 주장은 잘못된 정보일 수 있습니다. 3년 안이라면 일단 자료를 모아 검토하는 것이 좋습니다.</blockquote>',
      },
      {
        title: '시효를 중단·연장할 수 있는 4가지 사유',
        content:
          '<p><strong style="color:#1e3a5f">아래 사정 중 하나에 해당하면 시효 진행이 멈추거나 권리남용으로 다툴 여지가 있습니다.</strong></p>\n<ul>\n<li><strong>① 채무 승인 (시효 중단)</strong> — 사업주가 "다음 달에 줄게" "이번 분기까지 정산해줄게"라고 문자·메일·각서로 인정한 사실이 있다면 시효가 중단되어 다시 0부터 시작(민법 제168조 제3호).</li>\n<li><strong>② 일부 변제</strong> — 미지급액의 일부라도 받은 시점부터 시효 재기산. 통장 거래내역으로 입증 가능.</li>\n<li><strong>③ 내용증명 + 6개월 내 소송</strong> — 내용증명(최고)을 보내고 6개월 안에 민사소송·지급명령을 신청하면 최고 시점에 시효가 중단된 것으로 봅니다(민법 제174조).</li>\n<li><strong>④ 권리남용 항변</strong> — 사업주가 시효 완성 전에 권리행사를 방해했거나 시효를 원용하지 않을 듯 행동했다가 뒤늦게 시효를 주장하면 권리남용으로 평가될 여지가 있습니다(대법원 2024다294705 사건 취지).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 보낸 카카오톡 "곧 정리해드릴게요" 한 통이 시효 중단 결정적 증거가 될 수 있습니다. 절대 지우지 마세요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 1년 경과 임금체불 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 절차를 참고하면 다음 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 미지급 내역 정리</strong> (즉시) — 최근 3년 급여명세서, 근로계약서, 출퇴근 기록을 모아 월별 미지급액 산출. 가장 오래된 미지급분의 시효 도래일 확인.</li>\n<li><strong>2단계 — 시효 중단 사유 점검</strong> (즉시) — 사업주의 문자·메일·각서·일부 변제 기록을 모두 모음. 채무 승인이 있으면 시효 재기산되어 청구 가능 기간 확장.</li>\n<li><strong>3단계 — 내용증명 발송</strong> (시효 임박 시) — 미지급액·지급기한·시효 중단 의사를 명시한 내용증명. 발송일로부터 6개월 안에 소 제기 또는 지급명령 신청 필요.</li>\n<li><strong>4단계 — 고용노동부 진정</strong> (3년 이내) — 노동포털(labor.moel.go.kr) 또는 관할 지방고용노동지청. 처리기간 25일(연장 가능). 시정지시 → 미이행 시 형사 송치(3년 이하 징역 또는 3,000만 원 이하 벌금).</li>\n<li><strong>5단계 — 민사 청구 또는 지급명령</strong> (필요 시) — 노동청 시정지시에 응하지 않으면 민사 임금 청구. 시효 중단·권리남용 항변을 함께 주장.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 1년 경과 임금체불, AI로 청구 가능성을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">체불 시점·금액·회사의 채무 승인 정황을 입력하면 시효 적용과 청구 가능성을 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>최근 3년 급여명세서 (월별 미지급액 산출용)</li>\n<li>근로계약서·연봉계약서 (지급 의무 확인)</li>\n<li>출퇴근 기록 (실제 근무 입증)</li>\n<li>사업주 채무 승인 자료 (문자·카카오톡·이메일·각서)</li>\n<li>일부 변제 통장 거래내역 (시효 중단 효과)</li>\n<li>내용증명 사본 (보냈다면)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 소멸시효 항변과 신의성실·권리남용',
        summary:
          '대법원 2024다294705 사건(대법원, 2025.05.29 선고)에서 법원은 채무자가 시효 완성 전에 채권자의 권리행사를 곤란하게 하였거나, 시효 완성 후에 시효를 원용하지 아니할 것 같은 태도를 보여 채권자가 그렇게 신뢰하게 한 경우 등에는 채무자의 소멸시효 항변이 신의성실 원칙에 반하여 권리남용으로 허용될 수 없다고 판시했습니다.',
        takeaway:
          '회사가 "곧 줄게"로 채권자를 안심시켜놓고 뒤늦게 시효를 주장하면 권리남용 항변으로 다툴 여지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '체불된 지 4년이 지났는데 정말 못 받나요?',
        answer:
          '<strong>원칙적으로 시효가 도래해 어렵지만, 시효 중단 사유가 있다면 청구 가능성이 있습니다.</strong> 회사가 그동안 일부 변제했거나 채무를 인정한 문자가 있다면 그 시점부터 시효가 다시 시작됐을 수 있어요.',
      },
      {
        question: '재직 중인데 청구하면 불이익을 받지 않을까요?',
        answer:
          '<strong>재직 중 임금 청구는 법적으로 보호되며 보복은 별도 부당해고·불이익 처분으로 다툴 수 있습니다.</strong> 다만 실무적으로는 퇴직 직후 진행하는 사례가 많고, 그동안 시효 중단을 위해 내용증명을 미리 보내두는 것도 방법입니다.',
      },
      {
        question: '내용증명을 보냈는데 회사가 무시하면 어떻게 하나요?',
        answer:
          '<strong>내용증명 발송일로부터 6개월 안에 민사소송 또는 지급명령을 신청해야 시효 중단 효과가 유지됩니다.</strong> 6개월이 지나면 최고의 효력이 사라지므로 기한 관리가 중요해요.',
      },
      {
        question: '회사가 폐업했는데 사업주 개인에게 청구할 수 있나요?',
        answer:
          '<strong>사업주가 자연인이라면 개인 재산에 대해 청구 가능하며, 도산대지급금(체당금) 신청도 검토할 수 있습니다.</strong> 고용노동부에 도산대지급금 신청을 하면 최대 1,000만 원 한도 내에서 우선 변제받을 수 있어요.',
      },
      {
        question: '소액심판으로 진행하면 더 빠른가요?',
        answer:
          '<strong>3,000만 원 이하라면 소액심판이 가능하며 통상 2~3개월 안에 판결을 받을 수 있습니다.</strong> 다만 회사가 항소하면 절차가 길어질 수 있어요. 노동청 진정과 병행하는 것이 일반적입니다.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 진정 전 체크리스트', href: '/guide/wage/wage-complaint-pre-filing-checklist' },
      { label: '연장수당 미지급 신고 절차', href: '/guide/wage/wage-overtime-report-procedure-timeline' },
      { label: '식대·교통비 임의 중단 대응', href: '/guide/wage/wage-meal-transport-suddenly-stopped' },
      { label: '해외출장수당 미지급 청구', href: '/guide/wage/wage-overseas-business-trip-allowance-recovery' },
      { label: '연봉 동결 일방 통보 대응', href: '/guide/wage/wage-salary-freeze-unilateral-notice' },
    ],
  },

  // ─── 2. wage / salary-freeze-unilateral-notice ───
  {
    domain: 'wage',
    slug: 'wage-salary-freeze-unilateral-notice',
    keyword: '연봉 동결 일방 통보',
    questionKeyword: '회사가 연봉 동결을 일방적으로 통보했는데 거부할 수 있나요?',
    ctaKeyword: '연봉 동결 일방 통보 대응 가능성 확인',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '연봉 동결 일방 통보 — 근로계약 변경 동의 필요 조건 | 로앤가이드',
      description:
        '연봉 동결·삭감을 회사가 일방 통보하면 취업규칙 불이익 변경 절차를 거쳐야 하며 개별 근로계약 동의도 필요할 수 있습니다. 무효 다툼 가능성을 지금 확인하세요.',
    },
    intro:
      '<p>"올해 연봉 동결한다고 메일 한 통이 왔어요. 이미 연봉 인상이 관행이었는데 일방 통보가 가능한가요?" 단순 동결을 넘어 정기 호봉승급·임금협약상 인상이 약정된 사업장에서의 일방 동결은 근로조건 불이익 변경에 해당할 여지가 있습니다. 취업규칙 변경 시 근로자 과반수(또는 노조)의 동의가 필요하고(근로기준법 제94조), 개별 근로계약에 인상 조항이 있다면 개별 동의 없이는 변경되지 않을 수 있습니다(대법원 2018다200709 사건 취지). 시효 3년 이내라면 미지급 차액 청구도 검토 가능합니다.</p>',
    sections: [
      {
        title: 'Q. 연봉 동결이 "근로조건 불이익 변경"인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 정기 인상이 관행·규정으로 자리 잡은 사업장에서의 동결은 불이익 변경으로 다툴 여지가 있습니다.</strong></p>\n<ul>\n<li><strong>호봉승급제 사업장</strong> — 호봉표가 있고 매년 1호봉씩 자동 승급되어 왔다면 동결은 호봉상승분만큼의 임금 손실 → 불이익 변경.</li>\n<li><strong>임금협약·단체협약 인상</strong> — 단체협약에 매년 OO% 인상이 명시되어 있다면 동결은 단체협약 위반.</li>\n<li><strong>근로계약서 인상 조항</strong> — 개별 근로계약·연봉계약서에 매년 갱신·인상 조항이 있다면 일방 동결은 계약 위반.</li>\n<li><strong>관행상 인상</strong> — 명시 규정이 없어도 수년간 정기 인상이 있어 왔다면 묵시적 약정으로 볼 여지가 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 인상 부재가 아니라 "정기 인상 약속이 있었는데 일방 중단"이라면 불이익 변경 절차 위반으로 다툴 여지가 큽니다.</blockquote>',
      },
      {
        title: 'Q. 회사가 동의 없이 동결하면 무효인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 취업규칙 불이익 변경 절차 위반 + 개별 근로계약 우선 원칙 적용 시 동결 효력을 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>근로기준법 제94조 제1항 단서</strong> — 취업규칙을 근로자에게 불리하게 변경할 때는 근로자 과반수(또는 노조)의 동의 필요. 동의 없는 변경은 무효.</li>\n<li><strong>개별 근로계약 우선 원칙</strong> — 노조 동의로 취업규칙을 바꿨더라도 개별 근로계약에 더 유리한 조건이 있다면 그 사람에게는 종전 계약이 우선 적용될 여지(대법원 2018다200709).</li>\n<li><strong>강박·기망에 의한 동의</strong> — "동의서 안 쓰면 인사 불이익"이라는 압박 동의는 강박으로 다툴 여지. 동의 자체가 무효일 수 있습니다.</li>\n<li><strong>차액 청구 가능</strong> — 동결이 무효로 인정되면 정기 인상이 적용되지 않은 만큼의 임금 차액을 3년 시효 안에서 청구할 수 있습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 연봉 동결 일방 통보, AI로 대응 방향을 정리하세요</strong></p>\n<p style="margin:0;font-size:0.95em">호봉제 여부·계약서 조항·동의 절차를 입력하면 무효 가능성과 차액 청구 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 연봉 동결 대응 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 동의 절차 점검</strong> (즉시) — 회사가 근로자 과반수 동의를 받았는지 확인. 동의서 양식·서명자 명단·노조 합의서 사본 요청.</li>\n<li><strong>2단계 — 사내 이의 제기</strong> (통보 직후) — 인사팀에 서면 이의. "근로계약상 인상 조항이 있고 개별 동의를 한 적 없다"는 점을 명시. 회신 기록 보존.</li>\n<li><strong>3단계 — 내용증명 발송</strong> (선택) — 무응답 시 정기 인상분 차액 청구 + 시효 중단 효과를 노린 내용증명.</li>\n<li><strong>4단계 — 고용노동부 진정 또는 노동위 구제</strong> (3년 이내) — 임금체불 진정(노동포털 labor.moel.go.kr) 또는 단체협약 위반 시 노동위원회 구제신청. 5인 미만 사업장도 임금체불 진정은 가능.</li>\n<li><strong>5단계 — 민사 임금 청구 (필요 시)</strong> — 노동청 시정지시 미이행 시 민사 청구. 동결 무효 + 정기 인상분 임금 청구를 함께 주장.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 주의: "회사 사정상 동의해달라"는 강박성 동의서에 서명하면 불리할 수 있습니다. 사정 설명을 듣더라도 즉답 회피 + 검토 후 회신 형태로 시간을 확보하세요.</blockquote>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>근로계약서·연봉계약서 (인상 조항 또는 갱신 조항 확인)</li>\n<li>최근 3~5년 급여명세서 (정기 인상 관행 입증)</li>\n<li>취업규칙 임금·승급 조항</li>\n<li>호봉표 또는 급여체계 자료</li>\n<li>회사의 동결 통보 문서·이메일</li>\n<li>근로자 과반수 동의서 또는 노조 합의 자료 (요청 후 수령)</li>\n<li>단체협약서 (노조 가입 시)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 취업규칙 불이익 변경과 개별 근로계약 우선',
        summary:
          '대법원 2018다200709 사건(대법원, 2019.11.14 선고)에서 법원은 사용자가 노동조합의 동의를 받아 취업규칙을 불이익하게 변경하더라도 그보다 유리한 근로조건을 정한 개별 근로계약이 우선하여 적용되며, 근로자의 개별적 동의가 없는 한 취업규칙보다 유리한 근로계약의 내용이 우선한다고 판시했습니다.',
        takeaway:
          '연봉계약서에 인상 조항이 있었다면 회사가 취업규칙·노조 합의로 동결을 결정했더라도 개별 동의 없이는 종전 계약이 우선 적용될 여지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '"올해 회사 사정이 어렵다"며 동결 통보했는데 정당한가요?',
        answer:
          '<strong>회사 경영상 사정만으로 일방 동결이 정당화되지는 않습니다.</strong> 근로기준법 제94조 동의 절차를 거치지 않으면 절차상 무효이고, 경영상 어려움도 객관적 자료(재무제표·구조조정 계획)로 입증해야 인정될 가능성이 있어요.',
      },
      {
        question: '동의서에 서명했는데 나중에 무효로 다툴 수 있나요?',
        answer:
          '<strong>강박·기망·착오에 의한 동의라면 다툴 여지가 있습니다.</strong> "동의 안 하면 해고"라는 압박이 있었거나, 인상분 손실액을 제대로 고지받지 못한 채 서명했다면 동의 효력 부정 주장이 가능해요.',
      },
      {
        question: '5인 미만 사업장도 적용되나요?',
        answer:
          '<strong>5인 미만이라도 임금 청구권 자체는 보호되며, 근로계약 위반으로 민사 청구가 가능합니다.</strong> 다만 부당해고 구제신청·연차수당 등 일부 규정은 적용 제외입니다.',
      },
      {
        question: '연봉 협상 결렬 후 동결 통보된 경우는?',
        answer:
          '<strong>협상 결렬 자체가 동결을 정당화하지는 않습니다.</strong> 종전 근로계약·관행상 인상이 있었다면 협상 결렬 시 종전 조건이 유지되는 것이 원칙으로, 일방 동결은 다툴 여지가 있어요.',
      },
      {
        question: '동결분 차액을 얼마나 소급 청구할 수 있나요?',
        answer:
          '<strong>임금채권 시효 3년(근로기준법 제49조) 안에서 매월 차액을 합산해 청구할 수 있습니다.</strong> 정기 인상률을 적용한 가상 임금 − 실제 수령 임금 = 차액으로 산정합니다.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '임금체불 1년 경과 시효 청구', href: '/guide/wage/wage-unpaid-one-year-statute-claim' },
      { label: '식대·교통비 임의 중단 대응', href: '/guide/wage/wage-meal-transport-suddenly-stopped' },
      { label: '인센티브 기준 사후 변경 청구', href: '/guide/wage/wage-incentive-criteria-changed-after' },
      { label: '포괄임금 직책수당 분리 청구', href: '/guide/wage/wage-pogual-team-leader-allowance-claim' },
      { label: '임금체불 진정 전 체크리스트', href: '/guide/wage/wage-complaint-pre-filing-checklist' },
    ],
  },

  // ─── 3. wage / incentive-criteria-changed-after ───
  {
    domain: 'wage',
    slug: 'wage-incentive-criteria-changed-after',
    keyword: '인센티브 기준 사후 변경',
    questionKeyword: '약속받은 인센티브 기준을 회사가 나중에 바꿨는데 청구할 수 있나요?',
    ctaKeyword: '인센티브 사후 변경 청구 가능성 확인',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '인센티브 기준 사후 변경 — 임금성 인정과 청구 방법 | 로앤가이드',
      description:
        '약속받은 인센티브 기준을 회사가 일방적으로 바꾸면 임금성·통상임금 다툼이 가능합니다. 차액 청구 절차와 입증 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"입사 때 \'매출 OO 달성 시 인센티브 OO%\'라는 조건으로 들어왔는데, 연말 정산할 때 회사가 기준을 새로 만들었다며 절반만 줍니다." 인센티브 약정도 정기·일률·고정 지급 요건을 충족하면 임금에 해당해, 일방적 사후 변경은 다툴 여지가 있습니다(근로기준법 제2조 제1항 제5호 임금 정의 + 대법원 통상임금 판례). 약속을 입증할 자료가 핵심이니, 채용 공고·이메일·구두 약속의 녹취·동료 진술을 모아두세요.</p>',
    sections: [
      {
        title: 'Q. 인센티브가 임금에 해당하는 4가지 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">A. 명칭이 인센티브·성과급이라도 다음 요건을 갖추면 임금성이 인정될 여지가 있습니다.</strong></p>\n<ul>\n<li><strong>지급 기준의 사전 확정</strong> — "매출 X 달성 시 Y% 지급"처럼 산정 공식이 사전에 명시되어 있다면 임금성 인정 가능성 높음. 회사 재량이 사실상 없는 상태.</li>\n<li><strong>정기·일률 지급</strong> — 같은 직급·조건 근로자에게 동일 기준으로 정기 지급되어 왔다면 정기성·일률성 충족.</li>\n<li><strong>고정성</strong> — 지급 여부·금액이 사전에 확정되어 있고 단순한 회사 호의가 아닌 약정에 기반.</li>\n<li><strong>채용 공고·근로계약 명시</strong> — 채용 공고나 근로계약서에 인센티브 산정 방식이 적혀 있다면 결정적 증거. 묵시적 약정도 관행으로 인정될 여지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 격려금·재량적 보너스가 아니라 "X 달성 시 Y 지급"이라는 산정식이 명시됐다면 임금성이 강합니다.</blockquote>',
      },
      {
        title: 'Q. 회사가 사후에 기준을 바꿔 적용하는 게 가능한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 약정 시점의 기준이 적용되며, 사후 일방 변경은 다툴 여지가 있습니다.</strong></p>\n<ul>\n<li><strong>약정 시점 기준 우선</strong> — 채용·연봉 협상 시점에 약속된 인센티브 기준이 그 회계연도까지는 적용되는 것이 원칙. 사후 변경은 신의성실 원칙 위반 소지.</li>\n<li><strong>취업규칙 불이익 변경 절차</strong> — 인센티브 기준이 취업규칙·연봉제 운용규정에 있다면, 변경 시 근로자 과반수 동의 필요(근로기준법 제94조).</li>\n<li><strong>통상임금 포함 가능성</strong> — 인센티브가 정기·일률·고정성을 갖추면 통상임금에 포함되어 연장·야간·휴일수당 단가까지 영향(대법원 2012다89399 통상임금 판례 취지).</li>\n<li><strong>차액 청구 가능</strong> — 변경 전 기준을 적용했을 때의 인센티브 − 실제 수령 인센티브 = 차액. 시효 3년 안에서 합산 청구.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 인센티브 차액, AI로 청구 가능성을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">약정 기준·실제 지급액·변경 시점을 입력하면 차액 청구 가능성과 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 인센티브 차액 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 약정 입증 자료 수집</strong> (즉시) — 채용 공고 캡처, 입사 제안서·근로계약서 사본, 인사팀과의 이메일·메신저, 약속 녹취. 동료 진술서가 있으면 보강.</li>\n<li><strong>2단계 — 변경 사실 확인</strong> (즉시) — 회사가 보낸 변경 통보 문서, 새 인센티브 산정식, 변경 시점 메일 캡처. 근로자 과반수 동의 절차를 거쳤는지 확인.</li>\n<li><strong>3단계 — 차액 산출</strong> (즉시) — 변경 전 기준으로 계산한 인센티브 − 실제 수령액 = 차액. 시효 3년치 합산.</li>\n<li><strong>4단계 — 노동청 진정</strong> (3년 이내) — 노동포털(labor.moel.go.kr) 또는 관할 지청. 임금체불 + 인센티브 임금성 다툼으로 진정. 처리기간 25일.</li>\n<li><strong>5단계 — 민사 임금 청구 (필요 시)</strong> — 노동청 시정지시 미이행 시 민사 청구. 인센티브 임금성·통상임금성 함께 주장하면 가산수당 단가까지 다툴 여지.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 주의: 새 기준 동의서에 서명하면 차액 청구가 어려워질 수 있습니다. 정산 직전 "동의서 작성"을 요구받으면 즉답 회피 + 검토 후 회신 형태로 시간을 확보하세요.</blockquote>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>채용 공고 또는 입사 제안서 (인센티브 조건 명시)</li>\n<li>근로계약서·연봉계약서 (성과급 조항)</li>\n<li>회사 인센티브 운용규정 또는 취업규칙</li>\n<li>최근 3년 급여명세서·인센티브 정산서</li>\n<li>약속 입증 이메일·메신저·녹취</li>\n<li>회사의 변경 통보 문서</li>\n<li>매출·실적 자료 (산정 근거)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 통상임금 판단 기준과 노사합의의 효력',
        summary:
          '대법원 2012다89399 사건(대법원, 2013.12.18 선고)에서 법원은 어떠한 임금이 통상임금에 속하는지는 그 임금이 소정근로의 대가로 정기적·일률적·고정적으로 지급되는지를 기준으로 객관적 성질에 따라 판단해야 하며, 통상임금에 속하는 임금을 통상임금에서 제외하기로 하는 노사합의는 무효라고 판시했습니다.',
        takeaway:
          '인센티브가 정기·일률·고정성을 갖추면 명칭과 무관하게 임금·통상임금으로 평가될 수 있고, 이를 임금에서 제외하는 노사합의는 무효로 다툴 여지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '구두로만 약속받은 인센티브도 청구할 수 있나요?',
        answer:
          '<strong>구두 약속도 입증되면 청구 가능합니다.</strong> 면접·연봉 협상 시 녹취, 동석자 진술, 채용 공고 캡처, 입사 결정 이메일 등으로 약속 사실을 입증하면 인정 여지가 있어요.',
      },
      {
        question: '"성과 미달"이라며 안 주는 경우는 어떻게 다투나요?',
        answer:
          '<strong>성과 산정 자료를 회사에 요청하고 객관 데이터로 검증하세요.</strong> 매출·실적 자료, 동료 비교 데이터, 회사가 제시한 산정식을 적용한 결과치를 비교해 부당 산정 여부를 확인할 수 있어요.',
      },
      {
        question: '연말정산 인센티브를 못 받고 퇴직했어요. 청구되나요?',
        answer:
          '<strong>퇴직 후 3년 이내라면 청구 가능합니다.</strong> 임금채권 시효는 3년이며 퇴직금과 함께 미지급 인센티브도 노동청 진정이나 민사 청구로 받을 수 있어요.',
      },
      {
        question: '인센티브가 통상임금에 포함되면 어떤 효과가 있나요?',
        answer:
          '<strong>통상임금 단가가 올라가 연장·야간·휴일수당까지 함께 인상됩니다.</strong> 시효 3년 안에서 가산수당 차액도 추가로 청구 가능하니, 통상임금 다툼이 차액 규모를 크게 늘릴 수 있어요.',
      },
      {
        question: '회사가 "인센티브는 호의이고 임금이 아니다"라고 합니다',
        answer:
          '<strong>호의·시혜라는 회사 주장은 정기·일률·고정성을 갖추면 받아들여지지 않을 수 있습니다.</strong> 산정식이 사전에 명시됐고 매년 같은 기준으로 지급됐다면 임금성 인정 가능성이 높아요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '연봉 동결 일방 통보 대응', href: '/guide/wage/wage-salary-freeze-unilateral-notice' },
      { label: '포괄임금 직책수당 분리 청구', href: '/guide/wage/wage-pogual-team-leader-allowance-claim' },
      { label: '임금체불 1년 경과 시효 청구', href: '/guide/wage/wage-unpaid-one-year-statute-claim' },
      { label: '봉사료·팁 통상임금 포함 기준', href: '/guide/wage/wage-tip-service-charge-base-inclusion' },
      { label: '식대·교통비 임의 중단 대응', href: '/guide/wage/wage-meal-transport-suddenly-stopped' },
    ],
  },

  // ─── 4. unemployment / contract-non-renewal-just-cause ───
  {
    domain: 'unemployment',
    slug: 'unemployment-contract-non-renewal-just-cause',
    keyword: '계약직 갱신거절 실업급여',
    questionKeyword: '계약직 계약 갱신을 거절당했는데 실업급여 받을 수 있나요?',
    ctaKeyword: '계약직 갱신거절 실업급여 가능성 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '계약직 갱신거절 — 자발적·비자발적 판단 기준 정리 | 로앤가이드',
      description:
        '계약직 갱신거절이 회사 측 사유라면 비자발적 이직으로 실업급여 신청이 가능합니다. 갱신기대권 인정 요건과 14일 신청 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"3년째 1년 단위 재계약을 해왔는데 이번엔 계약 갱신이 안 된다고 통보받았어요. 자발적 퇴사 처리되면 실업급여를 못 받나요?" 계약직 갱신거절은 사실상 비자발적 이직으로 분류되는 경우가 많습니다. 특히 갱신기대권이 인정되는 사정(반복 갱신·계약 연장 관행·평가 기준 통과)이 있다면 사용자 측 갱신거절은 비자발 이직 사유로 검토될 수 있습니다(고용보험심사위원회 2019재결 제41호 취지). 14일 시한을 놓치지 않도록 지금 점검하세요.</p>',
    sections: [
      {
        title: '계약직 갱신거절 — 자발·비자발 판단 4가지 기준',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 시행규칙 [별표2] + 심사위원회 재결례를 참고하면 다음 기준으로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사용자 측 갱신거절</strong> — 회사가 갱신을 거절했다면 비자발적 이직(피보험자격 상실 사유 코드 32 "계약기간만료, 공사종료") 처리. 실업급여 신청 가능성 높음.</li>\n<li><strong>② 갱신기대권 인정</strong> — 반복 갱신·계약 연장 관행·평가 기준 통과 등으로 갱신 신뢰가 형성되었다면 갱신거절은 사실상 해고에 준하는 평가(기간제법 + 대법원 갱신기대권 판례).</li>\n<li><strong>③ 근로자 측 갱신 거부</strong> — 본인이 먼저 "더는 안 하겠다"며 거부했다면 자발적 이직으로 분류될 위험. 단, 임금 삭감·근로조건 악화 등 정당이직 사유가 있다면 별도 검토.</li>\n<li><strong>④ 피보험 단위기간 180일</strong> — 위 사유 충족과 별개로 이직 전 18개월 중 고용보험 피보험자 180일 이상 근로 요건을 충족해야 수급자격 인정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회사가 "계약 종료" 처리하면 비자발 인정이 쉽지만, "갱신 의사 없음"으로 본인이 회신했다면 자발 이직으로 분류될 위험. 회신 문구를 신중히 작성해야 합니다.</blockquote>',
      },
      {
        title: '갱신기대권이 인정되는 5가지 사정',
        content:
          '<p><strong style="color:#1e3a5f">아래 사정 중 다수에 해당하면 갱신기대권 인정 가능성이 높아져 갱신거절을 사실상 해고로 다툴 여지도 생깁니다.</strong></p>\n<ul>\n<li><strong>반복 갱신 관행</strong> — 같은 직무에서 다년간 반복 갱신되어 왔거나 동일 부서 다수가 정기 갱신되는 관행 존재.</li>\n<li><strong>평가 기준 통과</strong> — 회사가 정한 평가 기준을 충족하면 갱신된다는 약속이 있었고, 본인이 그 기준을 통과한 사실.</li>\n<li><strong>업무 계속성</strong> — 계약직이지만 핵심 업무를 계속 담당하고 후임자 없이 업무 공백이 예정된 경우.</li>\n<li><strong>채용 공고 문구</strong> — 채용 공고에 "성과 평가 후 갱신·정규직 전환"이라는 약속이 있었다면 갱신기대권 강화.</li>\n<li><strong>구두 약속</strong> — 인사팀·상사가 "특별한 일 없으면 계속 갱신"이라고 약속한 녹취·메일이 있다면 결정적 증거.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 갱신기대권이 강하면 부당해고 구제신청(노동위원회 3개월 이내)도 검토할 수 있습니다. 실업급여와 별개 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 계약직 갱신거절 실업급여 신청 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용센터 안내 절차를 참고하면 다음 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 갱신거절 사실 보존</strong> (이직 전) — 회사의 갱신거절 통보 문서·이메일·메신저 캡처. "계약 종료"로 명시되어 있어야 비자발 처리에 유리.</li>\n<li><strong>2단계 — 이직확인서 협의</strong> (이직 시) — 회사에 "계약기간만료(코드 32)"로 기재 요청. "개인사정"으로 기재되면 수급 거부 위험.</li>\n<li><strong>3단계 — 수급자격 신청</strong> (이직일로부터 14일 이내 권장) — 거주지 관할 고용센터 방문 또는 워크넷(work.go.kr) 온라인 신청. 근로계약서·갱신거절 통보 함께 제출.</li>\n<li><strong>4단계 — 수급자격 심사</strong> (신청 후 약 2~3주) — 고용센터가 이직 사유 객관성 검토. 갱신기대권 다툼이 있으면 추가 자료 요청 가능.</li>\n<li><strong>5단계 — 거부 시 심사청구</strong> (처분 후 90일 이내) — 불인정 시 고용보험 심사관에게 심사청구 → 재심사청구(고용보험심사위원회) → 행정소송 단계.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 계약직 갱신거절, 실업급여 가능성을 AI로 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">계약 갱신 횟수·거절 사유·근무 기간을 입력하면 수급 가능성과 신청 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">실업급여 받을 수 있는지 AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>최근 3년 근로계약서·갱신 계약서</li>\n<li>회사 갱신거절 통보 문서·이메일·메신저</li>\n<li>채용 공고 캡처 (갱신·정규직 전환 약속 확인용)</li>\n<li>이직확인서 사본 (사유 코드 확인)</li>\n<li>최근 3개월 급여명세서</li>\n<li>고용보험 피보험기간 조회서 (근로복지공단)</li>\n<li>갱신기대권 입증 자료 (평가서·약속 녹취 등)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 계약기간 만료를 비자발적 이직으로 본 사례',
        summary:
          '고용보험심사위원회 2019재결 제41호(고용보험심사위원회, 2019.04.10 재결)에서 위원회는 근로계약서에 별도의 정함이 없는 한 계약기간 만료로 근로계약은 자동종료된다고 명시되어 있고, 근로자가 몸이 아파 계약 만료기간까지 일하고 이직한 경우 피보험자격 상실 사유를 계약기간 만료로 보아야 한다고 판단해 수급자격 불인정 처분을 취소했습니다.',
        takeaway:
          '계약기간 만료에 의한 종료는 원칙적으로 비자발적 이직으로 처리되어 실업급여 수급자격이 인정될 여지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '계약 갱신 의사가 있었는데 회사가 거절했어요',
        answer:
          '<strong>회사 측 갱신거절은 비자발적 이직(코드 32)으로 처리되는 것이 원칙입니다.</strong> 본인이 갱신을 원했다는 사실을 이메일·문자로 회사에 표시했다면 분류 다툼 시 유리한 증거가 돼요.',
      },
      {
        question: '근로조건 악화 때문에 갱신을 거부한 경우는?',
        answer:
          '<strong>임금 삭감·근로시간 변경 등 근로조건 악화로 갱신을 거부한 경우 정당이직 사유로 검토될 수 있습니다.</strong> 근로조건 악화 사실을 객관 자료로 입증하면 자발이직이라도 수급자격이 인정될 여지가 있어요.',
      },
      {
        question: '5년 넘게 갱신해온 계약직인데 갑자기 거절됐어요',
        answer:
          '<strong>장기 반복 갱신은 갱신기대권 인정 가능성이 높습니다.</strong> 부당해고 구제신청(노동위원회 3개월 이내)을 별도로 검토할 수 있고, 실업급여는 비자발적 이직으로 신청 가능합니다.</p>',
      },
      {
        question: '계약 종료 1개월 전 통보를 못 받았는데 어떤 의미인가요?',
        answer:
          '<strong>기간제법상 갱신 거절은 30일 전 통보가 권고되며, 미통보 시 갱신기대권 인정 근거 중 하나가 될 수 있습니다.</strong> 다만 그 자체로 자동 갱신되는 것은 아니며 종합 판단 사항입니다.',
      },
      {
        question: '갱신거절이 "정규직 전환 회피"가 아닐까요?',
        answer:
          '<strong>2년 초과 시 무기계약 전환을 회피하기 위한 갱신거절은 부당해고로 다툴 여지가 있습니다(기간제법 제4조).</strong> 노동위원회 구제신청을 별도로 검토할 수 있어요.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '계약만료 후 실업급여 신청', href: '/guide/unemployment/contract-expiry-unemployment-benefit' },
      { label: '자영업 폐업 후 실업급여 수급', href: '/guide/unemployment/unemployment-self-employed-closure-eligibility' },
      { label: '자진퇴사 실업급여 인정 요건', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '실업급여 신청부터 수령까지 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '실업급여 부정수급 환수·처벌', href: '/guide/unemployment/unemployment-fraudulent-recovery-penalty' },
    ],
  },

  // ─── 5. unemployment / fraudulent-recovery-penalty ───
  {
    domain: 'unemployment',
    slug: 'unemployment-fraudulent-recovery-penalty',
    keyword: '실업급여 부정수급 환수',
    questionKeyword: '실업급여 부정수급으로 환수 통보를 받았는데 어떻게 대응하나요?',
    ctaKeyword: '실업급여 부정수급 환수 대응 가능성 확인',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '실업급여 부정수급 환수 — 가산금·형사처벌 단계별 정리 | 로앤가이드',
      description:
        '실업급여 부정수급 혐의를 받고 있다면 환수·가산금·형사처벌 단계와 자수·소명 시 감경 가능성을 검토할 수 있습니다. 대응 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"실업급여를 받는 동안 며칠 단기 알바한 걸 신고 안 했더니 \'부정수급\'으로 환수 통보가 왔어요. 어떻게 대응해야 하나요?" 실업급여 부정수급 혐의를 받고 있다면 단계별로 환수·가산금·형사처벌이 진행됩니다(고용보험법 제62조·제116조). 다만 자진 신고·소명 자료 제출 시 감경되거나 일부 처분이 취소된 사례도 있고, 사실과 다르게 신고되었다면 다툴 여지가 있습니다(고용보험심사위원회 2023재결 제42호 등). 처분일로부터 90일 이내 심사청구가 가능하니 지금 바로 절차를 확인하세요.</p>',
    sections: [
      {
        title: '실업급여 부정수급 — 환수·가산·처벌 3단계 구조',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 제62조·제116조에 따라 다음 3단계 제재가 적용됩니다.</strong></p>\n<ul>\n<li><strong>① 환수 (전액 반환)</strong> — 부정 지급된 금액 전액을 반환해야 합니다(고용보험법 제62조 제1항). 환수 처분일로부터 30일 이내 납부.</li>\n<li><strong>② 가산금 (최대 5배)</strong> — 부정 수급액의 2배 이내 추가 징수가 원칙. 신고의무 위반·재범 등 가중 사유 시 5배까지 부과될 수 있음.</li>\n<li><strong>③ 형사처벌</strong> — 거짓·부정한 방법으로 받은 경우 5년 이하 징역 또는 5,000만 원 이하 벌금(고용보험법 제116조). 가중 시 10년·1억 원까지.</li>\n<li><strong>지급 제한</strong> — 일정 기간 새로운 수급자격 취득 제한. 부정 사유에 따라 자격 자체 제한 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "혐의를 받고 있다면" 단계별로 다투거나 자수·소명할 수 있는 절차가 있습니다. 사실과 다르게 신고되었다면 90일 내 심사청구로 처분 취소를 다툴 수 있습니다.</blockquote>',
      },
      {
        title: '자수·소명 시 감경 가능성 4가지 시나리오',
        content:
          '<p><strong style="color:#1e3a5f">아래 사정에 해당하면 감경·일부 취소를 검토할 여지가 있습니다.</strong></p>\n<ul>\n<li><strong>① 자진 신고</strong> — 부정수급 적발 전 본인이 자진 신고하면 추가 징수(가산금)가 면제·감경되는 사례. 환수는 그대로 적용되더라도 형사 처벌·가산금 수준에서 차이.</li>\n<li><strong>② 신고 누락 사유 소명</strong> — 단기 알바·노무 제공 사실을 신고 누락했다면, 그 사유(시스템 오류·신고 양식 혼동·지인 부탁 등)를 소명. 일부 사례에서 노무 제공이 신고 대상 "근로내역"에 포함되지 않는다고 판단된 재결도 있음(2023재결 제42호).</li>\n<li><strong>③ 불가피한 사정</strong> — 천재지변·전쟁·해외 정세 등 불가피한 사유로 신고가 어려웠다면 처분 취소 가능성(2023재결 제50호 러시아 전쟁 사례 취지).</li>\n<li><strong>④ 처분 절차 하자</strong> — 청문 절차 누락·송달 흠결·산정 오류 등 행정처분 절차상 하자가 있다면 90일 내 심사청구로 다툴 여지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 사실과 다르게 신고되었다면: 회사가 잘못 통보했거나 시스템 오류로 부정수급으로 분류됐다면 객관 자료(통장 내역·계약서·노무 미제공 입증)로 다툴 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 부정수급 처분 대응 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용보험심사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 처분 통지서 분석</strong> (즉시) — 환수 금액·가산금·지급 제한 기간·형사 송치 여부 확인. 처분일·송달일 기록 필수.</li>\n<li><strong>2단계 — 소명·자료 준비</strong> (처분 직후) — 노무 제공 일자·금액·사유 정리, 통장 거래내역, 회사 이직확인서, 본인 일정표·메신저 캡처. 자진 신고가 가능한 단계라면 신속히 진행.</li>\n<li><strong>3단계 — 심사청구</strong> (처분일로부터 90일 이내) — 고용보험 심사관에게 심사청구. 처분 취소·금액 감경·가산금 면제 등을 주장.</li>\n<li><strong>4단계 — 재심사청구</strong> (심사 결정일로부터 90일 이내) — 고용보험심사위원회에 재심사청구. 변호사·노무사 도움 검토 가능.</li>\n<li><strong>5단계 — 행정소송 (필요 시)</strong> — 재심사 결과 불복 시 행정법원 90일 이내 제소. 형사 송치 진행 시 별도 형사 절차 대응 필요.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부정수급 환수 통보, AI로 대응 방향을 정리하세요</strong></p>\n<p style="margin:0;font-size:0.95em">처분 사유·금액·소명 자료를 입력하면 심사청구·감경 가능성을 확인할 수 있습니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">실업급여 받을 수 있는지 AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>처분 통지서 사본 (환수·가산금·지급제한 명시)</li>\n<li>실업인정 신청서 사본 + 신고 누락 사실 정리</li>\n<li>노무 제공 입증·반증 자료 (통장·계약서·이력)</li>\n<li>회사 이직확인서·근로계약서</li>\n<li>심사청구서 양식 (고용보험심사관용)</li>\n<li>자진 신고 접수증 (해당 시)</li>\n<li>불가피한 사유 입증 자료 (의료기록·해외 출입국·천재지변 등)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 노무 제공내역 미신고 부정수급 처분 취소 사례',
        summary:
          '고용보험심사위원회 2023재결 제42호(고용보험심사위원회, 2023.06.21 재결)에서 위원회는 건설일용근로자에 대한 "수급자격 인정신청일 이전 14일간 연속하여 근로내역이 없을 것"이라는 요건 해석 시 근로내역에는 노무제공내역이 포함되지 않는다고 해석해, 청구인의 2일간 노무제공내역 미신고를 사유로 한 부정수급 처분을 취소하는 결정을 내렸습니다.',
        takeaway:
          '"근로내역"의 해석 다툼·신고 양식 혼동 등 사정이 있다면 사실과 다르게 신고된 부정수급 처분을 다툴 여지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '단기 알바 며칠 안 한 게 그렇게 큰 문제인가요?',
        answer:
          '<strong>실업인정 신청 시 근로·노무 제공 사실을 신고하지 않으면 형식적으로 부정수급 요건이 됩니다.</strong> 다만 노무 제공의 성격·기간·금액·신고 의무 명확성 등에 따라 처분 수위가 달라질 수 있어요.',
      },
      {
        question: '회사가 잘못 보고해서 부정수급 처분을 받았어요',
        answer:
          '<strong>사실과 다르게 신고되었다면 객관 자료로 다툴 수 있습니다.</strong> 통장 내역·근무 일정표·계약서·메신저 등으로 실제 사실을 입증해 90일 내 심사청구를 진행하세요.',
      },
      {
        question: '자진 신고하면 환수가 면제되나요?',
        answer:
          '<strong>환수(받은 금액 반환) 자체는 면제되지 않는 것이 원칙이지만, 가산금·형사 송치 단계에서 감경되는 사례가 있습니다.</strong> 적발 전 자진 신고가 핵심입니다.',
      },
      {
        question: '환수 금액이 너무 커서 한 번에 못 갚을 것 같아요',
        answer:
          '<strong>분할 납부 신청이 가능합니다.</strong> 고용센터에 분할 납부 신청서를 제출하고 사정에 따라 6개월·12개월 분납 협의가 이뤄지는 사례가 있어요. 미납 지속 시 강제집행 가능성도 있으니 협의가 우선입니다.',
      },
      {
        question: '형사 송치되면 원칙적으로 처벌받나요?',
        answer:
          '<strong>혐의를 받고 있다면 검찰 단계에서 자수·소명 + 환수 완납 시 기소유예·약식기소로 종결되는 사례가 있습니다.</strong> 형사처벌 단계에서도 변호사·노무사 자문을 받아 대응하는 것이 좋습니다.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 신청부터 수령까지 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '자영업 폐업 후 실업급여 수급', href: '/guide/unemployment/unemployment-self-employed-closure-eligibility' },
      { label: '계약직 갱신거절 자발·비자발 판단', href: '/guide/unemployment/unemployment-contract-non-renewal-just-cause' },
      { label: '자진퇴사 실업급여 인정 요건', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '권고사직 실업급여 인정', href: '/guide/unemployment/recommended-resignation-unemployment-benefit' },
    ],
  },

  // ─── 6. retirement / tax-tenure-deduction-refund ───
  {
    domain: 'retirement',
    slug: 'retirement-tax-tenure-deduction-refund',
    keyword: '퇴직소득세 근속연수공제',
    questionKeyword: '퇴직소득세를 얼마나 떼고 환급받을 수 있나요?',
    ctaKeyword: '퇴직소득세 근속연수공제 환급 가능성 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '퇴직소득세 근속연수공제 5/10/20년 차이와 환급 조건 | 로앤가이드',
      description:
        '퇴직소득세 근속연수공제는 5·10·20년 구간별로 공제액이 달라집니다. 정산 환급·근속기간 합산 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"퇴직금 1억을 받았는데 세금이 1,300만 원이나 떼였어요. 정상인가요? 환급받을 방법이 있을까요?" 퇴직소득세는 일반 소득세와 달리 근속연수공제·환산급여공제 단계를 거쳐 산출되며, 근속연수가 길수록 공제 폭이 커져 세금이 줄어듭니다(소득세법 제48조). 중간정산 무효 인정·근속기간 합산이 가능하면 공제액이 늘어나 환급 가능성이 생깁니다(대법원 98다36924 사건 취지). 퇴직 후 5년 이내 경정청구로 환급을 검토할 수 있어 지금 바로 점검이 필요합니다.</p>',
    sections: [
      {
        title: '퇴직소득세 근속연수공제 — 5/10/20년 구간별 차이',
        content:
          '<p><strong style="color:#1e3a5f">소득세법 제48조 근속연수공제 구조(2023년 개정 기준)는 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>5년 이하</strong> — 근속연수 1년당 100만 원 공제. 5년이면 최대 500만 원.</li>\n<li><strong>6~10년 구간</strong> — 5년까지 500만 원 + 6년차부터 1년당 200만 원 추가. 10년이면 1,500만 원.</li>\n<li><strong>11~20년 구간</strong> — 10년까지 1,500만 원 + 11년차부터 1년당 250만 원 추가. 20년이면 4,000만 원.</li>\n<li><strong>20년 초과</strong> — 20년까지 4,000만 원 + 21년차부터 1년당 300만 원 추가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 같은 퇴직금이라도 근속 5년 vs 20년이면 공제액 차이가 약 3,500만 원. 과세표준 기준으로 세금이 수백만~수천만 원까지 달라질 수 있습니다.</blockquote>',
      },
      {
        title: '환급 받을 수 있는 4가지 시나리오',
        content:
          '<p><strong style="color:#1e3a5f">아래 사정에 해당하면 퇴직소득세 환급을 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 중간정산 무효 → 근속기간 합산</strong> — 형식적 사직·재입사로 중간정산을 받았더라도 실질적으로 근로관계가 단절되지 않았다면 중간정산이 무효로 인정될 여지가 있어 근속기간이 합산됨(대법원 98다36924 사건 취지). 근속연수가 길어지면 공제액 증가.</li>\n<li><strong>② 회사 분할·사업 양도 후 재입사</strong> — 사업 양도·기업 분할로 형식적 퇴사·재입사를 한 경우 근로관계 승계로 근속기간이 합산될 가능성.</li>\n<li><strong>③ 임원 퇴직금 한도 초과 부분 정산</strong> — 임원 퇴직금이 세법상 한도를 초과해 근로소득으로 과세된 경우, 임원 산정 방식 다툼으로 환급 가능성 검토.</li>\n<li><strong>④ 원천징수 오류</strong> — 회사가 근속연수·환산급여 산정을 잘못해 과다 원천징수한 경우 경정청구로 환급. 5년 이내 경정청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 퇴직금 1억 + 근속 20년 vs 근속 5년만 인정 시 세금 차이가 1,000만 원 이상 나는 사례도 있습니다. 합산 가능성은 실질 판단에 따라 달라지니 점검 가치가 있어요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 퇴직소득세 환급 절차',
        content:
          '<p><strong style="color:#1e3a5f">국세청 경정청구 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 퇴직소득 원천징수영수증 확인</strong> (즉시) — 회사가 발급한 퇴직소득 원천징수영수증에서 근속연수·과세표준·산출세액 검증. 홈택스 "지급명세서 등 제출내역"에서 본인 확인.</li>\n<li><strong>2단계 — 합산 가능 사유 정리</strong> (즉시) — 중간정산 시 사직 정황·재입사 형식·실질적 근로 단절 여부 자료. 이전 회사·계열사 근로관계 승계 여부 확인.</li>\n<li><strong>3단계 — 회사에 정정 요청</strong> (가능 시) — 원천징수영수증을 회사가 정정 발급하면 자동 환급 가능. 회사 거부 시 다음 단계로.</li>\n<li><strong>4단계 — 경정청구</strong> (퇴직 후 5년 이내) — 관할 세무서 또는 홈택스에 경정청구. 근속연수 합산 사유·자료 제출. 처리기간 약 2개월.</li>\n<li><strong>5단계 — 거부 시 조세심판청구·행정소송</strong> — 경정청구 거부 시 90일 이내 조세심판원 청구 → 행정소송. 변호사·세무사 도움 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직소득세 환급 가능성, AI로 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">근속기간·중간정산 여부·퇴직금 금액을 입력하면 환급 추정액과 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">퇴직금 계산과 청구 절차, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>퇴직소득 원천징수영수증 (회사 발급)</li>\n<li>퇴직금 지급명세서·수령 통장 내역</li>\n<li>근로계약서·재계약서·이력서</li>\n<li>중간정산 지급명세서 (받았던 경우)</li>\n<li>사업양도·기업분할 자료 (해당 시)</li>\n<li>경정청구서 (홈택스 또는 세무서)</li>\n<li>국민연금·건강보험 가입이력 (실질적 근로 연속성 입증)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 중간정산 사직 의사의 비진의 표시 무효',
        summary:
          '대법원 98다36924 사건(대법원, 1998.12.11 선고)에서 법원은 근로자가 중간퇴직금을 지급받으려는 내심의 의사 외에 소속 회사와의 근로관계를 종료하거나 퇴직금 산정의 근속연수를 제한하려는 내심의 의사가 있었다고 할 수 없고, 회사도 근로자의 형식상 퇴직 의사가 진의 아님을 알았던 경우 위 퇴직금 수령은 비진의 의사표시로서 무효라고 판시했습니다.',
        takeaway:
          '형식적 사직·재입사로 중간정산을 받았더라도 실질적 근로관계가 단절되지 않았다면 근속기간이 합산되어 근속연수공제·퇴직소득세 산정에서 유리한 결과로 이어질 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '중간정산을 이미 받았는데 합산 인정이 가능한가요?',
        answer:
          '<strong>중간정산 시 사직 의사가 진의 아닌 비진의 의사표시였다면 합산 가능성이 있습니다.</strong> 근로 단절 없이 동일 업무·동일 사업장에서 계속 근무했다면 실질적 근로관계가 유지된 것으로 다툴 여지가 있어요.',
      },
      {
        question: '경정청구 기한은 언제까지인가요?',
        answer:
          '<strong>법정신고기한 경과 후 5년 이내(국세기본법 제45조의2)입니다.</strong> 퇴직소득세는 회사가 원천징수해 신고하므로, 그 신고기한으로부터 5년 안에 경정청구를 검토하세요.',
      },
      {
        question: '퇴직연금(DC형·IRP)도 동일한 공제가 적용되나요?',
        answer:
          '<strong>퇴직금을 IRP로 이연하면 인출 시점까지 과세이연됩니다.</strong> 일시 수령 시 동일한 근속연수공제가 적용되며, IRP 운용 후 연금 수령으로 받으면 연금소득세(저율)로 분리과세될 수 있어요.',
      },
      {
        question: '회사가 원천징수영수증을 정정해주지 않는데 어떻게 하나요?',
        answer:
          '<strong>회사 협조 없이도 본인이 직접 경정청구 가능합니다.</strong> 홈택스에서 본인의 퇴직소득 지급명세서를 확인하고, 합산 가능 자료를 첨부해 관할 세무서에 경정청구를 신청하세요.',
      },
      {
        question: '환급금에도 다시 세금이 붙나요?',
        answer:
          '<strong>환급은 과다 납부분의 반환이므로 추가 과세가 없는 것이 원칙입니다.</strong> 환급가산금이 발생하면 그 부분만 별도 이자소득으로 분류될 수 있어요.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '명예퇴직금 환수 재취업 제한 무효', href: '/guide/retirement/retirement-honorary-pay-recoupment-job-restriction' },
      { label: '퇴직금 중간정산 후 합산', href: '/guide/retirement/retirement-interim-settlement-aggregation' },
      { label: '퇴직금 계산 평균임금 산정', href: '/guide/retirement/retirement-pay-average-wage-calculation' },
      { label: '퇴직금 시효 3년 청구', href: '/guide/retirement/retirement-pay-three-year-statute' },
      { label: '퇴직연금 DC형 IRP 이연', href: '/guide/retirement/retirement-dc-irp-tax-deferral' },
    ],
  },

  // ─── 7. retirement / honorary-pay-recoupment-job-restriction ───
  {
    domain: 'retirement',
    slug: 'retirement-honorary-pay-recoupment-job-restriction',
    keyword: '명예퇴직금 환수 재취업 제한',
    questionKeyword: '명예퇴직금 받았는데 동종업계 재취업했다고 환수하라네요',
    ctaKeyword: '명예퇴직금 환수 약정 무효 가능성 확인',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '명예퇴직금 환수 — 재취업 제한 약정 무효 판례 정리 | 로앤가이드',
      description:
        '명예퇴직 후 동종업계 재취업으로 명퇴금 환수 요구를 받았다면 약정의 합리성·직업선택 자유 침해 여부를 점검할 수 있습니다. 무효 판단 기준을 지금 확인하세요.',
    },
    intro:
      '<p>"5년 전 명예퇴직하면서 1억 가까이 받았는데, 같은 업종 회사에 재취업했더니 회사에서 \'환수 대상\'이라며 반환 요구를 합니다. 정말 돌려줘야 하나요?" 명퇴금 환수·재취업 제한 약정은 헌법상 직업선택의 자유를 제한하는 측면이 있어, 무한정 효력이 인정되지 않습니다(헌법 제15조). 제한 기간·지역·범위·보상 여부 등 합리성을 종합 판단해 일부 무효로 보거나 보상기간 내에서만 효력을 인정한 사례가 있습니다(서울고법 2001나46398 사건 취지). 환수 청구를 받았다면 약정 내용을 점검해 다툴 여지를 확인하는 것이 좋습니다.</p>',
    sections: [
      {
        title: 'Q. 명퇴금 재취업 제한 약정은 무조건 유효한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 직업선택 자유 침해 여부에 따라 무효·일부 무효로 판단될 수 있습니다.</strong></p>\n<ul>\n<li><strong>합리적 범위 내 유효</strong> — 제한 기간·지역·업종·직무가 명퇴금 보상에 비례해 합리적이라면 유효로 인정될 여지(헌법 제15조 + 민법 제103조 사회질서).</li>\n<li><strong>과도한 제한은 무효</strong> — 무기한·전국 범위·전 업종 제한처럼 과도한 약정은 직업선택 자유 본질을 침해해 무효 또는 일부 무효로 다툴 여지.</li>\n<li><strong>보상기간 한도</strong> — 명퇴금은 일정 기간의 임금 보상 성격이 있어, 그 보상기간을 넘어선 제한은 효력이 제한될 수 있음(서울고법 2001나46398 사건 취지).</li>\n<li><strong>경업금지 약정 일반론</strong> — 일반 경업금지(NCA)도 보호이익·제한 정도·기간·지역·근로자 부담을 종합 판단해 합리성이 인정되어야 유효(대법원 일관 입장).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "받은 돈 다 토해내야 한다"는 단정은 과합니다. 약정 내용·재취업 시점·업무 유사도 등을 따져 일부 또는 전부 무효로 다툴 여지가 있습니다.</blockquote>',
      },
      {
        title: 'Q. 환수 청구 시 다툴 수 있는 5가지 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 아래 사정 중 다수에 해당하면 환수 청구를 다툴 가능성이 높아집니다.</strong></p>\n<ul>\n<li><strong>① 약정의 합리성 결여</strong> — 제한 기간 무한정·지역 무제한·업종 광범위 등 합리성이 결여되었다면 일부 무효 가능성.</li>\n<li><strong>② 보상기간 경과</strong> — 명퇴금이 OO개월치 임금 보상 성격이라면 그 기간 경과 후 재취업은 제한 효력이 약해짐.</li>\n<li><strong>③ 동종업계 정의 불명확</strong> — 어떤 업종까지 동종으로 볼지 명확하지 않다면 약정 적용 범위 다툼 가능. 단순 같은 업계라도 직무가 전혀 다르면 적용 안 될 여지.</li>\n<li><strong>④ 보상 부재</strong> — 재취업 제한 기간 동안 별도 보상이 없거나 명퇴금이 보상으로 충분치 않다면 일부 무효 인정 가능성.</li>\n<li><strong>⑤ 회사 측 신뢰 위반</strong> — 회사가 그동안 묵시적으로 인정해놓고 갑자기 환수를 청구하면 신의성실 원칙 위반으로 다툴 여지.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명퇴금 환수 청구, AI로 다툴 여지를 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">약정 내용·재취업 시점·업무 유사도를 입력하면 무효 가능성과 대응 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">퇴직금 계산과 청구 절차, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 청구 대응 절차',
        content:
          '<p><strong style="color:#1e3a5f">민사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 환수 청구 통지서 분석</strong> (즉시) — 약정 조항·환수 금액·청구 근거·기한 확인. 약정서 사본 보존.</li>\n<li><strong>2단계 — 약정 조항 검토</strong> (즉시) — 제한 기간·지역·업종·재취업 정의를 합리성 기준에 따라 점검. 보상기간 산정.</li>\n<li><strong>3단계 — 회사에 이의 회신</strong> (통지 직후) — 약정 무효·일부 무효 주장을 서면으로 회신. 변호사 자문 후 작성 권장.</li>\n<li><strong>4단계 — 회사가 민사 청구 시 응소</strong> — 회사가 부당이득반환 청구·약정 환수 청구를 제기하면 답변서·반박 자료 제출. 직업선택 자유 침해·약정 무효 항변.</li>\n<li><strong>5단계 — 합의 또는 판결</strong> — 1심 진행 중 합의 가능. 판결 시 일부 환수·전액 환수·청구 기각 등으로 결론. 항소 가능.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 주의: 환수 통지에 즉답·자진 반환하면 약정 효력을 인정한 것으로 해석될 위험이 있습니다. 변호사 자문 후 신중히 회신하세요.</blockquote>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>명예퇴직 합의서·약정서 (재취업 제한 조항 포함)</li>\n<li>명퇴금 지급명세서·수령 내역</li>\n<li>회사의 환수 청구 통지서</li>\n<li>재취업 회사 근로계약서·직무 기술서</li>\n<li>이전 회사 직무 기술서 (동종업계 여부 비교)</li>\n<li>업종·직무 유사성 입증·반증 자료</li>\n<li>회사가 그동안 묵인한 정황 (메일·문자)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 명예퇴직 후 재입사 시 환수 약정 해석',
        summary:
          '서울고법 2001나46398 사건(서울고법, 2001.05.17 선고)에서 법원은 명예퇴직 후 3년 내에 재입사할 경우 기지급받은 명예퇴직수당을 회사에 반납하기로 한 약정은, 명예퇴직자가 재입사 후 정년까지 또는 적어도 명예퇴직수당에 의한 보상기간 이상 근무할 것을 조건으로 한 것이라고 판시했습니다.',
        takeaway:
          '명퇴금 환수 약정은 보상기간·합리적 범위 내에서 효력이 인정되며, 보상기간을 넘어선 제한·과도한 적용은 다툴 여지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '약정서에 "5년간 동종업계 취업 시 환수"라고 명시돼 있어요',
        answer:
          '<strong>5년·동종업계라도 합리성·보상기간을 따져 다툴 수 있습니다.</strong> 명퇴금이 5년치 임금 보상에 미치지 못한다면 효력 범위가 그 보상기간으로 한정될 여지가 있어요.',
      },
      {
        question: '동종업계인지 애매한 경우 어떻게 판단하나요?',
        answer:
          '<strong>업종 분류·실제 직무·고객·기술 영역을 종합 판단합니다.</strong> 단순히 같은 산업군이라도 핵심 업무·기술이 전혀 다르다면 약정상 "동종"에 해당하지 않을 수 있어요.',
      },
      {
        question: '회사가 그동안 알고도 묵인했어요. 갑자기 청구해도 되나요?',
        answer:
          '<strong>장기간 묵인 후 갑작스런 청구는 신의성실 원칙·실효 원칙으로 다툴 수 있습니다.</strong> 회사가 재취업 사실을 알면서도 수년간 청구하지 않았다면 권리 행사가 제한될 여지가 있어요.',
      },
      {
        question: '약정서에 서명한 사실이 없는데 환수 통지가 왔어요',
        answer:
          '<strong>약정 자체가 성립하지 않았다면 환수 청구 근거가 약합니다.</strong> 명퇴 합의서·약정서에 본인 서명이 있는지 확인하고, 없다면 약정 부존재로 다툴 수 있어요.',
      },
      {
        question: '환수 분할 납부도 가능한가요?',
        answer:
          '<strong>회사와 합의 시 분할 납부 협의가 가능합니다.</strong> 다만 합의 자체가 약정 효력을 일부 인정하는 의미가 될 수 있어, 변호사 자문 후 합의 조항을 신중히 작성하는 것이 좋습니다.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직소득세 근속연수공제 환급', href: '/guide/retirement/retirement-tax-tenure-deduction-refund' },
      { label: '퇴직금 중간정산 후 합산', href: '/guide/retirement/retirement-interim-settlement-aggregation' },
      { label: '퇴직금 시효 3년 청구', href: '/guide/retirement/retirement-pay-three-year-statute' },
      { label: '퇴직금 계산 평균임금 산정', href: '/guide/retirement/retirement-pay-average-wage-calculation' },
      { label: '임금체불 1년 경과 시효 청구', href: '/guide/wage/wage-unpaid-one-year-statute-claim' },
    ],
  },
];
