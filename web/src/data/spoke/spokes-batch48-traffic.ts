import { SpokePage } from '../spoke-pages';

// batch48 traffic 5개: traffic-accident victim/accused 혼합
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 자전거가 보행자와 충돌해 합의·형사 절차를 정리해야 하는 자전거 운전자가 단계별 준비를 정리하도록 돕는 페이지다.
// 2. 이 페이지는 사고 후 현장을 떠났다가 뺑소니로 사실과 다르게 신고된 운전자가 도주 의도 부인 증거 정리를 돕는 페이지다.
// 3. 이 페이지는 졸음운전 사고로 형사 처벌 통보를 받은 운전자가 양형·합의 절차를 정리하도록 돕는 페이지다.
// 4. 이 페이지는 12대 중과실 사고로 종합보험 면책이 안 되는 가해 운전자가 합의·양형 영향을 정리하도록 돕는 페이지다.
// 5. 이 페이지는 다중추돌 연쇄사고에서 본인 과실 비율을 다투려는 피해 운전자가 자료 정리를 돕는 페이지다.

export const spokesBatch48Traffic: SpokePage[] = [
  // ─── 1. traffic-accident / bicycle-pedestrian-settlement (절차형, victim) ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-bicycle-pedestrian-settlement',
    keyword: '자전거 보행자 충돌 합의',
    questionKeyword: '자전거가 보행자를 치었을 때 합의와 처벌은 어떻게 진행되나요?',
    ctaKeyword: '자전거 보행자 사고 합의 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '자전거 보행자 충돌 합의와 처벌 5단계 절차 | 로앤가이드',
      description:
        '자전거가 보행자와 충돌했을 때 형사 처벌 가능성과 합의 절차, 자전거 보험 처리 순서를 지금 확인하세요.',
    },
    intro:
      '<p>출퇴근길 자전거 도로에서 보행자와 부딪혀 상대가 다쳤다면 "자전거도 형사 처벌이 있나, 보험 처리는 어떻게 하나, 합의금은 얼마 정도인가" 세 가지 고민이 동시에 생깁니다. 자전거는 도로교통법상 "차"에 해당해 교통사고처리특례법이 적용되며, 보행자 부상 시에는 합의가 형사 결과를 좌우합니다. 사고 직후 자료 확보와 자전거 보험 가입 여부 확인이 우선입니다.</p>',
    sections: [
      {
        title: '자전거의 법적 지위 — "차" 에 해당해 도로교통법 적용',
        content:
          '<p><strong style="color:#1e3a5f">자전거는 도로교통법 제2조에서 "차"에 포함되어 일반 차량과 동일한 의무가 부과됩니다.</strong></p>\n<ul>\n<li><strong>차로 통행 의무</strong> — 자전거 도로가 있으면 우선 이용, 없으면 차도 우측 가장자리 통행.</li>\n<li><strong>인도 통행 원칙 금지</strong> — 어린이·노인·장애인 자전거 등 예외를 제외하면 인도 주행은 위반(도로교통법 제13조의2).</li>\n<li><strong>업무상과실치상 적용</strong> — 보행자에게 부상을 입히면 형법 제268조 업무상과실치상 또는 일반 과실치상 적용 검토.</li>\n<li><strong>합의 영향</strong> — 5주 미만 상해는 반의사불벌, 합의 시 공소 불제기 가능성이 높지만 결과를 보장하지는 않습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자전거 사고도 형사 사건이 될 수 있으며, 합의 여부에 따라 결과가 크게 달라질 소지가 있습니다.</blockquote>',
      },
      {
        title: '사고 직후 — 보행자 보호와 증거 확보',
        content:
          '<p><strong style="color:#1e3a5f">"사고 후 미조치(뺑소니)" 가 되지 않도록 현장 조치가 가장 중요합니다.</strong></p>\n<ul>\n<li><strong>구호 조치 우선</strong> — 보행자 부상 정도 확인, 119 신고, 의식 잃은 상태면 자세 안전화.</li>\n<li><strong>인적 사항 교환</strong> — 자전거 운전자 신분증·연락처 제공. 도주하면 사고후미조치(도로교통법 제54조) 위반.</li>\n<li><strong>112 신고</strong> — 부상자 발생 시 즉시 경찰 신고, 교통사고사실확인원 발급.</li>\n<li><strong>자전거 보험 확인</strong> — 가입한 자전거 보험·일상생활배상책임보험·지자체 시민보험 여부 확인.</li>\n<li><strong>현장 사진</strong> — 자전거 위치·보행자 위치·도로 상태(인도/자전거도로/차도) 촬영.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 보행자가 "괜찮다"고 해도 연락처를 교환해두지 않으면 후일 뺑소니로 신고될 수 있어요.</blockquote>',
      },
      {
        title: '합의 절차와 합의금 — 무엇을 어떻게 정하나',
        content:
          '<p><strong style="color:#1e3a5f">자전거 사고 합의는 치료비·위자료·일실수입 3가지 항목을 기본으로 산정합니다.</strong></p>\n<ul>\n<li><strong>치료비</strong> — 진단서·치료비 영수증 기준, 자전거 보험 가입 시 보험사가 우선 처리.</li>\n<li><strong>위자료</strong> — 사건별 차이가 크지만 5주 미만 경상은 100만~300만 원 수준이 검토되는 사례가 많습니다.</li>\n<li><strong>일실수입</strong> — 보행자가 일을 못 한 기간 임금 손실, 급여명세서·재직증명서로 입증.</li>\n<li><strong>합의서 작성</strong> — "본 사건과 관련된 어떠한 청구도 하지 않음" 문구 + 인적사항·서명·날인 필수.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 자전거 보행자 사고 합의 절차, AI로 정리해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">합의 시점·금액 산정·형사 영향까지 AI가 단계별로 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 자전거 사고 5단계 처리 흐름',
        content:
          '<p><strong style="color:#1e3a5f">현장·보험·경찰·합의·형사 5단계를 순서대로 진행하면 누락 없이 처리할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 조치 (사고 직후)</strong> — 119·112 신고 + 인적사항 교환 + 사진 촬영.</li>\n<li><strong>2단계 — 보험사 접수 (당일~3일 내)</strong> — 자전거 보험·일상생활배상책임 보험사에 사고 접수.</li>\n<li><strong>3단계 — 경찰 조사 (1~2주)</strong> — 진술서 작성, 블랙박스·CCTV 영상 제출.</li>\n<li><strong>4단계 — 합의 협상 (검찰 송치 전 권장)</strong> — 보행자·가족과 합의서 작성, 합의금 지급.</li>\n<li><strong>5단계 — 형사 결과 (1~3개월)</strong> — 합의 시 불기소·약식기소 가능성 검토, 합의 불성립 시 공판 진행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 자전거 사고 처리 순서, 상황별로 점검해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 보행자 추돌 사고에서 자전거 운전자의 형사 책임',
        summary:
          '대법원 2024도15542 사건(대법원, 2025.03.13 선고)에서 법원은 작업차량 운행에 수반하여 보행자가 부상한 경우 사고후미조치죄 적용 여부와 관련하여 "차의 운전 등 교통으로 인한" 사고에 해당하는지 판단 기준을 제시했습니다.',
        takeaway: '자전거를 포함한 차량의 보행자 충돌은 운행 인과성과 사후 조치 여부가 형사 책임 판단의 핵심입니다.',
      },
    ],
    faq: [
      {
        question: '자전거 사고로 형사 처벌까지 가는 경우가 흔한가요?',
        answer:
          '<strong>경상이고 합의가 되면 대부분 불기소로 종결되는 경우가 많습니다.</strong> 다만 도주·중상해·미합의면 기소될 가능성이 높아져요.',
      },
      {
        question: '자전거 보험에 안 들었으면 합의금을 모두 자비로 부담해야 하나요?',
        answer:
          '<strong>일상생활배상책임보험·아파트 단체보험·지자체 시민보험 등에서 처리되는 경우가 있습니다.</strong> 본인 가입 보험을 한번 확인해보세요.',
      },
      {
        question: '인도에서 자전거를 타다 보행자와 부딪히면 과실이 더 큰가요?',
        answer:
          '<strong>인도 통행 자체가 도로교통법 위반이라 자전거 운전자 과실이 크게 인정되는 경우가 많습니다.</strong> 합의금·형사 양형에 영향을 줄 수 있어요.',
      },
      {
        question: '보행자가 갑자기 뛰어들었다면 과실 분담을 다툴 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 블랙박스·CCTV로 보행자의 갑작스러운 진로 변경을 입증하면 과실상계가 적용될 수 있어요.',
      },
      {
        question: '합의금이 부당하게 높다고 느껴지면 어떻게 하나요?',
        answer:
          '<strong>객관적 기준(치료비·일실수입·위자료 평균)을 제시해 협상하거나 보험사를 통한 산정 자료를 요청해보세요.</strong> 협상 결렬 시 손해사정사 의뢰도 검토할 수 있습니다.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의 전 준비서류', href: '/guide/traffic-accident/traffic-accident-settlement-documents' },
      { label: '교통사고 12대 중과실 정리', href: '/guide/traffic-accident/traffic-accident-12-major-faults-settlement-impact' },
      { label: '뺑소니 사실과 다른 신고 방어', href: '/guide/traffic-accident/traffic-accident-hit-and-run-falsely-accused' },
      { label: '야간 무단횡단 보행자 과실', href: '/guide/traffic-accident/traffic-accident-pedestrian-jaywalk-night-fault' },
      { label: '교통사고 형사합의 절차', href: '/guide/traffic-accident/traffic-accident-criminal-settlement' },
    ],
  },

  // ─── 2. traffic-accident / hit-and-run-falsely-accused (Q&A형, accused/무고) ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-hit-and-run-falsely-accused',
    keyword: '뺑소니 사실과 다른 신고',
    questionKeyword: '사고 직후 자리를 떴을 뿐인데 뺑소니로 신고됐다면 어떻게 다투나요?',
    ctaKeyword: '뺑소니 무고 다툼 점검',
    type: 'Q&A형',
    perspective: 'accused',
    meta: {
      title: '뺑소니 신고 4가지 방어 포인트와 다투는 법 | 로앤가이드',
      description:
        '사고 후 자리를 떴을 뿐인데 뺑소니로 사실과 다르게 신고되었다면, 도주 의도 부인 증거와 대응 절차를 지금 확인하세요.',
    },
    intro:
      '<p>가벼운 접촉 후 상대방이 "괜찮다"고 해서 자리를 떴는데 며칠 뒤 뺑소니로 신고되었다는 통보를 받으면 머릿속이 하얘집니다. 사실과 다르게 신고되었다면 도주 의도가 없었음을 객관적으로 입증해야 형사 처벌과 면허 취소를 피할 수 있는 길이 열립니다. 사건의 핵심은 "도주 의사" 여부 — 자료 확보가 무엇보다 중요합니다.</p>',
    sections: [
      {
        title: 'Q. 사고 후 자리를 뜨면 무조건 뺑소니인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 도주 의사가 인정되어야 뺑소니가 성립합니다. 단순히 자리를 떴다고 모두 처벌되는 것은 아닙니다.</strong></p>\n<ul>\n<li><strong>특정범죄가중처벌법 제5조의3</strong> — 사고 후 도주(뺑소니)는 가중처벌 대상이지만 "도주 의사" 가 핵심 요건입니다.</li>\n<li><strong>도주의 객관적 요소</strong> — 사상자 구호 미조치, 신원 확인 회피, 현장 이탈 등이 종합 판단됩니다.</li>\n<li><strong>도주 부정 사례</strong> — 상대방과 인적사항 교환, 보험사 호출, 단순한 위치 이동 등은 도주가 아닐 소지가 있습니다.</li>\n<li><strong>혐의를 받고 있다면</strong> 즉시 사실관계와 도주 의사 부인 자료부터 정리하는 것이 우선입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: "도주 의사 없음"을 입증할 객관적 자료(통화기록·블랙박스·증언) 가 사건의 결과를 가르는 분기점입니다.</blockquote>',
      },
      {
        title: 'Q. 어떤 자료로 도주 의사가 없었음을 입증할 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 통화기록·블랙박스·증언·현장 사진 4종이 핵심입니다.</strong></p>\n<ul>\n<li><strong>1. 통화·문자 기록</strong> — 사고 직후 상대방·112·보험사에 통화한 기록은 도주 의사 부인의 강한 증거입니다.</li>\n<li><strong>2. 블랙박스</strong> — 사고 직후 상대방과 대화·연락처 교환 장면, 상대방의 "괜찮다" 발언 등 음성 녹화.</li>\n<li><strong>3. 목격자·동승자 진술</strong> — 차에서 내려 상대방을 살핀 사실, 합의 시도 사실을 증언.</li>\n<li><strong>4. 현장 사진·CCTV</strong> — 자리를 잠시 옮긴 이유(주차 위치 정리·차량 점검 등) 입증.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 뺑소니 다툼 자료, AI로 먼저 정리해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">도주 의사 부인 증거와 진술 전략을 AI가 상황별로 정리합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 경찰 조사에서 어떻게 진술해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실관계만 일관되게 진술하고, 단정적 표현·추측 진술은 피하는 것이 좋습니다.</strong></p>\n<ul>\n<li><strong>일관성 유지</strong> — 1차·2차 진술이 다르면 도주 의사가 의심받을 소지가 있습니다.</li>\n<li><strong>변호인 동석 검토</strong> — 사실과 다르게 신고되었다면 변호인 조력 검토가 권장됩니다(법률구조공단 132 무료 상담 가능).</li>\n<li><strong>피해자와 직접 접촉</strong> — 합의 의사 표명을 위해 피해자에게 사과 메시지·통화 시도 기록 남기기.</li>\n<li><strong>진술 거부권</strong> — 불리하다고 판단되는 부분은 진술 거부권을 행사할 수 있고, 이는 피의자 권리입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: SNS·메신저에 사건 관련 글을 올리면 진술과 모순되어 불리한 정황이 될 수 있어요. 가급적 공개 게시물은 자제하세요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 뺑소니 신고 다툼 처리 흐름',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·진술 준비·합의 시도·재판 대응 순서로 단계를 진행하면 방어 포인트를 놓치지 않을 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 확보 (즉시)</strong> — 통화기록·블랙박스·CCTV 보존 요청.</li>\n<li><strong>2단계 — 변호인 상담 (조사 전)</strong> — 법률구조공단(132) 무료 상담 또는 사선 변호인 검토.</li>\n<li><strong>3단계 — 경찰 조사 출석 (1~2주 내)</strong> — 사실관계 일관 진술, 도주 의사 부인.</li>\n<li><strong>4단계 — 피해자 합의 시도 (송치 전)</strong> — 치료비·위자료 합의, 사실과 다른 신고 정정 협조 요청.</li>\n<li><strong>5단계 — 검찰·법원 단계 (1~6개월)</strong> — 불기소·약식·정식재판 단계별 자료 보강.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 뺑소니 다툼 절차, 상황별로 정리해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 도주 의사 인정 여부와 인정신문 위법성 다툼',
        summary:
          '대법원 2017도1549 사건(대법원, 2017.05.30 선고)에서 법원은 도주 인정신문 절차 등 소송 진행 과정에서 도주 의사 판단의 핵심은 사상자 구호 의사와 신원 확인 회피 의사 유무라고 판시했습니다.',
        takeaway: '도주 의사는 객관적 사정으로 판단되며, 단순한 위치 이동만으로는 도주가 인정되지 않을 소지가 있습니다.',
      },
    ],
    faq: [
      {
        question: '뺑소니로 신고됐다는데 면허는 바로 취소되나요?',
        answer:
          '<strong>형사 결과가 확정된 후 행정처분이 이루어집니다.</strong> 처분 전 의견 진술 기회가 있으니 사실과 다르게 신고된 정황을 자료로 정리해두는 것이 좋아요.',
      },
      {
        question: '상대방이 며칠 뒤에 신고한 경우는 어떻게 다투나요?',
        answer:
          '<strong>사고 직후 통증이 없었다는 점, 인적사항 교환 등이 도주 부정 자료가 됩니다.</strong> 시간 경과는 도주 의사 입증을 어렵게 만드는 요소예요.',
      },
      {
        question: '인적사항 교환 없이 자리를 뜬 경우에도 다툴 수 있나요?',
        answer:
          '<strong>다툴 소지가 있습니다.</strong> 즉시 보험사·112에 신고했거나 사고 사실 자체를 인지하지 못한 정황이 인정되면 도주 의사가 부정될 가능성이 검토됩니다.',
      },
      {
        question: '경찰 조사에 변호사 없이 가도 되나요?',
        answer:
          '<strong>가능하지만 권장하지는 않습니다.</strong> 사실과 다르게 신고된 사건은 진술 한 마디로 결과가 달라질 수 있어 법률구조공단(132) 상담이라도 받아보세요.',
      },
      {
        question: '합의되면 뺑소니 처벌이 면책되나요?',
        answer:
          '<strong>특정범죄가중처벌법상 뺑소니는 반의사불벌이 아니라 합의로도 공소 자체는 유지되는 경우가 많습니다.</strong> 다만 양형에서 유리하게 작용해 형이 감경될 소지가 있어요.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 형사합의 절차', href: '/guide/traffic-accident/traffic-accident-criminal-settlement' },
      { label: '교통사고 12대 중과실 정리', href: '/guide/traffic-accident/traffic-accident-12-major-faults-settlement-impact' },
      { label: '졸음운전 사고 형사 처벌', href: '/guide/traffic-accident/traffic-accident-drowsy-driving-criminal-process' },
      { label: '교통사고 블랙박스 증거 활용', href: '/guide/traffic-accident/traffic-accident-blackbox-evidence' },
      { label: '음주운전 혈액검사 시점 다툼', href: '/guide/traffic-accident/traffic-accident-dui-blood-test-timing' },
    ],
  },

  // ─── 3. traffic-accident / drowsy-driving-criminal-process (절차형, accused) ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-drowsy-driving-criminal-process',
    keyword: '졸음운전 형사처벌',
    questionKeyword: '졸음운전 사고로 형사 처벌 통보를 받으면 어떻게 진행되나요?',
    ctaKeyword: '졸음운전 사고 양형 점검',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '졸음운전 사고 형사처벌 5단계 양형 절차 | 로앤가이드',
      description:
        '졸음운전으로 사고가 나 형사 처벌 통보를 받았다면 양형 요소·합의·재판 절차 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>고속도로에서 잠깐 졸았다가 사고를 낸 뒤 며칠 후 경찰서에서 출석 통보를 받으면 "이게 형사 처벌까지 가는 건가, 합의는 어떻게 하나, 면허는 어떻게 되나" 막막하실 겁니다. 졸음운전은 도로교통법상 별도 처벌은 없지만, 인적 사고가 발생하면 교통사고처리특례법 또는 형법 업무상과실치사상으로 처벌 대상이 됩니다. 양형 요소를 미리 정리해두면 결과가 달라질 수 있습니다.</p>',
    sections: [
      {
        title: '졸음운전 사고의 형사 처벌 구조',
        content:
          '<p><strong style="color:#1e3a5f">결과(부상·사망)와 종합보험 가입 여부에 따라 처벌 경로가 달라집니다.</strong></p>\n<ul>\n<li><strong>경상(5주 미만)</strong> — 종합보험 가입 시 교통사고처리특례법 제4조에 따라 원칙적으로 공소 불제기.</li>\n<li><strong>중상해</strong> — 종합보험 가입과 관계없이 공소 제기 대상이 될 수 있습니다.</li>\n<li><strong>사망 사고</strong> — 형법 제268조 업무상과실치사 적용, 5년 이하 금고 또는 2,000만 원 이하 벌금.</li>\n<li><strong>특정범죄가중처벌법</strong> — 위험운전치사상(13대 위험운전) 에 졸음운전이 포함되는 경우 가중처벌 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 결과의 중대성과 합의 여부가 양형의 가장 큰 변수입니다. 혐의를 받고 있다면 양형 자료부터 정리하는 것이 우선입니다.</blockquote>',
      },
      {
        title: '양형에 유리한 자료 — 무엇을 준비할까',
        content:
          '<p><strong style="color:#1e3a5f">합의·반성·예방조치 3가지가 양형 감경 요소입니다.</strong></p>\n<ul>\n<li><strong>합의서</strong> — 피해자와 합의하면 양형에서 가장 강한 감경 요소. 치료비·위자료·일실수입 산정.</li>\n<li><strong>반성문</strong> — 사고 경위·반성·재발 방지 약속을 자필로 작성, 검사·법원 제출.</li>\n<li><strong>예방조치 자료</strong> — 운전 안전 교육 이수증, 졸음 운전 방지 장비 설치 영수증, 의료기관 수면 검사 결과.</li>\n<li><strong>피해자 탄원서</strong> — 합의 후 피해자가 처벌을 원치 않는다는 탄원서가 결정적 작용을 할 소지가 있습니다.</li>\n<li><strong>전과·운전경력</strong> — 무사고 경력·기여활동·가족 부양 등 양형자료.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 졸음운전 양형 자료, AI로 정리해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">합의·반성문·예방 자료를 AI가 상황별로 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '면허 처분 — 형사와 별개로 진행',
        content:
          '<p><strong style="color:#1e3a5f">형사 처벌과 행정 처분(면허 정지·취소)은 별개로 진행되며, 행정심판으로 다툴 수 있습니다.</strong></p>\n<ul>\n<li><strong>중상해 이상</strong> — 면허 정지 또는 취소 처분, 사망 사고는 면허 취소 + 결격기간 적용.</li>\n<li><strong>행정심판 90일</strong> — 처분 통보일로부터 90일 안에 중앙행정심판위원회에 심판청구.</li>\n<li><strong>감경 사유</strong> — 생계형 운전·무사고 경력·합의 등을 감경 사유로 주장 검토.</li>\n<li><strong>형사 결과 활용</strong> — 형사 사건에서 양형이 가벼우면 행정 처분 감경에 영향을 줄 수 있습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 행정심판 90일은 절대 기한입니다. 형사 사건이 진행 중이라도 면허 처분 통보를 받으면 즉시 카운트가 시작됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 졸음운전 형사 처리 흐름',
        content:
          '<p><strong style="color:#1e3a5f">경찰·검찰·법원·면허 처분 단계별 흐름을 동시에 관리해야 누락이 없습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경찰 조사 출석 (사고 후 1~2주)</strong> — 사실관계 진술, 블랙박스·CCTV 제출.</li>\n<li><strong>2단계 — 합의 시도 (검찰 송치 전)</strong> — 피해자 측과 합의, 합의서·탄원서 확보.</li>\n<li><strong>3단계 — 검찰 단계 (1~3개월)</strong> — 양형 자료 제출, 약식기소·불기소·정식기소 결정.</li>\n<li><strong>4단계 — 법원 재판 (3~6개월)</strong> — 정식기소 시 공판, 양형변론.</li>\n<li><strong>5단계 — 행정심판 (90일 내)</strong> — 면허 정지·취소 처분에 대해 별도 심판청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 졸음운전 형사 절차, 단계별로 점검해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주운전·졸음운전 처벌 기준 시점 판단',
        summary:
          '대법원 2025도8137 사건(대법원, 2025.12.11 선고)에서 법원은 운전 시점과 측정 시점 사이 시간 간격이 있다는 통상적인 사정만으로 처벌 기준을 초과한다고 단정할 수 없고, 운전 시점에서의 위험 운전 상태를 객관적 자료로 입증해야 한다고 판시했습니다.',
        takeaway: '졸음운전을 포함한 위험 운전 처벌은 운전 당시의 상태 입증이 핵심이며, 객관적 자료가 양형의 분기점이 됩니다.',
      },
    ],
    faq: [
      {
        question: '경상 사고인데도 형사 처벌을 받나요?',
        answer:
          '<strong>종합보험 가입자라면 5주 미만 경상은 원칙적으로 공소 불제기 대상입니다.</strong> 다만 12대 중과실에 해당하면 처벌 대상이 될 수 있어요.',
      },
      {
        question: '합의금은 어느 정도가 적정한가요?',
        answer:
          '<strong>사건별 차이가 크지만 치료비·위자료·일실수입을 합산해 산정합니다.</strong> 통상 보험사 산정액 + 위자료가 기준선이 되는 사례가 많습니다.',
      },
      {
        question: '반성문은 직접 쓰는 게 더 좋나요?',
        answer:
          '<strong>자필로 직접 쓰는 것이 진정성을 인정받기 쉽습니다.</strong> 사고 경위·반성·재발 방지 약속·피해자 사과 4가지 요소를 포함시켜보세요.',
      },
      {
        question: '면허 취소 처분 후 다시 운전하려면 얼마나 기다리나요?',
        answer:
          '<strong>사망사고는 결격기간 5년, 일반 취소는 1년이 통상입니다.</strong> 결격기간이 끝나도 운전면허 시험을 다시 봐야 해요.',
      },
      {
        question: '기소되면 무조건 실형인가요?',
        answer:
          '<strong>아닙니다.</strong> 합의·초범·반성 등이 인정되면 벌금 또는 집행유예로 처리되는 사례가 많습니다. 양형 자료에 따라 결과가 크게 달라져요.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 12대 중과실 정리', href: '/guide/traffic-accident/traffic-accident-12-major-faults-settlement-impact' },
      { label: '교통사고 형사합의 절차', href: '/guide/traffic-accident/traffic-accident-criminal-settlement' },
      { label: '뺑소니 사실과 다른 신고 방어', href: '/guide/traffic-accident/traffic-accident-hit-and-run-falsely-accused' },
      { label: '음주운전 혈액검사 시점 다툼', href: '/guide/traffic-accident/traffic-accident-dui-blood-test-timing' },
      { label: '다중추돌 과실 분쟁', href: '/guide/traffic-accident/traffic-accident-multi-vehicle-pile-up-fault' },
    ],
  },

  // ─── 4. traffic-accident / 12-major-faults-settlement-impact (절차형, accused) ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-12-major-faults-settlement-impact',
    keyword: '12대 중과실 합의 영향',
    questionKeyword: '12대 중과실 사고에서 합의는 형사 처벌에 어떤 영향을 주나요?',
    ctaKeyword: '12대 중과실 합의 점검',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '12대 중과실 사고 합의 영향과 양형 5가지 정리 | 로앤가이드',
      description:
        '12대 중과실 사고로 종합보험 면책이 안 되는 가해 운전자가 합의·양형·면허 처분 영향을 지금 확인하세요.',
    },
    intro:
      '<p>신호위반·중앙선 침범·과속 같은 12대 중과실 사고를 내면 "종합보험에 들었는데 왜 형사 처벌까지 받는다는 건가, 합의하면 처벌은 면제되나" 의문이 생깁니다. 12대 중과실은 교통사고처리특례법상 종합보험 면책 예외라 합의 여부가 형사 결과를 결정하는 가장 중요한 변수가 됩니다. 혐의를 받고 있다면 합의 시점·자료·양형 자료를 미리 정리해두는 것이 핵심입니다.</p>',
    sections: [
      {
        title: '12대 중과실이란 — 종합보험 면책 예외',
        content:
          '<p><strong style="color:#1e3a5f">교통사고처리특례법 제3조 제2항 단서에 따라 12대 중과실은 종합보험 가입과 관계없이 공소 제기 대상입니다.</strong></p>\n<ul>\n<li><strong>12대 중과실 종류</strong> — 신호위반·중앙선 침범·제한속도 20km/h 초과·앞지르기 위반·철길건널목 위반·횡단보도 보행자 보호의무 위반·무면허·음주·보도 침범·승객 추락·어린이보호구역·화물 고정 위반.</li>\n<li><strong>합의 효과</strong> — 12대 중과실은 반의사불벌죄가 아니라서 합의해도 공소 자체는 유지되지만, 양형에서 결정적인 감경 요소로 작용할 수 있습니다.</li>\n<li><strong>중상해의 경우</strong> — 12대 중과실에 해당하지 않더라도 중상해 결과면 공소 제기 대상입니다.</li>\n<li><strong>혐의를 받고 있다면</strong> 자신이 12대 중과실 어디에 해당하는지부터 정확히 파악하는 것이 시작입니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 12대 중과실에 해당하면 합의해도 형사 절차는 진행되지만 양형이 크게 달라질 소지가 있습니다.</blockquote>',
      },
      {
        title: '합의가 양형에 미치는 영향',
        content:
          '<p><strong style="color:#1e3a5f">합의는 12대 중과실 사건에서 가장 강력한 양형 감경 요소입니다.</strong></p>\n<ul>\n<li><strong>벌금 감경</strong> — 합의 시 정식기소가 아닌 약식기소(벌금형)로 처리되는 경우가 많습니다.</li>\n<li><strong>집행유예</strong> — 중상해·사망사고도 합의 시 실형 대신 집행유예로 선고되는 사례가 많습니다.</li>\n<li><strong>피해자 처벌불원 의사</strong> — 합의서에 처벌불원 의사가 명시되면 양형에 강하게 반영됩니다.</li>\n<li><strong>합의 시점</strong> — 검찰 송치 전 합의가 가장 효과 큼, 공판 단계에서도 가능하지만 영향 작아짐.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 12대 중과실 합의 영향, AI로 점검해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">합의금 산정·양형 영향·면허 처분까지 AI가 상황별로 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '합의금 산정 기준과 보험사의 역할',
        content:
          '<p><strong style="color:#1e3a5f">합의금은 보험사 대인배상 + 형사합의금으로 이원화됩니다.</strong></p>\n<ul>\n<li><strong>보험사 대인배상</strong> — 치료비·일실수입·위자료를 보험사가 약관에 따라 지급, 가해자 부담 없음.</li>\n<li><strong>형사합의금</strong> — 처벌불원 의사를 받기 위한 별도 금액, 보험사 배상과 별개로 가해자가 부담.</li>\n<li><strong>형사합의금 수준</strong> — 사건별 차이 크지만 경상 200만~500만 원, 중상해 1,000만~3,000만 원 수준이 검토되는 사례가 있습니다.</li>\n<li><strong>합의서 문구</strong> — "처벌을 원치 않습니다"가 명시되어야 양형 효과가 인정됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 합의금이 부담스럽다면 분할 지급도 가능하지만, 처벌불원 의사가 합의금 완납 조건부면 양형 효과가 늦어질 소지가 있어요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 12대 중과실 사건 처리 흐름',
        content:
          '<p><strong style="color:#1e3a5f">경찰·검찰·합의·법원·면허 처분 단계를 동시에 관리해야 합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경찰 조사 (사고 후 1~2주)</strong> — 12대 중과실 해당 여부 확인, 진술서 작성.</li>\n<li><strong>2단계 — 보험사 대인 처리 (사고 후 즉시)</strong> — 피해자 치료비·일실수입 보험사 지급.</li>\n<li><strong>3단계 — 형사합의 (검찰 송치 전 권장)</strong> — 별도 합의금으로 처벌불원 의사 확보.</li>\n<li><strong>4단계 — 검찰·법원 (1~6개월)</strong> — 합의서·반성문 제출, 약식기소·집행유예 검토.</li>\n<li><strong>5단계 — 면허 처분 대응 (90일 내)</strong> — 행정심판으로 면허 정지·취소 다툼.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 12대 중과실 처리 순서, 정리해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 안전표지 침범과 12대 중과실 처벌특례 적용',
        summary:
          '대법원 2022도12175 사건(대법원, 2024.06.20 선고)에서 법원은 안전운전을 명하는 안전표지 위반이 교통사고처리특례법 제3조 제2항 단서 제1호의 "통행금지를 내용으로 하는 안전표지" 위반에 해당하는지 여부를 두고 12대 중과실 적용 범위를 명확히 했습니다.',
        takeaway: '12대 중과실 해당 여부는 위반 표지·법령 조항을 정확히 검토해야 하며, 해당 여부에 따라 형사 절차가 크게 달라집니다.',
      },
    ],
    faq: [
      {
        question: '신호위반인데 종합보험에 가입했어요. 처벌을 피할 수 없나요?',
        answer:
          '<strong>12대 중과실은 종합보험 가입과 무관하게 공소 제기 대상입니다.</strong> 합의로 양형을 낮추는 방향으로 검토할 소지가 있어요.',
      },
      {
        question: '형사합의금은 보험사가 안 내주나요?',
        answer:
          '<strong>형사합의금은 보험사 약관 대상이 아니라 가해자 본인이 부담하는 것이 원칙입니다.</strong> 다만 일부 특약(형사합의금 지원)이 있으면 일정 한도까지 지급되는 경우도 있습니다.',
      },
      {
        question: '합의 안 하면 무조건 실형인가요?',
        answer:
          '<strong>아닙니다.</strong> 결과의 중대성·전과·반성 등 양형 요소가 종합 판단되며, 경상에 초범이면 벌금형으로 처리되는 사례도 많습니다.',
      },
      {
        question: '피해자가 합의를 거부하면 어떻게 하나요?',
        answer:
          '<strong>공탁(법원에 합의금 예치) 제도를 활용해 처벌불원 의사 없이도 양형 자료로 제출할 수 있습니다.</strong> 변호인 조력 아래 검토해보세요.',
      },
      {
        question: '안전표지 위반인지 일반 신호위반인지 어떻게 구분하나요?',
        answer:
          '<strong>위반한 표지·법령 조항을 정확히 확인해야 합니다.</strong> 도로교통법 시행규칙·안전표지 종류에 따라 12대 중과실 해당 여부가 갈리니 변호인과 함께 검토하는 것이 좋아요.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 형사합의 절차', href: '/guide/traffic-accident/traffic-accident-criminal-settlement' },
      { label: '졸음운전 사고 형사 처벌', href: '/guide/traffic-accident/traffic-accident-drowsy-driving-criminal-process' },
      { label: '뺑소니 사실과 다른 신고 방어', href: '/guide/traffic-accident/traffic-accident-hit-and-run-falsely-accused' },
      { label: '음주운전 혈액검사 시점 다툼', href: '/guide/traffic-accident/traffic-accident-dui-blood-test-timing' },
      { label: '자전거 보행자 충돌 합의', href: '/guide/traffic-accident/traffic-accident-bicycle-pedestrian-settlement' },
    ],
  },

  // ─── 5. traffic-accident / multi-vehicle-pile-up-fault (Q&A형, victim) ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-multi-vehicle-pile-up-fault',
    keyword: '다중추돌 과실 분쟁',
    questionKeyword: '다중추돌 사고에서 내 과실 비율을 다투려면 어떻게 해야 하나요?',
    ctaKeyword: '다중추돌 과실 분쟁 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '다중추돌 과실 5가지 분쟁 포인트와 청구 절차 | 로앤가이드',
      description:
        '연쇄 추돌·다중추돌 사고에서 본인 과실 비율을 다투려는 피해 운전자를 위한 자료 정리와 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>고속도로에서 1차 사고를 피하려고 멈췄는데 뒤차가 들이받고, 그 뒤차가 또 들이받는 다중추돌 사고를 당하면 "내 과실은 0%인 게 맞는데 왜 보험사가 일부 부담을 말하는 거지?" 답답하실 겁니다. 다중추돌은 차량별 충돌 시점·간격·과실을 개별 평가해야 해 일반 추돌보다 복잡합니다. 블랙박스·CCTV·차량 파손 위치가 과실 분담의 결정적 자료가 됩니다.</p>',
    sections: [
      {
        title: 'Q. 다중추돌에서 내 과실은 어떻게 산정되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 정상 정차 후 추돌당한 경우 본인 과실은 0%에 가깝지만, 정차 위치·등화 등에 따라 일부 과실이 인정될 소지가 있습니다.</strong></p>\n<ul>\n<li><strong>정차 후 추돌</strong> — 1차 사고로 정차 중 뒤차에 추돌당하면 통상 본인 과실 0~20% 수준이 검토됩니다.</li>\n<li><strong>비상등 미점등</strong> — 정차 시 비상등을 켜지 않았으면 과실이 가산될 소지가 있습니다.</li>\n<li><strong>차로 위치</strong> — 1차로·갓길·터널 등 위치에 따라 안전조치 기준이 달라 과실 비율이 변동됩니다.</li>\n<li><strong>안전거리 미확보</strong> — 앞차와 충분한 거리를 두지 않은 채 1차 사고를 피하려다 불완전 정차했으면 일부 과실 인정 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 다중추돌에서는 "정차 시점이 정상이었는가" 가 본인 과실 산정의 첫 번째 기준입니다.</blockquote>',
      },
      {
        title: 'Q. 보험사 간 과실 다툼은 어떻게 진행되나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 차량별 1:1 충돌로 분리해 평가한 뒤 합산하는 방식이 일반적입니다.</strong></p>\n<ul>\n<li><strong>단계별 평가</strong> — A→B→C 추돌이면 A:B 충돌, B:C 충돌을 각각 평가 후 손해를 분담.</li>\n<li><strong>손해보험협회 분쟁조정</strong> — 보험사 간 과실 합의 안 될 때 무료 조정 신청, 2~3개월 소요.</li>\n<li><strong>금융감독원 분쟁조정</strong> — 본인이 보험사 처리에 불만 있으면 금감원(1332) 분쟁조정 신청.</li>\n<li><strong>민사소송</strong> — 조정 불성립 시 손해배상 청구 소송, 청구액 2,000만 원 이하면 소액심판 활용 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 다중추돌 과실 분쟁, AI로 정리해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">차량별 충돌 평가·분쟁조정·소송 절차를 AI가 상황별로 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 어떤 자료가 과실 분쟁에서 유리한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 블랙박스 영상·차량 파손 위치·도로 CCTV·EDR(사고기록장치) 4종이 핵심입니다.</strong></p>\n<ul>\n<li><strong>1. 블랙박스 영상</strong> — 1차 사고 인지 시점·정차 시점·뒤차 추돌 시점이 모두 기록되면 과실 0% 입증의 가장 강한 증거.</li>\n<li><strong>2. 차량 파손 위치</strong> — 뒤 범퍼 추돌이면 본인 과실 부정의 근거. 측면·앞 부분 파손이면 추가 분석 필요.</li>\n<li><strong>3. 도로 CCTV</strong> — 고속도로·국도 CCTV 영상은 도로공사·경찰청에 보존 요청.</li>\n<li><strong>4. EDR(사고기록장치)</strong> — 신차에는 사고 직전 5초 속도·제동 데이터가 기록되어 있어 정차 여부 입증에 활용 가능.</li>\n<li><strong>5. 목격자 진술</strong> — 동일 차로 다른 운전자·동승자 진술이 보조 증거.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사고 후 차량 수리 전에 파손 부위를 다각도로 촬영해두면 과실 산정이 끝난 뒤에도 다툴 소지가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 다중추돌 과실 분쟁 처리 흐름',
        content:
          '<p><strong style="color:#1e3a5f">자료 확보·보험사 협의·분쟁조정·소송 단계를 순서대로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 자료 확보 (사고 직후)</strong> — 블랙박스·차량 파손 사진·CCTV 보존 요청.</li>\n<li><strong>2단계 — 보험사 접수 (사고 당일~3일 내)</strong> — 본인 보험사·상대 보험사 양측 접수, 과실 0% 주장 자료 제출.</li>\n<li><strong>3단계 — 보험사 간 과실 협의 (2~4주)</strong> — 손해보험협회 과실기준 시뮬레이터 활용 협의.</li>\n<li><strong>4단계 — 분쟁조정 (1~3개월)</strong> — 합의 불성립 시 손해보험협회·금감원 무료 조정 신청.</li>\n<li><strong>5단계 — 민사소송 (필요 시)</strong> — 3년 소멸시효 안에 손해배상 청구 소송.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 다중추돌 처리 순서, 단계별로 정리해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 자동차손해배상 책임보험금 한도와 다수 차량 손해 합산',
        summary:
          '대법원 2024다238217 사건(대법원, 2025.03.13 선고)에서 법원은 자동차손해배상 보장법 시행령 제3조 제2항에 따른 책임보험금 한도액은 사상자 1인당 적용되며 다수 차량이 관여한 사고에서도 피해자별로 산정해야 한다고 판시했습니다.',
        takeaway: '다중추돌 사고에서도 책임보험금 한도는 피해자별로 보장되며, 가해 차량별 분담은 별도 산정합니다.',
      },
    ],
    faq: [
      {
        question: '내 보험사가 일부 과실을 인정하라고 합니다. 거부할 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 본인이 동의하지 않으면 보험사 임의 합의는 효력이 제한될 소지가 있어요. 분쟁조정·소송으로 다툴 수 있습니다.',
      },
      {
        question: '뒤차가 무보험이면 어떻게 되나요?',
        answer:
          '<strong>본인 자동차보험의 무보험차상해 특약이 있으면 우선 처리되고, 보험사가 가해자에게 구상권을 행사합니다.</strong> 특약 가입 여부를 확인해보세요.',
      },
      {
        question: '연쇄추돌에서 가운데 차량은 가해자인가요 피해자인가요?',
        answer:
          '<strong>둘 다일 수 있습니다.</strong> 앞차에는 가해자(추돌), 뒷차에는 피해자(추돌당함) 위치가 되어 별도로 평가됩니다.',
      },
      {
        question: '소액심판은 어디에 신청하나요?',
        answer:
          '<strong>청구액 3,000만 원 이하면 관할 지방법원 민사신청 창구에 직접 접수할 수 있습니다.</strong> 변호사 없이도 가능하고 처리기간은 통상 2~3개월입니다.',
      },
      {
        question: '과실 0% 인데 자기부담금을 내야 했어요. 돌려받을 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 대법원 2022다287284 판결에 따라 자기부담금 중 상대방 책임비율에 해당하는 금액은 상대방에게 직접 청구할 수 있는 길이 있어요.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '쌍방과실 비율 다툼 절차', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '교통사고 블랙박스 증거 활용', href: '/guide/traffic-accident/traffic-accident-blackbox-evidence' },
      { label: '손해보험 분쟁조정 신청 방법', href: '/guide/traffic-accident/traffic-accident-insurance-dispute' },
      { label: '저속 추돌 후유증 추가 청구', href: '/guide/traffic-accident/traffic-accident-low-speed-rear-end-aftereffect' },
      { label: '자전거 보행자 충돌 합의', href: '/guide/traffic-accident/traffic-accident-bicycle-pedestrian-settlement' },
    ],
  },
];
