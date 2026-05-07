import { SpokePage } from '../spoke-pages';

// batch58 divorce — 4개:
// 1. 위장이혼 + 채권자 사해행위 취소
// 2. 유책배우자 이혼청구 예외 인정
// 3. 외도 디지털 증거 (카톡·SNS·위치) 수집
// 4. 자녀 양육비 미합의 협의이혼 차단
//
// 고유 존재 이유:
// 1. 이 페이지는 배우자 채무 회피 목적 위장이혼 의심에 직면한 채권자가 사해행위 취소 + 가장이혼 무효 4단계 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 본인이 유책배우자라도 이혼을 청구하고 싶은 배우자가 대법원 2021므14258 예외 인정 4가지 요건을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 배우자 외도를 의심하는 피해자가 카톡·SNS·위치정보 등 디지털 증거 수집의 적법성 + 증거능력 4단계 트랙을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 자녀가 있는데 양육 합의가 안 된 부부가 협의이혼 차단 + 재판이혼 전환 4단계 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch58Divorce: SpokePage[] = [
  // ─── 1. divorce / divorce-sham-divorce-creditor-fraudulent-transfer ───
  {
    domain: 'divorce',
    slug: 'divorce-sham-divorce-creditor-fraudulent-transfer',
    keyword: '위장이혼 채권자 사해행위 취소',
    questionKeyword: '채무자 부부가 위장이혼하면서 재산을 배우자에게 넘겼어요. 사해행위로 취소할 수 있나요?',
    ctaKeyword: '위장이혼 사해행위 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '위장이혼 사해행위 취소 — 4단계 다툼 | 로앤가이드',
      description:
        '채무자 부부의 위장이혼·재산분할 명목 재산 도피로 채권 회수가 막혔다면 사해행위 취소 + 가장이혼 무효 4단계 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"채무자가 사업 부도 직전 \'협의이혼\' 신고를 하더니 부동산을 배우자 명의로 넘기고 본인은 사실상 빈털터리가 됐어요. 그런데 둘은 여전히 같이 살고 있고요. 위장이혼이라고 의심되는데 채권자로서 어떻게 되돌릴 수 있나요?" 위장이혼(가장이혼)은 ① 협의이혼 신고 후 사실상 부부생활이 계속 유지되는 정황 ② 재산분할·증여 등 명목으로 재산이 일방으로 이전 ③ 채무 회피·강제집행 면탈 의도 결합 시 의심되는 영역입니다. 채권자는 ① 채권자취소권(민법 제406조) ② 가장이혼 무효 주장 ③ 강제집행 정지 ④ 조세범 처벌(체납자 대상) 4가지 트랙으로 대응 검토 가능. 대법원 2013도10477 판결은 협의이혼 신고 후에도 사실혼 관계가 유지되면 재산분할 약정은 효력이 발생하지 않는다고 보아, 위장이혼 정황이 입증되면 재산 환원 트랙이 열리는 영역으로 평가됩니다.</p>',
    sections: [
      {
        title: 'Q. 위장이혼 사해행위 4단계 다툼 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실혼 지속 입증·재산이전 추적·사해행위 구성·취소 청구 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실혼 지속 입증</strong> — 협의이혼 신고 후에도 같은 주소 거주·생활비 공유·자녀 공동양육·SNS 부부 행세 정황. 사실혼 유지면 재산분할 약정 효력 다툼 영역(2013도10477).</li>\n<li><strong>② 재산이전 추적</strong> — 부동산 등기부 변동·예금 이체·차량 명의 변경 시점이 이혼 신고와 근접한지 확인.</li>\n<li><strong>③ 사해행위 구성요건 (민법 제406조)</strong> — 채무자가 채무초과 상태 + 일반 채권자에 대한 공동담보 감소 + 채무자 사해의사 결합. 수익자 악의는 추정 영역.</li>\n<li><strong>④ 채권자취소권 행사</strong> — 사해행위를 안 날로부터 1년·법률행위가 있은 날로부터 5년 내 취소 청구. 부동산은 등기명의 환원, 금전은 가액배상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 위장이혼은 외형상 합법 이혼이라도 실질 사실혼 유지 + 재산 도피 의도면 재산분할 약정 효력 부정 + 사해행위 취소 트랙. 시효 1년·5년 매우 짧아 의심 즉시 자료 수집 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 사해행위 취소 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 수집 → 가처분 → 취소 소송 → 변론 → 강제집행 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 수집 (즉시)</strong> — 부부 등기부·주민등록·생활비 정황·SNS·자녀 양육 정황·재산 이전 시점·채무자 채무 상태.</li>\n<li><strong>2단계 — 부동산 가처분 (의심 즉시)</strong> — 처분금지가처분으로 추가 처분 차단. 가액배상 대비.</li>\n<li><strong>3단계 — 채권자취소 소송 제기 (시효 내)</strong> — 사해행위를 안 날로부터 1년·있은 날로부터 5년 내. 도과 시 권리 소멸 영역.</li>\n<li><strong>4단계 — 변론·증거조사</strong> — 사실혼 지속 정황 + 채무 회피 의도 본격 다툼. 가사조사관 진술도 활용 영역.</li>\n<li><strong>5단계 — 환원·강제집행</strong> — 부동산은 등기 환원, 금전은 가액배상 후 강제집행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">위장이혼 사해행위 4단계 다툼 포인트를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실혼 지속 자료 + 재산이전 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>채무자 부부 등기부·주민등록</strong> — 같은 주소 거주 정황.</li>\n<li><strong>생활비 정황 자료</strong> — 공동 통장·관리비·식비 결제.</li>\n<li><strong>자녀 양육 정황</strong> — 공동 양육·학교 보호자 등록.</li>\n<li><strong>SNS·인터뷰 자료</strong> — 이혼 신고 후 부부 행세 정황.</li>\n<li><strong>부동산·예금 이전 시점</strong> — 이혼 신고와의 시간적 근접성.</li>\n<li><strong>채무자 채무 상태</strong> — 채무초과 입증(부채 합계 vs 잔여 자산).</li>\n<li><strong>이혼협의서·양육비부담조서</strong> — 재산분할 약정 내용.</li>\n<li><strong>본인 채권 자료</strong> — 채권 발생 시점·금액·집행권원.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이혼 신고와 재산이전 사이 시간 간격이 짧을수록 사해행위 의심 강화 영역. 6개월~1년 내 이전이라면 의도성 다툼이 강한 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 채무자 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"진짜 이혼이고 재산분할은 정당하다" 주장 반박</strong> — 협의이혼 후 사실혼 유지 정황 입증 시 재산분할 약정 효력 다툼(2013도10477). 같은 주소·생활비·자녀 양육 결합 자료 핵심.</li>\n<li><strong>"수익자(배우자) 선의" 주장 반박</strong> — 배우자는 채무자와 가장 밀접한 관계로 악의 추정. 채무 상황을 몰랐다는 입증 책임 수익자 부담.</li>\n<li><strong>"채무자 채무초과 아니다" 주장 반박</strong> — 이전 시점 기준 자산·부채 산정. 사해행위 후 자산 회복은 무관한 영역.</li>\n<li><strong>시효 도과 위험</strong> — 안 날로부터 1년·있은 날로부터 5년. 의심 즉시 변호사 자문 + 가처분 신청 권장.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 채권자취소·민사 무료 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정·이혼 관련 상담.</li>\n<li><strong>국세청 (체납자 사해행위)</strong> — 조세범 처벌·체납세 추징 정황 신고.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위장이혼 후 사실혼 유지 시 재산분할 약정 효력',
        summary:
          '대법원 2013도10477 사건(대법원, 2013.10.24 선고)에서 법원은 협의이혼신고가 되었다고 할지라도 그 후에도 혼인생활의 실체가 계속 존속하는 사실혼 관계가 유지되고 있었다면 협의이혼을 전제로 한 재산분할 약정은 효력이 발생하지 않는다고 판시했습니다. 따라서 협의이혼 신고 후에도 사실혼 관계를 유지하고 있는 한 협의이혼 신고 전에 형성한 부부 공동재산은 여전히 부부 공동재산이며, 체납자인 부부 일방이 그 공동재산에 대해 아무런 권리가 없는 것처럼 계약을 체결하는 행위는 조세를 면탈할 목적의 허위 계약 체결이라고 본 사례입니다. 또한 대법원 2024다208315 판결은 채무초과 상태 채무자의 상속재산 분할협의 시 자기 상속분 권리 포기가 사해행위에 해당한다고 판시했습니다.',
        takeaway: '위장이혼 + 재산분할 명목 재산이전은 사실혼 지속 정황 + 채무 회피 의도 입증 시 재산분할 약정 효력 부정 + 사해행위 취소 트랙이 열리는 사례가 있어, 채권자는 시효(1년·5년) 내 즉시 가처분·취소 소송 검토 영역입니다.',
      },
    ],
    faq: [
      {
        question: '협의이혼은 합법인데 무효 주장 가능한가요?',
        answer:
          '<strong>가장이혼은 외형상 합법이라도 실질 부부생활 지속 + 채무 회피 의도면 재산분할 약정 효력 다툼 영역입니다.</strong> 사실혼 유지 정황 자료가 핵심.',
      },
      {
        question: '채권자취소권 시효는 언제부터 시작되나요?',
        answer:
          '<strong>사해행위를 안 날로부터 1년, 있은 날로부터 5년입니다(민법 제406조).</strong> "안 날"은 사해행위 + 사해의사를 알게 된 날 기준. 시효 매우 짧아 즉시 대응 권장.',
      },
      {
        question: '배우자 선의면 취소 못 하나요?',
        answer:
          '<strong>배우자(수익자)는 채무자와 가장 밀접해 악의 추정 영역입니다.</strong> 채무 상황을 전혀 몰랐다는 입증 책임은 수익자 부담. 가족 관계는 악의 강한 정황.',
      },
      {
        question: '부동산 환원이 안 되면 어떻게 되나요?',
        answer:
          '<strong>전매·담보 설정 등으로 환원 어려우면 가액배상 받습니다.</strong> 사해행위 시점 가액 기준 금전 배상 + 강제집행. 추가 처분 막기 위해 가처분 즉시 신청 권장.',
      },
      {
        question: '체납세 사건이면 신고 가능한가요?',
        answer:
          '<strong>국세징수법 위반·조세범처벌법 위반 신고 가능 영역입니다.</strong> 위장이혼 + 재산이전 정황 입증 시 형사 처벌 + 조세 추징 트랙. 국세청 또는 검찰 신고.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '숨긴 재산 추적', href: '/guide/divorce/divorce-hidden-asset-discovery' },
      { label: '재산처분 사유 입증', href: '/guide/divorce/divorce-asset-disposal-grounds' },
      { label: '재산분할 기준시점', href: '/guide/divorce/divorce-property-division-cutoff-date' },
      { label: '재산분할 vs 위자료', href: '/guide/divorce/divorce-property-division-vs-alimony-comparison' },
      { label: '배우자 사업 채무 연대보증', href: '/guide/divorce/divorce-spouse-business-debt-cosign' },
    ],
  },

  // ─── 2. divorce / divorce-at-fault-spouse-exceptional-claim ───
  {
    domain: 'divorce',
    slug: 'divorce-at-fault-spouse-exceptional-claim',
    keyword: '유책배우자 이혼청구 예외 인정',
    questionKeyword: '제가 유책배우자인데 이혼 청구 가능한가요? 예외 인정 요건이 어떻게 되나요?',
    ctaKeyword: '유책배우자 이혼청구 예외 점검',
    type: 'Q&A형',
    perspective: 'neutral',
    meta: {
      title: '유책배우자 이혼청구 — 4가지 예외 인정 요건 | 로앤가이드',
      description:
        '본인이 유책배우자라도 일정 요건 충족 시 이혼청구가 예외적으로 허용되는 영역입니다. 4가지 예외 인정 요건과 입증 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"제가 외도로 별거에 들어간 지 8년이 됐습니다. 이미 새 가정을 꾸려 자녀도 있고 배우자에게도 매월 생활비를 보내고 있어요. 이제 법적으로 이혼하고 싶은데, 유책배우자라 청구가 거부될 거라고 들었습니다. 정말 청구 자체가 안 되는 건가요?" 한국 민법 제840조는 원칙적으로 \'유책주의\'(혼인 파탄에 책임 있는 배우자는 이혼 청구 불가) 입장이지만, 대법원 2021므14258 판결은 ① 유책성을 상쇄할 정도로 상대방·자녀 보호·배려 ② 세월 경과로 유책성·정신적 고통 약화 ③ 혼인계속의사 부재 ④ 혼인관계 회복 불가능한 파탄 4가지 요건 결합 시 예외적 허용 가능한 영역으로 봤습니다. 즉 유책배우자라도 \'책임 상쇄 + 혼인 회복 불가능\' 입증 시 이혼청구 트랙이 열리는 영역이에요.</p>',
    sections: [
      {
        title: 'Q. 유책배우자 이혼청구 4가지 예외 요건',
        content:
          '<p><strong style="color:#1e3a5f">A. 책임 상쇄·세월 경과·회복 불가능·계속의사 부재 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 책임 상쇄 (보호·배려)</strong> — 별거 후 생활비 지원·자녀 양육비 지급·정신적 배려 정황. 유책 책임을 상쇄할 정도의 보호 노력 입증.</li>\n<li><strong>② 세월 경과</strong> — 별거 기간이 길수록 파탄 당시 유책성·정신적 고통이 약화되는 영역. 일반적으로 5~10년 이상 별거가 의미 있는 정황.</li>\n<li><strong>③ 혼인관계 회복 불가능</strong> — 부부공동생활 회복 시도가 의미 없는 정황. 별거 장기화·새 가정·연락 두절 결합.</li>\n<li><strong>④ 상대방 혼인계속의사 부재 또는 전환</strong> — 보복·재산 보전 목적이 아니라면 상대방 의사 없는 정황 평가. 진정한 회복 의지 vs 형식적 거부 구분.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 유책배우자 청구는 원칙 거부지만 \'책임 상쇄 + 회복 불가능\' 결합 시 예외 인정 영역. 별거 8~10년 + 생활비 지속 지급 + 자녀 양육 협조 결합이 핵심 정황.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 정리 → 협의 시도 → 조정 → 변론 → 판결 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 정리 (즉시)</strong> — 별거 기간·생활비·양육비 지급 내역·상대방 의사 정황·자녀 양육 협조.</li>\n<li><strong>2단계 — 협의이혼 시도 (가능한 경우)</strong> — 합의되면 협의이혼 (자녀 있으면 숙려 3개월·없으면 1개월).</li>\n<li><strong>3단계 — 조정 (재판이혼 시 의무)</strong> — 가정법원 조정. 양 당사자 출석 의무. 합의 안 되면 본안 소송.</li>\n<li><strong>4단계 — 본안 변론 (조정 결렬 시)</strong> — 유책성 상쇄 정황·세월 경과·회복 불가능 본격 변론. 통상 1심 6~12개월.</li>\n<li><strong>5단계 — 판결·항소</strong> — 예외 인정 시 이혼·위자료·재산분할 결정. 거부 시 항소 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">유책배우자 이혼청구 예외 4가지 요건을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 책임 상쇄 자료 + 회복 불가능 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>별거 기간 입증</strong> — 주민등록·임대차계약·생활 정황 자료.</li>\n<li><strong>생활비·양육비 지급 내역</strong> — 송금 내역·정기 지급 정황.</li>\n<li><strong>자녀 양육 협조 자료</strong> — 면접교섭·교육비·의료비 분담.</li>\n<li><strong>상대방 의사 정황</strong> — 메시지·통화·합의 시도 자료.</li>\n<li><strong>혼인 회복 시도 자료</strong> — 상담·복귀 시도·거절 정황.</li>\n<li><strong>본인 재산·소득 자료</strong> — 위자료·재산분할 산정용.</li>\n<li><strong>혼인관계증명서·가족관계증명서</strong> — 기본 증명.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 별거 후 지속적 생활비 송금 내역 + 자녀 양육 협조 정황이 \'책임 상쇄\'의 핵심 자료. 단순 별거만으로는 예외 인정 어려운 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 상대방 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"진정한 혼인계속의사 있다" 주장 검토</strong> — 보복·재산 보전 목적이 아닌 진정한 회복 의지 입증 시 청구 거부 영역. 의사의 진정성 평가가 핵심.</li>\n<li><strong>"보호·배려 부족하다" 주장 반박</strong> — 생활비·양육비·정신적 배려의 \'정도\'가 핵심. 단순 송금 외 자녀 행사 참석·연락 정황 등 결합 자료 효과적.</li>\n<li><strong>"세월 경과 짧다" 주장 검토</strong> — 별거 5년 미만은 예외 인정 어려운 영역. 5~10년 이상 + 회복 시도 결합 자료 강화 필요.</li>\n<li><strong>위자료 청구 결합</strong> — 유책배우자가 청구하더라도 상대방의 위자료 청구는 별도. 청구 인정되더라도 위자료 부담 영역(통상 사례별 산정 영역).</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 이혼·가사 무료 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n<li><strong>다누리콜센터 1577-1366</strong> — 다문화·가정 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 유책배우자 이혼청구 예외 인정 기준',
        summary:
          '대법원 2021므14258 사건(대법원, 2022.06.16 선고)에서 법원은 재판상 이혼원인에 관한 민법 제840조는 원칙적으로 유책주의를 채택하고 있다고 보면서도, 이혼청구 배우자의 유책성을 상쇄할 정도로 상대방 배우자 및 자녀에 대한 보호와 배려가 이루어진 경우, 세월의 경과에 따라 파탄 당시 현저하였던 유책배우자의 유책성과 상대방 배우자가 받은 정신적 고통이 약화되어 쌍방의 책임의 경중을 엄밀히 따지는 것이 더 이상 무의미할 정도가 된 경우 등 혼인 파탄의 책임이 반드시 이혼청구를 배척해야 할 정도로 남아있지 않은 경우 그러한 배우자의 이혼청구는 예외적으로 허용될 수 있다고 판시했습니다. 또한 대법원 2021므12108 판결은 부부 혼인관계가 돌이킬 수 없을 정도로 파탄된 경우 이혼 청구를 받아들여야 한다고 판시했습니다.',
        takeaway: '유책배우자라도 책임 상쇄 + 세월 경과 + 회복 불가능 결합 시 이혼청구 예외 인정 트랙이 열리는 사례가 있어, 별거 기간·생활비 지급·양육 협조 자료를 정리하면 본격 검토 영역입니다.',
      },
    ],
    faq: [
      {
        question: '몇 년 별거하면 유책배우자도 이혼 가능한가요?',
        answer:
          '<strong>일률적 기준은 아니지만 5~10년 이상 별거 + 책임 상쇄 결합이 의미 있는 영역입니다.</strong> 별거 기간만 길어도 부족하고 보호·배려 정황 결합이 핵심.',
      },
      {
        question: '생활비를 얼마나 보내야 책임 상쇄로 평가되나요?',
        answer:
          '<strong>금액보다는 지속성·자발성이 핵심 영역입니다.</strong> 정기적 송금 + 자녀 양육비 + 생활 변화 시 추가 지원 정황이 책임 상쇄 평가에 유의.',
      },
      {
        question: '상대방이 이혼 거부하면 100% 청구 거부되나요?',
        answer:
          '<strong>거부 의사의 진정성 평가가 핵심 영역입니다.</strong> 보복·재산 보전 목적의 형식적 거부 vs 진정한 혼인계속의사 구분. 진정성 부족 시 예외 인정 검토 영역.',
      },
      {
        question: '유책배우자 청구가 인용되면 위자료는 어떻게 되나요?',
        answer:
          '<strong>이혼 인정과 별도로 상대방의 위자료 청구는 가능 영역입니다.</strong> 유책배우자는 청구 인용되더라도 상대방에게 위자료 지급 부담. 사례별 산정 영역.',
      },
      {
        question: '재산분할은 유책 여부와 관련 있나요?',
        answer:
          '<strong>재산분할은 기여도 평가이며 유책 여부와 직접 관련 없는 영역입니다.</strong> 유책배우자라도 재산 형성·유지 기여도에 따라 분할 청구 가능. 위자료와 별도 영역.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '유책배우자 이혼 신청', href: '/guide/divorce/at-fault-spouse-divorce-filing' },
      { label: '이혼소장 기각 재청구', href: '/guide/divorce/divorce-petition-rejected-grounds-retry' },
      { label: '위자료 산정 표준', href: '/guide/divorce/divorce-alimony-calculation-standard' },
      { label: '재판이혼 vs 협의이혼', href: '/guide/divorce/divorce-mediation-vs-trial-strategy' },
      { label: '재산분할 항목 종합', href: '/guide/divorce/divorce-property-division-comprehensive' },
    ],
  },

  // ─── 3. divorce / divorce-affair-digital-katalk-sns-evidence ───
  {
    domain: 'divorce',
    slug: 'divorce-affair-digital-katalk-sns-evidence',
    keyword: '외도 카톡 SNS 위치정보 증거',
    questionKeyword: '배우자 외도 의심돼서 카톡·SNS·위치정보를 확인했어요. 증거로 쓸 수 있나요?',
    ctaKeyword: '외도 디지털 증거 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '외도 디지털 증거 — 4단계 적법 수집 가이드 | 로앤가이드',
      description:
        '배우자 외도 의심으로 카톡·SNS·위치정보 등 디지털 증거를 수집할 때 적법성 + 증거능력 4단계 가이드를 지금 확인하세요.',
    },
    intro:
      '<p>"배우자가 늦은 시간 외출이 잦아지고 휴대폰을 들고 잠들기 시작했어요. 의심돼서 잠깐 본 카톡에 부정행위 정황이 있었습니다. 이 카톡 캡처가 이혼소송 증거가 될까요? 혹시 통신비밀보호법 위반 아닌가요?" 외도 디지털 증거는 ① 카톡·문자 ② SNS·이메일 ③ 위치정보·내비 기록 ④ 차량 블랙박스 등 4가지 영역으로 구분됩니다. 적법성은 \'수집 방법\'에 따라 달라지는 영역이에요. 본인이 직접 받은 메시지·공개된 SNS는 적법 수집 영역, 상대방 비밀번호 무단 해독·도청·위치 추적기는 통신비밀보호법·개인정보보호법 위반 위험 영역. 대법원 2025므10716 판결은 부정행위가 부부공동생활을 침해해 정신적 고통을 가하는 경우 불법행위를 구성한다고 판시했고, 위자료 산정에는 변론에 나타나는 모든 사정이 종합 참작되는 영역입니다(2024므11526).</p>',
    sections: [
      {
        title: 'Q. 외도 디지털 증거 4단계 점검 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 카톡·SNS·위치·차량 4영역으로 적법성과 증거능력을 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 카톡·문자 메시지</strong> — 본인 휴대폰 수신 메시지·공유 가족 단톡방은 적법. 배우자 휴대폰 무단 해독·복원은 통신비밀보호법·개인정보보호법 위반 위험 영역.</li>\n<li><strong>② SNS·이메일</strong> — 공개 SNS(인스타·페북 공개 게시물)는 적법 수집 영역. 비공개 계정 무단 접속은 정보통신망법 위반 위험.</li>\n<li><strong>③ 위치정보·내비 기록</strong> — 본인 명의 차량 내비 기록·하이패스 내역은 적법. 배우자 휴대폰 GPS 무단 추적·위치추적기 부착은 위치정보법 위반 영역.</li>\n<li><strong>④ 차량 블랙박스·CCTV</strong> — 본인 명의 차량 블랙박스는 적법. 호텔·모텔 입출입 CCTV는 사업자 협조 또는 변호사 사실조회 신청 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 외도 증거는 \'적법 수집\'이 핵심. 위법 수집 증거는 형사 책임 + 증거능력 부정 위험 영역. 가능하면 본인 명의 자료·공개 자료·전문가 의뢰 (탐정·변호사 사실조회) 트랙 활용.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 외도 입증 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 백업 → 공증 → 사실조회 → 청구 → 변론 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 백업·보존 (즉시)</strong> — 본인 휴대폰 카톡·문자·통화 기록 백업. 시점·내용 확인 가능한 형태로 보존.</li>\n<li><strong>2단계 — 공증·내용증명 (1~2주)</strong> — 핵심 증거는 공증사무소에서 \'화면 캡처 인증\' 받아 증거능력 강화.</li>\n<li><strong>3단계 — 변호사 사실조회 신청</strong> — 호텔·모텔 입출입·신용카드 결제·통화 내역은 변호사 통한 사실조회 또는 법원 보존 신청 트랙.</li>\n<li><strong>4단계 — 이혼·위자료 청구 제기</strong> — 부정행위 입증 자료 + 위자료 청구 (배우자 + 상간자 공동불법행위, 2025므10716).</li>\n<li><strong>5단계 — 변론·증거조사</strong> — 적법성 다툼 + 부정행위 인정 본격 변론. 위자료 사례별 산정 영역.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">외도 디지털 증거 4단계 점검 포인트를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 적법 수집 자료 + 사실조회 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>본인 휴대폰 카톡·문자 백업</strong> — 시점·발신자·수신자 명확하게.</li>\n<li><strong>공개 SNS 캡처</strong> — 인스타·페북 공개 게시물·태그.</li>\n<li><strong>본인 차량 블랙박스·내비</strong> — 가족 차량 이용 시 적법 영역.</li>\n<li><strong>본인 명의 신용카드 결제 내역</strong> — 가족 카드 결제 정황.</li>\n<li><strong>호텔·모텔 입출입 CCTV</strong> — 변호사 사실조회 신청 자료.</li>\n<li><strong>통화 내역 (본인 명의)</strong> — 통신사 발급 통화 내역.</li>\n<li><strong>증인 진술서</strong> — 목격자·동료 진술.</li>\n<li><strong>전문가(흥신소·탐정) 보고서</strong> — 합법 범위 내 미행·사진 자료(불법 수집 회피).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 디지털 증거는 \'시점·작성자·내용\'이 명확해야 증거능력 강화 영역. 캡처 시 화면 시계·OS 정보 함께 보이게 캡처. 공증 받으면 위변조 다툼 차단.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 상대방 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"위법 수집 증거" 주장 반박</strong> — 본인 명의 자료·공개 SNS·가족 단톡방 등 적법 수집 정황 입증 시 증거능력 인정 영역.</li>\n<li><strong>"단순 친구 관계" 주장 반박</strong> — 카톡 시간대(심야)·내용(연인 표현)·만남 빈도·호텔 입출입 정황 결합 시 부정행위 인정 영역.</li>\n<li><strong>위법 수집 시 형사 책임 위험</strong> — 통신비밀보호법(도청·해킹)·정보통신망법(무단 접근)·위치정보법(추적) 위반 시 형사 처벌 + 증거 부정. 변호사 자문 권장.</li>\n<li><strong>상간자 위자료 별도 청구</strong> — 배우자 + 상간자 공동불법행위(2025므10716). 부진정연대채무. 사례별 산정 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 이혼·증거 수집 무료 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n<li><strong>다누리콜센터 1577-1366</strong> — 다문화·가정 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부정행위 입증과 위자료 산정 기준',
        summary:
          '대법원 2025므10716 사건(대법원, 2026.01.29 선고)에서 법원은 부부의 일방이 부정행위를 한 경우에 부부의 일방은 그로 인하여 배우자가 입은 정신적 고통에 대하여 불법행위에 의한 손해배상의무를 진다고 판시했습니다. 또한 제3자(상간자)가 부부 일방과 부정행위를 함으로써 부부공동생활을 침해하거나 그 유지를 방해하고 그에 대한 배우자로서의 권리를 침해해 정신적 고통을 가하는 행위도 원칙적으로 불법행위를 구성하며, 부부 일방과 제3자가 부담하는 불법행위책임은 공동불법행위책임으로서 부진정연대채무 관계에 있다고 보았습니다. 또한 대법원 2024므11526 판결은 위자료 액수 산정 시 변론에 나타나는 모든 사정이 종합 참작된다고 판시했습니다.',
        takeaway: '외도 입증 + 위자료 청구는 본인 + 상간자 공동불법행위 트랙이 가능한 영역으로, 적법 수집 디지털 증거를 정리하면 위자료 청구 + 사례별 산정 트랙이 열리는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '배우자 휴대폰 잠금해제해서 본 카톡, 증거로 쓸 수 있나요?',
        answer:
          '<strong>위법 수집 위험 영역입니다(통신비밀보호법·개인정보보호법).</strong> 형사 책임 + 증거능력 부정 위험. 본인 휴대폰 수신 메시지·가족 단톡방 등 적법 자료 우선 수집 권장.',
      },
      {
        question: '흥신소·탐정 의뢰는 합법인가요?',
        answer:
          '<strong>공인탐정업법상 신원 확인·미행 등 일정 범위는 합법 영역입니다.</strong> 다만 도청·무단 위치추적 등은 위법. 합법 범위 + 보고서 형태 결과물이 안전 영역.',
      },
      {
        question: '공개 인스타 게시물 캡처도 증거 되나요?',
        answer:
          '<strong>공개 SNS 게시물은 적법 수집 영역입니다.</strong> 비공개·DM은 무단 접속 위험. 캡처 시 시점·계정명·게시 일시 명확하게.',
      },
      {
        question: '상간자에게도 위자료 받을 수 있나요?',
        answer:
          '<strong>가능 영역입니다(대법원 2025므10716).</strong> 배우자 + 상간자 공동불법행위로 부진정연대채무. 다만 상간자 위자료가 인정되려면 \'부부공동생활 침해의 고의·과실\' 입증 필요.',
      },
      {
        question: '위자료 얼마 받을 수 있나요?',
        answer:
          '<strong>사례별 다르지만 외도 위자료는 1,000~3,000만원 수준이 검토되는 사례가 자주 보이는 영역입니다.</strong> 부정행위 정도·기간·혼인 기간·자녀 유무 종합 산정 영역.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '외도 부인 증거 강화', href: '/guide/divorce/divorce-affair-denial-evidence-strengthening' },
      { label: '데이팅앱 외도 증거', href: '/guide/divorce/divorce-dating-app-affair-evidence' },
      { label: '외도 위자료 증거 수집', href: '/guide/divorce/divorce-alimony-affair-evidence-collection-trial' },
      { label: '제3자 외도 청구', href: '/guide/divorce/divorce-third-party-affair-claim' },
      { label: '위자료 산정 표준', href: '/guide/divorce/divorce-alimony-calculation-standard' },
    ],
  },

  // ─── 4. divorce / divorce-consensual-no-custody-agreement-blocked ───
  {
    domain: 'divorce',
    slug: 'divorce-consensual-no-custody-agreement-blocked',
    keyword: '협의이혼 양육 합의 미합의 차단',
    questionKeyword: '자녀가 있는데 양육·양육비 합의가 안 돼요. 협의이혼 가능한가요?',
    ctaKeyword: '양육 미합의 협의이혼 점검',
    type: 'Q&A형',
    perspective: 'neutral',
    meta: {
      title: '양육 미합의 협의이혼 — 4단계 전환 가이드 | 로앤가이드',
      description:
        '미성년 자녀가 있는데 양육·양육비 합의가 안 돼 협의이혼이 막혔다면 양육비부담조서 + 재판이혼 전환 4단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼은 합의했는데 자녀 친권·양육·양육비 액수에서 의견이 갈려요. 양육 합의가 안 되면 협의이혼 자체가 안 된다고 들었습니다. 어떻게 진행해야 하나요?" 미성년 자녀가 있는 부부의 협의이혼은 ① 자녀양육·친권자 협의서(법원 양식) ② 양육비부담조서(법원 작성) 두 가지가 필수 영역입니다(가족관계의 등록 등에 관한 법률 제74조·민법 제837조). 합의 안 되면 협의이혼 자체가 차단되는 영역. 이때는 ① 가정법원 양육비 산정기준표 활용 협의 재시도 ② 가사조사관 조정 ③ 재판이혼 전환 ④ 양육비 일시금 약정의 효력 검토 4단계 트랙 검토 영역입니다. 부산가법 2014드단201540 판결은 양육비 일시금 약정이 자녀 복리에 현저히 반하면 효력이 없다고 판시한 사례가 있고, 대법원 2023스637 판결은 과거 양육비도 청구 가능 영역으로 봤어요.</p>',
    sections: [
      {
        title: 'Q. 양육 미합의 4단계 점검 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 협의서·양육비부담조서·재판이혼·과거양육비 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 자녀양육·친권자 협의서 필수</strong> — 친권자·양육자·양육비·면접교섭 4가지 사항 합의 + 법원 의사확인 시 제출.</li>\n<li><strong>② 양육비부담조서 (법원 작성)</strong> — 협의이혼 시 양육비부담조서가 강제집행권원. 합의 안 되면 작성 불가 → 협의이혼 차단 영역.</li>\n<li><strong>③ 재판이혼 전환</strong> — 양육 합의 결렬 시 재판이혼 또는 가사조사관 조정 트랙. 가정법원이 자녀 복리 기준으로 친권·양육·양육비 직권 결정.</li>\n<li><strong>④ 양육비 일시금 약정의 효력</strong> — 일시금 약정이 자녀 복리에 현저히 반하면 효력 부정 영역(2014드단201540). 추후 정기금 추가 청구 가능 사례 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 미성년 자녀 있으면 양육 합의 없이 협의이혼 불가능 영역. 합의 막히면 가정법원 가사조사관 조정 또는 재판이혼 전환이 효율적 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 양육 미합의 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 산정기준표 → 협의 재시도 → 조정 → 재판이혼 → 양육비부담조서 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가정법원 양육비 산정기준표 활용 (즉시)</strong> — 부부 합산 소득 + 자녀 연령으로 기준액 산출. 객관적 기준으로 협의 재시도.</li>\n<li><strong>2단계 — 협의 재시도 (1~2주)</strong> — 변호사·법률구조공단 132 자문 후 협의서 양식 작성. 법원 의사확인 신청.</li>\n<li><strong>3단계 — 가사조사관 조정 (협의 결렬 시)</strong> — 가정법원 가사조사 + 조정. 자녀 면담 + 부모 환경 조사.</li>\n<li><strong>4단계 — 재판이혼 전환 (조정 결렬 시)</strong> — 본안 소송 진행. 친권·양육·양육비 직권 결정.</li>\n<li><strong>5단계 — 양육비부담조서·강제집행</strong> — 결정 후 양육비 미지급 시 이행명령·감치명령·소득공제 트랙(가사소송법 제64조·제68조).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">양육 미합의 협의이혼 차단 4단계 점검을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 자녀 자료 + 부모 소득 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>자녀양육·친권자 협의서 양식</strong> — 가정법원 양식 사용 + 부부 서명·날인.</li>\n<li><strong>부부 합산 소득 자료</strong> — 근로소득원천징수영수증·사업소득자료·재산세 납부.</li>\n<li><strong>자녀 연령·교육비·의료비 자료</strong> — 양육비 산정용.</li>\n<li><strong>면접교섭 협의 사항</strong> — 빈도·시간·장소·전달 방식.</li>\n<li><strong>가족·혼인관계증명서</strong> — 기본 증명.</li>\n<li><strong>주민등록등본</strong> — 자녀 주소·세대주.</li>\n<li><strong>증인 2명 서명·날인</strong> — 협의이혼 의사확인 시 필수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가정법원 양육비 산정기준표는 객관적 협의 도구. 합의 안 될 때 \'법원 기준이 이만큼이니\' 제시하면 협의 진전 가능. 산정기준표는 매년 개정 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 양육 미합의 다툼 포인트와 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"양육비 일시금으로 끝내자" 주장 검토</strong> — 일시금 약정이 자녀 복리에 현저히 반하면 효력 부정 영역(2014드단201540). 정기금 + 일시금 결합 또는 정기금 우선 권장.</li>\n<li><strong>"부모 합의했으니 그대로" 주장 반박</strong> — 자녀 복리가 최우선 기준. 부모 합의가 자녀 복리 침해면 가정법원이 직권 변경 가능 영역.</li>\n<li><strong>"과거 양육비는 못 받는다" 주장 반박</strong> — 과거 양육비도 청구 가능 영역(2023스637). 다만 일시 부담 가혹 시 분담 범위 조정.</li>\n<li><strong>양육비 미지급 강제집행 결합</strong> — 미지급 시 이행명령·감치명령·신용제재·출국금지 트랙. 양육비이행관리원 활용.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 이혼·양육 무료 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n<li><strong>양육비이행관리원 1644-6621</strong> — 양육비 추심·감치·선지급 지원.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 일시금 약정의 효력과 과거 양육비 청구',
        summary:
          '부산가정법원 2014드단201540 사건(부산가법, 2015.10.16 선고)에서 법원은 부부가 협의이혼하기로 하면서 \'양육비 일시금 지급 + 추가 청구 금지\' 약정을 하고 공증까지 받았으나, 양육자가 정기금 형태의 양육비를 청구한 사안에서, 양육비 일시금 약정이 자녀의 복리에 현저히 반하므로 효력이 없다고 판시한 사례가 있습니다. 또한 대법원 2023스637 판결(2024.10.08)은 부모 중 어느 한쪽만 자녀를 양육한 경우 과거 양육비도 청구 가능하지만, 일시 부담이 가혹하거나 신의성실·형평 원칙에 어긋나면 분담 범위 조정이 필요하다고 보았습니다.',
        takeaway: '양육비 약정은 자녀 복리 기준으로 효력 평가되는 영역으로, 일시금 약정이 자녀 복리 침해 시 추가 정기금 청구 트랙이 열리는 사례가 있어 양육비부담조서 작성 시 신중한 검토 영역입니다.',
      },
    ],
    faq: [
      {
        question: '자녀가 있는데 양육 합의 없이 협의이혼 가능한가요?',
        answer:
          '<strong>불가능 영역입니다.</strong> 미성년 자녀 있으면 친권자·양육자·양육비·면접교섭 4가지 합의 + 법원 의사확인 필수. 합의 안 되면 재판이혼 전환.',
      },
      {
        question: '양육비는 얼마가 적정한가요?',
        answer:
          '<strong>가정법원 양육비 산정기준표 기준으로 검토할 수 있습니다.</strong> 부부 합산 소득 + 자녀 연령으로 기준액 산출. 매년 개정되며 객관적 협의 도구.',
      },
      {
        question: '양육비 일시금으로 받으면 추가 청구 못 하나요?',
        answer:
          '<strong>일시금 약정이 자녀 복리에 현저히 반하면 효력 부정 영역입니다(2014드단201540).</strong> 추가 정기금 청구 가능 사례. 일시금만 약정 시 신중 검토.',
      },
      {
        question: '과거 양육비 청구 가능한가요?',
        answer:
          '<strong>원칙적으로 가능합니다(2023스637).</strong> 다만 일시 부담이 가혹하거나 신의성실·형평 원칙에 어긋나면 분담 범위 조정 영역. 청구 시기·금액 신중 검토.',
      },
      {
        question: '양육비 미지급 시 어떻게 받나요?',
        answer:
          '<strong>이행명령·감치명령·신용제재·출국금지 트랙입니다.</strong> 양육비이행관리원 1644-6621 활용. 3기 이상 미이행 시 감치명령 신청 가능 영역.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '협의이혼 양육 합의서', href: '/guide/divorce/divorce-custody-agreement-prep' },
      { label: '양육비 산정기준표', href: '/guide/divorce/child-support-calculation-standard' },
      { label: '양육비 미지급 감치명령', href: '/guide/divorce/child-support-enforcement-contempt-order' },
      { label: '협의이혼 절차', href: '/guide/divorce/consensual-divorce-process' },
      { label: '재판이혼 vs 협의이혼', href: '/guide/divorce/consensual-vs-trial-divorce' },
    ],
  },
];
