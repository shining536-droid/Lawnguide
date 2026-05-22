import { SpokePage } from '../spoke-pages';

// batch74 traffic-accident — 5개 (2026-05-22)
//
// 고유 존재 이유:
// 1. 공유 전동킥보드(PMD) 사고 — 일반 자전거·이륜차 류와 분기. 여기는 \'대여업체 약관 + 이용자 책임 + 보험 적용 한계 + 도로교통법 PMD 규정\' 트랙.
// 2. 어린이 통학버스 승객 부상 — 일반 버스 사고 류와 분기. 여기는 \'도로교통법 제53조 통학버스 + 동승보호자 + 안전운행 의무 + 영유아 위자료\' 트랙.
// 3. 공사장 트럭 적재물 낙하 사고 — 일반 화물차 사고 류와 분기. 여기는 \'도로법 + 화물 결박 의무 + 적재량 초과 + 공사장 진입로 책임\' 트랙.
// 4. 운전자 실신·뇌졸중 사고 — 일반 졸음운전 류와 분기. 여기는 \'사고 직전 의식 상실 + 운전자 과실 평가 + 자손 + 무과실 다툼\' 트랙.
// 5. 폭설·빙판 다중추돌 — 일반 추돌 류와 분기. 여기는 \'자손사고 + 자배법 + 도로관리청 책임 + 동시 다발 과실 비율\' 트랙.

export const spokesBatch74Traffic: SpokePage[] = [
  // ─── 1. traffic-accident-electric-scooter-pmd-shared-rental-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-electric-scooter-pmd-shared-rental-track',
    keyword: '공유 전동킥보드 PMD 사고 책임',
    questionKeyword: '공유 전동킥보드를 빌려 타다가 사고가 났는데 대여업체·이용자·상대 차량 누구 책임이고 보험은 적용되나요?',
    ctaKeyword: '공유 킥보드 사고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '공유 전동킥보드 PMD 사고 — 5단계 책임·보험 다툼 | 로앤가이드',
      description:
        '공유 전동킥보드(PMD) 사고 시 대여업체·이용자·상대 차량 책임 + 보험 한계 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"강남역 근처에서 공유 전동킥보드 앱으로 PMD(Personal Mobility Device)를 빌려 약 1km 이동 중 차도 우측에서 인도로 진입하다 보행자와 접촉했고, 직후 뒤따르던 승용차에도 부딪혔습니다. 본인은 헬멧을 착용했고 면허(원동기장치자전거 면허) 보유 상태였지만, 대여업체 약관엔 \'사고 시 이용자 본인 책임\' 조항이 있었고 별도 보험은 \'대인 1억·대물 1천만 원 한도\'였어요. 보행자는 발목 골절·승용차 운전자는 범퍼 손상을 호소하고, 본인도 손목 부상·치과 치료가 필요한 상태입니다." 도로교통법은 PMD를 \'개인형 이동장치\'로 규정해 ① 인도 통행 금지 ② 차도 우측 통행 ③ 헬멧 착용 ④ 16세 이상 면허 의무를 부과하고, 사고 시 자동차손해배상보장법·도로교통법·민법 종합 평가 영역입니다. 대여업체·이용자·상대 차량의 과실 분배 + 보험 한도 + 자기부담금 결합 트랙. 피해자/가해자 양면이면 ① 과실 분배 ② 보험 한도 ③ 자기부담 ④ 형사 합의 ⑤ 민사 손해배상 5중 트랙이 가능한 영역. 대응은 ① 과실 ② 보험 ③ 자부담 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 공유 전동킥보드 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 과실·보험·자부담·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 과실 분배</strong> — 보행자·이용자·상대 차량의 도로교통법 위반 평가.</li>\n<li><strong>② 보험 한도</strong> — 대여업체 보험 한도 + 자동차보험 결합.</li>\n<li><strong>③ 자기부담금</strong> — 대여업체 약관상 이용자 부담 범위.</li>\n<li><strong>④ 형사 합의</strong> — 보행자 부상 시 교통사고처리특례법 평가.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 치료비·위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: PMD 사고는 \'자동차\' 평가 + \'개인형 이동장치\' 평가 결합 영역. 인도 통행·헬멧·면허·음주는 도로교통법 처벌 사정. 대여업체 보험은 \'대인 1억·대물 1천\' 정도가 통상으로 한도 초과분은 이용자 부담.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·보험·합의 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경찰 신고·블랙박스 보존 (즉시)</strong> — 112 신고·CCTV·블랙박스·목격자 진술.</li>\n<li><strong>2단계 — 대여업체 신고·보험 청구 (24시간 내)</strong> — 앱 내 사고 신고 + 보험사 접수.</li>\n<li><strong>3단계 — 의료기관 진료·진단서 (1주)</strong> — 본인·상대 부상 진단서 + 치료비 영수증.</li>\n<li><strong>4단계 — 합의·형사 절차 (1~3개월)</strong> — 보행자 부상 시 형사 합의 + 12대 중과실 확인.</li>\n<li><strong>5단계 — 민사 손해배상 (시효 3년)</strong> — 보험 한도 초과분 + 위자료 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">공유 전동킥보드 사고 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·보험·합의 갈래입니다.</strong></p>\n<ul>\n<li><strong>대여 영수증·앱 로그·이용 시간 기록</strong></li>\n<li><strong>경찰 사건사고사실확인원·교통사고 사실 확인서</strong></li>\n<li><strong>블랙박스·CCTV·목격자 진술</strong></li>\n<li><strong>본인·상대 진단서·치료비 영수증</strong></li>\n<li><strong>대여업체 약관·보험 약관</strong></li>\n<li><strong>면허증·헬멧 착용 정황 자료</strong></li>\n<li><strong>합의서·합의금 협의 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: PMD는 자동차보험으로 안 되고 대여업체 PMD 전용 보험만 적용. 한도 초과분은 이용자 본인 부담이라 본인 일상생활배상책임 보험 가입 여부도 확인.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>인도 통행 vs 차도 통행</strong> — 도로교통법 위반 가중 사정.</li>\n<li><strong>헬멧·면허·음주</strong> — 도로교통법 처벌 + 보험 면책 사정.</li>\n<li><strong>대여업체 보험 한도</strong> — 한도 초과분 본인 부담.</li>\n<li><strong>12대 중과실 평가</strong> — 보행자 부상 시 형사 합의 영향.</li>\n<li><strong>민사 손해배상</strong> — 위자료·일실수입 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>금융감독원 1332 (보험 분쟁)</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰 112</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 자동차 보험금 통지의무 위반 영역',
        summary:
          '대법원 2024다289680(대법원, 2025.08.14 선고) 영역에서 법원은 보험약관에서 상법 제652조 제1항의 통지의무를 구체화하여 \'보험기간 중에 이륜자동차 또는 원동기장치자전거를 계속적으로 사용하게 된 경우에 지체 없이 보험회사에 알릴 것\'을 정한 사건을 다루면서, 보험 적용 범위·통지의무 평가가 사고 시 보상 가능성에 직접 영향을 미친다고 본 사례 흐름이 있고, PMD 사고에서도 보험 약관·통지의무 평가가 핵심 사정입니다.',
        takeaway: 'PMD = 원동기장치자전거 영역. 대여업체·자동차 보험·통지의무 종합 평가 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '대여업체 보험만으로 충분한가요?',
        answer:
          '<strong>한도(대인 1억·대물 1천 통상) 초과 시 이용자 부담 영역입니다.</strong> 본인 배상책임 보험 가입 여부 확인.',
      },
      {
        question: '인도에서 사고가 났는데 가중되나요?',
        answer:
          '<strong>도로교통법 위반 가중 사정 영역입니다.</strong> 차도 우측 통행 의무 위반.',
      },
      {
        question: '헬멧 안 쓴 게 보험에 영향이 있나요?',
        answer:
          '<strong>약관상 면책·감액 사정 영역입니다.</strong> 대여업체 약관 확인 결정.',
      },
      {
        question: '보행자가 형사 고소한다고 해요',
        answer:
          '<strong>인사상 합의 + 12대 중과실 평가 영역입니다.</strong> 즉시 합의 협의 + 변호인 자문.',
      },
      {
        question: '제 부상도 클레임 가능한가요?',
        answer:
          '<strong>본인 보험·상대 보험·자동차보험 종합 청구 영역입니다.</strong> 본인 일상생활배상책임·상해보험 확인.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의금 산정', href: '/guide/traffic-accident/settlement-amount-calculation' },
      { label: '12대 중과실 평가', href: '/guide/traffic-accident/traffic-accident-12-serious-faults' },
      { label: '보험금 청구 절차', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '교통사고 위자료', href: '/guide/traffic-accident/traffic-accident-emotional-damages' },
      { label: '교통사고 형사 합의', href: '/guide/traffic-accident/traffic-accident-criminal-settlement' },
    ],
  },

  // ─── 2. traffic-accident-school-bus-child-passenger-injury-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-school-bus-child-passenger-injury-track',
    keyword: '어린이 통학버스 승객 부상',
    questionKeyword: '유치원·학원 통학버스를 탄 아이가 차내 급정거·문 끼임 사고로 다쳤어요. 학원·운전자·동승보호자 책임은 어떻게 되나요?',
    ctaKeyword: '통학버스 어린이 부상 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '어린이 통학버스 승객 부상 — 5단계 책임·보상 다툼 | 로앤가이드',
      description:
        '통학버스 차내 사고로 아이가 다쳤다면 도로교통법 제53조 + 동승보호자·학원 책임 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"6세 자녀가 유치원 통학버스 등원 중 운전자의 급정거로 좌석에서 떨어져 머리·팔 부상을 입었습니다. 통학버스엔 동승보호자가 1명 있어야 하지만 사고 당일은 \'급하게 결원\'으로 부재였고, 안전벨트 미체결·좌석 보조장치 부재 정황이 있었어요. 운전자는 \'앞 차량이 갑자기 끼어들어 어쩔 수 없었다\'고 했지만 블랙박스 확인 결과 과속·차간거리 부족이 의심됩니다. 유치원·운전자·보험사는 \'합의금 200만 원 + 치료비 보험 처리\'를 제시했고, 본인은 아이의 정신적 충격·후유증 추가 청구를 검토 중입니다." 도로교통법 제53조는 \'어린이 통학버스 운영자의 안전운행 의무\'를 명시하고, ① 보호자 동승 ② 모든 좌석 안전벨트 ③ 승차 보조장치 + 운영자 + 운전자의 주의의무 가중 영역입니다. 동승보호자 부재 + 안전벨트 미체결은 운영자·운전자의 안전운행 의무 위반 평가 강한 사정. 피해자라면 ① 안전운행 위반 ② 동승보호자 ③ 자배법 보상 ④ 형사 합의 ⑤ 민사 손해배상 5중 트랙이 가능한 영역. 대응은 ① 위반 ② 보호자 ③ 자배법 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 어린이 통학버스 부상 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 위반·보호자·자배법·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 안전운행 의무 위반</strong> — 도로교통법 제53조 가중 평가.</li>\n<li><strong>② 동승보호자 부재</strong> — 운영자의 보호자 동승 의무 위반.</li>\n<li><strong>③ 자배법 보상</strong> — 자동차손해배상보장법 + 책임보험 + 종합보험.</li>\n<li><strong>④ 형사 합의</strong> — 어린이 보호 영역 + 12대 중과실 평가.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 치료비·위자료·정신적 충격·후유증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 어린이 통학버스는 도로교통법 제53조에 따라 운영자·운전자 주의의무 가중 영역. 동승보호자 부재 + 안전벨트 미체결 결합 시 안전운행 의무 위반 + 형사 책임 가중 트랙. 영유아 위자료 산정은 일반 성인과 다른 기준 적용.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·보험·합의 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경찰 신고·블랙박스 보존 (즉시)</strong> — 112 신고·통학버스 블랙박스 확보.</li>\n<li><strong>2단계 — 의료기관 진료·정밀검사 (1주)</strong> — 머리·팔 부상 + 정신적 충격 평가.</li>\n<li><strong>3단계 — 자배법·보험 청구 (2주)</strong> — 운영자 보험 + 유치원 책임보험.</li>\n<li><strong>4단계 — 형사 합의 (1~3개월)</strong> — 12대 중과실 평가 + 합의 협의.</li>\n<li><strong>5단계 — 민사 손해배상 (시효 3년)</strong> — 위자료·후유증·일실수입.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 후유증 추가 청구 가능한지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">통학버스 어린이 부상 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·보험·합의 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 사건사고사실확인원·교통사고 사실 확인서</strong></li>\n<li><strong>통학버스 블랙박스·CCTV·목격자 진술</strong></li>\n<li><strong>의사 진단서·정밀검사 결과·치료비 영수증</strong></li>\n<li><strong>유치원·학원 통학버스 운영 약관·계약서</strong></li>\n<li><strong>동승보호자 운영 기록·결원 정황</strong></li>\n<li><strong>안전벨트·보조장치 자료</strong></li>\n<li><strong>운영자·운전자 면허·보험 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 어린이 위자료 산정은 \'성장 단계 + 정신적 충격 + 후유증 가능성\' 평가. 사고 직후 합의는 후유증 확인 전이라 신중 — 1~2개월 경과 후 정밀 검사 결과 본 후 결정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>안전운행 의무</strong> — 도로교통법 제53조 가중 평가.</li>\n<li><strong>동승보호자</strong> — 결원·부재 시 운영자 책임 가중.</li>\n<li><strong>안전벨트·보조장치</strong> — 미체결·미설치 사정.</li>\n<li><strong>영유아 위자료</strong> — 성장 단계 + 정신적 충격 평가.</li>\n<li><strong>후유증 추가 청구</strong> — 1~2개월 경과 후 정밀 검사.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>금융감독원 1332 (보험 분쟁)</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰 112</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보증보험 보험사고 평가 영역',
        summary:
          '대법원 2021다220628(대법원, 2025.08.14 선고) 영역에서 법원은 이행보증보험계약에 따라 보증금의 지급을 청구하는 사건에서 보험사고가 구체적으로 무엇인지 결정하는 방법을 다루면서, 보험 약관 해석 및 사고 평가 기준이 보상 가능 범위를 결정한다고 본 사례 흐름이 있고, 통학버스 사고에서도 운영자·운전자 보험 + 책임보험 종합 평가가 핵심 사정입니다.',
        takeaway: '통학버스 사고는 운영자·운전자·동승보호자 + 보험 종합 평가 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '동승보호자가 없었던 게 가중 사정이 되나요?',
        answer:
          '<strong>도로교통법 제53조 의무 위반의 강한 사정입니다.</strong> 결원·부재 정황 자료 확보.',
      },
      {
        question: '치료비 외에 위자료도 청구 가능한가요?',
        answer:
          '<strong>위자료·정신적 충격·후유증 별도 청구 영역입니다.</strong> 영유아 산정 기준 적용.',
      },
      {
        question: '사고 직후 합의금 제시받았는데 받아도 되나요?',
        answer:
          '<strong>후유증 확인 전 합의는 신중한 영역입니다.</strong> 1~2개월 경과 후 정밀 검사 결과 본 후 결정.',
      },
      {
        question: '유치원·운전자 둘 다 책임 있나요?',
        answer:
          '<strong>운영자·운전자·보호자 다중 책임 영역입니다.</strong> 보험 청구는 운영자 보험 우선.',
      },
      {
        question: '형사 처벌이 강한가요?',
        answer:
          '<strong>어린이 보호 영역 + 12대 중과실 평가 가중 사정입니다.</strong> 합의 협의 시점 변호인 자문.',
      },
    ],
    cta: { text: '후유증 추가 청구 가능한지 AI로 점검하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의금 산정', href: '/guide/traffic-accident/settlement-amount-calculation' },
      { label: '12대 중과실 평가', href: '/guide/traffic-accident/traffic-accident-12-serious-faults' },
      { label: '교통사고 위자료', href: '/guide/traffic-accident/traffic-accident-emotional-damages' },
      { label: '후유증 추가 청구', href: '/guide/traffic-accident/traffic-accident-post-settlement-additional-claim' },
      { label: '어린이 교통사고', href: '/guide/traffic-accident/traffic-accident-child-victim' },
    ],
  },

  // ─── 3. traffic-accident-construction-truck-falling-cargo-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-construction-truck-falling-cargo-track',
    keyword: '공사장 트럭 적재물 낙하 사고',
    questionKeyword: '도로에서 공사장 화물 트럭에서 적재물이 떨어져 차량·사람이 부상을 입었어요. 운전자·회사·공사장 책임은 어떻게 되나요?',
    ctaKeyword: '화물 낙하 사고 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '공사장 트럭 적재물 낙하 사고 — 5단계 결박·적재 위반 다툼 | 로앤가이드',
      description:
        '공사장 트럭 적재물 낙하 사고 시 운전자·회사·공사장 책임 + 도로법·자배법 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"고속도로 4차선 주행 중 앞에서 가던 24톤 덤프트럭에서 적재된 자갈·잡석이 본인 차량 보닛·앞유리로 떨어져 차량이 파손되고 본인 얼굴·팔에 부상을 입었습니다. 트럭은 공사장 자재 운반 중이었고 적재물 결박이 부실했던 정황이 있었어요. 트럭 운전자는 \'커브를 돌 때 어쩔 수 없었다\'고 했지만 도로교통법 제39조는 \'운전자는 적재물 낙하 방지 조치 의무\'를 부과합니다. 트럭 회사·공사장 원청·도로관리청 모두 일정 책임 가능성이 있어요." 적재물 낙하 사고는 도로교통법 제39조(낙하 방지 의무)·자동차손해배상보장법·민법 종합 평가 영역이고, 운전자·트럭 소유 회사·공사장 원청의 다중 책임 트랙입니다. 적재량 초과 + 결박 부실은 운전자·회사 모두에 책임이 가중되는 사정. 피해자라면 ① 낙하 방지 의무 ② 적재량 초과 ③ 다중 책임 ④ 형사 합의 ⑤ 민사 손해배상 5중 트랙이 가능한 영역. 대응은 ① 의무 ② 적재 ③ 다중 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 화물 낙하 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 의무·적재·다중·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 낙하 방지 의무 위반</strong> — 도로교통법 제39조 위반 평가.</li>\n<li><strong>② 적재량 초과·결박 부실</strong> — 운전자·회사 책임 가중 사정.</li>\n<li><strong>③ 다중 책임</strong> — 운전자 + 트럭 회사 + 공사장 원청 평가.</li>\n<li><strong>④ 형사 합의</strong> — 교통사고처리특례법 + 도로교통법 위반.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 차량 수리비·치료비·위자료·일실수입.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 적재물 낙하 사고는 운전자·회사 + 원청 + 도로관리청 다중 책임 평가 영역. 결박 부실·적재량 초과는 \'고의에 가까운 과실\' 평가 사정. 차량 손괴 + 인사 부상 결합 시 형사·민사 동시 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·입증·합의 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경찰 신고·블랙박스 보존 (즉시)</strong> — 112 신고·낙하 순간 영상 확보.</li>\n<li><strong>2단계 — 차량·인사 자료 (1주)</strong> — 차량 정비 견적·진단서·치료비 영수증.</li>\n<li><strong>3단계 — 트럭 운영 자료 (2주)</strong> — 트럭 등록·회사·공사장 운반 계약 확인.</li>\n<li><strong>4단계 — 형사 합의 + 자배법 청구 (1~3개월)</strong> — 운전자 형사·회사 보험.</li>\n<li><strong>5단계 — 민사 손해배상 (시효 3년)</strong> — 다중 책임자 상대 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">화물 낙하 사고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·입증·합의 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 사건사고사실확인원·도로교통법 위반 자료</strong></li>\n<li><strong>블랙박스·CCTV·낙하 순간 영상</strong></li>\n<li><strong>차량 정비 견적·수리 영수증</strong></li>\n<li><strong>의사 진단서·치료비·일실수입 자료</strong></li>\n<li><strong>트럭 등록·회사·공사장 운반 계약</strong></li>\n<li><strong>적재량·결박 자료 (적재 사진·매뉴얼)</strong></li>\n<li><strong>보험 약관·자동차보험·책임보험 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 낙하물 사고는 \'동시 다발 다중 책임\' 사정으로 운전자만 상대로 청구할 게 아니라 트럭 회사·원청 공사장까지 동시 청구 검토. 블랙박스 낙하 순간 영상이 결정 입증.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>낙하 방지 의무</strong> — 도로교통법 제39조 위반.</li>\n<li><strong>적재량·결박</strong> — 초과·부실 시 책임 가중.</li>\n<li><strong>다중 책임</strong> — 운전자·회사·원청 동시 청구.</li>\n<li><strong>형사 합의</strong> — 교통사고처리특례법 + 도로교통법.</li>\n<li><strong>차량 손괴</strong> — 수리비·렌트비·감가 청구.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>금융감독원 1332 (보험 분쟁)</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰 112</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 산재보험금과 사업주 공동불법행위 영역',
        summary:
          '대법원 2023다297141(대법원, 2025.06.26 선고) 영역에서 법원은 업무상 재해를 당하여 산재보험금을 지급받은 재해근로자가 산업재해보상보험 가입 사업주와 제3자의 공동불법행위를 원인으로 사업주를 상대로 손해배상을 청구하는 영역을 다루면서, 다수 책임자에 대한 동시·중복 청구 평가가 가능하다고 본 사례 흐름이 있고, 적재물 낙하 사고에서도 운전자·회사·원청 다중 책임 평가가 적용됩니다.',
        takeaway: '적재물 낙하 사고는 운전자·회사·원청 + 보험 다중 책임 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '트럭 운전자만 상대로 청구하면 되나요?',
        answer:
          '<strong>운전자 + 회사 + 원청 다중 책임 영역입니다.</strong> 회사 보험 + 원청 책임 동시 검토.',
      },
      {
        question: '낙하 순간 블랙박스 영상이 없으면 입증이 어렵나요?',
        answer:
          '<strong>현장 사진·CCTV·목격자 진술 결합 입증 영역입니다.</strong> 즉시 자료 수집.',
      },
      {
        question: '차량 수리비 외에 감가도 청구 가능한가요?',
        answer:
          '<strong>차량 감가·렌트비 별도 청구 영역입니다.</strong> 정비 견적 + 감정 평가서 확보.',
      },
      {
        question: '본인 부상은 어디까지 청구하나요?',
        answer:
          '<strong>치료비·위자료·일실수입·후유증 종합 청구 영역입니다.</strong> 1~2개월 정밀 검사 결과 본 후 결정.',
      },
      {
        question: '공사장 원청이 \'운전자 본인 책임\'이라며 거부해요',
        answer:
          '<strong>원청의 사용자 책임·관리 책임 평가 영역입니다.</strong> 운반 계약·지시 자료 확보.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의금 산정', href: '/guide/traffic-accident/settlement-amount-calculation' },
      { label: '12대 중과실 평가', href: '/guide/traffic-accident/traffic-accident-12-serious-faults' },
      { label: '교통사고 위자료', href: '/guide/traffic-accident/traffic-accident-emotional-damages' },
      { label: '차량 손해 청구', href: '/guide/traffic-accident/traffic-accident-vehicle-damage-claim' },
      { label: '후유증 추가 청구', href: '/guide/traffic-accident/traffic-accident-post-settlement-additional-claim' },
    ],
  },

  // ─── 4. traffic-accident-medical-emergency-driver-faint-collision-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-medical-emergency-driver-faint-collision-track',
    keyword: '운전자 실신·뇌졸중 사고 책임',
    questionKeyword: '운전 중 갑자기 의식을 잃거나 뇌졸중·심장 발작으로 사고가 났어요. 운전자 책임은 면책되나요?',
    ctaKeyword: '실신 운전 사고 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '운전자 실신·뇌졸중 사고 — 5단계 면책·과실 평가 | 로앤가이드',
      description:
        '운전 중 의식 상실로 사고가 났다면 면책 가능성·기왕증 인식 + 자배법 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"신호 정지 중 운전자가 갑자기 뇌졸중으로 의식을 잃고 액셀을 밟아 앞 차량을 추돌·인근 보행자에게도 부상을 입힌 사고가 있었습니다. 운전자는 평소 고혈압·당뇨가 있었지만 정기 검진은 받았고 의사로부터 \'운전 금지\' 안내는 없었어요. 사고 후 본인은 의식을 회복했고 상대 차량·보행자는 부상 진단을 받았습니다. 보험사는 \'면책\' 주장 + 보행자 측은 \'기왕증 인식 + 운전 강행으로 미필적 과실\'을 주장하는 상황이에요." 운전 중 갑작스러운 의식 상실(실신·뇌졸중·심장 발작)은 \'불가항력\' 평가 가능성이 있는 영역이지만, 운전자의 기왕증 인식 + 의사 권고 + 운전 강행 정황 결합 시 미필적 과실·예견 가능성 평가가 달라지는 트랙입니다. 자동차손해배상보장법은 \'운행자 무과실\' 입증 책임을 운전자 측에 부담시키는 영역. 본인이라면 ① 기왕증 인식 ② 의사 권고 ③ 운행자 무과실 ④ 형사 책임 ⑤ 민사 손해배상 5중 트랙이 가능한 영역. 대응은 ① 기왕증 ② 권고 ③ 무과실 ④ 형사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 실신 운전 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 기왕증·권고·무과실·형사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 기왕증 인식</strong> — 고혈압·당뇨·뇌혈관 질환 등 인식 정도.</li>\n<li><strong>② 의사 권고</strong> — \'운전 금지\' 권고 유무 + 운전 강행 정황.</li>\n<li><strong>③ 운행자 무과실 입증</strong> — 자배법상 운전자 측 입증 책임.</li>\n<li><strong>④ 형사 책임</strong> — 교통사고처리특례법 + 미필적 과실 평가.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 자기·상대 보험 결합 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 의식 상실은 \'불가항력\' 면책 가능성 영역이지만 기왕증 인식 + 운전 강행 결합 시 미필적 과실 평가. 자배법은 운행자 무과실 입증 책임을 운전자 측에 부담. 의사 권고 자료가 결정 사정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 입증·면책·보상 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 의료 기록·진단서 보존 (즉시)</strong> — 사고 직후 응급실 진단·뇌영상·심장 검사.</li>\n<li><strong>2단계 — 기왕증·검진 자료 (1주)</strong> — 정기 검진 기록·약 처방·의사 권고 자료.</li>\n<li><strong>3단계 — 자배법 면책 주장 (2주)</strong> — 보험사 + 상대 측 협의.</li>\n<li><strong>4단계 — 형사 합의·기소 대응 (1~3개월)</strong> — 미필적 과실 평가 다툼.</li>\n<li><strong>5단계 — 민사 손해배상 분배</strong> — 자기·상대 보험 한도 평가.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">실신 운전 사고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 기왕증·권고·무과실 갈래입니다.</strong></p>\n<ul>\n<li><strong>사고 직후 응급실 진단서·뇌영상·심장 검사</strong></li>\n<li><strong>정기 검진 기록·약 처방전</strong></li>\n<li><strong>의사 권고서·운전 가능 여부 자료</strong></li>\n<li><strong>경찰 사건사고사실확인원·블랙박스</strong></li>\n<li><strong>차량·인사 피해 자료</strong></li>\n<li><strong>자기·상대 자동차보험 약관</strong></li>\n<li><strong>운전 기록·면허 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 의사가 \'운전 금지\' 권고를 했음에도 운전했다면 미필적 과실 평가 강함. 반대로 권고 부재 + 정기 검진 정상 + 사고 직전 의식 정상이었다면 면책 다툼 강한 트랙.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기왕증 인식</strong> — 고혈압·당뇨·뇌혈관 질환 등 인식 정도.</li>\n<li><strong>의사 권고</strong> — \'운전 금지\' 권고 유무.</li>\n<li><strong>운행자 무과실</strong> — 자배법상 입증 책임 운전자 측 부담.</li>\n<li><strong>미필적 과실</strong> — 기왕증 인식 + 운전 강행 결합 평가.</li>\n<li><strong>형사 책임</strong> — 교통사고처리특례법 + 도로교통법.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>금융감독원 1332 (보험 분쟁)</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰 112</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 톨게이트 하이패스 구간 안전운행 의무 영역',
        summary:
          '대법원 2025도1049(대법원, 2025.06.12 선고) 영역에서 법원은 교통사고처리특례법위반(치상) 사건에서 피고인이 톨게이트 하이패스 구간을 통과하며 안전운행 의무를 위반한 사건을 다루면서, 안전지대 옆을 통과하는 차량 운전자에게 안전지대를 횡단하여 오는 차량이 있을 것을 미리 예상하고 운전할 업무상 주의의무가 있는지 여부를 다루는 사례 흐름이 있고, 운전자의 예견 가능성·주의의무 평가가 사고 책임 결정의 핵심 사정입니다.',
        takeaway: '운전자 예견 가능성 + 주의의무 평가가 의식 상실 사고의 면책 다툼 결정 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '갑작스런 뇌졸중도 면책될 수 있나요?',
        answer:
          '<strong>기왕증 인식 + 의사 권고 부재 시 면책 다툼 영역입니다.</strong> 사고 직후 의료 기록 결정 입증.',
      },
      {
        question: '평소 고혈압 약을 복용 중이었어요',
        answer:
          '<strong>기왕증 인식 사정으로 평가될 수 있는 영역입니다.</strong> 의사 \'운전 가능\' 권고 자료 확보.',
      },
      {
        question: '자기 차량·자기 보험은 어떻게 처리되나요?',
        answer:
          '<strong>자기차량손해 + 자손 + 자상 결합 청구 영역입니다.</strong> 약관 면책 사유 확인.',
      },
      {
        question: '형사 입건된 상태인데 어떻게 해야 하나요?',
        answer:
          '<strong>미필적 과실 다툼 + 합의 진행 영역입니다.</strong> 즉시 변호인 자문.',
      },
      {
        question: '상대 보행자 부상이 심해요',
        answer:
          '<strong>형사 합의 + 자배법 보상 우선 영역입니다.</strong> 보험사 신속 처리 협의.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의금 산정', href: '/guide/traffic-accident/settlement-amount-calculation' },
      { label: '12대 중과실 평가', href: '/guide/traffic-accident/traffic-accident-12-serious-faults' },
      { label: '교통사고 형사 합의', href: '/guide/traffic-accident/traffic-accident-criminal-settlement' },
      { label: '교통사고 위자료', href: '/guide/traffic-accident/traffic-accident-emotional-damages' },
      { label: '자동차 보험 청구', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
    ],
  },

  // ─── 5. traffic-accident-snowstorm-blizzard-multi-pileup-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-snowstorm-blizzard-multi-pileup-track',
    keyword: '폭설·빙판 다중추돌 사고 책임',
    questionKeyword: '폭설·빙판으로 고속도로에서 10중·20중 다중추돌이 발생했어요. 누구 책임이고 보험은 어떻게 처리되나요?',
    ctaKeyword: '폭설 다중추돌 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '폭설 다중추돌 사고 — 5단계 자배법·도로관리 다툼 | 로앤가이드',
      description:
        '폭설·빙판 다중추돌 시 운전자·앞 차량·도로관리청 책임 + 자배법 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"새벽 고속도로 주행 중 갑작스런 폭설·블랙아이스로 앞 차량이 미끄러져 회전했고 본인 차량도 충격을 받았으며 뒤따라오던 10여 대가 연쇄 추돌하는 다중 추돌 사고가 났습니다. 본인 차량은 안전거리 유지·서행 운전 중이었지만 뒤차의 과속·미끄러짐을 피할 수 없었어요. 사고 후 보험사·경찰은 \'동시 다발 다중 책임\' 분류로 처리 중이고, 도로관리청의 제설·염화칼슘 미살포 정황도 확인됐습니다. 본인 차량 수리비·치료비 + 후속 차량 손해까지 청구가 복잡하게 얽혀 있어요." 폭설·빙판 다중추돌은 운전자 안전운행 의무 + 자동차손해배상보장법 + 도로관리청 영조물 책임 종합 평가 영역이고, 동시 다발 과실 비율 + 보험 분담 + 형사 합의 결합 트랙입니다. 피해자라면 ① 본인 무과실 ② 다른 운전자 과실 ③ 도로관리청 ④ 자배법 보상 ⑤ 민사 손해배상 5중 트랙이 가능한 영역. 대응은 ① 무과실 ② 운전자 ③ 도로 ④ 자배법 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 폭설 다중추돌 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 무과실·운전자·도로·자배법·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 본인 무과실 입증</strong> — 안전거리·서행·체인 등 안전운행 자료.</li>\n<li><strong>② 다른 운전자 과실</strong> — 과속·안전거리 미준수·체인 미장착.</li>\n<li><strong>③ 도로관리청 영조물 책임</strong> — 제설·염화칼슘 살포 부재 정황.</li>\n<li><strong>④ 자배법 보상</strong> — 가해자 보험 + 자기차량손해 + 무보험차상해.</li>\n<li><strong>⑤ 민사 손해배상</strong> — 다중 책임자 동시 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 다중추돌은 \'동시 다발 책임\' 분배 영역. 본인 무과실 입증 시 100% 청구 가능. 도로관리청의 제설 부재 정황은 영조물 책임 별도 트랙. 자기차량손해 + 무보험차상해 결합 청구.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·입증·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경찰 신고·블랙박스 보존 (즉시)</strong> — 112 신고·블랙박스·기상 정보 캡처.</li>\n<li><strong>2단계 — 본인 무과실 자료 (1주)</strong> — 속도·체인·안전거리·운전 상태 자료.</li>\n<li><strong>3단계 — 도로 상태 자료 (2주)</strong> — 도로관리청 제설 기록·기상 경보·CCTV.</li>\n<li><strong>4단계 — 보험 청구 (2~4주)</strong> — 자기·상대·도로관리청 동시 청구.</li>\n<li><strong>5단계 — 민사 손해배상 (시효 3년)</strong> — 한도 초과분·정신적 위자료.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">폭설 다중추돌 사고 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 무과실·도로·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 사건사고사실확인원·교통사고 사실 확인서</strong></li>\n<li><strong>블랙박스·CCTV·차량 위치 데이터</strong></li>\n<li><strong>기상청 폭설·한파 경보 자료</strong></li>\n<li><strong>도로관리청 제설·염화칼슘 살포 기록</strong></li>\n<li><strong>차량 정비 견적·수리 영수증</strong></li>\n<li><strong>의사 진단서·치료비·일실수입 자료</strong></li>\n<li><strong>자기·상대 자동차보험 약관·자기차량손해 약관</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 다중추돌은 \'본인 무과실\' 입증이 핵심. 블랙박스 영상 + 속도·차간거리·체인 자료가 결정 입증. 도로관리청 청구는 영조물 책임 별도 트랙이라 손해배상 청구 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>본인 무과실 입증</strong> — 안전거리·서행·체인·기상 인지.</li>\n<li><strong>다른 운전자 과실</strong> — 과속·안전거리 미준수·체인 미장착.</li>\n<li><strong>도로관리청 책임</strong> — 제설·염화칼슘 살포 부재 정황.</li>\n<li><strong>자기차량손해</strong> — 자기차량손해 약관 활용.</li>\n<li><strong>무보험차상해</strong> — 가해자 불명·무보험 시 활용.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>금융감독원 1332 (보험 분쟁)</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>경찰 112</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 의료행위 업무상 과실치사상죄 증명 영역',
        summary:
          '대법원 2024도9443(대법원, 2025.05.15 선고) 영역에서 법원은 업무상과실치상 사건에서 의사에게 의료행위로 인한 업무상과실치사상죄를 인정하기 위해서 증명해야 할 내용 및 증명 정도를 다루면서, 행위와 결과 사이 인과관계·예견 가능성·주의의무 위반 평가가 결정적 사정이라고 본 사례 흐름이 있고, 다중추돌 사고에서도 운전자 주의의무 + 예견 가능성 평가가 핵심 사정입니다.',
        takeaway: '폭설 다중추돌은 본인 무과실 입증 + 다른 운전자·도로관리청 다중 청구 영역 — 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '본인은 안전거리 유지·서행 운전했는데 책임이 있나요?',
        answer:
          '<strong>본인 무과실 입증 시 책임 면제 영역입니다.</strong> 블랙박스 + 속도 자료가 결정 입증.',
      },
      {
        question: '도로관리청에 청구 가능한가요?',
        answer:
          '<strong>영조물 책임 별도 트랙 영역입니다.</strong> 제설·염화칼슘 기록 부재 입증.',
      },
      {
        question: '뒤차에 추돌당한 후 앞차도 추돌했어요',
        answer:
          '<strong>다중 책임 분배 평가 영역입니다.</strong> 각 차량 과실 비율 별도 평가.',
      },
      {
        question: '자기 차량 수리는 어떻게 하나요?',
        answer:
          '<strong>자기차량손해 약관 활용 영역입니다.</strong> 자기부담금·보험료 할증 비교.',
      },
      {
        question: '가해자가 무보험이에요',
        answer:
          '<strong>무보험차상해 약관 활용 영역입니다.</strong> 본인 보험사 청구 우선.</strong>',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의금 산정', href: '/guide/traffic-accident/settlement-amount-calculation' },
      { label: '12대 중과실 평가', href: '/guide/traffic-accident/traffic-accident-12-serious-faults' },
      { label: '차량 손해 청구', href: '/guide/traffic-accident/traffic-accident-vehicle-damage-claim' },
      { label: '교통사고 위자료', href: '/guide/traffic-accident/traffic-accident-emotional-damages' },
      { label: '자동차 보험 청구', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
    ],
  },
];
