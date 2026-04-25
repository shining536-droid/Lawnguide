import { SpokePage } from '../spoke-pages';

// batch41 nonlabor1 13개: divorce 3 + child-support 2 + traffic 5 + dui 1 + jeonse 2

export const spokesBatch41Nonlabor1: SpokePage[] = [
  // ─── 1. divorce / divorce-overseas-spouse-process ───
  {
    domain: 'divorce',
    slug: 'divorce-overseas-spouse-process',
    keyword: '해외거주 배우자 이혼',
    questionKeyword: '배우자가 해외에 있을 때 이혼 소송은 어떻게 진행하나요?',
    ctaKeyword: '해외거주 배우자 이혼 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외거주 배우자 이혼 소송 — 송달·관할 5단계 절차 | 로앤가이드',
      description:
        '배우자가 해외에 있어 연락조차 어렵다면 이혼 소송을 어떻게 진행할지 막막합니다. 송달·관할·위자료까지 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>남편이 해외 근무를 떠난 뒤 연락이 끊기거나, 외국 국적 배우자가 본국으로 돌아가 버린 경우 이혼을 원해도 어디서부터 시작해야 할지 막막합니다. 국내 가정법원 관할이 인정되는지, 송달은 어떻게 하는지, 재산분할·위자료를 어디서 받을지 기준이 달라집니다. 해외거주 배우자 이혼의 5단계 절차를 정리합니다.</p>',
    sections: [
      {
        title: '관할 판단 — 국내 가정법원에 제기할 수 있는가',
        content:
          '<p><strong style="color:#1e3a5f">원고(청구인)의 주소지가 국내에 있고 혼인생활의 주된 근거지가 한국이었다면 국내 가정법원에 이혼 소송을 제기할 수 있습니다.</strong></p>\n<ul>\n<li><strong>원고 국내 주소지</strong> — 가사소송법 제22조·국제사법에 따라 원고 주소지 관할 인정.</li>\n<li><strong>혼인 등록 국가</strong> — 국내 혼인신고가 되어 있다면 한국 관할이 명확.</li>\n<li><strong>자녀 양육 장소</strong> — 미성년 자녀가 한국에 거주 중이면 양육·친권 사건은 국내 법원.</li>\n<li><strong>상대방 반대 관할 항변</strong> — 피고가 외국 거주만을 이유로 관할 이탈을 주장해도 국내 연고가 인정되면 기각됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 해외거주 자체가 관할 배제 사유가 아닙니다. 원고 주소·혼인신고·자녀 양육 중 하나라도 국내면 가정법원 진행 가능.</blockquote>',
      },
      {
        title: '송달 절차 — 외국송달 방식과 기간',
        content:
          '<p><strong style="color:#1e3a5f">피고가 해외에 있으면 국제민사사법공조 조약에 따른 외국송달 또는 공시송달을 활용합니다.</strong></p>\n<ul>\n<li><strong>헤이그송달협약 가입국</strong> — 외국 중앙당국 경유 송달(평균 3~6개월 소요).</li>\n<li><strong>비가입국</strong> — 외교경로 송달(6~12개월 소요). 대사관 협조 필요.</li>\n<li><strong>주소 불명</strong> — 공시송달 신청. 법원 게시판·관보 공시 2개월 후 효력.</li>\n<li><strong>번역본 제출</strong> — 소장·이혼청구서를 피고 거주국 공용어로 번역해 첨부해야 합니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 해외거주 배우자 이혼 절차·송달 방식을 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '재산분할·위자료 — 해외 자산 추적과 집행',
        content:
          '<p><strong style="color:#1e3a5f">국내 판결로 해외 자산에 바로 집행하기는 어렵지만, 국내 자산에 대한 처분금지·가압류는 즉시 가능합니다.</strong></p>\n<ul>\n<li><strong>국내 자산 보전처분</strong> — 부동산·예금·주식에 가압류로 처분 차단.</li>\n<li><strong>해외 자산 신청</strong> — 해당 국가 법원에서 외국판결 승인·집행 절차 별도 필요.</li>\n<li><strong>송금·계좌 추적</strong> — 국내 송금 내역·해외 계좌 거래 내역은 사실조회 신청으로 확보.</li>\n<li><strong>위자료 산정</strong> — 부정행위·폭력 등 유책사유는 해외에서 발생해도 증거로 제출 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상대 배우자가 해외로 재산을 빼돌리기 전에 국내 자산 가압류부터 검토하세요.</blockquote>',
      },
      {
        title: '자녀 양육·친권 — 국제 아동탈취 주의',
        content:
          '<p><strong style="color:#1e3a5f">배우자가 자녀를 허락 없이 해외로 데려갔다면 국제 아동탈취로 분류됩니다. 헤이그아동탈취협약 반환 절차를 활용하세요.</strong></p>\n<ul>\n<li><strong>헤이그아동탈취협약</strong> — 가입국(미국·영국·일본 등) 간 자녀 반환 청구 가능.</li>\n<li><strong>반환 신청 기관</strong> — 법무부 중앙당국(아동권리보장원 협력).</li>\n<li><strong>1년 이내 신청</strong> — 탈취일로부터 1년 이내 반환 절차 유리.</li>\n<li><strong>친권·양육자 지정</strong> — 국내 법원에서 동시에 지정 결정 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 해외 이주 허락 없이 데려간 경우 출국금지·귀국명령을 즉시 신청하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 해외 거주·유책행위 위자료 산정 범위',
        summary:
          '대법원 2024므11526 사건(대법원, 2024.10.25 선고)에서 법원은 유책배우자에 대한 위자료 산정 시 혼인 파탄 이후 최종 이혼에 이르기까지 발생한 모든 사정(해외 체류 중 행위 포함)을 고려해야 한다고 판시했습니다.',
        takeaway:
          '배우자가 해외에 거주하는 동안 발생한 부정행위·연락두절·부양의무 위반도 위자료 산정에 전부 반영됩니다.',
      },
    ],
    faq: [
      {
        question: '배우자가 한국 국적이 아니어도 국내에서 이혼 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 원고가 한국 국적·주소를 가지고 있고 한국에서 혼인신고가 되어 있다면 국내 가정법원이 관할을 인정합니다.',
      },
      {
        question: '피고에게 송달이 계속 실패하면 어떻게 하나요?',
        answer:
          '<strong>공시송달을 신청하세요.</strong> 피고 주소를 알 수 없다는 소명자료(최후 주소·연락 시도 기록)를 제출하면 법원이 공시송달을 결정합니다.',
      },
      {
        question: '해외 재산을 숨긴 배우자의 자산은 어떻게 찾나요?',
        answer:
          '<strong>국내 송금내역·보험·신용 정보 조회로 흔적을 확보합니다.</strong> 해외 직접 추적은 현지 변호사 협조가 필요하지만, 국내 측 증거만으로도 재산분할 비율 조정이 가능합니다.',
      },
      {
        question: '자녀가 외국에 있는데 양육권을 받을 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 자녀가 외국에 있더라도 국내 법원에서 양육자·친권자 지정 가능하며, 헤이그아동탈취협약 가입국이면 반환 청구도 병행합니다.',
      },
      {
        question: '외국에서 먼저 이혼 판결을 받았는데 국내에서 효력이 있나요?',
        answer:
          '<strong>외국판결 승인 요건(관할·공서양속 등)을 충족해야 합니다.</strong> 국내 법원의 별도 승인 절차(민사소송법 제217조)를 거쳐야 효력이 인정될 수 있습니다.',
      },
    ],
    cta: {
      text: '협의이혼 준비서류, AI로 정리하기',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '국제결혼 이혼 절차', href: '/guide/divorce/divorce-international-marriage-procedure' },
      { label: '해외 자산 재산분할', href: '/guide/divorce/divorce-overseas-asset-division' },
      { label: '국제 아동탈취 대응', href: '/guide/divorce/divorce-international-child-custody-abduction' },
      { label: '외국 국적 배우자 비자 문제', href: '/guide/divorce/divorce-foreign-spouse-visa-issue' },
      { label: '재산분할 종합 가이드', href: '/guide/divorce/divorce-property-division-comprehensive' },
    ],
  },

  // ─── 2. divorce / divorce-crypto-asset-division ───
  {
    domain: 'divorce',
    slug: 'divorce-crypto-asset-division',
    keyword: '가상자산 재산분할',
    questionKeyword: '배우자가 가상자산을 숨겼는데 재산분할이 가능한가요?',
    ctaKeyword: '가상자산 재산분할 대응 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '가상자산 재산분할 — 추적·평가 4가지 쟁점 | 로앤가이드',
      description:
        '배우자가 코인·토큰을 보유하고 있다면 재산분할에서 어떻게 추적하고 가액을 평가할지 막막합니다. 4가지 쟁점을 지금 확인하세요.',
    },
    intro:
      '<p>배우자가 이혼을 앞두고 암호화폐 거래소 계정을 폐쇄하거나 개인 지갑으로 코인을 옮기는 경우가 늘고 있습니다. 부동산·예금과 달리 가상자산은 가액 변동이 크고 이전 흔적을 감추기 쉬워 재산분할 분쟁이 복잡해집니다. 가상자산 재산분할의 4대 쟁점을 정리합니다.</p>',
    sections: [
      {
        title: '분할 대상성 — 가상자산은 재산분할 대상인가',
        content:
          '<p><strong style="color:#1e3a5f">가상자산(암호화폐·NFT·토큰)은 경제적 가치가 있는 재산으로서 재산분할 대상에 포함됩니다.</strong></p>\n<ul>\n<li><strong>특유재산 vs 공동재산</strong> — 혼인 중 취득한 가상자산은 원칙적으로 공동재산.</li>\n<li><strong>혼인 전 보유분</strong> — 혼인 전 매수 코인 중 혼인 중 가치 상승분은 분할 대상.</li>\n<li><strong>상속·증여 코인</strong> — 배우자 일방의 특유재산이나 혼인 기간 중 증식분은 참작.</li>\n<li><strong>NFT·디지털자산</strong> — 시장 거래가가 있다면 재산분할 가액 평가 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "가상자산은 재산이 아니다"는 주장은 통하지 않습니다. 법원은 경제적 가치를 기준으로 판단합니다.</blockquote>',
      },
      {
        title: '자산 추적 — 거래소·개인지갑 확인',
        content:
          '<p><strong style="color:#1e3a5f">국내 거래소 계정은 사실조회로 확인 가능하지만, 개인 지갑·해외 거래소는 입증 난이도가 높아집니다.</strong></p>\n<ul>\n<li><strong>국내 거래소 사실조회</strong> — 업비트·빗썸·코인원 등에 계정 보유·잔고·거래내역 조회.</li>\n<li><strong>은행 송금 추적</strong> — 거래소 입출금 내역은 은행 계좌 사실조회로 역추적.</li>\n<li><strong>개인 지갑(MetaMask 등)</strong> — 지갑 주소 파악 시 블록체인 익스플로러로 잔고·이력 확인.</li>\n<li><strong>해외 거래소</strong> — 바이낸스 등은 직접 확인 어려우나 국내 송금 기록으로 추정 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 가상자산 추적 방법·증거 확보 순서를 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '가액 평가 — 기준 시점과 환산 방법',
        content:
          '<p><strong style="color:#1e3a5f">가상자산 가액은 변론종결일 또는 사실심 심리 종결 시점의 시가를 기준으로 평가하는 것이 원칙입니다.</strong></p>\n<ul>\n<li><strong>시가 기준시점</strong> — 사실심 변론종결일의 주요 거래소 종가로 환산.</li>\n<li><strong>원화 환산</strong> — USDT·스테이블코인도 당일 환율 적용해 원화로 환산.</li>\n<li><strong>가격 급등락 시</strong> — 법원이 변동성을 고려해 평균가 또는 중간값 채택 가능.</li>\n<li><strong>스테이킹·이자</strong> — 예치·스테이킹 중 받은 이자·보상도 분할 대상에 포함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가상자산은 가치 변동이 크므로 감정일·변론종결일 각각 가액을 제출해 법원이 공평한 기준을 선택하도록 합니다.</blockquote>',
      },
      {
        title: '은닉·처분 — 의도적 이전 시 불이익',
        content:
          '<p><strong style="color:#1e3a5f">배우자가 이혼 소송 전후 가상자산을 의도적으로 이전·처분하면 법원은 해당 가액을 그대로 보유한 것으로 보아 분할합니다.</strong></p>\n<ul>\n<li><strong>처분금지 가처분</strong> — 소송 초기 거래소 계정 처분 금지 신청 가능.</li>\n<li><strong>은닉 추정</strong> — 이혼 직전 대량 이체 이력은 재산분할 비율 상향 요인.</li>\n<li><strong>사해행위 취소</strong> — 제3자에게 무상 이전 시 민법 제406조 사해행위 취소소송.</li>\n<li><strong>형사 고소</strong> — 공동재산을 배우자 몰래 처분·은닉하면 횡령·절도 혐의 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 상대 배우자가 "다 잃었다"고 주장해도 증빙 없이는 인정되지 않습니다. 거래 내역 기록이 핵심 증거입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 시가감정 결과의 재산분할 반영',
        summary:
          '대법원 2024므10370 사건(대법원, 2024.05.30 선고)에서 법원은 재산분할 시 시가감정 결과를 합리적으로 반영해 금액을 산정해야 하며, 시점별 가액 변동이 큰 경우 법원이 공평에 부합하는 기준을 선택할 수 있다고 판시했습니다.',
        takeaway:
          '가상자산처럼 시세 변동이 큰 재산도 감정·평가 결과를 바탕으로 분할 금액이 산정되며, 법원의 재량이 인정될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '배우자가 코인을 다 팔아버렸다고 주장하면 어떻게 하나요?',
        answer:
          '<strong>거래소 거래내역·은행 출금 이력으로 실제 처분 여부를 검증합니다.</strong> 증빙 없이 "손실로 소진"이라고 주장하면 재산분할에서 그대로 보유한 것으로 인정될 수 있습니다.',
      },
      {
        question: '개인 지갑에 보낸 코인도 추적 가능한가요?',
        answer:
          '<strong>지갑 주소를 파악하면 가능합니다.</strong> 블록체인 익스플로러에서 거래 이력을 조회할 수 있고, 변호사가 체인 분석 전문가 협업을 의뢰하는 경우도 있습니다.',
      },
      {
        question: '해외 거래소 자산은 포기해야 하나요?',
        answer:
          '<strong>포기할 필요 없습니다.</strong> 국내 송금 기록·거래소 로그인 이력·메일 기록 등 간접 증거로 추정 가액을 산정해 분할 청구 가능합니다.',
      },
      {
        question: '배우자 명의 코인만 있고 제 명의는 없으면 저도 분할받나요?',
        answer:
          '<strong>받을 수 있습니다.</strong> 명의 불문 혼인 중 공동 노력으로 형성된 재산은 분할 대상이며, 기여도에 따라 50% 전후 수준까지 분할됩니다.',
      },
      {
        question: '가상자산 재산분할 소송에 시간이 얼마나 걸리나요?',
        answer:
          '<strong>일반 이혼 소송보다 길어지기 쉽습니다.</strong> 거래소 사실조회·감정 절차로 평균 12~18개월 이상 소요될 수 있으므로 초기 증거 확보가 중요합니다.',
      },
    ],
    cta: {
      text: '협의이혼 준비서류, AI로 정리하기',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '재산분할 종합 가이드', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '숨긴 재산 추적', href: '/guide/divorce/divorce-hidden-asset-discovery' },
      { label: '사업자 배우자 숨긴 자산', href: '/guide/divorce/divorce-business-owner-hidden-assets-trace' },
      { label: '숨긴 소득·자산 조사', href: '/guide/divorce/divorce-hidden-income-asset-investigation' },
      { label: '재산 처분 사해행위 방어', href: '/guide/divorce/divorce-property-concealment-defense' },
    ],
  },

  // ─── 3. divorce / divorce-cohabitation-property-dissolution ───
  {
    domain: 'divorce',
    slug: 'divorce-cohabitation-property-dissolution',
    keyword: '사실혼 해소 재산분할',
    questionKeyword: '사실혼이 끝났는데 재산을 나눌 수 있나요?',
    ctaKeyword: '사실혼 재산분할 가능성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '사실혼 해소 재산분할 — 인정 요건 4가지 기준 | 로앤가이드',
      description:
        '혼인신고 없이 살던 관계가 깨졌을 때 재산분할이 가능할까요? 사실혼 인정 요건·분할 기준시점·위자료 4가지를 지금 확인하세요.',
    },
    intro:
      '<p>혼인신고 없이 10년을 함께 산 커플이 헤어질 때, 한쪽 명의로 된 집과 차량·예금은 어떻게 나눌지 다툼이 생깁니다. 법률혼이 아니어도 사실혼이 인정되면 재산분할·위자료 청구가 가능합니다. 사실혼 해소 재산분할의 4대 쟁점을 정리합니다.</p>',
    sections: [
      {
        title: '사실혼 성립 — 인정되는 4가지 요건',
        content:
          '<p><strong style="color:#1e3a5f">사실혼은 혼인의사·부부공동생활·혼인장애 없음이 모두 인정되어야 성립할 수 있습니다.</strong></p>\n<ul>\n<li><strong>혼인의 의사</strong> — 단순 동거가 아닌 결혼 의사 일치. 결혼식·혼약·가족 소개 등 정황.</li>\n<li><strong>부부공동생활 실체</strong> — 같은 주소·생활비 공동 부담·재산 혼합·친지 인정.</li>\n<li><strong>혼인 장애 사유 없음</strong> — 중혼·근친혼·미성년 등 법적 장애 없어야 함.</li>\n<li><strong>객관적 외관</strong> — 이웃·친지·직장 등 주변 사람이 부부로 인식하는 수준.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순 동거·연인 관계는 사실혼이 아닙니다. "혼인 의사 + 부부공동생활" 두 요건이 핵심입니다.</blockquote>',
      },
      {
        title: '분할 대상 재산 — 기준시점은 사실혼 해소일',
        content:
          '<p><strong style="color:#1e3a5f">사실혼 해소에 따른 재산분할은 해소일 기준으로 공동 형성 재산의 범위·가액을 확정합니다.</strong></p>\n<ul>\n<li><strong>공동 형성 재산</strong> — 동거 기간 중 쌍방 노력으로 형성한 부동산·예금·자동차.</li>\n<li><strong>명의 불문</strong> — 한쪽 명의라도 기여가 있으면 분할 대상.</li>\n<li><strong>특유재산 제외</strong> — 사실혼 시작 전 보유분·상속분은 원칙 제외(증식 기여 있으면 일부 포함).</li>\n<li><strong>해소일 가액</strong> — 사실혼 해소일의 시가로 산정. 이후 변동은 원칙적 미반영.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 사실혼 입증 요건·분할 대상 재산을 분석해드립니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '위자료 청구 — 유책 사실혼 파기',
        content:
          '<p><strong style="color:#1e3a5f">상대방의 일방적 파기·부정행위·폭행 등 유책 사유가 있으면 위자료를 별도로 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>일방적 파기</strong> — 정당한 이유 없이 동거 거부·축출 시 파기 책임.</li>\n<li><strong>부정행위</strong> — 제3자와의 교제·부정은 민법상 불법행위로 위자료 발생.</li>\n<li><strong>폭행·학대</strong> — 형사 고소 병행 가능. 의료기록·신고 이력이 증거.</li>\n<li><strong>위자료 수준</strong> — 1,000만원~5,000만원이 일반적. 기간·유책 정도 따라 조정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사실혼은 법률혼과 달리 "정당한 사유 없는 파기"만으로도 위자료가 인정될 수 있습니다.</blockquote>',
      },
      {
        title: '입증 자료 — 사실혼을 증명하는 핵심 증거',
        content:
          '<p><strong style="color:#1e3a5f">혼인신고가 없는 만큼 사실혼 성립 증거를 충실히 준비해야 재산분할·위자료 모두 인정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>결혼식·혼약 증거</strong> — 청첩장·사진·하객 명단·웨딩홀 계약서.</li>\n<li><strong>공동 생활 기록</strong> — 주민등록등본(같은 주소), 건강보험 피부양자 등록.</li>\n<li><strong>재산 공동 형성</strong> — 공동 계좌·공동 명의 계약·공동 대출 서류.</li>\n<li><strong>주변 진술</strong> — 가족·친지·이웃·직장 동료의 인우보증서·진술서.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: SNS·카카오톡 사진, 생활비 송금 내역도 사실혼 입증에 핵심입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실혼 해소 재산분할 기준시점',
        summary:
          '대법원 2022므11027 사건(대법원, 2024.01.04 선고)에서 법원은 사실혼 해소에 따른 재산분할 대상과 액수는 사실혼이 해소된 날을 기준으로 산정해야 하며, 해소 후 변동이 있어도 원칙적으로 반영하지 않는다고 판시했습니다.',
        takeaway:
          '사실혼 재산분할은 "해소일"의 가액으로 고정되므로, 해소일 시점의 시세·잔고 자료를 가능한 한 확보해야 합니다.',
      },
    ],
    faq: [
      {
        question: '동거 몇 년부터 사실혼으로 인정되나요?',
        answer:
          '<strong>기간 기준은 절대적이지 않습니다.</strong> 1~2년이라도 결혼식·부부 생활 실체가 있으면 인정되고, 10년 동거라도 단순 룸메이트 수준이면 인정되지 않습니다.',
      },
      {
        question: '혼인신고 안 했는데 상속도 받을 수 있나요?',
        answer:
          '<strong>상속권은 없습니다.</strong> 사실혼은 재산분할·위자료만 인정되고 법정상속권은 법률혼에만 부여됩니다. 유언·증여로 보완하세요.',
      },
      {
        question: '상대가 사실혼을 부인하면 어떻게 하나요?',
        answer:
          '<strong>결혼식·공동 주소·친지 진술 등 객관적 증거로 입증합니다.</strong> 사실혼 확인 소송을 먼저 제기해 법원 판단을 받은 뒤 재산분할로 진행하는 방식도 가능합니다.',
      },
      {
        question: '퇴직금·연금도 사실혼 재산분할 대상인가요?',
        answer:
          '<strong>포함됩니다.</strong> 혼인 기간(사실혼 포함) 중 형성된 퇴직금·국민연금 분할청구권은 재산분할 대상으로 인정될 수 있습니다.',
      },
      {
        question: '사실혼 재산분할 청구 기한이 있나요?',
        answer:
          '<strong>사실혼 해소일로부터 2년 이내에 청구해야 합니다(민법 제839조의2 준용).</strong> 기한을 넘기면 청구권이 소멸하므로 조기 대응이 필요합니다.',
      },
    ],
    cta: {
      text: '협의이혼 준비서류, AI로 정리하기',
      link: '/chat?domain=divorce',
    },
    internalLinks: [
      { label: '사실혼 동거 재산분할', href: '/guide/divorce/divorce-cohabitation-property-division' },
      { label: '재산분할 종합 가이드', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '재산분할 범위 FAQ', href: '/guide/divorce/divorce-property-division-scope-faq' },
      { label: '위자료 계산 기준', href: '/guide/divorce/divorce-alimony-calculation-standard' },
      { label: '숨긴 재산 추적', href: '/guide/divorce/divorce-hidden-asset-discovery' },
    ],
  },

  // ─── 4. child-support / child-support-contempt-detention-procedure ───
  {
    domain: 'child-support',
    slug: 'child-support-contempt-detention-procedure',
    keyword: '양육비 감치 신청',
    questionKeyword: '양육비 계속 안 주는 상대방을 감치(구금) 신청할 수 있나요?',
    ctaKeyword: '양육비 감치 절차 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양육비 감치 신청 — 구금까지 5단계 절차 총정리 | 로앤가이드',
      description:
        '이행명령·과태료로도 양육비를 안 내는 상대방을 감치 신청할 수 있습니다. 감치까지 5단계 절차와 필요 서류를 지금 확인하세요.',
    },
    intro:
      '<p>양육비를 몇 달째 받지 못해 법원 이행명령까지 받았지만 여전히 입금이 없다면, 감치(구금) 신청이 남은 강력 카드입니다. 감치는 최대 30일 구금까지 가능해 양육비 이행 압박 수단으로 실효성이 큽니다. 감치 신청의 5단계 절차를 정리합니다.</p>',
    sections: [
      {
        title: '감치 요건 — 어떤 조건이 충족되어야 하는가',
        content:
          '<p><strong style="color:#1e3a5f">양육비 부담조서·판결·심판이 확정된 상태에서 이행명령 위반 + 정당한 사유 없음이 입증되어야 감치가 가능합니다.</strong></p>\n<ul>\n<li><strong>확정 집행권원</strong> — 판결·심판·양육비부담조서·조정조서 중 하나 보유.</li>\n<li><strong>이행명령 선행</strong> — 가사소송법 제64조 이행명령을 먼저 받아야 합니다.</li>\n<li><strong>위반 지속</strong> — 3기(3개월) 이상 정당한 사유 없이 미지급 지속.</li>\n<li><strong>경제적 능력 있음</strong> — 소득·재산 있음에도 고의로 미지급. 무자력은 감치 배제 사유.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 감치는 "지급할 수 있는데 안 내는" 자에게만 적용됩니다. 실직·질병 등 정당한 사유는 면제 요인.</blockquote>',
      },
      {
        title: '감치 신청 순서 — 5단계 절차',
        content:
          '<p><strong style="color:#1e3a5f">양육비 지급 확인 → 이행명령 신청 → 과태료 → 감치 신청 순으로 진행됩니다.</strong></p>\n<ul>\n<li><strong>1단계 — 미지급 확인</strong> — 입금내역·최고장 발송으로 3기 이상 미지급 증거 확보.</li>\n<li><strong>2단계 — 이행명령 신청</strong> — 가정법원에 이행명령 청구(가사소송법 제64조).</li>\n<li><strong>3단계 — 과태료 부과</strong> — 이행명령 위반 시 1,000만원 이하 과태료.</li>\n<li><strong>4단계 — 감치 신청</strong> — 3기 이상 정당한 사유 없이 불이행 시 감치 청구(제68조).</li>\n<li><strong>5단계 — 심문·결정</strong> — 법원 심문 후 최대 30일 구금 결정.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 양육비 감치 가능성·신청 서류를 분석해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '준비 서류 — 신청서와 증빙',
        content:
          '<p><strong style="color:#1e3a5f">감치 신청서에는 기존 판결·이행명령 기록과 미지급 입증 자료를 모두 첨부해야 합니다.</strong></p>\n<ul>\n<li><strong>감치 신청서</strong> — 가정법원 양식. 미지급 기간·금액·이행명령 위반 사실 기재.</li>\n<li><strong>집행권원 사본</strong> — 판결문·심판서·양육비부담조서·조정조서 중 해당본.</li>\n<li><strong>이행명령 결정문</strong> — 이행명령 결정서와 송달 증명.</li>\n<li><strong>미지급 증빙</strong> — 통장 사본·최고장 발송내역·입금 요청 기록.</li>\n<li><strong>상대방 소득·재산 자료</strong> — 급여명세·재산세 납부 내역 등 지급 능력 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이행명령 후 언제부터 어떻게 위반했는지 타임라인으로 정리해 제출하면 설득력이 높아집니다.</blockquote>',
      },
      {
        title: '감치 효과와 한계 — 실효성 있는 이유',
        content:
          '<p><strong style="color:#1e3a5f">감치 결정 후 실제 구금 위협만으로도 많은 경우 양육비가 즉시 입금되는 효과가 있습니다.</strong></p>\n<ul>\n<li><strong>최대 30일 구금</strong> — 법원이 기간을 정해 유치장 또는 교도소 수용.</li>\n<li><strong>전액 지급 시 석방</strong> — 감치 중 미지급분 전액 납부하면 즉시 해제.</li>\n<li><strong>반복 가능</strong> — 또 안 내면 새로 감치 신청 가능.</li>\n<li><strong>명단 공개 병행</strong> — 여성가족부 양육비 이행관리원에 명단 공개 신청.</li>\n<li><strong>운전면허 정지·출국금지</strong> — 감치 결정 전후로 추가 제재 병행 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 감치는 "지급 이행 강제" 수단이지 처벌이 아니므로, 피감치자가 지급하면 석방됩니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 이행명령 범위와 감치 대상 한정',
        summary:
          '대법원 2025으517 사건(대법원, 2025.05.23 선고)에서 법원은 이행명령은 양육비부담조서 등에 의해 확정된 의무 중 의무자가 이행하지 아니한 범위에 한정되고, 이행한 부분까지 넘어서 명령할 수 없다고 판시했습니다.',
        takeaway:
          '감치 신청 시에도 이행명령 위반 기간·금액이 명확해야 하며, 이미 지급된 부분을 포함해 과도하게 주장하면 기각될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '이행명령 없이 바로 감치 신청이 가능한가요?',
        answer:
          '<strong>불가능합니다.</strong> 가사소송법상 이행명령 후에도 정당한 사유 없이 위반할 때 감치가 가능하므로, 이행명령 단계를 가능한 한 거쳐야 합니다.',
      },
      {
        question: '상대방이 실직했다고 하면 감치가 안 되나요?',
        answer:
          '<strong>무자력 입증이 핵심입니다.</strong> 실제 실직·질병 등 정당한 사유가 있으면 감치 배제되지만, 은닉 소득·숨긴 재산이 드러나면 감치 가능합니다.',
      },
      {
        question: '감치 기간 중에도 양육비가 쌓이나요?',
        answer:
          '<strong>계속 쌓입니다.</strong> 감치는 기존 미지급에 대한 강제이며, 감치 기간 동안 발생하는 월 양육비는 별도로 청구해야 합니다.',
      },
      {
        question: '감치 결정에 불복 가능한가요?',
        answer:
          '<strong>즉시항고로 다툴 수 있습니다.</strong> 결정일로부터 1주일 이내에 가정법원에 항고하면 상급심이 재심리합니다.',
      },
      {
        question: '감치보다 먼저 할 수 있는 조치는 무엇이 있나요?',
        answer:
          '<strong>급여압류·재산압류가 우선 고려됩니다.</strong> 이행명령, 명단 공개, 운전면허 정지, 출국금지도 병행 가능합니다.',
      },
    ],
    cta: {
      text: '양육비 산정기준표, AI로 계산해보기',
      link: '/chat?domain=child-support',
    },
    internalLinks: [
      { label: '양육비 감치명령 신청', href: '/guide/child-support/child-support-enforcement-contempt-order' },
      { label: '양육비 강제집행 방법', href: '/guide/child-support/child-support-enforcement-method' },
      { label: '양육비 미지급 대응', href: '/guide/child-support/child-support-non-payment' },
      { label: '양육비 소송 절차', href: '/guide/child-support/child-support-lawsuit-procedure' },
      { label: '양육비 급여 압류 절차', href: '/guide/child-support/child-support-overdue-salary-seizure-procedure' },
    ],
  },

  // ─── 5. child-support / child-support-inflation-adjustment ───
  {
    domain: 'child-support',
    slug: 'child-support-inflation-adjustment',
    keyword: '양육비 물가 연동 증액',
    questionKeyword: '물가가 올랐는데 양육비를 더 받을 수 있나요?',
    ctaKeyword: '양육비 증액 가능성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '양육비 물가 연동 증액 — 인정 요건 4가지 기준 | 로앤가이드',
      description:
        '몇 년 전 정해진 양육비가 물가 상승으로 부족해졌다면 증액이 가능할까요? 인정 요건·필요 자료 4가지 기준을 지금 확인하세요.',
    },
    intro:
      '<p>3년 전 협의한 월 50만원 양육비는 지금 물가로는 턱없이 부족합니다. 자녀가 성장하면서 학원비·식비·의료비도 늘어납니다. 이런 경우 양육비 증액 심판 청구가 가능하지만, 단순히 "물가가 올랐다"는 주장만으로는 부족합니다. 물가 연동 양육비 증액의 4대 쟁점을 정리합니다.</p>',
    sections: [
      {
        title: '증액 인정 요건 — 사정변경의 실질 판단',
        content:
          '<p><strong style="color:#1e3a5f">민법 제837조 제5항에 따라 자녀의 복리에 필요한 경우 법원은 양육비를 변경할 수 있습니다.</strong></p>\n<ul>\n<li><strong>자녀 성장·교육비 증가</strong> — 초→중→고 진학에 따른 교육비 상승.</li>\n<li><strong>물가 상승</strong> — 전년 대비 누적 5% 이상 인상 시 고려 요인.</li>\n<li><strong>양육자 소득 감소</strong> — 실직·질병 등으로 양육자 부담 과중.</li>\n<li><strong>비양육자 소득 증가</strong> — 이직·승진으로 소득이 크게 늘어난 경우.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 물가 단독만으로는 부족하고 자녀 성장·소득 변동 중 복수 요인이 겹쳐야 인정될 수 있습니다.</blockquote>',
      },
      {
        title: '증액 산정 — 양육비 산정기준표 재적용',
        content:
          '<p><strong style="color:#1e3a5f">서울가정법원 양육비 산정기준표(2021 개정)에 따라 부모 합산 소득·자녀 연령대별로 재산정합니다.</strong></p>\n<ul>\n<li><strong>부모 합산 소득 재계산</strong> — 급여명세·소득금액증명으로 현재 기준 산정.</li>\n<li><strong>자녀 연령 구간 재적용</strong> — 12~14세·15~18세 구간으로 넘어가면 표준금액 상향.</li>\n<li><strong>가산·감산 요소</strong> — 거주지역(수도권)·자녀 수·특별비용 반영.</li>\n<li><strong>분담 비율</strong> — 부모 합산 소득 대비 비양육자 소득 비율로 분담.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 양육비 증액 가능성·산정기준표 재적용을 분석해드립니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '필요 자료 — 증액 청구 시 제출 서류',
        content:
          '<p><strong style="color:#1e3a5f">사정변경을 객관적으로 입증할 소득·지출·물가 자료가 핵심 증거입니다.</strong></p>\n<ul>\n<li><strong>기존 판결·조정조서</strong> — 현재 양육비가 결정된 근거 문서.</li>\n<li><strong>양육자 소득·지출 자료</strong> — 급여명세·카드 사용 내역·자녀 교육비 영수증.</li>\n<li><strong>비양육자 소득 증빙</strong> — 소득금액증명·원천징수 영수증(사실조회 신청).</li>\n<li><strong>물가·교육비 통계</strong> — 통계청 소비자물가지수·교육비 통계 인용.</li>\n<li><strong>자녀 성장 자료</strong> — 학년·학원 등록증·의료비 영수증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 통계청 가계동향조사·교육급여 기준의 물가지수 자료를 함께 첨부하면 설득력이 큽니다.</blockquote>',
      },
      {
        title: '청구 절차 — 양육비 변경 심판',
        content:
          '<p><strong style="color:#1e3a5f">가정법원에 "양육비 변경 심판"을 청구하고 조정·심문·심판 단계를 거칩니다.</strong></p>\n<ul>\n<li><strong>심판 청구</strong> — 가사소송법 제2조 제1항 제2호 나목 3에 따라 관할 가정법원 접수.</li>\n<li><strong>조정 전치</strong> — 먼저 조정 단계에서 합의 시도(1~3개월).</li>\n<li><strong>심문기일</strong> — 사정변경·산정기준·증거 제출(평균 3~6개월).</li>\n<li><strong>심판 결정</strong> — 증액 인정 시 청구일 또는 결정일부터 월 양육비 증액 적용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 증액은 청구일 이후부터 인정되는 경우가 많으므로, 사정변경이 생기면 빨리 청구하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 과거 양육비·인지 판결 전 양육비 청구 가능성',
        summary:
          '대법원 2023스643 사건(대법원, 2023.10.31 선고)에서 법원은 양육에 소요된 통상적 생활비와 특별비용을 구분하고, 부모 소득·자녀 성장 등 여러 사정을 종합해 분담 범위를 재산정할 수 있다고 판시했습니다.',
        takeaway:
          '양육비는 사정변경(물가·소득·자녀 성장)이 확인되면 법원이 재량으로 분담 범위를 조정할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '협의서대로 정해진 양육비도 증액 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 협의 후 사정변경이 생기면 가정법원이 변경 심판에서 증액을 결정할 수 있습니다.',
      },
      {
        question: '몇 년마다 증액을 청구할 수 있나요?',
        answer:
          '<strong>주기 제한은 없습니다.</strong> 실질적 사정변경이 있을 때마다 청구 가능하지만, 일반적으로 2~3년 이상 경과해 변동이 누적된 경우 인정 가능성이 높습니다.',
      },
      {
        question: '상대방 소득을 어떻게 확인하나요?',
        answer:
          '<strong>법원에 사실조회 신청으로 국세청·근로복지공단·국민연금공단에 조회합니다.</strong> 급여소득·사업소득 모두 확인 가능합니다.',
      },
      {
        question: '증액 인정되면 소급해서 받을 수 있나요?',
        answer:
          '<strong>원칙적으로 심판청구일부터 인정될 수 있습니다.</strong> 소급분은 드물게 인정되므로, 사정변경이 발생하면 즉시 청구하는 것이 유리합니다.',
      },
      {
        question: '증액 심판에 변호사가 꼭 필요한가요?',
        answer:
          '<strong>필수는 아니지만 권장됩니다.</strong> 산정기준표 적용·사실조회·재판 절차가 복잡해 변호사의 조력이 증액률을 높이는 경우가 많습니다.',
      },
    ],
    cta: {
      text: '양육비 산정기준표, AI로 계산해보기',
      link: '/chat?domain=child-support',
    },
    internalLinks: [
      { label: '양육비 증액 청구 방법', href: '/guide/child-support/child-support-increase-request-method' },
      { label: '양육비 산정 기준표', href: '/guide/child-support/child-support-calculation-table' },
      { label: '소득 변경 양육비 조정', href: '/guide/child-support/child-support-modification-income-change' },
      { label: '양육비 계산·증액', href: '/guide/child-support/child-support-calculation-increase' },
      { label: '양육비 계산 기준', href: '/guide/child-support/child-support-calculation-standard' },
    ],
  },

  // ─── 6. traffic-accident / traffic-accident-door-opening-fault ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-door-opening-fault',
    keyword: '개문사고 과실비율',
    questionKeyword: '정차 중 문을 열다가 오토바이·자전거 사고가 났는데 과실은 어떻게 되나요?',
    ctaKeyword: '개문사고 과실 점검',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '개문사고 과실비율 — 차문 사고 4가지 기준 | 로앤가이드',
      description:
        '정차 차량 문을 열다가 뒤에서 오는 오토바이·자전거와 부딪혔다면 과실비율은 어떻게 나올까요? 판단 기준 4가지를 지금 확인하세요.',
    },
    intro:
      '<p>도로변에 잠시 정차한 뒤 문을 열자마자 뒤에서 달려오던 오토바이가 부딪히는 개문사고는 의외로 자주 발생합니다. 운전자는 "잠깐 열었을 뿐"이라고 생각하지만 도로교통법상 개문 시 후방 안전 확인 의무가 있어 대부분 차량 측 과실이 크게 잡힙니다. 개문사고의 과실 판단 기준 4가지를 정리합니다.</p>',
    sections: [
      {
        title: '기본 과실 구조 — 개문 측 80% 출발',
        content:
          '<p><strong style="color:#1e3a5f">도로교통법 제49조 제1항 제7호는 운행자·동승자에게 타고 내릴 때 안전 확인 의무를 부과합니다.</strong></p>\n<ul>\n<li><strong>기본 비율</strong> — 개문 차량 80% : 진행 오토바이·자전거 20%.</li>\n<li><strong>갓길·정차선 위반</strong> — 개문 차량 과실 +10%.</li>\n<li><strong>야간·우천</strong> — 시야 제한 시 개문 차량 과실 +5~10%.</li>\n<li><strong>진행 차량 속도 초과</strong> — 진행자 과실 +10% 가산.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 개문자 과실이 기본 80%로 높게 출발하고, 세부 정황에 따라 ±10~20% 조정됩니다.</blockquote>',
      },
      {
        title: '개문자의 주의의무 — 어디까지 요구되는가',
        content:
          '<p><strong style="color:#1e3a5f">개문자는 탑승자 전원(운전자·동승자)이 후방을 확인하고 천천히 열 의무가 있습니다.</strong></p>\n<ul>\n<li><strong>후방 확인</strong> — 사이드미러·백미러·직접 고개 돌려 확인.</li>\n<li><strong>단계적 개방</strong> — 완전히 열지 말고 살짝 열어 후방 반응 확인.</li>\n<li><strong>안전 장소 선택</strong> — 자전거 도로·갓길·교차로 근처 승하차 금지.</li>\n<li><strong>동승자 주의 의무</strong> — 뒷좌석·조수석 승객도 동일 의무, 사고 시 공동 책임.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 개문사고 과실비율·형사책임 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '형사책임 — 교통사고처리특례법과 12대 중과실',
        content:
          '<p><strong style="color:#1e3a5f">개문사고는 "승객 추락방지 의무 위반"으로 특례법 12대 중과실 중 하나에 해당할 수 있습니다.</strong></p>\n<ul>\n<li><strong>12대 중과실</strong> — 도로교통법 제49조 제1항 제7호 위반은 교통사고처리특례법 제3조 제2항 단서 해당 여지.</li>\n<li><strong>종합보험 가입 무관</strong> — 특례 배제 시 가입되어 있어도 형사 기소 가능.</li>\n<li><strong>피해자 중상해</strong> — 전치 12주 이상 중상해는 합의 없으면 기소 가능성 높음.</li>\n<li><strong>피해자 사망</strong> — 합의 여부 불문 교통사고처리특례법 제3조 제1항 기소.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 개문사고도 중상·사망 시 형사 기소되므로, 합의·탄원서 준비가 중요합니다.</blockquote>',
      },
      {
        title: '보험 처리 — 자차·대인·공제 흐름',
        content:
          '<p><strong style="color:#1e3a5f">개문사고는 운행 중 사고로 보기 어려워 일반 자동차보험 적용 여부가 쟁점이 됩니다.</strong></p>\n<ul>\n<li><strong>자동차보험 대인</strong> — 원칙적으로 보장되나 "운행" 개념에 따라 면책 다툼.</li>\n<li><strong>일상생활배상책임보험</strong> — 동승자 개문 시 활용 가능.</li>\n<li><strong>자차보험</strong> — 상대 오토바이·자전거 손해 발생 시 자차 적용 제한.</li>\n<li><strong>과실비율 협의</strong> — 보험사 교차심의 또는 구상금분쟁심의위원회 활용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "운행 중이 아니다"라는 이유로 보험사가 면책을 주장하는 경우가 있으므로 약관과 판례를 확인하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 쌍방과실 시 자차 자기부담금 청구',
        summary:
          '대법원 2022다287284 사건(대법원, 2026.01.29 선고)에서 법원은 쌍방과실 교통사고 발생 시 자차보험계약에 따라 차량수리비 중 자기부담금을 보상받지 못한 피보험자가 상대차량 측에 자기부담금 상당의 손해배상을 청구할 수 있다고 판시했습니다.',
        takeaway:
          '개문사고 같은 쌍방과실 사고에서도 자기부담금 상당액을 상대방에게 직접 청구해 손실을 회복할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '조수석·뒷좌석 동승자가 문을 열었는데 제가 책임지나요?',
        answer:
          '<strong>운전자도 공동 책임을 집니다.</strong> 차량 운전자는 동승자의 개문 안전 확인까지 주의의무가 있으므로 민사책임은 운전자에게도 귀속됩니다.',
      },
      {
        question: '오토바이가 너무 빨리 달려온 경우에도 제 책임이 큰가요?',
        answer:
          '<strong>속도 초과 입증 시 상대 과실이 10~20% 상향됩니다.</strong> 블랙박스·CCTV로 속도 위반을 입증하면 개문 측 과실이 줄어듭니다.',
      },
      {
        question: '개문사고도 뺑소니가 되나요?',
        answer:
          '<strong>사고 후 구호조치 없이 자리 이탈하면 특가법상 도주치상(뺑소니)로 처벌 대상으로 검토될 수 있습니다.</strong> 가능한 한 119 신고·경찰 신고·신원 공유부터 하세요.',
      },
      {
        question: '자전거 사고인데 자전거 측 과실도 인정되나요?',
        answer:
          '<strong>속도·진로 위반 등 입증되면 10~20% 인정될 수 있습니다.</strong> 역주행·인도 주행·음주 등은 자전거 측 과실 가산 사유입니다.',
      },
      {
        question: '형사 처벌이 확정되면 어떻게 대응하나요?',
        answer:
          '<strong>피해자 합의·탄원서·반성문을 제출하세요.</strong> 종합보험 가입·초범·즉각 구호조치는 양형 감경 요소로 작용합니다.',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 과실 분쟁 증거', href: '/guide/traffic-accident/traffic-accident-fault-dispute-evidence' },
      { label: '블랙박스 증거 활용', href: '/guide/traffic-accident/traffic-accident-dashcam-evidence-guide' },
      { label: '교통사고 형사·민사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
      { label: '합의 전 체크리스트', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '자전거 사고 손해', href: '/guide/traffic-accident/traffic-accident-bicycle-car-damage' },
    ],
  },

  // ─── 7. traffic-accident / traffic-accident-intersection-left-turn ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-intersection-left-turn',
    keyword: '교차로 좌회전 사고 과실',
    questionKeyword: '교차로에서 좌회전하다가 직진 차량과 부딪혔는데 과실비율은요?',
    ctaKeyword: '좌회전 사고 과실 점검',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '교차로 좌회전 사고 — 직진 차량 과실비율 5가지 | 로앤가이드',
      description:
        '좌회전 신호·비보호·황색 등 상황별 과실비율이 어떻게 달라지는지, 증거 확보 순서는 무엇인지 5가지 기준을 지금 확인하세요.',
    },
    intro:
      '<p>교차로에서 좌회전하려다 맞은편에서 오는 직진 차량과 부딪히는 사고는 통행 빈도만큼 자주 발생합니다. 신호가 완전 좌회전인지, 비보호 좌회전인지, 황색 점멸인지에 따라 과실비율이 크게 달라집니다. 교차로 좌회전 사고의 5대 기준을 정리합니다.</p>',
    sections: [
      {
        title: '신호 체계별 기본 과실비율',
        content:
          '<p><strong style="color:#1e3a5f">좌회전 전용 신호·비보호 좌회전·황색 등 신호 체계에 따라 기본 과실이 크게 달라집니다.</strong></p>\n<ul>\n<li><strong>좌회전 녹색 신호</strong> — 좌회전 차량 0~20% : 직진 신호위반 차량 80~100%.</li>\n<li><strong>비보호 좌회전</strong> — 좌회전 차량 70~80% : 직진 차량 20~30%.</li>\n<li><strong>황색 점멸</strong> — 좌회전 차량 40~50% : 직진 차량 50~60%.</li>\n<li><strong>신호 동시 녹색</strong> — 동시 교차 시 양측 주의 의무. 비율은 속도·위치에 따라 상이.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "내가 신호 지켰다"만으로는 부족. 상대 신호 상태, 교차 시점, 속도까지 함께 평가됩니다.</blockquote>',
      },
      {
        title: '증거 확보 — 블랙박스·CCTV 우선',
        content:
          '<p><strong style="color:#1e3a5f">교차로 사고는 신호 상태 입증이 과실비율을 좌우하므로 영상 증거가 핵심입니다.</strong></p>\n<ul>\n<li><strong>양측 블랙박스</strong> — 양 차량 블랙박스에서 신호 상태 확인.</li>\n<li><strong>교차로 CCTV</strong> — 관할 경찰서에 사고기록 보존 요청.</li>\n<li><strong>목격자 진술</strong> — 보행자·다른 운전자 진술 확보.</li>\n<li><strong>신호주기표</strong> — 관할 지자체 교통관리센터에서 사고 시각 신호주기 확인.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 좌회전 사고 과실·형사 리스크를 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '형사책임 — 신호위반은 12대 중과실',
        content:
          '<p><strong style="color:#1e3a5f">신호위반·중앙선 침범·과속은 교통사고처리특례법 12대 중과실로 종합보험 가입 여부와 무관하게 형사 기소됩니다.</strong></p>\n<ul>\n<li><strong>신호위반 기소</strong> — 특례 배제, 벌금·금고형 가능.</li>\n<li><strong>중상해·사망</strong> — 합의 여부 불문 기소.</li>\n<li><strong>초범·합의 완료</strong> — 기소유예·집행유예 가능성.</li>\n<li><strong>보험만 믿기</strong> — 중과실은 보험 가입해도 형사 별도 진행.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 황색 신호에 진입한 경우 "정지 가능 여부" 입증이 형사·민사 모두에서 결정적입니다.</blockquote>',
      },
      {
        title: '보험 처리·분쟁 — 과실비율 조정',
        content:
          '<p><strong style="color:#1e3a5f">보험사 제시안이 부당하면 손해보험협회 구상금분쟁심의위원회 또는 민사소송으로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>1차 — 보험사 교차심의</strong> — 양 측 보험사 협의로 과실 결정.</li>\n<li><strong>2차 — 구상금분쟁심의위</strong> — 협의 불발 시 심의 청구.</li>\n<li><strong>3차 — 민사소송</strong> — 심의 결과 불복 시 법원 판단.</li>\n<li><strong>자차 자기부담금</strong> — 쌍방과실 시 상대방에게 직접 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합의금 서명 전 가능한 한 변호사 검토. 한 번 서명하면 추가 청구가 어려워집니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 과속·안전지대 관련 과실 인정 한계',
        summary:
          '울산지방법원 2024노652 사건(울산지법, 2025.01.07 선고)에서 법원은 피해자가 안전지대를 가로질러 가는 과실이 있고, 운전자가 제한속도를 지키며 진행하였더라도 충돌을 피할 수 있었다고 단정할 수 없다는 이유로 과속 업무상 주의의무 위반을 인정하기 어렵다고 판단했습니다.',
        takeaway:
          '과속·신호위반이 있었더라도 사고와 직접 인과관계가 있어야 형사책임이 성립하며, 피해자의 과실도 함께 평가됩니다.',
      },
    ],
    faq: [
      {
        question: '비보호 좌회전은 항상 좌회전 차량 과실이 큰가요?',
        answer:
          '<strong>기본적으로 70~80% 수준이지만, 직진 차량의 과속·신호위반이 입증되면 조정 가능합니다.</strong> 블랙박스로 상대 속도·신호 상태를 확보하세요.',
      },
      {
        question: '황색 신호에 진입했는데 신호위반으로 처벌되나요?',
        answer:
          '<strong>정지선 앞에서 정지 가능했는지 여부가 핵심입니다.</strong> 너무 근접해 정지가 위험했다면 신호위반 책임이 감경되는 경우가 있습니다.',
      },
      {
        question: '상대가 보험 없는 차량이면 어떻게 하나요?',
        answer:
          '<strong>자동차손해배상보장사업(무보험차상해)로 일부 보장받을 수 있습니다.</strong> 나머지는 민사소송으로 직접 청구하되, 상대 자력에 따라 회수 여부가 결정됩니다.',
      },
      {
        question: '경찰 사고조사에서 신호를 다르게 말하면 어떻게 하나요?',
        answer:
          '<strong>영상 증거·CCTV로 반박합니다.</strong> 목격자 진술과 신호주기표 자료를 함께 제출하면 사실관계 정정이 가능합니다.',
      },
      {
        question: '교차로 사고에서 인명 피해가 없으면 형사 처벌 없나요?',
        answer:
          '<strong>인명피해 없는 물적 피해만 있으면 교통사고처리특례법상 공소권 없음 처리되는 경우가 많습니다.</strong> 다만 중앙선 침범·신호위반은 별도 범칙금·벌점이 부과됩니다.',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 과실 분쟁 증거', href: '/guide/traffic-accident/traffic-accident-fault-dispute-evidence' },
      { label: '블랙박스 증거 활용', href: '/guide/traffic-accident/traffic-accident-dashcam-evidence-guide' },
      { label: '중앙선 침범 피해자 소송', href: '/guide/traffic-accident/traffic-accident-centerline-violation-victim-lawsuit' },
      { label: '차선 위반 형사 처벌', href: '/guide/traffic-accident/traffic-accident-lane-violation-criminal-penalty' },
      { label: '교통사고 형사·민사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
    ],
  },

  // ─── 8. traffic-accident / traffic-accident-pedestrian-green-fatality ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-pedestrian-green-fatality',
    keyword: '녹색신호 보행자 사망사고',
    questionKeyword: '횡단보도 녹색신호에서 보행자가 사망하면 운전자는 어떻게 되나요?',
    ctaKeyword: '보행자 사망사고 대응 점검',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '녹색신호 보행자 사망사고 — 운전자 형사·민사 5단계 | 로앤가이드',
      description:
        '횡단보도 녹색신호에서 보행자를 치어 사망에 이르게 한 운전자는 특례법 배제 기소 대상입니다. 5단계 대응을 지금 확인하세요.',
    },
    intro:
      '<p>횡단보도 녹색신호에 진입하는 보행자를 미처 보지 못해 사고가 나면 경미한 부상이라도 운전자는 신호위반으로 기소될 위험이 큽니다. 특히 보행자가 사망한 경우 합의 여부와 무관하게 교통사고처리특례법 제3조 제1항에 따라 가능한 한 기소됩니다. 녹색신호 보행자 사망사고 5단계 대응을 정리합니다.</p>',
    sections: [
      {
        title: '특례법 배제 — 사망사고는 기소 대상',
        content:
          '<p><strong style="color:#1e3a5f">교통사고처리특례법 제3조 제1항에 따라 사망사고는 종합보험 가입·합의와 무관하게 형사 기소됩니다.</strong></p>\n<ul>\n<li><strong>사망사고 기소 원칙</strong> — 형법 제268조 업무상과실치사죄 적용.</li>\n<li><strong>합의 효과</strong> — 기소는 면할 수 없으나 양형에 반영(집행유예·감형).</li>\n<li><strong>신호위반 중과실</strong> — 특례법 12대 중과실 신호위반 해당 시 중상해도 기소.</li>\n<li><strong>교특법 제4조</strong> — 종합보험 가입 특례는 중과실 아닌 경우에만 적용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사망사고는 합의되어도 기소는 피할 수 없습니다. 양형 관점에서 합의·탄원이 중요.</blockquote>',
      },
      {
        title: '사고 직후 5단계 대응',
        content:
          '<p><strong style="color:#1e3a5f">사고 직후 행동이 민사·형사 결과를 좌우합니다. 5단계 순서대로 대응하세요.</strong></p>\n<ul>\n<li><strong>1단계 — 119·경찰 신고</strong> — 피해자 구호 조치와 동시에 사고 신고.</li>\n<li><strong>2단계 — 현장 보존</strong> — 블랙박스·차량 위치 유지, 현장 사진 촬영.</li>\n<li><strong>3단계 — 경찰 조사</strong> — 변호인 조력을 받으며 진술, 거짓·은폐 금지.</li>\n<li><strong>4단계 — 유족 대응</strong> — 조문·사죄 표시, 장례비 선지원 고려.</li>\n<li><strong>5단계 — 변호인 선임</strong> — 형사 변호사 선임, 보험사와 별개로 형사 전략 수립.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">혐의를 받고 있다면 AI가 사망사고 대응 순서와 양형 감경 요소를 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '민사 배상 — 위자료·일실수입·장례비',
        content:
          '<p><strong style="color:#1e3a5f">보행자 사망 시 위자료·일실수입·장례비가 주요 배상 항목입니다.</strong></p>\n<ul>\n<li><strong>위자료</strong> — 본인 위자료 1억~1.5억 + 유족 위자료 별도(합계 2억 전후 가능).</li>\n<li><strong>일실수입</strong> — 생존 시 벌 수 있었던 소득, 호프만 계수·가동연한 반영.</li>\n<li><strong>장례비</strong> — 실비 또는 정액(1,000만원 전후).</li>\n<li><strong>과실상계</strong> — 보행자 신호위반·음주 시 배상 감액.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 종합보험 보장 한도를 초과하면 운전자 개인 재산으로 부족분을 배상해야 합니다.</blockquote>',
      },
      {
        title: '양형 감경 요소 — 합의·반성·초범',
        content:
          '<p><strong style="color:#1e3a5f">사망사고에서 실형을 피하려면 합의·반성·초범 요소를 종합 준비해야 합니다.</strong></p>\n<ul>\n<li><strong>유족 합의</strong> — 가장 강력한 감경 요소. 형사 공탁도 차선책.</li>\n<li><strong>반성문·탄원서</strong> — 구체적 사실 인정, 재발 방지 계획 포함.</li>\n<li><strong>초범·무사고 경력</strong> — 운전 경력·전과 없음은 양형 기준 유리.</li>\n<li><strong>즉각 구호조치</strong> — 뺑소니 아님·적극적 119 신고 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합의가 실패해도 형사공탁으로 양형에 반영 가능합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 횡단보도 사망사고 양형 기준',
        summary:
          '부산지방법원 2024노1964 사건(부산지법, 2024.11.28 선고)에서 법원은 업무상과실치상 사건에서 피해자 회복 정도·합의 여부·초범 경력 등 제반 사정을 고려해 원심을 파기하고 양형을 재조정했습니다.',
        takeaway:
          '횡단보도 사망·중상해 사건에서도 합의·반성·초범 여부가 양형에 실질적 영향을 미칩니다.',
      },
    ],
    faq: [
      {
        question: '합의하면 기소를 피할 수 있나요?',
        answer:
          '<strong>사망사고는 합의해도 기소됩니다.</strong> 합의는 양형 감경 요소로만 작용하며, 집행유예·기소유예 가능성을 높입니다.',
      },
      {
        question: '보행자 과실이 있으면 제 형량이 줄어드나요?',
        answer:
          '<strong>민사 과실상계에는 영향을 주지만 형사 양형에도 일부 참작됩니다.</strong> 보행자 신호위반·음주 등 입증 시 가벼운 처벌 가능.',
      },
      {
        question: '경찰에서 진술하기 전 변호사 선임이 필요한가요?',
        answer:
          '<strong>가능한 한 권장됩니다.</strong> 초기 진술이 그대로 형사 기록에 남아 향후 방어에 결정적 영향을 미치므로 변호인 동석 하에 진술하세요.',
      },
      {
        question: '집행유예 받을 가능성이 있나요?',
        answer:
          '<strong>초범·합의·반성이 모두 갖춰지면 가능합니다.</strong> 다만 과속·중과실이 겹치면 실형 선고 가능성이 올라갑니다.',
      },
      {
        question: '보험사가 합의를 주도하는데 제가 개입해야 하나요?',
        answer:
          '<strong>별도로 유족 사죄와 탄원서 확보가 중요합니다.</strong> 보험사는 배상 중심이고, 형사 양형용 합의서는 운전자·변호인이 따로 받아야 합니다.',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '교통사고 형사·민사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
      { label: '가해자 형사 고소 대응', href: '/guide/traffic-accident/traffic-accident-offender-criminal-charge-response' },
      { label: '어린이 보행자 청구', href: '/guide/traffic-accident/traffic-accident-child-pedestrian-claim' },
      { label: '무단횡단 사고 과실', href: '/guide/traffic-accident/traffic-accident-pedestrian-jaywalking-fault' },
      { label: '합의 전 체크리스트', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
    ],
  },

  // ─── 9. traffic-accident / traffic-accident-school-zone-speed ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-school-zone-speed',
    keyword: '스쿨존 사고 처벌',
    questionKeyword: '스쿨존에서 어린이 사고를 낸 경우 처벌이 얼마나 중한가요?',
    ctaKeyword: '스쿨존 사고 처벌 점검',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '스쿨존 사고 처벌 — 민식이법 4가지 핵심 기준 | 로앤가이드',
      description:
        '어린이 보호구역에서 어린이 사고를 낸 경우 민식이법(특가법)으로 가중처벌 대상으로 검토될 수 있습니다. 4가지 판단 기준과 대응 순서를 지금 확인하세요.',
    },
    intro:
      '<p>어린이 보호구역에서 시속 30km 이하로 주행했더라도 어린이가 갑자기 튀어나와 사고가 나면 운전자는 민식이법(특정범죄가중처벌등에관한법률 제5조의13)으로 가중처벌될 수 있습니다. 어린이 중상해 시 1년 이상 15년 이하 징역, 사망 시 무기 또는 3년 이상 징역까지 처해질 수 있습니다. 스쿨존 사고의 4대 핵심 기준을 정리합니다.</p>',
    sections: [
      {
        title: '민식이법 적용 — 4가지 성립 요건',
        content:
          '<p><strong style="color:#1e3a5f">특가법 제5조의13은 어린이 보호구역·어린이 피해자·운전 부주의 또는 법규 위반이 모두 충족되어야 적용됩니다.</strong></p>\n<ul>\n<li><strong>장소</strong> — 어린이 보호구역(스쿨존) 표지판 내 또는 시속 30km 제한 구역.</li>\n<li><strong>피해자</strong> — 만 13세 미만 어린이.</li>\n<li><strong>운전 부주의</strong> — 안전운전 의무 위반(과속·전방주시 태만 등).</li>\n<li><strong>결과</strong> — 상해 또는 사망. 단순 물피는 적용 제외.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "속도 지켰다"만으로는 면책 불가. 전방주시·서행·횡단보도 일시정지 의무까지 충족해야 합니다.</blockquote>',
      },
      {
        title: '처벌 수위 — 상해·사망 기준',
        content:
          '<p><strong style="color:#1e3a5f">특가법 제5조의13은 일반 교통사고보다 훨씬 무거운 형량을 규정합니다.</strong></p>\n<ul>\n<li><strong>상해</strong> — 1년 이상 15년 이하 징역 또는 500만원 이상 3,000만원 이하 벌금.</li>\n<li><strong>사망</strong> — 무기 또는 3년 이상 징역.</li>\n<li><strong>교통사고처리특례법 배제</strong> — 종합보험·합의 무관 기소.</li>\n<li><strong>집행유예 가능성</strong> — 초범·합의·반성 등 종합 판단 시 가능하나 쉽지 않음.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">혐의를 받고 있다면 AI가 스쿨존 사고 양형·방어 전략을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '방어 포인트 — 인과관계·주의의무 이행',
        content:
          '<p><strong style="color:#1e3a5f">민식이법이 적용되더라도 "안전운전 의무를 다했고 피할 수 없었다"는 점을 입증하면 감경 또는 무죄가 가능합니다.</strong></p>\n<ul>\n<li><strong>제한속도 준수</strong> — 블랙박스 속도·GPS 로그 확보.</li>\n<li><strong>전방주시 이행</strong> — 휴대전화 사용·내비 조작 없음 입증.</li>\n<li><strong>서행 및 일시정지</strong> — 횡단보도 진입 전 서행·정지 여부.</li>\n<li><strong>돌발 상황</strong> — 어린이가 갑자기 튀어나와 예측 불가능성 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 블랙박스·교차로 CCTV·속도 기록은 사고 직후 가능한 한 확보하세요. 며칠 지나면 복구가 어렵습니다.</blockquote>',
      },
      {
        title: '양형 감경 — 합의·탄원·반성',
        content:
          '<p><strong style="color:#1e3a5f">집행유예를 받으려면 피해자·유족과의 합의가 가장 큰 감경 요소입니다.</strong></p>\n<ul>\n<li><strong>피해자 합의</strong> — 진정한 사죄와 상당한 합의금으로 유족 처벌불원서 확보.</li>\n<li><strong>형사공탁</strong> — 합의 불발 시 공탁으로 양형 반영.</li>\n<li><strong>반성문·탄원서</strong> — 가족·직장·지역사회의 탄원서 여러 장 준비.</li>\n<li><strong>예방 교육·봉사</strong> — 안전운전 교육 이수, 봉사활동 이력 제출.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 민식이법 사건은 언론·여론 영향이 크므로 변호인과 긴밀히 협업해 방어 전략을 수립하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 제한속도 초과·안전지대 관련 무죄',
        summary:
          '대구지법 2024고합568 사건(국민참여재판)에서 법원은 운전자의 제한속도 초과·주의의무 위반과 사고 간 상당인과관계를 인정하기 어렵다는 이유로 무죄를 선고한 유사 판례가 있습니다(국민참여재판, 2025.01.14 선고). 스쿨존 사건에서도 인과관계 입증이 방어의 핵심입니다.',
        takeaway:
          '민식이법이 적용되더라도 운전자의 과실과 사고 간 직접적 인과관계가 입증되지 않으면 무죄 또는 감경이 가능합니다.',
      },
    ],
    faq: [
      {
        question: '시속 30km 이하로 달렸는데도 민식이법 적용되나요?',
        answer:
          '<strong>적용될 수 있습니다.</strong> 속도 준수는 필요조건일 뿐 전방주시·서행 의무까지 이행했는지가 관건입니다.',
      },
      {
        question: '어린이가 갑자기 튀어나온 경우에도 처벌되나요?',
        answer:
          '<strong>돌발 상황이 입증되면 무죄 또는 감경 가능합니다.</strong> 블랙박스로 예측 불가능성·회피 불가능성을 증명하세요.',
      },
      {
        question: '스쿨존 시간대 외 사고도 가중처벌되나요?',
        answer:
          '<strong>원칙적으로 적용됩니다.</strong> 스쿨존 표지가 유지된 지역은 시간대 무관 가중처벌 가능하나, 등하교 시간 외에는 양형 감경 요소로 반영됩니다.',
      },
      {
        question: '합의만 하면 집행유예 가능한가요?',
        answer:
          '<strong>합의는 중요한 감경 요소지만 단독으로 집행유예를 보장하지는 않습니다.</strong> 반성·초범·안전 운전 노력 등을 함께 준비하세요.',
      },
      {
        question: '민사 배상은 얼마 정도 나오나요?',
        answer:
          '<strong>사망 시 위자료 본인 1억 전후 + 유족 위자료 + 일실수입 + 장례비로 총 2~3억 내외가 일반적입니다.</strong> 종합보험 한도를 넘으면 개인 자산으로 보전해야 합니다.',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '스쿨존 어린이 보행자', href: '/guide/traffic-accident/traffic-accident-school-zone-child' },
      { label: '어린이 보행자 청구', href: '/guide/traffic-accident/traffic-accident-child-pedestrian-claim' },
      { label: '가해자 형사 고소 대응', href: '/guide/traffic-accident/traffic-accident-offender-criminal-charge-response' },
      { label: '교통사고 형사·민사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
      { label: '합의 전 체크리스트', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
    ],
  },

  // ─── 10. traffic-accident / traffic-accident-parking-lot-backing ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-parking-lot-backing',
    keyword: '주차장 후진 사고 과실',
    questionKeyword: '주차장에서 후진하다 뒤 차량·보행자와 부딪혔는데 과실은요?',
    ctaKeyword: '주차장 후진사고 과실 점검',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '주차장 후진 사고 — 과실비율·형사책임 4가지 기준 | 로앤가이드',
      description:
        '주차장 통로에서 후진하다 뒤에서 진입하는 차량·보행자와 부딪혔을 때 과실비율과 형사책임이 어떻게 정해지는지 지금 확인하세요.',
    },
    intro:
      '<p>대형마트 주차장에서 후진하다 뒤에서 진입하던 차량과 부딪히거나, 보행자가 다치는 사고가 빈번합니다. "서행 중이었다"는 말만으로는 면책되지 않고 후방 확인 의무가 엄격하게 적용됩니다. 주차장 후진 사고의 과실비율과 형사책임 4대 기준을 정리합니다.</p>',
    sections: [
      {
        title: '기본 과실비율 — 후진자 책임이 큰 이유',
        content:
          '<p><strong style="color:#1e3a5f">도로교통법 제18조는 후진 시 가능한 한 후방 안전 확인 의무를 규정합니다.</strong></p>\n<ul>\n<li><strong>후진 차량 vs 진행 차량</strong> — 기본 70~80% : 20~30%.</li>\n<li><strong>후진 차량 vs 보행자</strong> — 기본 90~100% : 0~10%.</li>\n<li><strong>주차장 통로 폭</strong> — 좁은 통로일수록 후진자 주의의무 가중.</li>\n<li><strong>속도·시야</strong> — 급후진·시야 차단 시 후진자 과실 +10%.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 주차장은 일반도로가 아니지만 도로교통법의 안전운전 의무는 동일하게 적용됩니다.</blockquote>',
      },
      {
        title: '형사책임 — 주차장도 교특법 대상',
        content:
          '<p><strong style="color:#1e3a5f">주차장 사고도 도로 외 구역에 해당하지만, 인명피해 시 업무상과실치상·과실치사죄로 형사 기소됩니다.</strong></p>\n<ul>\n<li><strong>업무상과실치상</strong> — 형법 제268조 2년 이하 금고 또는 700만원 이하 벌금.</li>\n<li><strong>종합보험 특례</strong> — 교통사고처리특례법상 주차장은 "도로"가 아니어도 적용 가능(판례).</li>\n<li><strong>뺑소니 위험</strong> — 구호조치 없이 자리 이탈 시 특가법 도주치상 가능.</li>\n<li><strong>음주·무면허</strong> — 주차장에서도 도로교통법 적용, 처벌 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 주차장 사고 과실·형사 리스크를 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증거 확보 — 주차장 CCTV가 핵심',
        content:
          '<p><strong style="color:#1e3a5f">주차장 CCTV 영상이 과실비율 결정의 가장 강력한 증거입니다.</strong></p>\n<ul>\n<li><strong>주차장 CCTV</strong> — 관할 매장·운영사에 보존 요청(보통 1~7일 내 덮어쓰기).</li>\n<li><strong>블랙박스 영상</strong> — 양 차량 블랙박스 확보.</li>\n<li><strong>목격자 진술</strong> — 현장 상인·다른 운전자 연락처 확보.</li>\n<li><strong>차량 파손 사진</strong> — 충격 방향·위치가 과실 판단에 참고됨.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: CCTV 보존 요청은 사고 즉시 서면·문자로 요청하면 효과적. 구두 요청만으로는 덮어쓰기될 수 있습니다.</blockquote>',
      },
      {
        title: '합의·보험 처리 — 대인·대물·자차',
        content:
          '<p><strong style="color:#1e3a5f">주차장 사고는 자동차보험 대인·대물 배상 대상이지만 과실비율 협의 분쟁이 잦습니다.</strong></p>\n<ul>\n<li><strong>대인 배상</strong> — 치료비·위자료·일실수입.</li>\n<li><strong>대물 배상</strong> — 차량 수리비·렌트비·감가상각.</li>\n<li><strong>자차 자기부담금</strong> — 쌍방과실 시 상대에게 직접 청구 가능.</li>\n<li><strong>보험사 협의</strong> — 제시안 부당 시 구상금분쟁심의위 또는 민사소송.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 주차장 매장 측에 책임이 있는 경우(유도등 오류·바닥 미끄럼)는 매장 측 손해배상 청구도 검토하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 쌍방과실 자차 자기부담금 청구',
        summary:
          '대법원 2022다287284 사건(대법원, 2026.01.29 선고)에서 법원은 쌍방과실 사고에서 자차보험의 자기부담금 상당액을 상대차량 측에 직접 손해배상으로 청구할 수 있다고 판시했습니다.',
        takeaway:
          '주차장 후진 사고 같은 쌍방과실 사건에서도 자기부담금을 상대방에게 청구해 손실을 최소화할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '주차장에서도 도로교통법이 적용되나요?',
        answer:
          '<strong>적용됩니다.</strong> 주차장은 "도로 외 구역"이지만 안전운전 의무·음주운전 금지·뺑소니 처벌은 도로와 동일하게 적용됩니다.',
      },
      {
        question: '후진자만 원칙적으로 책임지나요?',
        answer:
          '<strong>원칙은 후진자 책임이 크지만 상대의 과속·시야 방해·부주의가 입증되면 10~30% 과실 상계가 가능합니다.</strong>',
      },
      {
        question: '주차 중 접촉 후 자리를 뜨면 뺑소니인가요?',
        answer:
          '<strong>인적 피해 없이 물피만 있으면 "사고 후 미조치"로 범칙금·벌점이 부과됩니다.</strong> 인적 피해가 있다면 도주치상(뺑소니)로 가중 처벌 대상으로 검토될 수 있습니다.',
      },
      {
        question: 'CCTV가 없으면 과실 증명이 어려운가요?',
        answer:
          '<strong>블랙박스·목격자·차량 파손 위치로 충분히 입증 가능합니다.</strong> 사고 직후 현장 사진을 여러 각도에서 촬영하세요.',
      },
      {
        question: '주차장 운영사에도 책임을 물을 수 있나요?',
        answer:
          '<strong>유도등·경사·노면 결함으로 사고 원인이 된 경우 운영사에 공작물 책임(민법 제758조) 청구가 가능합니다.</strong>',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '주차장 충돌 사고', href: '/guide/traffic-accident/traffic-accident-parking-lot-collision' },
      { label: '교통사고 과실 분쟁 증거', href: '/guide/traffic-accident/traffic-accident-fault-dispute-evidence' },
      { label: '블랙박스 증거 활용', href: '/guide/traffic-accident/traffic-accident-dashcam-evidence-guide' },
      { label: '후미 추돌 과실', href: '/guide/traffic-accident/traffic-accident-rear-end-fault-ratio' },
      { label: '뺑소니 범인 특정', href: '/guide/traffic-accident/traffic-accident-hit-run-culprit-identification' },
    ],
  },

  // ─── 11. dui / dui-repeat-offense-aggravation ───
  {
    domain: 'dui',
    slug: 'dui-repeat-offense-aggravation',
    keyword: '음주운전 재범 가중처벌',
    questionKeyword: '음주운전 재범 걸리면 처벌이 얼마나 더 무거워지나요?',
    ctaKeyword: '음주운전 재범 처벌 점검',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '음주운전 재범 가중처벌 — 윤창호법 4가지 핵심 | 로앤가이드',
      description:
        '음주운전 재범은 윤창호법·누범 규정으로 형량이 대폭 가중됩니다. 4가지 핵심 기준과 방어 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>과거 음주운전 경력이 있는 상태에서 다시 단속되면 처벌 수위가 크게 올라갑니다. 혐의를 받고 있다면 10년 내 재범 규정과 누범 가중이 겹쳐 벌금형이 어려워지고 실형 가능성이 높아집니다. 음주운전 재범 가중처벌의 4대 핵심을 정리합니다.</p>',
    sections: [
      {
        title: '10년 내 재범 — 도로교통법 제148조의2',
        content:
          '<p><strong style="color:#1e3a5f">도로교통법 제148조의2는 음주운전·측정거부 전력 10년 내 재범 시 형량을 대폭 가중합니다.</strong></p>\n<ul>\n<li><strong>혈중 0.03%~0.08%</strong> — 1년 이상 5년 이하 징역 또는 500만원~2,000만원 벌금.</li>\n<li><strong>혈중 0.08%~0.2%</strong> — 1년 이상 6년 이하 징역 또는 500만원~3,000만원 벌금.</li>\n<li><strong>혈중 0.2% 이상</strong> — 2년 이상 6년 이하 징역 또는 1,000만원~3,000만원 벌금.</li>\n<li><strong>측정거부 재범</strong> — 1년 이상 6년 이하 징역 또는 500만원~3,000만원 벌금.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 이전 음주운전이 10년 이내면 초범보다 벌금 하한·징역 하한이 모두 상향됩니다.</blockquote>',
      },
      {
        title: '누범 가중 — 형법 제35조',
        content:
          '<p><strong style="color:#1e3a5f">3년 내 금고 이상 형 집행 종료·면제 후 재범이면 형법상 누범 규정으로 추가 가중됩니다.</strong></p>\n<ul>\n<li><strong>누범 요건</strong> — 금고 이상 형 집행 종료·면제 후 3년 내 금고 이상 죄 범함.</li>\n<li><strong>형량 2배 가중</strong> — 정해진 형의 장기의 2배까지 가중 가능.</li>\n<li><strong>실형 가능성</strong> — 집행유예 받기 어렵고 실형 선고 확률 높음.</li>\n<li><strong>형 실효 무관</strong> — 형 실효 후에도 누범 적용(2025도15970 대법원 판례).</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">혐의를 받고 있다면 AI가 재범 가중·양형 감경 요소를 분석해드립니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '행정처분 — 면허 취소·결격 기간',
        content:
          '<p><strong style="color:#1e3a5f">재범 시 면허 취소와 재취득 결격 기간이 대폭 연장됩니다.</strong></p>\n<ul>\n<li><strong>2회 적발</strong> — 면허 취소 + 2년 결격.</li>\n<li><strong>3회 이상</strong> — 면허 취소 + 3년 결격.</li>\n<li><strong>음주운전 중 사고</strong> — 면허 취소 + 3~5년 결격.</li>\n<li><strong>측정거부 재범</strong> — 취소 + 2년 결격.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 행정심판·행정소송으로 결격 기간 단축은 거의 불가능하므로, 면허 재취득은 결격 기간 종료 후 계획하세요.</blockquote>',
      },
      {
        title: '양형 감경 — 가능한 대응',
        content:
          '<p><strong style="color:#1e3a5f">재범이라도 진지한 반성과 재발 방지 노력을 입증하면 집행유예 가능성이 있습니다.</strong></p>\n<ul>\n<li><strong>치료감호·알코올 치료</strong> — 알코올 의존성 진단 후 치료 이수.</li>\n<li><strong>음주운전 예방 교육</strong> — 전문 기관 프로그램 수료증.</li>\n<li><strong>가족·직장 탄원서</strong> — 재발 방지 약속 및 감독 서약 포함.</li>\n<li><strong>차량 매도·시동잠금장치</strong> — 물리적 재발 방지책 실행 증명.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 재범 사건에서는 변호인 조력 없이 벌금형·집행유예 받기 매우 어렵습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 형 실효 후에도 누범 적용',
        summary:
          '대법원 2025도15970 사건(대법원, 2026.01.29 선고)에서 법원은 금고 이상 형 집행 종료·면제 후 3년 내 재범한 경우, 이후 형의 실효 등에 관한 법률 제7조에 따라 형이 실효되었더라도 형법 제35조 제1항의 누범사유에는 여전히 해당한다고 판시했습니다.',
        takeaway:
          '과거 음주운전 형이 실효된 뒤 새 사건에서 누범 가중을 받을 수 있습니다. "시간이 지났다"는 주장만으로는 방어가 어렵습니다.',
      },
    ],
    faq: [
      {
        question: '10년이 지난 음주운전 전력도 가중처벌 대상인가요?',
        answer:
          '<strong>도로교통법 제148조의2는 10년 이내만 가중 대상입니다.</strong> 다만 형법상 누범 요건(3년 내 금고 이상)은 실효 여부와 무관하게 적용될 수 있습니다.',
      },
      {
        question: '집행유예 받을 수 있나요?',
        answer:
          '<strong>재범 사건도 진지한 반성·치료·가족 감독 등이 입증되면 가능합니다.</strong> 변호인 조력을 통한 종합적 준비가 필요합니다.',
      },
      {
        question: '벌금형으로 끝날 가능성이 있나요?',
        answer:
          '<strong>혈중 0.08% 미만·초 재범·사고 없음이 겹쳐야 가능성이 있습니다.</strong> 대부분 재범은 실형 또는 집행유예로 귀결됩니다.',
      },
      {
        question: '측정거부 재범도 같은 가중 적용인가요?',
        answer:
          '<strong>네.</strong> 측정거부 재범도 도로교통법 제148조의2에 따라 1년 이상 6년 이하 징역으로 동일한 수준의 가중 처벌을 받습니다.',
      },
      {
        question: '차량 몰수까지 되는 경우가 있나요?',
        answer:
          '<strong>상습 음주운전·사고 결합 시 범죄수익 몰수 또는 형법상 몰수 가능성이 있습니다.</strong> 재범 단계가 높아질수록 몰수 검토 비중이 커집니다.',
      },
    ],
    cta: {
      text: '음주운전 행정심판 준비서류, AI로 체크하기',
      link: '/chat?domain=dui',
    },
    internalLinks: [
      { label: '음주운전 2회 실형 방지', href: '/guide/dui/dui-second-offense-prison-avoidance' },
      { label: '2회 음주운전 처벌', href: '/guide/dui/dui-second-offense-penalty' },
      { label: '음주운전 2회 행정심판', href: '/guide/dui/dui-second-revoke-administrative-appeal' },
      { label: '혈중 농도별 처벌', href: '/guide/dui/dui-bac-penalty-by-level' },
      { label: '탄원서와 감경 요소', href: '/guide/dui/dui-leniency-petition-documents' },
    ],
  },

  // ─── 12. jeonse / jeonse-implicit-renewal-termination ───
  {
    domain: 'jeonse',
    slug: 'jeonse-implicit-renewal-termination',
    keyword: '묵시적 갱신 해지',
    questionKeyword: '묵시적으로 갱신된 전세계약을 중도 해지할 수 있나요?',
    ctaKeyword: '묵시적 갱신 해지 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '묵시적 갱신 해지 — 임차인 통지 4단계 절차 | 로앤가이드',
      description:
        '묵시적으로 갱신된 전세계약은 임차인이 언제든 해지 가능합니다. 통지부터 보증금 반환까지 4단계를 지금 확인하세요.',
    },
    intro:
      '<p>전세 만기가 다가왔는데 임대인이 아무 말 없이 지나가면 계약은 묵시적으로 갱신됩니다. 갱신된 계약은 이전과 같은 조건으로 2년이 연장되지만, 주택임대차보호법 제6조의2는 임차인의 중도 해지권을 인정합니다. 묵시적 갱신 해지 4단계 절차를 정리합니다.</p>',
    sections: [
      {
        title: '묵시적 갱신 성립 — 주임법 제6조',
        content:
          '<p><strong style="color:#1e3a5f">임대인이 계약 종료 6개월 ~ 2개월 전 사이 갱신 거절·조건 변경 통지를 하지 않으면 묵시적 갱신이 성립할 수 있습니다.</strong></p>\n<ul>\n<li><strong>통지 없음</strong> — 6개월~2개월 전 통지 미이행 시 자동 갱신.</li>\n<li><strong>동일 조건</strong> — 전세금·월세·기간(2년)이 이전과 동일.</li>\n<li><strong>갱신 거절 사유 제한</strong> — 임대인의 실거주 등 정당 사유 없이는 거절 불가.</li>\n<li><strong>계약갱신요구권과 구별</strong> — 갱신요구권(1회)과 별개, 자동 갱신은 횟수 제한 없음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "말 한 마디 없이" 지나갔다면 갱신된 것으로 간주됩니다. 임차인에게 유리한 제도입니다.</blockquote>',
      },
      {
        title: '중도 해지권 — 임차인만의 권리',
        content:
          '<p><strong style="color:#1e3a5f">주임법 제6조의2는 묵시적으로 갱신된 계약의 해지권을 임차인에게만 부여합니다.</strong></p>\n<ul>\n<li><strong>해지 통지</strong> — 임차인이 임대인에게 서면(내용증명) 해지 통지.</li>\n<li><strong>효력 발생</strong> — 통지 도달일로부터 3개월 경과 시 해지 효력.</li>\n<li><strong>임대인 해지권 없음</strong> — 임대인은 묵시적 갱신 계약을 임의 해지 불가.</li>\n<li><strong>위약금 없음</strong> — 중도 해지 시 위약금·복비 부담 없음.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 묵시적 갱신 해지 절차·보증금 반환을 분석해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '해지 통지 절차 — 4단계',
        content:
          '<p><strong style="color:#1e3a5f">해지 의사는 도달 증명이 필수이므로 내용증명·등기 우편으로 통지합니다.</strong></p>\n<ul>\n<li><strong>1단계 — 해지 의사 결정</strong> — 이사 일정·보증금 회수 일정 확인.</li>\n<li><strong>2단계 — 내용증명 발송</strong> — 임대인 주소로 해지 통지서 발송.</li>\n<li><strong>3단계 — 도달 확인</strong> — 내용증명 배달증명으로 도달일 확정.</li>\n<li><strong>4단계 — 3개월 경과</strong> — 도달일로부터 3개월 후 계약 해지 효력 발생, 보증금 반환 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 문자·카톡 통지도 유효하지만, 분쟁 대비해 내용증명 우편이 가장 안전합니다.</blockquote>',
      },
      {
        title: '보증금 반환 — 해지 효력 후 대응',
        content:
          '<p><strong style="color:#1e3a5f">해지 효력일 = 이사일 = 보증금 반환일이 일치하지 않을 때 임차권등기·보증금 반환 소송으로 대응합니다.</strong></p>\n<ul>\n<li><strong>이사와 반환 동시이행</strong> — 원칙적으로 보증금 반환과 점유 이전은 동시이행.</li>\n<li><strong>임차권등기명령</strong> — 이사 후에도 미반환 시 대항력 유지 위해 즉시 신청.</li>\n<li><strong>보증금 반환 소송</strong> — 내용증명 후 3개월 경과해도 미반환 시 소송 진행.</li>\n<li><strong>지연손해금</strong> — 반환 지연 시 연 5~12% 이자 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 보증금을 받기 전에 먼저 이사 나가면 대항력·우선변제권을 잃을 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차권등기 관련비용 상환청구 방법',
        summary:
          '대법원 2024다221455 사건(대법원, 2025.04.24 선고)에서 법원은 임차권등기명령에 따른 등기 관련 비용을 임차인이 임대인에게 상환 청구할 수 있으며, 그 행사 방법을 정리해 판시했습니다.',
        takeaway:
          '묵시적 갱신 해지 후 보증금 미반환 시 임차권등기를 신청하고 그 비용까지 임대인에게 청구할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '묵시적 갱신과 계약갱신요구권은 다른가요?',
        answer:
          '<strong>다릅니다.</strong> 묵시적 갱신은 통지 없음으로 자동 연장되는 것이고, 갱신요구권은 임차인이 1회에 한해 적극 요구하는 권리입니다.',
      },
      {
        question: '해지 통지 후 바로 이사 가도 되나요?',
        answer:
          '<strong>원칙은 3개월 경과 후 해지 효력이 발생합니다.</strong> 그 전에 이사를 가면 임대인이 임대료·관리비를 계속 청구할 수 있습니다.',
      },
      {
        question: '임대인이 해지를 거부하면 어떻게 하나요?',
        answer:
          '<strong>해지 효력은 임대인 동의 없이 발생합니다.</strong> 통지 도달 + 3개월 경과로 자동 해지되므로, 거부 의사는 법적 효과가 없습니다.',
      },
      {
        question: '중도 해지 시 복비는 누가 부담하나요?',
        answer:
          '<strong>임차인 부담이 아닙니다.</strong> 묵시적 갱신 중도 해지는 주임법상 정당한 권리 행사이므로 복비는 임대인이 부담합니다.',
      },
      {
        question: '해지 후에도 보증금을 안 주면 어떻게 하나요?',
        answer:
          '<strong>임차권등기명령을 먼저 신청하고 보증금 반환 소송을 진행하세요.</strong> 판결 확정 후 경매 신청으로 회수 가능합니다.',
      },
    ],
    cta: {
      text: '전세보증금 반환 절차, AI로 정리하기',
      link: '/chat?domain=jeonse',
    },
    internalLinks: [
      { label: '묵시적 갱신 복비 부담', href: '/guide/jeonse/jeonse-implicit-renewal-broker-fee-burden' },
      { label: '전세 계약 해지 절차', href: '/guide/jeonse/jeonse-contract-termination-procedure' },
      { label: '보증금 미반환 대응', href: '/guide/jeonse/jeonse-deposit-not-returned-response' },
      { label: '갱신 거절 대응', href: '/guide/jeonse/jeonse-renewal-landlord-refusal' },
      { label: '계약 종료 후 보증금', href: '/guide/jeonse/jeonse-deposit-return-comprehensive-guide' },
    ],
  },

  // ─── 13. jeonse / jeonse-rent-increase-dispute ───
  {
    domain: 'jeonse',
    slug: 'jeonse-rent-increase-dispute',
    keyword: '임대료 증액 분쟁',
    questionKeyword: '임대인이 갑자기 임대료를 크게 올려달라는데 가능한가요?',
    ctaKeyword: '임대료 증액 분쟁 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '임대료 증액 분쟁 — 5% 상한과 갱신 4가지 기준 | 로앤가이드',
      description:
        '임대인의 임대료 인상 요구에 어떻게 대응할지 막막하다면 5% 상한·갱신·분쟁조정 4가지 기준을 지금 확인하세요.',
    },
    intro:
      '<p>전세 만기를 앞두고 임대인이 "시세대로 5,000만원 올려달라"고 요구하면 당황스럽습니다. 주택임대차보호법은 임대료 인상 상한을 5%로 제한하지만, 새 계약·계약갱신요구권·증액 청구 각각의 규칙이 다릅니다. 임대료 증액 분쟁의 4대 기준을 정리합니다.</p>',
    sections: [
      {
        title: '5% 상한 원칙 — 주임법 제7조',
        content:
          '<p><strong style="color:#1e3a5f">주택임대차보호법 제7조는 약정 임대료의 5%를 초과하는 증액을 금지합니다.</strong></p>\n<ul>\n<li><strong>기존 계약 중 증액</strong> — 1년 이내 증액 불가, 5% 이내에서만 가능.</li>\n<li><strong>계약갱신요구권 행사 시</strong> — 임차인이 갱신요구권 사용하면 5% 상한 적용.</li>\n<li><strong>새 계약 체결 시</strong> — 5% 상한 적용 안 됨. 시세대로 협상 가능.</li>\n<li><strong>지자체 조례</strong> — 지역별 전월세 신고제·관리 특례 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임차인이 계약갱신요구권을 쓸지, 새 계약으로 가져갈지에 따라 5% 상한 적용 여부가 달라집니다.</blockquote>',
      },
      {
        title: '계약갱신요구권 — 임차인의 권리',
        content:
          '<p><strong style="color:#1e3a5f">주임법 제6조의3에 따라 임차인은 1회에 한해 2년 계약갱신을 요구할 수 있고 이 경우 5% 상한이 적용됩니다.</strong></p>\n<ul>\n<li><strong>갱신요구 기간</strong> — 만기 6개월~2개월 전 서면·문자로 갱신요구.</li>\n<li><strong>증액 한도</strong> — 기존 보증금 대비 최대 5%.</li>\n<li><strong>임대인 거절 사유</strong> — 실거주·주택 멸실·차임 연체 등 법정 사유.</li>\n<li><strong>거절 불가 원칙</strong> — 정당 사유 없는 거절은 효력 없음.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 임대료 증액 분쟁·갱신 대응을 분석해드립니다.</p>\n<a href="/chat?domain=jeonse" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증액 거부·조정 — 임차인의 대응',
        content:
          '<p><strong style="color:#1e3a5f">5% 초과 증액 요구를 거부하려면 서면으로 의사를 명확히 하고 분쟁조정 절차를 활용합니다.</strong></p>\n<ul>\n<li><strong>서면 거부</strong> — 내용증명으로 5% 초과 부분 거부 통지.</li>\n<li><strong>분쟁조정위원회</strong> — 지자체 주택임대차분쟁조정위원회 조정 신청(무료).</li>\n<li><strong>차임증감청구 소송</strong> — 민사소송으로 법원 판단.</li>\n<li><strong>공탁</strong> — 임대인이 수령 거부 시 법원에 차임 공탁.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 분쟁조정은 소송보다 빠르고 무료이므로 1차 대응으로 우선 검토하세요.</blockquote>',
      },
      {
        title: '갱신 후 재조정 — 사정변경 청구',
        content:
          '<p><strong style="color:#1e3a5f">경제 사정 변화가 크면 주임법 제7조에 따라 차임증감청구가 가능합니다.</strong></p>\n<ul>\n<li><strong>증액 청구 사유</strong> — 조세·공과금 증가, 물가 변동, 경제 사정 변화.</li>\n<li><strong>감액 청구 사유</strong> — 경제 사정 악화, 주변 시세 급락.</li>\n<li><strong>청구 주체</strong> — 임대인·임차인 모두 가능.</li>\n<li><strong>1년 제한</strong> — 증액 청구는 약정 또는 증액 후 1년 이내 재청구 불가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 임대인이 일방적으로 통보한다고 바로 인상되지 않습니다. 합의 또는 법원 결정이 있어야 효력 발생.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임대차계약 갱신 여부 판단',
        summary:
          '대법원 2024다315046 사건(대법원, 2025.03.13 선고)에서 법원은 임대차계약 갱신 여부를 판단할 때 당사자의 갱신의사, 통지 시기, 계약 내용 변경 여부 등을 종합적으로 고려해야 한다고 판시했습니다.',
        takeaway:
          '임대료 증액 분쟁은 "계약이 갱신된 것인지, 새 계약인지" 판단이 선행되어야 5% 상한 적용 여부가 결정됩니다.',
      },
    ],
    faq: [
      {
        question: '임대인이 5% 초과 증액을 계속 요구하면 어떻게 하나요?',
        answer:
          '<strong>서면으로 거부하고 분쟁조정위원회에 신청하세요.</strong> 임차인이 갱신요구권을 행사한 경우 5% 초과 증액은 법적으로 효력이 없습니다.',
      },
      {
        question: '새로 계약서 쓰면 5% 상한이 안 적용되나요?',
        answer:
          '<strong>일반적으로 안 적용됩니다.</strong> 다만 실질적으로 갱신에 해당하는 경우 법원이 갱신으로 보아 5% 상한을 적용할 수 있습니다.',
      },
      {
        question: '임차인도 임대료 감액 청구가 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 주임법 제7조에 따라 경제 사정 악화·주변 시세 하락 시 감액 청구 가능하며, 분쟁조정·소송으로 관철할 수 있습니다.',
      },
      {
        question: '증액 합의를 했는데 후회되면 철회 가능한가요?',
        answer:
          '<strong>일반적으로 불가능합니다.</strong> 다만 착오·사기·강박 등 민법상 무효·취소 사유가 있으면 다툴 수 있습니다.',
      },
      {
        question: '분쟁조정 결과에 불복할 수 있나요?',
        answer:
          '<strong>조정안 거부·불복 시 민사소송으로 진행 가능합니다.</strong> 조정 기록은 소송에서도 증거로 활용됩니다.',
      },
    ],
    cta: {
      text: '전세보증금 반환 절차, AI로 정리하기',
      link: '/chat?domain=jeonse',
    },
    internalLinks: [
      { label: '월세 전환 분쟁', href: '/guide/jeonse/jeonse-monthly-rent-conversion-dispute' },
      { label: '월세 전환 계산', href: '/guide/jeonse/jeonse-monthly-conversion-calculation' },
      { label: '묵시적 갱신 복비', href: '/guide/jeonse/jeonse-implicit-renewal-broker-fee-burden' },
      { label: '갱신 거절 대응', href: '/guide/jeonse/jeonse-renewal-landlord-refusal' },
      { label: '전세 계약 해지 절차', href: '/guide/jeonse/jeonse-contract-termination-procedure' },
    ],
  },
];
