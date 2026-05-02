import { SpokePage } from '../spoke-pages';

// batch52 wage+unemp+retire 7개
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 명절상여(설·추석)가 정기 지급돼 왔는데 회사가 본인에게만 누락·축소했음을 발견한 근로자가 명절상여의 임금성·평균임금성 판단 기준과 차액 청구 절차를 정리하도록 돕는 페이지다.
// 2. 이 페이지는 오랫동안 일률 지급되던 출장 일비·실비 항목이 갑자기 중단·삭감된 근로자가 일비의 임금성 판단 기준과 통상임금 산입 가능성을 점검해 차액 청구를 검토하도록 돕는 페이지다.
// 3. 이 페이지는 물류·창고·콜센터 등 야간 위주 시프트에서 포괄임금으로 야간·연장수당이 가려진 근로자가 시간 산정 가능성·최저임금 미달 다툼으로 가산수당 차액 청구를 검토하도록 돕는 페이지다.
// 4. 이 페이지는 사실혼·동거인 등 법률혼이 아닌 가족 사유로 거주지 이전했지만 자진퇴사로 처리돼 실업급여를 거절당한 근로자가 정당이직 사유 확장 해석과 심사청구 트랙을 검토하도록 돕는 페이지다.
// 5. 이 페이지는 회사 위법행위(공익 사안)를 신고한 뒤 자발적으로 이직했으나 자진퇴사로 처리돼 실업급여 거절을 받은 근로자가 정당이직 사유 인정 가능성과 재결례 트랙을 정리하도록 돕는 페이지다.
// 6. 이 페이지는 등기임원·사내이사 직함이지만 실제로는 사용자 지휘를 받는 종속적 근로자에 해당해 퇴직금 청구를 다투려는 사람이 근로자성 판단 기준과 임원·근로자 분리 산정 트랙을 정리하도록 돕는 페이지다.
// 7. 이 페이지는 위탁계약·팀장·팀원 등 형식상 비근로자 분류로 처리된 작업자(공장·전문직·서비스직)가 종속적 근로 실질 입증으로 퇴직금 차액 청구 가능성을 검토하도록 돕는 페이지다.

export const spokesBatch52WageUnempRetire: SpokePage[] = [
  // ─── 1. wage / wage-holiday-bonus-skipped-discrimination ───
  {
    domain: 'wage',
    slug: 'wage-holiday-bonus-skipped-discrimination',
    keyword: '명절상여 누락 차별',
    questionKeyword: '설·추석 명절상여를 동료는 다 받았는데 저만 빠졌어요. 청구할 수 있나요?',
    ctaKeyword: '명절상여 누락 차액 청구 가능성 확인',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '명절상여 누락·차별 — 임금성 청구 4단계 절차 | 로앤가이드',
      description:
        '설·추석 명절상여가 정기 지급돼 왔는데 본인에게만 누락·축소됐다면 임금성 판단 + 차액 청구가 가능합니다. 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"매년 설·추석마다 명절상여가 나왔는데 이번에 저만 누락됐어요. 동료들은 다 받았는데 차액 청구할 수 있나요?" 명절상여가 단체협약·취업규칙·운영규정·관행으로 정기·일률 지급돼 왔다면 근로 대가성을 갖춘 임금에 해당해 본인 누락·차별 지급은 무효를 다툴 여지가 있습니다(대법원 임금성 판단 기준 일관 입장). 시효 3년 안에서 차액 청구 + 차별 시정 신청을 검토할 가치가 큽니다.</p>',
    sections: [
      {
        title: '명절상여 임금성 — 청구 가능성이 강한 4가지 사정',
        content:
          '<p><strong style="color:#1e3a5f">명절상여가 임금에 해당하면 본인만 누락·축소는 단순 회사 재량으로 정당화되기 어렵습니다.</strong></p>\n<ul>\n<li><strong>① 정기·일률 지급 관행</strong> — 매 설·추석마다 같은 기준으로 지급돼 왔다면 노동관행으로 임금성 인정 여지. 통상 3년 이상 반복 지급이 강한 정황입니다.</li>\n<li><strong>② 단체협약·취업규칙·운영규정 명시</strong> — "설·추석 상여 ○○만 원 또는 통상임금 ○○%" 등 사전 산정 기준이 문서화돼 있으면 임금성 + 신뢰 보호 강화.</li>\n<li><strong>③ 동일 직급·근속자 동일 지급</strong> — 같은 직급·근속자에게 일률 지급되어 왔다면 본인 누락은 차별 정황. 합리적 이유 없는 차별은 근로기준법 제6조 균등처우 위반.</li>\n<li><strong>④ 근로 대가성</strong> — 회사 당기순이익 변동과 무관하게 근속·재직 사실에 비례해 지급된 정황이면 근로 대가성 강화.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "명절격려금"·"위로금" 명칭이라도 사전 산정 + 정기 + 일률 지급되어 왔다면 임금에 해당할 가능성이 높습니다. 명칭이 아닌 실질로 판단됩니다.</blockquote>',
      },
      {
        title: '경영성과·일회성 vs 임금 — 임금성 부정될 수 있는 사정',
        content:
          '<p><strong style="color:#1e3a5f">반대로 다음 사정이 강하면 임금성이 부정되어 청구가 어려울 수 있습니다.</strong></p>\n<ul>\n<li><strong>당기순이익·경영성과 종속</strong> — 회사 당기순이익·실적에 따라 지급 여부·금액이 결정되면 경영성과 분배로 평가될 가능성(대법원 2022다255454 취지).</li>\n<li><strong>일회성·우발적 지급</strong> — 특정 해에만 지급된 단발성이라면 정기성·계속성 부재로 임금성 부정.</li>\n<li><strong>지급 여부 자체 회사 재량</strong> — 운영규정에 회사가 일방 결정한다고 명시된 경우.</li>\n<li><strong>관행 미확립</strong> — 지급 횟수가 1~2회로 적어 노동관행으로 받아들여지지 않은 경우.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인의 명절상여가 위 4가지 임금성 인정 vs 부정 사정 중 어느 쪽이 우세한지 자료를 모아 정리하면 청구 가능성 판단이 명확해집니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 명절상여 차액 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 + 민사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 지급 관행·산정 기준 자료 확보</strong> (즉시) — 단체협약·취업규칙·운영규정·과거 명절상여 지급 내역(최근 3년) 정리. 동료 지급 사실 입증 자료 함께 확보.</li>\n<li><strong>2단계 — 본인 누락·차별 사실 정리</strong> (즉시) — 본인 급여명세서에서 명절상여 항목 누락 확인, 동료 지급 자료와 비교 표 작성.</li>\n<li><strong>3단계 — 회사 정정 요청</strong> (선택) — 인사팀에 서면으로 누락·차별 사유 설명 + 정정 지급 요청. 14일 이내 회신 없으면 다음 단계로.</li>\n<li><strong>4단계 — 노동청 진정</strong> (3년 이내) — 노동포털(labor.moel.go.kr) 또는 관할 지방고용노동지청. 처리기간 25일(연장 가능). 시정지시 미이행 시 형사 송치(3년 이하 징역 또는 3,000만 원 이하 벌금).</li>\n<li><strong>5단계 — 민사 임금 청구 (필요 시)</strong> — 본 차액 + 평균임금성 다툼 병합. 평균임금에 산입되면 퇴직금 영향까지 확장 청구 가능. 3,000만 원 이하면 소액심판으로 통상 2~3개월 판결.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명절상여 누락 차액, AI로 청구 가능성을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">지급 관행·동료 비교·산정 기준 자료를 입력하면 임금성 판단과 청구 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>근로계약서·단체협약·취업규칙·명절상여 운영규정</li>\n<li>최근 3년 급여명세서 (명절상여 항목 추적)</li>\n<li>회사의 명절상여 공지 메일·시상식 자료</li>\n<li>동일 직급·근속 동료 지급 자료 (차별 입증)</li>\n<li>회사의 누락·축소 사유 통보 문서·이메일</li>\n<li>본인 인사평가·근속 자료 (차별 합리적 이유 부재 입증)</li>\n<li>이직확인서·퇴직증명서 (퇴직자의 경우)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정기·일률 지급 상여금의 임금성과 퇴직금 산입',
        summary:
          '서울중앙지방법원 2019나44448 사건(서울중앙지방법원, 2021.01.14 선고)에서 법원은 회사가 채권추심인들에게 근무연수에 따라 차등하여 명절 특별수수료(20만 원~60만 원), 3년 이상 근속자에게 월 정기 수수료(10만 원)를 별도 지급한 사실을 인정한 사안에서, 정기·일률·근속 연동 지급의 임금성·퇴직금 산입 영향을 검토했습니다.',
        takeaway: '명절상여가 근속·직급에 따라 정기·일률로 지급돼 왔다면 임금에 해당할 가능성이 있어, 본인 누락·차별 지급은 차액 + 평균임금성 다툼으로 청구 검토가 가능합니다.',
      },
    ],
    faq: [
      {
        question: '회사가 "명절상여는 격려금이라 임금이 아니다"라고 합니다',
        answer:
          '<strong>명칭이 아니라 실질로 판단됩니다.</strong> 정기·일률·근속 연동 지급 관행이 입증되면 임금성 다툼이 가능해요(대법원 임금성 판단 기준 일관 입장).',
      },
      {
        question: '동일 직급 동료는 받았는데 저만 빠졌어요. 차별 청구 가능한가요?',
        answer:
          '<strong>합리적 이유 없는 차별이라면 근로기준법 제6조 균등처우 위반으로 차액 + 차별 청구 병합 주장이 가능합니다.</strong> 비교 표를 정리해 객관 입증하면 청구 강화 가능해요.',
      },
      {
        question: '취업규칙에 "회사 결정에 따른다"고 명시돼 있어요',
        answer:
          '<strong>회사 재량 명시가 있어도 사전 약속·관행이 강하면 임금성 다툴 여지가 있습니다.</strong> 과거 지급 내역·동료 처우 비교로 신뢰 보호를 다툴 수 있어요.',
      },
      {
        question: '입사 1년 미만이라 못 받았다는데 가능한가요?',
        answer:
          '<strong>근속 요건이 있다면 회사 재량 인정 폭이 넓어집니다.</strong> 다만 같은 근속 동료가 받았는데 본인만 빠졌다면 차별 영역으로 다툴 여지가 있어요.',
      },
      {
        question: '퇴직했는데 미지급분 청구 가능한가요?',
        answer:
          '<strong>시효 3년 안에서 청구 가능합니다.</strong> 명절상여가 평균임금성으로 인정되면 퇴직금까지 재산정 청구가 가능한 사례도 있어 차액 규모가 커질 수 있어요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '인센티브 사후 취소 차액 청구', href: '/guide/wage/wage-incentive-revocation-after-meeting-target' },
      { label: '상여금 지급조건 일방 변경 차별', href: '/guide/wage/wage-bonus-condition-changed-discrimination' },
      { label: '인센티브 미지급 청구 절차', href: '/guide/wage/wage-incentive-bonus-unpaid-claim' },
      { label: '연중 보너스 취소 회수', href: '/guide/wage/wage-bonus-cancel-mid-year-recover' },
      { label: '임금 지연이자 연 20% 청구', href: '/guide/wage/wage-late-payment-interest-claim' },
    ],
  },

  // ─── 2. wage / wage-business-trip-perdiem-suddenly-stopped ───
  {
    domain: 'wage',
    slug: 'wage-business-trip-perdiem-suddenly-stopped',
    keyword: '출장 일비 갑자기 중단',
    questionKeyword: '오래 일률 지급되던 출장 일비가 갑자기 중단됐어요. 차액 청구 가능한가요?',
    ctaKeyword: '출장 일비 중단 차액 청구 가능성 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '출장 일비 갑자기 중단 — 통상임금 산입 청구 5단계 | 로앤가이드',
      description:
        '오래 일률 지급되던 출장 일비·실비가 갑자기 중단됐다면 임금성·통상임금 산입 다툼으로 차액 청구가 가능합니다. 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"입사 후 7년 동안 출장 일비가 매월 일률 지급됐는데 회사가 갑자기 \'실비라 폐지한다\'며 중단했어요. 청구할 수 있나요?" 회사가 실제 경비 사용 여부를 불문하고 일률·정기 지급해 온 일비는 통상임금·평균임금에 해당할 여지가 있고, 일방 폐지·중단은 근로조건 불이익변경 절차(취업규칙 변경 동의)를 거치지 않으면 무효를 다툴 수 있습니다(대법원 2014다27807 취지). 시효 3년 안에서 차액 청구 + 통상임금 재산정 영향까지 검토할 가치가 큽니다.</p>',
    sections: [
      {
        title: '출장 일비 임금성 — 청구 가능성이 강한 4가지 사정',
        content:
          '<p><strong style="color:#1e3a5f">대법원 2014다27807 취지를 적용하면 다음 사정이 강하면 임금·통상임금 인정 가능성이 강화됩니다.</strong></p>\n<ul>\n<li><strong>① 실제 경비 사용 여부 불문 일률 지급</strong> — 출장 다녀왔는지·실제 비용을 썼는지와 무관하게 매월·매일 일률 지급된 경우. 실비 변상 명목이라는 이유만으로 임금성 부정 어려움.</li>\n<li><strong>② 정기·계속 지급</strong> — 매월 또는 매 출장일마다 정기적으로 지급된 관행. 통상 3년 이상 반복 지급이 강한 정황입니다.</li>\n<li><strong>③ 단체협약·운영규정 명시</strong> — 일비 항목·금액·지급 조건이 단체협약·취업규칙에 명시된 경우. 근로 대가성 + 신뢰 보호 강화.</li>\n<li><strong>④ 폐지·중단의 불이익변경 절차 부재</strong> — 회사가 일방 폐지·중단을 통보하면서 근로기준법 제94조 취업규칙 불이익변경 절차(과반수 동의)를 거치지 않은 경우. 변경 자체 무효 다툼.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회사가 "실비라 임금이 아니다"라고 단정해도 실제 사용 여부와 무관하게 일률 지급된 정황이 있으면 임금성·통상임금 산입을 다툴 수 있어요(대법원 2014다27807 취지).</blockquote>',
      },
      {
        title: '실비·복리후생비 vs 임금 — 임금성 부정될 수 있는 사정',
        content:
          '<p><strong style="color:#1e3a5f">반대로 다음 사정이 강하면 임금성이 부정되어 청구가 어려울 수 있습니다.</strong></p>\n<ul>\n<li><strong>실제 경비 입증·정산 절차</strong> — 영수증 제출·정산 절차를 거쳐 실비만큼만 지급된 경우. 순수 실비 변상으로 평가될 가능성.</li>\n<li><strong>출장·근로 발생 여부 따라 변동</strong> — 실제 출장 발생 여부에 따라 지급 여부·금액이 달라지면 근로 대가성·일률성 약화.</li>\n<li><strong>1회성·우발적 지급</strong> — 특정 출장에만 지급된 단발성이라면 정기성 부재.</li>\n<li><strong>운영규정 명시 부재</strong> — 단체협약·취업규칙·운영규정에 명시되지 않은 임의 지급은 신뢰 보호 약함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인의 출장 일비가 위 두 표(임금성 인정 vs 부정) 중 어느 쪽이 우세한지 자료로 정리하면 청구 가능성 판단이 명확해집니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 출장 일비 차액 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 + 민사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 일비 지급 관행·운영규정 자료 확보</strong> (즉시) — 단체협약·취업규칙·일비 운영규정·최근 3년 급여명세서. 영수증 제출 여부·정산 절차 부재 입증 자료.</li>\n<li><strong>2단계 — 폐지·중단 절차 점검</strong> (즉시) — 회사가 근로자 과반수 동의·개별 통지를 거쳤는지 점검. 절차 미이행이면 변경 자체 무효 주장.</li>\n<li><strong>3단계 — 차액 산출</strong> (즉시) — 폐지·중단 시점부터 누적 미지급액 + 통상임금 재산정 시 연장·야간·휴일수당·퇴직금 영향까지 합산. 시효 3년치.</li>\n<li><strong>4단계 — 노동청 진정</strong> (3년 이내) — 노동포털(labor.moel.go.kr) 또는 관할 지방고용노동지청. 처리기간 25일. 시정지시 미이행 시 형사 송치(3년 이하 징역 또는 3,000만 원 이하 벌금).</li>\n<li><strong>5단계 — 민사 임금 청구 (필요 시)</strong> — 본 차액 + 통상임금 재산정 여파 + 연 20% 지연이자(퇴직자) 합산. 3,000만 원 이하면 소액심판으로 빠른 판결.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 출장 일비 중단 차액, AI로 청구 가능성을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">지급 관행·정산 절차·폐지 통보를 입력하면 임금성 판단과 청구 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>근로계약서·단체협약·취업규칙·일비 운영규정</li>\n<li>최근 3년 급여명세서 (일비 항목 추적)</li>\n<li>출장명령서·출장 결과보고서 (실비 정산 절차 부재 입증)</li>\n<li>회사의 폐지·중단 통보 문서·이메일</li>\n<li>근로자 과반수 동의서 (요청 후 수령 시)</li>\n<li>같은 직급·부서 동료 지급 자료 (차별 동시 주장 시)</li>\n<li>이직확인서·퇴직증명서 (퇴직자의 경우)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일률 지급 일비의 통상임금성 인정',
        summary:
          '대법원 2014다27807 사건(대법원, 2019.04.23 선고)에서 법원은 버스여객자동차운송사업 회사가 실제 경비로 사용되는지를 불문하고 운전직 근로자 모두에게 담뱃값·장갑대·음료수대·청소비·기타 승무 시 소요 경비 명목으로 지급한 일비가 통상임금에 해당하는지 문제 된 사안에서, 복리후생비라는 이유로 통상임금성을 부정한 원심에 법리오해가 있다고 판시했습니다. 사용자가 실제 사용 여부를 불문하고 근무일마다 실비 변상 명목으로 일정 금액을 지급한 경우 그 자체로 임금·통상임금에서 제외할 수 없다는 취지입니다.',
        takeaway: '실비 변상 명목이라도 실제 경비 사용 여부와 무관하게 일률 지급된 일비는 임금·통상임금에 해당할 여지가 있어, 폐지·중단 시 차액 청구 + 통상임금 재산정까지 함께 다툴 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '회사가 "실비 변상이라 임금이 아니다"라고 단정합니다',
        answer:
          '<strong>실제 사용 여부와 무관하게 일률 지급된 정황이 있다면 임금성을 다툴 수 있습니다(대법원 2014다27807 취지).</strong> 영수증 제출·정산 절차 부재 자료가 핵심 입증 자료예요.',
      },
      {
        question: '근로자 과반수 동의 없이 폐지했어요. 무효인가요?',
        answer:
          '<strong>근로조건 불이익변경에 해당하면 근로기준법 제94조 과반수 동의 절차가 필요합니다.</strong> 절차 미이행이면 변경 자체 무효 주장이 가능해요.',
      },
      {
        question: '폐지된 지 1년 지났는데 시효는 어쩌나요?',
        answer:
          '<strong>임금채권 시효는 3년이라 직전 36개월치 차액 청구가 가능합니다.</strong> 회사가 "곧 정산해줄게" 신뢰를 줬다면 권리남용 항변(대법원 2024다294705 취지)으로 더 다툴 여지도 있어요.',
      },
      {
        question: '통상임금에 산입되면 다른 수당까지 영향이 있나요?',
        answer:
          '<strong>네. 통상임금이 올라가면 연장·야간·휴일수당이 함께 재산정됩니다.</strong> 퇴직자라면 평균임금성 산입까지 다투어 퇴직금 차액 영향도 검토 가능해요.',
      },
      {
        question: '동료들은 다 받는데 저만 일비가 줄었어요',
        answer:
          '<strong>합리적 이유 없는 차별이라면 균등처우 위반 + 차액 청구 병합 주장이 가능합니다.</strong> 동일 직급·근속 동료 지급 자료를 비교 표로 정리하세요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '식대·교통비 갑자기 중단 회수', href: '/guide/wage/wage-meal-transport-suddenly-stopped' },
      { label: '출장 이동시간 임금성 청구', href: '/guide/wage/wage-business-trip-travel-time' },
      { label: '해외 출장수당 회수 청구', href: '/guide/wage/wage-overseas-business-trip-allowance-recovery' },
      { label: '식대 통상임금 산입 다툼', href: '/guide/wage/wage-meal-expense-ordinary-wage' },
      { label: '식권·복리후생 통상임금', href: '/guide/wage/wage-meal-ticket-card-ordinary-wage' },
    ],
  },

  // ─── 3. wage / wage-pogual-warehouse-logistics-shift-illegal ───
  {
    domain: 'wage',
    slug: 'wage-pogual-warehouse-logistics-shift-illegal',
    keyword: '물류 창고 야간 포괄임금 위법',
    questionKeyword: '물류·창고 야간 시프트 포괄임금인데 야간·연장수당 받을 수 있나요?',
    ctaKeyword: '물류 창고 포괄임금 야간 가산수당 청구 가능성 확인',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '물류·창고 야간 포괄임금 위법 4가지 신호와 청구 절차 | 로앤가이드',
      description:
        '물류·창고·콜센터 야간 시프트 포괄임금에서 야간·연장수당이 빠졌다면 약정 효력 한계 4가지 신호로 다툴 수 있습니다. 청구 가능성을 지금 확인하세요.',
    },
    intro:
      '<p>"물류센터 야간 시프트(22시~6시)로 일하는데 \'포괄임금\'이라며 야간 50% 가산이 따로 안 나옵니다. 정상인가요?" 포괄임금 약정은 근로시간 산정이 객관적으로 어려운 경우에 한해 제한적으로 효력이 인정됩니다. 물류·창고·콜센터처럼 출퇴근 기록·근무표·POS·물류 시스템으로 시간 산정이 가능한 경우에는 포괄임금이라는 이유만으로 야간·연장·휴일수당을 면할 수 없다는 것이 대법원 일관 입장(대법원 2022다257238 취지). 시간 측정이 가능했다면 시효 3년 안에서 미지급 가산수당 차액 청구를 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 물류·창고·야간 시프트에서 포괄임금이 위법으로 평가될 수 있는 4가지 신호',
        content:
          '<p><strong style="color:#1e3a5f">A. 다음 4가지 신호가 보이면 포괄임금 약정의 효력 자체를 다툴 여지가 있습니다.</strong></p>\n<ul>\n<li><strong>① 시간 산정이 가능한 시프트</strong> — 야간 22시~익일 06시 정형 시프트, 물류 시스템·근태 시스템·출입 카드·CCTV로 출퇴근이 명확한 경우. 산정이 어렵지 않으므로 포괄임금 효력 부정 여지.</li>\n<li><strong>② 최저임금 미달</strong> — 포괄임금 총액을 실제 근로시간(연장·야간·휴일 가산 포함)으로 나누면 시급이 최저임금에 못 미치는 경우. 이 경우 포괄임금 자체가 무효(대법원 일관 입장).</li>\n<li><strong>③ 야간·휴일수당 항목 부재</strong> — 급여명세서에 야간·연장·휴일수당 항목이 별도로 표시되지 않거나 "기본급 일체 포함" 식 단일 항목만 있는 경우.</li>\n<li><strong>④ 서면 약정 부재 또는 일방 통보</strong> — 근로계약서에 "포괄임금" 명시·항목별 산정식 부재거나 회사가 일방 안내·구두 합의로 처리한 경우.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 야간 시프트 자체가 야간 가산(통상임금 50%) + 연장 가산(50%) 중첩 적용 영역이라 포괄임금 효력이 부정되면 차액 규모가 일반 시프트보다 훨씬 큰 사례가 많습니다.</blockquote>',
      },
      {
        title: 'Q. 미지급 야간·연장수당 어떻게 산정·청구하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 실제 근로시간을 입증해 야간·연장 가산을 분리 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 실제 근로시간 입증</strong> — 출퇴근 기록·근태 시스템·물류 시스템 로그·CCTV·메신저 보고로 실제 일한 시간 정리. 휴게시간(통상 1일 1시간) 빼고 산정.</li>\n<li><strong>② 통상시급 산정</strong> — 월 통상임금 ÷ 209시간(주 40시간 기준) = 통상시급.</li>\n<li><strong>③ 야간근로 가산</strong> — 22시 ~ 익일 06시 근로는 별도 50% 가산. 야간 시프트 8시간이라면 야간 가산만 별도 청구 가능.</li>\n<li><strong>④ 연장근로 가산</strong> — 1주 40시간 또는 1일 8시간 초과분 × 통상시급 × 1.5. 야간 + 연장이 결합되면 통상시급 × 2.0(50%+50%) 가산.</li>\n<li><strong>⑤ 시효 3년</strong> — 임금채권 시효 3년 안에서 합산 청구 가능(근로기준법 제49조). 매월 발생일 기준으로 시효 카운트.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 물류·창고 야간 포괄임금, AI로 청구 가능성을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">근무 형태·실제 시간·급여 구성을 입력하면 미지급 가산수당 차액 청구 가능성을 확인할 수 있습니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">임금체불 대응 순서, AI로 바로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 야간 포괄임금 차액 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근로시간 자료 보존</strong> (즉시) — 근태 시스템 캡처, 출입 카드 기록, 물류 시스템 로그, 근무표, 카카오톡 보고 등 실제 근로시간 입증 자료. 휴게시간 사용 여부도 정리.</li>\n<li><strong>2단계 — 차액 산출</strong> (즉시) — 통상시급 × 1.5(연장) + 야간 50% 가산 별도. 야간 + 연장 중첩 시 통상시급 × 2.0. 시효 3년치 합산. 회사가 지급한 포괄급여 차감해 미지급액 산정.</li>\n<li><strong>3단계 — 회사 정정 요청</strong> (선택) — 인사팀에 서면으로 정확한 산정 자료 + 차액 지급 요청. 14일 이내 회신 없으면 다음 단계로.</li>\n<li><strong>4단계 — 노동청 진정</strong> (3년 이내) — 노동포털(labor.moel.go.kr) 또는 관할 지방고용노동지청. 처리기간 25일(연장 가능). 시정지시 미이행 시 형사 송치(3년 이하 징역 또는 3,000만 원 이하 벌금).</li>\n<li><strong>5단계 — 민사 임금 청구 (필요 시)</strong> — 노동청 시정지시 후에도 미지급이면 민사 청구. 3,000만 원 이하면 소액심판 → 통상 2~3개월 판결. 본 차액 + 연 20% 지연이자(퇴직자) 합산 가능성.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 주의: 회사가 "포괄임금이니 청구 못 한다"고 단정해도 효력 한계는 법원 판단 영역입니다. 시간 산정이 가능했다면 다툴 여지가 충분히 열려 있어요.</blockquote>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>근로계약서·연봉계약서 (포괄임금 약정·산정식 명시 여부)</li>\n<li>최근 3년 급여명세서 (야간·연장·휴일 항목 분리 여부)</li>\n<li>근태 시스템·출입 카드·물류 시스템 로그·근무표</li>\n<li>휴게시간 운용 자료 (실제 휴게 가능 여부)</li>\n<li>CCTV·메신저 보고·이메일 (근로시간 간접 입증)</li>\n<li>취업규칙 또는 단체협약 (포괄임금 관련 조항)</li>\n<li>이직확인서·퇴직증명서 (퇴직자의 경우)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 격일제 근무와 통상임금·소정근로시간 산정',
        summary:
          '대법원 2022다257238 사건(대법원, 2025.07.18 선고)에서 법원은 격일제 근무 형태에서 최저임금액 이상의 임금을 지급해야 하는 소정근로시간이 1일 8시간에 제한되는지가 문제된 사안에서, 근로자와 사용자가 정한 1주 근로시간이 40시간을 초과하거나 1일 근로시간이 8시간을 초과하는 경우 그 초과 부분인 연장근로시간은 최저임금 기준 시간에 포함되지 않는다고 원칙적 입장을 밝히면서, 통상임금의 개념·판단 기준과 일정 근무일수 충족 조건이 부가된 임금의 통상임금성에 관한 법리를 정리했습니다.',
        takeaway: '야간·격일제 시프트 포괄임금이라도 시간 산정이 가능한 정형 시프트라면 야간·연장 가산을 면할 수 없고, 통상임금 산정·차액 청구가 가능한 사례가 있어 시효 3년 안에서 다툴 여지가 큽니다.',
      },
    ],
    faq: [
      {
        question: '근로계약서에 "포괄임금"이라고 적혀 있으면 끝인가요?',
        answer:
          '<strong>아닙니다. 포괄임금 약정의 효력은 근로시간 산정 곤란성·근로자 불이익 부재 등 요건을 충족할 때만 인정됩니다.</strong> 물류·창고·야간 시프트처럼 산정이 가능하면 약정 자체를 다툴 여지가 있어요.',
      },
      {
        question: '야간 시프트 휴게시간이 충분하다며 회사가 거부합니다',
        answer:
          '<strong>형식상 휴게시간이 있어도 실제 대기·즉응 의무가 있으면 근로시간으로 평가될 수 있습니다.</strong> 자유로운 휴식이 보장되지 않았다면 휴게시간 포함해 산정 다툴 여지가 있어요.',
      },
      {
        question: '야간 + 연장이 겹치면 가산이 100%인가요?',
        answer:
          '<strong>야간 50% + 연장 50%가 중첩 적용되어 통상시급 × 2.0이 됩니다.</strong> 야간 시프트 + 8시간 초과 근로라면 차액이 일반 시프트보다 훨씬 커지는 사례가 있어요.',
      },
      {
        question: '입사한 지 3년 넘었는데 시효 지난 부분은 어쩌나요?',
        answer:
          '<strong>임금채권 시효는 3년이지만 발생일 기준으로 카운트됩니다.</strong> 직전 36개월치는 청구 가능하고, 회사 신뢰 표시가 있었다면 권리남용 항변 가능성도 있어요.',
      },
      {
        question: '5인 미만 사업장도 야간 가산수당 청구 가능한가요?',
        answer:
          '<strong>5인 미만은 연장·야간·휴일 가산수당 의무 자체가 없어 다툼 범위가 제한됩니다.</strong> 다만 약정으로 가산수당을 정했거나 최저임금 미달이라면 그 부분은 다툴 여지가 있어요.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '포괄임금 24시간 격일제 위법', href: '/guide/wage/wage-pogual-irregular-shift-time-illegal' },
      { label: '포괄임금 공장 시프트 위법', href: '/guide/wage/wage-pogual-factory-shift' },
      { label: '연장수당 미지급 신고 절차', href: '/guide/wage/wage-overtime-night-allowance-illegal' },
      { label: '야간근로 50% 가산 청구', href: '/guide/wage/wage-night-work-50-percent-extra' },
      { label: '주 52시간 초과 연장수당', href: '/guide/wage/wage-overtime-over-weekly-52' },
    ],
  },

  // ─── 4. unemployment / unemployment-cohabit-spouse-resignation-rescue ───
  {
    domain: 'unemployment',
    slug: 'unemployment-cohabit-spouse-resignation-rescue',
    keyword: '사실혼 동거인 거주 이전 실업급여',
    questionKeyword: '사실혼·동거인 거주 이전으로 자진퇴사했는데 실업급여 거절됐어요. 다툴 수 있나요?',
    ctaKeyword: '사실혼 동거인 거주 이전 실업급여 가능성 확인',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '사실혼 동거인 거주 이전 자진퇴사 — 정당이직 다툼 4가지 | 로앤가이드',
      description:
        '사실혼·동거인 거주 이전으로 통근 곤란해 자진퇴사했는데 실업급여 거절됐다면 정당이직 사유 확장 해석으로 다툴 여지가 있습니다. 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"사실혼 동거인이 지방으로 발령나 같이 이사했는데 통근이 불가능해 퇴사했어요. 고용센터에서 \'법률혼이 아니라\' 거절했습니다. 다툴 수 있나요?" 고용보험법 시행규칙 별표 2의 정당이직 사유는 "배우자·부양가족과의 동거를 위한 거주이전" 등을 포함하지만 법률혼만으로 좁게 해석하면 사실혼·동거인 사유가 누락됩니다. 실제 가족 부양·생활공동체 사실이 객관적으로 입증되면 정당이직 사유로 평가될 여지가 있고(고용보험심사위원회 재결례 일관 입장), 처분일 90일 이내 심사청구·재심사청구 트랙으로 다툴 가치가 큽니다.</p>',
    sections: [
      {
        title: 'Q. 사실혼·동거인 거주 이전 정당이직으로 다툴 수 있는 4가지 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용보험심사위원회 재결례·법원 입장을 종합하면 다음 사정이 강하면 인정 가능성이 높아집니다.</strong></p>\n<ul>\n<li><strong>① 생활공동체 사실 객관 입증</strong> — 같은 주소 거주, 공동 부양, 가족관계증명서·주민등록상 동거 표기, 통장 공동 운용 등 사실혼·동거 실질 입증 자료.</li>\n<li><strong>② 동거인 발령·이전 객관성</strong> — 동거인 회사 발령통보·근무지 변경 자료. 본인 의사 무관 사정으로 거주이전이 발생했다는 객관성.</li>\n<li><strong>③ 통근 불가능성</strong> — 신규 거주지에서 종전 사업장까지 편도 2~3시간 이상, 대중교통 불가 등 통상적 통근 곤란.</li>\n<li><strong>④ 회사 측 대안 부재</strong> — 원격근무·근무지 조정·휴직 등 대안 검토를 회사가 거부한 정황.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "법률혼이 아니라"는 형식적 거절은 정당이직 사유의 본질적 취지(가족 부양·생활공동체 보호)에서 벗어난 좁은 해석으로 다툴 수 있는 사례가 있습니다.</blockquote>',
      },
      {
        title: 'Q. 어떤 흐름으로 다툴 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 고용보험심사관·심사위원회·행정소송 트랙으로 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거절 처분서·이직확인서 보존</strong> (즉시) — 고용센터 거절 사유, 회사 이직사유 코드 점검. "개인사정"으로 처리됐다면 정정 요청 우선.</li>\n<li><strong>2단계 — 입증 자료 정리</strong> (즉시) — 사실혼·동거 입증 자료(주민등록상 동거 표기·가족관계증명서·통장 공동 운용·공동 명의 자료), 동거인 발령통보, 신규 거주지 통근 자료, 회사 대안 검토 부재 자료.</li>\n<li><strong>3단계 — 심사청구</strong> (처분일 90일 이내) — 고용보험 심사관에게 심사청구서 + 입증 자료 제출. 처리기간 통상 30일 이내.</li>\n<li><strong>4단계 — 재심사청구</strong> (심사 결정일 90일 이내) — 고용보험심사위원회(고용노동부)에 재심사청구. 처리기간 60~90일.</li>\n<li><strong>5단계 — 행정소송</strong> (재심사 결정일 90일 이내) — 행정법원에 처분 취소소송 제기. 노동위·법원 단계까지 검토 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사실혼 동거인 거주 이전 실업급여, AI로 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">생활공동체 입증 자료·통근 자료를 입력하면 정당이직 인정 가능성을 확인할 수 있습니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">실업급여 받을 수 있는지 AI로 점검하기 →</a>\n</div>',
      },
      {
        title: 'Q. 어떤 자료를 미리 정리해두는 것이 좋나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 생활공동체 입증 + 거주이전 객관성 + 통근 불가능성 세 갈래로 자료를 정리하는 것이 효율적입니다.</strong></p>\n<ul>\n<li><strong>주민등록상 동거 표기·가족관계증명서</strong> — 사실혼·동거 표기, 자녀 가족관계 등 객관 자료.</li>\n<li><strong>공동 명의 자료</strong> — 임차계약·관리비·공과금·통장 공동 운용 등 생활공동체 입증.</li>\n<li><strong>동거인 회사 발령통보</strong> — 근무지 변경·전보 자료.</li>\n<li><strong>신규 거주지 ↔ 종전 사업장 거리·소요시간 자료</strong> — 지도·교통 자료.</li>\n<li><strong>회사 대안 검토 자료</strong> — 원격근무·근무지 조정·휴직 요청과 회사 거부 자료.</li>\n<li><strong>이직확인서·사직서 사본</strong> — 사유 코드 점검.</li>\n<li><strong>최근 12개월 급여명세서</strong> — 구직급여 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: "사실혼"이라는 표현보다 "생활공동체·공동 부양"이라는 객관 사실을 자료로 입증하는 것이 심사위원회·법원 평가에서 효과적입니다.</blockquote>',
      },
      {
        title: 'Q. 회사 측 이직사유 코드가 "개인사정"으로 처리됐을 때',
        content:
          '<p><strong style="color:#1e3a5f">A. 코드 정정 요청 + 객관 자료 입증으로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>코드 정정 요청 우선</strong> — 회사에 이직확인서 정정 요청. "동거인 거주이전으로 통근 곤란"이 정확한 사유라면 정정해 줄 의무가 있습니다.</li>\n<li><strong>심사 단계에서 실질 평가</strong> — 코드와 무관하게 심사관·위원회가 실질 사유를 평가하므로, 코드 정정이 어려워도 객관 자료로 직접 다툴 수 있습니다.</li>\n<li><strong>고용보험심사위원회 재결례 활용</strong> — 비슷한 사안에서 정당이직 인정된 재결례를 인용해 형식적 거절의 부당성을 다툴 여지가 있습니다.</li>\n<li><strong>처분일 90일 시한 엄수</strong> — 심사·재심사 시한이 절대적이라 거절 통보 즉시 시작하는 것이 안전합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 거절 처분 후 90일이 지나면 행정 트랙이 막혀 행정소송도 어려워지는 사례가 있어, 거절 통보 즉시 시한을 확인하고 빠르게 진행하는 것이 핵심입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정당한 이직사유 인정의 실질 평가',
        summary:
          '고용보험심사위원회 2021재결 제264호(고용보험심사위원회, 2021.12.22 재결)에서 위원회는 청구인이 손목통증으로 이직한 사안에서 회사가 \'개인사정으로 인한 자진퇴사\'로 상실신고한 후 고용센터가 수급자격을 불인정한 처분에 대해, 업무종류의 전환이나 휴직이 허용되지 않아 이직한 경우에 해당돼 수급자격이 있다고 판단해 처분을 취소했습니다. 형식적 코드와 무관하게 실질 사유를 평가한 사례입니다.',
        takeaway: '회사가 "개인사정"으로 이직사유 코드를 처리했더라도 실질 사유가 정당이직 영역에 해당하면 심사·재심사 단계에서 다툴 수 있어, 객관 자료로 실질을 입증하는 것이 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '혼인신고 안 했어도 사실혼이 인정되나요?',
        answer:
          '<strong>혼인의 의사·생활공동체 객관성이 입증되면 사실혼으로 평가될 여지가 있습니다.</strong> 주민등록상 동거 표기·공동 부양 자료가 핵심 입증 자료예요.',
      },
      {
        question: '동거인이 부모·형제라도 가능한가요?',
        answer:
          '<strong>부양 가족 사정이라면 정당이직 사유 영역에 들어갈 수 있습니다.</strong> 부양 의무·생활공동체 사실이 객관 자료로 입증되면 다툴 여지가 있어요.',
      },
      {
        question: '심사청구 시한 90일을 놓쳤어요',
        answer:
          '<strong>행정 트랙은 막히지만 행정소송 자체는 처분 알게 된 날부터 90일 + 처분일부터 1년 이내가 일반적입니다.</strong> 변호사 자문으로 행정소송 가능성을 검토해보세요.',
      },
      {
        question: '동거인 발령이 본인 회사 합의로 이뤄진 경우도 다툼 가능한가요?',
        answer:
          '<strong>동거인 의사·재량 정도에 따라 평가가 달라집니다.</strong> 사용자 명령에 가까운 비자발성이면 인정 여지가 있고, 본인 합의가 강하면 인정이 어려운 사례가 있어요.',
      },
      {
        question: '재심사·행정소송이 1년 넘게 걸려도 실업급여 받을 수 있나요?',
        answer:
          '<strong>인용 시 처분일로 소급해 수급자격 인정 + 미수급 구직급여 지급이 가능합니다.</strong> 다만 수급기간(이직일로부터 12개월) 안에서 실업인정 절차를 거쳐야 하므로 시기 관리가 중요해요.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '배우자 발령 거주 이전 실업급여', href: '/guide/unemployment/unemployment-spouse-relocation-eligible' },
      { label: '배우자 거주이전 정당이직 사유', href: '/guide/unemployment/unemployment-spouse-relocation-just-cause' },
      { label: '가족 간병 자진퇴사 실업급여', href: '/guide/unemployment/unemployment-family-care-quit' },
      { label: '실업급여 거절 심사청구 절차', href: '/guide/unemployment/unemployment-appeal-rejection' },
      { label: '실업급여 거절 항소 절차', href: '/guide/unemployment/unemployment-wrongful-denial-appeal-procedure' },
    ],
  },

  // ─── 5. unemployment / unemployment-public-interest-report-quit-eligible ───
  {
    domain: 'unemployment',
    slug: 'unemployment-public-interest-report-quit-eligible',
    keyword: '공익신고 후 자진퇴사 실업급여',
    questionKeyword: '회사 위법행위를 신고한 뒤 자진퇴사했는데 실업급여 받을 수 있나요?',
    ctaKeyword: '공익신고 자진퇴사 실업급여 가능성 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '공익신고 후 자진퇴사 실업급여 — 정당이직 인정 5단계 | 로앤가이드',
      description:
        '회사 위법행위를 공익신고한 뒤 자진퇴사한 경우 정당이직 사유로 실업급여 인정될 여지가 있습니다. 5단계 신청·심사 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"회사가 안전·환경 위반을 반복해 권익위·검찰에 공익신고했어요. 계속 다니기 힘들어 자진퇴사했는데 고용센터에서 \'개인사정\'으로 처리해 실업급여를 거절당했습니다. 다툴 수 있나요?" 회사의 명백한 위법행위를 인지·신고해 그에 따라 처분이 확인되었고 동시에 본인이 그 사업장에서 계속 근무하기 어려운 사정이 인정되면, 자발적 이직이라도 정당한 이직사유로 평가된 재결례가 있습니다(고용보험심사위원회 2023재결 제18호 취지). 처분일 90일 이내 심사청구·재심사청구 트랙으로 다툴 가치가 큽니다.</p>',
    sections: [
      {
        title: '공익신고 후 자진퇴사 — 정당이직 인정 가능성이 강한 4가지 사정',
        content:
          '<p><strong style="color:#1e3a5f">고용보험심사위원회 2023재결 제18호 취지를 적용하면 다음 사정이 강하면 인정 가능성이 높아집니다.</strong></p>\n<ul>\n<li><strong>① 신고 사실의 객관성</strong> — 권익위·검찰·노동청·환경청·식약처 등 관계기관에 정식 신고 + 사건번호·접수증 객관 자료 보유.</li>\n<li><strong>② 회사 위법 사실 확인</strong> — 신고에 따라 회사가 행정처분·과태료·형사 입건 등 위법행위가 객관적으로 확인된 사실. 처분서·고지서·언론보도 자료.</li>\n<li><strong>③ 계속 근무 곤란성</strong> — 신고 후 보복 분위기·정신적 스트레스·업무 배제 등 계속 근무가 어려운 사정. 사직서 사유에 객관 입증.</li>\n<li><strong>④ 신고와 이직의 시간적 인과성</strong> — 신고 시점과 이직 시점이 가까울수록 인과성 평가에 유리. 신고 후 즉시 보복 정황이 있다면 더 강함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: ②번 회사 위법 사실 확인이 가장 강한 정당이직 근거입니다. 신고만 한 경우보다 처분이 확인된 경우 인정 가능성이 훨씬 높은 사례가 있어요.</blockquote>',
      },
      {
        title: '단순 신고 vs 처분 확인 — 인정 vs 불인정 분기',
        content:
          '<p><strong style="color:#1e3a5f">반대로 다음 사정이 강하면 인정이 어려울 수 있습니다.</strong></p>\n<ul>\n<li><strong>위법 사실 확인 부재</strong> — 신고했지만 무혐의·불기소·행정처분 부재로 끝난 경우. 객관적 위법 입증 약함.</li>\n<li><strong>신고-이직 인과 단절</strong> — 신고 시점과 이직 시점이 멀거나 다른 사유(이직 준비·창업)가 결합된 경우.</li>\n<li><strong>보복 정황 입증 부재</strong> — 계속 근무 곤란 사유가 단순 주관적 불편이라면 평가가 어려운 사례.</li>\n<li><strong>회사 신고 자체가 본인 비위 회피용</strong> — 본인 비위가 적발되자 보복성 신고로 처리된 정황이 있다면 평가 불리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인 사안이 위 두 표(인정 vs 불인정) 중 어느 쪽이 우세한지 자료를 모아 정리하면 청구 가능성 판단이 명확해집니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 공익신고 자진퇴사 실업급여 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용센터·심사위원회 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신고·처분 자료 보존</strong> (이직 전·후) — 권익위·검찰·노동청 등 신고 접수증, 사건번호, 처리 결과(처분·고지서·언론보도) 자료 확보.</li>\n<li><strong>2단계 — 사직서·이직확인서 사유 정리</strong> (이직 시) — 사직서에 "공익신고 후 보복 분위기·계속 근무 곤란"으로 구체 사유 명시. 회사 이직확인서 사유 코드 점검.</li>\n<li><strong>3단계 — 수급자격 신청</strong> (이직 후 14일 내 권장) — 거주지 관할 고용센터 방문. 신고·처분 입증 자료 + 사직서 함께 제출.</li>\n<li><strong>4단계 — 거절 시 심사청구</strong> (처분일 90일 이내) — 고용보험 심사관에게 심사청구서 + 입증 자료. 처리기간 통상 30일.</li>\n<li><strong>5단계 — 재심사청구·행정소송</strong> (심사 결정일 90일 이내) — 고용보험심사위원회 → 행정법원. 인용 시 수급자격 회복 + 미수급분 지급.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 공익신고 자진퇴사 실업급여, AI로 가능성을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">신고 사실·처분 자료·사직 정황을 입력하면 정당이직 인정 가능성을 확인할 수 있습니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">실업급여 신청 순서, AI로 먼저 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>공익신고 접수증·사건번호 자료 (권익위·검찰·노동청·환경청 등)</li>\n<li>회사 위법 처분 자료 (행정처분·과태료·형사 입건·언론보도)</li>\n<li>사직서 (구체 사유 명시 사본)</li>\n<li>이직확인서 (사유 코드 점검)</li>\n<li>보복·계속 근무 곤란 정황 자료 (메신저·이메일·동료 진술)</li>\n<li>신고 시점 ~ 이직 시점 시간순 정리표</li>\n<li>최근 12개월 급여명세서 (구직급여 산정용)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공익신고 결합 자진이직과 정당이직 인정',
        summary:
          '고용보험심사위원회 2023재결 제18호(고용보험심사위원회, 2023.04.12 재결)에서 위원회는 청구인이 자발적으로 이직했더라도 이직 후 바로 사업장이 법령에서 금지하는 재화를 제조·판매하고 있어 관계기관(권익위·국민신문고·대검찰청)에 신고하고, 그에 따라 사업장 위법행위가 확인되어 관계 법령에 따라 처분되었으므로, 구직급여 수급자격이 제한되지 아니하는 정당한 이직사유에 해당한다고 판단해 거절 처분을 취소했습니다.',
        takeaway: '공익신고 + 위법 사실 확인이 결합되면 자발적 이직이라도 정당이직 사유로 평가될 여지가 있어, 신고 자료·처분 결과·계속 근무 곤란 정황을 함께 입증하면 다툴 가능성이 큽니다.',
      },
    ],
    faq: [
      {
        question: '아직 처분 결과가 안 나왔어요. 신고만으로도 가능한가요?',
        answer:
          '<strong>처분 확인이 강한 정황이지만 신고만으로 다툴 여지도 있습니다.</strong> 신고 자료 + 보복 정황 + 계속 근무 곤란 사정을 결합 입증하면 인정 가능성이 있어요.',
      },
      {
        question: '신고 결과 무혐의가 나왔어요. 그래도 다툴 수 있나요?',
        answer:
          '<strong>인정 가능성은 약해지지만 신고 자체의 합리성·계속 근무 곤란 사정이 강하면 다툴 여지가 있는 사례가 있습니다.</strong> 신고 동기·근거 자료 보존이 중요해요.',
      },
      {
        question: '회사가 신고를 사유로 한 보복으로 해고했어요. 그건 부당해고 아닌가요?',
        answer:
          '<strong>맞습니다.</strong> 공익신고를 사유로 한 해고는 공익신고자 보호법·근로기준법 위반으로 별도 부당해고 다툼이 가능하고, 노동위 구제신청 트랙(해고일 3개월 이내)을 함께 진행할 수 있어요.',
      },
      {
        question: '신고 사실이 회사에 알려진 정황 자료가 부족해요',
        answer:
          '<strong>신고 후 회사 측 발언·태도 변화·업무 배제 정황 메신저·이메일이 핵심 자료입니다.</strong> 동료 진술서도 보완 자료로 활용 가능해요.',
      },
      {
        question: '처분이 1년 넘게 걸리면 실업급여 시기를 놓치나요?',
        answer:
          '<strong>수급기간(이직일로부터 12개월) 안에서 신청·실업인정을 받아야 하므로 시기 관리가 중요합니다.</strong> 처분 결과를 기다리지 말고 일단 신청 + 거절 시 심사청구로 다투는 것이 안전해요.',
      },
    ],
    cta: { text: '실업급여 신청 순서, AI로 먼저 정리하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '직장 내 괴롭힘 자진이직 사유', href: '/guide/unemployment/unemployment-workplace-bullying-just-cause' },
      { label: '권고사직 자진퇴사 입증 방법', href: '/guide/unemployment/unemployment-recommended-resign-proof-method' },
      { label: '실업급여 거절 심사청구 절차', href: '/guide/unemployment/unemployment-appeal-rejection' },
      { label: '실업급여 거절 항소 절차', href: '/guide/unemployment/unemployment-wrongful-denial-appeal-procedure' },
      { label: '직장 폐업 갑자기 자진이직', href: '/guide/unemployment/unemployment-workplace-closed-sudden-procedure' },
    ],
  },

  // ─── 6. retirement / retirement-officer-vs-employee-dispute-back ───
  {
    domain: 'retirement',
    slug: 'retirement-officer-vs-employee-dispute-back',
    keyword: '등기임원 사실상 근로자 퇴직금',
    questionKeyword: '등기임원 직함이지만 사실상 근로자였어요. 퇴직금 청구 가능한가요?',
    ctaKeyword: '등기임원 사실상 근로자 퇴직금 차액 청구 가능성 확인',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '등기임원 사실상 근로자 퇴직금 — 근로자성 입증 4가지 | 로앤가이드',
      description:
        '등기임원·사내이사 직함이지만 사용자 지휘를 받는 종속적 근로자라면 퇴직금 청구가 가능합니다. 근로자성 입증 4가지 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>"이름은 등기임원·사내이사였지만 실제로는 대표이사 지시를 받고 정해진 업무·시간으로 일했어요. 퇴사 후 퇴직금을 요구하니 \'임원이라 안 준다\'고 합니다. 청구할 수 있나요?" 등기임원 직함이라도 실질이 임금을 목적으로 종속적 관계에서 사용자에게 근로를 제공한 경우 근로기준법상 근로자에 해당하고, 그렇다면 근로자퇴직급여 보장법에 따른 퇴직금 청구가 가능합니다(대법원 2023다219752 취지). 시효 3년 안에서 차액 청구 + 근로자성 다툼을 검토할 가치가 큽니다.</p>',
    sections: [
      {
        title: 'Q. 등기임원이지만 사실상 근로자로 평가될 수 있는 4가지 입증 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 대법원 일관 입장(2018다229120·2023다219752 취지)을 적용하면 다음 사정이 강하면 근로자성 인정 가능성이 높아집니다.</strong></p>\n<ul>\n<li><strong>① 업무 내용·시간·장소 통제</strong> — 대표이사 또는 상위 임원이 업무 내용을 지시하고 근무시간·근무장소를 정하며 본인이 이에 구속된 정황. 출퇴근 기록·근태 시스템·결재 라인 자료.</li>\n<li><strong>② 보수의 근로 대가성·고정성</strong> — 매월 정기적으로 고정급(기본급·직책수당)이 지급되었고 근로 자체에 대한 대상적 성격을 가진 경우. 회사 이익 분배·재량 보수와 구분.</li>\n<li><strong>③ 독립 사업·재량 부재</strong> — 본인 비품·작업도구를 소유하지 않고 회사 자원으로 일했으며, 손익을 스스로 부담하지 않은 정황.</li>\n<li><strong>④ 형식적 등기 + 실질적 근로</strong> — 등기 절차는 거쳤지만 이사회 결의·주주총회 보수 결의 등 임원 권한 실질 행사 부재. 사실상 직원과 동일하게 평가·인사관리됨.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직함·등기 형식이 아니라 ① 지휘·통제, ② 보수 성격, ③ 독립성 부재, ④ 실질 권한 부재의 종합 평가입니다. 4가지 중 다수가 인정되면 근로자성이 인정될 여지가 큽니다.</blockquote>',
      },
      {
        title: '임원 권한 실질 행사 — 근로자성 부정될 수 있는 사정',
        content:
          '<p><strong style="color:#1e3a5f">반대로 다음 사정이 강하면 근로자성이 부정되어 퇴직금 청구가 어려울 수 있습니다.</strong></p>\n<ul>\n<li><strong>이사회·주주총회 의결권 행사</strong> — 이사회 결의·주주총회 의결에 실질 참여하고 회사 의사결정에 영향을 미친 경우.</li>\n<li><strong>보수의 재량성·이익 분배 성격</strong> — 보수가 회사 이익에 따라 변동되고 정기 고정급이 부재한 경우.</li>\n<li><strong>독립 사업 운영 정황</strong> — 본인 자원·재량으로 사업 일부를 운영하고 손익을 부담한 경우.</li>\n<li><strong>임원 등기 + 실질 권한 행사</strong> — 회사 명의 결재·계약권·인사권 등 사용자 권한을 실질 행사한 경우.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인 사안이 위 두 표(근로자성 인정 vs 부정) 중 어느 쪽이 우세한지 자료로 정리하면 청구 가능성 판단이 명확해집니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 근로자성 다툼 + 퇴직금 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 + 민사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근로자성 입증 자료 정리</strong> (즉시) — 근로계약서·임원 위촉계약서, 출퇴근 기록·근태 시스템, 업무 지시 메일·메신저·결재라인, 정기 보수 명세서, 4대보험 가입 자료(근로자 분류 입증).</li>\n<li><strong>2단계 — 임원 권한 부재 자료</strong> (즉시) — 이사회 의사록·주주총회 의사록에서 본인 의결권 행사 부재, 회사 명의 결재·계약권 부재 입증.</li>\n<li><strong>3단계 — 평균임금 산정 + 차액 산출</strong> (즉시) — 직전 3개월 임금 + 정기 상여·수당 안분(3/12) 포함해 평균임금 계산. 평균임금 × 30 × 근속연수 = 퇴직금 청구액.</li>\n<li><strong>4단계 — 노동청 진정 또는 민사 청구</strong> (3년 이내) — 임원 직함이라 노동청 진정이 어려운 사례가 많아 곧바로 민사 청구가 일반적. 본 차액 + 연 20% 지연이자(근로자퇴직급여 보장법 제9조) 합산.</li>\n<li><strong>5단계 — 변호사·노무사 자문</strong> — 근로자성 다툼은 사안 복잡성이 커서 전문가 자문 권장. 임원 등기 회복·말소 절차도 함께 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 등기임원 사실상 근로자 퇴직금, AI로 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">근로자성 입증 자료·평균임금 자료를 입력하면 청구 가능성과 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">퇴직금 계산과 청구 절차, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>근로계약서·임원 위촉계약서·임원 등기부등본</li>\n<li>최근 3년 보수 명세서·소득세 원천징수 자료 (근로소득 분류 입증)</li>\n<li>출퇴근 기록·근태 시스템·결재 라인·인사평가 자료</li>\n<li>업무 지시 메일·메신저 (지휘·통제 입증)</li>\n<li>이사회·주주총회 의사록 (본인 의결권 행사 부재 입증)</li>\n<li>4대보험 가입 자료 (근로자 분류 입증)</li>\n<li>퇴직 정산서·퇴직 통보 자료</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보험회사 교육매니저 위촉계약과 근로자성',
        summary:
          '대법원 2023다219752 사건(대법원, 2025.07.03 선고)에서 법원은 보험회사와 교육매니저 위촉계약을 체결한 후 약 5~9년간 신입 보험설계사 등을 교육하는 업무를 수행한 사람들이 근로기준법상 근로자에 해당하는지 문제 된 사안에서, 회사가 업무 내용을 정하고 업무 수행 과정에서 상당한 지휘·감독을 한 정황을 종합해 임금을 목적으로 종속적인 관계에서 회사에 근로를 제공한 근로자에 해당한다고 볼 소지가 크다고 판시했습니다. 형식이 아닌 실질로 근로자성을 판단한 사례입니다.',
        takeaway: '형식상 임원·위촉직이라도 회사가 업무 내용·시간·장소를 통제하고 종속적 관계가 인정되면 근로자성이 인정될 여지가 있어, 근로자퇴직급여 보장법에 따른 퇴직금 청구 검토가 가능합니다.',
      },
    ],
    faq: [
      {
        question: '등기임원이라 4대보험도 임원으로 가입돼 있어요. 그래도 가능한가요?',
        answer:
          '<strong>4대보험 분류는 형식적 자료로 가중치가 약합니다.</strong> 실질적 근로 지휘·통제 정황이 입증되면 근로자성이 인정될 여지가 있어요(대법원 2023다219752 취지).',
      },
      {
        question: '대표이사인데도 근로자로 인정될 수 있나요?',
        answer:
          '<strong>일반적으로 대표이사는 사용자 지위로 평가되어 근로자성 인정이 어렵습니다.</strong> 다만 명목상 대표이사이고 실제로는 다른 사람 지휘를 받는 정황이 강하면 다툴 여지가 있는 사례가 있어요.',
      },
      {
        question: '임원 보수가 일반 직원과 같은 정기 급여 형태였어요',
        answer:
          '<strong>매월 고정급으로 지급된 정황은 근로 대가성 강한 정황입니다.</strong> 보수 명세서·통장 거래내역으로 정기성·고정성을 객관 입증하세요.',
      },
      {
        question: '사임 후 퇴직금 요구했더니 임원 보수는 별도라고 합니다',
        answer:
          '<strong>임원 보수는 상법 제388조에 따라 주주총회 결의가 필요하고, 결의 없이 받은 보수는 다툼 영역입니다(대법원 2025다214605 취지).</strong> 다만 본인 근로자성이 인정되면 별도 퇴직금 청구가 병행 가능해요.',
      },
      {
        question: '근로자성 다툼이 길어지면 시효가 도과하지 않나요?',
        answer:
          '<strong>퇴직금 청구권 시효는 3년이라 시한 관리가 중요합니다.</strong> 시효 임박 시 일단 민사 소장을 접수해 시효 중단을 시키고 본격 다툼을 진행하는 것이 안전해요.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '임원 퇴직금 한도 다툼', href: '/guide/retirement/retirement-executive-severance-limit' },
      { label: '임원 한도 초과 세제', href: '/guide/retirement/retirement-executive-cap-excess-tax-treatment' },
      { label: '이사 승진 후 근속 통산', href: '/guide/retirement/retirement-director-promotion-continuous-service' },
      { label: '평균임금 다툼 차액 청구', href: '/guide/retirement/retirement-average-wage-dispute' },
      { label: '프리랜서 근로자성 퇴직금', href: '/guide/retirement/retirement-freelancer-eligibility' },
    ],
  },

  // ─── 7. retirement / retirement-irregular-team-leader-classification-pay ───
  {
    domain: 'retirement',
    slug: 'retirement-irregular-team-leader-classification-pay',
    keyword: '위탁계약 팀장 팀원 근로자성 퇴직금',
    questionKeyword: '위탁계약 팀장·팀원으로 일했는데 사실상 근로자 같아요. 퇴직금 청구 가능한가요?',
    ctaKeyword: '위탁계약 팀장 팀원 근로자성 퇴직금 차액 청구 가능성 확인',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '위탁계약 팀장·팀원 퇴직금 — 근로자성 입증 5단계 | 로앤가이드',
      description:
        '위탁계약·도급 형식으로 팀장·팀원으로 일했지만 사실상 종속적 근로자였다면 퇴직금 청구가 가능합니다. 근로자성 입증 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"공장에서 \'팀장 위탁계약\'으로 5년 일했는데 사실은 회사 정규직과 똑같이 출퇴근 기록·재고관리·작업지시 받았어요. 퇴사 시 퇴직금을 요구하니 \'위탁계약이라 안 준다\'고 합니다. 청구 가능한가요?" 위탁계약·도급계약 등 형식상 비근로자 분류라도 실질이 임금을 목적으로 종속적 관계에서 사용자에게 근로를 제공한 경우 근로기준법상 근로자에 해당하고, 근로자퇴직급여 보장법에 따른 퇴직금 청구가 가능합니다(대법원 2018다229120, 서울중앙지법 2021가합564798 취지). 시효 3년 안에서 차액 청구 + 근로자성 다툼을 적극 검토할 가치가 큽니다.</p>',
    sections: [
      {
        title: '위탁·도급 형식 + 사실상 근로자성 — 인정 가능성이 강한 5가지 사정',
        content:
          '<p><strong style="color:#1e3a5f">대법원 일관 입장(2018다229120 취지)을 적용하면 다음 사정이 결합되면 근로자성 인정 가능성이 강화됩니다.</strong></p>\n<ul>\n<li><strong>① 업무 내용·재량 통제</strong> — 회사 정규직이 작성한 작업지시·계량지·견본에 따라 일했고 본인이 재량을 발휘할 여지가 거의 없었던 경우.</li>\n<li><strong>② 근무시간·휴일·근무장소 통제</strong> — 사실상 회사가 근무시간을 통제하고 휴일·휴가도 정규직과 동일하게 운영. 근무장소가 정해진 경우.</li>\n<li><strong>③ 도구·자원 회사 제공</strong> — 작업에 필요한 기계·설비·원자재를 모두 회사가 제공. 본인 비품·자원 부담 부재.</li>\n<li><strong>④ 보수의 근로 대가성</strong> — 작업량에 비례한 보수라도 매월 정기 지급되고 근로 자체에 대한 대상적 성격이 인정되는 경우. 고정급·기본급 부재라도 근로자성 인정 가능.</li>\n<li><strong>⑤ 독립 사업 영위 부재</strong> — 본인이 독립 사업자로서 다른 거래처·이윤 창출·손실 부담 가능성이 거의 없었던 정황.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 고정급·기본급 부재나 사업소득세 원천징수 같은 형식적 사정은 근로자성 부정의 결정적 요소가 아니라는 것이 대법원 일관 입장입니다(2018다229120). 종합 평가입니다.</blockquote>',
      },
      {
        title: '위탁·도급이 진짜 외주인 경우 — 근로자성 부정될 수 있는 사정',
        content:
          '<p><strong style="color:#1e3a5f">반대로 다음 사정이 강하면 근로자성이 부정되어 청구가 어려울 수 있습니다.</strong></p>\n<ul>\n<li><strong>독립 사업 영위</strong> — 본인 자원·도구·인력으로 작업하고 다른 거래처에서도 같은 일을 하는 경우.</li>\n<li><strong>실질적 재량</strong> — 작업 방법·시간·장소를 본인이 결정하고 회사 지시 통제 부재.</li>\n<li><strong>이윤·손실 부담</strong> — 본인 손익을 스스로 부담하고 재무적 위험을 감수한 정황.</li>\n<li><strong>제3자 고용·재위탁 가능성</strong> — 본인이 추가로 인력을 고용해 작업을 대행시킬 수 있었던 경우.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인 사안이 위 두 표(근로자성 인정 vs 부정) 중 어느 쪽이 우세한지 자료로 정리하면 청구 가능성 판단이 명확해집니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 위탁 근로자성 + 퇴직금 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">고용노동부 임금체불 진정 + 민사 절차를 참고하면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근로자성 입증 자료 정리</strong> (즉시) — 위탁계약서·도급계약서, 출퇴근 기록·근태 시스템, 작업지시·계량지·견본 자료, 회사 정규직이 작성한 업무 자료, 보수 명세서·통장 거래내역, 4대보험 가입 자료 또는 미가입 자료.</li>\n<li><strong>2단계 — 도구·자원 출처 정리</strong> (즉시) — 작업에 사용한 기계·설비·원자재가 회사 자산임을 입증하는 자료(자산 등록·반입 기록).</li>\n<li><strong>3단계 — 평균임금 산정 + 퇴직금 산출</strong> (즉시) — 직전 3개월 보수 + 정기 상여·수당 안분(3/12) 포함. 평균임금 × 30 × 근속연수 = 청구액. 시효 3년 안에서.</li>\n<li><strong>4단계 — 노동청 진정 또는 민사 청구</strong> (3년 이내) — 위탁 형식이라 노동청 진정 단계에서 근로자성 다툼이 길어지는 사례가 많아 곧바로 민사 청구가 일반적. 본 차액 + 연 20% 지연이자(근로자퇴직급여 보장법 제9조) 합산.</li>\n<li><strong>5단계 — 변호사·노무사 자문</strong> — 근로자성 다툼은 사안 복잡성이 커서 전문가 자문 권장. 같은 사업장 동료와 공동 청구도 검토 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 위탁계약 팀장·팀원 퇴직금, AI로 가능성을 점검하세요</strong></p>\n<p style="margin:0;font-size:0.95em">근로자성 입증 자료·평균임금 자료를 입력하면 청구 가능성과 절차를 확인할 수 있습니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">퇴직금 계산과 청구 절차, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<ul>\n<li>위탁계약서·도급계약서 또는 무계약 정황 자료</li>\n<li>최근 3년 보수 명세서·통장 거래내역 (정기성·근로 대가성 입증)</li>\n<li>출퇴근 기록·근태 시스템·근무표</li>\n<li>회사 정규직 작성 작업지시·계량지·견본·업무 자료 (재량 부재 입증)</li>\n<li>회사 자산·도구·원자재 반입·사용 기록 (도구 회사 제공 입증)</li>\n<li>4대보험 가입 자료 또는 미가입 자료 (둘 다 정황 자료)</li>\n<li>같은 사업장 동료의 정규직·위탁 비교 자료 (차별 동시 주장 시)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위탁 팀장·팀원 근로자성 인정과 퇴직금 의무',
        summary:
          '서울중앙지방법원 2021가합564798 사건(서울중앙지방법원, 2024.04.04 선고)에서 법원은 구두 제조·판매업을 영위하는 회사 공장에서 팀장·팀원으로 갑피·저부작업을 수행했고 회사가 팀장과 위탁계약을 체결한 외에 팀원과는 계약서를 작성하지 않은 사안에서, 작업이 회사 정규직 작성 계량지·견본에 따라 이뤄져 재량 여지가 거의 없었던 점, 근무시간이 사실상 회사에 통제되고 휴일·휴가가 정규직과 동일하게 운영된 점, 기계·설비·원자재를 모두 회사가 제공한 점, 작업량 비례 보수라도 매월 정기 지급되고 근로 대상적 성격이 있는 점 등을 종합해 임금을 목적으로 회사에 종속되어 근로를 제공한 근로기준법상 근로자에 해당하므로 회사는 재직기간에 상응하는 퇴직금을 지급할 의무가 있다고 판시했습니다.',
        takeaway: '위탁·도급 형식이라도 회사 정규직과 사실상 동일 운영된 정황이 입증되면 근로자성 + 퇴직금 청구가 가능한 사례가 있어, 작업 자료·근태 자료·도구 자산 자료를 함께 정리해 다툴 가치가 큽니다.',
      },
    ],
    faq: [
      {
        question: '계약서가 없는데도 다툴 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 무계약 정황 자체가 회사가 형식 분류만 한 정황으로 평가될 여지가 있고, 출퇴근·작업 자료로 종속적 근로 실질을 직접 입증할 수 있어요.',
      },
      {
        question: '사업소득세를 원천징수받았어요. 그래도 근로자인가요?',
        answer:
          '<strong>사업소득세 원천징수는 형식 분류로 결정적 요소가 아닙니다(대법원 2018다229120 취지).</strong> 종속적 근로 실질이 우세하면 근로자성이 인정될 여지가 있어요.',
      },
      {
        question: '4대보험이 전혀 없는데 가능한가요?',
        answer:
          '<strong>4대보험 미가입은 회사 측 형식 분류 결과일 뿐 결정적 요소가 아닙니다.</strong> 다른 종속적 정황으로 다툴 수 있고, 인정 시 사후 가입·보험료 추징 검토도 함께 가능해요.',
      },
      {
        question: '같은 회사 다른 위탁자들과 함께 청구할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 같은 사업장 동료와 공동 원고로 민사 청구하면 입증 자료 공유·소송비 절감 효과가 있어요. 변호사 자문으로 공동 청구 전략 검토 가능합니다.',
      },
      {
        question: '근로자성 다툼이 길어지면 시효가 도과하지 않나요?',
        answer:
          '<strong>퇴직금 청구권 시효는 3년이라 시한 관리가 중요합니다.</strong> 시효 임박 시 민사 소장을 먼저 접수해 시효 중단 시키고 본격 다툼을 진행하는 것이 안전해요.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '프리랜서 근로자성 퇴직금', href: '/guide/retirement/retirement-freelancer-eligibility' },
      { label: '도급·외주 사실상 사용자 책임', href: '/guide/retirement/retirement-outsourcing-true-employer-liability' },
      { label: '파견 근로자 퇴직금 사용자', href: '/guide/retirement/retirement-dispatch-worker-employer' },
      { label: '비정규직 정규 전환 통산', href: '/guide/retirement/retirement-non-regular-converted-merge' },
      { label: '평균임금 다툼 차액 청구', href: '/guide/retirement/retirement-average-wage-dispute' },
    ],
  },
];
