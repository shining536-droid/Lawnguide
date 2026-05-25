import { SpokePage } from '../spoke-pages';

// batch78 divorce + inheritance + traffic-accident — 6개 (2026-05-26)
//
// 고유 존재 이유:
// 1. divorce-fault-spouse-alimony-post-breakdown-factors-track — 유책배우자 위자료 산정 시 파탄 이후 최종 이혼까지 발생한 사정 포함 여부 다툼 트랙.
// 2. divorce-de-facto-dissolution-property-cutoff-date-track — 사실혼 해소 재산분할에서 분할 대상·가액의 기준 시점(사실혼 해소일) 다툼 트랙.
// 3. divorce-property-valuation-court-appraisal-track — 재산분할에서 법원 직권 시가감정·변론종결일 기준 가액 평가 트랙.
// 4. divorce-property-division-2year-deadline-omitted-asset-track — 재산분할 제척기간 2년 + 청구 후 누락 재산 추가 청구 한계 트랙.
// 5. inheritance-yuryubun-disposed-gift-valuation-track — 유류분 반환청구에서 증여재산이 처분·수용된 경우 가액 산정 방법 트랙.
// 6. traffic-accident-victim-died-during-treatment-liability-insurance-track — 교통사고 부상자가 치료 중 사망한 경우 책임보험금 산정 방법 트랙.

export const spokesBatch78DivorceInheritTraffic: SpokePage[] = [
  // ─── 1 divorce-fault-spouse-alimony-post-breakdown-factors-track ───
  {
    domain: 'divorce',
    slug: 'divorce-fault-spouse-alimony-post-breakdown-factors-track',
    keyword: '유책배우자 위자료 산정 파탄 이후 사정',
    questionKeyword: '유책배우자에게 위자료를 청구할 때 파탄 이후 이혼까지 있었던 일도 위자료 산정에 반영되나요?',
    ctaKeyword: '유책배우자 위자료 산정 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '유책배우자 위자료 산정 — 5단계 파탄 이후 사정 반영 | 로앤가이드',
      description:
        '유책배우자에게 위자료를 청구하는데 파탄 이후 이혼까지 있었던 일도 반영되는지 막막하다면 산정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배우자의 외도로 혼인이 파탄났고 이혼 소송을 준비하고 있습니다. 그런데 파탄 이후에도 배우자가 별거 중 생활비를 끊고 자녀 면접을 막는 등 고통을 더했어요. 위자료가 외도 시점만 보고 정해지는지, 파탄 이후 이혼에 이르기까지 있었던 일까지 반영되는지 모르겠습니다. 개별 행위마다 따로 손해배상을 해야 하는 건지도 막막한 상황입니다." 민법 제843조·제806조는 재판상 이혼 시 위자료 청구를 규정하고, 대법원 2024므11526(대법원, 2024.10.25 선고)은 유책배우자에 대한 위자료 액수를 산정할 때 혼인관계의 파탄 이후 최종적 이혼에 이르기까지 발생한 모든 사정을 고려해야 하며, 개별적 유책행위에 대해 별개의 손해배상청구를 할 수 있더라도 마찬가지라고 판시한 사례입니다. 위자료는 파탄 시점이 아니라 최종 이혼 시점에서 전체로 평가되는 영역입니다. 피해자라면 ① 유책행위 정리 ② 파탄 이후 사정 기록 ③ 증거 확보 ④ 위자료 청구 ⑤ 이혼 병행 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 유책배우자 위자료 산정 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 유책정리·파탄이후·증거·청구·병행 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 유책행위 정리</strong> — 외도·폭언·유기 등 파탄 원인이 된 행위 시점·내용 정리.</li>\n<li><strong>② 파탄 이후 사정 기록</strong> — 별거 중 생활비 중단·면접 방해 등 추가 고통 기록.</li>\n<li><strong>③ 증거 확보</strong> — 메시지·녹취·이체 내역 등 객관적 자료.</li>\n<li><strong>④ 위자료 청구</strong> — 최종 이혼 시점 기준 전체 사정을 반영해 청구.</li>\n<li><strong>⑤ 이혼 소송 병행</strong> — 재산분할·양육 청구와 함께 진행.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 위자료는 개별 유책행위 하나하나가 아니라 파탄 이후 최종 이혼까지의 일련의 경과 전체를 놓고 평가되는 영역입니다. 따라서 파탄 이후 발생한 사정도 빠짐없이 기록해두는 것이 산정에 영향을 줄 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 증거 정리·소장 제출·변론·산정·판결 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 유책행위·파탄 이후 사정 정리 (즉시)</strong> — 시점별 행위와 고통 내용을 시간 순으로 기록.</li>\n<li><strong>2단계 — 객관적 증거 확보 (1~2주)</strong> — 메시지·녹취·이체 내역·진단서.</li>\n<li><strong>3단계 — 이혼·위자료 소장 제출 (가정법원)</strong> — 재산분할 청구와 병합.</li>\n<li><strong>4단계 — 변론 과정에서 파탄 이후 사정 주장 (수개월)</strong> — 법원이 모든 사정을 직권으로 참작.</li>\n<li><strong>5단계 — 판결 확정 후 위자료 집행</strong> — 미지급 시 강제집행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·위자료 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">유책배우자 위자료 산정 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·유책·고통 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>유책행위 입증 자료 (메시지·사진·녹취)</strong></li>\n<li><strong>파탄 이후 별거 기간·생활비 중단 자료</strong></li>\n<li><strong>면접교섭 방해·연락 단절 기록</strong></li>\n<li><strong>정신적 고통 관련 진단서·상담 기록</strong></li>\n<li><strong>혼인 기간·재산 상태 자료 (산정 참고)</strong></li>\n<li><strong>유책행위 시점별 시간 순 정리표</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 위자료 액수는 유책행위 경위와 정도, 혼인 기간, 배우자의 연령·재산 상태 등 변론에 나타난 모든 사정을 법원이 직권으로 참작합니다. 파탄 이후 사정까지 시간 순으로 정리해두면 산정에 도움이 될 수 있습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>파탄 시점 다툼</strong> — 혼인이 언제 파탄됐는지에 따라 평가 범위가 달라짐.</li>\n<li><strong>쌍방 책임 주장</strong> — 책임 정도가 대등하면 위자료가 기각될 수 있는 영역.</li>\n<li><strong>위자료 산정 범위</strong> — 정신적 고통 정도·기간에 따라 사례별로 다르게 검토.</li>\n<li><strong>개별 청구 가능성</strong> — 개별 유책행위에 별도 손해배상 청구도 가능한 영역.</li>\n<li><strong>소멸시효</strong> — 위자료 청구는 이혼 시점 기준으로 확정·평가.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>관할 가정법원 민원실</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 유책배우자 위자료 산정 시 파탄 이후 모든 사정 고려 영역',
        summary:
          '대법원 2024므11526(대법원, 2024.10.25 선고) 사건에서 법원은 유책배우자에 대한 위자료 액수를 산정할 때 유책행위에 이르게 된 경위와 정도, 혼인관계 파탄의 원인과 책임 등 변론에 나타난 모든 사정을 참작해야 하고, 여기에는 혼인관계 파탄 이후 최종적 이혼에 이르기까지 발생한 모든 사정이 포함되며, 개별적 유책행위에 별개의 손해배상청구를 할 수 있더라도 마찬가지라고 판시했습니다. 파탄 이후 사정을 반영해 위자료를 다투는 사안에서 이 법리가 검토될 수 있는 영역입니다.',
        takeaway:
          '유책배우자 위자료 + 파탄 이후 최종 이혼까지 사정 결합 시 전체 평가 영역 — 시점별 사정 정리 후 변호인 상담·청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '위자료는 외도 시점만 보고 정해지나요?',
        answer:
          '<strong>외도 등 개별 시점이 아니라 파탄 이후 최종 이혼에 이르기까지의 모든 사정을 함께 보고 평가되는 영역입니다.</strong> 파탄 이후 사정도 정리해두는 것이 좋습니다.',
      },
      {
        question: '파탄 이후 별거 중 있었던 일도 위자료에 반영되나요?',
        answer:
          '<strong>별거 중 생활비 중단·면접 방해 등 파탄 이후 사정도 산정 시 참작될 수 있는 영역입니다.</strong> 시점별로 기록해두는 것이 도움이 됩니다.',
      },
      {
        question: '개별 유책행위마다 따로 손해배상을 청구할 수 있나요?',
        answer:
          '<strong>개별 유책행위에 별개의 손해배상청구를 검토할 수 있는 영역입니다.</strong> 다만 위자료 산정 자체는 전체 사정을 종합해 평가됩니다.',
      },
      {
        question: '쌍방에게 책임이 있으면 위자료를 못 받나요?',
        answer:
          '<strong>파탄 책임 정도가 대등하다고 평가되면 위자료 청구가 받아들여지지 않을 수 있는 영역입니다.</strong> 상대방 책임이 더 큼을 입증하는 자료 확보가 중요합니다.',
      },
      {
        question: '위자료 액수는 누가 정하나요?',
        answer:
          '<strong>법원이 변론에 나타난 모든 사정을 직권으로 참작해 정하는 영역입니다.</strong> 일률적인 금액으로 단정하기보다 사안에 맞는 범위를 변호인과 확인하세요.',
      },
    ],
    cta: { text: '재산분할·위자료 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '위자료 산정 기준', href: '/guide/divorce/divorce-alimony-calculation-standard' },
      { label: '유책배우자 예외 청구', href: '/guide/divorce/divorce-at-fault-spouse-exceptional-claim' },
      { label: '상간자 손해배상 청구', href: '/guide/divorce/divorce-affair-third-party-damages-track' },
      { label: '재산분할 기준', href: '/guide/divorce/divorce-business-asset-division' },
      { label: '위자료 무고 방어', href: '/guide/divorce/divorce-alimony-false-claim-defense' },
    ],
  },

  // ─── 2 divorce-de-facto-dissolution-property-cutoff-date-track ───
  {
    domain: 'divorce',
    slug: 'divorce-de-facto-dissolution-property-cutoff-date-track',
    keyword: '사실혼 해소 재산분할 기준 시점',
    questionKeyword: '사실혼이 깨졌는데 재산분할은 언제 기준으로 나누나요? 헤어진 뒤 오른 재산은 어떻게 되나요?',
    ctaKeyword: '사실혼 재산분할 기준 시점 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '사실혼 해소 재산분할 기준 시점 — 5단계 산정 트랙 | 로앤가이드',
      description:
        '사실혼이 깨졌는데 재산분할을 언제 기준으로 나눠야 하는지 막막하다면 해소일 기준 5가지 산정 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"10년 가까이 사실혼 관계로 함께 살며 부동산과 예금을 모았는데, 관계가 깨지면서 재산을 나눠야 하는 상황이 됐습니다. 그런데 헤어진 시점 이후에 부동산 시세가 크게 올라서, 어느 시점을 기준으로 나누는 게 맞는지 다툼이 생겼어요. 사실혼도 재산분할이 되는지, 기준 시점은 언제인지 막막한 상황입니다." 민법 제839조의2는 재산분할 청구권을 규정하고 사실혼 해소에도 같은 법리가 준용되는 영역입니다. 대법원 2017므11856(대법원, 2023.07.13 선고)은 사실혼 해소를 원인으로 한 재산분할에서 분할 대상이 되는 재산과 액수는 사실혼이 해소된 날을 기준으로 정해야 하며, 해소 이후 변론종결 시까지 발생한 외부적·후발적 사정은 한정적으로만 참작될 수 있다고 판시한 사례입니다. 당사자라면 ① 사실혼 입증 ② 해소 시점 확정 ③ 재산 목록 정리 ④ 가액 평가 ⑤ 분할 청구 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 사실혼 해소 재산분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실혼입증·해소시점·목록·평가·청구 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실혼 관계 입증</strong> — 동거·혼인 의사·주변 인식 등 사실혼 성립 자료.</li>\n<li><strong>② 해소 시점 확정</strong> — 사실혼이 해소된 날이 재산분할 기준일.</li>\n<li><strong>③ 재산 목록 정리</strong> — 해소일 기준 공동 형성 재산·채무 파악.</li>\n<li><strong>④ 가액 평가</strong> — 원칙적으로 해소일 기준, 후발적 사정은 한정 참작.</li>\n<li><strong>⑤ 재산분할 청구</strong> — 가정법원에 분할 청구 또는 협의.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 사실혼 해소 재산분할은 \'사실혼이 해소된 날\'을 기준으로 분할 대상과 가액을 정하는 영역입니다. 해소 이후 시세 변동 같은 외부적·후발적 사정은 공평한 청산에 현저히 어긋나는 등 특별한 사정이 있을 때 한정적으로만 참작될 수 있습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실혼 입증·자료 확보·청구·평가·분할 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사실혼 성립·해소 시점 자료 확보 (즉시)</strong> — 동거 기간·주변 인식·해소 경위 정리.</li>\n<li><strong>2단계 — 공동 형성 재산 목록 작성 (1~2주)</strong> — 부동산·예금·채무를 해소일 기준 정리.</li>\n<li><strong>3단계 — 가정법원 재산분할 청구 또는 협의</strong> — 사실혼 해소 재산분할 신청.</li>\n<li><strong>4단계 — 가액 평가·후발적 사정 주장 (수개월)</strong> — 해소일 기준 가액 산정, 특별 사정은 별도 주장.</li>\n<li><strong>5단계 — 심판 확정 후 분할 이행</strong> — 미이행 시 강제집행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·위자료 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">사실혼 해소 재산분할 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실혼·재산·시점 갈래입니다.</strong></p>\n<ul>\n<li><strong>동거 기간 입증 자료 (주민등록·우편물·사진)</strong></li>\n<li><strong>혼인 의사·주변 인식 자료 (지인 진술서·경조사 기록)</strong></li>\n<li><strong>사실혼 해소 시점 입증 자료 (이사·연락 단절 기록)</strong></li>\n<li><strong>공동 형성 부동산 등기부등본·시세 자료</strong></li>\n<li><strong>공동 예금·금융 거래 내역</strong></li>\n<li><strong>본인 기여 입증 자료 (소득·가사·운영 기여)</strong></li>\n<li><strong>공동 채무 자료 (대출·보증)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사실혼은 혼인신고가 없어 성립 자체를 먼저 입증해야 하는 영역입니다. 해소 시점은 재산분할 기준일이 되므로, 이사·연락 단절 등 해소를 알 수 있는 자료를 함께 확보해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실혼 성립 여부</strong> — 단순 동거인지 혼인에 준하는 관계인지.</li>\n<li><strong>해소 시점 다툼</strong> — 기준일에 따라 분할 대상·가액이 달라짐.</li>\n<li><strong>후발적 사정 반영</strong> — 해소 이후 시세 상승의 한정적 참작 여부.</li>\n<li><strong>기여도 평가</strong> — 소득·가사·운영 기여의 정도.</li>\n<li><strong>특유재산 제외</strong> — 사실혼 이전 보유 재산의 분할 제외 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>관할 가정법원 민원실</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실혼 해소 재산분할 기준 시점 및 후발적 사정 참작 영역',
        summary:
          '대법원 2017므11856(대법원, 2023.07.13 선고) 사건에서 법원은 사실혼 해소를 원인으로 한 재산분할에서 분할 대상이 되는 재산과 액수는 사실혼이 해소된 날을 기준으로 정해야 하고, 사실혼 해소 이후 변론종결 시까지 사이에 혼인 중 공동의 노력으로 형성·유지한 부동산 등에 발생한 외부적·후발적 사정은 공평한 청산·분배에 현저히 부합하지 않는 결과를 가져오는 등 특별한 사정이 있을 때 한정적으로 참작될 수 있다고 판시했습니다. 사실혼 해소 후 시세가 변동된 사안에서 이 법리가 검토될 수 있는 영역입니다.',
        takeaway:
          '사실혼 해소 + 분할 기준일(해소일) + 후발적 사정 결합 시 가액 산정 평가 영역 — 해소 시점 자료 확보 후 변호인 상담·청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '사실혼도 재산분할을 받을 수 있나요?',
        answer:
          '<strong>혼인에 준하는 사실혼이 인정되면 재산분할을 검토할 수 있는 영역입니다.</strong> 먼저 사실혼 성립 자체를 입증하는 것이 출발점입니다.',
      },
      {
        question: '재산분할은 어느 시점을 기준으로 나누나요?',
        answer:
          '<strong>사실혼이 해소된 날을 기준으로 분할 대상과 가액을 정하는 것이 원칙인 영역입니다.</strong> 해소 시점 확정이 다툼의 핵심이 됩니다.',
      },
      {
        question: '헤어진 뒤 부동산 시세가 올랐는데 반영되나요?',
        answer:
          '<strong>해소 이후 시세 변동 같은 후발적 사정은 한정적으로만 참작될 수 있는 영역입니다.</strong> 공평한 청산에 현저히 어긋나는 등 특별한 사정이 있을 때 검토됩니다.',
      },
      {
        question: '사실혼 시작 전부터 가진 재산도 나눠야 하나요?',
        answer:
          '<strong>사실혼 이전부터 보유한 특유재산은 분할에서 제외되는 사례가 있습니다.</strong> 공동 형성 재산과 구분해 정리해두는 것이 좋습니다.',
      },
      {
        question: '사실혼 성립은 어떻게 입증하나요?',
        answer:
          '<strong>동거 기간·혼인 의사·주변 인식 등을 종합해 평가되는 영역입니다.</strong> 사진·우편물·지인 진술서 등 객관적 자료를 모아두는 것이 도움이 됩니다.',
      },
    ],
    cta: { text: '재산분할·위자료 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '사실혼 해소 재산분할 범위', href: '/guide/divorce/divorce-de-facto-marriage-property-division-scope' },
      { label: '사실혼 위자료 청구', href: '/guide/divorce/divorce-de-facto-marriage-alimony-claim' },
      { label: '재산분할 기준 시점', href: '/guide/divorce/divorce-property-division-cutoff-date' },
      { label: '위자료 산정 기준', href: '/guide/divorce/divorce-alimony-calculation-standard' },
      { label: '사실혼 해소 절차', href: '/guide/divorce/divorce-de-facto-marriage-dissolution' },
    ],
  },

  // ─── 3 divorce-property-valuation-court-appraisal-track ───
  {
    domain: 'divorce',
    slug: 'divorce-property-valuation-court-appraisal-track',
    keyword: '이혼 재산분할 시가감정 직권조사',
    questionKeyword: '이혼 재산분할에서 부동산 가액은 누가 정하나요? 법원이 직접 감정을 시킬 수도 있나요?',
    ctaKeyword: '재산분할 시가감정 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '이혼 재산분할 시가감정 — 5단계 가액 평가 트랙 | 로앤가이드',
      description:
        '이혼 재산분할에서 부동산 가액을 누가 어떻게 정하는지, 법원 직권 감정이 가능한지 막막하다면 평가 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼 재산분할을 하는데 부동산 가액을 두고 배우자와 의견이 크게 갈립니다. 상대는 낮은 공시가격을 주장하고 저는 실거래가를 주장하는데, 누구 말이 맞는지 모르겠어요. 제가 직접 감정을 받아야 하는 건지, 법원이 알아서 시가감정을 해주는 건지, 어느 시점의 가액을 기준으로 하는지도 막막한 상황입니다." 민법 제839조의2는 재산분할 청구권을, 제843조는 재판상 이혼에 이를 준용하도록 규정하는 영역입니다. 대법원 2024므10370(대법원, 2024.05.30 선고)은 재산분할사건에서 법원이 당사자 주장에 구애되지 않고 분할 대상과 가액을 직권으로 조사·판단할 수 있고, 분할 대상 재산과 액수의 기준 시기는 이혼소송 사실심 변론종결일이라고 판시한 사례입니다. 당사자라면 ① 재산 목록 정리 ② 가액 자료 수집 ③ 시가감정 신청 ④ 변론종결일 기준 평가 ⑤ 분할 결정 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 이혼 재산분할 시가감정 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 목록정리·가액자료·시가감정·기준시점·분할 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 재산 목록 정리</strong> — 부동산·예금·차량·채무 등 분할 대상 파악.</li>\n<li><strong>② 가액 자료 수집</strong> — 실거래가·공시가격·잔액 증명 등 가액 근거.</li>\n<li><strong>③ 시가감정 신청</strong> — 가액 다툼 시 법원에 감정 신청 또는 법원 직권 감정.</li>\n<li><strong>④ 변론종결일 기준 평가</strong> — 분할 대상·가액은 사실심 변론종결일 기준.</li>\n<li><strong>⑤ 분할 결정·이행</strong> — 심판 결과에 따라 분할·정산.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 재산분할사건에서 법원은 당사자 주장에 구애되지 않고 분할 대상과 가액을 직권으로 조사·판단할 수 있는 영역입니다. 가액 다툼이 클수록 시가감정 신청 여부와 변론종결일 기준 평가를 변호인과 함께 검토하는 것이 좋습니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 확보·청구·감정·평가·분할 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 분할 대상 재산·가액 자료 확보 (즉시)</strong> — 등기부등본·실거래가·금융 잔액.</li>\n<li><strong>2단계 — 가정법원 재산분할 청구 (이혼 소송 내 병합 또는 별도)</strong>.</li>\n<li><strong>3단계 — 시가감정 신청 또는 법원 직권 감정 (수개월)</strong> — 가액 다툼 부동산 감정.</li>\n<li><strong>4단계 — 변론종결일 기준 가액 확정</strong> — 분할 대상·액수 기준 시기 적용.</li>\n<li><strong>5단계 — 심판 확정 후 분할·정산 이행</strong>.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·위자료 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">이혼 재산분할 시가감정 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 재산·가액·기여 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·가족관계증명서</strong></li>\n<li><strong>부동산 등기부등본·공시가격·실거래가 자료</strong></li>\n<li><strong>예금·금융 잔액 증명서</strong></li>\n<li><strong>차량·보험·기타 자산 자료</strong></li>\n<li><strong>대출·채무 등 소극재산 자료</strong></li>\n<li><strong>본인 기여 입증 자료 (소득·가사 기여)</strong></li>\n<li><strong>시가감정 신청서 (가액 다툼 시)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 부동산 가액 다툼이 크면 법원에 시가감정을 신청하거나 법원이 직권으로 감정을 진행하는 사례가 있습니다. 가액 기준 시점은 사실심 변론종결일이므로, 변론 단계에서 최신 가액 자료를 제출하는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>가액 산정 기준</strong> — 공시가격 vs 실거래가 vs 감정가.</li>\n<li><strong>기준 시점</strong> — 사실심 변론종결일 기준 적용 여부.</li>\n<li><strong>직권 조사 범위</strong> — 법원이 누락 재산을 직권으로 조사할 수 있는지.</li>\n<li><strong>감정 비용 부담</strong> — 시가감정 신청 시 비용 예납·부담 주체.</li>\n<li><strong>특유재산 제외</strong> — 혼인 전·상속·증여 재산의 분할 제외 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>관할 가정법원 민원실</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산분할 직권 조사 및 변론종결일 기준 가액 평가 영역',
        summary:
          '대법원 2024므10370(대법원, 2024.05.30 선고) 사건에서 법원은 재산분할사건에서 법원이 당사자의 주장에 구애되지 않고 재산분할의 대상과 가액을 직권으로 조사·판단할 수 있으며, 재판상 이혼을 전제로 한 재산분할에서 분할 대상이 되는 재산과 액수를 정하는 기준 시기는 이혼소송의 사실심 변론종결일이라고 판시했습니다. 부동산 가액 다툼이 있는 재산분할 사안에서 이 법리가 검토될 수 있는 영역입니다.',
        takeaway:
          '재산분할 + 시가감정·직권 조사 + 변론종결일 기준 결합 시 가액 평가 영역 — 가액 자료 확보 후 변호인 상담·감정 신청 검토 권장.',
      },
    ],
    faq: [
      {
        question: '재산분할에서 부동산 가액은 누가 정하나요?',
        answer:
          '<strong>법원이 당사자 주장에 구애되지 않고 직권으로 조사·판단할 수 있는 영역입니다.</strong> 가액 다툼이 크면 시가감정을 통해 정하는 사례가 있습니다.',
      },
      {
        question: '가액은 어느 시점을 기준으로 하나요?',
        answer:
          '<strong>분할 대상과 액수의 기준 시기는 이혼소송 사실심 변론종결일인 영역입니다.</strong> 변론 단계에서 최신 가액 자료를 제출하는 것이 좋습니다.',
      },
      {
        question: '제가 직접 감정을 받아야 하나요?',
        answer:
          '<strong>당사자가 시가감정을 신청할 수도 있고, 법원이 직권으로 감정을 진행하는 사례도 있는 영역입니다.</strong> 감정 비용·절차는 변호인과 확인하세요.',
      },
      {
        question: '상대가 누락한 재산도 법원이 찾아주나요?',
        answer:
          '<strong>법원은 분할 대상을 직권으로 조사할 수 있는 영역이지만, 당사자가 자료를 적극 제출하는 것이 안전합니다.</strong> 누락 의심 재산은 미리 정리해두세요.',
      },
      {
        question: '공시가격으로 나누면 손해 아닌가요?',
        answer:
          '<strong>가액 산정 기준은 사안에 따라 실거래가·감정가 등으로 달리 평가될 수 있는 영역입니다.</strong> 불리한 기준이 우려되면 시가감정 신청을 검토하세요.',
      },
    ],
    cta: { text: '재산분할·위자료 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 종합 정리', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '재산분할 기준 시점', href: '/guide/divorce/divorce-property-division-cutoff-date' },
      { label: '숨긴 재산 발견 대응', href: '/guide/divorce/divorce-hidden-asset-discovery' },
      { label: '재산분할 사업체 지분', href: '/guide/divorce/divorce-business-asset-division' },
      { label: '위자료 산정 기준', href: '/guide/divorce/divorce-alimony-calculation-standard' },
    ],
  },

  // ─── 4 divorce-property-division-2year-deadline-omitted-asset-track ───
  {
    domain: 'divorce',
    slug: 'divorce-property-division-2year-deadline-omitted-asset-track',
    keyword: '재산분할 제척기간 2년 누락 재산 추가 청구',
    questionKeyword: '이혼 후 재산분할 청구를 했는데 빠뜨린 재산을 2년 지나서 추가로 청구할 수 있나요?',
    ctaKeyword: '재산분할 제척기간 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '재산분할 제척기간 2년 — 5단계 누락 재산 청구 트랙 | 로앤가이드',
      description:
        '이혼 후 2년 제척기간 안에 재산분할을 청구했는데 빠뜨린 재산을 추가로 청구할 수 있는지 막막하다면 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"이혼하고 1년쯤 지나 재산분할 청구를 했는데, 그때는 몰랐던 배우자 명의 부동산을 뒤늦게 알게 됐습니다. 그런데 이미 이혼한 지 2년이 다 돼가서, 빠뜨린 재산을 지금 추가로 청구할 수 있는지 불안합니다. 처음 청구할 때 적지 않은 재산은 영영 못 받는 건지, 제척기간이 정확히 어떻게 적용되는지 막막한 상황입니다." 민법 제839조의2 제3항·제843조는 재산분할청구권이 이혼한 날부터 2년이 지나면 소멸한다고 규정하는 영역입니다. 대법원 2021스766(대법원, 2022.11.10 선고)은 이 2년 기간이 출소기간이며, 재산분할청구 후 제척기간이 지날 때까지 청구 목적물로 하지 않은 재산은 원칙적으로 제척기간을 준수한 것으로 볼 수 없으나, 상대방 지위에서 분할 대상 재산을 주장하는 경우에는 제척기간이 적용되지 않는다고 판시한 사례입니다. 당사자라면 ① 기간 확인 ② 재산 전수 조사 ③ 청구 범위 확정 ④ 누락 방지 ⑤ 기한 내 청구 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 재산분할 제척기간 2년 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 기간확인·전수조사·청구범위·누락방지·기한청구 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 제척기간 확인</strong> — 재산분할청구권은 이혼한 날부터 2년 내 행사.</li>\n<li><strong>② 재산 전수 조사</strong> — 청구 전 배우자 명의 재산을 빠짐없이 조사.</li>\n<li><strong>③ 청구 범위 확정</strong> — 청구 목적물에 모든 분할 대상 포함.</li>\n<li><strong>④ 누락 방지</strong> — 청구 후 빠진 재산은 추가 청구가 제한될 수 있음.</li>\n<li><strong>⑤ 기한 내 청구</strong> — 2년 출소기간 내 심판 청구까지 완료.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 2년 제척기간은 재판 외 행사로 족한 기간이 아니라 그 안에 재산분할심판 청구까지 해야 하는 출소기간인 영역입니다. 청구 후 빠뜨린 재산은 원칙적으로 제척기간을 준수한 것으로 보기 어려우니, 청구 전 재산을 전수 조사하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 기간 확인·조사·청구·주장·결정 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 이혼 확정일·제척기간 확인 (즉시)</strong> — 이혼한 날부터 2년 기산.</li>\n<li><strong>2단계 — 배우자 재산 전수 조사 (기한 내)</strong> — 부동산·금융·사업 지분 등.</li>\n<li><strong>3단계 — 가정법원 재산분할 심판 청구 (2년 내 필수)</strong> — 모든 분할 대상을 청구 목적물로 포함.</li>\n<li><strong>4단계 — 누락 재산 발견 시 즉시 추가 주장 (변론 단계)</strong> — 가능한 한 변론종결 전 반영.</li>\n<li><strong>5단계 — 심판 확정 후 분할 이행</strong> — 미이행 시 강제집행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·위자료 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">재산분할 제척기간 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 기간·재산·청구 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·이혼 확정 자료 (제척기간 기산)</strong></li>\n<li><strong>배우자 명의 부동산 등기부등본</strong></li>\n<li><strong>금융 거래·예금 잔액 자료</strong></li>\n<li><strong>사업체·법인 지분·주식 자료</strong></li>\n<li><strong>숨긴 재산 의심 자료 (이체·명의 분산)</strong></li>\n<li><strong>재산분할 심판 청구서 (청구 목적물 목록 포함)</strong></li>\n<li><strong>본인 기여 입증 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 청구 후 빠뜨린 재산은 추가 청구가 제한될 수 있으니, 청구 전 배우자 재산을 최대한 전수 조사하는 것이 핵심입니다. 다만 상대방이 제기한 사건에서 상대방 지위로 분할 대상을 주장하는 경우에는 제척기간이 적용되지 않는 영역으로 검토됩니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>제척기간 도과</strong> — 이혼한 날부터 2년 경과 시 청구권 소멸.</li>\n<li><strong>출소기간 성격</strong> — 재판 외 행사로 부족, 2년 내 심판 청구 필요.</li>\n<li><strong>누락 재산 추가 청구</strong> — 청구 후 빠진 재산은 원칙적으로 준수 인정 어려움.</li>\n<li><strong>상대방 지위 주장</strong> — 상대방이 제기한 사건에서의 주장은 제척기간 적용 제외.</li>\n<li><strong>재산 은닉</strong> — 청구 전 은닉 재산 추적·조사 필요.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>여성긴급전화 1366</strong></li>\n<li><strong>관할 가정법원 민원실</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 재산분할 2년 출소기간 및 누락 재산 추가 청구 한계 영역',
        summary:
          '대법원 2021스766(대법원, 2022.11.10 선고) 사건에서 법원은 민법 제843조·제839조의2 제3항의 2년 기간은 제척기간이자 그 기간 내 재산분할심판 청구를 해야 하는 출소기간이고, 재산분할청구 후 제척기간이 지나면 그때까지 청구 목적물로 하지 않은 재산은 특별한 사정이 없는 한 제척기간을 준수한 것으로 볼 수 없으나, 이미 제기된 재산분할청구 사건의 상대방 지위에서 분할 대상 재산을 주장하는 경우에는 제척기간이 적용되지 않는다고 판시했습니다. 누락 재산 추가 청구를 다투는 사안에서 이 법리가 검토될 수 있는 영역입니다.',
        takeaway:
          '재산분할 + 2년 출소기간 + 누락 재산 결합 시 추가 청구 한계 평가 영역 — 청구 전 재산 전수 조사 후 변호인 상담·청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '재산분할 청구는 이혼 후 언제까지 해야 하나요?',
        answer:
          '<strong>이혼한 날부터 2년 내에 재산분할청구권을 행사해야 하는 영역입니다.</strong> 이 기간은 그 안에 심판 청구까지 해야 하는 출소기간입니다.',
      },
      {
        question: '처음 청구할 때 빠뜨린 재산을 추가로 청구할 수 있나요?',
        answer:
          '<strong>청구 후 제척기간이 지나면 청구 목적물로 하지 않은 재산은 원칙적으로 추가 청구가 제한될 수 있는 영역입니다.</strong> 청구 전 전수 조사가 중요합니다.',
      },
      {
        question: '상대가 먼저 청구한 사건에서도 제척기간이 적용되나요?',
        answer:
          '<strong>상대방이 제기한 재산분할 사건에서 상대방 지위로 분할 대상을 주장하는 경우에는 제척기간이 적용되지 않는 영역입니다.</strong>',
      },
      {
        question: '2년이 거의 다 됐는데 협의만 해두면 되나요?',
        answer:
          '<strong>재판 외 협의만으로는 부족하고, 2년 안에 심판 청구까지 해야 하는 출소기간인 영역입니다.</strong> 기한이 임박했다면 청구를 서두르는 것이 안전합니다.',
      },
      {
        question: '배우자가 재산을 숨긴 게 의심되면 어떻게 하나요?',
        answer:
          '<strong>청구 전 재산 조회·추적으로 은닉 재산을 최대한 파악해 청구 목적물에 포함하는 것을 검토할 수 있는 영역입니다.</strong> 변호인과 함께 조사하는 것이 좋습니다.',
      },
    ],
    cta: { text: '재산분할·위자료 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 2년 청구', href: '/guide/divorce/divorce-consensual-property-division-2year-claim' },
      { label: '누락 재산 추가 청구', href: '/guide/divorce/divorce-omitted-asset-additional-claim' },
      { label: '숨긴 재산 발견 대응', href: '/guide/divorce/divorce-hidden-asset-discovery' },
      { label: '재산분할 종합 정리', href: '/guide/divorce/divorce-property-division-comprehensive' },
      { label: '재산분할 기준 시점', href: '/guide/divorce/divorce-property-division-cutoff-date' },
    ],
  },

  // ─── 5 inheritance-yuryubun-disposed-gift-valuation-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-yuryubun-disposed-gift-valuation-track',
    keyword: '유류분 반환청구 처분된 증여재산 가액 산정',
    questionKeyword: '돌아가시기 전 증여한 재산을 이미 팔아버렸는데 유류분은 어느 시점 가액으로 계산하나요?',
    ctaKeyword: '유류분 처분 증여 가액 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '유류분 처분 증여재산 가액 산정 — 5단계 청구 트랙 | 로앤가이드',
      description:
        '생전 증여받은 재산이 이미 처분돼 유류분을 어느 시점 가액으로 계산하는지 막막하다면 산정 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아버지가 돌아가시기 몇 년 전 형에게 부동산을 증여하셨는데, 형이 그 부동산을 이미 팔아 현금화한 상태입니다. 저는 유류분이 부족해 청구하려는데, 이미 처분된 증여재산은 어느 시점 가액으로 계산해야 하는지 막막합니다. 처분 당시 가격인지 상속개시 당시 가격인지, 물가 변동은 어떻게 반영하는지 모르겠어요." 민법 제1112조는 유류분을, 제1113조 제1항은 유류분을 상속개시 시 재산 가액에 증여재산 가액을 가산해 산정하도록 규정하는 영역입니다. 대법원 2019다222867(대법원, 2023.05.18 선고)은 증여재산이 상속개시 전에 처분되거나 수용된 경우 그 가액은 처분 당시 가액을 기준으로 상속개시까지의 물가변동률을 반영하는 방법으로 산정해야 한다고 판시한 사례입니다. 당사자라면 ① 유류분 권리 확인 ② 증여·처분 내역 파악 ③ 가액 산정 ④ 부족액 계산 ⑤ 반환 청구 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 유류분 처분 증여재산 가액 산정 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 권리확인·내역파악·가액산정·부족액·청구 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 유류분 권리 확인</strong> — 직계비속·배우자 법정상속분의 1/2 등 유류분 비율.</li>\n<li><strong>② 증여·처분 내역 파악</strong> — 생전 증여 시점·처분 시점·처분 가액 확인.</li>\n<li><strong>③ 가액 산정</strong> — 처분된 증여재산은 처분 당시 가액 + 물가변동률 반영.</li>\n<li><strong>④ 유류분 부족액 계산</strong> — 기초재산에 증여 가액 가산 후 부족분 산정.</li>\n<li><strong>⑤ 반환 청구</strong> — 부족한 한도에서 수증자에게 반환 청구.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 증여재산이 상속개시 전에 처분·수용된 경우, 가액은 처분 당시 가액을 기준으로 상속개시까지의 물가변동률을 반영해 산정하는 영역입니다. 따라서 처분 시점과 그 당시 가격을 정확히 확인하는 것이 부족액 계산의 출발점입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 가정법원·민사법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 자료 확보·가액 산정·청구·변론·판결 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 증여·처분 내역 자료 확보 (즉시)</strong> — 증여 시점·처분 시점·처분 가액 자료.</li>\n<li><strong>2단계 — 가액 산정 (1~2개월)</strong> — 처분 당시 가액 + 물가변동률 반영 계산.</li>\n<li><strong>3단계 — 유류분 부족액 확정</strong> — 기초재산 산정 후 부족분 계산.</li>\n<li><strong>4단계 — 유류분 반환청구 소송 제기 (소멸시효 내)</strong> — 부족한 한도에서 청구.</li>\n<li><strong>5단계 — 판결 확정 후 반환·집행</strong>.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 유류분 부족액 계산, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">유류분 처분 증여재산 가액 산정 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 신분·증여·가액 갈래입니다.</strong></p>\n<ul>\n<li><strong>피상속인 기본증명서·가족관계증명서</strong></li>\n<li><strong>상속인 본인 가족관계증명서 (유류분권 확인)</strong></li>\n<li><strong>생전 증여 입증 자료 (증여계약서·등기·이체 내역)</strong></li>\n<li><strong>증여재산 처분 시점·처분 가액 자료 (매매계약서·수용 보상 내역)</strong></li>\n<li><strong>상속개시 시점 재산 목록</strong></li>\n<li><strong>물가변동률 산정 자료 (통계 지표)</strong></li>\n<li><strong>유류분 부족액 계산 내역서</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 처분된 증여재산의 가액은 \'처분 당시 가액 + 상속개시까지의 물가변동률\'로 산정하므로, 처분 시점과 처분 가격 자료를 정확히 확보하는 것이 핵심입니다. 처분 가격을 알 수 없으면 매매계약서·등기 자료로 추적하는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>가액 기준 시점</strong> — 처분 당시 가액 + 물가변동률 반영 여부.</li>\n<li><strong>증여 해당 여부</strong> — 기초재산에 산입되는 증여인지 다툼.</li>\n<li><strong>특별수익 평가</strong> — 공동상속인에 대한 생전 증여의 산입.</li>\n<li><strong>소멸시효</strong> — 유류분 침해를 안 날부터 1년, 상속개시부터 10년.</li>\n<li><strong>반환 범위</strong> — 유류분을 침해하는 부족한 한도 내 반환.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n<li><strong>가정법원·민사법원 민원실</strong></li>\n<li><strong>관할 행정복지센터 (안심상속 원스톱 서비스)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 처분·수용된 증여재산의 유류분 가액 산정 방법 영역',
        summary:
          '대법원 2019다222867(대법원, 2023.05.18 선고) 사건에서 법원은 피상속인이 상속개시 전에 재산을 증여하여 그 재산이 유류분반환청구의 대상이 된 경우, 수증자가 증여받은 재산을 상속개시 전에 처분하였거나 증여재산이 수용되었다면 그 가액은 증여재산의 현실 가치인 처분 당시 가액을 기준으로 상속개시까지 사이의 물가변동률을 반영하는 방법으로 산정해야 한다고 판시했습니다. 처분된 증여재산의 유류분 가액을 다투는 사안에서 이 법리가 검토될 수 있는 영역입니다.',
        takeaway:
          '유류분 + 처분된 증여재산 + 물가변동률 반영 결합 시 가액 산정 평가 영역 — 처분 시점·가액 자료 확보 후 변호인 상담·청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '이미 팔아버린 증여재산도 유류분 대상이 되나요?',
        answer:
          '<strong>상속개시 전에 처분된 증여재산도 유류분 산정 기초재산에 산입될 수 있는 영역입니다.</strong> 처분 시점과 처분 가액 자료를 확보해두는 것이 중요합니다.',
      },
      {
        question: '처분된 재산은 어느 시점 가액으로 계산하나요?',
        answer:
          '<strong>처분 당시 가액을 기준으로 상속개시까지의 물가변동률을 반영해 산정하는 영역입니다.</strong> 처분 당시 가격 자료가 출발점이 됩니다.',
      },
      {
        question: '유류분은 얼마까지 받을 수 있나요?',
        answer:
          '<strong>유류분을 침해하는 부족한 한도 내에서 반환을 청구할 수 있는 영역입니다.</strong> 부족액은 기초재산 산정 후 계산되므로 일률적이지 않습니다.',
      },
      {
        question: '유류분 청구에도 기간 제한이 있나요?',
        answer:
          '<strong>유류분 침해를 안 날부터 1년, 상속개시 시부터 10년 내가 원칙인 영역입니다.</strong> 시효 기산점은 변호인 상담 후 확인하는 것이 안전합니다.',
      },
      {
        question: '처분 가격을 모르면 어떻게 하나요?',
        answer:
          '<strong>매매계약서·등기 자료·수용 보상 내역 등으로 처분 가액을 추적해 산정하는 것을 검토할 수 있는 영역입니다.</strong> 자료가 부족하면 법원 감정도 활용될 수 있습니다.',
      },
    ],
    cta: { text: '유류분 부족액 계산, AI로 정리하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '유류분 청구 계산', href: '/guide/inheritance/inheritance-yuryubun-claim-calculation' },
      { label: '유류분 부족액 청구 절차', href: '/guide/inheritance/inheritance-yuryubun-shortage-claim-procedure' },
      { label: '생전 증여 유류분 계산', href: '/guide/inheritance/inheritance-pre-death-gift-yuryubun-calculation' },
      { label: '유류분 시효 보전', href: '/guide/inheritance/inheritance-yuryubun-time-limit-preservation' },
      { label: '유류분 10년 한도', href: '/guide/inheritance/inheritance-forced-share-10year-limit' },
    ],
  },

  // ─── 6 traffic-accident-victim-died-during-treatment-liability-insurance-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-victim-died-during-treatment-liability-insurance-track',
    keyword: '교통사고 치료 중 사망 책임보험금 산정',
    questionKeyword: '교통사고로 다쳐 치료받던 가족이 사망했는데 책임보험금은 부상 기준인가요 사망 기준인가요?',
    ctaKeyword: '치료 중 사망 책임보험금 정리',
    type: '절차형',
    perspective: 'victim',
    meta: {
      title: '교통사고 치료 중 사망 책임보험금 — 5단계 산정 트랙 | 로앤가이드',
      description:
        '교통사고로 다쳐 치료받던 가족이 사망했는데 책임보험금을 어떻게 산정하는지 막막하다면 5가지 청구 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"교통사고로 크게 다친 가족이 입원 치료를 받다가 안타깝게 사망했습니다. 보험사에 책임보험금을 청구하려는데, 부상 기준으로 계산되는지 사망 기준으로 계산되는지, 두 한도를 합산할 수 있는지 막막합니다. 치료비와 사망에 따른 손해를 어디까지 받을 수 있는지, 무엇부터 정리해야 할지 모르겠어요." 자동차손해배상 보장법 제5조 제1항은 자동차보유자의 책임보험 가입 의무를 규정하고, 같은 법 시행령 제3조는 부상·사망 한도금액을 정하는 영역입니다. 대법원 2024다238217(대법원, 2025.03.13 선고)은 교통사고로 부상한 피해자가 치료를 받던 도중 사망한 경우 책임보험금에 관한 시행령 제3조 제2항 제1호의 \'부상·사망 한도금액의 합산액 범위에서 피해자에게 발생한 손해액\'의 의미를 정리한 사례입니다. 피해자 측이라면 ① 사고·치료 기록 확보 ② 손해액 정리 ③ 한도 산정 ④ 보험 청구 ⑤ 합의 또는 소송 5중 트랙으로 정리해두는 것을 검토할 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 교통사고 치료 중 사망 책임보험금 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 기록확보·손해정리·한도산정·청구·합의 5단계로 검토할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사고·치료 기록 확보</strong> — 사고 경위·치료 경과·사망 진단서.</li>\n<li><strong>② 손해액 정리</strong> — 치료비·일실수입·위자료·장례비 등 손해 항목 정리.</li>\n<li><strong>③ 한도 산정</strong> — 부상·사망 한도금액 합산 범위에서 발생 손해액 검토.</li>\n<li><strong>④ 보험 청구</strong> — 가해 차량 책임보험·대인 보험 청구.</li>\n<li><strong>⑤ 합의 또는 소송</strong> — 산정액 다툼 시 손해배상 소송 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 교통사고로 부상한 피해자가 치료 중 사망한 경우 책임보험금은 부상 한도와 사망 한도금액의 합산액 범위에서 피해자에게 발생한 손해액을 기준으로 산정되는 영역입니다. 치료 기간 발생 손해와 사망 손해를 항목별로 빠짐없이 정리하는 것이 중요합니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 보험사·법원 5단계',
        content:
          '<p><strong style="color:#1e3a5f">A. 기록 확보·손해 산정·청구·협의·소송 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 사고·치료·사망 기록 확보 (즉시)</strong> — 사고 사실 확인원·진료 기록·사망 진단서.</li>\n<li><strong>2단계 — 손해 항목 정리 (1~2주)</strong> — 치료비·일실수입·위자료·장례비.</li>\n<li><strong>3단계 — 책임보험금 한도 산정 및 보험 청구</strong> — 부상·사망 한도 합산 범위 검토.</li>\n<li><strong>4단계 — 보험사 산정액 협의 (불복 시 분쟁조정 신청)</strong>.</li>\n<li><strong>5단계 — 합의 거부 또는 산정 다툼 시 손해배상 소송 검토</strong>.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">교통사고 치료 중 사망 책임보험금 대응 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고·손해·신분 갈래입니다.</strong></p>\n<ul>\n<li><strong>경찰 교통사고 사실 확인원</strong></li>\n<li><strong>입원·치료 진료 기록·치료비 영수증</strong></li>\n<li><strong>사망 진단서·사체 검안서</strong></li>\n<li><strong>피해자 소득 자료 (일실수입 산정)</strong></li>\n<li><strong>장례비 영수증</strong></li>\n<li><strong>가해 차량 보험 정보 (보험사·증권번호)</strong></li>\n<li><strong>상속인 가족관계증명서 (청구권자 확인)</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 치료 중 사망 사안은 치료 기간 발생 손해와 사망에 따른 손해가 함께 산정되므로, 진료 기록과 사망 진단서를 모두 확보하는 것이 중요합니다. 보험사 산정액에 동의하기 전 손해보험협회 분쟁조정이나 변호인 상담을 먼저 검토하는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>한도 합산 범위</strong> — 부상·사망 한도금액 합산액 범위 적용 여부.</li>\n<li><strong>인과관계 다툼</strong> — 사고와 사망 사이 인과관계 인정 여부.</li>\n<li><strong>손해액 산정</strong> — 치료비·일실수입·위자료 항목별 평가.</li>\n<li><strong>과실비율</strong> — 피해자 과실이 손해액에 반영되는지.</li>\n<li><strong>청구권자 범위</strong> — 상속인 등 손해배상 청구권자 확인.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>손해보험협회 분쟁조정위원회 02-3702-8600</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>교통사고 피해자 지원센터 (관할 지역)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 치료 중 사망 시 책임보험금 한도 합산액 범위 산정 영역',
        summary:
          '대법원 2024다238217(대법원, 2025.03.13 선고) 사건에서 법원은 교통사고로 부상한 피해자가 치료를 받던 도중 사망한 경우의 책임보험금에 관하여 자동차손해배상 보장법 시행령 제3조 제2항 제1호의 \'부상·사망 한도금액의 합산액 범위에서 피해자에게 발생한 손해액\'의 의미를 정리하며, 부상 한도와 사망 한도금액의 합산액 범위에서 발생 손해액을 기준으로 책임보험금을 산정하는 법리를 판시했습니다. 치료 중 사망 사안에서 책임보험금을 다투는 경우 이 법리가 검토될 수 있는 영역입니다.',
        takeaway:
          '치료 중 사망 + 부상·사망 한도 합산 + 발생 손해액 결합 시 책임보험금 산정 평가 영역 — 진료·사망 기록 확보 후 변호인 상담·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '치료 중 사망하면 책임보험금은 부상 기준인가요 사망 기준인가요?',
        answer:
          '<strong>부상 한도와 사망 한도금액의 합산액 범위에서 발생한 손해액을 기준으로 산정되는 영역입니다.</strong> 치료 기간 손해와 사망 손해를 함께 정리하는 것이 중요합니다.',
      },
      {
        question: '치료비와 사망 손해를 모두 받을 수 있나요?',
        answer:
          '<strong>치료비·일실수입·위자료·장례비 등 항목별 손해를 합산 한도 범위에서 청구할 수 있는 영역입니다.</strong> 항목별 자료를 빠짐없이 정리하세요.',
      },
      {
        question: '사고와 사망의 인과관계를 다투면 어떻게 되나요?',
        answer:
          '<strong>사고와 사망 사이 인과관계가 손해 산정의 쟁점이 될 수 있는 영역입니다.</strong> 진료 기록·사망 진단서로 경과를 입증하는 것이 중요합니다.',
      },
      {
        question: '피해자 과실이 있으면 보험금이 줄어드나요?',
        answer:
          '<strong>피해자 과실이 손해액 산정에 반영될 수 있는 영역입니다.</strong> 과실비율 다툼이 있으면 손해보험협회 분쟁조정을 검토할 수 있습니다.',
      },
      {
        question: '보험금은 누가 청구할 수 있나요?',
        answer:
          '<strong>사망한 피해자의 상속인 등 손해배상 청구권자가 청구할 수 있는 영역입니다.</strong> 가족관계증명서로 청구권자를 먼저 확인하세요.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 손해배상 계산', href: '/guide/traffic-accident/traffic-accident-compensation-calculation-guide' },
      { label: '교통사고 형사·민사 절차', href: '/guide/traffic-accident/traffic-accident-criminal-civil-procedure' },
      { label: '보험사 저가 합의 대응', href: '/guide/traffic-accident/insurance-lowball-settlement-response' },
      { label: '무보험 차량 정부 보장', href: '/guide/traffic-accident/traffic-accident-uninsured-victim-government-fund' },
      { label: '합의 전 체크리스트', href: '/guide/traffic-accident/accident-settlement-checklist' },
    ],
  },
];
