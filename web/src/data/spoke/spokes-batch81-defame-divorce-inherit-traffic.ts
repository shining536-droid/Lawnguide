import { SpokePage } from '../spoke-pages';

// batch81 divorce + defamation + inheritance + traffic-accident — 10개 (2026-05-29)
//
// 고유 존재 이유:
// 1. (divorce) divorce-pension-division-public-private-allocation-track — 국민연금·공무원연금 등 공적연금과 개인연금·퇴직연금 등 사적연금이 재산분할 대상이 되는지·분할 방법을 정리하는 트랙.
// 2. (divorce) divorce-stock-option-unvested-property-division-track — 혼인 중 부여됐으나 가득(vesting) 시기가 이혼 이후인 미가득 스톡옵션·RSU의 재산분할 대상 여부와 기여도 평가를 다투는 트랙.
// 3. (divorce) divorce-domestic-violence-protective-order-priority-track — 가정폭력 피해 배우자가 가정폭력처벌법상 임시조치·피해자보호명령을 먼저 신청하고 이혼·위자료를 병행하는 신변보호 우선 트랙.
// 4. (divorce) divorce-second-marriage-pre-marriage-asset-division-track — 재혼 부부에서 각자가 혼인 전부터 보유한 특유재산과 혼인 중 형성된 공동재산을 구분해 분할 대상을 정리하는 트랙.
// 5. (defamation) defamation-school-parent-teacher-criticism-public-interest-defense — 학부모가 단체채팅방에서 교사의 학급 운영을 비판한 글이 명예훼손·모욕으로 고소된 경우 공공의 이익·진실성으로 위법성조각을 다투는 방어 트랙.
// 6. (defamation) defamation-youtube-comment-anonymous-malicious-victim-track — 유튜브 댓글창의 익명 악의적 명예훼손 피해자가 정보통신망법·임시조치·발신자 정보 청구로 대응하는 트랙.
// 7. (defamation) defamation-real-estate-broker-malicious-review-victim-track — 부동산 중개사가 포털·플랫폼의 허위·악의적 후기·리뷰로 영업상 명예가 훼손된 경우 정통망법·임시조치·삭제·손해배상을 청구하는 트랙.
// 8. (defamation) defamation-public-figure-political-criticism-defense — 정치인·공인을 비판한 글·발언이 명예훼손·모욕으로 고소된 경우 공인 비판의 공공성·표현의 자유를 근거로 위법성조각을 다투는 방어 트랙.
// 9. (inheritance) inheritance-renunciation-after-3months-late-debt-discovery-track — 상속개시 3개월 후 피상속인 채무를 뒤늦게 발견한 상속인이 민법 제1019조 제3항 특별한정승인 요건·기간을 검토하는 트랙.
// 10. (traffic-accident) traffic-accident-school-zone-protected-area-aggravated-accused-track — 어린이보호구역(스쿨존)에서 사고를 낸 운전자가 특정범죄가중법(민식이법)상 가중처벌·면허 행정처분·보험 처리에 대응하는 방어 트랙.

export const spokesBatch81DefameDivorceInheritTraffic: SpokePage[] = [
  // ─── 1 divorce-pension-division-public-private-allocation-track ───
  {
    domain: 'divorce',
    slug: 'divorce-pension-division-public-private-allocation-track',
    keyword: '이혼 공적연금 사적연금 재산분할 산정',
    questionKeyword: '국민연금·공무원연금이나 개인연금·퇴직연금도 이혼할 때 나눠야 하나요? 어떻게 산정하나요?',
    ctaKeyword: '연금 재산분할 산정 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '연금 재산분할 — 5단계 공적·사적연금 산정 트랙 | 로앤가이드',
      description:
        '국민연금·공무원연금 등 공적연금과 개인연금·퇴직연금 등 사적연금을 이혼할 때 어떻게 나누는지, 분할연금 신청은 어떻게 하는지 막막하다면 연금 재산분할 5가지 산정 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼을 준비하는데 부동산이나 예금 외에 부부 각자의 국민연금·공무원연금, 그리고 개인연금·퇴직연금 같은 노후 자금이 마음에 걸립니다. 한쪽은 오래 일해서 연금이 많이 쌓였고, 다른 한쪽은 가사·육아로 경력이 단절돼 연금이 적은데 이걸 어떻게 정리해야 공평한지 막막합니다. 공적연금은 분할연금 청구라는 별도 절차가 있다고 듣기도 했어요." 국민연금법 제64조는 혼인기간 5년 이상 등의 요건을 충족한 배우자에게 분할연금 청구권을 인정하고, 민법 제839조의2·제843조는 재산분할에서 공적·사적연금을 포함한 부부 공동재산을 청산하도록 하는 영역입니다. 대법원 2024스876(대법원, 2026.01.15)은 재산분할 제도가 혼인 중 공동으로 형성한 재산의 명의와 상관없이 형성·유지에 기여한 정도 등 실질에 따라 각자의 몫을 분할·귀속시키는 제도임을 설명한 사례입니다. 당사자라면 ① 연금 종류 정리 ② 혼인기간 산정 ③ 분할연금 요건 확인 ④ 사적연금 평가 ⑤ 분할·청구 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 연금 재산분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 종류정리·기간산정·요건확인·사적평가·분할청구 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 연금 종류 정리</strong> — 국민·공무원·사학·군인연금 등 공적연금과 개인·퇴직연금 등 사적연금 구분.</li>\n<li><strong>② 혼인기간 산정</strong> — 분할연금 요건이 되는 혼인기간(5년 이상 등) 산정.</li>\n<li><strong>③ 분할연금 요건 확인</strong> — 국민연금법 제64조 등 분할연금 청구 요건 확인.</li>\n<li><strong>④ 사적연금 평가</strong> — 개인연금·퇴직연금의 혼인 중 형성 부분과 평가액 산정.</li>\n<li><strong>⑤ 분할·청구</strong> — 재산분할 협의·심판과 공적연금 분할연금 청구 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공적연금은 국민연금법 등 개별법상 분할연금 청구 제도가 있고, 사적연금은 민법상 재산분할 대상으로 평가되는 영역입니다. 혼인 중 형성된 부분에 한해 기여도를 반영해 분할 방법을 정해두는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원·공단 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 연금 자료 확보·혼인기간 정리·요건 확인·평가·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 연금 가입·납입 자료 확보 (즉시)</strong> — 국민연금·공무원연금공단·퇴직연금사업자 가입증명·예상연금액 자료.</li>\n<li><strong>2단계 — 혼인기간·납입기간 정리 (1~2주)</strong> — 혼인신고·이혼 시점과 연금 납입기간 대조.</li>\n<li><strong>3단계 — 공적연금 분할연금 요건 확인</strong> — 혼인기간 5년 이상 등 요건 충족 여부 확인.</li>\n<li><strong>4단계 — 사적연금 평가·재산분할 청구</strong> — 개인·퇴직연금 평가액 산정 후 재산분할에 반영.</li>\n<li><strong>5단계 — 분할연금 청구·정산 (수급권 발생 후 3년 내 청구)</strong> — 국민연금공단 등에 분할연금 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">연금 재산분할 산정 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·공적연금·사적연금 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>국민연금 가입증명서·예상연금액 통지서</strong></li>\n<li><strong>공무원·사학·군인연금 가입·납입 자료</strong></li>\n<li><strong>개인연금 가입증서·해지환급금·평가액 자료</strong></li>\n<li><strong>퇴직연금(DB·DC·IRP) 적립금·운용 자료</strong></li>\n<li><strong>혼인기간·납입기간 대조표</strong></li>\n<li><strong>기여도 입증 자료 (소득·가사노동·육아)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공적연금 분할연금은 통상 수급권 발생 후 일정 기간 내에 별도로 청구해야 하는 영역입니다. 재산분할 협의서나 심판에서 분할연금 청구 여부를 명확히 정해두면 추후 분쟁을 줄이는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>혼인기간 산정</strong> — 별거기간 제외 여부와 분할연금 5년 요건 충족.</li>\n<li><strong>분할 비율</strong> — 공적연금 분할연금 비율과 사적연금 분할 비율.</li>\n<li><strong>평가 시점</strong> — 사적연금 평가 기준일(혼인 파탄 시점·변론 종결일).</li>\n<li><strong>기여도</strong> — 가사·육아·소득 기여를 반영한 분할 비율.</li>\n<li><strong>청구 기한</strong> — 분할연금 청구 기간(수급권 발생 후 3년 등).</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>관할 가정법원·국민연금공단 가사조사</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 혼인 중 형성된 재산의 실질적 기여에 따른 분할 영역',
        summary:
          '대법원 2024스876(대법원, 2026.01.15 선고) 영역에서 법원은 재산분할 제도가 이혼 등의 경우 부부가 혼인 중 공동으로 형성한 재산을 청산·분배하는 것을 주된 목적으로 하고, 명의와 상관없이 재산의 형성·유지에 기여한 정도 등 실질에 따라 각자의 몫을 분할하여 귀속시키고자 하는 제도라는 취지로 설명했습니다. 연금·퇴직금 등 노후 자산을 포함한 재산분할을 다투는 사안에서 이 법리를 검토해볼 수 있습니다.',
        takeaway:
          '혼인 중 형성 + 명의와 무관한 기여 + 실질적 분할 결합 시 공적·사적연금 재산분할 검토 영역 — 가입·납입 자료 확보 후 분할연금 청구와 재산분할 협의를 변호인과 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '국민연금도 이혼할 때 나눌 수 있나요?',
        answer:
          '<strong>혼인기간 5년 이상 등 요건을 충족하면 국민연금법상 분할연금 청구를 검토할 수 있는 영역입니다.</strong> 별도 청구 절차가 필요합니다.',
      },
      {
        question: '공무원연금·사학연금도 분할되나요?',
        answer:
          '<strong>공무원·사학·군인연금도 각 개별법에 따라 분할연금 청구 제도가 마련된 영역입니다.</strong> 요건·청구 시기를 함께 확인하는 것이 좋습니다.',
      },
      {
        question: '개인연금·퇴직연금은 어떻게 분할하나요?',
        answer:
          '<strong>개인연금·퇴직연금은 민법상 재산분할 대상으로 평가되는 영역입니다.</strong> 혼인 중 형성 부분의 평가액을 기준으로 분할 비율을 정합니다.',
      },
      {
        question: '분할 비율은 무조건 절반인가요?',
        answer:
          '<strong>혼인기간·소득·가사노동·육아 등 기여도를 반영해 비율을 정하는 영역입니다.</strong> 사안에 따라 절반과 다를 수 있습니다.',
      },
      {
        question: '분할연금은 언제 어떻게 청구하나요?',
        answer:
          '<strong>통상 수급권 발생 후 일정 기간 내에 국민연금공단 등에 청구하는 영역입니다.</strong> 청구 기한을 놓치지 않도록 미리 정리해두는 것이 좋습니다.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 종합 정리', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '재산분할 비율 핵심 요소', href: '/guide/divorce/property-division-ratio-key-factors' },
      { label: '특유재산 분할 제외 기준', href: '/guide/divorce/divorce-special-property-exclusion-criteria' },
      { label: '연금 분할청구 절차', href: '/guide/divorce/divorce-pension-split-procedure' },
      { label: '이혼 상담 준비', href: '/guide/divorce/divorce-consultation-prep' },
    ],
  },

  // ─── 2 divorce-stock-option-unvested-property-division-track ───
  {
    domain: 'divorce',
    slug: 'divorce-stock-option-unvested-property-division-track',
    keyword: '미가득 스톡옵션 RSU 재산분할 대상',
    questionKeyword: '배우자가 회사에서 받은 스톡옵션이 이혼 이후에야 가득되는데, 이것도 재산분할 대상이 되나요?',
    ctaKeyword: '미가득 스톡옵션 재산분할 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '미가득 스톡옵션 재산분할 — 5단계 가득·기여도 판단 트랙 | 로앤가이드',
      description:
        '혼인 중 부여됐지만 이혼 후에 가득되는 스톡옵션·RSU가 재산분할 대상인지, 어떻게 평가하는지 막막하다면 가득·기여도 5가지 판단 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배우자가 회사에서 받은 스톡옵션과 RSU가 적지 않은데, 부여는 혼인 중에 받았지만 정작 가득(vesting) 시기는 이혼 이후로 잡혀 있는 경우가 많습니다. 아직 행사할 수 없고 시세도 가변적인 권리를 \'재산\'으로 보고 나눠야 하는 건지, 만약 분할 대상이라면 어떻게 평가하는 건지 막막합니다. 회사 보안 정책상 자세한 내역을 받기도 쉽지 않아요." 민법 제839조의2·제843조는 혼인 중 공동으로 형성한 재산을 청산하도록 하고, 부부 일방의 부모 등 외부 지원이 형성·유지에 기여한 경우 이를 재산분할에 참작할 수 있도록 하는 영역입니다. 대법원 2024므13669(대법원, 2025.10.16)은 이혼 재산분할에서 부부 일방의 부모 등이 부부나 그 가족에 대해 한 경제적·비경제적 지원이 재산의 형성·유지에 기여한 경우 이를 재산분할에 참작할 수 있다는 취지를 판시한 사례입니다. 당사자라면 ① 권리 내역 확인 ② 부여·가득 시점 정리 ③ 혼인 중 기여 평가 ④ 평가 방법 검토 ⑤ 분할 방법 결정 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 미가득 스톡옵션 재산분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 내역확인·시점정리·기여평가·평가방법·분할결정 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리 내역 확인</strong> — 스톡옵션·RSU 수량·행사가격·가득 일정 확인.</li>\n<li><strong>② 부여·가득 시점 정리</strong> — 혼인 중 부여 부분과 가득 시점 정리.</li>\n<li><strong>③ 혼인 중 기여 평가</strong> — 혼인 중 노무 제공·가사·내조 기여 평가.</li>\n<li><strong>④ 평가 방법 검토</strong> — 미가득 권리의 평가 시점·평가 방법 검토.</li>\n<li><strong>⑤ 분할 방법 결정</strong> — 비율 분할·금전 정산 등 분할 방법 결정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 미가득 스톡옵션·RSU는 가득 전이라도 혼인 중 노무 제공의 대가로 부여된 부분에 한해 재산분할 대상으로 평가될 수 있는 영역입니다. 다만 가득이 이혼 이후 노무에 좌우되는 부분과의 구분, 평가 방법이 다툼이 되기 쉽습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 확보·시점 정리·기여 분석·평가·분할 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 부여 계약·가득 일정 자료 확보 (즉시)</strong> — 회사 부여 계약서·가득 스케줄 확보.</li>\n<li><strong>2단계 — 혼인기간·가득기간 대조 (1~2주)</strong> — 혼인기간 내 발생한 부분 산정.</li>\n<li><strong>3단계 — 기여도 분석</strong> — 노무·소득·가사 기여 등 평가.</li>\n<li><strong>4단계 — 평가 방법 협의·전문가 의견</strong> — 미가득 권리 평가 시점·방식 검토.</li>\n<li><strong>5단계 — 가정법원 심리·심판</strong> — 분할 대상 인정 여부와 분할 방법 결정.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">미가득 스톡옵션 재산분할 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·부여·평가 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>스톡옵션·RSU 부여 계약서</strong></li>\n<li><strong>가득(vesting) 스케줄·행사가격 자료</strong></li>\n<li><strong>회사 정관·주식보상규정 (분배 조건)</strong></li>\n<li><strong>혼인기간 내 노무 제공 자료 (재직증명·인사기록)</strong></li>\n<li><strong>주식가치 평가 자료 (시세·내부평가)</strong></li>\n<li><strong>가사·내조 기여 입증 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 미가득 스톡옵션·RSU는 가득이 이혼 이후 노무에도 좌우될 수 있어 \'혼인 중 노무 대가\' 부분과 \'이혼 후 노무\' 부분을 구분하는 것이 중요한 영역입니다. 평가 방법도 행사가 차액·블랙숄즈 평가 등 여러 방식이 있으니 전문가 의견을 참고하는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>분할 대상성</strong> — 미가득 스톡옵션·RSU가 재산분할 대상에 포함되는지.</li>\n<li><strong>혼인기간 안분</strong> — 혼인 중 노무에 대응하는 부분의 산정.</li>\n<li><strong>평가 시점</strong> — 혼인 파탄 시점·변론 종결일·가득 시점 중 어느 것을 기준으로 할지.</li>\n<li><strong>평가 방법</strong> — 행사가 차액·블랙숄즈 등 평가 방식.</li>\n<li><strong>분배 방법</strong> — 현물 분할·금전 정산·가득 후 정산 등.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>가정법원 가사조사</strong></li>\n<li><strong>관할 세무서 (관련 세무 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 혼인 중 형성·유지에 대한 기여의 재산분할 참작 영역',
        summary:
          '대법원 2024므13669(대법원, 2025.10.16 선고) 영역에서 법원은 이혼에 의한 재산분할에서 부부 일방의 부모 등이 부부나 그 가족에 대하여 한 경제적·비경제적 지원이 재산의 형성·유지에 기여한 경우 이를 재산분할에 참작할 수 있다는 취지로 판시했습니다. 미가득 스톡옵션·RSU 등 혼인 중 형성된 권리의 분할 대상성과 기여도 평가를 다투는 사안에서 이 법리를 검토해볼 수 있습니다.',
        takeaway:
          '혼인 중 형성·유지에 대한 기여 + 명의·시점 무관 실질 + 분할 참작 결합 시 미가득 스톡옵션 재산분할 검토 영역 — 부여 계약·가득 일정 자료 확보 후 변호인과 평가 방법을 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '아직 가득되지 않은 스톡옵션도 재산분할 대상인가요?',
        answer:
          '<strong>혼인 중 노무 제공의 대가로 부여된 부분에 한해 재산분할 대상으로 평가될 수 있는 영역입니다.</strong> 가득 시기와 무관하게 분할 대상성이 검토됩니다.',
      },
      {
        question: 'RSU·스톡옵션은 어떻게 평가하나요?',
        answer:
          '<strong>행사가 차액·블랙숄즈 평가 등 여러 방식을 사안에 맞게 검토하는 영역입니다.</strong> 평가 시점도 다툼이 됩니다.',
      },
      {
        question: '이혼 이후 노무 부분은 어떻게 처리하나요?',
        answer:
          '<strong>이혼 후 노무에 좌우되는 부분은 혼인 중 형성 부분과 구분해 산정하는 것을 검토할 수 있는 영역입니다.</strong> 혼인기간 안분이 중요합니다.',
      },
      {
        question: '현금으로 정산받을 수도 있나요?',
        answer:
          '<strong>현물 분할이 어려운 경우 평가액에 따른 금전 정산을 검토할 수 있는 영역입니다.</strong> 사안에 따라 가득 후 정산 방식도 가능합니다.',
      },
      {
        question: '회사가 자료 제공을 거부하면 어떻게 하나요?',
        answer:
          '<strong>가정법원의 사실조회·문서제출명령 등을 통해 자료 확보를 검토할 수 있는 영역입니다.</strong> 변호인과 함께 진행하는 것이 좋습니다.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 종합 정리', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '재산분할 비율 핵심 요소', href: '/guide/divorce/property-division-ratio-key-factors' },
      { label: '특유재산 분할 제외 기준', href: '/guide/divorce/divorce-special-property-exclusion-criteria' },
      { label: '재산분할 종합 가이드', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '이혼 상담 준비', href: '/guide/divorce/divorce-consultation-prep' },
    ],
  },

  // ─── 3 divorce-domestic-violence-protective-order-priority-track ───
  {
    domain: 'divorce',
    slug: 'divorce-domestic-violence-protective-order-priority-track',
    keyword: '가정폭력 피해자보호명령 우선 이혼 위자료',
    questionKeyword: '배우자의 가정폭력이 심한데 이혼보다 우선 안전을 확보하고 싶습니다. 피해자보호명령은 어떻게 신청하나요?',
    ctaKeyword: '가정폭력 보호명령 이혼 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '가정폭력 피해자보호명령 — 5단계 우선 안전·이혼 트랙 | 로앤가이드',
      description:
        '가정폭력으로 신변이 위협받고 있다면 가정폭력처벌법상 임시조치·피해자보호명령으로 우선 안전을 확보하고 이혼·위자료를 병행하는 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배우자의 폭력과 위협이 계속돼 매일 두려움 속에 지내고 있습니다. 이혼을 결심하긴 했지만 우선 당장 안전이 걱정이에요. 집에서 마주치는 것 자체가 무섭고, 아이들에게도 피해가 갈까 봐 두렵습니다. 이혼 절차를 밟기 전에 먼저 신변을 보호받을 수 있는 방법이 있는지, 어디로 도움을 청해야 하는지 막막한 상황입니다." 가정폭력범죄의 처벌 등에 관한 특례법은 임시조치·피해자보호명령으로 피해자 격리·접근금지·전기통신 접근금지 등을 명할 수 있도록 하는 영역입니다. 가정폭력 피해 배우자라면 이혼 청구 전에 우선 신변 안전을 확보하는 것이 검토 1순위입니다. 대법원 2023다285162(대법원, 2026.01.22)은 불법행위로 인한 손해배상청구권 행사의 객관적·합리적 기대가능성을 부정하는 사유가 있으면 단기소멸시효가 진행하지 않는다는 취지를 판시한 사례로, 폭력 등으로 권리 행사가 어려운 상황에 시효 진행이 곧바로 적용되지 않을 수 있음을 시사합니다. 피해자라면 ① 안전 확보 ② 임시조치·보호명령 신청 ③ 형사 고소 ④ 이혼·위자료 청구 ⑤ 자녀 보호 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 가정폭력 피해자 보호명령 우선 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 안전확보·보호명령·형사고소·이혼청구·자녀보호 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 안전 확보</strong> — 폭력 상황 즉시 112 신고·쉼터·여성긴급전화 1366 등 보호 경로 확인.</li>\n<li><strong>② 임시조치·피해자보호명령 신청</strong> — 가정폭력처벌법상 격리·접근금지·전기통신 접근금지 신청.</li>\n<li><strong>③ 형사 고소</strong> — 폭력 행위에 대한 형사 고소·고발 검토.</li>\n<li><strong>④ 이혼·위자료 청구</strong> — 신변 안전 확보 후 재판상 이혼·위자료 청구 병행.</li>\n<li><strong>⑤ 자녀 보호</strong> — 자녀 양육·면접교섭의 안전 조치 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가정폭력 피해 배우자는 이혼 절차에 앞서 가정폭력처벌법상 임시조치·피해자보호명령을 활용해 신변 안전을 우선 확보하는 것을 검토할 수 있는 영역입니다. 형사·민사 절차는 그 다음 단계로 병행됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 경찰·법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·임시조치·보호명령·이혼·자녀 보호 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 112 신고·여성긴급전화 1366 (즉시)</strong> — 폭력 발생 시 경찰 신고·쉼터 안내.</li>\n<li><strong>2단계 — 임시조치 신청 (사건 진행 중)</strong> — 가정폭력처벌법상 격리·접근금지 임시조치.</li>\n<li><strong>3단계 — 피해자보호명령 신청 (가정법원)</strong> — 본인이 직접 가정법원에 보호명령 신청.</li>\n<li><strong>4단계 — 형사 고소·재판상 이혼 청구 병행</strong> — 폭력에 대한 형사 절차와 이혼·위자료 청구.</li>\n<li><strong>5단계 — 자녀 양육·면접교섭 안전 조치</strong> — 친권·양육권·면접교섭 시 안전장치 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">가정폭력 보호명령 우선 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·피해·신청 갈래입니다.</strong></p>\n<ul>\n<li><strong>신분증·혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>112 신고 내역·경찰 사건사고사실확인원</strong></li>\n<li><strong>상해 진단서·진료 기록</strong></li>\n<li><strong>폭력 입증 자료 (사진·녹취·메시지)</strong></li>\n<li><strong>임시조치·피해자보호명령 신청서</strong></li>\n<li><strong>자녀 관련 자료 (출생증명·재학증명)</strong></li>\n<li><strong>쉼터·상담 기관 안내·이용 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가정폭력 피해는 신고·진단·메시지 등 객관 자료를 즉시 확보해두는 것이 신변 보호와 이혼·위자료 청구 모두에 결정적인 영역입니다. 폭력 직후 병원 진료를 받고 진단서·진료 기록을 남기는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>가정폭력 인정 범위</strong> — 신체·정서·경제·성적 폭력의 입증 범위.</li>\n<li><strong>보호명령 범위</strong> — 격리·접근금지·전기통신 접근금지 등의 범위.</li>\n<li><strong>위반 시 제재</strong> — 임시조치·보호명령 위반에 대한 처벌.</li>\n<li><strong>이혼 사유</strong> — 가정폭력의 재판상 이혼 사유 해당 여부.</li>\n<li><strong>자녀 안전</strong> — 친권·양육권·면접교섭 시 안전 조치.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>관할 가정법원 가사조사·경찰서 여성청소년계</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 권리 행사의 객관적·합리적 기대가능성 부재 시 소멸시효 부진행 영역',
        summary:
          '대법원 2023다285162(대법원, 2026.01.22 선고) 영역에서 법원은 불법행위로 인한 손해배상청구권 행사의 객관적·합리적 기대가능성을 부정하는 사유가 있는 경우 민법 제766조 제1항의 단기소멸시효가 진행하지 않는다는 취지로 판시했습니다. 가정폭력으로 권리 행사 자체가 어려운 상황에서 시효 진행 여부를 다투는 사안에서 이 법리를 검토해볼 수 있습니다.',
        takeaway:
          '권리 행사 기대가능성 부재 + 객관적·합리적 사정 + 단기시효 진행 부재 결합 시 위자료·손해배상 청구 검토 영역 — 폭력·진단·신고 자료 확보 후 보호명령 신청과 변호인 상담을 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '이혼하기 전에 안전부터 확보할 방법이 있나요?',
        answer:
          '<strong>가정폭력처벌법상 임시조치·피해자보호명령으로 격리·접근금지를 우선 신청하는 것을 검토할 수 있는 영역입니다.</strong> 신변 안전 확보가 우선입니다.',
      },
      {
        question: '피해자보호명령은 어디에 신청하나요?',
        answer:
          '<strong>가해자 주소지나 피해자 주소지 등 관할 가정법원에 직접 신청하는 영역입니다.</strong> 변호사 선임 없이 본인 신청도 가능합니다.',
      },
      {
        question: '가정폭력은 이혼 사유가 되나요?',
        answer:
          '<strong>지속·반복적인 가정폭력은 민법상 재판상 이혼 사유로 검토될 수 있는 영역입니다.</strong> 입증 자료가 중요합니다.',
      },
      {
        question: '보호명령 위반하면 처벌되나요?',
        answer:
          '<strong>임시조치·피해자보호명령 위반에는 가정폭력처벌법상 제재가 정해져 있는 영역입니다.</strong> 위반 시 즉시 신고가 가능합니다.',
      },
      {
        question: '자녀의 안전은 어떻게 보호하나요?',
        answer:
          '<strong>친권·양육권·면접교섭 시 자녀의 안전을 위한 조치를 함께 검토할 수 있는 영역입니다.</strong> 가정법원과 상담기관 도움을 받을 수 있습니다.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '이혼 위자료 산정 기준', href: '/guide/divorce/divorce-alimony-calculation-standard' },
      { label: '재판상 이혼 사유', href: '/guide/divorce/divorce-judicial-grounds' },
      { label: '이혼 위자료 가정폭력', href: '/guide/divorce/divorce-alimony-domestic-violence' },
      { label: '이혼 친권 양육권', href: '/guide/divorce/divorce-parental-rights-custody' },
      { label: '이혼 어디부터 시작', href: '/guide/divorce/decided-divorce-where-to-begin' },
    ],
  },

  // ─── 4 divorce-second-marriage-pre-marriage-asset-division-track ───
  {
    domain: 'divorce',
    slug: 'divorce-second-marriage-pre-marriage-asset-division-track',
    keyword: '재혼 부부 혼전재산 특유재산 재산분할',
    questionKeyword: '재혼이라 각자 결혼 전부터 가지고 있던 재산이 있는데, 이혼하면 이것도 나눠야 하나요?',
    ctaKeyword: '재혼 혼전재산 특유재산 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '재혼 혼전재산 분할 — 5단계 특유재산·기여도 판단 트랙 | 로앤가이드',
      description:
        '재혼 부부가 각자 결혼 전부터 가지고 있던 재산이 이혼 시 분할 대상인지, 혼인 중 기여로 어떻게 평가되는지 막막하다면 특유재산·기여도 5가지 판단 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"재혼한 지 얼마 안 됐는데 다시 이혼 이야기가 나오고 있습니다. 저도 배우자도 각자 결혼 전부터 가지고 있던 아파트·예금·차량이 있고, 결혼 후 함께 모은 재산도 일부 있습니다. 이혼할 때 혼전부터 가지고 있던 재산까지 다 나눠야 하는 건지, 혼인 중에 같이 관리하거나 보태준 것이 있으면 어떻게 평가받는지 막막합니다." 민법 제839조의2·제843조는 혼인 중 공동으로 형성한 재산을 재산분할 대상으로 하되, 부부 일방이 혼인 전부터 가진 고유재산은 특유재산으로 보아 원칙적으로 분할 대상에서 제외하는 영역입니다. 다만 다른 일방이 적극적인 협력으로 그 재산의 유지·증가에 기여한 경우 분할 대상으로 평가될 수 있습니다. 대법원 2025므10730(대법원, 2025.09.04)은 혼인생활 중 부양·협조 의무 등을 통하여 공동으로 이룩한 재산이 가정공동체의 경제적 기반이라는 점과 그에 대한 일방적 처분이 갖는 의미를 설명한 사례입니다. 당사자라면 ① 자산 분류 ② 특유재산 확인 ③ 혼인 중 기여 평가 ④ 공동재산 산정 ⑤ 분할·정산 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 재혼 혼전재산 분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자산분류·특유확인·기여평가·공동산정·분할정산 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 자산 분류</strong> — 혼인 전 보유 자산·혼인 후 취득 자산을 구분.</li>\n<li><strong>② 특유재산 확인</strong> — 혼전 보유·증여·상속받은 재산을 특유재산으로 분류.</li>\n<li><strong>③ 혼인 중 기여 평가</strong> — 상대방이 특유재산 유지·증가에 적극 기여했는지 평가.</li>\n<li><strong>④ 공동재산 산정</strong> — 혼인 중 공동으로 형성한 재산 산정.</li>\n<li><strong>⑤ 분할·정산</strong> — 공동재산 분할 + 특유재산 일부 기여분 정산 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혼인 전부터 가지고 있던 재산은 특유재산으로서 원칙적으로 분할 대상에서 제외되는 영역입니다. 다만 상대방이 혼인 중 적극적인 협력으로 그 재산의 유지·증가에 기여한 부분이 있으면 분할 대상으로 평가될 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 확보·자산 분류·기여 분석·분할 청구·심리 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 혼인 전·혼인 중 자산 자료 확보 (즉시)</strong> — 등기·금융·세무 자료 정리.</li>\n<li><strong>2단계 — 특유재산·공동재산 분류 (1~2주)</strong> — 취득 시점·자금 출처 자료 대조.</li>\n<li><strong>3단계 — 혼인 중 기여 분석</strong> — 유지·증가 기여 자료(부채 분담·관리·증축 등) 정리.</li>\n<li><strong>4단계 — 가정법원 재산분할 청구 (이혼과 병합 또는 별도)</strong> — 공동재산 분할 + 기여분 정산 청구.</li>\n<li><strong>5단계 — 심리·심판 (수개월)</strong> — 특유재산 인정 범위·기여 평가에 따른 분할 결정.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">재혼 혼전재산 분할 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·혼전·혼인중 자산 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>혼인 전 보유 자산 자료 (등기·통장·증여·상속)</strong></li>\n<li><strong>혼인 후 취득 자산 자료 (등기·계약서·통장)</strong></li>\n<li><strong>자금 출처·이체 내역 (혼전·혼인 중 구분)</strong></li>\n<li><strong>부채·대출 자료 (혼전·혼인 중)</strong></li>\n<li><strong>유지·증가 기여 자료 (수리·증축·관리)</strong></li>\n<li><strong>소득·가사 기여 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 재혼의 경우 혼전재산이 많을 수 있어 특유재산과 공동재산의 구분이 핵심인 영역입니다. 결혼 전 보유 사실과 자금 출처를 명확히 보여주는 자료를 정리해두면 특유재산성을 주장하는 데 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>특유재산성</strong> — 혼인 전 보유·증여·상속 재산의 특유재산 인정.</li>\n<li><strong>혼인 중 혼화</strong> — 특유재산과 공동재산의 혼화·치환 여부.</li>\n<li><strong>유지·증가 기여</strong> — 상대방의 적극적 기여 인정 범위.</li>\n<li><strong>공동재산 산정</strong> — 혼인 중 형성된 공동재산의 범위·평가.</li>\n<li><strong>혼인기간</strong> — 짧은 혼인기간의 분할 비율 반영.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>관할 가정법원 가사조사</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부부 공동재산의 경제적 기반성과 일방 처분의 의미 영역',
        summary:
          '대법원 2025므10730(대법원, 2025.09.04 선고) 영역에서 법원은 혼인관계로 형성하는 부부 공동생활이 부양·협조 의무 등을 통하여 공동으로 이룬 재산을 바탕으로 한 경제적 공동체이며, 배우자 쌍방의 협력으로 함께 이룩한 재산은 가정공동체 내에서 구성원의 기초적인 생존과 자율적 생활을 가능하게 하는 경제적 기반임을 설명했습니다. 재혼 부부의 혼전·공동재산 구분과 분할을 다투는 사안에서 이 법리를 검토해볼 수 있습니다.',
        takeaway:
          '특유재산 + 혼인 중 기여 + 공동재산 산정 결합 시 분할 비율 검토 영역 — 자금 출처·취득 시점 자료 확보 후 변호인과 혼화 여부를 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '결혼 전부터 가지고 있던 재산도 무조건 나눠야 하나요?',
        answer:
          '<strong>혼전 보유 재산은 특유재산으로 원칙적으로 분할 대상에서 제외되는 영역입니다.</strong> 다만 상대방의 적극적 기여가 있으면 분할 대상이 될 수 있습니다.',
      },
      {
        question: '상속·증여받은 재산도 특유재산인가요?',
        answer:
          '<strong>혼인 중 상속·증여받은 재산은 특유재산으로 평가될 수 있는 영역입니다.</strong> 자금 흐름이 공동재산과 섞이지 않았는지 살펴야 합니다.',
      },
      {
        question: '특유재산을 유지·증가시키는 데 도움을 줬으면 받을 수 있나요?',
        answer:
          '<strong>상대방의 적극적 기여로 유지·증가에 도움이 됐다면 그 부분에 한해 분할 대상이 될 수 있는 영역입니다.</strong> 기여 자료가 중요합니다.',
      },
      {
        question: '혼인기간이 짧으면 분할 비율이 줄어드나요?',
        answer:
          '<strong>혼인기간은 분할 비율 산정에 반영되는 요소 중 하나인 영역입니다.</strong> 단기간 혼인일수록 공동재산 형성·기여 평가가 신중해질 수 있습니다.',
      },
      {
        question: '혼전계약(부부재산약정)이 있으면 어떻게 되나요?',
        answer:
          '<strong>유효한 부부재산약정이 있으면 그 약정에 따라 정리되는 영역입니다.</strong> 약정 유효성과 등기 여부를 함께 확인하는 것이 좋습니다.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '특유재산 분할 제외 기준', href: '/guide/divorce/divorce-special-property-exclusion-criteria' },
      { label: '재산분할 종합 정리', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '재산분할 비율 핵심 요소', href: '/guide/divorce/property-division-ratio-key-factors' },
      { label: '재혼 이혼 절차', href: '/guide/divorce/divorce-remarriage-procedure' },
      { label: '이혼 상담 준비', href: '/guide/divorce/divorce-consultation-prep' },
    ],
  },

  // ─── 5 defamation-school-parent-teacher-criticism-public-interest-defense ───
  {
    domain: 'defamation',
    slug: 'defamation-school-parent-teacher-criticism-public-interest-defense',
    keyword: '학부모 단톡방 교사 비판 명예훼손 공익성 방어',
    questionKeyword: '학부모 단체채팅방에서 담임 선생님 운영을 비판했는데 명예훼손으로 고소당했습니다. 공익성으로 방어할 수 있나요?',
    ctaKeyword: '학부모 단톡 교사 비판 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '학부모 단톡 교사 비판 — 5단계 공익성 방어 트랙 | 로앤가이드',
      description:
        '학부모 단체채팅방에서 교사 운영을 비판한 글이 명예훼손·모욕으로 고소된 경우 공공의 이익·진실성으로 위법성조각을 다투는 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"학급 단체채팅방에서 다른 학부모들과 담임 선생님의 학급 운영 방식에 대해 우려와 비판을 나누다가 갑자기 명예훼손과 모욕으로 고소됐다는 연락을 받았습니다. 저는 학부모로서 아이들 교육 환경에 대한 의견을 나눈 것뿐이라고 생각하는데, 사실과 다르게 신고되었다면 어떻게 방어해야 할지 막막합니다. 학부모 모임의 비판도 처벌받는지, 공익성이라는 게 어디까지 인정되는지 모르겠어요." 형법 제310조는 진실한 사실로서 오로지 공공의 이익에 관한 때에는 위법성이 조각되도록, 정보통신망법 제70조는 사이버 명예훼손 처벌과 함께 공공의 이익 관련 위법성 판단을 두는 영역입니다. 대법원 2022도10369(대법원, 2025.10.30)은 범의의 단일성·계속성을 개별 범행의 방법·태양·동기·시간 간격 등으로 세밀히 판단해야 한다는 취지를 판시한 사례입니다. 혐의를 받고 있다면 ① 표현 내용 정리 ② 사실·의견 구분 ③ 진실성 입증 ④ 공익성 주장 ⑤ 위법성조각 방어 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 학부모 단톡 교사 비판 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 표현정리·사실의견·진실성·공익성·위법성조각 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 표현 내용 정리</strong> — 단톡방에 올린 내용·시점·맥락 정리.</li>\n<li><strong>② 사실·의견 구분</strong> — 사실 적시인지 순수 의견 표명인지 구분.</li>\n<li><strong>③ 진실성 입증</strong> — 적시된 사실이 진실하다고 믿을 만한 상당한 이유 입증.</li>\n<li><strong>④ 공익성 주장</strong> — 자녀 교육·학급 운영 등 공공의 이익 관련성 주장.</li>\n<li><strong>⑤ 위법성조각 방어</strong> — 형법 제310조 위법성조각 요건 주장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 학부모 단톡방의 교사 운영 비판은 공공의 이익에 관한 것일 수 있는 영역이며, 진실한 사실에 해당하고 오로지 공공의 이익에 관한 때에는 위법성이 조각된다는 형법 제310조 영역으로 방어를 검토할 수 있습니다. 다만 사실 적시·진실성·공익성 모두 자료로 뒷받침되어야 합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 경찰·검찰 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 표현 정리·사실 구분·진실성·공익성 주장·진술 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단톡방 게시 내용 확보 (즉시)</strong> — 메시지 화면·맥락·시점 정리.</li>\n<li><strong>2단계 — 사실·의견 구분 (1~2주)</strong> — 표현이 사실 적시인지 의견 표명인지 분석.</li>\n<li><strong>3단계 — 진실성 입증 자료 정리</strong> — 학급 운영·교사 발언 관련 객관 자료.</li>\n<li><strong>4단계 — 공익성 주장 정리</strong> — 자녀 교육·학급 환경 등 공공의 이익 관련성.</li>\n<li><strong>5단계 — 경찰·검찰 진술 + 변호인 대응</strong> — 위법성조각 주장 정리·서면 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">학부모 단톡 교사 비판 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·표현·진실 갈래입니다.</strong></p>\n<ul>\n<li><strong>신분증·고소·진정 통지 자료</strong></li>\n<li><strong>단톡방 메시지 화면 (시점·맥락 포함)</strong></li>\n<li><strong>참여자 범위 자료 (학부모·교사 외 포함 여부)</strong></li>\n<li><strong>학급 운영 관련 객관 자료 (안내문·공지)</strong></li>\n<li><strong>다른 학부모 의견·진술서</strong></li>\n<li><strong>자녀 학교생활 관련 자료</strong></li>\n<li><strong>변호인 의견서·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 학부모 단톡방 표현은 그 자체로 사실 적시인지 의견 표명인지가 1차 쟁점인 영역입니다. 순수한 의견 표명만으로는 명예훼손이 성립하지 않을 수 있으므로, 표현이 사실의 적시가 아니라 의견·평가임을 보여주는 문맥 자료를 함께 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 단톡방의 폐쇄성·전파가능성 평가.</li>\n<li><strong>사실 적시 vs 의견</strong> — 표현이 사실인지 의견인지 구분.</li>\n<li><strong>진실성·상당성</strong> — 사실이 진실하거나 진실로 믿을 상당한 이유.</li>\n<li><strong>공익성</strong> — 자녀 교육·학급 운영의 공공의 이익 관련성.</li>\n<li><strong>모욕 별도 평가</strong> — 모욕죄 구성요건 별도 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보분쟁조정위원회 (pidrc)</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 명예훼손 범행의 범의 단일성·계속성 판단 영역',
        summary:
          '대법원 2022도10369(대법원, 2025.10.30 선고) 영역에서 법원은 범의의 단일성과 계속성을 개별 범행의 방법·태양·동기, 각 범행 사이의 시간적 간격, 동일한 기회·관계 이용 상황 등을 세밀하게 살펴 논리·경험칙에 근거해 합리적으로 판단해야 한다는 취지로 판시했습니다. 학부모 단톡방의 반복 게시 등으로 인한 명예훼손 죄수·범의를 다투는 사안에서 이 법리를 검토해볼 수 있습니다.',
        takeaway:
          '범의 단일성·계속성 + 표현 내용·시점 + 사실·의견 구분 결합 시 학부모 단톡 비판 방어 검토 영역 — 메시지 자료 확보 후 변호인과 공익성·진실성 주장을 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '학부모 단톡방도 명예훼손이 성립할 수 있나요?',
        answer:
          '<strong>참여자가 다수이고 전파가능성이 있으면 공연성이 인정될 수 있는 영역입니다.</strong> 단톡방 규모·참여자 범위가 검토됩니다.',
      },
      {
        question: '단순한 의견 표명도 처벌되나요?',
        answer:
          '<strong>순수한 의견 표명 자체만으로는 명예훼손이 성립하지 않는 평가 영역입니다.</strong> 다만 모욕적·경멸적 인신공격은 별도로 평가될 수 있습니다.',
      },
      {
        question: '학급 운영 비판도 공공의 이익에 해당하나요?',
        answer:
          '<strong>자녀 교육·학급 운영 관련 비판은 공공의 이익 관련성이 인정될 수 있는 영역입니다.</strong> 형법 제310조의 공익성 주장 대상이 됩니다.',
      },
      {
        question: '진실이라고 믿을 만한 이유는 어떻게 입증하나요?',
        answer:
          '<strong>안내문·메시지·다른 학부모 진술 등 객관 자료로 입증을 검토하는 영역입니다.</strong> 자료 시점·맥락이 중요합니다.',
      },
      {
        question: '모욕죄도 같이 적용되면 어떻게 방어하나요?',
        answer:
          '<strong>모욕은 사실 적시 없는 경멸적 표현으로, 무례·비판 수준의 표현인지 별도로 평가되는 영역입니다.</strong> 표현 강도·문맥을 함께 정리해야 합니다.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 공익성 방어', href: '/guide/defamation/defamation-public-interest-defense' },
      { label: '단톡방 명예훼손 공연성', href: '/guide/defamation/defamation-group-chat-publicity' },
      { label: '명예훼손 사실 의견 구분', href: '/guide/defamation/defamation-fact-opinion-distinction' },
      { label: '모욕죄 처벌 기준', href: '/guide/defamation/insult-crime-punishment-standard' },
      { label: '명예훼손 고소 대응', href: '/guide/defamation/defamation-accusation-response' },
    ],
  },

  // ─── 6 defamation-youtube-comment-anonymous-malicious-victim-track ───
  {
    domain: 'defamation',
    slug: 'defamation-youtube-comment-anonymous-malicious-victim-track',
    keyword: '유튜브 댓글 익명 악플 명예훼손 정통망법',
    questionKeyword: '유튜브 댓글창에 익명 계정이 저에 대한 악의적인 허위 글을 계속 올립니다. 어떻게 대응하나요?',
    ctaKeyword: '유튜브 댓글 악플 피해 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '유튜브 익명 악플 — 5단계 정통망법 피해 대응 트랙 | 로앤가이드',
      description:
        '유튜브 댓글창의 익명 악의적 명예훼손 피해를 정보통신망법·임시조치·발신자 정보 청구로 어떻게 대응하는지 막막하다면 피해 대응 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"유튜브 영상 댓글창에 익명 계정 여러 개가 저에 대한 허위 사실과 악의적인 공격을 계속 올립니다. 가족과 지인이 보는 채널이어서 정신적 충격이 크고 일상에도 영향을 줍니다. 익명이라 누군지 알 수도 없고, 댓글을 지워달라고 요청해도 곧 다시 올라옵니다. 신고·고소를 어떻게 해야 하는지, 익명 사용자 정보를 받을 수 있는지 막막한 상황입니다." 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제70조는 사람을 비방할 목적의 사이버 명예훼손을 처벌하고, 같은 법 제44조의2는 정보통신서비스 제공자에 대한 임시조치 신청을, 형법 제307조는 사실·허위사실 적시에 의한 명예훼손을 규정하는 영역입니다. 대법원 2022다242649(대법원, 2025.06.26)은 민법상 명예훼손의 의미와 사실 적시·의견 표명 구분 기준을 정리한 사례입니다. 피해자라면 ① 게시물·URL 보존 ② 임시조치 신청 ③ 형사 고소 ④ 발신자 정보 청구 ⑤ 손해배상 청구 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 유튜브 익명 악플 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·임시조치·형사고소·발신자정보·손해배상 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 게시물·URL 보존</strong> — 댓글 화면·URL·게시일시·계정 정보 보존.</li>\n<li><strong>② 임시조치 신청</strong> — 정보통신서비스 제공자에 정통망법 임시조치(차단·삭제) 신청.</li>\n<li><strong>③ 형사 고소</strong> — 정통망법 제70조 비방 목적 사이버 명예훼손·형법 제307조 고소.</li>\n<li><strong>④ 발신자 정보 청구</strong> — 수사기관·법원을 통한 발신자 정보 확인.</li>\n<li><strong>⑤ 손해배상 청구</strong> — 민사 손해배상·삭제 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 익명 악의적 명예훼손 피해는 게시물 보존 → 임시조치(차단·삭제) → 형사 고소 → 발신자 정보 확보 → 손해배상의 트랙으로 정리하는 것을 검토할 수 있는 영역입니다. 자료 보존이 모든 절차의 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 사업자·경찰·법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·임시조치·고소·정보 청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 댓글 캡처·URL·시점 보존 (즉시)</strong> — 추후 삭제 대비 메타데이터 함께 보존.</li>\n<li><strong>2단계 — 정보통신서비스 제공자에 임시조치 신청 (수일)</strong> — 차단·삭제 요청.</li>\n<li><strong>3단계 — 경찰 사이버범죄 신고시스템 고소 (ecrm.police.go.kr)</strong>.</li>\n<li><strong>4단계 — 수사기관·법원 통한 발신자 정보 확인 (수개월)</strong>.</li>\n<li><strong>5단계 — 민사 손해배상·삭제 청구 (시효 내)</strong> — 위자료·재산상 손해 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">유튜브 익명 악플 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·신고·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>신분증·피해자 본인 확인 자료</strong></li>\n<li><strong>댓글 캡처·URL·게시일시 자료</strong></li>\n<li><strong>익명 계정 정보 (닉네임·프로필)</strong></li>\n<li><strong>임시조치 신청서·플랫폼 회신</strong></li>\n<li><strong>경찰 사이버 신고서·고소장</strong></li>\n<li><strong>정신과 진료·심리상담 기록 (위자료 자료)</strong></li>\n<li><strong>다른 게시물·반복 행위 자료 (양형·비방 목적)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 댓글은 작성자에 의해 언제든 삭제될 수 있으므로 신고 전에 URL·시점·계정을 포함한 캡처를 반드시 남겨두는 것이 좋은 영역입니다. 명예훼손이 사실 적시인지 의견인지의 구분도 핵심이므로, 표현 자체와 함께 맥락을 정리해두는 것이 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 댓글창 공개 범위와 전파가능성.</li>\n<li><strong>사실 적시·의견</strong> — 표현이 사실 적시인지 의견 표명인지.</li>\n<li><strong>비방 목적</strong> — 정통망법 제70조 비방 목적 인정 여부.</li>\n<li><strong>발신자 특정</strong> — 익명 계정 발신자 정보 확보.</li>\n<li><strong>위자료 산정</strong> — 반복성·전파 범위 등에 따른 위자료 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보분쟁조정위원회 (pidrc)</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사이버 표현의 사실 적시·의견 구분과 명예훼손 평가 영역',
        summary:
          '대법원 2022다242649(대법원, 2025.06.26 선고) 영역에서 법원은 민법상 불법행위가 되는 명예훼손의 의미와, 어떠한 표현이 사실의 적시인지 의견의 진술인지를 어휘의 통상적 의미·전후 문맥·사회평균인의 지식·경험 등을 종합해 진위 결정의 가능 여부에 따라 판단해야 한다는 취지를 정리했습니다. 유튜브 댓글의 명예훼손 성립 여부를 다투는 사안에서 이 법리를 검토해볼 수 있습니다.',
        takeaway:
          '사실 적시·의견 구분 + 사이버 공간 전파 + 비방 목적 결합 시 정통망법 사이버 명예훼손 검토 영역 — 댓글·URL 보존 후 임시조치 신청과 경찰 고소를 변호인과 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '익명 댓글도 처벌받을 수 있나요?',
        answer:
          '<strong>익명이라도 정보통신망법·형법상 명예훼손 책임에서 자유로운 것은 아닌 평가 영역입니다.</strong> 수사 과정에서 발신자 정보 확인을 검토할 수 있습니다.',
      },
      {
        question: '댓글을 지워달라고만 해도 되나요?',
        answer:
          '<strong>정보통신서비스 제공자에 정통망법상 임시조치(차단·삭제)를 신청하는 것을 검토할 수 있는 영역입니다.</strong> 보존 후 신청하는 것이 안전합니다.',
      },
      {
        question: '발신자 정보는 어떻게 받나요?',
        answer:
          '<strong>수사기관·법원을 통한 절차로 발신자 정보 확인을 검토하는 영역입니다.</strong> 개인이 직접 받는 것이 아니라 절차를 거쳐야 합니다.',
      },
      {
        question: '진실이라고 해도 처벌되나요?',
        answer:
          '<strong>사실 적시 명예훼손도 비방 목적이 있으면 정통망법상 처벌 대상이 되는 영역입니다.</strong> 공공의 이익 등 위법성조각 사유는 별도 검토됩니다.',
      },
      {
        question: '손해배상으로 얼마나 받을 수 있나요?',
        answer:
          '<strong>위자료가 수십만 원~수백만 원 수준으로 검토되는 사례가 많은 영역입니다.</strong> 사안의 반복성·전파 범위 등에 따라 달라집니다.',
      },
    ],
    cta: { text: '삭제·합의·방어 포인트, AI로 먼저 점검하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '사이버 명예훼손 신고', href: '/guide/defamation/defamation-cyber-report-procedure' },
      { label: '댓글 악플 명예훼손', href: '/guide/defamation/defamation-comment-malicious-victim' },
      { label: '명예훼손 임시조치 신청', href: '/guide/defamation/defamation-temporary-measure-application' },
      { label: '익명 발신자 정보 청구', href: '/guide/defamation/defamation-anonymous-sender-info-request' },
      { label: '명예훼손 위자료 산정', href: '/guide/defamation/defamation-emotional-damages-calculation' },
    ],
  },

  // ─── 7 defamation-real-estate-broker-malicious-review-victim-track ───
  {
    domain: 'defamation',
    slug: 'defamation-real-estate-broker-malicious-review-victim-track',
    keyword: '부동산 중개사 허위 악의 리뷰 명예훼손 피해',
    questionKeyword: '부동산 중개사인데 포털과 플랫폼에 사실과 다른 악의적인 후기·리뷰가 올라와 영업에 큰 피해를 봅니다.',
    ctaKeyword: '중개사 악의 리뷰 피해 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '중개사 악의 리뷰 — 5단계 정통망법 삭제·손해배상 트랙 | 로앤가이드',
      description:
        '부동산 중개사가 포털·플랫폼의 허위·악의적 후기·리뷰로 영업상 명예가 훼손된 경우 정통망법·임시조치·삭제·손해배상을 청구하는 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"부동산 중개사로 일하는데 최근 포털 지도와 부동산 플랫폼에 저희 사무소에 대한 사실과 다른 악의적인 후기·리뷰가 올라왔습니다. 거래하지 않은 사람이 올린 듯한 비방성 글이고, 같은 내용이 여러 채널로 퍼져 신규 고객이 끊기고 있습니다. 영업상 큰 피해인데 어디에 어떻게 신고하고 삭제·손해배상까지 진행할 수 있는지 막막한 상황입니다." 정보통신망법 제70조는 사이버 명예훼손, 같은 법 제44조의2는 정보통신서비스 제공자에 대한 임시조치 신청을, 민법 제750조는 불법행위 손해배상을 규정하는 영역입니다. 중개사의 영업상 명예도 보호 대상이 됩니다. 대법원 2025도4697(대법원, 2025.05.01)은 어떤 표현이 허위사실 공표인지 판단할 때 일반인이 표현을 접하는 통상의 방법을 전제로 전체적인 취지·객관적 내용·문구의 연결방법 등을 종합적으로 고려해야 한다는 취지를 정리한 사례입니다. 피해자라면 ① 리뷰 보존 ② 임시조치 신청 ③ 형사 고소 ④ 발신자·정보 청구 ⑤ 손해배상·삭제 청구 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중개사 악의 리뷰 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·임시조치·고소·정보청구·손해배상 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 리뷰 보존</strong> — 포털·플랫폼별 리뷰 캡처·URL·게시일시 보존.</li>\n<li><strong>② 임시조치 신청</strong> — 정보통신서비스 제공자에 정통망법 임시조치 신청.</li>\n<li><strong>③ 형사 고소</strong> — 정통망법 제70조·형법 제307조 명예훼손 고소.</li>\n<li><strong>④ 발신자·정보 청구</strong> — 수사기관·법원을 통한 발신자 정보 확인.</li>\n<li><strong>⑤ 손해배상·삭제 청구</strong> — 민사 손해배상·게시물 삭제·게재금지 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 영업상 명예도 명예훼손 보호 대상이 되는 영역입니다. 표현이 사실 적시인지 의견인지, 허위사실인지, 비방 목적이 있는지에 따라 정통망법·형법 적용과 위법성조각 판단이 달라집니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 사업자·경찰·법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·임시조치·고소·정보청구·민사 청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 리뷰 캡처·URL·시점 보존 (즉시)</strong> — 메타데이터 포함 보존.</li>\n<li><strong>2단계 — 포털·플랫폼 임시조치 신청 (수일)</strong> — 차단·삭제 요청.</li>\n<li><strong>3단계 — 경찰 사이버범죄 신고 고소</strong>.</li>\n<li><strong>4단계 — 수사기관·법원을 통한 발신자 정보 확인 (수개월)</strong>.</li>\n<li><strong>5단계 — 민사 손해배상·삭제·게재금지 청구 (시효 내)</strong>.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">중개사 악의 리뷰 피해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 보존·신고·영업 갈래입니다.</strong></p>\n<ul>\n<li><strong>중개사 자격·사업자 등록증</strong></li>\n<li><strong>리뷰·후기 캡처·URL·게시일시</strong></li>\n<li><strong>허위 내용 입증 자료 (계약·거래·CCTV)</strong></li>\n<li><strong>임시조치 신청서·플랫폼 회신</strong></li>\n<li><strong>매출·고객 감소 자료 (재산상 손해 입증)</strong></li>\n<li><strong>고소장·진술서</strong></li>\n<li><strong>변호인 의견서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 영업상 명예훼손은 매출·고객 감소 등 재산상 손해까지 함께 청구할 수 있는 영역입니다. 리뷰 게시 전후 매출 변화 자료를 함께 정리해두면 손해배상 청구 시 도움이 됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>허위사실 여부</strong> — 리뷰가 객관 사실과 일치하는지.</li>\n<li><strong>사실 적시·의견</strong> — 별점·평가가 의견 표명인지 사실 적시인지.</li>\n<li><strong>비방 목적</strong> — 정통망법 제70조 비방 목적 인정 여부.</li>\n<li><strong>영업 명예</strong> — 영업상 명예 침해의 범위와 손해 산정.</li>\n<li><strong>발신자 특정</strong> — 익명 작성자 정보 확보.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보분쟁조정위원회 (pidrc)</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 표현의 허위사실 공표 여부 판단 기준 영역',
        summary:
          '대법원 2025도4697(대법원, 2025.05.01 선고) 영역에서 법원은 어떤 표현이 허위사실을 공표한 것인지는 일반인이 표현을 접하는 통상의 방법을 전제로 표현의 전체적 취지·객관적 내용·사용된 어휘의 통상적 의미·문구의 연결방법 등을 종합적으로 고려해 표현이 주는 전체적 인상을 기준으로 판단해야 한다는 취지로 정리했습니다. 중개사를 향한 후기·리뷰의 허위·악의성 여부를 다투는 사안에서 이 법리를 검토해볼 수 있습니다.',
        takeaway:
          '허위사실 공표 판단 + 표현 전체 인상 + 영업상 명예 결합 시 정통망법 사이버 명예훼손·민사 손해배상 검토 영역 — 리뷰 보존·매출 자료 확보 후 변호인과 청구 경로를 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '단순한 별점 평가도 명예훼손이 되나요?',
        answer:
          '<strong>순수 의견·평가 자체만으로는 명예훼손이 성립하지 않을 수 있는 영역입니다.</strong> 다만 의견 형식이라도 허위 사실이 포함되면 평가가 달라집니다.',
      },
      {
        question: '플랫폼에 삭제 요청하면 바로 지워지나요?',
        answer:
          '<strong>정통망법상 임시조치 신청을 통해 차단·삭제를 검토할 수 있는 영역입니다.</strong> 신청 후 회신 절차가 있습니다.',
      },
      {
        question: '익명 작성자라도 손해배상 청구가 가능한가요?',
        answer:
          '<strong>수사기관·법원을 통한 발신자 정보 확보 후 손해배상 청구를 검토할 수 있는 영역입니다.</strong> 정보 확보 절차가 필요합니다.',
      },
      {
        question: '매출이 줄어든 손해도 청구할 수 있나요?',
        answer:
          '<strong>영업상 명예 침해로 발생한 재산상 손해까지 청구를 검토할 수 있는 영역입니다.</strong> 매출 감소 자료가 중요합니다.',
      },
      {
        question: '얼마나 받을 수 있나요?',
        answer:
          '<strong>위자료가 수십만 원~수백만 원 수준으로 검토되는 사례가 있고, 재산상 손해는 별도로 산정되는 영역입니다.</strong> 사안에 따라 폭이 큽니다.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '영업 명예훼손 손해배상', href: '/guide/defamation/defamation-business-reputation-damages' },
      { label: '리뷰 별점 허위 신고', href: '/guide/defamation/defamation-review-rating-false-report' },
      { label: '명예훼손 임시조치 신청', href: '/guide/defamation/defamation-temporary-measure-application' },
      { label: '사이버 명예훼손 신고', href: '/guide/defamation/defamation-cyber-report-procedure' },
      { label: '명예훼손 위자료 산정', href: '/guide/defamation/defamation-emotional-damages-calculation' },
    ],
  },

  // ─── 8 defamation-public-figure-political-criticism-defense ───
  {
    domain: 'defamation',
    slug: 'defamation-public-figure-political-criticism-defense',
    keyword: '정치인 공인 비판 명예훼손 공익성 표현의 자유 방어',
    questionKeyword: '정치인을 비판하는 글을 SNS에 올렸는데 명예훼손·모욕으로 고소됐습니다. 공인 비판도 처벌되나요?',
    ctaKeyword: '공인 비판 명예훼손 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '공인 비판 명예훼손 — 5단계 공익성·표현의 자유 방어 트랙 | 로앤가이드',
      description:
        '정치인·공인을 비판한 글·발언이 명예훼손·모욕으로 고소된 경우 공공의 이익·표현의 자유로 위법성조각을 다투는 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"평소 관심 있던 정치 사안에 대해 SNS에 한 정치인의 행보를 비판하는 글을 올렸는데, 명예훼손과 모욕으로 고소됐다는 통보를 받았습니다. 사실과 다르게 신고되었다면 어떻게 대응해야 할지 막막합니다. 공인에 대한 비판은 표현의 자유로 보호되는 영역이라고 들었는데, 실제로 어디까지 인정되는지, 어떤 자료로 방어하는지 모르겠어요." 형법 제310조는 진실한 사실로서 오로지 공공의 이익에 관한 때에는 위법성이 조각되도록 하고, 표현의 자유가 보호되는 정도는 표현의 주체·대상에 따라 달라질 수 있다는 평가 영역입니다. 대법원 2024도14555(대법원, 2025.05.29)은 형법 제310조의 위법성조각사유 요건 중 \'진실한 사실\'과 \'오로지 공공의 이익에 관한 때\'의 의미를 정리하고, 행위자의 주요 동기·목적이 공공의 이익이면 부수적으로 사익적 목적이 내포돼도 형법 제310조가 적용될 수 있다는 취지를 정리한 사례입니다. 혐의를 받고 있다면 ① 표현 내용 정리 ② 사실·의견 구분 ③ 진실성·상당성 입증 ④ 공익성 주장 ⑤ 위법성조각 방어 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 공인 비판 명예훼손 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 표현정리·사실의견·진실성·공익성·위법성조각 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 표현 내용 정리</strong> — SNS 게시물 내용·시점·맥락 정리.</li>\n<li><strong>② 사실·의견 구분</strong> — 사실 적시인지 의견·평론인지 구분.</li>\n<li><strong>③ 진실성·상당성 입증</strong> — 사실이 진실하다거나 진실로 믿을 만한 상당한 이유 입증.</li>\n<li><strong>④ 공익성 주장</strong> — 공인의 공적 활동·정책 비판의 공공의 이익 관련성.</li>\n<li><strong>⑤ 위법성조각 방어</strong> — 형법 제310조·표현의 자유 보호 영역 주장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공인의 공적 활동에 대한 비판은 표현의 자유가 두텁게 보호되는 영역이며, 공공의 이익에 관한 것일 때 위법성이 조각된다는 형법 제310조 영역에서 방어를 검토할 수 있습니다. 다만 사실 적시·진실성·공익성 모두 자료로 뒷받침되어야 합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 경찰·검찰 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 표현 정리·구분·진실성·공익성·진술 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — SNS 게시물·맥락 보존 (즉시)</strong> — 게시 시점·반응·문맥 정리.</li>\n<li><strong>2단계 — 사실·의견 구분 (1~2주)</strong> — 표현이 사실 적시인지 의견·평론인지 분석.</li>\n<li><strong>3단계 — 진실성·상당성 입증 자료 정리</strong> — 뉴스·공식 자료·통계 등 객관 자료.</li>\n<li><strong>4단계 — 공익성 주장 정리</strong> — 공인의 공적 활동·정책 관련성 정리.</li>\n<li><strong>5단계 — 경찰·검찰 진술 + 변호인 대응</strong> — 위법성조각 주장 서면 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">공인 비판 명예훼손 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·표현·근거 갈래입니다.</strong></p>\n<ul>\n<li><strong>신분증·고소 통지 자료</strong></li>\n<li><strong>SNS 게시물·댓글 캡처</strong></li>\n<li><strong>비판 근거 객관 자료 (뉴스·공식 발표·통계)</strong></li>\n<li><strong>공인의 공적 활동 관련 자료</strong></li>\n<li><strong>표현 시점·맥락 자료</strong></li>\n<li><strong>다른 비판·논평 사례 자료</strong></li>\n<li><strong>변호인 의견서·진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공인 비판은 표현이 사실 적시인지 의견·평론인지의 구분이 결정적인 영역입니다. 의견·평론은 모욕적 인신공격이 아닌 한 명예훼손이 성립하지 않는 평가가 가능하므로, 비판이 의견·평가 형식임을 보여주는 문맥 자료를 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공인 비판의 보호 범위</strong> — 표현 주체·대상에 따른 표현의 자유 보호 정도.</li>\n<li><strong>사실 적시·의견·평론</strong> — 비판이 사실 적시인지 의견인지.</li>\n<li><strong>진실성·상당성</strong> — 사실이 진실하거나 진실로 믿을 상당한 이유.</li>\n<li><strong>공익성</strong> — 공공의 이익 관련성 인정 범위.</li>\n<li><strong>모욕·인신공격 별도 평가</strong> — 모욕죄 구성요건 별도 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보분쟁조정위원회 (pidrc)</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 형법 제310조 \'진실·공공의 이익\' 요건과 부수적 사익 영역',
        summary:
          '대법원 2024도14555(대법원, 2025.05.29 선고) 영역에서 법원은 형법 제310조의 위법성조각사유 요건 중 \'진실한 사실\'과 \'오로지 공공의 이익에 관한 때\'의 의미를 정리하고, 행위자의 주요 동기·목적이 공공의 이익이면 부수적으로 다른 사익적 목적·동기가 내포되어 있어도 형법 제310조가 적용될 수 있다는 취지를 정리했습니다. 공인 비판의 위법성조각 여부를 다투는 사안에서 이 법리를 검토해볼 수 있습니다.',
        takeaway:
          '진실성·공익성 요건 + 표현의 자유 보호 영역 + 부수적 사익 무관 결합 시 형법 제310조 방어 검토 영역 — 게시물·근거 자료 확보 후 변호인과 위법성조각 주장을 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '공인을 비판하는 글도 명예훼손이 되나요?',
        answer:
          '<strong>공인 비판은 표현의 자유가 두텁게 보호되는 평가 영역입니다.</strong> 다만 허위사실이거나 모욕적 인신공격은 별도로 평가됩니다.',
      },
      {
        question: '의견·평론도 처벌되나요?',
        answer:
          '<strong>순수한 의견·평론은 그 자체로 명예훼손이 성립하지 않는 평가 영역입니다.</strong> 표현이 사실 적시인지 의견인지 구분이 핵심입니다.',
      },
      {
        question: '근거가 다소 부족해도 방어할 수 있나요?',
        answer:
          '<strong>진실로 믿을 만한 상당한 이유가 있으면 위법성조각이 검토되는 영역입니다.</strong> 객관 자료에 기반한 신뢰가 중요합니다.',
      },
      {
        question: '개인적인 감정이 섞여도 공익성이 인정되나요?',
        answer:
          '<strong>주요 동기가 공공의 이익이면 부수적으로 사익적 목적이 내포되어 있어도 형법 제310조가 적용될 수 있는 영역입니다.</strong> 주된 동기가 무엇인지가 중요합니다.',
      },
      {
        question: '모욕으로도 같이 고소됐는데 어떻게 방어하나요?',
        answer:
          '<strong>모욕죄는 인신공격·경멸적 표현인지 별도로 평가되는 영역입니다.</strong> 무례·비판 수준 표현은 모욕에 해당하지 않을 수 있습니다.',
      },
    ],
    cta: { text: '삭제·합의·방어 포인트, AI로 먼저 점검하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 공익성 방어', href: '/guide/defamation/defamation-public-interest-defense' },
      { label: '공인 비판 표현의 자유', href: '/guide/defamation/defamation-public-figure-free-speech' },
      { label: '명예훼손 사실 의견 구분', href: '/guide/defamation/defamation-fact-opinion-distinction' },
      { label: '모욕죄 처벌 기준', href: '/guide/defamation/insult-crime-punishment-standard' },
      { label: '명예훼손 고소 대응', href: '/guide/defamation/defamation-accusation-response' },
    ],
  },

  // ─── 9 inheritance-renunciation-after-3months-late-debt-discovery-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-renunciation-after-3months-late-debt-discovery-track',
    keyword: '상속 3개월 후 채무 발견 특별한정승인 절차',
    questionKeyword: '상속이 시작된 지 3개월이 한참 지난 뒤에야 부모님의 큰 빚을 알게 됐습니다. 한정승인이 가능한가요?',
    ctaKeyword: '특별한정승인 절차 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '특별한정승인 — 5단계 늦은 채무 발견 절차 트랙 | 로앤가이드',
      description:
        '상속개시 3개월 후 피상속인 채무를 뒤늦게 알게 된 상속인이 민법 제1019조 제3항 특별한정승인 요건·기간·신청을 어떻게 검토하는지 막막하다면 5가지 절차 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"부모님께서 돌아가신 지 한참이 지나 평범하게 일상을 살고 있던 중에, 갑자기 채권자들로부터 큰 금액의 채무 변제 요구서가 도착했습니다. 가족도 몰랐던 부모님의 빚이 적지 않은 금액이고, 단순승인 기간(3개월)이 이미 지난 상태라 어떻게 해야 할지 막막합니다. 이대로 빚을 모두 떠안아야 하는 건지, 늦었지만 한정승인이라는 게 가능한지 모르겠어요." 민법 제1019조 제1항은 상속개시 있음을 안 날부터 3개월 내에 단순승인·한정승인·포기를 정하도록 하고, 같은 조 제3항은 상속인이 중대한 과실 없이 그 기간 내에 상속채무가 상속재산을 초과함을 알지 못하다가 그 사실을 안 날부터 3개월 내에 한정승인을 할 수 있도록 하는 영역입니다(특별한정승인). 대법원 2022다220014(대법원, 2025.05.29)은 포괄적 유증의 의미와 효력, 유류분 부족액 산정 방법 등 상속 채무·재산 관계를 정리한 사례로, 상속 채무 처리의 기본 구조를 시사합니다. 당사자라면 ① 상속 관계 확인 ② 채무 인지 시점 정리 ③ 중대 과실 평가 ④ 특별한정승인 신청 ⑤ 청산·정산 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 늦은 채무 발견 특별한정승인 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 관계확인·시점정리·과실평가·신청·청산 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상속 관계 확인</strong> — 상속인·법정상속분·상속재산 목록 확인.</li>\n<li><strong>② 채무 인지 시점 정리</strong> — 피상속인 채무를 처음 안 시점(통지·고지서 등) 정리.</li>\n<li><strong>③ 중대 과실 평가</strong> — 인지 시점 전에 알 수 없었는지 중대 과실 여부 평가.</li>\n<li><strong>④ 특별한정승인 신청</strong> — 안 날부터 3개월 내 가정법원에 특별한정승인 신청.</li>\n<li><strong>⑤ 청산·정산</strong> — 상속재산 한도 내 채무 변제·청산 절차 진행.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상속채무 초과 사실을 \'중대한 과실 없이\' 늦게 알게 됐고, 안 날부터 3개월 내라면 민법 제1019조 제3항 특별한정승인을 검토할 수 있는 영역입니다. \'안 날\'의 입증과 중대 과실 부재 입증이 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 관계 확인·시점 정리·신청·심리·청산 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 상속 관계·재산 자료 확보 (즉시)</strong> — 사망진단서·가족관계증명·재산 자료.</li>\n<li><strong>2단계 — 채무 인지 시점·경위 정리 (수일)</strong> — 통지·고지서·연락 기록 정리.</li>\n<li><strong>3단계 — 가정법원 특별한정승인 신청 (안 날부터 3개월 내)</strong>.</li>\n<li><strong>4단계 — 가정법원 심리·심판 (수개월)</strong> — 중대 과실 부재·기간 준수 심사.</li>\n<li><strong>5단계 — 신문 공고·채권자 통지·청산 (수개월)</strong> — 상속재산 한도 내 변제·청산.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">특별한정승인 절차 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·상속·채무 갈래입니다.</strong></p>\n<ul>\n<li><strong>피상속인 기본증명서·사망진단서</strong></li>\n<li><strong>가족관계증명서·상속인 확인 자료</strong></li>\n<li><strong>상속재산 목록 (부동산·예금·차량 등)</strong></li>\n<li><strong>채무 통지·고지서·내용증명 (인지 시점 입증)</strong></li>\n<li><strong>채권자·채무액 자료 (대출·신용·세금)</strong></li>\n<li><strong>중대 과실 부재 입증 자료 (조사 노력·정보 접근 불가 사정)</strong></li>\n<li><strong>특별한정승인 심판청구서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 특별한정승인은 \'중대한 과실 없이 채무 초과 사실을 몰랐다\'는 점과 \'안 날부터 3개월 내\'라는 점을 입증해야 하는 영역입니다. 채권자 통지·고지서·내용증명 등 인지 시점을 명확히 보여주는 자료를 잘 보관해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>채무 초과 인지 시점</strong> — 채무 초과 사실을 안 시점.</li>\n<li><strong>중대 과실 부재</strong> — 인지 전 조사를 다하지 못한 점에 중대 과실이 있는지.</li>\n<li><strong>3개월 기간</strong> — 안 날부터 3개월 내 신청 여부.</li>\n<li><strong>상속재산 범위</strong> — 청산 대상 상속재산의 범위·평가.</li>\n<li><strong>채권자 우선순위</strong> — 청산 시 채권자 우선순위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>가정법원 가사단독·민원실</strong></li>\n<li><strong>관할 세무서 (상속세 관련)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 포괄적 유증의 효력·유류분 부족액 산정 영역',
        summary:
          '대법원 2022다220014(대법원, 2025.05.29 선고) 영역에서 법원은 포괄적 유증을 받은 사람은 상속인과 동일한 권리·의무가 있다는 민법 제1078조의 의미와, 유류분 부족액을 유류분액에서 특별수익액·순상속분액을 공제해 산정하는 방법, 피상속인의 채무가 있는 경우 유류분액 산정에서 채무 전액을 공제해야 한다는 취지를 정리했습니다. 상속채무 처리·유류분 관계를 함께 다투는 사안에서 이 법리를 검토해볼 수 있습니다.',
        takeaway:
          '상속채무 초과 + 중대 과실 부재 + 안 날부터 3개월 결합 시 특별한정승인 검토 영역 — 채권자 통지·인지 시점 자료 확보 후 변호인과 신청을 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '상속개시 3개월이 지나도 한정승인이 가능한가요?',
        answer:
          '<strong>중대한 과실 없이 채무 초과 사실을 늦게 안 경우 \'안 날부터 3개월 내\' 특별한정승인을 검토할 수 있는 영역입니다.</strong> 인지 시점 입증이 핵심입니다.',
      },
      {
        question: '\'중대한 과실 없이\'는 어떻게 입증하나요?',
        answer:
          '<strong>피상속인 재산 조사·금융 조회 등 합리적 노력을 했음에도 알 수 없었던 사정으로 입증을 검토하는 영역입니다.</strong> 자료가 중요합니다.',
      },
      {
        question: '특별한정승인을 하면 빚을 안 갚아도 되나요?',
        answer:
          '<strong>상속재산 한도 내에서만 채무를 변제하면 되는 평가 영역입니다.</strong> 상속재산을 넘는 채무는 책임지지 않습니다.',
      },
      {
        question: '신청 후 무엇을 더 해야 하나요?',
        answer:
          '<strong>한정승인 후 신문 공고·채권자 통지·청산 절차를 거쳐 상속재산을 변제하는 영역입니다.</strong> 절차를 빠뜨리면 책임이 늘어날 수 있습니다.',
      },
      {
        question: '다른 상속인은 어떻게 되나요?',
        answer:
          '<strong>각 상속인이 개별적으로 단순승인·한정승인·포기를 선택하는 영역입니다.</strong> 다른 상속인의 선택과 함께 정리하는 것이 좋습니다.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '특별한정승인 요건', href: '/guide/inheritance/inheritance-special-limited-acceptance-requirements' },
      { label: '한정승인 신청 절차', href: '/guide/inheritance/inheritance-limited-acceptance-procedure' },
      { label: '상속 채무 초과 대응', href: '/guide/inheritance/inheritance-debt-excess-response' },
      { label: '한정승인 청산 절차', href: '/guide/inheritance/inheritance-limited-acceptance-liquidation' },
      { label: '상속 분쟁 어디부터', href: '/guide/inheritance/inheritance-dispute-where-to-start' },
    ],
  },

  // ─── 10 traffic-accident-school-zone-protected-area-aggravated-accused-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-school-zone-protected-area-aggravated-accused-track',
    keyword: '어린이보호구역 사고 가중처벌 민식이법 방어',
    questionKeyword: '스쿨존에서 어린이가 다치는 사고가 났습니다. 민식이법으로 가중처벌이라는데 형사·행정·보험은 어떻게 대응하나요?',
    ctaKeyword: '스쿨존 사고 가중처벌 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '스쿨존 사고 가중처벌 — 5단계 형사·행정·보험 방어 트랙 | 로앤가이드',
      description:
        '어린이보호구역(스쿨존) 사고로 특정범죄가중법(민식이법) 가중처벌이 문제된 경우 형사·면허 행정·보험 처리를 어떻게 결합 방어하는지 막막하다면 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"어린이보호구역(스쿨존)을 지나다 갑자기 길로 뛰어든 어린이와 사고가 났습니다. 다행히 큰 부상은 아닌 듯하지만 어린이가 다쳤고, 경찰에서는 \'민식이법(특정범죄가중법) 적용 검토\' 이야기를 했습니다. 사실과 다르게 신고되었다면, 또는 과실 정도가 다툼이 되는 상황이라면 형사 처벌과 면허 행정처분, 보험 처리까지 어떻게 대응해야 할지 막막한 상황입니다." 도로교통법 제12조는 어린이보호구역 지정·운영을, 특정범죄 가중처벌 등에 관한 법률 제5조의13은 어린이보호구역 내 어린이 치사상에 대한 가중처벌을 정하는 영역입니다. 대법원 2022다287284(대법원, 2026.01.29)은 자동차보험에서 보험자대위와 자기부담금·과실비율 산정 방법을 정리한 사례로, 사고 후 보험·과실 처리의 기본 구조를 시사합니다. 혐의를 받고 있다면 ① 사고 사실관계 정리 ② 안전운전 의무 평가 ③ 형사 대응 ④ 면허 행정처분 대응 ⑤ 보험·민사 대응 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 스쿨존 사고 가중처벌 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실관계·의무평가·형사·행정·보험 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사고 사실관계 정리</strong> — 사고 시점·장소·속도·신호·진행 상황 정리.</li>\n<li><strong>② 안전운전 의무 평가</strong> — 어린이보호구역 내 안전운전 의무 위반 여부 평가.</li>\n<li><strong>③ 형사 대응</strong> — 특정범죄가중법(민식이법) 적용 검토·합의·변호인 대응.</li>\n<li><strong>④ 면허 행정처분 대응</strong> — 정지·취소 처분 시 행정심판·소송 검토.</li>\n<li><strong>⑤ 보험·민사 대응</strong> — 종합보험·과실비율·피해자 보상 처리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 어린이보호구역 내 사고는 형사(가중처벌) + 면허 행정처분 + 보험·민사가 결합되는 방어 영역입니다. 사고 사실관계·신호·속도 등 객관 자료 확보가 모든 트랙의 출발점이며, 단정형 \'유죄·처벌\' 평가는 형사 절차와 자료에 따라 판단됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 경찰·행정·보험 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실관계·의무평가·형사·행정·보험 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 블랙박스·CCTV·현장 자료 확보 (즉시)</strong> — 속도·신호·시야·갑작스러운 진입 등 정리.</li>\n<li><strong>2단계 — 안전운전 의무 위반 평가 (수일~수주)</strong> — 제한속도·전방주시·보호구역 운전 의무 평가.</li>\n<li><strong>3단계 — 형사 조사·합의 검토</strong> — 특정범죄가중법 적용 검토와 피해자 합의.</li>\n<li><strong>4단계 — 면허 행정처분 대응 (90일 등 기한 내 행정심판)</strong>.</li>\n<li><strong>5단계 — 보험사·피해자 보상 처리</strong> — 종합보험·과실비율·치료비·후유증 처리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">스쿨존 사고 가중처벌 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고·운전·합의 갈래입니다.</strong></p>\n<ul>\n<li><strong>운전면허증·자동차등록증·보험증권</strong></li>\n<li><strong>블랙박스 영상·CCTV·현장 사진</strong></li>\n<li><strong>경찰 교통사고 사실 확인원</strong></li>\n<li><strong>피해자 진단서·진료 기록</strong></li>\n<li><strong>합의서·합의금 자료 (피해자와 합의 시)</strong></li>\n<li><strong>면허 행정처분 통지서 (정지·취소)</strong></li>\n<li><strong>탄원서·반성문·재발 방지 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 어린이보호구역 사고는 사실관계·신호·속도·시야 같은 객관 자료가 형사·행정·보험 처리의 갈림길이 되는 영역입니다. 사고 직후 블랙박스 영상과 현장 사진을 확보·보관해두는 것이 모든 트랙에서 결정적입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>특정범죄가중법 적용</strong> — 어린이 치사상·과실·인과관계의 평가.</li>\n<li><strong>안전운전 의무</strong> — 제한속도·전방주시·보호구역 안전운전 의무 평가.</li>\n<li><strong>과실비율</strong> — 어린이 갑작스러운 진입 등 사정의 반영.</li>\n<li><strong>합의·양형</strong> — 피해자 합의가 양형·기소 단계에 미치는 영향.</li>\n<li><strong>면허 처분</strong> — 정지·취소 처분과 행정심판 90일 기한.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>손해보험협회 02-3702-8500</strong></li>\n<li><strong>도로교통공단 1577-0990</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 자동차보험 보험자대위·자기부담금·과실비율 산정 영역',
        summary:
          '대법원 2022다287284(대법원, 2026.01.29 선고) 영역에서 법원은 상법 제682조 제1항의 보험자대위 규정 취지를 자기부담금 약정이 있는 자기차량손해보험의 보험자대위 범위와 피보험자의 손해배상청구권 범위 확정에 고려해야 한다는 취지 및 보험약관 등 정함이 없으면 고객에게 유리하게 해석해야 한다는 취지로 판시했습니다. 스쿨존 사고에서 형사 대응과 함께 보험·민사 정산을 다투는 사안에서 이 법리를 검토해볼 수 있습니다.',
        takeaway:
          '안전운전 의무 평가 + 형사·행정·보험 결합 + 자기부담금·과실비율 결합 시 스쿨존 사고 방어 검토 영역 — 블랙박스·현장 자료 확보 후 변호인과 형사·행정·보험을 함께 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '민식이법으로 무조건 가중처벌되나요?',
        answer:
          '<strong>특정범죄가중법 적용 여부는 어린이 치사상·과실·인과관계 등 사실관계에 따라 평가되는 영역입니다.</strong> 일률적으로 단정되는 것이 아닙니다.',
      },
      {
        question: '합의를 하면 형사 처벌에 도움이 되나요?',
        answer:
          '<strong>피해자와의 합의는 양형·기소 단계에 영향을 줄 수 있는 평가 영역입니다.</strong> 다만 합의만으로 처벌이 면제된다고 단정할 수는 없습니다.',
      },
      {
        question: '면허는 무조건 취소되나요?',
        answer:
          '<strong>면허 정지·취소 여부는 행정처분 기준에 따라 평가되는 영역입니다.</strong> 처분에 대해 행정심판·소송으로 다툴 수 있습니다.',
      },
      {
        question: '보험은 어떻게 처리되나요?',
        answer:
          '<strong>종합보험·과실비율·자기부담금 등 약관에 따라 처리되는 영역입니다.</strong> 약관 해석에서 고객에게 유리하게 해석되는 부분이 있는지 확인하는 것이 좋습니다.',
      },
      {
        question: '어린이가 갑자기 뛰어들었어도 책임을 다 져야 하나요?',
        answer:
          '<strong>어린이 진입 사정은 과실비율 산정에 반영될 수 있는 영역입니다.</strong> 다만 운전자에게 보호구역 안전운전 의무가 가중되어 있다는 점이 함께 고려됩니다.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '스쿨존 사고 형사 대응', href: '/guide/traffic-accident/traffic-accident-school-zone-criminal-response' },
      { label: '민식이법 가중처벌 기준', href: '/guide/traffic-accident/traffic-accident-minsiks-law-aggravated-standard' },
      { label: '교통사고 면허 행정처분', href: '/guide/traffic-accident/traffic-accident-license-administrative-action' },
      { label: '교통사고 합의 전 체크', href: '/guide/traffic-accident/traffic-accident-settlement-checklist' },
      { label: '교통사고 손해배상 계산', href: '/guide/traffic-accident/traffic-accident-compensation-calculation-guide' },
    ],
  },
];
