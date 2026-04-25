import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 25. 이 페이지는 [교통사고 가해자]의 [치상·치사로 형사기소 전 준비 단계]에서 [기소 전 합의·증거 수집·변호사 선임 전략]을 돕는 페이지다.
// 26. 이 페이지는 [뺑소니 혐의를 받고 있는 가해자]의 [사고 발생 후 24시간 내 긴박한 상황]에서 [특가법 도주치상 혐의 대응 방법]을 돕는 페이지다.
// 27. 이 페이지는 [백색실선 침범 사고를 낸 가해자]의 [형사처벌 여부와 반의사불벌죄 적용 확인 단계]에서 [처벌 여부 판단 및 합의 방법]을 돕는 페이지다.
// 28. 이 페이지는 [교통사고 보행자·자전거 피해자]의 [합의금 청구 금액 산정 단계]에서 [적정 보상액 계산 및 청구 방법]을 돕는 페이지다.
// 29. 이 페이지는 [중앙선 침범 사고 피해자]의 [손해배상 소송 또는 청구 준비 단계]에서 [가해자 파산 시 비면책채권 여부 포함 손해배상 청구 전략]을 돕는 페이지다.

export const spokesBatch26_25to29: SpokePage[] = [
  // ───────────────────────────────────────────
  // 25. traffic-accident / traffic-accident-offender-criminal-charge-response
  // ───────────────────────────────────────────
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-offender-criminal-charge-response',
    keyword: '교통사고 가해자 형사처벌 기소 전 대응 4단계',
    questionKeyword: '교통사고를 냈는데 형사처벌을 받게 될 것 같아요. 기소 전에 어떻게 대응해야 하나요?',
    ctaKeyword: '교통사고 가해자 형사처벌 대응 상담',
    type: '절차형',
    perspective: 'offender',
    meta: {
      title: '교통사고 가해자 형사처벌 기소 전 대응 4단계 | 로앤가이드',
      description:
        '교통사고로 치상·치사 혐의를 받고 있다면 기소 전 합의와 변호사 선임 시기, 준비서류 4가지를 지금 확인하세요',
    },
    intro:
      '<p>교통사고 후 경찰서에서 연락이 왔습니다. 피해자가 전치 8주 진단을 받았고 교통사고처리특례법 위반으로 수사가 시작되었다는 내용이었습니다. "합의를 하면 형사처벌을 피할 수 있다"는 말을 들었지만, 언제 어떻게 해야 하는지 막막합니다. 교통사고 가해자가 형사기소를 피하려면 기소 전 단계에서 구체적인 행동이 필요합니다. 지금 이 글에서 기소 전 대응 4단계를 순서대로 정리해드립니다.</p>',
    sections: [
      {
        title: '교통사고 가해자 형사처벌 구조: 무엇이 달라지나',
        content:
          '<p><strong style="color:#1e3a5f">교통사고처리특례법에 따라 가해자의 처벌 여부는 사고 유형에 따라 크게 달라집니다. 치상·치사 여부와 12대 중과실 해당 여부를 먼저 확인하세요.</strong></p>\n<ul>\n<li><strong>반의사불벌죄 적용(경과실)</strong> — 신호위반, 중앙선 침범, 속도위반 등 12대 중과실에 해당하지 않는 일반 과실 사고는 피해자가 처벌을 원하지 않으면 형사처벌을 받지 않습니다. 합의가 핵심입니다</li>\n<li><strong>12대 중과실 해당 사고</strong> — 신호위반, 중앙선 침범, 음주운전, 과속, 무면허 운전 등 12대 중과실이 인정되면 피해자가 합의해도 형사처벌이 가능합니다. 종합보험에 가입되어 있어도 예외 없이 기소될 수 있습니다</li>\n<li><strong>치사 사고</strong> — 피해자가 사망한 경우 반의사불벌죄가 적용되지 않고 교통사고처리특례법 위반(치사)으로 기소됩니다. 합의와 무관하게 형사 절차가 진행됩니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 내 사고가 12대 중과실에 해당하는지, 피해자가 치상인지 치사인지에 따라 대응 전략이 완전히 달라집니다. 먼저 이 두 가지를 확인하세요</blockquote>',
      },
      {
        title: '기소 전 대응 4단계',
        content:
          '<p><strong style="color:#1e3a5f">형사기소를 피하거나 처벌을 최소화하려면 아래 순서대로 행동해야 합니다.</strong></p>\n<ol>\n<li><strong>1단계: 변호사 선임 — 사고 직후 72시간 이내</strong>: 피해자와의 합의 방법, 경찰 조사 대응, 사고 사실 확인 등 모든 과정에서 변호사 조력이 필요합니다. 혼자 진술하다가 불리한 기록이 남으면 나중에 번복하기 어렵습니다</li>\n<li><strong>2단계: 피해자 합의 시도 — 검사 송치 전까지</strong>: 경찰이 사건을 검사에게 송치하기 전에 합의가 이루어지면 기소 가능성이 크게 낮아집니다. 합의금 수준은 부상 정도, 치료비, 향후치료비, 위자료를 기준으로 산정합니다. 직접 접촉보다 변호사를 통한 협상이 효과적입니다</li>\n<li><strong>3단계: 서류 준비 — 합의 전후</strong>: 교통사고확인서, 진단서, 사고 당시 CCTV·블랙박스 영상, 자동차 보험 증권을 확보하세요. 블랙박스 영상은 덮어써지기 전에 가능한 한 백업해두어야 합니다</li>\n<li><strong>4단계: 검찰 송치 후 불기소 또는 약식기소 대응</strong>: 합의가 이루어졌더라도 검사가 공소를 제기할 수 있습니다. 이 경우 변호사를 통해 불기소 처분 또는 약식명령(벌금)으로 마무리될 수 있도록 탄원서, 반성문, 합의서를 제출합니다</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">교통사고 가해자 형사처벌 가능성과 합의 전략을 AI가 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">기소 전 준비해야 할 서류를 단계별로 정리했습니다.</strong></p>\n<ul>\n<li><strong>사고 관련 서류</strong> — 교통사고확인서(경찰서 발급), 자동차 보험 가입증명서, 블랙박스·CCTV 영상 파일(원본 보관)</li>\n<li><strong>피해자 측 서류</strong> — 진단서 사본, 치료비 영수증(보험사 청구 내역 포함), 합의서(합의 후)</li>\n<li><strong>형사 절차 대응 서류</strong> — 변호인 선임계, 반성문, 탄원서(가족·직장 상사 등), 사회 기여 자료(봉사활동 확인서 등)</li>\n<li><strong>급발진 항변 등 특수 상황</strong> — 차량 제조사 결함 자료, 국립과학수사연구원 감정서, 블랙박스 EDR(사고기록장치) 데이터 등</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 사고 후 블랙박스 영상은 48~72시간 내에 덮어써질 수 있습니다. 사고 직후 즉시 SD카드를 분리하여 원본을 보관하세요</blockquote>',
      },
      {
        title: '형량을 줄이는 3가지 요소',
        content:
          '<p><strong style="color:#1e3a5f">기소가 불가피한 상황이라도 아래 요소들을 갖추면 집행유예 또는 벌금형으로 마무리될 가능성이 높아집니다.</strong></p>\n<ol>\n<li><strong>피해자 합의(처벌불원서)</strong> — 피해자가 처벌을 원하지 않는다는 의사를 법원에 제출하면 형량 결정에 가장 큰 영향을 미칩니다. 합의 시기가 이를수록 유리합니다</li>\n<li><strong>초범 여부</strong> — 교통사고 전력이 없고 전과가 없는 초범이라면 집행유예를 받을 가능성이 상당히 높아집니다</li>\n<li><strong>진지한 반성과 사회 유대감</strong> — 법원은 반성문, 탄원서, 봉사활동 확인서 등을 통해 피고인의 태도를 평가합니다. 재범 가능성이 낮다고 판단되면 실형을 피할 수 있습니다</li>\n</ol>',
      },
    ],
    cases: [
      {
        title: '판례 — 급발진 항변 치사 사건, 법원이 유죄 선고한 이유',
        summary:
          '대전지법 2023노1855 사건(대전지법, 2024.10.10 선고)에서 법원은 피고인이 "급발진 사고"라고 주장하며 자신에게 과실이 없다고 다투었으나, 국립과학수사연구원 감정 결과와 CCTV 영상 분석에 따라 브레이크가 아닌 가속페달을 밟은 운전자의 과실로 사고가 발생했다고 판시하며 유죄를 선고했습니다. 피고인의 30년 운전 경력에도 불구하고 가속페달과 브레이크페달을 혼동하는 과실은 충분히 인정된다고 했습니다.',
        takeaway:
          '급발진을 주장하려면 EDR 데이터·국과수 감정·CCTV 분석 등 객관적 증거가 뒷받침되어야 합니다. 항변만으로는 무죄가 인정되기 어렵고, 증거 없이 주장할 경우 오히려 반성 없는 태도로 평가될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '교통사고 가해자인데 합의를 하면 형사처벌을 완전히 피할 수 있나요?',
        answer:
          '<strong>사고 유형에 따라 다릅니다.</strong> 12대 중과실(신호위반·중앙선 침범 등)이 아닌 일반 과실 사고에서 피해자가 처벌불원서를 제출하면 기소 자체가 되지 않거나 불기소 처분을 받을 수 있습니다. 그러나 12대 중과실이 인정되거나 치사 사고인 경우에는 합의 여부와 무관하게 기소됩니다. 합의는 형량을 낮추는 데 결정적 역할을 합니다.',
      },
      {
        question: '경찰 조사 시 어떻게 진술해야 불리하지 않나요?',
        answer:
          '<strong>경찰 조사 전 가능한 한 변호사와 상담하세요.</strong> 사고 경위를 설명할 때 자신에게 불리한 내용을 불필요하게 언급하지 말고, 사실관계가 불분명한 부분은 "정확히 기억하지 못한다"고 진술하는 것이 안전합니다. 섣불리 과실을 인정하는 진술을 하면 나중에 번복하기 어렵습니다.',
      },
      {
        question: '피해자 측에서 합의를 거부하면 어떻게 해야 하나요?',
        answer:
          '<strong>법원 공탁 제도를 활용하세요.</strong> 피해자가 합의를 거부하더라도 법원에 합의금에 상당하는 금액을 공탁하면 피해를 배상하려는 의지를 법원에 보여줄 수 있습니다. 공탁은 양형 판단에서 합의와 유사한 효과를 가져옵니다.',
      },
      {
        question: '종합보험에 가입되어 있으면 형사처벌을 받지 않는다고 들었는데 맞나요?',
        answer:
          '<strong>12대 중과실이 없는 일반 과실 사고에서만 종합보험 가입 특례가 적용됩니다.</strong> 신호위반, 중앙선 침범, 음주운전 등 12대 중과실 사고는 종합보험에 가입되어 있어도 형사처벌을 받습니다. 내 사고가 어느 유형에 해당하는지 먼저 확인해야 합니다.',
      },
      {
        question: '사고 후 도주하지 않았는데 왜 특가법 위반으로 수사를 받는다고 하나요?',
        answer:
          '<strong>구호조치를 취하지 않으면 사고 현장에 있었더라도 도주로 인정될 수 있습니다.</strong> 교통사고 후 피해자를 구호하지 않고 자리를 피하거나 연락처를 제공하지 않으면 특가법 도주치상으로 처벌받을 수 있습니다. 사고 직후 119 신고, 피해자 구호 조치 여부가 핵심입니다.',
      },
    ],
    cta: {
      text: '교통사고 가해자 형사처벌 가능성, AI가 빠르게 분석해드립니다',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 합의금 기준 총정리', href: '/guide/traffic-accident/traffic-accident-settlement-fair-amount' },
      { label: '뺑소니 혐의 24시간 내 대응', href: '/guide/traffic-accident/traffic-accident-hitandrun-charge-first-response' },
      { label: '음주운전 사고 형사처벌 대응', href: '/guide/dui/dui-accident-criminal-response' },
      { label: '교통사고 자동차보험 청구 방법', href: '/guide/insurance/insurance-traffic-accident-claim' },
      { label: '교통사고 과실비율 다투는 법', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
    ],
  },

  // ───────────────────────────────────────────
  // 26. traffic-accident / traffic-accident-hitandrun-charge-first-response
  // ───────────────────────────────────────────
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-hitandrun-charge-first-response',
    keyword: '뺑소니 혐의 24시간 내 대응 3단계',
    questionKeyword: '뺑소니 혐의를 받고 있는데 사고인 줄 몰랐어요. 24시간 내에 어떻게 해야 하나요?',
    ctaKeyword: '뺑소니 혐의 긴급 대응 상담',
    type: '상황형',
    perspective: 'offender',
    meta: {
      title: '뺑소니 혐의 24시간 내 대응 3단계 | 로앤가이드',
      description:
        '뺑소니 혐의를 받고 있다면 특가법 도주치상 성립 여부와 24시간 내 취해야 할 행동 3가지를 지금 확인하세요',
    },
    intro:
      '<p>운전을 마치고 집에 돌아왔는데 경찰에서 연락이 왔습니다. "뺑소니 신고가 들어왔다"는 겁니다. 사고인 줄 몰랐거나, 사소한 접촉이라 그냥 지나쳤는데 이게 특가법 도주치상이 될 수 있다고 합니다. 뺑소니(특가법 도주치상)는 일반 교통사고와 처벌 수위가 완전히 다릅니다. 1년 이상의 유기징역이 기본 형량입니다. 혐의를 받고 있다면 24시간 내에 아래 3단계를 따라 대응해야 합니다.</p>',
    sections: [
      {
        title: '뺑소니(특가법 도주치상) 성립 요건 — 내 상황에 해당하나',
        content:
          '<p><strong style="color:#1e3a5f">뺑소니는 단순히 현장을 떠나는 것이 아닙니다. 아래 3가지 요소가 모두 충족되어야 성립할 수 있습니다.</strong></p>\n<ol>\n<li><strong>교통사고 발생</strong> — 자동차 운전 중 타인에게 상해를 입히거나 재산상 손해를 발생시켜야 합니다</li>\n<li><strong>피해 인식 또는 인식 가능성</strong> — 피해자가 다쳤다는 사실을 알았거나 알 수 있었음에도 구호 조치 없이 현장을 이탈해야 합니다. 몰랐다는 주장은 당시 상황, 충격 정도, 블랙박스 영상 등으로 판단합니다</li>\n<li><strong>구호조치 미이행</strong> — 피해자를 구호하거나 신원을 밝히는 등 필요한 조치를 전혀 취하지 않아야 합니다</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "몰랐다"는 주장이 인정되려면 충격이 경미했다는 객관적 증거(블랙박스 영상, 차량 손상 정도, 주변 목격자 진술)가 있어야 합니다</blockquote>',
      },
      {
        title: '24시간 내 대응 3단계',
        content:
          '<p><strong style="color:#1e3a5f">뺑소니 혐의를 받고 있다면 지체 없이 아래 3가지를 실행하세요.</strong></p>\n<ol>\n<li><strong>1단계: 변호사 선임 즉시</strong> — 경찰 출석 전에 가능한 한 형사 전문 변호사를 선임하세요. 뺑소니 사건은 초기 조사에서 무엇을 인정하고 무엇을 다투느냐에 따라 결과가 크게 달라집니다. 혼자 진술하다가 불필요하게 인식 사실을 인정하면 나중에 번복이 어렵습니다</li>\n<li><strong>2단계: 블랙박스·CCTV 영상 확보</strong> — 사고 당시 영상은 뺑소니 혐의를 다투는 가장 중요한 증거입니다. 본인 차량 블랙박스는 즉시 SD카드를 분리하고, 사고 지점 인근 교통 CCTV 영상은 경찰 또는 변호사를 통해 확보 요청하세요. 영상이 덮어써지기 전에 행동해야 합니다</li>\n<li><strong>3단계: 피해자 구호 의사 표명</strong> — 아직 피해자와 연락이 닿지 않았다면 경찰을 통해 적극적인 구호 의사를 밝히고, 치료비 지원 의사를 표명하세요. 사고 인지 후 자진신고 또는 적극적 구호 시도는 양형에서 긍정적으로 반영됩니다</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">뺑소니 혐의 성립 여부와 대응 방법을 AI가 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '특가법 도주치상과 일반 도주 — 처벌 수위 비교',
        content:
          '<p><strong style="color:#1e3a5f">뺑소니 관련 처벌은 피해 결과에 따라 크게 달라집니다. 내 상황이 어느 경우에 해당하는지 확인하세요.</strong></p>\n<ul>\n<li><strong>특가법 도주치상(피해자 상해)</strong> — 1년 이상의 유기징역 또는 500만 원 이상 3,000만 원 이하의 벌금. 교통사고처리특례법상 일반 처벌보다 훨씬 무겁습니다</li>\n<li><strong>특가법 도주치사(피해자 사망)</strong> — 무기징역 또는 5년 이상의 징역. 합의나 반성이 양형에 반영되더라도 실형을 피하기 어렵습니다</li>\n<li><strong>도로교통법 위반(사고후미조치)</strong> — 뺑소니가 아닌 구호조치만 미이행한 경우 5년 이하의 징역 또는 1,500만 원 이하의 벌금</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">피해자와의 합의는 특가법 도주치상에서도 집행유예를 받을 수 있는 핵심 요소입니다. 형사 변호사를 통해 최대한 빠르게 합의를 시도하세요</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 불법유턴 후 도주, 오토바이 사고와 인과관계 인정',
        summary:
          '서울서부지법 2023노1354 사건(서울서부지법, 2024.08.22 선고)에서 법원은 피고인이 유턴 가능 구역이 아닌 중앙선 실선 구간에서 불법유턴을 하다가 오토바이 사고를 일으켰는데, 피해자의 과실도 있었지만 피고인의 불법유턴과 사고 사이에 상당인과관계를 인정하고, 구호조치 없이 도주한 행위를 특가법 위반(도주치상)으로 판단했습니다. 법원은 피해자에게도 과실이 있다는 점이 피고인의 과실 면제 근거가 되지 않는다고 명확히 했습니다.',
        takeaway:
          '피해자에게도 과실이 있다는 사정은 운전자의 구호조치 의무를 면제하지 않습니다. 사고가 발생했다면 과실 비율과 무관하게 구호조치를 취해야 하며, 이를 하지 않으면 도주로 인정될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '사고인 줄 몰랐다고 하면 뺑소니가 아닌 건가요?',
        answer:
          '<strong>인식 가능성이 없었다는 것이 객관적 증거로 입증되어야 합니다.</strong> 단순히 "몰랐다"는 주장만으로는 부족하고, 충격이 매우 경미하여 합리적으로 사고를 인식하기 어려웠다는 점이 블랙박스 영상, 차량 손상 정도, 충돌 데이터 등으로 뒷받침되어야 합니다.',
      },
      {
        question: '뺑소니 후 자진신고를 하면 처벌이 줄어드나요?',
        answer:
          '<strong>자진신고는 양형에서 상당한 긍정적 요소로 작용합니다.</strong> 특히 사고 발생 후 24시간 이내에 자진신고하면 특가법이 아닌 일반 교통사고처리특례법이 적용되어 처벌 수위가 크게 낮아질 수 있습니다. 지체 없이 변호사와 상담 후 자진신고를 검토하세요.',
      },
      {
        question: '피해자가 경미한 부상이라도 뺑소니로 처벌받나요?',
        answer:
          '<strong>피해자에게 어떠한 상해도 발생하지 않았다면 특가법 도주치상은 성립하지 않습니다.</strong> 그러나 경미한 찰과상이나 타박상도 상해로 인정될 수 있으며, 이 경우 특가법이 적용됩니다. 피해자의 진단서 내용과 부상 정도가 중요합니다.',
      },
      {
        question: '오토바이 운전자가 신호를 위반하고 제한속도도 초과했는데도 제가 뺑소니가 되나요?',
        answer:
          '<strong>피해자의 과실이 있더라도 구호조치 의무는 면제되지 않습니다.</strong> 서울서부지법 2023노1354 판결에서도 확인되었듯이, 사고 발생에 피해자의 과실이 기여했더라도 운전자에게 구호조치 의무가 있습니다. 다만 피해자의 과실은 형량 결정에 유리한 양형 요소가 됩니다.',
      },
      {
        question: '회사 차량으로 뺑소니 사고가 난 경우 회사도 처벌받나요?',
        answer:
          '<strong>양벌규정에 따라 사업주도 처벌받을 수 있습니다.</strong> 교통사고가 업무 중 발생한 경우 사용자(회사)도 벌금형 처벌을 받을 수 있습니다. 회사 차량을 운전하는 경우 사고 즉시 회사에 알리고 대응 방안을 함께 마련해야 합니다.',
      },
    ],
    cta: {
      text: '뺑소니 혐의 받고 있다면, AI가 빠르게 대응 전략을 분석해드립니다',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 가해자 형사처벌 기소 전 대응', href: '/guide/traffic-accident/traffic-accident-offender-criminal-charge-response' },
      { label: '음주운전 뺑소니 처벌 기준', href: '/guide/dui/dui-hitandrun-penalty' },
      { label: '교통사고 합의금 산정 기준', href: '/guide/traffic-accident/traffic-accident-settlement-fair-amount' },
      { label: '자동차보험 사고 처리 절차', href: '/guide/insurance/insurance-traffic-accident-claim' },
      { label: '교통사고 과실비율 산정 기준', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
    ],
  },

  // ───────────────────────────────────────────
  // 27. traffic-accident / traffic-accident-lane-violation-criminal-penalty
  // ───────────────────────────────────────────
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-lane-violation-criminal-penalty',
    keyword: '백색실선 침범 교통사고 형사처벌 여부 3가지 기준',
    questionKeyword: '백색실선을 침범해서 사고가 났는데 형사처벌을 받나요? 합의하면 괜찮나요?',
    ctaKeyword: '백색실선 침범 교통사고 처벌 여부 상담',
    type: '수치기한형',
    perspective: 'offender',
    meta: {
      title: '백색실선 침범 교통사고 형사처벌 여부 3가지 기준 | 로앤가이드',
      description:
        '백색실선 침범 후 교통사고가 났다면 반의사불벌죄 적용 여부와 합의로 처벌을 피할 수 있는지 3가지 기준으로 지금 확인하세요',
    },
    intro:
      '<p>차선을 변경하다가 옆 차와 충돌했습니다. 경찰이 "백색실선 침범"이라고 하는데, 이게 12대 중과실에 해당하는지, 형사처벌을 받는지 모르겠습니다. 피해자와 합의하면 처벌을 면할 수 있다는 말도 들었지만 확신이 없습니다. 대법원 2022도12175 판결(2024년 6월)에서 이 문제가 명확하게 정리되었습니다. 백색실선 침범은 형사처벌특례가 적용되는 상황으로, 아래에서 자세히 설명해드립니다.</p>',
    sections: [
      {
        title: '대법원 2022도12175 판결 — 백색실선 침범과 반의사불벌죄',
        content:
          '<p><strong style="color:#1e3a5f">2024년 6월 대법원은 백색실선 침범에 대해 중요한 판결을 내렸습니다. 형사 책임 범위를 명확히 이해해야 대응 방향이 정해집니다.</strong></p>\n<ul>\n<li><strong>백색실선 침범은 12대 중과실이 아닙니다</strong> — 교통사고처리특례법 제3조 제2항 단서 제1호의 "통행금지를 내용으로 하는 안전표지"에 백색실선(진로변경제한선)은 포함되지 않습니다</li>\n<li><strong>반의사불벌죄가 적용됩니다</strong> — 백색실선 침범 사고는 피해자가 처벌을 원하지 않으면(처벌불원) 형사처벌을 받지 않습니다. 또한 종합보험에 가입되어 있으면 형사처벌특례도 적용됩니다</li>\n<li><strong>합의가 가장 중요한 대응 수단</strong> — 피해자와 합의하여 처벌불원서를 받으면 검사는 기소하지 않거나 불기소 처분을 내릴 수 있습니다</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 백색실선 침범 사고는 12대 중과실 사고와 달리, 피해자 합의와 종합보험 가입으로 형사처벌을 피할 수 있습니다</blockquote>',
      },
      {
        title: '처벌 여부 결정하는 3가지 기준',
        content:
          '<p><strong style="color:#1e3a5f">백색실선 침범 후 교통사고가 났을 때 형사처벌 여부는 아래 3가지를 기준으로 판단됩니다.</strong></p>\n<ol>\n<li><strong>종합보험 가입 여부</strong> — 자동차 종합보험(대인·대물 모두 포함)에 가입되어 있으면 교통사고처리특례법 제4조에 따라 형사처벌 특례가 적용됩니다. 단, 사고 당시 보험이 유효하게 가입되어 있어야 합니다</li>\n<li><strong>피해자의 처벌 의사</strong> — 종합보험 미가입이라도 피해자가 처벌을 원하지 않는다는 의사(처벌불원)를 표시하면 반의사불벌죄 규정에 따라 기소되지 않습니다. 피해자와의 합의가 핵심입니다</li>\n<li><strong>다른 중과실 사유의 경합 여부</strong> — 백색실선 침범과 함께 신호위반, 속도위반(20km/h 초과), 음주운전 등이 경합하면 12대 중과실이 별도로 적용될 수 있습니다. 이 경우 합의만으로 형사처벌을 피하기 어렵습니다</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">백색실선 침범 사고 형사처벌 여부와 합의 전략을 AI가 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '백색실선 침범 사고 후 대응 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">사고 후 단계별로 해야 할 일을 정리했습니다.</strong></p>\n<ul>\n<li><strong>즉시</strong> — 구호조치(119 신고, 피해자 안전 확인), 경찰 신고, 블랙박스 영상 백업</li>\n<li><strong>사고 당일~3일 내</strong> — 보험사에 사고 접수, 차량 손상 사진 촬영 및 보관, 진단서 요청(피해자 부상 정도 파악)</li>\n<li><strong>합의 단계</strong> — 보험사를 통한 치료비 지원 및 합의금 협상 진행. 처벌불원서를 합의서와 함께 받는 것이 핵심입니다</li>\n<li><strong>수사 단계</strong> — 경찰 조사 출석 시 블랙박스 영상·합의서 등을 지참. 합의 완료 후 불기소 처분을 요청하세요</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 백색실선 침범은 통행금지 표지 위반이 아니다',
        summary:
          '대법원 2022도12175 사건(대법원, 2024.06.20 선고)에서 법원은 진로변경을 금지하는 안전표지인 백색실선은 교통사고처리특례법 제3조 제2항 단서 제1호에서 정한 "통행금지를 내용으로 하는 안전표지"에 해당하지 않으므로, 백색실선을 침범하여 교통사고를 일으킨 운전자에게는 반의사불벌죄 규정 및 종합보험 가입 특례가 적용된다고 판시했습니다.',
        takeaway:
          '백색실선 침범 사고는 12대 중과실이 아니므로 피해자 합의(처벌불원)나 종합보험 가입으로 형사처벌을 피할 수 있습니다. 다만 음주·신호위반 등 다른 중과실이 함께 인정되면 별도로 처벌받을 수 있으니 주의하세요.',
      },
    ],
    faq: [
      {
        question: '백색실선 침범 사고인데 종합보험이 없으면 원칙적으로 형사처벌인가요?',
        answer:
          '<strong>종합보험이 없어도 피해자가 처벌을 원하지 않으면(반의사불벌죄) 기소되지 않습니다.</strong> 피해자와 합의하고 처벌불원서를 받으면 형사처벌을 피할 수 있습니다. 다만 합의에 실패하면 형사처벌이 불가피할 수 있으므로 최대한 빨리 합의를 시도하세요.',
      },
      {
        question: '백색실선 침범이면서 동시에 과속도 했는데 어떻게 되나요?',
        answer:
          '<strong>속도위반(제한속도 20km/h 초과)은 12대 중과실에 해당할 소지가 있습니다.</strong> 백색실선 침범 자체는 12대 중과실이 아니지만, 과속이 함께 인정되면 처벌특례가 배제되어 합의와 무관하게 기소될 수 있습니다. 과속 여부를 사고 기록과 블랙박스로 확인하세요.',
      },
      {
        question: '교량 위에서 백색실선을 넘어 앞지르기를 하다가 사고가 났는데 다른가요?',
        answer:
          '<strong>교량이나 터널에서 백색실선을 넘어 앞지르기를 한 경우에는 별도의 처벌특례 배제사유가 있습니다.</strong> 교통사고처리특례법 제3조 제2항 단서 제4호에 따라 앞지르기 방법 위반이 적용될 수 있어 반의사불벌죄가 적용되지 않을 수 있습니다. 사고 경위를 정확히 확인해야 합니다.',
      },
      {
        question: '피해자가 합의금을 너무 많이 요구하면 어떻게 하나요?',
        answer:
          '<strong>법원 공탁 제도를 활용하거나 조정 기관을 통해 적정 금액을 산정할 수 있습니다.</strong> 피해자의 요구액이 지나치게 높다면 법원에 적정 금액을 공탁하여 성실한 배상 의사를 밝히는 방법이 있습니다. 금융감독원 자동차보험 분쟁조정위원회에 조정을 신청하는 것도 방법입니다.',
      },
    ],
    cta: {
      text: '백색실선 침범 교통사고 처벌 여부, AI가 빠르게 분석해드립니다',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 가해자 형사처벌 기소 전 대응', href: '/guide/traffic-accident/traffic-accident-offender-criminal-charge-response' },
      { label: '교통사고 합의금 청구 기준', href: '/guide/traffic-accident/traffic-accident-settlement-fair-amount' },
      { label: '음주운전 교통사고 처벌', href: '/guide/dui/dui-accident-criminal-response' },
      { label: '자동차보험 분쟁조정 신청 방법', href: '/guide/insurance/insurance-dispute-resolution' },
      { label: '교통사고 과실비율 다투는 법', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
    ],
  },

  // ───────────────────────────────────────────
  // 28. traffic-accident / traffic-accident-pedestrian-cyclist-victim-compensation
  // ───────────────────────────────────────────
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-pedestrian-cyclist-victim-compensation',
    keyword: '보행자·자전거 교통사고 피해자 합의금 청구 4단계',
    questionKeyword: '교통사고로 다쳤는데 보행자·자전거 피해자로서 합의금을 얼마나 받을 수 있나요?',
    ctaKeyword: '보행자 자전거 교통사고 피해자 합의금 상담',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '보행자·자전거 교통사고 피해 합의금 청구 4단계 | 로앤가이드',
      description:
        '교통사고로 다쳤는데 보행자나 자전거 피해자라면 받을 수 있는 합의금 항목과 청구 방법 4단계를 지금 확인하세요',
    },
    intro:
      '<p>횡단보도를 건너다가 차에 치였습니다. 다행히 입원은 했지만 뼈가 부러지지는 않았다는데, 보험사에서는 200만 원으로 합의하자고 합니다. 14주 진단을 받았는데 200만 원이 맞는 건지, 더 받을 수 있는지 알 수 없습니다. 보행자와 자전거 피해자는 자동차 탑승자와 달리 보호받는 범위가 더 넓고, 청구할 수 있는 항목도 다릅니다. 지금부터 합의금을 제대로 받는 4단계를 설명드립니다.</p>',
    sections: [
      {
        title: '보행자·자전거 피해자가 받을 수 있는 합의금 항목',
        content:
          '<p><strong style="color:#1e3a5f">교통사고 합의금은 단일 금액이 아닙니다. 아래 항목별로 산정되므로 하나씩 확인해야 합니다.</strong></p>\n<ul>\n<li><strong>치료비</strong> — 입원비, 수술비, 통원치료비, 약제비, 향후치료비(치료가 더 필요한 경우). 향후치료비는 의사의 소견서를 통해 청구합니다</li>\n<li><strong>휴업손해</strong> — 부상으로 일을 못 한 기간 동안의 소득 손실. 직장인은 급여명세서, 자영업자는 종합소득세 신고서, 주부는 도시일용근로자 임금 기준으로 산정합니다</li>\n<li><strong>위자료</strong> — 정신적 고통에 대한 보상. 사망 사고: 8,000만~1억 원, 중상해: 1,000만~3,000만 원, 경상해: 200만~500만 원 수준이 일반적입니다. 전치 기간과 후유장해 등급에 따라 달라집니다</li>\n<li><strong>후유장해 보상금</strong> — 완치 후에도 신체적 장해가 남는 경우 장해 등급에 따라 수백만~수억 원 청구 가능합니다</li>\n<li><strong>기타</strong> — 교통비, 간병비, 의료보조기기 구입비 등</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보험사 첫 제안에는 향후치료비·후유장해 보상금이 포함되지 않는 경우가 많습니다. 서면 내역서를 받아 항목별로 비교하세요</blockquote>',
      },
      {
        title: '합의금 청구 4단계',
        content:
          '<p><strong style="color:#1e3a5f">보행자·자전거 피해자가 합의금을 제대로 받으려면 아래 순서를 따르세요.</strong></p>\n<ol>\n<li><strong>1단계: 치료 종결까지 합의 금지 — 치료 중</strong>: 치료가 끝나기 전에 합의서에 서명하면 향후치료비와 후유장해 보상금을 받을 수 없습니다. "향후 일체의 청구를 하지 않겠다"는 조항이 포함되어 있기 때문입니다. 의사에게 "완치 예상 기간"과 "후유증 가능성"을 가능한 한 물어보세요</li>\n<li><strong>2단계: 합의금 항목 내역서 요청 — 보험사 제안 직후</strong>: 보험사에 합의금 산정 내역을 항목별로 서면으로 요청하세요. 치료비·휴업손해·위자료가 각각 얼마인지 확인합니다. 내역서 없이 구두로만 금액을 제안하는 경우 서면 요청을 거부할 수 없습니다</li>\n<li><strong>3단계: 유사 판례 기준과 비교 — 합의 전</strong>: 전치 기간과 부상 부위가 유사한 판례를 2~3건 찾아 법원 기준 위자료와 비교하세요. 판례 기준보다 보험사 제안이 낮다면 협상의 근거가 됩니다</li>\n<li><strong>4단계: 분쟁조정 또는 소송 — 협상 결렬 시</strong>: 합의금 차이가 크다면 금융감독원 자동차보험 분쟁조정위원회에 조정을 신청하거나, 교통사고 소송을 제기할 수 있습니다. 소송에서는 보험사 제안보다 더 많은 금액이 인정되는 경우가 많습니다</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">보행자·자전거 피해자 합의금 적정 금액을 AI가 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '보행자·자전거 피해자 특별 유의사항',
        content:
          '<p><strong style="color:#1e3a5f">보행자와 자전거 피해자는 자동차 탑승자와 다른 점이 있습니다. 아래 내용을 꼭 확인하세요.</strong></p>\n<ul>\n<li><strong>과실 비율이 낮습니다</strong> — 횡단보도에서 사고가 난 경우 보행자 과실은 통상 0~20%로 매우 낮게 인정될 수 있습니다. 과실 비율이 낮을수록 더 많은 보상을 받을 수 있습니다</li>\n<li><strong>자전거도 차량 보험으로 보상받습니다</strong> — 자전거 운전 중 자동차에 의한 사고는 자동차 보험으로 보상됩니다. 자전거에는 별도 보험이 없어도 가해 차량 보험에서 모든 항목을 청구할 수 있습니다</li>\n<li><strong>14주 이상 진단은 중상해로 분류됩니다</strong> — 전치 14주 이상이면 중상해로 분류되어 위자료 기준이 높아지고, 일부 사안에서는 가해자가 12대 중과실 없이도 더 엄격한 책임을 부담합니다</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 유턴 중 오토바이 충격, 14주 치상: 신호·과속 위반한 오토바이 과실 인정 무죄',
        summary:
          '대구지법 2024고합568 사건(대구지법, 2025.01.14 선고)에서 법원은 상시유턴구역에서 유턴하던 차량이 신호를 위반하고 제한속도를 초과하여 진행하던 오토바이와 충격하여 오토바이 운전자에게 약 14주간의 손목 골절상 등을 입힌 사안에서, 오토바이 운전자의 신호위반·과속·지정차로 위반 등 과실이 사고의 주된 원인이라고 판단하고 차량 운전자에게 무죄를 선고했습니다.',
        takeaway:
          '자전거·오토바이 피해자도 신호위반이나 제한속도 초과가 있으면 과실 비율이 높아질 수 있습니다. 합의금 청구 시 상대방의 과실 비율과 나의 과실 비율을 모두 확인해야 적정 보상액을 산정할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '교통사고로 전치 14주 진단을 받았는데 합의금이 얼마나 되나요?',
        answer:
          '<strong>전치 14주 기준 합의금은 과실 비율, 직업, 후유장해 여부에 따라 크게 달라집니다.</strong> 일반적으로 치료비 외에 위자료 500만~1,500만 원, 휴업손해(직장인 기준 월 소득의 일부)가 추가됩니다. 후유장해가 남으면 수백만~수천만 원이 더 추가될 수 있습니다. 보험사 제안이 이 범위보다 낮다면 협상 여지가 있습니다.',
      },
      {
        question: '보험사가 치료 종결 전에 빨리 합의하자고 압박하는데 어떻게 해야 하나요?',
        answer:
          '<strong>치료 종결 전 합의를 거부할 권리가 있습니다.</strong> 보험사는 비용을 줄이기 위해 조기 합의를 유도하지만, 치료가 완전히 끝나기 전에 합의하면 향후치료비와 후유장해 보상금을 받을 수 없습니다. "치료가 끝난 후에 합의하겠다"고 명확히 전달하고, 보험사의 압박에 응하지 마세요.',
      },
      {
        question: '횡단보도에서 사고가 났는데 신호가 빨간불이었어요. 보상을 받을 수 없나요?',
        answer:
          '<strong>신호 위반 보행자도 보상을 받을 수 있습니다.</strong> 다만 보행자의 과실 비율이 높아져 보상액이 줄어들 수 있습니다. 통상 보행자 신호 위반의 경우 보행자 과실 30~50%가 적용됩니다. 차량의 과실(과속, 전방주시 태만 등)과 함께 종합적으로 판단됩니다.',
      },
      {
        question: '자전거를 타다가 차에 치였는데 자전거 수리비도 청구할 수 있나요?',
        answer:
          '<strong>자전거 수리비(또는 교체 비용)도 손해배상 청구 대상입니다.</strong> 사고로 인한 재산상 손해이므로 가해 차량 보험에서 청구할 수 있습니다. 자전거 구입 가격, 사고 당시 시세, 수리 견적서를 준비하여 청구하세요.',
      },
      {
        question: '자전거 사고인데 가해 차량이 무보험이면 어떻게 하나요?',
        answer:
          '<strong>무보험자동차에 의한 사고는 정부 보장사업 또는 본인의 무보험차 담보 특약으로 보상받을 수 있습니다.</strong> 가해 차량이 무보험이라면 국토교통부 자동차손해배상보장사업에 보상을 청구하거나, 본인의 보험에 무보험차상해 특약이 있으면 해당 특약으로 보상받을 수 있습니다.',
      },
    ],
    cta: {
      text: '보행자·자전거 교통사고 피해, 적정 합의금을 AI가 분석해드립니다',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 합의금 적정 금액 기준', href: '/guide/traffic-accident/traffic-accident-settlement-fair-amount' },
      { label: '교통사고 과실비율 다투는 법', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '중앙선 침범 피해자 손해배상 청구', href: '/guide/traffic-accident/traffic-accident-centerline-violation-victim-lawsuit' },
      { label: '자동차보험 분쟁조정 신청 방법', href: '/guide/insurance/insurance-dispute-resolution' },
      { label: '교통사고 블랙박스 없을 때 과실 다투는 법', href: '/guide/traffic-accident/traffic-accident-no-dashcam-fault' },
    ],
  },

  // ───────────────────────────────────────────
  // 29. traffic-accident / traffic-accident-centerline-violation-victim-lawsuit
  // ───────────────────────────────────────────
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-centerline-violation-victim-lawsuit',
    keyword: '중앙선 침범 교통사고 피해자 손해배상 청구 5단계',
    questionKeyword: '중앙선 침범 사고로 다쳤는데 가해자가 파산했다고 합니다. 손해배상을 받을 수 있나요?',
    ctaKeyword: '중앙선 침범 피해자 손해배상 상담',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '중앙선 침범 피해자 손해배상 청구 5단계 | 로앤가이드',
      description:
        '중앙선 침범 교통사고 피해자라면 가해자 파산 시에도 비면책채권으로 배상받는 방법과 청구 절차 5단계를 지금 확인하세요',
    },
    intro:
      '<p>고가도로에서 마주오는 차가 갑자기 중앙선을 침범해 충돌했습니다. 전치 12주에 동승자 한 명은 사망하는 큰 사고였습니다. 그런데 보험사로부터 일부 보상을 받고 나니, 가해자 개인에게 추가 배상을 청구할 수 있는지, 가해자가 파산했다는 소문도 들립니다. 중앙선 침범 사고는 가해자의 과실이 명확하여 손해배상 청구가 유리하지만, 가해자의 재정 상태에 따라 집행 방법이 달라집니다. 지금부터 5단계로 청구 방법을 정리해드립니다.</p>',
    sections: [
      {
        title: '중앙선 침범 사고의 법적 특징',
        content:
          '<p><strong style="color:#1e3a5f">중앙선 침범 사고는 12대 중과실 사고 중 하나로, 법적 대응에서 피해자에게 유리한 요소가 많습니다.</strong></p>\n<ul>\n<li><strong>12대 중과실 인정</strong> — 중앙선 침범은 교통사고처리특례법 제3조 제2항 단서 제2호에 규정된 12대 중과실입니다. 가해자는 피해자 합의 여부와 무관하게 형사처벌을 받을 수 있습니다</li>\n<li><strong>민사 손해배상 청구 가능</strong> — 보험사가 지급한 보험금과 별도로, 가해자 개인에게 자기부담금(위자료 초과분 등)을 청구할 수 있습니다. 대법원 2022다287284(2026.01.29 선고)에서 피보험자가 자기부담금에 해당하는 금액을 제3자에게 별도로 청구할 수 있음이 확인되었습니다</li>\n<li><strong>가해자 파산 후에도 청구 가능</strong> — 중앙선 침범으로 인한 손해배상채권이 가해자의 중대한 과실에 해당하면 파산 면책결정에서 제외되는 비면책채권이 될 수 있습니다</li>\n</ul>',
      },
      {
        title: '가해자 파산 시 비면책채권 여부 — 대법원 2023다308270 판결',
        content:
          '<p><strong style="color:#1e3a5f">가해자가 파산·면책을 받았더라도 "중대한 과실"이 인정되면 피해자는 채권을 행사할 수 있습니다. 그러나 중대한 과실 판단 기준이 엄격합니다.</strong></p>\n<ul>\n<li><strong>중대한 과실의 의미</strong> — 조금만 주의했더라면 쉽게 사고를 피할 수 있었음에도 주의의무를 현저히 위반한 경우입니다. 단순히 중앙선을 침범했다는 사실만으로는 중대한 과실이 인정되지 않을 수 있습니다</li>\n<li><strong>중앙선 침범이 중대한 과실인지</strong> — 대법원은 다른 사고를 피하려다 중앙선을 침범한 경우, 제한속도 초과 없이 주행하던 중 발생한 경우에는 중대한 과실 인정에 신중해야 한다고 했습니다</li>\n<li><strong>중대한 과실이 인정되는 경우</strong> — 음주운전 중 중앙선 침범, 과속으로 중앙선 침범, 의도적으로 중앙선을 침범한 경우 등은 중대한 과실로 인정될 가능성이 높습니다</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">가해자 파산 시 비면책채권 해당 여부와 청구 방법을 AI가 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '손해배상 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">중앙선 침범 사고 피해자로서 손해배상을 청구하는 과정입니다.</strong></p>\n<ol>\n<li><strong>1단계: 증거 확보 — 사고 직후</strong>: 사고 현장 사진, 블랙박스 영상, 목격자 연락처, 경찰 교통사고확인서를 즉시 확보하세요. 중앙선 침범 여부를 확인할 수 있는 CCTV 영상 보존 신청도 빠를수록 좋습니다</li>\n<li><strong>2단계: 진단서·치료비 기록 정리 — 치료 중</strong>: 입원·통원 치료비, 진단서, 향후치료비 소견서를 모두 보관합니다. 사망 사고라면 가족관계증명서와 소득 자료도 준비합니다</li>\n<li><strong>3단계: 보험사 청구 — 치료 종결 후</strong>: 가해 차량 보험사에 치료비·위자료·휴업손해를 청구합니다. 종합보험 처리 결과와 보험사 지급 내역서를 가능한 한 받아두세요</li>\n<li><strong>4단계: 가해자 개인 추가 청구 검토 — 보험 처리 후</strong>: 보험사 지급분이 실손해보다 낮다면 가해자 개인에게 추가 손해배상을 청구할 수 있습니다. 가해자의 재산 현황(부동산·예금 등)을 확인하세요</li>\n<li><strong>5단계: 파산 여부 확인 및 비면책채권 주장 — 필요시</strong>: 가해자가 파산·면책결정을 받았다면 면책결정이 확정되기 전에 이의신청이 가능합니다. 이미 확정되었다면 "중대한 과실"을 주장하는 소송을 검토하세요</li>\n</ol>',
      },
    ],
    cases: [
      {
        title: '판례 — 중앙선 침범 사고, 파산 면책결정 비면책채권 여부',
        summary:
          '대법원 2023다308270 사건(대법원, 2024.05.17 선고)에서 법원은 고가도로에서 다른 차량을 피하다가 중앙선을 침범하여 피해자 1명이 사망하고 2명이 중상을 입은 사고에서, 가해자에게 채무자회생법상 "중대한 과실"이 있다고 단정하기 어렵다는 이유로 손해배상채권이 파산 면책 대상에서 제외된다고 본 원심을 파기했습니다. 중앙선 침범이 있더라도 다른 사고를 피하려는 상황에서의 침범이나, 제한속도 미초과 등은 중대한 과실로 단정할 수 없다고 했습니다.',
        takeaway:
          '가해자 파산 시 손해배상채권이 비면책채권이 되려면 단순한 중앙선 침범을 넘어 음주·과속·의도적 침범 등 중대한 과실이 인정되어야 합니다. 사고 경위와 가해자의 주의의무 위반 정도를 구체적으로 분석하는 것이 중요합니다.',
      },
    ],
    faq: [
      {
        question: '중앙선 침범 사고에서 보험사 보상 외에 가해자에게 추가로 청구할 수 있나요?',
        answer:
          '<strong>보험사가 지급하지 않은 손해(자기부담금, 위자료 초과분 등)는 가해자 개인에게 청구할 수 있습니다.</strong> 대법원 2022다287284 판결에서도 피보험자의 자기부담금 상당액은 제3자에게 별도로 청구할 수 있음이 확인되었습니다. 보험사 지급 내역과 실손해를 비교하여 차액을 청구하세요.',
      },
      {
        question: '가해자가 파산 면책결정을 받았으면 손해배상을 전혀 받을 수 없나요?',
        answer:
          '<strong>가해자의 중대한 과실이 인정되면 파산 면책결정 후에도 손해배상을 청구할 수 있습니다.</strong> 음주운전, 과속, 의도적 침범 등 중대한 과실이 있다면 채무자회생법 제566조 제4호에 따라 비면책채권이 됩니다. 면책결정이 확정되기 전에 이의신청을 하거나, 확정 후에는 소송을 통해 비면책채권임을 다툴 수 있습니다.',
      },
      {
        question: '사망한 가족을 대신해서 손해배상을 청구하려면 어떻게 해야 하나요?',
        answer:
          '<strong>유가족은 망인의 손해배상청구권을 상속받아 행사할 수 있습니다.</strong> 망인의 일실수입(사망하지 않았다면 벌었을 소득), 치료비, 위자료(망인 본인 + 가족 고유의 위자료)를 청구할 수 있습니다. 가족관계증명서, 사망진단서, 망인의 소득 자료를 준비하세요.',
      },
      {
        question: '중앙선 침범 사고에서 피해자에게도 과실이 있으면 보상이 줄어드나요?',
        answer:
          '<strong>피해자의 과실이 인정되면 과실 비율만큼 보상액에서 공제됩니다.</strong> 그러나 중앙선 침범 사고에서 피해자의 과실 비율은 통상 0~20%로 매우 낮게 인정될 수 있습니다. 피해자가 제한속도를 크게 초과하거나 신호를 위반한 경우가 아닌 한 과실 비율이 낮게 산정됩니다.',
      },
      {
        question: '소송을 하지 않고도 손해배상을 받을 방법이 있나요?',
        answer:
          '<strong>금융감독원 자동차보험 분쟁조정위원회를 활용하면 소송 없이도 해결할 수 있습니다.</strong> 조정 신청 후 전문가가 적정 배상액을 산정하여 조정안을 제시합니다. 비용이 들지 않고 소송보다 빠르게 해결됩니다. 가해자 개인에 대한 청구는 조정이 어렵고 민사소송이 더 적합합니다.',
      },
    ],
    cta: {
      text: '중앙선 침범 사고 피해자, 손해배상 청구 방법을 AI가 분석해드립니다',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 합의금 적정 금액 기준', href: '/guide/traffic-accident/traffic-accident-settlement-fair-amount' },
      { label: '보행자·자전거 피해자 합의금 청구', href: '/guide/traffic-accident/traffic-accident-pedestrian-cyclist-victim-compensation' },
      { label: '교통사고 과실비율 다투는 법', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '자동차보험 분쟁조정 신청 방법', href: '/guide/insurance/insurance-dispute-resolution' },
      { label: '교통사고 손해배상 소송 절차', href: '/guide/traffic-accident/traffic-accident-lawsuit-procedure' },
    ],
  },
];
