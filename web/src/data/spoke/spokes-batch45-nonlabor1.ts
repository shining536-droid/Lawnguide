import { SpokePage } from '../spoke-pages';

// batch45 nonlabor1 10개: fraud 5 + traffic-accident 5
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 라이브커머스에서 가품을 받은 소비자가 플랫폼 환불 거절·판매자 잠적 시 형사고소·민사 환불을 동시에 추진하도록 돕는 페이지다.
// 2. 이 페이지는 가짜 채용 공고로 보증금·교육비·서류대행비를 송금한 구직자가 송금 직후 환수 절차를 빠르게 밟도록 돕는 페이지다.
// 3. 이 페이지는 임대인이 보증금만 받고 잠적해 입주가 막힌 임차인이 형사고소·계약 해제·전세보증금 추급을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 온라인 자격증 강의 결제 후 강의가 부실하거나 환불이 거부된 수강생이 청약철회·콘텐츠진흥원 신고로 환불받도록 돕는 페이지다.
// 5. 이 페이지는 딥페이크·음성 합성으로 지인을 사칭한 송금 사기 피해자가 즉시 지급정지·계좌추적·환수 절차를 밟도록 돕는 페이지다.
// 6. 이 페이지는 자전거 운전 중 보행자와 충돌해 가해자로 신고된 사람이 과실비율과 형사 합의 전략을 정리하도록 돕는 페이지다.
// 7. 이 페이지는 앞차의 적재물 낙하로 차량·신체 손해를 입은 운전자가 운전자·화주·보험사 누구에게 청구할지 정리하도록 돕는 페이지다.
// 8. 이 페이지는 전동킥보드에 치여 부상당한 보행자가 운전자·공유업체·자동차보험을 상대로 보상 절차를 밟도록 돕는 페이지다.
// 9. 이 페이지는 주차장에 두고 온 차가 파손된 채 발견된 차주가 가해자 특정·CCTV 확보·자기차량보험을 단계별로 활용하도록 돕는 페이지다.
// 10. 이 페이지는 트레일러 잭나이프 사고에 휘말린 일반 승용차 운전자가 과실 인정과 보상 청구를 정리하도록 돕는 페이지다.

export const spokesBatch45Nonlabor1: SpokePage[] = [
  // ─── 1. fraud / livestream-counterfeit-purchase ───
  {
    domain: 'fraud',
    slug: 'fraud-livestream-counterfeit-purchase',
    keyword: '라이브커머스 가품 환불 고소',
    questionKeyword: '라이브방송에서 산 가품, 어떻게 환불받고 고소하나요?',
    ctaKeyword: '라이브커머스 가품 사기 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '라이브커머스 가품 사기 5단계 환불·고소 절차 | 로앤가이드',
      description:
        '라이브방송에서 명품·전자제품을 샀는데 가품이 도착했고 판매자는 응답이 없다면 7일 내 청약철회와 사기죄 고소를 동시에 진행하는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"라이브에서 정품이라며 50% 할인을 외쳤는데, 받아보니 박스부터 가품이었습니다." 라이브커머스는 한정수량·즉석할인을 무기로 의심을 무력화시키지만, 정품이라는 설명 자체가 거짓이면 명백한 기망행위에 해당할 소지가 있습니다. 판매자가 잠적하기 전에 7일 청약철회·플랫폼 신고·형사고소를 동시에 시작해야 환불 가능성이 살아납니다. 결제일로부터 늦어도 2주 안에 움직이세요.</p>',
    sections: [
      {
        title: '라이브커머스 가품 — 어떤 경우에 사기죄가 성립하나',
        content:
          '<p><strong style="color:#1e3a5f">"정품"이라는 라이브 발언·자막·설명문구가 입증되면 기망행위로 형법 제347조 사기죄가 성립합니다.</strong></p>\n<ul>\n<li><strong>정품 표기</strong> — 라이브 화면 자막·송장·상품설명에 "정품 보증서 동봉"이 1번이라도 있으면 증거.</li>\n<li><strong>브랜드 이미지 사용</strong> — 공식 로고·모델 사진을 사용했는데 가품이면 상표법 위반도 동시 성립.</li>\n<li><strong>판매자 인지</strong> — 도매가가 시세 30% 미만이면 가품 인지 가능성이 높아 미필적 고의 인정.</li>\n<li><strong>피해 규모</strong> — 동일 판매자에게 다수 피해자 발생 시 상습사기·특경법 가중처벌 대상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 라이브 영상·채팅 캡처는 시간 표시까지 포함해 보존해야 증거능력이 인정될 수 있습니다.</blockquote>',
      },
      {
        title: '5단계 대응 — 결제일부터 14일 안에 끝낸다',
        content:
          '<p><strong style="color:#1e3a5f">청약철회 7일·민원 14일·고소 6개월 시효를 모두 챙겨야 합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 영상·채팅 캡처(즉시)</strong> — 라이브 다시보기 영상·자막·결제내역·송장을 PDF로 저장.</li>\n<li><strong>2단계 — 7일 내 청약철회</strong> — 전자상거래법 제17조에 따라 가품·하자상품은 단순변심 외 청약철회 가능, 내용증명 발송.</li>\n<li><strong>3단계 — 플랫폼 분쟁조정</strong> — 네이버·카카오·쿠팡 라이브쇼 신고센터 14일 내 분쟁조정 신청.</li>\n<li><strong>4단계 — 형사고소</strong> — 사이버수사대 또는 관할 경찰서 사기죄 고소장 제출, 결제·발송·소통 캡처 일괄 첨부.</li>\n<li><strong>5단계 — 카드사 차지백</strong> — 신용카드 결제는 60일 내 거래취소 신청, 가품 입증 시 카드사 환불.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 라이브 영상 증거의 입증력과 청약철회·고소 동시진행 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '플랫폼 책임 — 통신판매중개자의 연대책임',
        content:
          '<p><strong style="color:#1e3a5f">전자상거래법 제20조의2에 따라 라이브커머스 플랫폼도 일정 부분 연대책임을 집니다.</strong></p>\n<ul>\n<li><strong>판매자 정보 미고지</strong> — 사업자등록번호·연락처를 정확히 안내하지 않으면 플랫폼 손해배상 책임.</li>\n<li><strong>중개업 책임</strong> — 직매입이 아닌 중개라도 "정품 보증" 마크를 표시했다면 신뢰책임.</li>\n<li><strong>전자상거래분쟁조정위원회</strong> — 1372 소비자상담센터 → 분쟁조정 신청, 무료·평균 30~60일 소요.</li>\n<li><strong>피해자 단체 고소</strong> — 동일 판매자 피해자 5명 이상이면 사기 단순건이 특정경제범죄로 격상 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 다른 피해자는 라이브 다시보기 댓글·SNS 해시태그로 빠르게 모을 수 있습니다.</blockquote>',
      },
      {
        title: '환불 가능성 — 입금·카드·간편결제별 차이',
        content:
          '<p><strong style="color:#1e3a5f">결제 수단에 따라 환수 가능 시한이 30일·60일·6개월로 갈립니다.</strong></p>\n<ul>\n<li><strong>계좌이체</strong> — 통신사기피해환급법상 지급정지 가능, 입금일부터 3영업일 이내가 골든타임.</li>\n<li><strong>신용카드</strong> — 결제일부터 60일 내 차지백 신청, 가품 사진·내용증명 첨부 시 승인율 상승.</li>\n<li><strong>간편결제(페이)</strong> — 카카오페이·네이버페이는 자체 분쟁조정, 7일 내 신청해야 결제 보류 가능.</li>\n<li><strong>형사고소 후 합의</strong> — 합의금으로 환불 회수, 합의서에 "민·형사상 일체 청구권 포기" 조항 주의.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 단순변심으로 청약철회를 신청하면 가품 다툼이 약해지므로 처음부터 "가품·기망"으로 명시하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 임상시험 대행기관의 기망과 사기죄·업무방해죄 동시 성립',
        summary:
          '대법원 2024도1932 사건(대법원, 2025.09.11 선고)에서 법원은 의뢰받은 대로 업무를 진행하지 않으면서 비용을 계속 청구·수령한 행위는 기망에 의한 사기죄와 업무방해죄가 별개로 성립한다고 판시했습니다. 라이브에서 "정품"이라며 가품을 발송한 판매자도 같은 구조로 다중 처벌 가능합니다.',
        takeaway:
          '거짓 설명으로 결제를 유도한 행위는 단순 환불 분쟁이 아니라 별도의 형사 처벌 대상입니다.',
      },
    ],
    faq: [
      {
        question: '라이브 영상이 다시보기 종료되면 증거가 사라지나요?',
        answer:
          '<strong>다시보기 종료 전 화면녹화·캡처를 가능한 한 해두어야 합니다.</strong> 플랫폼에 보전 요청 공문을 보내면 일정 기간 보관해주는 경우도 있습니다.',
      },
      {
        question: '판매자가 "교환은 가능하지만 환불은 안 된다"고 합니다.',
        answer:
          '<strong>가품·하자상품은 환불 거부 자체가 위법입니다.</strong> 전자상거래법 위반으로 한국소비자원·공정위 신고가 가능합니다.',
      },
      {
        question: '판매자 사업자등록번호가 가짜로 의심됩니다.',
        answer:
          '<strong>국세청 홈택스에서 사업자등록 진위를 확인할 수 있습니다.</strong> 허위 등록은 그 자체로 전자상거래법 위반·플랫폼 책임 강화 요소입니다.',
      },
      {
        question: '카드사 차지백을 신청하면 형사고소에 불리한가요?',
        answer:
          '<strong>차지백과 형사고소는 무관하게 병행할 수 있습니다.</strong> 다만 환불받은 후 다시 형사 합의금을 요구하면 신뢰가 떨어질 수 있어 순서 정리가 필요합니다.',
      },
      {
        question: '플랫폼이 자체 환불해주면 사기죄는 사라지나요?',
        answer:
          '<strong>피해 회복은 양형 사유일 뿐, 사기죄 성립 자체가 사라지지 않습니다.</strong> 플랫폼 환불 후에도 고소권은 유지됩니다.',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '온라인 사기 고소 절차 정리', href: '/guide/fraud/fraud-online-purchase-procedure' },
      { label: '카드 차지백 신청 가이드', href: '/guide/fraud/fraud-card-chargeback-procedure' },
      { label: '사기 고소장 작성 핵심', href: '/guide/fraud/fraud-complaint-writing-essentials' },
      { label: '소비자분쟁조정 활용법', href: '/guide/fraud/fraud-consumer-mediation-usage' },
      { label: '사기죄 처벌 수위와 합의', href: '/guide/fraud/fraud-punishment-settlement-guide' },
    ],
  },

  // ─── 2. fraud / fake-job-deposit-recover ───
  {
    domain: 'fraud',
    slug: 'fraud-fake-job-deposit-recover',
    keyword: '가짜 채용 보증금 환수',
    questionKeyword: '취업 보증금·교육비를 송금했는데 회사가 사라졌어요',
    ctaKeyword: '가짜 채용 사기 환수 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '가짜 채용 사기 6단계 환수 절차와 시한 | 로앤가이드',
      description:
        '취업·재택근무 명목으로 보증금·교육비·신분증 사본을 보냈는데 회사가 잠적했다면 3영업일 골든타임 안에 지급정지부터 신고하는 환수 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"고수익 재택 알바라며 신분증과 보증금 50만 원을 요구하더니, 입금하자마자 차단당했습니다." 가짜 채용 사기는 청년·경력단절·구직자를 노립니다. 입금 후 3영업일 안에 지급정지를 신청하면 통신사기피해환급법으로 환수 가능성이 살아 있습니다. 사기죄 고소·금감원 신고·개인정보 보호조치까지 동시에 진행해야 2차 피해를 막을 수 있습니다.</p>',
    sections: [
      {
        title: '가짜 채용 — 어떤 신호가 사기 패턴인가',
        content:
          '<p><strong style="color:#1e3a5f">금융감독원 가이드 기준 5가지 패턴 중 2개 이상이면 사기 가능성 90% 이상입니다.</strong></p>\n<ul>\n<li><strong>채용 전 송금 요구</strong> — 보증금·교재비·복장비·시스템 사용료 명목 어떤 것이든 사기.</li>\n<li><strong>대포통장 의심</strong> — 회사 계좌가 아닌 개인 명의·법인 다른 명의로 입금 요구.</li>\n<li><strong>신분증·계좌번호 동시 요구</strong> — 명의도용·대포통장 활용을 위한 사전 자료 수집.</li>\n<li><strong>면접 없이 즉시 채용</strong> — 이력서만 보고 "당장 출근 가능" 통보, 정상 절차 결여.</li>\n<li><strong>고수익·재택 강조</strong> — 일반 시급보다 3배 이상이면 보이스피싱·자금세탁책 모집 의심.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 채용 단계에서 어떤 명목이든 송금 요구는 노동법상 위법이며 거의 100% 사기로 검토될 수 있습니다.</blockquote>',
      },
      {
        title: '6단계 환수 — 입금 직후 3영업일 안에 모두 시작',
        content:
          '<p><strong style="color:#1e3a5f">통신사기피해환급법 제3조 지급정지가 환수의 출발점, 이후 형사·민원 동시 진행.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 지급정지 신청</strong> — 송금 은행 콜센터 또는 112 신고로 통장 지급정지, 송금 후 3영업일 골든타임.</li>\n<li><strong>2단계 — 채용공고·대화 캡처</strong> — 사람인·잡코리아·인디드 등 공고 페이지·연락 메시지 일괄 보존.</li>\n<li><strong>3단계 — 사이버수사대 고소</strong> — 사기죄(형법 제347조)·전기통신금융사기 동시 고소장 제출.</li>\n<li><strong>4단계 — 금감원·고용부 신고</strong> — 금감원 1332·고용노동부 1350 채용질서법 위반 신고로 행정처분 유도.</li>\n<li><strong>5단계 — 신용정보 보호</strong> — 신분증 사본 유출 시 개인정보보호위원회 신고·신용정보회사 명의도용 차단 등록.</li>\n<li><strong>6단계 — 환급 신청</strong> — 검찰 처분 후 통신사기피해 환급금 신청, 보관계좌 잔액에서 안분환급.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 송금 시점·증거를 바탕으로 환급 가능성과 고소 유리도를 분석해드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '신분증 유출 — 2차 피해 차단의 5가지',
        content:
          '<p><strong style="color:#1e3a5f">신분증 사본만 넘어가도 비대면 대출·휴대폰 개통·계좌 개설이 가능합니다.</strong></p>\n<ul>\n<li><strong>명의도용 차단 서비스</strong> — 한국정보통신진흥협회 Msafer 가입, 신규 휴대폰 개통 차단.</li>\n<li><strong>금감원 개인정보 노출자 사고예방</strong> — 1332 등록 시 모든 금융권 신규 거래 제한.</li>\n<li><strong>비대면 대출 차단</strong> — 코드정 사고예방 시스템 등록, 본인 명의 비대면 대출·계좌개설 일시정지.</li>\n<li><strong>주민등록증 재발급</strong> — 주민센터에 분실신고 + 재발급, 위조방지 새 번호 부여.</li>\n<li><strong>신용조회 알림</strong> — KCB·NICE 신용조회 알림 가입, 새 대출 발생 시 즉시 통보.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 명의도용 대출이 발생해도 본인 의사 없음을 입증하면 채무부존재확인 소송으로 무효 다툼이 가능합니다.</blockquote>',
      },
      {
        title: '환급 가능성 — 보관계좌 잔액과 시한',
        content:
          '<p><strong style="color:#1e3a5f">환급 가능액은 사기범 통장의 동결 시점 잔액 한도, 시한은 사건 종결 후 14일 이내 신청.</strong></p>\n<ul>\n<li><strong>잔액 안분환급</strong> — 다수 피해자 발생 시 피해액 비율로 안분, 100% 환수가 어려운 경우 다수.</li>\n<li><strong>금융사 면책</strong> — 은행이 지급정지를 정상적으로 처리했다면 추가 손해배상 책임 없음.</li>\n<li><strong>형사 합의 활용</strong> — 사기범 검거 시 합의금으로 추가 회수, 합의서에 환수 우선 명시.</li>\n<li><strong>민사 손해배상</strong> — 형사판결 후 가집행선고부 판결로 사기범 재산 가압류·강제집행.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 환급 신청은 검찰 사건 처분 후 14일 이내, 늦으면 권리 소멸되니 일정을 챙기세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 전기통신금융사기와 사기죄의 상상적 경합',
        summary:
          '대법원 2025도7814 사건(대법원, 2025.09.04 선고)에서 법원은 전기통신금융사기 특별법과 형법상 사기죄가 별개의 보호법익을 가지므로 1개 행위가 두 죄의 구성요건을 모두 충족하면 상상적 경합 관계로 처벌된다고 판시했습니다.',
        takeaway:
          '비대면·SNS·문자로 채용을 가장한 송금 사기는 일반 사기죄에 더해 특별법으로 가중처벌 대상으로 검토될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '입금한 지 일주일이 지났는데 환급이 가능한가요?',
        answer:
          '<strong>3영업일이 지나면 잔액이 인출돼 환급이 어려워집니다.</strong> 다만 사기범이 검거되면 형사 합의·민사 청구로 추가 회수 가능성은 남습니다.',
      },
      {
        question: '회사가 "교육비는 환불 정책상 불가"라고 약관을 들이댑니다.',
        answer:
          '<strong>채용 명목 송금 요구 자체가 위법이므로 약관은 효력이 없습니다.</strong> 약관규제법·채용절차법 위반으로 무효 주장이 가능합니다.',
      },
      {
        question: '구직사이트 플랫폼에는 책임이 없나요?',
        answer:
          '<strong>플랫폼이 사업자 정보 검증 의무를 지지 않았다면 일부 책임이 인정될 수 있습니다.</strong> 신고 후 동일 가해자 추가 피해 발생 시 책임 강화.',
      },
      {
        question: '신분증을 보낸 것만으로도 손해배상이 가능한가요?',
        answer:
          '<strong>실제 명의도용·대출이 발생해야 손해 입증이 됩니다.</strong> 다만 정신적 손해와 명의도용 차단 비용은 별도로 청구 가능합니다.',
      },
      {
        question: '취업 알선 보이스피싱이라는데 형량이 어떻게 되나요?',
        answer:
          '<strong>전기통신금융사기는 1년 이상 유기징역 또는 10년 이하 징역으로 가중처벌 대상으로 검토될 수 있습니다.</strong> 일반 사기죄(10년 이하 징역)보다 무거운 형량입니다.',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '취업 사기 신고 절차', href: '/guide/fraud/fraud-job-scam-report-procedure' },
      { label: '보이스피싱 환급 절차', href: '/guide/fraud/fraud-voice-phishing-refund' },
      { label: '신분증 유출 대응 5단계', href: '/guide/fraud/fraud-id-leak-response-steps' },
      { label: '명의도용 채무부존재 소송', href: '/guide/fraud/fraud-identity-debt-nonexistence' },
      { label: '사이버수사대 고소장 작성', href: '/guide/fraud/fraud-cyber-complaint-writing' },
    ],
  },

  // ─── 3. fraud / rental-deposit-vanish-report ───
  {
    domain: 'fraud',
    slug: 'fraud-rental-deposit-vanish-report',
    keyword: '임대인 잠적 사기 신고',
    questionKeyword: '계약금만 받고 임대인이 사라졌는데 어디부터 신고해야 하나요?',
    ctaKeyword: '임대인 잠적 사기 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임대인 잠적 사기 5단계 신고와 환수 절차 | 로앤가이드',
      description:
        '임대차 계약금·중도금만 받고 임대인이 잠적해 입주가 막힌 상황이면 등기부 확인부터 형사고소까지 7일 안에 끝내는 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"계약금 1,000만 원을 입금하고 잔금일을 기다렸는데 임대인이 연락두절입니다." 등기부 권리관계가 정상이라도 처음부터 잔금만 받고 도주할 의도였다면 명백한 사기로 검토될 수 있습니다. 실제 거주가 막힌 임차인은 계약 해제·계약금 반환·형사고소를 동시에 추진해야 환수 가능성이 살아납니다. 잠적 인지 후 7일 안에 등기부 변동·중복계약 흔적부터 확인하세요.</p>',
    sections: [
      {
        title: '잠적 사기 — 어떤 행위가 형사 사기죄가 되나',
        content:
          '<p><strong style="color:#1e3a5f">처음부터 임대 의사가 없거나 변제능력 없이 계약금을 받았다면 형법 제347조 사기죄.</strong></p>\n<ul>\n<li><strong>중복 계약</strong> — 동일 부동산을 여러 임차인과 동시 계약 후 계약금만 수령.</li>\n<li><strong>가짜 임대인</strong> — 본인 소유 아닌 부동산을 본인 명의처럼 계약, 위조사문서·사기 동시 성립.</li>\n<li><strong>변제 불능</strong> — 다수 채권자에 의한 가압류·경매 직전 상태에서 계약금 수령.</li>\n<li><strong>고의적 잠적</strong> — 계약금 입금 직후 연락처 변경·해외출국 정황은 사기 고의 강력 시사.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 등기부 등본·계약서·이체내역·연락 차단 정황이 갖춰지면 7일 내 고소 가능합니다.</blockquote>',
      },
      {
        title: '5단계 신고·환수 — 잠적 인지 후 7일 안',
        content:
          '<p><strong style="color:#1e3a5f">민사 계약 해제와 형사 사기 고소는 동시에 진행해야 시효·증거를 모두 잡습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 등기부·세무 확인</strong> — 등기부 발급·세무서 방문해 가압류·압류·중복계약 흔적 점검(즉시).</li>\n<li><strong>2단계 — 내용증명 발송</strong> — 계약 해제 통보 + 계약금 반환 청구, 미회신 시 5일 내 가압류 신청.</li>\n<li><strong>3단계 — 형사고소</strong> — 관할 경찰서 사기죄 고소장 + 등기부·계약서·이체내역·통화내역 첨부.</li>\n<li><strong>4단계 — 가압류 신청</strong> — 임대인 부동산·예금에 가압류, 본안소송 전 재산 도피 차단.</li>\n<li><strong>5단계 — 민사 본안소송</strong> — 부당이득·계약 해제로 인한 손해배상 청구, 가집행선고부 판결로 회수.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 등기부 상태와 임대인 변제능력을 분석해 사기죄 인정 가능성을 알려드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '공인중개사 책임 — 어디까지 받을 수 있나',
        content:
          '<p><strong style="color:#1e3a5f">공인중개사법 제30조에 따라 중개업자는 거래사고 시 1억 원 이상 손해배상책임을 집니다.</strong></p>\n<ul>\n<li><strong>등기부 미확인</strong> — 가압류·압류 표시를 임차인에게 고지하지 않았다면 중개업자 과실.</li>\n<li><strong>임대인 신원 미확인</strong> — 신분증 대조 없이 계약 진행 시 위조 임대인 사기에 책임 분담.</li>\n<li><strong>공제증서 청구</strong> — 한국공인중개사협회·서울보증보험 공제금 1~2억 한도 청구 가능.</li>\n<li><strong>전속중개 가산</strong> — 전속중개계약이라면 정보 제공 의무가 강화돼 책임 범위 확대.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 중개사 책임은 임대인 추급과 별도이므로 두 절차를 병행해야 회수율이 높아집니다.</blockquote>',
      },
      {
        title: '회수 가능성 — 가압류와 형사 합의의 효과',
        content:
          '<p><strong style="color:#1e3a5f">잠적 임대인 회수의 핵심은 재산 도피 전 가압류와 형사 합의의 압박 효과입니다.</strong></p>\n<ul>\n<li><strong>부동산·예금 가압류</strong> — 등기부에 가압류 등기 후 임의 처분 차단, 회수 1순위 확보.</li>\n<li><strong>형사 합의 압박</strong> — 사기 피의자가 검거되면 합의가 양형 결정 요소, 합의금으로 회수.</li>\n<li><strong>국세 체납자 환수 한계</strong> — 임대인이 국세 체납자면 국가가 1순위, 일반 채권자 후순위.</li>\n<li><strong>채권추심 의뢰</strong> — 형사 종결 후 신용정보회사 위탁, 비용 부담은 회수액 20~30%.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 임대인 사망·도산 시 상속인 추급·파산절차 채권신고를 별도로 챙겨야 합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기죄 기망행위와 컴퓨터 정보처리',
        summary:
          '대법원 2022도1862 사건(대법원, 2026.01.29 선고)에서 법원은 사기죄의 기망행위는 사람으로 하여금 착오를 일으키게 하는 행위이며, 정보처리장치 입력 행위가 결국 재산처분 결정을 하는 사람을 착오에 빠뜨린 경우 사람에 대한 기망행위에 해당한다고 판시했습니다.',
        takeaway:
          '대면·비대면 어느 형태든 거짓 정보로 임차인의 계약 결정을 유도하면 사기죄가 성립할 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '계약 해제 통보를 어떻게 보내야 효력이 인정되나요?',
        answer:
          '<strong>내용증명 우편으로 보내야 발신 시점·내용이 입증됩니다.</strong> 이메일·문자만으로도 효력은 있지만 분쟁 시 입증력이 약합니다.',
      },
      {
        question: '계약금 1,000만 원도 사기 고소가 가능한가요?',
        answer:
          '<strong>금액 무관 사기죄 고소가 가능합니다.</strong> 다만 1억 원 이상이면 특정경제범죄가중처벌법으로 형량이 더 높아집니다.',
      },
      {
        question: '임대인이 외국으로 출국한 것 같습니다. 회수가 어렵나요?',
        answer:
          '<strong>해외 도피해도 국내 부동산·예금이 있으면 가압류·강제집행 가능합니다.</strong> 인터폴 적색수배·범죄인 인도청구 절차도 검토할 수 있습니다.',
      },
      {
        question: '공인중개사가 자기 책임은 없다고 합니다.',
        answer:
          '<strong>중개업자의 손해배상책임은 공인중개사법상 강행규정입니다.</strong> 공제협회 공제금 1억 한도로 별도 청구가 가능합니다.',
      },
      {
        question: '형사 합의금과 민사 손해배상은 중복인가요?',
        answer:
          '<strong>합의서에 "민사상 일체 청구권 포기" 문구가 없으면 별도 청구가 가능합니다.</strong> 합의서 문구를 신중히 작성해야 합니다.',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '임대인 잠적 가압류 절차', href: '/guide/fraud/fraud-landlord-vanish-attachment' },
      { label: '공인중개사 손해배상 청구', href: '/guide/fraud/fraud-realtor-liability-claim' },
      { label: '임대차 사기 형사고소 핵심', href: '/guide/fraud/fraud-lease-criminal-complaint' },
      { label: '사기 가해자 합의금 협상', href: '/guide/fraud/fraud-perpetrator-settlement-negotiation' },
      { label: '계약금 반환 내용증명 작성', href: '/guide/fraud/fraud-deposit-return-notice' },
    ],
  },

  // ─── 4. fraud / online-cert-class-refund ───
  {
    domain: 'fraud',
    slug: 'fraud-online-cert-class-refund',
    keyword: '온라인 자격증 강의 사기 환불',
    questionKeyword: '온라인 자격증 강의가 부실한데 환불이 거부되면 어떻게 해야 하나요?',
    ctaKeyword: '온라인 강의 환불 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '온라인 자격증 강의 환불 5가지 핵심 쟁점 | 로앤가이드',
      description:
        '"평생수강", "100% 합격"이라며 결제했지만 강의가 부실하거나 환불이 거부되면 7일 청약철회·콘텐츠진흥원 신고로 환불받는 5가지 쟁점을 지금 확인하세요.',
    },
    intro:
      '<p>"평생 수강·100% 합격 보장"이라며 198만 원을 결제했는데 막상 들어보니 작년 강의 재방송이었습니다. 온라인 자격증 강의는 광고 문구와 실제 콘텐츠 차이가 클 때 사기·과장광고가 동시에 성립할 수 있습니다. 결제일부터 7일은 청약철회 골든타임, 그 이후도 표시광고법·민법상 기망행위로 환불 다툼이 가능합니다. 신용카드·할부 결제는 추가 보호장치가 있습니다.</p>',
    sections: [
      {
        title: 'Q1. "평생수강" 광고가 환불 거부 사유가 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">"평생수강"·"100% 합격" 같은 표현은 표시광고법상 부당한 표시·광고에 해당할 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>표시광고법 제3조</strong> — 거짓·과장 광고로 소비자 오인을 유발하면 환불 거부 약관도 무효.</li>\n<li><strong>합격률 미공개</strong> — 실제 합격률 자료를 제시하지 못하면 광고 자체가 허위.</li>\n<li><strong>"전액 환불 불가" 약관</strong> — 약관규제법 제8조 "고객에게 부당하게 불리한 조항"으로 무효 주장.</li>\n<li><strong>공정위 신고</strong> — 표시광고법 위반은 시정명령·과징금 대상, 다수 피해자 단체 신고 시 영향력 큼.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 환불 거부 약관은 거의 무효이며, 이를 들어 환불을 막으면 추가로 약관규제법 위반.</blockquote>',
      },
      {
        title: 'Q2. 어떤 절차로 환불을 받을 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">7일 청약철회·30일 분쟁조정·6개월 내 카드 차지백, 3중 안전망을 모두 사용합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 7일 청약철회</strong> — 전자상거래법 제17조에 따라 단순변심도 7일 내 환불 가능.</li>\n<li><strong>2단계 — 내용증명 발송</strong> — 광고와 실제 강의 차이 캡처 첨부, 7일 내 환불 요구.</li>\n<li><strong>3단계 — 콘텐츠진흥원 신고</strong> — 1372 소비자상담센터 → 콘텐츠분쟁조정위원회 30일 내 신청.</li>\n<li><strong>4단계 — 카드 차지백</strong> — 결제일부터 60일 내 신용카드사 거래취소 신청, 사기·하자 입증.</li>\n<li><strong>5단계 — 민사 부당이득</strong> — 환불 미이행 시 소액재판으로 청구, 3,000만 원 이하면 신속 해결.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 광고 캡처와 결제 시점을 분석해 환불 가능 비율을 알려드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: 'Q3. "이미 수강했으니 환불 불가"라는 답이 옵니다.',
        content:
          '<p><strong style="color:#1e3a5f">진도율에 비례한 부분환불은 가능하며, 광고 사기일 경우 진도와 무관하게 전액 환불.</strong></p>\n<ul>\n<li><strong>학원법 적용</strong> — 학원의 설립·운영 및 과외교습에 관한 법률 시행령상 진도 비례 환불 의무.</li>\n<li><strong>전자상거래법 우선</strong> — 학원법보다 전자상거래법 적용 시 7일 내 원칙적으로 환불.</li>\n<li><strong>기망행위 입증</strong> — 광고와 실제 강의가 다르면 진도와 무관하게 전액 환불 청구권.</li>\n<li><strong>소비자분쟁조정 기준표</strong> — 한국소비자원 분쟁해결기준에 따라 진도별 비율 적용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진도율은 강의 시간 기준이므로 "5강 시청"만으로도 일부 환불은 받을 수 있습니다.</blockquote>',
      },
      {
        title: 'Q4. 할부로 결제했는데 항변권을 행사할 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">할부거래법 제16조에 따라 20만 원 이상 3개월 할부는 항변권으로 잔여 할부 중단 가능.</strong></p>\n<ul>\n<li><strong>항변권 요건</strong> — 20만 원 이상 + 3개월 이상 할부 + 광고 허위·하자 입증.</li>\n<li><strong>카드사 통보</strong> — 카드사에 항변권 행사 통보, 잔여 할부금 결제 즉시 중단.</li>\n<li><strong>분할환불</strong> — 이미 결제된 금액은 카드 차지백 또는 민사 청구로 별도 회수.</li>\n<li><strong>신용 영향 차단</strong> — 정당한 항변권은 연체로 처리되지 않음, 신용점수 하락 방지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 일시불·간편결제는 항변권 적용 안 됨, 카드 차지백·분쟁조정으로 우회.</blockquote>',
      },
      {
        title: 'Q5. 다른 피해자와 함께 신고하면 효과가 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">동일 업체 5명 이상 피해자가 모이면 단체분쟁조정·집단소송으로 격상 가능.</strong></p>\n<ul>\n<li><strong>단체분쟁조정</strong> — 한국소비자원 50명 이상 동일 피해 시 단체분쟁조정 신청, 일괄 처리.</li>\n<li><strong>공정위 직권조사</strong> — 다수 피해 신고 누적 시 공정위 직권조사·시정명령 발동.</li>\n<li><strong>집단소송</strong> — 변호사 선임 후 공동소송, 비용 안분으로 부담 경감.</li>\n<li><strong>언론 제보</strong> — 소비자 매체·KBS 소비자고발 제보 시 업체 자진 환불 사례 다수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 카페·SNS에서 동일 업체 피해자 모집 시 집단 환불 협상 성공률이 크게 올라갑니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 강의 콘텐츠 부실과 사기죄 성립',
        summary:
          '대법원 2025도11655 사건(대법원, 2025.10 선고)에서 법원은 광고와 실질이 다른 콘텐츠를 정상 정품처럼 판매한 행위는 객관적 기망에 해당해 사기죄가 성립할 수 있다고 판시했습니다. 자격증 강의에서도 광고·실제 강의 차이가 크면 단순 환불 분쟁을 넘어 형사 사건으로 비화 가능합니다.',
        takeaway:
          '"평생수강·100% 합격" 등 광고 문구 자체가 허위라면 환불 거부는 형사 사기 정황을 강화합니다.',
      },
    ],
    faq: [
      {
        question: '"이벤트 할인 상품"이라며 환불이 안 된다고 합니다.',
        answer:
          '<strong>전자상거래법은 할인 여부와 무관하게 7일 청약철회를 보장합니다.</strong> 할인 상품 환불 거부는 약관 자체가 무효입니다.',
      },
      {
        question: '교재·인쇄물을 받은 경우에도 환불이 가능한가요?',
        answer:
          '<strong>봉인 미개봉 상태면 전액 환불 가능합니다.</strong> 개봉 시 부분환불 또는 교재대금 차감 후 환불.',
      },
      {
        question: '회사가 폐업했다고 하면 환불을 못 받나요?',
        answer:
          '<strong>폐업 신고 후 6개월 내 채권신고로 회수 가능합니다.</strong> 카드 차지백 신청은 폐업해도 카드사가 처리합니다.',
      },
      {
        question: '강의 시작 전에는 환불이 100%인가요?',
        answer:
          '<strong>전자상거래법상 7일 내 청약철회는 100% 환불입니다.</strong> 7일 이후 시작 전이라면 약관에 따라 90% 정도까지 환불.',
      },
      {
        question: '소비자분쟁조정과 형사고소를 동시 진행해도 되나요?',
        answer:
          '<strong>두 절차는 별개라 동시 진행 가능합니다.</strong> 형사 합의가 이루어지면 분쟁조정에서 환불액 협상이 빨라집니다.',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '온라인 강의 청약철회 가이드', href: '/guide/fraud/fraud-online-class-cancel-procedure' },
      { label: '카드 할부 항변권 활용', href: '/guide/fraud/fraud-card-installment-defense' },
      { label: '콘텐츠분쟁조정 신청법', href: '/guide/fraud/fraud-content-dispute-mediation' },
      { label: '단체분쟁조정 핵심 정리', href: '/guide/fraud/fraud-group-mediation-essentials' },
      { label: '표시광고법 위반 신고', href: '/guide/fraud/fraud-misleading-ad-report' },
    ],
  },

  // ─── 5. fraud / deepfake-impersonation-money ───
  {
    domain: 'fraud',
    slug: 'fraud-deepfake-impersonation-money',
    keyword: '딥페이크 사칭 송금 사기',
    questionKeyword: '딸 목소리로 영상통화가 와서 송금했는데 딥페이크였어요',
    ctaKeyword: '딥페이크 사기 환수 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '딥페이크 사칭 송금 사기 6단계 환수 절차 | 로앤가이드',
      description:
        '딸·아들·지인 얼굴과 음성을 딥페이크로 합성해 영상통화로 송금을 유도당했다면 입금 30분 안에 시작해야 할 환수 6단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"엄마, 나 사고 났어"라며 영상통화로 우는 딸 얼굴을 보여주면 부모는 의심하기 어렵습니다. 딥페이크·AI 음성합성을 결합한 사칭 사기는 2025년 들어 신고가 급증했고, 입금 후 30분이 환수 골든타임입니다. 통신사기피해환급법으로 즉시 지급정지를 신청하면 일부 회수 가능성이 살아납니다. 형사고소·딥페이크 영상 보존도 동시에 시작해야 합니다.</p>',
    sections: [
      {
        title: '딥페이크 사기 — 어떻게 식별하나',
        content:
          '<p><strong style="color:#1e3a5f">영상·음성 모두 합성 가능, 식별 단서는 통화 환경·요구 패턴 4가지.</strong></p>\n<ul>\n<li><strong>화질 저하</strong> — "신호가 약해서"라며 일부러 흐릿한 화면, 합성 티 감추기 위한 기술.</li>\n<li><strong>입 모양 어긋남</strong> — 음성과 입 움직임이 0.5초 이상 어긋나면 딥페이크 의심.</li>\n<li><strong>긴급 송금 요구</strong> — "지금 당장", "다른 사람에게 말하지 마" 같은 압박 + 즉시 송금.</li>\n<li><strong>새 계좌·낯선 명의</strong> — 본인 계좌가 아닌 친구·지인 명의로 입금 요구는 100% 사기.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 영상통화 도중 가족만 아는 키워드(애완동물 이름·기념일)를 물어봐 즉시 검증할 수 있습니다.</blockquote>',
      },
      {
        title: '6단계 환수 — 송금 후 30분 골든타임',
        content:
          '<p><strong style="color:#1e3a5f">통신사기피해환급법상 지급정지가 가장 빠른 환수 수단, 30분 내 신청해야 잔액 보존.</strong></p>\n<ol>\n<li><strong>1단계 — 즉시 112·송금은행 신고</strong> — "보이스피싱·딥페이크 사기" 명시, 통장 지급정지 즉시 처리.</li>\n<li><strong>2단계 — 영상통화 녹화·캡처 보존</strong> — 통화 종료 전 화면녹화, 발신번호·시각·내용 기록.</li>\n<li><strong>3단계 — 사이버수사대 신고</strong> — 사기죄·전기통신금융사기·정보통신망법 위반 동시 고소.</li>\n<li><strong>4단계 — 가족 알림</strong> — 사칭당한 가족·지인에게 알려 추가 피해 차단, 경찰 협조 요청.</li>\n<li><strong>5단계 — 환급 신청</strong> — 검찰 처분 후 14일 내 통신사기피해 환급금 신청, 잔액 안분.</li>\n<li><strong>6단계 — 정신적 손해 청구</strong> — 가해자 검거 시 위자료·치료비 별도 민사 청구 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 송금 시점·증거 상태를 분석해 환급 가능성과 형사 추급 전략을 알려드립니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '본인 명의 도용 차단 — 2차 피해 막기',
        content:
          '<p><strong style="color:#1e3a5f">딥페이크 통화 시 화면을 캡처당했다면 본인 영상도 추가 사기에 악용될 수 있습니다.</strong></p>\n<ul>\n<li><strong>금감원 1332 등록</strong> — 개인정보 노출자 사고예방, 모든 금융권 신규 거래 제한.</li>\n<li><strong>휴대폰 명의도용 차단</strong> — Msafer 등록, 신규 휴대폰 개통 차단.</li>\n<li><strong>비대면 대출 차단</strong> — 코드정 가입, 명의도용 비대면 대출 자동 차단.</li>\n<li><strong>주민등록증 재발급</strong> — 분실신고 후 새 번호 부여로 위조 방지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 딥페이크 영상은 SNS에 유포될 수 있어 정보통신망법상 명예훼손·개인정보 침해 신고도 병행하세요.</blockquote>',
      },
      {
        title: '환수 가능성 — 잔액·합의·민사의 3단 체계',
        content:
          '<p><strong style="color:#1e3a5f">환수율은 신고 시점에 따라 30~70%로 갈리며, 형사 합의가 핵심 변수입니다.</strong></p>\n<ul>\n<li><strong>30분 내 지급정지</strong> — 70% 이상 회수 가능, 잔액이 출금되기 전.</li>\n<li><strong>1시간 이후</strong> — 30~50% 회수, 일부 인출됨.</li>\n<li><strong>1일 이후</strong> — 10% 미만, 사기범 검거 시 형사 합의금에 의존.</li>\n<li><strong>민사 가압류</strong> — 사기범 명의 부동산·예금 가압류로 추가 회수 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 사기범이 해외 거주·외국인이면 환수가 어려우니 한국 내 자산을 빠르게 가압류해야 합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 비대면 대출에서 본인확인절차의 정당성',
        summary:
          '대법원 2024다236754 사건(대법원, 2025.08.14 선고)에서 법원은 보이스피싱으로 명의가 도용된 비대면 대출에서 은행이 본인확인절차를 적절히 이행했다면 대출계약은 유효하다고 판시했습니다. 명의도용 피해자라도 은행 책임을 묻기 어려워, 가해자 검거·민사 추급이 환수의 핵심입니다.',
        takeaway:
          '딥페이크·명의도용 피해는 가해자 형사 추급과 별도로 본인의 신용 보호조치를 즉시 해야 합니다.',
      },
    ],
    faq: [
      {
        question: '영상통화가 진짜 가족인지 확인할 방법이 있나요?',
        answer:
          '<strong>가족만 아는 질문(키우는 강아지 이름·할머니 생일 등)을 즉시 물어보세요.</strong> 답변이 어색하거나 회피하면 100% 딥페이크입니다.',
      },
      {
        question: '송금하고 1시간이 지났습니다. 환수가 가능한가요?',
        answer:
          '<strong>일부 회수가 가능합니다.</strong> 즉시 은행에 지급정지를 신청하고, 잔액이 남아 있으면 검찰 처분 후 환급 신청.',
      },
      {
        question: '경찰서가 멀리 있는데 사이버수사대에 직접 가야 하나요?',
        answer:
          '<strong>112·사이버범죄신고 시스템(ECRM)으로 온라인 접수 가능합니다.</strong> 가까운 경찰서에서도 사이버수사대 사건으로 이송됩니다.',
      },
      {
        question: '딥페이크 영상 자체가 정보통신망법 위반인가요?',
        answer:
          '<strong>맞습니다. 정보통신망법·성폭력처벌법(성적 영상물의 경우)·명예훼손까지 동시 적용 가능합니다.</strong> 영상을 별도로 보존해 추가 고소.',
      },
      {
        question: '은행이 "고객 부주의"라며 책임을 회피합니다.',
        answer:
          '<strong>판례상 비대면 본인확인이 적절했다면 은행 책임은 제한됩니다.</strong> 다만 본인확인 절차에 결함이 있다면 일부 책임 인정 가능.',
      },
    ],
    cta: {
      text: '사기 고소 전 준비자료, AI로 체크하기',
      link: '/chat?domain=fraud',
    },
    internalLinks: [
      { label: '보이스피싱 환급금 신청', href: '/guide/fraud/fraud-voice-phishing-refund' },
      { label: '명의도용 채무부존재 소송', href: '/guide/fraud/fraud-identity-debt-nonexistence' },
      { label: '사이버수사대 신고 절차', href: '/guide/fraud/fraud-cyber-investigation-report' },
      { label: '지급정지 신청 골든타임', href: '/guide/fraud/fraud-payment-stop-golden-time' },
      { label: '딥페이크 영상 명예훼손 대응', href: '/guide/fraud/fraud-deepfake-defamation-response' },
    ],
  },

  // ─── 6. traffic-accident / bicycle-pedestrian-collision-fault ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-bicycle-pedestrian-collision-fault',
    keyword: '자전거 보행자 충돌 과실비율',
    questionKeyword: '자전거로 보행자를 친 경우 과실비율과 처벌은 어떻게 되나요?',
    ctaKeyword: '자전거 가해 사고 점검',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '자전거-보행자 충돌 가해자 4가지 대응 절차 | 로앤가이드',
      description:
        '자전거 운전 중 보행자와 충돌한 혐의를 받고 있다면 도로교통법상 차마 책임과 형사·민사·보험 동시 대응 4단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"자전거로 출근하다 횡단보도에서 보행자와 부딪혔는데, 갑자기 형사 입건이라는 통보를 받았습니다." 자전거는 도로교통법상 "차마"에 해당해 보행자와 충돌 시 운전자 책임이 큽니다. 혐의를 받고 있다면 즉시 사고 정황·블랙박스·CCTV 확보부터 시작해야 형사·민사·보험 처리에 도움이 됩니다. 합의 시한과 처벌 수위를 알고 대응하면 결과가 달라집니다.</p>',
    sections: [
      {
        title: '자전거 충돌 — 어떤 법이 적용되나',
        content:
          '<p><strong style="color:#1e3a5f">자전거는 도로교통법 제2조 제17호 "차마"로 분류되어 형사·민사 책임이 발생합니다.</strong></p>\n<ul>\n<li><strong>도로교통법 적용</strong> — 신호·안전운전·보행자 보호 의무 적용, 위반 시 범칙금·형사처벌.</li>\n<li><strong>업무상 과실치상</strong> — 형법 제266조, 5년 이하 금고 또는 700만 원 이하 벌금.</li>\n<li><strong>민사 손해배상</strong> — 치료비·위자료·일실수입, 평균 100~500만 원 합의금 사례 다수.</li>\n<li><strong>보험 적용</strong> — 일상생활배상책임보험·자전거보험 가입 시 합의금 보전 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자전거 사고도 자동차 사고처럼 처벌 가능하지만, 합의·보험으로 형사·민사 부담을 크게 줄일 수 있습니다.</blockquote>',
      },
      {
        title: '4단계 대응 — 사고 직후 24시간이 중요',
        content:
          '<p><strong style="color:#1e3a5f">사고 인지 후 24시간 안에 증거 보존·신고·합의 의사 통보까지 마무리합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고 정황 보존(즉시)</strong> — 현장 사진·블랙박스·CCTV 확보, 목격자 연락처 받아두기.</li>\n<li><strong>2단계 — 보험사 신고</strong> — 일상생활배상책임보험·자전거보험 신고, 보험사 사고 처리 위임.</li>\n<li><strong>3단계 — 경찰 조사 협조</strong> — 도주 의심받지 않게 자진출석, 사실 그대로 진술(거짓말 금지).</li>\n<li><strong>4단계 — 합의 추진</strong> — 피해자에게 진심으로 사과 + 치료비 선지급 의사 표시, 합의서 작성.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">혐의를 받고 있다면 AI가 과실비율과 합의금 적정선·형사 처분 가능성을 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '과실비율 — 보행자 vs 자전거 운전자',
        content:
          '<p><strong style="color:#1e3a5f">금융감독원 과실비율 기준상 자전거가 70~100% 책임지는 경우가 많습니다.</strong></p>\n<ul>\n<li><strong>인도 주행 자전거</strong> — 자전거 100% 책임, 인도는 보행자 우선 공간.</li>\n<li><strong>횡단보도 보행자 충돌</strong> — 자전거 신호위반 시 100%, 정상 통행 중이면 70~80%.</li>\n<li><strong>자전거도로 진입한 보행자</strong> — 자전거 60~70%, 보행자 30~40% 분담.</li>\n<li><strong>야간·우천</strong> — 자전거 책임 10~20% 가산, 무전등은 자전거 100% 책임.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보행자에 의한 신호위반·예측불가 행동 입증 시 과실 일부 분담 가능합니다.</blockquote>',
      },
      {
        title: '형사 처벌 — 합의의 영향',
        content:
          '<p><strong style="color:#1e3a5f">자전거 사고는 반의사불벌이 아니지만, 합의 시 처벌 수위가 크게 낮아집니다.</strong></p>\n<ul>\n<li><strong>경상해 + 합의</strong> — 통상 기소유예·약식기소(50~200만 원 벌금).</li>\n<li><strong>중상해 + 합의</strong> — 벌금 300~700만 원, 면허 영향 없음(자전거는 면허 무관).</li>\n<li><strong>합의 실패 시</strong> — 정식기소·집행유예 가능성, 동종 전과 시 실형 가능.</li>\n<li><strong>음주 자전거 운전</strong> — 도로교통법 가중처벌, 별도 형사 사건 추가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 도주(현장 미신고)는 별도 도주죄로 가중되니, 사고 시 즉시 정지·신고하세요.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 신호위반 우회전 차량의 횡단보도 보행자 사고 책임',
        summary:
          '대법원 2024도16742 사건(대법원, 2025.07.16 선고)에서 법원은 교차로 차량신호 적색·횡단보도 보행등 녹색 상태에서 차량이 정지하지 않고 우회전해 보행자에게 상해를 입힌 행위는 신호위반에 의한 업무상과실치상죄가 성립한다고 판시했습니다. 자전거 운전자에게도 동일한 신호 준수 의무가 적용됩니다.',
        takeaway:
          '자전거도 도로교통법상 신호 준수 의무가 있어, 위반 시 형사 처벌이 따릅니다.',
      },
    ],
    faq: [
      {
        question: '자전거 사고도 보험 처리가 되나요?',
        answer:
          '<strong>일상생활배상책임보험·자전거보험에 가입돼 있으면 처리됩니다.</strong> 가입 여부를 즉시 확인하고 사고 발생 24시간 내 보험사에 통보.',
      },
      {
        question: '합의금은 보통 얼마 정도인가요?',
        answer:
          '<strong>경상해 100~300만 원, 중상해 500~2,000만 원 수준입니다.</strong> 보행자의 후유증·치료기간·일실수입에 따라 변동됩니다.',
      },
      {
        question: '음주운전 자전거도 처벌받나요?',
        answer:
          '<strong>도로교통법 제44조 위반으로 범칙금 3만 원 부과됩니다.</strong> 사고 시에는 별도로 과실치상 가중처벌 가능.',
      },
      {
        question: '아이가 자전거로 보행자를 친 경우 부모 책임이 있나요?',
        answer:
          '<strong>미성년자(14세 미만)는 형사 책임 없으나 부모의 민사 손해배상 책임이 발생합니다.</strong> 일상생활배상책임보험으로 보전 가능.',
      },
      {
        question: '뺑소니로 의심받고 있는데 어떻게 해야 하나요?',
        answer:
          '<strong>사실과 다르게 신고되었다면 자진출석·블랙박스 제출로 도주 의사 없음을 입증해야 합니다.</strong> 변호사 동석이 유리.',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '자전거 보험 활용 가이드', href: '/guide/traffic-accident/traffic-bicycle-insurance-usage' },
      { label: '교통사고 합의금 산정', href: '/guide/traffic-accident/traffic-settlement-calculation' },
      { label: '업무상과실치상 대응 절차', href: '/guide/traffic-accident/traffic-negligent-injury-procedure' },
      { label: '뺑소니 혐의 방어 핵심', href: '/guide/traffic-accident/traffic-hit-run-defense-essentials' },
      { label: '교통사고 형사 합의서 작성', href: '/guide/traffic-accident/traffic-criminal-settlement-writing' },
    ],
  },

  // ─── 7. traffic-accident / cargo-fallen-object-injury ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-cargo-fallen-object-injury',
    keyword: '적재물 낙하 차량 사고 책임',
    questionKeyword: '앞 트럭에서 떨어진 짐에 차가 망가졌는데 누구한테 청구하나요?',
    ctaKeyword: '낙하물 사고 보상 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '적재물 낙하 사고 5단계 책임 추급과 보상 절차 | 로앤가이드',
      description:
        '앞차에서 떨어진 적재물에 차량 파손·부상을 입었다면 운전자·화주·보험사·도로공사 4주체 중 누구에게 어떻게 청구할지 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"고속도로에서 앞 트럭의 짐이 갑자기 떨어져 차량 보닛이 박살나고 동승자도 다쳤습니다." 적재물 낙하 사고는 도로교통법 제39조 적재물 추락방지 의무 위반으로 운전자 책임이 명확합니다. 다만 도주·화주·보험사 처리가 얽혀 청구 대상이 4곳까지 갈릴 수 있어, 사고 직후 7일 안에 증거 보존과 신고를 끝내야 합니다.</p>',
    sections: [
      {
        title: '낙하물 사고 — 누구의 책임인가',
        content:
          '<p><strong style="color:#1e3a5f">도로교통법 제39조와 화물자동차운수사업법에 따라 적재 운전자·화주·보험사 모두 책임 주체.</strong></p>\n<ul>\n<li><strong>운전자 1차 책임</strong> — 적재 고정·결박 의무 위반, 도로교통법상 4점·범칙금 5만 원 + 손해배상.</li>\n<li><strong>화주 책임</strong> — 화물 적재 불량을 알고도 운송 의뢰 시 화주 공동 책임.</li>\n<li><strong>보험사 책임</strong> — 가해 차량 자동차종합보험 대물·대인 한도 내 보상.</li>\n<li><strong>도로공사 책임</strong> — 가해자 미특정 시 도로법 제97조 한국도로공사 무과실책임 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가해자 도주 시에도 도로공사·정부보장사업으로 일부 보상받을 수 있습니다.</blockquote>',
      },
      {
        title: '5단계 청구 — 사고 직후 7일 안',
        content:
          '<p><strong style="color:#1e3a5f">증거 보존부터 정부보장사업까지 5단계, 시한 도과 시 보상이 어려워집니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 증거 보존(즉시)</strong> — 블랙박스·CCTV·낙하물 사진·차량번호 확보, 112 신고.</li>\n<li><strong>2단계 — 가해자 보험 청구</strong> — 가해 차량 보험사 대물·대인 청구, 진단서·수리견적 첨부.</li>\n<li><strong>3단계 — 본인 자차보험</strong> — 자차보험 청구로 우선 수리, 보험사가 가해자 추급(보험자대위).</li>\n<li><strong>4단계 — 도로공사 청구</strong> — 가해자 불명 시 한국도로공사·관할 도로관리청에 손해배상 청구.</li>\n<li><strong>5단계 — 정부보장사업</strong> — 도주·무보험 시 자배법 제30조 정부보장사업으로 인적 손해 보상(2,000만 원 한도).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 사고 정황과 가해자 특정 여부에 따른 청구 우선순위를 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '보상 범위 — 어디까지 받을 수 있나',
        content:
          '<p><strong style="color:#1e3a5f">차량 수리비·렌트비·치료비·일실수입·위자료까지 단계별로 청구 가능합니다.</strong></p>\n<ul>\n<li><strong>차량 수리비</strong> — 수리견적 + 사고 전후 사진, 전손 시 시세 보상.</li>\n<li><strong>대차료(렌트비)</strong> — 통상 차량 수리 기간 동일 등급 차량 렌트비 인정, 평균 7~14일.</li>\n<li><strong>치료비·간병비</strong> — 진단서·치료내역서 기준, 입원 시 간병비 별도.</li>\n<li><strong>위자료</strong> — 후유증·정신적 충격, 평균 100~500만 원 인정 사례.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 후유장해 진단이 1년 후 나올 수 있어, 합의는 진단 확정 후로 미루는 것이 유리합니다.</blockquote>',
      },
      {
        title: '도주 가해자 추적 — CCTV·하이패스 활용',
        content:
          '<p><strong style="color:#1e3a5f">고속도로 하이패스·CCTV 기록으로 도주 차량 90% 이상 특정 가능합니다.</strong></p>\n<ul>\n<li><strong>경찰 사고조사 의뢰</strong> — 112 신고 + 사고 위치·시각 제공, 인접 CCTV 영상 자동 조회.</li>\n<li><strong>한국도로공사 자료 요청</strong> — 하이패스 통과 차량 명단, 영장 발부 후 열람.</li>\n<li><strong>블랙박스 재생</strong> — 차량번호·차종 확보, 화면 정지·확대로 식별.</li>\n<li><strong>도로공사 손해배상</strong> — 가해자 끝내 미특정 시 도로공사·도로관리청 무과실 책임 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 도주 차량 추적은 시한이 있어, 사고 후 30일 이내 경찰에 정식 수사 요청해야 효과적.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 자기차량보험 자기부담금과 제3자 책임 분리',
        summary:
          '대법원 2022다287284 사건(대법원, 2026.01.29 선고)에서 법원은 쌍방과실 사고에서 자기차량보험으로 수리 후 자기부담금 상당액 중 제3자(가해자) 책임비율에 해당하는 금액은 피해자가 직접 가해자에게 청구할 수 있다고 판시했습니다. 낙하물 사고에서도 자차보험 처리 후 자기부담금은 가해자에게 별도 청구 가능합니다.',
        takeaway:
          '자차보험으로 처리해도 자기부담금은 가해자에게 별도 청구할 수 있어 회수율을 끌어올릴 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '낙하물에 차만 망가지고 사람은 멀쩡하면 정부보장사업이 안 되나요?',
        answer:
          '<strong>정부보장사업은 인적 손해만 보상합니다.</strong> 차량 수리비는 본인 자차보험·가해자 보험으로 청구해야 합니다.',
      },
      {
        question: '고속도로가 아닌 일반도로에서도 도로공사 청구가 가능한가요?',
        answer:
          '<strong>일반도로는 관할 시·도·구청 도로관리청을 상대로 청구합니다.</strong> 도로 관리 부실 입증이 핵심.',
      },
      {
        question: '낙하물이 짐승(고라니 등)이면 보상이 어떻게 되나요?',
        answer:
          '<strong>야생동물 충돌은 보상 주체가 다릅니다.</strong> 자차보험·정부보장사업 일부 적용 가능, 도로공사 책임은 제한적.',
      },
      {
        question: '가해 운전자가 무보험이면 어떻게 하나요?',
        answer:
          '<strong>본인 자동차보험 무보험차상해 특약으로 보상받을 수 있습니다.</strong> 미가입 시 정부보장사업으로 인적 손해만 보상.',
      },
      {
        question: '경상해라도 형사 합의가 필요한가요?',
        answer:
          '<strong>교통사고처리특례법 12대 중과실에 해당하지 않으면 보험 처리로 형사 면책됩니다.</strong> 12대 중과실(중앙선 침범 등) 시 합의 필요.',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '낙하물 도로공사 청구 가이드', href: '/guide/traffic-accident/traffic-fallen-object-road-claim' },
      { label: '정부보장사업 신청 절차', href: '/guide/traffic-accident/traffic-government-guarantee-apply' },
      { label: '뺑소니 가해자 추적 방법', href: '/guide/traffic-accident/traffic-hit-run-tracking-methods' },
      { label: '자차보험 자기부담금 청구', href: '/guide/traffic-accident/traffic-self-deduction-claim' },
      { label: '교통사고 후유장해 진단', href: '/guide/traffic-accident/traffic-aftereffect-diagnosis' },
    ],
  },

  // ─── 8. traffic-accident / electric-scooter-pedestrian-injury ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-electric-scooter-pedestrian-injury',
    keyword: '전동킥보드 보행자 충돌 보상',
    questionKeyword: '전동킥보드에 치였는데 어디서 보상을 받나요?',
    ctaKeyword: '전동킥보드 사고 보상 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '전동킥보드 보행자 사고 5단계 보상 청구 절차 | 로앤가이드',
      description:
        '인도에서 전동킥보드에 치여 부상당했다면 운전자·공유업체·자동차보험·정부보장사업 4단계 청구 절차를 7일 안에 끝내는 방법을 지금 확인하세요.',
    },
    intro:
      '<p>"인도에서 걷고 있는데 갑자기 뒤에서 전동킥보드가 박더니 운전자는 사과도 없이 도주했습니다." 전동킥보드는 도로교통법상 "개인형 이동장치"로 자동차와 동일한 책임을 집니다. 보행자 피해자는 운전자뿐 아니라 공유 킥보드 업체·자동차보험·정부보장사업까지 4가지 채널로 청구할 수 있어, 사고 후 7일 안에 증거 보존부터 시작해야 합니다.</p>',
    sections: [
      {
        title: '전동킥보드 사고 — 어떤 법이 적용되나',
        content:
          '<p><strong style="color:#1e3a5f">2021년 도로교통법 개정으로 전동킥보드는 "개인형 이동장치"로 분류, 자동차에 준하는 의무.</strong></p>\n<ul>\n<li><strong>면허 의무</strong> — 만 16세 이상 + 원동기 면허 이상 필수, 위반 시 형사 처벌.</li>\n<li><strong>인도 주행 금지</strong> — 자전거도로·차도 우측만 가능, 인도 주행은 100% 운전자 과실.</li>\n<li><strong>안전모 의무</strong> — 미착용 시 범칙금 + 본인 부상 시 과실상계 가산.</li>\n<li><strong>자동차종합보험</strong> — 의무 가입 대상은 아니지만 공유 킥보드 업체는 전용 보험 가입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 인도에서 걷던 보행자는 거의 모든 사고에서 무과실로 인정받습니다.</blockquote>',
      },
      {
        title: '5단계 보상 청구 — 사고 후 7일 안',
        content:
          '<p><strong style="color:#1e3a5f">운전자 → 공유업체 → 자동차보험 → 정부보장사업 4단계 청구를 시한 안에.</strong></p>\n<ol>\n<li><strong>1단계 — 사고 증거 즉시 보존</strong> — 현장 사진·CCTV·블랙박스·목격자 연락처, 112 신고.</li>\n<li><strong>2단계 — 운전자 신원 확보</strong> — 신분증·면허증·연락처·주소 받기, 못 받으면 경찰 의뢰.</li>\n<li><strong>3단계 — 공유업체 청구</strong> — 라임·킥고잉 등 공유 킥보드 업체에 사고 신고, 업체 보험으로 처리.</li>\n<li><strong>4단계 — 자동차보험·일배책 청구</strong> — 운전자 본인 보험 + 일상생활배상책임보험 동시 청구.</li>\n<li><strong>5단계 — 정부보장사업</strong> — 도주·무보험 시 자배법 제30조 정부보장사업, 인적 손해 2,000만 원 한도.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 사고 정황과 가해자 보험 가입 여부에 따른 청구 우선순위를 알려드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '공유 킥보드 업체 책임 — 어디까지',
        content:
          '<p><strong style="color:#1e3a5f">공유 킥보드 업체는 전용 책임보험을 가입하고 있어 운전자 무자력 시 보충 책임.</strong></p>\n<ul>\n<li><strong>전용 보험 한도</strong> — 대인 1,000만~3억 원, 대물 100만~1,000만 원, 업체별 차이.</li>\n<li><strong>운전자 식별</strong> — 앱 가입 정보로 운전자 신원 확인, 도주해도 추적 가능.</li>\n<li><strong>업체 직접 청구</strong> — 운전자 비협조 시 업체에 청구, 업체가 운전자에게 구상권.</li>\n<li><strong>면허 미소지 운전자</strong> — 업체가 면허 검증을 하지 않았다면 업체 책임 가산.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사고 시점·위치·기기 번호로 업체에 운전자 정보 공개 요청, 거부 시 경찰 협조.</blockquote>',
      },
      {
        title: '보상 항목 — 치료비부터 위자료까지',
        content:
          '<p><strong style="color:#1e3a5f">전동킥보드 사고는 보행자 피해자가 거의 무과실이라 보상액이 자동차 사고 수준.</strong></p>\n<ul>\n<li><strong>치료비·간병비</strong> — 입원·수술비 전액 + 통원치료, 평균 100~500만 원.</li>\n<li><strong>일실수입</strong> — 사고로 인한 휴직·결근 손해, 월급 × 입원기간.</li>\n<li><strong>위자료</strong> — 정신적 충격·후유증, 평균 200~1,000만 원.</li>\n<li><strong>후유장해</strong> — 1년 후 후유증 진단 시 추가 청구, 노동능력 상실률 기준.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 합의는 후유증 확정 후 진행해야 추가 청구권이 살아 있습니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 횡단보도 보행자 보호 의무와 신호위반',
        summary:
          '대법원 2024도16742 사건(대법원, 2025.07.16 선고)에서 법원은 차량 운전자가 적색 신호에서 정지하지 않고 횡단보도를 통과해 보행자에게 상해를 입힌 행위는 신호위반 업무상과실치상으로 처벌된다고 판시했습니다. 전동킥보드도 동일한 보행자 보호 의무가 적용됩니다.',
        takeaway:
          '전동킥보드 운전자도 차량과 동일한 신호·보행자 보호 의무를 지므로 사고 시 형사 처벌 대상.',
      },
    ],
    faq: [
      {
        question: '운전자가 도주했는데 어떻게 추적하나요?',
        answer:
          '<strong>112 신고 후 CCTV·공유 킥보드 앱 정보로 추적 가능합니다.</strong> 도주 시점이 빠를수록 추적률이 높아집니다.',
      },
      {
        question: '공유 킥보드인지 개인 킥보드인지 모릅니다.',
        answer:
          '<strong>킥보드 디자인·QR코드·로고로 식별됩니다.</strong> 공유 킥보드는 라임·킥고잉·씽씽·디어 등 5~6개 업체 표지.',
      },
      {
        question: '청소년이 운전한 경우 누구한테 청구하나요?',
        answer:
          '<strong>14세 미만은 형사 책임 면제, 부모 민사 책임만 발생합니다.</strong> 14~16세는 면허 위반으로 형사 처벌도 가능.',
      },
      {
        question: '치료비 외에 정신적 충격도 보상받을 수 있나요?',
        answer:
          '<strong>위자료로 별도 청구 가능합니다.</strong> 평균 200~500만 원, 후유증·트라우마 입증 시 1,000만 원 이상.',
      },
      {
        question: '본인 자동차보험으로 처리할 수 있나요?',
        answer:
          '<strong>무보험차상해 특약 가입 시 가능합니다.</strong> 가해자(전동킥보드)가 무보험이면 본인 보험으로 우선 보상받고 추후 추급.',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '전동킥보드 사고 보험 청구', href: '/guide/traffic-accident/traffic-pm-insurance-claim' },
      { label: '뺑소니 가해자 추적 방법', href: '/guide/traffic-accident/traffic-hit-run-tracking-methods' },
      { label: '정부보장사업 신청 절차', href: '/guide/traffic-accident/traffic-government-guarantee-apply' },
      { label: '교통사고 위자료 산정', href: '/guide/traffic-accident/traffic-consolation-money-calculation' },
      { label: '후유장해 추가 청구 시한', href: '/guide/traffic-accident/traffic-aftereffect-additional-claim' },
    ],
  },

  // ─── 9. traffic-accident / parked-car-damage-discovery ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-parked-car-damage-discovery',
    keyword: '주차장 차량 파손 발견 대응',
    questionKeyword: '주차장에 둔 차가 망가져 있는데 어디부터 알아봐야 하나요?',
    ctaKeyword: '주차장 차 파손 보상 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '주차장 차량 파손 5단계 발견 후 대응 절차 | 로앤가이드',
      description:
        '주차장에 두고 온 차가 파손된 채 발견됐다면 CCTV 확보부터 자기차량보험 청구까지 24시간 안에 끝내는 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"퇴근 후 주차장에 가보니 옆문이 긁히고 사이드미러가 부러져 있었습니다." 주차장 내 차량 파손은 가해자 특정 여부에 따라 처리 방식이 완전히 달라집니다. CCTV 확보·관리사무소 신고·경찰 신고·자차보험 청구를 24시간 안에 시작해야 가해자 추적과 보상 가능성이 살아납니다. 시한이 지나면 영상이 삭제되고 보험 처리도 어려워집니다.</p>',
    sections: [
      {
        title: '주차장 파손 — 누구의 책임이 어디까지',
        content:
          '<p><strong style="color:#1e3a5f">주차장 종류·CCTV 유무·관리 형태에 따라 책임 주체가 4가지로 갈립니다.</strong></p>\n<ul>\n<li><strong>가해자 특정</strong> — CCTV로 차량번호 확인 시 가해자 보험·운전자 직접 청구.</li>\n<li><strong>유료 주차장 책임</strong> — 주차장법상 관리자 보관책임, 관리 부실 입증 시 손해배상.</li>\n<li><strong>아파트 주차장</strong> — 관리비에 보험료 포함된 경우 주차장 종합보험 청구 가능.</li>\n<li><strong>가해자 미특정</strong> — 자기차량보험으로 우선 처리, 보험사가 추급(보험자대위).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가해자 미특정도 자차보험·일배책으로 보상받을 수 있어 보험 가입 여부 즉시 확인.</blockquote>',
      },
      {
        title: '5단계 대응 — 발견 후 24시간 골든타임',
        content:
          '<p><strong style="color:#1e3a5f">CCTV는 보통 7~14일 후 자동 삭제, 발견 즉시 보존 요청해야 합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사진·동영상 보존(즉시)</strong> — 파손 부위·번호판·주변 차량·시각이 보이는 사진, 다각도로.</li>\n<li><strong>2단계 — 관리사무소·CCTV 보존 요청</strong> — 영상 삭제 전 보존 요청서 제출, 관리주체 책임 명확화.</li>\n<li><strong>3단계 — 경찰 신고</strong> — 112 또는 가까운 경찰서 사고 접수, 사건번호 발급(보험 청구 필수).</li>\n<li><strong>4단계 — 자차보험·관리주체 청구</strong> — 자차보험 청구 + 주차장 관리주체 손해배상 동시 추진.</li>\n<li><strong>5단계 — 가해자 검거 후 추급</strong> — 가해자 특정 시 합의·민사 청구로 자기부담금 회수.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 주차장 종류·증거 상태·보험 가입 여부에 맞는 청구 경로를 분석해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: '주차장 종류별 처리 — 4가지 시나리오',
        content:
          '<p><strong style="color:#1e3a5f">아파트·상가·노상·공영 주차장은 책임 주체와 보상 한도가 모두 다릅니다.</strong></p>\n<ul>\n<li><strong>아파트 주차장</strong> — 관리비 보험료 포함 여부 확인, 입주민 단체보험 청구.</li>\n<li><strong>유료 상가 주차장</strong> — 주차장법 제18조 보관책임 입증 시 100% 배상.</li>\n<li><strong>노상·이면도로</strong> — 가해자 특정이 핵심, 미특정 시 자차보험만.</li>\n<li><strong>공영 주차장</strong> — 지자체 또는 위탁업체 책임, 관리 부실 입증 시 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 유료 주차장은 영수증·주차권이 보관계약 입증 자료, 가능한 한 보관해두세요.</blockquote>',
      },
      {
        title: '보상 항목과 한도 — 어디까지 받을 수 있나',
        content:
          '<p><strong style="color:#1e3a5f">수리비·자기부담금·렌트비·시가하락 손해까지 단계별 청구 가능합니다.</strong></p>\n<ul>\n<li><strong>차량 수리비</strong> — 견적·실수리비 둘 중 적은 금액 인정, 보험사 표준 기준.</li>\n<li><strong>자기부담금</strong> — 자차보험 처리 시 20~30만 원 본인 부담, 가해자 특정 시 추가 청구.</li>\n<li><strong>대차료</strong> — 수리 기간 동급 차량 렌트비 인정, 평균 5~14일.</li>\n<li><strong>시가하락 손해</strong> — 사고이력 차량 시세 하락분, 신차 1~3년 차량은 인정 가능성 높음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 보험 처리만 하면 자기부담금 손해가 회수되지 않으므로 가해자 추급을 별도 진행해야 합니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 자기부담금에 대한 가해자 직접 청구권',
        summary:
          '대법원 2022다287284 사건(대법원, 2026.01.29 선고)에서 법원은 쌍방과실 사고에서 자차보험으로 수리 후 자기부담금 중 가해자 책임비율 부분은 피해자가 가해자에게 직접 청구할 수 있다고 판시했습니다. 주차장 사고에서도 가해자 특정 시 자기부담금 환수 가능.',
        takeaway:
          '자차보험 처리 후에도 자기부담금은 가해자에게 별도 청구할 수 있어 회수 절차를 두 번 챙기세요.',
      },
    ],
    faq: [
      {
        question: 'CCTV가 없는 주차장에서 파손됐어요.',
        answer:
          '<strong>주변 차량 블랙박스(주차모드)·인근 가게 CCTV로 보충 가능합니다.</strong> 하루 안에 주변 탐문 시작.',
      },
      {
        question: '관리사무소가 영상을 안 보여줍니다.',
        answer:
          '<strong>경찰 신고 후 사건번호로 영상 보존·열람을 요청하면 거의 100% 협조합니다.</strong> 거부 시 강제 영장 가능.',
      },
      {
        question: '가해자가 메모만 남기고 사라졌어요.',
        answer:
          '<strong>메모만으로 충분치 않을 수 있어 즉시 신고·연락이 필요합니다.</strong> 추후 메모 내용을 바꿔치기할 위험.',
      },
      {
        question: '자차보험을 안 들었으면 보상이 안 되나요?',
        answer:
          '<strong>가해자 특정 시 가해자 보험으로, 미특정 시 일상생활배상책임보험·관리주체 책임으로 청구 가능합니다.</strong>',
      },
      {
        question: '시가하락 손해는 어떻게 입증하나요?',
        answer:
          '<strong>중고차 시세 자료·감정평가서로 입증합니다.</strong> 신차 출고 1년 이내·고가 차량일수록 인정 가능성이 높습니다.',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '주차장 사고 CCTV 보존 요청', href: '/guide/traffic-accident/traffic-parking-cctv-preservation' },
      { label: '자차보험 자기부담금 청구', href: '/guide/traffic-accident/traffic-self-deduction-claim' },
      { label: '시가하락 손해 청구 방법', href: '/guide/traffic-accident/traffic-market-value-loss-claim' },
      { label: '뺑소니 가해자 추적 방법', href: '/guide/traffic-accident/traffic-hit-run-tracking-methods' },
      { label: '주차장 보관책임 손해배상', href: '/guide/traffic-accident/traffic-parking-custody-liability' },
    ],
  },

  // ─── 10. traffic-accident / trailer-jacknife-fault ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-trailer-jacknife-fault',
    keyword: '트레일러 잭나이프 사고 과실',
    questionKeyword: '앞 트레일러가 잭나이프로 꺾이며 박았는데 과실은 어떻게 되나요?',
    ctaKeyword: '트레일러 잭나이프 사고 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '트레일러 잭나이프 사고 5가지 과실·보상 쟁점 | 로앤가이드',
      description:
        '앞 트레일러가 잭나이프로 꺾이며 본인 차량을 덮쳤다면 트레일러 운전자·운수회사·화주·도로공사 4주체 책임을 따지는 5가지 쟁점을 지금 확인하세요.',
    },
    intro:
      '<p>"고속도로에서 앞 트레일러가 갑자기 90도로 꺾이며 미끄러져 제 차량을 덮쳤습니다." 잭나이프 현상은 견인차와 트레일러가 분리되며 꺾이는 사고로, 운전자 과속·급제동·노면 미끄러움이 복합 원인입니다. 일반 승용차 운전자는 거의 무과실이며 트레일러 운전자·운수회사·화주에 대한 청구가 가능합니다. 사고 직후 7일 안에 증거 보존과 보험 신고를 마쳐야 합니다.</p>',
    sections: [
      {
        title: 'Q1. 잭나이프 사고에서 누가 책임지나요?',
        content:
          '<p><strong style="color:#1e3a5f">트레일러 운전자가 원칙 책임, 운수회사·화주도 사용자·공동 책임 분담.</strong></p>\n<ul>\n<li><strong>운전자 1차 책임</strong> — 도로교통법상 안전운전 의무 위반, 형사·민사 동시 책임.</li>\n<li><strong>운수회사 사용자 책임</strong> — 민법 제756조 사용자 책임, 운전자 무자력 시 회사가 보전.</li>\n<li><strong>화주 책임</strong> — 적재물 불량·과적 입증 시 화주 공동 책임 가능.</li>\n<li><strong>도로공사 책임</strong> — 결빙·노면 관리 부실 입증 시 도로공사 일부 책임(보통 10~20%).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 일반 승용차 운전자는 거의 무과실이며, 4가지 청구 채널을 모두 활용할 수 있습니다.</blockquote>',
      },
      {
        title: 'Q2. 어떤 절차로 보상 청구해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">증거 보존 → 사고조사 → 보험 청구 → 형사 합의 → 민사 보충, 5단계 30일 안에.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 보존(즉시)</strong> — 블랙박스·CCTV·사고 사진·트레일러 차량번호·운수회사명 확보.</li>\n<li><strong>2단계 — 경찰 사고조사</strong> — 112 신고 후 정식 사고조사 의뢰, 도로 노면 상태 기록 요청.</li>\n<li><strong>3단계 — 보험 청구</strong> — 트레일러 종합보험 + 본인 자차·자상보험 동시 청구.</li>\n<li><strong>4단계 — 형사 합의</strong> — 12대 중과실 해당 시 합의 협상, 합의금 별도.</li>\n<li><strong>5단계 — 민사 보충</strong> — 보험 한도 초과 손해 발생 시 민사 청구로 보충.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 AI 법률 상담으로 빠르게 확인하세요</strong></p>\n<p style="margin:0;font-size:0.95em">변호사 상담 전, AI가 사고 정황·보험·과실비율을 분석해 청구 우선순위와 합의 적정선을 알려드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">무료 AI 상담 시작 →</a>\n</div>',
      },
      {
        title: 'Q3. 보상은 어디까지 받을 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">차량 전손·치료비·일실수입·후유장해까지 한도 내 모두 청구 가능.</strong></p>\n<ul>\n<li><strong>차량 전손 보상</strong> — 시세보상으로 동급 차량 구매 가능 금액 + 등록비·취득세.</li>\n<li><strong>치료비·간병비</strong> — 입원·수술·재활비 전액 + 가족 간병비.</li>\n<li><strong>일실수입</strong> — 사고 후 휴직·결근으로 인한 소득 손실, 월급 × 입원·요양 기간.</li>\n<li><strong>후유장해</strong> — 노동능력 상실률 × 평균임금 × 가동연한, 1년 후 진단으로 추가 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 트레일러 종합보험은 한도가 높아 일반 승용차 사고보다 합의금이 30~50% 더 높은 경향.</blockquote>',
      },
      {
        title: 'Q4. 도로 결빙·우천이 원인이면 어떻게 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">노면 미끄러움이 원인이면 도로공사 책임 10~30%, 운전자 책임은 줄지 않음.</strong></p>\n<ul>\n<li><strong>도로공사 의무</strong> — 도로법 제97조 관리 부실 입증 시 무과실 책임.</li>\n<li><strong>운전자 책임</strong> — 미끄러운 노면에서 과속 시 100% 운전자 과실, 도로공사 책임은 보충적.</li>\n<li><strong>제설·결빙주의 표지</strong> — 도로공사가 표지 미설치 시 책임 가산.</li>\n<li><strong>다중 청구</strong> — 트레일러 보험 + 도로공사 손해배상 동시 청구로 회수율 상승.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 도로공사 청구는 별도 행정 절차로 보통 6개월~1년 소요, 보험 청구를 우선시하세요.</blockquote>',
      },
      {
        title: 'Q5. 트레일러 운전자가 무보험·도주면 어떻게 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">정부보장사업·본인 자상·무보험차상해 특약으로 인적 손해를 우선 보상받습니다.</strong></p>\n<ul>\n<li><strong>정부보장사업</strong> — 자배법 제30조, 인적 손해 2,000만 원 한도 보상, 도주·무보험 모두 적용.</li>\n<li><strong>본인 무보험차상해 특약</strong> — 가입 시 한도가 1억~5억 원으로 정부보장사업보다 많음.</li>\n<li><strong>자기차량보험</strong> — 차량 손해는 자차보험으로 우선 처리, 가해자 추급은 보험사 몫.</li>\n<li><strong>형사 합의 강력 추진</strong> — 트레일러 운전자 검거 시 형사 합의로 추가 회수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 트레일러는 운수회사 단체보험에 가입돼 있는 경우가 많아, 운전자 무보험이라도 회사 보험으로 처리됩니다.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 안전운전 의무와 사고 인과관계',
        summary:
          '대법원 2024도11906 사건(대법원, 2025.07.18 선고)에서 법원은 운전자가 안전하게 운전할 업무상 주의의무를 게을리해 다른 차량과 충돌·상해를 입힌 경우 업무상과실치상죄가 성립한다고 판시했습니다. 트레일러 잭나이프 사고도 운전자 안전운전 의무 위반의 전형적 사례입니다.',
        takeaway:
          '트레일러 운전자의 과속·급제동은 안전운전 의무 위반으로 형사 처벌과 민사 배상이 함께 따릅니다.',
      },
    ],
    faq: [
      {
        question: '잭나이프 사고도 12대 중과실에 해당하나요?',
        answer:
          '<strong>안전운전 의무 위반·과속·급제동이 입증되면 12대 중과실이 될 수 있습니다.</strong> 이 경우 형사 합의 필수.',
      },
      {
        question: '본인 보험으로 우선 처리하면 손해인가요?',
        answer:
          '<strong>자차·자상보험으로 처리해도 보험사가 트레일러 측에 추급(보험자대위)합니다.</strong> 다만 자기부담금은 별도 추급 필요.',
      },
      {
        question: '트레일러 운수회사가 책임을 회피합니다.',
        answer:
          '<strong>민법 제756조 사용자 책임으로 강제 청구 가능합니다.</strong> 운수회사가 회피해도 변호사 통한 민사 소송으로 추급.',
      },
      {
        question: '동승자도 별도로 보상받을 수 있나요?',
        answer:
          '<strong>동승자는 본인 명의로 트레일러 보험·정부보장사업·무보험차상해 특약 등 청구 가능합니다.</strong> 운전자와 별도 절차.',
      },
      {
        question: '후유증이 1년 후 나타날 수도 있나요?',
        answer:
          '<strong>후유장해 진단은 1~2년 후 확정되는 경우가 많습니다.</strong> 합의 시 "후유증 추가 청구권 유보" 조항을 가능한 한 명시.',
      },
    ],
    cta: {
      text: '교통사고 합의 전 체크리스트, AI로 정리하기',
      link: '/chat?domain=traffic-accident',
    },
    internalLinks: [
      { label: '대형차량 사고 보험 청구', href: '/guide/traffic-accident/traffic-large-vehicle-insurance' },
      { label: '12대 중과실 합의 절차', href: '/guide/traffic-accident/traffic-12-major-negligence-settlement' },
      { label: '운수회사 사용자 책임', href: '/guide/traffic-accident/traffic-employer-liability-claim' },
      { label: '후유장해 추가 청구 시한', href: '/guide/traffic-accident/traffic-aftereffect-additional-claim' },
      { label: '도로공사 무과실 책임', href: '/guide/traffic-accident/traffic-road-corp-liability' },
    ],
  },
];
