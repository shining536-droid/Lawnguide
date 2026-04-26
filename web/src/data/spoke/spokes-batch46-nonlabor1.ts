import { SpokePage } from '../spoke-pages';

// batch46 nonlabor1 10개: fraud 5 + traffic-accident 5
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 다단계·코인·NFT 투자에 가입금·재투자금을 보낸 피해자가 유사수신·다단계 동시 적용으로 환수와 고소 절차를 정리하도록 돕는 페이지다.
// 2. 이 페이지는 콜드월렛(하드웨어 지갑) 시드구문 탈취·대리구매 사기로 비트코인을 잃은 피해자가 거래소 동결 협조·수사기관 압수절차를 빠르게 밟도록 돕는 페이지다.
// 3. 이 페이지는 정상 쇼핑몰을 가장한 위장사이트(피싱몰)에 카드·계좌결제를 한 소비자가 도메인 신고·차지백·지급정지를 동시에 진행하도록 돕는 페이지다.
// 4. 이 페이지는 친구·지인에게 돈을 빌려준 후 잠적·연락두절된 채권자가 형사 사기 vs 민사 대여금을 어떻게 분리해 추적·집행할지 정리하도록 돕는 페이지다.
// 5. 이 페이지는 결혼·교제를 빙자한 금전 갈취로 돈을 잃은 피해자가 사기죄 입증요건과 환수 절차(편취 의사·기망 입증)를 정리하도록 돕는 페이지다.
// 6. 이 페이지는 주택가 골목·진출입로에서 차량과 보행자·차량 간 사고를 당한 피해자가 과실비율과 합의 전 점검사항을 정리하도록 돕는 페이지다.
// 7. 이 페이지는 야간 자전거 운행 중 차량과 충돌해 부상을 입은 피해자가 야간 시인성·전조등 의무·보험사 대응 단계를 정리하도록 돕는 페이지다.
// 8. 이 페이지는 차량 조수석 탑승 중 급제동·추돌로 차창에 부딪쳐 부상당한 동승자가 운전자·상대차량·자동차보험을 상대로 청구할 절차를 정리하도록 돕는 페이지다.
// 9. 이 페이지는 통학버스(어린이집·유치원·학원) 사고로 자녀가 다친 보호자가 운영자·운전자·보험사 책임을 단계별로 묻고 보상받도록 돕는 페이지다.
// 10. 이 페이지는 휴대폰을 보며 무단횡단·차도 진입한 보행자와 충돌한 운전자(또는 그 보행자 가족)가 과실비율 다툼 포인트를 정리하도록 돕는 페이지다.

export const spokesBatch46Nonlabor1: SpokePage[] = [
  // ─── 1. fraud / mlm-investment-recovery ───
  {
    domain: 'fraud',
    slug: 'fraud-mlm-investment-recovery',
    keyword: '다단계 투자 환수',
    questionKeyword: '다단계·코인 투자에 보낸 돈, 어떻게 환수할 수 있나요?',
    ctaKeyword: '다단계 투자 사기 환수 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '다단계 투자 사기 5단계 환수 절차와 시한 | 로앤가이드',
      description:
        '"매달 5% 수익을 보장한다"는 다단계·코인·NFT 투자에 가입금을 송금했다가 출금이 막혔다면, 유사수신·사기 동시 적용으로 환수받는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"지인이 데려간 설명회에서 매달 5%를 준다고 해서 3천만 원을 넣었는데, 한 달 만에 출금이 막혔습니다." 다단계 투자 사기는 친밀한 관계로 의심을 무력화시키는 구조라 입금이 빠릅니다. 출금 거절 시점부터 90일 안에 유사수신행위·다단계판매업법·사기죄를 동시에 다투면 환수 가능성이 살아 있습니다. 송금 직후라면 통신사기피해환급법상 지급정지를 먼저 신청하세요.</p>',
    sections: [
      {
        title: '다단계 투자 사기 — 어떤 경우에 유사수신·사기로 다툴 수 있나',
        content:
          '<p><strong style="color:#1e3a5f">"확정수익·원금보장" 문구가 1번이라도 있으면 유사수신행위의 규제에 관한 법률 위반 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>확정수익 약속</strong> — "월 3~5% 보장", "원금 100% 보전" 등은 유사수신 핵심 징표.</li>\n<li><strong>다단계 구조</strong> — 후순위 가입자의 돈으로 선순위에게 수익 지급 시 폰지·피라미드로 검토될 수 있습니다.</li>\n<li><strong>금융감독원 미등록</strong> — fss.or.kr "제도권 금융사 조회"에서 미등록 시 유사수신 강한 정황.</li>\n<li><strong>과장 광고</strong> — 코인·NFT·해외 부동산 등 검증 어려운 자산을 내세우면 기망행위 입증이 쉬워집니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 설명회 녹취·카톡 안내문·계약서·송금내역 4가지가 갖춰지면 형사·민사 모두 진입 가능합니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 출금 거절일부터 90일 안에 끝낸다',
        content:
          '<p><strong style="color:#1e3a5f">지급정지·금감원 신고·고소·민사보전을 동시 진행해야 자산이 사라지기 전에 잡을 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 송금 직후 지급정지(3영업일 골든타임)</strong> — 통신사기피해환급법상 입금 계좌 일시정지 신청, 보이스피싱 외 일반 사기도 은행 자율조치 가능.</li>\n<li><strong>2단계 — 금감원 1332 신고</strong> — 유사수신 의심 신고 → 수사의뢰 자동 연동, 평균 30~60일 검토.</li>\n<li><strong>3단계 — 사이버수사대 형사고소</strong> — 사기·유사수신·방문판매법 위반 동시 기재, 설명회 녹취·계약서 첨부.</li>\n<li><strong>4단계 — 민사 가압류</strong> — 채무자(법인·실운영자) 부동산·계좌에 가압류 신청, 수사 진행과 별개로 자산 동결.</li>\n<li><strong>5단계 — 피해자 모임</strong> — 동일 업체 피해자 5명 이상이면 특정경제범죄 가중처벌 대상, 단체고소로 수사력 집중.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 송금시점·약속수익·운영구조를 분석해 환수 가능성을 진단해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '환수 가능성 — 자금 흐름·자산 위치별 차이',
        content:
          '<p><strong style="color:#1e3a5f">자금이 국내 법인 계좌에 남아 있는지, 코인·해외 송금됐는지에 따라 회수율이 갈립니다.</strong></p>\n<ul>\n<li><strong>국내 계좌 잔여</strong> — 가압류·지급정지로 우선 동결, 통상 환수율 30~70%.</li>\n<li><strong>코인 환전</strong> — 거래소 KYC 협조로 추적 가능, 다만 해외 거래소 환전 시 회수가 어려워질 수 있습니다.</li>\n<li><strong>실운영자 자산</strong> — 법인 외 대표·핵심운영자 개인 부동산·차량까지 가압류 검토.</li>\n<li><strong>형사 합의</strong> — 합의 시 합의금 형태로 일부 회수, 다만 "민·형사 일체 청구권 포기" 조항은 신중히 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 금융정보분석원(KoFIU) 의심거래 보고가 누적된 업체는 자금 동결 명령이 빠르게 떨어집니다.</blockquote>',
      },
      {
        title: '추천인·소개자 책임 — 본인도 가해자가 될 수 있는 경계선',
        content:
          '<p><strong style="color:#1e3a5f">상위 추천인이 단순 가입자라도, 적극 권유·수당 수령 시 공범으로 검토될 수 있습니다.</strong></p>\n<ul>\n<li><strong>단순 소개</strong> — 자신도 피해자라면 추천인이라도 사기죄 공동정범 책임은 약합니다.</li>\n<li><strong>수당 수령</strong> — 후순위 가입자 모집 대가로 수당을 받았다면 방문판매법·유사수신 공범 검토.</li>\n<li><strong>설명회 강사 활동</strong> — 설명회에서 강의·홍보를 했다면 본인 가담 정도가 커져 처벌 강화될 수 있습니다.</li>\n<li><strong>피해자 자처</strong> — 본인 피해 + 자진신고 + 수당 반환 시 양형에 유리하게 작용 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 추천 수당 수령 사실을 숨기다 적발되면 "공범 의도"로 해석되니, 처음부터 사실대로 진술하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 유사수신·사기 동시 적용과 형의 가중',
        summary:
          '대법원 2023도1014 사건(대법원, 2023.05.18 선고)에서 법원은 사기·유사수신행위의 규제에 관한 법률 위반·자본시장법 위반이 1개의 행위로 성립하는 경우 상상적 경합으로 가중 처벌해야 한다고 판시했습니다. 다단계 투자 사기 피해자도 단일 사기죄가 아닌 다중 처벌 구조로 다툴 수 있습니다.',
        takeaway: '확정수익을 약속하는 투자 권유는 단순 사기를 넘어 유사수신으로 가중 처벌될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '"코인은 합법 자산"이라는데 코인 투자도 사기로 다툴 수 있나요?',
        answer:
          '<strong>코인 자체는 합법이지만, 확정수익·원금보장 약속이 들어가면 유사수신으로 다툴 수 있습니다.</strong> 핵심은 "약속의 형태"이지 자산 종류가 아닙니다.',
      },
      {
        question: '계약서에 "원금손실 가능"이라고 적혀 있어도 사기 주장 가능한가요?',
        answer:
          '<strong>구두·SNS·설명회에서 "원금보장"을 말했다면 계약서 문구와 무관하게 기망행위가 성립할 소지가 있습니다.</strong> 녹취·카톡을 우선 확보하세요.',
      },
      {
        question: '지인이 권유한 거라 형사고소가 부담스러워요',
        answer:
          '<strong>지인이 단순 피해자라면 형사고소 대상에서 제외하고 운영진만 고소할 수 있습니다.</strong> 다만 수당을 받았다면 결정이 달라질 수 있어요.',
      },
      {
        question: '출금이 일부 됐다가 막혔는데 사기 입증이 어려운가요?',
        answer:
          '<strong>초기 일부 환급은 폰지 사기의 전형적 패턴입니다.</strong> 오히려 "신뢰를 만들기 위한 일부 지급"이 추가 입증 자료가 될 수 있어요.',
      },
      {
        question: '회수까지 평균 몇 달 걸리나요?',
        answer:
          '<strong>지급정지·가압류는 1~2주, 형사 수사는 6~12개월, 환수는 평균 1~3년 소요됩니다.</strong> 자산이 흩어지기 전 가압류 우선이 핵심입니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '유사수신 신고와 환수 절차', href: '/guide/fraud/fraud-similar-receiving-report' },
      { label: '코인 사기 형사고소 핵심', href: '/guide/fraud/fraud-crypto-criminal-complaint' },
      { label: '가압류 신청 절차 안내', href: '/guide/fraud/fraud-provisional-attachment-guide' },
      { label: '특경법 사기 가중 기준', href: '/guide/fraud/fraud-aggravated-punishment-standard' },
      { label: '피해자 단체고소 활용', href: '/guide/fraud/fraud-collective-complaint-strategy' },
    ],
  },

  // ─── 2. fraud / bitcoin-cold-wallet-scam ───
  {
    domain: 'fraud',
    slug: 'fraud-bitcoin-cold-wallet-scam',
    keyword: '비트코인 콜드월렛 사기',
    questionKeyword: '하드웨어 지갑 시드를 도용당해 비트코인을 잃었어요',
    ctaKeyword: '콜드월렛 사기 추적 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '콜드월렛 비트코인 도난 5단계 추적·환수 절차 | 로앤가이드',
      description:
        '하드웨어 지갑 시드구문이 유출되거나 대리구매 업자가 잠적해 비트코인이 빠져나갔다면, 거래소 KYC 협조와 압수영장 절차로 추적하는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"중고로 구입한 콜드월렛에 코인을 옮겼더니, 다음 날 전 잔고가 다른 지갑으로 빠져나갔습니다." 하드웨어 지갑 시드구문 유출·대리구매 사기는 회수 난이도가 높지만, 송금 흐름을 빠르게 추적하면 거래소 KYC를 통해 인출자 신원이 드러날 수 있습니다. 인출 직후 24시간이 결정적이며, 사이버수사대 + 거래소 동시 통보가 표준입니다.</p>',
    sections: [
      {
        title: '콜드월렛 사기 — 어떤 경로로 자금이 빠져나가나',
        content:
          '<p><strong style="color:#1e3a5f">시드 노출 경로별로 처벌 구성요건이 달라집니다.</strong></p>\n<ul>\n<li><strong>중고 지갑 사용</strong> — 판매자가 사전 백업해 둔 시드로 인출, 사기죄 + 정보통신망법 위반 검토.</li>\n<li><strong>대리구매 사기</strong> — "더 싸게 사주겠다"며 대신 거래 → 대리인이 자기 지갑으로 이체. 횡령 또는 사기 검토.</li>\n<li><strong>피싱 페이지</strong> — 가짜 메타마스크·렛저 라이브 사이트로 시드구문 입력 유도, 정보통신망법·사기 동시 적용.</li>\n<li><strong>지인 위탁</strong> — "내가 잠시 보관해줄게"로 시드 양도 후 잠적, 횡령죄 우선.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 어떤 경로든 "최초 이체 트랜잭션 해시"를 캡처해야 추적이 시작될 수 있습니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 인출 발견 후 24시간이 골든타임',
        content:
          '<p><strong style="color:#1e3a5f">거래소 동결 요청은 시간 싸움입니다 — 인출자가 환전 전에 잡아야 회수 가능성이 살아 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 트랜잭션 해시 캡처</strong> — 블록체인 익스플로러(blockchair·etherscan)에서 출금 트랜잭션 ID 보존, 도착 지갑 주소 기록.</li>\n<li><strong>2단계 — 도착 지갑 거래소 식별</strong> — 일부 익스플로러는 "지갑 라벨"로 빗썸·업비트 등 거래소 입금 여부 표시.</li>\n<li><strong>3단계 — 거래소 동결 요청</strong> — 해당 거래소 고객센터에 사기 피해 신고서 + 트랜잭션 해시 송부, 임시 동결 요청.</li>\n<li><strong>4단계 — 사이버수사대 신고</strong> — 사기·정보통신망법 위반 고소장 + 거래소 협조 공문 발급 요청, 평균 처리 60~90일.</li>\n<li><strong>5단계 — 압수·수색영장</strong> — 수사기관이 거래소에 영장 집행하면 입금자 KYC(실명·계좌) 확인 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 트랜잭션 흐름·거래소 협조 가능성을 점검해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '회수 가능성 — 도착지에 따른 현실',
        content:
          '<p><strong style="color:#1e3a5f">자금이 국내 거래소·해외 거래소·믹서 중 어디로 갔는지가 회수 가능성을 결정합니다.</strong></p>\n<ul>\n<li><strong>국내 거래소 입금</strong> — KYC 의무 거래소(업비트·빗썸·코인원·코빗)에 도착 시 신원 추적 가능, 회수 가능성 가장 높음.</li>\n<li><strong>해외 KYC 거래소</strong> — 바이낸스·코인베이스 등은 인터폴·MLAT 절차로 협조 요청, 6개월~2년 소요될 수 있습니다.</li>\n<li><strong>탈중앙 지갑(개인 지갑)</strong> — KYC 정보가 없어 추적이 어려워질 수 있으나, 환전 시점에 거래소 통과하면 다시 잡힙니다.</li>\n<li><strong>믹서·터널링</strong> — 토네이도캐시 등 익명화 서비스 통과 시 추적이 사실상 어려워지는 경우가 많습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 24시간 내 거래소에 신고하면 "AML 의심거래"로 일시 동결되는 경우가 많습니다.</blockquote>',
      },
      {
        title: '예방·재발 방지 — 다시 옮기기 전에 점검할 것',
        content:
          '<p><strong style="color:#1e3a5f">시드 노출이 의심되면 남은 자산은 즉시 새 지갑으로 옮겨야 추가 피해를 막을 수 있습니다.</strong></p>\n<ul>\n<li><strong>새 시드 생성</strong> — 도난당한 시드는 영구 노출 상태로 보고 폐기, 새 하드웨어 지갑 + 새 시드 발급.</li>\n<li><strong>패스프레이즈 추가</strong> — 시드 + 패스프레이즈 조합은 시드만 알아도 인출이 어려워질 수 있습니다.</li>\n<li><strong>다중 서명(멀티시그)</strong> — 2-of-3 멀티시그로 단일 시드 노출만으로는 인출 불가하게 설정.</li>\n<li><strong>거래 알림 설정</strong> — 거래소·익스플로러 푸시 알림으로 인출 즉시 감지 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 중고로 산 하드웨어 지갑은 절대 그대로 사용하지 말고 가능한 한 펌웨어 초기화 후 새 시드를 생성하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 가상자산 거래소 전자지갑 압수의 적법성',
        summary:
          '대법원 2025모45 결정(대법원, 2025.12.11 선고)에서 법원은 가상자산 거래소의 전자지갑에 연결된 비트코인을 수사기관이 압수하는 것은 압수의 객체와 방법이 정당하다면 적법하다고 판시했습니다. 거래소 입금 코인은 영장으로 추적·압수할 수 있다는 명확한 근거입니다.',
        takeaway:
          '도난 코인이 거래소로 입금되면 수사기관 영장으로 즉시 동결·환수가 가능합니다.',
      },
    ],
    faq: [
      {
        question: '시드구문을 본인이 노출했어도 사기로 인정되나요?',
        answer:
          '<strong>유출 경위가 기망(가짜 사이트·대리구매 사칭)이라면 본인 입력이라도 사기죄가 성립할 수 있습니다.</strong> 입력을 유도한 페이지·문자가 핵심 증거입니다.',
      },
      {
        question: '도착 지갑이 개인 지갑이면 회수가 불가능한가요?',
        answer:
          '<strong>지금 당장은 어렵더라도, 환전 시점에 거래소를 통과하면 다시 추적이 가능합니다.</strong> 사건은 살려두는 게 중요해요.',
      },
      {
        question: '국내 거래소가 동결을 거부하면 어떻게 하나요?',
        answer:
          '<strong>수사기관 압수영장 발부가 표준 경로입니다.</strong> 거래소는 자율 동결에 신중하므로, 수사 진행 후 영장으로 강제 가능합니다.',
      },
      {
        question: '해외 거래소면 영장 집행이 가능한가요?',
        answer:
          '<strong>형사사법공조(MLAT)·인터폴 협조로 가능하지만 시간이 오래 걸립니다.</strong> 거래소 자체 컴플라이언스 채널 동시 활용이 효과적입니다.',
      },
      {
        question: '피해 금액이 작은데도 신고할 가치가 있나요?',
        answer:
          '<strong>동일 가해자 다수 피해자 결합 시 사건이 커집니다.</strong> 피해 금액이 작아도 트랜잭션 해시 보존 + 신고는 해두는 것이 좋습니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '코인 사기 형사고소 핵심', href: '/guide/fraud/fraud-crypto-criminal-complaint' },
      { label: '거래소 동결 요청 절차', href: '/guide/fraud/fraud-exchange-freeze-request' },
      { label: '피싱 사이트 신고 방법', href: '/guide/fraud/fraud-phishing-site-report' },
      { label: '정보통신망법 위반 정리', href: '/guide/fraud/fraud-icn-violation-overview' },
      { label: '사이버수사대 고소 가이드', href: '/guide/fraud/fraud-cyber-investigation-guide' },
    ],
  },

  // ─── 3. fraud / fake-online-shopping-mall ───
  {
    domain: 'fraud',
    slug: 'fraud-fake-online-shopping-mall',
    keyword: '위장 쇼핑몰 사기 환불',
    questionKeyword: '진짜 쇼핑몰 흉내낸 가짜 사이트에 결제했는데 어떻게 환불받나요?',
    ctaKeyword: '위장 쇼핑몰 사기 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '위장 쇼핑몰 사기 5단계 환불·신고 절차 | 로앤가이드',
      description:
        '진짜 브랜드 쇼핑몰을 흉내낸 위장 사이트에 카드·계좌결제 후 상품이 오지 않는다면, 도메인 신고와 차지백·지급정지를 동시에 진행하는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"검색 광고를 클릭했더니 정품몰이라며 50% 할인 중이라기에 결제했는데, 다음 날 사이트가 사라졌습니다." 위장 쇼핑몰(피싱몰)은 정상 브랜드 도메인을 한 글자만 바꿔 만든 가짜 사이트로, 결제 직후 잠적하는 패턴입니다. 결제일부터 60일 이내에 카드 차지백·지급정지·KISA 도메인 신고를 동시에 시작해야 회수율이 살아 있습니다.</p>',
    sections: [
      {
        title: '위장 쇼핑몰 — 어떤 점이 진짜와 다른가',
        content:
          '<p><strong style="color:#1e3a5f">5가지 표식이 위장 쇼핑몰의 결정적 단서입니다.</strong></p>\n<ul>\n<li><strong>유사 도메인</strong> — 정품몰과 1글자 차이(예: "lvuiton.com"), 최근 등록일(WHOIS 기준 30일 이내).</li>\n<li><strong>비정상 결제</strong> — 카드 결제 페이지가 없거나, 무통장입금만 가능 + 개인계좌 표시.</li>\n<li><strong>부재한 사업자정보</strong> — 하단 사업자등록번호·통신판매번호가 없거나 공정위 조회 시 미등록.</li>\n<li><strong>비현실적 할인</strong> — 시세 30% 미만 가격 + "한정수량" 카운트다운으로 결정 압박.</li>\n<li><strong>해외 IP·서버</strong> — 한국어 사이트인데 서버가 해외에 있고 SSL 인증서가 없음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 결제 전이라면 즉시 중단, 결제 후라면 60일 이내 차지백 신청이 회수의 출발점입니다.</blockquote>',
      },
      {
        title: '5단계 환불 절차 — 결제일부터 60일 안에 끝낸다',
        content:
          '<p><strong style="color:#1e3a5f">결제 수단별로 회수 채널이 달라 동시 진행이 안전합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사이트 보존(즉시)</strong> — URL·결제 화면·이메일 영수증·송장번호를 PDF로 저장, 사이트 폐쇄 전 캡처가 핵심.</li>\n<li><strong>2단계 — 카드사 차지백</strong> — 결제일부터 60일 내 신청, 가품·미배송·기망 사실 첨부 시 승인율 상승.</li>\n<li><strong>3단계 — 무통장입금 지급정지</strong> — 입금 후 3영업일 내 은행에 통신사기피해환급법 신청, 계좌 일시동결.</li>\n<li><strong>4단계 — 사이버수사대 신고</strong> — 사기·정보통신망법 위반 고소, 한국인터넷진흥원(KISA) 동시 신고로 도메인·서버 차단 요청.</li>\n<li><strong>5단계 — 한국소비자원 분쟁조정</strong> — 국제거래라도 한국 결제수단이면 1372 상담 후 분쟁조정 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 결제 수단·도메인 정보·신고 우선순위를 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '도메인·서버 차단 — KISA·통신심의위 활용',
        content:
          '<p><strong style="color:#1e3a5f">사이트가 살아있는 동안 신고하면 추가 피해를 막을 수 있습니다.</strong></p>\n<ul>\n<li><strong>KISA 보호나라(boho.or.kr)</strong> — 피싱·악성 사이트 신고 → 24~72시간 내 ISP 차단 검토.</li>\n<li><strong>방심위(통신심의위원회)</strong> — 위장 쇼핑몰은 통신물 시정요구 대상, 평균 7~14일 처리.</li>\n<li><strong>공정위 사기성 거래</strong> — 전자상거래법 위반 신고 → 사업자 명단 공개·과태료.</li>\n<li><strong>네이버·구글 광고 신고</strong> — 검색광고로 유입됐다면 광고 차단 신고 → 광고주 환불 책임 압박.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 검색광고를 통해 들어간 경우 광고 플랫폼(네이버·카카오)에 환불 책임을 묻는 보조 절차도 가능합니다.</blockquote>',
      },
      {
        title: '회수 가능성 — 결제 수단별 현실',
        content:
          '<p><strong style="color:#1e3a5f">신용카드는 가장 회수율이 높고, 무통장입금은 시간 싸움입니다.</strong></p>\n<ul>\n<li><strong>신용카드</strong> — 60일 차지백 + 가맹점 분쟁조정, 회수 가능성 가장 높음.</li>\n<li><strong>간편결제(페이)</strong> — 카카오페이·네이버페이 자체 분쟁조정, 7일 내 신청 시 결제 보류 가능.</li>\n<li><strong>무통장입금</strong> — 3영업일 내 지급정지 신청, 잔액 있을 때만 회수 가능.</li>\n<li><strong>가상화폐 결제</strong> — 회수 가능성이 가장 낮지만, KYC 거래소 통과 시 추적 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "환불 처리 중"이라며 추가 정보(주민번호·OTP)를 요구하면 2차 사기 시도이므로 절대 응하지 마세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 컴퓨터 등 정보처리장치 입력행위와 사기죄 성립',
        summary:
          '대법원 2022도1862 사건(대법원, 2026.01.29 선고)에서 법원은 정보처리장치에 정보를 입력해 처분행위자를 착오에 빠뜨린 경우 사람에 대한 기망행위에 해당해 사기죄가 성립한다고 판시했습니다. 위장 쇼핑몰처럼 가짜 정보로 소비자 결제를 유도한 행위도 동일 구조로 처벌 대상입니다.',
        takeaway:
          '온라인 가짜 정보로 소비자 결제를 유도한 행위는 명확한 사기죄 성립 요건을 갖춘 것으로 검토될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '카드사가 차지백을 거절했어요',
        answer:
          '<strong>1차 거절 후 재이의신청과 금감원 분쟁조정이 가능합니다.</strong> 가품·미배송 증빙을 보강해 재신청하세요.',
      },
      {
        question: '해외 사이트인데도 한국에서 신고가 가능한가요?',
        answer:
          '<strong>한국 카드·페이로 결제했다면 국내 절차로 충분히 진입 가능합니다.</strong> 차지백·페이 분쟁조정은 결제 수단 기준입니다.',
      },
      {
        question: '주민번호·계좌번호를 입력했는데 어떻게 보호하나요?',
        answer:
          '<strong>한국신용정보원(www.kcredit.or.kr)에 명의도용 차단 신청을 즉시 하세요.</strong> 통신사·은행 본인확인 강화도 동시에 신청합니다.',
      },
      {
        question: '사이트가 이미 사라져서 증거가 없어요',
        answer:
          '<strong>웹아카이브(archive.org) 캐시·결제 영수증·문자 알림으로 충분히 증거가 됩니다.</strong> 카드사·은행 거래내역도 핵심 자료입니다.',
      },
      {
        question: '판매자 정보가 가짜라면 누구를 고소해야 하나요?',
        answer:
          '<strong>형사고소는 "성명불상자"로 가능하며 수사기관이 IP·결제계좌를 통해 신원을 특정합니다.</strong> 본인이 가해자를 알아낼 필요는 없어요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '온라인 사기 고소 절차 정리', href: '/guide/fraud/fraud-online-purchase-procedure' },
      { label: '카드 차지백 신청 가이드', href: '/guide/fraud/fraud-card-chargeback-procedure' },
      { label: 'KISA 피싱 사이트 신고', href: '/guide/fraud/fraud-kisa-phishing-report' },
      { label: '명의도용 방어 절차', href: '/guide/fraud/fraud-identity-theft-defense' },
      { label: '소비자분쟁조정 활용법', href: '/guide/fraud/fraud-consumer-mediation-usage' },
    ],
  },

  // ─── 4. fraud / personal-loan-flight-pursuit ───
  {
    domain: 'fraud',
    slug: 'fraud-personal-loan-flight-pursuit',
    keyword: '지인 대여금 잠적 추적',
    questionKeyword: '친구에게 빌려준 돈을 안 갚고 잠적했어요',
    ctaKeyword: '지인 대여 잠적 회수 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '지인 대여금 잠적 시 형사·민사 4가지 분리 회수 | 로앤가이드',
      description:
        '친구·지인에게 돈을 빌려줬는데 갚지 않고 연락이 두절됐다면, 사기죄 고소와 민사 대여금소송을 어떻게 분리해 동시 진행할지 지금 확인하세요.',
    },
    intro:
      '<p>"오랜 친구가 잠시만 빌려달라고 해서 800만 원을 보냈는데, 두 달째 연락이 안 됩니다." 단순 채무불이행과 사기는 종이 한 장 차이입니다. 빌릴 당시 변제 의사·능력이 없었음을 입증하면 사기죄로, 그렇지 않으면 민사 대여금 청구로 진입합니다. 두 절차는 병행 가능하며, 잠적 직후 90일 안에 동시 시작이 회수율을 좌우합니다.</p>',
    sections: [
      {
        title: '사기 vs 민사 — 구분 기준',
        content:
          '<p><strong style="color:#1e3a5f">"빌릴 당시"의 변제 의사·능력 부재가 사기죄 핵심입니다.</strong></p>\n<ul>\n<li><strong>변제 의사 부재</strong> — 빌릴 당시 갚을 생각이 없었음 → 사기죄(형법 제347조).</li>\n<li><strong>변제 능력 부재</strong> — 빌릴 당시 다른 채무·연체로 갚을 능력이 없는 상태였음.</li>\n<li><strong>용도 기망</strong> — "사업자금"이라며 빌린 돈을 도박·유흥에 사용한 경우 사기 입증력 강화.</li>\n<li><strong>일반 채무불이행</strong> — 변제 의사·능력은 있었으나 사후에 어려워진 경우 → 민사로 진입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 카톡·문자에서 "빌릴 당시 채무 상태·소득"이 드러나면 사기 입증이 쉬워집니다.</blockquote>',
      },
      {
        title: '잠적자 추적 — 어디부터 시작하나',
        content:
          '<p><strong style="color:#1e3a5f">주민등록상 주소·직장이 사라져도 4가지 경로로 추적이 가능합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사실조회 신청</strong> — 민사소송 제기 후 통신사·금융기관에 사실조회로 주소·계좌 추적.</li>\n<li><strong>2단계 — 형사고소 후 수사 활용</strong> — 사기죄 고소 시 경찰이 출국금지·소재수사 수행.</li>\n<li><strong>3단계 — 신용정보회사 위탁추심</strong> — 채권추심업체 의뢰 시 주소·연락처 확보 가능, 수수료 회수금의 10~30%.</li>\n<li><strong>4단계 — SNS·계좌 흔적</strong> — 잠적 중에도 SNS 활동·페이 결제는 남아있는 경우가 많음, 캡처 보존.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 형사·민사 동시 진행 시나리오와 추적 우선순위를 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증거 보강 — 차용증이 없을 때',
        content:
          '<p><strong style="color:#1e3a5f">차용증이 없어도 4가지 자료로 대여 사실을 입증할 수 있습니다.</strong></p>\n<ul>\n<li><strong>송금 내역</strong> — 은행 거래내역서 + "차용", "빌려줌" 메모 표시.</li>\n<li><strong>카톡·문자</strong> — "다음 달까지 갚을게", "이자 5% 줄게" 등 변제 약속 문구.</li>\n<li><strong>녹취·통화 기록</strong> — 변제 약속·연체 시점 통화 녹음(본인 통화는 합법).</li>\n<li><strong>제3자 증언</strong> — 대여 당시 입회한 지인의 진술서·증인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 잠적 후 카톡 차단·전화번호 변경은 "변제 의사 부재" 정황으로 작용합니다.</blockquote>',
      },
      {
        title: '집행 단계 — 판결 받았는데도 안 갚을 때',
        content:
          '<p><strong style="color:#1e3a5f">민사 승소 후에도 자산을 찾지 못하면 회수가 어려워질 수 있어 사전 가압류가 필수입니다.</strong></p>\n<ul>\n<li><strong>재산명시 신청</strong> — 채무자에게 재산목록 제출 의무 부과, 거짓 신고 시 형사처벌.</li>\n<li><strong>재산조회</strong> — 부동산·금융계좌·자동차 일괄 조회, 법원 통한 강제 절차.</li>\n<li><strong>채무불이행자 등재</strong> — 신용평가사 등재로 카드·대출 이용 차단, 변제 압박.</li>\n<li><strong>강제집행 — 압류·추심</strong> — 급여·예금·부동산 강제집행, 가압류가 사전에 있어야 효과적.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 형사 합의금이 들어와도 "민사상 일체 청구권 포기" 조항은 신중히 검토하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 차용금 사기죄에서 변제 의사·능력 판단',
        summary:
          '대법원 2024도11686 사건(대법원, 2026.01.15 선고)에서 법원은 사기죄의 기망 여부는 차용 당시의 변제 의사·능력을 종합 판단해야 한다고 판시했습니다. 빌릴 당시의 재정 상태·다른 채무·소득을 입증하면 단순 채무불이행이 아닌 사기죄로 다툴 수 있습니다.',
        takeaway:
          '잠적 자체보다 "빌릴 당시" 변제 의사·능력의 부재 입증이 사기죄 성립 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '차용증을 받지 않았는데 사기로 고소할 수 있나요?',
        answer:
          '<strong>차용증은 필수가 아닙니다.</strong> 송금내역·카톡·녹취 중 2가지 이상이면 입증력이 충분할 수 있어요.',
      },
      {
        question: '연락두절만으로 사기죄가 성립하나요?',
        answer:
          '<strong>연락두절은 정황일 뿐, "빌릴 당시" 변제 의사·능력 부재가 핵심입니다.</strong> 그래서 빌릴 당시 재정 상태 입증이 중요해요.',
      },
      {
        question: '형사 합의금은 보통 얼마 수준인가요?',
        answer:
          '<strong>피해 원금 + 위자료 일부가 일반적입니다.</strong> 다만 합의서에 "민사 청구 포기" 조항이 들어가면 추가 회수가 막힐 수 있어요.',
      },
      {
        question: '소액(100만 원 이하)이어도 진행 가치가 있나요?',
        answer:
          '<strong>소액사건심판으로 빠르게 진행 가능합니다.</strong> 변호사 없이 본인소송 + 지급명령 활용 시 비용 부담이 적어요.',
      },
      {
        question: '잠적자가 외국으로 출국하면 회수 불가능한가요?',
        answer:
          '<strong>형사고소 시 출국금지 신청이 가능하고, 이미 출국했어도 인터폴 협조로 송환 검토가 가능합니다.</strong> 다만 일반 사기는 우선순위가 낮아 시간이 걸릴 수 있어요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '차용금 사기 입증 핵심', href: '/guide/fraud/fraud-loan-criminal-evidence' },
      { label: '민사 가압류 신청 절차', href: '/guide/fraud/fraud-provisional-attachment-guide' },
      { label: '재산명시·재산조회 활용', href: '/guide/fraud/fraud-asset-disclosure-procedure' },
      { label: '소액사건심판 본인소송', href: '/guide/small-claims/small-claims-pro-se-procedure' },
      { label: '사기 고소장 작성 핵심', href: '/guide/fraud/fraud-complaint-writing-essentials' },
    ],
  },

  // ─── 5. fraud / romance-marriage-promise-recovery ───
  {
    domain: 'fraud',
    slug: 'fraud-romance-marriage-promise-recovery',
    keyword: '결혼빙자 사기 환수',
    questionKeyword: '결혼하자며 돈을 받아간 사람, 어떻게 환수받나요?',
    ctaKeyword: '결혼빙자 사기 환수 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '결혼빙자 금전 사기 5단계 환수와 입증 절차 | 로앤가이드',
      description:
        '"결혼하자"며 사업자금·생활비·전세보증금 명목으로 돈을 받아간 상대가 잠적하거나 다른 사람과 결혼했다면, 사기죄 환수와 민사 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"3년 동안 결혼 약속을 받았고, 그동안 사업자금·전세금 명목으로 5천만 원을 보냈습니다." 결혼·교제 빙자 사기는 감정이 얽혀 신고가 늦어지지만, 빌릴 당시 결혼·변제 의사가 없었음을 입증하면 명백한 사기죄로 검토될 수 있습니다. 잠적·다른 결혼 발견 시점부터 90일 안에 사기·민사 동시 진입이 환수의 핵심입니다.</p>',
    sections: [
      {
        title: '결혼빙자 사기 — 어떤 경우에 사기죄로 다툴 수 있나',
        content:
          '<p><strong style="color:#1e3a5f">"결혼 약속" 자체가 아니라 "금전 받아갈 당시의 의사"가 사기 핵심입니다.</strong></p>\n<ul>\n<li><strong>결혼 의사 부재</strong> — 받아갈 당시 이미 다른 사람과 교제 중이었거나 결혼한 상태.</li>\n<li><strong>변제 의사 부재</strong> — "갚을게"라고 했지만 받아갈 당시 변제 능력·의사 없음.</li>\n<li><strong>용도 기망</strong> — "전세금에 보태자"고 했는데 도박·유흥에 사용한 경우.</li>\n<li><strong>다수 피해자</strong> — 동일 가해자가 여러 명에게 동시에 결혼 약속 + 금전 요구한 경우 상습사기 가중.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 카톡·SNS에 남은 "결혼 약속" 문구 + 송금 시기의 일치가 결정적 증거가 될 수 있습니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 잠적·발각 시점부터 90일 안에',
        content:
          '<p><strong style="color:#1e3a5f">증거 보존 → 송금 추적 → 형사·민사 동시 진행이 표준 순서입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보존</strong> — 카톡·SNS·이메일·통화녹음·송금내역을 PDF·USB로 시간순 정리.</li>\n<li><strong>2단계 — 신상 확인</strong> — 가해자의 결혼 여부·다른 피해자 존재를 SNS·지인 통해 확인.</li>\n<li><strong>3단계 — 사기죄 형사고소</strong> — 관할 경찰서에 고소장 + 증거 일괄 제출, 빌릴 당시 결혼·변제 의사 부재 명시.</li>\n<li><strong>4단계 — 민사 부당이득반환</strong> — 결혼 빙자 송금은 "조건 미성취 부당이득"으로 환수 청구 가능.</li>\n<li><strong>5단계 — 가압류·재산조회</strong> — 가해자 부동산·계좌 가압류, 재산명시·조회로 자산 확정.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 결혼빙자 입증 자료와 환수 가능성을 점검해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '입증 자료 — 어떤 증거가 결정적인가',
        content:
          '<p><strong style="color:#1e3a5f">"결혼 약속"과 "금전 송금"의 시간적 인접성이 사기 의도를 추정합니다.</strong></p>\n<ul>\n<li><strong>결혼 약속 표현</strong> — 카톡 "우리 내년 봄에 식 올리자", "부모님 인사드리자" 등 명시적 문구.</li>\n<li><strong>송금 명목</strong> — "전세금에 보태자", "사업자금 빌려줘", "결혼반지값" 등 결혼 관련 명목.</li>\n<li><strong>가해자의 거짓 진술</strong> — 미혼이라며 다가왔으나 실제 기혼이거나 다른 결혼 진행 중인 사실.</li>\n<li><strong>다수 피해자 진술</strong> — 동일 가해자가 다른 피해자에게도 동시 결혼 약속 + 금전 요구한 사실.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가족 등록부·혼인관계증명서 발급은 본인만 가능하지만, 수사기관은 영장으로 조회 가능합니다.</blockquote>',
      },
      {
        title: '회수 가능성 — 단순 위자료와 사기 환수의 차이',
        content:
          '<p><strong style="color:#1e3a5f">단순 위자료 청구보다 사기 환수가 회수 폭이 넓습니다.</strong></p>\n<ul>\n<li><strong>위자료(불법행위)</strong> — 정신적 손해에 한해 인정, 통상 500만~3,000만 원 수준.</li>\n<li><strong>사기 환수(부당이득)</strong> — 송금 원금 + 이자 전액 청구, 시효 10년.</li>\n<li><strong>형사 합의금</strong> — 불기소·집행유예 조건으로 합의 시 원금 + 위자료 합산 가능.</li>\n<li><strong>가압류 효과</strong> — 가해자 자산이 흩어지기 전 동결, 회수율 30~70%로 상승.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합의서에 "결혼 빙자 청구권 포기"가 들어가면 부당이득반환 청구권도 막힐 수 있어 신중히 검토하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄 기망행위와 인적 신뢰 관계의 결합',
        summary:
          '대법원 2025도15768 사건(대법원, 2026.01.15 선고)에서 법원은 인적 신뢰 관계를 이용해 거짓 사실로 금전을 받아낸 행위는 단순 채무불이행이 아닌 사기죄로 처벌해야 한다고 판시했습니다. 결혼·교제 관계를 도구로 한 금전 요구도 동일 구조로 검토 가능합니다.',
        takeaway:
          '친밀한 관계로 의심을 무력화한 후 금전을 받아낸 행위는 사기죄로 처벌될 소지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '연인 사이에 받은 돈도 환수가 되나요?',
        answer:
          '<strong>"결혼·전세금" 같은 명목이 명시됐다면 연인 관계와 무관하게 환수 청구가 가능할 수 있습니다.</strong> 단순 선물성 송금은 회수가 어려워질 수 있어요.',
      },
      {
        question: '카톡 대화가 삭제됐는데 복구 가능한가요?',
        answer:
          '<strong>카톡 백업·복구 서비스 + 데이터 포렌식으로 부분 복구가 가능합니다.</strong> 상대방 측 카톡은 수사기관 압수영장으로 확보할 수 있습니다.',
      },
      {
        question: '가해자가 기혼인 줄 모르고 보낸 돈은 어떻게 되나요?',
        answer:
          '<strong>기혼 사실을 숨긴 것 자체가 기망행위로 사기죄 입증력이 강해집니다.</strong> 본인 측 위자료 청구도 가능해질 수 있어요.',
      },
      {
        question: '시간이 3년 지났는데도 고소가 가능한가요?',
        answer:
          '<strong>사기죄 공소시효는 10년입니다.</strong> 부당이득 민사 시효도 10년이라 시간이 지나도 진입은 가능해요.',
      },
      {
        question: '가해자가 "사랑이 식어서 헤어진 것뿐"이라고 주장하면?',
        answer:
          '<strong>받아갈 당시 결혼·변제 의사가 없었음을 입증하면 사기죄가 성립할 수 있습니다.</strong> 다른 결혼 진행 정황·다수 피해자가 결정적 증거가 될 수 있어요.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '결혼·교제 사기 입증 핵심', href: '/guide/fraud/fraud-romance-evidence-essentials' },
      { label: '부당이득반환 청구 절차', href: '/guide/fraud/fraud-unjust-enrichment-claim' },
      { label: '가압류·재산조회 활용', href: '/guide/fraud/fraud-provisional-attachment-guide' },
      { label: '사기 고소장 작성 핵심', href: '/guide/fraud/fraud-complaint-writing-essentials' },
      { label: '형사 합의서 검토 포인트', href: '/guide/fraud/fraud-settlement-clause-review' },
    ],
  },

  // ─── 6. traffic-accident / driveway-collision-fault ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-driveway-collision-fault',
    keyword: '주택가 진출입 과실',
    questionKeyword: '골목길에서 차량 진출입 중 사고가 났는데 과실비율이 어떻게 되나요?',
    ctaKeyword: '주택가 진출입 과실 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '주택가 진출입 사고 4가지 과실비율 다툼 포인트 | 로앤가이드',
      description:
        '주택가 골목·주차장 진출입로에서 보행자나 다른 차량과 충돌했다면, 시야장애·서행의무 위반·일시정지 의무 위반 등 과실비율 다툼 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>"주차장에서 골목으로 나가는데 옆에서 자전거가 갑자기 튀어나와 부딪혔습니다." 주택가 진출입 사고는 시야장애·서행의무·일시정지 의무가 동시에 걸려 과실비율이 복잡합니다. 보험사가 제시하는 첫 비율은 협상 시작점일 뿐이므로, 사고 직후 블랙박스·CCTV·현장사진 3가지를 꼭 확보해 재산정 요청에 대비해야 합니다.</p>',
    sections: [
      {
        title: '진출입 사고 — 어떤 점이 과실 판단 기준인가',
        content:
          '<p><strong style="color:#1e3a5f">도로교통법 제18조·제27조의 서행·일시정지 의무 준수 여부가 핵심입니다.</strong></p>\n<ul>\n<li><strong>일시정지 의무</strong> — 도로 진입 직전 일시정지 후 좌우 확인했는지 (위반 시 기본 과실 70~90%).</li>\n<li><strong>시야장애</strong> — 주차된 차량·전봇대·울타리로 시야가 가려진 경우 진입자 가중 과실.</li>\n<li><strong>속도</strong> — 주택가는 시속 30km 제한 구역이 많고, 어린이보호구역은 30km 이하 제한.</li>\n<li><strong>경적·신호</strong> — 진입 직전 경적·라이트 점등 여부, 미사용 시 5~10% 가중.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 골목길 진출입은 "보이지 않는 영역에 대한 주의의무"가 가장 무거운 영역입니다.</blockquote>',
      },
      {
        title: '4단계 대응 — 사고 직후 무엇부터 해야 하나',
        content:
          '<p><strong style="color:#1e3a5f">현장 보존이 과실비율 협상의 출발점입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 사진·블랙박스 확보</strong> — 차량 위치·도로 폭·시야장애물·신호등 모두 사진, 블랙박스 영상은 USB로 즉시 백업.</li>\n<li><strong>2단계 — 인근 CCTV 보전 요청</strong> — 주변 상가·아파트 관리실에 보존 요청, 통상 보존기간 7~30일.</li>\n<li><strong>3단계 — 경찰 신고·인적사항 교환</strong> — 인사사고는 신고 의무, 보험처리만 하더라도 사고확인서 발급.</li>\n<li><strong>4단계 — 손해사정인·금감원 분쟁조정</strong> — 보험사 비율에 동의 어려우면 손해사정사 의뢰 또는 금감원 분쟁조정 신청.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 사고 위치·블랙박스 상황·과실비율 변동 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '과실비율 — 진출입 형태별 표준',
        content:
          '<p><strong style="color:#1e3a5f">손해보험협회 과실비율표를 기준으로 협상이 시작됩니다.</strong></p>\n<ul>\n<li><strong>차도→주차장 진입 vs 직진차</strong> — 진입자 70~80% : 직진자 20~30%, 시야 양호 시 진입자 가중.</li>\n<li><strong>주차장→차도 진출 vs 직진차</strong> — 진출자 80~90% : 직진자 10~20%, 일시정지 미이행 시 가중.</li>\n<li><strong>주택가 골목 교차</strong> — 우선도로 차량 30~40% : 비우선 차량 60~70%, 경적·서행 여부에 따라 변동.</li>\n<li><strong>보행자 충돌</strong> — 운전자 80~100% : 보행자 0~20%, 어린이·노인은 보행자 과실 더 작아질 수 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 손보협 과실비율정보포털(accident.knia.or.kr)에서 사례별 비율을 직접 조회 가능합니다.</blockquote>',
      },
      {
        title: '재산정 요청 — 협상 포인트',
        content:
          '<p><strong style="color:#1e3a5f">보험사 1차 비율은 절대값이 아니며, 5~20%까지 조정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>블랙박스·CCTV 추가 제출</strong> — 1차 비율 산정 후 추가 영상 발견 시 재산정 요청.</li>\n<li><strong>현장 재구성</strong> — 시야장애·도로 폭·표지판 위치를 측정해 사고분석서 제출.</li>\n<li><strong>금감원 분쟁조정</strong> — 양 보험사 합의 안 되면 금감원 신청, 평균 60일 소요.</li>\n<li><strong>민사소송 — 손해배상</strong> — 보험금만으로 부족하면 가해자 본인에게 추가 손해배상 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합의서 서명 전 "과실비율 동의" 조항을 확인하세요. 서명 후엔 재산정이 막힐 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 진출입로 운전자의 안전운전의무',
        summary:
          '대법원 2023노1855 사건(대전지법, 2024.10.10 선고)에서 법원은 지하주차장에서 진출하던 차량이 가속하며 광장을 가로질러 사고를 낸 경우 운전자의 안전운전 의무 위반이 인정된다고 판시했습니다. 진출입로에서는 일시정지·서행·시야 확인 의무가 무겁게 적용됩니다.',
        takeaway:
          '주차장·진출입로에서는 일시정지와 서행이 운전자 의무이며, 위반 시 과실이 크게 가중됩니다.',
      },
    ],
    faq: [
      {
        question: '블랙박스가 없는데 과실 다툼이 가능한가요?',
        answer:
          '<strong>블랙박스 없어도 인근 CCTV·현장 사진·증인 진술로 다툴 수 있습니다.</strong> 사고 즉시 주변 상가·차량 블랙박스 보전 요청이 핵심이에요.',
      },
      {
        question: '보험사가 "이 비율이 표준"이라며 조정을 거부합니다',
        answer:
          '<strong>손해보험협회 과실비율정보포털에서 직접 사례를 조회해 반박할 수 있습니다.</strong> 추가 자료 + 손해사정사 의뢰 + 금감원 분쟁조정이 표준 경로예요.',
      },
      {
        question: '주택가에서 시속 30km 넘어도 과실이 가중되나요?',
        answer:
          '<strong>제한속도 위반은 5~20% 가중 사유입니다.</strong> 어린이보호구역에서는 가중 폭이 더 클 수 있어요.',
      },
      {
        question: '경적을 울렸는데도 사고가 났으면 어떻게 되나요?',
        answer:
          '<strong>경적·라이트 점등은 과실 감경 사유입니다.</strong> 블랙박스 영상에 경적 소리가 녹음돼 있으면 결정적 증거가 될 수 있어요.',
      },
      {
        question: '소액 사고도 손해사정사를 쓸 가치가 있나요?',
        answer:
          '<strong>피해 100만 원 이상이면 손해사정사 의뢰가 효율적입니다.</strong> 그 이하라면 본인이 사례·자료를 정리해 보험사에 재산정 요청하는 것이 일반적이에요.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 과실비율 산정 기준', href: '/guide/traffic-accident/traffic-fault-ratio-standard' },
      { label: '블랙박스 영상 활용 가이드', href: '/guide/traffic-accident/traffic-dashcam-evidence-usage' },
      { label: '금감원 분쟁조정 절차', href: '/guide/traffic-accident/traffic-fss-mediation-procedure' },
      { label: '손해사정사 의뢰 시점', href: '/guide/traffic-accident/traffic-loss-adjuster-timing' },
      { label: '주차장 사고 책임 정리', href: '/guide/traffic-accident/traffic-parking-lot-liability' },
    ],
  },

  // ─── 7. traffic-accident / night-cycling-collision-fault ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-night-cycling-collision-fault',
    keyword: '야간 자전거 충돌 과실',
    questionKeyword: '야간에 자전거 타다 차에 부딪혔는데 과실은 어떻게 되나요?',
    ctaKeyword: '야간 자전거 사고 과실 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '야간 자전거 사고 5단계 과실·보상 청구 절차 | 로앤가이드',
      description:
        '야간에 자전거를 타다 차량과 충돌해 부상을 입었다면, 전조등·후미등 의무·도로 위치·차량의 안전운전 의무로 과실비율을 다투는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"퇴근길 어두운 도로를 자전거로 달리다 우회전하던 차에 부딪혔습니다." 야간 자전거 사고는 자전거 측 시인성 확보 의무와 차량 측 전방주시 의무가 동시에 다투어집니다. 자전거가 라이트 없이 달렸더라도 차량이 우회전 시 횡단보도·자전거도로 확인 의무를 게을리 했다면 차량 측 과실이 큽니다. 사고 직후 신고 + 진단 + 블랙박스 확보가 회복의 출발점입니다.</p>',
    sections: [
      {
        title: '야간 자전거 사고 — 어떤 요소가 과실에 반영되나',
        content:
          '<p><strong style="color:#1e3a5f">도로교통법 제50조 제9항(야간 등화 의무)과 차량 측 전방주시 의무가 동시에 적용됩니다.</strong></p>\n<ul>\n<li><strong>전조등·후미등 점등</strong> — 미점등 시 자전거 측 과실 10~20% 가중.</li>\n<li><strong>도로 위치</strong> — 자전거도로·길 가장자리 통행 vs 차도 중앙 → 위치에 따라 과실 5~15% 변동.</li>\n<li><strong>역주행·신호위반</strong> — 자전거의 역주행·횡단보도 횡단 시 과실 큰 폭 가중.</li>\n<li><strong>차량 측 의무</strong> — 우회전·교차로 진입 시 자전거·보행자 확인 의무, 위반 시 60~80% 책임.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자전거는 도로교통법상 "차"에 해당해 차도 통행이 원칙이지만, 안전을 위해 보도 통행이 일부 허용되는 구간이 있습니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 사고 직후부터 보상까지',
        content:
          '<p><strong style="color:#1e3a5f">자전거 운전자도 자동차보험 상대보상 청구가 가능합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 119·112 신고</strong> — 인사사고 신고 의무, 사고확인서 발급(보험청구 필수).</li>\n<li><strong>2단계 — 응급실 진료·진단서</strong> — 외상 없어도 24시간 내 검사, 뇌진탕·내장 손상 가능성 점검.</li>\n<li><strong>3단계 — 블랙박스·CCTV 확보</strong> — 차량 블랙박스 + 인근 상가·아파트 CCTV 보전 요청.</li>\n<li><strong>4단계 — 가해 차량 보험사 청구</strong> — 대인배상Ⅰ·Ⅱ로 치료비·휴업손해·위자료 청구.</li>\n<li><strong>5단계 — 후유장해·추가 청구</strong> — 6개월 후 후유장해 진단 시 추가 보상 청구 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 야간 시인성·도로 위치·과실비율을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '보상 항목 — 무엇까지 청구할 수 있나',
        content:
          '<p><strong style="color:#1e3a5f">자전거 측이 피해자라면 차량 자동차보험에서 다음 항목을 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>치료비</strong> — 응급실·입원·통원·재활 전액(과실비율 적용).</li>\n<li><strong>휴업손해</strong> — 입원·통원으로 일을 못 한 기간의 임금 손실, 일평균소득 × 일수.</li>\n<li><strong>위자료</strong> — 부상 정도·치료기간·후유장해에 따라 산정, 표준 약관 기준.</li>\n<li><strong>자전거 손해</strong> — 자전거 수리비·전손 시 시가, 헬멧·기어 손상도 청구 가능.</li>\n<li><strong>후유장해 보상금</strong> — 6개월 이후 영구 장해 진단 시 별도 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인이 가입한 운전자보험·실손보험에서도 추가 보상이 가능하니 보험증권을 모두 확인하세요.</blockquote>',
      },
      {
        title: '회수 가능성 — 자전거 보험 가입 여부에 따라',
        content:
          '<p><strong style="color:#1e3a5f">자전거 측이 가해자가 될 경우 본인 보험·합의금이 핵심이 됩니다.</strong></p>\n<ul>\n<li><strong>지자체 자전거 보험</strong> — 일부 시·구는 주민 자동가입, 보장 한도 1,500만~3,000만 원.</li>\n<li><strong>일상생활배상책임보험</strong> — 가족 누군가 가입돼 있으면 자전거 사고도 보장 가능.</li>\n<li><strong>본인 가해 시 합의금</strong> — 차량 측 손해 + 위자료, 보험 미가입 시 본인 부담.</li>\n<li><strong>형사 처벌 가능성</strong> — 자전거도 음주·뺑소니 시 도로교통법 위반으로 처벌 대상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 사고 직후 "괜찮아요"라며 인사사고 신고를 안 하면 나중에 후유장해 청구가 막힐 수 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 자전거 운전자의 주의의무와 차량 운전자의 의무 비교',
        summary:
          '대법원 2019고단1124 판결(울산지법, 2019.08.14 선고)에서 법원은 자전거도로에서 자전거를 운전하는 자의 주의의무를 인정하면서, 동시에 차량 운전자의 자전거에 대한 안전 확인 의무도 별도로 부담한다고 판시했습니다. 야간 사고는 양측 의무를 모두 따져 비율을 산정해야 합니다.',
        takeaway:
          '야간 자전거 사고는 자전거 등화 의무와 차량 전방주시 의무를 모두 점검해 과실을 다툴 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '자전거에 라이트가 없었는데 보상받을 수 있나요?',
        answer:
          '<strong>등화 미장착은 자전거 측 과실을 가중시키지만 보상이 0이 되는 것은 아닙니다.</strong> 차량 측 전방주시 의무 위반이 있으면 일정 비율 보상받을 수 있어요.',
      },
      {
        question: '자전거가 보도로 달리다 사고가 났는데 과실이 어떻게 되나요?',
        answer:
          '<strong>자전거 보도 통행은 일부 구간만 허용되고, 보행자 우선이 원칙입니다.</strong> 보도에서 보행자와 충돌 시 자전거 측 과실이 큽니다.',
      },
      {
        question: '뺑소니로 도주한 차량은 어떻게 보상받나요?',
        answer:
          '<strong>정부보장사업(자동차손해배상보장법)에서 우선 보상받을 수 있습니다.</strong> 보장한도 내에서 치료비·후유장해 보상이 가능해요.',
      },
      {
        question: '자전거 헬멧 미착용도 과실에 반영되나요?',
        answer:
          '<strong>법적 의무는 아니지만 두부 부상 시 일부 과실 반영될 수 있습니다.</strong> 실무상 보통 0~5% 수준이에요.',
      },
      {
        question: '치료가 길어질 것 같은데 합의는 언제 하면 좋나요?',
        answer:
          '<strong>치료 종결·후유장해 진단 후가 표준입니다.</strong> 보통 사고일부터 6~12개월 후 합의가 안전해요.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 과실비율 산정 기준', href: '/guide/traffic-accident/traffic-fault-ratio-standard' },
      { label: '후유장해 청구 절차', href: '/guide/traffic-accident/traffic-aftereffect-claim-procedure' },
      { label: '뺑소니 정부보장사업', href: '/guide/traffic-accident/traffic-government-guarantee-program' },
      { label: '대인배상 Ⅰ·Ⅱ 차이', href: '/guide/traffic-accident/traffic-personal-injury-coverage' },
      { label: '블랙박스 영상 활용 가이드', href: '/guide/traffic-accident/traffic-dashcam-evidence-usage' },
    ],
  },

  // ─── 8. traffic-accident / passenger-window-injury ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-passenger-window-injury',
    keyword: '조수석 차창 부상',
    questionKeyword: '조수석에 탔다가 차창에 머리를 부딪혔는데 누구에게 청구하나요?',
    ctaKeyword: '동승자 차창 부상 보상 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '조수석 동승자 차창 부상 4가지 보상 청구 경로 | 로앤가이드',
      description:
        '조수석에 탔다가 급제동·추돌로 차창에 부딪혀 부상을 입었다면, 운전자(친구·배우자)·상대 차량·자동차보험 중 누구에게 어떻게 청구하는지 지금 확인하세요.',
    },
    intro:
      '<p>"친구 차에 조수석으로 탔다가 갑자기 급정거하면서 차창에 머리를 세게 부딪혔습니다." 동승자 부상은 운전자(친구·가족)와 상대 차량 중 누구의 보험을 청구해야 할지 헷갈립니다. 단독사고면 운전자 대인배상Ⅱ, 추돌사고면 상대 차량 대인배상이 1차 청구처입니다. 사고 직후 진단·블랙박스·동승 사실 입증이 보상의 출발점이에요.</p>',
    sections: [
      {
        title: '동승자 부상 — 청구할 수 있는 4가지 경로',
        content:
          '<p><strong style="color:#1e3a5f">사고 형태(단독·추돌)와 운전자의 보험 가입 내용에 따라 청구처가 달라집니다.</strong></p>\n<ul>\n<li><strong>운전자 본인 차량의 자손담보·자배책</strong> — 단독사고 시 동승자도 청구 가능, 운전자 보험 약관 확인.</li>\n<li><strong>운전자 차량의 대인배상Ⅱ</strong> — 가족 외 동승자(친구·동료)는 운전자 대인배상Ⅱ 청구 가능, 가족은 일부 제외.</li>\n<li><strong>상대 차량 대인배상</strong> — 추돌·교차로 사고 등 상대 측 과실이 있다면 상대 차량 보험 청구.</li>\n<li><strong>본인 실손보험·운전자보험</strong> — 본인 가입 보험 추가 청구로 자기부담금 보전.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 동승자는 거의 모든 교통사고에서 가해자·운전자 보험 청구가 가능하며, 본인 과실은 안전벨트 미착용 외엔 거의 없습니다.</blockquote>',
      },
      {
        title: '4단계 대응 — 사고 직후부터 합의까지',
        content:
          '<p><strong style="color:#1e3a5f">동승 사실과 부상 인과관계를 빠르게 입증해야 합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 응급실 진료·진단서</strong> — 외상 없어도 머리 부딪힘은 24시간 내 검사 필수, MRI·CT로 뇌진탕·경부염좌 점검.</li>\n<li><strong>2단계 — 동승 사실 입증</strong> — 블랙박스 영상·교통카드 동승 기록·운전자 진술서, 사고확인서에 동승자 명시 요청.</li>\n<li><strong>3단계 — 보험 청구</strong> — 운전자 대인배상Ⅱ 또는 상대 차량 대인배상 중 과실비율에 따라 적절한 곳에 청구.</li>\n<li><strong>4단계 — 후유장해 진단</strong> — 사고 후 6개월 시점 후유장해 진단, 추가 보상 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 청구처·보상 항목·후유장해 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '안전벨트 미착용 — 보상이 깎이나요?',
        content:
          '<p><strong style="color:#1e3a5f">안전벨트 미착용은 동승자 과실로 5~30% 감액될 수 있습니다.</strong></p>\n<ul>\n<li><strong>일반 도로</strong> — 미착용 시 5~10% 감액, 부상 정도와 직접 관련 시 더 큰 감액.</li>\n<li><strong>고속도로</strong> — 미착용 자체가 도로교통법 위반, 감액 폭이 더 클 수 있음.</li>\n<li><strong>뒷좌석</strong> — 뒷좌석 안전벨트 미착용도 도로교통법상 위반, 동승자 과실 반영.</li>\n<li><strong>운전자 측 책임</strong> — 운전자가 동승자 안전벨트 착용을 확인하지 않은 책임도 일부 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 안전벨트 미착용으로 감액되더라도 청구권 자체는 살아 있으니 보상은 가능한 한 청구하세요.</blockquote>',
      },
      {
        title: '운전자가 가족·친구일 때 — 인간관계 대응',
        content:
          '<p><strong style="color:#1e3a5f">친한 사이라도 보험사 청구는 운전자 비용이 아닙니다.</strong></p>\n<ul>\n<li><strong>보험금은 보험사 부담</strong> — 운전자 자기부담금만 일부 부담, 본인 신용·보험료에 영향 적을 수 있습니다.</li>\n<li><strong>가족 동승자 제한</strong> — 대인배상Ⅱ는 동거 가족 제외, 자손담보·자배책으로 청구.</li>\n<li><strong>운전자 동의 없어도 청구 가능</strong> — 보험은 피해자가 직접 청구 가능(직접청구권).</li>\n<li><strong>합의 전 진단·치료 종결</strong> — 친한 사이라며 빨리 합의하지 말고 후유증 점검 후 결정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 운전자가 "보험으로 청구하지 말아달라"고 해도, 보험은 본인 권리이므로 청구권은 살아 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 동승자에 대한 운전자의 안전운전 의무',
        summary:
          '대법원 2017고합146 판결(광주지법, 2017.08.18 선고)에서 법원은 운전자가 동승자의 안전을 확보할 의무가 있으며 이를 게을리해 부상을 입혔다면 안전운전의무 위반으로 책임을 진다고 판시했습니다. 동승자는 운전자의 과실을 입증해 손해배상 청구가 가능합니다.',
        takeaway:
          '운전자는 동승자의 안전 확보 의무를 부담하며, 이를 위반하면 별도의 손해배상 책임이 인정될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '친구가 운전한 차에서 다쳤는데 친구가 청구하지 말라고 합니다',
        answer:
          '<strong>피해자는 직접청구권으로 보험사에 청구할 수 있습니다.</strong> 친구의 보험료 인상은 친구의 사정이고, 본인의 치료·보상은 별개입니다.',
      },
      {
        question: '안전벨트를 안 매고 있어서 보상이 어렵다고 합니다',
        answer:
          '<strong>미착용은 5~30% 감액 사유일 뿐 청구권 자체가 사라지지 않습니다.</strong> 보험사에 정확한 감액 비율 산정 근거를 요구하세요.',
      },
      {
        question: '뒷좌석에 탔는데도 청구가 가능한가요?',
        answer:
          '<strong>탑승 위치와 무관하게 동승자 보상은 가능합니다.</strong> 다만 뒷좌석 안전벨트 미착용은 일부 감액 사유일 수 있어요.',
      },
      {
        question: '치료비가 운전자 보험 한도를 초과하면 어떻게 되나요?',
        answer:
          '<strong>대인배상Ⅱ는 한도가 무제한인 경우가 많습니다.</strong> 한도 부족 시 운전자에 대해 추가 손해배상 청구가 가능해요.',
      },
      {
        question: '단독사고였는데 본인이 다친 것도 보상되나요?',
        answer:
          '<strong>운전자 자손담보·자배책에서 동승자 보상이 가능합니다.</strong> 운전자 보험 약관에서 자손담보 보장 한도를 확인하세요.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '동승자 보상 청구 절차', href: '/guide/traffic-accident/traffic-passenger-claim-procedure' },
      { label: '대인배상 Ⅰ·Ⅱ 차이', href: '/guide/traffic-accident/traffic-personal-injury-coverage' },
      { label: '안전벨트 미착용 감액', href: '/guide/traffic-accident/traffic-seatbelt-discount-rules' },
      { label: '후유장해 청구 절차', href: '/guide/traffic-accident/traffic-aftereffect-claim-procedure' },
      { label: '직접청구권 행사 방법', href: '/guide/traffic-accident/traffic-direct-claim-procedure' },
    ],
  },

  // ─── 9. traffic-accident / school-bus-injury-claim ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-school-bus-injury-claim',
    keyword: '통학버스 사고 보상',
    questionKeyword: '아이가 통학버스에서 다쳤는데 어떻게 청구하나요?',
    ctaKeyword: '통학버스 사고 보상 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '통학버스 사고 5단계 책임 추적과 보상 청구 | 로앤가이드',
      description:
        '어린이집·유치원·학원 통학버스에서 아이가 다쳤다면, 운영자·운전자·보험사 중 누구에게 어떤 순서로 청구해야 하는지 단계별 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"아이가 어린이집 통학버스에서 내리다 발을 헛디뎌 골절상을 입었습니다." 통학버스 사고는 운영자(원장·학원장)·운전자·보호 인솔자·자동차보험까지 책임 주체가 여러 갈래입니다. 도로교통법상 어린이통학버스는 일반 차량보다 높은 안전 의무를 지므로, 운영자 측 책임이 인정되는 경우가 많습니다. 사고 즉시 신고 + 진단 + 책임 주체 확인이 보상의 출발점입니다.</p>',
    sections: [
      {
        title: '통학버스 사고 — 누가 책임지나',
        content:
          '<p><strong style="color:#1e3a5f">도로교통법 제53조의 어린이통학버스 운영자·운전자 의무가 핵심입니다.</strong></p>\n<ul>\n<li><strong>운영자(원장·학원장)</strong> — 보호 인솔자 동승 의무, 안전교육 이수, 차량 안전점검 책임.</li>\n<li><strong>운전자</strong> — 어린이통학버스 안전운행 의무(승하차 안전 확인·서행), 위반 시 형사 책임.</li>\n<li><strong>보호 인솔자</strong> — 승하차 안전벨트 확인·도로 횡단 보조, 부재 시 운영자 가중책임.</li>\n<li><strong>자동차보험</strong> — 어린이통학버스도 자동차보험 가입 의무, 대인배상Ⅰ·Ⅱ 적용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 도로교통법 제53조 위반 시 형사 처벌과 함께 민사 손해배상 책임이 가중됩니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 사고 직후부터 합의까지',
        content:
          '<p><strong style="color:#1e3a5f">증거 보존과 책임 주체 확인이 핵심입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 응급실·진단서</strong> — 외상 없어도 24시간 내 진료, 어린이는 표현이 어려워 정밀검사 필요.</li>\n<li><strong>2단계 — 사고 경위 확인</strong> — 운영자·운전자에 사고경위서 요청, CCTV(버스 내부·주변) 보전 요청.</li>\n<li><strong>3단계 — 경찰 신고</strong> — 인사사고는 신고 의무, 도로교통법 제53조 위반 여부 수사기록에 남김.</li>\n<li><strong>4단계 — 보험 청구</strong> — 자동차보험 대인배상 + 운영자 영업배상책임보험 동시 청구.</li>\n<li><strong>5단계 — 후유장해 평가</strong> — 6개월 후 후유장해 진단, 어린이는 성장 후 평가 가능성도 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 책임 주체·보험 적용·아동 위자료 산정을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '보상 항목 — 어린이 사고의 특수성',
        content:
          '<p><strong style="color:#1e3a5f">어린이는 향후 가동능력 손실까지 평가해 보상 폭이 큽니다.</strong></p>\n<ul>\n<li><strong>치료비</strong> — 응급실·입원·통원·재활 전액, 향후 치료비도 추정 산정.</li>\n<li><strong>위자료</strong> — 부상 정도·치료기간·후유장해에 따라 산정, 어린이는 통상 가산.</li>\n<li><strong>가동능력 손실</strong> — 후유장해 시 성인 평균임금 기준 미래 소득 손실 산정.</li>\n<li><strong>보호자 일실수익</strong> — 부모가 간병으로 휴직한 기간의 임금 손실.</li>\n<li><strong>심리치료비</strong> — PTSD 등 정신적 후유증 치료비도 포함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 어린이 후유장해는 성장 과정에서 변동될 수 있어 일부는 성년 후 재평가 약정으로 합의하기도 합니다.</blockquote>',
      },
      {
        title: '운영자 책임 — 영업배상책임보험 활용',
        content:
          '<p><strong style="color:#1e3a5f">자동차보험 외 운영자 영업배상책임보험·시설배상책임보험을 추가 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>영업배상책임보험</strong> — 어린이집·학원 운영자 의무 가입 보험, 시설·운영상 사고 보장.</li>\n<li><strong>시설배상책임보험</strong> — 버스 외 시설 내 사고 보장, 본 사고와 별도 청구 가능.</li>\n<li><strong>화재보험 특약</strong> — 일부 운영자는 화재보험 특약으로 어린이 사고 보장 포함.</li>\n<li><strong>국가배상</strong> — 공립 어린이집·유치원이라면 국가배상법 적용 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 운영자가 "원장 사비로 처리하겠다"며 보험 청구를 막으려 하면 정식 청구를 우선하는 것이 안전합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 어린이 보호의무 위반과 운전자 처벌',
        summary:
          '대법원 2024다289680 사건(대법원, 2025.08.14 선고)에서 법원은 자동차 운전자의 안전 확인 의무는 어린이·노약자 등 보호가 필요한 보행자에 대해 더 무겁게 인정된다고 판시했습니다. 통학버스 운전자도 동일 기준이 적용되어 의무 위반 시 가중된 책임을 부담합니다.',
        takeaway:
          '어린이 사고에서 운전자·운영자의 주의의무는 일반 사고보다 무겁게 인정될 소지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '아이가 버스에서 내리다 다쳤는데 운전자 책임이 있나요?',
        answer:
          '<strong>승하차 안전 확인은 운전자·인솔자 의무입니다.</strong> 미이행 시 도로교통법 제53조 위반으로 형사·민사 책임이 동시에 발생할 수 있어요.',
      },
      {
        question: '운영자가 사적으로 합의하자고 하면 어떻게 할까요?',
        answer:
          '<strong>정식 보험 청구가 우선입니다.</strong> 사적 합의 시 후유증 발생 시 추가 청구가 막힐 수 있어요.',
      },
      {
        question: '어린이 위자료는 얼마나 되나요?',
        answer:
          '<strong>부상 정도·치료기간·후유장해에 따라 다릅니다.</strong> 일반적으로 어린이는 가산 산정되며, 후유장해 시 미래 소득 손실까지 청구 가능해요.',
      },
      {
        question: '인솔자가 없었던 점은 어떻게 다투나요?',
        answer:
          '<strong>인솔자 부재는 운영자의 명백한 의무 위반입니다.</strong> 도로교통법 제53조 위반으로 운영자 책임이 가중됩니다.',
      },
      {
        question: '보호자가 휴직하고 간병한 비용도 청구되나요?',
        answer:
          '<strong>보호자 일실수익으로 청구 가능합니다.</strong> 휴직 증명·임금명세서로 산정합니다.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '어린이통학버스 안전 의무', href: '/guide/traffic-accident/traffic-school-bus-safety-duty' },
      { label: '어린이 사고 후유장해 평가', href: '/guide/traffic-accident/traffic-child-aftereffect-evaluation' },
      { label: '영업배상책임보험 활용', href: '/guide/traffic-accident/traffic-business-liability-insurance' },
      { label: '보호자 일실수익 산정', href: '/guide/traffic-accident/traffic-caregiver-loss-calc' },
      { label: '국가배상 청구 절차', href: '/guide/traffic-accident/traffic-state-compensation-procedure' },
    ],
  },

  // ─── 10. traffic-accident / pedestrian-distracted-walk-fault ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-pedestrian-distracted-walk-fault',
    keyword: '휴대폰 보행자 과실',
    questionKeyword: '휴대폰 보면서 걷던 보행자와 차량 충돌, 과실은 어떻게 되나요?',
    ctaKeyword: '휴대폰 보행자 과실 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '휴대폰 보행자 사고 4가지 과실비율 다툼 포인트 | 로앤가이드',
      description:
        '휴대폰을 보며 걷거나 무단횡단한 보행자와 차량이 충돌했다면, 보행자 측 과실과 차량 운전자의 안전운전 의무를 어떻게 구분해 다투는지 지금 확인하세요.',
    },
    intro:
      '<p>"신호 대기 중 보행자가 휴대폰을 보며 갑자기 차도로 내려와 부딪혔습니다." 휴대폰 보행자 사고는 보행자 부주의와 운전자 전방주시 의무가 부딪히는 영역입니다. 보행자가 횡단보도 외 무단횡단했다면 과실비율이 30~50%까지 올라갈 수 있지만, 차량 운전자의 보호의무는 여전히 무겁습니다. 사고 직후 블랙박스·CCTV·진단이 비율 다툼의 출발점입니다.</p>',
    sections: [
      {
        title: '휴대폰 보행자 사고 — 어떤 요소가 비율에 반영되나',
        content:
          '<p><strong style="color:#1e3a5f">횡단 위치·신호 준수·전방 주시 여부가 핵심 변수입니다.</strong></p>\n<ul>\n<li><strong>횡단보도 vs 무단횡단</strong> — 횡단보도 내 사고는 보행자 0~10%, 무단횡단은 30~50%까지 가중.</li>\n<li><strong>신호 준수</strong> — 적신호 횡단 시 보행자 과실 큰 폭 가중, 청신호 시 보행자 보호.</li>\n<li><strong>전방 주시</strong> — 휴대폰 사용·이어폰 착용은 5~15% 가중 사유.</li>\n<li><strong>차량 측 의무</strong> — 어린이·노인·휴대폰 사용자 등 위험 신호 발견 시 즉시 감속 의무, 위반 시 가중.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 휴대폰 사용만으로는 보행자 과실이 0이 되지 않으며, 차량 측 보호의무가 우선합니다.</blockquote>',
      },
      {
        title: '4단계 대응 — 운전자 입장에서',
        content:
          '<p><strong style="color:#1e3a5f">사고 즉시 보호의무 이행과 증거 보존을 동시에 진행하세요.</strong></p>\n<ol>\n<li><strong>1단계 — 119·112 신고</strong> — 인사사고는 신고 의무, 미신고 시 도주차량 의심으로 처벌 가중.</li>\n<li><strong>2단계 — 블랙박스·CCTV 확보</strong> — 보행자 위치·휴대폰 사용 여부·횡단 시점이 모두 영상에 남아 있는지 확인.</li>\n<li><strong>3단계 — 경찰 조사 협조</strong> — 진술 시 "횡단보도가 아닌 곳", "갑자기 진입" 등 객관 사실 위주로 진술.</li>\n<li><strong>4단계 — 보험사 비율 협상</strong> — 1차 비율에 동의 어려우면 추가 자료 + 손해사정사 + 금감원 분쟁조정 활용.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 사고 영상·횡단 위치·보행자 행동을 분석해 비율 변동 가능성을 점검해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '과실비율 — 횡단 형태별 표준',
        content:
          '<p><strong style="color:#1e3a5f">손해보험협회 과실비율정보포털 기준의 일반적인 산정입니다.</strong></p>\n<ul>\n<li><strong>횡단보도 청신호 횡단</strong> — 보행자 0% : 차량 100%, 휴대폰 사용해도 거의 변동 없음.</li>\n<li><strong>횡단보도 적신호 횡단</strong> — 보행자 30~50% : 차량 50~70%, 휴대폰 사용 시 추가 가중.</li>\n<li><strong>무단횡단(횡단보도 외)</strong> — 보행자 30~70% : 차량 30~70%, 도로 폭·차량 속도에 따라 변동.</li>\n<li><strong>차도 내 보행</strong> — 보도 있는데 차도 통행 시 보행자 가중, 보도 없는 도로는 차량 가중.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 어린이·노인·장애인은 보행자 과실이 더 작아질 수 있어 과실비율 협상 시 함께 검토하세요.</blockquote>',
      },
      {
        title: '운전자 측 형사 책임 — 어디까지 지나',
        content:
          '<p><strong style="color:#1e3a5f">교통사고처리특례법 제3조의 12대 중과실 해당 여부가 핵심입니다.</strong></p>\n<ul>\n<li><strong>중과실 미해당</strong> — 일반 사고는 종합보험 가입 시 형사 합의·면책 가능성 큼.</li>\n<li><strong>횡단보도 사고</strong> — 횡단보도 내 사고는 12대 중과실, 종합보험 무관 형사 처벌 검토.</li>\n<li><strong>스쿨존</strong> — 어린이보호구역 내 사고는 가중 처벌, 형사 합의 필수.</li>\n<li><strong>합의 효과</strong> — 피해자와 형사 합의 시 양형에 유리하게 반영, 다만 단순 보상금 지급만으론 부족할 수 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 보행자 과실이 크더라도 운전자의 안전운전 의무가 사라지지는 않으며, 형사 처벌 가능성은 별도 판단됩니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 횡단보도 보행자에 대한 운전자 보호의무',
        summary:
          '대법원 2020도17724 판결(대법원, 2022.04.14 선고)에서 법원은 자동차 운전자가 횡단보도를 횡단하는 보행자에 대해 취해야 할 주의의무는 보행자 신호기가 없는 경우라도 무겁게 인정된다고 판시했습니다. 휴대폰 사용 보행자라도 차량 운전자의 보호의무는 동일하게 적용됩니다.',
        takeaway:
          '보행자 부주의가 있어도 운전자의 보호의무는 사라지지 않으며, 안전운전 의무 위반은 별도로 평가됩니다.',
      },
    ],
    faq: [
      {
        question: '휴대폰 보면서 횡단한 보행자도 보상을 받나요?',
        answer:
          '<strong>과실비율로 일부 감액되지만 보상은 받습니다.</strong> 휴대폰 사용은 5~15% 가중 사유일 뿐 청구권 자체는 살아 있어요.',
      },
      {
        question: '무단횡단 보행자가 사망했는데 운전자 처벌이 어디까지 가나요?',
        answer:
          '<strong>교통사고처리특례법상 종합보험 가입자라도 12대 중과실에 해당하면 형사 처벌 검토 대상입니다.</strong> 사안에 따라 합의 + 양형 협상이 핵심이에요.',
      },
      {
        question: '블랙박스에 보행자가 휴대폰을 보는 모습이 찍혔는데 어떻게 활용하나요?',
        answer:
          '<strong>과실비율 가중 자료로 보험사·법원에 제출하세요.</strong> 보행자 부주의를 입증하는 직접 증거가 될 수 있어요.',
      },
      {
        question: '보행자가 어린이·노인이면 과실이 0인가요?',
        answer:
          '<strong>0은 아니지만 보행자 과실이 매우 작게 산정될 소지가 있습니다.</strong> 통상 어린이·노인은 일반 보행자 대비 5~15% 더 보호받아요.',
      },
      {
        question: '보행자가 본인 책임이라며 합의를 거부하면 어떻게 하나요?',
        answer:
          '<strong>형사 합의는 거부할 수 있지만, 민사 손해배상은 보험으로 자동 진행됩니다.</strong> 형사는 양형 자료로 따로 정리하세요.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 과실비율 산정 기준', href: '/guide/traffic-accident/traffic-fault-ratio-standard' },
      { label: '12대 중과실과 형사 합의', href: '/guide/traffic-accident/traffic-12-major-negligence' },
      { label: '횡단보도 사고 책임', href: '/guide/traffic-accident/traffic-crosswalk-liability' },
      { label: '블랙박스 영상 활용 가이드', href: '/guide/traffic-accident/traffic-dashcam-evidence-usage' },
      { label: '스쿨존 사고 가중 처벌', href: '/guide/traffic-accident/traffic-school-zone-aggravated' },
    ],
  },
];
