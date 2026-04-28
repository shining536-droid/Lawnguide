import { SpokePage } from '../spoke-pages';

// batch49 traffic 5개: traffic-accident victim/accused 혼합
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 사고 후 며칠~한 달 뒤 통증이 발현된 피해자가 진단서·의료기록을 합의 전에 정리하도록 돕는 페이지다.
// 2. 이 페이지는 신호위반(12대 중과실)으로 형사 처벌이 진행 중인 가해 운전자가 합의가 양형에 미치는 영향을 정리하도록 돕는 페이지다.
// 3. 이 페이지는 직진·좌회전·교차로 양보의무 위반 사고로 과실비율을 다투려는 피해 운전자가 케이스별 자료를 정리하도록 돕는 페이지다.
// 4. 이 페이지는 후방 추돌을 당했지만 급정거가 쟁점이 된 피해 운전자가 과실 분담 다툼 자료를 정리하도록 돕는 페이지다.
// 5. 이 페이지는 음주운전 차량에 동승했다가 사고를 당한 동승자가 자기보험·자배법 보상 가능 조건을 정리하도록 돕는 페이지다.

export const spokesBatch49Traffic: SpokePage[] = [
  // ─── 1. traffic-accident / delayed-pain-medical-record (절차형, victim) ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-delayed-pain-medical-record',
    keyword: '교통사고 지연 통증 진단서',
    questionKeyword: '사고 후 며칠 뒤 통증이 시작됐는데 진단서·의료기록을 어떻게 정리하나요?',
    ctaKeyword: '지연 통증 합의 전 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '교통사고 지연 통증 진단서·의료기록 5단계 정리 | 로앤가이드',
      description:
        '사고 직후엔 멀쩡했다가 일주일~한 달 뒤 통증이 시작됐다면, 합의 전 진단서·의료기록 정리 순서를 지금 확인하세요.',
    },
    intro:
      '<p>가벼운 접촉 사고 직후엔 통증이 없어 보험사 콜센터에 "괜찮다"고 답했는데 며칠 뒤 목·허리·어깨가 무겁게 아파 오기 시작하면 "지금 진단서를 받아도 인정될까, 합의는 어떻게 미루지" 막막해집니다. 지연 통증은 외상성 경추증후군·연부조직 손상·뇌진탕후증후군 등에서 흔히 보고되며, 진단서 발급 시점과 의료기록의 일관성이 합의금·후유장해 인정의 핵심 자료가 됩니다.</p>',
    sections: [
      {
        title: '지연 통증 — 사고와 인과관계 입증의 시작',
        content:
          '<p><strong style="color:#1e3a5f">사고 직후 통증이 없었더라도 일정 기간 안에 발현된 통증은 사고로 인한 손해로 인정될 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>경추·요추 염좌</strong> — 사고 후 24~72시간 내 통증 발현이 흔하며, 1~4주 뒤 만성화되는 사례도 보고됩니다.</li>\n<li><strong>뇌진탕후증후군</strong> — 두통·어지럼증·집중력 저하가 사고 후 1주~수개월에 걸쳐 발현될 수 있습니다.</li>\n<li><strong>인과관계 입증</strong> — 사고 경위·증상 발현 시점·의료기록의 일관성이 종합 판단되는 사항입니다.</li>\n<li><strong>합의 시점 영향</strong> — 합의서에 "이후 발생한 후유증에 대해 일체 청구하지 않는다" 조항이 있으면 추가 청구가 어려워질 소지가 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "지연 통증이 사고로 인한 것"임을 객관적 의료기록으로 남기는 것이 합의금·후유장해 평가의 출발점입니다.</blockquote>',
      },
      {
        title: '진단서·의료기록 — 무엇을 어떻게 확보할까',
        content:
          '<p><strong style="color:#1e3a5f">통증 발현 즉시 의료기관 진료를 받고, 사고 시점·증상·치료 내용을 의무기록에 명확히 남겨두는 것이 중요합니다.</strong></p>\n<ul>\n<li><strong>1. 진단서</strong> — 상해진단서(전치 ○주)·소견서·후유장해진단서. 발급 시 사고 경위와 증상 발현 시점을 의사에게 명확히 전달.</li>\n<li><strong>2. MRI·CT 등 영상자료</strong> — 추간판 탈출·경추 염좌 등 객관적 소견 확보. 보험사 자체 영상 의뢰 외에 본인 비용으로도 추가 촬영 가능.</li>\n<li><strong>3. 외래·입원 기록</strong> — 진료 빈도·치료 내용·통증 호소 기록. 통증이 일관되게 기록되어 있어야 신뢰도 확보.</li>\n<li><strong>4. 영수증·약제 처방전</strong> — 치료비 산정·일실수입 입증의 기초.</li>\n<li><strong>5. 진료기록 사본 발급</strong> — 의료법 제21조에 따라 본인은 무상~소정 수수료로 사본 발급 가능, 합의·소송에 활용.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 지연 통증 진단서 정리, AI로 점검해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">통증 발현 시점·진단서 종류·합의 시점까지 AI가 단계별로 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '합의 전 후유장해 — 평가 시점과 청구 방향',
        content:
          '<p><strong style="color:#1e3a5f">합의 전 후유장해 평가가 적정한 시점인지 점검하고, 추가 청구 가능성을 열어두는 합의 문구가 권장됩니다.</strong></p>\n<ul>\n<li><strong>증상 고정 시점</strong> — 더 이상 호전이 없는 시점이 후유장해 평가의 적정 시기, 통상 사고 후 6개월~1년 사이.</li>\n<li><strong>노동능력상실률</strong> — 맥브라이드·국가배상법 시행령 별표 등 기준에 따라 평가, 의사 감정과 법원 신체감정 결과를 종합.</li>\n<li><strong>합의서 단서</strong> — "본 사고로 인한 후유증이 추가로 발견되면 별도 청구할 수 있다" 단서를 두는 것이 권장됩니다.</li>\n<li><strong>3년 소멸시효</strong> — 손해 발생을 안 날로부터 3년 안에 손해배상 청구. 후유장해는 증상 고정 시점부터 카운트.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 보험사 제시 합의금이 빠른 처리 명목으로 낮은 사례가 많아요. 충분한 진단·치료 후 합의 검토가 권장됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 지연 통증 5단계 정리 흐름',
        content:
          '<p><strong style="color:#1e3a5f">증상 발현·진단서 확보·치료 지속·후유장해 평가·합의 단계를 순서대로 진행하면 누락 없이 정리할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증상 발현 즉시 의료기관 방문 (통증 시작 24시간 내 권장)</strong> — 사고 경위와 통증 발현 시점을 의사에게 명확히 전달.</li>\n<li><strong>2단계 — 진단서·영상자료 확보 (1주 내)</strong> — 상해진단서, MRI·CT 등 객관적 소견.</li>\n<li><strong>3단계 — 치료 지속 + 보험사 통보 (수일~수개월)</strong> — 진료 빈도·치료 내용 일관성 유지, 보험사에 추가 진료 사실 통보.</li>\n<li><strong>4단계 — 후유장해 평가 (사고 후 6~12개월)</strong> — 증상 고정 시점에 후유장해진단서 발급, 신체감정 의뢰 검토.</li>\n<li><strong>5단계 — 합의 (단서 조항 포함)</strong> — "추가 후유증 발견 시 별도 청구 가능" 단서 검토, 3년 소멸시효 안에 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 지연 통증 합의 순서, 단계별로 정리해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 사고로 인한 후유장해와 기왕증 기여도',
        summary:
          '대법원 2015다8902 사건(대법원, 2019.05.30 선고)에서 법원은 교통사고 피해자에게 복합부위통증증후군(CRPS)이라는 후유장해가 발생한 경우 기왕증이 사고와 경합하여 손해 확대에 기여했다면 그에 상응한 배상액을 부담하게 하는 것이 손해의 공평한 부담을 위해 타당하며, 노동능력상실률은 의학적 신체기능장애율 외에 연령·직업·경력 등 사회·경제적 조건을 종합 참작해 정한다고 판시했습니다.',
        takeaway: '지연 발현 통증·후유장해도 사고와의 인과관계와 기왕증 기여도를 의료기록으로 입증하면 손해배상 산정에 반영될 소지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '사고 후 한 달 뒤에 통증이 시작됐는데 인정받을 수 있나요?',
        answer:
          '<strong>발현 시점이 늦을수록 인과관계 입증이 어려워지지만 불가능한 것은 아닙니다.</strong> MRI·CT 객관적 소견, 일관된 의료기록이 있으면 다툴 수 있어요.',
      },
      {
        question: '합의 후에 후유증이 나타났는데 추가 청구가 가능한가요?',
        answer:
          '<strong>합의서 문구에 따라 달라집니다.</strong> "일체 청구 포기" 조항이 있으면 어려운 경우가 많고, "후유증 추가 발견 시 별도 청구 가능" 단서가 있으면 다툴 소지가 있어요.',
      },
      {
        question: '진단서는 동네 정형외과에서 받아도 되나요?',
        answer:
          '<strong>경상은 가능하지만, MRI·신경학 소견이 필요한 경우 종합병원 외래로 전원하는 것이 권장됩니다.</strong> 후유장해진단서는 전문의 진단이 신뢰도가 높아요.',
      },
      {
        question: '보험사가 진료 중단하라고 압박하는데 어떻게 대응하나요?',
        answer:
          '<strong>치료 필요성은 의사 판단 사항입니다.</strong> 보험사가 일방적으로 종결할 수 없고, 치료 지속 진단서를 받아두면 보험사 자문의 의견과 다툴 수 있어요.',
      },
      {
        question: '의무기록 사본은 누구나 발급받을 수 있나요?',
        answer:
          '<strong>본인은 의료법 제21조에 따라 발급받을 수 있고, 보험사·변호사도 본인 동의서가 있으면 청구 가능합니다.</strong> 발급 거부 시 보건소·국민건강보험공단에 민원 제기할 수 있어요.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의 전 준비서류', href: '/guide/traffic-accident/traffic-accident-settlement-documents' },
      { label: '저속 추돌 후유증 추가 청구', href: '/guide/traffic-accident/traffic-accident-low-speed-rear-end-aftereffect' },
      { label: '교통사고 형사합의 절차', href: '/guide/traffic-accident/traffic-accident-criminal-settlement' },
      { label: '교통사고 블랙박스 증거 활용', href: '/guide/traffic-accident/traffic-accident-blackbox-evidence' },
      { label: '다중추돌 과실 분쟁', href: '/guide/traffic-accident/traffic-accident-multi-vehicle-pile-up-fault' },
    ],
  },

  // ─── 2. traffic-accident / signal-violation-criminal-impact (Q&A형, accused) ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-signal-violation-criminal-impact',
    keyword: '신호위반 12대 중과실',
    questionKeyword: '신호위반 사고는 합의해도 처벌받나요? 양형은 어떻게 달라지나요?',
    ctaKeyword: '신호위반 합의 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '신호위반 12대 중과실 합의 영향과 양형 5가지 | 로앤가이드',
      description:
        '신호위반 사고로 형사 처벌 통보를 받았다면, 합의가 형량에 미치는 영향과 황색등화 쟁점, 양형 자료를 지금 확인하세요.',
    },
    intro:
      '<p>교차로에서 황색·적색 신호에 진입했다가 사고를 낸 뒤 경찰서 출석 통보를 받으면 "종합보험 들었으니 처벌은 안 되겠지?" 생각하시기 쉽지만, 신호위반은 교통사고처리특례법 12대 중과실 1호로 종합보험 면책이 안 됩니다. 혐의를 받고 있다면 합의 시점·자료·황색등화 쟁점을 정확히 정리해두는 것이 양형의 분기점이 될 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 신호위반은 종합보험에 들어 있어도 처벌되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 신호위반은 12대 중과실 1호라 종합보험 가입 여부와 무관하게 공소 제기 대상입니다.</strong></p>\n<ul>\n<li><strong>교통사고처리특례법 제3조 제2항 단서 1호</strong> — "신호기 또는 교통정리를 하는 경찰공무원 등의 신호나 지시를 위반"한 사고는 종합보험 면책 예외.</li>\n<li><strong>황색등화 쟁점</strong> — 황색 등화로 바뀐 시점에 정지선·교차로 직전에 정지하지 않으면 신호위반에 해당될 소지가 있습니다.</li>\n<li><strong>합의 효과</strong> — 신호위반은 반의사불벌죄가 아니므로 합의해도 공소 자체는 유지되지만, 양형에서 결정적 감경 요소로 작용할 수 있습니다.</li>\n<li><strong>혐의를 받고 있다면</strong> 본인의 행위가 황색등화·적색등화 어디에 해당하는지부터 객관적 자료(블랙박스·CCTV)로 정리하는 것이 우선입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 신호위반 인정 여부와 합의 결과가 형량의 가장 큰 두 가지 변수입니다.</blockquote>',
      },
      {
        title: 'Q. 합의가 형사 양형에 어떻게 영향을 주나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 합의는 신호위반 사건에서 가장 강력한 양형 감경 요소이며, 합의 시점이 빠를수록 효과가 커지는 사례가 많습니다.</strong></p>\n<ul>\n<li><strong>벌금형 가능성</strong> — 경상·합의 시 약식기소(벌금형)로 처리되는 사례가 많습니다.</li>\n<li><strong>집행유예 가능성</strong> — 중상해·사망사고도 합의·반성·초범 등이 인정되면 실형 대신 집행유예로 선고된 사례가 있어요.</li>\n<li><strong>처벌불원 의사</strong> — 합의서에 처벌불원 의사가 명시되면 양형에 강하게 반영됩니다.</li>\n<li><strong>합의 시점</strong> — 검찰 송치 전 합의가 가장 효과 큼, 공판 단계에서도 가능하지만 영향 작아짐.</li>\n<li><strong>형사합의금</strong> — 보험사 대인배상과 별개로 가해자 본인이 부담하는 별도 금액(특약 가입 시 일부 지원).</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 신호위반 합의 영향, AI로 점검해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">합의 시점·자료·양형 영향까지 AI가 상황별로 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 황색등화 진입은 항상 신호위반인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 황색등화로 바뀌기 전에 이미 교차로에 진입한 차량은 통과해야 하지만, 진입 전 황색등화로 바뀐 경우 정지선·교차로 직전에 정지해야 합니다.</strong></p>\n<ul>\n<li><strong>도로교통법 시행규칙 [별표 2]</strong> — 황색등화 시 정지선이 있거나 횡단보도가 있을 때는 그 직전, 없으면 교차로 직전에 정지.</li>\n<li><strong>이미 진입한 차량</strong> — 신속히 교차로 밖으로 진행하는 것이 원칙. 사실과 다르게 신고되었다면 블랙박스·CCTV로 진입 시점 입증이 우선입니다.</li>\n<li><strong>입증 자료</strong> — 본인 차량 블랙박스, 교차로 CCTV, 상대 차량 블랙박스, 목격자 진술 등이 진입 시점·신호 상태 입증의 핵심.</li>\n<li><strong>안전표지·실선 침범</strong> — 진로변경 금지 안전표지(백색실선) 위반 사고도 12대 중과실에 포함될 소지가 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: "급정지하면 위험할 것 같아 그냥 통과했다"는 진술은 양형에서 불리하게 작용할 소지가 있어요. 진술 전 자료부터 정리하는 것이 권장됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신호위반 사건 처리 흐름',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·합의·양형자료 제출·재판 대응을 동시에 관리해야 합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 확보 (사고 직후)</strong> — 본인 블랙박스·교차로 CCTV·상대 차량 블랙박스 보존 요청.</li>\n<li><strong>2단계 — 변호인 상담 (조사 전)</strong> — 법률구조공단(132) 무료 상담 또는 사선 변호인 검토.</li>\n<li><strong>3단계 — 경찰 조사 (1~2주)</strong> — 황색등화 진입 시점·신호 상태 일관 진술.</li>\n<li><strong>4단계 — 형사합의 (검찰 송치 전 권장)</strong> — 별도 합의금으로 처벌불원 의사 확보.</li>\n<li><strong>5단계 — 검찰·법원 (1~6개월)</strong> — 합의서·반성문·탄원서 제출, 약식기소·집행유예 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 신호위반 처리 순서, 단계별로 점검해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 황색등화와 신호위반 적용',
        summary:
          '대법원 2018도14262 사건(대법원, 2018.12.27 선고)에서 법원은 차량이 교차로에 진입하기 전에 황색등화로 바뀐 경우에는 정지선이나 교차로 직전에 정지하여야 하며, 정지선·횡단보도가 설치되어 있지 않더라도 황색 등화를 보고 교차로 직전에 정지하지 않았다면 신호를 위반한 것이라고 판시했습니다.',
        takeaway: '황색등화 진입 사건은 진입 시점이 신호 변경 전·후 어디인지가 처벌 분기점이며, 객관적 영상이 핵심 자료가 됩니다.',
      },
    ],
    faq: [
      {
        question: '황색등화에 진입했는데 신호위반이라고 합니다. 다툴 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 황색등화 점등 시점과 본인 차량 정지선 통과 시점을 블랙박스·CCTV로 비교해 사실과 다르게 신고된 부분을 다투어볼 소지가 있어요.',
      },
      {
        question: '합의금은 어느 정도가 적정한가요?',
        answer:
          '<strong>사건별 차이가 크지만 경상 200만~500만 원, 중상해 1,000만~3,000만 원 수준이 검토되는 사례가 있습니다.</strong> 보험사 대인배상과 별도로 산정하는 것이 일반적이에요.',
      },
      {
        question: '벌금형이 나오면 면허는 어떻게 되나요?',
        answer:
          '<strong>형사 벌금형과 별개로 행정처분(면허 정지·취소)이 진행됩니다.</strong> 처분 통보 후 90일 내 행정심판으로 다툴 수 있어요.',
      },
      {
        question: '피해자가 합의를 거부하면 양형 감경이 어렵나요?',
        answer:
          '<strong>공탁(법원에 합의금 예치) 제도를 활용하면 처벌불원 의사 없이도 양형 자료로 제출할 수 있습니다.</strong> 변호인 조력 아래 검토해보세요.',
      },
      {
        question: '신호위반 초범인데 실형까지 갈 수 있나요?',
        answer:
          '<strong>경상·합의·초범이면 벌금형으로 처리되는 사례가 많습니다.</strong> 다만 사망·중상해 결과면 합의 여부에 따라 집행유예 또는 실형이 다투어질 소지가 있어요.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 12대 중과실 정리', href: '/guide/traffic-accident/traffic-accident-12-major-faults-settlement-impact' },
      { label: '교통사고 형사합의 절차', href: '/guide/traffic-accident/traffic-accident-criminal-settlement' },
      { label: '졸음운전 사고 형사 처벌', href: '/guide/traffic-accident/traffic-accident-drowsy-driving-criminal-process' },
      { label: '뺑소니 사실과 다른 신고 방어', href: '/guide/traffic-accident/traffic-accident-hit-and-run-falsely-accused' },
      { label: '음주운전 혈액검사 시점 다툼', href: '/guide/traffic-accident/traffic-accident-dui-blood-test-timing' },
    ],
  },

  // ─── 3. traffic-accident / yield-violation-fault-cases (절차형, victim) ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-yield-violation-fault-cases',
    keyword: '양보의무 위반 과실비율',
    questionKeyword: '교차로에서 직진·좌회전 양보의무 위반 사고는 과실 비율을 어떻게 다투나요?',
    ctaKeyword: '양보의무 과실비율 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '양보의무 위반 사고 과실비율 9가지 케이스 정리 | 로앤가이드',
      description:
        '직진 vs 좌회전, 비보호좌회전, 우선도로 진입 등 양보의무 위반 사고의 과실 비율 케이스와 다툼 자료를 지금 확인하세요.',
    },
    intro:
      '<p>교차로에서 직진하고 있었는데 좌회전 차량이 들어오면서 충돌하면 "분명 내가 우선인데 보험사가 일부 과실을 잡는다"는 답답함이 생깁니다. 도로교통법 제27조 등 양보의무 규정은 케이스마다 우선순위가 다르고, 9가지 대표 유형(직진 vs 좌회전, 비보호좌회전, 우선도로 진입, 노폭 차이, 동시 진입 등)에 따라 과실 비율이 갈립니다. 자료가 정리되면 다툴 수 있는 폭이 넓어집니다.</p>',
    sections: [
      {
        title: '양보의무 — 도로교통법 핵심 조항',
        content:
          '<p><strong style="color:#1e3a5f">교차로 양보 우선순위는 신호·표지·차로 폭·동시진입 여부에 따라 달라집니다.</strong></p>\n<ul>\n<li><strong>도로교통법 제25조</strong> — 교차로 통행 시 우회전·좌회전 차량은 직진·우회전 차량 진로를 방해하지 않을 의무.</li>\n<li><strong>도로교통법 제26조</strong> — 교통정리 없는 교차로에서 우선도로·먼저 진입한 차·우측 차에 양보 우선순위 부여.</li>\n<li><strong>도로교통법 제27조</strong> — 보행자 보호의무. 횡단보도·교차로 보행자에게 양보.</li>\n<li><strong>비보호좌회전 표시 구역</strong> — 녹색 등화 시 좌회전 가능하지만 반대편 직진 차량 우선, 같은 방향 후방 직진 차량에 대해서는 차로변경 의무 별도 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 양보의무는 "내가 우선이었나"보다 "상대방이 양보의무를 위반했나" 관점으로 정리하는 것이 권장됩니다.</blockquote>',
      },
      {
        title: '대표 9가지 케이스 — 과실 비율 정리',
        content:
          '<p><strong style="color:#1e3a5f">손해보험협회 과실비율 인정기준을 토대로 사건별 변동 요소가 적용됩니다.</strong></p>\n<ul>\n<li><strong>1. 직진 vs 좌회전 (신호 있음)</strong> — 직진 차량 우선, 좌회전 차량 과실 80~90% 검토되는 사례.</li>\n<li><strong>2. 비보호좌회전 vs 반대편 직진</strong> — 좌회전 차량 과실 70~80% 다투어지는 사례.</li>\n<li><strong>3. 비보호좌회전 vs 후방 직진</strong> — 후방 직진 차량과 충돌 시 차로변경 주의의무 위반 별도 검토.</li>\n<li><strong>4. 우선도로 진입 vs 비우선도로</strong> — 비우선도로 차량 과실 70% 검토.</li>\n<li><strong>5. 동시 진입 (신호 없는 교차로)</strong> — 우측 차량 우선, 좌측 차량 과실 60% 검토.</li>\n<li><strong>6. 노폭 차이 있는 교차로</strong> — 좁은 도로 차량 과실 60~70% 검토.</li>\n<li><strong>7. 일방통행 위반</strong> — 일방통행 위반 차량 과실 80% 검토.</li>\n<li><strong>8. 회전교차로 진입</strong> — 진입 차량이 회전 중 차량에 양보, 진입 차량 과실 60~70%.</li>\n<li><strong>9. 횡단보도 보행자 사고</strong> — 운전자 과실 100% 원칙, 보행자 행동(무단횡단·어두운 색 의류)에 따라 과실상계 검토.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양보의무 사고 과실비율, AI로 정리해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">사건 유형별 과실 비율과 변동 요소를 AI가 상황별로 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '과실 다툼 자료 — 무엇이 결정적일까',
        content:
          '<p><strong style="color:#1e3a5f">블랙박스·CCTV·EDR·신호 점등기록 4종이 양보의무 사건에서 핵심 자료입니다.</strong></p>\n<ul>\n<li><strong>1. 본인·상대 블랙박스</strong> — 진입 시점·신호 상태·속도 기록. 교차로 진입 직전 5초가 가장 중요.</li>\n<li><strong>2. 교차로 CCTV</strong> — 도로공사·경찰청·지자체 CCTV. 보존 기간(통상 7~30일) 안에 보존 요청 필수.</li>\n<li><strong>3. EDR (사고기록장치)</strong> — 신차에는 사고 직전 5초 속도·제동·핸들 조작이 기록되어 있어 객관 자료가 됩니다.</li>\n<li><strong>4. 신호 점등기록</strong> — 교차로 신호기 제어기 데이터를 도로교통공단·지자체 신호운영센터에 요청 가능.</li>\n<li><strong>5. 도로 형태·노폭 자료</strong> — 도로 폭·차선 표시·일방통행 표지 등 사진·지적도 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사고 직후 본인 블랙박스 영상을 즉시 별도 저장해두세요. 차량 시동을 다시 켜면 메모리 덮어쓰기로 사라질 소지가 있어요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 과실비율 다툼 5단계',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·보험사 협의·분쟁조정·소송 단계를 순서대로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 확보 (사고 직후)</strong> — 본인 블랙박스 별도 저장 + CCTV 보존 요청 + 신호 점등기록 청구.</li>\n<li><strong>2단계 — 보험사 접수 (당일~3일 내)</strong> — 본인 보험사·상대 보험사 접수, 양보의무 위반 자료 제출.</li>\n<li><strong>3단계 — 보험사 간 협의 (2~4주)</strong> — 손해보험협회 과실비율 인정기준 시뮬레이터로 협의.</li>\n<li><strong>4단계 — 분쟁조정 (1~3개월)</strong> — 합의 안 되면 손해보험협회·금감원(1332) 분쟁조정 무료 신청.</li>\n<li><strong>5단계 — 민사소송 (필요 시)</strong> — 3년 소멸시효 안에 손해배상 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 양보의무 사고 처리 순서, 정리해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 비보호좌회전과 후방차량 방해',
        summary:
          '대법원 96도690 사건(대법원, 1996.05.28 선고)에서 법원은 비보호좌회전 표시가 있는 곳에서 녹색 등화 시 좌회전하면서 같은 진행방향 후방차량에 방해가 된 때에는 차선변경 시 주의의무 위반 등 다른 의무위반은 별론으로 하고 신호위반의 책임은 지지 않는다고 판시했습니다.',
        takeaway: '비보호좌회전 사고는 신호위반 적용 여부와 차로변경 주의의무 위반이 별개로 평가되어 과실 비율 다툼의 핵심 쟁점이 됩니다.',
      },
    ],
    faq: [
      {
        question: '직진 신호에 진행했는데 좌회전 차량과 부딪혔어요. 100% 받을 수 있나요?',
        answer:
          '<strong>원칙은 직진 우선이지만 본인 속도·전방주시의무 위반 등이 인정되면 일부 과실이 적용될 소지가 있습니다.</strong> 블랙박스 영상이 핵심이에요.',
      },
      {
        question: '비보호좌회전 vs 직진 사고 과실은 어떻게 되나요?',
        answer:
          '<strong>좌회전 차량 과실이 더 큰 사례가 많지만, 직진 차량의 과속 등이 입증되면 일부 과실이 인정될 수 있습니다.</strong> 신호 점등기록·CCTV가 결정적이에요.',
      },
      {
        question: 'CCTV는 누구나 받을 수 있나요?',
        answer:
          '<strong>본인이 사고 당사자라면 경찰을 통해 사실확인서 발급 후 도로공사·지자체에 요청할 수 있습니다.</strong> 보존 기간(7~30일) 안에 신속히 요청하세요.',
      },
      {
        question: '과실 비율에 동의 못 하면 어디에 신청하나요?',
        answer:
          '<strong>손해보험협회 과실비율 분쟁심의위원회(무료) 또는 금감원(1332) 분쟁조정을 검토할 수 있습니다.</strong> 조정 결과에 불복하면 민사소송으로 진행 가능해요.',
      },
      {
        question: '회전교차로 진입 사고는 어떻게 다투나요?',
        answer:
          '<strong>회전교차로는 회전 중 차량 우선이라 진입 차량 과실이 큰 경우가 많습니다.</strong> 다만 진입 차량이 이미 진입 완료한 시점이라면 다툴 소지가 있어요.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '쌍방과실 비율 다툼 절차', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '교통사고 블랙박스 증거 활용', href: '/guide/traffic-accident/traffic-accident-blackbox-evidence' },
      { label: '손해보험 분쟁조정 신청 방법', href: '/guide/traffic-accident/traffic-accident-insurance-dispute' },
      { label: '다중추돌 과실 분쟁', href: '/guide/traffic-accident/traffic-accident-multi-vehicle-pile-up-fault' },
      { label: '후방 추돌 + 급정거 과실 분배', href: '/guide/traffic-accident/traffic-accident-rear-end-sudden-brake-fault' },
    ],
  },

  // ─── 4. traffic-accident / rear-end-sudden-brake-fault (Q&A형, victim) ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-rear-end-sudden-brake-fault',
    keyword: '후방 추돌 급정거 과실',
    questionKeyword: '후방 추돌인데 보험사가 급정거 과실을 잡습니다. 어떻게 다투나요?',
    ctaKeyword: '후방추돌 급정거 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '후방 추돌 + 급정거 과실 분배 5가지 다툼 정리 | 로앤가이드',
      description:
        '후방 추돌 사고인데 급정거가 쟁점이 된 피해 운전자가 본인 과실을 다투기 위한 자료와 절차를 지금 확인하세요.',
    },
    intro:
      '<p>차선 변경 직전 앞에서 갑자기 끼어든 차량 때문에 급제동했다가 뒤차에 추돌당하면 "분명 뒤차가 들이받았는데 내가 급정거 과실이라니" 답답하실 겁니다. 후방 추돌 사고의 원칙은 뒤차 100% 과실이지만, 도로교통법상 정당한 사유 없는 급정거(제19조 제4항) 가 있었다고 인정되면 앞차에도 일부 과실이 분담될 소지가 있습니다. 자료가 정리되면 다툴 수 있는 영역이 의외로 넓습니다.</p>',
    sections: [
      {
        title: 'Q. 후방 추돌은 무조건 뒤차 100% 과실인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 원칙은 뒤차 100%지만, 도로교통법 제19조 제4항(정당한 사유 없는 급정거 금지) 위반이 인정되면 앞차에도 10~30% 과실이 분담될 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>도로교통법 제19조 제4항</strong> — "정당한 사유 없이 급정지·급제동하지 못한다."</li>\n<li><strong>도로교통법 제19조 제1항</strong> — 안전거리 확보 의무. 뒤차의 핵심 의무.</li>\n<li><strong>정당한 사유</strong> — 보행자 갑작스러운 진입, 앞차 급제동 연쇄, 도로 장애물 등 위험 회피를 위한 제동.</li>\n<li><strong>정당하지 않은 급정거</strong> — 의도적 급정거(보복운전), 단순 신호 미인지로 인한 급제동 등.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "급정거에 정당한 사유가 있었는가" 가 본인 과실 산정의 분기점입니다.</blockquote>',
      },
      {
        title: 'Q. 5가지 대표 유형 — 과실 분배 사례',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고 정황별 과실 분배가 다르며, 각 유형별로 다툼 포인트가 명확히 갈립니다.</strong></p>\n<ul>\n<li><strong>1. 일반 후방 추돌</strong> — 안전거리 미확보가 원인이면 뒤차 100% 검토.</li>\n<li><strong>2. 정당한 급제동 후 추돌</strong> — 보행자·갑작스러운 끼어들기 등 위험 회피 시 뒤차 100% 검토.</li>\n<li><strong>3. 의도적 급정거 후 추돌</strong> — 보복운전·단순 짜증 급정거면 앞차 30~40% 분담될 소지.</li>\n<li><strong>4. 신호위반·중앙선 침범 후 정차</strong> — 앞차 위법행위 후 정차 중 추돌이면 앞차 20~30% 분담 검토.</li>\n<li><strong>5. 야간·미등 미점등 후 추돌</strong> — 정차 시 비상등·미등 미점등이면 앞차 10~20% 분담 검토.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 후방추돌 급정거 다툼, AI로 정리해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">사건 유형·다툼 자료·과실 분배까지 AI가 상황별로 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 본인 과실 0%를 입증할 자료는 무엇인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 블랙박스·EDR·CCTV·목격자 진술 4종이 핵심이며, 정당한 급제동 사유 입증이 결정적입니다.</strong></p>\n<ul>\n<li><strong>1. 본인 블랙박스</strong> — 급제동 직전 장면이 보행자·끼어들기·앞차 급제동 등 정당 사유를 보여주면 가장 강한 증거.</li>\n<li><strong>2. EDR(사고기록장치)</strong> — 사고 직전 5초 속도·제동·핸들 조작 데이터. 점진적 감속이었는지 급제동이었는지 객관 입증.</li>\n<li><strong>3. 도로 CCTV</strong> — 사고 전 정황·앞 차량 끼어들기 등 종합 확인.</li>\n<li><strong>4. 후방 차량 블랙박스</strong> — 안전거리 미확보·전방 주시 의무 태만 등 뒤차 과실 입증.</li>\n<li><strong>5. 차량 파손 위치</strong> — 뒤 범퍼 추돌이면 후방 추돌 명확. 측면·앞 부분 파손이면 추가 분석 필요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 차선 변경·끼어들기로 인한 급제동이라면 앞 차량 차종·번호판이 블랙박스에 잡혔는지 확인하고, 가능하면 그 운전자도 사고 자료에 포함시키는 것을 검토해보세요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 후방추돌 급정거 다툼 흐름',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·보험사 협의·분쟁조정 단계를 순서대로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 확보 (사고 직후)</strong> — 본인 블랙박스 별도 저장 + EDR 데이터 추출 요청 + CCTV 보존 요청.</li>\n<li><strong>2단계 — 보험사 접수 (당일~3일 내)</strong> — 본인·상대 보험사 양측 접수, "정당한 급제동" 자료 제출.</li>\n<li><strong>3단계 — 보험사 간 과실 협의 (2~4주)</strong> — 손해보험협회 과실비율 인정기준 시뮬레이터 활용.</li>\n<li><strong>4단계 — 분쟁조정 (1~3개월)</strong> — 합의 불성립 시 손해보험협회 분쟁심의위원회 무료 조정.</li>\n<li><strong>5단계 — 민사소송 (필요 시)</strong> — 3년 소멸시효 안에 손해배상 청구. 자기부담금 환수 별도 청구 가능성도 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 후방추돌 처리 순서, 단계별로 점검해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 야간 미등·차폭등 미점등 정차 차량 추돌과 인과관계',
        summary:
          '대법원 96도2030 사건(대법원, 1996.12.20 선고)에서 법원은 야간에 2차선 굽은 도로에 미등·차폭등을 켜지 않고 화물차를 주차시켜 놓아 오토바이가 추돌해 운전자가 사망한 사안에서, 주차행위와 사고 발생 사이의 인과관계가 없다고 본 원심판결을 심리미진 등을 이유로 파기했습니다.',
        takeaway: '후방 추돌이라도 앞차의 미등 미점등·정당하지 않은 정차·신호 위반 등이 사고 원인에 기여했다면 과실 분담이 인정될 소지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '뒤차가 안전거리 미확보였다고 주장하면 어떻게 다투나요?',
        answer:
          '<strong>본인이 정당한 사유로 급제동했음을 블랙박스로 입증하는 것이 핵심입니다.</strong> 보행자 진입·앞차 급제동·도로 장애물 등 객관 사정이 보이면 본인 과실이 줄어들 소지가 있어요.',
      },
      {
        question: '본인 차량 EDR 데이터는 어떻게 받나요?',
        answer:
          '<strong>제조사 서비스센터·사고조사기관에 의뢰하면 추출 가능합니다.</strong> 일부 차종은 본인이 직접 추출할 수 없고 전문 장비가 필요해요.',
      },
      {
        question: '연쇄추돌인데 가운데 차가 급정거였다면 어떻게 되나요?',
        answer:
          '<strong>각 차량 간 1:1 충돌로 분리 평가됩니다.</strong> 가운데 차가 정당한 사유 없는 급정거였다면 앞차·뒤차 양측에 과실 분담이 다투어질 수 있어요.',
      },
      {
        question: '자기부담금을 일부 냈는데 돌려받을 수 있나요?',
        answer:
          '<strong>가능성이 있습니다.</strong> 대법원 2022다287284 판결에 따라 자기부담금 중 상대방 책임비율에 해당하는 금액은 별도 청구할 수 있는 길이 있어요.',
      },
      {
        question: '사고 자체는 인정하지만 과실 비율만 다툴 때 보험 처리에 영향이 있나요?',
        answer:
          '<strong>본인 과실 비율이 줄어들면 보험료 할증 폭이 줄어들 수 있습니다.</strong> 분쟁조정·소송 결과를 보험사에 제출해 갱신 보험료 재산정 요청이 가능해요.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '쌍방과실 비율 다툼 절차', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '저속 추돌 후유증 추가 청구', href: '/guide/traffic-accident/traffic-accident-low-speed-rear-end-aftereffect' },
      { label: '다중추돌 과실 분쟁', href: '/guide/traffic-accident/traffic-accident-multi-vehicle-pile-up-fault' },
      { label: '교통사고 블랙박스 증거 활용', href: '/guide/traffic-accident/traffic-accident-blackbox-evidence' },
      { label: '양보의무 위반 과실비율', href: '/guide/traffic-accident/traffic-accident-yield-violation-fault-cases' },
    ],
  },

  // ─── 5. traffic-accident / drunk-passenger-self-insurance (Q&A형, victim) ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-drunk-passenger-self-insurance',
    keyword: '음주운전 동승자 자기보험',
    questionKeyword: '음주운전 차량에 동승했다 사고를 당했는데 보험 보상이 되나요?',
    ctaKeyword: '음주 동승자 보험 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '음주운전 차량 동승자 자기보험 보상 5가지 조건 | 로앤가이드',
      description:
        '음주운전 차량 동승자가 사고로 다쳤을 때 본인 자기신체사고·자배법 보상 가능 조건과 음주 인지 여부 다툼을 지금 확인하세요.',
    },
    intro:
      '<p>술자리 후 친구가 운전하는 차에 잠깐 동승했다 사고가 나서 다쳤다면 "음주운전 차량이라 보험이 안 된다는데, 내 보상은 어떻게 되나" 막막하실 겁니다. 음주운전 차량 동승자도 자배법(자동차손해배상보장법)·본인 자기신체사고 특약·국민건강보험 등 여러 경로로 보상 가능성이 검토되며, 핵심 쟁점은 "음주 인지 여부"와 "운행지배·운행이익" 입니다. 자료가 정리되면 보상 폭이 달라집니다.</p>',
    sections: [
      {
        title: 'Q. 음주운전 차량 동승자도 보험금을 받을 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 가능성이 있습니다. 다만 음주 인지 여부에 따라 자기과실 분담 비율이 달라질 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>자배법 책임보험</strong> — 운행자(차주)는 동승자에게 사상 시 손해배상 책임. 음주여부와 무관하게 책임보험 한도까지 보상 검토.</li>\n<li><strong>대인배상Ⅱ(종합보험)</strong> — 음주운전 면책 약관 해당될 수 있으나, 동승자가 음주를 인지하지 못했다면 다툴 소지가 있어 검토 권장.</li>\n<li><strong>본인 자기신체사고/자상</strong> — 본인이 가입한 자동차보험에 자기신체사고·자상 특약이 있으면 본인 차량 동승 여부와 무관하게 보상 가능성.</li>\n<li><strong>음주 인지 여부</strong> — 동승자가 음주 사실을 알면서 동승했다면 자기과실 30~70% 인정될 소지.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "음주를 알았는지" 가 보상 비율의 가장 큰 변수입니다. 객관 정황(같은 자리 음주·같이 시간 보냄·운전 직전 음주 목격 등)이 종합 평가됩니다.</blockquote>',
      },
      {
        title: 'Q. 음주 인지 여부는 어떻게 판단되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 동승 경위·음주 정황·운전자와 관계 등이 종합 판단되며, 명확한 입증 자료가 핵심입니다.</strong></p>\n<ul>\n<li><strong>같은 자리 음주</strong> — 같은 회식·식사 자리에서 운전자가 음주한 사실을 본 경우 인지 인정 사례가 많음.</li>\n<li><strong>외관·언행</strong> — 운전자의 음주 외관(붉어진 얼굴·술 냄새·말 더듬음)이 명확했다면 인지 인정 가능성.</li>\n<li><strong>운전자와 관계</strong> — 가족·동거인·직장 동료 등 평소 가까운 관계는 음주 인지 추정이 강하게 작용.</li>\n<li><strong>인지 부정 사례</strong> — 운전자가 다른 자리에서 음주, 동승 시점에 음주 사실 전혀 모름, 짧은 거리 호출 동승 등.</li>\n<li><strong>입증 자료</strong> — 동선 기록(카드내역·CCTV·통화기록), 회식 자리 사진, 동승 시점 동영상 등.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주 인지 여부 다툼, AI로 정리해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">동승 경위·자료·과실 분담까지 AI가 상황별로 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 다른 보상 경로는 무엇이 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 자기 보험 외에도 정부보장사업·국민건강보험·산재 등 보완 경로가 있습니다.</strong></p>\n<ul>\n<li><strong>1. 정부보장사업 (자배법 제30조)</strong> — 무보험·뺑소니 차량 사고 시 자배법 한도까지 정부가 보장. 손해보험협회(02-3702-8500)에 청구.</li>\n<li><strong>2. 본인 자동차보험 자기신체사고/자상 특약</strong> — 본인 차량 동승 사고 외에도 일부 약관은 다른 차량 동승 사고도 보장.</li>\n<li><strong>3. 본인 상해보험·생명보험</strong> — 가입한 보험에 교통상해 특약이 있으면 별도 청구 가능.</li>\n<li><strong>4. 국민건강보험</strong> — 우선 치료비 처리 후 가해자에게 구상권 행사. 음주운전 운전자에 대한 부당이득 반환 가능.</li>\n<li><strong>5. 산재 (출퇴근·업무 중 사고)</strong> — 출퇴근 동승·업무 중 동승이면 산재 처리 가능성 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 본인 자동차보험 약관을 우선 확인하고, 보장 안 되면 정부보장사업·건강보험 순으로 검토하세요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 음주 동승자 보상 5단계',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·자기 보험 청구·자배법 청구·정부보장사업 단계를 순서대로 검토합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 확보 (사고 직후)</strong> — 사고 경위·음주 인지 여부 입증 자료(동선 기록·통화·사진).</li>\n<li><strong>2단계 — 본인 자기신체사고/자상 청구 (사고 후 즉시)</strong> — 본인 자동차보험 약관 확인 후 청구.</li>\n<li><strong>3단계 — 가해 차량 책임보험·종합보험 청구 (1~2개월)</strong> — 자배법 책임보험 한도까지 청구, 음주 면책 다툼 진행.</li>\n<li><strong>4단계 — 정부보장사업·건강보험 검토 (필요 시)</strong> — 책임보험 미가입·뺑소니면 손해보험협회 정부보장사업 신청.</li>\n<li><strong>5단계 — 민사소송·구상권 (필요 시)</strong> — 3년 소멸시효 안에 운전자·차주에 대한 직접 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 동승자 보상 절차, 단계별로 점검해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 사고 유발 운전자와 동승자 사망의 인과관계',
        summary:
          '대법원 2003다26075 사건(대법원, 2004.08.20 선고)에서 법원은 자신이 유발한 교통사고로 중상해를 입은 동승자를 병원으로 후송한 경우 보험사고 발생에 기여한 복수의 원인이 있을 때 그 중 하나가 피보험자 등의 고의행위임을 주장하여 면책되려면 그 행위가 보험사고의 유일하거나 결정적 원인임을 입증해야 한다고 판시했습니다.',
        takeaway: '음주운전·자해 의심 사고에서도 동승자의 사상이 운전자의 고의 단독 결과가 아니라면 보험사 면책 주장은 제한될 소지가 있어 동승자 보상 가능성이 유지됩니다.',
      },
    ],
    faq: [
      {
        question: '음주운전인 줄 알고 탔다면 보상이 전혀 안 되나요?',
        answer:
          '<strong>아닙니다.</strong> 자기과실(30~70%) 분담이 적용되어 일부 보상이 검토되는 사례가 많아요. 자배법 책임보험은 한도까지 우선 보장될 소지가 있어요.',
      },
      {
        question: '운전자가 친구라 신고하기 부담스러운데 어떻게 하나요?',
        answer:
          '<strong>형사 신고와 보험 청구는 별개입니다.</strong> 보험금 청구는 사고 사실확인원만 있어도 진행되며, 형사 처벌은 본인 의사와 무관하게 음주운전은 처벌 대상이에요.',
      },
      {
        question: '대리기사 호출했는데 잠깐 운전대 잡아서 사고가 났어요. 동승자 보상은?',
        answer:
          '<strong>대리기사 보험·차주 보험 적용 여부가 사고 시점·운전자 신원에 따라 달라집니다.</strong> 자배법 운행자 책임 검토와 함께 본인 자기신체사고 특약을 우선 확인하세요.',
      },
      {
        question: '뺑소니였는데 동승자 보상은 어떻게 되나요?',
        answer:
          '<strong>정부보장사업으로 자배법 책임보험 한도까지 보장됩니다.</strong> 손해보험협회(02-3702-8500)에 청구할 수 있어요.',
      },
      {
        question: '병원 치료비를 본인이 냈는데 환수 가능한가요?',
        answer:
          '<strong>가능합니다.</strong> 운전자 또는 차주에게 손해배상 청구 또는 본인 보험사를 통한 청구 후 보험사가 가해자에게 구상권 행사하는 방식이 일반적이에요.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '음주운전 혈액검사 시점 다툼', href: '/guide/traffic-accident/traffic-accident-dui-blood-test-timing' },
      { label: '교통사고 합의 전 준비서류', href: '/guide/traffic-accident/traffic-accident-settlement-documents' },
      { label: '뺑소니 사실과 다른 신고 방어', href: '/guide/traffic-accident/traffic-accident-hit-and-run-falsely-accused' },
      { label: '교통사고 형사합의 절차', href: '/guide/traffic-accident/traffic-accident-criminal-settlement' },
      { label: '교통사고 12대 중과실 정리', href: '/guide/traffic-accident/traffic-accident-12-major-faults-settlement-impact' },
    ],
  },
];
