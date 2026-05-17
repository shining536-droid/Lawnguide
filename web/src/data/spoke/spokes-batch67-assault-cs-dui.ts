import { SpokePage } from '../spoke-pages';

// batch67 assault-cs-dui — 6개 (2026-05-17)
//
// 고유 존재 이유:
// 1. assault-tenant-landlord-rent-dispute-track — 임대차 다툼 중 임대인-임차인 폭행. 기존 assault-workplace-drinking-coworker 와 분기: "임대차 + 계약관계 + 폭행" 트랙.
// 2. assault-amusement-park-staff-customer-track — 시설(놀이공원·테마파크) 직원의 고객 폭행 + 사용자책임. 기존 assault-medical-staff-patient / bar-club-bouncer 와 분기: "놀이시설 + 직원 폭행 + 시설책임" 트랙.
// 3. assault-bus-driver-passenger-stop-dispute-track — 대중교통 기사-승객 폭행 + 운수회사 책임. 기존 assault-public-transit-elderly / passenger-roadrage 와 분기: "버스기사 + 운수회사 사용자책임" 트랙.
// 4. child-support-payer-bankruptcy-non-dischargeable-track — 양육비 채권의 비면책채권 인정 + 파산절차 내 추심. 기존 child-support-arrears-collection / contempt 과 분기: "파산절차 + 비면책채권" 트랙.
// 5. child-support-overseas-payer-currency-exchange-loss-track — 해외 송금 양육비 환차 손해 + 환산 기준일 다툼. 기존 child-support-overseas-flee-non-payer / hague-treaty 와 분기: "정상 송금 + 환차 손해 분담" 트랙.
// 6. dui-private-residential-parking-lot-no-public-impaired-track — 사적 주차장·도교법 적용 여부 + 처벌 범위. 기존 dui-electric-scooter / dui-first-offense 과 분기: "도로 외 + 도교법 적용 한계" 트랙.

export const spokesBatch67AssaultCsDui: SpokePage[] = [
  // ─── 1. assault-tenant-landlord-rent-dispute-track ───
  {
    domain: 'assault',
    slug: 'assault-tenant-landlord-rent-dispute-track',
    keyword: '임대인 임차인 임대료 폭행',
    questionKeyword: '임대료 인상 다툼 중 집주인이 제 멱살을 잡고 밀치는 등 폭행했어요.',
    ctaKeyword: '임대차 다툼 폭행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '임대인 임차인 임대료 다툼 폭행 — 5단계 임대차 + 형사 트랙 | 로앤가이드',
      description:
        '임대료 인상·연체 다툼 중 임대인·임차인 폭행이 발생했다면 임대차 + 형사 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"임대인이 \"월세 30만원을 올려달라\"고 요구해 거절했더니, 집을 찾아와 \"당장 나가\"라며 멱살을 잡고 현관 밖으로 밀쳤습니다. 손목을 다쳤고 깨진 안경 조각에 베인 상처가 났어요. 임대인은 \"네가 먼저 욕했다\"며 책임을 떠넘기고 본인도 임차권 보호와 폭행 피해 두 가지 모두 정리해야 해서 막막합니다." 임대료 다툼 중 임대인·임차인 폭행 피해자라면 ① 형법 260조 폭행죄·257조 상해죄 ② 주거침입·재물손괴 결합 가능성 ③ 임대차 계약 + 임차권 보호 별도 트랙 ④ 임대인의 자력구제 위법성 ⑤ 형사 + 민사 + 임대차 분쟁조정 5가지 트랙이 결합되는 영역. 임대차 계약상 다툼이 있더라도 폭행은 별개 범죄로 평가되는 영역이고, 임대인의 강제 퇴거 행위는 자력구제 금지 영역. 대응은 ① 증거 ② 의료 ③ 신고 ④ 형사·민사 ⑤ 임차권 보호 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 임대인 임차인 임대료 다툼 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·의료·신고·형사·임차권 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 현장 CCTV·녹음·이웃 증언 보전</strong></li>\n<li><strong>② 의료 진단서·부상 사진</strong></li>\n<li><strong>③ 112 신고·경찰 출동 기록</strong></li>\n<li><strong>④ 폭행·상해 고소 + 주거침입 결합 검토</strong></li>\n<li><strong>⑤ 임차권 보호 + 임대차분쟁조정 별도</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임대료 다툼은 임대차 트랙이고 폭행은 별개 형사 영역. 임대인이 강제 퇴거시키려 한 행위는 자력구제 위법으로 평가될 여지. 임차권은 별도 보호 트랙으로 진행.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 보전·녹취·증인 (즉시)</strong></li>\n<li><strong>2단계 — 의료 진단서 발급 (즉시~1주)</strong></li>\n<li><strong>3단계 — 112 신고·경찰 진술조서</strong></li>\n<li><strong>4단계 — 폭행·상해 고소 + 민사 손해배상 (3년 시효)</strong></li>\n<li><strong>5단계 — 임대차분쟁조정위 + 임차권등기 별도 트랙</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임대차 다툼 폭행 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·계약·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>현장 CCTV·녹음·휴대폰 영상</strong></li>\n<li><strong>의료 진단서·치료비 영수증·부상 사진</strong></li>\n<li><strong>이웃 증인 진술서·연락처</strong></li>\n<li><strong>112 신고 접수번호·경찰 진술조서</strong></li>\n<li><strong>임대차계약서·월세 입금 내역</strong></li>\n<li><strong>임대료 인상 요구 메시지·내용증명</strong></li>\n<li><strong>본인 신분증·주민등록등본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임대인의 무단 출입은 주거침입으로 별도 평가 영역. 임대료 인상 요구 내용을 캡처해 두면 임대차 다툼이 폭행의 동기라는 점이 명확. 임차권등기명령은 폭행 트랙과 무관하게 즉시 진행 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임대차 vs 형사 분리</strong> — 임대료 다툼은 별개.</li>\n<li><strong>자력구제 금지</strong> — 임대인 강제퇴거 위법.</li>\n<li><strong>주거침입 결합</strong> — 임대인 무단 출입 시.</li>\n<li><strong>본인 자극 사정</strong> — 과실 상계 검토 영역.</li>\n<li><strong>3년 시효</strong> — 불법행위 손해배상.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임대차 다툼 + 폭행 평가',
        summary:
          '서울북부지법 2023노1593(서울북부지법, 2024.01.19 선고) 영역에서 법원은 상가건물 내 임대·관리비 다툼 과정에서 관리소장에게 욕설을 하며 위력으로 업무를 방해하고 밖으로 나가려는 피해자를 밀쳐 폭행한 행위에 대하여 업무방해와 폭행이 별개로 성립할 수 있고, CCTV 재촬영물도 일정 요건을 갖추면 증거능력이 인정될 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '임대·관리 다툼 중 폭행은 별개 범죄 영역. CCTV·재촬영물도 증거능력 검토 가능. 자력구제 위법 사정.',
      },
    ],
    faq: [
      {
        question: '임대인이 \"임차인이 먼저 욕했다\"고 주장합니다',
        answer:
          '<strong>일부 자극 사정이 있더라도 멱살·밀치기·구타 행위 자체는 별개 평가될 여지가 있는 영역입니다.</strong>',
      },
      {
        question: '집주인이 강제로 들어왔는데 주거침입인가요?',
        answer:
          '<strong>임대차 계약 중 임대인 무단 출입은 주거침입으로 평가될 여지가 있는 영역입니다.</strong>',
      },
      {
        question: '임차권 보호는 어떻게 하나요?',
        answer:
          '<strong>임차권등기명령·임대차분쟁조정위 별도 트랙으로 진행 가능합니다.</strong>',
      },
      {
        question: '치료비·위자료는 얼마인가요?',
        answer:
          '<strong>사례에 따라 다르지만 부상 정도·녹화 영상 명확성에 따라 인정 범위가 검토되는 영역입니다.</strong>',
      },
      {
        question: '임대료 인상 요구 자체는 위법인가요?',
        answer:
          '<strong>인상 폭·시기는 임대차보호법 5% 상한 규정 등 별도 트랙으로 평가됩니다.</strong>',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '폭행 형사 고소', href: '/guide/assault/assault-complaint-procedure' },
      { label: '주거침입 결합', href: '/guide/assault/assault-trespass-combined' },
      { label: '임대차 분쟁조정', href: '/guide/assault/assault-rental-dispute-mediation' },
      { label: '범죄피해자 지원', href: '/guide/assault/assault-victim-support-program' },
    ],
  },

  // ─── 2. assault-amusement-park-staff-customer-track ───
  {
    domain: 'assault',
    slug: 'assault-amusement-park-staff-customer-track',
    keyword: '놀이공원 직원 고객 폭행',
    questionKeyword: '놀이공원 직원이 줄서기 안내 중 손님이 화를 내자 폭행했어요. 직원·운영사 책임 다 있나요?',
    ctaKeyword: '놀이시설 직원 고객 폭행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '놀이공원 직원 고객 폭행 — 5단계 시설책임 + 형사 트랙 | 로앤가이드',
      description:
        '놀이공원·테마파크 직원이 고객을 폭행했다면 직원 형사 + 운영사 사용자책임 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"놀이공원에서 인기 어트랙션 줄을 서다 직원이 \"새치기 의심\"이라며 큰 소리를 냈고, 본인이 항의하자 직원이 멱살을 잡고 밀쳐 바닥에 넘어뜨렸어요. 손목과 어깨에 타박상을 입었고 안경이 깨졌습니다. 운영사는 \"개인 잘못\"이라며 책임을 회피하는데, 어디부터 정리해야 하는지 막막합니다." 시설 직원의 고객 폭행 피해자라면 ① 형법 260조 폭행·257조 상해죄 ② 민법 756조 사용자책임(운영사 손해배상) ③ 시설물 안전관리 의무 위반 ④ 형사 + 민사 + 소비자 분쟁조정 ⑤ 산재(직원 측 별개)와 분리 5가지 트랙이 결합되는 영역. 직원이 업무 중 폭행한 경우 운영사도 사용자책임으로 손해배상 책임을 검토받는 영역이고, 시설 안전관리 의무 위반도 별도 추궁 가능. 대응은 ① 증거 ② 의료 ③ 신고 ④ 형사 ⑤ 사용자책임 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 놀이공원 직원 고객 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·의료·신고·형사·사용자책임 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 시설 CCTV·주변 손님 영상</strong></li>\n<li><strong>② 의료 진단·진단서·부상 사진</strong></li>\n<li><strong>③ 즉시 112 신고·시설 사고 기록</strong></li>\n<li><strong>④ 직원 폭행·상해 형사 고소</strong></li>\n<li><strong>⑤ 운영사 사용자책임 + 시설 안전 의무 위반 민사</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직원 업무 중 폭행은 운영사 사용자책임 평가 영역. 시설 안전관리 의무 위반도 별도 추궁. 형사는 직원 개인 + 민사는 운영사 동시.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 시설 CCTV·주변 손님 연락처 확보 (즉시)</strong></li>\n<li><strong>2단계 — 의료 진단서 발급 (즉시~1주)</strong></li>\n<li><strong>3단계 — 112 신고·시설 사고일지 작성</strong></li>\n<li><strong>4단계 — 직원 폭행 형사 고소 (1~3개월)</strong></li>\n<li><strong>5단계 — 운영사 사용자책임 손해배상 + 소비자분쟁조정</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">놀이시설 직원 고객 폭행 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·청구·기관 갈래입니다.</strong></p>\n<ul>\n<li><strong>시설 CCTV 영상·보존 요청서</strong></li>\n<li><strong>주변 손님 휴대폰 영상·연락처</strong></li>\n<li><strong>의료 진단서·치료비·부상 사진</strong></li>\n<li><strong>입장권·결제 영수증·이용 기록</strong></li>\n<li><strong>시설 사고 일지·고객센터 접수번호</strong></li>\n<li><strong>경찰 진술조서·접수번호</strong></li>\n<li><strong>운영사 정보·직원 인적사항</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시설 CCTV는 폐기 주기가 짧아 즉시 보존 요청 권장. 주변 손님이 찍은 영상은 신뢰성 높은 객관 증거. 운영사 사용자책임은 직원 형사와 별도 트랙이라 형사 결과 기다릴 필요 없음.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>업무 관련성</strong> — 사용자책임 핵심 사정.</li>\n<li><strong>운영사 회피</strong> — 개인 잘못 주장 다툼.</li>\n<li><strong>시설 안전 의무</strong> — 안전관리 미비 별도.</li>\n<li><strong>본인 자극</strong> — 과실 상계 사정.</li>\n<li><strong>CCTV 보존</strong> — 폐기 전 즉시 요청.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 112</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 시설 직원 고객 폭행',
        summary:
          '서울북부지법 2025고단1523(서울북부지법, 2025.10.29 선고) 영역에서 법원은 영업장에서 손님의 행위에 화가 난 직원이 손님에게 다가가 목을 잡고 밀쳐 넘어뜨린 후 주먹과 발로 폭행하여 약 20일의 치료를 요하는 상해를 가한 사안에 대하여 상해죄가 인정되고 직원의 일방적인 폭행 행위 평가 영역에서 위험한 물건 사용 여부 등이 함께 검토될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '영업장 직원의 고객 폭행은 상해죄 평가 영역. 부상 정도·치료기간이 양형 사정. 사용자책임 별도 트랙.',
      },
    ],
    faq: [
      {
        question: '운영사가 \"개인 잘못\"이라며 책임 회피합니다',
        answer:
          '<strong>업무 중 폭행은 민법 756조 사용자책임 평가 영역이라 운영사도 손해배상 의무가 검토됩니다.</strong>',
      },
      {
        question: '시설 CCTV를 안 준다고 합니다',
        answer:
          '<strong>경찰 신고 시 압수·임의제출 협조 요청 가능하고 즉시 보존 요청 권장합니다.</strong>',
      },
      {
        question: '소비자 분쟁조정도 가능한가요?',
        answer:
          '<strong>한국소비자원 1372 분쟁조정 별도 트랙으로 활용 가능한 영역입니다.</strong>',
      },
      {
        question: '직원이 \"손님이 먼저 욕했다\"고 주장하면?',
        answer:
          '<strong>일부 자극 사정이 있더라도 폭행 행위 자체는 별개 평가될 여지가 있는 영역입니다.</strong>',
      },
      {
        question: '치료비·위자료 별도 청구되나요?',
        answer:
          '<strong>형사 합의와 별개로 민사 손해배상 청구 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '시설 직원 폭행', href: '/guide/assault/assault-staff-customer-venue' },
      { label: '사용자책임 손해배상', href: '/guide/assault/assault-employer-liability' },
      { label: '소비자 분쟁조정', href: '/guide/assault/assault-consumer-mediation' },
      { label: '범죄피해자 지원', href: '/guide/assault/assault-victim-support-program' },
    ],
  },

  // ─── 3. assault-bus-driver-passenger-stop-dispute-track ───
  {
    domain: 'assault',
    slug: 'assault-bus-driver-passenger-stop-dispute-track',
    keyword: '버스 기사 승객 정차 폭행',
    questionKeyword: '시내버스 기사가 정차 위치 다툼 중 60대 승객을 밀쳐 넘어뜨려 다쳤어요.',
    ctaKeyword: '버스기사 승객 폭행 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '버스 기사 승객 정차 다툼 폭행 — 5단계 특가법 + 운수회사 책임 | 로앤가이드',
      description:
        '시내버스 기사가 승객을 폭행했다면 운전자폭행 특가법 + 운수회사 사용자책임 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"60대 어머니가 시내버스에서 내릴 정차 위치를 두고 기사와 말다툼을 했는데, 기사가 운전석에서 일어나 어머니를 밀쳐 통로에 넘어뜨려 손목 골절을 입었어요. 운수회사는 \"개인 일\"이라며 회피하는데, 기사 형사 처벌과 회사 책임을 같이 묻는 방법을 정리하지 못해 답답합니다." 버스 기사의 승객 폭행 피해자라면 ① 형법 260조 폭행·257조 상해죄 ② 특정범죄가중처벌법 5조의10 운전자폭행 등(역적용 사례 있음) ③ 민법 756조 운수회사 사용자책임 ④ 자동차손해배상보장법 적용 여지 ⑤ 형사 + 민사 + 분쟁조정 5가지 트랙이 결합되는 영역. 버스 기사의 업무 중 폭행은 운수회사가 사용자책임을 부담할 가능성이 검토되는 영역이고, 정차 직후 일시 정차 상태도 \"운행 중\"으로 평가될 여지. 대응은 ① 증거 ② 의료 ③ 신고 ④ 형사 ⑤ 운수회사 책임 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 버스 기사 승객 정차 다툼 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·의료·신고·형사·운수회사 책임 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 버스 내 CCTV·블랙박스 보존 요청</strong></li>\n<li><strong>② 의료 진단서·부상 사진</strong></li>\n<li><strong>③ 112 신고·경찰 진술조서</strong></li>\n<li><strong>④ 폭행·상해 형사 고소</strong></li>\n<li><strong>⑤ 운수회사 사용자책임 손해배상 + 분쟁조정</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 버스 내 CCTV는 운수회사 보유로 즉시 보존 요청 권장. 기사 폭행은 업무 중 행위로 운수회사 사용자책임 평가 영역. 정차 직후도 \"운행 중\" 영역으로 평가될 여지.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·신고·청구 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 버스 CCTV·블랙박스 보존 요청 (즉시)</strong></li>\n<li><strong>2단계 — 의료 진단서 발급·치료 (즉시~1주)</strong></li>\n<li><strong>3단계 — 112 신고·승객 진술조서</strong></li>\n<li><strong>4단계 — 기사 폭행·상해 형사 고소 (1~3개월)</strong></li>\n<li><strong>5단계 — 운수회사 손해배상·자배법 + 소비자분쟁조정</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">버스기사 승객 폭행 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거·청구·기관 갈래입니다.</strong></p>\n<ul>\n<li><strong>버스 CCTV·블랙박스 영상 보존 요청서</strong></li>\n<li><strong>승하차 카드 기록·교통카드 내역</strong></li>\n<li><strong>의료 진단서·치료비·부상 사진</strong></li>\n<li><strong>승객 증인 진술서·연락처</strong></li>\n<li><strong>경찰 사건 접수번호·진술조서</strong></li>\n<li><strong>운수회사 정보·기사 인적사항</strong></li>\n<li><strong>자동차 보험·자배법 청구 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 버스 CCTV·블랙박스는 운수회사 보유로 즉시 보존 요청 필수. 교통카드 승하차 기록이 시점·정차 위치 객관 증거. 자동차손해배상보장법 적용 여지도 함께 검토 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>운행 중 평가</strong> — 일시 정차도 포함 영역.</li>\n<li><strong>사용자책임</strong> — 운수회사 별도 평가.</li>\n<li><strong>특가법 적용 여지</strong> — 운전자폭행 가중.</li>\n<li><strong>자배법 적용</strong> — 차량 손해 여지.</li>\n<li><strong>본인 자극</strong> — 과실 상계 사정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>경찰청 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 버스 운전자 폭행 운행 중 평가',
        summary:
          '서울북부지법 2023고합514(서울북부지법, 2024.05.28 선고) 영역에서 법원은 버스가 일시 정차 중이었더라도 공중 교통안전·질서를 저해할 우려가 있는 장소이거나 계속 운행 의사가 있는 상태라면 특가법상 \'운행 중\'으로 평가될 수 있고, 운전자에 대한 폭행으로 상해에 이른 행위는 운전자폭행 등의 죄로 인정될 여지가 있다고 본 사례 흐름이 있습니다.',
        takeaway: '일시 정차도 \"운행 중\" 평가 가능. 운전자폭행 가중 영역. 운수회사 사용자책임은 별도 트랙으로 검토.',
      },
    ],
    faq: [
      {
        question: '정차 중이었는데 \"운행 중\" 인가요?',
        answer:
          '<strong>판례 흐름상 계속 운행 의사·교통질서 저해 우려가 있으면 일시 정차도 운행 중 평가 영역입니다.</strong>',
      },
      {
        question: '운수회사가 \"기사 개인 일\"이라며 회피합니다',
        answer:
          '<strong>업무 중 폭행은 민법 756조 사용자책임 평가 영역이라 별도 손해배상 검토됩니다.</strong>',
      },
      {
        question: '자동차 보험으로 처리되나요?',
        answer:
          '<strong>자배법 적용 여지가 있는 사례가 있고 운수회사 종합보험 약관도 함께 검토됩니다.</strong>',
      },
      {
        question: '특가법 적용은 항상 되나요?',
        answer:
          '<strong>승객 → 기사 폭행이 통상 적용 영역이고 기사 → 승객 사례도 일반 폭행·상해로 평가됩니다.</strong>',
      },
      {
        question: 'CCTV 보존 요청은 어떻게 하나요?',
        answer:
          '<strong>운수회사 고객센터·경찰 사건 접수 시 즉시 보존 요청 권장됩니다.</strong>',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 증거 수집', href: '/guide/assault/assault-evidence-collection' },
      { label: '운전자 폭행 특가법', href: '/guide/assault/assault-driver-aggravated' },
      { label: '운수회사 사용자책임', href: '/guide/assault/assault-transport-employer-liability' },
      { label: '대중교통 폭행', href: '/guide/assault/assault-public-transit-elderly' },
      { label: '범죄피해자 지원', href: '/guide/assault/assault-victim-support-program' },
    ],
  },

  // ─── 4. child-support-payer-bankruptcy-non-dischargeable-track ───
  {
    domain: 'child-support',
    slug: 'child-support-payer-bankruptcy-non-dischargeable-track',
    keyword: '양육비 채무자 파산 비면책',
    questionKeyword: '양육비 5,000만원을 못 주던 전 남편이 파산·면책을 신청했다는데 양육비도 면제되나요?',
    ctaKeyword: '양육비 파산 비면책 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양육비 채무자 파산 비면책 — 5단계 파산절차 + 추심 다툼 | 로앤가이드',
      description:
        '양육비 채무자가 파산·면책을 신청했다면 비면책채권 인정 + 파산절차 내 추심 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 후 양육비 월 80만원을 5년 넘게 받지 못해 미지급액이 5,000만원 가까이 쌓였습니다. 전 남편이 \"파산하면 양육비도 다 없어진다더라\"며 면책을 신청했다는 연락을 받았어요. 정말 양육비도 다 면제되는지, 본인은 어떻게 대응해야 하는지 너무 막막합니다." 양육비 채무자 파산·면책 사안에서 피해자라면 ① 채무자회생법 566조 6호 양육비는 비면책채권 영역 ② 파산·면책 결정에도 양육비 청구권은 그대로 유지 ③ 파산절차 내 채권자 의견 제출·이의 ④ 미지급 양육비 추심 (재산조회·압류) ⑤ 이행명령·감치 형사 추궁 5가지 트랙이 결합되는 영역. 양육비 채권은 일반 금전 채무와 달리 면책 효력이 제한되는 영역으로 평가받는 사례가 있어, 파산 결정이 나도 청구권은 살아남는 영역. 대응은 ① 채권자 등록 ② 비면책 주장 ③ 결정 후 추심 ④ 이행명령 ⑤ 감치 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 양육비 채무자 파산 비면책 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 등록·주장·추심·이행·감치 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 파산절차 채권자 등록·신고</strong></li>\n<li><strong>② 비면책채권 주장·이의 신청</strong></li>\n<li><strong>③ 면책 결정 후에도 양육비 청구권 유지</strong></li>\n<li><strong>④ 재산조회·압류·추심</strong></li>\n<li><strong>⑤ 이행명령 + 감치 + 출국금지</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 양육비는 채무자회생법 566조 6호 비면책채권 영역. 파산·면책 결정이 나도 양육비 청구권은 그대로 유지될 여지. 채권자 등록 + 이의 신청이 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 등록·주장·추심 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 파산법원 채권자 등록 (즉시)</strong></li>\n<li><strong>2단계 — 비면책채권 의견 제출·이의 (2~3개월)</strong></li>\n<li><strong>3단계 — 면책 결정 확인·청구권 유지 점검</strong></li>\n<li><strong>4단계 — 재산조회·압류·추심 (가사소송법 64조)</strong></li>\n<li><strong>5단계 — 이행명령 + 감치 + 양육비이행관리원 1644-6621</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 못 받을 때 다음 단계, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">양육비 파산 비면책 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 등록·주장·추심 갈래입니다.</strong></p>\n<ul>\n<li><strong>이혼·양육비 합의서·확정 결정문</strong></li>\n<li><strong>미지급 양육비 계산서·이체 미입금 내역</strong></li>\n<li><strong>파산·면책 신청 확인서·사건번호</strong></li>\n<li><strong>채권자 등록 신청서·소명자료</strong></li>\n<li><strong>비면책채권 의견서·이의 신청서</strong></li>\n<li><strong>채무자 재산조회 자료·소득 자료</strong></li>\n<li><strong>본인 가족관계증명서·자녀 신분증</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 파산법원에 채권자로 등록하면 면책 결정 전에 의견 제출 가능. 비면책채권 주장은 파산절차 내 + 면책 결정 후 별도 청구도 가능 영역. 양육비이행관리원이 추심 절차 무료 지원.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>비면책채권 인정</strong> — 양육비 면제 평가 다툼.</li>\n<li><strong>채권자 등록</strong> — 절차 참여 핵심.</li>\n<li><strong>면책 결정 후 추심</strong> — 청구권 유지 영역.</li>\n<li><strong>재산조회</strong> — 은닉 재산 추적.</li>\n<li><strong>이행명령·감치</strong> — 형사 추궁 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n<li><strong>가정법원 1899-9595</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 양육비 이행명령 범위',
        summary:
          '대법원 2025으517(대법원, 2025.05.23 선고) 영역에서 법원은 양육비부담조서 등에 의하여 확정된 양육비 지급 의무 중 이미 이행된 부분을 넘어 미이행 의무에 대해서만 가사소송법 64조 이행명령을 할 수 있다고 보아 양육비 채권의 집행 가능 범위 평가 영역을 한정해 본 사례 흐름이 있습니다.',
        takeaway: '확정 양육비 미이행분은 이행명령 영역. 파산·면책 절차와 별개 추심 트랙 운용 가능.',
      },
    ],
    faq: [
      {
        question: '파산 면책이 나면 양육비도 정말 사라지나요?',
        answer:
          '<strong>채무자회생법 566조 6호 비면책채권 영역에 해당해 청구권 유지될 여지가 있습니다.</strong>',
      },
      {
        question: '파산법원에 어떻게 등록하나요?',
        answer:
          '<strong>채권자 등록 신청서 + 양육비 미지급 소명자료를 제출해 절차에 참여할 수 있습니다.</strong>',
      },
      {
        question: '재산을 숨겼으면 어떻게 찾나요?',
        answer:
          '<strong>재산조회 신청 + 양육비이행관리원 협조로 은닉 재산 추적 가능한 영역입니다.</strong>',
      },
      {
        question: '면책 결정 후에도 추심 가능한가요?',
        answer:
          '<strong>비면책채권 인정 시 면책 후에도 추심·압류 계속 진행 가능 영역입니다.</strong>',
      },
      {
        question: '이행명령·감치까지 가능한가요?',
        answer:
          '<strong>가사소송법 64조 이행명령 + 68조 감치 + 출국금지 추궁 트랙 운용 가능합니다.</strong>',
      },
    ],
    cta: { text: '양육비 못 받을 때 다음 단계, AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 추심', href: '/guide/child-support/child-support-arrears-collection' },
      { label: '비면책채권', href: '/guide/child-support/child-support-bankruptcy-non-dischargeable' },
      { label: '이행명령·감치', href: '/guide/child-support/child-support-enforcement-order' },
      { label: '양육비이행관리원', href: '/guide/child-support/child-support-enforcement-agency' },
      { label: '재산조회', href: '/guide/child-support/child-support-asset-investigation' },
    ],
  },

  // ─── 5. child-support-overseas-payer-currency-exchange-loss-track ───
  {
    domain: 'child-support',
    slug: 'child-support-overseas-payer-currency-exchange-loss-track',
    keyword: '해외 거주 양육비 환차손',
    questionKeyword: '미국에 사는 전 남편이 보내는 양육비가 환율 변동으로 매번 차이가 큽니다. 환차 손해는 누가 부담?',
    ctaKeyword: '해외 양육비 환차 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '해외 거주 양육비 환차손 — 5단계 송금·환산 기준 다툼 | 로앤가이드',
      description:
        '해외 거주 양육비 채무자가 송금하는 양육비가 환율 변동으로 차이가 크다면 환차 손해 분담 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전 남편이 미국에서 직장을 다니며 매월 양육비 \"1,000달러\"를 송금하기로 했는데, 환율 변동으로 어떤 달은 130만원이 들어오고 어떤 달은 110만원도 안 됩니다. 합의서엔 \"월 130만원 상당의 달러\"라고만 적혀 있어 환산 기준일을 두고 매번 다툼이 생기는데, 이런 환차 손해는 누가 부담해야 하는지 정리해보고 싶어 답답합니다." 해외 거주 양육비 환차 손해 피해자라면 ① 양육비 합의 통화·환산 기준일 명시 여부 ② 송금 시점 환율 vs 결정 시점 환율 ③ 국제사법·준거법 (외국적 요소) ④ 환차 손해 분담 합의·변경 심판 ⑤ 헤이그아동탈취협약·국제집행 별도 트랙 5가지 트랙이 결합되는 영역. 합의서에 통화·환산 기준이 명시되지 않으면 송금 시점·결정 시점 기준 다툼이 발생할 여지. 외국적 요소가 있는 사건은 준거법 검토도 함께 필요한 영역. 대응은 ① 합의 검토 ② 환산 기준 정리 ③ 협의 ④ 변경 심판 ⑤ 국제집행 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 해외 양육비 환차손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 합의·기준·협의·심판·국제집행 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 합의서 통화·환산 기준일 확인</strong></li>\n<li><strong>② 송금 시점 환율 vs 결정 시점 환율</strong></li>\n<li><strong>③ 환차 손해 분담 협의·내용증명</strong></li>\n<li><strong>④ 가정법원 양육비 변경 심판 (환산 명시)</strong></li>\n<li><strong>⑤ 헤이그협약·국제집행 + 양육비이행관리원</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통화·환산 기준 명시 여부가 핵심. 외국적 요소 시 준거법 검토 필요 영역. 변경 심판으로 환산 기준 명시 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 합의·협의·심판·집행 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 합의서·결정문 통화 조건 확인 (즉시)</strong></li>\n<li><strong>2단계 — 송금 내역·환율 변동 자료 정리</strong></li>\n<li><strong>3단계 — 환차 손해 분담 협의·내용증명 (1~2개월)</strong></li>\n<li><strong>4단계 — 가정법원 양육비 변경 심판 (3~6개월)</strong></li>\n<li><strong>5단계 — 헤이그협약·국제집행·이행관리원 1644-6621</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양육비 못 받을 때 다음 단계, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외 양육비 환차 손해 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=child-support" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 합의·송금·심판 갈래입니다.</strong></p>\n<ul>\n<li><strong>이혼·양육비 합의서·확정 결정문</strong></li>\n<li><strong>월별 송금 내역·은행 입금증·환율 기록</strong></li>\n<li><strong>채무자 거주국·소득 자료</strong></li>\n<li><strong>환산 기준일 정리표·차액 계산서</strong></li>\n<li><strong>가정법원 변경 심판 신청서</strong></li>\n<li><strong>헤이그협약 신청서·국제집행 자료</strong></li>\n<li><strong>본인·자녀 신분증·가족관계증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 합의서에 \"매월 25일 송금일 매매기준율\" 식으로 환산 기준일을 명시하면 다툼 예방. 변경 심판으로도 기준 명시화 가능. 외국 국적·거주 사건은 국제사법 검토 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>통화 명시 여부</strong> — 달러·원화 합의 내용 다툼.</li>\n<li><strong>환산 기준일</strong> — 송금일·결정일 평가 다툼.</li>\n<li><strong>환차 분담</strong> — 채무자·양육자 부담 비율.</li>\n<li><strong>준거법</strong> — 국제사법 검토 영역.</li>\n<li><strong>국제집행</strong> — 헤이그협약·외국법원 협조.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n<li><strong>가정법원 1899-9595</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 외국적 요소 양육비',
        summary:
          '대법원 2023스643(대법원, 2023.10.31 선고) 영역에서 법원은 외국 국적 양육자가 한국 국적 비양육자에 대하여 양육비를 청구한 사안에서 외국적 요소가 있는 사건은 준거법에 관하여 심리·조사할 의무가 있고, 부모 일방이 자녀를 양육한 경우 상대방이 분담함이 상당한 과거 양육비를 청구할 수 있다고 본 사례 흐름이 있습니다.',
        takeaway: '외국적 요소 양육비는 준거법 검토 필수. 환산 기준·통화 명시가 분쟁 예방. 국제집행 트랙 함께 검토.',
      },
    ],
    faq: [
      {
        question: '합의서에 \"달러\"라고만 적혀 있어요',
        answer:
          '<strong>환산 기준일을 명시하지 않으면 송금 시점·결정 시점 다툼 영역이 발생할 여지가 있습니다.</strong>',
      },
      {
        question: '환차 손해는 누가 부담하나요?',
        answer:
          '<strong>합의·심판에 따라 다르고 통상 채무자 부담 사례가 많지만 분담 합의도 가능한 영역입니다.</strong>',
      },
      {
        question: '미국 거주 채무자에게 어떻게 집행하나요?',
        answer:
          '<strong>헤이그아동탈취협약·외국법원 협조·양육비이행관리원 국제팀 협력으로 진행 가능한 영역입니다.</strong>',
      },
      {
        question: '변경 심판으로 환산 기준 명시 가능한가요?',
        answer:
          '<strong>가정법원 변경 심판으로 환산 기준일·통화 명시화 가능합니다.</strong>',
      },
      {
        question: '준거법은 어디 법이 적용되나요?',
        answer:
          '<strong>외국적 요소 사건은 국제사법에 따라 결정되고 법원 직권 심리 영역입니다.</strong>',
      },
    ],
    cta: { text: '양육비 못 받을 때 다음 단계, AI로 확인하기', link: '/chat?domain=child-support' },
    internalLinks: [
      { label: '양육비 변경 심판', href: '/guide/child-support/child-support-modification-claim' },
      { label: '해외 거주 양육비', href: '/guide/child-support/child-support-overseas-flee-non-payer' },
      { label: '헤이그아동탈취협약', href: '/guide/child-support/child-support-hague-treaty' },
      { label: '국제집행', href: '/guide/child-support/child-support-international-enforcement' },
      { label: '양육비이행관리원', href: '/guide/child-support/child-support-enforcement-agency' },
    ],
  },

  // ─── 6. dui-private-residential-parking-lot-no-public-impaired-track ───
  {
    domain: 'dui',
    slug: 'dui-private-residential-parking-lot-no-public-impaired-track',
    keyword: '아파트 단지 주차장 음주운전 도교법',
    questionKeyword: '아파트 단지 내 사적 주차장에서 술 마시고 차를 옮긴 정도인데 음주운전 처벌 받나요?',
    ctaKeyword: '사적 주차장 음주운전 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '아파트 단지 주차장 음주운전 — 5단계 도교법 적용 한계 다툼 | 로앤가이드',
      description:
        '아파트 단지·사적 주차장 음주운전 혐의를 받고 있다면 도교법 적용 한계 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술을 마시고 아파트 단지 안 주차구역에서 차량을 다른 자리로 약 10m 옮긴 정도였는데, 단지 내 신고로 음주측정에 응하게 됐어요. 면허 정지·취소까지 거론되는데 \"단지 내 사적 공간 아닌가\" 싶어 사실과 다르게 신고되었다면 어떻게 다투는지, 도로교통법이 어디까지 적용되는지 정리하고 싶어 막막합니다." 사적 주차장 음주운전 혐의를 받고 있다면 ① 도로교통법 2조 1호 \'도로\' 정의 (불특정 다수 통행) ② 아파트 단지 내 주차구역 도로 해당 여부 평가 ③ 형사처벌 + 행정처분 분리 트랙 ④ 운행 \'발진조작 완료\' 평가 영역 ⑤ 면허 정지·취소 행정심판 90일 5가지 트랙에 해당할 소지가 있는 영역. 사적 주차구역 통로는 \'불특정 다수 통행로\' 평가 다툼 영역이고, 결과에 따라 도로교통법 적용 여부 자체가 달라질 여지. 대응은 ① 사실관계 ② 도로 평가 다툼 ③ 변호인 ④ 형사·행정 분리 ⑤ 양형 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 아파트 단지 주차장 음주운전 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·도로 평가·변호·분리 대응·양형 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 운전 시점·장소·이동 거리 정리</strong></li>\n<li><strong>② 단지 내 주차구역 도로 해당성 다툼</strong></li>\n<li><strong>③ 변호인 상담·진술 전략</strong></li>\n<li><strong>④ 형사 트랙 + 행정 트랙 분리 대응</strong></li>\n<li><strong>⑤ 양형 사정·행정심판 90일</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 혐의를 받고 있다면 단지 내 통로의 \"불특정 다수 통행\" 평가가 도교법 적용의 핵심 영역. 사실과 다르게 신고되었다면 통행로 성격 다툼이 가능한 영역. 형사·행정 별도 대응.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실정리·다툼·양형 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 운전 시점·장소·동영상 자료 정리 (즉시)</strong></li>\n<li><strong>2단계 — 단지 내 도로 해당성 자료 수집 (1~2주)</strong></li>\n<li><strong>3단계 — 변호인 상담·진술 전략 (1~2주)</strong></li>\n<li><strong>4단계 — 경찰·검찰 진술조서·송치 (1~3개월)</strong></li>\n<li><strong>5단계 — 면허 행정심판 90일 + 양형 (초범·반성)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">사적 주차장 음주운전 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실·다툼·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>단지 배치도·주차구역 도면·관리규약</strong></li>\n<li><strong>단지 출입통제·차단기 설치 자료</strong></li>\n<li><strong>운전 시점 CCTV·블랙박스 영상</strong></li>\n<li><strong>음주 측정 결과지·측정 절차 기록</strong></li>\n<li><strong>본인 운전 면허 기록·전과 자료</strong></li>\n<li><strong>탄원서·반성문·환경 자료 (양형용)</strong></li>\n<li><strong>변호인 의견서·진술 전략 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 단지 출입통제·차단기·관리규약은 \"불특정 다수 통행\" 부정 자료. 운전 거리·시간·방향이 \"발진조작 완료\" 평가에 영향. 행정심판은 처분일로부터 90일 별도 트랙으로 즉시 준비.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>도로 해당성</strong> — 불특정 다수 통행 평가.</li>\n<li><strong>발진조작 완료</strong> — 운전 행위 인정 영역.</li>\n<li><strong>출입통제 여부</strong> — 자주 관리 사정.</li>\n<li><strong>형사·행정 분리</strong> — 별도 대응 영역.</li>\n<li><strong>행정심판 90일</strong> — 별도 시한 트랙.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>도로교통공단 1577-1120</strong></li>\n<li><strong>중앙행정심판위원회 110</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 아파트 단지 주차구역 도로 해당성',
        summary:
          '대법원 2004도6779(대법원, 2005.01.14 선고) 영역에서 법원은 아파트 단지 내 건물과 건물 사이 \"ㄷ\"자 공간 내 주차구역의 통로 부분은 차량을 주차하기 위한 통로에 불과해 현실적으로 불특정 다수의 사람이나 차량 통행로로 사용되지 않는 경우 도로교통법 2조 1호에 정한 일반교통에 사용되는 도로라고 할 수 없다고 본 사례 흐름이 있습니다.',
        takeaway: '단지 내 주차구역 통로는 도로 해당성 다툼 영역. 출입통제·자주 관리 사정이 핵심. 도로 부정되면 도교법 적용 한계.',
      },
    ],
    faq: [
      {
        question: '단지 안 주차장은 무조건 도로가 아닌가요?',
        answer:
          '<strong>출입통제·관리 형태에 따라 도로 해당성이 다르게 평가되는 영역입니다.</strong>',
      },
      {
        question: '차를 잠깐 옮긴 정도도 운전인가요?',
        answer:
          '<strong>발진조작 완료 여부가 운전 인정 영역의 핵심 사정으로 평가됩니다.</strong>',
      },
      {
        question: '형사·행정이 같이 처리되나요?',
        answer:
          '<strong>혐의를 받고 있다면 형사 트랙과 면허 행정처분은 별개 트랙으로 진행되는 영역입니다.</strong>',
      },
      {
        question: '행정심판은 언제까지 하나요?',
        answer:
          '<strong>처분일로부터 90일 이내 별도 트랙으로 신청 권장됩니다.</strong>',
      },
      {
        question: '도로 부정되면 무죄인가요?',
        answer:
          '<strong>도교법 적용 자체가 한계 영역에 해당해 처벌·처분 평가가 달라질 여지가 있습니다.</strong>',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 행정심판', href: '/guide/dui/dui-administrative-appeal' },
      { label: '도로 해당성 다툼', href: '/guide/dui/dui-road-applicability-dispute' },
      { label: '아파트 단지 음주운전', href: '/guide/dui/dui-apartment-parking-lot' },
      { label: '면허 정지·취소', href: '/guide/dui/dui-license-suspension-revocation' },
      { label: '음주운전 형사 방어', href: '/guide/dui/dui-criminal-defense' },
    ],
  },
];
