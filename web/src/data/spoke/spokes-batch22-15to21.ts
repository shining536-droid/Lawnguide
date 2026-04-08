import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 15. 이 페이지는 [옆집 반려동물 소음·악취로 고통받는 주민]의 [법적 대응 방법을 모르는 상황]에서 [증거 수집부터 손해배상까지 3단계 절차 안내]를 돕는 페이지다.
// 16. 이 페이지는 [경매 물건에 유치권 신고가 있어 입찰을 망설이는 투자자]의 [유치권 진위 판별이 어려운 상황]에서 [허위 유치권 판별 5가지 체크포인트와 대응 전략 안내]를 돕는 페이지다.
// 17. 이 페이지는 [경매 낙찰 후 잔금을 마련하지 못한 낙찰자]의 [보증금 몰수 위기에 놓인 상황]에서 [매각불허가 신청과 보증금 반환 가능 여부 안내]를 돕는 페이지다.
// 18. 이 페이지는 [경매 입찰을 앞두고 대출 방법을 모르는 초보자]의 [잔금 마련 계획이 없는 상황]에서 [대출 조건·한도·사전 승인 절차 안내]를 돕는 페이지다.
// 19. 이 페이지는 [채무자 부동산 경매에서 배당을 받고 싶은 채권자]의 [배당요구 절차와 우선순위를 모르는 상황]에서 [배당요구서 제출부터 이의신청까지 4단계 절차 안내]를 돕는 페이지다.
// 20. 이 페이지는 [부동산 경매를 처음 시작하는 초보자]의 [절차와 준비 방법을 전혀 모르는 상황]에서 [정보 수집부터 입찰서 작성까지 5단계 가이드 안내]를 돕는 페이지다.
// 21. 이 페이지는 [상가 보증금을 돌려받지 못한 소액임차인]의 [경매 배당에서 우선변제를 받고 싶은 상황]에서 [우선변제 3가지 요건과 지역별 한도액 안내]를 돕는 페이지다.

export const spokesBatch22_15to21: SpokePage[] = [
  // ───────────────────────────────────────────
  // 15. neighbor-dispute / pet-noise-smell-legal-action
  // ───────────────────────────────────────────
  {
    domain: 'neighbor-dispute',
    slug: 'pet-noise-smell-legal-action',
    keyword: '반려동물 소음 악취 법적 대응',
    questionKeyword: '옆집 반려동물 소음과 냄새가 심한데 법적으로 해결할 수 있나요?',
    ctaKeyword: '반려동물 소음 대응',
    type: '어디부터형',
    perspective: '피해자',
    meta: {
      title: '반려동물 소음·악취 법적 대응 3단계 절차 | 로앤가이드',
      description:
        '옆집 개 짖는 소리와 냄새 때문에 고통받고 있는데 법적 대응법을 모르겠다면 절차를 지금 확인하세요.',
    },
    intro:
      '<p>옆집 개가 하루 종일 짖습니다. 밤에도 멈추지 않아 잠을 잘 수 없습니다. 관리사무소에 민원을 넣었지만 "동물 학대가 아닌 이상 어쩔 수 없다"는 답변만 돌아옵니다. 참을 한도를 넘는 소음에 법적으로 대응할 수 있는 방법이 있습니다.</p>',
    sections: [
      {
        title: '반려동물 소음 관련 법적 기준',
        content:
          '<p><strong style="color:#1e3a5f">반려동물 소음도 층간소음과 마찬가지로 「주택법」과 「공동주택관리법」에 따른 생활소음 규제 대상이 될 수 있습니다</strong></p>\n<ul>\n<li><strong>공동주택 층간소음 기준</strong> — 주간(06~22시) 5분간 등가소음도 43dB, 야간(22~06시) 38dB 이하가 권고 기준입니다. 반려동물 짖는 소리가 이 기준을 초과하면 공식 민원 대상이 됩니다</li>\n<li><strong>경범죄처벌법 제3조 제1항 제21호</strong> — 악기·라디오·텔레비전 등의 소음뿐 아니라 동물의 소리로 이웃을 시끄럽게 한 사람에게 10만 원 이하의 벌금·구류·과료를 부과할 수 있습니다</li>\n<li><strong>동물보호법</strong> — 소유자가 반려동물의 관리 의무를 다하지 않아 공중에 위해를 끼치는 경우 시·군·구청이 시정명령을 내릴 수 있습니다. 악취 문제도 동물 사육 관리 부실로 접근합니다</li>\n<li><strong>민법 제217조(생활방해 금지)</strong> — 토지 소유자는 매연·열기·액체·소음·진동 등으로 이웃 거주자의 생활에 고통을 주지 않을 의무가 있습니다. 이를 근거로 방해배제청구와 손해배상을 청구할 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 반려동물 소음·악취도 법적 규제 대상 — 경범죄처벌법, 민법 제217조, 동물보호법 모두 활용 가능</blockquote>',
      },
      {
        title: '증거 수집 — 소음 측정과 영상 기록',
        content:
          '<p><strong style="color:#1e3a5f">법적 대응의 성패는 객관적 증거에 달려 있습니다. 소음 측정과 영상 기록을 체계적으로 확보하세요</strong></p>\n<ul>\n<li><strong>소음 측정 앱 활용</strong> — 스마트폰 소음 측정 앱(데시벨X, NIOSH SLM 등)으로 소음 발생 시간·크기를 꾸준히 기록합니다. 법적 증거로 쓰려면 환경부 인증 소음측정기 대여도 고려하세요</li>\n<li><strong>영상·음성 녹음</strong> — 소음 발생 시점을 동영상으로 촬영합니다. 촬영 시 날짜·시각이 화면에 표시되도록 설정하고, 벽 너머에서 들리는 짖는 소리를 그대로 녹음합니다</li>\n<li><strong>소음 일지 작성</strong> — 발생 날짜, 시작·종료 시간, 지속 시간, 측정 데시벨을 표로 정리합니다. 최소 2~4주간 기록하면 "반복적·지속적 피해"를 입증하기 유리합니다</li>\n<li><strong>악취 관련 증거</strong> — 악취가 심한 경우 환경부 악취 민원 신고(환경부 콜센터 1577-8866)를 통해 공식 측정을 요청할 수 있습니다. 측정 결과는 강력한 증거가 됩니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">증거를 모았는데 다음 단계가 막막하다면</strong><br/>\n<a href="/diagnosis/neighbor-dispute" style="color:#1565c0;font-weight:600">반려동물 소음 피해 무료 상담받기 &rarr;</a>\n</div>',
      },
      {
        title: '관리사무소·지자체 신고 절차',
        content:
          '<p><strong style="color:#1e3a5f">소송 전에 관리사무소와 지자체를 통한 행정적 해결을 먼저 시도하면, 법원에서도 "성의 있는 분쟁 해결 노력"으로 인정받습니다</strong></p>\n<ul>\n<li><strong>관리사무소 공식 민원</strong> — 구두 불만이 아닌 서면 민원을 접수합니다. 관리규약에 반려동물 사육 세대의 소음·악취 관리 의무가 있는지 확인하고, 관리주체에게 해당 세대 경고 조치를 요청합니다</li>\n<li><strong>층간소음이웃사이센터</strong> — 한국환경공단이 운영하는 층간소음이웃사이센터(1661-2642)에 상담을 신청합니다. 무료로 소음 측정 서비스와 이웃 간 조정을 지원받을 수 있습니다</li>\n<li><strong>지자체 환경과 신고</strong> — 시·군·구청 환경과에 생활소음 또는 악취 민원을 신고합니다. 담당 공무원이 현장 조사를 실시하고 위반 사실이 확인되면 시정명령을 내립니다</li>\n<li><strong>동물보호법 기반 신고</strong> — 반려동물 관리 부실(다두 사육, 배설물 방치 등)이 의심되면 동물보호 상담전화(1588-9060) 또는 지자체에 동물보호법 위반으로 신고합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">순서: 관리사무소 서면 민원 → 이웃사이센터 조정 → 지자체 환경과 신고 → 법적 조치 검토</blockquote>',
      },
      {
        title: '민사 손해배상 청구와 조정',
        content:
          '<p><strong style="color:#1e3a5f">행정 조치로 해결되지 않으면 민사소송을 통해 방해 금지와 손해배상을 청구할 수 있습니다</strong></p>\n<ul>\n<li><strong>방해배제·예방청구</strong> — 민법 제217조에 근거하여 소음·악취의 원인 행위를 중단하라는 청구가 가능합니다. 법원이 인용하면 상대방은 소음 저감 조치(방음, 훈련 등)를 해야 합니다</li>\n<li><strong>손해배상 청구</strong> — 참을 한도(수인한도)를 넘는 소음·악취로 정신적 고통을 받았다면 위자료를 청구합니다. 실제 치료비(수면장애, 스트레스성 질환 등)가 있으면 적극적 손해도 청구 가능합니다</li>\n<li><strong>민사조정 활용</strong> — 소송 전 법원 민사조정을 신청하면 비용과 시간을 절약할 수 있습니다. 조정 성립 시 판결과 같은 효력이 있어 상대방이 이행하지 않으면 강제집행도 가능합니다</li>\n<li><strong>수인한도 판단 기준</strong> — 법원은 소음의 정도와 빈도, 피해의 성질, 지역적 특성, 가해자의 방지 노력 등을 종합적으로 고려합니다. 장기간 기록한 소음 일지와 측정 데이터가 수인한도 초과 입증에 핵심입니다</li>\n</ul>\n<p><strong>참고:</strong> 소음·악취가 심각하여 정상적 거주가 불가능한 수준이면 임차인은 임대차계약 해지 사유로도 주장할 수 있습니다. 이 경우 임대인에게 하자 보수 의무 이행을 요구하는 것도 방법입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">민사 대응: 방해배제 청구 + 위자료 청구 + 조정 활용 = 비용 대비 효과적</blockquote>',
      },
    ],
    cases: [
      {
        title: '반복적 소음 발생과 스토킹범죄 해당 여부 — 대법원 판결',
        summary:
          '대법원 2023도10313 사건에서 수개월간 반복하여 고의로 소음을 발생시킨 행위가 스토킹범죄에 해당하는지 판단했습니다. 법원은 반복적 소음 발생이 상대방에게 불안감을 일으키기에 충분한 행위라고 판시했습니다.',
        takeaway:
          '단순한 생활소음이 아닌 고의적·반복적 소음 발생은 스토킹범죄로도 처벌될 수 있습니다. 소음의 의도성과 반복성을 증거로 확보하면 형사 고소도 가능합니다.',
      },
    ],
    faq: [
      {
        question: '반려동물 소음으로 경찰에 신고할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 경범죄처벌법에 따라 동물 소음으로 이웃을 시끄럽게 한 행위는 처벌 대상입니다. 112에 신고하면 경찰이 출동하여 경고 조치를 할 수 있고, 반복되면 과태료 부과까지 이어집니다.',
      },
      {
        question: '반려동물 악취 민원은 어디에 넣어야 하나요?',
        answer:
          '<strong>시·군·구청 환경과 또는 환경부 콜센터(1577-8866)에 신고합니다.</strong> 악취 측정을 요청하면 전문 장비로 현장 조사를 실시하고, 기준 초과 시 시정명령이 내려집니다. 관리사무소에도 병행 민원을 접수하세요.',
      },
      {
        question: '관리규약으로 반려동물 사육을 금지할 수 있나요?',
        answer:
          '<strong>입주자 대표회의 의결로 관리규약에 반려동물 사육 제한 조항을 둘 수 있습니다.</strong> 다만 전면 금지는 재산권 침해 논란이 있으므로 "소음·악취 유발 시 사육 제한" 조항이 실무적으로 더 유효합니다.',
      },
      {
        question: '소음 피해로 위자료는 얼마나 받을 수 있나요?',
        answer:
          '<strong>통상 50만~500만 원 범위에서 인정됩니다.</strong> 피해 기간, 소음의 정도, 건강 피해 여부 등에 따라 달라집니다. 수면장애 등 진단서가 있으면 위자료가 높아지고, 치료비도 별도 청구할 수 있습니다.',
      },
      {
        question: '이웃과 직접 대화로 해결이 안 되면 어떻게 하나요?',
        answer:
          '<strong>층간소음이웃사이센터(1661-2642)의 무료 조정 서비스를 이용하세요.</strong> 전문 상담사가 중재하여 합의를 유도합니다. 조정이 안 되면 법원 민사조정 신청 후 소송으로 진행하는 순서가 비용 대비 효과적입니다.',
      },
    ],
    cta: {
      text: '반려동물 소음 피해 무료 상담받기',
      link: '/diagnosis/neighbor-dispute',
    },
    internalLinks: [
      { label: '이웃분쟁 가이드', href: '/guide/neighbor-dispute' },
      { label: '층간소음 분쟁 대응법', href: '/spoke/neighbor-dispute/floor-noise-dispute-response' },
      { label: '반려동물·악취·주차 분쟁', href: '/spoke/neighbor-dispute/neighbor-dispute-smell-pet-parking' },
      { label: '층간소음 피해자 어디부터', href: '/spoke/neighbor-dispute/floor-noise-victim-where-to-start' },
      { label: '공사 소음·진동 대응법', href: '/spoke/neighbor-dispute/construction-noise-vibration-response' },
    ],
  },

  // ───────────────────────────────────────────
  // 16. real-estate-auction / auction-lien-risk-analysis
  // ───────────────────────────────────────────
  {
    domain: 'real-estate-auction',
    slug: 'auction-lien-risk-analysis',
    keyword: '경매 유치권 위험 분석 대응',
    questionKeyword: '경매 물건에 유치권이 있으면 어떻게 되나요?',
    ctaKeyword: '경매 유치권 분석',
    type: '체크리스트형',
    perspective: '피해자',
    meta: {
      title: '경매 유치권 위험 분석 5가지 체크리스트 | 로앤가이드',
      description:
        '경매 물건에 유치권 신고가 있어서 입찰을 망설이고 있다면 위험 분석 방법을 지금 확인하세요.',
    },
    intro:
      '<p>시세보다 훨씬 싼 경매 물건을 발견했습니다. 그런데 유치권 신고가 되어 있습니다. 유치권 금액이 수억 원이라 낙찰받아도 손해를 볼 수 있다는 이야기를 들었습니다. 유치권이 진짜인지, 대응할 수 있는지 확인해야 합니다.</p>',
    sections: [
      {
        title: '유치권이란 — 경매에서의 의미',
        content:
          '<p><strong style="color:#1e3a5f">유치권은 타인의 물건을 점유한 사람이 그 물건에 관해 생긴 채권이 변제될 때까지 물건을 유치(보유)할 수 있는 권리입니다(민법 제320조)</strong></p>\n<ul>\n<li><strong>경매에서의 효과</strong> — 유치권은 경매 절차에서 소멸하지 않습니다. 낙찰자가 유치권자에게 피담보채권(공사대금 등)을 변제해야 인도를 받을 수 있습니다. 유치권 금액만큼 실제 취득 비용이 늘어나는 셈입니다</li>\n<li><strong>매각물건명세서 확인</strong> — 법원은 매각물건명세서에 유치권 신고 내역을 기재합니다. 다만 "유치권 신고가 있음"이라고 적힌 것이지 법원이 유치권의 존부를 확정한 것은 아닙니다</li>\n<li><strong>허위 유치권 비율</strong> — 실무에서 경매 물건에 신고된 유치권의 상당수가 허위 또는 과장된 것으로 알려져 있습니다. 채무자와 공모하여 낙찰가를 낮추려는 목적인 경우가 많습니다</li>\n<li><strong>감정가 미반영</strong> — 유치권 금액은 감정가에 반영되지 않습니다. 때문에 유치권이 있는 물건은 입찰자가 줄어 저가에 낙찰되는 경향이 있어, 허위 유치권을 깨뜨리면 수익을 올릴 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 유치권은 경매로 소멸하지 않아 낙찰자가 인수 — 허위 여부 판별이 핵심</blockquote>',
      },
      {
        title: '허위 유치권 판별 5가지 체크포인트',
        content:
          '<p><strong style="color:#1e3a5f">유치권 신고가 있다고 무조건 피할 필요는 없습니다. 아래 5가지를 체크하면 허위 유치권을 상당 부분 걸러낼 수 있습니다</strong></p>\n<ul>\n<li><strong>① 점유 여부 확인</strong> — 유치권의 핵심 요건은 "현실적 점유"입니다. 현장을 방문하여 유치권자가 실제로 건물을 점유하고 있는지 확인합니다. 현수막만 걸어놓고 아무도 없으면 점유가 인정되지 않을 가능성이 높습니다</li>\n<li><strong>② 공사 실체 확인</strong> — 유치권의 피담보채권이 공사대금이라면, 실제 공사가 이루어졌는지 건축물대장, 인허가 이력, 현장 상태를 확인합니다. 공사 흔적이 없으면 허위 가능성이 큽니다</li>\n<li><strong>③ 채권 금액의 적정성</strong> — 신고된 유치권 금액이 실제 공사 규모에 비해 과도한지 검토합니다. 건물 면적 대비 공사대금이 비정상적으로 크면 과장된 것일 수 있습니다</li>\n<li><strong>④ 점유 시기와 경매 개시 시기</strong> — 경매 개시결정 이후에 점유를 시작한 유치권은 경매 절차에서 대항할 수 없습니다(대법원 판례). 점유 시작 시기를 반드시 확인하세요</li>\n<li><strong>⑤ 채무자와의 관계</strong> — 유치권자가 채무자의 친인척이거나 관련 법인이면 허위 유치권 가능성이 높습니다. 법인등기부를 열람하여 대표자·주주 관계를 확인합니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">유치권 물건 입찰 여부가 고민된다면</strong><br/>\n<a href="/diagnosis/real-estate-auction" style="color:#1565c0;font-weight:600">경매 유치권 분석 무료 상담받기 &rarr;</a>\n</div>',
      },
      {
        title: '유치권 있는 물건 입찰 시 전략',
        content:
          '<p><strong style="color:#1e3a5f">유치권이 진짜로 판단되면 금액을 입찰가에 반영하고, 허위로 판단되면 오히려 저가 낙찰 기회가 됩니다</strong></p>\n<ul>\n<li><strong>진짜 유치권인 경우</strong> — 유치권 금액을 시세에서 차감하여 입찰가를 결정합니다. 예를 들어 시세 5억 원인 물건에 유치권 2억 원이 있으면, 실질 취득가가 낙찰가 + 2억 원이 되므로 입찰 상한을 그만큼 낮춰야 합니다</li>\n<li><strong>허위 유치권인 경우</strong> — 다른 입찰자들이 유치권 때문에 기피하므로 경쟁이 줄어듭니다. 허위를 확신한다면 저가 입찰 후 낙찰받아 유치권 부존재 확인소송으로 해결하는 전략이 가능합니다</li>\n<li><strong>현장 실사 필수</strong> — 입찰 전 반드시 현장을 2~3회 방문합니다. 점유 상태, 건물 상태, 주변 시세를 직접 확인하고, 가능하면 유치권자와 대화하여 주장 근거를 파악합니다</li>\n<li><strong>권리분석 전문가 활용</strong> — 유치권은 등기부등본에 나오지 않아 분석이 어렵습니다. 경매 전문 법무사나 변호사의 권리분석을 받으면 리스크를 크게 줄일 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">전략: 허위 유치권 → 저가 낙찰 기회 / 진짜 유치권 → 금액 반영 후 입찰</blockquote>',
      },
      {
        title: '낙찰 후 유치권자 상대 대응법',
        content:
          '<p><strong style="color:#1e3a5f">낙찰받은 후 유치권자가 인도를 거부하면 법적 절차를 통해 대응해야 합니다</strong></p>\n<ul>\n<li><strong>유치권 부존재 확인소송</strong> — 유치권이 허위라고 판단되면 법원에 유치권 부존재 확인의 소를 제기합니다. 승소하면 유치권자에게 아무것도 지급하지 않고 인도를 받을 수 있습니다</li>\n<li><strong>인도명령 신청</strong> — 낙찰 대금 납부 후 6개월 이내에 법원에 인도명령을 신청합니다. 다만 유치권자가 적법한 유치권을 주장하면 인도명령이 기각될 수 있어, 별도 소송이 필요합니다</li>\n<li><strong>변제 후 인도</strong> — 유치권이 적법한 경우, 피담보채권 일부 또는 전부를 변제하고 인도를 받는 협상을 합니다. 유치권자도 장기간 점유 유지 비용이 부담되므로 할인 협상이 가능한 경우가 많습니다</li>\n<li><strong>경매방해 형사고소</strong> — 허위 유치권으로 경매를 방해한 행위는 형법 제315조(경매·입찰 방해) 또는 사기죄에 해당합니다. 형사고소와 민사소송을 병행하면 유치권자에게 강력한 압박이 됩니다</li>\n</ul>\n<p><strong>주의:</strong> 유치권자를 무단으로 퇴거시키면 주거침입·재물손괴 등의 문제가 발생할 수 있습니다. 반드시 법원 절차를 통해 인도를 받으세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">대응 순서: 유치권 진위 판단 → 허위이면 부존재 확인소송 + 경매방해 고소 / 적법이면 협상 후 인도</blockquote>',
      },
    ],
    cases: [
      {
        title: '허위 유치권 신고와 경매방해죄 — 대법원 판결',
        summary:
          '대법원 2022도3103 사건에서 부동산 경매절차에서 허위 유치권 신고가 경매방해죄에 해당하는지 판단했습니다. 법원은 경매의 공정을 해하는 행위에는 가격 결정뿐 아니라 공정한 경쟁방법 자체를 해하는 행위를 포함한다고 판시했습니다.',
        takeaway:
          '허위 유치권 신고는 경매방해죄로 처벌받을 수 있습니다. 유치권이 의심되면 증거를 확보하여 형사고소와 민사소송을 병행하는 것이 효과적입니다.',
      },
    ],
    faq: [
      {
        question: '유치권이 있으면 무조건 낙찰자가 떠안아야 하나요?',
        answer:
          '<strong>적법한 유치권이라면 그렇습니다.</strong> 유치권은 경매로 소멸하지 않으므로 낙찰자가 피담보채권을 변제해야 인도를 받습니다. 다만 허위 유치권이면 부존재 확인소송으로 다툴 수 있습니다.',
      },
      {
        question: '경매 개시결정 후에 생긴 유치권도 유효한가요?',
        answer:
          '<strong>대항할 수 없습니다.</strong> 대법원 판례에 따르면 경매 개시결정 등기 이후에 점유를 개시한 유치권은 경매 절차의 매수인에게 대항할 수 없습니다. 점유 시작 시기가 핵심입니다.',
      },
      {
        question: '유치권 금액을 협상으로 줄일 수 있나요?',
        answer:
          '<strong>실무적으로 가능합니다.</strong> 유치권자도 장기 점유에 따른 관리 비용이 부담되므로, 피담보채권의 50~70% 수준에서 합의하는 사례가 많습니다. 합의 시 반드시 "유치권 포기" 확인서를 받으세요.',
      },
      {
        question: '유치권 물건은 대출이 어렵나요?',
        answer:
          '<strong>일반 은행 대출은 어렵습니다.</strong> 유치권이 있으면 담보 가치 산정이 불확실하여 시중 은행에서 대출을 꺼립니다. 캐피탈이나 저축은행 등 제2금융권 대출을 활용하되, 금리가 높으므로 수익성을 재계산하세요.',
      },
      {
        question: '유치권 부존재 확인소송은 얼마나 걸리나요?',
        answer:
          '<strong>통상 6개월~1년 정도 소요됩니다.</strong> 쟁점이 점유 여부와 채권 존부인 경우 증거에 따라 비교적 빠르게 판결이 나올 수 있습니다. 가처분(점유이전금지)을 함께 신청하면 소송 중 점유 변동을 방지할 수 있습니다.',
      },
    ],
    cta: {
      text: '경매 유치권 분석 무료 상담받기',
      link: '/diagnosis/real-estate-auction',
    },
    internalLinks: [
      { label: '부동산 경매 가이드', href: '/guide/real-estate-auction' },
      { label: '경매 입찰 절차 안내', href: '/spoke/real-estate-auction/auction-bidding-procedure' },
      { label: '경매 권리분석 체크리스트', href: '/spoke/real-estate-auction/auction-rights-analysis-checklist' },
      { label: '낙찰 후 명도 절차', href: '/spoke/real-estate-auction/eviction-after-winning-bid' },
      { label: '경매 초보 흔한 실수', href: '/spoke/real-estate-auction/beginner-auction-common-mistakes' },
    ],
  },

  // ───────────────────────────────────────────
  // 17. real-estate-auction / auction-cancellation-deposit-recovery
  // ───────────────────────────────────────────
  {
    domain: 'real-estate-auction',
    slug: 'auction-cancellation-deposit-recovery',
    keyword: '경매 취소 보증금 회수 절차',
    questionKeyword: '경매 낙찰 후 취소하면 보증금을 돌려받을 수 있나요?',
    ctaKeyword: '경매 보증금 회수',
    type: '상황형',
    perspective: '피해자',
    meta: {
      title: '경매 취소·보증금 회수 가능 여부와 절차 3가지 | 로앤가이드',
      description:
        '경매 낙찰 후 사정이 생겨 취소하고 싶은데 보증금을 돌려받을 수 있는지 궁금하다면 지금 확인하세요.',
    },
    intro:
      '<p>경매에서 낙찰을 받았는데, 대출이 안 나옵니다. 잔금을 치를 수 없는 상황입니다. 입찰 보증금을 포기해야 하는 건지, 다른 방법이 있는지 알고 싶습니다.</p>',
    sections: [
      {
        title: '낙찰 포기 시 보증금 몰수 원칙',
        content:
          '<p><strong style="color:#1e3a5f">경매에서 낙찰받은 후 잔금을 납부하지 않으면, 입찰 보증금은 원칙적으로 몰수됩니다(민사집행법 제142조)</strong></p>\n<ul>\n<li><strong>보증금 몰수 구조</strong> — 입찰 보증금(통상 최저매각가격의 10%)은 낙찰 후 잔금 납부를 담보하는 역할입니다. 잔금 기한 내에 대금을 완납하지 않으면 보증금은 배당 재원에 편입되어 채권자에게 배당됩니다</li>\n<li><strong>재매각 명령</strong> — 낙찰자가 잔금을 미납하면 법원은 재매각(재경매)을 명합니다. 기존 낙찰은 효력을 잃고 새로운 매각 절차가 진행됩니다</li>\n<li><strong>차액 부담 없음</strong> — 재매각 시 매각가격이 기존 낙찰가보다 낮아지더라도 기존 낙찰자에게 차액을 청구하지는 않습니다. 다만 보증금 몰수라는 불이익이 이미 발생합니다</li>\n<li><strong>보증금 규모</strong> — 아파트 경매의 경우 최저매각가격의 10%이므로, 3억 원 물건이면 3,000만 원이 몰수됩니다. 결코 적은 금액이 아닙니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">원칙: 잔금 미납 = 보증금 몰수 + 재매각 — 예외 사유가 있는지 확인 필수</blockquote>',
      },
      {
        title: '보증금 반환이 가능한 예외 상황',
        content:
          '<p><strong style="color:#1e3a5f">보증금 몰수가 원칙이지만, 매각 절차에 하자가 있으면 보증금을 돌려받을 수 있는 예외가 있습니다</strong></p>\n<ul>\n<li><strong>매각물건명세서 오류</strong> — 법원이 작성한 매각물건명세서에 중요한 권리관계가 누락되거나 잘못 기재되어, 이를 믿고 입찰한 경우 매각불허가 사유가 됩니다</li>\n<li><strong>현황조사보고서 하자</strong> — 집행관의 현황조사 내용과 실제 현황이 크게 다른 경우. 예를 들어 점유자가 없다고 기재했는데 실제로 점유자가 있는 경우</li>\n<li><strong>감정평가 중대 오류</strong> — 감정가에 중대한 착오가 있어 매각가격이 부당하게 형성된 경우</li>\n<li><strong>경매 절차상 위법</strong> — 매각기일 공고가 적법하지 않거나, 이해관계인에 대한 통지가 누락된 경우 등 절차적 하자가 있는 경우</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">보증금 반환 가능 여부가 불확실하다면</strong><br/>\n<a href="/diagnosis/real-estate-auction" style="color:#1565c0;font-weight:600">경매 보증금 회수 무료 상담받기 &rarr;</a>\n</div>',
      },
      {
        title: '매각불허가 신청 절차',
        content:
          '<p><strong style="color:#1e3a5f">매각 절차에 하자가 있으면 매각허가결정 전에 매각불허가를 신청하거나, 매각허가결정에 대해 즉시항고할 수 있습니다</strong></p>\n<ul>\n<li><strong>매각불허가 신청 시기</strong> — 매각기일 종료 후 매각허가결정이 나기 전(통상 1주일)까지 법원에 매각불허가를 신청합니다. 이때 구체적인 하자 사유와 증거를 함께 제출합니다</li>\n<li><strong>즉시항고</strong> — 법원이 매각을 허가한 경우, 허가결정 고지일부터 1주일 이내에 즉시항고할 수 있습니다. 항고 사유는 매각절차의 중대한 위법사항에 한정됩니다</li>\n<li><strong>허가결정 취소 시 보증금</strong> — 매각이 불허가되거나 허가결정이 취소되면 입찰 보증금은 낙찰자에게 반환됩니다. 절차 하자가 인정된 경우이므로 낙찰자에게 불이익이 없습니다</li>\n<li><strong>주의사항</strong> — 단순히 "대출이 안 나온다" "마음이 바뀌었다"는 매각불허가 사유가 아닙니다. 매각 절차 자체의 객관적 하자가 있어야 합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">매각불허가 = 절차 하자가 있을 때만 가능 — 단순 사정변경은 사유가 안 됨</blockquote>',
      },
      {
        title: '재경매와 차액 부담 문제',
        content:
          '<p><strong style="color:#1e3a5f">보증금이 몰수된 후 재매각이 진행되며, 기존 낙찰자가 알아야 할 후속 절차가 있습니다</strong></p>\n<ul>\n<li><strong>재매각 절차</strong> — 법원은 종전 최저매각가격의 80%까지 낮추어 새로운 매각 기일을 지정합니다. 재매각에서도 유찰되면 다시 20%씩 저감됩니다</li>\n<li><strong>몰수 보증금의 처리</strong> — 몰수된 보증금은 매각대금으로 취급되어 배당 절차에 편입됩니다. 채권자들에게 배당된 후에는 돌려받을 방법이 없습니다</li>\n<li><strong>재입찰 가능 여부</strong> — 보증금이 몰수된 낙찰자도 재매각에 다시 입찰할 수 있습니다. 다만 같은 실수를 반복하지 않도록 자금 계획을 확실히 세워야 합니다</li>\n<li><strong>사전 예방</strong> — 입찰 전에 대출 사전 승인을 받아두고, 잔금 납부 기한(통상 1개월)까지 자금 조달이 확실한 경우에만 입찰하세요. 보증금 몰수는 되돌릴 수 없습니다</li>\n</ul>\n<p><strong>실무 팁:</strong> 잔금 마련이 어려워지면 매각허가결정 확정 전에 다른 사람에게 매수 지위를 양도(매각허가결정 전 취하 동의)하는 방법도 이론적으로 가능하지만, 실무에서는 법원이 허용하지 않는 경우가 대부분입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 예방: 입찰 전 대출 사전 승인 + 자금 계획 확정 — 보증금 몰수는 되돌릴 수 없음</blockquote>',
      },
    ],
    cases: [
      {
        title: '경매 배당요구와 절차적 하자 — 대법원 판결',
        summary:
          '대법원 2024다242223 사건에서 경매 절차에서의 배당 요구 관련 법리를 판단했습니다. 법원은 경매 절차의 적법성이 매수인의 권리에 직결되며, 절차적 하자가 있는 경우 매각허가에 영향을 미칠 수 있다고 판시했습니다.',
        takeaway:
          '경매 절차에 객관적 하자가 있다면 매각불허가를 통해 보증금을 반환받을 수 있습니다. 낙찰 후 문제를 발견하면 즉시 절차 하자 여부를 전문가에게 확인받으세요.',
      },
    ],
    faq: [
      {
        question: '대출이 안 나와서 잔금을 못 내면 보증금을 돌려받을 수 있나요?',
        answer:
          '<strong>원칙적으로 불가능합니다.</strong> 대출 불가는 낙찰자 개인 사정이므로 매각불허가 사유가 되지 않습니다. 보증금은 몰수되고 재매각이 진행됩니다. 입찰 전에 대출 사전 승인을 반드시 받아두세요.',
      },
      {
        question: '매각허가결정 전에 취소할 수 있나요?',
        answer:
          '<strong>낙찰자가 스스로 입찰을 철회하는 제도는 없습니다.</strong> 매각 절차에 객관적 하자가 있는 경우에만 매각불허가를 신청할 수 있고, 단순 변심은 사유가 되지 않습니다.',
      },
      {
        question: '보증금이 몰수되면 추가 불이익도 있나요?',
        answer:
          '<strong>보증금 몰수 외에 추가 금전적 불이익은 없습니다.</strong> 재매각에서 더 낮은 가격에 낙찰되더라도 차액을 기존 낙찰자에게 청구하지 않습니다. 다만 신용 불이익은 없지만 해당 법원에서 향후 입찰 시 불리할 수 있습니다.',
      },
      {
        question: '잔금 납부 기한을 연장할 수 있나요?',
        answer:
          '<strong>법원에 납부기한 연장을 신청할 수 있습니다.</strong> 다만 인용 여부는 법원 재량이며, 통상적으로 대출 지연 등 합리적 사유가 있어야 합니다. 연장이 인정되면 통상 2~4주 추가됩니다.',
      },
      {
        question: '공동입찰로 보증금을 나누면 위험이 줄어드나요?',
        answer:
          '<strong>보증금 부담은 나눌 수 있지만 몰수 위험은 동일합니다.</strong> 공동입찰자 중 한 명이라도 잔금을 내지 못하면 전체 보증금이 몰수됩니다. 공동입찰은 자금 분담 목적이지 위험 분산 수단이 아닙니다.',
      },
    ],
    cta: {
      text: '경매 보증금 회수 무료 상담받기',
      link: '/diagnosis/real-estate-auction',
    },
    internalLinks: [
      { label: '부동산 경매 가이드', href: '/guide/real-estate-auction' },
      { label: '경매 입찰 절차 안내', href: '/spoke/real-estate-auction/auction-bidding-procedure' },
      { label: '경매 권리분석 체크리스트', href: '/spoke/real-estate-auction/auction-rights-analysis-checklist' },
      { label: '낙찰 후 명도 절차', href: '/spoke/real-estate-auction/eviction-after-winning-bid' },
      { label: '경매 초보 흔한 실수', href: '/spoke/real-estate-auction/beginner-auction-common-mistakes' },
    ],
  },

  // ───────────────────────────────────────────
  // 18. real-estate-auction / auction-loan-preparation
  // ───────────────────────────────────────────
  {
    domain: 'real-estate-auction',
    slug: 'auction-loan-preparation',
    keyword: '경매 낙찰 대출 준비 조건',
    questionKeyword: '경매 낙찰 후 대출은 어떻게 받나요?',
    ctaKeyword: '경매 대출 준비',
    type: '어디부터형',
    perspective: '피해자',
    meta: {
      title: '경매 낙찰 대출 준비 4가지 핵심 조건 | 로앤가이드',
      description:
        '경매 입찰을 앞두고 대출 한도와 조건이 궁금하다면 준비 방법을 지금 확인하세요.',
    },
    intro:
      '<p>경매에 관심이 생겨 물건을 찾고 있습니다. 그런데 낙찰받으면 잔금을 어떻게 마련하는지 모르겠습니다. 은행 대출이 가능한지, 미리 뭘 준비해야 하는지 알아야 입찰 금액을 정할 수 있습니다.</p>',
    sections: [
      {
        title: '경매 대출 가능 금융기관과 조건',
        content:
          '<p><strong style="color:#1e3a5f">경매 물건도 일반 매매와 마찬가지로 담보대출이 가능하지만, 금융기관마다 취급 조건과 한도가 다릅니다</strong></p>\n<ul>\n<li><strong>시중 은행(1금융권)</strong> — 금리가 가장 낮지만 심사가 엄격합니다. 경매 물건이라는 이유로 대출을 거절하지는 않지만, 권리관계가 복잡하거나 유치권·선순위 임차인이 있으면 취급을 꺼리는 경우가 있습니다</li>\n<li><strong>저축은행·캐피탈(2금융권)</strong> — 1금융권보다 금리는 높지만 심사가 유연합니다. 경매 전문 대출 상품을 운영하는 곳도 있어, 1금융권에서 거절된 경우 대안이 됩니다</li>\n<li><strong>대부업체</strong> — 긴급 잔금 마련이 필요할 때 브릿지론(단기 대출)을 활용할 수 있습니다. 금리가 매우 높으므로(연 15~20%) 잔금 납부 후 빠르게 1금융권으로 대환하는 전략이 필요합니다</li>\n<li><strong>경매 전문 대출</strong> — 일부 금융기관은 경매 낙찰자를 위한 전용 대출 상품을 운영합니다. 낙찰 결정문만으로 사전 심사를 진행하여 잔금 기한 내 대출 실행이 가능합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">대출 우선순위: 1금융권(저금리) → 2금융권(유연 심사) → 브릿지론(긴급 시) → 대환</blockquote>',
      },
      {
        title: '대출 한도 결정 요소 — LTV·DTI·DSR',
        content:
          '<p><strong style="color:#1e3a5f">경매 대출도 일반 주택담보대출과 동일한 규제를 받으며, LTV·DTI·DSR 3가지 비율이 한도를 결정합니다</strong></p>\n<ul>\n<li><strong>LTV(담보인정비율)</strong> — 담보물건 가치 대비 대출 비율입니다. 규제지역은 40~50%, 비규제지역은 70%까지 가능합니다. 경매에서는 낙찰가가 아닌 감정가 또는 시세 기준으로 산정하는 경우가 많습니다</li>\n<li><strong>DTI(총부채상환비율)</strong> — 연소득 대비 연간 원리금 상환액 비율입니다. 규제지역은 40~50% 이내여야 합니다. 기존 대출의 이자 상환액도 포함되므로, 다른 대출이 있으면 한도가 줄어듭니다</li>\n<li><strong>DSR(총부채원리금상환비율)</strong> — DTI보다 엄격한 기준으로, 모든 대출의 원리금 상환액을 합산합니다. 은행권은 DSR 40%, 2금융권은 50%가 상한입니다</li>\n<li><strong>경매 특수 사항</strong> — 선순위 전세보증금이나 유치권이 있으면 실질 담보 가치가 줄어들어 대출 한도가 낮아집니다. 입찰 전에 권리분석 후 대출 가능 금액을 확인해야 합니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">대출 한도를 미리 알고 싶다면</strong><br/>\n<a href="/diagnosis/real-estate-auction" style="color:#1565c0;font-weight:600">경매 대출 준비 무료 상담받기 &rarr;</a>\n</div>',
      },
      {
        title: '낙찰 전 사전 승인과 준비 서류',
        content:
          '<p><strong style="color:#1e3a5f">입찰 전에 대출 사전 승인을 받아두면 잔금 미납으로 보증금을 잃는 위험을 크게 줄일 수 있습니다</strong></p>\n<ul>\n<li><strong>사전 상담</strong> — 입찰 대상 물건의 등기부등본, 매각물건명세서, 감정평가서를 가지고 은행을 방문합니다. 대출 가능 여부와 예상 한도를 사전에 확인받으세요</li>\n<li><strong>준비 서류</strong> — 신분증, 소득증빙(근로소득원천징수영수증 또는 소득금액증명원), 재직증명서, 기존 대출 현황, 경매 물건 관련 서류(등기부등본, 감정평가서, 매각물건명세서)</li>\n<li><strong>사전 승인 절차</strong> — 일부 은행은 낙찰 전에 조건부 대출 승인을 내줍니다. "해당 물건을 OO만 원 이하에 낙찰받으면 대출 실행 가능"이라는 확인서를 받아두면 안심하고 입찰할 수 있습니다</li>\n<li><strong>복수 금융기관 비교</strong> — 반드시 2~3곳 이상의 금융기관에서 대출 조건을 비교하세요. 같은 물건이라도 금융기관마다 LTV 산정 기준과 금리가 다릅니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 입찰 전 사전 승인 = 보증금 몰수 위험 차단 — 2~3곳 비교 필수</blockquote>',
      },
      {
        title: '잔금 납부 기한과 미납 시 불이익',
        content:
          '<p><strong style="color:#1e3a5f">낙찰 후 잔금 납부까지의 타이밍을 정확히 알아야 대출 실행 일정을 맞출 수 있습니다</strong></p>\n<ul>\n<li><strong>잔금 납부 기한</strong> — 매각허가결정이 확정된 후 법원이 지정하는 대금 납부 기한(통상 확정일로부터 1개월)까지 잔금을 완납해야 합니다</li>\n<li><strong>대출 실행 타이밍</strong> — 매각허가결정 확정 후 바로 은행에 대출을 신청합니다. 은행 심사에 1~2주가 걸리므로 확정 즉시 움직여야 합니다. 사전 승인을 받아둔 경우 서류 보완만으로 빠르게 실행됩니다</li>\n<li><strong>미납 시 보증금 몰수</strong> — 기한 내에 잔금을 납부하지 않으면 입찰 보증금(최저매각가격의 10%)이 몰수됩니다. 추가 금전 제재는 없지만 보증금 자체가 큰 금액입니다</li>\n<li><strong>기한 연장 신청</strong> — 부득이한 사유가 있으면 법원에 납부기한 연장을 신청할 수 있습니다. 대출 심사 지연 등 합리적 사유를 소명하면 2~4주 연장이 인정되는 경우가 있습니다</li>\n</ul>\n<p><strong>실무 팁:</strong> 경매 대출은 잔금 납부일에 대출금이 법원 계좌로 직접 입금되는 구조입니다. 은행과 잔금 납부일을 미리 조율하여 당일 대출 실행이 가능하도록 준비하세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">타임라인: 낙찰 → 매각허가 확정(1주) → 잔금 기한(1개월) — 대출 사전 준비로 여유 확보</blockquote>',
      },
    ],
    cases: [
      {
        title: '경매 잔금 납부와 매각허가 관련 — 대법원 판결',
        summary:
          '대법원 2024다242223 사건에서 경매 절차의 적법성과 매수인의 권리 관계를 판단했습니다. 법원은 매각허가결정이 확정되면 매수인은 대금 납부 의무를 부담하며, 절차적 하자가 없는 한 납부 의무를 면할 수 없다고 판시했습니다.',
        takeaway:
          '낙찰 후 대출이 안 나오더라도 잔금 납부 의무는 면제되지 않습니다. 입찰 전에 대출 사전 승인을 받아두는 것이 보증금 보호의 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '경매 물건도 주택담보대출이 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 경매 낙찰 물건도 일반 매매와 동일하게 주택담보대출 대상입니다. 다만 권리관계가 복잡한 물건(유치권, 법정지상권 등)은 은행에서 대출을 꺼릴 수 있으므로 사전 상담이 필요합니다.',
      },
      {
        question: '낙찰가가 감정가보다 낮으면 대출이 더 나오나요?',
        answer:
          '<strong>LTV는 감정가 또는 시세 기준으로 산정하므로, 낙찰가가 낮을수록 자기자본 비율이 낮아져 유리합니다.</strong> 예를 들어 감정가 5억 원(LTV 70% = 3.5억)인 물건을 3억에 낙찰받으면 잔금 전액을 대출로 충당할 수도 있습니다.',
      },
      {
        question: '경매 대출 금리는 일반 매매보다 높나요?',
        answer:
          '<strong>1금융권은 일반 매매와 거의 동일한 금리를 적용합니다.</strong> 2금융권은 1~3%p 정도 높을 수 있습니다. 브릿지론은 연 15~20%로 매우 높으므로, 1금융권 대환을 전제로 단기만 활용하세요.',
      },
      {
        question: '입찰 전에 은행 대출 상담을 받을 수 있나요?',
        answer:
          '<strong>가능하고, 반드시 받아야 합니다.</strong> 경매 물건 서류(등기부등본, 감정평가서, 매각물건명세서)를 가지고 은행에 방문하면 예상 대출 한도와 금리를 사전 안내받을 수 있습니다.',
      },
      {
        question: '전세 세입자가 있는 물건은 대출에 영향이 있나요?',
        answer:
          '<strong>선순위 전세보증금이 있으면 실질 담보 가치가 줄어들어 대출 한도가 낮아집니다.</strong> 예를 들어 감정가 5억 원에 선순위 전세 2억이 있으면 담보 가치는 3억으로 산정되어 LTV 70% 적용 시 최대 2.1억까지만 대출됩니다.',
      },
    ],
    cta: {
      text: '경매 대출 준비 무료 상담받기',
      link: '/diagnosis/real-estate-auction',
    },
    internalLinks: [
      { label: '부동산 경매 가이드', href: '/guide/real-estate-auction' },
      { label: '경매 입찰 절차 안내', href: '/spoke/real-estate-auction/auction-bidding-procedure' },
      { label: '경매 권리분석 체크리스트', href: '/spoke/real-estate-auction/auction-rights-analysis-checklist' },
      { label: '낙찰 후 명도 절차', href: '/spoke/real-estate-auction/eviction-after-winning-bid' },
      { label: '경매 초보 흔한 실수', href: '/spoke/real-estate-auction/beginner-auction-common-mistakes' },
    ],
  },

  // ───────────────────────────────────────────
  // 19. real-estate-auction / auction-surplus-distribution
  // ───────────────────────────────────────────
  {
    domain: 'real-estate-auction',
    slug: 'auction-surplus-distribution',
    keyword: '경매 배당금 잉여금 수령 절차',
    questionKeyword: '경매 배당금은 어떻게 분배되나요?',
    ctaKeyword: '경매 배당금 수령',
    type: '절차타임라인형',
    perspective: '피해자',
    meta: {
      title: '경매 배당금 분배 절차 4단계와 이의신청 | 로앤가이드',
      description:
        '경매에서 배당받을 수 있는 금액이 궁금하거나 배당이의를 제기하고 싶다면 절차를 지금 확인하세요.',
    },
    intro:
      '<p>채무자의 부동산이 경매로 넘어갔습니다. 나도 채권자 중 한 명인데, 배당을 받을 수 있는지 모르겠습니다. 선순위 채권자가 많아 내 몫이 남을지 걱정입니다.</p>',
    timelineSteps: [
      '1단계: 배당요구 종기 확인',
      '2단계: 배당요구서 제출',
      '3단계: 배당표 작성과 열람',
      '4단계: 배당 실시 또는 이의신청',
    ],
    sections: [
      {
        title: '배당요구 자격과 종기',
        content:
          '<p><strong style="color:#1e3a5f">경매 대금에서 배당을 받으려면, 배당요구 종기까지 법원에 배당요구서를 제출해야 합니다</strong></p>\n<ul>\n<li><strong>배당요구 자격</strong> — 집행력 있는 정본(확정판결, 지급명령, 공정증서 등)을 가진 채권자, 경매 개시결정 등기 전에 가압류를 한 채권자, 민법·상법 등에 의해 우선변제청구권이 있는 채권자가 해당됩니다</li>\n<li><strong>배당요구 종기</strong> — 법원이 경매 개시결정과 함께 배당요구 종기를 정하여 공고합니다. 통상 경매 개시결정일로부터 3~6개월 후로 지정됩니다. 이 기한을 놓치면 배당에서 제외됩니다</li>\n<li><strong>당연 배당 채권자</strong> — 근저당권자, 전세권자, 가압류 채권자, 임금 채권자, 주택임차인 등은 별도 배당요구 없이도 배당받을 수 있습니다. 다만 확실한 배당을 위해 배당요구서를 제출하는 것이 안전합니다</li>\n<li><strong>확인 방법</strong> — 법원경매정보 사이트(www.courtauction.go.kr)에서 해당 사건번호를 검색하면 배당요구 종기를 확인할 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심: 배당요구 종기를 놓치면 배당에서 제외 — 종기 확인 후 즉시 신청</blockquote>',
      },
      {
        title: '배당 순위와 우선순위',
        content:
          '<p><strong style="color:#1e3a5f">경매 대금은 법에서 정한 순위에 따라 배당되며, 순위가 높은 채권자부터 전액을 배당받고 남은 금액이 다음 순위로 넘어갑니다</strong></p>\n<ul>\n<li><strong>1순위 — 집행비용</strong> — 경매 절차에 든 비용(감정료, 공고료 등)이 가장 먼저 공제됩니다</li>\n<li><strong>2순위 — 최우선변제 임금·퇴직금</strong> — 최종 3개월분 임금과 최종 3년분 퇴직금은 다른 모든 채권에 우선하여 배당됩니다</li>\n<li><strong>3순위 — 소액임차인 최우선변제금</strong> — 주택임대차보호법 또는 상가건물임대차보호법에 따른 소액임차인의 최우선변제금</li>\n<li><strong>4순위 — 당해세(재산세·종합부동산세 등)</strong> — 해당 부동산에 부과된 국세·지방세</li>\n<li><strong>5순위 이하</strong> — 근저당권·전세권(설정일 순서), 일반 조세, 일반 채권 순서로 배당됩니다. 같은 순위 내에서는 채권액 비율에 따라 안분 배당합니다</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">내 채권의 배당 순위가 궁금하다면</strong><br/>\n<a href="/diagnosis/real-estate-auction" style="color:#1565c0;font-weight:600">경매 배당금 수령 무료 상담받기 &rarr;</a>\n</div>',
      },
      {
        title: '배당표 열람과 이의신청',
        content:
          '<p><strong style="color:#1e3a5f">법원이 작성한 배당표에 이의가 있으면 배당기일에 직접 이의를 진술해야 합니다</strong></p>\n<ul>\n<li><strong>배당표 작성</strong> — 매각대금이 납부되면 법원은 각 채권자의 순위와 채권액에 따라 배당표를 작성합니다. 배당표는 배당기일 3일 전까지 법원에 비치됩니다</li>\n<li><strong>배당표 열람</strong> — 이해관계인(채권자, 채무자)은 배당기일 전에 법원에서 배당표를 열람할 수 있습니다. 자신의 배당액이 정확한지, 다른 채권자의 배당에 문제가 없는지 확인하세요</li>\n<li><strong>배당기일 이의</strong> — 배당표에 이의가 있으면 배당기일에 출석하여 이의를 진술해야 합니다. 배당기일에 출석하지 않거나 이의를 진술하지 않으면 배당표대로 확정됩니다</li>\n<li><strong>이의 대상</strong> — 다른 채권자의 채권액이 과다하거나 존재하지 않는 경우, 배당 순위가 잘못된 경우, 자신의 채권액이 누락된 경우 등에 이의를 제기합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">중요: 배당기일에 출석하여 이의를 진술하지 않으면 배당표가 그대로 확정됨</blockquote>',
      },
      {
        title: '배당이의소송 절차',
        content:
          '<p><strong style="color:#1e3a5f">배당기일에 이의를 진술한 후 1주일 이내에 배당이의소송을 제기해야 이의 효력이 유지됩니다</strong></p>\n<ul>\n<li><strong>소 제기 기한</strong> — 배당기일에 이의를 진술한 채권자는 배당기일부터 1주일 이내에 배당이의의 소를 제기하고, 그 증명서류를 법원에 제출해야 합니다. 기한을 놓치면 이의가 취하된 것으로 봅니다</li>\n<li><strong>소송 상대방</strong> — 배당이의의 소는 배당을 많이 받은 상대 채권자를 피고로 합니다. 여러 채권자에게 이의가 있으면 각각을 상대로 소를 제기합니다</li>\n<li><strong>공탁금 처리</strong> — 이의가 진술된 부분의 배당금은 공탁됩니다. 배당이의소송에서 승소하면 공탁금에서 배당받고, 패소하면 원래 배당표대로 상대 채권자에게 지급됩니다</li>\n<li><strong>채무자의 이의</strong> — 채무자도 배당표에 이의를 진술할 수 있습니다. 채무자가 이의를 진술하면 부당이득반환청구의 소를 제기해야 합니다</li>\n</ul>\n<p><strong>잉여금 수령:</strong> 모든 채권자에게 배당한 후 남은 잉여금은 채무자(소유자)에게 반환됩니다. 채무자는 법원에 잉여금 수령 신청서를 제출하면 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 배당기일 이의 진술 → 1주일 내 소 제기 → 공탁금 처리 → 판결에 따라 배당</blockquote>',
      },
    ],
    cases: [
      {
        title: '물상보증인 부동산 제3취득자의 변제자 대위 — 대법원 판결',
        summary:
          '대법원 2023다266420 사건에서 물상보증인으로부터 담보 부동산을 취득한 제3취득자의 변제자 대위 범위를 판단했습니다. 법원은 제3취득자가 채무를 변제한 경우 원채권자의 채권 및 담보에 관한 권리를 대위할 수 있는 범위를 판시했습니다.',
        takeaway:
          '경매 배당에서 대위변제 관계가 얽혀 있으면 배당 순위와 금액이 달라질 수 있습니다. 복잡한 권리관계가 있는 경우 배당표를 꼼꼼히 확인하고 이의 여부를 판단하세요.',
      },
    ],
    faq: [
      {
        question: '배당요구를 하지 않으면 배당을 전혀 못 받나요?',
        answer:
          '<strong>당연 배당 채권자(근저당권자, 가압류 채권자 등)는 배당요구 없이도 배당받을 수 있습니다.</strong> 다만 일반 채권자는 배당요구 종기까지 신청하지 않으면 배당에서 완전히 제외됩니다. 안전을 위해 모든 채권자는 배당요구서를 제출하세요.',
      },
      {
        question: '배당금은 언제 받을 수 있나요?',
        answer:
          '<strong>배당기일에 이의가 없으면 즉시 배당이 실시됩니다.</strong> 통상 배당기일 후 1~2주 내에 지정 계좌로 입금됩니다. 이의가 있는 부분은 공탁되어 소송 종결까지 수령이 지연됩니다.',
      },
      {
        question: '후순위 채권자도 배당을 받을 수 있나요?',
        answer:
          '<strong>매각대금이 충분하면 받을 수 있습니다.</strong> 선순위 채권자에게 전액 배당한 후 잔여금이 있으면 후순위 채권자에게도 배당됩니다. 다만 선순위 채권 합계가 매각대금을 초과하면 후순위는 배당받지 못합니다.',
      },
      {
        question: '배당이의소송 비용은 누가 부담하나요?',
        answer:
          '<strong>패소한 쪽이 부담합니다.</strong> 소송비용(인지대, 송달료, 변호사 비용 등)은 원칙적으로 패소자가 부담합니다. 다만 배당이의 금액이 크다면 소송 비용 대비 회수 이익이 충분한지 먼저 계산하세요.',
      },
      {
        question: '채무자(소유자)는 배당금을 받을 수 있나요?',
        answer:
          '<strong>모든 채권자에게 배당한 후 잉여금이 있으면 받을 수 있습니다.</strong> 채무자는 법원에 잉여금 수령 신청서를 제출하면 됩니다. 다만 채무 초과 상태에서는 잉여금이 남는 경우가 드뭅니다.',
      },
    ],
    cta: {
      text: '경매 배당금 수령 무료 상담받기',
      link: '/diagnosis/real-estate-auction',
    },
    internalLinks: [
      { label: '부동산 경매 가이드', href: '/guide/real-estate-auction' },
      { label: '경매 입찰 절차 안내', href: '/spoke/real-estate-auction/auction-bidding-procedure' },
      { label: '경매 권리분석 체크리스트', href: '/spoke/real-estate-auction/auction-rights-analysis-checklist' },
      { label: '낙찰 후 명도 절차', href: '/spoke/real-estate-auction/eviction-after-winning-bid' },
      { label: '경매 초보 흔한 실수', href: '/spoke/real-estate-auction/beginner-auction-common-mistakes' },
    ],
  },

  // ───────────────────────────────────────────
  // 20. real-estate-auction / auction-where-to-start-beginner
  // ───────────────────────────────────────────
  {
    domain: 'real-estate-auction',
    slug: 'auction-where-to-start-beginner',
    keyword: '경매 초보 첫 입찰 준비 가이드',
    questionKeyword: '경매를 처음 하는데 어디서부터 시작하나요?',
    ctaKeyword: '경매 초보 시작',
    type: '어디부터형',
    perspective: '피해자',
    meta: {
      title: '경매 초보 첫 입찰 준비 5단계 가이드 | 로앤가이드',
      description:
        '부동산 경매를 처음 시작하려는데 어디서부터 준비해야 할지 모르겠다면 5단계 가이드를 지금 확인하세요.',
    },
    intro:
      '<p>부동산 경매에 관심이 생겼습니다. 시세보다 싸게 살 수 있다고 들었는데, 법원 경매가 처음이라 절차가 어렵게 느껴집니다. 무엇부터 알아야 하는지, 첫 입찰까지 어떤 준비가 필요한지 정리가 필요합니다.</p>',
    sections: [
      {
        title: '경매 정보 수집 — 법원경매정보 사이트 활용법',
        content:
          '<p><strong style="color:#1e3a5f">경매의 첫 단계는 물건 정보를 수집하는 것입니다. 법원경매정보 사이트에서 모든 경매 물건을 무료로 검색할 수 있습니다</strong></p>\n<ul>\n<li><strong>법원경매정보(www.courtauction.go.kr)</strong> — 대한민국 모든 법원의 경매 물건이 등록되어 있습니다. 지역, 물건종류(아파트·다가구·상가·토지 등), 감정가 범위로 검색할 수 있습니다</li>\n<li><strong>매각물건명세서</strong> — 각 물건의 권리관계가 기재된 핵심 문서입니다. 선순위 전세권, 유치권 신고, 법정지상권 등 인수해야 할 권리가 여기에 나옵니다. 반드시 확인하세요</li>\n<li><strong>감정평가서</strong> — 법원이 선임한 감정인이 작성한 시세 평가입니다. 감정 시점과 현재 시세가 다를 수 있으므로, 실거래가 사이트(국토교통부 실거래가)와 비교하여 현재 시세를 파악하세요</li>\n<li><strong>현황조사보고서</strong> — 집행관이 현장을 방문하여 작성한 보고서입니다. 현재 누가 점유하고 있는지, 임대차 현황, 건물 상태 등이 기재됩니다. 점유자 정보가 입찰 판단의 핵심입니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">필수 확인 서류 3가지: 매각물건명세서 + 감정평가서 + 현황조사보고서</blockquote>',
      },
      {
        title: '물건 분석 — 권리분석 기초',
        content:
          '<p><strong style="color:#1e3a5f">경매에서 가장 중요한 것이 권리분석입니다. 낙찰받은 후 인수해야 할 권리가 무엇인지 정확히 파악해야 손해를 피할 수 있습니다</strong></p>\n<ul>\n<li><strong>등기부등본 확인</strong> — 갑구(소유권 관련)와 을구(근저당·전세권 등)를 확인합니다. 경매 개시결정보다 먼저 설정된 권리 중 인수되는 것이 있는지 확인해야 합니다</li>\n<li><strong>말소기준권리</strong> — 경매로 소멸하는 권리와 낙찰자가 인수하는 권리를 나누는 기준입니다. 최선순위 (근)저당권·가압류·경매 개시결정 중 가장 빠른 것이 말소기준권리가 됩니다. 이보다 후순위 권리는 소멸합니다</li>\n<li><strong>임차인 분석</strong> — 대항력(전입+점유) 있는 임차인이 말소기준권리보다 먼저 전입신고했다면, 낙찰자가 보증금을 인수합니다. 이 금액을 실질 취득가에 포함해야 합니다</li>\n<li><strong>특수 권리 주의</strong> — 유치권, 법정지상권, 분묘기지권, 지역권 등은 경매로 소멸하지 않습니다. 초보자는 이런 특수 권리가 없는 깨끗한 물건부터 시작하세요</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">권리분석이 어렵게 느껴진다면</strong><br/>\n<a href="/diagnosis/real-estate-auction" style="color:#1565c0;font-weight:600">경매 초보 시작 무료 상담받기 &rarr;</a>\n</div>',
      },
      {
        title: '입찰가 결정과 보증금 준비',
        content:
          '<p><strong style="color:#1e3a5f">적정 입찰가를 결정하려면 시세, 인수 부담, 수리비, 대출 가능액을 종합적으로 계산해야 합니다</strong></p>\n<ul>\n<li><strong>시세 조사</strong> — 국토교통부 실거래가, 네이버 부동산, KB 부동산 시세를 활용하여 해당 물건의 현재 시세를 파악합니다. 같은 단지·같은 평형의 최근 거래가를 기준으로 합니다</li>\n<li><strong>실질 취득가 계산</strong> — 입찰가 + 인수해야 할 보증금 + 세금(취득세 4.6%) + 명도비용 + 수리비 = 실질 취득가. 이 금액이 시세보다 낮아야 수익이 납니다</li>\n<li><strong>입찰 보증금</strong> — 최저매각가격의 10%를 입찰 보증금으로 법원에 납부해야 합니다. 현금·수표·보증보험증권으로 납부할 수 있습니다. 유찰되면 보증금은 즉시 반환됩니다</li>\n<li><strong>잔금 재원 확인</strong> — 낙찰가에서 보증금을 뺀 잔금을 어떻게 마련할지 미리 계획합니다. 대출 사전 승인을 받아두면 잔금 미납 위험을 방지할 수 있습니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">입찰가 공식: 시세 - 인수부담 - 세금 - 명도비 - 수리비 - 기대수익 = 최대 입찰가</blockquote>',
      },
      {
        title: '입찰서 작성과 법원 방문 절차',
        content:
          '<p><strong style="color:#1e3a5f">입찰은 매각기일에 법원을 직접 방문하여 입찰서를 제출하는 방식으로 진행됩니다</strong></p>\n<ul>\n<li><strong>입찰 준비물</strong> — 신분증, 도장, 입찰 보증금(자기앞수표 또는 보증보험증권), 주민등록등본(법인은 법인등기부등본). 대리인이 입찰하는 경우 위임장과 인감증명서가 추가로 필요합니다</li>\n<li><strong>입찰서 작성</strong> — 법원에 비치된 입찰서 양식에 사건번호, 물건번호, 입찰가격, 입찰자 인적사항을 기재합니다. 입찰가격은 한 번 제출하면 변경할 수 없으므로 신중하게 작성하세요</li>\n<li><strong>입찰 마감과 개찰</strong> — 매각기일 당일 법원에서 정해진 시간까지 입찰서를 제출합니다. 마감 후 개찰하여 최고가 입찰자가 최고가매수신고인이 됩니다</li>\n<li><strong>매각허가결정</strong> — 최고가매수신고 후 1주일 이내에 법원이 매각허가 여부를 결정합니다. 이해관계인의 이의가 없으면 매각이 허가되고, 1주일의 즉시항고 기간이 지나면 확정됩니다</li>\n</ul>\n<p><strong>초보자 팁:</strong> 첫 경매는 실투자 없이 법원을 방문하여 입찰 분위기를 관찰하는 것을 권합니다. 2~3회 참관 후 실제 입찰에 도전하면 실수를 줄일 수 있습니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 입찰서 제출 → 개찰(최고가 결정) → 매각허가(1주) → 확정(1주) → 잔금 납부(1개월)</blockquote>',
      },
    ],
    cases: [
      {
        title: '허위 유치권 신고와 경매방해 — 대법원 판결',
        summary:
          '대법원 2022도3103 사건에서 부동산 경매절차에서의 경매방해 행위의 범위를 판단했습니다. 법원은 경매의 공정을 해하는 행위에는 가격 결정뿐 아니라 공정한 경쟁방법 자체를 해하는 행위를 포함한다고 판시했습니다.',
        takeaway:
          '경매 초보자는 허위 유치권이나 경매방해 행위에 주의해야 합니다. 매각물건명세서와 현황조사보고서를 꼼꼼히 확인하고, 이상한 점이 있으면 전문가 상담을 받으세요.',
      },
    ],
    faq: [
      {
        question: '경매 초보자가 가장 먼저 해야 할 일은 무엇인가요?',
        answer:
          '<strong>법원경매정보 사이트(courtauction.go.kr)에서 물건 검색부터 시작하세요.</strong> 관심 지역의 아파트 경매 물건을 찾아 매각물건명세서, 감정평가서, 현황조사보고서를 읽는 연습을 합니다. 2~3주 물건을 분석하면 감이 잡힙니다.',
      },
      {
        question: '경매 투자 최소 금액은 얼마인가요?',
        answer:
          '<strong>입찰 보증금(최저매각가격의 10%)이 최소 필요 금액입니다.</strong> 예를 들어 최저매각가 1억 원 물건이면 보증금 1,000만 원으로 입찰할 수 있습니다. 낙찰 후 잔금은 대출로 충당할 수 있지만, 대출 가능 여부를 사전에 확인하세요.',
      },
      {
        question: '경매 물건은 내부를 볼 수 있나요?',
        answer:
          '<strong>점유자가 허락하지 않으면 내부 열람이 어렵습니다.</strong> 집행관의 현황조사보고서에 내부 상태가 기재되어 있으니 참고하세요. 아파트의 경우 같은 단지·같은 평형의 매매 물건을 통해 내부 구조를 간접적으로 확인할 수 있습니다.',
      },
      {
        question: '유찰된 물건은 더 싸게 나오나요?',
        answer:
          '<strong>맞습니다.</strong> 1회 유찰 시 최저매각가격이 20% 하락합니다. 2회 유찰이면 최초 감정가의 64% 수준이 됩니다. 유찰 물건은 가격 메리트가 있지만, 유찰 원인(권리 문제, 입지 등)을 반드시 분석하세요.',
      },
      {
        question: '경매로 살 때 취득세는 일반 매매와 같나요?',
        answer:
          '<strong>동일합니다.</strong> 경매 취득도 일반 매매와 같은 취득세율(주택 1~3%, 농지 3%, 그 외 4%)이 적용됩니다. 취득세 외에 농어촌특별세, 지방교육세가 추가되어 실효세율은 약 4.6% 수준입니다.',
      },
    ],
    cta: {
      text: '경매 초보 시작 무료 상담받기',
      link: '/diagnosis/real-estate-auction',
    },
    internalLinks: [
      { label: '부동산 경매 가이드', href: '/guide/real-estate-auction' },
      { label: '경매 입찰 절차 안내', href: '/spoke/real-estate-auction/auction-bidding-procedure' },
      { label: '경매 권리분석 체크리스트', href: '/spoke/real-estate-auction/auction-rights-analysis-checklist' },
      { label: '낙찰 후 명도 절차', href: '/spoke/real-estate-auction/eviction-after-winning-bid' },
      { label: '경매 초보 흔한 실수', href: '/spoke/real-estate-auction/beginner-auction-common-mistakes' },
    ],
  },

  // ───────────────────────────────────────────
  // 21. sangga / commercial-lease-priority-repayment
  // ───────────────────────────────────────────
  {
    domain: 'sangga',
    slug: 'commercial-lease-priority-repayment',
    keyword: '상가 보증금 우선변제 조건 한도',
    questionKeyword: '상가 보증금 우선변제를 받을 수 있는 조건은 무엇인가요?',
    ctaKeyword: '상가 보증금 우선변제',
    type: '수치기한형',
    perspective: '피해자',
    meta: {
      title: '상가 보증금 우선변제 조건 3가지와 한도액 | 로앤가이드',
      description:
        '상가 임대인이 보증금을 돌려주지 않아 우선변제를 받고 싶다면 조건과 한도를 지금 확인하세요.',
    },
    intro:
      '<p>상가 임대차 계약이 끝났는데 임대인이 보증금을 돌려주지 않습니다. 건물이 경매에 넘어갈 수도 있다는 소식을 들었습니다. 소액임차인 우선변제라는 것이 있다는데, 내가 해당되는지, 얼마까지 보호받는지 확인해야 합니다.</p>',
    sections: [
      {
        title: '우선변제권의 3가지 성립 요건',
        content:
          '<p><strong style="color:#1e3a5f">상가건물임대차보호법에 따른 우선변제권은 3가지 요건을 모두 갖추어야 성립합니다</strong></p>\n<ul>\n<li><strong>① 건물 인도(점유)</strong> — 상가를 실제로 인도받아 점유하고 있어야 합니다. 계약만 하고 아직 입주하지 않았다면 대항력이 인정되지 않습니다. 점유는 직접 사용뿐 아니라 직원을 통한 간접 점유도 포함됩니다</li>\n<li><strong>② 사업자등록 신청</strong> — 관할 세무서에 사업자등록을 신청해야 합니다. 사업자등록 신청일이 대항력의 기준일이 됩니다. 전입신고 대신 사업자등록이 주택임대차의 전입신고 역할을 합니다</li>\n<li><strong>③ 확정일자</strong> — 관할 세무서에서 임대차계약서에 확정일자를 받아야 합니다. 확정일자 없이는 대항력(점유를 지킬 권리)만 있고, 경매 배당에서 우선변제를 받을 수는 없습니다</li>\n</ul>\n<p>세 가지 요건을 모두 갖추면, 후순위 권리자보다 우선하여 보증금을 배당받을 수 있습니다. 다만 확정일자가 근저당권 설정일보다 늦으면 근저당권자보다 후순위가 됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">3요건: 건물 인도 + 사업자등록 신청 + 확정일자 = 우선변제권 성립</blockquote>',
      },
      {
        title: '지역별·시기별 보증금 한도액',
        content:
          '<p><strong style="color:#1e3a5f">소액임차인 최우선변제는 보증금이 일정 금액 이하인 임차인에게만 적용되며, 지역과 시기에 따라 기준이 다릅니다</strong></p>\n<ul>\n<li><strong>서울특별시</strong> — 보증금 6,500만 원 이하인 임차인이 소액임차인에 해당하며, 최우선변제 한도는 2,200만 원입니다(2024년 기준)</li>\n<li><strong>과밀억제권역(수도권 일부)</strong> — 보증금 5,500만 원 이하, 최우선변제 한도 1,900만 원</li>\n<li><strong>광역시·세종·용인·화성·김포</strong> — 보증금 3,800만 원 이하, 최우선변제 한도 1,300만 원</li>\n<li><strong>그 밖의 지역</strong> — 보증금 3,000만 원 이하, 최우선변제 한도 1,000만 원</li>\n</ul>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">내 보증금이 우선변제 대상인지 확인하고 싶다면</strong><br/>\n<a href="/diagnosis/sangga" style="color:#1565c0;font-weight:600">상가 보증금 우선변제 무료 상담받기 &rarr;</a>\n</div>\n<p><strong>주의:</strong> 위 기준은 임대차계약서상 보증금 총액 기준입니다. 월세를 보증금으로 환산(월세 × 100)한 금액을 합산하여 판단합니다. 예를 들어 보증금 3,000만 원 + 월세 30만 원이면 환산보증금은 6,000만 원입니다.</p>',
      },
      {
        title: '확정일자와 대항력 차이',
        content:
          '<p><strong style="color:#1e3a5f">대항력과 우선변제권은 비슷해 보이지만 효력이 다릅니다. 두 가지를 정확히 구분해야 자신의 권리를 지킬 수 있습니다</strong></p>\n<ul>\n<li><strong>대항력(인도 + 사업자등록)</strong> — 건물이 팔리더라도 새 소유자에게 "나는 임차인이니 나가지 않겠다"고 주장할 수 있는 권리입니다. 경매에서 매수인이 임대차를 인수하게 됩니다. 다만 배당을 받는 것과는 별개입니다</li>\n<li><strong>우선변제권(인도 + 사업자등록 + 확정일자)</strong> — 경매 배당에서 후순위 권리자보다 먼저 보증금을 돌려받을 수 있는 권리입니다. 배당을 받으면 임대차는 종료되므로 건물을 비워야 합니다</li>\n<li><strong>선택의 문제</strong> — 대항력으로 계속 영업할 것인지, 우선변제권을 행사하여 보증금을 회수할 것인지 선택해야 합니다. 보통 보증금 회수가 더 유리한 경우가 많습니다</li>\n<li><strong>확정일자 받는 방법</strong> — 관할 세무서에 임대차계약서 원본을 가져가면 즉시 확정일자 도장을 받을 수 있습니다. 수수료는 600원이며, 계약 직후 바로 받아두는 것이 안전합니다</li>\n</ul>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">핵심 구분: 대항력 = 거주 유지 / 우선변제권 = 배당에서 보증금 회수</blockquote>',
      },
      {
        title: '경매 배당에서 우선변제 받는 절차',
        content:
          '<p><strong style="color:#1e3a5f">건물이 경매로 넘어가면 배당요구 종기까지 배당을 신청해야 보증금을 돌려받을 수 있습니다</strong></p>\n<ul>\n<li><strong>배당요구 종기 확인</strong> — 법원경매정보 사이트에서 해당 건물의 경매 사건을 검색하여 배당요구 종기를 확인합니다. 이 기한을 놓치면 배당에서 제외될 수 있습니다</li>\n<li><strong>배당요구서 제출</strong> — 임대차계약서 사본, 확정일자 증명, 사업자등록증 사본을 첨부하여 배당요구서를 법원에 제출합니다. 종기 전에 반드시 도달해야 합니다</li>\n<li><strong>배당기일 출석</strong> — 법원에서 배당표를 작성하면 배당기일에 출석하여 배당액을 확인합니다. 이의가 있으면 배당기일에 이의를 진술해야 합니다</li>\n<li><strong>소액임차인 최우선변제</strong> — 소액임차인에 해당하면 확정일자가 없어도 최우선변제를 받을 수 있습니다. 다만 건물 가액의 1/2 범위 내에서만 최우선변제가 이루어지므로, 소액임차인이 여러 명이면 안분됩니다</li>\n</ul>\n<p><strong>주의:</strong> 우선변제권을 행사하여 배당을 받으면 임대차관계가 종료됩니다. 배당금 수령 후에는 건물을 인도해야 하므로, 이전 장소를 미리 확보해두세요.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">절차: 배당요구 종기 확인 → 배당요구서 제출 → 배당기일 출석 → 배당금 수령</blockquote>',
      },
    ],
    cases: [
      {
        title: '상가 임대차 묵시적 갱신과 보증금 보호 — 대법원 판결',
        summary:
          '대법원 2023다307024 사건에서 상가건물 임대차계약의 묵시적 갱신 관련 법리를 판단했습니다. 법원은 묵시적으로 갱신된 임대차에서도 임차인의 대항력과 우선변제권이 유지되는지에 대해 판시했습니다.',
        takeaway:
          '상가 임대차가 묵시적으로 갱신되더라도 대항력과 우선변제권은 유지됩니다. 갱신 후에도 사업자등록을 유지하고 점유를 계속해야 보호받을 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '확정일자 없이도 우선변제를 받을 수 있나요?',
        answer:
          '<strong>소액임차인이라면 확정일자 없이도 최우선변제를 받을 수 있습니다.</strong> 건물 인도와 사업자등록만 갖추면 소액임차인 요건을 충족합니다. 다만 보증금이 소액 기준을 초과하면 확정일자가 반드시 필요합니다.',
      },
      {
        question: '사업자등록을 폐업하면 대항력을 잃나요?',
        answer:
          '<strong>잃을 수 있습니다.</strong> 사업자등록은 주택임대차의 전입신고에 해당하므로, 폐업 처리하면 대항력이 소멸합니다. 임대차 기간 중에는 사업자등록을 유지해야 합니다. 업종 변경은 가능합니다.',
      },
      {
        question: '환산보증금이 기준 초과이면 보호를 못 받나요?',
        answer:
          '<strong>소액임차인 최우선변제는 받을 수 없지만, 확정일자가 있으면 일반 우선변제는 가능합니다.</strong> 다만 상가건물임대차보호법 적용 범위 자체가 환산보증금 기준(서울 9억 원 등)을 초과하면 축소되므로 주의하세요.',
      },
      {
        question: '임대인이 바뀌어도 보증금을 돌려받을 수 있나요?',
        answer:
          '<strong>대항력이 있으면 새 임대인(소유자)이 보증금 반환 의무를 승계합니다.</strong> 건물이 매매되거나 경매로 소유자가 바뀌어도, 대항력 있는 임차인의 보증금 반환 청구권은 새 소유자에게 행사할 수 있습니다.',
      },
      {
        question: '보증금 우선변제와 권리금 보호는 다른 건가요?',
        answer:
          '<strong>완전히 다른 제도입니다.</strong> 우선변제권은 경매 배당에서 보증금을 돌려받는 권리이고, 권리금 보호는 임대인이 정당한 사유 없이 갱신을 거절하여 권리금 회수를 방해한 경우의 손해배상 제도입니다.',
      },
    ],
    cta: {
      text: '상가 보증금 우선변제 무료 상담받기',
      link: '/diagnosis/sangga',
    },
    internalLinks: [
      { label: '상가임대차 가이드', href: '/guide/sangga' },
      { label: '상가 보증금 반환 절차', href: '/spoke/sangga/commercial-deposit-return-process' },
      { label: '상가 권리금 분쟁 대응', href: '/spoke/sangga/commercial-lease-key-money' },
      { label: '상가 임대차 갱신 거절 대응', href: '/spoke/sangga/commercial-lease-renewal-rejection' },
      { label: '상가 임대차 해지 절차', href: '/spoke/sangga/commercial-lease-termination-procedure' },
    ],
  },
];
