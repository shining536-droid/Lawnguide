import { SpokePage } from '../spoke-pages';

// batch52 traffic 5개: 자전거 이면도로 우선권 + 견인차 견인 중 2차 사고 + 불법주정차 충돌 책임 + 버스정류장 보행자 사고 + U턴 직진 충돌 과실
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 이면도로·생활도로에서 자전거-차량 충돌을 당한 피해자가 도로교통법 제13조의2·자전거이용활성화법으로 우선권·과실비율을 다투도록 돕는 페이지다.
// 2. 이 페이지는 견인차 견인 중 견인된 차량의 추돌·낙하로 2차 사고를 당한 피해자가 견인업체·운전자·도로공사 책임 분배를 정리하도록 돕는 페이지다.
// 3. 이 페이지는 불법주정차 차량과 충돌해 피해를 입은 운전자가 도로교통법 제32조·민법 제750조로 주정차 차량 책임을 청구하도록 돕는 페이지다.
// 4. 이 페이지는 버스정류장에서 승하차 중 사고를 당한 보행자가 버스공제·버스회사·도로관리청 책임 트랙을 정리하도록 돕는 페이지다.
// 5. 이 페이지는 U턴 차량과 직진 차량 충돌에서 과실비율을 다투려는 운전자가 도로교통법 제18조·U턴 표지 정황을 정리하도록 돕는 페이지다.

export const spokesBatch52Traffic: SpokePage[] = [
  // ─── 1. traffic-accident / bicycle-side-road-priority ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-bicycle-side-road-priority',
    keyword: '이면도로 자전거 충돌 과실',
    questionKeyword: '이면도로에서 자전거 타다 차에 부딪혔는데 본인 70% 과실이라고 하네요. 다툴 수 있나요?',
    ctaKeyword: '자전거 이면도로 사고 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '이면도로 자전거-차량 충돌 — 과실비율 다툼 5가지 쟁점 | 로앤가이드',
      description:
        '이면도로·생활도로에서 자전거-차량 충돌을 당한 피해자라면 도로교통법 제13조의2·자전거이용활성화법으로 우선권·과실비율을 어떻게 다툴지 지금 확인하세요.',
    },
    intro:
      '<p>"좁은 이면도로를 자전거로 천천히 가고 있었는데, 골목에서 갑자기 나온 차에 옆을 받혔어요. 보험사가 자전거 70% 과실이라며 합의금을 줄이려고 합니다." 이면도로·생활도로는 보행자·자전거 우선 영역이지만, 보험사가 자전거에 일률적으로 30~40% 과실을 매기는 관행이 있습니다. 도로교통법 제13조의2(자전거 통행)·제27조(보행자 보호)와 자전거이용활성화법은 자전거의 도로 사용권을 별도로 보장하고 있어, 사고 정황·도로 형태·차량 진행 방향에 따라 과실비율을 다툴 여지가 있어요. 사고 직후 블랙박스·CCTV 확보가 출발점입니다.</p>',
    sections: [
      {
        title: 'Q. 이면도로 자전거 사고 — 과실비율 결정 5가지 요소는?',
        content:
          '<p><strong style="color:#1e3a5f">A. 손해보험협회 과실비율분쟁심의위원회 기준상 아래 5가지 요소가 핵심 변수입니다.</strong></p>\n<ul>\n<li><strong>도로 형태</strong> — 이면도로(보행자·자전거 우선)·생활도로(시속 30km 이하)·일반도로 구분. 보행자 우선구역(어린이보호구역 등)은 차량 과실 가중.</li>\n<li><strong>차량 진행 방향</strong> — 골목·교차로 진입 차량은 좌우 시인 의무. 일시정지·서행 위반 시 과실 가중.</li>\n<li><strong>자전거 위치</strong> — 자전거 도로 통행·차도 우측 통행이 원칙(도로교통법 제13조의2). 인도 통행은 일부 과실.</li>\n<li><strong>속도 차이</strong> — 자전거 속도가 통상 시속 15~25km. 차량 속도 30km 초과 시 차량 과실 가중.</li>\n<li><strong>야간 점등·반사재 착용</strong> — 도로교통법 제50조에 따라 야간 자전거 전조등·후미등 의무. 미점등 시 자전거 과실 가산.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자전거에 일률 30~40% 과실 매기는 관행은 다툼 여지. 도로 형태·차량 부주의 정황에 따라 자전거 과실 0~20%까지 떨어진 사례 다수.</blockquote>',
      },
      {
        title: 'Q. 다툼 입증 — 어떤 자료가 결정적인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고 직후 블랙박스·CCTV·도로 형태 사진이 핵심 입증 수단입니다.</strong></p>\n<ul>\n<li><strong>차량 블랙박스 + 인근 차량 블랙박스</strong> — 진입 시점·속도·시인 거리 객관 입증. 인근 상가·주차차량 블랙박스도 적극 확보.</li>\n<li><strong>지자체 CCTV</strong> — 시·구청 교통지도과·관할 경찰서 통해 보전·열람 신청. 사고 후 14일 이내 신청 권장(보존 기간 한정).</li>\n<li><strong>도로 형태 사진</strong> — 이면도로 폭·일방통행·표지·차선·자전거 도로 유무·교차로 시인성 다각도 촬영.</li>\n<li><strong>경찰 사고사실확인원</strong> — 사고 시각·기상·도로 조건 정리.</li>\n<li><strong>자전거 점등·헬멧 착용 입증</strong> — 본인 자전거 사진(전조등·후미등·헬멧) + 사고 직후 의류·장비 사진.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">자전거 도로 형태·과실 항목·입증 자료를 AI가 케이스별로 정리해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 자전거 사고 입증 7가지',
        content:
          '<p><strong style="color:#1e3a5f">과실비율·인적 손해·물적 손해를 객관 입증할 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 차량·인근 차량 블랙박스</strong> — 사고 직전 진입 시점·속도·시인 거리.</li>\n<li><strong>2. 지자체 CCTV 보전 요청</strong> — 사고 후 14일 내 시·구청 교통지도과 또는 관할 경찰서.</li>\n<li><strong>3. 도로 형태 사진·동영상</strong> — 이면도로 폭·일방통행·표지·차선·자전거도로 유무 다각도.</li>\n<li><strong>4. 경찰 사고사실확인원</strong> — 경찰서 교통조사계 발급. 도로 상태·기상 정리.</li>\n<li><strong>5. 진단서·후유장해진단서</strong> — 인적 손해 입증. 후유장해는 증상 고정 시점 추가.</li>\n<li><strong>6. 자전거·의류·장비 사진</strong> — 자전거 파손·전조등 점등 상태·헬멧 착용 증빙.</li>\n<li><strong>7. 목격자 진술서</strong> — 진입 속도·시인성·일시정지 여부 등 정황 보강.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보험사 1차 산정 과실비율에 동의하지 않아도 됩니다. 손해보험협회 분쟁심의위원회(www.knia.or.kr) 무료 조정 또는 민사 소송으로 다툴 수 있어요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 이면도로 자전거 사고 보상 5단계',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·보험 청구·과실비율 협상·분쟁조정·민사 소송 단계로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 확보 (사고 직후~3일)</strong> — 블랙박스 별도 저장, 도로 형태 사진, CCTV 보전 요청, 경찰 사고사실확인원 발급.</li>\n<li><strong>2단계 — 보험 청구 (1~2주)</strong> — 차량 운전자의 자동차보험·자기신체사고·무보험차상해 청구. 자전거 보험·실손의료보험도 동시 청구.</li>\n<li><strong>3단계 — 과실비율 협상 (1~3개월)</strong> — 보험사 1차 산정 과실비율을 받고, 동의하지 않으면 추가 자료 제출 요청.</li>\n<li><strong>4단계 — 손해보험협회 분쟁조정 (필요 시 60일)</strong> — 손해보험협회 분쟁심의위원회 무료 신청. 합의 시 효력.</li>\n<li><strong>5단계 — 민사소송 (3년 시효)</strong> — 분쟁조정 미합의 시 운전자·보험사 상대로 손해배상 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 자전거 사고 과실비율 다툼, 단계별로 점검해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 보험약관 객관적·획일적 해석과 자전거·자기차량손해 보험금',
        summary:
          '대법원 2024다289680 사건(대법원, 2025.08.14 선고)에서 법원은 상법 제652조 제1항의 통지의무 위반을 이유로 보험계약을 해지할 수 있는지 문제된 사안에서, 보험약관 해석은 객관적·획일적 해석 원칙에 따라야 한다고 판시했습니다. 자전거 사고 과실비율·보험금 산정에서도 약관 문언과 객관 정황이 핵심이라, 자전거 통행·도로 형태·점등 상태 등 객관 자료를 일관되게 확보하는 것이 보험금·과실비율 다툼에 결정적이라는 시사점이 있습니다.',
        takeaway: '자전거-차량 사고 과실비율과 보험금 산정은 약관·객관 정황으로 결정되므로, 도로 형태·블랙박스·점등 상태 자료를 즉시 확보해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '보험사가 일률적으로 자전거 30% 과실이라고 하는데 다툴 수 있나요?',
        answer:
          '<strong>도로 형태·차량 부주의·자전거 통행 방식에 따라 자전거 과실 0~20%까지 떨어진 사례 다수입니다.</strong> 손해보험협회 분쟁심의위원회 무료 조정 신청으로 다툴 수 있어요.',
      },
      {
        question: '인도에서 자전거 타다가 사고 났는데 본인 과실 100%인가요?',
        answer:
          '<strong>인도 통행은 자전거에 일부 과실이 가산되지만 차량이 인도로 진입한 경우 차량 과실이 우선 평가됩니다.</strong> 어린이·노인 자전거 인도 통행은 도로교통법상 예외 인정.',
      },
      {
        question: '야간 자전거 점등을 안 했는데 환급이 줄어드나요?',
        answer:
          '<strong>도로교통법 제50조 위반으로 자전거 과실 5~15% 가산될 수 있습니다.</strong> 다만 차량의 전방주시 의무가 우선 평가되므로 점등 미준수가 100% 본인 과실 사유 안 됨.',
      },
      {
        question: '자전거 보험이 없는데 어떻게 청구하나요?',
        answer:
          '<strong>차량 운전자의 자동차보험 + 본인 실손의료보험 + 무보험차상해 특약으로 청구 가능합니다.</strong> 자전거 보험은 가입 권장. 시·구청 무료 자전거보험도 일부 지자체 운영.',
      },
      {
        question: '교통사고 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 손해보험협회 분쟁심의위원회(www.knia.or.kr)는 과실비율 무료 조정. 한국교통안전공단(1577-0990)도 사고 상담 운영.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '자전거-보행자 충돌 합의', href: '/guide/traffic-accident/traffic-accident-bicycle-pedestrian-settlement' },
      { label: '자전거-보행자 과실표', href: '/guide/traffic-accident/traffic-accident-bicycle-pedestrian-fault-table' },
      { label: '자전거-차량 손해 청구', href: '/guide/traffic-accident/traffic-accident-bicycle-car-damage' },
      { label: '교통사고 블랙박스 증거', href: '/guide/traffic-accident/traffic-accident-dashcam-evidence-guide' },
      { label: '쌍방과실 비율 다툼', href: '/guide/traffic-accident/traffic-accident-rear-end-fault-ratio' },
    ],
  },

  // ─── 2. traffic-accident / tow-truck-secondary-collision ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-tow-truck-secondary-collision',
    keyword: '견인차 견인 중 2차 사고',
    questionKeyword: '견인차에 견인되던 차가 떨어져 제 차를 덮쳤어요. 견인업체에 청구할 수 있나요?',
    ctaKeyword: '견인 중 2차 사고 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '견인차 견인 중 2차 사고 — 견인업체 책임 5단계 절차 | 로앤가이드',
      description:
        '견인 중 견인된 차량 추돌·낙하 2차 사고 피해자라면 견인업체·운전자·도로관리청 책임 분배 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"고속도로에서 정차 중 견인차에 매달려 가던 차량이 결박이 풀려 제 차를 덮쳤어요. 견인업체는 &lsquo;운전자 책임&rsquo;이라며 회피하고, 견인 운전자는 &lsquo;본사 보험으로 처리하라&rsquo;고만 합니다." 견인 중 2차 사고는 책임 주체가 ① 견인업체 ② 견인 운전자 ③ 견인된 차량 소유자 ④ 도로관리청으로 분산되어 청구 트랙이 복잡합니다. 자동차손해배상보장법 + 화물자동차운수사업법 + 민법 제756조(사용자책임)이 결합되며, 견인 결박 부실·과적·속도 위반이 입증되면 견인업체·운전자 책임이 우선 평가될 수 있어요.</p>',
    sections: [
      {
        title: '견인 중 2차 사고 — 책임 주체 4가지',
        content:
          '<p><strong style="color:#1e3a5f">사고 정황에 따라 책임 주체가 달라지며, 다수 청구가 동시에 가능합니다.</strong></p>\n<ul>\n<li><strong>견인업체(사용자책임)</strong> — 민법 제756조에 따라 견인 운전자의 사용자로서 손해배상. 견인업체 보험(영업용 책임보험·견인공제) 청구 가능.</li>\n<li><strong>견인 운전자(불법행위)</strong> — 결박 부실·과속·과적·전방주시 위반. 운전자 개인보험 + 회사 책임보험 동시 청구.</li>\n<li><strong>견인된 차량 소유자</strong> — 견인된 차량의 자동차보험으로 청구. 자배법 제3조 운행자책임 적용 검토.</li>\n<li><strong>도로관리청·국가</strong> — 도로 결함·표지 부실이 사고에 기여한 경우 국가배상법 제5조.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 화물자동차운수사업법 제56조에 따라 견인업체는 영업용 책임보험 가입 의무. 미가입·보험금 부족 시 운수사업법 위반 + 별도 청구 검토.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 2차 사고 보상 5단계',
        content:
          '<p><strong style="color:#1e3a5f">증거 보전·보험 청구·책임 분배·분쟁조정·민사소송 순서로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고 현장 자료 확보 (사고 직후~3일)</strong> — 본인·주변 차량 블랙박스, 견인 결박 상태 사진(파손·풀림 흔적), 견인차·견인된 차량 차량번호·소속 회사명, 경찰 사고사실확인원 발급.</li>\n<li><strong>2단계 — 본인 자동차보험·실손의료보험 우선 처리 (1~2주)</strong> — 자기차량손해·자기신체사고로 신속히 처리, 무보험차상해 특약 검토. 치료비·차량 수리비 우선 보장.</li>\n<li><strong>3단계 — 견인업체·운전자·차량 소유자 청구 (1~3개월)</strong> — 견인업체 책임보험·견인 운전자 개인보험·견인된 차량 자동차보험에 동시 청구. 책임 분배는 보험사들이 협의.</li>\n<li><strong>4단계 — 손해보험협회 분쟁조정 (필요 시 60일)</strong> — 보험사 간 책임 분배 미합의 시 손해보험협회 분쟁심의위원회 무료 조정.</li>\n<li><strong>5단계 — 민사소송 (3년 시효)</strong> — 견인업체·운전자·차량 소유자·도로관리청 공동 피고로 청구. 자기부담금 중 상대방 책임비율 부분도 별도 청구 가능(대법원 2022다287284).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 견인 중 2차 사고 책임 분배, AI로 정리해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 견인 사고 입증 7가지',
        content:
          '<p><strong style="color:#1e3a5f">책임 분배·손해 산정에 필요한 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 본인·주변 차량 블랙박스</strong> — 사고 직전 견인 상태·결박 풀림 시점·차량 낙하 순간.</li>\n<li><strong>2. 견인 결박 상태 사진</strong> — 결박 부위·줄·체인 상태 다각도 촬영. 파손·노후 흔적 강조.</li>\n<li><strong>3. 차량번호·소속 정보</strong> — 견인차·견인된 차량 번호판, 견인업체 명칭·연락처, 도로공사 안내 표지.</li>\n<li><strong>4. 경찰 사고사실확인원</strong> — 사고 시각·기상·도로 조건 정리. 견인 운전자 음주·과속 여부 포함.</li>\n<li><strong>5. 진단서·후유장해진단서</strong> — 인적 손해 입증. 후유장해는 증상 고정 시점 추가.</li>\n<li><strong>6. 차량 견적서·수리비 영수증</strong> — 물적 손해 산정.</li>\n<li><strong>7. 견인업체 보험증권 사본</strong> — 영업용 책임보험·견인공제 가입 정보(견인업체에 요청, 미협조 시 보험사 직접 조회).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 견인된 차량 소유자·견인업체·견인 운전자 보험을 동시에 청구하면 책임 분배는 보험사들이 협의합니다. 본인이 한 곳만 청구하면 회수 지연 위험.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 견인 중 2차 사고에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"견인된 차량 운전자에게 청구하라"는 견인업체 회피</strong> — 견인업체는 사용자책임으로 1차 책임 주체. 회피 응답 무관하게 보험사 직접 청구 가능.</li>\n<li><strong>견인 운전자 개인보험만 안내</strong> — 영업용 책임보험·견인공제도 별도 청구 가능. 보험증권 요청.</li>\n<li><strong>"본인 자차로 처리하면 끝"</strong> — 자기부담금 중 상대방 책임비율 부분은 견인업체·운전자에 별도 청구 가능(대법원 2022다287284).</li>\n<li><strong>도로관리청 책임 누락</strong> — 도로 결함·표지 부실 정황이 있으면 국가배상 청구도 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 손해보험협회 분쟁심의위원회 www.knia.or.kr / 한국교통안전공단 1577-0990 / 대한법률구조공단 132 / 국토교통부 화물자동차 운수사업 민원 1599-0001.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 자기부담금 중 상대방 책임비율 별도 청구 가능',
        summary:
          '대법원 2022다287284 사건(대법원, 2026.01.29 선고)에서 법원은 쌍방과실 교통사고에서 자차보험계약에 따라 차량수리비 중 자기부담금 상당액을 보상받지 못한 피보험자가 상대차량 측을 상대로 자기부담금 상당의 손해배상을 청구할 수 있다고 판시했습니다. 견인 중 2차 사고에서도 본인 자차로 우선 처리한 후 자기부담금 중 견인업체·견인 운전자·견인된 차량 소유자 책임비율에 해당하는 금액을 별도 청구할 수 있다는 시사점이 있습니다.',
        takeaway: '견인 중 2차 사고는 본인 자차로 처리해도 자기부담금 중 상대방 책임비율 부분은 별도 청구가 가능하므로, 차량별 책임비율을 일관되게 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '견인업체가 영업용 책임보험에 미가입인 경우는요?',
        answer:
          '<strong>화물자동차운수사업법 위반으로 신고 + 견인업체 사업자·대표 개인 상대 청구 가능합니다.</strong> 보험금 부족 시 무보험차상해 특약·정부보장사업 검토.',
      },
      {
        question: '견인 운전자가 음주·과속이었으면 더 유리한가요?',
        answer:
          '<strong>면책사유·구상권 청구 강화로 본인 회수액이 늘어날 수 있습니다.</strong> 음주·12대 중과실은 형사 처벌과 민사 책임이 모두 강화. 경찰 사고사실확인원에 음주·속도 정보 포함 확인.</p>',
      },
      {
        question: '견인된 차량 소유자가 책임을 회피하면요?',
        answer:
          '<strong>자배법 제3조 운행자책임으로 차량 소유자에 책임 청구 가능합니다.</strong> 견인 중이라도 차량 소유자의 운행자성 인정되는 경우 다수.',
      },
      {
        question: '도로 균열·노면 결함이 사고에 기여한 경우는요?',
        answer:
          '<strong>국가배상법 제5조에 따라 도로관리청에 손해배상 청구 가능합니다.</strong> 도로공사 안전관리계획서·노면 사진을 정보공개청구로 확보. 손해 5년·안 날로부터 3년 시효 주의.',
      },
      {
        question: '교통사고 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 손해보험협회 분쟁심의위원회(www.knia.or.kr)는 책임 분배 무료 조정 신청 가능.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '터널 다중추돌 책임 분배', href: '/guide/traffic-accident/traffic-accident-tunnel-pile-up-multi' },
      { label: '고속도로 다중충돌 사고', href: '/guide/traffic-accident/traffic-accident-highway-multi-collision' },
      { label: '교통사고 블랙박스 증거', href: '/guide/traffic-accident/traffic-accident-dashcam-evidence-guide' },
      { label: '무보험 차량 사고 청구', href: '/guide/traffic-accident/traffic-accident-uninsured-vehicle-claim' },
      { label: '교통사고 인적·물적 손해 청구', href: '/guide/traffic-accident/traffic-accident-compensation-calculation-guide' },
    ],
  },

  // ─── 3. traffic-accident / illegal-parking-collision-liability ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-illegal-parking-collision-liability',
    keyword: '불법주정차 차량 충돌 책임',
    questionKeyword: '골목길 굽이에 불법주차된 차량을 피하려다 사고 났는데 주정차 차량에도 책임이 있나요?',
    ctaKeyword: '불법주정차 사고 책임 점검',
    type: 'Q&A형',
    perspective: 'neutral',
    meta: {
      title: '불법주정차 차량 충돌 — 책임 분배 5가지 쟁점 정리 | 로앤가이드',
      description:
        '불법주정차 차량과 충돌하거나 회피하다 사고를 낸 운전자라면 도로교통법 제32조·민법 제750조 주정차 차량 책임 5가지 쟁점을 지금 확인하세요.',
    },
    intro:
      '<p>"좁은 골목 굽이에 불법주차된 트럭을 피하려다 맞은편 차량과 충돌했어요. 보험사는 본인 100% 과실이라는데, 트럭이 거기 없었으면 사고도 없었을 텐데 억울합니다." 불법주정차 차량과의 사고는 ① 직접 충돌 ② 회피 중 사고 ③ 시야 차단으로 인한 2차 사고로 나뉘며, 도로교통법 제32조 위반(주정차 금지) + 민법 제750조 불법행위로 주정차 차량 측에도 책임 청구 가능성이 검토됩니다. 사고 직후 주정차 위반 사진·증명·CCTV 확보가 출발점이고, 보험사 1차 산정 과실비율은 다툼 여지가 있어요.</p>',
    sections: [
      {
        title: 'Q. 불법주정차 차량에 책임을 물을 수 있는 5가지 정황은?',
        content:
          '<p><strong style="color:#1e3a5f">A. 아래 5가지 정황 중 1개 이상이면 주정차 차량에 일부 책임 청구가 가능한 영역입니다.</strong></p>\n<ul>\n<li><strong>도로교통법 제32조 주정차 금지구역</strong> — 교차로·횡단보도·소방시설 5m 이내·버스정류장·어린이보호구역 등.</li>\n<li><strong>도로교통법 제33조 주차 금지구역</strong> — 터널·다리·도로 굴곡부·고속도로·자동차전용도로 등.</li>\n<li><strong>주정차로 인한 시야 차단</strong> — 교차로·횡단보도·굽이 도로에서 주정차 차량이 시야를 가려 사고에 기여.</li>\n<li><strong>안전조치 미흡</strong> — 비상등·안전삼각대·차량 후미 위험표지 미설치 상태에서 주정차.</li>\n<li><strong>야간 무점등 주정차</strong> — 도로교통법 제37조 위반. 야간 시인성 부족으로 사고 기여.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 손해보험협회 과실비율 기준상 불법주정차 차량 5~30% 과실 인정 사례 다수. 사고 정황·시야 차단 정도·도로 형태가 핵심 변수.</blockquote>',
      },
      {
        title: 'Q. 다툼 입증 — 어떤 자료가 결정적인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고 직후 주정차 위반 사진·CCTV·블랙박스가 핵심 입증 수단입니다.</strong></p>\n<ul>\n<li><strong>본인·주변 차량 블랙박스</strong> — 진입 시점·시야 차단 정도·회피 동선 객관 입증.</li>\n<li><strong>사고 직후 현장 사진</strong> — 주정차 차량 위치·도로 형태·표지·차선·시야 차단 정도 다각도. 주차금지 표지·소방시설 거리 측정 사진.</li>\n<li><strong>지자체 CCTV·도로 CCTV</strong> — 시·구청 교통지도과 보전 신청. 주정차 단속 카메라 영상도 활용.</li>\n<li><strong>주정차 단속 신고 이력</strong> — 안전신문고 앱 신고 기록·시·구청 단속 기록 정보공개청구.</li>\n<li><strong>경찰 사고사실확인원</strong> — 사고 정황·도로 조건 정리.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 불법주정차 사고 책임 분배, AI로 점검해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 주정차 사고 입증 6가지',
        content:
          '<p><strong style="color:#1e3a5f">주정차 위반·시야 차단·과실 분배에 필요한 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 본인·주변 차량 블랙박스</strong> — 진입 시점·시야 차단·회피 동선.</li>\n<li><strong>2. 주정차 차량 위치 사진</strong> — 차량 번호판·도로 형태·표지·소방시설 거리·횡단보도까지 거리.</li>\n<li><strong>3. 지자체 CCTV 보전 요청</strong> — 사고 후 14일 내 시·구청 또는 경찰서.</li>\n<li><strong>4. 안전신문고 신고 기록</strong> — 사고 전·후 동일 위치 주정차 단속 신고 이력.</li>\n<li><strong>5. 경찰 사고사실확인원</strong> — 사고 시각·기상·도로 조건.</li>\n<li><strong>6. 진단서·차량 견적서</strong> — 인적·물적 손해 산정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사고 직후 주정차 차량 운전자가 도주·번호판 가림이 있으면 즉시 경찰 신고 + 블랙박스 화질 확인. 같은 위치 상습 불법주정차면 시·구청 신고 이력이 입증에 도움.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 주정차 사고 보상 5단계',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·보험 청구·과실비율 협상·분쟁조정·민사소송 단계로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 확보 (사고 직후~3일)</strong> — 블랙박스 별도 저장, 주정차 차량 위치·도로 형태 사진, CCTV 보전 요청, 경찰 사고사실확인원 발급.</li>\n<li><strong>2단계 — 본인·상대 자동차보험 청구 (1~2주)</strong> — 본인 자차·자기신체사고·상대 자동차보험 동시 청구. 주정차 차량 자동차보험도 별도 청구.</li>\n<li><strong>3단계 — 과실비율 재협상 (1~3개월)</strong> — 보험사 1차 산정에 동의하지 않으면 추가 자료(주정차 위반·시야 차단 입증) 제출.</li>\n<li><strong>4단계 — 손해보험협회 분쟁조정 (필요 시 60일)</strong> — 분쟁심의위원회 무료 조정 신청.</li>\n<li><strong>5단계 — 민사소송 (3년 시효)</strong> — 본인·상대 운전자·주정차 차량 소유자 공동 피고로 청구.</li>\n</ol>',
      },
    ],
    cases: [
      {
        title: '판례 — 보험자대위와 자기부담금 별도 청구',
        summary:
          '대법원 2022다287284 사건(대법원, 2026.01.29 선고)에서 법원은 쌍방과실 교통사고에서 자차보험계약에 따라 차량수리비 중 자기부담금 상당액을 보상받지 못한 피보험자가 상대차량 측에 자기부담금 상당의 손해배상을 청구할 수 있다고 판시했습니다. 불법주정차 차량과 충돌·회피 사고에서도 본인 자차로 우선 처리한 후 자기부담금 중 주정차 차량 책임비율 부분은 별도 청구할 수 있어, 회수 가능 금액이 늘어날 수 있다는 시사점이 있습니다.',
        takeaway: '불법주정차 사고는 본인 자차 처리 후에도 자기부담금 중 주정차 차량 책임비율 부분은 별도 청구가 가능하므로, 책임 분배 자료를 일관되게 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '주정차 차량은 안 움직였는데 책임이 있나요?',
        answer:
          '<strong>도로교통법 위반 + 시야 차단·안전조치 미흡이 사고에 기여하면 일부 책임 청구 가능합니다.</strong> 주정차 차량 5~30% 과실 인정 사례 다수.',
      },
      {
        question: '주정차 단속 신고만 해도 도움이 되나요?',
        answer:
          '<strong>안전신문고 앱·생활안전지도 신고 이력은 사고 입증·반복 위반 입증에 활용됩니다.</strong> 사고 전 같은 위치 상습 신고 기록은 주정차 차량 측 책임 가중 자료.',
      },
      {
        question: '비상등 켜고 잠깐 정차했는데도 책임이 있나요?',
        answer:
          '<strong>주정차 금지구역에서 비상등은 면책 사유 안 됩니다.</strong> 안전삼각대·후방 위험표지 미설치 시 책임 가중. 잠깐 정차도 도로교통법 제32조 적용.',
      },
      {
        question: '주정차 차량 운전자가 신원 안 밝히면요?',
        answer:
          '<strong>차량 번호판으로 보험사 조회 가능합니다.</strong> 자동차손해배상보장법 제35조에 따라 차량 소유자 정보 확인. 도주·번호판 가림은 별도 형사 신고.',
      },
      {
        question: '교통사고 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 손해보험협회 분쟁심의위원회(www.knia.or.kr) 과실비율 무료 조정도 활용 가능.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '주차장 후진 충돌 사고', href: '/guide/traffic-accident/traffic-accident-parking-lot-backing' },
      { label: '주차장 추돌 책임 분배', href: '/guide/traffic-accident/traffic-accident-parking-lot-collision' },
      { label: '도어 개방 사고 책임', href: '/guide/traffic-accident/traffic-accident-door-opening-fault' },
      { label: '교통사고 블랙박스 증거', href: '/guide/traffic-accident/traffic-accident-dashcam-evidence-guide' },
      { label: '쌍방과실 비율 다툼', href: '/guide/traffic-accident/traffic-accident-rear-end-fault-ratio' },
    ],
  },

  // ─── 4. traffic-accident / bus-stop-pedestrian-injury ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-bus-stop-pedestrian-injury',
    keyword: '버스정류장 보행자 사고 책임',
    questionKeyword: '버스정류장에서 승하차 중에 다른 버스에 부딪혔어요. 버스공제·버스회사 책임 어떻게 청구하나요?',
    ctaKeyword: '버스정류장 사고 책임 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '버스정류장 승하차 사고 — 버스공제·도로관리청 청구 5단계 | 로앤가이드',
      description:
        '버스정류장에서 승하차·대기 중 사고를 당한 보행자라면 버스공제·버스회사·도로관리청 책임 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"버스정류장에서 내리려는 순간 뒤에서 들어오던 다른 시내버스에 부딪혔어요. 두 버스 회사가 서로 책임을 미루고, 제가 직접 합의하라는데 어떻게 해야 할지 모르겠습니다." 버스정류장 보행자 사고는 책임 주체가 ① 가해 버스 운전자·회사 ② 승하차 중인 버스 운전자·회사 ③ 도로관리청(정류장 시설)으로 분산되어 청구 트랙이 복잡합니다. 시내버스·고속버스·관광버스는 자동차공제(버스공제조합)에 가입돼 있어 일반 자동차보험과는 청구 절차가 달라요. 사고 직후 버스 차량번호·소속 회사·블랙박스 확보가 출발점입니다.</p>',
    sections: [
      {
        title: '버스 사고 — 책임 주체와 보험 트랙 4가지',
        content:
          '<p><strong style="color:#1e3a5f">버스는 일반 자동차보험이 아니라 공제조합 가입이 일반적이라 청구 절차가 다릅니다.</strong></p>\n<ul>\n<li><strong>전국버스운송사업조합연합회 공제(시내·시외버스)</strong> — 시내·시외·고속·전세버스 대부분 가입. 일반 자동차보험과 동일한 보장 + 일부 약관 차이.</li>\n<li><strong>버스 운전자·회사 사용자책임</strong> — 민법 제756조에 따라 회사도 사용자책임. 운전자 개인보험 + 회사 책임 동시 청구.</li>\n<li><strong>도로관리청 (정류장 시설)</strong> — 정류장 표지·승강장 결함·미끄러짐 사고는 국가배상법 제5조 검토.</li>\n<li><strong>본인 실손의료보험·자전거보험·시민안전보험</strong> — 추가 보장. 일부 지자체는 시민안전보험으로 보행자 사고 보장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 버스공제는 자동차손해배상보장법 제3조 운행자책임 적용. 보행자 손해는 통상 100% 버스 측 책임 인정 다수.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 버스 사고 보상 5단계',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·공제 청구·도로관리청 청구·분쟁조정·민사소송 순서로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 확보 (사고 직후~3일)</strong> — 가해·승하차 버스 차량번호·소속 회사·운전자 인적사항, 정류장 사진, 본인·주변 블랙박스, 버스 내부 CCTV 보전 요청, 경찰 사고사실확인원.</li>\n<li><strong>2단계 — 버스공제 청구 (1~2주)</strong> — 가해 버스 소속 공제조합에 청구. 전국버스운송사업조합연합회 또는 지역 공제조합 직접 신고. 본인 실손의료보험·시민안전보험도 동시 청구.</li>\n<li><strong>3단계 — 도로관리청 청구 (정류장 시설 결함 시 1~3개월)</strong> — 정류장 결함·미끄러짐 사고는 국가배상법 제5조에 따라 도로관리청·지자체에 청구.</li>\n<li><strong>4단계 — 손해보험협회 분쟁조정 (필요 시 60일)</strong> — 책임 분배 미합의 시 분쟁심의위원회 무료 조정 신청.</li>\n<li><strong>5단계 — 민사소송 (3년 시효)</strong> — 버스 운전자·회사·공제조합·도로관리청 공동 피고로 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 버스 사고 청구 트랙, 단계별로 점검해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 버스 사고 입증 7가지',
        content:
          '<p><strong style="color:#1e3a5f">버스공제 청구·도로관리청 청구에 필요한 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 가해·승하차 버스 차량번호 + 소속 회사·노선번호</strong> — 정류장 안내·앞유리 노선 표시 사진.</li>\n<li><strong>2. 정류장 시설 사진</strong> — 승강장 상태·표지·미끄러짐 흔적·조명·시인성 다각도.</li>\n<li><strong>3. 본인·주변 블랙박스</strong> — 사고 직전 보행자·버스 동선.</li>\n<li><strong>4. 버스 내부 CCTV 보전 요청</strong> — 사고 후 즉시 버스회사·공제조합·경찰에 보전 요청. 보존 기간 한정(보통 30일).</li>\n<li><strong>5. 경찰 사고사실확인원</strong> — 사고 시각·기상·도로 조건.</li>\n<li><strong>6. 진단서·후유장해진단서</strong> — 인적 손해 입증.</li>\n<li><strong>7. 시민안전보험·실손의료보험 가입 정보</strong> — 거주 지자체 시민안전보험 자동 가입 여부 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 버스 내부 CCTV는 보존 기간이 짧아 사고 직후 보전 요청이 결정적. 공제조합·버스회사가 미협조 시 경찰을 통해 압수영장 검토.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 버스 사고 청구에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"본인이 부주의했다"는 일률적 책임 전가</strong> — 보행자 사고는 통상 버스 측 책임 우선. 보행자 과실은 정류장 외 도로 무단횡단 등 명확한 정황에서만.</li>\n<li><strong>"공제조합은 자동차보험이 아니라 청구 절차가 다르다"</strong> — 청구 절차는 다르지만 보장 범위는 자동차보험과 동일. 공제조합 직접 청구 가능.</li>\n<li><strong>"버스 두 대 중 누가 가해자인지 모른다"는 회피</strong> — 두 회사 동시 청구 후 책임 분배는 보험사 협의. 본인이 분배 안 해도 됨.</li>\n<li><strong>본인 합의 압박</strong> — 사고 직후 현장 합의 권유 응하지 말고 일단 진단서·치료 후 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 전국버스운송사업조합연합회 02-734-9381 / 손해보험협회 분쟁심의위원회 www.knia.or.kr / 한국교통안전공단 1577-0990 / 대한법률구조공단 132 / 거주 지자체 시민안전보험 안내.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 의사무능력 피해자의 처벌불원 의사와 성년후견인',
        summary:
          '대법원 2021도11126 사건(대법원, 2023.07.17 선고)에서 법원은 반의사불벌죄에서 성년후견인이 명문의 규정 없이 의사무능력 피해자를 대리해 처벌불원 의사를 결정할 수 없다고 판시했습니다. 버스 사고로 의식 회복이 어려운 중상해 피해자의 경우, 가족·후견인이 임의로 합의·처벌불원할 수 없다는 점에서 신중한 진행이 필요하다는 시사점이 있습니다. 교통사고처리특례법 위반 사건은 합의·처벌불원 의사의 효력 범위가 제한적이므로 절차 보호가 중요합니다.',
        takeaway: '버스 사고 중상해 사건은 합의·처벌불원의 효력 범위가 제한적이라, 사고 직후 무리한 합의 압박에 응하지 않고 진단·치료·청구 트랙을 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '버스 운전자가 잘못을 인정 안 하면 어떻게 하나요?',
        answer:
          '<strong>경찰 사고조사 + 버스 내부 CCTV·블랙박스로 객관 입증 가능합니다.</strong> 운전자 진술과 무관하게 영상·기록 자료가 우선. 공제조합도 객관 자료 기반 처리.',
      },
      {
        question: '시내버스 환승 중 부상은 어디 보험으로 청구하나요?',
        answer:
          '<strong>가해 차량 측 공제·자동차보험이 1차 청구 대상입니다.</strong> 본인 교통상해보험·실손보험·환승센터 운영 지자체 보험도 추가 청구 가능.',
      },
      {
        question: '버스공제 청구가 일반 보험사보다 느린 편인가요?',
        answer:
          '<strong>처리 절차는 비슷하나 공제조합 내부 심사 단계가 추가될 수 있습니다.</strong> 손해보험협회 분쟁심의위원회 또는 한국소비자원 분쟁조정으로 가속 가능.',
      },
      {
        question: '정류장 미끄러짐·시설 결함 사고는 어디 청구하나요?',
        answer:
          '<strong>국가배상법 제5조에 따라 도로관리청·지자체에 청구합니다.</strong> 손해 5년·안 날로부터 3년 시효. 시설 결함 사진·관리 기록 정보공개청구가 핵심.',
      },
      {
        question: '교통사고 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 한국교통안전공단(1577-0990)도 사고 상담. 손해보험협회 분쟁심의위원회 무료 조정 활용.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '버스 급정거 승객 청구', href: '/guide/traffic-accident/traffic-accident-bus-sudden-stop-passenger-claim' },
      { label: '택시 승객 인적 손해 청구', href: '/guide/traffic-accident/traffic-accident-taxi-passenger-claim' },
      { label: '보행자 횡단보도 사고', href: '/guide/traffic-accident/traffic-accident-pedestrian-cross-jaywalk' },
      { label: '교통사고 인적 손해 청구', href: '/guide/traffic-accident/traffic-accident-compensation-calculation-guide' },
      { label: '교통사고 블랙박스 증거', href: '/guide/traffic-accident/traffic-accident-dashcam-evidence-guide' },
    ],
  },

  // ─── 5. traffic-accident / uturn-oncoming-fault ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-uturn-oncoming-fault',
    keyword: 'U턴 직진 충돌 과실비율',
    questionKeyword: 'U턴 중에 직진 차량과 충돌했는데 본인 80% 과실이라네요. 다툴 수 있나요?',
    ctaKeyword: 'U턴 사고 과실비율 점검',
    type: '비교형',
    perspective: 'neutral',
    meta: {
      title: 'U턴 사고 과실비율 — 정상 vs 위반 5가지 차이 | 로앤가이드',
      description:
        'U턴 중 직진 차량과 충돌 사고에서 본인 과실비율이 부당하게 높다고 느낀다면 도로교통법 제18조·U턴 표지 정황 5가지 다툼 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>"U턴 표시가 있는 곳에서 정상 U턴 중인데 맞은편 직진 차량과 충돌했어요. 보험사는 U턴이 무조건 80% 과실이라는데, 직진 차량이 과속이었던 것 같아 억울합니다." U턴 사고는 보험사가 일률적으로 U턴 차량 70~80% 과실을 매기는 관행이 있지만, U턴 표지 유무·신호 종류·직진 차량 속도·시야 차단 정황에 따라 과실비율을 다툴 여지가 있습니다. 도로교통법 제18조(횡단·유턴·후진 금지)와 제17조(속도 위반)을 함께 검토해야 정확한 책임 분배가 나와요. 사고 직후 U턴 표지·신호·블랙박스 확보가 출발점입니다.</p>',
    sections: [
      {
        title: '정상 U턴 vs 위반 U턴 — 5가지 핵심 차이',
        content:
          '<p><strong style="color:#1e3a5f">U턴 사고 과실은 표지·신호·시기·시야·속도 5가지 요소로 결정됩니다.</strong></p>\n<ul>\n<li><strong>U턴 표지 유무</strong> — 도로교통법 시행규칙 별표6 U턴 표지 유무가 1차 분기. 표지 없는 곳 U턴은 도로교통법 제18조 위반.</li>\n<li><strong>U턴 신호 조건</strong> — "보행자 신호 시·적색 신호 시·좌회전 시·상시" 4가지 조건이 표지에 명시. 조건 외 U턴은 위반.</li>\n<li><strong>U턴 시기·진입 위치</strong> — 정지선 후방·차로 변경 절차·전방 시야 확인 의무.</li>\n<li><strong>직진 차량 속도</strong> — 도로교통법 제17조 제한속도 위반 시 직진 차량 과실 가산. 30km/h 이상 초과 시 가중.</li>\n<li><strong>시야 차단 정황</strong> — 굽이 도로·언덕·주정차 차량으로 인한 시야 차단은 양측 과실 분배에 영향.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정상 U턴 vs 직진 차량 과속 결합 시 U턴 차량 과실 50~60%까지 떨어진 사례 다수. 일률 80% 적용은 다툼 여지 있음.</blockquote>',
      },
      {
        title: '과실비율 비교 — 정상 U턴 vs 위반 U턴',
        content:
          '<p><strong style="color:#1e3a5f">손해보험협회 과실비율 기준상 사례별 분배는 다음과 같이 나뉘는 경향입니다.</strong></p>\n<ul>\n<li><strong>U턴 표지·신호 모두 적법 + 직진 차량 정상 속도</strong> — U턴 70~80% : 직진 20~30%</li>\n<li><strong>U턴 표지·신호 적법 + 직진 차량 30% 초과 과속</strong> — U턴 50~60% : 직진 40~50%</li>\n<li><strong>U턴 표지·신호 위반 + 직진 차량 정상</strong> — U턴 90~100% : 직진 0~10%</li>\n<li><strong>U턴 적법 + 직진 차량 신호위반(적색)</strong> — U턴 30~40% : 직진 60~70%</li>\n<li><strong>U턴 적법 + 직진 차량 음주·12대 중과실</strong> — U턴 20~30% : 직진 70~80% + 형사 처벌</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 U턴 사고 과실 다툼, AI로 정리해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — U턴 사고 입증 6가지',
        content:
          '<p><strong style="color:#1e3a5f">과실비율 다툼에 필요한 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 본인·주변 차량 블랙박스</strong> — U턴 진입 시점·신호 상태·직진 차량 속도·접근 거리.</li>\n<li><strong>2. U턴 표지·신호 사진</strong> — 사고 위치 표지 종류·신호 조건(보행자·적색·좌회전·상시) 명시 사진.</li>\n<li><strong>3. 도로 형태 사진</strong> — 차로 수·중앙선·시야 차단 요소·도로 굴곡.</li>\n<li><strong>4. 지자체·도로 CCTV 보전</strong> — 사고 후 14일 내 신청.</li>\n<li><strong>5. 경찰 사고사실확인원</strong> — 사고 시각·기상·신호 상태·차량 속도 정리.</li>\n<li><strong>6. 진단서·차량 견적서</strong> — 인적·물적 손해 산정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 직진 차량 속도는 블랙박스 영상 분석으로 산정 가능. 손해보험협회 분쟁심의위원회는 영상 감정도 활용해 과실비율 재산정 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — U턴 사고 보상 5단계',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·보험 청구·과실비율 협상·분쟁조정·민사소송 순서로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 확보 (사고 직후~3일)</strong> — 블랙박스 별도 저장, U턴 표지·신호 사진, 도로 형태 사진, CCTV 보전 요청, 경찰 사고사실확인원.</li>\n<li><strong>2단계 — 본인·상대 자동차보험 청구 (1~2주)</strong> — 본인 자차·자기신체사고 + 상대 자동차보험 동시.</li>\n<li><strong>3단계 — 과실비율 재협상 (1~3개월)</strong> — 보험사 1차 산정에 동의하지 않으면 추가 자료 제출. 직진 차량 과속 입증이 핵심.</li>\n<li><strong>4단계 — 손해보험협회 분쟁조정 (60일)</strong> — 분쟁심의위원회 무료 조정 신청. 영상 감정 요청 가능.</li>\n<li><strong>5단계 — 민사소송 (3년 시효)</strong> — 분쟁조정 미합의 시 운전자·보험사 상대 청구. 자기부담금 별도 청구 가능(대법원 2022다287284).</li>\n</ol>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주 측정과 운전 시점 혈중알코올농도 추정',
        summary:
          '대법원 2025도8137 사건(대법원, 2025.12.11 선고)에서 법원은 운전 시점과 혈중알코올농도 측정 시점 사이 시간 간격이 있고 그때가 상승기로 보이더라도, 통상 음주단속 절차와 측정 시점·결과·정황을 종합해 운전 당시에도 처벌 기준치 이상이었는지 판단할 수 있다고 판시했습니다. U턴 사고에서도 직진 차량의 음주·과속이 사고에 기여한 정황이 입증되면 과실비율과 형사 책임 모두에 영향을 줄 수 있다는 시사점이 있습니다.',
        takeaway: 'U턴 사고는 직진 차량의 음주·과속·신호 위반 정황에 따라 과실비율이 크게 달라질 수 있어, 블랙박스·경찰 사고사실확인원의 정황 정보를 일관되게 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: 'U턴 표지가 없는 곳에서 U턴했는데 다툴 여지가 있나요?',
        answer:
          '<strong>표지 없는 곳 U턴은 도로교통법 제18조 위반으로 본인 과실 가중되지만, 직진 차량 과속·신호위반 정황 있으면 일부 과실 분배 가능합니다.</strong> 일률 100% 본인 과실 인정 안 됨.',
      },
      {
        question: '직진 차량 과속을 어떻게 입증하나요?',
        answer:
          '<strong>블랙박스 영상 속도 분석 + CCTV + 사고사실확인원 정황 종합으로 입증.</strong> 손해보험협회 분쟁심의위원회는 영상 감정도 활용해 재산정.',
      },
      {
        question: 'U턴 신호 조건(보행자·적색·좌회전·상시) 헷갈리는데요?',
        answer:
          '<strong>각 조건은 U턴 표지에 명시되어 있고 조건 외 U턴은 위반입니다.</strong> 사고 직후 표지 사진 확보가 입증의 출발점.',
      },
      {
        question: '본인 자차 처리 후 추가 청구가 가능한가요?',
        answer:
          '<strong>대법원 2022다287284 판결에 따라 자기부담금 중 상대방 책임비율 부분은 별도 청구 가능합니다.</strong> 자차 우선 처리해도 잔여 청구권 유지.',
      },
      {
        question: '교통사고 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 손해보험협회 분쟁심의위원회(www.knia.or.kr) 무료 조정 활용 가능.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교차로 좌회전 사고', href: '/guide/traffic-accident/traffic-accident-intersection-left-turn' },
      { label: '신호위반 과실 협상', href: '/guide/traffic-accident/traffic-accident-signal-violation-fault-negotiation' },
      { label: '쌍방과실 비율 다툼', href: '/guide/traffic-accident/traffic-accident-rear-end-fault-ratio' },
      { label: '교통사고 블랙박스 증거', href: '/guide/traffic-accident/traffic-accident-dashcam-evidence-guide' },
      { label: '12대 중과실 합의 영향', href: '/guide/traffic-accident/traffic-accident-12-major-faults-settlement-impact' },
    ],
  },
];
