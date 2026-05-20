import { SpokePage } from '../spoke-pages';

// batch71 traffic — 5개 (2026-05-21)
//
// 고유 존재 이유:
// 1. bicycle-rider-vs-pedestrian-crosswalk-claim-track — 자전거 운전자(가해)가 횡단보도 보행자(피해)와 충돌. 기존 bicycle-pedestrian-collision-fault(일반론)와 다른 "횡단보도 + 자전거 가해 + 피해자 청구 절차" 트랙.
// 2. night-rural-unlit-road-pedestrian-collision-track — 야간 가로등 없는 시골 도로 보행자 vs 차량 양쪽 과실 분쟁. "가시성·시인성·과실비율" 신규 영역.
// 3. cargo-truck-overload-blind-spot-cyclist-track — 적재량 초과 화물차 사각지대 자전거 우회전 사고. 기존 cargo·trailer류와 다른 "과적 + 사각지대 + 우회전 + 자전거" 트랙.
// 4. school-zone-30kmh-over-minor-injury-track — 어린이 보호구역 30km/h 위반 + 경상 사고. 기존 school-zone-30-over-minsik-law(비교 일반)와 다른 "민식이법 적용 요건 + 경상 분쟁 + 피해자 청구" 트랙.
// 5. tunnel-multi-vehicle-chain-collision-fault-track — 터널 내 연쇄 추돌. 기존 rear-end-100to0과 다른 "터널 + 다중 충돌 + 시야 제한 + 후방 추돌 면책 한계" 트랙.

export const spokesBatch71Traffic: SpokePage[] = [
  // ─── 1. traffic-accident-bicycle-rider-vs-pedestrian-crosswalk-claim-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-bicycle-rider-vs-pedestrian-crosswalk-claim-track',
    keyword: '자전거 횡단보도 보행자 충돌 청구',
    questionKeyword: '횡단보도를 건너던 중 자전거에 치였어요. 차가 아닌데 어떻게 청구해야 하나요?',
    ctaKeyword: '자전거 횡단보도 피해자 청구 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '자전거 횡단보도 보행자 충돌 — 5단계 피해자 청구 트랙 | 로앤가이드',
      description:
        '횡단보도를 건너던 중 자전거에 치여 다쳤는데 자전거 운전자가 "보험 없다"며 책임을 회피하는 상황이라면, 도로교통법 13조의2·자전거 사고 청구 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 출근길에 시내 횡단보도를 녹색 신호로 도보 횡단 중이었어요. 그런데 같은 횡단보도를 자전거(따릉이·일반 자전거)로 \\"내려서 끌지 않고\\" 주행하던 자전거 운전자가 본인을 미처 보지 못하고 측면 충돌, 본인은 손목 골절 + 머리 타박 6주 진단을 받았어요. 자전거 운전자는 \\"본인은 학생이고 보험이 없어요. 죄송한데 치료비만 일부 드릴게요\\"라며 합의를 미루고, 본인은 \\"자전거가 차가 아닌데 어디에 신고하고 무엇을 청구해야 하느냐\\"가 가장 막막한 상황. 가해자 측 부모는 \\"미성년자라 책임 없다\\"고도 주장합니다.\\" 횡단보도 자전거 사고는 ① 도로교통법 제2조: 자전거는 \\"차\\"로 분류 ② 도로교통법 제13조의2: 자전거 운전자 횡단보도 통과 시 내려서 끌고 가야 함 ③ 교특법 적용(인명피해 시) ④ 가해자 일상생활배상책임보험·자전거 보험 청구 ⑤ 민사 손해배상(미성년 시 부모 감독의무) 5가지가 결합되는 영역. 자전거는 \\"차\\"로 분류되고 횡단보도에서 내려서 끌지 않은 자전거 운전자가 보행자와 충돌하면 큰 비중 과실로 평가되는 트랙. 대응은 ① 현장 ② 신고 ③ 보험 ④ 합의 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 자전거 횡단보도 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·신고·보험·합의·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 자전거는 \\"차\\" (도로교통법 2조)</strong> — 교특법 적용 영역.</li>\n<li><strong>② 횡단보도 통과 시 내려서 끌기 의무 (도로교통법 13조의2)</strong></li>\n<li><strong>③ 가해자 일상생활배상책임보험·자전거 보험 확인</strong></li>\n<li><strong>④ 미성년 가해자 시 부모 감독의무 (민법 755조)</strong></li>\n<li><strong>⑤ 민사 손해배상 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자전거는 도로교통법상 \\"차\\"로 분류되고 횡단보도 통과 시 \\"내려서 끌고 가야\\" 보행자로 보호되는 트랙. 자전거 운전자가 탑승 상태로 횡단보도를 지나다 보행자를 충돌하면 큰 비중 과실로 평가되는 영역. 인명피해 시 교특법상 형사 처벌 대상이 되고, 가해자가 미성년이면 부모 감독의무로 청구가 검토되는 트랙.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 신고·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 가해자 인적사항·자전거 번호·CCTV·목격자 진술 확보.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 발급 (1주, 인명피해 필수)</strong></li>\n<li><strong>3단계 — 가해자 일상생활배상책임보험·자전거 보험·실손 확인</strong></li>\n<li><strong>4단계 — 합의 또는 손해보험협회 분쟁조정 (1544-0114)</strong></li>\n<li><strong>5단계 — 민사 손해배상 청구 (3년 시효, 미성년 시 부모 공동)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">자전거 횡단보도 피해자 청구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·진단·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>가해자 인적사항·연락처·자전거 번호 사진</strong></li>\n<li><strong>횡단보도·신호등 위치·CCTV 보존 요청서</strong></li>\n<li><strong>목격자 진술서·연락처</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>의료기록·진단서·치료비 영수증·물리치료 기록</strong></li>\n<li><strong>가해자 일상생활배상책임보험·자전거 보험 증서 사본</strong></li>\n<li><strong>본인 실손·자동차보험·신용카드 동승자 보험</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자전거 사고는 \\"자동차보험 같은 의무보험\\"이 없어서 가해자 개인 자산·보험으로 청구하는 트랙. 가해자의 일상생활배상책임보험(자전거 사고 포함 특약), 자전거 보험, 신용카드 자전거 보험 등이 청구원. 미성년 가해자 시 부모 명의 보험·감독의무 위반으로 함께 청구가 검토되는 영역. 인명피해라 교특법 적용도 평가 사정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>자전거 \\"차\\" 분류 (도로교통법 2조)</strong></li>\n<li><strong>내려서 끌기 의무 위반 (도로교통법 13조의2)</strong></li>\n<li><strong>가해자 보험 부재·미성년 사정</strong></li>\n<li><strong>부모 감독의무 위반 (민법 755조)</strong></li>\n<li><strong>3년 시효</strong></li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰청 112·관할 경찰서 교통사고 조사계</strong></li>\n<li><strong>손해보험협회 1544-0114</strong></li>\n<li><strong>금융감독원 1332</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 자전거 운행자의 보행자 보호 의무',
        summary:
          '대법원 2022다287284(대법원) 영역에서 법원은 차량 운행자의 보호 의무·과실 평가에 관해 판단한 사례 흐름이 있습니다. 도로교통법상 자전거는 \\"차\\"로 분류되어 동일한 운전자 주의의무가 평가되고, 특히 횡단보도 통과 시 내려서 끌어야 한다는 법 13조의2 의무가 평가되는 트랙. 자전거 운전자가 탑승 상태로 횡단보도를 지나다 보행자와 충돌하면 보행자 보호 의무 위반으로 큰 비중 과실이 평가되는 영역입니다.',
        takeaway: '자전거는 \\"차\\"로 횡단보도에서 내려서 끌어야 하는 의무. 위반 시 운전자 큰 비중 과실. 미성년 시 부모 감독의무 함께 검토.',
      },
    ],
    faq: [
      {
        question: '자전거인데도 교통사고 처리가 되나요?',
        answer:
          '<strong>자전거는 도로교통법상 \\"차\\"로 분류되어 인명피해 시 교특법 적용 영역입니다.</strong> 경찰 신고·교통사고사실확인원 발급 가능.',
      },
      {
        question: '가해자가 보험이 없다고 해요.',
        answer:
          '<strong>가해자의 일상생활배상책임보험·자전거 보험·신용카드 자전거 보험을 확인 청구할 수 있는 영역입니다.</strong> 모두 부재 시 개인 자산 청구.',
      },
      {
        question: '가해자가 미성년이면 어떻게 하나요?',
        answer:
          '<strong>민법 755조 부모 감독의무 위반으로 부모와 공동 청구가 검토되는 영역입니다.</strong> 부모 일상생활배상도 청구원.',
      },
      {
        question: '횡단보도에서 자전거 타고 가도 되나요?',
        answer:
          '<strong>도로교통법 13조의2에 따라 횡단보도 통과 시 자전거에서 내려서 끌고 가야 하는 영역입니다.</strong> 위반 시 큰 비중 과실 평가.',
      },
      {
        question: '치료비 외에 위자료도 받을 수 있나요?',
        answer:
          '<strong>치료비·일실수입·위자료·후유장해 등 항목별 청구가 가능한 영역입니다.</strong> 6주 진단 + 후유증은 별도 평가 사정.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 시작점', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
      { label: '보험 청구', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '자전거-보행자 과실', href: '/guide/traffic-accident/traffic-bicycle-pedestrian-collision-fault' },
      { label: '횡단보도 무단횡단', href: '/guide/traffic-accident/traffic-accident-pedestrian-cross-jaywalk' },
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
    ],
  },

  // ─── 2. traffic-accident-night-rural-unlit-road-pedestrian-collision-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-night-rural-unlit-road-pedestrian-collision-track',
    keyword: '야간 가로등 없는 도로 보행자 충돌 과실',
    questionKeyword: '야간 가로등 없는 시골 도로에서 보행자와 차량이 충돌했어요. 양쪽 과실이 어떻게 잡히나요?',
    ctaKeyword: '야간 시골 도로 과실비율 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '야간 가로등 없는 도로 보행자 충돌 — 5단계 과실분배 트랙 | 로앤가이드',
      description:
        '야간 가로등 없는 시골 도로에서 보행자와 차량이 충돌해 양쪽 과실 다툼이 큰 상황이라면, 도로교통법 20조·시인성·가시거리·과실비율 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"사고는 야간 11시쯤, 가로등이 거의 없는 편도 1차로 시골 국도에서 발생했어요. 차량 측은 시속 약 60km(제한 60km)로 주행 중이었고, 보행자는 짙은 색 외투를 입고 도로 우측 갓길에서 좌측으로 횡단 중이었어요. 차량 운전자는 \\"전조등 빛이 닿는 순간 갑자기 사람이 보였다\\"며 급제동했지만 충돌, 보행자는 다리 골절 + 두부 손상 10주 진단. 보행자 측은 \\"운전자가 전방주시·안전속도를 위반했다\\"고 주장하고 운전자 측은 \\"가로등 없는 도로에서 검은 옷 무단횡단은 예견 불가\\"라고 주장합니다. 양측 모두 과실비율이 가장 큰 다툼.\\" 야간 시골 도로 사고는 ① 도로교통법 제20조: 안전속도 ② 도로교통법 제27조: 보행자 보호 일반 ③ 도로교통법 제8조·10조: 보행자 횡단 방법(횡단보도·우측통행) ④ 가시거리·시인성 평가 ⑤ 손보협 과실비율 인정기준 5가지가 결합되는 영역. 가로등 없는 야간 도로는 가시거리가 짧아 보행자 시인성이 결정 사정. 무단횡단·짙은 의복은 보행자 과실로 분배되고 운전자 과속·전방주시 위반은 운전자 과실로 평가되는 트랙. 대응은 ① 현장 ② 가시거리 ③ 보험 ④ 분쟁조정 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 야간 시골 도로 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 안전속도·시인성·보험·분쟁·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 안전속도·전방주시 (도로교통법 20조)</strong> — 야간 감속 의무.</li>\n<li><strong>② 보행자 횡단 방법 (도로교통법 8·10조)</strong> — 횡단보도·우측통행.</li>\n<li><strong>③ 가시거리·시인성</strong> — 전조등·노면·의복 색상.</li>\n<li><strong>④ 손보협 과실비율 인정기준</strong></li>\n<li><strong>⑤ 분쟁조정·민사 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가로등 없는 야간 도로는 전조등 도달 거리(상향등 약 100m·하향등 약 30~40m) 안에서 보행자를 발견하고 회피해야 하는 평가 영역. 운전자 안전속도·전방주시가 핵심이지만, 보행자가 횡단보도 아닌 곳을 짙은 의복으로 무단횡단하면 분배 사정. 통상 운전자 50~70%, 보행자 30~50% 영역에서 평가되는 사례 흐름.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 블랙박스(야간 시야)·도로 사정(가로등·노면)·의복·EDR.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원·현장 검증 (1주)</strong></li>\n<li><strong>3단계 — 자동차보험 청구·과실비율 협의</strong></li>\n<li><strong>4단계 — 손해보험협회 과실비율 분쟁조정 (1544-0114)</strong></li>\n<li><strong>5단계 — 민사 손해배상 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">야간 시골 도로 과실분배 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·시야·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>차량 블랙박스 (야간 시야·전조등 도달 영상)</strong></li>\n<li><strong>EDR 데이터 (속도·브레이크 시점)</strong></li>\n<li><strong>도로 사정 (가로등 부재·노면·중앙선) 사진</strong></li>\n<li><strong>보행자 의복·소지품 사진 (시인성 평가)</strong></li>\n<li><strong>교통사고사실확인원·현장 검증 자료</strong></li>\n<li><strong>의료기록·진단서·치료비 영수증</strong></li>\n<li><strong>자동차보험증서·종합보험·이륜차 보험</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 야간 시골 도로 사고는 \\"전조등이 보행자에 닿은 시점부터 충돌까지의 거리·시간\\"이 결정 자료. 블랙박스에 전조등 도달 거리·보행자 등장 시점·운전자 제동 시점이 보존되어야 시인성·회피 가능성 평가 가능. 보행자 의복 색상·반사 자재 유무, 도로 가로등 위치도 사진으로 함께 확보하는 트랙.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>운전자 안전속도·전방주시 위반</strong></li>\n<li><strong>보행자 횡단 방법·의복 시인성</strong></li>\n<li><strong>가로등 부재·가시거리 사정</strong></li>\n<li><strong>전조등 상태·운전자 회피 가능성</strong></li>\n<li><strong>3년 시효</strong></li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 1544-0114 (과실비율 분쟁조정)</strong></li>\n<li><strong>금융감독원 1332</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 운전자 과속과 사고 발생 사이의 인과관계',
        summary:
          '대법원 2025도8137(대법원) 영역에서 법원은 야간 도로 사고에서 운전자 주의의무·인과관계가 평가된 사례 흐름이 있습니다. 차량 운전자가 제한속도를 지키며 진행하였더라면 충돌을 피할 수 있었다는 사정이 인정되어야 과속과 사고 발생 사이의 상당인과관계가 평가되는 트랙. 야간 가로등 없는 도로에서도 \\"전조등 도달 범위·안전속도\\" 안에서 보행자를 발견·회피할 수 있었는지가 결정 사정으로 평가되는 영역입니다. 보행자 무단횡단·시인성 부족은 분배 사정으로 함께 평가되는 트랙입니다.',
        takeaway: '야간 도로 사고는 운전자 안전속도·전방주시와 보행자 횡단방법·시인성이 함께 분배 평가되는 트랙. 블랙박스 야간 시야가 결정 자료.',
      },
    ],
    faq: [
      {
        question: '가로등 없는 도로면 운전자 책임이 줄어드나요?',
        answer:
          '<strong>가로등 부재는 운전자에게 더 큰 안전속도·전방주시 의무를 요구하는 평가 영역입니다.</strong> 다만 보행자 무단횡단도 분배 사정.',
      },
      {
        question: '보행자가 검은 옷을 입었다면 어떻게 평가되나요?',
        answer:
          '<strong>의복 시인성은 보행자 분배 사정으로 평가되는 영역입니다.</strong> 통상 5~15% 가산 평가되는 사례 흐름.',
      },
      {
        question: '제한속도를 지켰는데도 과실이 잡히나요?',
        answer:
          '<strong>안전속도는 \\"제한속도\\"가 아니라 \\"도로·기상·시야 사정에 맞는 속도\\"라 야간 도로는 감속 의무가 평가되는 영역입니다.</strong>',
      },
      {
        question: '보행자가 사망하면 형사 책임도 지나요?',
        answer:
          '<strong>인명피해 사망은 종합보험 가입과 무관하게 교특법 형사 처벌 대상으로 평가되는 영역입니다.</strong> 합의·반성문 양형 사정.',
      },
      {
        question: '본인 차량 블랙박스가 야간에 잘 안 보여요.',
        answer:
          '<strong>전조등 도달 거리·보행자 등장 시점이 명확하지 않으면 도로 CCTV·인근 차량 블랙박스를 신속히 보존 요청하는 트랙입니다.</strong>',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 시작점', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
      { label: '과실 비율', href: '/guide/traffic-accident/traffic-accident-fault-ratio' },
      { label: '보험 청구', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '야간 보행자', href: '/guide/traffic-accident/traffic-accident-night-no-light-pedestrian' },
      { label: '무단횡단', href: '/guide/traffic-accident/traffic-accident-pedestrian-cross-jaywalk' },
    ],
  },

  // ─── 3. traffic-accident-cargo-truck-overload-blind-spot-cyclist-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-cargo-truck-overload-blind-spot-cyclist-track',
    keyword: '화물차 과적 사각지대 자전거 우회전',
    questionKeyword: '신호 대기 중인 화물차 우측에서 자전거로 직진하다가 화물차 우회전에 휘말렸어요. 과적 + 사각지대 사고예요.',
    ctaKeyword: '화물차 사각지대 자전거 청구 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '화물차 과적 사각지대 자전거 우회전 사고 — 5단계 청구 트랙 | 로앤가이드',
      description:
        '적재량 초과 화물차의 우회전 사각지대에 자전거 운전자가 휘말려 다쳤는데 책임 분배가 막막하다면, 도로교통법·화물차 관리법·사각지대 의무 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 자전거로 시내 편도 2차로 도로의 우측 가장자리(자전거 전용 차로 인근)를 시속 약 20km로 직진 중이었어요. 신호 대기로 정차 중이던 25톤 화물차가 녹색 신호로 출발하면서 우회전을 시작했고, 본인은 화물차 운전석에서 보이지 않는 \\"우측 사각지대\\"에 있었어요. 화물차 운전자는 사이드미러·우회전 사각지대 확인 없이 우회전했고 본인은 화물차 우측 후륜에 휘말려 다리 골절 + 늑골 손상 12주 진단을 받았어요. 게다가 사고 후 확인 결과 화물차는 적재중량 약 30% 초과 과적 상태였어요. 화물차 운전자·운송회사 측은 \\"자전거가 사각지대에 있어서 어쩔 수 없었다\\"고 주장합니다.\\" 화물차 사각지대 사고는 ① 도로교통법 제25조: 우회전 시 안전 확인 의무 ② 도로교통법 제5조·39조: 적재량·과적 위반 ③ 화물자동차 운수사업법: 운송회사 사용자 책임 ④ 자배법 제3조: 운행자 책임 ⑤ 자동차보험·민사 손해배상 5가지가 결합되는 영역. 화물차 우회전 사각지대는 운전자의 안전 확인 의무 위반이 결정 사정. 과적은 별도 위반 + 사고 회피 가능성 저감 사정으로 운전자 큰 비중 과실 평가 트랙. 대응은 ① 현장 ② 과적 ③ 보험 ④ 회사 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 화물차 사각지대 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 우회전 의무·과적·보험·회사·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 우회전 안전 확인 의무 (도로교통법 25조)</strong> — 사각지대 보행자·자전거.</li>\n<li><strong>② 적재량·과적 위반 (도로교통법 39조)</strong></li>\n<li><strong>③ 화물차 운송회사 사용자 책임 (운수사업법)</strong></li>\n<li><strong>④ 자배법 운행자 책임·자동차보험</strong></li>\n<li><strong>⑤ 민사 손해배상 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대형 화물차 우회전은 우측 후방 사각지대가 넓어 \\"사이드미러·후방 카메라·서행·정지 확인\\" 안전 의무가 평가되는 영역. 과적 상태는 제동거리 연장·회피 가능성 저감으로 운전자 과실이 추가 가산되는 트랙. 자전거 운전자는 우측 가장자리 통행 의무를 지켰다면 통상 큰 비중 피해자로 평가되는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 블랙박스(자전거 헬멧캠)·CCTV·과적 적재량 사진·증인 확보.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 발급 (1주, 인명피해 필수)</strong></li>\n<li><strong>3단계 — 화물차 자동차보험·운송회사 시설보험 청구</strong></li>\n<li><strong>4단계 — 운송회사 사용자 책임 합의·분쟁조정 (1544-0114)</strong></li>\n<li><strong>5단계 — 민사 손해배상 (3년 시효)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">화물차 사각지대 자전거 청구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·과적·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>자전거 헬멧캠·블랙박스 (사고 직전·후방 확인)</strong></li>\n<li><strong>화물차 번호·운송회사·운전자 정보·차량 등록증</strong></li>\n<li><strong>화물차 적재중량·과적 자료 (영수증·중량 측정)</strong></li>\n<li><strong>교차로 CCTV·신호등 위치·차로 표시 사진</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>의료기록·진단서·치료비 영수증</strong></li>\n<li><strong>본인 자전거 보험·실손·일상생활배상</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 화물차 사고는 \\"화물차 자동차보험 + 운송회사 사용자 책임\\"의 이중 청구가 가능한 영역. 과적 증명은 별도 위반 사정 + 운전자 과실 가산 자료. 운송회사가 적재중량을 위반하도록 지시·방치했다면 회사 사용자 책임 + 운행자성 가중. 우측 가장자리 통행한 자전거는 도로교통법 13조의2 의무 준수 인정.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>우회전 안전 확인 의무 위반</strong></li>\n<li><strong>적재량 초과·과적</strong></li>\n<li><strong>운송회사 사용자 책임·자배법 운행자</strong></li>\n<li><strong>자전거 운전자 우측 통행 평가</strong></li>\n<li><strong>3년 시효</strong></li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국토교통부 화물운수 1599-0420 (과적 신고)</strong></li>\n<li><strong>손해보험협회 1544-0114</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 차량 운행자의 안전 의무와 사용자 책임',
        summary:
          '대법원 2022다225897(대법원) 영역에서 법원은 차량 운행 중 사고에서 운행자성·사용자 책임이 평가된 사례 흐름이 있습니다. 대형 화물차의 우회전 사각지대 사고에서는 운전자의 우회전 안전 확인 의무 위반 + 운송회사의 사용자 책임이 결합되는 트랙이고, 과적은 별도 위반 사정 + 제동거리·회피 가능성 저감 자료로 평가되는 영역. 자전거 운전자가 우측 가장자리 통행 의무를 지켰다면 통상 큰 비중 피해자로 평가되는 사례 흐름이 있습니다.',
        takeaway: '대형 화물차 우회전 사각지대는 운전자 + 운송회사 이중 책임. 과적은 가산 사정. 자전거 우측 통행 시 피해자 비중 큼.',
      },
    ],
    faq: [
      {
        question: '화물차가 사각지대였다면 면책되나요?',
        answer:
          '<strong>대형 차량 우회전 시 사각지대 확인은 운전자 안전 의무라 면책 사유로 평가되지 않는 영역입니다.</strong> 사이드미러·후방 카메라·서행 의무.',
      },
      {
        question: '과적이 운전자 과실에 어떻게 가산되나요?',
        answer:
          '<strong>과적은 도로교통법 39조 위반 + 제동거리 연장·회피 가능성 저감 사정으로 운전자 과실이 가산 평가되는 영역입니다.</strong>',
      },
      {
        question: '운송회사도 책임지나요?',
        answer:
          '<strong>화물자동차 운수사업법 + 민법 사용자 책임으로 운송회사도 함께 청구가 검토되는 영역입니다.</strong> 자배법 운행자성 평가.',
      },
      {
        question: '자전거 운전자도 과실이 잡히나요?',
        answer:
          '<strong>우측 가장자리 통행 의무를 지켰다면 통상 큰 비중 피해자로 평가되는 영역입니다.</strong> 다만 갓길 이탈·역주행 시 분배.',
      },
      {
        question: '과적은 어디에 신고하나요?',
        answer:
          '<strong>국토교통부 화물운수 1599-0420·관할 지자체에 별도 신고·과태료 처분이 가능한 영역입니다.</strong> 사고 후속 조치 트랙.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 시작점', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
      { label: '보험 청구', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '자전거-보행자 과실', href: '/guide/traffic-accident/traffic-bicycle-pedestrian-collision-fault' },
      { label: '과실 비율', href: '/guide/traffic-accident/traffic-accident-fault-ratio' },
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
    ],
  },

  // ─── 4. traffic-accident-school-zone-30kmh-over-minor-injury-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-school-zone-30kmh-over-minor-injury-track',
    keyword: '스쿨존 30km 위반 어린이 경상 민식이법',
    questionKeyword: '스쿨존 30km 제한 위반으로 어린이 경상 사고를 냈어요. 민식이법이 적용되나요?',
    ctaKeyword: '스쿨존 경상 사고 피해자 청구 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '스쿨존 30km 위반 어린이 경상 — 5단계 민식이법 적용 트랙 | 로앤가이드',
      description:
        '어린이 보호구역 30km/h 제한을 위반한 차량에 자녀가 경상을 입었는데 가해자 처벌·후유증 청구가 막막하다면, 민식이법 요건·후유증 청구 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인 자녀(8세, 초등 2학년)는 등굣길에 어린이 보호구역(스쿨존, 제한속도 30km/h) 내 횡단보도를 녹색 신호로 건너던 중, 시속 약 50km로 진행하던 차량에 측면 충돌, 다리 타박 + 무릎 인대 손상 4주 진단을 받았어요. 가해 차량 운전자는 \\"스쿨존인 줄 몰랐고 사고가 가볍다\\"며 \\"민식이법은 안 된다\\"고 주장합니다. 본인은 \\"4주 경상이라 민식이법이 적용되지 않는지, 후유증·운동 제약 청구는 어떻게 하는지\\"가 가장 막막한 상황. 가해자는 \\"치료비만 자동차보험으로 처리하자\\"며 합의를 미루고 있어요.\\" 스쿨존 경상 사고는 ① 도로교통법 제12조: 어린이 보호구역 + 30km/h 제한 ② 특정범죄가중처벌법 제5조의13(민식이법): 어린이 사망·상해 시 가중처벌 ③ 교특법 제3조 12대 중과실: 어린이보호구역 + 안전운전 위반 ④ 자동차보험·후유장해 청구 ⑤ 민사 손해배상(미성년 시효 특칙) 5가지가 결합되는 영역. 민식이법은 \\"어린이 + 보호구역 + 안전운전 의무 위반 + 상해\\" 요건이면 경상도 적용 가능한 트랙. 후유증·일실수입은 별도 청구 가능 영역. 대응은 ① 현장 ② 민식이법 ③ 보험 ④ 후유증 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 스쿨존 경상 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 스쿨존·민식이법·보험·후유증·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 어린이 보호구역·30km/h 제한 (도로교통법 12조)</strong></li>\n<li><strong>② 민식이법 (특가법 5조의13)</strong> — 어린이 + 안전운전 의무 위반 + 상해 요건.</li>\n<li><strong>③ 교특법 12대 중과실 (어린이보호구역)</strong></li>\n<li><strong>④ 자동차보험·후유장해 청구</strong></li>\n<li><strong>⑤ 미성년 민사 손해배상 (민법 766조 특칙)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 민식이법은 \\"어린이(13세 미만) + 보호구역 + 안전운전 의무 위반(제한속도·신호·횡단보도) + 상해 또는 사망\\" 요건이면 적용 평가되는 트랙. 경상(전치 4주 이하)도 \\"상해\\"에 해당하면 적용 검토 영역. 자녀가 미성년이라 후유증·일실수입은 성년 후 일실수입 산정 + 시효 특칙(민법 766조)이 평가되는 사정.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·형사·청구·후유증 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 블랙박스·스쿨존 표지·30km/h 노면 표시·CCTV·속도 자료.</li>\n<li><strong>2단계 — 경찰 신고·민식이법 적용 요청 (1주)</strong></li>\n<li><strong>3단계 — 가해자 자동차보험 대인배상·자녀 실손 청구</strong></li>\n<li><strong>4단계 — 후유증·후유장해 평가 (치료 종결 후 6개월)</strong></li>\n<li><strong>5단계 — 민사 손해배상 (미성년 시효 특칙)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 후유증 추가 청구 가능한지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">스쿨존 경상·민식이법 + 후유증 청구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·민식이법·후유증 갈래입니다.</strong></p>\n<ul>\n<li><strong>스쿨존 표지·30km/h 노면 표시·횡단보도 사진</strong></li>\n<li><strong>가해 차량 블랙박스·속도 자료(GPS·EDR)</strong></li>\n<li><strong>인근 CCTV·교차로 신호등 위치 사진</strong></li>\n<li><strong>교통사고사실확인원·경찰 조사 결과</strong></li>\n<li><strong>자녀 의료기록·진단서·치료비 영수증 (정형외과·소아과)</strong></li>\n<li><strong>후유장해 평가서 (치료 종결 6개월 후)</strong></li>\n<li><strong>자녀 학교·재학 증명·일실수입 산정 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 스쿨존 사고는 \\"속도 위반 자료\\"가 결정 자료. 블랙박스 GPS·EDR·과속 단속 카메라 자료가 30km/h 초과 입증의 핵심. 자녀가 미성년이라 4주 경상도 후유증·운동 제약은 성장기에 더 큰 영향이 평가되는 트랙. 치료 종결 6개월 후 후유장해 평가서로 추가 청구가 검토되는 영역.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>민식이법 적용 요건</strong> — 어린이·보호구역·안전운전·상해.</li>\n<li><strong>제한속도 위반 입증</strong> — GPS·EDR·CCTV.</li>\n<li><strong>경상 vs 상해 평가</strong> — 후유증 포함.</li>\n<li><strong>미성년 후유장해·일실수입 산정</strong></li>\n<li><strong>민법 766조 시효 특칙</strong></li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132 (미성년 피해 무료 상담)</strong></li>\n<li><strong>아동권리보장원 02-6454-8500</strong></li>\n<li><strong>경찰청 117 (어린이 안전 신고)</strong></li>\n<li><strong>손해보험협회 1544-0114</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 어린이보호구역 사고 운전자 책임',
        summary:
          '대법원 2025도4428(대법원) 영역에서 법원은 어린이보호구역·운전자 안전운전 의무 위반 사고에서 가중 처벌 요건이 평가된 사례 흐름이 있습니다. 민식이법(특가법 5조의13)은 \\"어린이(13세 미만) + 보호구역 + 안전운전 의무 위반 + 상해 또는 사망\\" 요건이 결합되면 적용 평가되는 트랙. 경상(전치 4주 이하)도 \\"상해\\"에 해당하면 적용이 검토되고, 미성년 피해자의 후유증·일실수입은 성장기·평균 임금을 반영해 산정되는 영역입니다.',
        takeaway: '민식이법은 경상도 적용 검토 영역. 미성년 후유증·일실수입은 성장기 반영 평가. 블랙박스·속도 자료 결정 사정.',
      },
    ],
    faq: [
      {
        question: '4주 경상도 민식이법이 적용되나요?',
        answer:
          '<strong>민식이법은 \\"상해\\" 요건이라 경상(4주 이하)도 적용이 검토되는 영역입니다.</strong> 사망 가중 + 상해 가중 형량이 다름.',
      },
      {
        question: '가해자가 "스쿨존인 줄 몰랐다"고 해요.',
        answer:
          '<strong>스쿨존 표지·노면 표시·시간대 사정으로 객관적 인식 가능성이 평가되는 영역이라 \\"몰랐다\\"는 면책 사유로 평가되지 않는 트랙입니다.</strong>',
      },
      {
        question: '후유증 추가 청구가 가능한가요?',
        answer:
          '<strong>치료 종결 6개월 후 후유장해 평가서로 추가 청구가 가능한 영역입니다.</strong> 자녀 성장기 후유증은 평가 비중 큼.',
      },
      {
        question: '미성년 자녀 일실수입은 어떻게 산정되나요?',
        answer:
          '<strong>성년 후 평균임금 기준으로 산정되는 영역입니다.</strong> 후유장해율·노동력 상실률에 따라 평가 사정.',
      },
      {
        question: '시효가 일반보다 긴가요?',
        answer:
          '<strong>민법 766조에 따라 미성년 손해배상은 성년 후 3년·총 10년 한도로 시효 특칙이 적용되는 영역입니다.</strong>',
      },
    ],
    cta: { text: '후유증 추가 청구 가능한지 AI로 점검하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 시작점', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
      { label: '스쿨존 민식이법', href: '/guide/traffic-accident/traffic-school-zone-30-over-minsik-law' },
      { label: '12대 중과실', href: '/guide/traffic-accident/traffic-accident-12-major-faults-settlement-impact' },
      { label: '어린이 보행자', href: '/guide/traffic-accident/traffic-accident-child-pedestrian-claim' },
      { label: '보험 청구', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
    ],
  },

  // ─── 5. traffic-accident-tunnel-multi-vehicle-chain-collision-fault-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-tunnel-multi-vehicle-chain-collision-fault-track',
    keyword: '터널 연쇄 추돌 과실 후방 추돌',
    questionKeyword: '터널 안에서 앞차가 급정거해 연쇄 추돌(5대 이상)이 났어요. 후방 추돌이라 본인 100% 과실인가요?',
    ctaKeyword: '터널 연쇄 추돌 과실 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '터널 연쇄 추돌 — 5단계 다중 충돌 과실분배 트랙 | 로앤가이드',
      description:
        '터널 내 5~10대 연쇄 추돌에 휘말려 후방 추돌로 본인 100% 과실 주장을 받는 상황이라면, 도로교통법·시야 제한·후방 추돌 면책 한계·과실분배 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"본인은 평일 오전 고속도로 터널(길이 약 1.2km)을 시속 약 90km(제한 100km)로 2차로 주행 중이었어요. 터널 중간 지점에서 약 200m 앞 1차로에서 사고가 발생해 차량들이 급정거했고, 본인 앞 차량이 약 10m 거리에서 급정거하면서 본인은 충돌, 본인 뒤로 약 5~7대의 차량이 차례로 추돌했어요. 본인은 약 8주 경추·요추 손상 진단 + 차량 전·후 전손. 보험사는 \\"후방 추돌은 안전거리 미확보로 본인 100% 과실\\"이라고 주장하지만, 본인은 \\"터널 안 시야 제한 + 앞차 급정거 + 다중 충돌이라 일률 적용은 부당하다\\"는 입장.\\" 터널 연쇄 추돌은 ① 도로교통법 제19조: 안전거리 ② 도로교통법 제17조: 터널 안 안전 운행 의무 ③ 도로교통법 제24조: 정차·서행 차량 추돌 ④ 손보협 과실비율 인정기준(다중 충돌·시야 제한) ⑤ 분쟁조정·민사 5가지가 결합되는 영역. 후방 추돌은 일반적으로 후방 차량 큰 비중 과실이지만 터널·시야 제한·앞차 무리한 급정거·다중 충돌 사정이 평가되면 분배 평가되는 트랙. 대응은 ① 현장 ② 시야 ③ 보험 ④ 분쟁조정 ⑤ 민사 5단계입니다.</p>',
    sections: [
      {
        title: 'Q. 터널 연쇄 추돌 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 안전거리·터널·다중충돌·보험·민사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 안전거리 의무 (도로교통법 19조)</strong> — 시속 100km 시 약 100m.</li>\n<li><strong>② 터널 안 안전 운행 의무 (도로교통법 17조)</strong></li>\n<li><strong>③ 다중 충돌 과실 분배</strong> — 손보협 인정기준.</li>\n<li><strong>④ 자동차보험·물피·인피 청구</strong></li>\n<li><strong>⑤ 분쟁조정·민사 (3년 시효)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 후방 추돌은 일반적으로 후방 차량 큰 비중 과실(예: 100:0 또는 80:20)이지만 \\"터널 + 시야 제한 + 앞차 무리한 급정거 + 다중 충돌\\" 사정이 평가되면 분배 사정. 특히 1차 충돌과 2·3·4차 충돌의 책임 분리·각 차량 과실 비율 산정이 핵심 트랙. 블랙박스·EDR·시야 자료가 결정 자료.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 처리 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·청구·민사 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 자료 보존 (즉시)</strong> — 블랙박스·EDR·터널 CCTV·교통상황 자료·차량 정렬 사진.</li>\n<li><strong>2단계 — 경찰 신고·교통사고사실확인원 (1주)</strong></li>\n<li><strong>3단계 — 자동차보험 청구·각 차량 과실비율 협의</strong></li>\n<li><strong>4단계 — 손해보험협회 과실비율 분쟁조정 (1544-0114)</strong></li>\n<li><strong>5단계 — 민사 손해배상 (3년 시효, 각 가해자 분담 청구)</strong></li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">터널 연쇄 추돌 과실분배 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 현장·시야·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인 차량 블랙박스 (사고 전·후 + 안전거리·시야)</strong></li>\n<li><strong>EDR 데이터 (속도·브레이크·충돌 시점)</strong></li>\n<li><strong>터널 내 CCTV·교통상황 정보(고속도로공사)</strong></li>\n<li><strong>차량 정렬·충돌 부위 사진</strong></li>\n<li><strong>교통사고사실확인원·각 차량 운전자 정보</strong></li>\n<li><strong>의료기록·진단서·치료비·물리치료 영수증</strong></li>\n<li><strong>본인 자동차보험증서·차량 수리·전손 평가서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 다중 충돌은 \\"각 차량의 충돌 순서·충돌 강도·과실 분배\\"가 핵심. 블랙박스·EDR이 본인 차량 진입 속도·제동 시점·앞차와의 거리를 보존하면 \\"안전거리 확보 노력\\" 인정 자료. 터널 CCTV·고속도로공사 교통정보가 시야 제한·앞차 급정거 사정 입증 자료. 1차 사고 가해자 책임 + 본인·후속 차량 책임 분리가 트랙.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>안전거리 확보 여부</strong> — 도로교통법 19조.</li>\n<li><strong>터널 시야 제한·앞차 급정거</strong></li>\n<li><strong>1차·2차·3차 충돌 책임 분리</strong></li>\n<li><strong>다중 충돌 과실분배 (손보협 인정기준)</strong></li>\n<li><strong>3년 시효</strong></li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>손해보험협회 1544-0114 (과실비율 분쟁조정)</strong></li>\n<li><strong>한국도로공사 1588-2504 (교통정보)</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>대한법률구조공단 132</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 추돌 사고 운행자 책임과 과실 평가',
        summary:
          '대법원 2024다301832(대법원) 영역에서 법원은 차량 추돌 사고에서 운행자성·과실 분배가 평가된 사례 흐름이 있습니다. 후방 추돌은 일반적으로 후방 차량 큰 비중 과실로 평가되지만, 터널·시야 제한·앞차 무리한 급정거·다중 충돌 사정이 있으면 분배가 평가되는 트랙. 특히 다중 충돌은 1차 사고 가해자 + 후속 차량 각각의 책임을 분리해 산정하는 영역입니다. 블랙박스·EDR·터널 CCTV가 결정 자료로 평가되는 사례 흐름입니다.',
        takeaway: '후방 추돌도 터널·시야·다중 충돌 사정으로 분배 평가 가능. 1차 사고 가해자와 후속 차량 책임 분리 트랙. EDR·CCTV 결정 자료.',
      },
    ],
    faq: [
      {
        question: '후방 추돌은 무조건 본인 100% 과실인가요?',
        answer:
          '<strong>일반적으로 후방 차량 큰 비중 과실이지만 터널·시야 제한·앞차 급정거 사정으로 분배 평가되는 영역입니다.</strong>',
      },
      {
        question: '터널에서는 어떻게 안전거리를 평가하나요?',
        answer:
          '<strong>터널은 시야 제한·조명 변화로 일반 도로보다 긴 안전거리·서행 의무가 평가되는 영역입니다.</strong> 도로교통법 17조.',
      },
      {
        question: '5~10대 다중 충돌이면 누구에게 청구하나요?',
        answer:
          '<strong>1차 사고 가해자 + 본인 차량 후방의 후속 추돌 차량 등 각각의 책임을 분리해 청구가 검토되는 영역입니다.</strong>',
      },
      {
        question: '본인 차량이 전손이면 위자료도 받을 수 있나요?',
        answer:
          '<strong>물피·인피·위자료·일실수입 등 항목별 청구가 가능한 영역입니다.</strong> 8주 진단 + 후유증은 별도 평가.',
      },
      {
        question: '과실비율 다툼은 어디서 하나요?',
        answer:
          '<strong>손해보험협회 1544-0114 분쟁조정·금감원 1332·민사 3년 시효 내 청구가 가능한 영역입니다.</strong>',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 시작점', href: '/guide/traffic-accident/traffic-accident-where-to-start' },
      { label: '보험 청구', href: '/guide/traffic-accident/traffic-accident-insurance-claim-comprehensive' },
      { label: '과실 비율', href: '/guide/traffic-accident/traffic-accident-fault-ratio' },
      { label: '후방 추돌 100:0', href: '/guide/traffic-accident/traffic-accident-rear-end-100to0' },
      { label: '교통사고 합의', href: '/guide/traffic-accident/traffic-accident-settlement-procedure' },
    ],
  },
];
