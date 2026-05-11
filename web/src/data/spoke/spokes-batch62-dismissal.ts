import { SpokePage } from '../spoke-pages';

// batch62 dismissal — 5개 (2026-05-12)
//
// 고유 존재 이유:
// 1. 출산휴가 후 복귀 압박 — 모성보호 가중 + 부당해고 트랙 (5/11 maternity-return-position과 별도, 권고사직 압박 각도).
// 2. 경고장 누적 후 해고 — 경고장 형식 요건·재량남용 다툼 트랙.
// 3. 회생절차 중 정리해고 — 회생법 + 근기법 24조 결합 트랙.
// 4. 무단결근 1회 즉시 해고 — 단발성 결근에 대한 사회통념상 상당성 다툼 트랙.
// 5. 정년 후 촉탁계약 재계약 거부 — 갱신기대권 + 합리적 거부 사유 다툼 트랙.

export const spokesBatch62Dismissal: SpokePage[] = [
  // ─── 1. dismissal-maternity-return-pressure-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-maternity-return-pressure-track',
    keyword: '출산휴가 복귀 권고사직',
    questionKeyword: '출산휴가 끝나고 복귀했더니 권고사직 종용받고 있어요. 어디부터 챙겨야 하나요?',
    ctaKeyword: '출산휴가 복귀 압박 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '출산휴가 복귀 후 권고사직 — 5단계 모성보호 대응 | 로앤가이드',
      description:
        '출산휴가·육아휴직 복귀 직후 권고사직 압박을 받았다면 모성보호 가중·구제신청 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"출산휴가 90일 + 육아휴직 6개월 끝나고 복귀했더니 \'네 자리는 다른 사람이 채웠다\'며 권고사직서를 들이밀어요. 거절하니 \'그러면 외근직으로 보내겠다\'며 압박합니다. 첫째 키우는 워킹맘이라 막막한 상황." 남녀고용평등법 제19조는 육아휴직 종료 후 \'휴직 전과 같은 업무 또는 같은 수준의 임금을 지급하는 직무\'에 복귀시키도록 정한 영역. 위반 시 500만원 이하 벌금 + 노동위 구제·차별시정 트랙이 열리는 사례. 모성보호 영역 대응 흐름은 ① 권고사직서 거부 + 녹취 ② 인사발령장·메일 보존 ③ 노동청 진정 (남녀고용평등법 위반) ④ 노동위 부당해고·차별시정 ⑤ 민사 손해배상으로 정리됩니다.</p>',
    sections: [
      {
        title: 'Q. 출산휴가 복귀 압박 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 거부·증거·진정·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권고사직서 거부</strong> — 절대 서명 금지. 녹취·메일로 거부 의사 표시.</li>\n<li><strong>② 인사발령·복귀 조건 보존</strong> — 휴직 전 직무 vs 복귀 후 직무 비교.</li>\n<li><strong>③ 노동청 진정</strong> — 남녀고용평등법 제19조 위반.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 부당해고·차별시정 병행.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 권고사직 서명은 자발적 퇴직으로 평가되어 구제 길이 좁아질 여지. 절대 서명하지 않는 것이 첫 번째 방어선입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 거부·진정·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권고사직 거부 + 녹취 (즉시)</strong> — 회의 녹취·이메일 답변으로 거부 명시.</li>\n<li><strong>2단계 — 노동청 진정 (1주 내)</strong> — 남녀고용평등법 위반·모성보호 위반.</li>\n<li><strong>3단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 부당해고 + 차별시정.</li>\n<li><strong>4단계 — 심문회의·판정 (2~3개월)</strong> — 원직 복귀·임금 상당액.</li>\n<li><strong>5단계 — 민사 손해배상 (3년 시효)</strong> — 정신적 위자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">출산휴가 복귀 압박 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 휴직·복귀·압박 갈래입니다.</strong></p>\n<ul>\n<li><strong>출산휴가·육아휴직 신청서·승인서</strong></li>\n<li><strong>휴직 전 근로계약서·인사기록카드</strong></li>\n<li><strong>복귀 후 인사발령장·업무분장표</strong></li>\n<li><strong>권고사직 종용 녹취·메일</strong></li>\n<li><strong>급여명세서 (휴직 전 vs 복귀 후)</strong></li>\n<li><strong>회사 취업규칙·복직 규정</strong></li>\n<li><strong>동료 진술서 (선택)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \"같은 업무 또는 같은 수준 직무\" 기준은 직무 등급·급여·근무지·업무 강도를 종합 평가하는 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>\"자발적 퇴직\" 둔갑</strong> — 권고사직서 서명 시 자발 퇴직 평가 위험.</li>\n<li><strong>복귀 직무 동일성</strong> — 외근·지방 발령은 사실상 사퇴 압박으로 평가될 여지.</li>\n<li><strong>차별시정 vs 구제신청</strong> — 병행 가능. 차별시정은 노동위 차별시정위 별도.</li>\n<li><strong>육아휴직 종료 후 30일</strong> — 휴직 종료 후 30일 이내 해고는 더 엄격한 정당성 요구.</li>\n<li><strong>일실수입 산정</strong> — 복귀 후 임금 + 정신적 위자료.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>여성가족부 1366 (여성긴급전화)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 육아휴직 후 직무 변경',
        summary:
          '서울행정법원 2024구합52434 영역 등에서 법원은 육아휴직 종료 후 휴직 전과 \'같은 업무 또는 같은 수준\'의 직무 복귀가 보장되지 않고 사실상 강등·격하된 발령이 이루어진 경우 남녀고용평등법 제19조 위반과 함께 부당한 인사권 행사로 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '복귀 직무 동일성·권고사직 거부 녹취가 핵심. 서명 전에 노동위 상담부터 받는 것이 안전합니다.',
      },
    ],
    faq: [
      {
        question: '권고사직서에 서명하면 무효 주장 못 하나요?',
        answer:
          '<strong>주장은 가능하나 입증 부담이 커집니다.</strong> 강박·기망 입증 필요. 서명 전 상담 권장.',
      },
      {
        question: '복귀 후 외근직 발령이 부당한가요?',
        answer:
          '<strong>같은 수준 직무가 아니면 위법 소지가 있습니다.</strong> 직무 등급·근무지·강도 종합 판단.',
      },
      {
        question: '노동위 + 노동청 둘 다 가능한가요?',
        answer:
          '<strong>병행 가능합니다.</strong> 노동청은 형사·시정, 노동위는 원직복귀.',
      },
      {
        question: '육아휴직 종료 후 언제까지 해고가 어렵나요?',
        answer:
          '<strong>휴직 종료 후 30일 이내는 더 엄격한 정당성 요구 영역입니다.</strong> 그 후도 차별시정 가능.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '권고사직 거부 대응', href: '/guide/dismissal/dismissal-resignation-pressure-how-to-respond' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '모성보호 위반 신고', href: '/guide/dismissal/dismissal-maternity-return-position-eliminated' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
    ],
  },

  // ─── 2. dismissal-warning-stacking-multiple-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-warning-stacking-multiple-track',
    keyword: '경고장 누적 해고',
    questionKeyword: '경고장 3장 받고 해고 통보됐어요. 경고장만으로 해고가 가능한가요?',
    ctaKeyword: '경고장 누적 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '경고장 누적 후 해고 — 5단계 형식·실질 다툼 | 로앤가이드',
      description:
        '경고장 3회·5회 누적 후 해고됐다면 경고장 형식 요건·재량남용 5가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"근무 2년차에 \'근태 불량\' \'업무 미흡\' \'태도\' 사유로 경고장 3장을 받았어요. 회사는 \'취업규칙상 3회 경고 = 해고\'라며 통보. 그런데 경고장 내용이 \'OO년 OO월 OO일 지각\'처럼 막연하고, 소명 기회도 못 받았습니다." 취업규칙에 \'경고장 N회 = 해고\' 조항이 있어도 자동 해고가 되는 것은 아니라는 영역. 대법원은 ① 경고 사유의 객관성·구체성 ② 소명 기회 부여 ③ 재량 행사의 적정성 ④ 사회통념상 상당성을 종합 심사하는 흐름. 대응 트랙은 ① 경고장 형식·내용 검토 ② 소명 기회 부재 입증 ③ 재량남용 주장 ④ 노동위 구제 ⑤ 민사 손해배상 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 경고장 누적 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 형식·소명·재량·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경고 사유의 구체성</strong> — 막연한 \"근태 불량\"은 무효 소지.</li>\n<li><strong>② 소명 기회 부여 여부</strong> — 절차적 정의의 핵심.</li>\n<li><strong>③ 재량남용 — 동종 사례 처분</strong> — 다른 직원은 가벼운 처분받고 본인만 해고면 차별.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong></li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 취업규칙 \"경고 3회 = 해고\" 조항도 사회통념상 상당성 심사를 거치는 영역. 형식 위반·소명 부재·재량남용 중 1가지라도 입증되면 부당해고 평가 여지.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경고장 검토·노동위·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경고장·관련 메일 보존 (즉시)</strong> — 사유·일자·서명자 확인.</li>\n<li><strong>2단계 — 동종 사례 조사 (1주)</strong> — 같은 사유로 다른 직원 처분 확인.</li>\n<li><strong>3단계 — 노동위 구제신청 (3개월 내)</strong> — 부당해고·재량남용.</li>\n<li><strong>4단계 — 심문회의 (2~3개월)</strong> — 원직 복귀·임금 상당액.</li>\n<li><strong>5단계 — 행정소송·민사 (필요시)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">경고장 누적 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 경고·해고·동종 갈래입니다.</strong></p>\n<ul>\n<li><strong>경고장 원본 (전체)</strong></li>\n<li><strong>해고 통보서·인사위 회의록</strong></li>\n<li><strong>취업규칙·징계 규정</strong></li>\n<li><strong>경고 사유 관련 메일·근태기록</strong></li>\n<li><strong>동료 동종 사례 자료</strong></li>\n<li><strong>소명 기회 부여 거부 입증</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 경고장에 구체적 일시·장소·행위가 없으면 \"불특정 사유\"로 무효 주장 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>경고 사유 구체성</strong> — 막연 사유는 무효 여지.</li>\n<li><strong>소명 기회</strong> — 인사위 출석·서면 답변권 부재 시 절차 하자.</li>\n<li><strong>재량남용·차별</strong> — 같은 사유 다른 직원과 비교.</li>\n<li><strong>경고 시점·중복 평가</strong> — 같은 사유로 두 번 처분 금지 (이중 처분).</li>\n<li><strong>해고 회피 노력</strong> — 경고 외 시정 기회 부여 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 경고 누적 해고 사회통념',
        summary:
          '대법원 2023두41864 영역에서 법원은 취업규칙에 정한 징계 사유가 형식적으로 충족되어도 사용자의 징계권 행사가 사회통념상 현저히 타당성을 잃었다고 평가될 수 있는 경우에는 그 처분이 재량권을 일탈·남용한 것으로 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '경고 3회 → 자동 해고는 아니라는 점이 핵심. 소명 기회·재량남용·동종 사례 비교가 다툼의 축.',
      },
    ],
    faq: [
      {
        question: '경고장에 서명했는데도 다툴 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 서명은 수령 확인일 뿐 동의가 아니라는 영역.',
      },
      {
        question: '취업규칙에 명시된 사유여도 부당해고가 되나요?',
        answer:
          '<strong>형식 충족도 사회통념상 상당성 심사를 거칩니다.</strong>',
      },
      {
        question: '소명 기회가 없었다면 절차 하자인가요?',
        answer:
          '<strong>네, 절차적 정의 위반으로 무효 사유가 될 여지가 있습니다.</strong>',
      },
      {
        question: '동종 사례에서 다른 직원은 경징계받았어요',
        answer:
          '<strong>차별·재량남용 강력한 사유입니다.</strong> 인사기록·동료 진술 확보 권장.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '징계해고 절차', href: '/guide/dismissal/dismissal-disciplinary-procedure' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '경고장 대응', href: '/guide/dismissal/dismissal-warning-letter-response' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
    ],
  },

  // ─── 3. dismissal-rehabilitation-redundancy-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-rehabilitation-redundancy-track',
    keyword: '회생절차 정리해고',
    questionKeyword: '회사가 회생 신청한 후 갑자기 정리해고 통보를 받았어요. 회생 중에도 부당해고 다툼이 가능한가요?',
    ctaKeyword: '회생 중 정리해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '회생절차 중 정리해고 — 5단계 회생법·근기법 결합 | 로앤가이드',
      description:
        '회사 회생절차 개시 후 정리해고를 통보받았다면 회생계획·긴박한 경영상 필요 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"회사가 법원에 회생을 신청한 직후 \'경영 정상화\' 명목으로 부서별 30% 정리해고. 회생계획안에 인력 감축이 포함되어 있다고 합니다. 본인은 7년차이지만 해고 대상이 됐어요. 회생절차 중에도 부당해고 구제가 가능한지 막막한 상황." 채무자회생법은 회생절차 개시 시 \'법원의 허가 없이 임금채권 등 일정 채권에 대해 변제할 수 없는 영역\'을 두지만, 부당해고 다툼 자체는 회생절차와 별개로 노동위 구제가 가능한 영역. 다만 회생계획에 따른 정리해고는 근기법 제24조 \'긴박한 경영상 필요\'의 한 사례로 평가될 여지가 있어, ① 회생계획 인력감축 근거 ② 해고 회피 노력 ③ 대상자 선정 기준 합리성 ④ 노조·근로자 대표 협의 ⑤ 노동위 구제까지의 5단계 검토가 핵심입니다.</p>',
    sections: [
      {
        title: 'Q. 회생 중 정리해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경영필요·회피노력·선정기준·협의·구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 긴박한 경영상 필요</strong> — 회생계획 인력감축 근거.</li>\n<li><strong>② 해고 회피 노력</strong> — 무급휴직·전직·임금삭감 시도 여부.</li>\n<li><strong>③ 대상자 선정 기준</strong> — 합리적·공정한 기준.</li>\n<li><strong>④ 근로자 대표 협의 (50일 전)</strong> — 협의 부재 시 절차 하자.</li>\n<li><strong>⑤ 노동위 구제신청 (3개월)</strong> — 회생절차와 무관히 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 회생 = 자동 정리해고 정당화 아님. 근기법 24조 4요건 모두 충족 + 회생계획 인력감축 근거가 입증되어야 정당성 평가.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 검토·구제·임금채권 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 회생계획안·인력감축 근거 확보 (즉시)</strong> — 법원 제출 자료.</li>\n<li><strong>2단계 — 근로자대표 협의록 확보 (1주)</strong> — 협의 절차 검증.</li>\n<li><strong>3단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 부당해고·절차 하자.</li>\n<li><strong>4단계 — 임금채권 신고 (회생법원)</strong> — 우선변제 대상 신고.</li>\n<li><strong>5단계 — 체당금·간이대지급금 신청</strong> — 도산 시 국가 대지급.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">회생 중 정리해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 회생·해고·임금 갈래입니다.</strong></p>\n<ul>\n<li><strong>회생계획안·인력감축 부분 발췌</strong></li>\n<li><strong>해고 통보서·대상자 명단</strong></li>\n<li><strong>대상자 선정 기준표</strong></li>\n<li><strong>근로자대표 협의록·통지 메일</strong></li>\n<li><strong>해고 회피 노력 자료 (무급휴직 공지·임금삭감 동의 등)</strong></li>\n<li><strong>본인 근로계약서·급여명세서</strong></li>\n<li><strong>회생법원 사건번호·관리인 연락처</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>회생계획 ≠ 자동 정당화</strong> — 근기법 4요건 별도 심사.</li>\n<li><strong>대상자 선정 기준의 합리성</strong> — 호봉·나이만으론 부족.</li>\n<li><strong>50일 전 통지·협의 절차</strong> — 회생 중에도 적용.</li>\n<li><strong>체당금 vs 회생채권</strong> — 임금·퇴직금 3개월·3년치는 우선.</li>\n<li><strong>관리인 권한 범위</strong> — 해고 권한 명시 필요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 경영상 해고 4요건',
        summary:
          '대법원 2019두59349 영역에서 법원은 근기법 제24조 경영상 해고의 4요건(긴박한 경영상 필요·해고 회피 노력·합리적 대상자 선정·근로자대표 협의)이 모두 충족되어야 정당성을 인정받을 수 있고, 회생절차가 진행 중이라는 사정만으로 위 요건을 갈음하지 못한다고 본 사례 흐름이 있습니다.',
        takeaway: '회생 신청 = 정리해고 자동 정당화 아님. 4요건 모두 입증 부담은 사용자에게 있음.',
      },
    ],
    faq: [
      {
        question: '회생 중에도 노동위 구제가 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 부당해고 다툼은 회생절차와 별개.',
      },
      {
        question: '임금·퇴직금은 회생채권이 되나요?',
        answer:
          '<strong>최종 3개월 임금·최종 3년 퇴직금은 우선변제 영역입니다.</strong>',
      },
      {
        question: '체당금 신청 가능한 시점은?',
        answer:
          '<strong>회생개시·파산선고 시 간이대지급금 신청 가능.</strong> 최대 1,000만원 한도.',
      },
      {
        question: '대상자 선정에 호봉만 반영하면 부당한가요?',
        answer:
          '<strong>합리성 부족 평가 여지가 큽니다.</strong> 직무·기여·생계·근속 종합.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '경영상 해고 요건', href: '/guide/dismissal/dismissal-redundancy-requirements' },
      { label: '임금채권 우선변제', href: '/guide/wage/wage-priority-rehabilitation' },
      { label: '간이대지급금', href: '/guide/wage/wage-substitute-payment-simple' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
    ],
  },

  // ─── 4. dismissal-single-absence-immediate-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-single-absence-immediate-track',
    keyword: '무단결근 1회 즉시 해고',
    questionKeyword: '하루 무단결근했다고 바로 해고 통보받았어요. 한 번 결근으로 해고가 가능한가요?',
    ctaKeyword: '무단결근 즉시 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '무단결근 1회 즉시 해고 — 5단계 사회통념 다툼 | 로앤가이드',
      description:
        '단발성 무단결근으로 즉시 해고됐다면 사회통념상 상당성·이전 경고·사정 참작 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"새벽에 어머니가 응급실 가셔서 연락 없이 결근. 다음날 사정 설명했지만 \'무단결근 = 해고\' 취업규칙 들이밀며 해고 통보. 본인은 5년차 근속, 그간 무지각 무결근이었어요. 한 번 결근으로 해고가 가능한가요?" 대법원은 단발성 결근만으로 해고가 정당화되기 어렵다는 흐름. ① 사회통념상 상당성 ② 결근의 동기·사정 ③ 이전 비위·경고 이력 ④ 회사의 손해 정도 ⑤ 근로자의 근속·평소 행태를 종합 평가하는 영역. 대응 트랙은 ① 결근 사유 입증 ② 근속·평소 행태 보존 ③ 이전 무징계 입증 ④ 노동위 구제 ⑤ 민사 손해배상 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 단발성 무단결근 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사회통념·사정·이력·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사회통념상 상당성</strong> — 1회 결근 = 해고는 과도 평가 여지.</li>\n<li><strong>② 결근 사정 (가족 응급·본인 질병)</strong> — 진단서·119 기록.</li>\n<li><strong>③ 이전 비위·경고 이력</strong> — 무징계 5년차는 강력 사유.</li>\n<li><strong>④ 회사 손해 정도</strong> — 1일 결근의 실질 손해.</li>\n<li><strong>⑤ 노동위 구제신청 (3개월)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \"무단결근 시 해고\" 취업규칙도 사회통념상 상당성 심사 대상. 사정·근속·평소 행태 종합 평가가 다툼의 축.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사유 입증·노동위·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 결근 사정 입증자료 (즉시)</strong> — 진단서·119 기록·가족 진술.</li>\n<li><strong>2단계 — 근속·평소 행태 보존 (1주)</strong> — 인사평가·근태기록.</li>\n<li><strong>3단계 — 노동위 구제신청 (3개월 내)</strong> — 부당해고.</li>\n<li><strong>4단계 — 심문회의 (2~3개월)</strong> — 원직 복귀·임금 상당액.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">단발성 결근 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 결근·근속·평가 갈래입니다.</strong></p>\n<ul>\n<li><strong>결근 사정 입증 (응급실 기록·119·진단서)</strong></li>\n<li><strong>회사에 알린 메시지·통화기록</strong></li>\n<li><strong>근속 증명·인사평가</strong></li>\n<li><strong>이전 무징계 입증</strong></li>\n<li><strong>해고 통보서·인사위 회의록</strong></li>\n<li><strong>취업규칙 징계 규정</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 결근 직후라도 카카오톡·문자로 사정 알린 기록이 있으면 무단결근이 아닌 \"긴급 부득이\" 평가 여지.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>\"무단\" vs \"부득이\"</strong> — 사후라도 사정 통지 시 무단 아님.</li>\n<li><strong>이전 경고 부재</strong> — 단계적 징계 원칙 위반.</li>\n<li><strong>회사 손해</strong> — 1일 결근으로 사업 마비 등 입증 부담.</li>\n<li><strong>해고 회피</strong> — 경고·시말서 등 경징계 시도 부재.</li>\n<li><strong>가족 돌봄 사유</strong> — 가족돌봄휴가 적용 여부도 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 단발성 결근 해고',
        summary:
          '대법원 2023두46074 영역 등에서 법원은 단발적인 무단결근만으로 해고에 처하는 것은 사회통념상 현저히 타당성을 잃은 처분으로 평가될 여지가 있고, 결근에 이른 사정·근속기간·평소 근무태도·회사의 손해 정도를 종합 고려해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '1회 결근 = 자동 해고는 사회통념상 상당성 위반 여지. 사정 입증·근속 보존이 핵심.',
      },
    ],
    faq: [
      {
        question: '취업규칙에 \"무단결근 시 해고\"라고 명시돼 있어요',
        answer:
          '<strong>형식 충족도 사회통념상 상당성 심사를 거칩니다.</strong>',
      },
      {
        question: '가족 응급실 사정도 무단결근인가요?',
        answer:
          '<strong>가족돌봄휴가·부득이 사유로 평가될 여지가 있습니다.</strong>',
      },
      {
        question: '5년 무징계 근속이 영향을 주나요?',
        answer:
          '<strong>강력한 양형 사정입니다.</strong> 해고 회피 의무도 가중.',
      },
      {
        question: '결근 후 카톡 알린 기록 있어요',
        answer:
          '<strong>\"무단\"이 아닌 \"부득이\" 평가 여지가 큽니다.</strong>',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '징계해고 절차', href: '/guide/dismissal/dismissal-disciplinary-procedure' },
      { label: '가족돌봄휴가', href: '/guide/wage/wage-family-care-leave' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
    ],
  },

  // ─── 5. dismissal-retirement-extension-renewal-refusal-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-retirement-extension-renewal-refusal-track',
    keyword: '정년 후 촉탁계약 갱신 거부',
    questionKeyword: '정년 후 촉탁계약 1년 일했는데 재계약 거절당했어요. 갱신기대권 주장할 수 있나요?',
    ctaKeyword: '촉탁계약 갱신 거부 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '정년 후 촉탁계약 재계약 거부 — 5단계 갱신기대권 다툼 | 로앤가이드',
      description:
        '정년 이후 촉탁계약 1~2년 일한 뒤 갱신을 거부당했다면 갱신기대권·합리적 거부 사유 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"정년 60세 도달 후 회사와 1년 단위 촉탁계약을 맺어 일했어요. 작년에 재계약 1회 했는데, 올해는 \'사업 환경 변화\'라는 막연한 사유로 거부 통보. 같은 부서 동료(64세)는 재계약 받았습니다. 갱신기대권을 다툴 수 있는지 막막한 상황." 대법원은 정년 후 촉탁계약이라도 ① 계약·취업규칙·관행에 의한 갱신 신뢰 ② 동종 갱신 사례 ③ 거부 사유의 합리성을 갖춰야 \'합리적 갱신기대권\'이 인정될 여지가 있다는 흐름. 대응 트랙은 ① 계약·갱신 이력 보존 ② 동종 갱신 사례 ③ 거부 사유 반박 ④ 노동위 구제 ⑤ 민사 손해배상 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 촉탁 재계약 거부 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 갱신신뢰·동종·합리성·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 갱신 신뢰 형성</strong> — 계약·취업규칙·관행.</li>\n<li><strong>② 동종 갱신 사례</strong> — 같은 부서·연령·직무.</li>\n<li><strong>③ 거부 사유 합리성</strong> — \"사업 환경 변화\"는 막연 사유.</li>\n<li><strong>④ 노동위 구제신청</strong> — 갱신거절 = 해고와 동등.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 갱신기대권 인정 시 거절은 해고와 동일하게 \"정당한 이유\" 입증 부담. 동종 갱신 사례 + 합리적 사유 부재가 다툼의 축.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 검토·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·갱신 이력 보존 (즉시)</strong></li>\n<li><strong>2단계 — 동종 사례 조사 (1~2주)</strong> — 동료 진술·인사기록.</li>\n<li><strong>3단계 — 노동위 구제신청 (계약 만료 후 3개월)</strong></li>\n<li><strong>4단계 — 심문회의 (2~3개월)</strong> — 갱신 의제 + 임금 상당액.</li>\n<li><strong>5단계 — 민사 손해배상 (필요시)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">촉탁 갱신 거부 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·갱신·동종 갈래입니다.</strong></p>\n<ul>\n<li><strong>최초·갱신 계약서 전부</strong></li>\n<li><strong>취업규칙·인사규정 촉탁 관련 조항</strong></li>\n<li><strong>갱신 거부 통보서</strong></li>\n<li><strong>동종 갱신자 인사기록 (가능 범위)</strong></li>\n<li><strong>동료 진술서·연락처</strong></li>\n<li><strong>인사평가·근무 평가</strong></li>\n<li><strong>본인 직무 성과·실적</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>갱신 신뢰의 형성</strong> — 1회 갱신만으론 부족·복합 사정 종합.</li>\n<li><strong>관행</strong> — 같은 부서 다수 촉탁자 갱신 이력.</li>\n<li><strong>거부 사유의 구체성</strong> — \"사업 환경\" 막연 사유는 합리성 부족 여지.</li>\n<li><strong>연령 차별</strong> — 65세 이상 우대·차별 검토.</li>\n<li><strong>임금 상당액 산정</strong> — 갱신 시 예상 임금 기준.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 촉탁계약 갱신기대권',
        summary:
          '대법원 2021두33470 영역에서 법원은 정년 후 촉탁계약이라도 계약 내용·취업규칙·갱신 관행 등에 비추어 합리적인 갱신 기대권이 형성되었다고 평가될 수 있는 경우, 사용자가 합리적인 이유 없이 갱신을 거절한 것은 부당해고와 같이 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '갱신 1~2회 + 동종 갱신 다수 사례 = 갱신기대권 인정 가능성. 막연한 사유는 부당 평가 여지.',
      },
    ],
    faq: [
      {
        question: '1년 단위 계약인데도 갱신기대권 주장 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 형식보다 신뢰 형성·관행이 핵심.',
      },
      {
        question: '\"사업 환경 변화\"가 합리적 사유인가요?',
        answer:
          '<strong>구체적 매출·인력 감축 입증 없으면 막연 사유로 평가될 여지가 있습니다.</strong>',
      },
      {
        question: '동료는 갱신됐는데 본인만 거부됐어요',
        answer:
          '<strong>차별 강력한 사유입니다.</strong> 연령·기타 사유 검토.',
      },
      {
        question: '갱신기대권 인정되면 어떻게 되나요?',
        answer:
          '<strong>갱신된 것으로 의제 + 임금 상당액 지급 명령 영역.</strong>',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '기간제 갱신기대권', href: '/guide/dismissal/dismissal-fixed-term-renewal-expectation' },
      { label: '정년 연장 제도', href: '/guide/retirement/retirement-age-extension' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
    ],
  },
];
