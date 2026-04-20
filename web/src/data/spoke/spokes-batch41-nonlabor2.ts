import { SpokePage } from '../spoke-pages';

// batch41 nonlabor2 13개: fraud 4 + rehab 2 + bankruptcy 1 + inheritance 3 + defamation 2 + stalking 1

export const spokesBatch41Nonlabor2: SpokePage[] = [
  // ─── 1. fraud / account-freeze-recovery-steps ───
  {
    domain: 'fraud',
    slug: 'fraud-account-freeze-recovery-steps',
    keyword: '중고거래 지급정지 복구',
    questionKeyword: '중고거래 입금 때문에 지급정지됐는데 복구할 수 있나요?',
    ctaKeyword: '중고거래 지급정지 복구 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '중고거래 지급정지 복구 — 해제 절차 5단계 | 로앤가이드',
      description:
        '중고거래 대금이 보이스피싱 피해금으로 잘못 흘러들어와 계좌가 묶였다면 어떻게 복구할까요? 해제 요건 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>중고거래로 받은 입금 때문에 내 계좌가 지급정지되는 사례가 적지 않습니다. 구매자가 보이스피싱 피해자의 돈으로 송금했다면, 내 계좌는 전기통신금융사기 특별법에 따라 즉시 묶입니다. 정당한 거래였음에도 장기 정지되면 생활이 흔들리므로, 복구 절차를 빠르게 진행해야 합니다. 중고거래 지급정지 해제 5단계를 정리합니다.</p>',
    sections: [
      {
        title: '지급정지의 법적 구조와 초기 확인',
        content:
          '<p><strong style="color:#1e3a5f">지급정지는 전기통신금융사기 피해 방지 및 환급에 관한 특별법 제4조에 근거합니다.</strong></p>\n<ul>\n<li><strong>정지 대상</strong> — 피해자가 신고한 입금 계좌 및 연결 계좌.</li>\n<li><strong>기간</strong> — 원칙적으로 2개월 + 연장. 방치 시 장기간 지속.</li>\n<li><strong>해제 루트</strong> — 이의신청 + 피해자 합의 + 거래 정당성 입증.</li>\n<li><strong>초기 확인</strong> — 은행에 사건번호·담당 경찰서·피해자 개요 문의.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 지급정지는 "누명"이 아니라 "임시 안전조치"이므로, 거래 정당성을 스스로 입증해야 풀립니다.</blockquote>',
      },
      {
        title: '해제 5단계 진행 절차',
        content:
          '<p><strong style="color:#1e3a5f">빠르게 움직여야 해제가 가능하고 형사 혐의 리스크도 줄어듭니다.</strong></p>\n<ul>\n<li><strong>1단계</strong> — 거래 증빙 수집: 중고거래 채팅·거래글 캡처·배송 영수증·물품 사진.</li>\n<li><strong>2단계</strong> — 피해자 연락 시도: 경찰·은행 경유해 오해 해명, 합의서 확보.</li>\n<li><strong>3단계</strong> — 이의신청서 제출: 은행·관할 경찰서 민원실에 거래 경위 설명.</li>\n<li><strong>4단계</strong> — 경찰 조사 협조: 참고인 조사 시 일관된 진술로 선의 입증.</li>\n<li><strong>5단계</strong> — 해제 + 재발 방지: 다른 거래도 공개 플랫폼·안전거래 이용.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 중고거래 지급정지 해제 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증빙 — 어떤 자료가 해제를 앞당기는가',
        content:
          '<p><strong style="color:#1e3a5f">은행과 수사기관이 납득할 객관 자료를 시간 순으로 정리해야 합니다.</strong></p>\n<ul>\n<li><strong>거래 플랫폼 로그</strong> — 당근·번개장터 등 거래글·채팅·거래완료 표시.</li>\n<li><strong>배송·운송 기록</strong> — 택배 송장번호, 배송완료 문자, CCTV(직접 전달 시).</li>\n<li><strong>물품 실물 증빙</strong> — 구매 당시 사진·영수증·시리얼넘버.</li>\n<li><strong>통신 기록</strong> — 카카오톡·문자 등 대화 연속성.</li>\n<li><strong>피해자 진술</strong> — "물건을 받은 사실 있다"는 피해자 확인이 가장 강력.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 해제 요청서는 단편 자료가 아닌 "시간순 타임라인 + 자료 색인"으로 제출하면 신뢰도가 올라갑니다.</blockquote>',
      },
      {
        title: '복구 실패·장기 지연 시 대응 경로',
        content:
          '<p><strong style="color:#1e3a5f">해제가 지연되면 후속 구제 루트를 병행해야 합니다.</strong></p>\n<ul>\n<li><strong>금감원 분쟁조정</strong> — 은행 해제 지체 시 분쟁조정위원회 신청.</li>\n<li><strong>행정심판·행정소송</strong> — 지급정지 처분 자체 다툴 여지.</li>\n<li><strong>민사 구상</strong> — 피해자에게 돈이 반환된 경우 거래대금 회수 소송.</li>\n<li><strong>형사 방어</strong> — 사기방조·전자금융거래법 혐의로 전환될 가능성 대비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "어차피 시간이 지나면 풀린다"는 접근은 위험합니다. 신용정보 등재·추가 혐의 확대 가능성이 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 보이스피싱 피해금 유입 계좌의 해제 판단',
        summary:
          '대법원 2025도14142 사건(대법원, 2026.01.15 선고)에서 법원은 보이스피싱 피해금이 경유한 계좌의 명의인이 거래 경위와 선의를 입증한 경우, 지급정지 해제 및 불송치가 가능하며, 전자금융거래법 위반의 고의가 없다고 판시했습니다.',
        takeaway:
          '실제 거래와 물품 이동이 있었다면 선의 입증이 충분하고, 해제와 불송치가 동시에 가능합니다.',
      },
    ],
    faq: [
      {
        question: '해제까지 얼마나 걸리나요?',
        answer:
          '<strong>빠른 경우 1~2주, 피해자 합의가 어려우면 2개월 이상 걸릴 수 있습니다.</strong> 증빙 완비 + 피해자 접촉이 관건입니다.',
      },
      {
        question: '피해자가 연락 거부하면 해제가 불가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 피해자 합의가 없어도 거래 정당성이 객관적으로 입증되면 은행·경찰 판단으로 해제될 수 있습니다.',
      },
      {
        question: '지급정지 기록이 신용점수에 남나요?',
        answer:
          '<strong>대부분 남지 않습니다.</strong> 다만 형사 혐의 확정 시 신용정보 등재 및 금융거래 제한이 따릅니다.',
      },
      {
        question: '해제 전 다른 은행 계좌를 새로 만들 수 있나요?',
        answer:
          '<strong>원칙적으로 가능하지만 일부 은행은 제한할 수 있습니다.</strong> 주거래 은행 변경 전 금융결제원·신용정보원 기록 확인 권장.',
      },
      {
        question: '경찰 조사에서 뭐라고 진술해야 하나요?',
        answer:
          '<strong>거래 경위를 시간순으로 일관되게 진술하세요.</strong> 답변을 뒤집으면 방조·대여 의심이 커집니다. 조사 전 변호사 상담 권장.',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '계좌 지급정지 48시간 대응', href: '/guide/fraud/fraud-account-freeze-48hr-response' },
      { label: '중고거래 사기 형사 우선 대응', href: '/guide/fraud/secondhand-fraud-criminal-before-civil' },
      { label: '대포통장 가담 혐의 방어', href: '/guide/fraud/fraud-voice-phishing-money-mule-defense' },
      { label: '사기 피의자 조사 대응', href: '/guide/fraud/fraud-suspect-interrogation-mistakes' },
      { label: '보이스피싱 피해자 구제법', href: '/guide/fraud/fraud-voice-phishing-relief-law-application' },
    ],
  },

  // ─── 2. fraud / investment-collective-action ───
  {
    domain: 'fraud',
    slug: 'fraud-investment-collective-action',
    keyword: '투자사기 집단 대응',
    questionKeyword: '투자사기 피해자끼리 모여서 같이 대응할 수 있나요?',
    ctaKeyword: '투자사기 집단 대응 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '투자사기 집단 대응 — 피해자 모임 6단계 정리 | 로앤가이드',
      description:
        '투자사기 피해가 다수일 때 혼자 싸우면 지칩니다. 공동 고소와 집단 민사소송을 함께 진행하는 6단계를 지금 확인하세요.',
    },
    intro:
      '<p>코인·주식 리딩방·P2P·비상장 주식 투자 사기는 한 사람이 수천 명을 동시에 속이는 구조가 많습니다. 혼자서 고소·민사를 진행하면 수사 속도·회수 가능성이 제한되지만, 피해자가 모이면 수사 우선순위·공조·자산 보전 모두 달라집니다. 투자사기 집단 대응 6단계를 정리합니다.</p>',
    sections: [
      {
        title: '왜 집단 대응이 유리한가',
        content:
          '<p><strong style="color:#1e3a5f">투자사기는 다수 피해자 결합 시 수사 속도와 회수 가능성이 동시에 높아집니다.</strong></p>\n<ul>\n<li><strong>특정경제범죄법 적용</strong> — 피해액 5억 원 이상 시 가중처벌. 다수 피해자 합산으로 적용 가능.</li>\n<li><strong>상습·조직범죄 편입</strong> — 반복·조직 정황 입증 시 형량 가중.</li>\n<li><strong>자산 보전</strong> — 다수 피해자 공동 가압류·가처분으로 범인 자산 동결.</li>\n<li><strong>비용 분담</strong> — 변호사 선임·자료 수집 비용 분담으로 개별 부담 감소.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "소액이라 포기"가 가장 큰 실수입니다. 모여야 수사와 자산 확보가 가능해집니다.</blockquote>',
      },
      {
        title: '피해자 모임 구성 6단계',
        content:
          '<p><strong style="color:#1e3a5f">모임 결성 후 72시간 내 최소한의 체계를 갖춰야 수사 요청이 설득력을 가집니다.</strong></p>\n<ul>\n<li><strong>1단계</strong> — 오픈채팅·카페·디스코드 등 커뮤니티에 모임 개설.</li>\n<li><strong>2단계</strong> — 피해자 명단·피해 금액·송금 내역을 엑셀로 취합.</li>\n<li><strong>3단계</strong> — 대표 피해자 선임 + 대표 변호사 계약.</li>\n<li><strong>4단계</strong> — 공동 고소장 작성 + 사이버수사대·금융범죄수사대 제출.</li>\n<li><strong>5단계</strong> — 가해자 자산 조사 + 가압류·가처분 신청.</li>\n<li><strong>6단계</strong> — 언론·SNS로 추가 피해자 모집 + 제보 통합.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 투자사기 집단 대응의 순서와 증거 준비를 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '공동 고소장 작성 — 개인 고소와의 차이',
        content:
          '<p><strong style="color:#1e3a5f">공동 고소장은 개별 고소의 단순 합계가 아니라 범죄 구조를 체계적으로 정리해야 합니다.</strong></p>\n<ul>\n<li><strong>범행 구조</strong> — 피의자 역할 분담, 수익 분배 구조, 마케팅 흐름.</li>\n<li><strong>피해자 분류</strong> — 투자 시기·경로(SNS 광고·지인 소개·리딩방)·피해금액별 분류표.</li>\n<li><strong>증거 체계</strong> — 텔레그램 방 로그, 계약서, 입금 증빙, 광고·홍보 자료, 피해자 진술서.</li>\n<li><strong>죄명 구성</strong> — 사기죄 + 특정경제범죄법 + 유사수신행위법 + 자본시장법 위반 병합.</li>\n<li><strong>수사 요청사항</strong> — 자산 추적·계좌영장·출국금지·범죄단체조직 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 고소장 말미에 "피해자 명단 색인표 + 증빙 목록 색인"을 추가하면 수사관이 자료를 빠르게 활용할 수 있습니다.</blockquote>',
      },
      {
        title: '회수 전략 — 형사·민사 병행과 공탁 배당',
        content:
          '<p><strong style="color:#1e3a5f">회수는 형사 수사 진행 상황과 연동해 민사·행정 루트를 동시에 가동해야 합니다.</strong></p>\n<ul>\n<li><strong>부패재산몰수법</strong> — 검찰이 범죄수익 몰수·추징 청구하면 피해자 우선 배당 가능.</li>\n<li><strong>배상명령</strong> — 형사재판에서 배상명령 신청으로 별도 민사 없이 집행권원 확보.</li>\n<li><strong>가압류·채권압류</strong> — 피의자 부동산·예금·급여 가압류.</li>\n<li><strong>민사 집단 손배</strong> — 공동소송·선정당사자 제도로 소송 효율화.</li>\n<li><strong>행정 제재 연계</strong> — 금감원·공정위 민원으로 인허가 취소·과징금 유도.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "손해배상만 받으면 된다"는 접근은 형량과 자산 동결 압박을 잃기 쉽습니다. 형사와 민사를 항상 병행하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 다수 피해자 투자사기의 특정경제범죄 가중',
        summary:
          '대법원 2025도11906 사건(대법원, 2026.01.15 선고)에서 법원은 다수의 피해자에게 수익 보장을 약속하고 투자금을 편취한 사안에서, 피해 규모가 특정경제범죄법 적용 기준을 넘으면 단일 사안이 아니더라도 통합 적용이 가능하며 실형 양형이 정당하다고 판시했습니다.',
        takeaway:
          '개별 피해액이 적어도 합산으로 특가법이 적용되면 실형·가중처벌이 가능하므로 집단 대응이 매우 효과적입니다.',
      },
    ],
    faq: [
      {
        question: '모임을 누가 이끌어야 하나요?',
        answer:
          '<strong>대표 피해자 2~3명과 법률대리인이 공동 운영하는 구조가 권장됩니다.</strong> 특정 1인 독단은 분란 위험이 큽니다.',
      },
      {
        question: '피해 금액이 적으면 모임에 끼지 못하나요?',
        answer:
          '<strong>아닙니다.</strong> 소액 피해자도 피해자 명단에 올라 총 피해 규모를 키우는 중요한 역할을 합니다.',
      },
      {
        question: '변호사 비용은 어떻게 분담하나요?',
        answer:
          '<strong>인당 균등 분담 또는 피해액 비례 방식이 일반적입니다.</strong> 선임계약서에 분담 방식·성공보수를 명시하세요.',
      },
      {
        question: '가해자가 이미 돈을 썼다면 회수 불가인가요?',
        answer:
          '<strong>제3자 명의 자산(가족·법인) 추적이 핵심입니다.</strong> 명의신탁·증여 정황이 있으면 사해행위 취소 소송으로 회수 가능.',
      },
      {
        question: '언론 제보는 해도 되나요?',
        answer:
          '<strong>피의자 명예훼손 위험에 주의하세요.</strong> 사실관계에 기초한 피해 사실 공개는 허용되지만, 과장·추측 표현은 삼가야 합니다.',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: 'SNS 투자 사기 대응', href: '/guide/fraud/fraud-sns-investment-scam-response' },
      { label: '투자 사기 증거 수집', href: '/guide/fraud/investment-fraud-evidence-collection' },
      { label: '투자 사기 형사·민사 선택', href: '/guide/fraud/investment-fraud-criminal-vs-civil' },
      { label: '가상자산 투자 사기 신고', href: '/guide/fraud/fraud-crypto-investment-scam-report' },
      { label: '다단계 투자 구조 분석', href: '/guide/fraud/fraud-investment-mlm-structure' },
    ],
  },

  // ─── 3. fraud / voice-phishing-money-laundering-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-voice-phishing-money-laundering-defense',
    keyword: '자금세탁 알바 혐의 방어',
    questionKeyword: '고수익 알바로 돈 옮긴 일로 자금세탁 조사를 받게 됐어요',
    ctaKeyword: '자금세탁 알바 혐의 방어 점검',
    type: '혐의방어형',
    perspective: 'accused',
    meta: {
      title: '자금세탁 알바 혐의 방어 — 조사 전 체크 5가지 | 로앤가이드',
      description:
        '고수익 아르바이트로 현금을 옮기거나 환전했다가 자금세탁 혐의로 조사받는다면 어떻게 방어할까요? 조사 전 5가지 체크를 지금 확인하세요.',
    },
    intro:
      '<p>"현금 수거" "환전 아르바이트" "해외 송금 대행" 이라는 말에 응했다가 보이스피싱 자금세탁의 말단 역할로 걸리는 사례가 급증하고 있습니다. 범죄수익은닉의규제및처벌등에관한법률 위반·사기방조·전자금융거래법 위반이 결합돼 초범이라도 실형 선고 사례가 많습니다. 혐의를 받고 있다면 조사 전 준비가 형량을 좌우하는 5가지 체크를 정리합니다.</p>',
    sections: [
      {
        title: '자금세탁 알바의 법적 구조',
        content:
          '<p><strong style="color:#1e3a5f">단순 심부름이라도 다음 법령이 중첩 적용됩니다.</strong></p>\n<ul>\n<li><strong>범죄수익은닉규제법 제3조</strong> — 범죄수익의 가장·은닉, 5년 이하 징역 또는 3천만원 이하 벌금.</li>\n<li><strong>사기방조(형법 제32조)</strong> — 본범의 사기 실행에 기여. 정범 형량의 1/2까지 가중·감경 가능.</li>\n<li><strong>전자금융거래법 제6조</strong> — 접근매체 양도·대여 금지. 3년 이하 징역 또는 2천만원 이하 벌금.</li>\n<li><strong>특정경제범죄법</strong> — 피해 누적 5억 이상 시 가중처벌.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "몰랐다"가 아니라 "알 수 있었는지"가 쟁점입니다. 수수료·수익·절차의 비정상성이 주요 판단 요소입니다.</blockquote>',
      },
      {
        title: '조사 전 5가지 필수 체크',
        content:
          '<p><strong style="color:#1e3a5f">첫 피의자신문 진술은 법원 판단에 결정적입니다. 반드시 준비 후 출석하세요.</strong></p>\n<ul>\n<li><strong>1. 구인 경로 정리</strong> — 채용 공고 사이트·SNS·지인 소개 등 경로를 시간순으로 기록.</li>\n<li><strong>2. 대화·지시 증거</strong> — 카카오톡·텔레그램·문자 전체 복원. 삭제된 대화는 복구 요청.</li>\n<li><strong>3. 금전 흐름 정리</strong> — 받은 수수료·일당·교통비 내역.</li>\n<li><strong>4. 업무 수행 기록</strong> — 어디서·누구와·무엇을 했는지. CCTV·교통카드 기록 확보.</li>\n<li><strong>5. 변호인 선임</strong> — 형사공공변호인 또는 사선 변호사 조사 전 상담 필수.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 자금세탁 알바 혐의의 방어 포인트를 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '방어 논리 — 미필적 고의 판단 기준',
        content:
          '<p><strong style="color:#1e3a5f">법원은 "알았거나 알 수 있었는지"를 다음 요소로 판단합니다.</strong></p>\n<ul>\n<li><strong>수익의 비정상성</strong> — 하루 30~50만원 등 과도한 일당.</li>\n<li><strong>업무 절차의 비정상성</strong> — 비대면 지시, 가명 사용, 현금 수거.</li>\n<li><strong>상식적 의심</strong> — 성인이 정상 거래로 이해하기 어려운 정황.</li>\n<li><strong>반복성</strong> — 1회성 vs 반복성. 반복될수록 인식 추정 강해짐.</li>\n<li><strong>공범 관계</strong> — 조직적 구조 인지 여부.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: "몰랐다"는 막연한 주장 대신, 당시 속을 수밖에 없었던 구체적 사정(가족 급전·취업 절박감 등)을 설명해야 설득력이 있습니다.</blockquote>',
      },
      {
        title: '피해자 합의·공탁·양형 자료',
        content:
          '<p><strong style="color:#1e3a5f">합의·공탁·반성은 형량에 직접 영향을 줍니다.</strong></p>\n<ul>\n<li><strong>합의 시도</strong> — 피해자 다수면 순차 합의 진행. 소액이라도 합의서 확보.</li>\n<li><strong>형사공탁</strong> — 합의 거절 시 피해자 특정 없이 공탁으로 양형 자료 제출.</li>\n<li><strong>반성문·탄원서</strong> — 가족·고용주·학교 등의 탄원서 수집.</li>\n<li><strong>재범 방지</strong> — 현재 직장·수강증·자원봉사 등 재범 방지 계획.</li>\n<li><strong>초범·나이</strong> — 초범·청년·학생은 선처 자료로 적극 활용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 자금세탁 알바는 초범이라도 실형 위험이 크므로 집행유예 쟁취가 가장 현실적인 목표입니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 자금세탁 알바의 미필적 고의 인정',
        summary:
          '대법원 2025도14142 사건(대법원, 2026.01.15 선고)에서 법원은 보이스피싱 조직의 지시로 현금 수거·계좌 이체를 반복 수행한 피고인에게, 수익의 비정상성과 업무 절차의 비상식성을 근거로 미필적 고의를 인정하고 실형을 확정했습니다.',
        takeaway:
          '현금 수거·이체 업무 자체가 사회 통념상 의심되는 구조이므로, 반복성이 있으면 미필적 고의가 쉽게 인정됩니다.',
      },
    ],
    faq: [
      {
        question: '정말 몰랐는데 어떻게 입증하나요?',
        answer:
          '<strong>당시 구인 공고·대화 내용·업무 설명이 정상적이었음을 보여주는 자료가 필요합니다.</strong> 경로 증빙이 없으면 인정이 어렵습니다.',
      },
      {
        question: '수수료를 돌려주면 처벌 피할 수 있나요?',
        answer:
          '<strong>처벌 자체는 피할 수 없지만 양형에 유리합니다.</strong> 피해자에 환원하면 반성·피해회복 자료로 제출.',
      },
      {
        question: '미성년자·대학생도 실형이 나오나요?',
        answer:
          '<strong>가능성이 있습니다.</strong> 다만 초범·연령·가족환경을 감안해 보호처분·집행유예 쟁취 가능.',
      },
      {
        question: '수거 상대방(보이스피싱 피해자)과 직접 만나지도 않았어요',
        answer:
          '<strong>직접 대면하지 않아도 공범 구조에 편입되면 방조·공동정범으로 처벌됩니다.</strong> 조직 구조 인식 여부가 쟁점.',
      },
      {
        question: '자수하면 처벌이 줄어드나요?',
        answer:
          '<strong>임의출석·자진출석은 양형 감경 사유입니다.</strong> 다만 이미 입건된 상태라면 효과가 제한적이므로 변호인과 전략 수립.',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '대포통장 가담 혐의 대응', href: '/guide/fraud/fraud-money-mule-accused-defense' },
      { label: '보이스피싱 대포통장 방어', href: '/guide/fraud/fraud-voice-phishing-money-mule-defense' },
      { label: '사기 피의자 조사 대응', href: '/guide/fraud/fraud-suspect-interrogation-mistakes' },
      { label: '조직범죄·자금세탁', href: '/guide/fraud/fraud-organized-crime-money-laundering' },
      { label: '공범 아닌 자의 방어', href: '/guide/fraud/fraud-accomplice-unknowing-defense' },
    ],
  },

  // ─── 4. fraud / romance-scam-recovery-steps ───
  {
    domain: 'fraud',
    slug: 'fraud-romance-scam-recovery-steps',
    keyword: '로맨스 스캠 회복',
    questionKeyword: '로맨스 스캠으로 돈을 보냈는데 회수할 수 있나요?',
    ctaKeyword: '로맨스 스캠 회복 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '로맨스 스캠 회복 6단계 — 자금 추적과 고소 | 로앤가이드',
      description:
        '로맨스 스캠으로 연애 감정을 빙자한 사기를 당했다면 무엇부터 해야 할까요? 증거 확보·고소·자금 회수 6단계를 지금 확인하세요.',
    },
    intro:
      '<p>SNS·데이팅 앱·채팅방에서 시작된 연애가 갑자기 투자·의료비·관세·비자 문제로 송금을 요구하며 사기로 드러나는 사례가 급증하고 있습니다. 피해자는 감정적 충격과 수치심 때문에 신고를 미루기 쉽지만, 초기 대응이 회수 가능성을 결정합니다. 로맨스 스캠 회복 6단계를 정리합니다.</p>',
    sections: [
      {
        title: '로맨스 스캠의 구조 이해',
        content:
          '<p><strong style="color:#1e3a5f">국제 조직이 운영하는 대량 사기이며, 개인의 과실이 아닙니다.</strong></p>\n<ul>\n<li><strong>타깃 선정</strong> — SNS·데이팅 앱에서 프로필·활동 분석.</li>\n<li><strong>신뢰 구축</strong> — 수개월에 걸친 정서적 관계 형성.</li>\n<li><strong>송금 유도</strong> — 투자·수술비·관세·비자·배송료 등 다양한 명목.</li>\n<li><strong>잠적</strong> — 일정 금액 이상 받으면 계정 삭제·연락 두절.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 피해자 개인의 부주의가 아니라 조직적 구조이므로, 수치심보다 체계적 대응이 우선입니다.</blockquote>',
      },
      {
        title: '회복 6단계 대응',
        content:
          '<p><strong style="color:#1e3a5f">첫 72시간이 자금 추적·회수의 결정적 시점입니다.</strong></p>\n<ul>\n<li><strong>1단계</strong> — 모든 대화·사진·프로필 캡처 저장(상대 계정 삭제 전).</li>\n<li><strong>2단계</strong> — 송금 내역·영수증·가상자산 TxID 정리.</li>\n<li><strong>3단계</strong> — 경찰 사이버수사대 신고 + 사이버범죄신고시스템(ECRM) 접수.</li>\n<li><strong>4단계</strong> — 송금 받은 국내 계좌 지급정지 요청 + 은행 이의신청.</li>\n<li><strong>5단계</strong> — 카드 결제 시 차지백 신청, 간편결제 시 분쟁조정.</li>\n<li><strong>6단계</strong> — 피해자 커뮤니티 가입 + 공동 고소 여부 검토.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 로맨스 스캠 회수 가능성과 고소 순서를 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증거 5종 — 기록 삭제 전 확보',
        content:
          '<p><strong style="color:#1e3a5f">로맨스 스캠은 상대가 증거를 삭제하는 속도가 빠르므로 선제 캡처가 결정적입니다.</strong></p>\n<ul>\n<li><strong>프로필·계정 화면</strong> — 데이팅 앱·SNS 프로필, 닉네임·사진·메타정보.</li>\n<li><strong>대화 기록</strong> — 텔레그램·카카오톡·WhatsApp 전체 대화, 시간순 정렬.</li>\n<li><strong>송금 내역</strong> — 은행 이체·간편결제·가상자산 거래 내역.</li>\n<li><strong>영상·통화 기록</strong> — 영상통화 녹화, 음성통화 녹음(본인 녹음은 합법).</li>\n<li><strong>주변 진술</strong> — 피해자 가족·친구 등 상황을 알고 있던 사람의 진술서.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대화 캡처는 부분이 아닌 전체를 저장해야 증거 가치가 높습니다. 메신저 대화 내보내기 기능 활용.</blockquote>',
      },
      {
        title: '해외 가해자 추적 — 현실적 기대치',
        content:
          '<p><strong style="color:#1e3a5f">가해자 대다수가 해외에 있지만, 국내 경유 계좌·가상자산 거래소에서 추적 포인트가 생깁니다.</strong></p>\n<ul>\n<li><strong>국내 경유 계좌</strong> — 피해금이 국내 대포통장을 거치면 말단 조직원 검거 가능.</li>\n<li><strong>가상자산 거래소</strong> — 국내 거래소 출금 시점에서 추적·동결 가능.</li>\n<li><strong>인터폴 공조</strong> — 경찰청 국제공조과 요청, 단 시간 소요.</li>\n<li><strong>피해자 모임</strong> — 다수 피해자 결합 시 수사 우선순위 상승.</li>\n<li><strong>2차 사기 주의</strong> — "회수 전문 업체"는 대부분 2차 사기.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 로맨스 스캠 피해자를 노린 "회수 컨설팅" 전화·메일은 거의 모두 2차 사기입니다. 반드시 경찰·변호사를 통하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 로맨스 스캠의 사기죄 성립과 정서적 피해',
        summary:
          '대법원 2024다11686 사건(대법원, 2026.01.15 선고)에서 법원은 허위의 신분과 관계를 가장해 다수 피해자에게 송금을 유도한 피고인에게 사기죄 성립을 인정하고, 정서적 손해에 대한 위자료 청구를 일부 인용했습니다.',
        takeaway:
          '로맨스 스캠은 재산 피해뿐 아니라 정서적 손해에 대한 위자료 청구가 가능하며, 기망 구조가 입증되면 사기죄가 명확히 성립합니다.',
      },
    ],
    faq: [
      {
        question: '사진·영상이 진짜였는데도 사기인가요?',
        answer:
          '<strong>외국 실존 인물 사진을 도용하는 경우가 다수입니다.</strong> Google 이미지 역검색·TinEye로 출처 확인 가능.',
      },
      {
        question: '피해자끼리 어떻게 찾나요?',
        answer:
          '<strong>네이버 카페·Reddit·피해자 모임 등에서 유사 수법 피해자가 모이고 있습니다.</strong> 경찰 신고 시 동일 수법 피해자 연결 요청.',
      },
      {
        question: '가상자산으로 보냈으면 회수 불가인가요?',
        answer:
          '<strong>국내 거래소 출금 시점에서 추적·동결 가능성이 있습니다.</strong> TxID를 반드시 보존하세요.',
      },
      {
        question: '경찰에 신고하는 게 창피한데요',
        answer:
          '<strong>최근 로맨스 스캠 신고가 급증해 수사기관도 전문성을 갖추었습니다.</strong> 수치심보다 회수·처벌이 우선입니다.',
      },
      {
        question: '민사 소송으로 위자료도 받을 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 재산 피해 + 정신적 손해(위자료)를 함께 청구할 수 있으며, 해외 가해자도 국내 재산이 있으면 집행 가능.',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '데이팅 앱 금전 피해', href: '/guide/fraud/fraud-dating-app-money-loss' },
      { label: '데이팅 로맨스 스캠 증거', href: '/guide/fraud/fraud-dating-romance-scam-evidence' },
      { label: 'SNS 투자 사기 대응', href: '/guide/fraud/fraud-sns-investment-scam-response' },
      { label: '가상자산 믹서 추적', href: '/guide/fraud/fraud-crypto-mixer-tracing-steps' },
      { label: '사기 고소 준비서류', href: '/guide/fraud/fraud-complaint-required-documents' },
    ],
  },

  // ─── 5. rehabilitation / inheritance-during-repayment ───
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-inheritance-during-repayment',
    keyword: '개인회생 중 상속 재산',
    questionKeyword: '회생 변제 중에 부모님이 돌아가셔서 상속이 생기면 어떻게 되나요?',
    ctaKeyword: '회생 중 상속 재산 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '개인회생 중 상속 재산 처리 — 변제계획 4가지 경우 | 로앤가이드',
      description:
        '개인회생 변제 중 상속이 발생하면 상속 재산이 변제에 편입될까요? 상속 유형별 처리 기준과 신고 의무를 지금 확인하세요.',
    },
    intro:
      '<p>개인회생 변제를 이어가던 중 부모님·배우자의 갑작스러운 사망으로 상속이 발생하면 "이 상속 재산이 회생 변제금 증액으로 이어질까" 하는 걱정이 커집니다. 법원과 회생위원은 상속 사실을 신고받으면 변제계획 변경을 검토하며, 상속을 신고하지 않고 은닉하면 인가 취소·면책 거부 위험이 큽니다. 상속 유형별 4가지 경우를 정리합니다.</p>',
    sections: [
      {
        title: '개인회생과 상속의 법적 관계',
        content:
          '<p><strong style="color:#1e3a5f">개인회생 변제 중 발생한 상속은 "신규 재산"으로 보아 변제계획 변경 대상이 될 수 있습니다.</strong></p>\n<ul>\n<li><strong>채무자 회생법 제619조</strong> — 수입·재산 변동이 현저하면 변제계획 변경 가능.</li>\n<li><strong>상속 취득 시점</strong> — 상속 개시일(피상속인 사망일)이 기준. 이 시점 이후 재산은 채무자 소유.</li>\n<li><strong>신고 의무</strong> — 채무자는 상속 사실·재산 내역을 법원·회생위원에 지체 없이 신고.</li>\n<li><strong>은닉 위험</strong> — 미신고 시 인가 취소·면책 거부 + 사해행위 취소 대상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상속 자체가 회생을 실패로 만드는 것이 아니라, 은닉이 회생을 실패로 만듭니다.</blockquote>',
      },
      {
        title: '상속 유형별 4가지 경우',
        content:
          '<p><strong style="color:#1e3a5f">상속 재산의 성격과 상속 방식에 따라 대응이 달라집니다.</strong></p>\n<ul>\n<li><strong>경우 1: 예금·현금 상속</strong> — 즉시 현금화 가능한 재산, 변제에 일부 편입 가능성 높음.</li>\n<li><strong>경우 2: 부동산 상속</strong> — 처분 없이 보유 시 청산가치에 반영, 처분 시 변제금 증액 가능.</li>\n<li><strong>경우 3: 채무 초과 상속</strong> — 상속포기·한정승인으로 채무 인수 방지.</li>\n<li><strong>경우 4: 공동상속</strong> — 다른 상속인과 분할 협의 후 내 몫만 반영.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 회생 중 상속 처리 방향을 분석해드립니다.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '변제계획 변경 실무 — 청산가치 재계산',
        content:
          '<p><strong style="color:#1e3a5f">상속 재산이 생기면 청산가치가 재평가되며 변제율·기간이 조정될 수 있습니다.</strong></p>\n<ul>\n<li><strong>청산가치 재계산</strong> — 파산 시 채권자 배당액 기준. 상속 재산 포함해 다시 산정.</li>\n<li><strong>가용소득 유지</strong> — 월 변제액은 가용소득 기준이지만, 청산가치 최소 보장 요구.</li>\n<li><strong>일시변제 옵션</strong> — 상속 재산을 일부 투입해 변제 조기 종료 협의 가능.</li>\n<li><strong>채권자 이의</strong> — 상속 재산 규모가 크면 채권자가 이의 제기할 수 있음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상속 재산을 부분적으로 투입해 변제를 조기 종료하면 신용회복과 이자 부담 절감에 유리할 수 있습니다.</blockquote>',
      },
      {
        title: '상속 포기·한정승인 — 회생 중에도 가능한가',
        content:
          '<p><strong style="color:#1e3a5f">상속 채무가 더 많으면 회생 중이어도 상속포기·한정승인이 가능합니다.</strong></p>\n<ul>\n<li><strong>숙려기간</strong> — 상속 개시를 안 날로부터 3개월 이내 가정법원 신고.</li>\n<li><strong>사해행위 위험</strong> — 재산 많은 상속을 단순히 포기해 채권자 해치면 사해행위로 볼 소지.</li>\n<li><strong>한정승인 권장</strong> — 채무·재산 판단 어려울 때 한정승인으로 안전 확보.</li>\n<li><strong>법원 보고</strong> — 상속 처리 결과(포기·승인·한정승인)를 회생 법원에 보고.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 상속 재산을 고의로 다른 가족에게 이전하면 사해행위 취소·인가 취소 위험이 큽니다. 반드시 법원·변호사와 상의.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 회생 중 상속 재산의 변제계획 편입',
        summary:
          '대법원 2022다256327 판결(대법원, 2025.05.15 선고)에서 법원은 회생 절차 중 채무자에게 발생한 상속 재산은 청산가치 보장 원칙에 따라 변제계획에 반영되어야 하며, 채무자가 이를 신고하지 않으면 인가 취소 사유가 될 수 있다고 판시했습니다.',
        takeaway:
          '회생 중 상속은 반드시 신고해야 하며, 청산가치 보장 원칙에 따라 변제계획이 재조정됩니다.',
      },
    ],
    faq: [
      {
        question: '상속받은 아파트를 팔아야 하나요?',
        answer:
          '<strong>반드시는 아닙니다.</strong> 보유한 채로 청산가치를 변제에 반영하거나, 처분 후 일시변제로 조기 종료 협의 가능.',
      },
      {
        question: '상속 신고는 언제 해야 하나요?',
        answer:
          '<strong>상속 사실을 안 날로부터 지체 없이 법원·회생위원에 신고해야 합니다.</strong> 지연되면 은닉으로 의심받습니다.',
      },
      {
        question: '상속 재산이 변제금 전액을 넘으면 바로 종결되나요?',
        answer:
          '<strong>협의에 따라 일시변제로 조기 종료 가능합니다.</strong> 다만 자동 종결이 아니라 법원 인가 절차 필요.',
      },
      {
        question: '상속 포기하면 회생에 유리한가요?',
        answer:
          '<strong>상속 채무가 많을 때만 유리합니다.</strong> 재산이 있는 상속을 일부러 포기하면 사해행위로 취소될 수 있습니다.',
      },
      {
        question: '형제와 분할 협의 중인데 금액이 확정 안 됐어요',
        answer:
          '<strong>협의 중이라는 사실과 예상 범위를 먼저 보고하세요.</strong> 확정 후 구체 금액으로 변경신청합니다.',
      },
    ],
    cta: {
      text: '개인회생 신청 자격, AI로 점검하기',
      link: '/chat?domain=rehabilitation',
    },
    internalLinks: [
      { label: '개인회생 변제계획 변경', href: '/guide/rehabilitation/rehabilitation-income-change-repayment-revision' },
      { label: '개인회생 누락 채권', href: '/guide/rehabilitation/rehabilitation-creditor-omitted-debt' },
      { label: '변제계획 종합 가이드', href: '/guide/rehabilitation/rehabilitation-repayment-plan-comprehensive' },
      { label: '한정승인 필요서류', href: '/guide/inheritance/inheritance-limited-acceptance-preparation' },
      { label: '상속 한정승인 vs 포기', href: '/guide/inheritance/inheritance-limited-vs-renounce' },
    ],
  },

  // ─── 6. rehabilitation / job-loss-payment-suspension ───
  {
    domain: 'rehabilitation',
    slug: 'rehabilitation-job-loss-payment-suspension',
    keyword: '개인회생 실직 변제 중단',
    questionKeyword: '회생 변제 중 실직해서 돈을 못 내면 어떻게 되나요?',
    ctaKeyword: '회생 실직 변제중단 대응 점검',
    type: '문제해결형',
    perspective: 'victim',
    meta: {
      title: '개인회생 실직 변제 중단 대응 — 4가지 경로 정리 | 로앤가이드',
      description:
        '개인회생 변제 중 실직해서 매달 내던 변제금을 못 내게 됐다면 어떻게 대응할까요? 변제계획 변경·유예·파산 전환 4가지 경로를 지금 확인하세요.',
    },
    intro:
      '<p>개인회생을 시작한 뒤 실직·휴직·이직 공백이 생기면 매월 변제금 납부가 막히는 상황이 발생합니다. 방치하면 변제 불이행으로 회생 폐지(실권)·채권 부활 위험이 커지지만, 법원은 실직을 소득 감소 사유로 인정하고 변제계획 변경·유예·파산 전환을 허용합니다. 대응 4가지 경로를 정리합니다.</p>',
    sections: [
      {
        title: '실직 발생 시 법적 선택지',
        content:
          '<p><strong style="color:#1e3a5f">실직은 채무자 회생법 제619조의 "수입 변동" 사유에 해당합니다.</strong></p>\n<ul>\n<li><strong>변제계획 변경</strong> — 월 변제액 감액 + 기간 연장(최대 60개월).</li>\n<li><strong>변제 유예</strong> — 일시적 유예 후 기존 계획 재개(단기 실직 시).</li>\n<li><strong>파산 전환</strong> — 회복 불가능 시 회생 폐지 후 파산 신청.</li>\n<li><strong>폐지 후 재신청</strong> — 일정 기간 경과 후 새 회생 신청 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 실직 자체는 처벌 대상이 아니지만, 신고·변경신청을 하지 않고 방치하면 폐지로 이어집니다.</blockquote>',
      },
      {
        title: '4단계 대응 프로세스',
        content:
          '<p><strong style="color:#1e3a5f">미납 누적 전에 움직여야 구제 가능성이 유지됩니다.</strong></p>\n<ul>\n<li><strong>1단계: 실직 증빙</strong> — 이직확인서·권고사직서·실업급여 수급자격증 등.</li>\n<li><strong>2단계: 회생위원 보고</strong> — 담당 회생위원에게 상황 설명 + 대응 방향 논의.</li>\n<li><strong>3단계: 변경·유예 신청</strong> — 변경신청서 또는 유예신청서 법원 제출.</li>\n<li><strong>4단계: 회복 불가 시 파산 전환</strong> — 변경 인가 불가 시 파산 절차로 전환.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 실직 후 회생 대응 경로를 분석해드립니다.</p>\n<a href="/chat?domain=rehabilitation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '변경·유예 신청 — 인가 기준과 서류',
        content:
          '<p><strong style="color:#1e3a5f">법원은 소득 감소 입증과 청산가치 보장을 기준으로 인가 여부를 결정합니다.</strong></p>\n<ul>\n<li><strong>입증 자료</strong> — 실직 증빙, 구직 활동 기록, 실업급여 수급자격증, 가족 수입 증빙.</li>\n<li><strong>가용소득 재산정</strong> — 기준중위소득 기반 생계비 공제 후 가용소득 계산.</li>\n<li><strong>청산가치 유지</strong> — 변경 후 변제율이 청산가치 이상일 것.</li>\n<li><strong>채권자 송달</strong> — 법원이 채권자에게 변경안 통지 + 의견 수렴.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 구직 활동 기록(워크넷 이력·면접 자료)은 "재기 의지"의 증거로 법원 판단에 유리하게 작용합니다.</blockquote>',
      },
      {
        title: '파산 전환 — 언제가 합리적인가',
        content:
          '<p><strong style="color:#1e3a5f">회복 가능성이 낮으면 파산 전환이 오히려 빠른 재기 경로일 수 있습니다.</strong></p>\n<ul>\n<li><strong>전환 지표</strong> — 장기 실업·건강 악화·연령 등 재취업 어려운 상황.</li>\n<li><strong>전환 절차</strong> — 회생 폐지 신청 + 파산 신청(동일 법원 가능).</li>\n<li><strong>비면책채권 주의</strong> — 세금·양육비·고의 불법행위 손해배상은 면책 불가.</li>\n<li><strong>신용 영향</strong> — 파산·면책 후에도 5~10년 금융 이력 제약.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "일단 버티다 나중에 결정"은 채권 부활·이자 가중 위험이 크므로, 회복 불가 판단이 섰다면 빠른 전환이 유리합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 실직에 따른 변제계획 변경의 요건',
        summary:
          '대법원 2023다239756 판결(대법원, 2025.12.11 선고)에서 법원은 채무자가 실직으로 변제가 어려워진 경우 변제계획 변경을 원칙적으로 인가해야 하며, 명백한 소득 감소 자료가 있으면 채권자의 이의도 제한적으로만 받아들여진다고 판시했습니다.',
        takeaway:
          '실직 입증이 객관적이면 변제계획 변경은 넓게 인가되며, 채권자 이의가 있어도 법원 판단이 우선됩니다.',
      },
    ],
    faq: [
      {
        question: '몇 개월 미납하면 바로 폐지되나요?',
        answer:
          '<strong>대체로 2~3개월 누적 시 경고 및 폐지 절차가 시작됩니다.</strong> 그 전에 변경·유예 신청으로 대응하세요.',
      },
      {
        question: '유예 신청은 얼마나 받을 수 있나요?',
        answer:
          '<strong>보통 1~6개월 범위에서 개별 인가됩니다.</strong> 명확한 재취업 계획이 있으면 더 긴 유예도 가능.',
      },
      {
        question: '실업급여 받는 동안 변제해야 하나요?',
        answer:
          '<strong>실업급여는 소득으로 산정되므로 일부 변제 대상입니다.</strong> 다만 생계비 공제 후 가용소득 계산으로 조정 가능.',
      },
      {
        question: '가족의 도움으로 변제해도 되나요?',
        answer:
          '<strong>가능하나 지속 가능성 증빙이 필요합니다.</strong> 가족 수입으로 본인 소득을 보강하는 형태 기재.',
      },
      {
        question: '폐지 후 바로 파산 신청할 수 있나요?',
        answer:
          '<strong>폐지 결정 확정 후 즉시 파산 신청 가능합니다.</strong> 동일 법원에서 회생 자료를 기반으로 신속 처리 가능.',
      },
    ],
    cta: {
      text: '개인회생 신청 자격, AI로 점검하기',
      link: '/chat?domain=rehabilitation',
    },
    internalLinks: [
      { label: '개인회생 변제계획 변경', href: '/guide/rehabilitation/rehabilitation-income-change-repayment-revision' },
      { label: '변제 중단 결과', href: '/guide/rehabilitation/rehabilitation-payment-default-consequences' },
      { label: '변제 실패 후 파산 전환', href: '/guide/rehabilitation/rehabilitation-failed-switch-bankruptcy' },
      { label: '개인회생 vs 파산', href: '/guide/rehabilitation/rehabilitation-vs-bankruptcy-choice' },
      { label: '변제금 조정 신청', href: '/guide/rehabilitation/rehabilitation-monthly-payment-adjustment' },
    ],
  },

  // ─── 7. bankruptcy / self-employed-restart-after-discharge ───
  {
    domain: 'bankruptcy',
    slug: 'bankruptcy-self-employed-restart-after-discharge',
    keyword: '파산 후 개인사업자 재창업',
    questionKeyword: '파산 면책 후에 다시 사업을 시작할 수 있나요?',
    ctaKeyword: '파산 후 재창업 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '파산 면책 후 재창업 5단계 — 등록·자금·세무 정리 | 로앤가이드',
      description:
        '파산 면책 후에도 개인사업자로 다시 시작할 수 있습니다. 사업자등록·금융거래·세무 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>파산 면책을 받은 뒤 "다시 사업을 할 수 있을까"라는 질문은 가장 흔한 고민 중 하나입니다. 법적으로 개인사업자 등록과 영업은 가능하지만, 금융·거래·세무 영역에서 파산 이력의 그림자가 남아 있습니다. 재창업 성공률을 높이려면 순서를 지키는 것이 중요합니다. 재창업 5단계를 정리합니다.</p>',
    sections: [
      {
        title: '법적 가능성 — 제한되는 권리와 허용되는 영업',
        content:
          '<p><strong style="color:#1e3a5f">파산 면책 후 대부분의 사업 활동이 허용되지만, 일부 자격 제한이 따릅니다.</strong></p>\n<ul>\n<li><strong>개인사업자 등록</strong> — 면책 이후 사업자등록·영업 가능.</li>\n<li><strong>법인 대표이사</strong> — 복권(복권 결정 또는 자격 회복) 전까지는 제한 → 면책으로 복권 가능.</li>\n<li><strong>자격제한 업종</strong> — 변호사·공인회계사·공무원 등 일부 전문자격은 파산 절차 중 결격사유 → 면책 확정 시 해소.</li>\n<li><strong>신용거래 제약</strong> — 금융거래 이력 5~10년 제약, 신용카드·대출 제한.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 파산 면책 후 "법적 영업 자유"는 회복되지만 "신용 자유"는 시간이 필요합니다.</blockquote>',
      },
      {
        title: '재창업 5단계 로드맵',
        content:
          '<p><strong style="color:#1e3a5f">순서대로 진행하면 실패 확률을 크게 낮출 수 있습니다.</strong></p>\n<ul>\n<li><strong>1단계: 면책 확정 확인</strong> — 면책결정문·복권 증명으로 신분상 장애 해소.</li>\n<li><strong>2단계: 신용 점검</strong> — KCB·NICE 신용보고서 확인, 연체·공공정보 점검.</li>\n<li><strong>3단계: 사업자등록</strong> — 업종 선정 + 세무서 사업자등록 신청(개인/간이/일반).</li>\n<li><strong>4단계: 자금 조달</strong> — 서민금융진흥원·소상공인시장진흥공단·지자체 재기지원 대출 탐색.</li>\n<li><strong>5단계: 세무·4대보험</strong> — 홈택스·4대보험 신고·지역건보 정비.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 파산 후 재창업 순서와 지원제도를 분석해드립니다.</p>\n<a href="/chat?domain=bankruptcy" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '자금 조달 — 재기 지원 제도 활용',
        content:
          '<p><strong style="color:#1e3a5f">파산 이력 채무자에게 특화된 재기 지원 루트가 있습니다.</strong></p>\n<ul>\n<li><strong>소상공인시장진흥공단 재도전특별자금</strong> — 실패 경험 소상공인 대상 저금리 대출.</li>\n<li><strong>서민금융진흥원 미소금융</strong> — 저신용·저소득자 대상 창업·운영자금.</li>\n<li><strong>지자체 청년·재기 창업 지원</strong> — 시·도별 창업지원센터 연계.</li>\n<li><strong>신용회복위원회 재기지원</strong> — 채무조정 이력자 대상 창업자금·컨설팅.</li>\n<li><strong>중소기업진흥공단 재기지원자금</strong> — 재창업 성공 확률을 높이는 맞춤형 지원.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사업계획서·업종 분석·수입계획이 명확할수록 승인 가능성이 커집니다. 작성 전 재기지원센터 상담 권장.</blockquote>',
      },
      {
        title: '재창업 시 주의 — 비면책채무·명의 문제',
        content:
          '<p><strong style="color:#1e3a5f">재창업이 실패하지 않으려면 이전 채무·명의 문제를 사전에 정비해야 합니다.</strong></p>\n<ul>\n<li><strong>비면책채무</strong> — 세금·양육비·고의 불법행위 손해배상은 면책 후에도 남음. 별도 분납·조정.</li>\n<li><strong>명의 대여 금지</strong> — 타인 명의로 사업자 등록 시 탈세·사기 혐의 위험.</li>\n<li><strong>가족 명의 피하기</strong> — 가족 명의 사업으로 실질 운영하면 사해행위 취소 대상.</li>\n<li><strong>4대 보험·세금 관리</strong> — 미납·체납 누적 시 다시 압류 시작.</li>\n<li><strong>보증·연대보증 주의</strong> — 지인·가족의 보증요청에 절대 응하지 않기.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 재창업 후 3년 이내 실패율이 높으므로, 과잉 투자·부채 경영보다 수입·지출 관리를 우선시하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 파산 면책 후 재창업 채무자의 법인 참여',
        summary:
          '대법원 2023다316387 판결(대법원, 2026.01.29 선고)에서 법원은 파산 면책 후 복권된 채무자는 법인 대표이사·이사 등재에 법적 제약이 없으며, 이전 파산 이력을 이유로 한 거래 거부는 부당할 수 있다고 판시했습니다.',
        takeaway:
          '면책·복권 후 법인 참여는 원칙적으로 자유이며, 파산 이력 자체가 영업 제한 사유는 아닙니다.',
      },
    ],
    faq: [
      {
        question: '면책 후 바로 개인사업자 등록이 되나요?',
        answer:
          '<strong>가능합니다.</strong> 사업자등록은 면책과 무관하게 신청할 수 있으며, 업종 제한도 대부분 없습니다.',
      },
      {
        question: '은행 계좌·카드를 어떻게 복구하나요?',
        answer:
          '<strong>체크카드는 쉽게 발급 가능하고, 신용카드는 5~7년 경과 후 심사 가능합니다.</strong> 사업용 계좌는 바로 개설 가능.',
      },
      {
        question: '대출은 언제쯤 가능해지나요?',
        answer:
          '<strong>신용대출은 5~10년, 정책자금(재기지원)은 비교적 빨리 가능합니다.</strong> 재기지원 루트부터 접근 권장.',
      },
      {
        question: '법인 대표이사 취임이 가능한가요?',
        answer:
          '<strong>면책·복권 후 가능합니다.</strong> 상법상 결격사유는 면책으로 해소됩니다.',
      },
      {
        question: '세금 체납이 남아있어도 재창업 가능한가요?',
        answer:
          '<strong>가능하지만 사업 수입에 압류 가능성이 있습니다.</strong> 사전에 분납 협의·결손처분 검토 권장.',
      },
    ],
    cta: {
      text: '파산 면책 가능성, AI로 점검하기',
      link: '/chat?domain=bankruptcy',
    },
    internalLinks: [
      { label: '파산 후 삶의 변화', href: '/guide/bankruptcy/bankruptcy-after-discharge-life-changes' },
      { label: '자영업자 폐업 파산', href: '/guide/bankruptcy/bankruptcy-self-employed-closing' },
      { label: '신용 회복 타임라인', href: '/guide/bankruptcy/bankruptcy-credit-recovery-timeline' },
      { label: '세금 비면책 채무 대응', href: '/guide/bankruptcy/bankruptcy-tax-debt-nondischargeable' },
      { label: '파산 면책 요건', href: '/guide/bankruptcy/bankruptcy-discharge-requirements-comprehensive' },
    ],
  },

  // ─── 8. inheritance / tax-deadline-penalty ───
  {
    domain: 'inheritance',
    slug: 'inheritance-tax-deadline-penalty',
    keyword: '상속세 신고기한 초과 가산세',
    questionKeyword: '상속세 신고기한을 놓쳤는데 가산세가 얼마나 나오나요?',
    ctaKeyword: '상속세 신고기한 초과 점검',
    type: '수치기한형',
    perspective: 'victim',
    meta: {
      title: '상속세 신고기한 초과 — 가산세 3가지와 감면 | 로앤가이드',
      description:
        '상속세 신고기한(6개월)을 놓치면 무신고·납부 가산세가 붙습니다. 정확한 비율과 수정신고 감면을 지금 확인하세요.',
    },
    intro:
      '<p>부모님 사망 후 장례·재산 파악에 몰두하느라 상속세 신고기한(6개월)을 놓치는 경우가 많습니다. 기한을 놓치면 무신고 가산세·납부지연 가산세가 기본으로 더해지고 고의 회피로 판단되면 중가산세까지 적용됩니다. 다행히 기한후 신고·수정신고로 가산세를 감면받을 수 있으므로 빠른 조치가 핵심입니다. 가산세 3가지와 감면 기준을 정리합니다.</p>',
    sections: [
      {
        title: '상속세 신고 기한과 가산세 구조',
        content:
          '<p><strong style="color:#1e3a5f">상속세 및 증여세법 제67조·국세기본법 제47조의2에 따라 기한과 가산세가 정해집니다.</strong></p>\n<ul>\n<li><strong>신고 기한</strong> — 상속개시일이 속하는 달의 말일로부터 6개월 이내(국외 거주 시 9개월).</li>\n<li><strong>무신고 가산세</strong> — 무신고 납부세액의 20%(부정행위 40%).</li>\n<li><strong>납부지연 가산세</strong> — 미납세액 × 연 10.95%(일 0.03%) × 경과일수.</li>\n<li><strong>과소신고 가산세</strong> — 과소신고 세액의 10%(부정행위 40%).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가산세는 복리가 아니라 누적 방식이지만, 시간이 지날수록 부담이 빠르게 커집니다.</blockquote>',
      },
      {
        title: '기한후 신고 — 가산세 감면 구조',
        content:
          '<p><strong style="color:#1e3a5f">신고기한 이후라도 자진 신고(기한후 신고)하면 가산세의 상당 부분을 감면받을 수 있습니다.</strong></p>\n<ul>\n<li><strong>1개월 이내</strong> — 무신고 가산세의 50% 감면.</li>\n<li><strong>3개월 이내</strong> — 무신고 가산세의 30% 감면.</li>\n<li><strong>6개월 이내</strong> — 무신고 가산세의 20% 감면.</li>\n<li><strong>세무조사 이전</strong> — 세무서에서 조사 통지 전이어야 감면 적용.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 상속세 기한후 신고·감면 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '실무 계산 예시 — 얼마나 더 내는가',
        content:
          '<p><strong style="color:#1e3a5f">가산세는 상속세 자체보다 부담이 크게 느껴질 수 있습니다.</strong></p>\n<ul>\n<li><strong>예시: 상속세 1억원 미신고</strong> — 무신고 2천만원 + 납부지연(1년 기준) 약 1,095만원 = 총 약 3,095만원 추가.</li>\n<li><strong>1개월 내 기한후 신고</strong> — 무신고 가산세 50% 감면 → 1천만원 감면 → 총 약 2,095만원.</li>\n<li><strong>부정행위 판단</strong> — 허위 매매·명의변경 등은 40% 가중, 신고기한 감면 불가.</li>\n<li><strong>분납 활용</strong> — 2천만원 초과 시 5년 분납(5회 균등) 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: "상속 재산 파악이 안 됐다"는 사유로는 면제되지 않습니다. 일단 추정가액으로 신고 후 수정 권장.</blockquote>',
      },
      {
        title: '세무조사·불복 절차',
        content:
          '<p><strong style="color:#1e3a5f">세무조사 통지를 받았다면 조사 전·후 절차를 정확히 밟아야 합니다.</strong></p>\n<ul>\n<li><strong>조사 전 수정신고</strong> — 조사 통지 전 수정신고 시 감면. 통지 후에는 감면 축소.</li>\n<li><strong>조사 응대</strong> — 세무대리인 동반, 자료 제출 범위 확인.</li>\n<li><strong>과세 전 적부심사</strong> — 과세예고 통지 후 30일 내 청구.</li>\n<li><strong>이의신청·심판청구</strong> — 납부고지 후 90일 이내.</li>\n<li><strong>행정소송</strong> — 심판 결과 불복 시 90일 이내 제기.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "신고 안 하면 모르고 넘어갈 것"이라는 기대는 매우 위험합니다. 국세청은 부동산·금융 전산 연계로 상속 발생을 자동 감지합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 상속 지분 미신고에 따른 가산세 부과',
        summary:
          '대법원 2025두34935 사건(대법원, 2026.01.15 선고)에서 법원은 상속 관련 지분을 신고기한 내 신고하지 않아 발생한 무신고 가산세 부과 처분이 적법하며, 납세자가 주장하는 "재산 파악 지연"은 가산세 면제 정당 사유가 되지 않는다고 판시했습니다.',
        takeaway:
          '상속 재산 파악 지연은 가산세 감면 사유가 되기 어렵고, 기한후 신고로 감면 혜택을 빠르게 확보하는 것이 현실적입니다.',
      },
    ],
    faq: [
      {
        question: '신고기한이 정확히 언제인가요?',
        answer:
          '<strong>상속개시일(피상속인 사망일)이 속하는 달의 말일로부터 6개월입니다.</strong> 국외 거주 상속인은 9개월.',
      },
      {
        question: '재산가액을 모르겠는데 어떻게 신고하나요?',
        answer:
          '<strong>추정가액으로 신고 후 이후 수정신고 가능합니다.</strong> 완전한 자료 없이도 신고 자체는 지연하지 않는 것이 유리.',
      },
      {
        question: '기한후 1년 지났는데 감면받을 수 있나요?',
        answer:
          '<strong>6개월 경과 후에는 감면율이 없으나, 세무조사 전 자진신고 시에도 일부 혜택이 있을 수 있습니다.</strong>',
      },
      {
        question: '상속포기했으면 신고 안 해도 되나요?',
        answer:
          '<strong>포기·한정승인한 경우에도 다른 상속인의 납세의무 판단을 위해 신고가 필요할 수 있습니다.</strong>',
      },
      {
        question: '분납·연부연납은 어떻게 신청하나요?',
        answer:
          '<strong>2천만원 초과 시 2회 분납, 일정 요건 시 5년 연부연납 가능합니다.</strong> 신고 시 신청서 함께 제출.',
      },
    ],
    cta: {
      text: '한정승인 필요서류, AI로 정리하기',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '상속 등기 서류 가이드', href: '/guide/inheritance/inheritance-registration-procedure-docs' },
      { label: '상속 재산 조회', href: '/guide/inheritance/inheritance-asset-inquiry-method' },
      { label: '상속 부동산 평가 분쟁', href: '/guide/inheritance/inheritance-real-estate-valuation-dispute' },
      { label: '한정승인 필요서류', href: '/guide/inheritance/inheritance-limited-acceptance-preparation' },
      { label: '상속 순위·법정지분', href: '/guide/inheritance/inheritance-order-legal-share' },
    ],
  },

  // ─── 9. inheritance / forced-share-10year-limit ───
  {
    domain: 'inheritance',
    slug: 'inheritance-forced-share-10year-limit',
    keyword: '유류분 10년 경과',
    questionKeyword: '유류분 청구기간 10년이 지났는데 다시 청구할 수 있나요?',
    ctaKeyword: '유류분 10년 경과 점검',
    type: '상황형',
    perspective: 'victim',
    meta: {
      title: '유류분 10년 경과 후 — 청구 가능성 3가지 | 로앤가이드',
      description:
        '상속 개시일로부터 10년이 지나면 유류분 청구가 완전히 소멸할까요? 예외 3가지와 대체 청구 경로를 지금 확인하세요.',
    },
    intro:
      '<p>부모님 돌아가신 지 10년이 지나 뒤늦게 특정 형제만 증여받은 사실을 알게 된 경우, "이제 유류분 청구는 못 하지 않나"라는 걱정이 큽니다. 민법은 상속 개시 후 10년의 절대기간을 두지만, "안 날로부터 1년"의 단기 기간과 일부 예외가 있어 자세한 검토가 필요합니다. 유류분 10년 경과 후 청구 가능성 3가지를 정리합니다.</p>',
    sections: [
      {
        title: '유류분 청구 기간의 법적 구조',
        content:
          '<p><strong style="color:#1e3a5f">민법 제1117조는 단기·장기 두 가지 기간을 규정합니다.</strong></p>\n<ul>\n<li><strong>단기 기간</strong> — 유류분 침해 사실 + 반환해야 할 증여·유증 사실을 안 날로부터 1년.</li>\n<li><strong>장기 기간</strong> — 상속 개시 시점으로부터 10년.</li>\n<li><strong>두 기간 동시 적용</strong> — 어느 하나라도 경과하면 청구권 소멸.</li>\n<li><strong>법적 성격</strong> — 제척기간(시효와 달리 중단·정지 인정 제한적).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 10년은 절대기간이지만, 특정 사례에서는 예외적 구제 경로가 존재합니다.</blockquote>',
      },
      {
        title: '10년 경과 후에도 검토 가능한 3가지',
        content:
          '<p><strong style="color:#1e3a5f">사안에 따라 유류분 이외 법리로 구제가 가능할 수 있습니다.</strong></p>\n<ul>\n<li><strong>1. 상속재산 분할 미완료</strong> — 상속재산 분할이 아직 안 됐다면 분할 심판에서 기여분·특별수익 쟁점 제기 가능.</li>\n<li><strong>2. 무효·취소 사유</strong> — 증여·유증이 통정허위·사기·강박 등으로 무효·취소되면 유류분 쟁점과 별개로 원인무효 청구.</li>\n<li><strong>3. 명의신탁·차명 재산</strong> — 실질 상속재산이 차명으로 이전된 경우 명의신탁 해지·진정명의회복.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 10년 경과 후 가능한 구제 경로를 분석해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '안 날로부터 1년 — 쟁점의 시점',
        content:
          '<p><strong style="color:#1e3a5f">1년 기산점은 "반환해야 할 증여가 있었음을 안 날"입니다.</strong></p>\n<ul>\n<li><strong>단순한 상속 개시 인지 아님</strong> — 증여·유증 존재를 구체적으로 알아야 기산.</li>\n<li><strong>은닉 발견 시점</strong> — 숨겨진 증여를 최근 발견했다면 그 시점부터 1년.</li>\n<li><strong>판례 경향</strong> — 법원은 침해 사실 인식을 엄격하게 판단.</li>\n<li><strong>증빙 중요</strong> — "언제 알았는지"를 입증할 자료(문서·통화 녹취 등) 확보.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 단기 1년이 더 결정적인 경우가 많습니다. 인지 시점 입증 자료를 즉시 확보하세요.</blockquote>',
      },
      {
        title: '대체 경로 — 상속재산 분할·명의회복 소송',
        content:
          '<p><strong style="color:#1e3a5f">유류분이 막혀도 다른 법리로 실질 정의를 회복할 수 있습니다.</strong></p>\n<ul>\n<li><strong>상속재산 분할 심판</strong> — 가정법원 분할 심판에서 기여분·특별수익 정산.</li>\n<li><strong>부당이득 반환</strong> — 증여가 통정허위 등으로 무효면 부당이득으로 반환 청구.</li>\n<li><strong>명의신탁 해지</strong> — 명의신탁법 위반 시 실소유자에 회복 청구.</li>\n<li><strong>사해행위 취소</strong> — 채무자 상태에서 증여로 채권자 해친 경우 제한된 상황에서 청구 가능.</li>\n<li><strong>유언 무효 확인</strong> — 유언의 형식·의사능력 결여 시 무효 확인 소송.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 대체 경로는 각각 요건과 기간이 다르며 입증 난이도가 높습니다. 반드시 전문 상속 변호사와 상담.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 유류분 기산점과 대체 청구권',
        summary:
          '대법원 2023다316851 사건(대법원, 관련 선고)에서 법원은 유류분의 1년·10년 기간이 엄격히 적용되지만, 증여가 통정허위·명의신탁 등 별도 무효사유를 가진 경우 유류분과 무관하게 원상회복 청구가 가능하다고 판시했습니다.',
        takeaway:
          '10년 경과 후에도 별도 무효사유가 있으면 원상회복 경로로 실질 구제가 가능하며, 개별 사안 검토가 중요합니다.',
      },
    ],
    faq: [
      {
        question: '10년 기산점이 정확히 언제인가요?',
        answer:
          '<strong>상속 개시(피상속인 사망)일로부터 기산됩니다.</strong> 증여·유증 사실 인지와 관계없이 절대기간.',
      },
      {
        question: '1년 내라면 10년이 지나도 청구 가능한가요?',
        answer:
          '<strong>아닙니다.</strong> 10년은 절대기간으로, 1년이 남아 있어도 10년이 경과하면 유류분은 소멸합니다.',
      },
      {
        question: '특정 증여 사실을 최근에 알았는데 청구 가능한가요?',
        answer:
          '<strong>상속 개시 후 10년 이내 + 안 날로부터 1년 이내라면 가능합니다.</strong> 두 기간 모두 충족해야 합니다.',
      },
      {
        question: '명의신탁 해지 소송은 기간 제한이 없나요?',
        answer:
          '<strong>명의신탁 성격에 따라 부당이득·소유권이전등기청구 소멸시효(10년) 적용.</strong> 개별 사안 판단 필요.',
      },
      {
        question: '유언이 의심스러운데 무효 소송은 언제까지 가능한가요?',
        answer:
          '<strong>유언 무효 확인 소송은 확인의 이익이 있는 한 기간 제한이 비교적 완화됩니다.</strong> 다만 빠른 진행이 유리.',
      },
    ],
    cta: {
      text: '한정승인 필요서류, AI로 정리하기',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '유류분 청구 소송 가이드', href: '/guide/inheritance/inheritance-forced-share-lawsuit-guide' },
      { label: '상속 유언 유효성 분쟁', href: '/guide/inheritance/inheritance-will-validity-dispute' },
      { label: '상속 숨겨진 자산 추가분할', href: '/guide/inheritance/inheritance-hidden-asset-additional-division' },
      { label: '상속 순위·법정지분', href: '/guide/inheritance/inheritance-order-legal-share' },
      { label: '상속 분쟁 어디부터', href: '/guide/inheritance/inheritance-dispute-where-to-start' },
    ],
  },

  // ─── 10. inheritance / limited-acceptance-post-debt ───
  {
    domain: 'inheritance',
    slug: 'inheritance-limited-acceptance-post-debt',
    keyword: '한정승인 후 추가 채무',
    questionKeyword: '한정승인했는데 몰랐던 채무가 또 나왔어요',
    ctaKeyword: '한정승인 후 추가 채무 점검',
    type: '문제해결형',
    perspective: 'victim',
    meta: {
      title: '한정승인 후 추가 채무 발견 — 대응 4단계 | 로앤가이드',
      description:
        '한정승인 뒤 뒤늦게 새 채무가 나타나면 내 돈으로 갚아야 할까요? 채권자 대응과 청산 절차 4단계를 지금 확인하세요.',
    },
    intro:
      '<p>한정승인을 했으니 이제 부모님의 빚으로부터 자유롭다고 생각하던 중, 몇 달 뒤 "당신이 상속인이다"며 새 채권자가 독촉장을 보내오는 경우가 있습니다. 한정승인은 상속 재산 한도로만 책임지는 제도이므로 원칙적으로 추가 채무가 나와도 내 고유 재산으로 갚을 의무는 없습니다. 다만 공고·청산 절차를 제대로 지키지 않으면 오히려 책임이 확대될 수 있어 즉시 대응이 필요합니다. 대응 4단계를 정리합니다.</p>',
    sections: [
      {
        title: '한정승인의 효력 범위',
        content:
          '<p><strong style="color:#1e3a5f">민법 제1028조에 따라 한정승인자는 상속 재산 한도로만 피상속인의 채무를 변제합니다.</strong></p>\n<ul>\n<li><strong>책임 한도</strong> — 적극재산(상속 재산)을 한도로 채무 변제.</li>\n<li><strong>고유재산 보호</strong> — 상속인 본인의 재산은 원칙적으로 보호.</li>\n<li><strong>추가 채무 원칙</strong> — 뒤늦게 발견된 채무도 상속 재산 한도로만 책임.</li>\n<li><strong>청산 의무</strong> — 공고·변제·배당을 적법하게 수행해야 보호 유지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 한정승인의 "한도 책임"은 자동이 아니라 적법한 청산 절차 이행이 전제입니다.</blockquote>',
      },
      {
        title: '추가 채무 발견 시 4단계 대응',
        content:
          '<p><strong style="color:#1e3a5f">한정승인 이후 새 채권자가 나타나면 즉시 체계적 대응이 필요합니다.</strong></p>\n<ul>\n<li><strong>1단계: 채권 진위 확인</strong> — 피상속인 명의 채무인지, 금액·시기·증빙 검토.</li>\n<li><strong>2단계: 한정승인 사실 통지</strong> — 채권자에게 한정승인 결정문·공고 내역 안내.</li>\n<li><strong>3단계: 남은 상속 재산 확인</strong> — 이미 변제·배당 완료 여부 점검.</li>\n<li><strong>4단계: 청구 대응</strong> — 상속 재산 소진 시 법원에 "한정승인 항변" 제출.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 한정승인 후 추가 채무 대응 순서를 분석해드립니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '공고 누락·부당 변제 — 고유재산 책임 위험',
        content:
          '<p><strong style="color:#1e3a5f">민법 제1032조·제1038조에 따라 공고 누락·부당 변제 시 상속인 고유재산에 책임이 확장될 수 있습니다.</strong></p>\n<ul>\n<li><strong>공고 의무</strong> — 한정승인 후 5일 이내 채권자 공고(관보·신문).</li>\n<li><strong>신고 기간</strong> — 공고일로부터 2개월 이상 신고 기간 설정.</li>\n<li><strong>부당 변제</strong> — 채권자 우선순위 무시하거나 특정 채권자에게 우선 지급 시 책임.</li>\n<li><strong>고유재산 책임</strong> — 공고 누락·부당 변제로 채권자가 손해를 보면 상속인 고유재산으로 배상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: "친척이니까 먼저 갚자"는 접근이 가장 위험합니다. 공고·신고·배당 순서를 엄격히 지켜야 보호됩니다.</blockquote>',
      },
      {
        title: '특별한정승인 — 3개월 경과 후에도 가능',
        content:
          '<p><strong style="color:#1e3a5f">상속 개시 3개월 이후에 중대한 채무를 발견하면 특별한정승인이 가능합니다.</strong></p>\n<ul>\n<li><strong>근거</strong> — 민법 제1019조 제3항.</li>\n<li><strong>요건</strong> — 상속채무가 상속재산을 초과함을 중대한 과실 없이 몰랐을 것.</li>\n<li><strong>신청 기한</strong> — 그 사실을 안 날로부터 3개월 이내.</li>\n<li><strong>효과</strong> — 뒤늦게 한정승인 효력 취득.</li>\n<li><strong>증빙</strong> — 채무 발견 경위·인지 시점 객관적 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 이미 상속 재산을 처분했으면 특별한정승인이 제한될 수 있으니, 발견 즉시 재산 처분 중단.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 한정승인 후 청산 절차 불이행과 고유재산 책임',
        summary:
          '대법원 2025두34851 판결(대법원, 2025.12.11 선고)에서 법원은 한정승인자가 공고 절차를 생략하거나 채권자 우선순위를 무시해 부당 변제한 경우, 상속인 고유재산에 대해서도 손해배상 책임을 질 수 있다고 판시했습니다.',
        takeaway:
          '한정승인의 한도 책임은 적법한 청산 절차 이행을 전제로 하므로, 공고·신고·배당을 엄격히 지켜야 합니다.',
      },
    ],
    faq: [
      {
        question: '몰랐던 채무라도 내 돈으로 갚아야 하나요?',
        answer:
          '<strong>원칙적으로 아닙니다.</strong> 다만 공고·청산 절차를 지켰고 상속재산이 정당하게 소진된 경우에만 보호됩니다.',
      },
      {
        question: '공고를 안 했는데 어떻게 해야 하나요?',
        answer:
          '<strong>즉시 공고·채권신고 절차를 진행하세요.</strong> 이미 일부 변제했더라도 보완 진행이 필요합니다.',
      },
      {
        question: '특별한정승인은 언제까지 가능한가요?',
        answer:
          '<strong>중대한 채무를 안 날로부터 3개월 이내입니다.</strong> 기간 도과하면 권리 상실.',
      },
      {
        question: '채권자 여러 명이 동시에 청구하면 어떻게 하나요?',
        answer:
          '<strong>법정 우선순위에 따라 비례 배당합니다.</strong> 우선 채권(근저당·우선변제권)과 일반 채권을 구분.',
      },
      {
        question: '한정승인 했는데 통장 압류가 들어왔어요',
        answer:
          '<strong>집행 이의 또는 청구이의 소송으로 대응합니다.</strong> 한정승인 결정문·공고 자료 제출로 압류 해제 가능.',
      },
    ],
    cta: {
      text: '한정승인 필요서류, AI로 정리하기',
      link: '/chat?domain=inheritance',
    },
    internalLinks: [
      { label: '한정승인 필요서류', href: '/guide/inheritance/inheritance-limited-acceptance-preparation' },
      { label: '특별한정승인 3개월', href: '/guide/inheritance/inheritance-special-limited-approval-3months-start' },
      { label: '단순승인 후 숨은 채무', href: '/guide/inheritance/inheritance-simple-approval-hidden-debt-recovery' },
      { label: '한정승인 vs 포기', href: '/guide/inheritance/inheritance-limited-vs-renounce' },
      { label: '상속 숨은 채무 발견', href: '/guide/inheritance/inheritance-hidden-debt-discovery' },
    ],
  },

  // ─── 11. defamation / workplace-rumor-complaint-prep ───
  {
    domain: 'defamation',
    slug: 'defamation-workplace-rumor-complaint-prep',
    keyword: '직장 허위루머 고소 준비',
    questionKeyword: '직장에서 허위 소문이 퍼졌는데 어떻게 고소 준비하나요?',
    ctaKeyword: '직장 허위루머 고소 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '직장 허위루머 고소 준비 — 증거·절차 5단계 | 로앤가이드',
      description:
        '직장에서 근거 없는 소문·뒷담화가 퍼져 피해를 입었다면 명예훼손 고소가 가능한지, 어떤 증거가 필요한지 지금 확인하세요.',
    },
    intro:
      '<p>사무실·단체 채팅·회식 자리에서 시작된 허위 소문이 조직 전체로 퍼지며 승진·평판·인간관계까지 흔드는 경우가 적지 않습니다. 직장 내 명예훼손은 증거 확보가 까다롭고 증인 확보가 어려워 초기 준비가 결정적입니다. 고소 준비 5단계를 정리합니다.</p>',
    sections: [
      {
        title: '명예훼손죄 성립 요건',
        content:
          '<p><strong style="color:#1e3a5f">형법 제307조에 따라 공연히 사실(허위사실) 적시하여 사회적 평가를 저하하면 성립합니다.</strong></p>\n<ul>\n<li><strong>공연성</strong> — 불특정 또는 다수인이 인식 가능한 상태. 한 명에게만 말해도 전파 가능성 있으면 인정.</li>\n<li><strong>사실 적시</strong> — 구체적 사실의 표현. 단순 의견·욕설은 모욕죄 검토.</li>\n<li><strong>평가 저하 가능성</strong> — 직업·인격·도덕성 등 평가 저하 가능성 있는 내용.</li>\n<li><strong>허위 vs 진실</strong> — 허위사실은 가중 처벌(형법 제307조 제2항).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직장 내에서도 복수 동료가 들었다면 "공연성"이 충족되어 명예훼손이 성립할 수 있습니다.</blockquote>',
      },
      {
        title: '고소 준비 5단계',
        content:
          '<p><strong style="color:#1e3a5f">증거 확보가 모든 단계의 핵심입니다.</strong></p>\n<ul>\n<li><strong>1단계: 발언 내용 기록</strong> — 언제·어디서·누가·무엇을 말했는지 일지 작성.</li>\n<li><strong>2단계: 1차 증거 수집</strong> — 단체 카톡·메일·녹취(본인 대화만) 등.</li>\n<li><strong>3단계: 증인 확보</strong> — 들은 동료의 진술서·증언 확보. 익명 참고인은 효력 약함.</li>\n<li><strong>4단계: 인사팀·감사 신고</strong> — 내부 절차 병행(징계·회사 조사 기록 확보).</li>\n<li><strong>5단계: 고소장 작성·제출</strong> — 혐의 구성 + 증거 목록 + 피해 사실.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 직장 허위루머 고소 준비 상태를 분석해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '녹음·녹취 — 적법성과 증거 가치',
        content:
          '<p><strong style="color:#1e3a5f">통신비밀보호법에 따라 대화 당사자가 아닌 제3자의 녹음은 위법이지만, 당사자 녹음은 합법입니다.</strong></p>\n<ul>\n<li><strong>본인 참여 대화</strong> — 녹음 합법, 증거 능력 인정.</li>\n<li><strong>타인 간 대화 도청</strong> — 위법, 증거 능력 제한.</li>\n<li><strong>공공장소 촬영</strong> — 사생활 침해 주의, 소송 활용 시 재차 검토.</li>\n<li><strong>단체 카톡 캡처</strong> — 원본 스크린샷 + 메타데이터 보존.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 녹취록은 조작 의혹을 피하기 위해 "음성 원본 + 전문 업체 녹취록" 형태로 준비하세요.</blockquote>',
      },
      {
        title: '민·형사 병행 + 회사 절차',
        content:
          '<p><strong style="color:#1e3a5f">형사 고소 외에 민사 손해배상과 회사 절차를 병행하면 피해 회복에 유리합니다.</strong></p>\n<ul>\n<li><strong>형사 고소</strong> — 명예훼손(허위 시 가중) + 모욕 병합.</li>\n<li><strong>민사 손해배상</strong> — 위자료·평판 침해에 따른 영업 손실.</li>\n<li><strong>회사 징계</strong> — 취업규칙·단체협약상 허위 유포 시 징계 대상.</li>\n<li><strong>전보·격리</strong> — 가해자와의 분리 조치 요청.</li>\n<li><strong>노동위원회</strong> — 불이익 처우·괴롭힘 인정 시 추가 구제.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 회사 내부 조사는 공정성이 제한적이므로, 내부 결과에 만족하지 말고 외부 절차를 병행하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 직장 내 허위사실 유포의 명예훼손 성립',
        summary:
          '대법원 2022도10369 사건(대법원, 2025.10.30 선고)에서 법원은 특정 동료에 대한 허위사실을 단체 채팅과 회식 자리에서 반복 언급한 피고인에게 명예훼손죄의 공연성과 허위성을 인정하고 실형을 선고했습니다.',
        takeaway:
          '직장 내 소규모 대화라도 다수 동료가 들으면 공연성이 인정되며, 허위성이 입증되면 가중 처벌됩니다.',
      },
    ],
    faq: [
      {
        question: '한 사람에게만 말했어도 명예훼손인가요?',
        answer:
          '<strong>가능합니다.</strong> "전파 가능성"이 있으면 공연성 인정. 특히 소문이 퍼진 경우 인정 유력.',
      },
      {
        question: '의견·감정 표현도 명예훼손인가요?',
        answer:
          '<strong>순수 의견은 명예훼손이 아닌 모욕죄 검토 대상입니다.</strong> 구체 사실이 포함돼야 명예훼손.',
      },
      {
        question: '소문을 전달한 사람도 처벌받나요?',
        answer:
          '<strong>가능합니다.</strong> 허위사실 인지 여부·전파 의도가 인정되면 공범 또는 별개 명예훼손 성립.',
      },
      {
        question: '회사가 징계하지 않으면 어떻게 해야 하나요?',
        answer:
          '<strong>외부 형사·민사 절차를 진행하세요.</strong> 회사 내 조치가 불공정하면 노동위·인권위도 활용 가능.',
      },
      {
        question: '고소하면 가해자와 같이 일하기 힘들지 않나요?',
        answer:
          '<strong>분리·격리 요청이 가능합니다.</strong> 고용주의 직장내 괴롭힘 방지 의무에 따라 보호 조치 요구.',
      },
    ],
    cta: {
      text: '명예훼손 고소당했을 때 대응, AI로 정리하기',
      link: '/chat?domain=defamation',
    },
    internalLinks: [
      { label: '직장 내 명예훼손 대응', href: '/guide/defamation/defamation-workplace-rumor-response' },
      { label: '동료 명예훼손', href: '/guide/defamation/workplace-defamation-by-colleague' },
      { label: '단체 카톡 유출 고소', href: '/guide/defamation/defamation-group-chat-leak-complaint' },
      { label: '명예훼손 피해자 시작', href: '/guide/defamation/defamation-victim-where-to-start' },
      { label: '온라인 명예훼손 증거', href: '/guide/defamation/online-defamation-evidence-collection' },
    ],
  },

  // ─── 12. defamation / online-false-deletion-injunction ───
  {
    domain: 'defamation',
    slug: 'defamation-online-false-deletion-injunction',
    keyword: '온라인 허위사실 삭제 가처분',
    questionKeyword: '인터넷에 허위 게시글이 올라왔는데 빨리 지울 수 없나요?',
    ctaKeyword: '온라인 허위사실 삭제 가처분 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '온라인 허위사실 삭제 가처분 — 신청 5단계 | 로앤가이드',
      description:
        '인터넷 허위글·악성 리뷰를 법원 가처분으로 빠르게 삭제하는 절차는 무엇일까요? 신청 요건과 실무 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>블로그·커뮤니티·리뷰 사이트에 허위사실이 올라오면 시간이 지날수록 확산돼 피해가 눈덩이처럼 커집니다. 플랫폼 신고는 시간이 오래 걸리고 선택적으로 삭제되므로, 법원의 "게시물 삭제 가처분" 결정이 가장 확실한 해결책입니다. 신청 5단계와 판단 기준을 정리합니다.</p>',
    sections: [
      {
        title: '삭제 가처분의 법적 근거와 효과',
        content:
          '<p><strong style="color:#1e3a5f">민사집행법상 가처분 제도로 본안 판결 전 긴급 삭제가 가능합니다.</strong></p>\n<ul>\n<li><strong>근거</strong> — 민사집행법 제300조, 정보통신망법 제44조의2.</li>\n<li><strong>피해 성격</strong> — 본안 판결까지 기다리면 회복 불가능한 손해 발생.</li>\n<li><strong>대상</strong> — 블로그·카페·유튜브·리뷰 등 공개 게시물.</li>\n<li><strong>효과</strong> — 포털·플랫폼에 삭제 의무 부여, 불이행 시 간접강제(이행강제금).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가처분은 "시간과의 경주"입니다. 게시글 발견 후 7일 이내 움직이는 것이 이상적입니다.</blockquote>',
      },
      {
        title: '가처분 신청 5단계',
        content:
          '<p><strong style="color:#1e3a5f">준비 자료가 완비되면 법원은 1~3주 내 결정을 내립니다.</strong></p>\n<ul>\n<li><strong>1단계: 증거 캡처</strong> — URL·게시일·작성자·내용 전체 캡처 + 공증 고려.</li>\n<li><strong>2단계: 허위성 입증</strong> — 본인 진술·공문·진료기록 등 사실과 다름을 증명.</li>\n<li><strong>3단계: 피해 소명</strong> — 매출 감소·평판 훼손·정신적 고통 자료.</li>\n<li><strong>4단계: 신청서 작성</strong> — 신청 취지·이유·소명자료 목록.</li>\n<li><strong>5단계: 법원 제출·심문</strong> — 간단한 심문 기일 진행 후 결정.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 삭제 가처분의 성공 가능성과 증거 상태를 분석해드립니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '인용 기준 — 법원이 중시하는 포인트',
        content:
          '<p><strong style="color:#1e3a5f">법원은 표현의 자유와 피해의 균형을 엄격히 봅니다.</strong></p>\n<ul>\n<li><strong>허위성 명확도</strong> — 객관적 자료로 허위임이 쉽게 드러날수록 인용 가능.</li>\n<li><strong>공공성·사실 적시 여부</strong> — 공공성 있는 사실은 보호받을 수 있음.</li>\n<li><strong>피해 긴급성</strong> — 본안 판결까지 기다리면 회복 불가한지.</li>\n<li><strong>부분 삭제·블라인드</strong> — 전체 삭제가 과도하면 부분 삭제·블라인드 병행.</li>\n<li><strong>공탁금·담보</strong> — 손해 담보로 공탁금(수백~수천만원) 요구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 법원은 "일부 표현"만 허위일 경우 해당 부분만 블라인드 처리하는 결정을 내리는 경우가 많습니다.</blockquote>',
      },
      {
        title: '삭제 후 대응 — 재게시 차단과 형사 처벌',
        content:
          '<p><strong style="color:#1e3a5f">삭제는 끝이 아니라 시작입니다. 재게시 방지와 형사 절차를 병행해야 합니다.</strong></p>\n<ul>\n<li><strong>간접강제</strong> — 삭제 불이행 시 일일 금원 부과 결정.</li>\n<li><strong>작성자 특정</strong> — 플랫폼에 IP·가입정보 요청, 경찰·검찰 통한 확인.</li>\n<li><strong>형사 고소</strong> — 명예훼손·정보통신망법 위반 고소.</li>\n<li><strong>민사 손해배상</strong> — 위자료 + 영업손실.</li>\n<li><strong>재발 방지 서약</strong> — 합의 시 재게시 금지·위약금 조항 포함.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 삭제 후 작성자가 유사 게시글을 반복하면 "동일 사안 이행 명령" 요청으로 대응 가능합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 온라인 허위사실에 대한 삭제 의무와 인격권 침해',
        summary:
          '서울중앙지법 2025고합949 사건(2025.08.20 선고) 및 관련 가처분 결정에서 법원은 온라인상 허위사실의 긴급 삭제 필요성을 인정하고, 플랫폼과 작성자 모두에 대해 적극적 삭제·차단 의무를 부과했습니다.',
        takeaway:
          '허위성이 명확하고 피해 긴급성이 인정되면 본안 판결 전이라도 삭제 가처분이 폭넓게 인용됩니다.',
      },
    ],
    faq: [
      {
        question: '가처분은 얼마나 걸리나요?',
        answer:
          '<strong>보통 2주~2개월 사이 결정됩니다.</strong> 긴급 사안은 2주 이내 결정되는 경우도 있습니다.',
      },
      {
        question: '공탁금은 얼마나 내야 하나요?',
        answer:
          '<strong>사안 규모에 따라 수백만원~수천만원 범위입니다.</strong> 보증보험증권으로 대체 가능한 경우도 있습니다.',
      },
      {
        question: '작성자를 모르면 어떻게 하나요?',
        answer:
          '<strong>플랫폼(포털·커뮤니티)을 상대로 가처분 신청이 가능합니다.</strong> 이후 정보제공 요청으로 작성자 특정.',
      },
      {
        question: '해외 플랫폼 글도 삭제 가능한가요?',
        answer:
          '<strong>국내 법원 결정만으로는 집행이 어렵습니다.</strong> 플랫폼별 자체 신고 절차 병행 권장.',
      },
      {
        question: '합의로 삭제됐는데 재게시되면 어떻게 하나요?',
        answer:
          '<strong>기존 가처분 결정에 근거한 간접강제 + 추가 형사 고소 가능합니다.</strong> 합의 시 위약금 조항을 넣으면 대응이 쉽습니다.',
      },
    ],
    cta: {
      text: '명예훼손 고소당했을 때 대응, AI로 정리하기',
      link: '/chat?domain=defamation',
    },
    internalLinks: [
      { label: '온라인 명예훼손 대응', href: '/guide/defamation/online-defamation-response' },
      { label: '온라인 명예훼손 소송 절차', href: '/guide/defamation/online-defamation-lawsuit-process' },
      { label: '온라인 명예훼손 증거', href: '/guide/defamation/online-defamation-evidence-collection' },
      { label: '명예훼손 배상액 기준', href: '/guide/defamation/defamation-damages-amount-standard' },
      { label: '명예훼손 고소 준비', href: '/guide/defamation/defamation-complaint-prep' },
    ],
  },

  // ─── 13. stalking / emergency-measure-violation-response ───
  {
    domain: 'stalking',
    slug: 'stalking-emergency-measure-violation-response',
    keyword: '스토킹 잠정조치 위반 대응',
    questionKeyword: '접근금지 잠정조치를 받았는데 또 연락이 옵니다 어떻게 하나요?',
    ctaKeyword: '스토킹 잠정조치 위반 대응 점검',
    type: '문제해결형',
    perspective: 'victim',
    meta: {
      title: '스토킹 잠정조치 위반 대응 — 신고·가중처벌 4단계 | 로앤가이드',
      description:
        '접근금지 잠정조치를 받은 가해자가 다시 접촉해온다면 어떻게 신고하고 가중처벌까지 이어갈까요? 4단계 대응을 지금 확인하세요.',
    },
    intro:
      '<p>스토킹처벌법상 잠정조치(접근금지·연락금지·구치소 유치)를 받고도 가해자가 몰래 문자나 SNS 연락을 시도하는 사례가 빈번합니다. 위반 자체가 별도 범죄(스토킹처벌법 제20조)로 즉시 처벌 대상이며, 반복 위반은 구속·실형으로 이어질 수 있습니다. 피해자는 신고 속도와 증거 보존이 관건입니다. 대응 4단계를 정리합니다.</p>',
    sections: [
      {
        title: '잠정조치의 법적 효력과 위반 시 처벌',
        content:
          '<p><strong style="color:#1e3a5f">스토킹범죄의 처벌 등에 관한 법률이 잠정조치 종류·위반 처벌을 규정합니다.</strong></p>\n<ul>\n<li><strong>잠정조치 유형</strong> — 서면경고, 100m 접근금지, 전기통신 이용 접근금지, 구치소 유치(최대 1개월).</li>\n<li><strong>위반 처벌</strong> — 스토킹처벌법 제20조, 2년 이하 징역 또는 2천만원 이하 벌금(특히 접근금지 위반 시 가중).</li>\n<li><strong>별도 범죄 성립</strong> — 본 스토킹 혐의와 별개로 위반만으로도 독립 기소.</li>\n<li><strong>반복 위반</strong> — 즉시 유치·구속 및 실형 확률 급증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 잠정조치 위반은 "참아주지 않아도 되는" 신호입니다. 첫 위반이 나오는 즉시 신고하는 것이 피해자 보호의 핵심입니다.</blockquote>',
      },
      {
        title: '위반 발생 시 4단계 대응',
        content:
          '<p><strong style="color:#1e3a5f">신속한 신고와 증거 보존이 가해자 처벌 강도를 결정합니다.</strong></p>\n<ul>\n<li><strong>1단계: 증거 확보</strong> — 문자·DM·통화 스크린샷, 목격 CCTV 확보.</li>\n<li><strong>2단계: 112 신고·담당 경찰 연락</strong> — 위반 사실 즉시 신고, 사건번호 확인.</li>\n<li><strong>3단계: 담당 검사에 상황 공유</strong> — 기소 전이면 구속 검토 요청, 기소 후면 양형자료 제출.</li>\n<li><strong>4단계: 추가 보호 요청</strong> — 위치추적 장치(스마트워치), 임시숙소, 신변보호 요청.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 잠정조치 위반 대응과 추가 보호 순서를 분석해드립니다.</p>\n<a href="/chat?domain=stalking" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '증거 — 어떤 자료가 구속으로 이어지는가',
        content:
          '<p><strong style="color:#1e3a5f">반복성·의도성·위협성이 드러나는 자료가 핵심입니다.</strong></p>\n<ul>\n<li><strong>직접 접촉</strong> — 동일 장소 등장 CCTV, 이웃·경비원 진술.</li>\n<li><strong>통신 접촉</strong> — SNS DM·문자·카톡·발신번호 내역(번호 변경 포함).</li>\n<li><strong>대리 접촉</strong> — 지인·가족을 통한 간접 메시지 전달.</li>\n<li><strong>물품 배송</strong> — 가해자 이름으로 배송된 물품·꽃 등.</li>\n<li><strong>기록 일지</strong> — 시간·장소·내용·감정을 기재한 일지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 반복성이 수치로 보이는 타임라인(한 달간 몇 회·어떤 시간대)을 정리하면 법원이 심각성을 빠르게 인식합니다.</blockquote>',
      },
      {
        title: '추가 보호 조치 — 피해자 안전망',
        content:
          '<p><strong style="color:#1e3a5f">잠정조치 위반 자체가 피해자 안전 위협 신호이므로, 피해자 보호 조치를 적극 활용합니다.</strong></p>\n<ul>\n<li><strong>스마트워치·위치추적</strong> — 여성긴급전화 1366·경찰 신변보호 제도.</li>\n<li><strong>임시 숙소</strong> — 여성긴급피난처·지자체 쉼터.</li>\n<li><strong>주소 비공개</strong> — 주민등록 열람제한, 자동차 등록 주소 변경.</li>\n<li><strong>직장 보호</strong> — 고용주에 통지·보안 요청.</li>\n<li><strong>접근금지 확대</strong> — 본인뿐 아니라 가족·직장까지 접근금지 확대 요청.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 가해자 측 "합의 요청"은 잠정조치 위반을 덮는 도구가 될 수 있습니다. 피해자가 직접 응대하지 말고 경찰·변호사를 통해 처리하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 잠정조치 연장 결정과 위반 처벌',
        summary:
          '대법원 2025모3144 결정(대법원, 2025.12.11자)에서 법원은 스토킹처벌법상 잠정조치 연장·변경 결정과 위반 처벌의 법적 근거를 명확히 하고, 원심법원이 항고를 관할법원에 송부하지 않고 직접 기각한 절차 위법을 이유로 사건을 관할법원에 이송했습니다.',
        takeaway:
          '잠정조치와 위반 처벌 절차는 엄격히 운영되며, 피해자 보호와 가해자 절차권 모두 엄정하게 관리됩니다.',
      },
    ],
    faq: [
      {
        question: '연락이 딱 1번 왔는데 신고해야 하나요?',
        answer:
          '<strong>네, 즉시 신고하세요.</strong> 1회라도 잠정조치 위반은 독립 처벌 대상이며, 방치하면 반복될 가능성이 큽니다.',
      },
      {
        question: '번호를 바꾸고 다시 연락왔어요',
        answer:
          '<strong>발신번호 변경도 위반입니다.</strong> 새 번호 역시 금지 대상으로 해석되며 통신사 로그로 특정 가능.',
      },
      {
        question: 'SNS 다른 계정으로 접근해와요',
        answer:
          '<strong>계정 우회도 위반입니다.</strong> 동일인이 운영하는 계정임을 입증하면 위반 적용 가능.',
      },
      {
        question: '가족을 통해 메시지를 전달했어요',
        answer:
          '<strong>대리 접촉도 위반 해석이 가능합니다.</strong> 간접 접촉 의도를 입증할 증거가 중요.',
      },
      {
        question: '위반 시 구속될 수 있나요?',
        answer:
          '<strong>반복 위반·위협성 있을 때 구속 가능성이 높습니다.</strong> 피해자 신변 위험이 크면 즉시 구속영장 청구 요청.',
      },
    ],
    cta: {
      text: '스토킹 고소 대응 순서, AI로 점검하기',
      link: '/chat?domain=stalking',
    },
    internalLinks: [
      { label: '스토킹 잠정조치 기각', href: '/guide/stalking/stalking-emergency-measure-rejected' },
      { label: '잠정조치 신청', href: '/guide/stalking/stalking-emergency-measure-application' },
      { label: '긴급응급조치', href: '/guide/stalking/stalking-emergency-protective-measures' },
      { label: '접근금지 처벌', href: '/guide/stalking/stalking-penalty-restraining-order' },
      { label: '피해자 보호 청구', href: '/guide/stalking/stalking-victim-restraining-petition' },
    ],
  },
];
