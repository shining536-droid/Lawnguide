import { SpokePage } from '../spoke-pages';

// batch67 dismissal — 5개 (2026-05-17)
//
// 고유 존재 이유:
// 1. 정년 6개월 앞 즉시 해고로 정년퇴직 처우(특별퇴직금·정년연장 협의)를 회피하는 트랙 (기존 pre-retirement / retirement-pre-retirement-bonus 와 분기: 해고 사유의 형식성 + 정년 회피 의도 결합).
// 2. 연차 강제 소진 후 추가 결근을 무단결근으로 처리해 해고하는 트랙 (기존 attendance / annual-leave 와 분기: 연차 강제소진 적법성 + 결근 변환 결합).
// 3. 사내 메신저 사적 대화 적발 → 근무태도 불량 해고 (기존 sns / sns-company-defamation 와 분기: 내부 메신저 모니터링·통신비밀·취업규칙 명시성).
// 4. 콜센터 QA 점수 미달 해고 — 평가 객관성·기준 사전 고지·교육기회 (기존 evaluation-rank-bottom / probation-no-criteria 와 분기: 콜센터 QA 기준의 자의성 + 개선 기회).
// 5. 외주직 정규직 전환 한 달 전 계약 종료 — 전환 기대권·회피 의도 (기존 fixed-term-renewal / business-transfer 와 분기: 전환 직전 회피 의도 결합).

export const spokesBatch67Dismissal: SpokePage[] = [
  // ─── 1. dismissal-pre-retirement-immediate-firing-payout-escape-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-pre-retirement-immediate-firing-payout-escape-track',
    keyword: '정년 직전 즉시 해고',
    questionKeyword: '정년 6개월 앞두고 갑자기 해고 통보를 받았어요. 퇴직금·정년퇴직 처우 회피 의심됩니다.',
    ctaKeyword: '정년 직전 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '정년 직전 즉시 해고 — 5단계 정년퇴직 처우 회피 다툼 | 로앤가이드',
      description:
        '정년 6개월 앞 갑작스러운 해고로 정년퇴직 처우 회피가 의심된다면 사유 정당성·회피 의도 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"30년 한 회사에서 근무하고 정년까지 6개월 남은 시점에 갑자기 \'근무태도 불량\' 사유로 해고 통보를 받았습니다. 같은 사유로 더 큰 사고를 낸 동료는 시말서 한 장에 그쳤는데 본인만 즉시 해고. 회사 내부에서는 정년퇴직자에게 지급되는 \'장기근속 특별퇴직금\'과 \'정년연장 협의\' 대상에서 제외하기 위해 정년 도달 직전에 해고하는 사례가 반복돼 왔다는 이야기도 들립니다." 근기법 제23조는 정당한 이유 없는 해고를 금지하는 영역이고, 정년이 임박한 시점의 해고는 형식상 사유와 별개로 \'사실상 정년퇴직 처우를 회피하기 위한 수단\'인지 여부가 비교형량 대상으로 평가될 여지가 있는 트랙입니다. 피해자라면 ① 해고 사유 정당성 ② 동일 사유 동료 처우 비교 ③ 정년 회피 의도 정황 ④ 부당해고 구제 ⑤ 정년퇴직 처우 손해배상 5중 트랙이 가능한 영역. 대응은 ① 해고 사유 ② 동료 비교 ③ 회피 정황 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 정년 직전 즉시 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사유·비교·회피·구제·손해 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 해고 사유 정당성</strong> — 형식 사유가 사회통념상 해고에 이를 정도인지.</li>\n<li><strong>② 동일 사유 동료 처우 비교</strong> — 동일·유사 행위 동료 잔류 시 자의적 운영 사정.</li>\n<li><strong>③ 정년 회피 의도 정황</strong> — 정년 도달 직전 시점·특별퇴직금 지급 회피 패턴.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 부당해고 + 권리남용 병행.</li>\n<li><strong>⑤ 정년퇴직 처우 손해</strong> — 특별퇴직금·정년연장 협의 이익 손해.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정년 임박 해고는 형식 사유와 별개로 \"정년퇴직 처우 회피 의도\"가 비교형량 대상. 동료 처우 비교·시점 패턴이 결합되면 부당해고로 평가될 여지가 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 해고 통보·사유 자료 보존 (즉시)</strong> — 통보서·인사위 회의록·시점 기록.</li>\n<li><strong>2단계 — 동일 사유 동료 처우 자료 (1~2주)</strong> — 과거 동일 행위·징계 결과 비교.</li>\n<li><strong>3단계 — 정년 회피 정황 자료 (2주)</strong> — 특별퇴직금 규정·과거 정년 임박 해고 사례.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 부당해고 + 권리남용.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정년퇴직 처우 손해·정신적 위자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">정년 직전 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 해고·비교·회피 갈래입니다.</strong></p>\n<ul>\n<li><strong>해고 통보서·인사위 회의록·소명자료</strong></li>\n<li><strong>근로계약서·취업규칙 (정년·특별퇴직금 조항)</strong></li>\n<li><strong>동일·유사 사유 동료 징계 결과 자료</strong></li>\n<li><strong>장기근속 특별퇴직금·정년연장 협의 규정</strong></li>\n<li><strong>과거 정년 임박자 해고 사례 자료</strong></li>\n<li><strong>본인 평가·실적·근무 기록</strong></li>\n<li><strong>인사팀 발언·메신저·면담 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 특별퇴직금 규정이 \"정년퇴직자에 한함\"으로 명시된 경우 정년 직전 해고는 곧 그 권리 박탈로 직결. 규정 사본 확보가 회피 의도 입증의 출발점입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>해고 사유 정당성</strong> — 형식 사유가 사회통념상 해고에 이를 정도인지.</li>\n<li><strong>동료 처우 비교</strong> — 유사 행위 동료 잔류 시 자의적 운영 사정.</li>\n<li><strong>회피 의도 정황</strong> — 정년 도달 직전 시점·과거 패턴 결합.</li>\n<li><strong>특별퇴직금 박탈</strong> — 정년퇴직자 한정 규정 시 권리 박탈 직결.</li>\n<li><strong>정년연장 협의 제외</strong> — 정년연장 대상자에서 사전 배제하는 효과.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정년 도달 시점과 근로관계 종료',
        summary:
          '대법원 2024두41038(대법원, 2024.11.20 선고) 영역에서 법원은 정년 도달에 따라 근로관계가 당연종료되었는지는 당연종료 여부가 다투어지는 시점에 유효한 정년을 기준으로 판단해야 하고, 사용자가 정년 임박 시점에 한 처리가 실질적으로 근로자에게 불이익한 효과로 이어질 경우 해고에 해당하는지를 별도로 평가해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '정년 임박 시점 처리는 형식만으로 판단 X. 실질적으로 정년퇴직 처우 회피로 운영됐다면 해고로 평가될 여지.',
      },
    ],
    faq: [
      {
        question: '시말서 정도로 끝날 사유로 본인만 해고됐어요',
        answer:
          '<strong>동일 사유 동료 처우와 균형이 무너지면 자의적 운영 사정으로 평가될 영역입니다.</strong> 동료 징계 결과 자료가 핵심 입증.',
      },
      {
        question: '회사는 "정년이 곧이라 정리한 것"이라고 합니다',
        answer:
          '<strong>그 자체가 정년 회피 의도를 자인하는 발언 사정입니다.</strong> 발언·메일·면담 메모 보존.',
      },
      {
        question: '특별퇴직금은 정년퇴직자만 받는데 다툼 가능한가요?',
        answer:
          '<strong>해고가 부당하다면 정년퇴직자 지위 회복 + 특별퇴직금 손해배상 청구 가능한 영역입니다.</strong>',
      },
      {
        question: '권고사직서를 받았는데 압박 분위기였어요',
        answer:
          '<strong>의사 하자 + 정년 회피 의도 결합 다툼 가능한 영역입니다.</strong> 압박 정황 자료가 출발점.',
      },
      {
        question: '노동위 구제신청 기간이 지났는데도 다툼 가능한가요?',
        answer:
          '<strong>3개월 경과 시 민사 해고무효확인 + 손해배상 트랙 검토 가능한 영역입니다.</strong> 소멸시효 별도 확인.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
      { label: '징계해고 절차', href: '/guide/dismissal/dismissal-disciplinary-procedure' },
      { label: '기간만료 갱신기대권', href: '/guide/dismissal/dismissal-fixed-term-renewal-right' },
    ],
  },

  // ─── 2. dismissal-annual-leave-coerced-use-absent-fire-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-annual-leave-coerced-use-absent-fire-track',
    keyword: '연차 강제 소진 후 결근 해고',
    questionKeyword: '회사가 남은 연차를 강제로 다 쓰게 한 뒤 추가 결석을 무단결근으로 처리해 해고했어요.',
    ctaKeyword: '연차 강제 소진 후 결근 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '연차 강제 소진 후 결근 해고 — 5단계 무단결근 변환 다툼 | 로앤가이드',
      description:
        '연차를 강제 소진시킨 뒤 결근을 무단결근으로 처리해 해고됐다면 연차사용·결근 평가 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"개인 사정으로 병가가 필요한 상황이었는데 회사가 \'연차로 처리하라\'며 남은 연차 10일을 임의 소진시키고, 그 이후 며칠 더 결근하자 \'무단결근 3일 누적\'을 사유로 즉시 해고 통보. 처음부터 병가·휴직 신청을 검토했는데 인사팀이 \'복잡하니 연차로\'라고 했고, 본인은 연차 사용 동의서에 서명하지 않았는데도 일방 소진 처리됐어요." 근기법 제60조는 연차유급휴가의 사용시기를 원칙적으로 근로자가 지정하는 영역으로 정하고 있고, 사용자가 일방적으로 연차 사용 시기를 강제 지정한 후 그 종료를 이유로 후속 결근을 \'무단결근\'으로 평가하는 운영은 근로자에게 불리한 해석으로 평가될 여지가 있는 트랙입니다. 피해자라면 ① 연차 사용 시기 지정권 ② 동의·서면 절차 ③ 결근 사유 평가 ④ 부당해고 구제 ⑤ 미사용 연차 수당 5중 트랙이 가능한 영역. 대응은 ① 연차 운영 ② 동의 절차 ③ 결근 사유 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 연차 강제 소진 후 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 시기지정·동의·결근·구제·수당 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 연차 시기지정권</strong> — 근로자 지정이 원칙·사용자 변경권 한정.</li>\n<li><strong>② 동의·서면 절차</strong> — 연차 사용 동의서·시기 변경 통지 자료.</li>\n<li><strong>③ 결근 사유 평가</strong> — 병가·돌봄휴가 사유 시 무단결근 평가 부적정.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 부당해고.</li>\n<li><strong>⑤ 미사용 연차 수당</strong> — 임의 소진 시 미사용 수당 청구 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 연차 시기지정권은 근로자에게 있는 영역. 일방 소진 + 후속 결근의 무단결근 평가는 근로자에게 불리한 해석으로 평가될 여지가 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 연차 운영 자료 보존 (즉시)</strong> — 연차 신청서·소진 통보·동의서.</li>\n<li><strong>2단계 — 결근 사유 자료 (1주)</strong> — 진단서·돌봄 사정·병가 신청 메일.</li>\n<li><strong>3단계 — 동료 사례 비교 (1~2주)</strong> — 동일 사정 동료의 연차·병가 처리 비교.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 부당해고 + 무단결근 평가 부적정.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 미사용 연차 수당·정신적 위자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">연차 강제 소진 후 결근 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 연차·결근·해고 갈래입니다.</strong></p>\n<ul>\n<li><strong>연차 신청서·연차 소진 통보서·동의서</strong></li>\n<li><strong>병가·돌봄휴가 신청 메일·인사팀 답변</strong></li>\n<li><strong>진단서·가족 돌봄 사정 자료</strong></li>\n<li><strong>근태 기록 (결근일 사유·일자)</strong></li>\n<li><strong>해고 통보서·인사위 회의록</strong></li>\n<li><strong>근로계약서·취업규칙 (연차·병가 조항)</strong></li>\n<li><strong>동료 사례 자료 (병가 승인 vs 연차 강제)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 연차 사용 동의서에 서명하지 않았다면 \"근로자 지정이 아닌 일방 소진\"으로 평가될 여지가 강함. 동의서 부재가 핵심 입증 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>시기지정권 침해</strong> — 동의 없는 일방 소진은 권리 침해 사정.</li>\n<li><strong>결근 사유 평가</strong> — 병가·돌봄 사유를 무단결근으로 평가 부적정.</li>\n<li><strong>동료 사례 차별</strong> — 동일 사정 동료 병가 승인 vs 본인 강제 연차.</li>\n<li><strong>해고 사유 과중</strong> — 결근 3일로 즉시 해고는 사회통념상 과중 영역.</li>\n<li><strong>미사용 연차 수당</strong> — 임의 소진 시 별도 수당 청구 가능 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 연차휴가 산정과 근로자 불리 해석 금지',
        summary:
          '대법원 2006구합45852(서울행법, 2007.07.26 선고) 영역에서 법원은 연차휴가는 근로자에 대해 매년 일정 일수의 휴가를 유급으로 보장하고자 하는 제도이고, 사용자의 귀책 등으로 근로자가 출근하지 못한 기간에 대하여 출근율을 계산함에 있어 근로자에게 불리하게 고려할 수 없으며, 그 기간 동안의 처리를 정당한 연차 신청으로 인정하지 않고 결근을 이유로 한 해고는 부당하다고 본 사례 흐름이 있습니다.',
        takeaway: '연차 운영을 근로자에게 불리하게 해석한 결근 평가 → 해고는 부당해고로 평가될 여지.',
      },
    ],
    faq: [
      {
        question: '연차 사용 동의서에 서명한 적이 없는데 자동 소진됐어요',
        answer:
          '<strong>서면 동의 없는 일방 소진은 시기지정권 침해 사정입니다.</strong> 동의서 부재 자체가 핵심 입증.',
      },
      {
        question: '병가 신청서를 냈는데 인사팀이 연차로 처리하라고 했어요',
        answer:
          '<strong>병가·돌봄 사유를 강제로 연차로 전환한 운영은 다툼 가능한 영역입니다.</strong> 메일·메신저 보존이 출발점.',
      },
      {
        question: '결근 3일이면 무단결근으로 즉시 해고된다고 회사가 합니다',
        answer:
          '<strong>결근 사유의 정당성·동료 처우·소명 기회를 종합 판단하는 영역입니다.</strong> 사유 자체가 부당하면 즉시 해고는 과중.',
      },
      {
        question: '미사용 연차 수당도 같이 청구 가능한가요?',
        answer:
          '<strong>일방 소진된 연차는 사용으로 평가되지 않을 가능성이 있어 미사용 수당 별도 청구 검토 영역입니다.</strong>',
      },
      {
        question: '권고사직서를 받았는데 압박이었어요',
        answer:
          '<strong>의사 하자 + 연차 운영 부당성 결합 다툼 가능한 영역입니다.</strong> 압박 정황 자료 보존.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
      { label: '징계해고 절차', href: '/guide/dismissal/dismissal-disciplinary-procedure' },
      { label: '취업규칙 변경 절차', href: '/guide/dismissal/dismissal-work-rules-change-procedure' },
    ],
  },

  // ─── 3. dismissal-internal-messenger-private-chat-fire-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-internal-messenger-private-chat-fire-track',
    keyword: '사내 메신저 사적 채팅 해고',
    questionKeyword: '회사가 사내 메신저에서 동료와 한 사적 대화를 캡처해 \'근무태도 불량\'으로 해고했어요.',
    ctaKeyword: '사내 메신저 사적 채팅 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '사내 메신저 사적 채팅 해고 — 5단계 모니터링·취업규칙 다툼 | 로앤가이드',
      description:
        '사내 메신저 사적 대화 캡처로 해고됐다면 모니터링 동의·취업규칙 명시성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"사내 메신저에서 점심 시간에 동료와 \'팀장 스타일이 좀 답답하다\'는 짧은 대화를 나눴는데, 두 달 뒤 인사팀이 그 캡처를 들이밀며 \'근무태도 불량·조직 질서 문란\'을 사유로 해고 통보. 메신저 사용 시 대화 모니터링에 대한 별도 동의·고지는 받은 적이 없고, 취업규칙에도 \'사적 대화 금지\' 같은 구체 조항은 없습니다. 회사 측은 \'업무용 시스템이라 회사가 자유롭게 본다\'고만 해요." 사적 대화 모니터링은 통신비밀보호 영역과 사용자의 시설관리권이 충돌하는 영역이고, 징계 사유의 정당성은 취업규칙상 징계규정의 객관적 의미를 합리적으로 해석해 판단하는 트랙입니다. 피해자라면 ① 모니터링 사전 동의·고지 ② 취업규칙 명시성 ③ 사적 대화 보호 범위 ④ 부당해고 구제 ⑤ 개인정보 분쟁조정 5중 트랙이 가능한 영역. 대응은 ① 모니터링 절차 ② 취업규칙 ③ 대화 내용 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 사내 메신저 사적 채팅 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 모니터링·취업규칙·대화·구제·개인정보 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 모니터링 사전 동의·고지</strong> — 별도 동의·취업규칙 고지 부재 시 절차 흠결.</li>\n<li><strong>② 취업규칙 명시성</strong> — \'사적 대화 금지\' 명시 조항 부재 시 징계사유 명확성 흠결.</li>\n<li><strong>③ 사적 대화 보호 범위</strong> — 점심 시간·1:1 대화는 사생활 영역.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 부당해고 + 양정 과중.</li>\n<li><strong>⑤ 개인정보 분쟁조정</strong> — 부당 수집·이용 다툼 병행.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 징계 사유는 취업규칙의 객관적 의미를 합리적으로 해석해 판단하는 영역. 모니터링 동의·고지 부재 + 명시 조항 부재면 정당성이 부정될 여지가 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 메신저·모니터링 자료 보존 (즉시)</strong> — 캡처·해고 통보서·인사팀 발언.</li>\n<li><strong>2단계 — 동의·고지 자료 확인 (1주)</strong> — 입사 동의서·취업규칙·이메일 공지.</li>\n<li><strong>3단계 — 대화 맥락·동료 사례 (1~2주)</strong> — 점심·휴게 시간·1:1 대화 정황.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 부당해고 + 양정 과중.</li>\n<li><strong>5단계 — 개인정보 분쟁조정·민사</strong> — 부당 수집·이용 + 정신적 위자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">사내 메신저 사적 채팅 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 모니터링·취업규칙·대화 갈래입니다.</strong></p>\n<ul>\n<li><strong>해고 통보서·인사위 회의록·소명자료</strong></li>\n<li><strong>회사가 제시한 메신저 캡처본 사본</strong></li>\n<li><strong>입사 시 개인정보·모니터링 동의서</strong></li>\n<li><strong>취업규칙 (징계사유·통신 사용 조항)</strong></li>\n<li><strong>대화 시점·맥락 (점심·휴게시간 여부)</strong></li>\n<li><strong>동료 사례·관행 자료 (동일 대화 처리 비교)</strong></li>\n<li><strong>인사팀 면담·발언 메모·녹취</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 \"업무용 시스템\"이라며 모니터링을 정당화해도 사전 동의·고지·취업규칙 명시 3요건이 모두 갖춰져야 정당성이 인정될 여지. 동의서 부재가 결정 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>모니터링 동의 부재</strong> — 별도 동의·고지 없으면 부당 수집 사정.</li>\n<li><strong>취업규칙 명시 부재</strong> — \'사적 대화 금지\' 등 구체 조항 부재 시 징계사유 명확성 흠결.</li>\n<li><strong>사적 대화 영역</strong> — 점심·휴게 시간·1:1 대화는 사생활 영역.</li>\n<li><strong>양정 과중</strong> — 사적 대화 발언으로 즉시 해고는 사회통념상 과중.</li>\n<li><strong>개인정보 부당 이용</strong> — 캡처 자체가 부당 수집·이용 다툼 가능.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>개인정보분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 징계사유 해석과 취업규칙 객관적 의미',
        summary:
          '대법원 2020다270770(대법원, 2021.04.29 선고) 영역에서 법원은 근로자의 어떤 비위행위가 징계사유로 되어 있는지는 구체적 자료를 통해 징계위원회에서 그것을 사유로 삼았는지에 따라 결정되어야 하고, 그 비위행위가 정당한 징계사유에 해당하는지는 취업규칙상 징계사유 규정의 객관적 의미를 합리적으로 해석하여 판단해야 하며, 단지 통보서에 쓰인 용어의 개념에 포함되는지 여부만으로 정당성이 인정될 수 없다고 본 사례 흐름이 있습니다.',
        takeaway: '"근무태도 불량" 용어만으로 정당성 인정 X. 취업규칙 규정의 객관적 의미 합리적 해석이 다툼 축.',
      },
    ],
    faq: [
      {
        question: '"업무용 메신저라 회사가 자유롭게 본다"고 해요',
        answer:
          '<strong>사전 동의·고지·취업규칙 명시 3요건이 모두 갖춰져야 정당성이 인정될 여지가 있는 영역입니다.</strong> 동의서 부재가 결정 사정.',
      },
      {
        question: '취업규칙에 "근무태도 불량"이라는 일반 조항만 있어요',
        answer:
          '<strong>포괄 조항만으로 사적 대화를 사유로 삼기 어려운 영역입니다.</strong> 객관적 의미 합리적 해석이 다툼 축.',
      },
      {
        question: '동료들도 같은 대화를 했는데 본인만 해고됐어요',
        answer:
          '<strong>차별·표적 운영 사정으로 다툼 가능한 영역입니다.</strong> 동료 사례 자료가 핵심.',
      },
      {
        question: '캡처 자체를 다툴 수 있나요?',
        answer:
          '<strong>부당 수집·이용으로 개인정보 분쟁조정 신청 가능한 영역입니다.</strong> 노동위와 병행 트랙.',
      },
      {
        question: '점심시간에 한 대화도 사적 대화로 보호되나요?',
        answer:
          '<strong>휴게시간 1:1 대화는 사생활 영역으로 평가될 여지가 있습니다.</strong> 시점·맥락 자료 보존이 출발점.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '징계해고 절차', href: '/guide/dismissal/dismissal-disciplinary-procedure' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
      { label: '취업규칙 변경 절차', href: '/guide/dismissal/dismissal-work-rules-change-procedure' },
    ],
  },

  // ─── 4. dismissal-callcenter-qa-score-failure-fire-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-callcenter-qa-score-failure-fire-track',
    keyword: '콜센터 통화품질 점수 미달 해고',
    questionKeyword: '콜센터에서 통화 품질(QA) 점수가 3개월 연속 기준 미달이라며 해고됐어요. 평가가 객관적이지 않은데요.',
    ctaKeyword: '콜센터 QA 점수 미달 해고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '콜센터 QA 점수 미달 해고 — 5단계 평가 객관성·개선기회 다툼 | 로앤가이드',
      description:
        '콜센터 QA 점수 미달로 해고됐다면 평가 객관성·기준 사전 고지·교육기회 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"콜센터에서 2년 일했는데 \'최근 3개월 QA 점수가 회사 기준 85점 미달\'이라며 해고 통보를 받았습니다. QA 평가표는 회사 내부 별도 양식이고 평가자도 매번 다르며, 같은 통화도 평가자에 따라 점수가 크게 차이 났어요. 기준 점수가 어떻게 산정됐는지 안내받은 적이 없고, 점수 미달이 누적되는 동안 교육·재배치 같은 개선 기회도 따로 받지 못했습니다." 근무성적·근무능력 불량을 사유로 한 해고는 ① 객관적·합리적 평가 기준 ② 평가 결과 통지·소명 기회 ③ 개선 기회 부여 ④ 사회통념상 고용관계 유지가 불가능할 정도 4가지 요건을 충족해야 정당성이 인정되는 영역입니다. 피해자라면 ① 평가표·기준 ② 평가자 다수·기록 ③ 개선 기회 ④ 부당해고 구제 ⑤ 민사 5중 트랙이 가능한 트랙. 대응은 ① 평가 자료 ② 소명·교육 ③ 동료 비교 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 콜센터 QA 점수 해고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 기준·소명·기회·비교·구제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① QA 평가 기준 객관성</strong> — 측정 항목·평가자 다수·기록 보존 여부.</li>\n<li><strong>② 기준 점수 사전 고지</strong> — 해고 기준선·산정 방식 사전 공개.</li>\n<li><strong>③ 개선 기회 부여</strong> — 교육·코칭·재배치 기회 실시 여부.</li>\n<li><strong>④ 동일 등급 동료 처우 비교</strong> — 본인만 해고 시 자의적 운영.</li>\n<li><strong>⑤ 노동위 구제신청 (3개월)</strong> — 평가 절차·실체 다툼.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: QA 점수만으로 즉시 해고 어려운 영역. 평가 객관성·기준 사전 고지·개선 기회·상당성 4요건 모두 충족 여부가 다툼 축입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 평가표·점수 자료 요청 (즉시)</strong> — QA 평가표·점수·평가자 명단 공개 요청.</li>\n<li><strong>2단계 — 소명·교육 기회 자료 (1~2주)</strong> — 면담 기록·교육 프로그램 운영 실적.</li>\n<li><strong>3단계 — 동료 비교·평가 흠결 (2주)</strong> — 동일 점수 동료 처우·평가자 편차.</li>\n<li><strong>4단계 — 노동위 구제신청 (해고일 3개월 내)</strong> — 평가 절차·실체 다툼.</li>\n<li><strong>5단계 — 민사 손해배상</strong> — 정신적 위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">콜센터 QA 점수 미달 해고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 평가·소명·기회 갈래입니다.</strong></p>\n<ul>\n<li><strong>QA 평가표·평가 기준·운영 매뉴얼</strong></li>\n<li><strong>본인 월별 QA 점수·평가자 명단</strong></li>\n<li><strong>해고 기준선·산정 방식 안내 자료</strong></li>\n<li><strong>교육·코칭·재배치 실시 내역</strong></li>\n<li><strong>동일 점수 동료 처우 비교 자료</strong></li>\n<li><strong>해고 통보서·인사위 회의록</strong></li>\n<li><strong>본인 통화 녹취·고객 만족도 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 회사가 QA 평가표·평가자 명단 공개를 거부하면 그 자체가 절차 흠결 사정. 노동위 심문 단계에서 자료제출 명령 요청 가능합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>평가자 편차</strong> — 같은 통화도 평가자별 점수 차이 시 객관성 부정.</li>\n<li><strong>기준선 사전 고지</strong> — 해고 기준 미공개 시 절차 흠결.</li>\n<li><strong>개선 기회 부재</strong> — 교육·코칭 없이 해고 시 정당성 부정 강함.</li>\n<li><strong>QA 구조 자체</strong> — 상대 분포로 일정 비율 미달이 발생하는 구조 다툼.</li>\n<li><strong>동료 점수 흠결</strong> — 같은 점수대 동료 잔류 시 자의적 운영.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 근무성적 불량 해고의 요건',
        summary:
          '대법원 2018다251486(대법원, 2022.09.15 선고) 영역에서 법원은 사용자가 근무성적이나 근무능력이 불량하여 직무를 수행할 수 없는 경우에 해고할 수 있다고 정한 취업규칙 등에 따라 근로자를 해고할 때 그 정당성이 인정되려면 객관적이고 합리적인 평가 결과·평가 결과의 통지와 소명 기회·개선의 기회 부여·사회통념상 고용관계를 계속할 수 없을 정도의 사정이 모두 갖추어져야 한다고 본 사례 흐름이 있습니다.',
        takeaway: 'QA 점수 미달만으로 해고 부족. 평가 객관성·통지·소명·개선 기회·상당성 모두 충족 여부가 다툼 축.',
      },
    ],
    faq: [
      {
        question: 'QA 평가표를 본 적이 없는데 공개 요구할 수 있나요?',
        answer:
          '<strong>본인 평가 결과·기준은 정보공개·자료제출 요청 가능한 영역입니다.</strong> 노동위 자료제출 명령 요청도 가능.',
      },
      {
        question: '같은 통화도 평가자에 따라 점수가 크게 달라요',
        answer:
          '<strong>평가자 편차는 객관성 부정의 핵심 사정입니다.</strong> 평가자별 점수 분포 자료 확보가 출발점.',
      },
      {
        question: '교육은 한 번 받았는데 형식적이었어요',
        answer:
          '<strong>구체적 목표·개선 측정 부재 시 형식 운영으로 평가될 여지가 있습니다.</strong> 운영 실적 자료가 핵심.',
      },
      {
        question: '같은 점수대 동료는 잔류했는데 본인만 해고됐어요',
        answer:
          '<strong>차별·표적 평가 사정으로 다툼 가능한 영역입니다.</strong> 동료 점수·처우 자료가 결정 사정.',
      },
      {
        question: '권고사직 형식이면 다툼이 어렵나요?',
        answer:
          '<strong>의사 하자 + 평가 절차 흠결 결합 다툼 가능한 영역입니다.</strong> 압박 정황 자료 보존.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '하위등급 저성과자 해고', href: '/guide/dismissal/dismissal-evaluation-rank-bottom-firing-track' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
      { label: '징계해고 절차', href: '/guide/dismissal/dismissal-disciplinary-procedure' },
    ],
  },

  // ─── 5. dismissal-contractor-conversion-eve-fire-track ───
  {
    domain: 'dismissal',
    slug: 'dismissal-contractor-conversion-eve-fire-track',
    keyword: '정규직 전환 직전 외주 계약 해지',
    questionKeyword: '2년 계약 외주직으로 일하다 정규직 전환 한 달 전 갑자기 계약 종료 통보를 받았어요.',
    ctaKeyword: '정규직 전환 직전 외주 해지 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '정규직 전환 직전 외주 계약 해지 — 5단계 갱신·전환 기대권 다툼 | 로앤가이드',
      description:
        '정규직 전환 한 달 전 계약 종료 통보를 받았다면 전환 기대권·합리적 이유 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"파견·외주 형식으로 같은 사무실에서 2년 일했고, 회사가 \'2년 후 정규직 전환\'을 구두로 약속했습니다. 면담에서도 \'전환 절차 진행 중\'이라고 안내받았고 전환 자격 평가 시트까지 작성했어요. 그런데 전환 예정일 한 달 전, 갑자기 \'외주 계약이 만료됐다\'며 종료 통보. 같은 외주사 소속 동료 중 일부는 전환됐고 본인만 빠진 정황이 있어요." 도급·외주·파견 등으로 일정 기간 근무한 근로자에게 정규직 전환에 관한 신뢰관계가 형성된 경우, 특별한 사정이 없는 한 정규직으로 전환 채용될 수 있으리라는 기대권이 인정될 여지가 있고, 합리적 이유 없는 채용 거절은 부당해고와 마찬가지로 효력이 부정될 수 있는 영역입니다. 피해자라면 ① 전환 기대권 형성 사정 ② 합리적 이유 부재 ③ 동료 사례 비교 ④ 부당해고 구제 ⑤ 정규직 지위 확인 5중 트랙이 가능한 트랙. 대응은 ① 기대권 ② 거절 사유 ③ 동료 비교 ④ 노동위 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 전환 직전 외주 해지 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 기대권·이유·비교·구제·지위 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 전환 기대권 형성 사정</strong> — 구두 약속·전환 절차 안내·평가 시트.</li>\n<li><strong>② 합리적 이유 부재</strong> — 전환 거절 사유의 객관성·일관성.</li>\n<li><strong>③ 동료 사례 비교</strong> — 같은 외주사 동료 일부 전환 시 자의적 운영.</li>\n<li><strong>④ 노동위 구제신청 (3개월)</strong> — 부당해고 + 갱신·전환 기대권.</li>\n<li><strong>⑤ 정규직 지위 확인 민사</strong> — 지위 회복 + 일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정규직 전환에 관한 신뢰관계가 형성됐다면 합리적 이유 없는 거절은 부당해고와 마찬가지로 효력이 부정될 여지가 있는 영역. 전환 직전 회피 패턴은 핵심 다툼 사정입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 구제 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구제·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 계약·전환 자료 보존 (즉시)</strong> — 계약서·구두 약속 메모·면담 기록.</li>\n<li><strong>2단계 — 기대권 형성 자료 (1~2주)</strong> — 전환 절차 안내·평가 시트·교육 이력.</li>\n<li><strong>3단계 — 동료 전환 사례 자료 (2주)</strong> — 같은 외주사·같은 직군 동료 전환 명단.</li>\n<li><strong>4단계 — 노동위 구제신청 (해지일 3개월 내)</strong> — 부당해고 + 갱신·전환 기대권.</li>\n<li><strong>5단계 — 민사 정규직 지위 확인·손해배상</strong> — 지위 회복·일실수입·정신적 위자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 부당해고 구제신청 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">정규직 전환 직전 외주 해지 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dismissal" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·기대권·동료 갈래입니다.</strong></p>\n<ul>\n<li><strong>외주·파견 계약서·근무 이력 자료</strong></li>\n<li><strong>정규직 전환 구두 약속 메모·녹취</strong></li>\n<li><strong>전환 절차 안내 메일·교육 이력</strong></li>\n<li><strong>전환 자격 평가 시트·면담 기록</strong></li>\n<li><strong>같은 외주사·같은 직군 동료 전환 자료</strong></li>\n<li><strong>계약 종료 통보서·사유서</strong></li>\n<li><strong>같은 사무실 근무 정황·업무 지시 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 전환 기대권은 \"전환 절차 안내 + 평가 시트 + 동료 일부 전환\" 결합 패턴으로 입증력 강함. 구두 약속만 있을 때는 면담 메모·녹취가 결정 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기대권 형성</strong> — 약속·절차·평가 시트 결합 시 인정 영역.</li>\n<li><strong>거절 사유 합리성</strong> — \"계약 만료\"만으로 정당성 인정 어려움.</li>\n<li><strong>동료 전환 사례</strong> — 같은 외주사 동료 전환 시 자의적 운영.</li>\n<li><strong>회피 의도 정황</strong> — 전환 한 달 전 종료는 핵심 패턴.</li>\n<li><strong>실질 사용자성</strong> — 같은 사무실·업무지시 결합 시 도급회사 사용자성 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>중앙노동위원회 044-202-8200</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정규직 전환 채용 기대권',
        summary:
          '대법원 2021두39034(대법원, 2023.06.15 선고) 영역에서 법원은 도급업체가 업무 일부를 용역업체에 위탁하다가 자회사를 설립해 동일 업무를 위탁하는 경우, 자회사가 용역업체 소속 근로자를 정규직으로 채용해 새롭게 근로관계가 성립될 것이라는 신뢰관계가 형성되었다면 특별한 사정이 없는 한 근로자에게 정규직 전환 채용에 관한 기대권이 인정되며, 합리적 이유 없는 채용 거절은 부당해고와 마찬가지로 효력이 없다고 본 사례 흐름이 있습니다.',
        takeaway: '전환 기대권 + 합리적 이유 없는 거절 = 부당해고와 동일 효력. 신뢰관계 형성 사정 입증이 다툼 축.',
      },
    ],
    faq: [
      {
        question: '구두 약속만 있고 서면이 없는데 기대권 인정될까요?',
        answer:
          '<strong>구두 약속도 절차 안내·평가 시트와 결합되면 신뢰관계 형성 사정으로 평가될 영역입니다.</strong> 면담 메모·녹취가 핵심.',
      },
      {
        question: '"외주 계약이 만료됐다"는 회사 주장은 어떻게 다투나요?',
        answer:
          '<strong>형식적 계약 종료가 곧 합리적 이유는 아닙니다.</strong> 전환 거절의 객관적·일관성 있는 사유 입증이 필요한 영역.',
      },
      {
        question: '같은 외주사 동료는 전환됐는데 본인만 빠졌어요',
        answer:
          '<strong>자의적 운영의 강력 사정입니다.</strong> 동료 전환 명단·평가 비교 자료가 결정 사정.',
      },
      {
        question: '외주 회사가 다른 사업장에 재배치한다고 하는데요?',
        answer:
          '<strong>재배치는 정규직 전환 기대권 침해와 별개 영역입니다.</strong> 도급회사 사용자성과 동시에 다툼 가능.',
      },
      {
        question: '권고사직서를 받았는데 압박이었어요',
        answer:
          '<strong>의사 하자 + 전환 기대권 침해 결합 다툼 가능한 영역입니다.</strong> 압박 정황 자료가 출발점.',
      },
    ],
    cta: { text: '부당해고 구제신청 순서, AI로 정리하기', link: '/chat?domain=dismissal' },
    internalLinks: [
      { label: '부당해고 구제신청', href: '/guide/dismissal/unfair-dismissal-relief-application' },
      { label: '기간만료 갱신기대권', href: '/guide/dismissal/dismissal-fixed-term-renewal-right' },
      { label: '해고 증거 수집', href: '/guide/dismissal/dismissal-evidence-collection' },
      { label: '노동위 절차', href: '/guide/dismissal/dismissal-labor-commission-procedure' },
      { label: '징계해고 절차', href: '/guide/dismissal/dismissal-disciplinary-procedure' },
    ],
  },
];
