import { SpokePage } from '../spoke-pages';

// batch50 traffic 5개: traffic-accident victim/accused 혼합
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 자전거 vs 보행자 사고로 다친 보행자가 도로교통법 제13조 자전거도로 의무·인도 통행 가중 등을 토대로 과실비율표를 정리하도록 돕는 페이지다.
// 2. 이 페이지는 화물차 적재물 낙하로 사상한 피해자가 화물주·운전자 공동책임과 자배법 적용 안 되는 경우 일반 민법 손배 절차를 정리하도록 돕는 페이지다.
// 3. 이 페이지는 무보험차에 부딪힌 피해자가 자배법 제30조 정부보장사업(상해 1억5천·부상 1,500만, 청구 3년) 청구 절차를 정리하도록 돕는 페이지다.
// 4. 이 페이지는 터널 다중추돌에 휘말린 피해자가 선행차·후행차 과실 분배와 안개·결빙 시 도로관리청 동시 청구를 정리하도록 돕는 페이지다.
// 5. 이 페이지는 보행자 무단횡단 사고로 형사 처벌이 검토 중인 운전자가 12대 중과실 해당 여부·교특법·면허 처분·합의 우선순위를 정리하도록 돕는 페이지다.

export const spokesBatch50Traffic: SpokePage[] = [
  // ─── 1. traffic-accident / bicycle-pedestrian-fault-table (Q&A형, victim) ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-bicycle-pedestrian-fault-table',
    keyword: '자전거 보행자 과실비율',
    questionKeyword: '자전거에 치인 보행자인데 과실비율은 어떻게 잡히나요?',
    ctaKeyword: '자전거 보행자 과실 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '자전거 vs 보행자 사고 과실비율 9가지 케이스 | 로앤가이드',
      description:
        '인도·횡단보도·자전거도로별 자전거 vs 보행자 과실비율과 보행자 무과실 인정 조건을 지금 확인하세요.',
    },
    intro:
      '<p>인도를 걷다가 빠르게 달려온 자전거에 치여 다쳤다면 "분명 내가 보행자인데 보험사가 일부 과실을 잡는다"는 답답함이 생깁니다. 자전거는 도로교통법상 차마(車馬)에 해당해 자전거도로·차도 통행이 원칙이며, 인도 통행은 예외적 허용에 그칩니다(도로교통법 제13조의2). 사고 장소가 인도였는지 자전거도로였는지 횡단보도였는지에 따라 과실비율이 90:10에서 보행자 무과실까지 달라지므로, 사건별 케이스를 정리해두면 보험사 협의에서 다툴 수 있는 폭이 넓어집니다.</p>',
    sections: [
      {
        title: 'Q. 자전거에 치인 보행자 과실 — 기본 비율은 어떻게 되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 기본 90:10(자전거:보행자)이 출발선이며, 사고 장소·자전거 통행 적정성에 따라 보행자 무과실까지 다투어질 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>도로교통법 제13조의2</strong> — 자전거 통행 의무. 자전거도로가 있으면 자전거도로, 없으면 차도 우측 통행. 인도 통행은 어린이·노인·장애인 등 예외에 한정.</li>\n<li><strong>인도 통행 자전거</strong> — 보행자 우선 원칙이 강하게 작용해 자전거 과실 90~100% 검토 사례.</li>\n<li><strong>횡단보도 통행 중 사고</strong> — 자전거가 내려서 끌고 가지 않고 탑승 상태로 횡단했다면 자전거가 차마로 평가, 보행자 보호의무 강화.</li>\n<li><strong>자전거도로 사고</strong> — 보행자가 자전거도로에 진입했다면 보행자 과실 30~40% 분담될 소지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "사고 장소가 어디였는지" + "자전거 통행이 적정했는지" 가 과실 비율의 가장 큰 변수입니다.</blockquote>',
      },
      {
        title: 'Q. 9가지 케이스 — 자전거 vs 보행자 과실표',
        content:
          '<p><strong style="color:#1e3a5f">A. 손해보험협회 과실비율 인정기준을 토대로 사건 정황별 변동 요소가 적용됩니다.</strong></p>\n<ul>\n<li><strong>1. 인도 통행 자전거 + 보행자</strong> — 자전거 90~100% 검토. 어린이·노인 자전거 예외 통행이라도 속도·전방주시 위반 시 자전거 과실 큼.</li>\n<li><strong>2. 횡단보도 + 자전거 탑승 횡단</strong> — 자전거 80~90% 검토. 신호 위반 가중.</li>\n<li><strong>3. 횡단보도 + 자전거 끌고 횡단</strong> — 보행자로 평가, 자동차·자전거 측 100% 검토.</li>\n<li><strong>4. 자전거도로 진입 보행자</strong> — 보행자 과실 30~40% 검토.</li>\n<li><strong>5. 차도 갓길 보행자 + 자전거</strong> — 자전거 70~80% 검토. 야간·어두운 옷 등 보행자 과실 가중 변수.</li>\n<li><strong>6. 공원·산책로</strong> — 자전거 통행 금지 구역이면 자전거 100% 검토.</li>\n<li><strong>7. 어린이보호구역</strong> — 자전거 측 과실 가중. 보행자 무과실 사례 다수.</li>\n<li><strong>8. 무신호 교차로</strong> — 자전거가 일시정지 의무 위반이면 자전거 80~90% 검토.</li>\n<li><strong>9. 음주 자전거 운전</strong> — 자전거 운전자 음주 시 과실 가중 + 형사 처벌 별도 검토(도로교통법 제44조).</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 자전거 사고 과실비율, AI로 정리해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">사고 장소·통행 형태·증거 자료까지 AI가 케이스별로 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 자전거 사고 보행자 입증 자료',
        content:
          '<p><strong style="color:#1e3a5f">사고 장소·통행 정황·상해 정도를 객관적으로 입증할 7가지 자료가 핵심입니다.</strong></p>\n<ul>\n<li><strong>1. 본인 휴대폰 영상·사진</strong> — 사고 직후 도로 상태·자전거 위치·신호기 상태 촬영.</li>\n<li><strong>2. 주변 CCTV·블랙박스</strong> — 도로공사·지자체·인근 차량 블랙박스 보존 요청 (보존 기간 7~30일).</li>\n<li><strong>3. 경찰 사고사실확인원</strong> — 경찰서 교통조사계에서 발급. 보험·소송 기초 자료.</li>\n<li><strong>4. 진단서·영상의학 자료</strong> — 상해진단서, MRI·X-ray. 사고와 인과관계 입증.</li>\n<li><strong>5. 진료비 영수증·약제 처방전</strong> — 치료비 산정·일실수입 입증의 기초.</li>\n<li><strong>6. 도로 형태 자료</strong> — 인도·자전거도로·횡단보도 표시 사진, 지자체 도로대장 자료.</li>\n<li><strong>7. 목격자 진술서·연락처</strong> — 사고 직후 확보가 가장 중요. 시간이 지나면 확보 어려워짐.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사고 직후 휴대폰으로 도로 표지·자전거 위치를 다각도로 촬영하면 인도·자전거도로 구분의 결정적 자료가 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 자전거 사고 보상 5단계',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·보험 청구·과실 협의·분쟁조정 단계를 순서대로 진행하면 누락 없이 정리할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 확보 (사고 직후)</strong> — 휴대폰 사진·CCTV 보존 요청·목격자 연락처 확보.</li>\n<li><strong>2단계 — 경찰 신고·진단 (1~3일)</strong> — 경찰서 사고 접수, 의료기관 상해진단서 발급.</li>\n<li><strong>3단계 — 자전거 운전자 보험 확인 (1~2주)</strong> — 일상생활배상책임보험·자전거보험 가입 여부 확인. 미가입이면 본인 무보험차상해 특약·정부보장사업 검토.</li>\n<li><strong>4단계 — 과실 협의·분쟁조정 (1~3개월)</strong> — 손해보험협회 과실비율 분쟁심의위원회 무료 조정 신청.</li>\n<li><strong>5단계 — 민사소송 (필요 시)</strong> — 3년 소멸시효 안에 손해배상 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 자전거 사고 보상 순서, 단계별로 점검해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 자전거 운전자의 보험 가입 요건',
        summary:
          '대법원 2011도6273 사건(대법원, 2012.10.25 선고)에서 법원은 자전거 운전 중 전방 주시 게을리한 과실로 보행자에게 상해를 입힌 사안에서, 자전거가 종합보험에 가입되었더라도 보상한도가 손해 전액을 보상하지 못하는 형태(예: 1억 원 한도)라면 교통사고처리특례법상 면책 보험 등에 해당하지 않는다고 판시했습니다.',
        takeaway: '자전거 사고는 자전거 운전자의 보험 가입 형태가 보상한도까지 일치해야 형사 면책 효과가 검토되며, 한도 초과 손해는 별도 청구가 가능할 소지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '인도에서 자전거에 치였는데 보행자도 과실이 있나요?',
        answer:
          '<strong>인도 통행 자전거 사고는 보행자 무과실에 가까운 사례가 많습니다.</strong> 다만 갑자기 뛰어나오거나 휴대폰 보며 걷는 등 부주의가 인정되면 일부 분담될 소지가 있어요.',
      },
      {
        question: '자전거 운전자가 보험이 없으면 보상은 어떻게 받나요?',
        answer:
          '<strong>운전자 본인의 일상생활배상책임보험·자전거보험을 우선 확인하고, 없으면 본인 자동차보험 무보험차상해 특약·정부보장사업을 검토할 수 있습니다.</strong>',
      },
      {
        question: '횡단보도에서 자전거에 치이면 100% 보상받나요?',
        answer:
          '<strong>자전거를 끌고 횡단하면 보행자로 평가되어 무과실 검토가 가능합니다.</strong> 다만 탑승 상태로 횡단했다면 자전거가 차마로 평가되어 보행자도 일부 과실이 인정될 소지가 있어요.',
      },
      {
        question: '어린이가 탄 자전거에 치인 경우는 어떻게 다투나요?',
        answer:
          '<strong>13세 미만은 인도 통행이 합법(도로교통법)이라 일률적으로 자전거 측 과실이 크지 않을 수 있습니다.</strong> 다만 보호자의 감독 의무 위반이 인정되면 보호자에 대한 손해배상 청구를 검토할 수 있어요.',
      },
      {
        question: '과실 비율에 동의 못 하면 어디에 신청하나요?',
        answer:
          '<strong>손해보험협회 과실비율 분쟁심의위원회(무료) 또는 한국소비자원 분쟁조정으로 신청할 수 있습니다.</strong> 조정에 불복하면 민사소송으로 진행 가능해요.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '자전거 vs 보행자 사고 합의', href: '/guide/traffic-accident/traffic-accident-bicycle-pedestrian-settlement' },
      { label: '교통사고 블랙박스 증거 활용', href: '/guide/traffic-accident/traffic-accident-blackbox-evidence' },
      { label: '쌍방과실 비율 다툼 절차', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '교통사고 합의 전 준비서류', href: '/guide/traffic-accident/traffic-accident-settlement-documents' },
      { label: '교통사고 인적 손해 배상 청구', href: '/guide/traffic-accident/traffic-accident-personal-injury-claim' },
    ],
  },

  // ─── 2. traffic-accident / cargo-fall-truck-injury (절차형, victim) ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-cargo-fall-truck-injury',
    keyword: '화물차 적재물 낙하 사고',
    questionKeyword: '화물차에서 떨어진 적재물에 다쳤을 때 어디에 청구하나요?',
    ctaKeyword: '적재물 낙하 보상 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '적재물 낙하 사고 보상 5단계와 책임 3주체 정리 | 로앤가이드',
      description:
        '화물차 적재물 낙하로 다친 피해자가 운전자·화물주·도로관리청 공동책임을 따져 보상받는 절차를 지금 확인하세요.',
    },
    intro:
      '<p>고속도로 주행 중 앞차에서 떨어진 철근·박스·과적물에 다쳐 차량과 신체에 손해를 입었다면 "이건 누구한테 청구해야 하지, 자배법이 적용되긴 하나" 막막해집니다. 도로교통법 제39조는 적재방법·고박 의무를 규정하고 있고, 적재물 낙하 사고는 운전자·화물주·고박 작업자가 공동책임 검토 대상입니다. 다만 차량 운행 중이 아닌 정차 중 낙하사고는 자배법 적용이 안 될 소지가 있어 일반 민법상 손해배상 절차로 풀어야 하는 경우가 있습니다.</p>',
    sections: [
      {
        title: '적재물 낙하 — 책임 주체 3가지와 법적 근거',
        content:
          '<p><strong style="color:#1e3a5f">적재방법 위반 사고는 운전자·화물주·고박 책임자에게 공동·연대책임이 검토될 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>도로교통법 제39조 제1항</strong> — "모든 차의 운전자는 승차 인원·적재중량·적재용량에 관하여 대통령령으로 정하는 운행상 안전기준을 넘어서 승차시키거나 적재한 상태로 운전하여서는 아니 된다."</li>\n<li><strong>도로교통법 제39조 제4항</strong> — 적재물이 떨어지지 않도록 덮개를 씌우거나 묶는 등 필요한 조치 의무.</li>\n<li><strong>화물자동차 운수사업법 제11조</strong> — 운송사업자의 안전운송 의무.</li>\n<li><strong>민법 제756조</strong> — 사용자(화물주·운송회사) 책임. 운전자 사용관계가 인정되면 화물주에게도 직접 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "누가 적재했고 누가 운행했는가" 를 분리해서 따지면 청구 대상이 늘어날 소지가 있습니다.</blockquote>',
      },
      {
        title: '자배법 적용 vs 민법 손배 — 사고 유형별 적용 기준',
        content:
          '<p><strong style="color:#1e3a5f">차량 "운행 중" 낙하사고는 자배법 적용이 검토되지만, 정차·하역 중 낙하는 일반 민법 손배 절차로 분리됩니다.</strong></p>\n<ul>\n<li><strong>운행 중 낙하 (자배법 적용 검토)</strong> — 주행 중 적재물이 떨어져 다른 차량·보행자에 충격 → 자배법 책임보험·종합보험 청구 가능성.</li>\n<li><strong>정차·하역 중 낙하 (민법 적용)</strong> — 주차 후 하역 중 적재물 떨어져 다친 경우 자배법 적용 안 될 소지. 민법 제750조·제756조 손해배상.</li>\n<li><strong>판례 입장</strong> — 광주지방법원 2016노741(2016.11.29) 등에서 "주행 중인 화물자동차 적재함에서 화물이 떨어져 행인이 사상한 경우 운행 중 교통사고로 봄이 타당"하다는 취지가 정리되어 있습니다.</li>\n<li><strong>책임보험 한도</strong> — 자배법 적용 시 상해 1인당 최대 1억5천만(상해)·1,500만(부상). 한도 초과는 가해자 본인·종합보험·민사소송 검토.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 적재물 낙하 사고 청구 경로, AI로 점검해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">자배법 적용 여부·책임 주체별 청구 절차까지 AI가 단계별로 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 적재물 낙하 입증 7가지',
        content:
          '<p><strong style="color:#1e3a5f">사고 정황·낙하물·운송 주체를 명확히 입증할 자료가 핵심입니다.</strong></p>\n<ul>\n<li><strong>1. 본인·주변 차량 블랙박스</strong> — 낙하 순간·차량 번호판 포착이 결정적.</li>\n<li><strong>2. 고속도로 CCTV</strong> — 한국도로공사·지자체에 보존 요청 (보존 기간 7~30일).</li>\n<li><strong>3. 사고 현장 사진</strong> — 낙하물 형태·도로 위치·차량 손상 부위 다각도 촬영.</li>\n<li><strong>4. 경찰 사고사실확인원</strong> — 경찰서 교통조사계 발급.</li>\n<li><strong>5. 운송장·송장 사본</strong> — 화물주·운송회사 신원 확보. 화물 운송 중이면 운송장 보관 필수.</li>\n<li><strong>6. 차량 견적서·수리비 영수증</strong> — 물적 손해 산정.</li>\n<li><strong>7. 진단서·치료비 영수증</strong> — 인적 손해 입증. 후유장해 발생 시 후유장해진단서 추가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 차량 번호판이 안 보이면 한국도로공사 하이패스 통행기록·고속도로 CCTV로 차량 식별을 의뢰할 수 있어요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 적재물 낙하 보상 5단계',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·차량 식별·자배법/민법 청구·분쟁조정·소송 단계를 순서대로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 확보 (사고 직후)</strong> — 블랙박스·휴대폰 사진·CCTV 보존 요청. 차량 번호판이 핵심.</li>\n<li><strong>2단계 — 차량·운송 주체 식별 (1~2주)</strong> — 경찰 협조로 차량 정보 조회, 화물주·운송회사 신원 확보.</li>\n<li><strong>3단계 — 보험 청구 (1~2개월)</strong> — 가해 차량 자배법 책임보험 + 종합보험 청구. 차량 미식별이면 정부보장사업(자배법 제30조) 검토.</li>\n<li><strong>4단계 — 분쟁조정 (1~3개월)</strong> — 손해보험협회 분쟁심의위원회 또는 한국소비자원 분쟁조정 무료 신청.</li>\n<li><strong>5단계 — 민사소송 (필요 시)</strong> — 3년 소멸시효 안에 운전자·화물주·운송회사·도로관리청 공동 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 적재물 낙하 보상 순서, 단계별로 점검해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 화물자동차 적재물 낙하와 교통사고 인정',
        summary:
          '광주지방법원 2016노741 사건(광주지방법원, 2016.11.29 선고)에서 법원은 화물차 운전자가 평탄한 지형에 정차하지 않은 과실로 차량 무게중심이 한쪽으로 쏠려 케이지 고박이 풀려 행인에게 상해를 입힌 사안을 교통사고로 봄이 타당하다고 보면서, 주행 중인 화물자동차의 적재함으로부터 화물이 떨어져 행인이 사상한 경우는 운행 중 교통사고에 해당함이 법리상 분명하다고 판시했습니다.',
        takeaway: '주행 중 적재물 낙하 사고는 운행 중 교통사고로 평가되어 자배법 책임보험·종합보험 청구가 검토될 소지가 있고, 정차·하역 중 낙하는 별도 민법 손배로 분리됩니다.',
      },
    ],
    faq: [
      {
        question: '적재물에 차량이 부서졌는데 운전자가 도망갔어요. 보상은?',
        answer:
          '<strong>차량 미식별·뺑소니에 해당하면 정부보장사업(자배법 제30조)으로 자배법 한도까지 보장될 소지가 있습니다.</strong> 손해보험협회(02-3702-8500)에 청구할 수 있어요.',
      },
      {
        question: '화물주에게 직접 청구할 수 있나요?',
        answer:
          '<strong>운전자가 화물주의 사용·관리 하에 운송했다면 민법 제756조 사용자책임으로 화물주에게 직접 청구가 가능할 소지가 있습니다.</strong>',
      },
      {
        question: '도로에 떨어진 낙하물 때문에 다음 차량이 사고가 났어요. 도로공사 책임은?',
        answer:
          '<strong>한국도로공사·지자체의 도로 관리 의무 위반이 인정되면 국가배상법으로 청구할 수 있습니다.</strong> 낙하물 신고 후 일정 시간 방치되었다는 입증이 필요해요.',
      },
      {
        question: '본인 자기차량손해보험으로 우선 처리하면 손해인가요?',
        answer:
          '<strong>대법원 2022다287284 판결에 따라 자기부담금 중 상대방 책임비율에 해당하는 금액은 별도 청구할 수 있습니다.</strong> 자차 처리 후에도 가해자에 대한 잔여 청구권이 유지될 소지가 있어요.',
      },
      {
        question: '정차 중 하역하다 떨어진 박스에 다쳤어요. 자배법이 안 된다면?',
        answer:
          '<strong>일반 민법 제750조 손해배상으로 운전자·하역 작업자·운송회사에 청구할 수 있습니다.</strong> 산재 가입자라면 산재 보상 병행도 검토 가능해요.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 인적 손해 배상 청구', href: '/guide/traffic-accident/traffic-accident-personal-injury-claim' },
      { label: '교통사고 합의 전 준비서류', href: '/guide/traffic-accident/traffic-accident-settlement-documents' },
      { label: '교통사고 블랙박스 증거 활용', href: '/guide/traffic-accident/traffic-accident-blackbox-evidence' },
      { label: '뺑소니 사실과 다른 신고 방어', href: '/guide/traffic-accident/traffic-accident-hit-and-run-falsely-accused' },
      { label: '쌍방과실 비율 다툼 절차', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
    ],
  },

  // ─── 3. traffic-accident / uninsured-vehicle-claim (절차형, victim) ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-uninsured-vehicle-claim',
    keyword: '무보험차 사고 정부보장사업',
    questionKeyword: '무보험차에 부딪혔는데 정부보장사업은 어떻게 청구하나요?',
    ctaKeyword: '정부보장사업 청구 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '무보험차 사고 정부보장사업 5단계와 1억5천만 한도 | 로앤가이드',
      description:
        '무보험차·뺑소니에 다친 피해자가 자배법 제30조 정부보장사업으로 보상받는 청구 절차와 3년 시효를 지금 확인하세요.',
    },
    intro:
      '<p>무보험차에 부딪혔거나 뺑소니를 당해 차량과 신체에 손해를 입었다면 "보험사도 없는데 어디서 보상을 받지" 막막해집니다. 자동차손해배상보장법 제30조는 정부가 책임보험에 가입되지 않은 차량 사고·뺑소니 사고 피해자에게 일정 한도까지 보상하는 정부보장사업을 두고 있고, 손해보험협회가 위탁 운영합니다. 한도는 사망·후유장해 1억 5천만 원, 부상 3,000만 원이며 청구 시효는 손해 안 날로부터 3년입니다. 절차를 알면 보상 폭이 달라집니다.</p>',
    sections: [
      {
        title: '정부보장사업 — 자배법 제30조 핵심 요건',
        content:
          '<p><strong style="color:#1e3a5f">정부보장사업은 책임보험 미가입·뺑소니 사고 피해자를 위한 최후의 안전망이며, 본인 보험으로 보상되지 않는 부분에 한해 청구합니다.</strong></p>\n<ul>\n<li><strong>자배법 제30조 제1항</strong> — 보유자 불명·책임보험 미가입 자동차 사고로 인한 사상자에게 정부가 보장.</li>\n<li><strong>적용 대상</strong> — ① 뺑소니(보유자 불명) ② 책임보험 미가입 차량 ③ 도난 차량 사고 등.</li>\n<li><strong>한도</strong> — 사망·후유장해 1인당 1억 5천만 원, 부상 1인당 3,000만 원, 부상 후 후유장해 1억 5천만 원(2024년 기준 자배법 시행령 별표).</li>\n<li><strong>청구 시효</strong> — 손해 발생을 안 날로부터 3년 이내(자배법 제41조).</li>\n<li><strong>본인 자차 보험 우선</strong> — 본인 무보험차상해 특약·자기신체사고 특약 우선 청구 후 부족분에 한해 정부보장사업 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "본인 보험으로 보상되지 않는 부분"만 보충 보상하는 구조이므로, 먼저 본인 약관부터 확인하는 것이 권장됩니다.</blockquote>',
      },
      {
        title: '청구 절차 — 5단계와 처리 기간',
        content:
          '<p><strong style="color:#1e3a5f">손해보험협회 정부보장사업 콜센터(02-3702-8500)에 청구 후 자료 접수·심사·지급 단계로 진행됩니다.</strong></p>\n<ul>\n<li><strong>1. 사고 신고·자료 확보 (사고 직후)</strong> — 경찰 신고, 사고사실확인원, 진단서·영수증 정리.</li>\n<li><strong>2. 본인 보험 청구 (1~2주)</strong> — 본인 자기신체사고·무보험차상해·실비보험 우선 청구.</li>\n<li><strong>3. 정부보장사업 청구 접수 (1개월)</strong> — 손해보험협회 위탁 보험사 12곳 중 1곳에 신청.</li>\n<li><strong>4. 심사·지급 (3~6개월)</strong> — 사고 경위·손해액 심사, 책임보험 한도 내 지급.</li>\n<li><strong>5. 구상 절차 (정부 → 가해자)</strong> — 정부가 가해자에 대해 구상권 행사. 피해자는 별도 민사소송 검토 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 정부보장사업 청구, AI로 정리해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">신청 자격·서류·기한까지 AI가 단계별로 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 정부보장사업 7가지',
        content:
          '<p><strong style="color:#1e3a5f">신청서·사고사실확인원·진단서·영수증 등 정형화된 양식이 필요합니다.</strong></p>\n<ul>\n<li><strong>1. 정부보장사업 보상금 청구서</strong> — 손해보험협회 양식. 본인·법정대리인 서명.</li>\n<li><strong>2. 경찰 사고사실확인원</strong> — 경찰서 교통조사계 발급. 뺑소니·미가입 사실 명시.</li>\n<li><strong>3. 진단서·후유장해진단서</strong> — 상해 정도·치료 내용. 후유장해는 증상 고정 시점에 추가 발급.</li>\n<li><strong>4. 진료비 영수증·MRI·CT 영상자료</strong> — 손해액 산정 기초.</li>\n<li><strong>5. 본인 자동차보험 약관·청구 결과</strong> — 본인 보험 우선 청구 후 부족분 입증.</li>\n<li><strong>6. 차량 견적서·수리비 영수증</strong> — 물적 손해 산정 (대인 한도 외 별도 검토).</li>\n<li><strong>7. 가족관계증명서·인감증명서</strong> — 사망 시 유족이 청구하는 경우 상속 입증.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인 자동차보험에 무보험차상해 특약이 있으면 1억~5억 한도까지 별도 보장될 소지가 있어 우선 확인하세요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 무보험차 사고 보상 5단계',
        content:
          '<p><strong style="color:#1e3a5f">본인 보험·정부보장사업·민사소송을 순서대로 검토합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고 신고·진단 (사고 직후)</strong> — 경찰 신고, 사고사실확인원, 의료기관 진단서 발급.</li>\n<li><strong>2단계 — 본인 보험 청구 (1~2주)</strong> — 자기신체사고·무보험차상해·실비보험 우선 청구.</li>\n<li><strong>3단계 — 정부보장사업 청구 (사고 후 3년 이내)</strong> — 손해보험협회(02-3702-8500) 또는 위탁 보험사 12곳 중 1곳.</li>\n<li><strong>4단계 — 심사·지급 (3~6개월)</strong> — 사고 경위·손해액 심사 후 자배법 한도 내 지급.</li>\n<li><strong>5단계 — 민사소송 (필요 시)</strong> — 한도 초과 손해는 가해자(식별된 경우) 또는 차주에 직접 청구. 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 무보험차 사고 보상 순서, 단계별로 점검해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 무면허운전 면책차량과 무보험차상해 특약 적용',
        summary:
          '서울지방법원 97가합78100 사건(서울지법, 1998.02.25 선고)에서 법원은 가해차량이 자동차종합보험에 가입되어 있더라도 무면허운전 중 사고로 보상 대상에서 제외되었다면 실질적으로 무보험차량과 다름이 없다는 점을 고려해, 보험계약상 뺑소니·무보험자동차 상해담보 특별약관의 무보험차에는 형식적 미가입 차량뿐 아니라 특약 등으로 손해배상청구권이 있어도 보험금을 지급받지 못하게 되는 차량까지 포함된다고 판시했습니다.',
        takeaway: '가해차량이 형식상 보험에 가입되어 있어도 면책 사유로 보상이 안 되면 본인 무보험차상해 특약·정부보장사업 청구가 검토될 소지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '뺑소니 차량이 나중에 식별되면 어떻게 되나요?',
        answer:
          '<strong>정부보장사업으로 우선 보상받은 후, 정부가 가해자에게 구상권을 행사합니다.</strong> 한도 초과 손해는 피해자가 가해자에게 직접 민사소송을 검토할 수 있어요.',
      },
      {
        question: '본인이 무보험 차량을 운전했다 다친 경우도 청구 가능한가요?',
        answer:
          '<strong>본인이 운행자인 경우엔 정부보장사업 적용이 어려운 사례가 많습니다.</strong> 가족 보험·실비보험·산재 등 다른 경로를 검토하세요.',
      },
      {
        question: '청구 시효 3년이 지나면 완전히 끝인가요?',
        answer:
          '<strong>자배법 제41조에 따라 손해 발생을 안 날로부터 3년이 시효이며, 시효가 지나면 청구권이 소멸합니다.</strong> 다만 후유장해는 증상 고정 시점부터 다시 카운트되므로 사건별 검토가 필요해요.',
      },
      {
        question: '한도 1억5천만이 모자란 경우는 어떻게 하나요?',
        answer:
          '<strong>본인 무보험차상해 특약(보통 2억~5억 한도)으로 보충하거나 가해자가 식별되면 민사소송으로 한도 초과 손해를 청구할 수 있습니다.</strong>',
      },
      {
        question: '외국인도 정부보장사업 청구가 가능한가요?',
        answer:
          '<strong>국내에서 발생한 사고면 외국인도 청구할 수 있습니다.</strong> 다만 주민등록번호 외 외국인등록번호·여권 사본 등 추가 신원 자료가 필요해요.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '뺑소니 사실과 다른 신고 방어', href: '/guide/traffic-accident/traffic-accident-hit-and-run-falsely-accused' },
      { label: '교통사고 인적 손해 배상 청구', href: '/guide/traffic-accident/traffic-accident-personal-injury-claim' },
      { label: '교통사고 합의 전 준비서류', href: '/guide/traffic-accident/traffic-accident-settlement-documents' },
      { label: '교통사고 블랙박스 증거 활용', href: '/guide/traffic-accident/traffic-accident-blackbox-evidence' },
      { label: '음주운전 차량 동승자 자기보험 보상', href: '/guide/traffic-accident/traffic-accident-drunk-passenger-self-insurance' },
    ],
  },

  // ─── 4. traffic-accident / tunnel-pile-up-multi (Q&A형, victim) ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-tunnel-pile-up-multi',
    keyword: '터널 다중추돌 책임 분배',
    questionKeyword: '터널 안 다중추돌 사고는 누구에게 어떻게 청구하나요?',
    ctaKeyword: '터널 다중추돌 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '터널 다중추돌 사고 책임 분배 5가지 쟁점 정리 | 로앤가이드',
      description:
        '터널 안 다중추돌로 휘말린 피해자가 선행차·후행차 과실, 안개·결빙 도로관리청 책임까지 청구 경로를 지금 확인하세요.',
    },
    intro:
      '<p>터널 안에서 앞차와 뒤차에 동시에 끼여 다중추돌 사고를 당하면 "어느 차량이 가해자고 어디에 청구해야 하나" 정리부터 막막해집니다. 터널은 시야 제한·미끄러움·환기 부족 등 사고 유발 요인이 많고, 한 번 사고가 나면 후속 차량이 줄줄이 추돌하는 연쇄 사고로 확대되기 쉽습니다. 다중추돌은 차량 간 1:1 충돌로 분리 평가되는 것이 원칙이며, 도로관리청(한국도로공사·지자체) 책임도 함께 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 터널 다중추돌 — 과실 분배는 어떻게 정해지나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 다중추돌은 각 차량 간 1:1 충돌로 분리 평가되며, 안전거리 미확보·전방주시의무 위반이 핵심 쟁점입니다.</strong></p>\n<ul>\n<li><strong>도로교통법 제19조 제1항</strong> — 안전거리 확보 의무. 터널·우천 등 시야 제한 시 안전거리 가중.</li>\n<li><strong>1:1 분리 평가 원칙</strong> — A차→B차→C차 연쇄추돌이면 A-B 사고와 B-C 사고를 별개로 평가.</li>\n<li><strong>선두 차량 급정거</strong> — 정당하지 않은 급정거(보복·짜증 제동)면 선두차에도 일부 과실 분담 검토.</li>\n<li><strong>중간 차량</strong> — 앞차 추돌 후 다시 뒤차에 추돌당한 경우, 두 사고의 손해를 분리 청구.</li>\n<li><strong>마지막 차량</strong> — 안전거리 미확보가 명확하면 100% 과실 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "어느 차량과 어떤 충돌이 있었는지" 시간 순서를 분리 정리하면 청구 대상이 명확해집니다.</blockquote>',
      },
      {
        title: 'Q. 터널 도로관리청에도 책임을 물을 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 터널 안 안개·결빙·낙하물 방치 등 도로 관리 의무 위반이 인정되면 한국도로공사·지자체에 국가배상법 청구가 검토될 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>국가배상법 제5조</strong> — 영조물(도로) 설치·관리 하자로 인한 손해 배상.</li>\n<li><strong>도로 관리 의무</strong> — 안개·결빙 시 주의 안내·살염·통행 제한, 낙하물 신속 제거 등.</li>\n<li><strong>입증 요건</strong> — 사고 당시 도로 상태(안개·결빙·낙하물) + 도로공사 인지·방치 정황 + 인과관계.</li>\n<li><strong>청구 시효</strong> — 손해 발생을 안 날로부터 3년, 발생일로부터 5년(국가배상법 제8조 + 민법 시효).</li>\n<li><strong>병행 청구</strong> — 가해 차량 보험과 도로관리청을 동시에 피고로 삼는 공동 청구도 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 터널 다중추돌 청구 경로, AI로 정리해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">차량 간 분배·도로관리청 책임까지 AI가 케이스별로 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 다중추돌 입증 7가지',
        content:
          '<p><strong style="color:#1e3a5f">차량별 충돌 시점·도로 상태·안전거리를 객관적으로 입증할 자료가 핵심입니다.</strong></p>\n<ul>\n<li><strong>1. 본인·주변 차량 블랙박스</strong> — 충돌 시점·순서가 가장 명확한 자료.</li>\n<li><strong>2. 터널 CCTV</strong> — 한국도로공사·지자체에 보존 요청 (보존 기간 7~30일).</li>\n<li><strong>3. EDR(사고기록장치)</strong> — 사고 직전 5초 속도·제동·핸들 데이터.</li>\n<li><strong>4. 경찰 사고사실확인원</strong> — 충돌 차량 목록·번호판 정리.</li>\n<li><strong>5. 도로 상태 자료</strong> — 사고 시각 안개·결빙 기상기록(기상청), 도로공사 안내방송 기록.</li>\n<li><strong>6. 진단서·치료비 영수증</strong> — 인적 손해 입증.</li>\n<li><strong>7. 차량 수리 견적서·사진</strong> — 충돌 부위·파손 정도가 충돌 순서 추정의 자료가 됨.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 차량 파손 부위(앞범퍼/뒷범퍼)와 시간 순서를 매칭해두면 1:1 충돌 분리 평가에 결정적이에요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 다중추돌 보상 5단계',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·차량별 보험 청구·도로관리청 검토·분쟁조정·소송 단계로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 확보 (사고 직후)</strong> — 블랙박스 별도 저장 + CCTV 보존 요청 + 차량 번호판 사진.</li>\n<li><strong>2단계 — 차량별 보험 접수 (당일~3일)</strong> — 앞차·뒤차 보험사 양측 접수. 1:1 충돌별 분리 청구.</li>\n<li><strong>3단계 — 과실 협의 (2~4주)</strong> — 손해보험협회 과실비율 인정기준 시뮬레이터.</li>\n<li><strong>4단계 — 도로관리청 검토 (필요 시)</strong> — 안개·결빙·낙하물 방치 입증 시 국가배상법 청구 검토.</li>\n<li><strong>5단계 — 분쟁조정·소송 (1~6개월)</strong> — 손해보험협회 분쟁심의위원회 무료 조정 → 합의 불성립 시 민사소송. 시효 3년 주의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 터널 다중추돌 보상 순서, 단계별로 점검해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 야간 미등 미점등 정차와 사고 인과관계',
        summary:
          '대법원 96도2030 사건(대법원, 1996.12.20 선고)에서 법원은 야간에 굽은 도로에 미등·차폭등을 켜지 않고 화물차를 주차시켜 놓아 오토바이가 추돌해 운전자가 사망한 사안에서, 주차행위와 사고 발생 사이의 인과관계가 없다고 본 원심판결을 심리미진 등을 이유로 파기했습니다.',
        takeaway: '터널·야간 등 시야 제한 환경에서 선행 차량의 미등 미점등·정당하지 않은 정차가 사고 원인에 기여했다면 후방 차량 단독 책임으로 단정할 수 없고 과실 분담이 인정될 소지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '연쇄추돌이라 누가 가해자인지 모르겠어요. 어디부터 시작하나요?',
        answer:
          '<strong>본인 차량 기준 앞차와 뒤차로 분리해 각 보험사에 양측 접수하세요.</strong> 블랙박스로 충돌 순서를 입증하면 1:1 분리 평가가 진행돼요.',
      },
      {
        question: '안개로 시야가 불량했는데 도로공사에 청구할 수 있나요?',
        answer:
          '<strong>안개 안내방송·통행 제한 의무 위반이 인정되면 국가배상법 청구가 검토될 소지가 있습니다.</strong> 사고 시각 기상기록과 도로공사 대응 기록 비교가 핵심이에요.',
      },
      {
        question: '터널 천장 낙하물에 차량이 부서졌어요. 보상은?',
        answer:
          '<strong>도로관리청의 시설 관리 하자가 인정되면 국가배상법으로 청구할 수 있습니다.</strong> 본인 자기차량손해보험 우선 처리 후 한국도로공사에 구상하는 방식도 가능해요.',
      },
      {
        question: '본인 자차 처리 후 가해 차량에 청구할 수 있나요?',
        answer:
          '<strong>대법원 2022다287284 판결에 따라 자기부담금 중 상대방 책임비율에 해당하는 금액은 별도 청구할 수 있습니다.</strong> 자차로 우선 처리해도 잔여 청구권이 유지될 소지가 있어요.',
      },
      {
        question: '여러 보험사가 얽혀 있어 협의가 길어집니다. 어디에 신청하나요?',
        answer:
          '<strong>손해보험협회 과실비율 분쟁심의위원회(무료) 또는 금감원(1332) 분쟁조정으로 신청할 수 있습니다.</strong> 조정에 불복하면 민사소송으로 진행 가능해요.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '쌍방과실 비율 다툼 절차', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '교통사고 블랙박스 증거 활용', href: '/guide/traffic-accident/traffic-accident-blackbox-evidence' },
      { label: '후방 추돌 + 급정거 과실 분배', href: '/guide/traffic-accident/traffic-accident-rear-end-sudden-brake-fault' },
      { label: '교통사고 인적 손해 배상 청구', href: '/guide/traffic-accident/traffic-accident-personal-injury-claim' },
      { label: '교통사고 합의 전 준비서류', href: '/guide/traffic-accident/traffic-accident-settlement-documents' },
    ],
  },

  // ─── 5. traffic-accident / pedestrian-cross-jaywalk (Q&A형, accused) ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-pedestrian-cross-jaywalk',
    keyword: '보행자 무단횡단 사고 처벌',
    questionKeyword: '무단횡단 보행자를 친 사고로 형사 처벌 통보를 받았는데 어떻게 대응하나요?',
    ctaKeyword: '무단횡단 사고 합의 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '보행자 무단횡단 사고 12대 중과실 5가지 정리 | 로앤가이드',
      description:
        '무단횡단 보행자를 친 사고로 형사 처벌 통보를 받았다면, 12대 중과실 해당 여부와 합의·면허 처분 우선순위를 지금 확인하세요.',
    },
    intro:
      '<p>늦은 밤 도로에서 갑자기 뛰어든 보행자를 친 뒤 경찰서 출석 통보를 받으면 "보행자가 무단횡단인데 왜 내가 처벌받지" 답답하실 수 있습니다. 무단횡단 사고는 12대 중과실에 해당하지 않는 일반 교통사고로 분류되는 경우가 많지만, 횡단보도·신호위반·과속·전방주시의무 위반 등이 더해지면 12대 중과실로 가중될 소지가 있습니다. 혐의를 받고 있다면 사고 정황·증거·합의 시점을 정리해두는 것이 양형의 분기점입니다.</p>',
    sections: [
      {
        title: 'Q. 무단횡단 사고도 12대 중과실에 해당하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 단순 무단횡단 사고는 12대 중과실에 해당하지 않는 일반 교통사고로 분류되는 경우가 많지만, 횡단보도 침범·신호위반 등이 더해지면 12대 중과실로 가중될 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>교통사고처리특례법 제3조 제2항 단서</strong> — 12대 중과실(신호위반·중앙선 침범·과속·앞지르기 위반·횡단보도 보행자 보호의무 위반·무면허·음주 등) 사고는 종합보험 면책 예외.</li>\n<li><strong>무단횡단</strong> — 횡단보도 외 도로 횡단 보행자에 대한 사고는 12대 중과실 6호(횡단보도 보행자 보호의무 위반)에 해당하지 않을 소지가 큼. 다만 교통사고처리특례법 제3조 제1항 일반 업무상과실치상으로는 처리.</li>\n<li><strong>혐의를 받고 있다면</strong> 사고 시점 신호 상태, 본인 속도, 보행자 진입 위치 등을 객관 자료로 정리하는 것이 우선입니다.</li>\n<li><strong>종합보험 가입자</strong> — 12대 중과실이 아니면 공소권 없음으로 처리되는 사례가 많음(교특법 제4조 제1항).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사고가 12대 중과실에 해당하는지 + 종합보험 가입 여부가 형사 처리의 첫 분기점입니다.</blockquote>',
      },
      {
        title: 'Q. 보행자 보호의무는 어디까지 적용되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 도로교통법 제27조는 횡단보도뿐 아니라 일반 도로에서도 보행자 보호의무를 규정하고 있어, 무단횡단 보행자라도 운전자의 주의의무가 완전히 면제되지는 않습니다.</strong></p>\n<ul>\n<li><strong>도로교통법 제27조 제1항</strong> — 모든 차의 운전자는 신호기 지시에 따라 횡단보도를 횡단하는 보행자의 통행을 방해하지 않을 의무.</li>\n<li><strong>도로교통법 제27조 제3항</strong> — 모든 차의 운전자는 보행자 통행을 방해하거나 위험을 주지 아니하도록 서행하거나 일시정지할 의무.</li>\n<li><strong>판례 입장</strong> — 운전자에게는 타인이 교통법규를 위반할 것까지 예상해 사고를 방지할 특별한 주의의무가 있다고 보기 어렵지만, 일반적 전방주시의무·서행 의무는 유지됨.</li>\n<li><strong>사실과 다르게 신고되었다면</strong> 블랙박스·CCTV로 보행자 진입 시점·본인 속도·신호 상태를 객관 입증하는 것이 권장됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 무단횡단 사고 대응, AI로 정리해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">12대 중과실 해당 여부·합의 시점까지 AI가 상황별로 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 형사 처벌·면허 처분·합의 우선순위는?',
        content:
          '<p><strong style="color:#1e3a5f">A. 형사(공소 여부)·민사(손해배상)·행정(면허 처분) 3개 트랙이 동시에 진행되며, 합의 시점이 형사 양형에 가장 큰 영향을 줍니다.</strong></p>\n<ul>\n<li><strong>형사 트랙</strong> — 12대 중과실 아님 + 종합보험 가입 시 공소권 없음 처리. 중과실 인정 시 약식기소·정식재판.</li>\n<li><strong>면허 행정처분</strong> — 사고 정도에 따라 벌점·면허 정지·취소 통보. 처분 통보 후 90일 내 행정심판으로 다툴 수 있어요.</li>\n<li><strong>합의 효과</strong> — 처벌불원 의사가 명시되면 양형에 강하게 반영. 검찰 송치 전 합의가 가장 효과 큼.</li>\n<li><strong>합의 우선순위</strong> — ① 보험사 대인배상 진행 → ② 형사합의금 별도 산정(경상 200만~500만, 중상해 1,000만~3,000만 검토 사례) → ③ 합의서·반성문·탄원서 양형자료 제출.</li>\n<li><strong>공탁</strong> — 피해자가 합의 거부 시 법원에 합의금 예치하는 형사공탁 제도 활용 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 사고 직후 진술이 나중까지 영향을 미치므로, 변호인 상담(법률구조공단 132 무료) 후 진술을 정리하는 것이 권장됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 무단횡단 사고 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·변호인 상담·합의·양형자료·재판 대응을 동시에 관리합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 확보 (사고 직후)</strong> — 본인 블랙박스 별도 저장, CCTV 보존 요청, 사고 시각 신호 점등기록 청구.</li>\n<li><strong>2단계 — 변호인 상담 (조사 전)</strong> — 법률구조공단(132) 무료 상담 또는 사선 변호인 검토.</li>\n<li><strong>3단계 — 경찰 조사·면허 처분 통지 (1~4주)</strong> — 사고 정황 일관 진술. 면허 처분 통지 시 행정심판 90일 카운트 시작.</li>\n<li><strong>4단계 — 형사합의 (검찰 송치 전 권장)</strong> — 보험사 대인배상과 별도로 형사합의금 산정. 합의 거부 시 형사공탁 검토.</li>\n<li><strong>5단계 — 검찰·법원 (1~6개월)</strong> — 합의서·반성문·탄원서 제출, 약식기소·집행유예 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 무단횡단 사고 처리 순서, 단계별로 점검해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 횡단보도 보행자 보호의무의 내용',
        summary:
          '대법원 2016도17442 사건(대법원, 2017.03.15 선고)에서 법원은 모든 차의 운전자는 신호기의 지시에 따라 횡단보도를 횡단하는 보행자가 있을 때에는 횡단보도에의 진입 선후를 불문하고 일시정지하는 등의 조치를 취해야 하며, 다만 자동차가 횡단보도에 먼저 진입한 경우로서 그대로 진행하더라도 보행자의 횡단을 방해하거나 통행에 위험을 초래하지 아니할 상황이라면 그대로 진행할 수 있다고 판시했습니다.',
        takeaway: '횡단보도 진입 보행자에 대한 운전자의 보호의무는 강하게 적용되지만, 보행자의 신호위반·돌발 진입 등 정황은 종합 평가되어 12대 중과실 인정 여부의 분기점이 될 소지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '무단횡단인데 왜 운전자가 처벌받나요?',
        answer:
          '<strong>운전자의 전방주시의무·서행 의무 위반이 인정되면 일반 업무상과실치상으로 처리될 소지가 있습니다.</strong> 다만 12대 중과실이 아니면 종합보험 가입 시 공소권 없음으로 정리되는 사례가 많아요.',
      },
      {
        question: '보행자 무단횡단이 명확하면 본인 무과실이 인정되나요?',
        answer:
          '<strong>가능성이 있습니다.</strong> 본인 속도·신호 준수·전방주시가 입증되고 보행자가 갑자기 뛰어든 정황이 명확하면 무과실 다툼 여지가 있어요. 블랙박스 자료가 결정적이에요.',
      },
      {
        question: '면허 처분 통보를 받았는데 행정심판으로 다툴 수 있나요?',
        answer:
          '<strong>처분 통보 후 90일 이내 행정심판 청구 가능합니다.</strong> 본인 운전 경력·생계 영향·합의 진행 정황 등을 양형 자료로 제출할 수 있어요.',
      },
      {
        question: '피해자가 사망하면 합의 자체가 어렵지 않나요?',
        answer:
          '<strong>유족과 별도 합의를 진행해야 하며, 거부 시 형사공탁 제도를 활용할 수 있습니다.</strong> 변호인 조력 아래 합의금·공탁 액수 검토가 권장돼요.',
      },
      {
        question: '음주·신호위반이 더해진 무단횡단 사고는 어떻게 다투나요?',
        answer:
          '<strong>음주·신호위반은 12대 중과실에 해당해 종합보험 면책 예외이므로 별도 형사 절차가 진행됩니다.</strong> 음주 측정치·신호 점등기록 등 객관 자료를 우선 점검하세요.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '신호위반 12대 중과실 합의 영향', href: '/guide/traffic-accident/traffic-accident-signal-violation-criminal-impact' },
      { label: '교통사고 형사합의 절차', href: '/guide/traffic-accident/traffic-accident-criminal-settlement' },
      { label: '뺑소니 사실과 다른 신고 방어', href: '/guide/traffic-accident/traffic-accident-hit-and-run-falsely-accused' },
      { label: '교통사고 12대 중과실 정리', href: '/guide/traffic-accident/traffic-accident-12-major-faults-settlement-impact' },
      { label: '교통사고 블랙박스 증거 활용', href: '/guide/traffic-accident/traffic-accident-blackbox-evidence' },
    ],
  },
];
