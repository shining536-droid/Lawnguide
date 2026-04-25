import { SpokePage } from '../spoke-pages';

// batch43 divorce 4개
//
// 1. divorce/inheritance-property-division-scope — 이혼 재산분할에서 일방이 상속받은 재산이 분할 대상에 포함되는지 판단을 돕는 페이지다.
// 2. divorce/foreign-spouse-procedure-jurisdiction — 외국인 배우자와의 이혼 시 관할법원·준거법·절차를 단계별로 정리해 돕는 페이지다.
// 3. divorce/pet-custody-dispute-ruling — 이혼 시 반려동물 양육권 다툼에서 실무상 고려 요소·증거를 정리해 돕는 페이지다.
// 4. divorce/mental-abuse-evidence-collection — 정서적 학대를 이혼 사유로 주장하려는 피해자가 증거 수집 방법을 준비하도록 돕는 페이지다.

export const spokesBatch43Divorce: SpokePage[] = [
  // ─── 1. divorce / inheritance-property-division-scope ───
  {
    domain: 'divorce',
    slug: 'divorce-inheritance-property-division-scope',
    keyword: '상속 재산 재산분할 대상',
    questionKeyword: '이혼할 때 상속받은 재산도 재산분할 대상이 되나요?',
    ctaKeyword: '상속 재산 분할 대상 여부 점검',
    type: '비교형',
    perspective: 'neutral',
    meta: {
      title: '상속 재산 재산분할 대상 여부 4기준 | 로앤가이드',
      description:
        '이혼 시 일방이 부모에게 상속받은 재산이 재산분할 대상에 포함되는지, 특유재산과 기여도 판단 기준을 지금 확인하세요.',
    },
    intro:
      '<p>"10년 전 시어머니가 남편에게 남긴 아파트, 이혼하면 반을 받을 수 있을까?" 고민하는 분이 많습니다. 상속 재산은 원칙적으로 특유재산이라 분할 대상이 아니지만, 배우자가 관리·유지에 기여했다면 분할 대상에 포함될 수 있습니다. 민법 제839조의2 기여도 평가가 핵심이고, 최근에는 상속인 승계까지 인정되는 판례도 나왔습니다.</p>',
    sections: [
      {
        title: '상속 재산이 분할 대상인지 — 4가지 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">상속·증여 재산은 원칙 특유재산이지만 3가지 예외 조건이 있습니다.</strong></p>\n<ul>\n<li><strong>원칙</strong> — 민법 제830조 부부별산제에 따라 상속 재산은 명의자 개인 재산.</li>\n<li><strong>예외 1 — 유지·관리 기여</strong> — 배우자가 세금 납부·리모델링·임대 관리에 기여했다면 20~40% 분할 가능.</li>\n<li><strong>예외 2 — 혼인 중 증식</strong> — 상속 당시 1억이던 부동산이 혼인 중 3억으로 오른 경우 증식분 2억은 분할 대상.</li>\n<li><strong>예외 3 — 혼인기간 장기</strong> — 혼인 15년 이상이면 "특유재산 유지에도 배우자 내조 기여" 추정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상속 재산 자체가 아니라 "혼인 중 배우자 기여도"가 분할을 결정합니다.</blockquote>',
      },
      {
        title: '기여도 입증 — 상속 재산 분할 증거 5가지',
        content:
          '<p><strong style="color:#1e3a5f">"관리·유지·증식에 기여했다"는 점을 숫자로 입증해야 20% 이상 받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>재산세·종부세 납부 내역</strong> — 배우자 계좌에서 납부한 영수증 10년치 확보.</li>\n<li><strong>수선비·리모델링 계약서</strong> — 2,000만 원 이상 지출 시 증빙 필수.</li>\n<li><strong>임대 관리 증거</strong> — 임대차 계약서에 배우자가 관리자로 기재된 경우.</li>\n<li><strong>공동 사용 내역</strong> — 거주·사업장 사용 기간과 감가상각 고려.</li>\n<li><strong>혼인 기간 증빙</strong> — 혼인 20년 이상이면 기여도 30~40% 주장 유리.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">이혼 전문 변호사 상담 전, AI가 상속 재산별 기여도와 분할 대상 여부를 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '분할 비율 — 상속 재산 일반 인정치',
        content:
          '<p><strong style="color:#1e3a5f">순수 상속 재산은 10~30%, 증식분은 40~50%까지 인정되는 것이 실무입니다.</strong></p>\n<ul>\n<li><strong>혼인 5년 미만</strong> — 상속 재산 기여도 10% 이하, 증식분만 부분 인정.</li>\n<li><strong>혼인 10~20년</strong> — 기여도 20~30%, 유지 관리 증빙 필수.</li>\n<li><strong>혼인 20년 이상</strong> — 기여도 30~40%, "내조의 대가" 포괄 인정.</li>\n<li><strong>사업 자산 상속</strong> — 배우자가 사업 도운 경우 40~50% 가능.</li>\n<li><strong>주거용 부동산</strong> — 공동 거주·관리 시 30% 이상 인정 경향.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 기여도 비율은 혼인 기간·관리 강도·증식 여부 3요소의 조합으로 결정됩니다.</blockquote>',
      },
      {
        title: '상속 예정 재산 — 이혼 후 상속받은 경우',
        content:
          '<p><strong style="color:#1e3a5f">이혼 소송 중 또는 이혼 후 상속이 발생해도 원칙적으로 분할 대상이 아닙니다.</strong></p>\n<ul>\n<li><strong>이혼 소송 변론종결 후 상속</strong> — 이미 부부 재산 범위 밖, 분할 대상 제외.</li>\n<li><strong>상속 기대권</strong> — 피상속인 생존 중에는 아무런 권리 없음.</li>\n<li><strong>혼인 중 상속받은 재산 처분</strong> — 처분 대금이 부부 공동생활에 사용됐다면 분할 대상 포함 가능.</li>\n<li><strong>이혼 후 상속인 대상 청구</strong> — 전 배우자 사망 시 상속인에게 재산분할 청구 가능(2024스876 판례).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 재산분할 청구권은 이혼 후 2년 이내 행사하지 않으면 소멸됩니다(민법 제839조의2 제3항).</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 전 배우자 사망 시 상속인 대상 재산분할 청구 가능',
        summary:
          '대법원 2024스876 사건(대법원, 2026.01.15 선고)에서 법원은 이혼한 당사자 일방이 사망한 경우 그 재산분할의무가 상속인들에게 승계된다고 판시했습니다. 이혼 후에도 재산분할 청구권은 이혼 후 2년 이내 행사하면 전 배우자 상속인을 상대로도 유효하게 주장할 수 있다는 점을 확인한 사례입니다.',
        takeaway:
          '이혼 후 전 배우자가 사망해도 2년 이내라면 상속인을 상대로 재산분할 청구가 가능합니다.',
      },
    ],
    faq: [
      {
        question: '시부모님께 상속받은 아파트, 제가 10년간 관리했는데 분할 받을 수 있나요?',
        answer:
          '<strong>세금·수선비 지출 증거가 있다면 20~30% 기여도로 분할 주장 가능합니다.</strong> 관리 통장·영수증을 먼저 모으세요.',
      },
      {
        question: '상속 예정인 재산(부모님 생존 중)도 분할 대상인가요?',
        answer:
          '<strong>아닙니다.</strong> 피상속인 생존 중에는 상속 기대권만 있을 뿐, 재산권이 없으므로 분할 대상이 아닙니다.',
      },
      {
        question: '배우자가 상속받은 돈을 공동 생활비로 썼다면요?',
        answer:
          '<strong>사용 내역이 부부 공동생활에 쓰였다면 일부 분할 대상 포함 가능합니다.</strong> 카드 사용 내역·계좌 이체 증빙 확보.',
      },
      {
        question: '기여도를 증명하려면 무엇이 가장 중요한가요?',
        answer:
          '<strong>혼인 기간 + 관리 증거 + 증식 기여 3가지입니다.</strong> 특히 세금 납부·리모델링 영수증이 핵심.',
      },
      {
        question: '이혼 후 몇 년까지 재산분할 청구할 수 있나요?',
        answer:
          '<strong>이혼한 날로부터 2년 이내 행사해야 합니다.</strong> 민법 제839조의2 제3항, 2년 경과 시 소멸.',
      },
    ],
    cta: {
      text: '협의이혼 준비서류, AI로 정리하기',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '재산분할 기여도 산정 기준표', href: '/guide/divorce/divorce-property-division-contribution' },
      { label: '협의이혼 준비서류 체크리스트', href: '/guide/divorce/divorce-consensual-documents' },
      { label: '재산분할 청구권 소멸시효 2년', href: '/guide/divorce/divorce-property-claim-limitation' },
      { label: '이혼 후 추가 재산분할 청구', href: '/guide/divorce/divorce-omitted-asset-additional-claim' },
      { label: '특유재산과 공동재산 구분', href: '/guide/divorce/divorce-separate-property-distinction' },
    ],
  },

  // ─── 2. divorce / foreign-spouse-procedure-jurisdiction ───
  {
    domain: 'divorce',
    slug: 'divorce-foreign-spouse-procedure-jurisdiction',
    keyword: '외국인 배우자 이혼 관할법원',
    questionKeyword: '외국인 배우자와 이혼하려면 어느 나라 법원에서 소송해야 하나요?',
    ctaKeyword: '외국인 배우자 이혼 절차 점검',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '외국인 배우자 이혼 관할·절차 5단계 | 로앤가이드',
      description:
        '외국인 배우자와의 이혼 시 대한민국 법원 관할 인정 요건, 준거법, 송달 절차까지 단계별로 지금 확인하세요.',
    },
    intro:
      '<p>"베트남인 남편과 혼인했는데 2년 전부터 연락 두절, 한국에서 이혼할 수 있을까?" 국제 결혼이 1년 1만 건을 넘는 지금, 외국인 배우자 이혼은 관할부터 막히는 경우가 많습니다. 국제사법 제2조에 따라 한국에 실질적 관련만 있으면 한국 법원 관할이 인정되고, 준거법은 공통 국적·상거소 기준으로 정해집니다.</p>',
    sections: [
      {
        title: '한국 법원 관할 인정 — 4가지 실질적 관련 기준',
        content:
          '<p><strong style="color:#1e3a5f">한국 법원에서 이혼 소송하려면 "실질적 관련성"을 1가지 이상 입증해야 합니다.</strong></p>\n<ul>\n<li><strong>원고의 상거소가 한국</strong> — 한국에 1년 이상 거주 + 생활 기반 있으면 인정.</li>\n<li><strong>피고가 한국에 거주</strong> — 외국인이어도 한국 체류 중이면 관할 성립.</li>\n<li><strong>혼인신고가 한국에서 이뤄진 경우</strong> — 대한민국 가족관계등록부 기재 사실.</li>\n<li><strong>부부 공동 재산이 한국 소재</strong> — 부동산·예금 등 한국 내 재산이 쟁점일 때.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 피고가 외국 거주여도 원고 상거소가 한국이면 한국 법원이 1심 관할을 가집니다.</blockquote>',
      },
      {
        title: '준거법 결정 — 어느 나라 법 적용할지',
        content:
          '<p><strong style="color:#1e3a5f">국제사법 제39조에 따라 3단계로 준거법이 결정됩니다.</strong></p>\n<ul>\n<li><strong>1단계 — 공통 본국법</strong> — 부부가 같은 국적이면 그 나라 법.</li>\n<li><strong>2단계 — 공통 상거소법</strong> — 국적이 다르면 같이 살던 나라 법.</li>\n<li><strong>3단계 — 가장 밀접한 장소법</strong> — 1·2단계 불명확하면 혼인 생활 중심지 법.</li>\n<li><strong>특례 — 일방이 한국인</strong> — 부부 중 한 명이 한국인이고 한국 상거소면 한국 민법 적용(국제사법 제39조 단서).</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">국제이혼 변호사 상담 전, AI가 관할·준거법·송달 절차를 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '해외 송달 — 외국 배우자에게 소장 전달하는 법',
        content:
          '<p><strong style="color:#1e3a5f">외국 거주 피고에게 소장 송달은 3가지 경로가 있습니다.</strong></p>\n<ul>\n<li><strong>헤이그 송달협약 경로</strong> — 협약 가입국이면 중앙당국 경유, 평균 3~6개월.</li>\n<li><strong>영사 송달</strong> — 재외공관 통한 송달, 비가입국·긴급 시 사용.</li>\n<li><strong>공시송달</strong> — 위치 불명·연락 두절이면 2개월 공시 후 송달 효력.</li>\n<li><strong>번역본 첨부</strong> — 소장·준비서면은 피고 본국어 번역 필수.</li>\n<li><strong>비용</strong> — 헤이그 송달 50~100만 원, 공시송달 5만 원.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 피고 위치를 모르면 바로 공시송달 신청, 전체 기간 8~12개월 단축.</blockquote>',
      },
      {
        title: '이혼 판결 후 — 본국 승인·등록 절차',
        content:
          '<p><strong style="color:#1e3a5f">한국 이혼 판결을 외국에서도 효력 있게 하려면 본국 법원 승인 절차가 필요합니다.</strong></p>\n<ul>\n<li><strong>판결 번역·공증</strong> — 확정 판결문 + 아포스티유 또는 영사 인증.</li>\n<li><strong>본국 가정법원 등록</strong> — 피고 본국에서 이혼 등록·호적 정리.</li>\n<li><strong>한국 가족관계등록 정리</strong> — 이혼 확정 1개월 내 구청 신고.</li>\n<li><strong>체류자격 변경</strong> — 외국인 배우자는 F-6 비자 취소·출국 절차 진행.</li>\n<li><strong>위자료·재산분할 집행</strong> — 본국 재산에 대해선 본국 법원 집행 판결 별도 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 일부 국가(중국·베트남 등)는 한국 이혼 판결 승인 요건이 까다로우니 사전 확인 필수.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 가사사건에도 국제사법 제2조 적용 및 응소 사정 고려',
        summary:
          '대법원 2019므15425 사건(대법원, 2021.10.28 선고)에서 법원은 국제사법 제2조가 가사사건에도 적용되며, "실질적 관련"을 판단할 때 피고가 소장 부본을 적법하게 송달받고 적극적으로 응소한 사정도 대한민국 법원에 관할권을 인정하는 데 긍정적으로 고려할 수 있다고 판시했습니다.',
        takeaway:
          '피고가 외국인이어도 한국 법원에 출석·응소하면 관할이 더 쉽게 인정될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '외국인 남편이 본국에 있는데 한국에서 이혼할 수 있나요?',
        answer:
          '<strong>원고(한국인 아내)의 상거소가 한국이면 가능합니다.</strong> 국제사법 제2조 실질적 관련 인정.',
      },
      {
        question: '준거법이 외국법이면 한국 법원이 외국법대로 판결하나요?',
        answer:
          '<strong>네, 한국 법원이 외국법을 직접 적용해 판결합니다.</strong> 외국법 감정·전문가 증언 필요 시 4~6개월 추가.',
      },
      {
        question: '피고 외국인 배우자 연락이 안 되면 어떻게 소송하나요?',
        answer:
          '<strong>공시송달로 진행합니다.</strong> 법원 게시판 2개월 공고 후 송달 효력 발생, 결석 판결 가능.',
      },
      {
        question: '국제이혼 소송 비용은 얼마나 드나요?',
        answer:
          '<strong>변호사비 300~500만 원 + 송달·번역 100~200만 원 정도입니다.</strong> 총 6~12개월 소요.',
      },
      {
        question: '한국에서 이혼 판결 받으면 본국에서도 자동으로 효력 있나요?',
        answer:
          '<strong>아닙니다.</strong> 본국 법원 승인 절차(번역·공증·등록)를 별도로 밟아야 합니다.',
      },
    ],
    cta: {
      text: '협의이혼 준비서류, AI로 정리하기',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '협의이혼 절차와 서류 총정리', href: '/guide/divorce/divorce-consensual-procedure' },
      { label: '재판상 이혼 6가지 사유', href: '/guide/divorce/divorce-judicial-grounds-6items' },
      { label: '해외 송달 공시송달 절차', href: '/guide/divorce/divorce-public-service-procedure' },
      { label: '외국인 배우자 체류자격 변경', href: '/guide/divorce/divorce-foreign-spouse-visa' },
      { label: '이혼 후 가족관계등록 정리', href: '/guide/divorce/divorce-family-registry-update' },
    ],
  },

  // ─── 3. divorce / pet-custody-dispute-ruling ───
  {
    domain: 'divorce',
    slug: 'divorce-pet-custody-dispute-ruling',
    keyword: '반려동물 양육권 다툼',
    questionKeyword: '이혼할 때 키우던 강아지는 누가 데려가나요?',
    ctaKeyword: '반려동물 양육권 판단 점검',
    type: '비교형',
    perspective: 'neutral',
    meta: {
      title: '이혼 반려동물 양육권 판단 4기준 | 로앤가이드',
      description:
        '이혼할 때 반려동물은 누가 데려가는지, 법원의 판단 기준과 양육자 지정 요소 4가지를 지금 확인하세요.',
    },
    intro:
      '<p>"5년간 같이 키운 반려견, 이혼하면 누가 데려갈까?" 반려동물 가족이 1,500만 명을 넘는 지금, 이혼 시 반려동물을 둘러싼 분쟁이 늘고 있습니다. 현행 민법상 반려동물은 여전히 "물건"으로 분류되어 재산분할 대상이지만, 최근 하급심에서는 사실상 자녀 양육권과 유사하게 "주된 보호자" 기준으로 결정하는 경향이 강해지고 있습니다.</p>',
    sections: [
      {
        title: '반려동물 양육자 결정 — 4가지 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">법원은 "누가 주된 보호자였는가"를 4가지 기준으로 판단합니다.</strong></p>\n<ul>\n<li><strong>주된 돌봄 이력</strong> — 사료·산책·병원 진료를 주로 담당한 배우자 우선.</li>\n<li><strong>경제적 부담</strong> — 월 15~30만 원 사료·의료비를 실제 지출한 사람.</li>\n<li><strong>거주 환경</strong> — 반려동물에게 적합한 공간·시간 여유가 있는 쪽.</li>\n<li><strong>정서적 유대</strong> — 반려동물이 특히 따르는 사람, 동물행동분석가 소견도 참고.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "경제적 소유자"보다 "실제 돌봄자"가 우선시되는 것이 2020년 이후 하급심 경향입니다.</blockquote>',
      },
      {
        title: '증거 준비 — 주된 보호자 입증 5가지',
        content:
          '<p><strong style="color:#1e3a5f">양육권을 인정받으려면 돌봄 기록을 6개월치 이상 제출해야 유리합니다.</strong></p>\n<ul>\n<li><strong>동물병원 진료 영수증</strong> — 본인 명의 카드 결제 내역 6개월치.</li>\n<li><strong>사료·용품 구매 영수증</strong> — 온라인 구매 기록 + 결제 계정 스크린샷.</li>\n<li><strong>산책 기록</strong> — 펫 앱·스마트워치 산책 로그, 일 1회 이상.</li>\n<li><strong>반려동물과 본인 사진</strong> — SNS 게시물 1년치 이상, 날짜 메타데이터 확인.</li>\n<li><strong>동물등록증·예방접종</strong> — 등록 명의자가 본인인지 확인, 아니면 변경.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">이혼 변호사 상담 전, AI가 반려동물 양육권 쟁점과 증거 준비를 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '공동 양육·면접교섭 — 사실상 가능한지',
        content:
          '<p><strong style="color:#1e3a5f">자녀 양육과 유사한 방식의 공동 양육·면접은 법적으로 보장되지 않지만 합의로 가능합니다.</strong></p>\n<ul>\n<li><strong>협의서 작성</strong> — "주 양육자 A, 면접 B가 월 2회" 형태로 협의이혼 부속서 작성.</li>\n<li><strong>비용 분담</strong> — 사료·의료비 월 20만 원 반반 부담도 가능.</li>\n<li><strong>정기 면접</strong> — 반려동물 스트레스 고려해 주 1회·월 2회 권장.</li>\n<li><strong>합의 위반 시</strong> — 법적 이행명령 대상 아님, 민사상 손해배상만 가능.</li>\n<li><strong>위자료 반영</strong> — 부당하게 반려동물 빼앗은 경우 정신적 손해로 50~200만 원 인정 사례.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 협의이혼 시 반려동물 조항을 별도로 명시하면 분쟁 예방에 효과적입니다.</blockquote>',
      },
      {
        title: '다툼 심한 경우 — 소송 쟁점과 비용',
        content:
          '<p><strong style="color:#1e3a5f">합의 불가 시 재산분할 절차에서 다투게 되며, 심리 3~6개월 소요됩니다.</strong></p>\n<ul>\n<li><strong>재산분할 청구에 포함</strong> — 별도 청구권 없고 재산분할 항목으로 주장.</li>\n<li><strong>금전 대체</strong> — 한쪽이 양육, 다른 쪽에 시가·정서적 가치 포함 50~300만 원 지급.</li>\n<li><strong>감정가</strong> — 품종·나이·의료비 총지출 기준 산정.</li>\n<li><strong>변호사 비용</strong> — 반려동물 쟁점만 추가 시 50~100만 원 별도.</li>\n<li><strong>소송 기간</strong> — 본이혼과 함께 진행, 전체 6~12개월.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 반려동물을 "물건"으로 다투면 감정 악화 빠르므로 조정·협의가 우선.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 부당한 대우와 혼인 파탄 판단에서 보호 대상 확대',
        summary:
          '대법원 2020므14763 사건(대법원, 2021.03.25 선고)에서 법원은 민법 제840조 제3호 "심히 부당한 대우"와 제6호 "혼인을 계속하기 어려운 중대한 사유" 판단 시 혼인계속의사·파탄 원인·당사자 책임·자녀 유무 등 제반 사정을 종합 고려하라고 판시했습니다. 반려동물을 포함한 가족 구성에서의 돌봄 기여도 역시 파탄 책임·위자료 산정에 참작할 수 있음을 시사합니다.',
        takeaway:
          '반려동물 돌봄 이력은 혼인 기여도 평가와 파탄 책임 판단에 영향을 줄 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '반려동물은 법적으로 누가 소유자인가요?',
        answer:
          '<strong>동물등록증 명의자가 1차적 소유자이지만, 실제 돌봄자 판단이 더 중요합니다.</strong> 등록 명의 ≠ 양육자.',
      },
      {
        question: '반려동물 데려가는 대가로 돈 요구 받으면요?',
        answer:
          '<strong>재산분할 항목으로 협의 가능합니다.</strong> 시가 + 의료비 총액 50~300만 원 선에서 조율.',
      },
      {
        question: '합의이혼 시 반려동물 조항 어떻게 쓰나요?',
        answer:
          '<strong>"반려견 OO(견종·이름)은 A가 양육, B는 월 1회 면접" 형태로 협의서에 명시합니다.</strong>',
      },
      {
        question: '상대가 반려동물을 몰래 데려갔으면 어떻게 하나요?',
        answer:
          '<strong>유치물 반환 청구 + 위자료 청구 병행 가능합니다.</strong> 주된 보호자 입증 증거 준비.',
      },
      {
        question: '공동 양육도 법적으로 강제 가능한가요?',
        answer:
          '<strong>아닙니다.</strong> 현행법상 반려동물 면접교섭은 법적 이행명령 대상이 아니므로 합의 준수에 의존.',
      },
    ],
    cta: {
      text: '협의이혼 준비서류, AI로 정리하기',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '재산분할 대상 포함 재산 총정리', href: '/guide/divorce/divorce-property-division-scope' },
      { label: '협의이혼 합의서 필수 조항', href: '/guide/divorce/divorce-consensual-agreement-clauses' },
      { label: '자녀 양육권과 면접교섭', href: '/guide/divorce/divorce-child-custody-visitation' },
      { label: '이혼 위자료 산정 기준', href: '/guide/divorce/divorce-alimony-calculation' },
      { label: '이혼 조정·소송 절차 비교', href: '/guide/divorce/divorce-mediation-vs-litigation' },
    ],
  },

  // ─── 4. divorce / mental-abuse-evidence-collection ───
  {
    domain: 'divorce',
    slug: 'divorce-mental-abuse-evidence-collection',
    keyword: '정서적 학대 이혼 증거',
    questionKeyword: '정서적 학대로 이혼하려면 어떤 증거를 모아야 하나요?',
    ctaKeyword: '정서적 학대 이혼 증거 점검',
    type: '템플릿형',
    perspective: 'victim',
    meta: {
      title: '정서적 학대 이혼 증거 5종 수집법 | 로앤가이드',
      description:
        '폭언·통제·가스라이팅 등 정서적 학대를 이혼 사유로 주장하려는 피해자가 가능한 한 모아야 할 증거 5가지를 지금 확인하세요.',
    },
    intro:
      '<p>"때린 적은 없지만 매일 폭언과 통제로 숨이 막힌다" — 정서적 학대는 멍이 남지 않아 증거가 어렵습니다. 하지만 민법 제840조 제3호 "심히 부당한 대우"와 제6호 "혼인을 계속하기 어려운 중대한 사유"로 인정받으려면 일관된 증거가 6개월치는 필요합니다. 녹음·메시지·일기·의료기록 등 5종 증거를 체계적으로 모아야 소송에서 이길 수 있습니다.</p>',
    sections: [
      {
        title: '정서적 학대 증거 5종 — 무엇을 모아야 하나',
        content:
          '<p><strong style="color:#1e3a5f">폭언·통제·모욕을 "반복적·지속적"으로 입증할 5가지 증거가 핵심입니다.</strong></p>\n<ul>\n<li><strong>녹음 파일</strong> — 폭언·협박 10회 이상, 날짜·상황 메모 병행.</li>\n<li><strong>문자·카톡</strong> — 모욕·통제 발언 캡처, 최소 6개월치 시간 순서대로.</li>\n<li><strong>일기·다이어리</strong> — 피해 당일 기록, 구체적 상황·감정 서술.</li>\n<li><strong>의료기록</strong> — 정신과 진료·우울증·불면증 진단서.</li>\n<li><strong>증인 확보</strong> — 친구·가족·이웃 목격 진술서, 3명 이상 권장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 1회성 사건이 아닌 "반복적·지속적 패턴"을 보여주는 것이 법원 인정 조건입니다.</blockquote>',
      },
      {
        title: '녹음·메시지 — 증거능력 살리는 법',
        content:
          '<p><strong style="color:#1e3a5f">녹음은 본인이 대화 당사자면 합법이고, 기록 방법이 증거능력을 좌우합니다.</strong></p>\n<ul>\n<li><strong>통신비밀보호법 제14조</strong> — 대화 당사자 본인이면 상대 동의 없이 녹음 가능, 제3자 몰래 녹음은 불가.</li>\n<li><strong>녹취록 작성</strong> — 음성을 글로 옮긴 문서, 법원 제출용 50~100페이지 분량 유효.</li>\n<li><strong>카톡 백업</strong> — 대화 내보내기 → 텍스트 파일 + 스크린샷 병행 저장.</li>\n<li><strong>원본 보존</strong> — 휴대폰 초기화 전 클라우드·외장하드 2곳 이상 백업.</li>\n<li><strong>편집 금지</strong> — 일부만 잘라내면 증거능력 약화, 전체 파일 그대로 제출.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">이혼 변호사 상담 전, AI가 정서적 학대 증거 확보 순서와 법적 쟁점을 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '의료기록 — 정신적 피해 객관화',
        content:
          '<p><strong style="color:#1e3a5f">정신과 진료 기록은 정서적 학대의 객관적 결과를 입증하는 가장 강력한 증거입니다.</strong></p>\n<ul>\n<li><strong>정신과 내원 시작</strong> — 학대 인식 후 2주 이내 방문, 초진 기록 남기기.</li>\n<li><strong>진단서 발급</strong> — 우울증·불안장애·외상후스트레스(PTSD) 진단명 명시.</li>\n<li><strong>상담 기록</strong> — 주 1회 이상 상담, 배우자 언급 내용 기록에 반영.</li>\n<li><strong>약물 처방전</strong> — 항우울제·수면제 처방 사실 증빙.</li>\n<li><strong>기간</strong> — 최소 3~6개월 지속 기록이 "만성적 피해" 입증에 유리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정신과 진료비는 실손보험 청구 시 기록 남으므로 증거로 활용 가능합니다.</blockquote>',
      },
      {
        title: '가정폭력 신고 — 접근금지·임시보호',
        content:
          '<p><strong style="color:#1e3a5f">신체적 위협이 병행되면 가정폭력범죄처벌특례법으로 즉시 보호 조치 가능합니다.</strong></p>\n<ul>\n<li><strong>112 신고</strong> — 폭언·위협 순간 즉시 신고, 출동 기록이 증거.</li>\n<li><strong>임시조치</strong> — 법원이 100m 접근금지·퇴거 명령, 2개월 단위 연장.</li>\n<li><strong>피해자 보호명령</strong> — 6개월~1년 장기 접근금지, 위반 시 형사 처벌.</li>\n<li><strong>1366 상담</strong> — 여성긴급전화, 쉼터 연결·법률 상담.</li>\n<li><strong>처벌불원 신중</strong> — 합의하면 접근금지 해제, 재발 위험 고려.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 신고 기록 자체가 이혼 소송에서 유력한 증거가 되므로 합의하지 않는 것이 유리합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 반복적 학대·감금 행위를 이혼 사유로 인정',
        summary:
          '의정부지방법원 2020드단79374 사건(의정부지방법원, 2023.05.11 선고)에서 법원은 배우자를 강제로 차량에 감금하고 스테인리스 봉·서류펀치기·냄비 뚜껑 등으로 반복 폭행한 행위를 혼인을 계속하기 어려운 중대한 사유로 인정하고 유책 배우자에게 위자료 지급을 명했습니다. 이혼 청구가 인용된 사례입니다.',
        takeaway:
          '형사 판결이 확정된 폭행·감금 사실은 이혼 소송에서 가장 확실한 증거가 됩니다.',
      },
    ],
    faq: [
      {
        question: '녹음 증거, 배우자가 모르게 했는데 법정에서 쓸 수 있나요?',
        answer:
          '<strong>본인이 대화 당사자면 가능합니다.</strong> 통신비밀보호법 제14조, 본인 참여 대화 녹음은 합법.',
      },
      {
        question: '정서적 학대만으로도 재판상 이혼 사유가 되나요?',
        answer:
          '<strong>네, 반복적·지속적 패턴 입증되면 민법 제840조 제3호·6호로 인정됩니다.</strong> 6개월 이상 증거 필수.',
      },
      {
        question: '정신과 기록, 회사나 보험에 알려지지 않나요?',
        answer:
          '<strong>비급여 진료로 받으면 보험사·회사에 공개되지 않습니다.</strong> 개인정보보호법으로 보호.',
      },
      {
        question: '친정 부모님 진술서도 증거로 인정되나요?',
        answer:
          '<strong>인정되지만 친족이라 증명력은 약합니다.</strong> 친구·이웃·직장동료 진술 병행 권장.',
      },
      {
        question: '이혼 전 따로 나와서 사는 것이 증거 수집에 유리한가요?',
        answer:
          '<strong>안전 확보와 증거 수집 시간 확보에 유리합니다.</strong> 단, 가출로 오해되지 않게 별거 합의서 작성 권장.',
      },
    ],
    cta: {
      text: '협의이혼 준비서류, AI로 정리하기',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '재판상 이혼 6가지 사유 총정리', href: '/guide/divorce/divorce-judicial-grounds-6items' },
      { label: '가정폭력 접근금지 신청 절차', href: '/guide/divorce/divorce-protection-order-procedure' },
      { label: '이혼 위자료 증거 수집법', href: '/guide/divorce/divorce-alimony-evidence-collection' },
      { label: '외도 위자료 증거 5가지', href: '/guide/divorce/divorce-affair-alimony-evidence-5items' },
      { label: '별거 후 이혼 절차 준비', href: '/guide/divorce/divorce-separation-before-procedure' },
    ],
  },
];
