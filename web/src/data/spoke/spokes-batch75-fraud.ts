import { SpokePage } from '../spoke-pages';

// batch75 fraud — 5개 (2026-05-23)
//
// 고유 존재 이유:
// 1. 중고차 주행거리 조작 — 일반 중고차 결함 류와 분기. '디지털 계기판 조작 + 표시광고법 + 자동차관리법 + 사기죄 결합' 트랙.
// 2. 분유 가짜 대량유통 — 일반 식품 위해 류와 분기. '식품위생법 + 의약외품 위반 + 영아 건강 + 집단 피해 형사 가중' 트랙.
// 3. 종교 헌금 압박 부동산 증여 — 일반 종교 사기 류와 분기. '신앙 강박 + 부동산 증여 강요 + 의사결정 자유 침해 + 증여 취소·사기' 트랙.
// 4. 지인 통한 작전주 권유 — 일반 투자사기 류와 분기. '지인 친밀 신뢰관계 + 미공개 정보 가장 + 자본시장법 위반 + 사기 결합' 트랙.
// 5. 개인과외 선결제 잠적 — 일반 학원 폐쇄 류와 분기. '1:1 과외 + 6개월·1년치 선결제 + 강사 잠적 + 학원법 미적용 + 사기' 트랙.

export const spokesBatch75Fraud: SpokePage[] = [
  // ─── 1 ───
  {
    domain: 'fraud',
    slug: 'fraud-secondhand-car-mileage-tampering-track',
    keyword: '중고차 주행거리 조작',
    questionKeyword: '중고차 매매상에서 \'주행거리 4만km 무사고\' 광고를 보고 1,800만원에 구매했는데 정비소에서 실제 18만km 조작 차량으로 확인됐어요.',
    ctaKeyword: '중고차 주행거리 조작 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '중고차 주행거리 조작 — 5단계 환불·배상 다툼 | 로앤가이드',
      description:
        '디지털 계기판 조작 차량을 무사고·저주행 광고로 속아 구매했다면 자동차관리법·표시광고법·사기 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'5년 무사고·실주행 4만km·1인 소유\' 광고를 믿고 중고차 매매단지에서 디젤 세단을 1,800만원에 구매했습니다. 인수 한 달 뒤 정비소 점검 과정에서 \'OBD 진단 기록상 18만km 주행 흔적·계기판 후교체 정황\'을 확인했고, 자동차 검사 이력 조회에서도 1년 전 13만km 기록이 남아 있었어요. 매매상사·딜러는 \'우리는 입고된 그대로 팔았다\'며 책임을 부인 중입니다." 자동차관리법 제80조는 \'주행거리 조작\'을 형사처벌(3년 이하 징역 또는 3천만원 이하 벌금) 영역으로 규정하고, 표시·광고의 공정화에 관한 법률은 \'주행거리·사고 이력\'을 거래 결정의 중요사항으로 평가하며, 형법 제347조는 \'기망에 의한 재물 교부\'를 사기죄로 처벌하는 영역입니다. 주행거리 조작 + 광고 표시 + 인수 후 단기간 발각 결합은 \'기망에 의한 재물 교부\' 평가 + 자동차관리법 위반 + 표시광고법 위반 결합 트랙. 피해자라면 ① 조작 입증 ② 자동차관리법 ③ 표시광고법 ④ 형사 고소 ⑤ 민사 5중 트랙이 가능한 영역으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 주행거리 조작 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 조작·자동차법·표시광고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 조작 입증</strong> — OBD 진단 기록·계기판 후교체 정황·자동차 검사 이력 조회.</li>\n<li><strong>② 자동차관리법 위반 신고</strong> — 제80조 주행거리 조작 형사 신고(3년 이하 징역).</li>\n<li><strong>③ 표시광고법 위반</strong> — 무사고·저주행 광고가 거래 결정 중요사항.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 매매상·딜러 공동책임 검토.</li>\n<li><strong>⑤ 민사 배상</strong> — 매매대금 반환·차액·정신적 위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 한국교통안전공단 자동차검사 이력 + OBD 진단기 기록은 조작 입증의 결정 자료. 매매상사가 \'입고 그대로\'라며 책임을 회피해도 자동차관리법은 \'중개·매매 사업자\'에도 고지·확인 의무를 부과합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 한국교통안전공단·경찰청·소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 조작 입증 자료 즉시 보존 (인지 당일)</strong> — OBD 진단 기록·자동차검사 이력·계기판 사진.</li>\n<li><strong>2단계 — 자동차관리법 위반 신고 (1주 내)</strong> — 관할 지자체 자동차 관리부서·한국교통안전공단(1577-0990).</li>\n<li><strong>3단계 — 한국소비자원 1372 분쟁조정 (30~60일)</strong> — 매매상·딜러 공동 신청.</li>\n<li><strong>4단계 — 경찰 사이버 사기 고소 (시효 7년)</strong> — 매매상·딜러·전소유자 공동 고소.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 매매대금·차액·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고차 주행거리 조작 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 조작·표시·매매 갈래입니다.</strong></p>\n<ul>\n<li><strong>중고차 매매 계약서·성능상태점검기록부</strong></li>\n<li><strong>매매상 광고·딜러 SNS·매물 캡처 (무사고·저주행 표시)</strong></li>\n<li><strong>한국교통안전공단 자동차검사 이력 조회 자료</strong></li>\n<li><strong>OBD 진단기 기록·정비소 점검 견적·정비 영수증</strong></li>\n<li><strong>계기판 사진·후교체 정황 (스티커·고무 자국·나사 흠집)</strong></li>\n<li><strong>전소유자 명의·소유 기간·주행 추정 자료</strong></li>\n<li><strong>매매대금 결제·이체 영수증</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 한국교통안전공단 1년 단위 자동차검사 이력은 누구나 조회 가능한 공시 자료. 광고상 주행거리와 검사 이력의 격차가 결정 입증.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>매매상·딜러 책임 분담</strong> — 자동차관리법은 매매 사업자에 확인 의무 부과.</li>\n<li><strong>전소유자 책임</strong> — 조작 주체 입증 시 공동 책임.</li>\n<li><strong>성능상태점검기록부의 허위</strong> — 점검자 책임 + 매매상 연대.</li>\n<li><strong>인수 후 단기간 발각</strong> — 인수 시점 조작 존재 추정 강함.</li>\n<li><strong>매매대금 반환·차액</strong> — 시세 평가 + 조작 차액 산정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 업무방해·사기 평가 영역',
        summary:
          '대법원 2022도1862(대법원, 2026.01.29 선고) 영역에서 법원은 위계에 의한 업무방해죄의 성립 요건과 입력된 정보를 바탕으로 한 사기성 평가를 다루면서, 기망 행위와 재물 교부의 인과관계 평가가 사기죄 성립의 결정 사정이라고 본 사례 흐름이 있고, 중고차 주행거리 조작 후 무사고·저주행 광고로 매매한 사안에도 동일 평가 기준이 적용됩니다.',
        takeaway: '주행거리 조작 + 광고 표시 + 인수 후 단기간 발각 결합 시 사기죄·자동차관리법 평가 영역 — 변호인 상담·고소 권장.',
      },
    ],
    faq: [
      {
        question: '매매상이 \'입고 그대로 팔았다\'며 책임을 부인합니다',
        answer:
          '<strong>자동차관리법은 매매 사업자에도 확인 의무를 부과합니다.</strong> 매매상·딜러·전소유자 공동 책임 검토.',
      },
      {
        question: '성능상태점검기록부에 \'정상\'으로 표시돼 있어요',
        answer:
          '<strong>점검자·매매상 연대 책임 영역입니다.</strong> 점검기록부 허위 입증 시 형사·민사 가중.',
      },
      {
        question: '매매대금 전액 환불이 가능할까요?',
        answer:
          '<strong>매매대금 + 차액 + 위자료 청구 영역입니다.</strong> 조작 입증 자료가 결정.',
      },
      {
        question: '한국소비자원 분쟁조정이 빠를까요?',
        answer:
          '<strong>분쟁조정은 30~60일 내 결정 영역입니다.</strong> 형사 고소·민사 소송과 병행 가능.',
      },
      {
        question: '전소유자도 같이 고소할 수 있나요?',
        answer:
          '<strong>조작 주체 입증 시 공동 고소 영역입니다.</strong> 자동차 등록원부·소유 기간 자료.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '온라인 거래 사기 대응', href: '/guide/fraud/fraud-online-transaction-response' },
      { label: '소비자 분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사기 피해 환급', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '사기죄 형사 절차', href: '/guide/fraud/fraud-criminal-procedure' },
    ],
  },

  // ─── 2 ───
  {
    domain: 'fraud',
    slug: 'fraud-online-baby-formula-counterfeit-track',
    keyword: '온라인 가짜 분유 유통',
    questionKeyword: '온라인 직구몰에서 산 영아 분유 6캔이 정품과 라벨·바코드가 다르고 같은 카페에서 다수 피해자 신고가 나왔어요. 어떻게 대응하나요?',
    ctaKeyword: '가짜 분유 유통 사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '온라인 가짜 분유 유통 — 5단계 환불·집단 신고 | 로앤가이드',
      description:
        '영아 분유 가짜 대량유통 + 다수 피해자 정황이라면 식품위생법·표시광고법·사기 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"맘카페에서 \'정품 직구 + 30% 할인\' 광고를 본 후 영아 분유 6캔을 18만원에 구매했습니다. 인수 후 라벨 인쇄 품질·바코드 자릿수·캔 바닥 각인이 정품과 다른 정황을 발견했고, 같은 카페에서 \'바코드 미인식·아이 설사·구토\' 후기가 누적되고 있었어요. 판매자는 \'독일 본사 직수입\' 표시했지만 통관 이력·관세 자료 요청에 응답 없이 잠적했고, 같은 판매자명으로 여러 SNS 계정·쇼핑몰이 운영되는 정황이었습니다." 식품위생법 제4조는 \'위해 우려 식품의 판매·진열·제조·수입\'을 금지(영업정지·5년 이하 징역) 영역이며, 표시·광고의 공정화에 관한 법률은 \'정품·원산지·성분\'을 거래 결정의 중요사항으로 평가하고, 형법 제347조·제347조의2는 \'기망에 의한 재물 교부\' 및 \'다수인 동시 피해\'를 사기죄 가중 영역으로 봅니다. 영아 건강 피해 + 다수 피해자 결합은 식품위생법 + 표시광고법 + 집단 사기 결합 트랙. 피해자라면 ① 정품 비교 ② 식약처 신고 ③ 표시광고 ④ 집단 고소 ⑤ 민사 5중 트랙으로 정리할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 가짜 분유 유통 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 정품비교·식약처·표시·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 정품 비교 자료</strong> — 라벨·바코드·각인·캔 마감 비교 사진.</li>\n<li><strong>② 식약처 위해식품 신고 (1399)</strong> — 영아 건강 피해 + 위해평가.</li>\n<li><strong>③ 표시광고법 위반</strong> — \'정품·본사 직수입\' 허위 표시.</li>\n<li><strong>④ 집단 사기 고소</strong> — 형법 제347조 + 다수 피해자 결합 가중.</li>\n<li><strong>⑤ 민사 배상</strong> — 매매대금·치료비·정신적 위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 영아·유아 식품 위해는 사회적 비난 가중 영역. 식약처 1399 신고 + 카페 다수 피해자 결집 + 집단 고소 결합 시 형사 처벌·압수수색 가속 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 식약처·경찰청·소비자원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 정품 비교 자료 즉시 보존 (인지 당일)</strong> — 라벨·바코드·각인·캔 마감 사진 + 정품 비교 영상.</li>\n<li><strong>2단계 — 식약처 위해식품 신고 1399 (1주 내)</strong> — 위해평가·영업정지 검토.</li>\n<li><strong>3단계 — 한국소비자원 1372 + 카페 피해자 결집 (2주)</strong>.</li>\n<li><strong>4단계 — 경찰 집단 고소 (시효 7년)</strong> — 판매자 + 운영 SNS 계정 동시 고소.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 매매대금·치료비·위자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">가짜 분유 유통 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 정품비교·신고·결제 갈래입니다.</strong></p>\n<ul>\n<li><strong>구매 영수증·결제 자료·이체 내역</strong></li>\n<li><strong>판매자 광고·SNS·쇼핑몰 캡처</strong></li>\n<li><strong>정품과 인수 제품 비교 사진·영상 (라벨·바코드·각인)</strong></li>\n<li><strong>아이의 건강 피해 진단서·치료비 영수증</strong></li>\n<li><strong>카페·SNS 다수 피해자 후기 캡처·연락처</strong></li>\n<li><strong>판매자가 주장한 \'본사 직수입\' 통관 이력 부재 자료</strong></li>\n<li><strong>식약처 1399 신고 접수증</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 영아·유아 식품 위해 사건은 위해평가 → 영업정지·압류 → 형사고소 흐름. 다수 피해자 결집이 압수수색 신속화의 결정 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>판매자 신원 잠적</strong> — 통신사 협조·계좌 추적·SNS 계정 운영자 추적.</li>\n<li><strong>본사 직수입 허위</strong> — 통관 이력 부재가 결정 입증.</li>\n<li><strong>건강 피해 인과관계</strong> — 진단서·복용 시점 일치 자료.</li>\n<li><strong>집단 사기 가중</strong> — 다수 피해자 동시 고소 결합.</li>\n<li><strong>치료비·위자료</strong> — 영아 건강 피해는 위자료 가중 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>식품의약품안전처 1399 (불량식품·위해식품 신고)</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위계·사기 평가 영역',
        summary:
          '대법원 2022도1862(대법원, 2026.01.29 선고) 영역에서 법원은 위계에 의한 업무방해죄의 성립 요건과 사기성 평가를 다루면서, 기망 행위와 재물 교부의 인과관계 평가가 사기죄 성립의 결정 사정이라고 본 사례 흐름이 있고, 정품 표시·본사 직수입 가장 + 영아 건강 피해 + 다수 피해자 집단 결합 사안에도 동일 평가 기준이 적용됩니다.',
        takeaway: '영아 식품 위해 + 다수 피해자 + 잠적 결합 시 식품위생법·사기 평가 영역 — 식약처 신고·고소 권장.',
      },
    ],
    faq: [
      {
        question: '판매자가 잠적했는데 신원 추적이 가능한가요?',
        answer:
          '<strong>경찰 수사·통신사·계좌 추적 영역입니다.</strong> SNS·결제·통화 자료 보존.',
      },
      {
        question: '아이가 설사·구토를 보였는데 인과관계 입증이 가능한가요?',
        answer:
          '<strong>진단서·복용 시점·검사 결과 자료가 결정 입증입니다.</strong> 병원 진단서 즉시 확보.',
      },
      {
        question: '식약처 1399 신고만으로 환불이 될까요?',
        answer:
          '<strong>식약처는 위해평가·영업정지 영역입니다.</strong> 환불은 한국소비자원·민사 별도 트랙.',
      },
      {
        question: '카페 피해자들과 함께 고소할 수 있나요?',
        answer:
          '<strong>집단 고소는 형사 가중·압수수색 신속화 영역입니다.</strong> 피해자 결집 권장.',
      },
      {
        question: '아이 건강 피해 위자료는 얼마 정도인가요?',
        answer:
          '<strong>영아 건강 피해는 위자료 가중 영역입니다.</strong> 사례에 따라 진단·치료 수준에 따라 다양.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '온라인 거래 사기 대응', href: '/guide/fraud/fraud-online-transaction-response' },
      { label: '소비자 분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사기 피해 환급', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '사기죄 형사 절차', href: '/guide/fraud/fraud-criminal-procedure' },
    ],
  },

  // ─── 3 ───
  {
    domain: 'fraud',
    slug: 'fraud-religion-tithe-pressure-property-donate-track',
    keyword: '종교 헌금 압박 부동산 증여',
    questionKeyword: '교회 목사·간부가 \'십일조 부족이 가족 불행의 원인\'이라며 1년간 압박, 부친 명의 아파트 1채를 교회에 증여하게 됐어요. 취소 가능한가요?',
    ctaKeyword: '종교 헌금 증여 압박 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '종교 헌금 압박 부동산 증여 — 5단계 취소·환수 | 로앤가이드',
      description:
        '신앙 강박으로 부동산을 종교단체에 증여했다면 의사결정 자유 침해·증여 취소·사기 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"가족이 다니는 교회 목사·장로가 \'헌금이 부족해 가족에게 환난이 닥친다\'며 1년간 반복적으로 십일조 인상·특별헌금을 요구했습니다. 결국 부친 명의 아파트(시가 약 4억원)를 \'교회 부지 확장 명목\'으로 증여하는 계약서를 작성했고, 등기 이전까지 마쳤어요. 증여 직후 가족은 \'협박과 신앙적 강박 사이 모호한 압박\'을 받았다고 진술했고, 같은 교회에서 다른 신도들도 유사 패턴의 증여 사례가 누적된 정황이었습니다." 민법 제110조는 \'강박에 의한 의사표시\' 취소권을 규정(취소권 행사 기간 3년·법률행위 후 10년)하고, 민법 제103조는 \'반사회질서의 법률행위\' 무효를 규정하며, 형법 제350조 공갈죄·제347조 사기죄도 신앙적 강박·기망 결합 영역에서 평가 가능한 트랙입니다. 종교 강박 + 가족 환난 위협 + 다수 피해자 결합은 의사결정 자유 침해 + 증여 취소 + 형사 결합 트랙. 피해자라면 ① 강박 입증 ② 증여 취소 ③ 사회질서 위반 ④ 형사 고소 ⑤ 등기 환원 5중 트랙으로 정리할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 종교 압박 증여 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 강박·취소·사회질서·고소·등기 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 강박 입증</strong> — 설교 녹음·메시지·반복 압박 정황·가족 환난 위협 발언.</li>\n<li><strong>② 증여 취소 통지</strong> — 민법 제110조 강박에 의한 의사표시 취소(취소권 3년).</li>\n<li><strong>③ 사회질서 위반</strong> — 민법 제103조 반사회질서 법률행위 무효.</li>\n<li><strong>④ 공갈·사기 고소</strong> — 형법 제350조·제347조.</li>\n<li><strong>⑤ 등기 환원 소송</strong> — 소유권이전등기 말소 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 종교 강박은 \'명시적 협박\' 없이도 신앙적 압박·환난 위협으로 의사결정 자유 침해 평가가 가능한 영역. 같은 교회 다수 피해자 결집·녹음 자료가 결정 입증.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 변호인·검찰·법원 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 강박 자료 즉시 보존 (취소 결심 시)</strong> — 설교 녹음·메시지·증여 전후 압박 정황.</li>\n<li><strong>2단계 — 증여 취소 내용증명 통지 (1~2주)</strong> — 교회 측 + 등기 명의인.</li>\n<li><strong>3단계 — 검찰·경찰 공갈·사기 고소 (시효 7년)</strong> — 목사·장로 공동.</li>\n<li><strong>4단계 — 등기 말소 소송 (소유권 이전 후 즉시)</strong>.</li>\n<li><strong>5단계 — 손해배상 청구 (시효 3년)</strong> — 정신적 위자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">종교 압박 증여 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 강박·증여·등기 갈래입니다.</strong></p>\n<ul>\n<li><strong>증여계약서·소유권이전등기 자료</strong></li>\n<li><strong>아파트 시가 평가·감정 자료</strong></li>\n<li><strong>목사·장로의 설교 녹음·문자·카톡 메시지</strong></li>\n<li><strong>증여 전 가족 환난 위협 발언 자료</strong></li>\n<li><strong>가족·증인 진술서 (반복 압박 정황)</strong></li>\n<li><strong>같은 교회 다수 피해자 사례·진술</strong></li>\n<li><strong>본인 신앙·심리 상태 의료 자료(필요 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 종교적 의사표시도 \'자유로운 결정\'이 전제. 반복 압박·환난 위협·다수 사례 누적이 결정 입증의 핵심 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>강박의 정도</strong> — 명시적 협박 없이도 신앙적 압박·반복성 평가.</li>\n<li><strong>증여의 자발성</strong> — 다수 사례 누적이 자발성 부정 자료.</li>\n<li><strong>취소권 행사 기간</strong> — 강박 종료일로부터 3년·법률행위 후 10년.</li>\n<li><strong>등기 환원</strong> — 제3자 양도 전 신속한 가처분 검토.</li>\n<li><strong>가족 협조</strong> — 부친 명의인 직접 취소 의사 결정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기·기망 평가 영역',
        summary:
          '대법원 2025도15970(대법원, 2026.01.29 선고) 영역에서 법원은 사기죄와 형의 실효 등 가중 처벌 영역을 다루면서, 기망에 의한 재물 교부의 인과관계 평가가 사기죄 성립의 결정 사정이라고 본 사례 흐름이 있고, 종교 강박을 결합한 부동산 증여 사안에도 의사결정 자유 침해의 정도가 동일 평가 기준으로 검토됩니다.',
        takeaway: '신앙적 강박 + 환난 위협 + 다수 피해 결합 시 강박·사기 평가 영역 — 변호인 상담·취소·고소 권장.',
      },
    ],
    faq: [
      {
        question: '\'명시적 협박\'이 없었는데 강박으로 인정될까요?',
        answer:
          '<strong>신앙적 압박·환난 위협·반복성도 강박 평가 영역입니다.</strong> 녹음·메시지·다수 사례 결합 입증.',
      },
      {
        question: '취소권 행사 기간이 얼마나 남았나요?',
        answer:
          '<strong>강박 종료일로부터 3년·법률행위 후 10년입니다.</strong> 내용증명 통지부터 시작.',
      },
      {
        question: '교회가 이미 아파트를 매각·담보 설정했다면?',
        answer:
          '<strong>처분금지 가처분이 신속 대응의 핵심입니다.</strong> 등기 가처분 우선 검토.',
      },
      {
        question: '같은 교회 다른 피해자도 있어요',
        answer:
          '<strong>다수 사례 결집은 강박 입증의 결정 자료입니다.</strong> 공동 고소·집단 소송 검토.',
      },
      {
        question: '본인이 아닌 부친 명의인데도 취소 가능한가요?',
        answer:
          '<strong>명의인 본인의 취소 의사가 핵심입니다.</strong> 가족 협조·대리권 자료 보존.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '온라인 거래 사기 대응', href: '/guide/fraud/fraud-online-transaction-response' },
      { label: '소비자 분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사기 피해 환급', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '사기죄 형사 절차', href: '/guide/fraud/fraud-criminal-procedure' },
    ],
  },

  // ─── 4 ───
  {
    domain: 'fraud',
    slug: 'fraud-stock-manipulation-anti-friend-rec-track',
    keyword: '지인 통한 작전주 권유',
    questionKeyword: '오랜 친구가 \'개발 진행 미공개 호재가 있다\'며 권한 상장 소형주에 6,000만원 투자, 한 달 뒤 폭락. 자본시장법 위반이라고 들었어요.',
    ctaKeyword: '작전주 지인 권유 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '지인 권유 작전주 — 5단계 자본시장법·사기 대응 | 로앤가이드',
      description:
        '친구가 미공개 호재를 가장해 권한 작전주에 투자했다 폭락 피해라면 자본시장법·사기 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"10년 지기 친구가 \'곧 발표될 신약 임상 호재 정보\'를 핑계로 코스닥 소형주에 6,000만원을 6개월간 분할 투자하도록 권유했습니다. 친구는 \'본인도 큰돈을 넣었다\'며 신뢰를 강조했고, 단체 카톡방·텔레그램에서 같은 종목의 일관된 매수 추천이 반복됐어요. 매수 직후 주가는 30% 급등했지만 한 달 뒤 임상 호재가 \'사실무근\'으로 공시되며 60% 폭락했고, 친구는 이미 고점에서 본인 주식을 매도한 정황이 매매 내역으로 확인됐습니다." 자본시장법 제176조는 \'시세조종\' 행위(10년 이하 징역 또는 부당이득의 3~5배 벌금)를 금지하고, 제178조는 \'부정거래\'·\'풍문 유포\' 금지(20년 이하 징역) 영역이며, 형법 제347조 사기죄도 결합 평가 가능한 트랙입니다. 지인 신뢰관계 + 미공개 호재 가장 + 본인 선매도 + 텔레그램 동시 추천 결합은 자본시장법 위반 + 사기 결합 트랙. 피해자라면 ① 권유 자료 ② 매매 패턴 ③ 금감원 신고 ④ 사기·자본시장법 고소 ⑤ 민사 5중 트랙으로 정리할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 작전주 권유 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권유·매매·신고·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권유 자료</strong> — 친구의 호재 발언·카톡·텔레그램·매수 추천 메시지.</li>\n<li><strong>② 매매 패턴</strong> — 친구의 선매도·후권유·고점 청산 정황.</li>\n<li><strong>③ 금감원·금융위 신고</strong> — 자본시장법 시세조종·부정거래 신고.</li>\n<li><strong>④ 사기·자본시장법 고소</strong> — 형법 제347조 + 자본시장법 제176조·제178조.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 투자손실·정신적 위자료(시효 3년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 지인 권유 + 미공개 호재 가장 + 본인 선매도 패턴은 자본시장법 \'부정거래\'·\'시세조종\' 평가 결정 사정. 텔레그램 동시 추천 다수자 결합 시 형사 처벌 가중 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 금감원·검찰·법원 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권유·매매 자료 즉시 보존 (인지 당일)</strong> — 카톡·텔레그램·매매 영수증.</li>\n<li><strong>2단계 — 친구 매매 패턴 자료 (1~2주)</strong> — 증권사 매매 내역 협조 요청 또는 수사 단계.</li>\n<li><strong>3단계 — 금감원 1332 + 금융위 자본시장조사단 신고 (30~60일)</strong>.</li>\n<li><strong>4단계 — 검찰·경찰 사기·자본시장법 고소 (시효 자본시장법 7~10년)</strong>.</li>\n<li><strong>5단계 — 민사 손해배상 (시효 3년)</strong>.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">작전주 권유 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 권유·매매·시세 갈래입니다.</strong></p>\n<ul>\n<li><strong>친구의 권유 카톡·텔레그램·통화 녹음</strong></li>\n<li><strong>본인 매수 영수증·매매 내역·증권사 거래확인서</strong></li>\n<li><strong>해당 종목의 일자별 시세·거래량 차트</strong></li>\n<li><strong>임상 호재 공시 자료(허위 입증)</strong></li>\n<li><strong>텔레그램 단체방·다수자 동시 매수 추천 정황</strong></li>\n<li><strong>친구의 선매도 정황 자료(가능 범위)</strong></li>\n<li><strong>본인 신분증·계좌 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자본시장법 위반 + 사기 결합 사건은 금감원·검찰 합동 수사 영역. 다수 피해자 결집 + 친구 매매 패턴이 결정 입증.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>지인 권유의 사기성</strong> — 신뢰관계 가장 + 본인 선매도 결합 평가.</li>\n<li><strong>미공개 호재 가장</strong> — 공시 자료와 권유 발언의 격차.</li>\n<li><strong>시세조종 vs 부정거래</strong> — 자본시장법 제176·178조 평가.</li>\n<li><strong>친구 단독 vs 조직적</strong> — 텔레그램 단체방·세력 결합 정황.</li>\n<li><strong>손실 환수</strong> — 매수가 - 청산가 차액 + 위자료.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>금융감독원 1332</strong></li>\n<li><strong>금융위원회 자본시장조사단</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기·자본시장법 평가 영역',
        summary:
          '대법원 2025도15970(대법원, 2026.01.29 선고) 영역에서 법원은 사기·관련 가중처벌 영역을 다루면서, 기망 행위와 재물 교부의 인과관계 평가가 사기죄 성립의 결정 사정이라고 본 사례 흐름이 있고, 지인 신뢰 + 미공개 호재 가장 + 본인 선매도 결합 사안에는 자본시장법 부정거래 평가가 결합되는 영역입니다.',
        takeaway: '지인 권유 + 호재 가장 + 선매도 결합 시 사기·자본시장법 평가 영역 — 변호인 상담·금감원 신고·고소 권장.',
      },
    ],
    faq: [
      {
        question: '친구가 \'본인도 손해 봤다\'고 주장합니다',
        answer:
          '<strong>친구의 실제 매매 내역이 결정 입증입니다.</strong> 검찰·경찰 수사 단계에서 증권사 협조.',
      },
      {
        question: '텔레그램 단체방에서 같은 종목을 동시에 추천했어요',
        answer:
          '<strong>조직적 시세조종·부정거래 평가 영역입니다.</strong> 단체방 캡처 + 다수 피해자 결집.',
      },
      {
        question: '금감원 신고와 고소 중 어느 게 먼저인가요?',
        answer:
          '<strong>병행 진행이 일반적입니다.</strong> 금감원 조사가 형사 입증의 결정 자료.',
      },
      {
        question: '투자 손실 전액 환수가 가능한가요?',
        answer:
          '<strong>매수가-청산가 차액 + 위자료 청구 영역입니다.</strong> 자본시장법은 부당이득 환수 별도.',
      },
      {
        question: '오래된 친구라 인간적으로 망설여집니다',
        answer:
          '<strong>형사 시효 7~10년이라 결정은 빠를수록 좋습니다.</strong> 변호인 상담 후 진행 검토.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '온라인 거래 사기 대응', href: '/guide/fraud/fraud-online-transaction-response' },
      { label: '소비자 분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사기 피해 환급', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '사기죄 형사 절차', href: '/guide/fraud/fraud-criminal-procedure' },
    ],
  },

  // ─── 5 ───
  {
    domain: 'fraud',
    slug: 'fraud-tutoring-prepaid-private-academy-track',
    keyword: '개인과외 선결제 잠적',
    questionKeyword: '명문대생 과외 교사에게 자녀 1:1 수학 과외 1년치 360만원을 선결제했는데 3개월 후 강사가 연락두절·잠적했어요.',
    ctaKeyword: '개인과외 선결제 잠적 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '개인과외 선결제 잠적 — 5단계 환불·고소 | 로앤가이드',
      description:
        '1:1 과외 강사가 1년치 선결제 후 잠적했다면 학원법 미적용·민법 위임·사기 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"SKY 출신 명문대 강사를 SNS로 알게 돼 중학생 자녀에게 주 2회 1:1 수학 과외를 시작했습니다. \'1년치 일시납 시 10% 할인\' 조건으로 360만원을 강사 개인계좌로 송금했고, 약 3개월간 정상 진행됐어요. 그런데 11월부터 \'몸이 안 좋다\'며 수업이 미뤄지기 시작했고, 연락이 끊긴 채 SNS 계정도 비공개로 전환됐습니다. 같은 강사에게 선결제한 다른 학부모 다수도 같은 시기 동일 패턴 피해를 입었어요." 학원의 설립·운영 및 과외교습에 관한 법률 제14조의2는 \'개인과외 교습자 신고\'를 의무화(미신고 시 100만원 이하 과태료) 영역이지만, 강사 개인이 위임받은 용역 미이행은 민법 제680조 위임계약·제681조 선관주의의무 위반 + 사기죄 결합 평가 트랙입니다. 1:1 과외 + 다액 선결제 + 강사 잠적 + 다수 피해자 결합은 위임 불이행 + 사기 결합 트랙. 피해자라면 ① 강사 신원 ② 위임 자료 ③ 다수 피해자 결집 ④ 형사 고소 ⑤ 민사 5중 트랙으로 정리할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 과외 선결제 잠적 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신원·위임·결집·고소·민사 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 강사 신원 추적</strong> — SNS·계좌·통화 기록·지자체 개인과외 신고 여부 조회.</li>\n<li><strong>② 위임 자료</strong> — 선결제 영수증·수업 진도·연락두절 정황.</li>\n<li><strong>③ 다수 피해자 결집</strong> — 같은 강사 피해 학부모 단체.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 시효 7년.</li>\n<li><strong>⑤ 민사 부당이득 반환</strong> — 미수업분 환불·위자료(시효 10년).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 개인과외는 학원과 달리 공제·보험 의무가 없어 강사 잠적 시 환불 회수가 어려운 영역. 강사 개인계좌 송금 + 다수 피해자 결합이 사기죄 평가의 결정 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 환수 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰·소비자원·법원 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 위임 자료 즉시 보존 (인지 당일)</strong> — 카톡·문자·통화·선결제 영수증·수업 일지.</li>\n<li><strong>2단계 — 강사 신원·신고 조회 (1주)</strong> — 지자체 교육지원청 개인과외 신고 여부.</li>\n<li><strong>3단계 — 다수 피해자 결집 + 한국소비자원 1372 (2주)</strong>.</li>\n<li><strong>4단계 — 경찰 사기 고소 (시효 7년)</strong> — 다수 피해자 공동 고소.</li>\n<li><strong>5단계 — 민사 부당이득 반환 + 가압류 (시효 10년)</strong>.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">개인과외 선결제 잠적 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신원·결제·수업 갈래입니다.</strong></p>\n<ul>\n<li><strong>강사 신원 정보 (이름·연락처·SNS·계좌)</strong></li>\n<li><strong>선결제 이체 영수증·계좌 입금 자료</strong></li>\n<li><strong>수업 일지·진도표·교재 사진</strong></li>\n<li><strong>연락두절 시점의 카톡·문자·SNS 비공개 자료</strong></li>\n<li><strong>같은 강사 피해 학부모 연락처·진술</strong></li>\n<li><strong>강사의 학력·신분 자료 (학생증·재학증명서 수령 정황)</strong></li>\n<li><strong>지자체 교육지원청 개인과외 신고 부재 확인</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 개인과외 신고 의무는 강사에 있지만 미신고 자체로 형사 처벌은 가볍습니다. 핵심은 다수 피해자 결집·계좌 추적·민사 가압류.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>강사 잠적 신원</strong> — 통신사·계좌 추적·검찰 수사 협조.</li>\n<li><strong>선결제 환불 산정</strong> — 미수업분 일할 계산·위약금.</li>\n<li><strong>학력 사칭 결합</strong> — 가짜 SKY 학생증·재학증명서 결합 시 사기 가중.</li>\n<li><strong>다수 피해 결집</strong> — 공동 고소 + 집단 가압류.</li>\n<li><strong>강사 재산 부재</strong> — 가압류·계좌압류 우선 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>관할 교육지원청 (개인과외 신고 조회)</strong></li>\n<li><strong>경찰청 사이버범죄 신고 (ecrm.cyber.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기·재물 교부 평가 영역',
        summary:
          '대법원 2025도15970(대법원, 2026.01.29 선고) 영역에서 법원은 사기와 관련 가중처벌 영역을 다루면서, 기망 행위와 재물 교부의 인과관계 평가가 사기죄 성립의 결정 사정이라고 본 사례 흐름이 있고, 1:1 과외 + 다액 선결제 + 강사 잠적 + 다수 피해자 패턴 사안에도 동일 평가 기준이 적용됩니다.',
        takeaway: '1:1 과외 + 선결제 + 잠적 + 다수 피해 결합 시 사기·위임 평가 영역 — 변호인 상담·공동 고소 권장.',
      },
    ],
    faq: [
      {
        question: '강사가 \'곧 돌아오겠다\'고 답하는데 기다려야 하나요?',
        answer:
          '<strong>다수 피해자 동시 발생 시 잠적 가능성 높습니다.</strong> 지체 시 계좌 잔액·재산 소진 위험.',
      },
      {
        question: '학원이 아닌 개인이라 환불 받기 어려운가요?',
        answer:
          '<strong>학원과 달리 보장보험 없어 민사 가압류가 핵심입니다.</strong> 신속한 계좌 가압류 검토.',
      },
      {
        question: '강사가 SKY 출신이라고 했는데 가짜였어요',
        answer:
          '<strong>학력 사칭 결합 시 사기 가중 영역입니다.</strong> 학생증·재학증명서 자료 보존.',
      },
      {
        question: '다른 학부모와 함께 고소해도 되나요?',
        answer:
          '<strong>공동 고소는 형사 가중·수사 신속 영역입니다.</strong> 피해자 결집 권장.',
      },
      {
        question: '시효는 어떻게 되나요?',
        answer:
          '<strong>사기 형사 7년·민사 부당이득 10년입니다.</strong> 다만 신속 진행이 환수 가능성을 높입니다.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '온라인 거래 사기 대응', href: '/guide/fraud/fraud-online-transaction-response' },
      { label: '소비자 분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사기 피해 환급', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '사기죄 형사 절차', href: '/guide/fraud/fraud-criminal-procedure' },
    ],
  },
];
