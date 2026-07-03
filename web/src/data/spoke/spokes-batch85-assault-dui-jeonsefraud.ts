import { SpokePage } from '../spoke-pages';

// batch85 assault(4) + dui(3) + jeonse-fraud(3) — 10개 (2026-06-02)
//
// 고유 존재 이유:
// 1. assault-parking-lot-dispute-track — 주차 시비로 다쳤으나 진단서가 통증 호소에 의존하는 피해자의 상해진단서 증명력 판단형 트랙. 진단서 신빙성·근접성이 핵심.
// 2. assault-bar-drunk-stranger-track — 술집에서 만취 상대 일행에게 일방적으로 맞으며 벗어나려다 부상을 입힌 피해자의 위법성 조각(방어) 판단형 트랙. 일방적 공격 여부가 핵심.
// 3. assault-mutual-scuffle-counter-track — 쌍방 몸싸움 후 맞고소된 neutral 판단형 트랙. 싸울 의사로 먼저 받아 대항한 경우 정당방위 부정이 핵심.
// 4. assault-delivery-rider-customer-track — 배달기사가 고객의 위험한 물건 휴대 협박·상해를 당한 피해자 절차형 트랙. 특수상해·특수협박 '휴대' 해석이 핵심.
// 5. dui-repeat-offense-aggravated-track — 음주 사고 후 상승기 측정으로 처벌기준치 다툼이 붙은 accused 판단형 트랙. 운전 시점 혈중알코올농도 증명이 핵심.
// 6. dui-breath-test-refusal-revocation-track — 음주측정 거부로 면허취소·처벌이 문제된 accused 판단형 트랙. 측정불응 의사의 객관적 명백성·일시적 거부가 핵심.
// 7. dui-parked-car-engine-start-track — 주차 후 시동만 조작하고 발진하지 않은 음주운전 여부 accused 판단형 트랙. '운전'의 발진조작 완료가 핵심.
// 8. jeonse-fraud-multi-household-senior-lien-track — 다가구 선순위 보증금에 밀린 깡통전세 피해자 절차형 트랙. 대항요건 존속·우선변제권 유지·전출 위험이 핵심.
// 9. jeonse-fraud-broker-collusion-track — 공인중개사가 선순위 보증금 조사·설명을 소홀히 한 전세사기 피해자 판단형 트랙. 중개사 주의의무·공제금 책임이 핵심.
// 10. jeonse-fraud-mortgage-concealment-track — 근저당 고지 누락 전세에서 임차권등기 후 보증금반환 다투는 피해자 판단형 트랙. 임차권등기의 시효중단 효력 한계가 핵심.

export const spokesBatch85AssaultDuiJeonseFraud: SpokePage[] = [
  // ─── 1. assault-parking-lot-dispute-track ───
  {
    domain: 'assault',
    slug: 'assault-parking-lot-dispute-track',
    keyword: '주차 시비 폭행 상해진단서 증명력',
    questionKeyword: '주차 자리 다툼 끝에 상대가 저를 밀치고 때려 통증이 생겨 병원에서 상해진단서를 받았는데, 검사 결과 뚜렷한 외상은 없고 통증 호소로 발급된 거라 이 진단서만으로 상해가 인정돼 고소가 되는지 막막합니다.',
    ctaKeyword: '주차 시비 폭행 상해진단서 증명력 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '주차 시비 폭행 — 5단계 상해진단서 증명력 점검 | 로앤가이드',
      description:
        '주차 다툼 끝에 맞아 다쳤는데 진단서가 통증 호소에만 의존해 막막하다면 형법 제257조 상해 인정과 진단 근접성·부위 일치 등 증명력 점검 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"비좁은 주차장에서 자리를 두고 시비가 붙어 말다툼이 격해지자, 상대가 갑자기 저를 밀치고 어깨와 팔을 때려 통증이 생긴 피해자입니다. 병원에 가서 상해진단서를 받기는 했는데, X-ray 같은 검사에선 뚜렷한 골절·외상이 잡히지 않고 제 통증 호소를 근거로 발급된 것이라 마음이 놓이지 않아요. 상대는 \'멍 하나 없는데 무슨 상해냐\'며 발뺌하는데, 이런 진단서만으로 상해가 인정돼 고소·치료비 청구가 되는지 막막한 상태입니다." 형법 제257조 제1항은 사람의 신체를 상해한 자를, 같은 법 제260조 제1항은 폭행한 자를 처벌하도록 규정하는 영역입니다. 판례·실무는 상해진단서가 주로 피해자의 주관적 통증 호소에 의존해 의학적 가능성만으로 발급된 때에는, 진단 시점이 상해 발생과 시간상 근접한지, 진단 부위·정도가 주장하는 경위와 일치하는지, 기왕의 신체 이상과 무관한 새 원인인지 등을 두루 살펴 그 증명력을 신중히 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 주차 시비 + 폭행 + 통증 위주 진단서 결합은 \'상해진단서 증명력·상해 인정\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 진단 근접성 ② 부위 일치 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 진단 ② 일치 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 주차 시비 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단 근접성·부위 일치·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 진단 근접성</strong> — 상해 발생 시점과 진료·진단일이 시간상 가까운지 정리.</li>\n<li><strong>② 부위 일치</strong> — 진단된 상해 부위·정도가 폭행 경위와 일치하는지 정리.</li>\n<li><strong>③ 고소</strong> — 폭행(형법 제260조)·상해(제257조) 중 진단 내용에 따라 고소 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 통증 호소 위주로 발급된 상해진단서라도, 진료가 폭행 직후로 근접하고 진단 부위·정도가 주장하는 경위와 일치하며 기왕증과 무관한 새 원인으로 볼 수 있다면 그 증명력이 인정될 여지가 있는 영역. 진료 시점·동기·이후 경과를 함께 정리해둘수록 입증이 수월해지는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 신속 진료·진단 확보 (즉시~당일)</strong> — 폭행 직후 병원 진료·상해진단서, 다친 부위 사진 확보.</li>\n<li><strong>2단계 — 진단·경위 일치 정리 (수일 내)</strong> — 진료 시점·동기, 진단 부위와 폭행 경위의 일치 여부 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 피해자 진술·진단서 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">주차 시비 폭행 상해진단서 증명력·고소 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 진단 근접성·부위 일치·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (진단일·부위·치료기간)</strong></li>\n<li><strong>주차장 CCTV·차량 블랙박스 영상</strong></li>\n<li><strong>다친 부위·현장 사진 (시간정보 포함)</strong></li>\n<li><strong>최초 진료 시점·동기 기록 (근접성 입증)</strong></li>\n<li><strong>주차 시비·폭행 경위·시간 메모 (육하원칙)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>상대·목격자와의 문자·통화 등 교신 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 통증 위주로 발급된 진단서일수록 폭행 직후 가능한 한 빨리 진료를 받아 시점을 근접시키고, 진단 부위가 맞은 부위와 일치하도록 경위를 명확히 정리해두는 것이 도움이 됩니다. 주차장 CCTV·블랙박스는 시비부터 폭행까지 연속 정황을 보여줄 수 있어 보존 요청을 먼저 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진단서 증명력</strong> — 통증 호소 위주 진단서의 신빙성·근접성.</li>\n<li><strong>부위 일치</strong> — 진단 부위·정도가 폭행 경위와 맞는지.</li>\n<li><strong>기왕증</strong> — 부상이 기존 신체 이상과 무관한 새 원인인지.</li>\n<li><strong>폭행·상해 구분</strong> — 부상이 경미해 폭행에 그치는지, 상해로 평가되는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>검찰 범죄피해자 지원 1301</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 통증 호소에 의존한 상해진단서의 증명력 판단',
        summary:
          '대법원 2025도11886(대법원, 2025.12.04 선고) 영역에서 법원은 상해진단서는 피해자 진술과 함께 유력한 증거가 될 수 있으나, 주로 피해자의 주관적 통증 호소 등에 의존해 의학적 가능성만으로 발급된 때에는 진단일자가 상해 발생 시점과 시간상 근접한지, 발급 경위에 신빙성을 의심할 사정이 없는지, 진단 부위·정도가 주장하는 상해 경위와 일치하는지, 기왕의 신체 이상과 무관한 새 원인으로 단정할 수 있는지, 진료 시점·동기·이후 경과 등을 면밀히 살펴 논리와 경험칙에 따라 그 증명력을 신중히 판단해야 한다고 판시했습니다. 주차 시비 폭행 사안에서도 진단서의 근접성·일치 여부를 검토해볼 수 있습니다.',
        takeaway: '주차 시비 + 폭행 + 통증 위주 진단서 결합 시 상해진단서 증명력·상해 인정 검토 영역 — 진료 근접성·부위 일치 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '뚜렷한 외상이 없고 통증만 있어도 상해가 되나요?',
        answer:
          '<strong>진단 부위·정도와 경위가 일치하고 진료가 근접하면 증명력이 인정될 여지가 있는 영역입니다.</strong> 진료 시점·동기를 정리.',
      },
      {
        question: '진단서를 며칠 늦게 받으면 불리한가요?',
        answer:
          '<strong>상해 발생과 진단 시점의 근접성이 증명력 판단에 영향을 줄 수 있는 영역입니다.</strong> 가능한 한 빨리 진료를 받아 기록을 남겨두는 것이 안전.',
      },
      {
        question: '기존에 아프던 부위면 인정이 안 되나요?',
        answer:
          '<strong>기왕증과 무관한 새 원인으로 볼 수 있는지가 쟁점이 되는 영역입니다.</strong> 폭행 부위와 진단 부위의 일치 여부를 정리.',
      },
      {
        question: '주차장 CCTV가 증거가 되나요?',
        answer:
          '<strong>시비부터 폭행까지 정황을 보여줄 수 있는 자료가 되는 영역입니다.</strong> 영상이 사라지지 않도록 보존 요청을 먼저 진행.',
      },
      {
        question: '상대가 멍도 없다고 우기면 어떻게 하나요?',
        answer:
          '<strong>진단서 근접성·부위 일치와 정황 자료로 다투는 영역입니다.</strong> 진료기록·CCTV를 시간순으로 정리.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 종합 가이드', href: '/guide/assault' },
      { label: '요양보호사 노인 폭행', href: '/guide/assault/assault-elderly-grandparent-shove-injury-track' },
      { label: '아마추어 축구 반칙 시비 쌍방폭행 무고 방어', href: '/guide/assault/assault-amateur-soccer-foul-quarrel-mutual-falsely-accused-defense' },
      { label: '폭행 진단서 CCTV 증거 우열 다툼', href: '/guide/assault/assault-medical-certificate-vs-cctv-evidence-priority' },
      { label: '당구장 큐대 폭행 피해', href: '/guide/assault/assault-billiards-hall-cue-stick-strike-victim-track' },
    ],
  },

  // ─── 2. assault-bar-drunk-stranger-track ───
  {
    domain: 'assault',
    slug: 'assault-bar-drunk-stranger-track',
    keyword: '술집 만취 시비 폭행 방어 위법성',
    questionKeyword: '술집에서 만취한 일행이 일방적으로 저에게 시비를 걸며 합세해 때려서, 벗어나려고 손을 휘젓다 상대가 긁히고 다쳤어요. 저는 맞기만 하다가 빠져나오려 한 건데 오히려 폭행으로 몰릴까 막막합니다.',
    ctaKeyword: '술집 만취 시비 방어 위법성 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '술집 만취 시비 폭행 — 5단계 방어·위법성 점검 | 로앤가이드',
      description:
        '술집에서 만취 일행에게 일방적으로 맞다 벗어나려다 상대가 다쳐 폭행으로 몰릴까 막막하다면 일방적 공격 여부와 형법 제21조 방어행위 위법성 조각 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"늦은 시간 술집에서 옆 테이블의 만취한 일행이 먼저 시비를 걸어왔고, 여럿이 합세해 저를 둘러싸고 밀치고 때리기 시작했습니다. 저는 빠져나오려고 손을 휘저으며 발버둥치는 과정에서 그중 한 명이 긁히고 멍이 든 상황이에요. 분명히 저는 일방적으로 맞기만 하다가 그 자리에서 벗어나려 한 것뿐인데, 상대 일행이 \'우리도 다쳤다\'며 도리어 저를 폭행으로 신고하겠다고 해서 막막한 피해자입니다." 형법 제257조 제1항은 상해를, 같은 법 제260조 제1항은 폭행을 규정하는 영역입니다. 판례·실무는 겉으로는 서로 싸우는 것처럼 보이더라도 실제로는 한쪽이 일방적으로 위법한 공격을 가하고 상대방이 이를 벗어나기 위한 저항수단으로 유형력을 행사한 경우, 그것이 새로운 적극적 공격으로 평가되지 않는 한 사회관념상 허용되는 상당성 있는 행위로서 위법성이 조각될 수 있다고 보는 본 사례 흐름이 있는 영역입니다. 만취 일행의 일방적 공격 + 벗어나려는 과정의 부상 결합은 \'일방적 공격 여부·방어 위법성\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 발단·선후 ② 일방성 ③ 방어 상당성 ④ 증거 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 발단 ② 일방성 ③ 상당성 ④ 증거 ⑤ 대응 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 술집 만취 시비 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 발단·선후·일방성·방어 상당성·증거·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 발단·선후</strong> — 누가 먼저 시비·유형력을 행사했는지 시간순 정리.</li>\n<li><strong>② 일방성</strong> — 상대 일행의 공격이 일방적·합세형이었는지 정리.</li>\n<li><strong>③ 방어 상당성</strong> — 내 행위가 벗어나려는 저항이었는지, 새 적극 공격이었는지.</li>\n<li><strong>④ 증거</strong> — 술집 CCTV·목격자·진단서로 정황 확보.</li>\n<li><strong>⑤ 대응</strong> — 맞고소·수사 대응, 방어 행위 소명 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 일방적·위법한 공격에서 벗어나기 위한 저항수단으로서의 유형력은, 새로운 적극적 공격으로 평가되지 않는 한 상당성 있는 행위로서 위법성이 조각될 수 있는 영역. 누가 먼저 일방적으로 공격했는지와 내 행위가 \'벗어나기 위한\' 것이었는지가 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보존 (즉시~당일)</strong> — 본인 부상 진단서·사진, 술집 CCTV·영수증·목격자 확보.</li>\n<li><strong>2단계 — 발단·일방성 정리 (수일 내)</strong> — 시비 발단, 합세·일방 공격 정황, 벗어나려 한 경위 기록.</li>\n<li><strong>3단계 — 경찰 신고·진술 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서, 일방적 공격·방어 경위 진술.</li>\n<li><strong>4단계 — 조사·검찰 송치 대응 (수사기관 일정)</strong> — 진술 일관성 유지, 방어 행위 상당성 소명.</li>\n<li><strong>5단계 — 처분·합의 검토 (병행)</strong> — 위법성 조각·처분 방향, 필요 시 합의 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">술집 만취 시비 폭행 방어·위법성 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 발단·일방성·방어 상당성 갈래입니다.</strong></p>\n<ul>\n<li><strong>본인 상해진단서·진료기록·부상 사진</strong></li>\n<li><strong>술집 CCTV·휴대폰 촬영 영상</strong></li>\n<li><strong>시비 발단·합세 공격·벗어난 경위 메모 (육하원칙)</strong></li>\n<li><strong>현장 목격자·종업원 진술·연락처</strong></li>\n<li><strong>술집 영수증·출입 기록 (시간·장소 입증)</strong></li>\n<li><strong>치료비 영수증·통원 내역</strong></li>\n<li><strong>상대·일행과의 문자·통화 등 교신 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 내가 일방적으로 맞다가 벗어나려 했다는 점이 핵심이므로, 누가 먼저 합세해 공격했는지와 내 행위가 새 적극 공격이 아니라 저항이었음을 시간순으로 정리해두는 것이 도움이 됩니다. 술집 CCTV와 종업원 진술은 일방적 공격과 방어를 구분해 보여줄 수 있어 즉시 보존 요청을 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>일방성</strong> — 상대 일행이 일방적·합세로 공격했는지.</li>\n<li><strong>방어 상당성</strong> — 내 행위가 벗어나려는 저항이었는지, 새 적극 공격인지.</li>\n<li><strong>위법성 조각</strong> — 사회관념상 허용되는 상당성이 있는지.</li>\n<li><strong>쌍방 여부</strong> — 맞고소로 쌍방으로 몰리는지.</li>\n<li><strong>합의·처분 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>검찰 범죄피해자 지원 1301</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일방적 공격에서 벗어나려는 저항과 위법성 조각',
        summary:
          '대법원 2009도12958(대법원, 2010.02.11 선고) 영역에서 법원은 겉으로는 서로 싸우는 것처럼 보이더라도 실제로는 한쪽이 일방적으로 위법한 공격을 가하고 상대방은 이를 벗어나기 위한 저항수단으로 유형력을 행사한 경우에는, 그 행위가 새로운 적극적 공격으로 평가되지 않는 한 사회관념상 허용되는 상당성이 있는 것으로서 위법성이 조각된다고 판시했습니다. 상대 일행이 합세해 구타하자 이를 벗어나려고 손을 휘저으며 발버둥치다 상해를 입힌 사안에서 그 행위의 위법성이 조각된다고 본 사례입니다. 술집 만취 일행의 일방적 공격 사안에서도 방어 행위의 상당성을 검토해볼 수 있습니다.',
        takeaway: '만취 일행의 일방적 공격 + 벗어나려는 과정의 부상 결합 시 일방적 공격 여부·방어 위법성 검토 영역 — 발단·일방성·상당성 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '맞기만 하다 벗어나려 한 건데 폭행이 되나요?',
        answer:
          '<strong>일방적 공격에서 벗어나려는 저항이면 위법성이 조각될 수 있는 영역입니다.</strong> 새 적극 공격이 아님을 시간순으로 정리.',
      },
      {
        question: '상대가 다쳤다고 맞고소하면 어떻게 되나요?',
        answer:
          '<strong>일방성과 방어 상당성에 따라 쌍방이 아닐 수 있는 영역입니다.</strong> 발단·합세 공격 정황을 갖춰 소명.',
      },
      {
        question: '여럿이 합세한 게 평가에 영향을 주나요?',
        answer:
          '<strong>합세한 일방적 공격은 방어 상당성 판단에 중요한 정황이 되는 영역입니다.</strong> 인원·공격 양상을 구체적으로 정리.',
      },
      {
        question: '술집 CCTV가 꼭 필요한가요?',
        answer:
          '<strong>일방적 공격과 방어를 구분해 보여줄 수 있는 핵심 자료가 되는 영역입니다.</strong> 사라지지 않도록 보존 요청을 먼저 진행.',
      },
      {
        question: '저도 다쳤는데 함께 신고할 수 있나요?',
        answer:
          '<strong>본인 부상도 피해로 신고·고소를 검토할 수 있는 영역입니다.</strong> 본인 진단서·사진을 함께 확보.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 종합 가이드', href: '/guide/assault' },
      { label: '쌍방폭행 선제 가격 양형', href: '/guide/assault/assault-mutual-fight-first-strike-aggravation-track' },
      { label: '폭행 피해자 고소장 작성법', href: '/guide/assault/assault-complaint-writing' },
      { label: '공동주택 엘리베이터 폭행 CCTV', href: '/guide/assault/assault-apartment-elevator-cctv-evidence-track' },
      { label: '캠핑장 텐트 소음 시비 폭행', href: '/guide/assault/assault-campsite-tent-noise-stranger-victim-track' },
    ],
  },

  // ─── 3. assault-mutual-scuffle-counter-track ───
  {
    domain: 'assault',
    slug: 'assault-mutual-scuffle-counter-track',
    keyword: '쌍방 몸싸움 맞고소 정당방위',
    questionKeyword: '시비 끝에 서로 욱해서 몸싸움이 붙었고 둘 다 손이 오갔는데, 제가 먼저 한 대 맞고 곧바로 받아쳐서 상대를 다치게 했어요. 이렇게 맞받아친 것도 정당방위로 봐주는지, 맞고소로 쌍방이 되는지 막막합니다.',
    ctaKeyword: '쌍방 몸싸움 맞고소 정당방위 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '쌍방 몸싸움 맞고소 — 5단계 정당방위·쌍방 점검 | 로앤가이드',
      description:
        '시비 끝에 서로 욱해 몸싸움이 붙어 맞고소돼 정당방위가 될지 막막하다면 형법 제21조 싸울 의사·선공·대항의 성격과 쌍방 평가를 가르는 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"길에서 사소한 시비가 붙었다가 서로 욱하는 말이 오가면서 결국 몸싸움으로 번졌습니다. 분위기상 둘 다 싸울 듯한 상태였고, 제가 먼저 한 대를 맞자 곧바로 받아치는 과정에서 상대가 넘어지며 다친 상황이에요. 저는 \'먼저 맞아서 방어한 것\'이라고 생각하는데, 상대도 맞고소를 하겠다고 해서 이렇게 맞받아친 것도 정당방위로 봐주는지, 아니면 쌍방폭행으로 둘 다 처리되는지 막막한 관련자입니다." 형법 제257조 제1항은 상해를, 같은 법 제260조 제1항은 폭행을, 같은 법 제21조는 정당방위를 규정하는 영역입니다. 판례·실무는 가해자의 침해행위에 대해 자기 또는 타인의 법익을 보호하려는 단순한 방어 목적을 넘어 서로 공격할 의사로 싸우다가 먼저 공격을 받고 이에 대항해 가해한 경우에는, 그 가해행위는 방어인 동시에 공격의 성격을 가지므로 정당방위 또는 과잉방위에 해당하지 않는다고 보는 본 사례 흐름이 있는 영역입니다. 쌍방 시비 + 선공 후 대항 + 맞고소 결합은 \'정당방위 성립·쌍방 평가\' 다툼이 검토될 수 있는 트랙입니다. 관련자라면 ① 발단·의사 ② 선후 ③ 정당방위 여부 ④ 증거 ⑤ 합의·처분 5중 트랙이 가능한 영역. 대응은 ① 발단 ② 선후 ③ 방위 ④ 증거 ⑤ 처분 5단계로 검토해볼 수 있습니다. 관련자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 쌍방 몸싸움 맞고소 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 발단·싸울 의사·선후·정당방위 여부·증거 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 발단·의사</strong> — 시비 경위와 서로 싸울 의사가 있었는지 정리.</li>\n<li><strong>② 선후</strong> — 누가 먼저 가격했고 이후 대항이 어떻게 이어졌는지.</li>\n<li><strong>③ 정당방위 여부</strong> — 단순 방어인지, 방어 겸 공격 성격인지 검토.</li>\n<li><strong>④ 증거</strong> — CCTV·목격자·진단서로 선후·정도 확보.</li>\n<li><strong>⑤ 합의·처분</strong> — 쌍방 처리 가능성·합의·처분 흐름 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 단순한 방어 목적을 넘어 서로 공격할 의사로 싸우다 먼저 공격을 받고 대항해 가해한 경우에는, 그 가해가 방어인 동시에 공격의 성격을 가져 정당방위·과잉방위로 보기 어려울 수 있는 영역. 싸울 의사가 있었는지와 선공·대항의 선후가 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 정리·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보존 (즉시~당일)</strong> — 부상 진단서·사진, 현장 CCTV·촬영 영상 확보.</li>\n<li><strong>2단계 — 발단·선후 정리 (수일 내)</strong> — 시비 발단, 싸울 의사 정황, 선공·대항 선후 기록.</li>\n<li><strong>3단계 — 목격자 확보 (가능한 빨리)</strong> — 주변 목격자 진술·연락처 확보.</li>\n<li><strong>4단계 — 경찰 조사 대응 (수사기관 일정)</strong> — 진술 일관성 유지, 방어·대항 경위 설명.</li>\n<li><strong>5단계 — 합의·처분 검토 (병행)</strong> — 쌍방 여부·합의에 따른 처분 흐름 확인.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의금과 대응 전략, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">쌍방 몸싸움 맞고소 정당방위·대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 발단·선후·정당방위 갈래입니다.</strong></p>\n<ul>\n<li><strong>부상 사진·상해진단서 (양측)</strong></li>\n<li><strong>현장 CCTV·휴대폰 촬영 영상</strong></li>\n<li><strong>시비 발단·싸울 의사·선후 경위 메모 (육하원칙)</strong></li>\n<li><strong>선공·대항 시점·정도 기록</strong></li>\n<li><strong>주변 목격자 진술·연락처</strong></li>\n<li><strong>치료비 영수증·통원 내역</strong></li>\n<li><strong>상대와의 문자·통화 등 교신 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 서로 싸울 의사가 있었는지, 단순 방어를 넘어 대항·공격으로 나아갔는지가 정당방위 판단의 핵심이 되므로 발단과 선후를 사실대로 정리해두는 것이 도움이 됩니다. CCTV·목격자 진술은 선공과 대항을 구분해 보여줄 수 있어 함께 확보해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>싸울 의사</strong> — 서로 공격할 의사로 싸웠는지.</li>\n<li><strong>정당방위 여부</strong> — 단순 방어인지, 방어 겸 공격인지.</li>\n<li><strong>선후·정도</strong> — 누가 먼저, 어느 정도로 가격했는지.</li>\n<li><strong>쌍방 여부</strong> — 맞고소로 쌍방으로 평가되는지.</li>\n<li><strong>합의·처분</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>검찰 범죄피해자 지원 1301</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 싸울 의사로 대항한 가해와 정당방위 부정',
        summary:
          '대법원 2020도15812(대법원, 2021.05.07 선고) 영역에서 법원은 정당방위가 성립하려면 침해행위에 대해 자기 또는 타인의 법익을 보호하려는 방어 목적이 있어야 하는데, 서로 공격할 의사로 싸우다가 먼저 공격을 받고 이에 대항해 가해한 경우에는 그 가해행위가 방어인 동시에 공격의 성격을 가지므로 정당방위 또는 과잉방위행위에 해당하지 않는다고 판시했습니다. 쌍방 시비 끝 몸싸움 사안에서도 싸울 의사 유무와 가해의 성격을 검토해볼 수 있습니다.',
        takeaway: '쌍방 시비 + 선공 후 대항 + 맞고소 결합 시 정당방위 성립·쌍방 평가 검토 영역 — 발단·싸울 의사·선후 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '먼저 맞고 받아쳤는데 정당방위가 되나요?',
        answer:
          '<strong>서로 싸울 의사로 싸웠다면 방어 겸 공격으로 보여 정당방위가 어려울 수 있는 영역입니다.</strong> 단순 방어였는지 경위를 정리.',
      },
      {
        question: '둘 다 다치면 똑같이 처리되나요?',
        answer:
          '<strong>선공·대항 선후와 정도에 따라 평가가 달라질 수 있는 영역입니다.</strong> 가격 선후·횟수를 확보.',
      },
      {
        question: '맞고소를 당하면 저도 처벌되나요?',
        answer:
          '<strong>쌍방 여부와 방어 성격에 따라 처리가 달라지는 영역입니다.</strong> CCTV·목격자로 정황을 갖춰 검토.',
      },
      {
        question: '합의하면 둘 다 끝나나요?',
        answer:
          '<strong>폭행은 반의사불벌 성격이 있어 합의가 처리에 영향을 줄 수 있는 영역입니다.</strong> 상해는 양형 사정이 될 수 있어 신중히 검토.',
      },
      {
        question: 'CCTV가 없으면 어떻게 다투나요?',
        answer:
          '<strong>목격자 진술·진단서·교신 기록으로 선후를 따지는 영역입니다.</strong> 발단·선후를 시간순으로 정리.',
      },
    ],
    cta: { text: '합의금과 대응 전략, AI로 확인하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '상호 폭행 합의금 산정', href: '/guide/assault/assault-mutual-fight-settlement-amount' },
      { label: '폭행 종합 가이드', href: '/guide/assault' },
      { label: '아파트 엘리베이터 시비 폭행 상해 신고', href: '/guide/assault/assault-elevator-confrontation-injury-report-track' },
      { label: '폭행 합의금 기준', href: '/guide/assault/assault-settlement-amount-standard' },
      { label: '폭행 진단서 CCTV 증거 우열 다툼', href: '/guide/assault/assault-medical-certificate-vs-cctv-evidence-priority' },
    ],
  },

  // ─── 4. assault-delivery-rider-customer-track ───
  {
    domain: 'assault',
    slug: 'assault-delivery-rider-customer-track',
    keyword: '배달기사 고객 흉기 휴대 협박 상해',
    questionKeyword: '배달 중 고객이 음식 문제로 화를 내며 손에 흉기로 쓸 만한 물건을 들고 위협하고 저를 때려 다쳤어요. 실제로 그 물건으로 찌르진 않았는데 흉기를 든 것만으로 특수상해·특수협박이 되는지 막막합니다.',
    ctaKeyword: '배달기사 고객 흉기 휴대 협박 상해 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '배달기사 고객 폭행 — 5단계 위험한 물건 휴대 점검 | 로앤가이드',
      description:
        '배달 중 고객이 흉기를 들고 위협하며 때려 다쳤다면 형법 제258조의2 특수상해의 위험한 물건 휴대 해석과 신고·고소 절차 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배달을 갔다가 음식이 늦거나 잘못됐다는 이유로 화가 난 고객이 현관 앞에서 손에 들고 있던 도구를 치켜들며 위협하고, 그대로 저를 밀치고 때려 긁히고 멍이 든 배달기사입니다. 실제로 그 물건으로 찌르거나 내리치지는 않았지만, 언제든 쓸 수 있는 자세로 들고 있어서 너무 위협적이었어요. 직접 사용하지 않았는데도 흉기를 \'휴대\'한 것만으로 특수상해·특수협박이 되는지, 신고·고소를 어떤 순서로 해야 하는지 막막한 상태입니다." 형법 제258조의2 제1항은 위험한 물건을 휴대해 상해한 특수상해를, 같은 법 제284조는 위험한 물건을 휴대한 특수협박을 규정하는 영역입니다. 판례·실무는 위험한 물건을 \'휴대하여\'란 범행 현장에서 사용하려는 의도 아래 위험한 물건을 소지·소지하는 경우를 의미하고, 실제 범행에 사용했을 것까지 요구되지는 않으며, 현장에서 사실상 지배하며 곧바로 사용할 수 있는 상태면 충분하다고 보는 본 사례 흐름이 있는 영역입니다. 배달 중 고객 + 위험한 물건 휴대 + 협박·상해 결합은 \'위험한 물건 휴대·특수상해 성립\' 검토가 가능한 트랙입니다. 피해자라면 ① 상해 입증 ② 휴대·사용 의도 ③ 신고·고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 진단 ② 휴대 ③ 신고 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 배달기사 고객 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상해 입증·휴대/사용 의도·신고/고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상해 입증</strong> — 상해진단서·진료기록으로 부상 부위·치료기간 정리.</li>\n<li><strong>② 휴대·사용 의도</strong> — 위험한 물건을 어떤 의도로 들고 위협했는지 정리.</li>\n<li><strong>③ 신고·고소</strong> — 특수상해·특수협박·폭행 등 적용 죄명에 따라 고소 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 위험한 물건을 현장에서 사용하려는 의도 아래 소지·지니고 있었다면 실제로 그 물건으로 가해했을 것까지 요구되지 않고, 곧바로 사용할 수 있는 상태로 사실상 지배했다면 \'휴대\'로 평가될 수 있는 영역. 들고 있던 물건의 성격과 위협 정황을 구체적으로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·증거 확보 (즉시~당일)</strong> — 병원 진료·상해진단서, 다친 부위 사진, 현관 앞 정황 확보.</li>\n<li><strong>2단계 — 휴대·위협 정황 정리 (수일 내)</strong> — 들고 있던 물건의 종류·자세, 위협 발언·동작 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 피해자 진술·정황 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">배달기사 고객 흉기 휴대 협박·상해 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 상해 입증·휴대 정황·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (부위·치료기간)</strong></li>\n<li><strong>현관·복도 CCTV·배달앱 영상</strong></li>\n<li><strong>다친 부위·현장 사진 (시간정보 포함)</strong></li>\n<li><strong>들고 있던 물건의 종류·정황 메모 (위험성 입증)</strong></li>\n<li><strong>위협 발언·동작·배달 경위 기록 (육하원칙)</strong></li>\n<li><strong>배달앱 주문·통화·고객 정보 (당사자 특정)</strong></li>\n<li><strong>치료비 영수증·통원 내역</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 실제로 찌르지 않았더라도 위험한 물건을 곧바로 사용할 수 있는 상태로 들고 위협했다면 \'휴대\'로 평가될 수 있으므로 물건의 종류·자세와 위협 정황을 구체적으로 정리해두는 것이 도움이 됩니다. 현관 CCTV·배달앱 기록은 위협부터 폭행까지 정황과 당사자 특정에 도움이 되어 즉시 보존 요청을 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>위험한 물건 휴대</strong> — 사용 의도로 소지·지배했는지.</li>\n<li><strong>실제 사용 요부</strong> — 직접 사용 않아도 휴대로 평가되는지.</li>\n<li><strong>특수상해·특수협박</strong> — 적용 죄명과 부상 정도.</li>\n<li><strong>인과·경위</strong> — 부상이 폭행으로 생겼는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>검찰 범죄피해자 지원 1301</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위험한 물건 \'휴대하여\'의 의미',
        summary:
          '대법원 2023도18812(대법원, 2024.06.13 선고) 영역에서 법원은 특수상해·특수협박죄의 위험한 물건을 \'휴대하여\'란 범행 현장에서 사용하려는 의도 아래 위험한 물건을 소지하거나 몸에 지니는 경우를 의미하고, 사용 의도가 있었는지는 범행 동기·휴대 경위·사용 방법·인적 관계·전후 정황을 합리적으로 고려해 판단하며, 사용 의도 아래 소지·지닌 이상 실제로 범행에 사용했을 것까지 요구되지는 않고, 현장에서 사실상 지배하며 곧바로 사용할 수 있는 상태면 충분해 반드시 물리적으로 부착돼 있어야 하는 것은 아니라고 판시했습니다. 배달 중 고객의 위험한 물건 휴대 협박·상해 사안에서도 휴대 여부를 검토해볼 수 있습니다.',
        takeaway: '배달 중 고객 + 위험한 물건 휴대 + 협박·상해 결합 시 위험한 물건 휴대·특수상해 성립 검토 영역 — 물건 종류·위협 정황·진단 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '실제로 찌르지 않았는데 특수상해가 되나요?',
        answer:
          '<strong>사용 의도로 곧바로 쓸 수 있게 지녔다면 실제 사용 없이도 휴대로 평가될 수 있는 영역입니다.</strong> 물건 종류·자세를 정리.',
      },
      {
        question: '손에 안 쥐고 옆에 두기만 해도 휴대인가요?',
        answer:
          '<strong>현장에서 사실상 지배하며 곧바로 사용할 수 있는 상태면 휴대로 볼 수 있는 영역입니다.</strong> 위협 정황을 구체적으로 기록.',
      },
      {
        question: '평범한 도구도 위험한 물건이 되나요?',
        answer:
          '<strong>사용 방법·정황에 따라 위험성이 판단되는 영역입니다.</strong> 물건의 형태와 위협 동작을 함께 정리.',
      },
      {
        question: '배달앱 기록도 증거가 되나요?',
        answer:
          '<strong>주문·통화·고객 정보로 당사자 특정과 경위 입증에 도움이 되는 영역입니다.</strong> 앱 기록을 캡처해 보존.',
      },
      {
        question: '신고는 어디에 어떻게 하나요?',
        answer:
          '<strong>112 신고 또는 관할 경찰서 고소장 제출로 진행하는 영역입니다.</strong> 진단서·CCTV·앱 기록을 갖춰 접수.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 종합 가이드', href: '/guide/assault' },
      { label: '엘리베이터 시비 폭행 상해', href: '/guide/assault/assault-elevator-shove-injury-track' },
      { label: '조기축구 경기 태클 쌍방폭행 무고 방어', href: '/guide/assault/assault-amateur-soccer-tackle-mutual-falsely-accused-defense' },
      { label: '공동주택 엘리베이터 폭행 CCTV', href: '/guide/assault/assault-apartment-elevator-cctv-evidence-track' },
      { label: '데이트폭력 신변보호 접근금지', href: '/guide/assault/assault-dating-violence-victim-protection' },
    ],
  },

  // ─── 5. dui-repeat-offense-aggravated-track ───
  {
    domain: 'dui',
    slug: 'dui-repeat-offense-aggravated-track',
    keyword: '음주 사고 상승기 측정 처벌기준치 다툼',
    questionKeyword: '술을 마시고 조금 운전하다 사고를 냈고 약 12분 뒤 측정에서 0.037%가 나왔는데, 측정 때가 혈중알코올농도 상승기라 운전 시점엔 기준치 미만이었을 수 있다고 들었어요. 혐의를 받고 있다면 이 수치로 다툴 수 있나요?',
    ctaKeyword: '음주 상승기 측정 처벌기준치 대응 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '음주 상승기 측정 — 5단계 처벌기준치·증명 점검 | 로앤가이드',
      description:
        '음주 사고 후 상승기 측정으로 운전 시점 수치가 도로교통법 기준치 미만일 수 있어 막막하다면 시간 간격·혈중알코올농도 증명을 다투는 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술을 마신 뒤 짧은 거리를 운전하다 접촉사고를 냈고, 약 12분 뒤 현장에서 호흡측정을 한 결과 혈중알코올농도 0.037%가 나온 상황입니다. 그런데 측정 시점이 음주 후 얼마 지나지 않은 \'상승기\'에 해당해서, 정작 운전하던 순간에는 처벌기준치 미만이었을 수도 있다는 말을 들었어요. 사고도 크지 않았는데 음주운전과 치상까지 묶일 수 있다고 해서, 혐의를 받고 있다면 이 수치로 운전 시점 농도를 다툴 수 있는지 막막한 상태입니다." 도로교통법 제44조 제1항은 술에 취한 상태의 운전을 금지하고, 같은 법 제44조 제4항은 처벌기준이 되는 혈중알코올농도를 정하는 영역입니다. 판례·실무는 운전과 측정 사이에 시간 간격이 있고 그때가 상승기로 보이더라도 그것만으로 운전 시점 농도가 기준치를 초과했다는 증명이 늘 불가능하다고 볼 수는 없고, 시간 간격·수치 차이·음주 시간과 양·단속 정황·사고 경위 등을 종합해 논리와 경험칙에 따라 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 상승기 측정 + 처벌기준치 근접 + 사고 결합은 \'운전 시점 농도 증명\' 다툼이 검토될 수 있는 트랙입니다. 혐의를 받고 있다면 ① 측정 정황 ② 시간 간격 ③ 수치·음주량 ④ 사고 경위 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 측정 ② 간격 ③ 수치 ④ 사고 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주 상승기 측정 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정 정황·시간 간격·수치/음주량·사고 경위·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 측정 정황</strong> — 측정 방법·절차·입 헹굼·이의 제기·재측정 요구 여부 정리.</li>\n<li><strong>② 시간 간격</strong> — 음주 종료·운전·사고·측정 사이의 시간 간격 정리.</li>\n<li><strong>③ 수치·음주량</strong> — 측정 수치와 처벌기준치 차이, 음주 시간·양 정리.</li>\n<li><strong>④ 사고 경위</strong> — 사고 경위·정황과 운전 당시 상태 정리.</li>\n<li><strong>⑤ 대응</strong> — 운전 시점 농도 증명 쟁점·방어권 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 측정 시점이 상승기로 보인다는 사정만으로 운전 시점 농도 증명이 늘 불가능하다고 볼 수는 없고, 시간 간격·수치 차이·음주량·단속 정황·사고 경위를 종합해 논리와 경험칙에 따라 판단되는 영역. 측정이 운전 종료 직후로 근접할수록, 절차가 통상적일수록 운전 당시 기준치 이상이라는 판단으로 이어질 수 있어 측정 정황이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 측정·사고 자료 확보 (즉시~당일)</strong> — 측정 결과지·측정 방법·시각, 사고 경위·블랙박스 영상 확인.</li>\n<li><strong>2단계 — 시간·음주량 정리 (수일 내)</strong> — 음주 종료·운전·사고·측정 시각, 음주 시간·양 기록.</li>\n<li><strong>3단계 — 수사 대응 (수사기관 일정)</strong> — 진술 일관성 유지, 운전 시점 농도 증명 쟁점 정리.</li>\n<li><strong>4단계 — 양형·합의 자료 정리 (병행)</strong> — 피해 회복·합의, 초범·반성 자료 준비.</li>\n<li><strong>5단계 — 재판·처분 대응 (검찰 처분 후)</strong> — 기소 시 변론 방향·감경 자료 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 탄원서와 감경 요소, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주 상승기 측정 처벌기준치 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 측정 정황·시간 간격·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>음주 측정 결과지 (혈중알코올농도·측정 시각)</strong></li>\n<li><strong>주취운전자 적발보고서·측정 방법 자료</strong></li>\n<li><strong>교통사고사실확인원·사고 경위 자료</strong></li>\n<li><strong>음주 종료·운전·사고·측정 시각 메모 (시간순)</strong></li>\n<li><strong>음주 시간·종류·양 기록 (정황 입증)</strong></li>\n<li><strong>블랙박스·현장 CCTV 영상</strong></li>\n<li><strong>초범·반성·합의 등 양형 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 운전 시점 농도 다툼은 음주 종료·운전·사고·측정 시각의 간격과 수치 차이가 핵심이 되므로 각 시각을 시간순으로 구체적으로 정리해두는 것이 도움이 됩니다. 측정 절차가 통상적이고 운전 종료 직후로 근접하면 운전 당시 기준치 이상이라는 판단으로 이어질 수 있어 측정 정황과 음주량 자료를 함께 갖춰두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>운전 시점 농도</strong> — 상승기 측정과 운전 당시 기준치 충족 여부.</li>\n<li><strong>시간 간격</strong> — 음주·운전·측정 사이 간격과 수치 변동.</li>\n<li><strong>측정 절차</strong> — 측정 방법·근접성·이의 제기 여부.</li>\n<li><strong>음주량·정황</strong> — 음주 시간·양과 단속 당시 행동.</li>\n<li><strong>양형 사정</strong> — 피해 회복·합의·초범·반성 등.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상승기 측정과 운전 시점 혈중알코올농도 증명',
        summary:
          '대법원 2025도8137(대법원, 2025.12.11 선고) 영역에서 법원은 운전과 측정 사이에 시간 간격이 있고 그때가 상승기로 보이더라도 그 사정만으로 운전 시점 농도가 기준치를 초과했다는 증명이 늘 불가능하다고 볼 수는 없고, 시간 간격·수치와 기준치 차이·음주 시간과 양·단속 당시 행동·사고 경위 등을 종합해 논리와 경험칙에 따라 판단해야 한다고 판시했습니다. 운전 종료 약 12분 후 0.037%가 측정되고 입을 헹군 뒤 호흡측정을 했으며 이의·재측정 요구가 없었던 사안에서, 상승기 가능성을 감안하더라도 운전 당시 0.03% 이상으로 보는 것이 경험칙에 부합한다고 본 사례입니다. 음주 사고 후 상승기 측정 사안에서도 운전 시점 농도 증명을 검토해볼 수 있습니다.',
        takeaway: '상승기 측정 + 처벌기준치 근접 + 사고 결합 시 운전 시점 농도 증명 검토 영역 — 시각 간격·측정 정황·음주량 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '측정 때가 상승기면 운전 시점엔 기준치 미만 아닌가요?',
        answer:
          '<strong>상승기라는 사정만으로 운전 시점 농도 증명이 늘 불가능한 것은 아닌 영역입니다.</strong> 시각 간격·수치 차이를 정리해 검토.',
      },
      {
        question: '운전 종료 직후 측정이면 불리한가요?',
        answer:
          '<strong>측정이 운전 종료에 근접할수록 운전 당시 기준치 이상 판단으로 이어질 수 있는 영역입니다.</strong> 측정 시각·절차를 확인.',
      },
      {
        question: '입을 헹구고 측정했는데 절차에 문제가 없나요?',
        answer:
          '<strong>측정 방법·절차의 적법성이 쟁점이 될 수 있는 영역입니다.</strong> 측정 방법·이의 제기·재측정 요구 여부를 정리.',
      },
      {
        question: '채혈을 요구했어야 하나요?',
        answer:
          '<strong>이의·재측정 요구 여부가 정황 판단에 반영될 수 있는 영역입니다.</strong> 당시 요구·대응 여부를 기록.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>측정 결과지·측정 시각·음주량 정황 확보가 출발점인 영역입니다.</strong> 사고·블랙박스 자료를 함께 정리.',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주 상승기 혈중알코올 처벌', href: '/guide/dui/dui-blood-alcohol-rising-track' },
      { label: '음주측정 거부 강요 주장 측정거부 여부', href: '/guide/dui/dui-breath-test-refusal-coercion-claim-falsely-accused-defense' },
      { label: '음주운전 종합 가이드', href: '/guide/dui' },
      { label: '음주 뺑소니 가중처벌', href: '/guide/dui/dui-hit-and-run-aggravation-track' },
      { label: '음주 면허취소 행정심판 재량권', href: '/guide/dui/dui-administrative-suspension-appeal-track' },
    ],
  },

  // ─── 6. dui-breath-test-refusal-revocation-track ───
  {
    domain: 'dui',
    slug: 'dui-breath-test-refusal-revocation-track',
    keyword: '음주측정 거부 면허취소 처벌',
    questionKeyword: '음주 단속에서 처음엔 측정기에 숨을 제대로 안 불었다가 곧이어 측정에 응했는데, 측정 거부로 면허취소에 처벌까지 될 수 있다고 합니다. 혐의를 받고 있다면 일시적 거부도 음주측정 거부가 되는지 막막합니다.',
    ctaKeyword: '음주측정 거부 면허취소 처벌 대응 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '음주측정 거부 — 5단계 측정불응·면허취소 점검 | 로앤가이드',
      description:
        '음주 단속에서 잠깐 측정을 미뤘다 응했는데 측정 거부로 면허취소·처벌될까 막막하다면 도로교통법 측정불응 의사의 명백성·일시적 거부 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"음주 단속에 걸려 호흡측정기에 숨을 불라는 요구를 받았는데, 당황한 데다 측정 방식이 낯설어 처음 몇 차례는 숨을 제대로 내쉬지 못했습니다. 그러다 곧이어 이어진 측정에는 정상적으로 응해 수치가 나왔는데, 경찰은 앞선 미흡한 측정을 두고 측정 거부로 볼 수 있다며 면허취소에 처벌까지 가능하다고 했어요. 일부러 거부한 게 아니라 일시적으로 잘 안 됐던 것뿐인데, 혐의를 받고 있다면 이것도 음주측정 거부가 되는지 막막한 상태입니다." 도로교통법 제44조 제2항은 경찰공무원의 음주측정 요구에 응할 의무를, 같은 법 제148조의2 제1항은 측정 거부에 대한 처벌을 정하는 영역입니다. 판례·실무는 처벌조항의 \'측정에 응하지 아니한 경우\'란 술에 취한 상태로 인정할 상당한 이유가 있는 운전자가 측정에 응할 의사가 없음이 객관적으로 명백한 때를 의미하고, 1차 측정에만 불응했을 뿐 곧이어 2차 측정에 응한 경우처럼 거부가 일시적인 것에 불과하면 측정불응죄가 성립한다고 보기 어렵다고 보는 본 사례 흐름이 있는 영역입니다. 일시적 거부 + 이후 응함 + 면허취소·처벌 결합은 \'측정불응 의사 명백성\' 다툼이 검토될 수 있는 트랙입니다. 혐의를 받고 있다면 ① 단속 정황 ② 거부 양상 ③ 의사 명백성 ④ 면허·처벌 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 정황 ② 양상 ③ 의사 ④ 면허 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주측정 거부 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 단속 정황·거부 양상·의사 명백성·면허/처벌·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 단속 정황</strong> — 단속 시각·장소, 측정 요구 경위·고지 내용 정리.</li>\n<li><strong>② 거부 양상</strong> — 소극적으로 안 분 것인지, 명시적·적극적 거부였는지 정리.</li>\n<li><strong>③ 의사 명백성</strong> — 측정 불응 의사가 객관적으로 명백했는지, 일시적이었는지.</li>\n<li><strong>④ 면허·처벌</strong> — 측정불응 시 면허취소·처벌 가능성과 별도 트랙 확인.</li>\n<li><strong>⑤ 대응</strong> — 수사·행정 대응, 일시적 거부 소명 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 측정불응죄는 측정에 응할 의사가 없음이 객관적으로 명백한 때 성립하고, 1차 측정에만 불응했다가 곧이어 2차 측정에 응한 일시적 거부에 불과하면 성립한다고 보기 어려울 수 있는 영역. 소극적 거부가 일정 시간 계속·반복돼 의사가 명백해졌는지가 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·행정심판 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단속·측정 자료 확보 (즉시~당일)</strong> — 주취운전자 적발보고서·측정 결과지·단속 영상 확인.</li>\n<li><strong>2단계 — 거부 양상 정리 (수일 내)</strong> — 측정 요구 횟수·고지, 소극·적극 거부 여부, 이후 응한 경위 기록.</li>\n<li><strong>3단계 — 수사 대응 (수사기관 일정)</strong> — 진술 일관성 유지, 일시적 거부·의사 명백성 쟁점 정리.</li>\n<li><strong>4단계 — 면허 처분 점검 (처분 후)</strong> — 면허취소·정지 처분 시 행정심판 90일 청구 검토.</li>\n<li><strong>5단계 — 재판·재결 대응 (병행)</strong> — 기소·심리 시 변론·의견 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 탄원서와 감경 요소, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주측정 거부 면허취소·처벌 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 단속 정황·거부 양상·의사 명백성 갈래입니다.</strong></p>\n<ul>\n<li><strong>주취운전자 적발보고서 (측정·거부 기재)</strong></li>\n<li><strong>음주 측정 결과지 (이후 응한 측정 수치)</strong></li>\n<li><strong>단속 현장 영상·블랙박스 (확보 가능 시)</strong></li>\n<li><strong>측정 요구 횟수·고지 내용 메모 (시간순)</strong></li>\n<li><strong>거부 양상·이후 응한 경위 기록</strong></li>\n<li><strong>운전면허취소처분 통지서 (처분 시)</strong></li>\n<li><strong>초범·반성·생계 등 정상 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 처음 몇 차례 잘 안 분 것이 곧이어 측정에 응한 일시적 거부에 불과했는지, 아니면 의사가 명백한 거부가 계속·반복됐는지가 핵심이므로 측정 요구 횟수·고지와 이후 응한 경위를 시간순으로 정리해두는 것이 도움이 됩니다. 단속 영상이 있으면 거부 양상을 구체적으로 보여줄 수 있어 확보·보존 요청을 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>의사 명백성</strong> — 측정 불응 의사가 객관적으로 명백했는지.</li>\n<li><strong>일시적 거부</strong> — 곧이어 측정에 응한 일시적 거부였는지.</li>\n<li><strong>거부 양상</strong> — 소극적 거부의 계속·반복 여부, 명시적 거부인지.</li>\n<li><strong>고지·절차</strong> — 측정 요구·불이익 고지 등 절차 이행 여부.</li>\n<li><strong>면허·형사 병행</strong> — 면허취소와 형사 처벌의 별도 트랙.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일시적 측정 거부와 측정불응죄 성립',
        summary:
          '대법원 2013도8481(대법원, 2015.12.24 선고) 영역에서 법원은 도로교통법 처벌조항의 \'측정에 응하지 아니한 경우\'란 술에 취한 상태로 인정할 상당한 이유가 있는 운전자가 음주측정에 응할 의사가 없음이 객관적으로 명백하다고 인정되는 때를 의미하고, 1차 측정에만 불응했을 뿐 곧이어 이어진 2차 측정에 응한 경우처럼 거부가 일시적인 것에 불과하면 측정불응죄가 성립한다고 볼 것은 아니며, 소극적 거부는 일정 시간 계속·반복돼 불응 의사가 객관적으로 명백해진 때 비로소 성립한다고 판시했습니다. 일시적으로 측정이 미흡했다가 이후 응한 사안에서도 의사 명백성을 검토해볼 수 있습니다.',
        takeaway: '일시적 거부 + 이후 응함 + 면허취소·처벌 결합 시 측정불응 의사 명백성 검토 영역 — 측정 요구 횟수·이후 응한 경위 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '처음 잘 안 불었다가 곧 응했는데 거부가 되나요?',
        answer:
          '<strong>곧이어 측정에 응한 일시적 거부면 측정불응죄가 성립한다고 보기 어려울 수 있는 영역입니다.</strong> 이후 응한 경위를 정리.',
      },
      {
        question: '소극적으로 안 분 것도 거부인가요?',
        answer:
          '<strong>소극적 거부는 일정 시간 계속·반복돼 의사가 명백해진 때 성립할 수 있는 영역입니다.</strong> 측정 요구 횟수·양상을 기록.',
      },
      {
        question: '측정 거부면 면허가 바로 취소되나요?',
        answer:
          '<strong>측정불응이 인정되면 면허 처분이 따를 수 있으나 형사와 별도 트랙인 영역입니다.</strong> 처분 통지 수령일을 확인.',
      },
      {
        question: '면허취소는 어떻게 다투나요?',
        answer:
          '<strong>처분을 안 날부터 90일 이내 행정심판 청구를 검토할 수 있는 영역입니다.</strong> 통지서·적발보고서를 확보.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>적발보고서·측정 결과지·단속 영상 확보가 출발점인 영역입니다.</strong> 측정 요구·고지 정황을 함께 정리.',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주측정 거부 측정불응 처벌', href: '/guide/dui/dui-breath-test-refusal-measurement-track' },
      { label: '음주측정 거부 면허취소 구제', href: '/guide/dui/dui-breath-test-refusal-relief-track' },
      { label: '처음 음주운전 면허정지 면허취소 분기', href: '/guide/dui/dui-first-offense-license-suspension-vs-revocation-criteria' },
      { label: '2회 음주 면허취소 행정심판', href: '/guide/dui/dui-second-revoke-administrative-appeal' },
      { label: '음주운전 종합 가이드', href: '/guide/dui' },
    ],
  },

  // ─── 7. dui-parked-car-engine-start-track ───
  {
    domain: 'dui',
    slug: 'dui-parked-car-engine-start-track',
    keyword: '주차 후 시동조작 음주운전 여부',
    questionKeyword: '술을 마신 뒤 주차된 차에서 히터를 켜려고 시동만 걸었을 뿐 차를 움직이진 않았는데 음주운전으로 단속됐어요. 차가 움직이지 않았는데도 혐의를 받고 있다면 이것도 음주운전이 되는지 막막합니다.',
    ctaKeyword: '주차 후 시동조작 음주운전 여부 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '주차 후 시동조작 — 5단계 운전 성립·발진조작 점검 | 로앤가이드',
      description:
        '술 마시고 주차된 차에 시동만 걸었는데 음주운전 단속돼 막막하다면 도로교통법상 운전 성립과 기어·제동까지의 발진조작 완료를 다투는 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술을 마신 뒤 주차장에 세워둔 차 안에서 추위를 피하려 히터를 켜려고 시동만 걸었을 뿐, 기어를 넣거나 차를 움직이지는 않은 상황입니다. 그런데 마침 지나가던 단속에 걸려 음주운전으로 처리됐고, 차가 한 발짝도 움직이지 않았는데도 시동을 건 것만으로 운전이라는 말을 들었어요. 분명히 차를 출발시킬 생각은 없었는데, 혐의를 받고 있다면 이렇게 시동만 조작한 것도 음주\'운전\'이 되는지, 어떻게 다퉈야 하는지 막막한 상태입니다." 도로교통법 제44조 제1항은 술에 취한 상태의 운전을 금지하고, 같은 법 제2조는 \'운전\'을 차를 그 본래의 사용방법에 따라 사용하는 것으로 정하는 영역입니다. 판례·실무는 자동차를 본래의 사용방법에 따라 사용했다고 하려면 단지 엔진을 시동시킨 것만으로는 부족하고 이른바 발진조작의 완료를 요하며, 통상 시동·기어 조작·제동장치 해제 등 일련의 조치를 취하면 발진조작이 완료됐다고 볼 수 있다고 보는 본 사례 흐름이 있는 영역입니다. 시동만 조작 + 미발진 + 음주 단속 결합은 \'운전 성립·발진조작 완료\' 다툼이 검토될 수 있는 트랙입니다. 혐의를 받고 있다면 ① 조작 범위 ② 발진 여부 ③ 운전 성립 ④ 단속·측정 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 조작 ② 발진 ③ 운전 ④ 단속 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 주차 후 시동조작 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 조작 범위·발진 여부·운전 성립·단속/측정·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 조작 범위</strong> — 시동만 걸었는지, 기어·제동장치까지 조작했는지 정리.</li>\n<li><strong>② 발진 여부</strong> — 차가 실제로 움직였는지, 발진조작이 완료됐는지 정리.</li>\n<li><strong>③ 운전 성립</strong> — 본래 사용방법에 따른 사용(발진조작 완료) 여부 검토.</li>\n<li><strong>④ 단속·측정</strong> — 단속 경위·측정 절차·수치 정리.</li>\n<li><strong>⑤ 대응</strong> — 운전 성립 쟁점·방어권 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 자동차를 본래의 사용방법에 따라 사용했다고 하려면 단지 엔진을 시동한 것만으로는 부족하고 발진조작의 완료를 요하는 영역. 시동만 걸었을 뿐 기어·제동장치 조작이 없었는지, 차가 실제로 발진했는지가 운전 성립의 핵심 다툼이 되는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단속·차량 자료 확보 (즉시~당일)</strong> — 측정 결과지·단속 경위, 차량 위치·기어·시동 상태 확인.</li>\n<li><strong>2단계 — 조작·발진 정황 정리 (수일 내)</strong> — 시동만 걸었는지, 기어·제동 조작·차량 이동 여부 기록.</li>\n<li><strong>3단계 — 수사 대응 (수사기관 일정)</strong> — 진술 일관성 유지, 발진조작 완료·운전 성립 쟁점 정리.</li>\n<li><strong>4단계 — 자료·정상 정리 (병행)</strong> — 블랙박스·CCTV, 초범·반성 자료 준비.</li>\n<li><strong>5단계 — 재판·처분 대응 (검찰 처분 후)</strong> — 기소 시 변론 방향·감경 자료 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 탄원서와 감경 요소, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">주차 후 시동조작 음주운전 여부 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 조작 범위·발진 여부·단속 갈래입니다.</strong></p>\n<ul>\n<li><strong>음주 측정 결과지 (혈중알코올농도)</strong></li>\n<li><strong>주취운전자 적발보고서·단속 경위 자료</strong></li>\n<li><strong>차량 위치·기어·시동 상태 자료 (발진 입증)</strong></li>\n<li><strong>주차장 CCTV·블랙박스 영상 (차량 이동 여부)</strong></li>\n<li><strong>시동·조작 경위 메모 (시간순)</strong></li>\n<li><strong>차량 상태·고장 등 발진 가능성 자료 (해당 시)</strong></li>\n<li><strong>초범·반성·생계 등 양형 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시동만 걸었을 뿐 기어·제동장치 조작이 없었고 차가 움직이지 않았다면 발진조작 완료가 문제될 수 있으므로 조작 범위와 차량 이동 여부를 구체적으로 정리해두는 것이 도움이 됩니다. 주차장 CCTV·블랙박스는 차가 실제로 발진했는지를 보여줄 수 있어 즉시 확보·보존 요청을 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>발진조작 완료</strong> — 시동만 걸었는지, 발진조작이 완료됐는지.</li>\n<li><strong>운전 성립</strong> — 본래 사용방법에 따른 사용으로 평가되는지.</li>\n<li><strong>차량 이동</strong> — 차가 실제로 움직였는지, 발진 가능 상태였는지.</li>\n<li><strong>단속·측정 절차</strong> — 측정 방법·절차의 적법성.</li>\n<li><strong>양형 사정</strong> — 초범·반성·정황 등.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — \'운전\'의 의미와 발진조작 완료',
        summary:
          '대법원 2017도10815(대법원, 2021.01.14 선고) 영역에서 법원은 도로교통법상 \'운전\'이란 도로에서 차를 그 본래의 사용방법에 따라 사용하는 것을 말하고, 이때 본래의 사용방법에 따라 사용했다고 하려면 단지 엔진을 시동한 것만으로는 부족하고 이른바 발진조작의 완료를 요하며, 통상 엔진 시동·기어 조작·제동장치 해제 등 일련의 조치를 취하면 발진조작을 완료했다고 볼 수 있으나, 애초부터 차가 고장·결함 등으로 객관적으로 발진할 수 없는 상태였던 경우라면 그렇게 볼 수 없다고 판시했습니다. 주차 후 시동만 조작한 사안에서도 발진조작 완료와 운전 성립을 검토해볼 수 있습니다.',
        takeaway: '시동만 조작 + 미발진 + 음주 단속 결합 시 운전 성립·발진조작 완료 검토 영역 — 조작 범위·차량 이동 여부 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '시동만 걸었는데도 음주운전이 되나요?',
        answer:
          '<strong>시동만으로는 부족하고 발진조작 완료가 필요할 수 있는 영역입니다.</strong> 기어·제동 조작·차량 이동 여부를 정리.',
      },
      {
        question: '차가 한 발짝도 안 움직였는데도 운전인가요?',
        answer:
          '<strong>발진조작이 완료됐는지가 핵심이 되는 영역입니다.</strong> 차량 이동·조작 범위를 구체적으로 기록.',
      },
      {
        question: '히터만 켜려고 시동을 건 것도 문제가 되나요?',
        answer:
          '<strong>조작 의도·범위와 발진조작 완료 여부에 따라 평가가 달라질 수 있는 영역입니다.</strong> 조작 경위를 정리.',
      },
      {
        question: '주차장 CCTV가 도움이 되나요?',
        answer:
          '<strong>차가 실제로 발진했는지를 보여줄 수 있는 자료가 되는 영역입니다.</strong> 영상이 사라지지 않도록 보존 요청을 먼저 진행.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>측정 결과지와 조작·발진 정황 확보가 출발점인 영역입니다.</strong> 차량 위치·기어 상태·CCTV를 함께 정리.',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 종합 가이드', href: '/guide/dui' },
      { label: '음주측정 거부 면허취소 처벌', href: '/guide/dui/dui-breath-test-refusal-revocation-track' },
      { label: '음주운전 행정심판 90일 면허취소 감경', href: '/guide/dui/dui-administrative-trial-90day-mitigation' },
      { label: '처음 음주운전 면허정지 면허취소 분기', href: '/guide/dui/dui-first-offense-license-suspension-vs-revocation-criteria' },
      { label: '음주운전 행정심판 준비서류와 절차', href: '/guide/dui/dui-administrative-appeal-required-docs' },
    ],
  },

  // ─── 8. jeonse-fraud-multi-household-senior-lien-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-multi-household-senior-lien-track',
    keyword: '다가구 선순위 보증금 깡통전세 회수',
    questionKeyword: '다가구주택에 전세로 들어왔는데 앞선 세입자들의 선순위 보증금이 많아 사실상 깡통전세였고 경매까지 넘어갔어요. 대항요건을 어떻게 유지하고 보증금을 어떤 순서로 회수해야 하는지 막막합니다.',
    ctaKeyword: '다가구 선순위 보증금 깡통전세 회수 순서 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '다가구 선순위 깡통전세 — 5단계 대항요건·회수 점검 | 로앤가이드',
      description:
        '다가구 선순위 보증금에 밀려 깡통전세로 경매까지 넘어갔다면 주택임대차보호법 제3조 대항요건 존속과 우선변제권·전출 위험·배당 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"단독 등기된 다가구주택의 한 호실에 전세로 들어왔는데, 알고 보니 같은 건물에 먼저 들어온 다른 세입자들의 선순위 보증금이 건물 시세를 넘길 만큼 많아 사실상 깡통전세였던 임차인입니다. 임대인이 보증금을 돌려주지 못한 채 결국 건물이 경매로 넘어갔고, 선순위 채권자들이 먼저 배당받으면 제게 돌아올 몫이 거의 없다고 해요. 전입·확정일자는 갖췄는데 대항요건을 어떻게 유지하고, 이사·임차권등기·배당요구를 어떤 순서로 해야 보증금을 지킬 수 있는지 막막한 상태입니다." 주택임대차보호법 제3조 제1항은 주택 인도와 주민등록(전입신고)을 갖춘 대항요건을, 같은 법 제3조의2는 확정일자를 갖춘 우선변제권을 정하는 영역입니다. 판례·실무는 주택 인도와 주민등록이라는 대항요건은 대항력 취득 시만이 아니라 이를 유지하기 위해서도 계속 존속해야 하므로, 전출 등으로 대항요건이 무너지면 이미 취득한 대항력·우선변제권도 상실될 수 있다고 보는 본 사례 흐름이 있는 영역입니다. 다가구 + 선순위 보증금 과다 + 경매 결합은 \'대항요건 존속·우선변제권 유지·배당\' 검토가 가능한 트랙입니다. 피해자라면 ① 권리관계 ② 대항·우선변제 ③ 임차권등기 ④ 배당·잔액 ⑤ 소송 5중 트랙이 가능한 영역. 대응은 ① 권리 ② 대항 ③ 등기 ④ 배당 ⑤ 소송 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 다가구 선순위 깡통전세 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리관계·대항/우선변제·임차권등기·배당/잔액·소송 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리관계</strong> — 등기부 근저당·선순위 세입자 보증금·경매 진행 확인.</li>\n<li><strong>② 대항·우선변제</strong> — 전입·점유·확정일자로 대항력·우선변제권을 갖췄는지.</li>\n<li><strong>③ 임차권등기</strong> — 이사 필요 시 전출 전 임차권등기명령(통상 1~2개월) 검토.</li>\n<li><strong>④ 배당·잔액</strong> — 경매 배당요구와 선순위 배당 후 잔액 확인.</li>\n<li><strong>⑤ 소송</strong> — 미배당 잔액 회수·양수인 상대 존속 주장 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 주택 인도와 주민등록이라는 대항요건은 취득 시만이 아니라 유지하기 위해서도 계속 존속해야 해서, 함부로 전출하면 대항력·우선변제권을 잃을 수 있는 영역. 선순위 보증금에 밀려도 대항요건을 유지하는 것이 출발점이고, 이사가 필요하면 임차권등기 후 전출하는 것이 안전한 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·HUG·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리관계·선순위 확인 (즉시)</strong> — 등기부·근저당, 선순위 세입자 보증금·경매개시 점검.</li>\n<li><strong>2단계 — 대항요건 점검 (수일 내)</strong> — 전입·확정일자·점유 유지 여부, 대항력·우선변제권 정리.</li>\n<li><strong>3단계 — 임차권등기·배당요구 (이사 전/종기 내)</strong> — 이사 시 임차권등기명령(통상 1~2개월), 경매 배당요구.</li>\n<li><strong>4단계 — 배당 결과·잔액 확인 (배당 후)</strong> — 배당표·선순위 배당, 보증금 잔액 산정.</li>\n<li><strong>5단계 — 잔액 회수·존속 주장 (병행)</strong> — 미배당 잔액 회수, 양수인 상대 존속 주장·보증금반환소송 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">다가구 선순위 깡통전세 회수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리관계·대항요건·배당 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>주민등록등본·전입세대 확인서 (대항요건)</strong></li>\n<li><strong>부동산등기부등본 (근저당·경매개시)</strong></li>\n<li><strong>선순위 세입자 보증금·확정일자 현황 자료</strong></li>\n<li><strong>임차권등기명령 신청·완료 자료 (이사 시)</strong></li>\n<li><strong>경매 배당표·배당요구 자료</strong></li>\n<li><strong>보증금 송금 내역·임대인 교신 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대항요건은 취득 후에도 계속 유지돼야 하므로 보증금을 돌려받기 전에 함부로 전출하지 않는 것이 안전하고, 이사가 불가피하면 전출 전 임차권등기명령(통상 1~2개월)을 마쳐두는 것이 도움이 됩니다. 다가구는 선순위 세입자 보증금 규모가 회수 가능 범위를 좌우하므로 선순위 현황 자료를 함께 모아두는 것이 핵심인 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대항요건 존속</strong> — 전입·점유·확정일자가 계속 유지되는지.</li>\n<li><strong>전출 위험</strong> — 임차권등기 없이 전출해 권리를 잃는지.</li>\n<li><strong>선순위 보증금</strong> — 앞선 세입자 보증금 규모와 배당 순위.</li>\n<li><strong>배당·잔액</strong> — 선순위 배당 후 회수 가능 잔액.</li>\n<li><strong>존속 주장</strong> — 미배당 시 양수인 상대 임대차 존속 주장.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 대항요건의 계속 존속 요건',
        summary:
          '대법원 2025다213466(대법원, 2026.01.08 선고) 영역에서 법원은 주택임대차보호법 제3조 제1항의 주민등록은 임차권의 존재를 제3자가 인식할 수 있게 하는 공시방법으로서 단순한 형식적 등록만으로는 부족하고 점유관계가 임차권을 매개로 한 것임을 인식할 수 있어야 하며, 주택 인도와 주민등록이라는 대항요건은 그 취득 시에만이 아니라 대항력을 유지하기 위해서도 계속 존속해야 한다고 판시했습니다. 대항력을 갖춘 임차인이 임차주택을 양수해 소유자가 된 경우에는 소유권이전등기 이후 주민등록이 더 이상 유효한 공시방법이 되지 못해 대항력이 소멸한다고 본 사례입니다. 다가구 선순위 깡통전세 사안에서도 대항요건의 존속 유지를 검토해볼 수 있습니다.',
        takeaway: '다가구 + 선순위 보증금 과다 + 경매 결합 시 대항요건 존속·우선변제권 유지·배당 검토 영역 — 전출 전 임차권등기·선순위 현황 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '선순위 보증금이 많으면 한 푼도 못 받나요?',
        answer:
          '<strong>선순위 배당 후 잔액·소액임차인 보호 등에 따라 회수 범위가 달라질 수 있는 영역입니다.</strong> 선순위 현황·배당표부터 확인.',
      },
      {
        question: '이사를 가면 권리가 사라지나요?',
        answer:
          '<strong>대항요건은 계속 유지돼야 하므로 전출 전 임차권등기명령(통상 1~2개월)을 검토할 수 있는 영역입니다.</strong> 등기 완료 후 이사 진행.',
      },
      {
        question: '전입신고만 하면 대항력이 끝까지 유지되나요?',
        answer:
          '<strong>대항요건은 취득 시만이 아니라 유지하기 위해서도 계속 존속해야 하는 영역입니다.</strong> 점유·전입을 함부로 옮기지 않도록 주의.',
      },
      {
        question: '선순위 보증금은 어떻게 확인하나요?',
        answer:
          '<strong>등기부·확정일자 부여현황·전입세대 자료로 정리하는 영역입니다.</strong> 계약 전·후 자료를 함께 확보.',
      },
      {
        question: '잔액 회수는 어디서 도움을 받나요?',
        answer:
          '<strong>법률구조공단(132)에서 보증금반환·배당 관련 무료 상담을 받아볼 수 있는 영역입니다.</strong> 전세피해지원센터(1533-8119)도 함께 활용.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '다가구 선순위 보증금 초과 회수 판단', href: '/guide/jeonse-fraud/jeonse-fraud-multi-household-senior-deposit-excess-recovery-track' },
      { label: '법인 임차 직원 거주 대항력', href: '/guide/jeonse-fraud/jeonse-fraud-corporate-lease-employee-opposing-power-track' },
      { label: '임차권등기 비용 임대인 청구 회수', href: '/guide/jeonse-fraud/jeonse-fraud-lease-registration-cost-claim-recovery-track' },
      { label: '선순위 근저당 경매 배당 보증금 회수 절차', href: '/guide/jeonse-fraud/jeonse-fraud-priority-mortgage-auction-distribution-recovery-track' },
      { label: '가짜 임대인 위임 사칭 계약 보증금 회수 판단', href: '/guide/jeonse-fraud/jeonse-fraud-fake-landlord-proxy-impersonation-deposit-track' },
    ],
  },

  // ─── 9. jeonse-fraud-broker-collusion-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-broker-collusion-track',
    keyword: '공인중개사 선순위 설명 누락 전세사기',
    questionKeyword: '공인중개사를 통해 다가구주택에 전세로 들어왔는데, 중개사가 선순위 보증금이 얼마인지 제대로 조사·설명하지 않아 경매에서 한 푼도 배당받지 못했어요. 중개사에게 책임을 물어 손해를 회복할 수 있나요?',
    ctaKeyword: '공인중개사 선순위 설명 누락 책임 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '중개사 선순위 설명 누락 — 5단계 주의의무·공제금 점검 | 로앤가이드',
      description:
        '중개사가 선순위 보증금을 조사·설명하지 않아 배당을 못 받아 막막하다면 공인중개사법 제25조 확인설명의무와 제30조 공제금 책임 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"공인중개사를 통해 다가구주택 한 호실에 전세계약을 했는데, 계약 당시 중개사가 \'선순위가 좀 있다\'고 구두로만 짚고 넘어갔을 뿐 앞선 세입자들의 보증금이 정확히 얼마인지는 조사·설명해주지 않은 임차인입니다. 나중에 건물이 경매로 넘어갔고, 선순위 보증금이 시세를 넘겨 저는 한 푼도 배당받지 못했어요. 중개사가 제대로 확인·설명만 해줬어도 계약을 안 했을 텐데, 이 손해를 중개사에게 물어 회복할 수 있는지, 공제금은 어떻게 청구하는지 막막한 상태입니다." 공인중개사법 제25조는 중개대상물의 권리관계 확인·설명의무를, 같은 법 제30조는 중개행위로 거래당사자에게 재산상 손해를 발생하게 한 경우의 손해배상책임을 정하는 영역입니다. 판례·실무는 다가구주택 일부 임대차를 중개하는 개업공인중개사는 선량한 관리자의 주의로 선순위 임대차보증금이 얼마나 있을 수 있는지 조사·확인해 임차의뢰인에게 성실히 설명하고 확인·설명서에 기재할 의무가 있으며, 임대인이 자료 제공을 거부했더라도 그 사실을 기재하고 규모·시세 등으로 선순위 채권을 확인할 수 있다고 보는 본 사례 흐름이 있는 영역입니다. 다가구 중개 + 선순위 설명 누락 + 미배당 결합은 \'중개사 주의의무·공제금 책임\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 권리관계 ② 설명의무 위반 ③ 인과·손해 ④ 공제금 청구 ⑤ 회수 5중 트랙이 가능한 영역. 대응은 ① 권리 ② 의무 ③ 손해 ④ 공제 ⑤ 회수 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중개사 선순위 설명 누락 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리관계·설명의무 위반·인과/손해·공제금 청구·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리관계</strong> — 등기부·선순위 보증금·경매 배당 결과 확인.</li>\n<li><strong>② 설명의무 위반</strong> — 선순위 보증금 조사·확인·설명·기재가 이뤄졌는지 정리.</li>\n<li><strong>③ 인과·손해</strong> — 설명 소홀과 미배당 손해의 인과관계 정리.</li>\n<li><strong>④ 공제금 청구</strong> — 중개사·공제(협회) 상대 손해배상·공제금 청구 검토.</li>\n<li><strong>⑤ 회수</strong> — 임대인·중개사 등 책임 주체별 회수 경로 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 다가구 일부 임대차를 중개한 개업공인중개사는 선량한 관리자의 주의로 선순위 임대차보증금 규모를 조사·확인해 성실히 설명하고 확인·설명서에 기재할 의무가 있고, 임대인이 자료를 거부해도 그 사실을 기재하고 규모·시세로 선순위를 확인할 수 있는 영역. 의무 위반과 미배당 손해의 인과관계가 핵심 다툼이 되는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 책임·회수 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·공인중개사협회·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·중개 자료 확보 (즉시)</strong> — 등기부·계약서·중개대상물 확인·설명서·교신 기록 확보.</li>\n<li><strong>2단계 — 설명의무 위반 정리 (수일 내)</strong> — 선순위 조사·설명·기재 여부, 구두 안내 한계 점검.</li>\n<li><strong>3단계 — 인과·손해 산정 (배당 후)</strong> — 배당표·미배당 잔액, 설명 소홀과의 인과관계 정리.</li>\n<li><strong>4단계 — 공제금·배상 청구 (가능한 빨리)</strong> — 중개사·공제(협회) 상대 손해배상·공제금 청구 검토.</li>\n<li><strong>5단계 — 임대인 회수 병행 (병행)</strong> — 임대인 상대 보증금 반환·경매 배당 회수 병행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 보증금 돌려받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">공인중개사 선순위 설명 누락 책임·회수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리관계·설명의무·공제금 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>중개대상물 확인·설명서 (선순위 기재 여부)</strong></li>\n<li><strong>부동산등기부등본 (근저당·선순위)</strong></li>\n<li><strong>선순위 세입자 보증금·확정일자 현황 자료</strong></li>\n<li><strong>경매 배당표·미배당 잔액 자료 (손해 산정)</strong></li>\n<li><strong>중개사 교신 기록·구두 안내 정황</strong></li>\n<li><strong>중개사 공제증서·공제(협회) 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 중개사가 선순위 보증금을 \'구두로 설명했다\'는 정도로는 의무를 다했다고 보기 어려울 수 있으므로 확인·설명서에 무엇이 기재됐는지와 조사·확인 정황을 함께 정리해두는 것이 도움이 됩니다. 공제금 청구는 손해 산정과 인과관계 입증이 핵심이어서 배당표·미배당 잔액 자료를 갖춰두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>설명의무 범위</strong> — 선순위 조사·확인·설명·기재 의무 이행 여부.</li>\n<li><strong>구두 설명 한계</strong> — 구두 안내만으로 의무를 다했다고 볼 수 있는지.</li>\n<li><strong>인과·손해</strong> — 설명 소홀과 미배당 손해의 인과관계.</li>\n<li><strong>공제금 범위</strong> — 중개사·공제(협회) 책임 범위와 한도.</li>\n<li><strong>책임 분담</strong> — 임대인·중개사 등 책임 주체별 분담.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 다가구 중개사의 선순위 보증금 설명의무',
        summary:
          '대법원 2024다283668(대법원, 2025.12.04 선고) 영역에서 법원은 다가구주택 일부 임대차를 중개하는 개업공인중개사는 선량한 관리자의 주의로 이미 거주하는 다른 임차인의 보증금·임대차 시기와 종기 등 자료를 요구·확인해 임차의뢰인에게 설명하고 확인·설명서에 기재할 의무가 있으며, 임대인이 자료 제공을 거부했더라도 그 사실을 기재하고 다가구주택의 규모·세대수·시세로 선순위 임대차보증금채권이 얼마나 있을 수 있는지 정도는 확인할 수 있다고 판시했습니다. 확인·설명서에 \'선순위 다수 있음을 구두로 설명\'이라고만 기재하고 선순위 규모를 조사·확인해 설명하지 않았다면 선량한 관리자의 주의의무를 다했다고 볼 수 없다고 본 사례입니다. 중개사 선순위 설명 누락 사안에서도 주의의무 위반을 검토해볼 수 있습니다.',
        takeaway: '다가구 중개 + 선순위 설명 누락 + 미배당 결합 시 중개사 주의의무·공제금 책임 검토 영역 — 확인·설명서·배당표·인과관계 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '중개사가 \'선순위 있다\'고 구두로만 말했어도 책임이 없나요?',
        answer:
          '<strong>구두 설명만으로는 조사·확인·기재 의무를 다했다고 보기 어려울 수 있는 영역입니다.</strong> 확인·설명서 기재 내용부터 확인.',
      },
      {
        question: '임대인이 자료를 안 줬으면 중개사 책임이 없나요?',
        answer:
          '<strong>거부 사실을 기재하고 규모·시세로 선순위를 확인할 수 있었는지가 쟁점인 영역입니다.</strong> 조사·확인 정황을 정리.',
      },
      {
        question: '중개사에게 어떻게 손해를 청구하나요?',
        answer:
          '<strong>공인중개사법 제30조에 따라 손해배상·공제금 청구를 검토할 수 있는 영역입니다.</strong> 공제증서·배당표를 확보해 정리.',
      },
      {
        question: '미배당 손해 전부를 받을 수 있나요?',
        answer:
          '<strong>공제 한도·과실 분담 등에 따라 회수 범위가 달라질 수 있는 영역입니다.</strong> 인과관계·손해 산정을 갖춰 검토.',
      },
      {
        question: '임대인과 중개사 중 누구에게 청구하나요?',
        answer:
          '<strong>책임 주체별로 병행해 회수를 검토하는 영역입니다.</strong> 임대인 반환·중개사 배상 자료를 함께 정리.',
      },
    ],
    cta: { text: '보증금 돌려받을 수 있는지 AI로 점검하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 중개사 책임 범위', href: '/guide/jeonse-fraud/jeonse-fraud-broker-liability' },
      { label: '다가구 선순위 보증금 초과 회수 판단', href: '/guide/jeonse-fraud/jeonse-fraud-multi-household-senior-deposit-excess-recovery-track' },
      { label: '신탁부동산 전세 중개 설명의무', href: '/guide/jeonse-fraud/jeonse-fraud-trust-property-broker-explanation-duty-track' },
      { label: '경매 배당 보증금 회수', href: '/guide/jeonse-fraud/jeonse-fraud-auction-distribution-recovery-track' },
      { label: '임대인 사망 상속 보증금 반환', href: '/guide/jeonse-fraud/jeonse-fraud-inherited-landlord-deposit-track' },
    ],
  },

  // ─── 10. jeonse-fraud-mortgage-concealment-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-mortgage-concealment-track',
    keyword: '근저당 고지 누락 전세 임차권등기 시효',
    questionKeyword: '근저당이 잡힌 사실을 제대로 고지받지 못하고 전세계약을 했고, 보증금을 못 받아 임차권등기명령까지 마쳤는데 시간이 오래 지났어요. 임차권등기를 해두면 보증금반환채권 시효가 자동으로 중단되는 건가요?',
    ctaKeyword: '근저당 고지 누락 전세 임차권등기 시효 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '근저당 고지 누락 전세 — 5단계 임차권등기·시효 점검 | 로앤가이드',
      description:
        '근저당 고지를 못 받은 전세에서 임차권등기 후 시효가 막막하다면 주택임대차보호법 제3조의3 임차권등기의 담보적 효력과 민법 제168조 시효중단 한계 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세계약을 할 때 이미 근저당이 잡혀 있다는 사실을 제대로 고지받지 못한 채 들어왔다가, 계약이 끝나고도 보증금을 돌려받지 못한 임차인입니다. 이사를 가야 해서 임차권등기명령을 받아 등기까지 마쳐두고 나왔는데, 그 뒤로 시간이 꽤 흘렀어요. 임차권등기를 해두었으니 보증금반환채권의 소멸시효도 자동으로 중단된 줄 알았는데, 그렇지 않을 수 있다는 말을 들어서 보증금을 끝내 못 받게 될까 막막한 상태입니다." 주택임대차보호법 제3조의3은 임차권등기명령에 따른 임차권등기를, 민법 제168조는 압류·가압류·가처분 등을 소멸시효 중단사유로 정하는 영역입니다. 판례·실무는 임차권등기명령에 따른 임차권등기는 임차인의 대항력·우선변제권을 취득·유지하게 하는 담보적 기능을 주목적으로 하는 것이어서, 특정 목적물에 대한 집행·보전처분인 압류·가압류·가처분과 달리 민법 제168조 제2호의 시효중단 사유에 준하는 효력이 있다고 보기는 어렵다고 보는 본 사례 흐름이 있는 영역입니다. 근저당 고지 누락 + 임차권등기 + 시효 경과 결합은 \'임차권등기 효력·시효중단\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 권리관계 ② 임차권등기 효력 ③ 시효중단 ④ 반환청구 ⑤ 회수 5중 트랙이 가능한 영역. 대응은 ① 권리 ② 등기 ③ 시효 ④ 청구 ⑤ 회수 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 근저당 고지 누락 전세 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리관계·임차권등기 효력·시효중단·반환청구·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리관계</strong> — 등기부 근저당·임차권등기·고지 정황 확인.</li>\n<li><strong>② 임차권등기 효력</strong> — 대항력·우선변제권 유지 등 담보적 기능 정리.</li>\n<li><strong>③ 시효중단</strong> — 임차권등기만으로 보증금반환채권 시효가 중단되는지 검토.</li>\n<li><strong>④ 반환청구</strong> — 시효 관리 위해 지급명령·소 제기 등 청구 검토.</li>\n<li><strong>⑤ 회수</strong> — 보증금 반환·배당 등 회수 경로 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임차권등기명령에 따른 임차권등기는 대항력·우선변제권을 취득·유지하게 하는 담보적 기능이 주목적이어서, 압류·가압류·가처분과 달리 그 자체로 보증금반환채권의 소멸시효를 중단시키는 효력이 있다고 보기는 어려울 수 있는 영역. 시효 관리를 위해서는 지급명령·소 제기 등 별도 조치를 검토하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수·대응 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·법원·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·등기 자료 확보 (즉시)</strong> — 등기부·근저당·임차권등기, 계약·고지 정황 자료 확보.</li>\n<li><strong>2단계 — 시효 점검 (수일 내)</strong> — 보증금반환채권 발생 시점·경과 기간, 시효 임박 여부 점검.</li>\n<li><strong>3단계 — 시효 관리 조치 (지체 없이)</strong> — 지급명령·소 제기 등 시효중단 조치 검토.</li>\n<li><strong>4단계 — 반환청구·집행 (병행)</strong> — 보증금반환청구, 판결 후 강제집행·배당 검토.</li>\n<li><strong>5단계 — 회수·책임 검토 (병행)</strong> — 고지 누락·기망 정황 시 손해배상·형사 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 보증금 돌려받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">근저당 고지 누락 전세 임차권등기·시효 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리관계·임차권등기·시효 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>부동산등기부등본 (근저당·임차권등기)</strong></li>\n<li><strong>임차권등기명령 결정·등기 완료 자료</strong></li>\n<li><strong>근저당 고지·설명 정황 자료 (기망 입증)</strong></li>\n<li><strong>보증금반환채권 발생 시점·경과 기간 메모 (시효 산정)</strong></li>\n<li><strong>보증금 송금 내역·임대인 교신 기록</strong></li>\n<li><strong>지급명령·소 제기 등 시효중단 조치 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 임차권등기는 대항력·우선변제권을 유지해주지만 그 자체로 보증금반환채권의 소멸시효까지 중단시킨다고 보기는 어려울 수 있으므로, 채권 발생 시점과 경과 기간을 점검해 시효가 임박했다면 지급명령·소 제기 같은 별도 조치를 검토해두는 것이 안전합니다. 근저당 고지·설명 정황 자료는 기망·중개사 책임 검토에도 도움이 되는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>임차권등기 효력</strong> — 대항력·우선변제권 유지의 담보적 기능.</li>\n<li><strong>시효중단</strong> — 임차권등기만으로 보증금채권 시효가 중단되는지.</li>\n<li><strong>시효 관리</strong> — 지급명령·소 제기 등 별도 조치 필요 여부.</li>\n<li><strong>고지 누락</strong> — 근저당 고지·설명 소홀과 기망 정황.</li>\n<li><strong>회수 범위</strong> — 반환청구·배당으로 실제 회수 가능 범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 임차권등기의 시효중단 효력 한계',
        summary:
          '대법원 2017다226629(대법원, 2019.05.16 선고) 영역에서 법원은 주택임대차보호법 제3조의3의 임차권등기명령에 따른 임차권등기는 특정 목적물에 대한 집행행위나 보전처분의 실행을 내용으로 하는 압류·가압류·가처분과 달리 임차인이 대항력·우선변제권을 취득·유지하게 하는 담보적 기능을 주목적으로 하는 것이어서, 가압류에 관한 절차규정을 일부 준용하더라도 민법 제168조 제2호의 시효중단 사유인 압류·가압류·가처분에 준하는 효력이 있다고 볼 수 없다고 판시했습니다. 근저당 고지 누락 전세에서 임차권등기 후 시간이 지난 사안에서도 시효중단 여부와 별도 조치 필요성을 검토해볼 수 있습니다.',
        takeaway: '근저당 고지 누락 + 임차권등기 + 시효 경과 결합 시 임차권등기 효력·시효중단 검토 영역 — 채권 발생 시점·경과 기간 점검 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '임차권등기를 해두면 시효가 자동으로 중단되나요?',
        answer:
          '<strong>임차권등기만으로는 보증금채권 시효가 중단된다고 보기 어려울 수 있는 영역입니다.</strong> 채권 발생 시점·경과 기간부터 점검.',
      },
      {
        question: '임차권등기는 그럼 어떤 효력이 있나요?',
        answer:
          '<strong>대항력·우선변제권을 취득·유지하게 하는 담보적 기능이 주목적인 영역입니다.</strong> 이사 후에도 권리 유지에 도움.',
      },
      {
        question: '시효가 다 되어가면 어떻게 하나요?',
        answer:
          '<strong>지급명령·소 제기 등 별도 시효중단 조치를 검토할 수 있는 영역입니다.</strong> 발생 시점·경과 기간을 확인해 서둘러 조치.',
      },
      {
        question: '근저당을 고지받지 못한 것도 다툴 수 있나요?',
        answer:
          '<strong>고지·설명 소홀·기망 정황이 있으면 손해배상·중개사 책임을 검토할 수 있는 영역입니다.</strong> 고지 정황 자료를 확보.',
      },
      {
        question: '시효 관리는 어디서 도움을 받나요?',
        answer:
          '<strong>법률구조공단(132)에서 보증금반환·시효 관련 무료 상담을 받아볼 수 있는 영역입니다.</strong> 등기·계약 자료를 갖춰 상담.',
      },
    ],
    cta: { text: '보증금 돌려받을 수 있는지 AI로 점검하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '임차권등기 비용 임대인 청구 회수', href: '/guide/jeonse-fraud/jeonse-fraud-lease-registration-cost-claim-recovery-track' },
      { label: '전세보증금반환보증 이행청구', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-protection-insurance-claim-process-track' },
      { label: '계약 후 이중저당 설정', href: '/guide/jeonse-fraud/jeonse-fraud-double-mortgage-after-contract-track' },
      { label: '임대인 변경 후 보증금 승계 깡통전세', href: '/guide/jeonse-fraud/jeonse-fraud-landlord-change-deposit-succession-track' },
      { label: '법인 임차 직원 거주 대항력', href: '/guide/jeonse-fraud/jeonse-fraud-corporate-tenant-opposing-power-track' },
    ],
  },
];
