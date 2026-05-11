import { SpokePage } from '../spoke-pages';

// batch55 traffic A 3개: 우회전 횡단보도 보행자 + 스쿨존 30 초과 민식이법 + 무보험차 정부보장사업
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 우회전 중 횡단보도 보행자를 접촉해 11대 중과실 입건된 운전자가 도로교통법 제27조·교통사고처리특례법 형사 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 어린이보호구역에서 시속 30km 초과 사고로 민식이법 입건된 운전자가 양형 변수와 형사 대응 트랙을 점검하도록 돕는 페이지다.
// 3. 이 페이지는 무보험 가해자에게 차량 파손·후유증 피해를 입은 피해자가 자동차손해배상보장법 제30조 정부보장사업·구상권 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch55TrafficA: SpokePage[] = [
  // ─── 1. traffic-accident / right-turn-pedestrian-crosswalk ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-right-turn-pedestrian-crosswalk',
    keyword: '우회전 횡단보도 보행자 접촉',
    questionKeyword: '우회전하다 횡단보도 보행자를 접촉했어요. 11대 중과실로 처벌되나요?',
    ctaKeyword: '우회전 횡단보도 보행자 사고 형사 점검',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '우회전 횡단보도 보행자 접촉 4단계 대응 | 로앤가이드',
      description:
        '우회전 중 횡단보도 보행자 접촉 혐의를 받고 있다면 도로교통법 제27조·교특법 11대 중과실 형사 4단계 대응을 지금 확인하세요.',
    },
    intro:
      '<p>"우회전하면서 횡단보도를 통과하던 중 신호 대기 중 길을 건너던 보행자와 살짝 접촉했어요. 보행자가 넘어지며 무릎을 다쳤고 경찰 출석 통지가 왔습니다. 11대 중과실이라는 말에 머리가 하얘져요." 우회전 중 횡단보도 보행자 접촉은 도로교통법 제27조 제1항(횡단보도 보행자 보호의무) 위반으로 교통사고처리특례법 제3조 제2항 단서 제6호 11대 중과실에 해당합니다. 종합보험 가입에도 형사처벌 트랙이 진행돼요. 혐의를 받고 있다면 사고 직후 블랙박스·신호 정황·합의 자료가 양형의 핵심입니다. 단정형 자백 회피 + 객관 자료 정리 + 합의·반성으로 약식기소·집행유예를 검토해볼 수 있어요.</p>',
    sections: [
      {
        title: '우회전 횡단보도 사고 — 적용 법률 4가지 분기',
        content:
          '<p><strong style="color:#1e3a5f">신호 단계·보행자 위치·상해 정도에 따라 적용 법률이 분기됩니다.</strong></p>\n<ul>\n<li><strong>① 도로교통법 제27조 제1항 (횡단보도 보행자 보호의무)</strong> — 모든 차량 운전자는 신호 유무 불문 횡단보도 보행자가 있을 때 일시정지 의무. 위반 시 11대 중과실.</li>\n<li><strong>② 교통사고처리특례법 제3조 제2항 단서 제6호</strong> — 횡단보도 보행자 보호의무 위반은 종합보험 가입에도 형사처벌 면책 예외. 5년 이하 금고 또는 2천만원 이하 벌금.</li>\n<li><strong>③ 도로교통법 제25조의2 (우회전 일시정지)</strong> — 2022.07 신설. 보행자 통행 시 우회전 일시정지 의무. 위반 시 범칙금·벌점 별도.</li>\n<li><strong>④ 민법 제750조 손해배상</strong> — 보행자 치료비·위자료·후유장해 손해배상. 자동차종합보험에서 처리되지만 위자료·과실비율 협상은 별도.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 11대 중과실은 종합보험 가입에도 형사처벌 진행. 다만 합의·반성·초범·경상해는 약식기소·집행유예 검토 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 우회전 횡단보도 사고 형사 4단계',
        content:
          '<p><strong style="color:#1e3a5f">자료 정리·경찰 조사·합의·검찰 송치 단계로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 출석조사 전 자료 정리 (출석 통지~3일)</strong> — 본인·주변 차량 블랙박스 별도 저장, 사고 시각·신호 단계·차량 속도 정황 정리, 횡단보도 신호기·CCTV 보전 요청, 변호인 선임 검토.</li>\n<li><strong>2단계 — 경찰 출석조사 (1~2주)</strong> — 단정형 자백 회피 + 사실관계 위주 진술. 우회전 일시정지 이행 여부, 보행자 인지 시점, 차량 속도 객관 자료로 일관 진술.</li>\n<li><strong>3단계 — 합의·처벌불원 (1~3개월)</strong> — 피해 보행자와 합의·처벌불원서 작성. 11대 중과실은 반의사불벌이 아니지만 합의는 양형 결정 요소. 보험사 통해 치료비·위자료 우선 처리.</li>\n<li><strong>4단계 — 검찰 송치·약식기소 (1~3개월)</strong> — 합의·반성·초범·경상해 시 약식기소(벌금) 검토. 중상해·후유장해 사건은 정식기소 가능성. 정식기소 시 양형 자료 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 우회전 횡단보도 사고 형사 트랙, AI로 정리해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 양형 자료 6가지',
        content:
          '<p><strong style="color:#1e3a5f">우회전 일시정지 이행·합의·양형 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 본인·주변 차량 블랙박스</strong> — 우회전 직전 일시정지 여부, 보행자 인지 시점, 차량 속도 입증.</li>\n<li><strong>2. 횡단보도 신호기·CCTV 영상</strong> — 신호 단계 객관 입증. 시·구청 또는 관할 경찰서 14일 내 보전 요청.</li>\n<li><strong>3. 사고 현장 사진</strong> — 횡단보도 폭, 신호기 위치, 시야 차단 요소, 사고 지점 다각도 촬영.</li>\n<li><strong>4. 합의서·처벌불원서</strong> — 피해 보행자와 합의 시 작성. 인감증명·신분증 첨부.</li>\n<li><strong>5. 반성문·탄원서</strong> — 자필 반성문 + 가족·직장 동료 탄원. 봉사활동 증빙.</li>\n<li><strong>6. 자동차종합보험 가입증명</strong> — 보험사 통한 치료비·위자료 보상 진행 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 우회전 일시정지 이행이 블랙박스로 입증되면 양형 감경 사유. 다만 보행자 인지 후 회피 동작 부재 시에는 가중 사유. 객관 자료로 정확히 입증하는 것이 검토해볼 수 있는 방향입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 우회전 횡단보도 사고에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"보행자 못 봤다"는 진술</strong> — 우회전 시 운전자 전방·측방 시야 확보 의무. 단순 부지 자체가 면책 사유 아님.</li>\n<li><strong>"신호 따라 갔는데 무슨 잘못"이라는 항변</strong> — 차량 신호 녹색이라도 횡단보도 보행자 우선. 도로교통법 제27조 제1항 일시정지 의무.</li>\n<li><strong>종합보험 가입했으니 형사 면책 오해</strong> — 11대 중과실은 교특법 면책 예외. 형사 절차 별도 진행.</li>\n<li><strong>합의 없이 출석조사 단독 진행</strong> — 11대 중과실 사건도 합의·처벌불원이 양형 결정. 출석 전 보험사 통해 합의 시도 권장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 손해보험협회 분쟁심의위원회 www.knia.or.kr / 자동차사고분쟁조정 gicc.or.kr / 한국교통안전공단 1577-0990.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 횡단보도 보행자에 대한 운전자 주의의무',
        summary:
          '대법원 2016도17442 사건(대법원, 2017.03.15 선고)에서 법원은 도로교통법 제27조 제1항의 입법 취지가 차를 운전하여 횡단보도를 지나는 운전자의 보행자에 대한 주의의무를 강화하여 횡단보도를 통행하는 보행자의 생명·신체의 안전을 두텁게 보호하려는 데 있음을 감안하면, 모든 차의 운전자는 신호기의 지시에 따라 횡단보도를 횡단하는 보행자가 있을 때에는 횡단보도에의 진입 선후를 불문하고 일시정지하는 등의 조치를 취함으로써 보행자의 통행이 방해되지 아니하도록 하여야 한다고 판시했습니다. 우회전 차량도 동일하게 적용되며, 종합보험 가입에도 11대 중과실로 형사 책임이 가중될 수 있다는 시사점이 있습니다.',
        takeaway: '우회전 횡단보도 사고는 일시정지 의무 이행이 핵심 다툼 포인트. 블랙박스·신호 정황 객관 자료를 일관되게 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '우회전 신호 따라 진행했는데 보행자와 부딪쳤어도 11대 중과실인가요?',
        answer:
          '<strong>네, 차량 신호와 무관하게 횡단보도 보행자 보호의무가 우선입니다.</strong> 도로교통법 제27조 제1항. 다만 보행자가 갑자기 뛰어든 정황 등은 양형 감경 사유로 검토.',
      },
      {
        question: '보행자가 살짝 다쳤는데 합의하면 형사 끝나나요?',
        answer:
          '<strong>11대 중과실은 반의사불벌이 아니라 합의해도 공소제기 가능합니다.</strong> 다만 합의·반성·초범·경상해 시 약식기소(벌금)·집행유예 검토 등 양형의 결정적 요소.',
      },
      {
        question: '종합보험 가입했는데 왜 형사 처벌이 진행되나요?',
        answer:
          '<strong>11대 중과실은 교통사고처리특례법 제3조 제2항 단서 면책 예외입니다.</strong> 횡단보도 보행자 보호의무 위반은 종합보험 가입에도 형사처벌 트랙 진행.',
      },
      {
        question: '면허 행정처분과 형사 처벌은 별개인가요?',
        answer:
          '<strong>네, 별개 트랙입니다.</strong> 형사 처벌과 별도로 도로교통법상 벌점·면허정지 행정처분이 진행. 처분 통지 후 90일 내 행정심판 또는 행정소송 청구 가능.',
      },
      {
        question: '교통사고 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 자동차사고분쟁조정(gicc.or.kr) + 손해보험협회 분쟁심의위원회 www.knia.or.kr 활용.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '횡단보도 보행자 보호의무', href: '/guide/traffic-accident/traffic-accident-crosswalk-pedestrian-protection' },
      { label: '11대 중과실 합의 영향', href: '/guide/traffic-accident/traffic-accident-12-major-faults-settlement-impact' },
      { label: '교통사고 가해자 형사 1차 대응', href: '/guide/traffic-accident/traffic-accident-offender-criminal-charge-response' },
      { label: '어린이보호구역 어린이 사고', href: '/guide/traffic-accident/traffic-accident-school-zone-child' },
      { label: '교통사고 합의금 산정', href: '/guide/traffic-accident/traffic-accident-settlement-calculation' },
    ],
  },

  // ─── 2. traffic-accident / school-zone-30-over-minsik-law ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-school-zone-30-over-minsik-law',
    keyword: '스쿨존 30 초과 민식이법 양형',
    questionKeyword: '어린이보호구역에서 30km 초과로 어린이 다치게 했어요. 양형은 어떻게 결정되나요?',
    ctaKeyword: '스쿨존 30 초과 민식이법 양형 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '스쿨존 30 초과 사고 5가지 양형 변수 | 로앤가이드',
      description:
        '어린이보호구역 시속 30 초과 사고로 민식이법 입건 혐의를 받고 있다면 양형 변수 5가지와 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"평소 다니는 길이라 무심코 달렸는데 스쿨존이었고 시속 40km로 측정됐어요. 그 와중에 어린이가 뛰어들어 충돌했고 민식이법 입건이라는 말을 들었습니다." 어린이보호구역 시속 30km 초과 + 13세 미만 어린이 상해는 특정범죄가중처벌법 제5조의13(이른바 민식이법) 적용 사건입니다. 상해 시 1년 이상 15년 이하 징역 또는 500만원~3천만원 벌금, 사망 시 무기 또는 3년 이상 징역으로 처벌이 무거워요. 혐의를 받고 있다면 속도·신호·시야·합의·반성 5가지 양형 변수를 점검하는 것이 출발점입니다. 단정형 자백 회피 + 객관 자료 정리 + 피해 부모와 합의가 핵심이에요.</p>',
    sections: [
      {
        title: '민식이법 양형 변수 — 5가지 분기',
        content:
          '<p><strong style="color:#1e3a5f">아래 5가지 변수가 양형(집행유예·벌금·실형) 결정에 영향을 미칩니다.</strong></p>\n<ul>\n<li><strong>① 속도 초과 정도</strong> — 시속 30 초과 5km vs 20km 이상 차이. 가속·감속 정황 블랙박스로 입증.</li>\n<li><strong>② 신호·일시정지 이행</strong> — 보호구역 표지·신호기·횡단보도 정지선 준수 여부. 위반 시 가중.</li>\n<li><strong>③ 시야 차단·갑작스런 뛰어듦</strong> — 운전자의 통상 주의로 회피 가능했는지 객관 정황. 회피 불가능 입증 시 감경.</li>\n<li><strong>④ 피해자 상해 정도</strong> — 경상해(2주 이내) vs 중상해·후유장해. 사망 사건은 정식기소 가능성 큼.</li>\n<li><strong>⑤ 합의·반성·초범</strong> — 피해 부모와 합의·처벌불원, 자필 반성문, 초범·전과 없음, 봉사활동 증빙. 양형 감경의 결정 요소.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 민식이법은 합의해도 공소제기 가능하지만 위 5가지가 모두 유리하면 약식기소·집행유예 검토 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 민식이법 형사 4단계',
        content:
          '<p><strong style="color:#1e3a5f">자료 정리·경찰 조사·합의·검찰 송치·재판 단계로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 출석조사 전 자료 정리 (출석 통지~3일)</strong> — 블랙박스 별도 저장, 보호구역 표지·신호기·CCTV 보전 요청, 차량 속도·시야 정황 정리. 변호인 선임 검토.</li>\n<li><strong>2단계 — 경찰 출석조사 (1~2주)</strong> — 단정형 자백 회피 + 사실관계 위주 진술. 보호구역 인지 시점, 속도, 어린이 인지·회피 동작 일관 진술.</li>\n<li><strong>3단계 — 합의·처벌불원 (1~3개월)</strong> — 피해 부모와 합의·처벌불원서. 자동차종합보험 통해 치료비·위자료 우선 처리. 합의 자료가 양형 결정.</li>\n<li><strong>4단계 — 검찰 송치·기소 (1~3개월)</strong> — 합의·경상해·초범 시 약식기소·집행유예 검토. 사망·중상해는 정식기소 가능성. 정식기소 시 양형 자료 제출 + 면허 행정심판 90일 내 별도.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 민식이법 양형 변수, AI로 정리해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 양형 자료 6가지',
        content:
          '<p><strong style="color:#1e3a5f">속도·시야·합의·반성 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 본인·주변 차량 블랙박스</strong> — 사고 직전 차량 속도, 보호구역 인지 시점, 어린이 시야 진입 시점.</li>\n<li><strong>2. 보호구역 표지·신호기·CCTV</strong> — 시·구청 또는 관할 경찰서 14일 내 보전 요청.</li>\n<li><strong>3. 사고 현장 사진</strong> — 도로 형태, 신호기 위치, 시야 차단 요소, 정지선 등 다각도.</li>\n<li><strong>4. 합의서·처벌불원서</strong> — 피해 어린이 부모와 합의 시 작성. 인감증명·신분증 첨부.</li>\n<li><strong>5. 반성문·탄원서</strong> — 자필 반성문 + 가족·직장 동료 탄원. 봉사활동·기부 증빙.</li>\n<li><strong>6. 자동차종합보험 가입증명</strong> — 보험사 통한 치료비·위자료 보상 진행 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 갑작스런 뛰어듦·시야 차단 차량 등 통상적 주의로 회피 어려운 정황은 양형 감경 사유. 다만 시속 30km 초과는 객관적 가중 사유. 정확히 정리해서 검토해보는 것이 권장됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 민식이법 사건에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"보호구역인 줄 몰랐다"는 진술</strong> — 보호구역 표지는 운전자 인지 의무. 부지 자체가 면책 사유 아님.</li>\n<li><strong>"속도 초과 5km 정도라 괜찮을 것"이라는 오해</strong> — 5km 초과도 시속 30 위반. 가중 사유로 작용.</li>\n<li><strong>합의 없이 출석조사 단독 진행</strong> — 민식이법 사건도 합의·처벌불원이 양형 결정. 출석 전 합의 시도 권장.</li>\n<li><strong>면허 행정처분 별도 트랙 누락</strong> — 형사 처벌과 별도로 면허 취소·정지 행정심판 진행. 처분 통지 후 90일 내 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 자동차사고분쟁조정 gicc.or.kr / 손해보험협회 분쟁심의위원회 www.knia.or.kr / 한국교통안전공단 1577-0990.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 횡단보도 보행자 보호의무 강화',
        summary:
          '대법원 2020도17724 사건(대법원, 2022.04.14 선고)에서 법원은 횡단보도를 횡단하는 보행자에 대하여 자동차 운전자는 보행자보다 먼저 횡단보행자용 신호기가 설치되지 않은 횡단보도에 진입한 경우라도 차를 일시정지하는 등으로 보행자의 통행이 방해되지 않도록 할 의무가 원칙적으로 있다고 판시했습니다. 어린이보호구역에서는 13세 미만 보행자 보호 의무가 더 엄격하게 적용되고, 시속 30km 초과 + 어린이 상해의 결합은 특가법 제5조의13으로 가중 처벌될 수 있다는 시사점이 있습니다.',
        takeaway: '민식이법 사건은 속도·시야·합의 5변수가 양형 결정. 객관 자료를 일관되게 정리해두면 검토해볼 수 있는 방향이 넓어집니다.',
      },
    ],
    faq: [
      {
        question: '시속 30 초과가 5km 정도여도 민식이법 적용되나요?',
        answer:
          '<strong>네, 5km 초과도 시속 30 위반입니다.</strong> 다만 초과 정도가 작고 합의·반성·초범 시 양형 감경 사유로 작용할 수 있는 사례가 있습니다.',
      },
      {
        question: '어린이가 갑자기 뛰어들었는데 책임을 다 져야 하나요?',
        answer:
          '<strong>운전자의 통상 주의로 회피 어려운 정황은 양형 감경 사유로 검토됩니다.</strong> 다만 보호구역 시속 30 위반·전방주시 의무 위반이 결합되면 책임 가중.',
      },
      {
        question: '피해 부모와 합의하면 민식이법 사건이 끝나나요?',
        answer:
          '<strong>특가법 제5조의13은 반의사불벌이 아니라 합의해도 공소제기 가능합니다.</strong> 다만 합의·반성·초범 시 약식기소·집행유예 검토의 결정적 요소.',
      },
      {
        question: '민식이법 처벌 수위는 어느 정도인가요?',
        answer:
          '<strong>상해 시 1년 이상 15년 이하 징역 또는 500만원~3천만원 벌금, 사망 시 무기 또는 3년 이상 징역입니다.</strong> 합의·초범·경상해 시 집행유예가 인정되는 사례가 있습니다.',
      },
      {
        question: '교통사고 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 자동차사고분쟁조정(gicc.or.kr), 손해보험협회 분쟁심의위원회(knia.or.kr) 활용.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '어린이보호구역 12대 중과실 형사', href: '/guide/traffic-accident/traffic-accident-child-zone-12-major-faults-criminal' },
      { label: '어린이보호구역 어린이 사고', href: '/guide/traffic-accident/traffic-accident-school-zone-child' },
      { label: '어린이보호구역 속도 위반', href: '/guide/traffic-accident/traffic-accident-school-zone-speed' },
      { label: '교통사고 가해자 형사 1차 대응', href: '/guide/traffic-accident/traffic-accident-offender-criminal-charge-response' },
      { label: '12대 중과실 합의 영향', href: '/guide/traffic-accident/traffic-accident-12-major-faults-settlement-impact' },
    ],
  },

  // ─── 3. traffic-accident / uninsured-defendant-government-guarantee ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-uninsured-defendant-government-guarantee',
    keyword: '무보험차 정부보장사업 청구',
    questionKeyword: '무보험 가해자에게 사고를 당했어요. 정부보장사업과 구상권은 어떻게 되나요?',
    ctaKeyword: '무보험차 사고 정부보장사업 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '무보험차 사고 정부보장사업 5단계 청구 | 로앤가이드',
      description:
        '무보험 가해자에게 차량 파손·후유증 피해를 입었다면 자동차손해배상보장법 제30조 정부보장사업 5단계 청구를 지금 확인하세요.',
    },
    intro:
      '<p>"신호 대기 중 후방 추돌 사고로 차가 크게 파손됐고 목·허리 후유증이 남았어요. 가해자에게 보험 가입 여부를 물었더니 책임보험만 들었거나 무보험이라며 연락이 끊겼습니다." 무보험 가해자에게 피해를 입은 경우 ① 자동차손해배상보장법 제30조 정부보장사업(대인배상Ⅰ 한도) ② 본인 무보험차상해 특약 ③ 본인 자기차량손해 특약 ④ 가해자 직접 민사 청구의 다중 트랙으로 회수 가능성을 검토할 수 있습니다. 정부보장사업은 손해보험협회가 위탁 운영하고 향후 가해자에게 구상권을 행사해요. 사고 직후 자료 확보·진단서 발급·청구서 제출이 출발점입니다.</p>',
    sections: [
      {
        title: '무보험차 사고 — 청구 트랙 4가지',
        content:
          '<p><strong style="color:#1e3a5f">가해자 자력·본인 보험 가입 여부에 따라 청구 트랙이 분기됩니다.</strong></p>\n<ul>\n<li><strong>① 정부보장사업 (자동차손해배상보장법 제30조)</strong> — 가해 차량 무보험·뺑소니 시 대인배상Ⅰ 한도(사망 1.5억원·상해 등급별)로 손해보험협회에 청구. 보험협회가 가해자 구상권 행사.</li>\n<li><strong>② 본인 무보험차상해 특약</strong> — 본인 자동차보험에 무보험차상해 특약 가입 시 약관 한도 내 청구. 정부보장사업과 중복 청구 안 됨, 더 큰 금액 선택.</li>\n<li><strong>③ 본인 자기차량손해 특약</strong> — 자차 가입자 차량 파손 즉시 청구. 자기부담금 별도. 보험사가 가해자 구상.</li>\n<li><strong>④ 가해자 직접 민사 청구</strong> — 위 보장 한도 초과 손해(위자료·후유장해·일실수익)는 가해자 상대 민사소송. 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정부보장사업은 대인배상Ⅰ만, 차량 파손은 본인 자차 또는 가해자 민사. 다중 트랙으로 회수 가능 범위를 넓게 검토.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 정부보장사업 5단계',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·청구서 제출·심사·지급·구상 단계로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고 자료 확보 (사고 직후~3일)</strong> — 본인·주변 차량 블랙박스, 사고 현장 사진, 경찰 사고사실확인원, 차량 파손 사진·견적서, 진단서·치료비영수증 정리.</li>\n<li><strong>2단계 — 정부보장사업 청구서 제출 (1~4주)</strong> — 손해보험협회 정부보장사업 1544-0049 청구서 + 사고사실확인원 + 진단서 + 가해자 무보험·뺑소니 입증 자료 제출.</li>\n<li><strong>3단계 — 심사·결정 (1~3개월)</strong> — 가해자 무보험 여부·과실비율·손해액 심사. 추가 자료 요청 시 신속 제출. 결정 통지서 수령.</li>\n<li><strong>4단계 — 지급 (결정 후 1~2주)</strong> — 대인배상Ⅰ 한도 내 지급. 한도 초과 손해는 가해자 직접 민사 청구 검토.</li>\n<li><strong>5단계 — 구상권 행사·민사 보충 (3년 시효)</strong> — 협회는 가해자에게 구상권 행사. 피해자는 한도 초과 위자료·후유장해·일실수익을 가해자 상대 민사소송. 자배법 제41조 3년 시효.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 무보험차 사고 후유증·청구 트랙, AI로 정리해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">후유증 추가 청구 가능한지 AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 정부보장사업 청구 7가지',
        content:
          '<p><strong style="color:#1e3a5f">청구 심사·구상·민사 보충에 필요한 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 본인·주변 차량 블랙박스</strong> — 사고 정황·과실비율 객관 입증.</li>\n<li><strong>2. 경찰 사고사실확인원</strong> — 사고 시각·위치·정황·가해자 정보. 가해자 무보험 사실 확인.</li>\n<li><strong>3. 가해자 무보험·뺑소니 입증 자료</strong> — 보험가입조회 결과, 가해자 진술·연락두절 자료.</li>\n<li><strong>4. 진단서·후유장해진단서·치료비영수증</strong> — 인적 손해 산정. 후유장해는 6개월 이상 치료 후 진단.</li>\n<li><strong>5. 차량 파손 견적서·수리비 영수증</strong> — 자차·민사 청구 자료.</li>\n<li><strong>6. 본인 자동차보험 가입증명</strong> — 무보험차상해·자차 특약 가입 여부 확인.</li>\n<li><strong>7. 정부보장사업 청구서 (협회 양식)</strong> — 손해보험협회 1544-0049 또는 www.knia.or.kr 양식.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인 무보험차상해 특약과 정부보장사업은 중복 청구 안 됨. 보장 한도가 더 큰 쪽을 선택. 후유장해는 6개월 이상 치료 후 진단서 발급이 인정 사례가 많습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 무보험차 사고 청구에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>가해자 자력만 의지</strong> — 무보험 가해자는 자력 부족 사례 다수. 정부보장사업·본인 보험 다중 트랙 동시 검토.</li>\n<li><strong>본인 무보험차상해 특약 인지 누락</strong> — 자동차보험 약관 확인. 가입 시 즉시 보험사 청구 가능.</li>\n<li><strong>3년 시효 도과</strong> — 자배법 제41조 손해·가해자 안 날부터 3년 시효. 늦으면 청구 자체가 안 됨.</li>\n<li><strong>한도 초과 손해 민사 청구 누락</strong> — 정부보장사업은 대인배상Ⅰ만. 위자료·후유장해·일실수익은 가해자 상대 민사.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 손해보험협회 정부보장사업 1544-0049 / 자동차사고분쟁조정 gicc.or.kr / 대한법률구조공단 132 / 한국교통안전공단 1577-0990.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 무보험차상해 특약상 무보험차 범위 확장',
        summary:
          '서울지법 97가합78100 사건(서울지법, 1998.02.25 선고)에서 법원은 가해 차량이 자동차종합보험에 가입돼 있어도 무면허운전 면책약관에 따라 보험금 지급 대상에서 제외된 경우 실질적으로 무보험차량과 다름없으므로, 무보험차상해 특별약관상 무보험자동차에 의한 사고에 포함된다고 판시했습니다. 무보험차 사고 피해자는 가해 차량이 형식적으로 보험 가입돼 있어도 면책약관 적용으로 보상이 제외된 경우 본인 무보험차상해 특약·정부보장사업 청구가 가능한 사례가 있다는 시사점이 있어, 가해자 자력만 의지하지 않고 다중 트랙을 동시 검토하는 것이 도움이 됩니다.',
        takeaway: '무보험차 사고는 가해자 미특정·면책 시에도 정부보장사업·본인 무보험차상해 특약·자차 트랙을 동시 검토하면 회수 가능 범위가 넓어집니다.',
      },
    ],
    faq: [
      {
        question: '가해자가 책임보험만 가입한 경우도 정부보장사업 청구 되나요?',
        answer:
          '<strong>책임보험(대인배상Ⅰ) 가입 시 그 한도까지는 가해자 보험사 청구가 우선입니다.</strong> 한도 초과·면책 시 정부보장사업·본인 무보험차상해·민사로 보충 검토.',
      },
      {
        question: '정부보장사업으로 위자료·차량 파손도 받을 수 있나요?',
        answer:
          '<strong>정부보장사업은 대인배상Ⅰ(인적 손해)만 보장됩니다.</strong> 차량 파손은 본인 자차 특약 또는 가해자 직접 민사. 위자료 한도 초과는 민사로 청구.',
      },
      {
        question: '후유증이 6개월 후 나타났는데 추가 청구 가능한가요?',
        answer:
          '<strong>네, 후유장해진단서 발급 후 추가 청구가 가능한 사례가 있습니다.</strong> 자배법 시효 3년 내. 후유장해는 6개월 이상 치료 후 진단이 인정 폭이 넓다는 보고.',
      },
      {
        question: '본인 무보험차상해 특약과 정부보장사업 중복 청구 되나요?',
        answer:
          '<strong>중복 청구는 되지 않습니다.</strong> 보장 한도가 더 큰 쪽을 선택. 본인 특약 한도가 더 크면 본인 보험사부터 청구하는 것이 일반적.',
      },
      {
        question: '교통사고 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 손해보험협회 정부보장사업 1544-0049, 자동차사고분쟁조정(gicc.or.kr) 활용.',
      },
    ],
    cta: { text: '후유증 추가 청구 가능한지 AI로 점검하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '뺑소니 정부보장사업 청구', href: '/guide/traffic-accident/traffic-accident-hit-and-run-government-compensation' },
      { label: '교통사고 후유증 추가 청구', href: '/guide/traffic-accident/traffic-accident-aftereffect-additional-claim-settlement' },
      { label: '교통사고 합의금 산정', href: '/guide/traffic-accident/traffic-accident-settlement-calculation' },
      { label: '도로 낙하물 노상방치물 책임', href: '/guide/traffic-accident/traffic-accident-road-debris-fallen-object-liability' },
      { label: '교통사고 피해자 1차 대응', href: '/guide/traffic-accident/traffic-accident-victim-first-response' },
    ],
  },
];
