import { SpokePage } from '../spoke-pages';

// batch92 assault(4) + dui(3) + jeonse-fraud(3) — 10개 (2026-06-09)
//
// 고유 존재 이유:
// 1. assault-open-business-premises-entry-quarrel-track — 일반 개방 매장 안 시비 폭행에서 출입 자체가 주거·건조물 침입으로 평가되는지와 폭행 정도를 다투는 피해자 판단형 트랙. 개방 장소 출입 평가·침입 경계가 핵심.
// 2. assault-apartment-hallway-common-area-shove-track — 아파트 복도·공용부 밀침 폭행에서 공용 부분이 보호 대상이 되는지와 밀침 유형력을 다투는 피해자 판단형 트랙. 공용부분 보호·유형력이 핵심.
// 3. assault-victim-statement-petition-credibility-track — 폭행 피해자 진술·탄원서의 증거 사용 범위와 신빙성을 다투는 피해자 절차형 트랙. 진술·서면 증거 한계·신빙성이 핵심.
// 4. assault-detained-defendant-counsel-falsely-accused-defense — 사실과 다르게 폭행으로 신고돼 입건된 피고인의 방어권·국선변호인 보장을 다투는 accused 절차형 트랙. 필요적 국선·방어권 보장이 핵심.
// 5. dui-refusal-prior-record-unconstitutional-aggravation-track — 음주측정거부 전력 가중조항이 위헌으로 효력을 잃은 경우 적용 법조를 다투는 accused 판단형 트랙. 위헌 가중조항 소급실효·적용 법조가 핵심.
// 6. dui-license-revocation-acquittal-no-unlicensed-track — 면허취소 원인이 무죄로 확정된 뒤 운전이 무면허로 평가되는지 다투는 accused 판단형 트랙. 취소처분 효력·무면허 성립이 핵심.
// 7. dui-alcohol-dependency-treatment-custody-track — 반복 음주운전에서 알코올 의존·치료감호 필요성과 재범 위험을 다투는 accused 절차형 트랙. 치료감호 재량·재범 위험 평가가 핵심.
// 8. jeonse-fraud-corporate-lease-employee-opposing-power-track — 법인이 임차한 주택에 직원이 거주할 때 대항력 인정을 다투는 피해자 판단형 트랙. 법인 임차·직원 거주 대항력이 핵심.
// 9. jeonse-fraud-trust-property-broker-explanation-duty-track — 신탁부동산 전세에서 중개사의 신탁관계 설명의무 위반 책임을 다투는 피해자 판단형 트랙. 신탁원부 제시·설명의무가 핵심.
// 10. jeonse-fraud-broker-assistant-officetel-employer-liability-track — 중개보조원 보증금 횡령에서 공인중개사의 사용자책임을 다투는 피해자 절차형 트랙. 사용관계·지휘감독·사용자책임이 핵심.

export const spokesBatch92AssaultDuiJeonseFraud: SpokePage[] = [
  // ─── 1. assault-open-business-premises-entry-quarrel-track ───
  {
    domain: 'assault',
    slug: 'assault-open-business-premises-entry-quarrel-track',
    keyword: '개방 매장 시비 폭행',
    questionKeyword: '영업시간 중 누구나 드나드는 가게 안에서 상대와 시비가 붙어 멱살을 잡히고 맞았어요. 상대는 \'나는 손님으로 들어간 것뿐\'이라며 폭행은 물론 들어온 것 자체도 문제없다고 우깁니다. 개방된 매장 출입과 그 안에서의 폭행을 어디부터 정리해야 하는지 막막합니다.',
    ctaKeyword: '개방 매장 시비 폭행 출입·폭행 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '개방 매장 시비 폭행 — 5단계 출입·폭행 점검 | 로앤가이드',
      description:
        '누구나 드나드는 가게 안에서 시비로 맞았는데 손님으로 들어간 것뿐이라고 우긴다면 형법 제260조 폭행과 개방 장소 출입 평가 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"영업시간 중 출입 제한 없이 누구나 드나들 수 있는 가게·매장 안에서 상대와 자리·순서·시비가 붙었는데, 감정이 격해진 상대가 제 멱살을 잡고 밀치거나 때려 다친 피해자입니다. 상대는 \'나는 정상적으로 영업 중인 가게에 손님으로 들어간 것뿐이고, 들어온 것 자체가 무슨 문제냐\'며 발뺌하는데, 한편으로는 그 사람이 사실은 출입을 거절당했거나 행패를 부리려고 들어온 것이라 출입 자체도 다툴 수 있는지, 그 안에서 벌어진 멱살·구타가 폭행으로 평가되는지 헷갈립니다. 누구나 드나드는 개방된 장소라는 점 때문에 출입과 폭행을 어떻게 나눠 정리해야 하는지, 어디부터 신고·고소를 준비해야 하는지 막막한 상태입니다." 형법 제260조 제1항은 사람의 신체에 폭행한 자를, 같은 법 제257조 제1항은 상해한 자를, 제319조 제1항은 사람의 주거·관리하는 건조물 등에 침입한 자를 처벌하도록 규정하는 영역입니다. 판례·실무는 주거·건조물 침입죄의 \'침입\'은 사실상의 평온상태를 해치는 행위 태양으로 들어가는 것을 의미하고 출입 당시 객관적·외형적으로 드러난 행위 태양을 기준으로 판단하므로, 영업시간 중 출입자격 제한 없이 일반적으로 개방된 장소에 통상적인 방법으로 들어간 경우라면 관리자의 명시적 출입금지 의사·조치가 없었던 이상 결과적으로 추정적 의사에 반했다는 사정만으로 곧바로 침입으로 평가하기는 어렵다고 보는 본 사례 흐름이 있는 영역입니다. 개방 매장 + 시비 + 멱살·구타 결합은 \'출입 평가·폭행 평가\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 출입 평가 ② 폭행 정도 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 출입 ② 폭행 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 개방 매장 시비 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 출입 평가·폭행 정도·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 출입 평가</strong> — 개방 장소에 통상적 방법으로 들어왔는지, 출입금지 의사·행패 정황이 있었는지 정리.</li>\n<li><strong>② 폭행 정도</strong> — 멱살·구타 등 신체에 대한 유형력 행사와 상해 정도 정리.</li>\n<li><strong>③ 고소</strong> — 폭행(형법 제260조)·상해(제257조), 필요 시 건조물침입(제319조) 고소 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 일반적으로 개방된 장소에 통상적 방법으로 들어간 출입 자체는 명시적 출입금지 의사·조치가 없는 한 침입으로 보기 어려운 영역이라, 다툼의 중심은 그 안에서의 멱살·구타가 폭행으로 평가되는지에 있는 경우가 많은 영역. 매장 CCTV로 출입·시비·폭행 흐름을 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 영상·진단 확보 (즉시~당일)</strong> — 매장 CCTV·휴대폰 영상, 병원 진료·상해진단서와 부상 사진 확보.</li>\n<li><strong>2단계 — 출입·폭행 정리 (수일 내)</strong> — 출입 경위·출입금지 의사 유무와 멱살·구타 정황 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출, 시비 경위 첨부.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 진술·CCTV·진단서 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">개방 매장 시비 폭행 출입·폭행 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 출입 평가·폭행 정도·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>매장 CCTV 영상 (출입·시비·구타 정황)</strong></li>\n<li><strong>휴대폰 촬영 영상·녹취 (시비·폭언)</strong></li>\n<li><strong>상해진단서·진료기록 (부위·치유기간)</strong></li>\n<li><strong>다친 부위·기물 손상 사진 (시간정보 포함)</strong></li>\n<li><strong>출입 경위·출입금지 의사 기록 (육하원칙)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>업주·종업원·목격자 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 영업시간 중 누구나 드나드는 장소에 통상적 방법으로 들어온 출입 자체는 명시적 출입금지 의사·조치가 없는 한 침입으로 평가되기 어려우므로, 출입금지 의사가 있었는지와 그 안에서의 멱살·구타 정황을 매장 CCTV·영상으로 구분해 정리해두는 것이 핵심입니다. 매장 CCTV는 보관 기간이 짧을 수 있어 업주에게 보존 요청을 먼저 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>출입 평가</strong> — 개방 장소에 통상적 방법으로 들어온 것이 침입인지.</li>\n<li><strong>출입금지 의사</strong> — 명시적 출입금지 의사·조치가 있었는지.</li>\n<li><strong>폭행 유형력</strong> — 멱살·구타가 폭행으로 인정되는지.</li>\n<li><strong>쌍방 여부</strong> — 시비가 쌍방 폭행으로 몰리는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 개방된 장소 출입과 주거·건조물 침입의 판단기준',
        summary:
          '대법원 2022도15955(대법원, 2024.01.04 선고) 영역에서 법원은 주거침입죄의 구성요건적 행위인 \'침입\'은 사실상의 평온상태를 해치는 행위 태양으로 주거에 들어가는 것을 의미하고 침입에 해당하는지는 출입 당시 객관적·외형적으로 드러난 행위 태양을 기준으로 판단함이 원칙이며, 단순히 들어가는 행위가 거주자의 의사에 반한다는 주관적 사정만으로는 침입이라고 볼 수 없고, 업무시간 중 출입자격 등의 제한 없이 일반적으로 개방되어 있는 장소에 들어간 경우 관리자의 명시적 출입금지 의사 및 조치가 없었던 이상 그 출입행위가 결과적으로 관리자의 추정적 의사에 반하였다는 사정만으로는 사실상의 평온상태를 해치는 행위 태양으로 출입하였다고 평가할 수 없다고 판시했습니다. 개방 매장 시비 폭행 사안에서도 출입 자체의 평가와 그 안에서의 폭행을 구분해 검토해볼 수 있습니다.',
        takeaway: '개방 매장 + 시비 + 멱살·구타 결합 시 출입 평가·폭행 평가 검토 영역 — CCTV·진단서·출입 경위·시비 경위 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '손님으로 들어왔으니 출입은 문제없다는데 맞나요?',
        answer:
          '<strong>개방 장소에 통상적 방법으로 들어온 출입은 침입으로 보기 어려울 여지가 있는 영역입니다.</strong> 다툼의 중심은 안에서의 폭행으로 정리.',
      },
      {
        question: '출입금지 의사가 있었으면 달라지나요?',
        answer:
          '<strong>명시적 출입금지 의사·조치가 있었는지가 출입 평가의 쟁점이 되는 영역입니다.</strong> 출입금지 경위를 CCTV로 확보.',
      },
      {
        question: '멱살 잡고 민 것도 폭행으로 다투나요?',
        answer:
          '<strong>신체에 대한 유형력 행사면 멱살·밀침도 폭행으로 평가될 여지가 있는 영역입니다.</strong> 구타 정황을 영상으로 정리.',
      },
      {
        question: '매장 CCTV가 꼭 필요한가요?',
        answer:
          '<strong>출입·시비·폭행 흐름을 보여줄 수 있는 핵심 자료가 되는 영역입니다.</strong> 보관 기간이 짧아 업주에게 보존 요청.',
      },
      {
        question: '시비라며 쌍방으로 몰리면 어떻게 하나요?',
        answer:
          '<strong>먼저 가해한 쪽과 행위 정도를 영상으로 구분해 다투는 영역입니다.</strong> 종업원·목격자 진술을 확보.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 도메인 허브', href: '/guide/assault' },
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: '폭행 유형력 행사 기준', href: '/guide/assault/assault-tangible-force-standard' },
      { label: 'CCTV·영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
      { label: '범죄피해자 지원 제도', href: '/guide/assault/assault-victim-support-system' },
    ],
  },

  // ─── 2. assault-apartment-hallway-common-area-shove-track ───
  {
    domain: 'assault',
    slug: 'assault-apartment-hallway-common-area-shove-track',
    keyword: '아파트 복도 밀침 폭행',
    questionKeyword: '아파트 공용 복도에서 이웃과 시비가 붙어 밀쳐져 넘어지면서 다쳤어요. 상대는 \'복도는 누구나 다니는 공용 공간인데 무슨 일이냐\'며 폭행도 아니라고 우깁니다. 공용 복도에서 벌어진 일도 다툴 수 있는지, 밀침이 폭행이 되는지, 어디부터 정리해야 하는지 막막합니다.',
    ctaKeyword: '아파트 복도 밀침 폭행 공용부분·유형력 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '아파트 복도 밀침 폭행 — 5단계 공용부분 점검 | 로앤가이드',
      description:
        '아파트 공용 복도에서 밀쳐져 다쳤는데 공용 공간이라 문제없다고 우긴다면 형법 제260조 폭행과 공용부분 보호 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아파트·연립·다세대주택의 공용 복도나 계단, 엘리베이터 앞 같은 공용 공간에서 층간소음·주차·인사 문제로 이웃과 시비가 붙었는데, 감정이 격해진 상대가 저를 밀쳐 넘어뜨리거나 손으로 때려 다친 피해자입니다. 상대는 \'복도는 누구나 다니는 공용 공간이고 잠깐 부딪친 것뿐인데 무슨 폭행이냐\'며 발뺌하는데, 공용 부분에서 벌어진 일도 폭행·상해로 다툴 수 있는지, 밀쳐 넘어뜨린 것 정도로도 유형력 행사가 인정되는지 헷갈립니다. 정작 CCTV가 사각이거나 짧은 순간이라 더 당황스러운데, 공용 복도라는 점이 사건을 가볍게 만드는 건 아닌지, 어디부터 신고·고소를 정리해야 하는지 막막한 상태입니다." 형법 제260조 제1항은 사람의 신체에 폭행한 자를, 같은 법 제257조 제1항은 상해한 자를 처벌하도록 규정하는 영역입니다. 판례·실무는 공용 부분도 거주자의 사실상 평온을 보호할 필요가 있어 보호 대상이 될 수 있다고 보면서도, 폭행은 사람의 신체에 대한 유형력 행사로 평가되므로 밀침·구타 같은 행위가 신체에 대한 유형력 행사에 해당하는지를 객관적 행위 태양을 기준으로 살펴야 한다고 보는 본 사례 흐름이 있는 영역입니다. 아파트 복도 + 시비 + 밀침·구타 결합은 \'공용부분 보호·폭행 평가\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 유형력 행사 ② 상해 정도 ③ 고소 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 유형력 ② 상해 ③ 고소 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 아파트 복도 밀침 폭행 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 유형력 행사·상해 정도·고소·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 유형력 행사</strong> — 밀침·구타가 신체에 대한 유형력 행사인지 정황 정리.</li>\n<li><strong>② 상해 정도</strong> — 넘어지며 생긴 부상의 부위·치유기간과 일상 지장 정리.</li>\n<li><strong>③ 고소</strong> — 폭행(형법 제260조)·상해(제257조) 고소 검토.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공용 복도·계단 등 공용 부분도 거주자의 사실상 평온을 보호할 필요가 있어 보호 대상이 될 수 있고, 그 안에서의 밀침·구타가 신체에 대한 유형력 행사로 폭행에 해당하는지는 객관적 행위 태양으로 판단하는 영역. 복도 CCTV·진단서로 밀침·부상 흐름을 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 영상·진단 확보 (즉시~당일)</strong> — 복도·계단 CCTV·휴대폰 영상, 병원 진료·상해진단서와 부상 사진 확보.</li>\n<li><strong>2단계 — 유형력·상해 정리 (수일 내)</strong> — 밀침·구타 정황과 넘어지며 생긴 부상의 부위·치유기간 기록.</li>\n<li><strong>3단계 — 경찰 신고·고소장 접수 (가능한 빨리)</strong> — 112 신고 또는 관할 경찰서 고소장 제출, 시비 경위 첨부.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 진술·CCTV·진단서 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">아파트 복도 밀침 폭행 공용부분·유형력 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 유형력·상해 정도·고소 갈래입니다.</strong></p>\n<ul>\n<li><strong>복도·계단 CCTV 영상 (밀침·구타 정황)</strong></li>\n<li><strong>휴대폰 촬영 영상·녹취 (시비·폭언)</strong></li>\n<li><strong>상해진단서·진료기록 (부위·치유기간)</strong></li>\n<li><strong>다친 부위·현장 사진 (시간정보 포함)</strong></li>\n<li><strong>시비 경위 기록 (육하원칙)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n<li><strong>이웃·관리실·목격자 진술·연락처</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공용 복도라는 점은 폭행 성립을 가볍게 만드는 사정이 아니며, 밀쳐 넘어뜨린 행위도 신체에 대한 유형력 행사로 폭행으로 평가될 여지가 있으므로 밀침·구타와 넘어지며 생긴 부상의 인과를 진단서·영상으로 정리해두는 것이 핵심입니다. 복도·계단 CCTV는 보관 기간이 짧을 수 있어 관리실에 보존 요청을 먼저 해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>유형력 행사</strong> — 밀침·구타가 신체에 대한 유형력으로 인정되는지.</li>\n<li><strong>상해 인과</strong> — 넘어지며 생긴 부상이 밀침과 인과관계가 있는지.</li>\n<li><strong>공용 공간</strong> — 공용 부분이라는 점이 처리에 영향을 주는지.</li>\n<li><strong>쌍방 여부</strong> — 이웃 시비가 쌍방 폭행으로 몰리는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공동주택 공용 부분의 보호와 침입 판단기준',
        summary:
          '대법원 2009도4335(대법원, 2009.09.10 선고) 영역에서 법원은 다가구용 단독주택이나 다세대주택·연립주택·아파트와 같은 공동주택 내부에 있는 엘리베이터, 공용 계단과 복도도 주거로 사용하는 각 가구 또는 세대의 전용 부분에 부속된 부분으로서 거주자들의 사실상 주거의 평온을 보호할 필요성이 있어 주거침입죄의 객체인 \'사람의 주거\'에 해당한다고 판시했습니다. 아파트 복도 밀침 폭행 사안에서도 공용 부분이 보호 대상이 된다는 점과 그 안에서의 밀침·구타가 폭행으로 평가되는지를 함께 검토해볼 수 있습니다.',
        takeaway: '아파트 복도 + 시비 + 밀침·구타 결합 시 공용부분 보호·폭행 평가 검토 영역 — CCTV·진단서·부상 사진·시비 경위 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '공용 복도라서 폭행이 가볍게 처리되나요?',
        answer:
          '<strong>공용 부분이라는 점이 폭행 성립을 가볍게 만드는 사정은 아닌 영역입니다.</strong> 밀침·구타 정황을 영상으로 정리.',
      },
      {
        question: '밀쳐 넘어뜨린 것도 폭행인가요?',
        answer:
          '<strong>신체에 대한 유형력 행사면 밀침도 폭행으로 평가될 여지가 있는 영역입니다.</strong> 넘어진 경위·부상을 함께 기록.',
      },
      {
        question: '넘어지며 다친 것도 상해로 다투나요?',
        answer:
          '<strong>밀침과 부상 사이 인과가 인정되면 상해로 다퉈질 여지가 있는 영역입니다.</strong> 진단서로 부위·치유기간을 정리.',
      },
      {
        question: '복도 CCTV가 사각이면 어떻게 하나요?',
        answer:
          '<strong>휴대폰 영상·목격자 진술로 보강하는 영역입니다.</strong> 관리실에 인접 구역 CCTV 보존을 함께 요청.',
      },
      {
        question: '이웃 간 시비라며 쌍방으로 몰리면요?',
        answer:
          '<strong>먼저 가해한 쪽과 정도를 영상으로 구분해 다투는 영역입니다.</strong> 관리실·목격자 진술을 확보.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 도메인 허브', href: '/guide/assault' },
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: '폭행 유형력 행사 기준', href: '/guide/assault/assault-tangible-force-standard' },
      { label: 'CCTV·영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
      { label: '범죄피해자 지원 제도', href: '/guide/assault/assault-victim-support-system' },
    ],
  },

  // ─── 3. assault-victim-statement-petition-credibility-track ───
  {
    domain: 'assault',
    slug: 'assault-victim-statement-petition-credibility-track',
    keyword: '폭행 피해 진술 신빙성',
    questionKeyword: '폭행 피해를 당해 고소했는데 직접 영상이 부족해 제 진술과 제가 낸 탄원서가 사실상 핵심이에요. 상대는 \'피해자 말과 탄원서뿐\'이라며 신빙성을 깎아내립니다. 제 진술과 서면이 어디까지 증거로 쓰이는지, 어떤 순서로 고소를 준비해야 하는지 막막합니다.',
    ctaKeyword: '폭행 피해 진술·탄원서 신빙성·고소 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '폭행 피해 진술 — 5단계 신빙성·고소 점검 | 로앤가이드',
      description:
        '폭행 피해 진술과 탄원서가 핵심인데 신빙성을 깎아내려 막막하다면 형법 제260조 폭행과 진술·서면 증거 한계 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"폭행·상해 피해를 당해 고소했는데, 직접 찍힌 CCTV나 영상이 부족하다 보니 제 진술과 제가 제출한 탄원서·의견서가 사실상 핵심 자료가 된 피해자입니다. 상대는 \'결국 피해자 말과 탄원서밖에 없는 것 아니냐\'며 제 진술의 신빙성을 깎아내리고, 탄원서에 적힌 제 경험까지 \'스스로 유리하게 쓴 것\'이라며 다툽니다. 그런데 제 진술이 어느 정도면 받아들여지는지, 제가 법정에서 낸 의견·탄원서가 범죄사실 인정의 증거로 그대로 쓰이는 건지 아니면 그 용도가 제한되는 건지 헷갈립니다. 객관적 영상이 부족한 상황에서 제 진술과 서면을 어떻게 정리하고, 어떤 순서로 보강 증거를 모아 고소를 준비해야 하는지 막막한 상태입니다." 형법 제260조 제1항은 폭행을, 같은 법 제257조 제1항은 상해를 규정하고, 형사소송법은 피해자 등의 의견진술과 그 서면의 증거 사용 범위를 정하는 영역입니다. 판례·실무는 피해자 등의 진술은 그 주요 부분이 일관되고 경험칙에 비추어 비합리적이거나 모순되지 않으며 허위로 불리한 진술을 할 동기가 분명히 드러나지 않는 이상 함부로 신빙성을 배척해서는 안 되지만, 피해자가 공판기일에 한 의견진술이나 의견진술에 갈음해 제출한 서면(탄원서 등)은 범죄사실의 인정을 위한 증거로 삼을 수 없다고 보는 본 사례 흐름이 있는 영역입니다. 폭행 피해 + 진술 위주 + 탄원서 결합은 \'진술 신빙성·서면 증거 한계\' 검토가 가능한 트랙입니다. 피해자라면 ① 진술 정리 ② 보강 증거 ③ 서면 용도 ④ 형사 절차 ⑤ 민사 손배 5중 트랙이 가능한 영역. 대응은 ① 진술 ② 보강 ③ 서면 ④ 형사 ⑤ 손배 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 폭행 피해 진술 신빙성 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 진술 정리·보강 증거·서면 용도·형사 절차·민사 손배 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 진술 정리</strong> — 시비·폭행 경위를 시간순·일관되게 진술 정리.</li>\n<li><strong>② 보강 증거</strong> — 진단서·영상·통화 등 진술을 뒷받침할 자료 정리.</li>\n<li><strong>③ 서면 용도</strong> — 탄원서·의견서가 범죄사실 인정 증거가 아닌 점 이해.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 신고·고소장 접수 → 조사 → 검찰 송치 흐름 확인.</li>\n<li><strong>⑤ 민사 손배</strong> — 치료비·위자료 손해배상 또는 형사 합의 병행 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 피해자 진술이 주요 부분에서 일관되고 경험칙에 모순되지 않으며 허위 동기가 드러나지 않으면 신빙성을 함부로 배척하기 어렵지만, 탄원서·의견진술 서면은 범죄사실 인정 증거로는 쓸 수 없는 영역. 진술을 시간순으로 정리하고 진단서·영상 같은 보강 자료를 따로 모으는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 고소·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·범죄피해자 지원 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진술·진단 확보 (즉시~당일)</strong> — 시비·폭행 경위를 시간순으로 기록하고 병원 진료·상해진단서·부상 사진 확보.</li>\n<li><strong>2단계 — 보강 증거 정리 (수일 내)</strong> — CCTV·통화·메시지·목격자 등 진술을 뒷받침할 자료 수집.</li>\n<li><strong>3단계 — 서면 용도 구분 (고소 준비)</strong> — 탄원서·의견서는 처벌의사·정상 자료로, 범죄사실 입증은 진술·보강 증거로 분리.</li>\n<li><strong>4단계 — 조사·검찰 송치 (수사기관 일정)</strong> — 진술·영상·진단서 검토 → 검찰 송치·처분.</li>\n<li><strong>5단계 — 합의 또는 민사 손배 (병행)</strong> — 형사 합의 검토 또는 치료비·위자료 민사 청구.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">폭행 피해 진술·탄원서 신빙성·고소 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 진술·보강 증거·서면 용도 갈래입니다.</strong></p>\n<ul>\n<li><strong>시비·폭행 경위 진술 기록 (시간순·육하원칙)</strong></li>\n<li><strong>상해진단서·진료기록 (부위·치유기간)</strong></li>\n<li><strong>CCTV·휴대폰 영상 (확보 가능 범위)</strong></li>\n<li><strong>다친 부위 사진 (시간정보 포함)</strong></li>\n<li><strong>통화·문자·목격자 진술 (보강 증거)</strong></li>\n<li><strong>탄원서·의견서 (처벌의사·정상 자료 용도)</strong></li>\n<li><strong>치료비 영수증·통원 내역 (손해 산정)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 직접 영상이 부족하더라도 피해자 진술이 시간순으로 일관되고 경험칙에 모순되지 않으면 신빙성이 인정될 여지가 있으므로 경위를 구체적으로 기록하고 진단서·통화·목격자 같은 보강 자료를 따로 확보하는 것이 핵심입니다. 다만 탄원서·의견진술 서면은 범죄사실 인정 증거로는 쓰기 어려우니 처벌의사·정상 자료로 용도를 구분해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>진술 신빙성</strong> — 진술의 일관성·경험칙 부합·허위 동기 유무.</li>\n<li><strong>서면 용도</strong> — 탄원서·의견서가 범죄사실 입증에 쓰일 수 없는 점.</li>\n<li><strong>보강 증거</strong> — 진술을 뒷받침할 진단서·영상이 있는지.</li>\n<li><strong>폭행·상해 정도</strong> — 행위가 폭행·상해로 평가되는지.</li>\n<li><strong>합의·처벌 의사</strong> — 합의가 처리에 미치는 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 신고 112</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 피해자 의견진술·탄원서의 증거 사용 한계',
        summary:
          '대법원 2023도11371(대법원, 2024.03.12 선고) 영역에서 법원은 법원이 직권 또는 피해자 등의 신청에 따라 피해자 등을 공판기일에 출석하게 하여 형사소송법 제294조의2 제2항에 정한 사항으로서 범죄사실의 인정에 해당하지 않는 사항에 관하여 증인신문에 의하지 아니하고 의견을 진술하게 하거나 의견진술에 갈음하여 의견을 기재한 서면을 제출하게 할 수 있으나, 그러한 진술과 서면은 범죄사실의 인정을 위한 증거로 할 수 없다고 보아, 피해자가 재판 진행 중 제출한 탄원서의 일부 기재 내용을 피해자 진술의 신빙성을 인정하는 사정으로 적시해 유죄 판단의 근거로 삼은 원심에 잘못이 있다고 판시했습니다. 폭행 피해 진술 사안에서도 피해자 진술의 신빙성과 탄원서·의견서의 용도 한계를 함께 검토해볼 수 있습니다.',
        takeaway: '폭행 피해 + 진술 위주 + 탄원서 결합 시 진술 신빙성·서면 증거 한계 검토 영역 — 진술 기록·진단서·보강 증거·서면 용도 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '제 진술뿐인데도 폭행을 다툴 수 있나요?',
        answer:
          '<strong>진술이 일관되고 경험칙에 모순되지 않으면 신빙성이 인정될 여지가 있는 영역입니다.</strong> 경위를 시간순으로 정리.',
      },
      {
        question: '제가 낸 탄원서가 그대로 증거가 되나요?',
        answer:
          '<strong>탄원서·의견진술 서면은 범죄사실 인정 증거로는 쓰기 어려운 영역입니다.</strong> 처벌의사·정상 자료로 용도를 구분.',
      },
      {
        question: '진술은 어느 정도여야 받아들여지나요?',
        answer:
          '<strong>주요 부분이 일관되고 허위 진술 동기가 드러나지 않는지가 쟁점인 영역입니다.</strong> 모순 없는 시간순 기록을 준비.',
      },
      {
        question: '보강 증거는 어떤 게 도움이 되나요?',
        answer:
          '<strong>진단서·영상·통화·목격자가 진술을 뒷받침하는 영역입니다.</strong> 보관 기간이 짧은 CCTV는 빨리 확보.',
      },
      {
        question: '어떤 순서로 고소를 준비하나요?',
        answer:
          '<strong>진단·진술 → 보강 증거 → 서면 용도 구분 → 고소장 접수 순서로 정리하는 영역입니다.</strong> 진료기록과 경위 기록을 먼저 확보.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 도메인 허브', href: '/guide/assault' },
      { label: '폭행·상해 고소 절차', href: '/guide/assault/assault-injury-complaint-procedure' },
      { label: '폭행·협박 정도 판단 기준', href: '/guide/assault/assault-degree-standard' },
      { label: 'CCTV·영상 확보', href: '/guide/assault/assault-cctv-evidence-secure' },
      { label: '범죄피해자 지원 제도', href: '/guide/assault/assault-victim-support-system' },
    ],
  },

  // ─── 4. assault-detained-defendant-counsel-falsely-accused-defense ───
  {
    domain: 'assault',
    slug: 'assault-detained-defendant-counsel-falsely-accused-defense',
    keyword: '폭행 무고 방어 국선변호',
    questionKeyword: '실제로는 제가 먼저 맞아 막은 것뿐인데 사실과 다르게 폭행 가해자로 신고돼 입건됐어요. 게다가 다른 사건으로 구금 중이라 방어 준비가 막막한데, 변호인 도움을 못 받는 건 아닌지 걱정됩니다. 혐의를 받고 있다면 방어권과 국선변호인 보장을 어떻게 챙겨야 하는지 막막합니다.',
    ctaKeyword: '폭행 무고 방어·국선변호인 보장 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '폭행 무고 방어 — 5단계 국선변호인 점검 | 로앤가이드',
      description:
        '사실과 다르게 폭행 가해자로 신고돼 구금 중 방어가 막막하다면 형사소송법 제33조 필요적 국선변호인과 방어권 보장 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"실제로는 제가 먼저 시비·폭행을 당해 이를 막거나 떼어내려 한 것뿐인데, 상대가 사실과 다르게 저를 폭행 가해자로 신고해 입건된 피의자·피고인입니다. 더 곤란한 점은 제가 이 사건이 아닌 다른 형사사건으로 구속영장이 집행되었거나 별건으로 유죄가 확정되어 구금 상태에 있다는 것입니다. 구금되어 있다 보니 증거를 모으고 진술을 준비하기가 막막한데, 정작 이 폭행 사건에서 변호인의 조력을 제대로 받을 수 있는지, 별건으로 구금 중인 경우에도 법원이 국선변호인을 선정해 주는지 헷갈립니다. 사실과 다르게 신고되었다면 방어권과 국선변호인 보장을 어떤 순서로 챙겨야 하는지, 무엇부터 정리해야 하는지 막막한 상태입니다." 형법 제260조 제1항은 폭행을, 같은 법 제21조는 정당방위를 규정하고, 형사소송법 제33조 제1항 제1호는 \'피고인이 구속된 때\' 변호인이 없으면 법원이 직권으로 국선변호인을 선정하도록 정하는 영역입니다. 판례·실무는 형사소송법 제33조 제1항 제1호의 \'피고인이 구속된 때\'가 해당 형사사건에서 구속되어 재판받는 경우에 한정되지 않고, 피고인이 별건으로 구속영장이 발부·집행되거나 다른 형사사건에서 유죄판결이 확정되어 그 집행으로 구금 상태에 있는 경우도 포괄한다고 보는 본 사례 흐름이 있는 영역입니다. 폭행 무고 + 별건 구금 + 방어권 결합은 \'국선변호인 보장·방어권\' 검토가 가능한 트랙입니다. 혐의를 받고 있다면 ① 사실관계 ② 정당방위 ③ 국선변호 ④ 형사 절차 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 사실 ② 방위 ③ 국선 ④ 형사 ⑤ 대응 5단계로 검토해볼 수 있습니다. 사실과 다르게 신고되었다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 폭행 무고 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실관계·정당방위·국선변호·형사 절차·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실관계</strong> — 누가 먼저 가해했는지, 신고가 사실과 다른지 경위 정리.</li>\n<li><strong>② 정당방위</strong> — 막거나 떼어낸 행위가 방어 행위로 평가되는지 정리.</li>\n<li><strong>③ 국선변호</strong> — 별건 구금 중에도 필요적 국선변호인 선정 대상인지 확인.</li>\n<li><strong>④ 형사 절차</strong> — 경찰 조사 → 검찰 송치 → 공판 흐름과 방어 준비 점검.</li>\n<li><strong>⑤ 대응</strong> — 무고·진술 신빙성 쟁점과 방어권 보장 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'피고인이 구속된 때\'는 해당 사건에서 구속된 경우에 한정되지 않고 별건 구속·다른 사건 확정형 집행으로 구금된 경우도 포괄해 필요적 국선변호인 선정 대상이 될 수 있는 영역. 별건 구금 중에도 변호인 조력을 받으며 사실관계·정당방위를 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 방어·대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·법원·국선변호 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사실관계 정리 (즉시~당일)</strong> — 시비·폭행 선후 경위를 시간순으로 기록하고 CCTV·진단·목격자 등 확보.</li>\n<li><strong>2단계 — 정당방위 검토 (수일 내)</strong> — 막거나 떼어낸 행위의 경위·정도와 상대의 선행 가해 정황 정리.</li>\n<li><strong>3단계 — 국선변호인 점검 (구금 중)</strong> — 별건 구금 사실을 소명해 필요적 국선변호인 선정 대상인지 확인.</li>\n<li><strong>4단계 — 조사·공판 준비 (수사·재판 일정)</strong> — 진술·증거 검토, 무고·진술 신빙성 쟁점 변론 준비.</li>\n<li><strong>5단계 — 대응·합의 (병행)</strong> — 방어권 보장 확인, 필요 시 무고 대응·합의 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 폭행 증거 수집 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">폭행 무고 방어·국선변호인 보장 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=assault" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사실관계·정당방위·국선변호 갈래입니다.</strong></p>\n<ul>\n<li><strong>시비·폭행 선후 경위 기록 (시간순·육하원칙)</strong></li>\n<li><strong>CCTV·휴대폰 영상 (선행 가해·방어 정황)</strong></li>\n<li><strong>본인 부상 진단서·사진 (먼저 당한 정황)</strong></li>\n<li><strong>목격자 진술·연락처 (선후 관계 보강)</strong></li>\n<li><strong>별건 구속영장·수형 관련 자료 (국선변호 사유 소명)</strong></li>\n<li><strong>고소·신고 내용·공소장 (혐의 범위 확인)</strong></li>\n<li><strong>국선변호인 선정 청구·방어 의견 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 형사소송법 제33조 제1항 제1호의 \'피고인이 구속된 때\'는 해당 사건 구속에 한정되지 않고 별건 구속·다른 사건 확정형 집행으로 구금된 경우도 포괄할 여지가 있으므로, 별건 구금 사실을 소명해 국선변호인 조력을 받으며 사실관계·정당방위를 정리해두는 것이 핵심입니다. 먼저 당한 정황을 보여주는 본인 부상 자료와 CCTV는 보관 기간이 짧을 수 있어 빨리 확보·보존해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>선후 관계</strong> — 누가 먼저 가해했는지와 신고가 사실과 다른지.</li>\n<li><strong>정당방위</strong> — 막거나 떼어낸 행위가 방어 행위로 평가되는지.</li>\n<li><strong>국선변호 보장</strong> — 별건 구금 중에도 국선변호인 선정 대상인지.</li>\n<li><strong>방어권</strong> — 구금 상태에서 변호인 조력·증거 접근이 보장되는지.</li>\n<li><strong>무고·합의</strong> — 사실과 다른 신고에 대한 대응과 합의의 영향.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>범죄피해자지원센터 1577-1295</strong></li>\n<li><strong>국선변호인 제도 (법원·검찰 안내)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 별건 구금 중 피고인의 필요적 국선변호인 선정',
        summary:
          '대법원 2021도6357(대법원, 2024.05.23 선고) 영역에서 법원은 형사소송법 제33조 제1항 제1호가 필요적 국선변호인 선정사유 중 하나로 정한 \'피고인이 구속된 때\'란 피고인이 해당 형사사건에서 구속되어 재판을 받고 있는 경우에 한정된다고 볼 수 없고, 신체의 자유·변호인의 조력을 받을 권리·공정한 재판을 받을 권리 등 헌법상 기본권의 취지와 입법 목적을 종합하면 피고인이 별건으로 구속영장이 발부되어 집행되거나 다른 형사사건에서 유죄판결이 확정되어 그 판결의 집행으로 구금 상태에 있는 경우도 포괄한다고 판시했습니다. 폭행 무고 방어 사안에서 별건 구금 중인 피고인도 필요적 국선변호인의 조력을 받으며 방어를 준비할 수 있다는 점을 검토해볼 수 있습니다.',
        takeaway: '폭행 무고 + 별건 구금 + 방어권 결합 시 국선변호인 보장·방어권 검토 영역 — 사실관계·정당방위·구금 소명·방어 자료 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '다른 사건으로 구금 중인데 국선변호인이 선정되나요?',
        answer:
          '<strong>별건 구속·확정형 집행 구금도 필요적 국선변호인 선정 대상이 될 여지가 있는 영역입니다.</strong> 구금 사실을 자료로 소명.',
      },
      {
        question: '먼저 맞아 막은 것뿐인데 어떻게 다투나요?',
        answer:
          '<strong>선행 가해·방어 정황으로 정당방위 여지를 다투는 영역입니다.</strong> CCTV·본인 부상 자료로 선후를 정리.',
      },
      {
        question: '사실과 다른 신고에 어떻게 대응하나요?',
        answer:
          '<strong>선후 관계·진술 신빙성으로 다투며 무고 여부도 검토하는 영역입니다.</strong> 시간순 경위와 목격자를 확보.',
      },
      {
        question: '구금 상태라 증거를 못 모으는데 어떡하나요?',
        answer:
          '<strong>변호인 조력을 통해 증거 접근·보존을 진행하는 영역입니다.</strong> CCTV 보존 요청을 먼저 챙기기.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>사실관계 정리와 국선변호인 선정 점검이 출발점인 영역입니다.</strong> 구금 소명 자료와 방어 의견을 함께 준비.',
      },
    ],
    cta: { text: '폭행 증거 수집 순서, AI로 정리하기', link: '/chat?domain=assault' },
    internalLinks: [
      { label: '폭행·상해 도메인 허브', href: '/guide/assault' },
      { label: '정당방위 인정 기준', href: '/guide/assault/assault-self-defense-recognition' },
      { label: '폭행 무고 대응', href: '/guide/assault/assault-false-accusation-defense' },
      { label: '폭행 가해자 첫 대응', href: '/guide/assault/assault-charged-first-response' },
      { label: '범죄피해자 지원 제도', href: '/guide/assault/assault-victim-support-system' },
    ],
  },

  // ─── 5. dui-refusal-prior-record-unconstitutional-aggravation-track ───
  {
    domain: 'dui',
    slug: 'dui-refusal-prior-record-unconstitutional-aggravation-track',
    keyword: '음주측정거부 가중조항 위헌',
    questionKeyword: '과거 음주측정거부 전력이 있는데 다시 음주운전으로 입건되면서 전력 가중조항까지 적용해 기소됐어요. 그 가중조항이 위헌으로 효력을 잃었다는 말을 들었습니다. 혐의를 받고 있다면 적용 법조와 절차를 어떻게 다퉈야 하는지 막막합니다.',
    ctaKeyword: '음주측정거부 가중조항 위헌·적용 법조 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '음주 가중조항 위헌 — 5단계 적용 법조 점검 | 로앤가이드',
      description:
        '음주측정거부 전력 가중조항으로 기소돼 막막하다면 도로교통법 제148조의2와 위헌 가중조항 소급실효·적용 법조 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"과거에 음주측정거부나 음주운전으로 형사처벌을 받은 전력이 있는데, 다시 술에 취한 상태에서 운전했다는 이유로 입건되면서 단순 음주운전이 아니라 \'1회 이상 위반한 사람이 다시 위반\'한 경우라며 전력에 따른 가중처벌 조항까지 적용해 기소된 운전자입니다. 그런데 그 가중처벌 조항이 책임과 형벌의 비례원칙에 어긋난다는 위헌 논란이 있었고, 헌법재판소가 일부 조항에 대해 위헌결정을 선고해 효력을 잃었다는 말을 들었어요. 위헌으로 효력을 잃은 조항을 그대로 적용해 기소된 경우 그 부분은 어떻게 처리되는지, 단순 음주운전 부분과는 어떻게 구분되는지, 면허 처분은 또 별개로 다퉈야 하는 건 아닌지 헷갈립니다. 혐의를 받고 있다면 적용 법조와 절차를 어떤 순서로 다퉈야 하는지 막막한 상태입니다." 도로교통법 제44조 제1항·제2항은 술에 취한 상태의 운전 금지와 음주측정 응할 의무를, 같은 법 제148조의2는 음주운전·음주측정거부의 처벌과 일정 전력에 따른 가중처벌을 정하는 영역입니다. 판례·실무는 헌법재판소가 가중처벌 조항 일부에 대해 위헌결정을 선고하면 그 법률조항 부분은 소급하여 효력을 상실하므로 그 부분만을 구성요건으로 한 적용은 더 이상 유죄판결의 근거가 될 수 없다고 보는 본 사례 흐름이 있는 영역입니다. 음주측정거부 전력 + 재위반 + 가중조항 결합은 \'위헌 가중조항 소급실효·적용 법조 평가\' 검토가 가능한 트랙입니다. 혐의를 받고 있다면 ① 적용 법조 ② 위헌 효력 ③ 전력 요건 ④ 행정 90일 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 법조 ② 위헌 ③ 전력 ④ 행정 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 음주측정거부 가중조항 위헌 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 적용 법조·위헌 효력·전력 요건·행정 90일·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 적용 법조</strong> — 단순 음주운전인지 전력에 따른 가중조항이 적용됐는지 정리.</li>\n<li><strong>② 위헌 효력</strong> — 적용 조항이 위헌결정으로 소급 효력 상실된 부분인지 정리.</li>\n<li><strong>③ 전력 요건</strong> — 과거 음주운전·측정거부 전력이 가중 요건에 맞는지 정리.</li>\n<li><strong>④ 행정 90일</strong> — 면허 취소·정지 처분 사유와 청구기한(안 날부터 90일) 점검.</li>\n<li><strong>⑤ 대응</strong> — 형사 쟁점과 행정심판·이의신청 대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 전력 가중처벌 조항이 위헌결정으로 소급 효력을 상실하면 그 부분만을 구성요건으로 한 적용은 더 이상 유죄판결의 근거가 될 수 없는 영역. 공소장의 적용 법조를 단순/가중으로 구분하고 면허 처분을 별개로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사·행정 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·법원·중앙행정심판위 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 단속·공소 자료 확인 (즉시~당일)</strong> — 적발보고서·측정 결과지·공소장, 면허 처분 통지서·사유 확인.</li>\n<li><strong>2단계 — 적용 법조 구분 (수일 내)</strong> — 단순/가중 조항 구분과 과거 음주·측정거부 전력 이력 점검.</li>\n<li><strong>3단계 — 위헌 효력 정리 (공판 전)</strong> — 적용 조항이 위헌결정으로 소급 효력 상실된 부분인지 정리.</li>\n<li><strong>4단계 — 행정 준비 (안 날부터 90일 내)</strong> — 이의신청·행정심판 청구기한·집행정지 자료 준비.</li>\n<li><strong>5단계 — 변론·재결 대응 (공판/재결 일정)</strong> — 적용 법조·위헌 효력 변론, 취소 처분 재결 대응.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">음주측정거부 가중조항 위헌·적용 법조 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 적용 법조·위헌 효력·행정 대응 갈래입니다.</strong></p>\n<ul>\n<li><strong>공소장·적용 법조 확인 자료 (단순/가중 구분)</strong></li>\n<li><strong>과거 음주운전·측정거부 전력·처분 이력 자료 (가중 요건)</strong></li>\n<li><strong>주취운전자 적발보고서·측정 결과지 (음주 부분)</strong></li>\n<li><strong>측정 요구·고지·응답 경위 메모 (측정 부분)</strong></li>\n<li><strong>면허 취소·정지 처분 통지서 (사유·일자)</strong></li>\n<li><strong>이의신청서·행정심판 청구서·집행정지 신청서 (90일 내)</strong></li>\n<li><strong>초범 정상·반성·생계 등 양형 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 전력 가중처벌 조항이 위헌결정으로 소급 효력을 상실하면 그 부분만을 구성요건으로 한 적용은 유죄판결의 근거가 될 수 없으므로 공소장의 적용 법조가 단순/가중 어느 쪽인지부터 구분해두는 것이 핵심입니다. 면허 처분은 안 날부터 90일 내 이의신청·행정심판으로 별개로 정리하고 집행정지도 함께 살펴두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>적용 법조</strong> — 단순 음주운전인지 전력 가중조항이 적용됐는지.</li>\n<li><strong>위헌 효력</strong> — 적용 조항이 위헌결정으로 소급 효력 상실됐는지.</li>\n<li><strong>전력 요건</strong> — 과거 전력이 가중 요건에 맞게 특정됐는지.</li>\n<li><strong>음주·측정 부분</strong> — 음주·측정거부 자체의 성립·정확성.</li>\n<li><strong>행정 90일</strong> — 처분을 안 날부터 90일 청구기한 준수 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110 (처분 안 날부터 90일)</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위헌결정으로 효력을 잃은 음주 전력 가중조항의 처리',
        summary:
          '대법원 2022도32(대법원, 2022.06.30 선고) 영역에서 법원은 음주측정거부죄로 형사처벌을 받은 전력이 있는 피고인이 술에 취한 상태에서 자동차를 운전했다는 공소사실에 대해 원심이 도로교통법 제148조의2 제1항, 제44조 제1항을 적용해 유죄를 선고했는데, 원심판결 선고 후 헌법재판소가 같은 항 중 \'제44조 제1항 또는 제2항을 1회 이상 위반한 사람으로서 다시 같은 조 제1항을 위반한 사람\'에 관한 부분에 대해 위헌결정을 선고한 사안에서, 피고인에게 적용한 조항 중 제44조 제1항 위반만을 구성요건으로 하는 부분은 헌법재판소법 제47조 제3항 본문에 따라 소급하여 효력을 상실하였으므로 더 이상 유죄판결의 근거가 될 수 없다고 판시했습니다. 음주측정거부 전력 가중 사안에서도 적용 법조가 위헌으로 효력을 잃은 가중조항인지를 검토해볼 수 있습니다.',
        takeaway: '음주측정거부 전력 + 재위반 + 가중조항 결합 시 위헌 가중조항 소급실효·적용 법조 평가 검토 영역 — 공소장·전력 이력·측정 경위·행정 90일 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '위헌으로 효력을 잃은 조항으로 기소되면 어떻게 되나요?',
        answer:
          '<strong>소급 효력 상실 부분은 유죄판결의 근거가 될 수 없어 다퉈질 여지가 있는 영역입니다.</strong> 공소장의 적용 법조를 먼저 확인.',
      },
      {
        question: '가중조항인지 단순 음주운전인지 어떻게 구분하나요?',
        answer:
          '<strong>공소장 적용 법조와 과거 전력 요건으로 구분하는 영역입니다.</strong> 처분 이력·전력 자료를 정리.',
      },
      {
        question: '과거 전력은 어떻게 확인하나요?',
        answer:
          '<strong>전력의 시기·죄명이 가중 요건에 맞게 특정됐는지가 쟁점인 영역입니다.</strong> 처분·판결 이력 자료를 확보.',
      },
      {
        question: '면허 취소도 같이 다퉈야 하나요?',
        answer:
          '<strong>음주·측정거부는 면허 처분으로 이어지기 쉬워 행정심판을 별도로 검토하는 영역입니다.</strong> 처분 통지서·90일 청구기한을 점검.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>공소장·적용 법조·전력 이력 확보가 출발점인 영역입니다.</strong> 측정 경위와 행정 청구기한을 함께 점검.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 도메인 허브', href: '/guide/dui' },
      { label: '음주운전 가중처벌·위헌 조항', href: '/guide/dui/dui-repeat-aggravation-track' },
      { label: '음주측정 거부 처벌', href: '/guide/dui/dui-measurement-refusal-track' },
      { label: '음주운전 행정심판 절차', href: '/guide/dui/dui-administrative-appeal-procedure' },
      { label: '면허취소·정지 기준', href: '/guide/dui/dui-license-revocation-suspension-standard' },
    ],
  },

  // ─── 6. dui-license-revocation-acquittal-no-unlicensed-track ───
  {
    domain: 'dui',
    slug: 'dui-license-revocation-acquittal-no-unlicensed-track',
    keyword: '면허취소 무죄 무면허운전',
    questionKeyword: '음주운전으로 면허가 취소됐는데, 그 원인이 된 사건은 결국 무죄로 확정됐어요. 그런데 취소처분이 살아있던 기간에 운전한 것이 무면허운전으로 추가 입건됐습니다. 원인이 무죄인데도 무면허로 처벌되는 건지, 혐의를 받고 있다면 어떻게 다퉈야 하는지 막막합니다.',
    ctaKeyword: '면허취소 무죄·무면허운전 성립 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '면허취소 무죄 — 5단계 무면허 성립 점검 | 로앤가이드',
      description:
        '면허취소 원인이 무죄로 확정됐는데 그 기간 운전이 무면허로 입건돼 막막하다면 도로교통법 무면허운전 성립 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"음주운전 등을 이유로 운전면허가 취소됐는데, 정작 그 취소처분의 원인이 된 교통사고나 법규 위반 사건은 이후 증거가 부족하다는 등의 이유로 무죄로 확정되거나 혐의없음 처분을 받은 운전자입니다. 문제는 취소처분이 아직 살아 있던 기간에 제가 운전을 했는데, 그 운전이 \'무면허운전\'에 해당한다며 별도로 입건·기소되었다는 점입니다. 취소처분의 원인이 결국 무죄·혐의없음으로 정리됐는데도, 그 처분이 형식적으로 취소되기 전에 운전했다는 이유만으로 무면허운전으로 처벌되는 것이 맞는지, 취소처분이 소급해서 효력을 잃는다면 그 기간 운전도 무면허가 아닌 게 되는 건 아닌지 헷갈립니다. 혐의를 받고 있다면 취소처분의 효력과 무면허운전 성립을 어떤 순서로 다퉈야 하는지 막막한 상태입니다." 도로교통법 제43조는 무면허운전 금지를, 같은 법 제93조는 음주운전 등을 이유로 한 운전면허 취소·정지를 정하는 영역입니다. 판례·실무는 자동차 운전면허 취소처분을 받은 사람이 운전했더라도 그 취소처분의 원인이 된 교통사고 또는 법규 위반에 대해 범죄사실의 증명이 없어 무죄판결이 확정된 경우에는, 그 취소처분이 따로 취소되지 않았더라도 무면허운전의 죄로 처벌할 수 없다고 보는 본 사례 흐름이 있는 영역입니다. 면허취소 + 원인 무죄 + 그 기간 운전 결합은 \'취소처분 효력·무면허 성립 평가\' 검토가 가능한 트랙입니다. 혐의를 받고 있다면 ① 원인 사건 ② 취소 효력 ③ 무면허 성립 ④ 행정 90일 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 원인 ② 효력 ③ 성립 ④ 행정 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 면허취소 무죄 무면허운전 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 원인 사건·취소 효력·무면허 성립·행정 90일·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 원인 사건</strong> — 취소처분의 원인이 된 사건이 무죄·혐의없음으로 정리됐는지 정리.</li>\n<li><strong>② 취소 효력</strong> — 원인이 무죄면 취소처분 효력·소급 정리 여부 정리.</li>\n<li><strong>③ 무면허 성립</strong> — 그 기간 운전이 무면허운전으로 처벌되는지 정리.</li>\n<li><strong>④ 행정 90일</strong> — 취소처분 취소·재발급과 청구기한(안 날부터 90일) 점검.</li>\n<li><strong>⑤ 대응</strong> — 형사 쟁점과 행정 정리·이의신청 대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 취소처분의 원인이 된 교통사고·법규 위반에 대해 무죄판결이 확정되면, 취소처분이 따로 취소되지 않았더라도 그 기간 운전을 무면허운전으로 처벌하기 어려운 영역. 원인 사건의 무죄·혐의없음 확정과 취소처분의 정리 경과를 함께 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사·행정 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·법원·중앙행정심판위 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 원인·처분 자료 확인 (즉시~당일)</strong> — 원인 사건 무죄·혐의없음 자료, 면허 취소처분 통지서·공소장 확인.</li>\n<li><strong>2단계 — 취소 효력 정리 (수일 내)</strong> — 원인 무죄에 따른 취소처분 취소·재발급 경과 점검.</li>\n<li><strong>3단계 — 무면허 성립 정리 (공판 전)</strong> — 그 기간 운전이 무면허운전으로 처벌될 수 있는지 정리.</li>\n<li><strong>4단계 — 행정 준비 (안 날부터 90일 내)</strong> — 취소처분 정리·이의신청·행정심판 자료 준비.</li>\n<li><strong>5단계 — 변론·재결 대응 (공판/재결 일정)</strong> — 취소 효력·무면허 성립 변론, 처분 정리 대응.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 음주운전 행정심판 준비서류, AI로 체크하기</strong></p>\n<p style="margin:0;font-size:0.95em">면허취소 무죄·무면허운전 성립 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 원인 사건·취소 효력·무면허 성립 갈래입니다.</strong></p>\n<ul>\n<li><strong>원인 사건 무죄판결문·혐의없음 처분 자료 (원인 정리)</strong></li>\n<li><strong>운전면허 취소처분 통지서 (사유·일자)</strong></li>\n<li><strong>취소처분 취소·면허 재발급 관련 자료 (효력 정리)</strong></li>\n<li><strong>무면허운전 공소장·적발 자료 (혐의 범위)</strong></li>\n<li><strong>운전 일시·경위 자료 (처분 기간 대조)</strong></li>\n<li><strong>이의신청서·행정심판 청구서 (90일 내)</strong></li>\n<li><strong>반성·생계 등 양형 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 취소처분의 원인이 된 교통사고·법규 위반에 대해 무죄판결이 확정되면 취소처분이 따로 취소되지 않았더라도 그 기간 운전을 무면허운전으로 처벌하기 어려울 여지가 있으므로, 원인 사건의 무죄·혐의없음 확정 자료와 운전 일시가 처분 기간과 어떻게 겹치는지를 함께 정리해두는 것이 핵심입니다. 취소처분 정리·재발급은 안 날부터 90일 청구기한도 함께 챙겨두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>원인 무죄</strong> — 취소처분 원인 사건이 무죄·혐의없음으로 확정됐는지.</li>\n<li><strong>취소 효력</strong> — 원인 무죄에 따라 취소처분 효력이 정리되는지.</li>\n<li><strong>무면허 성립</strong> — 그 기간 운전이 무면허운전으로 처벌되는지.</li>\n<li><strong>운전 시기</strong> — 운전 일시가 처분 기간과 어떻게 겹치는지.</li>\n<li><strong>행정 90일</strong> — 처분 정리·이의신청의 청구기한 준수 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110 (처분 안 날부터 90일)</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 면허취소 원인 무죄 확정과 무면허운전 성립',
        summary:
          '대법원 2019도11826(대법원, 2021.09.16 선고) 영역에서 법원은 행정청의 자동차 운전면허 취소처분이 직권으로 또는 행정쟁송절차에 의하여 취소되면 그 처분 시에 소급하여 효력을 잃고 취소처분에 복종할 의무가 원래부터 없었음이 확정되므로, 자동차 운전면허가 취소된 사람이 그 처분의 원인이 된 교통사고 또는 법규 위반에 대하여 무죄의 확정판결을 받은 경우 행정청은 즉시 그 취소처분을 취소하여야 하고, 운전면허 취소처분을 받은 사람이 그 취소처분이 취소되기 전에 자동차를 운전한 행위는 도로교통법에 규정된 무면허운전의 죄에 해당하지 아니한다고 판시했습니다. 면허취소 원인 무죄 사안에서도 취소처분의 효력과 무면허운전 성립을 검토해볼 수 있습니다.',
        takeaway: '면허취소 + 원인 무죄 + 그 기간 운전 결합 시 취소처분 효력·무면허 성립 평가 검토 영역 — 원인 무죄 자료·취소처분·운전 일시·행정 90일 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '취소 원인이 무죄인데도 무면허로 처벌되나요?',
        answer:
          '<strong>원인 사건이 무죄로 확정되면 그 기간 운전을 무면허로 처벌하기 어려울 여지가 있는 영역입니다.</strong> 무죄판결문을 먼저 확보.',
      },
      {
        question: '취소처분이 아직 안 취소됐는데도 다툴 수 있나요?',
        answer:
          '<strong>원인 무죄가 확정되면 취소처분이 따로 취소되기 전이라도 다툴 여지가 있는 영역입니다.</strong> 취소처분 정리 경과를 점검.',
      },
      {
        question: '운전한 시기가 중요한가요?',
        answer:
          '<strong>운전 일시가 취소처분 기간과 어떻게 겹치는지가 쟁점이 되는 영역입니다.</strong> 운전 일시·경위 자료를 정리.',
      },
      {
        question: '면허는 어떻게 되돌려 받나요?',
        answer:
          '<strong>원인 무죄에 따라 취소처분 취소·면허 재발급이 검토되는 영역입니다.</strong> 행정 정리·재발급 자료를 확인.',
      },
      {
        question: '혐의를 받고 있다면 무엇부터 챙겨야 하나요?',
        answer:
          '<strong>원인 사건 무죄 자료와 취소처분 통지서 확보가 출발점인 영역입니다.</strong> 운전 일시와 행정 청구기한을 함께 점검.',
      },
    ],
    cta: { text: '음주운전 행정심판 준비서류, AI로 체크하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 도메인 허브', href: '/guide/dui' },
      { label: '면허취소·정지 기준', href: '/guide/dui/dui-license-revocation-suspension-standard' },
      { label: '음주운전 행정심판 절차', href: '/guide/dui/dui-administrative-appeal-procedure' },
      { label: '무면허운전 처벌', href: '/guide/dui/dui-unlicensed-driving-penalty' },
      { label: '음주운전 양형·감경', href: '/guide/dui/dui-sentencing-mitigation-factors' },
    ],
  },

  // ─── 7. dui-alcohol-dependency-treatment-custody-track ───
  {
    domain: 'dui',
    slug: 'dui-alcohol-dependency-treatment-custody-track',
    keyword: '반복 음주운전 치료감호',
    questionKeyword: '음주운전을 여러 번 반복해 다시 입건됐는데, 재판에서 알코올 의존을 이유로 치료감호 이야기가 나왔어요. 검사가 청구하지 않았는데도 치료감호가 부과될 수 있는지, 재범 위험을 어떻게 다투고 치료 의지를 보여줘야 하는지, 혐의를 받고 있다면 무엇부터 정리해야 하는지 막막합니다.',
    ctaKeyword: '반복 음주운전 치료감호·재범 위험 정리',
    type: '절차형',
    perspective: 'accused',
    meta: {
      title: '반복 음주운전 — 5단계 치료감호 점검 | 로앤가이드',
      description:
        '음주운전을 반복해 치료감호 이야기가 나와 막막하다면 치료감호법과 알코올 의존·재범 위험 판단 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"음주운전을 여러 차례 반복하다 다시 술에 취한 상태에서 운전해 입건된 운전자입니다. 그런데 이번에는 재판 과정에서 \'알코올을 섭취하는 습벽이 있거나 그에 중독된 상태\'를 이유로 치료감호 이야기가 나왔습니다. 검사가 처음부터 치료감호를 청구하지 않았는데도 재판 도중 치료감호의 필요성이 거론될 수 있는지, 법원이 검사에게 치료감호청구를 요구할 수 있는지 헷갈립니다. 한편으로는 제가 정말 강제력을 수반하는 감호 상태에서 치료받아야 할 정도인지, 재범 위험을 어떻게 다투고 자발적 치료 의지를 어떻게 보여줘야 하는지도 막막합니다. 혐의를 받고 있다면 치료감호 절차와 재범 위험·치료 필요성을 어떤 순서로 정리해야 하는지 막막한 상태입니다." 치료감호 등에 관한 법률 제2조 제1항은 알코올을 섭취하는 습벽이 있거나 그에 중독된 자로서 금고 이상의 형에 해당하는 죄를 지은 자를 치료감호대상자로, 같은 법 제4조는 검사의 치료감호 청구와 법원의 치료감호청구 요구를 정하는 영역입니다. 판례·실무는 치료감호청구 요구 여부는 원칙적으로 법관의 재량이지만, 심리 결과 재범 가능성과 함께 일정한 강제력을 수반하는 감호 상태에서 치료받아야 할 필요성에 관한 구체적 사정이 명백히 확인되었는데도 그 요구 권한을 행사하지 않은 것이 매우 불합리하다고 인정되는 경우에는 그 불행사가 재량의 한계를 현저히 벗어난 것으로 위법할 수 있다고 보는 본 사례 흐름이 있는 영역입니다. 반복 음주운전 + 알코올 의존 + 치료감호 결합은 \'치료감호 재량·재범 위험 평가\' 검토가 가능한 트랙입니다. 혐의를 받고 있다면 ① 의존 상태 ② 재범 위험 ③ 치료 의지 ④ 양형·행정 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 의존 ② 위험 ③ 치료 ④ 양형 ⑤ 대응 5단계로 검토해볼 수 있습니다. 혐의를 받고 있다면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 반복 음주운전 치료감호 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 의존 상태·재범 위험·치료 의지·양형/행정·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 의존 상태</strong> — 알코올 습벽·중독 정도와 진단·치료 이력 정리.</li>\n<li><strong>② 재범 위험</strong> — 반복 횟수·간격·정황 등 재범 가능성 관련 사정 정리.</li>\n<li><strong>③ 치료 의지</strong> — 자발적 치료·상담·금주 노력 등 치료 의지 자료 정리.</li>\n<li><strong>④ 양형·행정</strong> — 반성·생계 등 양형과 면허 취소·정지 처분 점검.</li>\n<li><strong>⑤ 대응</strong> — 치료감호 절차·재량 쟁점과 방어 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 치료감호청구 요구는 원칙적으로 법관의 재량이지만, 재범 가능성과 감호 상태에서의 치료 필요성이 명백히 확인되는데도 권한을 행사하지 않는 것이 매우 불합리하면 위법할 수 있는 영역. 의존 상태·재범 위험·자발적 치료 의지를 자료로 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 형사·행정 대응 5단계',
        content:
          '<p><strong>A. 경찰·검찰·법원·중앙행정심판위 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사건·전력 자료 확인 (즉시~당일)</strong> — 공소장·적발보고서·측정 결과지, 과거 음주운전 전력·처분 이력 확인.</li>\n<li><strong>2단계 — 의존·재범 위험 정리 (수일 내)</strong> — 알코올 습벽·중독 정도와 반복 횟수·간격 등 재범 관련 사정 정리.</li>\n<li><strong>3단계 — 치료 의지 자료 (공판 전)</strong> — 전문의 진단·상담·금주 프로그램 등 자발적 치료 자료 준비.</li>\n<li><strong>4단계 — 양형·행정 준비 (병행)</strong> — 반성·생계 자료 준비, 면허 처분 통지서·행정 청구기한 점검.</li>\n<li><strong>5단계 — 변론·재결 대응 (공판/재결 일정)</strong> — 치료감호 재량·재범 위험 변론, 감경·집행정지 자료 제출.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 탄원서와 감경 요소, AI로 먼저 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">반복 음주운전 치료감호·재범 위험 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=dui" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 의존 상태·재범 위험·치료 의지 갈래입니다.</strong></p>\n<ul>\n<li><strong>공소장·적발보고서·측정 결과지 (사건 내용)</strong></li>\n<li><strong>과거 음주운전 전력·처분 이력 자료 (반복 횟수)</strong></li>\n<li><strong>알코올 의존 진단·감정 자료 (의존 상태)</strong></li>\n<li><strong>치료·상담·금주 프로그램 참여 자료 (치료 의지)</strong></li>\n<li><strong>가족·직장 지지·생계 자료 (사회복귀 환경)</strong></li>\n<li><strong>면허 취소·정지 처분 통지서 (사유·일자)</strong></li>\n<li><strong>반성·재발 방지 계획 등 양형 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 치료감호청구 요구는 법관의 재량이지만 재범 가능성과 감호 상태에서의 치료 필요성이 명백히 확인되는데도 권한을 행사하지 않는 것이 매우 불합리하면 위법할 수 있으므로, 의존 상태·재범 위험과 함께 자발적 치료·상담·금주 노력을 구체적 자료로 정리해두는 것이 핵심입니다. 면허 처분 통지서와 행정 청구기한도 함께 챙겨두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>의존 상태</strong> — 알코올 습벽·중독으로 평가되는 정도인지.</li>\n<li><strong>재범 위험</strong> — 반복 횟수·간격 등으로 재범 가능성이 인정되는지.</li>\n<li><strong>치료 필요성</strong> — 강제력 수반 감호 상태 치료가 필요한 정도인지.</li>\n<li><strong>재량 한계</strong> — 치료감호청구 요구 권한의 행사·불행사가 합리적인지.</li>\n<li><strong>양형·행정</strong> — 치료 의지·반성과 면허 처분 다툼.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>국민권익위 중앙행정심판위 110 (처분 안 날부터 90일)</strong></li>\n<li><strong>경찰 민원 182</strong></li>\n<li><strong>도로교통공단 1577-1120</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 치료감호청구 요구의 재량과 그 내재적 한계',
        summary:
          '대법원 2024도9537(대법원, 2024.12.26 선고) 영역에서 법원은 치료감호 등에 관한 법률상 법원이 공소제기된 사건의 심리 결과 치료감호를 할 필요가 있다고 인정할 때 검사에게 치료감호청구를 요구할 수 있는데 그 요구 여부는 원칙적으로 법관의 재량에 속하지만, 심리 결과 피고인의 재범 가능성과 아울러 일정한 강제력을 수반하는 감호 상태에서 치료받아야 할 필요성에 관한 구체적인 사정이 명백하게 확인되었는데도 그러한 요구 권한을 행사하지 아니한 것이 매우 불합리하다고 인정되는 경우에는 그러한 권한의 불행사가 재량의 한계를 현저하게 벗어난 것으로 위법하다고 판시했습니다. 반복 음주운전·알코올 의존 사안에서도 치료감호 절차와 재범 위험·치료 필요성을 검토해볼 수 있습니다.',
        takeaway: '반복 음주운전 + 알코올 의존 + 치료감호 결합 시 치료감호 재량·재범 위험 평가 검토 영역 — 전력 이력·의존 진단·치료 의지·양형 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '검사가 청구하지 않았는데 치료감호가 부과되나요?',
        answer:
          '<strong>법원이 검사에게 치료감호청구를 요구할 수 있는 영역입니다.</strong> 의존 상태·재범 위험 관련 자료를 정리.',
      },
      {
        question: '치료감호청구 요구는 꼭 해야 하는 건가요?',
        answer:
          '<strong>원칙적으로 법관의 재량이나 불행사가 매우 불합리하면 위법할 수 있는 영역입니다.</strong> 치료 필요성·재범 위험을 함께 점검.',
      },
      {
        question: '재범 위험은 어떻게 다투나요?',
        answer:
          '<strong>반복 횟수·간격·정황과 치료 노력으로 다투는 영역입니다.</strong> 자발적 치료·금주 자료를 준비.',
      },
      {
        question: '치료 의지는 어떻게 보여주나요?',
        answer:
          '<strong>전문의 진단·상담·금주 프로그램 참여로 보여주는 영역입니다.</strong> 참여 이력·계획을 자료로 정리.',
      },
      {
        question: '면허 취소도 같이 다퉈야 하나요?',
        answer:
          '<strong>반복 음주운전은 면허 처분으로 이어지기 쉬워 행정심판을 별도로 검토하는 영역입니다.</strong> 처분 통지서·90일 청구기한을 점검.',
      },
    ],
    cta: { text: '탄원서와 감경 요소, AI로 먼저 정리하기', link: '/chat?domain=dui' },
    internalLinks: [
      { label: '음주운전 도메인 허브', href: '/guide/dui' },
      { label: '음주운전 반복 가중처벌', href: '/guide/dui/dui-repeat-aggravation-track' },
      { label: '음주운전 양형·감경', href: '/guide/dui/dui-sentencing-mitigation-factors' },
      { label: '음주운전 행정심판 절차', href: '/guide/dui/dui-administrative-appeal-procedure' },
      { label: '면허취소·정지 기준', href: '/guide/dui/dui-license-revocation-suspension-standard' },
    ],
  },

  // ─── 8. jeonse-fraud-corporate-lease-employee-opposing-power-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-corporate-lease-employee-opposing-power-track',
    keyword: '법인 임차 직원 거주 대항력',
    questionKeyword: '회사(법인) 명의로 전세계약을 하고 제가 직원으로 그 집에 들어가 살며 전입신고를 했는데, 집이 깡통전세라 보증금이 걱정됩니다. 법인이 빌린 집에 직원이 사는 경우에도 대항력이 인정되는지, 제 보증금은 어떻게 정리해야 하는지 막막합니다.',
    ctaKeyword: '법인 임차 직원 거주 대항력·보증금 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '법인 임차 직원 거주 — 5단계 대항력 점검 | 로앤가이드',
      description:
        '회사 명의 전세에 직원으로 거주 중인데 보증금이 걱정된다면 주택임대차보호법 제3조 제3항 법인 임차 직원 대항력 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"제가 다니는 회사(법인)가 직원 주거용으로 주택을 전세로 임차하고, 그 법인이 선정한 직원인 제가 그 집을 인도받아 들어가 살며 전입신고를 마친 임차인 측 거주자입니다. 그런데 알고 보니 선순위 권리가 많아 보증금이 시세에 육박하는 깡통전세였고, 집이 경매로 넘어갈 위험이 보입니다. 계약 명의는 회사이고 실제 거주자는 직원인 제 경우에도 주택임대차보호법상 대항력이 인정되는지, 회사 명의라서 보호를 못 받는 것은 아닌지, 대표이사나 등기 임원이 들어가 사는 경우와는 다른 건지 헷갈립니다. 보증금을 회수하려면 대항요건·우선변제권을 어떻게 챙겨야 하는지, 어디부터 정리해야 하는지 막막한 상태입니다." 주택임대차보호법 제3조 제3항은 중소기업기본법상 중소기업에 해당하는 법인이 소속 직원의 주거용으로 주택을 임차한 후 그 법인이 선정한 직원이 주택을 인도받고 주민등록을 마쳤을 때 그다음 날부터 제3자에 대해 효력이 생긴다고 정하는 영역입니다. 판례·실무는 이때의 \'직원\'은 법인이 주식회사라면 법인등기사항증명서에 대표이사 또는 사내이사로 등기된 임원을 제외한 사람을 의미하고, 그 범위의 직원이 임차한 주택을 인도받아 주민등록을 마치고 거주하고 있으면 이로써 대항력을 갖춘 것으로 보아야 한다고 보는 본 사례 흐름이 있는 영역입니다. 법인 임차 + 직원 거주 + 깡통전세 결합은 \'법인 임차·직원 거주 대항력\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 대항요건 ② 직원 범위 ③ 우선변제권 ④ 회수 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 대항 ② 직원 ③ 변제권 ④ 회수 ⑤ 대응 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 법인 임차 직원 거주 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 대항요건·직원 범위·우선변제권·회수·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 대항요건</strong> — 법인 임차 후 선정 직원이 주택 인도·전입을 마쳤는지 정리.</li>\n<li><strong>② 직원 범위</strong> — 거주자가 대표이사·사내이사 등 임원을 제외한 직원인지 정리.</li>\n<li><strong>③ 우선변제권</strong> — 확정일자·대항요건으로 우선변제권 인정 범위 정리.</li>\n<li><strong>④ 회수</strong> — 배당요구·우선변제·잔여 권리 등 회수 경로 정리.</li>\n<li><strong>⑤ 대응</strong> — 깡통전세·가장 임대차 등 다툼과 형사·민사 대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 중소기업 법인이 직원 주거용으로 주택을 임차하고 그 법인이 선정한 직원(대표이사·사내이사 등 임원 제외)이 주택을 인도받아 주민등록을 마치고 거주하면 그것만으로 대항력을 갖춘 것으로 볼 수 있는 영역. 임차 명의·직원 지위와 전입·확정일자를 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·법원·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·배당 자료 확인 (즉시)</strong> — 등기부·확정일자·전입, 시세·선순위 규모와 배당 가능성 점검.</li>\n<li><strong>2단계 — 대항요건·직원 범위 정리 (수일 내)</strong> — 법인 임차·선정 직원 지위와 임원 해당 여부, 인도·전입 경위 확인.</li>\n<li><strong>3단계 — 우선변제권 정리 (가능한 빨리)</strong> — 확정일자·대항요건으로 우선변제권 인정 범위 정리.</li>\n<li><strong>4단계 — 배당요구·회수 정리 (종기 내/병행)</strong> — 경매 배당요구·우선변제·잔여 권리 등 회수 경로 정리.</li>\n<li><strong>5단계 — 잔액 처리·지원 (병행)</strong> — 미회수 잔액 처리, 형사 고소·전세피해 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">법인 임차 직원 거주 대항력·보증금 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 대항요건·직원 범위·우선변제권 갈래입니다.</strong></p>\n<ul>\n<li><strong>법인 명의 전세(임대차)계약서 (확정일자 포함)</strong></li>\n<li><strong>거주 직원 주민등록등본·전입세대 확인서 (대항요건)</strong></li>\n<li><strong>법인 선정 직원 증빙·재직 자료 (직원 지위)</strong></li>\n<li><strong>법인등기사항증명서 (임원 해당 여부 확인)</strong></li>\n<li><strong>부동산등기부등본 (근저당·소유관계)</strong></li>\n<li><strong>시세·감정가 자료 (깡통전세·배당 가능성)</strong></li>\n<li><strong>보증금 송금 내역·계약 경위 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 중소기업 법인이 직원 주거용으로 임차하고 법인이 선정한 직원(대표이사·사내이사 등 임원 제외)이 주택을 인도받아 주민등록을 마치고 거주하면 그것만으로 대항력을 갖춘 것으로 볼 여지가 있으므로, 거주자가 등기 임원이 아닌 직원임을 법인등기·재직 자료로 정리하고 전입·확정일자를 챙겨두는 것이 핵심입니다. 깡통전세 여부는 시세·선순위 규모로 함께 점검해두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>법인 임차 대항력</strong> — 법인 명의 임차에 직원 거주로 대항력이 인정되는지.</li>\n<li><strong>직원 범위</strong> — 거주자가 임원을 제외한 직원에 해당하는지.</li>\n<li><strong>우선변제권</strong> — 확정일자·대항요건으로 우선변제권이 인정되는지.</li>\n<li><strong>깡통전세</strong> — 선순위 규모와 배당 순위·잔여 회수 가능성.</li>\n<li><strong>회수 경로</strong> — 배당요구·우선변제·형사 고소 등.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 법인이 임차한 주택에 직원이 거주하는 경우의 대항력',
        summary:
          '대법원 2023다226866(대법원, 2023.12.14 선고) 영역에서 법원은 주택임대차보호법 제3조 제3항에 따라 중소기업기본법상 중소기업인 법인이 소속 직원의 주거용으로 주택을 임차한 후 법인이 선정한 직원이 주택을 인도받고 주민등록을 마쳤을 때 그다음 날부터 제3자에 대해 효력이 생기는데, 여기서 말하는 \'직원\'은 해당 법인이 주식회사라면 법인등기사항증명서에 대표이사 또는 사내이사로 등기된 사람을 제외한 사람을 의미하고, 위와 같은 범위의 임원을 제외한 직원이 법인이 임차한 주택을 인도받아 주민등록을 마치고 거주하고 있다면 이로써 위 조항에서 정한 대항력을 갖추었다고 보아야 한다고 판시했습니다. 법인 임차 직원 거주 사안에서도 직원의 거주로 대항력이 인정되는지를 검토해볼 수 있습니다.',
        takeaway: '법인 임차 + 직원 거주 + 깡통전세 결합 시 법인 임차·직원 거주 대항력 검토 영역 — 계약 명의·직원 지위·법인등기·전입·확정일자 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '회사 명의로 빌린 집에 직원이 살아도 대항력이 있나요?',
        answer:
          '<strong>중소기업 법인이 직원 주거용으로 임차하고 선정 직원이 거주하면 대항력이 인정될 여지가 있는 영역입니다.</strong> 직원 지위·전입을 정리.',
      },
      {
        question: '대표이사가 사는 경우와 다른가요?',
        answer:
          '<strong>대표이사·사내이사 등 등기 임원은 여기서 말하는 직원에서 제외되는 영역입니다.</strong> 법인등기로 임원 여부를 확인.',
      },
      {
        question: '확정일자도 받아야 하나요?',
        answer:
          '<strong>우선변제권을 위해 확정일자·대항요건이 함께 중요한 영역입니다.</strong> 계약서 확정일자와 전입을 챙기기.',
      },
      {
        question: '집이 깡통전세인데 보증금은 어떻게 되나요?',
        answer:
          '<strong>선순위 규모·배당 가능성으로 회수 여부를 점검하는 영역입니다.</strong> 시세·등기부·배당표를 함께 확인.',
      },
      {
        question: '회수는 어디서 도움을 받나요?',
        answer:
          '<strong>법률구조공단(132)에서 대항력·우선변제 관련 무료 상담을 받아볼 수 있는 영역입니다.</strong> 전세피해지원센터(1533-8119)도 함께 활용.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 도메인 허브', href: '/guide/jeonse-fraud' },
      { label: '대항력·우선변제권 유지', href: '/guide/jeonse-fraud/jeonse-fraud-opposing-power-fixed-date' },
      { label: '전입 유지·우선변제', href: '/guide/jeonse-fraud/jeonse-fraud-resident-registration-maintain-priority-track' },
      { label: '경매 배당요구 절차', href: '/guide/jeonse-fraud/jeonse-fraud-auction-distribution-claim' },
      { label: '보증금반환소송', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-return-lawsuit' },
    ],
  },

  // ─── 9. jeonse-fraud-trust-property-broker-explanation-duty-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-trust-property-broker-explanation-duty-track',
    keyword: '신탁부동산 전세 중개 설명의무',
    questionKeyword: '중개사를 통해 전세계약을 했는데 알고 보니 그 집이 신탁회사에 신탁된 부동산이었어요. 중개사가 신탁관계와 그 의미를 제대로 설명해주지 않아 보증금이 위험해졌습니다. 중개사에게 설명의무 위반 책임을 물을 수 있는지, 어디부터 정리해야 하는지 막막합니다.',
    ctaKeyword: '신탁부동산 전세 중개 설명의무·책임 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '신탁부동산 전세 — 5단계 중개 설명의무 점검 | 로앤가이드',
      description:
        '신탁부동산인 줄 모르고 전세계약했는데 보증금이 위험해 걱정된다면 공인중개사법 설명의무와 신탁원부 제시 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"공인중개사를 통해 전세계약을 했는데, 계약 이후에야 그 주택이 신탁회사 앞으로 신탁등기가 되어 있는 신탁부동산이었다는 사실을 알게 된 임차인입니다. 신탁부동산은 형식상 소유자가 신탁회사이고 위탁자(임대인)가 임의로 임대할 권한이 제한될 수 있어, 신탁관계와 그 법적 의미를 제대로 모른 채 계약하면 보증금을 돌려받기 어려워질 수 있습니다. 그런데 중개사는 신탁등기 사실이나 신탁원부의 의미, 임대 권한 제한 같은 내용을 제대로 설명해주지 않았고, 저는 그 위험을 모른 채 계약해 보증금이 위태로워졌어요. 이런 경우 신탁관계를 제대로 설명하지 않은 중개사에게 설명의무 위반에 따른 책임을 물을 수 있는지, 보증금 회수와 함께 어디부터 정리해야 하는지 막막한 상태입니다." 공인중개사법 제25조 제1항은 중개대상물의 권리관계 등을 확인해 성실·정확하게 설명하고 근거자료를 제시할 의무를, 같은 법 제30조 제1항은 고의·과실로 거래당사자에게 재산상 손해를 발생하게 한 때의 손해배상책임을 정하는 영역입니다. 판례·실무는 신탁관계가 설정된 부동산에 관해 임대차계약을 중개하는 공인중개사는 선량한 관리자의 주의와 신의성실로써 신탁관계를 조사·확인해 중개의뢰인에게 신탁원부를 제시하고 신탁관계 설정 사실 및 그 법적 의미와 효과 등을 성실·정확하게 설명할 의무가 있다고 보는 본 사례 흐름이 있는 영역입니다. 신탁부동산 + 설명 누락 + 보증금 위험 결합은 \'신탁관계 설명의무·중개 책임\' 다툼이 검토될 수 있는 트랙입니다. 피해자라면 ① 신탁관계 ② 설명의무 ③ 중개 책임 ④ 회수 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 신탁 ② 설명 ③ 책임 ④ 회수 ⑤ 대응 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 신탁부동산 전세 중개 설명의무 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 신탁관계·설명의무·중개 책임·회수·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 신탁관계</strong> — 신탁등기·신탁원부와 임대 권한 제한 여부 정리.</li>\n<li><strong>② 설명의무</strong> — 중개사가 신탁원부 제시·신탁관계 의미를 설명했는지 정리.</li>\n<li><strong>③ 중개 책임</strong> — 설명의무 위반과 손해 사이 인과·책임 범위 정리.</li>\n<li><strong>④ 회수</strong> — 보증금 회수 경로와 손해배상·공제·보증 등 정리.</li>\n<li><strong>⑤ 대응</strong> — 임대인·중개사 상대 형사·민사 대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 신탁관계가 설정된 부동산을 중개하는 공인중개사는 신탁관계를 조사·확인해 신탁원부를 제시하고 신탁관계 설정 사실과 그 법적 의미·효과를 성실·정확하게 설명할 의무가 있는 영역. 신탁등기·신탁원부와 설명 누락 경위를 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·법원·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·신탁 자료 확인 (즉시)</strong> — 등기부·신탁원부, 신탁등기·임대 권한 제한 여부와 보증금 위험 점검.</li>\n<li><strong>2단계 — 설명의무 정리 (수일 내)</strong> — 중개대상물 확인·설명서와 신탁원부 제시·설명 여부 확인.</li>\n<li><strong>3단계 — 중개 책임 정리 (가능한 빨리)</strong> — 설명의무 위반과 손해 사이 인과·책임 범위 정리.</li>\n<li><strong>4단계 — 회수·배상 정리 (병행)</strong> — 보증금 회수 경로와 손해배상·공제·보증 등 정리.</li>\n<li><strong>5단계 — 형사·민사 대응 (병행)</strong> — 임대인·중개사 상대 고소·손해배상, 전세피해 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 보증금 돌려받을 수 있는지 AI로 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">신탁부동산 전세 중개 설명의무·책임 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 신탁관계·설명의무·중개 책임 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서·특약사항 (확정일자 포함)</strong></li>\n<li><strong>부동산등기부등본·신탁원부 (신탁관계 확인)</strong></li>\n<li><strong>중개대상물 확인·설명서 (설명 내용·근거자료)</strong></li>\n<li><strong>중개 경위·설명 누락 관련 자료 (의무 위반 다툼)</strong></li>\n<li><strong>주민등록등본·전입세대 확인서 (대항요건)</strong></li>\n<li><strong>공제증서·보증 관련 자료 (배상·회수)</strong></li>\n<li><strong>보증금 송금 내역·계약 경위 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 신탁관계가 설정된 부동산을 중개하는 공인중개사는 신탁원부를 제시하고 신탁관계 설정 사실과 그 법적 의미·효과를 성실·정확하게 설명할 의무가 있으므로, 신탁등기·신탁원부와 중개대상물 확인·설명서에 신탁관계가 어떻게 기재·설명됐는지를 정리해두는 것이 핵심입니다. 공제증서·보증 자료는 손해배상·회수를 위해 함께 챙겨두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>신탁관계</strong> — 신탁등기·임대 권한 제한이 보증금 위험에 미치는 영향.</li>\n<li><strong>설명의무</strong> — 중개사가 신탁원부 제시·신탁관계 의미를 설명했는지.</li>\n<li><strong>중개 책임</strong> — 설명의무 위반과 손해 사이 인과·책임 범위.</li>\n<li><strong>회수 경로</strong> — 보증금 회수와 손해배상·공제·보증.</li>\n<li><strong>형사·민사</strong> — 임대인·중개사 상대 대응.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 신탁부동산 임대차 중개와 공인중개사의 설명의무',
        summary:
          '대법원 2023다224327(대법원, 2023.08.31 선고) 영역에서 법원은 부동산중개업자와 중개의뢰인의 법률관계가 위임관계와 유사하므로 중개의뢰를 받은 중개업자는 선량한 관리자의 주의로 중개대상물의 권리관계 등을 조사·확인해 설명할 의무가 있고, 공인중개사법령상 중개대상물의 상태·입지·권리관계 등을 확인해 성실·정확하게 설명하고 근거자료를 제시하여야 하며, 신탁관계가 설정된 부동산에 관해 임대차계약을 중개하는 공인중개사로서는 선량한 관리자의 주의와 신의성실로써 신탁관계에 관한 조사·확인을 거쳐 중개의뢰인에게 신탁원부를 제시하고 신탁관계 설정 사실 및 그 법적인 의미와 효과를 성실·정확하게 설명할 의무가 있다고 판시했습니다. 신탁부동산 전세 사안에서도 중개사의 신탁관계 설명의무 위반과 책임을 검토해볼 수 있습니다.',
        takeaway: '신탁부동산 + 설명 누락 + 보증금 위험 결합 시 신탁관계 설명의무·중개 책임 검토 영역 — 신탁원부·확인설명서·중개 경위·공제 자료 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '신탁부동산인 줄 모르고 계약했는데 책임을 물을 수 있나요?',
        answer:
          '<strong>중개사가 신탁관계 설명의무를 다했는지가 책임의 쟁점이 되는 영역입니다.</strong> 신탁원부·확인설명서를 먼저 확인.',
      },
      {
        question: '중개사가 어디까지 설명했어야 하나요?',
        answer:
          '<strong>신탁원부 제시와 신탁관계 의미·효과를 성실·정확하게 설명할 의무가 있는 영역입니다.</strong> 설명 누락 경위를 정리.',
      },
      {
        question: '신탁원부는 왜 중요한가요?',
        answer:
          '<strong>임대 권한 제한 등 보증금 위험을 보여주는 핵심 자료가 되는 영역입니다.</strong> 등기부와 함께 신탁원부를 확보.',
      },
      {
        question: '보증금은 어떻게 회수하나요?',
        answer:
          '<strong>회수 경로와 함께 중개 과실에 따른 손해배상·공제를 검토하는 영역입니다.</strong> 공제증서·송금 내역을 정리.',
      },
      {
        question: '회수는 어디서 도움을 받나요?',
        answer:
          '<strong>법률구조공단(132)에서 설명의무·손해배상 관련 무료 상담을 받아볼 수 있는 영역입니다.</strong> 전세피해지원센터(1533-8119)도 함께 활용.',
      },
    ],
    cta: { text: '보증금 돌려받을 수 있는지 AI로 점검하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 도메인 허브', href: '/guide/jeonse-fraud' },
      { label: '신탁부동산 보증금 회수', href: '/guide/jeonse-fraud/jeonse-fraud-trust-property-deposit-recovery-track' },
      { label: '중개사 책임·설명의무', href: '/guide/jeonse-fraud/jeonse-fraud-broker-liability' },
      { label: '대항력·우선변제권 유지', href: '/guide/jeonse-fraud/jeonse-fraud-opposing-power-fixed-date' },
      { label: '보증금반환소송', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-return-lawsuit' },
    ],
  },

  // ─── 10. jeonse-fraud-broker-assistant-officetel-employer-liability-track ───
  {
    domain: 'jeonse-fraud',
    slug: 'jeonse-fraud-broker-assistant-officetel-employer-liability-track',
    keyword: '중개보조원 보증금 횡령 사용자책임',
    questionKeyword: '오피스텔 임대차를 중개보조원이 사실상 도맡아 진행했는데, 그 보조원이 새 보증금으로 전 임차인에게만 돌려주거나 가로채는 식으로 제 보증금을 빼돌렸어요. 공인중개사 본인은 \'보조원이 한 일\'이라며 발뺍니다. 중개사에게 사용자책임을 물을 수 있는지 막막합니다.',
    ctaKeyword: '중개보조원 보증금 횡령 사용자책임·회수 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '중개보조원 보증금 횡령 — 5단계 사용자책임 점검 | 로앤가이드',
      description:
        '중개보조원이 보증금을 빼돌렸는데 공인중개사가 발뺀다면 민법 제756조 사용자책임과 지휘·감독 관계 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오피스텔 등의 임대차를 진행하면서, 공인중개사 본인보다 사실상 중개보조원이 계약·보증금 수수·반환 과정을 도맡아 처리한 임차인입니다. 그런데 그 중개보조원이 새로 들어온 임차인의 보증금을 전 임차인에게만 돌려주거나 임대인에게 전달하지 않고 빼돌리는 식으로 제 보증금을 가로챘습니다. 공인중개사 본인은 \'그건 보조원이 개인적으로 한 일이고 나는 모른다\'며 책임을 회피하는데, 사실상 그 보조원이 중개사의 일을 계속 처리해 왔고 객관적으로 중개사의 지휘·감독 범위 안에서 한 일이라면 중개사에게도 책임이 있는 것은 아닌지 헷갈립니다. 중개보조원의 횡령에 대해 공인중개사에게 사용자책임을 물을 수 있는지, 보증금 회수와 함께 어디부터 정리해야 하는지 막막한 상태입니다." 민법 제756조 제1항은 타인을 사용하여 어느 사무에 종사하게 한 자가 피용자가 사무집행에 관하여 제3자에게 가한 손해를 배상할 책임을 정하는 영역입니다. 판례·실무는 사용자와 피용자의 관계는 반드시 유효한 고용관계에 한하지 않고 사실상 어떤 사람이 다른 사람을 위하여 그 지휘·감독 아래 사무를 집행하는 관계가 있으면 인정되며, 타인에게 위탁해 계속적으로 사무를 처리해 온 경우 객관적으로 그 타인의 행위가 위탁자의 지휘·감독 범위에 속한다고 보이면 그 타인은 피용자에 해당하고, 실질적 지휘·감독 관계는 실제로 지휘·감독하는지가 아니라 객관적으로 지휘·감독해야 할 관계에 있는지에 따라 결정된다고 보는 본 사례 흐름이 있는 영역입니다. 중개보조원 + 보증금 횡령 + 사용자책임 결합은 \'사용관계·지휘감독·사용자책임\' 검토가 가능한 트랙입니다. 피해자라면 ① 사용관계 ② 사무집행 관련성 ③ 중개 책임 ④ 회수 ⑤ 대응 5중 트랙이 가능한 영역. 대응은 ① 사용 ② 관련성 ③ 책임 ④ 회수 ⑤ 대응 5단계로 검토해볼 수 있습니다. 피해자라면 관련 자료를 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 중개보조원 보증금 횡령 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사용관계·사무집행 관련성·중개 책임·회수·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사용관계</strong> — 중개보조원이 중개사의 지휘·감독 아래 사무를 처리해 왔는지 정리.</li>\n<li><strong>② 사무집행 관련성</strong> — 보증금 수수·반환이 중개 사무집행에 관한 것인지 정리.</li>\n<li><strong>③ 중개 책임</strong> — 사용자책임과 함께 중개사·임대인 책임 범위 정리.</li>\n<li><strong>④ 회수</strong> — 보증금 회수 경로와 손해배상·공제·보증 등 정리.</li>\n<li><strong>⑤ 대응</strong> — 횡령 형사 고소·민사 손해배상 대응 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사용관계는 유효한 고용에 한하지 않고 객관적으로 지휘·감독해야 할 관계가 있으면 인정될 수 있어, 중개보조원이 계속적으로 중개 사무를 처리해 왔다면 그 횡령에 대해 공인중개사가 사용자책임을 질 여지가 있는 영역. 보조원의 처리 범위와 사무집행 관련성을 정리하는 것이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 회수 5단계',
        content:
          '<p><strong>A. 전세피해지원센터·법원·KLAC 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 권리·송금 자료 확인 (즉시)</strong> — 계약서·보증금 송금 내역, 누구에게 어떻게 전달·반환됐는지 점검.</li>\n<li><strong>2단계 — 사용관계 정리 (수일 내)</strong> — 중개보조원이 중개사의 지휘·감독 아래 사무를 처리해 온 경위 확인.</li>\n<li><strong>3단계 — 사무집행 관련성 정리 (가능한 빨리)</strong> — 보증금 수수·반환이 중개 사무집행에 관한 것인지 정리.</li>\n<li><strong>4단계 — 회수·배상 정리 (병행)</strong> — 사용자책임·손해배상·공제·보증 등 회수 경로 정리.</li>\n<li><strong>5단계 — 형사·민사 대응 (병행)</strong> — 횡령 고소·손해배상 청구, 전세피해 지원 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 전세사기 피해 대응 순서, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">중개보조원 보증금 횡령 사용자책임·회수 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=jeonse-fraud" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 사용관계·사무집행 관련성·회수 갈래입니다.</strong></p>\n<ul>\n<li><strong>전세(임대차)계약서·특약사항 (확정일자 포함)</strong></li>\n<li><strong>보증금 송금·전달·반환 내역 (자금 흐름)</strong></li>\n<li><strong>중개보조원 응대·연락·처리 기록 (사용관계)</strong></li>\n<li><strong>중개사무소·중개사 등록·소속 관계 자료 (지휘·감독)</strong></li>\n<li><strong>중개대상물 확인·설명서·중개 경위 자료 (사무집행 관련성)</strong></li>\n<li><strong>공제증서·보증 관련 자료 (배상·회수)</strong></li>\n<li><strong>주민등록등본·전입세대 확인서 (대항요건)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사용관계는 유효한 고용에 한정되지 않고 객관적으로 지휘·감독해야 할 관계가 있으면 인정될 수 있어, 중개보조원이 계속적으로 중개사의 사무를 처리해 왔다면 그 횡령에 대해 공인중개사가 사용자책임을 질 여지가 있으므로 보조원의 응대·처리 기록과 자금 흐름을 정리해두는 것이 핵심입니다. 공제증서·보증 자료는 손해배상·회수를 위해 함께 챙겨두는 것이 안전한 영역입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사용관계</strong> — 중개보조원이 중개사의 지휘·감독 아래 사무를 처리했는지.</li>\n<li><strong>사무집행 관련성</strong> — 보증금 횡령이 중개 사무집행에 관한 것인지.</li>\n<li><strong>사용자책임</strong> — 공인중개사가 보조원 행위에 책임을 지는지.</li>\n<li><strong>회수 경로</strong> — 보증금 회수와 손해배상·공제·보증.</li>\n<li><strong>형사·민사</strong> — 횡령 고소·손해배상 대응.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>HUG 주택도시보증공사 1566-9009</strong></li>\n<li><strong>전세피해지원센터 1533-8119</strong></li>\n<li><strong>주택임대차분쟁조정위원회 (klac.or.kr)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 중개보조원의 행위와 공인중개사의 사용자책임',
        summary:
          '대법원 2021다283834(대법원, 2022.02.11 선고) 영역에서 법원은 민법 제756조의 사용자와 피용자의 관계는 반드시 유효한 고용관계가 있는 경우에 한하지 않고 사실상 어떤 사람이 다른 사람을 위하여 그 지휘·감독 아래 그 의사에 따라 사무를 집행하는 관계가 있으면 인정되며, 타인에게 위탁하여 계속적으로 사무를 처리하여 온 경우 객관적으로 그 타인의 행위가 위탁자의 지휘·감독 범위 내에 속한다고 보이면 그 타인은 피용자에 해당하고, 실질적 지휘·감독 관계는 실제로 지휘·감독하느냐가 아니라 객관적으로 지휘·감독을 하여야 할 관계에 있느냐에 따라 결정된다고 보아, 중개보조인 등이 오피스텔 임대차에서 임대차보증금 반환 등의 사무를 주도적으로 처리해 온 사안에서 사용자책임 등 관련 법리를 판시했습니다. 중개보조원 보증금 횡령 사안에서도 공인중개사의 사용자책임을 검토해볼 수 있습니다.',
        takeaway: '중개보조원 + 보증금 횡령 + 사용자책임 결합 시 사용관계·지휘감독·사용자책임 검토 영역 — 자금 흐름·응대 기록·소속 관계·공제 자료 정리 후 변호인 상담 권장.',
      },
    ],
    faq: [
      {
        question: '보조원이 한 일이라며 중개사가 발뺍니다. 책임을 물을 수 있나요?',
        answer:
          '<strong>지휘·감독 범위 안의 사무였다면 공인중개사가 사용자책임을 질 여지가 있는 영역입니다.</strong> 보조원의 처리 경위를 정리.',
      },
      {
        question: '정식 고용이 아니어도 사용자책임이 인정되나요?',
        answer:
          '<strong>유효한 고용에 한하지 않고 객관적 지휘·감독 관계면 인정될 여지가 있는 영역입니다.</strong> 응대·연락 기록을 확보.',
      },
      {
        question: '보증금 횡령도 사무집행에 관한 것으로 보나요?',
        answer:
          '<strong>보증금 수수·반환이 중개 사무집행에 관한 것인지가 쟁점이 되는 영역입니다.</strong> 자금 흐름·계약 경위를 정리.',
      },
      {
        question: '보증금은 어떻게 회수하나요?',
        answer:
          '<strong>사용자책임·손해배상과 공제·보증으로 회수를 검토하는 영역입니다.</strong> 공제증서·송금 내역을 확보.',
      },
      {
        question: '회수는 어디서 도움을 받나요?',
        answer:
          '<strong>법률구조공단(132)에서 사용자책임·손해배상 관련 무료 상담을 받아볼 수 있는 영역입니다.</strong> 전세피해지원센터(1533-8119)도 함께 활용.',
      },
    ],
    cta: { text: '전세사기 피해 대응 순서, AI로 정리하기', link: '/chat?domain=jeonse-fraud' },
    internalLinks: [
      { label: '전세사기 도메인 허브', href: '/guide/jeonse-fraud' },
      { label: '중개사 책임·설명의무', href: '/guide/jeonse-fraud/jeonse-fraud-broker-liability' },
      { label: '중개사 횡령·공모 대응', href: '/guide/jeonse-fraud/jeonse-fraud-agent-embezzlement-track' },
      { label: '대항력·우선변제권 유지', href: '/guide/jeonse-fraud/jeonse-fraud-opposing-power-fixed-date' },
      { label: '보증금반환소송', href: '/guide/jeonse-fraud/jeonse-fraud-deposit-return-lawsuit' },
    ],
  },
];
