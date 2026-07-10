import { SpokePage } from '../spoke-pages';

// traffic-accident 클러스터 허브 — 교통사고 통원치료·합의 종합 가이드 (8섹션 36개 스포크 연결)
// 고유 존재 이유: 교통사고 후 통원치료 횟수·치료기간·합의금·보험사 대응·후유증·과실비율을
// 어디서부터 정리해야 할지 막막한 사용자가 클러스터 전체를 한눈에 훑고 상황별 상세 페이지로
// 이동하도록 돕는 허브. 이혼·실업급여 허브와 달리 처음부터 section.links 카드 구조로 설계.
// section.content 는 순수 설명문(인라인 <a> 0), 링크는 section.links 카드로만 렌더.

export const spokesTrafficHub: SpokePage[] = [

  // ─── 교통사고 통원치료·합의 종합 가이드 (클러스터 허브) ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-treatment-settlement-guide',
    keyword: '교통사고 통원치료·합의 종합 가이드',
    questionKeyword:
      '저는 교통사고로 다쳐서 통원치료를 받고 있는데, 치료를 얼마나 받아야 하는지, 통원 횟수나 치료기간이 합의금에 어떻게 영향을 주는지, 보험사가 합의를 재촉할 때 어떻게 대응해야 하는지, 후유증이 남으면 어떻게 해야 하는지 어디서부터 정리해야 할지 막막한 상황이에요. 치료부터 합의·보험사 대응·과실비율까지 무엇을 확인하고 어떤 자료를 챙겨야 하는지 순서대로 정리해볼 수 있나요?',
    ctaKeyword: '교통사고 치료·합의·보상 종합 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '교통사고 통원치료·합의 종합 가이드 — 8가지 핵심 | 로앤가이드',
      description:
        '교통사고 후 통원치료 횟수·치료기간·합의금·보험사 대응·후유증을 어디서부터 정리해야 할지 막막하다면, 치료부터 합의·과실까지 8가지 핵심을 한눈에 정리해 지금 확인하세요.',
    },
    intro:
      '<p>교통사고 후에는 치료, 합의, 보험사 대응, 과실비율을 함께 판단해야 해서 어디부터 정리할지 막막할 수 있습니다. 통원치료 횟수나 치료기간, 합의금은 정해진 공식으로 단정할 수 있는 것이 아니라 부상 정도·치료 경과·과실 등 사실관계에 따라 달라지는 부분입니다. 이 가이드는 통원치료 횟수, 치료기간, 합의금, 보험사 대응, 후유증, 과실비율을 순서대로 확인하도록 정리했으니, 아래에서 내 상황에 가까운 주제를 골라 상세 페이지로 이동해 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: '🚑 교통사고 통원치료 기본 구조 — 사고 직후부터 합의까지',
        content:
          '<p>교통사고 후에는 현장 안전 확보와 경찰·보험사 접수, 사고 사진·블랙박스 같은 자료 확보, 이른 병원 진료가 초기 대응의 기본입니다. 부상 보상은 치료비·위자료·휴업손해·향후치료비·후유장해 손해 등으로 나뉘어 다뤄지므로, 어떤 항목이 있는지 미리 알아두면 합의 때 빠진 부분을 확인하는 데 도움이 됩니다. 아래 카드에서 사고 직후 무엇부터 할지와 합의 순서를 먼저 확인해볼 수 있습니다.</p>',
        links: [
          { label: '교통사고 피해자 초기 대응 4단계', href: '/guide/traffic-accident/traffic-accident-where-to-start', description: '사고 직후 무엇부터 해야 하는지 정리' },
          { label: '부상 보상금 청구 체크리스트', href: '/guide/traffic-accident/traffic-accident-injury-compensation', description: '치료비·위자료 등 보상 항목 확인' },
          { label: '교통사고 합의 절차 5단계', href: '/guide/traffic-accident/accident-settlement-process', description: '합의가 진행되는 순서 훑어보기' },
          { label: '합의 전 확인할 체크리스트', href: '/guide/traffic-accident/accident-settlement-checklist', description: '합의 전에 짚어둘 항목 정리' },
        ],
      },
      {
        title: '🗓️ 치료기간·통원 횟수 — 손해 정리의 기초 자료',
        content:
          '<p>치료기간과 통원 횟수는 부상 정도와 치료 경과를 보여주는 자료 중 하나로, 몇 회를 받으면 얼마가 나온다는 식으로 단정할 수 있는 것은 아닙니다. 치료는 증상에 맞게 담당 의료진의 판단에 따라 받고, 진단서·진료기록·영수증을 그때그때 챙겨두는 것이 이후 손해를 정리하거나 보험사와 협의할 때 근거가 됩니다. 아래 카드에서 통원 횟수가 합의금과 어떻게 다뤄지는지, 보상금 산정 기준은 무엇인지 확인해볼 수 있습니다.</p>',
        links: [
          { label: '통원치료 횟수와 합의금의 관계', href: '/guide/traffic-accident/outpatient-treatment-count-settlement-impact', description: '통원 횟수가 보상에 어떻게 반영되는지' },
          { label: '교통사고 보상금 산정 기준', href: '/guide/traffic-accident/traffic-accident-compensation-calculation-guide', description: '치료비·위자료·휴업손해 산정 방식' },
          { label: '저속 추돌 후유증 추가 청구', href: '/guide/traffic-accident/traffic-accident-low-speed-rear-end-aftereffect', description: '경미해 보이는 사고의 치료·청구' },
          { label: '경추 염좌(목디스크) 후유장해 보상', href: '/guide/traffic-accident/traffic-accident-whiplash-compensation', description: '목·허리 통증 후유 검토 방향' },
        ],
      },
      {
        title: '💰 합의금과 통원치료의 관계 — 성급한 합의 주의',
        content:
          '<p>합의금은 치료비·위자료·휴업손해·향후치료비·후유장해 손해 등을 종합해 정해지고, 통원 횟수 하나로 결정되지 않습니다. 합의는 보통 그 시점까지의 손해를 마무리하는 의미라 되돌리기 어려울 수 있으니, 치료가 끝나기 전 성급한 합의는 신중히 판단하고 제시된 금액의 항목 구성과 빠진 항목이 없는지 확인해보는 것이 좋습니다. 아래 카드에서 합의금 항목과 성급한 합의의 주의점을 검토해볼 수 있습니다.</p>',
        links: [
          { label: '합의금 항목별 적정 금액 산정법', href: '/guide/traffic-accident/settlement-amount-calculation', description: '합의금이 어떤 항목으로 구성되는지' },
          { label: '12대 중과실 사고 합의 영향', href: '/guide/traffic-accident/traffic-accident-12-major-faults-settlement-impact', description: '중과실 사고에서 합의의 의미' },
          { label: '합의금 얼마가 적정한지 기준', href: '/guide/traffic-accident/how-much-settlement-appropriate-qa', description: '적정 금액을 가늠하는 기준' },
          { label: '바로 합의하면 안 되는 이유', href: '/guide/traffic-accident/settlement-offer-dont-accept-immediately-reasons', description: '성급한 합의의 리스크 정리' },
          { label: '합의를 미루는 게 필요한 경우', href: '/guide/traffic-accident/traffic-settlement-dont-agree-immediately', description: '치료 중 합의 시점 판단' },
          { label: '합의서 작성 전 확인할 항목', href: '/guide/traffic-accident/traffic-settlement-agreement-checklist', description: '합의서 문구·항목 점검' },
        ],
      },
      {
        title: '📞 보험사 연락·합의 압박 대응 — 서류와 절차',
        content:
          '<p>보험사가 합의나 치료 종결을 재촉하더라도, 정리된 항목과 남은 항목을 서류로 확인하며 차분히 대응하는 것이 좋습니다. 안내받은 내용은 문자·서면으로 남기고, 렌터카·무보험 사고처럼 처리 경로가 다른 경우를 확인하며, 이견이 크면 금융감독원(1332)·손해보험협회 조정 절차를 검토해볼 수 있습니다. 아래 카드에서 서류와 상황별 처리 방법을 확인해볼 수 있습니다.</p>',
        links: [
          { label: '교통사고 합의 때 흔한 실수', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes', description: '보상금이 깎이는 실수 사례' },
          { label: '보험금 청구 필수 서류', href: '/guide/traffic-accident/insurance-claim-required-docs', description: '청구에 필요한 서류 목록' },
          { label: '렌터카 사고 자기부담금 처리', href: '/guide/traffic-accident/rental-car-accident-insurance-deductible-guide', description: '렌터카 보험 처리 핵심' },
          { label: '무보험차 피해 정부보장사업', href: '/guide/traffic-accident/traffic-accident-uninsured-victim-government-fund', description: '가해자가 무보험일 때 청구' },
          { label: '치료 중 합의 미루기', href: '/guide/traffic-accident/traffic-delay-settlement-additional-treatment', description: '추가 치료 시 합의 시점 판단' },
        ],
      },
      {
        title: '🏥 입원·통원·한방치료 선택 — 증상에 맞는 치료',
        content:
          '<p>입원·통원·한방 중 어떤 치료를 받을지는 증상에 대한 의료진의 판단 영역이라 이 가이드에서 대신 정할 수는 없습니다. 다만 어떤 치료든 진단·진료기록과 영수증을 남겨두면 이후 손해를 정리할 때 근거가 되고, 입원 여부는 휴업손해·간병, 통원은 교통비 같은 실비와 연결되어 다뤄질 수 있습니다. 치료 방법은 담당 의료진과 상의하고, 치료 경과가 손해·합의와 어떻게 이어지는지는 다른 묶음에서 확인해볼 수 있습니다.</p>',
      },
      {
        title: '🩹 후유증·추가진단·치료연장 — 합의 후 추가 청구',
        content:
          '<p>합의 뒤 통증이 남거나 새 증상이 나타나면, 합의 당시 예상하기 어려웠던 후유증에 한해 추가 청구가 검토되는 사례가 있습니다. 인정 여부는 합의서 문구와 사고·후유증의 인과관계에 따라 달라지므로, 증상이 지속되면 담당 의료진과 상의해 후유장해 진단 등 자료를 남겨두는 것이 중요합니다. 아래 카드에서 합의 후 추가 청구 가능성과 절차를 검토해볼 수 있습니다.</p>',
        links: [
          { label: '합의 후 후유증 추가 청구 가능성', href: '/guide/traffic-accident/traffic-accident-post-settlement-additional-claim', description: '합의 후 다시 청구할 수 있는 경우' },
          { label: '후유증 추가 치료비 청구 절차', href: '/guide/traffic-accident/traffic-accident-aftereffect-treatment-claim', description: '추가 치료비 청구 3단계' },
          { label: '합의 후 추가 청구 다툼 트랙', href: '/guide/traffic-accident/traffic-accident-aftereffect-additional-claim-settlement', description: '추가 청구를 다투는 갈래' },
        ],
      },
      {
        title: '⚖️ 과실비율·치료비·특수상황 — 사고 유형별 정리',
        content:
          '<p>과실비율은 사고 유형별 기준과 도로·신호 상황을 종합해 판단되며, 보험사가 처음 안내한 비율이 확정은 아니어서 이견이 있으면 다툴 수 있습니다. 블랙박스가 없어도 목격자·사고 흔적으로 입증을 시도할 수 있고, 자전거·킥보드·오토바이·승객 등 사고 유형에 따라 확인할 점이 달라집니다. 아래 카드에서 과실 다툼 방법과 사고 유형별 정리를 확인해볼 수 있습니다.</p>',
        links: [
          { label: '과실비율 이의절차와 증거 확보', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute', description: '과실 다툼 증거·이의 절차' },
          { label: '과실비율 부당할 때 다툼 방법', href: '/guide/traffic-accident/traffic-accident-fault-dispute-evidence', description: '부당한 과실비율 대응' },
          { label: '과실비율 산정 기준', href: '/guide/traffic-accident/fault-ratio-calculation-criteria', description: '과실이 정해지는 기준' },
          { label: '추돌사고 과실비율', href: '/guide/traffic-accident/traffic-accident-rear-end-fault-ratio', description: '100:0이 아닌 경우 정리' },
          { label: '자전거·보행자 충돌 합의', href: '/guide/traffic-accident/traffic-accident-bicycle-pedestrian-settlement', description: '자전거 사고 합의·처벌' },
          { label: '어린이 교통사고 보상 청구', href: '/guide/traffic-accident/traffic-accident-child-pedestrian-claim', description: '스쿨존 가중처벌 포함' },
          { label: '배달라이더 교통사고 산재', href: '/guide/traffic-accident/traffic-accident-delivery-rider-workers-comp', description: '업무 중 사고 산재 인정 기준' },
          { label: '택시 승객 교통사고 보상', href: '/guide/traffic-accident/traffic-accident-taxi-passenger-claim', description: '승객 부상 보상 청구' },
          { label: '버스 급정거 승객 부상 보상', href: '/guide/traffic-accident/traffic-accident-bus-sudden-stop-passenger-claim', description: '급정거 부상 손해배상' },
          { label: '전동킥보드(PM) 사고 대응', href: '/guide/traffic-accident/traffic-accident-electric-scooter-collision-response', description: 'PM 사고 대응·보상 기준' },
          { label: '오토바이 사고 합의 차이점', href: '/guide/traffic-accident/motorcycle-accident-settlement-differences', description: '이륜차 합의가 다른 점' },
          { label: '블랙박스 없는 과실 다툼', href: '/guide/traffic-accident/no-dashcam-fault-dispute', description: '영상 없을 때 과실 대응' },
          { label: '블랙박스 없는 과실 입증', href: '/guide/traffic-accident/no-dashcam-fault-proof', description: '영상 없이 입증하는 방법' },
          { label: '블랙박스로 과실 반박', href: '/guide/traffic-accident/dashcam-fault-rebuttal', description: '영상으로 과실 뒤집기' },
        ],
      },
      {
        title: '❓ 자주 묻는 질문',
        content:
          '<p>교통사고 치료와 합의에서 많이 나오는 질문을 모았습니다. 아래 답변은 일반 안내이며 실제 결과는 부상 정도·치료 경과·과실 등 사실관계에 따라 달라질 수 있으니, 구체적인 사안은 담당 의료진과 보험회사·분쟁조정기관 안내로 확인해보는 것이 좋습니다.</p>',
      },
    ],
    cases: [],
    faq: [
      {
        question: '통원치료를 몇 번 받아야 합의금이 많이 나오나요?',
        answer:
          '<strong>정해진 통원 횟수를 채우면 얼마가 나온다고 단정하기는 어렵습니다.</strong> 통원 횟수·치료기간은 부상 정도와 치료 경과를 보여주는 자료 중 하나로 다뤄지므로, 치료는 증상에 맞게 받고 진료 경과를 기록해두는 것이 도움이 됩니다.',
      },
      {
        question: '보험사가 치료를 그만 받고 합의하자고 해요.',
        answer:
          '<strong>치료가 충분히 끝나기 전에 서둘러 합의하면 이후 손해가 드러나도 다시 청구하기 어려워질 수 있습니다.</strong> 합의 시점과 조건을 신중히 검토하고, 이견이 좁혀지지 않으면 금융감독원(1332)이나 손해보험협회 안내로 조정·민원 절차를 확인해볼 수 있습니다.',
      },
      {
        question: '경미한 접촉사고인데 목이 계속 아파요.',
        answer:
          '<strong>사고 규모가 작아 보여도 증상이 이어진다면 진료를 받아 경과를 기록해두는 것이 도움이 됩니다.</strong> 저속 추돌이나 경추 염좌 후유는 진단과 치료 경과에 따라 달라질 수 있어, 통증이 지속되면 추가 진단을 받아 사고와의 관련성을 뒷받침할 자료를 남겨둘 수 있습니다.',
      },
      {
        question: '합의금은 어떤 항목으로 정해지나요?',
        answer:
          '<strong>치료비·위자료·휴업손해·향후치료비·후유장해 손해 등 여러 항목을 종합해 정해지는 것으로 안내됩니다.</strong> 금액은 사고 경위·부상 정도·과실비율에 따라 달라질 수 있어 특정 액수를 보장하듯 볼 수는 없으며, 제시된 금액이 어떤 항목으로 구성되었는지 확인해두면 도움이 됩니다.',
      },
      {
        question: '합의를 이미 했는데 후유증이 생기면 어떻게 하나요?',
        answer:
          '<strong>합의 당시 예상하기 어려웠던 후유증이 이후 나타난 경우에는 추가 청구가 검토되는 사례가 있습니다.</strong> 다만 인정 여부는 합의서 문구와 후유증·사고의 인과관계 등에 따라 달라질 수 있어, 증상이 나타나면 서둘러 진단을 받아 자료를 남겨두는 것이 도움이 됩니다.',
      },
      {
        question: '과실비율이 부당한 것 같아요.',
        answer:
          '<strong>과실비율이 부당하다고 느껴지면 근거 자료를 모아 이의를 제기하는 절차를 검토해볼 수 있습니다.</strong> 블랙박스 영상이 없어도 목격자 진술·도로 상황·사고 흔적 등으로 입증을 시도할 수 있으며, 손해보험협회 구상금분쟁심의위원회 안내로 절차를 확인해볼 수 있습니다.',
      },
      {
        question: '가해자가 무보험이거나 렌터카 사고예요.',
        answer:
          '<strong>가해자가 무보험이면 정부보장사업을, 렌터카 사고면 자기부담금 처리를 각각 확인해볼 수 있습니다.</strong> 상황에 따라 처리 방식과 준비 서류가 달라질 수 있어 내 사고 유형에 맞는 절차를 미리 정리해두면 도움이 됩니다.',
      },
      {
        question: '자전거·전동킥보드·오토바이 사고도 같은 기준인가요?',
        answer:
          '<strong>이동수단과 사고 당사자에 따라 적용되는 기준과 준비 방향이 달라질 수 있습니다.</strong> 자전거·전동킥보드·오토바이·보행자·승객 사고는 각각 확인할 점이 다르고, 업무 중 사고라면 산재가 함께 검토되는 경우도 있어 내 상황에 가까운 페이지에서 확인해보는 것이 좋습니다.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: 'traffic-accident 도메인 허브', href: '/guide/traffic-accident' },
      { label: '통원치료 횟수와 합의금의 관계', href: '/guide/traffic-accident/outpatient-treatment-count-settlement-impact' },
      { label: '합의금 항목별 적정 금액 산정법', href: '/guide/traffic-accident/settlement-amount-calculation' },
      { label: '과실비율 이의절차와 증거 확보', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '합의 후 후유증 추가 청구 가능성', href: '/guide/traffic-accident/traffic-accident-post-settlement-additional-claim' },
    ],
  },

];
