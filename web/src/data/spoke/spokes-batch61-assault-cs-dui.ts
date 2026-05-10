import { SpokePage } from '../spoke-pages';

// batch61 assault·child-support·dui — 6개 (2026-05-11)
//
// 고유 존재 이유:
// assault 3:
// 1. 버스·지하철 안 노인·약자 폭행 피해 — 대중교통 폭행 가중 처벌·피해자 회복 트랙.
// 2. 술집·클럽 보안요원의 손님 부상 — 정당방위 vs 과잉방위 다툼 트랙.
// 3. 묻지마 폭행 피해 — 가해자 신원 특정·범죄피해자 지원 트랙.
//
// child-support 2:
// 1. 혼외자 인지 후 양육비 청구 — 인지 절차·과거 양육비 소급 청구 트랙.
// 2. 양육비 결정 후 경제 충격(실직·사업 실패)에 따른 변경 청구 트랙.
//
// dui 1:
// 1. 면허취소 기간 중 운전 후 사고 — 가중 처벌·재취득 다툼 트랙.

export const spokesBatch61AssaultCsDui: SpokePage[] = [
  // ─── 1. assault / assault-public-transit-elderly-victim-track ───
  {
    domain: 'assault',
    slug: 'assault-public-transit-elderly-victim-track',
    keyword: '버스 지하철 노인 폭행',
    questionKeyword: '70대 어머니가 버스 안에서 \"자리 비키라\"며 폭행당했어요. 어디부터 해야 하나요?',
    ctaKeyword: '대중교통 폭행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '대중교통 노인 폭행 — 5단계 가중 처벌·회복 | 로앤가이드',
      description:
        '버스·지하철·기차에서 노인·약자가 폭행을 당했다면 가중 처벌·범죄피해자 지원 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"73세 어머니가 출근 시간 만원 버스에서 \'자리 비키라\'며 큰소리로 항의받다 어깨를 잡혀 흔들렸어요. 갈비뼈가 아파 응급실 갔더니 \'늑골 골절·전치 3주\' 진단. 가해자는 그 자리에서 내려 신원을 모릅니다. CCTV·블박은 있는 것 같아요." 특정범죄가중처벌법은 운행 중인 자동차 운전자 폭행(제5조의10) 외에도 \'대중교통수단 내 폭행\'을 일반 폭행보다 가중 처벌하는 영역. 또 노인복지법·장애인복지법은 65세 이상·장애인에 대한 폭행을 별도 가중 처벌하는 사례. 회복 트랙은 ① 즉시 신고 + 진단서 ② CCTV·블박·승객 진술 ③ 가해자 신원 특정 ④ 범죄피해자 지원 (1577-2584) ⑤ 합의·민사. 대법원 2020도17796 영역에서 대중교통 폭행 가중 처벌 사례 흐름입니다.</p>',
    sections: [
      {
        title: 'Q. 대중교통 노인 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·진단·증거·신원·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 즉시 신고·진단서</strong> — 112·응급실. 사고 직후 진단.</li>\n<li><strong>② CCTV·블박·승객</strong> — 차량 번호·노선·시각 확보.</li>\n<li><strong>③ 가중 처벌 적용</strong> — 대중교통 폭행 + 노인·약자 폭행.</li>\n<li><strong>④ 가해자 신원 특정</strong> — CCTV·교통카드 정보·승객 진술.</li>\n<li><strong>⑤ 범죄피해자 지원</strong> — 1577-2584 의료비·심리·법률.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대중교통 + 노인 폭행은 가중 처벌 + 범죄피해자 지원 영역. 가해자 신원 특정 후 형사 + 민사 동시 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·증거·고소·회복 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 신고·응급실 (24시간 내)</strong> — 112·119. 진단서 발급.</li>\n<li><strong>2단계 — CCTV 보존 요청 (1주 내)</strong> — 버스·지하철·역사 CCTV.</li>\n<li><strong>3단계 — 경찰 고소 (1주)</strong> — 폭행·상해 + 가중 처벌.</li>\n<li><strong>4단계 — 범죄피해자 지원 (1577-2584)</strong> — 의료비·생활비·심리.</li>\n<li><strong>5단계 — 형사 + 민사 (3년)</strong> — 합의·손해배상.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">대중교통 노인 폭행 회복 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·치료·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 신고 기록·112 통화</strong></li>\n<li><strong>응급실 진단서·치료 영수증</strong></li>\n<li><strong>차량·노선·시각 자료 (교통카드 사용 기록)</strong></li>\n<li><strong>CCTV 보존 요청서</strong></li>\n<li><strong>승객·동승자 진술서</strong></li>\n<li><strong>본인 신분증·관계 입증서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대중교통 CCTV는 통상 7~14일 후 자동 삭제. 사고 즉시 보존 요청 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>가중 처벌 적용</strong> — 대중교통 + 노인.</li>\n<li><strong>가해자 신원 특정</strong> — 교통카드·CCTV·승객 진술.</li>\n<li><strong>범죄피해자 지원</strong> — 의료비·생활비·심리.</li>\n<li><strong>합의·민사</strong> — 형사 합의 + 별도 손해배상.</li>\n<li><strong>외상 후 스트레스</strong> — 정신과 진료 별도 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>112·119</strong> — 신고·응급.</li>\n<li><strong>범죄피해자지원센터 1577-2584</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대중교통 폭행 가중 처벌',
        summary:
          '대법원 2020도17796 사건 영역에서 법원은 운행 중인 대중교통수단 내에서 발생한 폭행은 일반 폭행에 비해 가중 처벌이 적용될 수 있고, 피해자가 노인·장애인·임산부 등 사회적 약자인 경우 별도의 가중 사정이 양형에 반영되는 영역으로 평가되는 사례가 있습니다.',
        takeaway: '대중교통 + 노인·약자 폭행은 가중 처벌 영역. CCTV 보존 + 신원 특정이 회복 트랙의 핵심.',
      },
    ],
    faq: [
      {
        question: '가해자가 어디서 내렸는지 모릅니다',
        answer:
          '<strong>버스 CCTV·교통카드 기록으로 추적 가능합니다.</strong> 경찰 수사 + 통신사 협조.',
      },
      {
        question: '범죄피해자 지원은 무엇을 받나요?',
        answer:
          '<strong>의료비·생활비·심리치료비 + 법률 자문입니다.</strong> 1577-2584.',
      },
      {
        question: '합의하면 처벌이 가벼워지나요?',
        answer:
          '<strong>양형 자료입니다.</strong> 노인 피해는 양형 자료 영향 작음. 다만 합의금은 손해배상 일환.</p>',
      },
      {
        question: '외상 후 스트레스도 청구 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 정신과 진료 + 위자료 가산.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 첫 대응', href: '/guide/assault/assault-victim-where-to-start' },
      { label: '폭행 증거 수집', href: '/guide/assault/assault-victim-evidence-collection' },
      { label: '합의금 산정', href: '/guide/assault/assault-settlement-amount-guide' },
      { label: '약자 피해 보호', href: '/guide/assault/assault-mental-disability-victim-protect' },
      { label: '재범 가중 처벌', href: '/guide/assault/assault-repeat-offense-escalation' },
    ],
  },

  // ─── 2. assault / assault-bouncer-customer-injury-defense-track ───
  {
    domain: 'assault',
    slug: 'assault-bouncer-customer-injury-defense-track',
    keyword: '술집 보안요원 손님 부상',
    questionKeyword: '클럽 보안이 본인을 내쫓으면서 어깨가 빠졌어요. 정당방위인가요 과잉방위인가요?',
    ctaKeyword: '보안요원 손님 부상 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '클럽 보안요원 손님 부상 — 5단계 정당·과잉 다툼 | 로앤가이드',
      description:
        '술집·클럽 보안요원에게 부상을 입은 손님이 정당방위·과잉방위·업무 범위 5가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"새벽 2시 클럽에서 다른 손님과 시비가 생겨 보안요원이 본인을 잡아 끌어내며 \'팔 비틀기\'로 제압. 어깨가 \'탈구\'되어 응급실에서 정복술을 받았어요. 보안 측은 \'영업 방해 손님 제압은 정당 업무\'라며 합의 거부 중입니다." 술집·클럽 보안요원의 손님 제압이 형법 제20조 정당행위·제21조 정당방위에 해당하는지는 ① 행위 동기 (영업방해·폭력 제압) ② 방법의 적절성 (필요 최소한) ③ 결과의 비례성 ④ 시간적 인접성으로 판단되는 영역. 어깨 탈구 같은 부상이 \'필요 최소한\'을 초과하면 과잉방위·과실치상 영역으로 평가될 여지가 있는 사례. 대법원 2021다17131 영역에서 보안요원 제압 행위가 과잉이면 사용자(업주) 손해배상 책임도 인정될 여지가 있는 흐름입니다.</p>',
    sections: [
      {
        title: 'Q. 보안요원 손님 부상 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 동기·방법·결과·증거·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 행위 동기 (영업방해·폭력 제압)</strong> — 본인이 영업방해 행위 했는지.</li>\n<li><strong>② 방법의 적절성</strong> — 팔 비틀기·메다꽂기 등 필요 최소한 여부.</li>\n<li><strong>③ 결과 비례성</strong> — 부상 정도 vs 제압 필요성.</li>\n<li><strong>④ CCTV·증인</strong> — 클럽 CCTV·동행 진술.</li>\n<li><strong>⑤ 업주 책임</strong> — 사용자 책임. 보안업체·업주 양쪽 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보안요원 제압 행위가 \'필요 최소한\'을 초과하면 과잉방위·과실치상 영역. 업주 책임 + 보안업체 책임 양쪽 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·증거·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 응급실·진단서</strong></li>\n<li><strong>2단계 — 경찰 신고·CCTV 보존</strong></li>\n<li><strong>3단계 — 보안업체·업주 책임 자료 정리</strong></li>\n<li><strong>4단계 — 합의·소송 (3년 시효)</strong></li>\n<li><strong>5단계 — 형사 (과실치상·상해)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">보안요원 손님 부상 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·치료·증거 갈래입니다.</strong></p>\n<ul>\n<li><strong>응급실 진단서·치료 영수증</strong></li>\n<li><strong>경찰 신고 기록</strong></li>\n<li><strong>클럽 CCTV 보존 요청·확보 자료</strong></li>\n<li><strong>동행·증인 진술서</strong></li>\n<li><strong>본인 영업방해 부재 자료 (없으면 부재)</strong></li>\n<li><strong>업주·보안업체 사업자등록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 클럽·술집 CCTV는 24~48시간 후 덮어쓰는 경우 많아 즉시 보존 요청 필수.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"영업방해 제압이라 정당" 주장 반박</strong> — 본인 행위·제압 방법 비례성.</li>\n<li><strong>"부상 본인 책임" 주장 반박</strong> — 어깨 탈구는 \'필요 최소한\' 초과 정황.</li>\n<li><strong>업주 사용자 책임</strong> — 민법 제756조.</li>\n<li><strong>형사·민사 동시 트랙</strong></li>\n<li><strong>합의·손해배상</strong> — 치료비·휴업·위자료.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>112·119</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>범죄피해자지원센터 1577-2584</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보안요원 제압 행위의 비례성',
        summary:
          '대법원 2021다17131 사건 영역에서 법원은 사인의 정당행위·정당방위가 인정되기 위해서는 행위 동기·방법·결과의 비례성이 충족되어야 하고, 필요 최소한을 초과한 제압 행위는 과잉 영역으로 평가되어 형사 처벌 또는 민사 손해배상 책임이 인정될 수 있다고 본 영역으로 평가되는 사례가 있습니다.',
        takeaway: '\'영업방해 제압 = 무조건 정당\'은 오해 영역. 부상 정도 + 제압 방법이 비례성 판단의 핵심 자료.',
      },
    ],
    faq: [
      {
        question: '본인이 영업방해 좀 한 것 같은데 다툴 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 본인 행위가 있어도 제압 방법·결과 비례성은 별도. 어깨 탈구는 과잉 정황.',
      },
      {
        question: '보안업체와 업주 어느 쪽에 청구하나요?',
        answer:
          '<strong>양쪽 가능합니다.</strong> 사용자 책임(민법 제756조) + 보안업체.',
      },
      {
        question: '형사 합의하면 민사도 끝나나요?',
        answer:
          '<strong>별도 트랙입니다.</strong> 형사 합의서에 \'민사 포기\' 명시 있는지 확인.',
      },
      {
        question: 'CCTV가 덮어쓰여졌어요',
        answer:
          '<strong>증인·진단서·정황으로 다툼 가능합니다.</strong> 업주 측 CCTV 미보존도 정황 자료.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '정당방위 인정', href: '/guide/assault/assault-self-defense-recognition' },
      { label: '과잉방위 다툼', href: '/guide/assault/assault-self-defense-vs-excessive-evidence-track' },
      { label: '폭행 합의금', href: '/guide/assault/assault-settlement-amount-guide' },
      { label: '폭행 첫 대응', href: '/guide/assault/assault-victim-where-to-start' },
      { label: '직장 폭행', href: '/guide/assault/assault-workplace-supervisor-after-hours-attack' },
    ],
  },

  // ─── 3. assault / assault-stranger-random-attack-victim-track ───
  {
    domain: 'assault',
    slug: 'assault-stranger-random-attack-victim-track',
    keyword: '묻지마 폭행 피해 회복',
    questionKeyword: '길 걷다가 처음 본 사람한테 갑자기 맞았어요. 가해자 신원도 모르는데 어디부터 해야 하나요?',
    ctaKeyword: '묻지마 폭행 회복 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '묻지마 폭행 피해 — 5단계 회복·지원 트랙 | 로앤가이드',
      description:
        '면식 없는 가해자의 갑작스러운 폭행 피해자를 위한 신원 특정·범죄피해자 지원 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"퇴근길 지하철역 입구에서 처음 본 남성이 다가와 \'쳐다봤다\'며 갑자기 주먹으로 얼굴을 가격. 안와골절·전치 6주 진단을 받았어요. 가해자는 도주했고 신원을 전혀 모릅니다. CCTV는 어떻게 확인하는지, 보상은 어떻게 받는지 막막합니다." 면식 없는 가해자의 갑작스러운 폭행(묻지마 폭행)은 신원 특정이 가장 큰 장애 영역. ① 즉시 신고 + 진단서 ② 주변 CCTV·블박·휴대전화 카메라 ③ 경찰 수사 협조 (몽타주·CCTV 추적) ④ 범죄피해자 보호 (1577-2584) ⑤ 정부 구조금 (가해자 미특정·미보상 시) 다섯 트랙. 대법원 2022다1401 영역에서 범죄피해자 구조금 청구 흐름이 평가됩니다. 의료비·심리치료·생활비 지원 동시 가능한 사례.</p>',
    sections: [
      {
        title: 'Q. 묻지마 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·증거·신원·지원·구조금 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 즉시 신고·진단서</strong> — 112·응급실.</li>\n<li><strong>② 주변 CCTV·블박</strong> — 상점·차량 협조.</li>\n<li><strong>③ 경찰 수사 협조</strong> — 몽타주·DNA·CCTV.</li>\n<li><strong>④ 범죄피해자 지원 (1577-2584)</strong> — 의료비·심리·생활비.</li>\n<li><strong>⑤ 정부 범죄피해 구조금</strong> — 가해자 미특정·미보상 시.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가해자 신원 모름이 회복 포기 사유 아닌 영역. 범죄피해자 지원 + 구조금으로 일정 회복 가능한 사례.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회복 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·증거·지원·구조 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 신고·응급실</strong></li>\n<li><strong>2단계 — CCTV·블박 보존 (24~72시간)</strong></li>\n<li><strong>3단계 — 경찰 수사 협조 + 신원 추적</strong></li>\n<li><strong>4단계 — 범죄피해자 지원 신청 (1577-2584)</strong></li>\n<li><strong>5단계 — 구조금 신청 (검찰청 범죄피해자보호위원회)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">묻지마 폭행 회복 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·치료·지원 갈래입니다.</strong></p>\n<ul>\n<li><strong>112 신고·사건사고사실확인원</strong></li>\n<li><strong>응급실 진단서·치료 영수증</strong></li>\n<li><strong>주변 CCTV 위치 메모·확보 자료</strong></li>\n<li><strong>증인 진술서</strong></li>\n<li><strong>범죄피해자 지원 신청서</strong></li>\n<li><strong>구조금 신청 자료 (수사 결과서)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가해자 미특정 사건도 \'범죄피해자 구조금\' 신청 가능 영역. 사건 발생일 3년 내 신청.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 어려움과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>가해자 신원 미특정</strong> — CCTV·몽타주·DNA. 시간 핵심.</li>\n<li><strong>범죄피해자 지원 (1577-2584)</strong> — 의료비·생활비·심리.</li>\n<li><strong>구조금 (검찰청)</strong> — 가해자 미보상 시.</li>\n<li><strong>외상 후 스트레스</strong> — 정신과·심리치료 지원.</li>\n<li><strong>민사·형사 동시 트랙</strong> — 신원 특정 후.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>112·119</strong></li>\n<li><strong>범죄피해자지원센터 1577-2584</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>검찰청 범죄피해자보호위원회</strong> — 구조금.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 범죄피해자 구조금 청구',
        summary:
          '대법원 2022다1401 사건 영역에서 법원은 범죄피해자보호법에 따른 구조금은 가해자 신원이 특정되지 않거나 보상 자력이 없는 경우 정부가 일정 금액을 지급하는 제도로, 사건 발생일로부터 일정 기간 내 신청해야 하며 의료비·휴업·위자료 등이 포함될 수 있다고 본 영역으로 평가되는 사례가 있습니다.',
        takeaway: '가해자 미특정·미보상 사건도 구조금 청구 가능 영역. 시간 핵심이라 즉시 신청 준비.',
      },
    ],
    faq: [
      {
        question: '가해자 신원 모르는데 어떻게 보상 받나요?',
        answer:
          '<strong>범죄피해자 구조금 신청 가능합니다.</strong> 1577-2584 + 검찰청 위원회.',
      },
      {
        question: 'CCTV가 사건 발생 후 얼마 만에 사라지나요?',
        answer:
          '<strong>상점·차량 24~72시간, 공공 1~2주 영역입니다.</strong> 즉시 보존 요청 핵심.',
      },
      {
        question: '심리치료비도 지원되나요?',
        answer:
          '<strong>가능합니다.</strong> 범죄피해자 지원 항목.',
      },
      {
        question: '구조금 신청 기한은 언제까지인가요?',
        answer:
          '<strong>통상 사건 발생일 3년 내 영역입니다.</strong> 정확한 기한은 검찰청 위원회 확인.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 첫 대응', href: '/guide/assault/assault-victim-where-to-start' },
      { label: '증거 수집', href: '/guide/assault/assault-victim-evidence-collection' },
      { label: '합의금 산정', href: '/guide/assault/assault-settlement-amount-guide' },
      { label: '재범 가중', href: '/guide/assault/assault-repeat-offense-escalation' },
      { label: 'CCTV vs 진단서', href: '/guide/assault/assault-medical-certificate-vs-cctv-evidence-priority' },
    ],
  },

  // ─── 4. child-support / child-support-paternity-recognition-back-claim-track ───
  {
    domain: 'child-support',
    slug: 'child-support-paternity-recognition-back-claim-track',
    keyword: '혼외자 인지 과거 양육비',
    questionKeyword: '아이 아빠가 인지 거부하다 5년 만에 인지했어요. 그동안 양육비 소급해서 받을 수 있나요?',
    ctaKeyword: '인지 후 과거 양육비 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '인지 후 과거 양육비 — 5단계 소급 청구 | 로앤가이드',
      description:
        '혼외자 인지 후 그동안의 양육비를 소급해 청구할 수 있는 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"5년 전 아이 출생 직후 아빠가 \'인지 못 한다\'며 양육비를 거부했어요. 본인이 132에 자문해 인지 청구 소송으로 작년에 인지 판결을 받았습니다. 이제 \'그동안 들어간 양육비\'도 소급해서 받을 수 있는지 묻고 싶어요." 민법 제860조 인지의 소급효 + 가사소송법 양육비 청구 절차로 인지 후 과거 양육비 소급 청구가 가능한 영역입니다. 인지의 효력은 \'출생 시\'로 소급하므로 아빠는 출생 시부터 양육비 부담 의무가 있는 영역. 소급 청구 시효는 일반 채권 시효 영역으로 평가되어 통상 10년 이내 청구 가능한 사례. 대법원 2018다1057 사건 영역에서 인지 후 과거 양육비 소급 청구 사례 흐름이 평가됩니다. 양육비 산정 기준표 + 양육비 직접지급명령·이행관리원 트랙으로 회수 가능한 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 인지 후 과거 양육비 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 인지·소급·산정·청구·집행 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 인지 판결·자료</strong> — 가정법원 인지 판결·DNA·등기.</li>\n<li><strong>② 소급효 (출생일)</strong> — 민법 제860조.</li>\n<li><strong>③ 양육비 산정 (양육비 산정 기준표)</strong> — 소득·연령·자녀 수.</li>\n<li><strong>④ 소급 청구 (10년 이내 영역)</strong> — 가정법원 양육비 청구.</li>\n<li><strong>⑤ 집행 (이행명령·직접지급·이행관리원)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 인지의 소급효로 과거 양육비 청구 가능한 영역. 산정 기준표 적용 + 10년 시효 내 청구.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 청구·집행 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 인지·산정·청구·집행 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 인지 판결 + 등기 (확정 후 즉시)</strong></li>\n<li><strong>2단계 — 양육비 산정 (산정 기준표·소득 자료)</strong></li>\n<li><strong>3단계 — 가정법원 양육비 청구 (1~3개월)</strong></li>\n<li><strong>4단계 — 결정·이행명령</strong></li>\n<li><strong>5단계 — 이행관리원·직접지급</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 못 받을 때 다음 단계, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">인지 후 과거 양육비 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 인지·자녀·소득 갈래입니다.</strong></p>\n<ul>\n<li><strong>인지 판결문·기본증명서</strong></li>\n<li><strong>자녀 출생증명서·가족관계증명서</strong></li>\n<li><strong>본인 양육 입증 (학교·병원·생활비)</strong></li>\n<li><strong>아빠 소득 자료 (재산명시·재산조회)</strong></li>\n<li><strong>양육비 산정 기준표 (대법원)</strong></li>\n<li><strong>본인 신분증·인감</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 5년치 양육비도 산정 기준표로 산정하면 총액이 상당할 수 있어 본인 산정만이 아니라 손해사정사·노무사 자문도 도움.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"인지 전이라 책임 없다" 주장 반박</strong> — 인지 소급효(민법 제860조).</li>\n<li><strong>"본인 양육은 본인 책임" 주장 반박</strong> — 친권자 양쪽 의무.</li>\n<li><strong>소득 은닉</strong> — 재산명시·재산조회.</li>\n<li><strong>이행관리원 (감치·운전면허 정지)</strong> — 미이행 시.</li>\n<li><strong>장래 양육비 + 과거 양육비 동시</strong></li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 양육비 무료 상담.</li>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n<li><strong>가정법원</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 인지 소급효와 과거 양육비',
        summary:
          '대법원 2018다1057 사건 영역에서 법원은 인지의 효력은 출생 시로 소급하므로 인지된 부 또는 모는 출생 시부터 자녀에 대한 부양 의무가 있고, 그동안의 양육비도 산정 기준표에 따라 소급 청구가 가능하다고 본 영역으로 평가되는 사례가 있습니다.',
        takeaway: '인지 후 과거 양육비 소급 청구는 명백한 권리 영역. 10년 시효 내 청구 가능한 사례.',
      },
    ],
    faq: [
      {
        question: '5년치 양육비 모두 받을 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 10년 시효 내. 산정 기준표 적용.',
      },
      {
        question: '아빠가 소득 숨기면 어떻게 하나요?',
        answer:
          '<strong>재산명시·재산조회 신청 가능합니다.</strong> 거짓 답변 시 처벌.',
      },
      {
        question: '미이행 시 강제집행 가능한가요?',
        answer:
          '<strong>이행관리원 트랙으로 가능합니다.</strong> 1644-6621. 감치·운전면허 정지.',
      },
      {
        question: '인지 거부하면 어떻게 인지받나요?',
        answer:
          '<strong>인지 청구 소송 + DNA 검사입니다.</strong> 가정법원.',
      },
    ],
    cta: { text: '양육비 못 받을 때 다음 단계, AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 산정', href: '/guide/child-support/child-support-lump-sum-negotiation' },
      { label: '미지급 양육비', href: '/guide/child-support/child-support-non-payment' },
      { label: '이행명령 집행', href: '/guide/child-support/child-support-overdue-salary-seizure-procedure' },
      { label: '감치명령', href: '/guide/child-support/child-support-license-suspension-petition-procedure' },
      { label: '양육비 종합', href: '/guide/child-support/child-support-lawsuit-process' },
    ],
  },

  // ─── 5. child-support / child-support-economic-shock-modification-track ───
  {
    domain: 'child-support',
    slug: 'child-support-economic-shock-modification-track',
    keyword: '실직 후 양육비 변경 청구',
    questionKeyword: '양육비 결정 후 회사 부도로 실직했어요. 양육비 줄일 수 있나요?',
    ctaKeyword: '양육비 변경 청구 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '실직·사업 실패 후 양육비 변경 — 5단계 청구 | 로앤가이드',
      description:
        '양육비 결정 후 실직·사업 실패·중병으로 경제 충격이 생겼다면 양육비 증감 청구 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3년 전 이혼 시 \'월 80만원\' 양육비 결정 받았어요. 작년부터 회사 부도로 실직 + 새 일자리도 못 구해 1년 넘게 무직 상태입니다. 양육비 미지급으로 감치 통보까지 받아 막막합니다." 가사소송법 + 민법 제837조는 \'사정 변경\'이 있는 경우 양육비 증감 청구를 인정하는 영역입니다. 실직·사업 실패·중병·재혼·자녀 진학 등 양육 환경·소득에 큰 변화가 있으면 가정법원에 변경 청구 가능. 다만 \'단순 일시 어려움\'이 아닌 \'지속적 사정 변경\' + \'본인 책임 외 사유\' 입증이 핵심 자료입니다. 대법원 2016므30088 영역에서 사정 변경의 정도·계속성에 따른 변경 가능성 흐름이 평가됩니다. 양육자 측 동의 시 협의 변경도 가능한 사례입니다.</p>',
    sections: [
      {
        title: 'Q. 양육비 변경 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사정 변경·지속성·책임·산정·청구 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사정 변경 (실직·사업 실패·중병)</strong> — 객관 자료.</li>\n<li><strong>② 지속성</strong> — 일시 vs 지속. 1~2년 이상 지속.</li>\n<li><strong>③ 본인 책임 외</strong> — 의도적 소득 감소 아님.</li>\n<li><strong>④ 새 산정 (산정 기준표 + 현재 소득)</strong></li>\n<li><strong>⑤ 청구 (협의 + 심판)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 일시 어려움은 사정 변경 불충분. 지속성 + 본인 책임 외 자료가 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 변경 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·협의·심판 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사정 변경 자료 (즉시)</strong> — 실직·재직증명 부재·진료 자료.</li>\n<li><strong>2단계 — 양육자 측 협의 시도 (1~2주)</strong> — 임시 감액 합의.</li>\n<li><strong>3단계 — 가정법원 변경 청구 (1~3개월)</strong></li>\n<li><strong>4단계 — 심리·결정 (3~6개월)</strong></li>\n<li><strong>5단계 — 새 양육비 + 미이행분 정산</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 못 받을 때 다음 단계, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">양육비 변경 청구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사정 변경·소득·자녀 갈래입니다.</strong></p>\n<ul>\n<li><strong>실직 자료 (해고 통보·실업급여)</strong></li>\n<li><strong>건강 자료 (진단서·치료비)</strong></li>\n<li><strong>최근 소득 자료 (소득금액증명·종합소득)</strong></li>\n<li><strong>본래 양육비 결정문</strong></li>\n<li><strong>구직 활동 자료</strong></li>\n<li><strong>자녀 양육 환경 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 실직 후 곧장 변경 청구하지 않고 미이행이 누적되면 감치·면허 정지 위험. 즉시 임시 감액 협의·청구 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"의도적 소득 감소" 의심 반박</strong> — 구직 활동·재교육 자료.</li>\n<li><strong>"일시 어려움" 평가 반박</strong> — 지속성 자료.</li>\n<li><strong>미이행분 정산</strong> — 변경 결정 시 소급 적용.</li>\n<li><strong>이행관리원 감치 회피</strong> — 즉시 청구 + 임시 감액 협의.</li>\n<li><strong>양육비 증액 (역으로)</strong> — 양육자 측 사정 변경 시 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n<li><strong>가정법원</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사정 변경에 따른 양육비 증감',
        summary:
          '대법원 2016므30088 사건 영역에서 법원은 양육비 결정 후 부모 일방의 소득·자녀 양육 환경에 \'중대하고 지속적인 사정 변경\'이 있고, 그 변경이 본인 책임 외 사유에 의한 경우 양육비 증감 청구가 가능하다고 본 영역으로 평가되는 사례가 있습니다. 단순 일시 어려움이나 본인 의도적 소득 감소는 변경 사유로 인정되지 않는 영역.',
        takeaway: '실직·사업 실패·중병 같은 지속적 사정 변경 + 본인 책임 외 자료가 모이면 변경 청구 가능. 즉시 청구가 미이행 누적·감치 회피의 핵심.',
      },
    ],
    faq: [
      {
        question: '실직한 지 1년 됐어요. 변경 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 지속성·본인 책임 외 자료 입증.',
      },
      {
        question: '구직 활동 안 했으면 의도적 감소로 보나요?',
        answer:
          '<strong>가능성 있습니다.</strong> 구직 활동·재교육·이력서 자료 보존.',
      },
      {
        question: '양육자 측 동의 안 하면 어떻게 하나요?',
        answer:
          '<strong>가정법원 변경 심판 청구 가능합니다.</strong> 협의 불성립 시.',
      },
      {
        question: '미이행분도 줄여주나요?',
        answer:
          '<strong>변경 결정 소급 시기에 따라 다릅니다.</strong> 신속 청구 권장.',
      },
    ],
    cta: { text: '양육비 못 받을 때 다음 단계, AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '소득 변화 변경', href: '/guide/child-support/child-support-modification-employer-income-change' },
      { label: '미지급 양육비', href: '/guide/child-support/child-support-non-payment' },
      { label: '감치명령', href: '/guide/child-support/child-support-license-suspension-petition-procedure' },
      { label: '재혼 양육비', href: '/guide/child-support/child-support-paying-parent-remarriage-newchild-reduction' },
      { label: '양육비 종합', href: '/guide/child-support/child-support-lawsuit-process' },
    ],
  },

  // ─── 6. dui / dui-license-cancelled-driving-aggravated-track ───
  {
    domain: 'dui',
    slug: 'dui-license-cancelled-driving-aggravated-track',
    keyword: '면허취소 기간 무면허 운전',
    questionKeyword: '음주로 면허취소된 기간에 어쩔 수 없이 운전했다 단속 걸렸어요. 어떻게 되나요?',
    ctaKeyword: '면허취소 기간 운전 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '면허취소 기간 운전 — 5단계 가중 처벌 다툼 | 로앤가이드',
      description:
        '음주·뺑소니로 면허취소된 기간 중 운전하다 단속·사고가 발생했다면 가중 처벌·재취득 5가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"음주운전으로 면허취소 1년 받았어요. 6개월 남았을 때 가족 응급 상황으로 어쩔 수 없이 운전하다 단속에 걸렸습니다. \'면허취소 중 무면허\'로 형사 입건 + 면허 결격 기간 추가라는 통보를 받았어요." 도로교통법 제43조는 면허취소·정지 기간 중 운전을 무면허 영역으로 분류하고, 같은 법 제152조에서 1년 이하 징역 또는 300만원 이하 벌금 영역으로 처벌하는 사례. 음주 면허취소 중 단순 운전(음주 무관)도 가중 처벌 + 면허 결격 기간 연장. 음주·사고가 동반되면 특정범죄가중처벌법 위반 영역도 적용될 여지가 있는 사례. 대법원 2017도1885 영역에서 면허취소 기간 운전의 가중 처벌 흐름이 평가됩니다. 형사 변호 + 행정심판 + 재취득 트랙이 핵심입니다.</p>',
    sections: [
      {
        title: 'Q. 면허취소 기간 운전 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 운전 사유·음주 동반·사고·형사·재취득 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 운전 사유 (긴급·일상)</strong> — 응급·생계 vs 일반.</li>\n<li><strong>② 음주 동반</strong> — 동시 음주 측정 시 추가 가중.</li>\n<li><strong>③ 사고 동반</strong> — 인명·재산 피해.</li>\n<li><strong>④ 형사 처벌</strong> — 1년 이하 징역 또는 300만원 벌금.</li>\n<li><strong>⑤ 재취득 (결격 기간 연장)</strong> — 기존 + 추가 기간.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 면허취소 중 운전은 단순 무면허 + 가중. 음주·사고 동반 시 형량 큰 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사·재취득 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 변호·소명·재취득 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 변호인 자문 (즉시)</strong> — 양형 자료 정리.</li>\n<li><strong>2단계 — 경찰 조사 협조</strong></li>\n<li><strong>3단계 — 검찰·재판 (1~3개월)</strong> — 약식·정식.</li>\n<li><strong>4단계 — 면허 결격 기간 산정</strong></li>\n<li><strong>5단계 — 재취득 (결격 기간 후) + 교육</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">면허취소 기간 운전 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 단속·결격·소명 갈래입니다.</strong></p>\n<ul>\n<li><strong>단속 일지·진술서</strong></li>\n<li><strong>면허취소 결정문·결격 기간</strong></li>\n<li><strong>운전 사유 자료 (응급실·진료)</strong></li>\n<li><strong>음주 측정 결과 (동반 시)</strong></li>\n<li><strong>탄원서·진료 봉사 자료</strong></li>\n<li><strong>본인 신분증·도로교통공단 안내</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 응급·생계 운전 사유는 양형 자료. 진료 기록·구급 통화 보존.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>"긴급 사유 양형 감경" 자료</strong></li>\n<li><strong>음주 동반 시 가중</strong></li>\n<li><strong>사고 동반 시 특가법</strong></li>\n<li><strong>재취득 결격 기간 연장</strong> — 기존 1년 + 추가.</li>\n<li><strong>운전면허 행정심판</strong> — 처분 다툼.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>도로교통공단 1577-1120</strong> — 면허·교육.</li>\n<li><strong>중앙행정심판위원회 110</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 면허취소 기간 운전 가중 처벌',
        summary:
          '대법원 2017도1885 사건 영역에서 법원은 운전면허가 취소되거나 정지된 기간 중에 운전한 경우 도로교통법상 무면허 운전에 해당하고, 음주·사고가 동반되면 형량이 가중되며 면허 결격 기간이 연장되는 영역으로 평가되는 사례가 있습니다.',
        takeaway: '면허취소 기간 운전은 단순 무면허 + 가중 + 재취득 결격 기간 연장 트리거. 양형 감경 자료 (응급·생계)가 핵심 사례.',
      },
    ],
    faq: [
      {
        question: '응급 운전이면 면제되나요?',
        answer:
          '<strong>면제 아니지만 양형 감경 자료입니다.</strong> 진료·구급 통화 자료 핵심.',
      },
      {
        question: '음주 측정 안 했는데 음주 의심 받아요',
        answer:
          '<strong>측정 부재 시 처벌은 단순 무면허입니다.</strong> 음주 의심 입증은 별도 자료 필요.',
      },
      {
        question: '재취득 결격 기간이 얼마나 늘어나나요?',
        answer:
          '<strong>기존 1년 + 추가 1~2년 영역 사례입니다.</strong> 도로교통공단 확인.',
      },
      {
        question: '행정심판으로 처분 줄일 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 90일 내 신청. 사유 적정성 자료.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주 재범 가중', href: '/guide/dui/dui-repeat-offense-aggravation' },
      { label: '면허 재취득', href: '/guide/dui/dui-second-revoke-administrative-appeal' },
      { label: '음주 사고 형사', href: '/guide/dui/dui-traffic-accident-response' },
      { label: '음주 측정 거부', href: '/guide/dui/dui-test-refusal-warrant-blood-extraction' },
      { label: '음주 행정심판', href: '/guide/dui/dui-second-revoke-administrative-appeal' },
    ],
  },
];
