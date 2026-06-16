import { SpokePage } from '../spoke-pages';

// batch99 assault(4) + dui(3) + jeonse-fraud(3) — 10개 (2026-06-16)
//
// 고유 존재 이유
// 1. assault-elevator-shove-injury-track — 엘리베이터 안에서 시비 끝에 밀침·구타로 상해를 입은 피해자가 좁은 공간 선후·상해 정도를 정리하는 페이지
// 2. assault-convenience-store-clerk-customer-track — 편의점 점원으로 일하다 손님에게 폭행·상해를 당한 피해자가 매장 CCTV·근무 정황을 정리하는 페이지
// 3. assault-school-parent-teacher-track — 학교에서 학부모에게 폭행·상해를 당한 교사·직원이 신고·증거 절차를 정리하는 페이지
// 4. assault-acquaintance-gathering-falsely-accused-defense — 지인 모임 실랑이로 사실과 다르게 상해 고소당한 피의자가 인과·구성요건을 다투는 방어 페이지
// 5. dui-electric-scooter-sidewalk-track — 전동킥보드를 인도에서 음주 운전하다 입건된 운전자가 원동기장치자전거 해당 여부·측정을 다투는 페이지
// 6. dui-test-refusal-prior-record-defense — 음주측정거부에 과거 전력 가중이 더해진 피의자가 유효 인식·해석 범위를 다투는 방어 페이지
// 7. dui-pm-amended-law-lighter-track — 개인형 이동장치 음주로 입건돼 법 개정 후 경한 신법 적용을 검토하는 운전자 페이지
// 8. jeonse-fraud-no-rent-deposit-holdover-track — 무월차임 전세에서 만료 후 보증금 미반환으로 점유를 이어가는 임차인이 부당이득·회수를 정리하는 페이지
// 9. jeonse-fraud-inherited-landlord-deposit-track — 임대인 사망 후 상속인에게 보증금 반환을 다투는 임차인이 임대인 지위 승계를 정리하는 페이지
// 10. jeonse-fraud-corporate-tenant-opposing-power-track — 법인이 임차해 직원이 거주하던 집의 보증금 회수를 다투는 임차인이 법인 대항력을 정리하는 페이지

export const spokesBatch99AssaultDuiJeonseFraud: SpokePage[] = [
  {
    domain: 'assault',
    slug: 'assault-elevator-shove-injury-track',
    keyword: '엘리베이터 시비 폭행 상해',
    questionKeyword: '같은 건물 엘리베이터 안에서 사소한 시비가 붙은 사람이 갑자기 저를 벽으로 밀치고 멱살을 잡거나 손으로 밀어 팔과 머리를 부딪혀 멍·통증이 남았어요. 좁은 공간에 단둘이 있던 터라 상대는 \'살짝 부딪힌 것뿐 때리지 않았다\'며 책임을 미룹니다. 엘리베이터 안 시비 끝의 폭행 상해를 어떻게 정리해 신고·고소하고 다퉈볼 수 있는지 따져볼 수 있나요?',
    ctaKeyword: '엘리베이터 시비 폭행 상해 영상·진단서 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '엘리베이터 폭행 상해 — 5단계 CCTV·상해 점검 | 로앤가이드',
      description:
        '엘리베이터 안 시비 끝에 밀침·부딪힘으로 다쳤는데 상대가 살짝 닿았을 뿐이라며 책임을 미뤄 막막하다면 형법 제257조 상해와 영상·상해 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"같은 건물·아파트의 엘리베이터에 함께 탄 사람과 자리·인사·반려동물·짐 같은 사소한 문제로 시비가 붙었다가, 상대가 갑자기 저를 벽으로 밀치고 멱살을 잡아 흔들거나 손바닥·주먹으로 밀어 머리·어깨·팔을 벽과 문에 부딪혀 멍·붓기·통증이 남은 상해를 입은 피해자입니다. 사방이 막힌 좁은 공간에 단둘이 갇힌 채 순식간에 벌어진 일이라 무섭고 정신이 없었는데, 상대는 오히려 \'좁은 데서 서로 살짝 부딪힌 것뿐 때린 적 없다\'거나 \'먼저 시비를 건 건 그쪽\'이라며 사건을 서로 잘잘못이 있는 다툼으로 몰아가거나 제게 책임을 미룹니다. 제가 일방적으로 밀쳐지고 부딪혀 다친 것이 분명한데도 단순한 실랑이로 처리되어 피해 회복이 흐려지는 건 아닌지, 외상이 뚜렷하지 않고 통증만 있는 경우에도 상해로 다툴 수 있는지, 엘리베이터 CCTV·진단서가 있는데도 무엇부터 확보하고 어디서부터 신고·고소를 정리해야 하는지 막막한 상태입니다." 형법 제260조 제1항은 사람의 신체에 폭행한 자를, 같은 법 제257조 제1항은 사람의 신체를 상해한 자를 처벌하도록 규정하는 영역입니다. 판례·실무는 폭행에 수반된 상처가 극히 경미해 굳이 치료할 필요 없이 자연 치유되고 일상생활에 아무런 지장이 없는 정도라면 상해라 보기 어려울 수 있으나, 그 정도를 넘는 상해가 폭행에 의해 생긴 경우라면 상해에 해당하고, 폭행·상해가 있었는지와 그 정도는 행위 당시와 그 후의 정황 등 모든 사정을 종합해 객관적으로 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 엘리베이터 시비 + 밀침·멱살·부딪힘 + 상처 결합은 \'폭행·상해 인정 범위\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 시비·접촉 선후 ② 상해 정도 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 경위 ② 상해 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 엘리베이터 시비 폭행 상해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 시비·접촉 선후·상해 정도·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 시비·접촉 선후</strong> — 시비 경위와 밀침·멱살·부딪힘의 선후, 누가 먼저 유형력을 행사했는지 정리.</li>\n<li><strong>② 상해 정도</strong> — 멍·붓기·통증의 부위·치유기간이 밀침·부딪힘 경위와 맞는지 정리.</li>\n<li><strong>③ 고소</strong> — 폭행(형법 제260조)·상해(제257조) 중 어디까지 다툴지 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 경미한 상처는 상해로 보기 어려울 수 있으나 그 정도를 넘는 상해는 행위 당시와 그 후 정황을 종합해 평가되는 영역이라, 엘리베이터 CCTV로 시비와 밀침·멱살·부딪힘의 선후를 시간순으로 특정하고 사건 직후 진료를 받아두는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 영상·진료 확보 (즉시~당일)</strong> — 엘리베이터·로비 CCTV와 휴대폰 영상·녹음 보존 요청, 병원 진료·상해진단서와 부상 사진 확보.</li>\n<li><strong>2단계 — 경위·상해 정리 (수일 내)</strong> — 시비 경위와 밀침·멱살·부딪힘 동작의 선후, 상처 부위·치유기간이 경위와 맞는지 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출, 엘리베이터 시비·폭행 경위 첨부.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 진술·영상·진단서 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">엘리베이터 시비 폭행 상해 영상·진단서 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 시비·접촉 선후·상해 정도·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>엘리베이터·로비 CCTV 영상 (밀침·부딪힘 정황)</strong></li>\n<li><strong>휴대폰 영상·녹음·문자 (시비 경위)</strong></li>\n<li><strong>상해진단서·진료기록 (부위·치유기간)</strong></li>\n<li><strong>다친 부위 사진 (시간정보 포함)</strong></li>\n<li><strong>엘리베이터 시비·폭행 경위 기록 (육하원칙·선후)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>관리사무소·동승자·목격자 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 경미한 상처는 상해로 보기 어려울 수 있으나 그 정도를 넘는 상해는 정황을 종합해 평가되므로, 엘리베이터 CCTV로 시비와 밀침·멱살·부딪힘의 선후를 특정하고 사건 직후 진료를 받아 부위·치유기간을 남겨두는 것이 핵심입니다. 엘리베이터 CCTV는 덮어쓰기 전에 관리사무소에 빨리 보존 요청을 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>선후·쌍방</strong> — 누가 먼저 유형력을 행사했고 쌍방으로 몰리는지.</li>\n<li><strong>상해 인정</strong> — 상처가 경미한 정도를 넘어 상해로 평가되는지.</li>\n<li><strong>상해 인과</strong> — 부상이 밀침·멱살·부딪힘으로 생긴 것인지.</li>\n<li><strong>폭행·상해 구분</strong> — 폭행에 그치는지 상해까지 인정되는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112 · 경찰 민원 182</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정황을 종합한 폭행·상해의 판단',
        summary:
          '대법원 2025도7142(대법원, 2025.08.14 선고) 영역에서 법원은 법원이 적법하게 공판 심리를 종결한 뒤 한 공소장변경허가신청은 반드시 심리를 재개해 허가할 것은 아니라고 보면서도, 영상정보가 촬영대상자의 의사에 반하지 아니한 촬영물에 해당하는지 등 사실관계의 평가는 행위 경위와 정황을 면밀히 살펴 판단해야 한다는 취지로 판시했습니다. 엘리베이터 시비 폭행 상해 사안에서도 시비 경위와 밀침·멱살·부딪힘의 선후, 상해 정도를 CCTV·진료로 정리해 검토해볼 수 있습니다.',
        takeaway: '엘리베이터 시비 + 밀침·멱살·부딪힘 + 상처 결합 시 폭행·상해 인정 범위 검토 영역 — 엘리베이터·로비 CCTV·진료·부상 사진·시비 경위 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '먼저 시비를 걸었어도 폭행으로 다툴 수 있나요?',
        answer:
          '<strong>먼저 유형력을 행사한 쪽이 누구인지로 갈리는 영역입니다.</strong> 시비와 밀침·부딪힘의 선후를 영상으로 특정하세요.',
      },
      {
        question: '벽에 부딪힌 통증만 있어도 상해인가요?',
        answer:
          '<strong>부위·치유기간과 일상 지장을 정황과 함께 따져 상해로 평가될 여지가 있는 영역입니다.</strong> 사건 직후 진료를 받아두세요.',
      },
      {
        question: '좁은 공간에서 살짝 닿았을 뿐이라고 하면 어떻게 하나요?',
        answer:
          '<strong>접촉의 정도와 경위를 정황으로 종합 판단하는 영역입니다.</strong> CCTV로 동작과 선후를 정리하세요.',
      },
      {
        question: '엘리베이터 CCTV도 확보할 수 있나요?',
        answer:
          '<strong>밀침·부딪힘 정황을 보여줄 핵심 자료가 되는 영역입니다.</strong> 관리사무소에 덮어쓰기 전 보존 요청하세요.',
      },
      {
        question: '단둘이 있어 목격자가 없으면 불리한가요?',
        answer:
          '<strong>CCTV·진단서로 정황을 보충할 수 있는 영역입니다.</strong> 영상 보존과 사건 직후 진료를 함께 챙기세요.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: 'assault 도메인 허브', href: '/guide/assault' },
      { label: '운동경기 상해 트랙', href: '/guide/assault/assault-amateur-sports-injury-track' },
      { label: '주차 다툼 상해 트랙', href: '/guide/assault/assault-parking-spot-quarrel-injury-track' },
      { label: '택시기사 폭행 트랙', href: '/guide/assault/assault-taxi-driver-by-passenger-track' },
      { label: '이웃 소음 폭행 트랙', href: '/guide/assault/assault-noise-complaint-neighbor-track' },
    ],
  },
  {
    domain: 'assault',
    slug: 'assault-convenience-store-clerk-customer-track',
    keyword: '편의점 점원 손님 폭행 상해',
    questionKeyword: '편의점에서 야간 근무 중 환불·계산·취객 문제로 시비가 붙은 손님이 카운터를 넘어와 저를 밀치고 멱살을 잡거나 물건을 던지고 손으로 때려 팔과 얼굴을 다치게 했어요. 손님은 \'점원이 불친절하게 먼저 시비를 걸었다\'며 책임을 미룹니다. 근무 중 손님에게 당한 폭행 상해를 어떻게 정리해 신고·고소하고 다퉈볼 수 있는지 따져볼 수 있나요?',
    ctaKeyword: '편의점 점원 손님 폭행 상해 매장 CCTV·진단서 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '편의점 점원 폭행 상해 — 5단계 매장 CCTV 점검 | 로앤가이드',
      description:
        '편의점 근무 중 손님에게 밀침·구타로 다쳤는데 손님이 불친절을 핑계로 책임을 미뤄 막막하다면 형법 제257조 상해와 매장 CCTV·진단서 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"편의점·매장에서 점원·아르바이트로 근무하던 중, 환불·계산·연령 확인·취객 응대 같은 문제로 시비가 붙은 손님이 감정이 격해져 카운터를 넘어오거나 다가와 저를 밀치고 멱살을 잡아 흔들고, 물건·집기를 집어 던지거나 손·주먹으로 얼굴·팔·어깨를 때려 멍·붓기·통증이 남은 상해를 입은 근로자·피해자입니다. 손님이 많거나 야간이라 혼자 있는 시간대에 갑자기 벌어진 일이라 무서웠는데, 손님은 오히려 \'점원이 불친절하고 무시해서 먼저 시비를 건 건 그쪽\'이라거나 \'살짝 밀쳤을 뿐 때리지 않았다\'며 사건을 서로 잘잘못이 있는 다툼으로 몰아가거나 제게 책임을 미룹니다. 제가 근무 중에 일방적으로 맞아 다친 것이 분명한데도 단순한 손님과의 실랑이로 처리되어 피해 회복이 흐려지는 건 아닌지, 외상이 약하고 통증만 있는 경우에도 상해로 다툴 수 있는지, 매장 CCTV·진단서가 있는데도 무엇부터 확보하고 어디서부터 신고·고소를 정리해야 하는지 막막한 상태입니다." 형법 제260조 제1항은 폭행을, 같은 법 제257조 제1항은 상해를 정하는 영역입니다. 판례·실무는 폭행에 수반된 상처가 극히 경미해 자연 치유되고 일상생활에 지장이 없는 정도라면 상해로 보기 어려울 수 있으나, 그 정도를 넘는 상해가 폭행에 의해 생긴 경우라면 상해에 해당하고, 면전에서 상대의 자유의사를 제압·혼란케 할 만한 유형력 행사가 있었는지와 그 정도는 범행의 일시·장소·동기·경위, 당사자의 관계 등 제반 사정을 고려해 객관적으로 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 근무 중 + 카운터·매장 시비 + 밀침·구타 + 상처 결합은 \'폭행·상해 인정 범위\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 시비·접촉 선후 ② 상해 정도 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 경위 ② 상해 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 편의점 점원 손님 폭행 상해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 시비·접촉 선후·상해 정도·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 시비·접촉 선후</strong> — 환불·응대 경위와 밀침·멱살·구타의 선후, 누가 먼저 유형력을 행사했는지 정리.</li>\n<li><strong>② 상해 정도</strong> — 멍·붓기·통증의 부위·치유기간이 구타·물건 던짐 경위와 맞는지 정리.</li>\n<li><strong>③ 고소</strong> — 폭행(형법 제260조)·상해(제257조) 중 어디까지 다툴지 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 경미한 상처는 상해로 보기 어려울 수 있으나 그 정도를 넘는 상해는 일시·장소·동기·경위 등 제반 사정을 종합해 평가되는 영역이라, 매장 CCTV로 응대와 밀침·멱살·구타의 선후를 시간순으로 특정하고 사건 직후 진료를 받아두는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 영상·진료 확보 (즉시~당일)</strong> — 매장 내·외 CCTV와 POS·결제·휴대폰 영상 보존 요청, 병원 진료·상해진단서와 부상 사진 확보.</li>\n<li><strong>2단계 — 경위·상해 정리 (수일 내)</strong> — 환불·응대 경위와 밀침·멱살·구타 동작의 선후, 상처 부위·치유기간이 경위와 맞는지 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출, 근무 중 손님 폭행 경위 첨부.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 진술·영상·진단서 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구, 산재·사업주 협의 병행.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">편의점 점원 손님 폭행 상해 매장 CCTV·진단서 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 시비·접촉 선후·상해 정도·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>매장 내·외 CCTV 영상 (밀침·구타 정황)</strong></li>\n<li><strong>POS·결제·휴대폰 영상·녹음 (응대·시비 경위)</strong></li>\n<li><strong>상해진단서·진료기록 (부위·치유기간)</strong></li>\n<li><strong>다친 부위 사진 (시간정보 포함)</strong></li>\n<li><strong>근무·응대·폭행 경위 기록 (육하원칙·선후)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>동료·사업주·목격 손님 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 경미한 상처는 상해로 보기 어려울 수 있으나 그 정도를 넘는 상해는 동기·경위 등 제반 사정을 종합해 평가되므로, 매장 CCTV로 응대와 밀침·멱살·구타의 선후를 특정하고 사건 직후 진료를 받아 부위·치유기간을 남겨두는 것이 핵심입니다. 매장 CCTV는 덮어쓰기 전에 사업주와 함께 빨리 보존 요청을 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>선후·쌍방</strong> — 누가 먼저 유형력을 행사했고 쌍방으로 몰리는지.</li>\n<li><strong>상해 인정</strong> — 상처가 경미한 정도를 넘어 상해로 평가되는지.</li>\n<li><strong>상해 인과</strong> — 부상이 밀침·구타·물건 던짐으로 생긴 것인지.</li>\n<li><strong>응대·도발 주장</strong> — 불친절·도발 주장이 책임에 미치는 영향.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112 · 경찰 민원 182</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위력·유형력 행사와 정황을 종합한 판단',
        summary:
          '대법원 2023도16500(대법원, 2025.07.18 선고) 영역에서 법원은 위력이란 자유의사를 제압·혼란케 할 만한 일체의 유형적 또는 무형적 세력을 말하는 것으로 폭행·협박을 포함하며, 위력 행사에 해당하는지는 범행의 일시·장소, 동기·목적, 인원수, 세력의 태양, 피해자의 지위 등 제반 사정을 고려해 객관적으로 판단해야 한다는 취지로 판시했습니다. 편의점 점원 손님 폭행 상해 사안에서도 응대 경위와 밀침·멱살·구타의 선후, 상해 정도를 매장 CCTV·진료로 정리해 검토해볼 수 있습니다.',
        takeaway: '근무 중 + 매장 시비 + 밀침·구타 + 상처 결합 시 폭행·상해 인정 범위 검토 영역 — 매장 내·외 CCTV·진료·부상 사진·응대 경위 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '점원이 불친절했다고 하면 폭행을 못 다투나요?',
        answer:
          '<strong>응대 다툼과 별개로 밀침·구타의 선후로 갈리는 영역입니다.</strong> 응대와 유형력 행사를 영상으로 구분하세요.',
      },
      {
        question: '물건만 던지고 직접 안 때렸다고 해도 다툴 수 있나요?',
        answer:
          '<strong>물건 던짐도 유형력 행사로 평가될 여지가 있는 영역입니다.</strong> 던진 동작·상해 인과를 영상·진료로 정리하세요.',
      },
      {
        question: '근무 중 다치면 산재로도 처리되나요?',
        answer:
          '<strong>형사 절차와 별개로 산재·사업주 협의를 함께 살피는 영역입니다.</strong> 근무 정황과 사업주 보고를 기록하세요.',
      },
      {
        question: '매장 CCTV는 누구에게 요청하나요?',
        answer:
          '<strong>밀침·구타 정황을 보여줄 핵심 자료가 되는 영역입니다.</strong> 사업주·본사에 덮어쓰기 전 보존 요청하세요.',
      },
      {
        question: '야간에 혼자였는데 목격자가 없으면 불리한가요?',
        answer:
          '<strong>CCTV·진단서로 정황을 보충할 수 있는 영역입니다.</strong> 영상 보존과 사건 직후 진료를 함께 챙기세요.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: 'assault 도메인 허브', href: '/guide/assault' },
      { label: '택시기사 폭행 트랙', href: '/guide/assault/assault-taxi-driver-by-passenger-track' },
      { label: '직장 상사 폭행 트랙', href: '/guide/assault/assault-workplace-superior-track' },
      { label: '주차 다툼 상해 트랙', href: '/guide/assault/assault-parking-spot-quarrel-injury-track' },
      { label: '운동경기 상해 트랙', href: '/guide/assault/assault-amateur-sports-injury-track' },
    ],
  },
  {
    domain: 'assault',
    slug: 'assault-school-parent-teacher-track',
    keyword: '학교 학부모 교사 폭행 상해',
    questionKeyword: '학교에서 교사·교직원으로 근무하던 중, 학생 지도·생활기록·민원 문제로 항의하러 온 학부모가 감정이 격해져 저를 밀치고 멱살을 잡거나 손으로 때려 팔과 목을 다치게 했어요. 학교 안에서 벌어진 일이라 신고하면 학교가 시끄러워질까 걱정되고, 학부모는 \'항의하다 살짝 건드렸을 뿐\'이라며 책임을 미룹니다. 학교 내 학부모 폭행 상해를 어떤 절차로 신고·고소하고 정리해 다퉈볼 수 있는지 따져볼 수 있나요?',
    ctaKeyword: '학교 학부모 교사 폭행 상해 신고·증거 절차 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '학부모 교사 폭행 상해 — 5단계 신고·증거 가이드 | 로앤가이드',
      description:
        '학교에서 학부모에게 밀침·구타로 다쳤는데 학교가 시끄러워질까 걱정돼 막막하다면 형법 제257조 상해와 학교 폭행 신고·증거 5단계를 지금 확인하세요.',
    },
    intro:
      '<p>"학교에서 교사·교직원으로 근무하던 중, 학생 지도·평가·생활기록·민원 처리 문제로 항의하러 학교·교무실·상담실을 찾아온 학부모가 감정이 격해져 책상·서류를 내리치거나, 저를 밀치고 멱살을 잡아 흔들고 손·주먹으로 어깨·팔·목을 때려 멍·붓기·통증이 남은 상해를 입은 피해자입니다. 학생들과 동료가 있는 학교 안에서 근무시간 중에 벌어진 일이라 모멸감을 느꼈고, 신고하면 학교가 시끄러워지고 민원으로 번지거나 불이익을 받을까 망설여집니다. 학부모는 오히려 \'정당하게 항의하다 살짝 건드렸을 뿐 폭행이 아니다\'라거나 \'교사가 먼저 무성의하게 응대해 화나게 했다\'며 사건을 정당한 항의나 사소한 실랑이로 몰아가거나 제게 책임을 미룹니다. 학부모라는 민원인 지위에서 행해진 폭행·상해라도 일반 폭행·상해와 같이 신고·고소할 수 있는지, 학교·교육청 신고나 교권 보호 절차와 어떻게 연결되는지, CCTV·진단서가 있는데도 무엇부터 확보하고 어디서부터 신고·고소를 정리해야 하는지 막막한 상태입니다." 형법 제260조 제1항은 폭행을, 같은 법 제257조 제1항은 상해를 정하는 영역입니다. 판례·실무는 폭행·상해가 있었는지와 그 정도는 행위의 동기·경위·태양, 당사자의 관계, 행위 당시와 그 후의 정황 등 모든 사정을 종합해 판단해야 하고, 정당한 항의·민원이라는 명목이라도 사회상규상 허용되는 정도를 넘은 유형력 행사는 폭행·상해로 평가될 수 있다고 보는 본 사례 흐름이 있는 영역입니다. 학교 + 학부모 항의 + 밀침·멱살·구타 + 상처 결합은 \'폭행·상해 인정·절차\' 검토가 가능한 트랙입니다. 피해자라면 ① 경위·관계 ② 상해 정도 ③ 신고·고소 ④ 형사 절차 ⑤ 학교·교권 대응 5중 트랙이 가능한 영역. 대응은 ① 경위 ② 상해 ③ 고소 ④ 형사 ⑤ 학교·교권 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 학교 학부모 교사 폭행 상해 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위·관계·상해 정도·신고·고소·형사 절차·학교·교권 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 경위·관계</strong> — 항의·민원이라는 명목과 밀침·멱살·구타의 선후, 학부모·민원인 관계가 어떻게 작용했는지 정리.</li>\n<li><strong>② 상해 정도</strong> — 멍·붓기·통증의 부위·치유기간이 구타·밀침 경위와 맞는지 정리.</li>\n<li><strong>③ 신고·고소</strong> — 폭행(형법 제260조)·상해(제257조) 중 어디까지 다툴지 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 학교·교권 대응</strong> — 학교·교육청 신고·교권보호위원회·인사상 보호 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 정당한 항의·민원이라는 명목이라도 사회상규상 허용되는 정도를 넘은 유형력은 폭행·상해로 평가될 수 있고 동기·경위·정황을 종합해 따지는 영역이라, 학교 CCTV·동료 진술로 경위와 밀침·멱살·구타의 선후를 시간순으로 특정하고 사건 직후 진료를 받아두는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 신고·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원·교육청 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 영상·진료 확보 (즉시~당일)</strong> — 교무실·복도 CCTV와 동료 촬영·녹음 보존 요청, 병원 진료·상해진단서와 부상 사진 확보.</li>\n<li><strong>2단계 — 경위·상해 정리 (수일 내)</strong> — 항의·민원 명목과 밀침·멱살·구타 동작의 선후, 상처 부위·치유기간이 경위와 맞는지 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출, 학교 내 폭행 경위 첨부.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 진술·영상·진단서 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 학교·교권 대응 (병행)</strong> — 학교·교육청 신고·교권보호위원회 절차, 인사상 보호와 민사 손배 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">학교 학부모 교사 폭행 상해 신고·증거 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·관계·상해 정도·신고 갈래입니다.</strong></p>\n<ul>\n<li><strong>교무실·복도 CCTV·동료 촬영 영상 (밀침·구타 정황)</strong></li>\n<li><strong>녹음·문자·민원 기록 (항의 명목·경위)</strong></li>\n<li><strong>상해진단서·진료기록 (부위·치유기간)</strong></li>\n<li><strong>다친 부위 사진 (시간정보 포함)</strong></li>\n<li><strong>학교 내 폭행 경위 기록 (육하원칙·관계)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>동료·목격자 진술·연락처, 학교 보고·교권 신고 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 정당한 항의 명목이라도 사회상규상 허용되는 정도를 넘은 유형력은 폭행·상해로 평가될 수 있으므로, 학교 CCTV·동료 진술로 경위와 밀침·멱살·구타의 선후를 특정하고 사건 직후 진료를 받아 부위·치유기간을 남겨두는 것이 핵심입니다. 학교 CCTV는 덮어쓰기 전에 빨리 보존 요청을 해두고 교권 보호 신고도 함께 살피는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>항의·폭행 구분</strong> — 정당한 항의인지 허용 정도를 넘은 유형력인지.</li>\n<li><strong>상해 인정</strong> — 상처가 경미한 정도를 넘어 상해로 평가되는지.</li>\n<li><strong>상해 인과</strong> — 부상이 밀침·멱살·구타로 생긴 것인지.</li>\n<li><strong>학교 불이익</strong> — 신고 후 민원·불이익을 어떻게 방지하는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112 · 경찰 민원 182</strong></li>\n<li><strong>교육청·교권보호 상담 (시도교육청 안내)</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295 · 국선변호인 제도</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 정황을 종합한 유형력 행사와 죄의 성립',
        summary:
          '대법원 2024도17056(대법원, 2025.06.12 선고) 영역에서 법원은 보호감독자나 그로부터 보호감독을 위임받은 자가 미성년자유인죄의 기망 대상이 될 수 있는지 등 죄의 성립을 행위 경위와 당사자의 관계, 보호·감독 등 구체적 정황을 종합해 판단해야 한다는 취지로 보아, 명목과 형식이 아니라 행위의 실질과 정황을 면밀히 살펴야 한다고 판시했습니다. 학교 학부모 교사 폭행 상해 사안에서도 항의·민원 명목과 밀침·멱살·구타의 선후, 상해 정도를 학교 CCTV·동료 진술·진료로 정리해 검토해볼 수 있습니다.',
        takeaway: '학교 + 학부모 항의 + 밀침·멱살·구타 + 상처 결합 시 폭행·상해 인정·절차 검토 영역 — 학교 CCTV·동료 진술·진료·부상 사진·경위 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '정당한 항의였다고 하면 폭행으로 다툴 수 없나요?',
        answer:
          '<strong>허용되는 정도를 넘은 유형력은 폭행·상해로 평가될 여지가 있는 영역입니다.</strong> 항의 명목과 구타 동작을 영상으로 구분하세요.',
      },
      {
        question: '학교에서 신고하면 시끄러워지지 않을까요?',
        answer:
          '<strong>형사 신고와 교권 보호 절차로 보호를 함께 살피는 영역입니다.</strong> 학교 보고·신고 경위를 기록하세요.',
      },
      {
        question: '학부모라는 민원인 지위도 고려되나요?',
        answer:
          '<strong>관계와 정황이 종합 판단에 작용하는 영역입니다.</strong> 민원·항의 관계와 경위를 구체적으로 정리하세요.',
      },
      {
        question: '학교 CCTV도 확보할 수 있나요?',
        answer:
          '<strong>밀침·구타 정황을 보여줄 핵심 자료가 되는 영역입니다.</strong> 덮어쓰기 전에 학교에 보존 요청하세요.',
      },
      {
        question: '교권 보호 신고도 함께 할 수 있나요?',
        answer:
          '<strong>형사 절차와 별개로 교권 보호 절차를 병행할 수 있는 영역입니다.</strong> 교육청 상담을 함께 검토하세요.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: 'assault 도메인 허브', href: '/guide/assault' },
      { label: '직장 상사 폭행 트랙', href: '/guide/assault/assault-workplace-superior-track' },
      { label: '이웃 소음 폭행 트랙', href: '/guide/assault/assault-noise-complaint-neighbor-track' },
      { label: '운전 시비 보복 폭행 트랙', href: '/guide/assault/assault-road-rage-retaliation-track' },
      { label: '운동경기 상해 트랙', href: '/guide/assault/assault-amateur-sports-injury-track' },
    ],
  },
  {
    domain: 'assault',
    slug: 'assault-acquaintance-gathering-falsely-accused-defense',
    keyword: '지인 모임 폭행 무고',
    questionKeyword: '지인·친목 모임에서 한 사람과 말다툼을 하며 가볍게 몸이 닿았을 뿐인데, 며칠 뒤 그 사람이 제가 자기를 때려 다치게 했다며 통증 위주의 상해진단서를 들고 고소했어요. 저는 때린 적이 없고 모임에서 넘어지거나 다른 사람과 부딪힌 것일 수도 있습니다. 사실과 다르게 신고되어 혐의를 받고 있다면 진단서와 진술을 어떻게 다퉈 방어를 정리할 수 있는지 따져볼 수 있나요?',
    ctaKeyword: '지인 모임 폭행 무고 진단서·방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '지인 모임 폭행 무고 — 5단계 진단서 방어 점검 | 로앤가이드',
      description:
        '지인 모임 실랑이 끝에 통증 위주 진단서로 상해 고소를 당해 막막하다면 형법 제257조 상해와 인과·구성요건 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"지인·동호회·친목 모임에서 한 사람과 의견 차이나 사소한 문제로 말다툼·언쟁이 붙어 서로 목소리를 높이고 가볍게 몸이 닿거나 실랑이를 한 뒤, 며칠 지나 상대가 \'네가 나를 때려 다치게 했다\'며 통증을 호소하는 내용의 상해진단서를 들고 고소·신고해 입건된 피고인입니다. 저는 실제로는 말로 다투고 살짝 몸이 스쳤을 뿐 상대를 주먹으로 때리거나 다치게 한 적이 없는데, 모임에 사람이 많고 분위기가 어수선해 경위가 뒤섞여 있고, 상대는 상해진단서와 자기 진술만으로 저를 가해자로 지목합니다. 상대가 호소하는 통증·상처가 제 행위로 생긴 것이 맞는지, 모임에서 스스로 넘어지거나 다른 사람과 부딪혀 생긴 것은 아닌지, 통증 위주로 발급된 진단서가 곧바로 제 폭행으로 인한 상해를 증명하는 것은 아닌지 헷갈립니다. 묵은 감정이나 합의금을 노려 사실과 다르게 지목된 것은 아닌지도 의심됩니다. 혐의를 받고 있다면 어디부터 방어를 정리하고 진단서·진술의 신빙성과 인과관계를 어떻게 다퉈야 하는지 막막한 상태입니다." 형법 제257조 제1항은 상해를, 형사소송법 제308조는 자유심증주의를, 형법 제20조는 정당행위를 정하는 영역입니다. 판례·실무는 형벌법규는 죄형법정주의에 따라 문언의 가능한 의미 안에서 엄격하게 해석해야 하므로 가해 행위와 상해 사실·인과관계가 합리적 의심이 없는 정도로 증명되어야 죄가 성립하고, 상해진단서가 피해자 진술과 함께 유력한 증거가 될 수 있으나 통증의 주관적 호소에 의존해 발급된 진단서는 진단·작성일자가 상해 시점과 근접한지, 부위·정도가 주장 원인·경위와 일치하는지, 다른 원인으로 생긴 것은 아닌지 등을 면밀히 살펴 증명력을 신중히 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 지인 모임 + 통증 위주 진단서 고소 + 인과 혼재 결합은 \'구성요건·상해진단서 증명력·인과 평가\' 검토가 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 진단서 증명력 ② 인과 ③ 진술 신빙성 ④ 형사 절차 ⑤ 방어 자료 5중 트랙이 가능한 영역. 대응은 ① 진단서 ② 인과 ③ 진술 ④ 형사 ⑤ 자료 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 지인 모임 폭행 무고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진단서 증명력·인과·진술 신빙성·형사 절차·방어 자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 진단서 증명력</strong> — 통증 위주로 발급된 진단서가 곧바로 내 행위로 생긴 상해를 직접 증명하는지 정리.</li>\n<li><strong>② 인과</strong> — 상처가 내 행위인지, 넘어짐·제3자 접촉 등 다른 원인 가능성 정리.</li>\n<li><strong>③ 진술 신빙성</strong> — 상대 진술이 일관·합리적인지, 합의금·감정 동기로 합리적 의심 여지가 있는지 정리.</li>\n<li><strong>④ 형사 절차</strong> — 고소 접수·조사·대질·검찰 처분 흐름과 방어권 확인.</li>\n<li><strong>⑤ 방어 자료</strong> — 영상·목격자·동석자 진술 등 방어 자료 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형벌법규는 문언의 가능한 의미 안에서 엄격하게 해석되고 가해 행위와 상해·인과가 합리적 의심 없이 증명되어야 하는 영역이라, 어수선한 모임에서 넘어짐·제3자 접촉 등 다른 원인 가능성과 내 행동을 영상·목격자로 구체적으로 짚어두는 것이 핵심인 방어 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·국선변호인 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사건·자료 확인 (즉시~당일)</strong> — 고소장·진단서 사본, 모임 장소 CCTV·휴대폰 영상 보존 요청, 메신저·통화 기록 확보.</li>\n<li><strong>2단계 — 진단서·인과 대조 (수일 내)</strong> — 진단·작성일자가 상해 시점과 근접한지, 부위·정도가 내 행동·언쟁 경위와 일치하는지, 넘어짐·제3자 접촉 가능성 대조 정리.</li>\n<li><strong>3단계 — 진술·신빙성 검토 (조사 전)</strong> — 상대 진술의 일관성·합리적 의심 여지와 합의금·감정 동기, 진료 시점·경과 점검.</li>\n<li><strong>4단계 — 조사·대질 대응 (수사기관 일정)</strong> — 진술·영상·목격자 정리 후 조사 출석, 방어권·국선변호인 활용.</li>\n<li><strong>5단계 — 처분 대응 (검찰 처분 일정)</strong> — 혐의없음·불기소 의견서나 정상 자료 제출 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 무고 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">지인 모임 폭행 무고 진단서·방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 진단서 증명력·인과·진술 신빙성 갈래입니다.</strong></p>\n<ul>\n<li><strong>고소장·상해진단서 사본 (부위·정도·발급 시점)</strong></li>\n<li><strong>모임 장소 CCTV·휴대폰 영상 (언쟁·접촉 정황)</strong></li>\n<li><strong>메신저·통화·SNS 기록 (시비·합의·감정 경위)</strong></li>\n<li><strong>넘어짐·제3자 접촉 등 인과 단서 자료 (합리적 의심)</strong></li>\n<li><strong>상대 진술 불일치·동기 단서 자료 (신빙성 다툼)</strong></li>\n<li><strong>동석자·지인·참석자 진술·연락처 (행위 부인 입증)</strong></li>\n<li><strong>반성·정상·관계 회복 등 정상 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 통증 위주로 발급된 진단서는 진단·작성일자가 상해 시점과 근접한지, 부위·정도가 주장 원인·경위와 일치하는지, 다른 원인으로 생긴 것은 아닌지, 진료 경과까지 면밀히 살펴 증명력을 신중히 판단하므로, 어수선한 모임에서 넘어짐·제3자 접촉 가능성과 내 행동이 진단서와 어긋나는 지점을 영상·목격자로 구체적으로 짚어두는 것이 핵심입니다. 모임 장소 CCTV는 시간이 지나면 삭제되기 쉬워 즉시 보존 요청·확보를 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진단서 증명력</strong> — 통증 위주 진단서가 곧바로 상해를 증명하는지.</li>\n<li><strong>인과</strong> — 상처가 내 행위인지 넘어짐·제3자 접촉 등 다른 원인인지.</li>\n<li><strong>합리적 의심</strong> — 달리 상해를 입을 정황이 있는지.</li>\n<li><strong>무고 동기</strong> — 합의금·감정 등 사실과 다른 지목 동기가 있는지.</li>\n<li><strong>방어권</strong> — 조사·대질에서 방어권이 충분히 보장되는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112 · 경찰 민원 182</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 죄형법정주의와 구성요건의 엄격 해석',
        summary:
          '대법원 2022도10272(대법원, 2024.11.28 선고) 영역에서 법원은 형벌법규는 문언의 가능한 의미를 벗어나 유추적용할 수 없고 입법자가 명확히 설정한 적용범위는 구체적·개별적 사정을 들어 함부로 확장할 수 없다고 보아, 형사처벌은 명확한 구성요건과 증명을 전제로 엄격하게 판단해야 한다는 취지로 판시했습니다. 지인 모임 폭행 무고 방어 사안에서도 통증 위주 진단서의 부위·정도와 인과, 발급 경위, 가해 행위가 합리적 의심 없이 증명됐는지를 대조해 검토해볼 수 있습니다.',
        takeaway: '지인 모임 + 통증 위주 진단서 고소 + 인과 혼재 결합 시 구성요건·상해진단서 증명력·인과 평가 검토 영역 — 진단서 대조·모임 영상·다른 원인 단서·정상 자료 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '몸이 살짝 닿았을 뿐인데 상해 고소가 되나요?',
        answer:
          '<strong>가해 행위와 상해·인과가 합리적 의심 없이 증명돼야 죄가 되는 영역입니다.</strong> 내 행동과 진단서 부위를 대조해 정리하세요.',
      },
      {
        question: '통증 위주 진단서만으로 유죄가 되나요?',
        answer:
          '<strong>발급 경위·시점·진료 경과까지 살펴 증명력을 신중히 판단하는 영역입니다.</strong> 진단서를 부위·시점별로 대조하세요.',
      },
      {
        question: '모임에서 넘어졌을 가능성은 어떻게 다투나요?',
        answer:
          '<strong>다른 원인 가능성이 합리적 의심으로 작용하는 영역입니다.</strong> CCTV·목격자로 넘어짐·제3자 접촉 단서를 확보하세요.',
      },
      {
        question: '합의금을 노린 무고가 의심되면 어떻게 하나요?',
        answer:
          '<strong>진술의 동기·일관성이 신빙성 다툼이 되는 영역입니다.</strong> 메신저·통화 기록으로 동기 단서를 정리하세요.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>진단서 대조와 인과·진술 신빙성 정리가 출발점인 영역입니다.</strong> 모임 영상·목격자부터 확보하세요.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: 'assault 도메인 허브', href: '/guide/assault' },
      { label: '술자리 어깨충돌 무고 방어', href: '/guide/assault/assault-bar-shoulder-bump-falsely-accused-defense' },
      { label: '동창회 폭행 무고 방어', href: '/guide/assault/assault-class-reunion-falsely-accused-defense' },
      { label: '운동경기 상해 트랙', href: '/guide/assault/assault-amateur-sports-injury-track' },
      { label: '직장 상사 폭행 트랙', href: '/guide/assault/assault-workplace-superior-track' },
    ],
  },
  {
    domain: 'dui',
    slug: 'dui-electric-scooter-sidewalk-track',
    keyword: '전동킥보드 인도 음주운전 입건',
    questionKeyword: '술을 마신 뒤 공유 전동킥보드를 인도·골목 짧은 구간에서 타다 단속돼 음주운전으로 입건됐습니다. 저는 자동차도 아니고 인도에서 잠깐 탔을 뿐인데 전동킥보드도 음주운전 처벌 대상인지, 측정·적발 절차는 적법했는지 막막합니다. 전동킥보드 인도 음주운전 입건에서 원동기장치자전거 해당 여부와 측정 적법성을 어떻게 정리해 다퉈볼 수 있는지 따져볼 수 있나요?',
    ctaKeyword: '전동킥보드 인도 음주운전 측정·적발 자료 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '전동킥보드 음주운전 — 5단계 측정·적발 점검 | 로앤가이드',
      description:
        '술 마신 뒤 전동킥보드를 인도에서 잠깐 탔다 음주운전 입건돼 처벌 대상인지 막막하다면 도로교통법 제2조·제44조 측정·적발 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술을 마신 뒤 집 근처에서 공유 전동킥보드(개인형 이동장치, PM)를 인도·골목·이면도로 짧은 구간에서 잠깐 타고 이동하다가 단속·신고로 적발돼 음주운전으로 입건된 피의자입니다. 저는 자동차를 운전한 것도 아니고 차도가 아니라 인도·골목에서 잠깐 탔을 뿐인데, 전동킥보드도 음주운전 처벌 대상이 되는지, 자전거처럼 가볍게 처리되는 게 아니라 원동기장치자전거로 보아 처벌되는 것인지 헷갈립니다. 또 단속 당시 측정 절차가 적법했는지, 측정 전 충분한 고지·기회가 있었는지, 적발 경위와 운전 구간·거리가 정확히 특정됐는지도 의심됩니다. 사실과 다르게 운전 사실이나 정도가 부풀려진 것은 아닌지, 혐의를 받고 있다면 어디부터 적발·측정 자료를 확보하고 전동킥보드의 법적 성격과 측정 적법성을 어떻게 다퉈야 하는지 막막한 상태입니다." 도로교통법 제2조는 \'개인형 이동장치\'와 \'원동기장치자전거\'의 정의를, 같은 법 제44조 제1항은 술에 취한 상태에서의 운전 금지를, 제148조의2는 그 처벌을 정하는 영역입니다. 판례·실무는 전동킥보드와 같은 개인형 이동장치는 통행방법 등에서 자전거에 준해 규율하면서 \'자전거 등\'으로 분류했더라도 원동기장치자전거와 별개의 개념이 아니라 원동기장치자전거에 포함되며, 음주운전 처벌 규정의 적용 여부와 형의 경중은 행위 당시와 그 후의 법령·문언·체계를 종합해 판단해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 전동킥보드 + 인도·짧은 구간 운전 + 음주측정 결합은 \'원동기장치자전거 해당·측정 적법성 평가\' 검토가 가능한 트랙입니다. 혐의를 받고 있다면 ① 운전·구간 ② 법적 성격 ③ 측정 적법성 ④ 형사 절차 ⑤ 방어 자료 5중 트랙이 가능한 영역. 대응은 ① 운전 ② 성격 ③ 측정 ④ 형사 ⑤ 자료 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 전동킥보드 인도 음주운전 입건 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 운전·구간·법적 성격·측정 적법성·형사 절차·방어 자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 운전·구간</strong> — 운전 사실과 구간·거리, 적발 경위가 정확히 특정됐는지 정리.</li>\n<li><strong>② 법적 성격</strong> — 전동킥보드가 원동기장치자전거에 포함돼 음주운전 처벌 대상이 되는지 정리.</li>\n<li><strong>③ 측정 적법성</strong> — 음주측정 절차·고지·기회가 적법했는지, 수치·시점이 정확한지 정리.</li>\n<li><strong>④ 형사 절차</strong> — 적발·조사·검찰 처분 흐름과 방어권 확인.</li>\n<li><strong>⑤ 방어 자료</strong> — 적발·측정 자료, 운전 구간 영상 등 방어 자료 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 전동킥보드 같은 개인형 이동장치는 \'자전거 등\'으로 분류됐어도 원동기장치자전거에 포함되어 음주운전 규정 적용이 검토되는 영역이라, 운전 구간·거리와 측정 절차의 적법성을 적발 자료·영상으로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사·행정 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·국선변호인 안내 절차와 행정심판 90일 별도 트랙입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 적발·측정 자료 확보 (즉시~당일)</strong> — 단속 경위서·음주측정 결과지, 운전 구간 CCTV·블랙박스·공유앱 이용기록 보존 요청.</li>\n<li><strong>2단계 — 운전·성격 정리 (수일 내)</strong> — 운전 구간·거리·도로 종류와 전동킥보드의 원동기장치자전거 해당 여부를 대조 정리.</li>\n<li><strong>3단계 — 측정 적법성 검토 (조사 전)</strong> — 측정 고지·기회·수치·시점의 적법성과 사실과 다른 정도 부풀림 가능성 점검.</li>\n<li><strong>4단계 — 조사·검찰 처분 대응 (수사기관 일정)</strong> — 진술·자료 정리 후 조사 출석, 방어권·국선변호인 활용.</li>\n<li><strong>5단계 — 행정 대응 (처분 안 날부터 90일 이내)</strong> — 면허 정지·취소 처분 시 이의신청·행정심판·집행정지 별도 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">전동킥보드 인도 음주운전 측정·적발 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 운전·구간·법적 성격·측정 적법성 갈래입니다.</strong></p>\n<ul>\n<li><strong>단속 경위서·적발 보고 자료 (운전 구간·거리)</strong></li>\n<li><strong>음주측정 결과지·측정 시각 자료 (수치·시점)</strong></li>\n<li><strong>운전 구간 CCTV·블랙박스 영상 (도로 종류·경위)</strong></li>\n<li><strong>공유 전동킥보드 이용기록·앱 내역 (구간·거리)</strong></li>\n<li><strong>측정 전 고지·기회 정황 자료 (절차 적법성)</strong></li>\n<li><strong>음주 경위·시간 기록 (정도 다툼)</strong></li>\n<li><strong>운전 부인·구간 단서·정상 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 전동킥보드는 \'자전거 등\'으로 분류됐어도 원동기장치자전거에 포함되어 음주운전 규정 적용이 검토되므로, 운전 구간·거리와 측정 절차의 적법성을 적발 자료·영상·앱 이용기록으로 정리해두는 것이 핵심입니다. 운전 구간 CCTV·블랙박스는 덮어쓰기 전에 빨리 보존 요청을 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>법적 성격</strong> — 전동킥보드가 원동기장치자전거에 포함되는지.</li>\n<li><strong>운전·구간</strong> — 운전 사실과 구간·거리가 정확히 특정됐는지.</li>\n<li><strong>측정 적법성</strong> — 측정 고지·기회·수치·시점이 적법한지.</li>\n<li><strong>정도 부풀림</strong> — 운전 사실·정도가 사실과 다르게 부풀려졌는지.</li>\n<li><strong>행정·형사 분리</strong> — 면허 처분과 형사 절차를 함께 다투는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112 · 경찰 민원 182</strong></li>\n<li><strong>도로교통공단 (운전면허·교통 안내)</strong></li>\n<li><strong>중앙행정심판위원회 (면허 처분 행정심판)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 전동킥보드의 원동기장치자전거 해당',
        summary:
          '대법원 2022도13430(대법원, 2023.06.29 선고) 영역에서 법원은 개정 도로교통법이 전동킥보드와 같은 개인형 이동장치를 통행방법 등에서 자전거에 준해 규율하면서 \'자전거 등\'으로 분류했더라도, 정의규정과 체계상 개인형 이동장치는 원동기장치자전거와 별개의 개념이 아니라 원동기장치자전거에 포함된다고 보아, 관련 가중처벌 규정의 원동기장치자전거에 전동킥보드 같은 개인형 이동장치도 포함된다고 판시했습니다. 전동킥보드 인도 음주운전 입건 사안에서도 운전 구간·거리와 측정 적법성을 적발 자료·영상으로 정리해 검토해볼 수 있습니다.',
        takeaway: '전동킥보드 + 인도·짧은 구간 운전 + 음주측정 결합 시 원동기장치자전거 해당·측정 적법성 평가 검토 영역 — 단속 경위서·측정 결과지·구간 영상·앱 이용기록 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '전동킥보드도 음주운전으로 처벌되나요?',
        answer:
          '<strong>개인형 이동장치는 원동기장치자전거에 포함되어 음주운전 규정 적용이 검토되는 영역입니다.</strong> 운전 구간·측정 자료부터 정리하세요.',
      },
      {
        question: '인도·골목에서 잠깐 탔어도 운전인가요?',
        answer:
          '<strong>운전 사실과 구간·거리가 정확히 특정됐는지가 다퉈지는 영역입니다.</strong> 구간 영상·앱 이용기록을 확보하세요.',
      },
      {
        question: '음주측정 절차가 잘못되면 다툴 수 있나요?',
        answer:
          '<strong>측정 고지·기회·수치·시점의 적법성이 쟁점이 되는 영역입니다.</strong> 측정 결과지·경위서를 점검하세요.',
      },
      {
        question: '면허 처분도 함께 받나요?',
        answer:
          '<strong>형사 절차와 별개로 면허 처분 행정 트랙이 진행되는 영역입니다.</strong> 처분을 안 날부터 90일 이내 행정심판을 검토하세요.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>적발·측정 자료와 운전 구간·법적 성격 정리가 출발점인 영역입니다.</strong> 구간 영상과 앱 이용기록부터 확보하세요.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: 'dui 도메인 허브', href: '/guide/dui' },
      { label: '주차장 짧은 거리 음주 트랙', href: '/guide/dui/dui-parking-lot-short-move-track' },
      { label: '생계형 면허취소 구제 트랙', href: '/guide/dui/dui-hardship-license-relief-track' },
      { label: '구강청결제 측정오류 방어', href: '/guide/dui/dui-mouthwash-reading-error-defense' },
      { label: '면허 재취득 트랙', href: '/guide/dui/dui-license-reacquisition-track' },
    ],
  },
  {
    domain: 'dui',
    slug: 'dui-test-refusal-prior-record-defense',
    keyword: '음주측정거부 과거 전력 가중 항변',
    questionKeyword: '음주측정을 거부했다는 이유로 입건됐는데, 과거 음주 전력이 있다며 가중처벌까지 더해진다고 합니다. 저는 유효한 측정 요구였는지, 거부로 볼 만한 명백한 상황이었는지 다투고 싶고, 과거 전력을 가중 근거로 삼는 범위도 의심됩니다. 사실과 다르게 측정거부·가중으로 몰려 혐의를 받고 있다면 측정 요구 적법성과 가중 범위를 어떻게 정리해 다퉈볼 수 있는지 따져볼 수 있나요?',
    ctaKeyword: '음주측정거부 과거 전력 가중 측정 적법성 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '음주측정거부 가중 — 5단계 측정 적법성 점검 | 로앤가이드',
      description:
        '음주측정 거부에 과거 전력 가중까지 더해져 막막하다면 도로교통법 제44조 측정 요구 적법성과 가중 범위 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"음주측정을 거부했다는 이유로 도로교통법 위반(음주측정거부)으로 입건됐는데, 수사기관이 과거 음주운전·음주측정거부 전력이 있다며 가중처벌까지 더해진다고 한 상황에 놓인 피의자입니다. 저는 당시 측정 요구가 명확하고 유효한 것이었는지, 측정 기회·고지가 충분했는지, 제 언행이 정말로 측정을 거부한 것으로 볼 만한 명백한 상황이었는지부터 다투고 싶은데, 술에 취해 경황이 없던 상태라 경위가 뒤섞여 있습니다. 또 과거 전력을 가중처벌의 근거로 삼는 범위가 어디까지인지, 효력을 잃었거나 적용 범위를 벗어난 전력까지 불리하게 끌어다 쓰는 것은 아닌지도 의심됩니다. 사실과 다르게 측정거부와 가중으로 몰려 처벌이 과도하게 무거워지는 것은 아닌지, 혐의를 받고 있다면 어디부터 적발·측정 자료를 확보하고 측정 요구의 적법성과 가중 범위를 어떻게 다퉈야 하는지 막막한 상태입니다." 도로교통법 제44조 제2항은 경찰공무원의 음주측정 요구와 그에 응할 의무를, 같은 법 제148조의2는 음주측정거부와 그 가중처벌을 정하는 영역입니다. 판례·실무는 형벌법규는 문언의 가능한 의미를 벗어나 유추해석할 수 없고 가벌성의 범위를 행위자에게 불리하게 확장하는 것은 죄형법정주의의 파생원칙인 유추해석금지에 반해 허용되지 않으므로, 측정거부죄는 유효한 측정 요구를 인식하면서도 응하지 않는 경우에 성립하며 가중처벌의 근거가 되는 전력의 범위도 법문에 따라 엄격히 해석해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 측정거부 + 과거 전력 가중 + 요구 적법성 다툼 결합은 \'측정 요구 인식·가중 범위 평가\' 검토가 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 측정 요구 적법성 ② 거부 인식 ③ 가중 범위 ④ 형사 절차 ⑤ 방어 자료 5중 트랙이 가능한 영역. 대응은 ① 요구 ② 인식 ③ 가중 ④ 형사 ⑤ 자료 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주측정거부 과거 전력 가중 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 측정 요구 적법성·거부 인식·가중 범위·형사 절차·방어 자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 측정 요구 적법성</strong> — 측정 요구가 명확·유효했고 고지·기회가 충분했는지 정리.</li>\n<li><strong>② 거부 인식</strong> — 유효한 요구를 인식하면서도 응하지 않은 것으로 볼 명백한 정황인지 정리.</li>\n<li><strong>③ 가중 범위</strong> — 과거 전력이 법문상 가중 근거 범위에 드는지, 효력·적용 범위를 벗어난 전력인지 정리.</li>\n<li><strong>④ 형사 절차</strong> — 적발·조사·검찰 처분 흐름과 방어권 확인.</li>\n<li><strong>⑤ 방어 자료</strong> — 적발·측정 요구 자료, 현장 영상 등 방어 자료 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형벌법규는 유추해석금지에 따라 가벌성을 불리하게 확장할 수 없는 영역이라, 측정 요구가 유효했는지·거부 인식이 명백했는지와 가중 근거 전력의 범위를 현장 영상·측정 요구 자료로 정리하는 것이 핵심인 방어 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사·행정 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·국선변호인 안내 절차와 행정심판 90일 별도 트랙입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 적발·요구 자료 확보 (즉시~당일)</strong> — 단속 경위서·측정 요구 고지 자료, 현장 CCTV·블랙박스·바디캠 보존 요청.</li>\n<li><strong>2단계 — 요구·인식 정리 (수일 내)</strong> — 측정 요구의 명확성·고지·기회와 거부로 볼 정황인지 시간순 정리.</li>\n<li><strong>3단계 — 가중 범위 검토 (조사 전)</strong> — 과거 전력의 시점·내용·효력과 가중 근거 범위 해당 여부 점검.</li>\n<li><strong>4단계 — 조사·검찰 처분 대응 (수사기관 일정)</strong> — 진술·자료 정리 후 조사 출석, 방어권·국선변호인 활용.</li>\n<li><strong>5단계 — 행정 대응 (처분 안 날부터 90일 이내)</strong> — 면허 정지·취소 처분 시 이의신청·행정심판·집행정지 별도 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주측정거부 과거 전력 가중 측정 적법성 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 측정 요구 적법성·거부 인식·가중 범위 갈래입니다.</strong></p>\n<ul>\n<li><strong>단속 경위서·측정 요구 고지 자료 (요구 명확성)</strong></li>\n<li><strong>현장 CCTV·블랙박스·바디캠 영상 (거부 정황)</strong></li>\n<li><strong>측정 기회·시간 경과 자료 (응할 기회)</strong></li>\n<li><strong>과거 전력 시점·내용·효력 자료 (가중 범위)</strong></li>\n<li><strong>음주·경황 정황 기록 (거부 인식 다툼)</strong></li>\n<li><strong>진술·언행 단서 자료 (명백성 다툼)</strong></li>\n<li><strong>반성·정상·생계 등 정상 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 측정거부죄는 유효한 요구를 인식하면서도 응하지 않은 경우에 성립하고 가중 근거 전력의 범위도 법문에 따라 엄격히 해석되므로, 측정 요구의 명확성·고지·기회와 과거 전력의 시점·효력을 현장 영상·요구 자료로 구체적으로 정리해두는 것이 핵심입니다. 현장 CCTV·바디캠은 덮어쓰기 전에 빨리 보존 요청을 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>요구 적법성</strong> — 측정 요구가 명확·유효하고 고지·기회가 충분했는지.</li>\n<li><strong>거부 인식</strong> — 유효한 요구를 인식하면서 응하지 않은 명백한 정황인지.</li>\n<li><strong>가중 범위</strong> — 과거 전력이 법문상 가중 근거 범위에 드는지.</li>\n<li><strong>유추 확장</strong> — 효력·범위를 벗어난 전력을 불리하게 끌어다 쓰는지.</li>\n<li><strong>행정·형사 분리</strong> — 면허 처분과 형사 절차를 함께 다투는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112 · 경찰 민원 182</strong></li>\n<li><strong>도로교통공단 (운전면허·교통 안내)</strong></li>\n<li><strong>중앙행정심판위원회 (면허 처분 행정심판)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 유추해석금지와 가벌성 범위의 엄격 해석',
        summary:
          '대법원 2021도17733(대법원, 2023.06.29 선고) 영역에서 법원은 법규정 문언의 가능한 의미를 벗어나 형벌법규를 해석하는 것은 유추해석으로서 죄형법정주의에 위반되고, 위법성·책임 조각사유나 소추조건 등에 관해 범위를 제한적으로 유추적용해 가벌성의 범위를 확대하는 것도 허용될 수 없다고 보면서, 무면허운전죄는 유효한 운전면허가 없음을 알면서 운전하는 고의범이라는 취지로 판시했습니다. 음주측정거부 과거 전력 가중 사안에서도 측정 요구 인식과 가중 근거 전력의 범위를 현장 자료로 정리해 검토해볼 수 있습니다.',
        takeaway: '측정거부 + 과거 전력 가중 + 요구 적법성 다툼 결합 시 측정 요구 인식·가중 범위 평가 검토 영역 — 단속 경위서·측정 요구 자료·현장 영상·과거 전력 자료 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '측정 요구가 불분명했어도 거부죄가 되나요?',
        answer:
          '<strong>유효한 요구를 인식하면서 응하지 않은 명백한 정황인지가 다퉈지는 영역입니다.</strong> 요구 고지·기회를 현장 영상으로 정리하세요.',
      },
      {
        question: '과거 전력은 어디까지 가중 근거가 되나요?',
        answer:
          '<strong>가중 근거 전력의 범위를 법문에 따라 엄격히 해석하는 영역입니다.</strong> 전력의 시점·내용·효력 자료를 확인하세요.',
      },
      {
        question: '효력을 잃은 전력도 불리하게 쓰이나요?',
        answer:
          '<strong>범위를 벗어난 전력을 불리하게 확장하는지가 쟁점이 되는 영역입니다.</strong> 전력 효력 자료로 가중 범위를 다투세요.',
      },
      {
        question: '면허 처분도 함께 받나요?',
        answer:
          '<strong>형사 절차와 별개로 면허 처분 행정 트랙이 진행되는 영역입니다.</strong> 처분을 안 날부터 90일 이내 행정심판을 검토하세요.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>측정 요구 자료와 거부 인식·가중 범위 정리가 출발점인 영역입니다.</strong> 현장 영상·과거 전력 자료부터 확보하세요.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: 'dui 도메인 허브', href: '/guide/dui' },
      { label: '음주측정 거부 방어 트랙', href: '/guide/dui/dui-measurement-refusal-charged-defense-track' },
      { label: '주차장 짧은 거리 음주 트랙', href: '/guide/dui/dui-parking-lot-short-move-track' },
      { label: '생계형 면허취소 구제 트랙', href: '/guide/dui/dui-hardship-license-relief-track' },
      { label: '구강청결제 측정오류 방어', href: '/guide/dui/dui-mouthwash-reading-error-defense' },
    ],
  },
  {
    domain: 'dui',
    slug: 'dui-pm-amended-law-lighter-track',
    keyword: '개인형 이동장치 음주 법 개정 경한 신법',
    questionKeyword: '술을 마신 뒤 전동킥보드 같은 개인형 이동장치를 운전해 음주운전으로 입건됐는데, 그 사이 처벌 규정이 개정돼 형이 가벼워졌다고 들었습니다. 행위 당시 무거운 법이 아니라 개정된 가벼운 법이 적용되는지, 어떤 경우에 경한 신법이 적용되는지 막막합니다. 개인형 이동장치 음주운전에서 경한 신법 적용 여부를 어떻게 정리해 다퉈볼 수 있는지 따져볼 수 있나요?',
    ctaKeyword: '개인형 이동장치 음주 경한 신법 적용 자료 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '개인형 이동장치 음주 — 5단계 경한 신법 점검 | 로앤가이드',
      description:
        '전동킥보드 음주운전으로 입건됐는데 그 사이 처벌이 가벼워져 어떤 법이 적용되는지 막막하다면 도로교통법 제44조와 형법 제1조 경한 신법 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"술을 마신 뒤 전동킥보드 같은 개인형 이동장치(PM)를 운전하다 단속·신고로 적발돼 음주운전으로 입건됐는데, 사건이 진행되는 사이 개인형 이동장치 음주운전 처벌 규정이 개정되어 형이 가벼워졌다는 이야기를 듣고 혼란스러운 피의자입니다. 행위 당시에는 더 무거운 규정이 적용되던 것이 개정으로 가벼워졌다면, 제 사건에 행위 당시의 무거운 법이 그대로 적용되는지 아니면 개정된 가벼운 법이 적용되는지부터 헷갈립니다. 법이 바뀐 이유가 처벌이 부당하거나 과중했다는 반성적 고려 때문이어야만 가벼운 법이 적용되는지, 아니면 그런 이유를 따지지 않고 형이 가벼워졌다는 사실만으로 가벼운 법이 적용되는지도 막막합니다. 적발 경위·측정 절차가 적법했는지와 별개로, 적용 법조와 형의 경중부터 정확히 정리하고 싶은데 어디부터 자료를 확보하고 경한 신법 적용 여부를 어떻게 다퉈야 하는지 막막한 상태입니다." 도로교통법 제44조 제1항은 술에 취한 상태에서의 운전 금지를, 제148조의2는 그 처벌을, 형법 제1조 제2항은 범죄 후 법령 변경으로 형이 가벼워진 경우 신법을 적용하도록, 형사소송법 제326조 제4호는 범죄 후 형이 폐지된 경우 면소를 정하는 영역입니다. 판례·실무는 형벌법규 자체의 변경에 따라 범죄를 구성하지 않게 되거나 형이 가벼워진 경우 종전 처벌이 부당했다거나 과형이 과중했다는 반성적 고려에 따른 변경인지를 따지지 않고 원칙적으로 형법 제1조 제2항과 형사소송법 제326조 제4호가 적용되며, 개인형 이동장치 음주운전에 관해 형이 가벼워진 법률 개정을 반영해 더 가벼운 신법을 적용해야 한다고 보는 본 사례 흐름이 있는 영역입니다. 개인형 이동장치 + 음주운전 + 법령 개정 결합은 \'경한 신법 적용 평가\' 검토가 가능한 트랙입니다. 혐의를 받고 있다면 ① 적용 법조 ② 형의 경중 ③ 적발·측정 ④ 형사 절차 ⑤ 방어 자료 5중 트랙이 가능한 영역. 대응은 ① 법조 ② 경중 ③ 적발 ④ 형사 ⑤ 자료 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 개인형 이동장치 음주 법 개정 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 적용 법조·형의 경중·적발·측정·형사 절차·방어 자료 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 적용 법조</strong> — 행위 당시 법과 개정된 법 중 어떤 규정이 적용되는지 정리.</li>\n<li><strong>② 형의 경중</strong> — 개정으로 형이 가벼워졌는지, 경한 신법 적용 대상인지 정리.</li>\n<li><strong>③ 적발·측정</strong> — 적발 경위·측정 절차의 적법성과 운전 사실·정도 정리.</li>\n<li><strong>④ 형사 절차</strong> — 적발·조사·검찰 처분 흐름과 방어권 확인.</li>\n<li><strong>⑤ 방어 자료</strong> — 적발·측정 자료, 적용 법조 정리 등 방어 자료 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 형벌법규 자체의 변경으로 형이 가벼워진 경우 반성적 고려 여부를 따지지 않고 원칙적으로 경한 신법이 적용되는 영역이라, 행위 시점과 개정 시점, 적용 법조와 형의 경중을 자료로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사·행정 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·국선변호인 안내 절차와 행정심판 90일 별도 트랙입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 적발·측정 자료 확보 (즉시~당일)</strong> — 단속 경위서·음주측정 결과지, 운전 구간 CCTV·블랙박스 보존 요청.</li>\n<li><strong>2단계 — 법조·경중 정리 (수일 내)</strong> — 행위 시점과 개정 시점, 행위 당시 법과 개정 법의 적용 법조·형의 경중을 대조 정리.</li>\n<li><strong>3단계 — 경한 신법 적용 검토 (조사·재판 전)</strong> — 형이 가벼워진 개정 반영과 경한 신법 적용 가능성 점검.</li>\n<li><strong>4단계 — 조사·검찰 처분·재판 대응 (수사·재판 일정)</strong> — 진술·자료 정리 후 조사·재판 출석, 방어권·국선변호인 활용.</li>\n<li><strong>5단계 — 행정 대응 (처분 안 날부터 90일 이내)</strong> — 면허 정지·취소 처분 시 이의신청·행정심판·집행정지 별도 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">개인형 이동장치 음주 경한 신법 적용 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 적용 법조·형의 경중·적발·측정 갈래입니다.</strong></p>\n<ul>\n<li><strong>단속 경위서·적발 보고 자료 (행위 시점)</strong></li>\n<li><strong>음주측정 결과지·측정 시각 자료 (수치·시점)</strong></li>\n<li><strong>운전 구간 CCTV·블랙박스 영상 (운전 정황)</strong></li>\n<li><strong>행위 당시·개정 적용 법조 정리 자료 (경중 대조)</strong></li>\n<li><strong>공소장·적용 법조 자료 (적용 규정 확인)</strong></li>\n<li><strong>음주·운전 경위 기록 (정도 다툼)</strong></li>\n<li><strong>반성·정상·생계 등 정상 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 형벌법규 자체의 변경으로 형이 가벼워진 경우 반성적 고려 여부를 따지지 않고 원칙적으로 경한 신법이 적용되므로, 행위 시점과 개정 시점·적용 법조·형의 경중을 공소장·법조 정리 자료로 구체적으로 대조해두는 것이 핵심입니다. 운전 구간 CCTV·블랙박스는 덮어쓰기 전에 빨리 보존 요청을 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>적용 법조</strong> — 행위 당시 법과 개정 법 중 어떤 규정이 적용되는지.</li>\n<li><strong>경한 신법</strong> — 개정으로 형이 가벼워져 경한 신법이 적용되는지.</li>\n<li><strong>반성적 고려</strong> — 변경 이유를 따지지 않고 경한 신법이 적용되는지.</li>\n<li><strong>적발·측정</strong> — 적발 경위·측정 절차가 적법한지.</li>\n<li><strong>행정·형사 분리</strong> — 면허 처분과 형사 절차를 함께 다투는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112 · 경찰 민원 182</strong></li>\n<li><strong>도로교통공단 (운전면허·교통 안내)</strong></li>\n<li><strong>중앙행정심판위원회 (면허 처분 행정심판)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 경한 신법 적용과 형법 제1조 제2항',
        summary:
          '대법원 2022도6643(대법원, 2023.02.02 선고) 영역에서 법원은 형벌법규 자체의 변경에 따라 범죄를 구성하지 아니하게 되거나 형이 가벼워진 경우 종전 법령이 범죄로 정해 처벌한 것이 부당했다거나 과형이 과중했다는 반성적 고려에 따라 변경된 것인지를 따지지 않고 원칙적으로 형법 제1조 제2항과 형사소송법 제326조 제4호가 적용된다고 보아, 개인형 이동장치인 전동킥보드 음주운전에 관해 형이 가벼워진 법률 개정을 반영해 더 가벼운 신법을 적용한 원심을 수긍했습니다. 개인형 이동장치 음주 법 개정 사안에서도 행위·개정 시점과 적용 법조·형의 경중을 정리해 검토해볼 수 있습니다.',
        takeaway: '개인형 이동장치 + 음주운전 + 법령 개정 결합 시 경한 신법 적용 평가 검토 영역 — 단속 경위서·측정 결과지·공소장·적용 법조 정리 자료 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '행위 당시 무거운 법이 그대로 적용되나요?',
        answer:
          '<strong>개정으로 형이 가벼워졌다면 원칙적으로 경한 신법이 적용되는 영역입니다.</strong> 행위·개정 시점과 적용 법조부터 정리하세요.',
      },
      {
        question: '법이 바뀐 이유까지 따져야 하나요?',
        answer:
          '<strong>반성적 고려 여부를 따지지 않고 경한 신법이 적용되는 영역입니다.</strong> 공소장·적용 법조 자료를 확인하세요.',
      },
      {
        question: '적발·측정이 적법했는지는 따로 다투나요?',
        answer:
          '<strong>적용 법조와 별개로 적발·측정 절차도 점검하는 영역입니다.</strong> 단속 경위서·측정 결과지를 함께 정리하세요.',
      },
      {
        question: '면허 처분도 함께 받나요?',
        answer:
          '<strong>형사 절차와 별개로 면허 처분 행정 트랙이 진행되는 영역입니다.</strong> 처분을 안 날부터 90일 이내 행정심판을 검토하세요.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>적용 법조·형의 경중과 적발·측정 자료 정리가 출발점인 영역입니다.</strong> 공소장과 적용 법조 정리 자료부터 확보하세요.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: 'dui 도메인 허브', href: '/guide/dui' },
      { label: '주차장 짧은 거리 음주 트랙', href: '/guide/dui/dui-parking-lot-short-move-track' },
      { label: '면허 재취득 트랙', href: '/guide/dui/dui-license-reacquisition-track' },
      { label: '생계형 면허취소 구제 트랙', href: '/guide/dui/dui-hardship-license-relief-track' },
      { label: '대리기사 이탈 후 운전 트랙', href: '/guide/dui/dui-after-designated-driver-left-track' },
    ],
  },
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-no-rent-deposit-holdover-track',
    keyword: '무월차임 전세 보증금 미반환 점유',
    questionKeyword: '월세 없이 보증금만 맡긴 전세인데 임대차가 끝났는데도 임대인이 보증금을 돌려주지 않아 어쩔 수 없이 집을 비우지 못하고 계속 점유하고 있습니다. 임대인은 \'보증금도 안 주는데 계속 살았으니 차임 상당의 부당이득을 내라\'고 합니다. 무월차임 전세에서 만료 후 점유와 보증금 미반환을 어떻게 정리해 보증금을 회수하고 부당이득 주장을 다퉈볼 수 있는지 따져볼 수 있나요?',
    ctaKeyword: '무월차임 전세 만료 후 점유·보증금 회수 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '무월차임 전세 보증금 — 5단계 점유·부당이득 점검 | 로앤가이드',
      description:
        '월세 없는 전세가 끝났는데 보증금을 못 받아 집을 비우지 못하는데 임대인이 부당이득까지 요구해 막막하다면 주택임대차보호법 제4조·민법 보증금·점유 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"매달 내는 월세 없이 보증금만 맡긴 전세(무월차임 임대차)로 살고 있었는데, 임대차 기간이 끝났는데도 임대인이 보증금을 돌려주지 못해 어쩔 수 없이 이사를 가지 못하고 그 집을 계속 점유하며 머무르고 있는 임차인·피해자입니다. 보증금을 받기 전에는 집을 비우면 우선변제·대항력 같은 보호가 약해질까 걱정돼 점유를 유지하고 있는데, 임대인은 오히려 \'보증금도 못 주는 형편인데 그동안 집을 계속 쓰고 살았으니 그 사용에 대한 차임(임대료) 상당의 부당이득을 내놓으라\'며 도리어 돈을 요구합니다. 보증금을 돌려받지 못해 어쩔 수 없이 점유를 이어가는 것뿐인데, 실제로 거주·사용했다는 이유로 차임 상당의 부당이득을 물어줘야 하는지, 아니면 보증금을 다 돌려받을 때까지는 그런 부당이득이 성립하지 않는지부터 헷갈립니다. 보증금 반환과 점유·부당이득 주장을 어떤 순서로 정리해 보증금을 회수해야 하는지, 피해 상담과 분쟁조정을 어디서부터 시작해야 할지도 막막한 상태입니다." 주택임대차보호법 제4조 제2항은 임대차가 끝난 경우에도 보증금을 반환받을 때까지 임대차관계가 존속하는 것으로 본다고 정하고, 민법 제618조·제741조는 임대차와 부당이득을 정하는 영역입니다. 판례·실무는 임차보증금의 금융이익을 차임으로 이득할 것을 내용으로 하는 월차임 없는 임대차에서 기간 만료 후 임대인이 보증금을 반환하지 않은 상태에서 임차인이 목적물을 계속 사용·수익한 경우, 그 사용이익을 임차인이 부당이득했다고 볼 수 없다고 보는 본 사례 흐름이 있는 영역입니다. 무월차임 전세 + 만료 후 점유 + 보증금 미반환 결합은 \'점유·부당이득·보증금 회수 평가\' 검토가 가능한 트랙입니다. 피해자라면 ① 만료·반환 ② 점유 ③ 부당이득 ④ 보증금 회수 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 만료 ② 점유 ③ 부당이득 ④ 회수 ⑤ 대응 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 무월차임 전세 보증금 미반환 점유 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 만료·반환·점유·부당이득·보증금 회수·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 만료·반환</strong> — 임대차 만료 시점과 보증금 미반환 사실을 정리.</li>\n<li><strong>② 점유</strong> — 보증금을 못 받아 어쩔 수 없이 점유를 이어가는 경위를 정리.</li>\n<li><strong>③ 부당이득</strong> — 무월차임 전세에서 만료 후 사용이익이 부당이득에 해당하는지 정리.</li>\n<li><strong>④ 보증금 회수</strong> — 임차권등기·보증금반환소송 등 회수 경로 점검.</li>\n<li><strong>⑤ 대응</strong> — 피해 상담·분쟁조정 등 정리·대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 임차보증금의 금융이익을 차임으로 이득하는 무월차임 임대차에서 만료 후 임대인이 보증금을 반환하지 않은 상태로 임차인이 계속 사용·수익해도 그 사용이익을 부당이득했다고 보기 어려운 영역. 만료 시점·보증금 미반환·점유 경위를 자료로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보증금 정리 5단계',
        content:
          '<p><strong>A. 전세사기피해지원센터·HUG·분쟁조정·임차권등기 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 만료·반환 정리 (즉시~수일)</strong> — 계약서·확정일자·만료일과 보증금 미반환·내용증명 발송 경과를 시간순 정리.</li>\n<li><strong>2단계 — 점유·부당이득 확인 (수일 내)</strong> — 보증금 미반환으로 인한 점유 경위와 임대인의 차임 상당 부당이득 주장 근거를 확인.</li>\n<li><strong>3단계 — 권리 보전 검토 (필요 시)</strong> — 이사가 필요하면 임차권등기명령으로 대항력·우선변제권 보전 검토.</li>\n<li><strong>4단계 — 피해 상담·조정 (필요 시)</strong> — 전세사기피해지원센터 상담, 주임분조위 분쟁조정 신청 검토.</li>\n<li><strong>5단계 — 회수·대응 (병행)</strong> — 보증금반환소송·임대인 책임 등 회수 경로 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">무월차임 전세 만료 후 점유·보증금 회수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 만료·반환·점유·부당이득 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서·확정일자 자료 (무월차임·만료일 확인)</strong></li>\n<li><strong>전입세대확인서·주민등록 자료 (대항요건·점유)</strong></li>\n<li><strong>보증금 미반환·내용증명 발송 자료 (반환 청구 경과)</strong></li>\n<li><strong>임대인 부당이득 주장·요구 자료 (주장 근거)</strong></li>\n<li><strong>점유·거주 경위 기록 (어쩔 수 없는 점유)</strong></li>\n<li><strong>임차권등기명령·신청 자료 (권리 보전)</strong></li>\n<li><strong>전세사기 피해자 결정 신청·임대인 책임 자료 (회수 경로)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 무월차임 임대차에서 만료 후 임대인이 보증금을 반환하지 않은 상태로 임차인이 계속 사용·수익해도 그 사용이익을 부당이득했다고 보기 어려우므로, 만료 시점·보증금 미반환·내용증명 경과와 점유 경위를 시간순으로 정리해두는 것이 핵심입니다. 이사가 필요하면 임차권등기명령으로 대항력·우선변제권을 보전해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>부당이득 성립</strong> — 만료 후 점유·사용이익이 부당이득에 해당하는지.</li>\n<li><strong>무월차임 성격</strong> — 보증금 금융이익을 차임으로 이득하는 구조인지.</li>\n<li><strong>점유 정당성</strong> — 보증금 미반환으로 인한 점유가 정당한지.</li>\n<li><strong>권리 보전</strong> — 이사 시 임차권등기로 권리를 보전하는지.</li>\n<li><strong>회수 경로</strong> — 보증금반환소송·피해자 지원 등으로 회수할 경로.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>전세사기피해지원센터 1533-8119 (전세피해 상담·결정 신청)</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009 (전세보증·이행 안내)</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (보증금 분쟁조정)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 무월차임 임대차 만료 후 사용이익과 부당이득',
        summary:
          '대법원 2024다227606(대법원, 2025.08.14 선고) 영역에서 법원은 임차보증금의 금융이익을 차임으로 이득할 것을 내용으로 하는 월차임 없는 임대차계약에서 임대차기간이 만료된 후 임대인이 임차보증금을 반환하지 않은 상태에서 임차인이 임차목적물을 계속 사용·수익한 경우, 그 사용이익을 임차인이 부당이득하였다고 볼 수 없다고 판시했습니다. 무월차임 전세 보증금 미반환 점유 사안에서도 만료 시점·보증금 미반환·점유 경위를 정리해 검토해볼 수 있습니다.',
        takeaway: '무월차임 전세 + 만료 후 점유 + 보증금 미반환 결합 시 점유·부당이득·보증금 회수 평가 검토 영역 — 계약서·확정일자·내용증명·점유 경위·임차권등기 자료 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '보증금을 못 받아 계속 살면 부당이득을 내야 하나요?',
        answer:
          '<strong>무월차임 임대차에서는 만료 후 사용이익을 부당이득으로 보기 어려운 영역입니다.</strong> 만료 시점·보증금 미반환 경과부터 정리하세요.',
      },
      {
        question: '임대인이 차임 상당을 내라고 하면 어떻게 하나요?',
        answer:
          '<strong>무월차임 구조에서는 그 주장이 인정되기 어려운 영역입니다.</strong> 무월차임 계약서·금융이익 구조 자료를 확인하세요.',
      },
      {
        question: '이사를 가야 하는데 점유를 풀어도 되나요?',
        answer:
          '<strong>임차권등기명령으로 대항력·우선변제권을 보전할 수 있는 영역입니다.</strong> 임차권등기 신청을 먼저 검토하세요.',
      },
      {
        question: '보증금은 어떤 경로로 회수하나요?',
        answer:
          '<strong>내용증명·보증금반환소송 등으로 회수를 검토하는 영역입니다.</strong> 반환 청구 경과를 정리하세요.',
      },
      {
        question: '전세사기 피해자 지원도 받을 수 있나요?',
        answer:
          '<strong>피해자 결정·지원 요건 해당 여부를 살피는 영역입니다.</strong> 전세사기피해지원센터 상담을 검토하세요.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: 'jeonse-fraud 도메인 허브', href: '/guide/jeonse-fraud' },
      { label: '보증금 미반환 대응', href: '/guide/jeonse-fraud/jeonse-deposit-not-returned-response' },
      { label: '이중계약 전세사기 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-dual-contract-track' },
      { label: '오피스텔 전세사기 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-officetel-deposit-track' },
      { label: '경매 우선변제 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-auction-priority-repayment' },
    ],
  },
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-inherited-landlord-deposit-track',
    keyword: '임대인 사망 상속 보증금 반환',
    questionKeyword: '전세로 살던 집의 임대인이 사망하면서 상속인이 여럿 생겼는데, 임대차가 끝났는데도 상속인들이 서로 미루며 보증금을 돌려주지 않습니다. 저는 인도·전입신고·확정일자를 갖췄는데, 상속인 중 누구에게 보증금을 청구해야 하는지, 상속받은 사람이 임대인 지위를 이어받는지 막막합니다. 임대인 사망·상속 상황에서 보증금 반환 책임을 어떻게 정리해 회수할 수 있는지 따져볼 수 있나요?',
    ctaKeyword: '임대인 사망 상속 보증금 반환 책임 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '임대인 사망 상속 보증금 — 5단계 승계 점검 | 로앤가이드',
      description:
        '전세 임대인이 사망해 상속인들이 보증금 반환을 서로 미뤄 막막하다면 주택임대차보호법 제3조와 상속 임대인 지위 승계 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"전세로 들어가 살던 집의 임대인이 사망하면서 배우자·자녀 등 상속인이 여럿 생겼는데, 임대차 기간이 끝났는데도 상속인들이 \'나는 그 집을 안 받았다\', \'다른 형제가 정리할 일\'이라며 서로 책임을 미뤄 보증금을 돌려받지 못하고 있는 임차인·피해자입니다. 저는 주택의 인도와 전입신고를 마치고 확정일자도 받아 대항력과 우선변제권을 갖춰 두었는데, 임대인이 사망한 뒤 그 집을 누가 상속받았는지, 보증금 반환 책임은 상속인 전원에게 있는지 아니면 그 집을 단독으로 물려받은 사람에게만 있는지, 누구에게 얼마를 청구해야 하는지부터 헷갈립니다. 상속으로 임차주택의 소유권을 취득한 사람이 임대인 지위를 그대로 이어받는지, 상속재산분할이 끝나지 않았거나 일부만 끝난 경우 보증금 반환채무는 어떻게 나뉘는지도 막막합니다. 임대인 사망·상속 상황에서 보증금 반환 책임과 임대인 지위 승계를 어떤 순서로 정리해 회수해야 하는지, 피해 상담과 분쟁조정을 어디서부터 시작해야 할지 막막한 상태입니다." 주택임대차보호법 제3조 제1항은 주택의 인도와 주민등록으로 대항력이 생긴다고, 같은 조 제4항은 임차주택의 양수인이 임대인 지위를 승계한 것으로 본다고 정하고, 민법 제1006조·제1007조는 공동상속과 상속분을 정하는 영역입니다. 판례·실무는 상속에 따라 임차건물의 소유권을 취득한 자도 임차건물의 양수인에 해당해 임대인 지위를 승계하고, 임대인 지위를 공동으로 승계한 공동임대인들의 임차보증금 반환채무는 성질상 불가분채무에 해당하며, 단독상속·대상분할 등 분할 방법에 따라 채무 인수와 내부 부담·구상관계가 달라질 수 있다고 보는 본 사례 흐름이 있는 영역입니다. 임대인 사망 + 상속·분할 + 보증금 미반환 결합은 \'임대인 지위 승계·반환 책임 평가\' 검토가 가능한 트랙입니다. 피해자라면 ① 상속·소유 ② 지위 승계 ③ 반환 책임 ④ 보증금 회수 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 상속 ② 승계 ③ 책임 ④ 회수 ⑤ 대응 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 임대인 사망 상속 보증금 반환 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 상속·소유·지위 승계·반환 책임·보증금 회수·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 상속·소유</strong> — 임대인 사망 후 임차주택을 누가 상속·취득했는지 정리.</li>\n<li><strong>② 지위 승계</strong> — 상속인이 임차주택 양수인으로서 임대인 지위를 승계하는지 정리.</li>\n<li><strong>③ 반환 책임</strong> — 보증금 반환채무가 공동상속인 불가분채무인지, 분할 방법으로 달라지는지 정리.</li>\n<li><strong>④ 보증금 회수</strong> — 누구에게 얼마를 청구해 회수할지 경로 점검.</li>\n<li><strong>⑤ 대응</strong> — 피해 상담·분쟁조정 등 정리·대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 상속으로 임차주택을 취득한 자도 양수인으로서 임대인 지위를 승계하고 공동승계한 보증금 반환채무는 성질상 불가분채무여서 분할 방법에 따라 책임·구상관계가 달라지는 영역. 상속·소유 관계와 대항요건·반환 청구 경과를 자료로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보증금 정리 5단계',
        content:
          '<p><strong>A. 전세사기피해지원센터·HUG·분쟁조정·임차권등기 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·상속 정리 (즉시~수일)</strong> — 계약서·확정일자·전입세대확인서와 임대인 사망·상속 사실을 시간순 정리.</li>\n<li><strong>2단계 — 소유·승계 확인 (수일 내)</strong> — 등기부등본·가족관계·상속 자료로 임차주택을 누가 취득했는지와 임대인 지위 승계를 확인.</li>\n<li><strong>3단계 — 반환 책임 검토 (필요 시)</strong> — 공동상속인 불가분채무 여부와 분할 방법에 따른 청구 상대·금액 검토.</li>\n<li><strong>4단계 — 피해 상담·조정 (필요 시)</strong> — 전세사기피해지원센터 상담, 주임분조위 분쟁조정 신청 검토.</li>\n<li><strong>5단계 — 회수·대응 (병행)</strong> — 임차권등기명령·보증금반환소송·상속인 청구 등 회수 경로 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">임대인 사망 상속 보증금 반환 책임 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 상속·소유·지위 승계·반환 책임 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세계약서·확정일자 자료 (우선변제권 확인)</strong></li>\n<li><strong>전입세대확인서·주민등록 자료 (대항요건 경과)</strong></li>\n<li><strong>임대인 사망·가족관계·상속 자료 (상속인 확인)</strong></li>\n<li><strong>등기부등본·소유권 변동 자료 (취득자·승계 확인)</strong></li>\n<li><strong>상속재산분할·협의 자료 (분할 방법·채무 인수)</strong></li>\n<li><strong>보증금 미반환·내용증명 자료 (반환 청구 경과)</strong></li>\n<li><strong>임차권등기명령·전세사기 피해자 결정 신청 자료 (회수 경로)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상속으로 임차주택을 취득한 자도 양수인으로서 임대인 지위를 승계하고 공동승계한 보증금 반환채무는 불가분채무여서 분할 방법에 따라 책임·구상관계가 달라지므로, 등기부·가족관계·상속재산분할 자료로 취득자와 승계 관계를 정리하고 대항요건·반환 청구 경과를 시간순으로 정리해두는 것이 핵심입니다. 이사가 필요하면 임차권등기명령으로 권리를 보전해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>지위 승계</strong> — 상속인이 임차주택 양수인으로서 임대인 지위를 승계하는지.</li>\n<li><strong>청구 상대</strong> — 상속인 전원인지 단독 취득자인지.</li>\n<li><strong>불가분채무</strong> — 보증금 반환채무가 공동상속인 불가분채무인지.</li>\n<li><strong>분할 방법</strong> — 단독상속·대상분할 등으로 책임이 달라지는지.</li>\n<li><strong>회수 경로</strong> — 보증금반환소송·피해자 지원 등으로 회수할 경로.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>전세사기피해지원센터 1533-8119 (전세피해 상담·결정 신청)</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009 (전세보증·이행 안내)</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (보증금 분쟁조정)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상속에 따른 임대인 지위 승계와 불가분채무',
        summary:
          '대법원 2023다318857(대법원, 2024.08.01 선고) 영역에서 법원은 상속에 따라 임차건물의 소유권을 취득한 자도 상가건물 임대차보호법 제3조 제2항이 말하는 임차건물의 양수인에 해당해 임대인 지위를 승계하고, 임대인 지위를 공동으로 승계한 공동임대인들의 임차보증금 반환채무는 성질상 불가분채무에 해당하며, 대상분할 등 분할 방법에 따라 채무의 면책적 인수와 공동상속인 사이의 내부 부담·구상관계가 정해진다는 취지로 판시했습니다. 임대인 사망 상속 보증금 반환 사안에서도 취득자·승계 관계와 반환 책임을 정리해 검토해볼 수 있습니다.',
        takeaway: '임대인 사망 + 상속·분할 + 보증금 미반환 결합 시 임대인 지위 승계·반환 책임 평가 검토 영역 — 계약서·확정일자·전입·상속·등기부·분할 자료 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '임대인이 사망하면 보증금은 누구에게 청구하나요?',
        answer:
          '<strong>임차주택을 상속·취득한 자가 임대인 지위를 승계하는 영역입니다.</strong> 등기부·상속 자료로 취득자부터 확인하세요.',
      },
      {
        question: '상속인 전원에게 청구해야 하나요?',
        answer:
          '<strong>공동승계 시 보증금 반환채무는 불가분채무로 다뤄지는 영역입니다.</strong> 상속·분할 자료로 청구 상대를 정리하세요.',
      },
      {
        question: '집을 단독으로 물려받은 사람만 책임지나요?',
        answer:
          '<strong>분할 방법에 따라 채무 인수와 내부 부담이 달라지는 영역입니다.</strong> 상속재산분할 자료를 확인하세요.',
      },
      {
        question: '상속이 정리되지 않으면 어떻게 하나요?',
        answer:
          '<strong>대항요건이 존속하는 한 권리 보전이 가능한 영역입니다.</strong> 임차권등기명령을 먼저 검토하세요.',
      },
      {
        question: '전세사기 피해자 지원도 받을 수 있나요?',
        answer:
          '<strong>피해자 결정·지원 요건 해당 여부를 살피는 영역입니다.</strong> 전세사기피해지원센터 상담을 검토하세요.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: 'jeonse-fraud 도메인 허브', href: '/guide/jeonse-fraud' },
      { label: '보증금 미반환 대응', href: '/guide/jeonse-fraud/jeonse-deposit-not-returned-response' },
      { label: '이중계약 전세사기 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-dual-contract-track' },
      { label: '오피스텔 전세사기 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-officetel-deposit-track' },
      { label: '경매 우선변제 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-auction-priority-repayment' },
    ],
  },
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-corporate-tenant-opposing-power-track',
    keyword: '법인 임차 직원 거주 대항력',
    questionKeyword: '회사(중소기업) 이름으로 사택용 주택을 전세로 빌려 제가 직원으로 입주해 살았는데, 임대인이 보증금을 못 돌려주고 집이 경매로 넘어갈 것 같습니다. 법인이 임차인이고 직원인 제가 거주·주민등록만 한 경우에도 대항력이 인정되는지, 어떤 직원이어야 보호받는지 막막합니다. 법인 임차·직원 거주 상황에서 대항력과 보증금 회수를 어떻게 정리할 수 있는지 따져볼 수 있나요?',
    ctaKeyword: '법인 임차 직원 거주 대항력 보증금 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '법인 임차 직원 거주 대항력 — 5단계 보증금 점검 | 로앤가이드',
      description:
        '회사 명의 사택 전세가 경매로 넘어가는데 법인 임차·직원 거주라 대항력이 될지 막막하다면 주택임대차보호법 제3조 법인 임차인 대항력 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"중소기업인 회사가 사택·직원 주거용으로 주택을 전세로 빌리고, 그 직원인 제가 회사가 선정한 입주자로 그 집에 들어가 거주하며 주민등록(전입신고)을 마치고 살아온 임차인 측·피해자입니다. 그런데 임대인이 보증금을 돌려줄 형편이 안 되고 그 집이 경매로 넘어갈 가능성이 큰 상황에 놓였습니다. 임대차계약의 명의는 회사(법인)로 되어 있고 실제 거주·주민등록은 직원인 제가 한 구조라, 법인이 임차인인 경우에도 대항력과 우선변제권으로 보증금을 보호받을 수 있는지부터 헷갈립니다. 또 회사의 어떤 직원이 거주·주민등록을 해야 보호되는지, 대표이사·사내이사 같은 임원이 거주한 경우에는 보호 범위가 달라지는지, 임대료 액수나 업무 관련성 같은 다른 사정까지 따져야 하는지도 막막합니다. 경매 절차에서 법인 임차인으로서 대항력·우선변제권으로 보증금을 얼마나 회수할 수 있는지, 대항력과 보증금 회수를 어떤 순서로 정리해야 하는지, 피해 상담과 분쟁조정을 어디서부터 시작해야 할지 막막한 상태입니다." 주택임대차보호법 제3조 제3항은 중소기업기본법상 중소기업 법인이 직원 주거용으로 주택을 임차하고 그 법인이 선정한 직원이 주택을 인도받아 주민등록을 마치면 그다음 날부터 대항력이 생긴다고, 같은 법 제3조의2는 우선변제권을 정하는 영역입니다. 판례·실무는 그 직원이 주식회사라면 법인등기사항증명서에 대표이사 또는 사내이사로 등기된 사람을 제외한 사람을 의미하고, 그 범위의 임원을 제외한 직원이 주택을 인도받아 주민등록을 마치고 거주하면 대항력을 갖춘 것으로 보아야 하며, 그 밖에 업무관련성·임대료 액수·지리적 근접성 등 다른 사정을 고려해 요건 충족을 판단할 것은 아니라고 보는 본 사례 흐름이 있는 영역입니다. 법인 임차 + 직원 거주·주민등록 + 경매·배당 결합은 \'법인 임차인 대항력·우선변제권 평가\' 검토가 가능한 트랙입니다. 피해자라면 ① 법인·직원 요건 ② 대항요건 ③ 우선변제권 ④ 배당·회수 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 요건 ② 대항 ③ 우선변제 ④ 배당 ⑤ 대응 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 법인 임차 직원 거주 대항력 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 법인·직원 요건·대항요건·우선변제권·배당·회수·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 법인·직원 요건</strong> — 중소기업 법인이 직원 주거용으로 임차하고 선정한 직원이 거주·주민등록했는지 정리.</li>\n<li><strong>② 대항요건</strong> — 임원을 제외한 직원의 인도·주민등록으로 대항력이 생겼는지 정리.</li>\n<li><strong>③ 우선변제권</strong> — 확정일자로 우선변제 순위가 확보됐는지 정리.</li>\n<li><strong>④ 배당·회수</strong> — 선순위 규모와 경매 배당에서 회수 가능 금액 정리.</li>\n<li><strong>⑤ 대응</strong> — 피해 상담·분쟁조정 등 정리·대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 중소기업 법인이 직원 주거용으로 임차하고 대표이사·사내이사 등기 임원을 제외한 직원이 인도받아 주민등록·거주하면 대항력을 갖춘 것으로 보고 업무관련성·임대료 등 다른 사정으로 요건을 따질 것은 아닌 영역. 법인·직원 요건과 대항요건·확정일자 경과를 자료로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보증금 정리 5단계',
        content:
          '<p><strong>A. 전세사기피해지원센터·HUG·분쟁조정·임차권등기 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·요건 정리 (즉시~수일)</strong> — 법인 명의 계약서·확정일자·전입세대확인서와 직원 거주·주민등록 경과를 시간순 정리.</li>\n<li><strong>2단계 — 법인·직원 확인 (수일 내)</strong> — 중소기업 해당·법인 선정 직원 여부와 대표이사·사내이사 등기 제외 직원인지 확인.</li>\n<li><strong>3단계 — 대항력·우선변제 검토 (필요 시)</strong> — 대항요건 존속과 우선변제 순위로 회수 가능액 검토.</li>\n<li><strong>4단계 — 피해 상담·조정 (필요 시)</strong> — 전세사기피해지원센터 상담, 주임분조위 분쟁조정 신청 검토.</li>\n<li><strong>5단계 — 회수·대응 (병행)</strong> — 배당요구·임차권등기·임대인 책임 등 회수 경로 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">법인 임차 직원 거주 대항력 보증금 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 법인·직원 요건·대항요건·우선변제권·배당 갈래입니다.</strong></p>\n<ul>\n<li><strong>법인 명의 전세계약서·확정일자 자료 (우선변제권 확인)</strong></li>\n<li><strong>전입세대확인서·주민등록 자료 (직원 거주·대항요건)</strong></li>\n<li><strong>중소기업 확인·법인등기사항증명서 (중소기업·임원 제외 확인)</strong></li>\n<li><strong>직원 선정·재직·사택 운영 자료 (선정 직원 입증)</strong></li>\n<li><strong>등기부등본·선순위 권리 자료 (배당 회수액)</strong></li>\n<li><strong>경매·배당요구·배당표 자료 (회수 가능액)</strong></li>\n<li><strong>임차권등기명령·전세사기 피해자 결정 신청 자료 (회수 경로)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 중소기업 법인이 직원 주거용으로 임차하고 대표이사·사내이사 등기 임원을 제외한 직원이 인도받아 주민등록·거주하면 대항력을 갖춘 것으로 보고 업무관련성·임대료 등 다른 사정으로 요건을 따질 것은 아니므로, 중소기업 확인·법인등기·직원 선정 자료와 대항요건·확정일자 경과를 시간순으로 정리해두는 것이 핵심입니다. 등기부등본으로 선순위 규모를 확인해 배당 회수액을 가늠해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>법인 대항력</strong> — 중소기업 법인 임차인도 대항력을 인정받는지.</li>\n<li><strong>직원 범위</strong> — 등기 임원을 제외한 선정 직원이 거주·주민등록했는지.</li>\n<li><strong>다른 사정</strong> — 업무관련성·임대료 등을 따로 따져야 하는지.</li>\n<li><strong>배당 부족</strong> — 선순위 때문에 배당에서 부족분이 생기는지.</li>\n<li><strong>회수 경로</strong> — 배당·피해자 지원 등으로 회수할 경로.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>전세사기피해지원센터 1533-8119 (전세피해 상담·결정 신청)</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009 (전세보증·이행 안내)</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (보증금 분쟁조정)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 중소기업 법인 임차인의 대항력과 직원의 범위',
        summary:
          '대법원 2023다226866(대법원, 2023.12.14 선고) 영역에서 법원은 주택임대차보호법 제3조 제3항에 따라 법인인 임차인이 보호받으려면 법인의 직원인 사람이 임차한 주택을 인도받고 주민등록을 마쳐야 하고, 여기서 직원은 법인이 주식회사라면 법인등기사항증명서에 대표이사 또는 사내이사로 등기된 사람을 제외한 사람을 의미하며, 그 임원을 제외한 직원이 주택을 인도받아 주민등록을 마치고 거주하면 대항력을 갖춘 것으로 보아야 하고 업무관련성·임대료 액수·지리적 근접성 등 다른 사정으로 요건 충족을 판단할 것은 아니라고 판시했습니다. 법인 임차 직원 거주 대항력 사안에서도 법인·직원 요건과 대항요건·우선변제권을 정리해 검토해볼 수 있습니다.',
        takeaway: '법인 임차 + 직원 거주·주민등록 + 경매·배당 결합 시 법인 임차인 대항력·우선변제권 평가 검토 영역 — 법인 계약서·확정일자·전입·중소기업 확인·법인등기·직원 선정·배당표 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '회사 명의 전세인데 직원인 제가 살아도 대항력이 되나요?',
        answer:
          '<strong>중소기업 법인이 직원 주거용으로 임차하고 선정 직원이 거주·주민등록하면 인정되는 영역입니다.</strong> 법인 계약·직원 선정 자료부터 정리하세요.',
      },
      {
        question: '어떤 직원이어야 보호받나요?',
        answer:
          '<strong>대표이사·사내이사 등기 임원을 제외한 직원이어야 하는 영역입니다.</strong> 법인등기·재직 자료를 확인하세요.',
      },
      {
        question: '업무관련성·임대료까지 따져야 하나요?',
        answer:
          '<strong>그런 다른 사정으로 요건을 따로 따질 것은 아닌 영역입니다.</strong> 인도·주민등록 경과를 정리하세요.',
      },
      {
        question: '경매로 넘어가면 보증금을 얼마나 받나요?',
        answer:
          '<strong>선순위 규모와 배당 순위에 따라 회수액이 달라지는 영역입니다.</strong> 등기부로 선순위 규모부터 확인하세요.',
      },
      {
        question: '전세사기 피해자 지원도 받을 수 있나요?',
        answer:
          '<strong>피해자 결정·지원 요건 해당 여부를 살피는 영역입니다.</strong> 전세사기피해지원센터 상담을 검토하세요.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: 'jeonse-fraud 도메인 허브', href: '/guide/jeonse-fraud' },
      { label: '보증금 미반환 대응', href: '/guide/jeonse-fraud/jeonse-deposit-not-returned-response' },
      { label: '이중계약 전세사기 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-dual-contract-track' },
      { label: '오피스텔 전세사기 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-officetel-deposit-track' },
      { label: '경매 우선변제 트랙', href: '/guide/jeonse-fraud/jeonse-fraud-auction-priority-repayment' },
    ],
  },
];
