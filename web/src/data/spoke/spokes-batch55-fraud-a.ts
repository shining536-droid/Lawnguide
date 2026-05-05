import { SpokePage } from '../spoke-pages';

// batch55 fraud A 3개: 부동산 직거래 가계약금 + 카톡 가족사칭 100만원 + 친구 사업손실 차용금
//
// 고유 존재 이유:
// 1. 이 페이지는 부동산 직거래로 가계약금 송금 후 매도인이 잠적한 매수인이 가처분·사기 고소·소액심판 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 카카오톡 가족 사칭으로 100만원을 송금한 피해자가 통신사기피해환급법 5단계로 환급 절차를 정리하도록 돕는 페이지다.
// 3. 이 페이지는 친구가 빌려간 돈을 사업 손실 핑계로 안 갚는 채권자가 차용금 vs 사기(편취 의사 시점)의 4가지 다툼을 정리하도록 돕는 페이지다.

export const spokesBatch55FraudA: SpokePage[] = [
  // ─── 1. fraud / real-estate-direct-deal-deposit-vanish ───
  {
    domain: 'fraud',
    slug: 'fraud-real-estate-direct-deal-deposit-vanish',
    keyword: '부동산 직거래 가계약금 잠적 사기',
    questionKeyword: '직거래로 가계약금 500만원 보냈는데 매도인이 갑자기 연락 끊고 잠적했어요. 회수할 수 있나요?',
    ctaKeyword: '직거래 가계약금 회수 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '부동산 직거래 가계약금 떼였을 때 4단계 회수 | 로앤가이드',
      description:
        '부동산 직거래 가계약금 송금 후 매도인 잠적 피해라면 가처분 + 사기 고소 + 소액심판 4단계 회수 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"네이버 카페에서 시세보다 싸게 나온 매물을 발견했어요. 매도인이 &lsquo;다른 사람이 보러 온다, 가계약금부터 보내라&rsquo; 재촉해서 500만원을 송금했더니, 다음날부터 카톡·전화 모두 차단되고 등기상 다른 사람과 계약했더라고요." 부동산 직거래 가계약금 잠적은 형법 제347조 사기죄 + 민사 부당이득반환 + 부동산 가처분 트랙으로 회수 절차를 검토해볼 수 있는 영역입니다. 가계약금이라도 매매 의사 합치 입증 자료(카톡·계약서 초안·송금 영수증)가 있다면 이중계약 매도인 책임이 가능해요. 송금 직후 1주가 등기 가처분 골든타임이고, 잠적 후 2주 이상 방치하면 매도인이 다른 사람과 본계약·소유권이전을 마쳐 회수 길이 좁아집니다.</p>',
    sections: [
      {
        title: 'Q. 가계약금 사기·잠적의 5가지 핵심 신호는?',
        content:
          '<p><strong style="color:#1e3a5f">A. 아래 5가지 정황 중 2개 이상이면 사기 + 이중계약 트랙 검토가 가능한 영역으로 보입니다.</strong></p>\n<ul>\n<li><strong>"오늘 안에 보내야 한다"는 시간 압박</strong> — 다른 매수자 핑계로 등기·시세 확인 시간을 차단. 직거래 사기의 가장 흔한 시작.</li>\n<li><strong>시세 대비 20~30% 저렴한 매물</strong> — 같은 단지·평형 시세 대비 비현실적 할인. 이중계약·허위매물 신호.</li>\n<li><strong>등기부등본 발급일이 한 달 이상 전</strong> — 그 사이 다른 매수자와 계약 가능. 송금 직전 발급분이어야 안전.</li>\n<li><strong>매도인 본인 명의 계좌 아님</strong> — 가족·지인·법인 계좌 송금 요구. 자금 추적 차단 정황.</li>\n<li><strong>가계약서·계약서 작성 거부</strong> — "일단 입금부터, 서류는 만나서" 패턴. 매매 의사 입증 차단.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형법 제347조 사기죄 + 민법 제565조(계약금) + 부동산실명법 + 민사집행법 가처분. 가계약금이라도 매매 합의 자료가 있으면 본계약금 효력 인정 가능, 단 자료가 카톡 한두 줄뿐이면 단순 부당이득반환에 그칠 수 있습니다.</blockquote>',
      },
      {
        title: 'Q. 회수 트랙은 어떻게 갈리나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 4가지 트랙을 동시 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>처분금지 가처분 → 등기 봉쇄 (1주 내)</strong> — 매도인이 다른 사람과 소유권이전 못하게 가처분. 송금 직후 1주가 골든타임. 부동산 등기관할 법원.</li>\n<li><strong>사기 고소 → 경찰 ECRM</strong> — 처음부터 매도 의사 없이 가계약금만 챙길 의도였다면 사기죄. ecrm.police.go.kr 또는 관할 경찰서 사이버수사대.</li>\n<li><strong>소액심판·지급명령 → 회수</strong> — 3,000만원 이하면 소액심판, 청구액 무관 지급명령(전자) 가능. 부당이득반환·계약금 반환 청구.</li>\n<li><strong>다수 피해자 공동 대응</strong> — 같은 매도인·계좌 다수 피해 정황 시 공동 고소단. 수사 우선순위 상승 + 자금 동결 효과.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">매물 광고·송금 시점·매도인 등기상 명의에 따라 회수 트랙이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 신고·회수는 어떻게 진행하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 4단계 트랙을 동시 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 카톡·송금영수증·매물광고 캡처 (즉시)</strong> — 매도인 카톡 ID·발언·송금 요구 시점·계좌 정보 시간순 정리. 등기부등본 즉시 발급(인터넷등기소 700원).</li>\n<li><strong>2단계 — 처분금지 가처분 신청 (1주 내)</strong> — 부동산 관할 법원에 가처분 신청. 보증금 약 청구액의 10% 수준. 등기 봉쇄로 다른 매수자에게 소유권이전 차단.</li>\n<li><strong>3단계 — 사기 고소 + 송금은행 지급정지 의뢰 (2주 내)</strong> — 관할 경찰서 사이버수사대 또는 ecrm.police.go.kr 신고. 송금 은행에 사기 의심 거래 신고로 상대방 계좌 동결 협조 요청.</li>\n<li><strong>4단계 — 소액심판·지급명령 (1개월)</strong> — 3,000만원 이하면 소액심판(법률서식센터·전자소송). 부당이득반환·계약금 반환 청구. 매도인 본인 명의 부동산이 있으면 강제집행으로 회수 가능.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "가계약금이라 못 받는다"고 포기하면 매도인은 무대응으로 시효 도과를 노립니다. 가계약금도 송금 영수증·매매 합의 카톡이 있으면 부당이득·사기로 회수 가능한 것으로 안내되고 있어요.</blockquote>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 경로로 상담·신청 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템</strong> — ecrm.police.go.kr / 182 (직거래 사기 신고)</li>\n<li><strong>금융감독원</strong> — 1332 / fss.or.kr (송금 계좌 사기 의심거래 신고)</li>\n<li><strong>한국소비자원</strong> — 1372 / consumer.go.kr (직거래 분쟁 상담)</li>\n<li><strong>인터넷등기소</strong> — iros.go.kr (등기부등본 즉시 발급, 700원)</li>\n<li><strong>대한법률구조공단</strong> — 132 (평일 9~18시 무료 상담, 자격 요건)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정보처리장치 입력 매개 기망과 사람에 대한 사기죄 성립',
        summary:
          '대법원 2022도1862 사건(대법원, 2026.01.29 선고)에서 법원은 정보처리장치에 정보를 입력해 그 결과로 재산적 처분행위를 하는 사람을 착오에 빠뜨린 경우 사람에 대한 기망행위에 해당해 사기죄가 성립한다고 판시했습니다. 부동산 직거래에서도 매도인이 등기·매물 정보를 허위로 안내해 매수인이 가계약금을 송금하도록 유도했다면 단순 채무불이행을 넘어 사기 구조로 평가될 수 있다는 시사점이 있습니다.',
        takeaway: '직거래 가계약금 잠적은 매도인의 처음부터의 매도 의사 부재 또는 이중매매 의도가 입증되면 사기·민사 회수가 가능해, 매물 광고·카톡·송금 영수증·등기부등본 시점을 시간순으로 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '가계약금만 보냈는데 본계약금 효력 인정될까요?',
        answer:
          '<strong>매매 합의 자료(가격·물건·일정)가 카톡·문자에 있으면 본계약금 효력으로 평가될 수 있습니다.</strong> 민법 제565조 적용으로 매도인이 임의 해약하려면 배액 상환이 원칙. 단순 "관심 있다" 정도 대화면 부당이득반환에 그칠 수 있어요.',
      },
      {
        question: '매도인 명의가 등기부와 다른 사람이었어요',
        answer:
          '<strong>대리인·명의신탁 의심으로 사기 입증이 더 강해집니다.</strong> 등기상 명의자 인감증명·위임장 없이 가계약금 받은 정황은 처음부터 매도 의사 없었다는 강한 정황. 부동산실명법 위반도 검토 가능.',
      },
      {
        question: '가처분 신청 비용이 부담스러워요. 안 해도 되나요?',
        answer:
          '<strong>가처분 안 하면 매도인이 다른 매수자와 등기 마쳐 회수 길이 막힐 수 있어요.</strong> 청구액 500만원이면 보증금 약 50만원 수준. 회수 가능성을 위해 송금 1주 내 가처분이 핵심. 법률구조공단 132 무료 상담 활용 가능.',
      },
      {
        question: '같은 매도인·계좌로 다른 피해자가 있는 것 같아요',
        answer:
          '<strong>3명 이상 모이면 공동 고소단·공동 가처분 가능, 수사 우선순위 상승.</strong> 네이버 카페·인터넷 검색으로 같은 매도인 피해 사례 발견 시 캡처해 고소장에 첨부. 자금 동결 효과도 커집니다.',
      },
      {
        question: '매도인 행방 모르는데 소장 어떻게 보내나요?',
        answer:
          '<strong>주민등록 주소·송금 계좌 명의 주소로 송달, 폐문부재면 공시송달 절차로 진행 가능합니다.</strong> 등기부등본 + 계좌 명의 + 카톡 ID 추적으로 인적사항 특정. 변호사 사실조회·법원 보정명령 활용도 검토 가능.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
      { label: '소액심판 1천만원 절차', href: '/guide/fraud/fraud-small-claims-court-procedure' },
      { label: '친구 빌려주고 잠적 회수', href: '/guide/fraud/fraud-friend-loan-disappear-recovery' },
      { label: '전세사기 피해 대응 순서', href: '/guide/jeonse-fraud/jeonse-fraud-victim-recovery-steps' },
      { label: '이중계약 사기 대응', href: '/guide/fraud/fraud-double-contract-real-estate' },
    ],
  },

  // ─── 2. fraud / kakao-family-impersonation-100man ───
  {
    domain: 'fraud',
    slug: 'fraud-kakao-family-impersonation-100man',
    keyword: '카톡 가족사칭 100만원 환급',
    questionKeyword: '카카오톡으로 아들이라며 "폰 고장났어, 100만원 친구 계좌로 보내줘" 해서 송금했는데 사기였어요. 환급 가능한가요?',
    ctaKeyword: '메신저피싱 100만원 환급 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '메신저 피싱 100만원 환급 5단계 | 로앤가이드',
      description:
        '카톡·문자 가족 사칭 100만원 송금 피해라면 즉시 지급정지 + 통신사기피해환급법 + 채권소멸공고 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"&lsquo;엄마, 폰 떨어뜨려서 친구 폰으로 카톡해. 100만원만 이 친구 계좌로 보내줘&rsquo; 아들 이름·프로필 사진까지 같아서 의심 없이 보냈어요. 1시간 뒤 본인 통화해보니 아들은 멀쩡했고 송금 계좌는 이미 인출 중이었어요." 가족·자녀 사칭 메신저피싱은 전기통신금융사기피해환급법(2024.10 개정) 명시 대상으로 통신사기피해환급법 5단계 환급 절차를 검토해볼 수 있는 영역입니다. 송금 직후 30분이 지급정지 골든타임이고, 1단계 즉시 신고 → 2단계 지급정지 → 3단계 사건사고사실확인원 → 4단계 채권소멸공고(2개월) → 5단계 잔액 환급 흐름으로 진행돼요. 100만원이라도 즉시 신고가 환급률을 결정합니다.</p>',
    sections: [
      {
        title: '메신저피싱 100만원 사건의 5가지 핵심 신호',
        content:
          '<p><strong style="color:#1e3a5f">아래 5가지 정황 중 2개 이상이면 송금 전 본인 통화로 확인이 안전합니다.</strong></p>\n<ul>\n<li><strong>"폰 고장·분실·해외" 핑계로 통화 회피</strong> — 음성 확인 차단 명분. 가족 사칭 메신저피싱의 가장 흔한 진입.</li>\n<li><strong>새 번호·새 카톡 ID 접근</strong> — "이 번호 저장해줘" 요구. 본 가족과 별개 ID로 대화.</li>\n<li><strong>"친구 계좌·회사 계좌"로 100만원대 송금 요구</strong> — 본인 계좌 아닌 제3자 계좌. 차명·대포통장 정황.</li>\n<li><strong>"30분 안에·급해" 시간 압박</strong> — 본인 통화·가족 확인 차단용 압박.</li>\n<li><strong>SNS 프로필 사진·이름 그대로 도용</strong> — 인스타·페북에서 정보 수집 후 정교한 사칭.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 전기통신금융사기 피해방지 및 피해금 환급에 관한 특별법(통신사기피해환급법) + 형법 제347조 사기죄 + 정보통신망법(개인정보 도용). 100만원 단건도 즉시 신고하면 환급법 적용으로 잔액 보전 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong style="color:#1e3a5f">금융감독원·경찰청 공식 절차를 참고하면 아래 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 112 또는 1332 신고 (송금 후 30분 골든타임)</strong> — 112 통합신고센터 또는 금융감독원 1332. 송금 은행 콜센터에 동시 연락. 잔액 보존이 환급률 결정.</li>\n<li><strong>2단계 — 송금 은행 지급정지 (당일)</strong> — 신고 접수 → 송금 계좌 즉시 동결. 통신사기피해환급법 제3조에 따라 사기 의심거래 즉시 정지. 100만원 잔액 보전.</li>\n<li><strong>3단계 — 경찰서 사건사고사실확인원 + 피해구제 신청서 (1주 내)</strong> — 가까운 경찰서 방문 → 메신저피싱 신고 → 사건사고사실확인원 발급. 송금 은행에 피해구제 신청서 제출.</li>\n<li><strong>4단계 — 채권소멸공고 (2개월)</strong> — 금융감독원이 사기 계좌 채권소멸공고 게시. 기간 중 사기범 이의제기 없으면 잔액 환급 확정.</li>\n<li><strong>5단계 — 잔액 비율 환급 (공고 종료 후)</strong> — 잔액 한도에서 피해자별 비율 환급. 동일 계좌 다수 피해자면 비율 분배. 미회수분은 사기 고소 + 민사로 별도 진행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">송금 시점·은행·잔액 보존 여부에 따라 환급률이 달라집니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트',
        content:
          '<p><strong style="color:#1e3a5f">환급·신고에 아래 자료를 미리 정리해두면 처리가 빨라집니다.</strong></p>\n<ul>\n<li><strong>카카오톡·문자 대화 전체 캡처</strong> — 사칭자 ID·번호·발언·송금 요청 시점 모두 시간순.</li>\n<li><strong>송금 영수증·이체확인서</strong> — 송금 일자·시각·금액·수신 계좌·은행. 인터넷뱅킹·앱 모두.</li>\n<li><strong>112·1332 신고 접수번호·시각</strong> — 신고 시점 입증. 30분 이내 신고가 환급률 결정.</li>\n<li><strong>경찰서 사건사고사실확인원</strong> — 가까운 경찰서 방문 발급. 환급 신청 필수 서류.</li>\n<li><strong>피해구제 신청서</strong> — 송금 은행 양식. 영업점·고객센터·인터넷 신청 가능.</li>\n<li><strong>본 가족과의 통화·카톡 비교 자료</strong> — 사칭 ID와 본 가족 ID 차이 입증.</li>\n<li><strong>주민등록등본·신분증 사본</strong> — 환급 신청자 본인 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: "100만원이라 작은 금액이고 본인이 송금했으니 포기"하다 신고가 늦어지면 잔액이 모두 인출돼 환급률 0%로 떨어집니다. 30분 안 신고가 환급의 결정적 조건입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 가족사칭 메신저피싱 사건에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"메신저피싱은 환급법 적용 안 된다"는 잘못된 정보</strong> — 2024.10 통신사기피해환급법 개정으로 메신저피싱·SNS 사칭도 환급 대상 명시 포함.</li>\n<li><strong>"본인이 자발적 송금했으니 환급 불가"</strong> — 사기 의도가 입증되면 자발적 송금이라도 환급 가능. 환급법은 피해자 과실과 무관하게 잔액 환급 절차 적용.</li>\n<li><strong>"신고 늦었으니 포기"</strong> — 30분 지나도 잔액 일부 보전 가능. 채권소멸공고 2개월 동안 동결되면 일부라도 환급. 즉시 신고 우선.</li>\n<li><strong>"환급 위해 수수료·세금 송금" 요구</strong> — 100% 2차 사기. 공식 환급은 절대 추가 송금 요구하지 않음. 1332 즉시 재신고.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 경찰청 112 또는 ECRM(ecrm.police.go.kr) / 금융감독원 1332 또는 fss.or.kr / 송금 은행 고객센터 / 한국인터넷진흥원 KISA 118 / 대한법률구조공단 132.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 범죄단체 활동 포괄일죄와 공소시효 진행',
        summary:
          '대법원 2025도14142 사건(대법원, 2026.01.15 선고)에서 법원은 폭력행위 등 처벌에 관한 법률 제4조 제1항의 범죄단체 구성·가입·활동 행위가 포괄일죄 관계에 있고 공소시효는 최종 범죄행위 종료 시부터 진행한다고 판시했습니다. 메신저피싱 가족사칭 사건에서도 사칭자·자금세탁 인출자·범죄단체 운영자가 조직적으로 가담했다면 단순 사기를 넘어 단체적·반복적 행위로 평가되어 양형이 무거워질 수 있다는 시사점이 있습니다.',
        takeaway: '메신저피싱 100만원 사건도 사칭자·인출 가담자·범죄단체 운영자까지 책임이 미칠 수 있어, 카톡 캡처·송금 흐름·112 신고 시각을 시간순으로 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '신고가 1시간 늦었는데 100만원 환급 가능한가요?',
        answer:
          '<strong>잔액이 일부라도 남아있으면 환급 가능합니다. 일단 즉시 신고해보세요.</strong> 30분이 골든타임이지만 사기범이 모든 잔액을 즉시 인출 못하는 경우도 많아요. 채권소멸공고 2개월 동안 잔액 보전.',
      },
      {
        question: '아들 카톡 ID와 똑같이 와서 의심 못 했어요. 환급 거부될까요?',
        answer:
          '<strong>피해자 과실 여부와 무관하게 환급법은 잔액 환급 절차를 적용합니다.</strong> 정교한 사칭일수록 사기 의도 입증 강함. 송금 직후 신고 시각이 환급률 결정. 자책보다 즉시 신고 우선.',
      },
      {
        question: '100만원 작은 금액인데 사기 고소도 가능한가요?',
        answer:
          '<strong>금액 무관 사기죄 성립 가능합니다. 환급 + 사기 고소 동시 진행 권장.</strong> 같은 계좌·같은 사칭 패턴 다수 피해 정황은 수사기관 우선순위 상승. ecrm.police.go.kr 또는 가까운 경찰서.',
      },
      {
        question: '"환급 위해 수수료 보내라" 추가 연락이 왔어요',
        answer:
          '<strong>100% 2차 사기입니다. 절대 송금하지 마시고 즉시 1332 재신고.</strong> 공식 환급 절차는 추가 송금·개인정보 추가 요구하지 않습니다. 송금 은행도 사칭 가능성 의심.',
      },
      {
        question: '같은 계좌로 다른 가족사칭 피해자도 있다는데 어떻게 활용하나요?',
        answer:
          '<strong>다수 피해자 모이면 채권소멸공고 잔액 비율 분배, 수사 우선순위 상승.</strong> 같은 계좌·같은 사칭 패턴 정황은 범죄단체 입증에도 활용. 1332·112 신고 시 다수 피해 정황 함께 진술.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '메신저피싱 가족사칭 환급', href: '/guide/fraud/fraud-messenger-family-impersonation-recovery' },
      { label: '보이스피싱 환급 5단계', href: '/guide/fraud/fraud-voice-phishing-recovery-steps' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
      { label: '사이버범죄 신고 절차', href: '/guide/fraud/fraud-cyber-crime-report-procedure' },
      { label: '대포통장 송금 회수', href: '/guide/fraud/fraud-mule-account-recovery' },
    ],
  },

  // ─── 3. fraud / loan-friend-business-loss-not-paying ───
  {
    domain: 'fraud',
    slug: 'fraud-loan-friend-business-loss-not-paying',
    keyword: '친구 사업 손실 차용금 사기',
    questionKeyword: '친구가 사업 자금이라며 2,000만원 빌려갔는데 사업 망했다며 안 갚아요. 차용금일까요 사기일까요?',
    ctaKeyword: '친구 차용금 사기 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '친구가 사업 손실로 차용금 안 갚을 때 4가지 다툼 | 로앤가이드',
      description:
        '친구·지인 차용금을 사업 손실 핑계로 안 갚는 상황이라면 차용금 vs 사기(편취 의사 시점) 4가지 다툼 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>"5년 친구가 &lsquo;사업 자금 잠깐만, 3개월 안에 갚을게&rsquo; 해서 2,000만원 빌려줬어요. 6개월 지나니 &lsquo;사업이 망해서 못 갚는다&rsquo;는 답만 반복. 알고 보니 빌려갈 당시 이미 사업이 적자였고, 다른 사람한테도 같은 식으로 돈을 빌렸더라고요." 친구·지인 차용금 미반환은 차용금(민사) vs 사기(형사)가 갈리는 영역으로, 핵심은 &lsquo;빌려갈 당시 갚을 의사·능력이 있었는가&rsquo;라는 편취 의사 시점입니다. 형법 제347조 사기죄 입증은 빌려간 시점의 재정 상태·자금 용도 거짓·다수 피해자 정황이 결정. 차용증·계좌 이체·카톡 약속이 출발점이고, 사업 적자 시점 + 다른 채권자 존재가 결정적 정황입니다.</p>',
    sections: [
      {
        title: 'Q. 차용금 vs 사기를 가르는 4가지 다툼 포인트는?',
        content:
          '<p><strong style="color:#1e3a5f">A. 아래 4가지 정황 중 2개 이상이면 사기 트랙 검토가 가능한 영역입니다.</strong></p>\n<ul>\n<li><strong>① 빌려갈 당시 재정 상태 — 변제 능력의 부재</strong> — 사업이 이미 적자·신용불량·다른 채무 누적 상태였다면 처음부터 변제 능력 없음. 카드 연체·채권추심·체납 기록.</li>\n<li><strong>② 자금 용도 거짓 — &lsquo;사업 자금&rsquo; 아닌 다른 용도</strong> — &ldquo;사업 자금&rdquo; 명목으로 빌려가 도박·다른 채무 상환·생활비에 쓴 정황. 통장 입출금 흐름으로 입증.</li>\n<li><strong>③ 다수 채권자 존재 — 같은 시점 여러 명에게 차용</strong> — 같은 시기 여러 사람한테 비슷한 명목으로 차용. 처음부터 갚을 의사 없는 정황. 공동 고소단 가능.</li>\n<li><strong>④ 변제 회피 패턴 — 연락 차단·잠적</strong> — 변제일 도래 후 카톡 차단·전화 회피·이사·번호 변경. 단순 채무불이행 넘어 편취 의사 정황.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형법 제347조 사기죄(편취 의사 시점) + 민법 제598조 차용 + 민사집행법 강제집행. 빌려갈 당시 갚을 의사·능력이 있었으면 단순 채무불이행(민사), 없었으면 사기(형사). &ldquo;나중에 못 갚게 됐다&rdquo;는 사기 아님, &ldquo;처음부터 못 갚을 거 알았다&rdquo;가 사기.</blockquote>',
      },
      {
        title: 'Q. 회수 트랙은 어떻게 갈리나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 4가지 트랙을 동시 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>지급명령 → 강제집행 (1~2개월)</strong> — 차용증·이체내역만으로 지급명령 신청. 이의 없으면 확정. 친구 명의 부동산·예금·급여 압류로 회수.</li>\n<li><strong>소액심판·민사 본안</strong> — 3,000만원 이하 소액심판, 초과 시 본안. 차용증 없어도 카톡·이체내역으로 입증 가능.</li>\n<li><strong>사기 고소 → 경찰 사이버수사대</strong> — 빌려갈 당시 변제 능력·의사 부재 입증되면 형법 제347조 사기. ecrm.police.go.kr 또는 관할 경찰서.</li>\n<li><strong>재산조회·신용조회 (소송 중)</strong> — 법원 재산조회 신청으로 채무자 부동산·예금·자동차 추적. 사실조회 회신으로 강제집행 대상 확보.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">차용 시점 재정 상태·다수 채권자·변제 회피 패턴에 따라 사기 vs 민사 트랙이 갈립니다. AI가 먼저 정리해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 신고·회수는 어떻게 진행하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 4단계 트랙을 동시 진행할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 차용증·이체내역·카톡 정리 (1주 내)</strong> — 차용증(있으면) + 계좌이체 영수증 + 카톡 약속(&ldquo;3개월 안에 갚을게&rdquo;) + 변제 독촉 카톡 시간순 정리.</li>\n<li><strong>2단계 — 내용증명 발송 (2주 내)</strong> — &ldquo;차용금 2,000만원 + 약정 변제일 + 미반환 → 14일 내 변제 요구&rdquo; 내용증명. 친구 주민등록 주소로 발송. 시효 중단·사기 고의 입증.</li>\n<li><strong>3단계 — 지급명령 + 다수 피해자 확인 (1개월)</strong> — 전자소송으로 지급명령 신청(인지대 약 2만원). 동시에 친구의 다른 채권자 존재 여부 SNS·지인 통해 확인.</li>\n<li><strong>4단계 — 사기 고소 + 강제집행 (2개월~)</strong> — 빌려갈 당시 사업 적자·다른 채무·다수 차용 정황 입증되면 사기 고소(ecrm.police.go.kr). 지급명령 확정 후 부동산·예금·급여 압류로 회수.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">⚠️ 흔한 실수: &ldquo;친구라 시간 더 줘야지&rdquo;라며 1년 이상 방치하면 친구가 재산 처분·다른 채권자 우선 변제로 회수 길이 좁아집니다. 변제일 도래 후 1개월 내 내용증명·지급명령이 회수율을 결정.</blockquote>',
      },
      {
        title: '🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">공식 기관을 통해 다음 경로로 상담·신청 절차를 검토해볼 수 있습니다.</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템</strong> — ecrm.police.go.kr / 182 (차용 사기 고소)</li>\n<li><strong>전자소송</strong> — ecfs.scourt.go.kr (지급명령·소액심판 온라인 신청)</li>\n<li><strong>한국소비자원</strong> — 1372 / consumer.go.kr (개인 분쟁 상담)</li>\n<li><strong>금융감독원</strong> — 1332 (채무자 신용·계좌 의심거래 신고)</li>\n<li><strong>대한법률구조공단</strong> — 132 (평일 9~18시 무료 상담, 자격 요건)</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 거래 관행과 당사자 의사 해석에 따른 책임',
        summary:
          '대법원 2022다255454 사건(대법원, 2026.01.29 선고)에서 법원은 사회 일반에 존재하는 특정한 거래의 바로계약 관행이 이루어져 있다고 하기 어려우며, 그러한 관행이 사회적 일반적으로 받아들여지지 않은 경우 당사자의 진정한 의사를 해석해 책임을 판단해야 한다고 판시했습니다. 친구·지인 차용금 분쟁에서도 빌려갈 당시 차주의 진정한 변제 의사·능력이 있었는지를 카톡·자금 흐름·재정 상태로 종합 해석해야 한다는 시사점이 있어, 단순 약속 위반인지 처음부터의 편취인지 구분이 결정적입니다.',
        takeaway: '친구 차용금 미반환은 빌려갈 당시 변제 의사·능력이 있었는지가 사기 vs 민사를 가르는 핵심으로, 차용 시점 재정 상태·자금 용도·다수 채권자·변제 회피 패턴을 시간순으로 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '차용증 없이 카톡으로만 빌려줬어요. 회수 가능한가요?',
        answer:
          '<strong>카톡·계좌이체 내역만으로도 차용 입증 가능합니다.</strong> &ldquo;3개월 안에 갚을게&rdquo; 같은 약속 카톡 + 이체 영수증이 차용증 효력. 단, 사기 고소까지 가려면 빌려갈 당시 재정 상태 정황 추가 필요.',
      },
      {
        question: '친구가 "사업 망했다"는데 진짜 사기일 수 있나요?',
        answer:
          '<strong>빌려갈 당시 이미 사업이 적자였거나 다른 채무로 변제 불가 상태였다면 사기 가능성 높습니다.</strong> 사업자등록증·세무서 부가세 신고·신용정보 조회로 차용 시점 재정 상태 입증. &ldquo;나중에 망함&rdquo;은 민사, &ldquo;처음부터 못 갚을 상태&rdquo;는 형사.',
      },
      {
        question: '같은 시기 다른 친구한테도 빌렸다는데 어떻게 활용하나요?',
        answer:
          '<strong>다수 채권자 존재는 처음부터 갚을 의사 부재의 강한 정황입니다.</strong> 3명 이상 모이면 공동 고소단 가능. 같은 명목·같은 시기·비슷한 금액 차용 패턴은 사기 입증에 결정적. 수사 우선순위도 상승.',
      },
      {
        question: '지급명령했는데 친구가 이의신청하면 어떻게 되나요?',
        answer:
          '<strong>이의신청 시 본안 소송으로 자동 이행됩니다. 입증 책임은 동일.</strong> 카톡·이체내역·내용증명이 그대로 증거로 활용. 본안에서도 차용 입증되면 승소. 강제집행은 본안 판결 확정 후.',
      },
      {
        question: '친구가 재산 다 빼돌린 것 같아요. 회수 길이 있나요?',
        answer:
          '<strong>법원 재산조회 신청 + 사해행위취소 소송으로 회수 가능성을 검토할 수 있습니다.</strong> 친구가 변제 회피 위해 가족·지인에게 명의 이전한 정황은 사해행위. 5년 내 처분이면 취소 청구 가능. 추가로 사기 고소 시 수사기관이 자금 추적.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '친구 빌려주고 잠적 회수', href: '/guide/fraud/fraud-friend-loan-disappear-recovery' },
      { label: '차용증 없는 사기 입증', href: '/guide/fraud/fraud-without-loan-document-proof' },
      { label: '지급명령 신청 절차', href: '/guide/fraud/fraud-payment-order-procedure' },
      { label: '사기 고소장 작성 방법', href: '/guide/fraud/fraud-complaint-documents-checklist' },
      { label: '사해행위취소 소송', href: '/guide/fraud/fraud-fraudulent-transfer-cancellation' },
    ],
  },
];
