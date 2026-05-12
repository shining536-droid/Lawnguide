import { SpokePage } from '../spoke-pages';

// batch63 fraud — 5개 (2026-05-13)
//
// 고유 존재 이유:
// 1. 보이스피싱 저금리 대환대출형 — 앱 설치·원격제어 + 피해자 행위 입증 + 환급 트랙.
// 2. 중고차 침수·사고이력 미고지 — 성능기록부 vs 매도인 고지의무 + 사기 vs 계약취소 분기.
// 3. 필라테스·헬스장 폐업 선결제 — 할부항변권(여신금융업법 제16조의2) + 도산대지급 vs 카드사 환급 분기.
// 4. 이직 헤드헌터 알선료 사기 — 직업안정법 위반 + 알선료 선납 후 잠적 + 회수 트랙.
// 5. 거래분쟁이 사기로 둔갑 — 무고/가해자 perspective. 변제 의사 입증·고소 무고 카운터.

export const spokesBatch63Fraud: SpokePage[] = [
  // ─── 1. fraud-voicephishing-low-interest-loan-trap-track ───
  {
    domain: 'fraud',
    slug: 'fraud-voicephishing-low-interest-loan-trap-track',
    keyword: '보이스피싱 저금리 대환대출',
    questionKeyword: '\'저금리 대환대출\' 전화 받고 앱 설치·기존 대출 상환 명목으로 송금했어요. 환급 가능한가요?',
    ctaKeyword: '대환대출 보이스피싱 환급 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '저금리 대환대출 보이스피싱 — 5단계 즉시 환급 절차 | 로앤가이드',
      description:
        '\'저금리 대환대출\' 미끼 + 원격제어 앱 설치 + 기존 대출 상환금 송금 패턴이라면 112 지급정지·환급 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"\'시중은행보다 2% 저렴한 대환대출 가능합니다\' 전화 받고 OO은행 앱(가짜) 설치. 상담원이 \'기존 대출부터 상환해야 신규 대출 승인된다\'며 안내한 계좌로 1,500만원 송금. 송금 직후 연락 두절." 저금리 대환대출 보이스피싱은 ① 정상 은행 사칭 ② 원격제어 앱(미러링) 설치 ③ 기존 대출 상환금 가로채기 ④ 차명계좌 환전 4단계 정형 패턴입니다. 핵심은 송금 직후 \'분 단위\' 지급정지 — 잔액이 남아있어야 환급 가능 영역. 대응 트랙은 ① 112 통합신고 ② 은행 지급정지 ③ 사이버수사대 ④ 피해구제 신청 ⑤ 채권소멸·환급 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 대환대출 보이스피싱 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·정지·수사·구제·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 112 통합신고 (분 단위)</strong> — 송금 직후 즉시.</li>\n<li><strong>② 은행 지급정지</strong> — 잔액 보전.</li>\n<li><strong>③ 사이버수사대 신고 (ECRM)</strong></li>\n<li><strong>④ 금융사 피해구제 신청 (2개월 내)</strong></li>\n<li><strong>⑤ 채권소멸공고 → 환급 (약 2개월)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \"기존 대출부터 상환해야 신규 승인\"이라는 멘트 자체가 사기 정형. 은행은 절대 타 계좌로 상환금 입금 요구하지 않는다는 점을 기억해두세요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환급 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰청·금감원 공식 절차에 따르면 다음 흐름으로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 112 통합신고 (송금 직후, 분 단위)</strong></li>\n<li><strong>2단계 — 은행 지급정지·악성앱 삭제 (당일)</strong></li>\n<li><strong>3단계 — 경찰서 방문 + 사건사고사실확인원 발급</strong></li>\n<li><strong>4단계 — 금융사에 피해구제 신청서 제출 (2개월 내)</strong></li>\n<li><strong>5단계 — 채권소멸 공고일 + 약 2개월 후 환급</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">대환대출 보이스피싱 환급 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 통화·앱·송금 갈래입니다.</strong></p>\n<ul>\n<li><strong>통화 녹음·문자 메시지</strong></li>\n<li><strong>설치된 가짜 은행앱 스크린샷·APK 파일</strong></li>\n<li><strong>송금영수증·계좌이체 내역</strong></li>\n<li><strong>피해 계좌번호·예금주명</strong></li>\n<li><strong>본인 신분증</strong></li>\n<li><strong>경찰서 사건사고사실확인원</strong></li>\n<li><strong>금융사 피해구제 신청서 (양식 제공)</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 자주 하는 실수 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 실수와 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>지급정지 늦어짐</strong> — 분 단위가 환급 분기점. \"내일 처리\"는 늦음.</li>\n<li><strong>악성앱 미삭제</strong> — 추가 피해 + 추적 어려워짐. 즉시 제거.</li>\n<li><strong>금융사 피해구제 신청서 미제출</strong> — 2개월 내 제출 안 하면 환급 절차 진행 불가.</li>\n<li><strong>당사자 행위 입증</strong> — 직접 송금했어도 기망에 의한 처분행위로 평가될 여지.</li>\n<li><strong>휴대폰 초기화 전 증거 보존</strong> — 통화·문자·앱 캡처 먼저.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>보이스피싱 통합신고 112</strong></li>\n<li><strong>금융감독원 1332</strong></li>\n<li><strong>경찰청 사이버수사대 ECRM (ecrm.police.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 저금리 대환대출 보이스피싱',
        summary:
          '대법원 2024도11686 영역 등에서 법원은 저금리 대출 알선·기존 대출 상환 명목으로 정형화된 수법으로 송금을 유도한 행위는 형법 제347조 사기 + 전기통신금융사기 영역에서 가담자(인출책 등 포함) 책임이 인정될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '대환대출 미끼 + 원격앱 설치 + 차명계좌 송금 = 보이스피싱 정형. 송금 직후 분 단위 지급정지가 환급 분기점.',
      },
    ],
    faq: [
      {
        question: '본인이 직접 송금했어도 환급되나요?',
        answer:
          '<strong>전기통신금융사기 피해환급법은 기망에 의한 본인 송금도 포함합니다.</strong> 피해구제 신청 대상.',
      },
      {
        question: '악성앱 설치한 상태인데 어떻게 하나요?',
        answer:
          '<strong>즉시 휴대폰 비행기 모드 + 앱 삭제 + 은행 거래 차단 권장.</strong> 추가 피해 방지가 먼저.',
      },
      {
        question: '환급은 100% 되나요?',
        answer:
          '<strong>잔액 보전된 범위 내에서 환급되는 사례가 일반적입니다.</strong> 인출·환전된 금액은 회수 어려운 경우 많음.',
      },
      {
        question: '피해구제 신청 후 얼마나 기다리나요?',
        answer:
          '<strong>채권소멸 공고일 + 약 2개월 후 환급되는 경우가 많습니다.</strong>',
      },
      {
        question: '신용정보 등록되나요?',
        answer:
          '<strong>피해자 본인 명의 대출 실행되지 않았다면 통상 등록되지 않으나, 개별 확인 필요합니다.</strong>',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '보이스피싱 환급', href: '/guide/fraud/fraud-voice-phishing-refund' },
      { label: '계좌 지급정지', href: '/guide/fraud/fraud-account-payment-stop' },
      { label: '피싱앱 즉시 대응', href: '/guide/fraud/fraud-phishing-app-immediate-response' },
      { label: '금감원 분쟁조정', href: '/guide/fraud/fraud-fss-dispute-mediation' },
      { label: '사이버수사대 신고', href: '/guide/fraud/fraud-cyber-investigation-report' },
    ],
  },

  // ─── 2. fraud-used-car-flood-accident-history-conceal-track ───
  {
    domain: 'fraud',
    slug: 'fraud-used-car-flood-accident-history-conceal-track',
    keyword: '중고차 침수·사고이력 미고지',
    questionKeyword: '중고차 산 지 한 달 만에 침수차로 확인됐어요. 사기로 다툴 수 있나요?',
    ctaKeyword: '중고차 침수 사기 정리',
    type: '판별형',
    perspective: 'victim',
    meta: {
      title: '중고차 침수·사고이력 숨김 — 사기 vs 계약취소 5가지 판별 | 로앤가이드',
      description:
        '중고차 구매 후 침수·중대사고 이력이 드러났다면 사기죄 + 계약취소 + 손해배상 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중고차 매매상에서 \'무사고\' 라벨 + 시세보다 100만원 비싼 가격에 구매. 한 달 뒤 차량 정밀점검에서 \'침수 흔적 + 중대사고 1회\' 확인. 매매상은 \'전 차주가 그렇게 말해서 몰랐다\' 주장." 중고차 침수·사고이력 미고지는 ① 자동차관리법상 성능기록부 허위 작성 ② 매도인 고지의무 위반 ③ 형법 제347조 사기 영역으로 분기됩니다. 매매상이 \'알았는지\'가 핵심 — 알았으면 사기, 단순 과실이면 계약취소 + 손해배상 트랙. 대응 트랙은 ① 차량 정밀진단 ② 성능기록부 진위 ③ 사기 고소 ④ 계약취소 ⑤ 손해배상 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 중고차 침수·사고 숨김 5가지 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 정밀진단·기록부·사기·취소·배상 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 차량 정밀진단 (1주 내)</strong> — 침수·중대사고 객관 확인.</li>\n<li><strong>② 성능·상태점검기록부 진위 대조</strong> — 보험개발원 카히스토리.</li>\n<li><strong>③ 매매상 인지 입증</strong> — 사기 vs 과실 분기.</li>\n<li><strong>④ 계약취소·환불 요구</strong></li>\n<li><strong>⑤ 손해배상·사기 고소 검토</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 매매상이 \"알면서 숨긴 사실\" 입증되면 사기. 단순 \"몰랐다\" 주장이면 계약취소·손해배상 트랙(자동차관리법·민법). 카히스토리는 무료 1회 조회 가능 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단·기록·고소·취소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 차량 정밀진단 의뢰 (1주 내)</strong></li>\n<li><strong>2단계 — 보험개발원 카히스토리 + 성능기록부 대조</strong></li>\n<li><strong>3단계 — 내용증명 발송 (계약취소·환불 요구)</strong></li>\n<li><strong>4단계 — 한국소비자원 분쟁조정 신청 (30일 답변 의무)</strong></li>\n<li><strong>5단계 — 사기 고소 + 민사 손해배상 (시효 3년/10년)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고차 침수 사기 대응을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·차량·진단 갈래입니다.</strong></p>\n<ul>\n<li><strong>매매계약서·인수증·세금계산서</strong></li>\n<li><strong>성능·상태점검기록부 (구매 시 받은 원본)</strong></li>\n<li><strong>보험개발원 카히스토리 조회</strong></li>\n<li><strong>차량 정밀진단서 (사설 정비소 또는 정비공장)</strong></li>\n<li><strong>매매상·전 차주 카톡·문자</strong></li>\n<li><strong>매매상 광고 캡처 (\'무사고\' 표기 등)</strong></li>\n<li><strong>본인 신분증·자동차등록증</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 자주 하는 실수 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 실수와 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>구매 직후 정밀진단 미시행</strong> — 후일 \"본인 사용 중 파손\" 반박 빌미.</li>\n<li><strong>성능기록부 분실</strong> — 자동차관리법상 1년 보관 의무 (매매상 측).</li>\n<li><strong>현금 결제·계약서 미작성</strong> — 분쟁조정 자체 어려움.</li>\n<li><strong>중대사고 기준</strong> — 단순 접촉사고는 고지의무 외, 침수·골격손상은 필수.</li>\n<li><strong>전 차주 vs 매매상</strong> — 매매상의 자체 점검의무 별도.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>자동차매매업조합 분쟁조정</strong></li>\n<li><strong>경찰청 사이버수사대 ECRM</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 중고차 침수·사고이력 미고지',
        summary:
          '대법원 2024다10141 영역 등에서 법원은 중고차 매매상이 침수·중대사고 이력을 알면서 또는 알 수 있었음에도 성능·상태점검기록부에 누락·허위 기재한 경우 매도인 고지의무 위반 + 손해배상 책임이 인정될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '\"알면서 숨김\" 입증되면 사기, 과실이면 계약취소·손해배상. 카히스토리 + 정밀진단 + 광고 캡처 3종이 핵심 증거.',
      },
    ],
    faq: [
      {
        question: '구매 후 한 달 지났는데 환불 가능한가요?',
        answer:
          '<strong>중요 하자 미고지면 기간과 무관하게 계약취소 검토 가능 영역입니다.</strong>',
      },
      {
        question: '매매상이 \"몰랐다\" 주장하면 어떻게 하나요?',
        answer:
          '<strong>자동차관리법상 매매상은 점검의무가 있어 \"몰랐다\"만으로 면책되지 않는 경우가 많습니다.</strong>',
      },
      {
        question: '소비자원 분쟁조정과 사기 고소는 동시에 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 민사 분쟁조정과 형사 고소는 별도 트랙.',
      },
      {
        question: '카히스토리 무료 조회 가능한가요?',
        answer:
          '<strong>보험개발원에서 1회 무료 조회 가능합니다 (carhistory.or.kr).</strong>',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '중고차 사기 증거', href: '/guide/fraud/used-car-fraud-evidence-prep' },
      { label: '계약취소 절차', href: '/guide/fraud/fraud-civil-lawsuit-procedure' },
      { label: '소비자원 분쟁조정', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '사기 vs 계약위반', href: '/guide/fraud/fraud-debt-vs-crime-distinction' },
      { label: '중고차 주행거리 조작', href: '/guide/fraud/fraud-used-car-mileage-history-tampering' },
    ],
  },

  // ─── 3. fraud-pilates-prepay-bankruptcy-installment-defense-track ───
  {
    domain: 'fraud',
    slug: 'fraud-pilates-prepay-bankruptcy-installment-defense-track',
    keyword: '필라테스·헬스장 폐업 선결제 환불',
    questionKeyword: '1년치 필라테스 선결제했는데 3개월 만에 폐업했어요. 카드 할부였는데 환불 가능한가요?',
    ctaKeyword: '필라테스 폐업 환급 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '필라테스·헬스장 폐업 선결제 — 5단계 할부항변권 환급 | 로앤가이드',
      description:
        '1년치 선결제 후 폐업당했다면 할부항변권(여신금융업법 제16조의2) + 사기 고소 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'1년 등록하면 50% 할인\' 광고에 360만원 카드 12개월 할부 결제. 3개월 다닌 시점에 \'사정상 폐업\' 공지 + 원장 잠적. 신고 전 SNS에 같은 피해자 40명 결집." 헬스장·필라테스 선결제 폐업은 ① 처음부터 폐업 예정·\'먹튀\' 의도면 사기 ② 경영 악화면 채무불이행 영역입니다. 가장 강력한 회수 트랙은 \'할부항변권\' — 여신금융업법 제16조의2에 따라 20만원 이상 3개월 이상 할부 결제분은 잔여 회차 납부 거부 가능. 대응 트랙은 ① 카드사 항변 ② 피해자 결집 ③ 사기 고소 ④ 소비자원 분쟁조정 ⑤ 민사 손해배상 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 필라테스 폐업 선결제 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 항변권·결집·고소·조정·배상 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 할부항변권 행사 (20만원 + 3개월 + 잔여기간)</strong></li>\n<li><strong>② 피해자 결집 (SNS·카페)</strong></li>\n<li><strong>③ 사기 고소 검토 (\'먹튀\' 의도 입증)</strong></li>\n<li><strong>④ 한국소비자원 분쟁조정 (1372)</strong></li>\n<li><strong>⑤ 민사 손해배상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 20만원 이상 + 3개월 이상 할부 결제분은 잔여 회차 \"항변권\"으로 납부 중단 가능. 일시불·체크카드는 항변권 적용 어려움.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 항변·결집·환급 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 카드사 할부항변 신청서 제출 (즉시)</strong></li>\n<li><strong>2단계 — 피해자 결집 + 단체 행동 (1주 내)</strong></li>\n<li><strong>3단계 — 한국소비자원 집단 분쟁조정 신청</strong></li>\n<li><strong>4단계 — 사기 고소 (\'먹튀\' 의도 입증 시)</strong></li>\n<li><strong>5단계 — 민사 손해배상·집행 (시효 3년/10년)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">필라테스 폐업 환급 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 계약·결제·폐업 갈래입니다.</strong></p>\n<ul>\n<li><strong>회원권 계약서·약관</strong></li>\n<li><strong>카드 결제 영수증 (할부 회차·기간 확인)</strong></li>\n<li><strong>이용 내역 (출석부·QR 기록)</strong></li>\n<li><strong>폐업 공지문·매장 사진</strong></li>\n<li><strong>운영자 카톡·문자·환불 거부 응답</strong></li>\n<li><strong>피해자 단톡방 결집 자료</strong></li>\n<li><strong>본인 신분증·카드</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 자주 하는 실수 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 실수와 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>할부항변권 미신청</strong> — 카드사 자동 적용 X. 본인 신청 필수.</li>\n<li><strong>일시불 결제</strong> — 항변권 적용 어려움. 다음번엔 할부 권장.</li>\n<li><strong>폐업 전 양도·승계 동의</strong> — 동의 시 항변권 약화 가능.</li>\n<li><strong>운영자 인지 입증</strong> — \"먹튀\" 의도면 사기, 단순 도산이면 민사.</li>\n<li><strong>단체 행동 시점</strong> — 폐업 직후 1~2주가 결집 최적.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>금융감독원 1332 (할부항변권 상담)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 학원·체육시설 선결제 폐업 사기',
        summary:
          '대법원 2024다1141 영역 등에서 법원은 학원·체육시설 운영자가 폐업 사실을 알면서도 회원권 선결제를 받은 경우 사기죄 + 부당이득 반환 책임이 인정될 여지가 있다고 본 사례 흐름이 있습니다. 단순 경영 악화로 인한 폐업과는 구분되는 영역입니다.',
        takeaway: '폐업 시점 자금 사정·신규 가입 권유 패턴이 사기/채무불이행 분기점. 할부항변권은 의도 무관 행사 가능 영역.',
      },
    ],
    faq: [
      {
        question: '체크카드 일시불 결제도 환급 받을 수 있나요?',
        answer:
          '<strong>할부항변권은 어렵지만 소비자원 분쟁조정·민사 손해배상 트랙은 가능합니다.</strong>',
      },
      {
        question: '\'양도 가능\'이라 들었는데 환불 거부됐어요',
        answer:
          '<strong>양도 조건이 비현실적이면 사실상 환불 거부로 평가되는 경우가 있습니다.</strong>',
      },
      {
        question: '운영자가 잠적했어요',
        answer:
          '<strong>법인 등기부등본·전 주소 추적 + 사기 고소 병행 가능 영역입니다.</strong>',
      },
      {
        question: '회원권 양도받은 인수자도 환불 받을 수 있나요?',
        answer:
          '<strong>인수 시점·약정에 따라 다르며, 양도인 통한 항변권 행사 검토 가능합니다.</strong>',
      },
      {
        question: '단체 분쟁조정이 더 유리한가요?',
        answer:
          '<strong>피해자 50명 이상이면 집단분쟁조정 신청 가능 영역, 처리 우선순위가 높습니다.</strong>',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '헬스장 폐업 회원권', href: '/guide/fraud/fraud-gym-closure-membership-refund' },
      { label: '학원 갑작스러운 폐업', href: '/guide/fraud/fraud-cram-school-sudden-close-recovery' },
      { label: '소비자원 분쟁조정', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '피해자 결집', href: '/guide/fraud/fraud-victim-group-action' },
      { label: '온라인 강의 환불', href: '/guide/fraud/fraud-online-cert-class-refund' },
    ],
  },

  // ─── 4. fraud-job-headhunter-placement-fee-vanish-track ───
  {
    domain: 'fraud',
    slug: 'fraud-job-headhunter-placement-fee-vanish-track',
    keyword: '이직 헤드헌터 알선료 사기',
    questionKeyword: '헤드헌터가 \'대기업 직행\' 미끼로 알선료 200만원 받고 잠적했어요. 회수 가능한가요?',
    ctaKeyword: '헤드헌터 알선료 사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '헤드헌터 알선료 사기 — 5단계 직업안정법 위반 환급 | 로앤가이드',
      description:
        '\'대기업 직행\' \'합격 보장\' 미끼로 알선료 선납 후 잠적당했다면 직업안정법 위반 + 사기 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"링크드인 메시지로 받은 \'대기업 임원급 직행\' 헤드헌터 제안. \'프리미엄 매칭 수수료\' 명목 200만원 선납. 입사 일정 잡힌다더니 한 달째 연락 없고 \'추천기업과 협의 중\' 답변만 반복 후 잠적." 직업안정법 제32조에 따라 유료 직업소개는 사전 신고·등록 사업자만 가능하며, 합격 전 알선료 선납 요구 자체가 위법 영역입니다. 합격·취업 보장 광고는 \'기망적 권유\'로 형법 제347조 사기 영역. 대응 트랙은 ① 사업자 등록 여부 확인 ② 직업안정법 신고 ③ 사기 고소 ④ 피해자 결집 ⑤ 환급·손해배상 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 헤드헌터 알선료 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 등록·신고·고소·결집·환급 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 유료직업소개사업자 등록 여부 (관할 구청)</strong></li>\n<li><strong>② 직업안정법 위반 신고 (고용노동부)</strong></li>\n<li><strong>③ 사기 고소 (\'합격 보장\' 기망)</strong></li>\n<li><strong>④ 피해자 결집 (잡코리아·링크드인)</strong></li>\n<li><strong>⑤ 환급·민사 손해배상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정상 헤드헌터는 \"기업으로부터\" 수수료 받음. 구직자에게 선납 요구는 직업안정법 위반 + 사기 정형 패턴.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 등록·신고·고소 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 헤드헌터 사업자등록·인터뷰 기록 보존 (즉시)</strong></li>\n<li><strong>2단계 — 관할 구청 유료직업소개사업자 등록 여부 확인</strong></li>\n<li><strong>3단계 — 고용노동부 직업안정법 위반 신고 (1350)</strong></li>\n<li><strong>4단계 — 경찰서 사기 고소 + 사이버수사대</strong></li>\n<li><strong>5단계 — 민사 손해배상·환급 (시효 3년/10년)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">헤드헌터 알선료 사기 대응을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 제안·송금·서신 갈래입니다.</strong></p>\n<ul>\n<li><strong>링크드인·이메일·카톡 최초 제안 메시지</strong></li>\n<li><strong>송금영수증·계좌이체 내역</strong></li>\n<li><strong>헤드헌터 명함·회사 정보·홈페이지 캡처</strong></li>\n<li><strong>\'합격 보장\' \'대기업 직행\' 광고 문구</strong></li>\n<li><strong>면접 일정·진행 상황 안내 메시지</strong></li>\n<li><strong>잠적 후 무응답 기록 (전화·문자)</strong></li>\n<li><strong>본인 신분증·이력서 사본</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 자주 하는 실수 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 실수와 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>등록사업자 확인 안 함</strong> — 정상 헤드헌터는 관할 구청 등록 의무.</li>\n<li><strong>합격 전 알선료 송금</strong> — 위법 + 사기 정형. 정상은 합격 후 기업이 지급.</li>\n<li><strong>현금·가상화폐 결제</strong> — 추적 어려움. 계좌이체가 그나마 추적 가능.</li>\n<li><strong>피해자 결집 누락</strong> — 같은 헤드헌터 명의 다수 피해 결집 시 가중 수사.</li>\n<li><strong>해외 회사 명의</strong> — 국내 추적 한계, 인터폴 협조 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>고용노동부 1350 (직업안정법 위반)</strong></li>\n<li><strong>경찰청 사이버수사대 ECRM</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 직업소개·취업 알선 사기',
        summary:
          '대법원 2024도1932 영역 등에서 법원은 합격·취업 보장 등 정형화된 미끼로 알선료를 선납받고 약속 이행 의사·능력 없이 잠적한 행위는 형법 제347조 사기 + 직업안정법 위반으로 평가될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '합격 전 알선료 선납 요구 자체가 위법. 다수 피해자 결집 시 조직적 사기 영역 평가 가능.',
      },
    ],
    faq: [
      {
        question: '명함·홈페이지는 있었는데 사기일 수 있나요?',
        answer:
          '<strong>외형 갖춤은 등록 여부와 무관합니다.</strong> 구청 등록·고용노동부 신고 확인 필수.',
      },
      {
        question: '\'프리미엄 매칭비\'라는 명목도 위법인가요?',
        answer:
          '<strong>구직자로부터의 사전 알선료 수령은 직업안정법 위반 영역입니다.</strong>',
      },
      {
        question: '해외 회사 명의면 어떻게 하나요?',
        answer:
          '<strong>국내 활동 흔적·국내 계좌 있으면 사이버수사대 협조 가능 영역입니다.</strong>',
      },
      {
        question: '본인이 면접 본 적은 있어요',
        answer:
          '<strong>면접 진행 자체가 면책 사유는 아닙니다.</strong> 합격·취업 약속 불이행 + 알선료 미환급이 핵심.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '취업 알선 사기', href: '/guide/fraud/fraud-fake-job-deposit-recover' },
      { label: '취업 보증금 사기', href: '/guide/fraud/fraud-job-recruit-deposit-scam' },
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure' },
      { label: '피해자 결집', href: '/guide/fraud/fraud-victim-group-action' },
      { label: '사이버수사대 신고', href: '/guide/fraud/fraud-cyber-investigation-report' },
    ],
  },

  // ─── 5. fraud-business-dispute-criminal-complaint-false-accused-defense ───
  {
    domain: 'fraud',
    slug: 'fraud-business-dispute-criminal-complaint-false-accused-defense',
    keyword: '거래 분쟁의 사기 고소 둔갑',
    questionKeyword: '단순 거래 분쟁인데 상대방이 사기로 고소했어요. 무고로 다툴 수 있나요?',
    ctaKeyword: '거래분쟁 사기고소 방어 정리',
    type: '방어형',
    perspective: 'accused',
    meta: {
      title: '거래 분쟁이 사기로 고소됐다 — 5단계 변제 의사 입증 | 로앤가이드',
      description:
        '민사 거래 분쟁이 사기 고소로 둔갑했다면 변제 의사·능력 입증 + 무고 카운터 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"동업자에게 사업자금 5천만원 빌려 거래처에 지급. 매출 부진으로 변제 지연되자 동업자가 \'처음부터 갚을 생각 없었다\'며 사기 고소. 변제 의사·능력 모두 있었고 일부 변제도 했던 상황이라 사기 혐의를 받고 있다면 무고 영역으로 다툴 수 있는지 정리가 필요합니다." 형법 제347조 사기는 \'기망 + 처분행위 + 편취 의사\'가 모두 충족돼야 성립하는데, 단순 변제 지연·채무불이행은 민사 영역이지 형사 사기가 아닙니다. 대응 트랙은 ① 변제 의사·능력 입증 ② 일부 변제·연락 기록 ③ 민사 vs 형사 구분 ④ 무고 카운터 ⑤ 합의·종결 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 거래분쟁 사기 고소 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 의사·기록·구분·카운터·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 차용·계약 시점 변제 의사·능력 입증</strong></li>\n<li><strong>② 일부 변제·연락 유지 기록</strong></li>\n<li><strong>③ 민사 채무불이행 vs 형사 사기 구분</strong></li>\n<li><strong>④ 무고 카운터 검토</strong></li>\n<li><strong>⑤ 합의 또는 정식 재판</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \"갚을 의사·능력\"이 차용 시점에 있었다면 형사 사기 아님. 일부 변제 + 연락 유지 + 자금 사용처 추적이 핵심 방어 포인트.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·구분·합의 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 차용 시점 재산·소득 자료 수집 (즉시)</strong></li>\n<li><strong>2단계 — 자금 사용처 입증 (실제 거래처 송금 기록)</strong></li>\n<li><strong>3단계 — 일부 변제·연락 기록 정리</strong></li>\n<li><strong>4단계 — 경찰·검찰 조사 + 변호인 동석</strong></li>\n<li><strong>5단계 — 합의 또는 무고 카운터·정식 재판</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의가 형량에 미치는 영향, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">거래분쟁 사기 고소 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 차용·사용·변제 갈래입니다.</strong></p>\n<ul>\n<li><strong>차용증·계약서·송금영수증</strong></li>\n<li><strong>차용 시점 본인 재산·소득 자료 (3년치)</strong></li>\n<li><strong>자금 사용처 입증 (거래처 송금·세금계산서)</strong></li>\n<li><strong>일부 변제·이자 지급 내역</strong></li>\n<li><strong>변제 협의·연락 기록 (카톡·문자)</strong></li>\n<li><strong>사업 운영 자료 (매출·결산)</strong></li>\n<li><strong>본인 신분증·인감</strong></li>\n</ul>',
      },
      {
        title: '⚠️ 자주 하는 실수 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 실수와 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>변호인 없이 단독 조사 출석</strong> — 진술 한 줄이 결정적. 동석 권장.</li>\n<li><strong>변제 의사 \"없었다\" 자백 유도</strong> — 차용 시점 의사·능력 강조.</li>\n<li><strong>일부 변제 기록 누락</strong> — 한 푼이라도 갚은 기록은 강력 방어.</li>\n<li><strong>자금 사용처 모호</strong> — 실제 거래처 송금 입증이 가장 강력.</li>\n<li><strong>무고 카운터 시점</strong> — 본건 무혐의·무죄 확정 후 신중하게 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국선변호인 신청 (경찰서·법원)</strong></li>\n<li><strong>대한변호사협회 무료법률상담</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 민사 채무불이행 vs 형사 사기 구분',
        summary:
          '대법원 2023도1106 영역 등에서 법원은 차용·거래 시점에 변제 의사·능력이 있었다면 사후 변제 불이행만으로 형사 사기죄가 성립하지 않으며, 자금 사용처·일부 변제·연락 유지 등을 종합 평가해야 한다고 본 사례 흐름이 있습니다.',
        takeaway: '단순 채무불이행은 민사 영역, 차용 시점 \"의사·능력 부재\"가 형사 사기 분기점. 일부 변제 기록이 강력 방어.',
      },
    ],
    faq: [
      {
        question: '사기 혐의를 받고 있다면 어떻게 대응하나요?',
        answer:
          '<strong>변제 의사·능력이 차용 시점에 있었다면 채무불이행 영역이라는 점을 정리해 진술 준비할 수 있습니다.</strong> 변호인 동석 권장.',
      },
      {
        question: '일부만 변제했는데 사기가 되나요?',
        answer:
          '<strong>일부 변제는 \'편취 의사 없음\'의 강력한 정황입니다.</strong> 사기 성립이 어려워지는 사례가 많음.',
      },
      {
        question: '무고로 맞고소 바로 해도 되나요?',
        answer:
          '<strong>본건 무혐의·무죄 확정 후 신중히 검토하는 것이 일반적입니다.</strong> 무고는 입증 부담 큼.',
      },
      {
        question: '합의해야 형량 줄어드나요?',
        answer:
          '<strong>합의는 양형 감경 요소이지만 무혐의 다툼과는 별도 트랙입니다.</strong> 무혐의 여지 강하면 정식 재판도 검토 가능.',
      },
      {
        question: '경찰 조사에서 변제 의사 \"없었다\" 답하면 어떻게 되나요?',
        answer:
          '<strong>가장 위험한 진술입니다.</strong> 차용 시점 자금 상황·사용 계획을 정리해 답변 준비 필요.',
      },
    ],
    cta: { text: '합의가 형량에 미치는 영향, AI로 확인하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '채무 vs 사기 구분', href: '/guide/fraud/fraud-debt-vs-crime-distinction' },
      { label: '사기 고소당했을 때', href: '/guide/fraud/fraud-accused-response' },
      { label: '무고 카운터', href: '/guide/fraud/fraud-falsely-accused-defense-counter-complaint' },
      { label: '편취 의사 방어', href: '/guide/fraud/fraud-accused-comprehensive-intent-defense' },
      { label: '합의 양형 감경', href: '/guide/fraud/fraud-penalty-settlement-reduction' },
    ],
  },
];
