import { SpokePage } from '../spoke-pages';

// batch68 dismissal — 5개 (2026-05-18)
//
// 고유 존재 이유:
// 1. 출산휴가 복직 일주일 만에 권고사직 압박 — 모성보호·복직 직후 단축 시기 + 권고사직 형식 결합 (기존 maternity-return-fired / maternity-leave-return-immediate-fired 와 분기: 즉시 해고가 아닌 \'복직 후 짧은 적응기 → 권고사직 압박\' 변형 트랙).
// 2. 회사 합병·영업양도 시 인수회사의 단독 해고 — 영업양도 자체를 사유로 한 해고 + 인수회사의 선별 (기존 company-merger-position-loss / cooperation-merger-redundancy 와 분기: 직무 폐지가 아닌 영업양도 시 \'본인만 승계 배제\' 패턴).
// 3. 영업소·지점 통폐합으로 1명만 표적 해고 — 일부 사업 폐지 + 표적 선정 결합 (기존 workplace-closure-layoff / collective-redundancy-50days 와 분기: 전 인원 정리가 아닌 \'통폐합 명목 + 1명 표적\' 트랙).
// 4. 잦은 병가 누적 → 근무능력 부족 평가 해고 — 병가 사유 자체 + 능력 부족 평가 결합 (기존 during-sick-leave / sick-leave-return-fired 와 분기: 단일 병가가 아닌 \'반복 병가 → 능력 부족 평가\' 변형).
// 5. 노조 가입 직후 부서이동 + 평가 하락 → 해고 — 부당노동행위 + 평가 조작 결합 (기존 union-activity-retaliation / union-membership-activity-cause 와 분기: 직접 해고가 아닌 \'평가 조작 → 능력 부족 해고\' 우회 트랙).

export const spokesBatch68Dismissal: SpokePage[] = [
  // ─── 1. dismissal-maternity-return-one-week-resign-pressure ───
  {
    domain: 'dismissal',
    slug: 'dismissal-maternity-return-one-week-resign-pressure',
    keyword: '출산휴가 복직 일주일 만에 권고사직',
    questionKeyword: '출산휴가 1년 마치고 복직했는데 일주일 만에 \'업무 적응 어렵겠다\'며 권고사직 압박을 받았어요. 자녀 양육 배려 의무는 어떻게 되나요?',
    ctaKeyword: '출산휴가 복직 일주일 권고사직 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '출산휴가 복직 일주일 권고사직 — 5단계 모성·배려 다툼 | 로앤가이드',
      description:
        '출산휴가 복직 일주일 만에 권고사직 압박을 받았다면 모성보호·일·가정 양립 배려의무 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"1년 출산휴가를 마치고 복귀한 첫 주에 \'업무 흐름을 따라오기 어려워 보인다\'며 인사팀이 권고사직을 권유했습니다. 복직 전 메일로 같은 직무 복귀 약속을 받았는데, 실제로는 새 시스템·새 팀에 배치돼 인수인계 자료조차 없었어요. 어린이집 시간 때문에 단축근무 신청을 검토 중이었는데 그 사실을 안 뒤 분위기가 더 차가워졌고, \'육아하면서 풀타임 어렵지 않냐\'는 발언도 들었습니다." 남녀고용평등법 제19조의5는 사업주가 만 8세 이하 또는 초등학교 2학년 이하 자녀를 양육하는 근로자의 일·가정 양립을 지원하기 위한 배려의무를 부담하는 영역으로 정하고 있고, 출산휴가 복직 직후 짧은 적응 기간만으로 권고사직을 압박하는 운영은 모성보호 + 배려의무 위반 + 의사 하자 트랙으로 평가될 여지가 있는 패턴입니다. 피해자라면 ① 복직 직무 배치 ② 배려의무 위반 ③ 권고사직 의사 하자 ④ 부당해고 구제 ⑤ 손해배상 5중 트랙이 가능한 영역. 대응은 ① 직무 배치 ② 배려 ③ 의사 하자 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 출산휴가 복직 일주일 권고사직 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 직무·배려·의사·구제·손해 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 복직 직무 배치</strong> — 휴가 전과 동일·유사 직무 복귀 원칙 위반 여부.</li>\n<li><strong>② 배려의무 위반</strong> — 단축근무·인수인계·교육 등 합리적 배려 조치 부재.</li>\n<li><strong>③ 권고사직 의사 하자</strong> — 짧은 적응기 + 양육 발언 결합 시 압박 사정.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 부당해고 + 모성보호 위반.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사업주는 육아기 근로자에 대한 일·가정 양립 배려의무를 부담하는 영역. 복직 직후 짧은 기간만으로 권고사직을 압박하는 운영은 그 자체가 배려의무 위반으로 평가될 여지가 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 복직 자료·면담 기록 보존 (즉시)</strong> — 복귀 약속 메일·새 배치 통보·면담 메모.</li>\n<li><strong>2단계 — 배려 부재 자료 (1주)</strong> — 인수인계 부재·교육 미실시·단축근무 거절.</li>\n<li><strong>3단계 — 양육 관련 발언·정황 (1~2주)</strong> — \"육아하면서 풀타임\" 등 발언 녹취·메신저.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고·권고사직일 3개월 내)</strong> — 부당해고 + 모성·배려의무 위반.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">출산휴가 복직 권고사직 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 복직·배려·압박 갈래입니다.</strong></p>\n<ul>\n<li><strong>출산휴가 신청서·승인서·기간 자료</strong></li>\n<li><strong>복직 약속 메일·복귀 안내 자료</strong></li>\n<li><strong>새 직무·새 팀 배치 통보·인수인계 자료 부재 정황</strong></li>\n<li><strong>단축근무·시차근무 신청서·인사팀 답변</strong></li>\n<li><strong>양육 관련 발언 녹취·메신저 캡처</strong></li>\n<li><strong>권고사직 면담 기록·녹취·메모</strong></li>\n<li><strong>가족관계증명서·자녀 연령 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 만 8세 이하 또는 초등학교 2학년 이하 자녀가 있다는 사실 자체가 배려의무 대상자임을 입증. 가족관계증명서가 핵심 출발 자료입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>복직 직무 변경</strong> — 동일·유사 직무 복귀 원칙 위반 사정.</li>\n<li><strong>적응 기회 부재</strong> — 인수인계·교육 미실시는 배려 부재 정황.</li>\n<li><strong>양육 관련 발언</strong> — \"육아하면서 풀타임\" 발언은 차별 의도 자인.</li>\n<li><strong>권고사직 압박</strong> — 일주일 만의 권유는 의사 하자 사정.</li>\n<li><strong>단축근무 거절</strong> — 합리적 사유 부재 시 배려의무 위반.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (모성보호 신고)</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 육아기 근로자에 대한 사업주 배려의무',
        summary:
          '대법원 2019두59349(대법원, 2023.11.16 선고) 영역에서 법원은 만 8세 이하 또는 초등학교 2학년 이하 자녀를 양육하는 근로자에 대해 사업주가 일·가정 양립을 지원하기 위한 배려의무를 부담하고, 그 구체적 내용은 근로자가 처한 환경·사업장 규모·인력 운영 여건 등을 종합해 개별 사건에서 판단해야 하며, 시용기간 중에 있는 근로자를 해고하거나 본계약 체결을 거부할 때에도 객관적으로 합리적인 이유와 사회통념상 타당성이 모두 요구된다고 본 사례 흐름이 있습니다.',
        takeaway: '복직 직후 짧은 기간 평가만으로 권고사직·해고 → 배려의무 위반 + 사회통념상 타당성 부정 사정.',
      },
    ],
    faq: [
      {
        question: '권고사직서에 서명했는데 무효 다툼 가능한가요?',
        answer:
          '<strong>의사 하자 + 배려의무 위반 결합 다툼 가능한 영역입니다.</strong> 압박 정황·양육 발언 자료가 핵심.',
      },
      {
        question: '복직 후 새 시스템·새 팀으로 배치한 건 자유 아닌가요?',
        answer:
          '<strong>휴가 전 동일·유사 직무 복귀 원칙이 있는 영역입니다.</strong> 인수인계·교육 부재 시 배려 흠결 사정.',
      },
      {
        question: '단축근무를 요청했는데 거절당했어요',
        answer:
          '<strong>합리적 사유 없는 거절은 배려의무 위반 사정입니다.</strong> 거절 사유서 확보가 출발점.',
      },
      {
        question: '"육아하면서 풀타임은 어렵지 않냐"는 발언도 차별인가요?',
        answer:
          '<strong>차별 의도 자인 발언으로 평가될 영역입니다.</strong> 녹취·메신저 보존이 결정 사정.',
      },
      {
        question: '노동위 구제와 함께 손해배상 가능한가요?',
        answer:
          '<strong>부당해고 + 모성보호 위반 + 정신적 위자료 결합 청구 가능한 영역입니다.</strong> 민사 별도 트랙 검토.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '복직 시 원직 박탈', href: '/guide/dismissal/dismissal-leave-return-position-deprived' },
      { label: '권고사직 거부 압박', href: '/guide/dismissal/dismissal-recommended-resignation-refused-pressure' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
    ],
  },

  // ─── 2. dismissal-merger-acquirer-sole-fire-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-merger-acquirer-sole-fire-track',
    keyword: '영업양도 시 인수회사의 단독 해고',
    questionKeyword: '회사가 영업양도되면서 다른 동료는 그대로 인수회사에 승계됐는데 본인만 \'승계 대상 제외\' 통보를 받았어요.',
    ctaKeyword: '영업양도 인수회사 단독 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '영업양도 인수회사 단독 해고 — 5단계 승계 배제 다툼 | 로앤가이드',
      description:
        '영업양도 시 본인만 승계에서 제외됐다면 근로관계 포괄승계 원칙·정당한 이유 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"5년 일한 회사가 사업 부문을 다른 회사에 양도하기로 했고, 같은 팀 동료 10명 중 9명은 인수회사로 그대로 승계됐는데 본인만 \'승계 대상 제외\'라며 양도일 직전 해고 통보를 받았습니다. 회사는 \'양도 계약에 본인은 제외하기로 양사가 합의했다\'며 양사 간 특약을 제시했어요. 본인 직무가 인수회사에서 그대로 유지되고 후임 채용 공고까지 올라온 상황입니다." 영업양도는 인적·물적 조직의 동일성을 유지하면서 일체로서 이전되는 영역이고, 원칙적으로 해당 근로자들의 근로관계가 양수기업에 포괄적으로 승계되는 트랙입니다. 양도 당사자 사이에 근로관계 일부를 승계에서 제외하기로 하는 특약은 실질적으로 해고와 다름이 없어 정당한 이유가 요구되며, 영업양도 그 자체만을 사유로 한 해고는 정당성이 인정되지 않는 영역입니다. 피해자라면 ① 영업양도 해당성 ② 포괄승계 원칙 ③ 특약의 정당성 ④ 부당해고 구제 ⑤ 양수회사 지위 확인 5중 트랙이 가능한 트랙. 대응은 ① 양도 ② 승계 ③ 특약 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 영업양도 단독 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 양도·승계·특약·구제·지위 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 영업양도 해당성</strong> — 인적·물적 조직 동일성 유지·일체 이전 여부.</li>\n<li><strong>② 포괄승계 원칙</strong> — 반대 특약 없으면 양수기업에 근로관계 포괄승계.</li>\n<li><strong>③ 특약의 정당성</strong> — 양도 자체만을 사유로 한 해고는 정당한 이유 부정.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 부당해고 + 차별 선별.</li>\n<li><strong>⑤ 양수회사 지위 확인 민사</strong> — 양수기업 근로자 지위 확인 + 임금 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 영업양도는 원칙적으로 근로관계 포괄승계 영역. 양사 특약으로 본인만 배제하는 운영은 실질 해고와 같아 근기법 제23조 정당한 이유가 요구됩니다. 양도 자체만으로는 정당성 부정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 양도 자료·통보서 보존 (즉시)</strong> — 영업양도 계약·승계 명단·특약 자료.</li>\n<li><strong>2단계 — 동료 승계 자료 (1~2주)</strong> — 같은 팀·같은 직무 동료 승계 사실.</li>\n<li><strong>3단계 — 후임 채용·직무 유지 자료 (2주)</strong> — 인수회사 채용공고·직무 존속 정황.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 부당해고 + 양수회사 추가 신청.</li>\n<li><strong>5단계 — 민사 양수회사 지위 확인</strong> — 지위 회복·임금·정신적 위자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">영업양도 단독 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 양도·승계·차별 갈래입니다.</strong></p>\n<ul>\n<li><strong>영업양도 계약서·승계 명단 자료</strong></li>\n<li><strong>본인 해고 통보서·승계 제외 통보</strong></li>\n<li><strong>같은 팀·같은 직무 동료 승계 사실 자료</strong></li>\n<li><strong>인수회사 후임 채용공고·직무 유지 정황</strong></li>\n<li><strong>근로계약서·취업규칙·인사평가</strong></li>\n<li><strong>회사가 제시한 \'배제 사유\' 자료</strong></li>\n<li><strong>양사 특약 사본·관련 협의 메일</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: \"같은 직무·같은 팀 동료는 승계됐는데 본인만 배제\" 패턴은 양도 자체 사유 + 자의적 선별의 결합 사정. 동료 승계 명단 확보가 핵심 입증.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>영업양도 해당성</strong> — 인적·물적 조직 동일성·일체 이전 사정.</li>\n<li><strong>특약 정당성</strong> — 양도 자체 사유만으로는 정당한 이유 부정.</li>\n<li><strong>자의적 선별</strong> — 같은 직무 동료 승계 시 본인 배제 자의적.</li>\n<li><strong>직무 존속</strong> — 후임 채용·직무 유지 시 잉여 사유 부정.</li>\n<li><strong>피신청인 범위</strong> — 양도회사·양수회사 모두 피신청인 추가 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 영업양도 시 근로관계 포괄승계와 특약 한계',
        summary:
          '대법원 2023두54914(대법원, 2026.01.29 선고) 영역에서 법원은 영업양도가 이루어진 경우 원칙적으로 해당 근로자들의 근로관계가 양수기업에 포괄적으로 승계되며, 양도 당사자 사이에 근로관계 일부를 승계 대상에서 제외하기로 하는 특약은 실질적으로 해고와 다름이 없어 근로기준법 제23조 제1항에서 정한 정당한 이유가 있어야 유효하고, 영업양도 그 자체만을 사유로 삼아 근로자를 해고하는 것은 정당한 이유에 해당하지 않는다고 본 사례 흐름이 있습니다.',
        takeaway: '양도 특약 = 실질 해고. 양도 자체만으로는 정당한 이유 부정. 동료 승계 + 본인 배제 패턴이 핵심 다툼 사정.',
      },
    ],
    faq: [
      {
        question: '양사 특약이 있다는데 그대로 효력이 있나요?',
        answer:
          '<strong>특약은 실질 해고와 같아 정당한 이유가 별도로 요구되는 영역입니다.</strong> 단순 양도 사유만으로는 부정.',
      },
      {
        question: '동료는 다 승계됐는데 본인만 빠진 이유가 회사 영업비밀이라고 합니다',
        answer:
          '<strong>비공개 사유는 정당한 이유로 평가되기 어려운 영역입니다.</strong> 객관적·구체적 사유 입증 책임은 사용자.',
      },
      {
        question: '구제신청을 양도회사·양수회사 어느 쪽에 해야 하나요?',
        answer:
          '<strong>양도회사 1차 신청 후 노동위 절차에서 양수회사 추가도 가능한 영역입니다.</strong> 실질 사용자성도 다툼.',
      },
      {
        question: '인수회사가 후임을 새로 채용했어요',
        answer:
          '<strong>직무 존속·잉여 부정의 강력 사정입니다.</strong> 채용공고·근무 사실 자료가 결정 사정.',
      },
      {
        question: '권고사직서를 받았는데 압박이었어요',
        answer:
          '<strong>의사 하자 + 양도 차별 결합 다툼 가능한 영역입니다.</strong> 압박 정황 자료 보존.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '회사 합병과 직무 폐지', href: '/guide/dismissal/dismissal-company-merger-position-loss' },
      { label: '협력업체 합병 정리해고 방어', href: '/guide/dismissal/dismissal-cooperation-merger-redundancy-defense' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
    ],
  },

  // ─── 3. dismissal-branch-consolidation-sole-target-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-branch-consolidation-sole-target-track',
    keyword: '영업소·지점 통폐합 1명 표적 해고',
    questionKeyword: '본사가 \'영업소 통폐합\'을 명목으로 본인이 근무하던 지점만 폐쇄하고 본인만 해고했어요. 다른 지점 인력은 그대로입니다.',
    ctaKeyword: '지점 통폐합 1명 표적 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '지점 통폐합 1명 표적 해고 — 5단계 정리해고 4요건 다툼 | 로앤가이드',
      description:
        '지점 통폐합으로 본인만 해고됐다면 긴박한 경영상 필요·해고회피 노력·공정 기준 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전국 8개 영업소 중 본인이 근무하던 1개 영업소만 \'통폐합 대상\'이라며 폐쇄됐고, 다른 영업소 동료들은 그대로 근무 중입니다. 본인은 다른 지역 영업소나 본사 부서로 전환배치 검토 없이 즉시 정리해고 통보를 받았어요. 회사는 \'해당 영업소 매출이 부진해 폐쇄가 불가피했다\'고만 설명했고, 같은 직무를 수행하던 다른 영업소 동료의 잔류 기준이나 본인의 배제 기준은 공개하지 않았습니다." 근기법 제24조는 경영상 이유에 의한 해고 요건으로 ① 긴박한 경영상 필요 ② 해고 회피 노력 ③ 합리적·공정한 대상자 선정 ④ 근로자대표와 성실 협의 4가지를 모두 요구하는 영역이고, 일부 사업 부문 폐지는 원칙적으로 사업 전체 폐지가 아닌 영역이므로 정리해고 4요건이 그대로 적용되는 트랙입니다. 피해자라면 ① 긴박한 필요 ② 회피 노력 ③ 공정 기준 ④ 부당해고 구제 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 필요 ② 회피 ③ 기준 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 지점 통폐합 표적 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 필요·회피·기준·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 긴박한 경영상 필요</strong> — 법인 전체 경영사정·인원 감축의 합리성.</li>\n<li><strong>② 해고 회피 노력</strong> — 다른 영업소·본사 전환배치·신규채용 금지.</li>\n<li><strong>③ 합리적·공정 기준</strong> — 같은 직무 동료 잔류 시 선별 기준의 객관성.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 정리해고 4요건 미충족.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 일실수입·정신적 위자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 일부 사업 부문 폐지 = 사업 축소이지 폐업 아님. 정리해고 4요건 모두 충족 필요한 영역. 다른 영업소·본사 전환배치 검토 부재가 결정 다툼 사정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 통폐합 자료·통보서 보존 (즉시)</strong> — 폐쇄 결정·해고 통보·사유서.</li>\n<li><strong>2단계 — 회피 노력 부재 자료 (1~2주)</strong> — 다른 영업소 결원·신규채용 이력·전환배치 미실시.</li>\n<li><strong>3단계 — 선정 기준 자료 (2주)</strong> — 같은 직무 동료 잔류 기준·공개 여부.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 정리해고 4요건 미충족.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 일실수입·정신적 위자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">지점 통폐합 표적 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 필요·회피·기준 갈래입니다.</strong></p>\n<ul>\n<li><strong>지점 폐쇄 결정 공문·이사회 회의록</strong></li>\n<li><strong>본사 전체 매출·재무 자료 (가능 범위)</strong></li>\n<li><strong>다른 영업소 인력·결원·신규채용 이력</strong></li>\n<li><strong>전환배치 검토 부재 정황 자료</strong></li>\n<li><strong>같은 직무 동료 잔류·선별 기준 자료</strong></li>\n<li><strong>본인 해고 통보서·사유서</strong></li>\n<li><strong>근로자대표 협의 자료 (50일 사전 통보 등)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정리해고는 \"법인 전체 경영사정\" 기준 판단 영역. 본인 지점 매출 부진만으로 긴박한 필요 인정 어렵고 본사 전체 재무 자료가 핵심 다툼 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>긴박한 필요 부정</strong> — 법인 전체 흑자·일부 지점 적자만으론 부정.</li>\n<li><strong>회피 노력 부재</strong> — 다른 영업소·본사 전환배치 미검토.</li>\n<li><strong>선정 기준 부재</strong> — 같은 직무 동료 잔류 기준 미공개.</li>\n<li><strong>협의 절차 흠결</strong> — 50일 사전 협의 부재.</li>\n<li><strong>증명책임</strong> — 4요건 모두 사용자 입증 책임 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정리해고 긴박한 경영상 필요의 의미와 판단 시점',
        summary:
          '대법원 2017두71604(대법원, 2022.06.09 선고) 영역에서 법원은 근로기준법 제24조 제1항에 따른 경영상 이유에 의한 해고 요건 중 \'긴박한 경영상 필요\'는 반드시 기업의 도산을 회피하기 위한 경우에 한정되지 않고 장래 위기에 미리 대처하기 위한 인원 감축도 포함되지만 그러한 인원 감축은 객관적으로 보아 합리성이 있다고 인정되어야 하며, 긴박한 경영상 필요 유무는 정리해고할 당시의 사정을 기준으로 판단해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '긴박한 필요 + 객관적 합리성 + 해고 당시 판단. 일부 지점 부진만으로는 정당성 인정 어려운 영역.',
      },
    ],
    faq: [
      {
        question: '해당 지점 매출만 보면 적자라는데 회사 말이 맞나요?',
        answer:
          '<strong>법인 전체 경영사정 기준 판단 영역입니다.</strong> 본사 흑자 시 긴박한 필요 인정 어려운 사정.',
      },
      {
        question: '"다른 영업소 자리가 없다"는 회사 주장에 어떻게 대응하나요?',
        answer:
          '<strong>다른 영업소 결원·신규채용 이력 자료가 결정 사정입니다.</strong> 노동위 자료제출 명령도 가능.',
      },
      {
        question: '근로자대표 협의를 한 적이 없는데 다툼 가능한가요?',
        answer:
          '<strong>50일 사전 협의 부재는 절차 흠결 사정입니다.</strong> 협의 자료 부재 자체가 핵심 입증.',
      },
      {
        question: '같은 직무 동료가 다른 영업소에 그대로 근무 중입니다',
        answer:
          '<strong>선별 기준 부재·자의적 운영의 강력 사정입니다.</strong> 동료 인사 자료가 결정 사정.',
      },
      {
        question: '권고사직서를 받았는데 압박이었어요',
        answer:
          '<strong>의사 하자 + 정리해고 요건 흠결 결합 다툼 가능한 영역입니다.</strong> 압박 정황 자료 보존.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '사업장 폐쇄와 정리해고', href: '/guide/dismissal/dismissal-workplace-closure-layoff' },
      { label: '정리해고 50일 협의 위반', href: '/guide/dismissal/dismissal-collective-redundancy-50days-consultation-violation' },
      { label: '구조조정 부당 기준', href: '/guide/dismissal/dismissal-restructuring-unfair-criteria' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
    ],
  },

  // ─── 4. dismissal-frequent-sickleave-capability-lack-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-frequent-sickleave-capability-lack-track',
    keyword: '잦은 병가 근무능력 부족 해고',
    questionKeyword: '지난 1년간 진단서 기반 병가를 7~8회 사용했는데, 회사가 \'근무능력 부족·고용관계 유지 불가\'를 사유로 해고했어요.',
    ctaKeyword: '잦은 병가 능력 부족 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '잦은 병가 능력 부족 해고 — 5단계 4요건 판례기준 다툼 | 로앤가이드',
      description:
        '잦은 병가 후 능력 부족 사유로 해고됐다면 평가 객관성·개선 기회·상당성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"만성 질환으로 지난 1년간 진단서 기반 병가를 7~8회 썼습니다. 매번 정상 절차로 신청·승인받았고 복귀 후 업무도 평균치는 유지했어요. 그런데 회사가 \'잦은 결근으로 근무능력이 일반적으로 기대되는 최소한에도 미치지 못한다\'며 해고 통보를 했습니다. 인사평가는 평이한 \'중\' 수준이었고, 개선 기회·전환배치·근로시간 단축 같은 사전 조치는 받지 못했어요." 근로기준법상 \"근무성적·근무능력 불량\"을 사유로 한 해고는 ① 객관적·공정한 평가 ② 상대적이 아닌 절대적으로 기대 최소한 미달 ③ 상당 기간 지속 ④ 향후 개선 가능성 부재 ⑤ 사회통념상 고용관계 유지 불가 5가지 요소가 모두 충족되어야 정당성이 인정되는 영역입니다. 피해자라면 ① 평가 객관성 ② 개선 기회 ③ 병가 사유 정당성 ④ 부당해고 구제 ⑤ 차별 위자료 5중 트랙이 가능한 트랙. 대응은 ① 병가 자료 ② 평가 ③ 기회 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 잦은 병가 능력 부족 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 병가·평가·기회·구제·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 병가 사유의 정당성</strong> — 진단서·정상 절차 승인 → 무단결근 아닌 영역.</li>\n<li><strong>② 평가의 객관성</strong> — 결근만으로 능력 부족 평가 부적정.</li>\n<li><strong>③ 개선 기회 부여</strong> — 교육·전환배치·근로시간 단축 등 사전 조치 실시 여부.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 평가 절차·실체 다툼.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 장애 차별 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 능력 부족 해고는 \"기대 최소한 절대 미달 + 상당 기간 지속 + 개선 가능성 부재\"가 모두 필요한 영역. 정상 승인된 병가 누적만으로는 정당성 인정 어려운 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 병가 자료·진단서 보존 (즉시)</strong> — 신청서·승인·진단서·복귀 보고.</li>\n<li><strong>2단계 — 평가·근무 실적 자료 (1~2주)</strong> — 인사평가·업무 실적·동료 비교.</li>\n<li><strong>3단계 — 개선 기회 부재 자료 (2주)</strong> — 교육·전환배치·단축근무 미실시 정황.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 평가 절차·실체 다툼.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">잦은 병가 능력 부족 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 병가·평가·기회 갈래입니다.</strong></p>\n<ul>\n<li><strong>병가 신청서·승인 통보·진단서 사본</strong></li>\n<li><strong>복귀 시 업무 보고·인수인계 자료</strong></li>\n<li><strong>본인 인사평가·업무 실적 자료</strong></li>\n<li><strong>같은 부서 동료 평가·실적 비교 자료</strong></li>\n<li><strong>교육·전환배치·단축근무 미실시 정황</strong></li>\n<li><strong>해고 통보서·사유서·인사위 회의록</strong></li>\n<li><strong>취업규칙·단체협약 (병가·해고 조항)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진단서 기반 정상 절차 승인 병가는 무단결근과 본질이 다른 영역. 진단서·승인 자료가 결정 사정. 만성 질환 경우 장애 차별 트랙도 검토 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>병가 자체 평가</strong> — 정상 승인 병가는 결근 평가에서 제외 영역.</li>\n<li><strong>능력 부족 입증 부족</strong> — 결근만으로는 \"기대 최소한 미달\" 인정 어려움.</li>\n<li><strong>개선 기회 부재</strong> — 교육·전환배치·단축근무 미실시 사정.</li>\n<li><strong>장애 차별 가능성</strong> — 만성 질환 시 장애차별금지법 트랙 검토.</li>\n<li><strong>동료 비교</strong> — 평이한 \"중\" 평가로 본인만 해고 시 자의적.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국가인권위원회 1331 (장애 차별 진정)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 근무성적·근무능력 불량 해고의 5요건',
        summary:
          '대법원 2021두33470(대법원, 2023.12.28 선고) 영역에서 법원은 근무성적이나 근무능력 불량을 사유로 한 해고의 정당성이 인정되려면 ① 공정하고 객관적인 평가 ② 상대적 정도를 넘어 일반적으로 기대되는 최소한에도 미치지 못함 ③ 상당한 기간 지속 ④ 향후 개선 가능성 부재 ⑤ 사회통념상 고용관계 유지 불가능의 5가지 요건이 모두 충족되어야 하며, 이때 사용자가 교육·전환배치 등 개선 기회를 부여했는지·개선 여부 등을 종합 판단해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '능력 부족 해고는 5요건 모두 필요. 정상 승인 병가 누적만으로는 \"기대 최소한 절대 미달\" 인정 어려움.',
      },
    ],
    faq: [
      {
        question: '진단서를 매번 제출하고 정상 승인된 병가도 결근으로 평가되나요?',
        answer:
          '<strong>정상 승인 병가는 무단결근과 본질이 다른 영역입니다.</strong> 진단서·승인 자료가 결정 사정.',
      },
      {
        question: '인사평가는 평이한 \'중\' 수준이었어요',
        answer:
          '<strong>\'중\' 평가만으로 \"기대 최소한 미달\" 인정 어려운 영역입니다.</strong> 동료 평가 비교가 핵심.',
      },
      {
        question: '회사가 단축근무·전환배치 제안을 한 적이 없어요',
        answer:
          '<strong>개선 기회 부재는 정당성 부정의 강력 사정입니다.</strong> 사전 조치 자료 부재 자체가 입증.',
      },
      {
        question: '만성 질환은 장애로 평가될 수 있나요?',
        answer:
          '<strong>장애인복지법·장애차별금지법상 장애 판정 시 별도 차별 위자료 트랙 가능 영역입니다.</strong> 인권위 진정 병행.',
      },
      {
        question: '권고사직서를 받았는데 압박이었어요',
        answer:
          '<strong>의사 하자 + 평가 흠결 결합 다툼 가능한 영역입니다.</strong> 압박 정황 자료 보존.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '병가 중 해고', href: '/guide/dismissal/dismissal-during-sick-leave' },
      { label: '병가 복귀 후 해고', href: '/guide/dismissal/dismissal-sick-leave-return-fired' },
      { label: '저성과자 해고 방어', href: '/guide/dismissal/dismissal-low-performance-defense' },
      { label: 'PIP 평가 절차 흠결', href: '/guide/dismissal/dismissal-pip-evaluation-process-flaw' },
    ],
  },

  // ─── 5. dismissal-union-join-eval-rating-drop-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-union-join-eval-rating-drop-track',
    keyword: '노조 가입 후 평가 하락 해고',
    questionKeyword: '노동조합에 가입한 직후 부서가 이동되고 인사평가가 \'상\'에서 \'하\'로 떨어진 뒤 \'근무능력 부족\' 사유로 해고됐어요.',
    ctaKeyword: '노조 가입 평가 하락 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '노조 가입 후 평가 하락 해고 — 5단계 부당노동행위 다툼 | 로앤가이드',
      description:
        '노조 가입 직후 평가가 떨어지고 해고됐다면 부당노동행위·평가 조작 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"7년간 인사평가 \'상\'을 받아오다 노동조합에 가입한 다음 달 부서가 한직으로 이동됐고, 같은 분기 평가가 \'하\'로 급락했습니다. 이후 두 차례 평가에서도 \'하\'가 반복돼 결국 \'근무능력 부족\' 사유로 해고 통보를 받았어요. 같은 시기 노조에 가입한 동료들도 동일 패턴으로 평가 하락을 겪었고, 가입 전 \'상\' 평가 자료는 사내 시스템에 그대로 남아 있습니다." 노동조합법 제81조는 노동조합 가입·활동을 이유로 한 불이익 취급과 지배·개입을 부당노동행위 영역으로 금지하고, 인사고과 부여나 승격 탈락이 노조 활동에 대한 불이익으로 평가될 경우 \'계속하는 행위\'로서 종료일로부터 3개월 내 구제신청이 가능한 트랙입니다. 피해자라면 ① 가입 시기와 평가 변동 시점 ② 평가 조작 정황 ③ 부당노동행위 ④ 부당해고 구제 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 시점 ② 평가 ③ 부노 ④ 부해 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 노조 가입 후 평가 하락 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 시점·평가·부노·부해·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 가입과 평가 변동 시점</strong> — 가입 직후 부서 이동 + 평가 급락 패턴.</li>\n<li><strong>② 평가 조작 정황</strong> — 같은 시기 가입 동료 동일 패턴·평가 항목 자의성.</li>\n<li><strong>③ 부당노동행위 구제신청 (3개월)</strong> — 노조 활동 이유 불이익 + 지배·개입.</li>\n<li><strong>④ 부당해고 구제신청 (3개월)</strong> — 평가 절차·실체 다툼 병행.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 노조 가입 후 평가 급락은 부당노동행위 + 부당해고 동시 트랙 영역. 같은 시기 가입 동료의 동일 패턴이 결정 다툼 사정입니다. 인사고과는 \'계속하는 행위\'로 종료일 3개월 기산.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가입 시점·평가 자료 보존 (즉시)</strong> — 가입 신청·확인서·과거 평가 사본.</li>\n<li><strong>2단계 — 동료 동일 패턴 자료 (1~2주)</strong> — 같은 시기 가입 동료 평가 변동 자료.</li>\n<li><strong>3단계 — 평가 조작 정황 자료 (2주)</strong> — 평가표·평가자 변경·항목 자의성.</li>\n<li><strong>4단계 — 노동위 부노·부해 동시 신청 (3개월 내)</strong> — 부당노동행위 + 부당해고.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">노조 가입 후 평가 하락 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 가입·평가·동료 갈래입니다.</strong></p>\n<ul>\n<li><strong>노동조합 가입 신청서·확인서</strong></li>\n<li><strong>가입 전 인사평가 (3~5년치) 사본</strong></li>\n<li><strong>가입 후 평가·부서 이동 통보 자료</strong></li>\n<li><strong>같은 시기 가입 동료 평가 변동 자료</strong></li>\n<li><strong>평가표·평가자 변경 이력·평가 항목</strong></li>\n<li><strong>해고 통보서·사유서·인사위 회의록</strong></li>\n<li><strong>회사 관리자의 노조 관련 발언 녹취·메신저</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 노조 가입 명단·시점은 사내 시스템 보존이 짧을 수 있어 즉시 캡처·다운로드 필수. 같은 시기 가입 동료 자료가 패턴 입증의 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>시점 일치</strong> — 가입 직후 부서 이동·평가 변동 시점 일치.</li>\n<li><strong>동료 동일 패턴</strong> — 같은 시기 가입자 일괄 평가 하락.</li>\n<li><strong>평가자 변경</strong> — 가입 후 평가자가 노조 비우호적 관리자로 교체.</li>\n<li><strong>관리자 발언</strong> — \"노조 가입자는 평가 불리\" 등 발언 녹취.</li>\n<li><strong>\'계속하는 행위\' 기산</strong> — 인사고과는 종료일 3개월 기산 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>전국민주노동조합총연맹·한국노동조합총연맹 법률지원</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 인사고과 부여와 부당노동행위 계속하는 행위',
        summary:
          '대법원 2023두41864(대법원, 2025.04.03 선고) 영역에서 법원은 노동조합 활동을 이유로 근로자에게 하위 인사고과를 부여하거나 승격에서 탈락시키는 부당노동행위에는 통상적으로 그에 따른 임금상 불이익을 주려는 의사도 포함되어 있다고 볼 수 있고, 그 인사고과 부여 등은 같은 단위 기간의 임금 지급과 하나의 \'계속하는 행위\'를 구성하여 구제신청 기간(부당노동행위 종료일로부터 3개월)을 그에 따라 산정해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '노조 가입 후 인사고과·평가 하락은 부당노동행위 \'계속하는 행위\' 영역. 종료일 기준 3개월 내 구제신청 가능.',
      },
    ],
    faq: [
      {
        question: '"노조 가입과 평가는 무관하다"는 회사 주장은 어떻게 다투나요?',
        answer:
          '<strong>같은 시기 가입 동료의 동일 패턴이 결정 사정입니다.</strong> 가입 명단·평가 변동 자료 확보가 출발점.',
      },
      {
        question: '평가가 \'하\'였지만 실제 업무 실적은 평이했어요',
        answer:
          '<strong>평가 항목·기준의 자의성 다툼 영역입니다.</strong> 실적 자료와 평가 결과의 괴리가 핵심 입증.',
      },
      {
        question: '관리자가 \"노조 가입하면 불이익 있다\"고 발언했어요',
        answer:
          '<strong>지배·개입 부당노동행위의 강력 사정입니다.</strong> 녹취·메신저 보존이 결정 사정.',
      },
      {
        question: '부당노동행위와 부당해고 동시 신청 가능한가요?',
        answer:
          '<strong>두 사건 모두 노동위 관할로 동시 신청 가능한 영역입니다.</strong> 같은 절차에서 병행 심사.',
      },
      {
        question: '구제신청 3개월이 지났을 수도 있는데요?',
        answer:
          '<strong>인사고과는 \'계속하는 행위\'로 종료일 기산 가능한 영역입니다.</strong> 마지막 평가·임금 지급 시점 검토.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '노조 활동 보복 해고', href: '/guide/dismissal/dismissal-union-activity-retaliation' },
      { label: '노조 가입·활동 해고', href: '/guide/dismissal/dismissal-union-membership-activity-cause' },
      { label: '하위 등급 평가 해고', href: '/guide/dismissal/dismissal-evaluation-rank-bottom-firing-track' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
    ],
  },
];
