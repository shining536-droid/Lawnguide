import { SpokePage } from '../spoke-pages';

// batch53 traffic 5개: 무보험차 정부보장사업 + 보복운전 형사 + 보행자 신호위반 과실 + 이륜차 헬멧 미착용 손해 + 자전거→보행자 가해 책임
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 무보험·뺑소니 차량에 의해 피해를 입은 운전자·보행자가 자동차손해배상보장법 제30조 정부보장사업·무보험차상해 특약을 통해 보상을 청구하도록 돕는 페이지다.
// 2. 이 페이지는 보복운전 가해 혐의로 입건되거나 신고를 검토 중인 운전자가 도로교통법 제46조의3·특가법 제5조의10 형사 처벌 트랙을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 보행자 신호위반(적색·무단횡단)으로 차량과 충돌해 자기 과실을 다투려는 보행자가 도로교통법 제10조·과실비율 분배를 점검하도록 돕는 페이지다.
// 4. 이 페이지는 헬멧 미착용 상태에서 이륜차 사고를 당한 피해자가 헬멧 미착용이 손해 산정·과실비율에 미치는 영향과 다툼 여지를 정리하도록 돕는 페이지다.
// 5. 이 페이지는 자전거 운전자가 보행자를 친 가해자로서 형사·민사 책임 분배와 보험·합의 트랙을 정리하도록 돕는 페이지다.

export const spokesBatch53Traffic: SpokePage[] = [
  // ─── 1. traffic-accident / uninsured-victim-government-fund ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-uninsured-victim-government-fund',
    keyword: '무보험차 피해 정부보장사업',
    questionKeyword: '무보험차에 치여 다쳤는데 가해자가 보험이 없어요. 정부보장사업으로 받을 수 있나요?',
    ctaKeyword: '무보험차 피해 정부보장사업 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '무보험차 피해 정부보장사업 청구 5단계 절차 정리 | 로앤가이드',
      description:
        '무보험·뺑소니 차량에 의해 피해를 입은 피해자라면 자동차손해배상보장법 제30조 정부보장사업·무보험차상해 특약 청구 5단계 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"길을 건너다 차에 치였는데, 가해자가 보험이 하나도 없는 무보험차였어요. 치료비만 수백만원인데 어디에 청구해야 할지 막막합니다." 무보험차·뺑소니 차량 사고는 가해자 자력만 의지하면 회수가 사실상 어렵지만, 자동차손해배상보장법 제30조 <strong>정부보장사업</strong>(국토교통부 위탁, 손해보험협회 운영)이 대인배상Ⅰ 한도까지 보상해주는 안전망이 있습니다. 본인의 무보험차상해 특약(자동차보험)도 추가 보장 트랙. 사고 직후 경찰 신고·진단서 확보가 출발점이고, 정부보장사업은 사고 발생 3년·안 날로부터 3년 시효이므로 늦지 않게 진행해야 해요.</p>',
    sections: [
      {
        title: '무보험·뺑소니 사고 — 보상 트랙 4가지',
        content:
          '<p><strong style="color:#1e3a5f">자동차손해배상보장법 + 본인 보험 특약을 동시에 활용해 보상 한도를 최대화합니다.</strong></p>\n<ul>\n<li><strong>① 정부보장사업(자배법 제30조)</strong> — 무보험·뺑소니 차량 피해자에 대인배상Ⅰ 한도(사망 1.5억·부상 등급별·후유장해 등급별) 보상. 손해보험협회 위탁.</li>\n<li><strong>② 본인 무보험차상해 특약</strong> — 자동차보험 가입 시 자동 포함되는 경우 다수. 1인당 2억원 한도가 일반적. 정부보장사업과 별도 청구.</li>\n<li><strong>③ 본인 자기신체사고·자동차상해</strong> — 본인 가족·동승자 부상에 적용. 무보험차상해와 중복 가능.</li>\n<li><strong>④ 실손의료보험·교통상해보험</strong> — 치료비 추가 보장. 무보험차상해와 보장 범위 중복 일부 조정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 가해자 자력 추심만 의지하지 말고 정부보장사업 + 본인 무보험차상해 특약 동시 청구. 회수 가능 금액이 크게 늘어날 수 있음.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 정부보장사업 청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·본인 보험 청구·정부보장사업 신청·심사·지급 순서로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고 자료 확보 (사고 직후~3일)</strong> — 경찰 사고사실확인원·교통사고처리결과통보서, 본인·주변 차량 블랙박스, CCTV 보전 요청, 진단서, 가해 차량 정보(차량번호·운전자 인적사항). 뺑소니의 경우 차량번호 일부라도 확보.</li>\n<li><strong>2단계 — 본인 무보험차상해·자기신체사고 청구 (1~2주)</strong> — 본인 자동차보험사에 무보험차상해 특약·자기신체사고 청구. 실손의료보험 동시 청구.</li>\n<li><strong>3단계 — 정부보장사업 신청 (1~3개월)</strong> — 손해보험협회 정부보장사업 보상센터(www.giib.or.kr) 또는 손해보험사 영업점에서 신청. 진단서·치료비영수증·교통사고사실확인원·가해자 무보험 입증서류 첨부.</li>\n<li><strong>4단계 — 손해보험협회 심사 (60~90일)</strong> — 의료자문·후유장해 평가 거쳐 보상금 산정. 대인배상Ⅰ 한도 적용.</li>\n<li><strong>5단계 — 가해자 구상권 청구 (3년 시효)</strong> — 정부보장사업이 가해자에 구상권 행사. 본인은 한도 초과분에 대해 가해자 직접 민사소송 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 무보험차 사고 보상 트랙, 단계별로 점검해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 정부보장사업 청구 7가지',
        content:
          '<p><strong style="color:#1e3a5f">손해보험협회 심사·본인 보험 청구에 필요한 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 교통사고사실확인원·사고처리결과통보서</strong> — 관할 경찰서 교통조사계 발급. 가해 차량 정보·사고 정황 정리.</li>\n<li><strong>2. 가해자 무보험 입증서류</strong> — 자동차책임보험 미가입 확인서(가해자 보험사·국토부 자동차종합전산망 조회).</li>\n<li><strong>3. 진단서·후유장해진단서</strong> — 인적 손해 산정 핵심. 후유장해는 증상 고정 시점.</li>\n<li><strong>4. 치료비영수증·진료기록부</strong> — 의료기관 발급. 통원·입원 일자별 정리.</li>\n<li><strong>5. 본인·주변 블랙박스·CCTV</strong> — 사고 정황·가해 차량 식별.</li>\n<li><strong>6. 본인 자동차보험증권</strong> — 무보험차상해 특약 가입 확인용.</li>\n<li><strong>7. 본인 신분증·통장 사본</strong> — 보상금 입금 계좌.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정부보장사업은 대인배상Ⅰ 한도까지만 보장하므로, 후유장해·휴업손해 등 한도 초과분은 가해자 민사소송 또는 본인 무보험차상해 특약으로 보충해야 합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 무보험차 피해 청구에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"가해자가 합의하자며 시간 끄는데 응했다"</strong> — 가해자 자력 미흡 시 회수 불확실. 정부보장사업·본인 보험 청구 동시 진행이 안전.</li>\n<li><strong>본인 무보험차상해 특약 누락</strong> — 자동차보험 가입자라면 약관 확인 필수. 무보험차상해 특약 미가입이면 정부보장사업만 활용 가능.</li>\n<li><strong>뺑소니 차량 식별 포기</strong> — 차량번호 일부·차종·블랙박스 영상으로 식별 가능한 사례 다수. 경찰 추적 의뢰 + CCTV 영상 적극 보전.</li>\n<li><strong>3년 시효 도과</strong> — 사고 발생 3년·안 날로부터 3년 시효. 늦으면 정부보장사업 신청 자체가 안 됨.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 손해보험협회 정부보장사업 1544-0049 / 자동차보험 분쟁심의위원회 www.knia.or.kr / 한국교통안전공단 1577-0990 / 대한법률구조공단 132 / 거주 지자체 시민안전보험.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 면책된 가해차량과 무보험차상해 특약 적용 범위',
        summary:
          '서울지법 97가합78100 사건(서울지법, 1998.02.25 선고)에서 법원은 가해 차량이 자동차종합보험에 가입돼 있어도 무면허운전 면책약관에 따라 보험금 지급 대상에서 제외된 경우 실질적으로 무보험차량과 다름없으므로, 무보험차상해 특약상 무보험자동차에 의한 사고에 포함된다고 판시했습니다. 실제 무보험차뿐 아니라 면책으로 보상이 막힌 차량 피해도 본인 무보험차상해 특약으로 청구할 수 있다는 시사점이 있어, 가해 차량 보험 상태를 단순 가입 여부만이 아니라 약관 면책 여부까지 확인해두면 회수 가능 범위가 넓어집니다.',
        takeaway: '가해 차량이 보험에 가입돼 있어도 면책으로 지급이 막혔다면 본인 무보험차상해 특약으로 청구 가능한 사례가 있어, 약관 면책 여부까지 함께 확인해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '뺑소니로 가해 차량을 못 찾았는데 보상이 가능한가요?',
        answer:
          '<strong>자동차손해배상보장법 제30조 정부보장사업으로 대인배상Ⅰ 한도까지 보상이 가능합니다.</strong> 손해보험협회(1544-0049)에 신청. 차량번호 미확인이어도 경찰 사고사실확인원으로 신청.',
      },
      {
        question: '본인 무보험차상해 특약과 정부보장사업 중복 청구가 되나요?',
        answer:
          '<strong>중복 청구는 안 되지만 보장 한도가 다르므로 한쪽이 부족한 부분을 다른 쪽이 보충하는 구조로 활용 가능합니다.</strong> 통상 본인 특약 우선 처리 후 한도 초과분 정부보장사업 청구.',
      },
      {
        question: '무보험 가해자에게 직접 민사소송도 가능한가요?',
        answer:
          '<strong>대인배상Ⅰ 한도 초과 손해, 위자료, 휴업손해 등은 가해자 직접 청구 가능합니다.</strong> 정부보장사업이 우선 지급한 후에도 한도 초과분은 본인이 별도로 청구.',
      },
      {
        question: '자전거·전동킥보드에 치인 경우도 정부보장사업 대상인가요?',
        answer:
          '<strong>정부보장사업은 자동차손해배상보장법상 자동차에 의한 사고만 대상입니다.</strong> 자전거·일부 전동킥보드는 제외. 다만 본인 실손의료보험·시민안전보험·일상생활배상책임보험으로 청구 가능.',
      },
      {
        question: '교통사고 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 손해보험협회 정부보장사업 보상센터(1544-0049)·자동차보험 분쟁심의위원회(www.knia.or.kr)도 무료.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '무보험 차량 사고 청구', href: '/guide/traffic-accident/traffic-accident-uninsured-vehicle-claim' },
      { label: '뺑소니 가해자 식별·증인', href: '/guide/traffic-accident/traffic-accident-hit-and-run-identify-witness' },
      { label: '뺑소니 혐의 1차 대응', href: '/guide/traffic-accident/traffic-accident-hitandrun-charge-first-response' },
      { label: '교통사고 인적·물적 손해 청구', href: '/guide/traffic-accident/traffic-accident-compensation-calculation-guide' },
      { label: '교통사고 블랙박스 증거', href: '/guide/traffic-accident/traffic-accident-dashcam-evidence-guide' },
    ],
  },

  // ─── 2. traffic-accident / revenge-driving-criminal ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-revenge-driving-criminal',
    keyword: '보복운전 형사 처벌',
    questionKeyword: '앞서 끼어든 차량을 화가 나서 급제동·차로변경으로 위협했어요. 보복운전으로 처벌받나요?',
    ctaKeyword: '보복운전 형사 트랙 점검',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '보복운전 형사 처벌 — 도로교통법·특가법 5단계 트랙 정리 | 로앤가이드',
      description:
        '보복운전 가해 혐의를 받고 있다면 도로교통법 제46조의3·특가법 제5조의10 형사 처벌 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"앞에서 끼어든 차량 때문에 화가 나서 추월하면서 급제동을 했어요. 며칠 뒤 경찰서에서 보복운전으로 출석하라는 연락이 왔습니다." 보복운전은 단순 도로 시비가 아니라 도로교통법 제46조의3(난폭·보복운전 금지)·형법 협박·특정범죄가중처벌법(특가법) 제5조의10(운전자 폭행·협박)이 결합된 형사 사건입니다. 단순 욕설은 폭언, 차량을 이용한 협박·급제동·진로방해는 보복운전, 운전자에게 직접 가한 폭행·협박은 특가법 적용 트랙으로 분기돼요. 혐의를 받고 있다면 사고 정황·블랙박스 확보 + 변호인 조력으로 트랙 분기를 신중히 정리하는 것이 중요합니다.</p>',
    sections: [
      {
        title: '보복운전 — 적용 법률과 처벌 4가지 분기',
        content:
          '<p><strong style="color:#1e3a5f">행위 태양·결과에 따라 적용 법률이 분기됩니다.</strong></p>\n<ul>\n<li><strong>① 도로교통법 제46조의3 (보복운전 금지)</strong> — 차량으로 다른 운전자를 위협하거나 진로방해. 1년 이하 징역 또는 500만원 이하 벌금. 면허취소·정지 행정처분 병행.</li>\n<li><strong>② 형법 제283조 (협박)</strong> — 차량을 매개로 한 협박은 특수협박(형법 제284조)으로 가중. 7년 이하 징역 또는 1천만원 이하 벌금.</li>\n<li><strong>③ 특가법 제5조의10 (운전자 폭행·협박)</strong> — 운행 중 차량 운전자에 대한 폭행·협박. 5년 이하 징역 또는 2천만원 이하 벌금. 상해 시 3년 이상 징역, 사망 시 무기 또는 5년 이상.</li>\n<li><strong>④ 형법 제258조의2 (특수상해)</strong> — 위험한 물건(차량)으로 상해. 1년 이상 10년 이하 징역.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 운행 중 자동차의 운전자에 대한 폭행·협박이 인정되면 특가법 제5조의10 적용으로 처벌이 무거워집니다(대법원 2022도1013). 다만 원동기장치자전거(125cc 이하)는 제외.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보복운전 형사 트랙 5단계',
        content:
          '<p><strong style="color:#1e3a5f">출석조사·변호인 조력·합의·송치·재판 단계로 진행됩니다.</strong></p>\n<ol>\n<li><strong>1단계 — 출석조사 전 자료 정리 (출석 통지~3일)</strong> — 본인·주변 차량 블랙박스 확보, 사고 정황 시간순 메모, 의도성 부정 자료(끼어들기·위협 받은 정황) 정리. 변호인 선임 검토.</li>\n<li><strong>2단계 — 경찰 출석조사 (1~2주)</strong> — 진술 시 단정형 자백 회피 + 사실관계 위주 진술. 의도성·위협성 인정 여부가 분기점.</li>\n<li><strong>3단계 — 합의·처벌불원 (1~3개월)</strong> — 피해 운전자와 합의·처벌불원서 작성. 단순 도로교통법 위반은 합의로 기소유예 가능성. 특가법 사건은 합의해도 공소제기 가능(반의사불벌 아님).</li>\n<li><strong>4단계 — 검찰 송치·기소 (1~3개월)</strong> — 기소유예·약식기소·정식기소 분기. 초범·합의·반성 시 기소유예 또는 벌금형 검토.</li>\n<li><strong>5단계 — 재판 (3~12개월)</strong> — 양형 사유(피해 정도·합의·반성·전과)에 따라 벌금·집행유예·실형 분기. 면허취소·정지 별도 행정심판.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 보복운전 혐의 트랙, AI로 정리해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 보복운전 방어 6가지',
        content:
          '<p><strong style="color:#1e3a5f">의도성·위협성 다툼·합의·양형에 필요한 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 본인·주변 차량 블랙박스</strong> — 사고 직전 끼어들기·위협 받은 정황, 본인 차량 진행 동선·속도.</li>\n<li><strong>2. CCTV 영상 보전 요청</strong> — 사고 후 14일 내 시·구청 또는 경찰서.</li>\n<li><strong>3. 사고 정황 시간순 메모</strong> — 끼어들기 시점·차로 변경·속도 변화 기록.</li>\n<li><strong>4. 합의서·처벌불원서</strong> — 피해 운전자와 합의 시 작성. 인감증명·신분증 첨부.</li>\n<li><strong>5. 반성문·탄원서</strong> — 양형 자료. 자필 + 가족·직장 동료 탄원.</li>\n<li><strong>6. 치료비·차량 수리비 영수증</strong> — 합의금 산정 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 단순 도로교통법 위반과 특가법 적용 트랙은 처벌 수위가 크게 다릅니다. 출석조사 진술 단계에서 사실관계를 정확히 기록하고, 변호인 조력으로 트랙 분기를 신중히 정리하는 것이 검토해볼 수 있는 방향입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 보복운전 형사 사건에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"단순 시비였다"는 진술로 의도성 자백</strong> — "위협하려고 했다" 같은 표현은 협박 의도 자백으로 해석. 사실관계만 진술 + 의도 표현 신중히.</li>\n<li><strong>합의 없이 출석조사 단독 진행</strong> — 합의·처벌불원이 양형에 결정적. 출석 전 피해 운전자와 합의 시도 권장.</li>\n<li><strong>특가법 사건도 합의로 끝난다 오해</strong> — 특가법은 반의사불벌이 아님. 합의해도 검찰 기소 가능.</li>\n<li><strong>면허 행정처분 별도 트랙 누락</strong> — 형사 처벌과 별도로 면허 취소·정지 행정심판이 진행. 90일 내 행정심판 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 한국교통안전공단 1577-0990 / 중앙행정심판위원회 110 / 손해보험협회 분쟁심의위원회 www.knia.or.kr.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 운전자 폭행·협박과 자동차의 범위',
        summary:
          '대법원 2022도1013 사건(대법원, 2022.04.28 선고)에서 법원은 특가법 제5조의10에서 정한 "자동차"는 도로교통법상의 자동차를 의미하며, 도로교통법상 원동기장치자전거(배기량 125cc 이하)는 자동차에 포함되지 않는다고 판시했습니다. 보복운전·운전자 폭행 사건에서 적용 법률 트랙이 차량 종류에 따라 달라질 수 있다는 점에서, 사건 초기에 차량 분류·법령 적용 범위를 확인해두는 것이 중요하다는 시사점이 있습니다.',
        takeaway: '보복운전 사건은 차량 종류·행위 태양에 따라 도로교통법·형법·특가법 트랙이 분기되므로, 사실관계와 차량 분류를 정확히 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '단순히 경적을 길게 울린 것도 보복운전인가요?',
        answer:
          '<strong>경적·상향등 조작만으로는 통상 보복운전 인정 어렵습니다.</strong> 다만 반복적·위협적 패턴 + 진로방해·급제동이 결합되면 도로교통법 제46조의3 적용 가능성.',
      },
      {
        question: '피해자와 합의하면 보복운전 사건이 끝나나요?',
        answer:
          '<strong>도로교통법 제46조의3 단독은 합의로 기소유예 가능성 있지만, 특가법 제5조의10은 반의사불벌이 아니라 합의해도 공소제기 가능합니다.</strong> 다만 양형 감경 사유로 작용.',
      },
      {
        question: '블랙박스 영상이 본인에게 불리해도 제출해야 하나요?',
        answer:
          '<strong>자기진술 회피권(헌법 제12조)은 있지만 블랙박스는 객관 증거라 압수영장으로 확보될 수 있습니다.</strong> 변호인과 상의해 진술 전략 결정.',
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
      { label: '교통사고 가해자 형사 1차 대응', href: '/guide/traffic-accident/traffic-accident-offender-criminal-charge-response' },
      { label: '12대 중과실 합의 영향', href: '/guide/traffic-accident/traffic-accident-12-major-faults-settlement-impact' },
      { label: '음주 혈중알코올 측정 시점', href: '/guide/traffic-accident/traffic-accident-dui-blood-test-timing' },
      { label: '졸음운전 형사 절차', href: '/guide/traffic-accident/traffic-accident-drowsy-driving-criminal-process' },
      { label: '교통사고 형사·민사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
    ],
  },

  // ─── 3. traffic-accident / pedestrian-redlight-fault ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-pedestrian-redlight-fault',
    keyword: '보행자 신호위반 과실',
    questionKeyword: '적색 신호에 길을 건너다 차에 치였는데 본인 100% 과실인가요?',
    ctaKeyword: '보행자 신호위반 과실비율 점검',
    type: 'Q&A형',
    perspective: 'neutral',
    meta: {
      title: '보행자 신호위반 사고 — 과실비율 분배 5가지 쟁점 | 로앤가이드',
      description:
        '적색 신호·무단횡단 보행자가 차량과 충돌해 자기 과실을 다투려는 상황이라면 도로교통법 제10조·과실비율 분배 5가지 쟁점을 지금 확인하세요.',
    },
    intro:
      '<p>"적색 신호에 길을 건너다가 진행하던 차에 치여 다리를 다쳤어요. 보험사는 본인 100% 과실이라며 보상 안 된다고 하는데, 정말 그런가요?" 보행자 신호위반(적색 신호 횡단·무단횡단)은 도로교통법 제10조 위반이지만, 차량 운전자에게도 전방주시·서행·주의 의무가 있어 과실비율이 100:0으로 떨어지는 경우는 드뭅니다. 손해보험협회 과실비율 기준상 보행자 신호위반 사고는 보행자 60~80%·차량 20~40% 분배가 일반적이고, 차량 과속·전방주시 의무 위반·야간 시인성 부족 등이 결합되면 차량 과실이 더 가중될 수 있어요.</p>',
    sections: [
      {
        title: 'Q. 보행자 신호위반 사고 — 과실비율 결정 5가지 요소는?',
        content:
          '<p><strong style="color:#1e3a5f">A. 손해보험협회 과실비율 기준상 아래 5가지 요소가 핵심 변수입니다.</strong></p>\n<ul>\n<li><strong>① 신호 상태</strong> — 적색·황색·녹색 점멸 구분. 횡단보도 신호기 유무.</li>\n<li><strong>② 차량 속도</strong> — 도로교통법 제17조 제한속도 위반 시 차량 과실 가중. 어린이보호구역·실버존은 30km/h 제한.</li>\n<li><strong>③ 차량 전방주시 의무</strong> — 차량은 보행자 위험을 미리 발견해 회피해야 할 의무가 우선(도로교통법 제48조).</li>\n<li><strong>④ 시야 차단·야간 시인성</strong> — 주정차 차량·도로 굴곡으로 인한 시야 차단 또는 야간 무점등 보행자.</li>\n<li><strong>⑤ 보행자 특성</strong> — 어린이(13세 미만)·노인(65세 이상)·장애인은 도로교통법 제11조 보호 대상으로 차량 과실 가중.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 보행자 신호위반 사고도 차량에 100% 과실 면제는 거의 없음. 어린이·노인·장애인 보행자는 보호 대상으로 차량 과실 더 가중.</blockquote>',
      },
      {
        title: 'Q. 다툼 입증 — 어떤 자료가 결정적인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고 직후 신호 상태·블랙박스·CCTV 확보가 핵심입니다.</strong></p>\n<ul>\n<li><strong>차량·주변 블랙박스</strong> — 사고 직전 신호 상태·차량 속도·전방 시인 거리 객관 입증.</li>\n<li><strong>지자체·도로 CCTV</strong> — 시·구청 교통지도과·관할 경찰서 보전 요청. 14일 내 신청 권장.</li>\n<li><strong>경찰 사고사실확인원</strong> — 사고 시각·기상·신호 상태·도로 조건 정리. 차량 속도·운전자 부주의 정황 포함 확인.</li>\n<li><strong>도로 형태·시야 사진</strong> — 횡단보도·신호기 위치·도로 폭·시야 차단 요소.</li>\n<li><strong>진단서·후유장해진단서</strong> — 인적 손해 산정. 후유장해는 증상 고정 시점.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 보행자 신호위반 사고 과실 다툼, AI로 정리해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 보행자 사고 입증 6가지',
        content:
          '<p><strong style="color:#1e3a5f">과실비율·인적 손해 산정에 필요한 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 차량·주변 블랙박스</strong> — 신호 상태·차량 속도·전방 시인 거리.</li>\n<li><strong>2. 지자체 CCTV 보전 요청</strong> — 사고 후 14일 내 신청.</li>\n<li><strong>3. 도로 형태·신호기 사진</strong> — 횡단보도·신호기 위치·도로 폭·시야 차단 요소 다각도.</li>\n<li><strong>4. 경찰 사고사실확인원</strong> — 사고 정황·차량 속도·신호 상태 정리.</li>\n<li><strong>5. 진단서·후유장해진단서·치료비영수증</strong> — 인적 손해 산정.</li>\n<li><strong>6. 본인 가입 보험증권</strong> — 자동차보험·실손의료보험·시민안전보험 보장 범위 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 보행자 신호위반이라도 본인 가입 자동차보험 자기신체사고·실손의료보험·시민안전보험으로 치료비 보상이 가능한 경우 다수. 보장 범위 동시 확인 권장.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보행자 사고 보상 5단계',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·보험 청구·과실비율 협상·분쟁조정·민사소송 단계로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 확보 (사고 직후~3일)</strong> — 블랙박스 별도 저장, 신호기·도로 형태 사진, CCTV 보전 요청, 경찰 사고사실확인원 발급, 진단서.</li>\n<li><strong>2단계 — 차량 자동차보험 + 본인 보험 청구 (1~2주)</strong> — 차량 자동차보험 + 본인 자동차보험 자기신체사고·실손보험·시민안전보험 동시.</li>\n<li><strong>3단계 — 과실비율 협상 (1~3개월)</strong> — 보험사 1차 산정에 동의하지 않으면 추가 자료(차량 속도·전방주시 부주의 입증) 제출.</li>\n<li><strong>4단계 — 손해보험협회 분쟁조정 (60일)</strong> — 분쟁심의위원회 무료 조정 신청. 영상 감정 활용 가능.</li>\n<li><strong>5단계 — 민사소송 (3년 시효)</strong> — 운전자·보험사 상대 청구. 인적 손해는 통상 본인 과실비율만큼 감액 후 청구.</li>\n</ol>',
      },
    ],
    cases: [
      {
        title: '판례 — 횡단보도 보행자에 대한 운전자 주의의무',
        summary:
          '대법원 2020도17724 사건(대법원, 2022.04.14 선고)에서 법원은 횡단보도를 횡단하는 보행자에 대하여 자동차 운전자는 보행자보다 먼저 횡단보행자용 신호기가 설치되지 않은 횡단보도에 진입한 경우라도 차를 일시정지하는 등으로 보행자의 통행이 방해되지 않도록 할 의무가 원칙적으로 있다고 판시했습니다. 보행자 신호위반 사고에서도 차량 운전자의 전방주시·서행·일시정지 의무가 우선 평가되며, 보행자 100% 과실이 인정되는 경우는 드물다는 시사점이 있습니다.',
        takeaway: '보행자 신호위반 사고도 운전자 전방주시·일시정지 의무가 우선 평가되어 차량 과실이 인정될 수 있으므로, 차량 속도·시인 거리 자료를 일관되게 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '적색 신호에 무단횡단했는데 본인 100% 과실인가요?',
        answer:
          '<strong>차량 운전자 전방주시·서행 의무가 우선 평가되어 100% 본인 과실은 드뭅니다.</strong> 통상 보행자 60~80%·차량 20~40% 분배가 일반적.',
      },
      {
        question: '어린이·노인 보행자라면 과실비율이 다르나요?',
        answer:
          '<strong>도로교통법 제11조 보호 대상으로 차량 과실 가중됩니다.</strong> 어린이보호구역·실버존은 차량 100% 과실 인정 사례도 있음.',
      },
      {
        question: '본인 보험으로 치료비를 받을 수 있나요?',
        answer:
          '<strong>본인 자동차보험 자기신체사고·실손의료보험·시민안전보험으로 치료비 보상 가능합니다.</strong> 자가용 가입자는 자기신체사고 우선 청구 권장.',
      },
      {
        question: '야간 무점등으로 사고가 났으면 더 불리한가요?',
        answer:
          '<strong>야간 시인성 부족은 보행자 과실 가산 사유이지만, 차량 전방주시 의무가 우선 평가됩니다.</strong> 차량 속도·헤드라이트 점등·도로 조명 종합 판단.',
      },
      {
        question: '교통사고 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 손해보험협회 분쟁심의위원회(www.knia.or.kr) 과실비율 무료 조정 활용.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '보행자 무단횡단 과실', href: '/guide/traffic-accident/traffic-accident-pedestrian-jaywalking-fault' },
      { label: '야간 무점등 보행자 사고', href: '/guide/traffic-accident/traffic-accident-night-no-light-pedestrian' },
      { label: '횡단보도 보행자 사고', href: '/guide/traffic-accident/traffic-accident-pedestrian-cross-jaywalk' },
      { label: '어린이 보행자 청구', href: '/guide/traffic-accident/traffic-accident-child-pedestrian-claim' },
      { label: '교통사고 블랙박스 증거', href: '/guide/traffic-accident/traffic-accident-dashcam-evidence-guide' },
    ],
  },

  // ─── 4. traffic-accident / motorcycle-helmet-injury ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-motorcycle-helmet-injury',
    keyword: '이륜차 헬멧 미착용 손해',
    questionKeyword: '헬멧 안 쓰고 오토바이 타다 사고로 머리 다쳤는데 보상이 깎이나요?',
    ctaKeyword: '이륜차 헬멧 미착용 손해 점검',
    type: '비교형',
    perspective: 'victim',
    meta: {
      title: '이륜차 헬멧 미착용 사고 — 손해 산정·과실 5가지 쟁점 | 로앤가이드',
      description:
        '헬멧 미착용 상태에서 이륜차 사고를 당한 피해자라면 헬멧 미착용이 손해 산정·과실비율에 미치는 영향 5가지 쟁점을 지금 확인하세요.',
    },
    intro:
      '<p>"오토바이로 출근하다 차량에 치여 머리·팔에 부상을 입었어요. 그런데 그날 헬멧을 안 썼거든요. 보험사가 헬멧 미착용을 이유로 보상을 30% 깎겠다고 합니다." 이륜차(원동기장치자전거 포함) 헬멧 미착용은 도로교통법 제50조 위반이지만, 손해 산정·과실비율에서는 부위별·인과관계별 구분이 적용됩니다. 머리 부상은 헬멧 미착용 기여도 인정 사례가 많지만, 팔·다리·몸통 부상은 헬멧 미착용과 인과관계가 약해 감액 안 되는 경우 다수. 손해보험협회 과실비율 기준상 헬멧 미착용은 보통 5~15% 가산되며, 부위별 다툼 여지가 있어요.</p>',
    sections: [
      {
        title: '헬멧 미착용 — 손해 산정 영향 5가지 쟁점',
        content:
          '<p><strong style="color:#1e3a5f">헬멧 미착용은 일률 감액이 아니라 부위·인과관계별 분석이 필요합니다.</strong></p>\n<ul>\n<li><strong>① 부상 부위</strong> — 머리·얼굴 부상은 헬멧 미착용 인과관계 인정 사례 다수. 팔·다리·몸통 부상은 인과관계 약함.</li>\n<li><strong>② 사고 정황</strong> — 충돌 속도·전복 방식·노면 상태에 따라 헬멧 효과 다름. 저속 충돌은 헬멧 미착용 기여도 낮음.</li>\n<li><strong>③ 헬멧 종류·착용 방법</strong> — 풀페이스·하프·오픈페이스별 보호 범위 차이. 턱끈 미체결도 미착용으로 간주.</li>\n<li><strong>④ 운전 면허·차량 종류</strong> — 원동기장치자전거(125cc 이하) vs 이륜자동차(125cc 초과) 보호 의무 동일.</li>\n<li><strong>⑤ 동승자 헬멧 미착용</strong> — 운전자가 동승자에게 헬멧 제공·착용 권유 의무. 동승자 부상도 인과관계 인정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "헬멧 안 썼다 = 30% 감액"은 보험사 일률 적용 관행. 부위별 인과관계 다툼 시 5~15%까지 떨어진 사례 다수. 팔·다리 부상은 거의 감액 안 됨.</blockquote>',
      },
      {
        title: '부위별 비교 — 헬멧 인과관계 인정 vs 부정',
        content:
          '<p><strong style="color:#1e3a5f">손해보험협회·법원 사례상 부위별 적용은 다음과 같이 나뉘는 경향입니다.</strong></p>\n<ul>\n<li><strong>두개골 골절·뇌진탕·두피 열상</strong> — 헬멧 미착용 인과관계 인정. 5~30% 감액 사례.</li>\n<li><strong>턱·치아·목 부상</strong> — 풀페이스 헬멧이었으면 보호됐을지 종합 판단. 5~15% 감액 사례.</li>\n<li><strong>어깨·팔·손목 부상</strong> — 헬멧과 인과관계 약함. 통상 감액 없음 또는 5% 이하.</li>\n<li><strong>다리·발·골반 부상</strong> — 헬멧과 무관. 감액 부정.</li>\n<li><strong>전신 다발성 부상</strong> — 부위별 분리 산정 후 머리·얼굴 부분만 일부 감액.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 헬멧 미착용 손해 다툼, AI로 점검해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 헬멧 다툼 입증 6가지',
        content:
          '<p><strong style="color:#1e3a5f">부위별 인과관계·과실비율 다툼에 필요한 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 진단서·후유장해진단서</strong> — 부상 부위 상세 기재. 두부·안면·체간·사지 구분.</li>\n<li><strong>2. 의사 소견서·의무기록</strong> — 사고 기전·헬멧 미착용 기여도에 대한 의학적 평가.</li>\n<li><strong>3. 사고 직후 사진</strong> — 본인·이륜차·헬멧 상태(소지 여부·파손 정도) 다각도.</li>\n<li><strong>4. 본인·주변 블랙박스·CCTV</strong> — 충돌 속도·사고 정황.</li>\n<li><strong>5. 경찰 사고사실확인원</strong> — 사고 정황·도로 조건.</li>\n<li><strong>6. 자동차보험증권·이륜차보험·실손보험</strong> — 본인·상대 보장 범위 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 의사 소견서에 "헬멧 미착용과 무관한 부상" 또는 "헬멧 착용 시에도 발생했을 부상" 명시 받으면 부위별 감액 다툼에 결정적. 손해보험협회 의료자문도 활용.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 이륜차 사고 보상 5단계',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·보험 청구·부위별 감액 협상·분쟁조정·민사소송 단계로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 확보 (사고 직후~3일)</strong> — 블랙박스, 헬멧·이륜차 상태 사진, CCTV 보전, 경찰 사고사실확인원, 진단서·의사 소견서.</li>\n<li><strong>2단계 — 차량 자동차보험·본인 보험 청구 (1~2주)</strong> — 차량 자동차보험 + 본인 이륜차보험·실손보험·시민안전보험 동시 청구.</li>\n<li><strong>3단계 — 부위별 감액 협상 (1~3개월)</strong> — 보험사 일률 감액 산정에 동의하지 않으면 부위별 인과관계 입증 자료 제출.</li>\n<li><strong>4단계 — 손해보험협회 분쟁조정 (60일)</strong> — 분쟁심의위원회 무료 조정. 의료자문 활용.</li>\n<li><strong>5단계 — 민사소송 (3년 시효)</strong> — 운전자·보험사 상대 청구. 부위별 손해 분리 산정.</li>\n</ol>',
      },
    ],
    cases: [
      {
        title: '판례 — 톨게이트 하이패스 과속과 오토바이 충돌',
        summary:
          '대법원 2025도1049 사건(대법원, 2025.06.12 선고)에서 법원은 안전지대 옆을 통과하는 차량 운전자에게는 안전지대 횡단을 미리 예상할 업무상 주의의무가 원칙적으로 없고, 제한속도를 지켰더라면 충돌을 피할 수 있었던 사정이 없다면 과속과 사고 발생 사이에 상당인과관계를 인정하기 어렵다고 판시했습니다. 이륜차 사고에서도 헬멧 미착용·차량 과속 등 각 요소가 사고·부상과 어떻게 인과관계를 갖는지 객관 자료(블랙박스·의사 소견서)로 분리해 입증해야 한다는 시사점이 있습니다.',
        takeaway: '이륜차 사고는 헬멧 미착용·차량 과속 등 각 요소의 인과관계를 분리해 입증해야 부위별 손해 산정·과실비율 다툼이 유리하므로, 의학적 소견과 사고 정황 자료를 일관되게 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '헬멧 미착용이면 무조건 30% 감액인가요?',
        answer:
          '<strong>일률 30% 감액은 보험사 관행으로, 부위별 인과관계 다툼이 가능합니다.</strong> 머리 부상은 5~30%, 팔·다리는 거의 감액 안 됨.',
      },
      {
        question: '동승자가 헬멧을 안 썼으면 운전자도 책임이 있나요?',
        answer:
          '<strong>도로교통법상 운전자는 동승자에게 헬멧 제공·착용 의무가 있습니다.</strong> 동승자 머리 부상에 운전자 일부 책임 인정 가능.',
      },
      {
        question: '풀페이스 vs 오픈페이스 보호 범위 차이가 손해에 영향을 주나요?',
        answer:
          '<strong>턱·치아 부상은 풀페이스였으면 예방 가능했을지 종합 판단합니다.</strong> 의사 소견서로 인과관계 다툼.',
      },
      {
        question: '본인 이륜차보험과 자동차보험 동시 청구가 가능한가요?',
        answer:
          '<strong>네, 보장 범위에 따라 중복 청구 가능합니다.</strong> 자기신체사고·실손보험·교통상해보험·시민안전보험 동시 청구.',
      },
      {
        question: '교통사고 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 손해보험협회 분쟁심의위원회(www.knia.or.kr) 무료 조정. 한국교통안전공단(1577-0990).',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '안전벨트 미착용 과실', href: '/guide/traffic-accident/traffic-accident-seatbelt-nonuse-fault' },
      { label: '교통사고 인적 손해 산정', href: '/guide/traffic-accident/traffic-accident-compensation-calculation-guide' },
      { label: '배달 라이더 산재 청구', href: '/guide/traffic-accident/traffic-accident-delivery-rider-workers-comp' },
      { label: '저속 후미 추돌 후유증', href: '/guide/traffic-accident/traffic-accident-low-speed-rear-end-aftereffect' },
      { label: '쌍방과실 비율 다툼', href: '/guide/traffic-accident/traffic-accident-rear-end-fault-ratio' },
    ],
  },

  // ─── 5. traffic-accident / bicycle-hits-pedestrian-liability ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-bicycle-hits-pedestrian-liability',
    keyword: '자전거 보행자 가해 책임',
    questionKeyword: '자전거 타다 인도에서 보행자를 쳤어요. 형사·민사 책임이 어떻게 되나요?',
    ctaKeyword: '자전거→보행자 가해 책임 점검',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '자전거→보행자 사고 가해자 형사·민사 책임 5단계 | 로앤가이드',
      description:
        '자전거 운전자가 보행자를 친 가해자로 입건되었다면 형법·도로교통법 형사 + 민법 제750조 민사 책임 5단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"인도에서 자전거를 타다가 앞에서 걷던 분과 부딪쳐 다치게 했어요. 경찰서에서 출석하라는 연락이 왔는데, 자전거 사고도 형사 처벌이 되나요?" 자전거는 도로교통법상 차마(車馬)로 분류되어 보행자 사고 시 형사·민사 책임이 모두 발생할 수 있습니다. 형사로는 형법 제266조 과실치상 또는 도로교통법 제13조의2 위반이 검토되고, 민사로는 민법 제750조 손해배상이 적용돼요. 자동차와 달리 교통사고처리특례법 적용은 안 되어 합의·종합보험으로 형사 면책이 곧바로 되지 않으므로, 합의·자전거보험 활용·반성 자료가 핵심입니다.</p>',
    sections: [
      {
        title: '자전거→보행자 사고 — 책임 트랙 4가지',
        content:
          '<p><strong style="color:#1e3a5f">행위·결과에 따라 형사·민사·행정 책임이 분기됩니다.</strong></p>\n<ul>\n<li><strong>① 형법 제266조 과실치상</strong> — 보행자 부상 시. 500만원 이하 벌금·구류·과료. 반의사불벌(피해자 처벌불원으로 공소권 없음).</li>\n<li><strong>② 형법 제268조 업무상과실치사상</strong> — 배달·업무용 자전거의 경우 가중. 5년 이하 금고 또는 2천만원 이하 벌금.</li>\n<li><strong>③ 도로교통법 제13조의2·제27조 위반</strong> — 자전거 통행 의무·보행자 보호 의무 위반. 별도 범칙금·벌점.</li>\n<li><strong>④ 민법 제750조 손해배상</strong> — 보행자 인적·정신적 손해 배상. 자전거 보험 또는 일상생활배상책임보험으로 처리 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자전거는 교통사고처리특례법 적용 안 됨. 따라서 종합보험 가입만으로 형사 면책 안 됨. 합의·처벌불원이 형사 종결의 핵심.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 자전거 가해 형사·민사 5단계',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·보험 청구·합의·검찰 송치·재판 단계로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 확보 (사고 직후~3일)</strong> — 본인·주변 블랙박스, 사고 정황 사진, CCTV 보전, 보행자 상태·진단서, 경찰 사고사실확인원.</li>\n<li><strong>2단계 — 본인 보험 확인·청구 (1~2주)</strong> — 자전거보험·일상생활배상책임보험·운전자보험 가입 여부 확인. 가입 시 보험사 통해 보행자 손해 배상 진행.</li>\n<li><strong>3단계 — 합의·처벌불원서 (1~3개월)</strong> — 보행자와 합의 + 처벌불원서 작성. 형법 제266조 과실치상은 반의사불벌이라 처벌불원 시 공소권 없음.</li>\n<li><strong>4단계 — 검찰 송치·기소 여부 결정 (1~3개월)</strong> — 합의·반성 자료에 따라 기소유예·약식기소·정식기소 분기.</li>\n<li><strong>5단계 — 재판·민사 정리 (3~12개월)</strong> — 정식기소 시 양형 자료 제출. 민사 손해는 보험금·합의금으로 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 자전거 가해 형사·민사 트랙, AI로 정리해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 자전거 가해 대응 6가지',
        content:
          '<p><strong style="color:#1e3a5f">합의·양형·민사 정리에 필요한 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 본인·주변 블랙박스·CCTV</strong> — 사고 정황·속도·시인 거리.</li>\n<li><strong>2. 자전거·헬멧·복장 사진</strong> — 본인 안전 장비 착용 정황.</li>\n<li><strong>3. 보행자 진단서·치료비영수증</strong> — 손해 산정 핵심.</li>\n<li><strong>4. 본인 보험증권</strong> — 자전거보험·일상생활배상책임보험·운전자보험 가입 여부 확인. 가입 시 즉시 사고 통보.</li>\n<li><strong>5. 합의서·처벌불원서</strong> — 보행자 인감증명·신분증 첨부. 형법 제266조 사건 종결 핵심.</li>\n<li><strong>6. 반성문·탄원서</strong> — 양형 자료. 자필 + 가족·직장 동료 탄원.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자전거보험·일상생활배상책임보험·운전자보험은 자전거 보행자 사고 손해를 보장하는 경우 다수. 가입 약관 확인 후 즉시 사고 통보. 가입 안 됐어도 본인 자력 합의 가능.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 자전거 가해 사건에서 가장 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"자전거니까 처벌 없을 거다"는 오해</strong> — 형법 과실치상·도로교통법 위반·민사 손배 모두 적용. 자동차와 다르지만 책임은 발생.</li>\n<li><strong>합의 없이 단순 사과만</strong> — 처벌불원서 없이 사과만 하면 형사 절차 진행. 합의 + 처벌불원서가 종결의 핵심.</li>\n<li><strong>"인도에서 자전거 타도 된다" 오해</strong> — 도로교통법상 자전거는 차도 통행이 원칙. 인도 통행은 어린이·노약자·자전거우선도로 등 예외만 허용.</li>\n<li><strong>본인 보험 청구 누락</strong> — 자전거보험·일상생활배상책임보험·운전자보험 미확인. 가입 약관 즉시 점검 권장.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 한국교통안전공단 1577-0990 / 손해보험협회 분쟁심의위원회 www.knia.or.kr / 일부 지자체 무료 자전거보험 안내.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 횡단보도 보행자에 대한 운전자 주의의무',
        summary:
          '대법원 2020도17724 사건(대법원, 2022.04.14 선고)에서 법원은 횡단보도를 횡단하는 보행자에 대하여 자동차 운전자는 보행자보다 먼저 횡단보행자용 신호기가 설치되지 않은 횡단보도에 진입한 경우라도 차를 일시정지하는 등으로 보행자의 통행이 방해되지 않도록 할 의무가 원칙적으로 있다고 판시했습니다. 자전거도 도로교통법상 차마로서 보행자 보호 의무를 동일하게 부담하므로, 인도·횡단보도·교차로에서 보행자에 대한 일시정지·서행 의무 위반이 사고에 기여한 정황은 형사·민사 책임 인정의 핵심 요소가 된다는 시사점이 있습니다.',
        takeaway: '자전거도 차마로서 보행자에 대한 일시정지·서행 의무를 부담하므로, 사고 정황·서행 여부 자료를 일관되게 정리하고 합의·처벌불원·보험 트랙을 함께 진행해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '자전거 사고도 교통사고처리특례법이 적용되나요?',
        answer:
          '<strong>아니요, 자전거는 교통사고처리특례법 적용 대상이 아닙니다.</strong> 자동차와 달리 종합보험 가입만으로 형사 면책 안 됨. 합의·처벌불원이 형사 종결의 핵심.',
      },
      {
        question: '일상생활배상책임보험으로 보행자 사고 보상이 가능한가요?',
        answer:
          '<strong>대부분의 일상생활배상책임보험은 자전거 보행자 사고를 보장합니다.</strong> 가입 약관·면책사유 확인 후 즉시 사고 통보. 자전거보험·운전자보험 특약도 동일.',
      },
      {
        question: '인도에서 자전거 타다 사고면 본인 100% 과실인가요?',
        answer:
          '<strong>인도 자전거 통행은 도로교통법 위반이지만 보행자 무단행동 등이 결합되면 일부 과실 분배 가능합니다.</strong> 다만 가해자 책임이 우선 평가.',
      },
      {
        question: '합의금 산정 기준이 있나요?',
        answer:
          '<strong>치료비 + 휴업손해 + 위자료가 기본입니다.</strong> 위자료는 사례에 따라 다르지만 50만~300만원 수준이 자주 보이는 범위. 손해보험협회 분쟁심의위원회 표준 활용.',
      },
      {
        question: '교통사고 무료 상담은 어디서 받을 수 있나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 한국교통안전공단(1577-0990)도 사고 상담. 손해보험협회 분쟁심의위원회 무료 조정.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '자전거-보행자 합의', href: '/guide/traffic-accident/traffic-accident-bicycle-pedestrian-settlement' },
      { label: '자전거-보행자 과실표', href: '/guide/traffic-accident/traffic-accident-bicycle-pedestrian-fault-table' },
      { label: '전동킥보드 보행자 사고', href: '/guide/traffic-accident/traffic-accident-electric-kickboard-pedestrian' },
      { label: '교통사고 가해자 형사 1차 대응', href: '/guide/traffic-accident/traffic-accident-offender-criminal-charge-response' },
      { label: '자전거-차량 손해 청구', href: '/guide/traffic-accident/traffic-accident-bicycle-car-damage' },
    ],
  },
];
