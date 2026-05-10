import { SpokePage } from '../spoke-pages';

// batch60 traffic — 5개:
// 1. 출퇴근 중 교통사고 — 산재 vs 자동차보험 공제 후 잔여 손해 청구 트랙
// 2. 음주측정 거부 — 면허 취소 + 별도 행정심판 90일 트랙
// 3. 자전거 운전자 무보험·미가입 — 본인 부담·일상생활배상특약 보충 트랙
// 4. 공유 킥보드(PM) 사고 — 운전자·플랫폼·정비 책임 분배 트랙
// 5. 동승자 안전벨트 미착용 — 손해배상 감액 다툼 + 보험 면책 무효 트랙
//
// 고유 존재 이유:
// 1. 이 페이지는 출퇴근 중 교통사고를 당한 근로자가 산재(요양·휴업·장해)와 자동차보험(대인·대물·자기신체) 두 트랙의 공제 관계 + 잔여 손해 청구 + 사업주 책임 4가지 분기를 정리하도록 돕는 페이지다.
// 2. 이 페이지는 음주측정을 거부했다가 면허 취소·1년 이상 징역 통보를 받은 운전자가 형사 트랙 + 행정처분(면허 취소) + 행정심판 90일 + 행정소송 4가지 트랙을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 자전거를 타다 사고를 낸·당한 운전자가 자전거에 자동차보험이 적용되지 않아 본인 부담분 + 일상생활배상특약 + 자전거보험 + 가해 자전거 운전자 직접 청구 4가지 트랙을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 공유 킥보드(PM) 사고가 난 운전자·피해자가 운전자 본인 책임 + 플랫폼(공유업체) 책임 + 정비·결함 책임 + 보험 적용 4가지 책임 분배 트랙을 정리하도록 돕는 페이지다.
// 5. 이 페이지는 동승자가 안전벨트를 미착용한 채 사고를 당했을 때 손해배상 감액 비율 다툼 + 보험사 면책 약관 무효 + 운전자 측 주장 + 동승자 측 반박 4가지 다툼 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch60Traffic: SpokePage[] = [
  // ─── 1. traffic-accident / traffic-accident-commute-workers-comp-auto-insurance-deduction-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-commute-workers-comp-auto-insurance-deduction-track',
    keyword: '출퇴근 교통사고 산재 자동차보험 공제 잔여 손해',
    questionKeyword: '출퇴근하다 교통사고를 당했어요. 산재로 받을지 자동차보험으로 받을지, 둘 다 받을 수 있는 건가요?',
    ctaKeyword: '출퇴근 산재 자동차보험 분기 점검',
    type: '정리형',
    perspective: 'victim',
    meta: {
      title: '출퇴근 교통사고 산재 vs 자동차보험 — 4단계 분기 | 로앤가이드',
      description:
        '출퇴근 중 교통사고가 산재와 자동차보험 어느 쪽으로 처리되는지, 공제 후 잔여 손해 청구까지 4가지 결합 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아침 출근길에 신호 대기 중 뒤차 추돌로 목·허리를 다쳐 두 달 치료 중인데, 회사는 \'산재 처리하라\'고 하고 자동차보험사는 \'산재 받으면 우리 쪽은 공제된다\'고 합니다. 어느 쪽이 유리한지, 둘 다 받을 수는 없는지 정리가 필요합니다." 출퇴근 중 교통사고는 ① 산재(산업재해보상보험법, 통상의 출퇴근 경로·교통수단이면 인정) ② 자동차보험(대인·대물·자기신체사고) ③ 두 트랙 공제·잔여 청구(보험급여 동일 항목 공제 후 과실상계) ④ 사업주 책임(공동불법행위 시 잔여 손해 청구) 4가지 결합 트랙으로 처리가 갈리는 영역입니다. 산재는 과실상계 없이 정률 보상이라는 장점, 자동차보험은 위자료·후유장해 산정 폭이 넓은 장점이 결합되는 영역이에요. 같은 항목 중복 수령은 공제되지만 \'한도가 더 큰 쪽\' + \'잔여 항목 보충\' 구조라 4단계 트랙 분리가 핵심입니다.</p>',
    sections: [
      {
        title: 'Q. 출퇴근 사고 4가지 결합 트랙 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 산재·자동차보험·공제·사업주 책임 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 산재 인정 (산업재해보상보험법 제37조 제1항 제3호)</strong> — \'통상의 출퇴근 경로·방법\' 또는 \'사업주 제공 교통수단\'이면 출퇴근 재해 인정 영역. 요양급여(치료비)·휴업급여(평균임금 70%)·장해급여 보상.</li>\n<li><strong>② 자동차보험 (대인·대물·자기신체)</strong> — 가해 차량 보험으로 치료비·휴업손해·위자료·후유장해 청구 영역. 본인 자기신체사고 특약·자동차보험 약관 한도 별도 검토.</li>\n<li><strong>③ 공제·잔여 청구 (공제 후 과실상계 방식)</strong> — 같은 항목 중복 수령 못 함. \'보험급여를 먼저 공제 후 과실상계\' 방식 적용 영역(2023다297141). 위자료·후유장해 차액은 자동차보험에서 보충 가능.</li>\n<li><strong>④ 사업주 책임 (공동불법행위 시)</strong> — 사업주의 안전 의무 위반(차량 정비·근무환경)이 사고 원인이면 사업주 상대 잔여 손해 청구 가능 영역. 산재 + 사업주 직접 청구 결합.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대법원 2023다297141 사건은 \'공제 후 과실상계\' 방식을 명확히 한 사례로, 산재 받았다고 자동차보험·민사 청구가 전부 차단되는 게 아니라 동일 항목만 공제되고 차액 청구는 가능한 영역으로 평가.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 출퇴근 사고 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 산재·자동차보험 동시 신청 → 공제 산정 → 잔여 청구 → 사업주 책임 검토 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 경찰 사건사고사실확인원·블랙박스·CCTV·진단서·치료비 영수증·평소 출퇴근 경로·교통수단 자료(대중교통·자가용·도보 모두 가능 영역).</li>\n<li><strong>2단계 — 산재·자동차보험 동시 신청 (사고 후 1~3년 내)</strong> — 산재: 근로복지공단 1588-0075, 요양급여신청서 + 사업주 의견. 자동차보험: 가해 차량 보험사 + 본인 자기신체사고. 두 트랙 동시 가능 영역.</li>\n<li><strong>3단계 — 공제·산정 (1~3개월)</strong> — 자동차보험사가 산재 수령 명세를 받아 동일 항목 공제. \'공제 후 과실상계\' 방식 적용. 위자료·일실수익 차액 별도 산정.</li>\n<li><strong>4단계 — 잔여 손해 청구 (가해자 또는 본인 자동차보험)</strong> — 산재로 보전 안 되는 위자료·후유장해 차액·정신적 피해는 자동차보험 또는 가해자 직접 청구 가능 영역.</li>\n<li><strong>5단계 — 사업주 책임 검토 (필요 시)</strong> — 사업주 안전 의무 위반(차량 정비 미흡·과로 운전 강요 등) 시 사업주 상대 민사 본안. 잔여 손해 추가 청구 트랙.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">출퇴근 산재·자동차보험·공제·잔여 청구 4가지 결합 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 산재 신청 자료 + 자동차보험 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>경찰 사건사고사실확인원·교통사고확인원</strong> — 사고 정황·인사사고 분류 명시.</li>\n<li><strong>본인·상대 블랙박스 영상·CCTV</strong> — 과실비율 산정 핵심.</li>\n<li><strong>출퇴근 경로·교통수단 자료</strong> — 통상 경로 입증(평소 출근 시각·경로·대중교통 카드 이력).</li>\n<li><strong>근로계약서·재직증명서·급여명세</strong> — 산재 휴업급여·자동차보험 일실수익 산정.</li>\n<li><strong>진단서·치료기록·MRI·CT</strong> — 손해 입증 핵심.</li>\n<li><strong>치료비 영수증·교통비·간병비</strong> — 적극적 손해 산정.</li>\n<li><strong>요양급여신청서 (산재용)</strong> — 근로복지공단 양식. comwel.or.kr.</li>\n<li><strong>후유장해 진단서 (필요 시)</strong> — 산재 장해등급 + 자동차보험 맥브라이드·AMA 별도 산정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자가용·대중교통·도보 모두 통상 출퇴근에 해당하는 영역. \'사적 일탈\'(개인 용무로 우회) 정도가 크면 산재 인정 다툼. 평소 경로·시간 자료가 분기 핵심. 산재는 과실상계 없는 정률 보상이라 본인 과실 큰 사고는 산재 우선이 유리한 사례 다수.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 보험사·근로복지공단 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"산재 받으면 자동차보험은 못 받는다" 주장 반박</strong> — 동일 항목만 공제되고 위자료·후유장해 차액은 자동차보험에서 보충 가능 영역(2023다297141 공제 후 과실상계).</li>\n<li><strong>"통상 경로 이탈로 산재 부정" 주장 검토</strong> — 일상적 일탈(편의점·식사 등)은 산재 인정 사례 다수. 사적 일탈 정도가 크면 다툼 영역. 평소 경로 자료 결합.</li>\n<li><strong>"본인 과실 커서 산재만 받으세요" 주장 분석</strong> — 산재는 과실상계 없는 정률 보상이라 본인 과실 큰 사고는 유리. 다만 위자료 차액은 자동차보험·민사 청구 보충 영역.</li>\n<li><strong>"사업주 책임 추가 청구 어렵다" 정황</strong> — 사업주 안전 의무 위반·과로 운전 강요 등 입증 필요. 입증 시 잔여 손해 추가 청구 가능 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>근로복지공단 1588-0075</strong> — 산재 신청·요양급여 안내.</li>\n<li><strong>1577-1290 교통사고환자지원센터</strong> — 의료·재활 상담.</li>\n<li><strong>금융감독원 1332</strong> — 자동차보험 분쟁조정.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 산재보험금 + 자동차보험 공제 후 과실상계',
        summary:
          '대법원 2023다297141 사건(대법원, 2025.06.26 선고)에서 법원은 산업재해보상보험법에 따라 보험급여를 받은 재해근로자가 산업재해보상보험 가입 사업주와 제3자의 공동불법행위를 원인으로 사업주를 상대로 손해배상을 청구할 때 그 손해 발생에 재해근로자의 과실이 경합된 경우 손해배상청구액 산정 방식을 \'공제 후 과실상계\'(보험급여와 같은 성질의 손해액에서 먼저 보험급여를 공제한 다음 과실상계)로 명확히 했습니다. 또한 제3자의 개입 없이 사업주의 불법행위로 근로자가 산업재해를 입었고 그 손해 발생에 재해근로자의 과실이 경합된 경우에도 마찬가지라고 판시했습니다. 이는 산재 받았다고 자동차보험·민사 청구가 전부 차단되는 게 아니라 동일 항목만 공제되고 차액(위자료·후유장해 가산)은 자동차보험·민사로 추가 청구 가능한 영역임을 보여주는 사례로 평가됩니다. 출퇴근 중 교통사고는 산재 + 자동차보험 + 잔여 청구 4가지 결합 트랙이 가능하다는 점에서 분기 정리의 핵심 판례입니다.',
        takeaway: '출퇴근 사고는 산재·자동차보험·공제·사업주 책임 4가지 결합 영역이라, 출퇴근 경로·근로계약·치료기록·산재 명세 자료를 정리하면 4단계 동시 검토가 가능한 영역입니다.',
      },
    ],
    faq: [
      {
        question: '출퇴근 중 자가용 운전 사고도 산재 인정되나요?',
        answer:
          '<strong>통상의 출퇴근 경로·방법이면 인정 영역입니다.</strong> 산업재해보상보험법 제37조 제1항 제3호. 자가용·대중교통·도보 모두 가능. 사적 일탈 정도가 크면 다툼.',
      },
      {
        question: '산재 받고도 자동차보험 추가 청구 가능한가요?',
        answer:
          '<strong>동일 항목 중복 못 받지만 차액은 가능 영역입니다.</strong> 위자료·후유장해 가산·정신적 피해는 자동차보험·민사 청구로 보충(2023다297141 공제 후 과실상계).',
      },
      {
        question: '본인 과실이 큰 사고면 산재가 유리한가요?',
        answer:
          '<strong>산재는 과실상계 없는 정률 보상이라 본인 과실 큰 사고는 산재 우선이 유리한 사례 다수 영역입니다.</strong> 자동차보험은 과실비율 만큼 감액되므로 비교 검토.',
      },
      {
        question: '사업주가 산재 처리를 거부하면 어떻게 하나요?',
        answer:
          '<strong>근로복지공단에 직접 신청 가능 영역입니다.</strong> 사업주 동의·의견 없이도 신청 가능. 1588-0075 또는 comwel.or.kr. 사업주 거부는 부당노동행위 분기.',
      },
      {
        question: '회식 후 귀가 사고도 출퇴근 산재인가요?',
        answer:
          '<strong>업무 관련성 + 통상 경로 결합 시 인정 사례 영역입니다.</strong> 회식 자체가 업무 연장으로 평가되면 산재 인정 가능. 다만 과음·사적 일탈 정도 따라 다툼.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '출퇴근 사고 이중 청구', href: '/guide/traffic-accident/traffic-accident-commute-work-injury-double-claim' },
      { label: '산재 vs 자동차보험 분기', href: '/guide/traffic-accident/traffic-accident-workers-comp-vs-auto-insurance' },
      { label: '배달 라이더 산재', href: '/guide/traffic-accident/traffic-accident-delivery-rider-workers-comp' },
      { label: '일실수익 자영업자 산정', href: '/guide/traffic-accident/traffic-accident-lost-wage-self-employed' },
      { label: '교통사고 형사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
    ],
  },

  // ─── 2. traffic-accident / traffic-accident-breath-test-refusal-license-revoke-admin-appeal-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-breath-test-refusal-license-revoke-admin-appeal-track',
    keyword: '음주측정 거부 면허 취소 행정심판 90일',
    questionKeyword: '음주측정을 거부했더니 면허 취소 통보를 받았어요. 행정심판으로 다툴 수 있나요?',
    ctaKeyword: '음주측정 거부 행정심판 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '음주측정 거부 면허 취소 — 행정심판 90일 4단계 트랙 | 로앤가이드',
      description:
        '음주측정을 거부해 면허 취소·1년 이상 징역 통보를 받았다면 형사 + 행정처분 + 행정심판 90일 + 행정소송 4가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"검문에서 \'음주가 의심된다\'며 측정을 요구받았는데 컨디션이 안 좋아 망설이다 결국 거부했어요. 며칠 뒤 면허 취소 처분 통지서가 왔고 형사 입건도 됐습니다. 변호사는 \'행정심판 90일 안에 청구해야 한다\'고 하는데, 어떤 순서로 대응해야 하나요?" 음주측정 거부는 ① 형사 처벌(도로교통법 제148조의2 제2항, 1년 이상 5년 이하 징역 또는 500~2,000만원 벌금) ② 행정처분(면허 취소, 도로교통법 제93조) ③ 행정심판(중앙행정심판위원회, 처분 통지일로부터 90일 내) ④ 행정소송(처분일로부터 90일 또는 행정심판 재결일로부터 90일) 4가지 트랙이 동시에 진행되는 영역입니다. 형사와 행정은 별도 트랙이라 형사 무죄·기소유예·약식이 나도 행정처분이 자동 취소되지는 않는 영역(다만 양형 다툼 자료로 활용). 측정 거부의 정당한 사유(고지 부재·측정 절차 위반 등)가 있으면 다툼 트랙이 열리는 사례입니다.</p>',
    sections: [
      {
        title: 'Q. 음주측정 거부 4가지 트랙 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 형사·행정처분·행정심판·행정소송 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 형사 처벌 (도로교통법 제148조의2 제2항)</strong> — 음주측정 거부는 1년 이상 5년 이하 징역 또는 500~2,000만원 벌금 영역. 측정 요구의 정당성·고지·기회 부여 여부가 다툼 포인트.</li>\n<li><strong>② 행정처분 (도로교통법 제93조 제1항 제3호)</strong> — 측정 거부 시 면허 취소 영역. 결격기간(취소 후 1년 이상). 처분일 + 효력 발생일 명시.</li>\n<li><strong>③ 행정심판 (중앙행정심판위원회, 90일)</strong> — 처분 통지를 안 날부터 90일 + 처분이 있던 날부터 180일 내 청구 영역. 무료. simpan.go.kr.</li>\n<li><strong>④ 행정소송 (90일)</strong> — 처분일 + 90일 또는 행정심판 재결일 + 90일 내 행정소송. 행정심판 거치지 않고 바로 소송 가능 영역(임의적 전치주의).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대법원 2021도14878 사건은 음주운전 1회 이상 처벌 전력 + 측정 거부 가중 처벌 조항에 헌재 위헌결정 → 소급 효력 상실 → 죄가 되지 않는 사안. 측정 거부 형사 처벌은 절차·고지·전력 요건 다툼 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 음주측정 거부 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 변호인 선임 → 행정심판 90일 청구 → 형사 절차 대응 → 행정소송 검토 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 측정 요구 정황(시각·장소·고지 내용)·체포 경위·진술서·블랙박스·차량 내부 영상.</li>\n<li><strong>2단계 — 변호인 선임 (가능한 한 빠르게)</strong> — 형사 + 행정심판 동시 대응 권장. 측정 절차 위반·고지 부재·정당 사유 검토.</li>\n<li><strong>3단계 — 행정심판 90일 청구 (처분 통지일 기준)</strong> — 중앙행정심판위원회. 청구서 + 증거자료 제출. 무료. 60~90일 심리. 인용·기각·각하 재결.</li>\n<li><strong>4단계 — 형사 절차 (송치 후 1~6개월)</strong> — 검찰 송치·기소·1심. 측정 거부 정당 사유·전력·합의 자료 결합. 양형 변론.</li>\n<li><strong>5단계 — 행정소송 (행정심판 후 또는 직접) </strong> — 처분 취소 소송. 90일 내. 행정심판 거친 경우 재결일 + 90일.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주측정 거부 형사·행정·행정심판·행정소송 4가지 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 형사 자료 + 행정심판 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>면허 취소 처분 통지서·결정문</strong> — 처분일·효력 발생일·결격기간 명시. 90일 기산점.</li>\n<li><strong>경찰 측정 요구 시각·장소·고지 자료</strong> — 정당한 측정 요구 여부·기회 부여 입증·반박.</li>\n<li><strong>본인 진술서·차량 블랙박스·내부 영상</strong> — 측정 거부 정황·정당 사유 입증.</li>\n<li><strong>운전면허 기록·과거 음주운전 전력</strong> — 가중 처벌 요건 다툼.</li>\n<li><strong>의료기록 (정당 사유 시)</strong> — 호흡기 질환 등 측정 불응 정당 사유.</li>\n<li><strong>행정심판 청구서·답변서</strong> — 중앙행심위 양식. simpan.go.kr.</li>\n<li><strong>탄원서·반성문·생업 자료</strong> — 형사 양형 자료. 변호인 자문 결합.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 음주측정 거부도 정당 사유(호흡기 질환·고지 부재·과도 압박 등)가 있으면 형사·행정 모두 다툼 트랙 영역. 다만 단순 \'무서워서\' \'억울해서\'는 정당 사유 인정 어려운 사례 다수. 변호인 자문 결합이 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 검찰·경찰 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"형사 무죄여도 행정처분은 별개" 정황</strong> — 형사·행정은 별도 트랙. 형사 무죄·기소유예 자료는 행정심판 양형 보강 자료로 활용 영역. 자동 취소는 안 됨.</li>\n<li><strong>"측정 요구 고지 부재" 정당 사유 검토</strong> — 경찰 측정 요구 시 \'거부 시 처벌\' 고지 의무. 고지 부재·기회 부여 미흡은 다툼 영역.</li>\n<li><strong>"과거 음주운전 전력으로 가중 처벌" 주장 반박</strong> — 헌재 위헌결정 영향 검토(2021도14878). 가중 처벌 조항 적용 시점·전력 자료 다툼.</li>\n<li><strong>"행정심판 청구 90일 지났다" 정황</strong> — 처분 통지를 \'안 날\'부터 90일이라 통지 미수령 입증 시 기산점 다툼. 처분 있던 날 + 180일 한도.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>중앙행정심판위원회 simpan.go.kr</strong> — 행정심판 청구·진행.</li>\n<li><strong>도로교통공단 1577-7800</strong> — 면허 취소·결격기간 안내.</li>\n<li><strong>1577-1290 교통사고환자지원센터</strong> — 사고 동반 시 의료 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주측정 거부 가중 처벌 조항 헌재 위헌결정',
        summary:
          '대법원 2021도14878 사건(대법원, 2022.06.09 선고)에서 법원은 도로교통법 위반(음주운전)죄로 1회 이상 형사처벌을 받은 전력이 있는 피고인이 술에 취한 상태로 자동차를 운전하였다고 인정할 만한 상당한 이유가 있어 음주측정을 요구받고도 이에 응하지 않았다는 도로교통법 위반(음주측정거부)의 공소사실에 대하여, 원심이 도로교통법 제148조의2 제1항, 제44조 제2항을 적용하여 유죄를 선고하였는데, 원심판결 선고 후 헌법재판소가 도로교통법 제148조의2 제1항 중 \'제44조 제1항을 1회 이상 위반한 사람으로서 다시 같은 조 제2항을 위반한 사람\'에 관한 부분에 대하여 위헌결정을 선고한 사안에서, 위 법률조항 부분은 소급하여 효력을 상실하였으므로 해당 법조를 적용하여 기소한 피고사건은 죄가 되지 않는 경우에 해당한다고 판시했습니다. 이 판례는 음주측정 거부 가중 처벌 조항이 위헌 결정으로 소급 효력 상실한 사안이라, 형사 트랙에서 절차·전력·고지 요건 다툼이 가능한 영역임을 보여주는 사례로 평가됩니다.',
        takeaway: '음주측정 거부는 형사·행정처분·행정심판·행정소송 4가지 결합 영역이라, 처분 통지서·측정 요구 정황·전력·정당 사유 자료를 정리하면 90일 행정심판 + 형사 양형 동시 검토가 가능한 영역입니다.',
      },
    ],
    faq: [
      {
        question: '음주측정 거부 형사 처벌이 얼마나 무거운가요?',
        answer:
          '<strong>도로교통법 제148조의2 제2항으로 1년 이상 5년 이하 징역 또는 500~2,000만원 벌금 영역입니다.</strong> 일반 음주운전(0.03~)보다 형량 무거움. 측정 절차·고지·정당 사유 다툼.',
      },
      {
        question: '면허 취소 처분에 대한 행정심판은 언제까지 청구하나요?',
        answer:
          '<strong>처분 통지를 안 날부터 90일 + 처분이 있던 날부터 180일 내 영역입니다.</strong> 중앙행정심판위원회. 무료. simpan.go.kr.',
      },
      {
        question: '형사에서 무죄받으면 면허 취소도 자동 취소되나요?',
        answer:
          '<strong>형사·행정은 별도 트랙이라 자동 취소는 아닌 영역입니다.</strong> 형사 무죄·기소유예 자료는 행정심판 양형 보강 자료로 활용. 별도 행정심판 청구 필요.',
      },
      {
        question: '음주측정 거부 정당 사유는 무엇인가요?',
        answer:
          '<strong>호흡기 질환·고지 부재·기회 부여 미흡 등이 다툼 사유 영역입니다.</strong> 단순 \'무서워서\' \'억울해서\'는 인정 어려운 사례 다수. 의료기록·블랙박스 결합 검토.',
      },
      {
        question: '행정심판 안 거치고 바로 행정소송 가능한가요?',
        answer:
          '<strong>임의적 전치주의라 직접 행정소송 가능 영역입니다.</strong> 처분일 + 90일 내. 다만 행정심판이 무료·신속이라 먼저 청구하는 사례 다수. 변호인 자문 결합.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '음주측정 위드마크', href: '/guide/traffic-accident/traffic-accident-breath-test-refusal-widmark-estimation' },
      { label: '음주 채혈 시점', href: '/guide/traffic-accident/traffic-accident-dui-blood-test-timing' },
      { label: '음주 + 피해자 혼합 과실', href: '/guide/traffic-accident/traffic-accident-dui-offender-victim-mixed-fault' },
      { label: '음주뺑소니 vs 단순뺑소니', href: '/guide/traffic-accident/traffic-accident-dui-hitandrun-vs-simple-hitandrun-sentence-track' },
      { label: '교통사고 형사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
    ],
  },

  // ─── 3. traffic-accident / traffic-accident-bicycle-rider-no-insurance-self-pay-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-bicycle-rider-no-insurance-self-pay-track',
    keyword: '자전거 운전자 무보험 본인 부담 일상생활배상',
    questionKeyword: '자전거를 타다 보행자를 다치게 했는데 자전거에는 보험이 없어요. 어떻게 해야 하나요?',
    ctaKeyword: '자전거 무보험 본인 부담 점검',
    type: '정리형',
    perspective: 'accused',
    meta: {
      title: '자전거 운전자 무보험 — 본인 부담 4단계 보충 트랙 | 로앤가이드',
      description:
        '자전거에 자동차보험이 없어 사고를 내면 본인 부담 + 일상생활배상특약 + 자전거보험 + 가해자 직접 청구 4가지 보충 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"퇴근길에 자전거로 인도를 지나가다 어르신과 부딪쳐 갈비뼈 골절을 입혔어요. 보행자가 합의금 1,500만원을 부르는데 자전거엔 보험이 없고 자동차보험은 적용 안 된다고 합니다. 본인 자산으로 다 부담해야 하는 건지, 다른 보충 방법은 없는지 정리가 필요해요." 자전거는 도로교통법상 \'차\'이지만 자동차관리법상 \'자동차\'가 아니라 자동차보험·정부보장사업 적용 안 되는 영역. ① 본인 부담(가해자 본인 자산·합의금 직접 지급) ② 일상생활배상특약(주택·자동차·실손 등에 부가, 한도 1억~3억) ③ 자전거보험(별도 가입 시) ④ 가해 자전거 운전자 직접 청구(피해자 측 트랙) 4가지 보충 트랙으로 처리가 갈리는 영역입니다. 일상생활배상특약은 가족 단위 가입이 일반적이라 본인 가입 외에 부모·배우자 약관 확인이 핵심. 자전거 사고는 보험 사각지대가 크니 사전 점검이 필요한 영역이에요.</p>',
    sections: [
      {
        title: 'Q. 자전거 무보험 4가지 보충 트랙 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 본인 부담·일상생활배상·자전거보험·직접 청구 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 본인 부담 (가해자 본인 자산)</strong> — 자전거에 자동차보험 미적용 영역(2017도13182 \'차\'와 \'자동차\' 구별). 합의금·치료비·민사 손해배상 본인 자산으로 지급.</li>\n<li><strong>② 일상생활배상특약 (주택·자동차·실손 부가)</strong> — 자전거·도보 등 일상생활 중 타인에게 입힌 인적·물적 손해 보장 영역. 한도 1억~3억. 가족 단위 가입 약관 다수.</li>\n<li><strong>③ 자전거보험 (별도 가입)</strong> — 자전거 전용 보험 가입 시 적용 영역. 한도·면책 약관 다양. 가해 + 피해 양방향 보장.</li>\n<li><strong>④ 가해 자전거 운전자 직접 청구 (피해자 측)</strong> — 가해자 무보험·미가입 시 자산 가압류·민사 본안. 합의금 산정 + 분할 변제 검토 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대법원 2024다289680 사건은 보험기간 중 이륜자동차·원동기장치자전거 사용 통지 의무 위반 시 보험계약 해지 가능성을 다룬 사례. 자전거(전기자전거 포함)도 보험 통지·약관 요건 다툼이 있는 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 자전거 무보험 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 본인·가족 보험 약관 확인 → 합의 시도 → 분할 변제 → 잔여 청구·민사 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 사고 정황·블랙박스·CCTV·진단서·치료비 영수증·자전거 손상·과실비율 자료.</li>\n<li><strong>2단계 — 본인·가족 보험 약관 확인 (1~3일)</strong> — 본인·배우자·부모 일상생활배상특약·자전거보험 가입 여부. 자동차보험·실손보험·주택보험 약관 부가 확인. 가족 단위 보장 사례 다수.</li>\n<li><strong>3단계 — 피해자 합의 시도 (가능한 한 빠르게)</strong> — 합의금 산정 + 처벌불원서. 인사사고 시 형법 업무상과실치상 트랙. 합의 + 처벌불원서로 \'공소권 없음\' 가능 영역.</li>\n<li><strong>4단계 — 분할 변제 + 보험 보충 (1~6개월)</strong> — 일상생활배상특약 한도 내 보장 후 부족분 본인 분할 변제. 변제계획서 결합.</li>\n<li><strong>5단계 — 잔여 청구·민사 본안 (피해자 측)</strong> — 가해자 자산 가압류·민사 본안. 위자료·후유장해 다툼 트랙.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">자전거 무보험·일상생활배상·자전거보험·직접 청구 4가지 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 보험 약관 자료 + 사고·합의 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>본인·가족 보험 약관·증권 (전체)</strong> — 일상생활배상특약·자전거보험 가입 여부·한도. 자동차보험·실손·주택 부가 약관 포함.</li>\n<li><strong>경찰 사건사고사실확인원·교통사고확인원</strong> — 사고 정황·인사사고 분류 명시.</li>\n<li><strong>본인·CCTV 영상·자전거 위치 사진</strong> — 사고 위치(인도/자전거도로/차도)·과실비율 자료.</li>\n<li><strong>피해자 진단서·치료비 영수증</strong> — 합의금·손해배상 산정.</li>\n<li><strong>합의서·처벌불원서</strong> — 인사사고 시 공소권 없음 분기 핵심.</li>\n<li><strong>본인 자산·소득 자료</strong> — 분할 변제 계획서 작성용.</li>\n<li><strong>변제계획서 (분할 변제 시)</strong> — 합의서 부속. 기간·금액·계좌 명시.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 일상생활배상특약은 본인 단독 가입 외에 부모·배우자 자동차보험·실손보험·주택보험에 부가된 사례 다수. 가족 단위로 모두 약관 확인 권장. 한도 내 자기부담금(20~30만원 수준) 사례. 자전거 라이딩 빈도 높은 사용자는 별도 자전거보험 가입 검토.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 보험사·피해자 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"자전거 사고는 자동차보험 적용 안 된다" 검토</strong> — 자전거는 \'자동차\' 아니라 자동차보험·정부보장사업 적용 안 되는 영역(2017도13182). 일상생활배상특약·자전거보험으로 보충 트랙.</li>\n<li><strong>"일상생활배상특약 가입 안 됐다" 통보</strong> — 본인·가족 자동차보험·실손·주택보험 약관 재확인. 기본·옵션 부가 사례 다수. 보험사 콜센터 직접 확인.</li>\n<li><strong>"피해자가 합의 거부" 대응</strong> — 변제공탁 가능. 인사사고 시 처벌불원서 없으면 형사 본안 진행. 분할 변제 + 합의 재시도 트랙.</li>\n<li><strong>"전기자전거는 자동차" 주장 검토</strong> — 도로교통법 제2조 \'자전거\' 정의 + 출력·속도 기준. 시속 25km 이하 일반 전기자전거는 자전거. 그 이상은 원동기장치자전거 분기 → 자동차보험 적용 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>금융감독원 1332</strong> — 일상생활배상특약·자전거보험 약관 분쟁.</li>\n<li><strong>도로교통공단 1577-7800</strong> — 자전거 법규·자동차 분류 안내.</li>\n<li><strong>1577-1290 교통사고환자지원센터</strong> — 의료·재활 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 이륜자동차·원동기장치자전거 사용 통지 의무',
        summary:
          '대법원 2024다289680 사건(대법원, 2025.08.14 선고)에서 법원은 보험약관에서 상법 제652조 제1항의 통지의무를 구체화하여 \'보험기간 중에 이륜자동차 또는 원동기장치자전거를 계속적으로 사용하게 된 경우에 지체 없이 회사에 알려야 하고, 이를 이행하지 않았을 때에는 회사가 계약을 해지할 수 있다.\'고 정한 경우 보험자 등의 명시·설명의무가 면제되는지 여부에 관해 \'원칙적 소극\'이라고 판시했습니다. 또한 보험자가 보험약관의 명시·설명의무를 위반하여 보험계약을 체결한 경우에도 상법 제652조 제1항의 적용까지 배제되지는 않는다고 판시했습니다. 이 판례는 자전거(전기자전거·원동기장치자전거 포함) 사용에 대한 보험 통지·약관 의무가 있고, 이를 위반하면 보험사가 계약 해지 가능한 영역임을 보여주는 사례로 평가됩니다. 자전거 운전자가 본인·가족 보험을 활용해 사고 보장을 받으려면 사용 통지·약관 확인이 사전 필수 영역입니다.',
        takeaway: '자전거 무보험 사고는 본인 부담·일상생활배상·자전거보험·직접 청구 4가지 보충 영역이라, 본인·가족 보험 약관·자전거 종류·합의 자료를 정리하면 4단계 동시 검토가 가능한 영역입니다.',
      },
    ],
    faq: [
      {
        question: '자전거 사고가 정부보장사업 대상 아닌가요?',
        answer:
          '<strong>정부보장사업은 \'자동차\' 사고만 대상이라 자전거 사고는 대상 아닌 영역입니다.</strong> 일상생활배상특약·자전거보험으로 보충 트랙. 본인·가족 약관 재확인.',
      },
      {
        question: '일상생활배상특약은 어디에 부가돼 있나요?',
        answer:
          '<strong>자동차보험·실손·주택보험 등에 기본 또는 옵션 부가 사례 다수 영역입니다.</strong> 본인 외에 가족(배우자·부모·자녀) 약관 확인 권장. 가족 단위 보장.',
      },
      {
        question: '전기자전거 사고도 자동차보험 적용 안 되나요?',
        answer:
          '<strong>시속 25km 이하 일반 전기자전거는 자전거 분류 영역이라 자동차보험 적용 안 됨.</strong> 그 이상 출력·속도면 원동기장치자전거 → 자동차보험 적용 가능.',
      },
      {
        question: '본인 부담 금액이 너무 커서 분할 변제 가능한가요?',
        answer:
          '<strong>합의서에 분할 변제계획 명시 가능 영역입니다.</strong> 기간·금액·계좌·연체 시 가산 조항. 변제계획서 부속. 변호인 자문 권장.',
      },
      {
        question: '피해자가 합의 거부하면 어떻게 되나요?',
        answer:
          '<strong>변제공탁 + 형사 본안 양형 변론 트랙 영역입니다.</strong> 인사사고 시 처벌불원서 없으면 공소 진행. 분할 변제 + 합의 재시도 + 양형 자료 결합.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '자전거 차대차 분기', href: '/guide/traffic-accident/traffic-accident-bicycle-vs-car-vs-pedestrian-fault-track-split' },
      { label: '자전거-보행자 충돌', href: '/guide/traffic-accident/traffic-accident-bicycle-hits-pedestrian-liability' },
      { label: '자전거 보상 가이드', href: '/guide/traffic-accident/traffic-accident-bicycle-compensation' },
      { label: '자전거-전동킥보드 책임', href: '/guide/traffic-accident/traffic-accident-bicycle-escooter-liability-range' },
      { label: '자전거 차도 우선', href: '/guide/traffic-accident/traffic-accident-bicycle-side-road-priority' },
    ],
  },

  // ─── 4. traffic-accident / traffic-accident-shared-pm-kickboard-platform-liability-split-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-shared-pm-kickboard-platform-liability-split-track',
    keyword: '공유 킥보드 PM 사고 플랫폼 정비 책임 분배',
    questionKeyword: '공유 킥보드를 타다 사고가 났는데 운전자만 책임지나요? 플랫폼이나 정비도 책임 있나요?',
    ctaKeyword: '공유 킥보드 책임 분배 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '공유 킥보드 사고 책임 — 4단계 분배 트랙 정리 | 로앤가이드',
      description:
        '공유 킥보드(PM) 사고가 운전자·플랫폼·정비·보험 4가지 트랙으로 어떻게 책임이 갈리는지 지금 확인하세요.',
    },
    intro:
      '<p>"라임·씽씽 같은 공유 킥보드를 타다 횡단보도에서 보행자를 다치게 했는데, 플랫폼은 \'운전자 본인 책임\'이라며 발을 빼고, 보험사는 \'PM은 자동차보험 대상 아님\'이라고 합니다. 그런데 같이 탄 사람은 \'킥보드 브레이크가 약했어, 정비 책임도 있어 보인다\'고 해요. 누가 어디까지 책임지는지 정리가 필요합니다." 공유 킥보드(PM, Personal Mobility) 사고는 ① 운전자 본인 책임(도로교통법상 \'원동기장치자전거\'에 해당, 면허·헬멧 의무) ② 플랫폼(공유업체) 책임(약관·이용약정·관리 의무) ③ 정비·결함 책임(킥보드 브레이크·바퀴·전원 결함 시 제조물책임법 분기) ④ 보험 적용(원동기장치자전거 보험·일상생활배상특약·플랫폼 단체보험) 4가지 트랙으로 책임이 분배되는 영역입니다. 2020년 PM 법령 정비 후 시속 25km 이하·정격출력 기준 등 자동차보험 적용 영역이 점점 넓어졌고, 음주운전·면허 없이 운전 시 형사·행정 처벌 강화. 다툼이 활발한 영역이에요.</p>',
    sections: [
      {
        title: 'Q. 공유 킥보드 4가지 책임 분배 트랙 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 운전자·플랫폼·정비·보험 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 운전자 본인 책임 (도로교통법 제2조 제19호)</strong> — PM은 \'원동기장치자전거\'에 해당. 운전면허(원동기·자동차 면허) 필요. 헬멧 의무. 음주·무면허 시 형사 처벌 영역(2020도16420).</li>\n<li><strong>② 플랫폼(공유업체) 책임</strong> — 이용약관·관리 의무·안전 정보 제공·기기 점검 책임 영역. 약관 면책 조항 효력 다툼 영역. 사용자 부주의 + 플랫폼 관리 결합.</li>\n<li><strong>③ 정비·결함 책임 (제조물책임법 + 플랫폼 정비 의무)</strong> — 킥보드 브레이크·바퀴·전원 결함 시 제조물책임 또는 플랫폼 정비 의무 위반 분기 영역. 사고 직후 기기 보존이 핵심.</li>\n<li><strong>④ 보험 적용 (PM 보험·일상생활배상·플랫폼 단체보험)</strong> — PM 자동차보험 적용 영역(2020년 법령 정비 후). 플랫폼 단체보험 약관 한도. 일상생활배상특약 보충.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대법원 2020도16420 사건은 전동킥보드 음주운전을 구 도로교통법 음주운전죄로 기소했다가 개정법으로 형이 가벼워진 사례. PM은 \'원동기장치자전거\'에 해당해 음주·무면허 처벌 + 자동차보험 적용 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 공유 킥보드 사고 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 플랫폼 통보 → 보험 청구 → 정비·결함 검토 → 형사·민사 분기 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 킥보드 일련번호·앱 이용 기록·CCTV·블랙박스·기기 상태 사진(브레이크·바퀴·전원). 사고 직후 기기 보존 요청.</li>\n<li><strong>2단계 — 플랫폼 통보 (24시간 내)</strong> — 라임·씽씽·지쿠 등 앱 내 사고 신고 + 고객센터. 단체보험 적용 검토. 약관 확인.</li>\n<li><strong>3단계 — 보험 청구 (3년 시효)</strong> — PM 자동차보험·플랫폼 단체보험·본인 일상생활배상특약 확인. 한도 비교 + 보충 청구 영역.</li>\n<li><strong>4단계 — 정비·결함 검토 (필요 시)</strong> — 브레이크·바퀴·전원 결함 의심 시 한국소비자원·국토부 신고. 제조물책임법 분기. 플랫폼 정비 의무 위반 다툼.</li>\n<li><strong>5단계 — 형사·민사 분기 (인사사고 시)</strong> — 음주·무면허 동반 시 형사 본안. 합의·처벌불원서로 양형 영향. 민사: 운전자·플랫폼 공동 청구 가능 영역.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">공유 킥보드 운전자·플랫폼·정비·보험 4가지 책임 분배 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 8가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고 정황 자료 + 보험·플랫폼 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>킥보드 일련번호·앱 이용 기록</strong> — 플랫폼·기기 식별. 앱 내 사고 신고 화면 캡처.</li>\n<li><strong>경찰 사건사고사실확인원·교통사고확인원</strong> — 사고 정황·인사사고·음주·면허 분류 명시.</li>\n<li><strong>현장 CCTV·블랙박스 영상</strong> — 사고 정황·과실비율 핵심.</li>\n<li><strong>킥보드 기기 상태 사진 (브레이크·바퀴·전원)</strong> — 정비·결함 책임 입증 핵심.</li>\n<li><strong>피해자 진단서·치료비 영수증</strong> — 합의금·손해배상 산정.</li>\n<li><strong>플랫폼 이용약관·단체보험 약관</strong> — 보장 한도·면책 조항 확인.</li>\n<li><strong>본인 일상생활배상특약 약관·증권</strong> — 보충 청구 영역.</li>\n<li><strong>합의서·처벌불원서</strong> — 인사사고 시 공소권 없음 분기.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: PM(공유 킥보드)은 2020년 법령 정비로 \'원동기장치자전거\' 명확화. 운전면허(원동기·자동차) 의무·헬멧 의무·음주 처벌 강화. 시속 25km·정격출력 기준 따라 보험 적용 분기. 사고 시 기기 일련번호로 플랫폼·정비 이력 추적이 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 플랫폼·보험사 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"플랫폼 약관에 본인 책임만 명시" 주장 검토</strong> — 약관 면책 조항도 \'정비 의무 위반·기기 결함\'까지 면책되지는 않는 영역. 실질적 관리·점검 의무 위반 시 다툼 가능.</li>\n<li><strong>"PM은 자동차보험 적용 안 된다" 주장 반박</strong> — 2020년 법령 정비 후 PM은 \'원동기장치자전거\'로 자동차보험·자손·자배 적용 영역. 플랫폼 단체보험 + 본인 보험 결합.</li>\n<li><strong>"음주 + PM은 정상" 주장 반박</strong> — 음주운전 처벌 영역(2020도16420). 면허 의무·헬멧 의무·음주 처벌 강화. 형사 + 행정처분(면허) 결합.</li>\n<li><strong>"기기 결함 입증 어렵다" 정황</strong> — 사고 직후 기기 사진·일련번호·플랫폼 정비 이력 자료 보존이 핵심. 한국소비자원·국토부 신고 결합.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>도로교통공단 1577-7800</strong> — PM 법규·면허·헬멧 안내.</li>\n<li><strong>금융감독원 1332</strong> — 보험금 분쟁조정.</li>\n<li><strong>1577-1290 교통사고환자지원센터</strong> — 의료·재활 상담.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전동킥보드 음주운전 처벌',
        summary:
          '대법원 2020도16420 사건(대법원, 2022.12.22 선고)에서 법원은 피고인이 도로교통법 위반(음주운전)죄로 처벌받은 전력이 있음에도 전동킥보드를 음주 상태로 운전한 행위에 대하여 구 도로교통법 위반(음주운전)죄로 기소된 사안에서, 재판 진행 중 개정 도로교통법(2020. 6. 9. 법률 제17371호로 개정)의 시행에 따라 법정형이 종전보다 가벼워진 사안에 관해 형법 제1조 제2항·형사소송법 제326조 제4호 적용 여부를 판시했습니다. 형벌법규 자체 또는 그로부터 수권 내지 위임을 받은 법령의 변경에 따라 범죄를 구성하지 아니하게 되거나 형이 가벼워진 경우 신법에 따라야 한다는 원칙을 적용했습니다. 이 판례는 전동킥보드(PM)가 \'원동기장치자전거\' 또는 \'자동차\'에 해당해 음주·무면허 처벌 대상이 되는 영역임을 보여주는 사례로 평가됩니다. 공유 킥보드 사고는 운전자 본인 책임 외에 플랫폼·정비·보험 분기까지 결합되는 트랙입니다.',
        takeaway: '공유 킥보드 사고는 운전자·플랫폼·정비·보험 4가지 책임 분배 영역이라, 기기 일련번호·앱 기록·CCTV·약관·진단서 자료를 정리하면 4단계 동시 검토가 가능한 영역입니다.',
      },
    ],
    faq: [
      {
        question: '공유 킥보드도 음주운전 처벌받나요?',
        answer:
          '<strong>PM은 \'원동기장치자전거\' 분류라 음주·무면허 처벌 영역입니다(2020도16420).</strong> 형사 + 면허 행정처분 결합. 헬멧 미착용도 과태료.',
      },
      {
        question: '플랫폼 단체보험으로 어디까지 보장되나요?',
        answer:
          '<strong>플랫폼별 약관 다양 영역입니다.</strong> 대인·대물 일정 한도 보장 사례 다수. 본인 일상생활배상특약·자동차보험 결합 보충. 약관 사전 확인 권장.',
      },
      {
        question: '브레이크 결함이 의심되면 어떻게 입증하나요?',
        answer:
          '<strong>사고 직후 기기 사진·일련번호·플랫폼 정비 이력 자료 보존이 핵심 영역입니다.</strong> 한국소비자원·국토부 신고. 제조물책임법 또는 플랫폼 정비 의무 위반 분기.',
      },
      {
        question: '피해자가 보행자면 합의금이 얼마나 되나요?',
        answer:
          '<strong>부상 정도·후유증·과실비율 종합 산정 영역입니다.</strong> 자동차보험 인사사고 기준과 유사. 위자료·일실수익·치료비 결합. 손해사정사 자문 검토.',
      },
      {
        question: '면허 없이 운전했으면 어떻게 되나요?',
        answer:
          '<strong>도로교통법 무면허 운전 처벌 영역입니다.</strong> 30만원 이하 벌금 또는 구류·과료. 인사사고 결합 시 형량 가중. 보험 면책·본인 부담 분기 영역.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '전동킥보드 보행자 사고', href: '/guide/traffic-accident/traffic-accident-electric-kickboard-pedestrian' },
      { label: '전동킥보드 충돌 대응', href: '/guide/traffic-accident/traffic-accident-electric-scooter-collision-response' },
      { label: '전동킥보드 책임범위', href: '/guide/traffic-accident/traffic-accident-electric-scooter-liability' },
      { label: '자전거-전동킥보드 책임', href: '/guide/traffic-accident/traffic-accident-bicycle-escooter-liability-range' },
      { label: '교통사고 형사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
    ],
  },

  // ─── 5. traffic-accident / traffic-accident-passenger-seatbelt-nonuse-reduction-defense-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-passenger-seatbelt-nonuse-reduction-defense-track',
    keyword: '동승자 안전벨트 미착용 손해배상 감액 다툼 면책',
    questionKeyword: '동승자가 안전벨트를 안 매고 있다 사고로 다쳤어요. 보험금이 깎인다는데 다툴 수 있나요?',
    ctaKeyword: '안전벨트 미착용 감액 다툼 점검',
    type: '정리형',
    perspective: 'victim',
    meta: {
      title: '동승자 안전벨트 미착용 — 손해배상 감액 4단계 다툼 | 로앤가이드',
      description:
        '동승자가 안전벨트 미착용으로 다쳤을 때 손해배상 감액 비율 + 보험 면책 약관 무효 + 운전자·동승자 분쟁 4가지 다툼 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"친구 차 뒷좌석에 타고 가다가 정면 추돌사고를 당해 척추 골절을 입었어요. 안전벨트를 매지 않은 상태였는데, 보험사는 \'미착용으로 손해 확대됐다\'며 보상금을 30~50% 깎겠다고 합니다. 약관에는 \'법령위반 면책\' 조항도 있고, 변호사는 \'면책 조항은 무효 가능성 있다\'고 합니다. 어떻게 다툴 수 있나요?" 동승자 안전벨트 미착용 사고는 ① 손해배상 감액 비율(기여 과실, 통상 5~30% 사례) ② 보험 면책 약관 무효(상법 제663조, 인보험에서 안전띠 미착용 면책 약관은 원칙적 무효) ③ 운전자 측 주장(동승자 자기 과실) vs 동승자 측 반박(부상 확대 인과관계) ④ 손해사정사 자문·소송 트랙 4가지 다툼 영역으로 처리가 갈리는 영역입니다. 안전벨트 미착용은 도로교통법 위반(과태료)이지만 인보험 면책 사유로 약관에 정해도 \'고의에 이르지 않는 한 무효\'(2012다204808). 감액 비율은 사고 정황·부상 부위·인과관계 종합 판단 영역입니다.</p>',
    sections: [
      {
        title: 'Q. 안전벨트 미착용 4가지 다툼 트랙 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 감액 비율·면책 약관 무효·인과관계·소송 4단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 손해배상 감액 비율 (기여 과실)</strong> — 안전벨트 미착용은 \'손해 확대 기여 과실\'로 5~30% 감액 사례 다수 영역. 사고 정황·부상 부위(머리·흉부 등)·운전자 과실 비교 종합 판단.</li>\n<li><strong>② 보험 면책 약관 무효 (상법 제663조)</strong> — 인보험(상해·사망)에서 안전띠 미착용 등 법령 위반을 면책 사유로 정한 약관은 \'고의에 이르지 않는 한 무효\'(2012다204808). 약관 면책 거부 가능 영역.</li>\n<li><strong>③ 운전자 측 주장 vs 동승자 측 반박</strong> — 운전자: \'동승자 자기 과실로 부상 확대\' 주장. 동승자: \'안전벨트 매도 동일 부상 가능\' 인과관계 다툼 영역.</li>\n<li><strong>④ 손해사정사 자문·소송 트랙</strong> — 감액 비율 다툼이 클 때 손해사정사 자문(15~50만원) + 분쟁조정·민사 본안 영역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대법원 2012다204808 사건은 안전띠 미착용 면책 약관 효력에 관해 \'원칙적 무효\'로 판시한 사례. 인보험은 고의·중과실 구별이 핵심이라, 안전벨트 미착용은 \'중과실\' 정도라도 면책 안 되는 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 안전벨트 다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 보존 → 보험 약관 분석 → 인과관계 다툼 → 손해사정 → 분쟁조정·소송 순서로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 보존 (즉시)</strong> — 사고 정황·차량 내 영상·블랙박스·진단서·MRI·부상 부위 사진. 차량 EDR(사고기록장치) 데이터.</li>\n<li><strong>2단계 — 보험 약관 분석 (1~3일)</strong> — 자동차보험 자기신체사고·동승자 특약·인보험 약관. 면책 조항 확인 + 무효 사유 검토.</li>\n<li><strong>3단계 — 인과관계 다툼 (1~3개월)</strong> — 안전벨트 매도 동일 부상 가능 여부 의학 자문. 사고 충격 강도·부상 부위·구조의학적 분석.</li>\n<li><strong>4단계 — 손해사정사 자문 (15~50만원)</strong> — 감액 비율 산정 + 위자료·일실수익·후유장해 종합 산정. 보험사 산정 vs 자문 비교.</li>\n<li><strong>5단계 — 분쟁조정·민사 본안 (이견 시)</strong> — 금융감독원 1332 무료 분쟁조정. 청구액 3,000만원 이하 소액심판. 위자료·후유장해 다툼 시 민사 본안.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 후유증 추가 청구 가능한지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">안전벨트 미착용 감액·면책 무효·인과관계·소송 4가지 다툼 트랙을 AI가 안내해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고·부상 자료 + 보험·약관 자료 두 갈래로 정리하면 효율적입니다.</strong></p>\n<ul>\n<li><strong>경찰 사건사고사실확인원·교통사고확인원</strong> — 사고 정황·안전벨트 착용 정황 명시.</li>\n<li><strong>차량 내 영상·블랙박스 (있다면)</strong> — 안전벨트 착용 직접 확인 자료. 미착용 다툼 핵심.</li>\n<li><strong>진단서·MRI·CT·부상 부위 사진</strong> — 안전벨트와 인과관계 분석 자료.</li>\n<li><strong>차량 EDR 데이터</strong> — 충격 속도·방향·강도. 한국교통안전공단 분석 가능.</li>\n<li><strong>자동차보험 약관·증권 (인보험·자손·동승자 특약)</strong> — 면책 조항 확인 + 무효 사유 검토.</li>\n<li><strong>의학 자문서 (안전벨트 인과관계)</strong> — 안전벨트 매도 동일 부상 가능 여부.</li>\n<li><strong>손해사정 의견서 (감액 비율 산정)</strong> — 손해사정사 자문(15~50만원).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 안전벨트 미착용 감액 비율은 사고 정황·부상 부위로 5~30% 사례 다수. 머리·흉부 부상이 안전벨트와 인과관계 큼. 다리·팔 부상은 안전벨트 효과 제한적이라 감액 다툼 트랙 영역. 의학 자문이 핵심.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 보험사·운전자 측 자주 주장과 무료 상담 기관을 정리하면 다음과 같습니다.</strong></p>\n<ul>\n<li><strong>"안전벨트 미착용으로 면책" 주장 반박</strong> — 인보험에서 안전띠 미착용 면책 약관은 원칙적 무효 영역(2012다204808). \'고의에 이르지 않는 한\' 면책 안 됨. 약관 무효 주장 가능.</li>\n<li><strong>"감액 50% 이상" 주장 검토</strong> — 통상 5~30% 사례 다수. 50% 이상은 부상 부위·인과관계 명확 입증 필요. 손해사정사 자문 결합.</li>\n<li><strong>"안전벨트 매도 동일 부상" 인과관계 반박</strong> — 의학 자문서로 부상 부위·충격 강도·안전벨트 효과 분석. 다리·팔 부상은 안전벨트 효과 제한적 영역.</li>\n<li><strong>"운전자 과실 + 동승자 미착용 결합" 정황</strong> — 운전자 과실 비율과 별개로 동승자 미착용은 \'기여 과실\' 영역. 종합 산정 트랙. 운전자 과실 큰 사고는 감액 비율 작게 판단 사례.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·구제 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong> — 무료 법률 상담.</li>\n<li><strong>금융감독원 1332</strong> — 보험금 분쟁조정.</li>\n<li><strong>1577-1290 교통사고환자지원센터</strong> — 의료·재활 상담·자문.</li>\n<li><strong>도로교통공단 1577-7800</strong> — 안전벨트 법규 안내.</li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 안전벨트 미착용 면책 약관 원칙적 무효',
        summary:
          '대법원 2012다204808 사건(대법원, 2014.09.04 선고)에서 법원은 피보험자의 사망이나 상해를 보험사고로 하는 보험계약에서 피보험자의 안전띠 미착용 등 법령위반행위를 보험자의 면책사유로 정한 약관조항의 효력에 관해 \'원칙적 무효\'라고 판시했습니다. 상법 제732조의2, 제739조, 제663조의 규정에 의하면 사망이나 상해를 보험사고로 하는 인보험에 관하여는 보험사고가 고의로 인하여 발생한 것이 아니라면 비록 중대한 과실에 의하여 생긴 것이라 하더라도 보험금을 지급할 의무가 있고, 위 조항들의 입법 취지 등에 비추어 보면, 피보험자의 사망이나 상해를 보험사고로 하는 보험계약에서는 보험사고 발생의 원인에 피보험자에게 과실이 존재하는 경우뿐만 아니라 보험사고 발생 시의 상황에 있어 피보험자에게 안전띠 미착용 등 법령위반의 사유가 존재하는 경우를 보험자의 면책사유로 약관에 정한 경우에도 그러한 법령위반행위가 보험사고의 발생원인으로서 고의에 의한 것이라고 평가될 정도에 이르지 아니하는 한 위 상법 규정들에 반하여 무효라고 판시했습니다. 안전벨트 미착용 면책 약관 무효라는 점에서 동승자 손해배상 감액 다툼의 핵심 판례로 평가됩니다.',
        takeaway: '안전벨트 미착용 사고는 감액 비율·면책 무효·인과관계·소송 4가지 다툼 영역이라, 차량 영상·EDR·진단서·약관 자료를 정리하면 4단계 동시 검토가 가능한 영역입니다.',
      },
    ],
    faq: [
      {
        question: '안전벨트 미착용으로 보험금 전액 면책되나요?',
        answer:
          '<strong>인보험에서 안전띠 미착용 면책 약관은 원칙적 무효 영역입니다(2012다204808).</strong> \'고의에 이르지 않는 한\' 면책 안 됨. 감액은 가능하지만 전액 면책은 어려움.',
      },
      {
        question: '감액 비율이 보통 얼마나 되나요?',
        answer:
          '<strong>사고 정황·부상 부위로 5~30% 사례 다수 영역입니다.</strong> 머리·흉부 부상은 안전벨트 인과관계 큼. 다리·팔 부상은 효과 제한적이라 감액 다툼 트랙.',
      },
      {
        question: '뒷좌석 동승자도 안전벨트 의무인가요?',
        answer:
          '<strong>전 좌석 안전벨트 의무 영역입니다(도로교통법 제50조).</strong> 위반 시 과태료 3만원. 다만 보험 면책·감액은 인과관계 종합 판단.',
      },
      {
        question: '운전자 과실이 90%이면 감액 비율이 작아지나요?',
        answer:
          '<strong>운전자 과실 큰 사고는 동승자 감액 비율 작게 판단 사례 영역입니다.</strong> 종합 산정 트랙. 다만 일률적으로 줄어드는 건 아니고 사례별 판단.',
      },
      {
        question: '의학 자문은 어디서 받나요?',
        answer:
          '<strong>병원 진료 의사 + 손해사정사·법의학자 자문 결합 영역입니다.</strong> 1577-1290 교통사고환자지원센터 상담. 자문료 15~50만원 사례. 자료가 다툼 핵심.',
      },
    ],
    cta: { text: '후유증 추가 청구 가능한지 AI로 점검하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '안전벨트 미착용 과실', href: '/guide/traffic-accident/traffic-accident-seatbelt-nonuse-fault' },
      { label: '동승자 부상 청구', href: '/guide/traffic-accident/traffic-accident-passenger-injury-claim' },
      { label: '운전자 과실 동승자', href: '/guide/traffic-accident/traffic-accident-passenger-injury-driver-fault' },
      { label: '동승자 자기과실 후유증', href: '/guide/traffic-accident/traffic-accident-passenger-self-fault-aftereffect-claim' },
      { label: '교통사고 형사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
    ],
  },
];
