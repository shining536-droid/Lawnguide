import { SpokePage } from '../spoke-pages';

// batch68 traffic-accident — 5개 (2026-05-18)
//
// 고유 존재 이유:
// 1. drunk-driver-companion-passenger-liability — 운전자가 음주임을 알고 동승한 사람의 동승자 책임 트랙. 호의동승·과실비율·동승자 자기책임 분배 트랙.
// 2. pm-kickboard-insurance-coverage-track — 개인형이동장치(PM) 사고 시 자동차보험·자전거보험·일상생활배상·PM 의무보험 적용 범위 분배 트랙.
// 3. unsignalized-intersection-right-angle-priority — 신호등·교통정리 없는 교차로 직각 충돌 우선권 다툼. 폭 넓은 도로 우선·선진입 양립 트랙.
// 4. infant-carseat-nonuse-settlement-reduction — 영유아 카시트 미착용 사고 합의금 감액 다툼. 보호자 의무·과실상계·보험 면책 무효 트랙.
// 5. vehicle-flood-damage-insurance-dispute — 자동차 침수 손해 보험금 분쟁. 도로운행중 vs 주차중·자차담보·태풍특약 분배 트랙.

export const spokesBatch68Traffic: SpokePage[] = [
  // ─── 1. traffic-accident-drunk-driver-companion-passenger-liability-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-drunk-driver-companion-passenger-liability-track',
    keyword: '음주운전 동승자 책임 분배',
    questionKeyword: '친구가 술 마신 걸 알고도 차에 동승했다가 사고로 다쳤어요. 동승자 본인 과실은 얼마나 잡히나요?',
    ctaKeyword: '음주 동승자 책임 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '음주운전 동승자 책임 — 5단계 과실 분배 트랙 | 로앤가이드',
      description:
        '친구가 음주한 걸 알고도 동승했다가 사고로 다친 상황이라면 호의동승·과실상계 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"회식 후 친구가 \\"30분만 운전하면 집까지 가니까\\"라며 운전대를 잡았고, 본인은 같이 술을 마신 사실을 알면서 조수석에 탔어요. 약 4km 주행 중 가드레일을 들이받는 단독 사고로 어깨 인대 파열 + 갈비뼈 골절 8주 진단을 받았어요. 운전 친구는 혈중알코올농도 0.08%로 음주운전 처벌 절차에 들어갔고, 본인 손해에 대해 자동차보험사는 \\"음주를 알고 동승했으므로 동승자 과실 30~40%\\"를 주장합니다. 본인은 \\"피해자인데 왜 이렇게 깎이느냐\\"고 답답한 상황.\\" 음주운전 동승자 사고는 양측 입장이 함께 검토되는 영역으로, ① 자동차손해배상보장법 운행자·동승자 책임 ② 민법 763조·396조 과실상계 ③ 도로교통법 음주운전 처벌 + 동승자 방조 ④ 자동차보험 동승자 약관 ⑤ 호의동승 감액 법리 5가지가 결합되는 영역. 동승자 과실은 음주 인지·만류 여부·동석 정황에 따라 평가되는 트랙이 일반적입니다. 대응은 ① 현장 자료 ② 음주 인지 입증 ③ 보험 청구 ④ 분쟁조정 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 음주 동승자 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 인지·과실·보험·치료·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 음주 인지 여부</strong> — 동승자가 운전자의 음주를 알았는지가 핵심.</li>\n<li><strong>② 동승자 과실상계</strong> — 음주 인지 + 만류 무·동석 정황 평가.</li>\n<li><strong>③ 호의동승 감액</strong> — 무상·친밀도·운행 이익 평가.</li>\n<li><strong>④ 자동차보험 대인배상Ⅱ·동승자 약관 점검</strong></li>\n<li><strong>⑤ 민사 손해배상 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 음주를 명확히 인지하고 동승했다면 동승자 본인 과실이 평가되는 영역. 다만 인지 자체가 다투어지거나 만류한 정황이 있으면 분배가 달라지는 트랙. 회식 영수증·메시지 기록·동석자 진술이 결정 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 블랙박스·CCTV·운전자 음주측정 결과·동석자 연락처.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주, 음주운전은 형사 별도 트랙)</strong></li>\n<li><strong>3단계 — 운전자 자동차보험 대인배상Ⅱ·자기신체사고 청구 검토</strong></li>\n<li><strong>4단계 — 손해보험협회 과실비율 분쟁조정 (1544-0114)</strong></li>\n<li><strong>5단계 — 민사 손해배상 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주 동승자 책임 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·치료·인지 갈래입니다.</strong></p>\n<ul>\n<li><strong>현장 블랙박스·CCTV·차량 위치 사진</strong></li>\n<li><strong>운전자 음주측정 결과·경찰 조사 결과</strong></li>\n<li><strong>교통사고사실확인원 (다중사고/단독사고)</strong></li>\n<li><strong>회식 영수증·동석자 진술서 (음주 인지 다툼)</strong></li>\n<li><strong>의료기록·진단서·치료비 영수증</strong></li>\n<li><strong>운전자 자동차보험증서·동승자 약관 사본</strong></li>\n<li><strong>본인 자동차보험 자기신체사고·실손보험 증서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 동승자 과실 평가는 \\"음주 사실을 알고 만류하지 않은 정황\\"이 결정 자료. 메시지 기록·녹취·동석자 진술 중 본인이 만류했음을 보여주는 자료가 있으면 동승자 과실이 분배 평가될 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>음주 인지 여부</strong> — 동석 영수증·시간대로 판단되는 영역.</li>\n<li><strong>만류 여부</strong> — 메시지·녹취가 결정 자료.</li>\n<li><strong>호의동승 감액</strong> — 무상·운행 이익 분배 평가.</li>\n<li><strong>운전자 책임 면제 여부</strong> — 동승자 과실로 인한 감액 한계.</li>\n<li><strong>3년 시효·형사 5년</strong></li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 1544-0114 (과실비율 분쟁조정)</strong></li>\n<li><strong>금융감독원 1332</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 동승자의 사고 관여와 책임 평가',
        summary:
          '대구지법 2006노2898(대구지법, 2007.03.28 선고) 영역에서 법원은 동승자가 교통사고 후 운전자와 함께 현장을 이탈한 사안에서 동승자의 형사상 책임은 가담 이후 범행에 대한 공동정범으로서의 책임에 국한된다고 본 사례 흐름이 있습니다. 동승자가 사고 발생 자체에 직접 관여하지 않았더라도 사고 전후의 행위(음주 인지·동석·도주 등)에 따라 별도 책임이 평가될 수 있는 영역입니다.',
        takeaway: '동승자는 사고 발생 자체와 사고 후 행위가 분리 평가되는 트랙. 음주 인지·만류·동석 정황 자료가 결정 사정.',
      },
    ],
    faq: [
      {
        question: '음주를 몰랐다고 주장하면 과실이 빠지나요?',
        answer:
          '<strong>회식 영수증·시간대·동석자 진술로 인지 가능성이 다투어지는 영역입니다.</strong> 알 수 없었다는 정황이 있으면 동승자 과실 감소.',
      },
      {
        question: '동승자 과실이 보통 몇 %인가요?',
        answer:
          '<strong>음주 인지가 명확하면 20~40% 영역에서 평가되는 사례 흐름이 자주 보입니다.</strong> 만류·짧은 거리·긴급성 사정에 따라 분배.',
      },
      {
        question: '운전 친구 보험으로 본인 치료비가 되나요?',
        answer:
          '<strong>운전자 자동차보험 대인배상Ⅱ로 청구되는 영역입니다.</strong> 다만 음주운전은 운전자 본인 자손·자기차 자기부담금 가중.',
      },
      {
        question: '본인 자동차보험 자기신체사고도 청구되나요?',
        answer:
          '<strong>본인 자기신체사고·자동차상해 특약·실손보험을 보조 청구 검토할 수 있는 트랙입니다.</strong> 약관 면책 조항 확인.',
      },
      {
        question: '형사 처벌은 동승자도 받나요?',
        answer:
          '<strong>음주운전 자체는 운전자 본인 처벌이 원칙입니다.</strong> 다만 적극적 권유·동석 음주·도주 가담 등 별도 사정이 있으면 별개 평가.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
      { label: '과실 비율', href: '/guide/traffic-accident/traffic-accident-fault-ratio' },
      { label: '보험 청구', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '교통사고사실확인원', href: '/guide/traffic-accident/traffic-accident-confirmation-document' },
      { label: '손해배상 청구', href: '/guide/traffic-accident/traffic-accident-damage-claim' },
    ],
  },

  // ─── 2. traffic-accident-pm-kickboard-insurance-coverage-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-pm-kickboard-insurance-coverage-track',
    keyword: '전동킥보드 PM 보험 적용 범위',
    questionKeyword: '공유 전동킥보드를 타다가 차에 부딪혔어요. 어떤 보험이 적용되나요?',
    ctaKeyword: 'PM 보험 적용 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '전동킥보드 PM 사고 보험 — 5단계 적용 범위 정리 | 로앤가이드',
      description:
        '공유 전동킥보드를 타다가 차에 부딪혀 부상을 입었다면 자배법·PM 의무보험·일상생활배상 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"퇴근길 공유 전동킥보드를 빌려 자전거도로를 주행하던 중, 우회전하던 승용차와 측면 충돌해 본인이 도로에 넘어졌어요. 손목 골절 + 무릎 인대 파열로 10주 진단을 받았는데, 본인은 \\"승용차 운전자 책임\\"이라 보지만 보험사는 \\"PM은 차마이고 자전거도로 통행 위반\\"이라며 본인 과실 30%를 잡습니다. 그리고 본인은 PM 의무보험에 따로 가입한 적이 없어 \\"치료비 어디서 받느냐\\"가 가장 막막한 상황.\\" 전동킥보드(PM) 사고는 ① 도로교통법 \\"개인형 이동장치\\" 분류(2020.12.10~ 자전거 등에 포함) ② 자배법 자동차 운행자 책임 (가해 차량) ③ PM 공유업체 의무보험·약관 ④ 본인·가족 일상생활배상책임보험 ⑤ 자동차보험 무보험차상해 특약 5가지가 결합되는 영역. 보행자 의제는 아니지만 자전거 등에 준하는 보호가 평가되는 트랙. 대응은 ① 현장 자료 ② 분류 ③ 보험 ④ 치료 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. PM 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 분류·과실·보험·치료·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① PM = 개인형 이동장치 (도로교통법 제2조)</strong> — 자전거 등에 포함.</li>\n<li><strong>② 가해 차량 자배법·자동차보험</strong> — 대인배상Ⅰ·Ⅱ 청구.</li>\n<li><strong>③ 공유업체 약관·의무보험</strong> — PM 의무보험은 2024.3.27~ 시행.</li>\n<li><strong>④ 본인·가족 일상생활배상책임보험</strong></li>\n<li><strong>⑤ 본인 자동차보험 무보험차상해·자손 (보유 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: PM은 자전거 등으로 분류되어 자전거도로 통행 가능 영역. 가해 차량 자배법 청구 + 본인 일상생활배상·자동차보험 무보험차 특약 병행 검토. 공유 PM 업체 약관에 \\"이용자 책임\\" 면책 조항 확인이 결정 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 블랙박스·CCTV·통행 위치·PM 손상 사진·헬멧 착용 여부.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주)</strong></li>\n<li><strong>3단계 — 가해 차량 자배법 청구·치료비 가지급금</strong></li>\n<li><strong>4단계 — 공유업체 약관·일상생활배상보험 확인</strong></li>\n<li><strong>5단계 — 민사 손해배상·과실비율 분쟁 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">PM 보험 적용 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·치료·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인 PM 이용 영수증·앱 이용 내역</strong></li>\n<li><strong>현장 블랙박스·CCTV·통행 위치 사진</strong></li>\n<li><strong>헬멧 착용 여부·면허 보유 자료</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>의료기록·진단서·치료비 영수증</strong></li>\n<li><strong>가해 차량 자동차보험증서·연락처</strong></li>\n<li><strong>본인·가족 일상생활배상보험증서·자동차보험증서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: PM 이용 시 안전모 미착용·무면허 운전은 본인 과실 가중 사정. 다만 가해 차량의 자배법 책임은 별개로 평가되는 영역. 본인 자동차보험에 \\"무보험차 상해\\" 특약이 있으면 PM 사고도 보장되는 사례가 있어 약관 확인이 결정 자료.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>PM 분류·통행 위치</strong> — 자전거도로·차도·인도별 평가.</li>\n<li><strong>안전모·면허·음주</strong> — 도로교통법 위반 가중 사정.</li>\n<li><strong>공유업체 약관 면책</strong> — 약관 규제법 검토.</li>\n<li><strong>가해 차량 자배법·일상생활배상 중복</strong></li>\n<li><strong>3년 시효</strong></li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>손해보험협회 1544-0114</strong></li>\n<li><strong>금융감독원 1332 (보험 분쟁)</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전동킥보드의 법적 분류 변화',
        summary:
          '대법원 2020도16420(대법원, 2022.12.22 선고) 영역에서 법원은 도로교통법 개정으로 전동킥보드와 같은 \'개인형 이동장치\'가 자동차 등 음주운전 처벌 대상에서 제외되고 자전거 등에 포함되도록 변경된 사정을 종합 평가해야 한다고 본 사례 흐름이 있습니다. PM은 2020.12.10 시행 도로교통법 개정에 따라 자전거 등에 준하는 분류로 평가되어 보험 적용·과실비율 평가도 자전거 사고와 유사한 영역으로 검토됩니다.',
        takeaway: 'PM은 자전거 등에 포함되는 트랙. 자전거 사고 과실 표준·자전거 운전자 보호 법리가 유추 평가되는 영역.',
      },
    ],
    faq: [
      {
        question: '공유 킥보드 업체가 책임을 안 진다고 해요',
        answer:
          '<strong>업체 약관의 면책 조항이 약관 규제법에 위반되면 무효로 평가될 수 있는 영역입니다.</strong> 의무보험 가입 여부 확인.',
      },
      {
        question: '본인 헬멧 미착용이면 책임 깎이나요?',
        answer:
          '<strong>도로교통법 50조 4항 위반이라 본인 과실 가중 사정으로 평가되는 영역입니다.</strong> 다만 가해 차량 책임이 사라지지는 않습니다.',
      },
      {
        question: '면허가 없으면 보험이 안 되나요?',
        answer:
          '<strong>본인 무면허 운전은 가중 사정이지만 가해 차량의 자배법 책임은 별개로 평가되는 영역입니다.</strong> 본인 일상생활배상은 약관 면책 가능.',
      },
      {
        question: '치료비 우선 처리는 어디서요?',
        answer:
          '<strong>가해 차량 자동차보험 대인배상Ⅰ·자배법 가지급금 청구가 1순위 트랙입니다.</strong> 본인 실손보험 병행 활용.',
      },
      {
        question: '본인 자동차보험 특약으로도 가능한가요?',
        answer:
          '<strong>무보험차 상해·자동차상해 특약 약관에 PM 사고가 포함된 사례가 있어 증서 확인이 결정 자료입니다.</strong>',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
      { label: '과실 비율', href: '/guide/traffic-accident/traffic-accident-fault-ratio' },
      { label: '보험 청구', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '교통사고사실확인원', href: '/guide/traffic-accident/traffic-accident-confirmation-document' },
      { label: '손해배상 청구', href: '/guide/traffic-accident/traffic-accident-damage-claim' },
    ],
  },

  // ─── 3. traffic-accident-unsignalized-intersection-right-angle-priority-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-unsignalized-intersection-right-angle-priority-track',
    keyword: '신호 없는 교차로 직각 충돌 우선권',
    questionKeyword: '신호등 없는 교차로에서 좁은 도로에서 먼저 진입했는데 큰 도로 차량과 충돌. 누가 우선인가요?',
    ctaKeyword: '직각 충돌 우선권 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '신호 없는 교차로 직각 충돌 — 5단계 우선권 다툼 | 로앤가이드',
      description:
        '신호등 없는 교차로에서 좁은 도로 선진입과 넓은 도로 후진입 차량이 충돌했다면 우선통행권 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"새벽 시간 동네 골목과 큰 도로가 만나는 교차로(신호등·교통정리 없음)에서, 본인이 좁은 골목길에서 먼저 진입해 교차로 중앙을 거의 통과하던 중, 큰 도로에서 후진입한 SUV와 측면 충돌해 본인 차량이 90도로 회전했어요. 본인은 \\"분명히 먼저 들어갔다\\"고 주장하고, SUV 측은 \\"내가 큰 도로니까 우선\\"이라며 본인 과실 70%를 주장합니다. 보험사 협의도 50:50 vs 30:70 사이에서 평행선.\\" 신호등·교통정리 없는 교차로 직각 충돌은 ① 도로교통법 제26조: 교통정리 없는 교차로 우선통행권 ② 도로 폭·선진입 ③ 좌·우 우선 ④ 손해보험협회 과실비율 인정기준 ⑤ 분쟁조정·민사 5가지가 결합되는 영역. 도로 폭이 다르면 폭 넓은 도로 우선이 평가되는 트랙이 일반적이지만 선진입 사정이 함께 분배되는 영역. 대응은 ① 현장 자료 ② 도로 폭 측정 ③ 보험 ④ 분쟁조정 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 직각 충돌 우선권 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 도로·선진입·보험·분쟁·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 도로 폭 비교 (도로교통법 26조 2항)</strong> — 폭 넓은 도로 우선.</li>\n<li><strong>② 선진입 인정 범위</strong> — 폭 차이 없을 때 적용.</li>\n<li><strong>③ 좌·우 우선 (폭 동일 시)</strong> — 우측 차량 우선.</li>\n<li><strong>④ 자동차보험·과실비율 인정기준</strong></li>\n<li><strong>⑤ 분쟁조정 (손해보험협회)·민사</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 좁은 도로에서 먼저 진입했더라도 폭이 넓은 도로 차량이 있으면 그 차량 우선이 평가되는 영역. 선진입은 폭이 동일하거나 폭 차이가 모호할 때 평가 사정. 도로 폭 측정·교차로 도면이 결정 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 블랙박스·교차로 사진·도로 폭·차량 충돌 각도.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주)</strong></li>\n<li><strong>3단계 — 자동차보험 청구·과실비율 협의</strong> — 손해보험협회 인정기준 적용.</li>\n<li><strong>4단계 — 분쟁조정 신청 (손해보험협회 1544-0114·금감원 1332)</strong></li>\n<li><strong>5단계 — 민사 손해배상 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">직각 충돌 우선권 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·도로·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인·상대 차량 블랙박스 (가능한 모두)</strong></li>\n<li><strong>교차로 도면·도로 폭 측정 자료</strong></li>\n<li><strong>차량 충돌 각도·파손 부위 사진</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>의료기록·진단서·치료비 영수증</strong></li>\n<li><strong>차량 수리 견적·자동차보험증서</strong></li>\n<li><strong>주변 CCTV·목격자 진술서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 도로 폭이 명확히 다르면 폭 넓은 도로 차량이 우선. 다만 동일·유사 폭이면 선진입·우측 우선이 함께 평가. 교차로 도면은 시청·구청 도로계획부에서 발급. 사고 직후 도로 폭을 휴대폰 줄자로 측정 사진 보존.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>도로 폭 비교</strong> — 도로교통법 26조 2항 우선통행권.</li>\n<li><strong>선진입 시점·범위</strong> — 폭 동일 시 평가.</li>\n<li><strong>좌·우 우선</strong> — 폭 동일 + 동시진입 시 우측 우선.</li>\n<li><strong>감속·전방 주시</strong> — 진입 차량 일반 주의의무.</li>\n<li><strong>3년 시효</strong></li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 1544-0114 (과실비율 분쟁조정)</strong></li>\n<li><strong>금융감독원 1332</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 교통정리 없는 교차로 우선통행권',
        summary:
          '대법원 94도1442(대법원, 1994.12.13 선고) 영역에서 법원은 교통정리가 행하여지지 않는 교차로에서 폭이 좁은 도로로부터 선진입한 차량과 폭이 넓은 도로로부터 후진입한 차량이 충돌한 경우 양자의 과실을 모두 평가해야 한다고 본 사례 흐름이 있습니다. 도로교통법 제26조 제2항에 따라 폭이 넓은 도로 차량 우선이 원칙이지만 선진입 차량의 일부 과실도 함께 평가되어 분배되는 영역입니다.',
        takeaway: '폭 넓은 도로 우선이 원칙이나 선진입 차량 과실도 함께 평가되는 분배 트랙. 폭 측정·블랙박스가 결정 자료.',
      },
    ],
    faq: [
      {
        question: '먼저 들어갔는데 왜 본인 과실이 더 많나요?',
        answer:
          '<strong>도로교통법 26조 2항은 폭 넓은 도로 우선을 정하고 있어 선진입만으로는 우선권이 인정되지 않는 영역입니다.</strong>',
      },
      {
        question: '두 도로 폭이 비슷하면요?',
        answer:
          '<strong>폭 차이가 모호하면 선진입 사정과 우측 우선이 함께 평가되는 트랙입니다.</strong> 측량 자료가 결정 사정.',
      },
      {
        question: '과실비율 50:50이 합리적인가요?',
        answer:
          '<strong>도로 폭·진입 시점·속도·우측 여부에 따라 30:70~50:50 영역에서 평가되는 사례 흐름이 있습니다.</strong> 손해보험협회 분쟁조정 검토.',
      },
      {
        question: '교차로 도면은 어디서 받나요?',
        answer:
          '<strong>관할 시청·구청 도로계획부서에서 발급되는 영역입니다.</strong> 사고 직후 휴대폰 측정 자료도 보조 자료로 활용.',
      },
      {
        question: '분쟁조정이 안 되면 어떻게 하나요?',
        answer:
          '<strong>금감원 1332 분쟁조정 또는 민사 손해배상 청구로 진행될 수 있는 영역입니다.</strong> 소액사건이면 6개월 내 처리.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
      { label: '과실 비율', href: '/guide/traffic-accident/traffic-accident-fault-ratio' },
      { label: '보험 청구', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '교통사고사실확인원', href: '/guide/traffic-accident/traffic-accident-confirmation-document' },
      { label: '손해배상 청구', href: '/guide/traffic-accident/traffic-accident-damage-claim' },
    ],
  },

  // ─── 4. traffic-accident-infant-carseat-nonuse-settlement-reduction-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-infant-carseat-nonuse-settlement-reduction-track',
    keyword: '영유아 카시트 미착용 합의금',
    questionKeyword: '아이를 카시트 없이 안고 탔다가 사고로 다쳤어요. 합의금이 깎이나요?',
    ctaKeyword: '카시트 미착용 합의 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '영유아 카시트 미착용 사고 — 5단계 합의금 감액 다툼 | 로앤가이드',
      description:
        '아이를 카시트 없이 안고 탔다가 사고로 다친 상황이라면 보호자 의무·과실상계 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"3살 아이를 카시트에 태우지 않고 본인이 뒷좌석에서 안고 있다가, 신호 대기 중 후방 차량에 추돌당해 아이가 머리를 부딪쳐 두피 열상 + 경미한 뇌진탕 진단을 받았어요. 가해 차량 보험사는 \\"100% 가해자 과실\\"은 인정하지만 \\"카시트 미착용은 보호자 과실이라 합의금 20~30% 감액\\"을 주장합니다. 본인은 \\"아이는 잘못이 없는데 왜 감액이냐\\"며 받아들이기 힘든 상황.\\" 영유아 카시트 미착용 사고는 ① 도로교통법 제50조 1항: 6세 미만 영유아 카시트 의무 ② 자배법·자동차보험 운행자 책임 ③ 보호자 과실의 피해자측 과실 평가 ④ 보험 약관 면책 조항 ⑤ 민사 손해배상 5가지가 결합되는 영역. 보호자 과실이 피해자측 과실로 평가되어 일정 감액되는 사례 흐름이 있지만, 부상 부위·인과관계에 따라 분배가 달라지는 트랙. 대응은 ① 현장 자료 ② 카시트 의무 ③ 보험 ④ 의료 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 카시트 미착용 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 의무·과실·보험·치료·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 카시트 의무 (도로교통법 50조 1항)</strong> — 6세 미만.</li>\n<li><strong>② 보호자 피해자측 과실</strong> — 부모와 일체 평가 법리.</li>\n<li><strong>③ 부상 부위·인과관계</strong> — 카시트 착용 시 부상 추정.</li>\n<li><strong>④ 자배법·자동차보험 대인배상Ⅰ·Ⅱ</strong></li>\n<li><strong>⑤ 민사 손해배상 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 카시트 미착용 자체는 도로교통법 50조 1항 위반이지만 영유아 본인 과실은 아닌 영역. 보호자 과실이 피해자측 과실로 평가되어 감액 사정이 되는 트랙. 다만 인보험·자배법 대인배상Ⅰ에서는 면책 조항이 무효로 평가될 수 있는 영역.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 블랙박스·아이 좌석 위치·부상 부위 사진.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주, 인사사고는 필수)</strong></li>\n<li><strong>3단계 — 가해 차량 자동차보험 대인배상·치료비 가지급금</strong></li>\n<li><strong>4단계 — 보호자 과실상계 협의·분쟁조정 (1544-0114)</strong></li>\n<li><strong>5단계 — 민사 손해배상 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 후유증 추가 청구 가능한지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">카시트 미착용 합의 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·치료·인지 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인 차량 블랙박스 (내부·외부)</strong></li>\n<li><strong>아이 좌석 위치·동승 자세 사진</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>아이 의료기록·진단서·MRI·CT (뇌진탕 시)</strong></li>\n<li><strong>치료비 영수증·향후 치료 의견서</strong></li>\n<li><strong>가해 차량 자동차보험증서·연락처</strong></li>\n<li><strong>본인 자동차보험 자손·실손보험 증서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 영유아 두부 외상은 시간이 지난 후 증상이 나타날 수 있어 합의 전 충분한 추적 관찰이 결정 자료. 6세 미만은 도로교통법상 카시트 의무이지만 카시트 착용 시 부상 정도 추정이 분배 사정. 합의 시 \\"후유장해 추가 청구 유보\\" 조항 필수.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>카시트 의무 위반</strong> — 도로교통법 50조 1항.</li>\n<li><strong>보호자 피해자측 과실</strong> — 부모·자녀 일체 평가.</li>\n<li><strong>인과관계</strong> — 카시트 착용 시 부상 추정.</li>\n<li><strong>면책 조항 무효</strong> — 인보험·자배법 평가.</li>\n<li><strong>3년 시효·후유증 추적</strong></li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 1544-0114</strong></li>\n<li><strong>금융감독원 1332 (보험 분쟁)</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 안전띠 미착용 면책 조항의 효력',
        summary:
          '대법원 2012다204808(대법원, 2014.09.04 선고) 영역에서 법원은 피보험자의 사망이나 상해를 보험사고로 하는 보험계약에서 피보험자의 안전띠 미착용 등 법령위반행위를 보험자의 면책사유로 정한 약관조항은 그 법령위반행위가 보험사고의 발생원인으로서 고의에 의한 것이라고 평가될 정도에 이르지 아니하는 한 상법 규정들에 반하여 원칙적으로 무효라고 본 사례 흐름이 있습니다. 카시트 미착용도 유사한 법령위반행위로 평가될 수 있는 영역으로 보험금 면책이 일률적으로 인정되지는 않는 트랙입니다.',
        takeaway: '안전띠·카시트 미착용 면책은 인보험에서 원칙적으로 무효 평가. 다만 민사 손해배상에서는 보호자 피해자측 과실 분배 사정.',
      },
    ],
    faq: [
      {
        question: '아이 본인은 잘못이 없는데 왜 감액되나요?',
        answer:
          '<strong>보호자 과실이 피해자측 과실로 평가되어 분배되는 영역입니다.</strong> 다만 분배 비율은 부상 부위·인과관계에 따라 다툼.',
      },
      {
        question: '감액이 보통 몇 %인가요?',
        answer:
          '<strong>부상 부위·카시트 착용 시 부상 추정에 따라 10~30% 영역에서 평가되는 사례 흐름이 자주 보입니다.</strong>',
      },
      {
        question: '인보험·자손보험은 카시트 미착용도 보장되나요?',
        answer:
          '<strong>안전띠 미착용 면책 조항은 원칙적으로 무효 평가되는 영역이라 카시트 미착용도 유사하게 검토될 수 있습니다.</strong>',
      },
      {
        question: '후유장해는 추가 청구되나요?',
        answer:
          '<strong>합의 시 \\"후유장해 추가 청구권 유보\\" 조항 명시 필수 영역입니다.</strong> 영유아 두부 외상은 장기 추적 필요.',
      },
      {
        question: '카시트 의무 위반 과태료도 있나요?',
        answer:
          '<strong>도로교통법 50조 1항 위반으로 6만 원 과태료가 부과되는 영역입니다.</strong> 합의금과는 별개.',
      },
    ],
    cta: { text: '후유증 추가 청구 가능한지 AI로 점검하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
      { label: '과실 비율', href: '/guide/traffic-accident/traffic-accident-fault-ratio' },
      { label: '보험 청구', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '교통사고사실확인원', href: '/guide/traffic-accident/traffic-accident-confirmation-document' },
      { label: '손해배상 청구', href: '/guide/traffic-accident/traffic-accident-damage-claim' },
    ],
  },

  // ─── 5. traffic-accident-vehicle-flood-damage-insurance-dispute-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-vehicle-flood-damage-insurance-dispute-track',
    keyword: '자동차 침수 보험금 분쟁',
    questionKeyword: '집중호우로 차량이 침수돼서 자차보험 청구했는데 보험사가 일부만 지급한다고 합니다.',
    ctaKeyword: '침수 보험금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '자동차 침수 보험금 분쟁 — 5단계 자차담보 적용 | 로앤가이드',
      description:
        '집중호우로 차량이 침수되어 자차보험 청구 중 일부 지급 분쟁이라면 자차담보·태풍특약 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"여름 집중호우로 지하주차장에 세워둔 본인 차량(시가 1,800만 원)이 보닛까지 침수돼 사실상 전손 진단을 받았어요. 자차보험에 가입돼 있었는데, 보험사는 \\"창문을 열어둬서 침수 피해가 가중됐다\\"며 30% 감액 + \\"태풍특약이 없어서 자기부담금 50만 원 외에 200만 원 추가 부담\\"을 요구합니다. 본인은 \\"전기차도 아닌데 왜 이렇게 깎이느냐\\"고 답답한 상황.\\" 자동차 침수 사고는 ① 자동차보험 자기차량손해(자차) 약관 ② 도로운행중 vs 주차중 침수 분류 ③ 자연재해 면책·예외 ④ 손해보험협회 분쟁조정 ⑤ 민사 5가지가 결합되는 영역. 자차담보에서 \\"도로운행중 침수\\"가 평가되면 약관상 보상되는 트랙이 일반적이지만 주차중 침수는 약관에 따라 분배가 달라지는 영역. 대응은 ① 현장 자료 ② 약관 ③ 청구 ④ 분쟁조정 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 자동차 침수 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 약관·과실·보험·분쟁·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 자차담보 약관</strong> — 침수 보상 범위·예외.</li>\n<li><strong>② 도로운행중 vs 주차중 분류</strong> — 운행 범위 판례.</li>\n<li><strong>③ 창문 개방·통제구역 진입 등 과실 사정</strong></li>\n<li><strong>④ 손해보험협회·금감원 분쟁조정</strong></li>\n<li><strong>⑤ 민사 보험금 청구·약관 무효 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자차담보는 \\"도로운행중 침수\\"가 평가되면 보상 범위 영역. 주차중 침수도 별도 특약·약관 해석으로 보장되는 사례 흐름이 있어 약관 전문 확인이 결정 자료. 창문 개방·과실은 분배 사정이지만 일률 감액은 약관 규제법 검토.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 침수 차량 사진·주차 위치·시간·기상청 호우 자료.</li>\n<li><strong>2단계 — 보험사 자차담보 청구·견적 의뢰 (즉시)</strong></li>\n<li><strong>3단계 — 약관·면책조항·태풍특약 확인</strong></li>\n<li><strong>4단계 — 손해보험협회·금감원 분쟁조정 (1544-0114·1332)</strong></li>\n<li><strong>5단계 — 민사 보험금 청구 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">침수 보험금 분쟁 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·차량·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>침수 차량 사진 (외부·내부·계기판·엔진룸)</strong></li>\n<li><strong>주차 위치·시간·통제구역 표시 사진</strong></li>\n<li><strong>기상청 호우경보·도로공사 통제 자료</strong></li>\n<li><strong>자동차보험증서·자차담보 약관 전문</strong></li>\n<li><strong>차량 수리·전손 견적서 (정비소·보험사)</strong></li>\n<li><strong>차량 등록증·구매 영수증·시가 자료</strong></li>\n<li><strong>침수 당시 CCTV·블랙박스 (가능 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 침수 차량은 시동 시도 금지 — 엔진 손상이 가중되어 자차 보상 범위가 축소될 수 있는 영역. 침수 직후 사진·영상으로 수위·시간·주차 위치를 명확히 기록. 보험사 견적과 정비소 견적이 다르면 양쪽 모두 분쟁조정 자료로 활용.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>도로운행중·주차중 분류</strong> — 자차 약관 해석.</li>\n<li><strong>창문 개방·과실</strong> — 일률 감액은 약관 규제법 검토.</li>\n<li><strong>통제구역 진입</strong> — 면책 사유 평가.</li>\n<li><strong>전손·분손 판정</strong> — 시가·수리비 비교.</li>\n<li><strong>3년 시효·자기부담금</strong></li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 1544-0114</strong></li>\n<li><strong>금융감독원 1332 (보험 분쟁조정)</strong></li>\n<li><strong>한국소비자원 1372</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 자동차보험 약관의 "도로운행중" 침수',
        summary:
          '대법원 99다20346(대법원, 1999.07.13 선고) 영역에서 법원은 업무용자동차보험약관 소정의 보험사고로서 \'도로운행중 차량의 침수로 인한 손해\'의 규정 중 \'도로운행중\'이라 함은 약관 소정의 도로 자체의 운행뿐만 아니라 도로에서의 회전 등을 위하여 필요한 범위 내에서 도로를 부득이 이탈한 운행도 포함된다고 본 사례 흐름이 있습니다. 자차담보 침수 보상 범위는 약관의 \'도로운행중\' 해석에 따라 확장 평가될 수 있는 영역입니다.',
        takeaway: '"도로운행중" 침수는 단순 도로 외에 회피 이탈도 포함 평가되는 트랙. 약관 해석이 보상 범위의 결정 자료.',
      },
    ],
    faq: [
      {
        question: '창문을 열어둔 게 본인 잘못 아닌가요?',
        answer:
          '<strong>일률 감액은 약관 규제법상 무효 평가될 수 있는 영역입니다.</strong> 침수와 인과관계가 명확해야 분배가 평가되는 트랙.',
      },
      {
        question: '태풍특약이 없으면 보장이 안 되나요?',
        answer:
          '<strong>자차담보 자체에 침수 보상이 포함된 사례 흐름이 있어 약관 전문 확인이 결정 자료입니다.</strong>',
      },
      {
        question: '전손과 분손 차이는요?',
        answer:
          '<strong>수리비가 차량 시가를 초과하면 전손, 그 미만이면 분손으로 평가되는 영역입니다.</strong> 시가 산정 자료가 결정 사정.',
      },
      {
        question: '시동 걸어도 되나요?',
        answer:
          '<strong>침수 차량은 시동 시도 금지 — 엔진 손상이 보상 범위 외로 평가될 수 있는 영역입니다.</strong>',
      },
      {
        question: '보험사가 일부만 지급하면요?',
        answer:
          '<strong>손해보험협회·금감원 분쟁조정 신청 → 민사 보험금 청구로 진행되는 트랙입니다.</strong> 3년 시효.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
      { label: '과실 비율', href: '/guide/traffic-accident/traffic-accident-fault-ratio' },
      { label: '보험 청구', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '교통사고사실확인원', href: '/guide/traffic-accident/traffic-accident-confirmation-document' },
      { label: '손해배상 청구', href: '/guide/traffic-accident/traffic-accident-damage-claim' },
    ],
  },
];
