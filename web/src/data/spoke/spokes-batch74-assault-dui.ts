import { SpokePage } from '../spoke-pages';

// batch74 assault / dui — 4개 (2026-05-22) = 3+1
//
// 고유 존재 이유:
// assault 3:
// 1. 헬스장 PT 트레이너 무리한 자세 강요 부상 — \'PT 자세 강요 + 업무상 과실치상 + 손해배상\' 트랙
// 2. 노래방·술집 만취 폭행 (특수상해) — \'유리병 + 만취 + 특수상해 가중처벌\' 트랙
// 3. 공항·항공기 내 시비 폭행 — \'항공보안법 + 형법 + 항공 운항 방해\' 트랙
//
// dui 1:
// 4. 15년 전 음주 전과 가중 처벌 대응 — \'10년 이상 과거 전과 + 가중 평가 + 변호 전략\' 트랙

export const spokesBatch74AssaultDui: SpokePage[] = [
  // ─── 1. assault-fitness-gym-personal-trainer-injury-track ───
  {
    domain: 'assault',
    slug: 'assault-fitness-gym-personal-trainer-injury-track',
    keyword: '헬스장 PT 트레이너 부상',
    questionKeyword: '헬스장 PT 트레이너가 무리한 자세를 강요해서 본인이 디스크·인대 부상을 입었어요. 형사·민사 대응 가능한가요?',
    ctaKeyword: 'PT 트레이너 부상 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '헬스장 PT 트레이너 부상 — 5단계 업무상 과실 다툼 | 로앤가이드',
      description:
        'PT 트레이너 무리한 강요로 부상 시 업무상 과실치상·헬스장 책임·민사 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"강남 헬스장 PT 12회 계약을 맺고 트레이너에게 운동 지도를 받던 중 본인의 \'허리 아픔·중단 요청\'에도 트레이너가 \'더 무거운 무게로 한 번만 더\'를 강요했습니다. 결국 본인은 디스크 파열 + 인대 손상으로 병원 진료를 받았고 약 2개월 치료 + 회복 중이에요. 트레이너는 자격증 부재 + 본인 신체 상태(과거 디스크 이력)에 대한 사전 확인 없이 지도를 시작한 정황이 있었고, 헬스장 사장은 \'개별 트레이너 책임\'을 주장하며 책임 회피 중입니다." 형법 제266조는 \'업무상 과실치상\'을 처벌하고 민법은 매도인·서비스 제공자의 안전 배려 의무를 규정하는 영역입니다. 트레이너의 자격 부재 + 본인 신체 상태 무시 + 무리한 강요는 업무상 과실 + 안전 배려 의무 위반 평가 강한 트랙. 피해자라면 ① 업무상 과실 ② 트레이너 책임 ③ 헬스장 책임 ④ 형사 고소 ⑤ 민사 배상 5중 트랙이 가능한 영역. 대응은 ① 과실 ② 트레이너 ③ 헬스장 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. PT 트레이너 부상 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 과실·트레이너·헬스장·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 업무상 과실</strong> — 자격 부재·신체 상태 무시·무리 강요.</li>\n<li><strong>② 트레이너 책임</strong> — 직접 가해자 + 형사·민사 책임.</li>\n<li><strong>③ 헬스장 책임</strong> — 사용자 책임 + 안전 배려.</li>\n<li><strong>④ 형사 고소</strong> — 형법 제266조 업무상 과실치상.</li>\n<li><strong>⑤ 민사 배상</strong> — 치료비·위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: PT는 \'서비스 + 안전 배려 의무\' 영역. 자격 부재 + 신체 상태 무시 + 강요 결합 시 업무상 과실 평가 강한 트랙. 트레이너 + 헬스장 다중 책임.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·고소·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·계약 자료 보존 (즉시)</strong> — 진단서·치료 영수증·PT 계약서.</li>\n<li><strong>2단계 — 트레이너 자격·과거 신체 자료 (1주)</strong> — 자격증·본인 디스크 이력.</li>\n<li><strong>3단계 — 헬스장·트레이너 통지 (1~2주)</strong> — 내용증명 + 보상 요구.</li>\n<li><strong>4단계 — 형사 고소 (1개월 내)</strong> — 업무상 과실치상 고소.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 치료비·위자료·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">PT 트레이너 부상 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 과실·트레이너·헬스장 갈래입니다.</strong></p>\n<ul>\n<li><strong>의사 진단서·MRI·치료 기록</strong></li>\n<li><strong>치료비·재활 영수증</strong></li>\n<li><strong>PT 계약서·결제 영수증</strong></li>\n<li><strong>트레이너 자격증 부재 자료</strong></li>\n<li><strong>본인 과거 신체 상태 자료 (디스크 이력)</strong></li>\n<li><strong>PT 영상·CCTV·증인 진술</strong></li>\n<li><strong>중단 요청 정황 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인의 \'중단 요청\'에도 강요했다는 사정은 과실의 결정 입증. 헬스장 CCTV·동료 PT 회원 진술 보강.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>업무상 과실</strong> — 자격·신체·강요.</li>\n<li><strong>트레이너 책임</strong> — 직접 가해.</li>\n<li><strong>헬스장 책임</strong> — 사용자 + 안전 배려.</li>\n<li><strong>형사 고소</strong> — 업무상 과실치상.</li>\n<li><strong>민사 배상</strong> — 치료·위자료.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰 112</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 학교폭력 관련 처분 집행정지 평가 영역',
        summary:
          '대법원 2025무565(대법원, 2025.09.09 선고) 영역에서 법원은 집행정지 사건에서 학교폭력 관련 처분에 대한 집행정지결정이 있는 경우 평가 영역을 다루면서, 행정상 처분·구제 절차에서 피해자 보호와 가해자 권리 평가가 결정 사정이라고 본 사례 흐름이 있고, PT 트레이너 부상에서도 업무상 과실 + 다중 책임 + 피해자 회복 평가가 핵심 트랙입니다.',
        takeaway: 'PT 트레이너 + 헬스장 다중 책임 + 업무상 과실 평가 영역 — 변호인 상담·고소 권장.',
      },
    ],
    faq: [
      {
        question: '트레이너만 책임지면 헬스장은 면제되나요?',
        answer:
          '<strong>헬스장 사용자 책임 + 안전 배려 의무 별도 영역입니다.</strong> 다중 책임 청구.',
      },
      {
        question: '본인 신체 상태를 미리 말 안 한 게 책임 사정인가요?',
        answer:
          '<strong>트레이너의 사전 확인 의무가 우선 영역입니다.</strong> 자격증·확인 자료 결정.',
      },
      {
        question: '치료비·재활비를 다 받을 수 있나요?',
        answer:
          '<strong>치료비 + 위자료 + 일실수입 청구 영역입니다.</strong> 진단서·영수증 보존.',
      },
      {
        question: '\'본인 동의 후 무게 올렸다\'는 트레이너 주장은 어떻게 하나요?',
        answer:
          '<strong>중단 요청 정황 자료가 결정 입증 영역입니다.</strong> CCTV·증인 보강.',
      },
      {
        question: '형사 처벌은 얼마나 무거운가요?',
        answer:
          '<strong>업무상 과실치상은 5년/2천만 원 이하 영역입니다.</strong> 합의 시 감경.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 고소 절차', href: '/guide/assault/assault-victim-where-to-start' },
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection-procedure' },
      { label: '업무상 과실치상', href: '/guide/assault/assault-business-negligence' },
      { label: '폭행 합의금', href: '/guide/assault/assault-settlement-amount' },
      { label: '폭행 민사 배상', href: '/guide/assault/assault-civil-damages' },
    ],
  },

  // ─── 2. assault-noraebang-karaoke-drunk-fight-broken-bottle-track ───
  {
    domain: 'assault',
    slug: 'assault-noraebang-karaoke-drunk-fight-broken-bottle-track',
    keyword: '노래방 만취 폭행 유리병 특수상해',
    questionKeyword: '노래방·술집에서 만취 상태로 시비가 붙어 유리병으로 상대를 때렸어요. 특수상해 가중 처벌되나요?',
    ctaKeyword: '유리병 특수상해 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '노래방 유리병 특수상해 — 5단계 가중처벌·합의 다툼 | 로앤가이드',
      description:
        '유리병·흉기 폭행 시 특수상해 가중처벌·심신미약·합의 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"30대 직장인 본인은 노래방에서 회사 회식 후 만취 상태로 옆 일행과 시비가 붙었고, 우발적으로 옆에 놓인 맥주병을 휘둘러 상대가 머리·얼굴 부상을 입었습니다. 상대는 12바늘 이상 봉합 + 후속 치료 필요한 상태이고, 경찰 신고로 본인은 \'특수상해 + 폭력행위처벌법\' 혐의로 입건됐어요. 본인은 평소 폭력 전과 없고 우발 + 만취 상태였으며 즉시 사과·합의 의사 표현했지만 상대는 합의 거부 + 강경 대응 중입니다." 형법 제258조의2는 \'위험한 물건 휴대 상해\'를 \'특수상해\'로 가중 처벌하고, 폭력행위처벌법 + 형법 결합 평가 영역입니다. 만취·심신미약은 감경 사정이지만 \'위험한 물건\' 사용 시 가중 평가가 우선되는 트랙. 가해자라면 ① 특수상해 평가 ② 심신미약 ③ 합의 ④ 형사 절차 ⑤ 양형 5중 트랙이 가능한 영역. 대응은 ① 평가 ② 심신 ③ 합의 ④ 절차 ⑤ 양형 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 유리병 특수상해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 평가·심신·합의·절차·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 특수상해 평가</strong> — 위험한 물건 + 상해 + 가중처벌.</li>\n<li><strong>② 심신미약</strong> — 만취·우발 평가 (감경 사정).</li>\n<li><strong>③ 합의</strong> — 피해자 합의 = 양형 핵심.</li>\n<li><strong>④ 형사 절차</strong> — 입건·기소·재판.</li>\n<li><strong>⑤ 양형</strong> — 합의·심신·반성 종합 평가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 특수상해는 \'1년 이상 10년 이하\' 가중. 만취 심신미약은 감경 사정이지만 \'위험한 물건\' 사용 시 양형에서 우선 평가. 합의 + 반성 + 초범이 양형 결정 사정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·합의·절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 입건 직후 자문 + 진술 전략.</li>\n<li><strong>2단계 — 피해자 합의 협의 (1주)</strong> — 즉시 사과·합의금 협의.</li>\n<li><strong>3단계 — 심신미약 자료 (1~2주)</strong> — 만취·정신 상태 자료.</li>\n<li><strong>4단계 — 검찰·재판 단계 (1~3개월)</strong> — 진술 + 합의서 제출.</li>\n<li><strong>5단계 — 양형 자료 + 선고</strong> — 반성문·기부·자원봉사.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의금과 대응 전략, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">유리병 특수상해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 평가·합의·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 입건 자료·진술 조서</strong></li>\n<li><strong>피해자 진단서·치료비 자료</strong></li>\n<li><strong>당시 CCTV·증인 진술</strong></li>\n<li><strong>만취·정신 상태 자료 (음주측정·진단)</strong></li>\n<li><strong>합의 협의·합의서 자료</strong></li>\n<li><strong>본인 반성문·자원봉사·기부 자료</strong></li>\n<li><strong>본인 신원·직장·가족 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 입건 직후 즉시 변호인 자문 + 피해자 합의가 양형 결정. 합의 시 \'처벌불원\' 의사 명시가 가장 강한 감경 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>특수상해 평가</strong> — 위험한 물건 + 상해.</li>\n<li><strong>심신미약</strong> — 만취·우발 감경.</li>\n<li><strong>합의</strong> — 양형 결정 사정.</li>\n<li><strong>초범 평가</strong> — 전과 부재.</li>\n<li><strong>양형</strong> — 합의·반성·심신 종합.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 폭행·상해 결합 평가 영역',
        summary:
          '서울북부지법 2025고단1523(서울북부지법, 2025.10.29 선고) 영역에서 법원은 상해·특수상해 사건에서 노상방뇨 시비가 폭행으로 이어진 사건의 평가 영역을 다루면서, 발생 정황·상호 시비·위험한 물건 사용 평가가 결정 사정이라고 본 사례 흐름이 있고, 노래방 만취 시비에서도 동일하게 위험한 물건 + 상해 + 양형 평가가 결합되는 트랙입니다.',
        takeaway: '특수상해는 합의 + 심신 + 반성 종합 평가 영역 — 변호인 상담·즉시 합의 권장.',
      },
    ],
    faq: [
      {
        question: '특수상해는 어떻게 처벌되나요?',
        answer:
          '<strong>1년 이상 10년 이하 영역입니다.</strong> 합의·반성으로 감경 가능.',
      },
      {
        question: '만취 상태였는데 감경되나요?',
        answer:
          '<strong>심신미약은 감경 사정 영역입니다.</strong> 다만 위험한 물건 사용 시 가중 우선.',
      },
      {
        question: '합의금은 얼마 정도 필요한가요?',
        answer:
          '<strong>부상 정도·후유증·전과에 따라 다른 영역입니다.</strong> 변호인 자문 권장.',
      },
      {
        question: '초범인데 실형 받나요?',
        answer:
          '<strong>합의 + 반성 시 집행유예 가능 영역입니다.</strong> 양형 자료 결정.',
      },
      {
        question: '피해자가 합의 거부하면 어떻게 하나요?',
        answer:
          '<strong>법원 공탁·반성·양형 자료 강화 영역입니다.</strong> 변호인 자문 권장.',
      },
    ],
    cta: { text: '합의금과 대응 전략, AI로 확인하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 고소 절차', href: '/guide/assault/assault-victim-where-to-start' },
      { label: '특수상해 가중처벌', href: '/guide/assault/assault-special-injury-aggravation' },
      { label: '폭행 합의금', href: '/guide/assault/assault-settlement-amount' },
      { label: '폭행 양형 기준', href: '/guide/assault/assault-sentencing-guidelines' },
      { label: '심신미약 평가', href: '/guide/assault/assault-diminished-capacity' },
    ],
  },

  // ─── 3. assault-airport-airline-gate-quarrel-injury-track ───
  {
    domain: 'assault',
    slug: 'assault-airport-airline-gate-quarrel-injury-track',
    keyword: '공항·항공기 내 시비 폭행',
    questionKeyword: '공항 게이트·항공기 내에서 승객·승무원과 시비가 붙어 폭행 사건이 발생했어요. 항공보안법이 적용되나요?',
    ctaKeyword: '항공기 내 폭행 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '공항·항공기 내 시비 폭행 — 5단계 항공보안법 가중 | 로앤가이드',
      description:
        '공항·항공기 내 폭행 시 항공보안법·형법·운항 방해 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"인천공항 출국 게이트에서 옆 승객과 줄서기 문제로 시비가 시작됐고, 본인이 상대 어깨를 밀친 정도였는데 상대가 \'폭행·전치 2주\' 신고했습니다. 항공사 게이트 직원·공항 보안에 의해 즉시 제지됐고, 출국 취소 + 경찰 인계가 진행됐어요. 본인은 \'우발 + 가벼운 접촉\' 주장하지만 공항·항공기 내 폭행은 \'항공보안법 + 형법 + 운항 방해\' 결합 평가 영역이라 들었습니다." 항공보안법은 \'항공기·공항 내 폭행·소란·승무원 업무 방해\'를 가중 처벌하고, 형법 폭행·상해와 결합 평가됩니다. 출국 게이트는 \'보호구역\'으로 별도 가중 사정이 적용되는 트랙. 본인이라면 ① 항공보안법 평가 ② 형법 폭행 ③ 운항 방해 ④ 합의 ⑤ 양형 5중 트랙이 가능한 영역. 대응은 ① 보안법 ② 폭행 ③ 운항 ④ 합의 ⑤ 양형 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 항공기 내 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 보안법·폭행·운항·합의·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 항공보안법 평가</strong> — 공항·항공기 내 가중 평가.</li>\n<li><strong>② 형법 폭행</strong> — 폭행·상해 종합 평가.</li>\n<li><strong>③ 운항 방해</strong> — 출국 취소 + 운항 지장.</li>\n<li><strong>④ 합의</strong> — 피해자 합의 + 양형.</li>\n<li><strong>⑤ 양형</strong> — 보안법·합의·반성 종합.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 항공보안법은 공항·항공기 내 폭행을 \'5년 이하 징역 또는 5천만 원 이하 벌금\'으로 가중. 형법 폭행과 결합 평가. 운항 방해 시 추가 책임. 합의 + 반성이 양형 결정 사정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·합의·절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 입건 직후.</li>\n<li><strong>2단계 — 피해자 합의 협의 (1주)</strong> — 즉시 사과·합의금.</li>\n<li><strong>3단계 — 정황 자료 (1~2주)</strong> — CCTV·증인·승무원 진술.</li>\n<li><strong>4단계 — 검찰·재판 (1~3개월)</strong> — 진술 + 합의서.</li>\n<li><strong>5단계 — 양형 자료 + 선고</strong> — 반성문·자원봉사.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의금과 대응 전략, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">항공기 내 폭행 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 보안법·폭행·합의 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 입건 자료·진술 조서</strong></li>\n<li><strong>피해자 진단서·치료비 자료</strong></li>\n<li><strong>공항·게이트 CCTV·증인 진술</strong></li>\n<li><strong>승무원·항공사 직원 진술</strong></li>\n<li><strong>합의 협의·합의서 자료</strong></li>\n<li><strong>본인 반성문·자원봉사·기부 자료</strong></li>\n<li><strong>본인 신원·직장·가족 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공항·항공기 내 폭행은 항공보안법 + 형법 결합 평가로 일반 폭행보다 가중. 합의가 양형 결정. 항공사 블랙리스트 등재도 별도 영향.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>항공보안법</strong> — 공항·항공기 내 가중.</li>\n<li><strong>폭행 평가</strong> — 가벼운 접촉도 폭행 성립.</li>\n<li><strong>운항 방해</strong> — 출국 취소·지장.</li>\n<li><strong>합의</strong> — 양형 결정.</li>\n<li><strong>항공사 블랙리스트</strong> — 별도 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 비약적 상고 효력 평가 영역',
        summary:
          '대법원 2025도11655(대법원, 2025.10.16 선고) 영역에서 법원은 절도·특수재물손괴·재물손괴·특수존속협박·사기·컴퓨터등사용사기 사건에서 적법하게 제기된 항소에 의해 항소의 효력이 유지되는 중에 피고인이 비약적 상고를 제기한 경우 평가 영역을 다루면서, 형사 절차상 상소 효력·재판 진행 평가가 결정 사정이라고 본 사례 흐름이 있고, 항공보안법 + 형법 결합 폭행 사건에서도 동일하게 절차·합의·양형 평가가 핵심 트랙입니다.',
        takeaway: '공항·항공기 내 폭행은 항공보안법 + 형법 결합 가중처벌 영역 — 변호인 상담·즉시 합의 권장.',
      },
    ],
    faq: [
      {
        question: '공항 폭행은 일반 폭행보다 가중되나요?',
        answer:
          '<strong>항공보안법 + 형법 결합 평가 영역입니다.</strong> 5년 이하·5천만 원 이하 가중.',
      },
      {
        question: '가벼운 접촉도 폭행인가요?',
        answer:
          '<strong>의도적 신체 접촉은 폭행 성립 영역입니다.</strong> 정황·증인 결정.',
      },
      {
        question: '항공사 블랙리스트에 올라가나요?',
        answer:
          '<strong>별도 항공사 정책 영역입니다.</strong> 처벌·합의와 별개 영향.',
      },
      {
        question: '합의금은 얼마인가요?',
        answer:
          '<strong>부상 정도·치료비에 따라 다른 영역입니다.</strong> 변호인 자문 권장.',
      },
      {
        question: '집행유예 받을 수 있나요?',
        answer:
          '<strong>합의 + 반성 + 초범 시 가능한 영역입니다.</strong> 양형 자료 결정.',
      },
    ],
    cta: { text: '합의금과 대응 전략, AI로 확인하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 고소 절차', href: '/guide/assault/assault-victim-where-to-start' },
      { label: '폭행 합의금', href: '/guide/assault/assault-settlement-amount' },
      { label: '항공보안법 폭행', href: '/guide/assault/assault-aviation-security-law' },
      { label: '폭행 양형 기준', href: '/guide/assault/assault-sentencing-guidelines' },
      { label: '폭행 민사 배상', href: '/guide/assault/assault-civil-damages' },
    ],
  },

  // ─── 4. dui-pre-historical-conviction-15years-aggravation-track ───
  {
    domain: 'dui',
    slug: 'dui-pre-historical-conviction-15years-aggravation-track',
    keyword: '15년 전 음주 전과 가중 처벌',
    questionKeyword: '15년 전 음주운전 전과가 있는데 최근 다시 음주 적발됐어요. 과거 전과가 가중 사정으로 평가되나요?',
    ctaKeyword: '과거 음주 전과 가중 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '15년 전 음주 전과 가중 — 5단계 윤창호법·양형 다툼 | 로앤가이드',
      description:
        '15년 전 음주 전과 + 재범 시 윤창호법·가중처벌·심판 양형 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 15년 전(2011년경) 음주운전으로 벌금 200만 원 + 면허정지 처분을 받은 적이 있고, 그 이후 14~15년간 음주운전 적발 이력 없이 운전해 왔습니다. 그런데 최근 회식 후 \'대리 부르려다 잠깐 차 빼는\' 정도로 약 30m를 운전했는데 경찰 단속에 적발됐고 혈중알코올농도 0.05% 측정됐어요. 경찰은 \'전과 + 재범\' 사정으로 \'윤창호법 가중처벌(2회 이상)\' 적용 가능성을 언급했습니다. 본인은 \'10년 이상 경과한 전과는 평가에서 빠진다\'고 알고 있었는데 혼란스러운 상황이에요." 도로교통법은 \'10년 이내\' 음주 전과를 가중 사정으로 평가하지만 헌법재판소 결정으로 \'무기한 가중\' 조항은 위헌 평가되어 일부 완화된 영역입니다. 다만 양형에서 과거 전과는 일반 사정으로 평가되어 양형에 영향을 미치는 트랙. 본인이라면 ① 윤창호법 적용 평가 ② 양형 사정 ③ 면허 ④ 형사 절차 ⑤ 행정심판 5중 트랙이 가능한 영역. 대응은 ① 윤창호 ② 양형 ③ 면허 ④ 형사 ⑤ 심판 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 15년 전 음주 전과 가중 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 윤창호·양형·면허·형사·심판 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 윤창호법 적용 평가</strong> — 헌재 위헌 결정 후 적용 범위 좁아짐.</li>\n<li><strong>② 양형 사정</strong> — 과거 전과는 양형에 영향.</li>\n<li><strong>③ 면허 처분</strong> — 정지/취소 + 행정심판.</li>\n<li><strong>④ 형사 절차</strong> — 입건·기소·재판.</li>\n<li><strong>⑤ 행정심판 (90일)</strong> — 면허 처분 다툼.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 헌재 위헌 결정(2021년)으로 \'2회 이상 음주\' 가중처벌 조항이 일부 위헌. 다만 양형에서 과거 전과는 일반 사정으로 평가되어 양형에 영향. 변호인 자문이 양형 결정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자문·양형·심판 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 입건 직후.</li>\n<li><strong>2단계 — 과거 전과·생활 자료 (1주)</strong> — 14~15년 음주운전 부재 입증.</li>\n<li><strong>3단계 — 양형 자료 (1~2주)</strong> — 반성문·자원봉사·기부·가족 자료.</li>\n<li><strong>4단계 — 형사 절차 (1~3개월)</strong> — 진술 + 양형 자료 제출.</li>\n<li><strong>5단계 — 행정심판 (90일 내)</strong> — 면허 처분 다툼.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">15년 전 음주 전과 가중 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 윤창호·양형·면허 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 입건 자료·음주측정 결과</strong></li>\n<li><strong>15년 전 전과 자료 (벌금·면허정지 기록)</strong></li>\n<li><strong>14~15년 음주운전 부재 입증 자료</strong></li>\n<li><strong>운전 정황 자료 (약 30m·대리 부르려는 정황)</strong></li>\n<li><strong>본인 반성문·자원봉사·기부 자료</strong></li>\n<li><strong>가족·직장 탄원서</strong></li>\n<li><strong>면허 처분 통지서·행정심판 청구서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 헌재 위헌 결정 후 윤창호법 적용은 일부 좁아짐. 다만 양형에서 과거 전과는 평가되므로 변호인 자문 + 양형 자료가 결정. 행정심판은 형사와 별도 트랙.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>윤창호법 적용</strong> — 헌재 위헌 후 좁아진 영역.</li>\n<li><strong>양형 사정</strong> — 과거 전과 + 재범.</li>\n<li><strong>면허 처분</strong> — 정지/취소.</li>\n<li><strong>행정심판</strong> — 90일 내 별도 트랙.</li>\n<li><strong>양형 자료</strong> — 반성·자원봉사·탄원.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 (구속 시 자동)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 도로교통법 음주운전 + 전자장치부착법 평가 영역',
        summary:
          '대법원 2025도7665(대법원, 2025.08.14 선고) 영역에서 법원은 도로교통법위반(음주운전)·전자장치부착등에관한법률위반 사건에서 전자장치 부착 등에 관한 법률에서 정한 부착명령·준수기간 평가 영역을 다루면서, 음주운전 재범·중대범죄 결합 평가가 결정 사정이라고 본 사례 흐름이 있고, 15년 전 전과 + 재범 평가에도 양형·재범·기간 평가가 핵심 트랙입니다.',
        takeaway: '15년 전 전과 + 재범은 윤창호법 위헌 결정 후 좁아진 적용 영역 — 변호인 상담·양형 자료 권장.',
      },
    ],
    faq: [
      {
        question: '10년 이상 지난 전과도 가중되나요?',
        answer:
          '<strong>헌재 위헌 결정으로 좁아진 영역입니다.</strong> 다만 양형 사정으로 평가.',
      },
      {
        question: '\'잠깐 차 빼는\' 정도도 음주운전인가요?',
        answer:
          '<strong>1m라도 운전 성립 영역입니다.</strong> 약 30m는 명백한 운전.',
      },
      {
        question: '0.05%는 면허 정지인가요 취소인가요?',
        answer:
          '<strong>0.03~0.08%는 정지 구간 영역입니다.</strong> 다만 재범 시 취소 평가.',
      },
      {
        question: '행정심판은 어떻게 진행하나요?',
        answer:
          '<strong>면허 처분 90일 내 행정심판 청구 영역입니다.</strong> 형사와 별도 트랙.',
      },
      {
        question: '집행유예 받을 수 있나요?',
        answer:
          '<strong>합의·반성·양형 자료에 따라 가능한 영역입니다.</strong> 변호인 자문 결정.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 형사 절차', href: '/guide/dui/dui-criminal-procedure' },
      { label: '음주운전 행정심판', href: '/guide/dui/dui-administrative-appeal' },
      { label: '음주운전 양형 기준', href: '/guide/dui/dui-sentencing-guidelines' },
      { label: '윤창호법 가중처벌', href: '/guide/dui/dui-yoonchangho-aggravation' },
      { label: '음주운전 면허 처분', href: '/guide/dui/dui-license-suspension' },
    ],
  },
];
