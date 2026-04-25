import { SpokePage } from '../spoke-pages';

// batch44 labor 12개: dismissal 5 + wage 3 + unemployment 2 + retirement 2
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 인수합병 후 "사업 통합"을 이유로 갱신 거절된 기간제 근로자가 갱신기대권으로 다투도록 돕는 페이지다.
// 2. 이 페이지는 해고사유서가 "근무 불성실" 같은 추상 표현만 있어 방어가 불가능한 근로자가 사유 불특정·서면요건 위반으로 다투도록 돕는 페이지다.
// 3. 이 페이지는 회사가 강요·집요한 압박으로 사직서를 받아낸 경우 실질 해고(간접강요 해고)로 구제신청을 준비하도록 돕는 페이지다.
// 4. 이 페이지는 회사가 해고 대신 성과급 전액 삭감·급여 삭감으로 "사실상 징계"를 가한 근로자가 실질 징계로 다투도록 돕는 페이지다.
// 5. 이 페이지는 하청·파견 소속인데 실제 업무지시는 원청에서 받던 근로자가 원청의 해고책임을 묻도록 돕는 페이지다.
// 6. 이 페이지는 매달 받던 생산장려금이 통상임금에 산입되는지 몰라 연장수당을 적게 받은 근로자가 고정성 판단으로 차액을 청구하도록 돕는 페이지다.
// 7. 이 페이지는 야간 당직·수면시간이 근로시간으로 인정되는지 몰라 수당을 포기한 근로자가 대기·수면시간 기준으로 임금을 청구하도록 돕는 페이지다.
// 8. 이 페이지는 회사가 복지카드·포인트로 일부 급여를 지급해 최저임금 미달이 의심되는 근로자가 산입 범위를 점검하도록 돕는 페이지다.
// 9. 이 페이지는 계약 만료인지 자진퇴사인지 애매한 상태에서 실업급여가 막힌 근로자가 이직사유 구분·수급 방법을 정리하도록 돕는 페이지다.
// 10. 이 페이지는 근로시간이 절반 이상 줄어 생활이 불가능해진 근로자가 자진퇴사로도 실업급여를 받는 요건을 정리하도록 돕는 페이지다.
// 11. 이 페이지는 도급·용역 형식이었지만 실제 사용자가 따로 있는 근로자가 진짜 사용자에게 퇴직금을 청구하도록 돕는 페이지다.
// 12. 이 페이지는 DC형 퇴직연금을 받을 때 일시금·연금 선택과 세금을 몰라 손해 보는 근로자가 수령 방식을 정리하도록 돕는 페이지다.

export const spokesBatch44Labor: SpokePage[] = [
  // ─── 1. dismissal / acquisition-fixed-term-rights ───
  {
    domain: 'dismissal',
    slug: 'dismissal-acquisition-fixed-term-rights',
    keyword: '인수합병 기간제 갱신기대권',
    questionKeyword: '인수합병 후 계약 갱신을 거절당한 기간제도 부당해고로 다툴 수 있나요?',
    ctaKeyword: '인수합병 갱신거절 기간제 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '인수합병 후 기간제 갱신거절 4가지 방어 포인트 | 로앤가이드',
      description:
        '회사가 인수합병·통합된 뒤 "새 법인 방침"을 이유로 기간제 근로자의 계약 갱신을 거절했다면 갱신기대권과 승계 책임으로 다투는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"회사가 합병되더니 내 계약은 연장 안 된다네요"라는 사연이 많습니다. 갱신기대권이 형성된 기간제에게 합리적 이유 없이 갱신을 거절하면 실질이 해고로 취급됩니다. 인수합병·사업양도는 고용관계를 포괄승계하는 것이 원칙이므로 "새 법인 방침"이라는 이유만으로는 갱신 거절이 정당화되지 않습니다. 통보 후 3개월 내에 구제신청을 준비해야 합니다.</p>',
    sections: [
      {
        title: '갱신기대권 — 어떤 기간제에게 인정되나',
        content:
          '<p><strong style="color:#1e3a5f">기간제법 제4조와 판례상 4가지 징표 중 2개 이상이면 갱신기대권이 인정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>반복 갱신</strong> — 1년 계약을 2~3회 이상 반복 갱신한 이력.</li>\n<li><strong>갱신 조항</strong> — 계약서에 "평가 후 갱신", "특별한 사정 없으면 연장" 문구.</li>\n<li><strong>업무 상시성</strong> — 업무 자체가 한시적이지 않고 상시·반복적 성격.</li>\n<li><strong>관행·구두 약속</strong> — 상사·인사팀의 "별일 없으면 계속 간다" 구두 언급.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 갱신기대권이 인정되면 합리적 이유 없는 갱신거절은 실질 해고로 취급됩니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 갱신거절 통보 직후 해야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">통보일부터 "시점·이유·승계사실"을 먼저 증빙으로 확보해야 합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 갱신거절 통보 서면화</strong> — 구두 통보면 이메일로 "거절 사유를 서면으로 주세요" 요청.</li>\n<li><strong>2단계 — 합병·양도 공시자료 확보</strong> — 사업자등록증·합병공고·등기부로 승계 사실 증빙.</li>\n<li><strong>3단계 — 갱신기대권 증빙 정리</strong> — 반복 갱신 이력·평가 결과·인사 이메일 스크린샷.</li>\n<li><strong>4단계 — 지노위 구제신청</strong> — 통보일 3개월 이내, 상대방은 승계 법인(근기법 제28조).</li>\n<li><strong>5단계 — 이직확인서 확인</strong> — "계약만료"로 기재되도록 요청, 실업급여 수급 안정화.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 갱신기대권 성립 여부와 승계 법인 상대 구제 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '승계 법인이 "우리 방침"이라고 거절할 때',
        content:
          '<p><strong style="color:#1e3a5f">합병·양도의 포괄승계 원칙상 "새 회사 방침"은 독립적 거절 사유가 아닙니다.</strong></p>\n<ul>\n<li><strong>포괄승계</strong> — 흡수·신설합병 시 근로관계 전부 승계, 갱신기대권도 이전.</li>\n<li><strong>사업양도</strong> — 특약 우선이지만 근로자 배제 특약은 사해적 해고 소지.</li>\n<li><strong>합리적 이유 원칙</strong> — 단순 "조직 개편·인원 감축" 구호만으로는 거절 사유 부족.</li>\n<li><strong>차별적 거절</strong> — 동일 업무 정규직은 유지하면서 기간제만 거절 시 형평성 훼손.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 합병 전 인사평가가 양호했다면 "사업 통합에 따른 재편"은 객관적 사유가 아닙니다.</blockquote>',
      },
      {
        title: '구제 결과 — 복직·금전보상·소급임금',
        content:
          '<p><strong style="color:#1e3a5f">갱신기대권 인정 시 원직복직이 원칙, 거부 시 금전보상명령으로 전환할 수 있습니다.</strong></p>\n<ul>\n<li><strong>원직복직</strong> — 승계 법인을 상대로 "갱신된 근로관계 존재" 확인 + 복직 명령.</li>\n<li><strong>임금상당액</strong> — 거절일부터 복직일까지 월 급여 전액 지급.</li>\n<li><strong>금전보상명령</strong> — 복직 거부 시 심문 종결 전 신청, 통상 6~12개월치.</li>\n<li><strong>소송 병행</strong> — 지노위 병행 민사로 해고무효확인·임금청구도 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합병 후 3개월이 지나면 구제신청 기간이 도과할 수 있으니 즉시 준비하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 정년 도달과 근로관계 당연종료 여부',
        summary:
          '대법원 2024두41038 사건(대법원, 2024.11.20 선고)에서 법원은 정년이 도래한 근로자라도 기간제로 계속 근로하기로 하는 관행·기대권이 있다면 근로관계가 당연종료되었다고 보기 어렵다고 판시했습니다. 기간제 갱신기대권은 형식보다 실질로 판단됩니다.',
        takeaway:
          '정년·합병·통합 어느 사유든 갱신 실질이 유지되었다면 "계약기간 종료"만으로 관계를 끊을 수 없습니다.',
      },
    ],
    faq: [
      {
        question: '인수합병 후 새 법인이 "기간제는 일괄 비승계"라는데 맞나요?',
        answer:
          '<strong>근로자에게 불리한 승계배제 특약은 원칙적으로 효력이 없습니다.</strong> 고용승계 회피 목적이면 사해적 해고로 무효 다툼이 가능합니다.',
      },
      {
        question: '1년 계약 1회만 갱신했는데도 갱신기대권이 인정되나요?',
        answer:
          '<strong>횟수보다는 계약서 문구·업무 상시성·관행이 중요합니다.</strong> 1회 갱신이라도 "평가 후 연장" 문구·상시 업무면 인정될 수 있습니다.',
      },
      {
        question: '구제신청은 기존 법인·승계 법인 중 누구를 상대로 하나요?',
        answer:
          '<strong>합병으로 소멸한 법인은 상대가 될 수 없으므로 승계 법인이 상대방입니다.</strong> 사업양도면 실제 사업을 운영하는 양수인 법인이 대상.',
      },
      {
        question: '갱신거절 서면 이유서를 회사가 안 줘도 괜찮나요?',
        answer:
          '<strong>서면 거절 이유가 없으면 오히려 사용자 측 입증이 불리해집니다.</strong> 이메일·구두 통보 시점을 기록해두세요.',
      },
      {
        question: '실업급여 신청하면 구제신청에 불리한가요?',
        answer:
          '<strong>실업급여와 부당해고 구제신청은 병행 가능합니다.</strong> 구제 인용 후 소급 임금을 받으면 실업급여는 반환 또는 정산 처리됩니다.',
      },
    ],
    cta: {
      text: '부당해고 구제신청 순서, AI로 정리하기',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '기간제 갱신기대권 증빙', href: '/guide/dismissal/dismissal-fixed-term-expectation-evidence' },
      { label: '합병·양도 고용승계 다툼', href: '/guide/dismissal/dismissal-merger-succession-dispute' },
      { label: '경영상 해고 요건 검토', href: '/guide/dismissal/dismissal-managerial-requirements' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
      { label: '해고 후 실업급여 신청', href: '/guide/dismissal/dismissal-unemployment-benefit-apply' },
    ],
  },

  // ─── 2. dismissal / incomplete-reason-letter ───
  {
    domain: 'dismissal',
    slug: 'dismissal-incomplete-reason-letter',
    keyword: '해고사유서 추상 불충분',
    questionKeyword: '해고사유서가 "업무 불성실"만 적혀 있는데 무효로 다툴 수 있나요?',
    ctaKeyword: '해고사유서 추상 방어 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해고사유서 추상·불충분 4가지 무효 쟁점 | 로앤가이드',
      description:
        '해고사유서에 "업무 태만", "조직 부적응" 같은 추상 표현만 있어 방어가 불가능하다면 서면 요건 위반으로 해고 자체를 무효로 다투는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"해고 통지서를 받았는데 사유가 \'업무 부적격\' 한 줄이에요"라는 상담이 이어집니다. 근기법 제27조는 해고 사유와 시기를 서면으로 통지하도록 명확히 정하고, 판례는 "특정 행위·일시·결과"가 드러나지 않으면 서면 요건 위반으로 해고 자체를 무효로 보고 있습니다. 사유 불특정은 해고 무효의 독립 사유입니다.</p>',
    sections: [
      {
        title: '서면 통지 요건 — 해고 사유가 "특정"되어야 하는 이유',
        content:
          '<p><strong style="color:#1e3a5f">근기법 제27조는 "사유와 시기"를 구체적으로 서면 통지하도록 명확히 요구합니다.</strong></p>\n<ul>\n<li><strong>사유의 구체성</strong> — 언제·어디서·어떤 행위를 해 왜 해고인지 특정되어야 함.</li>\n<li><strong>방어권 보장</strong> — 근로자가 해고 사유를 알아야 소명·반박이 가능.</li>\n<li><strong>판단 대상 고정</strong> — 지노위·법원이 심사할 사유가 명확히 고정되어야 절차 공정.</li>\n<li><strong>사후 추가 금지</strong> — 통지서에 없는 사유를 심문 단계에서 보탤 수 없음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "업무 태만", "조직 부적응" 같은 추상 표현은 서면 요건 위반으로 간주될 수 있습니다.</blockquote>',
      },
      {
        title: '4단계 대응 — 통지서 받은 직후 해야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">사유 불특정 주장은 본안 사유 다툼과 병행해야 효과 극대화됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 통지서 원본 보관</strong> — 수정본·재통지본이 올 수 있으니 최초 원본 스캔·사진 확보.</li>\n<li><strong>2단계 — 서면 요구</strong> — "구체적 사실·일시·근거"를 내용증명으로 재청구.</li>\n<li><strong>3단계 — 취업규칙·인사평가 확보</strong> — 해고 근거로 삼은 규정과 평가 기록 요청.</li>\n<li><strong>4단계 — 지노위 구제신청</strong> — 통보일 3개월 이내, 서면요건 위반 + 본안 부당성 병행.</li>\n<li><strong>5단계 — 실업급여 신청</strong> — 해고 사유 기재 확인, 수급 제한 방지.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 해고사유서의 특정성 부족 여부와 구제 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '사후 추가 사유 — 지노위에서 보탠 사유는 인정되나',
        content:
          '<p><strong style="color:#1e3a5f">판례는 통지서 외 사유로 해고 정당성을 보강할 수 없다고 봅니다.</strong></p>\n<ul>\n<li><strong>동일성 유지</strong> — 통지 사유와 심문 사유의 동일성이 유지되어야 함.</li>\n<li><strong>보충 가능 범위</strong> — 구체적 일시·세부 정황 보충은 허용, 신규 사유 추가는 불가.</li>\n<li><strong>입증 책임</strong> — 사유의 구체성 부족은 사용자 측 서면 요건 위반으로 해고 무효.</li>\n<li><strong>사직서 제출 후에도</strong> — 실질 해고로 다투는 사건에서 대법원은 실질 판단 원칙을 재확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 심문에서 회사가 새 사유를 들고 나오면 "통지서와의 동일성 부족"을 즉시 지적하세요.</blockquote>',
      },
      {
        title: '이메일·문자·구두 통지는 어떻게 되나',
        content:
          '<p><strong style="color:#1e3a5f">근기법 제27조의 "서면"은 전자문서·문자도 실질 판단하되 출력 가능해야 합니다.</strong></p>\n<ul>\n<li><strong>이메일 통지</strong> — 회사 공식 계정·업무 메일이면 서면으로 인정 가능.</li>\n<li><strong>카카오톡·문자</strong> — 내용 보존·발신자 특정이 가능하면 예외적으로 인정되는 경우도 있음.</li>\n<li><strong>구두 해고</strong> — 서면 통지 없이 "내일부터 안 나와도 된다"면 서면요건 위반으로 무효.</li>\n<li><strong>해고예고수당</strong> — 30일 전 통지하지 않았다면 30일분 통상임금 별도 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 구두 해고를 증빙하려면 통화 녹음·문자·출입기록 등 복합 증거가 필요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사직서 제출 후 구제신청도 실질 판단',
        summary:
          '대법원 2025두33276 사건(대법원, 2025.10.16 선고)에서 법원은 사직서를 제출한 근로자의 부당해고 구제신청도 사직 의사의 진정성을 실질 판단하여 해고 해당 여부를 결정해야 한다고 판시했습니다. 서면 요건과 별개로 실질 해고가 있었는지는 별도로 검토됩니다.',
        takeaway:
          '통지서 형식뿐 아니라 실질이 해고였는지 함께 다투면 서면요건 위반 주장과 결합해 방어력이 커집니다.',
      },
    ],
    faq: [
      {
        question: '통지서에 취업규칙 조항 번호만 적혀 있으면 특정된 건가요?',
        answer:
          '<strong>조항 번호만으로는 부족합니다.</strong> 그 조항에 해당하는 구체적 행위·일시·결과가 함께 기재되어야 특정성이 인정될 수 있습니다.',
      },
      {
        question: '해고일 이후 회사가 "정정 통지서"를 다시 줘도 되나요?',
        answer:
          '<strong>사후 재통지로 최초 통지의 하자가 치유되지 않습니다.</strong> 재통지가 새로운 해고라면 새 통지일 기준으로 기간·절차를 다시 따져야 합니다.',
      },
      {
        question: '카카오톡 해고 통보도 서면으로 인정되나요?',
        answer:
          '<strong>보존 가능성이 있으면 서면으로 볼 여지가 있으나, 공식 메일보다 증거력이 약합니다.</strong> 사유 특정성까지 같이 따져봐야 합니다.',
      },
      {
        question: '해고예고수당과 부당해고 구제신청은 같이 해도 되나요?',
        answer:
          '<strong>두 권리는 성격이 달라 병행 가능합니다.</strong> 예고수당은 민사 청구, 구제신청은 지노위 절차입니다.',
      },
      {
        question: '통지서에 "귀하의 태도"라고만 적혀도 유효한가요?',
        answer:
          '<strong>추상 표현만으로는 서면 요건 위반 소지가 큽니다.</strong> 구체적 행위·시점이 없는 사유서는 독립적 무효 사유가 됩니다.',
      },
    ],
    cta: {
      text: '부당해고 구제신청 순서, AI로 정리하기',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '해고 서면 통지 요건', href: '/guide/dismissal/dismissal-written-notice-requirement' },
      { label: '해고예고수당 청구', href: '/guide/dismissal/dismissal-notice-pay-claim' },
      { label: '구두 해고 증빙', href: '/guide/dismissal/dismissal-verbal-evidence' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
      { label: '해고 후 실업급여 신청', href: '/guide/dismissal/dismissal-unemployment-benefit-apply' },
    ],
  },

  // ─── 3. dismissal / constructive-forced-resignation ───
  {
    domain: 'dismissal',
    slug: 'dismissal-constructive-forced-resignation',
    keyword: '간접강요 사실상 해고',
    questionKeyword: '회사가 집요하게 사직서 쓰라고 압박해서 제출했는데 해고로 다툴 수 있나요?',
    ctaKeyword: '간접강요 실질해고 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '간접강요 사실상 해고 5가지 판단 기준 | 로앤가이드',
      description:
        '회사의 집요한 압박으로 사직서를 낸 뒤 후회하는 분들을 위한 실질 해고 판단 기준과 구제 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"인사팀이 한 시간 동안 붙잡고 \'나갈래 해고될래\' 강요해서 사직서 썼어요"라는 사연은 흔합니다. 대법원은 사직서가 있어도 진정한 사직 의사가 아니라 사용자의 강요·강박으로 작성된 경우 "실질 해고"로 봅니다. 형식이 사직이라 해도 부당해고 구제신청이 가능하니 포기하지 마세요.</p>',
    sections: [
      {
        title: '실질 해고로 인정되는 5가지 정황',
        content:
          '<p><strong style="color:#1e3a5f">사직서의 형식보다 "강요·강박·선택권 박탈"의 실질이 중요합니다.</strong></p>\n<ul>\n<li><strong>시간·장소 고립</strong> — 밀폐된 회의실에서 장시간 면담, 동료 접촉 차단.</li>\n<li><strong>양자택일 강요</strong> — "사직 안 하면 해고·형사고발·불이익" 협박성 언행.</li>\n<li><strong>준비물 미제공</strong> — 사직서 내용·일자 등을 회사가 지정·작성.</li>\n<li><strong>검토 시간 박탈</strong> — 숙고·가족 상의·변호사 자문 시간 부족.</li>\n<li><strong>철회 거부</strong> — 당일·익일 사직 의사 철회 요청에도 회사가 반려.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사직서의 자발성이 무너진 정황이 2개 이상이면 실질 해고 주장이 설득력을 가집니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 사직서 제출 직후 해야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">사직 의사 철회는 "내용증명"으로 빠르게 기록을 남기는 것이 핵심입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 철회 의사 표시</strong> — 사직서 수리 전에 내용증명으로 "진정한 의사 아님" 통지.</li>\n<li><strong>2단계 — 녹취·메시지 확보</strong> — 면담 대화, 협박성 언행, 전후 메신저 내용 수집.</li>\n<li><strong>3단계 — 동료 진술서</strong> — 면담 전후 상황을 목격한 동료의 서면 진술 확보.</li>\n<li><strong>4단계 — 지노위 구제신청</strong> — 실질 해고 주장, 통보·수리일 3개월 이내.</li>\n<li><strong>5단계 — 실업급여 병행</strong> — 이직사유 "비자발적" 기재 요청, 실업급여 수급 안정.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 강요의 정황과 실질 해고 주장 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '사직 의사 철회 — 언제까지 가능한가',
        content:
          '<p><strong style="color:#1e3a5f">근로관계 종료의 법적 성격에 따라 철회 시점이 달라집니다.</strong></p>\n<ul>\n<li><strong>청약형 사직</strong> — 회사가 수리(승낙)하기 전까지 철회 가능.</li>\n<li><strong>해지통고형 사직</strong> — 도달 후 일방적 철회 불가, 강박·착오 주장으로 취소 필요.</li>\n<li><strong>합의해지</strong> — 양 당사자 의사 합치 후에는 일방 철회 불가, 실질 강박이면 취소 주장.</li>\n<li><strong>기준 판례</strong> — 대법원 2023두41864 — 제척기간·기간경과 주장도 실질 판단.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 철회 의사는 가능한 한 내용증명·이메일로 기록을 남겨 "강박 상태였다"는 주장과 결합하세요.</blockquote>',
      },
      {
        title: '합의금 받았는데도 구제신청 가능할까',
        content:
          '<p><strong style="color:#1e3a5f">위로금 수령이 곧 구제신청 포기를 뜻하는 것은 아닙니다.</strong></p>\n<ul>\n<li><strong>부제소 특약 유무</strong> — 합의서에 "일체의 이의 없다" 조항이 있으면 효력 다툼이 쟁점.</li>\n<li><strong>강박·착오 취소</strong> — 심리적 압박·정보 부족 상태였다면 합의 효력 다툼 가능.</li>\n<li><strong>금액 과소성</strong> — 지급액이 법정 기준(해고예고수당·퇴직금)보다 적으면 강박 정황.</li>\n<li><strong>즉시 반환 의사</strong> — 수령한 금액을 지체 없이 반환·공탁하면 합의 취소 주장이 용이.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합의서 서명 후에도 강박 상태였음을 입증하면 부제소 특약의 효력이 부정될 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 인사 불이익 처분의 실질 판단',
        summary:
          '대법원 2023두41864 사건(대법원, 2025.04.03 선고)에서 법원은 하위 인사고과 부여·승격 탈락 등 인사상 불이익 처분의 성격을 실질 판단하고 제척기간 기산점도 실질 기준으로 판단한다고 판시했습니다. 형식에 갇히지 않는 실질 판단이 사직서·합의서 사건에도 적용됩니다.',
        takeaway:
          '사직서·합의서 형식이 있어도 실질이 강요·보복이라면 구제신청의 대상이 될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '사직서를 제출한 당일 바로 철회하면 되나요?',
        answer:
          '<strong>회사가 수리하기 전이라면 자유롭게 철회 가능합니다.</strong> 가능한 한 내용증명·이메일로 증거를 남기세요.',
      },
      {
        question: '면담 녹음을 몰래 했는데 증거로 쓸 수 있나요?',
        answer:
          '<strong>본인이 대화 당사자라면 녹음은 합법이고 증거로 쓸 수 있습니다.</strong> 제3자 간 대화를 몰래 녹음하면 통신비밀보호법 위반입니다.',
      },
      {
        question: '사직서에 본인 글씨로 "자진 사직" 썼어도 다툴 수 있나요?',
        answer:
          '<strong>필기 주체는 자발성 판단의 1차 자료일 뿐입니다.</strong> 강요·강박 정황이 2개 이상 있으면 실질 해고로 다툴 수 있습니다.',
      },
      {
        question: '실업급여 신청 시 "사직"으로 되어 있으면 막히나요?',
        answer:
          '<strong>이직사유 정정 요청을 고용센터에 제기할 수 있습니다.</strong> 실질 해고 인정 시 "중대한 귀책사유"로 수급 가능합니다.',
      },
      {
        question: '합의금 1,000만원을 받고 서명했는데 구제신청이 가능한가요?',
        answer:
          '<strong>금액이 법정 기준보다 현저히 적거나 강박 정황이 있으면 다툴 수 있습니다.</strong> 합의 취소 주장을 병행하세요.',
      },
    ],
    cta: {
      text: '부당해고 구제신청 순서, AI로 정리하기',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '강요 사직서 취소 요령', href: '/guide/dismissal/dismissal-forced-resignation-revoke' },
      { label: '권고사직 거부·대응', href: '/guide/dismissal/dismissal-recommended-resignation-response' },
      { label: '해고 합의금 협상', href: '/guide/dismissal/dismissal-settlement-negotiation' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
      { label: '사직 후 실업급여 수급', href: '/guide/dismissal/dismissal-voluntary-unemployment-benefit' },
    ],
  },

  // ─── 4. dismissal / bonus-cut-as-penalty-disguised ───
  {
    domain: 'dismissal',
    slug: 'dismissal-bonus-cut-as-penalty-disguised',
    keyword: '성과급 삭감 사실상 징계',
    questionKeyword: '성과급을 전액 삭감해서 급여가 반토막 났는데 징계로 다툴 수 있나요?',
    ctaKeyword: '성과급 삭감 실질징계 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '성과급 전액 삭감 사실상 징계 4가지 방어 | 로앤가이드',
      description:
        '회사가 징계 절차 없이 성과급을 전액 삭감해 사실상 감봉·강등이 된 경우 실질 징계로 다투는 방법과 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"S등급 받다가 하루아침에 F로 떨어져 성과급이 0원이 됐어요"라는 사연이 늘고 있습니다. 회사가 징계 절차 없이 성과급을 전액 삭감해 사실상 감봉·강등 효과를 내면, 판례는 "실질이 징계"라면 징계 요건을 갖춰야 한다고 봅니다. 단순 평가라는 이름의 처분도 실질 다툼의 대상입니다.</p>',
    sections: [
      {
        title: '"평가"가 실질 징계로 전환되는 4가지 신호',
        content:
          '<p><strong style="color:#1e3a5f">평가 결과가 임금 삭감·승진 탈락으로 이어지고 객관 기준이 없으면 실질 징계에 해당할 수 있습니다.</strong></p>\n<ul>\n<li><strong>급격한 하향</strong> — 수년 S·A등급을 받다가 한 번에 최하위로 강등.</li>\n<li><strong>절차 누락</strong> — 평가 기준·피드백·이의제기 절차가 공개되지 않음.</li>\n<li><strong>금전 손실 규모</strong> — 월 급여의 30~50% 삭감 등 현저한 불이익.</li>\n<li><strong>특정 근로자 타깃</strong> — 같은 팀에서 유독 한 명만 지속 최하위 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형식이 "인사평가"라도 실질이 징계라면 징계 절차(소명기회·비례원칙)가 필요합니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 삭감 통보 직후 해야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">평가 기준 공개 요구 → 소명서 제출 → 구제신청 순으로 기록을 남기세요.</strong></p>\n<ol>\n<li><strong>1단계 — 평가 기준·결과 서면 공개 요청</strong> — 근거 규정·점수 산정 내역 요구.</li>\n<li><strong>2단계 — 이의신청서 제출</strong> — 사내 규정상 이의제기 기간을 놓치지 말 것.</li>\n<li><strong>3단계 — 동료 평가·과거 기록 비교</strong> — 동일 팀 근로자의 평가 이력으로 차별 입증.</li>\n<li><strong>4단계 — 지노위 부당 인사처분 구제신청</strong> — 감봉·강등 해당이면 3개월 이내 신청 가능.</li>\n<li><strong>5단계 — 민사 임금청구</strong> — 삭감 부분이 통상임금에 산입되는 고정 성과급이면 차액 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 성과급 삭감의 징계 여부와 구제 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '성과급 고정성 판단 — 삭감이 위법한 경우',
        content:
          '<p><strong style="color:#1e3a5f">성과급에 고정성이 있으면 일방적 삭감은 취업규칙 불이익 변경에 해당할 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>정기성·일률성·고정성</strong> — 매년 일정 기준·비율로 지급되어 왔다면 임금성 인정.</li>\n<li><strong>취업규칙 변경 절차</strong> — 불이익 변경은 과반수 근로자 동의 필요(근기법 제94조).</li>\n<li><strong>개별 동의</strong> — 동의서 없이 성과급 체계를 변경하면 효력 흠결.</li>\n<li><strong>근로조건 저하</strong> — 기본급은 그대로라도 실수령액 감소면 저하로 판단.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 최근 3~5년 성과급 지급 이력과 산정 방식을 표로 정리하면 고정성 입증에 유리합니다.</blockquote>',
      },
      {
        title: '감봉·강등 vs 평가 — 구분 실익',
        content:
          '<p><strong style="color:#1e3a5f">감봉·강등은 근기법상 징계로 절차 요건과 한도가 명확합니다.</strong></p>\n<ul>\n<li><strong>감봉 상한</strong> — 근기법 제95조 — 1회 평균임금 1일분 초과·총액 월임금 1/10 초과 금지.</li>\n<li><strong>강등</strong> — 직급·직책 하향은 중대한 불이익, 취업규칙 근거 + 절차 필요.</li>\n<li><strong>평가형 감액</strong> — 형식은 평가라도 실질 징계라면 감봉 한도 규정 적용.</li>\n<li><strong>구제 절차</strong> — 감봉·강등 해당이면 지노위 부당 인사처분 구제 대상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회사가 "평가일 뿐 징계 아님"이라고 주장해도 실질 판단 원칙이 적용됩니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 부당해고구제재심판정 실질 판단',
        summary:
          '대법원 2023두46074 사건(대법원, 2024.10.25 선고)에서 법원은 해고·징계 처분의 적법 여부는 형식이 아닌 실질에 따라 판단해야 하며, 양정의 비례성과 사유의 중대성이 같이 검토되어야 한다고 판시했습니다. 성과급 삭감 등 변형된 처분도 실질 징계면 절차·비례 요건이 적용됩니다.',
        takeaway:
          '회사가 "징계가 아니다"고 해도 실질 효과가 감봉·강등이라면 징계 절차 위반으로 다툴 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '성과급은 회사 재량이라 법적으로 다툴 수 없다던데요?',
        answer:
          '<strong>고정성·정기성·일률성이 인정되면 임금으로 판단되어 일방 삭감이 제한됩니다.</strong> 성과급 산정 방식과 지급 이력이 핵심 쟁점입니다.',
      },
      {
        question: '평가가 낮아 성과급 못 받았는데 감봉 수준인지 어떻게 판단하나요?',
        answer:
          '<strong>월 급여 총액 대비 10% 이상 상시 감소면 감봉으로 볼 여지가 큽니다.</strong> 감봉 한도(근기법 제95조) 초과면 위법 가능성.',
      },
      {
        question: '소명 기회가 없었다면 자동으로 위법인가요?',
        answer:
          '<strong>징계 절차에 해당하면 소명 기회 미제공은 절차 하자로 무효 사유가 됩니다.</strong> 취업규칙·단체협약상 소명 규정을 확인하세요.',
      },
      {
        question: '이미 성과급 받은 직원과 달리 저만 0원이면 차별인가요?',
        answer:
          '<strong>평가 기준이 공개되지 않거나 자의적이면 형평성 훼손으로 다툴 수 있습니다.</strong> 동료 평가 자료와 비교 입증이 중요합니다.',
      },
      {
        question: '임금청구 소송과 지노위 구제신청 중 뭐부터 해야 하나요?',
        answer:
          '<strong>기한이 짧은 지노위 구제신청(3개월)을 먼저 준비하세요.</strong> 민사 임금청구는 3년 내 가능하므로 병행 진행하면 됩니다.',
      },
    ],
    cta: {
      text: '부당해고 구제신청 순서, AI로 정리하기',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '징계 양정 과잉 다툼', href: '/guide/dismissal/dismissal-disciplinary-excess-defense' },
      { label: '감봉·강등 구제신청', href: '/guide/dismissal/dismissal-demotion-reduction-remedy' },
      { label: '성과급 통상임금 산입', href: '/guide/wage/wage-bonus-ordinary-inclusion' },
      { label: '취업규칙 불이익 변경', href: '/guide/wage/wage-rules-disadvantageous-change' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
    ],
  },

  // ─── 5. dismissal / subcontractor-principal-responsibility ───
  {
    domain: 'dismissal',
    slug: 'dismissal-subcontractor-principal-responsibility',
    keyword: '하청 원청 해고책임',
    questionKeyword: '하청 소속인데 원청이 "출입 금지"라고 했다면 원청을 상대로 다툴 수 있나요?',
    ctaKeyword: '하청 원청 해고책임 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '하청 소속 원청 해고책임 4가지 판단 기준 | 로앤가이드',
      description:
        '하청·파견 소속이지만 원청 지시를 받아온 근로자가 사실상 원청으로부터 해고 당한 경우, 원청의 사용자성과 구제 대상을 지금 확인하세요.',
    },
    intro:
      '<p>"파견 3년인데 원청이 갑자기 \'출입 금지\'라네요"라는 사연이 많습니다. 서류상 소속은 하청이라도 실제 업무지시·근태관리를 원청이 해왔다면, 판례는 원청을 실질 사용자로 인정해 해고책임을 물을 수 있다고 봅니다. 원청 배제 결정이 실질 해고에 해당하는 사례가 늘고 있습니다.</p>',
    sections: [
      {
        title: '원청 사용자성 판단 — 4대 징표',
        content:
          '<p><strong style="color:#1e3a5f">실제 업무지시·근태관리·장비제공·인사조정 중 2개 이상이 원청 측이면 실질 사용자로 인정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>업무지시</strong> — 원청 관리자·PM이 일상 업무를 직접 지시·검수.</li>\n<li><strong>근태관리</strong> — 출퇴근 시간·휴가 승인·출입증 관리 주체가 원청.</li>\n<li><strong>장비·작업장</strong> — 원청 사무실·장비·메일·시스템을 일상 사용.</li>\n<li><strong>인사 관여</strong> — 원청이 투입·교체 결정, 사실상 징계성 배제 결정에 개입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 원청 사용자성이 인정되면 "출입 금지·투입 중단"은 실질 해고로 다툴 수 있습니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 원청 배제 통보 직후',
        content:
          '<p><strong style="color:#1e3a5f">"사실상 해고" 구조로 하청 사용자와 원청을 함께 상대해 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 배제 통보 서면 확보</strong> — 원청·하청 양쪽의 통보 경위를 이메일·문서로 고정.</li>\n<li><strong>2단계 — 업무지시 증빙</strong> — 원청 관리자와 주고받은 메신저·이메일·회의록 수집.</li>\n<li><strong>3단계 — 근태·장비 기록</strong> — 원청 출입증·VPN·이메일 로그·좌석 배치도 등 확보.</li>\n<li><strong>4단계 — 지노위 구제신청</strong> — 원청과 하청을 공동 사용자로 기재, 3개월 이내.</li>\n<li><strong>5단계 — 실업급여 신청</strong> — 이직사유를 "원청 사용자 배제"로 정정 요구 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 원청 사용자성과 구제 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '파견·위장도급 — 무엇이 다른가',
        content:
          '<p><strong style="color:#1e3a5f">도급인지 파견인지에 따라 원청의 법적 지위가 크게 달라집니다.</strong></p>\n<ul>\n<li><strong>도급</strong> — 수급인이 독립적으로 일 처리, 원청은 결과만 수령·검수.</li>\n<li><strong>파견</strong> — 사용사업주가 직접 업무지시, 파견법상 사용자 책임 존재.</li>\n<li><strong>위장도급</strong> — 형식은 도급이지만 실질이 파견이면 파견법 위반·직접고용 간주.</li>\n<li><strong>직접고용 간주</strong> — 2년 초과 파견·위장도급 시 사용사업주가 직접 고용한 것으로 간주(파견법 제6조의2).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 2년 초과 근무 + 원청 업무지시가 있으면 원청 직접고용 간주 규정을 적극 활용하세요.</blockquote>',
      },
      {
        title: '구제 결과 — 원직복직·임금·직접고용',
        content:
          '<p><strong style="color:#1e3a5f">원청 사용자성 인정 시 원직복직·임금상당액 + 직접고용 간주 주장을 병행합니다.</strong></p>\n<ul>\n<li><strong>원직복직</strong> — 하청 소속 회복 + 원청 업무 복귀를 함께 명령.</li>\n<li><strong>임금상당액</strong> — 배제일부터 복직일까지 급여 전액 지급.</li>\n<li><strong>직접고용 간주</strong> — 파견 2년 초과·위장도급 인정 시 원청 직접고용 관계 확인.</li>\n<li><strong>파견법 과태료</strong> — 노동부 신고로 사용사업주에게 제재 유발 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 원청에 대한 구제는 별도 소송·재심절차가 필요할 수 있으므로 초기부터 전략 수립이 중요합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 파견·하청 사용자성 실질 판단',
        summary:
          '서울고등법원 2023누60218 사건(서울고등법원, 2024.08.21 선고)에서 법원은 도급·파견 형식에 구애받지 않고 실제 업무지시·근태관리·인사관여의 실질에 따라 사용자성을 판단해야 한다고 판시했습니다. 원청이 사실상 사용자에 해당하면 해고구제 대상이 됩니다.',
        takeaway:
          '계약 형식이 하청이라도 실제 지시가 원청이었다면 원청을 상대로 부당해고를 다툴 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '원청이 직접 해고한 게 아니라 "출입 금지"만 했는데 해고인가요?',
        answer:
          '<strong>실질적으로 근로 제공이 불가능해지면 실질 해고에 해당할 수 있습니다.</strong> 출입 제한의 이유·시기·하청 사용자의 대응을 기록하세요.',
      },
      {
        question: '하청 사용자가 "다른 현장으로 보내주겠다"는데 거부해도 되나요?',
        answer:
          '<strong>동등 조건 전환 제안은 검토해야 합니다.</strong> 부당한 조건·원거리 강제 배치는 실질 해고 주장을 강화하는 정황이 될 수 있습니다.',
      },
      {
        question: '파견 2년 넘게 근무했으면 자동으로 원청 직원인가요?',
        answer:
          '<strong>파견법 제6조의2에 따라 원청의 직접고용 간주가 적용될 수 있습니다.</strong> 단, 파견금지 업무는 별도 판단이 필요합니다.',
      },
      {
        question: '구제신청 대상은 하청인지 원청인지 모르겠어요',
        answer:
          '<strong>두 사용자를 공동 상대로 기재하는 것이 안전합니다.</strong> 지노위가 실질 판단 후 사용자성 인정 주체를 결정합니다.',
      },
      {
        question: '실업급여는 하청 퇴사로 바로 신청해도 되나요?',
        answer:
          '<strong>이직확인서 발급 후 바로 신청 가능합니다.</strong> 이직 사유를 "원청 배제로 인한 근로 중단"으로 상세 기재해 수급 거절을 예방하세요.',
      },
    ],
    cta: {
      text: '부당해고 구제신청 순서, AI로 정리하기',
      link: '/chat?domain=dismissal',
    },
    internalLinks: [
      { label: '파견·위장도급 판별 기준', href: '/guide/dismissal/dismissal-disguised-dispatch-check' },
      { label: '원청 직접고용 간주 요건', href: '/guide/dismissal/dismissal-principal-direct-hire' },
      { label: '파견 2년 초과 보호', href: '/guide/dismissal/dismissal-dispatch-2year-protection' },
      { label: '하청 폐업·배제 대응', href: '/guide/dismissal/dismissal-subcontractor-closure-response' },
      { label: '부당해고 구제신청 절차', href: '/guide/dismissal/dismissal-relief-procedure-comprehensive' },
    ],
  },

  // ─── 6. wage / production-bonus-regular-include ───
  {
    domain: 'wage',
    slug: 'wage-production-bonus-regular-include',
    keyword: '생산장려금 통상임금 산입',
    questionKeyword: '매달 받던 생산장려금은 통상임금에 포함되나요?',
    ctaKeyword: '생산장려금 통상임금 점검',
    type: '기준문서형',
    perspective: 'victim',
    meta: {
      title: '생산장려금 통상임금 4가지 고정성 판단 | 로앤가이드',
      description:
        '매달 또는 분기마다 받던 생산장려금·제조수당이 통상임금에 산입되는지 고정성·정기성·일률성 기준으로 확인하는 방법을 지금 정리하세요.',
    },
    intro:
      '<p>"생산장려금 매달 받아왔는데 연장수당 계산에 포함 안 되었네요"라는 사연이 많습니다. 통상임금은 정기·일률·고정적으로 지급된 임금이므로, 생산장려금이 이 세 요건을 만족하면 통상임금에 산입됩니다. 산입되면 연장·야간·휴일수당 계산 기준이 달라져 차액 청구가 가능합니다.</p>',
    sections: [
      {
        title: '통상임금 3대 요건 — 어떤 임금이 포함되나',
        content:
          '<p><strong style="color:#1e3a5f">정기성·일률성·고정성 모두 충족해야 통상임금에 산입됩니다.</strong></p>\n<ul>\n<li><strong>정기성</strong> — 매월·분기·일정 주기로 정해진 시점에 지급.</li>\n<li><strong>일률성</strong> — 모든 근로자 또는 일정 조건을 충족한 모든 근로자에게 지급.</li>\n<li><strong>고정성</strong> — 추가 조건 성취 여부와 관계없이 사전에 확정된 금액·비율.</li>\n<li><strong>근거 법령</strong> — 근기법 시행령 제6조, 대법원 2013다89399 전원합의체.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "성과에 따라 달라진다"는 조건이 있어도 최소 보장 부분이 있으면 그 부분은 고정성 인정 가능.</blockquote>',
      },
      {
        title: '4단계 산입 판단 — 차액 청구 가능성 점검',
        content:
          '<p><strong style="color:#1e3a5f">지급 내역서 3년치를 확보해 고정성·정기성 패턴을 분석하세요.</strong></p>\n<ol>\n<li><strong>1단계 — 지급 이력 수집</strong> — 최근 3년 월 급여명세서·생산장려금 지급 내역 정리.</li>\n<li><strong>2단계 — 산정 기준 확인</strong> — 취업규칙·단체협약·지급규정에서 산정 공식·조건 확인.</li>\n<li><strong>3단계 — 차액 계산</strong> — 통상임금 재산정 → 연장·야간·휴일수당 차액 산출.</li>\n<li><strong>4단계 — 노동청 진정 또는 민사</strong> — 3년 소멸시효(근기법 제49조), 체불 확인 후 진정·고소.</li>\n<li><strong>5단계 — 집단 청구</strong> — 동일 사업장 다수 근로자가 함께 청구 시 입증력·속도 모두 유리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 생산장려금의 통상임금 산입 여부와 체불 차액을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '고정성이 인정되는 대표 유형',
        content:
          '<p><strong style="color:#1e3a5f">명칭이 "장려금"이어도 실질이 고정 지급이면 통상임금입니다.</strong></p>\n<ul>\n<li><strong>매월 동일액 지급</strong> — 생산량·출근에 관계없이 정액 지급되면 고정성 명확.</li>\n<li><strong>출근일수 비례</strong> — 소정근로일에 비례 지급은 고정성 인정(성과 비례와 구분).</li>\n<li><strong>근속 연동</strong> — 근속·직급에 따라 금액이 달라지되 조건 성취 시 확정되면 포함.</li>\n<li><strong>지급 누락 없음</strong> — 최근 수년간 누락 없이 지급되어 왔다면 고정성 강력한 증표.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 취업규칙에 "재량 지급"이라 명시돼도 실제 수년간 정기·정액 지급됐다면 고정성은 유지됩니다.</blockquote>',
      },
      {
        title: '제외되는 유형 — 성과형·인센티브형',
        content:
          '<p><strong style="color:#1e3a5f">순수 성과 연동·개인 실적형은 고정성이 부정되어 통상임금에서 제외됩니다.</strong></p>\n<ul>\n<li><strong>순수 성과급</strong> — 개인 매출·KPI에 100% 연동되어 사전 확정 불가한 금액.</li>\n<li><strong>경영성과 연동</strong> — 회사 당기순이익 기반으로 변동, 고정성 부정.</li>\n<li><strong>1회성 특별상여</strong> — 특정 행사·창립기념 등 일회성 지급은 정기성 부정.</li>\n<li><strong>재량적 포상</strong> — 관리자 재량으로 선별 지급되면 일률성 부정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 같은 "생산장려금"이라도 사업장별 산정식이 다르므로 규정 원문을 가능한 한 확인하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 격일제 최저임금 소정근로시간 제한',
        summary:
          '대법원 2022다257238 사건(대법원, 2025.07.18 선고)에서 법원은 격일제 근무에서 최저임금액 이상 임금을 지급해야 하는 소정근로시간이 1일 8시간에 제한되는지와 관련해 근무 형태·지급 실태를 실질 판단해야 한다고 판시했습니다. 임금 항목의 성격도 지급 실태 기준으로 판단됩니다.',
        takeaway:
          '생산장려금·수당의 통상임금 산입 여부는 명칭이 아닌 "지급의 실태"로 결정된다는 점이 재확인됐습니다.',
      },
    ],
    faq: [
      {
        question: '취업규칙에 "재량적 상여"라고 돼 있으면 통상임금에서 빠지나요?',
        answer:
          '<strong>규정상 표현보다 실제 지급 실태가 중요합니다.</strong> 수년간 정기·정액 지급이면 재량이라는 표현이 있어도 통상임금일 수 있습니다.',
      },
      {
        question: '분기 1회 지급되는 장려금도 통상임금인가요?',
        answer:
          '<strong>정기성은 매월만을 의미하지 않습니다.</strong> 일정 주기로 확정 지급되면 분기·반기형도 통상임금 산입 가능.',
      },
      {
        question: '이미 받은 임금을 3년 전까지 소급해 청구할 수 있나요?',
        answer:
          '<strong>근기법 제49조에 따라 임금채권은 3년 소멸시효가 적용됩니다.</strong> 3년 이내 체불 부분은 청구 가능합니다.',
      },
      {
        question: '회사가 "통상임금 대신 성과 반영"이라고 공지했으면 어떻게 되나요?',
        answer:
          '<strong>법정 기준은 당사자 합의로 낮출 수 없습니다.</strong> 공지·합의가 있어도 법정 통상임금 기준은 그대로 적용됩니다.',
      },
      {
        question: '노동청 진정과 민사소송 중 뭐가 효율적인가요?',
        answer:
          '<strong>금액이 크면 민사, 빠른 해결은 노동청 진정부터 시작하는 것이 유리합니다.</strong> 진정 결과 체불로 확인되면 민사로 이어가기 쉽습니다.',
      },
    ],
    cta: {
      text: '임금체불 대응 순서, AI로 바로 정리하기',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '통상임금 판단 기준 정리', href: '/guide/wage/wage-ordinary-standard-criteria' },
      { label: '연장·야간·휴일수당 재계산', href: '/guide/wage/wage-overtime-recalculation' },
      { label: '상여금 통상임금 포함', href: '/guide/wage/wage-bonus-ordinary-inclusion' },
      { label: '임금체불 진정 절차', href: '/guide/wage/wage-complaint-procedure' },
      { label: '체불임금 3년 소멸시효', href: '/guide/wage/wage-statute-3year' },
    ],
  },

  // ─── 7. wage / night-sleeping-hours-working-time ───
  {
    domain: 'wage',
    slug: 'wage-night-sleeping-hours-working-time',
    keyword: '야간 수면시간 근로시간',
    questionKeyword: '야간 당직 중 수면시간도 근로시간인가요?',
    ctaKeyword: '야간 수면시간 임금 점검',
    type: '기준문서형',
    perspective: 'victim',
    meta: {
      title: '야간 수면시간 근로시간 인정 4가지 기준 | 로앤가이드',
      description:
        '야간 당직·숙직 중 수면시간이 근로시간으로 인정되는지 지휘감독·대기 의무 기준으로 확인하고 임금·야간수당을 청구하는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"야간 당직 12시간 중 4시간 잘 수 있다고 수당에서 빼버리네요"라는 상담이 늘고 있습니다. 판례는 "사용자의 지휘·감독 아래 대기 중이면 수면시간도 근로시간"이라고 판단해왔습니다. 실질적으로 업무 투입이 가능하고 휴식의 자유가 제한된다면, 수면시간도 임금 대상에 포함될 수 있습니다.</p>',
    sections: [
      {
        title: '수면시간이 근로시간으로 인정되는 4요건',
        content:
          '<p><strong style="color:#1e3a5f">지휘감독·호출 대기·이탈 제한·업무 연결 중 2개 이상이면 근로시간에 해당할 수 있습니다.</strong></p>\n<ul>\n<li><strong>지휘감독</strong> — 사업장 내 휴식 + 즉시 호출 대응 의무.</li>\n<li><strong>이탈 제한</strong> — 숙소·휴게실을 떠날 수 없고 위치 보고 의무.</li>\n<li><strong>호출 빈도</strong> — 실제 호출이 잦거나 대기 자체가 긴장 상태.</li>\n<li><strong>업무 연결</strong> — 수면 시간 중 업무 처리 기록이 존재.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "잠잘 수 있게 해줬다"만으로는 근로시간에서 제외되지 않으며, 대기 의무가 핵심입니다.</blockquote>',
      },
      {
        title: '4단계 임금 청구 — 수면시간 임금 받는 방법',
        content:
          '<p><strong style="color:#1e3a5f">당직 일지·호출 기록·출퇴근 기록을 확보한 뒤 차액을 계산합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 당직 근무 기록 확보</strong> — 최근 3년 당직표·출퇴근 기록·호출 로그.</li>\n<li><strong>2단계 — 수면시간 특정</strong> — 일별 몇 시간이 수면시간으로 공제됐는지 계산.</li>\n<li><strong>3단계 — 임금 재계산</strong> — 해당 시간을 근로시간에 포함해 통상·야간·연장수당 재산정.</li>\n<li><strong>4단계 — 노동청 진정</strong> — 체불 확인 후 진정, 필요 시 민사 임금청구 병행.</li>\n<li><strong>5단계 — 집단 청구</strong> — 동일 근무 형태 동료와 함께 진정하면 입증 속도·강도 향상.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 수면시간의 근로시간 해당 여부와 체불 차액을 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '당직·숙직 구분 — 법적 의미 차이',
        content:
          '<p><strong style="color:#1e3a5f">당직은 본래 업무 연장, 숙직은 비업무적 대기로 구분되나 실질로 판단합니다.</strong></p>\n<ul>\n<li><strong>당직</strong> — 본래 업무 연장, 지휘감독 아래 대기, 원칙적으로 근로시간.</li>\n<li><strong>숙직</strong> — 주로 경비·잡무, 강도·빈도 낮으면 근로시간 일부만 인정.</li>\n<li><strong>실질 판단</strong> — 명칭이 숙직이어도 호출·업무가 상시적이면 당직으로 전환 판단.</li>\n<li><strong>야간 가산</strong> — 22시~06시 근무에 대해 통상임금 50% 이상 가산(근기법 제56조).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 휴게 공간·시간의 "자유로운 이용"이 실제로 보장됐는지 사진·기록으로 확보하세요.</blockquote>',
      },
      {
        title: '포괄임금제에 포함돼 있어도 다툴 수 있나',
        content:
          '<p><strong style="color:#1e3a5f">포괄임금제 동의가 있어도 "실제 근로시간이 계산 가능"하면 무효 다툼이 가능합니다.</strong></p>\n<ul>\n<li><strong>원칙</strong> — 근로시간 산정이 가능한 업무는 포괄임금제 무효(대법원 2010다91046).</li>\n<li><strong>수당 부족</strong> — 실제 연장·야간 수당이 법정 기준 미달이면 차액 청구 가능.</li>\n<li><strong>동의 방식</strong> — 취업규칙·계약서에 명시적 동의 없으면 포괄임금 불성립.</li>\n<li><strong>최저기준 원칙</strong> — 포괄임금으로 법정 최저 수당 이하 지급하면 위법.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 포괄임금 계약서가 있어도 실질이 법정 기준 미달이면 차액은 가능한 한 청구 가능합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 파견근로자 퇴직금 공제 범위',
        summary:
          '대법원 2020다287921 사건(대법원, 2024.07.25 선고)에서 법원은 파견근로자의 근로자지위 확인 및 퇴직금 공제 범위와 관련해 근로시간·임금 산정은 실제 업무 실태에 따라야 한다고 판시했습니다. 수면·대기시간 포함 여부도 실질 판단이 원칙입니다.',
        takeaway:
          '수면시간이 실제로 "자유로운 시간"이 아니라 대기 상태라면 근로시간으로 인정되어 임금 청구가 가능합니다.',
      },
    ],
    faq: [
      {
        question: '매뉴얼에 "수면시간 무급"이라 돼 있으면 어떻게 되나요?',
        answer:
          '<strong>사규·매뉴얼은 법정 기준을 낮출 수 없습니다.</strong> 실질이 대기근무라면 수면시간 공제 조항의 효력이 부정될 수 있습니다.',
      },
      {
        question: '12시간 당직 중 호출 없이 잤어도 근로시간인가요?',
        answer:
          '<strong>호출 유무가 결정적이지 않습니다.</strong> 사업장 내 이탈 제한·호출 대기 의무가 있었다면 수면시간도 근로시간으로 볼 여지가 큽니다.',
      },
      {
        question: '숙직수당을 따로 받았는데 중복 청구가 되나요?',
        answer:
          '<strong>기지급 숙직수당은 공제 후 차액만 청구됩니다.</strong> 야간·연장수당 법정 기준과 비교해 부족분을 청구하세요.',
      },
      {
        question: '당직 기록이 회사에 없으면 입증이 어렵지 않나요?',
        answer:
          '<strong>본인의 메모·출입기록·메신저 대화·동료 진술 등 복합 증거로 입증 가능합니다.</strong> 노동청이 회사에 자료 제출 명령을 내릴 수도 있습니다.',
      },
      {
        question: '이미 퇴사했어도 청구할 수 있나요?',
        answer:
          '<strong>퇴사 후 3년까지 임금채권을 청구할 수 있습니다.</strong> 퇴직금·미지급 수당도 함께 정리해 진정·소송 준비하세요.',
      },
    ],
    cta: {
      text: '임금체불 대응 순서, AI로 바로 정리하기',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '당직·숙직 근로시간 판단', href: '/guide/wage/wage-duty-shift-working-time' },
      { label: '야간근로 가산수당 기준', href: '/guide/wage/wage-night-shift-premium' },
      { label: '포괄임금제 무효 다툼', href: '/guide/wage/wage-comprehensive-invalid-dispute' },
      { label: '연장근로 상한·수당', href: '/guide/wage/wage-overtime-limit-premium' },
      { label: '임금체불 진정 절차', href: '/guide/wage/wage-complaint-procedure' },
    ],
  },

  // ─── 8. wage / welfare-card-point-minimum ───
  {
    domain: 'wage',
    slug: 'wage-welfare-card-point-minimum',
    keyword: '복지카드 포인트 최저임금',
    questionKeyword: '복지카드나 포인트로 급여 일부를 받으면 최저임금 산입되나요?',
    ctaKeyword: '복지카드 포인트 최저임금 점검',
    type: '기준문서형',
    perspective: 'victim',
    meta: {
      title: '복지카드·포인트 최저임금 산입 4가지 쟁점 | 로앤가이드',
      description:
        '회사가 월급 일부를 복지카드·포인트로 지급해 최저임금 미달이 의심되는 경우, 산입 범위와 차액 청구 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"월급의 20%를 복지포인트로 받는데 최저임금 맞나 싶어요"라는 상담이 이어집니다. 최저임금법은 산입 범위를 제한적으로 열거하고, 복지성·일회성 급부는 원칙적으로 제외합니다. 복지카드·포인트 대부분은 최저임금 산입에서 빠지므로, 현금 급여만으로 최저 기준을 만족하는지 점검이 필요합니다.</p>',
    sections: [
      {
        title: '최저임금 산입 범위 — 무엇이 포함되나',
        content:
          '<p><strong style="color:#1e3a5f">최저임금법 제6조·시행령은 산입 범위를 명확히 제한합니다.</strong></p>\n<ul>\n<li><strong>산입 원칙</strong> — 매월 1회 이상 정기·일률·고정 지급되는 통화성 임금.</li>\n<li><strong>2026년 기준</strong> — 매월 지급 상여금과 복리후생비 100% 산입(개정법 완전 시행).</li>\n<li><strong>여전히 제외</strong> — 비정기 성과급·일회성 격려금·현물 지급 중 일부.</li>\n<li><strong>복지카드·포인트</strong> — 통화성이 아니거나 사용 제한이 강하면 산입 제외 판단 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "급여의 일부"로 표시돼도 사용처 제한·현금 전환 불가면 최저임금 산입에서 빠질 수 있습니다.</blockquote>',
      },
      {
        title: '4단계 점검 — 최저임금 미달 여부 확인',
        content:
          '<p><strong style="color:#1e3a5f">현금 지급분만 분리해 시간당 금액으로 환산해 비교하세요.</strong></p>\n<ol>\n<li><strong>1단계 — 지급 항목 분리</strong> — 현금·상여·복지카드·포인트·현물 항목별 금액 정리.</li>\n<li><strong>2단계 — 산입 가능 항목 추출</strong> — 통화성·정기·일률·고정 요건 충족 항목만 합산.</li>\n<li><strong>3단계 — 시간당 환산</strong> — 총 산입액 ÷ 월 소정근로시간(209시간 기준).</li>\n<li><strong>4단계 — 최저임금 비교</strong> — 2026년 최저임금과 비교해 미달분 계산.</li>\n<li><strong>5단계 — 노동청 진정</strong> — 미달 확인 시 즉시 진정, 3년 소멸시효 내 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 복지카드 포함 급여 구조와 최저임금 미달 여부를 분석해드립니다.</p>\n<a href="/chat?domain=wage" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '제외되는 유형 — 복지카드·쿠폰·현물',
        content:
          '<p><strong style="color:#1e3a5f">사용처·기한이 제한된 복지성 급부는 최저임금에 산입되지 않습니다.</strong></p>\n<ul>\n<li><strong>복지카드</strong> — 특정 가맹점·품목 제한, 기한 만료 소멸 시 산입 제외.</li>\n<li><strong>포인트</strong> — 사내 몰 전용·현금 전환 불가면 통화성 부정.</li>\n<li><strong>식사·차량 현물</strong> — 현물 지급은 원칙적으로 최저임금 산입 제외.</li>\n<li><strong>기숙사비 대납</strong> — 근로자가 실제 사용한 경우 제한적 산입 논의.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 카드·포인트 약관에서 "현금 전환 불가·기한 소멸" 조항을 스크린샷으로 보관하면 산입 제외 근거가 됩니다.</blockquote>',
      },
      {
        title: '회사 항변 — "산입된다" 주장 대응',
        content:
          '<p><strong style="color:#1e3a5f">회사가 "개정법상 모든 복지후생비가 산입된다"고 해도 통화성·정기성이 요건입니다.</strong></p>\n<ul>\n<li><strong>통화성 원칙</strong> — 2026년 이후에도 통화성·매월 지급이라는 요건은 유지.</li>\n<li><strong>사용 제한</strong> — 특정 품목·기한 제한이 강하면 통화성 부정 판단 여지.</li>\n<li><strong>일회성 쿠폰</strong> — 명절·창립기념 등 비정기 쿠폰은 정기성 부정으로 산입 제외.</li>\n<li><strong>실무 확인</strong> — 관할 고용노동청에 미리 산입 여부 질의 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회사가 산입 주장해 미달을 부인해도, 실제 사용 실태와 통화성 여부로 판단됩니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 택시 근로자 최저임금 미달액 청구',
        summary:
          '대법원 2023다223744 사건(대법원, 2024.07.25 선고)에서 법원은 택시 근로자들이 회사를 상대로 최저임금 미달액을 청구한 사건에서 임금 항목별 성격·정기성에 따라 최저임금 산입 여부를 판단해야 한다고 판시했습니다. 항목의 명칭이 아닌 실질이 기준입니다.',
        takeaway:
          '복지카드·포인트가 산입되는지는 명칭이 아닌 통화성·정기성으로 판단되므로, 구체적 지급 실태를 문서로 정리하세요.',
      },
    ],
    faq: [
      {
        question: '복지포인트도 최저임금에 포함된다고 회사가 주장하는데 맞나요?',
        answer:
          '<strong>사용처·기한 제한이 강하면 통화성 부정으로 산입에서 제외될 수 있습니다.</strong> 개별 포인트 약관을 확인해야 합니다.',
      },
      {
        question: '월 급여명세서에는 복지비가 임금처럼 적혀 있는데도 빠지나요?',
        answer:
          '<strong>명세서 기재와 법적 산입 여부는 별개입니다.</strong> 법정 산입 요건을 충족하지 못하면 제외됩니다.',
      },
      {
        question: '미달액은 3년 전까지 소급해 받을 수 있나요?',
        answer:
          '<strong>근기법 제49조에 따라 3년 소멸시효가 적용됩니다.</strong> 진정 시점 기준 3년 내 미지급분이 청구 대상.',
      },
      {
        question: '진정 후 회사가 보복할까 걱정됩니다',
        answer:
          '<strong>근기법 제104조에 따라 진정·고소 이유로 한 불이익 처분은 금지됩니다.</strong> 불이익 시 별도 구제 가능합니다.',
      },
      {
        question: '이미 퇴직했는데 복지포인트 미사용분도 청구 가능한가요?',
        answer:
          '<strong>미사용 포인트의 현금 보상 여부는 약관·취업규칙에 따릅니다.</strong> 별도 임금성이 인정되면 차액 청구 대상에 포함될 수 있습니다.',
      },
    ],
    cta: {
      text: '임금체불 대응 순서, AI로 바로 정리하기',
      link: '/chat?domain=wage',
    },
    internalLinks: [
      { label: '최저임금 산입 범위 정리', href: '/guide/wage/wage-minimum-inclusion-scope' },
      { label: '복리후생비 임금성 판단', href: '/guide/wage/wage-welfare-wage-nature' },
      { label: '상여금 최저임금 산입', href: '/guide/wage/wage-bonus-minimum-inclusion' },
      { label: '현물 지급 임금 여부', href: '/guide/wage/wage-in-kind-nature' },
      { label: '임금체불 진정 절차', href: '/guide/wage/wage-complaint-procedure' },
    ],
  },

  // ─── 9. unemployment / fixed-term-expire-voluntary-distinguish ───
  {
    domain: 'unemployment',
    slug: 'unemployment-fixed-term-expire-voluntary-distinguish',
    keyword: '계약만료 자진퇴사 구분',
    questionKeyword: '계약만료인지 자진퇴사인지 애매한데 실업급여 받을 수 있나요?',
    ctaKeyword: '계약만료 자진퇴사 수급 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '계약만료 vs 자진퇴사 실업급여 5가지 구분 | 로앤가이드',
      description:
        '계약 종료 시점에 "재계약 거절"인지 "자진퇴사"인지 애매해 실업급여가 막힌 경우, 구분 기준과 수급 요건을 지금 확인하세요.',
    },
    intro:
      '<p>"계약 연장 제안을 거절했더니 자진퇴사 처리됐어요"라는 사연이 적지 않습니다. 고용센터는 이직사유에 따라 수급 여부를 다르게 판단하므로, 계약만료인지 자발적 거절인지 경계가 중요합니다. 단순 거절이 아니라 "부당 조건이라 거절한 것"이라면 수급 자격을 주장할 여지가 있습니다.</p>',
    sections: [
      {
        title: '수급 가능한 "비자발적" 이직 4유형',
        content:
          '<p><strong style="color:#1e3a5f">고용보험법 시행규칙 제101조의2는 정당한 이직 사유를 구체적으로 열거합니다.</strong></p>\n<ul>\n<li><strong>계약 만료</strong> — 회사가 갱신 거절 또는 사측 사유로 재계약 불가.</li>\n<li><strong>부당 조건 변경</strong> — 임금·근무지·직무의 현저한 불이익 변경 제안.</li>\n<li><strong>장거리 통근 2시간 초과</strong> — 발령·이전으로 왕복 3시간 초과 시 정당 사유.</li>\n<li><strong>임금 체불 2개월 이상</strong> — 정기 급여의 30% 이상 2개월 이상 미지급.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 "거절"이 아니라 "부당 조건 거절"로 정리하면 수급 자격 주장이 가능합니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 이직확인서 정정 요청',
        content:
          '<p><strong style="color:#1e3a5f">이직확인서의 "이직 사유 코드"를 정정받는 것이 수급의 핵심입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 이직확인서 발급 확인</strong> — 고용보험 홈페이지에서 회사가 입력한 사유·코드 확인.</li>\n<li><strong>2단계 — 정정 요청서 작성</strong> — 회사에 사실 관계와 정확한 이직 사유를 서면으로 요청.</li>\n<li><strong>3단계 — 증빙 확보</strong> — 계약서·연장 제안 문서·조건 변경 통보·거절 메일 등 수집.</li>\n<li><strong>4단계 — 고용센터 심사 청구</strong> — 회사가 정정 거부 시 고용센터에 직접 심사 요청.</li>\n<li><strong>5단계 — 심사결정 이의</strong> — 불수급 판정 시 고용보험심사관·재심사위원회에 이의제기.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 이직 사유 구분과 수급 자격을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '경계 사례 — "갱신 제안 거절"은 자진인가 만료인가',
        content:
          '<p><strong style="color:#1e3a5f">제안 조건이 기존과 동등하지 않으면 "거절"은 실질 만료로 볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>임금 인하 제안</strong> — 기존보다 낮은 급여 재계약이면 거절해도 비자발적 사유.</li>\n<li><strong>직무 변경</strong> — 직무·직급을 현저히 낮춘 제안이면 거절 시 정당 사유.</li>\n<li><strong>근무지 이전</strong> — 왕복 3시간 이상 또는 원거리 발령이면 거절 시 수급 가능.</li>\n<li><strong>근무시간 감축</strong> — 소정근로시간 50% 이상 단축 제안은 거절해도 비자발적.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 제안 조건을 서면·이메일·메신저로 받아놓으면 "거절의 정당성"을 입증하기 쉽습니다.</blockquote>',
      },
      {
        title: '수급 요건 — 피보험 단위기간·수급자격',
        content:
          '<p><strong style="color:#1e3a5f">비자발적 이직이라도 피보험 단위기간 180일 이상이어야 신청 가능합니다.</strong></p>\n<ul>\n<li><strong>피보험 단위기간</strong> — 이직 전 18개월 내 180일 이상(고용보험법 제40조).</li>\n<li><strong>적극적 구직 의사</strong> — 구직 신청·출석·교육 이수 요건 충족.</li>\n<li><strong>신청 기한</strong> — 이직일로부터 12개월 내 신청(시효 주의).</li>\n<li><strong>지급 일수</strong> — 연령·가입 기간에 따라 120~270일.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 피보험 단위기간에는 유급휴일·휴업수당 기간도 포함되니 누락 없이 계산하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 실업급여 지급제한·반환명령 처분 취소',
        summary:
          '대구지법 2018구합23680 사건(대구지방법원, 2019.04.17 선고)에서 법원은 실업급여 지급제한·반환명령 처분의 정당성을 판단함에 있어 근로자의 실제 이직 경위·자발성 정황을 실질 판단해야 한다고 판시했습니다. 자진·비자발 구분은 형식이 아닌 실질입니다.',
        takeaway:
          '이직확인서의 코드가 자진으로 돼 있어도 실질이 비자발적이라면 수급 자격을 다툴 여지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '회사가 정정을 거부하면 방법이 없나요?',
        answer:
          '<strong>고용센터에 직접 심사 청구할 수 있습니다.</strong> 증빙을 첨부해 사실관계를 제출하면 회사 기재와 다르게 판단될 수 있습니다.',
      },
      {
        question: '갱신 제안을 서면으로 안 받았으면 증빙이 없는 건가요?',
        answer:
          '<strong>메신저·통화녹음·동료 진술 등 복합 증거로 입증 가능합니다.</strong> 가능한 한 즉시 문자·메일로 기록을 남기세요.',
      },
      {
        question: '이미 자진퇴사로 신청했는데 번복 가능한가요?',
        answer:
          '<strong>불수급 결정 후 90일 내 심사청구가 가능합니다.</strong> 이직사유에 대한 새 증거를 제출하면 다툴 수 있습니다.',
      },
      {
        question: '수급 인정 후 얼마 동안 받나요?',
        answer:
          '<strong>연령·피보험기간에 따라 120~270일입니다.</strong> 30세 이상·가입 10년 이상은 상한 270일까지 가능합니다.',
      },
      {
        question: '계약만료로 수급받으면 재취업 시 불이익 있나요?',
        answer:
          '<strong>재취업 자체에 불이익은 없습니다.</strong> 조기재취업수당·재취업 지원 프로그램을 함께 활용할 수 있습니다.',
      },
    ],
    cta: {
      text: '실업급여 받을 수 있는지 AI로 점검하기',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '이직확인서 정정 요청', href: '/guide/unemployment/unemployment-confirmation-correction' },
      { label: '비자발적 이직 사유 정리', href: '/guide/unemployment/unemployment-involuntary-reasons' },
      { label: '계약만료 수급 요건', href: '/guide/unemployment/unemployment-fixed-term-conditions' },
      { label: '실업급여 심사 청구', href: '/guide/unemployment/unemployment-review-request' },
      { label: '피보험 단위기간 계산', href: '/guide/unemployment/unemployment-insured-period-calc' },
    ],
  },

  // ─── 10. unemployment / working-hours-reduction-voluntary ───
  {
    domain: 'unemployment',
    slug: 'unemployment-working-hours-reduction-voluntary',
    keyword: '근로시간 감소 자진퇴사',
    questionKeyword: '근로시간이 반으로 줄어서 그만뒀는데 실업급여 받을 수 있나요?',
    ctaKeyword: '근로시간 감소 자진퇴사 수급',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '근로시간 50% 감소 자진퇴사 실업급여 4가지 조건 | 로앤가이드',
      description:
        '근로시간이 절반 이상 줄어 생활이 불가능해져 자진퇴사한 경우에도 실업급여를 받을 수 있는 요건과 신청 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"월 250시간 일하다 120시간으로 줄어서 생활이 안 돼서 그만뒀어요"라는 상담이 이어집니다. 고용보험법 시행규칙은 "소정근로시간 50% 이상 단축"을 정당한 이직사유로 정하고 있어, 자진 형식의 퇴사라도 수급 자격을 주장할 수 있습니다. 핵심은 단축 비율과 연속 기간의 증빙입니다.</p>',
    sections: [
      {
        title: '수급 가능한 근로시간 단축 4요건',
        content:
          '<p><strong style="color:#1e3a5f">시행규칙 제101조의2는 단축의 정도·기간·불가역성을 요건으로 정합니다.</strong></p>\n<ul>\n<li><strong>단축 비율</strong> — 소정근로시간 50% 이상 감소가 원칙적 기준.</li>\n<li><strong>연속 기간</strong> — 2개월 이상 지속된 단축이어야 정당 사유.</li>\n<li><strong>임금 감소</strong> — 단축에 따른 임금의 실질적 감소 확인.</li>\n<li><strong>회사 원인</strong> — 단축이 사용자 측 사정(경영난·수요 감소 등)에 기인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단축 통보·근무표 변경·임금 감소 내역을 시점별로 정리해 증빙해야 합니다.</blockquote>',
      },
      {
        title: '5단계 신청 — 이직 전·후 해야 할 일',
        content:
          '<p><strong style="color:#1e3a5f">이직 전 준비 → 이직 후 신청 → 심사 순서로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단축 증빙 수집</strong> — 근무표·급여명세서 3개월 이상, 단축 전후 비교.</li>\n<li><strong>2단계 — 사직 사유 서면화</strong> — 사직서에 "근로시간 50% 이상 감소"를 명시.</li>\n<li><strong>3단계 — 이직확인서 발급</strong> — 이직사유 코드 확인, 정정 필요 시 즉시 요청.</li>\n<li><strong>4단계 — 고용센터 신청</strong> — 이직일 12개월 이내, 구직신청 + 수급자격 신청서.</li>\n<li><strong>5단계 — 교육·구직활동</strong> — 실업인정일 출석, 재취업활동 보고.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 근로시간 감소의 수급 자격과 증빙 요건을 분석해드립니다.</p>\n<a href="/chat?domain=unemployment" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '50% 단축이 아니어도 수급되는 사례',
        content:
          '<p><strong style="color:#1e3a5f">단축 비율이 조금 낮아도 임금 감소·생계 곤란이 결합되면 정당 사유로 인정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>임금 30% 이상 감소</strong> — 단축 + 급여 30% 이상 감소면 별도 정당 사유.</li>\n<li><strong>직무 변경 결합</strong> — 단축 + 직무 강등이면 불이익 변경으로 추가 주장.</li>\n<li><strong>근무지 이전</strong> — 단축 + 장거리 이전 조합은 수급 요건 복합 충족.</li>\n<li><strong>체불 결합</strong> — 단축 + 2개월 이상 체불이면 독립적 정당 사유 충족.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 단축 비율이 애매할 때는 "임금 감소·생계 곤란"을 구체 수치로 주장하세요.</blockquote>',
      },
      {
        title: '회사 거짓 기재 시 대응',
        content:
          '<p><strong style="color:#1e3a5f">회사가 이직확인서에 "자진퇴사"로만 기재해도 증빙으로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>단축 기록</strong> — 근무표·타임카드 등 객관적 시간 기록.</li>\n<li><strong>임금 기록</strong> — 급여명세서 3개월 이상 비교.</li>\n<li><strong>동료 진술</strong> — 같이 단축된 동료의 확인서.</li>\n<li><strong>심사관 판단</strong> — 고용센터 담당관에게 직접 증빙 제출로 코드 변경 요청.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 이직확인서 코드 번복은 신청서 제출 전에 해결하는 것이 가장 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 실업급여 회수청구 처분',
        summary:
          '대구지법 2014구합1590 사건(대구지방법원, 2014.12.24 선고)에서 법원은 실업급여 회수청구 처분의 정당성을 판단함에 있어 근로자의 실제 이직 경위와 수급 요건 충족 여부를 실질적으로 판단해야 한다고 판시했습니다. 근로시간 단축 등 이직 사유의 정당성도 실질 기준으로 판단됩니다.',
        takeaway:
          '이직확인서 기재와 달리 실질이 비자발적 사유라면 수급 자격을 다툴 여지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '단축이 40%인데 실업급여 가능한가요?',
        answer:
          '<strong>50%를 기준으로 하지만, 임금 감소·생계 곤란 정황이 결합되면 인정될 수 있습니다.</strong> 구체 수치와 증빙을 함께 제출하세요.',
      },
      {
        question: '단축이 2개월 미만인데 그만뒀어요',
        answer:
          '<strong>연속 2개월 요건을 충족하지 못하면 정당 사유가 약해집니다.</strong> 단축 외 다른 사유(임금 체불·근무지 이전 등)와 결합하는 전략이 필요합니다.',
      },
      {
        question: '회사가 "바쁠 때는 늘려줄 수 있다"고 해도 단축으로 봐야 하나요?',
        answer:
          '<strong>실제 시행된 근무시간이 기준입니다.</strong> 약속이 아니라 실제 근무표 기록이 핵심 증빙입니다.',
      },
      {
        question: '프리랜서로 병행하면 실업급여가 막히나요?',
        answer:
          '<strong>실업 상태·근로의사가 유지되면 가능하나 소득 발생 시 신고 의무가 있습니다.</strong> 허위 신고는 부정수급으로 전환됩니다.',
      },
      {
        question: '신청 후 언제부터 받나요?',
        answer:
          '<strong>수급자격 인정 후 7일 대기기간을 거쳐 첫 지급이 이루어집니다.</strong> 이후 실업인정일마다 지급됩니다.',
      },
    ],
    cta: {
      text: '실업급여 받을 수 있는지 AI로 점검하기',
      link: '/chat?domain=unemployment',
    },
    internalLinks: [
      { label: '근로시간 단축 수급 요건', href: '/guide/unemployment/unemployment-hours-reduction-conditions' },
      { label: '자진퇴사 수급 특례', href: '/guide/unemployment/unemployment-voluntary-exception' },
      { label: '임금 감소 수급 사유', href: '/guide/unemployment/unemployment-wage-reduction-reason' },
      { label: '이직확인서 정정 요청', href: '/guide/unemployment/unemployment-confirmation-correction' },
      { label: '실업급여 신청 절차', href: '/guide/unemployment/unemployment-application-procedure' },
    ],
  },

  // ─── 11. retirement / outsourcing-true-employer-liability ───
  {
    domain: 'retirement',
    slug: 'retirement-outsourcing-true-employer-liability',
    keyword: '도급 실제사용자 퇴직금',
    questionKeyword: '도급·용역 계약이지만 실제로는 원청 지시로 일했는데 퇴직금을 어디서 받나요?',
    ctaKeyword: '도급 실사용자 퇴직금 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '도급·용역 실제 사용자 퇴직금 청구 4단계 | 로앤가이드',
      description:
        '도급·용역 형식이었지만 실제 업무지시는 원청에서 받아왔다면 실제 사용자에게 퇴직금을 청구하는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"도급 3년 근무했는데 퇴직금 달라고 하니 서로 미루네요"라는 사연이 많습니다. 근로기준법상 근로자 여부와 실제 사용자는 계약 형식이 아닌 지휘·감독의 실질로 판단됩니다. 위장 도급이 인정되면 원청이 퇴직금 지급 의무자가 될 수 있고, 소멸시효도 실질 관계 해지 시점부터 기산될 수 있습니다.</p>',
    sections: [
      {
        title: '실제 사용자 판단 — 4대 징표',
        content:
          '<p><strong style="color:#1e3a5f">업무지시·근태관리·장비제공·인사결정 중 2개 이상이 원청이면 실제 사용자로 판단될 수 있습니다.</strong></p>\n<ul>\n<li><strong>업무지시</strong> — 원청이 일일 작업 지시·결과 검수를 직접 수행.</li>\n<li><strong>근태관리</strong> — 출퇴근·휴가·연장근무 승인 주체가 원청.</li>\n<li><strong>장비·작업장</strong> — 원청 소유 장비·사무실·시스템을 일상 사용.</li>\n<li><strong>인사결정</strong> — 원청이 투입·교체·배치 결정에 실질 관여.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 도급 간판이 있어도 실제 지시의 실질이 원청이면 원청이 퇴직금 의무자가 될 수 있습니다.</blockquote>',
      },
      {
        title: '4단계 청구 — 원청·도급사 공동 상대',
        content:
          '<p><strong style="color:#1e3a5f">도급사·원청을 함께 상대해야 지급 회피를 차단할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 근로관계 증빙 수집</strong> — 이메일·메신저·회의록·출입 로그 등 지휘관계 자료.</li>\n<li><strong>2단계 — 근속기간 산정</strong> — 도급사 변경이 있어도 실질 사업 계속성 있으면 통산.</li>\n<li><strong>3단계 — 노동청 진정</strong> — 도급사·원청 공동으로 진정, 임금·퇴직금 체불 확인.</li>\n<li><strong>4단계 — 민사 청구</strong> — 확정 금액 기준 지급명령·본안 소송.</li>\n<li><strong>5단계 — 소멸시효 관리</strong> — 3년 기산점은 퇴직일, 권리남용 항변도 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 실제 사용자 판단과 퇴직금 청구 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '근속기간 통산 — 도급사 변경돼도 합산',
        content:
          '<p><strong style="color:#1e3a5f">사업 실질이 동일하면 도급사 교체에도 근속이 통산됩니다.</strong></p>\n<ul>\n<li><strong>사업 계속성</strong> — 업무 내용·장소·동료가 동일하면 실질 계속 사업.</li>\n<li><strong>고용승계 약정</strong> — 도급 변경 시 고용승계 특약 있었는지 확인.</li>\n<li><strong>위장 분절</strong> — 퇴직금 회피 목적의 형식적 분절은 효력 부정.</li>\n<li><strong>평균임금 산정</strong> — 최근 3개월 임금 기준 계산(근기법 제2조 제6호).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 도급사 교체 전후 근무일지·이메일·명함 등을 비교해 실질 계속 사업을 입증하세요.</blockquote>',
      },
      {
        title: '소멸시효·권리남용 항변 대응',
        content:
          '<p><strong style="color:#1e3a5f">회사의 소멸시효 항변에는 권리남용 법리로 대응할 수 있습니다.</strong></p>\n<ul>\n<li><strong>기산점</strong> — 퇴직일로부터 3년(근기법 제49조).</li>\n<li><strong>시효 중단</strong> — 노동청 진정·내용증명·민사 소제기 시 중단.</li>\n<li><strong>권리남용</strong> — 회사가 퇴직금 존재를 숨기거나 고지 의무 위반 시 시효 항변 부정.</li>\n<li><strong>부당이득</strong> — 시효 도과 시에도 부당이득반환 청구로 보완 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 3년이 지났다고 포기하지 말고 권리남용 항변 가능성을 먼저 점검하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 퇴직금 청구 소멸시효 권리남용',
        summary:
          '대법원 2024다294705 사건(대법원, 2025.05.29 선고)에서 법원은 퇴직금 청구에 대한 소멸시효 항변이 권리남용에 해당하는지 여부를 판단함에 있어 사용자의 정보 은폐·고지의무 위반 정황을 실질 평가해야 한다고 판시했습니다. 3년 도과도 상황에 따라 다툴 수 있습니다.',
        takeaway:
          '소멸시효 항변만으로 퇴직금 청구가 원칙적으로 막히지 않으니 권리남용 가능성을 가능한 한 검토하세요.',
      },
    ],
    faq: [
      {
        question: '도급 계약서에 "근로자 아님"이라 명시돼 있어요',
        answer:
          '<strong>계약서 표현과 법상 근로자 여부는 별개입니다.</strong> 실제 종속성·지시관계가 있으면 근로자로 인정될 수 있습니다.',
      },
      {
        question: '도급사 퇴사 후 원청을 상대로도 바로 청구할 수 있나요?',
        answer:
          '<strong>실제 사용자 주장 근거가 있으면 공동 상대로 진정·소송 가능합니다.</strong> 노동청이 사실조사를 진행합니다.',
      },
      {
        question: '계약상 주휴·연차 수당이 없는데 퇴직금은 가능한가요?',
        answer:
          '<strong>근로자성이 인정되면 주휴·연차·퇴직금 전부 청구 가능합니다.</strong> 형식 계약서가 아닌 실질 판단이 기준입니다.',
      },
      {
        question: '5인 미만 사업장인데도 퇴직금 받을 수 있나요?',
        answer:
          '<strong>1년 이상 근무하면 5인 미만 사업장도 퇴직금 대상입니다(근로자퇴직급여보장법 제4조).</strong> 2010년 이후 전면 적용됩니다.',
      },
      {
        question: '이미 3년 지났는데 방법이 있나요?',
        answer:
          '<strong>권리남용 항변 주장이나 부당이득반환 청구로 우회할 여지가 있습니다.</strong> 정보 은폐·고지의무 위반 정황이 핵심입니다.',
      },
    ],
    cta: {
      text: '퇴직금 계산과 청구 절차, AI로 정리하기',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: '도급·위장도급 근로자성 판단', href: '/guide/retirement/retirement-disguised-outsourcing' },
      { label: '실제 사용자 원청 퇴직금', href: '/guide/retirement/retirement-principal-employer-liability' },
      { label: '퇴직금 소멸시효·권리남용', href: '/guide/retirement/retirement-statute-abuse' },
      { label: '도급사 변경 근속 통산', href: '/guide/retirement/retirement-outsourcing-change-continuity' },
      { label: '퇴직금 청구 절차 정리', href: '/guide/retirement/retirement-claim-procedure' },
    ],
  },

  // ─── 12. retirement / dc-pension-payout-choice-tax ───
  {
    domain: 'retirement',
    slug: 'retirement-dc-pension-payout-choice-tax',
    keyword: 'DC형 퇴직연금 일시금 연금 세금',
    questionKeyword: 'DC형 퇴직연금은 일시금으로 받을까요, 연금으로 받을까요?',
    ctaKeyword: 'DC형 퇴직연금 수령방식 점검',
    type: '기준문서형',
    perspective: 'victim',
    meta: {
      title: 'DC형 퇴직연금 일시금 vs 연금 4가지 판단 | 로앤가이드',
      description:
        'DC형 퇴직연금을 일시금·연금 중 어떻게 받아야 세금·수령액·운용 측면에서 유리한지 지금 정리해서 확인하세요.',
    },
    intro:
      '<p>"DC형 퇴직연금을 일시금으로 받을지 연금으로 받을지 고민이에요"라는 상담이 이어집니다. 수령방식에 따라 세금·지급액·운용 수익이 크게 달라지고, 한번 결정하면 되돌리기 어렵습니다. 연금계좌 이체·IRP 운용·연금수령 10년 이상 등 핵심 요건을 미리 정리해야 손해 없이 수령할 수 있습니다.</p>',
    sections: [
      {
        title: 'DC형 수령방식 4가지 비교',
        content:
          '<p><strong style="color:#1e3a5f">일시금·IRP 이체·연금수령·부분인출 중 상황별로 유리한 방식이 다릅니다.</strong></p>\n<ul>\n<li><strong>일시금</strong> — 바로 사용 가능, 퇴직소득세 부과.</li>\n<li><strong>IRP 이체</strong> — 과세 이연 + 운용 선택 확대, 55세 이후 연금 선택 여지.</li>\n<li><strong>연금수령</strong> — 10년 이상 수령 시 퇴직소득세 30~40% 감면 + 연금소득세(3.3~5.5%).</li>\n<li><strong>부분 인출</strong> — 급한 자금만 먼저, 나머지는 IRP에서 계속 운용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 55세 이후 10년 이상 연금수령 계획이 있으면 IRP 이체가 유리한 경우가 많습니다.</blockquote>',
      },
      {
        title: '4단계 선택 절차 — 수령 전 반드시 확인',
        content:
          '<p><strong style="color:#1e3a5f">세금·운용·생계 관점에서 체크리스트를 확인한 뒤 결정하세요.</strong></p>\n<ol>\n<li><strong>1단계 — 퇴직소득세 계산</strong> — 국세청 홈택스 모의계산으로 예상 세액 확인.</li>\n<li><strong>2단계 — IRP 계좌 개설</strong> — 금융사 선택(운용 상품·수수료 비교), 퇴직 전후 30일 내 개설.</li>\n<li><strong>3단계 — 수령 설계</strong> — 10년 이상 연금·부분 인출 등 설계, 생계·의료비 대비.</li>\n<li><strong>4단계 — 지급 지시</strong> — 퇴직 시 회사에 IRP 이체 또는 일시금 지급 요청 서면 제출.</li>\n<li><strong>5단계 — 운용 모니터링</strong> — 분기별 수익률·보수·편입상품 점검.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 본인 상황에 맞는 수령방식과 세금을 분석해드립니다.</p>\n<a href="/chat?domain=retirement" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '연금수령 세제 혜택 — 10년·15년 차이',
        content:
          '<p><strong style="color:#1e3a5f">연금수령 연차와 기간에 따라 감면 폭이 달라집니다.</strong></p>\n<ul>\n<li><strong>10년 이하 수령</strong> — 퇴직소득세 30% 감면, 연금소득세 3.3~5.5%.</li>\n<li><strong>10년 초과 수령</strong> — 11년차부터 40% 감면, 장기 수령 유리.</li>\n<li><strong>한도 초과 인출</strong> — 연금 한도 초과분은 퇴직소득세 또는 기타소득세 부과.</li>\n<li><strong>사망·부상 특례</strong> — 부득이한 사유면 일시 인출해도 연금 간주 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 수명·건강 상태·다른 연금 수령 계획을 고려해 10년이 현실적인지 먼저 점검하세요.</blockquote>',
      },
      {
        title: '이직·중도인출 — 유의할 점',
        content:
          '<p><strong style="color:#1e3a5f">이직 시 IRP 의무 이체, 중도인출은 법정 사유에 한해 허용됩니다.</strong></p>\n<ul>\n<li><strong>의무 이체</strong> — 퇴직 시 DC 적립금은 IRP로 자동 이체(근로자퇴직급여보장법 제17조).</li>\n<li><strong>중도 인출 사유</strong> — 주택 구입·6개월 이상 요양·파산선고 등 법정 사유에 한함.</li>\n<li><strong>세제 불이익</strong> — 사유 없이 중도 해지 시 기타소득세 16.5% 부과.</li>\n<li><strong>운용 지속</strong> — 이직해도 IRP 내에서 계속 운용·적립 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 중도인출은 노후 자산이 크게 줄어들 수 있으므로 급여 외 자금부터 활용하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 일실 퇴직연금 손해배상 공제 순서',
        summary:
          '대법원 2021다255853 사건(대법원, 2024.11.21 선고)에서 법원은 일실 퇴직연금 상당 손해배상채권에서 직무상유족연금을 공제하는 순서·인적 범위와 관련해 "상속 후 공제" 방식을 적용할지 판단했습니다. 연금 수급 구조의 법적 성격 판단 기준을 제시합니다.',
        takeaway:
          '퇴직연금은 단순 적립금이 아닌 법정 권리이므로 수령방식에 따라 세제·보호 범위가 달라진다는 점을 전제로 결정해야 합니다.',
      },
    ],
    faq: [
      {
        question: '일시금으로 받으면 세금이 얼마나 나오나요?',
        answer:
          '<strong>퇴직소득세는 근속연수·금액에 따라 달라집니다.</strong> 국세청 홈택스 모의계산으로 수령 전 예상 세액을 확인하세요.',
      },
      {
        question: 'IRP 이체 후에도 중도 인출이 가능한가요?',
        answer:
          '<strong>법정 사유(주택·의료·파산 등)에 한해 가능합니다.</strong> 사유 외 해지는 세제 불이익이 큽니다.',
      },
      {
        question: '55세 전 퇴직했는데 연금수령이 가능한가요?',
        answer:
          '<strong>연금수령 개시는 55세 이후입니다.</strong> 55세 전에는 IRP 내 운용하다가 55세 도달 후 연금으로 전환하세요.',
      },
      {
        question: '연금수령 10년 동안 생활비가 부족하면요?',
        answer:
          '<strong>연금 한도 내에서 부분 인출하거나 국민연금과 결합하는 설계가 필요합니다.</strong> 10년 유지가 세제상 유리합니다.',
      },
      {
        question: '회사가 IRP 이체를 거부할 수 있나요?',
        answer:
          '<strong>법상 의무이므로 거부할 수 없습니다.</strong> 거부 시 고용노동부에 신고 가능합니다.',
      },
    ],
    cta: {
      text: '퇴직금 계산과 청구 절차, AI로 정리하기',
      link: '/chat?domain=retirement',
    },
    internalLinks: [
      { label: 'DB vs DC 퇴직연금 비교', href: '/guide/retirement/retirement-db-dc-comparison' },
      { label: 'IRP 운용·수수료 점검', href: '/guide/retirement/retirement-irp-management-fee' },
      { label: '연금수령 세제 혜택', href: '/guide/retirement/retirement-pension-tax-benefit' },
      { label: '중도 인출 법정 사유', href: '/guide/retirement/retirement-early-withdrawal-conditions' },
      { label: '퇴직연금 수령 절차', href: '/guide/retirement/retirement-pension-payout-procedure' },
    ],
  },
];
