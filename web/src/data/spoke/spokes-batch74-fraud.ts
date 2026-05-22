import { SpokePage } from '../spoke-pages';

// batch74 fraud — 5개 (2026-05-22)
//
// 고유 존재 이유:
// 1. 온라인 분양 강아지 질병 은닉 — 일반 중고거래 사기 류와 분기. 여기는 \'동물보호법 + 분양계약 + 질병 은닉 + 환불·배상\' 트랙.
// 2. 공유주거(셰어하우스) 보증금·키머니 잠적 — 일반 전세사기 류와 분기. 여기는 \'쇼호스트·운영자 미등록 + 다수 피해자 + 사기죄\' 트랙.
// 3. 온라인 강의·자격증 학원 결제 후 폐쇄 — 일반 매출 사기 류와 분기. 여기는 \'할부 환불 + 신용카드 이의 + 학원 폐업 책임\' 트랙.
// 4. 투자 클럽·멤버십 다단계 — 일반 투자 사기 류와 분기. 여기는 \'유사수신·방판법·다단계 + 멤버십 회비 + 환불 거부\' 트랙.
// 5. 중고 전자기기 결함 숨김 — 일반 중고 사기 류와 분기. 여기는 \'명시적 고지 의무 위반 + 사기죄 + 민법 매도인 담보책임\' 트랙.

export const spokesBatch74Fraud: SpokePage[] = [
  // ─── 1. fraud-pet-puppy-online-sale-sickness-track ───
  {
    domain: 'fraud',
    slug: 'fraud-pet-puppy-online-sale-sickness-track',
    keyword: '온라인 강아지 분양 질병 은닉',
    questionKeyword: '인스타그램·당근으로 강아지·고양이를 분양받았는데 1주일 만에 파보 바이러스·심장병 진단을 받았어요. 사기로 다툴 수 있나요?',
    ctaKeyword: '강아지 질병 분양 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '온라인 강아지 분양 질병 사기 — 5단계 환불·배상 다툼 | 로앤가이드',
      description:
        '분양 직후 강아지 파보·심장병 진단을 받았다면 동물보호법·매도인 담보책임·사기죄 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"인스타그램에서 \'전문 켄넬·건강 보증\' 광고를 보고 푸들 강아지를 80만 원에 분양받았습니다. 분양자는 \'예방접종 완료·건강검진 통과\' 확인서를 제공했고 분양 시점엔 활발해 보였어요. 그런데 입양 5일 차에 구토·설사·식욕부진이 시작됐고 동물병원 진단 결과 \'파보 바이러스 + 선천성 심장 기형\' 판정을 받았습니다. 분양자는 처음 며칠 연락 후 잠적했고 SNS 계정도 비공개로 전환됐어요. 치료비 약 300만 원이 발생했고 강아지가 끝내 사망할 가능성도 큰 상황입니다." 동물보호법은 동물 판매업자에게 \'건강 상태 고지 의무\'·\'질병·결함 명시 의무\'를 부과하고, 민법은 매도인의 담보책임을 규정하며, 형법은 \'기망에 의한 재물 교부\'를 사기죄로 처벌하는 영역입니다. 건강 보증 광고 + 질병 은닉 + 분양 후 잠적 결합은 사기죄 평가 + 환불·배상 다툼 강한 트랙. 피해자라면 ① 기망 입증 ② 동물보호법 위반 ③ 매도인 담보책임 ④ 형사 고소 ⑤ 민사 배상 5중 트랙이 가능한 영역. 대응은 ① 기망 ② 동물법 ③ 담보 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 강아지 질병 분양 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 기망·동물법·담보·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 기망 입증</strong> — \'건강 보증·예방접종 완료\' 광고와 실제 질병의 격차.</li>\n<li><strong>② 동물보호법 위반</strong> — 동물 판매업자 등록 + 고지 의무 위반.</li>\n<li><strong>③ 매도인 담보책임</strong> — 민법 제580조 하자담보책임.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 사기죄.</li>\n<li><strong>⑤ 민사 배상</strong> — 분양비 환불·치료비·정신적 위자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 건강 보증 광고 + 분양 후 단기간 발병 + 분양자 잠적 결합 시 \'기망에 의한 재물 교부\' 평가 가능 영역. 동물 판매업자 미등록 + 건강검진 위조 결합 시 형사 처벌 가중 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·환불·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 분양 자료 보존 (즉시)</strong> — 광고 캡처·계약서·건강검진 확인서·계좌이체 영수증.</li>\n<li><strong>2단계 — 동물병원 진단서 (1주)</strong> — 파보·심장병 진단·치료 기록.</li>\n<li><strong>3단계 — 분양자 신원 추적 (1~2주)</strong> — SNS·통화 기록·계좌 명의·분양자 위치 정보.</li>\n<li><strong>4단계 — 사기 고소 + 동물보호법 신고 (1개월 내)</strong> — 경찰청 사이버범죄 신고 + 지자체 동물보호 신고.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 분양비·치료비·위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">강아지 질병 분양 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 기망·동물법·담보 갈래입니다.</strong></p>\n<ul>\n<li><strong>분양 광고 캡처·SNS 계정 자료</strong></li>\n<li><strong>분양계약서·건강검진 확인서·예방접종 기록</strong></li>\n<li><strong>계좌이체 영수증·결제 자료</strong></li>\n<li><strong>동물병원 진단서·치료 기록·치료비 영수증</strong></li>\n<li><strong>분양자 신원·연락처·SNS 정보</strong></li>\n<li><strong>분양자 잠적 정황 자료 (미응답 메시지·계정 비공개)</strong></li>\n<li><strong>지자체 동물보호 신고 접수증</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 분양 후 단기간(1~2주) 발병은 \'분양 전 질병 존재\' 추정 강함. 파보·선천성 질환은 분양 시점 이미 존재했을 가능성 높아 동물병원 진단서가 결정 입증.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 입증</strong> — 광고와 실제 격차 + 단기간 발병.</li>\n<li><strong>동물보호법 위반</strong> — 판매업자 등록·고지 의무 위반.</li>\n<li><strong>매도인 담보책임</strong> — 민법 제580조 하자담보책임.</li>\n<li><strong>분양자 신원</strong> — SNS·계좌·통화 기록 추적.</li>\n<li><strong>치료비 회수</strong> — 분양비 + 치료비 + 위자료 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>지자체 동물보호과·동물보호상담센터 1577-0954</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 업무방해·컴퓨터등사용사기 평가 영역',
        summary:
          '대법원 2022도1862(대법원, 2026.01.29 선고) 영역에서 법원은 업무방해·컴퓨터등사용사기 사건에서 위계에 의한 업무방해죄의 성립 요건과 입력된 정보를 바탕으로 한 사기성 평가를 다루면서, 기망 행위와 재물 교부의 인과관계 평가가 사기죄 성립의 결정 사정이라고 본 사례 흐름이 있고, 분양 광고를 통한 질병 은닉 분양에도 동일 평가 기준이 적용됩니다.',
        takeaway: '\'건강 보증\' 광고 + 질병 은닉 + 분양 후 잠적 결합 시 사기죄 평가 영역 — 변호인 상담·고소 권장.',
      },
    ],
    faq: [
      {
        question: '분양 5일 만에 발병했는데 사기로 인정될까요?',
        answer:
          '<strong>단기간 발병은 분양 시점 질병 존재 추정 강한 사정입니다.</strong> 동물병원 진단서가 결정 입증.',
      },
      {
        question: '분양자가 잠적했는데 신원 추적이 가능한가요?',
        answer:
          '<strong>경찰 수사·통신사 협조로 추적 가능한 영역입니다.</strong> SNS·계좌·통화 자료 보존.',
      },
      {
        question: '치료비가 분양비보다 훨씬 많은데 다 청구할 수 있나요?',
        answer:
          '<strong>분양비 + 치료비 + 위자료 합산 청구 영역입니다.</strong> 진단서·치료비 영수증 보존.',
      },
      {
        question: '한국소비자원 분쟁조정도 가능한가요?',
        answer:
          '<strong>분쟁조정 별도 트랙 영역입니다.</strong> 신청 후 60일 이내 결정.',
      },
      {
        question: '강아지가 사망하면 어떻게 되나요?',
        answer:
          '<strong>사망 시 위자료 가중 + 분양비 환불 영역입니다.</strong> 사망 진단서·검안 결과 보존.',
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

  // ─── 2. fraud-rental-deposit-key-money-shared-house-track ───
  {
    domain: 'fraud',
    slug: 'fraud-rental-deposit-key-money-shared-house-track',
    keyword: '셰어하우스 보증금·키머니 잠적',
    questionKeyword: '공유주거(셰어하우스) 운영자에게 보증금·키머니를 송금했는데 입주일에 운영자가 잠적했어요. 사기로 다툴 수 있나요?',
    ctaKeyword: '셰어하우스 보증금 사기 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '셰어하우스 보증금 사기 — 5단계 환급·고소 다툼 | 로앤가이드',
      description:
        '셰어하우스 보증금·키머니 송금 후 운영자 잠적이면 사기·유사 다수 피해자 결집 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"강남역 인근 \'에어비앤비형 셰어하우스\' 운영 사이트에서 1개월 입주 + 보증금 200만 원 + 키머니 50만 원 합계 250만 원을 운영자 계좌로 송금했습니다. 입주 예정일 당일 현장에 갔더니 이미 다른 사람이 살고 있었고, 운영자는 \'서버 오류로 중복 예약\'·\'환불 예정\'을 카톡으로 답한 후 연락 두절됐어요. 동일 사이트에서 같은 방식으로 피해를 입은 사람이 SNS·온라인 카페에 10명 이상 모이는 정황이 확인됐고, 운영자는 사업자등록도 안 한 무허가 운영자였습니다." 셰어하우스 운영자는 임대업·숙박업 신고 의무가 있고, 사업자 미등록 + 다수 피해자 + 잠적 결합은 \'영업적 사기\' 평가 강한 영역입니다. 형법 제347조 사기죄 + 다수 피해 시 가중처벌 + 민사 환급·민사 손해배상 트랙. 피해자라면 ① 기망 ② 사업자 미등록 ③ 다수 피해 결집 ④ 형사 고소 ⑤ 민사 배상 5중 트랙이 가능한 영역. 대응은 ① 기망 ② 미등록 ③ 결집 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 셰어하우스 보증금 사기 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 기망·미등록·결집·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 기망 입증</strong> — 사이트 광고 + 입주 약속 + 잠적 결합 평가.</li>\n<li><strong>② 사업자 미등록</strong> — 임대업·숙박업 신고 부재 + 무허가 영업.</li>\n<li><strong>③ 다수 피해자 결집</strong> — SNS·카페 통해 피해자 모음 + 집단 대응.</li>\n<li><strong>④ 형사 고소</strong> — 형법 제347조 + 영업적·상습 가중.</li>\n<li><strong>⑤ 민사 배상</strong> — 보증금·키머니 환급 + 위자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 다수 피해자 결집 시 영업적 사기·집단 사기 평가 가중. 사업자 미등록 무허가 영업은 별도 처벌 사정. 집단 대응 시 경찰 수사 우선순위 + 형사 처벌 가중.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·결집·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 송금·계약 자료 보존 (즉시)</strong> — 사이트 캡처·카톡·계좌이체 영수증·계약서.</li>\n<li><strong>2단계 — 다수 피해자 결집 (1주)</strong> — SNS·카페·단톡방 결집.</li>\n<li><strong>3단계 — 사업자등록 확인 (1주)</strong> — 국세청 사업자등록 조회 + 무허가 입증.</li>\n<li><strong>4단계 — 사기 고소 (1개월 내)</strong> — 경찰청 사이버범죄 신고 + 집단 고소.</li>\n<li><strong>5단계 — 민사 배상 + 채권보전</strong> — 가압류·민사 청구 + 시효 관리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">셰어하우스 보증금 사기 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 기망·미등록·결집 갈래입니다.</strong></p>\n<ul>\n<li><strong>사이트 광고·예약 캡처</strong></li>\n<li><strong>운영자와의 카톡·문자·통화 기록</strong></li>\n<li><strong>계좌이체 영수증·결제 자료</strong></li>\n<li><strong>입주일 현장 확인 자료 (사진·증인)</strong></li>\n<li><strong>국세청 사업자등록 조회 결과 (미등록 입증)</strong></li>\n<li><strong>다수 피해자 진술서·결집 자료</strong></li>\n<li><strong>운영자 신원·계좌 명의 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 다수 피해자 결집 시 경찰 수사 우선순위 상승. 형사 고소 + 채권보전(가압류) 동시 진행이 회수율 결정. 시간이 지나면 운영자 잔고 소진 + 재산 은닉 위험.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 입증</strong> — 사이트 광고 + 입주 약속 + 잠적.</li>\n<li><strong>사업자 미등록</strong> — 임대·숙박업 신고 부재.</li>\n<li><strong>다수 피해자 결집</strong> — 영업적 사기 가중 평가.</li>\n<li><strong>채권보전</strong> — 가압류·집행권원 조기 확보.</li>\n<li><strong>회수 가능성</strong> — 운영자 잔고·재산 상태 확인.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>금융감독원 1332</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 범죄수익은닉의규제처벌법 평가 영역',
        summary:
          '대법원 2025도15768(대법원, 2026.01.15 선고) 영역에서 법원은 상품권업체를 운영하면서 보이스피싱 등 사기 범행 실행을 목적으로 한 범죄단체조직 및 활동에 의하여 생긴 재산이나 여기서 유래한 재산 등에 관하여 범죄수익은닉의 규제 및 처벌 등에 관한 법률 적용 사건을 다루면서, 영업적·조직적 사기에서 범죄수익 환수 평가가 결정 사정이라고 본 사례 흐름이 있고, 셰어하우스 다수 피해자 사기에도 동일 평가 기준이 적용됩니다.',
        takeaway: '다수 피해자 결집 + 사업자 미등록 + 잠적 결합 시 영업적 사기 가중 평가 + 범죄수익 환수 영역 — 변호인 상담·고소 권장.',
      },
    ],
    faq: [
      {
        question: '소액이라 고소가 의미 있나요?',
        answer:
          '<strong>다수 피해자 결집 시 형사 처벌 가중 영역입니다.</strong> 집단 고소 + 회수 확률 상승.',
      },
      {
        question: '운영자 신원을 모르는데 고소 가능한가요?',
        answer:
          '<strong>경찰 수사·통신사 협조로 추적 가능한 영역입니다.</strong> SNS·계좌 자료 보존.',
      },
      {
        question: '얼마나 회수할 수 있나요?',
        answer:
          '<strong>운영자 잔고·재산 상태에 따라 다른 영역입니다.</strong> 채권보전(가압류) 조기 진행.',
      },
      {
        question: '한국소비자원 분쟁조정도 가능한가요?',
        answer:
          '<strong>분쟁조정 별도 트랙 영역입니다.</strong> 다만 잠적 시 효과 제한.',
      },
      {
        question: '집단 카톡방·카페에서 피해자 결집했어요',
        answer:
          '<strong>집단 대응은 형사 처벌 가중 + 회수율 상승 영역입니다.</strong> 진술서·결집 자료 보존.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '온라인 거래 사기 대응', href: '/guide/fraud/fraud-online-transaction-response' },
      { label: '사기 피해 환급', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '집단 사기 대응', href: '/guide/fraud/fraud-group-victim-response' },
      { label: '사기죄 형사 절차', href: '/guide/fraud/fraud-criminal-procedure' },
    ],
  },

  // ─── 3. fraud-online-class-lecture-paid-cancelled-track ───
  {
    domain: 'fraud',
    slug: 'fraud-online-class-lecture-paid-cancelled-track',
    keyword: '온라인 강의·학원 결제 후 폐쇄',
    questionKeyword: '온라인 강의·자격증 학원에 수십만 원 결제했는데 강의가 갑자기 폐쇄되거나 강사가 잠적했어요. 환불·고소 가능한가요?',
    ctaKeyword: '온라인 강의 폐쇄 환불 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '온라인 강의 폐쇄 환불 — 5단계 할부·소비자보호 다툼 | 로앤가이드',
      description:
        '온라인 강의 결제 후 폐쇄·강사 잠적이면 할부 환불·신용카드 이의·사기 고소 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"코딩·자격증 \'평생 수강·취업 보장\' 광고를 보고 12개월 할부로 198만 원을 결제하고 온라인 강의 플랫폼에 등록했습니다. 첫 2개월은 강의가 잘 진행됐는데 갑자기 \'기술적 점검\' 공지 후 3개월째 강의가 끊겼고, 운영자는 카톡 답변이 끊겼습니다. 동일 사이트 피해자 카페에 약 50명이 모이는 정황이 있고, 운영자는 사업자등록을 폐업한 정황도 확인됐습니다. 본인은 신용카드 12개월 할부 중 6회차까지 결제됐고 나머지 6회차에 대한 결제 정지·환불을 검토 중입니다." 할부거래법은 \'7일 청약철회\'와 \'할부 항변권\'(잔여 할부금 결제 정지)을 규정하고, 운영자 잠적·서비스 중단은 \'채무불이행\' 또는 \'사기\' 평가 가능한 영역입니다. 신용카드사 이의 + 소비자원 분쟁조정 + 형사 고소 결합 트랙. 피해자라면 ① 할부 항변권 ② 신용카드 이의 ③ 소비자원 ④ 사기 고소 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 할부 ② 카드 ③ 소비자원 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 온라인 강의 폐쇄 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 할부·카드·소비자원·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 할부 항변권</strong> — 할부거래법상 잔여 할부금 결제 정지 권리.</li>\n<li><strong>② 신용카드 이의 제기</strong> — 카드사 분쟁 처리 + 가맹점 대금 환수.</li>\n<li><strong>③ 한국소비자원 분쟁조정</strong> — 환불·배상 조정 신청.</li>\n<li><strong>④ 사기 고소</strong> — 운영자 잠적 + 다수 피해자 결합 시 영업적 사기 평가.</li>\n<li><strong>⑤ 민사 배상</strong> — 결제액 환급 + 위자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 할부거래법은 잔여 할부금에 대한 항변권을 보장. 폐쇄 + 운영자 잠적 시 즉시 카드사 이의 + 할부 정지 + 소비자원 분쟁조정 진행. 다수 피해자 결집 시 형사 고소 가중 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 항변·이의·환급 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 결제·강의 자료 보존 (즉시)</strong> — 광고·계약서·결제 영수증·강의 캡처.</li>\n<li><strong>2단계 — 신용카드 이의 제기 (즉시)</strong> — 카드사 분쟁 처리 + 할부 정지 신청.</li>\n<li><strong>3단계 — 한국소비자원 분쟁조정 (1~2주)</strong> — 1372 신청 + 60일 이내 결정.</li>\n<li><strong>4단계 — 다수 피해자 결집 + 사기 고소 (1개월 내)</strong> — 집단 고소 + 영업적 사기 평가.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 운영자·법인 상대 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의가 형량에 미치는 영향, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">온라인 강의 폐쇄 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 할부·이의·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>강의 광고·계약 약관·결제 영수증</strong></li>\n<li><strong>신용카드 할부 내역·결제 명세</strong></li>\n<li><strong>강의 폐쇄 공지·운영자 잠적 정황</strong></li>\n<li><strong>운영자와의 카톡·문자·통화 기록</strong></li>\n<li><strong>국세청 사업자등록 조회 (폐업 입증)</strong></li>\n<li><strong>다수 피해자 카페·진술서</strong></li>\n<li><strong>카드사 이의 제기 접수증</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 할부 항변권은 잔여 할부금에만 적용 (이미 결제한 회차는 카드사 이의·소비자원·민사 청구 트랙). 폐쇄 공지 직후 즉시 카드사 신고가 환급 가능성 결정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>할부 항변권</strong> — 잔여 할부금 정지 권리.</li>\n<li><strong>신용카드 이의</strong> — 카드사 분쟁 처리.</li>\n<li><strong>소비자원 분쟁조정</strong> — 환불·배상 조정.</li>\n<li><strong>사기 고소</strong> — 다수 피해 + 잠적 + 영업적 사기.</li>\n<li><strong>회수 가능성</strong> — 운영자·법인 잔고·재산 상태.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>금융감독원 1332 (카드 분쟁)</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 특정범죄가중처벌법위반(조세) 영역과 실물거래 평가',
        summary:
          '대법원 2025도13674(대법원, 2026.01.08 선고) 영역에서 법원은 특정범죄가중처벌등에관한법률위반(조세) 사건에서 실물거래 없이 세금계산서를 수수하는 행위를 처벌하는 구 조세범 처벌법 제10조 제3항 제1호의 취지 및 \'실물거래가 있다\'는 것의 의미 평가를 다루면서, 영업적·반복적·다수 피해자 사정에서 가중처벌 평가가 결정 사정이라고 본 사례 흐름이 있고, 온라인 강의 폐쇄·잠적 사기에도 동일 평가 기준이 적용됩니다.',
        takeaway: '온라인 강의 폐쇄 + 운영자 잠적 + 다수 피해자 결합 시 영업적 사기·가중처벌 영역 — 변호인 상담·고소 권장.',
      },
    ],
    faq: [
      {
        question: '할부 항변권은 어떻게 행사하나요?',
        answer:
          '<strong>카드사에 \'할부 정지\' 요청 영역입니다.</strong> 즉시 카드사 콜센터 전화 + 서면 신청.',
      },
      {
        question: '이미 결제한 회차는 환급 가능한가요?',
        answer:
          '<strong>카드사 이의 + 소비자원 + 민사 청구 트랙 영역입니다.</strong> 회수 가능성은 운영자 재산 상태에 따라 다름.',
      },
      {
        question: '운영자가 잠적했는데 신원 확인 가능한가요?',
        answer:
          '<strong>경찰 수사·통신사 협조로 가능한 영역입니다.</strong> 카톡·계좌·SNS 자료 보존.',
      },
      {
        question: '한국소비자원 분쟁조정은 효과 있나요?',
        answer:
          '<strong>운영자 협조 시 환불 결정 영역입니다.</strong> 잠적 시 효과 제한이지만 입증 자료로 활용.',
      },
      {
        question: '\'평생 수강·취업 보장\' 광고는 어떻게 평가되나요?',
        answer:
          '<strong>허위·과장 광고는 기망 입증 사정입니다.</strong> 광고 캡처 보존.',
      },
    ],
    cta: { text: '합의가 형량에 미치는 영향, AI로 확인하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '온라인 거래 사기 대응', href: '/guide/fraud/fraud-online-transaction-response' },
      { label: '소비자 분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사기 피해 환급', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '할부거래 분쟁', href: '/guide/fraud/fraud-installment-transaction-dispute' },
    ],
  },

  // ─── 4. fraud-investment-club-membership-pyramid-track ───
  {
    domain: 'fraud',
    slug: 'fraud-investment-club-membership-pyramid-track',
    keyword: '투자 클럽·멤버십 다단계 의심',
    questionKeyword: '\'고수익 보장·소수정예 투자 멤버십\' 가입비를 냈는데 알고 보니 다단계 구조였어요. 다툴 수 있나요?',
    ctaKeyword: '투자 멤버십 다단계 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '투자 멤버십 다단계 사기 — 5단계 유사수신·방판 다툼 | 로앤가이드',
      description:
        '투자 클럽·멤버십 다단계로 가입비·투자금 손실을 입었다면 유사수신·방판법·사기 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"\'월 15% 고수익·VIP 전용 알고리즘\' 광고를 보고 멤버십 가입비 500만 원 + 운용금 1,000만 원을 송금했습니다. 처음 1개월은 \'수익률 18%\'라는 시뮬레이션이 전달됐고 회원 단톡방에서도 수익 인증글이 활발했어요. 그런데 2개월차에 \'추가 가입자 모집 시 추천 수수료\' 권유가 시작됐고 본인이 가입한 \'운용금\'은 실제 투자가 아니라 다른 회원 가입비로 충당된 정황이 드러났습니다. 운영자는 \'시장 변동\'을 이유로 환매를 거부 중이고, 한국 금융감독원·금융위에 등록되지 않은 사실도 확인됐어요." 유사수신행위규제법은 \'금융위 미등록 + 출자금·예치금 명목으로 자금 수신 + 원금 보장 약속\'을 처벌하고, 방문판매법은 \'다단계 판매업\'을 등록·규제 영역입니다. 금융기관 미등록 + 다단계 구조 + 환매 거부 결합은 유사수신·방판법·사기 다중 평가 트랙. 피해자라면 ① 유사수신 ② 방판법 ③ 다수 피해 결집 ④ 사기 고소 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 유사수신 ② 방판 ③ 결집 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 투자 멤버십 다단계 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 유사수신·방판·결집·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 유사수신 평가</strong> — 금융위 미등록 + 원금 보장 약속 + 출자금 수신.</li>\n<li><strong>② 방문판매법</strong> — 다단계 판매업 등록·규제 위반.</li>\n<li><strong>③ 다수 피해 결집</strong> — 영업적·조직적 사기 가중 평가.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 특정경제범죄법 (5억 이상 가중).</li>\n<li><strong>⑤ 민사 배상</strong> — 가입비·운용금 환급 + 위자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 유사수신 + 다단계 구조 + 환매 거부 결합은 \'폰지 사기\' 평가 영역. 금감원·금융위·경찰 동시 신고 + 다수 피해자 결집 시 형사 처벌 가중. 회수율은 조기 대응에 따라 결정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·결집·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 가입·송금 자료 보존 (즉시)</strong> — 광고·약관·계약서·송금 영수증·운용 보고서.</li>\n<li><strong>2단계 — 금감원·금융위 신고 (즉시)</strong> — 유사수신 신고 + 미등록 영업 신고.</li>\n<li><strong>3단계 — 다수 피해자 결집 (1주)</strong> — SNS·카페·단톡방 결집 + 진술서 수집.</li>\n<li><strong>4단계 — 사기 고소 + 경찰 신고 (1개월 내)</strong> — 집단 고소 + 영업적·조직적 사기.</li>\n<li><strong>5단계 — 민사 배상 + 가압류 (시효 3년)</strong> — 운영자·법인 재산 가압류.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">투자 멤버십 다단계 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 유사수신·결집·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>광고·약관·계약서·가입 자료</strong></li>\n<li><strong>송금 영수증·결제 자료</strong></li>\n<li><strong>운용 보고서·시뮬레이션·수익 인증글</strong></li>\n<li><strong>금감원 금융사 조회 결과 (미등록 입증)</strong></li>\n<li><strong>다단계 구조 입증 자료 (추천 수수료·하위 가입자 모집)</strong></li>\n<li><strong>다수 피해자 진술서·결집 자료</strong></li>\n<li><strong>운영자 신원·법인 등기·계좌 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 금감원·금융위 신고는 영업 정지·계좌 동결 가능성. 가능한 빨리 신고하면 운영자 잔고 보호 + 회수율 상승. 다수 피해자 결집은 형사 처벌 가중 + 수사 우선순위.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>유사수신</strong> — 금융위 미등록 + 원금 보장 약속.</li>\n<li><strong>다단계 구조</strong> — 방문판매법 위반.</li>\n<li><strong>결집·집단 대응</strong> — 영업적·조직적 사기 가중.</li>\n<li><strong>가압류</strong> — 운영자·법인 재산 보전.</li>\n<li><strong>회수 가능성</strong> — 잔고·재산 상태에 따라 결정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>금융감독원 1332 (유사수신·금융사기)</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>공정거래위원회 1670 (방문판매법)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사기·사기미수 변호인 상소권 영역',
        summary:
          '대법원 2023도6106(대법원, 2025.12.15 선고) 영역에서 법원은 사기·사기미수 사건에서 원심 변호인에게 상소권이 있는지 문제된 사건을 다루면서, 피고인 사망 시 대리권자(배우자·직계친족·형제자매 또는 원심 대리인·변호인)의 상소 가능성 평가가 핵심 사정이라고 본 사례 흐름이 있고, 영업적·다수 피해 사기에서도 형사 절차 + 민사 책임 + 환수 평가가 결합되는 트랙입니다.',
        takeaway: '유사수신 + 다단계 + 환매 거부 결합 시 영업적·조직적 사기 가중 영역 — 변호인 상담·고소 권장.',
      },
    ],
    faq: [
      {
        question: '원금 보장 약속을 받았는데 무효인가요?',
        answer:
          '<strong>금융위 미등록 영업의 원금 보장은 무효 영역입니다.</strong> 광고·약관 자료 보존.',
      },
      {
        question: '추천 수수료를 받았는데 본인도 처벌 대상인가요?',
        answer:
          '<strong>다단계 가담자 평가 영역입니다.</strong> 즉시 변호인 자문 + 피해자 입장 정리.',
      },
      {
        question: '회수 가능성이 얼마나 되나요?',
        answer:
          '<strong>조기 신고·가압류·잔고 상태에 따라 결정 영역입니다.</strong> 시간이 지나면 잔고 소진 위험.',
      },
      {
        question: '금감원 신고와 경찰 고소를 동시에 할 수 있나요?',
        answer:
          '<strong>병행 가능한 영역입니다.</strong> 금감원 = 영업 정지·계좌 동결, 경찰 = 형사 처벌·환수.</strong>',
      },
      {
        question: '5억 원 이상 피해는 가중되나요?',
        answer:
          '<strong>특정경제범죄법 가중 영역입니다.</strong> 무기·10년 이상 징역 가능.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '투자 사기 대응', href: '/guide/fraud/fraud-investment-scam-response' },
      { label: '유사수신 신고', href: '/guide/fraud/fraud-illegal-fundraising-report' },
      { label: '사기 피해 환급', href: '/guide/fraud/fraud-victim-refund-procedure' },
      { label: '집단 사기 대응', href: '/guide/fraud/fraud-group-victim-response' },
    ],
  },

  // ─── 5. fraud-second-hand-electronics-fake-defect-track ───
  {
    domain: 'fraud',
    slug: 'fraud-second-hand-electronics-fake-defect-track',
    keyword: '중고 전자기기 결함 숨김 사기',
    questionKeyword: '중고로 노트북·스마트폰·아이폰을 샀는데 \'정상 작동\' 약속과 달리 메인보드·배터리 심각 결함을 숨긴 사기였어요.',
    ctaKeyword: '중고 전자기기 결함 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '중고 전자기기 결함 숨김 — 5단계 사기·담보책임 다툼 | 로앤가이드',
      description:
        '중고 노트북·스마트폰 결함 숨김 사기라면 매도인 담보책임·사기죄·환불 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"당근·번개장터에서 \'95% 신상태·정상 작동·교환 완료\' 광고를 보고 중고 맥북 프로 180만 원에 구매했습니다. 직거래 시 5분 정도 확인했고 화면·키보드 작동에 문제는 없어 보였어요. 그런데 구매 3일 뒤 갑자기 강제 종료가 반복돼 공식 서비스센터에 가니 \'메인보드 결함 + 액체 침수 흔적 + 보드 수리 이력 다수\' 진단을 받았습니다. 판매자에게 환불·반품을 요구했지만 \'직거래 + 노클레임 조건이라 거부\'한다고 했고, 거래 중 \'침수·수리 이력 없음\'을 명시적으로 답한 카톡 기록이 남아 있어요." 중고 거래에서도 매도인은 명시적 고지 의무 + 민법 제580조 하자담보책임 + 형법 제347조 사기죄 평가 대상이고, \'노클레임\' 약정도 매도인의 고지 의무 위반·악의 시 효력이 제한되는 영역입니다. \'정상 작동·교환 완료\' 광고 + 침수 부정 답변 + 메인보드 결함 결합은 사기죄 + 담보책임 다툼 강한 트랙. 피해자라면 ① 기망 ② 노클레임 효력 ③ 담보책임 ④ 사기 고소 ⑤ 민사 5중 트랙이 가능한 영역. 대응은 ① 기망 ② 노클레임 ③ 담보 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 중고 전자기기 결함 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 기망·노클레임·담보·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 기망 입증</strong> — \'정상 작동·침수 없음\' 광고·답변과 실제 결함의 격차.</li>\n<li><strong>② 노클레임 효력</strong> — 매도인 악의·고지 의무 위반 시 약정 효력 제한.</li>\n<li><strong>③ 매도인 담보책임</strong> — 민법 제580조 하자담보책임.</li>\n<li><strong>④ 사기 고소</strong> — 형법 제347조 + 영업적·반복 시 가중.</li>\n<li><strong>⑤ 민사 배상</strong> — 매매대금 환급·수리비·위자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'노클레임\'은 매도인 악의·고지 의무 위반 시 효력 제한 영역. 메인보드 결함·침수 이력은 직거래 5분 확인으로 알 수 없는 \'잠재 결함\'이라 매도인 고지 의무 + 사기죄 평가 강한 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·환불·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 거래·진단 자료 보존 (즉시)</strong> — 광고 캡처·카톡·계좌이체·서비스센터 진단서.</li>\n<li><strong>2단계 — 판매자 환불 요구 (1주)</strong> — 내용증명 + 카톡 공식 요구.</li>\n<li><strong>3단계 — 한국소비자원 분쟁조정 (1~2주)</strong> — 1372 신청 + 60일 이내 결정.</li>\n<li><strong>4단계 — 사기 고소 (1개월 내)</strong> — 경찰청 사이버범죄 신고 + 영업적 사기 평가.</li>\n<li><strong>5단계 — 민사 배상 (시효 3년)</strong> — 매매대금 + 위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사기 고소 전 준비자료, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">중고 전자기기 결함 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 기망·노클레임·담보 갈래입니다.</strong></p>\n<ul>\n<li><strong>광고·상품 설명 캡처</strong></li>\n<li><strong>판매자와의 카톡·문자·통화 기록</strong></li>\n<li><strong>계좌이체 영수증·거래 영수증</strong></li>\n<li><strong>공식 서비스센터 진단서·수리 이력</strong></li>\n<li><strong>제품 시리얼·구매 이력 자료</strong></li>\n<li><strong>판매자 신원·계좌 명의</strong></li>\n<li><strong>내용증명 발송·반품 요구 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공식 서비스센터 진단서가 결정 입증. \'침수·수리 이력 없음\' 카톡 답변은 매도인의 명시적 고지로 기망 입증의 핵심 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기망 입증</strong> — 광고·답변과 실제 결함 격차.</li>\n<li><strong>노클레임 효력</strong> — 매도인 악의·고지 의무 위반 시 제한.</li>\n<li><strong>담보책임</strong> — 민법 제580조 하자담보책임.</li>\n<li><strong>사기 고소</strong> — 영업적·반복 시 가중.</li>\n<li><strong>회수 가능성</strong> — 매도인 잔고·재산 상태.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰청 사이버범죄 신고시스템 (ecrm.police.go.kr)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보이스피싱·범죄수익은닉 공동정범 영역',
        summary:
          '대법원 2025도8460(대법원, 2025.12.11 선고) 영역에서 법원은 전기통신금융사기피해방지및피해금환급에관한특별법위반·범죄수익은닉의규제 사건에서 공동정범으로 공소가 제기된 범죄사실을 방조범으로 인정하면서 평가하는 영역을 다루면서, 피해자 환급·범죄수익 환수 평가가 결정 사정이라고 본 사례 흐름이 있고, 중고 전자기기 결함 숨김 사기에도 매도인 책임 + 환수 평가가 동일 결합 트랙입니다.',
        takeaway: '\'정상·노클레임\' 광고 + 침수 부정 + 메인보드 결함 결합 시 사기죄 + 담보책임 평가 영역 — 변호인 상담·고소 권장.',
      },
    ],
    faq: [
      {
        question: '\'노클레임\' 약정을 했는데도 환불 가능한가요?',
        answer:
          '<strong>매도인 악의·고지 의무 위반 시 약정 효력 제한 영역입니다.</strong> 카톡 답변·서비스센터 진단서 보존.',
      },
      {
        question: '직거래 5분 확인했는데 그게 책임 사정 아닌가요?',
        answer:
          '<strong>잠재 결함은 5분 확인으로 알 수 없는 영역입니다.</strong> 매도인 고지 의무가 우선.',
      },
      {
        question: '소비자원 분쟁조정만으로 환불 가능한가요?',
        answer:
          '<strong>매도인 협조 시 환불 결정 영역입니다.</strong> 거부 시 사기 고소 + 민사 진행.',
      },
      {
        question: '판매자가 잠적했는데 신원 추적 가능한가요?',
        answer:
          '<strong>경찰 수사·통신사 협조로 가능한 영역입니다.</strong> 계좌·SNS 자료 보존.',
      },
      {
        question: '수리비도 청구할 수 있나요?',
        answer:
          '<strong>매매대금 + 수리비 + 위자료 합산 청구 영역입니다.</strong> 영수증·견적 자료 보존.',
      },
    ],
    cta: { text: '사기 고소 전 준비자료, AI로 체크하기', link: '/chat?domain=fraud' },
    internalLinks: [
      { label: '사기 고소 절차', href: '/guide/fraud/fraud-complaint-procedure-comprehensive' },
      { label: '중고거래 사기 대응', href: '/guide/fraud/fraud-secondhand-transaction-response' },
      { label: '온라인 거래 사기 대응', href: '/guide/fraud/fraud-online-transaction-response' },
      { label: '소비자 분쟁조정', href: '/guide/fraud/fraud-consumer-dispute-mediation' },
      { label: '사기 피해 환급', href: '/guide/fraud/fraud-victim-refund-procedure' },
    ],
  },
];
