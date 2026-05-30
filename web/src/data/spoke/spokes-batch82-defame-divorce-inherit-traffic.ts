import { SpokePage } from '../spoke-pages';

// batch82 divorce(4) + defamation(4) + inheritance(1) + traffic-accident(1) — 10개 (2026-05-30)
//
// 고유 존재 이유:
// 1. divorce-international-marriage-jurisdiction-track — 단순 협의/재판이혼류와 분기. 여기는 '국제결혼 부부의 이혼·위자료 사건에서 국제재판관할·준거법·부정행위 위자료 시효(혼인 해소 시 기산)' 절차형 트랙. 다류 가사소송사건 구분 + 부진정연대 + 단기소멸시효가 핵심.
// 2. divorce-business-debt-marital-property-allocation-track — 단순 재산분할류와 분기. 여기는 '배우자 일방의 사업상 채무·적극재산이 재산분할 대상에 포함되는지(형성·유지·부담 무관 시 제외)' 판단형 트랙. 파탄 후 변동재산 제외·대상재산이 핵심.
// 3. divorce-infidelity-evidence-consolation-claim-track — 단순 위자료류와 분기. 여기는 '배우자로부터 위자료 합의금을 받은 상태에서 상간자에게 별도 위자료를 청구할 때 처분권주의·인정 손해액' 판단형 트랙. 청구금액 초과 인정 불가가 핵심.
// 4. divorce-post-custody-relocation-visitation-dispute-track — 단순 양육비·면접교섭류와 분기. 여기는 '협의이혼 후 장기간 경과한 과거 양육비 분담 청구에서 재산분할·합의 유무까지 고려한 분담 범위 산정' 판단형 트랙. 과거 양육비 분담 기준이 핵심.
// 5. defamation-apartment-resident-online-cafe-post-track — 단순 명예훼손 고소류와 분기. 여기는 '아파트 입주민이 온라인 카페에 올린 글의 진실성·공공의 이익 위법성조각' 판단형 트랙. 보도 진실성·공익성 판단 기준이 핵심.
// 6. defamation-restaurant-blog-fake-review-track — 단순 악의 리뷰류와 분기. 여기는 '식당 블로그 후기·의혹 제기 표현이 사실 적시인지 의견인지, 전체 취지상 허위 여부' 판단형 트랙. 사실/의견 구분·전체 취지 판단이 핵심.
// 7. defamation-ex-partner-private-life-disclosure-track — 단순 사생활 폭로류와 분기. 여기는 '사실 적시 명예훼손에서 공공의 이해·공익 목적·진실성 입증책임(언론매체)' 판단형 트랙. 위법성조각 입증책임 소재가 핵심.
// 8. defamation-workplace-rumor-coworker-falsely-accused-defense — accused 관점. 여기는 '직장 내 소문·사실 적시로 명예훼손 혐의를 받는 사람이 공공의 이익 위법성조각(형법 제310조)을 다투는' 판단형 방어 트랙. 공익성 유추적용·심사가 핵심.
// 9. inheritance-overseas-asset-foreign-account-division-track — 단순 한정승인·상속포기류와 분기. 여기는 '해외자산·상속 취득 주택의 양도·세제(거주기간 장기보유특별공제)와 상속재산 분할 절차' 절차형 트랙. 상속 취득 주택 거주기간 기준이 핵심.
// 10. traffic-accident-bicycle-crosswalk-pedestrian-collision-track — 단순 자동차 사고 합의류와 분기. 여기는 '자전거-횡단보도 보행자 충돌에서 주의의무·과실치사상 책임' 판단형 트랙. 주의의무 구성·업무상과실치사상죄 평가가 핵심.

export const spokesBatch82DefameDivorceInheritTraffic: SpokePage[] = [
  // ─── 1. divorce-international-marriage-jurisdiction-track ───
  {
    domain: 'divorce',
    slug: 'divorce-international-marriage-jurisdiction-track',
    keyword: '국제결혼 이혼 재판관할 위자료 시효',
    questionKeyword: '외국인 배우자와 결혼했는데 부정행위로 혼인이 파탄됐어요. 외국에 사는 배우자와 상간자를 상대로 한국 법원에서 이혼·위자료 소송을 할 수 있는지, 위자료 시효는 언제부터 시작되는지 궁금합니다.',
    ctaKeyword: '국제결혼 이혼 재판관할·위자료 시효 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '국제결혼 이혼 — 5단계 재판관할·위자료 시효 점검 | 로앤가이드',
      description:
        '외국인 배우자와의 이혼·위자료 소송에서 국제재판관할·부정행위 위자료 시효 기산점 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"외국인 배우자와 결혼해 함께 살아왔지만, 배우자의 부정행위로 부부공동생활이 무너지면서 혼인이 사실상 파탄에 이른 상황입니다. 배우자와 상간자가 모두 외국에 머물거나 국적이 다르다 보니, 한국 법원에 이혼과 위자료를 청구할 수 있는지, 청구하더라도 위자료를 다투는 시효는 언제부터 흐르기 시작하는지 도무지 가늠이 되지 않아요. 시간을 흘려보내다 권리가 사라지는 건 아닌지 막막한 상태입니다." 민법 제840조는 배우자의 부정한 행위 등을 재판상 이혼 사유로 정하고, 민법 제766조 제1항은 불법행위로 인한 손해배상청구권의 단기소멸시효를 손해 및 가해자를 안 날부터 3년으로 규정하며, 가사소송법 제2조 제1항 제1호 (다)목은 이혼을 원인으로 하는 위자료청구를 다류 가사소송사건으로 정하는 영역입니다. 판례는 부부 일방과 제3자가 부담하는 부정행위 손해배상책임이 공동불법행위로서 부진정연대채무 관계에 있고, 이혼을 원인으로 하는 위자료청구권의 단기소멸시효는 혼인이 해소된 때부터 기산된다고 본 사례 흐름이 있습니다. 국제결혼 + 부정행위 + 외국 거주 결합은 \'재판관할·준거법·위자료 시효\' 다툼이 가능한 트랙입니다. 당사자라면 ① 재판관할 ② 준거법 ③ 청구 유형 ④ 시효 기산 ⑤ 집행 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 관할 ② 준거법 ③ 유형 ④ 시효 ⑤ 집행 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 국제결혼 이혼 재판관할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 재판관할·준거법·청구 유형·시효 기산·집행 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 재판관할</strong> — 당사자 주소·상거소·국적·혼인생활지 등을 토대로 한국 법원의 국제재판관할이 인정되는지.</li>\n<li><strong>② 준거법</strong> — 이혼·위자료에 적용될 준거법 검토.</li>\n<li><strong>③ 청구 유형 구분</strong> — 이혼을 원인으로 하는 위자료(다류 가사소송)인지, 개별 부정행위에 대한 통상 민사사건인지.</li>\n<li><strong>④ 시효 기산</strong> — 이혼 원인 위자료청구권의 단기소멸시효 기산점(혼인 해소 시) 정리.</li>\n<li><strong>⑤ 집행</strong> — 외국 거주 상대방·상간자에 대한 송달·집행 가능성 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 이혼을 원인으로 하는 위자료청구권은 최종적 이혼 시점에 손해가 확정·평가되고 단기소멸시효는 혼인 해소 시부터 기산되는 영역. 부부 일방과 제3자의 책임은 부진정연대채무 관계로 평가될 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 혼인·부정행위 자료 보존 (즉시)</strong> — 혼인관계증명서·부정행위 정황 자료·외국 주소 자료 보존.</li>\n<li><strong>2단계 — 재판관할·준거법 정리 (1~2주)</strong> — 주소·상거소·국적·혼인생활지 정리로 한국 법원 관할 검토.</li>\n<li><strong>3단계 — 청구 유형·시효 정리 (2~3주)</strong> — 다류 가사소송(이혼 원인 위자료)/통상 민사 구분, 시효 기산점 산정.</li>\n<li><strong>4단계 — 소 제기·송달 (관할 확정 후)</strong> — 가정법원 이혼·위자료 청구, 외국 송달 절차 검토.</li>\n<li><strong>5단계 — 판결·집행 (선고 후)</strong> — 위자료·재산분할 집행 및 외국 집행 가능성 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">국제결혼 이혼 재판관할·위자료 시효 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 관할·준거법·시효 갈래입니다.</strong></p>\n<ul>\n<li><strong>혼인관계증명서·외국 혼인 증빙 (혼인 성립·국적)</strong></li>\n<li><strong>당사자 주소·상거소·체류 자료 (재판관할 판단)</strong></li>\n<li><strong>부정행위 정황 자료 (메시지·사진·진술)</strong></li>\n<li><strong>혼인 파탄 시점·이혼 진행 경위 자료 (시효 기산)</strong></li>\n<li><strong>상간자 인적사항·연락처 (공동불법행위 청구)</strong></li>\n<li><strong>재산·소득 자료 (위자료·재산분할 산정)</strong></li>\n<li><strong>외국 주소 송달 정보·번역 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 이혼을 원인으로 하는 위자료청구권의 단기소멸시효는 혼인이 해소된 때부터 기산되는 것으로 평가될 수 있는 영역이므로, 부정행위 발생일이 오래됐더라도 혼인 해소 시점을 기준으로 권리관계를 정리하는 것이 핵심. 다류 가사소송과 통상 민사사건의 구분도 함께 검토해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>국제재판관할</strong> — 한국 법원에 관할이 인정되는지(주소·상거소·국적·혼인생활지).</li>\n<li><strong>준거법</strong> — 이혼·위자료에 적용될 준거법 판단.</li>\n<li><strong>청구 유형 구분</strong> — 이혼 원인 위자료(다류 가사)와 개별 부정행위 손해배상(통상 민사) 구분.</li>\n<li><strong>시효 기산점</strong> — 혼인 해소 시 기산되는 단기소멸시효의 도과 여부.</li>\n<li><strong>외국 송달·집행</strong> — 외국 거주 상대방·상간자에 대한 송달과 집행 가능성.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (이혼·위자료 청구)</strong></li>\n<li><strong>여성긴급전화 1366 (가정폭력 동반 시)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 부정행위 위자료의 부진정연대·단기소멸시효 기산점',
        summary:
          '대법원 2025므10716(대법원, 2026.01.29 선고) 영역에서 법원은 부부의 일방이 부정행위를 한 경우 그로 인해 배우자가 입은 정신적 고통에 대해 불법행위 손해배상의무를 지고, 제3자가 부부의 일방과 부정행위를 하여 부부공동생활을 침해한 행위도 원칙적으로 불법행위를 구성하며 부부 일방과 제3자의 책임은 공동불법행위로서 부진정연대채무 관계에 있다고 보았습니다. 또한 이혼을 원인으로 하는 위자료청구권은 최종적 이혼 시점에 손해가 확정·평가되고 피해 배우자는 혼인이 해소된 때에 손해 및 가해자를 알았다고 봄이 상당하므로 그때부터 단기소멸시효가 기산되며, 이혼 원인 위자료청구는 다류 가사소송사건에 해당한다고 판시했습니다. 국제결혼 사안에서도 시효 기산점·청구 유형을 검토해볼 수 있습니다.',
        takeaway: '국제결혼 + 부정행위 + 외국 거주 결합 시 재판관할·청구 유형·혼인 해소 시 기산 시효 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '외국에 사는 배우자를 한국 법원에서 이혼할 수 있나요?',
        answer:
          '<strong>주소·상거소·국적·혼인생활지 등을 토대로 한국 법원의 국제재판관할 인정 여부를 검토하는 영역입니다.</strong> 당사자 거주·체류 자료를 함께 정리.',
      },
      {
        question: '위자료 시효는 언제부터 시작되나요?',
        answer:
          '<strong>이혼을 원인으로 하는 위자료청구권의 단기소멸시효는 혼인이 해소된 때부터 기산되는 것으로 평가될 수 있는 영역입니다.</strong> 파탄·이혼 시점을 정리.',
      },
      {
        question: '상간자에게도 따로 위자료를 청구할 수 있나요?',
        answer:
          '<strong>부부 일방과 제3자의 책임은 공동불법행위로서 부진정연대채무 관계로 평가될 수 있는 영역입니다.</strong> 상간자 인적사항·정황 자료를 확보.',
      },
      {
        question: '이혼 위자료와 부정행위 손해배상은 다른가요?',
        answer:
          '<strong>이혼을 원인으로 하는 위자료(다류 가사소송)와 개별 부정행위 손해배상(통상 민사)은 구분되는 영역입니다.</strong> 청구 유형을 먼저 정리.',
      },
      {
        question: '외국에서 판결을 집행할 수 있나요?',
        answer:
          '<strong>외국 거주 상대방에 대한 송달·집행은 별도 절차를 검토해야 하는 영역입니다.</strong> 외국 주소·재산 정보를 정리.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
      { label: '재판상 이혼 사유', href: '/guide/divorce/divorce-judicial-grounds-track' },
      { label: '상간자 위자료 청구', href: '/guide/divorce/divorce-adultery-consolation-claim' },
      { label: '재산분할 대상 범위', href: '/guide/divorce/divorce-property-division-scope' },
      { label: '양육비 산정 기준', href: '/guide/child-support/child-support-calculation-standard' },
    ],
  },

  // ─── 2. divorce-business-debt-marital-property-allocation-track ───
  {
    domain: 'divorce',
    slug: 'divorce-business-debt-marital-property-allocation-track',
    keyword: '이혼 사업 채무 재산분할 대상 제외',
    questionKeyword: '배우자가 혼자 사업을 하면서 진 빚이 있는데, 저는 사업에 관여한 적이 없어요. 이혼할 때 그 사업 채무까지 재산분할에서 제가 떠안아야 하는지, 파탄 후 처분된 재산은 어떻게 되는지 막막합니다.',
    ctaKeyword: '이혼 사업 채무 재산분할 대상 판단 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '이혼 사업 채무 분할 — 5단계 형성·기여도 점검 | 로앤가이드',
      description:
        '배우자 단독 사업 채무를 이혼 재산분할에서 떠안아야 할지 형성·유지·기여도·파탄 후 변동재산 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배우자가 혼자 사업을 운영하면서 큰 빚을 졌는데, 저는 그 사업의 운영이나 자금에 관여한 적이 거의 없는 사람입니다. 이혼을 앞두고 보니 \'부부니까 빚도 절반은 네 몫\'이라는 말이 들려와 불안합니다. 게다가 혼인이 사실상 깨진 뒤에 배우자가 일부 재산을 처분하거나 새로 자산을 만든 것도 있는데, 이런 것까지 재산분할에 들어가는 건지 아닌지 도무지 가늠이 되지 않아요." 민법 제839조의2는 협의·재판상 이혼 시 재산분할청구권을 정하면서 분할의 액수·방법을 당사자 협력으로 이룬 재산의 액수와 기타 사정을 참작해 정하도록 규정하는 영역입니다. 판례는 부부 일방에 의해 생긴 적극재산이나 채무라도 상대방이 그 형성·유지·부담과 무관한 경우 재산분할 대상 재산에 포함하기 어렵고, 혼인관계 파탄 이후 변론종결일 사이에 생긴 재산 변동이 혼인 중 공동으로 형성한 재산관계와 무관하면 원칙적으로 분할 대상에서 제외하며, 파탄 당시 존재했으나 사실심 변론종결 당시 현존하지 않는 재산은 분할 대상이 아니되 그 처분·멸실로 인한 대상재산을 분할 대상으로 삼는다고 본 사례 흐름이 있습니다. 단독 사업 채무 + 무관여 + 파탄 후 변동 결합은 \'재산분할 대상 포함 여부\' 다툼이 가능한 트랙입니다. 당사자라면 ① 채무 성격 ② 형성·유지 관여 ③ 파탄 시점 ④ 변동재산 ⑤ 기여도 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 채무 ② 관여 ③ 파탄 ④ 변동 ⑤ 기여 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 이혼 사업 채무 재산분할 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 채무 성격·형성 관여·파탄 시점·변동재산·기여도 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 채무 성격</strong> — 배우자 단독 사업 채무인지, 부부 공동생활을 위한 채무인지.</li>\n<li><strong>② 형성·유지 관여</strong> — 상대방이 그 채무·재산의 형성·유지·부담에 관여했는지.</li>\n<li><strong>③ 파탄 시점</strong> — 혼인관계 파탄 시점과 변론종결일 사이의 재산 변동 구분.</li>\n<li><strong>④ 변동재산</strong> — 파탄 후 처분·멸실 재산과 그 대상재산의 분할 대상 여부.</li>\n<li><strong>⑤ 기여도</strong> — 공동으로 형성한 재산에 대한 기여도·분할 비율 정리.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 상대방이 형성·유지·부담과 무관한 일방 채무·재산은 재산분할 대상에 포함하기 어렵고, 파탄 이후 공동 재산관계와 무관하게 생긴 변동은 원칙적으로 제외되는 영역. 처분·멸실 재산의 대상재산은 분할 대상으로 삼을 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 재산·채무 목록 보존 (즉시)</strong> — 부부 적극재산·채무·사업 관련 자료 목록화.</li>\n<li><strong>2단계 — 채무 성격·관여 정리 (1~2주)</strong> — 사업 채무 형성·유지·부담 경위와 상대방 관여 여부 정리.</li>\n<li><strong>3단계 — 파탄 시점·변동재산 정리 (2~3주)</strong> — 파탄 시점 확정 + 그 후 처분·멸실 재산·대상재산 추적.</li>\n<li><strong>4단계 — 재산분할 청구·산정 (소 제기 시)</strong> — 분할 대상 확정 후 기여도·분할 비율 산정.</li>\n<li><strong>5단계 — 조정·판결 (선고 후)</strong> — 협의·조정 또는 판결로 분할 확정.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">이혼 사업 채무 재산분할 대상 판단 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 채무·관여·변동재산 갈래입니다.</strong></p>\n<ul>\n<li><strong>부부 적극재산 목록 (부동산·예금·주식 등)</strong></li>\n<li><strong>채무 내역서·대출·사업 채무 자료 (형성 경위)</strong></li>\n<li><strong>사업자등록·운영 자료 (단독 운영·관여 여부)</strong></li>\n<li><strong>혼인 파탄 시점 입증 자료 (별거·관계 단절 정황)</strong></li>\n<li><strong>파탄 후 처분·멸실 재산 추적 자료 (대상재산)</strong></li>\n<li><strong>소득·기여 자료 (가사노동·재산 형성 기여)</strong></li>\n<li><strong>금융거래내역·재산조회 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상대방이 형성·유지·부담과 무관한 일방 채무는 재산분할 대상에 포함하기 어려운 것으로 평가될 수 있는 영역이므로, 사업 채무에 관여하지 않았다는 정황과 파탄 시점을 함께 정리하는 것이 핵심. 파탄 이후 처분된 재산은 그 대상재산을 추적해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>채무의 성격</strong> — 부부 공동생활을 위한 채무인지, 일방의 사업·개인 채무인지.</li>\n<li><strong>형성·유지 관여</strong> — 상대방이 그 채무·재산 형성에 관여·기여했는지.</li>\n<li><strong>파탄 시점</strong> — 혼인관계 파탄 시점과 그 이후 재산 변동의 구분.</li>\n<li><strong>변동재산·대상재산</strong> — 파탄 후 처분·멸실 재산과 그 대상재산의 분할 대상 여부.</li>\n<li><strong>기여도</strong> — 공동 형성 재산에 대한 기여도·분할 비율 산정.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (재산분할 청구)</strong></li>\n<li><strong>여성긴급전화 1366 (가정폭력 동반 시)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 일방 채무·파탄 후 변동재산의 재산분할 대상 제외',
        summary:
          '대법원 2023므14016(대법원, 2025.08.14 선고) 영역에서 법원은 부부 일방에 의해 생긴 적극재산이나 채무라도 상대방이 그 형성·유지·부담과 무관한 경우 이를 재산분할 대상 재산에 포함할 수 없고, 혼인관계가 파탄된 이후 변론종결일 사이에 생긴 재산관계의 변동이 혼인 중 공동으로 형성한 재산관계와 무관한 경우 변동된 재산은 원칙적으로 재산분할 대상에서 제외되며, 혼인 파탄 당시 존재했으나 사실심 변론종결 당시 현존하지 않는 재산은 분할 대상이 되지 않되 그 처분·멸실로 인한 대상재산은 분할 대상으로 삼아야 한다고 판시했습니다. 단독 사업 채무 사안에서도 형성·유지 관여 여부와 파탄 시점을 검토해볼 수 있습니다.',
        takeaway: '단독 사업 채무 + 무관여 + 파탄 후 변동 결합 시 재산분할 대상 포함 여부·대상재산 검토 영역 — 변호사 상담·가정법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '배우자가 혼자 진 사업 빚도 제가 나눠 갚아야 하나요?',
        answer:
          '<strong>상대방이 형성·유지·부담과 무관한 일방 채무는 재산분할 대상에 포함하기 어려운 것으로 평가될 수 있는 영역입니다.</strong> 관여 여부·채무 경위를 정리.',
      },
      {
        question: '파탄 후에 배우자가 처분한 재산은 어떻게 되나요?',
        answer:
          '<strong>파탄 이후 공동 재산관계와 무관하게 생긴 변동은 원칙적으로 제외되되, 처분·멸실 재산의 대상재산은 분할 대상으로 삼을 수 있는 영역입니다.</strong> 처분 내역을 추적.',
      },
      {
        question: '파탄 시점은 어떻게 정해지나요?',
        answer:
          '<strong>별거·관계 단절 정황 등을 종합해 혼인관계 파탄 시점을 판단하는 영역입니다.</strong> 별거 시작·연락 단절 자료를 정리.',
      },
      {
        question: '제 기여도는 어떻게 인정받나요?',
        answer:
          '<strong>소득뿐 아니라 가사노동·재산 형성 기여 등을 종합해 기여도를 판단하는 영역입니다.</strong> 소득·가사 기여 자료를 함께 정리.',
      },
      {
        question: '재산분할 청구에 기한이 있나요?',
        answer:
          '<strong>이혼한 날부터 2년이 재산분할청구권 행사 기간인 영역입니다.</strong> 기간 도과 전 청구를 검토.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '재산분할 대상 범위', href: '/guide/divorce/divorce-property-division-scope' },
      { label: '재산분할 기여도 산정', href: '/guide/divorce/divorce-property-contribution-track' },
      { label: '부부 채무 분담', href: '/guide/divorce/divorce-marital-debt-allocation' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
      { label: '재산명시·조회 신청', href: '/guide/divorce/divorce-property-disclosure-order' },
    ],
  },

  // ─── 3. divorce-infidelity-evidence-consolation-claim-track ───
  {
    domain: 'divorce',
    slug: 'divorce-infidelity-evidence-consolation-claim-track',
    keyword: '배우자 합의금 수령 후 상간자 위자료 청구',
    questionKeyword: '부정행위로 배우자에게서 위자료 합의금을 일부 받았는데, 상간자에게도 따로 위자료를 청구하고 싶어요. 이미 받은 금액이 있으면 상간자 청구가 줄어드는지, 청구한 금액보다 더 받을 수 있는지 궁금합니다.',
    ctaKeyword: '합의금 수령 후 상간자 위자료 청구 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '상간자 위자료 청구 — 5단계 합의금·손해액 점검 | 로앤가이드',
      description:
        '배우자에게 위자료 합의금을 받은 뒤 상간자에게 별도 청구할 때 손해액·청구금액·처분권주의 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"배우자의 부정행위로 마음에 깊은 상처를 입은 뒤, 배우자와는 위자료 명목의 합의금을 일부 정리한 상태입니다. 그런데 상대방이었던 상간자에게는 아직 아무런 책임도 묻지 못했어요. 이미 배우자에게서 받은 합의금이 있으니 상간자에게는 청구할 게 없다는 말도 들리고, 반대로 청구한 금액보다 법원이 더 많은 손해를 인정해주는 경우도 있다는 말도 들려 혼란스럽습니다. 어디까지 청구할 수 있는지 막막한 상태입니다." 민법 제750조·제751조는 불법행위로 인한 재산·정신적 손해의 배상을 정하고, 부정행위로 인한 위자료는 부부 일방과 제3자가 공동불법행위자로서 부진정연대채무 관계에 있는 영역입니다. 판례는 손해배상청구소송에서 법원이 \'청구의 기초가 되는 손해액\'을 원고의 청구금액보다 많은 금액으로 인정했더라도 청구금액을 초과해 지급을 명하지 않은 이상 처분권주의에 위배되지 않는다고 본 사례 흐름이 있습니다. 합의금 수령 + 상간자 별도 청구 + 손해액 결합은 \'청구금액·손해 인정 범위\' 다툼이 가능한 트랙입니다. 피해자라면 ① 부정행위 입증 ② 합의금 정리 ③ 상간자 청구 ④ 손해액 산정 ⑤ 청구금액 설정 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 입증 ② 합의 ③ 청구 ④ 손해액 ⑤ 금액 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 상간자 위자료 청구 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 부정행위 입증·합의금 정리·상간자 청구·손해액·청구금액 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 부정행위 입증</strong> — 상간자의 부정행위·고의·과실 정황 정리.</li>\n<li><strong>② 합의금 정리</strong> — 배우자로부터 받은 위자료 합의금의 성격·범위 정리.</li>\n<li><strong>③ 상간자 청구</strong> — 공동불법행위·부진정연대채무 관계에서 상간자에 대한 별도 청구 검토.</li>\n<li><strong>④ 손해액 산정</strong> — 정신적 손해의 위자료 규모 정리.</li>\n<li><strong>⑤ 청구금액 설정</strong> — 법원이 인정 가능한 손해액과 청구금액의 관계 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 법원이 청구 기초 손해액을 청구금액보다 많이 인정하더라도 청구금액을 초과해 지급을 명하지 않으면 처분권주의에 위배되지 않는 영역. 청구금액 설정이 인용 범위에 영향을 줄 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 부정행위 자료 보존 (즉시)</strong> — 메시지·사진·진술 등 부정행위 정황 자료 보존.</li>\n<li><strong>2단계 — 합의 내용 정리 (1주)</strong> — 배우자와의 위자료 합의서·지급 내역·합의 범위 정리.</li>\n<li><strong>3단계 — 손해액·청구금액 산정 (2~3주)</strong> — 정신적 손해 규모와 청구금액 설정 검토.</li>\n<li><strong>4단계 — 상간자 위자료 청구 (소 제기 시)</strong> — 공동불법행위·부진정연대 관계 정리해 청구.</li>\n<li><strong>5단계 — 조정·판결 (선고 후)</strong> — 조정·판결로 위자료 확정.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">합의금 수령 후 상간자 위자료 청구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 입증·합의·손해액 갈래입니다.</strong></p>\n<ul>\n<li><strong>부정행위 정황 자료 (메시지·사진·통화·동선)</strong></li>\n<li><strong>상간자 인적사항·연락처 (피고 특정)</strong></li>\n<li><strong>배우자와의 위자료 합의서·지급 내역 (합의 범위)</strong></li>\n<li><strong>혼인관계증명서·혼인 파탄 정황 자료</strong></li>\n<li><strong>정신적 손해 입증 자료 (진료·상담 기록 등)</strong></li>\n<li><strong>손해액·청구금액 산정 메모</strong></li>\n<li><strong>내용증명·청구 통지 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 위자료는 사례에 따라 다르지만, 법원이 청구금액보다 많은 손해를 인정하더라도 청구금액을 초과해 지급을 명하지 않는 것으로 평가될 수 있는 영역이므로 청구금액 설정이 중요합니다. 배우자에게 받은 합의금의 성격·범위와 상간자 청구의 관계도 함께 정리해두는 것이 핵심입니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>부정행위 입증</strong> — 상간자의 고의·과실과 부정행위 정황 입증 정도.</li>\n<li><strong>합의금의 성격</strong> — 배우자로부터 받은 합의금이 전체 손해를 포함하는지, 일부인지.</li>\n<li><strong>부진정연대 관계</strong> — 배우자·상간자의 책임 범위와 분담.</li>\n<li><strong>청구금액 설정</strong> — 인정 가능한 손해액과 청구금액의 관계.</li>\n<li><strong>처분권주의</strong> — 청구금액 초과 인정 불가 원칙.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원·민사법원 (위자료 청구)</strong></li>\n<li><strong>여성긴급전화 1366 (가정폭력 동반 시)</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 청구금액 초과 손해 인정과 처분권주의',
        summary:
          '대법원 2024므14938(대법원, 2025.09.11 선고) 영역에서 법원은 손해배상청구소송에서 법원이 \'청구의 기초가 되는 손해액\'을 원고의 청구금액보다 많은 금액으로 인정했다고 하더라도 청구금액을 초과해 지급을 명하지 않은 이상 처분권주의에 위배되지 않는다고 판시했습니다. 부정행위 피해자가 배우자로부터 위자료 합의금을 지급받은 상태에서 상간자에게 별도의 위자료 지급을 청구하는 사안에서 손해액과 청구금액의 관계를 다룬 사례 흐름입니다. 합의금 수령 후 상간자 청구 사안에서도 청구금액 설정·인정 범위를 검토해볼 수 있습니다.',
        takeaway: '합의금 수령 + 상간자 별도 청구 결합 시 손해액·청구금액 설정·인정 범위 검토 영역 — 변호사 상담·법원 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '배우자에게 합의금을 받았는데 상간자에게 또 청구할 수 있나요?',
        answer:
          '<strong>배우자·상간자는 공동불법행위·부진정연대채무 관계로 평가될 수 있어 별도 청구를 검토하는 영역입니다.</strong> 합의금 범위와 청구 관계를 정리.',
      },
      {
        question: '청구한 금액보다 더 받을 수 있나요?',
        answer:
          '<strong>법원이 손해를 더 많이 인정하더라도 청구금액을 초과해 지급을 명하지 않는 것으로 평가될 수 있는 영역입니다.</strong> 청구금액 설정을 신중히 검토.',
      },
      {
        question: '위자료는 얼마나 인정되나요?',
        answer:
          '<strong>사례에 따라 다르지만 부정행위 정도·혼인 파탄 영향 등에 따라 위자료 수준이 검토되는 사례가 많습니다.</strong> 손해 입증 자료를 함께 정리.',
      },
      {
        question: '상간자가 몰랐다고 하면 청구가 안 되나요?',
        answer:
          '<strong>상간자의 고의·과실, 혼인 관계 인식 여부가 다툼 대상이 되는 영역입니다.</strong> 부정행위 정황·인식 자료를 확보.',
      },
      {
        question: '청구에 기한이 있나요?',
        answer:
          '<strong>불법행위 손해배상은 손해·가해자를 안 날부터 3년의 단기소멸시효가 적용되는 영역입니다.</strong> 시점을 정리해 기한을 관리.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '상간자 위자료 청구', href: '/guide/divorce/divorce-adultery-consolation-claim' },
      { label: '부정행위 증거 수집', href: '/guide/divorce/divorce-infidelity-evidence-track' },
      { label: '위자료 산정 기준', href: '/guide/divorce/divorce-consolation-calculation-standard' },
      { label: '재판상 이혼 사유', href: '/guide/divorce/divorce-judicial-grounds-track' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
    ],
  },

  // ─── 4. divorce-post-custody-relocation-visitation-dispute-track ───
  {
    domain: 'divorce',
    slug: 'divorce-post-custody-relocation-visitation-dispute-track',
    keyword: '협의이혼 후 과거 양육비 분담 청구',
    questionKeyword: '협의이혼 후 오랜 기간 혼자 아이를 키워왔는데, 상대방은 양육비를 거의 부담하지 않았어요. 시간이 많이 지난 지금 과거 양육비를 청구할 수 있는지, 이혼 당시 재산 정리도 영향을 주는지 궁금합니다.',
    ctaKeyword: '협의이혼 후 과거 양육비 분담 청구 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '과거 양육비 청구 — 5단계 분담 범위·기준 점검 | 로앤가이드',
      description:
        '협의이혼 후 혼자 키운 자녀의 과거 양육비를 상대방에게 청구할 때 분담 범위·재산 합의 고려 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"협의이혼 이후 오랜 기간 동안 혼자서 아이를 키워온 부모입니다. 그동안 상대방은 양육비를 거의 부담하지 않았고, 저는 생활비·교육비를 모두 떠안으며 버텨왔어요. 이제 와서 그동안 들어간 과거 양육비를 상대방에게 청구할 수 있을지, 너무 오래 지나 권리가 사라진 건 아닌지, 이혼할 때 했던 재산 정리가 양육비에도 영향을 주는지 도무지 가늠이 되지 않아 막막한 상태입니다." 민법 제837조는 이혼 시 자녀의 양육에 관한 사항을 정하도록 하고, 양육비는 자녀를 공동으로 양육할 책임이 있는 부모가 원칙적으로 공동 부담하는 영역입니다. 판례는 부모 중 한쪽만 자녀를 양육하게 된 경우 양육하는 사람이 과거 양육비에 대해 상대방이 분담함이 상당한 비용의 상환을 청구할 수 있으나, 과거 양육비는 일시 부담의 가혹성·신의칙·형평을 고려해 반드시 장래 양육비와 동일한 기준으로 정할 필요는 없고, 양육 경위·비용 액수·부양의무 인식 시기·이혼 시 재산분할이나 재산상 합의의 유무와 내용 등을 종합해 분담 범위를 정한다고 본 사례 흐름이 있습니다. 장기 단독 양육 + 상대방 미부담 + 이혼 시 재산 합의 결합은 \'과거 양육비 분담 범위\' 다툼이 가능한 트랙입니다. 당사자라면 ① 양육 경위 ② 비용 정리 ③ 부양의무 인식 ④ 재산 합의 ⑤ 분담 범위 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 경위 ② 비용 ③ 인식 ④ 합의 ⑤ 분담 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 과거 양육비 분담 청구 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 양육 경위·비용·부양의무 인식·재산 합의·분담 범위 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 양육 경위</strong> — 한쪽이 단독으로 자녀를 양육하게 된 경위 정리.</li>\n<li><strong>② 비용 정리</strong> — 그동안 들어간 양육비(통상 생활비·특별 비용) 정리.</li>\n<li><strong>③ 부양의무 인식</strong> — 상대방이 부양의무를 인식했는지·시기.</li>\n<li><strong>④ 재산 합의 고려</strong> — 이혼 시 재산분할·재산상 합의의 유무와 내용.</li>\n<li><strong>⑤ 분담 범위</strong> — 신의칙·형평을 고려한 과거 양육비 분담 범위 산정.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 과거 양육비는 일시 부담의 가혹성·신의칙·형평을 고려해 반드시 장래 양육비와 동일한 기준으로 정할 필요는 없고, 양육 경위·비용·부양의무 인식 시기·재산 합의 등을 종합해 분담 범위를 정하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 양육·지출 자료 보존 (즉시)</strong> — 양육 기간·생활비·교육비·의료비 지출 자료 보존.</li>\n<li><strong>2단계 — 양육 경위·비용 정리 (1~2주)</strong> — 단독 양육 경위와 통상·특별 비용 구분 정리.</li>\n<li><strong>3단계 — 인식·재산 합의 정리 (2~3주)</strong> — 상대방 부양의무 인식 시기, 이혼 시 재산 합의 내용 정리.</li>\n<li><strong>4단계 — 양육비 심판 청구 (가정법원)</strong> — 과거·장래 양육비 분담 심판 청구.</li>\n<li><strong>5단계 — 심판·이행 (확정 후)</strong> — 심판 확정 후 이행명령·집행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 재산분할·양육비 쟁점, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">협의이혼 후 과거 양육비 분담 청구 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=divorce" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·비용·재산 합의 갈래입니다.</strong></p>\n<ul>\n<li><strong>협의이혼 서류·양육 관련 합의서 (양육 경위)</strong></li>\n<li><strong>생활비·교육비·의료비 지출 자료 (양육비 액수)</strong></li>\n<li><strong>특별 비용 자료 (치료비 등 이례적 비용)</strong></li>\n<li><strong>상대방 부양의무 인식 정황 (연락·요청 기록)</strong></li>\n<li><strong>이혼 시 재산분할·합의 내용 자료</strong></li>\n<li><strong>소득·재산 자료 (양측 경제적 능력)</strong></li>\n<li><strong>가족관계증명서·주민등록등본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 과거 양육비는 통상의 생활비인지, 치료비처럼 이례적·불가피한 특별 비용인지를 구분해 정리하는 것이 핵심. 이혼 당시 재산분할이나 재산상 합의가 있었다면 그 내용도 분담 범위 산정에서 함께 고려되는 영역이므로 합의 자료를 챙겨두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>양육 경위</strong> — 한쪽이 단독으로 양육하게 된 경위·기간.</li>\n<li><strong>비용의 성격</strong> — 통상 생활비인지, 이례적 특별 비용인지.</li>\n<li><strong>부양의무 인식</strong> — 상대방이 부양의무를 인식했는지·그 시기.</li>\n<li><strong>재산 합의 고려</strong> — 이혼 시 재산분할·합의 내용이 분담 범위에 미치는 영향.</li>\n<li><strong>일시 부담의 가혹성</strong> — 일시에 큰 금액을 부담시키는 것이 형평·신의칙에 맞는지.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (양육비 심판 청구)</strong></li>\n<li><strong>양육비이행관리원 1644-6621</strong></li>\n<li><strong>한국가정법률상담소 1644-7077</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 과거 양육비 분담 범위와 재산 합의 고려',
        summary:
          '대법원 2023스637(대법원, 2024.10.08 선고) 영역에서 법원은 부모 중 한쪽만 자녀를 양육하게 된 경우 양육하는 사람이 과거 양육비에 대해 상대방이 분담함이 상당한 비용의 상환을 청구할 수 있으나, 과거 양육비를 한꺼번에 부담시키면 지나치게 가혹하거나 신의칙·형평에 어긋날 수 있으므로 반드시 이행청구 이후 양육비와 동일한 기준으로 정할 필요는 없고, 양육 경위·비용 액수·부양의무 인식 여부와 시기·통상 생활비인지 특별 비용인지·당사자의 재산 상황과 경제적 능력·부담의 형평성 등을 고려해 분담 범위를 정할 수 있으며, 이혼 시 재산분할이나 재산상 합의의 유무와 내용도 고려할 필요가 있다고 판시했습니다. 협의이혼 후 장기간 경과 사안에서도 분담 범위를 검토해볼 수 있습니다.',
        takeaway: '장기 단독 양육 + 상대방 미부담 + 이혼 시 재산 합의 결합 시 과거 양육비 분담 범위·재산 합의 고려 검토 영역 — 변호사 상담·가정법원 심판 청구 검토 권장.',
      },
    ],
    faq: [
      {
        question: '오래 전 협의이혼인데 과거 양육비를 청구할 수 있나요?',
        answer:
          '<strong>한쪽이 단독 양육한 경우 상대방이 분담함이 상당한 과거 양육비 상환을 청구할 수 있는 영역입니다.</strong> 양육 경위·지출 자료를 정리.',
      },
      {
        question: '과거 양육비도 산정표대로 다 받을 수 있나요?',
        answer:
          '<strong>과거 양육비는 일시 부담의 가혹성·신의칙·형평을 고려해 반드시 장래 양육비와 동일한 기준으로 정하지 않는 영역입니다.</strong> 비용의 성격을 함께 정리.',
      },
      {
        question: '이혼할 때 재산을 정리했는데도 청구되나요?',
        answer:
          '<strong>이혼 시 재산분할·재산상 합의의 유무와 내용도 분담 범위 산정에서 고려되는 영역입니다.</strong> 당시 합의 내용을 정리.',
      },
      {
        question: '치료비 같은 특별 비용도 청구되나요?',
        answer:
          '<strong>통상 생활비인지, 이례적·불가피한 특별 비용인지에 따라 분담 범위가 달라질 수 있는 영역입니다.</strong> 비용 영수증을 보관.',
      },
      {
        question: '상대방이 부양의무를 몰랐다고 하면 어떻게 되나요?',
        answer:
          '<strong>상대방의 부양의무 인식 여부와 시기도 분담 범위 판단에서 고려되는 영역입니다.</strong> 연락·요청 기록을 정리.',
      },
    ],
    cta: { text: '재산분할·양육비 쟁점, AI로 먼저 점검하기', link: '/chat?domain=divorce' },
    internalLinks: [
      { label: '양육비 산정 기준', href: '/guide/child-support/child-support-calculation-standard' },
      { label: '과거 양육비 청구', href: '/guide/child-support/child-support-past-claim-track' },
      { label: '양육비 이행 명령', href: '/guide/child-support/child-support-enforcement-order' },
      { label: '협의이혼 준비서류', href: '/guide/divorce/divorce-agreement-document-checklist' },
      { label: '면접교섭 다툼', href: '/guide/divorce/divorce-visitation-dispute-track' },
    ],
  },

  // ─── 5. defamation-apartment-resident-online-cafe-post-track ───
  {
    domain: 'defamation',
    slug: 'defamation-apartment-resident-online-cafe-post-track',
    keyword: '아파트 입주민 카페 게시글 명예훼손 공익성',
    questionKeyword: '아파트 입주민 카페에 단지 관리·하자 문제를 알리는 글을 올렸는데, 글에 언급된 사람이 명예훼손이라고 합니다. 사실을 알린 글도 공익성이 인정되면 위법성이 없어진다는데 어떻게 판단되나요?',
    ctaKeyword: '아파트 카페 게시글 명예훼손 공익성 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '입주민 카페 글 명예훼손 — 5단계 진실성·공익성 점검 | 로앤가이드',
      description:
        '아파트 입주민 카페에 올린 글이 명예훼손이라는 주장을 들었다면 진실성·공공의 이익·위법성조각 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"아파트 입주민 온라인 카페에 단지 운영·하자·관리 문제를 입주민들과 공유하려고 글을 올린 사람입니다. 사실관계를 토대로 단지 전체의 이익을 위해 쓴 글인데, 글에 언급된 상대방이 \'명예훼손\'이라며 고소하겠다고 합니다. 사실을 적시했더라도 그 목적이 공공의 이익을 위한 것이면 위법성이 없어진다는 말도 들리는데, 어디까지가 정당한 문제 제기이고 어디서부터 명예훼손이 되는지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조는 공연히 사실 또는 허위사실을 적시해 사람의 명예를 훼손하는 행위를 규율하고, 형법 제310조는 제307조 제1항의 행위가 진실한 사실로서 오로지 공공의 이익에 관한 때에는 처벌하지 아니한다고 정하는 영역입니다. 판례는 진실성이란 내용 전체의 취지상 중요한 부분이 객관적 사실과 합치되면 인정되고 세부의 차이나 다소 과장이 있어도 진실하지 않다고 볼 것은 아니며, 적시 사실이 공공의 이익에 관한 것인지는 내용·상대방 범위·표현 방법과 명예 침해 정도를 비교·고려해 판단한다고 본 사례 흐름이 있습니다. 사실 적시 + 공유 목적 + 명예훼손 주장 결합은 \'진실성·공공의 이익 위법성조각\' 다툼이 가능한 트랙입니다. 당사자라면 ① 사실/의견 구분 ② 진실성 ③ 공익성 ④ 표현 방법 ⑤ 위법성조각 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 구분 ② 진실 ③ 공익 ④ 방법 ⑤ 조각 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 입주민 카페 글 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실/의견 구분·진실성·공익성·표현 방법·위법성조각 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실/의견 구분</strong> — 글이 사실 적시인지, 의견·논평인지 구분.</li>\n<li><strong>② 진실성</strong> — 내용 전체 취지상 중요한 부분이 객관적 사실과 합치되는지.</li>\n<li><strong>③ 공익성</strong> — 적시 사실이 단지·입주민 전체의 공공 이익에 관한 것인지.</li>\n<li><strong>④ 표현 방법</strong> — 상대방 범위·표현 방법·명예 침해 정도의 비교형량.</li>\n<li><strong>⑤ 위법성조각</strong> — 진실·공익 목적 결합 시 형법 제310조 위법성조각 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 진실한 사실로서 오로지 공공의 이익에 관한 때에는 위법성이 조각될 수 있는 영역. 세부의 차이나 다소 과장이 있어도 전체 취지상 중요 부분이 진실에 합치하면 진실성이 인정될 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시글·근거 자료 보존 (즉시)</strong> — 게시글 원본·작성 경위·사실 근거 자료 보존.</li>\n<li><strong>2단계 — 사실/의견·진실성 정리 (1주)</strong> — 사실 적시 부분과 의견 부분 구분, 근거 자료 대조.</li>\n<li><strong>3단계 — 공익성·표현 방법 정리 (2주)</strong> — 공공 이익 목적·상대방 범위·표현 방법 정리.</li>\n<li><strong>4단계 — 위법성조각·삭제 대응 (고소·분쟁 시)</strong> — 형법 제310조 주장, 게시물 삭제·정정 요청 대응.</li>\n<li><strong>5단계 — 조정·형사·민사 (분쟁 시)</strong> — 분쟁조정·고소 대응 또는 손해배상 다툼.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">입주민 카페 글 명예훼손 진실성·공익성 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 진실성·공익성·표현 방법 갈래입니다.</strong></p>\n<ul>\n<li><strong>게시글 원본·작성·게시 일시 (적시 내용)</strong></li>\n<li><strong>사실 근거 자료 (하자·관리 문제 입증)</strong></li>\n<li><strong>공유 목적·공공 이익 정황 자료</strong></li>\n<li><strong>카페 회원 범위·열람 범위 자료 (상대방 범위)</strong></li>\n<li><strong>표현 방법·맥락 자료 (전체 취지)</strong></li>\n<li><strong>상대방 항의·삭제 요청·고소장 사본</strong></li>\n<li><strong>정정·반론 교신 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 진실성은 내용 전체의 취지상 중요한 부분이 객관적 사실과 합치되면 인정될 수 있는 영역이므로, 글의 근거가 된 사실 자료와 공유 목적(공공의 이익)을 함께 정리하는 것이 핵심. 세부의 차이나 다소 과장이 있어도 전체 취지를 기준으로 평가되는 점을 고려해 맥락 자료를 모아두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실/의견 구분</strong> — 적시 내용이 사실인지, 의견·논평인지.</li>\n<li><strong>진실성</strong> — 중요한 부분이 객관적 사실과 합치되는지.</li>\n<li><strong>공익성</strong> — 오로지 공공의 이익을 위한 것인지.</li>\n<li><strong>표현 방법</strong> — 표현의 수위·상대방 범위·명예 침해 정도.</li>\n<li><strong>위법성조각</strong> — 진실·공익 결합 시 형법 제310조 적용 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 진실성의 의미와 공공의 이익 위법성조각 기준',
        summary:
          '대법원 2022다251650(대법원, 2024.10.08 선고) 영역에서 법원은 진실성이란 내용 전체의 취지를 살펴볼 때 중요한 부분이 객관적 사실과 합치되는 사실이라는 의미로서 세부적으로 진실과 약간 차이가 나거나 다소 과장된 표현이 있다고 하여 진실하지 않다고 볼 것은 아니고, 사실 적시로 타인의 명예를 훼손하더라도 진실한 사실로서 오로지 공공의 이익에 관한 때에는 위법성이 없으며, 공공의 이익에 관한 것인지는 적시 사실의 구체적 내용·공표 상대방의 범위·표현 방법 등과 명예 침해 정도를 비교·고려해 판단한다고 판시했습니다. 입주민 카페 게시글 사안에서도 진실성·공익성·표현 방법을 검토해볼 수 있습니다.',
        takeaway: '사실 적시 + 공유 목적 + 명예훼손 주장 결합 시 진실성·공익성·위법성조각 검토 영역 — 변호사 상담·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '사실을 그대로 적었는데도 명예훼손이 되나요?',
        answer:
          '<strong>사실 적시도 명예훼손이 될 수 있으나 진실·공익 목적이면 위법성이 조각될 수 있는 영역입니다.</strong> 근거 자료와 공유 목적을 정리.',
      },
      {
        question: '세부 사실이 조금 다르면 허위인가요?',
        answer:
          '<strong>세부 차이나 다소 과장이 있어도 전체 취지상 중요 부분이 진실에 합치하면 진실성이 인정될 수 있는 영역입니다.</strong> 전체 맥락 자료를 모아둡니다.',
      },
      {
        question: '공익성은 어떻게 인정되나요?',
        answer:
          '<strong>적시 내용·상대방 범위·표현 방법과 명예 침해 정도를 비교·고려해 판단하는 영역입니다.</strong> 단지 공동 이익 목적 정황을 정리.',
      },
      {
        question: '카페 글도 \'공연성\'이 있나요?',
        answer:
          '<strong>다수가 열람 가능한 게시 환경의 전파 가능성이 공연성 판단에서 고려되는 영역입니다.</strong> 카페 회원·열람 범위 자료를 정리.',
      },
      {
        question: '글을 삭제하면 문제가 끝나나요?',
        answer:
          '<strong>삭제·정정으로 분쟁이 정리되는 경우도 있으나 별도 책임 여부는 사안에 따라 다른 영역입니다.</strong> 삭제·교신 기록을 보관.',
      },
    ],
    cta: { text: '삭제·합의·방어 포인트, AI로 먼저 점검하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '사실적시 명예훼손 대응', href: '/guide/defamation/defamation-true-fact-defense-track' },
      { label: '공공의 이익 위법성조각', href: '/guide/defamation/defamation-public-interest-track' },
      { label: '온라인 게시글 삭제 요청', href: '/guide/defamation/defamation-online-post-deletion' },
      { label: '명예훼손 고소 대응', href: '/guide/defamation/defamation-accusation-response-track' },
      { label: '정보통신망법 명예훼손', href: '/guide/defamation/defamation-network-act-track' },
    ],
  },

  // ─── 6. defamation-restaurant-blog-fake-review-track ───
  {
    domain: 'defamation',
    slug: 'defamation-restaurant-blog-fake-review-track',
    keyword: '식당 블로그 후기 의혹 사실 의견 구분',
    questionKeyword: '식당 이용 후 블로그에 후기와 의혹을 적었는데, 가게 측이 허위사실 명예훼손이라고 합니다. 제 글이 사실 적시인지 의견인지, 전체 취지상 허위로 보이는지 어떻게 판단되는지 궁금합니다.',
    ctaKeyword: '식당 블로그 후기 사실·의견 구분 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '블로그 후기 명예훼손 — 5단계 사실·의견 구분 점검 | 로앤가이드',
      description:
        '식당 블로그 후기·의혹 글이 허위 명예훼손이라는 주장을 들었다면 사실·의견 구분·전체 취지·진실성 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"식당을 이용한 뒤 블로그에 솔직한 후기와 함께 위생·서비스에 관한 의혹을 적은 사람입니다. 다른 소비자들에게 참고가 되길 바라는 마음이었는데, 가게 측이 \'허위사실에 의한 명예훼손\'이라며 강하게 항의하고 고소까지 언급합니다. 제 글에서 어디까지가 사실을 적시한 부분이고 어디가 제 의견·평가인지, 전체적으로 봤을 때 허위로 평가되는지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조는 사실·허위사실 적시 명예훼손을, 형법 제310조는 진실한 사실로서 오로지 공공의 이익에 관한 때 위법성조각을 정하는 영역입니다. 판례는 어떤 표현이 사실의 적시인지 의견 표명인지는 전체적 취지·사용 어휘의 통상 의미·문구 연결방법 등을 종합해 표현이 주는 전체적 인상을 기준으로 판단하고, 공표 내용 전체 취지상 중요한 부분이 객관적 사실과 합치되면 세부 차이나 다소 과장이 있어도 허위로 보기 어려우며, 의견과 사실이 혼재된 표현은 전체적으로 보아 사실 공표 여부를 판단해야 한다고 본 사례 흐름이 있습니다. 후기 게시 + 의혹 제기 + 허위 주장 결합은 \'사실/의견 구분·전체 취지\' 다툼이 가능한 트랙입니다. 당사자라면 ① 표현 분석 ② 사실/의견 ③ 전체 취지 ④ 진실성 ⑤ 공익성 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 분석 ② 구분 ③ 취지 ④ 진실 ⑤ 공익 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 블로그 후기 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 표현 분석·사실/의견·전체 취지·진실성·공익성 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 표현 분석</strong> — 글의 어휘·문구 연결·전체 인상 분석.</li>\n<li><strong>② 사실/의견 구분</strong> — 증거로 증명 가능한 사실 적시인지, 가치판단·평가인지.</li>\n<li><strong>③ 전체 취지</strong> — 의견·사실 혼재 시 전체적으로 보아 사실 공표 여부 판단.</li>\n<li><strong>④ 진실성</strong> — 중요 부분이 객관적 사실과 합치되는지(세부 차이·과장 평가).</li>\n<li><strong>⑤ 공익성</strong> — 소비자 정보 제공 목적 등 공공의 이익 관련성 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 표현이 사실인지 의견인지는 전체 취지·어휘 의미·문구 연결을 종합해 전체적 인상을 기준으로 판단하고, 의견과 사실이 혼재되면 전체적으로 보아 사실 공표 여부를 판단하는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 후기·이용 자료 보존 (즉시)</strong> — 게시글 원본·이용 영수증·사진·근거 자료 보존.</li>\n<li><strong>2단계 — 사실/의견 분석 (1주)</strong> — 사실 적시 부분과 의견·평가 부분 구분.</li>\n<li><strong>3단계 — 전체 취지·진실성 정리 (2주)</strong> — 중요 부분의 사실 합치·전체 인상 정리.</li>\n<li><strong>4단계 — 공익성·삭제 대응 (고소·분쟁 시)</strong> — 소비자 정보 목적 주장, 삭제·정정 요청 대응.</li>\n<li><strong>5단계 — 조정·형사·민사 (분쟁 시)</strong> — 분쟁조정·고소 대응 또는 손해배상 다툼.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">식당 블로그 후기 사실·의견 구분 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 표현·진실성·공익성 갈래입니다.</strong></p>\n<ul>\n<li><strong>블로그 후기 원본·작성·게시 일시</strong></li>\n<li><strong>이용 영수증·예약 기록 (이용 사실)</strong></li>\n<li><strong>현장 사진·동영상 (사실 근거)</strong></li>\n<li><strong>사실 부분·의견 부분 구분 메모 (표현 분석)</strong></li>\n<li><strong>소비자 정보 제공 목적 정황 자료</strong></li>\n<li><strong>가게 측 항의·삭제 요청·고소장 사본</strong></li>\n<li><strong>정정·반론 교신 기록</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 후기에서 증거로 증명 가능한 \'사실 적시\' 부분과 본인의 \'의견·평가\' 부분을 구분해 정리해두는 것이 핵심. 의견과 사실이 섞여 있어도 전체적으로 보아 사실 공표 여부를 판단하는 영역이므로, 사실 부분에 대한 근거 자료를 함께 모아두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실/의견 구분</strong> — 증거로 증명 가능한 사실인지, 가치판단·평가인지.</li>\n<li><strong>전체 취지</strong> — 의견·사실 혼재 시 전체적 인상 기준 판단.</li>\n<li><strong>진실성</strong> — 중요 부분이 객관적 사실과 합치되는지.</li>\n<li><strong>공익성</strong> — 소비자 정보 제공 등 공공 이익 관련성.</li>\n<li><strong>표현 방법</strong> — 표현 수위·반복성·악의 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실 적시와 의견 표명의 구분 및 전체 취지 판단',
        summary:
          '대법원 2023도16586(대법원, 2024.10.31 선고) 영역에서 법원은 형사처벌 여부가 문제 되는 표현이 사실을 드러낸 것인지 의견·추상적 판단을 표명한 것인지는 표현의 전체적 취지·사용 어휘의 통상 의미·문구 연결방법 등을 종합해 선거인 등 수신자에게 주는 전체적 인상을 기준으로 판단하고, 공표 내용 전체 취지상 중요한 부분이 객관적 사실과 합치되면 세부적으로 진실과 약간 차이가 나거나 다소 과장된 표현이 있더라도 허위 사실로 볼 수 없으며, 의견과 사실이 혼재된 표현은 전체적으로 보아 사실을 공표했는지 판단해야 한다고 판시했습니다. 블로그 후기·의혹 글 사안에서도 사실/의견 구분과 전체 취지를 검토해볼 수 있습니다.',
        takeaway: '후기 게시 + 의혹 제기 + 허위 주장 결합 시 사실/의견 구분·전체 취지·진실성 검토 영역 — 변호사 상담·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '솔직한 후기를 썼는데 명예훼손이라고 합니다.',
        answer:
          '<strong>후기가 사실 적시인지 의견 표명인지, 전체 취지상 허위인지가 핵심으로 다뤄지는 영역입니다.</strong> 사실·의견 부분을 구분해 정리.',
      },
      {
        question: '제 느낌·평가도 명예훼손이 되나요?',
        answer:
          '<strong>증거로 증명 가능한 사실 적시와 가치판단·평가는 구분되는 영역입니다.</strong> 평가 부분과 사실 부분을 나눠 정리.',
      },
      {
        question: '일부 표현이 과장됐으면 허위인가요?',
        answer:
          '<strong>전체 취지상 중요 부분이 사실과 합치되면 세부 차이·과장이 있어도 허위로 보기 어려운 영역입니다.</strong> 전체 맥락 자료를 모아둡니다.',
      },
      {
        question: '소비자 정보 목적이면 보호되나요?',
        answer:
          '<strong>소비자 정보 제공 등 공공 이익 관련성도 위법성 판단에서 고려되는 영역입니다.</strong> 작성 목적 정황을 정리.',
      },
      {
        question: '가게가 삭제를 요구하면 따라야 하나요?',
        answer:
          '<strong>삭제 여부는 사안에 따라 다르며 근거 자료를 갖춘 사실 부분은 함께 검토되는 영역입니다.</strong> 삭제·교신 기록을 보관.',
      },
    ],
    cta: { text: '삭제·합의·방어 포인트, AI로 먼저 점검하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '후기·리뷰 명예훼손 대응', href: '/guide/defamation/defamation-review-response-track' },
      { label: '사실·의견 구분 기준', href: '/guide/defamation/defamation-fact-opinion-track' },
      { label: '정보통신망법 명예훼손', href: '/guide/defamation/defamation-network-act-track' },
      { label: '온라인 게시글 삭제 요청', href: '/guide/defamation/defamation-online-post-deletion' },
      { label: '명예훼손 고소 대응', href: '/guide/defamation/defamation-accusation-response-track' },
    ],
  },

  // ─── 7. defamation-ex-partner-private-life-disclosure-track ───
  {
    domain: 'defamation',
    slug: 'defamation-ex-partner-private-life-disclosure-track',
    keyword: '전 연인 사생활 폭로 사실적시 명예훼손',
    questionKeyword: '헤어진 전 연인이 제 사생활을 온라인에 폭로하는 글을 올렸어요. 사실이 일부 섞여 있어도 명예훼손이 되는지, 위법성이 없어지려면 어떤 요건이 필요한지, 입증 책임은 누구에게 있는지 궁금합니다.',
    ctaKeyword: '전 연인 사생활 폭로 사실적시 명예훼손 정리',
    type: '판단형',
    perspective: 'victim',
    meta: {
      title: '사생활 폭로 명예훼손 — 5단계 공익·입증책임 점검 | 로앤가이드',
      description:
        '전 연인이 사생활을 온라인에 폭로해 피해를 입었다면 공공의 이해·공익 목적·진실성 입증책임 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"헤어진 전 연인이 제 사적인 이야기와 관계 중 있었던 일을 온라인에 글로 올려 불특정 다수에게 퍼뜨린 상황입니다. 일부 사실이 섞여 있다 보니 \'사실이면 문제없다\'고 주장하는데, 순수하게 사적인 영역의 일을 폭로한 것이 정말 괜찮은 건지 이해가 되지 않아요. 사실을 적시한 폭로도 명예훼손이 되는지, 위법성이 없어지려면 어떤 요건이 필요한지, 그 요건을 누가 입증해야 하는지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조는 사실·허위사실 적시 명예훼손을, 형법 제310조는 진실한 사실로서 오로지 공공의 이익에 관한 때 위법성조각을 정하는 영역입니다. 판례는 사실 적시로 개인의 명예를 훼손하더라도 공공의 이해에 관한 사항으로서 그 목적이 오로지 공공의 이익을 위한 것이고 적시 사실이 진실이거나 진실로 믿을 상당한 이유가 있으면 위법성이 없으나, 그에 대한 입증책임은 명예훼손 행위를 한 측에 있으며, 표현이 공적 관심 사안인지 순수한 사적 영역인지에 따라 심사기준에 차이를 둔다고 본 사례 흐름이 있습니다. 사적 영역 폭로 + 다수 전파 + 사실 일부 포함 결합은 \'공공의 이해·위법성조각·입증책임\' 다툼이 가능한 트랙입니다. 당사자라면 ① 적시 내용 ② 공적/사적 영역 ③ 공익 목적 ④ 진실성·입증책임 ⑤ 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 내용 ② 영역 ③ 공익 ④ 입증 ⑤ 대응 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 사생활 폭로 명예훼손 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 적시 내용·공적/사적 영역·공익 목적·입증책임·대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 적시 내용</strong> — 폭로 글의 사실 적시 부분과 사생활 침해 정도 정리.</li>\n<li><strong>② 공적/사적 영역</strong> — 공적 관심 사안인지, 순수한 사적 영역인지 구분.</li>\n<li><strong>③ 공익 목적</strong> — 오로지 공공의 이익을 위한 것인지(사적 보복 목적 여부).</li>\n<li><strong>④ 진실성·입증책임</strong> — 진실·상당한 이유의 입증책임이 명예훼손 행위 측에 있음.</li>\n<li><strong>⑤ 대응</strong> — 삭제 요청·형사 고소·민사 손해배상·분쟁조정 대응.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 사실 적시 명예훼손의 위법성조각을 위한 공익성·진실성 입증책임은 명예훼손 행위를 한 측에 있는 영역. 순수한 사적 영역의 일은 공적 관심 사안보다 심사기준이 엄격하게 적용될 수 있는 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 게시물 캡처·증거 보존 (즉시)</strong> — 폭로 게시물 원본·URL·캡처·전파 정황 보존.</li>\n<li><strong>2단계 — 적시 내용·영역 정리 (1주)</strong> — 사실 적시·사생활 침해 부분, 공적/사적 영역 구분.</li>\n<li><strong>3단계 — 공익·입증 정리 (2주)</strong> — 공익 목적 부재 정황, 진실성 입증책임 구조 정리.</li>\n<li><strong>4단계 — 삭제 요청·고소 (분쟁 시)</strong> — 플랫폼 삭제 요청·형사 고소·임시조치 검토.</li>\n<li><strong>5단계 — 민사·분쟁조정 (병행)</strong> — 손해배상 청구·개인정보 분쟁조정 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 삭제·합의·방어 포인트, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">전 연인 사생활 폭로 사실적시 명예훼손 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 적시 내용·공익·입증 갈래입니다.</strong></p>\n<ul>\n<li><strong>폭로 게시물 원본·URL·캡처 (적시 내용)</strong></li>\n<li><strong>게시 일시·전파 범위 자료 (공연성·확산)</strong></li>\n<li><strong>사생활 침해 정도·사적 영역 정황 자료</strong></li>\n<li><strong>공익 목적 부재·사적 보복 정황 자료</strong></li>\n<li><strong>피해 입증 자료 (정신적 고통·진료·상담 기록 등)</strong></li>\n<li><strong>삭제 요청·플랫폼 신고 기록</strong></li>\n<li><strong>고소장·진정서 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사실 적시 명예훼손에서 공익성·진실성 입증책임은 명예훼손 행위를 한 측에 있는 영역이므로, 폭로된 내용이 순수한 사적 영역의 일이고 공익 목적이 없다는 정황을 정리하는 것이 핵심. 게시물 캡처·URL·전파 범위 자료를 신속히 확보해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>공적/사적 영역</strong> — 공적 관심 사안인지, 순수한 사적 영역인지.</li>\n<li><strong>공익 목적</strong> — 오로지 공공의 이익을 위한 것인지, 사적 보복인지.</li>\n<li><strong>진실성·상당한 이유</strong> — 적시 사실의 진실 여부·믿을 상당한 이유.</li>\n<li><strong>입증책임</strong> — 위법성조각 사유의 입증책임이 행위자 측에 있음.</li>\n<li><strong>전파 가능성</strong> — 공연성·다수 전파에 따른 명예 침해 정도.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 사실 적시 명예훼손 위법성조각 요건과 입증책임',
        summary:
          '대법원 2021다270654(대법원, 2024.05.09 선고) 영역에서 법원은 언론매체가 사실을 적시해 개인의 명예를 훼손하더라도 공공의 이해에 관한 사항으로서 그 목적이 오로지 공공의 이익을 위한 것일 때에는 적시 사실이 진실이라는 증명이 있거나 진실이라고 믿을 상당한 이유가 있으면 위법성이 없고, 그에 대한 입증책임은 명예훼손 행위를 한 측에 있으며, 표현으로 명예를 훼손당하는 피해자가 공적 인물인지 사적 인물인지, 표현이 공적 관심 사안인지 순수한 사적 영역에 속하는지에 따라 심사기준에 차이를 두어야 한다고 판시했습니다. 전 연인 사생활 폭로 사안에서도 공익 목적·입증책임 구조를 검토해볼 수 있습니다.',
        takeaway: '사적 영역 폭로 + 다수 전파 + 사실 일부 포함 결합 시 공공의 이해·위법성조각·입증책임 검토 영역 — 변호사 상담·고소·분쟁조정 검토 권장.',
      },
    ],
    faq: [
      {
        question: '사실을 폭로해도 명예훼손이 되나요?',
        answer:
          '<strong>사실 적시도 명예훼손이 될 수 있고, 위법성조각은 공익 목적·진실성 요건을 갖춰야 하는 영역입니다.</strong> 사적 영역·공익 부재 정황을 정리.',
      },
      {
        question: '위법성이 없어지려면 누가 입증해야 하나요?',
        answer:
          '<strong>공익성·진실성 등 위법성조각 사유의 입증책임은 명예훼손 행위를 한 측에 있는 영역입니다.</strong> 피해 측은 사적 영역·공익 부재 자료를 정리.',
      },
      {
        question: '순수한 사생활이면 더 보호되나요?',
        answer:
          '<strong>순수한 사적 영역의 일은 공적 관심 사안보다 심사기준이 엄격하게 적용될 수 있는 영역입니다.</strong> 사적 영역 정황을 정리.',
      },
      {
        question: '글을 빨리 내리게 할 수 있나요?',
        answer:
          '<strong>플랫폼 삭제 요청·임시조치 등을 검토할 수 있는 영역입니다.</strong> 게시물 URL·캡처를 먼저 확보.',
      },
      {
        question: '형사·민사를 같이 할 수 있나요?',
        answer:
          '<strong>형사 고소와 민사 손해배상·분쟁조정을 병행 검토할 수 있는 영역입니다.</strong> 피해 입증 자료를 함께 정리.',
      },
    ],
    cta: { text: '삭제·합의·방어 포인트, AI로 먼저 점검하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '사실적시 명예훼손 대응', href: '/guide/defamation/defamation-true-fact-defense-track' },
      { label: '온라인 게시글 삭제 요청', href: '/guide/defamation/defamation-online-post-deletion' },
      { label: '사생활 침해 대응', href: '/guide/defamation/defamation-privacy-invasion-track' },
      { label: '정보통신망법 명예훼손', href: '/guide/defamation/defamation-network-act-track' },
      { label: '명예훼손 손해배상 청구', href: '/guide/defamation/defamation-damages-claim-track' },
    ],
  },

  // ─── 8. defamation-workplace-rumor-coworker-falsely-accused-defense ───
  {
    domain: 'defamation',
    slug: 'defamation-workplace-rumor-coworker-falsely-accused-defense',
    keyword: '직장 내 사실 적시 명예훼손 공익성 방어',
    questionKeyword: '직장에서 동료의 부적절한 업무 처리를 상급자에게 알렸는데, 그 동료가 저를 명예훼손으로 신고했어요. 공공의 이익을 위한 사실 적시라면 처벌되지 않는다는데 제 경우는 어떻게 다툴 수 있나요?',
    ctaKeyword: '직장 내 사실 적시 명예훼손 공익성 방어 정리',
    type: '판단형',
    perspective: 'accused',
    meta: {
      title: '직장 명예훼손 방어 — 5단계 공익성 조각 점검 | 로앤가이드',
      description:
        '직장에서 사실을 알렸다가 명예훼손 혐의를 받고 있다면 공공의 이익·진실성·위법성조각 5가지 방어 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"직장에서 동료의 부적절한 업무 처리나 규정 위반 정황을 발견하고, 조직의 문제를 바로잡으려는 마음에서 상급자나 관련 부서에 사실을 알린 사람입니다. 그런데 그 동료가 \'허위 사실로 명예를 훼손당했다\'며 저를 신고했어요. 저는 사실을 알린 것뿐이고 공적인 목적이었는데, 이렇게 명예훼손 혐의를 받게 되니 당황스럽습니다. 사실을 적시했더라도 공공의 이익을 위한 것이면 처벌되지 않는다는 말이 제 경우에도 적용되는지 도무지 가늠이 되지 않아 막막한 상태입니다." 형법 제307조 제1항은 공연히 사실을 적시해 사람의 명예를 훼손한 행위를 규율하고, 형법 제310조는 그 행위가 진실한 사실로서 오로지 공공의 이익에 관한 때에는 처벌하지 아니한다고 정하는 영역입니다. 판례는 입법자가 의도하지 않은 규율 공백이 있는 사안에 법규범 체계·입법 목적에 비추어 정당한 한도 내에서 유사 사안의 법규범을 적용할 수 있고, 사실 적시 명예훼손에 대한 위법성조각사유(형법 제310조)가 그와 유사한 명예훼손 행위에도 적용될 수 있다고 본 사례 흐름이 있습니다. 사실 적시 + 조직 내 보고 목적 + 명예훼손 신고 결합은 \'진실성·공공의 이익 위법성조각\' 다툼이 가능한 방어 트랙입니다. 혐의를 받고 있다면 ① 사실/의견 ② 진실성 ③ 공익 목적 ④ 위법성조각 ⑤ 절차 대응 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 구분 ② 진실 ③ 공익 ④ 조각 ⑤ 절차 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 직장 명예훼손 공익성 방어 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사실/의견·진실성·공익 목적·위법성조각·절차 대응 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사실/의견</strong> — 적시 내용이 사실인지, 의견·평가인지 구분.</li>\n<li><strong>② 진실성</strong> — 알린 내용 중요 부분이 객관적 사실과 합치되는지.</li>\n<li><strong>③ 공익 목적</strong> — 조직 문제 시정 등 공공의 이익을 위한 것인지.</li>\n<li><strong>④ 위법성조각</strong> — 진실·공익 결합 시 형법 제310조 위법성조각 검토.</li>\n<li><strong>⑤ 절차 대응</strong> — 조사·고소 절차에서 진술·증거 정리·방어.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 명예훼손 혐의를 받고 있다면 사실 적시가 진실한 사실로서 오로지 공공의 이익에 관한 때에는 위법성이 조각될 수 있는 영역. 조직 문제 시정 목적·진실성을 정리하는 것이 방어의 출발점인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 보고·근거 자료 보존 (즉시)</strong> — 보고 경위·근거 자료·교신 기록 보존.</li>\n<li><strong>2단계 — 사실/의견·진실성 정리 (1주)</strong> — 적시 사실·근거 대조, 의견 부분 구분.</li>\n<li><strong>3단계 — 공익 목적 정리 (2주)</strong> — 조직 문제 시정·공공 이익 목적 정황 정리.</li>\n<li><strong>4단계 — 조사·고소 대응 (소환·조사 시)</strong> — 위법성조각(형법 제310조) 주장, 진술 정리.</li>\n<li><strong>5단계 — 합의·처분 검토 (절차 진행 후)</strong> — 합의·불기소 등 절차 진행 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 명예훼손 고소당했을 때 대응, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">직장 내 사실 적시 명예훼손 공익성 방어 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=defamation" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 진실성·공익·절차 갈래입니다.</strong></p>\n<ul>\n<li><strong>보고·신고 경위 자료 (전달 경로·상대방)</strong></li>\n<li><strong>적시 사실의 근거 자료 (규정 위반·업무 처리 입증)</strong></li>\n<li><strong>사실 부분·의견 부분 구분 메모</strong></li>\n<li><strong>공익 목적 정황 자료 (조직 문제 시정 의도)</strong></li>\n<li><strong>교신·면담 기록 (보고 맥락)</strong></li>\n<li><strong>고소장·출석요구서 사본</strong></li>\n<li><strong>진술 요지·방어 메모</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 사실 적시가 진실한 사실로서 오로지 공공의 이익에 관한 때에는 위법성이 조각될 수 있는 영역이므로, 알린 내용의 근거 자료와 조직 문제 시정이라는 공익 목적 정황을 함께 정리하는 것이 방어의 핵심. 사적 감정·보복 목적이 아니었다는 맥락 자료도 모아두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>사실/의견 구분</strong> — 적시 내용이 사실인지, 의견·평가인지.</li>\n<li><strong>진실성</strong> — 중요 부분이 객관적 사실과 합치되는지.</li>\n<li><strong>공익 목적</strong> — 오로지 공공의 이익을 위한 것인지, 사적 목적인지.</li>\n<li><strong>전달 범위</strong> — 보고 상대방·전파 범위와 공연성.</li>\n<li><strong>위법성조각</strong> — 진실·공익 결합 시 형법 제310조 적용 여부.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신고 기관</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>경찰 사이버범죄 신고시스템 ECRM (ecrm.police.go.kr)</strong></li>\n<li><strong>방송통신심의위원회 1377</strong></li>\n<li><strong>개인정보 분쟁조정위원회 1833-6972</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 위법성조각사유의 유추적용과 공공의 이익 심사',
        summary:
          '대법원 2023도13333(대법원, 2024.04.16 선고) 영역에서 법원은 입법에도 불구하고 입법자가 의도하지 않았던 규율의 공백이 있는 사안에 대해 법규범의 체계·입법 의도와 목적 등에 비추어 정당하다고 평가되는 한도 내에서 유사 사안의 법규범을 적용할 수 있고, 사실 적시 명예훼손(형법 제307조 제1항)에 대한 위법성조각사유를 규정한 형법 제310조가 그와 본질적 차이가 없는 명예훼손 행위에도 유추적용되며, 문제 되는 행위가 \'공공의 이익에 관한 때\'에 해당하는지를 함께 심사해야 한다고 판시했습니다. 직장 내 사실 적시 보고 사안에서도 공익성·위법성조각을 검토해볼 수 있습니다.',
        takeaway: '사실 적시 + 조직 내 보고 목적 + 명예훼손 신고 결합 시 진실성·공공의 이익 위법성조각 검토 영역 — 혐의를 받고 있다면 변호사 상담·진술 정리 권장.',
      },
    ],
    faq: [
      {
        question: '사실을 알린 것뿐인데 명예훼손이 되나요?',
        answer:
          '<strong>사실 적시도 명예훼손이 될 수 있으나 진실·공익 목적이면 위법성이 조각될 수 있는 영역입니다.</strong> 혐의를 받고 있다면 근거 자료와 공익 목적을 정리.',
      },
      {
        question: '공공의 이익은 어떻게 인정되나요?',
        answer:
          '<strong>조직 문제 시정 등 공공 이익 목적인지, 사적 감정·보복인지가 함께 심사되는 영역입니다.</strong> 보고 경위·목적 정황을 정리.',
      },
      {
        question: '상급자에게만 말했는데도 공연성이 있나요?',
        answer:
          '<strong>전달 상대방·전파 가능성에 따라 공연성이 판단되는 영역입니다.</strong> 전달 경로·범위 자료를 정리.',
      },
      {
        question: '조사에서는 어떻게 대응하나요?',
        answer:
          '<strong>위법성조각(진실·공익) 주장과 진술 일관성이 중요한 영역입니다.</strong> 진술 요지·근거 자료를 미리 정리.',
      },
      {
        question: '합의하면 끝나나요?',
        answer:
          '<strong>합의·처분 여부는 사안에 따라 다른 영역입니다.</strong> 합의 조건·진행 상황을 신중히 검토.',
      },
    ],
    cta: { text: '명예훼손 고소당했을 때 대응, AI로 정리하기', link: '/chat?domain=defamation' },
    internalLinks: [
      { label: '명예훼손 고소 대응', href: '/guide/defamation/defamation-accusation-response-track' },
      { label: '공공의 이익 위법성조각', href: '/guide/defamation/defamation-public-interest-track' },
      { label: '사실적시 명예훼손 방어', href: '/guide/defamation/defamation-true-fact-defense-track' },
      { label: '직장 내 명예훼손', href: '/guide/defamation/defamation-workplace-track' },
      { label: '명예훼손 합의·처분', href: '/guide/defamation/defamation-settlement-track' },
    ],
  },

  // ─── 9. inheritance-overseas-asset-foreign-account-division-track ───
  {
    domain: 'inheritance',
    slug: 'inheritance-overseas-asset-foreign-account-division-track',
    keyword: '해외자산 상속 취득 주택 거주기간 세제',
    questionKeyword: '돌아가신 부모님이 해외 계좌·국내 주택 등 자산을 남기셨어요. 상속으로 받은 주택을 나중에 팔 때 거주기간에 따른 세금 공제가 어떻게 적용되는지, 해외자산 분할은 어떻게 정리해야 하는지 막막합니다.',
    ctaKeyword: '해외자산 상속 취득 주택 세제·분할 정리',
    type: '절차형',
    perspective: 'neutral',
    meta: {
      title: '해외자산 상속 — 5단계 분할·거주기간 세제 점검 | 로앤가이드',
      description:
        '해외 계좌·상속 취득 주택의 분할과 양도 시 거주기간 장기보유 특별공제 세제 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"돌아가신 부모님이 국내 주택과 함께 해외 계좌·자산을 남기셔서, 상속인들끼리 어떻게 나누고 정리해야 할지 막막한 상황입니다. 특히 상속으로 받은 주택을 나중에 팔게 되면 거주기간에 따라 세금 공제가 달라진다는데, 상속으로 취득한 경우에도 같은 기준이 적용되는지, 해외에 있는 자산은 어디서부터 정리해야 하는지 도무지 가늠이 되지 않아요. 채무가 더 많을지 모른다는 걱정에 상속을 받을지조차 결정하기 어려운 상태입니다." 민법 제1019조는 상속인이 상속 개시를 안 날부터 3개월 내에 단순승인·한정승인·포기를 할 수 있도록 정하고, 상속세 및 증여세법은 상속개시일이 속하는 달의 말일부터 6개월 이내 상속세 신고를 규정하는 영역입니다. 또한 양도소득세에서 상속으로 취득한 주택의 장기보유 특별공제 거주기간 기준이 문제 되는 영역입니다. 판례는 소득세법상 거주기간에 따른 장기보유 특별공제에서 \'거주기간\'은 양도자가 양도자산인 주택의 취득일부터 양도일까지의 보유기간 중 해당 주택에 거주한 기간을 의미하고, 이는 주택의 취득원인이 상속인 경우에도 마찬가지라고 본 사례 흐름이 있습니다. 해외자산 + 상속 취득 주택 + 양도 세제 결합은 \'상속 분할·승인 선택·거주기간 세제\' 정리가 필요한 트랙입니다. 당사자라면 ① 재산·채무 조사 ② 승인/포기 ③ 분할 ④ 상속세 ⑤ 양도 세제 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 조사 ② 승인 ③ 분할 ④ 상속세 ⑤ 양도 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 해외자산 상속 정리 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 재산·채무 조사·승인/포기·분할·상속세·양도 세제 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 재산·채무 조사</strong> — 국내·해외 적극재산과 채무 파악(안심상속 원스톱 등).</li>\n<li><strong>② 승인/포기 (3개월 내)</strong> — 단순승인·한정승인·상속포기 선택.</li>\n<li><strong>③ 분할</strong> — 상속재산 분할 협의·해외자산 정리 방법 검토.</li>\n<li><strong>④ 상속세 (6개월 내)</strong> — 상속세 신고·납부.</li>\n<li><strong>⑤ 양도 세제</strong> — 상속 취득 주택 양도 시 거주기간 장기보유 특별공제 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 거주기간에 따른 장기보유 특별공제의 \'거주기간\'은 취득일부터 양도일까지 보유기간 중 거주한 기간을 의미하고, 취득원인이 상속인 경우에도 마찬가지로 평가될 수 있는 영역입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 가정법원·국세청·대한법률구조공단 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 재산·채무 조회 (즉시)</strong> — 안심상속 원스톱·금융조회, 해외자산 목록 정리.</li>\n<li><strong>2단계 — 승인/포기 결정 (3개월 내)</strong> — 한정승인·상속포기 여부 결정.</li>\n<li><strong>3단계 — 분할 협의 (수시)</strong> — 상속재산 분할 협의서 작성·해외자산 처리 검토.</li>\n<li><strong>4단계 — 상속세 신고 (6개월 내)</strong> — 상속세 신고·납부.</li>\n<li><strong>5단계 — 양도 세제 정리 (양도 시)</strong> — 상속 취득 주택 양도 시 거주기간 장기보유 특별공제 적용 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 상속 빚이 더 많은지, AI로 먼저 점검하기</strong></p>\n<p style="margin:0;font-size:0.95em">해외자산 상속 취득 주택 세제·분할 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=inheritance" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 조사·승인·세제 갈래입니다.</strong></p>\n<ul>\n<li><strong>가족관계증명서·기본증명서 (상속인 확정)</strong></li>\n<li><strong>안심상속 원스톱 조회 결과 (재산·채무)</strong></li>\n<li><strong>해외 계좌·자산 명세 자료</strong></li>\n<li><strong>주택 취득·거주 입증 자료 (전입·거주기간)</strong></li>\n<li><strong>상속재산 분할 협의서</strong></li>\n<li><strong>한정승인·상속포기 신청 서류 (선택 시)</strong></li>\n<li><strong>상속세 신고 자료·평가 자료</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 상속으로 취득한 주택을 양도할 때 거주기간에 따른 장기보유 특별공제의 \'거주기간\'은 취득일부터 양도일까지 보유기간 중 실제 거주한 기간을 의미하는 것으로 평가될 수 있는 영역. 전입·거주 입증 자료를 함께 정리해두는 것이 핵심이고, 한정승인·상속포기는 3개월·상속세는 6개월 기한 관리가 중요합니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>재산·채무 파악</strong> — 국내·해외 적극재산과 채무의 정확한 파악.</li>\n<li><strong>승인/포기 기한</strong> — 상속 개시를 안 날부터 3개월 기한 관리.</li>\n<li><strong>해외자산 정리</strong> — 해외 계좌·자산의 분할·처리 방법.</li>\n<li><strong>상속세 신고</strong> — 상속개시일이 속한 달 말일부터 6개월 내 신고.</li>\n<li><strong>양도 거주기간</strong> — 상속 취득 주택의 거주기간 장기보유 특별공제 적용.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>관할 가정법원 (한정승인·상속포기 신고)</strong></li>\n<li><strong>국세청 국세상담센터 126 (상속·양도세)</strong></li>\n<li><strong>정부24 안심상속 원스톱 서비스</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 상속 취득 주택 양도 시 거주기간 기준',
        summary:
          '대법원 2025두34935(대법원, 2026.01.15 선고) 영역에서 법원은 구 소득세법 제95조 제2항 단서 등에서 정하는 거주기간에 따른 장기보유 특별공제의 \'거주기간\'은 양도자가 양도자산인 주택의 취득일부터 양도일까지의 보유기간 중 해당 주택에서 거주한 기간을 의미하고, 거주요건을 추가한 개정 취지 등을 종합하면 이는 주택의 취득원인이 상속인 경우에도 마찬가지라고 판시했습니다. 해외자산과 함께 상속받은 주택을 양도하는 사안에서도 거주기간 산정 기준을 검토해볼 수 있습니다.',
        takeaway: '해외자산 + 상속 취득 주택 + 양도 세제 결합 시 분할·승인 선택·거주기간 장기보유 특별공제 검토 영역 — 변호사·세무 상담 검토 권장.',
      },
    ],
    faq: [
      {
        question: '상속으로 받은 주택도 거주기간 공제가 되나요?',
        answer:
          '<strong>거주기간 장기보유 특별공제의 거주기간은 취득일부터 양도일까지 보유기간 중 거주한 기간을 의미하고 상속 취득 시에도 마찬가지로 평가될 수 있는 영역입니다.</strong> 전입·거주 자료를 정리.',
      },
      {
        question: '해외 계좌·자산은 어떻게 정리하나요?',
        answer:
          '<strong>국내·해외 재산을 함께 파악해 분할·신고를 검토하는 영역입니다.</strong> 해외 자산 명세와 조회 결과를 정리.',
      },
      {
        question: '빚이 더 많을지 모르는데 어떻게 하나요?',
        answer:
          '<strong>재산·채무를 먼저 조회하고 한정승인·상속포기를 3개월 내에 검토하는 영역입니다.</strong> 안심상속 원스톱 조회부터 진행.',
      },
      {
        question: '상속세는 언제까지 신고하나요?',
        answer:
          '<strong>상속개시일이 속한 달의 말일부터 6개월 이내 신고하는 영역입니다.</strong> 기한 도과 전 평가·신고 자료를 준비.',
      },
      {
        question: '상속재산 분할은 꼭 협의해야 하나요?',
        answer:
          '<strong>분할 협의가 안 되면 가정법원 분할 심판을 검토하는 영역입니다.</strong> 상속인·재산 목록을 먼저 정리.',
      },
    ],
    cta: { text: '상속 빚이 더 많은지, AI로 먼저 점검하기', link: '/chat?domain=inheritance' },
    internalLinks: [
      { label: '한정승인 필요서류', href: '/guide/inheritance/inheritance-qualified-acceptance-documents' },
      { label: '상속포기 신고 절차', href: '/guide/inheritance/inheritance-renunciation-procedure' },
      { label: '상속재산 분할 협의', href: '/guide/inheritance/inheritance-division-agreement-track' },
      { label: '상속세 신고 기한', href: '/guide/inheritance/inheritance-tax-filing-deadline' },
      { label: '상속 주택 양도세', href: '/guide/inheritance/inheritance-house-transfer-tax-track' },
    ],
  },

  // ─── 10. traffic-accident-bicycle-crosswalk-pedestrian-collision-track ───
  {
    domain: 'traffic-accident',
    slug: 'traffic-accident-bicycle-crosswalk-pedestrian-collision-track',
    keyword: '자전거 횡단보도 보행자 충돌 주의의무',
    questionKeyword: '자전거를 타고 가다 횡단보도에서 보행자와 충돌하는 사고가 났어요. 자전거 운전자의 주의의무가 어디까지인지, 보행자가 다쳤을 때 과실치상 책임과 합의·배상은 어떻게 정리해야 하는지 막막합니다.',
    ctaKeyword: '자전거 횡단보도 보행자 충돌 책임·합의 정리',
    type: '판단형',
    perspective: 'neutral',
    meta: {
      title: '자전거 보행자 사고 — 5단계 주의의무·합의 점검 | 로앤가이드',
      description:
        '자전거로 횡단보도에서 보행자와 충돌해 사고가 났다면 주의의무·과실·배상·합의 5가지 트랙을 지금 확인하세요.',
    },
    intro:
      '<p>"자전거를 타고 이동하다가 횡단보도 부근에서 보행자와 부딪치는 사고가 발생한 상황입니다. 순간적으로 일어난 일이라 누구의 잘못이 더 큰지, 자전거를 탄 사람으로서 제가 지켜야 했던 주의의무가 어디까지였는지 가늠이 되지 않아요. 보행자가 다쳤다면 치료비·합의는 어떻게 정리해야 하는지, 형사 책임은 어떻게 되는지 도무지 정리가 안 돼 막막한 상태입니다." 도로교통법은 자전거를 차에 준하는 것으로 규율하면서 보행자 보호 의무 등을 정하고, 형법 제266조·제268조는 과실·업무상과실로 사람을 다치게 한 경우의 책임을 규율하는 영역입니다. 판례는 안전·주의의무가 형사 과실치사상죄의 주의의무를 구성할 수 있다고 보면서, 의무의 내용·범위는 관련 법령과 구체적 상황을 종합해 판단한다고 본 사례 흐름이 있습니다. 자전거 운전 + 횡단보도 부근 + 보행자 충돌 결합은 \'주의의무·과실 비율·배상·합의\' 정리가 필요한 트랙입니다. 당사자라면 ① 사고 경위 ② 주의의무 ③ 과실 비율 ④ 배상 ⑤ 합의·형사 5중 트랙을 검토해볼 수 있는 영역. 대응은 ① 경위 ② 의무 ③ 과실 ④ 배상 ⑤ 합의 5단계로 검토해볼 수 있습니다.</p>',
    sections: [
      {
        title: 'Q. 자전거 보행자 사고 5단계 점검',
        content:
          '<p><strong style="color:#1e3a5f">A. 사고 경위·주의의무·과실 비율·배상·합의/형사 5단계로 점검할 수 있습니다.</strong></p>\n<ul>\n<li><strong>① 사고 경위</strong> — 충돌 지점·신호·속도·진행 방향 등 경위 정리.</li>\n<li><strong>② 주의의무</strong> — 자전거 운전자의 보행자 보호·전방 주시 등 주의의무 범위.</li>\n<li><strong>③ 과실 비율</strong> — 자전거·보행자 양측 과실 비율 검토.</li>\n<li><strong>④ 배상</strong> — 치료비·일실수입·위자료 등 손해 산정.</li>\n<li><strong>⑤ 합의·형사</strong> — 합의·보험 처리와 과실치상 형사 책임 검토.</li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">핵심: 판례 흐름에서 안전·주의의무는 과실치사상죄의 주의의무를 구성할 수 있고, 의무의 내용·범위는 관련 법령과 구체적 상황을 종합해 판단하는 영역. 자전거-보행자 사고에서도 주의의무 위반·과실 비율이 핵심인 트랙입니다.</blockquote>',
      },
      {
        title: '📌 이렇게 진행됩니다 — 5단계',
        content:
          '<p><strong>A. 경찰·손해보험협회 안내 절차 흐름입니다.</strong></p>\n<ol>\n<li><strong>1단계 — 현장·증거 보존 (즉시)</strong> — 블랙박스·CCTV·현장 사진·목격자 진술 확보.</li>\n<li><strong>2단계 — 사고 경위·주의의무 정리 (1주)</strong> — 신호·속도·진행 방향·주의의무 위반 정황 정리.</li>\n<li><strong>3단계 — 과실 비율·손해 산정 (2~3주)</strong> — 양측 과실 비율, 치료비·일실수입·위자료 산정.</li>\n<li><strong>4단계 — 보험·합의 (치료 경과 후)</strong> — 자전거보험·일상생활배상책임 등 보험 처리, 합의 진행.</li>\n<li><strong>5단계 — 형사 대응 (조사 시)</strong> — 과실치상 조사 대응, 합의·처분 검토.</li>\n</ol>\n<div style="margin:24px 0;padding:20px;background:linear-gradient(135deg,#fef9e7,#fdf2d5);border-left:5px solid #f4c430;border-radius:8px">\n<p style="margin:0 0 8px;font-size:1.05em"><strong>💬 교통사고 합의 전 체크리스트, AI로 정리하기</strong></p>\n<p style="margin:0;font-size:0.95em">자전거 횡단보도 보행자 충돌 책임·합의 트랙을 AI가 안내합니다.</p>\n<a href="/chat?domain=traffic-accident" style="display:inline-block;margin-top:12px;padding:10px 24px;background:#f4c430;color:#1a1a1a;border-radius:6px;text-decoration:none;font-weight:bold">AI로 정리하기 →</a>\n</div>',
      },
      {
        title: '📋 준비서류 체크리스트 — 7가지',
        content:
          '<p><strong>A. 경위·과실·배상 갈래입니다.</strong></p>\n<ul>\n<li><strong>블랙박스·CCTV 영상 (사고 경위)</strong></li>\n<li><strong>현장 사진·도로 상황 자료 (충돌 지점·신호)</strong></li>\n<li><strong>목격자 진술·연락처</strong></li>\n<li><strong>진단서·치료비 영수증 (보행자 부상 정도)</strong></li>\n<li><strong>자전거보험·일상생활배상책임보험 증권</strong></li>\n<li><strong>과실 비율·손해 산정 자료</strong></li>\n<li><strong>합의서·내용증명 사본</strong></li>\n</ul>\n<blockquote style="border-left:4px solid #ddd;padding:8px 12px;color:#555">팁: 자전거는 도로교통법상 차에 준해 규율되는 영역이므로 신호·진행 방향·전방 주시 등 주의의무 위반 여부가 과실 비율 판단의 핵심. 블랙박스·CCTV·현장 사진 등 객관적 자료를 신속히 확보하고, 가입한 자전거보험·일상생활배상책임보험을 함께 점검해두는 것이 좋습니다.</blockquote>',
      },
      {
        title: '⚠️ 다툼 포인트 + 🏛️ 신청·상담 경로',
        content:
          '<p><strong style="color:#1e3a5f">A. 자주 발생하는 다툼과 무료 상담 기관입니다.</strong></p>\n<ul>\n<li><strong>주의의무 위반</strong> — 신호·진행 방향·전방 주시 등 주의의무 위반 여부.</li>\n<li><strong>과실 비율</strong> — 자전거·보행자 양측 과실 비율.</li>\n<li><strong>손해 범위</strong> — 치료비·일실수입·위자료 등 손해 산정.</li>\n<li><strong>보험 적용</strong> — 자전거보험·일상생활배상책임보험 적용 여부.</li>\n<li><strong>형사 책임</strong> — 과실치상 책임과 합의·처분.</li>\n</ul>\n<p><strong style="color:#1e3a5f">🏛️ 무료 상담·신청 경로</strong></p>\n<ul>\n<li><strong>대한법률구조공단 132</strong></li>\n<li><strong>손해보험협회 (과실·보상 안내)</strong></li>\n<li><strong>한국교통안전공단 1577-0990</strong></li>\n<li><strong>경찰 교통사고 접수·조사 (112)</strong></li>\n</ul>',
      },
    ],
    cases: [
      {
        title: '판례 — 안전·주의의무가 과실치사상죄 주의의무를 구성하는지',
        summary:
          '대법원 2025도4428(대법원, 2025.08.14 선고) 영역에서 법원은 관계 법령상 부과된 안전·보건조치의무가 업무상과실치사상죄의 주의의무를 구성할 수 있고, 그 의무의 내용·범위는 관련 법령과 작업 내용·장소 등 구체적 상황을 종합해 판단해야 한다고 판시했습니다. 안전·주의의무 위반이 형사상 과실 책임으로 이어질 수 있다는 법리 흐름으로, 자전거-보행자 충돌 사안에서도 자전거 운전자의 주의의무 내용·범위와 위반 여부, 그것이 과실치상 책임으로 이어지는지를 검토해볼 수 있는 영역입니다.',
        takeaway: '자전거 운전 + 횡단보도 부근 + 보행자 충돌 결합 시 주의의무 위반·과실 비율·배상·합의 검토 영역 — 변호사 상담·보험·합의 검토 권장.',
      },
    ],
    faq: [
      {
        question: '자전거도 보행자 사고에서 책임을 지나요?',
        answer:
          '<strong>자전거는 도로교통법상 차에 준해 규율되어 주의의무 위반 시 책임이 검토되는 영역입니다.</strong> 신호·진행 방향·주의의무 정황을 정리.',
      },
      {
        question: '과실 비율은 어떻게 정해지나요?',
        answer:
          '<strong>충돌 지점·신호·속도·양측 주의의무 위반 정도를 종합해 과실 비율을 검토하는 영역입니다.</strong> 블랙박스·CCTV 자료를 확보.',
      },
      {
        question: '보행자 치료비는 누가 부담하나요?',
        answer:
          '<strong>과실 비율에 따라 손해를 분담하며 보험 적용 여부가 함께 검토되는 영역입니다.</strong> 진단서·치료비 자료와 보험 증권을 정리.',
      },
      {
        question: '자전거보험이 있으면 처리되나요?',
        answer:
          '<strong>자전거보험·일상생활배상책임보험 적용 여부를 함께 점검하는 영역입니다.</strong> 가입 보험 증권을 확인.',
      },
      {
        question: '형사 책임도 있나요?',
        answer:
          '<strong>보행자가 다쳤다면 과실치상 책임이 검토될 수 있는 영역입니다.</strong> 합의·처분 진행 상황을 신중히 검토.',
      },
    ],
    cta: { text: '교통사고 합의 전 체크리스트, AI로 정리하기', link: '/chat?domain=traffic-accident' },
    internalLinks: [
      { label: '교통사고 과실 비율', href: '/guide/traffic-accident/traffic-accident-fault-ratio-track' },
      { label: '자전거 사고 대응', href: '/guide/traffic-accident/traffic-accident-bicycle-track' },
      { label: '보행자 사고 합의', href: '/guide/traffic-accident/traffic-accident-pedestrian-settlement' },
      { label: '치료비·손해 산정', href: '/guide/traffic-accident/traffic-accident-damages-calculation' },
      { label: '교통사고 합의 체크리스트', href: '/guide/traffic-accident/traffic-accident-settlement-checklist' },
    ],
  },
];
