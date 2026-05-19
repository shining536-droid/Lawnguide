import { SpokePage } from '../spoke-pages';

// batch70 assault-dui — 4개 (2026-05-20)
//
// 고유 존재 이유:
// 1. assault-drinking-mutual-fight-separation-dispute-track — 술자리 시비로 쌍방폭행으로 정리될 위기 → "먼저 시비·일방 우위 입증" 트랙. 기존 mutual-fight-first-strike-aggravation / pub-mutual-altercation-settlement-tier 와 분기: "쌍방 분리 + 정당방위 단서" 트랙.
// 2. assault-apartment-elevator-cctv-evidence-track — 공동주택 엘리베이터 폐쇄 공간에서의 폭행, CCTV 입증 + 관리주체 책임. 기존 stranger-random-attack / public-transit-elderly 와 분기: "공동주택 폐쇄공간 + 관리사무소 협조" 트랙.
// 3. assault-accused-witness-only-no-physical-evidence-defense-track — 가해자로 지목됐는데 CCTV·진단서 부재, 피해자 진술과 목격자 증언만 있는 상황 방어. 기존 false-accusation-defense / charged-first-response 와 분기: "물증 부재 + 진술 일관성 다툼" 트랙.
// 4. dui-test-refusal-voluntary-surrender-criminal-administrative-track — 음주측정 거부 후 다음 날 자진출두, 형사(측정거부죄)·행정(면허) 동시 진행. 기존 test-refusal-flee-aggravated / measurement-refusal-penalty-appeal 와 분기: "거부 후 자진출두 + 분리대응" 트랙.

export const spokesBatch70AssaultDui: SpokePage[] = [
  // ─── 1. assault-drinking-mutual-fight-separation-dispute-track ───
  {
    domain: 'assault',
    slug: 'assault-drinking-mutual-fight-separation-dispute-track',
    keyword: '술자리 시비 쌍방폭행 분리 다툼',
    questionKeyword: '술자리에서 시비 끝에 맞았는데 경찰이 "쌍방"이라고 합니다. 분리 입증 어떻게 하나요?',
    ctaKeyword: '쌍방폭행 분리 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '술자리 쌍방폭행 분리 — 5단계 일방 우위·먼저 시비 입증 트랙 | 로앤가이드',
      description:
        '술자리 시비 끝 폭행 피해를 입었는데 "쌍방"으로 정리될 위기라면 5가지 분리·일방 우위 입증 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술집에서 옆 테이블 손님이 \'쳐다본다\'며 시비를 걸어 욕설을 하다가 갑자기 주먹으로 얼굴을 때리고 의자로 어깨를 가격해 입술이 찢어지고 광대뼈에 멍이 들었어요. 출동한 경찰관이 \"서로 다툼이 있었으니 쌍방으로 정리될 수 있다\"고 안내해서 일방적으로 맞은 사실이 묻힐까 봐 막막합니다." 술자리 쌍방폭행 분리라면 ① 형법 260조 폭행·257조 상해 + 21조 정당방위 ② 먼저 시비 시작자 입증 (시간 흐름) ③ 가해 강도·횟수 비교 (CCTV·진단서) ④ 동행자·목격자 진술 ⑤ 형사 처분 + 민사 손해배상 5가지가 결합되는 영역. 판례 흐름상 서로 공격할 의사로 다투는 경우 정당방위가 부정될 여지가 있지만, 일방적 가격·먼저 시비 시작 입증 시 정당방위 또는 일방 폭행 평가 영역으로 분리될 가능성. 대응은 ① 신고 ② CCTV ③ 진단 ④ 목격자 ⑤ 진술전략 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 술자리 쌍방폭행 분리 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·CCTV·진단·목격자·진술전략 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 112 즉시 신고·현장 경찰 진술 (먼저 시비)</strong></li>\n<li><strong>② 술집 CCTV·주변 상가 영상 자료보전 요청</strong></li>\n<li><strong>③ 응급실 진단서 (가격 강도 비교 핵심)</strong></li>\n<li><strong>④ 동행자·옆 테이블 목격자 진술서·연락처</strong></li>\n<li><strong>⑤ 경찰·검찰 진술 전략 (정당방위·일방 폭행)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 쌍방으로 묶이는 일반 흐름을 깨려면 "누가 먼저 시비를 시작했는지" + "가해 강도가 일방적이었는지" 두 축의 입증이 핵심. CCTV·진단서 강도 차이는 객관 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·자료·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 112 신고·현장 경찰 진술·동행자 연락처 (즉시)</strong></li>\n<li><strong>2단계 — 응급실 진단서·치료비 영수증 (즉시~1주)</strong></li>\n<li><strong>3단계 — 술집·인근 CCTV 자료보전 요청 (1주 내)</strong></li>\n<li><strong>4단계 — 경찰 수사·진술조서 (1~2개월)</strong></li>\n<li><strong>5단계 — 검찰 처분·민사 손해배상 (3~6개월)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">쌍방폭행 분리·일방 우위 입증 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 분리·입증·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>112 신고 접수번호·경찰 진술조서</strong></li>\n<li><strong>술집·옆 가게 CCTV 영상·자료보전 요청서</strong></li>\n<li><strong>응급실·정형외과 상해진단서 (전치 주수 명시)</strong></li>\n<li><strong>치료비 영수증·약제 내역·진료 기록</strong></li>\n<li><strong>동행자·옆 테이블 손님 진술서·연락처</strong></li>\n<li><strong>술집 영수증·카드 결제·시간 동선 자료</strong></li>\n<li><strong>본인 휴대폰 사진·녹취 (시비 시작 시점)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 술집 CCTV는 1~2주 안에 덮어쓰여지는 환경이 많아 자료보전 요청을 빠르게. 본인 진단서가 상대보다 명확히 강하면 일방 폭행 평가 핵심 자료. 시비 시작 시점은 음향·음성 녹취가 결정적.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>먼저 시비 시작</strong> — 시간·음성 자료 핵심.</li>\n<li><strong>가격 강도 차이</strong> — 진단서 비교 영역.</li>\n<li><strong>정당방위 여지</strong> — 일방 공격 받고 대응.</li>\n<li><strong>쌍방 합의 압박</strong> — 분리 대응 검토.</li>\n<li><strong>의자·병 사용</strong> — 특수폭행 가중 여지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 112·관할 경찰서</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 폭행·상해 항소·비약상고 절차',
        summary:
          '대법원 2025도11655(대법원, 2025.10.16 선고) 영역에서 법원은 절도·재물손괴·상해 등 결합 사건에서 적법하게 제기된 항소에 의해 항소의 효력이 유지되는 중에 피고인이 비약적 상고를 제기한 경우에도 비약적 상고로서의 효력이 없다고 판단하며, 제1심법원은 비약적 상고와 항소가 경합된 경우 항소사건으로서 항소심법원에 기록을 송부하여야 한다고 본 사례 흐름이 있습니다. 쌍방폭행 분리 후 양형 다툼 단계에서도 상소 절차 선택이 핵심 평가 영역임을 보여주는 판례입니다.',
        takeaway: '쌍방 분리·양형 단계 항소·상고 절차는 신중 평가 영역. 변호인 상담·진술 전략 권장. 형사 + 민사 별개 트랙.',
      },
    ],
    faq: [
      {
        question: '술자리에서 욕설만 들었는데 그것도 폭행인가요?',
        answer:
          '<strong>욕설 자체는 모욕·명예훼손 평가 영역이고 신체 접촉·물건 던짐 등이 있어야 폭행 평가에 해당할 소지가 있는 영역입니다.</strong>',
      },
      {
        question: '쌍방으로 정리되면 양쪽 다 처벌받나요?',
        answer:
          '<strong>쌍방으로 정리되면 양측 모두 처분 검토 영역이지만 일방 우위·먼저 시비 시작 입증 시 분리 평가될 여지가 있는 영역입니다.</strong>',
      },
      {
        question: 'CCTV가 없으면 어떻게 입증하나요?',
        answer:
          '<strong>인근 가게 CCTV·동행자·목격자 진술서·휴대폰 녹음·영수증 동선 등 객관 자료 결합이 검토되는 영역입니다.</strong>',
      },
      {
        question: '진단서는 며칠 안에 받아야 하나요?',
        answer:
          '<strong>가능하면 폭행 당일 응급실 또는 다음 날 정형외과 진료 권장되고 시간 경과 시 인과관계 입증력이 약해질 여지가 있습니다.</strong>',
      },
      {
        question: '상대가 합의를 거부하면 어떻게 되나요?',
        answer:
          '<strong>폭행은 반의사불벌이라 처벌불원으로 처분이 달라질 여지가 있고 상해는 합의 없이도 처분 검토 영역입니다.</strong>',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '쌍방 먼저 시비', href: '/guide/assault/assault-mutual-fight-first-strike-aggravation-track' },
      { label: '술집 쌍방 합의', href: '/guide/assault/assault-pub-mutual-altercation-settlement-tier' },
      { label: '정당방위 입증', href: '/guide/assault/assault-self-defense-proof-defensive-boundary-track' },
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '범죄피해자 지원', href: '/guide/assault/assault-victim-where-to-start' },
    ],
  },

  // ─── 2. assault-apartment-elevator-cctv-evidence-track ───
  {
    domain: 'assault',
    slug: 'assault-apartment-elevator-cctv-evidence-track',
    keyword: '공동주택 엘리베이터 폭행 CCTV',
    questionKeyword: '아파트 엘리베이터에서 같은 동 주민에게 폭행당했어요. 관리사무소 CCTV 어떻게 확보하나요?',
    ctaKeyword: '엘리베이터 폭행 CCTV 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '엘리베이터 폭행 CCTV — 5단계 폐쇄공간 + 관리사무소 협조 트랙 | 로앤가이드',
      description:
        '공동주택 엘리베이터에서 폭행 피해를 입었다면 CCTV 확보 + 관리주체 협조 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아파트 엘리베이터에서 늦은 밤 같은 동 주민과 마주쳤는데, 평소 층간소음·주차 다툼이 있던 상대가 갑자기 욕설을 하더니 손으로 가슴을 강하게 밀치고 어깨를 잡아 끌어 벽에 부딪쳐 갈비뼈가 결림이 생겼어요. 엘리베이터 CCTV가 분명히 있을 텐데 관리사무소에서 \"개인정보\"라며 안 보여줘 어디부터 정리해야 하는지 막막합니다." 공동주택 엘리베이터 폭행이라면 ① 형법 260조 폭행·257조 상해 ② 폐쇄공간 = 도주 불가·증거 객관성 ↑ ③ CCTV 확보 (관리주체 협조·경찰 영장) ④ 개인정보보호법 + 공동주택관리법 ⑤ 입주자대표회의·관리사무소 책임 평가 5가지가 결합되는 영역. 엘리베이터·복도 CCTV 는 본인이 직접 열람·복사는 어려운 영역이지만 경찰 수사 단계 영장·자료보전 요청으로 객관 자료 확보 가능. 대응은 ① 신고 ② 진단 ③ 관리사무소 ④ CCTV ⑤ 고소 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 엘리베이터 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·진단·관리사무소·CCTV·고소 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 112 즉시 신고·현장 경찰 진술</strong></li>\n<li><strong>② 응급실·정형외과 진단서·치료 기록</strong></li>\n<li><strong>③ 관리사무소 사고 보고·자료보전 요청서</strong></li>\n<li><strong>④ 경찰 통해 엘리베이터 CCTV 확보</strong></li>\n<li><strong>⑤ 폭행·상해 고소 + 민사 손해배상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 엘리베이터는 폐쇄공간 + 도주 불가 + CCTV 상시 녹화 환경. 개인이 직접 열람보다는 경찰 영장 우선. 관리사무소 자료보전 요청서가 시간 절약 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·자료·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 112 신고·현장 경찰 진술 (즉시)</strong></li>\n<li><strong>2단계 — 응급실·산재 지정병원 진단서 (즉시~1주)</strong></li>\n<li><strong>3단계 — 관리사무소 자료보전 요청서 (1~3일)</strong></li>\n<li><strong>4단계 — 경찰 수사·CCTV 영장 확보 (1~2개월)</strong></li>\n<li><strong>5단계 — 폭행·상해 고소 + 민사 손해배상 (3~6개월)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">엘리베이터 폭행 CCTV 확보 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·CCTV·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>112 신고 접수번호·경찰 진술조서</strong></li>\n<li><strong>응급실·정형외과 상해진단서·치료비</strong></li>\n<li><strong>관리사무소 사고 보고서·자료보전 요청서</strong></li>\n<li><strong>입주자대표회의 회의록·관리규약</strong></li>\n<li><strong>가해자·피해자 동·호수·세대주 자료</strong></li>\n<li><strong>본인 휴대폰 사진·옷·상처 부위 촬영</strong></li>\n<li><strong>이전 층간소음·주차 분쟁 기록·문자</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 엘리베이터 CCTV 는 관리사무소 보존기간(통상 30~60일) 안에 자료보전 요청 필수. 관리주체가 본인에게 영상 직접 제공은 어려운 영역이지만 경찰·법원 영장에는 협조. 이전 분쟁 기록은 동기·맥락 입증 보조 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>CCTV 개인 열람</strong> — 관리주체 거부 일반.</li>\n<li><strong>경찰 영장 우선</strong> — 수사 단계 확보.</li>\n<li><strong>이전 분쟁 맥락</strong> — 동기 입증 보조.</li>\n<li><strong>위험한 장소</strong> — 폐쇄공간 = 도주 불가.</li>\n<li><strong>이웃 합의 압박</strong> — 분리 대응 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 112·관할 경찰서</strong></li>\n<li><strong>중앙공동주택관리분쟁조정위 02-2150-4942</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 특수폭행·스토킹 검사 수사 범위',
        summary:
          '대법원 2025도6707(대법원, 2025.09.25 선고) 영역에서 법원은 특수폭행·스토킹 등 결합 사건에서 검찰청법 4조 1항 1호 다목의 \"본래범죄와 관련하여 인지한 각 해당 범죄와 직접 관련성이 있는 범죄\"에서의 \"직접\" 및 \"관련성\"의 의미·판단 사항에 관해 정리한 사례 흐름이 있습니다. 공동주택 엘리베이터 폭행도 이전 분쟁(층간소음·주차) → 폭행으로 이어지는 사건 흐름이 \"관련성\" 평가 영역에 들어가는 흐름을 보여줍니다.',
        takeaway: '결합 사건(폭행 + 이전 분쟁)은 관련성 평가 영역. 본래범죄·인지 범죄 연관 확인 핵심. 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '관리사무소가 CCTV 안 보여주는데 직접 받을 수 있나요?',
        answer:
          '<strong>본인 직접 열람·복사는 개인정보보호법상 제한이 있는 영역이고 경찰·법원 영장으로 확보가 일반 절차 영역입니다.</strong>',
      },
      {
        question: 'CCTV는 며칠까지 보관되나요?',
        answer:
          '<strong>공동주택 CCTV 통상 30~60일 보관 환경이 일반이고 자료보전 요청서를 즉시 제출하는 것이 시간 절약에 권장됩니다.</strong>',
      },
      {
        question: '이전 층간소음 분쟁도 증거로 쓰이나요?',
        answer:
          '<strong>동기·맥락 입증 보조 자료로 검토되는 영역이고 단독 인정보다는 다른 객관 자료와 결합 권장됩니다.</strong>',
      },
      {
        question: '같은 동 주민이라 합의 압박이 큰데 어떻게 하나요?',
        answer:
          '<strong>형사·민사 별개 트랙이라 합의 압박과 별도로 진행 가능한 영역이고 합의는 처분 전이 협상력 핵심입니다.</strong>',
      },
      {
        question: '관리사무소·입주자대표회의 책임도 묻나요?',
        answer:
          '<strong>일반적으로 직접 책임은 어렵지만 폭행 사실 인지 후 조치 미흡 시 안전배려의무 평가 영역에 들어갈 여지가 있습니다.</strong>',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '진단서 vs CCTV 우선순위', href: '/guide/assault/assault-medical-certificate-vs-cctv-evidence-priority' },
      { label: '낯선 사람 무작위 폭행', href: '/guide/assault/assault-stranger-random-attack-victim-track' },
      { label: '이웃 임차인 분쟁 폭행', href: '/guide/assault/assault-tenant-landlord-rent-dispute-track' },
      { label: '범죄피해자 지원', href: '/guide/assault/assault-victim-where-to-start' },
    ],
  },

  // ─── 3. assault-accused-witness-only-no-physical-evidence-defense-track ───
  {
    domain: 'assault',
    slug: 'assault-accused-witness-only-no-physical-evidence-defense-track',
    keyword: '폭행 가해 지목 CCTV·진단서 없음 방어',
    questionKeyword: '폭행 가해자로 지목됐는데 CCTV도 없고 진단서도 없습니다. 진술만 있는데 어떻게 방어하나요?',
    ctaKeyword: '진술만 폭행 혐의 방어',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '폭행 혐의 — 5단계 진술만 있고 물증 없을 때 방어 트랙 | 로앤가이드',
      description:
        '폭행 가해자로 지목됐는데 CCTV·진단서 없이 진술만 있는 상황이라면 5가지 진술 일관성·물증 부재 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3일 전 술자리에서 사소한 말다툼이 있었는데, 그 다음 날 갑자기 경찰에서 \"폭행 혐의\"로 출석 요구가 왔습니다. 본인은 손도 안 댔다고 기억하는데 상대방이 \"맞았다\"고 주장하며 같이 있던 친구 1명이 \"봤다\"고 증언했다고 합니다. CCTV는 그 공간에 없었고 진단서도 \'경미한 통증\'만 적혀 있는 상황에서 어디부터 다퉈야 하는지 막막합니다." 폭행 혐의를 받고 있다면 ① 형법 260조 폭행죄 + 진술만으로 유죄 인정의 증명력 기준 ② 진술의 일관성·신빙성·물증 부재 검토 ③ 진단서 시간 근접성 + 발급 경위 ④ 대한법률구조공단 132·국선변호인 검토 ⑤ 형사 + 무고 검토 5가지가 결합되는 영역에 해당할 소지가 있습니다. 판례 흐름상 형사재판 유죄 인정은 합리적 의심 없는 정도의 증명에 이르러야 하고, 진단서가 주관적 통증만 의존한 경우 증명력 판단은 신중 평가 영역. 대응은 ① 사실 ② 일관성 ③ 변호인 ④ 진술 ⑤ 양형·무고 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 진술만 있고 물증 없는 폭행 혐의 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 혐의를 받고 있다면 사실·일관성·변호·진술·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실관계 시간순 정리 (당일 동선·증인)</strong></li>\n<li><strong>② 상대 진술 일관성·변경 이력 확인</strong></li>\n<li><strong>③ 변호인 상담·국선변호인 검토</strong></li>\n<li><strong>④ 경찰·검찰 진술 전략 (묵비권·진술서)</strong></li>\n<li><strong>⑤ 양형·무고 역고소 검토</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혐의를 받고 있다면 진술만으로의 유죄 인정은 합리적 의심 없는 증명 기준 평가 영역. 진단서의 객관성·발급 시점 + 목격자 진술 일관성·이해관계가 핵심 다툼.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실정리·다툼·양형 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 당일 동선·증인 시간순 정리 (즉시)</strong></li>\n<li><strong>2단계 — 상대 진술 일관성·진단서 발급일 확인 (1주)</strong></li>\n<li><strong>3단계 — 변호인 상담·진술 전략 수립 (1~2주)</strong></li>\n<li><strong>4단계 — 경찰·검찰 출석·진술서 제출 (1~2개월)</strong></li>\n<li><strong>5단계 — 검찰 처분·기소 시 공판·양형 (3~6개월)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 가해자 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">진술만 있고 물증 없는 폭행 혐의 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·일관성·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>당일 동선 정리표·시간순 메모</strong></li>\n<li><strong>휴대폰 GPS·카드 결제·교통카드 기록</strong></li>\n<li><strong>본인 측 동행자·목격자 진술서·연락처</strong></li>\n<li><strong>상대 진술 변경 이력·신고 일자 비교</strong></li>\n<li><strong>상대 진단서 발급일·치료 기록 확인</strong></li>\n<li><strong>탄원서·반성문·합의 시도 자료 (양형용)</strong></li>\n<li><strong>이전 다툼·메시지·녹음 (맥락 보조)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진단서 발급일이 폭행 시점과 시간상 멀리 떨어져 있다면 인과관계 다툼 영역. 본인 동선이 휴대폰·카드·교통카드로 객관 입증되면 알리바이 핵심 자료. 사실과 다르게 신고되었다면 무고 역고소도 검토 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진술 일관성</strong> — 변경 이력 핵심 다툼.</li>\n<li><strong>진단서 시점</strong> — 시간 근접성 평가.</li>\n<li><strong>목격자 이해관계</strong> — 상대 친구 = 보조 자료.</li>\n<li><strong>물증 부재</strong> — 합리적 의심 기준.</li>\n<li><strong>무고 역고소</strong> — 사실과 다르면 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (경찰·검찰·법원)</strong></li>\n<li><strong>형사사법포털 (kics.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 진술·진단서 증명력 신중 판단',
        summary:
          '대법원 2025도12963(대법원, 2025.11.06 선고) 영역에서 법원은 존속학대·폭행·주거침입 등 결합 사건에서 직계존속 학대 객체성·구성요건·증명 정도에 관해 정리한 사례 흐름이 있습니다. 형사재판에서 진술만으로의 유죄 인정은 합리적 의심 없는 정도의 증명에 이르러야 하고, 폭행·학대 등 신체적 침해 사건에서 진술 신빙성·일관성·객관 자료 부합 여부는 신중 평가 영역임을 시사합니다.',
        takeaway: '진술만으로의 유죄 인정은 합리적 의심 없는 증명 기준. 진술 신빙성·일관성·객관 자료 부합 신중 평가 영역. 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '진술만 있고 CCTV·진단서가 없으면 무혐의 가능한가요?',
        answer:
          '<strong>혐의를 받고 있다면 진술의 일관성·신빙성·물증 부재 종합 평가 영역이고 합리적 의심 기준이 적용되는 영역입니다.</strong>',
      },
      {
        question: '국선변호인 받을 수 있나요?',
        answer:
          '<strong>구속·정식재판 시 국선변호인 선정이 일반 절차 영역이고 빈곤 사유 시 선정 청구도 검토 가능합니다.</strong>',
      },
      {
        question: '경찰 진술 시 묵비권 행사해야 하나요?',
        answer:
          '<strong>변호인 상담 전까지 묵비권 행사 검토 영역이고 일관된 진술 전략 수립 후 응하는 것이 권장됩니다.</strong>',
      },
      {
        question: '사실과 다르게 신고되었다면 무고죄로 고소되나요?',
        answer:
          '<strong>사실과 다르게 신고되었다면 본인 무혐의·불기소 결정 후 무고 역고소 검토 영역이고 변호인 상담 권장됩니다.</strong>',
      },
      {
        question: '합의 시도가 양형에 도움 되나요?',
        answer:
          '<strong>합의·반성·초범은 양형 감경 평가 영역이고 본인 사실관계 다툼과 별개로 병행 검토 가능합니다.</strong>',
      },
    ],
    cta: { text: '폭행 가해자 대응, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 가해자 첫 대응', href: '/guide/assault/assault-charged-first-response' },
      { label: '폭행 무고 방어', href: '/guide/assault/assault-false-accusation-defense' },
      { label: '폭행 가해자 어디부터', href: '/guide/assault/assault-accused-where-to-start' },
      { label: '진단서 vs CCTV 우선', href: '/guide/assault/assault-medical-certificate-vs-cctv-evidence-priority' },
      { label: '폭행 과장 부상 주장', href: '/guide/assault/assault-exaggerated-injury-claim' },
    ],
  },

  // ─── 4. dui-test-refusal-voluntary-surrender-criminal-administrative-track ───
  {
    domain: 'dui',
    slug: 'dui-test-refusal-voluntary-surrender-criminal-administrative-track',
    keyword: '음주측정 거부 자진출두 형사 행정',
    questionKeyword: '어젯밤 음주측정 거부하고 도망쳤다가 오늘 자진출두하려 합니다. 형사·행정 어떻게 같이 정리하나요?',
    ctaKeyword: '측정거부 자진출두 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '음주측정 거부 자진출두 — 5단계 형사·행정 분리 대응 트랙 | 로앤가이드',
      description:
        '음주측정을 거부하고 현장 이탈한 후 자진출두를 검토 중이라면 형사 + 행정 5가지 분리 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"어젯밤 늦은 시간 단속에 걸려 음주측정 요구를 받았는데, 당황한 나머지 \"못 하겠다\"고 말하고 차에서 내려 현장을 이탈했어요. 차량 번호는 단속 영상에 남았고 오늘 \"내일까지 자진출두\" 안내를 받은 상태에서, 자진출두가 형량·면허에 어떻게 작용하는지 어디부터 정리해야 하는지 막막합니다." 음주측정 거부 후 자진출두 혐의를 받고 있다면 ① 도로교통법 148조의2 측정거부죄 ② 측정거부는 0.2% 이상 음주운전과 동일 양형 평가 영역 ③ 자진출두 = 자수 감경 요소 (형법 52조) ④ 행정심판 90일 별도 트랙 ⑤ 변호인 상담·진술 전략 5가지가 결합되는 영역. 측정거부는 \"숫자 미확정\" 상태로 처분되어 위드마크 다툼 여지가 적은 반면, 자진출두 + 반성 + 합의는 양형 평가 영역에서 일정 비중을 가질 여지. 대응은 ① 자진출두 ② 변호인 ③ 진술 ④ 행정심판 ⑤ 양형 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 측정거부 자진출두 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 혐의를 받고 있다면 자진출두·변호·진술·행정·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 24시간 내 자진출두·자수서 제출</strong></li>\n<li><strong>② 변호인 상담·진술 전략 수립</strong></li>\n<li><strong>③ 경찰·검찰 진술 (거부 경위·반성)</strong></li>\n<li><strong>④ 행정심판 90일 별도 신청</strong></li>\n<li><strong>⑤ 탄원서·반성문·합의 양형</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 측정거부는 0.2% 이상 음주운전과 동일 양형 평가 영역으로 다툼 폭이 좁음. 자진출두 + 반성 + 초범은 양형 감경 요소. 형사·행정 별도 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자수·다툼·양형 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 상담·자수서·자진출두 (24시간 내)</strong></li>\n<li><strong>2단계 — 거부 경위·당시 상황 진술 전략 (1주)</strong></li>\n<li><strong>3단계 — 경찰·검찰 송치·기소 (1~3개월)</strong></li>\n<li><strong>4단계 — 면허 행정심판 90일 신청 (별도 트랙)</strong></li>\n<li><strong>5단계 — 공판·양형 (탄원서·반성문·합의)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">측정거부 후 자진출두·행정심판 분리 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 자수·진술·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>자수서·자진출두 의사 표시 자료</strong></li>\n<li><strong>당시 상황·거부 경위 정리표</strong></li>\n<li><strong>본인 운전면허 기록·전과·초범 자료</strong></li>\n<li><strong>탄원서·반성문·가족·동료 의견서</strong></li>\n<li><strong>생계자료·소득증명·부양가족 자료</strong></li>\n<li><strong>행정심판 청구서·면허처분 결정문</strong></li>\n<li><strong>변호인 의견서·진술 전략 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 측정거부는 위드마크 다툼 여지가 좁아 양형 감경(자수·반성·초범·합의) 비중이 핵심. 행정심판은 면허 처분일로부터 90일 별도 트랙이라 즉시 준비. 자수서는 변호인 검토 후 제출 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>측정거부 = 0.2% 이상 양형</strong> — 다툼 폭 좁음.</li>\n<li><strong>자수 감경</strong> — 형법 52조 평가 영역.</li>\n<li><strong>현장 이탈</strong> — 도주 평가 여지.</li>\n<li><strong>임의수사 적법성</strong> — 측정 요구 절차 검토.</li>\n<li><strong>형사·행정 분리</strong> — 별도 대응.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>도로교통공단 1577-1120</strong></li>\n<li><strong>중앙행정심판위원회 110</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주측정 요구의 임의수사 적법성',
        summary:
          '대법원 2025도6752(대법원, 2025.12.11 선고) 영역에서 법원은 \"만취한 사람이 자동차를 주차하고 식당으로 들어갔다\"는 112 신고로 출동한 경찰관이 식당에서 피고인을 찾아 음주측정을 한 사안에서, 수사기관이 범죄를 수사하면서 불특정·다수의 출입이 가능한 장소에 통상적인 방법으로 출입하여 아무런 물리력이나 강제력을 행사하지 않고 통상적인 방법으로 피의자를 찾는 등 위법행위를 확인하는 것은 임의수사의 한 방법으로서 허용되고, 이어진 경찰관의 음주측정 역시 적법하다고 판단한 사례 흐름이 있습니다.',
        takeaway: '음주측정 요구의 적법성은 임의수사 원칙 평가 영역. 거부 후 자진출두는 양형 감경 평가 영역. 변호인 진술 전략 권장.',
      },
    ],
    faq: [
      {
        question: '음주측정 거부도 음주운전과 같은 처벌인가요?',
        answer:
          '<strong>도로교통법상 측정거부는 혈중알코올농도 0.2% 이상 음주운전과 동일한 양형 평가 영역에 들어갈 소지가 있는 영역입니다.</strong>',
      },
      {
        question: '자진출두하면 형량이 줄어드나요?',
        answer:
          '<strong>형법 52조 자수 감경 검토 영역이고 반성·초범·합의와 결합 시 양형 평가에 유리하게 작용할 여지가 있습니다.</strong>',
      },
      {
        question: '면허는 어떻게 되나요?',
        answer:
          '<strong>측정거부는 면허 취소 처분이 일반 절차이고 처분일로부터 90일 행정심판 별도 트랙으로 다툼 가능한 영역입니다.</strong>',
      },
      {
        question: '현장에서 도망친 게 가중 사유인가요?',
        answer:
          '<strong>도주·뺑소니 결합 평가 영역에 들어갈 소지가 있고 24시간 내 자진출두로 도주 의사 부정 입증이 검토되는 영역입니다.</strong>',
      },
      {
        question: '변호인 없이 자진출두해도 되나요?',
        answer:
          '<strong>변호인 상담 후 자수서·진술 전략 수립 후 출두가 권장되고 국선변호인 선정도 검토 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주측정 거부 처벌', href: '/guide/dui/dui-breathalyzer-refusal' },
      { label: '측정거부 도주 가중', href: '/guide/dui/dui-test-refusal-flee-aggravated-track' },
      { label: '측정거부 면허 항고', href: '/guide/dui/dui-measurement-refusal-penalty-appeal' },
      { label: '행정심판 90일 감경', href: '/guide/dui/dui-administrative-trial-90day-mitigation' },
      { label: '음주운전 첫 대응', href: '/guide/dui/dui-caught-where-to-start' },
    ],
  },
];
