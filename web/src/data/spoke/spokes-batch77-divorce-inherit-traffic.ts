import { SpokePage } from '../spoke-pages';

// batch77 divorce + inheritance + traffic-accident — 6개 (2026-05-25)
//
// 고유 존재 이유:
// 1. divorce-adultery-third-party-claim-track — 배우자 부정행위 상간자 손해배상. 제3자(상간자)를 상대로 한 불법행위 손해배상 청구 트랙.
// 2. divorce-domestic-violence-evidence-track — 배우자 폭력 이혼 위자료 증거 확보. 진단서·신고이력·CCTV 등 증거 확보 + 보호명령 병행 트랙.
// 3. divorce-pension-division-claim-track — 이혼 시 국민연금·공무원연금·퇴직연금 분할 청구 요건·절차 트랙.
// 4. divorce-business-asset-division-track — 배우자 사업체·법인 지분 재산분할 기여도 다툼 트랙.
// 5. inheritance-limited-acceptance-filing-track — 상속채무 불확실 시 한정승인 신고(3개월) 절차·서류 트랙.
// 6. traffic-accident-crosswalk-signal-pedestrian-track — 횡단보도 신호 보행 중 차량에 치임 — 신호·과실비율·12대 중과실 트랙.

export const spokesBatch77DivorceInheritTraffic: SpokePage[] = [
  // ─── 1 divorce-adultery-third-party-claim-track ───
  {
    domain: 'divorce',
    slug: 'divorce-adultery-third-party-claim-track',
    keyword: '배우자 부정행위 상간자 손해배상 청구',
    questionKeyword: '배우자가 바람을 피웠는데 상대방(상간자)에게도 위자료 손해배상을 청구할 수 있나요?',
    ctaKeyword: '상간자 손해배상 청구 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '상간자 손해배상 청구 — 5단계 위자료 다툼 트랙 | 로앤가이드',
      description:
        '배우자 부정행위 상대방에게 손해배상을 청구할 수 있는지, 증거는 무엇이 필요한지 막막하다면 5가지 청구 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배우자가 직장 동료와 오랫동안 부정행위를 해왔다는 사실을 알게 됐습니다. 배우자에게는 이혼과 위자료를 청구하려고 하는데, 상대방(상간자)에게도 별도로 손해배상을 청구할 수 있다는 말을 들었어요. 그런데 상간자가 유부녀·유부남이라는 사실을 몰랐다고 발뺌할까봐 걱정이고, 증거도 어디까지 수집해야 하는지 막막합니다. 이혼 소송과 상간자 청구를 동시에 진행할 수 있는지도 확인이 필요한 상황입니다." 대법원 2025므10716(대법원, 2026.01.29 선고)은 제3자가 부부의 일방과 부정행위를 함으로써 혼인의 본질에 해당하는 부부공동생활을 침해하거나 그 유지를 방해하고 그에 대한 배우자로서의 권리를 침해하여 배우자에게 정신적 고통을 가하는 행위도 원칙적으로 불법행위를 구성하며, 부부 일방과 제3자가 부담하는 불법행위책임은 공동불법행위책임으로서 부진정연대채무 관계에 있다고 판시한 사례입니다. 배우자 + 상간자 상대 부진정연대 손해배상 청구 + 증거 확보 결합은 5중 트랙으로 정리할 수 있습니다. 피해자라면 ① 증거 확보 ② 상간자 인적사항 특정 ③ 손해배상 청구 ④ 이혼 소송 병행 ⑤ 합의 또는 판결 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 배우자 부정행위 상간자 손해배상 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거확보·인적사항·청구·병행·합의 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 증거 확보</strong> — 카카오톡·SNS·사진·호텔 영수증 등 부정행위 정황.</li>\n<li><strong>② 상간자 인적사항 특정</strong> — 이름·주소 확인 (내용증명·소장 송달 필요).</li>\n<li><strong>③ 손해배상 청구</strong> — 상간자를 피고로 민사소송 또는 합의 요청.</li>\n<li><strong>④ 이혼 소송 병행</strong> — 배우자 상대 이혼·위자료 청구와 별도 진행.</li>\n<li><strong>⑤ 합의 또는 판결 집행</strong> — 합의금 수령 또는 확정판결 후 강제집행.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상간자 손해배상 청구는 이혼 소송과 별개로 진행할 수 있는 영역입니다. 다만 상간자가 상대방의 기혼 사실을 알았는지 여부(악의)가 중요 요건이므로, 정황 증거 확보가 청구 성패에 영향을 줄 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 민사법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거 보전·내용증명·소장 제출·변론·판결 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 확보 (즉시)</strong> — 카카오톡·통화기록·사진·호텔 영수증 등 정황 자료 저장.</li>\n<li><strong>2단계 — 상간자 인적사항 특정 (1~2주)</strong> — 이름·주소·연락처 확인.</li>\n<li><strong>3단계 — 내용증명 또는 합의 시도 (1개월)</strong> — 손해배상 청구 의사 통보.</li>\n<li><strong>4단계 — 민사소송 제기 (합의 불성립 시)</strong> — 손해배상 소장 제출 (이혼 청구 기간 내 병행 검토).</li>\n<li><strong>5단계 — 판결 확정 후 집행</strong> — 재산 압류·강제집행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·위자료 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">상간자 손해배상 청구 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·증거·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>카카오톡·SNS·이메일 등 부정행위 정황 자료</strong></li>\n<li><strong>호텔·숙박 영수증·사진·CCTV 자료</strong></li>\n<li><strong>상간자 인적사항 (이름·주소·연락처)</strong></li>\n<li><strong>목격자 진술서·제3자 증거</strong></li>\n<li><strong>통화기록·문자 캡처 자료</strong></li>\n<li><strong>정신적 고통 관련 의료·상담 자료 (위자료 산정 참고)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상간자 청구의 핵심은 부정행위 정황과 상간자의 악의(기혼 사실 인식) 입증입니다. 이혼 소송이 먼저 확정되면 상간자 청구 시 기혼 사실을 입증하는 데 도움이 될 수 있으니 소송 순서도 변호인과 함께 검토하는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>악의 여부</strong> — 상간자가 기혼 사실을 알았는지 여부.</li>\n<li><strong>증거 적법성</strong> — 불법 녹취·도촬 등 위법 수집 증거 배제 가능.</li>\n<li><strong>위자료 산정 범위</strong> — 정신적 고통의 정도·기간에 따라 사례별로 다르게 검토.</li>\n<li><strong>소멸시효</strong> — 불법행위를 안 날로부터 3년, 행위 시부터 10년.</li>\n<li><strong>이혼 소송과의 관계</strong> — 별도 민사소송 또는 이혼 소송 내 병합 청구 검토.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>관할 가정법원 민원실</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상간자 불법행위 손해배상 성립 및 부진정연대채무 영역',
        summary:
          '대법원 2025므10716(대법원, 2026.01.29 선고) 사건에서 법원은 제3자가 부부의 일방과 부정행위를 함으로써 혼인의 본질에 해당하는 부부공동생활을 침해하여 배우자에게 정신적 고통을 가하는 행위도 원칙적으로 불법행위를 구성하며, 부부 일방과 제3자의 책임은 공동불법행위책임으로서 부진정연대채무 관계에 있다고 판시했습니다. 상간자 손해배상 청구 시 이 법리가 적용되는 영역으로 검토할 수 있습니다.',
        takeaway:
          '배우자 부정행위 + 상간자 악의 결합 시 불법행위 손해배상 청구 영역 — 증거 확보 후 변호인 상담·청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '이혼하지 않아도 상간자에게 위자료를 청구할 수 있나요?',
        answer:
          '<strong>이혼 여부와 무관하게 상간자를 상대로 손해배상 청구를 검토할 수 있는 영역입니다.</strong> 다만 부정행위 정황 입증이 전제됩니다.',
      },
      {
        question: '상간자가 기혼 사실을 몰랐다고 하면 어떻게 되나요?',
        answer:
          '<strong>상간자의 악의 여부가 핵심 쟁점이 될 수 있는 영역입니다.</strong> 연락 기간·빈도·만남 정황 등을 통해 인식 가능성을 다투는 방향으로 검토할 수 있습니다.',
      },
      {
        question: '배우자와의 이혼 소송과 상간자 청구를 동시에 할 수 있나요?',
        answer:
          '<strong>이혼 소송과 상간자 민사 손해배상 소송은 별도로 동시 진행할 수 있는 영역입니다.</strong> 순서·병합 전략은 변호인과 함께 검토하는 것이 좋습니다.',
      },
      {
        question: '상간자 청구에서 위자료는 얼마나 받을 수 있나요?',
        answer:
          '<strong>정신적 고통의 정도·혼인 기간·부정행위 경위 등에 따라 사례별로 달리 검토되는 영역입니다.</strong> 일률적인 금액으로 단정하기 어렵습니다.',
      },
      {
        question: '상간자 청구의 소멸시효는 얼마인가요?',
        answer:
          '<strong>불법행위를 안 날로부터 3년, 행위 시부터 10년 내가 원칙입니다.</strong> 시효 기산점 산정은 변호인 상담 후 확인하는 것이 안전합니다.',
      },
    ],
    cta: { text: '재산분할·위자료 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '상간자 위자료 청구 절차', href: '/guide/divorce/divorce-affair-third-party-damages-track' },
      { label: '배우자 폭력 증거 확보', href: '/guide/divorce/divorce-domestic-violence-evidence-collection-track' },
      { label: '위자료 산정 기준', href: '/guide/divorce/divorce-alimony-calculation-standard' },
      { label: '재산분할 기준', href: '/guide/divorce/divorce-business-asset-division' },
      { label: '연금 분할 청구', href: '/guide/divorce/divorce-pension-division-method' },
    ],
  },

  // ─── 2 divorce-domestic-violence-evidence-track ───
  {
    domain: 'divorce',
    slug: 'divorce-domestic-violence-evidence-track',
    keyword: '배우자 폭력 이혼 위자료 증거 확보',
    questionKeyword: '배우자에게 지속적으로 폭행을 당해왔는데 이혼과 위자료 청구를 위한 증거를 어떻게 확보해야 하나요?',
    ctaKeyword: '가정폭력 이혼 증거 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '배우자 폭력 이혼 위자료 — 5단계 증거 확보 트랙 | 로앤가이드',
      description:
        '배우자 폭행으로 이혼과 위자료를 청구하려는데 증거 확보 방법이 막막하다면 진단서·신고이력·보호명령 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"결혼 후 7년간 배우자의 폭행과 언어폭력이 반복됐습니다. 참아왔지만 아이들에게도 피해가 가기 시작하면서 이혼을 결심했어요. 그런데 증거가 없다는 말에 막막하고, 병원에서 만든 진단서 몇 장만으로 충분한지, 과거 112 신고 이력을 어떻게 가져오는지도 모르겠습니다. 위자료를 청구하려면 어느 정도 입증이 필요한지도 걱정입니다." 민법 제840조 제3호는 \'배우자로부터 심히 부당한 대우를 받았을 때\'를 재판상 이혼 사유로 규정하고, 대법원 2020므14763(대법원, 2021.03.25 선고)은 혼인관계의 지속을 강요하는 것이 가혹하다고 여겨질 정도의 폭행이나 학대 또는 모욕을 받았을 경우에 해당한다고 판시했습니다. 피해자라면 ① 의료 증거 ② 신고이력 확보 ③ 보호명령 신청 ④ 이혼·위자료 청구 ⑤ 양육권·안전 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 배우자 폭력 이혼 위자료 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 의료·신고·보호명령·이혼·양육 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 의료 증거 확보</strong> — 진단서·의무기록·응급실 기록 등.</li>\n<li><strong>② 신고이력 확보</strong> — 경찰서 112 신고이력·사건사고 확인원.</li>\n<li><strong>③ 피해자 보호명령 신청</strong> — 접근금지·격리 명령 병행.</li>\n<li><strong>④ 이혼·위자료 청구</strong> — 협의이혼 또는 재판상 이혼 민법 제840조 제3·6호.</li>\n<li><strong>⑤ 양육권·양육비·안전 확보</strong> — 자녀 보호 환경 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 폭행·학대를 입증할 의료·신고 자료가 없어도 녹취·사진·증인 진술 등 정황 자료로 대체 검토할 수 있는 영역입니다. 입증 자료가 부족하다고 느껴질수록 변호인 상담 시점을 앞당기는 것이 좋습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 경찰·가정법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰·가정법원·여성긴급전화 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 의료 자료 확보 (즉시)</strong> — 응급실·병원 진단서·의무기록 발급.</li>\n<li><strong>2단계 — 신고이력·사건사고 확인원 발급 (경찰서)</strong> — 과거 112 신고이력 서면 확인.</li>\n<li><strong>3단계 — 피해자 보호명령 또는 임시조치 신청 (즉시~1주)</strong> — 접근금지·격리.</li>\n<li><strong>4단계 — 협의이혼 또는 재판이혼·위자료 청구 (가정법원)</strong> — 폭행·학대 사유 주장.</li>\n<li><strong>5단계 — 양육권·양육비 확정 (이혼 절차 내 병행)</strong>.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·위자료 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">배우자 폭력 이혼 위자료 증거 확보 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 의료·신고·정황 갈래입니다.</strong></p>\n<ul>\n<li><strong>병원 진단서·응급실 기록·의무기록</strong></li>\n<li><strong>112 신고이력·사건사고사실확인원</strong></li>\n<li><strong>폭행 현장 사진·CCTV 자료</strong></li>\n<li><strong>녹취·영상 자료 (적법하게 수집된 것)</strong></li>\n<li><strong>주변인·이웃·지인 진술서</strong></li>\n<li><strong>폭력 피해 일지 (날짜·장소·내용 기록)</strong></li>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진단서는 상해 발생 즉시 발급받을수록 증거 가치가 높습니다. 과거 진단서가 없는 경우 당시 의무기록 조회나 신고이력으로 보완할 수 있으니, 경찰서에서 사건사고사실확인원을 먼저 발급받는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>폭행 정도 다툼</strong> — 가혹하다고 여겨질 정도인지 여부.</li>\n<li><strong>쌍방 폭행 주장</strong> — 상대방이 정당방위·쌍방 과실을 주장하는 경우.</li>\n<li><strong>위자료 산정</strong> — 폭행 기간·횟수·정도에 따라 사례별로 달리 검토.</li>\n<li><strong>보호명령 위반</strong> — 위반 시 형사처벌 대상.</li>\n<li><strong>양육권 영향</strong> — 폭행 사실이 양육 적합성 평가에 반영될 수 있는 영역.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>가정폭력 피해자 지원센터 (관할 지역)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 민법 제840조 제3호 폭행·학대 이혼 사유 평가 영역',
        summary:
          '대법원 2020므14763(대법원, 2021.03.25 선고) 사건에서 법원은 민법 제840조 제3호의 이혼 사유인 "배우자로부터 심히 부당한 대우를 받았을 때"는 혼인관계의 지속을 강요하는 것이 가혹하다고 여겨질 정도의 폭행이나 학대 또는 모욕을 받았을 경우를 말한다고 판시했습니다. 지속적 폭행으로 이혼과 위자료를 청구하는 사안에서 같은 기준이 검토될 수 있는 영역입니다.',
        takeaway:
          '배우자 폭행 + 지속 + 혼인 지속 강요 가혹 결합 시 이혼 사유 평가 영역 — 진단서·신고이력 확보 후 가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '진단서가 없어도 폭행으로 이혼·위자료 청구가 가능한가요?',
        answer:
          '<strong>진단서가 없어도 신고이력·녹취·증인 등 정황 자료로 검토할 수 있는 영역입니다.</strong> 다만 입증력이 달라질 수 있으니 변호인 상담 후 전략을 정하세요.',
      },
      {
        question: '112 신고를 한 적이 없는데 이력을 얻을 수 있나요?',
        answer:
          '<strong>신고이력은 관할 경찰서에서 사건사고사실확인원으로 확인할 수 있습니다.</strong> 과거 신고가 있으면 서면으로 발급 가능합니다.',
      },
      {
        question: '배우자가 쌍방 폭행이라고 주장하면 어떻게 되나요?',
        answer:
          '<strong>쌍방 폭행 주장은 폭행 정도·선제 여부·횟수 등을 종합해 평가되는 영역입니다.</strong> 피해 자료를 최대한 확보해두는 것이 중요합니다.',
      },
      {
        question: '이혼 전에 배우자와 같은 집에 있어도 보호명령을 받을 수 있나요?',
        answer:
          '<strong>피해자 보호명령은 이혼 여부와 무관하게 신청할 수 있는 영역입니다.</strong> 접근금지·격리 명령으로 즉시 신변 보호를 검토해볼 수 있습니다.',
      },
      {
        question: '폭행 이혼 시 위자료는 얼마나 받을 수 있나요?',
        answer:
          '<strong>폭행 기간·횟수·정도에 따라 사례별로 달리 검토되는 영역입니다.</strong> 단정적인 금액보다는 변호인 상담 후 사안에 맞는 범위를 확인하세요.',
      },
    ],
    cta: { text: '재산분할·위자료 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '가정폭력 이혼 증거 확보', href: '/guide/divorce/divorce-domestic-violence-evidence-collection-track' },
      { label: '상간자 손해배상 청구', href: '/guide/divorce/divorce-affair-third-party-damages-track' },
      { label: '위자료 산정 기준', href: '/guide/divorce/divorce-alimony-calculation-standard' },
      { label: '연금 분할 청구', href: '/guide/divorce/divorce-pension-division-method' },
      { label: '재산분할 사업체 지분', href: '/guide/divorce/divorce-business-asset-division' },
    ],
  },

  // ─── 3 divorce-pension-division-claim-track ───
  {
    domain: 'divorce',
    slug: 'divorce-pension-division-claim-track',
    keyword: '이혼 연금 분할 청구 국민연금 공무원연금',
    questionKeyword: '이혼할 때 배우자의 국민연금이나 공무원연금도 나눌 수 있나요? 퇴직연금은 어떻게 되나요?',
    ctaKeyword: '이혼 연금 분할 청구 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '이혼 연금 분할 청구 — 5단계 국민·공무원·퇴직연금 | 로앤가이드',
      description:
        '이혼 시 배우자의 국민연금·공무원연금·퇴직연금을 어떻게 나눌 수 있는지 막막하다면 연금 분할 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"20년 결혼 생활 끝에 이혼을 준비하고 있습니다. 배우자가 공무원으로 퇴직해 현재 공무원연금을 수령 중이고, 국민연금도 가입 이력이 있어요. 제가 전업주부로 있는 동안 배우자의 연금이 쌓였는데, 이혼하면 그 연금도 나눌 수 있는지 모르겠습니다. 재산분할과 연금 분할이 같은 건지 다른 건지도 헷갈리는 상황입니다." 대법원 2012므2888(대법원, 2014.07.16 선고)은 이혼소송의 사실심 변론종결 당시 배우자가 공무원 퇴직연금을 실제로 수령하고 있는 경우 이미 발생한 퇴직연금수급권이 재산분할 대상에 포함되며, 연금수급권자인 배우자가 매월 수령할 퇴직연금 중 일정 비율을 상대방에게 정기적으로 지급하도록 명하는 방식도 가능하다고 판시한 사례입니다. 국민연금 분할은 혼인 기간 5년 이상이면 별도 제도로 청구할 수 있는 영역입니다. 당사자라면 ① 연금 종류 파악 ② 혼인 기간 확인 ③ 분할 방식 결정 ④ 청구 절차 ⑤ 기한 내 신청 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 이혼 연금 분할 청구 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 연금파악·혼인기간·분할방식·청구·기한 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 연금 종류 파악</strong> — 국민연금·공무원연금·군인연금·사학연금·퇴직연금 구분.</li>\n<li><strong>② 혼인 기간 확인</strong> — 국민연금 분할: 혼인 기간 5년 이상 필요.</li>\n<li><strong>③ 분할 방식 결정</strong> — 연금 분할 청구 vs 재산분할 내 연금 반영.</li>\n<li><strong>④ 청구 절차</strong> — 국민연금은 공단, 공무원연금은 재판상 청구 병행.</li>\n<li><strong>⑤ 기한 내 신청</strong> — 국민연금 분할: 이혼 후 3년 내 / 재산분할: 이혼 확정 2년 내.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 국민연금 분할연금과 재산분할 내 연금 반영은 별도 제도로 중복 청구가 가능한 영역입니다. 공무원연금은 법원의 재판상 재산분할 명령을 통해 정기 지급 방식으로 반영되는 사례가 있으니 혼인 기간과 연금 종류를 먼저 정리해두세요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 국민연금공단·가정법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 국민연금공단·가정법원·퇴직연금기관 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 연금 가입·수령 내역 조회 (즉시)</strong> — 국민연금공단 1355·각 기관 조회.</li>\n<li><strong>2단계 — 혼인 기간·연금 납입 기간 확인 (1~2주)</strong>.</li>\n<li><strong>3단계 — 이혼 소송 또는 협의이혼 절차 진행</strong>.</li>\n<li><strong>4단계 — 재산분할 내 연금 반영 또는 별도 청구 결정</strong> — 국민연금 분할연금은 이혼 후 국민연금공단에 별도 신청.</li>\n<li><strong>5단계 — 기한 내 청구 완료</strong> — 국민연금 분할연금 이혼 후 3년 내 / 재산분할 이혼 확정 2년 내.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·위자료 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">이혼 연금 분할 청구 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 혼인·연금·재산 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>혼인 기간 입증 자료 (주민등록등본·혼인신고서)</strong></li>\n<li><strong>배우자 국민연금 가입·납입 이력 (공단 조회)</strong></li>\n<li><strong>공무원연금·군인연금·사학연금 수령 확인서</strong></li>\n<li><strong>퇴직연금(IRP·DC·DB) 잔액·수령 자료</strong></li>\n<li><strong>재산분할 관련 부동산·금융 자료</strong></li>\n<li><strong>본인 연금 가입·납입 이력 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 국민연금 분할연금은 이혼 후 본인이 수급 연령(만 60세 이상 등)에 도달해야 수령 가능한 영역입니다. 재산분할 내 공무원연금 반영 방식은 별도 법원 결정이 필요하니 변호인 상담 시 구체적 절차를 확인하세요.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>혼인 기간 산정</strong> — 실제 혼인 기간 vs 동거 기간 구분.</li>\n<li><strong>연금 종류별 분할 방식 차이</strong> — 국민연금(분할연금)·공무원연금(재판분할)·퇴직연금(재산분할 반영).</li>\n<li><strong>수급 시기 차이</strong> — 분할연금 수령은 본인 수급 연령 도달 후.</li>\n<li><strong>청구 기한 도과</strong> — 국민연금 3년·재산분할 2년.</li>\n<li><strong>특유재산 여부</strong> — 혼인 전 납입분의 분할 제외 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민연금공단 1355</strong></li>\n<li><strong>공무원연금공단 1588-4321</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 이혼 시 공무원 퇴직연금 재산분할 대상 및 정기 지급 방식 영역',
        summary:
          '대법원 2012므2888(대법원, 2014.07.16 선고) 사건에서 법원은 이혼소송 사실심 변론종결 당시 배우자가 공무원 퇴직연금을 실제로 수령하고 있는 경우 이미 발생한 퇴직연금수급권은 재산분할 대상에 포함되며, 연금수급권자인 배우자가 매월 수령하는 퇴직연금 중 일정 비율을 상대방에게 정기적으로 지급하도록 명하는 방식도 가능하다고 판시했습니다. 이혼 시 연금 분할 청구 사안에서 이 법리가 적용되는 영역으로 검토할 수 있습니다.',
        takeaway:
          '이혼 + 배우자 공무원연금 수령 중 결합 시 재산분할 대상 포함 및 정기 지급 방식 평가 영역 — 혼인 기간 확인 후 변호인 상담·청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '국민연금 분할연금은 혼인 기간이 얼마나 돼야 받을 수 있나요?',
        answer:
          '<strong>혼인 기간 5년 이상이어야 국민연금 분할연금을 검토할 수 있는 영역입니다.</strong> 이혼 후 3년 내에 공단에 별도로 신청해야 합니다.',
      },
      {
        question: '배우자의 공무원연금은 어떻게 나눌 수 있나요?',
        answer:
          '<strong>법원의 재산분할 명령을 통해 정기 지급 방식으로 반영되는 사례가 있습니다.</strong> 이혼 소송 내에서 함께 청구하는 것을 검토할 수 있습니다.',
      },
      {
        question: '연금 분할과 재산분할은 따로 청구해야 하나요?',
        answer:
          '<strong>국민연금 분할연금은 이혼 후 공단에 별도 신청하는 제도이고, 재산분할은 이혼 소송 내 또는 이혼 확정 2년 내 별도 청구합니다.</strong>',
      },
      {
        question: '혼인 전 납입한 연금도 나눠야 하나요?',
        answer:
          '<strong>혼인 전 납입분은 특유재산으로 분할에서 제외되는 사례가 있습니다.</strong> 혼인 기간 중 납입분만 분할 대상으로 검토하는 것이 원칙입니다.',
      },
      {
        question: '퇴직연금(IRP·DC·DB)도 재산분할 대상인가요?',
        answer:
          '<strong>혼인 중 형성된 퇴직연금 적립분은 재산분할 대상이 될 수 있는 영역입니다.</strong> 잔액 자료와 납입 기간을 정리해두는 것이 좋습니다.',
      },
    ],
    cta: { text: '재산분할·위자료 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '연금 분할 청구 방법', href: '/guide/divorce/divorce-pension-division-method' },
      { label: '재산분할 사업체 지분', href: '/guide/divorce/divorce-business-asset-division' },
      { label: '위자료 산정 기준', href: '/guide/divorce/divorce-alimony-calculation-standard' },
      { label: '상간자 손해배상 청구', href: '/guide/divorce/divorce-affair-third-party-damages-track' },
      { label: '가정폭력 이혼 증거', href: '/guide/divorce/divorce-domestic-violence-evidence-collection-track' },
    ],
  },

  // ─── 4 divorce-business-asset-division-track ───
  {
    domain: 'divorce',
    slug: 'divorce-business-asset-division-track',
    keyword: '이혼 사업체 법인 지분 재산분할',
    questionKeyword: '이혼할 때 배우자 명의의 사업체나 법인 지분도 재산분할 대상이 되나요? 기여도는 어떻게 다투나요?',
    ctaKeyword: '이혼 사업체 재산분할 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '이혼 사업체·법인 지분 재산분할 — 5단계 기여도 다툼 | 로앤가이드',
      description:
        '이혼 시 배우자 사업체나 법인 지분이 재산분할 대상인지, 기여도를 어떻게 다퉈야 하는지 막막하다면 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배우자가 결혼 후 사업체를 운영해 법인을 세우고 지분 전부를 보유하고 있습니다. 저는 사업 초기부터 영업·사무·경리를 도맡아 기여해왔는데, 이혼 시 그 법인 지분도 재산분할을 받을 수 있는지 모르겠어요. 배우자는 \'내 사업이니까 내 재산\'이라고 하는데, 법인 지분이 재산분할 대상인지, 기여도를 어디서 어떻게 인정받는지 막막한 상황입니다." 대법원 2010므4071(대법원, 2013.06.20 선고)은 이혼 당사자의 소극재산 총액이 적극재산 총액을 초과해 재산분할 결과가 채무 분담을 정하는 것이 되는 경우에도 재산분할 청구를 받아들일 수 있다고 판시하며, 재산의 형성·유지 기여도 평가 원칙을 확인한 사례입니다. 민법 제839조의2는 혼인 중 쌍방의 협력으로 형성한 재산을 분할 대상으로 규정하고, 사업 협력도 협력의 한 형태로 평가될 수 있는 영역입니다. 당사자라면 ① 사업체·법인 지분 파악 ② 기여 정황 정리 ③ 재산 평가 ④ 분할 청구 ⑤ 은닉 자산 추적 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 이혼 사업체 법인 지분 재산분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 지분파악·기여정리·평가·분할·은닉추적 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사업체·법인 지분 파악</strong> — 법인등기부·주주명부·정관 확인.</li>\n<li><strong>② 기여 정황 정리</strong> — 영업·경리·운영 기여 사실 자료 수집.</li>\n<li><strong>③ 재산 평가</strong> — 법인 시가·영업권·순자산 평가 검토.</li>\n<li><strong>④ 재산분할 청구</strong> — 가정법원에 사업체 지분 분할 또는 상당 금전 지급 청구.</li>\n<li><strong>⑤ 은닉 자산 추적</strong> — 배우자가 지분·재산을 이전했을 경우 사해행위 취소 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 법인 지분은 명의와 무관하게 혼인 중 공동 협력으로 형성됐다면 재산분할 대상이 될 수 있는 영역입니다. 다만 법인 재산과 개인 재산의 경계, 기여도 입증이 핵심 쟁점이 되는 경우가 많습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 변호인·가정법원·회계 전문가 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 법인·사업체 등기·재무 자료 확보 (즉시)</strong> — 법인등기부등본·주주명부·재무제표.</li>\n<li><strong>2단계 — 기여 자료 정리 (1~2주)</strong> — 영업·경리·운영 참여 정황.</li>\n<li><strong>3단계 — 변호인 상담·재산 평가 (1개월)</strong> — 법인 시가·영업권 산정.</li>\n<li><strong>4단계 — 가정법원 재산분할 청구 (이혼 확정 2년 내)</strong>.</li>\n<li><strong>5단계 — 자산 이전·은닉 시 가압류·사해행위 취소 검토</strong>.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·위자료 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">이혼 사업체 법인 지분 재산분할 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 법인·기여·재산 갈래입니다.</strong></p>\n<ul>\n<li><strong>법인등기부등본·주주명부·정관</strong></li>\n<li><strong>재무제표·손익계산서·자산 현황</strong></li>\n<li><strong>본인의 사업 기여 자료 (영업·경리·운영 증거)</strong></li>\n<li><strong>혼인 기간 중 사업 성장 자료 (매출·자산 변동)</strong></li>\n<li><strong>법인 계좌·거래 자료 (은닉 여부 확인용)</strong></li>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>기타 재산 목록 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 법인 가치 평가는 회계 전문가와 협력해 순자산·영업권 등을 산정하는 것이 중요합니다. 배우자가 이혼 전 지분을 타인에게 이전했다면 사해행위 취소를 함께 검토하는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>기여도 다툼</strong> — 본인의 사업 기여가 통상적 배우자 역할을 넘는지 여부.</li>\n<li><strong>법인 재산과 개인 재산 경계</strong> — 법인 자산이 개인 재산분할 대상인지 여부.</li>\n<li><strong>재산 은닉·이전</strong> — 이혼 전 지분 이전·가족 명의 분산.</li>\n<li><strong>기업 가치 평가</strong> — 시가·영업권·미래 수익 반영 방식 다툼.</li>\n<li><strong>청구 기한</strong> — 이혼 확정일로부터 2년 내.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>관할 가정법원 민원실</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 이혼 재산분할 소극재산 초과 시도 청구 가능 영역',
        summary:
          '대법원 2010므4071(대법원, 2013.06.20 선고) 사건에서 법원은 이혼 당사자의 소극재산 총액이 적극재산 총액을 초과해 재산분할 결과가 채무의 분담을 정하는 것이 되는 경우에도 재산분할 청구를 받아들일 수 있다고 판시했습니다. 사업체·법인 지분이 얽힌 재산분할에서 기여도를 다투는 사안에서도 이 법리가 참고될 수 있는 영역입니다.',
        takeaway:
          '이혼 + 배우자 사업체·법인 지분 결합 시 혼인 중 기여도·법인 가치 평가 영역 — 법인 자료 확보 후 변호인 상담·재산분할 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '배우자 명의 법인 지분도 재산분할 대상이 되나요?',
        answer:
          '<strong>혼인 중 공동 협력으로 형성된 법인 지분은 재산분할 대상이 될 수 있는 영역입니다.</strong> 다만 기여도 입증이 핵심 쟁점입니다.',
      },
      {
        question: '제가 사업을 도운 것이 기여도로 인정받을 수 있나요?',
        answer:
          '<strong>영업·경리·운영 등 실질적인 기여가 있으면 일반적 배우자 역할을 넘는 특별 기여로 평가될 수 있는 영역입니다.</strong> 기여 자료 정리가 중요합니다.',
      },
      {
        question: '배우자가 이혼 전 지분을 다른 사람에게 넘겼는데 어떻게 하나요?',
        answer:
          '<strong>사해행위 취소 소송으로 이전 지분 회복을 검토할 수 있는 영역입니다.</strong> 변호인과 함께 즉시 가압류를 검토하는 것이 좋습니다.',
      },
      {
        question: '법인 가치는 어떻게 평가하나요?',
        answer:
          '<strong>순자산·영업권·미래 수익 등을 종합해 회계 전문가와 협력해 산정하는 것이 검토되는 방식입니다.</strong> 법원 감정도 활용할 수 있습니다.',
      },
      {
        question: '재산분할 청구는 이혼 후에도 할 수 있나요?',
        answer:
          '<strong>이혼 확정일로부터 2년 내에 별도로 재산분할 청구를 검토할 수 있는 영역입니다.</strong> 기간 경과 전 청구가 안전합니다.',
      },
    ],
    cta: { text: '재산분할·위자료 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 사업체 지분', href: '/guide/divorce/divorce-business-asset-division' },
      { label: '연금 분할 청구', href: '/guide/divorce/divorce-pension-division-method' },
      { label: '위자료 산정 기준', href: '/guide/divorce/divorce-alimony-calculation-standard' },
      { label: '가정폭력 이혼 증거', href: '/guide/divorce/divorce-domestic-violence-evidence-collection-track' },
      { label: '상간자 손해배상 청구', href: '/guide/divorce/divorce-affair-third-party-damages-track' },
    ],
  },

  // ─── 5 inheritance-limited-acceptance-filing-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-limited-acceptance-filing-track',
    keyword: '한정승인 신고 절차 상속채무 불확실',
    questionKeyword: '부모님이 돌아가셨는데 채무가 얼마나 있는지 불확실해요. 한정승인을 어떻게 신고하나요?',
    ctaKeyword: '한정승인 신고 절차 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '한정승인 신고 절차 — 5단계 상속채무 불확실 대응 | 로앤가이드',
      description:
        '부모님 사망 후 상속채무가 얼마인지 불확실해 한정승인을 신고하려는데 절차와 서류가 막막하다면 3개월 내 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 갑자기 돌아가셔서 상속을 준비하고 있는데, 빚이 재산보다 많을 수 있다는 말을 들었습니다. 정확한 채무 규모를 파악하기 전까지는 섣불리 재산을 상속받고 싶지 않아요. 주변에서 한정승인을 하면 채무를 받은 재산 범위 안에서만 갚으면 된다고 하는데, 신고 기간이 3개월이라 시간이 촉박하고 서류도 어떻게 준비해야 할지 막막합니다." 민법 제1019조는 상속인이 상속 개시를 안 날로부터 3개월 내에 한정승인 또는 상속포기를 할 수 있도록 규정하고, 한정승인을 하면 상속재산의 한도 내에서만 피상속인의 채무를 변제할 의무를 지는 영역입니다. 대법원 2019다29853(대법원, 2022.07.28 선고)은 민법 제1026조 제3호의 법정단순승인 사유 중 \'고의로 재산목록에 기입하지 아니한 때\'에 해당하려면 상속인이 상속채권자를 사해할 의사가 있을 것을 필요로 한다고 판시했습니다. 당사자라면 ① 채무 조회 ② 서류 준비 ③ 가정법원 신고 ④ 채권자 통지 ⑤ 청산 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 한정승인 신고 절차 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 채무조회·서류준비·신고·통지·청산 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상속채무 조회</strong> — 안심상속 원스톱 서비스로 채무·재산 파악.</li>\n<li><strong>② 서류 준비</strong> — 피상속인 사망 자료·가족관계증명서·재산목록 작성.</li>\n<li><strong>③ 가정법원 한정승인 신고</strong> — 상속 개시 안 날로부터 3개월 내 필수.</li>\n<li><strong>④ 채권자 공고·통지</strong> — 한정승인 확정 후 2개월간 채권 신고 공고.</li>\n<li><strong>⑤ 상속재산 범위 내 청산</strong> — 채권 신고된 순서·우선순위에 따라 변제.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 한정승인은 \'상속 개시를 안 날로부터 3개월\' 내에 신고해야 하는 영역입니다. 이미 상속재산을 처분했거나 재산목록에 고의로 누락한 경우 단순승인으로 간주될 수 있으니 신고 전 재산목록 작성을 정확히 하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 행정복지센터·가정법원·채권자 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 안심상속 원스톱 서비스 채무·재산 조회 (사망신고 시)</strong> — 관할 행정복지센터 신청.</li>\n<li><strong>2단계 — 서류 준비 및 재산목록 작성 (3개월 내)</strong> — 피상속인 기본증명서·말소 주민등록초본·가족관계증명서.</li>\n<li><strong>3단계 — 가정법원 한정승인 신고서 제출 (3개월 내 필수)</strong> — 피상속인 주소지 관할 가정법원.</li>\n<li><strong>4단계 — 한정승인 심판 확정 후 채권자 공고 (2개월)</strong> — 관보 또는 일간신문 공고.</li>\n<li><strong>5단계 — 채권 신고된 금액·우선순위에 따라 상속재산 범위 내 변제</strong>.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">한정승인 신고 절차 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·채무·재산 갈래입니다.</strong></p>\n<ul>\n<li><strong>피상속인 기본증명서·말소된 주민등록초본</strong></li>\n<li><strong>가족관계증명서 (상속인 전원)</strong></li>\n<li><strong>안심상속 원스톱 서비스 채무·재산 조회 결과</strong></li>\n<li><strong>상속재산 목록 (부동산·금융·채무 포함)</strong></li>\n<li><strong>한정승인 신고서 (법원 양식)</strong></li>\n<li><strong>신고인(상속인) 신분증·도장</strong></li>\n<li><strong>채권자 독촉장·채무 내역 자료 (확보된 경우)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 재산목록 작성 시 알고 있는 모든 재산과 채무를 빠짐없이 기재해야 합니다. 고의로 누락하면 법정단순승인으로 간주될 수 있는 영역이라 정확한 기재가 핵심입니다. 채무가 불확실하다면 상속포기보다 한정승인이 안전한 선택이 되는 경우가 많습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>3개월 기간 도과</strong> — 특별한정승인(민법 제1019조 제3항) 별도 검토 가능.</li>\n<li><strong>재산목록 누락</strong> — 고의 누락 시 법정단순승인 간주 위험.</li>\n<li><strong>상속재산 처분</strong> — 신고 전 재산 처분은 단순승인 간주 가능.</li>\n<li><strong>채권자 공고 누락</strong> — 공고 없으면 추후 채권 추가 청구 위험.</li>\n<li><strong>한정승인 vs 상속포기 선택</strong> — 후순위 상속인 연쇄 승계 여부 고려.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 행정복지센터 (안심상속 원스톱 서비스)</strong></li>\n<li><strong>가정법원 민원실 (신고서 양식 안내)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 한정승인 후 재산목록 고의 누락 법정단순승인 요건 영역',
        summary:
          '대법원 2019다29853(대법원, 2022.07.28 선고) 사건에서 법원은 민법 제1026조 제3호의 법정단순승인 사유 중 "고의로 재산목록에 기입하지 아니한 때"에 해당하려면 상속인이 상속재산을 은닉하여 상속채권자를 사해할 의사가 있을 것을 필요로 하며, 그 증명책임은 이를 주장하는 측에 있다고 판시했습니다. 한정승인 신고 후 재산목록 작성을 다투는 사안에서 이 법리가 검토될 수 있는 영역입니다.',
        takeaway:
          '상속채무 불확실 + 3개월 내 한정승인 신고 + 재산목록 정확 기재 결합 시 법정단순승인 간주 방지 영역 — 변호인 상담·신고서 작성 검토 권장.',
      },
    ],
    faq: [
      {
        question: '한정승인을 하면 부모님의 빚을 다 갚아야 하나요?',
        answer:
          '<strong>한정승인을 하면 받은 상속재산의 범위 내에서만 채무를 변제하면 되는 영역입니다.</strong> 재산보다 빚이 많아도 본인 고유재산으로 갚을 의무는 없습니다.',
      },
      {
        question: '한정승인 신고 기간 3개월이 지났는데 어떻게 하나요?',
        answer:
          '<strong>특별한정승인(민법 제1019조 제3항)을 별도로 검토할 수 있는 영역입니다.</strong> 채무가 재산을 초과하는 사실을 뒤늦게 안 경우가 해당될 수 있습니다.',
      },
      {
        question: '상속포기와 한정승인 중 어느 게 유리한가요?',
        answer:
          '<strong>채무 규모가 불확실하다면 한정승인이 안전한 선택이 되는 경우가 많습니다.</strong> 상속포기는 후순위 상속인에게 채무가 이어질 수 있어 가족 전체 상황을 함께 고려하는 것이 좋습니다.',
      },
      {
        question: '재산목록에 무엇을 적어야 하나요?',
        answer:
          '<strong>알고 있는 모든 적극재산(부동산·예금·차량)과 소극재산(대출·채무)을 빠짐없이 기재해야 합니다.</strong> 고의 누락은 법정단순승인으로 간주될 위험이 있습니다.',
      },
      {
        question: '한정승인 확정 후 채권자에게 어떻게 알려야 하나요?',
        answer:
          '<strong>한정승인 심판 확정 후 2개월간 관보 또는 일간신문에 채권 신고 공고를 해야 하는 영역입니다.</strong> 공고를 누락하면 추후 채권 추가 청구 위험이 있으니 법원 안내에 따라 진행하세요.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '한정승인 준비 서류', href: '/guide/inheritance/inheritance-limited-acceptance-preparation' },
      { label: '한정승인 vs 상속포기 비교', href: '/guide/inheritance/inheritance-limited-acceptance-vs-renunciation-choice' },
      { label: '상속포기 절차', href: '/guide/inheritance/inheritance-renunciation-process' },
      { label: '상속채무 불확실 시 결정', href: '/guide/inheritance/inheritance-debt-vs-asset-unclear-decision-track' },
      { label: '특별한정승인 3개월 기산', href: '/guide/inheritance/inheritance-special-limited-approval-3months-start' },
    ],
  },

  // ─── 6 traffic-accident-crosswalk-signal-pedestrian-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-crosswalk-signal-pedestrian-track',
    keyword: '횡단보도 신호 보행 중 차량 사고 과실비율',
    questionKeyword: '횡단보도 신호가 녹색일 때 건너다가 차에 치였는데 제 과실이 있다고 하는 게 맞나요?',
    ctaKeyword: '횡단보도 보행자 사고 과실 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '횡단보도 신호 보행자 사고 과실비율 — 5단계 대응 | 로앤가이드',
      description:
        '횡단보도 신호 녹색에 건너다 차에 치였는데 과실 다툼이 생겨 막막하다면 신호·과실비율·12대 중과실 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"횡단보도 신호가 녹색으로 바뀌자마자 건너기 시작했는데 우회전하던 차량에 치여 다쳤습니다. 그런데 보험사에서 신호 점멸 상태였다거나 제 과실도 있다는 말을 해 당황스럽습니다. 신호 보행 중 사고인데도 과실이 나뉘는 건지, 12대 중과실인지, 치료비와 합의금은 어떻게 받아야 하는지 막막한 상황입니다." 도로교통법 제27조는 차량 운전자에게 횡단보도를 횡단하는 보행자를 보호할 의무를 규정하고, 대법원 2001도2939(대법원, 2001.10.09 선고)은 보행신호등 녹색 점멸 중 횡단보도에 진입한 보행자가 적색으로 변경된 후 차량에 충격된 경우 횡단보도상 사고에 해당하지 않는다고 판시하며 신호 상태에 따른 과실 평가 기준을 정리한 사례입니다. 교통사고처리특례법 제3조는 횡단보도 보행자 보호 의무 위반을 12대 중과실로 규정하고 있는 영역입니다. 피해자라면 ① 신호 상태 증거 확보 ② 부상 증거 ③ 12대 중과실 여부 확인 ④ 보험 청구 ⑤ 합의 또는 소송 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 횡단보도 신호 보행자 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신호확인·부상증거·중과실·보험·합의 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 신호 상태 증거 확보</strong> — CCTV·블랙박스·목격자로 녹색 점등 여부 확인.</li>\n<li><strong>② 부상 증거 수집</strong> — 응급실 진단서·진료 기록·상해 사진.</li>\n<li><strong>③ 12대 중과실 여부 확인</strong> — 횡단보도 보행자 보호 의무 위반 해당 여부.</li>\n<li><strong>④ 보험 청구</strong> — 가해 차량 대인 보험·정부 보장 사업 청구.</li>\n<li><strong>⑤ 합의 또는 소송</strong> — 과실비율 다툼 시 손해배상 소송 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 녹색 신호 중 횡단보도를 건너다 차량에 치인 경우 차량 운전자의 보행자 보호 의무 위반으로 과실이 높게 평가되는 사례가 있는 영역입니다. 신호 상태 확인이 과실비율 다툼의 출발점이니 CCTV·블랙박스 자료를 즉시 확보하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 경찰·보험·법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경찰·보험사·손해보험협회·법원 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신호·사고 증거 확보 (사고 직후)</strong> — CCTV·블랙박스·목격자·현장 사진.</li>\n<li><strong>2단계 — 응급 치료 및 진단서 발급</strong> — 부상 즉시 병원 방문·진단서 확보.</li>\n<li><strong>3단계 — 경찰 교통사고 접수 및 가해자 보험 확인</strong>.</li>\n<li><strong>4단계 — 보험사 대인 청구·과실비율 협의 (불복 시 손해보험협회 분쟁 신청)</strong>.</li>\n<li><strong>5단계 — 합의 거부 또는 과실 다툼 시 민사 손해배상 소송 검토</strong>.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">횡단보도 보행자 사고 과실비율 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신호·부상·보험 갈래입니다.</strong></p>\n<ul>\n<li><strong>현장 CCTV·블랙박스 영상 자료 (신호 상태 확인용)</strong></li>\n<li><strong>사고 현장 사진·신호등 위치 사진</strong></li>\n<li><strong>목격자 진술서·연락처</strong></li>\n<li><strong>응급실·병원 진단서·의무기록</strong></li>\n<li><strong>경찰 교통사고 사실 확인원</strong></li>\n<li><strong>가해 차량 보험 정보 (보험사·증권번호)</strong></li>\n<li><strong>치료비 영수증·향후 치료 계획서 (후유증 대비)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사고 직후 CCTV·블랙박스 영상을 먼저 확보해두는 것이 신호 상태 입증의 핵심입니다. 보험사가 제시하는 과실비율에 동의하기 전, 손해보험협회 분쟁조정이나 변호인 상담을 먼저 검토하는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>신호 상태 다툼</strong> — 녹색 점등 vs 점멸 상태 여부.</li>\n<li><strong>보행자 과실 주장</strong> — 우측 통행·야간·주의 부족 여부.</li>\n<li><strong>12대 중과실 해당 여부</strong> — 형사처벌·보험 처리 방식에 영향.</li>\n<li><strong>후유증 추가 청구</strong> — 합의 후 추가 후유증 발생 시 청구 가능 여부.</li>\n<li><strong>과실비율 이의</strong> — 보험사 제시 비율에 불복 시 분쟁조정 신청.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>손해보험협회 분쟁조정위원회 02-3702-8600</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>교통사고 피해자 지원센터 (관할 지역)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보행신호 점멸 상태 횡단보도 진입 사고 과실 평가 영역',
        summary:
          '대법원 2001도2939(대법원, 2001.10.09 선고) 사건에서 법원은 보행신호등의 녹색등화가 점멸되고 있는 상태에서 횡단보도에 진입한 보행자가 보행신호등이 적색등화로 변경된 후 차량신호등의 녹색등화에 따라 진행하던 차량에 충격된 경우 횡단보도상의 사고에 해당하지 않는다고 판시했습니다. 신호 상태에 따른 과실비율 다툼 사안에서 이 법리가 검토될 수 있는 영역입니다.',
        takeaway:
          '횡단보도 + 신호 상태 + 보행자 진입 시점 결합 시 과실비율 평가 영역 — 신호·CCTV 증거 확보 후 변호인 상담·보험 분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '녹색 신호에 건너다 차에 치였는데 제 과실도 있나요?',
        answer:
          '<strong>녹색 신호 중 횡단 보행은 차량 운전자의 보행자 보호 의무 위반이 높게 평가되는 사례가 있는 영역입니다.</strong> 다만 신호 상태·진입 시점에 따라 달리 평가될 수 있습니다.',
      },
      {
        question: '신호가 점멸 중이었는데도 보호받을 수 있나요?',
        answer:
          '<strong>점멸 신호 중 진입한 보행자는 신속히 완료하거나 되돌아와야 하는 영역으로 평가될 수 있습니다.</strong> 당시 신호 상태를 CCTV·블랙박스로 정확히 확인하는 것이 중요합니다.',
      },
      {
        question: '이 사고가 12대 중과실에 해당하나요?',
        answer:
          '<strong>횡단보도 보행자 보호 의무 위반은 교통사고처리특례법의 12대 중과실 중 하나로 규정돼 있는 영역입니다.</strong> 신호 상태·사고 경위에 따라 해당 여부가 달라질 수 있습니다.',
      },
      {
        question: '보험사가 제시한 과실비율에 동의해야 하나요?',
        answer:
          '<strong>손해보험협회 분쟁조정이나 변호인 상담 후 이의를 제기할 수 있는 영역입니다.</strong> 즉시 동의하면 추후 다툼이 어려워질 수 있습니다.',
      },
      {
        question: '합의 후 후유증이 생기면 추가로 청구할 수 있나요?',
        answer:
          '<strong>합의서 내용과 후유증 발생 시기에 따라 추가 청구 가능 여부가 달라지는 영역입니다.</strong> 합의 전 향후 치료 계획서를 확보해두는 것이 중요합니다.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '보행자 무단횡단 과실 기준', href: '/guide/traffic-accident/traffic-accident-pedestrian-jaywalking-fault' },
      { label: '12대 중과실 합의 영향', href: '/guide/traffic-accident/traffic-accident-12-major-faults-settlement-impact' },
      { label: '녹색신호 보행자 사망 사고', href: '/guide/traffic-accident/traffic-accident-pedestrian-green-fatality' },
      { label: '신호위반 과실 협상', href: '/guide/traffic-accident/traffic-accident-signal-violation-fault-negotiation' },
      { label: '어린이 보행자 손해배상', href: '/guide/traffic-accident/traffic-accident-child-pedestrian-claim' },
    ],
  },
];
