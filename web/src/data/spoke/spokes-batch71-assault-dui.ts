import { SpokePage } from '../spoke-pages';

// batch71 assault-dui — 4개 (2026-05-21)
//
// 고유 존재 이유:
// 1. assault-elderly-parent-care-conflict-adult-child-track — 노부모가 돌봄 가족(성인 자녀·요양보호사)에게 폭행 피해 → 노인학대처벌법 + 노인보호기관(1577-1389) 트랙. 기존 spousal-domestic-violence-cohabit / public-transit-elderly-victim 과 분기: "노인학대 + 가족 폭행 + 노인보호기관 + 형사·민사" 트랙.
// 2. assault-school-parent-teacher-classroom-track — 학부모가 학교 교실에서 교사에게 폭행 → 교권보호위 + 교원지위법 + 형사 트랙. 기존 school-parent-pta-fight 와 분기: "학부모 → 교사 + 교권보호위 + 교실 폭행 + 학교폭력법과 별도" 트랙. 교사가 victim.
// 3. assault-customer-store-clerk-late-night-track — 심야 편의점·식당 점원이 취객 고객에게 폭행 피해 → 사업주 안전배려의무 + 산재 결합 + 형사 트랙. 기존 stranger-random-attack-victim / pub-mutual-altercation 과 분기: "고객 → 점원 + 사업주 안전배려 + 산재 + 형사" 트랙.
// 4. dui-prescription-medication-side-effect-defense-track — 의사 처방 수면제·진정제·항우울제 복용 후 운전 → 음주측정 양성·단속, 약물 운전 평가 트랙. 기존 test-refusal-voluntary-surrender / second-offense-prison-avoidance 와 분기: "처방약 부작용 + 알코올 측정 양성 + 약물 운전 평가" 트랙. accused.

export const spokesBatch71AssaultDui: SpokePage[] = [
  // ─── 1. assault-elderly-parent-care-conflict-adult-child-track ───
  {
    domain: 'assault',
    slug: 'assault-elderly-parent-care-conflict-adult-child-track',
    keyword: '노부모 돌봄 가족 폭행 노인학대',
    questionKeyword: '같이 사는 성인 자녀가 돌봄 스트레스로 노부모를 밀치고 욕설했어요. 노인학대로 어떻게 신고하나요?',
    ctaKeyword: '노부모 폭행 노인학대 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '노부모 돌봄 폭행 — 5단계 노인학대 + 가족 폭행 분리 트랙 | 로앤가이드',
      description:
        '노부모가 돌봄 가족·요양보호사에게 폭행 피해를 입었다면 노인학대 신고 + 형사 5가지 분리 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"치매 초기인 80대 어머니를 모시고 사는 50대 아들이 \"왜 자꾸 같은 말을 하시냐\"며 화를 내다가 어깨를 강하게 밀쳐 벽에 부딪쳐 멍이 들고, 식사 도중 그릇을 던지며 욕설을 했어요. 어머니가 무서워하시는데 가족을 신고해도 되는지, 어디부터 정리해야 하는지 막막합니다." 노부모 돌봄 가족 폭행이라면 ① 형법 260조 폭행·257조 상해 + 노인복지법 39조의9 노인학대 ② 노인학대처벌법(직계존속 가중) ③ 노인보호전문기관 1577-1389 신고·분리 보호 ④ 가정폭력처벌법 임시조치·접근금지 ⑤ 형사 + 후견·민사 결합 5가지가 결합되는 영역. 판례 흐름상 직계존속 학대는 객체성·반복성·정서적 학대까지 포함해 신중 평가 영역이고, 노인학대는 즉시 신고의무자(요양보호사·의료진·사회복지사) 제도도 함께 작동. 대응은 ① 신고 ② 진단 ③ 분리 ④ 형사 ⑤ 후견·민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 노부모 돌봄 가족 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·진단·분리·형사·후견 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 노인보호전문기관 1577-1389·112 신고</strong></li>\n<li><strong>② 응급실·노인의학과 진단서·상처 사진</strong></li>\n<li><strong>③ 임시조치·시설 보호·분리 거주 검토</strong></li>\n<li><strong>④ 폭행·노인학대 형사 고소 (직계존속 가중)</strong></li>\n<li><strong>⑤ 성년후견·민사 손해배상 검토</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 노부모가 가해자가 가족이라 신고를 망설이는 환경이 일반이지만 노인보호전문기관·112는 가족 신고도 분리 보호 절차 작동. 직계비속 학대는 노인복지법상 가중 평가 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·자료·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 노인보호전문기관 1577-1389·112 신고 (즉시)</strong></li>\n<li><strong>2단계 — 응급실·노인의학과 진단서 (즉시~1주)</strong></li>\n<li><strong>3단계 — 임시조치·시설 보호 (가정폭력처벌법, 1~2주)</strong></li>\n<li><strong>4단계 — 폭행·노인학대 형사 고소 (1~3개월)</strong></li>\n<li><strong>5단계 — 성년후견·민사 손해배상 (3~12개월)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">노부모 돌봄 가족 폭행 분리 보호 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·진단·후견 갈래입니다.</strong></p>\n<ul>\n<li><strong>112·노인보호전문기관 신고 접수번호</strong></li>\n<li><strong>응급실·노인의학과 상해진단서·치료비</strong></li>\n<li><strong>가해자·피해자 가족관계증명서</strong></li>\n<li><strong>본인·목격자 진술서·녹취·상처 사진</strong></li>\n<li><strong>치매 진단서·장기요양등급·돌봄 기록</strong></li>\n<li><strong>이전 폭행·욕설 문자·메모·녹음</strong></li>\n<li><strong>요양보호사·사회복지사 진술서 (있을 경우)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 노인학대 신고는 노인보호전문기관 1577-1389 가 시설 보호·분리 거주 즉시 안내. 치매 진단이 있으면 본인 진술이 약해질 여지가 있어 객관 자료(사진·녹취·진단서) 확보가 핵심. 성년후견은 의사결정 보호 트랙.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>가족 신고 망설임</strong> — 분리 보호 작동 영역.</li>\n<li><strong>직계비속 가중</strong> — 노인복지법 평가.</li>\n<li><strong>치매 진술 약화</strong> — 객관 자료 결합 핵심.</li>\n<li><strong>돌봄 스트레스 변명</strong> — 양형 보조 정도.</li>\n<li><strong>요양보호사 학대</strong> — 신고의무자 제도.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>노인보호전문기관 1577-1389</strong></li>\n<li><strong>경찰청 112·여성가족부 1366</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 직계존속 학대 객체성·증명 정도',
        summary:
          '대법원 2025도12963(대법원, 2025.11.06 선고) 영역에서 법원은 존속학대·폭행·주거침입 등 결합 사건에서 직계존속 학대 객체성·구성요건·증명 정도에 관해 정리한 사례 흐름이 있습니다. 노부모가 돌봄 가족(직계비속)에게 폭행·정서적 학대를 받은 경우 노인복지법·형법 가중 평가 영역에 들어가는 흐름을 시사합니다. 객관 자료(진단서·사진·녹취) 결합이 핵심 평가 영역.',
        takeaway: '직계비속에 의한 노인학대는 가중 평가 영역. 진단·사진·녹취 객관 자료 결합 핵심. 노인보호전문기관 1577-1389 분리 보호 트랙.',
      },
    ],
    faq: [
      {
        question: '가족을 신고하면 가족관계가 깨지지 않나요?',
        answer:
          '<strong>노인보호전문기관·112 신고 시 분리 보호 우선이고 형사·민사 처분과 별개로 시설 보호·임시조치 트랙이 작동하는 영역입니다.</strong>',
      },
      {
        question: '치매가 있어도 신고할 수 있나요?',
        answer:
          '<strong>치매 진단이 있어도 객관 자료(사진·진단서·목격자)가 결합되면 사건 평가 영역에 들어갈 수 있고 성년후견인 도움도 검토 가능합니다.</strong>',
      },
      {
        question: '직계비속 폭행은 처벌이 더 무거운가요?',
        answer:
          '<strong>형법·노인복지법상 직계존속에 대한 학대·폭행은 가중 평가 영역이고 반복성·정서적 학대도 함께 검토되는 영역입니다.</strong>',
      },
      {
        question: '요양보호사가 학대했다면 어떻게 하나요?',
        answer:
          '<strong>요양보호사는 신고의무자 + 가해자 양쪽 평가 영역이고 시설·재택 구분 없이 노인보호전문기관 신고 절차가 일반입니다.</strong>',
      },
      {
        question: '돌봄 스트레스를 이유로 감경되나요?',
        answer:
          '<strong>돌봄 스트레스는 양형 보조 자료에 그치는 영역이고 반복성·상해 정도에 따라 처분 평가 영역이 달라질 여지가 있습니다.</strong>',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '노부모 가정폭력 보호', href: '/guide/assault/assault-elderly-parent-domestic-protect' },
      { label: '노인학대 시설 보호', href: '/guide/assault/assault-elderly-care-facility-abuse-track' },
      { label: '직계존속 가중 처벌', href: '/guide/assault/assault-domestic-ascendant-descendant-aggravated-no-prosecution' },
      { label: '요양보호사 학대', href: '/guide/assault/assault-elder-care-worker-patient-attacker-victim-track' },
      { label: '범죄피해자 지원', href: '/guide/assault/assault-victim-where-to-start' },
    ],
  },

  // ─── 2. assault-school-parent-teacher-classroom-track ───
  {
    domain: 'assault',
    slug: 'assault-school-parent-teacher-classroom-track',
    keyword: '학부모 교사 폭행 교권보호위',
    questionKeyword: '학부모가 학교 교실에 찾아와 자녀 일로 항의하다가 저(교사)를 밀쳤어요. 교권보호위와 형사 어떻게 같이 하나요?',
    ctaKeyword: '교사 학부모 폭행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '학부모 교사 폭행 — 5단계 교권보호위 + 형사 결합 트랙 | 로앤가이드',
      description:
        '교사가 학부모에게 교실에서 폭행 피해를 입었다면 교권보호위 + 형사 5가지 결합 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"방과 후 교실에 자녀 성적 문제로 찾아온 학부모가 갑자기 책상을 발로 차며 \"왜 우리 애만 못 봐주냐\"고 소리치다가 어깨를 손으로 강하게 밀쳐 칠판에 부딪쳐 허리가 결림이 생겼어요. 학교에 신고했더니 \"학교폭력은 학생 사이만이라 적용 안 된다\"고 안내받았고, 교권보호위와 형사를 같이 가야 한다는데 어디부터 정리해야 하는지 막막합니다." 학부모 교사 폭행이라면 ① 형법 260조 폭행·257조 상해 ② 교원지위법 15조 교육활동 침해 + 18조 교권보호위원회 ③ 교실 CCTV·동료 교사 진술·학생 진술 ④ 학교 신고 → 교권보호위 5일 내 ⑤ 형사 + 민사 + 학교폭력법과 별도 트랙 5가지가 결합되는 영역. 판례 흐름상 교육활동 중 폭행은 교원지위법 + 형법 동시 평가 영역이고 학교는 침해 행위 인지 후 즉시 교권보호위 소집 의무. 대응은 ① 신고 ② 진단 ③ 교권위 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 학부모 교사 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·진단·교권위·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 112 즉시 신고·학교 관리자 보고</strong></li>\n<li><strong>② 응급실·정형외과 진단서·치료비</strong></li>\n<li><strong>③ 교권보호위원회 5일 내 소집 요청</strong></li>\n<li><strong>④ 폭행·상해 형사 고소 (교원지위법 결합)</strong></li>\n<li><strong>⑤ 민사 손해배상·정신과 진료 비용</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 학교폭력은 학생 사이만 적용. 학부모 → 교사 폭행은 교원지위법(교육활동 침해) + 형법 동시 평가 영역. 교권보호위는 교사를 보호하는 별도 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·자료·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 112 신고·학교장 보고·동료 교사 진술 (즉시)</strong></li>\n<li><strong>2단계 — 응급실·정형외과 진단서 (즉시~1주)</strong></li>\n<li><strong>3단계 — 교권보호위원회 소집 요청 (침해 인지 후 5일 내)</strong></li>\n<li><strong>4단계 — 경찰 수사·형사 고소 (1~3개월)</strong></li>\n<li><strong>5단계 — 민사 손해배상·치료비 청구 (3~6개월)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의금과 대응 전략, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">학부모 교사 폭행 교권보호위 + 형사 결합 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·교권위·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>112 신고 접수번호·경찰 진술조서</strong></li>\n<li><strong>응급실·정형외과 상해진단서·치료비</strong></li>\n<li><strong>교실·복도 CCTV·녹음·녹화 자료</strong></li>\n<li><strong>동료 교사·학생 목격자 진술서</strong></li>\n<li><strong>교권보호위 소집 요청서·교육활동침해 보고서</strong></li>\n<li><strong>학부모-교사 사전 면담·문자·메일 기록</strong></li>\n<li><strong>정신과 진료기록·심리상담 자료 (있을 경우)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 학교폭력법은 학생 사이만 적용되어 학부모 → 교사는 교원지위법 + 형법 결합 트랙. 교권보호위는 학교에 5일 내 소집 의무 + 침해학생·학부모 조치 + 교사 보호 조치. 형사·민사와 별도 진행.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>학교폭력 vs 교권침해</strong> — 학생/학부모 구분.</li>\n<li><strong>교권보호위 소집</strong> — 5일 내 의무.</li>\n<li><strong>학교의 사건 축소</strong> — 직접 형사 고소 가능.</li>\n<li><strong>학부모 합의 압박</strong> — 분리 대응 검토.</li>\n<li><strong>특수폭행 가중</strong> — 책상·물건 사용 평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>교원치유지원센터 1588-7179</strong></li>\n<li><strong>한국교원단체총연합회 02-570-5500</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 교육활동 침해 폭행 형사·교권 결합 평가',
        summary:
          '대법원 2025도14142(대법원, 2025.11.27 선고) 영역에서 법원은 폭행·상해 결합 사건에서 폭행 행위의 객관성·반복성·피해자의 직무 관련성에 관해 정리한 사례 흐름이 있습니다. 학부모가 학교 교실에서 교사에게 폭행을 가한 경우 교원지위법상 교육활동 침해 + 형법상 폭행·상해 평가 영역에 들어가는 흐름을 시사합니다. 교권보호위는 형사와 별도 트랙으로 진행되는 영역.',
        takeaway: '교사 폭행은 교원지위법 + 형법 결합 평가 영역. 교권보호위 5일 내 소집 의무. 형사·민사 별개 트랙 동시 진행 가능.',
      },
    ],
    faq: [
      {
        question: '학부모가 교사를 폭행하면 학교폭력인가요?',
        answer:
          '<strong>학교폭력은 학생 사이만 적용되는 영역이고 학부모 → 교사 폭행은 교원지위법(교육활동 침해) + 형법 결합 평가 영역입니다.</strong>',
      },
      {
        question: '교권보호위는 언제까지 소집해야 하나요?',
        answer:
          '<strong>교원지위법상 학교가 침해 행위 인지 후 5일 내 소집이 일반 절차 영역이고 늦어지면 교육청 직접 요청 검토 가능합니다.</strong>',
      },
      {
        question: '학교가 사건을 축소하려고 합니다. 어떻게 하나요?',
        answer:
          '<strong>학교 보고와 별개로 직접 112 신고·형사 고소 가능 영역이고 교원치유지원센터·교원단체 상담도 권장됩니다.</strong>',
      },
      {
        question: '교실 CCTV가 없으면 어떻게 입증하나요?',
        answer:
          '<strong>동료 교사·학생 목격자 진술서 + 진단서 + 사전 문자·메일 기록 결합이 검토되는 영역이고 복도 CCTV도 보조 자료가 됩니다.</strong>',
      },
      {
        question: '정신과 치료비도 청구 가능한가요?',
        answer:
          '<strong>외상후 스트레스·불안장애 등 정신과 진료기록은 민사 손해배상 청구 자료 평가 영역이고 형사 양형 보조 자료로도 검토됩니다.</strong>',
      },
    ],
    cta: { text: '합의금과 대응 전략, AI로 확인하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '학부모 학교 PTA 폭행', href: '/guide/assault/assault-school-parent-pta-fight-track' },
      { label: '학교 사이버 폭력', href: '/guide/assault/assault-cyber-bullying-school-online-track' },
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '진단서 vs CCTV 우선', href: '/guide/assault/assault-medical-certificate-vs-cctv-evidence-priority' },
      { label: '범죄피해자 지원', href: '/guide/assault/assault-victim-where-to-start' },
    ],
  },

  // ─── 3. assault-customer-store-clerk-late-night-track ───
  {
    domain: 'assault',
    slug: 'assault-customer-store-clerk-late-night-track',
    keyword: '심야 편의점 점원 취객 폭행 산재',
    questionKeyword: '심야 편의점 알바 중 취객 손님에게 폭행당했어요. 사업주 책임과 산재 어떻게 같이 하나요?',
    ctaKeyword: '점원 취객 폭행 산재 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '심야 점원 취객 폭행 — 5단계 사업주 책임 + 산재 결합 트랙 | 로앤가이드',
      description:
        '심야 편의점·식당 점원이 취객 고객에게 폭행 피해를 입었다면 사업주 안전배려 + 산재 + 형사 5가지 결합 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"새벽 2시 편의점에서 혼자 야간 알바 중인데, 술 취한 손님이 \"왜 술을 안 파냐\"며 시비를 걸다가 갑자기 카운터를 넘어와 멱살을 잡고 어깨를 강하게 밀쳐 진열대에 부딪쳐 갈비뼈가 결림이 생겼어요. 점주는 \"손님 책임\"이라며 산재 신청도 망설이는데 어디부터 정리해야 하는지 막막합니다." 심야 점원 취객 폭행이라면 ① 형법 260조 폭행·257조 상해 ② 산업안전보건법 41조 고객응대근로자 보호조치 ③ 산재보험법 업무상 재해 (제3자 폭행도 업무 관련성 시 인정) ④ 사업주 안전배려의무 위반 손해배상 ⑤ 형사 + 민사 + 산재 3트랙 결합 5가지가 결합되는 영역. 판례 흐름상 업무 중 제3자 폭행은 업무 관련성 평가 시 산재 인정 영역이고, 사업주는 고객응대근로자 보호 의무(예방조치·치료 지원·휴게 보장). 대응은 ① 신고 ② 진단 ③ 산재 ④ 형사 ⑤ 사업주 청구 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 심야 점원 취객 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·진단·산재·형사·사업주 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 112 즉시 신고·매장 CCTV 보전</strong></li>\n<li><strong>② 응급실·정형외과 진단서·치료비</strong></li>\n<li><strong>③ 근로복지공단 산재 신청 (업무상 재해)</strong></li>\n<li><strong>④ 폭행·상해 형사 고소 (취객 가해자)</strong></li>\n<li><strong>⑤ 사업주 안전배려 위반 손해배상 검토</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 업무 중 제3자 폭행은 산재 평가 영역. 사업주는 산업안전보건법상 고객응대근로자 보호 의무 + 안전배려의무. 형사(가해자) + 산재(국가보험) + 민사(사업주) 3트랙 결합.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·자료·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 112 신고·매장 CCTV 자료보전 (즉시)</strong></li>\n<li><strong>2단계 — 응급실·산재 지정병원 진단서 (즉시~1주)</strong></li>\n<li><strong>3단계 — 근로복지공단 산재 신청 (1~3개월)</strong></li>\n<li><strong>4단계 — 폭행·상해 형사 고소 (1~3개월)</strong></li>\n<li><strong>5단계 — 사업주 손해배상·치료비 청구 (3~6개월)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">심야 점원 취객 폭행 산재 + 형사 결합 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·산재·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>112 신고 접수번호·경찰 진술조서</strong></li>\n<li><strong>매장·외부 CCTV 자료보전 요청서</strong></li>\n<li><strong>응급실·산재 지정병원 진단서·치료비</strong></li>\n<li><strong>근로계약서·근무일지·시급·근무시간</strong></li>\n<li><strong>산재 요양급여 신청서·재해 경위서</strong></li>\n<li><strong>사업주에게 보낸 사고 보고·문자 기록</strong></li>\n<li><strong>고객응대근로자 보호조치 미이행 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 산재는 사업주 동의 없이도 본인 직접 신청 가능 영역. 산재 인정 시 치료비·휴업급여 국가가 지원. 사업주가 안전배려·보호조치 미이행했다면 산재와 별도로 손해배상 청구 트랙. 매장 CCTV 는 1~2주 안 자료보전 필수.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>제3자 폭행 산재 인정</strong> — 업무 관련성 핵심.</li>\n<li><strong>사업주 안전배려</strong> — 보호조치 평가.</li>\n<li><strong>심야 1인 근무</strong> — 보호 의무 평가.</li>\n<li><strong>가해자 무자력</strong> — 산재 우선 검토.</li>\n<li><strong>3트랙 동시 진행</strong> — 형사·산재·민사.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>근로복지공단 1588-0075</strong></li>\n<li><strong>고용노동부 1350</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 업무 중 제3자 폭행 가중·평가 영역',
        summary:
          '대법원 2025도11886(대법원, 2025.10.30 선고) 영역에서 법원은 폭행·상해 결합 사건에서 가해 강도·반복성·피해자 직무 상황에 관해 정리한 사례 흐름이 있습니다. 심야 편의점·식당에서 점원이 고객에게 폭행을 당한 경우 업무 관련성 + 사업주 보호조치 미이행이 평가 영역에 들어가는 흐름을 시사합니다. 산재 + 형사 + 민사 별개 트랙으로 진행되는 영역.',
        takeaway: '업무 중 제3자 폭행은 산재 + 형사 + 민사 3트랙 결합 평가 영역. 사업주 안전배려·고객응대근로자 보호조치 핵심 평가. CCTV 시간 자료보전 필수.',
      },
    ],
    faq: [
      {
        question: '취객 손님에게 맞은 것도 산재가 되나요?',
        answer:
          '<strong>업무 중 제3자 폭행은 업무 관련성 평가 영역에 들어갈 소지가 있고 근로복지공단 산재 신청 절차로 검토되는 영역입니다.</strong>',
      },
      {
        question: '점주가 산재 신청을 막아도 되나요?',
        answer:
          '<strong>산재는 사업주 동의 없이도 본인이 직접 근로복지공단에 신청 가능한 영역이고 방해 시 처벌 평가 영역에 들어갈 소지가 있습니다.</strong>',
      },
      {
        question: '심야 1인 근무 자체가 위법인가요?',
        answer:
          '<strong>심야 1인 근무는 산업안전보건법상 보호조치 강화 평가 영역이고 사업주 안전배려의무 위반 시 손해배상 검토 가능합니다.</strong>',
      },
      {
        question: '가해자가 무자력이면 보상받기 어려운가요?',
        answer:
          '<strong>가해자 무자력 시에도 산재(국가보험)는 별도 지원 영역이고 사업주 안전배려 위반 시 손해배상 트랙도 검토 가능합니다.</strong>',
      },
      {
        question: '형사·산재·민사 동시에 진행해도 되나요?',
        answer:
          '<strong>3트랙 모두 별개 절차로 동시 진행 가능한 영역이고 가해자 형사 + 국가 산재 + 사업주 민사로 권리 분리 평가됩니다.</strong>',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '낯선 사람 무작위 폭행', href: '/guide/assault/assault-stranger-random-attack-victim-track' },
      { label: '직장 회식 동료 폭행', href: '/guide/assault/assault-workplace-drinking-coworker-track' },
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '진단서 vs CCTV 우선', href: '/guide/assault/assault-medical-certificate-vs-cctv-evidence-priority' },
      { label: '범죄피해자 지원', href: '/guide/assault/assault-victim-where-to-start' },
    ],
  },

  // ─── 4. dui-prescription-medication-side-effect-defense-track ───
  {
    domain: 'dui',
    slug: 'dui-prescription-medication-side-effect-defense-track',
    keyword: '처방약 부작용 음주측정 양성 약물운전',
    questionKeyword: '의사 처방 수면제 먹고 운전했는데 음주측정에서 알코올 양성 나왔어요. 처방약 부작용 어떻게 다투나요?',
    ctaKeyword: '처방약 음주측정 양성 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '처방약 운전 음주측정 양성 — 5단계 약물 운전 분리 다툼 트랙 | 로앤가이드',
      description:
        '의사 처방 수면제·진정제·항우울제 복용 후 운전하다 단속됐다면 5가지 처방 사실관계·약물 운전 평가 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"불면증으로 의사 처방 수면제를 복용한 다음 날 아침 출근길에 운전을 했는데, 갑작스러운 음주 단속에서 알코올 측정기에 양성 반응이 나왔어요. 본인은 술을 안 마셨다고 주장하지만 처방약(수면제·항우울제)이 알코올 측정기·혈중농도에 영향을 줬을 가능성을 어디부터 다퉈야 하는지 막막합니다." 처방약 음주측정 양성 혐의를 받고 있다면 ① 도로교통법 44조 1항 음주운전 vs 45조 약물운전 ② 알코올 측정기 양성·혈액검사 정확성 ③ 처방전·복약지도·의사 소견서로 처방 사실관계 입증 ④ 약물 운전 평가 (정상운전 곤란 상태 평가) ⑤ 형사 + 행정심판 90일 별도 트랙 5가지가 결합되는 영역. 처방약 일부(수면제·진정제·항우울제)는 알코올 성분 또는 측정기 오작동 여지가 있고, 처방 사실관계 입증할 수 있다면 약물 운전 평가 영역으로 분리될 가능성. 대응은 ① 자료 ② 변호인 ③ 진술 ④ 행정심판 ⑤ 양형 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 처방약 음주측정 양성 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 혐의를 받고 있다면 자료·변호·진술·행정·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 처방전·약품 설명서·의사 소견서 확보</strong></li>\n<li><strong>② 혈액검사·재측정 요청 (정확도 핵심)</strong></li>\n<li><strong>③ 변호인 상담·약물 운전 평가 검토</strong></li>\n<li><strong>④ 경찰·검찰 진술 (음주 vs 약물 분리)</strong></li>\n<li><strong>⑤ 행정심판 90일·양형 자료 준비</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 음주측정기 양성은 일부 처방약(알코올 함유 시럽·구강세정제)에도 반응할 여지. 혈액검사가 더 정확한 영역. 약물 운전은 정상운전 곤란 상태 평가 영역으로 음주운전과 별도 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료·다툼·양형 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 처방전·약품·의사 소견서 확보 (즉시~1주)</strong></li>\n<li><strong>2단계 — 혈액검사·재측정 결과 확인 (1~2주)</strong></li>\n<li><strong>3단계 — 변호인 상담·진술 전략 (1~2주)</strong></li>\n<li><strong>4단계 — 경찰·검찰 진술 (1~3개월)</strong></li>\n<li><strong>5단계 — 행정심판 90일·공판·양형 (별도 트랙)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">처방약 부작용 음주측정 양성 분리 다툼 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 처방·검사·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>처방전·복약지도서·약품 설명서</strong></li>\n<li><strong>의사 소견서 (처방 사유·부작용·운전 영향)</strong></li>\n<li><strong>약국 영수증·약품 구입 내역</strong></li>\n<li><strong>음주측정 결과지·혈액검사 결과</strong></li>\n<li><strong>본인 운전면허 기록·전과·초범 자료</strong></li>\n<li><strong>탄원서·반성문·생계자료 (양형용)</strong></li>\n<li><strong>행정심판 청구서·면허처분 결정문</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 처방 사실관계 입증할 수 있다면 알코올 측정기 오작동·약물 운전 분리 평가 영역으로 검토 가능. 혈액검사가 호흡 측정보다 정확한 영역이라 재측정 요청 권장. 의사 소견서는 약물의 알코올 측정기 반응 여지·운전 영향 평가 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>음주측정기 오작동</strong> — 처방약 반응 여지.</li>\n<li><strong>혈액검사 우선</strong> — 정확도 핵심.</li>\n<li><strong>음주 vs 약물 분리</strong> — 별도 평가 영역.</li>\n<li><strong>처방 사실관계</strong> — 의사 소견서 결정.</li>\n<li><strong>형사·행정 분리</strong> — 90일 트랙.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>도로교통공단 1577-1120</strong></li>\n<li><strong>중앙행정심판위원회 110</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주측정 결과의 증명력 평가 영역',
        summary:
          '대법원 2025도6752(대법원, 2025.12.11 선고) 영역에서 법원은 음주측정 요구·결과의 증명력에 관해 수사기관이 위법행위를 확인하는 임의수사 적법성·측정 절차 정확성에 관해 정리한 사례 흐름이 있습니다. 음주운전 혐의를 받고 있다면 측정기 정확성·혈액검사 우선·약물 영향 평가 영역이 별도로 검토되는 흐름을 시사합니다. 처방약 부작용 입증 시 약물 운전 분리 평가 가능 영역.',
        takeaway: '음주측정 결과 증명력은 측정 절차·정확성 평가 영역. 처방약 부작용 입증 시 약물 운전 분리 평가 가능 영역. 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '의사 처방약 먹고 운전하면 음주운전인가요?',
        answer:
          '<strong>음주운전 혐의를 받고 있다면 알코올 함유 처방약 또는 측정기 오작동 여지가 있고 처방 사실관계·혈액검사 결과로 다툼 가능 영역입니다.</strong>',
      },
      {
        question: '수면제·진정제 복용 후 운전은 약물운전인가요?',
        answer:
          '<strong>도로교통법 45조 약물운전은 정상운전 곤란 상태 평가 영역이고 처방약 단독 복용 + 정상운전 가능 시 평가 영역에 들어가지 않을 여지가 있습니다.</strong>',
      },
      {
        question: '혈액검사 다시 요청할 수 있나요?',
        answer:
          '<strong>음주측정 결과 이의 시 혈액검사 요청은 일반 절차 영역이고 호흡 측정보다 정확도가 높은 영역이라 변호인 통해 권장됩니다.</strong>',
      },
      {
        question: '처방전을 잃어버렸으면 어떻게 하나요?',
        answer:
          '<strong>약국·병원 처방 기록은 재발급 가능 영역이고 건강보험심사평가원 진료내역 조회로 복약 이력 확인 검토 가능합니다.</strong>',
      },
      {
        question: '면허 취소는 어떻게 다투나요?',
        answer:
          '<strong>처분일로부터 90일 행정심판 별도 트랙 영역이고 처방 사실관계·생계자료·반성 자료 결합 제출이 검토됩니다.</strong>',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '감기약 음주측정 방어', href: '/guide/dui/dui-medication-cold-medicine-affirmative-defense-track' },
      { label: '음주측정 거부 자진출두', href: '/guide/dui/dui-test-refusal-voluntary-surrender-criminal-administrative-track' },
      { label: '음주측정기 위드마크', href: '/guide/dui/dui-after-driving-drank-widmark-counter' },
      { label: '행정심판 90일 감경', href: '/guide/dui/dui-administrative-trial-90day-mitigation' },
      { label: '음주운전 첫 대응', href: '/guide/dui/dui-caught-where-to-start' },
    ],
  },
];
