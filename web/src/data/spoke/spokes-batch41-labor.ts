import { SpokePage } from '../spoke-pages';

// batch41 labor 14개: unemployment 4 + retirement 4 + wage 3 + dismissal 3

export const spokesBatch41Labor: SpokePage[] = [
  // ─── 1. unemployment / pregnancy-high-risk-quit ───
  {
    domain: 'unemployment',
    slug: 'unemployment-pregnancy-high-risk-quit',
    keyword: '고위험 임신 퇴사 실업급여',
    questionKeyword: '고위험 임신 진단 후 퇴사해도 실업급여 받나요?',
    ctaKeyword: '고위험 임신 퇴사 실업급여 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '고위험 임신 퇴사 실업급여 인정 요건 4가지 | 로앤가이드',
      description:
        '고위험 임신 진단으로 퇴사해야 할 때 실업급여가 인정되는 의학적 요건과 진단서 제출, 신청 순서를 지금 확인하세요.',
    },
    intro:
      '<p>고위험 임신 진단을 받고 "계속 근무하면 위험하다"는 의사 소견이 나와도 출산휴가 대신 퇴사를 고민하게 됩니다. 고용보험법 시행규칙 제101조의2는 "질병·부상으로 업무 수행이 곤란한 경우"를 정당한 이직 사유로 명시해, 고위험 임신 진단서가 있으면 자발적 퇴사여도 실업급여가 인정될 수 있습니다.</p>',
    sections: [
      {
        title: '고위험 임신 — 정당한 이직 사유 요건',
        content:
          '<p><strong style="color:#1e3a5f">업무 수행이 의학적으로 곤란하고 사업주가 전환배치 등 대안을 제공하지 않은 경우 정당한 사유로 인정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>의학적 기준</strong> — 조기진통·전치태반·임신성고혈압 등 주치의 진단이 필요한 상태.</li>\n<li><strong>업무 부적합</strong> — 장시간 서 있기·야간근무·중량물 취급 등 위험 요소가 있을 것.</li>\n<li><strong>대안 부재</strong> — 사업주에 경감·전환 요청했으나 거절된 경우 유리.</li>\n<li><strong>근거 조항</strong> — 고용보험법 시행규칙 제101조의2 별표2 제1호 마목.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 "힘들어서"가 아니라 "의학적으로 계속 근무가 태아·산모에 위험"이 명확해야 합니다.</blockquote>',
      },
      {
        title: '증빙 서류 — 고용센터 제출 자료',
        content:
          '<p><strong style="color:#1e3a5f">산부인과 진단서와 근무 환경 기록이 두 축입니다.</strong></p>\n<ul>\n<li><strong>고위험 임신 진단서</strong> — 구체적 병명과 "근로 지속 시 위험" 문구 포함.</li>\n<li><strong>소견서·의무기록</strong> — 주치의 소견과 치료 이력, 권고 사항.</li>\n<li><strong>업무 내용 기록</strong> — 근무시간·업무 강도·야간·입식·중량물 등 노출 내역.</li>\n<li><strong>전환 요청 문서</strong> — 사업주에 업무 경감 요청한 메일·공문과 회사 답변.</li>\n<li><strong>출산휴가·휴직 거절 기록</strong> — 대체 휴직 요청이 거절된 경우 큰 가점.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 진단서 요건과 수급자격 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '신청 순서 — 출산휴가·육아휴직 비교 후 결정',
        content:
          '<p><strong style="color:#1e3a5f">퇴사 전 출산전후휴가·육아휴직급여 가능 여부를 먼저 비교해보세요.</strong></p>\n<ul>\n<li><strong>1단계 — 휴직 가능성 검토</strong> — 출산휴가 90일·육아휴직 1년으로 해결되면 퇴사보다 유리.</li>\n<li><strong>2단계 — 전환배치 요청</strong> — 근기법 제74조 제5항은 산모 경미 업무 전환 의무 규정.</li>\n<li><strong>3단계 — 사직서 사유 명시</strong> — "고위험 임신으로 인한 이직"으로 기재.</li>\n<li><strong>4단계 — 고용센터 신청</strong> — 진단서·업무기록·전환 거절 증빙 일괄 제출.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 출산 전 12개월 수급자격 확보 가능하면 퇴사보다 휴가·휴직이 경제적으로 유리한 경우가 많습니다.</blockquote>',
      },
      {
        title: '실무 체크리스트 — 진단서 작성 요령',
        content:
          '<p><strong style="color:#1e3a5f">진단서 한 장이 수급 여부를 가르는 경우가 많습니다.</strong></p>\n<ul>\n<li><strong>구체적 병명</strong> — "고위험 임신" 포괄 표현보다 "전치태반 1단계" 등 구체 기재.</li>\n<li><strong>근로 부적합 문구</strong> — "현 업무 지속 시 태아·산모 위험" 명확히 기재 요청.</li>\n<li><strong>예상 기간</strong> — "출산일까지" 또는 "O주간" 구체 기간 명시.</li>\n<li><strong>발급 시점</strong> — 퇴사 직전(1~2주 이내) 발급된 진단서가 가장 효력 강함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 산모건강수첩·초음파 사진만으로는 근로 부적합 입증이 부족합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 근로조건 저하 이직의 수급자격',
        summary:
          '대법원 2018두63235 사건(대법원, 2022.10.27 선고)에서 법원은 근로자의 귀책사유 없이 근로 지속이 곤란해진 경우에는 고용보험 관련 규정을 실질적으로 해석하여 수급자격 또는 가입자격을 보호해야 한다고 판시했습니다. 이 법리는 고위험 임신처럼 본인 의지와 무관한 의학적 사유의 이직에도 적용됩니다.',
        takeaway:
          '의학적 진단이 있으면 자발적 퇴사여도 수급자격이 보장됩니다.',
      },
    ],
    faq: [
      {
        question: '진단서에 어떤 문구가 꼭 들어가야 하나요?',
        answer:
          '<strong>"현재 업무 지속 시 태아·산모에게 위험" 문구가 핵심입니다.</strong> "안정 가료 요함" 정도로는 부족할 수 있습니다.',
      },
      {
        question: '출산휴가 대신 퇴사하면 불리한가요?',
        answer:
          '<strong>수급자격은 인정되지만, 출산휴가·육아휴직이 경제적으로 유리한 경우가 많습니다.</strong> 두 제도를 비교 후 결정하세요.',
      },
      {
        question: '주 15시간 미만 근무자도 가능한가요?',
        answer:
          '<strong>고용보험 180일 이상 가입 이력이 있어야 합니다.</strong> 단시간 근로자도 합산 가능.',
      },
      {
        question: '사업주가 "퇴사 말고 쉬어라" 했는데요?',
        answer:
          '<strong>유급 병가·무급 휴직 대안이 있으면 그 쪽이 우선 고려됩니다.</strong> 다만 사업주 대안이 현실성 없으면 퇴사 정당성 인정.',
      },
      {
        question: '이직확인서 사유가 "개인사유"로 기재되면요?',
        answer:
          '<strong>진단서 제출해 고용센터에 정정 요청할 수 있습니다.</strong> 의학 증빙이 있으면 심사에서 뒤집힙니다.',
      },
    ],
    cta: {
      text: '실업급여 받을 수 있는지 AI로 점검하기',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '자발적 퇴사 예외 사례 정리', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '임신 실업급여 연장 제도', href: '/guide/unemployment/unemployment-pregnancy-benefit-extension' },
      { label: '출산전후휴가 급여 신청', href: '/guide/unemployment/unemployment-maternity-voluntary-quit' },
      { label: '실업급여 신청 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '이직확인서 정정 방법', href: '/guide/unemployment/employment-insurance-separation-certificate' },
    ],
  },

  // ─── 2. unemployment / commute-2hour-relocation-quit ───
  {
    domain: 'unemployment',
    slug: 'unemployment-commute-2hour-relocation-quit',
    keyword: '이사 통근 2시간 퇴사 실업급여',
    questionKeyword: '이사 때문에 통근 2시간 넘으면 실업급여 받나요?',
    ctaKeyword: '통근 장시간 퇴사 실업급여 점검',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '이사로 통근 왕복 3시간 퇴사 실업급여 기준 5가지 | 로앤가이드',
      description:
        '본인 또는 가족 이사로 왕복 통근이 3시간을 넘어 퇴사할 때 실업급여가 인정되는 요건과 증빙 자료를 지금 확인하세요.',
    },
    intro:
      '<p>결혼·배우자 발령·부모 부양 등으로 이사가 불가피해 통근이 비현실적이 되면 "자진퇴사"로 분류될까 걱정이 커집니다. 고용보험법 시행규칙 제101조의2는 "통상 출퇴근 편도 1시간 30분 이상(왕복 3시간 이상)이 되어 통근이 곤란한 경우"를 정당한 이직 사유로 명시하고 있어, 증빙만 있으면 수급이 가능합니다.</p>',
    sections: [
      {
        title: '통근 왕복 3시간 기준 — 정당 이직 사유',
        content:
          '<p><strong style="color:#1e3a5f">편도 1시간 30분, 왕복 3시간 이상의 대중교통 통근이면 수급자격이 인정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>기준 시간</strong> — 편도 1시간 30분 이상(왕복 3시간) 대중교통 기준.</li>\n<li><strong>이동 수단</strong> — 자차 아닌 대중교통 기준이 원칙. 대중교통 없는 지역은 도보·택시 포함.</li>\n<li><strong>불가피성</strong> — 본인 이사가 아닌 가족 이사·배우자 발령 등도 인정.</li>\n<li><strong>근거 조항</strong> — 고용보험법 시행규칙 제101조의2 별표2 제2호 마목.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "네이버·카카오맵 대중교통 최단 경로" 기준 소요시간으로 판단합니다.</blockquote>',
      },
      {
        title: '이사 불가피성 — 인정되는 사유',
        content:
          '<p><strong style="color:#1e3a5f">"그냥 가고 싶어서"가 아닌 객관적 불가피성이 있어야 합니다.</strong></p>\n<ul>\n<li><strong>배우자 발령·전근</strong> — 배우자 회사 인사명령서 증빙.</li>\n<li><strong>부모·가족 부양</strong> — 진단서·장기요양등급·동거 증빙.</li>\n<li><strong>결혼·출산</strong> — 혼인관계증명서·임신확인서.</li>\n<li><strong>주택 강제 이전</strong> — 재개발·전세 계약 종료로 같은 지역 전세 확보 불가 등.</li>\n<li><strong>자녀 양육·학교</strong> — 배우자 부재·학교 근접 필요성.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 이사 사유와 통근시간 요건을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증빙 서류 — 고용센터 제출 준비물',
        content:
          '<p><strong style="color:#1e3a5f">새 주소·옛 주소 + 대중교통 경로 캡처가 핵심 3종 세트입니다.</strong></p>\n<ul>\n<li><strong>주민등록초본</strong> — 최근 1년 이내 주소 이전 이력 표시.</li>\n<li><strong>전입신고 확인서</strong> — 이사 완료 시점 입증.</li>\n<li><strong>대중교통 경로 캡처</strong> — 네이버·카카오맵 "집→회사" 소요시간 스크린샷.</li>\n<li><strong>이사 사유 증빙</strong> — 배우자 인사명령서·임대차계약서·가족 진단서 등.</li>\n<li><strong>기존 출퇴근 기록</strong> — 퇴사 직전 지각·결근 이력(통근 곤란 보조 증거).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 스크린샷은 신청일 기준 최근 1개월 내 캡처해 제출하세요.</blockquote>',
      },
      {
        title: '신청 순서 — 이사 전·후 시점 정리',
        content:
          '<p><strong style="color:#1e3a5f">이사·퇴사·수급 신청 타이밍이 엉키면 심사에서 불리해집니다.</strong></p>\n<ul>\n<li><strong>이사 전</strong> — 사업주에 원거리 통근 상황 서면 통보, 답변 보관.</li>\n<li><strong>이사 직후 퇴사</strong> — 전입신고·퇴사 시점이 인과관계 입증 핵심.</li>\n<li><strong>사직서 사유</strong> — "이사로 인한 통근 곤란(왕복 3시간 초과)" 명시.</li>\n<li><strong>고용센터 신청</strong> — 14일 이내 수급자격 신청, 증빙 일괄 제출.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 이사 6개월 후 갑자기 "통근 곤란"으로 퇴사하면 인과관계 부정될 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 근로조건 저하에 따른 정당 이직',
        summary:
          '서울행법 2014구합2270 사건(서울행정법원, 2014.07.03 선고)에서 법원은 2개월 이상 근로조건이 채용 시 제시된 수준보다 낮아지는 것이 장래에 확정된 경우를 정당한 이직 사유로 인정했습니다. 이 법리는 이사로 통근이 비현실적으로 변경된 경우에도 준용되어, 구조적 근로 곤란이면 수급자격이 보호됩니다.',
        takeaway:
          '객관적 통근 곤란은 근로조건 저하와 동일하게 보호됩니다.',
      },
    ],
    faq: [
      {
        question: '왕복 3시간 딱 넘으면 원칙적으로 되나요?',
        answer:
          '<strong>시간 요건 + 이사 불가피성 둘 다 필요합니다.</strong> "단순 선택 이사"는 인정되지 않을 수 있습니다.',
      },
      {
        question: '자동차로는 1시간인데 대중교통은 2시간인 경우는요?',
        answer:
          '<strong>대중교통 기준이 원칙입니다.</strong> 자차 이동만 가능한 구조면 대중교통 소요시간으로 판단.',
      },
      {
        question: '이사 전에 퇴사하면 어떻게 되나요?',
        answer:
          '<strong>실제 이사가 확정된 상태여야 인정될 수 있습니다.</strong> 계약서·임대차계약서 등 예정 증빙이 필요합니다.',
      },
      {
        question: '전세 계약 만료로 어쩔 수 없이 이사한 경우도 되나요?',
        answer:
          '<strong>같은 지역 내 유사 조건 주택 확보 곤란 증빙이 있으면 가능합니다.</strong> 부동산 시세 자료·문자 기록 활용.',
      },
      {
        question: '통근 버스·셔틀이 있는 경우는요?',
        answer:
          '<strong>회사가 제공하는 교통수단 소요시간으로 판단합니다.</strong> 셔틀이 있으면 시간 기준 달라질 수 있음.',
      },
    ],
    cta: {
      text: '실업급여 받을 수 있는지 AI로 점검하기',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '자발적 퇴사 예외 사례 정리', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
      { label: '통근 곤란 퇴사 실업급여', href: '/guide/unemployment/unemployment-commute-hardship-quit' },
      { label: '사업장 이전 퇴사 수급', href: '/guide/unemployment/unemployment-workplace-relocation-forced-quit' },
      { label: '실업급여 신청 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
      { label: '이직확인서 정정 방법', href: '/guide/unemployment/employment-insurance-separation-certificate' },
    ],
  },

  // ─── 3. unemployment / contract-end-reapply-eligibility ───
  {
    domain: 'unemployment',
    slug: 'unemployment-contract-end-reapply-eligibility',
    keyword: '계약만료 비갱신 실업급여 재신청',
    questionKeyword: '계약직 만료 후 다시 실업급여 받을 수 있나요?',
    ctaKeyword: '계약만료 재신청 수급자격 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '계약만료 비갱신 실업급여 재신청 자격 5가지 | 로앤가이드',
      description:
        '계약만료로 재취업 후 또 계약만료를 맞은 경우 실업급여 재신청 가능 여부와 18개월·180일 요건을 지금 확인하세요.',
    },
    intro:
      '<p>1년 계약직이 끝나 다른 회사에 들어갔는데 또 계약만료를 맞으면 "실업급여는 한 번 받았는데 또 될까" 혼란스럽습니다. 고용보험법 제40조는 이직일 이전 18개월 동안 180일 이상 피보험단위기간이면 재신청이 가능하다고 규정해, 단기 계약을 반복하는 경우에도 수급자격이 자주 인정될 수 있습니다.</p>',
    sections: [
      {
        title: '재신청 가능 요건 — 18개월·180일',
        content:
          '<p><strong style="color:#1e3a5f">이전 수급 후 새로 180일 이상 일했다면 재신청 가능합니다.</strong></p>\n<ul>\n<li><strong>피보험단위기간</strong> — 이직일 이전 18개월 중 180일 이상(고용보험법 제40조).</li>\n<li><strong>이직 사유</strong> — 계약만료·정년·폐업·권고사직 등 비자발적 이직이어야 함.</li>\n<li><strong>이전 수급 종료</strong> — 이전 수급이 완전 종료됐거나 중도 정지 후 미수령분 소멸.</li>\n<li><strong>근거 조항</strong> — 고용보험법 제40조 제1항·제43조.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "최초 수급 이력"이 있어도 새 조건 충족하면 몇 번이든 재신청 가능.</blockquote>',
      },
      {
        title: '계약만료 비갱신 — 정당 이직 인정',
        content:
          '<p><strong style="color:#1e3a5f">계약만료는 자발적 이직이 아니므로 수급자격이 자동 인정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>근로계약서 확인</strong> — 계약기간 명시 조항과 만료일 확인.</li>\n<li><strong>회사의 비갱신 통보</strong> — 서면·문자로 갱신 거부 의사 확인.</li>\n<li><strong>갱신기대권 판단</strong> — 반복 갱신 관행·계속 고용 기대 증거가 있으면 부당해고 구제 가능.</li>\n<li><strong>파견·용역</strong> — 원청 계약 만료로 파견직이 종료된 경우도 비자발 이직.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 이전 수급 내역과 재신청 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '소정급여일수 재산정 — 실질 수령액 비교',
        content:
          '<p><strong style="color:#1e3a5f">재신청 시 소정급여일수는 "새 이직 기준 피보험기간·나이"로 재계산됩니다.</strong></p>\n<ul>\n<li><strong>피보험기간 합산</strong> — 이전 수급 후 새로 쌓인 기간만 적용(과거 기간 재사용 불가).</li>\n<li><strong>나이 기준</strong> — 이직 당시 만 나이로 일수표 재적용.</li>\n<li><strong>예시</strong> — 34세·신규 피보험 1년이면 120일, 35세·2년이면 150일.</li>\n<li><strong>상한 기준</strong> — 50세 이상·장애인은 최대 270일까지 증가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 첫 수급 후 1년 정도 더 일했다면 대개 120일분을 추가로 받을 수 있습니다.</blockquote>',
      },
      {
        title: '신청 절차 — 재신청 시 주의점',
        content:
          '<p><strong style="color:#1e3a5f">이전 수급 내역이 전산으로 연동되므로 숨기지 말고 자연스럽게 신청하세요.</strong></p>\n<ul>\n<li><strong>1단계 — 피보험자격확인</strong> — 고용보험 홈페이지에서 새 가입·상실 내역 확인.</li>\n<li><strong>2단계 — 이직확인서 요청</strong> — 새 회사에 계약만료 사유 기재된 이직확인서 요청.</li>\n<li><strong>3단계 — 수급자격 신청</strong> — 관할 고용센터에 서류 제출.</li>\n<li><strong>4단계 — 대기기간</strong> — 7일 대기 후 급여 지급 개시(기존 수급 후라도 동일).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "이전 수급 중 미수령분"이 남아 있으면 그게 먼저 정산됩니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 해외 전출 후 12개월 경과와 수급기간',
        summary:
          '울산지법 2013구합2840 사건(울산지방법원, 2014.04.24 선고)에서 법원은 고용관계가 종료된 후 12개월이 지나면 구직급여 수급기간이 만료된다고 판시했습니다. 계약만료 재신청 시에도 "새 이직일"을 기준으로 18개월·180일 요건을 다시 판단해야 한다는 원칙이 확인됩니다.',
        takeaway:
          '재신청도 "새 이직일 기준"으로 요건을 다시 따져야 합니다.',
      },
    ],
    faq: [
      {
        question: '1년 안에 이전 수급과 새 수급 둘 다 받을 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 이전 수급 종료 후 새로 180일 쌓이면 같은 해에도 재신청 가능.',
      },
      {
        question: '180일에서 주말·공휴일은 빠지나요?',
        answer:
          '<strong>유급으로 처리된 날은 모두 포함됩니다.</strong> 주휴일·연차유급휴가 포함.',
      },
      {
        question: '이전 수급 중 남은 급여가 있으면요?',
        answer:
          '<strong>새 신청 전 남은 잔여일수가 우선 소진됩니다.</strong> 3년 지나면 소멸되므로 빨리 활용하세요.',
      },
      {
        question: '계약서에 "갱신 기대" 문구가 있었는데 갱신 안 되면?',
        answer:
          '<strong>갱신기대권 침해로 부당해고 다툴 수 있습니다.</strong> 동시에 실업급여 신청 가능.',
      },
      {
        question: '단기 반복 계약직도 매번 수급 가능한가요?',
        answer:
          '<strong>180일 요건만 충족하면 가능합니다.</strong> 다만 "부정수급 의심" 심사가 강화될 수 있음.',
      },
      {
        question: '계약 갱신 거부를 제가 먼저 한 경우는요?',
        answer:
          '<strong>이 경우 자발적 이직으로 처리될 수 있습니다.</strong> 회사의 비갱신 통보가 선행되어야 유리.',
      },
    ],
    cta: {
      text: '실업급여 받을 수 있는지 AI로 점검하기',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '계약만료 실업급여 기본', href: '/guide/unemployment/unemployment-contract-end-no-renewal' },
      { label: '재취업 후 재신청 제도', href: '/guide/unemployment/unemployment-rehire-second-claim' },
      { label: '180일 피보험단위기간 계산', href: '/guide/unemployment/unemployment-180days-insurance-period-calc' },
      { label: '실업급여 반복 신청 한도', href: '/guide/unemployment/unemployment-repeat-claim-limit' },
      { label: '실업급여 신청 전체 절차', href: '/guide/unemployment/application-to-payment-full-procedure' },
    ],
  },

  // ─── 4. unemployment / recommended-resign-proof-method ───
  {
    domain: 'unemployment',
    slug: 'unemployment-recommended-resign-proof-method',
    keyword: '권고사직 실업급여 증빙',
    questionKeyword: '권고사직 맞는데 회사가 자진퇴사로 처리하면요?',
    ctaKeyword: '권고사직 입증 실업급여 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '권고사직 수급자격 입증 방법 5단계 | 로앤가이드',
      description:
        '권고사직으로 퇴사했는데 회사가 자진퇴사로 기재했을 때 실업급여 수급자격을 뒤집는 증빙 수집 방법을 지금 확인하세요.',
    },
    intro:
      '<p>회사에서 "그만 나오는 게 어떻겠냐"는 말을 반복해 퇴사했는데 이직확인서에는 "개인사유"라고 기재된 경우가 많습니다. 고용보험법 시행규칙 제101조의2에 따른 권고사직은 비자발적 이직으로 분류되지만, 회사가 자진퇴사로 처리하면 수급자격이 거절될 수 있어 증빙 확보가 승부처입니다.</p>',
    sections: [
      {
        title: '권고사직 — 실업급여 인정 기준',
        content:
          '<p><strong style="color:#1e3a5f">사업주가 퇴사를 요청·권유해 근로자가 수용한 이직이면 수급자격 있습니다.</strong></p>\n<ul>\n<li><strong>권유 주체</strong> — 사업주·인사담당자·직속상사가 퇴사 의사를 제시한 경우.</li>\n<li><strong>정당성</strong> — 경영상 이유·조직 개편·실적 부진 등 회사 사정에 기인.</li>\n<li><strong>수용 형식</strong> — 근로자가 사직서를 쓰더라도 권유가 선행되면 권고사직.</li>\n<li><strong>근거 조항</strong> — 고용보험법 시행규칙 제101조의2 별표2 제3호 가목.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "사직서를 썼다" = 자진퇴사가 아님. 권유 경위가 우선입니다.</blockquote>',
      },
      {
        title: '증빙 수집 — 권유 증명 자료',
        content:
          '<p><strong style="color:#1e3a5f">회사 주장에 대항하려면 "권유 사실"을 객관화하는 것이 핵심입니다.</strong></p>\n<ul>\n<li><strong>녹취 파일</strong> — 본인이 당사자면 합법. 면담 일시·참석자 메모 병기.</li>\n<li><strong>메신저·이메일</strong> — 인사팀·상사와 주고받은 퇴사 관련 대화 캡처.</li>\n<li><strong>동료 진술서</strong> — 권고 장면을 목격·청취한 동료의 서명 문서.</li>\n<li><strong>권고사직 동의서</strong> — 회사가 받은 경우 그 자체가 증빙.</li>\n<li><strong>퇴직 위로금</strong> — 별도 위로금·정산 내역은 권고사직 보조 증거.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 권고 증빙 수준과 수급자격 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '이직확인서 정정 — 핵심 절차',
        content:
          '<p><strong style="color:#1e3a5f">회사가 자진퇴사로 기재해도 고용센터에 정정 요청할 수 있습니다.</strong></p>\n<ul>\n<li><strong>1단계 — 이직확인서 열람</strong> — 고용보험 홈페이지에서 기재 사유 확인.</li>\n<li><strong>2단계 — 정정 요청</strong> — 회사에 "권고사직으로 수정" 서면 요구, 거절 시 회신 보관.</li>\n<li><strong>3단계 — 고용센터 정정 신청</strong> — 증빙 첨부해 "수급자격 인정 신청서"에 분쟁 사항 기재.</li>\n<li><strong>4단계 — 조사 대응</strong> — 고용센터가 회사에 확인 조사, 증빙 제출 기회 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정정 요청 단계에서 증빙이 강하면 회사가 자진 수정하는 경우도 많습니다.</blockquote>',
      },
      {
        title: '실무 체크리스트 — 권고 시점 대응',
        content:
          '<p><strong style="color:#1e3a5f">권고 받은 순간부터 기록이 생명입니다. "조용히 나가기"가 가장 불리합니다.</strong></p>\n<ul>\n<li><strong>면담 녹취</strong> — 퇴사 면담마다 녹취 + 날짜·참석자 기록.</li>\n<li><strong>사직서 작성 시점</strong> — 권유받은 후 작성했음을 시간순으로 기록.</li>\n<li><strong>사직서 사유</strong> — "회사 권고에 따른 사직"으로 명시, "개인사유" 기재 금지.</li>\n<li><strong>동료 간접 증인</strong> — 권고 사실을 공유받은 동료의 서명·연락처 확보.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "추후 재취업에 나쁘다"는 권유에 속아 "개인사유"로 쓰지 마세요. 수급자격을 잃습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 부당해고 복직 후 구직급여 회수',
        summary:
          '대구지법 2014구합1590 사건(대구지방법원, 2014.12.24 선고)에서 법원은 원직복직된 근로자가 받았던 구직급여는 요건 미충족으로 회수 대상이라고 판시했습니다. 이는 반대로 "회사가 자진퇴사로 처리했더라도 실질이 권고사직이면 수급자격이 인정된다"는 원칙과 맞닿아 있습니다.',
        takeaway:
          '이직 실질이 권고사직이면 자진퇴사 기재가 있어도 수급자격이 보호됩니다.',
      },
    ],
    faq: [
      {
        question: '사직서를 제가 먼저 썼는데도 권고사직 되나요?',
        answer:
          '<strong>회사의 권유가 선행됐다면 가능합니다.</strong> 권유-사직서 작성 간 시간순 증빙이 핵심.',
      },
      {
        question: '녹취가 없으면 어려운가요?',
        answer:
          '<strong>메신저·이메일·동료 진술로도 가능합니다.</strong> 여러 자료를 조합해 객관성을 높이세요.',
      },
      {
        question: '퇴직 위로금을 받으면 권고사직 인정되나요?',
        answer:
          '<strong>강력한 보조 증거입니다.</strong> 특별 위로금·정산은 회사가 권고를 자인한 간접 증명.',
      },
      {
        question: '회사가 정정 요청을 무시하면 어떻게 하나요?',
        answer:
          '<strong>고용센터에 분쟁 사항으로 제출하세요.</strong> 센터가 직접 회사에 사실 확인 조사합니다.',
      },
      {
        question: '권고사직 거부하면 불이익이 있나요?',
        answer:
          '<strong>법적으로는 거부 가능합니다.</strong> 다만 실무상 불편할 수 있으니 거부 시점·경위를 기록하세요.',
      },
    ],
    cta: {
      text: '실업급여 받을 수 있는지 AI로 점검하기',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '권고사직 함정 이직확인서', href: '/guide/dismissal/dismissal-recommended-resign-trap' },
      { label: '사업주 강제 사직 실업급여', href: '/guide/unemployment/unemployment-employer-forced-resignation' },
      { label: '이직확인서 정정 방법', href: '/guide/unemployment/employment-insurance-separation-certificate' },
      { label: '이직확인서 분쟁 대응', href: '/guide/unemployment/unemployment-separation-confirmation-dispute' },
      { label: '자발적 퇴사 예외 사례 정리', href: '/guide/unemployment/voluntary-quit-unemployment-eligibility' },
    ],
  },

  // ─── 5. retirement / dc-to-db-conversion-settlement ───
  {
    domain: 'retirement',
    slug: 'retirement-dc-to-db-conversion-settlement',
    keyword: 'DC형 DB형 전환 퇴직금 정산',
    questionKeyword: 'DC형에서 DB형으로 바꿀 때 퇴직금은 어떻게 되나요?',
    ctaKeyword: 'DC DB 전환 정산 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: 'DC형→DB형 전환 시 퇴직금 정산 기준 4단계 | 로앤가이드',
      description:
        '확정기여형(DC)에서 확정급여형(DB)으로 변경할 때 이미 쌓인 부담금 처리와 정산 절차, 세제 이슈를 지금 확인하세요.',
    },
    intro:
      '<p>회사가 퇴직연금 제도를 DC형에서 DB형으로 바꾼다고 하면 "기존에 내 계좌에 쌓인 돈은 어떻게 되는지" 혼란스럽습니다. 근로자퇴직급여 보장법 제38조는 제도 전환 시 기존 적립금 보호 원칙을 규정하며, 실무에서는 DC 적립금을 개인형 IRP로 이관하거나 DB 재원으로 통합하는 방식이 있습니다.</p>',
    sections: [
      {
        title: '전환 방식 — 두 가지 기본 모델',
        content:
          '<p><strong style="color:#1e3a5f">DC 적립금을 어떻게 처리할지에 따라 전환 효과가 달라집니다.</strong></p>\n<ul>\n<li><strong>방식1 — 기존 DC 잔존, 신규만 DB</strong> — 기존 적립금은 DC 계좌 유지, 전환일 이후 근속분만 DB 적용.</li>\n<li><strong>방식2 — DC 중도 정산 후 DB 통합</strong> — 기존 DC를 IRP로 이관하고 신규 DB 재원으로 통합.</li>\n<li><strong>방식3 — 선택권 부여</strong> — 근로자 동의로 DC 유지 또는 DB 편입 선택.</li>\n<li><strong>근거 조항</strong> — 근로자퇴직급여 보장법 제38조, 동법 시행령 제42조.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 전환으로 "근속기간이 끊기는 효과"가 발생하지 않아야 합니다.</blockquote>',
      },
      {
        title: '근로자 동의 절차 — 강행 규정',
        content:
          '<p><strong style="color:#1e3a5f">제도 전환은 취업규칙 변경이므로 근로자 과반수 동의가 필요합니다.</strong></p>\n<ul>\n<li><strong>과반수 동의 원칙</strong> — 불이익 변경 시 근기법 제94조에 따라 근로자 과반 동의 필요.</li>\n<li><strong>노동조합 동의</strong> — 과반수 노조 있으면 노조 동의로 갈음.</li>\n<li><strong>설명회 의무</strong> — 회사는 DC·DB 비교 자료로 사전 설명.</li>\n<li><strong>변경 계약</strong> — 퇴직연금 규약 변경 후 금융사·관할 관청 신고.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 전환 방식에 따른 실제 퇴직금 차이를 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '불이익 여부 판단 — 실제 비교',
        content:
          '<p><strong style="color:#1e3a5f">DC→DB 전환은 근로자에게 유리할 수도 불리할 수도 있습니다.</strong></p>\n<ul>\n<li><strong>DC 유리 상황</strong> — 운용 수익률이 임금상승률 초과할 때, 이직 잦은 경우.</li>\n<li><strong>DB 유리 상황</strong> — 장기 근속 + 꾸준한 임금상승 기대, 안정 선호.</li>\n<li><strong>전환 시 보호</strong> — 기존 DC 적립금은 원금 보장 또는 보험계리적 산정값 이전.</li>\n<li><strong>세제 이슈</strong> — 중도 정산 후 IRP 이관 시 과세 이연 가능, 일반 해지 시 퇴직소득세 부담.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 전환 설명회에서 "내 나이·근속·임금 기준" 예상 금액을 문서로 요구하세요.</blockquote>',
      },
      {
        title: '실무 체크리스트 — 전환 동의 전 확인',
        content:
          '<p><strong style="color:#1e3a5f">서명 전에 "내 몫"이 정확히 보장되는지 확인해야 합니다.</strong></p>\n<ul>\n<li><strong>기존 DC 잔액 확인</strong> — 금융사 계좌 명세로 현재 평가액 캡처.</li>\n<li><strong>전환 후 DB 산정식</strong> — 평균임금·근속연수 산정 방식 문서 요구.</li>\n<li><strong>선택권 유무</strong> — "DC 유지 선택 가능" 조항이 있는지 확인.</li>\n<li><strong>이관 비용</strong> — IRP 이관 수수료·세금 여부 서면 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "강제 전환 동의 없음"이면 근기법 제94조 위반으로 무효 다툴 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 관련 판례: 대표이사 보수 결정과 퇴직금',
        summary:
          '대법원 2025다214605 사건(대법원, 2025.12.11 선고)에서 법원은 이사의 보수·퇴직금 관련 정관·주주총회 결의가 없으면 청구권을 행사할 수 없다고 판시했습니다. 이는 퇴직연금 제도 변경 역시 규약·동의라는 법적 절차를 거쳐야만 효력이 생긴다는 원칙과 맞닿아 있습니다.',
        takeaway:
          '퇴직연금 제도 전환도 규약·근로자 동의라는 법적 절차가 필수입니다.',
      },
    ],
    faq: [
      {
        question: 'DC 잔액은 전환 시 어떻게 되나요?',
        answer:
          '<strong>IRP로 이관하거나 DC 계좌 유지 중 선택할 수 있는 것이 일반적입니다.</strong> 회사 규약을 먼저 확인하세요.',
      },
      {
        question: '전환에 반대하면 어떻게 되나요?',
        answer:
          '<strong>과반수 동의 없이는 전환이 무효입니다.</strong> 소수 반대는 과반 동의로 진행 가능.',
      },
      {
        question: '전환 시 세금은 내야 하나요?',
        answer:
          '<strong>IRP 이관은 과세 이연됩니다.</strong> 중도 해지 시에만 퇴직소득세 부과.',
      },
      {
        question: '운용 수익률이 좋아서 DC가 유리했는데요?',
        answer:
          '<strong>선택권 보장 없이 강제 전환이면 불이익 변경입니다.</strong> 서명 전 선택권 조항 확인하세요.',
      },
      {
        question: '이직하면 DB 퇴직금은 어떻게 받나요?',
        answer:
          '<strong>이직 시 IRP로 이관하는 것이 원칙입니다.</strong> 일시금 수령 시 퇴직소득세 부과.',
      },
    ],
    cta: {
      text: '퇴직금 계산과 청구 절차, AI로 정리하기',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: 'DC·DB 제도 기본 비교', href: '/guide/retirement/retirement-dc-db-type-difference' },
      { label: '퇴직금 중간정산 요건', href: '/guide/retirement/retirement-interim-settlement-2024-rules' },
      { label: 'IRP 이관 필수 절차', href: '/guide/retirement/retirement-irp-transfer-requirement' },
      { label: '평균임금 산정 기준', href: '/guide/retirement/retirement-average-wage-dispute' },
      { label: '퇴직금 계산 전체 절차', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 6. retirement / performance-bonus-business-profit ───
  {
    domain: 'retirement',
    slug: 'retirement-performance-bonus-business-profit',
    keyword: '경영성과급 퇴직금 포함 기준',
    questionKeyword: '경영성과급은 퇴직금 계산에 들어가나요?',
    ctaKeyword: '경영성과급 퇴직금 산입 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '경영성과급 퇴직금 산입 판단 기준 5가지 | 로앤가이드',
      description:
        '경영성과급이 퇴직금 평균임금에 포함되는지 판단하는 3요건과 목표 인센티브·당기순이익 기준의 차이를 지금 확인하세요.',
    },
    intro:
      '<p>"올해 경영성과급 많이 받았는데 왜 퇴직금에는 반영이 안 됐지" 의문이 드는 경우가 많습니다. 대법원은 "목표 인센티브는 근로 대가로 퇴직금에 포함되지만, 당기순이익 실현 조건부 성과급은 경영성과 분배로 제외된다"는 기준을 확립해, 성과급의 성격별로 결과가 갈립니다.</p>',
    sections: [
      {
        title: '임금성 3요건 — 성과급 유형별 판단',
        content:
          '<p><strong style="color:#1e3a5f">"계속성·정기성·근로 대가성" 3요건 모두 갖춰야 퇴직금 산입.</strong></p>\n<ul>\n<li><strong>계속성</strong> — 매년·반기 등 일정 주기 반복 지급되었는지.</li>\n<li><strong>정기성</strong> — 단체협약·취업규칙·근로관행으로 지급 의무 확립.</li>\n<li><strong>근로 대가성</strong> — 지급 의무 발생이 근로제공과 직접 관련.</li>\n<li><strong>판단 예외</strong> — 당기순이익 발생 여부에 좌우되는 성과급은 "경영성과 분배".</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "근로성과 정산"이면 포함, "경영성과 분배"면 제외.</blockquote>',
      },
      {
        title: '포함 사례 vs 제외 사례',
        content:
          '<p><strong style="color:#1e3a5f">이름이 같은 "성과급"이라도 실질에 따라 결과가 달라집니다.</strong></p>\n<ul>\n<li><strong>포함 사례 — 목표 인센티브</strong> — 사전 정해진 평가 기준·계산식으로 매년 지급.</li>\n<li><strong>포함 사례 — 정기상여금</strong> — 분기·반기 고정 지급, 성과 평가 영향 적음.</li>\n<li><strong>제외 사례 — 특별성과급</strong> — "당기순이익 발생 시" 조건부 1회성 지급.</li>\n<li><strong>제외 사례 — EVA 인센티브</strong> — 경제적 부가가치 기반, 외부 변수 영향 큰 경우.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 귀사 성과급 구조와 퇴직금 산입 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '실제 차액 — 계산 예시',
        content:
          '<p><strong style="color:#1e3a5f">성과급 1,000만원 포함 여부로 수백만원 차이가 발생합니다.</strong></p>\n<ul>\n<li><strong>성과급 연 1,000만원</strong> — 3개월 평균 약 250만원 × 3 = 750만원 평균임금 증가.</li>\n<li><strong>일 평균임금 증가</strong> — 750만원 / 92일 = 약 8.1만원.</li>\n<li><strong>10년 근속 시</strong> — 퇴직금 차이 약 2,400만원.</li>\n<li><strong>20년 근속 시</strong> — 약 4,900만원 차이.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 "성과급 제외" 조항 넣어도 실질 요건 충족이면 무효입니다.</blockquote>',
      },
      {
        title: '청구 절차 — 증빙 수집부터 소송까지',
        content:
          '<p><strong style="color:#1e3a5f">성과급 임금성 입증은 규정·지급이력 등 체계적 증빙이 필수입니다.</strong></p>\n<ul>\n<li><strong>1단계 — 성과급 규정 확보</strong> — 취업규칙·단체협약·평가 기준표.</li>\n<li><strong>2단계 — 지급 이력</strong> — 최소 3년치 지급명세서·통장 내역.</li>\n<li><strong>3단계 — 회사 청구</strong> — 재계산 결과 내용증명.</li>\n<li><strong>4단계 — 노동청·소송</strong> — 거부 시 노동청 진정, 사실관계 다투면 민사소송.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 성과급 사건은 사실관계 복잡해 민사소송이 노동청보다 효과적일 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 특별성과급 임금성 부인',
        summary:
          '대법원 2022다255454 사건(대법원, 2026.01.29 선고)에서 법원은 "당기순이익 실현"을 조건으로 지급된 특별성과급은 경영성과 분배 성격으로, 근로의 대가인 임금이 아니므로 평균임금 산정 기초에서 제외된다고 판시했습니다.',
        takeaway:
          '순이익 연동 성과급은 제외, 고정 계산식 목표 인센티브는 포함됩니다.',
      },
    ],
    faq: [
      {
        question: '매년 지급됐는데도 제외된다고요?',
        answer:
          '<strong>"당기순이익 없으면 미지급" 조건이 있으면 제외됩니다.</strong> 정기성만으로 부족.',
      },
      {
        question: '목표 인센티브와 경영성과급은 어떻게 다른가요?',
        answer:
          '<strong>사전 계산식 기반이면 목표 인센티브, 경영실적 사후 분배면 경영성과급.</strong>',
      },
      {
        question: '회사가 "성과급 제외" 계약서 쓰게 했는데요?',
        answer:
          '<strong>임금성 요건 충족이면 이 조항은 무효입니다.</strong> 근로기준법이 우선.',
      },
      {
        question: '3년치 소급 가능한가요?',
        answer:
          '<strong>퇴직금 소멸시효는 3년입니다.</strong> 퇴직일로부터 3년 내 청구하세요.',
      },
      {
        question: '다른 직원은 받았는데 저만 빠진 경우는요?',
        answer:
          '<strong>일률성 원칙 위반이면 그 자체로 차별시정 청구도 가능합니다.</strong>',
      },
    ],
    cta: {
      text: '퇴직금 계산과 청구 절차, AI로 정리하기',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '상여금 퇴직금 포함 기준', href: '/guide/retirement/retirement-bonus-included-calculation' },
      { label: '성과급 통상임금 기준', href: '/guide/retirement/retirement-incentive-bonus-average-wage-inclusion' },
      { label: '평균임금 산정 분쟁', href: '/guide/retirement/retirement-average-wage-dispute' },
      { label: '영업수당 퇴직금 포함', href: '/guide/retirement/retirement-sales-commission-included' },
      { label: '퇴직금 재계산 청구', href: '/guide/retirement/retirement-recalculation-wrong-amount' },
    ],
  },

  // ─── 7. retirement / under-1year-irregular-interim ───
  {
    domain: 'retirement',
    slug: 'retirement-under-1year-irregular-interim',
    keyword: '1년 미만 비정규직 중간정산 퇴직금',
    questionKeyword: '1년 미만 계약직도 퇴직금 중간정산 받을 수 있나요?',
    ctaKeyword: '단기 계약직 중간정산 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '1년 미만 비정규직 중간정산·퇴직금 판단 4단계 | 로앤가이드',
      description:
        '1년 미만 계약직·단시간 근로자의 퇴직금 지급 요건과 연속 재계약 시 근속 합산, 중간정산 가능 여부를 지금 확인하세요.',
    },
    intro:
      '<p>3개월씩 반복 재계약하거나 10개월만에 계약이 끝난 경우 "1년 미만이니 퇴직금 없다"는 말을 듣습니다. 그러나 근로자퇴직급여 보장법 제4조는 계속근로기간이 1년 이상일 때 퇴직금을 지급하도록 규정하며, 단기 재계약 반복이라도 실질 연속성이 인정되면 합산할 수 있습니다.</p>',
    sections: [
      {
        title: '계속근로기간 — 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">"1년 미만" 판단은 계약 형식이 아닌 실질 근로 연속성으로 합니다.</strong></p>\n<ul>\n<li><strong>기본 원칙</strong> — 계속근로기간 1년 이상 + 주 15시간 이상이면 퇴직금 발생.</li>\n<li><strong>재계약 합산</strong> — 공백 없이 갱신된 단기 계약은 합산해 1년 판단.</li>\n<li><strong>단기 공백</strong> — 1~2주 짧은 공백은 연속성 인정 가능.</li>\n<li><strong>근거 조항</strong> — 근로자퇴직급여 보장법 제4조, 동법 시행령 제3조.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 2개월씩 6번 재계약 = 12개월 = 퇴직금 대상.</blockquote>',
      },
      {
        title: '중간정산 — 1년 미만은 불가',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금 중간정산 요건은 "계속근로기간 1년 이상"부터 적용됩니다.</strong></p>\n<ul>\n<li><strong>중간정산 자격</strong> — 1년 이상 근로 후 법정 사유 발생 시.</li>\n<li><strong>법정 사유</strong> — 무주택자 주택구입·6개월 이상 요양·파산 등 제한적 사유.</li>\n<li><strong>1년 미만 근로자</strong> — 법률상 중간정산 대상 아님.</li>\n<li><strong>근거 조항</strong> — 근로자퇴직급여 보장법 제8조 제2항·시행령 제3조.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 근로 연속성·퇴직금 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '반복 재계약 — 연속성 입증',
        content:
          '<p><strong style="color:#1e3a5f">단기 재계약으로 퇴직금을 회피하는 관행은 무효 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>근로계약서 시리즈</strong> — 모든 계약서 사본 확보, 계약기간 시계열 정리.</li>\n<li><strong>업무 동일성</strong> — 같은 부서·같은 업무 수행 증빙.</li>\n<li><strong>공백 최소</strong> — 재계약 간 공백 기간 3일 이하면 연속성 강력 인정.</li>\n<li><strong>4대보험 기록</strong> — 중단 없이 이어졌다면 결정적 증빙.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 재계약 시점마다 사직서 쓰게 했어도 실질은 하나의 근로관계입니다.</blockquote>',
      },
      {
        title: '실무 체크리스트 — 퇴직금 청구 여부',
        content:
          '<p><strong style="color:#1e3a5f">"1년 미만"이라 포기하지 말고 실제 근로 기간을 합산해 재계산하세요.</strong></p>\n<ul>\n<li><strong>최초 입사일</strong> — 첫 근로계약 시작일 기준 계속근로 산정.</li>\n<li><strong>최종 퇴사일</strong> — 마지막 계약 종료일까지의 총 기간.</li>\n<li><strong>주 15시간 이상</strong> — 단시간이면 주 15시간 이상 여부 확인.</li>\n<li><strong>공백 3일 이하</strong> — 3일 이하 공백은 실무상 연속성 인정 관행.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회사가 "매번 퇴직금 미리 정산"한 경우도 근기법 제8조 위반으로 무효 다툴 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직금 청구와 소멸시효',
        summary:
          '대법원 2024다294705 사건(대법원, 2025.05.29 선고)에서 법원은 계약해지 합의 후 3년이 지나면 퇴직금 청구권이 소멸시효로 소멸되며, 단순 사정 변동만으로는 권리남용 항변이 성립하지 않는다고 판시했습니다. 단기 계약직도 퇴직일 기준 3년 내 청구하지 않으면 권리 자체가 사라집니다.',
        takeaway:
          '근로 연속성이 있어도 퇴직일로부터 3년 내 청구해야 권리가 보호됩니다.',
      },
    ],
    faq: [
      {
        question: '10개월 일했는데 퇴직금 받을 수 있나요?',
        answer:
          '<strong>원칙적으로 1년 미만은 대상 아닙니다.</strong> 다만 다른 근로와 합산해 1년 넘으면 가능.',
      },
      {
        question: '재계약 공백이 1개월이면 연속으로 보나요?',
        answer:
          '<strong>일반적으로 단절로 봅니다.</strong> 다만 업무 동일성·복귀 예정 증빙이 있으면 다툴 여지.',
      },
      {
        question: '주 15시간 미만은 어떻게 되나요?',
        answer:
          '<strong>4주 평균 주 15시간 이상이어야 퇴직금 대상입니다.</strong> 미만이면 제외.',
      },
      {
        question: '매 계약마다 "퇴직금 정산 완료"했는데 더 받을 수 있나요?',
        answer:
          '<strong>근기법 제8조·제34조 위반으로 무효 주장 가능합니다.</strong> 누적 퇴직금 재청구 검토하세요.',
      },
      {
        question: '일용직도 1년 넘으면 퇴직금 되나요?',
        answer:
          '<strong>일용 형태라도 사실상 계속근로면 가능합니다.</strong> 출근 이력·업무 연속성 증빙 필수.',
      },
    ],
    cta: {
      text: '퇴직금 계산과 청구 절차, AI로 정리하기',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '1년 미만 근로자 퇴직금 기본', href: '/guide/retirement/retirement-less-than-1year-eligibility' },
      { label: '계약직 1년 미만 청구', href: '/guide/retirement/retirement-contract-worker-under-1year' },
      { label: '퇴직금 중간정산 가이드', href: '/guide/retirement/retirement-interim-settlement-guide' },
      { label: '단시간 근로자 퇴직금', href: '/guide/retirement/retirement-part-time-eligibility' },
      { label: '재입사 근속 합산 기준', href: '/guide/retirement/retirement-rehire-continuous-service-calculation' },
    ],
  },

  // ─── 8. retirement / parental-leave-service-inclusion ───
  {
    domain: 'retirement',
    slug: 'retirement-parental-leave-service-inclusion',
    keyword: '육아휴직 퇴직금 근속기간 산입',
    questionKeyword: '육아휴직 기간도 퇴직금 계산에 들어가나요?',
    ctaKeyword: '육아휴직 근속 산입 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '육아휴직 퇴직금 근속 산입 기준 4가지 | 로앤가이드',
      description:
        '육아휴직 기간이 퇴직금 근속기간·평균임금에 포함되는 원칙과 제외되는 특수 상황, 재계산 청구 방법을 지금 확인하세요.',
    },
    intro:
      '<p>육아휴직 1년을 쓰고 돌아와 몇 년 뒤 퇴직할 때 "휴직 기간은 퇴직금에서 빠지는 거 아닌가" 우려하는 분이 많습니다. 남녀고용평등법 제19조 제4항과 근로기준법 관련 해석은 육아휴직 기간을 근속기간에 산입하도록 명시해, 퇴직금 일수 산정에서 불이익을 주지 않습니다.</p>',
    sections: [
      {
        title: '근속기간 산입 — 법정 원칙',
        content:
          '<p><strong style="color:#1e3a5f">육아휴직 기간은 근속기간에 100% 포함됩니다.</strong></p>\n<ul>\n<li><strong>원칙 조항</strong> — 남녀고용평등법 제19조 제4항: "육아휴직 기간은 근속기간에 포함".</li>\n<li><strong>적용 범위</strong> — 퇴직금 근속 연수 + 연차 부여일수 + 승진 연한 모두 포함.</li>\n<li><strong>배우자 출산휴가</strong> — 10일 유급 기간도 근속 포함.</li>\n<li><strong>근거 조항</strong> — 남녀고용평등법 제19조, 근로기준법 시행령 제2조.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 1년 육아휴직 = 1년 근속 인정, 퇴직금 1/12 산정분 확보.</blockquote>',
      },
      {
        title: '평균임금 산정 — 제외 원칙',
        content:
          '<p><strong style="color:#1e3a5f">근속기간은 포함하되, 평균임금 계산에서는 휴직 기간을 제외합니다.</strong></p>\n<ul>\n<li><strong>산정 기준</strong> — 퇴직 직전 3개월 임금(육아휴직 중인 경우 복귀 후 3개월).</li>\n<li><strong>제외 원칙</strong> — 육아휴직 기간은 무급이거나 고용센터 급여이므로 평균임금 산정에서 제외.</li>\n<li><strong>복귀 직후 퇴직</strong> — 복귀 후 근로 기간 기준으로 평균임금 산정.</li>\n<li><strong>근거 조항</strong> — 근로기준법 시행령 제2조 제1항 제4호(업무 외 부상·질병 등과 유사 취급).</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 육아휴직 기간 반영 여부와 퇴직금 차액을 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '실제 산정 예시 — 차액 규모',
        content:
          '<p><strong style="color:#1e3a5f">육아휴직 1년이 근속에 포함되면 수백만원 차이가 납니다.</strong></p>\n<ul>\n<li><strong>근속 9년 + 육아휴직 1년</strong> — 실제 근속 10년으로 산정.</li>\n<li><strong>평균임금 300만원 기준</strong> — 1년 근속 차이 = 약 300만원 + 연 지연이자.</li>\n<li><strong>남녀 함께 사용</strong> — 부부 각각 1년씩 사용해도 모두 근속 포함.</li>\n<li><strong>분할 사용</strong> — 6개월씩 2회 분할 사용해도 총 1년 모두 포함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 "휴직 기간 제외"로 계산했다면 근속 산입 재계산 요구하세요.</blockquote>',
      },
      {
        title: '실무 체크리스트 — 재계산 청구',
        content:
          '<p><strong style="color:#1e3a5f">퇴직금 명세서에서 근속 연수부터 확인하는 것이 첫 단계입니다.</strong></p>\n<ul>\n<li><strong>근속 연수 확인</strong> — 입사일부터 퇴사일까지 전체 기간 계산.</li>\n<li><strong>휴직 기간 포함</strong> — 육아휴직 + 배우자 출산휴가 + 출산전후휴가 모두 포함.</li>\n<li><strong>회사 산정과 비교</strong> — 회사가 "무급 기간 제외"했으면 불법.</li>\n<li><strong>재계산 청구</strong> — 내용증명으로 차액 요구, 거부 시 노동청 진정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 퇴직 후 14일 이내 미지급이면 연 20% 지연이자 청구 가능합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 근로조건 강행규정과 퇴직금',
        summary:
          '대법원 2025다214605 사건(대법원, 2025.12.11 선고)에서 법원은 이사의 보수 관련 상법 제388조를 강행규정으로 확인하며, 법정 절차를 거치지 않은 보수 지급은 무효라고 판시했습니다. 같은 법리로 육아휴직 근속 산입 역시 강행규정이며, 회사 내규로 배제할 수 없습니다.',
        takeaway:
          '육아휴직 근속 포함은 강행규정이므로 회사 방침으로 뒤집을 수 없습니다.',
      },
    ],
    faq: [
      {
        question: '육아휴직 1년 + 추가 6개월 총 1년 6개월도 모두 포함되나요?',
        answer:
          '<strong>법정 최대 1년 6개월(자녀당)까지 모두 포함됩니다.</strong> 2024년 개정법 적용.',
      },
      {
        question: '출산전후휴가 90일은요?',
        answer:
          '<strong>근속 포함 + 평균임금 기간 포함(유급이므로)입니다.</strong>',
      },
      {
        question: '남자 직원 배우자 출산휴가는요?',
        answer:
          '<strong>10일 유급이므로 근속·평균임금 모두 포함됩니다.</strong>',
      },
      {
        question: '육아휴직 직후 바로 퇴사하면 평균임금은 어떻게 되나요?',
        answer:
          '<strong>복귀 후 근로가 없으면 휴직 직전 3개월로 산정합니다.</strong> 불리하지 않게 보호.',
      },
      {
        question: '회사가 "휴직 기간만큼 정년 연장" 운운하면요?',
        answer:
          '<strong>근속 산입은 정년과 별개입니다.</strong> 혼동 유도 답변에 주의하세요.',
      },
    ],
    cta: {
      text: '퇴직금 계산과 청구 절차, AI로 정리하기',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '출산휴가 퇴직금 포함', href: '/guide/retirement/retirement-maternity-leave-included' },
      { label: '평균임금 산정 분쟁', href: '/guide/retirement/retirement-average-wage-dispute' },
      { label: '퇴직금 재계산 청구', href: '/guide/retirement/retirement-recalculation-wrong-amount' },
      { label: '퇴직금 계산 전체 절차', href: '/guide/retirement/retirement-pay-calculation' },
      { label: '퇴직금 14일 지급 규정', href: '/guide/retirement/retirement-pay-14day-rule-detail' },
    ],
  },

  // ─── 9. wage / performance-bonus-ordinary-wage-scope ───
  {
    domain: 'wage',
    slug: 'wage-performance-bonus-ordinary-wage-scope',
    keyword: '성과급 통상임금 편입 범위',
    questionKeyword: '성과급도 통상임금에 들어가나요?',
    ctaKeyword: '성과급 통상임금 편입 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '성과급 통상임금 편입 판단 기준 5가지 | 로앤가이드',
      description:
        '성과급이 통상임금에 포함되는지 "소정근로 대가성·정기성·일률성" 기준으로 판단하는 최신 대법원 법리를 지금 확인하세요.',
    },
    intro:
      '<p>연차수당·연장수당이 적게 계산된 이유를 추적하다 보면 "성과급이 통상임금에서 빠졌다"는 경우가 많습니다. 대법원은 2024~2025년 판결을 통해 "소정근로 대가성·정기성·일률성" 3요건으로 통상임금성을 판단하며, 조건부 성과급이라도 근무일수 조건처럼 부가조건만으로는 통상임금성이 부정되지 않는다는 입장을 명확히 했습니다.</p>',
    sections: [
      {
        title: '통상임금 3요건 — 판단 프레임',
        content:
          '<p><strong style="color:#1e3a5f">성과급이 "소정근로의 대가로 정기적·일률적으로 지급되었는지"가 핵심입니다.</strong></p>\n<ul>\n<li><strong>소정근로 대가성</strong> — 소정근로일 근무에 대한 대가여야 함.</li>\n<li><strong>정기성</strong> — 매월·분기 등 일정 주기 반복 지급.</li>\n<li><strong>일률성</strong> — 동일 조건 근로자 전원에게 동일 기준 적용.</li>\n<li><strong>근거 조항</strong> — 근로기준법 시행령 제6조 제1항.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "근무일수 충족" 조건은 통상임금성을 부정하지 않음(2025년 대법원).</blockquote>',
      },
      {
        title: '유형별 판단 — 포함 vs 제외',
        content:
          '<p><strong style="color:#1e3a5f">성과급 지급 방식에 따라 통상임금 여부가 갈립니다.</strong></p>\n<ul>\n<li><strong>포함 — 정기상여금</strong> — 분기·반기 정기 지급, 평가 영향 적음.</li>\n<li><strong>포함 — 근무일수 조건부 상여</strong> — 일정 근무일수 충족 시 고정 지급.</li>\n<li><strong>제외 — 사고 미발생 조건</strong> — "중대사고 없을 것" 등 추가 자격요건 있는 경우.</li>\n<li><strong>제외 — 경영성과 연동</strong> — 당기순이익·EVA 기반 변동 지급.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 귀사 성과급 구조와 통상임금 편입 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '통상임금 확대 — 실제 영향',
        content:
          '<p><strong style="color:#1e3a5f">성과급이 통상임금에 편입되면 모든 법정수당이 증가합니다.</strong></p>\n<ul>\n<li><strong>연장수당</strong> — 통상임금 × 1.5배 재계산 → 월 10~30만원 증가.</li>\n<li><strong>야간·휴일수당</strong> — 50% 가산 기준 상향.</li>\n<li><strong>연차수당</strong> — 미사용 연차 금전보상 증액.</li>\n<li><strong>퇴직금</strong> — 평균임금 산정 기초 상향으로 퇴직금도 함께 증가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 성과급 월 50만원이 통상임금에 편입되면 연 300~500만원 추가 청구 가능.</blockquote>',
      },
      {
        title: '청구 절차 — 3년 소급 청구',
        content:
          '<p><strong style="color:#1e3a5f">통상임금 차액은 임금으로서 3년 소멸시효 내 청구 가능합니다.</strong></p>\n<ul>\n<li><strong>1단계 — 성과급 규정 분석</strong> — 단체협약·취업규칙·평가기준.</li>\n<li><strong>2단계 — 지급 이력</strong> — 3년치 임금명세서 확보.</li>\n<li><strong>3단계 — 재계산</strong> — 성과급 포함 시급·일급 재산정, 차액 계산.</li>\n<li><strong>4단계 — 내용증명 + 노동청</strong> — 회사 청구 후 거부 시 진정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 통상임금 사건은 회사와 장기 다툼이 되므로 민사소송으로 직행하는 경우도 많습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 근무일수 조건부 상여금과 통상임금',
        summary:
          '대법원 2022다257238 사건(대법원, 2025.07.18 선고)에서 법원은 "근무일수 조건이 부가된 상여금이라도 소정근로일수 이내의 조건이라면 그 조건만으로 통상임금성이 부정되지 않는다"고 판시했습니다. 반대로 중대사고 미발생 등 소정근로 외 자격요건이 부가된 상여금은 통상임금에서 제외됩니다.',
        takeaway:
          '조건 형태가 "근무일수 충족"이면 통상임금 편입 가능성이 높습니다.',
      },
    ],
    faq: [
      {
        question: '지급률이 달라지는 성과급도 포함되나요?',
        answer:
          '<strong>등급별 지급률이라도 소정근로 대가면 편입 가능합니다.</strong> 최근 판례는 편입 범위를 넓히는 흐름.',
      },
      {
        question: '매월이 아닌 분기 지급도 가능한가요?',
        answer:
          '<strong>1~3개월 주기면 정기성 인정될 수 있습니다.</strong> 반기·연 1회는 별도 판단.',
      },
      {
        question: '회사가 "통상임금 제외" 조항 넣었는데요?',
        answer:
          '<strong>요건 충족이면 이 조항은 무효입니다.</strong> 근로기준법 우선.',
      },
      {
        question: '재직 중에도 청구 가능한가요?',
        answer:
          '<strong>네, 3년 내 소급 청구 가능합니다.</strong> 다만 회사 관계 고려해 퇴사 후 청구하는 경우도 많음.',
      },
      {
        question: '소송하면 얼마나 걸리나요?',
        answer:
          '<strong>1심만 1~2년 걸리는 경우 많습니다.</strong> 집단소송으로 진행하면 비용 효율 좋음.',
      },
    ],
    cta: {
      text: '임금체불 대응 순서, AI로 바로 정리하기',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '통상임금 포함 범위', href: '/guide/wage/wage-comprehensive-legal-test' },
      { label: '식대 통상임금 기준', href: '/guide/wage/wage-meal-expense-ordinary-wage' },
      { label: '연장수당 정확 계산', href: '/guide/wage/wage-night-overtime-exact-calculation' },
      { label: '성과급 미지급 소송', href: '/guide/wage/wage-unpaid-bonus-performance-lawsuit' },
      { label: '평균임금 산정 분쟁', href: '/guide/retirement/retirement-average-wage-dispute' },
    ],
  },

  // ─── 10. wage / meal-ticket-card-ordinary-wage ───
  {
    domain: 'wage',
    slug: 'wage-meal-ticket-card-ordinary-wage',
    keyword: '식권 식대카드 통상임금',
    questionKeyword: '식권이나 식대카드도 통상임금에 포함되나요?',
    ctaKeyword: '식권 식대카드 통상임금 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '식권·식대카드 통상임금 판단 기준 4단계 | 로앤가이드',
      description:
        '식권·식대카드 등 현물형 식대가 통상임금에 포함되는 조건과 현금 식대와의 차이, 재계산 청구 방법을 지금 확인하세요.',
    },
    intro:
      '<p>매월 식대카드 10만원 충전받거나 식권을 지급받는 경우 "이것도 통상임금일까" 궁금해집니다. 대법원은 "모든 근로자에게 정기적·일률적으로 지급되고 실질이 생활 지원 성격이면 명칭이나 지급 형태와 관계없이 통상임금으로 본다"는 입장을 확립해, 식권·카드형 식대도 요건 충족 시 통상임금에 포함됩니다.</p>',
    sections: [
      {
        title: '현물형 식대 — 통상임금 판단',
        content:
          '<p><strong style="color:#1e3a5f">지급 형태가 현물이라도 실질이 임금이면 통상임금에 포함됩니다.</strong></p>\n<ul>\n<li><strong>일률 지급</strong> — 전 직원에게 동일 금액·동일 방식으로 지급.</li>\n<li><strong>정기성</strong> — 매월 또는 일정 주기 반복 지급.</li>\n<li><strong>근로 대가성</strong> — 출근·근로제공 조건으로 지급.</li>\n<li><strong>미사용 정산</strong> — 미사용 시 현금 정산·이월 가능하면 임금성 더 명확.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "식권·식대카드 = 비과세 복리후생"이라도 임금성 인정될 수 있음.</blockquote>',
      },
      {
        title: '포함·제외 구분 — 실무 사례',
        content:
          '<p><strong style="color:#1e3a5f">지급 조건에 따라 결과가 갈립니다.</strong></p>\n<ul>\n<li><strong>포함 — 전직원 월 10만원 식대카드</strong> — 출근일수 무관, 매월 동일 충전.</li>\n<li><strong>포함 — 미사용분 현금 정산</strong> — 사용 여부와 관계없이 금액 확정.</li>\n<li><strong>제외 — 실사용분만 정산</strong> — 실제 식사한 만큼만 지급(후불).</li>\n<li><strong>제외 — 구내식당 이용권</strong> — 금전 가치 확정 곤란, 실사용 전제.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 식대 지급 구조와 통상임금 편입 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '실제 차액 — 재계산 예시',
        content:
          '<p><strong style="color:#1e3a5f">식대 10만원이 통상임금에 편입되면 연 수십만원 추가 수령 가능.</strong></p>\n<ul>\n<li><strong>월 식대 10만원</strong> — 시급 환산 약 479원(월 209시간 기준) 증가.</li>\n<li><strong>연장수당 증가</strong> — 시급 × 1.5 × 월 30시간 = 월 약 21,555원.</li>\n<li><strong>연차수당 증가</strong> — 연 15일 × 8시간 × 시급 = 약 57,480원.</li>\n<li><strong>퇴직금 증가</strong> — 평균임금 상향으로 10년 근속 시 약 50만~100만원.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 여러 법정수당 합산하면 연간 수백만원 차이가 날 수 있습니다.</blockquote>',
      },
      {
        title: '청구 절차 — 증빙 수집',
        content:
          '<p><strong style="color:#1e3a5f">식대 지급 방식과 규정 자료가 핵심 증빙입니다.</strong></p>\n<ul>\n<li><strong>1단계 — 취업규칙·단체협약</strong> — 식대 조항 원문 확인.</li>\n<li><strong>2단계 — 지급 내역</strong> — 최근 3년 식대카드 충전 내역·식권 발급 내역.</li>\n<li><strong>3단계 — 지급 조건</strong> — 출근일수 조건 유무·미사용분 처리 확인.</li>\n<li><strong>4단계 — 재계산·청구</strong> — 통상임금 편입 시 법정수당 차액 내용증명.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 개별 소송보다 집단소송·근로자 대표 협상이 효과적인 경우가 많습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄임금과 최저임금 산입',
        summary:
          '대법원 2020다300299 사건(대법원, 2024.12.26 선고)에서 법원은 포괄임금계약이라도 최저임금에 미달하면 무효이며, 최저임금 산입 여부는 "소정근로 또는 소정근로일에 대한 임금"인지로 판단해야 한다고 판시했습니다. 이 법리는 식대·상여금 등 각 임금 항목의 통상임금 편입 판단에도 적용됩니다.',
        takeaway:
          '임금 항목의 성격은 명칭이 아니라 지급 실질로 판단됩니다.',
      },
    ],
    faq: [
      {
        question: '식권은 판매가 안 되는데도 임금인가요?',
        answer:
          '<strong>환가성이 없어도 정기·일률 지급이면 임금성 인정될 수 있습니다.</strong>',
      },
      {
        question: '월 20만원 비과세 한도라 문제없다고 하는데요?',
        answer:
          '<strong>세법상 비과세와 통상임금은 별개입니다.</strong> 비과세여도 통상임금 편입 가능.',
      },
      {
        question: '출근일수에 비례 지급되면요?',
        answer:
          '<strong>근무일수 조건은 통상임금성을 부정하지 않습니다(2025년 대법원).</strong>',
      },
      {
        question: '구내식당 무료 이용은요?',
        answer:
          '<strong>금전 가치 확정 곤란으로 통상임금에 포함 어렵습니다.</strong> 다만 대체현금으로 지급되면 포함 여지 있음.',
      },
      {
        question: '몇 년치까지 청구할 수 있나요?',
        answer:
          '<strong>임금채권 3년 소멸시효입니다.</strong> 퇴직 여부 무관하게 3년 내 청구.',
      },
    ],
    cta: {
      text: '임금체불 대응 순서, AI로 바로 정리하기',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '식대 통상임금 기본', href: '/guide/wage/wage-meal-expense-ordinary-wage' },
      { label: '통상임금 포함 범위', href: '/guide/wage/wage-comprehensive-legal-test' },
      { label: '연장수당 정확 계산', href: '/guide/wage/wage-night-overtime-exact-calculation' },
      { label: '성과급 통상임금 편입', href: '/guide/wage/wage-performance-bonus-ordinary-wage-scope' },
      { label: '퇴직금 계산 전체 절차', href: '/guide/retirement/retirement-pay-calculation' },
    ],
  },

  // ─── 11. wage / weekly-holiday-public-holiday-overlap ───
  {
    domain: 'wage',
    slug: 'wage-weekly-holiday-public-holiday-overlap',
    keyword: '주휴일 공휴일 중복 수당',
    questionKeyword: '공휴일이 주휴일과 겹치면 수당은 어떻게 되나요?',
    ctaKeyword: '주휴일 공휴일 중복 점검',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '주휴일·공휴일 중복 시 수당 지급 4가지 기준 | 로앤가이드',
      description:
        '주휴일과 공휴일이 겹치는 경우 임금 지급·대체 휴일 부여·근무 시 가산수당 계산법을 지금 확인하세요.',
    },
    intro:
      '<p>주휴일이 일요일인데 그날이 공휴일과 겹치거나 명절 연휴에 포함되면 "이중으로 유급인지, 아니면 하나만 인정되는지" 혼란스러워집니다. 근로기준법 제55조(주휴일)와 동법 시행령 제30조(관공서의 공휴일)는 각각 별개의 유급휴일이며, 중복 시 대체공휴일 부여 또는 수당 산정이 복잡해집니다.</p>',
    sections: [
      {
        title: '주휴일·공휴일 성격 — 별개 유급휴일',
        content:
          '<p><strong style="color:#1e3a5f">두 휴일은 서로 다른 근거로 생기는 유급휴일입니다.</strong></p>\n<ul>\n<li><strong>주휴일</strong> — 근기법 제55조: 주 15시간 이상 근로자에게 주 1회 유급.</li>\n<li><strong>공휴일</strong> — 관공서의 공휴일에 관한 규정 + 근기법 시행령 제30조.</li>\n<li><strong>적용 범위</strong> — 공휴일 유급 의무는 5인 이상 사업장(2022.1 시행).</li>\n<li><strong>중복 원칙</strong> — 같은 날 겹치면 하나만 인정되나 대체휴일 부여 권고.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "이중 수당 자동 지급"은 아님. 단, 근무 시 공휴일 가산수당 적용.</blockquote>',
      },
      {
        title: '근무 시 수당 — 가산 기준',
        content:
          '<p><strong style="color:#1e3a5f">중복일에 근무하면 어느 쪽 가산율을 적용할지가 쟁점입니다.</strong></p>\n<ul>\n<li><strong>공휴일 근무</strong> — 통상임금 × 1.5 (8시간 초과분은 ×2.0).</li>\n<li><strong>주휴일 근무</strong> — 공휴일과 동일하게 1.5배 가산.</li>\n<li><strong>중복일 근무</strong> — 한 번의 휴일근로로 150% 가산(중복 가산 불가).</li>\n<li><strong>근거 조항</strong> — 근기법 제56조 제2항.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 중복일 근무 수당 정당 금액을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '대체공휴일 — 연장 적용 기준',
        content:
          '<p><strong style="color:#1e3a5f">일부 공휴일이 주휴일과 겹치면 대체공휴일이 부여됩니다.</strong></p>\n<ul>\n<li><strong>적용 공휴일</strong> — 설날·추석·어린이날·석가탄신일·크리스마스·3·1절·광복절·개천절·한글날 등.</li>\n<li><strong>대체일</strong> — 직전 또는 다음 비휴일(통상 월요일).</li>\n<li><strong>유급 처리</strong> — 대체공휴일도 공휴일과 동일한 유급휴일.</li>\n<li><strong>근거 조항</strong> — 공휴일에 관한 법률 제3조.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대체공휴일 근무 시에도 1.5배 가산수당 적용됩니다.</blockquote>',
      },
      {
        title: '실무 체크리스트 — 급여명세서 확인',
        content:
          '<p><strong style="color:#1e3a5f">공휴일 가산수당 누락은 임금체불이므로 월 명세서에서 확인해야 합니다.</strong></p>\n<ul>\n<li><strong>휴일근로수당 항목</strong> — 공휴일 근무 시 별도 항목으로 지급되는지.</li>\n<li><strong>기본급 포함 여부</strong> — "포괄임금"으로 기본급에 포함됐다면 실시간 검증.</li>\n<li><strong>대체휴일 여부</strong> — 근무한 공휴일에 대체휴일 부여됐는지.</li>\n<li><strong>명세서 누락</strong> — 공휴일 근무했는데 수당 없으면 노동청 진정 대상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 5인 미만 사업장은 공휴일 유급 의무 없음(2022년 개정으로 5인 이상만 적용).</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 격일제 근무와 소정근로시간',
        summary:
          '대법원 2023다206138 사건(대법원, 2024.10.25 선고)에서 법원은 최저임금법 적용을 회피할 의도로 체결된 소정근로시간 단축 합의는 탈법행위로 무효이며, 실제 근로시간 기준으로 최저임금·법정수당을 재산정해야 한다고 판시했습니다. 공휴일 근로 역시 실제 근로시간·근로 형태에 따라 가산수당이 정해져야 합니다.',
        takeaway:
          '회사가 정한 "포괄처리"로 법정수당을 회피할 수 없습니다.',
      },
    ],
    faq: [
      {
        question: '주휴일이 공휴일과 같은 날이면 이중 유급인가요?',
        answer:
          '<strong>하나의 유급휴일로 봅니다.</strong> 다만 일부 공휴일은 대체공휴일 부여.',
      },
      {
        question: '공휴일에 근무하면 몇 배 받나요?',
        answer:
          '<strong>8시간 이내 150%, 초과분 200%입니다.</strong> 포괄임금이라도 별도 청구 가능.',
      },
      {
        question: '5인 미만 사업장은 공휴일 수당 없나요?',
        answer:
          '<strong>공휴일 유급 의무 없습니다.</strong> 다만 주휴일 가산수당은 여전히 적용.',
      },
      {
        question: '대체공휴일에 근무하면 어떻게 되나요?',
        answer:
          '<strong>공휴일과 동일한 가산수당 적용입니다.</strong> 1.5배.',
      },
      {
        question: '명절 연휴 내내 근무했는데 수당이 안 나왔어요.',
        answer:
          '<strong>명절은 법정공휴일로 유급이며, 근무 시 가산수당 대상입니다.</strong> 체불 진정 가능.',
      },
    ],
    cta: {
      text: '임금체불 대응 순서, AI로 바로 정리하기',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '휴일근로 150% 계산', href: '/guide/wage/wage-holiday-work-150-percent-calculation' },
      { label: '주휴수당 계산 방법', href: '/guide/retirement/retirement-weekly-holiday-pay-included' },
      { label: '공휴일 근무 수당 청구', href: '/guide/wage/wage-holiday-work-unpaid-claim' },
      { label: '최저임금 주휴 포함 여부', href: '/guide/wage/wage-minimum-weekly-holiday-included' },
      { label: '임금체불 대응 순서', href: '/guide/wage/wage-complaint-full-procedure-timeline' },
    ],
  },

  // ─── 12. dismissal / whistleblower-corruption-report-fired ───
  {
    domain: 'dismissal',
    slug: 'dismissal-whistleblower-corruption-report-fired',
    keyword: '부패신고자 해고 부당해고',
    questionKeyword: '회사 비리 신고 후 해고당했습니다.',
    ctaKeyword: '부패신고자 해고 대응 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '부패신고자 해고 부당해고 구제 5단계 | 로앤가이드',
      description:
        '회사 비리·부패를 내·외부에 신고한 후 해고당한 경우 공익신고자보호법·부패방지법 기반 구제 절차와 증빙을 지금 확인하세요.',
    },
    intro:
      '<p>회사 비리를 감사실·국민권익위·언론에 신고한 후 "실적 부진"이나 "근무 태도" 등의 명목으로 해고당하는 사례가 많습니다. 공익신고자보호법 제15조와 부패방지권익위법 제62조는 신고자에 대한 불이익 조치를 금지하며, 해고 시 원상회복·과태료 부과·형사처벌까지 규정해 강력한 보호를 제공합니다.</p>',
    sections: [
      {
        title: '신고자 보호 — 법정 장치',
        content:
          '<p><strong style="color:#1e3a5f">공익신고·부패신고는 해고 사유가 될 수 없습니다.</strong></p>\n<ul>\n<li><strong>불이익 금지</strong> — 공익신고자보호법 제15조, 부패방지권익위법 제62조.</li>\n<li><strong>보호 범위</strong> — 해고·전보·감봉·따돌림 등 일체의 불이익.</li>\n<li><strong>신고 대상</strong> — 부정청탁·뇌물·횡령·안전법 위반 등 공익·공공이익 관련.</li>\n<li><strong>위반 시 처벌</strong> — 2년 이하 징역 또는 2천만원 이하 벌금.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "신고 후 3개월 이내 해고"는 보복적 해고 추정이 강하게 적용됩니다.</blockquote>',
      },
      {
        title: '증빙 수집 — 인과관계 입증',
        content:
          '<p><strong style="color:#1e3a5f">"신고 → 불이익" 시계열 증거가 핵심입니다.</strong></p>\n<ul>\n<li><strong>신고 접수증</strong> — 권익위·감사원·검찰 신고 접수 문서.</li>\n<li><strong>회사 내부 반응</strong> — 징계위원회 소집 통지·경위서 요구 기록.</li>\n<li><strong>해고 통지</strong> — 서면 해고 예고·해고 사유서.</li>\n<li><strong>동료 진술서</strong> — 신고 사실 확산 + 해고 결정 간 대화 목격.</li>\n<li><strong>업무 기록</strong> — 신고 전까지 정상적 성과·평가였음을 보여주는 자료.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 신고 사실과 해고 인과관계를 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '구제 절차 — 3개 경로 병행',
        content:
          '<p><strong style="color:#1e3a5f">노동위·권익위·법원 3가지 경로가 있으며 병행 가능합니다.</strong></p>\n<ul>\n<li><strong>1단계 — 권익위 신변보호·원상회복 신청</strong> — 접수 즉시 임시 조치 가능.</li>\n<li><strong>2단계 — 노동위원회 부당해고 구제신청</strong> — 해고일로부터 3개월 이내.</li>\n<li><strong>3단계 — 민사소송(해고무효확인)</strong> — 임금 상당액·손해배상 청구.</li>\n<li><strong>4단계 — 형사고발</strong> — 사용자 처벌 요구(공익신고자보호법 위반).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 권익위 원상회복 결정은 노동위보다 빠르고 효력이 강력합니다.</blockquote>',
      },
      {
        title: '실무 체크리스트 — 신고 전·후 전략',
        content:
          '<p><strong style="color:#1e3a5f">신고 전부터 증거·절차를 준비해두면 보호 범위가 넓어집니다.</strong></p>\n<ul>\n<li><strong>신고 전 — 내부 기록 보존</strong> — 신고 대상 자료는 별도 저장(영업비밀 주의).</li>\n<li><strong>신고 채널</strong> — 권익위·감사원은 강력한 보호 대상, 언론 제보는 사전 상담 권장.</li>\n<li><strong>익명 옵션</strong> — 권익위는 익명 신고 가능, 보호 범위 동일.</li>\n<li><strong>변호사 상담</strong> — 대한법률구조공단·공익신고자 지원 제도 활용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회사 기밀·개인정보를 함께 유출하면 별도 처벌될 수 있으니 신고 범위를 정확히 지키세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 부당해고 금전보상명령 구제이익',
        summary:
          '대법원 2024두54683 사건(대법원, 2025.03.13 선고)에서 법원은 부당해고 구제신청 후 회사가 해고를 취소하고 원직복직을 명하더라도 금전보상명령을 받을 구제이익은 원칙적으로 소멸하지 않는다고 판시했습니다. 신고 후 해고 피해자도 원직복직 + 금전 보상 모두 받을 수 있는 길이 열려 있습니다.',
        takeaway:
          '해고 취소 후에도 별도의 금전보상명령을 받을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '언론에 제보한 후 해고당했는데 보호되나요?',
        answer:
          '<strong>공익신고자보호법은 권익위 신고 후 특정 조건에서 언론도 보호합니다.</strong> 사전 상담 권장.',
      },
      {
        question: '신고 내용이 허위로 판명되면 보호 안 되나요?',
        answer:
          '<strong>"명백한 허위·악의"가 아니면 보호됩니다.</strong> 신고 당시 신빙성 있었다면 OK.',
      },
      {
        question: '해고 아닌 강등·전보도 구제 대상인가요?',
        answer:
          '<strong>네, 감봉·전보·따돌림 등 모든 불이익이 대상입니다.</strong>',
      },
      {
        question: '사업주는 어떤 처벌 받나요?',
        answer:
          '<strong>2년 이하 징역 또는 2천만원 이하 벌금, 과태료 3천만원까지 부과 가능.</strong>',
      },
      {
        question: '익명으로 권익위 신고했는데 보호 받을 수 있나요?',
        answer:
          '<strong>익명 신고도 동일하게 보호됩니다.</strong> 다만 불이익 발생 시 입증을 위해 신원 공개 필요 가능.',
      },
    ],
    cta: {
      text: '부당해고 구제신청 순서, AI로 정리하기',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '내부고발 보복해고 대응', href: '/guide/dismissal/dismissal-whistleblower-retaliation' },
      { label: '부당해고 구제 절차', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
      { label: '노동위 금전보상 명령', href: '/guide/dismissal/dismissal-unfair-monetary-compensation' },
      { label: '부당해고 증거 수집', href: '/guide/dismissal/dismissal-unfair-evidence-collection' },
      { label: '해고 사유서 요구 템플릿', href: '/guide/dismissal/dismissal-reason-request-template' },
    ],
  },

  // ─── 13. dismissal / absence-rule-excessive-punishment ───
  {
    domain: 'dismissal',
    slug: 'dismissal-absence-rule-excessive-punishment',
    keyword: '결근 처벌규정 해고 과중',
    questionKeyword: '결근 몇 번에 해고된 경우 부당해고인가요?',
    ctaKeyword: '결근 과중 징계 해고 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '결근 징계 해고 과중 여부 판단 4단계 | 로앤가이드',
      description:
        '무단결근·잦은 결근으로 해고됐을 때 취업규칙 처벌규정과 비례 원칙을 기준으로 부당해고 여부를 지금 확인하세요.',
    },
    intro:
      '<p>"무단결근 3회 시 해고" 같은 취업규칙에 따라 해고되는 경우가 있지만, 이런 단순 결근 횟수 기준만으로 해고가 늘 정당한 것은 아닙니다. 근로기준법 제23조는 "정당한 이유"를 요구하며, 판례는 결근 사유·횟수·회사 피해·관행 등을 종합 판단해 과중한 해고를 무효로 봅니다.</p>',
    sections: [
      {
        title: '결근 해고 — 정당성 판단 요소',
        content:
          '<p><strong style="color:#1e3a5f">취업규칙의 결근 규정이 있어도 비례 원칙을 만족해야 정당.</strong></p>\n<ul>\n<li><strong>결근 사유</strong> — 질병·가족 응급·교통사고 등 불가피성 있는지.</li>\n<li><strong>결근 횟수·기간</strong> — 짧은 기간 집중 vs 장기간 산발적.</li>\n<li><strong>사전 통보</strong> — 연락·결근계 제출 여부.</li>\n<li><strong>회사 피해</strong> — 업무 공백·대체 곤란 등 실제 손해.</li>\n<li><strong>과거 관행</strong> — 동일 사안에 다른 직원 어떤 처분을 받았는지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "규정상 해고 사유"라도 사안별 비례 심사 통과해야 합니다.</blockquote>',
      },
      {
        title: '부당해고 인정 사례 — 실무 흐름',
        content:
          '<p><strong style="color:#1e3a5f">판례는 "해고는 최후수단"이라는 원칙을 엄격히 적용합니다.</strong></p>\n<ul>\n<li><strong>사례1 — 질병 결근 3회</strong> — 진단서 있으면 해고 과중으로 무효.</li>\n<li><strong>사례2 — 미통보 1~2회</strong> — 견책·감봉이 적절, 해고는 과도.</li>\n<li><strong>사례3 — 경위서 제출 무시</strong> — 절차 미비로 해고 무효.</li>\n<li><strong>사례4 — 과거 유사 사건 징계 없음</strong> — 형평성 위반으로 해고 무효.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 결근 사유와 해고 과중 여부를 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증빙 수집 — 부당해고 입증',
        content:
          '<p><strong style="color:#1e3a5f">결근 사유를 객관화할 수 있는 자료가 승부를 가릅니다.</strong></p>\n<ul>\n<li><strong>진단서·병원 기록</strong> — 질병·사고 등 불가피성 입증.</li>\n<li><strong>통보 기록</strong> — 사전 문자·전화·카톡 통보 스크린샷.</li>\n<li><strong>결근계·경위서</strong> — 회사 제출 사본 보관.</li>\n<li><strong>비교 사례</strong> — 유사 결근한 동료가 어떤 처분 받았는지 정보.</li>\n<li><strong>취업규칙 원문</strong> — 해고 사유 조항 정확히 인용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: "연락두절 결근"이라도 응급상황 증명 가능하면 불가피성 인정.</blockquote>',
      },
      {
        title: '구제 절차 — 노동위 + 소송',
        content:
          '<p><strong style="color:#1e3a5f">해고일로부터 3개월 이내 노동위 구제신청이 시급합니다.</strong></p>\n<ul>\n<li><strong>1단계 — 해고 사유서 요구</strong> — 근기법 제27조, 서면 사유 없으면 해고 무효 사유.</li>\n<li><strong>2단계 — 노동위 구제신청</strong> — 3개월 내 제출, 증빙 일괄 첨부.</li>\n<li><strong>3단계 — 심판 + 화해</strong> — 노동위 심판 과정에서 복직·금전보상 화해 가능.</li>\n<li><strong>4단계 — 민사 병행</strong> — 임금 상당액·손해배상은 민사로 별도 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 3개월 지나면 노동위 구제 절차가 불가능하므로 날짜 관리 필수.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 대기발령과 구제신청 이익',
        summary:
          '대법원 2024두40493 사건(대법원, 2024.09.13 선고)에서 법원은 대기발령이 실효되었더라도 승진·승급에 불이익이 남아 있으면 구제신청 이익이 있다고 판시했습니다. 같은 원칙이 결근 해고에도 적용되어, 형식 복직이 있더라도 임금·경력 회복을 위한 구제신청이 가능합니다.',
        takeaway:
          '형식 복직 후에도 금전 회복·경력 보호 목적 구제신청이 가능합니다.',
      },
    ],
    faq: [
      {
        question: '취업규칙에 "3회 결근 시 해고"라고 있으면 원칙적으로 해고되나요?',
        answer:
          '<strong>아닙니다. 구체 사유·비례 심사 통과해야 정당합니다.</strong>',
      },
      {
        question: '병가라도 연락 없이 결근하면 해고인가요?',
        answer:
          '<strong>응급상황 증명 가능하면 불가피성 인정될 수 있습니다.</strong> 진단서·응급실 기록 확보 필수.',
      },
      {
        question: '회사가 서면 해고통지 안 했는데요?',
        answer:
          '<strong>근기법 제27조 위반으로 그 자체가 해고 무효 사유입니다.</strong>',
      },
      {
        question: '구제신청 기간 3개월 놓치면 어떻게 하나요?',
        answer:
          '<strong>민사 해고무효확인 소송은 가능합니다.</strong> 기간 제한 없음.',
      },
      {
        question: '형평성 위반은 어떻게 입증하나요?',
        answer:
          '<strong>유사 사건 처분 정보를 동료 진술·인사기록 요청으로 수집합니다.</strong>',
      },
    ],
    cta: {
      text: '부당해고 구제신청 순서, AI로 정리하기',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '부당해고 구제 절차', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
      { label: '반복 지각 징계 해고', href: '/guide/dismissal/dismissal-tardiness-repeated-discipline' },
      { label: '징계위원회 권리', href: '/guide/dismissal/dismissal-disciplinary-hearing-rights' },
      { label: '징계 과중 해고 방어', href: '/guide/dismissal/dismissal-disciplinary-excessive' },
      { label: '해고 사유서 요구 템플릿', href: '/guide/dismissal/dismissal-reason-request-template' },
    ],
  },

  // ─── 14. dismissal / wage-peak-age-extension-fired ───
  {
    domain: 'dismissal',
    slug: 'dismissal-wage-peak-age-extension-fired',
    keyword: '정년 연장 임금피크 해고',
    questionKeyword: '정년 연장하면서 임금피크제 적용됐는데 해고됐어요.',
    ctaKeyword: '정년연장 임금피크 해고 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '정년 연장 임금피크제 해고 대응 4가지 기준 | 로앤가이드',
      description:
        '정년 연장 대가로 임금피크제 적용 중 해고된 경우 취업규칙 변경 적법성과 구제 절차를 지금 확인하세요.',
    },
    intro:
      '<p>60세 정년 이후 임금피크제로 계속 근무하던 중 "사업 효율화"를 이유로 해고되는 사례가 늘고 있습니다. 대법원은 정년 판단 시 "당연종료 시점의 유효한 정년"을 기준으로 하며, 임금피크제 적용 후 해고는 정년 연장 기간에 대한 근로계약 침해로 부당해고 다툴 수 있는 여지가 큽니다.</p>',
    sections: [
      {
        title: '임금피크제 — 법적 성격',
        content:
          '<p><strong style="color:#1e3a5f">임금피크제는 "정년 연장 + 임금 감액"의 결합 제도입니다.</strong></p>\n<ul>\n<li><strong>취업규칙 변경</strong> — 근기법 제94조에 따라 근로자 과반 동의 필요.</li>\n<li><strong>연장 기간</strong> — 통상 60세→62세·63세로 연장.</li>\n<li><strong>임금 감액</strong> — 직전 임금의 60~80% 수준으로 조정.</li>\n<li><strong>근거 조항</strong> — 고령자고용법 제19조의2.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임금피크제 중 해고는 "연장된 정년 보장"이라는 계약 전제를 무너뜨립니다.</blockquote>',
      },
      {
        title: '해고 정당성 — 엄격 심사',
        content:
          '<p><strong style="color:#1e3a5f">임금피크제 적용자 해고는 일반 해고보다 엄격한 기준이 적용됩니다.</strong></p>\n<ul>\n<li><strong>실적 해고</strong> — 임금피크제 대상은 통상 보조·검수 업무로 전환되므로 실적 기준 적용 부적절.</li>\n<li><strong>경영상 해고</strong> — 근기법 제24조 4요건(긴박한 경영상 필요·해고회피 노력·합리적 선정·사전 협의) 엄격 적용.</li>\n<li><strong>연령 차별</strong> — 고령자고용법 제4조의4 위반 여부 심사.</li>\n<li><strong>신의칙 위반</strong> — 정년 연장 동의 얻은 후 해고는 신뢰 배신.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 임금피크 적용 후 해고 정당성을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증빙 수집 — 핵심 자료',
        content:
          '<p><strong style="color:#1e3a5f">임금피크제 동의서와 해고 사유 비교가 결정적 증거입니다.</strong></p>\n<ul>\n<li><strong>임금피크제 동의서</strong> — "정년 O세까지 고용 보장" 문구 확인.</li>\n<li><strong>취업규칙 원문</strong> — 정년·임금피크 조항 인용.</li>\n<li><strong>해고 사유서</strong> — 근기법 제27조 서면 통지.</li>\n<li><strong>업무 평가 기록</strong> — 임금피크제 이후 업무 내용·평가 이력.</li>\n<li><strong>회사 재정 자료</strong> — 경영상 해고라면 실질 재정 악화 여부 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임금피크제 동의 시 받은 문서는 가능한 한 사본 보관하세요.</blockquote>',
      },
      {
        title: '구제 절차 — 노동위 + 연령차별 병행',
        content:
          '<p><strong style="color:#1e3a5f">부당해고 구제에 연령 차별 구제를 병행하면 효과가 큽니다.</strong></p>\n<ul>\n<li><strong>1단계 — 노동위 구제신청</strong> — 해고일로부터 3개월 이내.</li>\n<li><strong>2단계 — 국가인권위 진정</strong> — 연령차별 해당 시 별도 구제.</li>\n<li><strong>3단계 — 민사소송</strong> — 해고무효확인 + 임금·손해배상.</li>\n<li><strong>4단계 — 금전보상 협의</strong> — 복직 어려우면 연장 정년까지의 임금 상당액 협상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 국가인권위 권고는 법적 강제력 약하지만 소송·노동위에서 증거로 활용됩니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정년 도달과 해고 판단 기준',
        summary:
          '대법원 2024두41038 사건(대법원, 2024.11.20 선고)에서 법원은 정년 도달에 따른 당연종료 여부는 당연종료가 다투어지는 시점에 유효한 정년을 기준으로 판단해야 하며, 소급 적용되는 정년을 기준으로 판단할 수 없다고 판시했습니다. 임금피크제로 연장된 정년 전에 해고되면 정당성을 다툴 수 있습니다.',
        takeaway:
          '연장된 정년 전 해고는 정당성을 엄격 심사합니다.',
      },
    ],
    faq: [
      {
        question: '임금피크제 동의했는데 중간 해고 가능한가요?',
        answer:
          '<strong>경영상 정당 사유 있으면 가능하지만 엄격히 심사됩니다.</strong>',
      },
      {
        question: '임금 많이 깎였는데 일만 시키고 해고되면요?',
        answer:
          '<strong>신의칙 위반·연령차별 모두 다툴 수 있습니다.</strong>',
      },
      {
        question: '연장 정년까지 남은 기간 임금 다 받을 수 있나요?',
        answer:
          '<strong>해고 무효 판결 시 복직 또는 임금 상당액 보상이 가능합니다.</strong>',
      },
      {
        question: '임금피크제 자체에 동의 안 하면요?',
        answer:
          '<strong>과반수 동의로 도입된 경우 개별 반대자도 적용됩니다.</strong> 단, 도입 절차 위반이면 무효 다툼.',
      },
      {
        question: '연령 차별 진정은 어디에 하나요?',
        answer:
          '<strong>국가인권위원회에 진정합니다.</strong> 노동위 구제신청과 병행 가능.',
      },
    ],
    cta: {
      text: '부당해고 구제신청 순서, AI로 정리하기',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '정년 강제 퇴직 대응', href: '/guide/dismissal/dismissal-retirement-age-forced' },
      { label: '정년 관련 구제 절차', href: '/guide/dismissal/dismissal-retirement-age-remedy' },
      { label: '임금피크 퇴직금 영향', href: '/guide/retirement/retirement-wage-peak-severance' },
      { label: '경영상 해고 정당성', href: '/guide/dismissal/dismissal-restructuring-unfair-criteria' },
      { label: '부당해고 구제 절차', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
    ],
  },
];
