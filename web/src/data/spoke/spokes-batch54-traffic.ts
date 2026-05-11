import { SpokePage } from '../spoke-pages';

// batch54 traffic 5개: 어린이보호구역 12대 중과실 형사 + 도로 낙하물·노상방치물 사고 + 음주측정 거부와 위드마크 추정 + 동승자 자기과실 후유증 추가 청구 + 페달 오조작·급발진 주장 입증
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 어린이보호구역(스쿨존)에서 12대 중과실 사고를 일으켜 입건된 가해자가 특가법 제5조의13·교통사고처리특례법 적용 트랙을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 도로 위 낙하물·노상방치물에 의해 사고를 당한 피해자가 도로법 제25조·국가배상법 제5조 도로관리청 책임을 점검하도록 돕는 페이지다.
// 3. 이 페이지는 음주측정 호흡측정 결과에 이의가 있거나 측정 거부 후 위드마크 추정으로 기소된 운전자가 혈중알코올농도 다툼·재측정 트랙을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 동승 차량 사고로 부상을 입은 피해자가 운전자 과실·자기 과실(안전벨트 등) 분배와 후유증 추가 청구 트랙을 정리하도록 돕는 페이지다.
// 5. 이 페이지는 페달 오조작·급발진 주장으로 형사 입건되거나 보상 다툼 중인 운전자·피해자가 EDR·CCTV·블랙박스 입증 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch54Traffic: SpokePage[] = [
  // ─── 1. traffic-accident / child-zone-12-major-faults-criminal ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-child-zone-12-major-faults-criminal',
    keyword: '어린이보호구역 12대 중과실 형사',
    questionKeyword: '어린이보호구역에서 어린이를 다치게 했어요. 12대 중과실·민식이법으로 어떻게 처벌되나요?',
    ctaKeyword: '어린이보호구역 중과실 형사 트랙 점검',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '어린이보호구역 12대 중과실 사고 — 특가법·형사 5단계 트랙 정리 | 로앤가이드',
      description:
        '어린이보호구역에서 12대 중과실 교통사고 가해 혐의를 받고 있다면 특가법 제5조의13·교통사고처리특례법 형사 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"출근길에 어린이보호구역에서 갑자기 뛰어든 아이를 미처 못 보고 충돌해 다치게 했어요. 경찰서에서 출석하라는 연락이 왔는데 민식이법·12대 중과실 둘 다 적용된다고 하네요." 어린이보호구역(스쿨존) 사고는 도로교통법상 12대 중과실 중 보호구역 안전운전 의무 위반(제12조) + 특정범죄가중처벌법 제5조의13(어린이 치사상) 트랙이 결합된 형사 사건입니다. 13세 미만 어린이가 상해를 입으면 1년 이상 15년 이하 징역 또는 500만원~3천만원 벌금, 사망 시 무기 또는 3년 이상 징역으로 처벌이 무거워집니다. 혐의를 받고 있다면 사고 정황·블랙박스·CCTV 확보 + 합의·반성 자료가 양형의 핵심이에요.</p>',
    sections: [
      {
        title: '어린이보호구역 사고 — 적용 법률 4가지 분기',
        content:
          '<p><strong style="color:#1e3a5f">행위 태양·결과·피해자 연령에 따라 적용 법률이 분기됩니다.</strong></p>\n<ul>\n<li><strong>① 특가법 제5조의13 (어린이 치사상)</strong> — 어린이보호구역에서 도로교통법 제12조 제3항(서행·일시정지 등) 위반으로 13세 미만 어린이 상해 시 1년 이상 15년 이하 징역 또는 500만원~3천만원 벌금, 사망 시 무기 또는 3년 이상 징역.</li>\n<li><strong>② 교통사고처리특례법 제3조 12대 중과실</strong> — 어린이보호구역 안전운전 의무 위반은 12대 중과실로 분류되어 종합보험 가입에도 형사처벌 트랙이 진행될 수 있음.</li>\n<li><strong>③ 도로교통법 제12조·제17조</strong> — 어린이보호구역 시속 30km 제한 위반·서행 의무 위반 등 행정처분(범칙금·벌점·면허정지) 별도 진행.</li>\n<li><strong>④ 민법 제750조 손해배상</strong> — 피해 어린이·부모에 대한 인적·정신적 손해배상. 자동차종합보험으로 처리되지만 위자료·후유장해는 별도 협상.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 특가법 제5조의13(이른바 민식이법)은 합의해도 공소제기 가능. 다만 합의·반성·초범 등이 양형 사유로 작용해 집행유예·벌금 가능성 검토.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 어린이보호구역 중과실 형사 5단계',
        content:
          '<p><strong style="color:#1e3a5f">출석조사 전 자료 정리·합의·검찰 송치·재판·행정처분 단계로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 출석조사 전 자료 정리 (출석 통지~3일)</strong> — 본인·주변 차량 블랙박스 별도 저장, 사고 시각·위치 보호구역 표지·도로 형태 사진, CCTV 보전 요청, 차량 속도·전방주시 정황 메모. 변호인 선임 검토.</li>\n<li><strong>2단계 — 경찰 출석조사 (1~2주)</strong> — 진술 시 단정형 자백 회피 + 사실관계 위주 진술. 어린이의 갑작스런 뛰어듦·시야 차단 정황 정리.</li>\n<li><strong>3단계 — 합의·처벌불원 (1~3개월)</strong> — 피해 어린이 부모와 합의·처벌불원서 작성. 특가법은 반의사불벌이 아니지만 합의는 양형 감경의 결정적 요소.</li>\n<li><strong>4단계 — 검찰 송치·기소 (1~3개월)</strong> — 합의·반성·초범 시 약식기소·집행유예 검토. 사망·중상해 사건은 정식기소 가능성 큼.</li>\n<li><strong>5단계 — 재판·행정심판 병행 (3~12개월)</strong> — 정식기소 시 양형 자료 제출. 면허취소·정지 행정심판은 처분 통지 후 90일 내 별도 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 어린이보호구역 중과실 형사 트랙, AI로 정리해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 양형 자료 6가지',
        content:
          '<p><strong style="color:#1e3a5f">의도성 부정·합의·양형에 필요한 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 본인·주변 차량 블랙박스</strong> — 사고 직전 어린이 행동·차량 속도·전방 시인 거리 객관 입증.</li>\n<li><strong>2. 보호구역 표지·CCTV 영상</strong> — 시·구청 또는 관할 경찰서 14일 내 보전 요청.</li>\n<li><strong>3. 사고 시각·위치 사진</strong> — 도로 형태·신호기·시야 차단 요소 다각도 촬영.</li>\n<li><strong>4. 합의서·처벌불원서</strong> — 피해 어린이 부모와 합의 시 작성. 인감증명·신분증 첨부. 특가법 사건도 양형 핵심.</li>\n<li><strong>5. 반성문·탄원서</strong> — 자필 반성문 + 가족·직장 동료 탄원. 봉사활동·기부 증빙.</li>\n<li><strong>6. 자동차종합보험 가입증명</strong> — 보험사 통한 피해 어린이 치료비·위자료 보상 진행 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 어린이의 갑작스런 뛰어듦·시야 차단 차량 등 운전자의 통상적 주의의무로 회피하기 어려운 정황은 양형 감경 사유. 다만 보호구역 시속 30km 위반이 있었다면 가중 사유. 객관 자료로 정확히 입증하는 것이 검토해볼 수 있는 방향입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 어린이보호구역 사고에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"보호구역인 줄 몰랐다"는 진술</strong> — 보호구역 표지는 도로교통법상 운전자에게 인지 의무. 부지 자체가 면책 사유 아님.</li>\n<li><strong>합의 없이 출석조사 단독 진행</strong> — 특가법 사건도 합의·처벌불원이 양형에 결정적. 출석 전 피해 부모와 합의 시도 권장.</li>\n<li><strong>종합보험 가입했으니 형사 면책 오해</strong> — 12대 중과실은 종합보험 가입 면책 예외. 형사 절차 별도 진행.</li>\n<li><strong>면허 행정처분 별도 트랙 누락</strong> — 형사 처벌과 별도로 면허 취소·정지 행정심판이 진행. 처분 통지 후 90일 내 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 한국교통안전공단 1577-0990 / 중앙행정심판위원회 110 / 손해보험협회 분쟁심의위원회 www.knia.or.kr.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 횡단보도 보행자에 대한 운전자 주의의무',
        summary:
          '대법원 2020도17724 사건(대법원, 2022.04.14 선고)에서 법원은 횡단보도를 횡단하는 보행자에 대하여 자동차 운전자는 보행자보다 먼저 횡단보행자용 신호기가 설치되지 않은 횡단보도에 진입한 경우라도 차를 일시정지하는 등으로 보행자의 통행이 방해되지 않도록 할 의무가 원칙적으로 있다고 판시했습니다. 어린이보호구역에서는 13세 미만 보행자 보호 의무가 더 엄격하게 적용되어, 갑작스런 뛰어듦이 있어도 차량 운전자의 서행·전방주시 의무 위반이 인정되면 형사·민사 책임이 가중될 수 있다는 시사점이 있습니다.',
        takeaway: '어린이보호구역은 운전자 서행·일시정지 의무가 더 엄격하게 적용되므로, 사고 정황·차량 속도·시인 거리 객관 자료를 일관되게 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '어린이보호구역에서 시속 30km를 지켰는데도 사고가 났으면 처벌이 가벼운가요?',
        answer:
          '<strong>제한속도 준수는 양형 감경 사유로 작용합니다.</strong> 다만 전방주시·서행 의무 위반이 결합되면 처벌은 진행. 객관 자료로 안전운전 의무 이행을 입증하는 것이 검토해볼 수 있는 방향.',
      },
      {
        question: '피해 어린이 부모와 합의하면 특가법 사건이 끝나나요?',
        answer:
          '<strong>특가법 제5조의13은 반의사불벌이 아니라 합의해도 공소제기 가능합니다.</strong> 다만 합의·반성·초범 시 집행유예·벌금형 검토 등 양형 감경의 결정적 요소.',
      },
      {
        question: '12대 중과실인데 종합보험 가입했으니 형사 면책 아닌가요?',
        answer:
          '<strong>아니요, 12대 중과실은 교통사고처리특례법 면책 예외입니다.</strong> 어린이보호구역 안전운전 의무 위반은 종합보험 가입에도 형사처벌 트랙 진행.',
      },
      {
        question: '면허 행정처분과 형사 처벌은 별개인가요?',
        answer:
          '<strong>네, 별개 트랙입니다.</strong> 형사 처벌과 별도로 도로교통법상 면허취소·정지 행정처분이 진행. 처분 통지 후 90일 내 행정심판 또는 행정소송 청구 가능.',
      },
      {
        question: '교통사고 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 한국교통안전공단(1577-0990)도 사고 상담. 면허 행정심판은 중앙행정심판위원회(110).',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '어린이보호구역 어린이 사고', href: '/guide/traffic-accident/traffic-accident-school-zone-child' },
      { label: '어린이보호구역 속도 위반', href: '/guide/traffic-accident/traffic-accident-school-zone-speed' },
      { label: '어린이보호구역 형사 대응', href: '/guide/traffic-accident/traffic-accident-school-zone-criminal-response' },
      { label: '12대 중과실 합의 영향', href: '/guide/traffic-accident/traffic-accident-12-major-faults-settlement-impact' },
      { label: '교통사고 가해자 형사 1차 대응', href: '/guide/traffic-accident/traffic-accident-offender-criminal-charge-response' },
    ],
  },

  // ─── 2. traffic-accident / road-debris-fallen-object-liability ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-road-debris-fallen-object-liability',
    keyword: '도로 낙하물 노상방치물 책임',
    questionKeyword: '고속도로 낙하물에 깔려 사고가 났는데 도로공사·관리청에 청구할 수 있나요?',
    ctaKeyword: '도로 낙하물 사고 책임 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '도로 낙하물·노상방치물 사고 — 도로관리청 청구 5단계 정리 | 로앤가이드',
      description:
        '도로 위 낙하물·노상방치물에 의해 사고를 당한 피해자라면 도로법 제25조·국가배상법 제5조 도로관리청 책임 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"고속도로를 달리다 앞 트럭에서 떨어진 적재물을 피하지 못해 차량이 크게 파손됐어요. 트럭은 사라졌고 보험사는 가해자 미특정으로 보상이 어렵다고 합니다." 도로 위 낙하물·노상방치물 사고는 ① 낙하물을 떨어뜨린 가해 차량(미특정 시 정부보장사업) ② 도로관리청(한국도로공사·국토부·지자체)의 도로법 제25조 도로관리 의무 위반 ③ 본인 자동차보험 자기차량손해 특약 등 다중 트랙으로 검토할 수 있어요. 도로관리청 청구는 국가배상법 제5조 영조물 설치·관리 하자 책임이 핵심이고, 사고 직후 현장 사진·낙하물 보전·관리청 보고가 출발점입니다.</p>',
    sections: [
      {
        title: '낙하물·노상방치물 사고 — 청구 트랙 4가지',
        content:
          '<p><strong style="color:#1e3a5f">가해자 특정 여부·도로 종류에 따라 청구 트랙이 분기됩니다.</strong></p>\n<ul>\n<li><strong>① 낙하물 가해 차량 청구</strong> — 차량번호 식별 시 가해자 자동차보험 청구. 도로교통법 제39조(적재물 추락 방지 의무) 위반.</li>\n<li><strong>② 정부보장사업</strong> — 가해 차량 미특정·뺑소니 시 자동차손해배상보장법 제30조 정부보장사업으로 대인배상Ⅰ 한도 청구.</li>\n<li><strong>③ 도로관리청 청구 (국가배상법 제5조)</strong> — 한국도로공사(고속도로)·국토부(국도)·지자체(시·도·군 도로)의 도로 관리 하자 책임. 도로 위 방치물 장기 미수거·도로 결함 등.</li>\n<li><strong>④ 본인 자동차보험 자기차량손해</strong> — 자차 보험 가입 시 보장 한도 내 청구. 자기부담금 별도.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 낙하물 사고는 가해자 특정·도로관리청 책임·본인 보험 트랙을 동시 검토. 도로 위 장시간 방치된 노상방치물은 도로관리청 책임 인정 사례 다수.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 도로관리청 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·관리청 보고·국가배상 신청·심의·민사소송 단계로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고 자료 확보 (사고 직후~3일)</strong> — 본인·주변 차량 블랙박스, 낙하물·도로 상태 사진, 도로 CCTV 보전 요청, 경찰 사고사실확인원, 차량 파손 사진·견적서.</li>\n<li><strong>2단계 — 도로관리청 사고 보고 (1주 이내)</strong> — 한국도로공사 1588-2504(고속도로) / 국토부 도로국(국도) / 시·구청 도로과(지방도). 사고 사실 통보·낙하물 보전 요청.</li>\n<li><strong>3단계 — 본인 보험·정부보장사업 청구 (1~2주)</strong> — 본인 자기차량손해·자기신체사고 청구. 가해자 미특정 시 정부보장사업 동시 신청.</li>\n<li><strong>4단계 — 국가배상 신청 (90일~6개월)</strong> — 거주지 관할 지방검찰청 배상심의회에 국가배상금 지급청구서 + 사고 자료 제출. 한국도로공사 상대는 민사상 손해배상.</li>\n<li><strong>5단계 — 민사소송 (3년 시효)</strong> — 배상심의 결과에 동의 안 하면 도로관리청 상대 민사소송. 영조물 책임(국가배상법 제5조) 입증.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 도로 낙하물 사고 청구 트랙, AI로 정리해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 도로관리청 청구 7가지',
        content:
          '<p><strong style="color:#1e3a5f">국가배상 심의·민사소송에 필요한 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 본인·주변 차량 블랙박스</strong> — 낙하물 발견·회피 동작·충돌 정황. 도로 위 방치 시간 추정 자료.</li>\n<li><strong>2. 낙하물·노상방치물 사진</strong> — 다각도·근접·도로 형태 포함. 사고 직후 현장 보전.</li>\n<li><strong>3. 도로 CCTV 영상</strong> — 한국도로공사·시·구청 14일 내 보전 요청.</li>\n<li><strong>4. 경찰 사고사실확인원</strong> — 사고 시각·위치·정황 정리. 가해 차량 미특정 사실 명시.</li>\n<li><strong>5. 차량 파손 견적서·수리비 영수증</strong> — 손해 산정.</li>\n<li><strong>6. 진단서·후유장해진단서·치료비영수증</strong> — 인적 손해 산정.</li>\n<li><strong>7. 도로관리청 사고 보고서·답변서</strong> — 관리 하자 책임 다툼 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 낙하물이 도로 위 장시간 방치된 정황(블랙박스 시각·CCTV 영상)이 입증되면 도로관리청 책임 인정 사례 다수. 짧은 시간 내 사고는 가해 차량 책임 우선.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 도로 낙하물 사고 청구에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>가해 차량 추적 포기</strong> — 차량번호·차종·블랙박스 영상으로 식별 가능한 사례 다수. 경찰 사이버수사대 추적 의뢰 검토.</li>\n<li><strong>도로관리청 신고 누락</strong> — 사고 직후 한국도로공사·시·구청 즉시 신고. 사고 보고서가 국가배상 심의 핵심 자료.</li>\n<li><strong>본인 자기차량손해 특약 누락</strong> — 자차 가입자라면 즉시 청구. 자기부담금 있어도 최소 보장 가능.</li>\n<li><strong>3년 시효 도과</strong> — 국가배상·민사상 손해배상 모두 손해·가해자 안 날로부터 3년 시효. 늦으면 청구 자체가 안 됨.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 한국도로공사 1588-2504 / 손해보험협회 정부보장사업 1544-0049 / 대한법률구조공단 132 / 거주지 관할 지방검찰청 배상심의회.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 면책된 가해차량과 무보험차상해 특약 적용 범위',
        summary:
          '서울지법 97가합78100 사건(서울지법, 1998.02.25 선고)에서 법원은 가해 차량이 자동차종합보험에 가입돼 있어도 무면허운전 면책약관에 따라 보험금 지급 대상에서 제외된 경우 실질적으로 무보험차량과 다름없으므로, 무보험차상해 특약상 무보험자동차에 의한 사고에 포함된다고 판시했습니다. 도로 낙하물 사고에서 가해 차량이 미특정·도주이거나 보험 면책된 경우에도 본인 무보험차상해 특약·정부보장사업 청구가 가능한 사례가 있다는 시사점이 있어, 가해자 자력만 의지하지 않고 다중 트랙을 동시 검토하는 것이 도움이 됩니다.',
        takeaway: '낙하물 사고는 가해 차량 미특정·면책 시에도 본인 무보험차상해 특약·정부보장사업·도로관리청 청구를 동시 검토하면 회수 가능 범위가 넓어집니다.',
      },
    ],
    faq: [
      {
        question: '고속도로 낙하물 사고는 한국도로공사가 무조건 책임지나요?',
        answer:
          '<strong>아니요, 도로관리 의무 위반이 입증되어야 합니다.</strong> 낙하물이 도로 위 장시간 방치되었거나 관리 부실이 인정될 때 책임. 짧은 시간 내 사고는 가해 차량 책임 우선.',
      },
      {
        question: '가해 트럭을 못 찾았는데 보상받을 방법이 있나요?',
        answer:
          '<strong>정부보장사업(1544-0049)으로 대인배상Ⅰ 한도까지 보상 가능합니다.</strong> 본인 자동차보험 자기차량손해·자기신체사고도 동시 청구.',
      },
      {
        question: '국가배상 신청과 민사소송 중 어느 쪽이 유리한가요?',
        answer:
          '<strong>국가배상 신청은 무료·간이 절차이고 결과 불복 시 민사소송 가능합니다.</strong> 통상 국가배상 신청 → 결과 검토 → 민사소송 순서.',
      },
      {
        question: '본인 자기차량손해 특약으로 청구하면 보험료가 오르나요?',
        answer:
          '<strong>일반적으로 자기차량손해 청구는 보험료 할증 영향이 있을 수 있습니다.</strong> 다만 무과실·구상권 회수 시 영향 최소화. 보험사 약관 확인 권장.',
      },
      {
        question: '교통사고 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 한국도로공사(1588-2504)도 도로 사고 상담. 손해보험협회 분쟁심의위원회(www.knia.or.kr) 무료 조정.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '무보험차 정부보장사업 청구', href: '/guide/traffic-accident/traffic-accident-uninsured-victim-government-fund' },
      { label: '뺑소니 가해자 식별·증인', href: '/guide/traffic-accident/traffic-accident-hit-and-run-identify-witness' },
      { label: '교통사고 인적·물적 손해 청구', href: '/guide/traffic-accident/traffic-accident-compensation-calculation-guide' },
      { label: '교통사고 블랙박스 증거', href: '/guide/traffic-accident/traffic-accident-dashcam-evidence-guide' },
      { label: '교통사고 형사·민사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
    ],
  },

  // ─── 3. traffic-accident / breath-test-refusal-widmark-estimation ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-breath-test-refusal-widmark-estimation',
    keyword: '음주측정 거부 위드마크 추정',
    questionKeyword: '음주측정을 거부했더니 위드마크 공식으로 처벌하겠다고 합니다. 어떻게 다툴 수 있나요?',
    ctaKeyword: '음주측정 거부·위드마크 추정 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '음주측정 거부·위드마크 추정 — 혈중알코올 다툼 5가지 쟁점 | 로앤가이드',
      description:
        '음주측정 호흡 결과 이의·측정 거부 후 위드마크 추정으로 기소된 운전자라면 혈중알코올농도 다툼·재측정 5가지 쟁점을 지금 확인하세요.',
    },
    intro:
      '<p>"사고 후 호흡측정에서 0.04%가 나왔는데 운전 시점은 더 낮았을 거예요. 변호사는 위드마크 상승기에 측정된 거라 다툴 수 있다고 합니다." 음주운전 처벌은 운전 당시 혈중알코올농도가 기준치(0.03%) 이상이었는지가 핵심입니다. 호흡측정 시점이 운전 종료 직후가 아니거나 위드마크 공식 추정이 적용되면 ① 운전 시점 vs 측정 시점 차이 ② 상승기·하강기 구분 ③ 음주량·음주 시간 ④ 측정 절차 적법성이 다툼의 5가지 쟁점이 돼요. 대법원 2025도8137 등 최근 판례는 운전 종료 12분 후 측정 + 합리적 사정으로 기준치 초과 인정 사례를 보여주는 한편, 상승기 추정만으로는 단정 못한다는 법리도 함께 전개되어 있어요.</p>',
    sections: [
      {
        title: 'Q. 호흡측정 결과를 다툴 수 있는 5가지 쟁점은?',
        content:
          '<p><strong style="color:#1e3a5f">A. 대법원 판례·최근 양형 흐름상 아래 5가지가 핵심 다툼 포인트입니다.</strong></p>\n<ul>\n<li><strong>① 운전 종료~측정 시간 간격</strong> — 통상 30분~2시간 후 측정 시 위드마크 상승기·하강기 구분 필요. 상승기는 운전 시점이 더 낮을 가능성.</li>\n<li><strong>② 측정값과 기준치 차이</strong> — 0.03% 기준에서 측정값이 0.04%처럼 근접하면 상승기 추정 적용 시 무죄 가능성.</li>\n<li><strong>③ 음주 종료 시점·음주량</strong> — 마지막 한 잔 시점·총 음주량으로 위드마크 역추산 가능.</li>\n<li><strong>④ 측정 절차 적법성</strong> — 입 헹굼·구강 잔류물 제거·기기 검교정·재측정 요구권 안내 등 절차 위반 시 증거능력 다툼.</li>\n<li><strong>⑤ 채혈 재측정 요구</strong> — 호흡측정 결과 이의 시 즉시 채혈 재측정 요구. 채혈은 호흡보다 정확.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 호흡측정 시 입 헹굼·잔류물 확인·재측정 요구권 안내 등 절차 적법성을 사고 정황과 함께 정리하면 다툼 여지가 커집니다.</blockquote>',
      },
      {
        title: 'Q. 음주측정 거부 시 처벌이 더 무거운가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 도로교통법 제148조의2 제2항(음주측정 거부)은 1년 이상 5년 이하 징역 또는 500만원~2천만원 벌금으로, 0.08% 이상 음주운전과 동일 수준입니다.</strong></p>\n<ul>\n<li><strong>측정 거부 단독 처벌</strong> — 도로교통법 제44조 제2항(측정 응할 의무) 위반. 0.08% 이상과 동일 처벌.</li>\n<li><strong>위드마크 공식 추정 기소</strong> — 측정 거부에도 음주 정황·음주량 입증으로 위드마크 역추산해 기소 가능.</li>\n<li><strong>면허 취소 행정처분</strong> — 형사와 별도로 측정 거부는 면허취소 처분.</li>\n<li><strong>가중 사유</strong> — 측정 거부 + 위험운전치사상은 추가 처벌 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주측정·위드마크 다툼, AI로 정리해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 음주측정 다툼 6가지',
        content:
          '<p><strong style="color:#1e3a5f">호흡측정·위드마크 다툼·재측정에 필요한 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 음주 영수증·CCTV·신용카드 내역</strong> — 음주 종료 시점·총 음주량·음주 시간 정확히 입증.</li>\n<li><strong>2. 동행자 진술서</strong> — 마지막 한 잔 시점·음주량 보강.</li>\n<li><strong>3. 호흡측정 절차 기록</strong> — 입 헹굼 시간·기기 검교정·재측정 안내 여부.</li>\n<li><strong>4. 채혈 재측정 결과</strong> — 호흡 결과 이의 시 즉시 채혈 요구. 호흡-채혈 차이 다툼.</li>\n<li><strong>5. 본인·주변 차량 블랙박스</strong> — 운전 정황·차량 진행 상태.</li>\n<li><strong>6. 사고사실확인원</strong> — 운전 종료 시점·측정 시점·시간 간격.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 호흡측정 결과 이의 시 30분 이내 채혈 재측정 요구권. 채혈 거부하면 호흡 결과만 증거. 측정 직후 즉시 요구하는 것이 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 음주운전 형사 5단계',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·변호인 조력·검찰 송치·재판·면허 행정심판 단계로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 확보 (사고 직후~3일)</strong> — 음주 영수증·CCTV·동행자 진술, 호흡측정 절차 기록, 채혈 결과, 블랙박스, 사고사실확인원.</li>\n<li><strong>2단계 — 변호인 선임·조사 대응 (출석 통지~2주)</strong> — 위드마크 상승기·측정 절차 다툼 전략 수립.</li>\n<li><strong>3단계 — 검찰 송치·기소 (1~3개월)</strong> — 약식기소(벌금) vs 정식기소 분기. 다툼 사건은 정식기소.</li>\n<li><strong>4단계 — 재판 (3~12개월)</strong> — 위드마크 추정·측정 절차 다툼. 무죄 또는 유죄 시 양형.</li>\n<li><strong>5단계 — 면허 행정심판 (90일 내)</strong> — 형사와 별도로 면허취소·정지 처분에 대한 행정심판 청구.</li>\n</ol>',
      },
    ],
    cases: [
      {
        title: '판례 — 위드마크 상승기 측정과 운전 시점 혈중알코올 인정',
        summary:
          '대법원 2025도8137 사건(대법원, 2025.12.11 선고)에서 법원은 운전 종료 시점으로부터 약 12분 후 호흡측정 결과 0.037%가 측정된 사안에서, 측정 시점이 위드마크 상승기에 있을 가능성을 감안하더라도 운전 당시 혈중알코올농도가 0.03% 이상이었다고 보는 것이 논리·경험칙에 부합한다고 판시했습니다. 동시에 운전·측정 사이 시간 간격, 측정값과 기준치 차이, 음주 시간·음주량, 사고 경위 등을 종합해 합리적으로 판단해야 한다는 법리도 함께 정리되어, 호흡측정 결과·위드마크 추정에 대한 다툼은 사실관계 자료를 일관되게 정리하는 것이 핵심임을 시사합니다.',
        takeaway: '음주측정 다툼은 운전·측정 시간 간격·음주량·측정 절차 등 사실관계 자료를 일관되게 정리해야 위드마크 추정 다툼이 가능하므로, 영수증·동행자 진술·재측정 결과를 빠르게 확보해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '호흡측정 결과가 0.03% 근처면 무죄가 가능한가요?',
        answer:
          '<strong>위드마크 상승기·측정 절차 다툼으로 무죄 가능성이 있습니다.</strong> 다만 대법원은 운전 종료 직후 측정 + 합리적 사정 종합 시 인정 가능. 사실관계 자료 일관성이 핵심.',
      },
      {
        question: '음주측정 거부와 위드마크 추정 기소 중 어느 쪽이 불리한가요?',
        answer:
          '<strong>측정 거부 자체가 0.08% 이상과 동일 처벌이라 통상 더 불리합니다.</strong> 다만 음주량 입증 부족 시 위드마크 추정도 무죄 가능성.',
      },
      {
        question: '채혈 재측정은 언제 요구해야 하나요?',
        answer:
          '<strong>호흡측정 결과 통보 직후 즉시 요구해야 합니다.</strong> 30분 이내 권장. 늦으면 채혈 정확도 떨어지고 거부로 간주될 수 있음.',
      },
      {
        question: '음주측정기 검교정 자료를 받을 수 있나요?',
        answer:
          '<strong>변호인 선임 후 검찰 단계에서 기록열람·등사 신청으로 받을 수 있습니다.</strong> 검교정 누락·만료 시 증거능력 다툼.',
      },
      {
        question: '교통사고 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 한국교통안전공단(1577-0990)도 사고 상담. 면허 행정심판은 중앙행정심판위원회(110).',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '음주 혈중알코올 측정 시점', href: '/guide/traffic-accident/traffic-accident-dui-blood-test-timing' },
      { label: '음주운전 형사 절차', href: '/guide/traffic-accident/traffic-accident-drowsy-driving-criminal-process' },
      { label: '음주운전 면허 행정심판', href: '/guide/traffic-accident/traffic-accident-dui-license-administrative' },
      { label: '교통사고 가해자 형사 1차 대응', href: '/guide/traffic-accident/traffic-accident-offender-criminal-charge-response' },
      { label: '교통사고 형사·민사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
    ],
  },

  // ─── 4. traffic-accident / passenger-self-fault-aftereffect-claim ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-passenger-self-fault-aftereffect-claim',
    keyword: '동승자 자기과실 후유증 추가 청구',
    questionKeyword: '친구 차에 타다 사고 났는데 안전벨트 안 했어요. 후유증 추가 청구가 가능한가요?',
    ctaKeyword: '동승자 자기과실 후유증 추가 청구 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '동승자 자기과실·후유증 추가 청구 — 손해 산정 5가지 쟁점 | 로앤가이드',
      description:
        '동승 차량 사고로 부상을 입은 피해자라면 운전자 과실·자기 과실(안전벨트 등) 분배와 후유증 추가 청구 5가지 쟁점을 지금 확인하세요.',
    },
    intro:
      '<p>"친구 차 조수석에 탔다가 사고로 목·허리에 부상을 입었어요. 안전벨트를 매지 않은 게 마음에 걸리고, 합의 후에도 후유증이 계속 생기는데 추가 청구가 가능한지 모르겠습니다." 동승자 사고는 ① 운전자 과실(친구·가족·호의동승) ② 본인 자기 과실(안전벨트·동승 권유 등) ③ 합의 후 후유증 추가 청구 가부가 핵심 쟁점입니다. 안전벨트 미착용은 통상 5~20% 자기 과실 가산이 검토되지만, 호의동승 자체로 손해 감액은 안 되는 경향이고, 합의 후라도 후유증·후발손해는 합의 범위를 초과하면 추가 청구 가능한 사례가 많아요.</p>',
    sections: [
      {
        title: '동승자 사고 — 손해 산정 5가지 쟁점',
        content:
          '<p><strong style="color:#1e3a5f">동승 형태·자기 과실·합의 시점에 따라 산정이 분기됩니다.</strong></p>\n<ul>\n<li><strong>① 동승 형태</strong> — 무상 호의동승 / 가족 동승 / 운임 지급 동승. 호의동승 자체로 감액은 안 되는 경향(대법원 일관).</li>\n<li><strong>② 자기 과실 (안전벨트·헬멧 등)</strong> — 안전벨트 미착용은 통상 5~20% 가산. 부위별(목·허리는 인과관계 인정, 팔·다리는 약함) 다툼 가능.</li>\n<li><strong>③ 동승 권유·음주 동승</strong> — 운전자 음주 인지 동승은 30~50% 자기 과실 가산. 위험 동승 인정 사례.</li>\n<li><strong>④ 합의 범위</strong> — 합의 시점 기준 손해 + 통상 예측 가능 후유증 포함. 예측 불가능 후유증은 별도.</li>\n<li><strong>⑤ 후유증 추가 청구</strong> — 합의 후 새로 발견된 후유증·후발손해는 합의 범위 초과 시 추가 청구 가능. 3년 시효.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 호의동승 자체로 감액 안 됨(대법원 일관). 안전벨트 미착용·음주 동승 자체가 운전자 책임 면제 사유 아니지만 자기 과실 가산. 합의 후 예측 불가능 후유증은 추가 청구.</blockquote>',
      },
      {
        title: '비교 — 합의 시점·후유증 발견 시점별 청구 가능성',
        content:
          '<p><strong style="color:#1e3a5f">합의 종류·합의 후 시간 경과에 따라 추가 청구 가능 범위가 달라집니다.</strong></p>\n<ul>\n<li><strong>합의 전 후유증 발견</strong> — 향후치료비·후유장해 산정에 포함. 합의서에 "후유증 포함 일체" 명시 시 추가 청구 어려움.</li>\n<li><strong>합의 후 6개월 내 새 후유증</strong> — 합의 시점 예측 불가능했는지 의사 소견서로 입증. 예측 불가능 시 추가 청구 가능.</li>\n<li><strong>합의 후 1년 이상 경과 후 후유증</strong> — 시간 경과로 인과관계 다툼 격해짐. 의무기록·전문의 소견 필수.</li>\n<li><strong>합의서 "일체 청구 포기" 조항</strong> — 통상 효력 인정되지만 예측 불가능한 손해는 합의 범위 외라는 법리 적용 가능.</li>\n<li><strong>3년 시효</strong> — 손해·가해자 안 날로부터 3년. 후유증 발견 시점 기준 시효 기산점 다툼.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 동승자 후유증 추가 청구, AI로 점검해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 동승자 후유증 추가 청구 6가지',
        content:
          '<p><strong style="color:#1e3a5f">합의 범위 다툼·후유증 인과관계 입증에 필요한 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 기존 합의서·합의금 영수증</strong> — 합의 범위·청구 포기 조항 확인. 예측 불가능 후유증 다툼 자료.</li>\n<li><strong>2. 사고 직후~현재 의무기록</strong> — 부상 부위 변화·치료 경과·후유증 발견 시점 입증.</li>\n<li><strong>3. 후유장해진단서·전문의 소견서</strong> — 후유증 상병명·인과관계·예측 가능성 명시.</li>\n<li><strong>4. 사고 정황 자료 (블랙박스·CCTV·사고사실확인원)</strong> — 사고-후유증 인과관계 입증 보강.</li>\n<li><strong>5. 안전벨트·동승 정황 자료</strong> — 자기 과실 다툼 자료. 안전벨트 착용 사진·동승자 진술.</li>\n<li><strong>6. 본인 보험증권 (실손·교통상해)</strong> — 보장 범위 동시 확인. 운전자 보험과 별개 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 후유증 추가 청구는 의사 소견서에 "사고 직후 예측하기 어려운 후유증"이 명시되어야 합의 범위 다툼이 유리. 손해보험협회 의료자문도 활용 가능.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 동승자 후유증 추가 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·보험사 협상·분쟁조정·민사소송 단계로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 확보 (후유증 발견~3일)</strong> — 의무기록·후유장해진단서·기존 합의서·사고 자료 확보.</li>\n<li><strong>2단계 — 본인 보험 청구 (1~2주)</strong> — 자동차보험 자기신체사고·실손보험·교통상해보험 청구.</li>\n<li><strong>3단계 — 가해자 보험사 추가 협상 (1~3개월)</strong> — 합의 범위 외 후유증 입증 자료 제출. 추가 보상 협상.</li>\n<li><strong>4단계 — 손해보험협회 분쟁조정 (60일)</strong> — 분쟁심의위원회 무료 조정 신청.</li>\n<li><strong>5단계 — 민사소송 (3년 시효)</strong> — 운전자·보험사 상대 청구. 합의 범위 다툼·후유증 인과관계 입증.</li>\n</ol>',
      },
    ],
    cases: [
      {
        title: '판례 — 횡단보도 보행자에 대한 운전자 주의의무',
        summary:
          '대법원 2020도17724 사건(대법원, 2022.04.14 선고)에서 법원은 차량 운전자는 보행자보다 먼저 횡단보도에 진입한 경우라도 보행자의 안전을 우선해 일시정지 등 조치를 취할 의무가 원칙적으로 있다고 판시했습니다. 동승자 사고에서도 운전자의 전방주시·서행 의무는 동승자 보호 의무와 직결되어, 운전자 과실 인정 시 동승자가 안전벨트 미착용 등 일부 자기 과실이 있어도 운전자 책임이 우선 평가된다는 시사점이 있습니다.',
        takeaway: '동승자 사고는 운전자 안전 의무가 우선 평가되어 자기 과실 일부가 있어도 보상 청구가 가능한 사례가 많으므로, 의무기록·합의서·자기 과실 자료를 일관되게 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '안전벨트를 안 매고 친구 차에 탔어요. 보상이 안 되나요?',
        answer:
          '<strong>안전벨트 미착용은 통상 5~20% 자기 과실 가산이지만 보상 자체가 안 되는 건 아닙니다.</strong> 부위별(목·허리는 인과관계, 팔·다리는 약함) 다툼 가능.',
      },
      {
        question: '합의 후에 후유증이 생겼는데 추가 청구가 가능한가요?',
        answer:
          '<strong>합의 시점 예측 불가능했던 후유증은 추가 청구 가능한 사례가 있습니다.</strong> 의사 소견서로 인과관계·예측 불가능 입증. 3년 시효 주의.',
      },
      {
        question: '호의동승이라 책임이 가벼운가요?',
        answer:
          '<strong>호의동승 자체로 손해 감액 안 되는 경향이 대법원 일관 판례입니다.</strong> 다만 음주 인지 동승 등 위험 동승은 30~50% 자기 과실.',
      },
      {
        question: '운전자가 친구·가족이라 청구하기 부담스러워요. 대안이 있나요?',
        answer:
          '<strong>친구·가족 운전자의 자동차보험사가 보상하므로 운전자 직접 청구 부담 없습니다.</strong> 본인 자기신체사고·실손보험도 청구 가능.',
      },
      {
        question: '교통사고 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 손해보험협회 분쟁심의위원회(www.knia.or.kr) 무료 조정 활용. 한국교통안전공단(1577-0990).',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '동승자 부상 청구', href: '/guide/traffic-accident/traffic-accident-passenger-injury-claim' },
      { label: '동승자 운전자 과실', href: '/guide/traffic-accident/traffic-accident-passenger-injury-driver-fault' },
      { label: '안전벨트 미착용 과실', href: '/guide/traffic-accident/traffic-accident-seatbelt-nonuse-fault' },
      { label: '저속 후미 추돌 후유증', href: '/guide/traffic-accident/traffic-accident-low-speed-rear-end-aftereffect' },
      { label: '교통사고 인적 손해 산정', href: '/guide/traffic-accident/traffic-accident-compensation-calculation-guide' },
    ],
  },

  // ─── 5. traffic-accident / sudden-acceleration-pedal-misoperation ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-sudden-acceleration-pedal-misoperation',
    keyword: '급발진 페달 오조작 입증',
    questionKeyword: '갑자기 차가 급가속해서 사고가 났어요. 급발진을 어떻게 입증하나요?',
    ctaKeyword: '급발진·페달 오조작 입증 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '급발진·페달 오조작 사고 — EDR·블랙박스 입증 5단계 정리 | 로앤가이드',
      description:
        '페달 오조작·급발진 주장으로 형사 입건되거나 보상 다툼 중인 운전자·피해자라면 EDR·CCTV·블랙박스 입증 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"평소처럼 주차하려고 브레이크를 밟았는데 갑자기 차가 가속해 벽을 들이받았어요. 보험사는 페달 오조작이라 하고, 저는 급발진이라고 주장하는데 어떻게 입증해야 할지 막막합니다." 급발진 vs 페달 오조작 다툼은 ① EDR(사고기록장치) ② 블랙박스(엔진음·페달 음향) ③ 차량 결함 가능성 ④ CCTV 외관 영상 ⑤ 사고 기전 분석이 핵심입니다. 대법원 2007도5389처럼 급발진 정황이 인정되어 운전자 무죄가 된 사례도 있고, 반대로 EDR 분석으로 가속페달 100% 입력이 확인되면 페달 오조작으로 운전자 책임이 인정되는 흐름이 자주 나타나요. 사고 직후 차량·EDR 보전이 출발점입니다.</p>',
    sections: [
      {
        title: '급발진 vs 페달 오조작 — 입증 5가지 쟁점',
        content:
          '<p><strong style="color:#1e3a5f">차량 결함과 운전자 과실을 분리 입증하는 것이 핵심입니다.</strong></p>\n<ul>\n<li><strong>① EDR (사고기록장치)</strong> — 사고 직전 5초 가속페달·브레이크 입력값·차량 속도·RPM 기록. 가장 객관적 자료.</li>\n<li><strong>② 블랙박스 음향·영상</strong> — 엔진음 급격한 상승·브레이크등 점등 여부·운전자 반응.</li>\n<li><strong>③ 차량 결함 정황</strong> — 동일 차종 리콜·결함 신고 이력·전자제어장치 이상 사례.</li>\n<li><strong>④ CCTV 외관 영상</strong> — 차량 진행 정황·브레이크등 점등·연기·소음.</li>\n<li><strong>⑤ 사고 기전 분석</strong> — 충돌 각도·속도·브레이크 마크 유무. 한국교통안전공단·국과수 감정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: EDR 분석은 결정적 증거. 가속페달 100% 입력 + 브레이크 0% 기록이면 페달 오조작 가능성 큼. 다만 전자제어장치 이상으로 EDR 자체가 부정확한 사례도 있어 다툼 여지 존재.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 급발진 다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·차량·EDR 보전·감정·민사·형사 단계로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 확보 (사고 직후~즉시)</strong> — 본인·주변 차량 블랙박스, CCTV 보전, 차량 견인 후 EDR·전자제어장치 보존 (제조사 수거 막기). 보험사 통보.</li>\n<li><strong>2단계 — EDR·차량 감정 (1~3개월)</strong> — 한국교통안전공단(1577-0990) 자동차결함신고센터 또는 국립과학수사연구원·민간 감정업체 의뢰. EDR 데이터 추출.</li>\n<li><strong>3단계 — 동일 차종 결함·리콜 조사 (1~2개월)</strong> — 한국교통안전공단 자동차리콜센터·국토부 자동차결함신고센터 데이터 검색.</li>\n<li><strong>4단계 — 보험사·제조사 협상 (3~6개월)</strong> — 차량 결함 입증 시 제조사 제조물책임법 청구. 보험사는 자기차량손해·자기신체사고 청구.</li>\n<li><strong>5단계 — 민사·형사 (3년 시효)</strong> — 형사: 운전자 무죄 입증(급발진), 민사: 제조사 상대 손해배상.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 급발진·페달 오조작 입증 트랙, AI로 정리해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 급발진 입증 7가지',
        content:
          '<p><strong style="color:#1e3a5f">EDR·차량 감정·결함 입증에 필요한 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 본인·주변 차량 블랙박스</strong> — 엔진음·브레이크등·운전자 반응. 음향 분석 핵심.</li>\n<li><strong>2. 차량 EDR 데이터</strong> — 사고 직전 5초 가속·브레이크 입력값. 한국교통안전공단·국과수 추출.</li>\n<li><strong>3. CCTV 영상</strong> — 차량 외관 정황·브레이크등·연기. 14일 내 보전 요청.</li>\n<li><strong>4. 동일 차종 결함·리콜 자료</strong> — 한국교통안전공단 자동차리콜센터(www.car.go.kr).</li>\n<li><strong>5. 차량 정비 이력서</strong> — 평소 결함·이상 증상 기록.</li>\n<li><strong>6. 사고 기전 감정서</strong> — 충돌 각도·속도·브레이크 마크 분석.</li>\n<li><strong>7. 진단서·치료비영수증</strong> — 인적 손해 산정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사고 직후 차량을 제조사·딜러에 맡기면 EDR 데이터 변조·삭제 우려. 본인 동의 없이 차량 인도하지 말고, 한국교통안전공단·국과수에 즉시 보전 의뢰가 검토해볼 수 있는 방향.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 급발진 다툼에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>차량을 제조사에 즉시 인도</strong> — EDR 데이터 변조·삭제 우려. 한국교통안전공단·국과수 보전 우선.</li>\n<li><strong>"브레이크 밟았다"는 단정 진술</strong> — EDR 데이터와 불일치 시 진술 신빙성 다툼. 사실관계만 진술.</li>\n<li><strong>동일 차종 결함 조사 누락</strong> — 한국교통안전공단 리콜·결함 데이터 검색 필수. 동일 결함 다수 시 입증 유리.</li>\n<li><strong>3년 시효 도과</strong> — 제조물책임·국가배상·민사 모두 3년 시효. 늦으면 청구 불가.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 한국교통안전공단 자동차결함신고센터 1577-0990 / 국토부 자동차리콜센터 www.car.go.kr / 한국소비자원 1372 / 대한법률구조공단 132 / 한국과학수사연구원.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 차량 급발진 정황과 운전자 업무상과실 무죄',
        summary:
          '대법원 2007도5389 사건(대법원, 2008.06.12 선고)에서 법원은 차량 급발진으로 인한 사고로 볼 만한 여러 사정들이 있고 운전자의 업무상 과실이 있다는 점에 대한 증명이 부족하다는 이유로 무죄를 선고한 원심판결을 유지한다고 판시했습니다. 급발진 정황이 객관 자료(블랙박스·EDR·차량 결함 이력 등)로 일관되게 뒷받침되면 운전자 업무상과실치상 책임을 부정한 사례가 있다는 시사점이 있어, 사고 직후 차량·EDR 보전과 동일 차종 결함 자료 확보가 핵심임을 보여줍니다.',
        takeaway: '급발진 다툼은 EDR·블랙박스·동일 차종 결함 자료 등 객관 입증이 핵심이므로, 사고 직후 차량 보전과 한국교통안전공단·국과수 감정을 빠르게 진행해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: 'EDR 데이터가 페달 오조작으로 나오면 무조건 운전자 책임인가요?',
        answer:
          '<strong>EDR은 결정적 증거지만 전자제어장치 이상으로 부정확한 사례도 있어 다툼 여지는 있습니다.</strong> 동일 차종 결함·블랙박스 음향과 종합 판단.',
      },
      {
        question: '차량을 제조사가 가져가려고 하는데 어떻게 해야 하나요?',
        answer:
          '<strong>본인 동의 없이 차량 인도하지 마세요.</strong> EDR 데이터 변조·삭제 우려. 한국교통안전공단(1577-0990) 또는 국과수에 보전 의뢰 우선.',
      },
      {
        question: '급발진 입증 비용이 얼마나 드나요?',
        answer:
          '<strong>한국교통안전공단·국과수 감정은 무료 또는 저비용입니다.</strong> 민간 감정업체는 100~500만원. 변호인 선임 후 비용 효율적 진행.',
      },
      {
        question: '제조물책임으로 제조사 청구가 가능한가요?',
        answer:
          '<strong>제조물책임법상 결함·인과관계 입증 시 청구 가능합니다.</strong> 다만 차량 결함 입증 부담이 있어 동일 차종 다수 결함·리콜 자료가 핵심.',
      },
      {
        question: '교통사고 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 한국교통안전공단(1577-0990)·한국소비자원(1372)도 무료. 국토부 자동차리콜센터.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 블랙박스 증거', href: '/guide/traffic-accident/traffic-accident-dashcam-evidence-guide' },
      { label: '교통사고 가해자 형사 1차 대응', href: '/guide/traffic-accident/traffic-accident-offender-criminal-charge-response' },
      { label: '교통사고 인적·물적 손해 청구', href: '/guide/traffic-accident/traffic-accident-compensation-calculation-guide' },
      { label: '교통사고 형사·민사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
      { label: '쌍방과실 비율 다툼', href: '/guide/traffic-accident/traffic-accident-rear-end-fault-ratio' },
    ],
  },
];
