import { SpokePage } from '../spoke-pages';

// batch59 divorce 4 + inheritance 3 — 7개:
// 1. divorce / 외도 정황증거 결합 입증 트랙 (smoking gun 부재 시 위자료)
// 2. divorce / 협의이혼 후 재산분할 청구 2년 시효
// 3. divorce / 이혼 전 배우자 재산이전 방지 가압류 + 사해행위취소
// 4. divorce / 황혼이혼 (20~30년) 연금분할 + 노후 위자료 결합
// 5. inheritance / 기여분 청구 (병간호·사업기여) 입증 자료 트랙
// 6. inheritance / 한정승인 후 청산 5단계 (공고·신고·비율변제)
// 7. inheritance / 대습상속인의 대습원인 이전 증여 — 특별수익 제외
//
// 고유 존재 이유:
// 1. 이 페이지는 배우자 외도를 의심하지만 결정적 증거(현장·자백)가 없어 카톡·이체·동선·통신만 가진 청구인이 정황증거 5종 결합 입증 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 협의이혼 시 재산분할 합의 없이 이혼 신고만 한 일방이 2년(민법 제839조의2 제3항) 시효 도과 전 청구하기 위한 보전 절차를 정리하도록 돕는 페이지다.
// 3. 이 페이지는 이혼소송 중 배우자가 부동산·예금을 제3자에게 처분하려는 정황을 포착한 청구인이 가압류 + 사해행위취소 결합 트랙을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 20~30년 결혼 후 황혼이혼을 검토하는 배우자가 공무원·국민연금 분할 + 가사노동 기여 + 노후 위자료 결합 산정 트랙을 정리하도록 돕는 페이지다.
// 5. 이 페이지는 부모 병간호 또는 가업 운영을 도운 상속인이 다른 공동상속인 대비 기여분 청구를 위해 입증 자료(간병기록·사업기여)를 정리하도록 돕는 페이지다.
// 6. 이 페이지는 한정승인 결정 후 신문공고·채권자 신고·재산처분·비율변제·잔여재산 분배 5단계를 진행해야 하는 상속인이 절차 누락으로 단순승인 의제 위험을 피하도록 돕는 페이지다.
// 7. 이 페이지는 대습상속(부모 사망 후 손자녀 상속) 사례에서 대습원인 발생 이전에 조부모로부터 받은 증여가 특별수익에 해당하는지 다툼이 있는 상속인을 위해 2024스525 판결 기준 점검 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch59DivorceInheritance: SpokePage[] = [
  // ─── 1. divorce / divorce-affair-circumstantial-evidence-trial-strategy ───
  {
    domain: 'divorce',
    slug: 'divorce-affair-circumstantial-evidence-trial-strategy',
    keyword: '외도 정황증거 결합 위자료',
    questionKeyword: '배우자 외도 의심되는데 결정적 증거가 없어요. 카톡·이체·동선만으로 위자료 받을 수 있나요?',
    ctaKeyword: '외도 정황증거 결합 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '외도 정황증거 5종 결합 위자료 — 4단계 입증 트랙 | 로앤가이드',
      description:
        '배우자 외도가 의심되지만 결정적 증거가 없을 때 카톡·이체·동선·통신·증인 5종 정황증거 결합 + 위자료 4단계 입증 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배우자가 늦은 시간 출장이 잦아지고, 이상한 카드 결제 내역이 보이고, 모르는 번호로 통화가 늘어났어요. 그런데 현장을 잡거나 본인이 인정한 적은 없어요. 이 정도로도 위자료 받을 수 있나요?" 이혼·위자료 청구에서 외도 입증은 \'결정적 증거 1개\'가 아니어도, ① 카톡·SNS 정황 ② 이체·신용카드 결제 정황 ③ 동선·내비·하이패스 정황 ④ 통신 내역(통화·문자 빈도) ⑤ 증인 진술 5종이 결합되면 부정행위로 인정되는 영역입니다. 위자료는 결정적 증거 유무가 아니라 \'전체 정황의 합리적 추정\'으로 산정되는 영역(2024므11526 판결은 위자료 산정 시 변론에 나타나는 모든 사정을 종합 참작). 다만 정황증거 수집 과정에서 통신비밀보호법·정보통신망법·위치정보법 위반 위험이 있어 적법 수집 트랙이 핵심이에요. 이 페이지는 결정적 증거 부재 상황에서 정황 5종을 합쳐 입증력을 끌어올리는 트랙을 정리합니다.</p>',
    sections: [
      {
        title: 'Q. 외도 정황증거 4단계 결합 입증 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 정황 5종 수집·시간선 정리·교차검증·법원 사실조회 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 정황 5종 수집 (적법 범위 내)</strong> — 본인 휴대폰 카톡·문자·가족 단톡·공개 SNS·본인 명의 카드결제·본인 차량 내비·통신사 본인 명의 통화 내역·증인 진술. 위법 수집(도청·해킹·위치추적기) 회피.</li>\n<li><strong>② 시간선 정리 (timeline)</strong> — 의심 정황을 \'언제·어디서·누구와\' 시간순으로 매핑. 카톡 + 카드 결제 + 통화 빈도가 한 시점에 겹치면 추정력 강화 영역.</li>\n<li><strong>③ 교차 검증</strong> — 카톡 \'오늘 같이 식사하자\' + 같은 시간대 호텔·식당 카드 결제 + 그 시간대 본인 부재 정황. 단일 자료 약점을 보완하는 결합 트랙.</li>\n<li><strong>④ 법원 사실조회 신청</strong> — 호텔·모텔 입출입·카드 결제 상세·통화 내역은 변호사 통한 사실조회 또는 법원 보존 신청. 본인이 못 모은 자료 보완 트랙.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 외도는 \'결정적 증거 1개\'가 아니어도 정황 5종 결합 + 시간선 정리 + 교차 검증으로 추정력 확보 가능 영역. 사례별 산정이지만 정황 결합으로 위자료 인정되는 사례가 자주 보임.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 정황 5종 결합 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 정황 자료 수집 → 시간선 정리 → 사실조회 → 변론 → 위자료 산정 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 자료 본인 명의 영역에서 수집 (즉시)</strong> — 본인 휴대폰·본인 카드·본인 차량·본인 명의 통신 내역. 위법 수집 회피 첫 단계.</li>\n<li><strong>2단계 — 시간선 (timeline) 정리 (1~2주)</strong> — 의심 정황을 날짜별 표로 매핑. 카톡 시간 + 카드 결제 시간 + 통화 시간 결합 패턴 점검.</li>\n<li><strong>3단계 — 변호사 사실조회 신청 (2~4주)</strong> — 호텔·모텔 CCTV·카드사 결제 상세·통신사 통화 내역 + 상대 차량 하이패스. 법원 통한 사실조회.</li>\n<li><strong>4단계 — 이혼·위자료 청구 + 변론 (소장 접수 후 6~12개월)</strong> — 정황 5종을 시간선 패턴으로 제출. 배우자 + 상간자 공동불법행위 청구(2025므10716).</li>\n<li><strong>5단계 — 위자료 산정·판결</strong> — 부정행위 정도·기간·혼인 기간·자녀 유무·연령·재산 상태 종합 산정 영역(2024므11526). 사례별 다름.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">정황증거 5종 결합 입증 4단계를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 본인 명의 자료 + 사실조회 자료 + 증인 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>본인 휴대폰 카톡·문자·가족 단톡 백업</strong> — 시점·발신자 명확.</li>\n<li><strong>공개 SNS 캡처</strong> — 인스타·페북 공개 게시물·태그·시간.</li>\n<li><strong>본인 명의 신용카드 결제 내역</strong> — 가족 카드 사용 정황.</li>\n<li><strong>본인 차량 내비·블랙박스·하이패스</strong> — 동선 정황.</li>\n<li><strong>본인 명의 통신사 통화·문자 내역</strong> — 빈도·시간대 패턴.</li>\n<li><strong>시간선(timeline) 표</strong> — 정황을 시간순 결합한 자체 정리표.</li>\n<li><strong>증인 진술서</strong> — 목격자·동료·이웃·친구 진술.</li>\n<li><strong>혼인관계증명서·가족관계증명서·재산 자료</strong> — 위자료·재산분할 산정용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자체 timeline 표를 만들면 정황 결합력이 훨씬 강해지는 영역. 같은 시간대 카톡 + 카드 결제 + 통화 빈도가 겹치는 \'한 점\'이 있으면 추정력 크게 상승. 변호사에게 표로 제출하면 사실조회 신청도 효율적.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 상대방 자주 항변과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"단순 친구 관계" 항변 반박</strong> — 카톡 시간대(심야)·내용(연인 표현)·만남 빈도·금전 이전 정황 결합 시 부정행위 추정 영역.</li>\n<li><strong>"카드 결제는 출장" 항변 반박</strong> — 같은 시간대 호텔·식당 결제 + 회사 출장 명단 부재 + 카톡 정황 결합 시 추정력.</li>\n<li><strong>"통화 빈도는 업무" 항변 반박</strong> — 심야·주말 빈도 + 카톡 내용·금전 이전 결합 시 추정. 단일 자료보다 결합이 핵심.</li>\n<li><strong>위법 수집 자료 위험</strong> — 배우자 휴대폰 무단 잠금해제·도청·위치추적기 부착은 통신비밀보호법·정보통신망법·위치정보법 위반 영역. 본인 명의 자료 우선.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 이혼·증거 수집 무료 법률 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문 상담.</li>\n<li><strong>여성긴급전화 1366</strong> — 가정 위기 상담(외도 + 가정폭력 결합 시).</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위자료 산정 종합 참작 + 부정행위 공동불법행위',
        summary:
          '대법원 2024므11526 사건(대법원, 2024.10.25 선고)에서 법원은 유책배우자에 대한 위자료 액수를 산정함에 있어서는 유책행위에 이르게 된 경위와 정도, 혼인관계 파탄의 원인과 책임, 배우자의 연령과 재산상태 등 변론에 나타나는 모든 사정을 참작하여 법원이 직권으로 정하여야 하고, 이러한 사정에는 혼인관계의 파탄 이후 최종적 이혼에 이르기까지 발생한 모든 사정이 포함된다고 판시했습니다. 또한 대법원 2025므10716 판결은 부부의 일방이 부정행위를 한 경우와 제3자(상간자)가 부부공동생활을 침해해 정신적 고통을 가하는 행위 모두 불법행위를 구성하며, 부부 일방과 제3자가 부담하는 책임은 공동불법행위로서 부진정연대채무 관계에 있다고 보았습니다.',
        takeaway: '외도 위자료는 결정적 증거 1개가 아니라 정황 5종 결합 + 변론에 나타나는 모든 사정 종합 참작 영역으로, 시간선 정리 + 교차 검증 자료를 만들면 사례별 산정 트랙이 열리는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '결정적 증거(현장·자백)가 없는데도 위자료 받을 수 있나요?',
        answer:
          '<strong>정황 5종 결합 입증 시 인정 가능 영역입니다.</strong> 카톡 + 카드 결제 + 동선 + 통화 + 증인 진술이 시간선상 한 점에 겹치면 추정력. 사례별 산정(2024므11526).',
      },
      {
        question: '배우자 휴대폰을 잠깐 봤는데 카톡 캡처 가능한가요?',
        answer:
          '<strong>위법 수집 위험 영역입니다(통신비밀보호법·개인정보보호법).</strong> 형사 책임 + 증거능력 부정 위험. 본인 휴대폰·가족 단톡·공개 SNS 등 적법 자료 우선 권장.',
      },
      {
        question: '카드 결제 내역만으로 외도 입증 가능한가요?',
        answer:
          '<strong>단독으론 부족하지만 정황 결합 핵심 자료입니다.</strong> 같은 시간대 카톡·통화·동선 결합 시 추정력 강화. 본인 명의 카드·가족 카드 사용 내역 모두 활용.',
      },
      {
        question: '상간자에게도 위자료 받을 수 있나요?',
        answer:
          '<strong>가능 영역입니다(2025므10716).</strong> 배우자 + 상간자 공동불법행위로 부진정연대채무. 다만 \'부부공동생활 침해 고의·과실\' 입증 필요. 상간자 위자료는 별도 청구.',
      },
      {
        question: '위자료 얼마 받을 수 있나요?',
        answer:
          '<strong>사례별 다르지만 외도 위자료는 1,000~3,000만원 수준이 검토되는 사례가 자주 보이는 영역입니다.</strong> 정도·기간·혼인 기간·자녀·연령 종합 산정. 정황 결합 정도가 핵심.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '외도 디지털 증거 (카톡·SNS)', href: '/guide/divorce/divorce-affair-digital-katalk-sns-evidence' },
      { label: '외도 부인 증거 강화', href: '/guide/divorce/divorce-affair-denial-evidence-strengthening' },
      { label: '외도 위자료 증거 수집', href: '/guide/divorce/divorce-alimony-affair-evidence-collection-trial' },
      { label: '제3자 외도 청구', href: '/guide/divorce/divorce-third-party-affair-claim' },
      { label: '위자료 산정 표준', href: '/guide/divorce/divorce-alimony-calculation-standard' },
    ],
  },

  // ─── 2. divorce / divorce-consensual-property-division-2year-claim ───
  {
    domain: 'divorce',
    slug: 'divorce-consensual-property-division-2year-claim',
    keyword: '협의이혼 후 재산분할 2년 시효',
    questionKeyword: '협의이혼 신고만 하고 재산분할 합의 못 했어요. 지금 청구할 수 있나요?',
    ctaKeyword: '재산분할 2년 시효 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '협의이혼 후 재산분할 — 2년 시효 4단계 보전 | 로앤가이드',
      description:
        '협의이혼 신고 후 재산분할 합의 없이 일방이 이혼 확정 2년 시효(민법 제839조의2 제3항) 도과 전 청구할 수 있는 4단계 보전 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"5년 전 협의이혼했는데 그때 재산분할 합의는 못 했어요. 최근 알아보니 \'2년 지나면 청구 못 한다\'고 들었어요. 이미 지난 거 같은데 정말 끝인가요?" 협의이혼 후 재산분할청구권은 민법 제839조의2 제3항에 따라 \'이혼한 날부터 2년\'이 제척기간으로 정해진 영역입니다. 이는 시효(중단·정지 가능)가 아니라 제척기간(권리 소멸 절대 시한)이라 도과 시 권리 자체가 소멸하는 영역. 다만 ① 이혼 신고일 기준 2년 카운트 ② 합의된 재산분할이 일부만 있고 잔여재산 있으면 잔여 부분 별도 청구 가능 ③ 이혼소송 중 재산분할 청구 누락 부분은 별도 절차로 청구 가능 영역(예외 사례). 협의이혼 후 \'재산분할 합의 없음\' 상태에서 시효 임박 시 즉시 가정법원 재산분할심판 청구 트랙이 핵심이에요. 또한 2024므10721 판결은 재산분할 대상 재산 범위와 기준시점(사실심 변론종결일)을 명시했어요.</p>',
    sections: [
      {
        title: 'Q. 재산분할 2년 4단계 보전 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 시효 카운트·제척 도과 위험·심판 청구·재산조회 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 2년 시효 카운트 (민법 제839조의2 제3항)</strong> — 이혼한 날(이혼신고 수리일)부터 2년. 제척기간이라 중단·정지 불가. 도과 시 권리 소멸 영역.</li>\n<li><strong>② 합의 일부만 있는 경우</strong> — 부동산만 합의하고 예금·연금·퇴직금 미합의 시 잔여재산 별도 청구 가능 영역. 단, 동일 2년 시효 적용.</li>\n<li><strong>③ 가정법원 재산분할심판 청구</strong> — 이혼소송이 아닌 마류 가사비송 사건. 청구 시 재산조회 신청 결합.</li>\n<li><strong>④ 재산조회·기준시점</strong> — 분할 대상 재산은 사실심 변론종결일 기준 산정(2024므10721). 이혼 시점 아닌 변론종결일 가액. 가액 변동 영향.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 협의이혼 후 재산분할은 2년 제척기간(중단·정지 불가) 영역. 시효 임박 시 즉시 심판 청구 우선. 합의 일부만 있는 경우 잔여재산 별도 청구 트랙도 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 시효 임박 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 이혼일 확정 → 재산조회 → 심판청구 → 변론 → 분할 결정 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 이혼 신고일 확정 (즉시)</strong> — 혼인관계증명서·이혼신고서로 정확한 이혼 신고일 확인. 2년 시효 카운트 시작점.</li>\n<li><strong>2단계 — 상대방 재산 조회 (1~2주)</strong> — 본인 자료 정리 + 상대방 재산조회를 위한 변호사 자문. 부동산 등기부·금융재산·연금 추적 준비.</li>\n<li><strong>3단계 — 재산분할심판 청구 (시효 도과 전)</strong> — 가정법원에 재산분할심판 청구서 접수. 청구 자체로 제척기간 준수 효과. 일부 청구만으로도 시효 보전.</li>\n<li><strong>4단계 — 재산조회 신청 + 변론</strong> — 가정법원에 재산조회 신청. 부동산·금융·연금 직권 조회. 사실심 변론종결일 기준 가액 산정.</li>\n<li><strong>5단계 — 분할 결정·이행</strong> — 가정법원이 기여도·재산 형성 기여 평가 후 분할 결정. 미이행 시 강제집행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">협의이혼 후 재산분할 2년 시효 4단계 보전을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 시효 입증 자료 + 재산 자료 + 기여도 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·이혼신고서</strong> — 이혼 신고일 확정(2년 시효 카운트).</li>\n<li><strong>재산분할 합의서 (있다면)</strong> — 합의 범위 확인 + 잔여재산 식별.</li>\n<li><strong>상대방 재산 자료</strong> — 부동산 등기부·예금·주식·연금·퇴직금. 본인 명의 + 사실조회 결합.</li>\n<li><strong>본인 기여도 자료</strong> — 가사노동·자녀 양육·재산 형성 기여 정황.</li>\n<li><strong>혼인 기간 입증</strong> — 가족관계증명서·세대주 변동.</li>\n<li><strong>재산분할심판 청구서</strong> — 가정법원 양식.</li>\n<li><strong>본인 소득·재산 자료</strong> — 분할 비율 산정 참고.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시효 임박 시 \'재산분할 일부만 청구\' 형태로도 시효 보전 가능 영역. 본안에서 청구취지 확장 가능. 시효 보전이 절대 우선이라는 점 기억.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 상대방 자주 항변과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"이미 2년 지났다" 항변 대응</strong> — 이혼 신고일 vs 합의 일부 부분 시효 별도 산정 검토. 잔여재산 청구는 별도 시효 적용 가능 영역.</li>\n<li><strong>"합의서에 \'추후 청구 안 한다\' 적었다" 항변 검토</strong> — 합의 범위 명확 시 효력 영역. 다만 \'재산 전부 포기\' 합의도 의사·정황 다툼 가능. 일률적 결론 어려움.</li>\n<li><strong>"기여도 적다" 항변 반박</strong> — 가사노동·자녀 양육·간접 기여도 인정 영역. 통상 30~50% 사례별 산정.</li>\n<li><strong>재산 처분 위험</strong> — 시효 임박 + 상대방이 재산 처분 우려 시 가처분 결합 트랙 검토. 시효 보전 + 강제집행 보전 결합.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 재산분할·이혼 무료 법률 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n<li><strong>가정법원 가사조사 안내</strong> — 가까운 가정법원 민원실.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산분할 대상 범위와 기준시점',
        summary:
          '대법원 2024므10721 사건(대법원, 2024.05.17 선고)에서 법원은 부부가 이혼할 때 재산분할의 대상이 되는 재산은 부부 쌍방의 협력으로 이룩한 재산이며, 어떤 적극재산이나 채무가 부부 쌍방의 협력이 아니라 부부 중 일방에 의하여 생긴 것으로서 상대방이 그 형성이나 유지 또는 부담과 무관한 경우에는 재산분할의 대상으로 삼을 수 없다고 판시했습니다. 또한 재판상 이혼에 따른 재산분할에서 분할 대상이 되는 재산과 그 액수 산정의 기준시기는 이혼소송의 사실심 변론종결일이며, 혼인관계가 파탄된 이후 변론종결일 사이에 생긴 재산관계의 변동이 혼인 중 공동으로 형성한 재산관계와 무관하다는 등의 사정이 있는 경우 그 변동된 재산은 분할 대상에서 제외될 수 있다고 보았습니다.',
        takeaway: '협의이혼 후 재산분할은 2년 제척기간 + 사실심 변론종결일 기준 가액 산정 영역으로, 시효 임박 시 즉시 심판 청구하면 가액 변동 + 사실조회 + 기여도 다툼 트랙이 열리는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '협의이혼 후 재산분할 2년 시효는 정확히 언제부터인가요?',
        answer:
          '<strong>이혼한 날(이혼신고 수리일) 기준 2년입니다(민법 제839조의2 제3항).</strong> 제척기간이라 중단·정지 불가. 도과 시 권리 소멸 영역.',
      },
      {
        question: '재산분할 합의 일부만 있고 나머지 미합의면 어떻게 되나요?',
        answer:
          '<strong>잔여재산 별도 청구 가능 영역입니다.</strong> 단, 동일 2년 시효 적용. 합의 범위 + 잔여재산 식별이 핵심.',
      },
      {
        question: '시효 임박인데 재산 가액 산정이 안 됐어요',
        answer:
          '<strong>일부 청구로도 시효 보전 가능 영역입니다.</strong> \'1억 일부 청구\' 형태 심판 접수 후 본안에서 청구취지 확장. 시효 보전이 우선.',
      },
      {
        question: '합의서에 "추후 청구 안 한다" 적혀 있는데 청구 가능한가요?',
        answer:
          '<strong>합의 범위 + 의사 명확성 다툼 영역입니다.</strong> 명시적·구체적 포기 합의 시 효력. 일반적 표현은 사례별 다툼 가능. 변호사 자문 권장.',
      },
      {
        question: '재산분할 비율은 어떻게 정해지나요?',
        answer:
          '<strong>기여도 평가로 사례별 산정 영역입니다.</strong> 가사노동·자녀 양육·재산 형성 기여 + 혼인 기간 종합. 통상 30~50% 분할 사례가 자주 보임.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 기준시점', href: '/guide/divorce/divorce-property-division-cutoff-date' },
      { label: '재산분할 항목 종합', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '재판 후 누락재산 추가청구', href: '/guide/divorce/divorce-post-judgment-property-omission-claim' },
      { label: '협의이혼 절차 안내', href: '/guide/divorce/consensual-divorce-process' },
      { label: '재산분할 vs 위자료', href: '/guide/divorce/property-division-vs-alimony-comparison' },
    ],
  },

  // ─── 3. divorce / divorce-asset-transfer-prevention-attachment ───
  {
    domain: 'divorce',
    slug: 'divorce-asset-transfer-prevention-attachment',
    keyword: '이혼 전 재산이전 가압류 사해행위',
    questionKeyword: '이혼 소송 중 배우자가 부동산·예금을 친정·지인에게 넘기려고 해요. 어떻게 막나요?',
    ctaKeyword: '이혼 재산이전 가압류 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '이혼 중 재산이전 방지 — 가압류 + 사해행위취소 4단계 | 로앤가이드',
      description:
        '이혼 소송 중 배우자가 부동산·예금을 제3자에게 처분·이전하려는 정황이 보이면 가압류·처분금지가처분 + 사해행위취소 4단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 소송 중인데, 남편이 \'친정 어머니에게 빌렸다\'며 부동산을 처가에 넘기려고 합니다. 예금도 부모 통장으로 빠지는 게 보여요. 재산분할 못 받게 될까봐 너무 불안해요." 이혼 소송 중 또는 이혼 직전 배우자가 부동산·예금·주식 등을 제3자(부모·형제·지인)에게 처분·이전하면 ① 가압류 ② 처분금지가처분 ③ 사해행위취소 ④ 재산분할 채권 보전 4가지 트랙이 결합 가능한 영역입니다. 2025므10730 판결은 일방 배우자가 정당한 이유 없이 상대방과 협의·동의 없이 부부 공동재산 주요 부분을 처분하는 것이 \'혼인을 계속하기 어려운 중대한 사유\'에 해당할 수 있다고 보았어요. 또한 2024다208315 판결은 채무초과 상태에서 자기 권리를 포기하는 분할협의가 사해행위에 해당한다고 판시(상속재산이지만 사해행위 법리 동일). 시점이 핵심이라 정황 포착 즉시 가압류·가처분 신청 트랙을 권장합니다.</p>',
    sections: [
      {
        title: 'Q. 재산이전 방지 4단계 점검 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 가압류·가처분·사해행위취소·이혼사유 결합 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 가압류 (예금·동산·급여)</strong> — 배우자 명의 예금·주식·급여를 신속 가압류. 재산분할 채권 보전 트랙. 본안 소송 진행 중에도 신청 가능 영역.</li>\n<li><strong>② 처분금지가처분 (부동산)</strong> — 부동산 등기부에 처분금지 표시. 이전 등기 차단 효과. 신청 인용 시 등기부 등재.</li>\n<li><strong>③ 사해행위취소 (이미 이전된 경우)</strong> — 배우자가 친정·지인에게 이미 이전한 재산은 사해행위취소 청구 트랙. 안 날 1년·있은 날 5년 시효(민법 제406조).</li>\n<li><strong>④ 이혼사유 결합 (혼인 파탄 사유)</strong> — 일방적 재산처분이 \'혼인을 계속하기 어려운 중대한 사유\'에 해당할 수 있는 영역(2025므10730). 위자료 산정에도 영향.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 이혼 중 재산이전은 \'시점이 생명\'. 정황 포착 즉시 가압류·가처분 신청 + 본안 결합. 이미 이전된 재산도 사해행위취소 트랙으로 환원 가능. 위자료 산정에도 가산 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 재산이전 방지 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 정황 포착 → 재산조회 → 가압류 → 가처분 → 사해행위취소 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정황 포착·자료 수집 (즉시)</strong> — 부동산 등기부 변동·예금 출금 정황·계좌이체 기록·제3자 명의 자산 출현. 시점·금액 기록.</li>\n<li><strong>2단계 — 본안 + 재산조회 신청 (1~2주)</strong> — 이혼·재산분할 본안 청구 + 가정법원 재산조회. 변호사 사실조회 결합.</li>\n<li><strong>3단계 — 가압류 신청 (예금·동산, 즉시)</strong> — 배우자 명의 예금·주식·급여 가압류. 신청 후 1~2주 내 결정. 담보 공탁 필요할 수 있는 영역.</li>\n<li><strong>4단계 — 처분금지가처분 (부동산)</strong> — 등기부 처분금지 등재. 추가 처분 차단 + 본안 진행.</li>\n<li><strong>5단계 — 사해행위취소 (이미 이전된 재산)</strong> — 안 날 1년·있은 날 5년 내 청구. 부동산은 등기 환원, 금전은 가액배상.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">이혼 중 재산이전 방지 4단계를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 정황 자료 + 재산 자료 + 신청 서류 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>부동산 등기부등본 (변동 추적)</strong> — 명의 변동·근저당 설정 시점.</li>\n<li><strong>예금·계좌이체 내역</strong> — 가족 계좌 입출금 기록.</li>\n<li><strong>제3자 명의 자산 정황</strong> — 친정·지인 명의 부동산·차량·예금 출현.</li>\n<li><strong>본인 청구권 자료</strong> — 재산분할청구 + 위자료 청구.</li>\n<li><strong>가압류·가처분 신청서</strong> — 법원 양식.</li>\n<li><strong>담보 공탁 자료</strong> — 가압류·가처분 시 통상 일부 공탁 필요.</li>\n<li><strong>혼인기간·기여도 자료</strong> — 본안 변론용.</li>\n<li><strong>증인 진술서</strong> — 재산이전 정황 목격 증언.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가압류·가처분은 \'담보 공탁\' 부담이 있지만 시간이 가장 중요. 일부 공탁이라도 즉시 신청 권장. 본안 승소 시 공탁금 회수 가능 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 상대방·제3자 자주 항변과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"제3자 선의" 항변 반박</strong> — 친정·지인은 가족 관계로 악의 추정 영역. 채무·이혼 상황 몰랐다는 입증 책임 제3자 부담.</li>\n<li><strong>"진짜 채무 변제" 항변 반박</strong> — 차용증·이체 내역 부재 + 시점 의심 + 가족 관계 결합 시 사해행위 추정 영역.</li>\n<li><strong>"공동재산 아니다" 항변 반박</strong> — 혼인 중 형성 재산은 공동재산 추정 영역. 일방 명의라도 기여도 평가 후 분할 대상.</li>\n<li><strong>가압류·가처분 인용 후 상대 재이의 가능</strong> — 인용 후 상대방 이의 가능. 본안에서 권리 입증이 핵심.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 재산분할·가압류·사해행위 무료 법률 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n<li><strong>가정법원 가사조사관</strong> — 본안 진행 중 재산조회 안내.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일방적 재산처분이 이혼사유에 해당',
        summary:
          '대법원 2025므10730 사건(대법원, 2025.09.04 선고)에서 법원은 혼인생활 중 부양·협조의무 등을 통하여 공동으로 이룩한 재산의 주요 부분을 부부의 일방이 정당한 이유 없이 상대방 배우자와의 협의나 그의 동의 없이 일방적으로 처분하는 등으로 가정공동체의 경제적 기반을 형해화하거나 위태롭게 하는 행위가 민법 제840조 제6호의 \'혼인을 계속하기 어려운 중대한 사유\'에 해당할 수 있다고 판시했습니다. 또한 대법원 2024다208315 판결은 채무초과 상태에 있는 채무자가 분할협의에서 자신의 상속분에 관한 권리를 포기하는 행위가 사해행위에 해당한다고 보아, 가족 간 재산 이전이 채권자에 대한 사해행위로 평가될 수 있는 영역임을 보여줍니다.',
        takeaway: '이혼 중 재산이전 방지는 가압류 + 가처분 + 사해행위취소 + 이혼사유 결합 트랙으로, 정황 포착 즉시 신청하면 재산분할 채권 보전 + 위자료 산정 가산 트랙이 열리는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '가압류 신청하면 담보 공탁이 얼마나 필요한가요?',
        answer:
          '<strong>청구액의 10~30% 수준이 자주 보이는 영역입니다.</strong> 법원 재량 + 보증보험 활용 가능. 본안 승소 시 공탁금 회수 영역.',
      },
      {
        question: '이미 친정에 넘긴 부동산도 되돌릴 수 있나요?',
        answer:
          '<strong>사해행위취소 청구 가능 영역입니다(민법 제406조).</strong> 안 날 1년·있은 날 5년 시효. 친정은 가족 관계로 악의 추정 영역.',
      },
      {
        question: '예금이 빠져나가는 게 보이는데 어떻게 막나요?',
        answer:
          '<strong>예금 가압류 즉시 신청 권장 영역입니다.</strong> 1~2주 내 결정. 담보 공탁 후 동결. 본안에서 권리 확정.',
      },
      {
        question: '재산이전이 이혼사유에 해당하나요?',
        answer:
          '<strong>일방적 처분으로 가정공동체 경제 기반을 위태롭게 하면 해당 가능 영역입니다(2025므10730).</strong> 위자료 산정에도 가산 요소.',
      },
      {
        question: '가처분 인용 후 상대방이 이의하면 어떻게 되나요?',
        answer:
          '<strong>본안에서 권리 입증으로 다툼 영역입니다.</strong> 가처분은 잠정 처분이라 본안 결과에 따라 유지·취소. 본안 승소가 핵심.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '숨긴 재산 추적', href: '/guide/divorce/divorce-hidden-asset-discovery' },
      { label: '위장이혼 사해행위', href: '/guide/divorce/divorce-sham-divorce-creditor-fraudulent-transfer' },
      { label: '재산처분 사유 입증', href: '/guide/divorce/divorce-asset-disposal-grounds' },
      { label: '배우자 자산 미공개', href: '/guide/divorce/divorce-husband-rejected-property-disclose' },
      { label: '재산분할 vs 위자료', href: '/guide/divorce/property-division-vs-alimony-comparison' },
    ],
  },

  // ─── 4. divorce / divorce-gray-pension-split-late-life-alimony ───
  {
    domain: 'divorce',
    slug: 'divorce-gray-pension-split-late-life-alimony',
    keyword: '황혼이혼 연금분할 노후 위자료',
    questionKeyword: '20년 넘게 결혼했는데 황혼이혼 검토 중이에요. 연금 분할이랑 노후 위자료 어떻게 산정되나요?',
    ctaKeyword: '황혼이혼 연금 + 위자료 점검',
    type: 'Q&A형',
    perspective: 'neutral',
    meta: {
      title: '황혼이혼 연금분할 + 노후 위자료 — 4가지 산정 축 | 로앤가이드',
      description:
        '20~30년 결혼 후 황혼이혼 검토 시 국민·공무원 연금 분할 + 가사노동 기여 + 노후 위자료 4가지 산정 축을 지금 확인하세요.',
    },
    intro:
      '<p>"결혼 25년 차예요. 자녀들도 다 컸고, 더 이상 같이 살기 어려운 상황입니다. 그런데 저는 전업주부로 살아서 연금이 없어요. 황혼이혼하면 남편 연금 분할 받을 수 있나요? 노후가 막막합니다." 황혼이혼(혼인 20~30년 이상)은 ① 국민연금 분할 (국민연금법 제64조) ② 공무원·사학·군인연금 분할 (각 연금법) ③ 재산분할 (가사노동 기여 인정) ④ 위자료 4가지 축으로 산정되는 영역입니다. 국민연금은 혼인 기간 5년 이상 + 60세 도달 시 분할연금 수급권(이혼 후 직접 수급) 영역(2018두65088). 공무원연금은 퇴직급여·퇴직수당이 사실심 변론종결 시 잠재 가치로 평가돼 재산분할 대상에 포함되는 영역(2017므11917). 가사노동·자녀 양육은 \'쌍방 기여\'로 평가돼 황혼이혼은 50% 분할 사례가 자주 보이는 영역. 또한 2024므11526 판결은 위자료 산정에 연령·재산상태 등 변론에 나타나는 모든 사정을 종합 참작한다고 보았어요.</p>',
    sections: [
      {
        title: 'Q. 황혼이혼 4가지 산정 축',
        content:
          '<p><strong style="color:#1e3a5f">A. 국민연금·공직연금·재산분할·위자료 4축으로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 국민연금 분할 (국민연금법 제64조)</strong> — 혼인 기간 5년 이상 + 본인 60세(수급 연령) 도달 시 직접 수급 영역. 별도 결정 없으면 균등 분할(2018두65088). 이혼 후 본인 명의 직접 수령.</li>\n<li><strong>② 공무원·사학·군인연금 분할 (각 연금법)</strong> — 혼인 기간 5년 이상 + 분할 청구 가능. 재직 중이라도 사실심 변론종결 시 잠재 가치 평가 + 재산분할 대상(2017므11917).</li>\n<li><strong>③ 재산분할 (가사노동·자녀양육 기여)</strong> — 황혼이혼은 가사노동·자녀 양육을 \'쌍방 기여\'로 평가. 50% 분할 사례 자주 보임. 사례별 산정.</li>\n<li><strong>④ 노후 위자료 (혼인 파탄 사유)</strong> — 외도·가정폭력·재산 처분 등 유책 사유 + 연령·재산상태 종합 참작(2024므11526). 노후 영향 가산 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 황혼이혼은 4축 결합 영역. 국민연금은 별도 결정 + 직접 수급, 공직연금은 재산분할 결합 트랙. 가사노동 기여는 50% 사례 자주 보임. 노후 위자료는 연령 가산.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 황혼이혼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 정리 → 연금조회 → 본안 청구 → 변론 → 분할 결정 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 정리 (즉시)</strong> — 혼인 기간·국민연금 가입이력·공직연금 재직기간·재산 자료·기여도 정황.</li>\n<li><strong>2단계 — 연금 조회</strong> — 국민연금공단 1355 + 공무원연금공단 1588-4321 + 사학연금공단 1588-4110. 본인·배우자 가입 이력 확인.</li>\n<li><strong>3단계 — 이혼·재산분할·위자료 본안 청구</strong> — 가정법원 또는 협의이혼 후 재산분할심판. 통상 본안 6~12개월.</li>\n<li><strong>4단계 — 변론·기여도 평가</strong> — 가사노동·자녀양육·재산형성 기여 변론. 황혼이혼은 50% 분할 사례 자주 보임.</li>\n<li><strong>5단계 — 분할 결정·연금 별도 결정</strong> — 연금은 협의서·심판서에 \'별도 결정\' 명시 권장. 명시 없으면 균등 분할 적용 영역(2018두65088).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">황혼이혼 4가지 산정 축을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 연금 자료 + 재산 자료 + 기여도 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>국민연금공단 가입 이력</strong> — 본인·배우자 가입 기간·예상 수령액.</li>\n<li><strong>공무원·사학·군인연금 재직 이력</strong> — 재직기간·예상 퇴직급여·퇴직수당.</li>\n<li><strong>혼인관계증명서·가족관계증명서</strong> — 혼인 기간 입증.</li>\n<li><strong>재산 자료 (부동산·예금·주식)</strong> — 본인·배우자 명의 자산.</li>\n<li><strong>가사노동·자녀양육 기여 자료</strong> — 자녀 학교·병원·돌봄 정황.</li>\n<li><strong>재산 형성 기여 자료</strong> — 부동산 매수·매각 정황·소득 기여.</li>\n<li><strong>위자료 청구 자료</strong> — 외도·폭력·재산처분 등 유책 사유.</li>\n<li><strong>본인 소득·연령 자료</strong> — 노후 산정 참고.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 협의이혼 또는 합의 시 \'연금 분할은 별도로 결정\'을 명시 권장 영역. 명시 없으면 균등 분할 자동 적용(2018두65088). 비율 협의 시 별도 명시 필수.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 상대방 자주 항변과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"전업주부는 기여도 적다" 항변 반박</strong> — 가사노동·자녀양육은 \'쌍방 기여\' 평가 영역. 황혼이혼은 50% 분할 사례 자주 보임.</li>\n<li><strong>"연금은 본인 권리" 항변 반박</strong> — 국민연금 분할은 이혼배우자 고유 권리(2018두65088). 본인 직접 수급. 균등 분할 또는 별도 비율.</li>\n<li><strong>"퇴직 안 한 연금은 분할 못 한다" 항변 반박</strong> — 사실심 변론종결 시 잠재 가치 평가로 재산분할 대상 가능 영역(2017므11917).</li>\n<li><strong>유책배우자 항변 검토</strong> — 본인이 유책배우자라도 별거 장기·책임 상쇄 결합 시 청구 가능 사례(2021므14258). 위자료 별도 부담.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 재산분할·연금분할 무료 법률 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n<li><strong>국민연금공단 1355 / 공무원연금공단 1588-4321</strong> — 분할연금 안내.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공무원연금 재산분할 + 국민연금 분할 명시 의무',
        summary:
          '대법원 2017므11917 사건(대법원, 2019.09.25 선고)에서 법원은 이혼 당시 부부 일방이 아직 공무원으로 재직 중이어서 실제 퇴직급여 등을 수령하지 않았더라도 이혼소송의 사실심 변론종결 시에 이미 잠재적으로 존재하여 경제적 가치의 현실적 평가가 가능한 재산인 퇴직급여 및 퇴직수당 채권은 상대방 배우자의 협력이 기여한 것으로 인정되는 한 재산분할의 대상에 포함시킬 수 있다고 판시했습니다. 또한 대법원 2018두65088 판결은 국민연금법 제64조의 분할연금 수급권은 이혼배우자가 국민연금공단으로부터 직접 수령할 수 있는 고유 권리이며, 이혼당사자 사이의 협의서나 조정조서 등 재판서에 연금 분할 비율을 명시하지 않은 경우 \'별도로 결정된 경우\'로 단정할 수 없다고 보았습니다.',
        takeaway: '황혼이혼 연금분할은 공직연금(잠재 가치 평가) + 국민연금(별도 명시) 트랙 결합으로, 협의서·심판서에 분할 비율 명시 필수. 가사노동 기여 50% 사례가 자주 보이는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '국민연금 분할연금은 언제부터 받나요?',
        answer:
          '<strong>본인 60세(수급 연령) 도달 시부터 직접 수령 영역입니다.</strong> 혼인 기간 5년 이상 + 이혼 + 본인 수급 연령 충족 3요건 결합.',
      },
      {
        question: '남편이 아직 공무원 재직 중인데 연금 분할 가능한가요?',
        answer:
          '<strong>가능 영역입니다(2017므11917).</strong> 사실심 변론종결 시 잠재 가치 평가 + 재산분할 대상. 퇴직급여·퇴직수당 모두 포함.',
      },
      {
        question: '전업주부인데 50% 분할 가능한가요?',
        answer:
          '<strong>황혼이혼에서 자주 보이는 사례 영역입니다.</strong> 가사노동·자녀양육은 쌍방 기여 평가. 사례별 30~50% 산정.',
      },
      {
        question: '연금 분할 비율을 따로 정하고 싶으면 어떻게 하나요?',
        answer:
          '<strong>협의서·심판서에 \'분할 비율\'을 명시 영역입니다(2018두65088).</strong> 명시 없으면 균등 분할 자동 적용. 비율 합의 시 별도 명시 필수.',
      },
      {
        question: '황혼이혼 위자료는 얼마 정도 받나요?',
        answer:
          '<strong>사례별 다르지만 외도·폭력 결합 + 노후 영향 가산 시 2,000~5,000만원 수준이 검토되는 사례가 자주 보이는 영역입니다.</strong> 연령·기간·재산 종합 산정(2024므11526).',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '연금분할 산정 공식', href: '/guide/divorce/divorce-pension-split-formula' },
      { label: '연금분할 시점 안내', href: '/guide/divorce/divorce-pension-division-timeline' },
      { label: '공무원연금 분할', href: '/guide/divorce/divorce-public-servant-pension-split' },
      { label: '황혼이혼 가사노동 기여', href: '/guide/divorce/divorce-late-life-housework-contribution-proof' },
      { label: '30년 결혼 재산분할 비율', href: '/guide/divorce/divorce-30years-marriage-property-division-ratio' },
    ],
  },

  // ─── 5. inheritance / inheritance-contribution-share-caregiving-business-evidence ───
  {
    domain: 'inheritance',
    slug: 'inheritance-contribution-share-caregiving-business-evidence',
    keyword: '기여분 청구 병간호 사업기여 입증',
    questionKeyword: '아버지 10년 병간호하고 가게도 함께 운영했어요. 형제보다 기여분 더 받을 수 있나요?',
    ctaKeyword: '기여분 입증 자료 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '기여분 청구 입증 — 4가지 자료 트랙 (병간호·사업) | 로앤가이드',
      description:
        '부모 병간호·가업 운영 등 특별 기여로 기여분 청구할 때 간병기록·사업기여·동거 자료 4가지 입증 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 5년간 치매로 누워 계셨고, 어머니는 일찍 돌아가셨습니다. 제가 직장 그만두고 풀타임 간병했고, 가게도 같이 운영했어요. 그런데 형제들은 \'우리도 자식이니까 똑같이 나눠야 한다\'고 합니다. 기여분 청구할 수 있을까요?" 기여분(민법 제1008조의2)은 ① 피상속인 부양 ② 재산 유지·증가에 특별한 기여한 상속인이 다른 공동상속인보다 \'더 많이\' 받을 수 있는 제도 영역입니다. 핵심은 \'특별한 기여\' 인정 여부 — 일반적 효도·동거가 아니라 \'다른 상속인이 안 한 수준의 노력\'이 입증돼야 하는 영역. ① 병간호 (장기·풀타임·전문성) ② 가업 기여 (실질 운영·자본 투입·노동 기여) ③ 부양료 부담 (생활비·의료비) ④ 재산 형성 기여 4가지 유형이 자주 다툼되는 영역입니다. 2024스525 판결은 기여분과 특별수익을 분별해 구체적 상속분을 산정하는 방법을 명시했고, 2022스597 판결은 구체적 상속분 산정 기준이 \'상속개시 시\'임을 확인했어요. 자료 부재 + 단순 동거만으로는 인정 어려운 영역.</p>',
    sections: [
      {
        title: 'Q. 기여분 4가지 입증 자료 트랙',
        content:
          '<p><strong style="color:#1e3a5f">A. 병간호·가업 기여·부양료·재산형성 4가지 유형으로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 병간호 기여</strong> — 장기(통상 5년 이상)·풀타임·전문성 결합 인정 영역. 의료기록·간병일지·근로 중단 자료·동거 자료. 단순 \'가끔 방문\'은 부족.</li>\n<li><strong>② 가업·사업 기여</strong> — 실질 운영·자본 투입·무급 노동·매출 기여. 사업자등록·매출 자료·종사자 명단·세무자료. 명목적 동업 부족.</li>\n<li><strong>③ 부양료 부담</strong> — 의료비·생활비·요양원 부담 정황. 송금 내역·납부 내역·세무 신고 결합.</li>\n<li><strong>④ 재산 형성 기여</strong> — 부동산 매수 자금 지원·부채 변제·증·개축 비용 부담. 자금 출처 + 송금 내역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 기여분은 \'특별한 기여\' 영역 — 일반적 효도·동거 부족. 4가지 유형 중 1~2개 결합 + 자료 견고 시 인정 사례. 가족 관계 정황만으로는 다툼 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 기여분 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 정리 → 협의 시도 → 심판 청구 → 변론 → 산정 결정 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 정리 (즉시)</strong> — 병간호 일지·의료기록·사업 자료·송금 내역·근로 중단 자료. 시간순 시간선 정리.</li>\n<li><strong>2단계 — 공동상속인 협의 시도 (1~2개월)</strong> — 자료 제시 + 기여분 비율 협의. 합의 시 분할협의서 + 등기 절차 진행.</li>\n<li><strong>3단계 — 가정법원 기여분결정 + 상속재산분할 심판 청구</strong> — 협의 결렬 시 마류 가사비송 사건. 기여분 + 분할 동시 청구.</li>\n<li><strong>4단계 — 변론·증거조사</strong> — 자료 제출 + 증인 신문(요양보호사·이웃·종사자). 가정법원 가사조사관 조사 결합.</li>\n<li><strong>5단계 — 기여분 비율 결정·분할</strong> — 가정법원이 기여분 비율(통상 5~30% 사례) 결정 후 잔여 상속재산 분할(2024스525·2022스597).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">기여분 4가지 입증 자료 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 병간호 자료 + 사업 자료 + 부양료 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>의료기록·진단서·간병기록</strong> — 병명·간병 기간·강도.</li>\n<li><strong>본인 근로 중단 자료</strong> — 퇴사·휴직·근로소득 감소 자료.</li>\n<li><strong>동거 자료</strong> — 주민등록·세대주·생활비 분담.</li>\n<li><strong>사업자등록·매출 자료</strong> — 가업 운영 시 실질 기여 입증.</li>\n<li><strong>부양료 송금·납부 내역</strong> — 의료비·생활비·요양원비.</li>\n<li><strong>재산 형성 기여 자료</strong> — 부동산 매수 자금·부채 변제 송금.</li>\n<li><strong>증인 진술서</strong> — 요양보호사·이웃·종사자·친척.</li>\n<li><strong>피상속인 사망진단서·가족관계증명서</strong> — 기본 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시간선(timeline) 표가 핵심 영역. \'언제부터 언제까지·어떤 기여·자료 무엇\' 한 표로 정리하면 가정법원 평가 효율적. 단순 \'평소 효도했다\'는 부족.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 다른 상속인 자주 항변과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"우리도 자식이니 똑같이" 항변 반박</strong> — 기여분은 \'특별한 기여\' 영역. 일반 효도·동거 부족. 자료 견고성·기간·강도가 핵심.</li>\n<li><strong>"가업은 명의만 빌렸다" 항변 반박</strong> — 사업자등록·매출·종사자 명단·세무자료 결합 시 실질 운영 입증 영역.</li>\n<li><strong>"병간호는 의무" 항변 반박</strong> — 일반 부양 의무를 넘는 \'장기·풀타임·전문성\' 결합 시 특별 기여 인정 영역. 본인 직장 포기 정황 강한 자료.</li>\n<li><strong>특별수익 결합 다툼</strong> — 본인이 생전 증여 받았으면 특별수익 공제 후 산정 영역(2024스525). 기여분 + 특별수익 분별.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 기여분·상속 무료 법률 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n<li><strong>가정법원 가사조사관</strong> — 상속재산분할 심판 안내.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 기여분과 특별수익 분별 + 구체적 상속분 산정',
        summary:
          '대법원 2024스525 사건(대법원, 2024.06.13 선고)에서 법원은 민법 제1008조에 따라 공동상속인 중 피상속인으로부터 재산의 증여 또는 유증을 받은 특별수익자가 있는 경우 공동상속인들 사이의 공평을 기하기 위하여 그 수증재산을 상속분의 선급으로 다루어 구체적인 상속분을 산정하는 데 참작해야 한다고 판시했습니다. 또한 대법원 2022스597 판결은 구체적 상속분의 산정 기준 시기가 상속개시 시이며, 법원이 상속재산 분할방법을 후견적 재량으로 결정할 수 있되 그 한계가 있다고 보았습니다. 수원고등법원 2022브10020 사건(2024.10.30 선고)은 청구인이 공동상속인 간의 공평을 위하여 상속분을 조정하여야 할 만큼 피상속인의 재산 유지·증가에 \'특별히\' 기여하였다고 볼 수 없다고 판단해, 기여분 인정 기준이 엄격한 영역임을 보여줍니다.',
        takeaway: '기여분 청구는 병간호·사업기여·부양료·재산형성 4가지 자료 트랙 결합 영역으로, 시간선 정리 + 자료 견고성이 핵심. 단순 동거·일반 효도는 인정 어려운 영역입니다.',
      },
    ],
    faq: [
      {
        question: '병간호만으로도 기여분 받을 수 있나요?',
        answer:
          '<strong>장기(5년 이상)·풀타임·전문성 결합 시 인정 사례 영역입니다.</strong> 본인 직장 포기 + 의료기록 + 간병일지 결합. 단순 가끔 방문은 부족.',
      },
      {
        question: '기여분 비율은 어떻게 산정되나요?',
        answer:
          '<strong>사례별 다르지만 5~30% 수준이 검토되는 사례가 자주 보이는 영역입니다.</strong> 기여 강도·기간·다른 상속인 기여 대비 비교 평가.',
      },
      {
        question: '가업 운영했는데 명의는 부모님이었어요',
        answer:
          '<strong>사업자등록·매출·종사자·세무자료 결합 시 실질 운영 입증 영역입니다.</strong> 무급 노동·자본 투입 자료 핵심.',
      },
      {
        question: '본인이 생전 증여 받았으면 기여분 못 받나요?',
        answer:
          '<strong>특별수익 공제 후 산정 영역입니다(2024스525).</strong> 기여분 + 특별수익 분별 후 구체적 상속분 결정. 동시 다툼 가능.',
      },
      {
        question: '협의 안 되면 어디로 청구하나요?',
        answer:
          '<strong>가정법원에 기여분결정 + 상속재산분할 심판 청구 영역입니다.</strong> 마류 가사비송 사건. 변호사 조력 권장.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '기여분 청구 분쟁', href: '/guide/inheritance/inheritance-contribution-portion-dispute' },
      { label: '특별수익 + 기여분 결합', href: '/guide/inheritance/inheritance-special-gift-contribution-claim' },
      { label: '상속재산 분할 협의', href: '/guide/inheritance/inheritance-division-disagreement-court-judgment' },
      { label: '가정법원 분할 조정', href: '/guide/inheritance/inheritance-division-mediation-tribunal' },
      { label: '상속재산 평가 분쟁', href: '/guide/inheritance/inheritance-real-estate-valuation-dispute' },
    ],
  },

  // ─── 6. inheritance / inheritance-limited-acceptance-liquidation-5steps ───
  {
    domain: 'inheritance',
    slug: 'inheritance-limited-acceptance-liquidation-5steps',
    keyword: '한정승인 청산 5단계',
    questionKeyword: '한정승인 결정 받았어요. 그 다음 신문공고·채권자 신고·비율변제는 어떻게 진행하나요?',
    ctaKeyword: '한정승인 청산 5단계 점검',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '한정승인 후 청산 — 5단계 절차 가이드 | 로앤가이드',
      description:
        '한정승인 결정 후 신문공고·채권자 신고 접수·재산 환가·비율 변제·잔여재산 분배 5단계 청산 절차와 단순승인 의제 회피 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>"한정승인 결정문은 받았는데, 그 다음에 뭘 어떻게 해야 하는지 모르겠어요. 신문공고를 한다는데 어디서·언제까지 해야 하나요? 빚 갚는 순서도 정해져 있다던데요." 한정승인은 \'결정문 받기\'가 끝이 아니라 ① 신문공고(2개월 이상) ② 채권자 신고 접수 ③ 재산 환가 ④ 비율 변제 ⑤ 잔여재산 분배 5단계 청산 절차가 핵심 영역입니다(민법 제1032조 이하). 절차 누락 시 단순승인 의제 위험(민법 제1026조 제3호 — \'한정승인 후 재산을 은닉하거나 부정소비하거나 고의로 재산목록에 기입하지 아니한 때\')이라 모든 단계를 정확히 진행해야 하는 영역. 2019다29853 판결은 \'고의로 재산목록에 기입하지 아니한 때\'에 해당하기 위해서는 상속재산 은닉 + 상속채권자 사해 의사가 필요하다고 보았어요. 또한 2011스226 판결은 한정승인에 따른 청산절차가 종료되지 않은 경우에도 상속재산분할청구가 가능하다고 봤어요. 청산 5단계는 일반인이 단독 진행하기 어려운 영역이라 변호사 조력이 자주 필요한 트랙.</p>',
    sections: [
      {
        title: 'Q. 한정승인 청산 4단계 절차 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 신문공고·채권자 신고·재산 환가·비율 변제 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 신문공고 (한정승인 5일 내, 2개월 이상)</strong> — 한정승인 받은 후 5일 내 일간신문에 공고 + 채권자 신고 기간(2개월 이상) 명시(민법 제1032조). 누락 시 절차 하자.</li>\n<li><strong>② 채권자 신고 접수 + 재산목록 작성</strong> — 공고 기간 내 채권자 신고 받음 + 재산목록 정확히 작성. 누락·은닉 시 단순승인 의제 위험 영역(민법 제1026조 제3호).</li>\n<li><strong>③ 재산 환가</strong> — 부동산·동산·예금을 환가(매각·인출). 변제 재원 확보. 시가 적정 평가 필수.</li>\n<li><strong>④ 비율 변제</strong> — 신고된 채권자에게 \'채권액 비율\'로 변제. 우선권자(저당권·임금·세금) 우선 + 일반채권자 비율 분배(민법 제1034조).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 한정승인 청산은 5단계 모두 정확히 진행해야 하는 영역. 절차 누락 시 단순승인 의제 위험. 변호사·법무사 조력 권장 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청산 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 공고 → 신고 접수 → 환가 → 변제 → 잔여재산 분배 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신문공고 (한정승인 5일 내, 2개월 이상)</strong> — 일간신문에 공고. 채권자 신고 기간 명시. 비용 약 30~50만원 영역.</li>\n<li><strong>2단계 — 채권자 신고 접수 + 재산목록 확정 (2~3개월)</strong> — 공고 기간 내 채권자 신고 받음. 정확한 재산목록 작성. 은닉·누락 시 단순승인 의제 위험.</li>\n<li><strong>3단계 — 재산 환가 (3~6개월)</strong> — 부동산 매각·예금 인출·동산 매각. 시가 적정 평가 + 매각 절차. 부동산은 별도 강제경매 가능 영역.</li>\n<li><strong>4단계 — 비율 변제 (환가 후)</strong> — 우선권자(저당권·임금·세금) 우선 변제 + 일반채권자 비율 분배(민법 제1034조). 변제 명세서 작성·교부.</li>\n<li><strong>5단계 — 잔여재산 분배·청산 종료 (전체 6~12개월)</strong> — 변제 후 잔여재산 있으면 상속인 분배. 상속채권자에게 미통지된 후발 채권자는 추가 청구 가능 영역(민법 제1037조 이하).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">한정승인 청산 5단계를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신청 서류 + 재산 자료 + 채권자 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>한정승인 결정문</strong> — 가정법원 결정문.</li>\n<li><strong>재산목록 (정확히)</strong> — 부동산 등기부·예금·주식·동산 누락 없이.</li>\n<li><strong>안심상속 원스톱서비스 결과지</strong> — 부동산·금융·세금·연금 한꺼번에 조회.</li>\n<li><strong>채무 자료</strong> — 한국신용정보원·카드사·통신사·보증채무.</li>\n<li><strong>신문공고 자료</strong> — 일간신문 게재 영수증·게재일·기간 명시.</li>\n<li><strong>채권자 신고 접수 명단</strong> — 신고일·채권액·우선권 여부.</li>\n<li><strong>재산 환가 자료</strong> — 매각계약서·인출 내역.</li>\n<li><strong>변제 명세서</strong> — 채권자별 변제액·비율·우선권 적용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 재산목록은 \'정확히\'가 핵심 영역. 알면서도 누락하면 단순승인 의제 위험(민법 제1026조 제3호). 보수적으로 \'있을 만한 자산\'까지 모두 기재 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생 위기와 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"재산 누락 = 단순승인 의제" 위험</strong> — 민법 제1026조 제3호 — 은닉·부정소비·고의 누락 시 한정승인 효력 소멸. 다만 \'사해 의사\' 입증 필요(2019다29853).</li>\n<li><strong>신문공고 누락 위험</strong> — 5일 내 공고 누락 시 절차 하자. 채권자 \'알지 못한 채\' 변제 후 후발 청구 가능 위험.</li>\n<li><strong>비율 변제 분쟁</strong> — 우선권자(저당권·임금·세금) 우선 + 일반채권자 비율. 잘못 변제 시 책임 영역.</li>\n<li><strong>한정승인 + 상속재산분할 결합</strong> — 청산절차 종료 전에도 상속재산분할 청구 가능 영역(2011스226). 공동상속인 분쟁 결합 시 변호사 조력.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 한정승인·청산 무료 법률 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n<li><strong>정부24 안심상속 원스톱서비스</strong> — 재산·채무 한꺼번에 조회.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 단순승인 의제 요건 + 청산 중 분할 청구',
        summary:
          '대법원 2019다29853 사건(대법원, 2022.07.28 선고)에서 법원은 민법 제1026조 제3호의 \'고의로 재산목록에 기입하지 아니한 때\'에 해당하기 위해서는 상속인이 상속재산을 은닉하여 상속채권자를 사해할 의사가 있을 것을 필요로 하며 그 증명책임은 이를 주장하는 측에 있다고 판시했습니다. 또한 대법원 2011스226 판결은 한정승인 절차가 상속재산분할 절차보다 선행해야 한다는 명문 규정이 없으므로, 한정승인에 따른 청산절차가 종료되지 않은 경우에도 상속재산분할청구가 가능하다고 보아, 청산 절차 중 분할 청구 결합이 가능한 영역임을 확인했습니다.',
        takeaway: '한정승인 청산은 신문공고·신고 접수·환가·비율 변제 5단계 + 단순승인 의제 회피 영역으로, 재산목록 정확성 + 사해 의사 부재가 핵심. 변호사·법무사 조력이 자주 필요한 트랙입니다.',
      },
    ],
    faq: [
      {
        question: '신문공고는 어디에 어떻게 하나요?',
        answer:
          '<strong>일간신문에 한정승인 5일 내 공고 영역입니다(민법 제1032조).</strong> 채권자 신고 기간(2개월 이상) 명시. 비용 약 30~50만원. 누락 시 절차 하자.',
      },
      {
        question: '재산목록을 잘못 적으면 어떻게 되나요?',
        answer:
          '<strong>고의·사해 의사 결합 시 단순승인 의제 위험 영역입니다(민법 제1026조 제3호).</strong> 한정승인 효력 소멸. 다만 사해 의사 입증 책임은 주장하는 측(2019다29853).',
      },
      {
        question: '변제 순서는 어떻게 되나요?',
        answer:
          '<strong>우선권자(저당권·임금·세금) 우선 + 일반채권자 비율 분배 영역입니다(민법 제1034조).</strong> 잘못 변제 시 책임. 채권자 신고 명단 정확히 정리.',
      },
      {
        question: '청산 끝나도 채권자가 추가 청구하면 어떻게 되나요?',
        answer:
          '<strong>미통지 후발 채권자는 잔여재산 한도 추가 청구 가능 영역입니다(민법 제1037조 이하).</strong> 상속 재산을 초과한 채무는 책임 없음.',
      },
      {
        question: '청산 진행 중 다른 상속인이 분할 청구하면 어떻게 되나요?',
        answer:
          '<strong>청산 종료 전에도 분할 청구 가능 영역입니다(2011스226).</strong> 청산 절차 + 분할 절차 결합 가능. 변호사 조력 권장.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '한정승인 준비', href: '/guide/inheritance/inheritance-limited-acceptance-preparation' },
      { label: '한정승인 채권자 대응', href: '/guide/inheritance/inheritance-limited-acceptance-creditor-response' },
      { label: '단순승인 의제 회피', href: '/guide/inheritance/inheritance-limited-acceptance-after-sell-deemed-simple' },
      { label: '한정승인 vs 상속포기', href: '/guide/inheritance/inheritance-renunciation-vs-limited-acceptance' },
      { label: '특별한정승인 시점', href: '/guide/inheritance/inheritance-special-limited-approval-3months-start' },
    ],
  },

  // ─── 7. inheritance / inheritance-grandchild-substitute-special-gift-exclusion ───
  {
    domain: 'inheritance',
    slug: 'inheritance-grandchild-substitute-special-gift-exclusion',
    keyword: '대습상속인 대습원인 이전 증여 특별수익',
    questionKeyword: '아버지가 먼저 돌아가시고 할아버지 상속이 개시됐어요. 제가 어릴 때 받은 증여가 특별수익에 포함되나요?',
    ctaKeyword: '대습상속 특별수익 점검',
    type: 'Q&A형',
    perspective: 'neutral',
    meta: {
      title: '대습상속 + 특별수익 분별 — 4가지 점검 축 | 로앤가이드',
      description:
        '대습상속(부모 사망 후 손자녀 상속)에서 대습원인 이전에 받은 증여가 특별수익에 해당하는지 다툼이 있다면 2024스525 판결 기준 4가지 점검 축을 지금 확인하세요.',
    },
    intro:
      '<p>"제 아버지가 할아버지보다 먼저 돌아가셨고, 이번에 할아버지가 돌아가셨어요. 저는 손자라서 아버지 대신 상속받게 됐어요(대습상속). 그런데 작은아버지가 \'너는 어릴 때 할아버지한테 학비를 받았으니 특별수익으로 차감해야 한다\'고 합니다. 정말 그런가요?" 대습상속(민법 제1001조)은 상속개시 전에 사망 또는 결격된 상속인의 직계비속이 그 상속분을 대습하는 제도 영역입니다. 그런데 대습상속인이 \'대습원인(부모 사망) 발생 이전\'에 피상속인(조부모)으로부터 받은 증여가 특별수익(민법 제1008조)에 해당하는지 다툼이 자주 있는 영역. 2024스525 판결은 \'대습상속인이 대습원인 발생 이전에 피상속인으로부터 증여를 받은 경우, 대습상속인의 위와 같은 수익이 특별수익에 해당하는지\'에 대해 \'소극(특별수익 아님)\'으로 판시했어요. 즉 대습원인 발생 이전 증여는 특별수익 공제 대상이 아닌 영역. 이 페이지는 대습상속인이 받은 증여 시점을 확정해 특별수익 여부를 다투는 트랙을 정리합니다.</p>',
    sections: [
      {
        title: 'Q. 대습상속 + 특별수익 4가지 점검 축',
        content:
          '<p><strong style="color:#1e3a5f">A. 대습원인 시점·증여 시점·특별수익 해당 여부·공제 산정 4가지 축으로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 대습원인 시점 확정</strong> — 대습원인(부모 사망·결격) 발생일 명확히 확정. 사망진단서·기본증명서.</li>\n<li><strong>② 증여 시점 확정</strong> — 학비·결혼자금·부동산 명의 이전 등 시점. 통장 송금·등기 변경·납부 기록.</li>\n<li><strong>③ 대습원인 이전 vs 이후 분별 (2024스525)</strong> — 대습원인 \'이전\' 증여는 특별수익 아님(2024스525). 대습원인 \'이후\' 증여는 특별수익 검토 영역.</li>\n<li><strong>④ 공제 산정 결합</strong> — 특별수익 인정 시 구체적 상속분 산정 시 공제. 이후 상속분에서 차감(민법 제1008조).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대습상속에서 \'대습원인 이전\' 증여는 특별수익 공제 대상이 아닌 영역(2024스525). 시점 확정이 핵심 다툼.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 분별 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 확보 → 시점 확정 → 분별 → 협의 또는 심판 → 분할 결정 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증여 자료 확보 (즉시)</strong> — 통장 송금·등기 변경·학비 납부·결혼자금 정황. 시점 명확히.</li>\n<li><strong>2단계 — 대습원인 시점 확정</strong> — 부모 사망진단서·기본증명서. 증여 시점과 비교.</li>\n<li><strong>3단계 — 분별 (대습원인 이전 vs 이후)</strong> — 이전 증여는 특별수익 아님(2024스525) → 차감 부정. 이후 증여는 특별수익 검토 → 공제 산정.</li>\n<li><strong>4단계 — 공동상속인 협의 또는 가정법원 심판 청구 (협의 결렬 시)</strong> — 협의 시 분할협의서 + 등기. 결렬 시 가정법원 상속재산분할심판.</li>\n<li><strong>5단계 — 분할 결정·등기</strong> — 가정법원이 특별수익·기여분 종합 산정 후 분할. 등기·예금 분배.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 상속 빚이 더 많은지, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">대습상속 + 특별수익 4가지 점검 축을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 시점 자료 + 증여 자료 + 상속 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>피대습인(부모) 사망진단서·기본증명서</strong> — 대습원인 시점 확정.</li>\n<li><strong>피상속인(조부모) 사망진단서·기본증명서</strong> — 상속개시 시점 확정.</li>\n<li><strong>증여 자료 (통장·등기·납부)</strong> — 학비·결혼자금·부동산 이전 시점.</li>\n<li><strong>가족관계증명서·제적등본</strong> — 대습상속 자격 입증.</li>\n<li><strong>상속재산 목록</strong> — 부동산·금융재산·동산.</li>\n<li><strong>상속재산분할심판청구서 (필요 시)</strong> — 협의 결렬 시 가정법원 양식.</li>\n<li><strong>다른 상속인 증여 자료</strong> — 형평 비교 + 특별수익 공제 다툼.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시점이 핵심 다툼이라 \'증여 시점 vs 대습원인 시점\' 한 줄에 표시한 시간선 자료가 효과적. 송금일·등기일·납부일 등 명확한 자료 우선.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 다른 상속인 자주 항변과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"대습 이전 증여도 특별수익" 항변 반박</strong> — 2024스525 판결로 대습원인 이전 증여는 특별수익 아님(소극). 대법원 명시 입장 영역.</li>\n<li><strong>"증여 시점 모호" 항변 반박</strong> — 통장 송금·등기 변경 일자로 시점 객관 확정. 학비·생활비 등 정기 송금은 시간선 표 효과적.</li>\n<li><strong>"보험금도 증여" 항변 검토</strong> — 피상속인이 피대습인 피보험자 + 대습상속인 수익자 지정 생명보험은 시점·구조 따라 증여 평가 영역(2024스525). 사례별.</li>\n<li><strong>"결혼자금은 무조건 특별수익" 항변 검토</strong> — 통상 결혼자금은 특별수익 검토 대상이지만 대습원인 이전 증여라면 2024스525 적용.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 대습상속·특별수익 무료 법률 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n<li><strong>가정법원 가사조사관</strong> — 상속재산분할 심판 안내.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대습상속인의 대습원인 이전 증여는 특별수익 아님',
        summary:
          '대법원 2024스525 사건(대법원, 2024.06.13 선고)에서 법원은 민법 제1008조의 규정 취지를 종합 고려할 때, 대습상속인이 대습원인의 발생 이전에 피상속인으로부터 증여를 받은 경우 대습상속인의 위와 같은 수익이 특별수익에 해당하는지 여부에 대해 \'소극(특별수익에 해당하지 아니한다)\'으로 판시했습니다. 또한 피상속인의 재산처분행위가 구체적 상속분 산정을 위한 분할대상 상속재산에 포함되는 증여에 해당하는지 판단하는 기준을 제시하면서, 피상속인이 피대습인을 피보험자로 하되 대습상속인을 보험수익자로 지정한 생명보험계약을 체결하고 보험계약자로서 보험료를 납부하다가 피대습인이 사망하여 대습상속인이 생명보험금을 수령한 경우의 증여 시점을 \'대습상속인을 보험수익자로 지정한 시점\'으로 보는 등 시점 판단 기준을 명확히 했습니다.',
        takeaway: '대습상속에서 \'대습원인 이전\' 증여는 특별수익 공제 대상이 아닌 영역(2024스525)으로, 시점 확정이 핵심 다툼이라 송금·등기·납부 일자 자료를 정리하면 분별 트랙이 열리는 영역입니다.',
      },
    ],
    faq: [
      {
        question: '대습상속이 정확히 뭔가요?',
        answer:
          '<strong>상속개시 전 사망·결격된 상속인의 직계비속이 그 상속분을 대습하는 제도입니다(민법 제1001조).</strong> 예: 아버지가 할아버지보다 먼저 사망 → 손자가 아버지 상속분 대습.',
      },
      {
        question: '제가 어릴 때 받은 학비는 특별수익인가요?',
        answer:
          '<strong>대습원인(부모 사망) 이전 증여라면 특별수익 아닌 영역입니다(2024스525).</strong> 시점 확정 자료 핵심.',
      },
      {
        question: '대습원인 이후 증여는 어떻게 되나요?',
        answer:
          '<strong>특별수익 검토 대상 영역입니다.</strong> 일반 상속인 증여와 동일 기준 적용. 구체적 상속분 산정 시 공제(민법 제1008조).',
      },
      {
        question: '생명보험금도 특별수익으로 차감되나요?',
        answer:
          '<strong>피상속인이 보험계약자 + 대습상속인이 수익자인 경우 시점·구조 따라 평가 영역입니다(2024스525).</strong> 보험수익자 지정 시점이 증여 시점으로 평가될 수 있는 영역.',
      },
      {
        question: '협의 안 되면 어디로 청구하나요?',
        answer:
          '<strong>가정법원에 상속재산분할심판 청구 영역입니다.</strong> 마류 가사비송 사건. 특별수익 + 기여분 + 분할 결합 청구 가능.',
      },
    ],
    cta: { text: '상속 빚이 더 많은지, AI로 먼저 점검하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '대습상속 비율', href: '/guide/inheritance/inheritance-grandchild-substitute-right-ratio' },
      { label: '특별수익 + 기여분 결합', href: '/guide/inheritance/inheritance-special-gift-contribution-claim' },
      { label: '생전 증여 유류분 산정', href: '/guide/inheritance/inheritance-pre-death-gift-yuryubun-calculation' },
      { label: '상속재산 분할 협의', href: '/guide/inheritance/inheritance-division-disagreement-court-judgment' },
      { label: '가정법원 분할 조정', href: '/guide/inheritance/inheritance-division-mediation-tribunal' },
    ],
  },
];
