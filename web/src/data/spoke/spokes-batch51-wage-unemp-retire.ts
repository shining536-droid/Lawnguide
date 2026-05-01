import { SpokePage } from '../spoke-pages';

// batch51 wage+unemp+retire 7개
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 24시간 교대·격일제 등 불규칙 시프트에서 포괄임금으로 연장수당이 산정되지 않은 근로자가 포괄임금 약정의 효력 한계와 연장근로 실시간 입증 자료를 점검해 미지급 가산수당 청구를 검토하도록 돕는 페이지다.
// 2. 이 페이지는 목표 달성 후 회사가 인센티브 기준을 사후 변경·취소해 약속된 인센티브를 받지 못한 근로자가 인센티브의 임금성 판단 기준과 청구 절차를 정리해 차액 청구를 검토하도록 돕는 페이지다.
// 3. 이 페이지는 출산·육아휴직 복귀 후 보너스·평가에서 차별을 겪은 근로자가 남녀고용평등법·근로기준법 차별 금지 규정을 점검해 시정·차액 청구를 검토하도록 돕는 페이지다.
// 4. 이 페이지는 외국법인 한국지사 또는 외국계 회사에서 퇴사한 근로자가 사업자등록·고용보험 가입 여부를 확인해 실업급여 수급자격 가능성을 검토하도록 돕는 페이지다.
// 5. 이 페이지는 창업 실패 후 자발적 폐업·퇴사를 한 자영업자가 자영업자 고용보험·5인 미만 특례·정당 사유 인정 요건을 점검해 실업급여 신청 가능성을 검토하도록 돕는 페이지다.
// 6. 이 페이지는 중간정산 후 추가로 발견된 산정 누락·평균임금 잘못으로 차액을 다투려는 근로자가 중간정산 무효 사유와 재산정 절차를 점검해 차액 청구를 검토하도록 돕는 페이지다.
// 7. 이 페이지는 스톡옵션·RSU 행사 이익이 퇴직금 산정에 포함되어야 하는지 다투는 스타트업·외국계 출신 퇴사자가 평균임금성·임금성 판단 기준을 점검해 차액 청구를 검토하도록 돕는 페이지다.

export const spokesBatch51WageUnempRetire: SpokePage[] = [
  // ─── 1. wage / pogual-irregular-shift-time-illegal ───
  {
    domain: 'wage',
    slug: 'wage-pogual-irregular-shift-time-illegal',
    keyword: '포괄임금 불규칙 시프트 위법',
    questionKeyword: '24시간 교대·격일제 포괄임금인데 연장수당을 받을 수 있나요?',
    ctaKeyword: '포괄임금 불규칙 시프트 미지급 가산수당 청구 가능성 확인',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '포괄임금 24시간 교대·격일제 — 위법 산정 4가지 신호 | 로앤가이드',
      description:
        '24시간 교대·격일제 시프트에서 포괄임금으로 연장수당이 빠졌다면 약정 효력 한계를 다툴 여지가 있습니다. 미지급 가산수당 청구 가능성을 지금 확인하세요.',
    },
    intro:
      '<p>"24시간 격일제로 일하는데 \'포괄임금\'이라며 야간·연장수당이 따로 안 나옵니다. 정상인가요?" 포괄임금 약정은 근로시간 산정이 객관적으로 어려운 경우에 한해 제한적으로 효력이 인정됩니다. 24시간 교대·격일제처럼 출퇴근·운행기록·근무표로 시간 산정이 가능한 경우에는 포괄임금이라는 이유만으로 연장·야간·휴일수당을 면할 수 없다는 것이 대법원 일관 입장입니다(대법원 2020다300299 사건 취지). 시간 측정이 가능했다면 시효 3년 안에서 미지급 가산수당 차액 청구를 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 어떤 시프트에서 포괄임금이 위법으로 평가될 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 다음 4가지 신호가 보이면 포괄임금 약정의 효력 자체를 다툴 여지가 있습니다.</strong></p>\n<ul>\n<li><strong>① 시간 산정이 가능한 시프트</strong> — 24시간 교대·격일제·12시간 2교대 등 출퇴근 시간이 명확하고 근무표·근태시스템·운행기록이 있는 경우. 산정이 어렵지 않으므로 포괄임금 효력 부정 여지.</li>\n<li><strong>② 최저임금 미달</strong> — 포괄임금 총액을 실제 근로시간(연장·야간·휴일 가산 포함)으로 나누면 시급이 최저임금에 못 미치는 경우. 이 경우 포괄임금 자체가 무효(대법원 2020다300299 취지).</li>\n<li><strong>③ 가산수당 항목 부재</strong> — 급여명세서에 연장·야간·휴일수당 항목이 별도로 표시되지 않거나 "기본급 일체 포함" 식 단일 항목만 있는 경우.</li>\n<li><strong>④ 서면 약정 부재 또는 일방 통보</strong> — 근로계약서에 "포괄임금" 명시가 없거나 회사가 일방 안내·구두 합의로 처리한 경우. 정액수당·정액급 포괄임금 모두 명확한 약정 입증 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 24시간 교대·격일제는 형태만 보면 "시간 산정 어려움"으로 보일 수 있으나 실제로는 출퇴근표·운행기록 등으로 정확히 산정 가능한 사례가 많아 포괄임금 효력이 부정될 여지가 큽니다.</blockquote>',
      },
      {
        title: 'Q. 미지급 연장·야간수당 어떻게 산정·청구하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 실제 근로시간을 입증해 연장·야간 가산을 분리 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 실제 근로시간 입증</strong> — 출퇴근 기록·근무표·CCTV·운행일지·메신저 보고로 실제 일한 시간을 정리. 휴게시간(통상 1일 1시간)을 빼고 산정.</li>\n<li><strong>② 통상시급 산정</strong> — 월 통상임금 ÷ 209시간(주 40시간 기준) = 통상시급. 포괄임금이라면 시급 환산 후 가산율 50% 적용.</li>\n<li><strong>③ 연장근로 차액</strong> — 1주 40시간 또는 1일 8시간 초과분 × 통상시급 × 1.5. 격일제 24시간 근무에서 휴게시간 빼면 통상 22시간 중 연장 부분은 14시간 + 야간 부분 별도.</li>\n<li><strong>④ 야간근로 가산</strong> — 22시 ~ 익일 06시 근로는 별도 50% 가산. 격일제·24시간 근무에 야간 시간이 포함되면 연장과 야간 가산이 중첩 적용.</li>\n<li><strong>⑤ 시효 3년</strong> — 임금채권 시효 3년 안에서 합산 청구 가능(근로기준법 제49조). 매월 발생일 기준으로 시효 카운트.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 포괄임금 시프트 위법, AI로 청구 가능성을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">근무 형태·실제 시간·급여 구성을 입력하면 미지급 가산수당 차액 청구 가능성을 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 포괄임금 시프트 차액 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근로시간 자료 보존</strong> (즉시) — 근태시스템 캡처, 출퇴근 기록, 운행일지, 근무표, 카카오톡 보고 등 실제 근로시간 입증 자료 확보. 휴게시간 사용 여부도 정리.</li>\n<li><strong>2단계 — 차액 산출</strong> (즉시) — 통상시급 × 1.5(연장) + 야간·휴일 별도 가산. 시효 3년치 합산. 회사가 지급한 포괄급여를 차감해 미지급액 산정.</li>\n<li><strong>3단계 — 회사 정정 요청</strong> (선택) — 인사팀에 서면으로 정확한 산정 자료 + 차액 지급 요청. 14일 이내 회신 없으면 다음 단계로.</li>\n<li><strong>4단계 — 노동청 진정</strong> (3년 이내) — 노동포털(labor.moel.go.kr) 또는 관할 지방고용노동지청. 처리기간 25일(연장 가능). 시정지시 미이행 시 형사 송치(3년 이하 징역 또는 3,000만 원 이하 벌금).</li>\n<li><strong>5단계 — 민사 임금 청구 (필요 시)</strong> — 노동청 시정지시 후에도 미지급이면 민사 청구. 3,000만 원 이하면 소액심판 → 통상 2~3개월 판결. 본 차액 + 연 20% 지연이자(퇴직자) 합산 가능성.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 주의: 회사가 "포괄임금이니 청구 못 한다"고 단정해도 효력 한계는 법원 판단 영역입니다. 시간 산정이 가능했다면 다툴 여지가 충분히 열립니다.</blockquote>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>근로계약서·연봉계약서 (포괄임금 약정 문구 확인)</li>\n<li>최근 3년 급여명세서 (가산수당 항목 분리 여부)</li>\n<li>근태시스템·출퇴근 기록·운행일지·근무표</li>\n<li>휴게시간 운용 자료 (실제 휴게 가능 여부)</li>\n<li>CCTV·메신저 보고·이메일 (근로시간 간접 입증)</li>\n<li>취업규칙 또는 단체협약 (포괄임금 관련 조항)</li>\n<li>이직확인서·퇴직증명서 (퇴직자의 경우)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금계약과 최저임금 미달 판단',
        summary:
          '대법원 2020다300299 사건(대법원, 2024.12.26 선고)에서 법원은 포괄임금계약에 따라 지급된 임금이 최저임금에 미달하는 때에는 포괄임금계약이 유효하다고 볼 수 없고, 사용자는 그 미달액을 지급해야 한다고 판시하면서, 정액급 포괄임금계약을 체결하면서 월급여액의 대상이 된 근로시간 수를 정한 경우 비교대상 시급 산정 방식을 구체적으로 제시했습니다.',
        takeaway:
          '포괄임금이라는 형식만으로 가산수당을 면제할 수는 없고, 시간 산정이 가능한 시프트라면 미달분·차액 청구가 가능한 사례가 있어 시효 3년 안에서 다툴 여지가 큽니다.',
      },
    ],
    faq: [
      {
        question: '근로계약서에 "포괄임금"이라고 적혀 있으면 끝인가요?',
        answer:
          '<strong>아닙니다. 포괄임금 약정의 효력은 근로시간 산정 곤란성·근로자 불이익 부재 등 요건을 충족할 때만 인정됩니다.</strong> 24시간 교대·격일제처럼 산정이 가능하다면 약정 자체를 다툴 여지가 있어요.',
      },
      {
        question: '24시간 격일제는 휴게시간이 길어서 그래도 되는 거 아닌가요?',
        answer:
          '<strong>형식상 휴게시간이 있어도 실제 대기·즉응 의무가 있으면 근로시간으로 평가될 수 있습니다.</strong> 자유로운 휴식이 보장되지 않았다면 휴게시간을 포함해 산정해 다툴 여지가 있어요.',
      },
      {
        question: '야간수당까지 같이 청구할 수 있나요?',
        answer:
          '<strong>22시~익일 06시 근로는 별도 50% 가산이 의무입니다.</strong> 격일제·24시간 근무라면 연장 가산과 야간 가산이 중첩 적용되어 차액이 커지는 사례가 있어요.',
      },
      {
        question: '입사한 지 3년 넘었는데 시효 지난 부분은 어쩌나요?',
        answer:
          '<strong>임금채권 시효는 3년이지만 발생일 기준으로 카운트됩니다.</strong> 직전 36개월치는 청구 가능하고, 회사가 "곧 정산해줄게" 같은 신뢰를 줬다면 권리남용 항변 가능성도 있어요.',
      },
      {
        question: '5인 미만 사업장도 포괄임금 다툴 수 있나요?',
        answer:
          '<strong>5인 미만은 연장·야간·휴일 가산수당 의무 자체가 없어 다툼 범위가 제한됩니다.</strong> 다만 약정으로 가산수당을 정했거나 최저임금 미달이라면 그 부분은 다툴 여지가 있어요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '보상휴가제 위장 연장수당 청구', href: '/guide/wage/wage-comp-time-substitute-overtime-illegal' },
      { label: '연장수당 미지급 신고 절차', href: '/guide/wage/wage-overtime-night-allowance-illegal' },
      { label: '임금 지연이자 연 20% 청구', href: '/guide/wage/wage-late-payment-interest-claim' },
      { label: '급여명세서 누락·미발급 위반', href: '/guide/wage/wage-payslip-incomplete-violation' },
      { label: '퇴직 후 임금 미지급 지연', href: '/guide/wage/wage-resignation-final-pay-delay' },
    ],
  },

  // ─── 2. wage / incentive-revocation-after-meeting-target ───
  {
    domain: 'wage',
    slug: 'wage-incentive-revocation-after-meeting-target',
    keyword: '인센티브 사후 취소 임금성',
    questionKeyword: '목표 달성했는데 인센티브를 회사가 사후 취소했어요. 청구 가능한가요?',
    ctaKeyword: '인센티브 사후 취소 차액 청구 가능성 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '인센티브 사후 취소·기준변경 — 임금성 인정 청구 5단계 | 로앤가이드',
      description:
        '목표 달성 후 인센티브 기준이 사후 변경·취소되었다면 임금성 판단·차액 청구 절차로 다툴 여지가 있습니다. 청구 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"분기 목표를 달성해서 인센티브 받기로 했는데, 정산 직전에 회사가 \'기준이 바뀌었다\'며 절반만 줬어요. 청구할 수 있나요?" 인센티브가 사전에 산정 기준·지급조건이 정해져 있고 정기·일률·고정성 요건을 갖췄다면 임금에 해당해, 사후 일방 취소·기준 변경은 무효를 다툴 여지가 있습니다(대법원 2021다248299 사건 취지). 시효 3년 안에서 차액 청구 절차를 검토할 가치가 큽니다.</p>',
    sections: [
      {
        title: '인센티브 임금성 — 사후 취소가 무효일 수 있는 4가지 사정',
        content:
          '<p><strong style="color:#1e3a5f">인센티브가 임금에 해당하면 사후 취소·감액이 단순 회사 재량으로 정당화되기 어렵습니다.</strong></p>\n<ul>\n<li><strong>① 사전 산정 기준 확정</strong> — 목표·달성률·지급률이 사전에 운영규정·이메일·공지로 명확히 정해진 경우. "달성 시 ○○만 원 지급" 같은 확정 표현은 임금성·신뢰 보호 강화.</li>\n<li><strong>② 정기·일률 지급 관행</strong> — 매년·매분기 정기적으로 같은 기준으로 지급되어 온 경우. 노동관행으로 임금성 인정 여지(대법원 2022다255454 비교).</li>\n<li><strong>③ 근로 대가성</strong> — 인센티브가 영업·제조 실적 등 근로의 양과 질에 직접 비례하면 근로 대가로 임금에 해당(대법원 2021다248299 취지). 경영성과 분배 성격이 약하면 임금성 강화.</li>\n<li><strong>④ 사후 변경 절차 부재</strong> — 취업규칙 불이익 변경에 대한 근로자 과반수 동의가 없거나, 개별 근로자에게 사전 통지·동의 절차가 없었던 경우.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "특별격려금" "성과급" 명칭이라도 사전 산정 공식이 확정되어 있고 정기 지급되어 왔다면 임금에 해당할 가능성이 큽니다. 명칭이 아니라 실질로 판단됩니다.</blockquote>',
      },
      {
        title: '경영성과급 vs 임금 — 임금성 부정될 수 있는 사정',
        content:
          '<p><strong style="color:#1e3a5f">반대로 다음 사정이 강하면 임금성이 부정되어 청구가 어려울 수 있습니다.</strong></p>\n<ul>\n<li><strong>당기순이익·EVA 등 경영성과 종속</strong> — 회사 당기순이익·경제적 부가가치(EVA) 같은 경영지표 발생 여부에 좌우되면 임금이 아닌 경영성과 분배로 평가될 가능성(대법원 2022다255454 취지).</li>\n<li><strong>근로 대가성 미흡</strong> — 개인 근로의 양·질과 직접 연결되지 않고 회사 전체 실적에만 좌우되는 경우.</li>\n<li><strong>지급 여부 자체 재량</strong> — 취업규칙·운영규정에 회사가 지급 여부를 결정한다고 명시된 경우.</li>\n<li><strong>관행 미확립</strong> — 단발·비정기 지급으로 노동관행으로 받아들여지지 않은 경우.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인의 인센티브가 위 4가지 임금성 인정 사정 vs 부정 사정 중 어느 쪽이 우세한지 자료를 모아 정리하면 청구 가능성 판단이 명확해집니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 인센티브 차액 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 + 민사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 산정 기준 자료 확보</strong> (즉시) — 인센티브 운영규정·공지 메일·시상식 자료·기존 지급 내역. 사전에 확정된 산정 공식·지급 약속을 입증할 자료 정리.</li>\n<li><strong>2단계 — 변경 절차 점검</strong> (즉시) — 취업규칙·운영규정 변경에 근로자 과반수 동의가 있었는지, 개별 통지·동의가 있었는지 확인. 절차 미이행이면 무효 주장 가능.</li>\n<li><strong>3단계 — 차액 산출</strong> (즉시) — 사전 기준대로라면 받았어야 할 인센티브 − 실제 수령액 = 차액. 시효 3년치 합산.</li>\n<li><strong>4단계 — 노동청 진정</strong> (3년 이내) — 노동포털(labor.moel.go.kr) 또는 관할 지방고용노동지청. 처리기간 25일. 시정지시 미이행 시 형사 송치(3년 이하 징역 또는 3,000만 원 이하 벌금).</li>\n<li><strong>5단계 — 민사 임금 청구 (필요 시)</strong> — 본 차액 + 통상임금성·평균임금성 다툼 병합 주장. 인센티브가 임금에 해당하면 그동안의 연장·퇴직금까지 차액 확장될 가능성.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 인센티브 사후 취소, AI로 차액 청구를 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">사전 기준·실수령·변경 절차를 입력하면 임금성 판단과 청구 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>근로계약서·인센티브 운영규정·취업규칙</li>\n<li>인센티브 산정 기준 공지 메일·시상식 자료·KPI 안내</li>\n<li>분기·연간 목표 달성 입증 자료 (실적표·평가서)</li>\n<li>최근 3년 급여명세서·인센티브 지급 내역</li>\n<li>회사의 변경·취소 통보 문서·이메일</li>\n<li>근로자 과반수 동의서 (요청 후 수령)</li>\n<li>동료 직원 비교 자료 (차별 동시 주장 시)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 목표 인센티브의 임금성과 평균임금 산입',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 회사가 재무성과·전략과제 이행 정도를 평가해 상여기초금액에 연동해 지급하는 \'목표 인센티브\'는 계속적·정기적으로 지급되고 회사에 지급의무가 지워져 있으며 근로제공과 직접적·밀접하게 관련되어 평균임금 산정 기초가 되는 임금에 해당한다고 판시했습니다.',
        takeaway:
          '인센티브가 사전 기준 확정 + 정기·일률 지급 + 근로 대가성을 갖추면 임금에 해당해, 사후 일방 취소·감액은 무효를 다툴 여지가 있고 차액 청구가 가능할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '회사가 "인센티브는 재량"이라고 합니다',
        answer:
          '<strong>약정·관행으로 사전 기준이 확정되어 있다면 단순 재량 주장만으로는 정당화되지 않을 수 있습니다.</strong> 운영규정·기존 지급 관행을 자료로 정리하면 임금성 다툼 가능성이 열려요.',
      },
      {
        question: '단체협약·취업규칙에 명시되지 않았는데 청구 가능한가요?',
        answer:
          '<strong>운영지침·공지 메일·계속된 관행만으로도 임금성 인정될 수 있습니다.</strong> 사전 산정식과 정기 지급 관행을 자료로 입증하면 다툴 여지가 있어요.',
      },
      {
        question: '같은 부서 동료는 받았는데 저만 못 받았어요',
        answer:
          '<strong>합리적 이유 없는 차별이라면 동일가치노동 동일임금 위반 + 차별 청구 병합 주장이 가능합니다.</strong> 비교 자료를 정리해 함께 청구하면 차액 규모가 커질 수 있어요.',
      },
      {
        question: '회사가 합의서를 받았다고 하는데 효력 있나요?',
        answer:
          '<strong>강행법규에 위반되는 면제·감액 합의는 무효로 다툴 여지가 있습니다.</strong> 강압·기만이 있었거나 충분한 정보 제공 없이 받은 합의는 의사의 흠을 이유로 무효 주장 가능해요.',
      },
      {
        question: '퇴직했는데 미지급 인센티브가 있어요',
        answer:
          '<strong>퇴직 후에도 시효 3년 안에서 청구 가능합니다.</strong> 인센티브가 평균임금성으로 인정되면 퇴직금까지 재산정 청구가 가능한 사례도 있어 차액이 커질 여지가 있어요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '상여금 지급조건 일방 변경 차별', href: '/guide/wage/wage-bonus-condition-changed-discrimination' },
      { label: '보상휴가제 위장 연장수당 청구', href: '/guide/wage/wage-comp-time-substitute-overtime-illegal' },
      { label: '임금 지연이자 연 20% 청구', href: '/guide/wage/wage-late-payment-interest-claim' },
      { label: '급여명세서 누락·미발급 위반', href: '/guide/wage/wage-payslip-incomplete-violation' },
      { label: '임금체불 1년 경과 시효 청구', href: '/guide/wage/wage-deferred-payment-interest' },
    ],
  },

  // ─── 3. wage / childcare-bonus-discrimination ───
  {
    domain: 'wage',
    slug: 'wage-childcare-bonus-discrimination',
    keyword: '출산 육아휴직 복직 보너스 차별',
    questionKeyword: '육아휴직 복귀 후 보너스·평가에서 차별을 받았어요',
    ctaKeyword: '출산·육아휴직 복직 차별 시정·차액 청구 가능성 확인',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '육아휴직 복귀 보너스·평가 차별 — 시정 청구 4단계 | 로앤가이드',
      description:
        '출산·육아휴직 복귀 후 보너스·평가에서 불이익을 받았다면 남녀고용평등법 제19조 위반으로 시정·차액 청구가 가능합니다. 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"육아휴직 끝나고 복귀했더니 같은 직급 동료는 보너스 받았는데 저만 \'평가가 낮다\'며 빠졌어요. 차별 같은데 다툴 수 있나요?" 출산휴가·육아휴직을 이유로 보너스·인사평가·승진에서 불이익을 주는 것은 남녀고용평등과 일·가정 양립 지원에 관한 법률 제19조 제3항(육아휴직을 이유로 한 해고나 그 밖의 불리한 처우 금지) + 근로기준법 제6조(균등 처우)에 정면 위반될 여지가 있습니다. 노동위 차별 시정·노동청 진정·민사 차액 청구 모두 검토 가능합니다.</p>',
    sections: [
      {
        title: 'Q. 육아휴직 복직자 차별이 인정될 수 있는 4가지 신호',
        content:
          '<p><strong style="color:#1e3a5f">A. 다음 사정 중 하나에 해당하면 차별·불이익 처우로 다툴 여지가 있습니다.</strong></p>\n<ul>\n<li><strong>① 휴직 기간을 평가에 그대로 반영</strong> — 육아휴직 기간을 "성과 0"으로 처리해 평가 등급이 하락한 경우. 휴직 기간은 평가에서 제외하거나 평균 등급을 부여해야 한다는 것이 일반적 해석.</li>\n<li><strong>② 복귀 직후 평가만으로 보너스 산정</strong> — 통상 1년 단위 평가인데 복귀 후 짧은 기간만 잘라 평가해 차별 결과를 만든 경우. 합리성 결여로 다툴 여지.</li>\n<li><strong>③ 휴직자에게만 적용된 추가 요건</strong> — "복귀 후 6개월 이상 근속" 같은 조건을 휴직자에게만 부과한 경우. 균등 처우 위반.</li>\n<li><strong>④ 동일 직급·업무 동료와 차별</strong> — 동일 가치 노동 + 동일 직급·근속인데 보너스·승진에서만 불이익을 받은 경우.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회사가 "평가가 낮아서"라고 주장하더라도 그 평가 자체가 휴직을 이유로 한 차별의 결과라면 표면적 사유로 정당화되지 않습니다.</blockquote>',
      },
      {
        title: 'Q. 어떤 법적 청구 경로가 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 차별 시정·진정·민사 청구를 단독·병행으로 진행할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 노동위원회 차별 시정 신청</strong> — 기간제·단시간·파견에 한정되지 않고 남녀고용평등법 위반은 노동위 시정 절차를 활용 검토 가능. 차별 시정명령 + 차액 지급 명령.</li>\n<li><strong>② 노동청 진정 (남녀고용평등법 위반)</strong> — 출산·육아휴직 사유 차별은 형사 처벌 대상(3년 이하 징역 또는 3,000만 원 이하 벌금). 진정으로 시정지시·송치 압박 가능.</li>\n<li><strong>③ 국가인권위원회 진정</strong> — 차별 시정 권고 가능. 인권위 권고는 법적 강제력은 약하지만 회사 압박 효과 있음.</li>\n<li><strong>④ 민사 임금·손해배상 청구</strong> — 본 차액 + 위자료 청구. 시효 3년 안에서 합산. 통상임금성으로 다툴 여지가 있는 보너스라면 평균임금 영향까지 확장 가능.</li>\n<li><strong>⑤ 부당한 인사평가 자체 다툼</strong> — 평가 자체가 차별의 결과라면 부당노동행위·부당해고 구제 신청과 결합 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 육아휴직 복직 차별, AI로 청구 경로를 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">평가 시점·동료 비교·차액 자료를 입력하면 시정·차액 청구 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 차별 시정·차액 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부·노동위·민사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 차별 입증 자료 보존</strong> (즉시) — 휴직 전·후 인사평가·보너스 명세, 동료 직원 비교 자료, 회사 평가 기준 공지, 휴직 기간 평가 처리 방식 자료. 메신저·이메일 보존.</li>\n<li><strong>2단계 — 사내 시정 요청</strong> (선택) — 인사팀에 서면 정정 요청. 회신 거부 또는 14일 경과 시 다음 단계로.</li>\n<li><strong>3단계 — 노동청 진정 또는 노동위 시정 신청</strong> (90일 이내 권장) — 남녀고용평등법 위반 진정 또는 노동위 차별 시정 신청. 처리기간 25일~수개월.</li>\n<li><strong>4단계 — 민사 임금·손해배상 청구</strong> (병행 가능) — 본 차액 + 위자료. 3,000만 원 이하면 소액심판 → 통상 2~3개월. 통상임금성 다툼 병합 시 차액 확장.</li>\n<li><strong>5단계 — 형사 절차 (선택)</strong> — 회사 대표·인사책임자에 대한 형사 송치. 합의·자진 시정 압박 효과.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 주의: 차별 시정 신청은 처분·차별 발생일로부터 6개월 이내 권장. 시기를 놓치면 시정 신청은 어렵고 민사·형사로만 다투게 됩니다.</blockquote>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>근로계약서·취업규칙·인사평가 운영규정</li>\n<li>출산휴가·육아휴직 신청서·승인 자료</li>\n<li>휴직 전·후 인사평가 결과·보너스 명세서</li>\n<li>동료 직원 비교 자료 (직급·근속·평가)</li>\n<li>휴직 기간 평가 처리 방식 자료 (회사 안내)</li>\n<li>회사의 차별성 발언·이메일·메신저</li>\n<li>남녀고용평등법 진정서 양식 (노동청)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 인센티브의 임금성과 차별 다툼 기반',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 회사가 사전 산정 기준에 따라 정기·일률·고정성 있게 지급하는 \'목표 인센티브\'는 평균임금 산정 기초 임금에 해당한다고 판시했습니다.',
        takeaway:
          '복직자 보너스가 임금성으로 평가되면 사후 일방 차별·감액은 단순 재량으로 정당화되지 않을 가능성이 있고, 차별 시정·차액 청구의 법적 근거가 강화될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '회사가 "평가가 낮아서 보너스가 줄었다"고 합니다',
        answer:
          '<strong>그 평가 자체가 휴직을 이유로 한 차별의 결과라면 표면적 사유로 정당화되지 않을 수 있습니다.</strong> 평가 산식·기간·동료 비교 자료를 정리해 다툴 여지가 있어요.',
      },
      {
        question: '복귀 후 짧게 일했는데 보너스 산정에서 빠졌어요',
        answer:
          '<strong>합리적 이유 없이 휴직자에게만 추가 요건을 부과한 것이라면 차별로 다툴 여지가 있습니다.</strong> 동일 직급·업무 동료와의 비교 자료가 있으면 청구 가능성이 높아져요.',
      },
      {
        question: '인사팀이 "관례"라며 정정을 거부합니다',
        answer:
          '<strong>관례라도 강행법규(남녀고용평등법·근로기준법) 위반이면 효력이 부정될 수 있습니다.</strong> 노동청 진정·노동위 시정 신청으로 객관적 판단을 받을 수 있어요.',
      },
      {
        question: '인사평가까지 다툴 수 있나요?',
        answer:
          '<strong>차별의 결과로 평가 등급이 부당하게 산정되었다면 평가 자체를 다툴 여지가 있습니다.</strong> 정정 후 차액·승진 누락 손해까지 확장 청구 가능한 사례가 있어요.',
      },
      {
        question: '회사가 보복인사로 부서 이동시키면요?',
        answer:
          '<strong>육아휴직·진정을 이유로 한 불이익 처우는 남녀고용평등법 제19조·제37조 위반으로 별도 형사·민사 책임을 물을 수 있습니다.</strong> 부당전보 구제 신청도 노동위에서 검토 가능해요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '상여금 지급조건 일방 변경 차별', href: '/guide/wage/wage-bonus-condition-changed-discrimination' },
      { label: '인센티브 사후 취소 차액 청구', href: '/guide/wage/wage-incentive-revocation-after-meeting-target' },
      { label: '임금체불 진정 전 체크리스트', href: '/guide/wage/wage-payslip-incomplete-violation' },
      { label: '임금 지연이자 연 20% 청구', href: '/guide/wage/wage-late-payment-interest-claim' },
      { label: '보상휴가제 위장 연장수당 청구', href: '/guide/wage/wage-comp-time-substitute-overtime-illegal' },
    ],
  },

  // ─── 4. unemployment / foreign-employer-quit-eligibility ───
  {
    domain: 'unemployment',
    slug: 'unemployment-foreign-employer-quit-eligibility',
    keyword: '외국법인 한국지사 퇴사 실업급여',
    questionKeyword: '외국계 회사·외국법인 한국지사 퇴사도 실업급여 받을 수 있나요?',
    ctaKeyword: '외국법인 한국지사 퇴사 실업급여 가능성 확인',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '외국법인 한국지사 퇴사 실업급여 — 가입 확인 4가지 | 로앤가이드',
      description:
        '외국법인 한국지사·연락사무소 퇴사도 사업자등록·고용보험 가입 시 실업급여 수급이 가능합니다. 가입 확인과 신청 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"외국계 회사 한국지사에서 일하다 퇴사했는데 회사가 \'우리는 외국 본사 소속\'이라며 고용보험 가입을 안 했다고 합니다. 실업급여 받을 수 있을까요?" 외국법인이라도 한국에 사업자등록·고정사업장이 있으면 고용보험 가입 의무가 있고, 가입 누락이라도 사후 피보험자격 확인청구로 수급권을 회복할 가능성이 있습니다(대법원 2018두63235 사건 취지). 이직 후 14일 내 신청을 권장하되, 미가입 다툼은 시간이 더 걸릴 수 있어 자료 보존이 핵심입니다.</p>',
    sections: [
      {
        title: 'Q. 외국법인 한국지사 — 고용보험 가입 의무 여부',
        content:
          '<p><strong style="color:#1e3a5f">A. 다음 4가지 형태별로 가입 의무가 다릅니다.</strong></p>\n<ul>\n<li><strong>① 한국 자회사·법인</strong> — 한국에서 별도 법인 등록한 외국계 자회사는 일반 한국 회사와 동일한 가입 의무. 거의 100% 가입 대상.</li>\n<li><strong>② 외국법인 한국지점·지사</strong> — 외국법인이 국내에 사업자등록을 하고 사무소·지점을 운영하면 가입 의무. 외국 본사가 직접 채용했어도 한국에서 근무한다면 가입 대상에 해당할 가능성.</li>\n<li><strong>③ 외국법인 연락사무소</strong> — 영업활동을 하지 않고 정보수집·연락 기능만 하는 사무소도 사용자가 명확하면 가입 검토 대상. 사실상 영업·서비스 제공이 있다면 가입 의무 강화.</li>\n<li><strong>④ 외국 본사 직접 고용 (재택근무·파견)</strong> — 한국에 사업자등록·고정사업장이 없고 외국 본사가 직접 임금을 지급한다면 가입 의무가 약함. 다만 임의가입 가능성 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "외국 회사라서 한국 고용보험과 무관"이라는 회사 주장만으로는 부족합니다. 사업자등록 여부·국내 사업장 운영 여부·임금 지급 주체를 객관 자료로 확인하는 것이 출발점입니다.</blockquote>',
      },
      {
        title: 'Q. 회사가 가입을 누락했다면 어떻게 회복하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 피보험자격 확인청구 + 사후 가입 절차로 수급권을 회복할 가능성이 있습니다.</strong></p>\n<ul>\n<li><strong>① 피보험자격 확인청구 (근로복지공단)</strong> — 근로복지공단에 본인이 직접 확인청구 가능. 근로 사실이 입증되면 직권으로 가입 처리 + 보험료 추징 + 피보험기간 인정.</li>\n<li><strong>② 가입 의사 확인 의무 위반 다툼</strong> — 회사가 가입 의사 확인을 게을리한 경우 가입자에게 귀책사유 없이 신청 기회가 박탈된 것으로 보아 사후 가입 가능성(대법원 2018두63235 취지).</li>\n<li><strong>③ 임금명세서·계약서 등 입증</strong> — 한국에서의 근로 사실, 사용자 통제·지휘 사실, 임금 지급 사실을 객관 자료로 입증. 외국 본사 직접 입금이라도 한국 사업장 지휘를 받았다면 한국 가입 가능성.</li>\n<li><strong>④ 결정 후 수급자격 신청</strong> — 피보험기간이 인정되면 그 기간을 기준으로 실업급여 수급자격 신청 진행.</li>\n<li><strong>⑤ 거부 시 심사·재심사·행정소송</strong> — 처분일 90일 이내 심사청구 → 재심사청구(고용보험심사위원회) → 행정소송.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 외국법인 한국지사 퇴사 실업급여, AI로 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">사업자등록·근무 형태·임금 지급 주체를 입력하면 가입 의무·수급 가능성을 확인할 수 있습니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">실업급여 받을 수 있는지 AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 외국법인 한국지사 실업급여 신청 절차',
        content:
          '<p><strong style="color:#1e3a5f">근로복지공단·고용센터 절차를 참고하면 다음 흐름으로 검토할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사업자등록·가입 이력 조회</strong> (즉시) — 회사 사업자등록번호 확인 → 고용보험사이트(ei.go.kr)·근로복지공단(comwel.or.kr)에서 본인 피보험자격 조회. 누락 여부 확인.</li>\n<li><strong>2단계 — 미가입이라면 피보험자격 확인청구</strong> (즉시) — 근로복지공단 관할 지사에 확인청구서 + 근로 입증 자료 제출. 처리기간 통상 1~2개월. 직권 가입 처리 시 보험료 추징 + 피보험기간 인정.</li>\n<li><strong>3단계 — 이직사유 코드 확인</strong> (이직 시) — 회사 이직확인서가 정당이직 사유 코드(권고사직·계약만료·임금감소 등)를 정확히 기재하도록 협의. "개인사정"으로 처리되면 수급 거부 위험.</li>\n<li><strong>4단계 — 수급자격 신청</strong> (이직 후 14일 내 권장) — 거주지 관할 고용센터 방문 또는 워크넷(work.go.kr) 온라인 신청. 입증 자료 첨부.</li>\n<li><strong>5단계 — 거부 시 심사청구</strong> (처분일 90일 이내) — 불인정 시 고용보험 심사관 심사청구 → 재심사청구(고용보험심사위원회) → 행정소송.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 주의: 피보험자격 확인청구는 시간이 걸릴 수 있어 미가입이 의심되면 이직 전에 미리 진행하는 것이 안전합니다. 수급기간(이직일로부터 12개월) 안에서 결과가 나와야 실업급여 신청에 활용 가능합니다.</blockquote>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>근로계약서·연봉계약서 (한국 근무 입증)</li>\n<li>회사 사업자등록증 사본 (한국 등록 여부)</li>\n<li>최근 3년 급여명세서·통장 거래내역 (지급 주체 확인)</li>\n<li>이메일·메신저 (한국 사업장 지휘·통제 입증)</li>\n<li>이직확인서 (사유 코드 확인)</li>\n<li>고용보험 피보험자격 조회서 (근로복지공단)</li>\n<li>피보험자격 확인청구서 양식 (미가입 시)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 가입 의사 확인 의무와 신청 기회 회복',
        summary:
          '대법원 2018두63235 사건(대법원, 2022.10.27 선고)에서 법원은 소속기관의 장이 가입 의사 확인 의무를 게을리해 가입 의사를 확인하지도 않은 채 3개월이 도과하는 경우 등 가입대상자의 귀책사유 없이 신청 기회가 박탈된 경우에는 그 사유를 안 날부터 다시 3개월 내에 고용보험 가입신청을 할 수 있다고 판시했습니다.',
        takeaway:
          '회사 측 사정으로 가입이 누락된 경우라도 본인 귀책사유가 없으면 사후 가입 신청·확인청구를 통해 수급권을 회복할 가능성이 있어, 자료 보존과 빠른 절차 진행이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '한국에 사무소가 없고 본사에서 직접 입금받았어요',
        answer:
          '<strong>본사 직접 입금이라도 한국 사무소·관리자가 지휘·통제했다면 한국 가입 의무가 인정될 가능성이 있습니다.</strong> 이메일·메신저·근태 자료를 보존해 입증하세요.',
      },
      {
        question: '연락사무소(영업활동 없음)라는데 가입 안 되나요?',
        answer:
          '<strong>연락사무소라도 사실상 영업·서비스가 있다면 가입 대상이 될 수 있습니다.</strong> 명칭이 아닌 실질로 판단되며, 근로복지공단 확인청구로 다툴 여지가 있어요.',
      },
      {
        question: '회사가 가입을 거부하면 어떻게 하나요?',
        answer:
          '<strong>본인이 직접 근로복지공단에 피보험자격 확인청구를 할 수 있습니다.</strong> 회사 협조 없이도 근로 사실이 입증되면 직권 가입 처리되는 사례가 있어요.',
      },
      {
        question: '비자 문제로 한국 보험 안 들었는데 가능한가요?',
        answer:
          '<strong>외국인 근로자도 D-7·D-8·E-7 등 취업비자라면 가입 의무 대상입니다.</strong> 비자 종류를 확인하고 미가입이라면 확인청구로 회복을 검토할 수 있어요.',
      },
      {
        question: '이미 출국했는데 한국에서 청구할 수 있나요?',
        answer:
          '<strong>대리인을 통한 청구·우편 신청·재입국 후 신청 모두 가능합니다.</strong> 다만 수급기간(이직일로부터 12개월) 안에서 신청·실업인정을 받아야 하므로 시기 관리가 중요해요.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '사업장 휴업 자진퇴사 실업급여', href: '/guide/unemployment/unemployment-business-suspension-self-leave' },
      { label: '구직활동 의무 위반 부정수급 다툼', href: '/guide/unemployment/unemployment-job-search-violation-cancel' },
      { label: '실업급여 부정수급 환수·처벌', href: '/guide/unemployment/unemployment-illness-suspension' },
      { label: '실업급여 신청부터 수령까지 전체 절차', href: '/guide/unemployment/unemployment-pregnancy-job-search-activity' },
      { label: '계약직 갱신거절 자발·비자발 판단', href: '/guide/unemployment/unemployment-business-suspension-self-leave' },
    ],
  },

  // ─── 5. unemployment / startup-failed-quit-rescue ───
  {
    domain: 'unemployment',
    slug: 'unemployment-startup-failed-quit-rescue',
    keyword: '창업 실패 자영업자 실업급여',
    questionKeyword: '창업했다가 실패해서 폐업했어요. 실업급여 받을 수 있나요?',
    ctaKeyword: '창업 실패 자영업자 실업급여 가능성 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '창업 실패 자영업자 실업급여 — 폐업 사유 인정 5단계 | 로앤가이드',
      description:
        '자영업자 고용보험 가입 1년 이상 + 적자·매출 감소 폐업 시 실업급여(자영업자 구직급여) 신청이 가능합니다. 인정 요건과 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"창업 2년 만에 적자 누적으로 폐업했어요. 자영업자 실업급여라는 게 있다는데 받을 수 있을까요?" 자영업자 고용보험에 1년 이상 가입한 후 적자 지속·매출 급감·폐업 등 비자발적 폐업 사유가 인정되면 자영업자 구직급여 수급이 가능합니다(고용보험법 제69조의2~7). 폐업증명·매출 감소 자료를 객관적으로 입증하는 것이 핵심이며, 1인 자영업자·5인 미만 사업장도 자영업자 임의가입자라면 동일 절차로 신청할 수 있습니다.</p>',
    sections: [
      {
        title: '자영업자 구직급여 — 수급자격 4가지 요건',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 제69조의3에 따라 다음 요건을 모두 충족해야 합니다.</strong></p>\n<ul>\n<li><strong>① 자영업자 고용보험 가입</strong> — 폐업일 이전 24개월간 자영업자 고용보험 가입기간이 1년 이상. 임의가입자(50인 미만 사업주)에 한해 가입 가능.</li>\n<li><strong>② 비자발적 폐업 사유</strong> — 적자 지속·매출 급감·자연재해·질병·구속·도산 등 본인 의사와 무관한 사유. 단순 사업 변경·이직 목적 폐업은 인정 어려움.</li>\n<li><strong>③ 폐업 신고 + 사실 입증</strong> — 사업자등록 폐업 + 매출·세무·금융 자료로 사업 영위 곤란 사실 입증. 폐업 신고 누락 시에도 사업 영위 종료 사실이 인정되면 구제 가능성.</li>\n<li><strong>④ 재취업 의사·노력</strong> — 적극적 구직활동 + 근로 의사. 일반 실업급여와 동일한 실업인정 절차 적용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "1년 이상 가입"은 절대 요건. 창업 직후 가입 누락이 흔하므로 가입 시기를 빨리 확인하고 부족하면 추후 추가 가입을 검토하는 것이 실업급여 가능성을 높이는 길입니다.</blockquote>',
      },
      {
        title: '폐업 사유 인정 — 객관 입증이 핵심인 4가지 사례',
        content:
          '<p><strong style="color:#1e3a5f">고용보험심사위원회 재결례에서 인정·불인정된 사례 패턴은 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>① 적자 지속 + 매출 감소 입증</strong> — 부가세 신고서·종합소득세 신고서·통장 거래내역으로 매출액 추이를 객관 정리. 매출이 인정 어려운 경우라도 사업 활동 노력 자료 + 가입 유지 성실성으로 인정될 가능성(고용보험심사위원회 2022재결 제165호 취지).</li>\n<li><strong>② 5년 이상 가입 + 폐업</strong> — 장기간 성실 납부 + 더는 운영 어렵다고 판단한 폐업이라면 인정 가능성 강화. 단기 가입 후 폐업은 "수급 목적" 의심 받을 수 있음.</li>\n<li><strong>③ 폐업 신고 누락 정당 사유</strong> — 사업자등록 폐업 신고를 못한 정당한 사유(질병·구속·해외출국 등)가 인정되면 사실상 폐업 상태로 보고 수급 가능성(고용보험심사위원회 2021재결 제143호 취지).</li>\n<li><strong>④ 단순 업종 변경·이직 목적</strong> — 다른 사업 시작·취업 위해 폐업한 경우는 인정 어려움. "비자발성"이 핵심.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 매출이 사실상 없어도 사업 영위 노력(공모전·작품 제출·영업활동)이 객관 자료로 입증되면 인정 가능성이 있어요. 적극 활동 자료 보존이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 자영업자 구직급여 신청 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용센터 자영업자 구직급여 안내를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가입 이력·기간 조회</strong> (폐업 전) — 근로복지공단(comwel.or.kr) 또는 고용보험사이트(ei.go.kr)에서 본인 자영업자 피보험기간 조회. 1년 미달이면 추가 납부 검토.</li>\n<li><strong>2단계 — 폐업 자료 정리</strong> (폐업 시) — 사업자등록 폐업 신고 + 매출·세무 자료(부가세·소득세 신고서, 통장 거래내역) + 폐업 사유 입증 자료 정리.</li>\n<li><strong>3단계 — 수급자격 신청</strong> (폐업 후 14일 내 권장) — 거주지 관할 고용센터 방문 신청. 자영업자 구직급여 신청서 + 폐업증명원 + 매출 자료 + 사유 입증 자료.</li>\n<li><strong>4단계 — 수급자격 심사</strong> (신청 후 약 2~4주) — 고용센터가 폐업 사유 비자발성·매출 감소 등 객관성 검토. 추가 자료 요청 시 기한 내 제출.</li>\n<li><strong>5단계 — 거부 시 심사청구</strong> (처분일 90일 이내) — 불인정 시 고용보험심사관 심사청구 → 재심사청구(고용보험심사위원회) → 행정소송.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 창업 실패 자영업자 실업급여, AI로 가능성을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">가입기간·매출 추이·폐업 사유를 입력하면 자영업자 구직급여 수급 가능성을 확인할 수 있습니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">실업급여 신청 순서, AI로 먼저 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>사업자등록증 (개업·폐업 일자 명시)</li>\n<li>폐업증명원 (관할 세무서 발급)</li>\n<li>최근 2~3년 부가가치세·종합소득세 신고서</li>\n<li>통장 거래내역 (매출 추이 입증)</li>\n<li>자영업자 고용보험 가입증명서·납부확인서 (근로복지공단)</li>\n<li>폐업 사유 입증 자료 (질병진단서·구속영장·재해증명 등)</li>\n<li>사업 영위 노력 자료 (계약서·견적서·영업활동 기록)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 자영업자 폐업 매출 부재와 수급자격',
        summary:
          '고용보험심사위원회 2022재결 제165호(고용보험심사위원회, 2023.01.04 재결)에서 위원회는 매출 부재에도 불구하고 작가로서 매출을 일으키기 위한 활동을 상당기간 지속하고 매출이 없는 상태에서도 고용보험료를 약 10년간 성실 납부한 점 등을 인정해 자영업자 수급자격을 인정하는 결정을 내렸습니다.',
        takeaway:
          '매출이 사실상 없는 상황이라도 사업 영위 노력 + 장기간 성실 가입을 객관 자료로 입증하면 자영업자 구직급여 수급자격이 인정될 여지가 있어, 활동 자료 보존이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '자영업자 고용보험은 어떻게 가입하나요?',
        answer:
          '<strong>50인 미만 자영업자가 본인 의사로 임의가입할 수 있습니다.</strong> 근로복지공단에 신청하면 가입되며, 보험료는 본인 부담. 1년 이상 유지해야 수급자격이 생겨요.',
      },
      {
        question: '5년 가입 후 폐업했는데 매출이 너무 적었어요',
        answer:
          '<strong>매출 부재 + 사업 영위 노력 입증으로 인정된 사례가 있습니다(고용보험심사위 2022재결 제165호).</strong> 활동 기록·납부 성실성을 자료로 정리하면 다툴 여지가 있어요.',
      },
      {
        question: '폐업 신고를 못 했는데도 가능한가요?',
        answer:
          '<strong>폐업 신고가 누락되었어도 정당한 사유가 있다면 사실상 폐업 상태로 인정될 수 있습니다(2021재결 제143호).</strong> 누락 사유를 객관 자료로 입증하세요.',
      },
      {
        question: '소득이 일정 이상 발생하면 거부되나요?',
        answer:
          '<strong>이자·배당·부동산 임대 등 사업소득 외 소득은 별도 기준에 따라 판단됩니다.</strong> 수급 중 발생한 소득은 즉시 신고해야 부정수급 처분을 피할 수 있어요.',
      },
      {
        question: '근로자 + 자영업자 둘 다였는데 어느 쪽으로 신청하나요?',
        answer:
          '<strong>두 가지 가입 모두 1년 이상이라면 자영업자 구직급여로 신청하는 것이 일반적입니다.</strong> 단, 직전 가입 형태·소득이 어느 쪽이 컸는지에 따라 유리한 쪽을 선택할 수 있어요.',
      },
    ],
    cta: { text: '실업급여 신청 순서, AI로 먼저 정리하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '외국법인 한국지사 퇴사 실업급여', href: '/guide/unemployment/unemployment-foreign-employer-quit-eligibility' },
      { label: '사업장 휴업 자진퇴사 실업급여', href: '/guide/unemployment/unemployment-business-suspension-self-leave' },
      { label: '구직활동 의무 위반 부정수급 다툼', href: '/guide/unemployment/unemployment-job-search-violation-cancel' },
      { label: '실업급여 신청부터 수령까지 전체 절차', href: '/guide/unemployment/unemployment-illness-suspension' },
      { label: '계약직 갱신거절 자발·비자발 판단', href: '/guide/unemployment/unemployment-pregnancy-job-search-activity' },
    ],
  },

  // ─── 6. retirement / mid-settlement-redo-conditions ───
  {
    domain: 'retirement',
    slug: 'retirement-mid-settlement-redo-conditions',
    keyword: '중간정산 무효 재산정',
    questionKeyword: '중간정산 받았는데 산정이 잘못된 것 같아요. 다시 받을 수 있나요?',
    ctaKeyword: '중간정산 무효·재산정 차액 청구 가능성 확인',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '중간정산 무효·재산정 — 무효 사유 4가지와 차액 청구 | 로앤가이드',
      description:
        '중간정산이 법정 사유 미충족·평균임금 누락이라면 무효를 다툴 여지가 있고 차액·합산 청구가 가능합니다. 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"3년 전 중간정산을 받았는데 그때 회사가 상여금을 빼고 계산해서 200만 원 적게 받은 것 같아요. 다시 받을 수 있나요?" 중간정산은 근로자퇴직급여 보장법 제8조 제2항이 정한 법정 사유(주택구입·전세보증금·6개월 이상 요양 등)에 한해 가능하며, 사유 부재나 산정 누락이면 무효를 다툴 여지가 있습니다(대법원 일관 입장). 무효가 인정되면 그 기간을 합산한 새 산정으로 차액 청구 가능. 시효 3년 안에서 적극 검토할 가치가 큽니다.</p>',
    sections: [
      {
        title: 'Q. 중간정산이 무효로 다투어질 수 있는 4가지 사정',
        content:
          '<p><strong style="color:#1e3a5f">A. 다음 사정이 있으면 중간정산 자체를 무효로 다툴 여지가 있습니다.</strong></p>\n<ul>\n<li><strong>① 법정 사유 미충족</strong> — 근로자퇴직급여 보장법 제8조 제2항·시행령 제3조의 사유(주택구입·전세보증금·요양 6개월 이상·파산·개인회생·천재지변)에 해당하지 않는데 중간정산을 받은 경우. 회사 사정·일방 통보 정산은 무효 다툴 여지.</li>\n<li><strong>② 근로자 동의 흠</strong> — 강압·기만·충분한 정보 제공 부재로 받은 동의. 의사의 흠을 이유로 무효 주장 가능.</li>\n<li><strong>③ 평균임금 산정 오류</strong> — 정기 상여금·수당·연차수당이 평균임금에 포함되어야 함에도 누락된 경우. 산정 오류 자체로 차액 청구 + 합산 다툼 가능.</li>\n<li><strong>④ 형식적 사직·재입사</strong> — 근로 단절 없이 같은 업무를 계속하면서 형식만 사직·재입사 처리한 경우. 비진의 의사표시로 무효 주장 가능(근로기준법 제2조 계속근로기간 통산).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 중간정산이 무효로 인정되면 그 기간이 통산되어 새 평균임금·근속연수로 재산정 → 차액 청구 가능. 단순 산정 오류만이라면 차액만 청구 가능.</blockquote>',
      },
      {
        title: 'Q. 무효 + 재산정 어떻게 청구하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 다음 단계로 차액·합산 청구를 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 중간정산 사유·근거 확인</strong> — 회사가 어떤 법정 사유로 중간정산을 처리했는지, 본인 신청서·증빙 자료가 사유에 부합했는지 검토.</li>\n<li><strong>② 평균임금 재산정</strong> — 중간정산 시점의 직전 3개월 임금 + 정기 상여금·수당·연차수당 안분(3/12) 포함해 다시 계산. 회사 산정과 비교.</li>\n<li><strong>③ 차액 산출</strong> — 정확한 평균임금 × 30 × 근속연수 = 정당한 중간정산액. 정당액 − 실수령액 = 차액. 시효 3년 안에서 청구.</li>\n<li><strong>④ 무효 + 합산 청구 (강한 사정 시)</strong> — 법정 사유 부재·동의 흠이 있다면 중간정산 자체를 무효로 보고 그 기간을 합산해 최종 퇴직금 재산정 → 합산 차액 청구.</li>\n<li><strong>⑤ 노동청·민사 절차</strong> — 노동청 진정(3년 이내) → 시정지시 → 민사 청구. 본 차액 + 연 20% 지연이자(근로자퇴직급여 보장법 제9조) 합산.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 중간정산 무효·재산정, AI로 차액을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">중간정산 사유·평균임금 자료·합산 가능성을 입력하면 차액 청구 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">퇴직금 계산과 청구 절차, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 중간정산 차액 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 중간정산 자료 정리</strong> (즉시) — 중간정산 신청서·승인 문서·지급명세서·당시 평균임금 산정 근거 자료. 사유 입증 자료(주택구입 계약서·요양 진단서 등)도 확보.</li>\n<li><strong>2단계 — 평균임금 재산정</strong> (즉시) — 중간정산 직전 3개월 급여명세서 + 정기 상여금 + 연차수당 안분 포함. 회사 산정과 차이 정리.</li>\n<li><strong>3단계 — 회사 정정 요청</strong> (선택) — 인사팀에 서면 정정 요청. 14일 경과 시 다음 단계로.</li>\n<li><strong>4단계 — 노동청 진정</strong> (3년 이내) — 노동포털(labor.moel.go.kr) 또는 관할 지방고용노동지청. 처리기간 25일. 시정지시 미이행 시 형사 송치(3년 이하 징역 또는 3,000만 원 이하 벌금).</li>\n<li><strong>5단계 — 민사 청구 + 무효 주장</strong> (필요 시) — 본 차액 + 연 20% 지연이자(근로자퇴직급여 보장법 제9조) 합산. 무효 인정 시 합산 산정 청구. 3,000만 원 이하면 소액심판으로 빠른 판결.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 주의: 시효 3년이 지나면 권리행사 어려움. 다만 회사가 "곧 정산해줄게"로 신뢰를 줬다면 권리남용 항변으로 시효 다툴 여지가 있어요(대법원 2024다294705 취지).</blockquote>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>중간정산 신청서·승인 문서·지급명세서</li>\n<li>중간정산 사유 입증 자료 (주택계약서·진단서·회생결정문 등)</li>\n<li>중간정산 직전 3개월 급여명세서</li>\n<li>정기 상여금·인센티브 지급 내역</li>\n<li>연차사용·미사용 연차수당 자료</li>\n<li>최종 퇴직금 지급명세서 (퇴사한 경우)</li>\n<li>회사 답변서·정정 거부 통보 (있다면)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 시효 항변과 권리남용',
        summary:
          '대법원 2024다294705 사건(대법원, 2025.05.29 선고)에서 법원은 채무자의 소멸시효 항변권 행사도 신의성실 원칙과 권리남용금지 원칙의 지배를 받아, 시효 완성 전에 권리행사를 곤란하게 하였거나 시효 완성 후에 시효를 원용하지 않을 것 같은 태도를 보여 신뢰하게 한 경우 등에는 소멸시효 항변이 권리남용으로 허용될 수 없다고 판시했습니다.',
        takeaway:
          '회사가 중간정산 차액을 "곧 정산해줄게"로 안심시킨 정황이 있다면 시효 항변을 권리남용으로 다툴 여지가 있어, 시효 3년 도과분도 다툼 가능성이 열립니다.',
      },
    ],
    faq: [
      {
        question: '중간정산 받은 지 5년이 지났는데 다툴 수 있나요?',
        answer:
          '<strong>임금채권 시효는 3년이지만 권리남용 항변(대법원 2024다294705 취지)으로 다툴 여지가 있습니다.</strong> 회사가 정산해주겠다고 안심시킨 정황이 있다면 시효 다툼 가능성이 열려요.',
      },
      {
        question: '회사가 "법정 사유 맞다"며 정정을 거부합니다',
        answer:
          '<strong>사유 입증 자료가 부족하거나 형식만 갖춘 정산이라면 무효 다툴 여지가 있습니다.</strong> 노동청 진정·민사 청구로 객관 판단을 받을 수 있어요.',
      },
      {
        question: '동의서에 사인했는데도 무효 주장 되나요?',
        answer:
          '<strong>강압·기만·정보 부재로 받은 동의는 의사의 흠으로 무효 주장 가능합니다.</strong> 동의 당시 상황·자료를 정리해 다툴 여지가 있어요.',
      },
      {
        question: '평균임금에서 빠진 항목 어떻게 입증하나요?',
        answer:
          '<strong>3년치 급여명세서·운영규정·지급 내역으로 정기성·일률성을 입증하면 됩니다.</strong> 상여금·수당·연차수당을 표로 정리해 차액을 산출하세요.',
      },
      {
        question: '재산정으로 받은 돈이 세금 측면에서 불리한가요?',
        answer:
          '<strong>퇴직소득세 정산 + 경정청구로 환급 가능한 부분이 있을 수 있습니다.</strong> 5년 이내 홈택스·세무서에 경정청구 신청하면 환급 절차를 진행할 수 있어요.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: 'IRP 의무이전 절세 가능성', href: '/guide/retirement/retirement-irp-mandatory-rollover-tax' },
      { label: '5년차 퇴직금 차액 청구', href: '/guide/retirement/retirement-five-year-service-claim-method' },
      { label: 'IRP 이전·세제 혜택 요건', href: '/guide/retirement/retirement-irp-transfer-requirement' },
      { label: '퇴직소득세 근속연수공제 환급', href: '/guide/retirement/retirement-tax-tenure-deduction-refund' },
      { label: '퇴직금 세제 산정 방식', href: '/guide/retirement/retirement-severance-tax-calculation' },
    ],
  },

  // ─── 7. retirement / startup-equity-included-formula ───
  {
    domain: 'retirement',
    slug: 'retirement-startup-equity-included-formula',
    keyword: '스톡옵션 RSU 평균임금 퇴직금',
    questionKeyword: '스타트업에서 받은 스톡옵션·RSU도 퇴직금에 포함되나요?',
    ctaKeyword: '스톡옵션·RSU 평균임금 산입 차액 청구 가능성 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '스톡옵션·RSU 퇴직금 산정 — 평균임금 포함 4가지 기준 | 로앤가이드',
      description:
        '스톡옵션·RSU 행사 이익이 정기·일률·근로 대가성 요건을 갖추면 평균임금에 포함될 수 있습니다. 퇴직금 차액 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"스타트업에서 5년 일하고 RSU·스톡옵션도 받았는데 퇴직금 산정에서 빠졌어요. 포함 청구할 수 있나요?" 스톡옵션·RSU 행사 이익이 정기·일률·고정성 + 근로 대가성을 갖추면 평균임금 산정의 기초가 되는 임금에 해당할 가능성이 있고(대법원 2021다248299 취지), 그렇다면 평균임금이 올라가 퇴직금 차액 청구가 가능합니다. 다만 1회성 보상·경영성과 분배 성격이 강하면 임금성이 부정될 수 있어 사안별 판단이 핵심입니다.</p>',
    sections: [
      {
        title: '스톡옵션·RSU — 평균임금에 포함될 수 있는 4가지 기준',
        content:
          '<p><strong style="color:#1e3a5f">대법원 임금성 판단 기준(2021다248299 취지)을 적용하면 다음 사정이 있으면 임금성 인정 가능성이 강화됩니다.</strong></p>\n<ul>\n<li><strong>① 정기·일률 부여</strong> — 매년·매분기 정기적으로 같은 기준으로 부여된 경우. 입사·승진·근속 연차에 따라 일률 부여 규정이 있다면 정기성 강화.</li>\n<li><strong>② 사전 산정 기준 확정</strong> — 직급·근속·평가 등급에 따른 부여 수량이 운영규정·계약서에 사전 명시된 경우. 노동관행 + 규범적 사실로 인정 여지.</li>\n<li><strong>③ 근로 대가성</strong> — 회사 주가·당기순이익 같은 경영지표에 좌우되기보다 근로 제공·근속·평가 등급에 직접 비례하면 근로 대가로 평가 가능.</li>\n<li><strong>④ 행사 이익의 확정성</strong> — 베스팅 완료 + 행사 가능 상태가 확정되면 그 이익이 평균임금 산정 시점에 귀속될 수 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사안별 판단이라 일률적 답은 없지만, 사전 부여 규정 + 정기 부여 관행 + 근속 연동이 강할수록 임금성 인정 가능성이 높아집니다. 스타트업 RSU·스톡옵션 운영규정·베스팅 일정을 자료로 정리하는 것이 출발점.</blockquote>',
      },
      {
        title: '임금성이 부정될 수 있는 사정 — 일회성·경영성과 종속',
        content:
          '<p><strong style="color:#1e3a5f">반대로 다음 사정이 강하면 임금성이 부정되어 평균임금 산입이 어려울 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 1회성·우발적 부여</strong> — 입사 시 또는 특정 사건(IPO·M&A) 발생 시에만 부여된 경우. 정기성·계속성 부재로 임금성 부정 가능.</li>\n<li><strong>② 경영성과·주가에 종속</strong> — 행사 이익이 회사 주가 변동·EVA 같은 경영지표에 결정적으로 좌우되면 경영성과 분배 성격으로 평가될 수 있음(대법원 2022다255454 취지).</li>\n<li><strong>③ 회사 재량 규정</strong> — 운영규정에 회사가 부여 여부·수량을 일방 결정한다고 명시된 경우.</li>\n<li><strong>④ 근로 대가성 미흡</strong> — 근속·평가와 무관하게 임원 위촉계약·자문 형태로 부여된 경우.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인의 RSU·스톡옵션이 위 두 표(임금성 인정 vs 부정) 중 어느 쪽이 우세한지 자료를 모아 정리하면 청구 가능성 판단이 명확해집니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 스톡옵션·RSU 퇴직금 차액 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 + 민사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 운영규정·부여 자료 보존</strong> (즉시) — 스톡옵션·RSU 운영규정·이사회 결의서·부여 통보 메일·베스팅 일정·행사 내역. 회사 임금성 부정 주장에 대비.</li>\n<li><strong>2단계 — 평균임금 재산정 시도</strong> (즉시) — 행사 이익을 임금에 포함해 평균임금 다시 계산. 안분 방식(연 단위 → 12월 분할)도 검토.</li>\n<li><strong>3단계 — 차액 산출</strong> (즉시) — 재산정 평균임금 × 30 × 근속연수 = 정당 퇴직금. 정당액 − 회사 지급액 = 차액. 시효 3년 안에서 청구.</li>\n<li><strong>4단계 — 회사 정정 요청 + 노동청 진정</strong> (3년 이내) — 인사팀에 서면 정정 요청 → 14일 경과 시 노동청 진정. 처리기간 25일. 시정지시 미이행 시 형사 송치.</li>\n<li><strong>5단계 — 민사 청구 (필요 시)</strong> — 본 차액 + 연 20% 지연이자(근로자퇴직급여 보장법 제9조) + 임금성 다툼 병합. 사안 복잡성 고려해 변호사·노무사 자문 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 스톡옵션·RSU 퇴직금, AI로 차액을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">부여 규정·행사 이익·근속 자료를 입력하면 평균임금 산입과 차액 청구 가능성을 확인할 수 있습니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">퇴직금 계산과 청구 절차, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>근로계약서·연봉계약서·임원위촉계약서</li>\n<li>스톡옵션·RSU 운영규정·이사회 결의서</li>\n<li>부여 통보 메일·계약서·베스팅 일정표</li>\n<li>행사 신청·승인 자료·차익실현 명세</li>\n<li>최근 3년 급여명세서 + 행사 이익 명세</li>\n<li>퇴직금 지급명세서·산정 자료</li>\n<li>경영성과·주가 자료 (임금성 부정 항변 대비)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 목표 인센티브의 임금성과 평균임금 산입',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 회사가 사전 산정 기준에 따라 정기·일률·고정성 있게 지급하는 \'목표 인센티브\'는 계속적·정기적으로 지급되고 회사에 지급의무가 지워져 있으며 근로제공과 직접적·밀접하게 관련되어 평균임금 산정의 기초가 되는 임금에 해당한다고 판시했습니다.',
        takeaway:
          '스톡옵션·RSU도 사전 부여 규정 + 정기·일률 부여 + 근로 대가성을 갖추면 임금성으로 평가될 가능성이 있어, 평균임금 재산정 + 퇴직금 차액 청구를 검토할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '회사가 "스톡옵션은 임금이 아니다"라고 단정합니다',
        answer:
          '<strong>임금성은 명칭이 아닌 실질로 판단됩니다.</strong> 사전 부여 규정·정기성·근로 대가성을 자료로 입증하면 다툴 여지가 있어요(대법원 2021다248299 취지).',
      },
      {
        question: 'IPO 직전 단발성으로 받은 RSU도 포함되나요?',
        answer:
          '<strong>1회성·우발적 부여는 정기성 부재로 임금성 부정될 가능성이 큽니다.</strong> 다만 사전 부여 규정에 따른 정기 부여라면 다툴 여지가 있어요.',
      },
      {
        question: '베스팅 전이라 행사 못한 RSU는 어떻게 되나요?',
        answer:
          '<strong>베스팅 미완성분은 평균임금에 포함되기 어렵습니다.</strong> 행사·차익 확정된 부분 위주로 산입을 다투는 것이 일반적이에요.',
      },
      {
        question: '주가 변동으로 차익이 컸을 때만 산입되나요?',
        answer:
          '<strong>주가 변동 종속성이 강하면 경영성과 분배 성격으로 임금성이 부정될 수 있습니다(대법원 2022다255454 취지).</strong> 사안별 판단이 필요해요.',
      },
      {
        question: '차액이 큰데 노동청보다 민사가 빠른가요?',
        answer:
          '<strong>임금성 다툼은 사안 복잡성이 커서 노동청 시정지시가 어려운 경우가 많아 민사 청구가 결정적이 될 수 있습니다.</strong> 변호사·노무사 자문을 받아 진행하는 것이 일반적이에요.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '5년차 퇴직금 차액 청구', href: '/guide/retirement/retirement-five-year-service-claim-method' },
      { label: '중간정산 무효·재산정 청구', href: '/guide/retirement/retirement-mid-settlement-redo-conditions' },
      { label: 'IRP 의무이전 절세 가능성', href: '/guide/retirement/retirement-irp-mandatory-rollover-tax' },
      { label: 'IRP 이전·세제 혜택 요건', href: '/guide/retirement/retirement-irp-transfer-requirement' },
      { label: '퇴직소득세 근속연수공제 환급', href: '/guide/retirement/retirement-tax-tenure-deduction-refund' },
    ],
  },
];
