import { SpokePage } from '../spoke-pages';

// batch79 divorce + inheritance + traffic-accident — 6개 (2026-05-27)
//
// 고유 존재 이유:
// 1. (divorce) divorce-ex-spouse-death-property-division-heir-claim-track — 이혼 당사자 일방이 사망한 경우 재산분할의무가 상속인에게 승계되어 사망한 전 배우자의 상속인을 상대로 재산분할을 청구하는 트랙.
// 2. (divorce) divorce-parents-financial-support-property-contribution-track — 부부 일방 부모의 경제적·비경제적 지원이 재산 형성·유지 기여로 평가되는지 다투는 재산분할 트랙.
// 3. (divorce) divorce-spouse-unilateral-asset-disposal-divorce-ground-track — 배우자가 공동재산 주요 부분을 무단처분해 경제적 기반을 위태롭게 한 행위가 민법 제840조 제6호 이혼사유에 해당하는지 판단 트랙.
// 4. (divorce) divorce-at-fault-spouse-exceptional-petition-allowed-track — 유책배우자의 이혼 청구가 예외적으로 허용되는 요건과 상대방 혼인계속의사 판단 트랙.
// 5. (inheritance) inheritance-limited-acceptance-undisclosed-asset-simple-acceptance-track — 한정승인·포기 후 재산을 재산목록에 기입하지 않은 경우 법정단순승인(은닉·사해의사 요건) 의제 다툼 트랙.
// 6. (traffic-accident) traffic-accident-health-insurance-subrogation-liability-claim-track — 국민건강보험공단이 교통사고 피해자에게 보험급여 후 책임보험금 청구권을 대위하는 경우 피해자의 잔여 청구 범위 트랙.

export const spokesBatch79DivorceInheritTraffic: SpokePage[] = [
  // ─── 1 divorce-ex-spouse-death-property-division-heir-claim-track ───
  {
    domain: 'divorce',
    slug: 'divorce-ex-spouse-death-property-division-heir-claim-track',
    keyword: '이혼 당사자 사망 재산분할 상속인 청구 절차',
    questionKeyword: '이혼한 전 배우자가 재산분할을 끝내기 전에 사망했는데 상속인들을 상대로 재산분할을 청구할 수 있나요?',
    ctaKeyword: '전 배우자 사망 재산분할 상속인 청구 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '전 배우자 사망 재산분할 — 5단계 상속인 청구 트랙 | 로앤가이드',
      description:
        '이혼 후 재산분할을 끝내기 전에 전 배우자가 사망했는데 상속인을 상대로 청구할 수 있는지, 2년 기한은 어떻게 되는지 막막하다면 상속인 상대 청구 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"몇 달 전 협의이혼을 했는데 재산분할 협의를 미처 마무리하지 못한 상태에서 전 배우자가 갑자기 사망했습니다. 분할 대상이던 부동산과 예금은 이미 자녀들 앞으로 상속 절차가 진행되는 분위기인데, 저는 이제 재산분할을 받을 길이 영영 막힌 건지 막막합니다. 사망한 사람을 상대로 청구할 수는 없으니, 상속인인 자녀들을 상대로 재산분할을 구할 수 있는지 모르겠어요." 민법 제839조의2 제1항은 협의상 이혼한 자 일방의 재산분할 청구권을, 제843조는 재판상 이혼에 이를 준용하도록 규정하는 영역입니다. 대법원 2024스876(대법원, 2026.01.15)은 이혼을 한 당사자 일방이 사망한 경우 재산분할의무가 상속인들에게 승계되고, 이혼을 한 당사자 일방은 사망한 전 배우자의 상속인들을 상대로 재산분할을 청구할 수 있다고 판시한 사례입니다. 당사자라면 ① 청구권 확인 ② 상속인 확정 ③ 분할 대상 정리 ④ 상속인 상대 청구 ⑤ 기한 관리 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 전 배우자 사망 재산분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 청구권확인·상속인확정·대상정리·청구·기한 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 청구권 확인</strong> — 이혼 성립 후 재산분할을 마치지 못한 상태인지 확인.</li>\n<li><strong>② 상속인 확정</strong> — 사망한 전 배우자의 상속인(자녀·배우자 등) 파악.</li>\n<li><strong>③ 분할 대상 정리</strong> — 혼인 중 공동 형성 재산·채무 목록 작성.</li>\n<li><strong>④ 상속인 상대 청구</strong> — 재산분할의무를 승계한 상속인을 상대로 청구.</li>\n<li><strong>⑤ 기한 관리</strong> — 이혼한 날부터 2년 제척기간 내 청구 진행.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 이혼을 한 당사자 일방이 사망하면 재산분할의무는 상속인들에게 승계되는 영역입니다. 따라서 청구를 마치기 전 전 배우자가 사망했더라도 그 상속인들을 상대로 재산분할을 청구하는 것을 검토할 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 청구권 점검·상속관계 확인·청구·심리·이행 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 이혼 성립·재산분할 미정 확인 (즉시)</strong> — 이혼 시점과 분할 미완료 사실 정리.</li>\n<li><strong>2단계 — 상속관계 자료 확보 (1~2주)</strong> — 사망 전 배우자의 가족관계증명서·상속인 파악.</li>\n<li><strong>3단계 — 가정법원 재산분할 심판 청구 (2년 제척기간 내)</strong> — 상속인 전원을 상대방으로 지정.</li>\n<li><strong>4단계 — 분할 대상·기여도 심리 (수개월)</strong> — 혼인 중 형성 재산을 기준으로 평가.</li>\n<li><strong>5단계 — 심판 확정 후 분할 이행</strong> — 미이행 시 강제집행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·위자료 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">전 배우자 사망 재산분할 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 이혼·상속·재산 갈래입니다.</strong></p>\n<ul>\n<li><strong>이혼 확정 자료 (협의이혼확인서·이혼 판결문)</strong></li>\n<li><strong>사망한 전 배우자 기본증명서·가족관계증명서</strong></li>\n<li><strong>상속인 확인 자료 (자녀·배우자 가족관계증명서)</strong></li>\n<li><strong>혼인 중 공동 형성 부동산 등기부등본·시세 자료</strong></li>\n<li><strong>공동 예금·금융 거래 내역</strong></li>\n<li><strong>본인 기여 입증 자료 (소득·가사 기여)</strong></li>\n<li><strong>공동 채무 자료 (대출·보증)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 재산분할의무가 상속인에게 승계되더라도 청구는 이혼한 날부터 2년 제척기간 내에 해야 하는 영역입니다. 사망으로 상속인이 여럿이면 전원을 상대방으로 지정해야 하므로 상속관계 자료를 먼저 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>의무 승계 범위</strong> — 상속인이 승계하는 재산분할의무의 한도.</li>\n<li><strong>제척기간</strong> — 이혼한 날부터 2년 내 청구 필요.</li>\n<li><strong>상속인 특정</strong> — 상속포기·한정승인 등으로 상대방 범위가 달라질 수 있음.</li>\n<li><strong>기여도 평가</strong> — 혼인 중 공동 형성 재산에 대한 기여 정도.</li>\n<li><strong>상속재산과 분할재산 구분</strong> — 분할 대상과 상속 대상의 정리.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>관할 가정법원 민원실</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 이혼 당사자 사망 시 재산분할의무 상속인 승계 영역',
        summary:
          '대법원 2024스876(대법원, 2026.01.15 선고) 영역에서 법원은 협의상 이혼한 자 일방은 다른 일방에 대하여 재산분할을 청구할 수 있고(민법 제839조의2 제1항), 재판상 이혼에 따른 재산분할청구권에도 이 조항이 준용되며(민법 제843조), 이혼을 한 당사자 일방이 사망한 경우 그 재산분할의무가 상속인들에게 승계되어 이혼을 한 당사자 일방은 사망한 전 배우자의 상속인들을 상대로 재산분할을 청구할 수 있다고 판시했습니다. 분할 전 전 배우자가 사망한 사안에서 상속인 상대 청구를 다투는 경우 이 법리를 검토해볼 수 있습니다.',
        takeaway:
          '재산분할 미정 + 전 배우자 사망 + 상속인 승계 결합 시 상속인 상대 청구 검토 영역 — 상속관계 자료 확보 후 2년 제척기간 내 변호인 상담·청구 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '재산분할 전에 전 배우자가 사망하면 청구는 끝난 건가요?',
        answer:
          '<strong>재산분할의무가 상속인에게 승계되어 상속인을 상대로 청구를 검토할 수 있는 영역입니다.</strong> 사망으로 청구가 자동 소멸하는 것은 아닙니다.',
      },
      {
        question: '누구를 상대로 재산분할을 청구하나요?',
        answer:
          '<strong>사망한 전 배우자의 상속인(자녀·배우자 등)을 상대방으로 청구하는 영역입니다.</strong> 상속인이 여럿이면 전원을 상대방으로 지정하는 것을 검토해볼 수 있습니다.',
      },
      {
        question: '청구 기한이 따로 있나요?',
        answer:
          '<strong>재산분할청구권은 이혼한 날부터 2년 내 행사해야 하는 영역입니다.</strong> 전 배우자 사망과 무관하게 제척기간 관리가 중요합니다.',
      },
      {
        question: '상속인이 상속을 포기했으면 어떻게 되나요?',
        answer:
          '<strong>상속포기·한정승인 여부에 따라 상대방 범위와 책임 한도가 달라질 수 있는 영역입니다.</strong> 상속관계를 먼저 확인하는 것이 좋습니다.',
      },
      {
        question: '분할받을 재산이 이미 상속등기됐으면 못 받나요?',
        answer:
          '<strong>상속이 진행됐더라도 혼인 중 공동 형성 재산은 분할 청구 대상으로 검토할 수 있는 영역입니다.</strong> 분할 대상과 상속 대상을 구분해 정리하는 것이 좋습니다.',
      },
    ],
    cta: { text: '재산분할·위자료 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '배우자 사망 후 재산분할', href: '/guide/divorce/divorce-after-spouse-death-property-claim' },
      { label: '재산분할 종합 정리', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '재산분할 2년 청구', href: '/guide/divorce/divorce-consensual-property-division-2year-claim' },
      { label: '재산분할 기준 시점', href: '/guide/divorce/divorce-property-division-cutoff-date' },
      { label: '재산분할 시가감정 직권조사', href: '/guide/divorce/divorce-property-valuation-court-appraisal-track' },
    ],
  },

  // ─── 2 divorce-parents-financial-support-property-contribution-track ───
  {
    domain: 'divorce',
    slug: 'divorce-parents-financial-support-property-contribution-track',
    keyword: '부모 경제적 지원 재산분할 기여 반영',
    questionKeyword: '결혼 생활 동안 부모님이 보태준 돈도 재산분할에서 기여로 인정받을 수 있나요?',
    ctaKeyword: '부모 지원 재산분할 기여 정리',
    type: '비교형',
    perspective: 'neutral',
    meta: {
      title: '부모 지원 재산분할 기여 — 5단계 평가 비교 트랙 | 로앤가이드',
      description:
        '결혼 생활 중 양가 부모님이 보태준 돈이 재산분할에서 어느 쪽 기여로 인정되는지, 증여 특유재산과 어떻게 구분되는지 막막하다면 평가 5가지 비교 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"결혼하면서 시부모님이 전셋집 보증금을 보태주셨고, 이후에도 아이 키우고 집 늘려가는 과정에서 양가 부모님이 적지 않은 돈을 도와주셨습니다. 이제 이혼을 앞두고 재산분할을 하려는데, 상대방은 \'그 돈은 부모가 준 것이니 자기 쪽 기여\'라고 주장합니다. 부모가 보태준 돈이 재산 형성에 대한 기여로 인정되는지, 어느 쪽 기여로 평가되는지 막막한 상황입니다." 민법 제839조의2·제843조는 재산분할에서 재산 형성·유지에 기여한 정도 등 실질에 따라 분할하도록 규정하는 영역입니다. 대법원 2024므13669(대법원, 2025.10.16)은 이혼에 의한 재산분할에서 부부 일방의 부모 등이 부부나 그 가족에 대하여 한 경제적·비경제적 지원이 재산의 형성 및 유지에 기여한 사정으로 평가될 수 있다는 취지를 판시한 사례입니다. 당사자라면 ① 지원 내역 정리 ② 출처·시점 확인 ③ 기여 평가 ④ 특유재산 구분 ⑤ 분할 비율 검토 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 부모 지원 재산분할 기여 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 내역정리·출처확인·기여평가·특유구분·비율 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 지원 내역 정리</strong> — 부모가 보탠 보증금·매수자금·생활비 등 정리.</li>\n<li><strong>② 출처·시점 확인</strong> — 누가 언제 얼마를 지원했는지 이체·계약 자료로 확인.</li>\n<li><strong>③ 기여 평가</strong> — 부모 지원이 재산 형성·유지에 기여한 사정으로 평가될 수 있는지 검토.</li>\n<li><strong>④ 특유재산 구분</strong> — 증여로 받은 특유재산인지 공동 형성 기여인지 구분.</li>\n<li><strong>⑤ 분할 비율 검토</strong> — 기여 정도를 반영한 분할 비율 산정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 부부 일방의 부모 등이 한 경제적·비경제적 지원은 재산 형성·유지에 기여한 사정으로 평가될 수 있는 영역입니다. 다만 단순 증여로 받은 특유재산과 공동 형성 기여는 구분되므로, 지원의 출처·시점·성격을 자료로 정리하는 것이 비율 산정의 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 확보·청구·기여 주장·평가·분할 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 부모 지원 내역 자료 확보 (즉시)</strong> — 이체 내역·차용증·매매계약서 정리.</li>\n<li><strong>2단계 — 분할 대상 재산 목록 작성 (1~2주)</strong> — 공동 형성 재산과 지원 자금의 흐름 정리.</li>\n<li><strong>3단계 — 가정법원 재산분할 청구 (이혼 소송 내 병합 또는 별도)</strong>.</li>\n<li><strong>4단계 — 기여 사정 주장·평가 (수개월)</strong> — 부모 지원이 기여로 반영되는지 변론.</li>\n<li><strong>5단계 — 심판 확정 후 분할·정산 이행</strong>.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·위자료 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">부모 지원 재산분할 기여 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 지원·재산·기여 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>부모 지원 이체 내역 (계좌·시점 확인)</strong></li>\n<li><strong>차용증·증여 관련 자료 (지원 성격 구분)</strong></li>\n<li><strong>지원금이 투입된 부동산 등기부등본·매매계약서</strong></li>\n<li><strong>공동 예금·금융 거래 내역</strong></li>\n<li><strong>본인·배우자 소득 자료 (기여 비교)</strong></li>\n<li><strong>가사·육아 기여 입증 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 부모 지원이 차용인지 증여인지, 누구 쪽에 귀속되는지에 따라 기여 평가가 달라지는 영역입니다. 이체 시점·금액·명목을 명확히 정리해두면 어느 쪽 기여로 반영할지 다툴 때 도움이 될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>지원의 성격</strong> — 증여인지 대여인지에 따라 평가가 달라짐.</li>\n<li><strong>기여 귀속</strong> — 어느 쪽 부모 지원인지에 따른 기여 반영.</li>\n<li><strong>특유재산 구분</strong> — 증여받은 특유재산의 분할 제외 여부.</li>\n<li><strong>지원금 추적</strong> — 지원금이 투입된 재산의 현재 가액 추적.</li>\n<li><strong>분할 비율</strong> — 기여 정도를 반영한 비율 산정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>관할 가정법원 민원실</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부모 등의 경제적·비경제적 지원의 재산분할 기여 평가 영역',
        summary:
          '대법원 2024므13669(대법원, 2025.10.16 선고) 영역에서 법원은 이혼을 원인으로 한 재산분할에서 부부 일방의 부모 등이 부부나 그 가족에 대하여 한 경제적·비경제적 지원이 재산의 형성 및 유지에 기여한 사정으로 평가될 수 있다는 취지로 판시했습니다(민법 제839조의2, 제843조 관련). 부모 지원금의 기여 반영을 다투는 재산분할 사안에서 이 법리를 검토해볼 수 있습니다.',
        takeaway:
          '재산분할 + 부모 경제적·비경제적 지원 + 기여 평가 결합 시 분할 비율 산정 영역 — 지원 출처·시점 자료 확보 후 변호인 상담·청구 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '부모님이 보태준 돈도 기여로 인정되나요?',
        answer:
          '<strong>부모 등의 경제적·비경제적 지원이 재산 형성·유지 기여로 평가될 수 있는 영역입니다.</strong> 지원의 성격과 출처를 자료로 정리하는 것이 중요합니다.',
      },
      {
        question: '시부모가 준 돈은 상대방 기여로만 보나요?',
        answer:
          '<strong>지원이 어느 쪽에 귀속되는지·어떤 명목인지에 따라 평가가 달라질 수 있는 영역입니다.</strong> 일률적으로 한쪽 기여로 단정되지는 않습니다.',
      },
      {
        question: '증여받은 돈은 원칙적으로 특유재산인가요?',
        answer:
          '<strong>증여로 받은 특유재산과 공동 형성에 기여한 자금은 구분해 평가되는 영역입니다.</strong> 자금 흐름과 투입 내역을 함께 정리하는 것이 좋습니다.',
      },
      {
        question: '부모가 빌려준 돈은 어떻게 처리되나요?',
        answer:
          '<strong>대여인지 증여인지에 따라 채무로 볼지 기여로 볼지 달라질 수 있는 영역입니다.</strong> 차용증·이체 명목 자료가 판단에 영향을 줄 수 있습니다.',
      },
      {
        question: '지원금이 들어간 집의 가액은 어느 시점 기준인가요?',
        answer:
          '<strong>분할 대상 재산의 가액은 사실심 변론종결일을 기준으로 평가되는 영역입니다.</strong> 최신 시세 자료를 함께 제출하는 것이 좋습니다.',
      },
    ],
    cta: { text: '재산분할·위자료 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '특유재산 분할 제외 기준', href: '/guide/divorce/divorce-special-property-exclusion-criteria' },
      { label: '재산분할 비율 핵심 요소', href: '/guide/divorce/property-division-ratio-key-factors' },
      { label: '재산분할 종합 정리', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '전업주부 기여도 재산분할', href: '/guide/divorce/divorce-late-life-homemaker-contribution-track' },
      { label: '재산분할 기준 시점', href: '/guide/divorce/divorce-property-division-cutoff-date' },
    ],
  },

  // ─── 3 divorce-spouse-unilateral-asset-disposal-divorce-ground-track ───
  {
    domain: 'divorce',
    slug: 'divorce-spouse-unilateral-asset-disposal-divorce-ground-track',
    keyword: '배우자 공동재산 무단처분 이혼 사유 판단',
    questionKeyword: '배우자가 공동재산을 마음대로 처분해 버렸는데 이것만으로 이혼 사유가 되나요?',
    ctaKeyword: '공동재산 무단처분 이혼 사유 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '공동재산 무단처분 이혼 사유 — 5단계 판단 트랙 | 로앤가이드',
      description:
        '배우자가 공동재산 주요 부분을 마음대로 처분해 버려 이혼 사유가 되는지, 추가 처분은 어떻게 막는지 막막하다면 판단·보전 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"맞벌이로 함께 모은 돈으로 산 부동산과 예금이 사실상 우리 가정의 전 재산인데, 배우자가 제 동의도 없이 그 주요 부분을 일방적으로 처분하고 행방조차 분명히 말해주지 않습니다. 가정 경제가 한순간에 흔들렸고 신뢰도 무너졌어요. 이런 무단처분 행위만으로도 이혼 사유가 되는지, 어떻게 입증해야 하는지 막막한 상황입니다." 민법 제840조 제6호는 \'혼인을 계속하기 어려운 중대한 사유가 있을 때\'를 재판상 이혼 사유로 규정하는 영역입니다. 대법원 2025므10730(대법원, 2025.09.04)은 혼인 중 부양·협조의무 등을 통하여 공동으로 이룩한 재산의 주요 부분을 부부 일방이 정당한 이유 없이 상대방의 협의·동의 없이 일방적으로 처분하는 등으로 가정공동체의 경제적 기반을 형해화하거나 위태롭게 하는 행위가 제840조 제6호의 이혼 사유에 해당할 수 있다는 취지를 판시한 사례입니다. 피해자라면 ① 무단처분 확인 ② 공동재산 입증 ③ 파탄 사정 정리 ④ 이혼 청구 ⑤ 분할·보전 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 공동재산 무단처분 이혼 사유 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 처분확인·공동입증·파탄정리·청구·보전 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 무단처분 확인</strong> — 처분 대상·시점·금액과 동의 없음 확인.</li>\n<li><strong>② 공동재산 입증</strong> — 그 재산이 부부 공동으로 형성한 주요 재산임을 입증.</li>\n<li><strong>③ 파탄 사정 정리</strong> — 경제적 기반이 형해화·위태로워진 경위 정리.</li>\n<li><strong>④ 이혼 청구</strong> — 민법 제840조 제6호 사유로 재판상 이혼 청구 검토.</li>\n<li><strong>⑤ 분할·보전</strong> — 재산분할 청구와 처분 방지 보전처분 병행.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공동으로 이룩한 재산의 주요 부분을 정당한 이유 없이 상대방 동의 없이 일방적으로 처분해 가정공동체의 경제적 기반을 형해화·위태롭게 한 행위는 제840조 제6호 이혼 사유에 해당할 수 있는 영역입니다. 처분의 \'정당한 이유 없음\'과 \'주요 부분\' 여부가 판단의 핵심입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거 확보·보전·청구·변론·판결 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 무단처분·공동재산 자료 확보 (즉시)</strong> — 등기·이체·매매 내역 정리.</li>\n<li><strong>2단계 — 추가 처분 방지 보전 검토 (긴급)</strong> — 가압류·가처분 등 보전처분 검토.</li>\n<li><strong>3단계 — 가정법원 이혼·재산분할 청구</strong> — 제840조 제6호 사유 주장과 병합.</li>\n<li><strong>4단계 — 파탄·경제적 기반 형해화 변론 (수개월)</strong> — 처분 경위와 가정 영향 입증.</li>\n<li><strong>5단계 — 판결 확정 후 분할·집행</strong>.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·위자료 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">공동재산 무단처분 이혼 사유 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 처분·공동재산·파탄 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>처분된 재산 등기부등본·말소 내역</strong></li>\n<li><strong>처분 자금 이체·인출 내역</strong></li>\n<li><strong>공동 형성 입증 자료 (소득·이체·매수 자료)</strong></li>\n<li><strong>동의 없음·정당한 이유 부재 입증 자료</strong></li>\n<li><strong>가정 경제 영향 입증 자료 (생활비 중단 등)</strong></li>\n<li><strong>보전처분 신청 자료 (가압류·가처분)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 무단처분이 의심되면 추가 처분을 막기 위한 가압류·가처분 등 보전처분을 함께 검토하는 것이 중요한 영역입니다. 처분이 \'정당한 이유 없이\' 이루어졌는지, 그 재산이 \'주요 부분\'인지 입증 자료를 갖춰두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>주요 부분 여부</strong> — 처분 재산이 가정 경제의 주요 부분인지.</li>\n<li><strong>정당한 이유</strong> — 채무 변제 등 정당한 사유가 있었는지.</li>\n<li><strong>파탄 인정</strong> — 경제적 기반 형해화로 혼인 파탄에 이르렀는지.</li>\n<li><strong>책임 정도</strong> — 처분 행위의 유책성 평가.</li>\n<li><strong>재산 회수</strong> — 처분 재산의 추적·보전·원상회복 가능성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>관할 가정법원 민원실</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 공동재산 주요 부분 무단처분의 이혼 사유 해당 영역',
        summary:
          '대법원 2025므10730(대법원, 2025.09.04 선고) 영역에서 법원은 민법 제840조 제6호의 이혼 사유인 \'혼인을 계속하기 어려운 중대한 사유\'를 설명하면서, 혼인 중 부양·협조의무 등을 통하여 공동으로 이룩한 재산의 주요 부분을 부부 일방이 정당한 이유 없이 상대방의 협의나 동의 없이 일방적으로 처분하는 등으로 가정공동체의 경제적 기반을 형해화하거나 위태롭게 하는 행위가 이혼 사유에 해당할 수 있다는 취지로 판시했습니다. 공동재산 무단처분을 이혼 사유로 다투는 사안에서 이 법리를 검토해볼 수 있습니다.',
        takeaway:
          '공동재산 + 정당한 이유 없는 무단처분 + 경제적 기반 형해화 결합 시 제840조 제6호 이혼 사유 검토 영역 — 처분·공동재산 자료 확보 후 보전처분과 변호인 상담을 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '배우자가 공동재산을 마음대로 판 것만으로 이혼이 되나요?',
        answer:
          '<strong>공동재산 주요 부분의 정당한 이유 없는 무단처분이 경제적 기반을 형해화했다면 이혼 사유로 검토할 수 있는 영역입니다.</strong> 처분 경위와 영향이 함께 평가됩니다.',
      },
      {
        question: '처분에 정당한 이유가 있으면 어떻게 되나요?',
        answer:
          '<strong>채무 변제 등 정당한 이유가 인정되면 이혼 사유 판단이 달라질 수 있는 영역입니다.</strong> \'정당한 이유 없음\'을 다투는 자료가 중요합니다.',
      },
      {
        question: '이미 처분된 재산을 되찾을 수 있나요?',
        answer:
          '<strong>처분 재산 추적·보전·원상회복은 사안에 따라 검토할 수 있는 영역입니다.</strong> 추가 처분을 막는 가압류·가처분을 먼저 검토하는 것이 좋습니다.',
      },
      {
        question: '추가 처분을 막으려면 무엇부터 해야 하나요?',
        answer:
          '<strong>가압류·가처분 등 보전처분으로 처분을 막는 것을 검토할 수 있는 영역입니다.</strong> 시간이 지날수록 회수가 어려워질 수 있어 신속한 대응이 중요합니다.',
      },
      {
        question: '무단처분도 위자료 사유가 되나요?',
        answer:
          '<strong>유책성이 인정되면 위자료 산정에 반영될 수 있는 영역입니다.</strong> 처분 경위·정도와 가정에 미친 영향을 정리해두는 것이 좋습니다.',
      },
    ],
    cta: { text: '재산분할·위자료 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산처분 사유와 대응', href: '/guide/divorce/divorce-asset-disposal-grounds' },
      { label: '재산 이전 가압류 보전', href: '/guide/divorce/divorce-asset-transfer-prevention-attachment' },
      { label: '재산은닉 방어 대응', href: '/guide/divorce/divorce-property-concealment-defense' },
      { label: '숨긴 재산 발견 대응', href: '/guide/divorce/divorce-hidden-asset-discovery' },
      { label: '재산분할 종합 정리', href: '/guide/divorce/divorce-property-division-comprehensive' },
    ],
  },

  // ─── 4 divorce-at-fault-spouse-exceptional-petition-allowed-track ───
  {
    domain: 'divorce',
    slug: 'divorce-at-fault-spouse-exceptional-petition-allowed-track',
    keyword: '유책배우자 이혼 청구 예외 허용 요건',
    questionKeyword: '제가 잘못한 쪽인데도 이혼을 청구할 수 있는 경우가 있나요? 상대방이 이혼을 안 해주면 끝인가요?',
    ctaKeyword: '유책배우자 이혼 청구 예외 정리',
    type: '준비형',
    perspective: 'neutral',
    meta: {
      title: '유책배우자 이혼 청구 예외 — 5단계 허용 요건 트랙 | 로앤가이드',
      description:
        '혼인 파탄에 책임이 있는데도 이혼을 청구할 수 있는지, 상대방이 거부만 하면 정말 끝인지 막막하다면 예외 허용 요건 5가지 대응 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"오래전 제 잘못으로 혼인관계가 멀어졌고, 지금은 사실상 따로 산 지 여러 해가 됐습니다. 그동안 자녀 양육비와 생활비는 책임지며 상대방을 배려해 왔는데, 상대방은 끝까지 이혼은 못 해준다고 합니다. 정작 혼인을 유지할 의사는 없어 보이는데 단지 거부만 하는 상황이에요. 제가 유책배우자라서 영영 이혼을 청구할 수 없는 건지, 예외가 인정되는 경우가 있는지 막막합니다." 민법 제840조는 원칙적으로 유책주의를 채택해, 파탄에 주된 책임이 있는 배우자는 이를 사유로 이혼을 청구할 수 없는 것이 원칙인 영역입니다. 대법원 2021므14258(대법원, 2022.06.16)은 유책배우자의 유책성을 상쇄할 정도로 상대방·자녀에 대한 보호와 배려가 이루어졌거나 세월의 경과로 책임의 경중을 따지는 것이 무의미해진 경우 등 예외적으로 유책배우자의 이혼 청구를 허용할 수 있다는 취지를 판시한 사례입니다. 당사자라면 ① 책임 정도 정리 ② 배려·이행 입증 ③ 상대방 의사 점검 ④ 예외 요건 검토 ⑤ 청구 준비 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 유책배우자 이혼 청구 예외 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 책임정리·배려입증·의사점검·요건검토·청구준비 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 책임 정도 정리</strong> — 파탄 원인과 본인 책임의 경중 정리.</li>\n<li><strong>② 배려·이행 입증</strong> — 양육비·생활비 등 상대방·자녀 보호·배려 이행 자료.</li>\n<li><strong>③ 상대방 의사 점검</strong> — 상대방에게 실제 혼인계속의사가 있는지 검토.</li>\n<li><strong>④ 예외 요건 검토</strong> — 유책성 상쇄·세월 경과 등 예외 인정 요건 검토.</li>\n<li><strong>⑤ 청구 준비</strong> — 예외 인정 가능성을 전제로 이혼 청구 준비.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 유책배우자의 이혼 청구는 원칙적으로 허용되지 않지만, 유책성을 상쇄할 정도의 보호·배려가 이루어졌거나 세월 경과로 책임 경중을 따지는 것이 무의미해진 경우 등 예외적으로 허용될 수 있는 영역입니다. 상대방의 혼인계속의사가 진정한지도 함께 검토됩니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 정리·이행 입증·청구·변론·판결 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 파탄 경위·책임 자료 정리 (즉시)</strong> — 별거 기간·파탄 원인 시간 순 정리.</li>\n<li><strong>2단계 — 배려·이행 자료 확보 (1~2주)</strong> — 양육비·생활비 송금 내역 등.</li>\n<li><strong>3단계 — 가정법원 이혼 청구</strong> — 예외 인정 사정을 함께 주장.</li>\n<li><strong>4단계 — 상대방 혼인계속의사 다툼 (수개월)</strong> — 진정한 의사인지 변론.</li>\n<li><strong>5단계 — 판결 확정</strong> — 예외 인정 여부에 따라 결과 결정.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 협의이혼 준비서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">유책배우자 이혼 청구 예외 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 책임·배려·의사 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>별거 기간·경위 입증 자료</strong></li>\n<li><strong>양육비·생활비 이행 내역 (송금 자료)</strong></li>\n<li><strong>상대방·자녀 배려 입증 자료</strong></li>\n<li><strong>상대방 혼인계속의사 관련 자료 (메시지·태도)</strong></li>\n<li><strong>파탄 원인·책임 정리 자료</strong></li>\n<li><strong>장기 별거·관계 회복 불가 입증 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 예외 인정의 핵심은 \'유책성 상쇄 정도의 보호·배려\'와 \'세월 경과\', 그리고 \'상대방의 진정한 혼인계속의사 유무\'입니다. 양육비·생활비 이행 내역과 장기 별거 자료를 시간 순으로 정리해두는 것이 도움이 될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>유책성 상쇄</strong> — 보호·배려가 유책성을 상쇄할 정도인지.</li>\n<li><strong>세월 경과</strong> — 책임 경중을 따지는 것이 무의미해졌는지.</li>\n<li><strong>혼인계속의사</strong> — 상대방의 거부가 진정한 의사인지 보복적인지.</li>\n<li><strong>자녀 보호</strong> — 미성년 자녀 양육·복리 고려 여부.</li>\n<li><strong>경제적 보장</strong> — 이혼 후 상대방의 생활 보장 정도.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>관할 가정법원 민원실</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 유책배우자 이혼 청구의 예외적 허용 요건 영역',
        summary:
          '대법원 2021므14258(대법원, 2022.06.16 선고) 영역에서 법원은 민법 제840조가 원칙적으로 유책주의를 채택해 파탄에 주된 책임이 있는 배우자는 이를 사유로 이혼을 청구할 수 없으나, 이혼청구 배우자의 유책성을 상쇄할 정도로 상대방·자녀에 대한 보호와 배려가 이루어졌거나 세월의 경과로 파탄 당시 현저했던 유책성과 상대방의 정신적 고통이 약화되어 책임 경중을 따지는 것이 무의미할 정도가 된 경우 등 예외적으로 유책배우자의 이혼 청구를 허용할 수 있다고 판시했습니다. 유책배우자의 이혼 청구 가능성을 다투는 사안에서 이 법리를 검토해볼 수 있습니다.',
        takeaway:
          '유책배우자 + 유책성 상쇄 보호·배려 + 세월 경과·상대방 의사 결합 시 예외 허용 검토 영역 — 이행·배려 자료 확보 후 변호인 상담·청구 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '잘못한 쪽도 이혼을 청구할 수 있나요?',
        answer:
          '<strong>원칙적으로 어렵지만 예외 요건이 인정되면 청구를 검토할 수 있는 영역입니다.</strong> 유책성 상쇄 정도의 보호·배려와 세월 경과가 핵심입니다.',
      },
      {
        question: '상대방이 이혼을 거부하면 끝인가요?',
        answer:
          '<strong>상대방의 거부가 진정한 혼인계속의사인지 보복적·감정적인지에 따라 달라질 수 있는 영역입니다.</strong> 의사 진정성도 함께 판단됩니다.',
      },
      {
        question: '양육비·생활비를 계속 준 게 도움이 되나요?',
        answer:
          '<strong>상대방·자녀에 대한 보호와 배려는 예외 인정 판단에 반영될 수 있는 영역입니다.</strong> 송금 내역 등 이행 자료를 정리해두는 것이 좋습니다.',
      },
      {
        question: '오래 떨어져 살았으면 예외가 인정되나요?',
        answer:
          '<strong>장기 별거로 책임 경중을 따지는 것이 무의미해졌다고 평가되면 예외가 검토될 수 있는 영역입니다.</strong> 별거 기간·경위 자료가 중요합니다.',
      },
      {
        question: '미성년 자녀가 있으면 더 어렵나요?',
        answer:
          '<strong>미성년 자녀의 양육·복리는 중요한 고려 요소가 되는 영역입니다.</strong> 자녀 보호·배려가 이루어졌는지가 함께 평가됩니다.',
      },
    ],
    cta: { text: '협의이혼 준비서류, AI로 정리하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '유책배우자 예외 청구', href: '/guide/divorce/divorce-at-fault-spouse-exceptional-claim' },
      { label: '장기 별거 파탄 이혼', href: '/guide/divorce/divorce-long-separation-marriage-breakdown-track' },
      { label: '이혼소송 기각 재제소 항소', href: '/guide/divorce/divorce-petition-rejected-grounds-retry' },
      { label: '재판이혼 소송 절차', href: '/guide/divorce/trial-divorce-lawsuit-procedure' },
      { label: '이혼 어디부터 시작', href: '/guide/divorce/decided-divorce-where-to-begin' },
    ],
  },

  // ─── 5 inheritance-limited-acceptance-undisclosed-asset-simple-acceptance-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-limited-acceptance-undisclosed-asset-simple-acceptance-track',
    keyword: '한정승인 후 재산 누락 단순승인 의제 기준',
    questionKeyword: '한정승인을 했는데 재산목록에 일부 재산을 빠뜨리면 단순승인한 걸로 돼서 빚을 다 떠안나요?',
    ctaKeyword: '한정승인 재산 누락 단순승인 의제 정리',
    type: '준비형',
    perspective: 'neutral',
    meta: {
      title: '한정승인 재산 누락 — 5단계 단순승인 의제 판단 트랙 | 로앤가이드',
      description:
        '한정승인 후 재산목록에 일부를 빠뜨리면 단순승인이 돼 빚을 다 떠안는지, 사해의사는 누가 입증하는지 막막하다면 의제 판단 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 빚을 많이 남기고 돌아가셔서 한정승인을 신고했는데, 나중에 보니 미처 알지 못했던 소액 예금과 오래된 차량이 재산목록에서 빠져 있었습니다. 채권자 측은 \'재산을 숨겼으니 단순승인한 것\'이라며 상속 빚 전부를 갚으라고 합니다. 단순히 빠뜨린 것만으로도 한정승인이 깨지고 빚을 다 떠안게 되는 건지, 무엇을 입증해야 하는지 막막합니다." 민법 제1026조 제3호는 한정승인이나 포기 후 상속재산을 은닉·부정소비하거나 고의로 재산목록에 기입하지 않은 때 단순승인을 한 것으로 보도록 규정하는 영역입니다. 대법원 2019다29853(대법원, 2022.07.29)은 위 \'고의로 재산목록에 기입하지 아니한 때\'에 해당하려면 상속인이 상속재산을 은닉하여 상속채권자를 해할 의사가 있어야 하고 그 증명책임은 이를 주장하는 측에 있다는 취지를 판시한 사례입니다. 당사자라면 ① 누락 경위 정리 ② 사해의사 점검 ③ 자료 보완 ④ 채권자 대응 ⑤ 청산 진행 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 한정승인 재산 누락 단순승인 의제 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 누락정리·의사점검·자료보완·채권자대응·청산 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 누락 경위 정리</strong> — 어떤 재산이 왜 누락됐는지 경위 정리.</li>\n<li><strong>② 사해의사 점검</strong> — 채권자를 해할 의사로 고의 누락했는지 검토.</li>\n<li><strong>③ 자료 보완</strong> — 누락 재산을 재산목록에 보완·정정.</li>\n<li><strong>④ 채권자 대응</strong> — 단순승인 의제 주장에 대한 반박 자료 준비.</li>\n<li><strong>⑤ 청산 진행</strong> — 한정승인 효력 유지 전제 청산 절차 진행.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: \'고의로 재산목록에 기입하지 아니한 때\'로 인정되려면 단순한 누락이 아니라 상속재산을 은닉해 상속채권자를 해할 의사가 있어야 하는 영역입니다. 그 사해의사에 대한 증명책임은 단순승인 의제를 주장하는 채권자 측에 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원·민사법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 경위 정리·목록 보완·대응·심리·청산 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 누락 재산·경위 확인 (즉시)</strong> — 누락 항목·인지 시점·금액 정리.</li>\n<li><strong>2단계 — 재산목록 보완·정정 (가능한 한 신속)</strong> — 법원·청산 절차에 보완 반영.</li>\n<li><strong>3단계 — 채권자 주장 대응 (단순승인 의제 다툼)</strong> — 사해의사 부존재 입증.</li>\n<li><strong>4단계 — 사해의사 심리 (수개월)</strong> — 은닉·고의성 여부 다툼.</li>\n<li><strong>5단계 — 한정승인 효력 유지 시 청산 진행</strong> — 상속재산 한도 변제.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 한정승인 필요서류, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">한정승인 재산 누락 단순승인 의제 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·재산·경위 갈래입니다.</strong></p>\n<ul>\n<li><strong>피상속인 기본증명서·가족관계증명서</strong></li>\n<li><strong>한정승인 심판문·신고 재산목록</strong></li>\n<li><strong>누락 재산 자료 (예금·차량 등 시점·금액)</strong></li>\n<li><strong>재산 인지 시점 입증 자료 (통지·조회 내역)</strong></li>\n<li><strong>안심상속 원스톱 서비스 조회 결과</strong></li>\n<li><strong>재산목록 보완·정정 자료</strong></li>\n<li><strong>사해의사 부존재 입증 자료 (단순 착오·미인지 경위)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 채권자가 \'재산 은닉\'을 주장하더라도 사해의사 증명책임은 채권자 측에 있는 영역입니다. 누락이 단순 착오·미인지였음을 보여줄 수 있는 조회 시점·인지 경위 자료를 정리해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사해의사 유무</strong> — 채권자를 해할 의사가 있었는지.</li>\n<li><strong>고의성 판단</strong> — 단순 착오·미인지인지 고의 누락인지.</li>\n<li><strong>증명책임</strong> — 단순승인 의제를 주장하는 측이 입증.</li>\n<li><strong>누락 보완</strong> — 정정·보완으로 의제를 막을 수 있는지.</li>\n<li><strong>청산 범위</strong> — 한정승인 유지 시 상속재산 한도 변제.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>가정법원·민사법원 민원실</strong></li>\n<li><strong>관할 행정복지센터 (안심상속 원스톱 서비스)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 한정승인 후 재산 누락의 법정단순승인(사해의사) 요건 영역',
        summary:
          '대법원 2019다29853(대법원, 2022.07.29 선고) 영역에서 법원은 민법 제1026조 제3호의 법정단순승인 사유 중 \'고의로 재산목록에 기입하지 아니한 때\'에 해당하려면 상속인이 상속재산을 은닉하여 상속채권자를 사해할 의사가 있을 것을 필요로 하고, 그 증명책임은 이를 주장하는 측에 있다는 취지로 판시했습니다. 한정승인 후 재산 누락을 이유로 단순승인 의제를 다투는 사안에서 이 법리를 검토해볼 수 있습니다.',
        takeaway:
          '한정승인 + 재산목록 누락 + 사해의사 증명책임 결합 시 단순승인 의제 다툼 영역 — 인지 경위·조회 시점 자료 확보 후 변호인 상담·대응을 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '재산을 빠뜨리면 원칙적으로 단순승인이 되나요?',
        answer:
          '<strong>단순 누락이 아니라 채권자를 해할 의사로 은닉한 경우에 단순승인 의제가 검토되는 영역입니다.</strong> 고의·사해의사 유무가 핵심입니다.',
      },
      {
        question: '사해의사는 누가 입증하나요?',
        answer:
          '<strong>단순승인 의제를 주장하는 채권자 측에 증명책임이 있는 영역입니다.</strong> 누락이 착오·미인지였음을 보여줄 자료를 갖춰두는 것이 좋습니다.',
      },
      {
        question: '몰랐던 재산이 뒤늦게 나오면 어떻게 하나요?',
        answer:
          '<strong>재산목록을 보완·정정해 청산 절차에 반영하는 것을 검토할 수 있는 영역입니다.</strong> 인지 시점과 경위를 함께 기록해두는 것이 좋습니다.',
      },
      {
        question: '한정승인 신고 전 재산 조회는 어떻게 하나요?',
        answer:
          '<strong>안심상속 원스톱 서비스 등으로 피상속인 재산을 조회해 목록에 반영하는 것을 검토할 수 있는 영역입니다.</strong> 누락을 줄이는 데 도움이 됩니다.',
      },
      {
        question: '단순승인으로 인정되면 빚을 다 갚아야 하나요?',
        answer:
          '<strong>법정단순승인이 인정되면 고유재산으로도 변제 책임을 질 수 있는 영역입니다.</strong> 그렇기에 사해의사 부존재를 다투는 대응이 중요합니다.',
      },
    ],
    cta: { text: '한정승인 필요서류, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '한정승인 후 재산처분 단순승인 의제', href: '/guide/inheritance/inheritance-limited-acceptance-after-sell-deemed-simple' },
      { label: '단순승인 후 숨은 빚 회수', href: '/guide/inheritance/inheritance-simple-approval-hidden-debt-recovery' },
      { label: '한정승인 vs 상속포기 선택', href: '/guide/inheritance/inheritance-limited-acceptance-vs-renunciation-choice' },
      { label: '한정승인 준비', href: '/guide/inheritance/inheritance-limited-acceptance-preparation' },
      { label: '한정승인 청산 5단계', href: '/guide/inheritance/inheritance-limited-acceptance-liquidation-5steps' },
    ],
  },

  // ─── 6 traffic-accident-health-insurance-subrogation-liability-claim-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-health-insurance-subrogation-liability-claim-track',
    keyword: '건강보험 급여 후 책임보험금 대위 피해자 청구',
    questionKeyword: '교통사고 치료를 건강보험으로 받았는데 공단이 가져간 책임보험금 때문에 제가 받을 게 줄어드나요?',
    ctaKeyword: '건강보험 대위 책임보험금 청구 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '건강보험 대위 책임보험금 — 5단계 피해자 청구 트랙 | 로앤가이드',
      description:
        '교통사고 치료를 건강보험으로 받았는데 공단 대위 때문에 받을 보험금이 줄어드는지, 직접 청구분은 어디까지인지 막막하다면 청구 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"교통사고로 입원 치료를 받으면서 비용 부담을 줄이려고 국민건강보험으로 진료를 받았습니다. 그런데 나중에 보험사·공단 사이에서 정산이 복잡하게 얽혀, 제가 가해자 측 책임보험금에서 실제로 받을 수 있는 금액이 줄어드는 건 아닌지 걱정됩니다. 공단이 대신 청구해 가는 돈과 제가 직접 청구할 돈의 경계가 어디인지 막막한 상황입니다." 자동차손해배상 보장법 제5조 제1항은 책임보험 가입 의무를, 같은 법 시행령 제3조는 책임보험금 한도를 정하는 영역입니다. 대법원 2022다235009(대법원, 2025.05.15)은 국민건강보험공단이 교통사고 피해자에게 보험급여를 한 다음 국민건강보험법 제58조 제1항에 따라 자배법 시행령 제3조 제1항 제2호 단서에 의한 책임보험금 청구권을 대위하는 경우, 그 대위의 범위는 공단부담금의 범위에 한정된다는 취지를 판시한 사례입니다. 피해자 측이라면 ① 치료·급여 내역 확보 ② 손해액 정리 ③ 공단 대위 범위 확인 ④ 직접 청구분 산정 ⑤ 합의·청구 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 건강보험 대위 책임보험금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 급여확보·손해정리·대위확인·청구산정·합의 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 치료·급여 내역 확보</strong> — 진료 기록·건강보험 급여 내역 정리.</li>\n<li><strong>② 손해액 정리</strong> — 치료비·일실수입·위자료 등 손해 항목 정리.</li>\n<li><strong>③ 공단 대위 범위 확인</strong> — 공단부담금 한도 내 대위 범위 확인.</li>\n<li><strong>④ 직접 청구분 산정</strong> — 본인부담금·대위분 외 직접 청구 손해 산정.</li>\n<li><strong>⑤ 합의·청구</strong> — 보험사와 합의 또는 손해배상 청구 진행.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 공단이 피해자에게 보험급여를 한 뒤 책임보험금 청구권을 대위하는 경우 그 범위는 공단부담금 범위에 한정되는 영역입니다. 따라서 피해자가 직접 청구할 수 있는 손해와 공단이 대위해 가는 부분의 경계를 정리하는 것이 청구액 산정의 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보험사·법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 내역 확보·손해 산정·대위 확인·청구·합의 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 진료·건강보험 급여 내역 확보 (즉시)</strong> — 진료비 세부내역·급여·본인부담금 구분.</li>\n<li><strong>2단계 — 손해 항목 정리 (1~2주)</strong> — 치료비·일실수입·위자료 등.</li>\n<li><strong>3단계 — 공단 대위 범위·직접 청구분 구분</strong> — 공단부담금 한도 확인.</li>\n<li><strong>4단계 — 보험사 합의 또는 손해배상 청구</strong> — 직접 청구 손해 청구.</li>\n<li><strong>5단계 — 산정 다툼 시 분쟁조정·소송 검토</strong>.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">건강보험 대위 책임보험금 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고·치료·손해 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 교통사고 사실 확인원</strong></li>\n<li><strong>진료비 세부내역서 (급여·본인부담금 구분)</strong></li>\n<li><strong>국민건강보험 급여 내역 (공단부담금 확인)</strong></li>\n<li><strong>입원·치료 진료 기록·진단서</strong></li>\n<li><strong>소득 자료 (일실수입 산정)</strong></li>\n<li><strong>가해 차량 보험 정보 (보험사·증권번호)</strong></li>\n<li><strong>과실비율 관련 자료 (블랙박스·현장 사진)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 공단 대위는 공단부담금 범위에 한정되므로, 진료비 세부내역에서 급여(공단부담금)와 본인부담금을 구분해두는 것이 직접 청구분 산정에 도움이 되는 영역입니다. 보험사 산정액에 동의하기 전 손해보험협회 분쟁조정이나 변호인 상담을 먼저 검토하는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>대위 범위</strong> — 공단 대위가 공단부담금 범위에 한정되는지.</li>\n<li><strong>직접 청구분</strong> — 피해자가 직접 청구할 수 있는 손해 범위.</li>\n<li><strong>과실비율</strong> — 피해자 과실이 청구액에 반영되는지.</li>\n<li><strong>손해 항목 산정</strong> — 치료비·일실수입·위자료 평가.</li>\n<li><strong>중복 정산</strong> — 건강보험 급여와 책임보험금의 정산 관계.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>손해보험협회 분쟁조정위원회 02-3702-8600</strong></li>\n<li><strong>국민건강보험공단 1577-1000</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 건강보험공단의 책임보험금 청구권 대위 범위 영역',
        summary:
          '대법원 2022다235009(대법원, 2025.05.15 선고) 영역에서 법원은 국민건강보험공단이 교통사고 피해자에게 보험급여를 한 다음 국민건강보험법 제58조 제1항에 따라 자동차손해배상 보장법 시행령 제3조 제1항 제2호 단서 규정에 의한 책임보험금 청구권을 대위하는 경우, 그 대위의 범위는 공단부담금의 범위에 한정된다는 취지로 판시했습니다. 건강보험으로 치료받은 교통사고 피해자가 책임보험금 청구 범위를 다투는 사안에서 이 법리를 검토해볼 수 있습니다.',
        takeaway:
          '건강보험 급여 + 공단부담금 한도 대위 + 피해자 직접 청구분 결합 시 청구액 산정 영역 — 급여·본인부담금 구분 자료 확보 후 변호인 상담·분쟁조정을 검토해볼 수 있습니다.',
      },
    ],
    faq: [
      {
        question: '건강보험으로 치료받으면 받을 보험금이 줄어드나요?',
        answer:
          '<strong>공단 대위는 공단부담금 범위에 한정되어 피해자의 직접 청구분과 경계가 나뉘는 영역입니다.</strong> 급여·본인부담금을 구분해 산정하는 것이 중요합니다.',
      },
      {
        question: '공단이 가져가는 돈은 어디까지인가요?',
        answer:
          '<strong>공단의 대위 범위는 공단부담금 범위에 한정되는 영역입니다.</strong> 그 외 손해는 피해자가 직접 청구하는 것을 검토할 수 있습니다.',
      },
      {
        question: '제가 직접 청구할 수 있는 손해는 무엇인가요?',
        answer:
          '<strong>본인부담금·일실수입·위자료 등 공단 대위분 외 손해를 직접 청구하는 것을 검토할 수 있는 영역입니다.</strong> 항목별 자료를 정리하는 것이 좋습니다.',
      },
      {
        question: '과실비율이 있으면 청구액이 줄어드나요?',
        answer:
          '<strong>피해자 과실이 손해액 산정에 반영될 수 있는 영역입니다.</strong> 과실비율 다툼이 있으면 손해보험협회 분쟁조정을 검토할 수 있습니다.',
      },
      {
        question: '보험사 산정액에 바로 동의해도 되나요?',
        answer:
          '<strong>대위 범위와 직접 청구분을 확인하기 전 동의는 신중히 검토하는 것이 좋은 영역입니다.</strong> 분쟁조정·상담으로 산정 근거를 먼저 점검하는 것을 검토할 수 있습니다.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 손해배상 계산', href: '/guide/traffic-accident/traffic-accident-compensation-calculation-guide' },
      { label: '보험사 저가 합의 대응', href: '/guide/traffic-accident/insurance-lowball-settlement-response' },
      { label: '교통사고 부상 보상', href: '/guide/traffic-accident/traffic-accident-injury-compensation' },
      { label: '산재 vs 자동차보험 중복', href: '/guide/traffic-accident/traffic-accident-workers-comp-vs-auto-insurance' },
      { label: '합의 전 체크리스트', href: '/guide/traffic-accident/accident-settlement-checklist' },
    ],
  },
];
