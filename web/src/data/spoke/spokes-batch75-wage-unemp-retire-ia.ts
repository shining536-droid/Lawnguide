import { SpokePage } from '../spoke-pages';

// batch75 wage / unemployment / retirement / industrial-accident1 — 6개 (2026-05-23)
//
// 고유 존재 이유:
// 1. 수습기간 최저시급 90% 감액 미정산 — 일반 임금체불 류와 분기. 여기는 '수습 감액 적용 요건(1년 이상·동의·90% 한도) + 정직원 전환 후 누락 정산' 트랙. 최저임금법 제5조 수습 감액 요건 결합.
// 2. 해외파견수당 미지급 — 일반 임금 미지급 류와 분기. 여기는 '해외 파견 일비·체재비·위험수당 + 단체협약·취업규칙 + 귀국 후 청구' 트랙. 근기법 제43조 + 해외파견 규정 결합.
// 3. 외화 임금 환차손 떠넘기기 — 일반 임금 변동 류와 분기. 여기는 'USD 임금 약정 + 환율 일방 적용 + 통화의 강제력' 트랙. 근기법 제43조 임금 지급 원칙 + 통화 강제력 결합.
// 4. 배우자 지역이동 동반 사직 정당사유 — 일반 자발 퇴사 류와 분기. 여기는 '배우자 발령 + 동거 위한 거소 이전 + 통근 불가' 트랙. 고용보험법 시행규칙 제101조 [별표 2] 정당 사유 결합.
// 5. 단기 계약 연속 체결 퇴직금 합산 — 일반 퇴직금 청구 류와 분기. 여기는 '11개월 단기 5회 반복 + 매번 신규채용 명목 + 합산 청구' 트랙. 근퇴법 제4조 + 단절·재입사 평가 결합.
// 6. 업무 스트레스 정신질환 산재 — 일반 산재 류와 분기. 여기는 '야근·과중 업무 + 우울증·번아웃 + 업무상질병판정위' 트랙. 산재보험법 제37조 + 정신질환 인정 기준 결합.

export const spokesBatch75WageUnempRetireIa: SpokePage[] = [
  // ─── 1. wage-trial-period-reduced-pay-illegal-track ───
  {
    domain: 'wage',
    slug: 'wage-trial-period-reduced-pay-illegal-track',
    keyword: '수습기간 임금 삭감 위법',
    questionKeyword: '수습 3개월 동안 최저시급 90%만 받았는데, 정직원 전환 후 1년이 지나도록 누락된 차액을 정산받지 못했어요.',
    ctaKeyword: '수습 임금 차액 청구 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '수습기간 임금 삭감 위법 — 5단계 감액 요건 점검 | 로앤가이드',
      description:
        '수습 3개월 동안 최저시급 90%만 받고 정직원 전환 후에도 차액 미정산이라면 최저임금법 제5조 감액 요건 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"서비스업 회사에 입사하면서 \'수습 3개월 동안 최저시급의 90%만 지급\' 조항이 들어간 근로계약서에 서명했습니다. 3개월이 지나 정직원 전환됐고 그 후 1년 이상 근무했지만, 회사는 수습 기간 동안 누락됐던 임금 차액(약 60만 원)을 한 번도 정산해주지 않았어요. 본인은 입사 당시 \'법적으로 가능한 감액이라 어쩔 수 없다\'는 설명을 들었지만, 알아보니 최저임금법 제5조 수습 감액은 \'1년 이상 근로계약 + 단순 노무 종사자가 아닐 것 + 90% 이내\' 요건을 모두 충족해야 가능한 영역이라고 해요. 본인 계약서엔 \'1년 이상\' 명시가 없었고 단순 서빙·캐셔 업무라 단순 노무 가능성도 검토 필요한 상태입니다. 차액 청구 시 회사는 \'동의했지 않냐\'·\'이미 시효 지났다\'고 주장할 가능성이 있어요." 최저임금법 제5조 제2항은 수습 사용 중인 근로자에 대해 시간급 최저임금액의 90% 지급을 허용하지만 ① 1년 이상 근로계약 ② 단순 노무 종사자가 아닐 것 ③ 수습 기간 3개월 이내라는 요건을 모두 충족해야 적법한 영역이고, 요건 미충족 시 90% 감액 자체가 위법 평가 가능한 트랙입니다. 임금 청구 시효는 3년, 정직원 전환 후 누락 차액도 청구 가능 영역. 피해자라면 ① 계약기간 ② 단순 노무 평가 ③ 동의 적법성 ④ 차액 청구 ⑤ 시효 관리 5중 트랙이 가능한 영역. 대응은 ① 기간 ② 노무 ③ 동의 ④ 청구 ⑤ 시효 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 수습기간 임금 삭감 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 기간·노무·동의·청구·시효 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 계약기간 요건</strong> — 1년 이상 근로계약 명시 여부 평가.</li>\n<li><strong>② 단순 노무 종사자 평가</strong> — 서빙·캐셔·청소 등 단순 노무는 감액 적용 제외 영역.</li>\n<li><strong>③ 동의의 적법성</strong> — 강요·일방 통보 시 동의 효력 다툼.</li>\n<li><strong>④ 차액 청구 (시효 3년)</strong> — 수습 기간 미지급 임금 차액 청구.</li>\n<li><strong>⑤ 시효 관리</strong> — 임금 청구 시효 3년·정직원 전환 후도 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 수습 90% 감액은 \'1년 이상 계약 + 단순 노무 아님 + 3개월 이내\' 3요건 충족 시에만 적법 영역. 단순 노무 종사자에 대한 감액은 위법 평가 가능 트랙. 임금 청구 시효 3년 관리.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·청구·정산 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약서·임금명세서 보존 (즉시)</strong> — 수습 조항·계약기간·실 수령액 자료 확보.</li>\n<li><strong>2단계 — 업무 내용 자료 (1~2주)</strong> — 서빙·캐셔 등 단순 노무 입증 자료(매뉴얼·근태).</li>\n<li><strong>3단계 — 차액 산정 (2주)</strong> — 수습 기간 최저시급 100% 기준 차액 계산.</li>\n<li><strong>4단계 — 노동부 진정 또는 회사 청구 (시효 3년 내)</strong> — 진정 또는 내용증명 발송.</li>\n<li><strong>5단계 — 민사 소액 청구 또는 합의</strong> — 미정산 시 소액 사건 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">수습 임금 차액 청구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 기간·노무·동의 갈래입니다.</strong></p>\n<ul>\n<li><strong>근로계약서·수습 조항</strong></li>\n<li><strong>임금명세서·계좌 입금 내역 (수습 기간)</strong></li>\n<li><strong>업무 매뉴얼·근태 기록 (단순 노무 입증)</strong></li>\n<li><strong>정직원 전환 통지서·발령 자료</strong></li>\n<li><strong>해당 연도 최저임금 고시 자료</strong></li>\n<li><strong>차액 산정표 (월별 누락분)</strong></li>\n<li><strong>회사 회신·내용증명 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 수습 감액 적용 제외 \'단순 노무 종사자\'는 고용노동부 고시로 정해진 직종(매장 판매·배달·청소·주방보조 등). 본인 업무가 해당 직종이면 90% 감액 자체가 위법 평가 가능 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>계약기간 1년 이상</strong> — 계약서 명시 + 묵시적 갱신 평가.</li>\n<li><strong>단순 노무 종사자</strong> — 고용노동부 고시 직종 해당 여부.</li>\n<li><strong>수습 기간 3개월 초과</strong> — 3개월 초과 후엔 100% 지급 의무.</li>\n<li><strong>동의의 적법성</strong> — 강요·일방 통보 시 동의 효력 다툼.</li>\n<li><strong>시효 관리</strong> — 임금 시효 3년·소멸 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (임금체불 신고)</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 평균임금 산정 기초 임금의 의미와 근로 대상성',
        summary:
          '대법원 2021다248299(대법원, 2026.01.29 선고) 영역에서 법원은 평균임금 산정 기초가 되는 임금의 의미와 근로 대상성 판단 기준 평가가 결정 사정이라고 본 사례 흐름이 있고, 수습 기간 90% 감액의 적법성 평가에서도 임금의 근로 대상성·계속성·정기성과 함께 최저임금법 제5조 요건 충족 여부를 종합 평가하여야 합니다.',
        takeaway: '수습 감액은 1년 이상 계약 + 단순 노무 아님 요건 충족 시에만 적법 영역 — 누락 차액 청구 가능 트랙.',
      },
    ],
    faq: [
      {
        question: '수습 기간 90% 감액 자체가 위법인가요?',
        answer:
          '<strong>3요건(1년 이상·단순 노무 아님·3개월 이내) 충족 시에만 적법한 영역입니다.</strong> 요건 미충족 시 위법 평가.',
      },
      {
        question: '계약서에 \'수습 90%\'를 동의하고 서명했는데도 청구 가능한가요?',
        answer:
          '<strong>법령 위반 약정은 무효 영역입니다.</strong> 동의했어도 법적 요건 미충족이면 차액 청구 가능.',
      },
      {
        question: '단순 노무 종사자인지 어떻게 확인하나요?',
        answer:
          '<strong>고용노동부 고시 직종 해당 여부로 평가합니다.</strong> 매장 판매·배달·청소·주방보조 등이 해당 영역.',
      },
      {
        question: '정직원 전환 후 1년이 지났는데 시효는 어떻게 되나요?',
        answer:
          '<strong>임금 시효 3년 영역입니다.</strong> 수습 종료 후 3년 내 청구 가능.',
      },
      {
        question: '회사가 \'이미 다 정산했다\'고 주장하면 어떻게 하나요?',
        answer:
          '<strong>임금명세서·입금 내역으로 입증할 수 있는 영역입니다.</strong> 노동부 진정 + 임금대장 열람.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '체불임금 신고 준비서류', href: '/guide/wage/unpaid-wage-complaint-docs' },
      { label: '최저임금 위반 신고', href: '/guide/wage/minimum-wage-violation-complaint' },
      { label: '체불임금 신고 절차·기간', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '연장근로 미지급 청구', href: '/guide/wage/wage-overtime-unpaid-claim' },
      { label: '퇴사 후 임금 청구', href: '/guide/wage/unpaid-salary-after-resignation' },
    ],
  },

  // ─── 2. wage-overseas-dispatch-allowance-unpaid-track ───
  {
    domain: 'wage',
    slug: 'wage-overseas-dispatch-allowance-unpaid-track',
    keyword: '해외파견수당 미지급',
    questionKeyword: '베트남·중국 해외 프로젝트에 2년 파견됐는데 일비·체재비·위험수당이 미지급 상태예요. 귀국 후 청구 가능한가요?',
    ctaKeyword: '해외파견수당 청구 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외파견수당 미지급 청구 — 5단계 단협·취규 점검 | 로앤가이드',
      description:
        '베트남·중국 해외 파견 일비·체재비·위험수당 미지급이라면 단체협약·취업규칙 기반 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중견 건설·플랜트 회사 근로자입니다. 베트남 호치민과 중국 칭다오 해외 프로젝트에 합계 2년간 파견 근무했는데, 회사는 국내 기본급만 지급하고 해외 파견에 따른 일비(체재비)·위험수당·휴일 근무수당을 일체 지급하지 않았어요. 본인은 파견 발령 당시 \'해외 파견 규정\'·\'단체협약\'을 확인했고 거기엔 일비 1일 5만 원, 위험지역 수당 월 30만 원이 명시돼 있었습니다. 회사는 \'프로젝트 적자\'·\'본인이 이미 동의했다\'를 명목으로 미지급을 정당화하고, 본인은 귀국 후 인사팀에 청구했으나 \'시효 도과\'·\'자료 부재\'로 거부당했어요. 파견 기간 동안의 출입국 기록·법인카드 사용 내역·현지 임차 영수증은 본인이 보관 중입니다." 근로기준법 제43조는 임금 전액·정기 지급 원칙을 정하고, 단체협약·취업규칙·근로계약에 명시된 수당은 임금에 해당하여 미지급 시 임금체불로 평가 가능한 영역입니다. 해외 파견 일비·체재비·위험수당이 단협·취규에 명시돼 있고 본인이 그 요건을 충족했다면 청구 가능 트랙. 임금 시효 3년, 귀국 후에도 청구 가능 영역. 피해자라면 ① 수당 명시 ② 요건 충족 ③ 입증 자료 ④ 청구·진정 ⑤ 시효 관리 5중 트랙이 가능한 영역. 대응은 ① 명시 ② 요건 ③ 입증 ④ 청구 ⑤ 시효 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 해외파견수당 청구 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 명시·요건·입증·청구·시효 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 수당 명시 근거</strong> — 단체협약·취업규칙·해외 파견 규정 명시 여부.</li>\n<li><strong>② 요건 충족</strong> — 파견 기간·지역·직무 요건 충족 평가.</li>\n<li><strong>③ 입증 자료</strong> — 출입국 기록·법인카드·임차 영수증.</li>\n<li><strong>④ 청구·진정 (시효 3년)</strong> — 회사 청구 또는 노동부 진정.</li>\n<li><strong>⑤ 시효 관리</strong> — 임금 청구 시효 3년·소멸 도과 위험.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단협·취규 명시 수당은 임금성 영역. 회사 일방의 \'적자\'·\'동의\' 주장으로 면제되지 않는 영역. 시효 3년 내 청구 + 입증 자료 확보가 결정 사정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·청구·진정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단협·취규·파견 규정 확보 (즉시)</strong> — 인사팀·노동조합 통해 사본 확보.</li>\n<li><strong>2단계 — 파견 기간 입증 자료 (1~2주)</strong> — 출입국 기록·항공권·법인카드·현지 임차 영수증.</li>\n<li><strong>3단계 — 수당 차액 산정 (2~3주)</strong> — 일비·위험수당·휴일수당 월별 계산.</li>\n<li><strong>4단계 — 회사 청구 또는 노동부 진정 (시효 3년 내)</strong> — 내용증명 + 노동부 진정 병행.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외파견수당 청구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 명시·요건·입증 갈래입니다.</strong></p>\n<ul>\n<li><strong>단체협약·취업규칙·해외 파견 규정 사본</strong></li>\n<li><strong>파견 발령 통지서·인사 발령 자료</strong></li>\n<li><strong>출입국 기록 (출국·입국 일자)</strong></li>\n<li><strong>항공권·법인카드 사용 내역</strong></li>\n<li><strong>현지 임차 계약·영수증</strong></li>\n<li><strong>월별 임금명세서·입금 내역</strong></li>\n<li><strong>회사 회신·내용증명·진정서 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 출입국 기록은 법무부 출입국·외국인청에서 본인 발급 가능. 파견 기간·실 체류 일수 입증의 핵심 자료. 해외 체류 중 발생한 휴일·연장근로 자료 보존도 결정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>수당 명시 근거</strong> — 단협·취규·파견 규정의 명시 여부.</li>\n<li><strong>요건 충족</strong> — 파견 기간·지역·직무 요건 충족 평가.</li>\n<li><strong>회사의 \'적자\' 주장</strong> — 임금 면제 사유 부재 평가.</li>\n<li><strong>시효 관리</strong> — 임금 청구 시효 3년·소멸 위험.</li>\n<li><strong>해외 휴일·연장근로</strong> — 별도 청구 가능 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (임금체불 신고)</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기업 관행의 근로계약 편입 요건',
        summary:
          '대법원 2022다255454(대법원, 2026.01.29 선고) 영역에서 법원은 기업의 내부에 존재하는 특정의 관행이 근로계약의 내용을 이루고 있다고 인정하기 위한 요건을 제시하면서, 단체협약·취업규칙·관행 등에 명시된 수당이 임금에 해당하는지 여부는 그 지급 기준·계속성·정기성·일률성·근로 대가성 등을 종합 평가하여 판단하여야 한다고 본 사례 흐름이 있고, 해외 파견 일비·체재비·위험수당의 임금성 평가에도 동일한 종합 평가 기준이 적용됩니다.',
        takeaway: '단협·취규 명시 수당은 임금성 평가 영역 — 미지급 시 임금체불로 청구 가능 트랙.',
      },
    ],
    faq: [
      {
        question: '해외 파견 일비도 임금에 해당하나요?',
        answer:
          '<strong>단협·취규에 명시되고 정기·계속 지급되면 임금성 영역입니다.</strong> 종합 평가 결정.',
      },
      {
        question: '회사가 \'프로젝트 적자\'를 이유로 미지급해요',
        answer:
          '<strong>적자는 임금 면제 사유가 아닌 영역입니다.</strong> 임금 전액·정기 지급 원칙 위반.',
      },
      {
        question: '파견 동의서에 \'수당 포기\'를 명시했어요',
        answer:
          '<strong>임금 포기 약정은 무효 평가 가능 영역입니다.</strong> 단협·취규 명시 수당은 포기 불가.',
      },
      {
        question: '귀국 후 1년 지났는데 청구 가능한가요?',
        answer:
          '<strong>임금 시효 3년 영역입니다.</strong> 3년 내 청구 가능, 입증 자료 확보 우선.',
      },
      {
        question: '해외에서 한 휴일·연장근로 수당도 청구되나요?',
        answer:
          '<strong>별도 청구 가능한 영역입니다.</strong> 출근부·근태 기록 자료 보존.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '체불임금 신고 준비서류', href: '/guide/wage/unpaid-wage-complaint-docs' },
      { label: '최저임금 위반 신고', href: '/guide/wage/minimum-wage-violation-complaint' },
      { label: '체불임금 신고 절차·기간', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '연장근로 미지급 청구', href: '/guide/wage/wage-overtime-unpaid-claim' },
      { label: '퇴사 후 임금 청구', href: '/guide/wage/unpaid-salary-after-resignation' },
    ],
  },

  // ─── 3. wage-foreign-currency-payment-exchange-loss-track ───
  {
    domain: 'wage',
    slug: 'wage-foreign-currency-payment-exchange-loss-track',
    keyword: '외화 임금 환차손 떠넘기기',
    questionKeyword: '계약서에 USD로 임금 지급 약정이 있는데, 회사가 환율 하락 시 \'전 거래일 매매기준율\' 일방 적용해서 실 수령액이 줄었어요.',
    ctaKeyword: '외화 임금 환차손 청구 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '외화 임금 환차손 청구 — 5단계 통화 강제력 점검 | 로앤가이드',
      description:
        'USD 임금 약정인데 회사가 환율 일방 적용으로 실 수령액 감소시켰다면 통화 강제력·근기법 제43조 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"외국계 IT 기업 한국 지사에서 근무하는 근로자입니다. 본사가 미국 회사여서 근로계약서엔 연봉이 \'USD 80,000\' 기준으로 명시되고, \'매월 25일 환율 적용해 원화 환산 후 지급\'으로 약정돼 있었습니다. 그런데 회사는 환율 하락 추세가 시작된 후부터 일방적으로 \'전 거래일 매매기준율\' 또는 \'가장 낮은 매매기준율\'을 적용하기 시작했고, 본인 실 수령액이 월 30~50만 원 감소했어요. 회사는 \'환율 변동 리스크는 근로자가 부담\'이라는 새 사규를 일방 게시했고, 본인은 동의한 적이 없습니다. 약 1년 누적 차액이 500만 원에 이르고, 환차익이 있을 땐 회사가 가장 낮은 환율을 골라 적용하는 식이었어요." 근로기준법 제43조는 임금 통화 지급 원칙(원칙적으로 강제 통용력 있는 통화 = 원화)을 정하고, 외화 표시 약정이라도 실제 지급은 원화 환산이 일반적입니다. 환율 적용 기준이 명확하지 않거나 회사가 일방적으로 불리한 환율을 적용해 실질 임금을 감액했다면 임금 일방 감액·임금체불로 평가 가능한 영역. 사규 일방 변경은 근로자 동의 없이는 불리한 변경 효력 다툼 가능. 피해자라면 ① 환율 적용 기준 ② 일방 변경 ③ 차액 누적 ④ 동의 절차 ⑤ 청구·진정 5중 트랙이 가능한 영역. 대응은 ① 기준 ② 변경 ③ 차액 ④ 동의 ⑤ 청구 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 외화 임금 환차손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 기준·변경·차액·동의·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 환율 적용 기준</strong> — 계약서 명시 기준 vs 실제 적용 기준 일치 평가.</li>\n<li><strong>② 일방 변경</strong> — 회사 일방의 사규·기준 변경이 근로자 동의를 받았는지.</li>\n<li><strong>③ 차액 누적</strong> — 월별 적정 환율 적용 시 실 수령액 차이.</li>\n<li><strong>④ 동의 절차</strong> — 취업규칙 불이익 변경 절차(과반수 노조 또는 근로자 동의).</li>\n<li><strong>⑤ 청구·진정 (시효 3년)</strong> — 임금체불 진정 + 차액 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임금은 원화 강제 통용 통화로 지급되는 영역. 외화 약정의 원화 환산 시 환율 적용 기준이 일방적·불리하게 변경되면 임금 일방 감액 평가 가능 트랙. 취업규칙 불이익 변경은 근로자 과반수 동의 필요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·산정·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약서·사규 비교 (즉시)</strong> — 원래 환율 적용 기준 vs 변경된 기준 비교.</li>\n<li><strong>2단계 — 월별 적용 환율 자료 (1~2주)</strong> — 회사 적용 환율 vs 매월 25일 매매기준율 비교.</li>\n<li><strong>3단계 — 차액 산정 (2~3주)</strong> — 월별 누적 차액 계산.</li>\n<li><strong>4단계 — 회사 청구 + 노동부 진정 (시효 3년 내)</strong> — 내용증명 + 진정 병행.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 임금체불 대응 순서, AI로 바로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">외화 임금 환차손 청구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 기준·변경·차액 갈래입니다.</strong></p>\n<ul>\n<li><strong>USD 표시 근로계약서</strong></li>\n<li><strong>회사 환율 적용 사규·메일·게시 자료</strong></li>\n<li><strong>월별 임금명세서·환율 적용 명세</strong></li>\n<li><strong>한국은행·외환은행 매매기준율 자료</strong></li>\n<li><strong>월별 차액 산정표</strong></li>\n<li><strong>취업규칙 변경 절차 자료 (동의·과반수 노조 의견)</strong></li>\n<li><strong>회사 회신·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 매매기준율은 한국은행·외환은행 공시 자료로 객관 확인 가능. 회사가 \'가장 낮은 환율\'을 일방 선택해 적용한 패턴이 입증되면 임금 일방 감액 평가가 더 분명한 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>환율 적용 기준</strong> — 계약 명시 vs 실제 적용 일치 평가.</li>\n<li><strong>사규 일방 변경</strong> — 취업규칙 불이익 변경 절차 위반 평가.</li>\n<li><strong>환차익·환차손 비대칭</strong> — 회사가 유리한 환율만 골라 적용한 패턴.</li>\n<li><strong>통화 강제력</strong> — 원화 지급 원칙 + 외화 환산 기준 명시.</li>\n<li><strong>시효 관리</strong> — 임금 청구 시효 3년·소멸 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (임금체불 신고)</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 평균임금 산정 기초 임금의 의미와 근로 대상성',
        summary:
          '대법원 2021다248299(대법원, 2026.01.29 선고) 영역에서 법원은 평균임금 산정 기초가 되는 임금의 의미와 근로 대상성 판단 기준 평가가 결정 사정이라고 본 사례 흐름이 있고, 외화 표시 임금의 원화 환산·환율 적용 기준 평가에서도 약정에 따른 적정 환율 적용과 회사의 일방 변경 여부가 임금성·임금체불 평가의 결정 사정이 됩니다.',
        takeaway: '환율 일방 적용으로 인한 실 수령액 감소는 임금 일방 감액 평가 가능 영역 — 차액 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '외화로 임금을 받는 계약 자체가 위법인가요?',
        answer:
          '<strong>외화 표시 약정 자체는 가능하지만 지급은 원화 환산이 원칙 영역입니다.</strong> 환율 기준 명시 필수.',
      },
      {
        question: '회사가 \'환율 변동은 본인 부담\' 사규를 게시했어요',
        answer:
          '<strong>취업규칙 불이익 변경은 근로자 과반수 동의 필요 영역입니다.</strong> 동의 부재 시 효력 다툼.',
      },
      {
        question: '매월 25일 매매기준율 적용이 맞나요?',
        answer:
          '<strong>계약서 명시 기준이 우선 영역입니다.</strong> 명시 부재 시 합리적 기준(매월 지급일 매매기준율) 적용.',
      },
      {
        question: '환차익이 있을 땐 회사가 가장 낮은 환율을 골랐어요',
        answer:
          '<strong>일방 유리한 환율 선택은 신의칙 위반 평가 가능 영역입니다.</strong> 차액 청구 + 합의 협상.',
      },
      {
        question: '1년 누적 차액이 500만 원인데 어떻게 청구하나요?',
        answer:
          '<strong>월별 차액 산정 후 회사 청구 + 노동부 진정 병행 영역입니다.</strong> 시효 3년 관리.',
      },
    ],
    cta: { text: '임금체불 대응 순서, AI로 바로 정리하기', link: '/chat?domain=wage' },
    internalLinks: [
      { label: '체불임금 신고 준비서류', href: '/guide/wage/unpaid-wage-complaint-docs' },
      { label: '최저임금 위반 신고', href: '/guide/wage/minimum-wage-violation-complaint' },
      { label: '체불임금 신고 절차·기간', href: '/guide/wage/unpaid-wage-report-procedure-timeline' },
      { label: '연장근로 미지급 청구', href: '/guide/wage/wage-overtime-unpaid-claim' },
      { label: '퇴사 후 임금 청구', href: '/guide/wage/unpaid-salary-after-resignation' },
    ],
  },

  // ─── 4. unemployment-spouse-relocation-quit-just-cause-track ───
  {
    domain: 'unemployment',
    slug: 'unemployment-spouse-relocation-quit-just-cause-track',
    keyword: '배우자 지역이동 동반 사직 정당사유',
    questionKeyword: '배우자가 부산에서 서울로 발령났는데, 통근 불가로 본인이 퇴사했어요. 실업급여 받을 수 있나요?',
    ctaKeyword: '배우자 이주 사직 실업급여 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '배우자 이주 동반 사직 실업급여 — 5단계 정당사유 점검 | 로앤가이드',
      description:
        '배우자 발령으로 부산→서울 이주 + 통근 불가로 자발 퇴사 시 실업급여 수급 자격 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"부산 소재 중견기업에서 5년간 근무하던 직장인입니다. 배우자가 본사 인사발령으로 서울 본사로 이동하게 됐고, 부부가 별거하지 않기 위해 본인이 서울로 동반 이주를 결정했습니다. 부산에서 서울까지 매일 통근은 KTX 왕복 5시간 + 비용 부담 + 자녀 양육으로 사실상 불가능했고, 본인은 회사에 사정을 설명한 후 사직서를 제출했어요. 고용보험 가입 6년 + 피보험단위기간 충분 + 본인의 객관적 귀책 사유 없음 상태입니다. 다만 본인이 \'사직서\'를 제출한 형식이 자발적 퇴사라 실업급여 수급 자격이 거부될지 걱정이고, \'정당한 사유 있는 자발적 이직\'으로 인정받을 수 있는지 확인하고 싶어요. 배우자 발령 공문·이주 후 주민등록 이전 자료·자녀 학교 이전 자료는 모두 보관 중입니다." 고용보험법 시행규칙 제101조 [별표 2]는 \'정당한 사유 있는 자발적 이직\' 사유로 \'배우자나 부양해야 할 친족과의 동거를 위해 거소 이전\'을 명시하고 있고, 통근 불가 + 동거 필요성 입증 시 수급 자격이 인정되는 영역입니다. 본인 귀책 부재 + 통근 불가 + 동거 위한 이주 결합 시 비자발적 이직과 동등하게 평가되는 트랙. 피해자라면 ① 배우자 발령 ② 통근 불가 ③ 동거 필요 ④ 거소 이전 ⑤ 수급 신청 5중 트랙이 가능한 영역. 대응은 ① 발령 ② 통근 ③ 동거 ④ 이전 ⑤ 신청 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 배우자 이주 동반 사직 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 발령·통근·동거·이전·신청 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 배우자 발령 사실</strong> — 인사발령 공문·본사 발령장 자료.</li>\n<li><strong>② 통근 불가능</strong> — 통근 시간·거리·비용으로 사실상 불가능 입증.</li>\n<li><strong>③ 동거 필요성</strong> — 부부 동거·자녀 양육의 객관적 필요성.</li>\n<li><strong>④ 거소 이전</strong> — 주민등록 이전·자녀 학교 이전 등 실제 이주.</li>\n<li><strong>⑤ 실업급여 수급 신청</strong> — 워크넷 등록 + 고용센터 신청.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 시행규칙 [별표 2] \'배우자·부양 친족 동거 위한 거소 이전\'은 정당한 자발적 이직 사유 영역. 통근 불가 + 실제 이주 입증 시 수급 자격 인정 가능 트랙. 워크넷 등록·재취업 의지 입증 결합 결정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신청 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·신청·인정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 배우자 발령 자료 확보 (즉시)</strong> — 인사발령 공문·본사 발령장.</li>\n<li><strong>2단계 — 통근 불가 입증 자료 (1~2주)</strong> — 통근 시간·거리·비용 산정 자료·자녀 양육 정황.</li>\n<li><strong>3단계 — 거소 이전 자료 (1개월 내)</strong> — 주민등록 이전·자녀 학교 이전·이사 영수증.</li>\n<li><strong>4단계 — 실업급여 신청 + 워크넷 등록 (이직 후 1개월 내)</strong> — 고용센터 방문 + 신청서 제출.</li>\n<li><strong>5단계 — 실업인정 회차별 활동 신고</strong> — 재취업 활동·구직 활동 신고.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 실업급여 받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">배우자 이주 동반 사직 실업급여 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 발령·통근·이전 갈래입니다.</strong></p>\n<ul>\n<li><strong>배우자 인사발령 공문·본사 발령장</strong></li>\n<li><strong>본인 사직서·이직확인서</strong></li>\n<li><strong>통근 시간·거리·비용 산정 자료 (KTX·고속버스 시간표)</strong></li>\n<li><strong>주민등록등본 (이주 전·후)</strong></li>\n<li><strong>자녀 학교 이전 자료 (전학 증명)</strong></li>\n<li><strong>이사 영수증·임대차 계약서</strong></li>\n<li><strong>워크넷 등록 확인서·재취업 활동 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 통근 불가 입증은 단순 \'멀다\' 주장보다 객관 자료(왕복 시간·교통비·자녀 양육 시간) 산정이 결정. 주민등록 이전·자녀 학교 이전이 실제 이주 입증의 강력한 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>배우자 발령 사실</strong> — 회사 발령장·공문의 객관성.</li>\n<li><strong>통근 불가능</strong> — 시간·거리·비용·양육 종합 평가.</li>\n<li><strong>동거 필요성</strong> — 부부 동거·자녀 양육 객관 필요.</li>\n<li><strong>거소 이전</strong> — 실제 이주·주민등록·학교 이전 자료.</li>\n<li><strong>수급 자격 인정</strong> — 고용센터 판정·심사위 결정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부·고용보험 1350</strong></li>\n<li><strong>고용보험심사위원회 (수급자격 불인정 시 심사 청구)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 실업급여 수급자격 불인정 처분 영역',
        summary:
          '고용보험심사위원회 2023재결 제44호(2023.06.21) 영역에서 위원회는 실업급여 수급자격 불인정 처분 취소 청구 사건에서, 자발적 이직이라도 시행규칙 [별표 2]에 명시된 정당한 사유에 해당하면 수급 자격이 인정되어야 하고, 배우자·부양 친족 동거를 위한 거소 이전 사유는 객관 자료로 통근 불가능과 실제 이주가 입증되면 정당한 사유 평가가 가능하다고 본 사례 흐름이 있습니다.',
        takeaway: '배우자 발령 + 통근 불가 + 실제 이주 결합 시 정당한 자발적 이직 인정 영역 — 신청·심사 청구 권장.',
      },
    ],
    faq: [
      {
        question: '본인이 사직서를 냈는데도 실업급여 받을 수 있나요?',
        answer:
          '<strong>정당한 사유 있는 자발적 이직은 수급 자격이 인정되는 영역입니다.</strong> 시행규칙 [별표 2] 사유 해당 평가.',
      },
      {
        question: '통근이 \'사실상\' 불가능이라는 걸 어떻게 입증하나요?',
        answer:
          '<strong>통근 시간·거리·비용·자녀 양육 종합 자료로 입증 가능 영역입니다.</strong> 왕복 4~5시간·고비용이면 강한 사정.',
      },
      {
        question: '주민등록 이전·자녀 전학이 꼭 필요한가요?',
        answer:
          '<strong>실제 이주의 객관 입증 자료 영역입니다.</strong> 없으면 \'동거 위한 거소 이전\' 입증 약화.',
      },
      {
        question: '고용센터에서 수급자격 불인정이 나오면 어떻게 하나요?',
        answer:
          '<strong>고용보험심사위원회 심사 청구 가능 영역입니다.</strong> 결정 송달 후 90일 내 청구.',
      },
      {
        question: '맞벌이·배우자가 회사 발령 거부가 어려운 직무인가요?',
        answer:
          '<strong>회사 발령의 강제성·거부 곤란성도 평가 사정 영역입니다.</strong> 회사 인사 규정·관행 자료 보존.',
      },
    ],
    cta: { text: '실업급여 받을 수 있는지 AI로 점검하기', link: '/chat?domain=unemployment' },
    internalLinks: [
      { label: '실업급여 수급 요건', href: '/guide/unemployment/unemployment-benefit-requirements' },
      { label: '인정되는 구직활동 유형', href: '/guide/unemployment/unemployment-job-search-recognized-types' },
      { label: '수급 중 부수입·근로', href: '/guide/unemployment/unemployment-side-income-during-benefit' },
      { label: '실업급여 신청 절차', href: '/guide/unemployment/unemployment-application-process' },
      { label: '자발적 퇴사 수급 자격', href: '/guide/unemployment/voluntary-resignation-eligibility' },
    ],
  },

  // ─── 5. retirement-fixed-term-contract-aggregation-track ───
  {
    domain: 'retirement',
    slug: 'retirement-fixed-term-contract-aggregation-track',
    keyword: '단기 계약 연속 체결 퇴직금',
    questionKeyword: '11개월 단기계약 5회 반복 체결했는데, 회사가 \'매번 신규채용\' 명목으로 퇴직금을 안 줘요. 합산 청구 가능한가요?',
    ctaKeyword: '단기 계약 퇴직금 합산 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '단기 계약 퇴직금 합산 청구 — 5단계 단절·재입사 평가 | 로앤가이드',
      description:
        '11개월 단기계약 반복 + 매번 신규채용 명목으로 퇴직금 미지급이라면 근속 합산·단절 평가 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"교육기관에서 강사로 5년간 근무한 근로자입니다. 회사는 \'학년 단위 운영\'을 명목으로 매년 11개월 단기계약을 체결하고 1개월 공백(7~8월 방학 또는 1~2월 학년 종료) 후 다시 신규 계약을 5회 반복했어요. 본인은 매번 같은 강의실·동일 학생·동일 업무·동일 책임자 지시 하에 근무했고, 사실상 단절 없는 연속 근로였습니다. 그런데 회사는 5년 차에 \'계약 만료·신규채용 미진행\'을 명목으로 본인의 재계약을 거부했고, 퇴직금은 \'매 계약 1년 미만이라 지급 의무 없음\'을 이유로 한 푼도 지급하지 않았어요. 본인은 5년 누적 근속을 인정해 퇴직금을 합산 청구하고 싶고, 계약서·강의 시간표·급여명세서·동료 증언 등 입증 자료가 있습니다." 근로자퇴직급여보장법 제4조는 계속근로기간 1년 이상 근로자에 대한 퇴직금 지급 의무를 정하고, 단기 계약의 연속 체결이 형식에 불과하고 실질적으로 단절 없는 근로관계가 인정되면 근속을 합산하여 평가하는 영역입니다. 단절 평가는 공백 기간의 길이·성격, 동일 업무·동일 사용자·동일 사업장 여부, 재입사 형식의 형식성 등을 종합 평가하는 트랙. 피해자라면 ① 단절 평가 ② 합산 근속 ③ 평균임금 ④ 청구·진정 ⑤ 시효 관리 5중 트랙이 가능한 영역. 대응은 ① 단절 ② 합산 ③ 평균 ④ 청구 ⑤ 시효 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 단기 계약 퇴직금 합산 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 단절·합산·평균·청구·시효 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 단절 평가</strong> — 공백 기간·동일 업무·동일 사용자 종합 평가.</li>\n<li><strong>② 합산 근속</strong> — 단절 없음 평가 시 5년 누적 근속 인정.</li>\n<li><strong>③ 평균임금 산정</strong> — 최종 3개월 평균임금 기준 산정.</li>\n<li><strong>④ 청구·진정 (시효 3년)</strong> — 노동부 진정 또는 민사 청구.</li>\n<li><strong>⑤ 시효 관리</strong> — 퇴직금 시효 3년·소멸 위험.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형식적 단기계약 반복이라도 실질 단절 없는 연속 근로면 합산 근속 평가 가능 영역. 공백 1~2개월은 단절 평가에서 결정 사정이 아니고 동일 업무·동일 사용자·재입사 형식의 형식성 등 종합 평가 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·합산·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약서·임금명세서 보존 (즉시)</strong> — 5회 계약서·5년 임금명세서 일괄 확보.</li>\n<li><strong>2단계 — 동일 업무 입증 자료 (1~2주)</strong> — 강의 시간표·학생 명단·동료 증언.</li>\n<li><strong>3단계 — 평균임금 산정 (2~3주)</strong> — 최종 3개월 평균임금 기준 퇴직금 계산.</li>\n<li><strong>4단계 — 노동부 진정 + 회사 청구 (시효 3년 내)</strong> — 진정 + 내용증명 병행.</li>\n<li><strong>5단계 — 민사 청구 또는 합의</strong> — 미정산 시 소액·민사 청구 또는 합의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 퇴직금 계산과 청구 절차, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">단기 계약 퇴직금 합산 청구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 단절·합산·평균 갈래입니다.</strong></p>\n<ul>\n<li><strong>5회 단기 근로계약서 전부</strong></li>\n<li><strong>5년 임금명세서·계좌 입금 내역</strong></li>\n<li><strong>강의 시간표·학생 명단·교재 자료 (동일 업무 입증)</strong></li>\n<li><strong>동료·관리자 증언·메신저</strong></li>\n<li><strong>4대 보험 가입 이력 (가입 단절 패턴 확인)</strong></li>\n<li><strong>공백 기간 처우 자료 (대기·교육·연수 등)</strong></li>\n<li><strong>회사 회신·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공백 기간 중에도 회사 단톡·메일·연수 참석 등 \'근로관계 지속\' 입증 자료가 있으면 단절 부정 사정이 더 분명한 영역. 4대 보험 가입 단절이 형식이라도 실질 평가에서 뒤집힐 수 있음.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>단절 평가</strong> — 공백 길이·동일 업무·동일 사용자 종합 평가.</li>\n<li><strong>합산 근속</strong> — 5년 누적 근속 인정 시 퇴직금 청구 가능.</li>\n<li><strong>평균임금</strong> — 최종 3개월 평균임금 산정 기준.</li>\n<li><strong>회사의 \'신규채용\' 주장</strong> — 형식과 실질의 분리 평가.</li>\n<li><strong>시효 관리</strong> — 퇴직금 시효 3년·소멸 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (퇴직금 미지급 신고)</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 평균임금 산정 기초 임금의 의미와 근로 대상성',
        summary:
          '대법원 2021다248299(대법원, 2026.01.29 선고) 영역에서 법원은 평균임금 산정 기초가 되는 임금의 의미와 근로 대상성 판단 기준 평가가 결정 사정이라고 본 사례 흐름이 있고, 단기 계약 반복 체결의 단절·연속 평가에서도 계약 형식보다 실질의 근로관계 연속성·동일 업무·동일 사용자 평가가 결정 사정이 됩니다.',
        takeaway: '단기 계약 반복도 실질 연속 근로면 근속 합산 평가 가능 영역 — 퇴직금 합산 청구 트랙.',
      },
    ],
    faq: [
      {
        question: '매번 신규 계약을 새로 썼는데도 합산 가능한가요?',
        answer:
          '<strong>실질 연속 근로 평가 시 가능한 영역입니다.</strong> 동일 업무·동일 사용자·공백 짧음 결합.',
      },
      {
        question: '공백 기간이 1~2개월인데 단절로 평가되나요?',
        answer:
          '<strong>공백 길이만으로 단정되지 않는 영역입니다.</strong> 종합 평가 사정 (방학·연수·대기 등).',
      },
      {
        question: '4대 보험 가입이 매번 단절됐어요',
        answer:
          '<strong>가입 단절 형식이 결정 사정은 아닌 영역입니다.</strong> 실질 평가에서 뒤집힐 수 있음.',
      },
      {
        question: '평균임금 산정 기준이 어떻게 되나요?',
        answer:
          '<strong>최종 3개월 평균임금 기준 영역입니다.</strong> 임금명세서·계좌 입금 내역으로 산정.',
      },
      {
        question: '회사가 \'합산 청구는 안 받는다\' 일방 주장해요',
        answer:
          '<strong>노동부 진정 + 민사 청구로 다툴 수 있는 영역입니다.</strong> 변호인 자문·전문가 상담 권장.',
      },
    ],
    cta: { text: '퇴직금 계산과 청구 절차, AI로 정리하기', link: '/chat?domain=retirement' },
    internalLinks: [
      { label: '퇴직금 미지급 신고', href: '/guide/retirement/retirement-pay-complaint' },
      { label: '퇴직금 계산법', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '1년 미만 퇴직금 수급', href: '/guide/retirement/retirement-less-than-1year-eligibility' },
      { label: '단기 계약 근속 합산', href: '/guide/retirement/retirement-fixed-term-aggregation' },
      { label: '퇴직금 중간정산 요건', href: '/guide/retirement/retirement-interim-settlement' },
    ],
  },

  // ─── 6. industrial-accident1-burnout-mental-comp-track ───
  {
    domain: 'industrial-accident1',
    slug: 'industrial-accident1-burnout-mental-comp-track',
    keyword: '업무 스트레스 정신질환 산재',
    questionKeyword: '1년간 야근·과중 업무 후 우울증·번아웃 진단을 받았는데, 근로복지공단 산재 신청 가능한가요?',
    ctaKeyword: '정신질환 산재 신청 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '업무 스트레스 정신질환 산재 — 5단계 인정 기준 점검 | 로앤가이드',
      description:
        '1년 야근·과중 업무 후 우울증·번아웃이라면 업무상질병판정위·정신질환 인정 기준 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중견 IT 기업 개발자로 1년간 야근(평균 월 80시간 초과)·주말 근무·반복 데드라인 압박을 받으며 근무하다가 우울증·번아웃·불안장애 진단을 받은 근로자입니다. 정신건강의학과 진단서엔 \'업무 관련 적응장애 + 우울 에피소드\'가 명시됐고 휴직 권고를 받았어요. 본인은 회사 인사팀에 산재 신청 의사를 밝혔지만 회사는 \'개인 성격·체질 문제\' 또는 \'업무와 무관\'을 명목으로 협조를 거부하고 있습니다. 본인은 근로복지공단에 산재 요양급여·휴업급여를 신청하고 싶고, 야근 기록·메신저·동료 증언·진단서 등 입증 자료가 있어요." 산업재해보상보험법 제37조는 업무상의 재해 인정 기준을 정하고, 업무상 질병에는 정신질환(적응장애·우울 에피소드·외상후스트레스장애 등)이 포함되며, \'업무상의 사유와 정신질환 사이의 상당인과관계\'가 인정되면 업무상 질병으로 평가되는 영역입니다. 인정은 근로복지공단 \'업무상질병판정위원회\'에서 결정되고, 야근 시간·업무 부담·정신적 부담의 객관 자료 + 의학 자료가 결정 사정. 피해자라면 ① 진단·치료 ② 인과 입증 ③ 산재 신청 ④ 판정위 ⑤ 급여 청구 5중 트랙이 가능한 영역. 대응은 ① 진단 ② 인과 ③ 신청 ④ 판정 ⑤ 급여 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 정신질환 산재 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·인과·신청·판정·급여 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 진단·치료 자료</strong> — 정신건강의학과 진단서·치료 기록.</li>\n<li><strong>② 인과 입증</strong> — 업무 부담(야근·압박)과 정신질환 사이 상당인과 평가.</li>\n<li><strong>③ 산재 신청</strong> — 근로복지공단 요양급여 신청서 제출.</li>\n<li><strong>④ 업무상질병판정위</strong> — 위원회 심의·결정 절차.</li>\n<li><strong>⑤ 급여 청구</strong> — 요양·휴업·장해급여 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정신질환 산재는 업무 부담 + 상당인과 평가가 결정 영역. 야근 시간·업무 압박 자료 + 정신과 진단·치료 자료 결합 시 인정 가능 트랙. 회사 협조 부재라도 본인이 직접 공단에 신청 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신청 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·신청·판정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정신과 진단·치료 시작 (즉시)</strong> — 정신건강의학과 진단서·치료 기록 확보.</li>\n<li><strong>2단계 — 업무 부담 자료 수집 (1~2주)</strong> — 야근 기록·메신저·근태·동료 증언.</li>\n<li><strong>3단계 — 근로복지공단 요양급여 신청 (즉시)</strong> — 신청서 + 진단서 + 인과 의견서.</li>\n<li><strong>4단계 — 업무상질병판정위 심의 (수개월)</strong> — 의학·노무 자문 검토.</li>\n<li><strong>5단계 — 급여 청구·재심사</strong> — 요양·휴업급여 청구, 불인정 시 재심사.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 산재 요양급여 신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">정신질환 산재 신청 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=industrial-accident1" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·인과·신청 갈래입니다.</strong></p>\n<ul>\n<li><strong>정신건강의학과 진단서·소견서</strong></li>\n<li><strong>치료 경과 기록·처방전</strong></li>\n<li><strong>야근 기록·근태 자료 (월별 야근 시간)</strong></li>\n<li><strong>업무 압박 자료 (메신저·메일·데드라인 문서)</strong></li>\n<li><strong>동료·관리자 증언</strong></li>\n<li><strong>근로계약서·직무 기술서</strong></li>\n<li><strong>요양급여 신청서 (공단 양식)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정신질환 산재 인정의 결정 사정은 \'업무 부담의 객관성\'·\'기존 질환과의 구분\'·\'발병 시점의 업무 관련성\'. 정신과 의사의 \'업무 관련성\' 명시 소견서 + 야근 시간 자료 결합 시 인정 가능성 강화 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>업무 부담 객관성</strong> — 야근 시간·업무량·압박 정도의 객관 입증.</li>\n<li><strong>상당인과 평가</strong> — 업무와 정신질환 사이 의학적·법적 인과.</li>\n<li><strong>기존 질환 분리</strong> — 기존 정신질환과 업무 발병의 구분 평가.</li>\n<li><strong>회사 협조 부재</strong> — 회사 협조 없이도 본인 신청 가능.</li>\n<li><strong>판정위 재심사</strong> — 불인정 시 재심사·심사위 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>근로복지공단 1588-0075 (산재 신청·상담)</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>한국산업안전보건공단 1644-4544</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 평균임금 산정 기초 임금의 의미와 근로 대상성',
        summary:
          '대법원 2021다248299(대법원, 2026.01.29 선고) 영역에서 법원은 평균임금 산정 기초가 되는 임금의 의미와 근로 대상성 판단 기준 평가가 결정 사정이라고 본 사례 흐름이 있고, 산재 휴업급여·장해급여 산정 시 평균임금 기준이 직접 연동되어 야근수당·연장근로수당·정기 상여 등이 평균임금에 포함되는지 평가가 급여액 결정의 결정 사정이 됩니다.',
        takeaway: '정신질환 산재 인정 시 평균임금 산정 기준에 야근수당·상여 포함 평가 가능 영역 — 평균임금 재산정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '우울증·번아웃도 산재 인정이 되나요?',
        answer:
          '<strong>업무 부담과 상당인과 입증 시 인정 가능 영역입니다.</strong> 야근·압박 자료 + 정신과 진단 결합.',
      },
      {
        question: '회사가 협조 안 해도 산재 신청 가능한가요?',
        answer:
          '<strong>본인이 직접 근로복지공단에 신청 가능 영역입니다.</strong> 회사 협조 부재 시 자료 직접 확보.',
      },
      {
        question: '업무상질병판정위는 어떻게 진행되나요?',
        answer:
          '<strong>의학·노무 자문 종합 심의 영역입니다.</strong> 수개월 소요, 진단서·인과 의견서 결정 사정.',
      },
      {
        question: '기존에 가벼운 우울 증상이 있었어요',
        answer:
          '<strong>기존 질환과 업무 발병의 구분 평가 영역입니다.</strong> 정신과 의사의 발병 시점·업무 관련성 소견 결정.',
      },
      {
        question: '산재 불인정 결정이 나오면 어떻게 하나요?',
        answer:
          '<strong>재심사·산재보험심사위 심사 청구 가능 영역입니다.</strong> 결정 송달 후 90일 내 청구.',
      },
    ],
    cta: { text: '산재 요양급여 신청 순서, AI로 정리하기', link: '/chat?domain=industrial-accident1' },
    internalLinks: [
      { label: '산재 요양급여 신청 절차', href: '/guide/industrial-accident1/workers-comp-claim-process' },
      { label: '산재 장해급여 청구', href: '/guide/industrial-accident1/workers-comp-disability-benefits' },
      { label: '산재 신청 준비서류', href: '/guide/industrial-accident1/workers-comp-required-documents' },
      { label: '업무상 질병 인정 기준', href: '/guide/industrial-accident1/occupational-disease-recognition' },
      { label: '산재 의료기관 이용', href: '/guide/industrial-accident1/workers-comp-medical-treatment' },
    ],
  },
];
