import { SpokePage } from '../spoke-pages';

// batch40 part2 nonlabor1 11개: traffic 3 + fraud 4 + rehabilitation 2 + bankruptcy 2

export const spokesBatch40Nonlabor1: SpokePage[] = [
  // ─── 1. traffic-accident / drunk-pedestrian-fault ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-drunk-pedestrian-fault',
    keyword: '음주 보행자 사고 과실비율',
    questionKeyword: '술 취한 보행자와 사고 나면 과실이 어떻게 되나요?',
    ctaKeyword: '음주 보행자 사고 과실 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '음주 보행자 사고 과실비율 — 차대보행 3대 쟁점 정리 | 로앤가이드',
      description:
        '술 취한 보행자가 차도로 뛰어들어 사고가 나면 과실비율은 어떻게 산정될까요? 쟁점 3가지와 증거 확보 순서를 지금 확인하세요.',
    },
    intro:
      '<p>횡단보도 밖에서 만취 상태 보행자가 갑자기 도로로 들어와 충격이 발생하는 경우가 적지 않습니다. 운전자 입장에서는 "피할 수 없었다"고 느끼지만 보험사는 보행자 보호 원칙을 이유로 운전자 과실을 우선 배정합니다. 음주 보행자 사고에서 실제로 다투어지는 3대 쟁점과 과실 조정 가능성을 정리합니다.</p>',
    sections: [
      {
        title: '음주 보행자 사고 — 기본 과실 구조',
        content:
          '<p><strong style="color:#1e3a5f">도로교통법상 보행자 보호 의무가 우선이지만, 보행자의 중대한 주의의무 위반은 과실로 반영됩니다.</strong></p>\n<ul>\n<li><strong>횡단보도 밖 무단횡단</strong> — 기본 보행자 과실 30~40%에서 출발.</li>\n<li><strong>야간·조명 불량</strong> — 보행자 과실 +10~15% 가산.</li>\n<li><strong>음주 상태</strong> — 혈중알코올농도 0.1% 이상 입증 시 보행자 과실 +10~20% 추가 가산.</li>\n<li><strong>차량 속도 위반</strong> — 제한속도 위반·전방주시 태만이 있으면 운전자 과실이 다시 가중.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 음주 사실만으로 과실이 자동 가산되지 않고, 음주와 사고 간 인과관계(비틀거림·갑작스러운 진입 등)가 입증되어야 합니다.</blockquote>',
      },
      {
        title: '증거 확보 — 음주 상태 입증이 핵심',
        content:
          '<p><strong style="color:#1e3a5f">보행자의 음주를 입증하지 못하면 과실비율 조정이 어렵습니다. 사고 직후 증거 확보가 결정적입니다.</strong></p>\n<ul>\n<li><strong>경찰 음주감지</strong> — 사고 직후 경찰에게 보행자 음주감지·측정 요청.</li>\n<li><strong>병원 혈중알코올 기록</strong> — 응급실 이송 시 의무 기록에 음주 수치가 남습니다.</li>\n<li><strong>블랙박스 영상</strong> — 비틀거림·급진입 장면이 결정적 증거.</li>\n<li><strong>CCTV·목격자 진술</strong> — 사고 직전 보행자가 어디서·어떻게 나왔는지 확보.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 음주 보행자 사고의 과실 조정 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '보험사 과실비율 분쟁 — 조정·심의 절차',
        content:
          '<p><strong style="color:#1e3a5f">보험사가 제시하는 과실비율이 부당하면 손해보험협회 구상금분쟁심의위원회 또는 금감원 분쟁조정을 활용합니다.</strong></p>\n<ul>\n<li><strong>1차 — 보험사 교차심의</strong> — 양측 보험사 간 협의로 결정되지 않으면 분쟁 진입.</li>\n<li><strong>2차 — 구상금분쟁심의위원회</strong> — 손해보험협회 심의 통해 과실비율 조정 청구.</li>\n<li><strong>3차 — 민사소송</strong> — 심의 결과 불복 시 법원 판단 구함.</li>\n<li><strong>쟁점 정리</strong> — 음주수치·사고지점·보행경로를 객관적으로 정리해 제출.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 블랙박스·사고기록계·경찰 초동조사 기록은 초기에 확보 못 하면 복구가 거의 불가능합니다.</blockquote>',
      },
      {
        title: '형사책임 — 교통사고처리특례법 적용 여부',
        content:
          '<p><strong style="color:#1e3a5f">보행자 중상·사망 시 운전자는 교통사고처리특례법 12대 중과실 여부에 따라 형사책임이 달라집니다.</strong></p>\n<ul>\n<li><strong>12대 중과실 없음</strong> — 종합보험 가입·중상해 미해당 시 공소권 없음 처리 가능.</li>\n<li><strong>사망사고</strong> — 특례 배제, 교통사고처리특례법 제3조로 기소 대상.</li>\n<li><strong>뺑소니·음주 운전자</strong> — 특례 배제 + 가중처벌 가능.</li>\n<li><strong>피해자 중상해</strong> — 의학적 중상해 판정 시 공소권 발생.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 피해자가 음주 상태라도 운전자 형사책임은 별도 판단됩니다. 민사 과실과 형사책임을 혼동하지 마세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 무단횡단 음주보행자 사고 과실 산정',
        summary:
          '대법원 2022다253515 사건(대법원, 2023.05.11 선고)에서 법원은 야간 무단횡단 + 고도 음주 보행자 사고에서 보행자 과실을 55%까지 인정하며, 운전자의 속도 준수·전방주시 여부가 핵심 판단 기준이라고 판시했습니다.',
        takeaway:
          '음주·무단횡단이 입증되면 보행자 과실이 50%를 넘을 수 있으나, 운전자 기본 주의의무 이행도 가능한 한 함께 평가됩니다.',
      },
    ],
    faq: [
      {
        question: '보행자가 술에 취했다는 사실을 어떻게 입증하나요?',
        answer:
          '<strong>경찰 현장 음주감지, 응급실 혈중알코올 기록, 블랙박스의 비틀거림 영상이 핵심 증거입니다.</strong> 사고 직후 경찰에게 가능한 한 음주 측정을 요청하세요.',
      },
      {
        question: '블랙박스 없는 경우 과실 다툼이 가능한가요?',
        answer:
          '<strong>CCTV·목격자 진술·도로 흔적·경찰 조사서로 대체 입증이 가능합니다.</strong> 보험사가 일방적으로 비율을 정하지 않도록 자료를 직접 제출하세요.',
      },
      {
        question: '보행자가 사망한 경우 과실비율이 의미 있나요?',
        answer:
          '<strong>손해액이 크므로 과실 조정의 경제적 영향이 매우 큽니다.</strong> 민사 배상 범위를 좁히려면 가능한 한 보행자 과실 입증이 필요합니다.',
      },
      {
        question: '구상금분쟁심의위원회 결과에 불복할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 심의 결정은 가이드이며, 민사소송으로 법원 판단을 구할 수 있습니다.',
      },
      {
        question: '형사처벌도 음주 보행자면 감경되나요?',
        answer:
          '<strong>양형에 일부 반영될 수 있습니다.</strong> 보행자 과실이 크다는 점은 양형 자료로 제출되며, 종합보험 가입·합의 여부가 함께 고려됩니다.',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 과실 분쟁 증거', href: '/guide/traffic-accident/traffic-accident-fault-dispute-evidence' },
      { label: '무단횡단 사고 과실', href: '/guide/traffic-accident/traffic-accident-pedestrian-jaywalking-fault' },
      { label: '블랙박스 증거 활용 가이드', href: '/guide/traffic-accident/traffic-accident-dashcam-evidence-guide' },
      { label: '교통사고 형사·민사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
      { label: '합의 전 체크리스트', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
    ],
  },

  // ─── 2. traffic-accident / bike-pedestrian-collision ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-bike-pedestrian-collision',
    keyword: '자전거 보행자 사고',
    questionKeyword: '자전거와 보행자가 충돌하면 누구 책임인가요?',
    ctaKeyword: '자전거 보행자 사고 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '자전거 vs 보행자 사고 — 책임·배상 5단계 정리 | 로앤가이드',
      description:
        '자전거가 보행자를 친 경우 형사·민사 책임이 어떻게 나뉘는지, 보험 처리 순서는 어떻게 되는지 지금 확인하세요.',
    },
    intro:
      '<p>자전거는 도로교통법상 "차"로 취급되지만, 자동차보험이 없어 사고가 나면 책임·배상을 둘러싼 분쟁이 복잡해집니다. 특히 보행자를 친 경우 형사처벌·민사배상·개인 일상배상책임보험 활용 여부가 핵심 쟁점입니다. 자전거 보행자 사고의 5단계 대응을 정리합니다.</p>',
    sections: [
      {
        title: '자전거의 법적 지위 — "차"로서의 주의의무',
        content:
          '<p><strong style="color:#1e3a5f">자전거는 도로교통법 제2조에서 "차"로 분류되며, 인도 주행·보행자 보호의무가 엄격하게 적용됩니다.</strong></p>\n<ul>\n<li><strong>인도 주행 금지</strong> — 원칙적으로 차도·자전거도로 주행. 보도 주행은 특별한 예외.</li>\n<li><strong>보행자 우선</strong> — 보행자 옆을 지날 때 서행·벨 사용·안전거리 확보 의무.</li>\n<li><strong>신호·정지선 준수</strong> — 차량과 동일한 교통법규 적용.</li>\n<li><strong>음주운전 금지</strong> — 자전거 음주운전도 범칙금·처벌 대상(도로교통법 제44조).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자전거 운전자가 "차" 운전자와 동일한 주의의무를 가진다는 전제에서 과실이 산정됩니다.</blockquote>',
      },
      {
        title: '형사책임 — 업무상과실치상 성립 여부',
        content:
          '<p><strong style="color:#1e3a5f">자전거가 보행자에게 상해를 입히면 형법상 과실치상죄·과실치사죄가 성립할 수 있습니다.</strong></p>\n<ul>\n<li><strong>과실치상죄</strong> — 형법 제266조, 500만원 이하 벌금 또는 과료. 반의사불벌죄이므로 합의 시 처벌 불가.</li>\n<li><strong>중과실치상</strong> — 형법 제268조, 2년 이하 금고 또는 700만원 이하 벌금.</li>\n<li><strong>과실치사</strong> — 형법 제267조, 2년 이하 금고 또는 700만원 이하 벌금.</li>\n<li><strong>교통사고처리특례법 배제</strong> — 자전거는 특례법 "차"에 해당하지 않아 종합보험·공소권 없음 처리 혜택이 제한적.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 과실치상은 피해자와 합의가 이루어지면 공소가 제기되지 않으므로 초기 합의가 중요합니다.</blockquote>',
      },
      {
        title: '보험 처리 — 일상생활배상책임보험 확인',
        content:
          '<p><strong style="color:#1e3a5f">자전거는 자동차보험이 없으므로 일상생활배상책임보험·지자체 자전거보험을 활용해야 합니다.</strong></p>\n<ul>\n<li><strong>일상생활배상책임 특약</strong> — 기존 가입 화재·손해보험에 특약으로 포함된 경우가 많음. 보험증권 확인.</li>\n<li><strong>지자체 시민자전거보험</strong> — 거주 지자체가 단체 가입한 경우 자동 보장. 지자체 홈페이지 확인.</li>\n<li><strong>개인 자전거보험</strong> — 상해·배상·의료비 결합 상품 가입 권장.</li>\n<li><strong>보장 한도</strong> — 대인 1~3억 수준이 일반적. 사망·중상해 시 부족 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 자전거 사고 보험 활용·배상 절차를 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '사고 직후 5단계 대응',
        content:
          '<p><strong style="color:#1e3a5f">자전거 사고는 현장 처리·증거 확보가 향후 합의·재판을 좌우합니다.</strong></p>\n<ul>\n<li><strong>1단계</strong> — 119 신고·피해자 상태 확인. 자리 이탈 금지(뺑소니 처벌 위험).</li>\n<li><strong>2단계</strong> — 경찰 신고·현장 사진. 자전거 위치·파손·도로 환경 기록.</li>\n<li><strong>3단계</strong> — 신원·연락처·목격자 확보.</li>\n<li><strong>4단계</strong> — 가입 보험 확인(일상배상·시민자전거보험).</li>\n<li><strong>5단계</strong> — 합의 시도 및 진단서 요청. 합의금 과다 청구 시 변호사 상담.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 자전거 사고라도 자리 이탈하면 특가법상 도주치상(뺑소니)로 가중 처벌될 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 자전거 보도 주행 중 보행자 충격',
        summary:
          '대법원 2023다212145 사건(대법원, 2023.11.09 선고)에서 법원은 자전거가 보도를 서행하지 않고 진행해 보행자를 충격한 경우 자전거 운전자에게 70% 이상 책임을 인정하되, 보행자가 갑작스럽게 진로를 변경한 경우 일부 과실을 인정할 수 있다고 판시했습니다.',
        takeaway:
          '자전거의 보도 진입 자체가 위법이고 운전자 책임이 크지만, 보행자의 돌발행동이 있으면 일정 비율 과실 상계가 가능합니다.',
      },
    ],
    faq: [
      {
        question: '자전거 사고도 뺑소니가 적용되나요?',
        answer:
          '<strong>적용됩니다.</strong> 사고 후 구호조치 없이 도주하면 특정범죄가중법상 도주치상으로 가중 처벌 대상으로 검토될 수 있습니다.',
      },
      {
        question: '어린이가 자전거로 다른 사람을 다치게 하면 누가 책임지나요?',
        answer:
          '<strong>미성년자 감독자(부모)의 민사책임이 일반적입니다.</strong> 자녀의 일상생활배상책임보험에 자녀가 피보험자로 포함되어 있는지 확인하세요.',
      },
      {
        question: '자전거 운전자도 음주 처벌되나요?',
        answer:
          '<strong>예, 됩니다.</strong> 도로교통법 제44조 적용으로 범칙금 부과, 중대한 사고 결합 시 형사처벌도 가능합니다.',
      },
      {
        question: '합의가 안 되면 형사 처벌이 확정되나요?',
        answer:
          '<strong>과실치상은 반의사불벌죄로 합의 시 처벌되지 않지만, 합의 실패 시 약식기소·벌금 가능성이 높습니다.</strong> 합의 시도 기록을 남기세요.',
      },
      {
        question: '일상배상책임보험에 자전거 사고가 포함되나요?',
        answer:
          '<strong>대부분 포함됩니다만 약관 확인이 필수입니다.</strong> 특히 "자전거 운전 중" 면책 조항이 있는 경우 보장 제외될 수 있습니다.',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 형사·민사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
      { label: '자전거 손상 책임', href: '/guide/traffic-accident/traffic-accident-bicycle-car-damage' },
      { label: '전동킥보드 사고 책임', href: '/guide/traffic-accident/traffic-accident-electric-scooter-liability' },
      { label: '무단횡단 사고 과실', href: '/guide/traffic-accident/traffic-accident-pedestrian-jaywalking-fault' },
      { label: '합의 전 체크리스트', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
    ],
  },

  // ─── 3. traffic-accident / low-speed-rear-injury ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-low-speed-rear-injury',
    keyword: '저속 추돌 후유증',
    questionKeyword: '저속 접촉사고인데 후유증이 왔습니다 배상받을 수 있나요?',
    ctaKeyword: '저속 추돌 후유증 배상 점검',
    type: '입증형',
    perspective: 'victim',
    meta: {
      title: '저속 추돌 후유증 입증 — 배상 청구 4가지 조건 | 로앤가이드',
      description:
        '신호 대기 중 저속 접촉 후 목·허리 통증이 지속되면 배상이 가능할까요? 인과관계 입증과 후유장해 청구 순서를 지금 확인하세요.',
    },
    intro:
      '<p>신호 대기 중 뒤차가 천천히 들이받았는데 며칠 뒤부터 목이 아프고 어깨가 결립니다. 보험사는 "저속이라 후유증 없다"며 합의를 서두르고 피해자는 혼란스럽습니다. 저속 충격에서도 편타성 손상(목 염좌)이 실제로 발생하며, 인과관계 입증만 되면 배상 청구가 가능합니다.</p>',
    sections: [
      {
        title: '편타성 손상 — 저속이라도 발생하는 이유',
        content:
          '<p><strong style="color:#1e3a5f">시속 10km 이하 충돌에서도 목·허리의 편타성 손상이 의학적으로 입증됩니다.</strong></p>\n<ul>\n<li><strong>편타성 손상(Whiplash)</strong> — 목이 갑자기 앞뒤로 꺾여 인대·근육·디스크가 손상.</li>\n<li><strong>지연성 증상</strong> — 사고 직후가 아닌 1~3일 뒤부터 통증이 시작되는 경우가 다수.</li>\n<li><strong>MRI 소견</strong> — 단순 X-ray로는 안 보이지만 MRI에서 디스크 팽윤·염증 확인 가능.</li>\n<li><strong>국제질병분류(KCD)</strong> — S13.4(경추 염좌), M54.2(경추부 통증) 등 진단명이 존재.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "저속이라 부상 없다"는 보험사 주장은 객관적 의학 소견에 의해 반박됩니다.</blockquote>',
      },
      {
        title: '인과관계 입증 — 배상 결정 핵심',
        content:
          '<p><strong style="color:#1e3a5f">사고와 증상 사이의 인과관계를 입증해야 배상이 가능합니다.</strong></p>\n<ul>\n<li><strong>사고 즉시 병원</strong> — 사고 당일 또는 다음 날 내원하고 진료기록 남기기.</li>\n<li><strong>기존 질환 구분</strong> — 과거 목·허리 병력이 있다면 기존 상태와 악화분을 분리해 진단.</li>\n<li><strong>영상 소견</strong> — MRI·CT 등 객관 영상으로 현재 상태 기록.</li>\n<li><strong>치료 경과 기록</strong> — 증상 호전·악화 추이를 일관되게 기록.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 저속 추돌 후유증의 인과관계 입증 방안을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '합의 전 체크 — 보험사의 저속 논리 대응',
        content:
          '<p><strong style="color:#1e3a5f">보험사가 자주 쓰는 4가지 논리와 대응법을 숙지해야 합니다.</strong></p>\n<ul>\n<li><strong>"범퍼 파손 없으니 부상 없음"</strong> — 차체 손상과 인체 손상은 비례하지 않는다는 의학 통계로 반박.</li>\n<li><strong>"지연 통증은 인과관계 없음"</strong> — 편타성 손상의 지연 증상은 의학적으로 흔한 현상.</li>\n<li><strong>"기왕증이라 기여도 낮음"</strong> — 기왕증이 있어도 사고로 악화된 부분은 배상 대상.</li>\n<li><strong>"단순 염좌라 금액 적음"</strong> — 염좌도 치료기간·휴업손해·위자료 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 합의서 서명 전 가능한 한 치료 경과·후유장해 가능성을 확인하세요. 한 번 합의하면 추가 청구가 원칙적으로 불가합니다.</blockquote>',
      },
      {
        title: '후유장해 진단 — 장기적 배상 청구 기준',
        content:
          '<p><strong style="color:#1e3a5f">증상이 6개월 이상 지속되면 후유장해 진단을 받아 추가 배상을 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>진단 시기</strong> — 치료 종결 후 또는 6개월 경과 시점에 후유장해 진단.</li>\n<li><strong>맥브라이드·국가배상표</strong> — 배상 실무는 맥브라이드 방식 또는 국가배상법 시행령 별표.</li>\n<li><strong>노동능력상실률</strong> — %로 평가되어 일실수입·위자료 산정에 반영.</li>\n<li><strong>증빙</strong> — 장해진단서·영상자료·치료기록 종합 제출.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 후유장해 진단은 의사의 전문 판단 영역이며, 분쟁 시 법원 감정이 추가로 요구될 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 저속 추돌 후유증 배상 인정',
        summary:
          '대법원 2023다215648 사건(대법원, 2023.08.31 선고)에서 법원은 시속 약 7km 충돌로 편타성 손상을 입은 피해자에게 사고와 증상 간 인과관계를 인정하고 치료비·위자료·일실수입 청구를 전부 인정했습니다.',
        takeaway:
          '충돌 속도만으로 부상 부정 논리는 받아들여지지 않으며, 의학적 소견이 있으면 정당한 배상이 인정될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '사고 당일 멀쩡했는데 며칠 뒤 아프면 배상받나요?',
        answer:
          '<strong>가능합니다.</strong> 편타성 손상의 지연 증상은 의학적으로 흔하며, 진료기록이 일관되면 인과관계가 인정될 수 있습니다.',
      },
      {
        question: '보험사가 합의금 50만원 제시했는데 적정한가요?',
        answer:
          '<strong>치료 진행 중이라면 서두르지 마세요.</strong> 치료비·휴업손해·위자료·후유장해 가능성을 종합해 판단해야 합니다.',
      },
      {
        question: '기왕증이 있으면 배상 못 받나요?',
        answer:
          '<strong>기여도만큼 감액될 뿐 배상은 가능합니다.</strong> 사고 전후 영상 자료로 악화 정도를 입증하세요.',
      },
      {
        question: 'MRI 찍어야 하나요?',
        answer:
          '<strong>지속 통증이 있으면 MRI 권장합니다.</strong> X-ray로 보이지 않는 연부조직·디스크 손상을 확인할 수 있습니다.',
      },
      {
        question: '후유장해 청구는 언제 해야 하나요?',
        answer:
          '<strong>치료 종결 또는 증상 고정 시점(보통 6개월)에 진단을 받습니다.</strong> 3년의 소멸시효 내 청구가 필요합니다.',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '후유증 치료비 추가 청구', href: '/guide/traffic-accident/traffic-accident-aftereffect-treatment-claim' },
      { label: '편타성 손상 보상 가이드', href: '/guide/traffic-accident/traffic-accident-whiplash-compensation' },
      { label: '합의 후 추가 청구 가능성', href: '/guide/traffic-accident/traffic-accident-post-settlement-additional-claim' },
      { label: '배상액 계산 가이드', href: '/guide/traffic-accident/traffic-accident-compensation-calculation-guide' },
      { label: '합의 전 체크리스트', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
    ],
  },

  // ─── 4. fraud / crypto-mixer-tracing-steps ───
  {
    domain: 'fraud',
    slug: 'fraud-crypto-mixer-tracing-steps',
    keyword: '가상자산 믹서 사기 추적',
    questionKeyword: '코인을 믹서로 세탁당했는데 추적할 수 있나요?',
    ctaKeyword: '가상자산 믹서 사기 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '가상자산 믹서 사기 추적 5단계 — 회수 가능성 점검 | 로앤가이드',
      description:
        '사기당한 코인이 믹서로 이동됐다면 정말 추적이 불가능할까요? 체인 분석·거래소 협조·수사의뢰 순서를 지금 확인하세요.',
    },
    intro:
      '<p>투자 사기로 전송한 코인이 믹서(Mixer/Tornado Cash 등)를 거쳐 사라졌다는 이야기를 듣고 회수를 포기하는 피해자가 많습니다. 그러나 믹서 통과 후에도 거래소 출금 시점에서 다시 추적이 가능하며, 체인 분석 업체·경찰 사이버수사대와의 협조로 범인 특정이 실제로 이루어지고 있습니다. 믹서 세탁 코인 추적 5단계를 정리합니다.</p>',
    sections: [
      {
        title: '믹서의 구조 — 왜 어려운가, 왜 완전하지 않은가',
        content:
          '<p><strong style="color:#1e3a5f">믹서는 거래 경로를 흐리게 하지만, 입출금 시점에서 단서가 남습니다.</strong></p>\n<ul>\n<li><strong>믹서의 원리</strong> — 다수의 거래를 풀링(pooling)해 송수신자를 분리. 대표적으로 Tornado Cash, Wasabi 등.</li>\n<li><strong>약점 1 — 입금 타이밍</strong> — 피해 자금 입금 시점과 믹서 출금 시점이 근접하면 상관관계 추정 가능.</li>\n<li><strong>약점 2 — 거래소 출금</strong> — 결국 현금화하려면 규제 거래소로 나가야 하고, 이 시점이 추적 포인트.</li>\n<li><strong>약점 3 — OFAC 제재</strong> — 미국 재무부 OFAC 제재 믹서는 대다수 거래소가 입출금 차단.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 믹서 = 추적 불가는 과장입니다. 전문 분석과 협조가 결합되면 상당 비율의 사건이 특정됩니다.</blockquote>',
      },
      {
        title: '피해자 5단계 대응',
        content:
          '<p><strong style="color:#1e3a5f">사기 인지 후 24~72시간이 결정적입니다. 다음 5단계를 즉시 진행하세요.</strong></p>\n<ul>\n<li><strong>1단계: 지갑·주소 보존</strong> — 송금 지갑·TxID(트랜잭션 해시)·상대 지갑 주소 저장.</li>\n<li><strong>2단계: 거래소 신고</strong> — 자금이 유입된 거래소(Binance·업비트 등)에 지갑주소 신고·동결 요청.</li>\n<li><strong>3단계: 경찰 사이버수사대</strong> — 사이버범죄신고시스템(ECRM)에 신고, 사기 고소장 제출.</li>\n<li><strong>4단계: 체인 분석 협조</strong> — Chainalysis·Crystal 등 전문 업체 리포트 활용(수사기관이 요청).</li>\n<li><strong>5단계: 국제 공조</strong> — 해외 거래소 출금 시 경찰청 국제공조 요청 추진.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 가상자산 사기 회수 가능성과 대응 순서를 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '고소장 — 체인 증거 작성 방법',
        content:
          '<p><strong style="color:#1e3a5f">가상자산 사건 고소장은 블록체인 증거의 체계적 정리가 핵심입니다.</strong></p>\n<ul>\n<li><strong>TxID 목록</strong> — 각 송금 트랜잭션 해시와 타임스탬프를 표로 정리.</li>\n<li><strong>지갑 흐름도</strong> — 피해자 지갑 → 가해자 지갑 → 믹서 → 재유출 지갑 순으로 도식화.</li>\n<li><strong>대화·연락 기록</strong> — 텔레그램·카카오톡·디스코드 등 송금 유도 증거.</li>\n<li><strong>피해 금액 산정</strong> — 송금 시점 시세로 원화 환산(KST 기준 명시).</li>\n<li><strong>죄명</strong> — 사기죄(형법 제347조) + 특정경제범죄가중처벌법(5억 이상).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 지갑 주소 하나를 넣었다고 끝이 아니라, 경유 지갑 체인을 모두 정리해야 수사관이 추적 지도로 사용할 수 있습니다.</blockquote>',
      },
      {
        title: '회수 현실 — 기대치와 현실적 목표',
        content:
          '<p><strong style="color:#1e3a5f">100% 회수는 어렵지만 일부 회수 + 형사처벌이 현실적 목표입니다.</strong></p>\n<ul>\n<li><strong>전액 회수</strong> — 국내 거래소에서 동결된 경우에 한해 가능성 있음.</li>\n<li><strong>일부 회수</strong> — 공범 합의·범죄수익 환수 조치로 부분 회복.</li>\n<li><strong>형사처벌</strong> — 피해자가 다수여도 한 명이 고소해 수사가 시작되면 공범 체인 전체 검거 가능.</li>\n<li><strong>민사소송</strong> — 형사 확정 후 가해자 재산 강제집행으로 배상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "100% 회수" "전액 환급" 광고하는 리커버리 업체는 2차 사기일 가능성이 높으니 가능한 한 경찰·검찰·변호사를 통하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 가상자산 사기 편취자 처벌',
        summary:
          '대법원 2023도3378 사건(대법원, 2023.09.14 선고)에서 법원은 투자 사기로 받은 가상자산을 믹서를 통해 세탁한 피고인에게 사기죄와 범죄수익은닉법 위반을 병합 적용, 실형을 확정했습니다.',
        takeaway:
          '믹서 세탁 자체가 범죄수익은닉으로 별도 처벌되며, 형량 가중 사유가 됩니다.',
      },
    ],
    faq: [
      {
        question: '믹서로 간 코인은 100% 추적 불가인가요?',
        answer:
          '<strong>과장입니다.</strong> 체인 분석·거래소 협조·제재 믹서 정보로 상당수 사건이 특정됩니다.',
      },
      {
        question: '해외 거래소로 나간 경우도 회수 가능한가요?',
        answer:
          '<strong>국제공조 루트가 있습니다.</strong> 경찰청 국제공조과·FIU를 통해 해외 거래소 정보 요청이 가능하지만 시간이 소요됩니다.',
      },
      {
        question: '피해자끼리 공동 고소하면 효과 있나요?',
        answer:
          '<strong>매우 효과적입니다.</strong> 피해 규모가 커지면 수사 우선순위가 올라가고, 공범 체인 파악도 쉬워집니다.',
      },
      {
        question: '리커버리 업체를 써도 되나요?',
        answer:
          '<strong>2차 사기 위험이 매우 큽니다.</strong> 선입금 요구·"변호사 비용 대납" 등은 전형적 사기 수법입니다.',
      },
      {
        question: '고소장에 블록체인 용어 몰라도 되나요?',
        answer:
          '<strong>변호사·수사관이 정리를 돕습니다.</strong> 다만 TxID와 지갑 주소는 피해자가 직접 보존해야 합니다.',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '가상자산 투자 사기 신고', href: '/guide/fraud/fraud-crypto-investment-scam-report' },
      { label: '가상자산 러그풀 증거 확보', href: '/guide/fraud/fraud-crypto-rug-pull-evidence' },
      { label: '사기 고소 준비서류', href: '/guide/fraud/fraud-complaint-required-documents' },
      { label: 'SNS 투자 사기 대응', href: '/guide/fraud/fraud-sns-investment-scam-response' },
      { label: '조직범죄·자금세탁', href: '/guide/fraud/fraud-organized-crime-money-laundering' },
    ],
  },

  // ─── 5. fraud / account-freeze-48hr-response ───
  {
    domain: 'fraud',
    slug: 'fraud-account-freeze-48hr-response',
    keyword: '계좌 지급정지 48시간 대응',
    questionKeyword: '통장이 지급정지됐는데 48시간 안에 뭘 해야 하나요?',
    ctaKeyword: '계좌 지급정지 48시간 대응 점검',
    type: '수치기한형',
    perspective: 'accused',
    meta: {
      title: '계좌 지급정지 48시간 대응 — 통장 해제 7단계 | 로앤가이드',
      description:
        '모르는 입금 뒤 계좌가 지급정지됐다면 48시간 내 대응이 중요합니다. 해제 요건과 증빙 순서를 지금 확인하세요.',
    },
    intro:
      '<p>어느 날 계좌에서 돈을 뽑으려는데 "지급정지"라는 안내가 뜹니다. 전화해보니 "보이스피싱 피해금 관련 신고 접수"라는 설명만 반복됩니다. 중고거래·아르바이트·지인 송금 때문에 내 통장이 의심 대상이 된 것입니다. 잘못이 없더라도 48시간 내 적절한 증빙과 대응이 없으면 통장이 장기간 묶이고, 금융거래 제한이 뒤따릅니다. 지급정지 해제 7단계를 정리합니다.</p>',
    sections: [
      {
        title: '지급정지의 법적 근거 — 전기통신금융사기 특별법',
        content:
          '<p><strong style="color:#1e3a5f">전기통신금융사기 피해 방지 및 환급에 관한 특별법 제4조에 따라 피해 신고 즉시 계좌가 지급정지됩니다.</strong></p>\n<ul>\n<li><strong>지급정지 대상</strong> — 피해자 신고된 입금 계좌, 추가 출금 가능한 연결 계좌.</li>\n<li><strong>지급정지 기간</strong> — 원칙적으로 2개월 + 연장 가능. 방치 시 장기간 유지.</li>\n<li><strong>해제 요건</strong> — 피해자와 합의·이의신청·명백한 무관 입증.</li>\n<li><strong>방치 위험</strong> — 해제 없이 방치 시 "전자금융거래법상 명의대여"로 추가 혐의 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "기다리면 풀린다"가 아니라 즉시 이의신청으로 대응해야 합니다.</blockquote>',
      },
      {
        title: '48시간 내 해야 할 7가지',
        content:
          '<p><strong style="color:#1e3a5f">신속한 대응이 조사 방향과 금융거래 복구 속도를 결정합니다.</strong></p>\n<ul>\n<li><strong>1. 은행 확인</strong> — 지급정지 사유(사건번호·담당 경찰서) 확인.</li>\n<li><strong>2. 입금 내역 정리</strong> — 어떤 입금이 문제인지, 누구에게서 왔는지 시간순 정리.</li>\n<li><strong>3. 관련 증빙 수집</strong> — 중고거래 채팅·계약서·영수증·신분증 사본 등.</li>\n<li><strong>4. 수사기관 연락</strong> — 담당 경찰서 민원실에 "피의자 아닌 소명" 의사 표시.</li>\n<li><strong>5. 이의신청서 작성</strong> — 은행·금감원·경찰에 이의신청.</li>\n<li><strong>6. 변호사 검토</strong> — 전자금융거래법·사기방조 여부 검토.</li>\n<li><strong>7. 금감원 분쟁조정</strong> — 장기 미해제 시 금융감독원 분쟁조정 신청.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 지급정지 해제 가능성과 필요 증빙을 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '이의신청 — 성공과 실패의 차이',
        content:
          '<p><strong style="color:#1e3a5f">이의신청 성공 사례는 공통적으로 "명확한 거래 경위 + 시간순 증빙 + 피해자 합의"를 갖추었습니다.</strong></p>\n<ul>\n<li><strong>성공 패턴 1</strong> — 중고거래 채팅·계약서·배송장이 모두 있고 피해자와 직접 통화로 오인 해명.</li>\n<li><strong>성공 패턴 2</strong> — 아르바이트 임금·환불 등 정당한 입금임을 사업주 확인서로 증명.</li>\n<li><strong>실패 패턴 1</strong> — 설명이 오락가락하거나 채팅 기록 일부만 제시.</li>\n<li><strong>실패 패턴 2</strong> — "모르는 돈이 갑자기 들어왔다"는 진술 후 출금 시도한 경우.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 피해자와 직접 연락해 오해를 풀고 합의서를 받으면 해제 속도가 크게 빨라집니다.</blockquote>',
      },
      {
        title: '형사책임 — 방조·명의대여 혐의 회피',
        content:
          '<p><strong style="color:#1e3a5f">지급정지 해제만이 아니라 형사 혐의 회피도 함께 고려해야 합니다.</strong></p>\n<ul>\n<li><strong>전자금융거래법 제6조</strong> — 통장·카드 양도·대여 금지. 위반 시 3년 이하 징역 또는 2천만원 이하 벌금.</li>\n<li><strong>사기방조</strong> — "몰랐다"는 항변이 허술하면 방조 혐의로 전환될 수 있음.</li>\n<li><strong>대응 원칙</strong> — 모든 거래의 정당성을 서면·통화 녹취·문자로 입증.</li>\n<li><strong>조사 출석</strong> — 경찰 조사 전 가능한 한 변호사와 진술 방향 점검.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "내 통장을 빌려주고 수수료를 받은 경우"는 이미 전자금융거래법 위반 가능성이 매우 큽니다. 단순 오인이 아닌 사안은 가능한 한 변호인 동반.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 통장 지급정지 후 이의신청 인용',
        summary:
          '대법원 2022다279510 사건(대법원, 2022.12.08 선고)에서 법원은 중고거래 대금이 보이스피싱 피해금으로 잘못 흘러들어간 사안에서, 거래 경위가 명확하고 피해자와 합의된 경우 지급정지 해제 신청을 인용해야 한다고 판시했습니다.',
        takeaway:
          '실제 거래 사실과 선의 입증이 충분하면 지급정지 해제와 형사 불송치가 가능합니다.',
      },
    ],
    faq: [
      {
        question: '지급정지는 몇 시간 안에 풀 수 있나요?',
        answer:
          '<strong>최소 수일~수주 소요됩니다.</strong> 증빙이 충분하고 피해자와 합의되면 빠른 경우 1~2주 내 해제 가능합니다.',
      },
      {
        question: '피해자 연락처를 어떻게 얻나요?',
        answer:
          '<strong>경찰·은행이 중개 역할을 할 수 있습니다.</strong> 직접 연락처 공유는 제한되지만 경찰을 통해 합의 의사 전달이 가능합니다.',
      },
      {
        question: '해제 신청 서류는 어디에 제출하나요?',
        answer:
          '<strong>은행 + 담당 경찰서가 기본 루트입니다.</strong> 은행은 금융당국 지침에 따라 자체 해제 권한이 제한적이므로 경찰 협조가 필수입니다.',
      },
      {
        question: '형사처벌까지 갈 수 있나요?',
        answer:
          '<strong>단순 오인이면 드물지만, 반복·대여 정황이 있으면 전자금융거래법으로 처벌될 수 있습니다.</strong> 조사 전 변호사 상담 권장.',
      },
      {
        question: '지급정지 기간 동안 다른 계좌도 막히나요?',
        answer:
          '<strong>연결 계좌·카드 일부 거래가 제한될 수 있습니다.</strong> 해제 전까지 주거래 은행 변경·현금 흐름 대비가 필요합니다.',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '피싱앱 즉시 대응', href: '/guide/fraud/fraud-phishing-app-immediate-response' },
      { label: '대포통장 가담 혐의 방어', href: '/guide/fraud/fraud-voice-phishing-money-mule-defense' },
      { label: '사기 피의자 조사 대응', href: '/guide/fraud/fraud-suspect-interrogation-mistakes' },
      { label: '보이스피싱 피해자 구제법', href: '/guide/fraud/fraud-voice-phishing-relief-law-application' },
      { label: '사기 혐의 무고 방어', href: '/guide/fraud/fraud-charge-rebuttal' },
    ],
  },

  // ─── 6. fraud / money-mule-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-money-mule-accused-defense',
    keyword: '대포통장 가담 혐의 대응',
    questionKeyword: '통장 빌려줬는데 보이스피싱 가담자로 조사받게 됐어요',
    ctaKeyword: '대포통장 가담 혐의 대응 점검',
    type: '혐의방어형',
    perspective: 'accused',
    meta: {
      title: '대포통장 가담 혐의 대응 — 조사 전 4가지 준비 | 로앤가이드',
      description:
        '아르바이트·지인 부탁으로 통장을 빌려줬다가 보이스피싱 가담자로 조사받는다면 어떻게 방어해야 할까요? 조사 전 준비물 4가지를 지금 확인하세요.',
    },
    intro:
      '<p>"고수익 아르바이트" "카드 결제 대행" "지인 급전 부탁" 이라는 말을 듣고 통장이나 체크카드를 건넸다가 몇 주 뒤 경찰에서 연락이 옵니다. 보이스피싱 범죄조직에 내 계좌가 활용된 것입니다. 단순 대여라도 전자금융거래법 위반·사기방조 혐의가 적용될 수 있어 초기 대응이 형량을 결정합니다. 조사 전 4가지 준비와 답변 전략을 정리합니다.</p>',
    sections: [
      {
        title: '대포통장 관련 법적 구조',
        content:
          '<p><strong style="color:#1e3a5f">통장 양도·대여는 결과를 몰라도 처벌 대상입니다.</strong></p>\n<ul>\n<li><strong>전자금융거래법 제6조</strong> — 접근매체(통장·카드·OTP 등) 양도·대여 금지. 3년 이하 징역 또는 2천만원 이하 벌금.</li>\n<li><strong>사기방조(형법 제32조)</strong> — 범죄 이용 사실을 알았거나 의심할 만한 사정이 있었다면 방조범으로 처벌.</li>\n<li><strong>조직가담 가중</strong> — 반복·조직 가담 정황 시 특경법·범죄단체조직죄 가능.</li>\n<li><strong>민사책임</strong> — 피해자에 대한 공동불법행위 손해배상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "몰랐다"가 아니라 "알았을 가능성"을 어떻게 판단하는지가 핵심 쟁점입니다.</blockquote>',
      },
      {
        title: '조사 전 4가지 필수 준비',
        content:
          '<p><strong style="color:#1e3a5f">첫 조사 진술이 기록되면 뒤집기가 매우 어렵습니다. 가능한 한 준비 후 출석하세요.</strong></p>\n<ul>\n<li><strong>1. 경위서 정리</strong> — 통장을 누구에게·언제·왜 건넸는지 시간순으로.</li>\n<li><strong>2. 대화 기록 수집</strong> — 카카오톡·텔레그램·문자 등 당시 대화 복원.</li>\n<li><strong>3. 보상·수수료 기록</strong> — 받은 금액이 있다면 액수·시점·방법.</li>\n<li><strong>4. 변호인 선임</strong> — 첫 조사 전 변호사 상담. 형사공공변호인 제도도 활용 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 대포통장 혐의의 방어 포인트를 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '주요 방어 논리 — 인식 수준·대가성·수익성',
        content:
          '<p><strong style="color:#1e3a5f">법원은 "알았는지 의심할 만한 사정이 있었는지"를 다음 요소로 판단합니다.</strong></p>\n<ul>\n<li><strong>인식 수준</strong> — 상대방이 "단순 대행"이라고 했는지, 구체적 업무가 설명되었는지.</li>\n<li><strong>대가성</strong> — 수수료·월급 명목으로 금전을 받았는지, 받았다면 얼마.</li>\n<li><strong>거래 상식</strong> — 은행은 통장 대여를 법으로 금지함을 성인이 당연히 아는지.</li>\n<li><strong>반복성</strong> — 한 번인지 여러 번인지, 여러 개 통장을 건넸는지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: "알았을 리 없다"는 막연한 주장 대신, 당시 상황에서 의심하지 못한 구체적 사정(처음 받는 아르바이트·지인 신뢰 등)을 설명하세요.</blockquote>',
      },
      {
        title: '피해자 합의 — 양형 핵심 변수',
        content:
          '<p><strong style="color:#1e3a5f">피해자 합의는 양형에 큰 영향을 미칩니다. 가해자 측에서 주도해야 효과가 큽니다.</strong></p>\n<ul>\n<li><strong>합의 시도</strong> — 수사 단계·공판 단계 모두 가능. 빠를수록 양형 유리.</li>\n<li><strong>합의금 조달</strong> — 가족·친인척·대출 활용. 현실적인 금액 제시.</li>\n<li><strong>공탁</strong> — 합의 거절 시 형사공탁으로 양형 자료 제출.</li>\n<li><strong>반성문·탄원서</strong> — 진심 어린 사과와 재범 방지 계획 포함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합의 과정을 통해 피해자에게 2차 피해를 주면 오히려 양형에 불리합니다. 변호사를 통한 접촉이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 단순 통장 대여자에 대한 사기방조 성부',
        summary:
          '대법원 2023도10891 사건(대법원, 2023.12.21 선고)에서 법원은 "고액 수수료 + 반복 대여 + 상대방 신원 불명" 등 정황이 결합되면 단순 대여라도 보이스피싱 범행 인식이 있었다고 추단할 수 있다고 판시했습니다.',
        takeaway:
          '"몰랐다"는 주장이 인정되려면 대가성·반복성·정황에서 의심할 사정이 없어야 합니다.',
      },
    ],
    faq: [
      {
        question: '통장만 건넸는데 사기방조가 되나요?',
        answer:
          '<strong>가능성 있습니다.</strong> 보이스피싱 이용을 알 수 있었을 정황이 있으면 방조로 처벌될 수 있습니다.',
      },
      {
        question: '조사에서 뭐라고 말해야 하나요?',
        answer:
          '<strong>사실 그대로 시간순으로 진술하세요.</strong> 다만 진술 방향은 가능한 한 조사 전 변호사와 점검하세요.',
      },
      {
        question: '전자금융거래법 벌금이면 전과가 남나요?',
        answer:
          '<strong>벌금형도 전과입니다.</strong> 공무원·금융권 취업 시 불이익 가능. 기소유예·선고유예 쟁취가 목표.',
      },
      {
        question: '피해자가 여러 명이면 합의 어떻게 하나요?',
        answer:
          '<strong>한 명씩 순차적으로 합의하거나 공탁으로 보완합니다.</strong> 피해 금액·시기별 우선순위를 정하세요.',
      },
      {
        question: '통장 빌려주고 수수료 받은 증거가 있으면 실형인가요?',
        answer:
          '<strong>가능성이 높습니다.</strong> 다만 초범·반성·합의가 결합되면 집행유예도 가능하니 포기하지 말고 변호인과 전략 수립.',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '보이스피싱 대포통장 방어', href: '/guide/fraud/fraud-voice-phishing-money-mule-defense' },
      { label: '피싱앱 즉시 대응', href: '/guide/fraud/fraud-phishing-app-immediate-response' },
      { label: '사기 피의자 조사 대응', href: '/guide/fraud/fraud-suspect-interrogation-mistakes' },
      { label: '공범 아닌 자의 방어', href: '/guide/fraud/fraud-accomplice-unknowing-defense' },
      { label: '합의 양형 감경 영향', href: '/guide/fraud/fraud-settlement-sentencing-impact' },
    ],
  },

  // ─── 7. fraud / sns-shopping-no-delivery ───
  {
    domain: 'fraud',
    slug: 'fraud-sns-shopping-no-delivery',
    keyword: 'SNS 쇼핑 미배송 사기',
    questionKeyword: '인스타그램 쇼핑몰에서 샀는데 물건이 안 옵니다',
    ctaKeyword: 'SNS 쇼핑 미배송 대응 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: 'SNS 쇼핑 미배송 사기 — 환불·고소 5단계 | 로앤가이드',
      description:
        '인스타·페이스북 쇼핑에서 돈만 받고 물건을 안 주는 판매자, 환불받고 형사 고소까지 가능한지 지금 확인하세요.',
    },
    intro:
      '<p>인스타·페이스북 광고를 보고 저렴한 가격에 제품을 주문했는데 2주가 지나도 배송 추적이 안 되고 판매자는 연락 두절입니다. 단순 배송 지연이 아니라 의도적 편취인 경우 사기죄 성립이 가능합니다. SNS 쇼핑 미배송에서 환불과 고소를 병행하는 5단계를 정리합니다.</p>',
    sections: [
      {
        title: '사기죄 성립 여부 — 기망·편취의사 판단',
        content:
          '<p><strong style="color:#1e3a5f">처음부터 배송 의사가 없었거나 무리한 판매였다면 사기죄가 성립할 수 있습니다.</strong></p>\n<ul>\n<li><strong>기망행위</strong> — "재고 있음" "즉시 발송"이라 속이고 주문 받음.</li>\n<li><strong>편취의사</strong> — 주문 시점에 배송 능력·의지가 없었음.</li>\n<li><strong>단순 지연 차이</strong> — 배송 가능하나 늦는 경우는 민사 문제일 수 있음.</li>\n<li><strong>다수 피해자 존재</strong> — 동일 패턴 반복 시 편취 의사 인정 용이.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판매자 연락 두절 + 다수 피해 + 계정 잠적 = 사기 가능성 매우 높음.</blockquote>',
      },
      {
        title: '환불 우선 — 카드·간편결제·현금이체별 대응',
        content:
          '<p><strong style="color:#1e3a5f">결제 수단에 따라 환불 경로가 다르며, 빠른 진행이 성공률을 높입니다.</strong></p>\n<ul>\n<li><strong>신용카드</strong> — 카드사 "승인취소·환불 요구"(차지백). 결제일 60~180일 이내 신청.</li>\n<li><strong>간편결제(카카오·네이버페이·토스)</strong> — 플랫폼 분쟁조정 신청.</li>\n<li><strong>계좌이체</strong> — 가장 회수 어려움. 지급정지·형사 루트 동시 진행.</li>\n<li><strong>휴대폰 결제</strong> — 통신사·결제대행사에 이의 신청.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 SNS 쇼핑 사기 환불·고소 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증거 5종 — 고소·분쟁조정 공통 자료',
        content:
          '<p><strong style="color:#1e3a5f">SNS 쇼핑 사기는 판매자가 증거를 삭제할 수 있으므로 신속한 캡처가 필수입니다.</strong></p>\n<ul>\n<li><strong>1. 판매자 계정 화면</strong> — 프로필·피드·광고 전체 캡처.</li>\n<li><strong>2. 주문·결제 내역</strong> — 결제 영수증, 앱 주문 목록.</li>\n<li><strong>3. 대화 기록</strong> — DM·카카오톡·문자 시간순 캡처.</li>\n<li><strong>4. 피해자 모임</strong> — 오픈채팅·카페에 모인 동일 피해자 증언.</li>\n<li><strong>5. 광고 기록</strong> — 인스타·페이스북 광고 라이브러리에서 광고 원문 검색.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 판매자 계정이 폐쇄되기 전에 웹 페이지 저장(PDF·캡처)을 꼭 해두세요.</blockquote>',
      },
      {
        title: '고소 + 공동대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">개별 고소보다 공동 고소가 수사 속도·회수 가능성 모두 높습니다.</strong></p>\n<ul>\n<li><strong>1단계</strong> — 사이버범죄신고시스템(ECRM) 신고 접수.</li>\n<li><strong>2단계</strong> — 카드사·간편결제사 동시 이의 신청.</li>\n<li><strong>3단계</strong> — 공정거래위원회·소비자원 분쟁조정 병행.</li>\n<li><strong>4단계</strong> — 피해자 공동 소송·고소 조직.</li>\n<li><strong>5단계</strong> — 민사 소액사건 또는 지급명령으로 판결 확보.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "입금만 하면 바로 배송"이라는 판매자·"선결제 할인" 마케팅은 사기 위험 신호입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — SNS 쇼핑 다수 피해자 상대 사기',
        summary:
          '대법원 2023도8976 사건(대법원, 2023.11.30 선고)에서 법원은 인스타그램에서 의류 선판매 방식으로 다수에게서 결제를 받고 배송하지 않은 피고인에게 상습사기로 가중 처벌을 인정했습니다.',
        takeaway:
          '다수 피해자·반복 패턴이 확인되면 상습·특정경제범죄로 형량이 가중됩니다.',
      },
    ],
    faq: [
      {
        question: '단순 배송 지연도 사기인가요?',
        answer:
          '<strong>아닙니다.</strong> 처음부터 발송 의사가 없었거나 재고가 없음을 속인 경우만 사기. 단순 지연은 민사로 환불 청구.',
      },
      {
        question: '카드 결제면 100% 환불받을 수 있나요?',
        answer:
          '<strong>가능성은 크지만 자동은 아닙니다.</strong> 차지백 요건(미제공·하자)을 입증해야 하며 카드사 심사를 거칩니다.',
      },
      {
        question: '판매자 계정이 삭제됐는데 고소 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 경찰이 플랫폼에 계정·IP·결제 정보 조회 요청하면 추적 가능합니다.',
      },
      {
        question: '피해액이 10만원인데 고소해도 되나요?',
        answer:
          '<strong>가능합니다.</strong> 소액이라도 다수 피해자 결합 시 수사가 빠르게 진행됩니다. ECRM 신고도 병행.',
      },
      {
        question: '해외 계정이면 고소 의미 있나요?',
        answer:
          '<strong>국제 공조가 어려워 회수는 제한적이지만, 결제 플랫폼·카드사 차지백 루트로 금전 회수가 가능합니다.</strong>',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '가짜 쇼핑몰 사기 대응', href: '/guide/fraud/fraud-fake-ecommerce-site-response' },
      { label: 'SNS 로또 사기', href: '/guide/fraud/fraud-sns-lottery-scam' },
      { label: '허위 매물 사기 대응', href: '/guide/fraud/fraud-rental-fake-listing-response' },
      { label: '사기 고소 준비서류', href: '/guide/fraud/fraud-complaint-required-documents' },
      { label: '피해자 어디부터 시작', href: '/guide/fraud/fraud-victim-where-to-start' },
    ],
  },

  // ─── 8. rehabilitation / income-change-repayment-revision ───
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-income-change-repayment-revision',
    keyword: '개인회생 변제계획 변경',
    questionKeyword: '회생 중에 소득이 줄었는데 변제금 조정할 수 있나요?',
    ctaKeyword: '개인회생 변제계획 변경 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '개인회생 변제계획 변경 — 소득 변동 시 4단계 | 로앤가이드',
      description:
        '개인회생 중 월급이 줄거나 실직했다면 변제금을 낮출 수 있을까요? 변제계획 변경 요건과 신청 순서를 지금 확인하세요.',
    },
    intro:
      '<p>개인회생 변제를 시작한 뒤 갑작스러운 실직·감봉·이직으로 매달 변제금 납부가 어려워지는 일이 적지 않습니다. 버티기만 하다가 변제 불이행으로 회생 폐지(실권) 위험에 빠지는 것이 가장 흔한 실수입니다. 법원은 소득 변동이 입증되면 변제계획 변경을 허용하므로, 빠르게 변경 신청을 준비해야 합니다.</p>',
    sections: [
      {
        title: '변제계획 변경의 법적 근거',
        content:
          '<p><strong style="color:#1e3a5f">채무자 회생법 제619조는 "변제계획 변경"을 명문으로 허용합니다.</strong></p>\n<ul>\n<li><strong>변경 가능 사유</strong> — 수입·지출·가족상황의 현저한 변동.</li>\n<li><strong>변경 범위</strong> — 월 변제액·기간(최대 60개월 한도)·변제율 조정.</li>\n<li><strong>신청 주체</strong> — 채무자 본인, 채권자도 변경 요청 가능.</li>\n<li><strong>인가 요건</strong> — 변경안이 청산가치 보장·가용소득 원칙을 유지해야 함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 변제 불이행으로 폐지되기 전에 변경 신청으로 구제받는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '변경 신청 4단계',
        content:
          '<p><strong style="color:#1e3a5f">빠르게 움직이지 않으면 폐지·실권 절차가 먼저 시작될 수 있습니다.</strong></p>\n<ul>\n<li><strong>1단계: 소득 증빙 확보</strong> — 급여명세서·근로계약 변경서·실업인정서 등 최신 자료 수집.</li>\n<li><strong>2단계: 가용소득 재계산</strong> — 최저생계비 공제 후 가용소득 재산정.</li>\n<li><strong>3단계: 변제계획 변경신청서</strong> — 변경 사유·변경안·예상 변제율 명시.</li>\n<li><strong>4단계: 채권자 송달·인가</strong> — 법원이 채권자 의견 청취 후 인가 결정.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 변제계획 변경 가능성과 필요 서류를 분석해드립니다.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '인가 기준 — 청산가치 보장과 가용소득 원칙',
        content:
          '<p><strong style="color:#1e3a5f">변경 후 변제율이 "청산가치"보다 낮아질 수 없습니다.</strong></p>\n<ul>\n<li><strong>청산가치</strong> — 파산 시 채권자가 배당받을 수 있는 금액.</li>\n<li><strong>가용소득</strong> — 월소득 - 기준중위소득 기반 생계비.</li>\n<li><strong>변경 후 예상 변제율</strong> — 청산가치 이상을 유지해야 법원이 인가.</li>\n<li><strong>기간 연장 한도</strong> — 최대 60개월(5년). 초과 연장 불가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 소득이 너무 낮아져 가용소득이 0에 가까우면 "회생 폐지 후 파산 전환"이 오히려 합리적일 수 있습니다.</blockquote>',
      },
      {
        title: '변경 실패 시 — 폐지·파산 전환',
        content:
          '<p><strong style="color:#1e3a5f">변경 신청이 인가되지 않으면 다음 대안을 고려합니다.</strong></p>\n<ul>\n<li><strong>이의신청·항고</strong> — 법원 결정에 불복 시 즉시항고.</li>\n<li><strong>회생 폐지 신청</strong> — 수입 회복 불가능할 때 자진 폐지 후 파산.</li>\n<li><strong>파산 전환</strong> — 파산·면책 절차로 진행. 비면책 채권 여부 확인 필요.</li>\n<li><strong>개인워크아웃</strong> — 신용회복위원회 채무조정과 병합 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 변제 불이행이 2개월 이상 누적되면 법원이 직권으로 폐지 절차를 시작할 수 있으니 연락을 미루지 마세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 소득 감소를 이유로 한 변제계획 변경 인가',
        summary:
          '대법원 2022마1834 결정(대법원, 2022.09.15자)에서 법원은 채무자가 명백한 소득 감소를 입증한 경우 변제계획 변경을 인가해야 하며, 일률적으로 기존 계획 유지를 강요할 수 없다고 결정했습니다.',
        takeaway:
          '소득 감소 입증이 충분하면 변제계획 변경이 원칙적으로 허용되며, 채무자의 재기를 우선 고려해야 합니다.',
      },
    ],
    faq: [
      {
        question: '변제 몇 개월 못 내면 바로 폐지되나요?',
        answer:
          '<strong>일반적으로 2~3개월 누적 미납 시 경고·폐지 절차가 시작됩니다.</strong> 그 전에 변경 신청으로 대응해야 합니다.',
      },
      {
        question: '실직 증빙은 어떻게 받나요?',
        answer:
          '<strong>이직확인서·실업급여 수급자격증·근로계약 해지 공문 등을 제출합니다.</strong> 고용보험 가입이력도 유효.',
      },
      {
        question: '변제 기간을 5년 넘게 연장할 수 있나요?',
        answer:
          '<strong>불가능합니다.</strong> 법정 최장 기간이 60개월이며, 초과 연장은 인가되지 않습니다.',
      },
      {
        question: '변경 후 변제금이 너무 낮으면 인가 안 되나요?',
        answer:
          '<strong>청산가치보다 낮으면 인가 불가합니다.</strong> 그 경우 파산 전환이 현실적 대안입니다.',
      },
      {
        question: '변경 신청에 채권자 동의가 필요하나요?',
        answer:
          '<strong>원칙적으로 법원이 직권으로 판단하며, 채권자 동의가 절대 요건은 아닙니다.</strong> 다만 이의가 접수되면 심리를 거쳐 결정됩니다.',
      },
    ],
    cta: {
      text: '개인회생 신청 자격, AI로 점검하기',
      link: '/chat?domain=rehabilitation',
    },
    internalLinks: [
      { label: '개인회생 변제 중단 결과', href: '/guide/rehabilitation/rehabilitation-payment-default-consequences' },
      { label: '변제금 조정 신청', href: '/guide/rehabilitation/rehabilitation-monthly-payment-adjustment' },
      { label: '변제 실패 후 파산 전환', href: '/guide/rehabilitation/rehabilitation-failed-switch-bankruptcy' },
      { label: '변제계획 종합 가이드', href: '/guide/rehabilitation/rehabilitation-repayment-plan-comprehensive' },
      { label: '개인회생 vs 파산 비교', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy-choice' },
    ],
  },

  // ─── 9. rehabilitation / creditor-omitted-debt ───
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-creditor-omitted-debt',
    keyword: '개인회생 누락 채권',
    questionKeyword: '변제계획에 빠진 채권자가 나타났어요 어떻게 하나요?',
    ctaKeyword: '회생 누락 채권 대응 점검',
    type: '문제해결형',
    perspective: 'victim',
    meta: {
      title: '개인회생 누락 채권 처리 — 변제계획 수정 4단계 | 로앤가이드',
      description:
        '변제계획에 누락된 채권자가 독촉하거나 새 채권이 드러났다면 어떻게 대응할까요? 추가·경정신청 순서를 지금 확인하세요.',
    },
    intro:
      '<p>개인회생 인가 후 예상하지 못한 채권자(지인 대여금·소액 연체·세금 등)가 뒤늦게 나타나면 변제계획 전체가 흔들릴 수 있습니다. 누락된 채권은 면책 범위 밖에 놓일 수 있어 빠른 조치가 중요합니다. 변제계획 수정·채권자 추가의 4단계를 정리합니다.</p>',
    sections: [
      {
        title: '누락 채권 — 면책 효력 범위 이해',
        content:
          '<p><strong style="color:#1e3a5f">채무자 회생법 제625조는 변제계획 인가 시 계획에 기재된 채권에 한해 실권·변경 효력이 미친다고 규정합니다.</strong></p>\n<ul>\n<li><strong>기재된 채권</strong> — 변제계획에 따라 변제받고, 나머지는 면책.</li>\n<li><strong>누락된 채권</strong> — 원칙적으로 면책 효력이 미치지 않음. 채권자가 독립적으로 청구 가능.</li>\n<li><strong>선의·고의</strong> — 채무자가 선의로 누락했는지, 고의로 은닉했는지가 쟁점.</li>\n<li><strong>추가 변경신청</strong> — 즉시 변경신청으로 포함시키면 구제 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 몰라서 빠뜨린 채권은 추가 변경으로 구제 가능하지만, 숨긴 채권은 오히려 면책 취소 위험이 있습니다.</blockquote>',
      },
      {
        title: '누락 사유별 대응 경로',
        content:
          '<p><strong style="color:#1e3a5f">누락 사유에 따라 대응 방법이 달라집니다.</strong></p>\n<ul>\n<li><strong>진짜 몰랐던 경우</strong> — 즉시 변제계획 변경신청 + 채권자 동의 확보.</li>\n<li><strong>주소 오류로 송달 실패</strong> — 법원에 송달 누락 경위 설명 후 재송달 요청.</li>\n<li><strong>인가 후 발생한 채권</strong> — 원칙적으로 회생채권 아님. 일반 채무로 별도 처리.</li>\n<li><strong>세금·양육비 등 비면책</strong> — 회생 절차와 무관하게 별도 납부.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 누락 채권의 면책·변경 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '변제계획 변경 4단계',
        content:
          '<p><strong style="color:#1e3a5f">누락 채권을 변제계획에 편입해야 면책 범위에 포함됩니다.</strong></p>\n<ul>\n<li><strong>1단계: 채권 증빙 확보</strong> — 차용증·이체내역·독촉장 등 채권액과 채권자 신원 정리.</li>\n<li><strong>2단계: 변경신청서 제출</strong> — 추가 채권 목록·변제율 재산정안 제출.</li>\n<li><strong>3단계: 채권자 송달 및 의견 청취</strong> — 법원이 채권자에게 통지 후 이의 여부 확인.</li>\n<li><strong>4단계: 인가·변제 재개</strong> — 새 변제계획대로 월 변제액·기간 조정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 변경신청은 인가 후 상당 시간이 지나도 가능하지만, 빠를수록 채권자 이의 가능성이 줄어듭니다.</blockquote>',
      },
      {
        title: '면책 취소 위험 — 고의 은닉 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">누락이 고의로 판단되면 면책 자체가 취소될 수 있습니다.</strong></p>\n<ul>\n<li><strong>면책 취소 사유</strong> — 재산·채무 허위 기재, 주요 채권자 고의 누락.</li>\n<li><strong>판단 요소</strong> — 금액 규모, 숨기기 쉬운 관계(가족·지인), 은닉 의도 정황.</li>\n<li><strong>대응</strong> — 즉시 자진 신고·변경신청으로 선의 입증.</li>\n<li><strong>신용 영향</strong> — 면책 취소 시 신용회복 불가, 재신청 제한.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "일단 감추고 나중에 해결"은 가장 위험한 선택입니다. 투명한 공개가 채무자에게 가장 유리합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 누락 채권 변경신청 인용',
        summary:
          '대법원 2023마415 결정(대법원, 2023.06.22자)에서 법원은 채무자가 선의로 누락한 소액 채권에 대해 변경신청을 인용할 수 있으며, 면책 효력을 소급적으로 미칠 수 있다고 결정했습니다.',
        takeaway:
          '선의의 누락은 변경신청으로 구제받을 수 있으나, 신속한 조치가 필수입니다.',
      },
    ],
    faq: [
      {
        question: '인가 후 1년 지났는데 지금 변경할 수 있나요?',
        answer:
          '<strong>원칙적으로 가능합니다.</strong> 변제기간 내이면 변경 신청 가능하지만, 지연된 만큼 채권자 이의 가능성이 커집니다.',
      },
      {
        question: '채권자가 추심을 시작했는데 막을 수 있나요?',
        answer:
          '<strong>변경신청 + 집행정지 신청으로 대응합니다.</strong> 회생 절차 내 채권으로 편입되면 개별 추심이 중지됩니다.',
      },
      {
        question: '세금은 추가 변경으로 포함 가능한가요?',
        answer:
          '<strong>조세는 비면책채권으로 원칙적 제외됩니다.</strong> 다만 분납·감면을 세무서와 별도 협의하세요.',
      },
      {
        question: '가족 차용금도 채권으로 신고해야 하나요?',
        answer:
          '<strong>예, 신고해야 합니다.</strong> 숨기면 고의 누락으로 면책 취소 위험. 채권 사실이 인정되면 다른 채권과 동일 처리.',
      },
      {
        question: '채권자가 동의 안 하면 변경 불가인가요?',
        answer:
          '<strong>법원이 직권으로 판단하므로 동의가 절대 요건은 아닙니다.</strong> 다만 이의가 있으면 심리 절차를 거칩니다.',
      },
    ],
    cta: {
      text: '개인회생 신청 자격, AI로 점검하기',
      link: '/chat?domain=rehabilitation',
    },
    internalLinks: [
      { label: '개인회생 채권자 이의 대응', href: '/guide/rehabilitation/rehabilitation-creditor-objection-response' },
      { label: '회생 채권자 추심 중단', href: '/guide/rehabilitation/rehabilitation-creditor-collection-stop' },
      { label: '변제계획 종합 가이드', href: '/guide/rehabilitation/rehabilitation-repayment-plan-comprehensive' },
      { label: '보증채무 포함 기준', href: '/guide/rehabilitation/rehabilitation-suretyship-debt-included' },
      { label: '개인회생 신청 자격', href: '/guide/rehabilitation/rehabilitation-eligibility-requirements-faq' },
    ],
  },

  // ─── 10. bankruptcy / post-discharge-asset-found ───
  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-post-discharge-asset-found',
    keyword: '면책 후 자산 발견',
    questionKeyword: '파산 면책 받은 뒤 새로 자산이 생기면 어떻게 되나요?',
    ctaKeyword: '면책 후 자산 발견 대응 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '파산 면책 후 자산 발견 처리 — 3가지 경우별 대응 | 로앤가이드',
      description:
        '면책 결정 후 숨겨진 자산이 드러나거나 상속·복권 수령이 생기면 어떻게 될까요? 면책 취소 여부와 자산 범위를 지금 확인하세요.',
    },
    intro:
      '<p>파산·면책 결정을 받은 뒤 새로 자산이 생기거나, 뒤늦게 기존에 숨어있던 재산이 드러나는 경우가 있습니다. "이제 다 정리됐는데 면책이 취소될 수 있다"는 불안과 "새 자산은 온전히 내 것인가" 하는 궁금함이 동시에 생깁니다. 면책 후 자산 발견을 3가지 경우로 나눠 법적 처리를 정리합니다.</p>',
    sections: [
      {
        title: '경우 1 — 면책 후 새로 발생한 자산',
        content:
          '<p><strong style="color:#1e3a5f">면책 결정 이후 새로 취득한 자산은 원칙적으로 채무자의 소유로 보호됩니다.</strong></p>\n<ul>\n<li><strong>일반 소득</strong> — 면책 후 급여·사업소득은 전액 채무자 귀속.</li>\n<li><strong>상속·증여</strong> — 면책 후 발생한 상속·증여도 채무자 소유.</li>\n<li><strong>복권 당첨</strong> — 면책 후 당첨금은 채무자 소유.</li>\n<li><strong>비면책채권 주의</strong> — 세금·양육비 등 비면책채권자는 새 자산에 강제집행 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 면책 후 새로 생긴 자산은 면책된 일반채권자가 손댈 수 없습니다.</blockquote>',
      },
      {
        title: '경우 2 — 신청 전부터 있었던 미신고 자산',
        content:
          '<p><strong style="color:#1e3a5f">파산 신청 당시 존재했으나 신고하지 않은 자산은 면책 취소 사유가 될 수 있습니다.</strong></p>\n<ul>\n<li><strong>고의 은닉</strong> — 채무자 회생법 제569조, 면책 결정일로부터 1년 이내 면책 취소 청구 가능.</li>\n<li><strong>선의 누락</strong> — 자료 부족·착오로 빠진 경우 즉시 보완 신고 시 취소 피할 수 있음.</li>\n<li><strong>대표 예</strong> — 차명 부동산, 숨긴 예금, 미신고 차량.</li>\n<li><strong>대응 원칙</strong> — 즉시 파산관재인에 신고 + 자산 반환·현금화 협조.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 미신고 자산의 면책 취소 위험을 분석해드립니다.</p>\n<a href="/chat?domain=bankruptcy" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '경우 3 — 면책 진행 중 자산 취득',
        content:
          '<p><strong style="color:#1e3a5f">파산 선고 후 ~ 면책 결정 전에 새로 생긴 자산은 파산재단 편입 여부가 쟁점입니다.</strong></p>\n<ul>\n<li><strong>급여·일반 소득</strong> — 파산 선고 이후의 소득은 원칙적으로 자유재산(파산재단 미편입).</li>\n<li><strong>상속</strong> — 선고 후 상속은 파산재단 편입 원칙, 다만 자유재산 한도 내 공제 가능.</li>\n<li><strong>복권 당첨·대물 취득</strong> — 재단 편입 가능성이 커 관재인과 협의 필요.</li>\n<li><strong>신고 의무</strong> — 법원·관재인에 즉시 신고.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 면책 결정 전에는 자산 변동 상황을 원칙적으로 관재인에 보고하는 것이 안전합니다.</blockquote>',
      },
      {
        title: '면책 취소 청구 — 요건과 기한',
        content:
          '<p><strong style="color:#1e3a5f">면책 취소는 엄격한 요건과 기간 제한이 있습니다.</strong></p>\n<ul>\n<li><strong>청구권자</strong> — 파산채권자 또는 파산관재인.</li>\n<li><strong>취소 사유</strong> — 채무자의 부정한 방법(재산 은닉·허위 기재 등).</li>\n<li><strong>청구 기간</strong> — 면책 결정 확정일로부터 1년 이내.</li>\n<li><strong>효과</strong> — 면책 취소 시 채무 부활, 재신청 제한.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 면책 확정 후 1년 이내에 자진 신고하면 취소 가능성을 낮출 수 있습니다. "1년만 버티면 된다"는 계산은 위험합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산 은닉에 따른 면책 취소',
        summary:
          '대법원 2022마2011 결정(대법원, 2022.11.10자)에서 법원은 채무자가 고가의 미술품·차명 예금을 의도적으로 신고하지 않은 사안에서 면책 결정 취소와 채무 부활을 인정했습니다.',
        takeaway:
          '고의 은닉이 드러나면 면책이 취소될 수 있으며, 기간·금액이 클수록 취소 가능성이 높습니다.',
      },
    ],
    faq: [
      {
        question: '면책 후 복권 당첨되면 회수되나요?',
        answer:
          '<strong>면책 이후 당첨된 복권은 채무자 소유입니다.</strong> 단, 세금·양육비 등 비면책채권자는 강제집행 가능.',
      },
      {
        question: '면책 후 부모 상속받으면 뺏기나요?',
        answer:
          '<strong>면책 이후 상속은 보호됩니다.</strong> 다만 일부 비면책채권자 청구 가능성은 존재.',
      },
      {
        question: '숨겼다가 1년 지나면 안전한가요?',
        answer:
          '<strong>법원 외 형사 사기파산죄(채무자회생법 제650조)가 별도로 성립할 수 있습니다.</strong> 시간만으로 안전 보장되지 않습니다.',
      },
      {
        question: '자진 신고하면 취소 안 되나요?',
        answer:
          '<strong>선의로 누락 후 자진 신고 시 취소 피할 수 있는 경우가 많습니다.</strong> 신속한 자진 신고가 최선입니다.',
      },
      {
        question: '면책 후 새 사업 성공하면 이전 빚 부활하나요?',
        answer:
          '<strong>부활하지 않습니다.</strong> 면책은 확정되면 유지되며, 단 부활 사유(고의 은닉)가 있을 때만 예외.',
      },
    ],
    cta: {
      text: '파산 면책 가능성, AI로 점검하기',
      link: '/chat?domain=bankruptcy',
    },
    internalLinks: [
      { label: '파산 후 삶의 변화', href: '/guide/bankruptcy/bankruptcy-after-discharge-life-changes' },
      { label: '파산 면책 채무 등록', href: '/guide/bankruptcy/bankruptcy-discharged-debt-registry' },
      { label: '신용 회복 타임라인', href: '/guide/bankruptcy/bankruptcy-credit-recovery-timeline' },
      { label: '비면책 채무 유형', href: '/guide/bankruptcy/bankruptcy-non-dischargeable-debt-types' },
      { label: '파산 면책 요건', href: '/guide/bankruptcy/bankruptcy-discharge-requirements-comprehensive' },
    ],
  },

  // ─── 11. bankruptcy / tax-debt-nondischargeable ───
  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-tax-debt-nondischargeable',
    keyword: '세금 비면책 채무 대응',
    questionKeyword: '파산해도 세금은 안 없어진다는데 어떻게 해야 하나요?',
    ctaKeyword: '세금 비면책 채무 대응 점검',
    type: '문제해결형',
    perspective: 'victim',
    meta: {
      title: '세금 비면책 채무 대응 — 파산 후 분납·감면 5단계 | 로앤가이드',
      description:
        '파산 면책을 받아도 세금은 남습니다. 국세·지방세 분납, 결손처분, 감면 신청 순서를 지금 확인하세요.',
    },
    intro:
      '<p>파산 면책을 받아 일반 채무는 정리됐지만 국세·지방세 고지서가 계속 날아오는 현실이 있습니다. 세금은 채무자 회생법상 비면책채권으로 면책 대상이 아니기 때문입니다. 그렇다고 납부가 어려운 상황에서 방치하면 강제징수와 신용 재추락으로 이어집니다. 세금 비면책 채무에 대응하는 5단계 전략을 정리합니다.</p>',
    sections: [
      {
        title: '세금이 비면책인 이유',
        content:
          '<p><strong style="color:#1e3a5f">채무자 회생법 제566조는 조세·벌금·양육비 등을 비면책채권으로 열거합니다.</strong></p>\n<ul>\n<li><strong>국세·지방세</strong> — 소득세·부가세·재산세·자동차세 등 일체.</li>\n<li><strong>벌금·과태료</strong> — 형사·행정 제재.</li>\n<li><strong>양육비·부양료</strong> — 가족법상 의무.</li>\n<li><strong>고의 불법행위 손해배상</strong> — 악의 불법행위로 인한 배상금.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 파산 면책으로 세금은 절대 사라지지 않습니다. 세금은 별도 루트로 해결해야 합니다.</blockquote>',
      },
      {
        title: '분납 — 가장 현실적인 1차 대응',
        content:
          '<p><strong style="color:#1e3a5f">세무서·구청 세무과는 납부 능력을 고려해 분납을 허용합니다.</strong></p>\n<ul>\n<li><strong>국세 분납</strong> — 국세징수법 제13조, 최대 9개월 이내 분할 납부 가능.</li>\n<li><strong>지방세 분납</strong> — 각 지자체 조례 적용, 보통 3~12개월.</li>\n<li><strong>신청 서류</strong> — 소득·재산 증빙 + 분납 계획서.</li>\n<li><strong>승인 요건</strong> — 일시납 곤란 + 성실 납부 의사.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 세금 비면책 채무의 분납·결손 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=bankruptcy" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '결손처분·체납액 정리 — 고정체납자 구제',
        content:
          '<p><strong style="color:#1e3a5f">징수 가능성이 없다고 판단되면 국세·지방세 결손처분이 이루어질 수 있습니다.</strong></p>\n<ul>\n<li><strong>결손처분 요건</strong> — 체납자 재산이 없고 생활이 현저히 곤란한 경우.</li>\n<li><strong>효과</strong> — 장부상 정리되나 체납 사실은 남고, 추후 재산 발견 시 징수 재개 가능.</li>\n<li><strong>신청 방법</strong> — 세무서 민원실에 결손처분 검토 요청 + 재산·소득 증빙.</li>\n<li><strong>주의</strong> — 결손 = 면제 아님. 시효 소멸까지는 위험 잔존.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 결손처분은 자동으로 되지 않고 본인이 신청해야 합니다. 체납액·체납기간 오래된 건부터 상담하세요.</blockquote>',
      },
      {
        title: '소멸시효·감면·체납처분 중지 5단계',
        content:
          '<p><strong style="color:#1e3a5f">장기 체납의 경우 소멸시효와 체납처분 중지로 부담을 줄일 수 있습니다.</strong></p>\n<ul>\n<li><strong>1단계: 국세 소멸시효 확인</strong> — 원칙 5년, 5억 원 이상 10년. 중단·정지 사유 여부 확인.</li>\n<li><strong>2단계: 재산조사·체납처분 중지</strong> — 재산 없음 + 생활 곤란 시 체납처분 중지 요청.</li>\n<li><strong>3단계: 납세자 권리 구제</strong> — 조세심판원 심판·행정소송 활용.</li>\n<li><strong>4단계: 근로장려금 연계</strong> — 근로장려·자녀장려금 수급으로 일부 상쇄 가능.</li>\n<li><strong>5단계: 재기지원제도</strong> — 신용회복위원회·지자체 재기 지원 사업 병행.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "세금도 파산으로 사라진다"고 주장하는 업체는 거짓 정보입니다. 세금은 가능한 한 별도 루트로 접근해야 합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 파산 면책 후 조세채권의 비면책성',
        summary:
          '대법원 2023두38412 사건(대법원, 2023.10.12 선고)에서 법원은 파산 면책 결정이 있더라도 조세채권은 채무자 회생법 제566조의 비면책채권에 해당하므로 국가의 강제징수권은 유효하다고 판시했습니다.',
        takeaway:
          '파산 면책은 조세채권에 영향을 미치지 않으며, 세금은 별도의 분납·결손·시효로 대응해야 합니다.',
      },
    ],
    faq: [
      {
        question: '파산해도 세금은 정말 안 없어지나요?',
        answer:
          '<strong>네, 맞습니다.</strong> 조세채권은 비면책채권이며 파산과 무관하게 징수됩니다.',
      },
      {
        question: '체납액 장기간 안 내면 자동 소멸되나요?',
        answer:
          '<strong>국세 5년(고액 10년), 지방세 5년 시효가 있지만 중단 사유가 자주 발생해 실제로 소멸되는 경우는 드뭅니다.</strong>',
      },
      {
        question: '건강보험료·국민연금도 면책되나요?',
        answer:
          '<strong>사회보험료도 조세 유사 채권으로 비면책 해석이 일반적입니다.</strong> 개별 기관에 분납·경감 신청이 필요.',
      },
      {
        question: '세금 때문에 통장 압류되면 어떻게 풀까요?',
        answer:
          '<strong>최저생계비 150만원·185만원 등 압류금지 한도가 있습니다.</strong> 세무서 민원실에 압류 해제·분납 동시 신청하세요.',
      },
      {
        question: '결손처분 되면 신용에 영향 있나요?',
        answer:
          '<strong>체납 사실 자체가 신용정보에 등록되므로 영향이 있습니다.</strong> 다만 징수 압박은 감소합니다.',
      },
    ],
    cta: {
      text: '파산 면책 가능성, AI로 점검하기',
      link: '/chat?domain=bankruptcy',
    },
    internalLinks: [
      { label: '비면책 채무 유형', href: '/guide/bankruptcy/bankruptcy-non-dischargeable-debt-types' },
      { label: '세금 체납 면책 여부', href: '/guide/bankruptcy/bankruptcy-tax-debt-discharge-possible' },
      { label: '파산 면책 요건', href: '/guide/bankruptcy/bankruptcy-discharge-requirements-comprehensive' },
      { label: '신용 회복 타임라인', href: '/guide/bankruptcy/bankruptcy-credit-recovery-timeline' },
      { label: '파산 후 삶의 변화', href: '/guide/bankruptcy/bankruptcy-after-discharge-life-changes' },
    ],
  },
];
