import { SpokePage } from '../spoke-pages';

// batch56 traffic B — 2개:
// 1. 임차차량 사고 자기부담금 청구
// 2. 후방 카메라 사각 후진 사고
//
// 고유 존재 이유:
// 1. 이 페이지는 렌터카 사고 후 자기부담금 50~100만원이 청구된 임차인이 보험·렌터카 약관·과실비율 4가지 다툼 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 후방 카메라가 있음에도 사각지대 보행자를 인지하지 못해 후진사고를 낸 운전자가 형사 + 과실비율 + 카메라 결함 4단계 다툼 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch56TrafficB: SpokePage[] = [
  // ─── 1. traffic-accident / traffic-accident-rental-car-self-cover-claim ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-rental-car-self-cover-claim',
    keyword: '렌터카 자기부담금 임차인 청구',
    questionKeyword: '렌터카로 사고 났는데 자기부담금 80만원 청구가 너무 과해요. 다툴 수 있나요?',
    ctaKeyword: '렌터카 자기부담금 다툼 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '렌터카 자기부담금 청구 — 4가지 다툼 트랙 | 로앤가이드',
      description:
        '렌터카 사고 후 자기부담금이 과도하게 청구됐다면 임차약관 + 과실비율 + 자차보험 4가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"여행 갔다가 렌터카로 가벼운 접촉사고가 났어요. 렌터카 회사가 \'자기부담금 80만원 + 휴차료 30만원\'을 청구하는데, 본인 과실은 30%뿐이고 상대 보험사도 처리하기로 했습니다. 그래도 80만원을 다 내야 하나요?" 렌터카 사고 자기부담금 청구는 ① 렌터카 임차약관 ② 과실비율 분담 ③ 자기차량 손해보험(CDW·LDW) ④ 휴차료·관련 비용 4가지 트랙으로 다툼이 갈리는 영역입니다. 자기부담금 자체는 임차약관에 명시되지만 임차인 과실비율이 작거나 상대방 보험사가 처리하는 부분은 \'대위 청구\' 트랙으로 회수 가능한 영역이에요. 또한 휴차료·견인비 등 부수 비용도 약관 합리성 다툼이 가능한 사례가 있습니다.</p>',
    sections: [
      {
        title: 'Q. 렌터카 자기부담금 4가지 다툼 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 임차약관·과실비율·자차보험·휴차료 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 임차약관 자기부담금 한도</strong> — 일반 렌터카 자기부담금 50~100만원. 약관 명시. 단, 약관규제법상 부당 조항은 무효 다툼 가능.</li>\n<li><strong>② 과실비율 분담</strong> — 본인 과실 30%면 자기부담금도 그 비율로 한정 가능 영역. 상대 보험사 70% 부분은 대위 청구로 회수.</li>\n<li><strong>③ 자기차량 손해보험 (CDW·LDW)</strong> — 별도 가입 시 자기부담금 면제 또는 감액. 미가입 시 자기부담금 전액 영역. 가입 정황 확인.</li>\n<li><strong>④ 휴차료·견인비</strong> — 렌터카 회사가 차량 수리 기간 동안 청구. 약관 합리성·실손 입증 부담은 회사. 과도한 청구는 다툼 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 본인 과실비율이 작은데 자기부담금 전액 청구된다면 약관 합리성 다툼 영역. 한국소비자원 1372 분쟁조정 무료 트랙으로 회수 검토 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 자기부담금 다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 약관 검토 → 분쟁조정 → 보험 청구 → 민사 회수 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 렌터카 임차계약서·약관·사고 증빙·과실비율 결정·자차보험 가입 정황·휴차료 청구서.</li>\n<li><strong>2단계 — 약관 검토 + 항의</strong> — 약관에 자기부담금 한도 명시 여부 + 과실비율 분담 적용 여부 + 휴차료 합리성 검토. 렌터카 회사에 항의 + 자료 요구.</li>\n<li><strong>3단계 — 한국소비자원 분쟁조정 (1372)</strong> — 무료, 평균 30~60일. 약관 합리성·과실비율 다툼.</li>\n<li><strong>4단계 — 자차보험 청구 (가입 시)</strong> — CDW·LDW 가입돼 있다면 자기부담금 면제·감액 청구. 보험 약관 검토.</li>\n<li><strong>5단계 — 민사 회수 (분쟁조정 결렬 시)</strong> — 부당이득반환·약관 무효 청구. 청구액 무관 지급명령, 3,000만원 이하 소액심판.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">렌터카 자기부담금 4가지 다툼 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 6가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 임차 자료 + 사고 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>렌터카 임차계약서·약관</strong> — 자기부담금 한도·CDW 가입.</li>\n<li><strong>사고 증빙·과실비율</strong> — 보험사 합의서·블랙박스.</li>\n<li><strong>자기부담금 청구서·휴차료 산정 근거</strong> — 명세 + 산정 기준.</li>\n<li><strong>차량 수리 견적서·실 수리 영수증</strong> — 휴차료 합리성 검토.</li>\n<li><strong>보험 가입 증서</strong> — CDW·LDW 가입 여부.</li>\n<li><strong>분쟁조정 신청서</strong> — 한국소비자원 양식.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 휴차료 청구가 과도하다면 \'실 수리 기간\' vs \'청구 기간\' 비교가 핵심. 정비공장 견적서·실 수리 영수증으로 합리성 다툼 가능한 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 렌터카 회사 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"약관 명시이라 청구 정당" 주장 반박</strong> — 약관규제법상 부당 조항은 무효. 과실비율 적용 부재 약관은 다툼 영역.</li>\n<li><strong>"휴차료 정액 청구" 주장 반박</strong> — 실 수리 기간·실손해 입증 부담은 렌터카 회사. 과도한 정액 청구는 다툼 영역.</li>\n<li><strong>"CDW 미가입이라 자기부담금 전액" 주장 검토</strong> — CDW 가입 안내·약관 설명 의무 위반 정황 결합 시 다툼 가능. 신용카드 부가 면책 가능성도 검토.</li>\n<li><strong>"신용카드 본인 결제 = 책임 인정" 주장 반박</strong> — 결제는 임시 담보. 부당 청구는 카드 청구이의로 회수 가능 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong> — 분쟁조정 무료.</li>\n<li><strong>금융감독원 1332</strong> — 카드·보험 자문.</li>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 약관 자기부담 조항의 합리성 다툼',
        summary:
          '대법원 2005다51013 사건(대법원, 2006.01.13 선고)은 임차물 반환채무가 이행불능이 된 경우 귀책사유 증명책임이 임차인에게 있다고 판시한 사례지만, 임차약관의 합리성·과실비율 적용은 별도 다툼 영역으로 평가됩니다. 약관규제법은 고객에게 부당하게 불리한 조항을 무효로 보고, 한국소비자원 분쟁조정 사례에서도 렌터카 자기부담금·휴차료 과도 청구가 일부 인정·일부 감액된 사례가 있어, 자료 입증이 회수 가능성의 핵심 영역입니다.',
        takeaway: '렌터카 자기부담금은 약관 합리성·과실비율·자차보험 결합 영역이라, 임차계약서·사고 증빙·수리 영수증을 정리하면 다툼 + 분쟁조정 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '본인 과실 30%인데 자기부담금 100% 청구되면 어떻게 하나요?',
        answer:
          '<strong>약관 합리성 + 대위 청구 다툼 가능 영역입니다.</strong> 상대 보험사 70% 부분은 렌터카 회사가 대위 청구로 회수해야 하는 영역. 본인 부담은 30% 한도 다툼.',
      },
      {
        question: '신용카드 부가 보험으로 자기부담금 면제 가능한가요?',
        answer:
          '<strong>일부 신용카드(특히 비자·마스터 골드 이상)에서 렌터카 면책 부가 가능합니다.</strong> 결제 카드 약관 검토 + 카드사 청구. 사전 가입 신고가 필요한 사례 있음.',
      },
      {
        question: '휴차료 청구가 너무 과해요. 어떻게 다투나요?',
        answer:
          '<strong>실 수리 기간 + 차량 일렌트 단가 입증 부담은 렌터카 회사 영역입니다.</strong> 정비공장 영수증으로 실제 기간 입증 + 일일 렌트 단가 합리성 다툼. 분쟁조정 무료.',
      },
      {
        question: '렌터카 회사가 카드 자동 결제로 80만원을 인출했어요',
        answer:
          '<strong>카드사 청구이의로 회수 가능 영역입니다.</strong> 결제일로부터 60일 내 카드사에 청구이의 신청. 자료 + 다툼 사유 제출. 카드사 자체 조사 후 회수.',
      },
      {
        question: 'CDW(자차보험) 가입했는데도 자기부담금 청구돼요',
        answer:
          '<strong>CDW 가입 시 자기부담금 면제 또는 감액 영역입니다.</strong> 가입증서 + 약관 검토 후 회사에 환급 요구. 회사 미응답 시 분쟁조정·민사 트랙.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '렌터카 사고 보상 처리', href: '/guide/traffic-accident/traffic-accident-rental-car-accident' },
      { label: '교통사고 합의 시 실수', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '교통사고 보험 청구 종합', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '교통사고 합의 후 추가 청구', href: '/guide/traffic-accident/traffic-accident-post-settlement-additional-claim' },
      { label: '자기부담 사고 청구', href: '/guide/traffic-accident/traffic-accident-self-insured-claim' },
    ],
  },

  // ─── 2. traffic-accident / traffic-accident-rear-camera-blind-reverse ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-rear-camera-blind-reverse',
    keyword: '후방카메라 사각 후진사고 책임',
    questionKeyword: '후방카메라 보면서 후진했는데 사각지대 어린이가 부딪쳤어요. 책임은 어떻게 되나요?',
    ctaKeyword: '후진사고 책임 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '후방카메라 사각 후진사고 — 4가지 책임 다툼 | 로앤가이드',
      description:
        '후방카메라가 있음에도 사각지대 보행자와 후진사고가 났다면 형사 + 과실비율 + 카메라 결함 4단계 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"마트 주차장에서 후진하는데 후방카메라를 봤지만 카메라 사각지대에 어린이가 있어 부딪쳤어요. 어린이가 가벼운 부상을 입었고 경찰에서 \'업무상과실치상\'으로 입건한다고 합니다." 후진사고는 도로교통법 제18조 후진 안전의무 + 형법 업무상과실치상 + 자동차손해배상보장법 결합 영역이지만, ① 후방카메라 등 보조장치 활용 + 좌우 확인 ② 사각지대 인지 가능성 ③ 보행자(특히 어린이) 행적 ④ 차량 결함(카메라 화각 한계) 4가지 트랙으로 다툼이 가능한 영역입니다. 어린이 사고는 양형이 무거운 영역이지만 합의 + 처벌불원서로 \'공소권 없음\' 가능. 사고 직후 블랙박스·CCTV·카메라 영상 보존이 핵심이에요.</p>',
    sections: [
      {
        title: 'Q. 후진사고 4가지 책임 다툼 포인트',
        content:
          '<p><strong style="color:#1e3a5f">A. 운전자 의무·사각지대 인지·보행자 행적·카메라 결함 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 운전자 후진 안전의무 (도로교통법 제18조)</strong> — 후진 시 보행자·차량 충분히 확인 + 안전 확보 후 진행. 후방카메라만으로는 의무 이행 부족 사례 다수.</li>\n<li><strong>② 사각지대 인지 가능성</strong> — 후방카메라 사각·운전자 위치에서 인지 한계. 차량 후진 보조 시스템 작동 여부.</li>\n<li><strong>③ 보행자(어린이) 행적</strong> — 어린이가 갑자기 차량 뒤로 진입한 정황. 어린이 보호 의무는 운전자에게 가중 영역.</li>\n<li><strong>④ 차량 카메라·후진 보조시스템 결함</strong> — 카메라 화각 한계·시스템 미작동 정황. 결함 입증 시 제조사 공동책임 트랙.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 후진사고는 운전자 주된 책임 영역이지만 어린이 보호 의무 + 후방카메라 사각 결합 정황으로 양형·합의 다툼 트랙이 열리는 사례가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 사고 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 형사 합의 → 보험 처리 → 본안 절차 → 양형 다툼 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 본인 차량 블랙박스·후방카메라 영상·주차장 CCTV·차량 시스템 데이터·사고 직후 사진.</li>\n<li><strong>2단계 — 보험 신고 + 인사사고 합의 (1~2주)</strong> — 보험사 사고 신고 + 피해자 합의 진행. 어린이 사고는 부모와 합의.</li>\n<li><strong>3단계 — 처벌불원서 확보</strong> — 합의 시 처벌불원서로 \'공소권 없음\' 가능 (12대 중과실 아니면). 인사사고 종합보험 가입 시 면책.</li>\n<li><strong>4단계 — 형사 본안 (불합의 시)</strong> — 교통사고처리특례법 위반(치상) 절차. 양형 다툼.</li>\n<li><strong>5단계 — 차량 결함 청구 (입증 시)</strong> — 카메라·후진 보조시스템 결함 입증 시 제조사 공동책임. 민사 트랙.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">후진사고 4가지 책임 다툼을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고 자료 + 차량 데이터 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>차량 블랙박스 (전방·후방)</strong> — 후진 직전 영상.</li>\n<li><strong>후방카메라 영상</strong> — 카메라 화면 자체 (있다면 녹화).</li>\n<li><strong>주차장 CCTV</strong> — 사고 시점 어린이 행적.</li>\n<li><strong>차량 EDR·후진 보조시스템 데이터</strong> — 시스템 작동 여부.</li>\n<li><strong>사고 현장 사진</strong> — 차량 위치·어린이 위치·사각지대.</li>\n<li><strong>피해자 진단서·치료비</strong> — 합의금 산정용.</li>\n<li><strong>종합보험 가입 증서</strong> — 면책 트랙 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 어린이 사고는 양형이 무거운 영역이라 즉시 합의 진행이 양형 감경의 핵심. 합의금은 진단서·치료비 + 위자료(어린이는 위자료 가중) 산정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 검찰·피해자 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"후방카메라만 보고 후진" 과실 입증 대응</strong> — 후방카메라 + 좌우 거울 + 직접 확인 의무 입증 자료 제시. 차량 정지 후 단계적 후진 정황 정리.</li>\n<li><strong>"어린이 행적 갑작스러움" 정황 자료</strong> — CCTV에 어린이가 차량 후진 직전 진입한 정황 있다면 회피 가능성 한계 영역.</li>\n<li><strong>"카메라 화각 한계" 결함 다툼</strong> — 차종별 카메라 사각지대 자료 + 같은 차종 유사 사고 사례. 결함 입증 시 제조사 공동책임 트랙.</li>\n<li><strong>합의금 산정 표준</strong> — 어린이 사고는 위자료 + 치료비 + 향후치료비 + 후유증 가능성 결합. 합의 전 추가 진료 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 형사·민사 무료 상담.</li>\n<li><strong>국선변호인 (대한변협 02-2087-7700)</strong> — 자격 요건 시.</li>\n<li><strong>금융감독원 1332</strong> — 보험 분쟁.</li>\n<li><strong>한국소비자원 1372</strong> — 자동차 결함 분쟁.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 후진 운전자의 주의의무 위반과 형사 책임',
        summary:
          '대법원 2010도3436 사건(대법원, 2012.03.15 선고)에서 법원은 일반도로에서 후진하다가 사고를 낸 운전자에 대한 교통사고처리특례법 적용을 분석한 사례입니다. 또한 대법원 90도296 사건(대법원, 1990.06.26 선고)은 차량이 도로를 가로질러 후진해 중앙선에 걸친 후 반대방향 차선으로 진입한 경우 중앙선 침범 행위에 해당한다고 판시했습니다. 후진사고는 운전자 주의의무 위반 입증 시 형사 책임이 인정되는 영역으로, 사각지대 + 보행자(특히 어린이) 결합 사고는 양형이 가중되는 영역으로 평가될 여지가 있습니다.',
        takeaway: '후방카메라 사각 후진사고는 운전자 주의의무 + 차량 결함 + 보행자 행적 결합 영역이라, 블랙박스·CCTV·차량 데이터를 정리하면 합의 + 양형 다툼 트랙이 열리는 사례가 있습니다.',
      },
    ],
    faq: [
      {
        question: '어린이 사고도 종합보험 가입하면 형사 면책되나요?',
        answer:
          '<strong>12대 중과실이 아니면 종합보험 가입 + 합의로 \'공소권 없음\' 가능 영역입니다.</strong> 다만 어린이 사고는 양형이 무거운 영역이라 합의·자료 입증이 핵심. 검찰 송치 단계 적극 대응.',
      },
      {
        question: '합의금이 너무 무리한 요구입니다',
        answer:
          '<strong>진단서·치료비 영수증 기준 합리적 합의금 제안이 핵심입니다.</strong> 어린이는 위자료 가중 영역이지만 무리한 요구는 공탁 트랙으로 \'성의있는 노력\' 입증 가능.',
      },
      {
        question: '후방카메라 결함이 있다고 입증할 수 있나요?',
        answer:
          '<strong>같은 차종 유사 사고·NHTSA 자료·전문가 분석으로 결함 정황 입증 영역입니다.</strong> 다만 단독 결함 입증은 어려운 사례가 많아, 운전자 합의 + 결함 청구 병행 검토.',
      },
      {
        question: '주차장 CCTV가 없으면 어떻게 하나요?',
        answer:
          '<strong>본인 블랙박스·차량 카메라·목격자 진술이 핵심 자료입니다.</strong> 사고 직후 현장 사진·주변 차량 블랙박스 자료 요청도 가능. 마트 측 사적 CCTV 협조도 검토.',
      },
      {
        question: '본인이 피해자라면 어떻게 청구하나요?',
        answer:
          '<strong>가해자 보험사 대인배상 + 본인 자기신체사고 보험 동시 청구 가능합니다.</strong> 어린이 위자료·치료비·향후치료비 산정. 후유증 가능성 검토 후 합의.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '주차장 후진 사고 책임', href: '/guide/traffic-accident/traffic-accident-parking-lot-backing' },
      { label: '주차장 차량 손상 책임', href: '/guide/traffic-accident/traffic-accident-parking-lot-collision' },
      { label: '어린이 보호구역 어린이 사고', href: '/guide/traffic-accident/traffic-accident-school-zone-child' },
      { label: '교통사고 형사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
      { label: '교통사고 합의 시 실수', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
    ],
  },
];
