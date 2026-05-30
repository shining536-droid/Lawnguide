import { SpokePage } from '../spoke-pages';

// batch82 assault(4) + dui(3) + jeonse-fraud(3) — 10개 (2026-05-30)
//
// 고유 존재 이유:
// 1. assault-parking-dispute-neighbor-shove-track — batch81 카페·버스·술집 폭행과 분기. 여기는 '주차 시비 끝에 이웃이 밀쳐 다친 피해자'의 증거 수집·고소·합의 판단형 트랙. 일상 갈등에서 비롯된 폭행·상해 입증과 진단서 확보가 핵심.
// 2. assault-online-game-offline-meetup-mutual-track — 모르는 사람 폭행류와 분기. 여기는 '온라인 게임에서 시비 붙어 오프라인 만남에서 쌍방 몸싸움'한 neutral 트랙. 쌍방·정당방위·과잉대응 경계 정리가 핵심.
// 3. assault-elderly-care-facility-staff-resident-track — 단순 폭행 신고류와 분기. 여기는 '요양시설 직원의 입소 노인 학대·폭행'을 의심하는 피해자(가족) 절차형 트랙. 노인학대 신고의무·1577-1389 신고 경로가 핵심.
// 4. assault-amateur-sports-collision-falsely-accused-defense — 피해자류와 분기. 여기는 '아마추어 운동 중 정상적 몸싸움인데 폭행 가해자로 신고된' accused 방어 트랙. 경기 중 위험인수·고의 부재 소명이 핵심.
// 5. dui-electric-kickboard-pm-drunk-riding-track — 차량 음주운전류와 분기. 여기는 '전동킥보드(PM) 음주 주행으로 단속된' accused 트랙. PM의 음주운전 적용 여부·범칙금 vs 형사 구분이 핵심.
// 6. dui-repeat-offense-license-revocation-administrative-track — 단순 음주류와 분기. 여기는 '2회 이상 음주로 면허취소된' accused의 형사+행정심판(90일) 절차형 트랙. 행정심판 별도 트랙·감경 요소가 핵심.
// 7. dui-property-damage-flee-combined-charge-track — 단순 음주류와 분기. 여기는 '음주 상태로 물피사고 후 자리를 뜬' accused의 음주+물피도주 병합 판단형 트랙. 도주 고의·인적사고 여부 구분이 핵심.
// 8. jeonse-fraud-new-officetel-developer-default-deposit-track — 빌라왕류와 분기. 여기는 '신축 오피스텔 시행사 부도로 보증금 반환 불능' 피해자 절차형 트랙. 임차권등기·HUG 보증이행·우선변제 검토가 핵심.
// 9. jeonse-fraud-fake-landlord-agent-impersonation-track — 단순 미반환류와 분기. 여기는 '집주인·중개인을 사칭한 사람과 계약해 보증금을 가로채인' 피해자 판단형 트랙. 무권대리·중개사 확인설명 책임 검토가 핵심.
// 10. jeonse-fraud-small-deposit-priority-repayment-track — 보증이행류와 분기. 여기는 '소액임차인 최우선변제 대상 여부'를 점검하는 피해자 판단형 트랙. 보증금 한도·대항요건·배당요구 시점이 핵심.

export const spokesBatch82AssaultDuiJeonseFraud: SpokePage[] = [
  // ─── 1. assault-parking-dispute-neighbor-shove-track ───
  {
    domain: 'assault',
    slug: 'assault-parking-dispute-neighbor-shove-track',
    keyword: '주차 시비 이웃 밀침 상해 고소',
    questionKeyword: '주차 문제로 같은 빌라 이웃과 말다툼하다 상대가 저를 밀쳐 넘어지면서 손목을 다쳤어요. 사과도 없는데 폭행·상해로 고소하고 치료비와 합의금을 받을 수 있나요?',
    ctaKeyword: '주차 시비 이웃 밀침 상해 증거 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '주차 시비 밀침 상해 — 5단계 증거·고소 점검 | 로앤가이드',
      description:
        '주차 다툼 중 이웃이 밀쳐 다쳤다면 진단서·폭행 상해 입증·고소·합의 5가지 트랙으로 무엇부터 챙길지 지금 확인하세요.',
    },
    intro:
      '<p>"같은 빌라에 사는 이웃과 주차 자리 문제로 말다툼을 하던 중, 상대가 갑자기 제 어깨를 밀쳐 바닥에 넘어지면서 손목을 다친 피해자입니다. 그 자리에서는 너무 당황해 사진도 못 찍었고, 상대는 \'민 적 없다\'며 발뺌하고 있어요. 병원에 가니 인대 손상이라며 몇 주 치료가 필요하다는데, 사과도 없는 상대를 폭행이나 상해로 고소할 수 있는지, 치료비와 합의금은 어떻게 받는지 막막한 상태입니다." 형법 제260조 제1항은 사람의 신체에 대해 폭행한 자를 2년 이하의 징역 또는 500만원 이하의 벌금 등에 처하도록 정하고, 같은 법 제257조 제1항은 사람의 신체를 상해한 자를 7년 이하의 징역 등에 처하도록 규정하는 영역입니다. 판례·실무는 밀침 같은 유형력 행사로 신체에 상해가 발생했는지, 단순 폭행에 그쳤는지를 진단서·정황 증거로 구분해 평가하는 흐름입니다. 주차 시비 + 밀침 + 상해 진단 결합은 \'폭행·상해 고소·치료비·합의\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 상해 입증 ② 행위 정황 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 진단 ② 정황 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 주차 시비 밀침 상해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상해 입증·행위 정황·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상해 입증</strong> — 병원 진단서·치료기록으로 밀침과 손목 부상의 인과관계 정리.</li>\n<li><strong>② 행위 정황</strong> — 밀침 당시 CCTV·블랙박스·목격자 등 유형력 행사 정황 확보.</li>\n<li><strong>③ 고소</strong> — 폭행(형법 제260조)·상해(제257조) 중 진단 내용에 따라 고소 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 밀침이 단순 폭행에 그쳤는지, 상해(부상)로 이어졌는지에 따라 적용 죄명과 처리 흐름이 달라질 수 있는 영역. 진단서 확보 시점과 행위 정황 증거가 빠르게 모일수록 입증이 수월해지는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진단·증거 확보 (즉시~당일)</strong> — 병원 진료·상해진단서, 현장 사진·CCTV·블랙박스 확보 요청.</li>\n<li><strong>2단계 — 목격자·정황 정리 (수일 내)</strong> — 목격자 연락처, 다툼 경위·시간 기록 정리.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 피해자 진술·대질 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">주차 시비 밀침 상해 고소·합의 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 상해 입증·행위 정황·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>상해진단서·진료기록 (부상 부위·치료기간)</strong></li>\n<li><strong>현장 CCTV·차량 블랙박스 영상</strong></li>\n<li><strong>다친 부위·현장 사진 (시간정보 포함)</strong></li>\n<li><strong>목격자 진술·연락처</strong></li>\n<li><strong>다툼 경위·시간 메모 (육하원칙)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>상대와의 문자·통화 등 교신 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: CCTV·블랙박스 영상은 보존기간이 짧아 며칠 안에 사라질 수 있으므로, 관리사무소·인근 상가에 보존 요청을 먼저 해두는 것이 도움이 됩니다. 진단서는 부상 직후에 받아두면 밀침과 부상의 인과관계 정리에 유리한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>폭행·상해 구분</strong> — 밀침이 단순 폭행인지, 상해로 평가되는지.</li>\n<li><strong>인과관계</strong> — 부상이 밀침으로 발생했는지, 기존 상태인지.</li>\n<li><strong>쌍방 여부</strong> — 말다툼 과정에서 상호 유형력이 오갔는지.</li>\n<li><strong>합의·처벌 의사</strong> — 폭행죄 반의사불벌 성격과 합의가 처리에 미치는 영향.</li>\n<li><strong>합의금 수준</strong> — 사례에 따라 다르지만 치료기간·과실 정도에 따라 달라질 수 있는 부분.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>검찰 범죄피해자 지원 1301</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위력·유형력 행사의 의미와 판단 방법',
        summary:
          '대법원 2023도16500(대법원, 2025.07.18 선고) 영역에서 법원은 특정범죄가중법 제5조의9 제4항의 \'위력\'이란 자유의사를 제압·혼란케 할 만한 일체의 유형적 또는 무형적 세력을 말하고 폭행·협박은 물론 사회적·경제적 지위 등에 의한 압력도 포함하며, \'위력 행사\'에 해당하는지는 범행의 일시·장소·동기·인원수·세력의 태양·피해자의 지위 등 제반 사정을 객관적으로 고려해 판단해야 한다고 판시했습니다. 주차 시비 중 밀침 같은 유형력 행사가 폭행·상해에 해당하는지를 검토할 때에도 행위의 정황을 종합해 살펴볼 수 있는 영역입니다.',
        takeaway: '주차 시비 + 밀침 + 상해 진단 결합 시 폭행·상해 고소·치료비·합의 검토 영역 — 진단서·정황 증거 확보 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '밀쳐서 넘어진 정도도 폭행이나 상해가 되나요?',
        answer:
          '<strong>밀침 같은 유형력 행사도 폭행에 해당할 수 있고, 부상이 생겼다면 상해로 평가될 수 있는 영역입니다.</strong> 진단서로 부상 정도부터 정리.',
      },
      {
        question: '그 자리에서 증거를 못 챙겼는데 괜찮나요?',
        answer:
          '<strong>현장 CCTV·블랙박스·목격자 진술로 사후에도 정황을 보강할 수 있는 영역입니다.</strong> 영상 보존 요청을 서둘러 진행.',
      },
      {
        question: '상대가 민 적 없다고 발뺌하면 어떻게 하나요?',
        answer:
          '<strong>객관 증거(영상·진단서·목격자)로 행위와 인과관계를 입증하는 영역입니다.</strong> 정황 자료를 시간순으로 정리.',
      },
      {
        question: '치료비와 합의금은 어떻게 받나요?',
        answer:
          '<strong>형사 합의 또는 민사 손해배상으로 치료비·위자료를 청구하는 영역입니다.</strong> 사례에 따라 다르지만 치료기간·과실에 따라 수준이 달라질 수 있습니다.',
      },
      {
        question: '고소 기한이 있나요?',
        answer:
          '<strong>공소시효·고소 가능 기간이 있으므로 가능한 빨리 진행하는 것이 안전한 영역입니다.</strong> 증거가 사라지기 전 신속히 접수 검토.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: '상해진단서 발급', href: '/guide/assault/assault-injury-diagnosis-certificate' },
      { label: '폭행 합의금 기준', href: '/guide/assault/assault-settlement-amount-standard' },
      { label: '쌍방폭행 대응', href: '/guide/assault/assault-mutual-fight-response' },
      { label: 'CCTV 영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
    ],
  },

  // ─── 2. assault-online-game-offline-meetup-mutual-track ───
  {
    domain: 'assault',
    slug: 'assault-online-game-offline-meetup-mutual-track',
    keyword: '온라인 게임 시비 오프라인 만남 쌍방',
    questionKeyword: '온라인 게임에서 시비가 붙어 상대와 직접 만나기로 했다가 서로 몸싸움이 났어요. 둘 다 다쳤는데 쌍방폭행이 되는 건지, 제가 먼저 맞아서 막은 건 정당방위가 되는지 알고 싶어요.',
    ctaKeyword: '게임 시비 오프라인 쌍방 몸싸움 정황 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '게임 시비 오프라인 쌍방 — 5단계 쌍방·방위 점검 | 로앤가이드',
      description:
        '온라인 시비가 오프라인 몸싸움으로 번져 둘 다 다쳤다면 쌍방폭행 여부·정당방위 한계·증거 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"온라인 게임을 하다 상대와 채팅으로 시비가 붙었고, 감정이 격해져 \'직접 보자\'며 약속을 잡았다가 만난 자리에서 서로 밀고 당기는 몸싸움이 벌어진 상황입니다. 누가 먼저 손을 댔는지도 애매하고 둘 다 얼굴·팔에 멍이 들었어요. 저는 먼저 맞아서 막으려 한 것뿐인데, 경찰에서는 \'쌍방\'이라는 말이 나옵니다. 정당방위가 되는지, 아니면 둘 다 처벌 대상이 되는지 막막한 상태입니다." 형법 제260조 제1항은 폭행을, 같은 법 제257조 제1항은 상해를 규정하고, 같은 법 제21조 제1항은 현재의 부당한 침해를 방위하기 위한 상당한 이유 있는 행위는 벌하지 않는다고 정하는 영역입니다. 실무는 서로 공격·반격이 오간 경우 단순한 방어를 넘는 적극적 가격은 정당방위로 보기 어렵고 쌍방폭행으로 평가될 여지가 있다고 보는 흐름입니다. 사전 약속 + 상호 유형력 + 양측 부상 결합은 \'쌍방폭행 여부·정당방위 한계\' 다툼이 검토될 수 있는 트랙입니다. 관련자라면 ① 발단 ② 선후·정도 ③ 방위 한계 ④ 증거 ⑤ 합의·처분 5중 트랙이 가능한 영역. 대응은 ① 발단 ② 선후 ③ 방위 ④ 증거 ⑤ 처분 5단계로 검토해볼 수 있습니다. 관련자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 게임 시비 오프라인 쌍방 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 발단·선후 정도·방위 한계·증거·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 발단 정리</strong> — 온라인 채팅·만남 약속 경위와 시비의 발단 기록 정리.</li>\n<li><strong>② 선후·정도</strong> — 누가 먼저 유형력을 행사했고, 가격의 정도·횟수가 어땠는지.</li>\n<li><strong>③ 방위 한계</strong> — 단순 방어를 넘어 적극적 공격으로 나아갔는지(정당방위 한계).</li>\n<li><strong>④ 증거</strong> — 채팅 로그·CCTV·블랙박스·진단서로 정황 확보.</li>\n<li><strong>⑤ 합의·처분</strong> — 쌍방 처리 가능성·합의·처분 흐름 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 서로 공격과 반격이 오간 다툼은 단순한 방어를 넘는 가격이 있었다면 정당방위로 인정되기 어렵고 쌍방폭행으로 평가될 여지가 있는 영역. 누가 먼저, 어느 정도로 유형력을 행사했는지의 선후·정도가 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 정리·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증거 보존 (즉시~당일)</strong> — 게임 채팅·약속 메시지 캡처, 부상 사진·진단서 확보.</li>\n<li><strong>2단계 — 선후·정도 정리 (수일 내)</strong> — 시비 발단, 가격 선후·횟수, 현장 정황 기록.</li>\n<li><strong>3단계 — CCTV·목격자 확보 (가능한 빨리)</strong> — 현장 CCTV·블랙박스 보존 요청, 목격자 진술.</li>\n<li><strong>4단계 — 경찰 조사 대응 (수사기관 일정)</strong> — 진술 일관성 유지, 방위·정도 정황 설명.</li>\n<li><strong>5단계 — 합의·처분 검토 (병행)</strong> — 쌍방 합의 또는 처분 흐름 확인.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의금과 대응 전략, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">게임 시비 오프라인 쌍방 몸싸움 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 발단·선후·방위 갈래입니다.</strong></p>\n<ul>\n<li><strong>게임 채팅·만남 약속 메시지 캡처</strong></li>\n<li><strong>현장 CCTV·블랙박스 영상</strong></li>\n<li><strong>부상 사진·상해진단서 (양측)</strong></li>\n<li><strong>목격자 진술·연락처</strong></li>\n<li><strong>시비 발단·가격 선후 메모 (육하원칙)</strong></li>\n<li><strong>치료비 영수증·통원 내역</strong></li>\n<li><strong>상대와의 사후 교신 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 만나기로 한 약속·시비 발단이 채팅에 남아 있으면 발단 경위 정리에 도움이 됩니다. 다만 \'만나서 따지자\'는 식의 적극적 약속 정황은 단순 방어 주장에 불리하게 작용할 수 있으므로, 선후·정도를 사실대로 정리하는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>쌍방 여부</strong> — 상호 유형력이 오가 쌍방폭행으로 평가되는지.</li>\n<li><strong>정당방위 한계</strong> — 단순 방어를 넘는 적극적 가격이었는지.</li>\n<li><strong>선후·정도</strong> — 누가 먼저, 어느 정도로 가격했는지.</li>\n<li><strong>약속 정황</strong> — 사전 만남 약속이 다툼 의사로 해석될 여지.</li>\n<li><strong>합의·처분</strong> — 쌍방 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>검찰 범죄피해자 지원 1301</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 성적 학대행위의 의미와 인식 정도 판단 기준',
        summary:
          '대법원 2025도3890(대법원, 2025.07.18 선고) 영역에서 법원은 구 아동복지법상 \'성적 수치심을 주는 성희롱 등의 성적 학대행위\'의 의미와 그 성립에 필요한 인식의 정도를 판단하면서, 행위자에게 반드시 학대 목적·의도가 있어야 하는 것은 아니고 결과 발생의 위험·가능성을 미필적으로 인식하면 충분하다고 판시했습니다. 폭행·상해 사안에서도 고의·인식의 정도를 정황에 따라 판단한다는 흐름을 참고해, 쌍방 몸싸움에서 행위의 선후·정도를 검토해볼 수 있는 영역입니다.',
        takeaway: '사전 약속 + 상호 유형력 + 양측 부상 결합 시 쌍방폭행 여부·정당방위 한계 검토 영역 — 선후·정도 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '먼저 맞아서 막은 것도 처벌되나요?',
        answer:
          '<strong>단순 방어를 넘는 적극적 가격이 있었다면 정당방위로 인정되기 어려운 영역입니다.</strong> 선후·정도를 사실대로 정리.',
      },
      {
        question: '둘 다 다쳤는데 쌍방폭행인가요?',
        answer:
          '<strong>상호 유형력이 오갔다면 쌍방으로 평가될 여지가 있는 영역입니다.</strong> 누가 먼저·어느 정도였는지 정황을 확보.',
      },
      {
        question: '만나자고 한 게 불리하게 작용하나요?',
        answer:
          '<strong>사전 만남 약속이 다툼 의사로 해석될 여지가 있는 영역입니다.</strong> 채팅 맥락 전체를 함께 정리.',
      },
      {
        question: '게임 채팅 기록이 증거가 되나요?',
        answer:
          '<strong>채팅 로그는 시비 발단·약속 경위를 보여주는 정황 자료가 되는 영역입니다.</strong> 캡처를 시간순으로 보존.',
      },
      {
        question: '합의하면 어떻게 되나요?',
        answer:
          '<strong>폭행죄는 반의사불벌 성격이 있어 합의가 처리에 영향을 줄 수 있는 영역입니다.</strong> 합의 조건을 신중히 검토.',
      },
    ],
    cta: { text: '합의금과 대응 전략, AI로 확인하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '쌍방폭행 대응', href: '/guide/assault/assault-mutual-fight-response' },
      { label: '정당방위 인정 기준', href: '/guide/assault/assault-self-defense-standard' },
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: '폭행 합의금 기준', href: '/guide/assault/assault-settlement-amount-standard' },
      { label: 'CCTV 영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
    ],
  },

  // ─── 3. assault-elderly-care-facility-staff-resident-track ───
  {
    domain: 'assault',
    slug: 'assault-elderly-care-facility-staff-resident-track',
    keyword: '요양시설 직원 입소 노인 학대 신고',
    questionKeyword: '요양원에 모신 부모님 몸에 멍과 상처가 자주 보이고, 직원이 거칠게 대한다는 정황이 있어요. 노인학대·폭행으로 신고하려면 어디에 어떻게 알려야 하고 무엇부터 챙겨야 하나요?',
    ctaKeyword: '요양시설 노인 학대 신고 절차 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '요양시설 노인학대 신고 — 5단계 신고·증거 점검 | 로앤가이드',
      description:
        '요양원 부모님 몸에 멍과 상처가 보인다면 노인학대 신고 1577-1389·증거 확보·형사 절차 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"요양원에 모신 부모님을 면회할 때마다 팔과 등에 멍이나 긁힌 상처가 자주 보이고, 부모님은 말을 아끼지만 직원이 거칠게 대하는 것 같다는 느낌을 받는 보호자입니다. 시설에 물어보면 \'낙상\'이라고만 하는데, 같은 부위에 반복해서 상처가 생기니 의심이 가실 거예요. 혹시 학대나 폭행은 아닌지, 그렇다면 어디에 신고하고 무엇부터 챙겨야 하는지 막막한 상태입니다." 노인복지법은 노인학대를 금지하고 노인학대 신고·보호 체계를 두며, 형법 제257조·제260조는 상해·폭행을 규정하는 영역입니다. 또한 시설 종사자 등은 노인학대를 알게 된 경우 신고하도록 정해진 신고의무가 있는 영역입니다. 반복되는 상처 + 거친 처우 정황 + 시설 설명 불일치 결합은 \'노인학대 신고·증거 확보·형사 절차\' 검토가 가능한 트랙입니다. 보호자라면 ① 상태 기록 ② 신고 ③ 조사 협조 ④ 형사 ⑤ 분리·보호 5중 트랙이 가능한 영역. 대응은 ① 기록 ② 신고 ③ 조사 ④ 형사 ⑤ 보호 5단계로 검토해볼 수 있습니다. 보호자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 요양시설 노인학대 신고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상태 기록·신고·조사 협조·형사·분리 보호 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상태 기록</strong> — 멍·상처 부위·날짜별 사진, 진료·진단 기록 정리.</li>\n<li><strong>② 신고</strong> — 노인보호전문기관 1577-1389 또는 112 학대 신고.</li>\n<li><strong>③ 조사 협조</strong> — 노인보호전문기관·지자체·경찰 현장조사 협조.</li>\n<li><strong>④ 형사 절차</strong> — 폭행·상해 등 혐의 정황 시 수사기관 고소·송치 흐름.</li>\n<li><strong>⑤ 분리·보호</strong> — 피해 노인 분리·다른 시설 이전 등 보호 조치 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 노인학대는 신고의무가 정해진 영역으로, 의심 단계에서도 노인보호전문기관(1577-1389)·112 신고가 가능한 트랙. 반복되는 상처와 시설 설명의 불일치를 날짜별로 기록해두는 것이 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·보호 5단계',
        content:
          '<p><strong>A. 노인보호전문기관·경찰 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 상태 기록 (발견 즉시)</strong> — 상처 부위 사진(날짜 포함)·면회 일지·진료 기록 확보.</li>\n<li><strong>2단계 — 학대 신고 (지체 없이)</strong> — 노인보호전문기관 1577-1389 또는 112 신고.</li>\n<li><strong>3단계 — 현장조사 협조 (신고 후)</strong> — 노인보호전문기관·지자체 조사에 정황·자료 제공.</li>\n<li><strong>4단계 — 형사 고소·수사 (혐의 정황 시)</strong> — 폭행·상해 고소 → 조사 → 검찰 송치.</li>\n<li><strong>5단계 — 분리·보호 조치 (병행)</strong> — 피해 노인 분리·이전, 의료·심리 지원 연계.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">요양시설 노인학대 신고·증거 확보 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 상태 기록·신고·형사 갈래입니다.</strong></p>\n<ul>\n<li><strong>상처·멍 부위 사진 (날짜·부위별)</strong></li>\n<li><strong>병원 진료기록·진단서</strong></li>\n<li><strong>면회 일지·시설 설명 메모 (불일치 정황)</strong></li>\n<li><strong>요양원 입소 계약서·간병 기록</strong></li>\n<li><strong>시설 CCTV 보존 요청 자료</strong></li>\n<li><strong>다른 입소자·종사자 진술 (확보 가능 시)</strong></li>\n<li><strong>부모님 진술·녹취 (가능한 범위)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 시설 CCTV는 보존기간이 짧을 수 있어 신고와 함께 보존 요청을 서두르는 것이 도움이 됩니다. 상처가 \'낙상\'으로 설명되더라도 같은 부위 반복·시설 설명 불일치를 날짜별로 기록해두면 조사·수사 단계에서 정황 자료가 되는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>학대·사고 구분</strong> — 상처가 학대인지, 낙상 등 사고인지.</li>\n<li><strong>인과·반복성</strong> — 같은 부위 반복·시설 설명 불일치 정황.</li>\n<li><strong>증거 보존</strong> — CCTV 보존기간 도과 위험.</li>\n<li><strong>신고의무·보복 우려</strong> — 신고 후 피해 노인 보호·분리 필요성.</li>\n<li><strong>형사·행정 병행</strong> — 형사 고소와 시설 행정처분 절차 병행 가능성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>노인보호전문기관 (노인학대 신고) 1577-1389</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부양의무 직계존속에 대한 학대와 보호 대상',
        summary:
          '대법원 2025도12963(대법원, 2025.11.06 선고) 영역에서 법원은 자력 또는 근로로 생활을 유지할 수 없는 직계존속은 직계비속의 보호를 받는 사람으로서 형법 제273조 제2항 존속학대죄의 객체가 될 수 있고, 직계존속에 대한 성년후견이 개시되어 별도의 성년후견인이 있더라도 부양의무를 지는 직계비속이 학대하면 존속학대죄에 해당한다고 판시했습니다. 보호를 받는 노인에 대한 학대를 어떻게 평가하는지를 보여주는 흐름으로, 요양시설 내 입소 노인 학대 정황을 검토할 때에도 참고해볼 수 있는 영역입니다.',
        takeaway: '반복 상처 + 거친 처우 + 시설 설명 불일치 결합 시 노인학대 신고·증거 확보·형사 절차 검토 영역 — 1577-1389 신고 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '학대인지 사고인지 확실하지 않은데 신고해도 되나요?',
        answer:
          '<strong>의심 단계에서도 노인학대 신고가 가능한 영역입니다.</strong> 노인보호전문기관 1577-1389 또는 112로 신고 검토.',
      },
      {
        question: '무엇부터 챙겨야 하나요?',
        answer:
          '<strong>상처 부위 사진(날짜 포함)과 진료기록 확보가 출발점인 영역입니다.</strong> 시설 CCTV 보존 요청도 함께 진행.',
      },
      {
        question: '시설이 낙상이라고 하는데 어떻게 다투나요?',
        answer:
          '<strong>같은 부위 반복·설명 불일치를 날짜별로 기록해 정황을 정리하는 영역입니다.</strong> 진단서·CCTV로 보강 검토.',
      },
      {
        question: '신고하면 부모님이 불이익을 받지 않을까요?',
        answer:
          '<strong>신고 후 분리·이전 등 보호 조치를 함께 검토할 수 있는 영역입니다.</strong> 보호 연계를 신고 단계에서 요청.',
      },
      {
        question: '형사 고소도 같이 할 수 있나요?',
        answer:
          '<strong>폭행·상해 등 혐의 정황이 있으면 형사 고소와 행정 절차를 병행할 수 있는 영역입니다.</strong> 증거를 갖춰 신중히 진행.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '노인학대 신고 절차', href: '/guide/assault/assault-elder-abuse-report-procedure' },
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: '상해진단서 발급', href: '/guide/assault/assault-injury-diagnosis-certificate' },
      { label: 'CCTV 영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
      { label: '범죄피해자 지원 제도', href: '/guide/assault/assault-victim-support-system' },
    ],
  },

  // ─── 4. assault-amateur-sports-collision-falsely-accused-defense ───
  {
    domain: 'assault',
    slug: 'assault-amateur-sports-collision-falsely-accused-defense',
    keyword: '아마추어 운동 경기 중 충돌 폭행 신고',
    questionKeyword: '동호회 축구 경기 중 몸싸움하다 상대와 부딪쳐 상대가 다쳤는데, 저를 폭행 가해자로 신고했어요. 경기 중 정상적인 몸싸움인데도 폭행이 되는 건가요? 어떻게 소명해야 하나요?',
    ctaKeyword: '경기 중 충돌 폭행 혐의 소명 자료 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '경기 중 충돌 폭행 신고 — 5단계 고의·위험인수 점검 | 로앤가이드',
      description:
        '동호회 운동 중 부딪쳐 다쳤다는 이유로 폭행 가해자로 신고됐다면 고의 부재·경기 중 위험인수·소명 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"동호회 축구 경기 중 공을 다투며 상대와 몸싸움을 하다 부딪쳤는데, 상대가 넘어지며 다쳤습니다. 저는 경기 중 흔히 있는 충돌이라고 생각했는데, 상대는 \'일부러 가격했다\'며 저를 폭행 가해자로 신고했어요. 운동 경기에서 정상적으로 몸을 부딪친 것까지 폭행이 되는 건지, 혐의를 받고 있다면 어떻게 사실대로 소명해야 하는지 막막한 상태입니다." 형법 제260조 제1항은 폭행을, 같은 법 제257조 제1항은 상해를 규정하고, 운동경기 중 통상 예상되는 신체 접촉은 참가자가 일정 위험을 인수한 것으로 볼 여지가 있어 고의·위법성 평가가 달라질 수 있는 영역입니다. 다만 경기의 규칙·통상의 범위를 명백히 벗어난 고의적 가격이라면 폭행·상해로 평가될 여지도 있는 흐름입니다. 경기 중 접촉 + 부상 발생 + 고의 주장 신고 결합은 \'고의 부재·위험인수 소명\' 다툼이 검토될 수 있는 트랙입니다. 혐의를 받고 있다면 ① 경위 ② 고의 여부 ③ 위험인수 ④ 증거 ⑤ 소명·합의 5중 트랙이 가능한 영역. 대응은 ① 경위 ② 고의 ③ 인수 ④ 증거 ⑤ 소명 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 경기 중 충돌 폭행 혐의 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·고의 여부·위험인수·증거·소명 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위 정리</strong> — 경기 상황·접촉 장면·몸싸움의 통상성 정리.</li>\n<li><strong>② 고의 여부</strong> — 경기 진행 중 우발적 접촉인지, 규칙을 벗어난 고의 가격인지.</li>\n<li><strong>③ 위험인수</strong> — 운동경기 참가자가 통상 예상되는 신체 접촉 위험을 인수했는지.</li>\n<li><strong>④ 증거</strong> — 경기 영상·동료 진술·심판 기록 등으로 정황 확보.</li>\n<li><strong>⑤ 소명·합의</strong> — 수사기관 소명·진술, 필요 시 합의 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 운동경기 중 통상 예상되는 신체 접촉은 참가자의 위험인수로 볼 여지가 있어 고의·위법성 평가가 달라질 수 있는 영역. 다만 규칙·통상의 범위를 명백히 벗어난 고의적 가격은 폭행·상해로 평가될 여지가 있어, 접촉의 통상성·고의 부재 소명이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 소명·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 경기 자료 확보 (즉시~당일)</strong> — 경기 영상·사진, 동료·심판 연락처 확보.</li>\n<li><strong>2단계 — 경위·접촉 정황 정리 (수일 내)</strong> — 접촉 장면, 몸싸움의 통상성·우발성 기록.</li>\n<li><strong>3단계 — 소명 자료 구성 (가능한 빨리)</strong> — 고의 부재·위험인수 정황 정리.</li>\n<li><strong>4단계 — 경찰 조사 대응 (수사기관 일정)</strong> — 진술 일관성 유지, 정황 설명.</li>\n<li><strong>5단계 — 합의·처분 검토 (병행)</strong> — 필요 시 합의 또는 처분 흐름 확인.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 합의금과 대응 전략, AI로 확인하기</strong></p>\n<p style="margin:0;font-size:0.95em">경기 중 충돌 폭행 혐의 소명 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·고의·위험인수 갈래입니다.</strong></p>\n<ul>\n<li><strong>경기 영상·사진 (접촉 장면)</strong></li>\n<li><strong>동료·심판 진술서 (통상성·우발성)</strong></li>\n<li><strong>동호회 경기 규칙·진행 자료</strong></li>\n<li><strong>접촉 경위·시간 메모 (육하원칙)</strong></li>\n<li><strong>상대 부상 정도·진단 관련 자료 (확인 가능 범위)</strong></li>\n<li><strong>사후 교신 기록 (상대와의 연락)</strong></li>\n<li><strong>본인 진술 정리 메모 (소명용)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 경기 영상이 있다면 접촉이 경기 진행 중 우발적이었는지, 규칙을 벗어난 고의 가격이었는지 판단의 핵심 자료가 됩니다. 동료·심판의 진술로 \'통상의 몸싸움\'이라는 정황을 함께 정리해두면 고의 부재 소명에 도움이 되는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>고의 여부</strong> — 우발적 접촉인지, 고의 가격인지.</li>\n<li><strong>위험인수</strong> — 경기 참가로 통상 신체 접촉 위험을 인수했는지.</li>\n<li><strong>통상성 일탈</strong> — 규칙·통상의 범위를 명백히 벗어났는지.</li>\n<li><strong>상해 인과</strong> — 부상이 접촉으로 발생했는지, 정도가 어떤지.</li>\n<li><strong>합의·처분</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>검찰 범죄피해자 지원 1301</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 비약적 상고와 항소 경합 시 효력 판단',
        summary:
          '대법원 2025도11655(대법원, 2025.10.16 선고) 영역에서 법원은 적법하게 제기된 항소에 의해 항소의 효력이 유지되는 중에 피고인이 비약적 상고를 제기한 경우 그 비약적 상고는 효력이 없고, 제1심법원은 항소가 취하되거나 항소기각결정이 있는 경우가 아닌 한 항소사건으로서 항소심법원에 기록을 송부해야 한다고 판시했습니다. 형사 절차의 상소·기록 송부 원칙을 보여주는 흐름으로, 폭행 혐의로 신고된 사건에서 절차 대응을 검토할 때 참고해볼 수 있는 영역입니다.',
        takeaway: '경기 중 접촉 + 부상 + 고의 주장 신고 결합 시 고의 부재·위험인수 소명 검토 영역 — 경기 영상·진술 확보 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '경기 중 정상적인 몸싸움도 폭행이 되나요?',
        answer:
          '<strong>통상 예상되는 신체 접촉은 위험인수로 볼 여지가 있어 평가가 달라질 수 있는 영역입니다.</strong> 접촉의 통상성·우발성을 정리.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>경기 영상·동료·심판 진술 확보가 소명의 출발점인 영역입니다.</strong> 영상 보존을 서둘러 요청.',
      },
      {
        question: '상대가 일부러 쳤다고 주장하는데요?',
        answer:
          '<strong>고의 여부는 영상·정황으로 판단되는 영역입니다.</strong> 규칙 범위 내 접촉이었다는 정황을 보강.',
      },
      {
        question: '상대가 크게 다쳤으면 불리한가요?',
        answer:
          '<strong>상해 정도와 함께 고의·통상성 일탈 여부가 함께 평가되는 영역입니다.</strong> 인과·정황 자료를 정리.',
      },
      {
        question: '합의를 하는 게 나을까요?',
        answer:
          '<strong>사안에 따라 합의가 처리에 영향을 줄 수 있는 영역입니다.</strong> 사례에 따라 다르지만 부상 정도·과실에 따라 합의 수준이 달라질 수 있습니다.',
      },
    ],
    cta: { text: '합의금과 대응 전략, AI로 확인하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행 혐의 소명 대응', href: '/guide/assault/assault-accused-defense-procedure' },
      { label: '경기 중 부상 책임', href: '/guide/assault/assault-sports-injury-liability' },
      { label: '폭행 합의금 기준', href: '/guide/assault/assault-settlement-amount-standard' },
      { label: '쌍방폭행 대응', href: '/guide/assault/assault-mutual-fight-response' },
      { label: 'CCTV 영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
    ],
  },

  // ─── 5. dui-electric-kickboard-pm-drunk-riding-track ───
  {
    domain: 'dui',
    slug: 'dui-electric-kickboard-pm-drunk-riding-track',
    keyword: '전동킥보드 음주 주행 단속 처벌',
    questionKeyword: '술을 마시고 공유 전동킥보드를 타고 가다 단속됐어요. 킥보드는 차가 아니라 괜찮은 줄 알았는데, 음주운전으로 처벌되는 건지 면허에도 영향이 있는지 막막합니다.',
    ctaKeyword: '전동킥보드 음주 주행 적용·대응 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '전동킥보드 음주 주행 — 5단계 적용·면허 점검 | 로앤가이드',
      description:
        '술 마시고 전동킥보드를 타다 단속됐다면 PM 음주운전 적용 여부·범칙금·면허 영향 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"가까운 거리라 술을 한두 잔 마신 뒤 공유 전동킥보드(PM)를 타고 이동하다 경찰 단속에 걸린 상황입니다. 킥보드는 자동차가 아니니 음주운전과는 상관없는 줄 알았는데, 단속 현장에서 음주 측정을 했고 처벌 이야기가 나왔어요. 전동킥보드 음주 주행도 음주운전으로 처벌되는 건지, 운전면허에도 영향이 있는지, 혐의를 받고 있다면 어떻게 대응해야 하는지 막막한 상태입니다." 도로교통법은 개인형 이동장치(전동킥보드 등 PM)를 음주운전 규제 대상에 포함하고 있고, 같은 법은 술에 취한 상태의 기준(혈중알코올농도 0.03% 이상)을 정하는 영역입니다. 개인형 이동장치 음주 주행은 일반 차량 음주운전과 처벌·범칙 체계가 일부 다르게 적용될 수 있으나, 음주 측정 거부·고농도 등 사정에 따라 평가가 달라질 수 있는 흐름입니다. 음주 측정 + PM 주행 + 단속 적발 결합은 \'PM 음주운전 적용·면허 영향\' 검토가 가능한 트랙입니다. 혐의를 받고 있다면 ① 측정 적법성 ② 적용 법조 ③ 면허 영향 ④ 양형·감경 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 측정 ② 적용 ③ 면허 ④ 양형 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 전동킥보드 음주 주행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정 적법성·적용 법조·면허 영향·양형·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 측정 적법성</strong> — 음주 측정 절차·고지·동의 등 적법성 정리.</li>\n<li><strong>② 적용 법조</strong> — 개인형 이동장치(PM) 음주 주행에 적용되는 도로교통법 조항·범칙·형사 구분.</li>\n<li><strong>③ 면허 영향</strong> — 보유 운전면허에 미치는 행정처분 가능성 확인.</li>\n<li><strong>④ 양형·감경</strong> — 농도·거리·초범 여부 등 양형 사정 정리.</li>\n<li><strong>⑤ 대응</strong> — 수사·행정 절차 대응, 필요 시 행정심판 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 전동킥보드 등 개인형 이동장치(PM)도 도로교통법상 음주 규제 대상에 포함되는 영역으로, \'차가 아니니 괜찮다\'고 단정하기 어려운 트랙. 다만 일반 차량과 처벌·범칙 체계가 일부 다르게 적용될 수 있어 적용 법조·면허 영향 확인이 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사·행정 5단계',
        content:
          '<p><strong>A. 경찰·검찰·행정심판 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단속 자료 확보 (즉시~당일)</strong> — 측정 결과지·단속 경위·현장 정황 자료 확보.</li>\n<li><strong>2단계 — 적용 법조·면허 영향 확인 (수일 내)</strong> — PM 적용 조항·범칙/형사 구분·면허 처분 가능성 확인.</li>\n<li><strong>3단계 — 수사 대응 (수사기관 일정)</strong> — 진술·측정 적법성 정황 정리.</li>\n<li><strong>4단계 — 행정처분 통지·이의 (처분 후)</strong> — 면허 관련 처분 시 이의·행정심판 검토.</li>\n<li><strong>5단계 — 행정심판 청구 (처분 안 날 90일 이내)</strong> — 중앙행정심판위 청구 트랙 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">전동킥보드 음주 주행 적용·면허 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 측정·적용·면허 갈래입니다.</strong></p>\n<ul>\n<li><strong>음주 측정 결과지 (혈중알코올농도)</strong></li>\n<li><strong>단속 경위·현장 정황 자료</strong></li>\n<li><strong>공유 PM 이용 내역 (주행 구간·시간)</strong></li>\n<li><strong>운전면허 정보·운전 경력 자료</strong></li>\n<li><strong>음주 시작·종료 시각·음주량 메모</strong></li>\n<li><strong>초범·반성·생계 등 양형 자료</strong></li>\n<li><strong>행정심판 청구서 (면허 처분 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 측정 시각과 실제 주행 시각의 간격, 측정 절차의 적법성은 사건 평가에 영향을 줄 수 있어 단속 경위를 시간순으로 정리해두는 것이 도움이 됩니다. 면허 처분이 따르는 경우 행정심판은 형사 절차와 별도 트랙으로 진행되는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>적용 법조</strong> — PM 음주 주행에 적용되는 조항과 범칙/형사 구분.</li>\n<li><strong>측정 적법성</strong> — 측정 절차·고지·동의의 적법성.</li>\n<li><strong>면허 영향</strong> — 보유 운전면허 행정처분 여부.</li>\n<li><strong>양형 사정</strong> — 농도·거리·초범·반성 등.</li>\n<li><strong>행정심판 기한</strong> — 처분 안 날부터 90일 도과 위험.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 준수사항 적법성과 위법수집증거의 사용 제한',
        summary:
          '대법원 2025도7665(대법원, 2025.08.14 선고) 영역에서 법원은 전자장치부착법상 준수사항을 부과하면서 준수기간을 정하지 않은 것은 법 위반이고, 처벌하려면 준수사항이 적법해야 하며, 수사기관이 적법절차에 따르지 않고 수집한 증거와 그 2차적 증거는 원칙적으로 유죄의 증거로 쓸 수 없다고 판시했습니다. 음주 주행 사건에서도 측정·증거 수집 절차의 적법성이 평가에 영향을 줄 수 있다는 흐름을 참고해, 전동킥보드 음주 단속 대응을 검토해볼 수 있는 영역입니다.',
        takeaway: '음주 측정 + PM 주행 + 단속 적발 결합 시 적용 법조·측정 적법성·면허 영향 검토 영역 — 단속 자료 확보 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '전동킥보드도 음주운전으로 처벌되나요?',
        answer:
          '<strong>개인형 이동장치(PM)도 도로교통법상 음주 규제 대상에 포함되는 영역입니다.</strong> 적용 법조·범칙/형사 구분을 먼저 확인.',
      },
      {
        question: '자동차 음주운전과 처벌이 같나요?',
        answer:
          '<strong>일반 차량과 처벌·범칙 체계가 일부 다르게 적용될 수 있는 영역입니다.</strong> 농도·사정에 따라 평가가 달라질 수 있습니다.',
      },
      {
        question: '제 운전면허에도 영향이 있나요?',
        answer:
          '<strong>사정에 따라 면허 행정처분이 따를 수 있는 영역입니다.</strong> 면허 처분 통지 여부를 확인해 대응 검토.',
      },
      {
        question: '측정 절차에 문제가 있으면 다툴 수 있나요?',
        answer:
          '<strong>측정·증거 수집 절차의 적법성은 평가에 영향을 줄 수 있는 영역입니다.</strong> 단속 경위를 시간순으로 정리.',
      },
      {
        question: '면허 처분에 불복하려면 어떻게 하나요?',
        answer:
          '<strong>처분을 안 날부터 90일 이내 행정심판을 청구할 수 있는 영역입니다.</strong> 형사와 별도 트랙으로 신속히 검토.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '전동킥보드 음주 규제', href: '/guide/dui/dui-personal-mobility-regulation' },
      { label: '음주운전 행정심판 절차', href: '/guide/dui/dui-administrative-appeal-procedure' },
      { label: '면허취소·정지 기준', href: '/guide/dui/dui-license-revocation-suspension-standard' },
      { label: '음주운전 양형·감경', href: '/guide/dui/dui-sentencing-mitigation-factors' },
      { label: '음주 측정 절차', href: '/guide/dui/dui-breath-test-procedure' },
    ],
  },

  // ─── 6. dui-repeat-offense-license-revocation-administrative-track ───
  {
    domain: 'dui',
    slug: 'dui-repeat-offense-license-revocation-administrative-track',
    keyword: '음주운전 2회 이상 면허취소 행정심판',
    questionKeyword: '예전에 한 번 음주운전 처벌을 받았는데 이번에 또 단속돼 면허가 취소됐어요. 생계로 운전이 꼭 필요한데, 형사 처벌과 별도로 면허취소에 행정심판으로 다툴 수 있나요?',
    ctaKeyword: '음주 2회 면허취소 행정심판 준비 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '음주 2회 면허취소 — 5단계 형사·행정심판 점검 | 로앤가이드',
      description:
        '음주운전 2회 이상으로 면허가 취소됐다면 형사 절차와 별도인 행정심판 90일·감경 요소 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"몇 년 전 음주운전으로 한 번 처벌받은 적이 있는데, 이번에 다시 단속에 걸려 면허가 취소된 상황입니다. 출퇴근과 업무 모두 운전이 꼭 필요해 당장 생계가 막막하고, 형사 처벌까지 더해질까 두렵습니다. 형사 사건과 면허취소가 별개라는 말을 들었는데, 면허취소에 대해서는 어떻게, 언제까지 다퉈야 하는지, 혐의를 받고 있다면 무엇부터 챙겨야 하는지 막막한 상태입니다." 도로교통법은 음주운전 전력이 있는 사람의 재반복에 대해 가중된 형사처벌과 면허 행정처분을 정하고, 같은 법은 술에 취한 상태의 기준을 정하는 영역입니다. 형사 절차(수사·기소·재판)와 면허취소 같은 행정처분은 서로 별개의 트랙으로 진행되며, 행정처분에 불복하려면 행정심판·행정소송이라는 별도 절차를 거치는 흐름입니다. 음주 전력 + 재단속 + 면허취소 결합은 \'형사 대응·행정심판 90일\' 검토가 가능한 트랙입니다. 혐의를 받고 있다면 ① 측정·전력 ② 형사 대응 ③ 면허처분 ④ 행정심판 ⑤ 감경 5중 트랙이 가능한 영역. 대응은 ① 측정 ② 형사 ③ 처분 ④ 심판 ⑤ 감경 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주 2회 면허취소 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정·전력·형사 대응·면허처분·행정심판 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 측정·전력 정리</strong> — 음주 측정 결과·이전 처벌 전력·재단속 경위 정리.</li>\n<li><strong>② 형사 대응</strong> — 수사·기소·재판 흐름과 양형 사정 준비.</li>\n<li><strong>③ 면허처분 확인</strong> — 면허취소 처분 통지·사유·기준 확인.</li>\n<li><strong>④ 행정심판 (처분 안 날 90일 이내)</strong> — 면허취소에 대한 행정심판 청구 검토.</li>\n<li><strong>⑤ 감경 요소</strong> — 생계 필요성·반성·재범방지 노력 등 감경 사정 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형사 절차와 면허취소 행정처분은 별개의 트랙으로 진행되는 영역. 형사 결과와 무관하게 면허취소에 불복하려면 처분 안 날부터 90일 이내 행정심판이라는 별도 절차를 검토해야 하는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사·행정 5단계',
        content:
          '<p><strong>A. 경찰·검찰·중앙행정심판위 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단속·전력 자료 확보 (즉시~당일)</strong> — 측정 결과지·단속 경위·이전 처벌 전력 자료 확보.</li>\n<li><strong>2단계 — 형사 대응 준비 (수사기관 일정)</strong> — 진술·양형 자료 정리, 측정 적법성 검토.</li>\n<li><strong>3단계 — 면허취소 처분 확인 (처분 통지 시)</strong> — 처분 사유·기준·통지일 확인.</li>\n<li><strong>4단계 — 행정심판 청구 (처분 안 날 90일 이내)</strong> — 중앙행정심판위 청구서 제출.</li>\n<li><strong>5단계 — 감경·재범방지 자료 (병행)</strong> — 생계 필요성·반성·교육 이수 등 자료 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주 2회 면허취소 형사·행정심판 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 측정·형사·행정심판 갈래입니다.</strong></p>\n<ul>\n<li><strong>음주 측정 결과지 (혈중알코올농도)</strong></li>\n<li><strong>단속 경위·현장 정황 자료</strong></li>\n<li><strong>이전 음주 처벌 전력 자료</strong></li>\n<li><strong>면허취소 처분 통지서 (사유·통지일)</strong></li>\n<li><strong>생계 운전 필요성 자료 (재직·업무 증빙)</strong></li>\n<li><strong>반성·재범방지 노력 자료 (교육 이수 등)</strong></li>\n<li><strong>행정심판 청구서 (중앙행정심판위 양식)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 행정심판 청구 기한은 처분이 있음을 안 날부터 90일이라는 점이 중요해, 면허취소 통지일을 가장 먼저 확인해두는 것이 안전합니다. 형사 절차의 결과와 행정심판은 별도로 판단될 수 있어 각각의 자료를 따로 준비하는 것이 도움이 되는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>형사·행정 분리</strong> — 형사 결과와 면허처분이 별개로 판단되는 점.</li>\n<li><strong>측정·전력 정확성</strong> — 측정 절차·전력 산정의 정확성.</li>\n<li><strong>행정심판 기한</strong> — 처분 안 날부터 90일 도과 위험.</li>\n<li><strong>감경 사정</strong> — 생계 필요성·반성·재범방지 노력 정도.</li>\n<li><strong>위드마크 등 추정</strong> — 농도 추정의 전제 사실 입증 정도.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 측정 시점과 처벌기준치, 위드마크 적용의 신중성',
        summary:
          '대법원 2024도11906(대법원, 2025.07.18 선고) 영역에서 법원은 음주운전 시점이 혈중알코올농도 상승·하강 어느 국면인지 확정할 수 없는 상태에서 운전 종료 후 상당한 시간이 지나 측정한 농도가 처벌기준치를 약간 넘은 경우 운전 시점 농도가 기준치를 초과했다고 단정할 수 없고, 위드마크 공식으로 산출한 농도가 기준치를 근소하게 초과하는 정도라면 구성요건 사실 인정에 더욱 신중해야 한다고 판시했습니다. 음주 측정 시점·농도 추정이 다툼이 되는 사안에서 형사·행정 대응을 검토할 때 참고해볼 수 있는 영역입니다.',
        takeaway: '음주 전력 + 재단속 + 면허취소 결합 시 형사 대응과 별도로 행정심판 90일 검토 영역 — 통지일 확인 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '형사 처벌과 면허취소는 같이 정해지나요?',
        answer:
          '<strong>형사 절차와 면허취소 행정처분은 별개의 트랙으로 진행되는 영역입니다.</strong> 각각의 절차를 따로 준비.',
      },
      {
        question: '면허취소에 불복하려면 어떻게 하나요?',
        answer:
          '<strong>처분을 안 날부터 90일 이내 행정심판을 청구할 수 있는 영역입니다.</strong> 통지일을 먼저 확인.',
      },
      {
        question: '생계로 운전이 꼭 필요한데 참작되나요?',
        answer:
          '<strong>생계 필요성·반성 등은 감경 사정으로 검토될 수 있는 영역입니다.</strong> 재직·업무 증빙을 준비.',
      },
      {
        question: '측정 시점이 늦었는데 다툴 수 있나요?',
        answer:
          '<strong>측정 시점·농도 추정의 전제 사실은 신중히 판단되는 영역입니다.</strong> 단속 경위를 시간순으로 정리.',
      },
      {
        question: '예전 전력이 있으면 무조건 가중되나요?',
        answer:
          '<strong>전력은 가중 요소가 될 수 있으나 사정에 따라 평가가 달라질 수 있는 영역입니다.</strong> 전력 산정 정확성을 함께 확인.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 행정심판 절차', href: '/guide/dui/dui-administrative-appeal-procedure' },
      { label: '면허취소·정지 기준', href: '/guide/dui/dui-license-revocation-suspension-standard' },
      { label: '음주운전 재범 가중', href: '/guide/dui/dui-repeat-offense-aggravation' },
      { label: '음주운전 양형·감경', href: '/guide/dui/dui-sentencing-mitigation-factors' },
      { label: '위드마크 농도 추정', href: '/guide/dui/dui-widmark-estimation-dispute' },
    ],
  },

  // ─── 7. dui-property-damage-flee-combined-charge-track ───
  {
    domain: 'dui',
    slug: 'dui-property-damage-flee-combined-charge-track',
    keyword: '음주 물피사고 후 이탈 병합 처벌',
    questionKeyword: '술을 마신 상태로 주차된 차를 살짝 긁고 당황해서 그냥 자리를 떴어요. 나중에 연락이 왔는데, 음주운전에 물피도주까지 더해지는 건지, 사람은 안 다쳤는데도 처벌이 무거워지는지 막막합니다.',
    ctaKeyword: '음주 물피사고 이탈 병합 대응 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '음주 물피사고 이탈 — 5단계 도주·병합 점검 | 로앤가이드',
      description:
        '음주 상태로 물피사고 후 자리를 떴다면 음주운전과 물피도주 병합 여부·도주 고의 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술을 마신 상태로 운전하다 주차된 차량을 살짝 긁었는데, 순간 당황해 별다른 조치 없이 자리를 떠난 상황입니다. 사람이 다친 사고는 아니었지만 뒤늦게 상대에게서 연락이 왔고, 경찰 조사 이야기까지 나오고 있어요. 음주운전만으로도 걱정인데 \'물피도주\'까지 더해지는 건지, 인적 피해가 없는데도 처벌이 무거워지는지, 혐의를 받고 있다면 어떻게 대응해야 하는지 막막한 상태입니다." 도로교통법은 음주운전과 함께, 주·정차된 차 등 물건을 손괴하고 필요한 조치를 하지 않은 채 현장을 이탈한 경우(물피도주)에 대한 규정을 두고, 같은 법은 술에 취한 상태의 기준을 정하는 영역입니다. 인적 피해 없는 물피사고 후 이탈은 인적사고 도주(뺑소니)와는 적용·평가가 구분되지만, 음주운전과 결합되면 사건이 병합되어 다뤄질 수 있는 흐름입니다. 음주 측정 + 물피사고 + 현장 이탈 결합은 \'음주·물피도주 병합·도주 고의\' 검토가 가능한 트랙입니다. 혐의를 받고 있다면 ① 측정 ② 도주 고의 ③ 피해 정도 ④ 양형 ⑤ 합의 5중 트랙이 가능한 영역. 대응은 ① 측정 ② 고의 ③ 피해 ④ 양형 ⑤ 합의 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주 물피사고 이탈 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정·도주 고의·피해 정도·양형·합의 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 측정</strong> — 음주 측정 결과·운전 시점·측정 절차 적법성 정리.</li>\n<li><strong>② 도주 고의</strong> — 손괴 사실 인식·조치의무 회피 의사(도주 고의)가 있었는지.</li>\n<li><strong>③ 피해 정도</strong> — 물적 피해 범위, 인적 피해 유무 구분.</li>\n<li><strong>④ 양형</strong> — 초범·반성·자진 신고·피해 회복 등 양형 사정.</li>\n<li><strong>⑤ 합의</strong> — 피해 차량 소유자와의 합의·피해 회복 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 인적 피해 없는 물피사고 후 이탈은 인적사고 도주(뺑소니)와 적용·평가가 구분되는 영역. 다만 음주운전과 결합되면 사건이 병합되어 다뤄질 수 있어, 손괴 인식·조치의무 회피의 도주 고의가 핵심 다툼이 되는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고·측정 자료 확보 (즉시~당일)</strong> — 측정 결과지·사고 경위·피해 차량 사진·블랙박스 확보.</li>\n<li><strong>2단계 — 도주 고의·피해 정황 정리 (수일 내)</strong> — 손괴 인식 여부·이탈 경위·피해 정도 기록.</li>\n<li><strong>3단계 — 자진 신고·연락 (가능한 빨리)</strong> — 피해자 연락·자진 신고 등 회복 의사 표시.</li>\n<li><strong>4단계 — 경찰 조사 대응 (수사기관 일정)</strong> — 진술 일관성 유지, 측정·고의 정황 설명.</li>\n<li><strong>5단계 — 합의·양형 자료 (병행)</strong> — 피해 회복·합의·반성 자료 정리.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 탄원서와 감경 요소, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주 물피사고 이탈 병합·도주 고의 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 측정·도주 고의·양형 갈래입니다.</strong></p>\n<ul>\n<li><strong>음주 측정 결과지 (혈중알코올농도)</strong></li>\n<li><strong>사고 경위·현장 사진·블랙박스</strong></li>\n<li><strong>피해 차량 손괴 정도 자료</strong></li>\n<li><strong>이탈 경위·시간 메모 (손괴 인식 여부)</strong></li>\n<li><strong>자진 신고·피해자 연락 기록</strong></li>\n<li><strong>합의서·피해 회복 자료</strong></li>\n<li><strong>초범·반성 등 양형 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 물피사고 후 이탈에서는 \'손괴 사실을 인식하고도 조치 없이 떠났는지\'의 도주 고의가 핵심 쟁점이 됩니다. 인식 정도·이탈 경위를 사실대로 정리하고, 뒤늦게라도 피해 회복·합의에 나선 정황은 양형에 참작될 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>도주 고의</strong> — 손괴 인식·조치의무 회피 의사가 있었는지.</li>\n<li><strong>물피·인적 구분</strong> — 인적 피해 유무에 따른 적용 차이.</li>\n<li><strong>병합 처리</strong> — 음주운전과 물피도주가 병합되어 다뤄지는지.</li>\n<li><strong>측정·운전 시점</strong> — 측정 시점·농도 추정의 정확성.</li>\n<li><strong>합의·양형</strong> — 피해 회복·합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위드마크 공식 적용과 엄격한 증명',
        summary:
          '대법원 2020도6417(대법원, 2023.12.28 선고) 영역에서 법원은 음주 후 표본 검사로 농도를 측정할 수 없는 경우 위드마크 공식으로 운전 당시 농도를 추정할 수 있으나, 그 적용의 전제가 되는 개별적·구체적 사실에 엄격한 증명이 필요하고, 시간당 알코올분해량은 평균인과 같다고 쉽게 단정하지 말고 피고인에게 가장 유리한 신빙성 있는 통계를 대입해야 한다고 판시했습니다. 음주 상태에서 물피사고 후 이탈한 사건에서도 운전 당시 농도·측정 정황의 평가를 검토할 때 참고해볼 수 있는 영역입니다.',
        takeaway: '음주 측정 + 물피사고 + 현장 이탈 결합 시 음주·물피도주 병합과 도주 고의 검토 영역 — 측정·고의 정황 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '사람이 안 다쳤는데도 도주가 되나요?',
        answer:
          '<strong>물피사고 후 이탈은 인적사고 도주와 적용이 구분되는 영역입니다.</strong> 손괴 인식·조치의무 회피 여부가 핵심.',
      },
      {
        question: '음주운전과 물피도주가 같이 처리되나요?',
        answer:
          '<strong>음주운전과 결합되면 사건이 병합되어 다뤄질 수 있는 영역입니다.</strong> 각 정황을 사실대로 정리.',
      },
      {
        question: '당황해서 떠난 건데 도주 고의가 인정되나요?',
        answer:
          '<strong>손괴 인식 정도·이탈 경위에 따라 도주 고의 평가가 달라질 수 있는 영역입니다.</strong> 인식·경위를 사실대로 진술.',
      },
      {
        question: '뒤늦게 합의하면 도움이 되나요?',
        answer:
          '<strong>피해 회복·합의는 양형에 참작될 수 있는 영역입니다.</strong> 자진 신고·합의 정황을 정리.',
      },
      {
        question: '측정 시점이 늦었으면 다툴 수 있나요?',
        answer:
          '<strong>운전 당시 농도·측정 정황은 엄격히 판단되는 영역입니다.</strong> 단속 경위를 시간순으로 정리.',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 물피도주', href: '/guide/dui/dui-property-damage-flee-track' },
      { label: '음주운전 양형·감경', href: '/guide/dui/dui-sentencing-mitigation-factors' },
      { label: '위드마크 농도 추정', href: '/guide/dui/dui-widmark-estimation-dispute' },
      { label: '음주 측정 절차', href: '/guide/dui/dui-breath-test-procedure' },
      { label: '음주운전 합의·탄원', href: '/guide/dui/dui-settlement-petition' },
    ],
  },

  // ─── 8. jeonse-fraud-new-officetel-developer-default-deposit-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-new-officetel-developer-default-deposit-track',
    keyword: '신축 오피스텔 시행사 부도 보증금 반환',
    questionKeyword: '신축 오피스텔에 전세로 들어왔는데 시행사가 부도났다는 말이 돌고 보증금 반환이 막막해요. 임차권등기와 HUG 보증, 우선변제 같은 걸 어떤 순서로 진행해야 하나요?',
    ctaKeyword: '신축 오피스텔 시행사 부도 보증금 회수 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '신축 오피스텔 시행사 부도 — 5단계 보증·회수 점검 | 로앤가이드',
      description:
        '신축 오피스텔 시행사 부도로 보증금 반환이 막막하다면 임차권등기·HUG 보증이행·우선변제 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"새로 지은 오피스텔에 전세로 입주했는데, 얼마 지나지 않아 시행사가 자금난으로 부도났다는 이야기가 돌기 시작한 임차인입니다. 등기부에는 근저당이 잡혀 있고, 계약 만료가 다가오는데 보증금을 돌려받을 수 있을지 막막합니다. 임차권등기, 전세보증보험, 우선변제 같은 말은 들어봤지만 무엇부터, 어떤 순서로 해야 하는지 혼란스러운 상태입니다." 주택임대차보호법 제3조는 주택 인도와 주민등록(전입신고)을 갖추면 대항력을 인정하고, 같은 법 제3조의2는 확정일자를 갖춘 임차인의 보증금 우선변제권을 정하며, 같은 법 제3조의3은 임차권등기명령 제도를 두는 영역입니다. 시행사 부도·경매 상황에서는 대항요건·확정일자 구비 여부와 보증가입 여부에 따라 회수 경로가 달라질 수 있는 흐름입니다. 시행사 부도 + 근저당 + 보증금 반환 불능 결합은 \'임차권등기·HUG 보증이행·우선변제\' 검토가 가능한 트랙입니다. 피해자라면 ① 권리관계 ② 대항·우선변제 ③ 임차권등기 ④ 보증이행 ⑤ 배당·소송 5중 트랙이 가능한 영역. 대응은 ① 권리 ② 우선변제 ③ 등기 ④ 보증 ⑤ 배당 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 신축 오피스텔 시행사 부도 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리관계·대항/우선변제·임차권등기·보증이행·배당 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권리관계</strong> — 등기부 근저당·선순위 채권·경매 진행 여부 확인.</li>\n<li><strong>② 대항·우선변제</strong> — 전입신고·확정일자·점유로 대항력·우선변제권을 갖췄는지.</li>\n<li><strong>③ 임차권등기 (1~2개월)</strong> — 임차권등기명령으로 대항력·우선변제권 유지 검토.</li>\n<li><strong>④ 보증이행</strong> — 전세보증보험 가입 시 보증기관 이행청구 검토.</li>\n<li><strong>⑤ 배당·소송</strong> — 경매 배당요구 또는 보증금반환소송 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 시행사 부도·경매 상황에서는 대항요건(전입+점유)과 확정일자 구비 여부, 보증가입 여부에 따라 회수 경로가 달라질 수 있는 영역. 이사·전출 전에 임차권등기명령으로 권리를 유지하는 것이 출발점이 될 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong>A. HUG·전세피해지원센터·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리관계 확인 (즉시)</strong> — 등기부·근저당·경매개시 여부, 전입·확정일자 점검.</li>\n<li><strong>2단계 — 임차인 본인·계약 자료 정리 (수일 내)</strong> — 계약서·확정일자·전입세대 확인서 정리.</li>\n<li><strong>3단계 — 임차권등기명령 신청 (1~2개월)</strong> — 이사·전출 전 권리 유지 위해 신청 검토.</li>\n<li><strong>4단계 — HUG 보증이행청구 (보증 가입 시)</strong> — 보증사고 발생 시 이행청구 → 보증조사.</li>\n<li><strong>5단계 — 배당요구·보증금반환소송</strong> — 경매 배당요구 또는 KLAC 지원 소송 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">신축 오피스텔 시행사 부도 보증금 회수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권리관계·대항요건·보증 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>주민등록등본·전입세대 확인서 (대항요건)</strong></li>\n<li><strong>부동산등기부등본 (근저당·선순위 권리)</strong></li>\n<li><strong>전세보증보험 가입증서 (가입 시)</strong></li>\n<li><strong>보증금 송금 내역·영수증</strong></li>\n<li><strong>경매개시·배당 관련 통지 (해당 시)</strong></li>\n<li><strong>임차권등기명령 신청·완료 등기부</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 대항력은 전입신고와 점유, 우선변제권은 확정일자가 핵심이므로 이 요건이 유지되는지부터 확인하는 것이 도움이 됩니다. 이사가 불가피하면 전출 전에 임차권등기명령(통상 1~2개월)을 신청해 권리를 유지하는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대항요건 유지</strong> — 전입·점유·확정일자가 유지되는지.</li>\n<li><strong>선순위 권리</strong> — 근저당 등 선순위 채권의 규모와 순위.</li>\n<li><strong>보증 가입 여부</strong> — 전세보증보험 가입·보증사고 요건 충족.</li>\n<li><strong>임차권등기 시점</strong> — 이사·전출 전 권리 유지 필요성.</li>\n<li><strong>배당·회수 범위</strong> — 경매 배당 시 실제 회수 가능 범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택도시보증공사 전세피해 상담 (khug.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 중개사 확인·설명의무와 공동저당 선순위 권리 고지',
        summary:
          '대법원 2024다305087(대법원, 2025.12.04 선고) 영역에서 법원은 개업공인중개사가 다세대주택 중 특정 세대 임대차를 중개하면서 그 건물의 다른 세대에 공동저당권 등이 설정돼 있다면 다른 세대의 선순위 권리와 그 세대 임차인의 보증금·임대차 시기 등을 확인·설명하고 확인·설명서에 기재해 교부해야 하며, 고의·과실로 이를 위반해 임차의뢰인에게 손해를 입힌 경우 공인중개사법 제30조에 따른 배상책임을 진다고 판시했습니다. 신축 건물에서 선순위 권리로 보증금 회수가 어려워진 사안에서도 권리관계 확인과 책임 검토에 참고해볼 수 있는 영역입니다.',
        takeaway: '시행사 부도 + 근저당 + 반환 불능 결합 시 임차권등기·HUG 보증이행·우선변제 검토 영역 — 대항요건 유지 점검 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '시행사가 부도났는데 보증금을 받을 수 있나요?',
        answer:
          '<strong>대항요건·확정일자·보증 가입 여부에 따라 회수 경로를 검토할 수 있는 영역입니다.</strong> 무조건 회수가 보장되지는 않으므로 권리관계부터 확인.',
      },
      {
        question: '이사를 가야 하는데 권리가 사라지지 않나요?',
        answer:
          '<strong>전출 전 임차권등기명령(통상 1~2개월)으로 대항력·우선변제권을 유지하는 것을 검토할 수 있는 영역입니다.</strong> 등기 완료를 확인하고 이사 진행.',
      },
      {
        question: '전세보증보험에 들었으면 어떻게 하나요?',
        answer:
          '<strong>보증사고 발생 시 보증기관에 이행청구를 검토할 수 있는 영역입니다.</strong> HUG 1566-9009로 절차·요건을 확인.',
      },
      {
        question: '근저당이 잡혀 있으면 못 받나요?',
        answer:
          '<strong>선순위 채권 규모·순위와 배당 범위에 따라 회수 가능 범위가 달라질 수 있는 영역입니다.</strong> 등기부·경매 진행을 확인.',
      },
      {
        question: '소송은 어디서 도움을 받나요?',
        answer:
          '<strong>법률구조공단(132)에서 보증금반환소송 등 무료 상담을 받아볼 수 있는 영역입니다.</strong> 전세피해지원센터(1533-8119)도 함께 활용.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '임차권등기명령 신청', href: '/guide/jeonse-fraud/jeonse-fraud-lease-registration-order' },
      { label: 'HUG 보증이행청구', href: '/guide/jeonse-fraud/jeonse-fraud-hug-guarantee-claim' },
      { label: '경매 배당요구 절차', href: '/guide/jeonse-fraud/jeonse-fraud-auction-distribution-claim' },
      { label: '보증금반환소송', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-return-lawsuit' },
      { label: '전세피해자 결정 신청', href: '/guide/jeonse-fraud/jeonse-fraud-victim-decision-application' },
    ],
  },

  // ─── 9. jeonse-fraud-fake-landlord-agent-impersonation-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-fake-landlord-agent-impersonation-track',
    keyword: '집주인 사칭 중개인 보증금 가로채기',
    questionKeyword: '집주인이라는 사람·중개인을 믿고 전세계약을 하고 보증금을 보냈는데, 알고 보니 진짜 소유자가 아니었어요. 사칭한 사람에게 당한 건데 보증금을 돌려받을 수 있나요?',
    ctaKeyword: '집주인 사칭 계약 보증금 회수 가능성 점검',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '집주인 사칭 전세 — 5단계 무권대리·회수 점검 | 로앤가이드',
      description:
        '집주인·중개인을 사칭한 사람과 계약해 보증금을 보냈다면 무권대리·중개사 책임·형사 고소 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"집주인이라고 소개한 사람과 중개인을 믿고 전세계약서를 작성한 뒤 보증금을 송금했는데, 나중에 등기부를 보니 그 사람이 진짜 소유자가 아니라는 걸 알게 된 임차인입니다. 신분증과 서류까지 봤다고 생각했는데 위조였거나 무단으로 권한을 행사한 정황이 보여요. 사칭한 사람에게 당한 것 같은데, 이미 보낸 보증금을 돌려받을 수 있는지, 무엇부터 해야 하는지 막막한 상태입니다." 민법 제130조는 대리권 없는 자가 한 계약은 본인이 추인하지 않으면 본인에게 효력이 없다고 정하고, 같은 법 제135조는 무권대리인의 상대방에 대한 책임을 규정하며, 형법 제347조는 사기죄를 정하는 영역입니다. 소유자 아닌 사람과의 계약은 효력·회수 경로가 진정한 권한 여부, 중개사 확인·설명의무 이행 여부에 따라 달라질 수 있는 흐름입니다. 소유자 사칭 + 서류 위조·무권한 + 보증금 송금 결합은 \'무권대리·중개사 책임·형사 고소\' 검토가 가능한 트랙입니다. 피해자라면 ① 권한 확인 ② 계약 효력 ③ 중개사 책임 ④ 형사 고소 ⑤ 회수 5중 트랙이 가능한 영역. 대응은 ① 권한 ② 효력 ③ 중개사 ④ 형사 ⑤ 회수 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 집주인 사칭 전세 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권한 확인·계약 효력·중개사 책임·형사 고소·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 권한 확인</strong> — 계약 상대가 진정한 소유자·정당한 대리권자였는지 등기부·위임장 확인.</li>\n<li><strong>② 계약 효력</strong> — 무권대리·사칭 계약의 효력과 추인 여부 정리.</li>\n<li><strong>③ 중개사 책임</strong> — 중개사 확인·설명의무 이행 여부, 공인중개사법상 책임 검토.</li>\n<li><strong>④ 형사 고소</strong> — 사기(형법 제347조)·문서 위조 등 형사 고소 검토.</li>\n<li><strong>⑤ 회수</strong> — 무권대리인·중개사·보증 등 회수 경로 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 소유자 아닌 사람과의 계약은 진정한 권한 여부, 중개사 확인·설명의무 이행 여부에 따라 효력·회수 경로가 달라질 수 있는 영역. 등기부상 소유자와 계약 상대의 일치 여부를 확인하는 것이 출발점이 되는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수·대응 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·경찰·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·계약 자료 확보 (즉시)</strong> — 등기부·계약서·위임장·신분증 사본·송금 내역 확보.</li>\n<li><strong>2단계 — 권한·효력 정리 (수일 내)</strong> — 소유자 일치 여부·대리권 정황 정리.</li>\n<li><strong>3단계 — 형사 고소 (가능한 빨리)</strong> — 사기·문서 위조 등 경찰 고소장 접수.</li>\n<li><strong>4단계 — 중개사 책임·보증 검토 (병행)</strong> — 중개사 확인·설명의무·공제 등 책임 검토.</li>\n<li><strong>5단계 — 민사 회수·보증금반환소송</strong> — KLAC 지원 등 민사 회수 절차 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 보증금 돌려받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">집주인 사칭 전세 무권대리·중개사 책임 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 권한·효력·책임 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서</strong></li>\n<li><strong>부동산등기부등본 (진정 소유자 확인)</strong></li>\n<li><strong>위임장·신분증 사본 (대리권·위조 여부)</strong></li>\n<li><strong>보증금 송금 내역·영수증</strong></li>\n<li><strong>중개대상물 확인·설명서·중개수수료 영수증</strong></li>\n<li><strong>상대·중개인과의 교신 기록 (문자·통화)</strong></li>\n<li><strong>고소장·피해 경위서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 계약 당시 등기부상 소유자와 계약 상대가 일치했는지, 위임장·신분증의 진위가 확인됐는지가 핵심 자료가 됩니다. 중개사가 확인·설명의무를 다했는지, 확인·설명서를 교부했는지도 함께 정리해두면 책임 검토에 도움이 되는 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>권한·대리권</strong> — 계약 상대의 진정한 권한·대리권 여부.</li>\n<li><strong>계약 효력</strong> — 무권대리·사칭 계약의 효력과 추인 여부.</li>\n<li><strong>중개사 책임</strong> — 확인·설명의무 이행·공제 책임 여부.</li>\n<li><strong>형사·민사 병행</strong> — 사기 고소와 민사 회수의 병행 가능성.</li>\n<li><strong>회수 범위</strong> — 무권대리인·중개사·공제 등 실제 회수 가능 범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상가건물 임대차 적용 범위와 건물의 요건',
        summary:
          '대법원 2024다293016(대법원, 2025.11.13 선고) 영역에서 법원은 상가건물 임대차보호법이 적용되는 임대차는 사업자등록 대상 건물을 영업용으로 사용하는 경우를 가리키고, 법률상 독립된 부동산인 건물이라고 하려면 토지의 정착물로서 최소한의 기둥·지붕·주벽이 있어야 하며, 이를 갖추지 못한 구조물은 동산에 불과해 그 임대차에는 원칙적으로 상가임대차법이 적용되지 않는다고 판시했습니다. 임대차 목적물의 권리·성격을 정확히 확인해야 한다는 흐름으로, 사칭 계약에서 권리관계 확인의 중요성을 검토할 때 참고해볼 수 있는 영역입니다.',
        takeaway: '소유자 사칭 + 서류 위조·무권한 + 송금 결합 시 무권대리·중개사 책임·형사 고소 검토 영역 — 등기부·위임장 진위 확인 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '진짜 집주인이 아닌 사람과 계약했는데 효력이 있나요?',
        answer:
          '<strong>무권대리·사칭 계약은 효력·추인 여부에 따라 평가가 달라지는 영역입니다.</strong> 등기부상 소유자와 일치 여부부터 확인.',
      },
      {
        question: '보증금을 돌려받을 수 있나요?',
        answer:
          '<strong>무권대리인·중개사·공제 등 회수 경로를 검토할 수 있는 영역입니다.</strong> 무조건 회수가 보장되지는 않으므로 책임 주체를 정리.',
      },
      {
        question: '중개인에게도 책임을 물을 수 있나요?',
        answer:
          '<strong>중개사의 확인·설명의무 이행 여부에 따라 공인중개사법상 책임을 검토할 수 있는 영역입니다.</strong> 확인·설명서 교부 여부를 확인.',
      },
      {
        question: '형사 고소도 해야 하나요?',
        answer:
          '<strong>사기·문서 위조 등 정황이 있으면 형사 고소를 검토할 수 있는 영역입니다.</strong> 위조·송금 자료를 갖춰 경찰 신고.',
      },
      {
        question: '어디서 도움을 받을 수 있나요?',
        answer:
          '<strong>법률구조공단(132)·전세피해지원센터(1533-8119)에서 무료 상담을 받아볼 수 있는 영역입니다.</strong> 자료를 정리해 상담 진행.',
      },
    ],
    cta: { text: '보증금 돌려받을 수 있는지 AI로 점검하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '무권대리 전세계약 효력', href: '/guide/jeonse-fraud/jeonse-fraud-unauthorized-agency-contract' },
      { label: '중개사 책임·공제 청구', href: '/guide/jeonse-fraud/jeonse-fraud-agent-liability-claim' },
      { label: '전세사기 형사 고소', href: '/guide/jeonse-fraud/jeonse-fraud-criminal-complaint' },
      { label: '보증금반환소송', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-return-lawsuit' },
      { label: '전세피해자 결정 신청', href: '/guide/jeonse-fraud/jeonse-fraud-victim-decision-application' },
    ],
  },

  // ─── 10. jeonse-fraud-small-deposit-priority-repayment-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-small-deposit-priority-repayment-track',
    keyword: '소액임차인 최우선변제 대상 점검',
    questionKeyword: '살던 집이 경매에 넘어갔는데 보증금이 크지 않은 편이에요. 소액임차인 최우선변제로 일부라도 먼저 돌려받을 수 있다고 들었는데, 제가 대상이 되는지 어떻게 확인하나요?',
    ctaKeyword: '소액임차인 최우선변제 대상 여부 확인',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '소액임차인 최우선변제 — 5단계 대상·배당 점검 | 로앤가이드',
      description:
        '살던 집이 경매에 넘어갔고 보증금이 크지 않다면 소액임차인 최우선변제 대상 여부·대항요건·배당요구 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세나 보증금 있는 월세로 살던 집이 경매에 넘어가 보증금을 돌려받지 못할까 걱정하는 임차인입니다. 보증금이 아주 큰 편은 아니어서, \'소액임차인은 일정 금액까지 다른 채권자보다 먼저 돌려받을 수 있다\'는 최우선변제 이야기를 들었어요. 그런데 제가 그 대상에 해당하는지, 해당한다면 얼마까지, 무엇을 언제까지 해야 하는지 막막한 상태입니다." 주택임대차보호법 제8조는 일정 보증금 이하 소액임차인이 보증금 중 일정액을 다른 담보물권자보다 우선하여 변제받을 수 있도록 정하고, 같은 법 제3조는 주택 인도와 주민등록(전입신고)을 갖춘 대항요건을 정하는 영역입니다. 소액임차인 보증금 한도·최우선변제 금액은 지역과 기준 시점(담보물권 설정 시점 등)에 따라 달라지며, 경매에서 배당받으려면 배당요구 종기 안에 배당요구를 해야 하는 흐름입니다. 소액 보증금 + 대항요건 + 경매 진행 결합은 \'최우선변제 대상·배당요구\' 검토가 가능한 트랙입니다. 피해자라면 ① 한도 기준 ② 대항요건 ③ 우선순위 ④ 배당요구 ⑤ 회수 5중 트랙이 가능한 영역. 대응은 ① 한도 ② 대항 ③ 순위 ④ 배당 ⑤ 회수 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 소액임차인 최우선변제 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 한도 기준·대항요건·우선순위·배당요구·회수 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 한도 기준</strong> — 지역·기준 시점별 소액임차인 보증금 한도·최우선변제 금액 확인.</li>\n<li><strong>② 대항요건</strong> — 주택 인도(점유)와 전입신고로 대항요건을 갖췄는지.</li>\n<li><strong>③ 우선순위</strong> — 담보물권 설정 시점 등 기준일과 우선변제 순위 정리.</li>\n<li><strong>④ 배당요구 (배당요구 종기 내)</strong> — 경매 법원에 배당요구 신청.</li>\n<li><strong>⑤ 회수</strong> — 배당·잔여 보증금 회수 경로 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 소액임차인 최우선변제 대상·금액은 지역과 기준 시점(담보물권 설정 시점 등)에 따라 달라질 수 있는 영역. 대항요건을 갖추고 배당요구 종기 안에 배당요구를 했는지가 회수의 핵심이 되는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 배당·회수 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·경매법원·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 한도·대항요건 확인 (즉시)</strong> — 지역·기준 시점 한도, 전입·점유·확정일자 점검.</li>\n<li><strong>2단계 — 경매·우선순위 정리 (수일 내)</strong> — 경매개시·배당요구 종기, 담보물권 설정 시점 확인.</li>\n<li><strong>3단계 — 배당요구 신청 (배당요구 종기 내)</strong> — 경매 법원에 배당요구서·소명자료 제출.</li>\n<li><strong>4단계 — 배당기일 대응 (법원 일정)</strong> — 배당표 확인·이의 검토.</li>\n<li><strong>5단계 — 잔여 보증금 회수</strong> — 미회수분 보증금반환소송 등 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 보증금 돌려받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">소액임차인 최우선변제 대상·배당요구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 한도·대항요건·배당 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서 (보증금액·확정일자)</strong></li>\n<li><strong>주민등록등본·전입세대 확인서 (대항요건)</strong></li>\n<li><strong>부동산등기부등본 (담보물권 설정 시점)</strong></li>\n<li><strong>경매개시결정·배당요구 종기 통지</strong></li>\n<li><strong>배당요구서·소명자료</strong></li>\n<li><strong>보증금 송금 내역·영수증</strong></li>\n<li><strong>점유 입증 자료 (관리비·공과금 등)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 소액임차인 한도·최우선변제 금액은 지역과 담보물권 설정 시점 등에 따라 달라지므로 등기부상 기준일 확인이 도움이 됩니다. 무엇보다 배당요구 종기 안에 배당요구를 하지 못하면 회수가 어려워질 수 있어, 종기 확인이 가장 시급한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대상 한도</strong> — 지역·기준 시점별 보증금 한도 충족 여부.</li>\n<li><strong>대항요건</strong> — 점유·전입신고가 유지됐는지.</li>\n<li><strong>기준 시점</strong> — 담보물권 설정 시점 기준 적용.</li>\n<li><strong>배당요구 종기</strong> — 종기 도과 시 회수 곤란 위험.</li>\n<li><strong>회수 범위</strong> — 최우선변제액·잔여 보증금 회수 범위.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>대법원 경매정보 (courtauction.go.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 보증금반환채무 인수와 유상취득 판단 기준',
        summary:
          '대법원 2024두67238(대법원, 2025.10.16 선고) 영역에서 법원은 증여자의 채무를 인수하는 부담부증여에서 \'대가를 지급한 사실이 증명되는 경우\'란 수증자가 취득 시점을 기준으로 인수한 채무를 변제하기에 충분한 소득·재산을 갖춰 채무 부담이 다시 증여자에게 전가되지 않을 개연성이 높다고 인정되는 경우를 의미한다고 판시했습니다. 임대차보증금반환채무의 성격과 인수 판단이 쟁점이 된 사안으로, 보증금 반환을 둘러싼 권리관계를 검토할 때 참고해볼 수 있는 영역입니다.',
        takeaway: '소액 보증금 + 대항요건 + 경매 진행 결합 시 최우선변제 대상·배당요구 종기 검토 영역 — 한도·종기 확인 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '제 보증금이 소액임차인 대상이 되나요?',
        answer:
          '<strong>지역·기준 시점별 보증금 한도에 따라 대상 여부가 달라지는 영역입니다.</strong> 등기부상 담보물권 설정 시점 기준을 확인.',
      },
      {
        question: '얼마까지 먼저 받을 수 있나요?',
        answer:
          '<strong>최우선변제 금액은 지역·기준 시점에 따라 정해지는 영역입니다.</strong> 한도와 적용 기준일을 함께 확인.',
      },
      {
        question: '배당요구는 언제까지 해야 하나요?',
        answer:
          '<strong>배당요구 종기 안에 배당요구를 해야 하는 영역입니다.</strong> 종기를 가장 먼저 확인해 기한 내 신청.',
      },
      {
        question: '전입신고가 늦었으면 어떻게 되나요?',
        answer:
          '<strong>대항요건과 기준 시점에 따라 우선변제 순위가 달라질 수 있는 영역입니다.</strong> 전입·점유 시점을 정리해 검토.',
      },
      {
        question: '못 받은 나머지 보증금은요?',
        answer:
          '<strong>잔여 보증금은 보증금반환소송 등으로 회수를 검토할 수 있는 영역입니다.</strong> 법률구조공단(132)에서 무료 상담을 받아볼 수 있습니다.',
      },
    ],
    cta: { text: '보증금 돌려받을 수 있는지 AI로 점검하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '소액임차인 최우선변제', href: '/guide/jeonse-fraud/jeonse-fraud-small-deposit-priority' },
      { label: '경매 배당요구 절차', href: '/guide/jeonse-fraud/jeonse-fraud-auction-distribution-claim' },
      { label: '대항력·확정일자', href: '/guide/jeonse-fraud/jeonse-fraud-opposing-power-fixed-date' },
      { label: '보증금반환소송', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-return-lawsuit' },
      { label: '전세피해자 결정 신청', href: '/guide/jeonse-fraud/jeonse-fraud-victim-decision-application' },
    ],
  },
];
