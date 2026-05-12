import { SpokePage } from '../spoke-pages';

// batch63 assault·child-support·dui — 6개 (2026-05-13)
//
// 고유 존재 이유:
// assault 3:
// 1. 정당방위 입증·방어 행위 범위 — 침해 현재성·상당성 입증 트랙 (victim).
// 2. 쌍방폭행 선제 가격 양형 가중 — 누가 먼저 때렸나 양형 분기 (accused).
// 3. 군대 내 폭행 군형법 트랙 — 군형법 우선 + 군사법원 (victim).
// child-support 2:
// 1. 면허정지·출국금지 제재 트랙 — 양육비 미지급 제재 5단계 (victim, csa_procedure).
// 2. 양육비 선지급제 + 중위소득 150% — 한시적 긴급 지원 (victim, csa_procedure).
// dui 1:
// 1. 음주 + 인사사고 위험운전치상 가중 — 특가법 트랙 (accused).

export const spokesBatch63AssaultCsDui: SpokePage[] = [
  // ─── 1. assault-self-defense-proof-defensive-boundary-track ───
  {
    domain: 'assault',
    slug: 'assault-self-defense-proof-defensive-boundary-track',
    keyword: '정당방위 입증 방어 범위',
    questionKeyword: '먼저 맞고 본인이 밀쳤는데 정당방위 인정될지 막막해요. 입증은 어떻게 하나요?',
    ctaKeyword: '정당방위 입증 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '정당방위 입증 — 5단계 침해 현재성·방어 범위 점검 | 로앤가이드',
      description:
        '먼저 맞고 본인이 밀쳤다면 정당방위 5가지 요건·입증 자료·방어 범위를 지금 확인하세요.',
    },
    intro:
      '<p>"술집에서 본인(30대 여성)이 먼저 시비 건 50대 남성에게 멱살을 잡혀 흔들리다 손바닥으로 그의 어깨를 밀쳐 그가 넘어졌어요. 가해자는 자신만 \'폭행\' 주장하며 본인을 고소. 정당방위로 무혐의 가능할지 막막한 상황." 정당방위는 형법 제21조에 따라 ① 침해의 현재성 ② 침해의 부당성 ③ 방어 행위의 상당성 3요건을 모두 충족해야 인정되는 영역. 침해가 \'끝난 후\' 반격하면 정당방위 부정 영역. \'방어 정도\'가 침해 강도를 \'명백히 초과\'하면 과잉방위 영역. 정당방위 입증 트랙은 ① CCTV·증인 ② 침해 현재성 ③ 방어 상당성 ④ 의료기록 ⑤ 변호인 진술 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 정당방위 입증 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 침해·방어·증거·기록·진술 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 침해의 현재성</strong> — "지금 진행 중" 침해.</li>\n<li><strong>② 방어의 상당성</strong> — 침해 정도 비례.</li>\n<li><strong>③ CCTV·증인 확보</strong></li>\n<li><strong>④ 의료기록·진단서</strong></li>\n<li><strong>⑤ 변호인 통한 진술 일관성</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "맞고 나서 한참 뒤 보복" = 정당방위 부정. "맞으면서·맞기 직전" 방어가 인정 영역. 방어가 침해보다 \'명백히 과한\' 경우는 과잉방위(형 감경) 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 입증 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·법리·진술 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사건 직후 CCTV·증인 확보 (즉시)</strong></li>\n<li><strong>2단계 — 본인 피해 진단서·사진 (24시간 내)</strong></li>\n<li><strong>3단계 — 변호인 선임·진술 준비 (1주)</strong></li>\n<li><strong>4단계 — 경찰 출석·일관 진술</strong></li>\n<li><strong>5단계 — 무혐의 처분 또는 기소 후 정당방위 주장</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">정당방위 입증·방어 범위를 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 영상·진단·진술 갈래입니다.</strong></p>\n<ul>\n<li><strong>현장 CCTV·블랙박스</strong></li>\n<li><strong>112 신고 기록·녹취</strong></li>\n<li><strong>본인 피해 진단서·상처 사진</strong></li>\n<li><strong>증인 진술서</strong></li>\n<li><strong>가해자의 선제 공격 입증 자료 (메시지·발화 녹취)</strong></li>\n<li><strong>치료 영수증</strong></li>\n<li><strong>본인 신분증·일관 진술서</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>침해 현재성</strong> — 끝난 후 보복은 부정.</li>\n<li><strong>방어 상당성</strong> — 흉기 사용·반복 가격은 과잉.</li>\n<li><strong>도발 여부</strong> — 본인이 도발 시 정당방위 약화.</li>\n<li><strong>진술 변경</strong> — 일관성 깨지면 신빙성 약화.</li>\n<li><strong>증인의 친소관계</strong> — 친구만 있으면 신빙성 약화.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (수사 단계 신청)</strong></li>\n<li><strong>여성긴급전화 1366 (여성 피해 시)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정당방위 침해 현재성',
        summary:
          '대법원 2020도6874 사건에서 법원은 정당방위의 요건 중 \'침해의 현재성\'은 일련의 연속된 행위로 침해 상황이 계속되거나 중단되지 않은 경우에도 인정될 수 있다고 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '연속 침해 중간 방어도 현재성 영역. 다만 침해 종료 후 보복은 정당방위 부정 영역.',
      },
    ],
    faq: [
      {
        question: '먼저 도발하면 정당방위 안 되나요?',
        answer:
          '<strong>약화될 수 있는 영역입니다.</strong> 다만 도발과 무관한 별개 공격엔 적용 여지.',
      },
      {
        question: '맞고 나서 5분 뒤 때렸어요',
        answer:
          '<strong>침해 종료 후로 보일 수 있는 영역입니다.</strong> 정당방위 부정 우려.',
      },
      {
        question: '여러 번 때렸으면 과잉방위인가요?',
        answer:
          '<strong>침해 강도 대비 명백히 초과 시 과잉방위 영역입니다.</strong>',
      },
      {
        question: '증인이 친구뿐이에요',
        answer:
          '<strong>친소관계로 신빙성 약화 우려.</strong> CCTV·녹취 보강 권장.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '정당방위 인정 요건', href: '/guide/assault/assault-self-defense-recognition' },
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '폭행 첫 대응', href: '/guide/assault/assault-victim-where-to-start' },
      { label: '쌍방 vs 정당방위', href: '/guide/assault/mutual-assault-self-defense-distinction' },
      { label: '정당방위 증거 요건', href: '/guide/assault/self-defense-evidence-requirements' },
    ],
  },

  // ─── 2. assault-mutual-fight-first-strike-aggravation-track ───
  {
    domain: 'assault',
    slug: 'assault-mutual-fight-first-strike-aggravation-track',
    keyword: '쌍방폭행 선제 가격 양형',
    questionKeyword: '쌍방폭행으로 입건됐는데 본인이 먼저 때렸어요. 어디까지 가중되나요?',
    ctaKeyword: '쌍방폭행 선제 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '쌍방폭행 선제 가격 — 5단계 양형 가중 점검 | 로앤가이드',
      description:
        '쌍방폭행에서 본인이 먼저 가격한 경우 양형 가중·합의·반성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술집에서 본인(40대 남성)이 시비 끝에 상대 어깨를 밀어 그가 본인 얼굴을 가격, 본인도 같이 주먹질해 양쪽 모두 전치 2주. 쌍방폭행 입건됐는데 본인이 \'먼저\' 시작했다는 게 드러나서 양형이 어떻게 될지 막막한 상황." 쌍방폭행은 ① 누가 먼저 시작했나(선제·후행) ② 침해 정도 비교 ③ 도발 여부 ④ 피해 정도 ⑤ 합의·반성에 따라 양형이 분기되는 영역. 선제 가격자는 일반적으로 양형 불리, 후행자는 정당방위 또는 과잉방위 주장 여지. 본인이 혐의를 받고 있다면 ① 사실관계 정리 ② 일관 진술 ③ 합의 ④ 반성·기부 ⑤ 변호인 양형 자료 5단계 대응이 흐름입니다.</p>',
    sections: [
      {
        title: 'Q. 쌍방폭행 선제 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·진술·합의·반성·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 선제·후행 사실관계</strong></li>\n<li><strong>② 일관 진술·CCTV 정리</strong></li>\n<li><strong>③ 합의 시도 (피해자)</strong></li>\n<li><strong>④ 반성문·기부·치료</strong></li>\n<li><strong>⑤ 변호인 양형 자료 제출</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 폭행죄는 반의사불벌죄(형법 제260조 제3항). 합의 시 처벌불원 → 공소권 없음 영역. 선제자라도 합의 성립이 형사 종결 분기점.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·합의·반성 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — CCTV·증인 확보 (즉시)</strong></li>\n<li><strong>2단계 — 변호인 선임 (수사 초기)</strong></li>\n<li><strong>3단계 — 피해자 합의 시도 (2~3주)</strong></li>\n<li><strong>4단계 — 반성문·기부·심리치료</strong></li>\n<li><strong>5단계 — 양형 자료 제출 (검찰·법원)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의금과 대응 전략, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">쌍방폭행 선제 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·합의·반성 갈래입니다.</strong></p>\n<ul>\n<li><strong>현장 CCTV·블랙박스</strong></li>\n<li><strong>경찰 출석 통지서</strong></li>\n<li><strong>본인·상대 진단서</strong></li>\n<li><strong>합의서·합의금 송금 영수증</strong></li>\n<li><strong>반성문·서약서</strong></li>\n<li><strong>가족·지인 탄원서</strong></li>\n<li><strong>심리치료·기부 영수증</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>선제 vs 도발</strong> — 누가 먼저 발화했나도 양형 고려.</li>\n<li><strong>합의 시점</strong> — 검찰 송치 전 합의가 유리.</li>\n<li><strong>합의금 단정 금지</strong> — 사례마다 달라 일률 산정 어려움.</li>\n<li><strong>상해 vs 폭행</strong> — 진단서 발급되면 상해죄(반의사불벌 아님).</li>\n<li><strong>전과·초범 여부</strong> — 초범이면 기소유예·집행유예 여지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (수사 단계 신청 가능)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 쌍방 싸움과 양형',
        summary:
          '대법원 2023도10768 사건에서 법원은 운영자와 회원 사이 시비 끝에 발생한 상호 폭행에서 선제 가격 여부·도발 정황·피해 정도·합의를 종합적으로 양형 사정으로 평가할 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '선제자도 합의 + 반성 시 집행유예·기소유예 가능 영역. 도발 정황 정리가 핵심.',
      },
    ],
    faq: [
      {
        question: '먼저 때렸으면 무조건 더 무겁나요?',
        answer:
          '<strong>일반적으로 불리하지만 합의·반성으로 감경 여지가 있습니다.</strong>',
      },
      {
        question: '상대도 때렸는데 본인만 처벌받나요?',
        answer:
          '<strong>쌍방 입건 일반적입니다.</strong> 정도 차이로 양형 분기.',
      },
      {
        question: '합의금은 얼마 정도 나오나요?',
        answer:
          '<strong>전치 2주 사례에서 100~300만원 수준이 검토되는 사례가 있습니다.</strong> 사례마다 차이.',
      },
      {
        question: '초범인데 전과 남나요?',
        answer:
          '<strong>합의 + 반성 시 기소유예·선고유예 여지가 있는 영역입니다.</strong>',
      },
    ],
    cta: { text: '합의금과 대응 전략, AI로 확인하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '쌍방 vs 정당방위 구분', href: '/guide/assault/mutual-assault-self-defense-distinction' },
      { label: '쌍방 합의금 산정', href: '/guide/assault/assault-mutual-fight-settlement-amount' },
      { label: '폭행 가해자 첫 대응', href: '/guide/assault/assault-accused-where-to-start' },
      { label: '합의금 산정 가이드', href: '/guide/assault/assault-settlement-amount-guide' },
      { label: '초범 처벌 수위', href: '/guide/assault/assault-first-offense-penalty' },
    ],
  },

  // ─── 3. assault-military-internal-violence-track ───
  {
    domain: 'assault',
    slug: 'assault-military-internal-violence-track',
    keyword: '군대 내 폭행 군형법',
    questionKeyword: '입대한 아들이 선임에게 맞았다고 합니다. 군형법은 어떻게 적용되나요?',
    ctaKeyword: '군대 폭행 신고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '군대 내 폭행 — 5단계 군형법·군사법원 트랙 | 로앤가이드',
      description:
        '아들이 부대에서 선임에게 맞았다면 군형법·민간법원 이송·국방헬프콜 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"입대한 본인 아들(20대 초)이 부대에서 선임 병사에게 머리·복부를 가격당해 갈비뼈 골절·전치 4주. 부대 측은 \'자체 처리\' 운운하며 가족 면회를 미루고 있어요. 군형법 적용·군사법원 트랙이 막막한 상황." 군인 간 폭행은 군형법 제60조(상관·동료 폭행)·제61조(가혹행위) 등이 우선 적용되는 영역. 형법보다 법정형이 무겁고, \'반의사불벌\' 적용이 제한될 수 있는 사례 흐름. 군사법원법 개정(2022.7.1)으로 \'성폭력·사망·입대 전 범죄\'는 민간법원으로 이송되지만, 군인 간 단순 폭행·상해는 군사법원 관할 영역. 대응 트랙은 ① 부대 신고 + 국방헬프콜 ② 헌병대(군사경찰) 진정 ③ 군검사·군사법원 ④ 민간 형사고소 (입대 전 범죄·민간인 피해 시) ⑤ 민사 손해배상 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 군대 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·진정·기소·민사·지원 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 부대 신고 + 국방헬프콜 1303</strong></li>\n<li><strong>② 군사경찰(헌병) 진정</strong></li>\n<li><strong>③ 군검사·군사법원 (군형법 60·61조)</strong></li>\n<li><strong>④ 민간 형사 (입대 전 범죄 등)</strong></li>\n<li><strong>⑤ 민사 손해배상 (국가배상 검토)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 군형법은 일반 형법보다 무거운 영역. 부대 자체 처리 압박과 별개로 헌병대 진정·국방헬프콜 1303·국가인권위 진정이 외부 견제 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·헌병·기소·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 부대 신고·진단서 (즉시)</strong></li>\n<li><strong>2단계 — 국방헬프콜 1303 (24시간)</strong></li>\n<li><strong>3단계 — 군사경찰(헌병) 진정 (1주)</strong></li>\n<li><strong>4단계 — 군검사 수사·기소 또는 민간 이송</strong></li>\n<li><strong>5단계 — 국가배상 + 민사 (시효 5년)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">군대 폭행 군형법 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·진단·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>부대 신고 기록·면담록</strong></li>\n<li><strong>군병원·민간병원 진단서</strong></li>\n<li><strong>국방헬프콜 1303 상담 기록</strong></li>\n<li><strong>같은 부대 동료 진술서</strong></li>\n<li><strong>가족 면담·통화 기록</strong></li>\n<li><strong>상처 사진·치료 영수증</strong></li>\n<li><strong>본인·가족 신분증</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>부대 자체 처리 압박</strong> — 외부 진정 권장.</li>\n<li><strong>군형법 vs 형법</strong> — 군형법이 일반적으로 무거움.</li>\n<li><strong>군사법원 관할</strong> — 단순 폭행은 군사법원.</li>\n<li><strong>국가배상 청구</strong> — 부대의 관리·감독 책임.</li>\n<li><strong>피해자 보호</strong> — 부대 분리 요청 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>국방헬프콜 1303</strong></li>\n<li><strong>군 인권센터 (시민단체)</strong></li>\n<li><strong>국가인권위원회 1331</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 군인 간 폭행 군형법',
        summary:
          '대법원 2022도2070 사건에서 법원은 군인 등이 대한민국 국군의 군사작전 수행을 위한 근거지에서 군인 등을 폭행한 경우 군형법상 폭행죄가 적용될 수 있는 영역으로 평가할 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '군인 간 폭행은 군형법 영역. 부대 자체 처리에 갇히지 말고 헌병대·국방헬프콜로 외부 견제.',
      },
    ],
    faq: [
      {
        question: '부대가 자체 처리하자고 해요',
        answer:
          '<strong>외부 진정 권장합니다.</strong> 국방헬프콜 1303·국가인권위 1331.',
      },
      {
        question: '군형법은 형법보다 무거운가요?',
        answer:
          '<strong>일반적으로 법정형이 무거운 영역입니다.</strong>',
      },
      {
        question: '국가배상도 청구되나요?',
        answer:
          '<strong>부대의 관리·감독 책임이 인정되는 영역에서 청구 여지가 있습니다.</strong>',
      },
      {
        question: '면회는 어떻게 신청하나요?',
        answer:
          '<strong>부대장 직접 요청 + 군인권센터 동행 검토 권장입니다.</strong>',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 첫 대응', href: '/guide/assault/assault-victim-where-to-start' },
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '집단 폭행 책임', href: '/guide/assault/assault-group-attack-joint-liability' },
      { label: '직장 상사 폭행', href: '/guide/assault/assault-workplace-supervisor-after-hours-attack' },
      { label: '폭행 진단서 vs CCTV', href: '/guide/assault/assault-medical-certificate-vs-cctv-evidence-priority' },
    ],
  },

  // ─── 4. child-support-license-points-passport-restriction-track ───
  {
    domain: 'child-support',
    slug: 'child-support-license-points-passport-restriction-track',
    keyword: '양육비 미지급 면허정지 출국금지',
    questionKeyword: '전 남편이 양육비 2년 미지급. 운전면허 정지·출국금지까지 가능한가요?',
    ctaKeyword: '양육비 제재조치 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양육비 미지급 — 5단계 면허정지·출국금지 제재 점검 | 로앤가이드',
      description:
        '양육비 미지급자에게 운전면허정지·출국금지·명단공개 등 5가지 제재 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전 남편이 양육비 월 80만원 × 2년 1,920만원을 미지급. 본인은 이행명령·감치명령까지 받아냈는데 여전히 \'돈 없다\' 답변뿐. 운전면허정지·출국금지·명단공개까지 갈 수 있는지 막막한 상황." 양육비 미지급 제재는 양육비 이행확보 및 지원에 관한 법률에 따라 ① 운전면허정지(최대 100일) ② 출국금지 ③ 명단공개(3년) ④ 형사처벌(1년 이하 징역 또는 1천만원 이하 벌금) 4가지가 단계별로 가능한 영역. 다만 \'감치결정 + 미이행\' 또는 \'3기 이상 미이행 + 3,000만원 이상\' 등 요건이 충족되어야 하는 사례. 대응 트랙은 ① 이행명령 ② 감치명령 ③ 면허정지 신청 ④ 출국금지 신청 ⑤ 명단공개 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 미지급 제재 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 이행·감치·면허·출국·공개 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 이행명령 신청</strong> — 가정법원.</li>\n<li><strong>② 감치명령</strong> — 이행명령 후 3기 이상 미이행.</li>\n<li><strong>③ 운전면허 정지(최대 100일)</strong></li>\n<li><strong>④ 출국금지</strong> — 감치결정 시 3,000만원 이상 OR 3기 이상.</li>\n<li><strong>⑤ 명단공개(3년)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 제재는 \"이행명령 → 감치 → 면허·출국·공개\" 단계 영역. 단계 누락 시 기각 가능성. 양육비이행관리원이 신청 도와줄 수 있는 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 제재 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 이행·감치·제재 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 이행명령 신청 (가정법원)</strong></li>\n<li><strong>2단계 — 3기 이상 미이행 시 감치명령 (가사소송법 제68조)</strong></li>\n<li><strong>3단계 — 운전면허 정지 신청 (최대 100일)</strong></li>\n<li><strong>4단계 — 출국금지 신청 (감치 시 3천만원 이상 OR 3기 이상)</strong></li>\n<li><strong>5단계 — 명단공개(3년) + 형사고발</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 못 받을 때 다음 단계, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">양육비 제재 5단계를 AI가 안내합니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 이행·감치·재산 갈래입니다.</strong></p>\n<ul>\n<li><strong>양육비 판결문·심판문 + 확정증명서</strong></li>\n<li><strong>이행명령 결정문</strong></li>\n<li><strong>감치결정문</strong></li>\n<li><strong>미지급 내역서·계좌이체 자료</strong></li>\n<li><strong>비양육친 인적사항·주소</strong></li>\n<li><strong>가족관계증명서</strong></li>\n<li><strong>신청자 신분증·주민등록등본</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>이행명령 단계 누락</strong> — 단계 건너뛰면 기각.</li>\n<li><strong>3기 이상 미이행</strong> — 정당한 사유 없어야 함.</li>\n<li><strong>출국금지 채무 기준</strong> — 감치 + 3천만원 이상 OR 3기 이상.</li>\n<li><strong>면허정지 100일</strong> — 생업 영향 항변 가능.</li>\n<li><strong>명단공개 3년</strong> — 사생활·재취업 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>여성가족부 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 청구권 단계 적용',
        summary:
          '대법원 2018스724 사건에서 법원은 협의 또는 가정법원의 심판으로 구체적인 지급청구권으로 성립한 양육비 채권에 대해서는 일반 금전채권과 달리 시효·집행 등에서 별도 평가 영역이 있다고 본 사례 흐름이 있습니다.',
        takeaway: '구체적 지급청구권 성립이 강제집행·제재의 분기점. 판결·심판·조정조서가 정본.',
      },
    ],
    faq: [
      {
        question: '이행명령 없이 바로 감치 신청되나요?',
        answer:
          '<strong>일반적으로 어렵습니다.</strong> 이행명령 → 3기 이상 미이행 → 감치 순.',
      },
      {
        question: '출국금지는 얼마부터 가능한가요?',
        answer:
          '<strong>감치결정 시 3,000만원 이상 OR 3기 이상 미이행 영역입니다.</strong>',
      },
      {
        question: '명단공개되면 어떻게 되나요?',
        answer:
          '<strong>여성가족부 홈페이지에 3년간 공개되는 영역입니다.</strong>',
      },
      {
        question: '면허정지 100일은 무조건인가요?',
        answer:
          '<strong>최대 100일이며 생업 영향 항변 시 조정 여지가 있는 영역입니다.</strong>',
      },
    ],
    cta: { text: '양육비 못 받을 때 다음 단계, AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 미지급 대응', href: '/guide/child-support/child-support-non-payment-response' },
      { label: '양육비이행관리원', href: '/guide/child-support/child-support-csa-procedure' },
      { label: '감치명령 신청', href: '/guide/child-support/child-support-detention-order' },
      { label: '명단공개 절차', href: '/guide/child-support/child-support-public-disclosure-debtor-list-procedure' },
      { label: '면허정지 청원', href: '/guide/child-support/child-support-license-suspension-petition-procedure' },
    ],
  },

  // ─── 5. child-support-pre-payment-emergency-medium-income-track ───
  {
    domain: 'child-support',
    slug: 'child-support-pre-payment-emergency-medium-income-track',
    keyword: '양육비 선지급제 중위소득 150%',
    questionKeyword: '양육비 못 받고 생활비도 빠듯해요. 국가에서 선지급해준다는데 어떻게 신청하나요?',
    ctaKeyword: '양육비 선지급 신청',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양육비 선지급제 — 5단계 중위소득 150% 한시 지원 | 로앤가이드',
      description:
        '양육비 못 받는 가정에 국가가 한시 선지급하는 5가지 신청·요건·환수 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인(30대 한부모)이 6세 자녀 양육 중인데 전 남편이 양육비 1년째 미지급. 생활비 빠듯해 \'국가가 먼저 양육비를 대신 준다\'는 양육비 선지급제 들었는데 신청 자격·금액·환수가 막막한 상황." 양육비 선지급제는 2025년 시행된 양육비 한시적 긴급지원의 확대 영역. 양육비이행관리원에서 ① 기준 중위소득 150% 이하 ② 양육비 미지급 ③ 집행권원(판결문·조정조서) 보유 ④ 비양육친 추심 어려움 등의 요건 충족 시 국가가 양육친에게 자녀당 일정액을 \'먼저\' 지급하고, 이후 국가가 비양육친에게 \'구상\'(환수)하는 트랙. 대응 트랙은 ① 요건 확인 ② 신청 ③ 심사 ④ 지급 ⑤ 환수 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 선지급 신청 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 요건·신청·심사·지급·환수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 기준 중위소득 150% 이하</strong></li>\n<li><strong>② 양육비 미지급 + 집행권원</strong></li>\n<li><strong>③ 양육비이행관리원 신청</strong></li>\n<li><strong>④ 심사·지급 (자녀당 월 일정액)</strong></li>\n<li><strong>⑤ 국가의 비양육친 구상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \"국가가 먼저, 비양육친에 나중에 구상\" 구조 영역. 선지급은 \'한시적·긴급\' 성격으로 지급 기간·금액 한도 제한. 받은 양육비는 자녀 양육에 사용 의무.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 선지급 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신청·심사·지급 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 요건 확인 (중위소득 150% 이하 + 집행권원)</strong></li>\n<li><strong>2단계 — 양육비이행관리원 1644-6621 신청</strong></li>\n<li><strong>3단계 — 심사 (소득·재산·미지급 확인)</strong></li>\n<li><strong>4단계 — 지급 (자녀당 월 일정액)</strong></li>\n<li><strong>5단계 — 국가가 비양육친에 구상·환수</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 못 받을 때 다음 단계, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">선지급제 요건·신청 절차를 AI가 안내합니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신청·소득·집행 갈래입니다.</strong></p>\n<ul>\n<li><strong>양육비 이행확보 지원 신청서</strong></li>\n<li><strong>양육비 판결문·심판문·조정조서</strong></li>\n<li><strong>확정증명서</strong></li>\n<li><strong>소득금액증명·건강보험납부확인</strong></li>\n<li><strong>주민등록등본·가족관계증명서</strong></li>\n<li><strong>혼인관계증명서·기본증명서</strong></li>\n<li><strong>미지급 내역·계좌이체 자료</strong></li>\n<li><strong>본인 신분증·통장 사본</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>소득 기준 초과</strong> — 중위소득 150% 초과 시 부적합.</li>\n<li><strong>집행권원 부재</strong> — 협의 합의만 있으면 불가, 공정증서 필요.</li>\n<li><strong>지급 한도·기간</strong> — 한시 성격 영역.</li>\n<li><strong>자녀 사용 의무</strong> — 양육 외 사용 시 환수·제재.</li>\n<li><strong>비양육친 구상</strong> — 국가가 비양육친에 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>여성가족부 1366</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 과거 양육비 청구',
        summary:
          '대법원 2023스637 사건에서 법원은 부모 중 한쪽만 자녀를 양육한 경우, 양육친이 과거의 양육비에 대해 상대방의 분담 상당액 상환을 청구할 수 있는 영역이 있다고 본 사례 흐름이 있습니다.',
        takeaway: '과거 양육비 청구권 인정. 선지급제는 그 청구권에 \'국가가 먼저\' 들어오는 구조.',
      },
    ],
    faq: [
      {
        question: '소득이 중위소득 150% 넘으면 안 되나요?',
        answer:
          '<strong>현행 한시 지원은 중위소득 150% 이하 영역입니다.</strong>',
      },
      {
        question: '협의만 있으면 신청 못 하나요?',
        answer:
          '<strong>판결·심판·조정조서 등 집행권원이 필요한 영역입니다.</strong>',
      },
      {
        question: '받은 돈은 어디에 써야 하나요?',
        answer:
          '<strong>자녀 양육에 사용 의무가 있습니다.</strong> 다른 용도 사용 시 환수·제재.',
      },
      {
        question: '비양육친한테 어떻게 환수되나요?',
        answer:
          '<strong>국가가 구상권으로 비양육친에 청구하는 영역입니다.</strong>',
      },
    ],
    cta: { text: '양육비 못 받을 때 다음 단계, AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비이행관리원', href: '/guide/child-support/child-support-csa-procedure' },
      { label: '양육비 미지급 대응', href: '/guide/child-support/child-support-non-payment-response' },
      { label: '강제집행 절차', href: '/guide/child-support/child-support-enforcement' },
      { label: '재산조회', href: '/guide/child-support/child-support-asset-investigation' },
      { label: '감치명령 신청', href: '/guide/child-support/child-support-detention-order' },
    ],
  },

  // ─── 6. dui-accident-injury-yunchangho-aggravated-track ───
  {
    domain: 'dui',
    slug: 'dui-accident-injury-yunchangho-aggravated-track',
    keyword: '음주 사고 위험운전치상 특가법',
    questionKeyword: '음주운전으로 행인에게 상해를 입혔어요. 위험운전치상으로 가중되나요?',
    ctaKeyword: '음주 사고 특가법 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '음주 + 인사사고 — 5단계 위험운전치상 특가법 점검 | 로앤가이드',
      description:
        '음주운전 중 사고로 사람을 다치게 했다면 특가법 위험운전치상·합의·반성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인(50대 남성)이 회식 후 귀가 중 음주 상태로 운전하다 횡단보도에서 행인을 살짝 친 사고. 행인은 전치 3주 진단. 본인은 \'잠깐만\' 후회막심. 위험운전치상으로 특가법까지 가중되는지, 합의 가능성·형량이 막막한 상황." 음주운전 + 사람을 다치게 한 사고는 ① 도로교통법 음주운전 + ② 특정범죄가중처벌법 제5조의11(위험운전치사상)이 동시 적용 가능한 영역. 위험운전치상은 1년 이상 15년 이하 징역 또는 1천만원 이상 3천만원 이하 벌금이라는 법조문 흐름. 사고 후 도주(특가법 제5조의3)도 별도 가중. 본인이 혐의를 받고 있다면 ① 사실관계 ② 합의 ③ 반성 ④ 변호인 ⑤ 양형 자료 5단계 대응이 흐름입니다.</p>',
    sections: [
      {
        title: 'Q. 음주 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·합의·반성·변호·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실관계 정리</strong> — 음주·사고·과실.</li>\n<li><strong>② 피해자 합의·치료비</strong></li>\n<li><strong>③ 반성문·기부·치료</strong></li>\n<li><strong>④ 변호인 선임 (수사 초기)</strong></li>\n<li><strong>⑤ 양형 자료 (탄원·재정·부양)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 음주 + 사고는 \"위험운전치상\" 영역에서 가중. 다만 음주 정도·과실·피해 정도·합의에 따라 형량이 다르고, 단정형 형량 예측은 어려운 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·합의·반성 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고 직후 119 신고·진단·블랙박스 (즉시)</strong></li>\n<li><strong>2단계 — 변호인 선임 (수사 초기)</strong></li>\n<li><strong>3단계 — 피해자 합의·치료비 (2~3주)</strong></li>\n<li><strong>4단계 — 반성문·기부·심리치료</strong></li>\n<li><strong>5단계 — 양형 자료 제출 (검찰·법원)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 탄원서와 감경 요소, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">위험운전치상 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·합의·반성 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 출석 통지서·진술서</strong></li>\n<li><strong>음주측정 결과·혈중알코올농도</strong></li>\n<li><strong>사고 현장·블랙박스 영상</strong></li>\n<li><strong>피해자 합의서·치료비 영수증</strong></li>\n<li><strong>반성문·서약서·기부 영수증</strong></li>\n<li><strong>가족·지인 탄원서</strong></li>\n<li><strong>재정·가족부양 입증자료</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>위험운전 vs 단순 음주</strong> — 정상 운전이 곤란한 정도 입증.</li>\n<li><strong>혈중알코올농도 상승기</strong> — 측정 시점 다툼 여지.</li>\n<li><strong>합의 시점</strong> — 송치 전 합의가 유리.</li>\n<li><strong>도주 가중</strong> — 사고 후 자리 이탈은 특가법 도주차량 별도.</li>\n<li><strong>면허 행정처분</strong> — 형사와 별도 트랙 (90일 행정심판).</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (수사 단계 신청 가능)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주 + 위험운전치상',
        summary:
          '대법원 2022도13430 사건에서 법원은 전동킥보드와 같은 개인형 이동수단도 \'자동차\'에 준해 위험운전치상죄가 적용될 수 있는 영역으로 평가할 여지가 있다고 보았으며, 음주 + 사고로 인한 상해 사건에서 사고 경위·과실·피해 정도를 종합 평가한 사례 흐름이 있습니다.',
        takeaway: '음주 + 사고 = 위험운전치상 영역. 합의·반성이 양형 분기점, 도주 동반 시 가중.',
      },
    ],
    faq: [
      {
        question: '혈중알코올농도 0.05면 무조건 위험운전인가요?',
        answer:
          '<strong>정상 운전이 곤란한 정도 입증이 별도로 평가되는 영역입니다.</strong>',
      },
      {
        question: '합의되면 처벌받지 않나요?',
        answer:
          '<strong>위험운전치상은 반의사불벌이 아닌 영역입니다.</strong> 다만 합의는 양형 감경 사유.',
      },
      {
        question: '도주는 안 했는데 가중되나요?',
        answer:
          '<strong>도주 미동반 시 특가법 제5조의3은 미적용 영역입니다.</strong>',
      },
      {
        question: '면허는 별도로 어떻게 되나요?',
        answer:
          '<strong>형사와 별도로 면허취소 행정처분, 90일 내 행정심판 청구 영역입니다.</strong>',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주 사고 대응', href: '/guide/dui/dui-traffic-accident-response' },
      { label: '음주운전 형사 절차', href: '/guide/dui/dui-criminal-procedure-overview' },
      { label: '음주 행정심판 90일', href: '/guide/dui/dui-administrative-trial-90day-mitigation' },
      { label: '음주 탄원서·감경', href: '/guide/dui/dui-leniency-petition-documents' },
      { label: '재범 가중 처벌', href: '/guide/dui/dui-repeat-offense-aggravation' },
    ],
  },
];
