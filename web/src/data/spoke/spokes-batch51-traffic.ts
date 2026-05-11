import { SpokePage } from '../spoke-pages';

// batch51 traffic 5개: traffic-accident victim/accused/neutral 혼합
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 공사구간 표지·과속주의 표시 미흡 도로에서 사고를 당한 피해자가 도로교통법 제30조·국가배상법 제5조로 도로관리주체 책임을 다투도록 돕는 페이지다.
// 2. 이 페이지는 긴급차량(소방·구급) 진로방해·블락 후 사고로 형사 통보를 받은 운전자가 도로교통법 제29조 양보의무 쟁점·합의 우선순위를 정리하도록 돕는 페이지다.
// 3. 이 페이지는 야간 무점등 자전거·전동킥보드와 보행자 충돌 과실비율을 정리하려는 사용자가 도로교통법·자전거이용활성화법을 토대로 케이스별로 비교하도록 돕는 페이지다.
// 4. 이 페이지는 합의 후 6~12개월 내 후유증이 발현된 피해자가 합의서 효력 범위와 추가 손해배상·민사소송 절차를 정리하도록 돕는 페이지다.
// 5. 이 페이지는 전동킥보드(PM)와 보행자 충돌 책임·보험·면허·헬멧 의무를 정리하려는 사용자가 도로교통법 제50조·개인형 이동장치 규정으로 점검하도록 돕는 페이지다.

export const spokesBatch51Traffic: SpokePage[] = [
  // ─── 1. traffic-accident / construction-zone-fault (Q&A형, victim) ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-construction-zone-fault',
    keyword: '공사구간 사고 책임',
    questionKeyword: '공사구간 표지가 부실해 사고가 났는데 도로공사에 청구할 수 있나요?',
    ctaKeyword: '공사구간 사고 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '공사구간 사고 책임 5가지 쟁점과 도로관리청 청구 정리 | 로앤가이드',
      description:
        '공사구간 표지·과속주의 표시 미흡으로 다친 피해자가 도로공사·시공사에 책임을 묻는 절차와 입증 자료를 지금 확인하세요.',
    },
    intro:
      '<p>도심 야간 도로를 달리다 갑자기 나타난 공사구간 차단봉·강철빔에 부딪혀 차량이 부서지고 다친 경우, "분명 표지가 부실했는데 본인 100% 과실이라고 한다"는 답답함이 생깁니다. 도로교통법 제30조는 도로관리청·시공사에 안전표지·신호수 배치 의무를 규정하고 있고, 국가배상법 제5조는 영조물(도로) 설치·관리 하자로 인한 손해 배상을 별도로 두고 있습니다. 본인 차량 과실 외에도 공사 표지 미흡·과속주의 표시 부재가 사고에 기여했다면 청구 대상이 늘어날 소지가 있습니다.</p>',
    sections: [
      {
        title: 'Q. 공사구간 사고 — 책임 주체는 누구인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 운전자 본인 외에 시공사·도로관리청(국토부·지자체)·도급인이 공동책임 검토 대상이 될 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>도로교통법 제30조</strong> — 도로관리청은 도로 공사 시 안전표지·차선 변경·신호수 배치 등 교통안전 조치를 취할 의무.</li>\n<li><strong>국가배상법 제5조 제1항</strong> — 도로 등 영조물의 설치·관리 하자로 인한 손해 배상.</li>\n<li><strong>건설기술진흥법 제62조</strong> — 시공사의 안전관리계획 수립·이행 의무.</li>\n<li><strong>책임 주체 분리</strong> — ① 시공사(공사 자체) ② 도로관리청(허가·감독) ③ 도급인(공사 발주자, 산업안전보건법 제63조 검토) ④ 운전자(전방주시).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "표지가 어디까지 설치되어 있었는가" 와 "야간·우천 시 시인성이 충분했는가" 가 청구 가능성의 분기점입니다.</blockquote>',
      },
      {
        title: 'Q. 도로 표지 부실 입증 — 어떤 자료가 결정적인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고 직후 표지·차단봉 위치·조명·반사재 상태 사진과 도로공사 안전관리계획서 비교가 핵심 입증 수단입니다.</strong></p>\n<ul>\n<li><strong>사고 직후 사진·동영상</strong> — 표지 설치 위치, 차단봉 간격, 반사재·점멸등 상태를 다각도로 촬영. 야간이면 라이트 점등 상태도 함께.</li>\n<li><strong>본인 블랙박스 + 주변 차량 블랙박스</strong> — 진입 시점 시인 거리·표지 가시성 객관 입증.</li>\n<li><strong>공사 안전관리계획서</strong> — 정보공개청구로 시공사·도로관리청에서 확보. 계획서상 표지 설치 기준과 실제 현장 비교.</li>\n<li><strong>경찰 사고사실확인원</strong> — 사고 시각·기상·도로 조명 등 정황 정리.</li>\n<li><strong>도로교통공단·도로공사 매뉴얼</strong> — 공사구간 안전표지 설치 기준(도로의 구조·시설 기준에 관한 규칙) 대조.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 공사구간 사고 청구 경로, AI로 정리해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">시공사·도로관리청 책임 분배·입증 자료까지 AI가 케이스별로 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 공사구간 사고 입증 7가지',
        content:
          '<p><strong style="color:#1e3a5f">표지 부실·인과관계·손해액을 객관 입증할 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 본인·주변 차량 블랙박스</strong> — 사고 직전 진입 시점·표지 시인 가능 거리.</li>\n<li><strong>2. 사고 직후 현장 사진·동영상</strong> — 차단봉·표지·조명·반사재 상태 다각도 촬영(주간·야간 별도).</li>\n<li><strong>3. 경찰 사고사실확인원</strong> — 경찰서 교통조사계 발급. 도로 상태·기상 정리.</li>\n<li><strong>4. 도로공사 안전관리계획서</strong> — 정보공개청구(www.open.go.kr)로 시공사·도로관리청 확보.</li>\n<li><strong>5. 진단서·후유장해진단서</strong> — 인적 손해 입증. 후유장해는 증상 고정 시점 추가.</li>\n<li><strong>6. 차량 견적서·수리비 영수증</strong> — 물적 손해 산정.</li>\n<li><strong>7. 목격자 진술서</strong> — 표지 시인성·야간 조명 등 정황 보강 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사고 직후 야간이라면 같은 시간대 다음날 다시 현장을 촬영해 시인성 변화 여부를 비교 자료로 남겨두세요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 공사구간 사고 보상 5단계',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·차량 보험 청구·도로관리청 청구·분쟁조정·소송 단계로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 확보 (사고 직후~3일)</strong> — 블랙박스 별도 저장, 현장 사진, 경찰 사고사실확인원 발급.</li>\n<li><strong>2단계 — 본인 차량 보험 접수 (1~2주)</strong> — 자기차량손해·자기신체사고 우선 처리. 무보험차상해 특약 검토.</li>\n<li><strong>3단계 — 도로관리청·시공사 청구 (1~3개월)</strong> — 정보공개청구로 안전관리계획서 확보 → 국가배상법 또는 민사 손해배상 청구.</li>\n<li><strong>4단계 — 분쟁조정 (필요 시)</strong> — 손해보험협회 분쟁심의위원회 또는 한국소비자원 분쟁조정 무료 신청.</li>\n<li><strong>5단계 — 민사소송 (3년 시효)</strong> — 시공사·도로관리청 공동 피고로 청구. 자차 우선 처리해도 자기부담금 중 상대방 책임비율 부분은 별도 청구가 검토됩니다(대법원 2022다287284).</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 공사구간 사고 보상 순서, 단계별로 점검해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 공사구간 안전조치 의무 위반 여부 평가',
        summary:
          '대법원 2012도11361 사건(대법원, 2014.04.10 선고)에서 법원은 지하철 공사구간 현장안전업무 담당자가 강철빔 주위에 라바콘 3개를 설치하고 신호수 1명을 배치한 사안에서, 안전조치 의무 위반을 인정한 원심을 파기하면서 안전조치 적정성을 표지·신호수 배치·시인성 등 종합 정황으로 평가해야 한다고 판시했습니다.',
        takeaway: '공사구간 사고 책임은 라바콘 개수·신호수 배치·표지 시인성 등 구체적 안전조치의 적정성을 종합 평가해 결정되며, 표지가 형식적으로 있더라도 야간·우천 시 시인성이 부족하면 책임 검토가 가능할 소지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '본인 과실 100%로 처리되면 도로공사에 청구가 안 되나요?',
        answer:
          '<strong>본인 과실이 인정되더라도 표지 부실·시공사 안전조치 미흡이 사고에 기여했다면 과실상계 후 일부 청구가 가능할 소지가 있습니다.</strong> 정보공개청구로 안전관리계획서부터 확보해보세요.',
      },
      {
        question: '국가배상 청구는 어디에 신청하나요?',
        answer:
          '<strong>도로관리주체(국토부·지자체·한국도로공사)에 국가배상법에 따라 청구하거나 관할 검찰청 국가배상심의회를 통해 신청할 수 있습니다.</strong> 손해 발생일로부터 5년·안 날로부터 3년 시효 주의.',
      },
      {
        question: '공사 표지가 있었지만 야간에 안 보였다면?',
        answer:
          '<strong>표지가 형식적으로 설치돼도 반사재·점멸등 등 야간 시인성 확보 의무가 별도로 검토됩니다.</strong> 같은 시간대 다음날 현장 사진·블랙박스로 시인 거리 비교 자료를 남기세요.',
      },
      {
        question: '본인 자차 처리 후 도로관리청에 청구할 수 있나요?',
        answer:
          '<strong>대법원 2022다287284 판결에 따라 자기부담금 중 상대방(도로관리청·시공사) 책임비율에 해당하는 금액은 별도 청구할 수 있습니다.</strong> 자차로 우선 처리해도 잔여 청구권이 유지될 소지가 있어요.',
      },
      {
        question: '시공사가 폐업했는데 청구는 어떻게 하나요?',
        answer:
          '<strong>시공사 폐업·도산 시 도급인(발주자)·도로관리청에 사용자책임·영조물책임으로 청구를 검토할 수 있습니다.</strong> 산업안전보건법 제63조에 따라 도급인 책임이 강화되어 있어요.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '터널 다중추돌 책임 분배', href: '/guide/traffic-accident/traffic-accident-tunnel-pile-up-multi' },
      { label: '교통사고 블랙박스 증거 활용', href: '/guide/traffic-accident/traffic-accident-blackbox-evidence' },
      { label: '쌍방과실 비율 다툼 절차', href: '/guide/traffic-accident/traffic-accident-rear-end-fault-ratio' },
      { label: '교통사고 인적 손해 배상 청구', href: '/guide/traffic-accident/traffic-accident-passenger-injury-claim' },
      { label: '무보험차 사고 정부보장사업', href: '/guide/traffic-accident/traffic-accident-uninsured-vehicle-claim' },
    ],
  },

  // ─── 2. traffic-accident / emergency-vehicle-block (Q&A형, accused) ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-emergency-vehicle-block',
    keyword: '긴급차량 진로방해 사고',
    questionKeyword: '소방차·구급차 진로를 막은 뒤 사고가 났는데 형사 처벌을 받나요?',
    ctaKeyword: '긴급차량 사고 합의 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '긴급차량 양보의무 위반 사고 처벌 5가지 쟁점 정리 | 로앤가이드',
      description:
        '소방·구급차 진로방해·블락 후 사고로 형사 통보를 받았다면, 양보의무 위반 처벌과 합의 우선순위를 지금 확인하세요.',
    },
    intro:
      '<p>좁은 도심 도로에서 사이렌을 울리며 다가오는 구급차에 길을 내주지 못해 추돌 사고가 난 뒤 경찰서 출석 통보를 받으면 "내가 일부러 막은 것도 아닌데 왜 처벌받나" 답답하실 수 있습니다. 도로교통법 제29조는 모든 차의 운전자에게 긴급자동차 양보의무를 부과하고 있고, 위반 시 통고처분 또는 형사 절차로 이어질 수 있습니다. 다만 같은 법 제29조 제2항은 긴급차량 운전자에게도 통상의 주의의무를 그대로 적용하므로, 혐의를 받고 있다면 사고 정황·진로방해 여부·기여도를 정리하는 것이 양형의 분기점입니다.</p>',
    sections: [
      {
        title: 'Q. 긴급차량 진로방해 — 어떤 처벌이 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 도로교통법 제29조 위반은 범칙금·벌점부터 시작해 사고 발생 시 교통사고처리특례법상 업무상과실치상으로 형사 절차가 검토될 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>도로교통법 제29조 제4항</strong> — 모든 차의 운전자는 긴급자동차가 접근하는 경우 그 통행을 양보할 의무.</li>\n<li><strong>같은 법 제156조</strong> — 양보의무 위반 시 범칙금 7만~10만 원 + 벌점 30점 부과 사례.</li>\n<li><strong>교통사고 발생 시</strong> — 12대 중과실에 해당하지 않더라도 일반 업무상과실치상으로 처리. 종합보험 가입자는 공소권 없음 처리되는 사례가 많음.</li>\n<li><strong>혐의를 받고 있다면</strong> 블랙박스로 사이렌 인지 시점·도로 폭·양보 가능성 객관 자료를 정리하는 것이 우선입니다.</li>\n<li><strong>긴급차량 측 주의의무</strong> — 도로교통법 제29조 제2항에 따라 긴급차량 운전자에게도 안전운전 주의의무가 그대로 적용되어 일방 책임으로 단정되지 않을 소지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 양보 가능 여부·사이렌 인지 시점·본인 측 회피 시도 정도가 처벌·합의의 핵심 변수입니다.</blockquote>',
      },
      {
        title: 'Q. 양보의무는 어디까지인가요? — 합법적 양보 vs 위반',
        content:
          '<p><strong style="color:#1e3a5f">A. 양보의무는 "교차로 진입 회피·일시정지·우측 가장자리 정차" 의무이며, 도로 폭·정체 상황에 따라 위반 인정 폭이 달라집니다.</strong></p>\n<ul>\n<li><strong>도로교통법 제29조 제4항</strong> — 교차로·그 부근에서는 교차로 진입을 피하고 일시정지, 그 외 도로에서는 우측 가장자리에 정지 또는 양보.</li>\n<li><strong>합법적 양보의 예</strong> — 오른쪽 가장자리 정차, 갓길 진입, 1차로 이동, 신호 무시한 일시정지(동승자·다른 차량 안전 우선).</li>\n<li><strong>위반 사례</strong> — 좌회전 차로에서 정지 안 함, 사이렌 인지 후에도 차로 변경 시도하다 충돌, 차로 가운데 정차해 진로 차단.</li>\n<li><strong>사실과 다르게 신고되었다면</strong> 블랙박스로 사이렌 점등 시점·본인 가속/감속 여부·도로 정체 정도를 객관 입증하는 것이 권장됩니다.</li>\n<li><strong>긴급차량 측 과실</strong> — 사이렌 미점등·과속·불필요 차로 변경 등 인정되면 본인 책임 분담이 줄어들 소지.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 긴급차량 사고 대응, AI로 정리해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">양보의무 범위·합의 시점까지 AI가 상황별로 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 형사 처벌·면허 처분·합의 우선순위는?',
        content:
          '<p><strong style="color:#1e3a5f">A. 형사(공소 여부)·민사(손해배상)·행정(면허 처분) 3개 트랙이 동시에 진행되며, 검찰 송치 전 합의가 양형에 가장 큰 영향을 줍니다.</strong></p>\n<ul>\n<li><strong>형사 트랙</strong> — 양보의무 위반은 12대 중과실 아니므로 종합보험 가입 시 공소권 없음 처리되는 사례 많음. 인명 피해 정도 따라 약식기소·정식재판 분기.</li>\n<li><strong>면허 행정처분</strong> — 벌점 30점 + 사고 정도에 따라 면허 정지·취소. 처분 통지 후 90일 내 행정심판 가능.</li>\n<li><strong>합의 효과</strong> — 처벌불원 의사 명시 시 양형에 강하게 반영. 검찰 송치 전 합의가 가장 효과 큼.</li>\n<li><strong>합의 우선순위</strong> — ① 보험사 대인배상 진행 → ② 형사합의금 별도 산정(경상 200만~500만, 중상해 1,000만~3,000만 검토 사례) → ③ 합의서·반성문·탄원서 양형자료 제출.</li>\n<li><strong>변호인 상담</strong> — 법률구조공단 132 무료 상담을 우선 검토. 사선 변호인은 양형 자료 작성에 도움.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 사고 직후 진술이 나중까지 영향을 미치므로, 변호인 상담 후 진술을 정리하는 것이 권장됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 긴급차량 사고 대응 5단계',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·변호인 상담·합의·양형자료·재판 대응을 동시에 관리합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 확보 (사고 직후)</strong> — 본인 블랙박스 별도 저장, 주변 차량 블랙박스 확보, 사이렌 점등 시점 입증 자료.</li>\n<li><strong>2단계 — 변호인 상담 (조사 전)</strong> — 법률구조공단(132) 무료 상담 또는 사선 변호인 검토.</li>\n<li><strong>3단계 — 경찰 조사·면허 처분 통지 (1~4주)</strong> — 사고 정황 일관 진술. 면허 처분 통지 시 행정심판 90일 카운트 시작.</li>\n<li><strong>4단계 — 형사합의 (검찰 송치 전 권장)</strong> — 보험사 대인배상과 별도 형사합의금 산정. 합의 거부 시 형사공탁 검토.</li>\n<li><strong>5단계 — 검찰·법원 (1~6개월)</strong> — 합의서·반성문·탄원서 제출, 약식기소·집행유예 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 긴급차량 사고 처리 순서, 단계별로 점검해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 긴급자동차 운전자의 업무상 주의의무 적용',
        summary:
          '대법원 2017도12194 사건(대법원, 2017.12.22 선고)에서 법원은 도로교통법 제29조 제2항이 긴급자동차 운전자에 대하여 도로교통법상 의무 규정의 적용을 모두 면제하는 취지가 아니며, 긴급자동차 운전자에게도 통상의 업무상 주의의무가 그대로 적용된다고 판시했습니다.',
        takeaway: '긴급차량 진로방해 사고라도 긴급차량 측 운전자의 안전운전 주의의무가 별도로 검토되어 일방 책임으로 단정되지 않을 소지가 있고, 본인 측 양보 가능성·사이렌 인지 시점이 함께 평가됩니다.',
      },
    ],
    faq: [
      {
        question: '사이렌 소리를 못 들었는데도 처벌받나요?',
        answer:
          '<strong>인지 가능성이 있었는지 객관 정황으로 평가됩니다.</strong> 음악 음량·창문 닫힘·주변 소음 등 사정이 인정되면 위반 여부 다툼 여지가 있어요. 블랙박스 음성·내비 음량 자료가 결정적이에요.',
      },
      {
        question: '도로가 좁아 양보가 불가능했어요. 어떻게 다투나요?',
        answer:
          '<strong>도로 폭·양보 가능성이 본인 책임 분담의 핵심 변수입니다.</strong> 사고 직후 도로 폭·차량 위치 사진과 블랙박스로 회피 시도 자료를 남기세요.',
      },
      {
        question: '긴급차량이 사이렌 없이 달리다 추돌했어요.',
        answer:
          '<strong>긴급차량 측 사이렌·경광등 점등이 의무이고, 미점등 시 본인 양보의무 면제 또는 책임 분담이 검토될 소지가 있습니다.</strong> 블랙박스로 점등 여부 입증이 핵심이에요.',
      },
      {
        question: '면허 정지 통보를 받았어요. 행정심판 가능한가요?',
        answer:
          '<strong>처분 통보 후 90일 이내 행정심판 청구 가능합니다.</strong> 양보 시도 자료·합의 진행 정황을 양형 자료로 제출할 수 있어요.',
      },
      {
        question: '구급차 안 환자가 사망하면 처벌이 가중되나요?',
        answer:
          '<strong>인명 피해 정도에 따라 약식기소·정식재판 분기가 달라집니다.</strong> 다만 사망과 양보의무 위반 사이 인과관계가 직접 입증되어야 하므로, 변호인 조력 아래 인과관계 다툼이 권장돼요.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 형사합의 절차', href: '/guide/traffic-accident/traffic-accident-criminal-settlement' },
      { label: '신호위반 12대 중과실 합의 영향', href: '/guide/traffic-accident/traffic-accident-signal-violation-criminal-impact' },
      { label: '뺑소니 사실과 다른 신고 방어', href: '/guide/traffic-accident/traffic-accident-hit-and-run-falsely-accused' },
      { label: '교통사고 12대 중과실 정리', href: '/guide/traffic-accident/traffic-accident-12-major-faults-settlement-impact' },
      { label: '교통사고 블랙박스 증거 활용', href: '/guide/traffic-accident/traffic-accident-blackbox-evidence' },
    ],
  },

  // ─── 3. traffic-accident / night-no-light-pedestrian (Q&A형, neutral) ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-night-no-light-pedestrian',
    keyword: '야간 무점등 자전거 보행자 충돌',
    questionKeyword: '야간 무점등 자전거·전동킥보드와 보행자가 부딪히면 과실비율은 어떻게 잡히나요?',
    ctaKeyword: '야간 무점등 사고 점검',
    type: 'Q&A형',
    perspective: 'neutral',
    meta: {
      title: '야간 무점등 자전거·킥보드 vs 보행자 7가지 과실 정리 | 로앤가이드',
      description:
        '야간 미등 미점등 자전거·전동킥보드와 보행자 충돌 사고 과실비율과 자전거이용활성화법 기준을 지금 확인하세요.',
    },
    intro:
      '<p>늦은 밤 골목길을 걷다가 라이트도 없이 빠르게 다가오는 자전거나 전동킥보드와 부딪혀 다친 경우, "야간에 무점등인데 본인 과실이 잡힌다"는 답답함이 생깁니다. 도로교통법 제37조는 야간 등화 의무를, 자전거이용활성화법 제20조는 자전거 안전기준을, 도로교통법 제50조 제3항은 개인형 이동장치(PM) 등화 의무를 별도로 규정하고 있습니다. 무점등은 자전거·PM 측 과실 가중의 핵심 변수이며, 사건별 도로 형태·속도·시인성에 따라 과실비율이 달라집니다.</p>',
    sections: [
      {
        title: 'Q. 야간 무점등 자전거·PM — 과실 가중은 얼마나 적용되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 무점등은 자전거·PM 측 과실 10~30% 가중 검토 변수이며, 도로 형태·보행자 위치·속도와 결합해 평가됩니다.</strong></p>\n<ul>\n<li><strong>도로교통법 제37조 제1항</strong> — 야간(해 진 후~해 뜨기 전) 자동차·자전거 등화 의무. 미등·전조등 점등 필수.</li>\n<li><strong>도로교통법 제50조 제9항</strong> — 개인형 이동장치(PM) 야간 등화 의무 (전조등·미등 또는 발광장치).</li>\n<li><strong>자전거이용활성화법 제20조</strong> — 자전거 안전기준(전조등·반사기 등) 준수 의무.</li>\n<li><strong>과실 가중 폭</strong> — 무점등 단독 가중 10%, 무점등 + 음주 또는 과속 결합 시 20~30% 가중 검토 사례.</li>\n<li><strong>보행자 위치별</strong> — ① 인도 보행자 무과실 검토 ② 자전거도로 침입 보행자 30~40% 분담 ③ 차도·갓길 보행자 야간 어두운 옷 등 과실 가중 변수.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "무점등 + 사고 장소 + 보행자 시인성" 3가지 변수의 결합이 최종 과실비율의 분기점입니다.</blockquote>',
      },
      {
        title: 'Q. 7가지 케이스 — 야간 무점등 vs 보행자 과실표',
        content:
          '<p><strong style="color:#1e3a5f">A. 손해보험협회 과실비율 인정기준을 토대로 무점등·도로 형태·보행자 정황별 변동 요소가 적용됩니다.</strong></p>\n<ul>\n<li><strong>1. 인도 통행 무점등 자전거 + 보행자</strong> — 자전거 100% 검토. 인도 통행 자체가 위반.</li>\n<li><strong>2. 자전거도로 무점등 자전거 + 보행자(침입)</strong> — 자전거 70% / 보행자 30% 검토.</li>\n<li><strong>3. 차도 갓길 무점등 자전거 + 보행자</strong> — 자전거 80% / 보행자 20% 검토. 야간 어두운 옷이면 보행자 과실 가중.</li>\n<li><strong>4. 인도 통행 무점등 PM + 보행자</strong> — PM 100% 검토. PM은 인도 통행 원칙 금지(도로교통법 제13조의2 단서 적용 제외).</li>\n<li><strong>5. 자전거도로 무점등 PM + 보행자(침입)</strong> — PM 80% / 보행자 20% 검토.</li>\n<li><strong>6. 음주 + 무점등 자전거·PM</strong> — 자전거·PM 측 과실 가중 + 별도 음주운전 처벌 검토(도로교통법 제44조 제1항, 제156조).</li>\n<li><strong>7. 무면허 PM + 보행자</strong> — PM은 원동기장치자전거 면허 필요(도로교통법 제80조). 무면허 시 PM 측 과실 가중 + 별도 형사 처벌 검토.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 야간 무점등 사고 과실, AI로 정리해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">사고 장소·점등 여부·보행자 시인성까지 AI가 케이스별로 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 야간 무점등 입증 7가지',
        content:
          '<p><strong style="color:#1e3a5f">점등 여부·도로 조명·보행자 시인성을 객관 입증할 자료가 핵심입니다.</strong></p>\n<ul>\n<li><strong>1. 본인 휴대폰 사진·영상</strong> — 사고 직후 자전거·PM 라이트 점등 상태, 도로 가로등 상태 촬영.</li>\n<li><strong>2. 주변 CCTV·블랙박스</strong> — 도로공사·지자체·인근 차량에 보존 요청 (보존 기간 7~30일).</li>\n<li><strong>3. 경찰 사고사실확인원</strong> — 경찰서 교통조사계 발급. 사고 시각·도로 조명 정리.</li>\n<li><strong>4. 진단서·치료비 영수증</strong> — 인적 손해 입증.</li>\n<li><strong>5. 도로 형태 자료</strong> — 인도·자전거도로·차도 표시, 가로등 위치 사진.</li>\n<li><strong>6. 자전거·PM 측 보험 정보</strong> — 자전거보험·일상생활배상책임보험·PM 의무보험 가입 여부.</li>\n<li><strong>7. 목격자 진술서</strong> — 점등 상태·속도·진로 등 정황 보강.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사고 직후 휴대폰으로 자전거·PM 라이트 점등 상태를 다각도로 촬영하면 무점등 입증의 결정적 자료가 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 야간 무점등 사고 보상 5단계',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·보험 청구·과실 협의·분쟁조정·소송 단계로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 확보 (사고 직후)</strong> — 휴대폰 사진·CCTV 보존 요청·목격자 연락처 확보. 라이트 점등 상태 촬영.</li>\n<li><strong>2단계 — 경찰 신고·진단 (1~3일)</strong> — 경찰서 사고 접수, 의료기관 상해진단서 발급.</li>\n<li><strong>3단계 — 자전거·PM 운전자 보험 확인 (1~2주)</strong> — 일상생활배상책임보험·자전거보험·PM 의무보험 가입 여부. 미가입이면 본인 무보험차상해 특약·정부보장사업 검토.</li>\n<li><strong>4단계 — 과실 협의·분쟁조정 (1~3개월)</strong> — 손해보험협회 과실비율 분쟁심의위원회 무료 조정 신청.</li>\n<li><strong>5단계 — 민사소송 (필요 시)</strong> — 3년 소멸시효 안에 손해배상 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 야간 무점등 사고 보상 순서, 단계별로 점검해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 야간 미등 미점등 정차와 사고 인과관계',
        summary:
          '대법원 96도2030 사건(대법원, 1996.12.20 선고)에서 법원은 야간에 굽은 도로에 미등·차폭등을 켜지 않고 화물차를 주차시켜 놓아 오토바이가 추돌해 운전자가 사망한 사안에서, 주차행위와 사고 발생 사이의 인과관계가 없다고 본 원심판결을 심리미진 등을 이유로 파기했습니다.',
        takeaway: '야간 무점등은 시인성 저하와 사고 발생 사이 인과관계 평가에서 핵심 변수로 작용해 과실 가중·책임 분담의 분기점이 될 소지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '자전거 무점등인데 본인이 어두운 옷을 입었다면?',
        answer:
          '<strong>보행자의 어두운 옷·야간 시인성 부족이 과실 가중 변수로 작용할 소지가 있습니다.</strong> 다만 무점등 자전거 측 1차 과실이 더 크게 평가되는 사례가 많아요.',
      },
      {
        question: '전동킥보드는 인도 통행이 가능한가요?',
        answer:
          '<strong>도로교통법상 PM은 자전거도로·차도 통행이 원칙이고, 인도 통행은 위반에 해당합니다.</strong> 인도 통행 PM 사고는 PM 측 과실 100% 검토되는 사례가 많아요.',
      },
      {
        question: '자전거 운전자 보험이 없을 때는?',
        answer:
          '<strong>운전자 본인의 일상생활배상책임보험·자전거보험을 우선 확인하고, 없으면 본인 자동차보험 무보험차상해 특약·정부보장사업을 검토할 수 있습니다.</strong>',
      },
      {
        question: 'PM 운전자 무면허였는데 보상 영향은?',
        answer:
          '<strong>PM은 원동기장치자전거 면허 필요(도로교통법 제80조)이며, 무면허는 별도 형사 처벌 + 과실 가중 변수입니다.</strong> 본인 무보험차상해 특약·PM 공제·정부보장사업 검토 가능.',
      },
      {
        question: '과실 비율에 동의 못 하면 어디에 신청하나요?',
        answer:
          '<strong>손해보험협회 과실비율 분쟁심의위원회(무료) 또는 한국소비자원 분쟁조정으로 신청할 수 있습니다.</strong> 조정에 불복하면 민사소송으로 진행 가능해요.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '자전거 vs 보행자 사고 과실비율 9가지 케이스', href: '/guide/traffic-accident/traffic-accident-bicycle-pedestrian-fault-table' },
      { label: '교통사고 블랙박스 증거 활용', href: '/guide/traffic-accident/traffic-accident-blackbox-evidence' },
      { label: '쌍방과실 비율 다툼 절차', href: '/guide/traffic-accident/traffic-accident-rear-end-fault-ratio' },
      { label: '보행자 무단횡단 사고 처벌', href: '/guide/traffic-accident/traffic-accident-pedestrian-cross-jaywalk' },
      { label: '교통사고 인적 손해 배상 청구', href: '/guide/traffic-accident/traffic-accident-passenger-injury-claim' },
    ],
  },

  // ─── 4. traffic-accident / hospital-discharge-symptom (절차형, victim) ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-hospital-discharge-symptom',
    keyword: '교통사고 합의 후 후유증 추가 청구',
    questionKeyword: '교통사고 합의가 끝났는데 6개월 뒤 후유증이 생겼어요. 추가 청구 가능한가요?',
    ctaKeyword: '합의 후 추가 청구 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '합의 후 6~12개월 후유증 추가 청구 5단계 절차 정리 | 로앤가이드',
      description:
        '교통사고 합의 후 후유증이 발현된 피해자가 합의서 효력 범위와 추가 손해배상 절차를 지금 확인하세요.',
    },
    intro:
      '<p>교통사고 합의서를 쓰고 6개월이 지나서야 머리가 어지럽고 허리가 저리는 증상이 시작되어 정밀검사를 받았더니 후유장해 진단이 나왔다면 "합의서에 도장 찍었는데 다시 청구할 수 있나" 막막해집니다. 일반적으로 합의서에는 "이의 제기하지 않는다"는 부제소특약이 들어 있지만, 합의 당시 예측 불가능했던 후유 손해는 합의 효력이 미치지 않는다는 것이 판례의 일관된 입장입니다. 사고 후 6~12개월 내 후유증이 발현되면 새로운 진단·민사 손해배상 절차로 추가 청구가 검토될 소지가 있습니다.</p>',
    sections: [
      {
        title: '합의서 부제소특약 — 효력 범위와 예외',
        content:
          '<p><strong style="color:#1e3a5f">합의 당시 예측 가능했던 손해에 대해서만 효력이 미치고, 예측 불가능했던 후유 손해는 별도 청구가 검토될 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>민법 제733조</strong> — 화해(합의)의 효력. 다만 사기·강박·착오에 의한 합의는 취소 가능.</li>\n<li><strong>대법원 일관 입장</strong> — "합의 당시 예상 가능했던 손해" 한정 효력. 예상 불가능한 후유 손해는 합의 효력 밖.</li>\n<li><strong>예측 불가능 손해의 예</strong> — ① 합의 당시 진단 안 된 후유장해 ② 6개월 이상 잠복기 거친 외상후스트레스장애(PTSD) ③ 척추·뇌 손상 후 시간 차 발현된 신경 증상.</li>\n<li><strong>입증 요건</strong> — 사고와 후유증 사이 인과관계 + 합의 당시 예측 불가능성 + 새로운 진단서.</li>\n<li><strong>3년 시효</strong> — 후유장해 인지 시점부터 3년 이내 청구(민법 제766조).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "합의 당시 예측 가능했는가" 가 효력 범위의 핵심 분기점입니다.</blockquote>',
      },
      {
        title: '추가 청구 — 손해 항목과 산정 기준',
        content:
          '<p><strong style="color:#1e3a5f">새로 발현된 후유장해에 대한 치료비·일실수입·위자료 등을 합의 시 받은 금액 외 추가로 청구할 수 있습니다.</strong></p>\n<ul>\n<li><strong>1. 추가 치료비</strong> — 후유장해 진단 후 새로 발생한 치료비, 향후 치료비.</li>\n<li><strong>2. 일실수입</strong> — 후유장해로 인한 노동능력 상실분(맥브라이드 또는 국가배상법 시행령 노동능력상실표 적용). 사고 당시 소득 × 상실률 × 가동연한.</li>\n<li><strong>3. 위자료</strong> — 후유장해 등급별 정신적 손해. 사례에 따라 차이가 크지만 등급 9~10급 500만~1,500만 수준이 자주 보입니다.</li>\n<li><strong>4. 개호비·간병비</strong> — 후유장해로 일상생활 보조가 필요한 경우.</li>\n<li><strong>5. 향후 치료비</strong> — 의학적 필요성 입증 시 일시금 또는 정기금 청구.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의 후 추가 청구, AI로 정리해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">합의서 효력 범위·추가 손해 항목까지 AI가 단계별로 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 후유증 추가 청구 7가지',
        content:
          '<p><strong style="color:#1e3a5f">사고와 후유증 사이 인과관계·예측 불가능성을 객관 입증할 자료가 핵심입니다.</strong></p>\n<ul>\n<li><strong>1. 후유장해진단서</strong> — 정형외과·신경외과·정신건강의학과 등 해당 전문의 발급. 맥브라이드·국가배상법 시행령 기준 등급 표시 권장.</li>\n<li><strong>2. MRI·CT·X-ray 영상자료</strong> — 후유장해 객관 입증. 사고 직후 영상과 비교 분석.</li>\n<li><strong>3. 합의서 사본</strong> — 합의 당시 예상 손해 범위 파악. "예측 가능 한정" 문구 유무 확인.</li>\n<li><strong>4. 사고 직후 진단서·진료기록</strong> — 합의 당시 어떤 손상이 진단되었는지 정리.</li>\n<li><strong>5. 진료비 영수증·치료 내역</strong> — 합의 후 새로 발생한 치료비.</li>\n<li><strong>6. 사고증명서·경찰 사고사실확인원</strong> — 사고와 후유증 인과관계 입증.</li>\n<li><strong>7. 직장 임금 자료·소득증명</strong> — 일실수입 산정 기초.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 합의 당시 진단서·영상 자료를 보관해두면 "예측 불가능" 입증의 결정적 자료가 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 합의 후 추가 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">진단 → 보험사 통보 → 분쟁조정 → 민사소송 단계로 순차 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 후유장해진단서 발급 (증상 발현 후 즉시)</strong> — 정형외과·신경외과·정신건강의학과 등에서 사고와 인과관계 명시.</li>\n<li><strong>2단계 — 보험사 통보·재협의 (1~2개월)</strong> — 합의서·진단서 동봉해 보험사에 추가 보상 요청. "합의 당시 예측 불가능 후유 손해" 명시.</li>\n<li><strong>3단계 — 손해보험협회·금감원 분쟁조정 (1~3개월)</strong> — 협의 결렬 시 무료 분쟁조정 신청.</li>\n<li><strong>4단계 — 민사소송 (3년 시효)</strong> — 후유장해 인지 시점부터 3년 이내 손해배상 청구. 신체감정 통해 노동능력상실률 확정.</li>\n<li><strong>5단계 — 판결·집행 (1~2년)</strong> — 1심 판결 후 항소·상고. 가집행 신청으로 일부 선보상 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의 후 추가 청구 순서, 단계별로 점검해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 합의 효력의 범위와 미성년 보험수익자 보호',
        summary:
          '대법원 2010다12241 사건(대법원, 2010.09.30 선고)에서 법원은 보험회사가 망인의 남편에게 보험금을 지급하면서 "향후 추가 청구·민원 등 일체의 이의를 제기하지 않을 것을 확약한다"는 확인서를 받았다 하더라도, 실제 보험수익자인 미성년자의 법정대리인 지위에서 합의한 것이라 볼 수 없으면 그 합의 효력이 미성년 수익자에게 미치지 않는다고 판시했습니다.',
        takeaway: '합의서 부제소특약이 있더라도 합의 당사자·예상 손해 범위를 벗어난 청구권은 별도 보호되며, 후유 손해·미성년 피해자 보호 등의 사정이 있으면 추가 청구가 검토될 소지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '합의서에 "이의 제기 안 한다" 도장 찍었어도 청구 가능한가요?',
        answer:
          '<strong>합의 당시 예측 불가능했던 후유 손해는 부제소특약 효력 범위 밖이라는 판례가 일관됩니다.</strong> 새로운 진단서·인과관계 입증으로 추가 청구가 검토될 소지가 있어요.',
      },
      {
        question: '사고 후 몇 개월까지 후유증 추가 청구가 가능한가요?',
        answer:
          '<strong>후유장해 인지 시점부터 3년 이내 청구가 시효(민법 제766조)이며, 사고일로부터 10년이 최장 시효입니다.</strong> 늦지 않게 진단·증거를 정리하세요.',
      },
      {
        question: '보험사가 "합의했으니 끝"이라며 거부합니다.',
        answer:
          '<strong>금감원(1332) 또는 손해보험협회 분쟁조정 무료 신청을 우선 검토하고, 결렬 시 민사소송으로 진행 가능합니다.</strong>',
      },
      {
        question: '본인 자동차보험 자기신체사고로도 보장되나요?',
        answer:
          '<strong>본인 자동차보험 약관에 후유장해 보장 특약이 있으면 가해자 보험과 별도로 청구할 수 있습니다.</strong> 실손의료보험·생명보험 후유장해 특약도 함께 점검하세요.',
      },
      {
        question: '신체감정은 어디서 받나요?',
        answer:
          '<strong>민사소송 진행 시 법원이 지정하는 종합병원에서 신체감정을 받으며, 노동능력상실률·후유장해 등급이 산정됩니다.</strong> 비용은 우선 신청자가 부담하고 판결 시 정산해요.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 인적 손해 배상 청구', href: '/guide/traffic-accident/traffic-accident-passenger-injury-claim' },
      { label: '교통사고 합의 전 준비서류', href: '/guide/traffic-accident/traffic-accident-settlement-mistakes' },
      { label: '교통사고 블랙박스 증거 활용', href: '/guide/traffic-accident/traffic-accident-blackbox-evidence' },
      { label: '무보험차 사고 정부보장사업', href: '/guide/traffic-accident/traffic-accident-uninsured-vehicle-claim' },
      { label: '쌍방과실 비율 다툼 절차', href: '/guide/traffic-accident/traffic-accident-rear-end-fault-ratio' },
    ],
  },

  // ─── 5. traffic-accident / electric-kickboard-pedestrian (Q&A형, neutral) ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-electric-kickboard-pedestrian',
    keyword: '전동킥보드 보행자 충돌 책임',
    questionKeyword: '전동킥보드와 보행자가 부딪히면 누가 책임지고 보험은 어떻게 되나요?',
    ctaKeyword: '전동킥보드 사고 점검',
    type: 'Q&A형',
    perspective: 'neutral',
    meta: {
      title: '전동킥보드 vs 보행자 사고 책임 5가지 쟁점 정리 | 로앤가이드',
      description:
        '전동킥보드(PM)와 보행자 충돌 책임·면허·헬멧·보험 의무를 도로교통법 제50조 기준으로 지금 확인하세요.',
    },
    intro:
      '<p>출퇴근길 인도를 걷다 빠르게 다가오는 공유 전동킥보드와 부딪혀 다쳤거나, 반대로 PM을 타고 가다 보행자와 부딪힌 뒤 "이건 누가 책임지지, 보험은 적용되나" 막막해질 수 있습니다. 도로교통법 제2조 제19호의2는 전동킥보드를 "개인형 이동장치(PM)"로 정의하고, 같은 법 제50조 제3항은 헬멧 착용 의무, 제80조는 원동기장치자전거 면허 필수, 제13조의2는 자전거도로·차도 통행 원칙을 규정합니다. 보험은 PM 의무보험·일상생활배상책임보험·공유 PM 운영사 보험이 단계적으로 검토됩니다.</p>',
    sections: [
      {
        title: 'Q. 전동킥보드는 인도 통행이 가능한가요? — 도로교통법 의무',
        content:
          '<p><strong style="color:#1e3a5f">A. PM은 자전거도로·차도 통행 원칙이며 인도 통행은 위반입니다. 헬멧·면허·주간 등화도 의무입니다.</strong></p>\n<ul>\n<li><strong>도로교통법 제13조의2</strong> — PM은 자전거도로 통행 원칙. 인도 통행 금지.</li>\n<li><strong>도로교통법 제50조 제3항</strong> — PM 운전자 인명보호장구(헬멧) 착용 의무.</li>\n<li><strong>도로교통법 제80조 제1항</strong> — PM 운전자 원동기장치자전거 면허(만 16세 이상) 필수.</li>\n<li><strong>도로교통법 제50조 제9항</strong> — PM 야간 등화 의무.</li>\n<li><strong>도로교통법 제44조 제1항</strong> — PM 음주운전 처벌. 2020.12.10 개정으로 자전거 등 음주운전 처벌(20만원 이하 벌금·구류·과료, 도로교통법 제156조).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 인도 통행·헬멧 미착용·무면허·음주가 결합되면 PM 측 과실 가중 + 별도 처벌 트랙이 추가됩니다.</blockquote>',
      },
      {
        title: 'Q. 사고 시 책임은 누구에게? — 5가지 케이스',
        content:
          '<p><strong style="color:#1e3a5f">A. PM 운전자 본인이 1차 책임 주체이고, 공유 PM이면 운영사 책임도 검토됩니다.</strong></p>\n<ul>\n<li><strong>1. 인도 통행 PM + 보행자 충돌</strong> — PM 측 과실 100% 검토. 인도 통행 자체가 위반.</li>\n<li><strong>2. 자전거도로 PM + 보행자(침입) 충돌</strong> — PM 70~80% / 보행자 20~30% 검토.</li>\n<li><strong>3. 횡단보도 PM 탑승 + 보행자 충돌</strong> — PM이 차마로 평가, PM 측 80~90% 과실.</li>\n<li><strong>4. 공유 PM 사고</strong> — PM 운전자 1차 책임 + 운영사(라임·지쿠터·씽씽 등) 보험 검토. 운영사 약관에 의무보험 가입 명시.</li>\n<li><strong>5. 무면허·음주·헬멧 미착용 PM</strong> — PM 측 과실 가중 + 별도 형사 처벌 검토.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전동킥보드 사고 책임, AI로 정리해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">PM 운전자·운영사·보험 검토 순서까지 AI가 케이스별로 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. PM 사고 보험 — 어디서부터 청구하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 운전자 의무보험·일상생활배상책임보험·공유 PM 운영사 보험·본인 자동차보험 무보험차상해 특약 순으로 단계적 검토합니다.</strong></p>\n<ul>\n<li><strong>1. PM 운전자 의무보험</strong> — 2024년 시행 PM 의무보험제도(도로교통법). 가입자 보험사에 직접 청구.</li>\n<li><strong>2. 일상생활배상책임보험</strong> — 가족 단체보험·종합보험 특약. PM 운전자 본인의 가입 여부 확인.</li>\n<li><strong>3. 공유 PM 운영사 보험</strong> — 라임·지쿠터·씽씽·디어 등 운영사가 가입한 단체 책임보험.</li>\n<li><strong>4. 보행자 본인 자동차보험 무보험차상해 특약</strong> — PM 측 보험 미가입·도주 시 검토.</li>\n<li><strong>5. 정부보장사업</strong> — 2024년 PM 의무보험 도입 후 적용 범위 검토 필요(자배법 제30조 적용 가능성 사례별 다툼).</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 공유 PM 사고는 운영사 약관에 따라 보장 한도가 다릅니다. 사고 직후 운영사에 사고 신고 후 약관 확인하세요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — PM 사고 보상 5단계',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·운영사 신고·보험 청구·과실 협의·소송 단계로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 확보 (사고 직후)</strong> — 휴대폰 사진·영상, CCTV 보존 요청, PM 라이트·헬멧·면허 확인 자료.</li>\n<li><strong>2단계 — 경찰 신고·진단 (1~3일)</strong> — 경찰서 사고 접수, 의료기관 상해진단서 발급.</li>\n<li><strong>3단계 — 운영사·보험 청구 (1~2주)</strong> — 공유 PM이면 운영사 사고 신고 + 약관 확인. 운전자 의무보험·일상생활배상책임보험 청구.</li>\n<li><strong>4단계 — 과실 협의·분쟁조정 (1~3개월)</strong> — 손해보험협회 과실비율 분쟁심의위원회 무료 조정.</li>\n<li><strong>5단계 — 민사소송 (3년 시효)</strong> — 운전자·운영사·도로관리청 공동 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 PM 사고 보상 순서, 단계별로 점검해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 전동킥보드의 도로교통법상 분류 변경',
        summary:
          '대법원 2020도16420 사건(대법원, 2022.12.22 선고)에서 법원은 도로교통법이 2020.12.10 개정되어 전동킥보드가 "개인형 이동장치"·"자전거 등"으로 분류되면서 PM 음주운전 처벌이 자동차 등 음주운전 처벌(제148조의2) 대상에서 제외되어 자전거 등 음주운전 처벌(제156조 제11호, 20만원 이하 벌금·구류·과료) 적용으로 법정형이 가벼워졌으므로, 형법 제1조 제2항에 따라 신법을 적용해야 한다고 판시했습니다.',
        takeaway: 'PM은 도로교통법상 별도 분류(개인형 이동장치)로 처벌·보험 체계가 자전거·자동차와 분리되어 있어 사고 발생 시 적용 법규를 사건 시점 기준으로 정확히 확인해야 합니다.',
      },
    ],
    faq: [
      {
        question: 'PM 운전자가 보험이 없으면 보상은 어떻게 받나요?',
        answer:
          '<strong>PM 운전자 본인의 일상생활배상책임보험·종합보험 특약을 우선 확인하고, 없으면 본인 자동차보험 무보험차상해 특약을 검토할 수 있습니다.</strong> 공유 PM이면 운영사 보험 약관도 함께 확인하세요.',
      },
      {
        question: '공유 PM 운영사에 직접 청구할 수 있나요?',
        answer:
          '<strong>운영사가 가입한 단체 책임보험을 통해 청구가 가능할 소지가 있습니다.</strong> 사고 직후 운영사 고객센터에 사고 신고 후 보험사 정보·약관 한도를 확인하세요.',
      },
      {
        question: '헬멧 미착용 PM 운전자가 다쳤다면 보상은?',
        answer:
          '<strong>PM 운전자 본인 과실로 헬멧 미착용 시 자기 부담분 보상에 영향이 있을 소지가 있습니다.</strong> 다만 가해 차량의 보상 책임은 별도로 진행돼요.',
      },
      {
        question: '인도에서 PM에 치였는데 PM 운전자 신원을 모르면?',
        answer:
          '<strong>경찰 신고로 차량 식별·CCTV 협조를 요청하고, 신원 미식별 시 본인 무보험차상해 특약 검토가 가능합니다.</strong> 자배법상 정부보장사업 PM 적용 여부는 사건별 다툼 가능성이 있어요.',
      },
      {
        question: 'PM 음주운전은 어떻게 처벌되나요?',
        answer:
          '<strong>2020.12.10 도로교통법 개정 이후 PM 음주운전은 자전거 등 음주운전 처벌(20만원 이하 벌금·구류·과료, 도로교통법 제156조 제11호) 적용입니다.</strong> 다만 음주운전 사고 발생 시 별도 형사 절차가 추가될 수 있어요.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '자전거 vs 보행자 사고 과실비율 9가지 케이스', href: '/guide/traffic-accident/traffic-accident-bicycle-pedestrian-fault-table' },
      { label: '교통사고 블랙박스 증거 활용', href: '/guide/traffic-accident/traffic-accident-blackbox-evidence' },
      { label: '무보험차 사고 정부보장사업', href: '/guide/traffic-accident/traffic-accident-uninsured-vehicle-claim' },
      { label: '쌍방과실 비율 다툼 절차', href: '/guide/traffic-accident/traffic-accident-rear-end-fault-ratio' },
      { label: '교통사고 인적 손해 배상 청구', href: '/guide/traffic-accident/traffic-accident-passenger-injury-claim' },
    ],
  },
];
