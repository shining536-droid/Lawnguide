import { SpokePage } from '../spoke-pages';

// batch55 traffic-B 2개: 후방추돌 합의 후 후유증 추가청구 + 형사합의금 vs 민사손배 이중지급 방지
//
// 고유 존재 이유:
// 1. 이 페이지는 후방추돌 0:100 합의 후 신경학적 후유증이 늦게 발견된 피해자가 민법 제733조 화해의 효력과 예측 불가능 손해 분리·추가청구 가능성을 점검하도록 돕는 페이지다.
// 2. 이 페이지는 자동차사고 형사합의금과 민사손해배상 이중지급 방지·과실비율·손익상계 4단계 트랙을 정리하려는 피해자를 돕는 페이지다.

export const spokesBatch55TrafficB: SpokePage[] = [
  // ─── 1. traffic-accident / rear-end-100to0-settled-late-aftereffect ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-rear-end-100to0-settled-late-aftereffect',
    keyword: '후방추돌 합의 후 후유증 추가청구',
    questionKeyword: '후방추돌 0:100 합의 끝났는데 몇 달 뒤 신경학적 후유증이 나타났어요. 추가로 청구할 수 있나요?',
    ctaKeyword: '후방추돌 합의 후 추가청구 가능성 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '후방추돌 합의 후 후유증 추가청구 5가지 다툼 | 로앤가이드',
      description:
        '후방추돌 합의 후 신경학적 후유증이 뒤늦게 나타났다면 민법 제733조 화해와 예측 불가능 손해 5가지 다툼 포인트를 지금 확인하세요.',
    },
    intro:
      '<p>"3개월 전 신호대기 중 뒤차에 받혀 0:100 과실로 합의했는데, 최근 들어 손저림과 두통이 심해져 MRI를 찍어보니 경추 신경 손상이 확인됐어요. 보험사에 다시 연락하니 합의 끝났다며 거절합니다." 후방추돌은 통상 가해자 100% 과실이지만, 합의 시점에 발견되지 않았던 신경학적·정형외과적 후유증이 뒤늦게 나타나는 사례가 적지 않습니다. 민법 제733조에 따라 화해는 당사자 간 분쟁 종료 효력을 갖지만, 합의 당시 예측할 수 없었던 손해(예측 불가능 후유증)는 화해 범위 밖으로 보아 추가청구 가능성이 검토될 수 있어요. 진단·합의서 문언·시간 경과의 객관 자료가 핵심입니다.</p>',
    sections: [
      {
        title: '후방추돌 합의 후 추가청구 — 5가지 다툼 포인트',
        content:
          '<p><strong style="color:#1e3a5f">합의서 문언·후유증 인과관계·발견 시점이 추가청구의 핵심 쟁점입니다.</strong></p>\n<ul>\n<li><strong>① 합의서 부제소 합의 범위</strong> — "일체의 손해를 포기한다"는 포괄 조항이 있어도, 민법 제733조의 화해 효력은 합의 당시 예측 가능했던 손해에 한정된다고 검토되는 사례가 있어요.</li>\n<li><strong>② 예측 불가능 후유증의 인과관계</strong> — 사고 → 신경학적 손상 인과를 의무기록·MRI·근전도 등으로 입증해야 합니다. 시간 경과가 길수록 인과관계 입증 부담이 커져요.</li>\n<li><strong>③ 발견 시점 vs 소멸시효</strong> — 불법행위 손해배상 청구 시효는 손해와 가해자를 안 날부터 3년, 사고일부터 10년(민법 제766조). 후유증을 안 날 기준 카운트되는 사례가 자주 보입니다.</li>\n<li><strong>④ 자동차종합보험 약관상 합의 효력</strong> — 보험사 합의서는 "이후 새로운 후유장해 발생 시 별도 청구 가능"이라는 단서를 포함하는 경우가 있어요. 합의서 원본 재확인 필요.</li>\n<li><strong>⑤ 후유장해 진단·신체감정</strong> — 추가청구 인정 여부는 신체감정 결과의 영구성·노동능력상실률 평가에 좌우되는 사례가 많습니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 합의서에 "일체 포기" 문언이 있어도 합의 당시 예측 불가능했던 후유증은 별도 청구가 검토될 수 있어요. 다만 인과관계·발견 시점·신체감정이 모두 입증돼야 합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 추가청구 5단계',
        content:
          '<p><strong style="color:#1e3a5f">진단 확보·합의서 검토·보험사 통보·신체감정·소송 단계로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 후유증 진단 확보 (발견 즉시~2주)</strong> — MRI·근전도·신경학 검사 의무기록 확보. 사고와의 인과관계 소견 명시 진단서 발급 요청.</li>\n<li><strong>2단계 — 합의서·보험약관 재검토 (1주)</strong> — 합의서 원본의 부제소 조항·예외 단서 확인. 보험사 약관상 후유장해 추가청구 가능 조항 점검.</li>\n<li><strong>3단계 — 보험사 추가 보상 청구 (2~4주)</strong> — 진단서·MRI 첨부해 후유장해 추가청구서 제출. 보험사 답변에 따라 분쟁심의위원회 또는 금감원 분쟁조정 검토.</li>\n<li><strong>4단계 — 신체감정·후유장해 평가 (2~4개월)</strong> — 손해보험협회 분쟁심의위 또는 법원 신체감정촉탁으로 노동능력상실률·영구성 평가. 맥브라이드·AMA 기준 적용.</li>\n<li><strong>5단계 — 민사소송 (6~12개월)</strong> — 보험사·가해자 상대 손해배상청구 소장 접수. 소멸시효(후유증 안 날부터 3년) 관리 필수.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 후유증 추가 청구 가능한지 AI로 점검하기</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">후유증 추가 청구 가능한지 AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 후유증 추가청구 6가지',
        content:
          '<p><strong style="color:#1e3a5f">인과관계·합의 범위·후유증 정도를 입증하는 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 사고 당시 진료기록 일체</strong> — 응급실·정형외과·신경외과 초진 기록. 사고 직후 호소 증상 명시.</li>\n<li><strong>2. 후유증 발견 시점 진단서·MRI·근전도</strong> — 신경학적 손상의 객관 입증. 사고와의 인과관계 의학적 소견 포함.</li>\n<li><strong>3. 합의서 원본·보험사 약관</strong> — 부제소 합의 범위·예외 단서 확인. 종합보험 약관상 후유장해 조항 점검.</li>\n<li><strong>4. 보험사 보상금 지급 내역</strong> — 기지급 합의금 명세. 향후 손익상계 산정 자료.</li>\n<li><strong>5. 신체감정 의뢰서</strong> — 손해보험협회 분쟁심의위 또는 법원 감정촉탁. 노동능력상실률·영구성 평가.</li>\n<li><strong>6. 사고 발생 사실증명서·블랙박스</strong> — 후방추돌 0:100 과실 재확인 자료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 후유증을 늦게 발견했다면 의무기록에 "사고 후 점진적 악화" 또는 "지연성 신경 손상"이 명시되도록 의사 소견을 받아두는 것이 인과관계 입증에 도움이 되는 경우가 많습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 후방추돌 합의 후 추가청구에서 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>합의서 "일체 포기" 문언만 보고 포기</strong> — 예측 불가능 후유증은 화해 범위 밖으로 검토되는 사례 있음. 합의서 원본·약관 단서 재확인 권장.</li>\n<li><strong>후유증 인지 후 시효 관리 누락</strong> — 손해를 안 날부터 3년 시효. 진단 시점 기록·소장 접수 일정 관리 필수.</li>\n<li><strong>의무기록 단절</strong> — 합의 후 치료 중단했다가 후유증 발현 시 인과관계 입증 어려움. 정기 외래·재활 기록 유지 권장.</li>\n<li><strong>신체감정 없이 보험사 협상</strong> — 후유장해율은 신체감정 결과가 정본. 감정 전 합의 권유 신중하게 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 손해보험협회 자동차보험 구상금분쟁심의위원회 www.knia.or.kr / 금융감독원 분쟁조정 1332 / 한국교통안전공단 1577-0990.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 보험약관 명시·설명의무와 합의 효력',
        summary:
          '대법원 2024다301832 사건(대법원, 2025.08.14 선고)에서 법원은 보험계약 체결 시 보험자가 보험약관의 중요한 내용에 대하여 구체적이고 상세한 명시·설명의무를 지며, 이를 위반한 경우 그 약관 내용을 보험계약의 내용으로 주장할 수 없다고 판시했습니다. 자동차보험 합의서·약관상 후유장해 추가청구 제한 조항에 대한 명시·설명이 충분하지 않았다면, 합의 후에도 예측 불가능한 후유증에 대한 추가청구 여지가 검토될 수 있다는 시사점이 있습니다.',
        takeaway: '보험사 합의서·약관의 부제소 조항이 명시·설명의무를 충분히 이행한 채 체결되었는지 점검해두면 추가청구 검토에 도움이 되는 사례가 많습니다.',
      },
    ],
    faq: [
      {
        question: '후방추돌 0:100으로 합의 끝났는데 후유증 추가청구가 가능한가요?',
        answer:
          '<strong>합의 당시 예측 불가능했던 후유증은 민법 제733조 화해 범위 밖으로 검토되는 사례가 있어요.</strong> 다만 인과관계·발견 시점·신체감정 결과 모두 입증돼야 추가청구 가능성이 검토됩니다.',
      },
      {
        question: '합의서에 "일체의 손해를 포기"한다는 조항이 있는데도 청구할 수 있나요?',
        answer:
          '<strong>포괄적 부제소 조항이 있어도 예측 불가능 후유증은 별도 청구가 검토될 수 있는 사례가 있습니다.</strong> 보험약관·합의서 명시·설명의무 이행 여부가 다툼 포인트가 되는 경우가 많아요.',
      },
      {
        question: '소멸시효는 언제부터 카운트되나요?',
        answer:
          '<strong>민법 제766조에 따라 손해와 가해자를 안 날부터 3년, 사고일부터 10년이 시효입니다.</strong> 후유증을 인지한 진단 시점 기준 카운트되는 사례가 자주 보입니다.',
      },
      {
        question: '신체감정은 어디서 받나요?',
        answer:
          '<strong>손해보험협회 자동차보험 구상금분쟁심의위원회(www.knia.or.kr) 또는 법원 신체감정촉탁으로 진행하는 경우가 많습니다.</strong> 노동능력상실률·영구성 평가가 추가청구액의 핵심.',
      },
      {
        question: '교통사고 합의·후유증 무료 상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 보험 분쟁은 금융감독원(1332), 자동차보험 분쟁심의는 손해보험협회(www.knia.or.kr).',
      },
    ],
    cta: { text: '후유증 추가 청구 가능한지 AI로 점검하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 후유증 추가 청구', href: '/guide/traffic-accident/traffic-accident-aftereffect-additional-claim' },
      { label: '교통사고 합의 전 체크리스트', href: '/guide/traffic-accident/traffic-accident-settlement-checklist' },
      { label: '교통사고 신체감정 절차', href: '/guide/traffic-accident/traffic-accident-physical-examination' },
      { label: '교통사고 노동능력상실률', href: '/guide/traffic-accident/traffic-accident-labor-capacity-loss' },
      { label: '교통사고 손해배상 시효', href: '/guide/traffic-accident/traffic-accident-damages-statute' },
    ],
  },

  // ─── 2. traffic-accident / criminal-settlement-vs-civil-double-pay ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-criminal-settlement-vs-civil-double-pay',
    keyword: '교통사고 형사합의금 민사손배 이중지급',
    questionKeyword: '교통사고 형사합의금을 받았는데 민사 손해배상도 따로 청구할 수 있나요? 이중지급 안 되나요?',
    ctaKeyword: '형사합의금·민사손배 이중지급 방지 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '교통사고 형사합의금과 민사손배 이중지급 방지 4단계 | 로앤가이드',
      description:
        '교통사고 형사합의금과 민사손배가 이중지급되지 않도록 손익상계·과실비율·책임보험금 산정 4단계 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"신호대기 중 뒤차에 받혀 가해자가 형사처벌 면하려고 합의금 500만원을 줬어요. 그런데 보험사에서는 별도로 치료비·위자료를 산정한다는데, 형사합의금이 민사 배상금에서 또 빠지는 건지 헷갈려요." 교통사고 형사합의금과 민사 손해배상은 별도 청구권이지만, 같은 손해 항목이 중복 지급되지 않도록 손익상계·과실비율·책임보험금 산정 단계에서 정산되는 사례가 많습니다. 형사합의금이 위자료로 갈음되는 경우, 일실수입·치료비 항목으로 갈음되는 경우, 합의 문언에 따라 처리가 달라져요. 합의서 작성 시점부터 항목을 명확히 분리해두는 것이 중요합니다.</p>',
    sections: [
      {
        title: '형사합의금 vs 민사손배 — 4가지 정산 쟁점',
        content:
          '<p><strong style="color:#1e3a5f">형사합의금이 어떤 손해 항목으로 갈음되는지에 따라 민사 청구액이 달라집니다.</strong></p>\n<ul>\n<li><strong>① 합의 문언 — 위자료 갈음 vs 손해 일체 갈음</strong> — "위자료 명목"으로 한정한 합의는 치료비·일실수입에 영향 적음. "일체의 손해" 표현은 민사에서 전액 공제되는 사례가 많아요.</li>\n<li><strong>② 손익상계 적용</strong> — 같은 손해 항목에 대한 중복 지급은 손익상계로 공제. 형사합의금이 책임보험·종합보험 보상액과 겹치는 부분은 정산.</li>\n<li><strong>③ 과실비율 반영</strong> — 피해자 과실이 일부 있을 경우 형사합의금도 과실비율에 따라 정산 검토. 0:100 사고는 영향 적음.</li>\n<li><strong>④ 자동차책임보험 의무보험금 한도</strong> — 자동차손해배상보장법상 사망 1.5억·후유장해 1.5억·부상 한도. 의무보험 초과분은 임의보험·가해자 상대 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 합의서 작성 시 "위자료 명목" 또는 "일체 갈음" 명확히 분리 기재. 보험사 보상과 항목 충돌 없이 산정되도록 합의 시점부터 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 이중지급 방지 4단계',
        content:
          '<p><strong style="color:#1e3a5f">합의서 검토·항목 분리·보험사 청구·정산 검증 단계로 진행합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 형사합의 전 항목 분리 (합의 시점)</strong> — 합의서에 "위자료 명목 X원"으로 한정 기재 권장. "일체의 손해"·"부제소 합의" 문언은 민사 영향 큼.</li>\n<li><strong>2단계 — 보험사 손해 항목별 산정 청구 (사고 직후~2개월)</strong> — 치료비·일실수입·위자료·후유장해 항목별 분리 산정. 손해보험협회 약관·자동차종합보험 표준약관 기준.</li>\n<li><strong>3단계 — 손익상계 검증 (보상 통보 후 2주)</strong> — 보험사 산정안에 형사합의금이 어느 항목에서 공제됐는지 확인. 위자료 한정 합의면 치료비·일실수입에서 공제 안 되는 사례 있음.</li>\n<li><strong>4단계 — 분쟁조정 또는 소송 (필요 시 3~12개월)</strong> — 보험사 산정 이의 시 손해보험협회 분쟁심의위원회(www.knia.or.kr) 또는 금감원 분쟁조정 신청. 미합의 시 민사소송 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 형사합의금·민사손배 이중지급 방지, AI로 정리해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '준비서류 체크리스트 — 정산 6가지',
        content:
          '<p><strong style="color:#1e3a5f">합의 항목·손해 항목·보험금 산정을 입증하는 자료를 단계별로 확보합니다.</strong></p>\n<ul>\n<li><strong>1. 형사합의서·영수증</strong> — 합의 명목(위자료/일체) 명시 + 입금 내역. 추후 손익상계 정산 자료.</li>\n<li><strong>2. 자동차종합보험·책임보험 약관</strong> — 표준약관·특약 조항. 의무보험 한도 및 임의보험 초과 규정.</li>\n<li><strong>3. 진료비 영수증·치료비 명세</strong> — 입원·통원·후유장해 치료. 보험사 손해사정 자료.</li>\n<li><strong>4. 일실수입 산정 자료</strong> — 근로계약서·급여명세서·소득금액증명원. 노동능력상실률 신체감정 결과.</li>\n<li><strong>5. 후유장해 진단서·신체감정 결과</strong> — 손해보험협회 분쟁심의위 또는 법원 감정. 위자료·일실수입 산정 핵심.</li>\n<li><strong>6. 보험사 보상금 산정안·정산서</strong> — 항목별 산정 내역. 손익상계 적용 부분 확인.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 형사합의서는 "위자료 명목 X원"으로 명시하면 민사 치료비·일실수입에서 공제되지 않는 방향으로 검토되는 사례가 많아요. 변호사·법률구조공단 사전 검토 권장.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 / 흔한 실수',
        content:
          '<p><strong style="color:#1e3a5f">아래 4가지는 형사합의·민사손배 정산에서 자주 보고되는 함정입니다.</strong></p>\n<ul>\n<li><strong>"일체의 손해 갈음" 합의로 민사 전액 차감</strong> — 합의 문언이 광범위하면 보험사가 치료비·일실수입까지 공제. 항목 분리 합의 권장.</li>\n<li><strong>위자료만 받고 후유장해 별도청구 누락</strong> — 후유장해는 신체감정 후 별도 산정. 합의 시점에 미발견이라도 추후 청구 검토 가능 사례 있음.</li>\n<li><strong>의무보험 한도만 보고 임의보험 청구 안 함</strong> — 자동차손해배상보장법상 책임보험은 한도 있음. 가해자 임의보험·개인 자산 추가 청구 검토.</li>\n<li><strong>과실비율 미확인 정산</strong> — 피해자 과실이 일부 있으면 형사합의금·민사손배 모두 과실비율로 감액. 손해보험협회 분쟁심의 신청 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">🏛️ 신청·상담 경로: 대한법률구조공단 132 / 손해보험협회 자동차보험 구상금분쟁심의위원회 www.knia.or.kr / 금융감독원 분쟁조정 1332 / 한국교통안전공단 1577-0990.</blockquote>',
      },
    ],
    cases: [
      {
        title: '판례 — 자기차량손해보험 보험자대위와 자기부담금 분배',
        summary:
          '대법원 2022다287284 사건(대법원, 2026.01.29 선고)에서 법원은 자기차량손해보험 피보험자와 제3자의 과실이 경합한 교통사고에서 보험자가 자기부담금을 공제한 보험금을 선처리 방식으로 지급한 경우, 보험자 대위 범위는 보험자가 지급한 보험금 중 제3자 책임비율에 상응하는 금액에 한정되며, 자기부담금에 대한 제3자 책임비율 부분은 피보험자가 별도 청구할 수 있다고 판시했습니다. 형사합의금·민사손배 정산에서도 같은 손해 항목 중복 지급은 막되 별도 항목·별도 청구권은 분리 보호되는 원칙이 적용된다는 시사점이 있습니다.',
        takeaway: '같은 손해 항목은 손익상계로 공제되지만, 별도 청구권·별도 항목은 분리 보호되는 사례가 많으므로 합의서 항목 분리·보험사 산정안 점검을 단계적으로 정리해두면 도움이 됩니다.',
      },
    ],
    faq: [
      {
        question: '형사합의금을 받았는데 민사 손해배상도 따로 청구할 수 있나요?',
        answer:
          '<strong>네, 형사합의와 민사 손해배상은 별도 청구권입니다.</strong> 다만 같은 손해 항목 중복 지급은 손익상계로 공제. 합의 문언에 따라 정산 범위가 달라지는 사례가 많아요.',
      },
      {
        question: '합의서에 "위자료 명목"이라고 쓰면 치료비는 따로 받을 수 있나요?',
        answer:
          '<strong>위자료로 한정한 합의는 치료비·일실수입에 영향 적은 방향으로 검토되는 사례가 많습니다.</strong> 다만 보험사 산정안 정산 시 명목 인정 여부가 다툼 포인트가 되는 경우가 있어요.',
      },
      {
        question: '책임보험 한도를 넘으면 어떻게 청구하나요?',
        answer:
          '<strong>자동차손해배상보장법상 의무보험 한도(사망·후유장해 1.5억 등)를 초과하면 가해자 임의보험 또는 가해자 개인 자산을 상대로 추가 청구 검토 가능.</strong>',
      },
      {
        question: '보험사 산정안에 이의가 있으면 어디로 가나요?',
        answer:
          '<strong>손해보험협회 자동차보험 구상금분쟁심의위원회(www.knia.or.kr) 또는 금융감독원 분쟁조정(1332)으로 분쟁조정 신청 가능합니다.</strong> 미합의 시 민사소송 검토.',
      },
      {
        question: '교통사고 정산 무료 상담은 어디서 받나요?',
        answer:
          '<strong>대한법률구조공단(132)에서 무료 법률상담을 받아보실 수 있습니다.</strong> 보험 분쟁은 금융감독원(1332), 자동차보험 분쟁심의는 손해보험협회(www.knia.or.kr), 한국교통안전공단(1577-0990).',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 형사합의 가이드', href: '/guide/traffic-accident/traffic-accident-criminal-settlement-guide' },
      { label: '교통사고 민사손해배상 절차', href: '/guide/traffic-accident/traffic-accident-civil-damages-procedure' },
      { label: '자동차보험 분쟁조정 신청', href: '/guide/traffic-accident/traffic-accident-insurance-dispute' },
      { label: '교통사고 위자료 산정', href: '/guide/traffic-accident/traffic-accident-consolation-money' },
      { label: '교통사고 합의 전 체크리스트', href: '/guide/traffic-accident/traffic-accident-settlement-checklist' },
    ],
  },
];
