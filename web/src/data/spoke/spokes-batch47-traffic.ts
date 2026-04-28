import { SpokePage } from '../spoke-pages';

// batch47 traffic 5개: traffic-accident victim
//
// 고유 존재 이유 (각 페이지가 돕는 사용자·상황·준비):
// 1. 이 페이지는 주차장에서 기둥·벽에 충돌한 운전자가 자차보험·상대방 과실 분담 책임을 정리하도록 돕는 페이지다.
// 2. 이 페이지는 긴급차량에 길을 양보하지 못해 사고가 난 피해자가 도로교통법 위반 여부와 보상 절차를 정리하도록 돕는 페이지다.
// 3. 이 페이지는 야간에 무단횡단하던 보행자를 충돌한 운전자가 과실 분담과 형사처벌 가능성을 정리하도록 돕는 페이지다.
// 4. 이 페이지는 저속 추돌 후 뒤늦게 나타난 후유증으로 추가 배상을 청구하려는 피해자가 절차를 정리하도록 돕는 페이지다.
// 5. 이 페이지는 동승 중 부상을 입은 탑승자가 운전자·보험사에 손해배상을 청구하는 절차를 정리하도록 돕는 페이지다.

export const spokesBatch47Traffic: SpokePage[] = [
  // ─── 1. traffic-accident / parking-pillar-fault (Q&A형) ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-parking-pillar-fault',
    keyword: '주차장 기둥 충돌 책임',
    questionKeyword: '주차장에서 기둥에 부딪혔는데 보험 처리와 과실은 어떻게 되나요?',
    ctaKeyword: '주차장 사고 책임 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '주차장 기둥 충돌 과실과 보험 처리 4가지 정리 | 로앤가이드',
      description:
        '주차장 기둥·벽 충돌 사고의 과실 분담과 자차보험·상대방 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>주차장에서 기둥을 스치거나 좁은 통로에서 벽에 긁혔을 때 "내 과실 100%인가, 주차장 관리 책임은 없나?"라는 의문이 생깁니다. 주차장 내부 사고는 일반 도로 사고와 과실 산정 기준이 달라 놓치기 쉬운 청구 포인트가 있습니다. 사고 당시 사진과 주차장 관리 규정 확보가 초기 대응의 핵심입니다.</p>',
    sections: [
      {
        title: 'Q. 주차장 기둥 충돌은 과실이 몇 %인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 기본은 본인 과실이지만 주차장 구조 결함이 있으면 관리자 책임을 일부 물을 수 있습니다.</strong></p>\n<ul>\n<li><strong>단순 접촉</strong> — 통상 운전자 과실 80~100%, 시야 방해·조명 불량 등 관리 결함이 있으면 관리자 20~40% 분담 가능성 검토.</li>\n<li><strong>기둥 표시 미흡</strong> — 야광 테이프·보호대 없는 기둥은 주차장법 시행규칙 제6조상 안전시설 의무 위반으로 관리자 책임 소지가 있습니다.</li>\n<li><strong>상대 차량 동시 과실</strong> — 통로를 역주행하거나 전조등 미등으로 들어온 다른 차량과 충돌이면 쌍방과실 산정.</li>\n<li><strong>CCTV 확보</strong> — 72시간 안에 주차장 관리사무소에 CCTV 영상 보존 요청을 서면으로 해야 합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 기둥 보호대 유무·조명 상태를 현장 사진으로 남겨두면 관리자 책임 주장의 근거가 됩니다.</blockquote>',
      },
      {
        title: 'Q. 자차보험과 대물배상 중 어떤 것을 써야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 상대방이 없으면 자차보험, 상대 차량과 충돌이면 대물배상과 자차보험을 함께 검토합니다.</strong></p>\n<ul>\n<li><strong>단독 사고</strong> — 자차보험(자기차량손해) 처리, 자기부담금(통상 20만~50만 원) 공제 후 수리비 지급.</li>\n<li><strong>쌍방 충돌</strong> — 대물배상보험으로 상대 차량 수리비 처리, 내 차는 자차보험 또는 상대 보험사 청구 병행.</li>\n<li><strong>자기부담금 별도 청구</strong> — 대법원 2022다287284 판결에 따라 자기부담금 중 상대방 책임비율에 해당하는 금액은 피보험자가 상대방에게 별도로 청구할 수 있습니다.</li>\n<li><strong>주차장 관리자 청구</strong> — 관리 결함이 인정되면 주차장법 제23조에 따른 손해배상 청구 가능.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 사고 처리 순서, AI로 바로 정리해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">주차장 사고 과실 분담과 청구 절차를 AI가 상황별로 안내해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 주차장 관리자에게 손해배상을 청구하려면 어떤 서류가 필요한가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 사진·CCTV·관리 규정·수리견적 4종을 기본으로 준비합니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 사진·동영상</strong> — 기둥·벽 상태, 조명·표시 여부, 내 차 파손 부위 즉시 촬영.</li>\n<li><strong>2단계 — CCTV 보존 요청</strong> — 72시간 내 서면(문자·이메일 포함) 으로 요청, 파기 방지.</li>\n<li><strong>3단계 — 수리견적서</strong> — 복수 견적 받아 최저·최고 금액 비교 자료 확보.</li>\n<li><strong>4단계 — 주차관리 약관·안전규정</strong> — 주차권·영수증에 기재된 관리자 면책조항 확인 후 공정거래위원회 표준약관과 대조.</li>\n<li><strong>5단계 — 내용증명 발송</strong> — 관리자에게 손해배상 청구 내용증명 → 30일 내 회신 없으면 소액심판 검토.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 관리자 약관에 "주차 중 차량 손상은 책임 없음"이라고 적혀 있어도 관리 과실이 있으면 그 조항은 효력이 제한될 소지가 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 주차장 사고 처리 흐름',
        content:
          '<p><strong style="color:#1e3a5f">보험사·관리자·법원 단계별로 진행 흐름을 정리해두면 놓치는 포인트가 줄어듭니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장 보존 (사고 당일)</strong> — 사진·CCTV 요청·목격자 연락처 확보.</li>\n<li><strong>2단계 — 보험사 접수 (3일 내)</strong> — 자차보험 또는 대물배상 접수, 과실 비율 협의 시작.</li>\n<li><strong>3단계 — 관리자 협의 (2주 내)</strong> — 관리 결함 근거 제시 후 손해배상 청구 내용증명.</li>\n<li><strong>4단계 — 분쟁조정 (1~2개월)</strong> — 합의 불성립 시 손해보험협회 분쟁조정위원회 신청(무료) 또는 소액심판.</li>\n<li><strong>5단계 — 소송 (필요 시)</strong> — 청구액 2,000만 원 이하면 소액심판, 이상이면 민사소송.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 주차장 사고 처리, 상황별로 점검해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 쌍방과실 교통사고에서 자기부담금 별도 청구 가능 여부',
        summary:
          '대법원 2022다287284 사건(대법원, 2026.01.29 선고)에서 법원은 자기차량손해보험에서 보험자가 보험금을 지급한 경우에도 피보험자는 자기부담금 중 상대방의 책임비율에 해당하는 금액을 상대방에게 별도로 청구할 수 있다고 판시했습니다.',
        takeaway: '자기부담금이 발생했더라도 상대방 과실비율만큼은 직접 청구할 수 있는 길이 있습니다.',
      },
    ],
    faq: [
      {
        question: '주차장 기둥 충돌은 보험료에 영향을 미치나요?',
        answer:
          '<strong>자차보험 처리 시 할증 등급이 올라 이듬해 보험료가 오를 수 있습니다.</strong> 수리비가 자기부담금과 비슷하다면 자비 처리가 유리한 경우도 있어요.',
      },
      {
        question: '블랙박스가 없어도 관리자 책임을 물을 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> CCTV 영상·현장 사진·관리 일지로도 관리 결함을 입증할 수 있어요. 72시간 내 CCTV 보존 요청이 핵심입니다.',
      },
      {
        question: '주차장 약관에 "차량 손상은 책임 없음"이라고 되어 있으면 못 받나요?',
        answer:
          '<strong>관리 과실이 있으면 그 면책 조항이 제한될 소지가 있습니다.</strong> 공정거래위원회 표준약관과 비교해 불공정 약관으로 다툴 수 있어요.',
      },
      {
        question: '소액심판은 어디에 신청하나요?',
        answer:
          '<strong>청구액이 3,000만 원 이하이면 관할 지방법원 민사신청 창구에 접수합니다.</strong> 변호사 없이도 직접 신청 가능하고 처리기간은 통상 2~3개월입니다.',
      },
      {
        question: '수리 중 렌트비도 청구할 수 있나요?',
        answer:
          '<strong>상대방 과실이 있으면 수리 기간 동안 대차 비용을 청구할 수 있습니다.</strong> 동급 차종 기준 렌트비 영수증을 보관해두는 것이 좋아요.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의 전 준비서류', href: '/guide/traffic-accident/traffic-accident-settlement-documents' },
      { label: '쌍방과실 비율 다툼 방법', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '자차보험 자기부담금 청구', href: '/guide/traffic-accident/traffic-accident-self-deductible-claim' },
      { label: '소액심판 신청 절차', href: '/guide/traffic-accident/traffic-accident-small-claims-procedure' },
      { label: '교통사고 후유증 추가 청구', href: '/guide/traffic-accident/traffic-accident-low-speed-rear-end-aftereffect' },
    ],
  },

  // ─── 2. traffic-accident / emergency-vehicle-yield-fail (절차형) ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-emergency-vehicle-yield-fail',
    keyword: '긴급차량 양보 위반 사고',
    questionKeyword: '긴급차량에 길을 못 열어줬는데 사고가 나면 내 책임이 더 큰가요?',
    ctaKeyword: '긴급차량 양보 사고 책임 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '긴급차량 양보 위반 사고 과실과 처리 절차 5단계 | 로앤가이드',
      description:
        '소방차·구급차에 길을 양보하지 못해 사고가 났을 때 도로교통법 위반 여부와 보험 처리 절차를 지금 확인하세요.',
    },
    intro:
      '<p>갑자기 사이렌 소리가 들렸는데 좁은 도로라 피할 공간이 없었고, 그 사이 뒤차가 들이받았다면 "내가 양보 의무를 어긴 건가, 아니면 뒤차 책임인가?" 혼란스러우실 겁니다. 긴급차량 양보 의무는 도로교통법 제29조에 규정되어 있고, 사고 상황에 따라 과실 분담이 달라지므로 초기 자료 확보가 중요합니다.</p>',
    sections: [
      {
        title: '긴급차량 양보 의무 — 도로교통법 제29조 핵심',
        content:
          '<p><strong style="color:#1e3a5f">도로교통법 제29조는 모든 차량이 긴급자동차에 즉시 양보할 의무를 부과합니다.</strong></p>\n<ul>\n<li><strong>양보 방법</strong> — 교차로 부근이면 교차로를 피해 일시정지, 나머지 구간에서는 도로 우측 가장자리에 즉시 정차.</li>\n<li><strong>위반 시 범칙금</strong> — 승용차 기준 6만 원 범칙금 + 벌점 10점, 단속 시 행정 처분.</li>\n<li><strong>과실 여부</strong> — 물리적으로 피할 수 없었던 상황이라면 도로 상황·차량 간격을 블랙박스·CCTV로 입증하면 과실 감경 가능성 검토.</li>\n<li><strong>뒤차 과실</strong> — 앞차가 긴급차량 때문에 급정차한 경우 뒤차가 충분한 안전거리를 유지하지 않았으면 뒤차 과실이 우선 검토됩니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 블랙박스 영상이 가장 중요한 증거입니다. 사고 직후 덮어쓰기 전에 SD카드를 꺼내 보관하세요.</blockquote>',
      },
      {
        title: '사고 직후 — 5단계 초기 대응',
        content:
          '<p><strong style="color:#1e3a5f">5단계를 사고 당일 안에 완료해두면 과실 입증에서 유리한 위치를 잡을 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 블랙박스 SD카드 분리 (즉시)</strong> — 덮어쓰기 방지를 위해 즉시 카드 분리. 전후방·측방 영상 전부.</li>\n<li><strong>2단계 — 112·보험사 접수 (30분 내)</strong> — 인명피해가 있으면 112 즉시 신고, 교통사고사실확인원 발급 요청.</li>\n<li><strong>3단계 — 현장 사진 (30분 내)</strong> — 차량 위치·스키드 마크·도로 폭·표지판 등 전방위 촬영.</li>\n<li><strong>4단계 — CCTV 보존 요청 (24시간 내)</strong> — 인근 상가·신호등 CCTV 관할기관(경찰서·도로공사)에 보존 요청.</li>\n<li><strong>5단계 — 보험사 과실 협의 (2주 내)</strong> — 양보 불가능했던 도로 상황을 영상·사진으로 제시, 과실 비율 낮추는 협의.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 긴급차량 사고 과실 분담, AI로 점검해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">도로 상황·동승자 유무 등 조건별로 AI가 청구 절차를 안내해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '과실 협의 결렬 시 — 분쟁 조정·소송 절차',
        content:
          '<p><strong style="color:#1e3a5f">보험사 간 과실 협의가 안 되면 손해보험협회 분쟁조정을 거쳐 소송으로 진행합니다.</strong></p>\n<ol>\n<li><strong>손해보험협회 분쟁조정 (무료, 2~3개월)</strong> — 양 보험사 과실 비율 합의 안 될 때 1차 조정.</li>\n<li><strong>금융감독원 분쟁조정 (무료)</strong> — 보험사 처리에 불만 있으면 금감원(1332)에 분쟁조정 신청 가능.</li>\n<li><strong>민사소송</strong> — 조정 불성립 시 관할 지방법원 민사소송. 청구액 2,000만 원 이하면 소액심판 절차 활용.</li>\n</ol>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 교통사고 손해배상 청구 소멸시효는 3년입니다. 협의가 길어지더라도 시효 관리가 필요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 긴급차량 관련 사고 처리 흐름',
        content:
          '<p><strong style="color:#1e3a5f">손해보험협회·금감원·법원 단계별 흐름을 미리 파악해두면 협의 과정에서 선택지가 넓어집니다.</strong></p>\n<ol>\n<li><strong>사고 접수 (즉시)</strong> — 112 신고 + 보험사 긴급출동 요청.</li>\n<li><strong>과실 협의 (2~4주)</strong> — 블랙박스 영상 제출, 양 보험사 과실 비율 산정.</li>\n<li><strong>손해보험협회 분쟁조정 (1~3개월)</strong> — 합의 불성립 시 무료 신청.</li>\n<li><strong>금감원 민원 또는 소송 (3~6개월)</strong> — 조정 불성립 시 단계 선택.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 긴급차량 사고, 상황별 대응 순서를 확인해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 긴급자동차 양보 의무와 과속 과실의 인과관계',
        summary:
          '대법원 2025도1049 사건(대법원, 2025.06.12 선고)에서 법원은 제한속도 위반이 있더라도 그 위반이 사고 발생의 직접 원인이 아니라면 교통사고처리특례법상 12대 중과실에 해당하지 않는다고 판시했습니다.',
        takeaway: '과속·양보 위반이 있어도 사고와 직접 인과관계가 없으면 과실 책임이 제한될 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '긴급차량이 지나갈 때 피하려다 중앙선을 침범했어도 내 과실인가요?',
        answer:
          '<strong>불가피한 상황이었음을 입증하면 과실이 감경될 수 있습니다.</strong> 블랙박스·주변 CCTV 영상이 핵심 증거입니다.',
      },
      {
        question: '긴급차량 양보 위반 범칙금과 형사처벌은 별개인가요?',
        answer:
          '<strong>범칙금은 행정처분, 사고 시 형사처벌은 별도입니다.</strong> 인명피해가 없으면 범칙금 처리로 종결되는 경우가 대부분이에요.',
      },
      {
        question: '피해자인데 내 보험사가 과실 30%라고 했어요. 다툴 수 있나요?',
        answer:
          '<strong>가능합니다.</strong> 손해보험협회 과실기준 시뮬레이터를 활용하거나 분쟁조정을 신청해 재산정 요청을 할 수 있어요.',
      },
      {
        question: '구급차가 사이렌을 켜지 않고 있었는데도 양보 의무가 있나요?',
        answer:
          '<strong>사이렌·경광등을 켠 긴급자동차에 한해 양보 의무가 발생합니다.</strong> 미작동 상태라면 일반 차량과 동일하게 과실 산정됩니다.',
      },
      {
        question: '뒤차가 추돌했는데 보험사가 내 과실도 있다고 하면 어떻게 하나요?',
        answer:
          '<strong>급정차 예견 가능성을 따집니다.</strong> 앞차가 긴급차량 때문에 정차했다면 뒤차의 안전거리 미확보 과실이 더 크게 반영되는 경우가 많아요.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '쌍방과실 비율 다툼 절차', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '교통사고 블랙박스 증거 활용', href: '/guide/traffic-accident/traffic-accident-blackbox-evidence' },
      { label: '손해보험 분쟁조정 신청 방법', href: '/guide/traffic-accident/traffic-accident-insurance-dispute' },
      { label: '교통사고 후유증 추가 청구', href: '/guide/traffic-accident/traffic-accident-low-speed-rear-end-aftereffect' },
      { label: '주차장 기둥 충돌 책임', href: '/guide/traffic-accident/traffic-accident-parking-pillar-fault' },
    ],
  },

  // ─── 3. traffic-accident / pedestrian-jaywalk-night-fault (Q&A형) ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-pedestrian-jaywalk-night-fault',
    keyword: '야간 무단횡단 보행자 과실',
    questionKeyword: '야간에 무단횡단하는 사람을 치면 운전자 과실이 얼마나 되나요?',
    ctaKeyword: '야간 무단횡단 사고 과실 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '야간 무단횡단 보행자 충돌 운전자 과실 5가지 기준 | 로앤가이드',
      description:
        '야간에 어두운 도로에서 무단횡단 보행자를 친 운전자의 과실 비율과 형사처벌 가능성을 지금 확인하세요.',
    },
    intro:
      '<p>어두운 밤, 갑자기 도로 중앙에서 뛰어나온 보행자를 피하지 못했다면 "내가 과실이 있는 건가, 무단횡단한 사람은 책임이 없나?"라는 생각이 드실 겁니다. 야간 무단횡단 사고는 보행자 과실이 상당히 크지만 운전자에게도 안전운전 주의의무가 있어 과실이 0%가 되기는 어렵습니다. 어느 정도인지 기준을 파악해두는 것이 중요합니다.</p>',
    sections: [
      {
        title: 'Q. 야간 무단횡단 사고에서 운전자 과실은 몇 %인가요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 상황에 따라 다르지만 일반적으로 운전자 20~40%, 보행자 60~80% 범위에서 산정되는 경우가 많습니다.</strong></p>\n<ul>\n<li><strong>편도 1차로, 야간, 무신호</strong> — 운전자 20~30% / 보행자 70~80% 수준이 검토되는 경우가 많습니다.</li>\n<li><strong>과속이 있었던 경우</strong> — 운전자 과실이 10~20%p 추가 가산될 소지가 있습니다.</li>\n<li><strong>보행자가 어두운 옷 착용</strong> — 야간 식별 곤란 인정 시 운전자 과실이 더 낮게 산정될 수 있습니다.</li>\n<li><strong>이면도로·주거지역</strong> — 보행자 출현 예상 가능성이 높아 운전자 주의의무가 더 엄격하게 적용.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 속도계 블랙박스 영상과 해당 구간 제한속도 준수 여부가 과실 산정의 기준입니다.</blockquote>',
      },
      {
        title: 'Q. 무단횡단 보행자를 치면 형사처벌도 받나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 종합보험 가입자는 원칙적으로 공소 제기가 제한되지만, 12대 중과실에 해당하면 처벌 대상이 될 수 있습니다.</strong></p>\n<ul>\n<li><strong>종합보험 면책</strong> — 교통사고처리특례법 제4조에 따라 종합보험(대인) 가입자는 원칙적으로 공소 불제기.</li>\n<li><strong>12대 중과실 해당 시</strong> — 신호위반·과속 20km 초과·중앙선 침범 등이 겹치면 면책 제외, 형사처벌 가능.</li>\n<li><strong>사망 사고</strong> — 사망 결과가 발생하면 보험 가입 여부와 관계없이 형사처벌 검토 대상.</li>\n<li><strong>합의 효과</strong> — 피해자·유족과 합의하면 공소취소 또는 선처 가능성이 높아지지만 결과를 보장하지는 않습니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 야간 무단횡단 사고 대응, AI로 상황 점검해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">형사처벌 가능성과 합의 절차를 AI가 상황별로 정리해드립니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 민사 손해배상은 어떻게 줄일 수 있나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 보행자 과실 비율이 높을수록 운전자 배상액이 줄어들고, 과실상계가 핵심입니다.</strong></p>\n<ul>\n<li><strong>과실상계 주장</strong> — 보행자의 무단횡단 과실이 인정되면 손해배상액이 그 비율만큼 차감됩니다.</li>\n<li><strong>야간·어두운 복장 입증</strong> — 사고 당시 조도·보행자 복장을 블랙박스·CCTV로 입증, 피해자 과실 반영 주장.</li>\n<li><strong>음주 여부 확인</strong> — 보행자가 음주 상태였다면 추가 과실 인정 가능.</li>\n<li><strong>대인배상보험 한도</strong> — 대인배상Ⅱ(무한) 보험에 가입되어 있으면 보험사가 배상을 대신 처리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사고 직후 현장 주변 편의점·건물 CCTV에 보행자 이동 경로가 남아 있을 수 있으니 24시간 내 보존 요청이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 야간 무단횡단 사고 처리 흐름',
        content:
          '<p><strong style="color:#1e3a5f">형사·민사 두 갈래를 동시에 진행해야 하므로 초기 자료 확보가 전체 흐름을 결정합니다.</strong></p>\n<ol>\n<li><strong>사고 직후 (즉시)</strong> — 112 신고 + 구급차 요청 + 블랙박스 영상 보존.</li>\n<li><strong>경찰 조사 (1~2주)</strong> — 사고 경위 진술, 블랙박스 영상·CCTV 제출.</li>\n<li><strong>보험사 과실 협의 (2~4주)</strong> — 대인배상보험 접수, 보행자 측 과실 주장 자료 제시.</li>\n<li><strong>형사 합의 (1~3개월)</strong> — 검사 기소 전 피해자 측과 합의 검토.</li>\n<li><strong>민사 배상 확정 (3~6개월)</strong> — 과실상계 적용 후 최종 배상액 결정.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 야간 사고 처리 순서, 먼저 정리해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 횡단보도 신호 없는 구간 보행자와 운전자 과실 기준',
        summary:
          '대법원 2020다8675 사건(대법원, 2020.12.24 선고)에서 법원은 횡단보도 보호신호가 없는 구간을 횡단하는 보행자와 충돌한 경우 운전자에게도 보행자 출현을 예견해야 할 주의의무가 있지만 그 정도는 신호 있는 횡단보도보다 낮다고 판시했습니다.',
        takeaway: '무단횡단 구간이라도 운전자의 주의의무가 완전히 소멸하지는 않으며 보행자 과실이 크게 반영됩니다.',
      },
    ],
    faq: [
      {
        question: '종합보험에 가입했는데도 구속될 수 있나요?',
        answer:
          '<strong>12대 중과실(신호위반·음주 등)이 겹치면 종합보험 가입과 무관하게 형사처벌 대상이 됩니다.</strong> 해당 여부를 먼저 확인하는 것이 중요해요.',
      },
      {
        question: '피해자가 음주 상태였음을 어떻게 입증하나요?',
        answer:
          '<strong>경찰 사고 처리 과정에서 피해자 혈중알코올 측정 기록을 요청할 수 있습니다.</strong> 사고 직후 입원 기록에도 혈중 농도가 남는 경우가 있어요.',
      },
      {
        question: '합의가 되지 않으면 형사처벌은 피할 수 없나요?',
        answer:
          '<strong>합의 불성립이 곧 유죄는 아닙니다.</strong> 블랙박스 등 과실 자료를 제출해 검사 기소 여부·재판 결과에 대응할 수 있어요.',
      },
      {
        question: '사고 당시 속도를 지켰는지 어떻게 증명하나요?',
        answer:
          '<strong>블랙박스에 GPS 속도가 기록되어 있으면 가장 직접적인 증거입니다.</strong> 없으면 스키드 마크 길이·목격자 진술로 보완합니다.',
      },
      {
        question: '보행자가 사망했는데 합의금은 어느 정도인가요?',
        answer:
          '<strong>사건별 차이가 크고, 피해자 과실 반영 후 잔여 배상액이 결정됩니다.</strong> 통상적인 금액 범위는 사례에 따라 크게 달라지므로 보험사·법조인과 상담해보는 것이 좋습니다.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 12대 중과실 정리', href: '/guide/traffic-accident/traffic-accident-12-major-fault' },
      { label: '교통사고 합의금 산정 기준', href: '/guide/traffic-accident/traffic-accident-settlement-criteria' },
      { label: '교통사고 형사합의 절차', href: '/guide/traffic-accident/traffic-accident-criminal-settlement' },
      { label: '야간 사이클 과실 기준', href: '/guide/traffic-accident/traffic-accident-night-cycling-fault-share' },
      { label: '주차장 기둥 충돌 책임', href: '/guide/traffic-accident/traffic-accident-parking-pillar-fault' },
    ],
  },

  // ─── 4. traffic-accident / low-speed-rear-end-aftereffect (절차형) ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-low-speed-rear-end-aftereffect',
    keyword: '저속 추돌 후유증 청구',
    questionKeyword: '저속 추돌 후 뒤늦게 목·허리 후유증이 생겼는데 추가 배상을 받을 수 있나요?',
    ctaKeyword: '저속 추돌 후유증 청구 점검',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '저속 추돌 후유증 추가 청구 5단계 절차 총정리 | 로앤가이드',
      description:
        '저속 추돌 사고 후 합의했거나 합의 전인 경우 후유증 진단에 따른 추가 배상 청구 절차를 지금 확인하세요.',
    },
    intro:
      '<p>"살짝 부딪혔는데 며칠 뒤부터 목과 허리가 심하게 아파요. 이미 합의서 썼는데 추가 청구가 가능한가요?" 저속 추돌 사고는 차량 파손이 거의 없어 상대방이 합의를 서두르지만, 목·허리 염좌·신경 손상 등 후유증은 수일~수주 뒤에 나타나는 경우가 많습니다. 합의 시점과 후유증 진단 시점의 관계가 청구 가능 여부를 결정합니다.</p>',
    sections: [
      {
        title: '합의 전 — 후유증 증상이 있으면 치료를 먼저 완료하세요',
        content:
          '<p><strong style="color:#1e3a5f">합의는 치료 종결 후 하는 것이 원칙입니다. 치료가 남은 상태에서 합의하면 추가 청구가 어렵습니다.</strong></p>\n<ul>\n<li><strong>치료 종결 시기</strong> — 증상이 남아 있으면 "향후 치료비 및 후유장해" 항목을 합의서에 포함시키거나 합의를 미뤄야 합니다.</li>\n<li><strong>후유장해 진단서</strong> — 치료 종결 후 정형외과·신경외과에서 후유장해 진단서 발급(보험사 제출용, 자동차보험 ABI 기준).</li>\n<li><strong>MRI·CT 검사</strong> — 저속이라도 경추·요추 CT·MRI 결과가 있으면 손해 입증이 훨씬 강해집니다.</li>\n<li><strong>합의서 문언 확인</strong> — "향후 어떠한 청구도 하지 않겠다"는 포괄 합의서는 후유증 청구를 막을 수 있으니 문구를 가능한 한 확인하세요.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 합의서에 "현재 나타난 증상에 한정"하는 문구를 넣거나, 치료 완료 후 합의하는 것이 가장 안전합니다.</blockquote>',
      },
      {
        title: '이미 합의했다면 — 취소·추가 청구 가능한가요?',
        content:
          '<p><strong style="color:#1e3a5f">합의 당시 예상하지 못한 손해는 일부 경우 추가 청구가 검토될 수 있습니다.</strong></p>\n<ul>\n<li><strong>착오에 의한 취소</strong> — 합의 시점에 후유장해의 발생 사실을 알지 못했고, 합의금에 후유장해 보상이 포함되지 않았다면 착오를 이유로 합의 취소를 주장할 수 있는 소지가 있습니다.</li>\n<li><strong>후유장해 별도 항목</strong> — 합의서에 "치료비만" 포함되어 있고 후유장해가 명시되지 않았다면 추가 청구 주장이 가능한 경우가 있습니다.</li>\n<li><strong>신청 기간</strong> — 사고일로부터 3년 소멸시효 안에 청구해야 합니다.</li>\n<li><strong>보험사 부지급 이유서</strong> — 보험사가 거절하면 서면 부지급 이유서를 요청하고 금감원 분쟁조정 신청 검토.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 후유증 추가 청구 가능한지 AI로 먼저 점검해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">합의서 문구·치료 기간·후유장해 등급에 따라 AI가 청구 가능성을 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">후유증 추가 청구 가능한지 AI로 점검하기 →</a>\n</div>',
      },
      {
        title: '후유장해 등급과 배상액 — 자동차보험 기준',
        content:
          '<p><strong style="color:#1e3a5f">자동차보험 후유장해 보상은 ABI(자동차보험 신체장해 분류표) 등급에 따라 산정됩니다.</strong></p>\n<ul>\n<li><strong>장해등급 1~14급</strong> — 노동능력상실률에 따라 일실수입·위자료·향후치료비 합산.</li>\n<li><strong>경추 염좌 계속 통증</strong> — 영구장해로 인정되기 어려울 수 있고, 한시장해(수년 기간 한정) 적용 사례가 많습니다.</li>\n<li><strong>위자료</strong> — 사건별로 다르지만 후유장해 인정 시 별도 위자료가 산정되는 사례가 있습니다.</li>\n<li><strong>대인배상Ⅱ 한도</strong> — 무한 배상 특약 가입 시 배상액 한도 제한 없음.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">주의: 저속 추돌이라도 후유장해 진단서가 확보되면 상당한 배상을 청구하는 근거가 됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 후유증 추가 배상 절차',
        content:
          '<p><strong style="color:#1e3a5f">치료 기관·보험사·금감원·법원 단계별 흐름을 파악해두면 누락 없이 청구할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 후유장해 진단 (치료 종결 후)</strong> — 정형외과·신경외과에서 후유장해 진단서 발급.</li>\n<li><strong>2단계 — 보험사 추가 청구 (진단서 발급 직후)</strong> — 대인배상보험에 후유장해 보상 청구서 제출.</li>\n<li><strong>3단계 — 금감원 분쟁조정 (보험사 거절 시, 1~3개월)</strong> — 금융감독원(1332)에 분쟁조정 신청.</li>\n<li><strong>4단계 — 손해사정사 의뢰 (필요 시)</strong> — 독립 손해사정사가 보험사 산정액의 적정성을 검토.</li>\n<li><strong>5단계 — 민사소송 (조정 불성립 시)</strong> — 3년 소멸시효 안에 손해배상 청구 소송.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 후유증 청구 순서, AI로 먼저 정리해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">후유증 추가 청구 가능한지 AI로 점검하기 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 교통사고 피해자의 자차보험 자기부담금 청구 권리',
        summary:
          '대법원 2022다287284 사건(대법원, 2026.01.29 선고)에서 법원은 자기부담금 중 상대방 책임비율에 해당하는 금액은 보험자 대위 범위 밖에 있어 피보험자가 상대방에게 별도로 청구할 수 있다고 판시했습니다.',
        takeaway: '합의 후에도 자기부담금의 상대방 부담분은 별도 청구가 가능한 경우가 있습니다.',
      },
    ],
    faq: [
      {
        question: '저속 추돌인데 MRI 비용을 상대방 보험에서 내줄 수 있나요?',
        answer:
          '<strong>필요성이 인정되면 대인배상보험에서 지급 검토 대상입니다.</strong> 의사가 MRI 필요성을 의무기록에 남겨두면 보험 처리가 수월해져요.',
      },
      {
        question: '합의서에 도장을 이미 찍었는데 후유증이 나타나면 어떻게 하나요?',
        answer:
          '<strong>합의서 내용·후유장해 예견 가능성에 따라 추가 청구를 검토할 수 있습니다.</strong> 합의서 문구를 법조인과 검토해보는 것이 좋아요.',
      },
      {
        question: '한의원 치료비도 보험 처리가 되나요?',
        answer:
          '<strong>자동차보험 대인배상에서 한방 치료비도 통상 인정될 수 있습니다.</strong> 단, 과다 청구로 의심받지 않도록 치료기록을 성실하게 유지하는 것이 중요합니다.',
      },
      {
        question: '치료 종결 전 보험사가 합의를 압박하면 어떻게 해야 하나요?',
        answer:
          '<strong>치료가 끝나기 전에는 합의에 응하지 않아도 됩니다.</strong> "치료 중이므로 종결 후 협의하겠다"고 서면으로 의사를 표시해두는 것이 좋아요.',
      },
      {
        question: '소멸시효 3년은 언제부터 기산하나요?',
        answer:
          '<strong>사고 발생일 또는 손해 사실을 안 날로부터 3년입니다.</strong> 후유장해 진단일을 "안 날"로 보는 사례도 있어 진단서 발급 날짜를 기록해두세요.',
      },
    ],
    cta: { text: '후유증 추가 청구 가능한지 AI로 점검하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의 전 체크리스트', href: '/guide/traffic-accident/traffic-accident-settlement-documents' },
      { label: '교통사고 후유장해 진단 절차', href: '/guide/traffic-accident/traffic-accident-disability-diagnosis' },
      { label: '손해보험 분쟁조정 신청 방법', href: '/guide/traffic-accident/traffic-accident-insurance-dispute' },
      { label: '동승자 부상 운전자 책임', href: '/guide/traffic-accident/traffic-accident-passenger-injury-driver-fault' },
      { label: '야간 무단횡단 보행자 과실', href: '/guide/traffic-accident/traffic-accident-pedestrian-jaywalk-night-fault' },
    ],
  },

  // ─── 5. traffic-accident / passenger-injury-driver-fault (Q&A형) ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-passenger-injury-driver-fault',
    keyword: '동승자 부상 운전자 책임',
    questionKeyword: '내 차에 탄 친구가 사고로 다쳤는데 운전자인 제가 배상해야 하나요?',
    ctaKeyword: '동승자 부상 책임 점검',
    type: 'Q&A형',
    perspective: 'victim',
    meta: {
      title: '동승자 부상 운전자 배상 책임과 보험 처리 5가지 정리 | 로앤가이드',
      description:
        '내 차에 탑승한 동승자가 사고로 부상을 입었을 때 운전자의 배상 책임 범위와 보험 처리 절차를 지금 확인하세요.',
    },
    intro:
      '<p>친구나 가족을 태우고 가다가 사고가 났을 때 "내가 배상해야 하나, 상대방 보험으로 처리되나, 내 보험에서는 얼마나 나오나?" 세 가지 질문이 동시에 생깁니다. 동승자 부상은 내 자동차보험 대인배상Ⅱ로 우선 처리되고, 상대방 과실이 있으면 상대 보험사에도 청구할 수 있는 구조입니다. 사고 직후 내 보험사와 상대 보험사 모두에 접수하는 것이 중요합니다.</p>',
    sections: [
      {
        title: 'Q. 동승자가 부상을 입으면 운전자가 배상해야 하나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 원칙적으로 운전자(차주)가 1차 배상 의무를 지고, 보험이 이를 대신합니다.</strong></p>\n<ul>\n<li><strong>자동차손해배상 보장법 제3조</strong> — 자동차 운행자는 운행 중 발생한 타인의 신체 손해를 배상할 의무가 있습니다.</li>\n<li><strong>"타인"에 동승자 포함</strong> — 동승자는 "타인"에 해당해 운전자의 배상 의무 대상입니다.</li>\n<li><strong>대인배상Ⅱ 처리</strong> — 운전자 과실이 인정되면 내 자동차보험 대인배상Ⅱ(무한)에서 치료비·위자료 등 지급.</li>\n<li><strong>상대방 과실 병행 청구</strong> — 상대방 차량 과실이 있으면 상대 보험사에도 대인배상 청구 가능.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 대인배상Ⅱ에 가입되어 있으면 동승자 치료비는 보험사가 대신 처리합니다. 가입 여부를 먼저 확인하세요.</blockquote>',
      },
      {
        title: 'Q. 동승자 자신에게도 과실이 있으면 배상액이 줄어드나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 동승자 과실이 인정되면 손해배상액이 그만큼 과실상계됩니다.</strong></p>\n<ul>\n<li><strong>안전벨트 미착용</strong> — 동승자가 안전벨트를 착용하지 않아 손해가 커진 경우 과실상계 적용.</li>\n<li><strong>음주 강요·방조</strong> — 동승자가 운전자의 음주를 알면서 탑승했다면 일부 과실 인정 소지.</li>\n<li><strong>위험 행위 유발</strong> — 동승자가 운전 중 갑작스러운 행동으로 사고를 유발한 경우 과실 산정.</li>\n<li><strong>최소 배상 보장</strong> — 자동차손해배상 보장법 시행령 제3조에 따라 과실상계 후에도 책임보험금(최소 보장액)은 지급됩니다.</li>\n</ul>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 동승자 부상 배상 절차, AI로 바로 정리해보세요</strong></p>\n<p style="margin:0;font-size:0.95em">보험 처리 순서와 과실상계 적용 여부를 AI가 상황별로 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
      {
        title: 'Q. 동승자가 가족이면 보험 처리가 달라지나요?',
        content:
          '<p><strong style="color:#1e3a5f">A. 가족(부모·배우자·자녀)은 "타인" 범위에서 제외되는 경우가 있어 가족 한정 특약 여부를 확인해야 합니다.</strong></p>\n<ul>\n<li><strong>배우자·부모·자녀</strong> — 자동차보험 표준약관상 이들은 "타인"이 아닐 수 있어 대인배상Ⅱ에서 제외될 수 있습니다.</li>\n<li><strong>가족 탑승 특약</strong> — 별도로 가족 탑승 시 보상 특약에 가입되어 있으면 가족도 보상 가능.</li>\n<li><strong>상해보험 병행 확인</strong> — 동승자 본인이 가입한 자동차 상해보험이나 실손보험으로 추가 처리 검토.</li>\n<li><strong>보험사 확인 필수</strong> — 약관마다 "타인" 범위가 다르므로 사고 직후 보험사에 적용 범위 확인이 선행되어야 합니다.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 가족이 동승할 때를 대비해 "가족 탑승 담보"나 "자동차 상해" 특약 가입 여부를 미리 확인해두세요.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 동승자 부상 처리 흐름',
        content:
          '<p><strong style="color:#1e3a5f">내 보험사·상대 보험사·금감원 순서로 진행하면 누락 없이 처리할 수 있습니다.</strong></p>\n<ol>\n<li><strong>1단계 — 내 보험사 접수 (사고 당일)</strong> — 대인배상Ⅱ 적용 여부 확인 + 동승자 치료비 청구 접수.</li>\n<li><strong>2단계 — 상대 보험사 청구 (상대 과실 있을 경우)</strong> — 상대방 대인배상보험에도 동승자 치료비 청구.</li>\n<li><strong>3단계 — 치료비·위자료 협의 (1~4주)</strong> — 치료 기간 동안 치료비 실시간 청구, 치료 종결 후 위자료·후유장해 협의.</li>\n<li><strong>4단계 — 금감원 분쟁조정 (보험사 분쟁 시, 1~3개월)</strong> — 처리 불만족 시 금융감독원(1332) 분쟁조정 신청.</li>\n<li><strong>5단계 — 민사소송 (필요 시)</strong> — 손해배상 3년 소멸시효 안에 소송 가능.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 동승자 부상 처리 순서, AI로 확인해보세요</strong></p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">교통사고 합의 전 체크리스트, AI로 정리하기 →</a>\n</div>',
      },
    ],
    cases: [
      {
        title: '판례 — 자동차 운행자의 타인 배상 의무와 동승자 범위',
        summary:
          '대법원 2003다26075 사건(대법원, 2004.08.20 선고)에서 법원은 자동차손해배상 보장법상 "타인"의 개념에서 운전자 본인과 운행지배자는 제외되지만 동승자는 원칙적으로 타인에 해당하고, 동승자가 운행지배에 관여하지 않은 이상 배상 청구권이 인정된다고 판시했습니다.',
        takeaway: '일반 동승자는 운전자의 배상 대상으로 인정되며, 치료비와 위자료를 청구할 수 있는 경우가 많습니다.',
      },
    ],
    faq: [
      {
        question: '대인배상Ⅱ가 없고 대인배상Ⅰ만 있으면 어떻게 되나요?',
        answer:
          '<strong>대인배상Ⅰ(의무보험)은 사망 1.5억·부상 등급별 한도가 있습니다.</strong> 한도 초과분은 운전자가 직접 부담해야 할 수 있어요.',
      },
      {
        question: '동승자가 소송을 제기했어요. 어떻게 대응해야 하나요?',
        answer:
          '<strong>보험사에 즉시 통보하면 보험사 법무팀이 소송을 대응합니다.</strong> 대인배상 범위 내라면 보험사가 직접 처리해주는 경우가 많아요.',
      },
      {
        question: '안전벨트 미착용 과실은 어느 정도 반영되나요?',
        answer:
          '<strong>사건별로 다르지만 통상 10~20% 과실상계 적용 사례가 있습니다.</strong> 과실 여부는 사고 경위와 결합해 종합 판단됩니다.',
      },
      {
        question: '동승자가 합의 없이 원칙적으로 소송하면 어떻게 하나요?',
        answer:
          '<strong>보험사가 소송에 응대하고 법원이 과실과 손해를 판단합니다.</strong> 대인배상 한도 내라면 개인 부담 없이 처리되는 경우가 많아요.',
      },
      {
        question: '동승자가 치료를 거부하면 배상 의무가 없어지나요?',
        answer:
          '<strong>아닙니다.</strong> 치료 거부로 손해가 커졌다면 그 부분에 대해 과실상계를 주장할 수 있지만, 기본 배상 의무 자체는 유지됩니다.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 합의 전 체크리스트', href: '/guide/traffic-accident/traffic-accident-settlement-documents' },
      { label: '저속 추돌 후유증 추가 청구', href: '/guide/traffic-accident/traffic-accident-low-speed-rear-end-aftereffect' },
      { label: '쌍방과실 비율 다툼 절차', href: '/guide/traffic-accident/traffic-accident-fault-ratio-dispute' },
      { label: '야간 무단횡단 과실 기준', href: '/guide/traffic-accident/traffic-accident-pedestrian-jaywalk-night-fault' },
      { label: '긴급차량 양보 위반 사고', href: '/guide/traffic-accident/traffic-accident-emergency-vehicle-yield-fail' },
    ],
  },
];
