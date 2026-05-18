import { SpokePage } from '../spoke-pages';

// batch69 assault-cs-dui — 6개 (2026-05-19)
//
// 고유 존재 이유:
// 1. assault-online-meetup-offline-conflict-track — 데이팅앱·온라인 동호회 등 사전 면식 없는 만남에서 오프라인 충돌. 면식 관계(직장·이웃) 트랙과 분기: "낯선 1회성 만남 + 증거·신원 확보 어려움" 트랙.
// 2. assault-protest-rally-counter-protester-collision-track — 집회·시위 현장에서 상대 진영(맞불) 참가자와의 신체 충돌. 일반 군중 폭행과 분기: "집회 맥락 + 다수 가해 + 정치적 다툼" 트랙.
// 3. assault-elder-care-worker-patient-attacker-victim-track — 요양보호사·간병인이 인지장애 환자·보호자로부터 폭행 피해. 기존 elderly-care-facility-abuse(환자 피해) 와 반대 트랙: "종사자 피해 + 산재·업무상재해" 트랙.
// 4. child-support-payer-cohabitant-income-imputation-track — 양육비 산정 시 비양육친의 동거인(재혼 배우자·사실혼) 소득 반영 다툼. 기존 ex-remarriage-reduction-possible / paying-parent-remarriage-newchild-reduction 과 분기: "동거인 소득 산입 + 자녀 복리" 트랙.
// 5. child-support-arrears-lump-sum-payment-credit-restoration-track — 비양육친 시점, 미지급 양육비 일시 청산 후 명단공개·출국제한·신용 등록 해제. 기존 non-payer-credit-information-registration 과 분기: "등록 후 청산·해제" 트랙.
// 6. dui-electric-vehicle-charging-restart-operation-track — 전기차 정차 충전 중 시동을 걸어 짧게 이동(주차장 내). 일반 음주운전 트랙과 분기: "전기차 특수성 + 시동/운행 정의 + 긴급피난 다툼" 트랙.

export const spokesBatch69AssaultCsDui: SpokePage[] = [
  // ─── 1. assault-online-meetup-offline-conflict-track ───
  {
    domain: 'assault',
    slug: 'assault-online-meetup-offline-conflict-track',
    keyword: '온라인 만남 오프라인 충돌 폭행',
    questionKeyword: '데이팅앱에서 만난 사람과 술자리에서 다투다가 폭행 당했어요. 신원·증거 어떻게 잡나요?',
    ctaKeyword: '온라인 만남 폭행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '온라인 만남 오프라인 폭행 — 5단계 신원·증거 확보 트랙 | 로앤가이드',
      description:
        '데이팅앱·온라인 동호회에서 만난 사람에게 오프라인 폭행을 당했다면 신원·증거 5가지 확보 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"데이팅앱에서 두 달 전부터 메시지를 주고받던 상대를 처음 오프라인에서 만나 식당·술집을 이동한 끝에 사소한 말다툼이 시작됐고, 상대가 갑자기 컵을 던지고 손으로 얼굴을 가격해 입술이 찢어졌어요. 본명·주소·직장도 모르고 카톡 닉네임과 휴대폰 번호만 있는 상태에서, 어디부터 신원과 증거를 잡아야 하는지 막막합니다." 온라인 만남 오프라인 폭행 피해자라면 ① 형법 260조 폭행·257조 상해죄 ② 신원 특정 (앱 운영사 자료보전 + 통신영장) ③ 가게 CCTV·영수증·교통카드 동선 확보 ④ 상해진단서 객관 입증 ⑤ 형사 고소 + 민사 손해배상 + 범죄피해자 지원 5가지가 결합되는 영역. 1회성 낯선 만남은 사전 면식 트랙과 달리 \"누구인지부터\" 잡아야 하므로 앱·메신저 자료보전 요청이 최우선. 대응은 ① 즉시 신고 ② 신원 ③ 증거 ④ 진단 ⑤ 고소·민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 온라인 만남 오프라인 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·신원·증거·진단·고소 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 112 즉시 신고·현장 경찰 진술</strong></li>\n<li><strong>② 앱·메신저 운영사 자료보전 요청</strong></li>\n<li><strong>③ 가게 CCTV·영수증·교통카드 동선</strong></li>\n<li><strong>④ 응급실 진단서·치료비 영수증</strong></li>\n<li><strong>⑤ 폭행·상해 고소 + 민사 + 피해자지원</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 1회성 낯선 만남은 신원 특정이 첫 관문. 앱 운영사 자료보전 → 경찰 통신영장 → 본명·주소 확인 순서. 가게 CCTV·결제 자료는 동석 사실 입증 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·자료·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 112 신고·현장 경찰 진술·앱 화면 캡처 (즉시)</strong></li>\n<li><strong>2단계 — 응급실 진단서·치료 (즉시~1주)</strong></li>\n<li><strong>3단계 — 앱·메신저 운영사 자료보전 요청 (1주)</strong></li>\n<li><strong>4단계 — 경찰 통신영장·신원 특정 (1~2개월)</strong></li>\n<li><strong>5단계 — 폭행·상해 고소 + 민사 손해배상 (3~6개월)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인 만남 폭행 신원·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신원·증거·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>앱·메신저 닉네임·프로필·대화 캡처</strong></li>\n<li><strong>가게 CCTV·영수증·카드 결제 내역</strong></li>\n<li><strong>교통카드·택시 결제 동선 자료</strong></li>\n<li><strong>응급실 진단서·치료비·약제 내역</strong></li>\n<li><strong>112 신고 접수번호·경찰 진술조서</strong></li>\n<li><strong>본인 휴대폰 번호·통신사 가입 자료</strong></li>\n<li><strong>피해자지원센터 신청서·인적사항</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 앱 대화는 시간·날짜·닉네임 포함 전체 캡처 권장. 운영사 자료는 시간 지나면 삭제될 여지가 있어 자료보전 요청을 빠르게. 영수증·카드 결제는 동석·동행 입증 객관 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>신원 특정</strong> — 앱 운영사 협조 핵심.</li>\n<li><strong>동석 사실</strong> — CCTV·결제 자료 결합.</li>\n<li><strong>먼저 시비</strong> — 상대 주장 다툼 영역.</li>\n<li><strong>상해 인과</strong> — 진단서 시점·시간 근접성.</li>\n<li><strong>피해자지원</strong> — 의료비·생계비 지원 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 112·사이버범죄 신고 (ecrm.police.go.kr)</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상해진단서 증명력 평가',
        summary:
          '대법원 2025도11886(대법원, 2025.12.04 선고) 영역에서 법원은 형사사건에서 상해진단서의 증명력에 관해, 상해진단서는 피해자의 진술과 함께 피고인의 범죄사실을 증명하는 유력한 증거가 될 수 있지만 상해 사실의 존재 및 인과관계는 합리적 의심이 없는 정도의 증명에 이르러야 하고, 진단일자가 상해 발생 시점과 시간상 근접하고 발급 경위에 신빙성을 의심할 사정이 없는지 등을 신중히 판단해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '상해진단서는 시간 근접성·발급 경위 평가 영역. 폭행 직후 즉시 진료가 입증력 핵심. 객관 증거(CCTV·영수증) 결합 권장.',
      },
    ],
    faq: [
      {
        question: '닉네임만 알고 본명·주소를 모르는데 고소 가능한가요?',
        answer:
          '<strong>경찰 수사 단계에서 통신영장·앱 운영사 자료보전으로 신원 특정이 진행되는 영역이라 닉네임·휴대폰 번호만으로도 고소 접수가 가능합니다.</strong>',
      },
      {
        question: '앱 대화 기록은 어떻게 보존하나요?',
        answer:
          '<strong>화면 캡처·앱 내 \"신고\" 기능·운영사 자료보전 요청을 병행하시는 것이 좋고 데이터는 시간 지나면 삭제될 여지가 있어 빠른 조치가 권장됩니다.</strong>',
      },
      {
        question: '진단서는 며칠 안에 받아야 하나요?',
        answer:
          '<strong>가능하면 폭행 당일 응급실 또는 다음 날 정형외과·이비인후과 진료 권장되고 시간 경과 시 인과관계 입증력이 약해질 여지가 있습니다.</strong>',
      },
      {
        question: '범죄피해자지원센터 도움은 어디까지 받을 수 있나요?',
        answer:
          '<strong>의료비·심리상담·생계비 지원·법률 상담 등 종합 지원이 검토되는 영역이고 1577-1295로 상담 가능합니다.</strong>',
      },
      {
        question: '상대가 "쌍방"이라고 주장하면 어떻게 하나요?',
        answer:
          '<strong>CCTV·결제·진단서로 먼저 가격한 측·정도를 구분하는 평가 영역이고 변호인 상담 권장됩니다.</strong>',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '폭행 가해자 첫 대응', href: '/guide/assault/assault-charged-first-response' },
      { label: '낯선 사람 무작위 폭행', href: '/guide/assault/assault-stranger-random-attack-victim-track' },
      { label: '폭행 vs 상해 처벌', href: '/guide/assault/assault-vs-injury-penalties' },
      { label: '범죄피해자 지원', href: '/guide/assault/assault-victim-where-to-start' },
    ],
  },

  // ─── 2. assault-protest-rally-counter-protester-collision-track ───
  {
    domain: 'assault',
    slug: 'assault-protest-rally-counter-protester-collision-track',
    keyword: '집회 시위 맞불 충돌 폭행',
    questionKeyword: '집회 현장에서 맞불집회 참가자와 몸싸움이 벌어져 다쳤어요. 어떻게 정리하나요?',
    ctaKeyword: '집회 충돌 폭행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '집회·시위 맞불 충돌 폭행 — 5단계 다수 가해·정치 맥락 트랙 | 로앤가이드',
      description:
        '집회 현장에서 맞불집회 참가자와의 충돌로 폭행 피해를 입었다면 5가지 신고·증거·고소 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"광장에서 진행된 집회에 참가했는데, 인근 맞불집회 측 참가자 여러 명이 갑자기 다가와 깃대로 어깨를 가격하고 발로 밀쳐 넘어뜨려 무릎 인대가 늘어났습니다. 가해자가 여러 명이라 누구를 특정해야 할지, 정치적 충돌이라며 \'쌍방\'으로 몰릴까 봐 어디부터 정리해야 하는지 막막합니다." 집회 맞불 충돌 폭행 피해자라면 ① 형법 260조 폭행·257조 상해 + 폭처법 2조 공동폭행 ② 집회 및 시위에 관한 법률 위반 결합 여부 ③ 다수 가해 신원 특정 (현장 영상·언론 사진·동선) ④ 정당방위 vs 쌍방 다툼 ⑤ 형사 + 민사 + 범죄피해자지원 5가지가 결합되는 영역. 집회 현장은 영상·사진·기자 취재 자료가 많아 가해자 특정 가능성이 높은 반면, 정치·이념 다툼 맥락이 결합되어 \"쌍방\"으로 정리될 위험도 있는 영역. 대응은 ① 신고 ② 영상 ③ 진단 ④ 신원 ⑤ 고소 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 집회 맞불 충돌 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·영상·진단·신원·고소 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 112·현장 경찰 신고·진술서</strong></li>\n<li><strong>② 본인 휴대폰·동행자·취재 영상 확보</strong></li>\n<li><strong>③ 응급실 진단서·치료비</strong></li>\n<li><strong>④ 가해자 다수 신원 특정 (얼굴·복장·소속)</strong></li>\n<li><strong>⑤ 폭처법 공동폭행 고소 + 민사</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 집회 현장은 영상 자료가 풍부한 환경. 다수 가해는 폭처법 공동폭행 평가 영역. 정당방위 vs 쌍방 다툼 구분이 핵심 다툼.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·자료·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 112 신고·현장 경찰 진술·동행자 연락처 (즉시)</strong></li>\n<li><strong>2단계 — 휴대폰·취재 영상·SNS 라이브 캡처 (즉시~1주)</strong></li>\n<li><strong>3단계 — 응급실 진단서·치료 기록</strong></li>\n<li><strong>4단계 — 가해자 다수 신원 특정·집회 주최 측 자료</strong></li>\n<li><strong>5단계 — 폭처법 공동폭행 고소 + 민사 손해배상 (3~6개월)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">집회 맞불 충돌 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 영상·신원·진단 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인 휴대폰·동행자 촬영 영상·사진</strong></li>\n<li><strong>언론·1인 미디어 취재 영상·기사</strong></li>\n<li><strong>SNS 라이브·실시간 게시물 캡처</strong></li>\n<li><strong>가해자 얼굴·복장·소속 표시 자료</strong></li>\n<li><strong>응급실 진단서·치료비·약제 내역</strong></li>\n<li><strong>112 신고 접수번호·경찰 진술조서</strong></li>\n<li><strong>집회 신고서·주최 측 명단 (참고)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 집회는 다수 미디어가 촬영해 영상 확보 가능성 높음. 깃대·우산 등 도구 사용은 특수폭행 가중 평가 영역. 본인이 먼저 시비를 걸지 않았다는 동선·구호도 함께 정리 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>다수 가해 + 공동폭행</strong> — 폭처법 평가 영역.</li>\n<li><strong>위험한 물건</strong> — 깃대·우산 특수폭행 검토.</li>\n<li><strong>쌍방 vs 정당방위</strong> — 시비 시작 시점.</li>\n<li><strong>정치적 맥락</strong> — 양형 영향 가능.</li>\n<li><strong>집시법 위반 결합</strong> — 별도 처분 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 112·집회 담당 경찰서</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 서로 다툼·정당방위 성립 기준',
        summary:
          '대법원 2020도15812(대법원, 2021.05.07 선고) 영역에서 법원은 폭력행위 등 처벌에 관한 법률 위반(공동폭행)·상해·모욕 사건에서 정당방위의 성립 요건 및 판단 기준에 관해, 서로 공격할 의사로 싸우다가 먼저 공격을 받고 이에 대항하여 가해를 한 경우 그 가해행위는 정당방위 또는 과잉방위행위에 해당하지 않는다고 본 사례 흐름이 있습니다. 집회 현장 \"쌍방\"으로 정리될 위험을 보여주는 판례입니다.',
        takeaway: '서로 공격 의사로 시비를 시작한 경우 정당방위 부정 영역. 시비 시작 시점·일방적 가격 입증이 핵심. 본인 자제 동선 입증 권장.',
      },
    ],
    faq: [
      {
        question: '가해자가 여러 명인데 모두 처벌되나요?',
        answer:
          '<strong>2명 이상 공동 가담 시 폭처법 공동폭행 가중 평가 영역이고 영상·사진으로 각자의 가담 행위를 입증하는 것이 핵심입니다.</strong>',
      },
      {
        question: '깃대·우산으로 맞았으면 가중인가요?',
        answer:
          '<strong>위험한 물건 사용 평가 영역으로 특수폭행·특수상해 가중 검토될 여지가 있습니다.</strong>',
      },
      {
        question: '"쌍방"으로 정리될까봐 걱정인데요?',
        answer:
          '<strong>본인이 먼저 시비를 걸지 않았고 일방적으로 공격받았다는 영상·증인 입증이 핵심 평가 영역입니다.</strong>',
      },
      {
        question: '집회 신고서·주최 측 정보로 가해자 특정 가능한가요?',
        answer:
          '<strong>경찰 수사 단계에서 집회 신고 자료·현장 채증 영상 등으로 신원 특정이 진행되는 영역입니다.</strong>',
      },
      {
        question: '범죄피해자지원센터에서 어떤 도움을 받나요?',
        answer:
          '<strong>의료비·심리상담·법률 상담·생계비 지원이 검토되는 영역이고 1577-1295로 상담 가능합니다.</strong>',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭처법 공동폭행', href: '/guide/assault/assault-club-group-collective-sentencing' },
      { label: '특수폭행 위험물건', href: '/guide/assault/assault-armed-special-aggravated-weapon-bring-distinction' },
      { label: '집단 폭행 공동책임', href: '/guide/assault/assault-group-attack-joint-liability' },
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '범죄피해자 지원', href: '/guide/assault/assault-victim-where-to-start' },
    ],
  },

  // ─── 3. assault-elder-care-worker-patient-attacker-victim-track ───
  {
    domain: 'assault',
    slug: 'assault-elder-care-worker-patient-attacker-victim-track',
    keyword: '요양보호사 환자 보호자 폭행 피해',
    questionKeyword: '요양보호사인데 인지장애 환자 보호자에게 폭행을 당했어요. 산재·형사 어떻게 같이 잡나요?',
    ctaKeyword: '요양종사자 폭행 피해 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '요양보호사 폭행 피해 — 5단계 산재 + 형사 + 사용자책임 트랙 | 로앤가이드',
      description:
        '요양보호사·간병인이 환자·보호자에게 폭행 피해를 입었다면 산재 + 형사 + 사용자책임 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"방문 요양보호사로 근무하던 중 인지장애 어르신을 돌보는 자리에서 보호자(아들)가 \"왜 어머니가 식사를 안 한다\"며 갑자기 욕설을 하더니 손으로 어깨를 강하게 밀치고 들고 있던 컵을 던져 팔에 멍이 들고 손목 인대가 늘어났어요. 요양센터는 \"보호자와 잘 풀어보라\"며 산재를 꺼리고, 어디부터 정리해야 할지 막막합니다." 요양종사자 폭행 피해라면 ① 형법 260조 폭행·257조 상해 ② 산재보험법 업무상 재해 인정 여지 (작업 중 폭행) ③ 산업안전보건법 + 감정노동자 보호조치 의무 ④ 요양센터·시설장 사용자책임(민법 756조) ⑤ 형사 + 산재 + 민사 3중 트랙 5가지가 결합되는 영역. 환자(인지장애·치매)와 보호자로부터의 폭행은 \"업무수행 중\" 평가로 산재 인정 영역이고, 시설·센터의 안전배려의무 + 사용자책임도 별도 검토. 대응은 ① 증거 ② 의료 ③ 신고 ④ 산재 ⑤ 형사·민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 요양종사자 폭행 피해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·의료·신고·산재·형사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 현장 CCTV·동료 진술·녹취 보전</strong></li>\n<li><strong>② 응급실·산재 지정병원 진단서</strong></li>\n<li><strong>③ 112 신고·고용노동부 1350 진정</strong></li>\n<li><strong>④ 근로복지공단 산재 요양·휴업급여 신청</strong></li>\n<li><strong>⑤ 폭행·상해 고소 + 시설 사용자책임 민사</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 환자·보호자 폭행은 \"업무수행 중\" 평가 영역. 산재·형사·민사 동시 진행 가능. 요양센터의 안전배려의무 + 감정노동자 보호조치 의무 결합 검토.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 CCTV·동료 연락처·녹취 (즉시)</strong></li>\n<li><strong>2단계 — 산재 지정병원 진단서·치료 (즉시~1주)</strong></li>\n<li><strong>3단계 — 112 신고 + 고용노동부 1350 진정 (1주)</strong></li>\n<li><strong>4단계 — 근로복지공단 산재 요양급여 신청 (3년 시효)</strong></li>\n<li><strong>5단계 — 폭행·상해 고소 + 시설 손해배상 (3~6개월)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">요양종사자 폭행 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·산재·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>현장 CCTV·녹취·휴대폰 영상</strong></li>\n<li><strong>응급실·산재 지정병원 진단서·치료비</strong></li>\n<li><strong>동료 요양보호사 진술서·연락처</strong></li>\n<li><strong>근로계약서·방문일지·근무 기록</strong></li>\n<li><strong>112 신고 접수번호·경찰 진술조서</strong></li>\n<li><strong>센터·시설 보고서·시정조치 요청</strong></li>\n<li><strong>근로복지공단 요양급여 신청서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 방문일지·근무 기록은 \"업무수행 중\" 입증 객관 자료. 인지장애 환자 본인 폭행은 형사책임 평가가 달라질 여지가 있지만 산재는 별도 트랙으로 진행 가능. 보호자 폭행은 일반 형사 평가 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>업무수행 중 평가</strong> — 산재 인정 핵심.</li>\n<li><strong>환자 vs 보호자 가해</strong> — 책임 평가 영역.</li>\n<li><strong>사용자 안전배려의무</strong> — 시설 책임 결합.</li>\n<li><strong>감정노동자 보호조치</strong> — 산안법 위반 검토.</li>\n<li><strong>위험한 물건 사용</strong> — 특수폭행 가중 여지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 서비스 종사자 폭행 상해',
        summary:
          '서울북부지방법원 2025고단1523(서울북부지법, 2025.10.29 선고) 영역에서 법원은 주유소 직원이 고객의 행위(노상방뇨)를 주의하다 고객으로부터 목 잡힘·바닥 넘어뜨림·얼굴 가격·발로 밟힘 등 폭행을 당해 약 20일의 비골 폐쇄성 골절 상해를 입은 사안에 대한 흐름을 보였습니다. 서비스·돌봄 종사자가 본인 업무 수행 중 고객·보호자로부터 폭행 피해를 입은 경우 형사 + 산재 + 사용자책임 트랙이 결합된다는 점을 시사합니다.',
        takeaway: '서비스·돌봄 종사자 폭행 피해는 형사 + 산재 영역. 도구 사용은 특수상해 가중 여지. 사용자 안전배려의무 별도 트랙.',
      },
    ],
    faq: [
      {
        question: '환자가 인지장애로 직접 때렸으면 누구에게 책임이 있나요?',
        answer:
          '<strong>환자 본인의 형사책임은 평가가 달라질 여지가 있지만 산재·시설 사용자책임은 별도 트랙으로 진행 가능한 영역입니다.</strong>',
      },
      {
        question: '센터가 산재 신청을 막고 있어요',
        answer:
          '<strong>근로자가 근로복지공단에 직접 산재 신청 가능한 영역이고 회사 동의 없이도 절차 진행 가능합니다.</strong>',
      },
      {
        question: '시설장이 안전조치를 안 했으면 어떻게 다투나요?',
        answer:
          '<strong>산업안전보건법 + 감정노동자 보호조치 의무 위반 평가 영역으로 고용노동부 진정·민사 손해배상 검토 가능합니다.</strong>',
      },
      {
        question: '치료비·휴업급여는 누가 부담하나요?',
        answer:
          '<strong>산재 인정 시 요양·휴업급여는 근로복지공단이 지급하고 별도 위자료는 가해자·시설에 민사 청구 영역입니다.</strong>',
      },
      {
        question: '방문 요양도 산재 적용되나요?',
        answer:
          '<strong>방문 요양보호사도 산재 적용 영역이고 방문일지·근무 기록으로 업무 입증 가능합니다.</strong>',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '직장 내 폭행', href: '/guide/assault/assault-workplace-drinking-coworker-track' },
      { label: '건설현장 폭행 트랙', href: '/guide/assault/assault-construction-site-worker-supervisor-attack-track' },
      { label: '의료진·환자 충돌', href: '/guide/assault/assault-medical-staff-patient-hospital-track' },
      { label: '범죄피해자 지원', href: '/guide/assault/assault-victim-where-to-start' },
    ],
  },

  // ─── 4. child-support-payer-cohabitant-income-imputation-track ───
  {
    domain: 'child-support',
    slug: 'child-support-payer-cohabitant-income-imputation-track',
    keyword: '비양육친 동거인 소득 산입 양육비',
    questionKeyword: '전 남편이 재혼 배우자와 함께 살면서 본인 소득은 낮춰 신고합니다. 동거인 소득 반영 가능한가요?',
    ctaKeyword: '동거인 소득 산입 양육비 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '비양육친 동거인 소득 산입 — 5단계 양육비 산정 다툼 트랙 | 로앤가이드',
      description:
        '비양육친의 재혼 배우자·사실혼 동거인 소득을 양육비 산정에 반영할 수 있는지 5가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 후 매월 양육비 60만원을 받기로 했는데 전 남편이 재혼 후 \"본인 소득이 줄었다\"며 감액을 요구합니다. 그런데 재혼 배우자가 의사로 고소득자이고 함께 같은 집·같은 차로 풍족하게 살고 있어 \'본인 명의 소득\'만 보는 게 부당하게 느껴져요. 동거인(재혼 배우자) 소득을 산정에 반영할 수 있는지 어디부터 정리해야 하는지 막막합니다." 비양육친 동거인 소득 산입 다툼이라면 ① 양육비 산정기준표(서울가정법원) — 부모 합산 소득 기준 ② 민법 837조·가사소송법 변경 심판 ③ 동거인 소득의 \"양육비 부담 능력\" 평가 영역 ④ 자녀 복리 기준 + 객관 자료 (가계·생활수준) ⑤ 사실조회 + 재산 추적 5가지가 결합되는 영역. 판례 흐름상 양육비 부담 부당성은 \"자녀 복리를 위하여 필요한지\" 기준이고 채무자의 실제 생활수준·부담 능력 종합 평가 영역. 동거인 소득 자체를 \"합산 소득\"으로 단정하기는 어렵지만 생활수준 평가에 간접 반영될 여지. 대응은 ① 자료 ② 사실조회 ③ 협의 ④ 심판 ⑤ 추적 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 동거인 소득 산입 양육비 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·사실조회·협의·심판·추적 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 채무자 본인 + 동거인 소득·재산 자료 수집</strong></li>\n<li><strong>② 가정법원 사실조회·금융정보·재산조회</strong></li>\n<li><strong>③ 양육비이행관리원·내용증명 협의</strong></li>\n<li><strong>④ 양육비 변경(증액) 심판 청구</strong></li>\n<li><strong>⑤ 생활수준 자료 + 자녀 복리 강조</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 동거인 소득 자체를 \"합산\"하기는 어렵지만 채무자의 실제 생활수준·부담 능력 평가에 간접 반영될 여지가 있는 영역. 자녀 복리 기준 평가.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·심판 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 채무자 본인 + 동거인 SNS·생활수준 자료 (즉시)</strong></li>\n<li><strong>2단계 — 가정법원 사실조회·금융정보·국세청 소득자료 (1~2개월)</strong></li>\n<li><strong>3단계 — 양육비이행관리원 1644-6621 협의·내용증명 (1개월)</strong></li>\n<li><strong>4단계 — 양육비 변경(증액) 심판 청구 (3~6개월)</strong></li>\n<li><strong>5단계 — 임시 처분·조정·인용 결정</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 산정기준표, AI로 계산해보기</strong></p>\n<p style="margin:0;font-size:0.95em">동거인 소득 산입 양육비 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·심판·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>이혼·양육비 합의서·확정 결정문</strong></li>\n<li><strong>채무자 본인 소득금액증명·세무 자료</strong></li>\n<li><strong>동거인 소득·직업 추정 자료 (SNS·등기·사업자등록)</strong></li>\n<li><strong>채무자 동거 사실·세대 구성 자료 (주민등록·등기부)</strong></li>\n<li><strong>고가 차량·해외여행·고급 소비 SNS 캡처</strong></li>\n<li><strong>변경(증액) 심판 청구서·청구 취지</strong></li>\n<li><strong>자녀 신분증·가족관계증명서·양육비 산정표</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 동거인 소득 자체 합산은 직접 인정되기 어려운 영역이지만, 채무자의 \"실제 생활수준\"이 본인 신고 소득보다 현저히 높다는 입증은 부담 능력 평가에 반영될 여지가 있음. SNS·차량·여행 자료는 객관 보조 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>동거인 소득 \"합산\" 부정</strong> — 직접 합산 어려운 영역.</li>\n<li><strong>생활수준 간접 반영</strong> — 부담 능력 평가.</li>\n<li><strong>채무자 소득 축소 신고</strong> — 사실조회·세무 자료.</li>\n<li><strong>자녀 복리 기준</strong> — 증액 판단 핵심.</li>\n<li><strong>임시 처분</strong> — 심판 전 일부 조정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n<li><strong>가정법원 1899-9595</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 부담 부당성 판단 기준',
        summary:
          '대법원 2018스566(대법원, 2019.01.31 선고) 영역에서 법원은 양육에 관한 사항의 변경에 관한 민법 837조 5항 아래에서 재판 또는 당사자의 협의로 정해진 양육비 부담 내용이 제반 사정에 비추어 \"부당\"한지 여부는 \"자녀의 복리를 위하여 필요한지\"를 기준으로 판단하여야 하고, 가정법원이 양육비 증감을 구하는 심판청구를 심리할 때에는 관련 사정을 종합적으로 고려해야 한다고 본 사례 흐름이 있습니다. 동거인 소득 평가도 이 \"제반 사정\" 일부로 검토될 영역입니다.',
        takeaway: '양육비 변경 기준은 자녀 복리. 부담 능력·생활수준 등 제반 사정 종합 평가 영역. 동거인 소득은 간접 반영 여지.',
      },
    ],
    faq: [
      {
        question: '재혼 배우자 소득이 양육비 산정에 그대로 합산되나요?',
        answer:
          '<strong>본인 명의 소득이 아닌 동거인 소득을 그대로 합산하기는 어려운 영역이고 \"생활수준\" 평가에 간접 반영될 여지가 있는 영역입니다.</strong>',
      },
      {
        question: '채무자가 소득을 축소 신고했다고 의심되는데요?',
        answer:
          '<strong>가정법원 사실조회·국세청 소득자료 조회·금융정보 조회 등으로 객관 자료 확보가 검토되는 영역입니다.</strong>',
      },
      {
        question: 'SNS·차량·여행 자료가 증거가 되나요?',
        answer:
          '<strong>생활수준 입증 보조 자료로 검토되는 영역이고 단독 인정보다는 다른 객관 자료와 결합 권장됩니다.</strong>',
      },
      {
        question: '양육비이행관리원이 사실조회도 도와주나요?',
        answer:
          '<strong>양육비이행관리원 1644-6621에서 절차 상담·서식 지원이 제공되고 변호인 연계 검토 가능합니다.</strong>',
      },
      {
        question: '임시 처분으로 빠른 증액 가능한가요?',
        answer:
          '<strong>가정법원 임시 처분 신청으로 심판 결정 전 일부 조정 가능한 영역이고 자녀 복리 시급성 입증 필요합니다.</strong>',
      },
    ],
    cta: { text: '양육비 산정기준표, AI로 계산해보기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 산정기준표', href: '/guide/child-support/child-support-calculation-standard' },
      { label: '비양육친 재혼 증액', href: '/guide/child-support/child-support-non-custodial-remarry-income-increase' },
      { label: '양육비 변경 심판', href: '/guide/child-support/child-support-modification-income-change' },
      { label: '재혼 시 감액 다툼', href: '/guide/child-support/child-support-ex-remarriage-reduction-possible' },
      { label: '양육비이행관리원', href: '/guide/child-support/child-support-enforcement-agency' },
    ],
  },

  // ─── 5. child-support-arrears-lump-sum-payment-credit-restoration-track ───
  {
    domain: 'child-support',
    slug: 'child-support-arrears-lump-sum-payment-credit-restoration-track',
    keyword: '미지급 양육비 일시 청산 신용 회복',
    questionKeyword: '명단공개·신용정보 등록된 양육비를 일시 청산했어요. 출국제한·신용 등록 해제는 어떻게 되나요?',
    ctaKeyword: '미지급 양육비 일시 청산 해제 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '미지급 양육비 일시 청산 — 5단계 명단·신용·출국 해제 트랙 | 로앤가이드',
      description:
        '미지급 양육비를 일시 청산한 비양육친이라면 명단공개·신용정보·출국제한 5가지 해제 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3년간 미지급된 양육비 1,800만원이 누적되어 명단공개·신용정보 등록·출국제한까지 들어간 상황에서, 가족 도움으로 일시에 전액을 청산했습니다. 그런데 통장 송금만으로 명단·신용 등록·출국제한이 자동 해제되는 게 아니라는 말을 듣고, 정확히 어떤 절차로 해제 신청을 해야 하는지 막막합니다." 미지급 양육비 일시 청산 후 해제라면 ① 양육비이행법 27조의2 신용정보 등록 해제 ② 21조의5 명단공개 해제 ③ 출국금지·여권 제한 해제 (법무부) ④ 운전면허 정지 해제 (경찰청) ⑤ 양육비이행관리원·여성가족부 절차 5가지가 결합되는 영역. 청산 사실 자체로는 자동 해제되지 않고 \"청산 확인 → 양육자 의견 청취 → 여성가족부 결정 → 등록기관 통보\" 흐름이 필요. 각 제재는 등록 기관이 달라 별도 해제 신청. 대응은 ① 청산 입증 ② 양육자 확인 ③ 해제 신청 ④ 의견 청취 ⑤ 결정 통보 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 미지급 양육비 일시 청산 해제 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 청산·확인·신청·청취·통보 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 전액 청산 + 이체 확인서·영수증</strong></li>\n<li><strong>② 양육자 수령 확인서·합의서 (가능 시)</strong></li>\n<li><strong>③ 양육비이행관리원 해제 신청·소명자료</strong></li>\n<li><strong>④ 여성가족부 의견 청취·심의</strong></li>\n<li><strong>⑤ KCB·NICE·법무부·경찰청 등록기관 해제 통보</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 청산 송금만으로 자동 해제되지 않음. 양육비이행관리원·여성가족부·각 등록기관 절차 별도 진행. 양육자 수령 확인이 시간 단축 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 청산·신청·통보 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 전액 청산·이체 확인서·법원 공탁 (즉시)</strong></li>\n<li><strong>2단계 — 양육자 수령 확인서·내용증명 (1~2주)</strong></li>\n<li><strong>3단계 — 양육비이행관리원 1644-6621 해제 신청 (1주)</strong></li>\n<li><strong>4단계 — 여성가족부 의견 청취·심의 (1~3개월)</strong></li>\n<li><strong>5단계 — 등록기관(KCB·NICE·법무부·경찰청) 해제 통보</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 못 받을 때 다음 단계, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">양육비 일시 청산·해제 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 청산·신청·해제 갈래입니다.</strong></p>\n<ul>\n<li><strong>이혼·양육비 합의서·확정 결정문</strong></li>\n<li><strong>미지급 양육비 계산서·이행명령·감치 결정문</strong></li>\n<li><strong>전액 청산 이체 확인서·은행 거래내역</strong></li>\n<li><strong>양육자 수령 확인서·합의서·공탁 영수증</strong></li>\n<li><strong>본인 신분증·가족관계증명서</strong></li>\n<li><strong>해제 신청서·소명자료</strong></li>\n<li><strong>각 등록기관(KCB·NICE·법무부·경찰청) 등록사실 확인서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 양육자가 수령을 거부·연락두절일 경우 법원 공탁으로 청산 처리 가능한 영역. 공탁 영수증이 \"수령 확인\"을 대체하는 객관 자료. 양육비이행관리원이 절차 무료 안내.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>자동 해제 아님</strong> — 별도 신청 필수.</li>\n<li><strong>양육자 수령 확인</strong> — 핵심 객관 자료.</li>\n<li><strong>등록기관 분산</strong> — KCB·NICE·법무부·경찰청 각각.</li>\n<li><strong>여성가족부 결정</strong> — 의견 청취 후 결정.</li>\n<li><strong>일부 변제 vs 전액</strong> — 해제 범위 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n<li><strong>여성가족부 양육비 02-2100-6000</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 과거양육비 소멸시효 진행',
        summary:
          '대법원 2018스724(대법원, 2024.07.18 선고) 영역에서 법원은 이혼한 부부 사이에서 어느 일방이 과거에 미성년 자녀를 양육하면서 생긴 비용의 상환을 상대방에게 청구하는 경우 과거 양육비에 관한 권리의 소멸시효가 진행하는지 여부에 관하여 자녀가 성년이 되어 양육의무가 종료된 때를 기산점으로 소멸시효가 진행한다고 본 사례 흐름이 있습니다. 일시 청산·해제 트랙도 이 시효 흐름 위에서 진행되는 영역입니다.',
        takeaway: '과거 양육비는 자녀 성년 후 소멸시효 진행 영역. 청산 시점·범위 평가 핵심. 해제는 각 등록기관 별도 절차.',
      },
    ],
    faq: [
      {
        question: '전액 청산하면 명단·신용·출국이 자동 해제되나요?',
        answer:
          '<strong>자동 해제 아닌 영역으로 양육비이행관리원·여성가족부·각 등록기관에 별도 해제 신청이 필요한 영역입니다.</strong>',
      },
      {
        question: '양육자가 수령을 거부하거나 연락두절이면요?',
        answer:
          '<strong>법원 공탁으로 청산 처리 가능한 영역이고 공탁 영수증이 객관 자료로 활용됩니다.</strong>',
      },
      {
        question: '일부 변제(50%)도 해제 가능한가요?',
        answer:
          '<strong>일정 비율 변제 시 부분 해제 검토되는 영역이고 양육비이행관리원 안내를 확인하시는 것이 좋습니다.</strong>',
      },
      {
        question: '해제까지 얼마나 걸리나요?',
        answer:
          '<strong>여성가족부 의견 청취·심의 + 등록기관 통보까지 통상 1~3개월 안내되는 영역이고 사례에 따라 다를 수 있습니다.</strong>',
      },
      {
        question: '출국제한 해제는 어디에 신청하나요?',
        answer:
          '<strong>법무부 출입국 외국인정책본부 절차이고 양육비이행관리원이 연계 안내해주는 영역입니다.</strong>',
      },
    ],
    cta: { text: '양육비 못 받을 때 다음 단계, AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '신용정보 등록 트랙', href: '/guide/child-support/child-support-non-payer-credit-information-registration-track' },
      { label: '명단공개 절차', href: '/guide/child-support/child-support-public-disclosure-debtor-list-procedure' },
      { label: '출국금지 해외 거주', href: '/guide/child-support/child-support-non-payer-overseas-residence' },
      { label: '운전면허 정지', href: '/guide/child-support/child-support-license-suspension-petition-procedure' },
      { label: '양육비이행관리원', href: '/guide/child-support/child-support-enforcement-agency' },
    ],
  },

  // ─── 6. dui-electric-vehicle-charging-restart-operation-track ───
  {
    domain: 'dui',
    slug: 'dui-electric-vehicle-charging-restart-operation-track',
    keyword: '전기차 충전 중 시동 운행 음주',
    questionKeyword: '전기차 충전 중 시동을 걸어 짧게 옮겼는데 음주측정에 걸렸어요. 어떻게 다투나요?',
    ctaKeyword: '전기차 충전 시동 운행 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '전기차 충전 중 시동 운행 — 5단계 운행 정의·긴급피난 다툼 | 로앤가이드',
      description:
        '전기차 충전 중 시동을 걸어 짧게 이동해 혐의를 받고 있다면 운행 정의·긴급피난 5가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"마트 주차장 전기차 충전소에서 충전 중이었는데 뒤 차량이 다급히 빠지려 해 시동을 걸어 약 3m 옆 일반 주차칸으로 옮겼고, 이 짧은 운행 동안 직원 신고로 출동한 경찰관에게 음주측정을 받아 혐의를 받고 있는 상황입니다. 사실관계가 다르다면 어디부터 다퉈야 하는지, \"운행\"으로 평가되는 범위와 긴급피난 여지를 정리하고 싶어 막막합니다." 전기차 충전 중 시동 운행 혐의를 받고 있다면 ① 도로교통법 2조 26호 \"운전\"의 정의 ② 형법 22조 긴급피난·과잉피난 ③ 측정 절차·위드마크 다툼 ④ 주차장 = \"도로\" 평가 영역 ⑤ 형사 + 행정심판 90일 분리 5가지 트랙에 해당할 소지가 있는 영역. 판례 흐름상 자기·타인 법익 보호 + 짧은 거리 운행은 긴급피난 평가 영역에 들어갈 여지가 있고, 주차장 내 단순 이동도 \"운전\" 평가 영역. 대응은 ① 사실 ② 동선 ③ 변호인 ④ 진술 ⑤ 행정·형사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 전기차 충전 중 시동 운행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·동선·변호·진술·분리대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 충전소·주차장 CCTV·블랙박스 보전</strong></li>\n<li><strong>② 운행 거리·시간·이유 객관 정리</strong></li>\n<li><strong>③ 변호인 상담·긴급피난·운행 다툼 전략</strong></li>\n<li><strong>④ 경찰·검찰 진술 + 측정 적법성 검토</strong></li>\n<li><strong>⑤ 형사 + 면허 행정심판 90일 분리 대응</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혐의를 받고 있다면 운행 범위·긴급피난·측정 절차가 핵심 평가 영역. 짧은 거리·자타 법익 보호 동선은 긴급피난·과잉피난 평가 여지. 형사·행정 별도 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실정리·다툼·양형 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 충전소·주차장 CCTV·블랙박스·휴대폰 영상 보전 (즉시)</strong></li>\n<li><strong>2단계 — 운행 거리·이유·소요시간 정리 (1주)</strong></li>\n<li><strong>3단계 — 변호인 상담·진술 전략·긴급피난 주장 (1~2주)</strong></li>\n<li><strong>4단계 — 경찰·검찰 송치·기소 (1~3개월)</strong></li>\n<li><strong>5단계 — 행정심판 90일 + 양형 (초범·반성·합의)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">전기차 충전 시동 운행 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·동선·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>충전소·주차장 CCTV·블랙박스 영상</strong></li>\n<li><strong>충전 시작·종료 시간 자료 (충전 앱 기록)</strong></li>\n<li><strong>운행 거리·시간·이유 정리표</strong></li>\n<li><strong>호흡측정·채혈 결과지·동의서</strong></li>\n<li><strong>본인 운전면허 기록·전과 자료</strong></li>\n<li><strong>탄원서·반성문·생계자료 (양형용)</strong></li>\n<li><strong>변호인 의견서·진술 전략 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 전기차 충전 앱은 시동·충전 시간 객관 자료. 운행 거리 3~10m + 자타 법익 보호 사정은 긴급피난 평가 영역에 들어갈 여지. 행정심판은 처분일로부터 90일 별도 트랙으로 즉시 준비.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>운행 정의</strong> — 시동·이동 평가 핵심.</li>\n<li><strong>주차장 = 도로</strong> — 도로교통법 적용 영역.</li>\n<li><strong>긴급피난</strong> — 자타 법익 보호 사정.</li>\n<li><strong>위드마크 상승기</strong> — 측정 시점 차이.</li>\n<li><strong>형사·행정 분리</strong> — 별도 대응.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>도로교통공단 1577-1120</strong></li>\n<li><strong>중앙행정심판위원회 110</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 짧은 거리 음주운전 긴급피난',
        summary:
          '수원지방법원 2024고정1395(수원지법, 2025.04.10 선고) 영역에서 법원은 피고인이 건물 지하 1층 주차장 출구 차단기에서부터 인근 도로까지 약 10m 구간에서 술에 취한 상태로 자동차를 운전하였다는 도로교통법 위반(음주운전) 사안에서, 대리기사가 경사 구간에 차량을 둔 채 이탈한 사정·차량 미끌림 등 신체·물적 피해 우려·운행 거리 10m·다른 대리기사 도착 대기 어려움 등에 비추어 자기·타인 법익에 대한 현재의 위난을 피하기 위한 상당한 이유 있는 행위로서 형법 22조 1항 긴급피난에 해당하여 위법성이 조각된다고 판단(설령 그렇지 않다 하더라도 형법 22조 3항·21조 3항 과잉피난에 해당)하여 무죄를 선고한 사례 흐름이 있습니다.',
        takeaway: '짧은 거리·자타 법익 보호 동선은 긴급피난·과잉피난 평가 여지. 운행 거리·이유·대기 가능성 종합 평가 영역.',
      },
    ],
    faq: [
      {
        question: '3m 옮긴 것도 \"음주운전\"으로 평가되나요?',
        answer:
          '<strong>도로교통법상 시동·이동 시 운전 평가 영역이지만 거리·이유에 따라 긴급피난 평가 여지가 있는 영역입니다.</strong>',
      },
      {
        question: '마트 주차장도 \"도로\"인가요?',
        answer:
          '<strong>불특정 다수가 출입하는 주차장은 도로교통법상 도로 평가 영역에 해당할 소지가 있는 영역입니다.</strong>',
      },
      {
        question: '긴급피난 주장하려면 어떤 자료가 필요한가요?',
        answer:
          '<strong>충전소 위치·CCTV·차량 미끌림 위험·뒤 차량 압박 등 자타 법익 보호 사정의 객관 입증이 핵심 영역입니다.</strong>',
      },
      {
        question: '행정심판은 언제까지 신청하나요?',
        answer:
          '<strong>면허 처분일로부터 90일 이내 별도 트랙으로 신청 가능한 영역이고 형사와 분리 진행됩니다.</strong>',
      },
      {
        question: '국선변호인 받을 수 있나요?',
        answer:
          '<strong>경찰·검찰·법원 모두 국선변호인 선정 신청 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '주차장 음주운전 다툼', href: '/guide/dui/dui-private-residential-parking-lot-no-public-impaired-track' },
      { label: '전동킥보드 음주', href: '/guide/dui/dui-electric-scooter-personal-mobility-impaired-track' },
      { label: '위드마크 공식', href: '/guide/dui/dui-widmark-rising-phase-defense' },
      { label: '행정심판 90일', href: '/guide/dui/dui-administrative-trial-90day-mitigation' },
      { label: '음주운전 첫 대응', href: '/guide/dui/dui-caught-where-to-start' },
    ],
  },
];
