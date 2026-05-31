import { SpokePage } from '../spoke-pages';

// batch84 assault(4) + dui(3) + jeonse-fraud(3) — 10개 (2026-06-01)
//
// 고유 존재 이유:
// 1. assault-apartment-floor-noise-confrontation-track — 층간소음 항의가 폭행으로 번져 다친 피해자의 진술 신빙성·증거 판단형 트랙. 피해자 진술의 증명력 판단이 핵심.
// 2. assault-taxi-fare-dispute-passenger-track — 택시 요금 시비 끝에 폭행당해 다친 피해자의 상해 인정 여부 판단형 트랙. 경미한 상처와 상해의 경계가 핵심.
// 3. assault-futsal-match-tackle-confrontation-track — 풋살 경기 중 태클 시비로 몸싸움한 neutral 판단형 트랙. 사회상규·정당행위 한계가 핵심.
// 4. assault-care-facility-elderly-resident-track — 요양시설 종사자의 노인 폭행 피해자 절차형 트랙. 신고·CCTV·공소시효 정지 흐름이 핵심.
// 5. dui-accident-leave-scene-track — 음주 사고 후 현장을 떠난 accused 판단형 트랙. 적용법조·도주치상·사고후미조치 다툼이 핵심.
// 6. dui-license-revocation-admin-appeal-track — 음주 면허취소 행정심판 accused 절차형 트랙. 재량·행정심판 90일 트랙이 핵심.
// 7. dui-personal-mobility-scooter-track — 전동킥보드 음주 단속 accused 판단형 트랙. 개인형 이동장치의 원동기장치자전거 해당 여부가 핵심.
// 8. jeonse-fraud-newbuild-villa-inflated-deposit-track — 신축빌라 시세조작 깡통전세 피해자 절차형 트랙. 우선변제권 승계·대항력 유지·배당이 핵심.
// 9. jeonse-fraud-fake-landlord-impersonation-track — 임대인 행세 가짜 전세계약 피해자 판단형 트랙. 임대권한·계약 목적·대항력이 핵심.
// 10. jeonse-fraud-trust-property-unauthorized-lease-track — 신탁 부동산 무단 임대 피해자 판단형 트랙. 적법한 임대권한·소유권 회복·대항력 취득 시점이 핵심.

export const spokesBatch84AssaultDuiJeonseFraud: SpokePage[] = [
  // ─── 1. assault-apartment-floor-noise-confrontation-track ───
  {
    domain: 'assault',
    slug: 'assault-apartment-floor-noise-confrontation-track',
    keyword: '층간소음 항의 폭행 상해 고소',
    questionKeyword: '윗집에 층간소음 때문에 항의하러 갔다가 말다툼 끝에 상대가 저를 밀치고 때려 다쳤어요. 둘만 있던 자리라 제 진술밖에 없는데 이걸로 폭행·상해 고소가 되는지 막막합니다.',
    ctaKeyword: '층간소음 항의 폭행 진술·증거 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '층간소음 항의 폭행 — 5단계 진술·증거 점검 | 로앤가이드',
      description:
        '층간소음 항의하다 맞아 다쳤는데 둘만 있어 막막하다면 피해자 진술 신빙성·상해 입증·고소 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"몇 달째 이어진 층간소음을 더는 참기 어려워 윗집을 찾아가 정중히 항의했는데, 대화가 격해지자 상대가 갑자기 현관 앞에서 저를 밀치고 팔을 잡아채 멍이 들고 손목을 다친 피해자입니다. 그 자리에는 둘밖에 없었고 CCTV도 닿지 않는 위치라, 결국 제 진술밖에 없는 상황이에요. 상대는 \'먼저 찾아와 시비를 건 건 그쪽\'이라며 발뺌하는데, 제 진술만으로 폭행·상해 고소가 되는지 막막한 상태입니다." 형법 제260조 제1항은 사람의 신체에 대해 폭행한 자를, 같은 법 제257조 제1항은 사람의 신체를 상해한 자를 처벌하도록 규정하는 영역입니다. 판례·실무는 피해자 진술이 주요한 부분에서 일관되고 경험칙상 비합리적이거나 자체 모순이 없으며 허위로 불리한 진술을 할 동기가 분명히 드러나지 않는 한 그 신빙성을 특별한 이유 없이 함부로 배척해서는 안 된다고 보는 본 사례 흐름이 있는 영역입니다. 층간소음 항의 + 단둘이 있던 자리 + 폭행·상해 결합은 \'피해자 진술 신빙성·상해 입증\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 상해 입증 ② 진술 일관성 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 진단 ② 진술 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 층간소음 항의 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상해 입증·진술 일관성·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상해 입증</strong> — 상해진단서·진료기록으로 부상 부위·치료기간과 폭행의 인과관계 정리.</li>\n<li><strong>② 진술 일관성</strong> — 발단·경위·시간을 주요 부분에서 일관되게 정리.</li>\n<li><strong>③ 고소</strong> — 폭행(형법 제260조)·상해(제257조) 중 진단 내용에 따라 고소 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 직접 목격자나 영상이 없어 피해자 진술이 사실상 유일한 증거여도, 진술이 주요 부분에서 일관되고 모순이 없으며 허위 진술 동기가 드러나지 않는다면 그 신빙성을 함부로 배척하기 어려울 수 있는 영역. 부상 직후 진단과 진술의 일관성이 확보될수록 입증이 수월해지는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·증거 확보 (즉시~당일)</strong> — 병원 진료·상해진단서, 다친 부위 사진, 복도·엘리베이터 CCTV 보존 요청.</li>\n<li><strong>2단계 — 진술·정황 정리 (수일 내)</strong> — 항의 경위·시간, 소음 민원 기록·관리사무소 자료 정리.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 피해자 진술·대질 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">층간소음 항의 폭행 상해 고소·합의 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 상해 입증·진술 일관성·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (부상 부위·치료기간)</strong></li>\n<li><strong>복도·엘리베이터 CCTV 영상</strong></li>\n<li><strong>다친 부위·현장 사진 (시간정보 포함)</strong></li>\n<li><strong>층간소음 민원·관리사무소 기록</strong></li>\n<li><strong>항의·폭행 경위·시간 메모 (육하원칙)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>상대와의 문자·통화 등 교신 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 둘만 있던 자리라도 진술이 주요 부분에서 일관되고 모순이 없으면 신빙성이 쉽게 배척되지 않을 수 있으므로 경위를 시간순으로 동일하게 정리해두는 것이 도움이 됩니다. 복도·엘리베이터 CCTV는 항의 전후 동선을 보여줄 수 있어 보존 요청을 먼저 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진술 신빙성</strong> — 진술이 주요 부분에서 일관되고 모순이 없는지.</li>\n<li><strong>폭행·상해 구분</strong> — 부상이 경미해 폭행에 그치는지, 상해로 평가되는지.</li>\n<li><strong>발단·선후</strong> — 누가 먼저 유형력을 행사했는지.</li>\n<li><strong>인과관계</strong> — 부상이 폭행으로 생겼는지, 기존 상태인지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>검찰 범죄피해자 지원 1301</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 피해자 진술의 신빙성 판단 기준',
        summary:
          '대법원 2018도7709(대법원, 2018.10.25 선고) 영역에서 법원은 증거의 증명력은 법관의 자유판단에 맡겨져 있으나 그 판단은 논리와 경험칙에 합치해야 하고, 피해자 등의 진술이 주요한 부분에서 일관되고 경험칙상 비합리적이거나 진술 자체로 모순되는 부분이 없으며 허위로 피고인에게 불리한 진술을 할 동기나 이유가 분명히 드러나지 않는 이상 그 신빙성을 특별한 이유 없이 함부로 배척해서는 안 된다고 판시했습니다. 층간소음 항의 중 단둘이 있던 자리의 폭행 사안에서도 진술의 일관성·신빙성을 검토해볼 수 있습니다.',
        takeaway: '층간소음 항의 + 단둘이 있던 자리 + 폭행·상해 결합 시 피해자 진술 신빙성·상해 입증 검토 영역 — 진단·진술 일관성 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '저 혼자 진술밖에 없는데 고소가 되나요?',
        answer:
          '<strong>진술이 주요 부분에서 일관되고 모순이 없으면 신빙성이 쉽게 배척되지 않을 수 있는 영역입니다.</strong> 경위를 시간순으로 동일하게 정리.',
      },
      {
        question: '먼저 항의하러 간 게 불리한가요?',
        answer:
          '<strong>항의 행위와 상대의 폭행은 별개로 평가될 수 있는 영역입니다.</strong> 발단과 폭행 선후를 사실대로 정리.',
      },
      {
        question: '멍과 손목 통증도 상해가 되나요?',
        answer:
          '<strong>치료가 필요한 부상이면 상해로 평가될 수 있고, 극히 경미하면 폭행에 그칠 여지가 있는 영역입니다.</strong> 진단 내용으로 정도부터 정리.',
      },
      {
        question: '층간소음 민원 기록도 도움이 되나요?',
        answer:
          '<strong>항의 경위와 배경을 보여주는 정황 자료가 되는 영역입니다.</strong> 관리사무소·민원 기록을 함께 확보.',
      },
      {
        question: '상대가 먼저 시비라고 우기면 어떻게 하나요?',
        answer:
          '<strong>진술 일관성과 객관 정황으로 선후를 따지는 영역입니다.</strong> CCTV·교신 기록을 시간순으로 정리.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: '상해진단서 발급', href: '/guide/assault/assault-injury-diagnosis-certificate' },
      { label: '목격자 없는 폭행 입증', href: '/guide/assault/assault-no-witness-proof' },
      { label: 'CCTV 영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
      { label: '범죄피해자 지원 제도', href: '/guide/assault/assault-victim-support-system' },
    ],
  },

  // ─── 2. assault-taxi-fare-dispute-passenger-track ───
  {
    domain: 'assault',
    slug: 'assault-taxi-fare-dispute-passenger-track',
    keyword: '택시 요금 시비 폭행 상해 인정',
    questionKeyword: '택시 요금 문제로 시비가 붙다 승객이 저를 밀치고 때려 긁히고 멍이 들었어요. 상처가 크진 않은데 이 정도도 상해로 인정돼 고소·치료비 청구가 되는지 막막합니다.',
    ctaKeyword: '택시 요금 시비 폭행 상해 인정 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '택시 요금 시비 폭행 — 5단계 상해 인정·고소 점검 | 로앤가이드',
      description:
        '택시 요금 시비 끝에 맞아 다쳤는데 상처가 작아 상해가 될지 막막하다면 상해 인정 기준·고소 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"심야에 택시 요금 문제로 승객과 시비가 붙었고, 말다툼 끝에 승객이 갑자기 차에서 내리며 저를 밀치고 얼굴과 팔을 때려 긁히고 멍이 든 피해자입니다. 상처가 크진 않아 정식 상해진단서를 받아야 할지 망설였는데, 통증은 며칠 갔고 멍도 한참 남았어요. 상대는 \'살짝 닿은 정도\'라고 하는데, 이 정도 부상도 상해로 인정돼 고소·치료비 청구가 되는지 막막한 상태입니다." 형법 제257조 제1항은 사람의 신체를 상해한 자를, 같은 법 제260조 제1항은 폭행한 자를 처벌하도록 규정하는 영역입니다. 판례·실무는 폭행에 수반된 상처가 극히 경미해 굳이 치료할 필요가 없고 자연 치유되며 일상에 지장이 없는 정도면 상해로 보기 어렵지만, 그 정도를 넘는 상처가 폭행으로 생겼다면 상해에 해당하고, 건강상태 변화·생활기능 장애는 피해자의 연령·성별·체격 등 구체적 상태를 기준으로 판단한다고 보는 본 사례 흐름이 있는 영역입니다. 요금 시비 + 폭행 + 경미해 보이는 상처 결합은 \'상해 인정 여부\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 상해 입증 ② 정도 평가 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 진단 ② 정도 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 택시 요금 시비 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상해 입증·정도 평가·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상해 입증</strong> — 상해진단서·진료기록으로 부상 부위·치유기간 정리.</li>\n<li><strong>② 정도 평가</strong> — 치료 필요성·생활기능 장애가 있었는지 구체적 상태 정리.</li>\n<li><strong>③ 고소</strong> — 폭행(형법 제260조)·상해(제257조) 중 정도에 따라 고소 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 폭행에 수반된 상처가 극히 경미해 치료가 필요 없고 자연 치유되며 일상에 지장이 없는 정도면 상해로 보기 어렵지만, 그 정도를 넘으면 상해에 해당할 수 있는 영역. 부상의 부위·치유기간·생활기능 장애를 구체적 상태 기준으로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·증거 확보 (즉시~당일)</strong> — 병원 진료·상해진단서, 다친 부위 사진, 택시 블랙박스 영상 보존.</li>\n<li><strong>2단계 — 정도·정황 정리 (수일 내)</strong> — 치유기간·통증 경과, 요금 시비·폭행 경위·시간 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 피해자 진술·대질 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">택시 요금 시비 폭행 상해 인정·고소 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 상해 입증·정도 평가·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (부위·치유기간)</strong></li>\n<li><strong>택시 블랙박스·내부 영상</strong></li>\n<li><strong>다친 부위·현장 사진 (시간정보 포함)</strong></li>\n<li><strong>통증·치료 경과 메모 (생활기능 장애)</strong></li>\n<li><strong>요금 시비·폭행 경위·시간 기록 (육하원칙)</strong></li>\n<li><strong>치료비 영수증·통원 내역</strong></li>\n<li><strong>승객 인적사항·승차 기록 (배차·결제)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상처가 작아 보여도 치유에 시간이 걸렸거나 통증·불편이 이어졌다면 그 경과를 구체적으로 기록해두는 것이 상해 정도 판단에 도움이 됩니다. 택시 블랙박스는 요금 시비부터 폭행까지 연속 정황을 보여줄 수 있어 즉시 보존해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>상해 인정</strong> — 상처가 경미해 폭행에 그치는지, 상해로 평가되는지.</li>\n<li><strong>생활기능 장애</strong> — 건강상태 변화·일상 지장이 있었는지.</li>\n<li><strong>인과관계</strong> — 부상이 폭행으로 생겼는지.</li>\n<li><strong>발단·선후</strong> — 요금 시비에서 누가 먼저 유형력을 행사했는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>검찰 범죄피해자 지원 1301</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 강간치상죄에서 상해의 판단 기준',
        summary:
          '대법원 2003도4606(대법원, 2003.09.26 선고) 영역에서 법원은 폭행 등에 수반된 상해가 극히 경미해 굳이 치료할 필요 없이 자연 치유되고 일상생활에 지장이 없는 경우에는 상해에 해당하지 않을 수 있으나, 그 정도를 넘는 상처가 폭행으로 생긴 경우라면 상해에 해당하며, 건강상태가 나쁘게 변경되고 생활기능에 장애가 초래됐는지는 객관적·일률적으로가 아니라 피해자의 연령·성별·체격 등 신체·정신상 구체적 상태를 기준으로 판단해야 한다고 판시했습니다. 정식 상해진단서가 없더라도 상처의 부위·내용·치유기간에 비추어 상해를 단정적으로 부정할 수 없다고 본 사례입니다. 택시 요금 시비 폭행 사안에서도 부상 정도를 검토해볼 수 있습니다.',
        takeaway: '요금 시비 + 폭행 + 경미해 보이는 상처 결합 시 상해 인정 여부 검토 영역 — 부위·치유기간·생활기능 장애 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '상처가 작은데도 상해가 되나요?',
        answer:
          '<strong>극히 경미하면 폭행에 그칠 수 있으나 그 정도를 넘으면 상해로 평가될 수 있는 영역입니다.</strong> 치유기간·생활기능 장애를 정리.',
      },
      {
        question: '진단서를 꼭 받아야 하나요?',
        answer:
          '<strong>진단서가 없어도 상처의 부위·치유기간으로 상해를 단정적으로 부정하기 어려울 수 있는 영역입니다.</strong> 가능한 한 진료 기록을 남겨두는 것이 안전.',
      },
      {
        question: '나이나 체격이 평가에 영향을 주나요?',
        answer:
          '<strong>건강상태 변화·생활기능 장애는 피해자의 연령·성별·체격 등 구체적 상태를 기준으로 판단되는 영역입니다.</strong> 본인 상태에 맞춰 정리.',
      },
      {
        question: '치료비와 합의금은 어떻게 받나요?',
        answer:
          '<strong>형사 합의 또는 민사 손해배상으로 청구하는 영역입니다.</strong> 사례에 따라 다르지만 치료기간·과실에 따라 수준이 달라질 수 있습니다.',
      },
      {
        question: '승객이 살짝 닿았다고 하면 어떻게 하나요?',
        answer:
          '<strong>블랙박스·진단 등 객관 자료로 폭행과 부상을 입증하는 영역입니다.</strong> 정황 자료를 시간순으로 정리.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: '상해진단서 발급', href: '/guide/assault/assault-injury-diagnosis-certificate' },
      { label: '폭행 합의금 기준', href: '/guide/assault/assault-settlement-amount-standard' },
      { label: '블랙박스·CCTV 영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
      { label: '범죄피해자 지원 제도', href: '/guide/assault/assault-victim-support-system' },
    ],
  },

  // ─── 3. assault-futsal-match-tackle-confrontation-track ───
  {
    domain: 'assault',
    slug: 'assault-futsal-match-tackle-confrontation-track',
    keyword: '풋살 경기 태클 시비 폭행 정당행위',
    questionKeyword: '동호회 풋살 경기 중 거친 태클을 두고 시비가 붙어 상대와 몸싸움이 벌어져 둘 다 다쳤어요. 운동 중 일어난 일인데 이게 폭행이 되는지, 운동이라 봐주는지 알고 싶어요.',
    ctaKeyword: '풋살 경기 태클 시비 몸싸움 정황 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '풋살 태클 시비 몸싸움 — 5단계 정당행위·위법성 점검 | 로앤가이드',
      description:
        '풋살 경기 중 태클 시비로 몸싸움해 둘 다 다쳤다면 사회상규·정당행위 한계·증거 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"주말 동호회 풋살 경기 도중 상대의 거친 태클에 화가 나 항의하다, 결국 그라운드 위에서 멱살을 잡고 밀치는 몸싸움으로 번져 둘 다 긁히고 멍이 든 상황입니다. 운동 중에 흥분해 벌어진 일이고 서로 손이 오갔는데, 경기라는 특수성 때문에 봐주는 건지, 아니면 둘 다 폭행으로 처리되는지 막막한 관련자입니다. 상대도 다쳤다고 하고 저도 다쳐서, 운동 중 접촉과 시비 끝 몸싸움의 경계가 어디인지 혼란스러운 상태입니다." 형법 제257조 제1항은 상해를, 같은 법 제260조 제1항은 폭행을 규정하고, 같은 법 제20조는 사회상규에 위배되지 아니하는 행위는 벌하지 아니한다고 정하는 영역입니다. 판례·실무는 목적·수단의 정당성이 인정되는 통상의 범위를 벗어나 과도한 유형력을 행사해 상해까지 입혔다면, 외형이 어떻든 사회상규상 용인되는 정당행위로 보기 어렵다고 보는 본 사례 흐름이 있는 영역입니다. 경기 중 태클 시비 + 그라운드 몸싸움 + 양측 부상 결합은 \'폭행·상해 성립·정당행위 한계\' 다툼이 검토될 수 있는 트랙입니다. 관련자라면 ① 발단 ② 선후·정도 ③ 정당행위 한계 ④ 증거 ⑤ 합의·처분 5중 트랙이 가능한 영역. 대응은 ① 발단 ② 선후 ③ 한계 ④ 증거 ⑤ 처분 5단계로 검토해볼 수 있습니다. 관련자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 풋살 태클 시비 몸싸움 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 발단·선후 정도·정당행위 한계·증거·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 발단 정리</strong> — 태클·시비 경위와 몸싸움이 시작된 발단·시점 기록.</li>\n<li><strong>② 선후·정도</strong> — 누가 먼저 유형력을 행사했고 가격의 정도·횟수가 어땠는지.</li>\n<li><strong>③ 정당행위 한계</strong> — 운동 중 통상 접촉을 넘어 과도한 유형력으로 나아갔는지.</li>\n<li><strong>④ 증거</strong> — 경기 영상·목격자·진단서로 정황 확보.</li>\n<li><strong>⑤ 합의·처분</strong> — 쌍방 처리 가능성·합의·처분 흐름 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 운동 중 통상 발생할 수 있는 접촉의 범위를 벗어나 과도한 유형력을 행사해 상해까지 입혔다면, 운동이라는 외형이 있더라도 사회상규상 용인되는 정당행위로 보기 어려울 수 있는 영역. 통상 접촉과 시비 끝 폭행의 경계, 선후·정도가 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 정리·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보존 (즉시~당일)</strong> — 부상 사진·진단서, 경기장 CCTV·촬영 영상 확보.</li>\n<li><strong>2단계 — 선후·정도 정리 (수일 내)</strong> — 태클·시비 발단, 가격 선후·횟수, 몸싸움 경위 기록.</li>\n<li><strong>3단계 — 목격자 확보 (가능한 빨리)</strong> — 동호회원·심판 등 목격자 진술·연락처 확보.</li>\n<li><strong>4단계 — 경찰 조사 대응 (수사기관 일정)</strong> — 진술 일관성 유지, 통상 접촉·과도한 유형력 정황 설명.</li>\n<li><strong>5단계 — 합의·처분 검토 (병행)</strong> — 합의 여부에 따른 처분 흐름 확인.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의금과 대응 전략, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">풋살 경기 태클 시비 몸싸움 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 발단·선후·정당행위 갈래입니다.</strong></p>\n<ul>\n<li><strong>부상 사진·상해진단서 (양측)</strong></li>\n<li><strong>경기장 CCTV·휴대폰 촬영 영상</strong></li>\n<li><strong>태클·시비·몸싸움 경위 메모 (육하원칙)</strong></li>\n<li><strong>가격 선후·횟수·정도 기록</strong></li>\n<li><strong>동호회원·심판 목격자 진술·연락처</strong></li>\n<li><strong>치료비 영수증·통원 내역</strong></li>\n<li><strong>경기 일정·동호회 규약 등 배경 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 운동 중 통상 접촉인지, 시비 끝에 과도한 유형력을 행사했는지의 경계가 정당행위 판단의 핵심이 되므로 발단과 선후·정도를 사실대로 정리해두는 것이 도움이 됩니다. 경기 영상이나 목격자 진술이 있으면 접촉과 몸싸움을 구분해 보여줄 수 있어 함께 확보해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>정당행위 한계</strong> — 통상 접촉을 넘어 과도한 유형력이었는지.</li>\n<li><strong>쌍방 여부</strong> — 상호 유형력이 오가 쌍방으로 평가되는지.</li>\n<li><strong>선후·정도</strong> — 누가 먼저, 어느 정도로 가격했는지.</li>\n<li><strong>상해 인과</strong> — 부상이 태클인지 몸싸움으로 생겼는지.</li>\n<li><strong>합의·처분</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>검찰 범죄피해자 지원 1301</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 과도한 유형력과 정당행위의 한계',
        summary:
          '대법원 2008도2695(대법원, 2008.08.21 선고) 영역에서 법원은 목적과 수단 면에서 정당성이 인정되는 통상의 범위 내 행위는 정당행위로 볼 수 있으나, 그 통상의 방식과 정도를 벗어나 비정상적이거나 과도한 유형력을 행사하고 신체의 자유를 과도하게 제압해 상해까지 입힌 경우라면 그 행위가 어떤 명목과 방법으로 이루어졌더라도 사회상규상 용인되는 정당행위로 볼 수 없다고 판시했습니다. 풋살 경기 중 태클 시비 끝 몸싸움 사안에서도 통상 접촉을 넘어선 과도한 유형력 여부를 검토해볼 수 있습니다.',
        takeaway: '경기 중 태클 시비 + 그라운드 몸싸움 + 양측 부상 결합 시 폭행·상해 성립·정당행위 한계 검토 영역 — 선후·정도 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '운동 중에 벌어진 일이라 봐주나요?',
        answer:
          '<strong>통상 접촉의 범위를 벗어난 과도한 유형력이면 정당행위로 보기 어려울 수 있는 영역입니다.</strong> 접촉과 몸싸움을 구분해 정리.',
      },
      {
        question: '거친 태클을 먼저 한 상대는 책임이 없나요?',
        answer:
          '<strong>태클 정황과 이어진 몸싸움 선후를 함께 평가하는 영역입니다.</strong> 발단·선후를 사실대로 정리.',
      },
      {
        question: '둘 다 다쳤는데 똑같이 처리되나요?',
        answer:
          '<strong>누가 먼저·어느 정도로 행사했는지에 따라 평가가 달라질 수 있는 영역입니다.</strong> 가격 선후·횟수를 확보.',
      },
      {
        question: '경기 영상이 증거가 되나요?',
        answer:
          '<strong>통상 접촉과 시비 끝 폭행을 구분해 보여주는 정황 자료가 되는 영역입니다.</strong> 영상·목격자를 함께 확보.',
      },
      {
        question: '합의하면 끝나나요?',
        answer:
          '<strong>폭행은 반의사불벌 성격이 있어 합의가 처리에 영향을 줄 수 있는 영역입니다.</strong> 상해는 양형 사정이 될 수 있어 신중히 검토.',
      },
    ],
    cta: { text: '합의금과 대응 전략, AI로 확인하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '쌍방폭행 대응', href: '/guide/assault/assault-mutual-fight-response' },
      { label: '정당행위·사회상규', href: '/guide/assault/assault-justifiable-act-standard' },
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: '폭행 합의금 기준', href: '/guide/assault/assault-settlement-amount-standard' },
      { label: 'CCTV 영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
    ],
  },

  // ─── 4. assault-care-facility-elderly-resident-track ───
  {
    domain: 'assault',
    slug: 'assault-care-facility-elderly-resident-track',
    keyword: '요양시설 노인 폭행 신고 절차',
    questionKeyword: '요양시설에 모신 부모님이 종사자에게 폭행을 당한 정황을 뒤늦게 알게 됐어요. 신고·CCTV 확보·고소를 어떤 순서로 진행해야 하고, 시간이 지난 일도 처벌이 되는지 막막합니다.',
    ctaKeyword: '요양시설 노인 폭행 신고 절차 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '요양시설 노인 폭행 — 5단계 신고·CCTV 점검 | 로앤가이드',
      description:
        '요양시설 부모님이 종사자에게 폭행당한 정황을 알게 됐다면 신고·CCTV·고소·공소시효 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"요양시설에 모신 부모님 몸에서 멍과 상처를 발견했고, 며칠 뒤 다른 보호자를 통해 종사자가 어르신들을 거칠게 다룬다는 이야기를 듣게 된 보호자입니다. 부모님은 인지가 온전치 않아 정확한 경위를 말씀하기 어렵고, 시설은 \'넘어진 것\'이라고만 해요. 뒤늦게 알게 된 일이라 신고가 되는지, CCTV는 어떻게 확보하는지, 시간이 지난 일도 처벌이 되는지 막막한 상태입니다." 형법 제260조 제1항은 폭행을, 같은 법 제257조 제1항은 상해를 규정하고, 노인복지법은 노인학대 신고의무와 처벌을, 아동·노인 등에 대한 학대 관련 특례는 일정한 경우 공소시효 정지를 정하는 영역입니다. 판례·실무는 공소시효를 정지하는 특례조항을 신설하면서 명시적 경과규정을 두지 않은 경우, 그 문언·취지와 법치주의 이념을 훼손하지 않는 범위에서 신중히 판단해 아직 공소시효가 완성되지 않은 학대범죄에도 적용될 수 있다고 보는 본 사례 흐름이 있는 영역입니다. 요양시설 + 종사자 폭행 + 뒤늦은 발견 결합은 \'신고·CCTV 확보·고소·공소시효\' 검토가 가능한 트랙입니다. 피해자(보호자)라면 ① 상해 입증 ② 신고 ③ CCTV 확보 ④ 형사 절차 ⑤ 시효·민사 5중 트랙이 가능한 영역. 대응은 ① 진단 ② 신고 ③ CCTV ④ 형사 ⑤ 시효 5단계로 검토해볼 수 있습니다. 보호자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 요양시설 노인 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상해 입증·신고·CCTV 확보·형사 절차·시효 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상해 입증</strong> — 상해진단서·진료기록·멍 사진으로 부상 부위·경위 정리.</li>\n<li><strong>② 신고</strong> — 노인보호전문기관·경찰에 노인학대·폭행 신고 검토.</li>\n<li><strong>③ CCTV 확보</strong> — 시설 CCTV 보존 요청·열람, 영상 멸실 방지.</li>\n<li><strong>④ 형사 절차</strong> — 폭행·상해·학대 고소 → 조사 → 검찰 송치 흐름.</li>\n<li><strong>⑤ 시효·민사</strong> — 공소시효 정지 여부, 치료비·위자료 민사 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 학대범죄는 공소시효를 정지하는 특례가 적용될 수 있어 뒤늦게 발견된 일도 처벌 가능성을 검토해볼 수 있는 영역. 시설 CCTV는 보존기간이 짧아 빠른 보존 요청이 출발점이 되고, 노인학대 신고와 형사 고소가 병행될 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·대응 5단계',
        content:
          '<p><strong>A. 노인보호전문기관·경찰·검찰 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·멍 사진 확보 (즉시~당일)</strong> — 병원 진료·상해진단서, 멍·상처 사진을 날짜와 함께 기록.</li>\n<li><strong>2단계 — CCTV 보존 요청 (지체 없이)</strong> — 시설에 CCTV 보존 요청, 노인보호전문기관·경찰에 신고.</li>\n<li><strong>3단계 — 노인학대 신고·고소장 접수 (가능한 빨리)</strong> — 1577-1389 또는 112 신고, 폭행·상해·학대 고소장 제출.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 진술·CCTV 분석 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 시효·민사 검토 (병행)</strong> — 공소시효 정지 여부 확인, 치료비·위자료 민사 청구 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">요양시설 노인 폭행 신고·고소 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 상해 입증·신고·CCTV 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (부상 부위·치료기간)</strong></li>\n<li><strong>멍·상처 사진 (발견 날짜·시간 포함)</strong></li>\n<li><strong>시설 CCTV 보존 요청·열람 자료</strong></li>\n<li><strong>요양일지·투약·간호 기록</strong></li>\n<li><strong>다른 보호자·동료 종사자 진술·연락처</strong></li>\n<li><strong>치료비 영수증·통원 내역</strong></li>\n<li><strong>입소 계약서·시설 안내 자료 (관계 입증)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시설 CCTV는 보존기간이 짧아 빠른 시일 안에 사라질 수 있으므로 보존 요청을 가장 먼저 해두는 것이 안전합니다. 인지가 온전치 않은 어르신은 진술이 어려울 수 있어 멍·상처 사진과 요양일지·간호기록 같은 객관 자료를 함께 모아두는 것이 도움이 되는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공소시효 정지</strong> — 학대범죄 시효 정지 특례 적용 여부.</li>\n<li><strong>폭행·상해·학대 구분</strong> — 부상 정도·반복성에 따른 적용 죄명.</li>\n<li><strong>CCTV 확보</strong> — 영상 보존·열람과 멸실 여부.</li>\n<li><strong>인과·경위</strong> — 부상이 폭행인지 \'넘어진 것\'인지.</li>\n<li><strong>시설 책임</strong> — 종사자 외 시설의 관리·사용자 책임.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>검찰 범죄피해자 지원 1301</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 학대범죄 공소시효 정지 특례의 적용 범위',
        summary:
          '대법원 2020도3694(대법원, 2021.02.25 선고) 영역에서 법원은 공소시효를 정지·연장·배제하는 특례조항을 신설하면서 소급적용에 관한 명시적 경과규정을 두지 않은 경우, 적법절차·소급금지 원칙의 정신을 바탕으로 법적 안정성과 신뢰보호를 포함한 법치주의 이념을 훼손하지 않는 범위에서 신중히 판단해야 한다고 보았고, 학대범죄의 공소시효 정지 규정은 완성되지 않은 공소시효의 진행을 일정 요건에서 장래를 향해 정지시키는 것으로 시행일 당시 범죄행위가 종료됐으나 아직 시효가 완성되지 않은 학대범죄에도 적용된다고 판시했습니다. 요양시설 노인 폭행 사안에서도 시효 정지 여부를 검토해볼 수 있습니다.',
        takeaway: '요양시설 + 종사자 폭행 + 뒤늦은 발견 결합 시 신고·CCTV 확보·고소·공소시효 검토 영역 — CCTV 보존 요청·멍 사진 확보 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '시간이 지나 알게 된 일도 처벌이 되나요?',
        answer:
          '<strong>학대범죄는 공소시효 정지 특례가 적용될 수 있어 처벌 가능성을 검토해볼 수 있는 영역입니다.</strong> 발생·발견 시점을 정리.',
      },
      {
        question: '시설 CCTV를 보호자가 볼 수 있나요?',
        answer:
          '<strong>보존 요청·열람을 통해 확인할 수 있는 영역입니다.</strong> 영상이 사라지지 않도록 보존 요청을 가장 먼저 진행.',
      },
      {
        question: '부모님이 정확히 말씀을 못 하셔도 신고가 되나요?',
        answer:
          '<strong>멍·상처 사진과 요양일지·간호기록 같은 객관 자료로 정황을 정리하는 영역입니다.</strong> 발견 날짜와 함께 기록.',
      },
      {
        question: '\'넘어졌다\'고 하면 어떻게 다투나요?',
        answer:
          '<strong>부상 부위·형태와 CCTV·진술로 폭행 여부를 따지는 영역입니다.</strong> 진단·정황 자료를 함께 확보.',
      },
      {
        question: '시설에도 책임을 물을 수 있나요?',
        answer:
          '<strong>종사자 외 시설의 관리·사용자 책임을 검토할 수 있는 영역입니다.</strong> 입소 계약서·기록을 갖춰 정리.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '노인학대 신고 절차', href: '/guide/assault/assault-elder-abuse-report' },
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: 'CCTV 영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
      { label: '공소시효·고소기간', href: '/guide/assault/assault-statute-of-limitations' },
      { label: '범죄피해자 지원 제도', href: '/guide/assault/assault-victim-support-system' },
    ],
  },

  // ─── 5. dui-accident-leave-scene-track ───
  {
    domain: 'dui',
    slug: 'dui-accident-leave-scene-track',
    keyword: '음주 사고 후 도주 적용법조 다툼',
    questionKeyword: '술을 마신 상태에서 접촉사고를 내고 당황해 잠깐 자리를 떴는데, 음주에 도주치상·사고후미조치까지 묶여 무겁게 처리될 수 있다고 합니다. 어떤 법조가 적용되는지 다툴 수 있나요?',
    ctaKeyword: '음주 사고 후 도주 적용법조 대응 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '음주 사고 후 도주 — 5단계 적용법조·대응 점검 | 로앤가이드',
      description:
        '음주 상태로 사고 내고 자리를 떠 도주치상까지 묶일 수 있다면 적용법조·고의·양형 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술을 마신 상태에서 운전하다 접촉사고를 냈고, 순간 당황해 차에서 내려 잠시 그 자리를 벗어났다가 다시 돌아온 상황입니다. 그런데 음주운전에 더해 도주치상과 사고후미조치까지 함께 묶여 훨씬 무겁게 처리될 수 있다는 말을 들었어요. 다칠 만큼 큰 사고도 아니었고 도망갈 생각은 없었는데, 어떤 법조가 적용되는지, 혐의를 받고 있다면 어떻게 다퉈야 하는지 막막한 상태입니다." 도로교통법 제44조 제1항은 술에 취한 상태의 운전을 금지하고, 같은 법은 사고 후 조치의무를, 특정범죄가중처벌등에관한법률 제5조의3은 도주치상을 정하는 영역입니다. 판례·실무는 법원이 공소장 변경 없이 직권으로 검사가 적용하지 않은 더 무거운 법조를 적용해 처벌하는 것은, 피고인의 방어권 행사에 실질적 불이익을 초래하는 경우 불고불리 원칙에 반할 수 있다고 보는 본 사례 흐름이 있는 영역입니다. 음주 + 사고 + 현장 이탈 결합은 \'적용법조·도주 고의\' 다툼이 검토될 수 있는 트랙입니다. 혐의를 받고 있다면 ① 사고 경위 ② 이탈·복귀 정황 ③ 적용법조 ④ 양형·감경 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 경위 ② 이탈 ③ 법조 ④ 양형 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주 사고 후 도주 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고 경위·이탈/복귀 정황·적용법조·양형·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사고 경위</strong> — 사고 시각·장소·피해 정도·음주 측정 결과 정리.</li>\n<li><strong>② 이탈·복귀 정황</strong> — 현장을 떠난 경위·시간, 복귀·신고 여부 정리.</li>\n<li><strong>③ 적용법조</strong> — 음주·사고후미조치·도주치상 중 어떤 법조가 적용되는지 검토.</li>\n<li><strong>④ 양형·감경</strong> — 초범·반성·피해 회복·합의 등 양형 사정 정리.</li>\n<li><strong>⑤ 대응</strong> — 수사·재판 대응, 도주 고의·방어권 쟁점 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 검사가 적용한 법조보다 더 무거운 법조를 법원이 공소장 변경 없이 직권으로 적용해 처벌하는 것은 방어권에 실질적 불이익을 줄 수 있어 신중히 판단되는 영역. 도주 고의가 있었는지, 어떤 법조가 적용되는지가 핵심 다툼이 되는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고·측정 자료 확보 (즉시~당일)</strong> — 사고 경위·피해 정도·음주 측정 결과·블랙박스 영상 확인.</li>\n<li><strong>2단계 — 이탈·복귀 정황 정리 (수일 내)</strong> — 현장을 떠난 시간·이유, 복귀·신고·구호 조치 여부 기록.</li>\n<li><strong>3단계 — 수사 대응 (수사기관 일정)</strong> — 진술 일관성 유지, 도주 고의·적용법조 쟁점 정리.</li>\n<li><strong>4단계 — 양형·합의 자료 정리 (병행)</strong> — 피해 회복·합의, 초범·반성 자료 준비.</li>\n<li><strong>5단계 — 재판·처분 대응 (검찰 처분 후)</strong> — 기소 시 변론 방향·감경 자료 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 탄원서와 감경 요소, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주 사고 후 도주 적용법조 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사고 경위·이탈 정황·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>교통사고사실확인원·사고 경위 자료</strong></li>\n<li><strong>음주 측정 결과지 (혈중알코올농도)</strong></li>\n<li><strong>블랙박스·현장 CCTV 영상</strong></li>\n<li><strong>현장 이탈·복귀 시간·경위 메모 (시간순)</strong></li>\n<li><strong>피해 정도·치료·수리 내역 (피해 산정)</strong></li>\n<li><strong>합의서·피해 회복 자료 (확보 시)</strong></li>\n<li><strong>초범·반성·생계 등 양형 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 현장을 떠난 시간과 이유, 곧 돌아와 구호·신고 조치를 했는지가 도주 고의 판단에 영향을 줄 수 있어 시간순으로 정리해두는 것이 도움이 됩니다. 어떤 법조가 적용되는지에 따라 형의 경중이 크게 달라질 수 있으므로 사고·이탈 정황을 사실대로 갖춰두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>적용법조</strong> — 음주·사고후미조치·도주치상 중 무엇이 적용되는지.</li>\n<li><strong>도주 고의</strong> — 도주 의사가 있었는지, 곧 복귀·구호했는지.</li>\n<li><strong>방어권</strong> — 더 무거운 법조의 직권 적용이 방어권을 침해하는지.</li>\n<li><strong>피해 정도</strong> — 상해 발생·정도와 치상 성립 여부.</li>\n<li><strong>양형 사정</strong> — 피해 회복·합의·초범·반성 등.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공소장 변경 없는 직권 법조 적용과 방어권',
        summary:
          '대법원 2019도4608(대법원, 2019.06.13 선고) 영역에서 법원은 피고인의 방어권 행사에 실질적 불이익을 초래할 염려가 없는 경우에는 법원이 공소장변경 없이 일부 다른 사실을 인정하거나 적용법조를 수정해도 불고불리 원칙에 위배되지 않으나, 실질적 불이익을 초래하는지는 공소사실의 기본적 동일성과 함께 법정형의 경중 차이 등을 종합해 판단해야 한다고 판시했습니다. 검사가 가벼운 법조로 기소한 음주운전 사건에서 법원이 공소장변경 없이 직권으로 더 무거운 법조를 적용해 처벌하는 것은 불고불리 원칙에 반해 방어권에 실질적 불이익을 초래한다고 본 사례입니다. 음주 사고 후 도주 사안에서도 적용법조와 방어권을 검토해볼 수 있습니다.',
        takeaway: '음주 + 사고 + 현장 이탈 결합 시 적용법조·도주 고의 검토 영역 — 사고·이탈 정황 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '잠깐 자리를 떴다 돌아왔는데 도주가 되나요?',
        answer:
          '<strong>도주 의사와 곧 복귀·구호 조치 여부에 따라 평가가 달라질 수 있는 영역입니다.</strong> 이탈·복귀 시간을 시간순으로 정리.',
      },
      {
        question: '음주에 도주치상까지 다 묶이면 형이 많이 무거워지나요?',
        answer:
          '<strong>적용법조에 따라 형의 경중이 크게 달라질 수 있는 영역입니다.</strong> 사고·이탈 정황과 피해 정도를 갖춰 검토.',
      },
      {
        question: '법원이 더 무거운 법조를 마음대로 적용할 수 있나요?',
        answer:
          '<strong>방어권에 실질적 불이익을 주는 직권 법조 변경은 신중히 판단되는 영역입니다.</strong> 적용법조 쟁점을 정리.',
      },
      {
        question: '피해가 크지 않으면 도주치상이 안 되나요?',
        answer:
          '<strong>상해 발생·정도에 따라 치상 성립 여부가 달라지는 영역입니다.</strong> 피해 정도·치료 내역을 확인.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>사고 경위·측정 결과·이탈 정황 확보가 출발점인 영역입니다.</strong> 블랙박스·신고 기록을 함께 정리.',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주 사고 후 도주·미조치', href: '/guide/dui/dui-hit-and-run-failure-measure' },
      { label: '도주치상 성립 기준', href: '/guide/dui/dui-escape-injury-standard' },
      { label: '음주운전 양형·감경', href: '/guide/dui/dui-sentencing-mitigation-factors' },
      { label: '교통사고 합의·피해 회복', href: '/guide/dui/dui-accident-settlement-recovery' },
      { label: '음주운전 행정심판 절차', href: '/guide/dui/dui-administrative-appeal-procedure' },
    ],
  },

  // ─── 6. dui-license-revocation-admin-appeal-track ───
  {
    domain: 'dui',
    slug: 'dui-license-revocation-admin-appeal-track',
    keyword: '음주 면허취소 행정심판 청구',
    questionKeyword: '음주운전으로 면허가 취소돼 생계 운전이 막막한데, 행정심판으로 취소를 다투거나 감경받을 수 있을지 모르겠어요. 청구 기한과 준비서류를 어떤 순서로 챙겨야 하나요?',
    ctaKeyword: '음주 면허취소 행정심판 준비서류 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '음주 면허취소 행정심판 — 5단계 청구·감경 점검 | 로앤가이드',
      description:
        '음주로 면허가 취소돼 생계가 막막하다면 행정심판 90일 청구·재량·준비서류 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"음주운전으로 운전면허가 취소돼 당장 출퇴근과 생계 운전이 막막해진 상황입니다. 형사 처벌과는 별개로 면허취소 자체를 행정심판으로 다투거나 감경받을 수 있다는 말을 들었는데, 청구 기한이 정해져 있다고 해서 마음이 급해요. 혐의를 받고 있다면 행정심판 청구가 가능한지, 어떤 자료를 어떤 순서로 준비해야 하는지, 생계 사정이 감경에 반영되는지 막막한 상태입니다." 도로교통법은 음주운전 시 운전면허 취소·정지 처분을 정하고, 행정심판법은 처분이 있음을 안 날부터 90일 이내, 처분이 있었던 날부터 180일 이내 청구하도록 정하는 영역입니다. 판례·실무는 음주운전 면허취소 여부는 행정청의 재량행위이나, 음주운전으로 인한 교통사고 방지라는 공익상 필요가 중시돼 취소로 입을 당사자 불이익보다 일반예방적 측면이 더 강조될 수 있다고 보는 본 사례 흐름이 있는 영역입니다. 음주 + 면허취소 + 생계 사정 결합은 \'행정심판 청구·재량·감경\' 검토가 가능한 트랙입니다. 혐의를 받고 있다면 ① 처분 확인 ② 청구 기한 ③ 재량·감경 사유 ④ 준비서류 ⑤ 심리·결정 5중 트랙이 가능한 영역. 대응은 ① 처분 ② 기한 ③ 사유 ④ 서류 ⑤ 심리 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주 면허취소 행정심판 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 처분 확인·청구 기한·재량/감경 사유·준비서류·심리 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 처분 확인</strong> — 취소처분서·취소 사유·혈중알코올농도·처분일 확인.</li>\n<li><strong>② 청구 기한</strong> — 처분을 안 날부터 90일·있었던 날부터 180일 이내 청구 검토.</li>\n<li><strong>③ 재량·감경 사유</strong> — 생계·반성·운전 경력 등 감경 사유 정리.</li>\n<li><strong>④ 준비서류</strong> — 청구서·처분서·생계 입증 자료 등 준비.</li>\n<li><strong>⑤ 심리·결정</strong> — 행정심판위 심리·재결 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 음주운전 면허취소는 행정청의 재량행위이나, 음주운전 사고 방지라는 공익상 필요가 중시돼 당사자 불이익보다 일반예방적 측면이 강조될 수 있는 영역. 형사 절차와 별도인 행정심판 90일 청구 기한을 놓치지 않는 것이 출발점인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 행정심판 대응 5단계',
        content:
          '<p><strong>A. 국민권익위 행정심판·경찰·도로교통공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 처분 내용 확인 (즉시)</strong> — 취소처분서·취소 사유·혈중알코올농도·처분일 확인.</li>\n<li><strong>2단계 — 청구 기한 점검 (90일/180일 내)</strong> — 처분을 안 날부터 90일 이내 행정심판 청구 검토.</li>\n<li><strong>3단계 — 감경 사유·자료 정리 (수일 내)</strong> — 생계·반성·운전 경력·이용 빈도 자료 준비.</li>\n<li><strong>4단계 — 행정심판 청구서 제출 (기한 내)</strong> — 중앙행정심판위에 청구서·증빙 제출.</li>\n<li><strong>5단계 — 심리·재결 대응 (위원회 일정)</strong> — 심리 의견 제출, 재결 결과에 따른 후속 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주 면허취소 행정심판 청구·감경 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 처분 확인·청구·감경 갈래입니다.</strong></p>\n<ul>\n<li><strong>운전면허취소처분 통지서 (처분일·사유)</strong></li>\n<li><strong>행정심판 청구서 (청구 취지·이유)</strong></li>\n<li><strong>주취운전자 적발보고서·측정 결과지</strong></li>\n<li><strong>생계·운전 필요성 입증 자료 (재직·사업)</strong></li>\n<li><strong>운전면허 정보·무사고 운전 경력 자료</strong></li>\n<li><strong>반성문·가족 부양 등 정상 자료</strong></li>\n<li><strong>처분일·통지 수령일 확인 자료 (기한 산정)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 행정심판은 처분을 안 날부터 90일 이내가 핵심 기한이므로 통지 수령일을 먼저 확인해 기한을 놓치지 않는 것이 안전합니다. 면허취소는 일반예방적 측면이 강조될 수 있어 생계·운전 필요성을 구체적 자료로 정리해두는 것이 도움이 되는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>청구 기한</strong> — 처분을 안 날부터 90일 이내 청구했는지.</li>\n<li><strong>재량·일반예방</strong> — 당사자 불이익보다 공익이 강조되는지.</li>\n<li><strong>감경 사유</strong> — 생계·반성·운전 경력 등 참작 정도.</li>\n<li><strong>처분 사유</strong> — 혈중알코올농도·취소 기준 충족 여부.</li>\n<li><strong>형사·행정 병행</strong> — 형사 처벌과 별도 트랙 진행.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 음주운전 면허취소의 재량과 강조되어야 할 측면',
        summary:
          '대법원 2017두67476(대법원, 2018.02.28 선고) 영역에서 법원은 운전면허를 받은 사람이 음주운전을 한 경우 운전면허의 취소 여부는 행정청의 재량행위이나, 음주운전으로 인한 교통사고의 증가와 결과의 참혹성에 비추어 사고를 방지할 공익상의 필요가 더욱 중시돼야 하고, 운전면허 취소에서는 일반의 수익적 행정행위 취소와 달리 취소로 입게 될 당사자의 불이익보다 이를 방지해야 하는 일반예방적 측면이 더욱 강조되어야 한다고 판시했습니다. 음주 면허취소 행정심판 사안에서도 재량과 감경 사유를 검토해볼 수 있습니다.',
        takeaway: '음주 + 면허취소 + 생계 사정 결합 시 행정심판 청구·재량·감경 검토 영역 — 90일 청구 기한·생계 자료 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '면허취소를 행정심판으로 다툴 수 있나요?',
        answer:
          '<strong>처분을 안 날부터 90일 이내 행정심판 청구를 검토할 수 있는 영역입니다.</strong> 통지 수령일을 먼저 확인해 기한을 점검.',
      },
      {
        question: '생계 사정이 감경에 반영되나요?',
        answer:
          '<strong>생계·운전 필요성은 참작 사유가 될 수 있으나 일반예방적 측면이 강조될 수 있는 영역입니다.</strong> 구체적 자료로 정리.',
      },
      {
        question: '형사 처벌과 행정심판은 따로 진행하나요?',
        answer:
          '<strong>형사 절차와 행정심판은 별개 트랙으로 진행되는 영역입니다.</strong> 각각의 기한·절차를 구분해 준비.',
      },
      {
        question: '청구 기한을 놓치면 어떻게 되나요?',
        answer:
          '<strong>90일 청구 기한이 지나면 다툼이 어려워질 수 있는 영역입니다.</strong> 통지 수령일 기준으로 서둘러 검토.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>취소처분 통지서·측정 결과지 확보가 출발점인 영역입니다.</strong> 생계·운전 경력 자료를 함께 정리.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 행정심판 절차', href: '/guide/dui/dui-administrative-appeal-procedure' },
      { label: '면허취소·정지 기준', href: '/guide/dui/dui-license-revocation-suspension-standard' },
      { label: '생계형 운전 감경', href: '/guide/dui/dui-livelihood-driving-mitigation' },
      { label: '음주운전 양형·감경', href: '/guide/dui/dui-sentencing-mitigation-factors' },
      { label: '음주 측정 절차', href: '/guide/dui/dui-breath-test-procedure' },
    ],
  },

  // ─── 7. dui-personal-mobility-scooter-track ───
  {
    domain: 'dui',
    slug: 'dui-personal-mobility-scooter-track',
    keyword: '전동킥보드 음주 단속 처벌 여부',
    questionKeyword: '술을 마시고 전동킥보드를 타다 단속됐는데, 킥보드는 자전거로 분류된다는 말도 있고 음주운전으로 처벌된다는 말도 있어요. 자동차도 아닌데 처벌되는지, 가중처벌까지 되는지 막막합니다.',
    ctaKeyword: '전동킥보드 음주 단속 처벌 여부 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '전동킥보드 음주 단속 — 5단계 처벌·분류 점검 | 로앤가이드',
      description:
        '술 마시고 전동킥보드를 타다 단속됐는데 자전거 분류라 괜찮은지 막막하다면 처벌 여부·분류 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술을 마신 뒤 가까운 거리를 전동킥보드로 이동하다 음주 단속에 걸린 상황입니다. 전동킥보드는 \'자전거 등\'으로 분류된다는 말을 들어서 자동차 음주운전과는 다르게 처리될 줄 알았는데, 음주운전으로 단속됐고 경우에 따라 가중처벌까지 될 수 있다는 말도 들었어요. 자동차도 아닌데 처벌이 되는 건지, 사람을 다치게 했을 때 가중처벌 대상이 되는지, 혐의를 받고 있다면 어떻게 대응해야 하는지 막막한 상태입니다." 도로교통법 제44조 제1항은 술에 취한 상태의 운전을 금지하고, 도로교통법은 전동킥보드 같은 개인형 이동장치를 \'자전거 등\'으로 분류하면서도 원동기장치자전거 내에 포함되는 것으로 정하는 영역입니다. 판례·실무는 개인형 이동장치가 \'자전거 등\'으로 분류됐더라도 그 정의상 원동기장치자전거 내에 포함돼 있고, 분류 변경이 형법상 \'범죄 후 법률 변경으로 행위가 범죄를 구성하지 않게 된 경우\'에 해당하지는 않는다고 보는 본 사례 흐름이 있는 영역입니다. 전동킥보드 + 음주 + 단속 결합은 \'처벌 여부·이동장치 분류\' 다툼이 검토될 수 있는 트랙입니다. 혐의를 받고 있다면 ① 단속 경위 ② 측정 결과 ③ 분류·적용법조 ④ 양형·감경 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 경위 ② 측정 ③ 분류 ④ 양형 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 전동킥보드 음주 단속 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 단속 경위·측정 결과·분류/적용법조·양형·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 단속 경위</strong> — 단속 시각·장소·운행 구간·측정 절차 정리.</li>\n<li><strong>② 측정 결과</strong> — 혈중알코올농도·측정 방법·이의 여부 정리.</li>\n<li><strong>③ 분류·적용법조</strong> — 개인형 이동장치의 원동기장치자전거 해당·적용법조 검토.</li>\n<li><strong>④ 양형·감경</strong> — 운행 거리·초범·반성 등 양형 사정 정리.</li>\n<li><strong>⑤ 대응</strong> — 수사·재판 대응, 분류·측정 적법성 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 전동킥보드가 \'자전거 등\'으로 분류됐더라도 그 정의상 원동기장치자전거 내에 포함될 수 있어 음주운전 단속·처벌 대상이 될 수 있는 영역. 사람을 다치게 한 경우 가중처벌 규정의 적용 여부가 핵심 다툼이 되는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단속·측정 자료 확보 (즉시~당일)</strong> — 단속결과통보·측정 결과지·운행 구간·측정 방법 확인.</li>\n<li><strong>2단계 — 운행·분류 정황 정리 (수일 내)</strong> — 운행 거리·도로 구간, 이동장치 종류·제원 기록.</li>\n<li><strong>3단계 — 수사 대응 (수사기관 일정)</strong> — 진술 일관성 유지, 분류·적용법조·측정 절차 검토.</li>\n<li><strong>4단계 — 양형·합의 자료 정리 (병행)</strong> — 피해 발생 시 합의, 초범·반성 자료 준비.</li>\n<li><strong>5단계 — 재판·처분 대응 (검찰 처분 후)</strong> — 기소 시 변론 방향·감경 자료 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 탄원서와 감경 요소, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">전동킥보드 음주 단속 처벌·분류 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 단속 경위·분류·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>음주 측정 결과지 (혈중알코올농도)</strong></li>\n<li><strong>단속결과통보·주취운전자 적발보고서</strong></li>\n<li><strong>운행 구간·거리·도로 해당 여부 자료</strong></li>\n<li><strong>전동킥보드 종류·제원 자료 (정격출력·중량)</strong></li>\n<li><strong>단속 현장 CCTV·블랙박스 영상 (확보 가능 시)</strong></li>\n<li><strong>피해 발생 시 합의·피해 회복 자료</strong></li>\n<li><strong>초범·반성·생계 등 양형 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 전동킥보드가 \'자전거 등\'으로 분류돼도 음주운전 단속 대상이 될 수 있으므로 단속·측정 경위를 시간순으로 정리해두는 것이 도움이 됩니다. 사람을 다치게 한 경우 가중처벌 규정 적용이 문제될 수 있어 운행 정황과 피해 정도를 함께 갖춰두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>이동장치 분류</strong> — 개인형 이동장치가 원동기장치자전거에 해당하는지.</li>\n<li><strong>처벌 여부</strong> — \'자전거 등\' 분류와 음주운전 처벌의 관계.</li>\n<li><strong>가중처벌</strong> — 위험운전치상 등 가중 규정의 적용 여부.</li>\n<li><strong>측정 절차</strong> — 측정 방법·절차의 적법성.</li>\n<li><strong>양형 사정</strong> — 운행 거리·초범·반성 등.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 개인형 이동장치의 원동기장치자전거 해당 여부',
        summary:
          '대법원 2022도13430(대법원, 2023.06.29 선고) 영역에서 법원은 전동킥보드 같은 개인형 이동장치가 구 특정범죄가중처벌등에관한법률의 \'원동기장치자전거\'에 포함된다고 보았고, 2020년 개정 도로교통법이 개인형 이동장치를 \'자동차 등\'이 아닌 \'자전거 등\'으로 분류했더라도 그 정의상 원동기장치자전거 내에 포함돼 있음을 전제로 한 것이어서, 이러한 분류 변경이 형법 제1조 제2항의 \'범죄 후 법률이 변경되어 그 행위가 범죄를 구성하지 아니하게 된 경우\'에 해당하지 않는다고 판시했습니다. 전동킥보드 음주 단속 사안에서도 분류와 처벌 여부를 검토해볼 수 있습니다.',
        takeaway: '전동킥보드 + 음주 + 단속 결합 시 처벌 여부·이동장치 분류 검토 영역 — 단속·측정 경위·제원 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '전동킥보드는 자전거라 음주운전이 아닌 거 아닌가요?',
        answer:
          '<strong>\'자전거 등\'으로 분류됐어도 원동기장치자전거에 포함돼 음주운전 처벌 대상이 될 수 있는 영역입니다.</strong> 단속·측정 경위를 정리.',
      },
      {
        question: '자동차가 아니어서 가볍게 처리되나요?',
        answer:
          '<strong>분류와 별개로 음주운전으로 단속·처벌될 수 있는 영역입니다.</strong> 운행 정황·측정 결과를 갖춰 검토.',
      },
      {
        question: '킥보드로 사람을 다치게 하면 가중처벌이 되나요?',
        answer:
          '<strong>위험운전치상 등 가중 규정의 적용 여부가 문제될 수 있는 영역입니다.</strong> 피해 정도·운행 정황을 정리.',
      },
      {
        question: '법이 바뀌어 분류가 달라졌는데 다툴 수 있나요?',
        answer:
          '<strong>분류 변경이 곧 처벌 면제로 이어지지는 않을 수 있는 영역입니다.</strong> 적용법조 쟁점을 정리해 검토.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>측정 결과지와 단속·운행 경위 확보가 출발점인 영역입니다.</strong> 킥보드 제원·운행 구간을 함께 기록.',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '전동킥보드 음주 처벌', href: '/guide/dui/dui-electric-scooter-penalty' },
      { label: '개인형 이동장치 분류', href: '/guide/dui/dui-personal-mobility-classification' },
      { label: '음주 측정 절차', href: '/guide/dui/dui-breath-test-procedure' },
      { label: '음주운전 양형·감경', href: '/guide/dui/dui-sentencing-mitigation-factors' },
      { label: '면허취소·정지 기준', href: '/guide/dui/dui-license-revocation-suspension-standard' },
    ],
  },

  // ─── 8. jeonse-fraud-newbuild-villa-inflated-deposit-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-newbuild-villa-inflated-deposit-track',
    keyword: '신축빌라 시세조작 깡통전세 회수',
    questionKeyword: '신축빌라에 전세로 들어왔는데 시세가 부풀려진 깡통전세였고 경매까지 넘어갔어요. 보증기관이 채권을 넘겨받아 배당받았다는데, 보증금 잔액을 어떻게 회수해야 하나요?',
    ctaKeyword: '신축빌라 깡통전세 보증금 회수 순서 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '신축빌라 시세조작 깡통전세 — 5단계 회수·우선변제 점검 | 로앤가이드',
      description:
        '신축빌라 시세조작 깡통전세로 경매까지 넘어갔다면 우선변제권 승계·대항력 유지·배당 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"분양가와 시세가 부풀려진 신축빌라에 전세로 들어왔는데, 알고 보니 보증금이 실제 시세에 육박하는 깡통전세였고 결국 경매까지 넘어간 임차인입니다. 전세보증보험에 가입돼 보증기관이 보증금반환채권을 넘겨받아 경매에서 일부를 배당받았다는데, 그래도 보증금 잔액이 남아 있어요. 대항력과 우선변제권이 어떻게 되는지, 잔액을 어떻게 회수하고 새 매수인에게는 무엇을 주장할 수 있는지 막막한 상태입니다." 주택임대차보호법 제3조 제1항은 주택 인도와 주민등록(전입신고)을 갖춘 대항요건을, 같은 법 제3조의2는 확정일자를 갖춘 우선변제권을, 같은 조 제7항은 일정 금융기관의 보증금반환채권 양수·우선변제권 승계를 정하는 영역입니다. 판례·실무는 대항력과 우선변제권을 겸유한 임차인이 우선변제권을 선택해 배당요구했으나 보증금 전액을 배당받지 못한 경우 여전히 대항요건을 유지해 임대차관계 존속을 주장할 수 있고, 금융기관이 채권을 양수해 일부 배당받은 경우에도 마찬가지라고 보는 본 사례 흐름이 있는 영역입니다. 시세조작 + 깡통전세 + 보증채권 양수 결합은 \'우선변제권 승계·대항력 유지·배당\' 검토가 가능한 트랙입니다. 피해자라면 ① 권리관계 ② 대항·우선변제 ③ 보증·승계 ④ 배당·잔액 ⑤ 소송 5중 트랙이 가능한 영역. 대응은 ① 권리 ② 대항 ③ 보증 ④ 배당 ⑤ 소송 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 신축빌라 깡통전세 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리관계·대항/우선변제·보증/승계·배당/잔액·소송 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리관계</strong> — 등기부 근저당·선순위·경매 진행, 시세·분양가 차이 확인.</li>\n<li><strong>② 대항·우선변제</strong> — 전입·점유·확정일자로 대항력·우선변제권을 갖췄는지.</li>\n<li><strong>③ 보증·승계</strong> — 전세보증보험·보증기관 채권 양수·우선변제권 승계 여부.</li>\n<li><strong>④ 배당·잔액</strong> — 경매 배당 결과와 보증금 잔액 확인.</li>\n<li><strong>⑤ 소송</strong> — 새 매수인 상대 임대차 존속 주장·잔액 회수 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대항력과 우선변제권을 함께 갖춘 임차인이 배당요구했으나 보증금 전액을 배당받지 못하면, 대항요건을 유지하는 한 임차주택 양수인에게 임대차관계 존속을 주장할 수 있는 영역. 보증기관이 채권을 양수해 일부 배당받은 경우에도 잔액을 받을 때까지 존속 주장이 가능할 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·HUG·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리관계·시세 확인 (즉시)</strong> — 등기부·근저당·경매개시, 분양가·실거래가 차이 점검.</li>\n<li><strong>2단계 — 대항요건·보증 정리 (수일 내)</strong> — 전입·확정일자·점유, 보증보험 가입·승계 자료 정리.</li>\n<li><strong>3단계 — 배당요구·임차권등기 (종기 내/이사 전)</strong> — 경매 배당요구, 이사 시 임차권등기명령 검토.</li>\n<li><strong>4단계 — 배당 결과·잔액 확인 (배당 후)</strong> — 배당표·보증기관 배당, 보증금 잔액 산정.</li>\n<li><strong>5단계 — 존속 주장·잔액 회수 (병행)</strong> — 양수인 상대 임대차 존속 주장·보증금반환소송 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">신축빌라 시세조작 깡통전세 회수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리관계·대항요건·보증 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>주민등록등본·전입세대 확인서 (대항요건)</strong></li>\n<li><strong>부동산등기부등본 (근저당·선순위·경매)</strong></li>\n<li><strong>전세보증보험 가입증서·채권 양수 자료</strong></li>\n<li><strong>분양가·실거래가·시세 자료 (깡통 입증)</strong></li>\n<li><strong>경매 배당표·배당요구 자료</strong></li>\n<li><strong>보증금 송금 내역·임대인 교신 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대항력은 전입신고·점유, 우선변제권은 확정일자가 핵심이고 배당으로 전액을 받지 못해도 대항요건을 유지하는 한 양수인에게 임대차 존속을 주장할 수 있어 함부로 전출하지 않는 것이 안전합니다. 분양가·실거래가 차이 자료는 시세조작·깡통 여부를 보여줄 수 있어 함께 모아두는 것이 도움이 되는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대항요건 유지</strong> — 전입·점유·확정일자가 계속 유지되는지.</li>\n<li><strong>우선변제권 승계</strong> — 보증기관 채권 양수와 승계 범위.</li>\n<li><strong>존속 주장</strong> — 잔액 미배당 시 양수인 상대 임대차 존속 주장.</li>\n<li><strong>시세·깡통 여부</strong> — 분양가·실거래가 차이와 보증금 비율.</li>\n<li><strong>회수 범위</strong> — 배당·존속 주장으로 실제 회수 가능 범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 우선변제권 승계와 대항요건 유지 시 존속 주장',
        summary:
          '대법원 2022다255126(대법원, 2023.02.02 선고) 영역에서 법원은 대항력과 우선변제권을 겸유한 임차인이 우선변제권을 선택해 경매절차에서 배당요구했으나 보증금 전액을 배당받지 못한 경우 여전히 대항요건을 유지함으로써 임대차관계의 존속을 주장할 수 있고, 대항력을 구비한 후 임차주택을 양수한 자는 임대인 지위를 당연히 승계한다고 판시했습니다. 이는 주택임대차보호법 제3조의2 제7항의 금융기관이 보증금반환채권을 양수해 우선변제권을 승계한 다음 일부를 배당받은 경우에도 마찬가지여서, 대항요건이 존속하는 한 임차인은 그 금융기관이 보증금 잔액을 반환받을 때까지 양수인을 상대로 임대차 존속을 주장할 수 있다고 보았습니다. 신축빌라 깡통전세 사안에서도 잔액 회수와 존속 주장을 검토해볼 수 있습니다.',
        takeaway: '시세조작 + 깡통전세 + 보증채권 양수 결합 시 우선변제권 승계·대항력 유지·배당 검토 영역 — 전출 전 권리 유지·배당표 확보 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '보증기관이 배당받았는데 잔액은 어떻게 받나요?',
        answer:
          '<strong>대항요건을 유지하는 한 잔액을 받을 때까지 양수인 상대 임대차 존속을 주장할 수 있는 영역입니다.</strong> 배당표·잔액부터 확인.',
      },
      {
        question: '경매로 새 주인이 생겼는데 대항할 수 있나요?',
        answer:
          '<strong>대항력을 구비한 후의 양수인은 임대인 지위를 승계할 수 있는 영역입니다.</strong> 전입·확정일자 시점을 확인.',
      },
      {
        question: '이사를 가야 하는데 권리가 사라지나요?',
        answer:
          '<strong>대항요건은 계속 유지돼야 하므로 전출 전 임차권등기명령(통상 1~2개월)을 검토할 수 있는 영역입니다.</strong> 등기 완료 후 이사 진행.',
      },
      {
        question: '시세가 부풀려진 건 어떻게 입증하나요?',
        answer:
          '<strong>분양가·실거래가·시세 자료로 깡통 여부를 정리하는 영역입니다.</strong> 등기부·시세 자료를 함께 확보.',
      },
      {
        question: '소송은 어디서 도움을 받나요?',
        answer:
          '<strong>법률구조공단(132)에서 보증금반환소송 등 무료 상담을 받아볼 수 있는 영역입니다.</strong> 전세피해지원센터(1533-8119)도 함께 활용.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '깡통전세 보증금 회수', href: '/guide/jeonse-fraud/jeonse-fraud-underwater-deposit-recovery' },
      { label: '대항력·우선변제권 승계', href: '/guide/jeonse-fraud/jeonse-fraud-priority-right-succession' },
      { label: '경매 배당요구 절차', href: '/guide/jeonse-fraud/jeonse-fraud-auction-distribution-claim' },
      { label: '임차권등기명령 신청', href: '/guide/jeonse-fraud/jeonse-fraud-lease-registration-order' },
      { label: '보증금반환소송', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-return-lawsuit' },
    ],
  },

  // ─── 9. jeonse-fraud-fake-landlord-impersonation-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-fake-landlord-impersonation-track',
    keyword: '임대인 행세 가짜 전세계약 보증금',
    questionKeyword: '집주인 행세를 한 사람과 전세계약을 했는데 알고 보니 진짜 소유자가 아니거나 임대권한이 없었어요. 이렇게 가짜 임대인과 한 계약도 대항력이 인정돼 보증금을 지킬 수 있나요?',
    ctaKeyword: '임대인 행세 가짜 전세계약 책임 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '임대인 행세 가짜 전세계약 — 5단계 임대권한·대항력 점검 | 로앤가이드',
      description:
        '집주인 행세를 한 사람과 전세계약을 했는데 임대권한이 없었다면 임대권한·대항력·회수 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중개를 통해 전세계약을 하고 보증금을 보냈는데, 나중에 계약 상대가 진짜 소유자가 아니거나 임대할 권한이 없는 사람이 \'집주인 행세\'를 한 것이었음을 알게 된 임차인입니다. 등기부상 소유자는 따로 있고, 계약 당사자는 적법한 임대권한이 있었는지조차 불분명해요. 이렇게 가짜 임대인과 맺은 계약도 주택임대차보호법상 대항력이 인정되는지, 보증금을 지킬 수 있는지, 누구에게 책임을 물어야 하는지 막막한 상태입니다." 주택임대차보호법 제3조 제1항은 주택 인도와 주민등록을 갖추면 대항력을 인정하고, 같은 법은 확정일자를 갖춘 우선변제권을 정하는 영역입니다. 판례·실무는 대항력은 반드시 소유자인 임대인과의 계약에 한정되지 않고 적법한 임대권한을 가진 자와의 계약도 포함하지만, 임대차의 주된 목적이 주택 사용·수익이 아니라 대항력 있는 임차인으로 보호받아 기존 채권을 회수하려는 데 있는 경우에는 대항력을 인정하기 어렵다고 보는 본 사례 흐름이 있는 영역입니다. 가짜 임대인 + 임대권한 + 대항력 결합은 \'임대권한·계약 목적·대항력\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 권리관계 ② 임대권한 ③ 대항·우선변제 ④ 형사·민사 ⑤ 회수 5중 트랙이 가능한 영역. 대응은 ① 권리 ② 권한 ③ 대항 ④ 형사 ⑤ 회수 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 임대인 행세 가짜 전세계약 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리관계·임대권한·대항/우선변제·형사/민사·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리관계</strong> — 등기부 소유자·근저당·계약 당사자 일치 여부 확인.</li>\n<li><strong>② 임대권한</strong> — 계약 상대가 적법한 임대권한(위임·대리)을 가졌는지.</li>\n<li><strong>③ 대항·우선변제</strong> — 전입·점유·확정일자로 대항력·우선변제권을 갖췄는지.</li>\n<li><strong>④ 형사·민사</strong> — 기망·임대인 사칭 시 고소, 계약 상대·중개사 손해배상 검토.</li>\n<li><strong>⑤ 회수</strong> — 보증금 반환·배상 등 회수 경로 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대항력은 소유자와의 계약뿐 아니라 적법한 임대권한을 가진 자와의 계약에도 인정될 수 있는 영역. 다만 계약의 주된 목적이 주택 사용·수익이 아니라 보호받는 임차인 지위로 채권을 회수하려는 데 있다면 대항력 인정이 어려울 수 있어, 임대권한과 계약 목적이 핵심 다툼이 되는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수·대응 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·경찰·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·계약 자료 확보 (즉시)</strong> — 등기부·계약서·위임장·신분 자료·송금 내역 확보.</li>\n<li><strong>2단계 — 임대권한·대항요건 정리 (수일 내)</strong> — 계약 상대의 임대권한, 전입·확정일자 점검.</li>\n<li><strong>3단계 — 형사 고소 검토 (가능한 빨리)</strong> — 임대인 사칭·기망 정황 시 사기 고소 검토.</li>\n<li><strong>4단계 — 임차권등기·배당요구 (이사 전/종기 내)</strong> — 권리 유지 위해 임차권등기명령·배당요구 검토.</li>\n<li><strong>5단계 — 민사 회수 (병행)</strong> — 계약 상대·중개사 상대 보증금 반환·손해배상 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 보증금 돌려받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">임대인 행세 가짜 전세계약 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리관계·임대권한·회수 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>부동산등기부등본 (소유자·근저당)</strong></li>\n<li><strong>위임장·대리권 자료 (임대권한 입증)</strong></li>\n<li><strong>계약 상대 신분 자료·연락처</strong></li>\n<li><strong>주민등록등본·전입세대 확인서 (대항요건)</strong></li>\n<li><strong>보증금 송금 내역·영수증</strong></li>\n<li><strong>중개대상물 확인·설명서·중개사 교신 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 계약 상대가 등기부상 소유자와 일치하는지, 위임·대리 등 적법한 임대권한이 있었는지가 대항력 판단의 핵심이 되므로 위임장·신분 자료를 함께 확보해두는 것이 안전합니다. 계약의 주된 목적이 거주인지도 쟁점이 될 수 있어 실제 거주·점유 정황을 정리해두는 것이 도움이 되는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임대권한</strong> — 계약 상대가 적법한 임대권한을 가졌는지.</li>\n<li><strong>계약 목적</strong> — 주택 사용·수익이 주된 목적인지.</li>\n<li><strong>대항력 인정</strong> — 가짜 임대인 계약에 대항력이 인정되는지.</li>\n<li><strong>기망·사칭</strong> — 임대인 사칭·기망 등 사기 정황.</li>\n<li><strong>회수 범위</strong> — 보증금 반환·중개사 배상 등 회수 가능 범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임대차 목적과 대항력 인정 여부',
        summary:
          '대법원 2007다55088(대법원, 2007.12.13 선고) 영역에서 법원은 임대차계약의 주된 목적이 주택을 사용·수익하려는 데 있지 않고 대항력 있는 임차인으로 보호받아 기존 채권을 회수하려는 데 있는 경우에는 주택임대차보호법상의 대항력이 인정되지 않을 수 있다고 보았고, 부모가 삼촌에 대한 대여금채권을 임대차보증금으로 대체하기로 하고 임대차계약을 체결한 사안에서 그 주된 목적이 대항력 있는 임차인으로 보호받아 대여금채권을 우선변제받으려는 것인지 더 심리해야 한다는 이유로 원심을 파기했습니다. 가짜 임대인·임대권한이 문제되는 사안에서도 계약 목적과 대항력을 검토해볼 수 있습니다.',
        takeaway: '가짜 임대인 + 임대권한 + 대항력 결합 시 임대권한·계약 목적·대항력 검토 영역 — 위임장·신분 자료·거주 정황 확보 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '소유자가 아닌 사람과 한 계약도 대항력이 있나요?',
        answer:
          '<strong>적법한 임대권한을 가진 자와의 계약이면 대항력이 인정될 수 있는 영역입니다.</strong> 위임·대리 등 임대권한부터 확인.',
      },
      {
        question: '집주인 행세를 한 사람을 처벌할 수 있나요?',
        answer:
          '<strong>임대인 사칭·기망 정황이 있으면 사기 등 형사 고소를 검토할 수 있는 영역입니다.</strong> 계약·송금 자료를 갖춰 신고.',
      },
      {
        question: '실제로 살지 않으면 보호가 안 되나요?',
        answer:
          '<strong>계약의 주된 목적이 거주가 아니라면 대항력 인정이 어려울 수 있는 영역입니다.</strong> 실제 거주·점유 정황을 정리.',
      },
      {
        question: '중개사에게도 책임을 물을 수 있나요?',
        answer:
          '<strong>임대권한·권리관계 확인·설명 소홀이 있으면 중개사 책임을 검토할 수 있는 영역입니다.</strong> 확인·설명서·교신 기록을 확보.',
      },
      {
        question: '보증금은 누구에게 청구하나요?',
        answer:
          '<strong>계약 상대·책임 주체에 따라 반환·배상 청구를 검토하는 영역입니다.</strong> 권리관계와 책임 주체를 먼저 정리.',
      },
    ],
    cta: { text: '보증금 돌려받을 수 있는지 AI로 점검하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '임대권한·대항력', href: '/guide/jeonse-fraud/jeonse-fraud-lease-authority-opposing-power' },
      { label: '전세사기 형사 고소', href: '/guide/jeonse-fraud/jeonse-fraud-criminal-complaint' },
      { label: '확정일자·우선변제', href: '/guide/jeonse-fraud/jeonse-fraud-opposing-power-fixed-date' },
      { label: '중개사 책임·공제 청구', href: '/guide/jeonse-fraud/jeonse-fraud-agent-liability-claim' },
      { label: '보증금반환소송', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-return-lawsuit' },
    ],
  },

  // ─── 10. jeonse-fraud-trust-property-unauthorized-lease-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-trust-property-unauthorized-lease-track',
    keyword: '신탁 부동산 무단 임대 보증금',
    questionKeyword: '전세계약을 하고 보니 집이 신탁회사 명의로 돼 있었고, 위탁자가 신탁회사 동의 없이 저와 계약을 했더라고요. 이런 신탁 부동산 무단 임대도 대항력이 인정돼 보증금을 지킬 수 있나요?',
    ctaKeyword: '신탁 부동산 무단 임대 대항력 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '신탁 부동산 무단 임대 — 5단계 임대권한·대항력 점검 | 로앤가이드',
      description:
        '신탁회사 명의 집을 위탁자가 동의 없이 임대했다면 적법한 임대권한·대항력 취득 시점 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세계약을 하고 전입·확정일자까지 마쳤는데, 알고 보니 집이 신탁회사 명의로 등기돼 있었고 실제 소유자였던 위탁자가 신탁회사의 동의 없이 저와 임대차계약을 맺은 것이었음을 뒤늦게 알게 된 임차인입니다. 이후 위탁자가 신탁재산 귀속으로 다시 소유권을 회복했고, 그 무렵 다른 근저당까지 설정됐다고 해요. 이런 신탁 부동산 무단 임대도 대항력이 인정되는지, 근저당보다 앞서 보증금을 지킬 수 있는지 막막한 상태입니다." 주택임대차보호법 제3조 제1항은 주택 인도와 주민등록을 갖춘 대항요건을, 같은 법은 확정일자를 갖춘 우선변제권을 정하는 영역입니다. 판례·실무는 대항력은 소유자가 아니더라도 적법한 임대권한을 가진 임대인과의 계약에도 적용되고, 담보신탁의 위탁자가 수탁자 동의 없이 임대차계약을 체결한 뒤 수탁자로부터 소유권을 회복한 때에는 그 계약에 대해서도 대항력 규정이 적용될 수 있다고 보는 본 사례 흐름이 있는 영역입니다. 신탁 + 무단 임대 + 소유권 회복 결합은 \'적법한 임대권한·대항력 취득 시점\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 신탁·권리관계 ② 임대권한 ③ 대항·취득시점 ④ 우선순위 ⑤ 회수 5중 트랙이 가능한 영역. 대응은 ① 신탁 ② 권한 ③ 대항 ④ 순위 ⑤ 회수 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 신탁 부동산 무단 임대 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신탁/권리관계·임대권한·대항/취득시점·우선순위·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 신탁·권리관계</strong> — 등기부 신탁·수탁자·위탁자, 소유권 회복·근저당 시점 확인.</li>\n<li><strong>② 임대권한</strong> — 계약 당시 위탁자에게 임대권한이 있었는지, 수탁자 동의 여부.</li>\n<li><strong>③ 대항·취득시점</strong> — 전입·점유·확정일자와 소유권 회복 시점의 선후.</li>\n<li><strong>④ 우선순위</strong> — 임차권 대항력과 근저당 등 선순위 권리의 순위.</li>\n<li><strong>⑤ 회수</strong> — 보증금 반환·배당 등 회수 경로 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 담보신탁 위탁자가 수탁자 동의 없이 임대차계약을 체결한 뒤 수탁자로부터 소유권을 회복하면 그 계약에 대항력 규정이 적용될 수 있고, 임차인은 소유권 회복(이전등기) 즉시 대항력을 취득할 수 있는 영역. 대항력 취득 시점과 근저당의 선후가 핵심 다툼이 되는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수·대응 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·경매법원·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신탁·권리 자료 확보 (즉시)</strong> — 등기부·신탁원부·계약서·확정일자·근저당 설정일 확보.</li>\n<li><strong>2단계 — 임대권한·취득시점 정리 (수일 내)</strong> — 위탁자 임대권한·수탁자 동의, 전입·소유권 회복 선후 점검.</li>\n<li><strong>3단계 — 임차권등기·배당요구 (이사 전/종기 내)</strong> — 권리 유지 위해 임차권등기명령·배당요구 검토.</li>\n<li><strong>4단계 — 우선순위 검토 (병행)</strong> — 임차권 대항력과 근저당 등 선순위 권리 순위 정리.</li>\n<li><strong>5단계 — 민사·회수 (병행)</strong> — 보증금 반환·배당, 사기 정황 시 형사 고소 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 보증금 돌려받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">신탁 부동산 무단 임대 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 신탁·임대권한·우선순위 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>부동산등기부등본·신탁원부 (신탁·수탁자)</strong></li>\n<li><strong>소유권 회복(귀속) 등기·근저당 설정 자료</strong></li>\n<li><strong>위탁자 임대권한·수탁자 동의 자료</strong></li>\n<li><strong>주민등록등본·전입세대 확인서 (대항요건)</strong></li>\n<li><strong>보증금 송금 내역·영수증</strong></li>\n<li><strong>중개대상물 확인·설명서·교신 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 신탁등기·신탁원부로 수탁자·위탁자와 임대권한 관계를 먼저 확인하고, 전입·확정일자와 소유권 회복·근저당 설정일의 선후를 시간순으로 정리해두는 것이 대항력·우선순위 판단에 도움이 됩니다. 계약 당시 신탁 사실과 동의 여부를 어떻게 안내받았는지도 함께 정리해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임대권한</strong> — 위탁자 임대권한·수탁자 동의 여부.</li>\n<li><strong>대항력 취득시점</strong> — 소유권 회복(이전등기) 시점과 대항력 취득.</li>\n<li><strong>우선순위</strong> — 임차권 대항력과 근저당의 선후.</li>\n<li><strong>주민등록 공시</strong> — 전입이 임차권을 공시하는 효력이 있는지.</li>\n<li><strong>회수 범위</strong> — 배당·반환 등 실제 회수 가능 범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 신탁 부동산 무단 임대와 소유권 회복 후 대항력',
        summary:
          '대법원 2018다44879(대법원, 2019.03.28 선고) 영역에서 법원은 주택임대차보호법 제3조 제1항이 적용되는 임대차는 소유자인 임대인과의 계약에 한정되지 않고 적법한 임대권한을 가진 임대인과의 계약도 포함되며, 부동산담보신탁의 위탁자가 수탁자 동의 없이 임대차계약을 체결한 뒤 수탁자로부터 소유권을 회복한 때에는 그 계약에 위 조항이 적용될 수 있다고 판시했습니다. 위탁자가 신탁재산 귀속을 원인으로 소유권이전등기를 마쳐 적법한 임대권한을 취득하면 임차인은 그 즉시 대항력을 취득하고, 그 후 설정된 근저당보다 앞서 매수인에게 대항할 수 있다고 본 사례입니다. 신탁 부동산 무단 임대 사안에서도 대항력 취득 시점과 순위를 검토해볼 수 있습니다.',
        takeaway: '신탁 + 무단 임대 + 소유권 회복 결합 시 적법한 임대권한·대항력 취득 시점 검토 영역 — 신탁원부·전입·근저당 선후 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '집이 신탁회사 명의인데도 대항력이 인정되나요?',
        answer:
          '<strong>위탁자가 소유권을 회복하면 그 계약에도 대항력 규정이 적용될 수 있는 영역입니다.</strong> 신탁·소유권 회복 시점부터 확인.',
      },
      {
        question: '수탁자 동의 없이 한 계약은 무효인가요?',
        answer:
          '<strong>곧바로 무효라기보다 소유권 회복 등 사정에 따라 대항력 인정이 검토되는 영역입니다.</strong> 임대권한·동의 자료를 확인.',
      },
      {
        question: '대항력은 언제 생기나요?',
        answer:
          '<strong>위탁자가 소유권을 회복한 즉시 대항력을 취득할 수 있는 영역입니다.</strong> 전입·확정일자와 소유권 회복 선후를 정리.',
      },
      {
        question: '나중에 잡힌 근저당보다 앞설 수 있나요?',
        answer:
          '<strong>대항력 취득이 근저당 설정보다 앞서면 그 매수인에게 대항할 수 있는 영역입니다.</strong> 설정일·취득 시점 선후를 확인.',
      },
      {
        question: '신탁 사실을 몰랐는데 어떻게 대응하나요?',
        answer:
          '<strong>등기부·신탁원부로 권리관계를 정리하고 임대권한·동의 여부를 검토하는 영역입니다.</strong> 계약 당시 안내·교신 기록을 함께 확보.',
      },
    ],
    cta: { text: '보증금 돌려받을 수 있는지 AI로 점검하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '신탁 부동산 전세 위험', href: '/guide/jeonse-fraud/jeonse-fraud-trust-property-risk' },
      { label: '임대권한·대항력', href: '/guide/jeonse-fraud/jeonse-fraud-lease-authority-opposing-power' },
      { label: '확정일자·우선변제', href: '/guide/jeonse-fraud/jeonse-fraud-opposing-power-fixed-date' },
      { label: '전세사기 형사 고소', href: '/guide/jeonse-fraud/jeonse-fraud-criminal-complaint' },
      { label: '보증금반환소송', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-return-lawsuit' },
    ],
  },
];
