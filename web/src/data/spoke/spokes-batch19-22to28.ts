import { SpokePage } from '../spoke-pages';

// 고유 존재 이유:
// 1. 이 페이지는 [양육비를 받지 못하는 양육친]의 [상대방이 양육비를 지급하지 않아 강제집행을 고려하는 상황]에서 [강제집행 절차와 재산조회 방법 확인]을 돕는 페이지다.
// 2. 이 페이지는 [층간소음 피해를 겪는 아파트 거주자]의 [신고부터 조정까지 절차를 모르는 상황]에서 [단계별 신고·조정 절차 안내]를 돕는 페이지다.
// 3. 이 페이지는 [윗집 소음이 극심한 거주자]의 [참을 수 없는 수준의 소음에 대처 방법을 모르는 상황]에서 [법적 대응과 손해배상 청구 준비]를 돕는 페이지다.
// 4. 이 페이지는 [층간소음 피해를 처음 겪는 거주자]의 [어디부터 시작해야 할지 모르는 상황]에서 [첫 번째 조치와 증거 확보 방법 확인]을 돕는 페이지다.
// 5. 이 페이지는 [부동산 경매 입찰을 준비하는 입찰자]의 [입찰 절차와 준비사항을 모르는 상황]에서 [물건 조사부터 낙찰까지 단계별 절차 확인]을 돕는 페이지다.
// 6. 이 페이지는 [경매 낙찰을 받은 매수인]의 [점유자가 퇴거하지 않아 명도 소송이 필요한 상황]에서 [명도 소송 절차와 강제집행 방법 확인]을 돕는 페이지다.
// 7. 이 페이지는 [매매계약이 해제된 매수인]의 [계약금 반환을 청구하려는 상황]에서 [반환 청구 절차와 내용증명 작성법 확인]을 돕는 페이지다.

export const spokesBatch19_22to28: SpokePage[] = [
  {
    domain: 'neighbor-dispute',
    slug: 'floor-noise-victim-where-to-start',
    keyword: '층간소음 피해 어디부터 시작해야 하나',
    questionKeyword: '층간소음 피해를 입고 있는데 어디서부터 뭘 해야 하나요?',
    ctaKeyword: '층간소음 피해 대응',
    type: '어디부터형',
    meta: {
      title: '층간소음 피해 대응 3단계 — 어디부터 시작할까 | 로앤가이드',
      description: '층간소음 피해가 심한데 뭘 해야 할지 모르겠다면, 증거 수집부터 법적 대응까지 3단계를 확인하세요. 지금 확인하세요.',
    },
    intro: '어젯밤에도 윗집에서 쿵쿵대는 소리에 새벽까지 잠을 설쳤습니다. 이러다 제가 먼저 쓰러질 것 같은데, 뭘 해야 할지 막막합니다. 참을 만큼 참았는데 이제는 제대로 대응하고 싶습니다. 처음이라 어디서부터 시작해야 할지 모르겠다면, 아래 3단계를 따라해보세요.',
    timelineSteps: [
      '1단계: 증거부터 모으세요 — 소음 녹음, 데시벨 측정, 피해 일지 작성',
      '2단계: 공식 채널로 민원을 넣으세요 — 관리사무소 서면 민원, 이웃사이센터 측정',
      '3단계: 법적 절차를 선택하세요 — 환경분쟁조정, 민사소송, 형사 고소',
    ],
    sections: [
      {
        title: '어디부터? 가장 먼저 소음 증거를 확보하세요',
        content:
          '<p><strong style="color:#1e3a5f">공동주택 층간소음의 범위와 기준에 관한 규칙 제3조에 따라 직접충격 소음 기준은 주간(06~22시) 1분 등가소음도 43dB, 야간(22~06시) 38dB입니다</strong></p>\n<p>법적 대응의 시작은 <strong>증거 확보</strong>입니다. 스마트폰 앱으로 데시벨을 측정하고, 소음 발생 시 <strong>동영상을 촬영</strong>하세요. 날짜, 시간, 소음 종류, 데시벨 수치를 기록한 피해 일지도 작성합니다.</p>\n<p>특히 <strong>야간(22시~06시)</strong> 소음은 법적으로 더 엄격한 기준이 적용됩니다. 불면증이나 두통 등 건강 피해가 있다면 병원 진료를 받아 진단서를 확보하세요. 초기에 증거를 잘 모아두면 이후 절차가 훨씬 수월해집니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">첫 번째 할 일: 소음 녹음 + 데시벨 측정 + 날짜·시간 기록 + 건강 피해 진단서</blockquote>',
      },
      {
        title: '다음으로, 공식 기관에 민원을 접수하세요',
        content:
          '<p><strong style="color:#1e3a5f">공동주택관리법 제20조 제2항에 따라 관리주체는 층간소음 피해를 끼치는 입주자에게 중단 권고를 할 수 있습니다</strong></p>\n<p>관리사무소에 <strong>서면으로 정식 민원</strong>을 접수하세요. 구두 민원은 증거가 남지 않습니다. 관리사무소가 상대방에게 중단 권고를 했다는 기록이 이후 조정·소송에서 중요합니다.</p>\n<p>동시에 <strong>층간소음 이웃사이센터(1661-2642)</strong>에 전화하세요. 무료 상담과 현장 소음측정을 제공하며, 전문 장비로 측정한 결과는 법적 증거로 활용됩니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">두 번째 할 일: 관리사무소 서면 민원 → 이웃사이센터(1661-2642) 측정 신청</blockquote>\n<div style="margin-top:16px;padding:14px 18px;background:linear-gradient(135deg,#fff8e1,#fff3cd);border-left:4px solid #f9a825;border-radius:8px">\n<strong style="color:#e65100">지금 바로 확인하세요</strong><br/>\n<a href="/diagnosis/neighbor-dispute" style="color:#1565c0;font-weight:600">내 층간소음 상황에 맞는 대응 전략 확인하기 &rarr;</a>\n</div>',
      },
      {
        title: '마지막으로, 상황에 맞는 법적 절차를 선택하세요',
        content:
          '<p><strong style="color:#1e3a5f">환경분쟁조정은 수수료 1만원, 처리 기간 3~6개월로 소송보다 빠르고 저렴한 해결 방법입니다</strong></p>\n<p>증거가 모이면 3가지 법적 절차 중 선택합니다.</p>\n<ul>\n<li><strong>환경분쟁조정</strong>: 수수료 1만원, 3~6개월, 조정 성립 시 강제집행 가능</li>\n<li><strong>민사소송</strong>: 위자료 + 실손해(이사비, 치료비) 청구, 6개월~1년</li>\n<li><strong>형사 고소</strong>: 의도적·반복적 소음 시 스토킹처벌법 위반(2년 이하 징역)</li>\n</ul>\n<p>대부분의 경우 환경분쟁조정을 먼저 시도하고, 불성립 시 민사소송으로 넘어가는 것이 효율적입니다.</p>\n<blockquote style="margin-top:8px;padding:8px 12px;background:#f7f7f7;border-radius:6px;font-size:0.9em;color:#555">세 번째 할 일: 환경분쟁조정 먼저 → 불성립 시 민사소송 → 악질적 소음 시 형사 고소</blockquote>',
      },
    ],
    cases: [
      {
        title: '도로소음의 참을 한도 판단 기준과 인용의무 관련 판례',
        summary:
          '대법원 2011다91784 사건(2015.09.24 선고)에서 법원은 소음의 참을 한도를 넘는지는 피해의 성질과 정도, 가해행위의 공공성, 방지조치 가능성, 지역성, 토지이용의 선후관계 등 모든 사정을 종합적으로 고려하여 판단해야 한다고 판시했습니다.',
        takeaway:
          '참을 한도 판단은 데시벨 수치만이 아니라 종합적인 사정이 고려됩니다. 소음 빈도, 시간대, 방지 노력 여부 등을 증거로 남겨두면 피해 입증에 유리합니다.',
      },
    ],
    faq: [
      {
        question: '소음 앱으로 측정한 데시벨도 증거로 인정되나요?',
        answer: '스마트폰 앱 측정값은 <strong>보조 증거</strong>로 활용됩니다. 공식 증거력이 필요하면 이웃사이센터의 전문 장비 측정을 받으세요. 앱 측정값과 동영상을 함께 제출하면 증거력이 높아집니다.',
      },
      {
        question: '관리사무소가 아무 조치를 안 하면 어떻게 하나요?',
        answer: '관리사무소의 <strong>부작위를 기록</strong>해두세요. 서면 민원에 대한 미응답 내역이 이후 조정·소송에서 관리주체의 책임을 물을 수 있는 근거가 됩니다.',
      },
      {
        question: '층간소음 문제로 상대방에게 내용증명을 보내도 되나요?',
        answer: '<strong>내용증명 발송은 가능</strong>합니다. 소음 중단을 정식으로 요청한 기록이 되어 법적 절차에서 유리합니다. 다만 감정적 표현은 삼가고, 구체적 소음 시간과 피해 내용을 적으세요.',
      },
      {
        question: '층간소음 피해로 이사 갈 때 보상받을 수 있나요?',
        answer: '소음이 참을 한도를 넘어 <strong>이사가 불가피</strong>했음을 입증하면 이사비를 손해배상으로 청구할 수 있습니다. 이사 계약서와 비용 영수증을 보관하세요.',
      },
      {
        question: '변호사 없이 환경분쟁조정을 신청해도 되나요?',
        answer: '환경분쟁조정은 <strong>변호사 없이도 직접 신청</strong>할 수 있습니다. 온라인으로 접수하고, 증거 서류(소음 녹음, 피해 일지, 측정 결과)만 잘 준비하면 됩니다.',
      },
    ],
    cta: {
      text: '💬 지금 내 층간소음 피해 첫 대응 방법 확인하기',
      link: '/diagnosis/neighbor-dispute',
    },
    internalLinks: [
      { label: '이웃 분쟁 가이드', href: '/guide/neighbor-dispute' },
      { label: '층간소음 신고~조정 절차', href: '/guide/neighbor-dispute/floor-noise-report-to-mediation-procedure' },
      { label: '윗집 소음 참을 수 없을 때 대처법', href: '/guide/neighbor-dispute/unbearable-upstairs-noise-response' },
      { label: '층간소음 데시벨 기준', href: '/guide/neighbor-dispute/floor-noise-decibel-standard' },
      { label: '층간소음 손해배상 핵심 판례', href: '/guide/neighbor-dispute/floor-noise-damage-amount-key-cases' },
    ],
  },
];
