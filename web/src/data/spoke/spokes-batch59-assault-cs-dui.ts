import { SpokePage } from '../spoke-pages';

// batch59 assault 3 + child-support 2 + dui 1 = 6개
//
// 고유 존재 이유:
// 1. 이 페이지는 정당방위·과잉방위 다툼 사안에서 가해자가 CCTV·증인·시간대 자료로 4단계 입증 트랙을 정리하도록 돕는 페이지다. (batch58 운동경기 사회상규 다툼과 다른 일반 정당방위 입증 트랙)
// 2. 이 페이지는 학교 운동부·동아리에서 선후배 사이 발생한 폭행 사안에서 학교 처분(학칙·학폭위) + 형사 + 합의 4단계 트랙을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 가족 사이(존속·비속) 폭행 사안에서 가중처벌 + 반의사불벌 부적용 + 처벌불원 + 보호처분 4단계 트랙을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 양육비 산정기준표 적용 시 가산·감산 사유(장애아·고소득자·양육친 소득 합산)를 4단계로 점검하도록 돕는 페이지다. (batch58 일시금 전환/감치 트랙과 다른 산정 단계 페이지)
// 5. 이 페이지는 양육비 채무자 명단공개 단독 절차(3개월 1,000만원 요건·소명기회·이의신청) 4단계 트랙을 정리하도록 돕는 페이지다. (batch58 면허정지·출국금지 묶음과 분리된 명단공개 단독 트랙)
// 6. 이 페이지는 음주운전 사고에서 단순 음주운전 vs 위험운전치사상(특가법) 분기 4단계를 정리하도록 돕는 페이지다.

export const spokesBatch59AssaultCsDui: SpokePage[] = [
  // ─── 1. assault / assault-self-defense-vs-excessive-evidence-track ───
  {
    domain: 'assault',
    slug: 'assault-self-defense-vs-excessive-evidence-track',
    keyword: '정당방위 과잉방위 CCTV 증인 입증',
    questionKeyword: '폭행 입건됐는데 정당방위인지 과잉방위인지 헷갈려요. CCTV·증인 자료는 어떻게 정리하나요?',
    ctaKeyword: '정당방위 과잉방위 입증 점검',
    type: '방어형',
    perspective: 'accused',
    meta: {
      title: '정당방위 vs 과잉방위 — 4단계 CCTV·증인 입증 | 로앤가이드',
      description:
        '폭행 사건으로 입건돼 정당방위인지 과잉방위인지 헷갈린다면 침해 현재성·방위 의사·상당성·시간대 입증 4단계 트랙으로 자료 정리부터 지금 확인하세요.',
    },
    intro:
      '<p>"길에서 갑자기 시비를 거는 사람이 멱살을 잡고 밀쳐서 본인이 한 번 밀쳐냈는데 상대가 넘어져 부상을 입었어요. 정당방위로 빠질 수 있을지, 아니면 과잉방위로 처벌받을지 막막합니다." 정당방위·과잉방위 다툼은 ① 형법 제21조 정당방위(위법성 조각·무죄) ② 과잉방위(형 감면 가능) ③ 침해의 현재성 + 방위 의사 + 상당성 ④ CCTV·증인·시간대 입증 4단계 트랙으로 갈리는 영역입니다. 대법원은 정당방위 인정에 \'침해의 현재성·부정성·방위 의사·상당성\' 4요건을 일관되게 요구하며(2020도6874 외), 침해가 종료된 후 보복적으로 한 행위는 정당방위 부정 영역으로 평가되는 사례가 있습니다. 입증의 핵심은 시간대별 CCTV·증인 진술·통화 기록을 통해 \'누가 먼저 시작했는지·언제 침해가 시작·종료됐는지\'를 분 단위로 재구성하는 트랙이에요.</p>',
    sections: [
      {
        title: 'Q. 정당방위·과잉방위 4가지 입증 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 침해 시작·방위 의사·상당성·시간대 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 침해의 현재성·부정성 (대법원 2020도6874)</strong> — 상대가 먼저 시비·물리력 행사. 침해가 \'현재 진행 중\' 시점이어야 정당방위 영역.</li>\n<li><strong>② 방위 의사·상당성</strong> — 자신·타인 신체 보호 의사 + 침해 정도와 균형. 과도하면 과잉방위(형 감면)로 분기.</li>\n<li><strong>③ 침해 종료 후 행위는 정당방위 부정</strong> — 상대가 도망가거나 침해 멈춘 뒤 반격은 보복으로 평가되는 영역. 시간대 입증 핵심.</li>\n<li><strong>④ CCTV·증인·시간대 입증</strong> — 분 단위 CCTV + 목격자 진술 + 통화 기록으로 \'먼저 시작 + 침해 진행 중\' 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정당방위 인정은 까다로운 영역. \'먼저 시작 + 진행 중 + 균형 잡힌 방위\' 3박자 입증 필수. 분 단위 시간대 정리가 결정적. 균형 깨지면 과잉방위로 분기.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 변호인 → 조사 → 정당방위 변론 → 본안 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시·24~48시간 내)</strong> — CCTV(주변 가게·관공서·차량 블랙박스)·목격자 연락처·통화 기록·본인 부상 진단서·옷 손상 사진.</li>\n<li><strong>2단계 — 변호인 선임 (가능한 빠르게)</strong> — 정당방위·과잉방위 다툼 전략. 자격 요건 시 국선.</li>\n<li><strong>3단계 — 경찰 조사 (10~14일 내)</strong> — 시간대별 진술 + 변호인 동석. CCTV·증인 자료 제출.</li>\n<li><strong>4단계 — 정당방위 변론 (검찰·법원)</strong> — 침해의 현재성·방위 의사·상당성 4요건 입증. 본안 변론.</li>\n<li><strong>5단계 — 형사 본안 + 양형 (정당방위 부정 시)</strong> — 과잉방위(형 감면) + 합의·반성·초범 결합.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의금과 대응 전략, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">정당방위·과잉방위 4단계 입증을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 영상 자료 + 증언 자료 + 부상 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>주변 CCTV 영상 (24~48시간 내 확보)</strong> — 가게·관공서·은행 ATM·아파트 입구.</li>\n<li><strong>차량 블랙박스 영상</strong> — 본인·주변 차량.</li>\n<li><strong>목격자 진술서·연락처</strong> — 사건 정황 입증.</li>\n<li><strong>통화 기록·메시지</strong> — 시비 발단 입증.</li>\n<li><strong>본인 부상 진단서·사진</strong> — 침해 받은 정황.</li>\n<li><strong>옷 손상·소지품 파손 사진</strong> — 물리력 행사 입증.</li>\n<li><strong>본인·상대 키·체격 차이 자료</strong> — 상당성 다툼 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: CCTV는 보존 기간 짧음(7~30일). 사고 직후 가게·관공서 직접 방문 + 영상 보존 요청 결정적. 목격자 진술도 기억이 흐려지기 전 빠른 확보. 본인 부상 진단서 + 상대 부상 진단서 비교는 상당성 다툼의 핵심 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 검찰 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"본인이 먼저 도발" 주장 반박</strong> — CCTV·증인·통화로 누가 먼저 시비·물리력 행사 입증.</li>\n<li><strong>"침해 종료 후 보복" 주장 반박</strong> — 분 단위 시간대로 침해 진행 중 시점 입증. 상대가 멈춘 후 반격은 정당방위 부정 영역.</li>\n<li><strong>"방위 정도가 과도" 주장 반박</strong> — 본인·상대 체격 차이·인원·흉기 유무로 상당성 입증. 과도하면 과잉방위(형 감면) 분기 가능.</li>\n<li><strong>본인 부상 진단서 적극 제출</strong> — 본인도 다쳤음을 입증해 \'침해 받은 자\' 정황 명확화.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 형사 무료 상담.</li>\n<li><strong>국선변호인 (대한변협 02-2087-7700)</strong> — 자격 요건 시.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정당방위에서 침해의 현재성 판단 기준',
        summary:
          '대법원 2020도6874 사건(대법원, 2023.04.27 선고)에서 법원은 정당방위에서 \'침해의 현재성\'은 단순히 침해가 시작된 시점뿐 아니라 객관적으로 \'아직 침해가 끝나지 않은 상태\'까지 포괄하며, 일련의 폭행이 이어지는 상황에서 한 동작에서만 침해를 분리해 평가해서는 안 된다고 판시했습니다. 정당방위·과잉방위 다툼 사안에서도 분 단위 시간대별 침해 정황을 종합 평가해야 하며, CCTV·증인 진술로 침해의 시작·진행·종료 시점을 입증하는 트랙이 핵심 영역으로 평가될 수 있습니다.',
        takeaway: '정당방위·과잉방위 다툼은 침해의 현재성 + 방위 의사 + 상당성 + 시간대 결합 영역이라, CCTV·증인·통화 기록·부상 진단서 자료를 정리하면 4단계 입증 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '정당방위 인정되면 무죄인가요?',
        answer:
          '<strong>형법 제21조 위법성 조각으로 무죄 영역입니다.</strong> 침해의 현재성·방위 의사·상당성 4요건 충족 필요. 인정 사례는 까다로워 변호사 자문 필수.',
      },
      {
        question: '과잉방위는 처벌받나요?',
        answer:
          '<strong>형 감면 영역입니다(형법 제21조 제2항).</strong> 정당방위 요건은 충족하지만 정도가 과한 경우. 형 감경 또는 면제 가능 영역. 무죄는 아님.',
      },
      {
        question: 'CCTV가 없으면 어떻게 하나요?',
        answer:
          '<strong>증인 진술 + 통화·메시지 + 부상 진단서 결합 트랙입니다.</strong> 목격자 빠르게 확보. 본인 부상 + 상대 진술 모순점도 보강 자료.',
      },
      {
        question: '먼저 시비 걸린 게 한 시간 전이라면?',
        answer:
          '<strong>침해 종료 후 보복으로 평가되는 영역입니다.</strong> 분 단위 시간대로 침해 진행 중 시점 입증 필수. 시간 차이 크면 정당방위 부정 가능성 큼.',
      },
      {
        question: '체격 차이가 큰 상대를 밀쳤어요',
        answer:
          '<strong>상당성 다툼 가능 영역입니다.</strong> 본인·상대 체격·성별·인원 차이는 상당성 판단 자료. 일방적 우세인 상대 + 본인 방어 행위면 정당방위 검토.',
      },
    ],
    cta: { text: '합의금과 대응 전략, AI로 확인하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '정당방위 인정 기준', href: '/guide/assault/assault-self-defense-recognition' },
      { label: '쌍방폭행 정당방위 구분', href: '/guide/assault/mutual-assault-self-defense-distinction' },
      { label: '폭행 첫 대응 안내', href: '/guide/assault/assault-charged-first-response' },
      { label: '폭행 증거 수집 절차', href: '/guide/assault/assault-evidence-collection-procedure' },
      { label: '폭행 합의 절차', href: '/guide/assault/assault-settlement-amount-process' },
    ],
  },

  // ─── 2. assault / assault-school-sports-club-senior-junior-discipline ───
  {
    domain: 'assault',
    slug: 'assault-school-sports-club-senior-junior-discipline',
    keyword: '학교 운동부 동아리 선후배 폭행 처분',
    questionKeyword: '학교 운동부에서 선배가 후배를 폭행했어요. 학칙 처분과 형사 고소 어떻게 진행하나요?',
    ctaKeyword: '학교 운동부 선후배 폭행 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '학교 운동부 선후배 폭행 — 4단계 학교·형사 정리 | 로앤가이드',
      description:
        '학교 운동부·동아리에서 선배가 후배를 \'기강 잡기\'로 폭행했다면 학폭위 심의·형사 고소·학칙 징계·합의 4단계 트랙으로 대응 순서를 지금 확인하세요.',
    },
    intro:
      '<p>"고등학교 운동부에서 선배들이 \'기강 잡는다\'며 후배를 단체로 폭행했어요. 학교는 \'팀 분위기\'라며 무마하려 하고, 부모는 어디부터 어떻게 진행해야 할지 막막합니다." 학교 운동부·동아리 선후배 폭행은 ① 학교폭력예방법(학폭위) ② 형법 제260조 폭행죄·제257조 상해죄 ③ 학칙 징계(정학·퇴학) ④ 합의·민사 손해배상 4가지 트랙을 동시에 검토할 수 있는 영역입니다. 학교폭력예방법은 \'학교 내외에서 학생 간 발생한 폭행·상해\'를 학교폭력으로 정의해 학폭위 심의 영역. 또한 운동부 \'기강 잡기\' 관행은 사회상규 부정 영역(2023도10768 등)으로 평가된 사례가 있어 형사 트랙도 열려 있어요. 단체로 가담했다면 공동폭행(폭처법) 가중 영역이며, 학교 측 무마는 학폭위 의무 위반 영역으로 교육청 신고도 가능한 트랙입니다.</p>',
    sections: [
      {
        title: 'Q. 학교 운동부 폭행 4가지 대응 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 학폭위·형사·학칙·합의 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 학폭위 심의 (학교폭력예방법)</strong> — 학교 내외 학생 간 폭행은 학폭위 심의 영역. 1~9호 처분(서면사과~퇴학).</li>\n<li><strong>② 형사 고소 (폭행·상해·공동폭행)</strong> — 형법 제260조·제257조. 단체 가담 시 폭처법 공동폭행 가중. 14세 이상 형사 책임 영역.</li>\n<li><strong>③ 학칙 징계 (학교 자체)</strong> — 운동부 자격 정지·정학·퇴학. 학교장 권한 영역.</li>\n<li><strong>④ 합의·민사 손해배상</strong> — 가해 학생 + 부모 + 학교 (감독 의무) 사용자배상책임 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 학폭위 + 형사 + 학칙 3트랙 병행. 단체 가담은 공동폭행 가중 영역. 학교 무마는 학폭위 의무 위반(교육청 신고). \'기강 잡기\' 관행은 사회상규 부정 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 학폭위 → 형사 → 학칙 → 합의·민사 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 진단서·CCTV·동료 진술·메시지·SNS 캡처·본인 진술서.</li>\n<li><strong>2단계 — 학폭위 신고 (학교 또는 117)</strong> — 학교폭력 신고 + 학폭위 심의 요청. 학교 무마 시 117 또는 교육청.</li>\n<li><strong>3단계 — 형사 고소 (경찰 학교전담경찰관)</strong> — 폭행·상해 고소장. 14세 이상 형사 책임. 단체면 공동폭행 가중.</li>\n<li><strong>4단계 — 학칙 징계 + 운동부 자격</strong> — 학교장 징계. 운동부 자격 정지·해체.</li>\n<li><strong>5단계 — 합의·민사</strong> — 가해 학생 + 부모 + 학교 사용자배상책임. 합의 시 학폭위 처분 영향.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">학교 운동부 폭행 4단계 대응을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 의료 자료 + 학교 자료 + 통신 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>진단서·치료 기록</strong> — 부상 정도·인과관계.</li>\n<li><strong>학교·운동부 시설 CCTV</strong> — 사건 정황.</li>\n<li><strong>동료·후배 진술서·연락처</strong> — 단체 가담 입증.</li>\n<li><strong>SNS·단톡방 캡처</strong> — 기강 잡기 관행·예고 정황.</li>\n<li><strong>본인 진술서·일기</strong> — 시간대별 사건 기록.</li>\n<li><strong>학폭위 신고서</strong> — 학교 또는 117 양식.</li>\n<li><strong>학교 운동부 규정·관행 자료</strong> — 사회상규 부정 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 학폭위 의무 신고 후 학교 무마 시 즉시 교육청 + 117 학교폭력 신고센터. CCTV 학교 자체 보존 7~14일이라 빠른 보존 요청. 14세 미만 가해자도 보호처분 트랙 열려 있음.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 학교·가해 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"운동부 기강 관행" 주장 반박</strong> — 사회상규 부정 영역(2023도10768 등). 폭행은 어떤 명분도 정당화 부정.</li>\n<li><strong>"단체 책임 분산" 주장 반박</strong> — 공동폭행은 폭처법 가중 영역. 가담자 모두 공동정범.</li>\n<li><strong>학교 무마 시 교육청 신고</strong> — 학폭위 의무 위반은 교육청 + 117 신고 트랙. 별도 행정 책임.</li>\n<li><strong>학교 사용자배상책임 검토</strong> — 학교 감독 의무 위반은 사용자배상책임(국가배상법) 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>학교폭력 117</strong> — 24시간 신고·상담.</li>\n<li><strong>대한법률구조공단 132</strong> — 형사 무료 상담.</li>\n<li><strong>청소년상담복지센터 1388</strong> — 청소년 전문 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사회상규에 의한 위법성 조각 (운동부 기강 관행 부정)',
        summary:
          '대법원 2023도10768 사건(대법원, 2023.11.02 선고)에서 법원은 \'사회상규에 위배되지 아니하는 행위\'(형법 제20조)는 사회 일반의 가치관과 윤리적 정당성에 부합해야 한다고 판시하면서, 단순히 \'관행\'이나 \'위계 질서\'를 명분으로 한 폭행은 사회상규에 부합하지 아니해 위법성이 조각되지 않는다고 보았습니다. 학교 운동부·동아리에서 \'기강 잡기\'를 명분으로 선배가 후배를 폭행한 사안에서도 같은 법리가 적용되어 형사 책임 + 학폭위 처분 트랙이 결합되는 영역으로 평가될 수 있습니다.',
        takeaway: '학교 운동부 선후배 폭행은 학폭위 + 형사 + 학칙 + 합의 결합 영역이라, 진단서·CCTV·SNS 캡처·동료 진술 자료를 정리하면 4단계 대응 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '14세 미만이면 처벌 안 되나요?',
        answer:
          '<strong>형사 책임 능력은 없지만 보호처분 트랙은 열려 있습니다.</strong> 10세 이상 14세 미만은 촉법소년으로 가정법원 보호처분(1~10호). 학폭위 + 보호처분 병행.',
      },
      {
        question: '학교가 무마하려고 해요',
        answer:
          '<strong>117·교육청 신고 트랙입니다.</strong> 학폭위 의무 신고 위반은 학교장 행정 책임. 117 학교폭력 신고센터 + 교육청 직접 진정.',
      },
      {
        question: '단체로 폭행했는데 책임이 같나요?',
        answer:
          '<strong>공동폭행은 폭처법 가중 영역입니다.</strong> 가담자 모두 공동정범. 적극 가담 + 단순 가담 + 방조 차이는 양형 단계 다툼.',
      },
      {
        question: '본인이 후배라 학교 다니기 어려워요',
        answer:
          '<strong>학폭위 보호조치 신청 가능 영역입니다.</strong> 가해자 출석 정지·반 분리 + 본인 전학 지원. 117 + 학교 상담교사 협의.',
      },
      {
        question: '운동부에서 \'관행\'이라고 주장해요',
        answer:
          '<strong>사회상규 부정 영역(2023도10768 등)입니다.</strong> 관행·위계 명분의 폭행은 위법성 조각 부정. 학칙 + 형법 모두 적용.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '집단 폭행 책임 분담', href: '/guide/assault/assault-group-attack-joint-liability' },
      { label: '폭행 첫 대응 안내', href: '/guide/assault/assault-charged-first-response' },
      { label: '폭행 합의 절차', href: '/guide/assault/assault-settlement-amount-process' },
      { label: '폭행 vs 상해 차이', href: '/guide/assault/assault-vs-injury-penalties' },
    ],
  },

  // ─── 3. assault / assault-domestic-ascendant-descendant-aggravated-no-prosecution ───
  {
    domain: 'assault',
    slug: 'assault-domestic-ascendant-descendant-aggravated-no-prosecution',
    keyword: '가족간 폭행 존속 비속 가중처벌 처벌불원',
    questionKeyword: '가족 사이에 폭행이 있었어요. 존속폭행 가중처벌과 처벌불원 어떻게 되나요?',
    ctaKeyword: '존속비속 폭행 가중처벌 점검',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '가족간 폭행 존속·비속 — 4단계 가중·보호처분 | 로앤가이드',
      description:
        '가족(존속·비속) 사이 폭행은 일반 폭행과 다른 가중처벌·반의사불벌 부적용·가정폭력 보호처분·합의 4단계 트랙으로 대응 순서를 지금 확인하세요.',
    },
    intro:
      '<p>"성인 자녀가 노부모에게 폭행을 가했거나 반대로 부모가 자녀에게 학대를 했어요. 일반 폭행과 다른 처벌이라는데 합의도 어렵나요?" 가족 사이 폭행은 ① 형법 제260조 제2항 존속폭행(가중처벌) ② 형법 제257조 제2항 존속상해 ③ 가정폭력처벌법 보호처분 ④ 처벌불원·반의사불벌 부적용 4가지 트랙으로 갈리는 특수한 영역입니다. 일반 폭행은 반의사불벌죄(피해자가 처벌 원하지 않으면 종결)지만 존속폭행은 \'반의사불벌\'이 적용되되 처벌은 가중되는 구조이며(2017도10956 외), 가정폭력처벌법은 형사처벌 외에 \'보호처분\'(접근금지·상담위탁) 트랙을 별도로 열어 가족 관계 회복에 초점을 맞춥니다. 비속(자녀)에 대한 폭행은 아동학대처벌법 영역으로 분기되어 신고의무 + 친권 제한 트랙도 열린 영역이에요.</p>',
    sections: [
      {
        title: 'Q. 가족간 폭행 4가지 처리 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 존속·비속·보호처분·합의 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 존속폭행 가중 (형법 제260조 제2항)</strong> — 5년 이하 징역 또는 700만원 이하 벌금. 일반 폭행(2년 이하·500만원)보다 가중.</li>\n<li><strong>② 비속(자녀) 폭행 → 아동학대처벌법</strong> — 18세 미만 자녀 폭행은 아동학대처벌법 적용. 신고의무 + 친권 제한 트랙.</li>\n<li><strong>③ 가정폭력처벌법 보호처분</strong> — 형사처벌 외 접근금지·상담위탁·치료위탁 트랙. 가족 관계 회복 초점.</li>\n<li><strong>④ 처벌불원·반의사불벌 부적용</strong> — 존속상해는 반의사불벌 부적용 영역. 합의해도 형사 진행. 양형 자료로만 활용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가족 폭행은 일반 폭행과 처리 트랙 다른 영역. 존속은 가중·비속은 아동학대법. 보호처분 트랙은 가족 관계 회복 위한 별도 절차. 합의는 양형에만 영향.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·자료 → 보호조치 → 형사 → 보호처분 → 회복 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신고·자료 보존 (즉시·112·1366)</strong> — 진단서·CCTV·통화 녹취·메시지·반복 정황 자료.</li>\n<li><strong>2단계 — 보호조치 (긴급임시조치)</strong> — 가정폭력처벌법 긴급임시조치(접근금지·퇴거). 경찰 직권 또는 법원 결정.</li>\n<li><strong>3단계 — 형사 고소·송치 (경찰 → 검찰)</strong> — 존속폭행·존속상해·아동학대 분기. 14일~30일 내 송치.</li>\n<li><strong>4단계 — 보호처분 결정 (가정법원)</strong> — 접근금지·상담위탁·치료위탁·사회봉사. 형사와 별개·병행 가능.</li>\n<li><strong>5단계 — 가족 관계 회복 (선택)</strong> — 가족상담·치료. 1366 + 가정폭력상담소 연계.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">가족간 폭행 4단계 처리를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분 자료 + 사건 자료 + 보호 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>가족관계증명서·주민등록등본</strong> — 존속·비속 관계 입증.</li>\n<li><strong>진단서·치료 기록·사진</strong> — 부상 정도·인과관계.</li>\n<li><strong>CCTV·녹취·메시지</strong> — 사건 정황.</li>\n<li><strong>반복 정황 자료 (이전 폭행 기록)</strong> — 상습 가중 자료.</li>\n<li><strong>긴급임시조치 신청서</strong> — 가정폭력처벌법 양식.</li>\n<li><strong>본인 진술서·시간대 기록</strong> — 사건 입증.</li>\n<li><strong>학교·이웃 진술 (자녀 폭행)</strong> — 아동학대 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 1366(여성긴급전화)은 가정폭력 24시간 상담·쉼터 연계. 자녀 폭행은 학교·소아과·이웃 신고의무자 협조 가능. 긴급임시조치(접근금지)는 경찰 직권 신청 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"가족 일이라 합의로 끝낼 것" 주장 반박</strong> — 존속상해는 반의사불벌 부적용 영역. 합의는 양형 자료만.</li>\n<li><strong>"훈육이었다" 주장 반박 (자녀 폭행)</strong> — 민법 제915조 친권자 징계권 폐지(2021). 신체 폭행은 아동학대 영역.</li>\n<li><strong>접근금지 적극 신청</strong> — 동거 가족이면 임시조치(접근금지·퇴거) 신청. 보호조치 우선.</li>\n<li><strong>보호처분 vs 형사 병행 가능</strong> — 가정폭력처벌법 보호처분 트랙은 형사와 별개·병행. 가족 관계 회복 시 보호처분 우선.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>여성긴급전화 1366</strong> — 24시간 가정폭력 상담.</li>\n<li><strong>아동학대 신고 112·129</strong> — 자녀 학대 즉시 신고.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 존속학대·존속폭행과 부양의무 가족 관계',
        summary:
          '대법원 2025도12963 사건(대법원, 2025.11.06 선고)에서 법원은 부양의무의 대상인 직계존속이 존속학대죄의 객체가 될 수 있다고 판시하며, 직계존속에 대한 성년후견이 개시되어 부양의무를 지는 직계비속 외에 별도의 성년후견인이 있는 경우에도 그 직계비속이 직계존속을 학대하면 존속학대죄가 성립한다고 보았습니다. 또한 대법원 2017도10956 사건(대법원, 2018.04.24 선고)은 상습폭행 + 존속폭행 결합 사안에서 가중처벌 법리를 확인했습니다. 가족 사이 폭행에서 가중처벌·반의사불벌 부적용·보호처분 트랙이 결합되는 영역으로 평가될 수 있습니다.',
        takeaway: '가족간 폭행은 가중처벌 + 반의사불벌 부적용 + 보호처분 + 합의 결합 영역이라, 가족관계증명·진단서·반복 정황·긴급임시조치 자료를 정리하면 4단계 처리 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '존속폭행은 합의해도 처벌받나요?',
        answer:
          '<strong>존속폭행도 반의사불벌이지만 존속상해는 반의사불벌 부적용 영역입니다.</strong> 부상 정도에 따라 분기. 합의는 양형 자료. 변호사 자문.',
      },
      {
        question: '자녀 훈육으로 때린 것도 처벌되나요?',
        answer:
          '<strong>2021년 민법 제915조 친권자 징계권 폐지 영역입니다.</strong> 신체 폭행은 아동학대처벌법. 훈육 명분 인정 부정. 즉각적 신고 의무.',
      },
      {
        question: '가정폭력 보호처분이 뭔가요?',
        answer:
          '<strong>형사처벌 외 접근금지·상담위탁·치료위탁 트랙입니다.</strong> 가정법원 결정. 형사와 별개·병행 가능. 가족 관계 회복 초점.',
      },
      {
        question: '동거 가족이라 도망갈 곳이 없어요',
        answer:
          '<strong>1366·가정폭력 쉼터 연계 영역입니다.</strong> 24시간 긴급 보호. 임시조치(가해자 퇴거·접근금지)도 적극 신청.',
      },
      {
        question: '가족 폭행 신고하면 가족 관계가 끊어지나요?',
        answer:
          '<strong>관계 회복 트랙도 열려 있습니다.</strong> 보호처분(상담위탁·치료위탁)이 가족 회복 초점. 형사 + 보호처분 병행 사례 다수.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '가정폭력 동거 배우자', href: '/guide/assault/assault-spousal-domestic-violence-cohabit-charge' },
      { label: '가족 부모형제 가정폭력', href: '/guide/assault/assault-family-parent-sibling-domestic-violence' },
      { label: '노부모 보호 조치', href: '/guide/assault/assault-elderly-parent-domestic-protect' },
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '폭행 합의 절차', href: '/guide/assault/assault-settlement-amount-process' },
    ],
  },

  // ─── 4. child-support / child-support-calculation-table-add-deduct-factors ───
  {
    domain: 'child-support',
    slug: 'child-support-calculation-table-add-deduct-factors',
    keyword: '양육비 산정기준표 가산 감산 사유',
    questionKeyword: '서울가정법원 양육비 산정기준표가 정확한 금액인가요? 가산·감산 사유는 어떻게 적용되나요?',
    ctaKeyword: '양육비 산정 가산감산 점검',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '양육비 산정기준표 가산·감산 — 4단계 적용 | 로앤가이드',
      description:
        '서울가정법원 양육비 산정기준표 표준액에 자녀 장애·고비용 교육·양육친 소득 등 가산·감산 사유를 어떻게 적용하는지 4단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼하면서 양육비를 정해야 하는데 서울가정법원 산정기준표가 표 한 장으로 끝나는지, 본인 사정(자녀 장애·고소득·양육친 소득)이 반영되는지 헷갈려요." 양육비 산정기준표 적용은 ① 서울가정법원 표준양육비 산정기준표 (부모합산소득·자녀 나이) ② 가산 사유(장애·만성질환·고비용) ③ 감산 사유(양육친 소득 합산·재혼·새 자녀) ④ 부담 비율(소득 비례) 4단계 트랙으로 정리되는 영역입니다. 산정기준표는 \'표준 양육비\'를 제시하지만 절대 금액 아닌 가이드라인이며, 대법원 2023스637 등 일관된 판례는 \'양육비 분담 범위는 자녀의 연령·복지·부모의 자산·생활 수준 등 종합 고려\'라고 판시해 가산·감산 사유 반영 트랙을 명확히 했습니다. 본인 사안의 가산·감산 사유 정리가 협의·심판 모두에서 핵심 자료가 되는 영역이에요.</p>',
    sections: [
      {
        title: 'Q. 산정기준표 가산·감산 4가지 적용 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 표준액·가산·감산·부담비율 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 표준양육비 (부모합산소득·자녀 나이)</strong> — 서울가정법원 산정기준표 기준. 양 부모 소득 합산 후 자녀 1인당 표준 금액 도출.</li>\n<li><strong>② 가산 사유 (자녀 장애·만성질환·고비용 교육)</strong> — 표준액 위에 추가. 자녀 발달장애·중증질환·특수교육비 등 영역.</li>\n<li><strong>③ 감산 사유 (양육친 새 자녀·고소득·재혼)</strong> — 양육친도 소득이 매우 높거나 새 자녀 부양 시 감산 검토 영역.</li>\n<li><strong>④ 부담비율 (양 부모 소득 비례)</strong> — 표준액 + 가산 - 감산 = 총액 → 양 부모 소득 비율로 분담.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 산정기준표는 출발점·가이드라인 영역. 본인 사안 가산·감산 사유 입증이 협의·심판 핵심 자료. 자녀 복지 + 부모 자산·생활 수준 종합 고려.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 산정 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 소득 정리 → 표준액 → 가산·감산 → 분담비율 → 합의·심판 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 양 부모 소득 정리</strong> — 근로소득원천징수영수증·사업소득 신고서·예금·부동산.</li>\n<li><strong>2단계 — 표준양육비 도출 (산정기준표)</strong> — 합산소득 + 자녀 나이로 표준액 확인. scourt.go.kr 산정기준표 참조.</li>\n<li><strong>3단계 — 가산·감산 사유 정리</strong> — 자녀 장애·만성질환·교육비 자료 + 양육친 소득·재혼·새 자녀 자료.</li>\n<li><strong>4단계 — 분담비율 계산</strong> — 양 부모 소득 비례 또는 협의 비율. 통상 비양육 부모가 더 큰 비율.</li>\n<li><strong>5단계 — 합의 또는 가정법원 심판</strong> — 협의 결렬 시 가정법원 양육비 청구. 자료 종합 판단.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 산정기준표, AI로 계산해보기</strong></p>\n<p style="margin:0;font-size:0.95em">가산·감산 4단계 적용을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 소득 자료 + 자녀 자료 + 가산·감산 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>근로소득원천징수영수증·연말정산 자료</strong> — 양 부모 근로소득.</li>\n<li><strong>사업소득세 신고서·세무 자료</strong> — 자영업·프리랜서.</li>\n<li><strong>예금·부동산·증권 자료</strong> — 자산 정황.</li>\n<li><strong>자녀 진단서·복지카드</strong> — 장애·만성질환 가산 자료.</li>\n<li><strong>학원비·교육비 영수증</strong> — 고비용 교육 가산.</li>\n<li><strong>양육친 새 자녀·재혼 자료</strong> — 감산 자료 (있다면).</li>\n<li><strong>양육비 청구서·산정 근거표</strong> — 가정법원 양식.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: scourt.go.kr 산정기준표는 매년 업데이트 영역. 본인 사안의 가산·감산 사유 미리 정리하면 협의·심판 모두 유리. 자녀 장애·만성질환은 진단서 + 진료비 영수증 결합 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"산정기준표가 절대 기준" 주장 검토</strong> — 표준액은 출발점·가이드라인 영역. 가산·감산 사유 반영이 본안 변론.</li>\n<li><strong>"본인 소득 모른다" 주장 반박</strong> — 가정법원 사실조회·세무자료 직권 조사 가능 영역. 소득 은닉 시 제재.</li>\n<li><strong>자녀 양육비 vs 부모 위자료 구분</strong> — 양육비는 자녀 권리, 위자료는 배우자 권리. 별개 항목.</li>\n<li><strong>합의서 명문화 권장</strong> — 표준액 + 가산·감산 + 분담비율 + 변동 조항 명문 합의서. 후일 분쟁 방지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>양육비이행관리원 (csa.go.kr) 1644-6621</strong> — 무료 자문.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 분담 범위 산정 시 종합 고려 사항',
        summary:
          '대법원 2023스637 사건(대법원, 2024.10.08 선고)에서 법원은 협의이혼 이후 과거 양육비를 청구한 사안에서 양육비 분담 범위를 정할 때는 자녀의 연령·복지·부모의 자산과 생활 수준·재산분할 합의 정황 등 종합 고려해야 한다고 판시했습니다. 또한 대법원 2018스566 사건(대법원, 2019.01.31 선고)은 양육비 변경 청구에서 사정변경(소득·자녀 상황) 반영 법리를 정리했습니다. 산정기준표 적용 시 가산·감산 사유 정리가 협의·심판 모두 핵심 자료로 평가될 수 있는 영역입니다.',
        takeaway: '양육비 산정은 표준액 + 가산 + 감산 + 분담비율 결합 영역이라, 양 부모 소득·자녀 진단서·교육비·새 자녀 자료를 정리하면 4단계 적용 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '산정기준표 표준액이 절대 금액인가요?',
        answer:
          '<strong>출발점·가이드라인 영역입니다.</strong> 자녀 복지 + 부모 자산·생활 수준 종합 고려. 가산·감산 사유 반영이 본안 변론.',
      },
      {
        question: '자녀가 발달장애가 있어요',
        answer:
          '<strong>가산 사유 영역입니다.</strong> 진단서·복지카드·치료비·특수교육비 자료. 표준액 위에 추가 부담 검토.',
      },
      {
        question: '양육친도 소득이 높으면 양육비 줄어드나요?',
        answer:
          '<strong>분담비율 다툼 영역입니다.</strong> 양 부모 소득 비례 분담이 원칙. 양육친 고소득이면 비양육 부모 부담 비율 다툼.',
      },
      {
        question: '비양육 부모가 새 자녀 생기면 감액되나요?',
        answer:
          '<strong>사정변경 사유 검토 영역입니다(2018스566).</strong> 다만 자동 감액 아님. 양육비변경(감액) 심판 청구 + 가정법원 종합 판단.',
      },
      {
        question: '협의 안 되면 어떻게 하나요?',
        answer:
          '<strong>가정법원 양육비 청구 또는 심판 트랙입니다.</strong> 산정기준표 + 가산·감산 자료 종합 제출. 132 무료 상담.',
      },
    ],
    cta: { text: '양육비 산정기준표, AI로 계산해보기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 산정기준표 가이드', href: '/guide/child-support/child-support-calculation-table' },
      { label: '양육비 증액 청구', href: '/guide/child-support/child-support-calculation-increase' },
      { label: '양육비 변경 소득 변동', href: '/guide/child-support/child-support-modification-income-change' },
      { label: '양육비 청구 체크리스트', href: '/guide/child-support/child-support-claim-checklist' },
      { label: '양육비 청구 어디부터', href: '/guide/child-support/child-support-claim-where-to-start' },
    ],
  },

  // ─── 5. child-support / child-support-public-disclosure-debtor-list-procedure ───
  {
    domain: 'child-support',
    slug: 'child-support-public-disclosure-debtor-list-procedure',
    keyword: '양육비 채무자 명단공개 절차',
    questionKeyword: '양육비를 1년 넘게 안 줘요. 명단공개 신청은 어떤 요건과 절차로 진행되나요?',
    ctaKeyword: '양육비 명단공개 신청 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양육비 채무자 명단공개 — 4단계 신청 절차 | 로앤가이드',
      description:
        '양육비 미지급 채무자 명단공개 신청은 3개월 이상·합산 1,000만원 이상 요건과 소명기회·여성가족부 공개까지 4단계 절차 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"양육비 결정문이 있는데도 1년 넘게 미지급해요. 양육비이행관리원에 명단공개 신청 가능하다는데 요건과 절차가 어떻게 되는지 막막합니다." 양육비 채무자 명단공개는 ① 양육비이행법 제21조의5 명단공개 ② 요건 (3개월 이상 미지급 + 합산 1,000만원 이상) ③ 소명기회 부여(채무자 의견 진술) ④ 여성가족부 홈페이지 공개 4단계 절차로 진행되는 영역입니다. 양육비이행법 제21조의5는 \'정당한 사유 없이 양육비 채무를 이행하지 아니한 자\'에 대해 여성가족부장관이 양육비이행관리원의 신청에 따라 명단공개를 할 수 있다고 규정해, 면허정지·출국금지와 별개로 사회적 압박 효과가 큰 트랙. 공개 후 일정 기간(통상 3년) 신상이 공개되며 정당한 사유 입증 시 해제 가능 영역이에요. 면허정지 트랙과 병행하거나 단독으로 신청 가능합니다.</p>',
    sections: [
      {
        title: 'Q. 명단공개 4가지 요건·절차 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 요건·신청·소명·공개 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 요건 (양육비이행법 제21조의5)</strong> — 3개월 이상 미지급 + 합산 1,000만원 이상 + 정당한 사유 없음. 결정문·합의서 집행권원 필수.</li>\n<li><strong>② 양육비이행관리원 신청 (1644-6621)</strong> — 양육친이 신청. 이행관리원이 자료 정리·여성가족부 신청 대행.</li>\n<li><strong>③ 소명기회 부여 (채무자 의견)</strong> — 채무자에게 통지 + 의견 진술 기회. 정당한 사유(실직·중대 질병) 입증 시 부정.</li>\n<li><strong>④ 양육비이행위원회 심의·공개</strong> — 위원회 심의 후 여성가족부 홈페이지(mogef.go.kr) 공개. 통상 3년.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 명단공개는 사회적 압박 큰 트랙 영역. 결정문 + 미지급 1,000만원 + 3개월 + 정당한 사유 부정 4박자 충족 필수. 소명기회에서 채무자 반박 자료 대비 자료 보강.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신청 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 양육비이행관리원 → 신청 → 소명·심의 → 공개 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존</strong> — 양육비 결정문·합의서·미지급 기록·통장 사본·이행명령 결정문.</li>\n<li><strong>2단계 — 양육비이행관리원 (csa.go.kr·1644-6621)</strong> — 무료 자문 + 명단공개 신청 자료 협조.</li>\n<li><strong>3단계 — 명단공개 신청 (여성가족부)</strong> — 이행관리원이 여성가족부에 신청 대행.</li>\n<li><strong>4단계 — 채무자 소명기회 + 위원회 심의</strong> — 채무자 의견 진술 + 양육비이행위원회 심의. 통상 2~6개월 소요.</li>\n<li><strong>5단계 — 공개 결정 + 후속 조치</strong> — 여성가족부 홈페이지 공개. 채무자 협상 시도 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 못 받을 때 다음 단계, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">명단공개 4단계 신청을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 결정문 자료 + 미지급 자료 + 채무자 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>양육비 결정문·합의서·이행명령</strong> — 집행권원.</li>\n<li><strong>미지급 기록·통장 사본</strong> — 3개월 이상·1,000만원 이상 입증.</li>\n<li><strong>채무자 인적사항</strong> — 주민번호·주소·연락처.</li>\n<li><strong>채무자 재산·소득 정황</strong> — \'정당한 사유 없음\' 입증.</li>\n<li><strong>본인·자녀 가족관계증명</strong> — 청구 신분.</li>\n<li><strong>이전 강제집행·이행명령 기록</strong> — 노력 입증.</li>\n<li><strong>명단공개 신청서</strong> — 이행관리원 양식.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 채무자 \'정당한 사유\'(실직·중대 질병) 반박 자료가 핵심. 4대보험·세무·소비 정황 자료 미리 정리. 이행관리원이 직권 자료 조회 협조 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 채무자 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"실직·중대 질병으로 못 줘" 주장 검증</strong> — 4대보험·세무·소비 정황 자료로 \'정당한 사유\' 부정 입증.</li>\n<li><strong>"개인정보 침해" 주장 반박</strong> — 양육비이행법 제21조의5 명문 영역. 소명기회 부여로 절차적 적법.</li>\n<li><strong>면허정지·출국금지 병행 검토</strong> — 명단공개와 면허정지·출국금지는 별개 트랙. 동시 진행 가능.</li>\n<li><strong>공개 후 협상·해제 트랙</strong> — 공개 후 채무자가 미지급 양육비 변제 시 해제 가능 영역. 합의 협상 카드.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>양육비이행관리원 (csa.go.kr) 1644-6621</strong> — 무료 자문 + 신청 대행.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>한국가정법률상담소 1644-7077</strong> — 가정법률 전문.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 과거 양육비 청구권의 시효 기산점',
        summary:
          '대법원 2018스724 사건(대법원, 2024.07.18 선고)에서 법원은 이혼한 부부 사이에서 어느 일방이 과거에 미성년 자녀를 양육하면서 생긴 비용의 상환을 상대방에게 청구하는 경우, 과거 양육비에 관한 권리의 소멸시효는 자녀가 성년이 되어 양육의무가 종료된 때부터 진행한다고 판시했습니다. 이러한 시효 보호 법리는 미지급 양육비에 대한 명단공개·면허정지 등 행정 제재 트랙에서도 청구권 보호의 근거로 작용하며, 양육비이행법상 명단공개 절차를 통해 사회적 압박 + 협상 카드로 활용 가능한 영역으로 평가될 수 있습니다.',
        takeaway: '양육비 명단공개는 요건 + 신청 + 소명 + 공개 결합 영역이라, 결정문·미지급 기록·채무자 재산 정황·소명 반박 자료를 정리하면 4단계 신청 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '얼마부터 명단공개 신청 가능한가요?',
        answer:
          '<strong>3개월 이상 미지급 + 합산 1,000만원 이상 영역입니다(양육비이행법 제21조의5).</strong> 결정문·합의서 집행권원 필수. 양육비이행관리원 신청.',
      },
      {
        question: '공개되면 어디에 공개되나요?',
        answer:
          '<strong>여성가족부 홈페이지(mogef.go.kr) 양육비 채무자 명단공개 영역입니다.</strong> 통상 3년 공개. 신상(이름·나이·직업·미지급액).',
      },
      {
        question: '채무자가 \'실직했다\'고 주장하면 어떻게 되나요?',
        answer:
          '<strong>소명기회 단계에서 양육비이행위원회 심의 영역입니다.</strong> 4대보험·세무·소비 정황 자료 반박 필요. 변호사 자문 + 이행관리원 협조.',
      },
      {
        question: '면허정지·출국금지와 동시 신청 가능한가요?',
        answer:
          '<strong>가능 영역입니다.</strong> 명단공개·면허정지·출국금지는 별개 트랙. 단계적 또는 동시 진행 가능. 이행관리원 자문.',
      },
      {
        question: '공개 후 채무자가 변제하면 해제되나요?',
        answer:
          '<strong>해제 가능 영역입니다.</strong> 미지급 양육비 변제 + 향후 정상 지급 약속 시 양육비이행위원회 심의 후 해제. 협상 카드.',
      },
    ],
    cta: { text: '양육비 못 받을 때 다음 단계, AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 면허정지·출국금지', href: '/guide/child-support/child-support-license-suspension-petition-procedure' },
      { label: '양육비 감치명령 절차', href: '/guide/child-support/child-support-detention-order-3-times-unpaid' },
      { label: '양육비 미지급 형사 고소', href: '/guide/child-support/child-support-non-payment-criminal' },
      { label: '이행관리원 추심 한계', href: '/guide/child-support/child-support-agency-collection-limits' },
      { label: '양육비 잠적 추적', href: '/guide/child-support/child-support-disappear-tracking-procedure' },
    ],
  },

  // ─── 6. dui / dui-simple-vs-dangerous-driving-injury-distinction ───
  {
    domain: 'dui',
    slug: 'dui-simple-vs-dangerous-driving-injury-distinction',
    keyword: '단순 음주운전 위험운전치사상 분기',
    questionKeyword: '음주운전 사고로 사람이 다쳤어요. 단순 음주운전과 위험운전치사상은 어떻게 갈리나요?',
    ctaKeyword: '단순 위험운전치사상 점검',
    type: '방어형',
    perspective: 'accused',
    meta: {
      title: '단순 음주운전 vs 위험운전치사상 — 4단계 분기 | 로앤가이드',
      description:
        '음주운전 사고로 피해자가 다쳤다면 단순 음주운전 vs 위험운전치사상(특가법) 정상운전 곤란 다툼·인과관계·합의·면허 4단계 분기 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"음주운전 중 신호 위반으로 사고가 나서 상대 운전자가 다쳤어요. 검찰이 \'위험운전치사상\'으로 송치한다는데 일반 음주운전과 형량이 얼마나 차이 나는지 막막합니다." 음주운전 사고 사안은 ① 도로교통법 제44조 단순 음주운전(0.03% 이상) ② 특정범죄가중처벌법 제5조의11 위험운전치사상(주취·약물로 정상운전 곤란 상태에서 사고) ③ 교통사고처리특례법 12대 중과실 ④ 형량·합의·면허 4단계 트랙으로 갈리는 영역입니다. 단순 음주운전은 도로교통법(5년 이하·2,000만원 이하 등 농도별), 위험운전치사상은 특가법으로 형량이 크게 가중됩니다(상해 시 1~15년 징역, 사망 시 3년 이상 또는 무기). 핵심 분기점은 \'정상운전 곤란 상태\' 입증 여부(2017도15519 등)이며, 사고와 음주의 인과관계, 음주량, 운전 시점 상태가 객관 자료로 다툼되는 영역이에요.</p>',
    sections: [
      {
        title: 'Q. 단순 vs 위험운전치사상 4가지 분기 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 정상운전 곤란·인과관계·중과실·합의 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 정상운전 곤란 상태 (대법원 2017도15519)</strong> — 위험운전치사상은 \'주취·약물로 정상운전이 곤란한 상태\' 입증 필요. 농도 + 주행 행태 종합.</li>\n<li><strong>② 사고와 음주 인과관계</strong> — 음주가 사고의 직접 원인인지. 단순 신호위반 사고 + 음주는 별개로 다툼 가능 영역.</li>\n<li><strong>③ 교통사고처리특례법 12대 중과실</strong> — 음주운전은 12대 중과실 영역. 종합보험 가입해도 형사 처벌 면책 부정.</li>\n<li><strong>④ 형량·합의·면허</strong> — 단순 음주(농도별) vs 위험운전치사상(가중) 형량 큰 차이. 합의·종합보험·면허 행정심판 별도 트랙.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 위험운전치사상은 단순 농도만으로 자동 인정 부정 영역. 주행 행태(차선 이탈·속도·신호)·사고 직전 상태 종합 자료 필요. 정상운전 곤란 다툼 시 단순 음주운전으로 분기 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 변호인 → 조사·합의 → 죄책 다툼 → 본안·면허 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 음주측정 결과·블랙박스·CCTV·사고 현장 사진·동석자 진술·피해자 진단서.</li>\n<li><strong>2단계 — 변호인 선임 (즉시)</strong> — 위험운전치사상 다툼 + 합의 전략. 자격 요건 시 국선.</li>\n<li><strong>3단계 — 합의 시도 + 경찰 조사 (10~14일 내)</strong> — 피해자 합의 우선. 경찰 조사 시 정상운전 가능 정황 진술.</li>\n<li><strong>4단계 — 죄책 다툼 (검찰·법원)</strong> — 단순 음주 vs 위험운전치사상 분기 변론. 객관 자료 종합.</li>\n<li><strong>5단계 — 형사 본안 + 면허 행정심판</strong> — 합의·종합보험·반성·초범 결합. 면허 취소 행정심판 90일 내 별도 트랙.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 탄원서와 감경 요소, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">단순 vs 위험운전치사상 4단계 분기를 AI가 안내해드립니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정 자료 + 사고 자료 + 합의 자료 세 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>음주측정 결과서·채혈 결과</strong> — 농도 수치.</li>\n<li><strong>본인·상대 블랙박스</strong> — 주행 행태·사고 직전 상태.</li>\n<li><strong>현장 CCTV·사고 현장 사진</strong> — 사고 정황.</li>\n<li><strong>피해자 진단서·치료 기록</strong> — 부상 정도.</li>\n<li><strong>동석자 진술·음주 영수증</strong> — 음주량·시점.</li>\n<li><strong>종합보험 가입 자료</strong> — 민사 합의 자료.</li>\n<li><strong>합의서·반성문·전과 자료</strong> — 양형 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 위험운전치사상은 음주 농도만으로 자동 인정 부정 영역이라 \'정상운전 가능 정황\'(차선·속도·신호 정상) 자료가 핵심 다툼 자료. 블랙박스가 가장 강력. 피해자 합의는 단순 음주 분기에 결정적.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 검찰 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"농도 높으면 자동 위험운전" 주장 반박</strong> — 농도 + 주행 행태 종합 판단 영역(2017도15519 등). 정상 주행 정황 자료 입증.</li>\n<li><strong>"사고 = 음주 인과" 주장 반박</strong> — 음주가 직접 원인인지 별개 다툼. 신호위반·과속 등 다른 원인 분리.</li>\n<li><strong>합의 + 종합보험 적극 활용</strong> — 합의 + 종합보험 가입은 양형 + 단순 음주 분기에 결정적. 피해자 합의 우선.</li>\n<li><strong>면허 행정심판 별도 트랙</strong> — 형사 결과와 별개 영역. 90일 내 행정심판 청구. 운전 생계 사유 + 절차 위법.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 형사 무료 상담.</li>\n<li><strong>국선변호인 (대한변협 02-2087-7700)</strong> — 자격 요건 시.</li>\n<li><strong>중앙행정심판위원회 (acrc.go.kr)</strong> — 면허 취소 행정심판 90일 내.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위험운전치사상에서 \'정상운전 곤란 상태\' 판단',
        summary:
          '대법원 2017도15519 사건(대법원, 2018.01.25 선고)에서 법원은 특정범죄가중처벌법 제5조의11 위험운전치사상죄에서 \'정상적인 운전이 곤란한 상태\'란 단순히 음주측정 농도 수치만으로 일률적으로 정해지는 것이 아니라, 사고 당시 운전자의 운전 행태·반응·진술 등 종합 사정에 비추어 정상운전이 곤란했는지 객관적으로 평가해야 한다고 판시했습니다. 또한 대법원 2014도16051 사건(대법원, 2015.07.09 선고)은 혈액 채취 음주측정 사건에서 측정 절차의 적법성 + 농도 신뢰성을 종합 검토했습니다. 음주운전 사고 사안에서 단순 음주운전과 위험운전치사상의 분기점이 \'정상운전 곤란 상태\' 입증인 영역으로 평가될 수 있습니다.',
        takeaway: '단순 vs 위험운전치사상 분기는 정상운전 곤란 + 인과관계 + 중과실 + 합의 결합 영역이라, 측정 결과·블랙박스·동석자 진술·합의 자료를 정리하면 4단계 분기 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '농도가 높으면 무조건 위험운전치사상인가요?',
        answer:
          '<strong>자동 인정 부정 영역입니다(2017도15519 등).</strong> 농도 + 주행 행태 종합 판단. 정상 주행 정황 자료로 단순 음주운전 분기 다툼 가능.',
      },
      {
        question: '단순 음주운전과 형량 차이가 큰가요?',
        answer:
          '<strong>차이 매우 큰 영역입니다.</strong> 단순 음주는 농도별 5년 이하·2,000만원 이하. 위험운전치상은 1~15년, 치사는 3년 이상 또는 무기.',
      },
      {
        question: '종합보험 가입돼 있으면 형사 처벌 면제되나요?',
        answer:
          '<strong>음주운전은 12대 중과실 영역으로 면제 부정입니다.</strong> 종합보험 가입은 민사 합의에만 영향. 형사 처벌은 별개. 합의 + 양형.',
      },
      {
        question: '본인이 신호위반으로 사고가 났는데 음주는 별개인가요?',
        answer:
          '<strong>인과관계 다툼 가능 영역입니다.</strong> 사고의 직접 원인이 음주인지 별개 신호위반인지 분리 검토. 단순 음주운전 + 신호위반 분리 분기 가능.',
      },
      {
        question: '면허 취소 행정심판은 별도 트랙인가요?',
        answer:
          '<strong>중앙행정심판위원회(acrc.go.kr) 90일 이내 청구 별도 트랙입니다.</strong> 형사 결과와 별개. 무료. 운전 생계 사유 + 절차 위법 종합 변론.',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 형사 절차', href: '/guide/dui/dui-criminal-procedure-overview' },
      { label: '음주운전 농도별 형량표', href: '/guide/dui/dui-bac-penalty-by-level' },
      { label: '음주운전 행정심판 90일', href: '/guide/dui/dui-administrative-trial-90day-mitigation' },
      { label: '음주운전 보험·민사', href: '/guide/dui/dui-civil-damage-insurance-refused' },
      { label: '음주운전 탄원서 자료', href: '/guide/dui/dui-leniency-petition-documents' },
    ],
  },
];
