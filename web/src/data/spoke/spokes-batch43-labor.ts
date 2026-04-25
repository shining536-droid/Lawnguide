import { SpokePage } from '../spoke-pages';

// batch43 labor 12개: dismissal 5 + wage 3 + retirement 2 + unemployment 2
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 회사 CCTV가 개인 자리까지 상시 촬영한 것을 문제삼아 해고된 근로자가 사생활 침해 + 해고 부당성을 함께 다투도록 돕는 페이지다.
// 2. 이 페이지는 회사 합병 후 "직위 소멸"을 이유로 해고된 근로자가 고용승계 법리와 경영상 해고 요건 다툼을 준비하도록 돕는 페이지다.
// 3. 이 페이지는 내부 비위를 공익신고한 뒤 보복성 해고를 당한 근로자가 공익신고자 보호제도·신분보장 조치를 활용하도록 돕는 페이지다.
// 4. 이 페이지는 개인 SNS 비공개 글을 회사가 문제삼아 해고한 경우 사적 표현의 자유·징계 과잉 논점으로 방어하도록 돕는 페이지다.
// 5. 이 페이지는 고객 민원 단 1건으로 해고된 서비스직 근로자가 양정 과잉·비례원칙 다툼을 준비하도록 돕는 페이지다.
// 6. 이 페이지는 의무 참석 회식이 근무시간인지 다투며 회식 시간 임금·연장근로수당을 청구하려는 근로자를 돕는 페이지다.
// 7. 이 페이지는 회사가 유니폼비를 임금에서 공제한 경우 근기법 제43조 위반 여부를 점검해 환수·진정을 준비하도록 돕는 페이지다.
// 8. 이 페이지는 입사 전·후 교육기간을 "무급"으로 처리당한 근로자가 교육도 근로시간인지 판단해 임금 청구를 준비하도록 돕는 페이지다.
// 9. 이 페이지는 5인 미만 소규모 사업장에서도 1년 이상 근무했다면 퇴직금을 직접 청구할 수 있도록 절차를 돕는 페이지다.
// 10. 이 페이지는 퇴직 직전 승진·임금인상이 있었던 근로자가 평균임금 산정 시점·기준을 유리하게 다투도록 돕는 페이지다.
// 11. 이 페이지는 계약직 갱신이 거절된 근로자가 실업급여 수급 요건과 "자발/비자발" 구분을 점검하도록 돕는 페이지다.
// 12. 이 페이지는 재직 중 사업장이 갑자기 폐업한 근로자가 실업급여 신청 서류·절차를 2주 내 정리하도록 돕는 페이지다.

export const spokesBatch43Labor: SpokePage[] = [
  // ─── 1. dismissal / cctv-surveillance-excessive-termination ───
  {
    domain: 'dismissal',
    slug: 'dismissal-cctv-surveillance-excessive-termination',
    keyword: 'CCTV 감시 과도 해고',
    questionKeyword: '회사 CCTV가 사생활까지 찍어서 해고 근거로 썼다면 다툴 수 있나요?',
    ctaKeyword: 'CCTV 감시 해고 부당성 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'CCTV 사생활 침해 해고 부당성 4가지 쟁점 | 로앤가이드',
      description:
        '회사 CCTV가 개인 자리·휴게 장소까지 상시 촬영한 영상으로 해고 근거를 만들었다면 사생활 침해와 해고 부당성을 함께 다투는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"회사 CCTV에 찍힌 영상으로 근태 불량이라며 해고 통보를 받았어요"라는 사연이 늘고 있습니다. 업무용이라 설치한 CCTV가 휴게실·개인 자리까지 상시 녹화되어 있다면, 그 자체로 개인정보보호법·근로자 사생활권 침해 소지가 큽니다. 대법원은 수단으로 위법 수집된 증거의 징계 활용에 엄격한 제한을 두고 있어, 해고 근거의 증거능력부터 다툴 여지가 있습니다.</p>',
    sections: [
      {
        title: 'CCTV 영상이 징계 증거로 인정되는 요건 4가지',
        content:
          '<p><strong style="color:#1e3a5f">CCTV 설치·운용이 위법하면 그 영상은 해고 근거로 쓸 수 없습니다.</strong></p>\n<ul>\n<li><strong>설치 고지</strong> — 개인정보보호법 제25조상 안내판·직원 서면 동의·취업규칙 반영 여부 확인.</li>\n<li><strong>목적 초과</strong> — "보안"으로 설치한 CCTV로 근태 감시에 활용하면 목적 외 이용(같은 법 제18조).</li>\n<li><strong>수집 범위</strong> — 휴게실·탈의실·개인 자리 상시 녹화는 원칙 금지.</li>\n<li><strong>열람 절차</strong> — 본인 화면 열람 요청 거부 시 영상 증거능력 흔들립니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "있는 CCTV는 다 써도 된다"는 회사 주장은 개인정보보호법상 성립하지 않습니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 통보 받은 날부터 해야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">영상 증거의 합법성부터 흔들고, 양정 과잉을 병행해 다투는 것이 효과적입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고통지서·영상 근거 확보</strong> — 서면 해고 사유서를 즉시 요구(근기법 제27조).</li>\n<li><strong>2단계 — CCTV 운영대장 열람</strong> — 설치 위치·촬영 범위·고지 여부·로그 기록.</li>\n<li><strong>3단계 — 개인정보위원회 신고</strong> — 동의 없는 감시 확인 시 과태료·시정 조치.</li>\n<li><strong>4단계 — 지노위 구제신청</strong> — 통보일 3개월 이내, 양정 과잉 + 위법 증거 두 축 주장.</li>\n<li><strong>5단계 — 실업급여 동시 신청</strong> — 이직확인서에 해고로 기재 확인.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 CCTV 증거의 위법성과 해고 구제 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '양정 과잉 — CCTV로 드러난 경미한 잘못도 해고 사유가 되나',
        content:
          '<p><strong style="color:#1e3a5f">잠시 자리 비움·짧은 통화 등 경미한 사실로 해고하면 비례원칙 위반 가능성이 큽니다.</strong></p>\n<ul>\n<li><strong>비례원칙</strong> — 경고·견책·감봉 등 경한 처분을 거치지 않고 바로 해고면 과잉.</li>\n<li><strong>형평성</strong> — 같은 행동을 한 다른 직원이 주의만 받았다면 공정성 훼손.</li>\n<li><strong>개선 기회</strong> — 시정 지시·교육 없이 곧바로 해고하면 양정 부적정.</li>\n<li><strong>근거 판례</strong> — 대법원 2007두18406 — 해고는 "통상해고·징계해고 불문 가장 중한 처분".</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: CCTV 영상에 담긴 시간·횟수·맥락을 기록해 "일상적 수준"임을 입증하세요.</blockquote>',
      },
      {
        title: '실무 체크 — 녹화영상 열람·보존 요청',
        content:
          '<p><strong style="color:#1e3a5f">CCTV 영상은 대부분 30일 후 자동 삭제되므로 즉시 보존 조치를 해야 합니다.</strong></p>\n<ul>\n<li><strong>본인 화면 열람권</strong> — 개인정보보호법 제35조에 따라 회사에 서면 청구.</li>\n<li><strong>영상 보존 요청</strong> — 구제신청 전까지 원본 삭제 금지 내용증명 발송.</li>\n<li><strong>녹음·스크린샷</strong> — 영상 재생 화면을 합법 범위 내 자체 촬영·녹음해 보조 증거로 확보.</li>\n<li><strong>관리책임자</strong> — 개인정보 관리책임자 이름을 받아 불응 시 개인정보위 신고.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회사가 "이미 삭제됐다"고 주장하면 그 자체로 불리한 추정(증거인멸)이 가능합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 통상해고·징계해고에 공통 적용되는 양정 기준',
        summary:
          '대법원 2007두18406 사건(대법원, 2010.07.29 선고)에서 법원은 해고는 근로자에게 가장 중한 처분이므로 통상해고·징계해고를 불문하고 사회통념상 고용관계를 계속할 수 없을 정도로 귀책사유가 중대해야 정당하다고 판시했습니다. CCTV로 드러난 경미한 사정만으로 해고하는 것은 양정 과잉입니다.',
        takeaway:
          'CCTV 영상이 있어도 해고에 필요한 "중대성"이 입증되지 않으면 부당해고로 판정될 가능성이 큽니다.',
      },
    ],
    faq: [
      {
        question: 'CCTV 설치 시 개별 동의를 받지 않았다면 자동으로 불법인가요?',
        answer:
          '<strong>근로자에게 설치 목적·장소를 안내하고 취업규칙에 반영하면 개별 서면 동의까지는 필요하지 않습니다.</strong> 다만 휴게실·개인 자리 상시 녹화는 고지·동의가 있어도 과도 수집으로 위법 소지.',
      },
      {
        question: 'CCTV 영상이 위법하면 해고가 바로 무효가 되나요?',
        answer:
          '<strong>영상의 증거능력이 부정되면 해고 사유 입증 자체가 불가능해져 부당해고 판단에 결정적입니다.</strong> 다른 독립 증거가 있는지도 확인해야 합니다.',
      },
      {
        question: '동료 직원이 찍어준 영상도 회사가 해고 근거로 쓸 수 있나요?',
        answer:
          '<strong>동의 없이 촬영·유포된 영상은 개인정보보호법·형법상 문제가 발생합니다.</strong> 위법 수집 증거로 징계에 쓰면 다툴 수 있습니다.',
      },
      {
        question: 'CCTV로 잠시 자리 비운 것을 근태 불량이라고 해고할 수 있나요?',
        answer:
          '<strong>단순 자리 이동·짧은 통화는 일상적 업무 흐름이므로 해고 사유로는 약합니다.</strong> 경고·주의 등 경한 처분 없이 해고는 양정 과잉.',
      },
      {
        question: '구제신청 전에 개인정보위원회에 먼저 신고해도 되나요?',
        answer:
          '<strong>병행 가능합니다.</strong> 개인정보위원회 신고로 설치·운영의 위법성을 공식 확인받으면 지노위 심문에서 강력한 근거가 됩니다.',
      },
    ],
    cta: {
      text: '부당해고 구제신청 순서, AI로 정리하기',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '사생활 침해·징계 과잉 방어', href: '/guide/dismissal/dismissal-privacy-violation-defense' },
      { label: '해고 서면 통지 요건', href: '/guide/dismissal/dismissal-written-notice-requirement' },
      { label: '징계 양정 과잉 다툼', href: '/guide/dismissal/dismissal-disciplinary-excess-defense' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
      { label: '해고 후 실업급여 신청', href: '/guide/dismissal/dismissal-unemployment-benefit-apply' },
    ],
  },

  // ─── 2. dismissal / company-merger-position-elimination ───
  {
    domain: 'dismissal',
    slug: 'dismissal-company-merger-position-elimination',
    keyword: '회사 합병 직위 소멸 해고',
    questionKeyword: '회사 합병 후 직위가 없어졌다며 해고 통보를 받았다면 어떻게 하나요?',
    ctaKeyword: '합병 후 직위소멸 해고 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '회사 합병 직위소멸 해고 5가지 방어 포인트 | 로앤가이드',
      description:
        '합병·사업양도 후 "직위가 없어졌다"는 이유로 해고 통보를 받았다면 고용승계 법리와 경영상 해고 요건으로 다투는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"회사가 합병되면서 당신 직위는 사라졌다"는 통보를 받으면 당장 막막합니다. 대법원은 합병·사업양도 시 고용관계는 원칙적으로 포괄승계된다고 판시합니다. "직위 소멸"만으로 해고가 정당해지지는 않으며, 경영상 해고의 4대 요건을 모두 갖춰야 유효합니다. 단순한 구조조정 편의로 해고를 결정했다면 다툴 여지가 충분합니다.</p>',
    sections: [
      {
        title: '합병·사업양도 — 고용승계 원칙 먼저 확인',
        content:
          '<p><strong style="color:#1e3a5f">합병은 "포괄승계", 사업양도는 "특약 우선 + 일부 승계"로 법리가 다릅니다.</strong></p>\n<ul>\n<li><strong>흡수·신설합병</strong> — 상법상 권리·의무 전부 포괄승계, 근로관계도 당연승계.</li>\n<li><strong>영업양도</strong> — 양도 대상에 근로관계 포함 특약 여부가 핵심 쟁점.</li>\n<li><strong>자산만 양도</strong> — 인력은 별도 이전 동의가 필요하지만 사실상 사업 계속이면 승계 인정 가능성.</li>\n<li><strong>위장 청산</strong> — 폐업 형식으로 고용승계 회피 시 사해적 해고로 무효 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통합 전·후 사업 실체가 동일하면 "직위 소멸"은 해고 정당사유로 약합니다.</blockquote>',
      },
      {
        title: '경영상 해고 4대 요건 — 모두 충족해야 정당',
        content:
          '<p><strong style="color:#1e3a5f">근기법 제24조 — 긴박성·회피노력·공정선정·노동조합 협의 전부 필요.</strong></p>\n<ol>\n<li><strong>1요건 — 긴박한 경영상 필요</strong> — 적자·인력 과잉 등 객관 자료 제시 여부.</li>\n<li><strong>2요건 — 해고 회피 노력</strong> — 재배치·순환휴직·희망퇴직 우선 시도 여부.</li>\n<li><strong>3요건 — 합리·공정 선정 기준</strong> — 연령·직급·성과 등 객관 기준 + 차별 없는 적용.</li>\n<li><strong>4요건 — 50일 전 사전 협의</strong> — 근로자대표와 해고 회피 방법·선정 기준 성실 협의.</li>\n<li><strong>추가 — 정부 신고</strong> — 1개월 10명 이상 해고 시 고용노동부 장관 신고 의무.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 경영상 해고 4요건 충족 여부와 구제 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '통보 후 3단계 증빙 확보 — 놓치면 입증 실패',
        content:
          '<p><strong style="color:#1e3a5f">합병 전·후 조직도, 인사 발령, 재배치 제안 여부가 승패를 결정합니다.</strong></p>\n<ul>\n<li><strong>조직도 비교</strong> — 합병 전·후 부서·직위 구조를 시점별로 스크린샷.</li>\n<li><strong>재배치 제안 여부</strong> — 다른 부서 전보·신설 직무 제안이 있었는지 서면 확인.</li>\n<li><strong>선정 기준 공개 요청</strong> — 왜 본인이 대상이 되었는지 객관 기준 서면 요구.</li>\n<li><strong>근로자대표 협의 기록</strong> — 과반수 근로자 의견 수렴 절차가 실제로 있었는지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 다른 해고 대상 동료와 연대해 공통 증빙을 모으면 지노위에서 공정성 흠결 입증이 훨씬 쉬워집니다.</blockquote>',
      },
      {
        title: '구제신청·보상 — 복직 원하지 않을 때도 선택지',
        content:
          '<p><strong style="color:#1e3a5f">3개월 이내 지노위 구제신청이 원칙, 복직 거부 시 금전보상명령이 현실적 대안입니다.</strong></p>\n<ul>\n<li><strong>지노위 구제신청</strong> — 통보일로부터 3개월(근기법 제28조 제2항).</li>\n<li><strong>금전보상명령 신청</strong> — 심문 종결 전 서면 신청, 통상 6~12개월치 + 위자료.</li>\n<li><strong>위로금 협상</strong> — 회사가 선제안한 위로금은 통상 2~3개월치, 6개월 이상 역제안 여지.</li>\n<li><strong>실업급여</strong> — 이직 사유 "경영상 해고" 기재로 자진퇴사 오해 방지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 위로금을 받으며 "일체의 이의를 제기하지 않는다"는 포괄부제소 합의에 서명하면 구제신청이 막힐 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정년 도달·직위 소멸 후에도 구제이익 인정',
        summary:
          '대법원 2018다275925 사건(대법원, 2023.06.01 선고)에서 법원은 부당해고 기간 중 정년에 도달한 근로자도 기간제로 재고용되리라는 기대권이 인정되면 해고무효확인을 구할 법률상 이익이 존속한다고 판시했습니다. 합병·직위소멸 사유도 실질 판단 대상입니다.',
        takeaway:
          '직위가 없어졌다는 회사 주장만으로 구제신청 포기하지 말고 실질적 사업 계속성과 재고용 가능성을 함께 주장하세요.',
      },
    ],
    faq: [
      {
        question: '합병 계약서에 "일부 인력 제외"라고 있어도 해고가 되나요?',
        answer:
          '<strong>사용자 간 약정만으로 근로자에게 불리한 해고가 유효해지지 않습니다.</strong> 고용승계 회피 목적이라면 효력이 부정될 수 있습니다.',
      },
      {
        question: '합병 전 회사에서 7년 근무했는데 근속이 초기화되나요?',
        answer:
          '<strong>포괄승계되는 합병에서는 근속기간이 통산됩니다.</strong> 퇴직금·연차 산정에 합병 전 기간이 모두 포함됩니다.',
      },
      {
        question: '희망퇴직 신청 안 했는데 강제 해고된 경우 부당한가요?',
        answer:
          '<strong>회피 노력 부족으로 다툴 수 있습니다.</strong> 희망퇴직 → 전직 제안 → 해고 순서가 지켜졌는지가 핵심.',
      },
      {
        question: '직위는 없지만 동일 업무를 하는 신설 팀이 있으면 어떻게 되나요?',
        answer:
          '<strong>실질 업무 연속성이 있으면 해고 사유의 긴박성이 흔들립니다.</strong> 신설 팀 인원·업무 내용을 증빙으로 확보하세요.',
      },
      {
        question: '퇴직 위로금 받고 서명했는데 구제신청 가능한가요?',
        answer:
          '<strong>부제소 특약이 없거나 강박 상태였다면 다툴 여지가 있습니다.</strong> 서명 경위·시간·대안 유무를 정리해두세요.',
      },
    ],
    cta: {
      text: '부당해고 구제신청 순서, AI로 정리하기',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '경영상 해고 요건 검토', href: '/guide/dismissal/dismissal-managerial-requirements' },
      { label: '사업양도 고용승계 다툼', href: '/guide/dismissal/dismissal-business-transfer-succession' },
      { label: '희망퇴직 강요 구제', href: '/guide/dismissal/dismissal-voluntary-coerced-remedy' },
      { label: '금전보상명령 신청', href: '/guide/dismissal/dismissal-unfair-monetary-compensation' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
    ],
  },

  // ─── 3. dismissal / whistleblower-retaliation-protection ───
  {
    domain: 'dismissal',
    slug: 'dismissal-whistleblower-retaliation-protection',
    keyword: '내부고발 보복성 해고 보호',
    questionKeyword: '회사 비리 신고했더니 해고 당했습니다, 보호받을 수 있나요?',
    ctaKeyword: '공익신고자 해고 보호 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '내부고발 후 보복성 해고 3중 보호 절차 | 로앤가이드',
      description:
        '회사 비리·법 위반을 신고한 뒤 보복성 해고·징계를 당했다면 공익신고자 보호제도, 부당해고 구제, 신분보장 조치 3가지 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"회계 조작·산업안전법 위반을 신고했더니 한 달 만에 해고 통보가 왔어요"라는 사연은 생각보다 흔합니다. 공익신고자 보호법·부패방지권익위법은 보복성 불이익 처분을 엄격히 금지하고, 국민권익위가 직권으로 신분보장 조치를 내릴 수 있게 합니다. 지노위 구제신청과는 별도의 보호 경로가 3가지 존재합니다.</p>',
    sections: [
      {
        title: '보호되는 신고 범위 — 내 신고가 대상인지 확인',
        content:
          '<p><strong style="color:#1e3a5f">공익신고자 보호법 대상은 현재 471개 법률 위반행위, 그 외는 다른 법이 적용됩니다.</strong></p>\n<ul>\n<li><strong>공익신고자 보호법</strong> — 안전·환경·소비자·공정경쟁 등 471개 공공이익 위반.</li>\n<li><strong>부패방지권익위법</strong> — 공공기관 부패행위 신고자 보호.</li>\n<li><strong>근기법 제104조</strong> — 근로감독관·고용노동부 신고한 근로자 불이익 처분 금지.</li>\n<li><strong>자본시장법 등</strong> — 개별 법률에 보호 조항 산재.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 "회사 비밀 폭로"는 보호 대상이 아니며, 법 위반·공익 관련 사실이어야 합니다.</blockquote>',
      },
      {
        title: '3중 보호 절차 — 병행하면 효과 최대',
        content:
          '<p><strong style="color:#1e3a5f">권익위 신분보장 + 지노위 구제 + 손해배상 청구를 동시에 진행 가능합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 국민권익위 신분보장 신청</strong> — 불이익 처분일로부터 3년 이내, 원상회복·중단 조치.</li>\n<li><strong>2단계 — 지노위 부당해고 구제신청</strong> — 통보일 3개월 이내, 원직복직·임금상당액.</li>\n<li><strong>3단계 — 손해배상 청구</strong> — 민사로 위자료·일실수입 청구(보호법 제29조).</li>\n<li><strong>4단계 — 형사 고소</strong> — 보복 행위는 2년 이하 징역·2천만원 이하 벌금(보호법 제30조).</li>\n<li><strong>5단계 — 실업급여 신청</strong> — 보복성 해고 인정 시 수급 자격 안정.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 공익신고 대상·보호 경로·구제 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '인과관계 입증 — 신고 ↔ 해고 연결',
        content:
          '<p><strong style="color:#1e3a5f">시간 간격·사유의 갑작스러움이 인과관계의 핵심 지표입니다.</strong></p>\n<ul>\n<li><strong>시간적 근접성</strong> — 신고 후 6개월 이내 불이익이면 인과관계 추정 강함.</li>\n<li><strong>사유의 돌연성</strong> — 그간 무문제였는데 신고 직후 갑자기 문제 삼은 경우.</li>\n<li><strong>차별적 적용</strong> — 유사 사안 동료는 처분 없는데 본인만 해고.</li>\n<li><strong>근거 판례</strong> — 대법원 2023두54914 — 근로관계·지위 실질 판단 원칙.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 신고서 접수증·사내 조사 시점·해고 통보 시점을 타임라인 1장으로 정리하면 심문에서 강력한 증거가 됩니다.</blockquote>',
      },
      {
        title: '추가 권리 — 포상금·변호사비 지원',
        content:
          '<p><strong style="color:#1e3a5f">공익신고자는 보호뿐 아니라 포상금·소송 지원까지 제도적으로 보장됩니다.</strong></p>\n<ul>\n<li><strong>보상금</strong> — 국가·지자체 수입 회수액의 일부(최대 30억원).</li>\n<li><strong>포상금</strong> — 회수와 무관하게 공익 기여 시 최대 5억원.</li>\n<li><strong>구조금</strong> — 해고 등으로 생계 곤란 시 최대 1억원.</li>\n<li><strong>변호사비 지원</strong> — 권익위 "공익신고자 지원사업" 300만원 한도.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 비실명 대리신고 제도를 활용하면 신고 주체가 드러나지 않아 2차 보복을 차단할 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 근로관계·지위의 실질 판단 원칙',
        summary:
          '대법원 2023두54914 사건(대법원, 2026.01.29 선고)에서 법원은 근로기준법상 근로자 해당 여부는 계약 형식에 관계없이 종속성·업무 실태에 따라 실질 판단한다고 판시했습니다. 위장 도급·형식 사직처럼 내부고발자를 떼어내려는 시도도 실질이 해고라면 구제 대상입니다.',
        takeaway:
          '사직서·계약 만료 등 어떤 형식으로 내보냈든 실질이 보복성 해고라면 실질에 따라 보호받을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '언론 제보만 해도 공익신고자 보호를 받을 수 있나요?',
        answer:
          '<strong>원칙적으로 내부 신고·권익위 신고 등 공식 경로를 거쳐야 보호 대상이 됩니다.</strong> 예외적으로 즉각 공개가 불가피한 경우는 일부 보호 가능.',
      },
      {
        question: '신고 사실이 일부 부정확해도 보호받나요?',
        answer:
          '<strong>신고 당시 "상당한 이유"가 있으면 일부 사실 오인이 있어도 보호됩니다.</strong> 허위 악의 신고만 제외.',
      },
      {
        question: '해고 대신 지방 전보·부서 이동을 당한 경우도 신청 가능한가요?',
        answer:
          '<strong>전보·강등·대기발령 등 모든 불이익 조치가 포함됩니다.</strong> 권익위에 별도로 구제 신청하세요.',
      },
      {
        question: '권익위 신분보장 절차는 얼마나 걸리나요?',
        answer:
          '<strong>보통 60일 이내 1차 조치, 복잡 사건은 30일 연장 가능합니다.</strong> 긴급한 경우 조치 전 원상회복 명령도 있습니다.',
      },
      {
        question: '신고자 신원이 회사에 알려지면 누구 책임인가요?',
        answer:
          '<strong>신원 공개·추적은 법 위반으로 행위자에게 5년 이하 징역·5천만원 이하 벌금이 부과됩니다.</strong> 발견 즉시 권익위에 추가 신고하세요.',
      },
    ],
    cta: {
      text: '부당해고 구제신청 순서, AI로 정리하기',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '보복성 인사 전보 다툼', href: '/guide/dismissal/dismissal-retaliatory-transfer-defense' },
      { label: '공익신고자 신분보장 제도', href: '/guide/dismissal/dismissal-whistleblower-status-protection' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
      { label: '금전보상명령 신청', href: '/guide/dismissal/dismissal-unfair-monetary-compensation' },
      { label: '해고 서면 통지 요건', href: '/guide/dismissal/dismissal-written-notice-requirement' },
    ],
  },

  // ─── 4. dismissal / social-media-private-post-fired ───
  {
    domain: 'dismissal',
    slug: 'dismissal-social-media-private-post-fired',
    keyword: 'SNS 비공개 글 해고',
    questionKeyword: '개인 SNS에 쓴 비공개 글로 회사가 해고 통보하면 정당한가요?',
    ctaKeyword: 'SNS 글 해고 부당성 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '개인 SNS 비공개 글 해고 4가지 방어 포인트 | 로앤가이드',
      description:
        '개인 SNS에 쓴 비공개 글이 회사로 흘러가 해고 통보로 이어졌다면 사적 표현의 자유·업무 관련성·징계 과잉을 기준으로 다투는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"비공개 계정에 회사 불만을 한 줄 썼을 뿐인데 캡처가 회사로 들어갔고, 일주일 뒤 해고됐어요"라는 상담이 늘고 있습니다. 대법원은 사적 영역의 표현과 업무상 비위를 엄격히 구분합니다. SNS 글이 회사 명예를 실제로 훼손했는지, 업무 관련성이 있는지, 양정이 과도하지 않은지 세 축을 모두 통과해야 해고가 정당합니다.</p>',
    sections: [
      {
        title: 'SNS 글이 징계 사유가 되는 3가지 기준',
        content:
          '<p><strong style="color:#1e3a5f">비공개·친목 수준의 글은 원칙적으로 사적 영역으로 보호됩니다.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 불특정 다수에게 도달했는지(비공개 계정·소수 친구면 공연성 약함).</li>\n<li><strong>업무 관련성</strong> — 구체적 회사 정보·비방인지, 추상적 불만인지 구분.</li>\n<li><strong>실제 손해</strong> — 명예 훼손·고객 이탈 등 구체적 피해 발생 여부.</li>\n<li><strong>수집 적법성</strong> — 제3자가 몰래 캡처·유출한 경우 증거능력 다툴 수 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "상사 욕" 정도의 사적 글이 해고로 이어지면 사실상 사적 표현의 자유 침해입니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 통보 받은 날부터',
        content:
          '<p><strong style="color:#1e3a5f">증거 수집 경로의 위법성을 우선 다투고, 양정 과잉을 병행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고통지서 받기</strong> — 어떤 글, 어떤 이유인지 구체 기재 요구.</li>\n<li><strong>2단계 — 글 원본·캡처 비교</strong> — 맥락 잘라낸 왜곡 없는지 확인.</li>\n<li><strong>3단계 — 유포 경로 추적</strong> — 누가 어떻게 회사에 전달했는지 파악, 위법 수집이면 증거능력 다툼.</li>\n<li><strong>4단계 — 지노위 구제신청</strong> — 통보일 3개월 이내.</li>\n<li><strong>5단계 — 유출자 상대 민사</strong> — 사생활 침해·개인정보 유출 손해배상 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 SNS 글 해고의 공연성·양정 쟁점을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '회사 주장 반박 — 흔한 3가지 논리',
        content:
          '<p><strong style="color:#1e3a5f">"품위유지 의무 위반"이라는 추상적 주장은 양정 과잉에 취약합니다.</strong></p>\n<ul>\n<li><strong>"회사 신용 훼손"</strong> — 실제 거래 감소·고객 민원 등 구체 손해 입증 요구.</li>\n<li><strong>"기밀 누설"</strong> — 해당 정보가 영업비밀 3요건(비공지·비밀관리·경제성) 충족하는지.</li>\n<li><strong>"품위 의무"</strong> — 취업규칙의 추상 조항만으로 해고는 양정 부당 가능성.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 동종업계 동일 수위의 글이 징계로 이어지지 않은 사례를 찾아 형평성 주장하세요.</blockquote>',
      },
      {
        title: '예방과 기록 — 다시는 같은 일이 없도록',
        content:
          '<p><strong style="color:#1e3a5f">회사 이름·구체 인물·내부정보가 드러나는 글은 SNS에 올리지 않는 것이 원칙입니다.</strong></p>\n<ul>\n<li><strong>비공개 계정</strong> — 공개 범위를 친구 한정으로, 직장인 팔로워 정리.</li>\n<li><strong>글 보존</strong> — 해고 대비 원본·작성일·공개 범위 증거로 저장.</li>\n<li><strong>취업규칙 조문 확인</strong> — 어떤 표현이 징계 대상인지 사전에 파악.</li>\n<li><strong>사과·삭제의 효과</strong> — 해고 전 선제 삭제·사과는 양정 감경 요소.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 사내 슬랙·사내 SNS는 공간 자체가 업무 관련성 강해 일반 SNS보다 엄격 판단됩니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 양정 과잉 방지의 원칙',
        summary:
          '대법원 2010다100919 사건(대법원, 2012.01.27 선고)에서 법원은 징계해고가 정당하려면 사회통념상 고용관계를 계속할 수 없을 정도의 중대한 귀책사유가 인정되어야 하며, 그 판단은 근로자의 지위, 행위 동기·경위, 평소 성실성, 기업에 미친 영향 등 제반 사정을 종합 고려해야 한다고 판시했습니다.',
        takeaway:
          'SNS 글 한 건만으로는 해고에 필요한 "중대성" 판단을 넘기 어려우므로 양정 과잉으로 다툴 여지가 큽니다.',
      },
    ],
    faq: [
      {
        question: '공개 계정에 실명으로 회사 욕을 쓴 경우에도 다툴 수 있나요?',
        answer:
          '<strong>공개·실명은 징계 사유로 인정될 가능성이 크지만, 양정은 경징계가 원칙입니다.</strong> 바로 해고는 과잉일 수 있습니다.',
      },
      {
        question: '회사가 제 계정을 몰래 감시한 경우 처벌할 수 있나요?',
        answer:
          '<strong>정보통신망법·개인정보보호법 위반 소지가 있습니다.</strong> 해킹·무단 접속 입증 시 형사 고소 가능.',
      },
      {
        question: '글을 이미 삭제했는데 캡처본이 돌아다니면 어떡하나요?',
        answer:
          '<strong>삭제 사실은 반성·시정 노력으로 양정 감경 요소입니다.</strong> 캡처 유포자는 별도로 명예훼손·사생활 침해 책임 소지.',
      },
      {
        question: '동료에게 DM으로 보낸 글도 해고 사유가 되나요?',
        answer:
          '<strong>DM은 사적 대화 영역이므로 원칙적으로 공연성 약합니다.</strong> 다만 내용이 기밀 누설이면 별개 문제입니다.',
      },
      {
        question: '취업규칙에 "SNS 사용 제한" 조항이 있으면 자동으로 유효한가요?',
        answer:
          '<strong>추상·포괄적 조항은 효력이 제한됩니다.</strong> 구체적 금지행위가 명시되어야 징계 근거로 인정될 수 있습니다.',
      },
    ],
    cta: {
      text: '부당해고 구제신청 순서, AI로 정리하기',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '징계 양정 과잉 다툼', href: '/guide/dismissal/dismissal-disciplinary-excess-defense' },
      { label: '사생활 침해·징계 방어', href: '/guide/dismissal/dismissal-privacy-violation-defense' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
      { label: '해고 서면 통지 요건', href: '/guide/dismissal/dismissal-written-notice-requirement' },
      { label: '금전보상명령 신청', href: '/guide/dismissal/dismissal-unfair-monetary-compensation' },
    ],
  },

  // ─── 5. dismissal / customer-complaint-single-incident-fire ───
  {
    domain: 'dismissal',
    slug: 'dismissal-customer-complaint-single-incident-fire',
    keyword: '고객 민원 1건 해고',
    questionKeyword: '고객 민원 한 번 들어왔다고 바로 해고당했다면 구제 가능한가요?',
    ctaKeyword: '고객 민원 해고 부당성 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '고객 민원 1건 해고 5가지 부당성 쟁점 | 로앤가이드',
      description:
        '서비스직·콜센터에서 고객 민원 단 1건으로 해고 통보를 받았다면 양정 과잉과 회사의 보호 의무 위반을 기준으로 다투는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"고객이 블랙컨슈머인 걸 회사도 아는데, 민원 한 건 올라왔다고 저를 해고했어요"라는 상담을 자주 받습니다. 대법원은 단발적 민원만으로 해고하는 것은 비례원칙에 반한다고 일관되게 보고 있습니다. 감정노동자 보호법·산업안전보건법은 오히려 회사에게 민원 근로자를 보호할 의무를 지웁니다. 해고 통보가 있었다면 가능한 한 다퉈야 합니다.</p>',
    sections: [
      {
        title: '고객 민원 해고가 부당한 5가지 이유',
        content:
          '<p><strong style="color:#1e3a5f">해고는 최후 수단이며 민원 1건은 기본적으로 경징계 대상입니다.</strong></p>\n<ul>\n<li><strong>1. 양정 과잉</strong> — 경고·교육·보직 변경을 거치지 않은 바로 해고는 비례원칙 위반.</li>\n<li><strong>2. 형평성</strong> — 유사 민원에도 경징계로 끝난 동료 사례가 있으면 차별.</li>\n<li><strong>3. 민원 진위</strong> — 민원 내용이 객관 사실인지 검증 없이 해고는 절차 위반.</li>\n<li><strong>4. 보호 의무</strong> — 산안법상 감정노동자 보호조치 의무(면담·휴게·심리상담) 이행 여부.</li>\n<li><strong>5. 해고 예고</strong> — 3개월 초과 근속 시 30일 전 예고 또는 수당(근기법 제26조).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 민원 1건으로 해고하는 회사는 대체로 절차·보호 의무 중 하나 이상을 위반합니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 통보 72시간 골든타임',
        content:
          '<p><strong style="color:#1e3a5f">민원 원본과 통화 기록을 먼저 확보해야 해고 사유의 허점을 찾을 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고통지서·민원 전문 요구</strong> — 민원 작성일·접수번호·내용 서면 공개 요청.</li>\n<li><strong>2단계 — 녹취·CCTV 확보</strong> — 해당 응대의 통화 녹음, 매장 CCTV 보존 요청.</li>\n<li><strong>3단계 — 동료 진술</strong> — 당시 근무자·감독자 진술서로 실제 상황 입증.</li>\n<li><strong>4단계 — 지노위 구제신청</strong> — 통보일 3개월 이내.</li>\n<li><strong>5단계 — 산안법 신고 병행</strong> — 감정노동자 보호 조치 미이행이면 고용노동부 신고.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 민원 해고의 양정·절차·보호 의무 쟁점을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '회사 주장 반박 — 자주 나오는 3가지 논리',
        content:
          '<p><strong style="color:#1e3a5f">"브랜드 이미지 훼손" 주장은 구체적 손해 입증이 없으면 힘이 약합니다.</strong></p>\n<ul>\n<li><strong>"VIP 고객이라 특별"</strong> — 고객 등급에 따른 해고 기준은 공정성 문제, 평등원칙 위반 가능.</li>\n<li><strong>"회사 이미지 손상"</strong> — 매출 감소·언론 보도 등 구체 손해 근거 요구.</li>\n<li><strong>"사내 규정 위반"</strong> — 해당 규정이 존재·고지·합리성을 충족하는지 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 같은 부서에서 과거 더 큰 민원에도 경고로 끝난 사례가 있으면 형평성 입증에 결정적입니다.</blockquote>',
      },
      {
        title: '감정노동자 보호법 — 회사 의무 위반이면 해고 무력화',
        content:
          '<p><strong style="color:#1e3a5f">산안법 제41조 — 고객의 폭언·폭행 시 업무 일시 중단, 휴식 부여, 치료·상담 지원이 의무입니다.</strong></p>\n<ul>\n<li><strong>업무 중단권</strong> — 악성 민원 발생 시 근로자가 업무를 일시 중단할 권리.</li>\n<li><strong>심리상담 지원</strong> — 50인 이상 사업장 의무, 위반 시 1천만원 이하 과태료.</li>\n<li><strong>안내 스크립트</strong> — "폭언 시 상담이 종료될 수 있다"는 사전 고지 매뉴얼.</li>\n<li><strong>휴게 시간</strong> — 감정노동 후 휴게·보직 전환 등 회복 조치 의무.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회사가 보호 의무를 다하지 않은 상태에서 민원 책임만 근로자에게 전가하면 해고는 부당하다고 다툴 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 해고는 고용관계를 계속할 수 없을 정도의 중대 사유 필요',
        summary:
          '대법원 2007두18406 사건(대법원, 2010.07.29 선고)에서 법원은 해고는 근로자에게 가장 중한 처분이므로 통상해고·징계해고를 불문하고 사회통념상 고용관계를 계속할 수 없을 정도로 근로자의 귀책사유가 중대한 경우에 한해 정당하다고 판시했습니다. 민원 1건의 경미 사유는 이 기준을 넘기 어렵습니다.',
        takeaway:
          '고객 민원 1건은 경고·주의 등 경징계 사유이며, 해고는 비례원칙 위반으로 다툴 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '서비스직이라 민원이 회사 매출에 직접 영향을 준다고 하는데요?',
        answer:
          '<strong>매출 감소의 구체 수치·인과관계를 회사가 입증해야 합니다.</strong> 추상적 "이미지 손상" 주장은 부족.',
      },
      {
        question: '민원 내용이 사실과 다른데 회사가 조사 없이 해고했다면요?',
        answer:
          '<strong>사실관계 확인 절차 결여 자체가 절차 위반 사유입니다.</strong> 진상조사 없는 해고는 부당해고로 다툴 수 있습니다.',
      },
      {
        question: '3개월 미만 근무라 해고 예고 없이 해고됐습니다, 괜찮나요?',
        answer:
          '<strong>3개월 미만이면 해고 예고는 면제되지만 부당해고 구제신청은 그대로 가능합니다.</strong> 양정·절차 요건은 동일 적용.',
      },
      {
        question: '블랙컨슈머인데도 회사가 저한테만 책임을 지운 경우는요?',
        answer:
          '<strong>감정노동자 보호법 위반 소지가 큽니다.</strong> 고용노동부에 별도 진정하면 해고 부당성 입증에도 도움됩니다.',
      },
      {
        question: '고객 녹취 파일을 회사가 "기밀"이라며 안 주면 어떡하나요?',
        answer:
          '<strong>지노위 심문 단계에서 제출 명령을 신청할 수 있습니다.</strong> 제출 거부 시 회사에게 불리한 추정이 작용합니다.',
      },
    ],
    cta: {
      text: '부당해고 구제신청 순서, AI로 정리하기',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '징계 양정 과잉 다툼', href: '/guide/dismissal/dismissal-disciplinary-excess-defense' },
      { label: '감정노동자 보호 제도', href: '/guide/dismissal/dismissal-emotional-labor-protection' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
      { label: '해고 서면 통지 요건', href: '/guide/dismissal/dismissal-written-notice-requirement' },
      { label: '금전보상명령 신청', href: '/guide/dismissal/dismissal-unfair-monetary-compensation' },
    ],
  },

  // ─── 6. wage / team-dinner-mandatory-payment ───
  {
    domain: 'wage',
    slug: 'wage-team-dinner-mandatory-payment',
    keyword: '의무 회식 근무시간 임금',
    questionKeyword: '회식이 의무 참석인데 근무시간으로 인정받아 임금을 받을 수 있나요?',
    ctaKeyword: '회식 근무시간 임금 청구 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '의무 회식 근무시간 인정 임금 청구 3가지 기준 | 로앤가이드',
      description:
        '사실상 강제 참석인 회식이 근무시간으로 인정되는 조건과 연장근로수당·임금 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"7시에 일이 끝났는데 팀장 주재 회식이 시작돼 10시까지 있었어요, 안 가면 분위기가 불편해지니 사실상 의무였고요"라는 경험, 흔하시죠. 대법원은 회식의 업무 관련성·강제성·참여 형태에 따라 근무시간 여부를 판단합니다. 의무 수준의 회식이면 연장근로수당 청구가 가능합니다.</p>',
    sections: [
      {
        title: '회식이 근무시간으로 인정되는 3가지 기준',
        content:
          '<p><strong style="color:#1e3a5f">자발적 친목은 아니고 사용자 지휘·감독이 있으면 근무시간입니다.</strong></p>\n<ul>\n<li><strong>1. 업무 관련성</strong> — 업무 보고·회의 성격, 거래처 접대 등 업무 연장 요소.</li>\n<li><strong>2. 참석 강제성</strong> — 불참 시 불이익·평가 감점, 팀장 지시 여부.</li>\n<li><strong>3. 사용자 지휘</strong> — 시간·장소·주제 지정, 업무 연속 흐름 여부.</li>\n<li><strong>근거 판례</strong> — 대법원 2020도17654 — 근기법상 근로시간은 "지휘·감독 아래" 판단.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 친목 성격이 강한 회식은 근무시간이 아니지만, 의무·업무성격이 섞이면 인정 가능.</blockquote>',
      },
      {
        title: '임금 청구 5단계 절차',
        content:
          '<p><strong style="color:#1e3a5f">청구 시점부터 3년 이내(근기법 제49조)면 소급 청구 가능합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 회식 기록 모으기</strong> — 캘린더·단체방 공지·회식 사진, 참석·불참 이력.</li>\n<li><strong>2단계 — 참석 강제성 입증</strong> — 불참 시 평가 감점·지적 사례·팀장 지시 메시지.</li>\n<li><strong>3단계 — 시간 계산</strong> — 회식 시작~종료 시각, 연장근로 가산율 1.5배 적용.</li>\n<li><strong>4단계 — 내용증명 청구</strong> — 회사에 산정 근거 첨부해 지급 요청.</li>\n<li><strong>5단계 — 고용노동부 진정</strong> — 미지급 시 근로감독관 진정, 임금체불 신고.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 회식 근무시간성과 청구 가능 금액을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '회사 주장 반박 — 흔한 3가지 논리',
        content:
          '<p><strong style="color:#1e3a5f">"자율 참여"라는 주장은 실제 강제성 입증으로 깰 수 있습니다.</strong></p>\n<ul>\n<li><strong>"친목 행사"</strong> — 팀장 지시·업무 보고 섞인 정황 보이면 반박 가능.</li>\n<li><strong>"식대 제공했다"</strong> — 식대·회식비 지원은 근무시간 판단과 무관.</li>\n<li><strong>"불참한 직원도 있었다"</strong> — 일부 예외는 전체 강제성을 부정하지 않음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: "오늘 회식 빠지지 말라"는 단톡방 메시지·캘린더 공지 스크린샷이 가장 강력한 증거.</blockquote>',
      },
      {
        title: '관련 수당 — 놓치지 말 것',
        content:
          '<p><strong style="color:#1e3a5f">근무시간 인정 시 연장·야간·휴일 가산이 모두 적용됩니다.</strong></p>\n<ul>\n<li><strong>연장근로수당</strong> — 통상임금의 50% 가산(1.5배).</li>\n<li><strong>야간근로수당</strong> — 22시~06시 구간 50% 추가 가산(합산 2배).</li>\n<li><strong>휴일근로수당</strong> — 주휴·공휴일 회식이면 50~100% 가산.</li>\n<li><strong>이동시간</strong> — 회식 장소까지 이동시간도 업무성 인정 시 포함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 동료와 연대해 청구하면 개별 청구보다 회사의 합의 수용 가능성이 높습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 근로시간 판단 기준',
        summary:
          '대법원 2020도17654 사건(대법원, 2021.02.25 선고)에서 법원은 근로기준법상 근로시간은 근로자가 사용자의 지휘·감독 아래 근로계약에 따른 근로를 제공하는 시간을 말하며, 행사의 성격·참여 강제성·업무 관련성을 종합해 판단해야 한다고 판시했습니다.',
        takeaway:
          '의무 수준의 회식은 사용자 지휘·감독이 인정되므로 근로시간으로 임금 청구가 가능합니다.',
      },
    ],
    faq: [
      {
        question: '자발적으로 간 회식도 강제성이 있으면 근무시간인가요?',
        answer:
          '<strong>본인이 원해서 갔어도 불참 시 불이익 구조가 있으면 강제성이 인정될 수 있습니다.</strong> 정황 증거가 핵심.',
      },
      {
        question: '거래처 접대 자리는 확실히 근무시간인가요?',
        answer:
          '<strong>거래처 접대·영업 관련 식사는 업무성이 명확해 대부분 근무시간입니다.</strong> 출장 규정에 명시된 경우도 많습니다.',
      },
      {
        question: '3년 전 회식 임금도 소급 청구 가능한가요?',
        answer:
          '<strong>임금채권 소멸시효는 3년이므로 청구 시점 기준 3년 이내 분은 가능합니다.</strong> 시효 임박 분 우선 청구.',
      },
      {
        question: '회식에서 술을 마셔도 근무시간이 되나요?',
        answer:
          '<strong>음주 여부는 근무시간 판단과 무관합니다.</strong> 업무 관련성·강제성이 있으면 인정될 수 있습니다.',
      },
      {
        question: '퇴사 후에 청구해도 되나요?',
        answer:
          '<strong>퇴사 후에도 3년 이내면 청구 가능합니다.</strong> 오히려 재직 중보다 보복 부담이 적어 현실적으로 수월.',
      },
    ],
    cta: {
      text: '임금체불 대응 순서, AI로 바로 정리하기',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '연장근로수당 청구 절차', href: '/guide/wage/wage-overtime-pay-claim-procedure' },
      { label: '근로시간 범위 판단 기준', href: '/guide/wage/wage-working-hours-scope-check' },
      { label: '야간·휴일수당 계산', href: '/guide/wage/wage-night-holiday-pay-calc' },
      { label: '임금체불 진정 절차', href: '/guide/wage/wage-unpaid-complaint-procedure' },
      { label: '통상임금 vs 평균임금', href: '/guide/wage/wage-ordinary-average-difference' },
    ],
  },

  // ─── 7. wage / uniform-cost-deducted-illegal ───
  {
    domain: 'wage',
    slug: 'wage-uniform-cost-deducted-illegal',
    keyword: '유니폼비 임금 공제 위법',
    questionKeyword: '회사가 유니폼비를 월급에서 빼갔는데 위법 아닌가요?',
    ctaKeyword: '유니폼비 공제 환수 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '유니폼비 임금 공제 위법성 4가지 체크 | 로앤가이드',
      description:
        '회사가 유니폼·명찰·공구 비용을 임금에서 공제했다면 근기법 제43조 위반 여부와 환수·신고 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"유니폼 3벌 샀다고 월급에서 12만원이 빠져 있어요"라는 불만을 자주 듣습니다. 근기법 제43조는 임금은 통화로 직접 전액 지급해야 한다고 명시합니다. 유니폼비·보증금·공구비를 일방 공제하면 원칙적으로 위법입니다. 개별 서면 동의가 있어도 엄격한 요건을 충족하지 못하면 환수 대상입니다.</p>',
    sections: [
      {
        title: '임금 공제가 허용되는 예외 — 4가지 요건',
        content:
          '<p><strong style="color:#1e3a5f">법령·단체협약·근로자 개별 동의가 있어도 까다로운 요건을 갖춰야 합니다.</strong></p>\n<ul>\n<li><strong>1. 법령 근거</strong> — 세금·4대보험 등 법정 공제만 원칙적으로 허용.</li>\n<li><strong>2. 단체협약</strong> — 노조와의 단체협약에 명시된 공제(조합비 등).</li>\n<li><strong>3. 개별 서면 동의</strong> — 근로자 자유의사에 의한 구체적·개별적 서면.</li>\n<li><strong>4. 근로자 이익 부합</strong> — 공제가 근로자에게 실질 이익이 되어야 유효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 입사 시 "동의서" 일괄 서명은 자유의사 부족으로 무효 가능성이 큽니다.</blockquote>',
      },
      {
        title: '유니폼비 공제가 불법인 이유 3가지',
        content:
          '<p><strong style="color:#1e3a5f">회사 지정 유니폼은 업무 수행에 필수인 근로조건의 일부입니다.</strong></p>\n<ol>\n<li><strong>1. 업무 필수성</strong> — 사용자 지정 복장은 사용자가 부담해야 할 경영 비용.</li>\n<li><strong>2. 수익 관계</strong> — 회사 브랜드·상표 노출은 회사 이익이므로 근로자 부담 불합리.</li>\n<li><strong>3. 일괄 동의 무효</strong> — 채용 조건으로 동의를 요구하면 자유의사 결여.</li>\n<li><strong>4. 공제 방식 제한</strong> — 월별 분할·일시 공제 모두 동일 기준 적용.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 공제의 적법성과 환수 가능 금액을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '환수·신고 5단계 절차',
        content:
          '<p><strong style="color:#1e3a5f">임금명세서·계약서·공제 동의서 원본 확보가 우선입니다.</strong></p>\n<ul>\n<li><strong>1단계 — 임금명세서 3년치 수집</strong> — 근기법 제48조 발행·교부 의무, 사용자가 불응 시 과태료.</li>\n<li><strong>2단계 — 공제 항목 특정</strong> — "유니폼비·보증금·물품비" 등 구체 항목별 금액 계산.</li>\n<li><strong>3단계 — 동의서 검토</strong> — 동의서가 자발성·구체성·개별성을 갖췄는지 체크.</li>\n<li><strong>4단계 — 내용증명 환수 요구</strong> — 미반환 시 고용노동부 진정.</li>\n<li><strong>5단계 — 민사 소액소송</strong> — 3천만원 이하 간이·신속한 회수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 동료 여러 명이 같은 공제를 당했다면 집단 진정이 효과적입니다.</blockquote>',
      },
      {
        title: '예외적 공제 유형 — 확인 필수',
        content:
          '<p><strong style="color:#1e3a5f">분실·훼손 책임 공제는 별도 요건이 추가됩니다.</strong></p>\n<ul>\n<li><strong>훼손·분실 배상</strong> — 고의·중과실 입증 후 손해액 산정, 일방 공제 금지.</li>\n<li><strong>가불·선지급</strong> — 근로자 청구로 받은 선지급금만 이후 공제 가능.</li>\n<li><strong>조합비</strong> — 단체협약 근거가 있어야 합법.</li>\n<li><strong>식비·기숙사비</strong> — 편익 제공의 실제 여부·적정 금액 검증 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 퇴직 시 남은 유니폼 반환하지 않았다고 최종 급여에서 공제하면 불법 가능성이 큽니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직금 공제의 엄격한 요건',
        summary:
          '대법원 2020다287921 사건(대법원, 2024.07.25 선고)에서 법원은 파견근로자에 대한 퇴직금 공제처럼 임금에 해당하는 금원을 공제하려면 법령·단체협약·근로자의 개별 서면 동의 등 엄격한 요건을 갖추어야 한다고 판시했습니다.',
        takeaway:
          '임금성 금원의 공제는 예외 규정 엄격 해석이 원칙이므로, 유니폼비 공제도 요건 미비 시 환수 가능.',
      },
    ],
    faq: [
      {
        question: '입사할 때 서명한 동의서가 있어도 환수 가능한가요?',
        answer:
          '<strong>입사 조건으로 강제된 포괄적 동의는 자유의사가 결여돼 무효로 판단될 수 있습니다.</strong> 동의 경위를 확인하세요.',
      },
      {
        question: '안전화·공구비 공제도 같은 논리인가요?',
        answer:
          '<strong>업무 수행에 필수인 물품은 원칙적으로 사용자 부담입니다.</strong> 산업안전보건법상 안전보호구는 특히 회사 의무.',
      },
      {
        question: '월급을 받아도 공제 항목이 불분명한데 어떻게 확인하나요?',
        answer:
          '<strong>근기법 제48조상 임금명세서 교부가 의무이므로 서면 요구하세요.</strong> 미교부 시 500만원 이하 과태료.',
      },
      {
        question: '퇴사할 때 유니폼 반환하지 않아 공제당하면 정당한가요?',
        answer:
          '<strong>반환 의무의 근거·금액 산정이 적정한지가 관건입니다.</strong> 일방 공제는 원칙적으로 위법.',
      },
      {
        question: '고용노동부 진정 후 처리 기간은 얼마나 걸리나요?',
        answer:
          '<strong>보통 25일 이내 1차 조사, 복잡 사건은 최대 50일까지 연장됩니다.</strong> 확정 후 사용자는 지체 없이 환수 의무.',
      },
    ],
    cta: {
      text: '임금체불 대응 순서, AI로 바로 정리하기',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '임금 공제 적법성 판단', href: '/guide/wage/wage-deduction-legality-check' },
      { label: '임금명세서 미교부 신고', href: '/guide/wage/wage-paystub-missing-complaint' },
      { label: '임금체불 진정 절차', href: '/guide/wage/wage-unpaid-complaint-procedure' },
      { label: '통상임금 vs 평균임금', href: '/guide/wage/wage-ordinary-average-difference' },
      { label: '연장근로수당 청구', href: '/guide/wage/wage-overtime-pay-claim-procedure' },
    ],
  },

  // ─── 8. wage / training-period-unpaid-legal ───
  {
    domain: 'wage',
    slug: 'wage-training-period-unpaid-legal',
    keyword: '교육기간 무급 임금 청구',
    questionKeyword: '입사 전 교육 3주를 무급으로 했는데 임금 받을 수 있나요?',
    ctaKeyword: '교육기간 임금 청구 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '교육기간 무급 적법성 5가지 체크 임금 청구 | 로앤가이드',
      description:
        '회사가 입사 전·후 교육·연수 기간을 무급으로 처리했다면 근로시간 해당 여부와 임금 청구 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"입사 전 2주 교육을 꼭 받아야 하는데 무급이고, 교육 후 시험 통과해야 정식 채용이래요"라는 사연이 많습니다. 대법원은 교육이 업무에 필수적이고 사용자 지휘·감독 아래 이루어지면 근로시간이라고 일관되게 판시합니다. 교육 자체가 근로의 시작이라면 임금 청구가 가능합니다.</p>',
    sections: [
      {
        title: '교육기간이 근로시간이 되는 5가지 기준',
        content:
          '<p><strong style="color:#1e3a5f">필수성·강제성·지휘감독 3요소를 종합해 판단합니다.</strong></p>\n<ul>\n<li><strong>1. 업무 필수성</strong> — 업무 수행을 위해 가능한 한 이수해야 하는 교육인지.</li>\n<li><strong>2. 강제 참석</strong> — 불참 시 채용 취소·불이익 있으면 강제성 인정.</li>\n<li><strong>3. 사용자 지휘</strong> — 회사 지정 장소·시간·강사·커리큘럼 여부.</li>\n<li><strong>4. 근로 준비성</strong> — 교육 내용이 실제 업무와 직결되는지.</li>\n<li><strong>5. 수료 필수</strong> — 수료 후 정식 채용이 전제되면 근로 시작으로 볼 수 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "교육은 근로가 아니다"라는 회사 주장은 강제 수준이면 통하지 않습니다.</blockquote>',
      },
      {
        title: '무급 교육 vs 유급 교육 — 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">자발성 여부가 가장 큰 분기점입니다.</strong></p>\n<ol>\n<li><strong>유급 인정 — 의무 연수</strong> — 안전보건교육·신입 필수 OJT 등.</li>\n<li><strong>유급 인정 — 집체 교육</strong> — 회사 지정 시설·시간에 강제 참여.</li>\n<li><strong>무급 가능 — 자기계발</strong> — 근로자 요청으로 추가 수강하는 전문 교육.</li>\n<li><strong>무급 가능 — 자격증</strong> — 개인 자격증 준비 지원 프로그램.</li>\n<li><strong>혼재 케이스</strong> — 일부 의무+일부 선택이면 의무 부분만 유급 청구 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 교육의 근로시간성과 청구 가능 금액을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '청구 4단계 절차 — 퇴사 후도 3년 가능',
        content:
          '<p><strong style="color:#1e3a5f">교육 일정·참석 기록·지시 문서가 증빙의 핵심입니다.</strong></p>\n<ul>\n<li><strong>1단계 — 교육 공지·출석부 확보</strong> — 시간·장소·지시자 정보.</li>\n<li><strong>2단계 — 최저임금 기준 계산</strong> — 교육 시간 × 최저시급 이상, 근속 누적 시 통상임금.</li>\n<li><strong>3단계 — 내용증명 발송</strong> — 산정 근거 첨부해 서면 청구.</li>\n<li><strong>4단계 — 고용노동부 진정</strong> — 미지급 시 근로감독관 신고(제43조 위반).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 수료증·강사명·커리큘럼 스크린샷은 "사용자 지휘" 입증에 매우 강력.</blockquote>',
      },
      {
        title: '회사 주장 반박 — 흔한 3가지',
        content:
          '<p><strong style="color:#1e3a5f">"혜택 제공"이라는 프레임은 실제 강제성 앞에서 무너집니다.</strong></p>\n<ul>\n<li><strong>"자기계발 프로그램"</strong> — 불참 시 불이익 구조면 실질은 근로.</li>\n<li><strong>"수습기간이라 무급"</strong> — 수습도 최저임금 90% 이상은 지급 의무.</li>\n<li><strong>"교육비는 회사 부담"</strong> — 교육비 부담은 근로시간 판단과 별개.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 근로계약서에 "교육기간 무급" 조항이 있어도 근기법 위반이면 그 부분은 무효입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 계속근로기간 기산점의 판단',
        summary:
          '대법원 2021다218083 사건(대법원, 2022.02.17 선고)에서 법원은 퇴직금 산정을 위한 계속근로기간의 기산점은 실질적으로 사용자의 지휘·감독 아래 근로를 제공하기 시작한 시점을 기준으로 판단해야 한다고 판시했습니다. 교육기간도 지휘·감독 아래 이루어졌다면 근로의 시작으로 볼 수 있습니다.',
        takeaway:
          '강제 교육은 근로의 시작으로 평가되므로 임금·근속 모두 청구 대상이 될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '교육 기간 중 숙식 제공받았는데도 임금 청구되나요?',
        answer:
          '<strong>숙식 제공은 복리후생이고 임금 지급 의무와 별개입니다.</strong> 강제 교육이면 별도로 임금 청구 가능.',
      },
      {
        question: '교육 후 시험 떨어지면 채용 취소된다는데 이것도 강제성인가요?',
        answer:
          '<strong>불이익(채용 취소)을 전제로 한 교육은 강제성이 강하게 인정될 수 있습니다.</strong> 실질 근로로 볼 가능성 큼.',
      },
      {
        question: '사내 온라인 강의를 퇴근 후 이수 의무화하면 어떤가요?',
        answer:
          '<strong>이수 의무·기한·점검이 있으면 근무시간으로 볼 수 있습니다.</strong> 업무 직결성이 있으면 더 강력.',
      },
      {
        question: '해외 연수 3개월을 무급으로 갔다 왔는데 청구 가능한가요?',
        answer:
          '<strong>회사 지정 해외 연수는 대부분 근로시간에 해당할 소지가 있습니다.</strong> 최소 최저임금 기준 청구 가능.',
      },
      {
        question: '교육 후 3년 넘게 지났는데 청구 가능한가요?',
        answer:
          '<strong>임금채권 소멸시효 3년을 넘기면 청구가 어렵습니다.</strong> 시효 임박 분은 즉시 내용증명으로 시효 중단 조치.',
      },
    ],
    cta: {
      text: '임금체불 대응 순서, AI로 바로 정리하기',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '수습 최저임금 계산', href: '/guide/wage/wage-probation-minimum-calc' },
      { label: '근로시간 범위 판단', href: '/guide/wage/wage-working-hours-scope-check' },
      { label: '임금체불 진정 절차', href: '/guide/wage/wage-unpaid-complaint-procedure' },
      { label: '임금명세서 미교부 신고', href: '/guide/wage/wage-paystub-missing-complaint' },
      { label: '연장근로수당 청구', href: '/guide/wage/wage-overtime-pay-claim-procedure' },
    ],
  },

  // ─── 9. retirement / small-company-no-fund-claim ───
  {
    domain: 'retirement',
    slug: 'retirement-small-company-no-fund-claim',
    keyword: '5인 미만 소규모 퇴직금 청구',
    questionKeyword: '5인 미만 회사에서 퇴직금 받을 수 있나요?',
    ctaKeyword: '소규모 사업장 퇴직금 청구 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '5인 미만 사업장 퇴직금 4단계 직접 청구 | 로앤가이드',
      description:
        '5인 미만 소규모 사업장이라도 1년 이상 근무했다면 퇴직금 청구가 가능한 요건과 체불 시 직접 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"5인 미만이라 근기법 일부가 적용 안 된다"며 퇴직금을 안 주는 사업주를 자주 만납니다. 근로자퇴직급여보장법은 상시 근로자 수와 무관하게 1주 15시간 이상·1년 이상 근무한 모든 근로자에게 퇴직금을 의무화합니다. 사업주가 "돈 없다"고 해도 법상 의무이며 미지급 시 3년 이하 징역·3천만원 이하 벌금 대상입니다.</p>',
    sections: [
      {
        title: '5인 미만도 퇴직금 의무인 이유',
        content:
          '<p><strong style="color:#1e3a5f">퇴직급여법은 근기법과 달리 상시 근로자 수 제한이 없습니다.</strong></p>\n<ul>\n<li><strong>적용 범위</strong> — 근로자퇴직급여보장법 제3조 — 모든 사업장 적용.</li>\n<li><strong>수급 요건</strong> — 1주 15시간 이상 + 계속근로 1년 이상.</li>\n<li><strong>금액 기준</strong> — 30일분 평균임금 × 근속연수 이상.</li>\n<li><strong>중간정산·DC형·DB형</strong> — 형태와 무관하게 퇴직 시 수급권 확정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "5인 미만이라 퇴직금 없다"는 말은 명백한 거짓입니다.</blockquote>',
      },
      {
        title: '4단계 직접 청구 절차',
        content:
          '<p><strong style="color:#1e3a5f">퇴직일로부터 14일 이내 지급이 원칙, 지연 시 지연이자 20%까지.</strong></p>\n<ol>\n<li><strong>1단계 — 근속·임금 계산</strong> — 입사일·퇴직일·퇴직 전 3개월 임금으로 평균임금 산정.</li>\n<li><strong>2단계 — 내용증명 청구</strong> — 산정 근거 첨부, 14일 이내 지급 요구.</li>\n<li><strong>3단계 — 고용노동부 진정</strong> — 미지급 시 관할 노동청에 임금체불 진정.</li>\n<li><strong>4단계 — 체당금 신청 또는 소송</strong> — 사업주 도산·폐업 시 체당금, 아니면 민사 소액소송.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 5인 미만 사업장 퇴직금 청구 가능 금액을 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '사업주 주장 반박 — 자주 나오는 3가지',
        content:
          '<p><strong style="color:#1e3a5f">"돈이 없다"는 말은 법적 면책 사유가 아닙니다.</strong></p>\n<ul>\n<li><strong>"5인 미만 적용 제외"</strong> — 퇴직급여법은 상시 근로자 수 무관, 전 사업장 적용.</li>\n<li><strong>"퇴직금 포함 월급"</strong> — 분할 지급 약정은 무효, 별도로 청구 가능.</li>\n<li><strong>"중도 퇴사라 미지급"</strong> — 1년 이상이면 해고·자진 퇴사 불문 지급 의무.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: "돈 없다"는 사용자 녹취·문자도 향후 형사 고발 단계에서 체불 고의 입증 자료.</blockquote>',
      },
      {
        title: '체당금 — 사업주 무자력이어도 받는 법',
        content:
          '<p><strong style="color:#1e3a5f">사업주가 폐업·도산해도 국가가 체불 임금·퇴직금을 대신 지급합니다.</strong></p>\n<ul>\n<li><strong>간이대지급금</strong> — 퇴직 후 2년 이내, 3개월 임금+3년 퇴직금 합산 최대 1천만원.</li>\n<li><strong>일반대지급금</strong> — 도산 인정 사업장, 최대 체불액 기준 지급.</li>\n<li><strong>신청 서류</strong> — 체불 확인서, 임금명세서, 퇴직일 증빙.</li>\n<li><strong>처리 기간</strong> — 신청 후 약 14일.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 체당금 받은 후에도 사용자에게 구상권 청구가 가능하니 포기하지 마세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직금 산정의 기본 원칙',
        summary:
          '대법원 2018다244877 사건(대법원, 2022.03.17 선고)에서 법원은 퇴직금은 계속근로에 대한 대가이며, 사업장 규모나 분할 지급 약정 등에 관계없이 근로자가 1년 이상 계속근로한 경우 지급 의무가 발생한다고 판시했습니다.',
        takeaway:
          '5인 미만 사업장·분할 지급 합의 등 어떤 형식이든 1년 이상 근로 시 퇴직금 청구권은 살아 있습니다.',
      },
    ],
    faq: [
      {
        question: '월급에 퇴직금 포함이라고 계약했는데 무효인가요?',
        answer:
          '<strong>대법원은 퇴직금 분할 지급 약정을 원칙적으로 무효로 봅니다.</strong> 별도 청구가 가능합니다.',
      },
      {
        question: '주 3일만 근무하는 아르바이트도 받을 수 있나요?',
        answer:
          '<strong>주 15시간 이상, 1년 이상이면 아르바이트도 퇴직금 대상입니다.</strong> 시간 환산해 산정.',
      },
      {
        question: '퇴직 후 1년 지났는데 청구 가능한가요?',
        answer:
          '<strong>퇴직금 채권 소멸시효는 3년이므로 3년 이내 청구 가능합니다.</strong> 내용증명으로 시효 중단.',
      },
      {
        question: '사업주 개인에게 소송해도 되나요?',
        answer:
          '<strong>법인이 아닌 개인사업자라면 사업주 개인 재산까지 강제집행 가능합니다.</strong> 민사 소액·형사 고발 병행 효과적.',
      },
      {
        question: '노동부 진정 후 처리 기간은요?',
        answer:
          '<strong>보통 25일 내 1차 조사, 확정 후 사용자는 지체 없이 지급 의무.</strong> 불응 시 근로감독관이 즉시 고발 조치.',
      },
    ],
    cta: {
      text: '퇴직금 계산과 청구 절차, AI로 정리하기',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '퇴직금 계산 방법', href: '/guide/retirement/retirement-calculation-method' },
      { label: '체당금 신청 절차', href: '/guide/retirement/retirement-substitute-payment-procedure' },
      { label: '퇴직금 분할 지급 무효', href: '/guide/retirement/retirement-split-payment-invalid' },
      { label: '평균임금 산정 기준', href: '/guide/retirement/retirement-average-wage-standard' },
      { label: '퇴직금 청구 내용증명', href: '/guide/retirement/retirement-claim-certified-mail' },
    ],
  },

  // ─── 10. retirement / promotion-salary-average-calc ───
  {
    domain: 'retirement',
    slug: 'retirement-promotion-salary-average-calc',
    keyword: '승진 직전 평균임금 계산',
    questionKeyword: '퇴직 직전에 승진해서 월급 올랐는데 평균임금에 반영되나요?',
    ctaKeyword: '승진 평균임금 반영 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '승진 직전 평균임금 계산 4가지 유리 전략 | 로앤가이드',
      description:
        '퇴직 직전 승진·임금인상이 있었다면 평균임금 산정 시점·기준을 유리하게 적용해 퇴직금을 늘리는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"퇴직 두 달 전에 승진해서 월급이 30만원 올랐는데, 회사는 승진 전 금액으로 퇴직금을 계산해서 줬어요"라는 상담이 늘고 있습니다. 근기법 제2조·시행령 제2조는 평균임금을 "사유 발생일 이전 3개월간 지급된 임금의 총액"을 그 기간의 총일수로 나눈 금액으로 정의합니다. 승진·인상이 반영된 기간이면 상승분까지 포함해 계산해야 합니다.</p>',
    sections: [
      {
        title: '평균임금 산정 — 기본 공식 먼저 이해',
        content:
          '<p><strong style="color:#1e3a5f">퇴직일 이전 3개월간 지급된 총임금 ÷ 총일수(89~92일).</strong></p>\n<ul>\n<li><strong>산정 기준일</strong> — 퇴직일(사유 발생일) 기준 역산 3개월.</li>\n<li><strong>포함 항목</strong> — 기본급 + 정기 수당 + 상여금 3/12 + 연차수당 등.</li>\n<li><strong>제외 항목</strong> — 일시적 경비·실비 변상·해외 파견수당 일부.</li>\n<li><strong>퇴직금 공식</strong> — 평균임금 × 30일 × (근속연수).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 승진 후 2개월 이상 근무하면 승진 임금 반영 비율이 크게 높아집니다.</blockquote>',
      },
      {
        title: '승진 시점별 유리 전략 4가지',
        content:
          '<p><strong style="color:#1e3a5f">승진일·인상 소급일·상여 지급일이 평균임금에 미치는 영향이 다릅니다.</strong></p>\n<ol>\n<li><strong>1. 승진 시기 확인</strong> — 퇴직일 이전 3개월 중 언제였는지 일 단위로 파악.</li>\n<li><strong>2. 소급 인상 적용</strong> — 연봉계약이 소급되면 과거 분까지 지급 반영 요구.</li>\n<li><strong>3. 미지급 상여 청구</strong> — 승진 후 분기 상여 미지급분은 퇴직 시 일할 정산.</li>\n<li><strong>4. 통상임금 범위 확장</strong> — 승진 수당(직책수당 등)이 통상임금에 들어가는지 별도 판단.</li>\n<li><strong>추가 — 퇴직 시기 조정</strong> — 회사가 동의하면 승진 3개월 후 퇴직이 평균임금상 유리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 승진 반영 후 퇴직금 증가분을 시뮬레이션해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '회사가 깎으려 할 때 반박 포인트',
        content:
          '<p><strong style="color:#1e3a5f">"승진 전 금액" 주장은 법령 해석상 근거가 없습니다.</strong></p>\n<ul>\n<li><strong>"3개월 중 일부만 승진"</strong> — 비율 계산이 아닌 실제 지급액 합산이 원칙.</li>\n<li><strong>"승진은 특별 대우"</strong> — 임금 인상은 근로 대가의 일부, 평균임금 포함.</li>\n<li><strong>"평균임금 통상적 금액 아니다"</strong> — 오히려 높게 산정되면 통상임금 하한 보정 규정 적용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 근로복지공단 "퇴직금 계산기"로 승진 반영 전·후 금액을 비교해 근거 자료로 활용.</blockquote>',
      },
      {
        title: '실무 체크 — 계약서·임금명세서 확인',
        content:
          '<p><strong style="color:#1e3a5f">임금명세서 3개월치 원본 확보가 가장 먼저 할 일입니다.</strong></p>\n<ul>\n<li><strong>명세서 항목 분리</strong> — 기본급·직책수당·성과급 항목별 금액.</li>\n<li><strong>상여금 반영</strong> — 연 지급 상여의 3/12를 평균임금에 더하는지 확인.</li>\n<li><strong>미지급 수당</strong> — 야근·휴일수당 미지급분은 별도 청구와 평균임금 포함 병행.</li>\n<li><strong>통상임금 소송</strong> — 통상임금 범위 확대 판결 활용해 퇴직금 소급 증액 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 퇴직금 수령 시 "이의 없음" 서명 전 가능한 한 재계산 확인, 서명 후 번복 어려움.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 평균임금 산정 기초 임금의 범위',
        summary:
          '대법원 2021다248299 사건(대법원, 2026.01.29 선고)에서 법원은 평균임금 산정의 기초가 되는 임금은 "근로의 대상"으로 지급된 것이어야 하며, 어떤 금품이 근로의 대상으로 지급된 것인지 여부는 지급 의무의 원인·성질·계속성을 종합해 판단한다고 판시했습니다.',
        takeaway:
          '승진 후 증액된 임금도 근로 대상이면 평균임금에 전부 반영되어야 하므로 재계산 청구가 가능합니다.',
      },
    ],
    faq: [
      {
        question: '승진한 지 1주일 만에 퇴직해도 반영되나요?',
        answer:
          '<strong>1주일이어도 해당 기간 실제 지급액은 평균임금에 포함됩니다.</strong> 비율 축소 논리는 법상 근거 없음.',
      },
      {
        question: '연봉 소급 인상 금액이 퇴직 후 지급된 경우는요?',
        answer:
          '<strong>소급분도 지급일이 아닌 대상 기간 기준으로 평균임금에 반영되어야 합니다.</strong> 재계산 요청 가능.',
      },
      {
        question: '성과급 때문에 평균임금이 유난히 높은 달이 있는데요?',
        answer:
          '<strong>연 단위 상여는 3/12, 분기 상여는 기간 비례 계산이 원칙입니다.</strong> 특정 달 몰림 효과는 분산 처리.',
      },
      {
        question: '회사가 "통상임금이 더 높으면 그 기준"이라고 하는데요?',
        answer:
          '<strong>근기법상 평균임금이 통상임금보다 낮으면 통상임금으로 대체합니다.</strong> 두 값 중 유리한 쪽 자동 적용.',
      },
      {
        question: '퇴직금 이미 받았는데 재계산 청구 되나요?',
        answer:
          '<strong>수령 후에도 3년 이내면 차액 청구 가능합니다.</strong> "이의 없음" 서명해도 실질 오계산은 다툴 여지 있음.',
      },
    ],
    cta: {
      text: '퇴직금 계산과 청구 절차, AI로 정리하기',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '평균임금 산정 기준', href: '/guide/retirement/retirement-average-wage-standard' },
      { label: '통상임금 범위 확대', href: '/guide/retirement/retirement-ordinary-wage-scope' },
      { label: '퇴직금 계산 방법', href: '/guide/retirement/retirement-calculation-method' },
      { label: '상여금 퇴직금 반영', href: '/guide/retirement/retirement-bonus-calculation' },
      { label: '퇴직금 재계산 청구', href: '/guide/retirement/retirement-recalculation-claim' },
    ],
  },

  // ─── 11. unemployment / contract-non-renewal-eligibility ───
  {
    domain: 'unemployment',
    slug: 'unemployment-contract-non-renewal-eligibility',
    keyword: '계약 갱신 거절 실업급여',
    questionKeyword: '계약직 갱신을 회사가 거절했는데 실업급여 받을 수 있나요?',
    ctaKeyword: '계약 갱신 거절 실업급여 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '계약 갱신 거절 실업급여 수급 5가지 조건 | 로앤가이드',
      description:
        '계약직 갱신을 회사가 거절했을 때 실업급여 자격이 자동으로 인정되는 조건과 신청 절차, 주의점을 지금 확인하세요.',
    },
    intro:
      '<p>"2년 계약직으로 일했는데 회사가 재계약 안 한대요, 실업급여 되나요?" 정답은 대체로 "됩니다". 고용보험법은 계약기간 만료로 이직하면 원칙적으로 비자발적 이직으로 분류합니다. 다만 근로자가 갱신을 거절한 경우, 이직확인서 오기재 등 함정이 있어 신청 전 꼼꼼한 점검이 필요합니다.</p>',
    sections: [
      {
        title: '5가지 수급 조건 — 모두 충족해야 지급',
        content:
          '<p><strong style="color:#1e3a5f">이직 사유·기간·신청시기 3축을 모두 통과해야 합니다.</strong></p>\n<ul>\n<li><strong>1. 이직 사유</strong> — "계약기간 만료"로 이직확인서 기재(자발 퇴사 아님).</li>\n<li><strong>2. 피보험단위기간</strong> — 이직 전 18개월 중 180일 이상.</li>\n<li><strong>3. 근로 의사</strong> — 재취업 의사와 능력 있을 것.</li>\n<li><strong>4. 적극 구직</strong> — 수급 기간 중 매월 구직활동 증빙.</li>\n<li><strong>5. 신청 시기</strong> — 이직 후 12개월 이내 신청.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 180일은 "근무일" 기준이라 실제로는 7~9개월 근로 필요한 경우가 많음.</blockquote>',
      },
      {
        title: '이직확인서 — 기재 오류가 가장 큰 함정',
        content:
          '<p><strong style="color:#1e3a5f">회사가 "근로자 거절"로 잘못 기재하면 수급이 막힐 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 이직확인서 제출 요구</strong> — 퇴직 후 회사가 10일 내 제출 의무.</li>\n<li><strong>2단계 — 사유 코드 확인</strong> — "23번 계약기간 만료"로 기재됐는지 점검.</li>\n<li><strong>3단계 — 잘못 기재 시 정정</strong> — 본인이 고용센터에 정정 요청 가능.</li>\n<li><strong>4단계 — 증거 제출</strong> — 계약서·재계약 거절 문자·메일 등 실질 입증.</li>\n<li><strong>5단계 — 이의신청</strong> — 불인정 시 90일 이내 이의신청.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 수급 자격과 예상 금액을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '갱신기대권 — 실업급여와 병행 가능',
        content:
          '<p><strong style="color:#1e3a5f">반복 갱신된 경우 부당해고 구제신청과 실업급여 병행도 가능합니다.</strong></p>\n<ul>\n<li><strong>2회 이상 갱신</strong> — 갱신기대권 인정 가능, 부당해고로 다툴 여지.</li>\n<li><strong>실업급여 우선 신청</strong> — 부당해고 다툼과 무관하게 수급 신청은 별개 절차.</li>\n<li><strong>복직 시 반환</strong> — 구제신청 승소로 복직하면 수급액 반환 조치.</li>\n<li><strong>근기법 제28조</strong> — 지노위 구제신청은 통보일 3개월 이내.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 수급 신청 후에도 부당해고 구제는 동시 진행 가능하므로 포기하지 마세요.</blockquote>',
      },
      {
        title: '수급 기간·금액 — 실제 얼마나 받나',
        content:
          '<p><strong style="color:#1e3a5f">근속·나이에 따라 120~270일, 하루 상한 66,000원(2026년 기준).</strong></p>\n<ul>\n<li><strong>소정급여일수</strong> — 50세 미만: 근속 1년 미만 120일 ~ 10년 이상 240일.</li>\n<li><strong>50세 이상·장애인</strong> — 150일 ~ 270일.</li>\n<li><strong>구직급여 일액</strong> — 평균임금의 60%(상한 66,000원, 하한 64,192원).</li>\n<li><strong>조기재취업수당</strong> — 수급기간 절반 이상 남기고 재취업 시 잔여분 50% 지급.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 수급 중 단기 알바 시작했다 신고 안 하면 부정수급, 환수·형사 고발 대상.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 고용보험법 신청기간 규정 해석',
        summary:
          '대법원 2018두47264 사건(대법원, 2021.03.18 선고)에서 법원은 고용보험법 제70조 제2항의 급여 신청기간(종료 후 12개월 이내) 규정이 강행규정인지 훈시규정인지 해석하며, 법정 기한 준수가 수급의 필수 요건임을 확인했습니다.',
        takeaway:
          '계약 만료 후 12개월 이내 가능한 한 신청해야 하며 기한 경과 시 청구권이 소멸할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '근로자가 갱신을 거절하면 실업급여 안 나오나요?',
        answer:
          '<strong>원칙적으로 자발 퇴사로 분류돼 불리합니다.</strong> 다만 근로조건 변경·임금 삭감 등 정당 사유가 있으면 수급 가능.',
      },
      {
        question: '2년짜리 계약 중 중도 해지되면 어떻게 되나요?',
        answer:
          '<strong>중도 해지 사유가 회사 측이면 비자발 이직으로 수급 가능합니다.</strong> 해고·권고사직도 비슷하게 처리.',
      },
      {
        question: '180일 기간은 어떻게 계산하나요?',
        answer:
          '<strong>주 15시간 이상 근무한 날 기준, 연차·유급휴일 포함해 계산됩니다.</strong> 고용보험 가입이력 조회로 정확 확인.',
      },
      {
        question: '회사가 이직확인서 안 주면 어떡하나요?',
        answer:
          '<strong>근로자가 고용센터에 이직확인서 대신 관련 서류로 직접 신청 가능합니다.</strong> 회사는 500만원 이하 과태료 대상.',
      },
      {
        question: '프리랜서 전환 후 수급 신청 되나요?',
        answer:
          '<strong>프리랜서 소득이 수급일액 초과하면 부분 정지됩니다.</strong> 시작 전 가능한 한 신고.',
      },
    ],
    cta: {
      text: '실업급여 받을 수 있는지 AI로 점검하기',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '이직확인서 오기재 정정', href: '/guide/unemployment/unemployment-separation-cert-correction' },
      { label: '피보험단위기간 180일 계산', href: '/guide/unemployment/unemployment-qualifying-days-calc' },
      { label: '계약직 수급 자격', href: '/guide/unemployment/unemployment-fixed-term-eligibility' },
      { label: '실업급여 신청 절차', href: '/guide/unemployment/unemployment-application-procedure' },
      { label: '부정수급 환수 방어', href: '/guide/unemployment/unemployment-fraud-recovery-defense' },
    ],
  },

  // ─── 12. unemployment / workplace-closed-sudden-procedure ───
  {
    domain: 'unemployment',
    slug: 'unemployment-workplace-closed-sudden-procedure',
    keyword: '사업장 폐업 실업급여 절차',
    questionKeyword: '다니던 회사가 갑자기 폐업했는데 실업급여 어떻게 받나요?',
    ctaKeyword: '폐업 시 실업급여 신청 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '회사 폐업 실업급여 신청 2주 4단계 절차 | 로앤가이드',
      description:
        '재직 중 사업장이 갑자기 폐업했다면 실업급여 신청에 필요한 서류와 2주 내 완료해야 할 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"어제까지 출근했는데 오늘 출근하니 문이 잠겨 있었어요, 사장은 연락 두절이고요"라는 상담이 월 단위로 들어옵니다. 폐업은 실업급여에서 가장 명확한 비자발 이직 사유 중 하나입니다. 다만 이직확인서를 사용자가 제출하지 못하는 상황이라, 근로자가 직접 증빙을 모아 고용센터에 소명해야 합니다.</p>',
    sections: [
      {
        title: '폐업 확인 — 첫 주에 해야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">폐업 사실을 객관적으로 입증할 자료를 먼저 확보하세요.</strong></p>\n<ul>\n<li><strong>1. 사업자등록 확인</strong> — 홈택스 "사업자등록 상태조회"로 폐업 여부 무료 조회.</li>\n<li><strong>2. 사업장 사진·동영상</strong> — 문 잠김·집기 반출·안내문 촬영.</li>\n<li><strong>3. 4대보험 상실 확인</strong> — 고용·건강보험 상실신고서 출력.</li>\n<li><strong>4. 연락 시도 기록</strong> — 사용자 통화·문자·이메일 기록 보존.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "연락 두절" 자체가 수급 신청에 걸림돌이 되지 않도록 증빙을 꼼꼼히 남기세요.</blockquote>',
      },
      {
        title: '2주 4단계 신청 절차',
        content:
          '<p><strong style="color:#1e3a5f">폐업 인지일 기준 14일 이내 수급자격 신청이 이상적입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 워크넷 구직 등록</strong> — www.work.go.kr 구직등록 완료(수급 기본 요건).</li>\n<li><strong>2단계 — 온라인 교육 수강</strong> — 고용보험 홈페이지 수급자격 신청자 교육.</li>\n<li><strong>3단계 — 고용센터 방문</strong> — 관할 고용센터에 폐업 증빙·신분증 지참.</li>\n<li><strong>4단계 — 이직확인서 대체 신청</strong> — 사업주 제출 불가 시 근로자 대체 신청서 작성.</li>\n<li><strong>5단계 — 체불 임금 체당금 병행</strong> — 퇴직금·임금 체불 시 동시 신청.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 폐업 상황에서의 수급·체당금 절차를 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '체당금 — 임금·퇴직금 못 받을 때',
        content:
          '<p><strong style="color:#1e3a5f">사업주 무자력 시 국가가 대신 지급, 폐업과 함께 신청해야 빠릅니다.</strong></p>\n<ul>\n<li><strong>간이대지급금</strong> — 퇴직 후 2년 이내, 최대 1,000만원(3개월 임금+3년 퇴직금).</li>\n<li><strong>일반대지급금</strong> — 법원 도산 결정 사업장 전용, 상한 초과 회수 가능.</li>\n<li><strong>필요 서류</strong> — 체불 확인서(근로감독관 발급), 임금명세서, 근로계약서.</li>\n<li><strong>처리 기간</strong> — 신청 후 약 14일.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 실업급여 신청과 체당금 신청은 같은 고용센터에서 동시 진행 가능합니다.</blockquote>',
      },
      {
        title: '주의사항 — 놓치기 쉬운 포인트',
        content:
          '<p><strong style="color:#1e3a5f">폐업은 자동이 아니라 증빙 제출이 필요합니다.</strong></p>\n<ul>\n<li><strong>사업주 잠적</strong> — 근로감독관 신고로 체불 확인서 발급, 이직확인 대체.</li>\n<li><strong>4대보험 미가입</strong> — 소급 가입 요청으로 피보험단위기간 인정 가능.</li>\n<li><strong>폐업 전 임금 일부 수령</strong> — 수령한 부분은 체당금에서 차감.</li>\n<li><strong>12개월 시효</strong> — 폐업 후 12개월 지나면 실업급여 청구권 소멸.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 사업주와 연락이 닿아도 "자진 퇴사"로 기재 유도에 응하지 말고 가능한 한 "폐업"으로 주장하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 폐업 등 이직 사유에 따른 수급 범위',
        summary:
          '대법원 2002두7494 사건(대법원, 2003.09.23 선고)에서 법원은 실업급여 지급 중지 및 반환처분 관련 재결에서 이직 사유의 실질 판단과 근로자의 귀책 없는 이직은 수급 자격 유지의 근거가 된다고 판시했습니다.',
        takeaway:
          '사업장 폐업은 근로자 귀책 없는 비자발 이직이 명확하므로 수급 자격 인정이 쉽습니다.',
      },
    ],
    faq: [
      {
        question: '폐업 신고는 안 되어 있지만 실제로 문 닫은 경우는요?',
        answer:
          '<strong>사실상 폐업 상태도 비자발 이직으로 인정될 수 있습니다.</strong> 사진·영상·거래처 진술로 입증.',
      },
      {
        question: '대표가 연락 두절이라 이직확인서가 없는데요?',
        answer:
          '<strong>근로자가 고용센터에 대체 신청 가능합니다.</strong> 근로계약서·급여명세서로 대체 입증.',
      },
      {
        question: '폐업 전 수개월 임금 체불됐는데 실업급여와 별도로 청구되나요?',
        answer:
          '<strong>체당금 제도로 별도 지급받을 수 있습니다.</strong> 실업급여와 병행 가능, 같은 고용센터 신청.',
      },
      {
        question: '4대보험 미가입 상태에서 폐업했으면 실업급여 못 받나요?',
        answer:
          '<strong>소급 가입을 고용센터에 요청하면 피보험단위기간 인정이 가능합니다.</strong> 급여명세서·계좌 입금 내역이 핵심 증빙.',
      },
      {
        question: '폐업 후 1년 반 지났는데 지금이라도 신청 가능한가요?',
        answer:
          '<strong>수급 청구권 시효는 이직 후 12개월이라 원칙적으로 어렵습니다.</strong> 다만 특별 사유 있으면 이의신청 여지.',
      },
    ],
    cta: {
      text: '실업급여 받을 수 있는지 AI로 점검하기',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '체당금 신청 절차', href: '/guide/unemployment/unemployment-substitute-payment-apply' },
      { label: '이직확인서 대체 신청', href: '/guide/unemployment/unemployment-separation-cert-substitute' },
      { label: '피보험단위기간 180일 계산', href: '/guide/unemployment/unemployment-qualifying-days-calc' },
      { label: '실업급여 신청 절차', href: '/guide/unemployment/unemployment-application-procedure' },
      { label: '4대보험 소급 가입 신청', href: '/guide/unemployment/unemployment-retroactive-insurance-apply' },
    ],
  },
];
